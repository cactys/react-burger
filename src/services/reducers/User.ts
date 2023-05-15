import type { PayloadAction } from '@reduxjs/toolkit';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  RECOVERY_CHANGE_STATUS,
  RECOVERY_FAILED,
  RECOVERY_REQUEST,
  RECOVERY_SEND_EMAIL_SUCCESS,
  RECOVERY_SEND_PASSWORD_SUCCESS,
  RECOVERY_SET_ERROR_MESSAGE,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USER_CHECKED,
  USER_SUCCESS,
  USER_UPDATE_INFO_FAILED,
  USER_UPDATE_INFO_REQUEST,
  USER_UPDATE_INFO_SUCCESS,
} from '../constants';
import { TUserActions, TUserState } from '../types';

const initialState: TUserState = {
  user: null,
  userChecked: false,
  loginRequest: false,
  loginFailed: false,
  registerRequest: false,
  registerFailed: false,
  logoutRequest: false,
  logoutRailed: false,
  updateSuccess: false,
  updateRequest: false,
  updateFailed: false,
  recoveryRequest: false,
  recoveryFailed: false,
  emailSended: false,
  passwordRecovered: false,
  loginMessage: '',
  registerMessage: '',
  updateMessage: '',
  recoveryMessage: '',
  isLogout: false,
  isLogin: false,
};

export const userReducer = (
  state = initialState,
  action: PayloadAction<TUserActions>
) => {
  switch (action.type) {
    case USER_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
      };
    }
    case USER_CHECKED: {
      return {
        ...state,
        userChecked: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
        loginRequest: false,
        loginFailed: false,
        loginMessage: '',
        isLogout: false,
        isLogin: true,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
        loginMessage: '',
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
        loginMessage: action.payload,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
        registerRequest: false,
        registerFailed: false,
        registerMessage: '',
        isLogout: false,
        isLogin: true,
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
        registerMessage: '',
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
        registerMessage: action.payload,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        user: null,
        logoutRequest: false,
        logoutRailed: false,
        isLogout: true,
        isLogin: false,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutRailed: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutRailed: true,
      };
    }
    case USER_UPDATE_INFO_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
        updateSuccess: true,
        updateRequest: false,
        updateFailed: false,
        updateMessage: 'Данные обновлены.',
      };
    }
    case USER_UPDATE_INFO_REQUEST: {
      return {
        ...state,
        updateSuccess: false,
        updateRequest: true,
        updateFailed: false,
        updateMessage: '',
      };
    }
    case USER_UPDATE_INFO_FAILED: {
      return {
        ...state,
        updateSuccess: false,
        updateRequest: false,
        updateFailed: true,
        updateMessage: 'Произошла ошибка.',
      };
    }
    case RECOVERY_CHANGE_STATUS: {
      return {
        ...state,
        emailSended: false,
      };
    }
    case RECOVERY_REQUEST: {
      return {
        ...state,
        recoveryRequest: true,
        recoveryFailed: false,
        recoveryMessage: '',
      };
    }
    case RECOVERY_FAILED: {
      return {
        ...state,
        recoveryRequest: false,
        recoveryFailed: true,
      };
    }
    case RECOVERY_SEND_EMAIL_SUCCESS: {
      return {
        ...state,
        recoveryRequest: false,
        recoveryFailed: false,
        emailSended: true,
        passwordRecovered: false,
      };
    }
    case RECOVERY_SEND_PASSWORD_SUCCESS: {
      return {
        ...state,
        recoveryRequest: false,
        recoveryFailed: false,
        emailSended: false,
        passwordRecovered: true,
      };
    }
    case RECOVERY_SET_ERROR_MESSAGE: {
      return {
        ...state,
        recoveryMessage: action.payload,
      };
    }
    default:
      return state;
  }
};
