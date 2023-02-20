import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientCardStyle from './IngredientCard.module.css';
import { dataPropTypes } from '../../utils/constant';
import PropTypes from 'prop-types';
import { useDrag } from '../../../node_modules/react-dnd/dist/index';

const IngredientCard = ({ ingredient, onIngredientClick }) => {
  const handleClick = () => {
    onIngredientClick(ingredient);
  };

  const { _id, name } = ingredient;
  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: { _id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    !isDrag && (
      <div
        className={ingredientCardStyle.container}
        onClick={handleClick}
        ref={dragRef}
      >
        <Counter count={1} size="default" extraClass="m-1" />
        <img
          className={ingredientCardStyle.image}
          src={ingredient.image}
          alt={ingredient.name}
        />
        <div className={`mb-2 ${ingredientCardStyle.price}`}>
          <p className="mr-2 text text_type_digits-default">
            {ingredient.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p
          className={`text text_type_main-default ${ingredientCardStyle.title}`}
        >
          {ingredient.name}
        </p>
      </div>
    )
  );
};

export default IngredientCard;

IngredientCard.propTypes = {
  ingredient: dataPropTypes.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};
