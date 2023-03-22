type TError = {
  status?: number;
  success?: boolean;
  message?: string;
};

type TUser = {
  user: {
    user: null | { name: string; email: string };
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
  uuid?: number;
};

type TModal = {
  isOpen?: boolean;
  title: string;
  onClose: () => void;
  children: Element;
};

type TDict<T> = {
  [name: string]: T;
};

export type {
  TError,
  TUser,
  TConstructorIngredients,
  TIngredients,
  TIngredientItem,
  TModal,
  TDict,
};
