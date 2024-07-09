import { Component } from "react";
import SearchBar from "components/SearchBar";
import PokeApi from "api/PokeApi";
import ResultsList from "components/ResultsList";
import styles from "./SearchPage.module.scss";
import Loader from "components/Loader";

interface SearchPageState {
  isLoading: boolean;
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

export class SearchPage extends Component<{}, SearchPageState> {
  state: SearchPageState = { searchResults: [], isLoading: false };

  handleSearch = async (query: string) => {
    localStorage.setItem("lastQuery", query);
    this.setState({ isLoading: true });
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
          searchResults: [
            // ...this.state.searchResults,
            ...fulfilled,
          ],
        });
      }
    } else {
      const pokemon = await PokeApi.getPokemon(query.toLowerCase());
      if (pokemon) {
        this.setState({
          searchResults: [
            // ...this.state.searchResults,
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
        console.log("Unknown pokemon!");
      }
    }
    this.setState({ isLoading: false });
  };

  render() {
    console.log(this.state);
    return (
      <div className={styles.pageContainer}>
        <SearchBar onSearch={this.handleSearch} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ResultsList items={this.state.searchResults} />
        )}
      </div>
    );
  }
}

export default SearchPage;
