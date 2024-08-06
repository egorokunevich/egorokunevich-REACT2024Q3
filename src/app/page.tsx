import SearchPage from '../components/pages/SearchPage';
import { Pokemon, Pokemons } from '@/api/reduxApi';
import { PAGE_LIMIT } from '@/components/pages/SearchPage/SearchPage';

const IndexPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams['page'] ? +searchParams['page'] : 1;
  const search = searchParams['search'] || '';
  const { pokes, totalCount } = await getProps({ search, page });
  return <SearchPage pokemons={pokes || []} totalCount={totalCount || 1} />;
};

export default IndexPage;

export const getProps = async ({
  search,
  page,
}: {
  search: string | string[];
  page: number;
}) => {
  let offset = 0;
  if (page) {
    offset = (+page - 1) * PAGE_LIMIT;
  }
  if (!search) {
    console.log('no search query');
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
    // Pass data to the page via props
    return { pokes, totalCount };
  }
  try {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${search}`
    );
    const poke: Pokemon = await pokemonResponse.json();
    const pokes = [poke];
    const totalCount = 1;
    return { pokes, totalCount };
  } catch {
    return { pokes: [], totalCount: 0 };
  }
};
