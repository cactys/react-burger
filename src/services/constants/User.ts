import { createAction } from '@reduxjs/toolkit';
import { TUserBody } from '../types';

export const USER_CHECKED: 'USER/CHECKED' = 'USER/CHECKED';
export const USER_REQUEST: 'USER/REQUEST' = 'USER/REQUEST';
export const USER_SUCCESS: 'USER/SUCCESS' = 'USER/SUCCESS';
export const USER_FAILED: 'USER/FAILED' = 'USER/FAILED';
export const LOGIN_REQUEST: 'LOGIN/REQUEST' = 'LOGIN/REQUEST';
export const LOGIN_SUCCESS: 'LOGIN/SUCCESS' = 'LOGIN/SUCCESS';
export const LOGIN_FAILED: 'LOGIN/FAILED' = 'LOGIN/FAILED';
export const REGISTER_REQUEST: 'REGISTER/REQUEST' = 'REGISTER/REQUEST';
export const REGISTER_SUCCESS: 'REGISTER/SUCCESS' = 'REGISTER/SUCCESS';
export const REGISTER_FAILED: 'REGISTER/FAILED' = 'REGISTER/FAILED';
export const LOGOUT_REQUEST: 'LOGOUT/REQUEST' = 'LOGOUT/REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT/SUCCESS' = 'LOGOUT/SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT/FAILED' = 'LOGOUT/FAILED';
export const USER_UPDATE_INFO_REQUEST: 'USER/UPDATE_INFO_REQUEST' =
  'USER/UPDATE_INFO_REQUEST';
export const USER_UPDATE_INFO_SUCCESS: 'USER/UPDATE_INFO_SUCCESS' =
  'USER/UPDATE_INFO_SUCCESS';
export const USER_UPDATE_INFO_FAILED: 'USER/UPDATE_INFO_FAILED' =
  'USER/UPDATE_INFO_FAILED';
export const RECOVERY_REQUEST: 'RECOVERY/REQUEST' = 'RECOVERY/REQUEST';
export const RECOVERY_FAILED: 'RECOVERY/FAILED' = 'RECOVERY/FAILED';
export const RECOVERY_SEND_EMAIL_SUCCESS: 'RECOVERY/SEND_EMAIL_SUCCESS' =
  'RECOVERY/SEND_EMAIL_SUCCESS';
export const RECOVERY_SEND_PASSWORD_SUCCESS: 'RECOVERY/SEND_PASSWORD_SUCCESS' =
  'RECOVERY/SEND_PASSWORD_SUCCESS';
export const RECOVERY_CHANGE_STATUS: 'RECOVERY/CHANGE_STATUS' =
  'RECOVERY/CHANGE_STATUS';
export const RECOVERY_SET_ERROR_MESSAGE: 'RECOVERY/SET_ERROR_MESSAGE' =
  'RECOVERY/SET_ERROR_MESSAGE';

export const userChecked = createAction(USER_CHECKED);
export const userRequest = createAction(USER_REQUEST);
export const userSuccess = createAction<TUserBody, typeof USER_SUCCESS>(
  USER_SUCCESS
);
export const userFailed = createAction(USER_FAILED);
export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction<TUserBody, typeof LOGIN_SUCCESS>(
  LOGIN_SUCCESS
);
export const loginFailed = createAction<string, typeof LOGIN_FAILED>(
  LOGIN_FAILED
);
export const registerRequest = createAction(REGISTER_REQUEST);
export const registerSuccess = createAction<TUserBody, typeof REGISTER_SUCCESS>(
  REGISTER_SUCCESS
);
export const registerFailed = createAction<string, typeof REGISTER_FAILED>(
  REGISTER_FAILED
);
export const logoutRequest = createAction(LOGOUT_REQUEST);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutFailed = createAction(LOGOUT_FAILED);
export const userUpdateInfoRequest = createAction(USER_UPDATE_INFO_REQUEST);
export const userUpdateInfoSuccess = createAction<
  TUserBody,
  typeof USER_UPDATE_INFO_SUCCESS
>(USER_UPDATE_INFO_SUCCESS);
export const userUpdateInfoFailed = createAction(USER_UPDATE_INFO_FAILED);
export const recoveryRequest = createAction(RECOVERY_REQUEST);
export const recoveryFailed = createAction(RECOVERY_FAILED);
export const recoverySendEmailSuccess = createAction(
  RECOVERY_SEND_EMAIL_SUCCESS
);
export const recoverySendPasswordSuccess = createAction(
  RECOVERY_SEND_PASSWORD_SUCCESS
);
export const recoveryChangeStatus = createAction(RECOVERY_CHANGE_STATUS);
export const recoverySetErrorMessage = createAction<
  string,
  typeof RECOVERY_SET_ERROR_MESSAGE
>(RECOVERY_SET_ERROR_MESSAGE);
