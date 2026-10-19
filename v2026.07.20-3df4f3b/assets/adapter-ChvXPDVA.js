import { ak as M } from "./index-B2PsV3Ii.js";
function V(e) {
  return e.replace(/(:\s*)?-?[\d.]+\s*mm\b.*$/i, "").replace(/\bbelow minimum\b.*$/i, "").trim();
}
function E(e) {
  const t = e.message;
  if (/^\s*Short\b/i.test(t) || /connected by copper/i.test(t)) return { cause: "routing" };
  if (/Unconnected net/i.test(t)) return { cause: "connectivity" };
  if (/Unstitched pad/i.test(t)) return { cause: "connectivity" };
  if (/Same-net bypass/i.test(t)) return { cause: "routing" };
  const r = [...t.matchAll(/pad\s+([A-Za-z]+\d+)\.\w+/g)].map((s) => s[1]);
  if (r.length >= 2) {
    const s = [r[0], r[1]];
    return { cause: r[0] === r[1] ? "footprint" : "placement", refs: s };
  }
  const n = /\bon\s+([A-Za-z]+\d+)\b/.exec(t);
  return n && (/\bdrill\b/i.test(t) || /annular ring/i.test(t)) ? { cause: "footprint", refs: [n[1], n[1]] } : /\btrace\b/i.test(t) ? { cause: "routing" } : /Hole-to-hole/i.test(t) ? { cause: "via" } : { cause: "unknown" };
}
const b = (e, t = 2) => {
  const r = 10 ** t;
  return Math.round(e * r) / r;
};
function C(e) {
  const t = e.position ? b(e.position.x, 2) : "?", r = e.position ? b(e.position.y, 2) : "?";
  return `${e.rule}|${t}|${r}|${V(e.message)}`;
}
function H(e, t) {
  return t === "fixed" ? "credit" : t === "introduced" ? "blame" : e === "connectivity" || e === "routing" ? "carried-over" : "pre-existing";
}
function R(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e) {
    const n = C(r), s = t.get(n);
    if (s) s.count++;
    else {
      const { cause: u, refs: a } = E(r);
      t.set(n, { rep: r, cause: u, refs: a, count: 1 });
    }
  }
  return t;
}
function g(e, t, r) {
  const n = e.cause;
  return { rule: e.rep.rule, cause: n, status: t, blame: H(n, t), count: r, message: e.rep.message, position: e.rep.position, refs: e.refs };
}
function v(e) {
  var _a;
  return e.details && e.details.length === e.violations ? { list: e.details, full: true } : e.details ? { list: e.details, full: false } : { list: e.sample ?? [], full: (((_a = e.sample) == null ? void 0 : _a.length) ?? 0) >= e.violations };
}
function N(e, t) {
  const r = {};
  for (const n of /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)])) {
    const s = (t[n] ?? 0) - (e[n] ?? 0);
    s !== 0 && (r[n] = s);
  }
  return r;
}
function h(e) {
  if (Array.isArray(e)) return e.map(h);
  if (e && typeof e == "object") {
    const t = {};
    for (const r of Object.keys(e).sort()) t[r] = h(e[r]);
    return t;
  }
  return e;
}
function U(e) {
  const t = (e.details ?? e.sample ?? []).map((n) => {
    const s = n.position ? b(n.position.x, 4) : "?", u = n.position ? b(n.position.y, 4) : "?";
    return `${n.rule}|${n.severity}|${s}|${u}|${n.message}`;
  }).sort(), r = { violations: e.violations, errors: e.errors, warnings: e.warnings, byRule: e.byRule, items: t };
  return M(JSON.stringify(h(r)));
}
function Z(e) {
  const t = Object.values(e).some((n) => n > 0), r = Object.values(e).some((n) => n < 0);
  return !t && !r ? "no-op" : t && r ? "improved-with-regressions" : t ? "regression" : "improved";
}
function G(e, t) {
  const r = v(e.before), n = v(e.after), s = R(r.list), u = R(n.list), a = [], d = [], p = [], w = /* @__PURE__ */ new Set([...s.keys(), ...u.keys()]);
  for (const o of w) {
    const i = s.get(o), f = u.get(o), c = (i == null ? void 0 : i.count) ?? 0, l = (f == null ? void 0 : f.count) ?? 0, x = Math.min(c, l);
    x > 0 && p.push(g(f ?? i, "persisted", x)), l > c && a.push(g(f, "introduced", l - c)), c > l && d.push(g(i, "fixed", c - l));
  }
  const $ = (o, i) => o.filter(i).reduce((f, c) => f + c.count, 0), m = N(e.before.byRule, e.after.byRule), S = e.after.violations - e.before.violations, O = d.reduce((o, i) => o + i.count, 0), j = a.reduce((o, i) => o + i.count, 0), A = $(p, (o) => o.blame === "pre-existing"), z = Math.max(0, m.Short ?? 0), y = Z(m), B = y === "regression" || y === "improved-with-regressions", k = (o) => (/^\s*Short\b/i.test(o.message) ? 0 : o.cause === "routing" ? 1 : 2) * 1e6 - o.count;
  return a.sort((o, i) => k(o) - k(i)), d.sort((o, i) => i.count - o.count), p.sort((o, i) => i.count - o.count), { index: t, tool: e.tool, args: e.args, before: { violations: e.before.violations, errors: e.before.errors, byRule: e.before.byRule }, after: { violations: e.after.violations, errors: e.after.errors, byRule: e.after.byRule }, deltaByRule: m, deltaTotal: S, introduced: a, fixed: d, persisted: p, tally: { credited: O, blamed: j, preExisting: A, shortsIntroduced: z }, regression: B, verdict: y, coverage: r.full && n.full ? "full" : "partial", fingerprint: U(e.after) };
}
function I(e) {
  const t = {};
  let r = 0, n = 0;
  for (const s of e) t[s.rule] = (t[s.rule] ?? 0) + 1, s.severity === "Error" ? r++ : s.severity === "Warning" && n++;
  return { violations: e.length, errors: r, warnings: n, byRule: t, details: e, sample: e, sampleCapped: false };
}
export {
  G as b,
  E as c,
  U as f,
  I as s
};
