import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { IProtectedRoute } from '../../services/interfaces';
import { TUser } from '../../services/types';
import { useSelector } from '../../services/hooks';

import { Preloader } from '../Preloader/Preloader';

const ProtectedAuthRoute: FC<IProtectedRoute> = ({ element }) => {
  const { user, userChecked } = useSelector((store: TUser) => store.user);
  const location = useLocation();

  if (!userChecked) {
    return <Preloader />;
  }

  if (user) {
    return <Navigate to={location.state?.from || '/'} />;
  }

  return element;
};

export { ProtectedAuthRoute };
