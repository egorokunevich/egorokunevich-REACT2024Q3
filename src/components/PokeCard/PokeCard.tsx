import { Component } from "react";
import styles from "./PokeCard.module.scss";

type PokeCardProps = {
  name: string;
  imgUrl: string;
};

export default class PokeCard extends Component<PokeCardProps, {}> {
  constructor(props: PokeCardProps) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.card}>
        <div className={styles.cardTitle}>{this.props.name}</div>
        <img className={styles.pic} src={this.props.imgUrl}></img>
      </div>
    );
  }
}
