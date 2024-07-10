import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import NotFoundPage from 'pages/NotFoundPage';
import TestPage from 'pages/TestPage/TestPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
