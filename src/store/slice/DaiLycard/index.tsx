import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { DailyCardState } from '../type';

export const initialState: DailyCardState = {
  isFreeCard: true,
};

const slice = createSlice({
  name: 'stateCard',
  initialState,
  reducers: {
    SetNumberWhenUseCardFree: (state: DailyCardState, action) => {
      state.isFreeCard = action.payload;
    },
  },
});

export const { actions: DailyCardRDucer, reducer } = slice;
// cần được gọi lại
export const DailyCardReducer: any = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { DailyCardRDucer: slice.actions };
};
