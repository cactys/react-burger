import { FC } from 'react';
import { TIngredientItem, TOrderFeeds } from '../../services/types';
import { IOrderMessage } from '../../services/interfaces';

const OrderFeedsInfoItem = ({
  ingredient,
}: {
  ingredient: TIngredientItem;
}) => {
  return (
    <li>
      <img src={ingredient.image_mobile} alt={ingredient.name} />
      <p>{ingredient.name}</p>
      <div>
        
      </div>
    </li>
  );
};

export { OrderFeedsInfoItem };
