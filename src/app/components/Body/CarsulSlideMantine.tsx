import { Carousel } from '@mantine/carousel';
import { Flex, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import arrowLeft from '../../../assets/images/Body/icon/arrow/leftWithCoin.svg';
import arrowRight from '../../../assets/images/Body/icon/arrow/rightWithCoin.svg';
import coin from '../../../assets/images/Body/icon/coin/Xu.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoneSliceReduce } from 'store/slice/changeStone';
import { getProfileSelector } from 'store/slice/changeStone/selectors';
export interface bodyStoneInfoProps {
  data: any;
}
export const CarsulSlideMantine: any = (props: bodyStoneInfoProps) => {
  const navigate = useNavigate();
  const mobile = useMediaQuery('(max-width: 755px)');
  const [keyChange, setKeyChange]: any = React.useState();
  const [changeLabel, setChangeLabel]: any = React.useState('');
  const changeArrow = mobile ? '265px' : '400px';
  const headerText = mobile ? '1.1rem' : '1.5rem';
  const labelcontentFront = mobile ? '.8rem' : '1.2rem';
  const changetoparrow = mobile ? '518px' : '700.5px';
  const changewidthparrow = mobile ? '380px' : '480px';
  const changeLeft = mobile ? '-15px' : '0px';
  const changeH = mobile ? '200px' : '280px';
  const setheightSlider = mobile ? '180px' : '300px';
  const magTop = mobile ? 0 : 180;
  const mtbut = mobile ? -10 : '';
  const loca = useLocation();
  // dispatch get id stoned
  const dispatch = useDispatch();
  const { StoneActions } = StoneSliceReduce();
  // end dispatch get id
  const selector: any = useSelector(getProfileSelector);
  const chnageslide: any = e => {
    setKeyChange(e);
    setChangeLabel(e);
    dispatch(StoneActions.getStoneKeyOfOldFace(e + 1));
  };

  const changerouters: any = params => {
    navigate(`/get/contentItemsflashesStone/${loca.pathname.slice(29)}`);
  };
  // fix active stone on phone
  const fixInterface = mobile ? 'iconsActive' : 'iconsUnActive';
  return (
    <Flex
      mt={magTop}
      align={'center'}
      justify={'space-between'}
      direction={'column'}
      w={'100%'}
    >
      <Carousel
        w={'80%'}
        slideSize="33.333333%"
        loop
        h={changeH}
        // speed={100}
        containScroll="trimSnaps"
        withControls={true}
        onSlideChange={e => chnageslide(e)}
        controlSize={140}
        styles={{
          controls: {
            margin: '0 auto',
            left: changeLeft,
            width: changewidthparrow,
            transition: 'width 250ms ease',
            position: 'fixed',
            top: changetoparrow,
            opacity: 0,
          },
        }}
        align="start"
      >
        {props.data.map((value, index) => {
          return (
            <Carousel.Slide key={index}>
              <Flex
                align={'center'}
                h={setheightSlider}
                justify={'center'}
                w={'300px'}
                m={2}
              >
                <img
                  style={mobile ? { width: '100px' } : { width: 'auto' }}
                  src={
                    keyChange == value.key
                      ? value.iconsActive
                      : mobile
                      ? value.iconsActive
                      : value.iconsUnActive
                  }
                  alt=""
                />
              </Flex>
            </Carousel.Slide>
          );
        })}
      </Carousel>

      <Text
        mt={20}
        fw={700}
        fz={headerText}
        lh={'32.2px'}
        align="center"
        color={'white'}
      >
        {props.data.map((value, index) => {
          return mobile
            ? changeLabel == value.activeText
              ? value.title
              : ''
            : changeLabel == value.active
            ? value.title
            : '';
        })}
      </Text>
      <Text
        mt={10}
        align="center"
        m={'0 auto'}
        color={'rgba(159, 187, 216, 1)'}
        maw={'450px'}
        h={78}
        fw={400}
        fz={labelcontentFront}
        lh={'23.4px'}
      >
        {props.data.map((value, index) => {
          return mobile
            ? changeLabel == value.activeText
              ? value.label
              : ''
            : changeLabel == value.active
            ? value.label
            : '';
        })}
      </Text>
      <Flex
        align={'center'}
        m={'0 auto'}
        justify={'space-between'}
        mt={mtbut}
        w={changeArrow}
        h={70}
        mb={50}
      >
        <Flex align={'center'} h={'100%'} justify={'center'}>
          <Image src={arrowLeft} alt="" />
        </Flex>
        <Flex
          w={98}
          h={49}
          sx={{ borderRadius: '16px' }}
          bg={'rgba(255, 44, 82, 1)'}
          justify={'center'}
          align={'center'}
          onMouseDown={() => changerouters()}
        >
          <img src={coin} alt="" />
          <Text ml={5} color={'white'}>
            {props.data.map((value, index) => {
              return mobile
                ? changeLabel == value.activeText
                  ? value.coin
                  : ''
                : changeLabel == value.active
                ? value.coin
                : '';
            })}
          </Text>
        </Flex>
        <Flex align={'center'} h={'100%'} justify={'center'}>
          <img src={arrowRight} alt="" />
        </Flex>
      </Flex>
    </Flex>
  );
};
