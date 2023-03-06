import { BASE_URL } from './constants';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkingResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  getIngredient() {
    return fetch(`${this._baseUrl}/ingredients`, {
      method: 'GET',
    }).then(this._checkingResponse);
  }

  addOrder(ingredientId) {
    return fetch(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients: ingredientId }),
    }).then(this._checkingResponse);
  }

  getUser(accessToken) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    }).then(this._checkingResponse);
  }

  getRefreshToken(refreshToken) {
    console.log(refreshToken);
    return fetch(`${this._baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: refreshToken }),
    }).then(this._checkingResponse);
  }

  editUser(data) {
    console.log(data)
    return fetch(`${this._baseUrl}/auth/user`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data,
      },
      body: JSON.stringify(data),
    }).then(this._checkingResponse);
  }
}

export const api = new Api({
  baseUrl: BASE_URL,
});
