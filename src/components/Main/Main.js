import React from 'react';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import mainStyle from './Main.module.css';

const Main = () => {
  return (
    <main className={mainStyle.container}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};

export default Main;
