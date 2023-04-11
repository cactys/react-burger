import { combineReducers } from 'redux';
import { constructorReducer } from './BurgerConstructor';
import { ingredientsReducer } from './BurgerIngredient';
import { ingredientDetailsReducer } from './IngredientDetails';
import { orderReducer } from './OrderDetails';
import { userReducer } from './User';
import { webSocketReducer } from './WebSocket';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredient: constructorReducer,
  orderDetails: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  user: userReducer,
  webSocket: webSocketReducer,
});
