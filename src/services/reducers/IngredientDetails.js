import {
  INGREDIENT_ADD_INFO,
  INGREDIENT_DELETE_INFO,
} from '../action/BurgerIngredients';

const initialState = {
  info: null,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
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
