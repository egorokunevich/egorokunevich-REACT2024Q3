import Header from '@/components/Header';
import SearchPage from '../components/pages/SearchPage';
import ThemeToggler from '@/components/ThemeToggler';
import { useTheme } from '@/theme/useTheme';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Pokemon, Pokemons } from '@/api/reduxApi';
import { useRouter } from 'next/router';
import { PAGE_LIMIT } from '@/components/pages/SearchPage/SearchPage';

const Index = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { theme } = useTheme();
  const router = useRouter();
  console.log('router: ', router);
  return (
    <div className={`app ${theme}`}>
      <Header>
        <ThemeToggler />
      </Header>
      <SearchPage pokemons={data} />
    </div>
  );
};

export default Index;

export const getServerSideProps = (async ({ query }) => {
  let offset = 0;
  if (query.page) {
    offset = (+query.page - 1) * PAGE_LIMIT;
  }

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${PAGE_LIMIT}&offset=${offset}`
  );
  const data: Pokemons = await res.json();
  const pokes = await Promise.all(
    data.results.map(async (item) => {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${item.name}`
      );
      const pokemonData: Pokemon = await pokemonResponse.json();
      return pokemonData;
    })
  );
  data.results = pokes;
  // Pass data to the page via props
  return { props: { data } };
}) satisfies GetServerSideProps<{ data: Pokemons }>;
