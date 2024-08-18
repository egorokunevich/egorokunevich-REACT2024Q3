import { FormSliceData, IImage } from '@/store/FormSlice';
import styles from './FormCard.module.scss';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

interface FormCardProps {
  form: FormSliceData;
}

const renderElements = (value: string | number | boolean | IImage) => {
  if (typeof value === 'boolean') {
    return (
      <input
        type="checkbox"
        checked={value}
        disabled
        className={styles.checkbox}
      />
    );
  } else if (typeof value === 'string' || typeof value === 'number') {
    return (
      <p className={styles.rowText}>{value || value === 0 ? value : 'none'}</p>
    );
  } else {
    return <img src={value.base64} className={styles.img} />;
  }
};

const FormCard = ({ form }: FormCardProps) => {
  const entries = Object.entries(form);
  return (
    <div className={styles.cardContainer}>
      {entries.map(([key, value], i) => {
        return (
          <div className={styles.row} key={i + key}>
            <h3 className={styles.rowTitle}>{capitalizeFirstLetter(key)}</h3>
            {renderElements(value)}
          </div>
        );
      })}
    </div>
  );
};

export default FormCard;
