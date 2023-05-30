import { userReducer } from './User';
import * as type from '../constants';
import * as dataTest from '../../utils/dataTest';

const initialState = {
  user: null,
  userChecked: false,
  loginRequest: false,
  loginFailed: false,
  registerRequest: false,
  registerFailed: false,
  logoutRequest: false,
  logoutFailed: false,
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

describe('user reducer', () => {
  it('should default action', () => {
    expect(
      userReducer(initialState, {
        type: '',
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
    });
  });

  it('should success user', () => {
    expect(
      userReducer(initialState, {
        type: type.USER_SUCCESS,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
    });
  });

  it('should checked user', () => {
    expect(
      userReducer(initialState, {
        type: type.USER_CHECKED,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      userChecked: true,
    });
  });

  it('should success login user', () => {
    expect(
      userReducer(initialState, {
        type: type.LOGIN_SUCCESS,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      isLogin: true,
    });
  });

  it('should request login user', () => {
    expect(
      userReducer(initialState, {
        type: type.LOGIN_REQUEST,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      loginRequest: true,
      user: null,
    });
  });

  it('should failed login user', () => {
    expect(
      userReducer(initialState, {
        type: type.LOGIN_FAILED,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      loginFailed: true,
    });
  });

  it('should success register user', () => {
    expect(
      userReducer(initialState, {
        type: type.REGISTER_SUCCESS,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      isLogin: true,
    });
  });

  it('should request register user', () => {
    expect(
      userReducer(initialState, {
        type: type.REGISTER_REQUEST,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      registerRequest: true,
    });
  });

  it('should failed register user', () => {
    expect(
      userReducer(initialState, {
        type: type.REGISTER_FAILED,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      registerFailed: true,
    });
  });

  it('should success logout user', () => {
    expect(
      userReducer(initialState, {
        type: type.LOGOUT_SUCCESS,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      isLogout: true,
    });
  });

  it('should request logout user', () => {
    expect(
      userReducer(initialState, {
        type: type.LOGOUT_REQUEST,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      logoutRequest: true,
    });
  });

  it('should failed logout user', () => {
    expect(
      userReducer(initialState, {
        type: type.LOGOUT_FAILED,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      logoutFailed: true,
    });
  });

  it('should success update info user', () => {
    expect(
      userReducer(initialState, {
        type: type.USER_UPDATE_INFO_SUCCESS,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      updateSuccess: true,
      updateMessage: 'Данные обновлены.',
    });
  });

  it('should request update info user', () => {
    expect(
      userReducer(initialState, {
        type: type.USER_UPDATE_INFO_REQUEST,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      updateRequest: true,
    });
  });

  it('should failed update info user', () => {
    expect(
      userReducer(initialState, {
        type: type.USER_UPDATE_INFO_FAILED,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      updateFailed: true,
      updateMessage: 'Произошла ошибка.',
    });
  });

  it('should recovery change status', () => {
    expect(
      userReducer(initialState, {
        type: type.RECOVERY_CHANGE_STATUS,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
    });
  });

  it('should request recovery user', () => {
    expect(
      userReducer(initialState, {
        type: type.RECOVERY_REQUEST,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      recoveryRequest: true,
    });
  });

  it('should failed recovery user', () => {
    expect(
      userReducer(initialState, {
        type: type.RECOVERY_FAILED,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      recoveryFailed: true,
    });
  });

  it('should success recovery send email', () => {
    expect(
      userReducer(initialState, {
        type: type.RECOVERY_SEND_EMAIL_SUCCESS,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      emailSended: true,
    });
  });

  it('should success recovery send password', () => {
    expect(
      userReducer(initialState, {
        type: type.RECOVERY_SEND_PASSWORD_SUCCESS,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
      passwordRecovered: true,
    });
  });

  it('should set recovery error message', () => {
    expect(
      userReducer(initialState, {
        type: type.RECOVERY_SET_ERROR_MESSAGE,
        payload: dataTest.USER_ACTION,
      })
    ).toEqual({
      ...dataTest.USER_ACTION,
      user: null,
    });
  });
});
