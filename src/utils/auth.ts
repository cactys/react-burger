import { Component } from 'react';
import { IApiProps } from '../services/interfaces';
import { BASE_URL } from './constants';
import { TUserBody } from '../services/types';

class Auth extends Component<IApiProps> {
  private readonly _url: string;
  private readonly _header?: HeadersInit;

  constructor(props: IApiProps) {
    super(props);
    this._url = props.baseUrl;
    this._header = props.header;
  }

  private _checkingResponse(res: Response) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  public signUp(data: TUserBody) {
    return fetch(`${this._url}/auth/login`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify(data),
    }).then(this._checkingResponse);
  }

  public signIn(data: TUserBody) {
    return fetch(`${this._url}/auth/register`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify(data),
    }).then(this._checkingResponse);
  }

  public signOut(token: string) {
    return fetch(`${this._url}/auth/logout`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({ token: token }),
    }).then(this._checkingResponse);
  }

  public forgotPassword(body: TUserBody) {
    return fetch(`${this._url}/password-reset`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify(body),
    }).then(this._checkingResponse);
  }

  public resetPassword(body: TUserBody) {
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
