import { combineReducers } from 'redux';
import { ingredientsReducer } from './BurgerIngredient';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
});
