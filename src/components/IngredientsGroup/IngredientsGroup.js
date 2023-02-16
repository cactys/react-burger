import PropTypes from 'prop-types';
import IngredientCard from '../IngredientCard/IngredientCard';
import ingredientsGroupStyle from './IngredientsGroup.module.css';
import { dataPropTypes } from '../../utils/constant';

const IngredientsGroup = ({ data, onIngredientClick }) => {
  return (
    <>
      {data.map((ingredient) => (
        <li className={ingredientsGroupStyle.card} key={ingredient._id}>
          <IngredientCard
            onIngredientClick={onIngredientClick}
            ingredient={ingredient}
          />
        </li>
      ))}
    </>
  );
};

export default IngredientsGroup;

IngredientsGroup.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};
