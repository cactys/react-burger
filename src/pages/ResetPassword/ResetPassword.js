import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Input,
  PasswordInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import resetPasswordStyle from './ResetPassword.module.css';

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [secretCode, setSecretCode] = useState('');

  const handleClick = () => {
    navigate('/');
  };

  return (
    <main className={resetPasswordStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <PasswordInput
        placeholder={'Введите новый пароль'}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name={'password'}
        extraClass="mb-6"
      />
      <Input
        type="text"
        onChange={(e) => setSecretCode(e.target.value)}
        value={secretCode}
        name={'secretCode'}
        placeholder={'Введите код из письма'}
        extraClass="mb-6"
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={handleClick}
      >
        Сохранить
      </Button>
      <div className={`mt-20 ${resetPasswordStyle.registerFooter}`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Link
          to="/login"
          className={`text text_type_main-default ${resetPasswordStyle.linkFooter}`}
        >
          Войти
        </Link>
      </div>
    </main>
  );
};

export default ResetPassword;
