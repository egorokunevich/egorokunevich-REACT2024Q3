import styles from './NotFoundPage.module.scss';
import useTabTitle, { TabTitles } from 'hooks/useTabTitle';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();
  useTabTitle(TabTitles.NotFound);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404 Page not found</h1>
      <button
        className={styles.homeBtn}
        onClick={() => {
          router.push('/');
        }}
      ></button>
    </div>
  );
};

export default NotFoundPage;
