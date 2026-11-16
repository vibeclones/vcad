function e(e2, t2) {
  if (!e2 || e2.length < 3) return null;
  let n2 = 1 / 0, r2 = 1 / 0, i = 1 / 0, a = -1 / 0, o = -1 / 0, s = -1 / 0;
  for (let c = 0; c + 2 < e2.length; c += 3) {
    let l = e2[c], u = e2[c + 1], d = e2[c + 2];
    t2 && ([l, u, d] = t2(l, u, d)), l < n2 && (n2 = l), l > a && (a = l), u < r2 && (r2 = u), u > o && (o = u), d < i && (i = d), d > s && (s = d);
  }
  return isFinite(n2) ? { min: [n2, r2, i], max: [a, o, s] } : null;
}
function t(e2) {
  if (e2.length === 0) return null;
  let t2 = [1 / 0, 1 / 0, 1 / 0], n2 = [-1 / 0, -1 / 0, -1 / 0];
  for (let r2 of e2) for (let e3 = 0; e3 < 3; e3++) r2.min[e3] < t2[e3] && (t2[e3] = r2.min[e3]), r2.max[e3] > n2[e3] && (n2[e3] = r2.max[e3]);
  return { min: t2, max: n2 };
}
function n(e2, t2, n2 = 0) {
  return e2.min[0] - n2 <= t2.max[0] && e2.max[0] + n2 >= t2.min[0] && e2.min[1] - n2 <= t2.max[1] && e2.max[1] + n2 >= t2.min[1] && e2.min[2] - n2 <= t2.max[2] && e2.max[2] + n2 >= t2.min[2];
}
function r(t2, r2, i = 0, a) {
  if (r2.length === 0) return [];
  let o = /* @__PURE__ */ new Set();
  for (let s of t2) {
    let t3 = e(s.positions, a);
    t3 && r2.some((e2) => n(t3, e2, i)) && o.add(s.footprint_ref);
  }
  return [...o];
}
export {
  r as n,
  t as r,
  e as t
};
