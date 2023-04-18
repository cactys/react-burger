import { IOrderMessage } from '../../services/interfaces';

import orderFeedsInfoStyle from './OrderFeedsInfo.module.css';

const OrderFeedsInfo = ({
  orders,
  total,
  totalToday,
}: {
  orders: IOrderMessage[];
  total: number;
  totalToday: number;
}) => {
  const readyOrders = orders.filter((order) => order.status === 'done');
  const progressOrders = orders.filter((order) => order.status === 'created');

  return (
    <div className={orderFeedsInfoStyle.container}>
      <div className={orderFeedsInfoStyle.orderStatus}>
        <div className={orderFeedsInfoStyle.statusContainer}>
          <h3 className="text text_type_main-medium">Готовы:</h3>
          <ul className={orderFeedsInfoStyle.statusList}>
            {readyOrders.map((order, index) => (
              <li
                className={`text text_type_digits-default ${orderFeedsInfoStyle.done}`}
                key={index}
              >
                {order.status === 'done' && order.number}
              </li>
            ))}
          </ul>
        </div>
        <div className={orderFeedsInfoStyle.statusContainer}>
          <h3 className="text text_type_main-medium">В работе:</h3>
          <ul className={orderFeedsInfoStyle.statusList}>
            {progressOrders.map((order, index) => (
              <li className="text text_type_digits-default" key={index}>
                {order.status === 'done' && order.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={orderFeedsInfoStyle.totalFeeds}>
        <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
        <p
          className={`text text_type_digits-large ${orderFeedsInfoStyle.countFeeds}`}
        >
          {total}
        </p>
      </div>
      <div className={orderFeedsInfoStyle.totalFeeds}>
        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
        <p
          className={`text text_type_digits-large ${orderFeedsInfoStyle.countFeeds}`}
        >
          {totalToday}
        </p>
      </div>
    </div>
  );
};

export { OrderFeedsInfo };