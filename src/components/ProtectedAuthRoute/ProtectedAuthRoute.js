import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';

const ProtectedAuthRoute = ({ element }) => {
  const { user, userChecked } = useSelector((store) => store.user);
  const location = useLocation();

  if (!userChecked) {
    return <Preloader />;
  }

  if (user) {
    return <Navigate to={location.state?.from || '/'} />;
  }

  return element;
};

ProtectedAuthRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedAuthRoute;
