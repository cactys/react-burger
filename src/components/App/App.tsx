import { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { getUser } from '../../services/action/User';
import {
  getIngredients,
  INGREDIENT_DELETE_INFO,
} from '../../services/action/BurgerIngredients';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedAuthRoute from '../ProtectedAuthRoute/ProtectedAuthRoute';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import Profile from '../../pages/Profile/Profile';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import NotFound from '../../pages/NotFound/NotFound';
import appStyle from './App.module.css';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

const App: FC = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
    dispatch({
      type: INGREDIENT_DELETE_INFO,
    });
  };

  useEffect(() => {
    dispatch<any>(getUser());
    dispatch<any>(getIngredients());
  }, [dispatch]);

  console.log(background);

  return (
    <div className={appStyle.page}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Main />} />
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
        <Route path="/ingredients/:id" element={<IngredientDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal title="Детали ингредиента" onClose={handleModalClose}>
                <IngredientDetails background={background} />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
