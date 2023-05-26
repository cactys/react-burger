import { constructorReducer } from './BurgerConstructor';
import * as type from '../constants';
import {
  INGREDIENTS_DATA_TEST,
  INGREDIENT_DATA_TEST,
} from '../../utils/constants';

const initialState = {
  ingredients: [],
  bun: null,
};

describe('constructor reducer', () => {
  it('should add ingredient to constructor', () => {
    expect(
      constructorReducer(initialState, {
        type: type.CONSTRUCTOR_ADD,
        payload: INGREDIENT_DATA_TEST,
      })
    ).toEqual({
      ingredients: [INGREDIENT_DATA_TEST],
      bun: null,
    });
  });

  it('should delete ingredient to constructor', () => {
    expect(
      constructorReducer(initialState, {
        type: type.CONSTRUCTOR_DELETE,
        payload: INGREDIENT_DATA_TEST,
      })
    ).toEqual({
      ingredients: [],
      bun: null,
    });
  });

  it('should reorder ingredient to constructor', () => {
    expect(
      constructorReducer(
        {
          ingredients: [INGREDIENTS_DATA_TEST[1], INGREDIENTS_DATA_TEST[2]],
          bun: null,
        },
        {
          type: type.CONSTRUCTOR_REORDER,
          payload: INGREDIENT_DATA_TEST,
        }
      )
    ).toEqual({
      ingredients: [INGREDIENTS_DATA_TEST[2], INGREDIENTS_DATA_TEST[1]],
      bun: null,
    });
  });
});
