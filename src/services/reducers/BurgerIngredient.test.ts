import { ingredientsReducer } from './BurgerIngredient';
import * as type from '../constants';
import { INGREDIENT_DATA_TEST } from '../../utils/constants';

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

describe('ingredients reducer', () => {
  it('should ingredients success', () => {
    expect(
      ingredientsReducer(initialState, {
        type: type.INGREDIENTS_SUCCESS,
        payload: INGREDIENT_DATA_TEST,
      })
    ).toEqual({
      ingredients: INGREDIENT_DATA_TEST,
      ingredientsRequest: true,
      ingredientsFailed: false,
    });
  });

  it('should ingredients request', () => {
    expect(
      ingredientsReducer(initialState, {
        type: type.INGREDIENTS_REQUEST,
        payload: INGREDIENT_DATA_TEST,
      })
    ).toEqual({
      ingredients: [],
      ingredientsRequest: true,
      ingredientsFailed: false,
    });
  });

  it('should ingredients failed', () => {
    expect(
      ingredientsReducer(initialState, {
        type: type.INGREDIENTS_FAILED,
        payload: INGREDIENT_DATA_TEST,
      })
    ).toEqual({
      ingredients: [],
      ingredientsRequest: false,
      ingredientsFailed: true,
    });
  });

  it('should ingredients reset', () => {
    expect(
      ingredientsReducer(initialState, {
        type: type.INGREDIENTS_RESET,
        payload: INGREDIENT_DATA_TEST,
      })
    ).toEqual({
      ingredients: [],
      ingredientsRequest: false,
      ingredientsFailed: false,
    });
  });
});
