import ingredientDetailsStyle from './IngredientDetails.module.css';
import { dataPropTypes } from '../../utils/constant';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const IngredientDetails = ({ ingredientDetails }) => {
  const { info } = useSelector((store) => store.ingredientDetails);

  return (
    <div className={ingredientDetailsStyle.container}>
      <img
        src={info.image_large}
        alt={info.name}
        className={ingredientDetailsStyle.img}
      />
      <p className="mt-4 mb-8 text text_type_main-medium">{info.name}</p>
      <ul className={ingredientDetailsStyle.table}>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">
            {ingredientDetails.CALORIES}
          </h5>
          <p className="mt-2 text text_type_digits-default">{info.calories}</p>
        </li>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">
            {ingredientDetails.PROTEINS}
          </h5>
          <p className="mt-2 text text_type_digits-default">{info.proteins}</p>
        </li>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">
            {ingredientDetails.FAT}
          </h5>
          <p className="mt-2 text text_type_digits-default">{info.fat}</p>
        </li>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">
            {ingredientDetails.CARBOHYDRATES}
          </h5>
          <p className="mt-2 text text_type_digits-default">
            {info.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;

IngredientDetails.propTypes = {
  ingredient: dataPropTypes,
  ingredientDetails: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
