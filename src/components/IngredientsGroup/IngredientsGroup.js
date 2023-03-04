import PropTypes from 'prop-types';
import IngredientCard from '../IngredientCard/IngredientCard';
import ingredientsGroupStyle from './IngredientsGroup.module.css';
import { dataPropTypes } from '../../utils/constants';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const IngredientsGroup = ({ data, onIngredientClick }) => {
  const { ingredients, bun } = useSelector(
    (store) => store.constructorIngredient
  );

  const calcCounter = useMemo(() => {
    const counters = {};
    ingredients.forEach((ingredient) => {
      if (!counters[ingredient._id]) counters[ingredient._id] = 0;
      counters[ingredient._id]++;
    });
    if (bun) counters[bun._id] = 2;
    return counters;
  }, [bun, ingredients]);

  return (
    <>
      {data.map((ingredient) => (
        <li className={ingredientsGroupStyle.card} key={ingredient._id}>
          <IngredientCard
            onIngredientClick={onIngredientClick}
            ingredient={ingredient}
            count={calcCounter[ingredient._id]}
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
