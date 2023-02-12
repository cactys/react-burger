import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyle from './BurgerIngredients.module.css';
import IngredientsGroup from '../IngredientsGroup/IngredientsGroup';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { MODAL, dataPropTypes } from '../../utils/constant';

const BurgerIngredients = ({ bun, sauce, main }) => {
  const [current, setCurrent] = useState('bun');
  const [isIngredientDetailsOpen, setIsIngredientDetailsOpen] = useState(false);
  const [selectIngredient, setSelectIngredient] = useState(null);

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
    </section>
  );
};

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  bun: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  sauce: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  main: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};
