import { api } from '../../utils/api';
import { ERROR_STATE } from '../../utils/constants';
import {
  orderPostEmpty,
  orderPostFailed,
  orderPostRequest,
  orderPostSuccess,
  orderResetInfo,
} from '../constants';
import { AppThink, TOrderIngredients } from '../types';

const orderDetail = (ingredientId: TOrderIngredients): AppThink => {
  return (dispatch) => {
    dispatch(orderPostRequest());

    const accessToken = localStorage.getItem('accessToken');

    api
      .addOrder(ingredientId, accessToken)
      .then((res) => {
        if (res && res.success) {
          dispatch(orderPostSuccess(res.order));
        } else {
          dispatch(orderPostFailed());
          dispatch(orderResetInfo());
        }
      })
      .catch((err) => {
        console.error(err.message);
        switch (err.message) {
          case ERROR_STATE.emptyOrder: {
            return dispatch(orderPostEmpty('Добавь булку'));
          }
          case ERROR_STATE.jwtMalformed || ERROR_STATE.invalidToken: {
            return dispatch(orderPostFailed());
          }
          default: {
            dispatch(orderPostFailed());
          }
        }
        dispatch(orderResetInfo());
      });
  };
};

export { orderDetail };
