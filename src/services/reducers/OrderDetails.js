import {
  ORDER_POST_EMPTY,
  ORDER_POST_FAILED,
  ORDER_POST_REQUEST,
  ORDER_POST_SUCCESS,
  ORDER_RESET_INFO,
} from '../action/OrderDetails';

const initialState = {
  currentOrder: null,
  message: '',
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_POST_SUCCESS: {
      return {
        ...state,
        currentOrder: { ...action.order },
        orderRequest: false,
        orderFailed: false,
      };
    }
    case ORDER_POST_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case ORDER_POST_EMPTY: {
      return {
        ...state,
        message: action.payload,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case ORDER_POST_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case ORDER_RESET_INFO: {
      return {
        ...state,
        currentOrder: null,
      };
    }
    default:
      return state;
  }
};
