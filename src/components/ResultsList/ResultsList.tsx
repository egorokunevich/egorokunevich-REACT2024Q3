import { Pokemon } from '@/api/reduxApi';
import PokeCard from '../PokeCard';
import styles from './ResultsList.module.scss';
import { useAppSelector } from '@/hooks/reduxHooks';
import { getSelectedPokemonsSelector } from '@/store/selectors';

interface ResultsListProps {
  items: Pokemon[];
}

function ResultsList({ items }: ResultsListProps) {
  const selectedPokemons = useAppSelector(getSelectedPokemonsSelector);

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
          name={item.name}
          isSelected={selectedPokemons.some(
            (pokemon) => pokemon.name === item.name
          )}
        />
      ))}
    </div>
  );
}

export default ResultsList;
