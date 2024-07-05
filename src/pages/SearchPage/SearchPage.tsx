import { Component } from "react";
import SearchBar from "components/SearchBar";
import PokeApi from "api/PokeApi";
import ResultsList from "components/ResultsList";

interface SearchPageState {
  searchResults: {
    name: string;
    sprites: {
      front_default: string;
    };
    id?: number;
    url?: string;
  }[];
}

export class SearchPage extends Component<{}, SearchPageState> {
  state: SearchPageState = { searchResults: [] };

  handleSearch = async (query: string) => {
    console.log("init", this.state.searchResults);
    // If the query is empty — show the list of pokemons
    if (!query.trim().length) {
      const results = (await PokeApi.getPokemons())?.results;
      console.log(results);

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
          searchResults: [...this.state.searchResults, ...fulfilled],
        });
      }
    } else {
      const pokemon = await PokeApi.getPokemon(query);

      if (pokemon) {
        this.setState({
          searchResults: [
            ...this.state.searchResults,
            {
              name: pokemon.name,
              id: pokemon.id,
              sprites: {
                front_default: pokemon.sprites.front_default,
              },
            },
          ],
        });
      } else {
        console.log("Unknown pokemon!");
      }
    }
  };

  render() {
    // console.log('state: ', this.state.searchResults);
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <ResultsList items={this.state.searchResults} />
      </div>
    );
  }
}

export default SearchPage;
