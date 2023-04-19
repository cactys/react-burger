import { IOrderMessage } from '../../services/interfaces';
import { TIngredientItem } from '../../services/types';

import { Preloader } from '../Preloader/Preloader';
import { OrderFeedsCard } from '../OrderFeedsCard/OrderFeedsCard';

const OrderFeedsContainer = ({
  orders,
  status,
  ingredients,
}: {
  orders: IOrderMessage[];
  status: string;
  ingredients: TIngredientItem[];
}) => {
  return (
    <>
      {status === 'connecting' && <Preloader />}
      {orders.map((order) => (
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
