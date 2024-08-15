import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.title} to={'/'}>
        Home Page
      </Link>
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
  );
};

export default Header;
