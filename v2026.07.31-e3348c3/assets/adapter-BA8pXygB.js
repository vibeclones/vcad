function B(e) {
  let t = 2166136261, n = 2654435769, r = 3735928559, o = 3405691582;
  for (let c = 0; c < e.length; c++) {
    const a = e.charCodeAt(c);
    t = Math.imul(t ^ a, 16777619), n = Math.imul(n ^ a, 2246822507), r = Math.imul(r ^ a, 3266489909), o = Math.imul(o ^ a, 668265263);
  }
  const u = (c) => (c >>> 0).toString(16).padStart(8, "0");
  return u(t) + u(n) + u(r) + u(o);
}
function V(e) {
  return e.replace(/(:\s*)?-?[\d.]+\s*mm\b.*$/i, "").replace(/\bbelow minimum\b.*$/i, "").trim();
}
function C(e) {
  const t = e.message;
  if (/^\s*Short\b/i.test(t) || /connected by copper/i.test(t)) return { cause: "routing" };
  if (/Unconnected net/i.test(t)) return { cause: "connectivity" };
  if (/Unstitched pad/i.test(t)) return { cause: "connectivity" };
  if (/Same-net bypass/i.test(t)) return { cause: "routing" };
  const n = [...t.matchAll(/pad\s+([A-Za-z]+\d+)\.\w+/g)].map((o) => o[1]);
  if (n.length >= 2) {
    const o = [n[0], n[1]];
    return { cause: n[0] === n[1] ? "footprint" : "placement", refs: o };
  }
  const r = /\bon\s+([A-Za-z]+\d+)\b/.exec(t);
  return r && (/\bdrill\b/i.test(t) || /annular ring/i.test(t)) ? { cause: "footprint", refs: [r[1], r[1]] } : /\btrace\b/i.test(t) ? { cause: "routing" } : /Hole-to-hole/i.test(t) ? { cause: "via" } : { cause: "unknown" };
}
const p = (e, t = 2) => {
  const n = 10 ** t;
  return Math.round(e * n) / n;
};
function E(e) {
  const t = e.position ? p(e.position.x, 2) : "?", n = e.position ? p(e.position.y, 2) : "?";
  return `${e.rule}|${t}|${n}|${V(e.message)}`;
}
function H(e, t) {
  return t === "fixed" ? "credit" : t === "introduced" ? "blame" : e === "connectivity" || e === "routing" ? "carried-over" : "pre-existing";
}
function R(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = E(n), o = t.get(r);
    if (o) o.count++;
    else {
      const { cause: u, refs: c } = C(n);
      t.set(r, { rep: n, cause: u, refs: c, count: 1 });
    }
  }
  return t;
}
function y(e, t, n) {
  const r = e.cause;
  return { rule: e.rep.rule, cause: r, status: t, blame: H(r, t), count: n, message: e.rep.message, position: e.rep.position, refs: e.refs };
}
function v(e) {
  var _a;
  return e.details && e.details.length === e.violations ? { list: e.details, full: true } : e.details ? { list: e.details, full: false } : { list: e.sample ?? [], full: (((_a = e.sample) == null ? void 0 : _a.length) ?? 0) >= e.violations };
}
function N(e, t) {
  const n = {};
  for (const r of /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)])) {
    const o = (t[r] ?? 0) - (e[r] ?? 0);
    o !== 0 && (n[r] = o);
  }
  return n;
}
function h(e) {
  if (Array.isArray(e)) return e.map(h);
  if (e && typeof e == "object") {
    const t = {};
    for (const n of Object.keys(e).sort()) t[n] = h(e[n]);
    return t;
  }
  return e;
}
function U(e) {
  const t = (e.details ?? e.sample ?? []).map((r) => {
    const o = r.position ? p(r.position.x, 4) : "?", u = r.position ? p(r.position.y, 4) : "?";
    return `${r.rule}|${r.severity}|${o}|${u}|${r.message}`;
  }).sort(), n = { violations: e.violations, errors: e.errors, warnings: e.warnings, byRule: e.byRule, items: t };
  return B(JSON.stringify(h(n)));
}
function Z(e) {
  const t = Object.values(e).some((r) => r > 0), n = Object.values(e).some((r) => r < 0);
  return !t && !n ? "no-op" : t && n ? "improved-with-regressions" : t ? "regression" : "improved";
}
function F(e, t) {
  const n = v(e.before), r = v(e.after), o = R(n.list), u = R(r.list), c = [], a = [], b = [], w = /* @__PURE__ */ new Set([...o.keys(), ...u.keys()]);
  for (const s of w) {
    const i = o.get(s), l = u.get(s), f = (i == null ? void 0 : i.count) ?? 0, d = (l == null ? void 0 : l.count) ?? 0, k = Math.min(f, d);
    k > 0 && b.push(y(l ?? i, "persisted", k)), d > f && c.push(y(l, "introduced", d - f)), f > d && a.push(y(i, "fixed", f - d));
  }
  const S = (s, i) => s.filter(i).reduce((l, f) => l + f.count, 0), m = N(e.before.byRule, e.after.byRule), $ = e.after.violations - e.before.violations, M = a.reduce((s, i) => s + i.count, 0), O = c.reduce((s, i) => s + i.count, 0), j = S(b, (s) => s.blame === "pre-existing"), A = Math.max(0, m.Short ?? 0), g = Z(m), z = g === "regression" || g === "improved-with-regressions", x = (s) => (/^\s*Short\b/i.test(s.message) ? 0 : s.cause === "routing" ? 1 : 2) * 1e6 - s.count;
  return c.sort((s, i) => x(s) - x(i)), a.sort((s, i) => i.count - s.count), b.sort((s, i) => i.count - s.count), { index: t, tool: e.tool, args: e.args, before: { violations: e.before.violations, errors: e.before.errors, byRule: e.before.byRule }, after: { violations: e.after.violations, errors: e.after.errors, byRule: e.after.byRule }, deltaByRule: m, deltaTotal: $, introduced: c, fixed: a, persisted: b, tally: { credited: M, blamed: O, preExisting: j, shortsIntroduced: A }, regression: z, verdict: g, coverage: n.full && r.full ? "full" : "partial", fingerprint: U(e.after) };
}
function G(e) {
  const t = {};
  let n = 0, r = 0;
  for (const o of e) t[o.rule] = (t[o.rule] ?? 0) + 1, o.severity === "Error" ? n++ : o.severity === "Warning" && r++;
  return { violations: e.length, errors: n, warnings: r, byRule: t, details: e, sample: e, sampleCapped: false };
}
export {
  F as b,
  C as c,
  U as f,
  B as h,
  G as s
};
