import profileFormStyle from './ProfileForm.module.css';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../services/action/User';

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  console.log(user);

  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [editor, setEditor] = useState(true);

  console.log(value);

  const validity = user.name === value.name && user.email === value.email;

  console.log(validity);

  useEffect(() => {
    setValue({
      name: user?.name,
      email: user?.email,
      password: '',
    });
  }, [setValue, user]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(value.name, value.email, value.password));
    setValue({
      name: user?.name,
      email: user?.email,
      password: '',
    });
    console.log(e);
  };

  const inputRef = useRef(null);

  const onIconClick = () => {
    setEditor(false);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  return (
    <form className={profileFormStyle.inputForm} onSubmit={(e) => onSubmit(e)}>
      <Input
        type="text"
        onChange={(e) => setValue({ ...value, name: e.target.value })}
        value={value.name || ''}
        name={'name'}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        disabled={editor}
        errorText={'Ошибка'}
        size={'default'}
        placeholder="Имя"
        icon="EditIcon"
        extraClass="mb-6"
      />
      <EmailInput
        type="text"
        onChange={(e) => setValue({ ...value, email: e.target.value })}
        value={value.email || ''}
        name={'email'}
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-6"
      />
      <PasswordInput
        type="text"
        onChange={(e) => setValue({ ...value, password: e.target.value })}
        value={value.password || ''}
        name={'password'}
        icon="EditIcon"
      />
      <div className={profileFormStyle.submitContainer}>
        <Button htmlType="button" type="secondary" size="small">
          Отмена
        </Button>
        <Button htmlType="submit" type="primary" size="small">
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
