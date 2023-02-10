import * as PIXI from 'pixi.js-legacy';
import { createGoldenCard } from './entities/Card';

export function MainScene() {
  let container = new PIXI.Container();
  let card = createGoldenCard();
  container.addChild(card);
  return container;
}
