import type { PayloadAction } from '@reduxjs/toolkit';
import { TIngredientDetailsInitialState, TIngredientItem } from '../types';
import { INGREDIENT_ADD_INFO, INGREDIENT_DELETE_INFO } from '../constants';

const initialState: TIngredientDetailsInitialState = {
  info: null,
};

export const ingredientDetailsReducer = (
  state = initialState,
  action: PayloadAction<TIngredientItem>
) => {
  switch (action.type) {
    case INGREDIENT_ADD_INFO: {
      return {
        ...state,
        info: action.payload,
      };
    }

    case INGREDIENT_DELETE_INFO: {
      return {
        ...state,
        info: null,
      };
    }

    default:
      return state;
  }
};
