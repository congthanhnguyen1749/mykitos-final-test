import * as PIXI from 'pixi.js-legacy';

export function createLoadingScene() {
  let container = new PIXI.Container();
  const tex = PIXI.Texture.from(
    'https://pixijs.io/examples/examples/assets/bunny.png',
  );
  const bunny = new PIXI.Sprite(tex);
  bunny.anchor.set(0.5);
  bunny.scale.set(5);
  container.addChild(bunny);
  return container;
}
