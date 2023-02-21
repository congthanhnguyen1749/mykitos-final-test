import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { Login } from '../type';

export const initialState: Login = {
  //   stone
  // snowBall properties
  id: 0,
  isLogined: false,
  register: {
    error: 0,
    message: 'hi',
  },
  login: {
    error: 0,
    message: 'hi',
    savePassword: true,
  },
  profile: {
    nickname: 'hi',
    picture: 'hi',
    date_of_birth: 'hi',
    zodiac: 'hi',
    gender: 'hi',
  },
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
});

export const { actions: RegAndLog, reducer } = slice;
// cần được gọi lại
export const RegAndLogSliceReduce: any = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { RegAndLog: slice.actions };
};
