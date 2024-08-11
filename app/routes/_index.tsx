import { Outlet } from '@remix-run/react';
import SearchPage from '@/pages/SearchPage';

export default function Index() {
  return (
    <>
      <SearchPage />
      <Outlet />
    </>
  );
}
