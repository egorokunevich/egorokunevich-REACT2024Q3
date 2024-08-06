'use client';

import styles from './PokeCard.module.scss';
import Loader from '@/components/Loader';
import { Pokemon } from '@/api/reduxApi';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { toggleSelectedPokemons } from '@/store/pokemonsSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import noImage from '../../../public/assets/icons/no-image.png';

interface PokeCardProps {
  pokemon: Pokemon;
  isSelected: boolean;
}

function PokeCard({ pokemon, isSelected }: PokeCardProps) {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ? searchParams.get('page') : 1;

  if (!pokemon) {
    return (
      <div className={styles.card}>
        <Loader />
      </div>
    );
  }

  const renderImage = () => {
    if (pokemon.sprites.front_default) {
      return (
        <>
          <Image
            className={styles.pic}
            src={pokemon.sprites.front_default}
            width={96}
            height={96}
            alt={pokemon.name + ' front_default'}
            priority={true}
          />
          <Image
            className={styles.picShiny}
            src={pokemon.sprites.front_shiny}
            width={96}
            height={96}
            alt={pokemon.name + ' front_shiny'}
            priority={true}
          />
        </>
      );
    }
    if (pokemon.sprites.other['official-artwork'].front_default) {
      return (
        <Image
          className={styles.pic}
          src={pokemon.sprites.other['official-artwork'].front_default}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt={pokemon.name + ' official artwork'}
          priority={true}
        />
      );
    }
    return (
      <Image
        className={styles.noImage}
        src={noImage}
        width={96}
        height={96}
        alt={pokemon.name + 'No image'}
        priority={true}
      />
    );
  };

  return (
    <div
      className={styles.card}
      onClick={(e) => {
        e.stopPropagation();
        const searchQuery = searchParams.get('search');
        router.push(
          `/pokemon/${pokemon.name}?page=${page}${searchQuery ? `&search=${searchQuery}` : ''}`
        );
      }}
      data-testid={'poke-card'}
    >
      <label
        className={styles.checkboxLabel}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="checkbox"
          className={styles.check}
          checked={isSelected}
          onChange={(e) => {
            e.stopPropagation();
            dispatch(toggleSelectedPokemons(pokemon));
          }}
        />
        {isSelected && <div className={styles.checkboxMarker}></div>}
      </label>
      <div className={styles.cardTitle}>{pokemon.name}</div>
      <div className={styles.picContainer}>{renderImage()}</div>
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
    </div>
  );
}

export default PokeCard;
