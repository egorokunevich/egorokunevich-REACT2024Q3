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
  static instance: Axios = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
  });

  static async getPaginationData() {
    const results = await this.instance.get<Pokemons>('/pokemon');

    return results.data.count;
  }

  static async getPokemon(query: string): Promise<Pokemon[]> {
    const result = await this.instance.get<Pokemon>(`/pokemon/${query}`);
    return [result.data];
  }

  static async getPokemons(limit: number = 12, offset: number = 0) {
    const results = await this.instance.get<Pokemons>('/pokemon', {
      params: {
        limit,
        offset,
      },
    });

    return results.data.results.map((item) => ({ name: item.name }));
  }
}
