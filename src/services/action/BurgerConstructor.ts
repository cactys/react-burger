import { v4 as uuid } from 'uuid';
import { AppThink, TIngredientItem } from '../types';
import { constructorAdd, constructorDelete } from '../constants';


export const addBurgerIngredient = (item: TIngredientItem): AppThink => {
  return (dispatch) => {
    dispatch(constructorAdd({ ...item, uuid: uuid() }));
  };
};

export const deleteBurgerIngredient = (index: number) =>
  constructorDelete(index);
