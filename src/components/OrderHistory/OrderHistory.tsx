import { useEffect } from 'react';
import { IOrderMessage } from '../../services/interfaces';
import { TIngredientItem } from '../../services/types';

import { OwnerOrderFeedsContainer } from '../OwnerOrderFeedsContainer/OwnerOrderFeedsContainer';

import orderHistoryStyle from './OrderHistory.module.css';
import { useDispatch } from '../../services/hooks';
import { userChecked } from '../../services/constants';

const OrderHistory = ({
  orders,
  status,
  ingredients,
}: {
  orders: IOrderMessage[];
  status: string;
  ingredients: TIngredientItem[];
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      dispatch(userChecked());
    }, 60 * 1000);
    console.log(refreshInterval, ' прошло секунд');

    return () => clearInterval(refreshInterval);
  }, [setInterval]);

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
