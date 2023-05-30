import { orderReducer } from './OrderDetails';
import * as type from '../constants';
import * as dataTest from '../../utils/dataTest';

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
        payload: dataTest.CURRENT_ORDER,
      })
    ).toEqual({
      ...initialState,
      currentOrder: dataTest.ORDER_DETAILS,
    });
  });

  it('should order request', () => {
    expect(
      orderReducer(initialState, {
        type: type.ORDER_POST_REQUEST,
        payload: dataTest.CURRENT_ORDER,
      })
    ).toEqual({
      ...initialState,
      orderRequest: true,
    });
  });

  it('should order empty', () => {
    expect(
      orderReducer(initialState, {
        type: type.ORDER_POST_EMPTY,
        payload: dataTest.EMPTY_ORDER,
      })
    ).toEqual({
      ...initialState,
      message: 'Добавь булку',
      orderFailed: true,
    });
  });

  it('should order failed', () => {
    expect(
      orderReducer(initialState, {
        type: type.ORDER_POST_FAILED,
        payload: dataTest.CURRENT_ORDER,
      })
    ).toEqual({
      ...initialState,
      orderFailed: true,
    });
  });

  it('should order reset info', () => {
    expect(
      orderReducer(initialState, {
        type: type.ORDER_RESET_INFO,
        payload: dataTest.CURRENT_ORDER,
      })
    ).toEqual({
      ...initialState,
    });
  });
});
