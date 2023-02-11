import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { dataPropTypes } from '../../utils/data';
import burgerIngredientsStyle from './BurgerIngredients.module.css';
import IngredientsGroup from '../IngredientsGroup/IngredientsGroup';

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = useState('bun');

  const bun = data.filter((i) => i.type === 'bun');
  const sauce = data.filter((i) => i.type === 'sauce');
  const main = data.filter((i) => i.type === 'main');

  return (
    <section className={burgerIngredientsStyle.container}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <nav className={burgerIngredientsStyle.navigation}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <ol className={`${burgerIngredientsStyle.ingredients} mt-10`}>
        <IngredientsGroup data={bun} title={'Булки'} />
        <IngredientsGroup data={sauce} title={'Соусы'} />
        <IngredientsGroup data={main} title={'Начинка'} />
      </ol>
    </section>
  );
};

export default BurgerIngredients;

BurgerIngredients.propType = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};
