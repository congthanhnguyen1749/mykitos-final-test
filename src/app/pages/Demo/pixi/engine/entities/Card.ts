import * as PIXI from 'pixi.js-legacy';
import BackCard0 from '../../../../../../assets/images/cards/card_back_0.jpg';

export function createGoldenCard() {
  const tex = PIXI.Texture.from(`${BackCard0}`);
  const card = new PIXI.Sprite(tex);
  card.anchor.set(0.5);
  return card;
}
