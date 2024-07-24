import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AppRouter from 'routes/AppRouter';
import { store } from './store';
import { Provider } from 'react-redux';
import ThemeProvider from 'theme/ThemeProvider';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
