import { BASE_URL } from './constants';

class Auth {
  constructor({ baseUrl, header }) {
    this._url = baseUrl;
    this._header = header;
  }

  _checkingResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  signUp(data) {
    return fetch(`${this._url}/auth/login`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify(data),
    }).then(this._checkingResponse);
  }

  signIn(data) {
    return fetch(`${this._url}/auth/register`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify(data),
    }).then(this._checkingResponse);
  }

  signOut(token) {
    return fetch(`${this._url}/auth/logout`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({ token: token }),
    }).then(this._checkingResponse);
  }

  forgotPassword(body) {
    return fetch(`${this._url}/password-reset`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify(body),
    }).then(this._checkingResponse);
  }

  resetPassword(body) {
    return fetch(`${this._url}/password-reset/reset`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify(body),
    }).then(this._checkingResponse);
  }
}

export const auth = new Auth({
  baseUrl: BASE_URL,
  header: {
    'Content-Type': 'application/json',
  },
});
