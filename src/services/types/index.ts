type TError = {
  status?: number;
  success?: boolean;
  message?: string;
};

type TUser = {
  user: {
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

export type {
  TError,
  TUser,
  TConstructorIngredients,
  TIngredients,
  TIngredientItem,
  TIngredientDetailsData,
  TOwner,
  TOrder,
  TOrderDetails,
  TDict,
};
