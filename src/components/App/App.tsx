import { useEffect, FC } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { getUser, getIngredients } from '../../services/action';
import { useDispatch } from '../../services/hooks';
import { ingredientDeleteInfo } from '../../services/constants';

import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { ProtectedAuthRoute } from '../ProtectedAuthRoute/ProtectedAuthRoute';
import { AppHeader } from '../AppHeader/AppHeader';
import { Main } from '../Main/Main';
import { Profile } from '../../pages/Profile/Profile';
import { Login } from '../../pages/Login/Login';
import { Register } from '../../pages/Register/Register';
import { ForgotPassword } from '../../pages/ForgotPassword/ForgotPassword';
import { ResetPassword } from '../../pages/ResetPassword/ResetPassword';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Modal } from '../Modal/Modal';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails';
import { OrderFeeds } from '../../pages/OrderFeeds/OrderFeeds';
import { OrderFeedsDetails } from '../OrderFeedsDetails/OrderFeedsDetails';

import appStyle from './App.module.css';

const App: FC = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleIngredientModalClose: () => void = () => {
    navigate(-1);
    dispatch(ingredientDeleteInfo());
  };

  const handleOrderModalClose: () => void = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getUser());
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    navigate(location.pathname);
  }, []);

  return (
    <div className={appStyle.page}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Main />} />
        <Route path="/feed" element={<OrderFeeds />} />
        <Route
          path="/login"
          element={<ProtectedAuthRoute element={<Login />} />}
        />
        <Route
          path="/register"
          element={<ProtectedAuthRoute element={<Register />} />}
        />
        <Route
          path="/forgot-password"
          element={<ProtectedAuthRoute element={<ForgotPassword />} />}
        />
        <Route
          path="/reset-password"
          element={<ProtectedAuthRoute element={<ResetPassword />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route
          path="/profile/orders"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route
          path="/profile/orders/:id"
          element={<ProtectedRoute element={<OrderFeedsDetails />} />}
        />
        <Route path="/ingredients/:id" element={<IngredientDetails />} />
        <Route path="/feed/:id" element={<OrderFeedsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                title="Детали ингредиента"
                onClose={handleIngredientModalClose}
              >
                <IngredientDetails background={background} />
              </Modal>
            }
          />
          <Route
            path="/feed/:id"
            element={
              <Modal onClose={handleOrderModalClose}>
                <OrderFeedsDetails background={background} />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <Modal onClose={handleOrderModalClose}>
                <OrderFeedsDetails background={background} />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export { App };
