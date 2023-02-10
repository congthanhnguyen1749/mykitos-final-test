import { Box, Flex, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import stoneActive from '../../../assets/images/Body/icon/stone/WebStone/WhiteB.svg';
import backCart from '../../../assets/images/cards/card_back_0.jpg';
import { useNavigate } from 'react-router-dom';
import './flipCard.css';
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
  const changeWidthPc: any = mobile ? '70%' : '20%';
  const changeSizeActive: any = mobile ? '-30%' : '10%';
  const changeRouter: any = () => {
    setHideandunhide(!hideandunhide);
    setFtrue(!ftrue);
    props.parentCallback(ftrue);
  };
  const [check, setCheck]: any = React.useState(true);
  const [check1, setCheck1]: any = React.useState(true);
  const [check2, setCheck2]: any = React.useState(true);
  const [check3, setCheck3]: any = React.useState(true);
  const flipBack: any = React.useRef();
  const flipBack1: any = React.useRef();
  const flipBack2: any = React.useRef();
  const flipBack3: any = React.useRef();
  const changedeg: any = check ? '180deg' : '0deg';
  const changedeg1: any = check1 ? '180deg' : '0deg';
  const changedeg2: any = check2 ? '180deg' : '0deg';
  const changedeg3: any = check3 ? '180deg' : '0deg';
  const changeleftStone: any = mobile ? '3%' : '13%';
  const flipCardBack: any = props => {
    flipBack.current.style.transform = `rotateY(${changedeg})`;
    setCheck(!check);
  };
  const flipCardBack1: any = () => {
    flipBack1.current.style.transform = `rotateY(${changedeg1})`;
    setCheck1(!check1);
  };
  const flipCardBack2: any = () => {
    flipBack2.current.style.transform = `rotateY(${changedeg2})`;
    setCheck2(!check2);
  };
  const flipCardBack3: any = () => {
    flipBack3.current.style.transform = `rotateY(${changedeg3})`;
    setCheck3(!check3);
  };
  return hideandunhide ? (
    <Flex
      justify={'center'}
      align={'center'}
      direction={'column'}
      mt={changehCard}
      w={'100vw'}
      h={'100%'}
    >
      {/* top cart */}
      <Flex
        sx={{ position: 'relative' }}
        justify={'center'}
        align={'flex-end'}
        w={'80%'}
      >
        {/* cart top */}
        <Flex
          justify={'center'}
          align={'center'}
          direction={'column'}
          w={changeWidthDefaule}
        >
          <Flex
            w={changeSizebgWidth}
            h={changeSizebgHeight}
            justify={'center'}
            align={'center'}
          >
            {/* card */}
            <div
              className="flip-box"
              style={{ width: changeSizebgWidth, height: changeSizebgHeight }}
            >
              <div
                onClick={() => flipCardBack()}
                ref={flipBack}
                className="flip-box-inner"
              >
                <div className="flip-box-front">
                  <img
                    src={backCart}
                    alt="Paris"
                    style={{
                      width: changeSizebgWidth,
                      height: changeSizebgHeight,
                    }}
                  />
                </div>
                <div className="flip-box-back">
                  <img
                    src={stoneActive}
                    alt="Paris"
                    style={{
                      width: changeSizebgWidth,
                      height: changeSizebgHeight,
                    }}
                  />
                </div>
              </div>
            </div>
            {/* end card */}
          </Flex>
          <Text mt={5} fz={16} fw={500} color={'white'}>
            Tổng Quan
          </Text>
        </Flex>
        {/* stone active */}
        <Flex
          sx={{
            position: 'absolute',
            bottom: changeSizeActive,
            left: changeleftStone,
          }}
          w={changeSizeActiveIcon}
          h={150}
          bg={`url(${stoneActive})`}
          bgr={'no-repeat'}
          bgsz={'contain'}
        ></Flex>
      </Flex>
      {/* center cart */}
      <Flex
        w={changeWidthPc}
        justify={'space-around'}
        align={'center'}
        sx={{ position: 'relative' }}
      >
        {/* cart left */}
        <Flex
          justify={'center'}
          align={'center'}
          direction={'column'}
          w={changeWidthDefaule}
        >
          <Flex w={changeSizebgWidth} h={changeSizebgHeight}>
            {/* card */}
            <div
              className="flip-box"
              style={{ width: changeSizebgWidth, height: changeSizebgHeight }}
            >
              <div
                onClick={() => flipCardBack1()}
                ref={flipBack1}
                className="flip-box-inner"
              >
                <div className="flip-box-front">
                  <img
                    src={backCart}
                    alt="Paris"
                    style={{
                      width: changeSizebgWidth,
                      height: changeSizebgHeight,
                    }}
                  />
                </div>
                <div className="flip-box-back">
                  <img
                    src={stoneActive}
                    alt="Paris"
                    style={{
                      width: changeSizebgWidth,
                      height: changeSizebgHeight,
                    }}
                  />
                </div>
              </div>
            </div>
            {/* end card */}
          </Flex>
          <Text mt={5} fz={16} fw={500} color={'white'}>
            Điểm mạnh
          </Text>
        </Flex>

        {/* cart right */}
        <Flex
          justify={'center'}
          align={'center'}
          direction={'column'}
          w={changeWidthDefaule}
        >
          <Flex
            w={changeSizebgWidth}
            h={changeSizebgHeight}
            bgr={'no-repeat'}
            bgsz={'contain'}
          >
            {/* card */}
            <div
              className="flip-box"
              style={{ width: changeSizebgWidth, height: changeSizebgHeight }}
            >
              <div
                onClick={() => flipCardBack2()}
                ref={flipBack2}
                className="flip-box-inner"
              >
                <div className="flip-box-front">
                  <img
                    src={backCart}
                    alt="Paris"
                    style={{
                      width: changeSizebgWidth,
                      height: changeSizebgHeight,
                    }}
                  />
                </div>
                <div className="flip-box-back">
                  <img
                    src={stoneActive}
                    alt="Paris"
                    style={{
                      width: changeSizebgWidth,
                      height: changeSizebgHeight,
                    }}
                  />
                </div>
              </div>
            </div>
            {/* end card */}
          </Flex>
          <Text mt={5} fz={16} fw={500} color={'white'}>
            Điểm yếu
          </Text>
        </Flex>
      </Flex>
      {/* bottom cart */}
      <Flex justify={'center'} w={'80%'}>
        {/* cart bottom */}
        <Flex
          justify={'center'}
          align={'center'}
          direction={'column'}
          w={changeWidthDefaule}
        >
          <Flex w={changeSizebgWidth} h={changeSizebgHeight}>
            {' '}
            {/* card */}
            <div
              className="flip-box"
              style={{ width: changeSizebgWidth, height: changeSizebgHeight }}
            >
              <div
                onClick={() => flipCardBack3()}
                ref={flipBack3}
                className="flip-box-inner"
              >
                <div className="flip-box-front">
                  <img
                    src={backCart}
                    alt="Paris"
                    style={{
                      width: changeSizebgWidth,
                      height: changeSizebgHeight,
                    }}
                  />
                </div>
                <div className="flip-box-back">
                  <img
                    src={stoneActive}
                    alt="Paris"
                    style={{
                      width: changeSizebgWidth,
                      height: changeSizebgHeight,
                    }}
                  />
                </div>
              </div>
            </div>
            {/* end card */}
          </Flex>
          <Text mt={5} fz={16} fw={500} color={'white'}>
            Kết quả
          </Text>
        </Flex>
      </Flex>
      {/* position button spread carf */}

      {changedeg == '180deg' ||
      changedeg1 == '180deg' ||
      changedeg2 == '180deg' ||
      changedeg3 == '180deg' ? (
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
            cursor: 'pointer',
            ':hover': {
              background: 'rgba(0,0,0,0.5)',
            },
          }}
          h={changeSizeHeightButton}
          w={changeSizeWidthButton}
          bg={'rgba(0, 0, 0, 0.4)'}
          justify={'center'}
          align={'center'}
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
