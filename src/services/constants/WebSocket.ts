/* eslint-disable @typescript-eslint/prefer-as-const */
import { createAction } from '@reduxjs/toolkit';
import { TWSMessage } from '../types';

export const WS_CONNECT: 'WS/CONNECT' = 'WS/CONNECT';
export const WS_CONNECT_CURRENT_USER: 'WS/CONNECT/CURRENT/USER' =
  'WS/CONNECT/CURRENT/USER';
export const WS_DISCONNECT: 'WC/DISCONNECT' = 'WC/DISCONNECT';
export const WS_CONNECTING: 'WS/CONNECTING' = 'WS/CONNECTING';
export const WS_OPEN: 'WS/OPEN' = 'WS/OPEN';
export const WS_CLOSE: 'WS/CLOSE' = 'WS/CLOSE';
export const WS_MESSAGE: 'WS/MESSAGE' = 'WS/MESSAGE';
export const WS_ERROR: 'WS/ERROR' = 'WS/ERROR';

export const wsConnect = createAction<string, typeof WS_CONNECT>(WS_CONNECT);
export const wsConnectCurrentUser = createAction<
  string,
  typeof WS_CONNECT_CURRENT_USER
>(WS_CONNECT_CURRENT_USER);
export const wsDisconnect = createAction(WS_DISCONNECT);
export const wsConnecting = createAction(WS_CONNECTING);
export const wsOpen = createAction(WS_OPEN);
export const wsClose = createAction(WS_CLOSE);
export const wsMessage = createAction<TWSMessage, typeof WS_MESSAGE>(
  WS_MESSAGE
);
export const wsError = createAction<string, typeof WS_ERROR>(WS_ERROR);

export const wsActions = {
  wsConnect: wsConnect,
  wsConnectCurrentUser: wsConnectCurrentUser,
  wsDisconnect: wsDisconnect,
  wsConnecting: wsConnecting,
  onOpen: wsOpen,
  onClose: wsClose,
  onMessage: wsMessage,
  onError: wsError,
};
