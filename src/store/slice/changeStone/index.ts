import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { ChangeStone } from '../type';

export const initialState: ChangeStone = {
  //   stone
  // snowBall properties
  snowBall: {
    snowBall_Index: 0,
    card_Key_Of_SnowBall: 0,
    card_Key_Of_Stone: 1,
    get_Card_Key_Face: true,
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    idcard1:0,
    idcard2:0,
    idcard3:0,
    idcard4:0,
  },

  // // stone properties
  stone: {
    id: 2,
  },
  // // card properties
  card: {
    id: 3,
  },
};

const slice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    // Lấy ra id của từng snowBall để hiển thị, tại get/getreading
    ChangeSmowballValue: (state: ChangeStone, action) => {
      state.snowBall.snowBall_Index = action.payload;
    },
    // Lấy ra từng key của từng card trong snowBall
    ChangeStoneKey: (state: ChangeStone, action) => {
      state.snowBall.card_Key_Of_SnowBall = action.payload;
    },
    // Lấy ra từng key của từng stone trong contentItemsChooseStone
    getStoneKeyOfOldFace: (state: ChangeStone, action) => {
      state.snowBall.card_Key_Of_Stone = action.payload;
    },
    getCardKeyOfOldFace: (state: ChangeStone, action) => {
      state.snowBall.get_Card_Key_Face = action.payload;
    },

    // lấy giá trị true false từ card khi nhấn vào
    getCardRandom1: (state: ChangeStone, action) => {
      state.snowBall.card1 = action.payload;
    },

    // lấy giá trị true false từ card khi nhấn vào
    getCardRandom2: (state: ChangeStone, action) => {
      state.snowBall.card2 = action.payload;
    },

    // lấy giá trị true false từ card khi nhấn vào
    getCardRandom3: (state: ChangeStone, action) => {
      state.snowBall.card3 = action.payload;
    },

    // lấy giá trị true false từ card khi nhấn vào
    getCardRandom4: (state: ChangeStone, action) => {
      state.snowBall.card4 = action.payload;
    },

    getidCardRandom1: (state: ChangeStone, action) =>{},
    getidCardRandom2: (state: ChangeStone, action) =>{},
    getidCardRandom3: (state: ChangeStone, action) =>{},
    getidCardRandom4: (state: ChangeStone, action) =>{},
  },
});

export const { actions: StoneActions, reducer } = slice;
// cần được gọi lại
export const StoneSliceReduce: any = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { StoneActions: slice.actions };
};

{
  /* stone active */
}

{
  /* <Flex
          sx={{
            position: 'absolute',
            bottom: changeSizeActive,
            left: changeleftStone,
          }}
          w={changeSizeActiveIcon}
          h={150}
          bg={`url(${
            dataStone[selector.snowBall.card_Key_Of_Stone + 1].iconsActive
          })`}
          bgr={'no-repeat'}
          bgsz={'contain'}
        ></Flex> */
}
