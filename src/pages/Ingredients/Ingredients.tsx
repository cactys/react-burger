import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';
import ingredientsStyle from './Ingredients.module.css';
import { TIngredients, TIngredientItem } from '../../services/types';

const Ingredients: FC = () => {
  const ingredients = useSelector((state: TIngredients) => state.ingredients.ingredients);
  const [info, setInfo] = useState<TIngredientItem>();
  const { id } = useParams();

  useEffect(() => {
    if (ingredients) {
      setInfo(ingredients.filter((item) => item._id === id)[0]);
    }
  }, [ingredients, id]);

  return (
    <main className={ingredientsStyle.container}>
      <h2 className={`text text_type_main-large ${ingredientsStyle.title}`}>
        Детали ингредиента
      </h2>
      <IngredientDetails data={info} />
    </main>
  );
};

export default Ingredients;
