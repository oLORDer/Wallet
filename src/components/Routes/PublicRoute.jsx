// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { getLogin } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  // const isLogin = useSelector(getLogin);

  if (false) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PublicRoute;
