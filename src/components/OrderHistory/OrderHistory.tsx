import { useEffect } from 'react';
import { getUser } from '../../services/action';
import { useDispatch } from '../../services/hooks';
import { IOrderMessage } from '../../services/interfaces';
import { TIngredientItem } from '../../services/types';

import { OrderFeedsContainer } from '../OrderFeedsContainer/OrderFeedsContainer';

import orderHistoryStyle from './OrderHistory.module.css';
import { wsConnect, wsDisconnect } from '../../services/constants';
import { WSS_URL } from '../../utils/constants';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    dispatch(getUser());
    dispatch(wsConnect(WSS_URL + `?token=${accessToken}`));
    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch, location, accessToken]);

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

export { OrderHistory };
