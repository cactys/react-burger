import { api } from '../../utils/api';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';
export const RESET_ORDER_INFO = 'DELETE_ORDER_INFO';

export function orderDetail(ingredientId) {
  return function (dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST,
    });

    api
      .addOrder(ingredientId)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: POST_ORDER_SUCCESS,
            order: res.order,
          });
        } else {
          dispatch({
            type: POST_ORDER_FAILED,
          });
          dispatch({
            type: RESET_ORDER_INFO,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: POST_ORDER_FAILED,
        });
        dispatch({
          type: RESET_ORDER_INFO,
        });
      });
  };
}
