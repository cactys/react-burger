import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import mainStyle from './Main.module.css';
import { useEffect } from 'react';
import { DndProvider } from '../../../node_modules/react-dnd/dist/index';
import { HTML5Backend } from '../../../node_modules/react-dnd-html5-backend/dist/index';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/action/BurgerIngredients';

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
