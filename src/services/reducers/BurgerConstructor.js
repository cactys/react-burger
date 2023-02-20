import {
  ADD_BURGER_BUN,
  ADD_BURGER_INGREDIENT,
  DELETE_BURGER_INGREDIENT,
  SORT_BURGER_INGREDIENT,
} from '../../utils/constant';

const initialState = {
  ingredients: [],
  bun: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BURGER_INGREDIENT: {
      return {
        ...state,
        ingredients: [action.payload, ...state.ingredients],
      };
    }
    case ADD_BURGER_BUN: {
      return {
        ...state,
        bun: [{ ...action.payload }],
      };
    }
    case DELETE_BURGER_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (item) => item._id !== action.payload
        ),
      };
    }
    case SORT_BURGER_INGREDIENT: {
      return {
        ...state,
        ingredients: [...action.payload],
      };
    }
    default:
      return state;
  }
};
