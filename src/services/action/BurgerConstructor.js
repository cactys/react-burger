import {
  ADD_BURGER_BUN,
  ADD_BURGER_INGREDIENT,
  DELETE_BURGER_INGREDIENT,
} from '../../utils/constant';

export const addBurgerIngredient = (item, uuid) => ({
  type: ADD_BURGER_INGREDIENT,
  payload: { ...item, uuid },
});

export const addBurgerBun = (item, uuid) => ({
  type: ADD_BURGER_BUN,
  payload: { ...item, uuid },
});

export const deleteBurgerIngredient = (uuid) => ({
  type: DELETE_BURGER_INGREDIENT,
  payload: uuid,
});
