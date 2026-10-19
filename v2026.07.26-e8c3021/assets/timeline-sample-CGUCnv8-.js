function f(r, e) {
  const t = r.keys;
  if (t.length === 0) return null;
  const s = t[0];
  if (e <= s.t) return s.value;
  const a = t[t.length - 1];
  if (e >= a.t) return a.value;
  const c = t.findIndex((l) => l.t > e);
  if (c <= 0) return a.value;
  const o = t[c - 1], u = t[c], i = u.t - o.t;
  let n = i <= 0 ? 1 : (e - o.t) / i;
  switch (u.ease) {
    case "step":
      n = n >= 1 ? 1 : 0;
      break;
    case "ease-in-out":
      n = n * n * (3 - 2 * n);
      break;
  }
  return o.value + (u.value - o.value) * n;
}
function k(r, e) {
  const t = /* @__PURE__ */ new Map();
  for (const s of r.tracks) {
    if (s.target.type !== "Joint") continue;
    const a = f(s, e);
    a !== null && t.set(s.target.jointId, a);
  }
  return t;
}
function p(r) {
  return !!(r == null ? void 0 : r.tracks.some((e) => e.target.type === "Joint" && e.keys.length > 0));
}
export {
  p as h,
  k as s
};
