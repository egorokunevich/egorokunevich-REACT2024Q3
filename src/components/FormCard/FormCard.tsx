import { FormSliceData } from '@/store/FormSlice';
import styles from './FormCard.module.scss';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

interface FormCardProps {
  form: FormSliceData;
}

const FormCard = ({ form }: FormCardProps) => {
  const entries = Object.entries(form);
  return (
    <div className={styles.cardContainer}>
      {entries.map(([key, value], i) => {
        return (
          <div className={styles.row} key={i + key}>
            <h3 className={styles.rowTitle}>{capitalizeFirstLetter(key)}</h3>
            {typeof value === 'boolean' ? (
              <input
                type="checkbox"
                checked={value}
                disabled
                className={styles.checkbox}
              />
            ) : (
              <p className={styles.rowText}>{value ? value : 'none'}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FormCard;
