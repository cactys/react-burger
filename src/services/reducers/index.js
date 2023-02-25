import { combineReducers } from 'redux';
import { constructorReducer } from './BurgerConstructor';
import { ingredientsReducer } from './BurgerIngredient';
import { ingredientDetailsReducer } from './IngredientDetails';
import { orderReducer } from './OrderDetails';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredient: constructorReducer,
  orderDerails: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
});
