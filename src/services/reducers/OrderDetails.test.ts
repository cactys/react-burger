import { orderReducer } from './OrderDetails';
import * as type from '../constants';
import {
  CURRENT_ORDER_DATA_TEST,
  EMPTY_ORDER_DATA_TEST,
  ORDER_DETAILS_DATA_TEST,
} from '../../utils/constants';

const initialState = {
  currentOrder: null,
  message: '',
  orderRequest: false,
  orderFailed: false,
};

describe('order details reducer', () => {
  it('should order success', () => {
    expect(
      orderReducer(initialState, {
        type: type.ORDER_POST_SUCCESS,
        payload: CURRENT_ORDER_DATA_TEST,
      })
    ).toEqual({
      currentOrder: ORDER_DETAILS_DATA_TEST,
      message: '',
      orderRequest: false,
      orderFailed: false,
    });
  });

  it('should order request', () => {
    expect(
      orderReducer(initialState, {
        type: type.ORDER_POST_REQUEST,
        payload: CURRENT_ORDER_DATA_TEST,
      })
    ).toEqual({
      currentOrder: null,
      message: '',
      orderRequest: true,
      orderFailed: false,
    });
  });

  it('should order empty', () => {
    expect(
      orderReducer(initialState, {
        type: type.ORDER_POST_EMPTY,
        payload: EMPTY_ORDER_DATA_TEST,
      })
    ).toEqual({
      currentOrder: null,
      message: 'Добавь булку',
      orderRequest: false,
      orderFailed: true,
    });
  });

  it('should order failed', () => {
    expect(
      orderReducer(initialState, {
        type: type.ORDER_POST_FAILED,
        payload: CURRENT_ORDER_DATA_TEST,
      })
    ).toEqual({
      currentOrder: null,
      message: '',
      orderRequest: false,
      orderFailed: true,
    });
  });

  it('should order reset info', () => {
    expect(
      orderReducer(initialState, {
        type: type.ORDER_RESET_INFO,
        payload: CURRENT_ORDER_DATA_TEST,
      })
    ).toEqual({
      currentOrder: null,
      message: '',
      orderRequest: false,
      orderFailed: false,
    });
  });
});
