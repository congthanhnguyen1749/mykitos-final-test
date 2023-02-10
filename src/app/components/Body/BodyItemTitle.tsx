import { Box, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
export const BodyItemTitle = ({ props }) => {
  const loca = useLocation();
  const { t } = useTranslation();
  const mobile = useMediaQuery('(max-width: 755px)');
  const margintopLabel = mobile ? '40px' : '';
  return (
    <Box w={'798px'} h={'80%'} mt={margintopLabel}>
      <Flex
        w={'100%'}
        justify={'flex-start'}
        align={'center'}
        direction="column"
        wrap={'wrap'}
      >
        <Text
          fz={'24px'}
          w={'100%'}
          fw={'500'}
          lh={'31px'}
          align="center"
          fs={'normal'}
          color={'white'}
        >
          {t(`Body.${loca.pathname.slice(17)}.Cart${props.key}.description`)}
        </Text>
        <Text
          fz={'18px'}
          fw={'500'}
          align="center"
          w={'100%'}
          lh={'23px'}
          fs={'normal'}
          color={'rgba(159, 187, 216, 1)'}
          mt={'15px'}
        >
          {t(`Body.${loca.pathname.slice(17)}.Cart${props.key}.label`)}
        </Text>
      </Flex>
    </Box>
  );
};
