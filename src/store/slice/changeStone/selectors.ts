import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '../changeStone/index';

const selectDomain = state => state?.id || initialState;

export const getProfileSelector = createSelector(
  [selectDomain],
  id => id,
);
