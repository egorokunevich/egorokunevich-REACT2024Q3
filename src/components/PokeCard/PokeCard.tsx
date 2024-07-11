import styles from './PokeCard.module.scss';

type PokeCardProps = {
  name: string;
  imgUrl: string;
  shinyImgUrl: string;
  artWork: string;
  height: number;
  weight: number;
};

function PokeCard(props: PokeCardProps) {
  const renderImage = () => {
    if (props.imgUrl) {
      return (
        <>
          <img className={styles.pic} src={props.imgUrl}></img>
          <img className={styles.picShiny} src={props.shinyImgUrl}></img>
        </>
      );
    } else {
      return <img className={styles.pic} src={props.artWork}></img>;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{props.name}</div>
      <div className={styles.picContainer}>{renderImage()}</div>
      <p>Weight: {props.weight}</p>
      <p>Height: {props.height}</p>
    </div>
  );
}

export default PokeCard;
