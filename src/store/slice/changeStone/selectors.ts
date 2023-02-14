import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '../changeStone/index';

const selectDomain = state => state?.counter || initialState;
export const getStoneSelector = createSelector([selectDomain], counter =>
  console.log(counter),
);
