import { api } from '../../utils/api';
import {
  ingredientsFailed,
  ingredientsRequest,
  ingredientsReset,
  ingredientsSuccess,
} from '../constants';
import { AppThink } from '../types';

export const getIngredients = (): AppThink => {
  return (dispatch) => {
    dispatch(ingredientsRequest());
    api
      .getIngredient()
      .then((res) => {
        if (res && res.success) {
          dispatch(ingredientsSuccess(res.data));
        } else {
          dispatch(ingredientsFailed());
          dispatch(ingredientsReset());
        }
      })
      .catch((err) => {
        console.error(err.message);
        dispatch(ingredientsFailed());
        dispatch(ingredientsReset());
      });
  };
};
