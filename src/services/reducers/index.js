import { combineReducers } from 'redux';
import { constructorReducer } from './BurgerConstructor';
import { ingredientsReducer } from './BurgerIngredient';
import { orderReducer } from './OrderDetails';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredient: constructorReducer,
  orderDerails: orderReducer,
});
