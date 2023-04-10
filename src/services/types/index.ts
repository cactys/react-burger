import type { ThunkAction } from 'redux-thunk';
import type {} from 'redux-thunk/extend-redux';
import { store } from '..';
import {
  loginFailed,
  loginRequest,
  loginSuccess,
  logoutFailed,
  logoutRequest,
  logoutSuccess,
  recoveryChangeStatus,
  recoveryFailed,
  recoveryRequest,
  recoverySendEmailSuccess,
  recoverySendPasswordSuccess,
  recoverySetErrorMessage,
  registerFailed,
  registerRequest,
  registerSuccess,
  userChecked,
  userFailed,
  userRequest,
  userSuccess,
  userUpdateInfoFailed,
  userUpdateInfoRequest,
  userUpdateInfoSuccess,
  ingredientsRequest,
  ingredientsSuccess,
  ingredientsFailed,
  ingredientsReset,
  ingredientAddInfo,
  ingredientDeleteInfo,
} from '../constants';

type TError = {
  status?: number;
  success?: boolean;
  message?: string;
};

type TUserState = {
  user: null | { name: string; email: string; password?: string };
  isLogin: boolean;
  emailSended: boolean;
  isLogout: boolean;
  loginFailed: boolean;
  loginMessage: string | null;
  loginRequest: boolean;
  logoutRailed: boolean;
  logoutRequest: boolean;
  passwordRecovered: boolean;
  recoveryFailed: boolean;
  recoveryMessage: string | null;
  recoveryRequest: boolean;
  registerFailed: boolean;
  registerMessage: string | null;
  registerRequest: boolean;
  updateFailed: boolean;
  updateMessage: string | null;
  updateRequest: boolean;
  updateSuccess: boolean;
  userChecked: boolean;
};

type TUser = {
  user: TUserState;
};

type TUserBody = {
  email?: string;
  password?: string;
  name?: string;
  token?: string;
};

type TConstructorIngredients = {
  constructorIngredient: {
    ingredients: TIngredientItem[];
    bun: TIngredientItem | null;
  };
};

type TIngredients = {
  ingredients: {
    ingredients: TIngredientItem[];
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
  };
};

type TIngredientItem = {
  _id: string;
  calories: number;
  fat: number;
  carbohydrates: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  uuid: number;
};

type TIngredientDetailsData = {
  background?: boolean;
};

type TOwner = {
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
};

type TOrder = {
  currentOrder: {
    createdAt: string;
    ingredients: TIngredientItem;
    name: string;
    number: number;
    owner: TOwner;
    price: number;
    status: string;
    updateAt: string;
    _id: string;
  };
  message: string;
  orderRequest: boolean;
  orderFailed: boolean;
};

type TOrderDetails = {
  orderDetails: TOrder;
};

type TDict = {
  [key in string]: number;
};

type TUserActions =
  | ReturnType<typeof userChecked>
  | ReturnType<typeof userRequest>
  | ReturnType<typeof userSuccess>
  | ReturnType<typeof userFailed>
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailed>
  | ReturnType<typeof registerRequest>
  | ReturnType<typeof registerSuccess>
  | ReturnType<typeof registerFailed>
  | ReturnType<typeof logoutRequest>
  | ReturnType<typeof logoutSuccess>
  | ReturnType<typeof logoutFailed>
  | ReturnType<typeof userUpdateInfoRequest>
  | ReturnType<typeof userUpdateInfoSuccess>
  | ReturnType<typeof userUpdateInfoFailed>
  | ReturnType<typeof recoveryRequest>
  | ReturnType<typeof recoveryFailed>
  | ReturnType<typeof recoverySendEmailSuccess>
  | ReturnType<typeof recoverySendPasswordSuccess>
  | ReturnType<typeof recoveryChangeStatus>
  | ReturnType<typeof recoverySetErrorMessage>;

type TBurgerIngredientAction =
  | ReturnType<typeof ingredientsRequest>
  | ReturnType<typeof ingredientsSuccess>
  | ReturnType<typeof ingredientsFailed>
  | ReturnType<typeof ingredientsReset>
  | ReturnType<typeof ingredientAddInfo>
  | ReturnType<typeof ingredientDeleteInfo>;

type RootState = ReturnType<typeof store.getState>;

type TAppActions = TUserActions | TBurgerIngredientAction;

type AppThink<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TAppActions
>;

type AppDispatch<TReturnType = void> = (
  action: TAppActions | AppThink
) => TReturnType;

export type {
  TError,
  TUserState,
  TUser,
  TUserBody,
  TConstructorIngredients,
  TIngredients,
  TIngredientItem,
  TIngredientDetailsData,
  TOwner,
  TOrder,
  TOrderDetails,
  TDict,
  RootState,
  TUserActions,
  AppThink,
  AppDispatch,
};
