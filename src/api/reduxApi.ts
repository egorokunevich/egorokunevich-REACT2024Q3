import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type QueryArgs = {
  limit: number;
  offset: number;
  name?: string;
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
      transformResponse(response: Pokemon) {
        return {
          name: response.name,
          weight: response.weight,
          height: response.height,
          id: response.id,
          sprites: {
            front_default: response.sprites.front_default,
            front_shiny: response.sprites.front_shiny,
            other: {
              'official-artwork': response.sprites.other['official-artwork'],
            },
          },
        };
      },
    }),
    getPokemons: build.query<Pokemons | Pokemon, QueryArgs>({
      query: ({ limit, offset, name }) => ({
        url: `/pokemon/${name || ''}`,
        params: {
          limit,
          offset,
        },
      }),
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonsQuery } = pokemonApi;
