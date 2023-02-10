import { plasma_shader } from './shader/plasma';

import RedCrystal from '../../../../../assets/images/crystals/red.png';

export class MainScene extends Phaser.Scene {
  light: any;
  speed: number = 0.01;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload(): void {
    this.load.image('RedCrystal', `${RedCrystal}`);
  }

  create(): void {
    let radius = 200;
    let intensity = 0.01;
    let attenuation = 0.1;
    let light = (this.light = this.add.pointlight(
      400,
      300,
      0,
      radius,
      intensity,
      attenuation,
    ));
    light.color = Phaser.Display.Color.HexStringToColor('FF0000');

    const baseShader = new Phaser.Display.BaseShader(
      'plasma_shader',
      plasma_shader,
    );
    const shader = this.add.shader(baseShader, 0, -200, 800, 600);
    shader.setRenderToTexture('plasma');
    this.add.image(400, 300, 'RedCrystal').setScale(0.2);
    this.add.image(400, 300, 'plasma').setScale(0.2).setAlpha(0.2);
  }
  update(time: number, delta: number): void {
    this.light.intensity = this.light.intensity + this.speed;
    if (this.light.intensity > 0.1 || this.speed < 0.01) {
      this.speed = -this.speed;
    }
  }
}
