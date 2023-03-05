import { api } from '../../utils/api';
import { auth } from '../../utils/auth';

export const CHECKED_USER = 'CHECKED_USER';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILED = 'USER_FAILED';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export function getUser() {
  return function (dispatch) {
    let accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (!accessToken && !refreshToken) {
      dispatch({
        type: CHECKED_USER,
      });
    } else {
      api
        .getUser(accessToken)
        .then((res) => {
          if (res && res.success) {
            dispatch({
              type: USER_SUCCESS,
              payload: res.user,
            });
            dispatch({
              type: CHECKED_USER,
            });
          } else {
            dispatch({
              type: USER_FAILED,
            });
          }
        })
        .catch((err) => {
          console.log(err.message);
          switch (err.message) {
            case 'jwt expired': {
              return api
                .getToken(refreshToken)
                .then((res) => {
                  if (res && res.success) {
                    accessToken = res.accessToken.split('Bearer ')[1];
                    localStorage.setItem('refreshToken', res.refreshToken);
                    localStorage.setItem('accessToken', accessToken);
                    api
                      .getUser(accessToken)
                      .then((res) => {
                        if (res && res.success) {
                          dispatch({
                            type: USER_SUCCESS,
                            payload: res.user,
                          });
                          dispatch({
                            type: CHECKED_USER,
                          });
                        } else {
                          dispatch({
                            type: USER_FAILED,
                          });
                        }
                      })
                      .catch((err) => {
                        console.log(err.message);
                        dispatch({
                          type: USER_FAILED,
                        });
                      });
                  } else {
                    dispatch({
                      type: USER_FAILED,
                    });
                  }
                })
                .catch((err) => {
                  console.log(err.message);
                  switch (err.message) {
                    case 'Token is invalid': {
                      dispatch({
                        type: CHECKED_USER,
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
            }
            case 'jwt malformed' || 'invalid token': {
              return dispatch({
                type: CHECKED_USER,
              });
            }
            default: {
              dispatch({
                type: CHECKED_USER,
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
        } else {
          dispatch({
            type: LOGIN_FAILED,
            payload: 'Ошибка входа',
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        switch (err.message) {
          case 'email or password are incorrect': {
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
        } else {
          dispatch({
            type: REGISTER_FAILED,
            payload: 'Ошибка регистрации',
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        switch (err.message) {
          case 'User already exists': {
            return dispatch({
              type: REGISTER_FAILED,
              payload: 'Такой пользователь уже существует.',
            });
          }
          case 'Email, password and name are required fields': {
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
        console.log(err.message);
        dispatch({ type: LOGOUT_FAILED });
      });
  };
}
