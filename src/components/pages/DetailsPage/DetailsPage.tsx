import styles from './DetailsPage.module.scss';
import useTabTitle, { TabTitles } from '@/hooks/useTabTitle';
import { CapitalizeFirstLetter } from '@/utils/CapitalizeFirstLetter';
import { Pokemon } from '@/api/reduxApi';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { useEffect } from 'react';
import { setCurrentDetails } from '@/store/pokemonsSlice';
import { useRouter } from 'next/router';
import Image from 'next/image';
import noImage from '../../../../public/assets/icons/no-image.png';
import Link from 'next/link';

function DetailsPage({ pokemon }: { pokemon: Pokemon }) {
  const router = useRouter();
  const currentPage = router.query.page || 1;

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pokemon) {
      dispatch(setCurrentDetails([pokemon]));
    }
  }, [pokemon]);

  const pokeTabName = pokemon?.name || '';
  useTabTitle(TabTitles.Empty, CapitalizeFirstLetter(pokeTabName));

  return (
    <div className={styles.pageWrapper} data-testid="details-page">
      <div className={styles.pageContent}>
        <div className={styles.buttonContainer}>
          <Link className={styles.closeBtn} href={`/?page=${currentPage}`}>
            <div
              className={styles.closeIcon}
              style={{
                maskImage: 'url(../../../assets/icons/cancel.svg)',
                WebkitMaskImage: 'url(../../../assets/icons/cancel.svg)',
              }}
            />
          </Link>
        </div>
        <h1 className={styles.name}>{pokemon.name}</h1>
        {pokemon.sprites.other['official-artwork'].front_default ? (
          <Image
            className={styles.pic}
            src={pokemon.sprites.other['official-artwork'].front_default}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={pokemon.name + ' official artwork'}
            priority={false}
          />
        ) : (
          <Image
            className={styles.noImage}
            src={noImage}
            width={96}
            height={96}
            alt={pokemon.name + 'No icon'}
            priority={false}
          />
        )}

        <div className={styles.infoText}>Height: {pokemon.height}</div>
        <div className={styles.infoText}>Weight: {pokemon.weight}</div>
      </div>
    </div>
  );
}

export default DetailsPage;
