import { FC, useState } from 'react';
import { TOrderFeeds } from '../../services/types';

const OrderFeedsCard: FC<TOrderFeeds> = ({ order }) => {
  const [length, setLength] = useState(0);

  // setLength(order.ingredients.length);

  const ingredientsSum = () => {
    order.ingredients.reduce((a, b) => {
      
    })
  }

  return (
    <div>
      <div>
        <p>
          {order.number} = {order.ingredients.length}
        </p>
        <p>{order.createdAt}</p>
      </div>
      <h2>{order.name}</h2>
      <div>
        <picture>
          <source />
          <img />
        </picture>
      </div>
    </div>
  );
};

export { OrderFeedsCard };
