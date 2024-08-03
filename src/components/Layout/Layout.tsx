import { useTheme } from '@/theme/useTheme';
import Header from '../Header';
import ThemeToggler from '../ThemeToggler';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header>
        <ThemeToggler />
      </Header>
      <div style={{ paddingTop: '4rem' }}>{children}</div>
    </div>
  );
}

export default Layout;
