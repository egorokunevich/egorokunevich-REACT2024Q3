import { Pokemon } from '../../api/api';
import PokeCard from '../PokeCard';
import styles from './ResultsList.module.scss';
import { useAppSelector } from '../../hooks/reduxHooks';
import { getSelectedPokemonsSelector } from '../../store/selectors';
// import { useLoaderData } from '@remix-run/react';
// import { LoaderData } from '@/routes/_index';

interface ResultsListProps {
  items: Pokemon[];
}

function ResultsList({ items }: ResultsListProps) {
  const selectedPokemons = useAppSelector(getSelectedPokemonsSelector);

  // const loaderData: LoaderData = useLoaderData();
  // const detailedPokemons = loaderData.detailedPokemons;

  if (!items.length) {
    return (
      <div className={styles.notFoundMessage}>There is no such Pokemon!</div>
    );
  }
  return (
    <div className={styles.listContainer} data-testid="resultsListWrapper">
      {items.map((item, id) => (
        <PokeCard
          key={item.name + id}
          pokemon={item}
          isSelected={selectedPokemons.some(
            (pokemon) => pokemon.name === item.name
          )}
        />
      ))}
    </div>
  );
}

export default ResultsList;
