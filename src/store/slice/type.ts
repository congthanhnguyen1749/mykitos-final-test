export interface ChangeStone {
  // snowBall properties
  snowBall: {
    snowBall_Index: number;
    card_Key_Of_SnowBall: number;
    card_Key_Of_Stone: number;
    get_Card_Key_Face: boolean;
    // lấy giá trị true or false để hiện nút
    card1: boolean;
    card2: boolean;
    card3: boolean;
    card4: boolean;
    // id của từng card khi lấy ra giá trị có thể thay đổi
    idcard1: number;
    idcard2: number;
    idcard3: number;
    idcard4: number;
  };

  // stone properties
  stone?: {
    id: any;
  };
  // card properties
  card?: {
    id?: any;
  };
}
