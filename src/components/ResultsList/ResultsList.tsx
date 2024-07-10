import PokeCard from 'components/PokeCard';
import styles from './ResultsList.module.scss';

interface ResultsListProps {
  items: {
    name: string;
    sprites: {
      front_default: string;
      front_shiny: string;
    };
    height: number;
    weight: number;
    id?: number;
    url?: string;
  }[];
}

function ResultsList(props: ResultsListProps) {
  return (
    <div className={styles.listContainer}>
      <>
        {props.items.map((item) => (
          <PokeCard
            name={item.name}
            imgUrl={item.sprites.front_default}
            shinyImgUrl={item.sprites.front_shiny}
            height={item.height}
            weight={item.weight}
            key={item.id || Math.random()}
          />
        ))}
      </>
    </div>
  );
}

export default ResultsList;
