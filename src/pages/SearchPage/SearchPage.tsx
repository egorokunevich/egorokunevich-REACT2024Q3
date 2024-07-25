import SearchBar from 'components/SearchBar';
import ResultsList from 'components/ResultsList';
import styles from './SearchPage.module.scss';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import useTabTitle, { TabTitles } from 'hooks/useTabTitle';
import { Pokemon, Pokemons, useGetPokemonsQuery } from '@/api/reduxApi';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useEffect } from 'react';
import { setCurrentPokemons } from '@/store/pokemonsSlice';
import { getCurrentPokemonsSelector } from '@/store/selectors';
import useLocalStorage, { LocalStorageKeys } from '@/hooks/useLocalStorage';

export const PAGE_LIMIT = 12;

const getOffset = (currentPage: number, limit: number = PAGE_LIMIT) =>
  Math.ceil((currentPage - 1) * limit);

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get('page') || '1');

  // const [searchValue, setSearchValue] = useState('');
  const [searchValue, setSearchValue] = useLocalStorage(
    LocalStorageKeys.LastQuery,
    ''
  );

  useTabTitle(TabTitles.PokemonWiki);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const updatePage = (pageNumber: number) => {
    setSearchParams({ page: pageNumber.toString() });
  };
  const {
    data: pokemons,
    isLoading,
    isError,
  } = useGetPokemonsQuery({
    limit: PAGE_LIMIT,
    offset: getOffset(currentPage, PAGE_LIMIT),
    name: searchValue as string,
  });

  const currentPokemons = useAppSelector(getCurrentPokemonsSelector);

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
    if (isError) {
      dispatch(setCurrentPokemons([]));
    }
  }, [pokemons, isError]);

  if (isLoading) {
    return <Loader />;
  }
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
        >
          <SearchBar
            onSearch={(name) => {
              setSearchValue(name);
            }}
          />
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
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default SearchPage;
