import PropTypes from 'prop-types';

const BASE_URL = 'https://norma.nomoreparties.space/api';

const dataPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});

const MODAL = {
  INGREDIENT_TITLE: 'Детали ингредиента',
  INGREDIENT_DETAILS: {
    CALORIES: 'Калории,ккал',
    PROTEINS: 'Белки, г',
    FAT: 'Жиры, г',
    CARBOHYDRATES: 'Углеводы, г',
  },
};

const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

const RESET_INGREDIENTS = 'RESET_INGREDIENTS';

const CONSTRUCTOR_ADD = 'CONSTRUCTOR_ADD';
const CONSTRUCTOR_DELETE = 'CONSTRUCTOR_DELETE';
const SORT_BURGER_INGREDIENT = 'SORT_BURGER_INGREDIENT';

const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
const POST_ORDER_FAILED = 'POST_ORDER_FAILED';
const RESET_ORDER_INFO = 'DELETE_ORDER_INFO';

const ADD_INGREDIENT_INFO = 'ADD_INGREDIENT_INFO';
const DELETE_INGREDIENT_INFO = 'DELETE_INGREDIENT_INFO';

const CONSTRUCTOR_REORDER = 'CONSTRUCTOR_REORDER';

export {
  dataPropTypes,
  BASE_URL,
  MODAL,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  RESET_INGREDIENTS,
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
  SORT_BURGER_INGREDIENT,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  RESET_ORDER_INFO,
  ADD_INGREDIENT_INFO,
  DELETE_INGREDIENT_INFO,
  CONSTRUCTOR_REORDER,
};
