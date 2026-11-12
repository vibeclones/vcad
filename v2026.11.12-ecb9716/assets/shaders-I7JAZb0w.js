import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t } from "./three-drei-_EcrAYRL.js";
import { A as n, D as r, O as i, j as a, k as o } from "./dist-CBlCjY37.js";
import { X as s } from "./dist-_2fbu5WV.js";
import { Y as c } from "./three-Dweqhmle.js";
var l = e(t(), 1);
function u(e2, t2) {
  let c2 = s((e3) => e3.bindings), u2 = s((e3) => e3.parameters), d2 = s((e3) => e3.setBinding), f2 = s((e3) => e3.removeBinding), p2 = e2 == null ? null : `${e2}:${t2}`, m2 = p2 ? c2[p2] : void 0, h2 = typeof m2 == `string` ? m2 : null, g2 = (0, l.useMemo)(() => new Set(Object.keys(u2)), [u2]), _2 = (0, l.useCallback)((e3) => {
    let t3;
    try {
      t3 = n(e3);
    } catch (e4) {
      return e4 instanceof r ? e4.message : `invalid expression`;
    }
    let i2 = [...o(t3)].filter((e4) => !g2.has(e4));
    if (i2.length > 0) return `unknown parameter${i2.length > 1 ? `s` : ``}: ${i2.join(`, `)}`;
    try {
      let e4 = a(u2), n2 = [...o(t3)].filter((t4) => !Number.isFinite(e4[t4]));
      if (n2.length > 0) return `parameter${n2.length > 1 ? `s` : ``} do not resolve: ${n2.join(`, `)}`;
    } catch {
      return `parameters do not resolve (cycle?)`;
    }
    return null;
  }, [g2, u2]), v2 = (0, l.useCallback)((n2) => {
    e2 != null && (n2 === null ? f2(e2, t2) : d2(e2, t2, n2));
  }, [e2, t2, d2, f2]);
  return { expression: h2, resolvedValue: (0, l.useMemo)(() => {
    if (h2) try {
      let e3 = a(u2), t3 = i(h2, e3);
      return Number.isFinite(t3) ? t3 : void 0;
    } catch {
      return;
    }
  }, [h2, u2]), onBind: g2.size > 0 ? v2 : void 0, validateExpression: _2 };
}
function d(e2, t2, n2, r2) {
  let o2 = null, s2 = { ...t2 };
  for (let c2 of Object.keys(t2)) {
    let t3 = r2[`${e2}:${c2}`];
    if (t3 != null) {
      if (typeof t3 == `number`) s2[c2] = t3;
      else try {
        o2 ?? (o2 = a(n2));
        let e3 = i(t3, o2);
        Number.isFinite(e3) && (s2[c2] = e3);
      } catch {
      }
    }
  }
  return s2;
}
var f = `
// Permutation polynomial
vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

// 3D Simplex noise
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients
  float n_ = 0.142857142857; // 1.0/7.0
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

// 2D Simplex noise (for convenience)
float snoise2(vec2 v) {
  return snoise(vec3(v, 0.0));
}
`, p = `
// Compute triplanar blend weights from world normal
vec3 triplanarBlend(vec3 normal) {
  vec3 blend = abs(normal);
  // Sharpen the blend with power function
  blend = pow(blend, vec3(4.0));
  // Normalize so weights sum to 1
  blend /= (blend.x + blend.y + blend.z);
  return blend;
}

// Sample a value using triplanar projection
// valueX: value sampled using YZ coords
// valueY: value sampled using XZ coords
// valueZ: value sampled using XY coords
float triplanarSample(float valueX, float valueY, float valueZ, vec3 blend) {
  return valueX * blend.x + valueY * blend.y + valueZ * blend.z;
}

// Sample a color using triplanar projection
vec3 triplanarSampleVec3(vec3 valueX, vec3 valueY, vec3 valueZ, vec3 blend) {
  return valueX * blend.x + valueY * blend.y + valueZ * blend.z;
}
`, m = { key: `brushed-metal`, vertexShader: `
#include <common>
#include <logdepthbuf_pars_vertex>

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;

  #include <logdepthbuf_vertex>
}
`, fragmentShader: `
#include <logdepthbuf_pars_fragment>

${f}
${p}

uniform vec3 uBaseColor;
uniform float uMetalness;
uniform float uRoughness;
uniform float uStreakIntensity;
uniform float uStreakScale;
uniform vec3 uEmissive;
uniform float uEmissiveIntensity;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

// Brushed effect along one axis with noise variation
float brushedPattern(vec2 uv) {
  // Primary streak direction with high frequency
  float streak = snoise(vec3(uv.x * uStreakScale, uv.y * 2.0, 0.0));

  // Add finer detail streaks
  float fineStreak = snoise(vec3(uv.x * uStreakScale * 3.0, uv.y * 4.0, 1.0)) * 0.3;

  // Combine for realistic brushed look
  return (streak + fineStreak) * uStreakIntensity;
}

void main() {
  // Triplanar blend for seamless projection
  vec3 blend = triplanarBlend(vWorldNormal);

  // Sample brushed pattern from each axis
  float patternX = brushedPattern(vWorldPosition.yz);
  float patternY = brushedPattern(vWorldPosition.xz);
  float patternZ = brushedPattern(vWorldPosition.xy);

  float pattern = triplanarSample(patternX, patternY, patternZ, blend);

  // Apply subtle color variation
  vec3 color = uBaseColor + vec3(pattern * 0.03);

  // Roughness variation based on streak direction
  float roughnessVar = uRoughness + pattern * 0.08;

  // Simple lighting approximation (will be improved with proper PBR)
  vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
  float diffuse = max(dot(vWorldNormal, lightDir), 0.0);
  float ambient = 0.3;

  // Anisotropic highlight simulation
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  vec3 halfDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(vWorldNormal, halfDir), 0.0), mix(16.0, 64.0, 1.0 - roughnessVar));

  // Metallic reflection
  vec3 reflectColor = uBaseColor * spec * uMetalness;

  // Final color
  vec3 finalColor = color * (ambient + diffuse * 0.7) + reflectColor;

  // Add emissive
  finalColor += uEmissive * uEmissiveIntensity;

  gl_FragColor = vec4(finalColor, 1.0);

  #include <logdepthbuf_fragment>
}
`, uniforms: { uBaseColor: { value: new c(0.8, 0.8, 0.85) }, uMetalness: { value: 0.9 }, uRoughness: { value: 0.3 }, uStreakIntensity: { value: 0.5 }, uStreakScale: { value: 80 }, uEmissive: { value: new c(0, 0, 0) }, uEmissiveIntensity: { value: 0 } } }, h = `
// Fractal Brownian Motion - 4 octaves
float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;

  for (int i = 0; i < 4; i++) {
    value += amplitude * snoise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }

  return value;
}

// FBM with configurable octaves
float fbm(vec3 p, int octaves) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;

  for (int i = 0; i < octaves; i++) {
    value += amplitude * snoise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }

  return value;
}

// 2D FBM
float fbm2(vec2 p) {
  return fbm(vec3(p, 0.0));
}
`, g = { key: `wood`, vertexShader: `
#include <common>
#include <logdepthbuf_pars_vertex>

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;

  #include <logdepthbuf_vertex>
}
`, fragmentShader: `
#include <logdepthbuf_pars_fragment>

${f}
${h}
${p}

uniform vec3 uDarkWood;
uniform vec3 uLightWood;
uniform float uRingScale;
uniform float uRingDistortion;
uniform float uGrainScale;
uniform vec3 uEmissive;
uniform float uEmissiveIntensity;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

// Wood grain pattern
float woodPattern(vec2 uv) {
  // Ring pattern from center
  float dist = length(uv);

  // Add noise distortion to rings
  float distortion = snoise(vec3(uv * uGrainScale, 0.0)) * uRingDistortion;

  // Create rings with noise modulation
  float rings = sin((dist + distortion) * uRingScale);

  // Add fine grain detail
  float grain = fbm(vec3(uv * uGrainScale * 2.0, 0.5)) * 0.2;

  // Combine rings and grain
  return rings * 0.5 + 0.5 + grain;
}

void main() {
  // Triplanar blend
  vec3 blend = triplanarBlend(vWorldNormal);

  // Sample wood pattern from each projection axis
  // Use XZ for top/bottom, YZ and XY for sides
  float patternX = woodPattern(vWorldPosition.yz);
  float patternY = woodPattern(vWorldPosition.xz);
  float patternZ = woodPattern(vWorldPosition.xy);

  float pattern = triplanarSample(patternX, patternY, patternZ, blend);

  // Mix between dark and light wood colors
  vec3 color = mix(uDarkWood, uLightWood, pattern);

  // Add subtle color variation for realism
  float colorNoise = snoise(vWorldPosition * 0.5) * 0.03;
  color += vec3(colorNoise);

  // Simple lighting
  vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
  float diffuse = max(dot(vWorldNormal, lightDir), 0.0);
  float ambient = 0.35;

  // Wood has subtle sheen
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  vec3 halfDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(vWorldNormal, halfDir), 0.0), 16.0) * 0.15;

  vec3 finalColor = color * (ambient + diffuse * 0.65) + vec3(spec);

  // Add emissive
  finalColor += uEmissive * uEmissiveIntensity;

  gl_FragColor = vec4(finalColor, 1.0);

  #include <logdepthbuf_fragment>
}
`, uniforms: { uDarkWood: { value: new c(0.3, 0.2, 0.12) }, uLightWood: { value: new c(0.55, 0.4, 0.28) }, uRingScale: { value: 20 }, uRingDistortion: { value: 0.3 }, uGrainScale: { value: 4 }, uEmissive: { value: new c(0, 0, 0) }, uEmissiveIntensity: { value: 0 } } }, _ = { uDarkWood: new c(0.25, 0.15, 0.1), uLightWood: new c(0.45, 0.3, 0.2) }, v = { uDarkWood: new c(0.5, 0.38, 0.25), uLightWood: new c(0.7, 0.55, 0.38) }, y = { uDarkWood: new c(0.7, 0.6, 0.4), uLightWood: new c(0.9, 0.8, 0.6) }, b = { key: `carbon-fiber`, vertexShader: `
#include <common>
#include <logdepthbuf_pars_vertex>

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;

  #include <logdepthbuf_vertex>
}
`, fragmentShader: `
#include <logdepthbuf_pars_fragment>

${f}
${p}

uniform vec3 uFiberColor;
uniform vec3 uResinColor;
uniform float uWeaveScale;
uniform float uWeaveContrast;
uniform vec3 uEmissive;
uniform float uEmissiveIntensity;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

// Weave pattern - creates interlocking grid
float weavePattern(vec2 uv) {
  vec2 scaled = uv * uWeaveScale;

  // Create checker pattern for over/under weave
  float checker = step(0.5, fract(scaled.x)) * step(0.5, fract(scaled.y)) +
                  step(0.5, fract(scaled.x + 0.5)) * step(0.5, fract(scaled.y + 0.5));

  // Create the fiber direction
  float fiberX = sin(scaled.x * 3.14159 * 2.0);
  float fiberY = sin(scaled.y * 3.14159 * 2.0);

  // Combine into weave with depth effect
  float weave = mix(abs(fiberX), abs(fiberY), checker);

  // Add subtle noise for fiber texture
  float noise = snoise(vec3(scaled * 4.0, 0.0)) * 0.1;

  return clamp(weave + noise, 0.0, 1.0);
}

void main() {
  // Triplanar blend
  vec3 blend = triplanarBlend(vWorldNormal);

  // Sample weave from each axis
  float patternX = weavePattern(vWorldPosition.yz);
  float patternY = weavePattern(vWorldPosition.xz);
  float patternZ = weavePattern(vWorldPosition.xy);

  float pattern = triplanarSample(patternX, patternY, patternZ, blend);

  // Enhance contrast
  pattern = pow(pattern, uWeaveContrast);

  // Mix fiber and resin colors
  vec3 color = mix(uResinColor, uFiberColor, pattern);

  // Lighting
  vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
  float diffuse = max(dot(vWorldNormal, lightDir), 0.0);
  float ambient = 0.25;

  // Carbon fiber has directional sheen
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  vec3 halfDir = normalize(lightDir + viewDir);

  // Anisotropic-ish specular based on weave direction
  float spec = pow(max(dot(vWorldNormal, halfDir), 0.0), 32.0);
  spec *= 0.4 + pattern * 0.3; // Varies with weave

  vec3 finalColor = color * (ambient + diffuse * 0.75) + vec3(spec * 0.3);

  // Add emissive
  finalColor += uEmissive * uEmissiveIntensity;

  gl_FragColor = vec4(finalColor, 1.0);

  #include <logdepthbuf_fragment>
}
`, uniforms: { uFiberColor: { value: new c(0.08, 0.08, 0.1) }, uResinColor: { value: new c(0.15, 0.15, 0.18) }, uWeaveScale: { value: 40 }, uWeaveContrast: { value: 1.2 }, uEmissive: { value: new c(0, 0, 0) }, uEmissiveIntensity: { value: 0 } } }, x = { key: `concrete`, vertexShader: `
#include <common>
#include <logdepthbuf_pars_vertex>

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;

  #include <logdepthbuf_vertex>
}
`, fragmentShader: `
#include <logdepthbuf_pars_fragment>

${f}
${h}
${p}

uniform vec3 uBaseColor;
uniform vec3 uAggregateColor;
uniform float uPoreScale;
uniform float uAggregateScale;
uniform float uRoughness;
uniform vec3 uEmissive;
uniform float uEmissiveIntensity;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

// Concrete surface pattern
vec3 concretePattern(vec3 pos) {
  // Base surface variation with FBM
  float surface = fbm(pos * uPoreScale) * 0.15;

  // Pores/voids (cellular noise approximation)
  float pores = 1.0 - smoothstep(0.0, 0.3, snoise(pos * uPoreScale * 2.0) + 0.5);

  // Aggregate particles (larger stones)
  float aggregate = smoothstep(0.4, 0.6, snoise(pos * uAggregateScale));

  // Fine sand texture
  float sand = snoise(pos * uPoreScale * 5.0) * 0.05;

  // Combine surface features
  float brightness = 1.0 + surface - pores * 0.15 + sand;

  return vec3(brightness, aggregate, pores);
}

void main() {
  // Triplanar blend
  vec3 blend = triplanarBlend(vWorldNormal);

  // Sample from each axis
  vec3 patternX = concretePattern(vec3(vWorldPosition.yz, 0.0));
  vec3 patternY = concretePattern(vec3(vWorldPosition.xz, 1.0));
  vec3 patternZ = concretePattern(vec3(vWorldPosition.xy, 2.0));

  vec3 pattern = triplanarSampleVec3(patternX, patternY, patternZ, blend);

  // Unpack pattern components
  float brightness = pattern.x;
  float aggregate = pattern.y;
  float pores = pattern.z;

  // Mix colors
  vec3 color = uBaseColor * brightness;
  color = mix(color, uAggregateColor, aggregate * 0.4);

  // Darken pores slightly
  color *= 1.0 - pores * 0.1;

  // Lighting - concrete is matte
  vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
  float diffuse = max(dot(vWorldNormal, lightDir), 0.0);
  float ambient = 0.4;

  // Very subtle specular for slightly wet/polished concrete
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  vec3 halfDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(vWorldNormal, halfDir), 0.0), 8.0) * 0.05 * (1.0 - uRoughness);

  vec3 finalColor = color * (ambient + diffuse * 0.6) + vec3(spec);

  // Add emissive
  finalColor += uEmissive * uEmissiveIntensity;

  gl_FragColor = vec4(finalColor, 1.0);

  #include <logdepthbuf_fragment>
}
`, uniforms: { uBaseColor: { value: new c(0.6, 0.6, 0.58) }, uAggregateColor: { value: new c(0.5, 0.5, 0.48) }, uPoreScale: { value: 3 }, uAggregateScale: { value: 1.5 }, uRoughness: { value: 0.85 }, uEmissive: { value: new c(0, 0, 0) }, uEmissiveIntensity: { value: 0 } } }, S = { key: `pcb-copper`, vertexShader: `
#include <common>
#include <logdepthbuf_pars_vertex>

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;

  #include <logdepthbuf_vertex>
}
`, fragmentShader: `
#include <logdepthbuf_pars_fragment>

uniform vec3 uBaseColor;
uniform float uMetalness;
uniform float uRoughness;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main() {
  vec3 normal = normalize(vWorldNormal);

  // Simple PBR-like lighting
  vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
  float diffuse = max(dot(normal, lightDir), 0.0);
  float ambient = 0.3;

  // Specular highlight
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  vec3 halfDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(normal, halfDir), 0.0), mix(16.0, 128.0, 1.0 - uRoughness));

  // Metallic reflection tinted by base color
  vec3 reflectColor = uBaseColor * spec * uMetalness;

  vec3 finalColor = uBaseColor * (ambient + diffuse * 0.7) + reflectColor;

  gl_FragColor = vec4(finalColor, 1.0);

  #include <logdepthbuf_fragment>
}
`, uniforms: { uBaseColor: { value: new c(0.84, 0.68, 0.37) }, uMetalness: { value: 0.95 }, uRoughness: { value: 0.15 } } }, C = /* @__PURE__ */ new Map([[`brushed-metal`, m], [`wood`, g], [`carbon-fiber`, b], [`concrete`, x], [`pcb-copper`, S]]), w = { aluminum: `brushed-metal`, steel: `brushed-metal`, titanium: `brushed-metal`, walnut: `wood`, oak: `wood`, bamboo: `wood`, "carbon-fiber": `carbon-fiber`, concrete: `concrete`, __pcb_copper__: `pcb-copper` }, T = { walnut: _, oak: v, bamboo: y }, E = { aluminum: { uBaseColor: new c(0.8, 0.8, 0.85), uMetalness: 0.9, uRoughness: 0.3 }, steel: { uBaseColor: new c(0.7, 0.7, 0.72), uMetalness: 0.95, uRoughness: 0.25 }, titanium: { uBaseColor: new c(0.6, 0.6, 0.65), uMetalness: 0.85, uRoughness: 0.4 } };
function D(e2) {
  return e2 in w;
}
function O(e2) {
  let t2 = w[e2];
  if (!t2) return null;
  let n2 = C.get(t2);
  if (!n2) return null;
  let r2 = {};
  for (let [e3, t3] of Object.entries(n2.uniforms)) r2[e3] = t3.value instanceof c ? { value: t3.value.clone() } : { value: t3.value };
  if (t2 === `wood` && T[e2]) {
    let t3 = T[e2];
    r2.uDarkWood = { value: t3.uDarkWood.clone() }, r2.uLightWood = { value: t3.uLightWood.clone() };
  }
  if (t2 === `brushed-metal` && E[e2]) {
    let t3 = E[e2];
    r2.uBaseColor = { value: t3.uBaseColor.clone() }, r2.uMetalness = { value: t3.uMetalness }, r2.uRoughness = { value: t3.uRoughness };
  }
  return { ...n2, uniforms: r2 };
}
export {
  u as i,
  D as n,
  d as r,
  O as t
};
