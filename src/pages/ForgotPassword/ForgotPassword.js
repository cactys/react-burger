import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, EmailInput } from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import forgotPasswordStyle from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleClick = () => {
    navigate('/reset-password');
  }

  return (
    <main className={forgotPasswordStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <EmailInput
        placeholder={'Укажите e-mail'}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name={'email'}
        isIcon={false}
        extraClass="mb-6"
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={handleClick}
      >
        Восстановить
      </Button>
      <div className={`mt-20 ${forgotPasswordStyle.registerFooter}`}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </p>
        <Link
          to="/login"
          className={`text text_type_main-default ${forgotPasswordStyle.linkFooter}`}
        >
          Войти
        </Link>
      </div>
    </main>
  );
};

export default ForgotPassword;
