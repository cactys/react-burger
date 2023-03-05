import { BASE_URL } from './constants';

class Auth {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _checkingResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  signUp(data) {
    console.log(data);
    return fetch(`${this._url}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._checkingResponse);
  }

  signIn(data) {
    return fetch(`${this._url}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._checkingResponse);
  }

  signOut() {
    return fetch(`${this._url}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._checkingResponse);
  }
}

export const auth = new Auth({
  baseUrl: BASE_URL,
});
