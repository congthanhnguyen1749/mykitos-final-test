import React, { useLayoutEffect, useRef } from 'react';
import { ReactComponent as Arrowleft } from '../../../assets/images/Body/icon/arrow/arrow-narrow-left.svg';
import Violetcrystal from '../../../assets/images/Body/Crystalball/whitecrystal.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { LabelTextcrystal } from './data/data';
import { Transform } from 'stream';
import { useUserSlice } from 'store/app/user';
import './flipCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileSelector } from 'store/slice/changeStone/selectors';
import { StoneSliceReduce } from 'store/slice/changeStone';
export const BodyContentItemsChild: any = () => {
  const mobile: any = useMediaQuery('(max-width: 755px)');
  const loca: any = useLocation();
  const changemobile: any = mobile ? '100%' : '90vh';
  const changemobileText: any = mobile ? '18px' : '28px';
  const changemobileTextW: any = mobile ? '180px' : '250px';
  const getdataImg: any = LabelTextcrystal.filter((v, i) => {
    return v.link == loca.pathname.slice(23);
  });
  const location = useLocation();
  const navigate = useNavigate();

  const changeHoverRotate = () => {
    navigate(`/get/contentItemsChooseStone/${loca.pathname.slice(23)}`);
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const select: any = useSelector(getProfileSelector);

  const dispatch: any = useDispatch();
  const { StoneActions } = StoneSliceReduce();

  const backPage: any = () => {
    navigate(`/get/contentItem/lovetheme`);
    dispatch(
      StoneActions.changeStoneValue({
        id: 12,
        active: false,
        name: 'getting2',
        title: 'hello world2',
        description: 'make sure2',
        image: 'url2',
        coin: 23,
      }),
    );
  };

  return (
    <Box opacity={0} className="chnagehidebut" w={'100%'} h={changemobile}>
      <Flex justify={'space-around'} align={'center'}>
        <Box mt={50}>
          <Arrowleft onClick={backPage} />
        </Box>
        <Text
          sx={{ transform: 'translateX(10px)' }}
          fw={600}
          fz={changemobileText}
          lh={'23.4px'}
          color={'white'}
          mt={50}
        >
          Trải bài xu hướng{' '}
          {loca.pathname.slice(23) == 'timetheme'
            ? 'thời gian'
            : loca.pathname.slice(23) == 'lovetheme'
            ? 'tình yêu'
            : loca.pathname.slice(23) == 'selftheme'
            ? 'bản thân'
            : loca.pathname.slice(23) == 'moneytheme'
            ? 'tiền bạc'
            : loca.pathname.slice(23) == 'familytheme'
            ? 'gia đình'
            : loca.pathname.slice(23) == 'careertheme'
            ? 'sự nghiệp'
            : loca.pathname.slice(23) == 'sosietytheme'
            ? 'xã hội'
            : ''}{' '}
          sắp tới.
        </Text>
        <Box opacity={0}>
          <Arrowleft />
        </Box>
      </Flex>
      <Box w={'100%'} h={'80vh'}>
        <Flex
          w={'100%'}
          h={'100%'}
          direction={'column'}
          justify={'center'}
          align={'center'}
        >
          <img
            style={{
              width: changemobileTextW,
              height: changemobileTextW,
              marginBottom: '30px',
              borderRadius: '100%',
            }}
            src={`${getdataImg[0].iconCrystal}`}
            onClick={() => changeHoverRotate()}
            alt=""
          />
          <Text align={'center'} w={'90%'} color={'#9fbbd8'}>
            Chạm vào màn hình 3s để kết nối với năng lượng vũ trụ và suy nghĩ về
            câu hỏi của bạn.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
