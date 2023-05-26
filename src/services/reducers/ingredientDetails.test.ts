import { ingredientDetailsReducer } from './IngredientDetails';
import * as type from '../constants';
import { INGREDIENT_DATA_TEST } from '../../utils/constants';

const initialState = {
  info: null,
};

describe('ingredient details reducer', () => {
  it('should add ingredient info', () => {
    expect(
      ingredientDetailsReducer(initialState, {
        type: type.INGREDIENT_ADD_INFO,
        payload: INGREDIENT_DATA_TEST,
      })
    ).toEqual({
      info: INGREDIENT_DATA_TEST,
    });
  });

  it('should delete ingredient info', () => {
    expect(
      ingredientDetailsReducer(initialState, {
        type: type.INGREDIENT_DELETE_INFO,
        payload: INGREDIENT_DATA_TEST,
      })
    ).toEqual({
      info: null,
    });
  });
});
