const BASE_URL = 'https://pokeapi.co/api/v2';

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

export const getPokemon = async (query: string) => {
  const response = await fetch(BASE_URL + `/pokemon/${query}`);
  const data: Pokemon = await response.json();
  return data;
};

export const getPokemons = async ({
  limit,
  offset,
  name,
}: {
  limit: number;
  offset: number;
  name?: string;
}) => {
  const response = await fetch(
    BASE_URL + `/pokemon/${name || ''}` + `?limit=${limit}&offset=${offset}`
  );
  const data: Pokemons | Pokemon = await response.json();
  return data;
};
