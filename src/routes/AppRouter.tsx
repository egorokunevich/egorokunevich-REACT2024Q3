// import Header from '@/components/Header';
// import ThemeToggler from '@/components/ThemeToggler';
// import { useTheme } from '@/theme/useTheme';
// import DetailsPage from 'pages/DetailsPage';
// import NotFoundPage from 'pages/NotFoundPage';
// import SearchPage from 'pages/SearchPage';
// import { Routes, Route, Outlet } from 'react-router-dom';

// const AppRouter = () => {
//   const { theme } = useTheme();
//   return (
//     <Routes>
//       <Route
//         element={
//           <div className={`app ${theme}`}>
//             <Header>
//               <ThemeToggler />
//             </Header>
//             <Outlet />
//           </div>
//         }
//       >
//         <Route path="/" errorElement={<NotFoundPage />}>
//           <Route index element={<SearchPage />} />
//           <Route path="*" element={<NotFoundPage />} />

//           <Route element={<SearchPage />}>
//             <Route path="pokemon/:id" element={<DetailsPage />} />
//             <Route path="pokemon/:pokeName" element={<DetailsPage />} />
//           </Route>
//         </Route>
//       </Route>
//     </Routes>
//   );
// };

// export default AppRouter;
