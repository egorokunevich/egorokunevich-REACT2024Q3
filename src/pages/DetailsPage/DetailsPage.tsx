import Loader from '@/components/Loader';
import { useParams, useSearchParams } from 'react-router-dom';
import styles from './DetailsPage.module.scss';
import useTabTitle, { TabTitles } from '@/hooks/useTabTitle';
import { CapitalizeFirstLetter } from '@/utils/CapitalizeFirstLetter';
import { useGetPokemonQuery } from '@/api/reduxApi';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { useEffect } from 'react';
import { setCurrentDetails } from '@/store/pokemonsSlice';
import { useRouter } from 'next/router';

function DetailsPage() {
  // const [searchParams] = useSearchParams();
  const router = useRouter();
  const { id, pokeName } = useParams();

  const {
    data: pokemon,
    isLoading,
    isFetching,
  } = useGetPokemonQuery(id || pokeName || '');

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pokemon) {
      dispatch(setCurrentDetails([pokemon]));
    }
  }, [pokemon]);

  const pokeTabName = pokemon?.name || '';
  useTabTitle(TabTitles.Empty, CapitalizeFirstLetter(pokeTabName));

  if (isLoading || isFetching || !pokemon) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper} data-testid="details-page">
      <div className={styles.pageContent}>
        <div className={styles.buttonContainer}>
          <button
            className={styles.closeBtn}
            onClick={() => {
              router.push(`/?page=${1}`);
            }}
          >
            <div
              className={styles.closeIcon}
              style={{
                maskImage: 'url(../../../assets/icons/cancel.svg)',
                WebkitMaskImage: 'url(../../../assets/icons/cancel.svg)',
              }}
            />
          </button>
        </div>
        <h1 className={styles.name}>{pokemon.name}</h1>
        <img
          className={styles.pic}
          src={pokemon.sprites.other['official-artwork'].front_default}
        />

        <div className={styles.infoText}>Height: {pokemon.height}</div>
        <div className={styles.infoText}>Weight: {pokemon.weight}</div>
      </div>
    </div>
  );
}

export default DetailsPage;
