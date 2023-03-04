import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientCardStyle from './IngredientCard.module.css';
import { dataPropTypes } from '../../utils/constants';
import PropTypes from 'prop-types';
import { useDrag } from '../../../node_modules/react-dnd/dist/index';

const IngredientCard = ({ ingredient, onIngredientClick, count }) => {
  const { name, image, price } = ingredient;

  const handleClick = () => {
    onIngredientClick(ingredient);
  };

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: { ...ingredient },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div
      className={ingredientCardStyle.container}
      onClick={handleClick}
      ref={dragRef}
      style={{ opacity }}
    >
      {count ? <Counter count={count} size="default" extraClass="m-1" /> : ''}
      <img className={ingredientCardStyle.image} src={image} alt={name} />
      <div className={`mb-2 ${ingredientCardStyle.price}`}>
        <p className="mr-2 text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${ingredientCardStyle.title}`}>
        {name}
      </p>
    </div>
  );
};

export default IngredientCard;

IngredientCard.propTypes = {
  ingredient: dataPropTypes.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
  count: PropTypes.number,
};
