import { b as s, k as t } from "./three-fiber-GW7QWJN8.js";
import { cm as A, b7 as g, dl as C, dm as T, dn as F, dp as I, dq as S, bZ as D, bc as z, b4 as q, b5 as B, aH as O, bA as Q, bh as E, dr as U } from "./index-9ryf29cW.js";
import { c as G } from "./CaretLeft.es-Ok_Esb0T.js";
import { m as $ } from "./WarningCircle.es-Da16E4tB.js";
import { c as K } from "./three-drei-DdHLxnbx.js";
import "./three-tnxpQXqG.js";
const L = /* @__PURE__ */ new Map([["bold", s.createElement(s.Fragment, null, s.createElement("path", { d: "M224,196h-4V40a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12V76H96A12,12,0,0,0,84,88v36H48a12,12,0,0,0-12,12v60H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM164,52h32V196H164Zm-56,48h32v96H108ZM60,148H84v48H60Z" }))], ["duotone", s.createElement(s.Fragment, null, s.createElement("path", { d: "M208,40V208H152V40Z", opacity: "0.2" }), s.createElement("path", { d: "M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z" }))], ["fill", s.createElement(s.Fragment, null, s.createElement("path", { d: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z" }))], ["light", s.createElement(s.Fragment, null, s.createElement("path", { d: "M224,202H214V40a6,6,0,0,0-6-6H152a6,6,0,0,0-6,6V82H96a6,6,0,0,0-6,6v42H48a6,6,0,0,0-6,6v66H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM158,46h44V202H158ZM102,94h44V202H102ZM54,142H90v60H54Z" }))], ["regular", s.createElement(s.Fragment, null, s.createElement("path", { d: "M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z" }))], ["thin", s.createElement(s.Fragment, null, s.createElement("path", { d: "M224,204H212V40a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4V84H96a4,4,0,0,0-4,4v44H48a4,4,0,0,0-4,4v68H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8ZM156,44h48V204H156ZM100,92h48V204H100ZM52,140H92v64H52Z" }))]]), P = s.forwardRef((e, n) => s.createElement(A, { ref: n, ...e, weights: L }));
P.displayName = "ChartBarIcon";
const X = P, J = ["mass", "volume", "bbox_x", "bbox_y", "bbox_z"];
let N = 0;
const j = K((e, n) => ({ report: null, loading: false, error: null, quantity: "mass", computedFor: null, setQuantity: (o) => e({ quantity: o, report: null, computedFor: null }), compute: async (o, c, m) => {
  const u = ++N;
  if (e({ loading: true, error: null }), await new Promise((i) => setTimeout(i, 0)), u === N) try {
    const i = c.documentSensitivities(o, { quantities: [n().quantity], findTrustRadius: true });
    if (u !== N) return;
    e({ report: i, loading: false, computedFor: m });
  } catch (i) {
    if (u !== N) return;
    e({ report: null, loading: false, computedFor: null, error: i instanceof Error ? i.message : String(i) });
  }
}, invalidate: () => e({ report: null, computedFor: null, error: null }) }));
function Y(e) {
  return JSON.stringify({ n: Object.keys(e.nodes ?? {}).length, p: e.parameters, b: e.bindings });
}
function H(e) {
  if (!e.trust) return null;
  const n = e.trust.upper - e.trust.lower;
  return !Number.isFinite(n) || n <= 0 ? null : Math.abs(e.value) * n;
}
function W(e, n) {
  if (!e) return { rows: [], max: 0 };
  const o = e.table.rows.filter((m) => m.objective === n).slice().sort((m, u) => {
    const i = H(m), p = H(u);
    return i == null && p == null ? 0 : i == null ? 1 : p == null ? -1 : p - i;
  }), c = o.reduce((m, u) => Math.max(m, H(u) ?? 0), 0);
  return { rows: o, max: c };
}
function ee(e) {
  if (!e.trust) return null;
  const { lower: n, upper: o, limited_by: c } = e.trust, m = c === "topology_stable" ? "topology" : c === "parameter_bounds" ? "bounds" : c === "grid_resolution" ? "grid" : c === "model_validity" ? "model" : "curvature", u = R(Math.max(Math.abs(n), Math.abs(o)));
  return `valid ${w(n, u)}\u2013${w(o, u)} (${m})`;
}
function R(e) {
  return Number.isFinite(e) ? e >= 100 ? 0 : e >= 1 ? 2 : 4 : 2;
}
function w(e, n) {
  return Number.isFinite(e) ? e.toFixed(n) : "?";
}
function te(e) {
  return w(e, R(Math.abs(e)));
}
function re(e) {
  const n = e.value;
  if (!Number.isFinite(n)) return "\u2014";
  const o = Math.abs(n);
  return `${o !== 0 && (o < 1e-3 || o >= 1e5) ? n.toExponential(2) : te(n)} ${e.unit}`;
}
function ne() {
  const e = z((n) => n.setSidebarPane);
  return t.jsx(S, { content: "Back to tree", side: "bottom", children: t.jsx("button", { onClick: () => e("tree"), className: "flex h-6 w-6 -ml-1 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover", "aria-label": "Back to tree", children: t.jsx(G, { size: 14 }) }) });
}
function Z({ children: e }) {
  return t.jsx("div", { className: "text-[10px] font-medium uppercase tracking-wider text-text-muted pt-2 pb-1", children: e });
}
function ae(e, n = "p") {
  if (!(n in e)) return n;
  let o = 1;
  for (; ; ) {
    const c = `${n}${o}`;
    if (!(c in e)) return c;
    o++;
  }
}
function se({ row: e, max: n, rank: o }) {
  const c = H(e), m = c != null && n > 0 ? c / n : 0, u = ee(e), i = e.verdict === "unverifiable";
  return t.jsxs("div", { className: "flex flex-col gap-0.5 pt-0.5", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsxs("span", { className: E("text-[10px] tabular-nums w-4 shrink-0", o === 0 ? "text-brand font-medium" : "text-text-muted"), "aria-hidden": true, children: ["#", o + 1] }), t.jsx("div", { className: "h-1 flex-1 min-w-0 rounded-full bg-border/60 overflow-hidden", role: "img", "aria-label": `Influence ${(m * 100).toFixed(0)}% of the strongest parameter`, children: t.jsx("div", { className: E("h-full rounded-full transition-[width] duration-200", i ? "bg-text-muted" : "bg-brand"), style: { width: `${Math.max(m * 100, c ? 2 : 0)}%` } }) }), t.jsx("span", { className: "text-[10px] font-mono tabular-nums text-text-muted shrink-0", children: re(e) })] }), t.jsx("div", { className: "flex items-center gap-2 pl-6", children: i ? t.jsxs("span", { className: "text-[10px] text-amber-500", children: ["unverifiable \u2014 ", e.note ?? "no established derivative"] }) : t.jsxs("span", { className: "text-[10px] text-text-muted", children: [u ?? "no trust radius established", e.route.route === "finite_difference" ? " \xB7 finite difference" : ""] }) })] });
}
function oe({ name: e, parameter: n, env: o, onRename: c, onUpdate: m, onRemove: u, references: i, sensitivity: p }) {
  const [h, f] = s.useState(e), [v, b] = s.useState(String(n.value)), [r, d] = s.useState(null), x = o[e], a = n.unit ?? "";
  function y() {
    const l = h.trim();
    if (!l || l === e) {
      f(e);
      return;
    }
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(l)) {
      d(`invalid name '${l}'`), f(e);
      return;
    }
    d(null), c(e, l);
  }
  function _() {
    const l = v.trim();
    if (!l) {
      d("value required"), b(String(n.value));
      return;
    }
    const M = Number(l);
    let k;
    if (!Number.isNaN(M) && Number.isFinite(M)) k = M;
    else try {
      F(l), k = l;
    } catch (V) {
      d(V instanceof U ? V.message : "invalid expression");
      return;
    }
    d(null), m(e, { ...n, value: k });
  }
  return t.jsxs("div", { className: "flex flex-col gap-1 border-b border-border/40 py-2", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("input", { type: "text", value: h, onChange: (l) => f(l.target.value), onBlur: y, onKeyDown: (l) => {
    l.key === "Enter" && l.currentTarget.blur(), l.key === "Escape" && (f(e), l.currentTarget.blur());
  }, spellCheck: false, className: "flex-1 min-w-0 rounded-md bg-card border border-border text-text text-xs font-mono outline-none px-2 py-1 focus:border-brand focus:ring-2 focus:ring-brand/30 transition-colors", "aria-label": "Parameter name" }), t.jsx("button", { type: "button", onClick: () => {
    i > 0 && !confirm(`${e} is referenced by ${i} binding${i === 1 ? "" : "s"}. Remove anyway?`) || u(e);
  }, className: "flex h-6 w-6 shrink-0 items-center justify-center text-text-muted hover:text-red-500 hover:bg-hover", "aria-label": `Remove ${e}`, title: `Remove ${e}`, children: t.jsx(Q, { size: 12 }) })] }), t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("input", { type: "text", value: v, onChange: (l) => {
    b(l.target.value), d(null);
  }, onBlur: _, onKeyDown: (l) => {
    l.key === "Enter" && l.currentTarget.blur(), l.key === "Escape" && (b(String(n.value)), l.currentTarget.blur());
  }, spellCheck: false, className: E("flex-1 min-w-0 rounded-md bg-card border text-text text-xs font-mono outline-none px-2 py-1 focus:ring-2 focus:ring-brand/30 transition-colors", r ? "border-red-500" : "border-border focus:border-brand"), "aria-label": `${e} value` }), t.jsx("span", { className: "text-[10px] text-text-muted tabular-nums min-w-[4rem] text-right", title: r ?? void 0, children: r ? "!" : x != null && Number.isFinite(x) ? `= ${le(x, 3)}${a ? ` ${a}` : ""}` : "= ?" })] }), r && t.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-red-500", children: [t.jsx($, { size: 10 }), t.jsx("span", { children: r })] }), i > 0 && t.jsxs("div", { className: "text-[10px] text-text-muted", children: ["referenced by ", i, " field", i === 1 ? "" : "s"] }), p && t.jsx(se, { row: p.row, max: p.max, rank: p.rank })] });
}
function ie() {
  const e = q((a) => a.document), n = g((a) => a.parameters), o = g((a) => a.bindings), c = B((a) => a.engine), m = s.useMemo(() => O(e, n, o), [e, n, o]), { report: u, loading: i, error: p, quantity: h, computedFor: f } = j(), v = j((a) => a.setQuantity), b = j((a) => a.compute), r = j((a) => a.invalidate), d = s.useMemo(() => Y(m), [m]);
  s.useEffect(() => {
    f !== null && f !== d && r();
  }, [d, f, r]);
  const x = f !== null && f !== d;
  return t.jsxs("div", { className: "flex flex-col gap-1 pb-1", children: [t.jsxs("div", { className: "flex items-center gap-2", children: [t.jsx("select", { value: h, onChange: (a) => v(a.target.value), className: "flex-1 min-w-0 rounded-md bg-card border border-border text-text text-[11px] font-mono outline-none px-2 py-1 focus:border-brand", "aria-label": "Quantity to rank parameters by", children: J.map((a) => t.jsxs("option", { value: a, children: ["d(", a, ")/d\u03B8"] }, a)) }), t.jsxs("button", { type: "button", disabled: !c || i, onClick: () => c && b(m, c, d), className: "flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[11px] text-text-muted hover:text-text hover:bg-hover disabled:opacity-40", children: [t.jsx(X, { size: 12 }), i ? "Solving\u2026" : u && !x ? "Recompute" : "Rank"] })] }), p && t.jsxs("div", { className: "flex items-start gap-1 text-[10px] text-red-500", children: [t.jsx($, { size: 10, className: "mt-0.5 shrink-0" }), t.jsx("span", { children: p })] }), !u && !i && !p && t.jsx("div", { className: "text-[10px] text-text-muted", children: "Rank every parameter by how much it moves this quantity \u2014 one gradient pass, not a rebuild per knob." }), u && !u.allUsable && t.jsxs("div", { className: "text-[10px] text-amber-500", children: [u.unusable.length, " row(s) could not be established and must not steer a change."] })] });
}
function pe() {
  const e = g((r) => r.parameters), n = g((r) => r.bindings), o = g((r) => r.setParameter), c = g((r) => r.renameParameter), m = g((r) => r.removeParameter), u = s.useMemo(() => {
    try {
      return C(e);
    } catch {
      const r = {};
      for (const [d, x] of Object.entries(e)) try {
        r[d] = typeof x.value == "number" ? x.value : T(x.value, r);
      } catch {
        r[d] = Number.NaN;
      }
      return r;
    }
  }, [e]), i = s.useMemo(() => {
    const r = {};
    for (const d of Object.values(n)) if (typeof d == "string") try {
      const x = F(d);
      for (const a of I(x)) r[a] = (r[a] ?? 0) + 1;
    } catch {
    }
    return r;
  }, [n]), p = j((r) => r.report), h = j((r) => r.quantity), f = s.useMemo(() => {
    const { rows: r, max: d } = W(p, h), x = /* @__PURE__ */ new Map();
    return r.forEach((a, y) => x.set(a.parameter, { row: a, max: d, rank: y })), x;
  }, [p, h]), v = s.useMemo(() => {
    const r = Object.keys(e);
    return f.size === 0 ? r.sort() : r.sort((d, x) => {
      var _a, _b;
      const a = ((_a = f.get(d)) == null ? void 0 : _a.rank) ?? Number.MAX_SAFE_INTEGER, y = ((_b = f.get(x)) == null ? void 0 : _b.rank) ?? Number.MAX_SAFE_INTEGER;
      return a === y ? d.localeCompare(x) : a - y;
    });
  }, [e, f]);
  function b() {
    const r = ae(e, "p");
    o(r, { value: 0 });
  }
  return t.jsxs("div", { className: "flex h-full w-full flex-col overflow-hidden", children: [t.jsxs("div", { className: "flex items-center gap-1 border-b border-border px-2 py-1", children: [t.jsx(ne, {}), t.jsx("span", { className: "flex-1 text-xs font-medium uppercase tracking-wider text-text-muted", children: "Parameters" }), t.jsx(S, { content: "Add parameter", side: "bottom", children: t.jsx("button", { type: "button", onClick: b, className: "flex h-6 w-6 items-center justify-center text-text-muted hover:text-text hover:bg-hover", "aria-label": "Add parameter", children: t.jsx(D, { size: 14 }) }) })] }), t.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto px-2 pb-4", children: v.length === 0 ? t.jsxs("div", { className: "pt-6 text-center text-xs text-text-muted", children: ["No parameters yet.", t.jsx("br", {}), t.jsx("button", { type: "button", onClick: b, className: "mt-2 text-brand hover:underline", children: "Add your first parameter" }), t.jsxs("div", { className: "mt-6 text-[10px] opacity-75 px-4", children: ["Parameters can be referenced by any numeric field. Try: ", t.jsx("span", { className: "font-mono", children: "wheelbase" }), ",", " ", t.jsx("span", { className: "font-mono", children: "headAngle" }), ", or a derived value like ", t.jsx("span", { className: "font-mono", children: "wheelbase * 0.5" }), "."] })] }) : t.jsxs(t.Fragment, { children: [t.jsx(Z, { children: "Influence" }), t.jsx(ie, {}), t.jsx(Z, { children: "Definitions" }), v.map((r) => t.jsx(oe, { name: r, parameter: e[r], env: u, onRename: c, onUpdate: o, onRemove: m, references: i[r] ?? 0, sensitivity: f.get(r) }, r))] }) })] });
}
function le(e, n = 3) {
  const o = Math.pow(10, n);
  return Math.round(e * o) / o;
}
export {
  pe as ParametersPanel
};
