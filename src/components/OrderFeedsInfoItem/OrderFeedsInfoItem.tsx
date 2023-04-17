import { TIngredientItem } from '../../services/types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import orderFeedsInfoItemStyle from './OrderFeedsInfoItem.module.css';

const OrderFeedsInfoItem = ({
  ingredient,
  count,
}: {
  ingredient?: TIngredientItem;
  count: number;
}) => {
  const ingredientPrice =
    ingredient?.type === 'bun'
      ? `2 x ${ingredient.price}`
      : `${count} x ${ingredient?.price}`;
  return (
    <li className={orderFeedsInfoItemStyle.item}>
      <div className={orderFeedsInfoItemStyle.imageBorder}>
        <img
          className={orderFeedsInfoItemStyle.image}
          src={ingredient?.image_mobile}
          alt={ingredient?.name}
        />
      </div>
      <p
        className={`text text_type_main-default ${orderFeedsInfoItemStyle.ingredientName}`}
      >
        {ingredient?.name}
      </p>
      <div className={orderFeedsInfoItemStyle.price}>
        <p>{ingredientPrice}</p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};

export { OrderFeedsInfoItem };
