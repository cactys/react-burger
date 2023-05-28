import { ingredientDetailsReducer } from './IngredientDetails';
import * as type from '../constants';
import * as dataTest from '../../utils/dataTest';

const initialState = {
  info: null,
};

describe('ingredient details reducer', () => {
  it('should add ingredient info', () => {
    expect(
      ingredientDetailsReducer(initialState, {
        type: type.INGREDIENT_ADD_INFO,
        payload: dataTest.INGREDIENT,
      })
    ).toEqual({
      info: dataTest.INGREDIENT,
    });
  });

  it('should delete ingredient info', () => {
    expect(
      ingredientDetailsReducer(initialState, {
        type: type.INGREDIENT_DELETE_INFO,
        payload: dataTest.INGREDIENT,
      })
    ).toEqual({
      info: null,
    });
  });
});
