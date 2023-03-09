import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className={appStyle.page}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
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
      </BrowserRouter>
    </div>
  );
};

export default App;
