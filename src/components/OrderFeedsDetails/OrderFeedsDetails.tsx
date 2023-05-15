import {
  FC,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../services/hooks';
import { TIngredients, TWSState } from '../../services/types';
import { IIngredientDetails, IOrderMessage } from '../../services/interfaces';
import {
  currentDate,
  currentOrder,
  getQuantityIngredients,
} from '../../utils/utils';

import { OrderFeedsInfoItem } from '../OrderFeedsInfoItem/OrderFeedsInfoItem';

import orderFeedsDetailsStyle from './OrderFeedsDetails.module.css';
import { wsConnect, wsDisconnect } from '../../services/constants';
import { WSS_URL } from '../../utils/constants';
import { Preloader } from '../Preloader/Preloader';

const OrderFeedsDetails: FC<IIngredientDetails> = ({ background }) => {
  const { orders, status }: TWSState = useSelector((state) => state.webSocket);
  const ingredients = useSelector(
    (state: TIngredients) => state.ingredients.ingredients
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const [info, setInfo] = useState<IOrderMessage>();
  const { id } = useParams();

  const orderStatus = (): ReactNode => {
    if (info?.status === 'done') return 'Выполнен';
    if (info?.status === 'created') return 'Создан';
    if (info?.status === 'pending') return 'Готовится';
  };

  useEffect(() => {
    if (!background) {
      const accessToken = localStorage.getItem('accessToken');
      if (location.pathname === `/profile/orders/${id}`)
        dispatch(wsConnect(`${WSS_URL}?token=${accessToken}`));
      if (location.pathname === `/feed/${id}`)
        dispatch(wsConnect(`${WSS_URL}/all`));
      return () => {
        dispatch(wsDisconnect());
      };
    }
  }, [dispatch, id, location, background]);

  useEffect(() => {
    setInfo(orders.filter((item) => item._id === id).reverse()[0]);
  }, [orders, id]);

  const countIngredient = getQuantityIngredients(info?.ingredients);

  const count: Array<number> = Object.values(countIngredient);

  const date = currentDate(info ? info.createdAt : '');

  const returnIngredient = useCallback(() => {
    const mutatedIngredients = Array.from(new Set(info?.ingredients));
    return mutatedIngredients.map((ingredient) => {
      return ingredients.find((item) => item._id === ingredient);
    });
  }, [info?.ingredients, ingredients]);

  const orderSum = useMemo(() => {
    const orderIngredients = currentOrder(info?.ingredients, ingredients);
    return orderIngredients.reduce(
      (sum, item) => sum + (item ? item.price : 0),
      0
    );
  }, [info?.ingredients, ingredients]);

  return (
    <div
      className={`${orderFeedsDetailsStyle.container} ${
        !background && orderFeedsDetailsStyle.cn
      }`}
    >
      {status === 'connecting' ? (
        <Preloader />
      ) : (
        <>
          <h2 className="text text_type_digits-default">#{info?.number}</h2>
          <div className={orderFeedsDetailsStyle.orderStatus}>
            <h3
              className={`text text_type_main-medium ${orderFeedsDetailsStyle.orderName}`}
            >
              {info?.name}
            </h3>
            <p
              className={`text text_type_main-default ${orderFeedsDetailsStyle.status}`}
            >
              {orderStatus()}
            </p>
          </div>
          <p
            className={`text text_type_main-medium mt-15 ${orderFeedsDetailsStyle.structure}`}
          >
            Состав:
          </p>
          <ul className={orderFeedsDetailsStyle.ingredientsList}>
            {returnIngredient().map((item, index) => (
              <OrderFeedsInfoItem
                key={uuid()}
                ingredient={item}
                count={count[index]}
              />
            ))}
          </ul>
          <div className={orderFeedsDetailsStyle.footer}>
            <p className="text text_type_main-default text_color_inactive">
              {date}
            </p>
            <div className={orderFeedsDetailsStyle.priceOrder}>
              <p className="text text_type_digits-default">{orderSum}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { OrderFeedsDetails };
