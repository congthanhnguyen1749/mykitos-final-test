import { useApp } from '@inlet/react-pixi/legacy';
import { GameController } from './engine/GameController';

export function GameContainner() {
  const app = useApp();
  new GameController(app);
  return null;
}
