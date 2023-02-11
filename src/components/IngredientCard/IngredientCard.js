import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientCardStyle from './IngredientCard.module.css';
import { dataPropTypes } from '../../utils/data';

const IngredientCard = ({ property }) => {
  return (
    <div className={ingredientCardStyle.container}>
      <Counter count={1} size='default' extraClass='m-1' />
      <img
        className={ingredientCardStyle.image}
        src={property.image}
        alt={property.name}
      />
      <div className={`mb-2 ${ingredientCardStyle.price}`}>
        <p className='mr-2 text text_type_digits-default'>{property.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className={`text text_type_main-default ${ingredientCardStyle.title}`}>
        {property.name}
      </p>
    </div>
  );
};

export default IngredientCard;

IngredientCard.propTypes = {
  property: dataPropTypes.isRequired,
};
