import { Cn as e, W as t, lt as n, wn as r } from "./three-Dweqhmle.js";
var i = 10, a = 6;
function o(e2, t2, n2 = new r()) {
  let i2 = t2 * 3, a2 = e2.positions[i2] ?? 0, o2 = e2.positions[i2 + 1] ?? 0, s2 = e2.positions[i2 + 2] ?? 0;
  return n2.set(a2, s2, -o2), n2;
}
function s(t2, n2, r2, i2 = new e()) {
  let a2 = t2.clone().project(n2);
  return i2.set((a2.x + 1) / 2 * r2.width, (1 - a2.y) / 2 * r2.height), i2;
}
function c(e2, t2, n2) {
  let r2 = n2.x - t2.x, i2 = n2.y - t2.y, a2 = e2.x - t2.x, o2 = e2.y - t2.y, s2 = r2 * r2 + i2 * i2;
  if (s2 < 1e-6) return Math.hypot(a2, o2);
  let c2 = (a2 * r2 + o2 * i2) / s2;
  c2 = Math.max(0, Math.min(1, c2));
  let l2 = t2.x + c2 * r2 - e2.x, u2 = t2.y + c2 * i2 - e2.y;
  return Math.hypot(l2, u2);
}
function l(e2, t2, n2) {
  let r2 = Math.min(e2, t2), i2 = Math.max(e2, t2);
  return r2 * n2 + i2;
}
function u(t2) {
  let { triIndex: n2, hitPoint: u2, mesh: d2, partId: f2, filter: p2, camera: m2, viewport: h2 } = t2;
  if (p2 === `body`) return { kind: `part`, id: f2 };
  let g2 = d2.indices.length / 3;
  if (n2 < 0 || n2 >= g2) return null;
  let _ = d2.indices[n2 * 3], v = d2.indices[n2 * 3 + 1], y = d2.indices[n2 * 3 + 2], b = [_, v, y], x = d2.positions.length / 3, S = new r(), C = new r(), w = new r();
  o(d2, _, S), o(d2, v, C), o(d2, y, w);
  let T = new e();
  s(u2, m2, h2, T);
  let E = new e(), D = new e(), O = new e();
  s(S, m2, h2, E), s(C, m2, h2, D), s(w, m2, h2, O);
  let k = p2 === `vertex` || p2 === `auto`, A = p2 === `edge` || p2 === `auto`, j = p2 === `face` || p2 === `auto`;
  if (k) {
    let e2 = [E, D, O], t3 = -1, n3 = i;
    for (let r2 = 0; r2 < 3; r2++) {
      let i2 = e2[r2].distanceTo(T);
      i2 < n3 && (n3 = i2, t3 = r2);
    }
    if (t3 >= 0) return { kind: `vertex`, partId: f2, vertexId: b[t3] };
  }
  if (A) {
    let e2 = [[E, D, _, v], [D, O, v, y], [O, E, y, _]], t3 = -1, n3 = a;
    for (let r2 = 0; r2 < 3; r2++) {
      let [i2, a2] = e2[r2], o2 = c(T, i2, a2);
      o2 < n3 && (n3 = o2, t3 = r2);
    }
    if (t3 >= 0) {
      let [, , n4, r2] = e2[t3];
      return { kind: `edge`, partId: f2, edgeId: l(n4, r2, x) };
    }
  }
  return j ? { kind: `face`, partId: f2, faceIndex: n2 } : null;
}
function d(e2, t2) {
  return { a: Math.floor(e2 / t2), b: e2 % t2 };
}
var f = 0.01;
function p(e2, t2) {
  let n2 = e2.indices, i2 = e2.positions, a2 = n2[t2 * 3], o2 = n2[t2 * 3 + 1], s2 = n2[t2 * 3 + 2], c2 = new r(i2[a2 * 3], i2[a2 * 3 + 1], i2[a2 * 3 + 2]), l2 = new r(i2[o2 * 3], i2[o2 * 3 + 1], i2[o2 * 3 + 2]), u2 = new r(i2[s2 * 3], i2[s2 * 3 + 1], i2[s2 * 3 + 2]), d2 = l2.clone().sub(c2).cross(u2.clone().sub(c2)).normalize(), p2 = d2.dot(c2), m2 = n2.length / 3, h2 = [], g2 = new r(), _ = new r(), v = new r(), y = new r(), b = new r(), x = new r();
  for (let e3 = 0; e3 < m2; e3++) {
    let t3 = n2[e3 * 3], r2 = n2[e3 * 3 + 1], a3 = n2[e3 * 3 + 2];
    g2.set(i2[t3 * 3], i2[t3 * 3 + 1], i2[t3 * 3 + 2]), _.set(i2[r2 * 3], i2[r2 * 3 + 1], i2[r2 * 3 + 2]), v.set(i2[a3 * 3], i2[a3 * 3 + 1], i2[a3 * 3 + 2]), y.subVectors(_, g2), b.subVectors(v, g2), x.copy(y).cross(b).normalize(), x.dot(d2) < 0.99 || Math.abs(d2.dot(g2) - p2) > f || h2.push(e3);
  }
  return h2;
}
function m(e2, r2) {
  let i2 = new t(), a2 = [];
  for (let t2 of r2) {
    let n2 = e2.indices[t2 * 3], r3 = e2.indices[t2 * 3 + 1], i3 = e2.indices[t2 * 3 + 2];
    a2.push(e2.positions[n2 * 3], e2.positions[n2 * 3 + 1], e2.positions[n2 * 3 + 2], e2.positions[r3 * 3], e2.positions[r3 * 3 + 1], e2.positions[r3 * 3 + 2], e2.positions[i3 * 3], e2.positions[i3 * 3 + 1], e2.positions[i3 * 3 + 2]);
  }
  return i2.setAttribute(`position`, new n(a2, 3)), i2.computeVertexNormals(), i2;
}
function h(e2, t2) {
  let n2 = t2 * 3;
  return new r(e2.positions[n2] ?? 0, e2.positions[n2 + 1] ?? 0, e2.positions[n2 + 2] ?? 0);
}
function g(e2, t2) {
  let { a: n2, b: r2 } = d(t2, e2.positions.length / 3);
  return { a: h(e2, n2), b: h(e2, r2) };
}
export {
  u as a,
  h as i,
  p as n,
  g as r,
  m as t
};
