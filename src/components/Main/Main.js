import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import mainStyle from './Main.module.css';
import { DataContext, OrderContext } from '../../services/ingredientsContext';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [order, setOrder] = useState('');

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
      <DataContext.Provider value={{ ingredients, setIngredients }}>
        <OrderContext.Provider value={{ order, setOrder }}>
          {ingredients && (
            <>
              <BurgerIngredients />
              <BurgerConstructor />
            </>
          )}
        </OrderContext.Provider>
      </DataContext.Provider>
    </main>
  );
};

export default Main;
