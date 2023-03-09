import { api } from '../../utils/api';

export const ORDER_POST_REQUEST = 'ORDER/POST_REQUEST';
export const ORDER_POST_SUCCESS = 'ORDER/POST_SUCCESS';
export const ORDER_POST_EMPTY = 'ORDER/POST_EMPTY';
export const ORDER_POST_FAILED = 'ORDER/POST_FAILED';
export const ORDER_RESET_INFO = 'ORDER/RESET_INFO';

export function orderDetail(ingredientId) {
  return function (dispatch) {
    dispatch({
      type: ORDER_POST_REQUEST,
    });

    api
      .addOrder(ingredientId)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: ORDER_POST_SUCCESS,
            order: res.order,
          });
        } else {
          dispatch({
            type: ORDER_POST_FAILED,
          });
          dispatch({
            type: ORDER_RESET_INFO,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        switch (err.message) {
          case 'One or more ids provided are incorrect': {
            return dispatch({
              type: ORDER_POST_EMPTY,
              payload: 'Добавь булку',
            });
          }
          default: {
            dispatch({
              type: ORDER_POST_FAILED,
            });
          }
        }
        dispatch({
          type: ORDER_RESET_INFO,
        });
      });
  };
}
