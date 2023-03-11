import { v4 as uuid } from 'uuid';

export const CONSTRUCTOR_ADD = 'CONSTRUCTOR/ADD';
export const CONSTRUCTOR_DELETE = 'CONSTRUCTOR/DELETE';
export const CONSTRUCTOR_REORDER = 'CONSTRUCTOR/REORDER';

export const addBurgerIngredient = (item) => {
  return {
    type: CONSTRUCTOR_ADD,
    payload: { ...item, uuid: uuid() },
  };
};

export const deleteBurgerIngredient = (uuid) => ({
  type: CONSTRUCTOR_DELETE,
  payload: uuid,
});
