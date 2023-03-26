import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { IProtectedRoute } from '../../services/interfaces';
import { TUser } from '../../services/types';

const ProtectedAuthRoute: FC<IProtectedRoute> = ({ element }: any) => {
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

export default ProtectedAuthRoute;
