import { Component } from 'react';
import { IApiProps, IFetchWithRefresh } from '../services/interfaces';
import { BASE_URL, ERROR_STATE } from './constants';
import { TOrderIngredients, TUserBody } from '../services/types';

class Api extends Component<IApiProps> {
  private readonly _baseUrl: string;

  constructor(props: IApiProps) {
    super(props);
    this._baseUrl = props.baseUrl;
  }

  private _checkingResponse(res: Response) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  private async _fetchWithRefresh(url: string, options: RequestInit) {
    try {
      const res = await fetch(url, options);
      return await this._checkingResponse(res);
    } catch (err: any) {
      switch (err.message) {
        case ERROR_STATE.jwtExpired: {
          const refreshToken = localStorage.getItem('refreshToken') || '';
          const refreshData = await this.getRefreshToken(refreshToken);
          if (!refreshData.success) {
            Promise.reject(refreshData);
          }
          localStorage.setItem('refreshToken', refreshData.refreshToken);
          localStorage.setItem(
            'accessToken',
            refreshData.accessToken.split('Bearer ')[1]
          );
          localStorage.setItem('login', JSON.stringify(true));
          (options.headers as { [key: string]: string }).Authorization =
            refreshData.accessToken;
          const res = await fetch(url, options);
          return await this._checkingResponse(res);
        }
        default: {
          return Promise.reject(err);
        }
      }
    }
  }

  public getRefreshToken(refreshToken: string): Promise<IFetchWithRefresh> {
    return fetch(`${this._baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: refreshToken }),
    }).then(this._checkingResponse);
  }

  public getIngredient() {
    return this._fetchWithRefresh(`${this._baseUrl}/ingredients`, {
      method: 'GET',
    });
  }

  public addOrder(ingredientId: TOrderIngredients, accessToken: string | null) {
    return this._fetchWithRefresh(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: JSON.stringify({ ingredients: ingredientId }),
    });
  }

  public getCurrentUser(accessToken: string) {
    return this._fetchWithRefresh(`${this._baseUrl}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    });
  }

  public editUser(data: TUserBody, accessToken: string) {
    return this._fetchWithRefresh(`${this._baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: JSON.stringify(data.user),
    });
  }
}

export const api = new Api({
  baseUrl: BASE_URL,
});
