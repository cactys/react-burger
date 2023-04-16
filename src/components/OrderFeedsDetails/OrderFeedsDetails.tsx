import { useState, useEffect, ReactNode, FC } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import { TIngredientItem, TIngredients } from '../../services/types';
import { useParams } from 'react-router-dom';
import { IOrderMessage } from '../../services/interfaces';
import { wsConnect, wsDisconnect } from '../../services/constants';
import { WSS_URL } from '../../utils/constants';
import { OrderFeedsInfoItem } from '../OrderFeedsInfoItem/OrderFeedsInfoItem';
import { currentOrder } from '../../utils/utils';
import { v4 as uuid } from 'uuid';
import orderFeedsDetailsStyle from './OrderFeedsDetails.module.css';

const OrderFeedsDetails = ({ background }: { background?: boolean }) => {
  const { orders, status }: { orders: IOrderMessage[]; status: string } =
    useSelector((state) => state.webSocket);
  const ingredients = useSelector(
    (state: TIngredients) => state.ingredients.ingredients
  );
  const [info, setInfo] = useState<IOrderMessage>();
  const { id } = useParams();
  const dispatch = useDispatch();

  const orderStatus = (): ReactNode => {
    if (info?.status === 'done') return 'Выполнен';
    if (info?.status === 'created') return 'Готовится';
    if (info?.status === 'pending') return 'Отменён';
  };

  useEffect(() => {
    dispatch(wsConnect(WSS_URL + '/all'));
    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch]);

  useEffect(() => {
    if (orders) {
      setInfo(orders.filter((item) => item._id === id)[0]);
    }
  }, [orders, id]);

  const orderIngredient = currentOrder(info?.ingredients, ingredients);

  const getQuantityIngredients = (items: string[] | undefined) => {
    const ingredientsCount = {};
    items?.reduce((acc: { [key: string]: number }, el: string) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, ingredientsCount);
    return ingredientsCount;
  };

  const countIngredient = getQuantityIngredients(info?.ingredients);

  const count: Array<number> = Object.values(countIngredient);

  return (
    <div>
      <h2>#{info?.number}</h2>
      <p>{orderStatus()}</p>
      <p>Состав:</p>
      <ul className={orderFeedsDetailsStyle.ingredientsList}>
        {orderIngredient.map((item, index) => (
          <OrderFeedsInfoItem
            key={uuid()}
            ingredient={item}
            count={count[index]}
          />
        ))}
      </ul>
    </div>
  );
};

export { OrderFeedsDetails };
