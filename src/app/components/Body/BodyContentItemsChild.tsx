import React, { useRef } from 'react';
import { ReactComponent as Arrowleft } from '../../../assets/images/Body/icon/arrow/arrow-narrow-left.svg';
import Violetcrystal from '../../../assets/images/Body/Crystalball/whitecrystal.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { LabelTextcrystal } from './data/data';
import { Transform } from 'stream';

export const BodyContentItemsChild = () => {
  const mobile: any = useMediaQuery('(max-width: 755px)');
  const loca = useLocation();
  const changemobile: any = mobile ? '100%' : '90vh';
  const changemobileText: any = mobile ? '18px' : '28px';
  const changemobileTextW: any = mobile ? '180px' : '250px';
  const getdataImg: any = LabelTextcrystal.filter((v, i) => {
    return v.link == loca.pathname.slice(23);
  });
  const navigate = useNavigate();
  const backPage: any = () => {
    navigate(`/get/contentItem/lovetheme`);
  };

  const changeHoverRotate = () => {
    navigate(`/get/contentItemsChooseStone/${loca.pathname.slice(23)}`);
  };

  return (
    <Box mt={30} w={'100vw'} h={changemobile}>
      <Flex justify={'space-around'} align={'center'}>
        <Box>
          <Arrowleft onClick={backPage} />
        </Box>
        <Text
          sx={{ transform: 'translateX(10px)' }}
          fw={600}
          fz={changemobileText}
          lh={'23.4px'}
          color={'white'}
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
      <Box w={'100vw'} h={'80vh'}>
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
              boxShadow: '3px 4px 5px rgba(255,255,255,.6)',
              borderRadius: '100%',
              transition: 'all 3s linear',
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
