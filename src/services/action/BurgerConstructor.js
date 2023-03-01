import { v4 as uuid } from 'uuid';

import {
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
} from '../../utils/constant';

export const addBurgerIngredient = (item) => ({
  type: CONSTRUCTOR_ADD,
  payload: { ...item, uuid: uuid() },
});

// export const addBurgerBun = (item) => ({
//   type: ADD_BURGER_BUN,
//   payload: { ...item },
// });

export const deleteBurgerIngredient = (uuid) => ({
  type: CONSTRUCTOR_DELETE,
  payload: uuid,
});
