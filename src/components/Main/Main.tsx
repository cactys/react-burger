import { FC } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import mainStyle from './Main.module.css';
import { TIngredients } from '../../services/types';
import { useSelector } from '../../services/hooks';

const Main: FC = () => {
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store: TIngredients) => store.ingredients
  );

  return (
    <>
      {!ingredientsFailed && (
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
