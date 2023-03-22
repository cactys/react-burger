import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import headerStyle from './AppHeader.module.css';

const AppHeader: FC = () => {
  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.container}>
        <ul className={headerStyle.navigate}>
          <li className="pl-5 pr-5 pb-4 pt-4">
            <Link className={headerStyle.link} to="/">
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default">Конструктор</p>
            </Link>
          </li>
          <li className="pl-5 pr-5 pb-4 pt-4">
            <Link className={headerStyle.link} to="/">
              <ListIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive">
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
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
              Личный кабинет
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
