import { userReducer } from './User';
import * as type from '../constants';
import { USER_DATA_TEST } from '../../utils/constants';

const initialState = {
  user: null,
  userChecked: false,
  loginRequest: false,
  loginFailed: false,
  registerRequest: false,
  registerFailed: false,
  logoutRequest: false,
  logoutRailed: false,
  updateSuccess: false,
  updateRequest: false,
  updateFailed: false,
  recoveryRequest: false,
  recoveryFailed: false,
  emailSended: false,
  passwordRecovered: false,
  loginMessage: '',
  registerMessage: '',
  updateMessage: '',
  recoveryMessage: '',
  isLogout: false,
  isLogin: false,
};

describe('', () => {
  it('', () => {
    expect(
      userReducer(initialState, {
        type: type.USER_SUCCESS,
        payload: USER_DATA_TEST,
      })
    )
  })
})
