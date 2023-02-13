import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import mainStyle from './Main.module.css';
import PropTypes from 'prop-types';
import { data } from '../../utils/data';
import { dataPropTypes } from '../../utils/constant';

const Main = ({ bun, sauce, main }) => {
  return (
    <main className={mainStyle.container}>
      <BurgerIngredients bun={bun} sauce={sauce} main={main} />
      <BurgerConstructor data={data} />
    </main>
  );
};

export default Main;

Main.propTypes = {
  bun: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  sauce: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  main: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};
