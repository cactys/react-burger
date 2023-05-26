import { createAction } from '@reduxjs/toolkit';
import { TIngredientItem } from '../types';

export const INGREDIENTS_REQUEST: 'INGREDIENTS/REQUEST' = 'INGREDIENTS/REQUEST';
export const INGREDIENTS_SUCCESS: 'INGREDIENTS/SUCCESS' = 'INGREDIENTS/SUCCESS';
export const INGREDIENTS_FAILED: 'INGREDIENTS/FAILED' = 'INGREDIENTS/FAILED';
export const INGREDIENTS_RESET: 'INGREDIENTS/RESET' = 'INGREDIENTS/RESET';
export const INGREDIENT_ADD_INFO: 'INGREDIENT/ADD_INFO' = 'INGREDIENT/ADD_INFO';
export const INGREDIENT_DELETE_INFO: 'INGREDIENT/DELETE_INFO' =
  'INGREDIENT/DELETE_INFO';

export const ingredientsRequest = createAction(INGREDIENTS_REQUEST);
export const ingredientsSuccess = createAction<
  TIngredientItem[],
  typeof INGREDIENTS_SUCCESS
>(INGREDIENTS_SUCCESS);
export const ingredientsFailed = createAction(INGREDIENTS_FAILED);
export const ingredientsReset = createAction(INGREDIENTS_RESET);
export const ingredientAddInfo = createAction<
  TIngredientItem,
  typeof INGREDIENT_ADD_INFO
>(INGREDIENT_ADD_INFO);
export const ingredientDeleteInfo = createAction(INGREDIENT_DELETE_INFO);
