import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type QueryArgs = {
  limit: number;
  offset: number;
};

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
  results: Pokemon[];
}

export const pokemonApi = createApi({
  reducerPath: 'pokeAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (build) => ({
    getPokemon: build.query<Pokemon, string>({
      query: (query: string) => ({
        url: `/pokemon/${query}`,
      }),
    }),
    getPokemons: build.query<Pokemons, QueryArgs>({
      query: ({ limit, offset }) => ({
        url: '/pokemon',
        params: {
          limit,
          offset,
        },
      }),
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonsQuery } = pokemonApi;
