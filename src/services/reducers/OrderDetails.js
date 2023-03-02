import { POST_ORDER_FAILED, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, RESET_ORDER_INFO } from "../action/OrderDetails";

const initialState = {
  currentOrder: null,
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        currentOrder: { ...action.order },
        orderRequest: false,
        orderFailed: false,
      };
    }
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case POST_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case RESET_ORDER_INFO: {
      return {
        ...state,
        currentOrder: null,
      };
    }
    default:
      return state;
  }
};
