import { ingredientsReducer } from './BurgerIngredient';
import * as type from '../constants';
import * as dataTest from '../../utils/dataTest';

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
        payload: dataTest.INGREDIENT,
      })
    ).toEqual({
      ...initialState,
      ingredients: dataTest.INGREDIENT,
      ingredientsRequest: true,
    });
  });

  it('should ingredients request', () => {
    expect(
      ingredientsReducer(initialState, {
        type: type.INGREDIENTS_REQUEST,
        payload: dataTest.INGREDIENT,
      })
    ).toEqual({
      ...initialState,
      ingredientsRequest: true,
    });
  });

  it('should ingredients failed', () => {
    expect(
      ingredientsReducer(initialState, {
        type: type.INGREDIENTS_FAILED,
        payload: dataTest.INGREDIENT,
      })
    ).toEqual({
      ...initialState,
      ingredientsFailed: true,
    });
  });

  it('should ingredients reset', () => {
    expect(
      ingredientsReducer(initialState, {
        type: type.INGREDIENTS_RESET,
        payload: dataTest.INGREDIENT,
      })
    ).toEqual({
      ...initialState,
    });
  });
});
