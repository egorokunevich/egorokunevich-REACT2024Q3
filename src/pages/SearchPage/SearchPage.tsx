import { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar';
import PokeApi, { Pokemon } from 'api/PokeApi';
import ResultsList from 'components/ResultsList';
import styles from './SearchPage.module.scss';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import useLocalStorage, { LocalStorageKeys } from 'hooks/useLocalStorage';
import { useFetching } from 'hooks/useFetching';

function SearchPage() {
  const [displayedPokemons, setDisplayedPokemons] = useState<Pokemon[]>([]);

  // const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [limit] = useState(12); // Items per page
  const [offset, setOffset] = useState(0);
  const [lastOffset, setLastOffset, saveLastOffset] = useLocalStorage(
    LocalStorageKeys.LastOffset,
    0
  );

  const [currentPage, setCurrentPage] = useState(
    Math.ceil(+lastOffset / limit)
  );
  const [lastQuery, setLastQuery] = useLocalStorage(
    LocalStorageKeys.LastQuery,
    ''
  );

  const [fetchPokemons, arePokemonsLoading] = useFetching(handleSearch);

  async function handleSearch(query: string) {
    setLastQuery(query);
    // setIsLoading(true);
    setNotFound(false);

    const pokemons = await PokeApi.getPokemonData(query, limit, offset);
    if (pokemons && pokemons.length > 0) {
      setDisplayedPokemons([...pokemons]);
    } else {
      setNotFound(true);
    }
    // setIsLoading(false);
  }

  useEffect(() => {
    setOffset(+lastOffset);
    fetchPokemons(lastQuery.toString());
  }, [offset]);

  const updatePage = (pageNumber: number) => {
    const newOffset = limit * (pageNumber - 1);
    setOffset(newOffset);
    setCurrentPage(pageNumber);
    setLastOffset(newOffset);
    saveLastOffset(newOffset);
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
              limit={limit}
              totalCount={PokeApi.totalCount}
              currentPage={+currentPage}
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
