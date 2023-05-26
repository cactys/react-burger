const BASE_URL = 'https://norma.nomoreparties.space/api';

const WSS_URL = 'wss://norma.nomoreparties.space/orders';

const INGREDIENT_DATA_TEST = {
  calories: 30,
  carbohydrates: 40,
  fat: 20,
  image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
  image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
  name: 'Соус Spicy-X',
  price: 90,
  proteins: 30,
  type: 'sauce',
  uuid: '15d2b4a0-eeef-43cc-9631-a67e951c0a6d',
  to: 0,
  from: 1,
  __v: 0,
  _id: '643d69a5c3f7b9001cfa0942',
};

const INGREDIENTS_DATA_TEST = [
  {
    calories: 420,
    carbohydrates: 53,
    fat: 24,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    name: 'Краторная булка N-200i',
    price: 1255,
    proteins: 80,
    type: 'bun',
    uuid: 'cd24cf56-a01c-4158-a807-88de3401e3b9',
    to: 0,
    from: 0,
    __v: 0,
    _id: '643d69a5c3f7b9001cfa093c',
  },
  {
    calories: 30,
    carbohydrates: 40,
    fat: 20,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    name: 'Соус Spicy-X',
    price: 90,
    proteins: 30,
    type: 'sauce',
    uuid: '15d2b4a0-eeef-43cc-9631-a67e951c0a6d',
    to: 1,
    from: 2,
    __v: 0,
    _id: '643d69a5c3f7b9001cfa0942',
  },
  {
    calories: 420,
    carbohydrates: 33,
    fat: 244,
    image: 'https://code.s3.yandex.net/react/code/meat-02.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png',
    name: 'Мясо бессмертных моллюсков Protostomia',
    price: 1337,
    proteins: 433,
    type: 'main',
    uuid: 'b3b74de6-1d8a-472f-a241-7584bfe4694b',
    to: 2,
    from: 1,
    __v: 0,
    _id: '643d69a5c3f7b9001cfa093f',
  },
  {
    calories: 420,
    carbohydrates: 53,
    fat: 24,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    name: 'Краторная булка N-200i',
    price: 1255,
    proteins: 80,
    type: 'bun',
    uuid: 'cd24cf56-a01c-4158-a807-88de3401e3b9',
    to: 0,
    from: 0,
    __v: 0,
    _id: '643d69a5c3f7b9001cfa093c',
  },
];

const OWNER_ORDER_DATA_TEST = {
  name: 'Vovka',
  email: 'cyp@ress.net',
  createdAt: '2023-04-18T14:11:00.423Z',
  updatedAt: '2023-05-24T14:54:18.873Z',
};

const ORDER_DETAILS_DATA_TEST = {
  createdAt: '2023-05-26T06:42:31.876Z',
  ingredients: INGREDIENTS_DATA_TEST,
  name: 'Space флюоресцентный бургер',
  number: 5419,
  owner: OWNER_ORDER_DATA_TEST,
  price: 2056,
  status: 'done',
  updateAt: '2023-05-26T06:42:31.962Z',
  _id: '647054d78a4b62001c83f236',
};

const CURRENT_ORDER_DATA_TEST = {
  currentOrder: ORDER_DETAILS_DATA_TEST,
  message: '',
  orderRequest: false,
  orderFailed: false,
};

const EMPTY_ORDER_DATA_TEST = {
  currentOrder: null,
  message: 'Добавь булку',
  orderRequest: false,
  orderFailed: false,
};

const USER_DATA_TEST = {
  email: 'cyp@ress.net',
  name: 'Vovka',
  password: 'QAZwsx',
};

enum ERROR_STATE {
  jwtExpired = 'jwt expired',
  jwtMalformed = 'jwt malformed',
  invalidToken = 'Invalid or missing token',
  tokenIsInvalid = 'Token is invalid',
  incorrectData = 'email or password are incorrect',
  userExists = 'User already exists',
  requiredFields = 'Email, password and name are required fields',
  invalidCredentials = 'Invalid credentials provided',
  incorrectToken = 'Incorrect reset token',
  emptyOrder = 'One or more ids provided are incorrect',
}

export {
  BASE_URL,
  WSS_URL,
  INGREDIENT_DATA_TEST,
  INGREDIENTS_DATA_TEST,
  OWNER_ORDER_DATA_TEST,
  ORDER_DETAILS_DATA_TEST,
  CURRENT_ORDER_DATA_TEST,
  EMPTY_ORDER_DATA_TEST,
  USER_DATA_TEST,
  ERROR_STATE,
};
