import { v4 as uuid } from 'uuid';

import {
  ADD_BURGER_BUN,
  ADD_BURGER_INGREDIENT,
  DELETE_BURGER_INGREDIENT,
} from '../../utils/constant';

export const addBurgerIngredient = (item) => ({
  type: ADD_BURGER_INGREDIENT,
  payload: { ...item, uuid: uuid() },
});

export const addBurgerBun = (item) => ({
  type: ADD_BURGER_BUN,
  payload: { ...item },
});

export const deleteBurgerIngredient = (uuid) => ({
  type: DELETE_BURGER_INGREDIENT,
  payload: uuid,
});
