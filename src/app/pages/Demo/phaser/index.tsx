import * as React from 'react';
import { Center, Stack, BackgroundImage } from '@mantine/core';
import Background from '../../../../assets/images/background/galaxy.jpg';
import { PhaserContainer } from './PhaserContainer';

export function DemoPhaser() {
  return (
    <BackgroundImage
      src={`${Background}`}
      radius="sm"
      sx={{ minHeight: '100%', height: '100vh' }}
    >
      <Center sx={{ border: '1px solid red' }}>
        <Stack>
          <h1 >DemoPhaser</h1>
          <PhaserContainer />
        </Stack>
      </Center>
    </BackgroundImage>
  );
}
