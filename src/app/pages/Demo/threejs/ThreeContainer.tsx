import { Container } from '@mantine/core';
import * as React from 'react';
import { useThreeGame } from './engine/GameController';

export function ThreeContainer() {
  const gameContainer = React.useRef<HTMLCanvasElement>(null);
  useThreeGame(gameContainer);
  return (
    <canvas
      ref={gameContainer}
      style={{ width: 800, height: 600, border: '1px red solid' }}
    />
  );
}
