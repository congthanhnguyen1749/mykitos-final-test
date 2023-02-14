import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { ChangeStone } from '../type';

export const initialState: ChangeStone = {
  //   stone
  id: 1,
  active: true,
  name: 'getting',
  title: 'hello world',
  description: 'make sure',
  image: 'url',
  coin: 2,
};

const slice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    changeStoneValue: (
      state: ChangeStone,
      action: PayloadAction<ChangeStone>,
    ) => {
      state = action.payload;
    },
  },
});

export const { actions: usersActions, reducer } = slice;
export const stoneSlice = () => {
  return { usersActions: slice.actions };
};
