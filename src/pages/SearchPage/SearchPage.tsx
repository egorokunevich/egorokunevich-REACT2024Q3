import { useState } from 'react';
import SearchBar from 'components/SearchBar';
import PokeApi from 'api/PokeApi';
import ResultsList from 'components/ResultsList';
import styles from './SearchPage.module.scss';
import Loader from 'components/Loader';

interface SearchPageState {
  isLoading: boolean;
  notFound: boolean;
  searchResults: {
    name: string;
    sprites: {
      front_default: string;
      front_shiny: string;
    };
    height: number;
    weight: number;
    id?: number;
    url?: string;
  }[];
}

function SearchPage() {
  const [state, setState] = useState<SearchPageState>({
    searchResults: [],
    isLoading: false,
    notFound: false,
  });

  async function handleSearch(query: string) {
    // localStorage.setItem('lastQuery', query);
    setState((prevState) => {
      const newState = { ...prevState };
      newState.isLoading = true;
      newState.notFound = false;
      return newState;
    });
    // If the query is empty — show the list of pokemons
    if (!query.trim().length) {
      const results = (await PokeApi.getPokemons())?.results;

      if (results) {
        const pokemons = await Promise.all(
          results.map(async (item) => {
            const pokemon = await PokeApi.getPokemon(item.name);
            if (pokemon) {
              return pokemon;
            }
          })
        );

        const fulfilled = pokemons.filter((item) => {
          return item !== undefined;
        });
        setState((prevState) => {
          const newState = { ...prevState };
          newState.searchResults = [...fulfilled];
          return newState;
        });
      }
    } else {
      // If there is a query — show the searched item
      // const pokemon = await PokeApi.getPokemon(query.toLowerCase());
      const pokemon = await PokeApi.getPokemon(query.toLowerCase());
      if (pokemon) {
        setState((prevState) => {
          const newState = { ...prevState };
          newState.searchResults = [
            {
              name: pokemon.name,
              id: pokemon.id,
              sprites: {
                front_default: pokemon.sprites.front_default,
                front_shiny: pokemon.sprites.front_shiny,
              },
              height: pokemon.height,
              weight: pokemon.weight,
            },
          ];
          return newState;
        });
      } else {
        setState((prevState) => {
          const newState = { ...prevState };
          newState.notFound = true;
          return newState;
        });
      }
    }
    setState((prevState) => {
      const newState = { ...prevState };
      newState.isLoading = false;
      return newState;
    });
  }

  function renderLoader() {
    if (state.isLoading) {
      return <Loader />;
    } else {
      return renderResults();
    }
  }

  function renderResults() {
    if (state.notFound) {
      return (
        <div className={styles.notFoundWrapper}>
          <div className={styles.notFoundMessage}>
            There is no such Pokemon!
          </div>
        </div>
      );
    } else {
      return <ResultsList items={state.searchResults} />;
    }
  }

  return (
    <div className={styles.pageContainer}>
      <SearchBar onSearch={handleSearch} />
      {renderLoader()}
    </div>
  );
}

export default SearchPage;
