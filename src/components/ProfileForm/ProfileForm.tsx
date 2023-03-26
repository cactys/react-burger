import {
  FC,
  FormEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { getUser, updateUserInfo } from '../../services/action/User';
import Preloader from '../Preloader/Preloader';
import InformMessage from '../InformMessage/InformMessage';
import profileFormStyle from './ProfileForm.module.css';
import { TUser } from '../../services/types';
import { useForm } from '../../hooks/useForm';

const ProfileForm: FC = () => {
  const dispatch = useDispatch();
  const { user, updateRequest, updateFailed, updateMessage } = useSelector(
    (store: TUser) => store.user
  );
  const { values, handleChange, setValues } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [editor, setEditor] = useState(true);

  const validity =
    values.name === user?.name &&
    values.email === user?.email &&
    values.password === user?.password;

  useEffect(() => {
    setValues({
      name: user?.name,
      email: user?.email,
    });
  }, [setValues, user]);

  const onIconClick = () => {
    setEditor(false);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: SyntheticEvent<Element>
  ) => {
    e.preventDefault();
    setValues({
      name: user?.name,
      email: user?.email,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch<any>(updateUserInfo(values));
    setEditor(true);
  };

  const handleCancelSubmit = (e: SyntheticEvent<Element>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch<any>(getUser());
    setEditor(true);
  };

  return (
    <form className={profileFormStyle.inputForm} onSubmit={onSubmit}>
      {updateRequest && <Preloader isOverflow={true} />}
      <Input
        type="text"
        onChange={handleChange}
        value={values.name || ''}
        name={'name'}
        error={false}
        onIconClick={onIconClick}
        disabled={editor}
        errorText={'Ошибка'}
        size={'default'}
        placeholder="Имя"
        icon="EditIcon"
        extraClass="mb-6"
      />
      <EmailInput
        onChange={handleChange}
        value={values.email || ''}
        name={'email'}
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={handleChange}
        value={values.password || ''}
        name={'password'}
        icon="EditIcon"
      />
      <div className={profileFormStyle.submitContainer}>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          disabled={validity}
          onClick={handleCancelSubmit}
        >
          Отмена
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={validity}
        >
          Сохранить
        </Button>
        {updateFailed && <InformMessage message={updateMessage} />}
      </div>
    </form>
  );
};

export default ProfileForm;
