import { FC, FormEventHandler, SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import InformMessage from '../../components/InformMessage/InformMessage';
import FormFooter from '../../components/FormFooter/FormFooter';
import Preloader from '../../components/Preloader/Preloader';
import { getUser, login } from '../../services/action/User';
import loginStyle from './Login.module.css';
import { TUser } from '../../services/types';
import { useForm } from '../../hooks/useForm';

const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginRequest, loginFailed, loginMessage, isLogin } = useSelector(
    (store: TUser) => store.user
  );

  const { values, handleChange } = useForm({
    email: '',
    password: '',
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: SyntheticEvent<Element>
  ) => {
    e.preventDefault();
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
  };

  useEffect(() => {
    dispatch(getUser());
    isLogin && navigate('/');
  }, [isLogin, navigate, dispatch]);

  return (
    <main className={loginStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <form className={loginStyle.form} onSubmit={onSubmit}>
        {loginRequest && <Preloader isOverflow={true} />}
        <EmailInput
          onChange={handleChange}
          value={values.email || ''}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password || ''}
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
