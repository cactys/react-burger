import { FC, useMemo, ReactNode } from 'react';
import { TIngredientItem, TOrderFeeds } from '../../services/types';

import orderFeedsCardStyle from './OrderFeedsCard.module.css';
import { ImageIcon } from '../ImageIcon/ImageIcon';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { currentDate, currentOrder } from '../../utils/utils';

const OrderFeedsCard: FC<TOrderFeeds> = ({ order, ingredients }) => {
  const getIngredient = currentOrder(order.ingredients, ingredients);

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

  const feedSum = useMemo(() => {
    return getIngredient.reduce(
      (sum: number, item: TIngredientItem) => sum + item.price,
      0
    );
  }, [getIngredient]);

  return (
    <li className={orderFeedsCardStyle.container}>
      <div className={orderFeedsCardStyle.header}>
        <p className="text text_type_digits-default">&#35;{order.number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {currentDate(order.createdAt)}
        </p>
      </div>
      <h2 className={`text text_type_main-medium ${orderFeedsCardStyle.title}`}>
        {order.name}
      </h2>
      <div className={orderFeedsCardStyle.infoOrder}>
        <ul className={orderFeedsCardStyle.imageList}>
          {order.ingredients.length <= 6
            ? renderImage
            : renderImageWithNumber()}
        </ul>
        <div className={orderFeedsCardStyle.priceOrder}>
          <p className="text text_type_digits-default">{feedSum}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

export { OrderFeedsCard };
