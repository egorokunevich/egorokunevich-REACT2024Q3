import type { AppProps } from 'next/app';
import '../index.scss';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { store } from '@/store';
import ThemeProvider from '@/theme/ThemeProvider';
import { Provider } from 'react-redux';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}
