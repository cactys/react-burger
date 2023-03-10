import { api } from '../../utils/api';
import { auth } from '../../utils/auth';
import { ERROR_STATE } from '../../utils/constants';

export const USER_CHECKED = 'USER/CHECKED';
export const USER_REQUEST = 'USER/REQUEST';
export const USER_SUCCESS = 'USER/SUCCESS';
export const USER_FAILED = 'USER/FAILED';
export const LOGIN_REQUEST = 'LOGIN/REQUEST';
export const LOGIN_SUCCESS = 'LOGIN/SUCCESS';
export const LOGIN_FAILED = 'LOGIN/FAILED';
export const REGISTER_REQUEST = 'REGISTER/REQUEST';
export const REGISTER_SUCCESS = 'REGISTER/SUCCESS';
export const REGISTER_FAILED = 'REGISTER/FAILED';
export const LOGOUT_REQUEST = 'LOGOUT/REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT/SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT/FAILED';
export const USER_UPDATE_INFO_REQUEST = 'USER/UPDATE_INFO_REQUEST';
export const USER_UPDATE_INFO_SUCCESS = 'USER/UPDATE_INFO_SUCCESS';
export const USER_UPDATE_INFO_FAILED = 'USER/UPDATE_INFO_FAILED';
export const RECOVERY_REQUEST = 'RECOVERY/REQUEST';
export const RECOVERY_FAILED = 'RECOVERY/FAILED';
export const RECOVERY_SEND_EMAIL_SUCCESS = 'RECOVERY/SEND_EMAIL_SUCCESS';
export const RECOVERY_SEND_PASSWORD_SUCCESS = 'RECOVERY/SEND_PASSWORD_SUCCESS';
export const RECOVERY_CHANGE_STATUS = 'RECOVERY/CHANGE_STATUS';
export const RECOVERY_SET_ERROR_MESSAGE = 'RECOVERY/SET_ERROR_MESSAGE';

export function getUser() {
  return function (dispatch) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const isLogin = localStorage.getItem('login');
    if (!accessToken && !refreshToken && !isLogin) {
      dispatch({
        type: USER_CHECKED,
      });
    } else {
      api
        .getCurrentUser(accessToken)
        .then((res) => {
          if (res && res.success) {
            dispatch({
              type: USER_SUCCESS,
              payload: res.user,
            });
            dispatch({
              type: USER_CHECKED,
            });
          } else {
            dispatch({
              type: USER_FAILED,
            });
          }
        })
        .catch((err) => {
          console.error(err.message);
          switch (err.message) {
            case ERROR_STATE.jwtExpired: {
              console.log('jwt');
              return dispatch(getToken(refreshToken));
            }
            case ERROR_STATE.jwtMalformed || ERROR_STATE.invalidToken: {
              return dispatch({
                type: USER_CHECKED,
              });
            }
            default: {
              dispatch({
                type: USER_CHECKED,
              });
              dispatch({
                type: USER_FAILED,
              });
              break;
            }
          }
        });
    }
  };
}

export function getToken(refreshToken) {
  return function (dispatch) {
    return api
      .getRefreshToken(refreshToken)
      .then((res) => {
        if (res && res.success) {
          const accessToken = res.accessToken.split('Bearer ')[1];
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('login', true);
          dispatch(getUser());
        }
      })
      .catch((err) => {
        console.error(err.message);
        switch (err.message) {
          case ERROR_STATE.tokenIsInvalid: {
            dispatch({
              type: USER_CHECKED,
            });
            localStorage.clear();
            break;
          }
          default: {
            return dispatch({
              type: USER_FAILED,
            });
          }
        }
      });
  };
}

export function login(body) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });

    auth
      .signUp(body)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.user,
          });
          const accessToken = res.accessToken.split('Bearer ')[1];
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('login', true);
        } else {
          dispatch({
            type: LOGIN_FAILED,
            payload: 'Ошибка входа',
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
        switch (err.message) {
          case ERROR_STATE.incorrectData: {
            return dispatch({
              type: LOGIN_FAILED,
              payload: 'E-mail или пароль введены неверно.',
            });
          }
          default: {
            return dispatch({
              type: LOGIN_FAILED,
              payload: 'Ошибка входа',
            });
          }
        }
      });
  };
}

export function register(body) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });

    auth
      .signIn(body)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.user,
          });
          const accessToken = res.accessToken.split('Bearer ')[1];
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('login', true);
        } else {
          dispatch({
            type: REGISTER_FAILED,
            payload: 'Ошибка регистрации',
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
        switch (err.message) {
          case ERROR_STATE.userExists: {
            return dispatch({
              type: REGISTER_FAILED,
              payload: 'Такой пользователь уже существует.',
            });
          }
          case ERROR_STATE.requiredFields: {
            return dispatch({
              type: REGISTER_FAILED,
              payload: 'Пропущенное обязательное поле.',
            });
          }
          default: {
            return dispatch({
              type: REGISTER_FAILED,
              payload: 'Ошибка регистрации',
            });
          }
        }
      });
  };
}

export function logout() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    const refreshToken = localStorage.getItem('refreshToken');
    auth
      .signOut(refreshToken)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGOUT_SUCCESS,
          });
          localStorage.clear();
        } else {
          dispatch({
            type: LOGOUT_FAILED,
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
        dispatch({ type: LOGOUT_FAILED });
      });
  };
}

export function updateUserInfo(body) {
  return function (dispatch) {
    dispatch({
      type: USER_UPDATE_INFO_REQUEST,
    });
    const accessToken = localStorage.getItem('accessToken');
    api
      .editUser(body, accessToken)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: USER_UPDATE_INFO_SUCCESS,
            payload: res.user,
          });
        } else {
          dispatch({
            type: USER_UPDATE_INFO_FAILED,
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
        dispatch({
          type: USER_UPDATE_INFO_FAILED,
        });
      });
  };
}

export function recoveryEmailSend(body) {
  return function (dispatch) {
    dispatch({
      type: RECOVERY_REQUEST,
    });
    auth
      .forgotPassword(body)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: RECOVERY_SEND_EMAIL_SUCCESS,
          });
        } else {
          dispatch({
            type: RECOVERY_FAILED,
          });
          dispatch({
            type: RECOVERY_SET_ERROR_MESSAGE,
            payload: 'Ошибка, попробуйте еще раз.',
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
        dispatch({
          type: RECOVERY_FAILED,
        });
        dispatch({
          type: RECOVERY_SET_ERROR_MESSAGE,
          payload: 'Ошибка, попробуйте еще раз.',
        });
      });
  };
}

export function recoveryPasswordSend(body) {
  return function (dispatch) {
    dispatch({
      type: RECOVERY_REQUEST,
    });
    auth
      .resetPassword(body)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: RECOVERY_SEND_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({
            type: RECOVERY_FAILED,
          });
          dispatch({
            type: RECOVERY_SET_ERROR_MESSAGE,
            payload: 'Ошибка, попробуйте еще раз.',
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
        dispatch({
          type: RECOVERY_FAILED,
        });
        switch (err.message) {
          case ERROR_STATE.invalidCredentials: {
            return dispatch({
              type: RECOVERY_SET_ERROR_MESSAGE,
              payload: 'Введите код.',
            });
          }
          case ERROR_STATE.incorrectToken: {
            return dispatch({
              type: RECOVERY_SET_ERROR_MESSAGE,
              payload: 'Введен не верный код.',
            });
          }
          default:
            return dispatch({
              type: RECOVERY_SET_ERROR_MESSAGE,
              payload: 'Ошибка, попробуйте еще раз.',
            });
        }
      });
  };
}
