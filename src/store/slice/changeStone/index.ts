import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { ChangeStone } from '../type';

export const initialState: ChangeStone = {
  //   stone
  // snowBall properties
  snowBall: {
    timetheme: {
      Index_Ball_Id: 1,
    },
    lovetheme: {
      Index_Ball_Id: 0,
      id_Snow_Ball: 2,
    },
    z: 0,
  },

  // snowBall: {
  //   id: 1,
  //   timetheme: {
  //     Index_Ball_Id: 0,
  //     id_Snow_Ball: 1,
  //   },
  //   lovetheme: {
  //     Index_Ball_Id: 0,
  //     id_Snow_Ball: 2,
  //   },
  //   selftheme: {
  //     Index_Ball_Id: 0,
  //     id_Snow_Ball: 3,
  //   },
  //   moneytheme: {
  //     Index_Ball_Id: 0,
  //     id_Snow_Ball: 4,
  //   },
  //   familytheme: {
  //     Index_Ball_Id: 0,
  //     id_Snow_Ball: 5,
  //   },
  //   careertheme: {
  //     Index_Ball_Id: 0,
  //     id_Snow_Ball: 6,
  //   },
  //   sosietytheme: {
  //     Index_Ball_Id: 0,
  //     id_Snow_Ball: 7,
  //   },
  // },
  // // stone properties
  // stone: {
  //   id: 2,
  // },
  // // card properties
  // card: {
  //   id: 3,
  // },
};

const slice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    changeStoneValue: (state: ChangeStone, action) => {
      state.snowBall.timetheme.Index_Ball_Id = action.payload;
      console.log(state.snowBall.timetheme.Index_Ball_Id);
    },
  },
});

export const { actions: StoneActions, reducer } = slice;

export const StoneSliceReduce: any = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { StoneActions: slice.actions };
};
