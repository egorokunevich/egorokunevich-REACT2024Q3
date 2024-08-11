import SearchBar from '../../components/SearchBar';
import ResultsList from '../../components/ResultsList';
import styles from './SearchPage.module.scss';
// import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import { Outlet, useNavigate, useSearchParams } from '@remix-run/react';
// import useTabTitle, { TabTitles } from '@/hooks/useTabTitle';
import { Pokemon, Pokemons } from '../../api/api';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useEffect } from 'react';
import { setCurrentPokemons } from '../../store/pokemonsSlice';
import {
  getCurrentPokemonsSelector,
  getSelectedPokemonsSelector,
} from '../../store/selectors';
// import useLocalStorage, { LocalStorageKeys } from '@/hooks/useLocalStorage';
import Flyout from '../../components/Flyout';

export const PAGE_LIMIT = 12;

function SearchPage({ pokemons }: { pokemons: Pokemons | Pokemon }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get('page') || '1');

  // const [searchValue, setSearchValue] = useLocalStorage(
  //   LocalStorageKeys.LastQuery,
  //   ''
  // );

  // useTabTitle(TabTitles.PokemonWiki);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const updatePage = (pageNumber: number) => {
    setSearchParams({ page: pageNumber.toString() });
  };

  const currentPokemons = useAppSelector(getCurrentPokemonsSelector);
  const selectedPokemons = useAppSelector(getSelectedPokemonsSelector);

  useEffect(() => {
    if (pokemons) {
      if (
        (pokemons as Pokemons)?.results &&
        Array.isArray((pokemons as Pokemons).results)
      ) {
        dispatch(setCurrentPokemons((pokemons as Pokemons).results));
      } else {
        dispatch(setCurrentPokemons([pokemons as Pokemon]));
      }
    }
    // if (isError) {
    //   dispatch(setCurrentPokemons([]));
    // }
  }, [pokemons]);

  // if (isLoading) {
  //   return <Loader />;
  // }
  const shouldRenderPagination =
    pokemons && (pokemons as Pokemons)?.results?.length > 1;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.wrapper}>
        <div
          className={styles.mainSection}
          onClick={() => {
            navigate(`/?page=${currentPage}`);
          }}
          data-testid="searchPage-mainSection"
        >
          <SearchBar
            onSearch={() => {
              // setSearchValue(name);
            }}
          />
          {/* {isFetching ? (
            <Loader />
          ) : (
            <> */}
          <ResultsList items={currentPokemons} />
          {shouldRenderPagination && (
            <Pagination
              totalPages={Math.ceil((pokemons as Pokemons).count / PAGE_LIMIT)}
              currentPage={+currentPage}
              handleClick={(pageNumber: number) => {
                updatePage(pageNumber);
              }}
            />
          )}
          {/* </>
          )} */}
        </div>
        <Outlet />
        {selectedPokemons.length > 0 && (
          <Flyout selectedPokemons={selectedPokemons} />
        )}
      </div>
    </div>
  );
}

export default SearchPage;
