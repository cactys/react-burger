import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element }) => {
  const isLogin = JSON.parse(localStorage.getItem('login'));

  return isLogin ? element : <Navigate to="/login" replace />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
