import { FC, useMemo, ReactNode } from 'react';
import { TIngredientItem, TOrderFeeds } from '../../services/types';

import orderFeedsCardStyle from './OrderFeedsCard.module.css';
import { ImageIcon } from '../ImageIcon/ImageIcon';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { currentDate, currentOrder } from '../../utils/utils';
import { Link, useLocation } from 'react-router-dom';

const OrderFeedsCard: FC<TOrderFeeds> = ({ order, ingredients }) => {
  const getIngredient = currentOrder(order.ingredients, ingredients);
  const location = useLocation();
  const { _id, number, name, createdAt, status } = order;

  const renderImage = getIngredient
    .map(
      (el: TIngredientItem, index: number): ReactNode => (
        <ImageIcon key={index} image={el.image_mobile} alt={el.name} />
      )
    )
    .reverse();

  const renderImageWithNumber = (): ReactNode => {
    const number = getIngredient.length - 5;
    const newArray = getIngredient.slice(0, 5);
    return (
      <>
        <ImageIcon
          number={number}
          image={getIngredient[5].image_mobile}
          alt={getIngredient[5].name}
        />
        {newArray
          .map((el: TIngredientItem, index: number) => (
            <ImageIcon key={index} image={el.image_mobile} alt={el.name} />
          ))
          .reverse()}
      </>
    );
  };

  const orderStatus = (): ReactNode => {
    if (status === 'done') return 'Выполнен';
    if (status === 'created') return 'Готовится';
    if (status === 'pending') return 'Отменён';
  };

  const orderSum = useMemo(() => {
    return getIngredient.reduce(
      (sum: number, item: TIngredientItem) => sum + item.price,
      0
    );
  }, [getIngredient]);

  const located =
    location.pathname === '/feed' ? `/feed/${_id}` : `/profile/orders/${_id}`;

  return (
    <Link
      key={_id}
      to={{ pathname: located }}
      state={{ background: location }}
      className={orderFeedsCardStyle.link}
    >
      <li className={orderFeedsCardStyle.container}>
        <div className={orderFeedsCardStyle.header}>
          <p className="text text_type_digits-default">&#35;{number}</p>
          <p className="text text_type_main-default text_color_inactive">
            {currentDate(createdAt)}
          </p>
        </div>
        <div>
          <h2
            className={`text text_type_main-medium ${orderFeedsCardStyle.title}`}
          >
            {name}
          </h2>
          <p className={orderFeedsCardStyle.orderStatus}>{orderStatus()}</p>
        </div>
        <div className={orderFeedsCardStyle.infoOrder}>
          <ul className={orderFeedsCardStyle.imageList}>
            {order.ingredients.length <= 6
              ? renderImage
              : renderImageWithNumber()}
          </ul>
          <div className={orderFeedsCardStyle.priceOrder}>
            <p className="text text_type_digits-default">{orderSum}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  );
};

export { OrderFeedsCard };
