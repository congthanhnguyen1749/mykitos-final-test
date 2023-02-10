import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { selectUser } from './selector';
import { User } from './types';
import { userActions as actions } from '.';
import {
  BaseResponse,
  CheckProfileResponse,
  ProfileResponse,
  CheckUsernameResponse,
} from '../../../utils/http/response';
import { apiPost, apiGet } from '../../../utils/http/request';

export function* checkProfile(loginResponse) {
  try {
    const RESPONSE_ERROR_SUCCESS = 0;
    const ERROR_NOT_PREFERENCES_AXIST = 1;

    if (loginResponse.error === RESPONSE_ERROR_SUCCESS) {
      const data: CheckProfileResponse = yield apiGet(
        '/v1/gc/auth/getprofile',
        {
          userId: loginResponse.data.id,
          token: loginResponse.data.token,
        },
      );
      if (
        data.error === RESPONSE_ERROR_SUCCESS &&
        data.data.shopping_preferences === null
      ) {
        yield put(actions.handleCheckProfileAxist(ERROR_NOT_PREFERENCES_AXIST));
      } else if (
        data.error === RESPONSE_ERROR_SUCCESS &&
        data.data.shopping_preferences !== null
      ) {
        yield put(actions.handleCheckProfileAxist(RESPONSE_ERROR_SUCCESS));
        yield put(actions.responseOfGetProfile(data));
      }
    }
  } catch (error) {
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: '',
    };

    yield put(actions.response({ response, type: 'login' }));
  }
}

export function* login() {
  try {
    // Select username from store
    const user: User = yield select(selectUser);
    const data: any = {
      username: user.username,
      password: user.password,
    };
    // call api check login
    const loginResponse: BaseResponse = yield apiPost('/v1/login', data, {
      'content-type': 'appication/json',
    });

    // check profile axist ?
    yield checkProfile(loginResponse);

    yield put(actions.response({ response: loginResponse, type: 'login' }));
  } catch (err: any) {
    console.log('Error: ', err);
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: '',
    };
    yield put(actions.response({ response, type: 'login' }));
  }
}

export function* register() {
  try {
    // Select username from store
    const user: User = yield select(selectUser);
    const data: any = {
      username: user.username,
      password: user.password,
    };
    const response: BaseResponse = yield apiPost('/v1/register', data, {
      'content-type': 'appication/json',
    });
    // check profile axist ?
    yield checkProfile(response);

    yield put(actions.response({ response, type: 'register' }));
  } catch (err: any) {
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: undefined,
    };
    yield put(actions.response({ response, type: 'register' }));
  }
}

export function* Logout() {
  try {
    // Select id and token from store
    const user: User = yield select(selectUser);
    const dataHeader: any = {
      userid: user.id,
      token: user.token,
    };
    const response: BaseResponse = yield apiPost(
      '/v1/logout',
      null,
      dataHeader,
    );
    yield put(actions.responseLogout(response));
  } catch (err: any) {
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: undefined,
    };
    // random choise type
    yield put(actions.response({ response, type: 'login' }));
  }
}

export function* createProfile() {
  try {
    const user: User = yield select(selectUser);

    const response = yield apiPost('/v1/gc/auth/createprofile', null, {
      userId: user.id,
      token: user.token,
      'content-type': 'appication/json',
    });
    console.log(response);
    if (response.error === 0) yield put(actions.handleCheckProfileAxist(3));
  } catch (err: any) {
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: undefined,
    };
    yield put(actions.response({ response, type: 'login' }));
  }
}

export function* updatePreferences(isSkip) {
  try {
    const user: User = yield select(selectUser);
    let body;

    if (isSkip) body = { shopping_preferences: [] };
    else
      body = {
        shopping_preferences: user.preferences,
      };

    const response = yield apiPost(
      '/v1/gc/profile/updateshoppingpreferences',
      body,
      {
        userId: user.id,
        token: user.token,
      },
    );
    console.log(response);
    if (response.error === 0) yield put(actions.handleCheckProfileAxist(0));
  } catch (err: any) {
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: undefined,
    };
    yield put(actions.response({ response, type: 'login' }));
  }
}

