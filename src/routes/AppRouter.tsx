import DetailsPage from 'pages/DetailsPage';
import NotFoundPage from 'pages/NotFoundPage';
import SearchPage from 'pages/SearchPage';
import TestPage from 'pages/TestPage/TestPage';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" errorElement={<NotFoundPage />}>
        <Route index element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="test" element={<TestPage />} />

        <Route element={<SearchPage />}>
          <Route path="pokemon/:id" element={<DetailsPage />} />
          <Route path="pokemon/:pokeName" element={<DetailsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
