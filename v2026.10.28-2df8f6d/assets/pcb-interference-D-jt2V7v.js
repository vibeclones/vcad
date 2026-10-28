function I(n, f) {
  if (!n || n.length < 3) return null;
  let i = 1 / 0, e = 1 / 0, t = 1 / 0, m = -1 / 0, r = -1 / 0, x = -1 / 0;
  for (let y = 0; y + 2 < n.length; y += 3) {
    let l = n[y], u = n[y + 1], o = n[y + 2];
    f && ([l, u, o] = f(l, u, o)), l < i && (i = l), l > m && (m = l), u < e && (e = u), u > r && (r = u), o < t && (t = o), o > x && (x = o);
  }
  return isFinite(i) ? { min: [i, e, t], max: [m, r, x] } : null;
}
function c(n) {
  if (n.length === 0) return null;
  const f = [1 / 0, 1 / 0, 1 / 0], i = [-1 / 0, -1 / 0, -1 / 0];
  for (const e of n) for (let t = 0; t < 3; t++) e.min[t] < f[t] && (f[t] = e.min[t]), e.max[t] > i[t] && (i[t] = e.max[t]);
  return { min: f, max: i };
}
function a(n, f, i = 0) {
  return n.min[0] - i <= f.max[0] && n.max[0] + i >= f.min[0] && n.min[1] - i <= f.max[1] && n.max[1] + i >= f.min[1] && n.min[2] - i <= f.max[2] && n.max[2] + i >= f.min[2];
}
function s(n, f, i = 0, e) {
  if (f.length === 0) return [];
  const t = /* @__PURE__ */ new Set();
  for (const m of n) {
    const r = I(m.positions, e);
    r && f.some((x) => a(r, x, i)) && t.add(m.footprint_ref);
  }
  return [...t];
}
export {
  I as a,
  s as i,
  c as m
};
