import { rootReducer } from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const componentEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = componentEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
