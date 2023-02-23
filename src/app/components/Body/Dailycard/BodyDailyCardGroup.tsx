import { Flex, Text } from '@mantine/core';
import React from 'react';
import backCard from '../../../../assets/images/cards/card_back_0.jpg';
import iconFree from '../../../../assets/images/Body/icon/coin/Frame 3466294.svg';
import iconCoin from '../../../../assets/images/Body/icon/coin/Xu.svg';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DailyCardReducer } from 'store/slice/DaiLycard';
import { RegisterDailyCard } from 'store/slice/DaiLycard/selectors';
export const BodyDailyCardGroup = () => {
  const [FreeSpreadCard, setFreeSpreadCard]: any = React.useState(false);
  const mobile: any = useMediaQuery('(max-width: 768px)');
  const navigate: any = useNavigate();
  const { DailyCardRDucer } = DailyCardReducer();
  const dispatch = useDispatch();

  const selector: any = useSelector(RegisterDailyCard);
  const spreadCardFirst: any = () => {
    navigate('/daily/dailycardspreadeveryday');
    dispatch(DailyCardRDucer.SetNumberWhenUseCardFree(false));
  };

  return (
    <Flex
      direction={'column'}
      justify={'flex-start'}
      align={'center'}
      style={{ width: '100%', height: '100vh' }}
    >
      <Flex
        mt={'20px'}
        direction={'column'}
        justify={'center'}
        align={'center'}
      >
        <Text
          fw={700}
          color={'rgba(159, 187, 216, 1)'}
          fz={mobile ? '16px' : '20px'}
        >
          21/12/2022
        </Text>
        <Text m={'10px 0'} fz={mobile ? '24px' : '32px'} fw={600} color="white">
          Trải bài hằng ngày
        </Text>

        <Text
          fz={mobile ? '12px' : '18px'}
          fw={500}
          color={'rgba(159, 187, 216, 1)'}
        >
          Xin chào
        </Text>
        <Text
          fz={mobile ? '12px' : '18px'}
          fw={500}
          color={'rgba(159, 187, 216, 1)'}
        >
          Chọn 1 thẻ để xem ngày hôm nay của bạn thế nào.
        </Text>
      </Flex>
      <Flex m={'40px 0'}>
        <img
          src={backCard}
          style={{
            width: mobile ? '174px' : '261px',
            height: mobile ? '304px' : '456px',
            cursor: 'pointer',
            objectFit: 'cover',
          }}
          alt=""
        />
      </Flex>
      <Flex>
        <Flex
          w={mobile ? '167px' : '175px'}
          h={mobile ? '48px' : '58px'}
          justify={'center'}
          onClick={() => spreadCardFirst()}
          align={'center'}
          sx={{
            borderRadius: '16px',
            border: '1px solid white',
            boxShadow:
              '0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52, 0 0 0.1rem #ff2c52, 0 0 0.4rem #ff2c52, inset 0 0 0.4rem #ff2c52',
          }}
        >
          <Text mr={10} fz={18} fw={500} color="white">
            Bắt đầu
          </Text>
          {selector.isFreeCard ? (
            <img
              style={{ width: '40', height: '24px' }}
              src={iconFree}
              alt=""
            />
          ) : (
            <Flex justify={'center'} align={'center'}>
              <img
                width={mobile ? '20px' : '24px'}
                height={mobile ? '20px' : '24px'}
                style={{ width: '40', height: '24px' }}
                src={iconCoin}
                alt=""
              />
              <Text fz={mobile ? '18px' : '20px'} color="white">
                5
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
