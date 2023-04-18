import { InfoIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { IInformMessage } from '../../services/interfaces';

import informMessageStyle from './InformMessage.module.css';

const InformMessage: FC<IInformMessage> = ({ message }) => {
  return (
    <p className={`text text_type_main-default ${informMessageStyle.error}`}>
      {message}
      <InfoIcon type="error" />
    </p>
  );
};

export { InformMessage };
