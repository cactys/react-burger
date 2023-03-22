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

enum ERROR_STATE {
  jwtExpired = 'jwt expired',
  jwtMalformed = 'jwt malformed',
  invalidToken = 'invalid token',
  tokenIsInvalid = 'Token is invalid',
  incorrectData = 'email or password are incorrect',
  userExists = 'User already exists',
  requiredFields = 'Email, password and name are required fields',
  invalidCredentials = 'Invalid credentials provided',
  incorrectToken = 'Incorrect reset token',
  emptyOrder = 'One or more ids provided are incorrect',
}

export { dataPropTypes, BASE_URL, ERROR_STATE };
