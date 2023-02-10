import { LoginData, User, ProfileData, RequestUpdateProfile } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ErrorResponse,
  BaseResponse,
  CheckProfileResponse,
  ProfileResponse,
  CheckUsernameResponse,
} from '../../../utils/http/response';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { userSaga } from './saga';

export const initialState: User = {
  isLogin: false,
  username: '',
  password: '',
  token: '',
  status: 0,
  role: 0,
  id: -1,
  fullName: '',
  avatar: '',
  gender: -1,
  dateOfBirth: '',
  createTime: 0,
  response: {
    loading: false,
    register: {
      error: -1,
      message: '',
    },
    login: {
      error: -1,
      message: '',
      remember_password: true,
    },
    updateProfile: {
      error: -1,
      message: '',
    },
    auth: {
      error: -1,
      message: '',
    },
  },
  language: 'en',
  hasPreferences: 0, // 0: success  1: not preferences
  preferences: [],
  thirdParty: -1,
  nameTelegram: '',
  nameMessenger: '',
  pathname: '/',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPathname(state: User, action: PayloadAction<{ pathname: string }>) {
      state.pathname = action.payload.pathname;
    },
    resetLoading(state: User) {
      state.response.loading = false;
    },
    // login register
    requestLogin(state: User, action: PayloadAction<LoginData>) {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.response.login.remember_password = action.payload.remember_password;
      state.response.loading = true;
    },
    requestRegister(state: User, action: PayloadAction<LoginData>) {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.response.loading = true;
    },
    //call before call api
    requestLogout() {},
    requestLanguage(state: User, action: PayloadAction<'vi' | 'en'>) {
      state.language = action.payload;
    },

    response(
      state: User,
      action: PayloadAction<{
        response: BaseResponse;
        type?: 'login' | 'register';
      }>,
    ) {
      // if had error
      state.response[`${action.payload.type}`].error =
        action.payload.response.error;
      state.response[`${action.payload.type}`].message =
        action.payload.response.message;
      // success
      if (action.payload.response.error === 0) {
        state.isLogin = true;
        state.id = action.payload.response.data.id;
        state.token = action.payload.response.data.token;
        state.status = action.payload.response.data.status;
        state.createTime = action.payload.response.data.createTime;
      }
      state.response.loading = false;
    },
    responseLogout(state: User, action: PayloadAction<BaseResponse>) {
      if (action.payload.error === 0) {
        state.id = -1;
        state.token = '';
        state.role = 0;
        state.status = 0;
        state.createTime = 0;
        state.isLogin = false;
        state.fullName = '';
        state.avatar = '';
        state.dateOfBirth = '';
        state.gender = -1;
        state.nameTelegram = '';
        state.nameMessenger = '';
        state.thirdParty = -1;
        state.preferences = [];
        state.pathname = '';
        state.response.login.error = -1;
        state.response.login.message = '';
      }
    },
    resetToken(
      state: User,
      action: PayloadAction<{ id: number; token: string }>,
    ) {
      state.token = action.payload.token;
      state.response.loading = false;
    },
    resetErrorResponse(
      state: User,
      action: PayloadAction<{ type?: 'login' | 'register' }>,
    ) {
      if (action.payload.type) {
        state.response[`${action.payload.type}`].error = -1;
        state.response[`${action.payload.type}`].message = '';
      } else {
        state.response.login.error = -1;
        state.response.login.message = '';
        state.response.register.error = -1;
        state.response.register.message = '';
      }
    },

    // profile
    requestCreateProfilePlayer() {},
    handleCheckProfileAxist(state: User, action: PayloadAction<number>) {
      state.hasPreferences = action.payload;
    },
    resetProfile(state: User) {
      state.hasPreferences = -1;
      state.id = -1;
      state.token = '';
      state.role = 0;
      state.status = 0;
      state.createTime = 0;
      state.isLogin = false;
    },
    responseOfGetProfile(
      state: User,
      action: PayloadAction<CheckProfileResponse>,
    ) {
      if (action.payload.error === 0) {
        state.id = action.payload.data.userId;
        state.role = action.payload.data.role;
        state.fullName = action.payload.data.fullname;
        state.avatar = action.payload.data.avatar;
        state.gender = action.payload.data.gender;
        state.dateOfBirth = action.payload.data.date_of_birth;
        state.preferences = action.payload.data.shopping_preferences;
      }
    },
    setAvatar(state: User, action: PayloadAction<string>) {
      state.avatar = action.payload;
    },
    setResponseUpdateProfile(
      state: User,
      action: PayloadAction<ErrorResponse>,
    ) {
      state.response.updateProfile.error = action.payload.error;
      state.response.updateProfile.message = action.payload.message;
    },
    resetResponseUpdateProfile(state: User) {
      state.response.updateProfile.error = -1;
      state.response.updateProfile.message = '';
    },
    // update preferences
    requestUpdatePreferences() {},
    requestSkipPreferences() {},
    requestUpdateProfile(
      state: User,
      action: PayloadAction<RequestUpdateProfile>,
    ) {},
    setPreferences(
      state: User,
      action: PayloadAction<{ isChoose: boolean; value: number }>,
    ) {
      if (!action.payload.isChoose) {
        state.preferences.push(action.payload.value);
      } else {
        state.preferences = state.preferences.filter(ele => {
          if (ele !== action.payload.value) return ele;
        });
      }
    },

    // change password
    requestChangePassword(
      state: User,
      action: PayloadAction<{ password: string; new_password: string }>,
    ) {},

    // auth
    setAuthResponse(state: User, action: PayloadAction<ErrorResponse>) {
      state.response.auth.error = action.payload.error;
      state.response.auth.message = action.payload.message;
      state.response.loading = false;
    },
    resetAuthResponse(state: User) {
      state.response.auth.error = -1;
      state.response.auth.message = '';
    },
    responseAuthUsername(
      state: User,
      action: PayloadAction<CheckUsernameResponse>,
    ) {
      const THIRD_PARTY_MESSENGER = 1;
      const THIRD_PARTY_TELEGRAM = 2;
      const NOT_THIRD_PARTY = 3;
      const BOT_MESSENGER_AND_TELEGRAM = 0;

      state.response.auth.error = action.payload.error;
      state.response.auth.message = action.payload.message;
      if (action.payload.data) state.id = action.payload.data.id;
      if (action.payload.error === 10 && action.payload.data) {
        state.nameTelegram = action.payload.data.telegram_fullname;
        state.thirdParty = THIRD_PARTY_TELEGRAM;
      } else if (action.payload.error === 11 && action.payload.data) {
        state.nameMessenger = action.payload.data.messenger_fullname;
        state.thirdParty = THIRD_PARTY_MESSENGER;
      } else if (action.payload.error === 0 && action.payload.data) {
        state.nameTelegram = action.payload.data.telegram_fullname;
        state.nameMessenger = action.payload.data.messenger_fullname;
        state.thirdParty = BOT_MESSENGER_AND_TELEGRAM;
      } else if (action.payload.error === 12 && action.payload.data) {
        state.thirdParty = NOT_THIRD_PARTY;
      }
      state.response.loading = false;
    },
    requestCheckUsername(
      state: User,
      action: PayloadAction<{ username: string }>,
    ) {
      state.response.loading = true;
    },
    requestConfirmOTP(state: User, action: PayloadAction<{ otp: number }>) {
      state.response.loading = true;
    },
    requestCreatePassword(
      state: User,
      action: PayloadAction<{ new_password: string }>,
    ) {
      state.response.loading = true;
    },
    setUsername(state: User, action: PayloadAction<{ username: string }>) {
      state.username = action.payload.username;
    },
    resetThirdParty(state: User, action: PayloadAction<undefined>) {
      state.thirdParty = -1;
      state.nameMessenger = '';
      state.nameTelegram = '';
    },
  },
});

export const { actions: userActions, reducer } = slice;

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userSaga });
  return { actions: slice.actions };
};
