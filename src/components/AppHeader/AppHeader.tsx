import { Link, useLocation } from 'react-router-dom';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import headerStyle from './AppHeader.module.css';

const AppHeader = () => {
  const location = useLocation();

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.container}>
        <ul className={headerStyle.navigate}>
          <li className="pl-5 pr-5 pb-4 pt-4">
            <Link className={headerStyle.link} to="/">
              <BurgerIcon
                type={location.pathname === '/' ? 'primary' : 'secondary'}
              />
              <p
                className={`text text_type_main-default ${
                  location.pathname !== '/' ? 'text_color_inactive' : ''
                }`}
              >
                Конструктор
              </p>
            </Link>
          </li>
          <li className="pl-5 pr-5 pb-4 pt-4">
            <Link className={headerStyle.link} to="/feed">
              <ListIcon
                type={location.pathname === '/feed' ? 'primary' : 'secondary'}
              />
              <p
                className={`text text_type_main-default ${
                  location.pathname !== '/feed' ? 'text_color_inactive' : ''
                }`}
              >
                Лента заказов
              </p>
            </Link>
          </li>
        </ul>
        <Logo />
        <div className={headerStyle.profile}>
          <Link
            to="/profile"
            className={`${headerStyle.link} pl-5 pr-5 pb-4 pt-4`}
          >
            <ProfileIcon
              type={location.pathname === '/profile' ? 'primary' : 'secondary'}
            />
            <p
              className={`text text_type_main-default ${
                location.pathname !== '/profile' ? 'text_color_inactive' : ''
              }`}
            >
              Личный кабинет
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export { AppHeader };
