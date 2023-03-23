import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import FormFooter from '../../components/FormFooter/FormFooter';
import InformMessage from '../../components/InformMessage/InformMessage';
import Preloader from '../../components/Preloader/Preloader';
import { recoveryPasswordSend } from '../../services/action/User';
import resetPasswordStyle from './ResetPassword.module.css';
import { TUser } from '../../services/types';

const ResetPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    recoveryRequest,
    recoveryFailed,
    recoveryMessage,
    passwordRecovered,
    emailSended,
  } = useSelector((store: TUser) => store.user);

  const [value, setValue] = useState({
    password: '',
    token: '',
  });

  const [validity, setValidity] = useState({
    enable: false,
    message: '',
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (value.password.length >= 5) {
      dispatch<any>(
        recoveryPasswordSend({
          password: value.password,
          token: value.token,
        })
      );
      setValidity({
        enable: false,
        message: '',
      });
    } else {
      setValidity({
        enable: true,
        message: 'Введите не меньше 5 символов.',
      });
    }
  };

  useEffect(() => {
    if (!emailSended) navigate('/forgot-password');
    if (passwordRecovered) navigate('/login');
  }, [navigate, passwordRecovered, emailSended]);

  return (
    <main className={resetPasswordStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <form className={resetPasswordStyle.form} onSubmit={onSubmit}>
        {recoveryRequest && <Preloader isOverflow={true} />}
        <PasswordInput
          placeholder={'Введите новый пароль'}
          onChange={(e) => setValue({ ...value, password: e.target.value })}
          value={value.password}
          name={'password'}
          extraClass="mb-6"
        />
        <Input
          type="text"
          onChange={(e) => setValue({ ...value, token: e.target.value })}
          value={value.token}
          name={'token'}
          placeholder={'Введите код из письма'}
          extraClass="mb-6"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
        {validity.message && <InformMessage message={validity.message} />}
        {recoveryFailed && <InformMessage message={recoveryMessage} />}
      </form>
      <div className="mt-20">
        <FormFooter text="Вспомнили пароль?" linkText="Войти" path="/login" />
      </div>
    </main>
  );
};

export default ResetPassword;
