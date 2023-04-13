import { FC, useEffect } from 'react';
import { OrderFeedsContainer } from '../../components/OrderFeedsContainer/OrderFeedsContainer';

import orderFeedsStyle from './OrderFeeds.module.css';
import { OrderFeedsInfo } from '../../components/OrderFeedsInfo/OrderFeedsInfo';
import { useDispatch, useSelector } from '../../services/hooks';
import { TIngredients } from '../../services/types';
import { IOrderMessage } from '../../services/interfaces';
import { wsConnect, wsDisconnect } from '../../services/constants';
import { WSS_URL } from '../../utils/constants';

const OrderFeeds: FC = () => {
  const { orders, status }: { orders: IOrderMessage[]; status: string } =
    useSelector((store) => store.webSocket);
  const ingredients = useSelector(
    (store: TIngredients) => store.ingredients.ingredients
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect(WSS_URL + '/all'));
    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);

  return (
    <div className={orderFeedsStyle.container}>
      <h1 className={`text text_type_main-large ${orderFeedsStyle.title}`}>
        Лента заказов
      </h1>
      <div className={orderFeedsStyle.feedsContainer}>
        <OrderFeedsContainer
          orders={orders}
          status={status}
          ingredients={ingredients}
        />
        <OrderFeedsInfo orders={orders} />
      </div>
    </div>
  );
};

export { OrderFeeds };
