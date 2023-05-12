import { FC } from 'react';

import { Preloader } from '../Preloader/Preloader';
import { OrderFeedsCard } from '../OrderFeedsCard/OrderFeedsCard';
import { IOrderFeedsContainer } from '../../services/interfaces';

const OrderFeedsContainer: FC<IOrderFeedsContainer> = ({
  orders,
  status,
  ingredients,
  profile = false,
}) => {
  const ordersReverse = profile ? [...orders].reverse() : orders;
  return (
    <>
      {status === 'connecting' && <Preloader />}
      {ordersReverse.map((order) => (
        <OrderFeedsCard
          key={order._id}
          order={order}
          ingredients={ingredients}
        />
      ))}
    </>
  );
};

export { OrderFeedsContainer };
