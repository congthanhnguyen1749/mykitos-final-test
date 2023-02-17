import React, { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Arrowleft } from '../../../assets/images/Body/icon/arrow/arrow-narrow-left.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CardFlashesStoneFrom } from './CardFlashesStoneFrom';
import { ScrollChangeCard } from './ScrollChangeCard';
import { ItemsInfoCard } from './ItemsInfoCard';
import './flipCard.css';
import { InfomationsCart } from './data/data';

export const ContentItemsflashesStone = () => {
  const mobile = useMediaQuery('(max-width: 755px)');
  const loca = useLocation();
  const changeref: any = React.useRef();
  const changeSizeHeightButton: any = mobile ? 38 : 58;
  const navigate = useNavigate();
  const [ftrue, setFtrue] = React.useState(false);
  const changeRouter: any = () => {
    setFtrue(!ftrue);
  };
  const textHeader = mobile ? '18px' : '28px';
  const backPage: any = () => {
    navigate(`/get/contentItemsChooseStone/${loca.pathname.slice(30)}`);
  };
  const [message, setMessage]: any = React.useState(false);
  const [messageNav, setMessageNav]: any = React.useState(false);

  const callbackFunction = childData => {
    setMessage(childData);
    setMessageNav(!messageNav);
    changeref.current.style.background = 'rgba(0,0,0,.6)';
  };
  const [navSize, setnavSize]: any = React.useState('');
  const [navColor, setnavColor]: any = React.useState(0);
  const listenScrollEvent: any = () => {
    window.scrollY > 320 ? setnavColor(1) : setnavColor(0);
    window.scrollY > 320 ? setnavSize('fixed') : setnavSize('relative');
  };
  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Box opacity={0} className="chnagehidebut">
      <Flex
        justify={'flex-start'}
        align={'center'}
        direction={'column'}
        w={'100%'}
        sx={{ position: 'relative', top: '0', left: '0', right: '0' }}
        mih={'90vh'}
      >
        {/* header */}

        <Flex
          ref={changeref}
          w={'100%'}
          justify={'space-around'}
          align={'center'}
          pt={20}
        >
          <Box mb={25} ml={10}>
            <Arrowleft onClick={backPage} />
          </Box>
          <Text
            sx={{ transform: 'translateX(10px)' }}
            fw={600}
            fz={textHeader}
            color={'white'}
            mb={20}
          >
            Trải bài xu hướng{' '}
            {loca.pathname.slice(30) == 'timetheme'
              ? 'thời gian'
              : loca.pathname.slice(30) == 'lovetheme'
              ? 'tình yêu'
              : loca.pathname.slice(30) == 'selftheme'
              ? 'bản thân'
              : loca.pathname.slice(30) == 'moneytheme'
              ? 'tiền bạc'
              : loca.pathname.slice(30) == 'familytheme'
              ? 'gia đình'
              : loca.pathname.slice(30) == 'careertheme'
              ? 'sự nghiệp'
              : loca.pathname.slice(30) == 'sosietytheme'
              ? 'xã hội'
              : ''}{' '}
            sắp tới
          </Text>
          <Box opacity={0}>
            <Arrowleft />
          </Box>
        </Flex>
        {/* end header */}
        {/* another navbar */}
        {messageNav ? (
          <Box w={'100%'} mb={'3vh'} opacity={0} className="chnagehidebut">
            <ScrollChangeCard />
          </Box>
        ) : (
          ''
        )}
        {/* end another navbar */}
        {/* content */}
        <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'}>
          <CardFlashesStoneFrom data={[InfomationsCart, callbackFunction]} />
        </Flex>
        {messageNav ? (
          <Box mt={5}>
            <ItemsInfoCard />
          </Box>
        ) : (
          ''
        )}
        {/* end content */}
      </Flex>
    </Box>
  );
};
