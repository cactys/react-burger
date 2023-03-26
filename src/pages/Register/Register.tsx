import { FC, FormEventHandler, SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Preloader from '../../components/Preloader/Preloader';
import FormFooter from '../../components/FormFooter/FormFooter';
import InformMessage from '../../components/InformMessage/InformMessage';
import { register } from '../../services/action/User';
import registerStyle from './Register.module.css';
import { TUser } from '../../services/types';
import { useForm } from '../../hooks/useForm';

const Register: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registerRequest, registerFailed, registerMessage, isLogin } =
    useSelector((store: TUser) => store.user);

  const {values, handleChange} = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: SyntheticEvent<Element>
  ) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch<any>(
      register({
        email: values.email,
        password: values.password,
        name: values.name,
      })
    );
  };

  useEffect(() => {
    isLogin && navigate('/');
  }, [isLogin, navigate]);

  return (
    <main className={registerStyle.container}>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <form className={registerStyle.form} onSubmit={onSubmit}>
        {registerRequest && <Preloader isOverflow={true} />}
        <Input
          type="text"
          onChange={handleChange}
          value={values.name || ''}
          name={'name'}
          placeholder="Имя"
          extraClass="mb-6"
        />
        <EmailInput
          onChange={handleChange}
          value={values.email || ''}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password || ''}
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
