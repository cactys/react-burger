import { BASE_URL, ERROR_STATE } from './constants';

class Api {
  constructor({ baseUrl, refreshToken, accessToken }) {
    this._baseUrl = baseUrl;
    this._refreshToken = refreshToken;
    this._accessToken = accessToken;
  }

  _checkingResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  _fetchWithRefresh(url, options) {
    return fetch(url, options)
      .then(this._checkingResponse)
      .catch((err) => {
        switch (err.message) {
          case ERROR_STATE.jwtExpired: {
            api
              .refreshToken()
              .then((res) => {
                console.log(res);
                console.log('мф попали в ', ERROR_STATE.jwtExpired);
                if (res.success) {
                  localStorage.setItem('refreshToken', res.refreshToken);
                  localStorage.setItem('accessToken', res.accessToken);
                  localStorage.setItem('login', true);
                }
              })
              .catch((err) => console.error(err.message));
            // const refreshData = this.refreshToken();
            // console.log(this.refreshToken());
            // console.log(refreshData);
            // console.log(refreshData.refreshToken);
            // console.log(refreshData.accessToken);
            // console.log(options);
            // if (!refreshData.success) {
            //   Promise.reject(refreshData);
            // }
            // localStorage.setItem('refreshToken', refreshData.refreshToken);
            // localStorage.setItem('accessToken', refreshData.accessToken);
            // options.headers.authorization = refreshData.accessToken;
            // console.log(options.headers);
            return fetch(url, options).then(this._checkingResponse);
          }
          default: {
            return Promise.reject(err);
          }
        }
      });
  }

  getIngredient() {
    return fetch(`${this._baseUrl}/ingredients`, {
      method: 'GET',
    }).then(this._checkingResponse);
  }

  refreshToken() {
    return fetch(`${this._baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: this._refreshToken }),
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

  getCurrentUser(token) {
    return this._fetchWithRefresh(`${this._baseUrl}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
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
  refreshToken: localStorage.getItem('refreshToken'),
  accessToken: localStorage.getItem('accessToken'),
});
