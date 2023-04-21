import { useEffect } from 'react';
import { IOrderMessage } from '../../services/interfaces';
import { TIngredients } from '../../services/types';

import { OwnerOrderFeedsContainer } from '../OwnerOrderFeedsContainer/OwnerOrderFeedsContainer';

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
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getUser());
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      dispatch(wsConnect(`${WSS_URL}?token=${accessToken}`));
    }
    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch, location]);

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
