import { useEffect } from 'react';
import { TIngredients } from '../../services/types';
import { IOrderFeeds } from '../../services/interfaces';

import { OrderFeedsContainer } from '../../components/OrderFeedsContainer/OrderFeedsContainer';

import orderHistoryStyle from './OrderHistory.module.css';
import { wsDisconnect, wsConnect } from '../../services/constants';
import { WSS_URL } from '../../utils/constants';
import { useDispatch, useSelector } from '../../services/hooks';

const OrderHistory = () => {
  const { orders, status } = useSelector<IOrderFeeds>(
    (store) => store.webSocketCurrentUser
  );
  const ingredients = useSelector(
    (store: TIngredients) => store.ingredients.ingredients
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    dispatch(wsConnect(`${WSS_URL}?token=${accessToken}`));
    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);

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
