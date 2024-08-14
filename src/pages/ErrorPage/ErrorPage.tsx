import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.errorTitle}>Oops! Something went wrong.</h1>
      <p className={styles.errorInfo}>Please, try to reload the app.</p>
      <button onClick={() => navigate('/')}>Reload</button>
    </div>
  );
}

export default ErrorPage;
