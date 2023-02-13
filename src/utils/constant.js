import PropTypes from 'prop-types';

export const BASE_URL = 'https://norma.nomoreparties.space/api';

export const dataPropTypes = PropTypes.shape({
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

export const MODAL = {
  INGREDIENT_TITLE: 'Детали ингредиента',
  INGREDIENT_DETAILS: {
    CALORIES: 'Калории,ккал',
    PROTEINS: 'Белки, г',
    FAT: 'Жиры, г',
    CARBOHYDRATES: 'Углеводы, г',
  },
  ORDER_DETAILS: {
    ORDER: {
      TITLE: 'идентификатор заказа',
      NUMBER: '034536',
    },
    SUBTITLE: 'Ваш заказ начали готовить',
    COMMENT: 'Дождитесь готовности на орбитальной станции',
  },
};
