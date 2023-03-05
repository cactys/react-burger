import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import profileStyle from './Profile.module.css';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState('Марк');
  const [login, setLogin] = useState('bob@example.com');
  const [password, setPassword] = useState('p@ssw0rd');

  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    console.log(inputRef.current.value);
  };

  // const cn = location.pathname ? '123' : '321';

  // console.log(cn);

  return (
    <main className={`mt-30 ${profileStyle.container}`}>
      <nav className={profileStyle.navigate}>
        <ul className={profileStyle.navList}>
          <li className={profileStyle.navItem}>
            <Link to="/profile" className={`${profileStyle.navLink}`}>
              <p className="text text_type_main-medium">Профиль</p>
            </Link>
          </li>
          <li className={profileStyle.navItem}>
            <Link to="/profile/orders" className={`${profileStyle.navLink}`}>
              <p className="text text_type_main-medium text_color_inactive">
                История заказов
              </p>
            </Link>
          </li>
          <li className={profileStyle.navItem}>
            <Link to="/register" className={`${profileStyle.navLink}`}>
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
      <div className={profileStyle.inputForm}>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name={'name'}
          placeholder="Имя"
          icon="EditIcon"
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
        />
        <EmailInput
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          name={'email'}
          placeholder="Логин"
          isIcon={true}
          extraClass="mb-6"
        />
        <PasswordInput
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={'password'}
          icon="EditIcon"
        />
      </div>
    </main>
  );
};

export default Profile;
