import React from 'react';
import ingredientsGroupStyle from './IngredientsGroup.module.css';

export const IngredientsGroup = ({ data, title }) => {
  console.log(data);
  return (
    <div className={ingredientsGroupStyle.container}>
      <h2 className='text text_type_main-medium'>{title}</h2>
    </div>
  );
};
