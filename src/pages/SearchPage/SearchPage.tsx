import { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar';
import PokeApi, { Pokemon } from 'api/PokeApi';
import ResultsList from 'components/ResultsList';
import styles from './SearchPage.module.scss';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import { useFetching } from 'hooks/useFetching';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import useLocalStorage, { LocalStorageKeys } from 'hooks/useLocalStorage';

function SearchPage() {
  const [displayedPokemons, setDisplayedPokemons] = useState<Pokemon[]>([]);

  const [notFound, setNotFound] = useState(false);

  const [fetchPokemons, arePokemonsLoading] = useFetching(handleSearch);

  const [searchParams, setSearchParams] = useSearchParams();
  const limitParam = searchParams.get('limit') || '12';
  const pageParam = searchParams.get('page') || '1';
  const [currentPage, setCurrentPage] = useState(pageParam);

  const [offsetParam, setOffsetParam] = useState(
    Math.ceil((+pageParam - 1) * +limitParam)
  );

  const [queryParam, setQueryParam, saveQueryParam] = useLocalStorage(
    LocalStorageKeys.LastQuery,
    ''
  );

  const navigate = useNavigate();

  async function handleSearch(query: string) {
    setSearchParams({ page: pageParam });
    setNotFound(false);
    setQueryParam(query);
    saveQueryParam(query);
    const pokemons = await PokeApi.getPokemonData(
      query,
      +limitParam,
      +offsetParam
    );
    if (pokemons && pokemons.length > 0) {
      setDisplayedPokemons([...pokemons]);
    } else {
      setNotFound(true);
    }
  }

  useEffect(() => {
    fetchPokemons(queryParam.toString());
  }, [offsetParam]);

  useEffect(() => {
    fetchPokemons(queryParam.toString());
  }, []);

  const updatePage = (pageNumber: number) => {
    setCurrentPage(pageNumber.toString());
    setSearchParams({ page: pageNumber.toString() });
    setOffsetParam((pageNumber - 1) * +limitParam);
  };

  const handleNotFound = () => {
    if (notFound) {
      return (
        <div className={styles.notFoundWrapper}>
          <div className={styles.notFoundMessage}>
            There is no such Pokemon!
          </div>
        </div>
      );
    }
    return (
      <>
        <ResultsList items={displayedPokemons} />
        <Pagination
          limit={+limitParam}
          totalCount={PokeApi.totalCount}
          currentPage={+currentPage}
          handleClick={(pageNumber: number) => {
            updatePage(pageNumber);
          }}
        />
      </>
    );
  };

  function renderResults() {
    if (arePokemonsLoading) {
      return <Loader />;
    }
    return (
      <>
        <div className={styles.wrapper}>
          <div
            className={styles.mainSection}
            onClick={() => {
              navigate(`/?page=${pageParam}`);
            }}
          >
            <SearchBar onSearch={fetchPokemons} />
            {handleNotFound()}
          </div>
          <Outlet />
        </div>
      </>
    );
  }
  return <div className={styles.pageContainer}>{renderResults()}</div>;
}

export default SearchPage;
