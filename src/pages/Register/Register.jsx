import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import Preloader from '../../components/Preloader/Preloader';
import FormFooter from '../../components/FormFooter/FormFooter';
import InformMessage from '../../components/InformMessage/InformMessage';
import { register } from '../../services/action/User';
import registerStyle from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registerRequest, registerFailed, registerMessage, isLogin } =
    useSelector((store) => store.user);

  useEffect(() => {
    isLogin && navigate('/');
  }, [isLogin, navigate]);

  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        email: value.email,
        password: value.password,
        name: value.name,
      })
    );
  };

  return (
    <main className={registerStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <form className={registerStyle.form} onSubmit={onSubmit}>
        {registerRequest && <Preloader isOverflow={true} />}
        <Input
          type="text"
          onChange={(e) => setValue({ ...value, name: e.target.value })}
          value={value.name}
          name={'name'}
          placeholder="Имя"
          extraClass="mb-6"
        />
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
          min={3}
          extraClass="mb-6"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Зарегистрироваться
        </Button>
        {registerFailed && <InformMessage message={registerMessage} />}
      </form>
      <div className="mt-20">
        <FormFooter
          text="Уже зарегистрированы?"
          linkText="Войти"
          path="/login"
        />
      </div>
    </main>
  );
};

export default Register;
