import { constructorReducer } from './BurgerConstructor';
import * as type from '../constants';
import * as dataTest from '../../utils/dataTest';

const initialState = {
  ingredients: [],
  bun: null,
};

describe('constructor reducer', () => {
  it('should add ingredient to constructor', () => {
    expect(
      constructorReducer(initialState, {
        type: type.CONSTRUCTOR_ADD,
        payload: dataTest.INGREDIENT,
      })
    ).toEqual({
      ...initialState,
      ingredients: [dataTest.INGREDIENT],
    });
  });

  it('should delete ingredient to constructor', () => {
    expect(
      constructorReducer(initialState, {
        type: type.CONSTRUCTOR_DELETE,
        payload: dataTest.INGREDIENT,
      })
    ).toEqual({
      ...initialState,
    });
  });

  it('should reorder ingredient to constructor', () => {
    expect(
      constructorReducer(
        {
          ingredients: [dataTest.INGREDIENTS[1], dataTest.INGREDIENTS[2]],
          bun: null,
        },
        {
          type: type.CONSTRUCTOR_REORDER,
          payload: dataTest.INGREDIENT,
        }
      )
    ).toEqual({
      ...initialState,
      ingredients: [dataTest.INGREDIENTS[2], dataTest.INGREDIENTS[1]],
    });
  });
});
