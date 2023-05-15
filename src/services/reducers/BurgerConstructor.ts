import type { PayloadAction } from '@reduxjs/toolkit';
import {
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
  CONSTRUCTOR_REORDER,
} from '../constants';
import { TIngredientItem } from '../types';

const initialState = {
  ingredients: [],
  bun: null,
};

export const constructorReducer = (
  state = initialState,
  action: PayloadAction<TIngredientItem>
) => {
  switch (action.type) {
    case CONSTRUCTOR_ADD: {
      if (action.payload.type === 'bun') {
        return { ...state, bun: action.payload };
      }
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    }
    case CONSTRUCTOR_DELETE: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients.slice(0, Number(action.payload)),
          ...state.ingredients.slice(Number(action.payload) + 1),
        ],
      };
    }
    case CONSTRUCTOR_REORDER: {
      const ingredients = [...state.ingredients];
      ingredients.splice(
        action.payload.to,
        0,
        ingredients.splice(action.payload.from, 1)[0]
      );
      return {
        ...state,
        ingredients,
      };
    }
    default:
      return state;
  }
};
