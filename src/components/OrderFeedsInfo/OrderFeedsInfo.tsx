import { IOrderMessage } from '../../services/interfaces';

import orderFeedsInfoStyle from './OrderFeedsInfo.module.css';

const OrderFeedsInfo = ({ orders }: { orders: IOrderMessage[] }) => {
  return (
    <div className={orderFeedsInfoStyle.container}>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order.status === 'done' && order.number}</li>
        ))}
      </ul>
    </div>
  );
};

export { OrderFeedsInfo };
