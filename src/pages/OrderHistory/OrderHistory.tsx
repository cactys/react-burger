import { useEffect } from 'react';
import { IOrderMessage } from '../../services/interfaces';
import { TIngredients } from '../../services/types';

import { OrderFeedsContainer } from '../../components/OrderFeedsContainer/OrderFeedsContainer';

import orderHistoryStyle from './OrderHistory.module.css';
import { getUser } from '../../services/action';
import { wsConnect, wsDisconnect } from '../../services/constants';
import { WSS_URL } from '../../utils/constants';
import { useDispatch, useSelector } from '../../services/hooks';
import { useLocation } from 'react-router-dom';

const OrderHistory = () => {
  const {
    orders,
    status,
  }: {
    orders: IOrderMessage[];
    status: string;
  } = useSelector((store) => store.webSocket);
  const ingredients = useSelector(
    (store: TIngredients) => store.ingredients.ingredients
  );
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    dispatch(wsConnect(`${WSS_URL}?token=${accessToken}`));
    return () => {
      dispatch(wsDisconnect());
    };
  }, [location, dispatch]);

  return (
    <ul className={orderHistoryStyle.container}>
      <OrderFeedsContainer
        orders={orders}
        status={status}
        ingredients={ingredients}
        profile={true}
      />
    </ul>
  );
};

export { OrderHistory };
