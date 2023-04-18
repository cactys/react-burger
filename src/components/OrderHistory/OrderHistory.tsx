import { IOrderMessage } from '../../services/interfaces';
import { TIngredientItem } from '../../services/types';
import { OrderFeedsContainer } from '../OrderFeedsContainer/OrderFeedsContainer';

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
    <div className={orderHistoryStyle.container}>
      <OrderFeedsContainer
        orders={orders}
        status={status}
        ingredients={ingredients}
      />
    </div>
  );
};

export default OrderHistory;
