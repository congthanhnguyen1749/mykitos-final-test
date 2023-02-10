import * as React from 'react';
import { Stage } from '@inlet/react-pixi/legacy';
import { GameContainner } from './GameContainer';

const stageOptions = {
  forceCanvas: true,
  antialias: false,
  resolution: 1,
  transparent: true,
  backgroundAlpha: 0,
};

export function PixiContainer() {
  return (
    <Stage
      options={stageOptions}
      style={{ border: '1px solid red', height: '100%' }}
    >
      <GameContainner />
    </Stage>
  );
}
