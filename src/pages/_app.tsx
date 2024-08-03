import type { AppProps } from 'next/app';
import '../index.scss';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { store } from '@/store';
import ThemeProvider from '@/theme/ThemeProvider';
import { Provider } from 'react-redux';
import Layout from '@/components/Layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}
