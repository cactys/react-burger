import { useRef, useState } from 'react';
import {
  EmailInput,
  Input,
  PasswordInput,
} from '../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/index';
import profileStyle from './Profile.module.css';

const Profile = () => {
  const [valueName, setValueName] = useState('Марк');
  const [valueLogin, setValueLogin] = useState('bob@example.com');
  const [valuePassword, setValuePassword] = useState('p@ssw0rd');
  const inputRef = useRef(null);

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert('Icon Click Callback');
  };

  return (
    <main className={`mt-30 ${profileStyle.container}`}>
      <nav className={profileStyle.navigate}></nav>
      <div className={profileStyle.inputForm}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => setValueName(e.target.value)}
          icon={'EditIcon'}
          value={valueName}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
        />
        <EmailInput
          onChange={(e) => setValueLogin(e.target.value)}
          value={valueLogin}
          name={'email'}
          placeholder="Логин"
          isIcon={true}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={(e) => setValuePassword(e.target.value)}
          value={valuePassword}
          name={'password'}
          icon="EditIcon"
        />
      </div>
    </main>
  );
};

export default Profile;
