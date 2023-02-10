import { Box } from '@mantine/core';
import * as React from 'react';
import AvatarUnActive from '../../../assets/images/icons/loginAndCoin/iconLogin/backgroundUserUnActive/userUnActive.svg';
export function Avatar(props: { url?: string }) {
  return (
    <Box
      sx={{
        width: '62px',
        height: '62px',
        borderRadius: props.url === undefined ? ' none' : '50%',
        boxShadow:
          props.url === undefined
            ? ' none'
            : ' 0 0 0.1rem #fff, 0 0 0.1rem #fff, 0 0 0.1rem #ff2c52,0 0 0.1rem #ff2c52, 0 0 .4rem #ff2c52, inset 0 0 0.4rem #ff2c52',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${
          props.url === undefined ? AvatarUnActive : props.url
        })`,
        border: props.url === undefined ? 'none' : '.5px solid white',
      }}
    ></Box>
  );
}
