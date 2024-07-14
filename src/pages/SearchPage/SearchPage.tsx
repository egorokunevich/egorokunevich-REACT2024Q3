import { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar';
import PokeApi from '@/api/PokeApi';
import ResultsList from 'components/ResultsList';
import styles from './SearchPage.module.scss';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import { useFetching } from 'hooks/useFetching';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import useLocalStorage, { LocalStorageKeys } from 'hooks/useLocalStorage';
import useTabTitle, { TabTitles } from 'hooks/useTabTitle';

const PAGE_LIMIT = 12;

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get('page') || '1';
  useTabTitle(TabTitles.PokemonWiki);

  const {
    fetchFunction: fetchPokemons,
    isLoading: arePokemonsLoading,
    results,
  } = useFetching(handleSearch);
  console.log({ results });

  const [currentPage, setCurrentPage] = useState(pageParam);

  const [offsetParam, setOffsetParam] = useState(
    Math.ceil((+pageParam - 1) * PAGE_LIMIT)
  );

  const [queryParam, setQueryParam, saveQueryParam] = useLocalStorage(
    LocalStorageKeys.LastQuery,
    ''
  );

  const navigate = useNavigate();

  async function handleSearch(query: string) {
    setSearchParams({ page: pageParam });
    setQueryParam(query);
    saveQueryParam(query);

    return query.trim().length
      ? PokeApi.getPokemon(query)
      : PokeApi.getPokemons(PAGE_LIMIT, +offsetParam);
  }

  useEffect(() => {
    fetchPokemons(queryParam.toString());
  }, [offsetParam]);

  const updatePage = (pageNumber: number) => {
    setCurrentPage(pageNumber.toString());
    setSearchParams({ page: pageNumber.toString() });
    setOffsetParam((pageNumber - 1) * PAGE_LIMIT);
  };

  function renderResults() {
    if (arePokemonsLoading === 'loading') {
      return <Loader />;
    }

    const shouldRenderPagination = results && results.length > 1;
    return (
      <div className={styles.wrapper}>
        <div
          className={styles.mainSection}
          onClick={() => {
            navigate(`/?page=${pageParam}`);
          }}
        >
          <SearchBar onSearch={fetchPokemons} />
          <ResultsList items={results} />
          {shouldRenderPagination && (
            <Pagination
              limit={PAGE_LIMIT}
              currentPage={+currentPage}
              handleClick={(pageNumber: number) => {
                updatePage(pageNumber);
              }}
            />
          )}
        </div>
        <Outlet />
      </div>
    );
  }
  return <div className={styles.pageContainer}>{renderResults()}</div>;
}

export default SearchPage;
