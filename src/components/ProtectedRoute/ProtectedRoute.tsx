import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader';
import { FC } from 'react';
import { IProtectedRoute } from '../../services/interfaces';
import { TUser } from '../../services/types';
import { useSelector } from '../../services/hooks';

const ProtectedRoute: FC<IProtectedRoute> = ({ element }: any) => {
  const { user, userChecked } = useSelector((store: TUser) => store.user);

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
