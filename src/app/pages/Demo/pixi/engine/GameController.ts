import * as PIXI from 'pixi.js-legacy';
import { createLoadingScene } from './LoadingScene';
import { MainScene } from './MainScene';
import { SceneManager } from './SceneManager';

export class GameController {
  app: PIXI.Application;
  sceneManager: SceneManager;

  constructor(app: PIXI.Application) {
    this.app = app;
    this.sceneManager = new SceneManager(app, createLoadingScene());
    setTimeout(this.showMain.bind(this), 3000);
  }
  showMain() {
    this.sceneManager.goTo(MainScene());
  }
}
