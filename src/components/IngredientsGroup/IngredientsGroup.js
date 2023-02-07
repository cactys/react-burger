import React from 'react';
import { IngredientCard } from '../IngredientCard/IngredientCard';
import ingredientsGroupStyle from './IngredientsGroup.module.css';

export const IngredientsGroup = ({ data, title }) => {
  console.log(data);
  return (
    <>
      <h2 className='text text_type_main-medium mb-6'>{title}</h2>
      <dt className={`${ingredientsGroupStyle.container} mb-10`}>
        {data.map((ingredient) => (
          <dd className={ingredientsGroupStyle.card}>
            <IngredientCard key={ingredient._id} property={ingredient} />
          </dd>
        ))}
      </dt>
    </>
  );
};
