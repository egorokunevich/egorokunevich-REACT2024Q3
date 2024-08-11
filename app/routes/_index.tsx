import { MetaFunction, Outlet } from '@remix-run/react';
import SearchPage from '../pages/SearchPage';
import { getPokemon, getPokemons, Pokemons } from '@/api/api';
import { PAGE_LIMIT } from '@/pages/SearchPage/SearchPage';
import { getOffset } from '@/utils/getOffset';
import { LoaderFunctionArgs } from '@remix-run/node';

export const loader = async ({ request }: LoaderFunctionArgs) => {
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

  return { pokemons, totalCount };
};

export const meta: MetaFunction = ({ matches }) => {
  const parentMeta = matches
    .flatMap((match) => match.meta ?? [])
    .filter((meta) => !('title' in meta));

  return [...parentMeta, { title: 'Pokemon Wiki' }];
};

export default function Index() {
  return (
    <>
      <SearchPage />
      <Outlet />
    </>
  );
}
