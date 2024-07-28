import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AppRouter from 'routes/AppRouter';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
