import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ element }) => {
  const { user, userChecked } = useSelector((store) => store.user);

  if (!userChecked) {
    return <Preloader />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
