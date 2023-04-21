import { IOrderMessage } from '../../services/interfaces';
import { TIngredientItem } from '../../services/types';

import { OwnerOrderFeedsContainer } from '../OwnerOrderFeedsContainer/OwnerOrderFeedsContainer';

import orderHistoryStyle from './OrderHistory.module.css';

const OrderHistory = ({
  orders,
  status,
  ingredients,
}: {
  orders: IOrderMessage[];
  status: string;
  ingredients: TIngredientItem[];
}) => {
  return (
    <ul className={orderHistoryStyle.container}>
      <OwnerOrderFeedsContainer
        orders={orders}
        status={status}
        ingredients={ingredients}
      />
    </ul>
  );
};

export { OrderHistory };
