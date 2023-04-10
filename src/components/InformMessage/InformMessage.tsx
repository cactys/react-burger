import { InfoIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import informMessageStyle from './InformMessage.module.css';
import { FC } from 'react';
import { IInformMessage } from '../../services/interfaces';

const InformMessage: FC<IInformMessage> = ({ message }) => {
  return (
    <p className={`text text_type_main-default ${informMessageStyle.error}`}>
      {message}
      <InfoIcon type="error" />
    </p>
  );
};

export default InformMessage;
