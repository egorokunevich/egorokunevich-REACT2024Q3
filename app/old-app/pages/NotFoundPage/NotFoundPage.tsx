import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';
import useTabTitle, { TabTitles } from '@/hooks/useTabTitle';

const NotFoundPage = () => {
  const navigate = useNavigate();
  useTabTitle(TabTitles.NotFound);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404 Page not found</h1>
      <button
        className={styles.homeBtn}
        onClick={() => {
          navigate('/');
        }}
      ></button>
    </div>
  );
};

export default NotFoundPage;
