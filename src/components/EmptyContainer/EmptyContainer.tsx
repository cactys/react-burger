import { FC } from 'react';
import emptyContainerStyle from './EmptyContainer.module.css';

const EmptyContainer: FC = () => {
  return (
    <div className={emptyContainerStyle.container}>
      <p className="text text_type_main-large">Добавь сюда булки</p>
    </div>
  );
};

export default EmptyContainer;
