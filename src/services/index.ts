import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { webSocketMiddleware } from '../middleware/WebSocketMiddleware';
import { wsActions } from './constants/WebSocket';

const feedWebSocketMiddleware = webSocketMiddleware(wsActions);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(feedWebSocketMiddleware);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
