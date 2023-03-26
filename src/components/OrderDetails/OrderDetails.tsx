import { FC } from 'react';
import { useSelector } from 'react-redux';
import done from '../../images/done.svg';
import { TOrderDetails } from '../../services/types';
import Preloader from '../Preloader/Preloader';
import orderDetailsStyle from './OrderDetails.module.css';

const OrderDetails: FC = () => {
  const { currentOrder, message, orderRequest } = useSelector((store: TOrderDetails) => store.orderDetails);

  return (
    <div className={`pb-15 ${orderDetailsStyle.container}`}>
      <h3
        className={`mt-4 text ${currentOrder ? 'text_type_digits-large' : 'text_type_main-medium'
          } ${orderDetailsStyle.numberOrder}`}
      >
        {currentOrder ? currentOrder.number : message}
      </h3>
      <p className="mt-8 text text_type_main-medium">идентификатор заказа</p>
      <div className={`mt-15 mb-15 ${orderDetailsStyle.done}`}>
        {orderRequest ? (
          <Preloader />
        ) : (
          <img src={done} alt="Заказ готовится" />
        )}
      </div>
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