import React from 'react';
import { BodyDailyCardItemsGroup } from './BodyDailyCardItemsGroup';
import { Box, Flex, SimpleGrid, Text } from '@mantine/core';
import { LabelTextcrystal } from './data/data';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import './flipCard.css';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StoneSliceReduce } from 'store/slice/changeStone';
export const BodyGetReading: any = () => {
  // state
  const [chagneBall, setChagneBall] = React.useState(0);
  // end state

  // variables
  const navigate: any = useNavigate();
  const mobile: any = useMediaQuery('(max-width: 1450px)');
  const setlayoutMobile: any = mobile ? '20px' : '50px';
  const changesizelabel: any = mobile ? '15px' : '24px';
  const changemobile: any = mobile ? '100%' : '90.05vh';
  const changemtmobile: any = mobile ? 20 : 50;
  const changeanimatie: any = mobile ? '0%' : '8%';
  // end variables

  // dispatch snowball id
  const dispatch = useDispatch();
  const { StoneActions } = StoneSliceReduce();

  useLayoutEffect(() => {
    // dispatch(StoneActions.changeStoneValue(chagneBall));
  }, [chagneBall]);

  // end dispatch snowball id
  const changeContentItems: any = (value, index) => {
    // navigate(`/get/contentItem/${value.link}`);
    dispatch(StoneActions.changeStoneValue(index));
    // setChagneBall(index);
  };

  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Flex
      sx={{
        width: 'fit-content',
      }}
      direction={'column'}
      w={'100%'}
      h={changemobile}
    >
      <Box
        w={' 100%'}
        mt={setlayoutMobile}
        h={'10%'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Text
          className="chnagehidebut"
          fz={'32px'}
          fw={'600'}
          lh={'41px'}
          fs={'normal'}
          color={'white'}
          opacity={0}
        >
          Get reading
        </Text>
        <Text
          fz={changesizelabel}
          className="chnagehidebut"
          fw={'600'}
          opacity={0}
          mt={'10px'}
          lh={'31px'}
          fs={'normal'}
          color={'#9FBBD8'}
          align="center"
        >
          Hãy chọn chủ đề mà bạn muốn hỏi!
        </Text>
      </Box>
      <SimpleGrid
        w={'100%'}
        mt={changemtmobile}
        cols={3}
        opacity={0}
        className="chnagehidebut"
        breakpoints={[
          { maxWidth: 1200, cols: 3 },
          { maxWidth: 950, cols: 2 },
          { maxWidth: 755, cols: 1 },
        ]}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
          },
          transform: `translateY(${changeanimatie})`,
        }}
      >
        {LabelTextcrystal.map((value, index) => {
          return (
            <div onClick={e => changeContentItems(value, index)} key={index}>
              <BodyDailyCardItemsGroup data={value}></BodyDailyCardItemsGroup>
            </div>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
