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

export {
  dataPropTypes,
  BASE_URL,
  MODAL,
};
