import { FC } from 'react';
import done from '../../images/done.svg';
import Preloader from '../Preloader/Preloader';
import orderDetailsStyle from './OrderDetails.module.css';
import { useSelector } from '../../services/hooks';
import { TOrderDetails } from '../../services/types';

const OrderDetails: FC = () => {
  const { currentOrder, message, orderRequest, orderFailed } = useSelector(
    (store: TOrderDetails) => store.orderDetails
  );

  return (
    <div className={`pb-15 ${orderDetailsStyle.container}`}>
      <h3
        className={`mt-4 text ${
          !orderFailed ? 'text_type_digits-large' : 'text_type_main-medium'
        } ${orderDetailsStyle.numberOrder}`}
      >
        {!orderFailed ? currentOrder?.number : message}
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
