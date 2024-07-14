import PokeApi from '@/api/PokeApi';
import Loader from 'components/Loader';
import { useFetching } from 'hooks/useFetching';
import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './DetailsPage.module.scss';
import useTabTitle, { TabTitles } from 'hooks/useTabTitle';
import { CapitalizeFirstLetter } from 'utils/CapitalizeFirstLetter';

function DetailsPage() {
  const { id, pokeName } = useParams();

  const {
    fetchFunction: fetchPokemon,
    isLoading: isPokemonLoading,
    results: data,
  } = useFetching(async () => {
    if (id) {
      return await PokeApi.getPokemon(id);
    } else if (pokeName) {
      return await PokeApi.getPokemon(pokeName);
    }
  });
  const pokeTabName = data?.[0].name || '';
  useTabTitle(TabTitles.Empty, CapitalizeFirstLetter(pokeTabName));
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPokemon();
  }, [id, pokeName]);

  const handleLoading = () => {
    if (isPokemonLoading === 'loading' || !data) {
      return (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      );
    }
    const pokemon = data[0];
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
        <h1 className={styles.name}>{pokemon.name}</h1>
        <img
          className={styles.pic}
          src={pokemon.sprites.other['official-artwork'].front_default}
        />

        <div className={styles.infoText}>Height: {pokemon.height}</div>
        <div className={styles.infoText}>Weight: {pokemon.weight}</div>
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
