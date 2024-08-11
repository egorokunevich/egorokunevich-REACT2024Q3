import SearchBar from '../../components/SearchBar';
import ResultsList from '../../components/ResultsList';
import styles from './SearchPage.module.scss';
// import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
  useSearchParams,
} from '@remix-run/react';
// import useTabTitle, { TabTitles } from '@/hooks/useTabTitle';
// import { Pokemon, Pokemons } from '../../api/api';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useEffect } from 'react';
import { setCurrentPokemons } from '../../store/pokemonsSlice';
import { getSelectedPokemonsSelector } from '../../store/selectors';
import Flyout from '../../components/Flyout';
import { getPagesCount } from '@/utils/getPagesCount';
import { loader } from '@/routes/_index';

export const PAGE_LIMIT = 12;

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const currentPage = +(searchParams.get('page') || '1');
  const searchQuery = searchParams.get('search') || '';

  // useTabTitle(TabTitles.PokemonWiki);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const updatePage = (pageNumber: number) => {
    setSearchParams({ page: pageNumber.toString() });
  };

  // const currentPokemons = useAppSelector(getCurrentPokemonsSelector);
  const loaderData = useLoaderData<typeof loader>();
  const pokemons = loaderData.pokemons;
  const selectedPokemons = useAppSelector(getSelectedPokemonsSelector);

  useEffect(() => {
    if (pokemons) {
      dispatch(setCurrentPokemons(pokemons));
    }

    // if (isError) {
    //   dispatch(setCurrentPokemons([]));
    // }
  }, [pokemons]);

  // if (isLoading) {
  //   return <Loader />;
  // }
  const shouldRenderPagination = pokemons && pokemons.length > 1;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.wrapper}>
        <div
          className={styles.mainSection}
          onClick={() => {
            if (params.pokeName) {
              navigate(
                `/?page=${currentPage}${searchQuery ? `&search=${searchQuery}` : ''}`
              );
            }
          }}
          data-testid="searchPage-mainSection"
        >
          <SearchBar
            onSearch={(query: string) => {
              navigate(
                `/?page=${currentPage}${query ? `&search=${query}` : ''}`
              );
            }}
          />
          {/* {isFetching ? (
            <Loader />
          ) : (
            <> */}
          <ResultsList />
          {shouldRenderPagination && (
            <Pagination
              totalPages={getPagesCount(loaderData.totalCount, PAGE_LIMIT)}
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
