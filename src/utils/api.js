import { BASE_URL, ERROR_STATE } from './constants';

class Api {
<<<<<<< HEAD
  constructor({ baseUrl, refreshToken, accessToken }) {
    this._baseUrl = baseUrl;
    this._refreshToken = refreshToken;
    this._accessToken = accessToken;
=======
  constructor({ baseUrl, accessToken, refreshToken }) {
    this._baseUrl = baseUrl;
    this._accessToken = accessToken;
    this._refreshToken = refreshToken;
>>>>>>> 413a5be42b0dd9f3f90ec880e0da5d972925493e
  }

  _checkingResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

<<<<<<< HEAD
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

=======
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

>>>>>>> 413a5be42b0dd9f3f90ec880e0da5d972925493e
  getIngredient() {
    return fetch(`${this._baseUrl}/ingredients`, {
      method: 'GET',
    }).then(this._checkingResponse);
  }

<<<<<<< HEAD
  refreshToken() {
=======
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
>>>>>>> 413a5be42b0dd9f3f90ec880e0da5d972925493e
    return fetch(`${this._baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: this._refreshToken }),
    }).then(this._checkingResponse);
  }

<<<<<<< HEAD
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
=======
  editUser(data) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: 'PATCH',
>>>>>>> 413a5be42b0dd9f3f90ec880e0da5d972925493e
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this._accessToken,
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
<<<<<<< HEAD
  refreshToken: localStorage.getItem('refreshToken'),
  accessToken: localStorage.getItem('accessToken'),
=======
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
>>>>>>> 413a5be42b0dd9f3f90ec880e0da5d972925493e
});
