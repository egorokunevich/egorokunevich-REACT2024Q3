import PokeApi, { Pokemon } from 'api/PokeApi';
import Loader from 'components/Loader';
import { useFetching } from 'hooks/useFetching';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailsPage() {
  const { id, pokeName } = useParams();
  const [data, setData] = useState<Pokemon | null>(null);
  const [fetchPokemon, isPokemonLoading] = useFetching(async () => {
    if (id) {
      return await PokeApi.getPokemon(id);
    } else if (pokeName) {
      return await PokeApi.getPokemon(pokeName);
    }
  });

  useEffect(() => {
    (async () => {
      const fetched = await fetchPokemon();
      if (fetched) {
        setData(fetched);
      }
    })();
  }, [id, pokeName]);

  const renderDetails = () => {
    if (isPokemonLoading) {
      return <Loader />;
    } else {
      if (data) {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1
              style={{
                textTransform: 'capitalize',
                margin: '0',
              }}
            >
              {data?.name}
            </h1>
            <img src={data?.sprites.other['official-artwork'].front_default} />
            <div style={{ fontSize: '2rem' }}>Height: {data?.height}</div>
            <div style={{ fontSize: '2rem' }}>Weight: {data?.weight}</div>
          </div>
        );
      }
    }
  };

  return <>{renderDetails()}</>;
}

export default DetailsPage;
