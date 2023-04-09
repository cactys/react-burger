import { FC, FormEventHandler, SyntheticEvent, useEffect } from 'react';
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
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from '../../services/hooks';

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

  const { values, handleChange, setValues } = useForm({
    password: '',
    token: '',
    enable: false,
    message: '',
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: SyntheticEvent<Element>
  ) => {
    e.preventDefault();
    if (values.password?.length && values.password?.length >= 5) {
      dispatch(
        recoveryPasswordSend({
          password: values.password,
          token: values.token,
        })
      );
      setValues({
        enable: false,
        message: '',
      });
    } else {
      setValues({
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
          onChange={handleChange}
          value={values.password || ''}
          name={'password'}
          extraClass="mb-6"
        />
        <Input
          type="text"
          onChange={handleChange}
          value={values.token || ''}
          name={'token'}
          placeholder={'Введите код из письма'}
          extraClass="mb-6"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
        {values.message && <InformMessage message={values.message} />}
        {recoveryFailed && <InformMessage message={recoveryMessage} />}
      </form>
      <div className="mt-20">
        <FormFooter text="Вспомнили пароль?" linkText="Войти" path="/login" />
      </div>
    </main>
  );
};

export default ResetPassword;
