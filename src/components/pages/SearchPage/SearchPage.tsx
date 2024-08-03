import SearchBar from '@/components/SearchBar';
import ResultsList from '@/components/ResultsList';
import styles from './SearchPage.module.scss';
// import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import { Outlet } from 'react-router-dom';
import useTabTitle, { TabTitles } from '@/hooks/useTabTitle';
import { Pokemon } from '@/api/reduxApi';
import {
  // useAppDispatch,
  useAppSelector,
} from '@/hooks/reduxHooks';
// import { useEffect } from 'react';
// import { setCurrentPokemons } from '@/store/pokemonsSlice';
import {
  // getCurrentPokemonsSelector,
  getSelectedPokemonsSelector,
} from '@/store/selectors';
import useLocalStorage, { LocalStorageKeys } from '@/hooks/useLocalStorage';
import Flyout from '@/components/Flyout';
import { useRouter } from 'next/router';

export const PAGE_LIMIT = 12;

// const getOffset = (currentPage: number, limit: number = PAGE_LIMIT) =>
//   Math.ceil((currentPage - 1) * limit);

function SearchPage({
  pokemons,
  totalCount,
}: {
  pokemons: Pokemon[];
  totalCount: number;
}) {
  // const [searchParams, setSearchParams] = useSearchParams();
  const router = useRouter();
  // const currentPage = +(searchParams.get('page') || '1');
  const currentPage = router.query.page || 1;

  const [, setSearchValue] = useLocalStorage(LocalStorageKeys.LastQuery, '');

  useTabTitle(TabTitles.PokemonWiki);

  // const dispatch = useAppDispatch();

  const updatePage = (pageNumber: number) => {
    router.replace({ query: { ...router.query, page: pageNumber } });
    // setSearchParams({ page: pageNumber.toString() });
  };
  // const {
  //   data: pokemons,
  //   isLoading,
  //   isFetching,
  //   isError,
  // } = useGetPokemonsQuery({
  //   limit: PAGE_LIMIT,
  //   offset: getOffset(currentPage, PAGE_LIMIT),
  //   name: searchValue as string,
  // });

  // const currentPokemons = useAppSelector(getCurrentPokemonsSelector);
  const selectedPokemons = useAppSelector(getSelectedPokemonsSelector);

  // useEffect(() => {
  //   if (pokemons) {
  //     if (
  //       (pokemons as Pokemons)?.results &&
  //       Array.isArray((pokemons as Pokemons).results)
  //     ) {
  //       dispatch(setCurrentPokemons((pokemons as Pokemons).results));
  //     } else {
  //       dispatch(setCurrentPokemons([pokemons as Pokemon]));
  //     }
  //   }
  // if (isError) {
  //   dispatch(setCurrentPokemons([]));
  // }
  // }, [pokemons]);

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
            router.push(`/?page=${currentPage}`);
          }}
          data-testid="searchPage-mainSection"
        >
          <SearchBar
            onSearch={(name) => {
              setSearchValue(name);
            }}
          />

          <ResultsList items={pokemons} />
          {shouldRenderPagination && (
            <Pagination
              totalPages={Math.ceil(totalCount / PAGE_LIMIT)}
              currentPage={+currentPage}
              handleClick={(pageNumber: number) => {
                updatePage(pageNumber);
              }}
            />
          )}
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
