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
import { useSearchParams, useRouter, useParams } from 'next/navigation';

export const PAGE_LIMIT = 12;

function SearchPage({
  pokemons,
  totalCount,
}: {
  pokemons: Pokemon[];
  totalCount: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const currentPage = searchParams.get('page') || 1;

  const [searchValue, setSearchValue] = useLocalStorage(
    LocalStorageKeys.LastQuery,
    ''
  );

  useTabTitle(TabTitles.PokemonWiki);

  const selectedPokemons = useAppSelector(getSelectedPokemonsSelector);

  const shouldRenderPagination = pokemons && pokemons.length > 1;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.wrapper}>
        <div
          className={styles.mainSection}
          onClick={() => {
            if (params.name) {
              router.replace(
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
