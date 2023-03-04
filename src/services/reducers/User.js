import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../action/User';

const initialState = {
  user: null,
  request: false,
  failed: false,
  message: '',
  isLogout: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
        request: false,
        failed: false,
        message: '',
        isLogout: false,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        request: true,
        failed: false,
        message: '',
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        request: false,
        failed: true,
        message: action.payload,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
        request: false,
        failed: false,
        message: '',
        isLogout: false,
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        request: true,
        failed: false,
        message: '',
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        request: false,
        failed: true,
        message: action.payload,
      };
    }
    default:
      return state;
  }
};
