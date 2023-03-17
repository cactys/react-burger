import { BASE_URL, ERROR_STATE } from './constants';

class Api {
  constructor({ baseUrl, accessToken, refreshToken }) {
    this._baseUrl = baseUrl;
    this._accessToken = accessToken;
    this._refreshToken = refreshToken;
  }

  _checkingResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  async _fetchWithRefresh(url, options) {
    try {
      const res = await fetch(url, options);
      return await this._checkingResponse(res);
    } catch (err) {
      switch (err.message) {
        case ERROR_STATE.jwtExpired: {
          const refreshToken = localStorage.getItem('refreshToken');
          const refreshData = await this.getRefreshToken(refreshToken);
          if (!refreshData.success) {
            Promise.reject(refreshData);
          }
          localStorage.setItem('refreshToken', refreshData.refreshToken);
          localStorage.setItem(
            'accessToken',
            refreshData.accessToken.split('Bearer ')[1]
          );
          localStorage.setItem('login', true);
          options.headers.Authorization = refreshData.accessToken;
          const res = await fetch(url, options);
          return await this._checkingResponse(res);
        }
        default: {
          return Promise.reject(err);
        }
      }
    }
  }

  getRefreshToken(refreshToken) {
    return fetch(`${this._baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: refreshToken }),
    }).then(this._checkingResponse);
  }

  getIngredient() {
    return this._fetchWithRefresh(`${this._baseUrl}/ingredients`, {
      method: 'GET',
    });
  }

  addOrder(ingredientId, accessToken) {
    return this._fetchWithRefresh(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: JSON.stringify({ ingredients: ingredientId }),
    });
  }

  getCurrentUser(accessToken) {
    return this._fetchWithRefresh(`${this._baseUrl}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    });
  }

  editUser(data, accessToken) {
    return this._fetchWithRefresh(`${this._baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: JSON.stringify(data),
    });
  }
}

export const api = new Api({
  baseUrl: BASE_URL,
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
});
