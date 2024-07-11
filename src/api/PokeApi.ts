import axios, { Axios } from 'axios';

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
}

export interface Pokemons {
  count: number;
  results: { name: string; url: string }[];
}

export default class PokeApi {
  static totalCount = 0;
  static instance: Axios = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
  });

  static async getPokemon(query: string): Promise<Pokemon | null> {
    try {
      const result = await this.instance.get<Pokemon>(`/pokemon/${query}`);
      return result.data;
    } catch {
      return null;
    }
  }

  static async getPokemons(limit: number = 12, offset: number = 0) {
    try {
      const results = await this.instance.get<Pokemons>('/pokemon', {
        params: {
          limit,
          offset,
        },
      });

      return results;
    } catch {
      return null;
    }
  }

  static getPokemonData = async (
    query: string,
    limit: number = 12,
    offset: number = 0
  ) => {
    try {
      const isQueryEmpty = !query.trim().length;
      if (isQueryEmpty) {
        const response = await this.instance.get<Pokemons>('/pokemon', {
          params: {
            limit,
            offset,
          },
        });

        this.totalCount = response.data.count;
        const results = response?.data.results;

        if (results) {
          const pokemons = await Promise.all(
            results.map(async (item) => {
              const pokemon = await PokeApi.getPokemon(item.name);
              if (pokemon) {
                return pokemon;
              }
            })
          );

          if (pokemons && pokemons.length > 0) {
            const filtered = pokemons.filter((item) => {
              return item !== undefined;
            });

            return filtered;
          }
        }
      } else {
        const result = await this.instance.get<Pokemon>(
          `/pokemon/${query.toLowerCase()}`
        );
        this.totalCount = 0;
        return [result.data];
      }
    } catch {
      return null;
    }
  };
}
