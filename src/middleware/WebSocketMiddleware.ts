import type { Middleware } from 'redux';
import { RootState } from '../services';
import { TWSActionTypes } from '../services/types';

const webSocketMiddleware = (
  wsActions: TWSActionTypes
): Middleware<RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;
    let isConnected = false;

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
          dispatch(onError(''));
        };
        socket.onmessage = (evt) => {
          const { data } = evt;
          const { ...rest } = JSON.parse(data);
          dispatch(onMessage(rest));
        };
        socket.onclose = (evt) => {
          if (evt.code !== 1000) {
            dispatch(onError(evt.code.toString()));
          }
          dispatch(onClose());
          if (isConnected) {
            dispatch(wsConnecting());
            dispatch(wsConnect(action.payload)); // URL
          }
        };

        if (wsMessage && wsMessage.match(action)) {
          socket.send(JSON.stringify(action.payload));
        }

        if (wsDisconnect.match(action)) {
          isConnected = false;
          socket.close;
          dispatch(onClose());
        }
      }

      next(action);
    };
  };
};

export { webSocketMiddleware };
