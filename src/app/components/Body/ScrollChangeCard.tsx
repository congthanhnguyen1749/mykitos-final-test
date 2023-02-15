import { Box, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import './flipCard.css';

import backCart from '../../../assets/images/cards/card_back_0.jpg';
import stoneActive from '../../../assets/images/Body/icon/stone/WebStone/WhiteB.svg';

export const ScrollChangeCard = () => {
  const mobile = useMediaQuery('(max-width: 755px)');
  const marginBox = mobile ? '20px' : '40px';
  const [check, setCheck]: any = React.useState(true);
  const changeSizebgWidth: any = mobile ? 45 : 70;
  const flipBack: any = React.useRef();
  const changeSizebgHeight: any = mobile ? 80 : 120;
  const changeSizeActive: any = mobile ? '-30%' : '10%';
  const changeSizeActiveIcon: any = mobile ? 58 : 108;

  const changedeg: any = check ? '180deg' : '0deg';
  const flipCardBack: any = () => {
    flipBack.current.style.transform = `rotateY(${changedeg})`;
    setCheck(!check);
  };
  return (
    <Flex
      w={'100vw'}
      h={'15vh'}
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
      <Box
        bg={`url(${stoneActive})`}
        w={100}
        h={100}
        bgr={'no-repeat'}
        bgsz={'contain'}
      ></Box>

      <Box p={'0 10px'}>
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
      </Box>
      <Box p={'0 10px'}>
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
      </Box>
      <Box p={'0 10px'}>
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
      </Box>
      <Box p={'0 10px'}>
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
      </Box>
    </Flex>
  );
};
