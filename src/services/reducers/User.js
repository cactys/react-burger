import {
  CHECKED_USER,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_USER_INFO_FAILED,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  USER_SUCCESS,
} from '../action/User';

const initialState = {
  user: null,
  userChecked: false,
  request: false,
  failed: false,
  message: '',
  isLogout: false,
  isLogin: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
      };
    }
    case CHECKED_USER: {
      return {
        ...state,
        userChecked: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
        request: false,
        failed: false,
        message: '',
        isLogout: false,
        isLogin: true,
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
        isLogin: true,
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
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        user: null,
        request: false,
        failed: false,
        isLogout: true,
        isLogin: false,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        request: true,
        failed: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        request: false,
        failed: true,
      };
    }
    case UPDATE_USER_INFO_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
        success: true,
        request: false,
        failed: false,
        message: 'Данные обновлены.',
      };
    }
    case UPDATE_USER_INFO_REQUEST: {
      return {
        ...state,
        success: false,
        request: true,
        failed: false,
        message: '',
      };
    }
    case UPDATE_USER_INFO_FAILED: {
      return {
        ...state,
        success: false,
        request: false,
        failed: true,
        message: 'Произошла ошибка.',
      };
    }
    default:
      return state;
  }
};
