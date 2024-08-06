import DetailsPage from '@/components/pages/DetailsPage';
import { Pokemon, Pokemons } from '@/api/reduxApi';
import SearchPage from '@/components/pages/SearchPage';

const PAGE_LIMIT = 12;

const Details = async ({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { name: string };
}) => {
  const page = searchParams['page'] ? +searchParams['page'] : 1;
  const pokeName = params.name;
  const { pokes, totalCount, pokemonToDisplay } = await getProps({
    pokeName,
    page,
  });
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <SearchPage pokemons={pokes} totalCount={totalCount} />
      <DetailsPage pokemon={pokemonToDisplay} />
    </div>
  );
};

export default Details;

const getProps = async ({
  pokeName,
  page,
}: {
  pokeName: string;
  page: number;
}) => {
  let offset = 0;
  if (page) {
    offset = (+page - 1) * PAGE_LIMIT;
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
    `https://pokeapi.co/api/v2/pokemon/${pokeName}`
  );
  const pokemonToDisplay: Pokemon = await pokemonToDisplayResponse.json();

  // Pass data to the page via props
  return { pokes, totalCount, pokemonToDisplay };
};
