import { useContext, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './BurgerIngredients.module.css';
import IngredientsGroup from '../IngredientsGroup/IngredientsGroup';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { MODAL } from '../../utils/constant';
import { IngredientsContext } from '../../services/ingredientsContext';

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');
  const [isIngredientDetailsOpen, setIsIngredientDetailsOpen] = useState(false);
  const [selectIngredient, setSelectIngredient] = useState(null);
  const { ingredients } = useContext(IngredientsContext);

  const bun = ingredients.filter((i) => i.type === 'bun');
  const sauce = ingredients.filter((i) => i.type === 'sauce');
  const main = ingredients.filter((i) => i.type === 'main');

  const handleIngredientClick = (selectIngredient) => {
    setIsIngredientDetailsOpen(true);
    setSelectIngredient(selectIngredient);
  };

  const closePopups = () => {
    setIsIngredientDetailsOpen(false);
  };

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
        <IngredientsGroup
          onIngredientClick={handleIngredientClick}
          data={bun}
          title={'Булки'}
        />
        <IngredientsGroup
          onIngredientClick={handleIngredientClick}
          data={sauce}
          title={'Соусы'}
        />
        <IngredientsGroup
          onIngredientClick={handleIngredientClick}
          data={main}
          title={'Начинка'}
        />
      </ol>
      {isIngredientDetailsOpen && (
        <Modal
          title={MODAL.INGREDIENT_TITLE}
          isOpen={isIngredientDetailsOpen}
          closePopup={closePopups}
        >
          <IngredientDetails
            ingredient={selectIngredient}
            ingredientDetails={MODAL.INGREDIENT_DETAILS}
          />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngredients;
