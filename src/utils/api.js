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
      if (err.message === ERROR_STATE.jwtExpired) {
        const refreshData = await this.getRefreshToken();
        console.log(refreshData);
        console.log(refreshData.refreshToken);
        console.log(refreshData.accessToken);
        if (!refreshData.success) {
          Promise.reject(refreshData);
        }
        localStorage.setItem('refreshToken', refreshData.refreshToken);
        localStorage.setItem(
          'accessToken',
          refreshData.accessToken.split('Bearer ')[1]
        );
        localStorage.setItem('login', true);
        options.headers.authorization = refreshData.accessToken;
        const res = await fetch(url, options);
        return await this._checkingResponse(res);
      } else {
        return Promise.reject(err);
      }
    }
  }

  // _fetchWithRefresh(url, options) {
  //   return fetch(url, options)
  //     .then(this._checkingResponse)
  //     .catch((err) => {
  //       if (err.message === ERROR_STATE.jwtExpired) {
  //         const refreshData = this.getRefreshToken().then(
  //           this._checkingResponse
  //         );
  //         console.log(refreshData);
  //         if (!refreshData.success) {
  //           Promise.reject(refreshData);
  //         }
  //         localStorage.setItem('refreshToken', refreshData.refreshToken);
  //         localStorage.setItem('accessToken', refreshData.accessToken);
  //         localStorage.setItem('login', true);
  //         options.headers.authorization = refreshData.accessToken;
  //         return fetch(url, options).then(this._checkingResponse);
  //       } else {
  //         return Promise.reject(err);
  //       }
  //     });
  // }

  getIngredient() {
    return fetch(`${this._baseUrl}/ingredients`, {
      method: 'GET',
    }).then(this._checkingResponse);
  }

  addOrder(ingredientId) {
    return this._fetchWithRefresh(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this._accessToken,
      },
      body: JSON.stringify({ ingredients: ingredientId }),
    });
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this._accessToken,
      },
    }).then(this._checkingResponse);
  }

  getRefreshToken() {
    return fetch(`${this._baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: this._refreshToken }),
    }).then(this._checkingResponse);
  }

  editUser(data) {
    return this._fetchWithRefresh(`${this._baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this._accessToken,
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
