import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  EmailInput,
  PasswordInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import InformMessage from '../../components/InformMessage/InformMessage';
import FormFooter from '../../components/FormFooter/FormFooter';
import Preloader from '../../components/Preloader/Preloader';
import { getUser, login } from '../../services/action/User';
import loginStyle from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginRequest, loginFailed, loginMessage, isLogin } = useSelector(
    (store) => store.user
  );

  useEffect(() => {
    dispatch(getUser());
    isLogin && navigate('/');
  }, [isLogin, navigate]);

  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: value.email,
        password: value.password,
      })
    );
  };

  return (
    <main className={loginStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <form className={loginStyle.form} onSubmit={onSubmit}>
        {loginRequest && <Preloader />}
        <EmailInput
          onChange={(e) => setValue({ ...value, email: e.target.value })}
          value={value.email}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={(e) => setValue({ ...value, password: e.target.value })}
          value={value.password}
          name={'password'}
          extraClass="mb-6"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
        {loginFailed && <InformMessage message={loginMessage} />}
      </form>
      <div className="mt-20">
        <FormFooter
          text="Вы — новый пользователь?"
          linkText="Зарегистрироваться"
          path="/register"
        />
        <FormFooter
          text="Забыли пароль?"
          linkText="Восстановить пароль"
          path="/forgot-password"
        />
      </div>
    </main>
  );
};

export default Login;
