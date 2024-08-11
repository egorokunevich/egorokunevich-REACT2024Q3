import SearchPage from '@/pages/SearchPage';
import { useLoaderData } from '@remix-run/react';
import { LoaderData } from './_index';
import { getPokemons, getPokemon } from '@/api/api';
import { Pokemons } from '@/api/reduxApi';
import { PAGE_LIMIT } from '@/pages/SearchPage/SearchPage';
import { getOffset } from '@/utils/getOffset';
import { LoaderFunctionArgs } from '@remix-run/node';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const offset = getOffset(+page);
  const pokemons = (await getPokemons({
    limit: PAGE_LIMIT,
    offset,
  })) as Pokemons;

  const detailedPokemons = await Promise.all(
    pokemons.results.map(async (poke) => {
      return await getPokemon(poke.name);
    })
  );

  const pokemonToDisplay = await getPokemon(params.pokeName || '');
  return { pokemons, detailedPokemons, pokemonToDisplay };
};

export default function Layout() {
  const loaderData: LoaderData = useLoaderData();
  return (
    <>
      <SearchPage pokemons={loaderData.pokemons} />
    </>
  );
}
