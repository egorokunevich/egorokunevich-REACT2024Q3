import { delay, http, HttpResponse } from 'msw';
import { mockedPokemon, mockedPokemons } from '@/tests/mocks/mockedPokemon';

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon/pikachu', async () => {
    await delay();
    return HttpResponse.json(mockedPokemon);
  }),
  http.get('https://pokeapi.co/api/v2/pokemon', async () => {
    await delay();
    return HttpResponse.json(mockedPokemons);
  }),
];
