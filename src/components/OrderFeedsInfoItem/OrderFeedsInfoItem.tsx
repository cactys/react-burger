import { FC } from 'react';
import { TIngredientItem, TOrderFeeds } from '../../services/types';
import { IOrderMessage } from '../../services/interfaces';
import orderFeedsInfoItemStyle from './OrderFeedsInfoItem.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderFeedsInfoItem = ({
  ingredient,
  count,
}: {
  ingredient: TIngredientItem;
  count: number;
}) => {
  const ingredientPrice =
    ingredient.type === 'bun'
      ? `2 x ${ingredient.price}`
      : `${count} x ${ingredient.price}`;
  return (
    <li className={orderFeedsInfoItemStyle.item}>
      <img src={ingredient.image_mobile} alt={ingredient.name} />
      <p>{ingredient.name}</p>
      <div className={orderFeedsInfoItemStyle.price}>
        <p>{ingredientPrice}</p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};

export { OrderFeedsInfoItem };
