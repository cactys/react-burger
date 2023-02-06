import React from 'react';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients';
import mainStyle from './Main.module.css';

export const Main = () => {
  return (
    <main className={mainStyle.container}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};
