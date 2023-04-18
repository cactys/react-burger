import { IOrderMessage } from '../../services/interfaces';
import { TIngredientItem } from '../../services/types';

import { Preloader } from '../Preloader/Preloader';
import { OrderFeedsCard } from '../OrderFeedsCard/OrderFeedsCard';

import orderFeedsContainerStyle from './OrderFeedsContainer.module.css';

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
    <ul className={orderFeedsContainerStyle.container}>
      {status === 'connecting' && <Preloader />}
      <Preloader />
      {/* {orders.map((order) => (
        <OrderFeedsCard
          key={order._id}
          order={order}
          ingredients={ingredients}
        />
      ))} */}
    </ul>
  );
};

export { OrderFeedsContainer };
