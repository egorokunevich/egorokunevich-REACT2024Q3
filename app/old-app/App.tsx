import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';

import AppRouter from '@/routes/AppRouter';
import { store } from './store';
import { Provider } from 'react-redux';
import ThemeProvider from '@/theme/ThemeProvider';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
