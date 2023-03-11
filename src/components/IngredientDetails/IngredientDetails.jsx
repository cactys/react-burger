import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ingredientDetailsStyle from './IngredientDetails.module.css';
import Preloader from '../Preloader/Preloader';

const IngredientDetails = ({ data }) => {
  const { info } = useSelector((store) => store.ingredientDetails);

  return (
    <div className={ingredientDetailsStyle.container}>
      {data || info ? (
        <img
          src={info?.image_large || data?.image_large}
          alt={info?.name || data?.name}
          className={ingredientDetailsStyle.img}
        />
      ) : (
        <Preloader />
      )}
      <p className="mt-4 mb-8 text text_type_main-medium">
        {info?.name || data?.name}
      </p>
      <ul className={ingredientDetailsStyle.table}>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">Калории, ккал</h5>
          <p className="mt-2 text text_type_digits-default">
            {info?.calories || data?.calories}
          </p>
        </li>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">Белки, г</h5>
          <p className="mt-2 text text_type_digits-default">
            {info?.proteins || data?.proteins}
          </p>
        </li>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">Жиры, г</h5>
          <p className="mt-2 text text_type_digits-default">
            {info?.fat || data?.fat}
          </p>
        </li>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">Углеводы, г</h5>
          <p className="mt-2 text text_type_digits-default">
            {info?.carbohydrates || data?.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;

IngredientDetails.propTypes = {
  data: PropTypes.object,
};
