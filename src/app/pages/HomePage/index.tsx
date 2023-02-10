import { Stack } from '@mantine/core';
import * as React from 'react';

export function HomePage() {
  return (
    <Stack>
      <a href="/demo/three">DemoThree</a>
      <a href="/demo/phaser">DemoPhaser</a>
      <a href="/demo/pixi">DemoPiXi</a>
    </Stack>
  );
}
