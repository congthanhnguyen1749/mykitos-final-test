export const sample_vs = `
precision highp float;

attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

void main() {
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;
export const sample_fs = `
precision highp float;
#define PI 3.14159265
#define TAU 6.283185307

uniform float iTime;
varying vec2 vUv;

void main() {
	vec4 texel = vec4(
		sin((vUv.x + iTime * 1.0) * TAU),
		0.0, 
		cos((vUv.y + iTime * 0.2) * TAU),
		1.0
	);
	gl_FragColor = texel;
}
`;
