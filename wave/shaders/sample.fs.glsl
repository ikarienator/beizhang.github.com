#ifdef GL_ES
precision highp float;
#endif
uniform sampler2D sampler1;
uniform float width;
uniform float height;
varying vec2 vTexCoord;
void main(void) {
  vec2 position = vTexCoord;
  float px = 1. / width;
  float py = 1. / height;
  gl_FragColor =
    mix(
      mix(
        texture2D(sampler1, position + vec2(0, 0)),
        texture2D(sampler1, position + vec2(px, 0)),
        0.5
      ),
      mix(
        texture2D(sampler1, position + vec2(0, py)),
        texture2D(sampler1, position + vec2(px, py)),
        0.5
      ),
      0.5
    );
}