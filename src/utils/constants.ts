const BASE_URL = 'https://norma.nomoreparties.space/api';

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

export { BASE_URL, ERROR_STATE };
