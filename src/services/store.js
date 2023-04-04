import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const componentEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = componentEnhancers(applyMiddleware(thunk));

export const store = configureStore({ reducer: rootReducer }, enhancer);
