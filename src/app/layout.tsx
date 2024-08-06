'use client';

import '../index.scss';
import { useTheme } from '@/theme/useTheme';
import Header from '@/components/Header';
import ThemeToggler from '@/components/ThemeToggler';
import { PropsWithChildren } from 'react';
import ThemeProvider from '@/theme/ThemeProvider';
import { store } from '@/store';
import { Provider } from 'react-redux';

function Layout({ children }: PropsWithChildren) {
  const { theme } = useTheme();

  return (
    <html>
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <div className={`app ${theme}`} style={{ width: '100%' }}>
              <Header>
                <ThemeToggler />
              </Header>
              <div style={{ paddingTop: '4rem' }}>{children}</div>
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

export default Layout;
