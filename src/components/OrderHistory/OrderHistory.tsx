import { useEffect } from 'react';
import { getUser } from '../../services/action';
import { useDispatch } from '../../services/hooks';
import { IOrderMessage } from '../../services/interfaces';
import { TIngredientItem } from '../../services/types';

import { OwnerOrderFeedsContainer } from '../OwnerOrderFeedsContainer/OwnerOrderFeedsContainer';

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

  useEffect(() => {
    dispatch(getUser());
    const accessToken = localStorage.getItem('accessToken');
    dispatch(wsConnect(WSS_URL + `?token=${accessToken}`));
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
