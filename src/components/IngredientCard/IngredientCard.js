import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import ingredientCardStyle from './IngredientCard.module.css';

export const IngredientCard = ({ property }) => {
  // console.log(property);
  return (
    <div className={ingredientCardStyle.container}>
      <Counter count={1} size='default' extraClass='m-1' />
      <img
        className={ingredientCardStyle.image}
        src={property.image}
        alt={property.name}
      />
      <div className={`mb-2 ${ingredientCardStyle.price}`}>
        <p className='mr-2 text text_type_digits-default'>{property.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className='text text_type_main-default'>
        {property.name}
      </p>
    </div>
  );
};
