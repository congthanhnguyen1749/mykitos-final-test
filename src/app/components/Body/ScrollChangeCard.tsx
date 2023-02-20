import { Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useLayoutEffect, useState } from 'react';
import './flipCard.css';

import { InfomationsCart, dataStone } from './data/data';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileSelector } from 'store/slice/changeStone/selectors';
import ItemsCardUse from './itemsCardUse';
import { StoneSliceReduce } from 'store/slice/changeStone';
import { useScrollIntoView } from '@mantine/hooks';
export const ScrollChangeCard = () => {
  const [changeIndex, setChangeIndex] = React.useState(0);
  const [changeIndex1, setChangeIndex1] = React.useState(0);
  const [changeIndex2, setChangeIndex2] = React.useState(0);
  const [changeIndex3, setChangeIndex3] = React.useState(0);
  const mobile = useMediaQuery('(max-width: 755px)');
  const changeSizebgWidth: any = mobile ? 45 : 70;
  const changesizetext: any = mobile ? '12px' : '15px';
  const chanfe: any = mobile ? '-7px' : '20px';
  const changeWidthDefaule: any = mobile ? 90 : 'auto';
  const configmobile: any = mobile ? 1 : 0;

  // redux get id stoned active
  const selector = useSelector(getProfileSelector);
  // end get id stoned active
  const [butSpreadCard1, setButSpreadCard1]: any = useState(true);
  const [arryayContentCard, setarryayContentCard]: any = useState([]);
  const setHideButtonSpred1: any = (changeIndex, i) => {};
  function TaoSoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useLayoutEffect(() => {
    var numRan = TaoSoNgauNhien(0, 1);
    var numRan1 = TaoSoNgauNhien(2, 3);
    var numRan2 = TaoSoNgauNhien(4, 5);
    var numRan3 = TaoSoNgauNhien(6, 7);
    setTimeout(() => {
      setChangeIndex(numRan);
      setChangeIndex1(numRan1);
      setChangeIndex2(numRan2);
      setChangeIndex3(numRan3);
    }, 100);
    setarryayContentCard([numRan, numRan1, numRan2, numRan3]);
    // window.scrollTo(0, butSpreadCard1);
  }, []);

  // dispatchers

  // 93.8

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
          dataStone[
            selector.snowBall.card_Key_Of_Stone == 5 - configmobile
              ? 0
              : selector.snowBall.card_Key_Of_Stone - configmobile
          ].iconsActive
        })`}
        w={120}
        h={120}
        bgr={'no-repeat'}
        bgsz={'contain'}
      ></Flex>
      {/* begin */}
      <Flex sx={{}} m={chanfe} justify={'center'} align={'flex-end'}>
        {/* main card */}

        <Flex
          justify={'space-around'}
          align={'center'}
          direction={'column'}
          w={changeWidthDefaule}
        >
          <Text
            w={'100%'}
            align={'center'}
            fz={changesizetext}
            fw={500}
            color={'white'}
            mb={-12}
          >
            {InfomationsCart.Court[changeIndex].nameCard}
          </Text>
          <Flex w={changeSizebgWidth} justify={'center'}>
            {/* card1 */}
            {InfomationsCart.Court.map((v, i) => {
              return i == changeIndex ? (
                <Flex
                  key={i}
                  onClick={i => setHideButtonSpred1(changeIndex, i)}
                >
                  <ItemsCardUse
                    index={changeIndex}
                    active={true}
                    key={i}
                    data={v}
                  ></ItemsCardUse>
                </Flex>
              ) : (
                ''
              );
            })}
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
          <Text
            w={'100%'}
            align={'center'}
            fz={changesizetext}
            fw={500}
            color={'white'}
            mb={-12}
          >
            {InfomationsCart.Court[changeIndex1].nameCard}
          </Text>
          <Flex w={changeSizebgWidth} justify={'center'}>
            {/* card1 */}
            {InfomationsCart.Court.map((v, i) => {
              return i == changeIndex1 ? (
                <Flex
                  key={i}
                  onClick={() => setHideButtonSpred1(changeIndex1, i)}
                >
                  <ItemsCardUse
                    index={changeIndex1}
                    active={true}
                    key={i}
                    data={v}
                  ></ItemsCardUse>
                </Flex>
              ) : (
                ''
              );
            })}
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
          <Text
            w={'100%'}
            align={'center'}
            fz={changesizetext}
            fw={500}
            color={'white'}
            mb={-12}
            mt={5}
            sx={{ wordWrap: 'break-word' }}
          >
            {InfomationsCart.Court[changeIndex2].nameCard}
          </Text>
          <Flex w={changeSizebgWidth} justify={'center'}>
            {/* card1 */}
            {InfomationsCart.Court.map((v, i) => {
              return i == changeIndex2 ? (
                <Flex
                  key={i}
                  onClick={() => setHideButtonSpred1(changeIndex2, i)}
                >
                  <ItemsCardUse
                    index={changeIndex2}
                    active={true}
                    key={i}
                    data={v}
                  ></ItemsCardUse>
                </Flex>
              ) : (
                ''
              );
            })}
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
          <Text
            w={'100%'}
            align={'center'}
            fz={changesizetext}
            fw={500}
            color={'white'}
            mb={-12}
          >
            {InfomationsCart.Court[changeIndex3].nameCard}
          </Text>
          <Flex w={changeSizebgWidth} justify={'center'}>
            {/* card1 */}
            {InfomationsCart.Court.map((v, i) => {
              return i == changeIndex3 ? (
                <Flex
                  key={i}
                  onClick={() => setHideButtonSpred1(changeIndex3, i)}
                >
                  <ItemsCardUse
                    index={changeIndex3}
                    active={true}
                    key={i}
                    data={v}
                  ></ItemsCardUse>
                </Flex>
              ) : (
                ''
              );
            })}
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
