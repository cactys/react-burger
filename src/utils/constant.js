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

const ADD_BURGER_INGREDIENT = 'ADD_BURGER_INGREDIENT';
const ADD_BURGER_BUN = 'ADD_BURGER_BUN';
const DELETE_BURGER_INGREDIENT = 'DELETE_BURGER_INGREDIENT';
const SORT_BURGER_INGREDIENT = 'SORT_BURGER_INGREDIENT';

const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
const POST_ORDER_FAILED = 'POST_ORDER_FAILED';
const RESET_ORDER_INFO = 'DELETE_ORDER_INFO';

export {
  dataPropTypes,
  BASE_URL,
  MODAL,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  RESET_INGREDIENTS,
  ADD_BURGER_INGREDIENT,
  ADD_BURGER_BUN,
  DELETE_BURGER_INGREDIENT,
  SORT_BURGER_INGREDIENT,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  RESET_ORDER_INFO,
};
