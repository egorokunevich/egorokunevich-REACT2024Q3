import { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar';
import PokeApi, { Pokemon } from 'api/PokeApi';
import ResultsList from 'components/ResultsList';
import styles from './SearchPage.module.scss';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import { useFetching } from 'hooks/useFetching';
import { useSearchParams } from 'react-router-dom';
import useLocalStorage, { LocalStorageKeys } from 'hooks/useLocalStorage';

function SearchPage() {
  const [displayedPokemons, setDisplayedPokemons] = useState<Pokemon[]>([]);

  const [notFound, setNotFound] = useState(false);

  const [fetchPokemons, arePokemonsLoading] = useFetching(handleSearch);

  const [searchParams, setSearchParams] = useSearchParams();
  const limitParam = searchParams.get('limit') || '12';
  const pageParam = searchParams.get('page') || '1';

  const [offsetParam, setOffsetParam] = useState(
    Math.ceil((+pageParam - 1) * +limitParam)
  );

  const [queryParam, setQueryParam] = useLocalStorage(
    LocalStorageKeys.LastQuery,
    ''
  );

  async function handleSearch(query: string) {
    setSearchParams({ page: pageParam });
    setNotFound(false);
    setQueryParam(query);
    const pokemons = await PokeApi.getPokemonData(
      query,
      +limitParam,
      +offsetParam
    );
    if (pokemons && pokemons.length > 0) {
      console.log(pokemons);
      setDisplayedPokemons([...pokemons]);
    } else {
      setNotFound(true);
    }
  }

  useEffect(() => {
    fetchPokemons(queryParam.toString());
  }, [offsetParam]);

  useEffect(() => {
    console.log('init', queryParam);
    fetchPokemons(queryParam.toString());
  }, []);

  const updatePage = (pageNumber: number) => {
    setSearchParams({ page: pageNumber.toString() });
    setOffsetParam((pageNumber - 1) * +limitParam);
  };

  function renderResults() {
    if (arePokemonsLoading) {
      return <Loader />;
    } else {
      if (notFound) {
        return (
          <div className={styles.notFoundWrapper}>
            <div className={styles.notFoundMessage}>
              There is no such Pokemon!
            </div>
          </div>
        );
      } else {
        return (
          <>
            <ResultsList items={displayedPokemons} />
            <Pagination
              limit={+limitParam}
              totalCount={PokeApi.totalCount}
              currentPage={+pageParam}
              handleClick={(pageNumber: number) => {
                updatePage(pageNumber);
              }}
            />
          </>
        );
      }
    }
  }
  return (
    <div className={styles.pageContainer}>
      <SearchBar onSearch={fetchPokemons} />
      {renderResults()}
    </div>
  );
}

export default SearchPage;
