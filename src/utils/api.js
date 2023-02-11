import { BASE_URL } from './constant';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getIngredient() {
    return fetch(`${this._baseUrl}/ingredients`, {
      method: 'GET',
    }).then(this._checkingResponse);
  }

  getAllPromise() {
    return Promise.all([this.getIngredient()]);
  }
}

export const api = new Api({
  baseUrl: BASE_URL,
});
