import React from 'react';
import ingredientCardStyle from './IngredientCard.module.css';

export const IngredientCard = ({ property }) => {
  console.log(property);
  return (
    <div className={ingredientCardStyle.container}>
      <img className={ingredientCardStyle.image} src={property.image} alt={property.name} />
    </div>
  );
};
