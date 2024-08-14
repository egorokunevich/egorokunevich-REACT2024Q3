import ControlledForm from '@/components/ControlledForm';
import UncontrolledForm from '@/components/UncontrolledForm';
import NotFoundPage from '@/pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" errorElement={<NotFoundPage />}>
        <Route path="uncontrolled" element={<UncontrolledForm />} />
        <Route path="controlled" element={<ControlledForm />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
