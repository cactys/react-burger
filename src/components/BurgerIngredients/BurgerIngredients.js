import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import burgerIngredientsStyle from './BurgerIngredients.module.css';
import { data } from '../../utils/data';
import { IngredientsGroup } from '../IngredientsGroup/IngredientsGroup';

export const BurgerIngredients = () => {
  const [current, setCurrent] = useState('one');

  const bun = data.filter((i) => i.type === 'bun');
  const sauce = data.filter((i) => i.type === 'sauce');
  const main = data.filter((i) => i.type === 'main');

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
      <ol className={`${burgerIngredientsStyle.burgerIngredients} mt-10`}>
        <IngredientsGroup
          data={bun}
          title={'Булки'}
        />
        <IngredientsGroup
          data={sauce}
          title={'Соусы'}
        />
        <IngredientsGroup
          data={main}
          title={'Начинка'}
        />
      </ol>
    </section>
  );
};
