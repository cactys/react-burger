import type { TypedUseSelectorHook } from 'react-redux';
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';

import { RootState, AppDispatch } from '..';

const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
const useDispatch = () => dispatchHook<AppDispatch>();

export { useSelector, useDispatch };
