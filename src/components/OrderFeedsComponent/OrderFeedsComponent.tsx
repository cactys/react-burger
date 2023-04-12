import { FC, useEffect } from 'react';
import { IOrderMessage } from '../../services/interfaces';
import { useDispatch, useSelector } from '../../services/hooks';
import { wsConnect, wsDisconnect } from '../../services/constants';
import { WSS_URL } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';
import { OrderFeedsCard } from '../OrderFeedsCard/OrderFeedsCard';

import orderFeedsContainerStyle from './OrderFeedsComponent.module.css';
import { TIngredients } from '../../services/types';

const OrderFeedsComponent: FC = () => {
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
    <ul className={orderFeedsContainerStyle.container}>
      {status === 'connecting' && <Preloader isOverflow={true} />}
      {orders.map((order) => (
        <OrderFeedsCard
          key={order._id}
          order={order}
          ingredients={ingredients}
        />
      ))}
    </ul>
  );
};

export { OrderFeedsComponent };
