import type { PayloadAction } from '@reduxjs/toolkit';
import { TWSState } from '../types';
import {
  WS_CLOSE,
  WS_CONNECTING,
  WS_ERROR,
  WS_MESSAGE,
  WS_OPEN,
} from '../constants';

const initialState: TWSState = {
  status: 'offline',
  connectionError: '',
  orders: [],
  total: 0,
  totalToday: 0,
};

export const webSocketReducer = (
  state = initialState,
  action: PayloadAction<TWSState>
) => {
  switch (action.type) {
    case WS_CONNECTING: {
      return {
        ...state,
        status: 'connecting',
      };
    }
    case WS_OPEN: {
      return {
        ...state,
        status: 'online',
        connectionError: '',
      };
    }
    case WS_CLOSE: {
      return {
        ...state,
        status: 'offline',
        orders: [],
      };
    }
    case WS_ERROR: {
      return {
        ...state,
        connectionError: action.payload.connectionError,
      };
    }
    case WS_MESSAGE: {
      return {
        ...state,
        orders: [...action.payload.orders],
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    }

    default:
      return state;
  }
};
