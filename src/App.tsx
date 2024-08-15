import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from '@/routes/AppRouter';
import { store } from './store';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
