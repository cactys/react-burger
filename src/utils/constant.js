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

const DROP_INGREDIENT = 'DROP_INGREDIENT';
const DEL_INGREDIENT = 'DEL_INGREDIENT';
const DROP_BUN = 'DROP_BUN';

const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

const GET_OPEN_MODAL = 'GET_OPEN_MODAL';
const GET_CLOSE_MODAL = 'GET_CLOSE_MODAL';

export {
  dataPropTypes,
  BASE_URL,
  MODAL,
  DROP_INGREDIENT,
  DEL_INGREDIENT,
  DROP_BUN,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_OPEN_MODAL,
  GET_CLOSE_MODAL,
};
