import { Component } from 'react';
import { IApiProps } from '../interfaces';
import { BASE_URL } from './constants';

class Auth extends Component<IApiProps> {
  private readonly _url: string;
  private readonly _header?: HeadersInit;

  constructor(props: IApiProps) {
    super(props);
    this._url = props.baseUrl;
    this._header = props.header;
  }

  _checkingResponse(res: Response) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  signUp(data: Response) {
    return fetch(`${this._url}/auth/login`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify(data),
    }).then(this._checkingResponse);
  }

  signIn(data: Response) {
    return fetch(`${this._url}/auth/register`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify(data),
    }).then(this._checkingResponse);
  }

  signOut(token: string) {
    return fetch(`${this._url}/auth/logout`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({ token: token }),
    }).then(this._checkingResponse);
  }

  forgotPassword(body: object) {
    return fetch(`${this._url}/password-reset`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify(body),
    }).then(this._checkingResponse);
  }

  resetPassword(body: object) {
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
