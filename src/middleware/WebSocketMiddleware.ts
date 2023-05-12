import type { Middleware, MiddlewareAPI } from 'redux';
import { RootState } from '../services';
import { TWSActionTypes } from '../services/types';
import { ERROR_STATE } from '../utils/constants';
import { userChecked } from '../services/constants';

const webSocketMiddleware = (
  wsActions: TWSActionTypes
): Middleware<RootState> => {
  const {
    wsConnect,
    wsConnectCurrentUser,
    wsDisconnect,
    wsMessage,
    wsConnecting,
    onClose,
    onError,
    onMessage,
    onOpen,
  } = wsActions;

  return ((store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;
    let isConnected = false;
    let reconnectInterval = 0;

    return (next) => (action) => {
      const { dispatch } = store;

      if (wsConnect.match(action)) {
        socket = new WebSocket(action.payload); // URL
        isConnected = true;
        dispatch(wsConnecting());
      }

      if (wsConnectCurrentUser.match(action)) {
        socket = new WebSocket(action.payload); // URL
        isConnected = true;
        dispatch(wsConnecting());
      }

      if (socket) {
        socket.onopen = () => dispatch(onOpen());
        socket.onerror = (err) => {
          console.error(err);
        };
        socket.onmessage = (evt) => {
          const { data }: {data: string} = evt;
          const { success, message }: { success: boolean; message: string } =
            JSON.parse(data);
          console.log(success, message);
          dispatch(onMessage(JSON.parse(data)));
          if (message === ERROR_STATE.invalidToken) {
            console.log(success, message);
            dispatch(userChecked());
          }
        };
        socket.onclose = (evt) => {
          if (evt.code !== 1000) {
            dispatch(onError(evt.code.toString()));
          }
          dispatch(onClose());
          if (!isConnected) {
            dispatch(wsConnecting());
            reconnectInterval = window.setInterval(() => {
              dispatch(wsConnect(action.payload)); // URL
              dispatch(wsConnectCurrentUser(action.payload)); // URL
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
  }) as Middleware;
};

export { webSocketMiddleware };
