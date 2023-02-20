import { Box, Flex } from '@mantine/core';
import React from 'react';
import { BodyItemCard } from './BodyItemCard';
import { BodyItemTitle } from './BodyItemTitle';
import { useMediaQuery } from '@mantine/hooks';
export interface getDataItemCard {
  data?: any;
}
export const ContentChange: any = (props: getDataItemCard) => {
  const mobile = useMediaQuery('(max-width: 755px)');
  const pc = useMediaQuery('(max-width: 1231px)');
  const pc1 = useMediaQuery('(max-width: 990px)');
  const boxwrap = mobile ? 'wrap' : 'nowrap';
  const heightBorder = mobile ? 'auto' : 'auto';
  const heightboxpc1 = pc1 ? '680px' : '931px';
  const heightboxpc = pc ? heightboxpc1 : '1170px';
  const widthtbox = mobile ? '284px' : heightboxpc;
  return (
    <Flex
      w={widthtbox}
      h={heightBorder}
      bg={'rgba(0, 0, 0, 0.4);'}
      m={'20px 0 0px 0'}
      justify={'center'}
      align={'center'}
      sx={{
        border: '1px solid rgba(255, 255, 255, 1)',
        padding: '28px',
        borderRadius: '16px',
        boxShadow: '4px 4px 4px 0 rgba(255, 255, 255, 0.25)',
        flexWrap: `${boxwrap}`,
      }}
    >
      <BodyItemCard props={props.data[0]} />
      <BodyItemTitle props={props.data[0]} />
    </Flex>
  );
};
