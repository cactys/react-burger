import { FC } from 'react';
import { OrderFeedsComponent } from '../../components/OrderFeedsComponent/OrderFeedsComponent';

import orderFeedsStyle from './OrderFeeds.module.css';

const OrderFeeds: FC = () => {
  return (
    <div className={orderFeedsStyle.container}>
      <h1 className={`text text_type_main-large ${orderFeedsStyle.title}`}>
        Лента заказов
      </h1>
      <OrderFeedsComponent />
    </div>
  );
};

export { OrderFeeds };
