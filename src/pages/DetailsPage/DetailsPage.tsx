import PokeApi, { Pokemon } from 'api/PokeApi';
import Loader from 'components/Loader';
import { useFetching } from 'hooks/useFetching';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './DetailsPage.module.scss';

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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const fetched = await fetchPokemon();
      if (fetched) {
        setData(fetched);
      }
    })();
  }, [id, pokeName]);

  const handleLoading = () => {
    if (isPokemonLoading) {
      return (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      );
    }
    return (
      <>
        <div className={styles.buttonContainer}>
          <button
            className={styles.closeBtn}
            onClick={() => {
              navigate(`/?page=${searchParams.get('page')}`);
            }}
          ></button>
        </div>
        <h1 className={styles.name}>{data?.name}</h1>
        <img
          className={styles.pic}
          src={data?.sprites.other['official-artwork'].front_default}
        />

        <div className={styles.infoText}>Height: {data?.height}</div>
        <div className={styles.infoText}>Weight: {data?.weight}</div>
      </>
    );
  };
  const renderDetails = () => {
    if (data) {
      return (
        <div className={styles.pageWrapper}>
          <div className={styles.pageContent}>{handleLoading()}</div>
        </div>
      );
    }
  };

  return <>{renderDetails()}</>;
}

export default DetailsPage;
