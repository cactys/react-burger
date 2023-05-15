import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { IProtectedRoute } from '../../services/interfaces';
import { TUser } from '../../services/types';
import { useSelector } from '../../services/hooks';

import { Preloader } from '../Preloader/Preloader';

const ProtectedRoute: FC<IProtectedRoute> = ({ element }) => {
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
