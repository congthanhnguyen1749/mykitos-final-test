import { Center, Stack, BackgroundImage } from '@mantine/core';
import * as React from 'react';
import Background from '../../../../assets/images/background/galaxy.jpg';
import { PixiContainer } from './PixiContainer';

export function DemoPiXi() {
  return (
    <BackgroundImage
      src={`${Background}`}
      radius="sm"
      sx={{ minHeight: '100%', height: '100vh' }}
    >
      <Center>
        <Stack>
          <h1 style={{ color: 'red' }}>DemoPiXi</h1>
          <PixiContainer />
        </Stack>
      </Center>
    </BackgroundImage>
  );
}
