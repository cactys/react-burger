import appStyle from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import Profile from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../services/action/User';

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
          <Route path="/" element={<ProtectedRoute element={<Main />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
          <Route
            path="/profile/orders"
            element={<ProtectedRoute element={<Profile />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
