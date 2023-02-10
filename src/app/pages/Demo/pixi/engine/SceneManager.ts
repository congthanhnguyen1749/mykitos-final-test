import * as PIXI from 'pixi.js-legacy';

export class SceneManager {
  app: PIXI.Application;
  currentScene: PIXI.Container;

  constructor(app: PIXI.Application, firstScene: PIXI.Container) {
    this.app = app;
    this.currentScene = firstScene;
    this.goTo(firstScene);
  }

  goTo(scene: PIXI.Container) {
    if (this.currentScene) {
      this.app.stage.removeChild(this.currentScene);
    }
    // Move the sprite to the center of the screen
    scene.x = this.app.renderer.width / 2;
    scene.y = this.app.renderer.height / 2;
    this.currentScene = scene;
    this.app.stage.addChild(this.currentScene);
  }
}
