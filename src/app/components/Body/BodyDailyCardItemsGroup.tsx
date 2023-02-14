import { Avatar, Flex, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';
interface BodyItemProps {
  data?: any;
}
export const BodyDailyCardItemsGroup: any = (props: BodyItemProps) => {
  const { t }: any = useTranslation();
  return (
    <div
      style={{
        width: '330px',
        height: '212px',
        backgroundColor: 'rgba(0,0,0,.4)',
        borderRadius: '16px',
        gap: '16px',
        margin: '5px 5px',
        boxShadow: '4px 4px 4px 0 rgba(255, 255, 255, 0.25)',
        border: '1px solid rgba(255, 255, 255, .7)',
      }}
    >
      <Flex
        h={'100%'}
        justify={'space-evenly'}
        align={'center'}
        direction={'column'}
        sx={{
          ':hover': {
            boxShadow: '5px 5px 5px 0 rgba(255, 255, 255, 0.25)',
            transition: 'transform.2s ease-in-out',
          },
        }}
      >
        <Avatar
          size={85}
          mt={'23px'}
          src={props.data.iconCrystal}
          sx={{
            ':hover': {
              transform: 'scale(1.05)',
              transition: 'transform.2s ease-in-out',
            },
          }}
        ></Avatar>
        <Text fw={700} fz={17.5} color={'#FFFFFF'} align={'center'}>
          {t(props.data.description)}
        </Text>
        <Text
          fw={500}
          fz={14}
          w={'85%'}
          lh={'20px'}
          color={'#9FBBD8'}
          align={'center'}
        >
          {t(props.data.label)}
        </Text>
      </Flex>
    </div>
  );
};
