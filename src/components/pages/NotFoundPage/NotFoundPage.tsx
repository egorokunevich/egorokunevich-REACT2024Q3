import styles from './NotFoundPage.module.scss';
import useTabTitle, { TabTitles } from 'hooks/useTabTitle';
import Link from 'next/link';

const NotFoundPage = () => {
  useTabTitle(TabTitles.NotFound);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404 Page not found</h1>
      <Link className={styles.homeBtn} href={'/'}></Link>
    </div>
  );
};

export default NotFoundPage;
