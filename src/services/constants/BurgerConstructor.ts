import { createAction } from '@reduxjs/toolkit';
import { TConstructorIndex, TIngredientItem } from '../types';

export const CONSTRUCTOR_ADD: 'CONSTRUCTOR/ADD' = 'CONSTRUCTOR/ADD';
export const CONSTRUCTOR_DELETE: 'CONSTRUCTOR/DELETE' = 'CONSTRUCTOR/DELETE';
export const CONSTRUCTOR_REORDER: 'CONSTRUCTOR/REORDER' = 'CONSTRUCTOR/REORDER';

export const constructorAdd = createAction<
  TIngredientItem,
  typeof CONSTRUCTOR_ADD
>(CONSTRUCTOR_ADD);
export const constructorDelete = createAction<
  number,
  typeof CONSTRUCTOR_DELETE
>(CONSTRUCTOR_DELETE);
export const constructorReorder = createAction<
  TConstructorIndex,
  typeof CONSTRUCTOR_REORDER
>(CONSTRUCTOR_REORDER);
