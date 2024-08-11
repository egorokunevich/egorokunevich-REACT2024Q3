import styles from './ErrorPage.module.scss';
import Button from '../../components/Buttons/Button';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.errorTitle}>Oops! Something went wrong.</h1>
      <p className={styles.errorInfo}>Please, try to reload the app.</p>
      <Button
        txt="Reload"
        onClick={() => {
          navigate('/');
        }}
      />
    </div>
  );
}

export default ErrorPage;
