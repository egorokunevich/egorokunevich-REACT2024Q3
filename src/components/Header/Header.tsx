'use client';

import { PropsWithChildren } from 'react';
import styles from './Header.module.scss';

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className={styles.header} data-testid="header">
      {children}
    </header>
  );
};

export default Header;
