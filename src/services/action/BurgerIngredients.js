import { api } from '../../utils/api';

export const INGREDIENTS_REQUEST = 'INGREDIENTS/REQUEST';
export const INGREDIENTS_SUCCESS = 'INGREDIENTS/SUCCESS';
export const INGREDIENTS__FAILED = 'INGREDIENTS/FAILED';
export const INGREDIENTS_RESET = 'INGREDIENTS/RESET';
export const INGREDIENT_ADD_INFO = 'INGREDIENT/ADD_INFO';
export const INGREDIENT_DELETE_INFO = 'INGREDIENT/DELETE_INFO';

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: INGREDIENTS_REQUEST,
    });
    api
      .getIngredient()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: INGREDIENTS_SUCCESS,
            data: res.data,
          });
        } else {
          dispatch({
            type: INGREDIENTS__FAILED,
          });
          dispatch({
            type: INGREDIENTS_RESET,
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
        dispatch({
          type: INGREDIENTS__FAILED,
        });
        dispatch({
          type: INGREDIENTS_RESET,
        });
      });
  };
}
