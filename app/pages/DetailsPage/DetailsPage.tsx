import Loader from '../../components/Loader';
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
} from '@remix-run/react';
import styles from './DetailsPage.module.scss';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useEffect } from 'react';
import { setCurrentDetails } from '../../store/pokemonsSlice';
import { loader } from '@/routes/_layout';

function DetailsPage() {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';
  const searchQuery = searchParams.get('search') || '';
  const navigate = useNavigate();
  const navigation = useNavigation();

  const loaderData = useLoaderData<typeof loader>();
  const pokemon = loaderData.pokemonToDisplay;

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pokemon) {
      dispatch(setCurrentDetails([pokemon]));
    }
  }, [pokemon]);

  return (
    <div className={styles.pageWrapper} data-testid="details-page">
      <div className={styles.pageContent}>
        {navigation.state === 'loading' ? (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        ) : (
          <>
            <div className={styles.buttonContainer}>
              <button
                className={styles.closeBtn}
                onClick={() => {
                  navigate(
                    `/?page=${currentPage}${searchQuery ? `&search=${searchQuery}` : ''}`
                  );
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
          </>
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
