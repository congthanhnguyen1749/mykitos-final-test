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
import { getProfileSelector } from 'store/slice/changeStone/selectors';
import { useSelector } from 'react-redux';

export const ContentItemsflashesStone = () => {
  const mobile = useMediaQuery('(max-width: 755px)');
  const loca = useLocation();
  const changeref: any = React.useRef();
  const navigate = useNavigate();
  const [ftrue, setFtrue] = React.useState(false);
  const changeRouter: any = () => {
    setFtrue(!ftrue);
  };
  const textHeader = mobile ? '18px' : '28px';
  const backPage: any = () => {
    navigate(`/get/contentItemsChooseStone/${loca.pathname.slice(30)}`);
  };
  const [messageNav, setMessageNav]: any = React.useState(false);

  const callbackFunction = childData => {
    setMessageNav(!messageNav);
    changeref.current.style.background = 'rgba(0,0,0,.6)';
  };

  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // selector

  const selector = useSelector(getProfileSelector);
  console.log(selector.snowBall.set_index_card, 'ddd');
  const arrayCard = selector.snowBall.set_index_card;
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
            {arrayCard.map((v, i) => {
              return (
                <Flex key={i} m={'10px 0 10px 0'}>
                  <ItemsInfoCard active={v} />
                </Flex>
              );
            })}
          </Box>
        ) : (
          ''
        )}
        {/* end content */}
      </Flex>
    </Box>
  );
};
