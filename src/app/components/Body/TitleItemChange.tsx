import { Box, Flex, Image, Text } from '@mantine/core';
import React from 'react';
import { ReactComponent as Arrowleft } from '../../../assets/images/Body/icon/arrow/arrow-narrow-left.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
export const TitleItemChange = () => {
  const loca = useLocation();
  const mobile = useMediaQuery('(max-width: 755px)');
  const navigate = useNavigate();
  const backPage: any = () => {
    navigate('/get/getreading');
  };
  const textdescription = mobile ? '26px' : '32px';
  const textlabel = mobile ? '18px' : '24px';
  const marginlabel = mobile ? '15px' : '35px';
  return (
    <Flex w={'100%'} h={'15vh'}>
      <Flex
        m={'-12px 0 0 2px'}
        justify={'flex-left'}
        align={'center'}
        w={'32%'}
        h={'100%'}
      >
        <Arrowleft onClick={backPage} />
      </Flex>
      <Flex
        w={'36%'}
        h={'100%'}
        justify={'space-between'}
        align={'center'}
        direction="column"
      >
        <Text
          w={'340px'}
          mt={marginlabel}
          align={'center'}
          fz={textdescription}
          fw={'600'}
          lh={'42px'}
          fs={'normal'}
          color={'white'}
        >
          {loca.pathname == '/get/lovetheme' ? 'Chủ Đề Tình Yêu' : ''}
          {loca.pathname == '/get/timetheme' ? 'Chủ đề Thời gian' : ''}
          {loca.pathname == '/get/selftheme' ? 'Chủ đề Bản thân' : ''}
          {loca.pathname == '/get/moneytheme' ? 'Chủ đề Tiền bạc' : ''}
          {loca.pathname == '/get/familytheme' ? 'Chủ đề Gia đình' : ''}
          {loca.pathname == '/get/careertheme' ? 'Chủ đề Sự nghiệp' : ''}
          {loca.pathname == '/get/sosietytheme' ? 'Chủ đề Quan hệ xã hội' : ''}
        </Text>
        <Text
          w={'280px'}
          align={'center'}
          fz={textlabel}
          fw={'600'}
          lh={'31px'}
          fs={'normal'}
          color={'#9FBBD8'}
          mb={45}
        >
          Hãy chọn vấn đề mà bạn muốn giải đáp
        </Text>
      </Flex>
    </Flex>
  );
};
