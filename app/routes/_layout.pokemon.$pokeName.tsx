import { getPokemon, getPokemons, Pokemons } from '@/api/api';
import DetailsPage from '../pages/DetailsPage';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { PAGE_LIMIT } from '@/pages/SearchPage/SearchPage';
import { getOffset } from '@/utils/getOffset';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

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

export const meta: MetaFunction<typeof loader> = ({ matches, data }) => {
  const parentMeta = matches
    .flatMap((match) => match.meta ?? [])
    .filter((meta) => !('title' in meta));

  return [
    ...parentMeta,
    {
      title: capitalizeFirstLetter(
        data?.pokemonToDisplay.name || 'Pokemon Wiki'
      ),
    },
  ];
};

const Details = () => {
  return (
    <>
      <DetailsPage />
    </>
  );
};

export default Details;
