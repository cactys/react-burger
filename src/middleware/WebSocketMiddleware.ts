import type { Middleware } from 'redux';
import { RootState } from '../services';
import { TWSActionTypes } from '../services/types';
import { env } from 'process';
import { ERROR_STATE } from '../utils/constants';
import { userChecked } from '../services/constants';

const webSocketMiddleware = (
  wsActions: TWSActionTypes
): Middleware<RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let reconnectInterval = 0;

    return (next) => (action) => {
      const { dispatch } = store;
      const {
        wsConnect,
        wsDisconnect,
        wsMessage,
        wsConnecting,
        onClose,
        onError,
        onMessage,
        onOpen,
      } = wsActions;

      if (wsConnect.match(action)) {
        socket = new WebSocket(action.payload); // URL
        isConnected = true;
        dispatch(wsConnecting());
      }

      if (socket) {
        socket.onopen = () => dispatch(onOpen());
        socket.onerror = (err) => {
          console.log(err);
        };
        socket.onmessage = (evt) => {
          const { data } = evt;
          const { success, message } = JSON.parse(data);
          if (message === ERROR_STATE.incorrectToken) {
            dispatch(userChecked());
            console.log(success, message);
          }
          dispatch(onMessage(JSON.parse(data)));
        };
        socket.onclose = (evt) => {
          if (evt.code !== 1000) {
            dispatch(onError(evt.code.toString()));
          }
          dispatch(onClose());
          if (isConnected) {
            dispatch(wsConnecting());
            reconnectInterval = window.setInterval(() => {
              dispatch(wsConnect(action.payload)); // URL
            }, 60 * 1000);
          }
        };

        if (wsMessage?.match(action)) {
          socket.send(JSON.stringify(action.payload)); // response
        }

        if (wsDisconnect.match(action)) {
          isConnected = false;
          clearInterval(reconnectInterval);
          reconnectInterval = 0;
          socket.close;
          dispatch(onClose());
        }
      }

      next(action);
    };
  };
};

export { webSocketMiddleware };
