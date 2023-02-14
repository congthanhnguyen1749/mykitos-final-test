import { BackgroundImage, Box, Flex, Group, Image } from '@mantine/core';
import * as React from 'react';
import { MoneyFrame } from './MoneyFrame';
import { Avatar } from './Avatar';
import { useMediaQuery } from '@mantine/hooks';

export function HeaderUserGroup() {
  const mobile = useMediaQuery('(max-width: 755px)');
  const changewidth: any = mobile ? '35px' : '55px';
  const w: any = mobile ? '200px' : '258px';
  const h: any = mobile ? '100px' : '62px';
  const bl: any = mobile ? '1px solid gray' : '';
  const br: any = mobile ? '#090F1B' : '';
  const changeimagemargin: any = mobile ? '0px 0px 0 8px' : '0px 0px 0 10px';
  const changerow: any = mobile ? 'row-reverse' : 'row';

  return (
    <Flex
      direction={changerow}
      justify="space-between"
      align="center"
      sx={{
        width: w,
        height: h,
        borderLeft: bl,
        background: br,
      }}
    >
      <MoneyFrame />
      <Box
        sx={{
          width: changewidth,
          height: changewidth,
          borderRadius: '100px',
          overflow: 'hidden',
          background:
            'url(https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg)',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          objectFit: 'cover',
          boxShadow:
            ' 0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52,0 0 0.1rem #ff2c52, 0 0 .4rem #ff2c52, inset 0 0 0.4rem #ff2c52',
        }}
        m={changeimagemargin}
      ></Box>
    </Flex>
  );
}
