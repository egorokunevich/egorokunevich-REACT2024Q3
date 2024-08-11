import { useState } from 'react';
import styles from './ThemeToggler.module.scss';
import { useTheme } from '../../theme/useTheme';

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
      <label className={styles.toggleLabel}>
        <input
          type="checkbox"
          onClick={handleClick}
          aria-checked={isChecked}
        ></input>
        <div className={styles.toggler}></div>
      </label>
    </div>
  );
};

export default ThemeToggler;
