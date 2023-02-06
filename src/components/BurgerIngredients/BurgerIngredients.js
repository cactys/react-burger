import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import burgerIngredientsStyle from './BurgerIngredients.module.css';
import { data } from '../../utils/data'
import { IngredientsGroup } from '../IngredientsGroup/IngredientsGroup';

export const BurgerIngredients = () => {
  const [current, setCurrent] = useState('one');

  // console.log(...data.filter(i => i.type === 'bun'));
  return (
    <section className={burgerIngredientsStyle.container}>
      <h1 className='text text_type_main-large pt-10 pb-5'>Соберите бургер</h1>
      <nav className={burgerIngredientsStyle.navigation}>
        <Tab value='one' active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value='two' active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value='three' active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <div className={`${burgerIngredientsStyle.burgerIngredients} mt-10`}>
        <IngredientsGroup data={{...data.filter(i => i.type === 'bun')}} title={'Булки'} />
        <IngredientsGroup data={{...data.filter(i => i.type === 'sauce')}} title={'Соусы'} />
        <IngredientsGroup data={{...data.filter(i => i.type === 'main')}} title={'Начинка'} />
      </div>
    </section>
  );
};
