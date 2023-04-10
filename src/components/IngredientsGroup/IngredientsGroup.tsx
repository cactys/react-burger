import { FC, useMemo } from 'react';
import IngredientCard from '../IngredientCard/IngredientCard';
import ingredientsGroupStyle from './IngredientsGroup.module.css';
import { IIngredientGroup } from '../../services/interfaces';
import { TConstructorIngredients, TDict } from '../../services/types';
import { useSelector } from '../../services/hooks';

const IngredientsGroup: FC<IIngredientGroup> = ({ data,
  onIngredientClick 
}) => {
  const { ingredients, bun } = useSelector(
    (store: TConstructorIngredients) => store.constructorIngredient
  );

  const calcCounter = useMemo(() => {
    const counters: TDict = {};
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
