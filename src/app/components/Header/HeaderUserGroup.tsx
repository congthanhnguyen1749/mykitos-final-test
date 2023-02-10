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
            'url(https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/326386491_1212570036040238_9033932867486650537_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=chdj5F4LncsAX_bGiYn&tn=kmxygw2PtVo3I5ud&_nc_ht=scontent.fhan3-3.fna&oh=00_AfC7xaYjE5ngNJn8W7EtV3dTDQj4EBtW6i91shawNSUAfw&oe=63E783CA)',
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
