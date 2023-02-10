import * as React from 'react';
import { Group, Box, Text, Flex } from '@mantine/core';
import { HeaderMenuIconProps } from '../interface/interface';
import { useMediaQuery } from '@mantine/hooks';

export function HeaderMenuIcon(props: HeaderMenuIconProps) {
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
          marginTop: changeamargin ,
        }}
      >
        {props.active ? (
          <img
            style={{
              maxWidth: '100%',
              height: changesizeicon,
              padding: '5px',
            }}
            src={props.iconActived}
            alt=""
          />
        ) : (
          <img
            style={{
              maxWidth: '100%',
              height: changesizeicon,
              padding: '5px',
            }}
            src={props.iconInactived}
            alt=""
          />
        )}
      </Box>
      {props.active ? (
        <Text
          sx={{ color: 'rgba(0, 255, 246, 1)', textDecoration: 'none' }}
          fz={changesize}
          fw="500"
          lh="41.6px"
        >
          {props.label}
        </Text>
      ) : null}
    </Flex>
  );
}
