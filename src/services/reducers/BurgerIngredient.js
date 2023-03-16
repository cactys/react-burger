import {
  INGREDIENTS__FAILED,
  INGREDIENTS_REQUEST,
  INGREDIENTS_SUCCESS,
  INGREDIENTS_RESET,
} from '../action/BurgerIngredients';

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.data,
        ingredientsRequest: true,
        ingredientsFailed: true,
      };
    }
    case INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case INGREDIENTS__FAILED: {
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
