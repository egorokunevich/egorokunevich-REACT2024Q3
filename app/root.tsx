import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react';
import '@/index.scss';
import ErrorPage from './pages/ErrorPage';
import { store } from './store';
import ThemeProvider from './theme/ThemeProvider';
import { Provider } from 'react-redux';
import { useTheme } from './theme/useTheme';
import Header from './components/Header';
import ThemeToggler from './components/ThemeToggler';

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorPage />
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <div className={`app ${theme}`}>
              <Header>
                <ThemeToggler />
              </Header>
              {children}
            </div>
          </ThemeProvider>
        </Provider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
