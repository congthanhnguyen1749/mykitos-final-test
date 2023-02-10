import * as React from 'react';
import { ThreeGame } from './ThreeGame';

export function useThreeGame(
  gameContainerRef: React.RefObject<HTMLCanvasElement>,
): ThreeGame | undefined {
  const [game, setGame] = React.useState<ThreeGame>();
  React.useEffect(() => {
    if (!game && gameContainerRef.current) {
      const newGame = new ThreeGame(gameContainerRef.current);
      setGame(newGame);
    }
    return () => {};
  }, [gameContainerRef, game]);
  return game;
}
