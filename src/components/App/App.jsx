import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { getUser } from '../../services/action/User';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedAuthRoute from '../ProtectedAuthRoute/ProtectedAuthRoute';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import Profile from '../../pages/Profile/Profile';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Ingredients from '../../pages/Ingredients/Ingredients';
import NotFound from '../../pages/NotFound/NotFound';
import appStyle from './App.module.css';
import { INGREDIENT_DELETE_INFO } from '../../services/action/BurgerIngredients';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

const App = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  let background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
    dispatch({
      type: INGREDIENT_DELETE_INFO,
    });
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

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
        <Route path="/ingredients/:id" element={<Ingredients />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {background && (
        <Modal title="Детали ингредиента" onClose={handleModalClose}>
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
};

export default App;
