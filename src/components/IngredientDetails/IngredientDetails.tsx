import { FC, useEffect, useState } from 'react';
import ingredientDetailsStyle from './IngredientDetails.module.css';
import Preloader from '../Preloader/Preloader';
import { TIngredientItem, TIngredients } from '../../services/types';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../services/hooks';

const IngredientDetails = ({ background }: { background?: boolean }) => {
  const ingredients = useSelector(
    (state: TIngredients) => state.ingredients.ingredients
  );
  const [info, setInfo] = useState<TIngredientItem>();
  const { id } = useParams();

  useEffect(() => {
    if (ingredients) {
      setInfo(ingredients.filter((item) => item._id === id)[0]);
    }
  }, [ingredients, id]);

  return (
    <div
      className={`${ingredientDetailsStyle.container} ${
        !background && ingredientDetailsStyle.cn
      }`}
    >
      {info ? (
        <img
          src={info?.image_large}
          alt={info?.name}
          className={ingredientDetailsStyle.img}
        />
      ) : (
        <Preloader />
      )}
      <p className="mt-4 mb-8 text text_type_main-medium">{info?.name}</p>
      <ul className={ingredientDetailsStyle.table}>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">Калории, ккал</h5>
          <p className="mt-2 text text_type_digits-default">{info?.calories}</p>
        </li>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">Белки, г</h5>
          <p className="mt-2 text text_type_digits-default">{info?.proteins}</p>
        </li>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">Жиры, г</h5>
          <p className="mt-2 text text_type_digits-default">{info?.fat}</p>
        </li>
        <li className={ingredientDetailsStyle.tableItem}>
          <h5 className="text text_type_main-default">Углеводы, г</h5>
          <p className="mt-2 text text_type_digits-default">
            {info?.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
