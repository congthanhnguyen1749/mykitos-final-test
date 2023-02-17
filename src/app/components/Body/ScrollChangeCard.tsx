import { Box, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useLayoutEffect, useState } from 'react';
import './flipCard.css';

import backCart from '../../../assets/images/cards/card_back_0.jpg';
import stoneActive from '../../../assets/images/Body/icon/stone/WebStone/WhiteB.svg';
import { InfomationsCart, LabelTextcrystal, dataStone } from './data/data';
import { useSelector } from 'react-redux';
import { getProfileSelector } from 'store/slice/changeStone/selectors';
import ItemsCardUse from './itemsCardUse';

export const ScrollChangeCard = () => {
  const [changeIndex, setChangeIndex] = React.useState(0);
  const [changeIndex1, setChangeIndex1] = React.useState(0);
  const [changeIndex2, setChangeIndex2] = React.useState(0);
  const [changeIndex3, setChangeIndex3] = React.useState(0);
  const mobile = useMediaQuery('(max-width: 755px)');
  const [check, setCheck]: any = React.useState(true);
  const changeSizebgWidth: any = mobile ? 45 : 70;
  const changesizetext: any = mobile ? '12px' : '15px';
  const chanfe: any = mobile ? '-7px' : '20px';
  const changeWidthDefaule: any = mobile ? 90 : 'auto';
  const flipBack: any = React.useRef();
  const changeSizebgHeight: any = mobile ? 80 : 120;
  const changedeg: any = check ? '180deg' : '0deg';
  const flipCardBack: any = () => {
    flipBack.current.style.transform = `rotateY(${changedeg})`;
    setCheck(!check);
  };
  // redux get id stoned active
  const selector = useSelector(getProfileSelector);
  // end get id stoned active
  const [butSpreadCard1, setButSpreadCard1] = useState(true);
  const setHideButtonSpred1: any = first => {
    setButSpreadCard1(false);
  };
  function TaoSoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useLayoutEffect(() => {
    setTimeout(() => {
      var numRan = TaoSoNgauNhien(0, 1);
      var numRan1 = TaoSoNgauNhien(2, 3);
      var numRan2 = TaoSoNgauNhien(4, 5);
      var numRan3 = TaoSoNgauNhien(6, 7);
      setChangeIndex(numRan);
      setChangeIndex1(numRan1);
      setChangeIndex2(numRan2);
      setChangeIndex3(numRan3);
    }, 100);
  }, []);
  return (
    <Flex
      w={'100vw'}
      bg={'rgba(0, 0, 0, 0.6)'}
      justify={'center'}
      pb={15}
      align={'center'}
      sx={{
        position: 'relative',
        top: '0',
        left: '0',
        overflowY: 'auto',
      }}
    >
      <Flex
        bg={`url(${
          dataStone[selector.snowBall.card_Key_Of_Stone + 1].iconsActive
        })`}
        w={120}
        h={120}
        bgr={'no-repeat'}
        bgsz={'contain'}
      ></Flex>
      {/* begin */}
      <Flex m={chanfe} justify={'center'} align={'flex-end'}>
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
                  <ItemsCardUse
                    index={changeIndex}
                    active={true}
                    key={i}
                    data={v}
                  ></ItemsCardUse>
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
            
            fz={changesizetext}
            fw={500}
            color={'white'}
          >
            Tổng Quan
          </Text>
        </Flex>
        {/* end main card */}
      </Flex>
      {/* end */}
      <Flex m={chanfe} justify={'center'} align={'flex-end'}>
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
                return i == changeIndex1 ? (
                  <ItemsCardUse
                    index={changeIndex1}
                    active={true}
                    key={i}
                    data={v}
                  ></ItemsCardUse>
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
            
            fz={changesizetext}
            fw={500}
            color={'white'}
          >
            Điểm mạnh
          </Text>
        </Flex>
        {/* end main card */}
      </Flex>
      {/* end */}
      <Flex m={chanfe} justify={'center'} align={'flex-end'}>
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
                return i == changeIndex2 ? (
                  <ItemsCardUse
                    index={changeIndex2}
                    active={true}
                    key={i}
                    data={v}
                  ></ItemsCardUse>
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
            
            fz={changesizetext}
            fw={500}
            color={'white'}
          >
            Điểm Yếu
          </Text>
        </Flex>
        {/* end main card */}
      </Flex>
      {/* end */}
      <Flex m={chanfe} justify={'center'} align={'flex-end'}>
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
                return i == changeIndex3 ? (
                  <ItemsCardUse
                    index={changeIndex3}
                    active={true}
                    key={i}
                    data={v}
                  ></ItemsCardUse>
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
            
            fz={changesizetext}
            fw={500}
            color={'white'}
          >
            Kết Quả
          </Text>
        </Flex>
        {/* end main card */}
      </Flex>
      {/* end */}
    </Flex>
  );
};
