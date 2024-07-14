import PokeCard from '../PokeCard';
import styles from './ResultsList.module.scss';

interface ResultsListProps {
  items:
    | {
        name: string;
      }[]
    | null;
}

function ResultsList({ items }: ResultsListProps) {
  if (!items || (items && !items.length)) {
    return (
      <div className={styles.notFoundWrapper}>
        <div className={styles.notFoundMessage}>There is no such Pokemon!</div>
      </div>
    );
  }
  return (
    <div className={styles.listContainer} data-testid="resultsListWrapper">
      {items.map((item, id) => (
        <PokeCard key={item.name + id} name={item.name} />
      ))}
    </div>
  );
}

export default ResultsList;
