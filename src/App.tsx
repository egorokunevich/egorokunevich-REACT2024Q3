import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import NotFoundPage from 'pages/NotFoundPage';
import TestPage from 'pages/TestPage/TestPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage';
import DetailsPage from 'pages/DetailsPage';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="test" element={<TestPage />} />
            <Route path="pokemon/:id" element={<DetailsPage />} />
            <Route path="pokemon/:pokeName" element={<DetailsPage />} />
            <Route path="/:page" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
