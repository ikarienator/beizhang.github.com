#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D sampler1, sampler2, sampler3, sampler4;
varying vec3 position;
varying vec4 color;
varying float idx;
varying vec2 vTexCoord;

#include "rng.glsl"

vec2 rotate(vec2 pt, float ang) {
    pt -= 0.5;
    float c = cos(ang), s = sin(ang);
    return vec2(pt.x * c - pt.y * s, pt.x * s + pt.y * c) + 0.5;
}

void main() {
  gl_FragColor = color;
  gl_FragColor.a *= 2. * max(0., 0.5 - length(gl_PointCoord - 0.5)) * texture2D(sampler4, rotate(gl_PointCoord, color.r * 4.)).r;
}