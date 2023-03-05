import { auth } from '../../utils/auth';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

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
