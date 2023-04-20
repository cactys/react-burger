import { Navigate } from 'react-router-dom';
import { IProtectedRoute } from '../../services/interfaces';
import { TUser } from '../../services/types';
import { useSelector } from '../../services/hooks';

import { Preloader } from '../Preloader/Preloader';

const ProtectedRoute = ({ element }: IProtectedRoute) => {
  const { user, userChecked } = useSelector((store: TUser) => store.user);

  if (!userChecked) {
    return <Preloader />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export { ProtectedRoute };
