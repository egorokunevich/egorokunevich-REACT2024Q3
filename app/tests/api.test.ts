import { getPokemon, getPokemons } from '@/api/api';
import { server } from './mocks/server';
import { mockedPokemon, mockedPokemons } from './mocks/mockedPokemon';

describe('API', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Should return Pokemon', async () => {
    const pokemon = await getPokemon(mockedPokemon.name);

    expect(pokemon).toStrictEqual(mockedPokemon);
  });

  it('Should return Pokemons', async () => {
    const pokemon = await getPokemons({ limit: 12, offset: 0 });

    expect(pokemon).toStrictEqual(mockedPokemons);
  });
});
