import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from '../Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const PrivatePage = lazy(() => import('../../pages/PrivatePage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        {/* <Route element={<PrivateRoute />}>
          <Route path="/dairy" element={<DairyPage />} />
          <Route path="/calculator-calories" element={<CalcPage />} />
        </Route> */}

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
