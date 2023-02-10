import * as THREE from 'three';
import { Shape } from './shader/Shape';

export class ThreeGame {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private shape: Shape;
  private ambientLight: THREE.AmbientLight;
  private directionalLight: THREE.DirectionalLight;

  constructor(parent: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: parent,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(800, 600);
    const fov = 45;
    const aspect = 800 / 600; // the canvas default
    const near = 1;
    const far = 1000;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // this.camera.position.y = 9;
    this.camera.position.z = 36;

    this.scene = new THREE.Scene();

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(this.ambientLight);

    // directional light - parallel sun rays
    this.directionalLight = new THREE.DirectionalLight(0xfafafa, 0.5);
    // this.directionalLight.castShadow = true;
    this.directionalLight.position.set(0, 10, 10);
    this.scene.add(this.directionalLight);

    this.shape = new Shape(this.scene);
    this.update(0);
  }
  public update(deltaTime: number): void {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.update.bind(this));
    this.shape.update(deltaTime / 1000);
  }
}
