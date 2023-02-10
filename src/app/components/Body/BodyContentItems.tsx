import { Box, Flex } from '@mantine/core';
import React from 'react';
import { TitleItemChange } from './TitleItemChange';
import { ContentChange } from './ContentChange';
import { DataItemCard } from './data/data';
import { useMediaQuery } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
export const BodyContentItems = () => {
  const [changvalueCard, setchangvalueCard] = React.useState(0);
  const mobile = useMediaQuery('(max-width: 755px)');
  const navi = useNavigate();
  const loca = useLocation();
  const newAr: any = [];
  const lovetheme: any = DataItemCard.filter(v => {
    return v.key == 1 || v.key == 2 || v.key == 11 || v.key == 4 || v.key == 3;
  });
  const timetheme: any = DataItemCard.filter(v => {
    return v.key == 7 || v.key == 8 || v.key == 9 || v.key == 10;
  });
  const selftheme: any = DataItemCard.filter(v => {
    return v.key == 0 || v.key == 1 || v.key == 12;
  });
  const moneytheme: any = DataItemCard.filter(v => {
    return v.key == 1 || v.key == 2;
  });
  const familytheme: any = DataItemCard.filter(v => {
    return v.key == 1 || v.key == 4 || v.key == 4;
  });
  const careertheme: any = DataItemCard.filter(v => {
    return v.key == 1 || v.key == 2 || v.key == 11 || v.key == 6 || v.key == 5;
  });
  const sosietytheme: any = DataItemCard.filter(v => {
    return v.key == 1 || v.key == 4;
  });
  const changeData: any = loca.pathname.slice(17);

  newAr.push(
    changeData == 'timetheme'
      ? timetheme
      : changeData == 'lovetheme'
      ? lovetheme
      : changeData == 'selftheme'
      ? selftheme
      : changeData == 'moneytheme'
      ? moneytheme
      : changeData == 'familytheme'
      ? familytheme
      : changeData == 'careertheme'
      ? careertheme
      : changeData == 'sosietytheme'
      ? sosietytheme
      : sosietytheme,
  );

  const changeImgCard: any = i => {
    setchangvalueCard(i);
  };
  return (
    <Flex justify={'flex-start'} direction={'column'} align={'center'} w="100%">
      <TitleItemChange />
      <Flex justify={'flex-start'} direction={'column'} align={'center'}>
        {newAr[0].map((v, i) => {
          return (
            <Box onClick={() => changeImgCard()} key={i}>
              <ContentChange data={[v, changvalueCard]} />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};
