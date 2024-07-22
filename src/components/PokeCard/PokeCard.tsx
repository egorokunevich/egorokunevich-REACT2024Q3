// import { useEffect } from 'react';
import styles from './PokeCard.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import PokeApi from '../../api/PokeApi';
import Loader from '../../components/Loader';
// import { useFetching } from '../../hooks/useFetching';
import { useGetPokemonQuery } from 'api/reduxApi';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { toggleSelectedPokemons } from '@/store/pokemonsSlice';

interface PokeCardProps {
  name: string;
  isSelected: boolean;
}

function PokeCard({ name, isSelected }: PokeCardProps) {
  const { data: pokemon } = useGetPokemonQuery(name);

  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const navigate = useNavigate();

  console.log('renderCard');

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
          <img className={styles.pic} src={pokemon.sprites.front_default} />
          <img className={styles.picShiny} src={pokemon.sprites.front_shiny} />
        </>
      );
    }
    return (
      <img
        className={styles.pic}
        src={pokemon.sprites.other['official-artwork'].front_default}
      />
    );
  };

  return (
    <div
      className={styles.card}
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/pokemon/${pokemon.name}?page=${page}`);
      }}
      data-testid={'poke-card'}
    >
      <input
        type="checkbox"
        className={styles.check}
        checked={isSelected}
        onChange={(e) => {
          e.stopPropagation();
          dispatch(toggleSelectedPokemons(pokemon.name));
        }}
      />
      <div className={styles.cardTitle}>{pokemon.name}</div>
      <div className={styles.picContainer}>{renderImage()}</div>
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
    </div>
  );
}

export default PokeCard;
