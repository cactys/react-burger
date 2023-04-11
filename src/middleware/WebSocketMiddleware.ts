import type { Middleware } from 'redux';
import { RootState } from '../services';
import { TWSActionTypes } from '../services/types';

const webSocketMiddleware = (
  wsActions: TWSActionTypes
): Middleware<RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let reconnectTimer = 0;
    let url = '';

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
        url = action.payload;
        socket = new WebSocket(url);
        isConnected = true;
        dispatch(wsConnecting());
      }

      if (socket) {
        socket.onopen = () => dispatch(onOpen());
        // socket.onerror = (err) => console.log(err);
        socket.onerror = () => dispatch(wsConnecting());
        socket.onmessage = (evt) => {
          const { data } = evt;
          dispatch(onMessage(JSON.parse(data)));
        };
        socket.onclose = (evt) => {
          if (evt.code !== 1000) {
            dispatch(onError(evt.code.toString()));
          }
          dispatch(onClose());
          if (isConnected) {
            dispatch(wsConnecting());
            reconnectTimer = window.setTimeout(() => {
              dispatch(wsConnect(url));
            }, 5000);
          }
        };
        if (wsMessage && wsMessage.match(action)) {
          socket.send(JSON.stringify(action.payload));
        }

        if (wsDisconnect.match(action)) {
          clearTimeout(reconnectTimer);
          isConnected = false;
          reconnectTimer = 0;
          socket.close();
          dispatch(onClose());
        }
      }

      next(action);
    };
  };
};

export { webSocketMiddleware };
