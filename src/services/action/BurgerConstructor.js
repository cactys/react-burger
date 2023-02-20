import {
  ADD_BURGER_BUN,
  ADD_BURGER_INGREDIENT,
  DELETE_BURGER_INGREDIENT,
} from '../../utils/constant';

export const addBurgerIngredient = (item, id) => ({
  type: ADD_BURGER_INGREDIENT,
  payload: { ...item, id },
});

export const addBurgerBun = (item, id) => ({
  type: ADD_BURGER_BUN,
  payload: { ...item, id },
});

export const deleteBurgerIngredient = (id) => ({
  type: DELETE_BURGER_INGREDIENT,
  payload: id,
});
