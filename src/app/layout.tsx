'use client';

import '../index.scss';
import { PropsWithChildren } from 'react';
import { store } from '@/store';
import { Provider } from 'react-redux';
import SubLayout from './SubLayout';

function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <Provider store={store}>
          <SubLayout>{children}</SubLayout>
        </Provider>
      </body>
    </html>
  );
}

export default Layout;
