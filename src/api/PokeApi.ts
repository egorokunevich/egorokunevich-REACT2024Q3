import axios, { Axios } from "axios";

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  height: number;
  weight: number;
}

export interface Pokemons {
  results: { name: string; url: string }[];
}

export default class PokeApi {
  static instance: Axios = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
  });

  static async getPokemon(query: string): Promise<Pokemon | null> {
    try {
      const result = await this.instance.get<Pokemon>(`/pokemon/${query}`);
      return result.data;
    } catch {
      return null;
    }
  }

  static async getPokemons(): Promise<Pokemons | null> {
    try {
      const results = (await this.instance.get<Pokemons>(`/pokemon`)).data;

      return results;
    } catch {
      return null;
    }
  }
}
