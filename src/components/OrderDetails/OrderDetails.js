import orderDetailsStyle from './OrderDetails.module.css';
import done from '../../images/done.svg';
// import { OrderContext } from '../../services/ingredientsContext';
// import { useContext } from 'react';

const OrderDetails = () => {
  // const { order } = useContext(OrderContext);

  return (
    <div className={`pb-15 ${orderDetailsStyle.container}`}>
      <h3
        className={`mt-4 text text_type_digits-large ${orderDetailsStyle.numberOrder}`}
      >
        {/* {order} */}
      </h3>
      <p className="mt-8 text text_type_main-medium">идентификатор заказа</p>
      <img className="mt-15 mb-15" src={done} alt="Заказ готовится" />
      <p className="mb-2 text text_type_main-default">
        Ваш заказ начали готовить
      </p>
      <span
        className={` text text_type_main-default ${orderDetailsStyle.spanColor}`}
      >
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};

export default OrderDetails;
