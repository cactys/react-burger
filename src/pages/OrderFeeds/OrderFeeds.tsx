import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';

import orderFeedsStyle from './OrderFeeds.module.css';
import { wsConnect, wsDisconnect } from '../../services/constants';
import { WSS_URL } from '../../utils/constants';
import { IOrderMessage } from '../../services/interfaces';
import Preloader from '../../components/Preloader/Preloader';

const OrderFeeds: FC = () => {
  const { orders, status }: { orders: []; status: string } = useSelector(
    (store) => store.webSocket
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect(WSS_URL + '/all'));
    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);

  return (
    <div>
      {status === 'connecting' && <Preloader isOverflow={true} />}
      {orders.length !== 0 &&
        orders.map((order: IOrderMessage, index) => (
          <div key={index}>
            <p>
              {order.name} = {order.number}
            </p>
          </div>
        ))}
    </div>
  );
};

export { OrderFeeds };
