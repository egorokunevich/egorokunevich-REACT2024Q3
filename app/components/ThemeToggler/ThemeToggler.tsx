'use client';

import { useState } from 'react';
import styles from './ThemeToggler.module.scss';
import { toggleLayoutTheme } from '@/store/pokemonsSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { getThemeSelector } from '@/store/selectors';

const ThemeToggler = () => {
  const [isChecked, setIsChecked] = useState(true);
  const theme = useAppSelector(getThemeSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setIsChecked(!isChecked);
    dispatch(toggleLayoutTheme(theme === 'light' ? 'dark' : 'light'));
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
