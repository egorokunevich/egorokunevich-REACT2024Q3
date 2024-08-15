import { FormSliceData } from '@/store/FormSlice';
import styles from './FormsList.module.scss';
import FormCard from '../FormCard';

interface FormsListProps {
  forms: FormSliceData[];
}

const FormsList = ({ forms }: FormsListProps) => {
  return (
    <div className={styles.list}>
      {forms.map((form, i) => {
        return (
          <div style={{ width: '100%' }} key={i + form.age + form.name}>
            <FormCard form={form} />
          </div>
        );
      })}
    </div>
  );
};

export default FormsList;
