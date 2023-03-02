import { api } from '../../utils/api';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const RESET_INGREDIENTS = 'RESET_INGREDIENTS';

export const ADD_INGREDIENT_INFO = 'ADD_INGREDIENT_INFO';
export const DELETE_INGREDIENT_INFO = 'DELETE_INGREDIENT_INFO';

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });

    api
      .getIngredient()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            data: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
          dispatch({
            type: RESET_INGREDIENTS,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
        dispatch({
          type: RESET_INGREDIENTS,
        });
      });
  };
}
