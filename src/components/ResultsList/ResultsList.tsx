import PokeCard from "components/PokeCard";
import { Component } from "react";
import styles from "./ResultsList.module.scss";

interface ResultsListProps {
  items: {
    name: string;
    sprites: {
      front_default: string;
    };
    id?: number;
    url?: string;
  }[];
}

export default class ResultsList extends Component<ResultsListProps> {
  constructor(props: ResultsListProps) {
    super(props);
  }

  render() {
    console.log("render resultsList");
    return (
      <div className={styles.listContainer}>
        <>
          {this.props.items.map((item) => (
            <PokeCard
              name={item.name}
              imgUrl={item.sprites.front_default}
              key={item.id || Math.random()}
            />
          ))}
        </>
      </div>
    );
  }
}
