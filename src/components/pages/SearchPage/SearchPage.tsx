'use client';

import SearchBar from '@/components/SearchBar';
import ResultsList from '@/components/ResultsList';
import styles from './SearchPage.module.scss';
import Pagination from '@/components/Pagination';
import useTabTitle, { TabTitles } from '@/hooks/useTabTitle';
import { Pokemon } from '@/api/reduxApi';
import { useAppSelector } from '@/hooks/reduxHooks';
import { getSelectedPokemonsSelector } from '@/store/selectors';
import useLocalStorage, { LocalStorageKeys } from '@/hooks/useLocalStorage';
import Flyout from '@/components/Flyout';
import { useParams, useRouter } from 'next/navigation';

export const PAGE_LIMIT = 12;

function SearchPage({
  pokemons,
  totalCount,
}: {
  pokemons: Pokemon[];
  totalCount: number;
}) {
  const router = useRouter();
  const params = useParams<{ page: number; search: string }>();
  const currentPage = params.query || 1;

  const [searchValue, setSearchValue] = useLocalStorage(
    LocalStorageKeys.LastQuery,
    ''
  );

  useTabTitle(TabTitles.PokemonWiki);

  const updatePage = (pageNumber: number) => {
    router.replace({ query: { ...router.query, page: pageNumber } });
  };

  const selectedPokemons = useAppSelector(getSelectedPokemonsSelector);

  const shouldRenderPagination = pokemons && pokemons.length > 1;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.wrapper}>
        <div
          className={styles.mainSection}
          onClick={() => {
            if (router.query.name) {
              router.push(
                `/?page=${currentPage}${searchValue ? `&search=${searchValue}` : ''}`
              );
            }
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
        {selectedPokemons.length > 0 && (
          <Flyout selectedPokemons={selectedPokemons} />
        )}
      </div>
    </div>
  );
}

export default SearchPage;