// update profile
export function* updateProfileInformation(action) {
  try {
    const user: User = yield select(selectUser);
    const body = action.payload;
    console.log(body);
    const response = yield apiPost('/v1/gc/profile/updatepersonalinfo', body, {
      userId: user.id,
      token: user.token,
      'content-type': 'appication/json',
    });
    console.log(response);
    if (response.error === 0) {
      const data: CheckProfileResponse = {
        data: { ...action.payload },
        error: response.error,
        message: response.message,
      };
      yield put(actions.responseOfGetProfile(data));
      yield put(
        actions.setResponseUpdateProfile({
          error: response.error,
          message: response.message,
        }),
      );
    }
  } catch (err: any) {
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: undefined,
    };
    yield put(actions.response({ response, type: 'login' }));
  }
}

// update profile
export function* handleChangePassword(action) {
  try {
    const WRONG_PASSWORD = 2;
    const SUCCESS = 0;
    const user: User = yield select(selectUser);
    const body = action.payload;

    const response = yield apiPost('/v1/changepassword', body, {
      userId: user.id,
      token: user.token,
      'content-type': 'appication/json',
    });

    console.log(response);
    if (response.error === SUCCESS || response.error === WRONG_PASSWORD) {
      yield put(
        actions.setResponseUpdateProfile({
          error: response.error,
          message: response.message,
        }),
      );
    }
  } catch (err: any) {
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: undefined,
    };
    yield put(actions.response({ response, type: 'login' }));
  }
}

// Auth
export function* handleCheckUsername(action) {
  try {
    const USERNAME_NOT_FOUND = 2;
    const body = action.payload;

    const response: CheckUsernameResponse = yield apiPost(
      '/v1/forgetpasswordsendusername',
      body,
      {},
    );

    console.log(response);
    if (response.error !== 2 && response.error !== 1) {
      yield put(actions.responseAuthUsername(response));
      yield put(actions.setUsername(body));
    } else if (response.error === USERNAME_NOT_FOUND) {
      yield put(
        actions.setAuthResponse({
          error: response.error,
          message: response.message,
        }),
      );
    }
  } catch (err: any) {
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: undefined,
    };
    yield put(actions.response({ response, type: 'login' }));
  }
}
export function* handleConfirmOTP(action) {
  try {
    const user: User = yield select(selectUser);
    const body = action.payload;

    const response = yield apiPost('/v1/otp/verifyotp', body, {
      userid: user.id,
    });

    console.log(response);
    if (response.error === 0) {
      yield put(
        actions.setAuthResponse({
          error: response.error,
          message: response.message,
        }),
      );
      yield put(actions.resetToken(response.data));
    } else if (response.error !== 0) {
      yield put(
        actions.setAuthResponse({
          error: response.error,
          message: response.message,
        }),
      );
    }
  } catch (err: any) {
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: undefined,
    };
    yield put(actions.response({ response, type: 'login' }));
  }
}

export function* handleCreatePassword(action) {
  try {
    const user: User = yield select(selectUser);
    const body = action.payload;

    const response = yield apiPost('/v1/createnewpassword', body, {
      userid: user.id,
      token: user.token,
    });

    console.log(response);
    if (response.error === 0) {
      yield put(
        actions.setResponseUpdateProfile({
          error: response.error,
          message: response.message,
        }),
      );
    }
  } catch (err: any) {
    const response: BaseResponse = {
      error: 1,
      message: 'system_error',
      data: undefined,
    };
    yield put(actions.response({ response, type: 'login' }));
  }
}

export function* userSaga() {
  // register
  yield takeLatest(actions.requestLogin.type, login);
  yield takeLatest(actions.requestRegister.type, register);
  yield takeLatest(actions.requestLogout.type, Logout);
  yield takeLatest(actions.requestCreateProfilePlayer, createProfile);
  // profile
  yield takeLatest(actions.requestUpdatePreferences, updatePreferences, false);
  yield takeLatest(actions.requestSkipPreferences, updatePreferences, true);
  yield takeLatest(actions.requestUpdateProfile.type, updateProfileInformation);
  yield takeLatest(actions.requestChangePassword.type, handleChangePassword);
  // Auth
  yield takeLatest(actions.requestCheckUsername.type, handleCheckUsername);
  yield takeLatest(actions.requestConfirmOTP.type, handleConfirmOTP);
  yield takeLatest(actions.requestCreatePassword.type, handleCreatePassword);
}
