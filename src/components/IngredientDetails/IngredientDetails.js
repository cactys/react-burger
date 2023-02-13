import ingredientDetailsStyle from './IngredientDetails.module.css';
import { dataPropTypes } from '../../utils/constant';
import PropTypes from 'prop-types';

const IngredientDetails = ({ ingredient, ingredientDetails }) => {
  return (
    ingredient && (
      <div className={ingredientDetailsStyle.container}>
        <img
          src={ingredient.image_large}
          alt={ingredient.name}
          className={ingredientDetailsStyle.img}
        />
        <p className="mt-4 mb-8 text text_type_main-medium">
          {ingredient.name}
        </p>
        <ul className={ingredientDetailsStyle.table}>
          <li className={ingredientDetailsStyle.tableItem}>
            <h5 className="text text_type_main-default">
              {ingredientDetails.CALORIES}
            </h5>
            <p className="mt-2 text text_type_digits-default">
              {ingredient.calories}
            </p>
          </li>
          <li className={ingredientDetailsStyle.tableItem}>
            <h5 className="text text_type_main-default">
              {ingredientDetails.PROTEINS}
            </h5>
            <p className="mt-2 text text_type_digits-default">
              {ingredient.proteins}
            </p>
          </li>
          <li className={ingredientDetailsStyle.tableItem}>
            <h5 className="text text_type_main-default">
              {ingredientDetails.FAT}
            </h5>
            <p className="mt-2 text text_type_digits-default">
              {ingredient.fat}
            </p>
          </li>
          <li className={ingredientDetailsStyle.tableItem}>
            <h5 className="text text_type_main-default">
              {ingredientDetails.CARBOHYDRATES}
            </h5>
            <p className="mt-2 text text_type_digits-default">
              {ingredient.carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    )
  );
};

export default IngredientDetails;

IngredientDetails.propTypes = {
  ingredient: dataPropTypes,
  ingredientDetails: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
