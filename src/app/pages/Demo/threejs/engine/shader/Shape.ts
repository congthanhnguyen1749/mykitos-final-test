import * as THREE from 'three';
import { sample_vs, sample_fs } from './shadersample';
import EarthTexture from '../../../../../../assets/images/texture/earth.jpeg';
import MarbleTexture from '../../../../../../assets/images/texture/marble.png';
import { Shader } from 'pixi.js-legacy';

export class Shape {
  mesh?: THREE.Mesh;
  scene: THREE.Scene;
  timeU: THREE.IUniform;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial({
      map: loader.load(`${EarthTexture}`),
    });
    const mat = new THREE.RawShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3() },
      },
      vertexShader: sample_vs,
      fragmentShader: sample_fs,
    });
    this.timeU = mat.uniforms.iTime;

    let plane = new THREE.PlaneGeometry(7, 7);
    let m1 = new THREE.Mesh(plane, mat);
    m1.position.z = 7;
    this.scene.add(m1);

    const geometry = new THREE.SphereGeometry(7);
    let earth = (this.mesh = new THREE.Mesh(geometry, material));
    this.scene.add(earth);
  }

  public update(secs: number): void {
    this.timeU.value = secs;
    this.mesh?.rotation.set(
      Math.sin(secs / 10) * 2 * Math.PI,
      Math.cos(secs / 10) * 2 * Math.PI,
      0,
    );
  }
}
