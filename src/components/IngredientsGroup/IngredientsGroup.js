import React from 'react';
import { IngredientCard } from '../IngredientCard/IngredientCard';
import ingredientsGroupStyle from './IngredientsGroup.module.css';

export const IngredientsGroup = ({ data, title }) => {
  console.log(data);
  return (
    <li>
      <h2 className='text text_type_main-medium mb-6'>{title}</h2>
      <ol className={`${ingredientsGroupStyle.container} mb-10`}>
        {data.map((ingredient) => (
          <li className={ingredientsGroupStyle.card}>
            <IngredientCard key={ingredient._id} property={ingredient} />
          </li>
        ))}
      </ol>
    </li>
  );
};
