import * as React from 'react';
import { Center, Stack, BackgroundImage } from '@mantine/core';
import Background from '../../../../assets/images/background/galaxy.jpg';
import { ThreeContainer } from './ThreeContainer';

export function DemoThree() {
  return (
    <BackgroundImage
      src={`${Background}`}
      radius="sm"
      sx={{ minHeight: '100%', height: '100vh' }}
    >
      <Center>
        <Stack>
          <h1 style={{ color: 'red' }}>Demo Three</h1>
          <ThreeContainer />
        </Stack>
      </Center>
    </BackgroundImage>
  );
}
