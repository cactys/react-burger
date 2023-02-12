import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import mainStyle from './Main.module.css';
import PropTypes from 'prop-types';
import { data, dataPropTypes } from '../../utils/data';

const Main = ({ ingredients, onIngredientClick, onOrderButtonClick }) => {
  return (
    <main className={mainStyle.container}>
      <BurgerIngredients
        data={ingredients}
        onIngredientClick={onIngredientClick}
      />
      <BurgerConstructor
        data={data}
        onOrderButtonClick={onOrderButtonClick}
      />
    </main>
  );
};

export default Main;

Main.propTypes = {
  ingredients: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  onIngredientClick: PropTypes.func.isRequired,
  onOrderButtonClick: PropTypes.func.isRequired,
};
