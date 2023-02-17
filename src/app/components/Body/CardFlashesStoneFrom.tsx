import { Box, Flex, Image, Text, keyframes } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useLayoutEffect, useState } from 'react';
import stoneActive from '../../../assets/images/Body/icon/stone/WebStone/WhiteB.svg';
import backCart from '../../../assets/images/cards/card_back_0.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import './flipCard.css';
import { InfomationsCart, LabelTextcrystal, dataStone } from './data/data';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileSelector } from 'store/slice/changeStone/selectors';
import ItemsCardUse from './itemsCardUse';
import { StoneSliceReduce } from 'store/slice/changeStone';

export interface ChangeCard {
  data: any;
}

export const CardFlashesStoneFrom: any = props => {
  const [ftrue, setFtrue] = React.useState(true);
  const [hideandunhide, setHideandunhide] = React.useState(true);
  const navigate = useNavigate();
  const mobile = useMediaQuery('(max-width: 755px)');
  const changeSizeHeightButton: any = mobile ? 38 : 58;
  const changeSizeWidthButton: any = mobile ? 150 : 150;
  const changeSizeText: any = mobile ? 20 : 20;
  const changeSizebgWidth: any = mobile ? 45 : 70;
  const changeSizebgHeight: any = mobile ? 80 : 120;
  const changeWidthDefaule: any = mobile ? 90 : 'auto';
  const changeSizeActiveIcon: any = mobile ? 58 : 108;
  const changehCard: any = mobile ? '5vh' : '10vh';
  const changemobilemargin: any = mobile ? 10 : 40;
  const indexBug: any = mobile ? 0 : 1;
  const changeWidthPc: any = mobile ? '70%' : '20%';

  // change index to random card index
  const changeleftStone: any = mobile ? '3%' : '13%';
  const [changeIndex, setChangeIndex] = React.useState(0);
  const [changeIndex1, setChangeIndex1] = React.useState(0);
  const [changeIndex2, setChangeIndex2] = React.useState(0);
  const [changeIndex3, setChangeIndex3] = React.useState(0);
  const changeRouter: any = () => {
    setHideandunhide(!hideandunhide);
    setFtrue(!ftrue);
    props.data[1](!ftrue);
  };
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  function TaoSoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useLayoutEffect(() => {
    setTimeout(() => {
      var numRan = TaoSoNgauNhien(0, 1); //Trả về một số ngẫu nhiên từ 1 đến 10
      var numRan1 = TaoSoNgauNhien(2, 3); //Trả về một số ngẫu nhiên từ 3 đến 8
      var numRan2 = TaoSoNgauNhien(4, 5); //Trả về một số ngẫu nhiên từ 2 đến 5
      var numRan3 = TaoSoNgauNhien(6, 7); //Trả về một số ngẫu nhiên từ 2 đến 5
      setChangeIndex(numRan);
      setChangeIndex1(numRan1);
      setChangeIndex2(numRan2);
      setChangeIndex3(numRan3);
    }, 100);
  }, []);

  // dispatchers

  const dispatch = useDispatch();
  const { StoneActions } = StoneSliceReduce();

  // end dispatch

  const [butSpreadCard1, setButSpreadCard1] = useState(true);
  const [butSpreadCard2, setButSpreadCard2] = useState(true);
  const [butSpreadCard3, setButSpreadCard3] = useState(true);
  const [butSpreadCard4, setButSpreadCard4] = useState(true);

  // selector

  const selector = useSelector(getProfileSelector);

  // end selector

  // options spread card
  const setHideButtonSpred1: any = first => {
    setButSpreadCard1(false);
    dispatch(StoneActions.getidCardRandom1(changeIndex));
  };
  const setHideButtonSpred2: any = first => {
    setButSpreadCard2(false);
    dispatch(StoneActions.getidCardRandom2(changeIndex1));
  };
  const setHideButtonSpred3: any = first => {
    setButSpreadCard3(false);
    dispatch(StoneActions.getidCardRandom3(changeIndex2));
  };
  const setHideButtonSpred4: any = first => {
    setButSpreadCard4(false);
    dispatch(StoneActions.getidCardRandom4(changeIndex3));
  };
  return hideandunhide ? (
    <Flex
      justify={'center'}
      align={'center'}
      direction={'column'}
      mt={changehCard}
      w={'100%'}
      h={'100%'}
      sx={{
        transform: 'translateY(-50px)',
      }}
    >
      {/* top cart */}
      <Flex
        sx={{ position: 'relative' }}
        justify={'center'}
        align={'center'}
        direction={'column'}
        w={'80vw'}
      >
        {/* cart top */}
        <Flex justify={'center'} align={'flex-end'} w={'100%'}>
          {/* main card */}
          <Flex
            justify={'space-around'}
            align={'center'}
            direction={'column'}
            w={changeWidthDefaule}
          >
            <Flex w={changeSizebgWidth} justify={'center'}>
              {/* card1 */}
              <Flex onClick={() => setHideButtonSpred1()}>
                {InfomationsCart.Court.map((v, i) => {
                  return i == changeIndex ? (
                    <ItemsCardUse  key={i} data={v}></ItemsCardUse>
                  ) : (
                    ''
                  );
                })}
              </Flex>
              {/* end card */}
            </Flex>
            <Text
              w={'100%'}
              align={'center'}
              mt={10}
              fz={16}
              fw={500}
              color={'white'}
            >
              Tổng Quan
            </Text>
          </Flex>
          {/* end main card */}
        </Flex>
        {/* end cart top */}

        {/* cart center */}
        <Flex w={'100%'}>
          {/* cart left */}
          <Flex
            justify={'flex-end'}
            align={'center'}
            sx={{
              transform: 'translateX(-40px)',
            }}
            w={'100%'}
            h={'100%'}
          >
            {' '}
            {/* main card2 */}
            <Flex
              justify={'center'}
              align={'center'}
              direction={'column'}
              w={changeWidthDefaule}
            >
              <Flex w={changeSizebgWidth} justify={'center'} align={'center'}>
                {/* card1 */}
                <Flex onClick={() => setHideButtonSpred2()}>
                  {InfomationsCart.Court.map((v, i) => {
                    return i == changeIndex1 ? (
                      <ItemsCardUse  key={i} data={v}></ItemsCardUse>
                    ) : (
                      ''
                    );
                  })}
                </Flex>
                {/* end card */}
              </Flex>
              <Text
                w={'100%'}
                align={'center'}
                mt={10}
                fz={16}
                fw={500}
                color={'white'}
              >
                Điểm Mạnh
              </Text>
            </Flex>
            {/* end main card2 */}
          </Flex>
          {/* end cart left */}
          {/* cart right */}
          <Flex
            w={'100%'}
            h={'100%'}
            justify={'flex-start'}
            align={'center'}
            sx={{
              transform: 'translateX(40px)',
            }}
          >
            {/* main card3 */}
            <Flex
              justify={'center'}
              align={'center'}
              direction={'column'}
              w={changeWidthDefaule}
            >
              <Flex w={changeSizebgWidth} justify={'center'} align={'center'}>
                {/* card1 */}
                <Flex onClick={() => setHideButtonSpred3()}>
                  {InfomationsCart.Court.map((v, i) => {
                    return i == changeIndex2 ? (
                      <ItemsCardUse  key={i} data={v}></ItemsCardUse>
                    ) : (
                      ''
                    );
                  })}
                </Flex>
                {/* end card */}
              </Flex>
              <Text
                w={'100%'}
                align={'center'}
                mt={10}
                fz={16}
                fw={500}
                color={'white'}
              >
                Điểm Yếu
              </Text>
            </Flex>
            {/* end main card3 */}
          </Flex>
          {/* end cart right */}
        </Flex>
        {/* end cart center */}

        {/* cart bottom */}
        <Flex justify={'center'} align={'flex-start'} w={'100%'}>
          {/* main card4 */}
          <Flex
            justify={'center'}
            align={'center'}
            direction={'column'}
            w={changeWidthDefaule}
          >
            <Flex justify={'center'} align={'center'}>
              {/* card1 */}
              <Flex onClick={() => setHideButtonSpred4()}>
                {InfomationsCart.Court.map((v, i) => {
                  return i == changeIndex3 ? (
                    <ItemsCardUse  key={i} data={v}></ItemsCardUse>
                  ) : (
                    ''
                  );
                })}
              </Flex>
              {/* end card */}
            </Flex>
            <Text
              w={'100%'}
              align={'center'}
              mt={10}
              fz={16}
              fw={500}
              color={'white'}
            >
              Kết Quả
            </Text>
          </Flex>
          {/* end main card4 */}
        </Flex>
        {/* end cart bottom */}
        <Flex
          sx={{
            position: 'absolute',
            top: '5px',
            left: changeleftStone,
          }}
          w={changeSizeActiveIcon}
          h={150}
          bg={`url(${
            dataStone[selector.snowBall.card_Key_Of_Stone + indexBug]
              .iconsActive
          })`}
          bgr={'no-repeat'}
          bgsz={'contain'}
        ></Flex>
      </Flex>
      {butSpreadCard1 || butSpreadCard2 || butSpreadCard3 || butSpreadCard4 ? (
        ''
      ) : (
        <Flex
          top={0}
          mt={changemobilemargin}
          left={'1px'}
          onClick={() => changeRouter()}
          sx={{
            left: '50%',
            top: '90%',
            borderRadius: '18px',
            border: '1px solid white',
            boxShadow:
              '0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52, 0 0 0.1rem #ff2c52, 0 0 0.4rem #ff2c52, inset 0 0 0.4rem #ff2c52',
            transition: 'all 5s linear',
            cursor: 'pointer',
            ':hover': {
              background: 'rgba(0,0,0,0.5)',
            },
          }}
          className="chnagehidebut"
          h={changeSizeHeightButton}
          w={changeSizeWidthButton}
          bg={'rgba(0, 0, 0, 0.4)'}
          justify={'center'}
          align={'center'}
          opacity={0}
        >
          <Text fz={changeSizeText} fw={600} size={10} color={'white'}>
            Giải bài
          </Text>
        </Flex>
      )}
    </Flex>
  ) : (
    ''
  );
};
