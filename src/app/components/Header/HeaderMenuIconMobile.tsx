import * as React from 'react';
import { Group, Box, Text, Flex } from '@mantine/core';
import { HeaderMenuIconProps } from '../interface/interface';
import { useMediaQuery } from '@mantine/hooks';

export function HeaderMenuIconMobile(props: HeaderMenuIconProps) {
  const mobile: any = useMediaQuery('(max-width: 768px)');
  const changesize: any = mobile ? '13px' : '32px';
  const changesizeicon: any = mobile ? '40px' : '';
  const changeamargin: any = mobile ? '10px' : 'auto';
  const changeamarginLeft: any = mobile ? '5px' : 'auto';
  return (
    <Flex justify={'center'} align={'center'}>
      <Box
        sx={{
          marginLeft: changeamarginLeft,
          marginRight: 'auto',
          marginTop: changeamargin,
        }}
      >
        {props.active ? (
          <img
            style={{
              maxWidth: '100%',
              height: changesizeicon,
              padding: '5px',
            }}
            src={props.data.Icon_UnActiveCenterMobile}
            alt=""
          />
        ) : (
          <img
            style={{
              maxWidth: '100%',
              height: changesizeicon,
              padding: '5px',
            }}
            src={props.data.iconMobileActived}
            alt=""
          />
        )}
      </Box>
    </Flex>
  );
}
