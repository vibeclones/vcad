import { a, V as A, j as P, F as R } from "./three-tnxpQXqG.js";
const j = 10, z = 6;
function F(n, o, s = new a()) {
  const t = o * 3, e = n.positions[t] ?? 0, i = n.positions[t + 1] ?? 0, c = n.positions[t + 2] ?? 0;
  return s.set(e, c, -i), s;
}
function T(n, o, s, t = new A()) {
  const e = n.clone().project(o);
  return t.set((e.x + 1) / 2 * s.width, (1 - e.y) / 2 * s.height), t;
}
function G(n, o, s) {
  const t = s.x - o.x, e = s.y - o.y, i = n.x - o.x, c = n.y - o.y, r = t * t + e * e;
  if (r < 1e-6) return Math.hypot(i, c);
  let p = (i * t + c * e) / r;
  p = Math.max(0, Math.min(1, p));
  const l = o.x + p * t - n.x, f = o.y + p * e - n.y;
  return Math.hypot(l, f);
}
function X(n, o, s) {
  const t = Math.min(n, o), e = Math.max(n, o);
  return t * s + e;
}
function J(n) {
  const { triIndex: o, hitPoint: s, mesh: t, partId: e, filter: i, camera: c, viewport: r } = n;
  if (i === "body") return { kind: "part", id: e };
  const p = t.indices.length / 3;
  if (o < 0 || o >= p) return null;
  const l = t.indices[o * 3], f = t.indices[o * 3 + 1], y = t.indices[o * 3 + 2], D = [l, f, y], C = t.positions.length / 3, w = new a(), V = new a(), v = new a();
  F(t, l, w), F(t, f, V), F(t, y, v);
  const E = new A();
  T(s, c, r, E);
  const b = new A(), x = new A(), u = new A();
  T(w, c, r, b), T(V, c, r, x), T(v, c, r, u);
  const k = i === "vertex" || i === "auto", M = i === "edge" || i === "auto", S = i === "face" || i === "auto";
  if (k) {
    const N = [b, x, u];
    let g = -1, h = j;
    for (let d = 0; d < 3; d++) {
      const _ = N[d].distanceTo(E);
      _ < h && (h = _, g = d);
    }
    if (g >= 0) return { kind: "vertex", partId: e, vertexId: D[g] };
  }
  if (M) {
    const N = [[b, x, l, f], [x, u, f, y], [u, b, y, l]];
    let g = -1, h = z;
    for (let d = 0; d < 3; d++) {
      const [_, O] = N[d], I = G(E, _, O);
      I < h && (h = I, g = d);
    }
    if (g >= 0) {
      const [, , d, _] = N[g];
      return { kind: "edge", partId: e, edgeId: X(d, _, C) };
    }
  }
  return S ? { kind: "face", partId: e, faceIndex: o } : null;
}
function B(n, o) {
  return { a: Math.floor(n / o), b: n % o };
}
const q = 0.01, H = 0.01;
function Q(n, o) {
  const s = n.indices, t = n.positions, e = s[o * 3], i = s[o * 3 + 1], c = s[o * 3 + 2], r = new a(t[e * 3], t[e * 3 + 1], t[e * 3 + 2]), p = new a(t[i * 3], t[i * 3 + 1], t[i * 3 + 2]), l = new a(t[c * 3], t[c * 3 + 1], t[c * 3 + 2]), f = p.clone().sub(r).cross(l.clone().sub(r)).normalize(), y = f.dot(r), D = s.length / 3, C = [], w = new a(), V = new a(), v = new a(), E = new a(), b = new a(), x = new a();
  for (let u = 0; u < D; u++) {
    const k = s[u * 3], M = s[u * 3 + 1], S = s[u * 3 + 2];
    w.set(t[k * 3], t[k * 3 + 1], t[k * 3 + 2]), V.set(t[M * 3], t[M * 3 + 1], t[M * 3 + 2]), v.set(t[S * 3], t[S * 3 + 1], t[S * 3 + 2]), E.subVectors(V, w), b.subVectors(v, w), x.copy(E).cross(b).normalize(), !(x.dot(f) < 1 - q) && (Math.abs(f.dot(w) - y) > H || C.push(u));
  }
  return C;
}
function U(n, o) {
  const s = new P(), t = [];
  for (const e of o) {
    const i = n.indices[e * 3], c = n.indices[e * 3 + 1], r = n.indices[e * 3 + 2];
    t.push(n.positions[i * 3], n.positions[i * 3 + 1], n.positions[i * 3 + 2], n.positions[c * 3], n.positions[c * 3 + 1], n.positions[c * 3 + 2], n.positions[r * 3], n.positions[r * 3 + 1], n.positions[r * 3 + 2]);
  }
  return s.setAttribute("position", new R(t, 3)), s.computeVertexNormals(), s;
}
function L(n, o) {
  const s = o * 3;
  return new a(n.positions[s] ?? 0, n.positions[s + 1] ?? 0, n.positions[s + 2] ?? 0);
}
function W(n, o) {
  const s = n.positions.length / 3, { a: t, b: e } = B(o, s);
  return { a: L(n, t), b: L(n, e) };
}
export {
  L as a,
  U as b,
  Q as f,
  W as g,
  J as p
};
