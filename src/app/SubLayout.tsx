'use client';

import '../index.scss';
import Header from '@/components/Header';
import ThemeToggler from '@/components/ThemeToggler';
import { PropsWithChildren } from 'react';
import { getThemeSelector } from '@/store/selectors';
import { useAppSelector } from '@/hooks/reduxHooks';

function SubLayout({ children }: PropsWithChildren) {
  const theme = useAppSelector(getThemeSelector);

  return (
    <div className={`app ${theme}`} style={{ width: '100%' }}>
      <Header>
        <ThemeToggler />
      </Header>
      <div style={{ paddingTop: '4rem', height: '100%' }}>{children}</div>
    </div>
  );
}

export default SubLayout;
