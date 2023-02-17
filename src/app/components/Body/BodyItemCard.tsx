import { Box, Flex, Image, Text } from '@mantine/core';
import React from 'react';
import Coin from '../../../assets/images/Body/icon/coin/Xu.svg';
import { useMediaQuery } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { StoneSliceReduce } from 'store/slice/changeStone';
import { useDispatch } from 'react-redux';
export const BodyItemCard = ({ props }) => {
  const mobile = useMediaQuery('(max-width: 755px)');
  const changesizemargintop = mobile ? '13px' : '';
  const changesizeborder = mobile ? '235px' : '389px';
  const changesizeimg = mobile ? '6px 8px 6px 8px' : '12px 16px 12px 16px';
  const navigate = useNavigate();
  const loca = useLocation();
  const dispatch = useDispatch();
  const { StoneActions } = StoneSliceReduce();

  const movetochild = () => {
    navigate(`/get/contentItemsChild/${loca.pathname.slice(17)}`);
    // đẩy dữ liệu key của từng cụm image card  lên redux
    dispatch(StoneActions.ChangeStoneKey(props.key));
  };
  return (
    <Flex
      justify={'space-around'}
      align={'center'}
      direction={'column'}
      w={'372px'}
      h={changesizeborder}
      mt={changesizemargintop}
    >
      <img src={props.icon} />
      <Flex
        justify={'center'}
        align={'center'}
        onClick={() => movetochild()}
        mt={'10px'}
        sx={{
          borderRadius: '16px',
          padding: changesizeimg,
          gap: '16px',
          '&:hover': {
            opacity: '0.9',
            cursor: 'pointer',
          },
        }}
        w={90}
        h={40}
        bg={'rgba(255, 65, 99, 1)'}
      >
        <Image width={22} height={22} m={'0'} p={'0'} src={Coin}></Image>
        <Text m={' 0 0 0 -5px'} color={'white'} fz={'16px'} fw={'500'}>
          25
        </Text>
      </Flex>
    </Flex>
  );
};
