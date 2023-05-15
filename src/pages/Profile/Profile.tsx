import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../services/action';
import { TUser } from '../../services/types';
import { useDispatch, useSelector } from '../../services/hooks';

import { OrderHistory } from '../OrderHistory/OrderHistory';
import { Preloader } from '../../components/Preloader/Preloader';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm';

import profileStyle from './Profile.module.css';

const Profile = () => {
  const { logoutRequest } = useSelector((store: TUser) => store.user);

  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout: () => void = () => {
    dispatch(logout());
  };

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
            <button
              onClick={handleLogout}
              className={`${profileStyle.navButton}`}
            >
              <p className="text text_type_main-medium text_color_inactive">
                Выход
              </p>
            </button>
          </li>
        </ul>
        <p
          className={`text text_type_main-default text_color_inactive ${profileStyle.subtitle}`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      {location.pathname === '/profile' && <ProfileForm />}
      {location.pathname === '/profile/orders' && <OrderHistory />}
    </main>
  );
};

export { Profile };
