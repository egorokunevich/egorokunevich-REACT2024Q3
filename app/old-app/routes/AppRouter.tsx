import Header from '@/components/Header';
import ThemeToggler from '@/components/ThemeToggler';
import { useTheme } from '@/theme/useTheme';
import DetailsPage from '@/pages/DetailsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import SearchPage from '@/pages/SearchPage';
import { Routes, Route, Outlet } from 'react-router-dom';

const AppRouter = () => {
  const { theme } = useTheme();
  return (
    <Routes>
      <Route
        element={
          <div className={`app ${theme}`}>
            <Header>
              <ThemeToggler />
            </Header>
            <Outlet />
          </div>
        }
        path="/*"
        errorElement={<NotFoundPage />}
      >
        <Route element={<SearchPage />}>
          <Route index element={<div></div>} />

          <Route path="pokemon/:id" element={<DetailsPage />} />
          <Route path="pokemon/:pokeName" element={<DetailsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
