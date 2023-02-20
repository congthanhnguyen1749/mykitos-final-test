import { Box, Flex, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useLayoutEffect } from 'react';
// arrow
import arrowTop from '../../../assets/images/Body/icon/arrow/arrowTop.svg';
import './flipCard.css';
import arrowBottom from '../../../assets/images/Body/icon/arrow/arrowBottom.svg';
// end arrow
// cart
import cardtest from '../../../assets/images/cards/card_back_2.png';
import { useLocation } from 'react-router-dom';
import { getProfileSelector } from 'store/slice/changeStone/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { InfomationsCart } from './data/data';
import useRef from 'react';
import { StoneSliceReduce } from 'store/slice/changeStone';
// end card

export const ItemsInfoCard = ({ active }) => {
  const selector = useSelector(getProfileSelector);

  const [height, setHeight]: any = React.useState(0);
  const ref: any = React.useRef(null);
  const dispatch = useDispatch();
  const { StoneActions } = StoneSliceReduce();
  React.useEffect(() => {
    setHeight(ref.current.offsetTop);
  }, []);
  const [arrowAndShowBox, setArrowAndShowBox] = React.useState(true);
  const mobile = useMediaQuery('(max-width: 755px)');
  const widthMobileInfoItems = mobile ? '343px' : '1170px';
  const sizeTextLable = mobile ? 18 : 24;
  const changeTextSizeTop = mobile ? 'auto' : 270;
  const changeActive = () => {
    setArrowAndShowBox(!arrowAndShowBox);
  };
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useLayoutEffect(() => {
    dispatch(StoneActions.hh1(height));
  }, []);
  return (
    // main
    <Flex
      mt={5}
      opacity={0}
      ref={ref}
      className="chnagehidebut"
      justify={'center'}
      onClick={() => changeActive()}
      bg={'rgba(0, 0, 0, 0.4)'}
      sx={{
        boxShadow: '4px 4px 4px rgba(255, 255, 255, 0.25)',
        border: '1px solid #FFFFFF',
      }}
      w={widthMobileInfoItems}
    >
      {/* right */}
      <Box mih={'109px'} p={15} w={'100%'}>
        <Flex justify={'center'} align={'center'} w={'100%'} h={109}>
          <Flex
            justify={'flex-left'}
            align={'center'}
            w={'90%'}
            h={79}
            sx={{ borderBottom: '0.5px solid #FFFFFF' }}
          >
            <Image src={InfomationsCart.Court[active].frontCart} width={34} />
            <Box ml={10}>
              <Text fw={700} fz={18} lh={2} color={'rgba(255, 255, 255, 1)'}>
                {InfomationsCart.Court[active].textIntroduce}
              </Text>
              <Text fw={500} fz={13} lh={1.4} color={'rgba(159, 187, 216, 1)'}>
                {InfomationsCart.Court[active].textSubtitle}
              </Text>
            </Box>
          </Flex>
          {/* left */}
          <Flex
            justify={'center'}
            align={'center'}
            w={'10%'}
            h={79}
            sx={{ borderBottom: '0.5px solid #FFFFFF' }}
          >
            {arrowAndShowBox ? (
              <Image
                width={50}
                height={50}
                sx={{ objectFit: 'contain' }}
                src={arrowTop}
              />
            ) : (
              <Image
                width={50}
                height={50}
                sx={{ objectFit: 'contain' }}
                src={arrowBottom}
              />
            )}
          </Flex>
        </Flex>
        {/* bottom */}
        {arrowAndShowBox ? (
          <Flex direction={'column'} w={'100%'}>
            <Flex align={'flex-start'} w={'100%'} h={changeTextSizeTop}>
              
                <Image
                  sx={{marginTop:"14px"}}
                  src={InfomationsCart.Court[active].frontCart}
                  width={130}
                ></Image>
              <Box w={'100%'} h={'100%'} ml={8}>
                <Text fw={700} size={sizeTextLable} lh={2.3} color={'white'}>
                  {InfomationsCart.Court[active].nameCard}
                </Text>
                <Text fw={400} size={15} color={'rgba(159, 187, 216, 1)'}>
                  {InfomationsCart.Court[active].labelCard}
                </Text>
                <br />
                <Text fw={400} size={15} color={'rgba(159, 187, 216, 1)'}>
                  {InfomationsCart.Court[active].describeCard} 
                </Text>
              </Box>
            </Flex>
            <Flex m={'10px 0 10px 0'} w={'100%'}>
              <Text
                mt={10}
                align="left"
                fw={400}
                size={mobile ? 15 : 20}
                lh={1.5}
                color={'white'}
              >
                {InfomationsCart.Court[active].descriptionCard}
              </Text>
            </Flex>
          </Flex>
        ) : (
          ''
        )}
      </Box>
    </Flex>
  );
};
