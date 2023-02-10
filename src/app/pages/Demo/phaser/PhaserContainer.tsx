import * as React from 'react';
import gameConfig, { useGame } from './engine/GameController';

export function PhaserContainer() {
  const gameContainer = React.useRef<HTMLDivElement>(null);
  useGame(gameConfig, gameContainer);
  return (
    <div className="container">
      <div ref={gameContainer} className="gameContainer" />
    </div>
  );
}
