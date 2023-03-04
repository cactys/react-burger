import { useState } from 'react';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import { Link } from 'react-router-dom';
import registerStyle from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className={registerStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
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
        extraClass="mb-6"
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        // onClick={handleClick}
      >
        Зарегистрироваться
      </Button>
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
