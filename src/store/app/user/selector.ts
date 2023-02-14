import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './index';

const selectDomain = (state) => state?.counter || initialState;

export const selectUser = createSelector([selectDomain], counter => counter);
