import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import FormFooter from '../../components/FormFooter/FormFooter';
import InformMessage from '../../components/InformMessage/InformMessage';
import Preloader from '../../components/Preloader/Preloader';
import {
  recoveryEmailSend,
} from '../../services/action/User';
import forgotPasswordStyle from './ForgotPassword.module.css';
import { TUser } from '../../services/types';

const ForgotPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recoveryRequest, recoveryFailed, recoveryMessage, emailSended } =
    useSelector((store: TUser) => store.user);

  const [email, setEmail] = useState('');
  const [validity, setValidity] = useState<any>({
    enable: false,
    message: '',
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (email.length === 0) {
      setValidity({
        enable: true,
        message: 'Введите E-mail',
      });
    } else {
      dispatch<any>(
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
        {recoveryRequest && <Preloader isOverflow={true} />}
        <EmailInput
          placeholder={'Укажите e-mail'}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
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

export default ForgotPassword;
