import { Component } from "react";
import SearchBar from "components/SearchBar";
import PokeApi from "api/PokeApi";
import ResultsList from "components/ResultsList";
import styles from "./SearchPage.module.scss";
import Loader from "components/Loader";

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

class SearchPage extends Component<{}, SearchPageState> {
  state: SearchPageState = {
    searchResults: [],
    isLoading: false,
    notFound: false,
  };

  handleSearch = async (query: string) => {
    localStorage.setItem("lastQuery", query);
    this.setState({ isLoading: true });
    this.setState({ notFound: false });
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
          }),
        );

        const fulfilled = pokemons.filter((item) => {
          return item !== undefined;
        });

        this.setState({
          searchResults: [...fulfilled],
        });
      }
    } else {
      // If there is a query — show the searched item
      const pokemon = await PokeApi.getPokemon(query.toLowerCase());
      if (pokemon) {
        this.setState({
          searchResults: [
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
          ],
        });
      } else {
        this.setState({ notFound: true });
      }
    }
    this.setState({ isLoading: false });
  };

  renderLoader() {
    if (this.state.isLoading) {
      return <Loader />;
    } else {
      return this.renderResults();
    }
  }

  renderResults() {
    if (this.state.notFound) {
      return (
        <div className={styles.notFoundWrapper}>
          <div className={styles.notFoundMessage}>
            There is no such Pokemon!
          </div>
        </div>
      );
    } else {
      return <ResultsList items={this.state.searchResults} />;
    }
  }

  render() {
    return (
      <div className={styles.pageContainer}>
        <SearchBar onSearch={this.handleSearch} />
        {this.renderLoader()}
      </div>
    );
  }
}

export default SearchPage;
