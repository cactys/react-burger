import React from 'react';
import { IngredientCard } from '../IngredientCard/IngredientCard';
import ingredientsGroupStyle from './IngredientsGroup.module.css';

export const IngredientsGroup = ({ data, title }) => {
  // console.log(data);
  return (
    <li className={`${ingredientsGroupStyle.container}  mb-10`}>
      <h2 className='text text_type_main-medium mb-6'>{title}</h2>
      <ol className={ingredientsGroupStyle.ingredientsType}>
        {data.map((ingredient) => (
          <li className={ingredientsGroupStyle.card} key={ingredient._id}>
            <IngredientCard property={ingredient} />
          </li>
        ))}
      </ol>
    </li>
  );
};
