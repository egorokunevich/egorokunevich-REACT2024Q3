import Link from 'next/link';
import styles from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.errorTitle}>Oops! Something went wrong.</h1>
      <p className={styles.errorInfo}>Please, try to reload the app.</p>
      <Link href={'/'} className={styles.errorBtn}>
        Reload
      </Link>
    </div>
  );
}

export default ErrorPage;
