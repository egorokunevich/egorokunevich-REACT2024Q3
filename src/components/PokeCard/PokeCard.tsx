import styles from './PokeCard.module.scss';

type PokeCardProps = {
  name: string;
  imgUrl: string;
  shinyImgUrl: string;
  height: number;
  weight: number;
};

function PokeCard(props: PokeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{props.name}</div>
      <div className={styles.picContainer}>
        <img className={styles.pic} src={props.imgUrl}></img>
        <img className={styles.picShiny} src={props.shinyImgUrl}></img>
      </div>
      <p>Weight: {props.weight}</p>
      <p>Height: {props.height}</p>
    </div>
  );
}

export default PokeCard;
