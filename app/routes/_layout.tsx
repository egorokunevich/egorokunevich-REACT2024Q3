import SearchPage from '@/pages/SearchPage';
import { getPokemons, getPokemon } from '@/api/api';
import { Pokemons } from '@/api/api';
import { PAGE_LIMIT } from '@/pages/SearchPage/SearchPage';
import { getOffset } from '@/utils/getOffset';
import { LoaderFunctionArgs } from '@remix-run/node';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const searchQuery = searchParams.get('search') || '';
  const offset = getOffset(+page);
  const pokemonsData = (await getPokemons({
    limit: PAGE_LIMIT,
    offset,
  })) as Pokemons;

  const totalCount = pokemonsData.count;

  const pokemons = searchQuery
    ? [await getPokemon(searchQuery)]
    : await Promise.all(
        pokemonsData.results.map(async (poke) => {
          return await getPokemon(poke.name);
        })
      );

  const pokemonToDisplay = await getPokemon(params.pokeName || '');
  return { pokemons, totalCount, pokemonToDisplay };
};

export default function Layout() {
  return (
    <>
      <SearchPage />
    </>
  );
}
