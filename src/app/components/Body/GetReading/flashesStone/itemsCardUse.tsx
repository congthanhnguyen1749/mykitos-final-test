import React, { useRef } from 'react';
import '../../GetReading/flipCard.css';
import { Box, Flex } from '@mantine/core';
import backCard from '../../../assets/Rider-Waite-Tarot-78Card/Major/the-tower.jpg';
import CourtCup from '../../../../../assets/images/cards/card_back_0.jpg';
import { getProfileSelector } from 'store/slice/changeStone/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { StoneSliceReduce } from 'store/slice/changeStone';
import { InfomationsCart } from '../../data/data';
import { useMediaQuery } from '@mantine/hooks';
const ItemsCardUse: any = ({ data, active, index }) => {
  // response
  const mobile = useMediaQuery('(max-width: 755px)');
  const setSizeImgW: any = mobile ? '50px' : '70px';
  const setSizeImgH: any = mobile ? '90px' : '120px';

  // state
  const [changeFtontCard, setChangeFtontCard]: any = React.useState(true);
  const [RandomFtontCard, setRandomFtontCard]: any = React.useState(false);
  //   state
  // ref
  const ref: any = useRef();
  //   ref
  //   dispatch
  const dispatch = useDispatch();
  const { StoneActions } = StoneSliceReduce();
  //   selector
  const selector = useSelector(getProfileSelector);
  //   random Card
  React.useLayoutEffect(() => {
    setChangeFtontCard(!changeFtontCard);
    active
      ? (ref.current.style.transform = 'rotateY(180deg)')
      : (ref.current.style.transform = 'rotateY(0deg)');
  }, []);

  const splitCard: any = () => {
    setRandomFtontCard(!RandomFtontCard);
    ref.current.style.transform = 'rotateY(180deg)';
    ref.current.style.transition = '.8s all ease';
  };
  const imageActive = active
    ? InfomationsCart.Court[0].frontCart
    : `${data.frontCart}`;
  return (
    <Flex
      onClick={() => splitCard()}
      w={100}
      justify={'center'}
      align={'center'}
      mt={20}
    >
      <Box w={setSizeImgW} h={setSizeImgH} className="flip-card">
        <Box ref={ref} className="flip-card-inner">
          <Box
            sx={{
              border: '2px solid #f1f1f1',
            }}
            w={setSizeImgW}
            h={setSizeImgH}
            className="flip-card-front"
          >
            <img
              src={`${CourtCup}`}
              alt="Avatar"
              style={{ width: `${setSizeImgW}`, height: `${setSizeImgH}` }}
            />
          </Box>
          <Box
            sx={{
              border: '1.6px solid #f1f1f1',
            }}
            w={setSizeImgW}
            h={setSizeImgH}
            className="flip-card-back"
          >
            <img
              src={`${imageActive}`}
              alt="Avatar"
              style={{ width: `${setSizeImgW}`, height: `${setSizeImgH}` }}
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ItemsCardUse;
