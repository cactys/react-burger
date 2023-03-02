import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, RESET_INGREDIENTS } from "../action/BurgerIngredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.data,
        ingredientsRequest: true,
        ingredientsFailed: true,
      };
    }
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      };
    }
    case RESET_INGREDIENTS: {
      return {
        ...state,
        ingredients: [],
      };
    }
    default:
      return state;
  }
};
