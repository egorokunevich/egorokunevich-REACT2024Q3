import styles from './PokeCard.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';

type PokeCardProps = {
  id: number;
  name: string;
  imgUrl: string;
  shinyImgUrl: string;
  artWork: string;
  height: number;
  weight: number;
};

function PokeCard(props: PokeCardProps) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const navigate = useNavigate();
  const renderImage = () => {
    if (props.imgUrl) {
      return (
        <>
          <img className={styles.pic} src={props.imgUrl}></img>
          <img className={styles.picShiny} src={props.shinyImgUrl}></img>
        </>
      );
    }
    return <img className={styles.pic} src={props.artWork}></img>;
  };

  return (
    <div
      className={styles.card}
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/pokemon/${props.name}?page=${page}`);
      }}
    >
      <div className={styles.cardTitle}>{props.name}</div>
      <div className={styles.picContainer}>{renderImage()}</div>
      <p>Weight: {props.weight}</p>
      <p>Height: {props.height}</p>
    </div>
  );
}

export default PokeCard;
