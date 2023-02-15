import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import mainStyle from './Main.module.css';
import { IngredientsContext } from '../../services/ingredientsContext';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    api
      .getIngredient()
      .then((res) => {
        if (res.success === true) {
          setIngredients(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className={mainStyle.container}>
      <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
        <BurgerIngredients />
        <BurgerConstructor />
      </IngredientsContext.Provider>
    </main>
  );
};

export default Main;
