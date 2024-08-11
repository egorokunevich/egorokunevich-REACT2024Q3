import { Outlet, useLoaderData } from '@remix-run/react';
import SearchPage from '../pages/SearchPage';
import { getPokemon, getPokemons, Pokemon, Pokemons } from '@/api/api';
import { PAGE_LIMIT } from '@/pages/SearchPage/SearchPage';
import { getOffset } from '@/utils/getOffset';
import { LoaderFunctionArgs } from '@remix-run/node';

export interface LoaderData {
  pokemons: Pokemons;
  detailedPokemons: Pokemon[];
  pokemonToDisplay?: Pokemon;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
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

  return { pokemons, detailedPokemons };
};

export default function Index() {
  const loaderData: LoaderData = useLoaderData();
  return (
    <>
      <SearchPage pokemons={loaderData.pokemons} />
      <Outlet />
    </>
  );
}
