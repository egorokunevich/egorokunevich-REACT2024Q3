import { getPokemon, getPokemons, Pokemons } from '@/api/api';
import DetailsPage from '../pages/DetailsPage';
import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PAGE_LIMIT } from '@/pages/SearchPage/SearchPage';
import { getOffset } from '@/utils/getOffset';
import { LoaderData } from './_index';

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
  return { pokemonToDisplay };
};

const Details = () => {
  const { pokemonToDisplay }: LoaderData = useLoaderData();
  if (!pokemonToDisplay) {
    return <h2>No such Pokemon!</h2>;
  }
  return (
    <>
      <DetailsPage pokemon={pokemonToDisplay} />
    </>
  );
};

export default Details;
