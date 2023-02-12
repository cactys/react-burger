import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientCardStyle from './IngredientCard.module.css';
import { dataPropTypes } from '../../utils/data';
import PropType from 'prop-types';

const IngredientCard = ({ ingredient, onIngredientClick }) => {

  const handleClick = () => {
    onIngredientClick(ingredient);
  };

  return (
    <div className={ingredientCardStyle.container} onClick={handleClick}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img
        className={ingredientCardStyle.image}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <div className={`mb-2 ${ingredientCardStyle.price}`}>
        <p className="mr-2 text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${ingredientCardStyle.title}`}>
        {ingredient.name}
      </p>
    </div>
  );
};

export default IngredientCard;

IngredientCard.propTypes = {
  ingredient: dataPropTypes.isRequired,
  onIngredientClick: PropType.func.isRequired,
};
