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
import Header from './components/Header';
import ThemeToggler from './components/ThemeToggler';
import { useAppSelector } from './hooks/reduxHooks';
import { getThemeSelector } from './store/selectors';

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
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const theme = useAppSelector(getThemeSelector);
  return (
    <div className={`app ${theme}`}>
      <Header>
        <ThemeToggler />
      </Header>
      <Outlet />
    </div>
  );
}
