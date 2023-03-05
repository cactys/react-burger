import profileFormStyle from './ProfileForm.module.css';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import { useRef, useState } from 'react';

const ProfileForm = () => {
  const [name, setName] = useState('Марк');
  const [login, setLogin] = useState('bob@example.com');
  const [password, setPassword] = useState('p@ssw0rd');

  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    console.log(inputRef.current.value);
  };

  return (
    <form className={profileFormStyle.inputForm}>
      <Input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        name={'name'}
        placeholder="Имя"
        icon="EditIcon"
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="mb-6"
      />
      <EmailInput
        type="text"
        onChange={(e) => setLogin(e.target.value)}
        value={login}
        name={'email'}
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-6"
      />
      <PasswordInput
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name={'password'}
        icon="EditIcon"
      />
    </form>
  );
};

export default ProfileForm;
