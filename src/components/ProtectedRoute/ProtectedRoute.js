import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../services/auth';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ element }) => {
  let { ...auth } = useAuth();
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  const init = async () => {
    setIsUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  console.log(auth.user);

  return auth.user ? element : <Navigate to="/login" replace />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
