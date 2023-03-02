import { ADD_INGREDIENT_INFO, DELETE_INGREDIENT_INFO } from "../action/BurgerIngredients";

const initialState = {
  info: null,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_INFO: {
      return {
        ...state,
        info: action.payload,
      };
    }

    case DELETE_INGREDIENT_INFO: {
      return {
        ...state,
        info: null,
      };
    }

    default:
      return state;
  }
};
