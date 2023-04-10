import type { PayloadAction } from '@reduxjs/toolkit';
import {
  INGREDIENTS_FAILED,
  INGREDIENTS_REQUEST,
  INGREDIENTS_SUCCESS,
  INGREDIENTS_RESET,
} from '../constants';
import { TIngredientItem } from '../types';

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (
  state = initialState,
  action: PayloadAction<TIngredientItem>
) => {
  switch (action.type) {
    case INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.payload,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    }
    case INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    }
    case INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      };
    }
    case INGREDIENTS_RESET: {
      return {
        ...state,
        ingredients: [],
      };
    }
    default:
      return state;
  }
};
