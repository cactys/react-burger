import { IOrderMessage } from '../../services/interfaces';

import orderFeedsInfoStyle from './OrderFeedsInfo.module.css';

const OrderFeedsInfo = ({ orders }: { orders: IOrderMessage[] }) => {
  const readyOrders = orders.filter((order) => order.status === 'done');
  const progressOrders = orders.filter((order) => order.status === 'created');

  return (
    <div className={orderFeedsInfoStyle.container}>
      <div>
        <ul>
          {readyOrders.map((order, index) => (
            <li key={index}>{order.status === 'done' && order.number}</li>
          ))}
        </ul>
        <ul>
          {progressOrders.map((order, index) => (
            <li key={index}>{order.status === 'done' && order.number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { OrderFeedsInfo };
