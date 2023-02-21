import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './index';

const selectRegisterAndLogin = state => state?.login || initialState;

export const RegisterAndLoginSelector = createSelector(
  [selectRegisterAndLogin],
  login => login,
);
