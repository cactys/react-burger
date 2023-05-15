import { api } from '../../utils/api';
import { auth } from '../../utils/auth';
import { ERROR_STATE } from '../../utils/constants';
import {
  loginFailed,
  loginRequest,
  loginSuccess,
  logoutFailed,
  logoutRequest,
  logoutSuccess,
  recoveryFailed,
  recoveryRequest,
  recoverySendEmailSuccess,
  recoverySendPasswordSuccess,
  recoverySetErrorMessage,
  registerFailed,
  registerRequest,
  registerSuccess,
  userChecked,
  userFailed,
  userSuccess,
  userUpdateInfoFailed,
  userUpdateInfoRequest,
  userUpdateInfoSuccess,
} from '../constants';
import { AppThink, TUserBody } from '../types';

const getUser = (): AppThink => {
  return (dispatch) => {
    const accessToken: string | null = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const isLogin = localStorage.getItem('login');
    if (accessToken && refreshToken && isLogin) {
      api
        .getCurrentUser(accessToken)
        .then((res) => {
          if (res && res.success) {
            dispatch(userSuccess(res.user));
            dispatch(userChecked());
          } else {
            dispatch(userFailed());
          }
        })
        .catch((err) => {
          console.error(err.message);
          switch (err.message) {
            case ERROR_STATE.jwtMalformed: {
              return dispatch(userChecked());
            }
            case ERROR_STATE.invalidToken: {
              return dispatch(userChecked());
            }
            default: {
              dispatch(userChecked());
              dispatch(userFailed());
              break;
            }
          }
        });
    } else {
      dispatch(userChecked());
    }
  };
};

const login = (body: TUserBody): AppThink => {
  return (dispatch) => {
    dispatch(loginRequest());

    auth
      .signUp(body)
      .then((res) => {
        if (res && res.success) {
          const accessToken = res.accessToken.split('Bearer ')[1];
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('login', 'true');
          dispatch(loginSuccess(res.user));
        } else {
          dispatch(loginFailed('Ошибка входа'));
        }
      })
      .catch((err) => {
        console.error(err.message);
        switch (err.message) {
          case ERROR_STATE.incorrectData: {
            return dispatch(loginFailed('E-mail или пароль введены неверно.'));
          }
          default: {
            return dispatch(loginFailed('Ошибка входа'));
          }
        }
      });
  };
};

const register = (body: TUserBody): AppThink => {
  return (dispatch) => {
    dispatch(registerRequest());

    auth
      .signIn(body)
      .then((res) => {
        if (res && res.success) {
          dispatch(registerSuccess(res.user));
          const accessToken = res.accessToken.split('Bearer ')[1];
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('login', 'true');
        } else {
          dispatch(registerFailed('Ошибка регистрации'));
        }
      })
      .catch((err) => {
        console.error(err.message);
        switch (err.message) {
          case ERROR_STATE.userExists: {
            return dispatch(
              registerFailed('Такой пользователь уже существует.')
            );
          }
          case ERROR_STATE.requiredFields: {
            return dispatch(registerFailed('Пропущенное обязательное поле.'));
          }
          default: {
            return dispatch(registerFailed('Ошибка регистрации'));
          }
        }
      });
  };
};

const logout = (): AppThink => {
  return (dispatch) => {
    dispatch(logoutRequest());
    const refreshToken: string | null = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('Ошибка токена');
    auth
      .signOut(refreshToken)
      .then((res) => {
        if (res && res.success) {
          dispatch(logoutSuccess());
          localStorage.clear();
        } else {
          dispatch(logoutFailed());
        }
      })
      .catch((err) => {
        console.error(err.message);
        dispatch(logoutFailed());
      });
  };
};

const updateUserInfo = (body: TUserBody): AppThink => {
  return (dispatch) => {
    dispatch(userUpdateInfoRequest());

    const accessToken: string | null = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('Ошибка токена');
    api
      .editUser(body, accessToken)
      .then((res) => {
        if (res && res.success) {
          dispatch(userUpdateInfoSuccess(res.user));
        } else {
          dispatch(userUpdateInfoFailed());
        }
      })
      .catch((err) => {
        console.error(err.message);
        switch (err.message) {
          case ERROR_STATE.jwtMalformed || ERROR_STATE.invalidToken: {
            return dispatch(userChecked());
          }
          default: {
            dispatch(userChecked());
            dispatch(userFailed());
            dispatch(userUpdateInfoFailed());
            break;
          }
        }
      });
  };
};

const recoveryEmailSend = (body: TUserBody): AppThink => {
  return (dispatch) => {
    dispatch(recoveryRequest());
    auth
      .forgotPassword(body)
      .then((res) => {
        if (res && res.success) {
          dispatch(recoverySendEmailSuccess());
        } else {
          dispatch(recoveryFailed());
          dispatch(recoverySetErrorMessage('Ошибка, попробуйте еще раз.'));
        }
      })
      .catch((err) => {
        console.error(err.message);
        dispatch(recoveryFailed());
        dispatch(recoverySetErrorMessage('Ошибка, попробуйте еще раз.'));
      });
  };
};

const recoveryPasswordSend = (body: TUserBody): AppThink => {
  return (dispatch) => {
    dispatch(recoveryRequest());
    auth
      .resetPassword(body)
      .then((res) => {
        if (res && res.success) {
          dispatch(recoverySendPasswordSuccess());
        } else {
          dispatch(recoveryFailed());
          dispatch(recoverySetErrorMessage('Ошибка, попробуйте еще раз.'));
        }
      })
      .catch((err) => {
        console.error(err.message);
        dispatch(recoveryFailed());
        switch (err.message) {
          case ERROR_STATE.invalidCredentials: {
            return dispatch(recoverySetErrorMessage('Введите код.'));
          }
          case ERROR_STATE.incorrectToken: {
            return dispatch(recoverySetErrorMessage('Введен не верный код.'));
          }
          default:
            return dispatch(
              recoverySetErrorMessage('Ошибка, попробуйте еще раз.')
            );
        }
      });
  };
};

export {
  getUser,
  login,
  register,
  logout,
  updateUserInfo,
  recoveryEmailSend,
  recoveryPasswordSend,
};
