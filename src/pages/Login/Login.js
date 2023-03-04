import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  EmailInput,
  InfoIcon,
  PasswordInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import { login } from '../../services/action/User';
import loginStyle from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const { failed, message } = useSelector((store) => store.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
      })
    );
  };

  return (
    <main className={loginStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <form className={loginStyle.form} onSubmit={(e) => onSubmit(e)}>
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={'password'}
          extraClass="mb-6"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
        {failed && (
          <p className={`text text_type_main-default ${loginStyle.error}`}>
            {message}
            <InfoIcon type="error" />
          </p>
        )}
      </form>
      <div className={`mt-20 ${loginStyle.registerFooter}`}>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </p>
        <Link
          to="/register"
          className={`text text_type_main-default ${loginStyle.linkFooter}`}
        >
          Зарегистрироваться
        </Link>
      </div>
      <div className={`mt-4 ${loginStyle.registerFooter}`}>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </p>
        <Link
          to="/forgot-password"
          className={`text text_type_main-default ${loginStyle.linkFooter}`}
        >
          Восстановить пароль
        </Link>
      </div>
    </main>
  );
};

export default Login;
