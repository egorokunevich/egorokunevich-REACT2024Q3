import type { AppProps } from 'next/app';
import '../index.scss';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { store } from '@/store';
import ThemeProvider from '@/theme/ThemeProvider';
import { Provider } from 'react-redux';
import Layout from '@/components/Layout/Layout';
import Router from 'next/router';
import Loader from '@/components/Loader';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log('start');
      setLoading(true);
    };
    const end = () => {
      console.log('finished');
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Provider store={store}>
          <ThemeProvider>
            <ErrorBoundary>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ErrorBoundary>
          </ThemeProvider>
        </Provider>
      )}
    </>
  );
}
