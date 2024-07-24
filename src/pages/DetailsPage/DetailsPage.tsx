import Loader from 'components/Loader';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './DetailsPage.module.scss';
import useTabTitle, { TabTitles } from 'hooks/useTabTitle';
import { CapitalizeFirstLetter } from 'utils/CapitalizeFirstLetter';
import { useGetPokemonQuery } from '@/api/reduxApi';

function DetailsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { id, pokeName } = useParams();

  const { data: pokemon, isLoading } = useGetPokemonQuery(id || pokeName || '');

  const pokeTabName = pokemon?.name || '';
  useTabTitle(TabTitles.Empty, CapitalizeFirstLetter(pokeTabName));

  if (isLoading || !pokemon) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContent}>
        <div className={styles.buttonContainer}>
          <button
            className={styles.closeBtn}
            onClick={() => {
              navigate(`/?page=${searchParams.get('page')}`);
            }}
          >
            <div
              className={styles.closeIcon}
              style={{
                maskImage: 'url(../../../public/assets/icons/cancel.svg)',
                WebkitMaskImage: 'url(../../../public/assets/icons/cancel.svg)',
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
