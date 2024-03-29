import { FormEventHandler, SyntheticEvent, useEffect, useState } from 'react';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { TUser } from '../../services/types';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from '../../services/hooks';
import { getUser, updateUserInfo } from '../../services/action';

import { Preloader } from '../Preloader/Preloader';
import { InformMessage } from '../InformMessage/InformMessage';

import profileFormStyle from './ProfileForm.module.css';

const ProfileForm = () => {
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
    dispatch(updateUserInfo({ user: values }));
    setEditor(true);
  };

  const handleCancelSubmit = (e: SyntheticEvent<Element>) => {
    e.preventDefault();
    dispatch(getUser());
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

export { ProfileForm };
