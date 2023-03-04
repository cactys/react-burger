import { BASE_URL } from './constants';

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
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
      headers: this._headers,
      body: JSON.stringify({ ingredients: ingredientId }),
    }).then(this._checkingResponse);
  }

  getUser() {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkingResponse);
  }

  editUser(data) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkingResponse);
  }
}

export const api = new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
