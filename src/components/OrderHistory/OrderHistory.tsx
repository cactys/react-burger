import { FC, useEffect } from 'react';
import orderHistoryStyle from './OrderHistory.module.css';
import { useDispatch, useSelector } from '../../services/hooks';
import { IOrderMessage } from '../../services/interfaces';
import { TIngredients } from '../../services/types';
import { useLocation } from 'react-router-dom';
import { wsConnect, wsDisconnect } from '../../services/constants';
import { WSS_URL } from '../../utils/constants';
import { OrderFeedsContainer } from '../OrderFeedsContainer/OrderFeedsContainer';

const OrderHistory: FC = () => {
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
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    location.pathname === '/profile/orders'
      ? dispatch(wsConnect(WSS_URL + `?token=${accessToken}`))
      : dispatch(wsDisconnect());
  }, [accessToken, dispatch, location]);

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
