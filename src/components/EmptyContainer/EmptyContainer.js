import emptyContainerStyle from './EmptyContainer.module.css';

const EmptyContainer = () => {
  return (
    <div className={emptyContainerStyle.container}>
      <p className="text text_type_main-large">Добавь сюда булки</p>
    </div>
  );
};

export default EmptyContainer;
