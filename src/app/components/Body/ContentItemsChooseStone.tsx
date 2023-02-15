import React, { useEffect, useLayoutEffect } from 'react';
import { ReactComponent as Arrowleft } from '../../../assets/images/Body/icon/arrow/arrow-narrow-left.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CarsulSlideMantine } from './CarsulSlideMantine';
import { dataStone } from './data/data';
import './flipCard.css';

export const ContentItemsChooseStone = () => {
  const loca = useLocation();
  const navigate = useNavigate();
  const backPage: any = () => {
    navigate(`/get/contentItemsChild/${loca.pathname.slice(29)}`);
  };
  const changePageItems: any = () => {
    navigate(`/get/contentItemsChooseStone/${loca.pathname.slice(29)}`);
  };
  const skipPage: any = () => {
    navigate(`/get/contentItemsflashesStone/${loca.pathname.slice(29)}`);
  };

  const mobile = useMediaQuery('(max-width: 755px)');
  const changeViewSlider = mobile ? '373px' : '1125px';
  const marginBox = mobile ? '20px' : '10vh';
  const marginBoxtop = mobile ? '20px' : '50px';
  const headerText = mobile ? '1.1rem' : '1.5rem';
  const labelcontentFront = mobile ? '.8rem' : '1.2rem';
  const heightSlider = mobile ? 'auto' : '350px';
  const heightBoxMobile = mobile ? 'auto' : '110vh';
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Flex
      opacity={0}
      className="chnagehidebut"
      direction={'column'}
      mt={marginBox}
      w={'100%'}
      h={heightBoxMobile}
    >
      {/* header */}
      <Flex justify={'space-around'} align={'center'}>
        <Box>
          <Arrowleft onClick={backPage} />
        </Box>
        <Text
          sx={{ transform: 'translateX(10px)' }}
          fw={600}
          fz={headerText}
          lh={'23.4px'}
          color={'white'}
        >
          Chọn đá năng lượng
        </Text>
        <Box>
          <Text
            sx={{ transform: 'translateX(10px)' }}
            fw={400}
            fz={'1rem'}
            lh={'23.4px'}
            color={'white'}
            onClick={() => skipPage()}
          >
            Bỏ qua
          </Text>
        </Box>
      </Flex>
      {/* end header */}
      {/* content */}
      <Flex
        justify={'center'}
        align={'center'}
        onClick={() => changePageItems()}
        w={'100%'}
      >
        <Flex w={'100%'} direction={'column'} align={'center'}>
          <Text
            align="center"
            m={'0 auto'}
            maw={1000}
            color={'rgba(159, 187, 216, 1)'}
            fw={400}
            fz={labelcontentFront}
            lh={'23.4px'}
            mt={marginBoxtop}
          >
            Theo các chỉ dẫn huyền học cổ xưa, đá thạch anh cũng có tác dụng
            thanh tẩy, “gột rửa” năng lượng của bộ bài Tarot nếu nó vô tình bị
            “nhiễm” những tác động không lành mạnh.
          </Text>
          <Flex
            justify={'center'}
            align={'center'}
            mt={'20px'}
            w={changeViewSlider}
            h={heightSlider}
          >
            {/* slider */}
            <CarsulSlideMantine data={dataStone}></CarsulSlideMantine>
            {/* slider */}
          </Flex>
        </Flex>
      </Flex>
      {/* end content */}
    </Flex>
  );
};
