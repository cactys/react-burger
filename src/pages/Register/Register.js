import { useState } from 'react';
import {
  Button,
  EmailInput,
  InfoIcon,
  Input,
  PasswordInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import { Link } from 'react-router-dom';
import registerStyle from './Register.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../services/action/User';

const Register = () => {
  const dispatch = useDispatch();
  const { failed, message } = useSelector(
    (store) => store.user
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({
        email: email,
        password: password,
        name: name,
      })
    );
  };

  return (
    <main className={registerStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <form className={registerStyle.form} onSubmit={(e) => onSubmit(e)}>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name={'name'}
          placeholder="Имя"
          extraClass="mb-6"
        />
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
          min={3}
          extraClass="mb-6"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Зарегистрироваться
        </Button>
        {failed && (
          <p className={`text text_type_main-default ${registerStyle.error}`}>
            {message}
            <InfoIcon type="error" />
          </p>
        )}
      </form>
      <div className={`mt-20 ${registerStyle.registerFooter}`}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
        </p>
        <Link
          to="/login"
          className={`text text_type_main-default ${registerStyle.linkFooter}`}
        >
          Войти
        </Link>
      </div>
    </main>
  );
};

export default Register;
