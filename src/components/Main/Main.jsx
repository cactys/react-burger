import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { getIngredients } from '../../services/action/BurgerIngredients';
import mainStyle from './Main.module.css';

const Main = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      {ingredientsFailed && (
        <main className={mainStyle.container}>
          {ingredientsRequest && (
            <DndProvider backend={HTML5Backend}>
              {ingredients && (
                <>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </>
              )}
            </DndProvider>
          )}
        </main>
      )}
    </>
  );
};

export default Main;
