import { useState } from 'react';
import styles from './ThemeToggler.module.scss';
import { useTheme } from '@/theme/useTheme';

const ThemeToggler = () => {
  const { toggleTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  return (
    <div className={styles.themeToggleContainer}>
      <div className={styles.toggleTitle}>DARK THEME</div>
      <div
        className={styles.toggler}
        onClick={handleClick}
        aria-checked={isChecked}
      ></div>
    </div>
  );
};

export default ThemeToggler;
