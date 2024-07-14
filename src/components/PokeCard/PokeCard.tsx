import { useEffect } from 'react';
import styles from './PokeCard.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PokeApi from '@/api/PokeApi';
import Loader from 'components/Loader';
import { useFetching } from 'hooks/useFetching';

type PokeCardProps = {
  name: string;
};

function PokeCard(props: PokeCardProps) {
  const { results, fetchFunction } = useFetching(async () => {
    return PokeApi.getPokemon(props.name);
  });
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const navigate = useNavigate();

  useEffect(() => {
    fetchFunction();
  }, []);

  if (!results?.length) {
    return <Loader />;
  }

  const pokemon = results[0];
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
      data-testid={'card'}
    >
      <div className={styles.cardTitle}>{pokemon.name}</div>
      <div className={styles.picContainer}>{renderImage()}</div>
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
    </div>
  );
}

export default PokeCard;
