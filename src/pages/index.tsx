import SearchPage from '../components/pages/SearchPage';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Pokemon, Pokemons } from '@/api/reduxApi';
import { PAGE_LIMIT } from '@/components/pages/SearchPage/SearchPage';

const Index = ({
  pokes,
  totalCount,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <SearchPage pokemons={pokes} totalCount={totalCount} />;
};

export default Index;

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
  // data.results = pokes;
  // Pass data to the page via props
  return { props: { pokes, totalCount } };
}) satisfies GetServerSideProps<{ pokes: Pokemon[] }>;
