import { combineReducers } from 'redux';
import { constructorReducer } from './BurgerConstructor';
import { ingredientsReducer } from './BurgerIngredient';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredient: constructorReducer,
});
