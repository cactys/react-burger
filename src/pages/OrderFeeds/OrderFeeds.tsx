import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import { TIngredients } from '../../services/types';
import { IOrderMessage } from '../../services/interfaces';
import { wsConnect, wsDisconnect } from '../../services/constants';
import { WSS_URL } from '../../utils/constants';

import { OrderFeedsContainer } from '../../components/OrderFeedsContainer/OrderFeedsContainer';
import { OrderFeedsInfo } from '../../components/OrderFeedsInfo/OrderFeedsInfo';

import orderFeedsStyle from './OrderFeeds.module.css';
import { useLocation } from 'react-router-dom';

const OrderFeeds = () => {
  const {
    orders,
    status,
    total,
    totalToday,
  }: {
    orders: IOrderMessage[];
    status: string;
    total: number;
    totalToday: number;
  } = useSelector((store) => store.webSocket);
  const ingredients = useSelector(
    (store: TIngredients) => store.ingredients.ingredients
  );
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect(`${WSS_URL}/all`));
    return () => {
      dispatch(wsDisconnect());
    };
  }, [location, dispatch]);

  return (
    <main className={orderFeedsStyle.container}>
      <h1 className={`text text_type_main-large ${orderFeedsStyle.title}`}>
        Лента заказов
      </h1>
      <div className={orderFeedsStyle.feeds}>
        <ul className={orderFeedsStyle.feedsContainer}>
          <OrderFeedsContainer
            orders={orders}
            status={status}
            ingredients={ingredients}
          />
        </ul>
        <div className={orderFeedsStyle.feedsInfo}>
          <OrderFeedsInfo
            orders={orders}
            total={total}
            totalToday={totalToday}
          />
        </div>
      </div>
    </main>
  );
};

export { OrderFeeds };
