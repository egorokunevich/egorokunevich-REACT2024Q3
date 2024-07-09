import { Component } from "react";
import styles from "./PokeCard.module.scss";

type PokeCardProps = {
  name: string;
  imgUrl: string;
  shinyImgUrl: string;
  height: number;
  weight: number;
};

export default class PokeCard extends Component<PokeCardProps, {}> {
  constructor(props: PokeCardProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.cardTitle}>{this.props.name}</div>
        <div className={styles.picContainer}>
          <img className={styles.pic} src={this.props.imgUrl}></img>
          <img className={styles.picShiny} src={this.props.shinyImgUrl}></img>
        </div>
        <p>Weight: {this.props.weight}</p>
        <p>Height: {this.props.height}</p>
      </div>
    );
  }
}
