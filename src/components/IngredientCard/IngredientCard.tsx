import { FC } from 'react';
import { useDrag } from 'react-dnd';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { IIngredientCard } from '../../services/interfaces';

import ingredientCardStyle from './IngredientCard.module.css';

const IngredientCard: FC<IIngredientCard> = ({
  ingredient,
  onIngredientClick,
  count,
}) => {
  const location = useLocation();
  const { name, image, price, _id } = ingredient;

  const handleClick = () => {
    onIngredientClick(ingredient);
  };

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: { ...ingredient },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <Link
      key={_id}
      to={{ pathname: `/ingredients/${_id}` }}
      state={{ background: location }}
      className={ingredientCardStyle.link}
    >
      <div
        className={ingredientCardStyle.container}
        onClick={handleClick}
        ref={dragRef}
        style={{ opacity }}
        id={_id}
      >
        {count ? <Counter count={count} size="default" extraClass="m-1" /> : ''}
        <img className={ingredientCardStyle.image} src={image} alt={name} />
        <div className={`mb-2 ${ingredientCardStyle.price}`}>
          <p className="mr-2 text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p
          className={`text text_type_main-default ${ingredientCardStyle.title}`}
        >
          {name}
        </p>
      </div>
    </Link>
  );
};

export { IngredientCard };
