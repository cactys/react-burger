import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  EmailInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import FormFooter from '../../components/FormFooter/FormFooter';
import InformMessage from '../../components/InformMessage/InformMessage';
import Preloader from '../../components/Preloader/Preloader';
import {
  recoveryEmailSend,
} from '../../services/action/User';
import forgotPasswordStyle from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recoveryRequest, recoveryFailed, recoveryMessage, emailSended } =
    useSelector((store) => store.user);

  const [email, setEmail] = useState('');
  const [validity, setValidity] = useState({
    enable: false,
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setValidity({
        enable: true,
        message: 'Введите E-mail',
      });
    } else {
      dispatch(
        recoveryEmailSend({
          email: email,
        })
      );
      setValidity({
        enable: false,
        message: '',
      });
    }
  };

  useEffect(() => {
    if (emailSended) navigate('/reset-password');
  }, [emailSended, navigate]);

  return (
    <main className={forgotPasswordStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <form className={forgotPasswordStyle.form} onSubmit={onSubmit}>
        {recoveryRequest && <Preloader />}
        <EmailInput
          placeholder={'Укажите e-mail'}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
          error={validity.enable}
          errorText={validity.message}
        />
        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
        </Button>
        {recoveryFailed && <InformMessage message={recoveryMessage} />}
      </form>
      <div className="mt-20">
        <FormFooter text="Вспомнили пароль?" linkText="Войти" path="/login" />
      </div>
    </main>
  );
};

export default ForgotPassword;
