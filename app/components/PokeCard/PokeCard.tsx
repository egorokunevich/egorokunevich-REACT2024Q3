import styles from './PokeCard.module.scss';
import { useNavigate, useSearchParams, useNavigation } from '@remix-run/react';
import Loader from '../Loader';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { toggleSelectedPokemons } from '../../store/pokemonsSlice';
import { Pokemon } from '@/api/api';

interface PokeCardProps {
  pokemon: Pokemon;
  isSelected: boolean;
}

function PokeCard({ pokemon, isSelected }: PokeCardProps) {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const searchQuery = searchParams.get('search') || '';
  const navigate = useNavigate();
  const navigation = useNavigation();

  if (navigation.state !== 'idle') {
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
        navigate(
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
          data-testid="card-checkbox"
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
