import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OrderHistory from '../../components/OrderHistory/OrderHistory';
import Preloader from '../../components/Preloader/Preloader';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { logout } from '../../services/action/User';
import profileStyle from './Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLogout, logoutRequest } = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    isLogout && navigate('/login');
  }, [isLogout, navigate]);

  return (
    <main className={`mt-30 ${profileStyle.container}`}>
      {logoutRequest && <Preloader isOverflow={true} />}
      <nav className={profileStyle.navigate}>
        <ul className={profileStyle.navList}>
          <li className={profileStyle.navItem}>
            <Link to="/profile" className={`${profileStyle.navLink}`}>
              <p
                className={`text text_type_main-medium ${
                  location.pathname === '/profile' ? '' : 'text_color_inactive'
                }`}
              >
                Профиль
              </p>
            </Link>
          </li>
          <li className={profileStyle.navItem}>
            <Link to="/profile/orders" className={`${profileStyle.navLink}`}>
              <p
                className={`text text_type_main-medium ${
                  location.pathname === '/profile/orders'
                    ? ''
                    : 'text_color_inactive'
                }`}
              >
                История заказов
              </p>
            </Link>
          </li>
          <li className={profileStyle.navItem}>
            <Link onClick={handleLogout} className={`${profileStyle.navLink}`}>
              <p className="text text_type_main-medium text_color_inactive">
                Выход
              </p>
            </Link>
          </li>
        </ul>
        <p
          className={`text text_type_main-default text_color_inactive mt-20 ${profileStyle.subtitle}`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      {location.pathname === '/profile' && <ProfileForm />}
      {location.pathname === '/profile/orders' && <OrderHistory />}
    </main>
  );
};

export default Profile;
