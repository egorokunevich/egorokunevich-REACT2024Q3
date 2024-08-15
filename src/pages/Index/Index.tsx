import { useAppSelector } from '@/store/reduxHooks';
import {
  getControlledFormSelector,
  getUncontrolledFormSelector,
} from '@/store/selectors';
import { Link } from 'react-router-dom';
import styles from './Index.module.scss';
import FormsList from '@/components/FormsList';

const Index = () => {
  const controlledForms = useAppSelector(getControlledFormSelector);
  const uncontrolledForms = useAppSelector(getUncontrolledFormSelector);

  return (
    <>
      <header className={styles.header}>
        <h1>Home Page</h1>
        <nav>
          <ul className={styles.nav}>
            <Link className={styles.link} to={'controlled'}>
              Controlled
            </Link>
            <Link className={styles.link} to={'uncontrolled'}>
              Uncontrolled
            </Link>
          </ul>
        </nav>
      </header>
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
