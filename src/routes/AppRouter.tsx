import ControlledForm from '@/components/ControlledForm';
import UncontrolledForm from '@/components/UncontrolledForm';
import Index from '@/pages/Index/Index';
import NotFoundPage from '@/pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" errorElement={<NotFoundPage />}>
        <Route index element={<Index />} />
        <Route path="uncontrolled" element={<UncontrolledForm />} />
        <Route path="controlled" element={<ControlledForm />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
