import { createAction } from '@reduxjs/toolkit';
import { TOrderDetails } from '../types';

export const ORDER_POST_REQUEST = 'ORDER/POST_REQUEST';
export const ORDER_POST_SUCCESS: 'ORDER/POST_SUCCESS' | null =
  'ORDER/POST_SUCCESS';
export const ORDER_POST_FAILED: 'ORDER/POST_FAILED' | null =
  'ORDER/POST_FAILED';
export const ORDER_POST_EMPTY: 'ORDER/POST_EMPTY' | null = 'ORDER/POST_EMPTY';
export const ORDER_RESET_INFO: 'ORDER/RESET_INFO' | null = 'ORDER/RESET_INFO';

export const orderPostRequest = createAction(ORDER_POST_REQUEST);
export const orderPostSuccess = createAction<
  TOrderDetails,
  typeof ORDER_POST_SUCCESS
>(ORDER_POST_SUCCESS);
export const orderPostFailed = createAction(ORDER_POST_FAILED);
export const orderPostEmpty = createAction<string, typeof ORDER_POST_EMPTY>(
  ORDER_POST_EMPTY
);
export const orderResetInfo = createAction(ORDER_RESET_INFO);
