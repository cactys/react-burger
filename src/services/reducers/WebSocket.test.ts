import { webSocketReducer } from './WebSocket';
import * as type from '../constants';
import { TWSState } from '../types';

const initialState: TWSState = {
  status: 'offline',
  connectionError: '',
  orders: [],
  total: 0,
  totalToday: 0,
};

describe('web socket reducer', () => {
  it('should connecting web socket', () => {
    expect(
      webSocketReducer(initialState, {
        type: type.WS_CONNECTING,
        payload: initialState,
      })
    ).toEqual({
      ...initialState,
      status: 'connecting',
    });
  });

  it('should open web socket', () => {
    expect(
      webSocketReducer(initialState, {
        type: type.WS_OPEN,
        payload: initialState,
      })
    ).toEqual({
      ...initialState,
      status: 'online',
    });
  });

  it('should close web socket', () => {
    expect(
      webSocketReducer(initialState, {
        type: type.WS_CLOSE,
        payload: initialState,
      })
    ).toEqual({
      ...initialState,
    });
  });

  it('should error web socket', () => {
    expect(
      webSocketReducer(initialState, {
        type: type.WS_ERROR,
        payload: initialState,
      })
    ).toEqual({
      ...initialState,
    });
  });

  it('should message web socket', () => {
    expect(
      webSocketReducer(initialState, {
        type: type.WS_MESSAGE,
        payload: initialState,
      })
    ).toEqual({
      ...initialState,
    });
  });
});
