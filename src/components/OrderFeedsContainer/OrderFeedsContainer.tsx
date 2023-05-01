import { IOrderMessage } from '../../services/interfaces';
import { TIngredientItem } from '../../services/types';

import { Preloader } from '../Preloader/Preloader';
import { OrderFeedsCard } from '../OrderFeedsCard/OrderFeedsCard';

const OrderFeedsContainer = ({
  orders,
  status,
  ingredients,
  profile = false,
}: {
  orders: IOrderMessage[];
  status: string;
  ingredients: TIngredientItem[];
  profile?: boolean;
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
