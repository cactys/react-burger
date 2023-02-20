import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import mainStyle from './Main.module.css';
import { DataContext, OrderContext } from '../../services/ingredientsContext';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { DndProvider } from '../../../node_modules/react-dnd/dist/index';
import { HTML5Backend } from '../../../node_modules/react-dnd-html5-backend/dist/index';

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
      <DndProvider backend={HTML5Backend}>
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
      </DndProvider>
    </main>
  );
};

export default Main;
