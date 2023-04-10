import { v4 as uuid } from 'uuid';
import { AppThink, TIngredientItem } from '../types';
import { constructorAdd } from '../constants';


export const addBurgerIngredient = (item: TIngredientItem): AppThink => {
  return (dispatch) => {
    dispatch(constructorAdd({ ...item, uuid: uuid() }));
  };
};
