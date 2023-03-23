import { FC, useEffect, useState } from 'react';
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

const ProfileForm: FC = () => {
  const dispatch = useDispatch();
  const { user, updateRequest, updateFailed, updateMessage } = useSelector(
    (store: TUser) => store.user
  );

  const [value, setValue] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({
    name: '',
    email: '',
    password: '',
  });

  const [editor, setEditor] = useState(true);

  const validity =
    value.name === user?.name &&
    value.email === user?.email &&
    value.password === user?.password;

  useEffect(() => {
    setValue({
      name: user?.name,
      email: user?.email,
    });
  }, [setValue, user]);

  const onIconClick = () => {
    setEditor(false);
  };

  const onChange = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setValue({
      name: user?.name,
      email: user?.email,
    });
    dispatch<any>(updateUserInfo(value));
    setEditor(true);
  };

  const handleCancelSubmit = (e: any) => {
    e.preventDefault();
    dispatch<any>(getUser());
    setEditor(true);
  };

  return (
    <form className={profileFormStyle.inputForm} onSubmit={onSubmit}>
      {updateRequest && <Preloader isOverflow={true} />}
      <Input
        type="text"
        onChange={onChange}
        value={value.name || ''}
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
        onChange={onChange}
        value={value.email || ''}
        name={'email'}
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={onChange}
        value={value.password || ''}
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
