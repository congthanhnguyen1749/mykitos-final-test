import React, { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Arrowleft } from '../../../assets/images/Body/icon/arrow/arrow-narrow-left.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Text } from '@mantine/core';
import { useMediaQuery, useScrollIntoView } from '@mantine/hooks';
import { CardFlashesStoneFrom } from './CardFlashesStoneFrom';
import { ScrollChangeCard } from './ScrollChangeCard';
import { ItemsInfoCard } from './ItemsInfoCard';
import './flipCard.css';
import { InfomationsCart } from './data/data';
import { getProfileSelector } from 'store/slice/changeStone/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { StoneSliceReduce } from 'store/slice/changeStone';

export const ContentItemsflashesStone = () => {
  const { scrollIntoView, targetRef }: any = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const mobile = useMediaQuery('(max-width: 755px)');
  const loca = useLocation();
  const changeref: any = React.useRef();
  const navigate = useNavigate();
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
          <Box
            onClick={() => scrollIntoView()}
            w={'100%'}
            mb={'3vh'}
            opacity={0}
            className="chnagehidebut"
          >
            <ScrollChangeCard />
          </Box>
        ) : (
          ''
        )}
        {/* end another navbar */}
        {/* content */}
        <Flex
          w={'100%'}
          ref={targetRef}
          h={'100%'}
          justify={'center'}
          align={'center'}
        >
          <CardFlashesStoneFrom data={[InfomationsCart, callbackFunction]} />
        </Flex>
        {messageNav ? (
          <Flex justify={'center'} align={'center'} direction={'column'} mt={5}>
            {arrayCard.map((v, i) => {
              return (
                <Flex key={i} m={'10px 0 10px 0'}>
                  <ItemsInfoCard active={v} />
                </Flex>
              );
            })}
            <Flex
              sx={{
                border: '2px solid white',
                borderRadius: '18px',
                cursor: 'pointer',
                backgroundColor: 'rgba(0,0,0,.4)',
                boxShadow:
                  '0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52, 0 0 0.1rem #ff2c52, 0 0 0.4rem #ff2c52, inset 0 0 0.4rem #ff2c52',
                ':hover': {
                  backgroundColor: 'rgba(0,0,0,.3)',
                },
              }}
              w={150}
              m={'50px 20px 80px 20px'}
              h={mobile ? 51 : 58}
              justify={'center'}
              align={'center'}
            >
              <Text color={'white'} fw={500} fz={mobile ? 18 : 20}>
                Viết nhật ký
              </Text>
            </Flex>
          </Flex>
        ) : (
          ''
        )}
        {/* end content */}
      </Flex>
    </Box>
  );
};
