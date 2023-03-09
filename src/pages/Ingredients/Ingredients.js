import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';
import { getIngredients } from '../../services/action/BurgerIngredients';
import ingredientsStyle from './Ingredients.module.css';

const Ingredients = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const [info, setInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

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
