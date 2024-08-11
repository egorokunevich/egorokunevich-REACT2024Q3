import { Pokemon, Pokemons } from '../../api/api';

export const mockedPokemon: Pokemon = {
  id: 1,
  name: 'pikachu',
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    other: {
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      },
    },
  },
  height: 1,
  weight: 1,
};

export const mockedPokemons: Pokemons = {
  count: 1,
  results: [mockedPokemon],
};
