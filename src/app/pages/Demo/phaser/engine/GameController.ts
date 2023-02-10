import * as React from 'react';
import { Game, Types } from 'phaser';
import { MainScene } from './MainScene';

export function useGame(
  config: Types.Core.GameConfig,
  containerRef: React.RefObject<HTMLDivElement>,
): Game | undefined {
  const [game, setGame] = React.useState<Game>();
  React.useEffect(() => {
    if (!game && containerRef.current) {
      const newGame = new Game({ ...config, parent: containerRef.current });
      setGame(newGame);
    }
    return () => {
      game?.destroy(true);
    };
  }, [config, containerRef, game]);

  return game;
}

const gameConfig: Types.Core.GameConfig = {
  width: 800,
  height: 600,
  transparent: true,
  backgroundColor: 'rgba(255,0,0,0)',
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: {
    antialias: false,
    transparent: true,
  },
  scene: MainScene,
};

export default gameConfig;
