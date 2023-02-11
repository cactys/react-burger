import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import mainStyle from './Main.module.css';
import PropTypes from 'prop-types';
import { data, dataPropTypes } from '../../utils/data';

const Main = ({ ingredients }) => {
  return (
    <main className={mainStyle.container}>
      <BurgerIngredients data={ingredients} />
      <BurgerConstructor data={data} />
    </main>
  );
};

export default Main;

Main.propTypes = {
  ingredients: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};
