import PropTypes from 'prop-types';
import IngredientCard from '../IngredientCard/IngredientCard';
import ingredientsGroupStyle from './IngredientsGroup.module.css';
import { dataPropTypes } from '../../utils/constant';

const IngredientsGroup = ({ title, data, onIngredientClick }) => {
  return (
    <li className={`${ingredientsGroupStyle.container}  mb-10`}>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ol className={ingredientsGroupStyle.ingredientsType}>
        {data.map((ingredient) => (
          <li className={ingredientsGroupStyle.card} key={ingredient._id}>
            <IngredientCard
              onIngredientClick={onIngredientClick}
              ingredient={ingredient}
            />
          </li>
        ))}
      </ol>
    </li>
  );
};

export default IngredientsGroup;

IngredientsGroup.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};
