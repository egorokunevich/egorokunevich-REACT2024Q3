import DetailsPage from '@/components/pages/DetailsPage';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { Pokemon, Pokemons } from '@/api/reduxApi';
import SearchPage from '@/components/pages/SearchPage';
import { PAGE_LIMIT } from '@/components/pages/SearchPage/SearchPage';

const Details = ({
  pokes,
  totalCount,
  pokemonToDisplay,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <SearchPage pokemons={pokes} totalCount={totalCount} />
      <DetailsPage pokemon={pokemonToDisplay} />
    </div>
  );
};

export default Details;

export const getServerSideProps = (async (context) => {
  let offset = 0;
  const query = context.query;
  if (query.page) {
    offset = (+query.page - 1) * PAGE_LIMIT;
  }

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${PAGE_LIMIT}&offset=${offset}`
  );
  const data: Pokemons = await res.json();
  const totalCount = data.count;
  const pokes = await Promise.all(
    data.results.map(async (item) => {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${item.name}`
      );
      const pokemonData: Pokemon = await pokemonResponse.json();
      return pokemonData;
    })
  );

  const pokemonToDisplayResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params?.name}`
  );
  const pokemonToDisplay: Pokemon = await pokemonToDisplayResponse.json();

  // Pass data to the page via props
  return { props: { pokes, totalCount, pokemonToDisplay } };
}) satisfies GetServerSideProps<{ pokes: Pokemon[] }>;
