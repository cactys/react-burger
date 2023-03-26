import {
  FC,
  FormEventHandler,
  SyntheticEvent,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import FormFooter from '../../components/FormFooter/FormFooter';
import InformMessage from '../../components/InformMessage/InformMessage';
import Preloader from '../../components/Preloader/Preloader';
import { recoveryEmailSend } from '../../services/action/User';
import forgotPasswordStyle from './ForgotPassword.module.css';
import { TUser } from '../../services/types';
import { useForm } from '../../hooks/useForm';

const ForgotPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recoveryRequest, recoveryFailed, recoveryMessage, emailSended } =
    useSelector((store: TUser) => store.user);

  const { values, handleChange, setValues } = useForm({
    email: '',
    enable: false,
    message: '',
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: SyntheticEvent<Element>
  ) => {
    e.preventDefault();

    if (!values.email) {
      setValues({
        enable: true,
        message: 'Введите E-mail',
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch<any>(
        recoveryEmailSend({
          email: values.email,
        })
      );
      setValues({
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
          onChange={handleChange}
          value={values.email || ''}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
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

export default ForgotPassword;
