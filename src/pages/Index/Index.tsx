import { useAppSelector } from '@/store/reduxHooks';
import {
  getControlledFormSelector,
  getUncontrolledFormSelector,
} from '@/store/selectors';
import styles from './Index.module.scss';
import FormsList from '@/components/FormsList';

const Index = () => {
  const controlledForms = useAppSelector(getControlledFormSelector);
  const uncontrolledForms = useAppSelector(getUncontrolledFormSelector);

  return (
    <>
      <div className={styles.listsWrapper}>
        <div style={{ width: '100%' }} key={'controlled-list'}>
          <h2 className={styles.listTitle}>Controlled forms</h2>
          <FormsList forms={controlledForms} />
        </div>
        <div style={{ width: '100%' }} key={'uncontrolled-list'}>
          <h2 className={styles.listTitle}>Uncontrolled forms</h2>
          <FormsList forms={uncontrolledForms} />
        </div>
      </div>
    </>
  );
};

export default Index;
