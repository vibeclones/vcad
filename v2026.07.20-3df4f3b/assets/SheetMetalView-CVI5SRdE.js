import { b as u, k as e } from "./three-fiber-GW7QWJN8.js";
import { cq as N, bc as k, b5 as y, b4 as v, cr as w } from "./index-B2PsV3Ii.js";
import { c as F, p as M } from "./three-drei-C9A0_-Vj.js";
import "./three-tnxpQXqG.js";
const g = F()(M((t) => ({ profile: { ...N }, setName: (s) => t((r) => ({ profile: { ...r.profile, name: s } })), setField: (s, r) => t((l) => ({ profile: { ...l.profile, [s]: r } })), resetToGeneric: () => t({ profile: { ...N } }) }), { name: "vcad-sheet-shop-profile", merge: (t, s) => ({ ...s, profile: { ...N, ...(t == null ? void 0 : t.profile) ?? {} } }) }));
function O() {
  const t = k((o) => o.selectedPartIds), s = y((o) => o.scene), r = y((o) => o.engine), l = v((o) => o.document), c = g((o) => o.profile), a = u.useMemo(() => {
    if (!s || t.size !== 1) return null;
    for (const o of s.parts) if (o.sheetMetal) return o.sheetMetal;
    return null;
  }, [s, t]), n = u.useMemo(() => {
    if (!r || !a) return null;
    try {
      return r.checkSheetMetal(l, c);
    } catch (o) {
      return console.warn("[sheet-metal] shop-profile check failed:", o), null;
    }
  }, [r, l, c, a]), [i, x] = u.useState(1), m = u.useMemo(() => {
    if (!r || !a) return null;
    try {
      return r.costSheetMetal(l, void 0, i);
    } catch (o) {
      return console.warn("[sheet-metal] cost estimate failed:", o), null;
    }
  }, [r, l, a, i]);
  if (!a) return null;
  const { model: d, flatPattern: p, dxf: h } = a, f = (n == null ? void 0 : n.violations) ?? a.violations, j = (n == null ? void 0 : n.shop.name) ?? c.name;
  function b() {
    const o = new Blob([h], { type: "application/dxf" });
    w(o, "flat-pattern.dxf");
  }
  return e.jsxs("div", { className: "flex w-full flex-col gap-3 border-t border-border/40 bg-surface p-3 text-[11px]", children: [e.jsx(S, { model: d, flat: p }), e.jsx($, { model: d }), e.jsx(P, { violations: f, shopName: j }), e.jsx(D, {}), e.jsx(E, { cost: m, qty: i, setQty: x }), e.jsx(I, { flat: p }), e.jsx("button", { type: "button", onClick: b, className: "rounded bg-hover/40 px-2 py-1 text-text-muted transition-colors hover:bg-hover hover:text-text", title: "Layered DXF \u2014 CUT / BEND_UP / BEND_DOWN, millimetres", children: "Download DXF" })] });
}
function S({ model: t, flat: s }) {
  const r = s.bbox[2] - s.bbox[0], l = s.bbox[3] - s.bbox[1];
  return e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: "font-medium text-text", children: "Sheet metal" }), e.jsxs("div", { className: "grid grid-cols-2 gap-x-3 gap-y-1 text-text-muted", children: [e.jsx("span", { children: "Material" }), e.jsx("span", { className: "text-text", children: t.material || "\u2014" }), e.jsx("span", { children: "Thickness" }), e.jsxs("span", { className: "text-text", children: [t.thickness.toFixed(2), " mm"] }), e.jsx("span", { children: "Panels" }), e.jsx("span", { className: "text-text", children: t.panel_count }), e.jsx("span", { children: "Bends" }), e.jsx("span", { className: "text-text", children: t.bend_count }), e.jsx("span", { children: "Flat bbox" }), e.jsxs("span", { className: "text-text", children: [r.toFixed(1), " \xD7 ", Math.abs(l).toFixed(1), " mm"] }), e.jsx("span", { children: "Flat area" }), e.jsxs("span", { className: "text-text", children: [s.area_mm2.toFixed(0), " mm\xB2"] })] })] });
}
function $({ model: t }) {
  return t.bend_count === 0 ? null : e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: "text-text-muted", children: "Bends" }), e.jsx("div", { className: "flex flex-col gap-1", children: t.bends.map((s, r) => {
    var _a, _b;
    const l = C(s.k_factor_source), c = s.angle_rad * 180 / Math.PI, a = s.compensated_angle_rad * 180 / Math.PI, n = s.springback_rad * 180 / Math.PI, i = Math.abs(n) > 0.05, m = ((_a = s.k_factor_source) == null ? void 0 : _a.includes(";hem:")) ? ((_b = s.k_factor_source) == null ? void 0 : _b.includes(";hem:open")) ? "Hem open" : "Hem closed" : `${c.toFixed(0)}\xB0`;
    return e.jsxs("div", { className: "flex flex-col gap-0.5 rounded bg-hover/30 px-2 py-1", children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [e.jsx("span", { title: s.k_factor_source ?? "no provenance", className: "inline-block h-2 w-2 shrink-0 rounded-full", style: { backgroundColor: l } }), e.jsxs("span", { className: "text-text", children: ["#", r, " ", s.direction, " ", m] })] }), e.jsxs("div", { className: "flex shrink-0 items-center gap-2 text-text-muted", children: [e.jsxs("span", { children: ["R ", s.radius.toFixed(2)] }), e.jsxs("span", { children: ["K ", s.k_factor.toFixed(3)] }), e.jsxs("span", { children: ["BA ", s.allowance_mm.toFixed(2)] })] })] }), i && e.jsxs("div", { className: "pl-4 text-[10px] text-text-muted/80", title: "Brake angle to form so the part springs back to the design angle", children: ["Form to ", a.toFixed(1), "\xB0 (+", n.toFixed(1), "\xB0 springback)"] })] }, r);
  }) })] });
}
function C(t) {
  return t ? t.startsWith("builtin") ? "#22c55e" : t.startsWith("shop") ? "#3b82f6" : t.startsWith("measured") ? "#a855f7" : t === "manual" ? "#f59e0b" : "#888888" : "#888888";
}
function P({ violations: t, shopName: s }) {
  const r = t.filter((c) => c.severity === "Error").length, l = t.length - r;
  return e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("span", { className: "text-text-muted", title: `Checked against: ${s}`, children: ["Manufacturability", " ", e.jsxs("span", { className: "text-text-muted/60", children: ["\xB7 ", s] })] }), t.length === 0 ? e.jsx("span", { className: "text-[10px] font-medium text-[#22c55e]", children: "Shop-ready" }) : e.jsxs("span", { className: "text-[10px] text-text-muted", children: [r, " ", r === 1 ? "error" : "errors", " \xB7 ", l, " ", l === 1 ? "warning" : "warnings"] })] }), t.length > 0 && e.jsx("div", { className: "flex flex-col gap-1", children: t.map((c, a) => e.jsxs("div", { className: "flex items-start gap-2 rounded bg-hover/30 px-2 py-1", title: c.rule, children: [e.jsx("span", { className: "mt-[3px] inline-block h-2 w-2 shrink-0 rounded-full", style: { backgroundColor: c.severity === "Error" ? "#ef4444" : "#f59e0b" } }), e.jsx("span", { className: "min-w-0 text-text", children: c.message })] }, a)) })] });
}
const B = [{ key: "max_bend_length_mm", label: "Max bend length", unit: "mm", step: 50 }, { key: "min_bend_radius_ratio", label: "Min bend radius", unit: "\xD7t", step: 0.1 }, { key: "min_flange_height_mm", label: "Min flange height", unit: "mm", step: 0.5 }, { key: "min_hole_to_bend_mm", label: "Min hole\u2192bend", unit: "mm", step: 0.5 }, { key: "min_distance_between_bends_mm", label: "Min bend\u2192bend", unit: "mm", step: 0.5 }];
function D() {
  const t = g((n) => n.profile), s = g((n) => n.setName), r = g((n) => n.setField), l = g((n) => n.resetToGeneric), [c, a] = u.useState(false);
  return e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsxs("button", { type: "button", onClick: () => a((n) => !n), className: "flex items-center justify-between text-left text-text-muted transition-colors hover:text-text", children: [e.jsx("span", { children: "Shop profile" }), e.jsx("span", { className: "text-[10px] text-text-muted/60", children: c ? "Hide" : "Edit" })] }), c && e.jsxs("div", { className: "flex flex-col gap-1 rounded bg-hover/20 p-2", children: [e.jsxs("label", { className: "flex items-center justify-between gap-2", children: [e.jsx("span", { className: "text-text-muted", children: "Name" }), e.jsx("input", { type: "text", value: t.name, onChange: (n) => s(n.target.value), className: "w-32 rounded bg-surface px-1 py-0.5 text-right text-text outline-none focus:ring-1 focus:ring-accent" })] }), B.map((n) => e.jsxs("label", { className: "flex items-center justify-between gap-2", children: [e.jsx("span", { className: "text-text-muted", children: n.label }), e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx("input", { type: "number", step: n.step, min: 0, value: t[n.key], onChange: (i) => {
    const x = Number.parseFloat(i.target.value);
    Number.isFinite(x) && x >= 0 && r(n.key, x);
  }, className: "w-20 rounded bg-surface px-1 py-0.5 text-right text-text outline-none focus:ring-1 focus:ring-accent" }), e.jsx("span", { className: "w-6 text-text-muted/60", children: n.unit })] })] }, n.key)), e.jsx("button", { type: "button", onClick: l, className: "mt-1 self-start rounded bg-hover/40 px-2 py-0.5 text-[10px] text-text-muted transition-colors hover:bg-hover hover:text-text", children: "Reset to generic" })] })] });
}
function E({ cost: t, qty: s, setQty: r }) {
  const [l, c] = u.useState(false);
  if (!t) return null;
  const a = t.breakdown, n = (i) => `${a.currency} ${i.toFixed(i < 1 ? 3 : 2)}`;
  return e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsxs("button", { type: "button", onClick: () => c((i) => !i), className: "flex items-center justify-between rounded bg-hover/30 px-2 py-1 text-left transition-colors hover:bg-hover", title: "Click for breakdown", children: [e.jsx("span", { className: "text-text-muted", children: "Cost" }), e.jsxs("span", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "font-medium text-text", children: n(a.total_each) }), e.jsxs("span", { className: "text-[10px] text-text-muted", children: ["each \xB7 qty ", a.quantity] })] })] }), l && e.jsxs("div", { className: "flex flex-col gap-1 rounded bg-hover/20 p-2", children: [e.jsxs("label", { className: "flex items-center justify-between gap-2", children: [e.jsx("span", { className: "text-text-muted", children: "Quantity" }), e.jsx("input", { type: "number", min: 1, step: 1, value: s, onChange: (i) => {
    const x = Number.parseInt(i.target.value, 10);
    Number.isFinite(x) && x >= 1 && r(x);
  }, className: "w-20 rounded bg-surface px-1 py-0.5 text-right text-text outline-none focus:ring-1 focus:ring-accent" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-x-3 gap-y-0.5 text-text-muted", children: [e.jsxs("span", { children: ["Material (", a.mass_kg_each.toFixed(3), " kg)"] }), e.jsx("span", { className: "text-right text-text", children: n(a.material_each) }), e.jsxs("span", { children: ["Cut (", a.cut_length_m.toFixed(2), " m)"] }), e.jsx("span", { className: "text-right text-text", children: n(a.cut_each) }), a.pierces > 0 && e.jsxs(e.Fragment, { children: [e.jsxs("span", { children: ["Pierce (", a.pierces, ")"] }), e.jsx("span", { className: "text-right text-text", children: n(a.pierce_each) })] }), e.jsxs("span", { children: ["Bend (", a.bends, ")"] }), e.jsx("span", { className: "text-right text-text", children: n(a.bend_each) }), e.jsx("span", { children: "Setup (amortized)" }), e.jsx("span", { className: "text-right text-text", children: n(a.setup_each) }), e.jsx("span", { children: "Markup" }), e.jsx("span", { className: "text-right text-text", children: n(a.markup_each) }), e.jsx("span", { className: "font-medium text-text", children: "Total each" }), e.jsx("span", { className: "text-right font-medium text-text", children: n(a.total_each) }), e.jsx("span", { children: "Total run" }), e.jsx("span", { className: "text-right text-text", children: n(a.total_run) })] })] })] });
}
function I({ flat: t }) {
  const [s, r, l, c] = t.bbox, a = Math.max(1, l - s), n = Math.max(1, c - r), i = Math.max(a, n) * 0.05, x = `${s - i} ${r - i} ${a + 2 * i} ${n + 2 * i}`, m = Math.max(a, n) * 5e-3;
  return e.jsxs("div", { className: "flex flex-col gap-1", children: [e.jsx("div", { className: "text-text-muted", children: "Flat pattern" }), e.jsxs("div", { className: "rounded bg-black/20 p-2", children: [e.jsxs("svg", { viewBox: x, style: { width: "100%", height: "auto", transform: "scaleY(-1)" }, children: [t.panel_outlines_2d.map((d, p) => e.jsx("polygon", { points: d.map(([h, f]) => `${h},${f}`).join(" "), fill: "rgba(255,255,255,0.04)", stroke: "#ef4444", strokeWidth: m, strokeLinejoin: "round" }, `o${p}`)), t.panel_holes_2d.flatMap((d, p) => d.map((h, f) => e.jsx("polygon", { points: h.map(([j, b]) => `${j},${b}`).join(" "), fill: "rgba(0,0,0,0.4)", stroke: "#ef4444", strokeWidth: m }, `h${p}-${f}`))), t.creases.map((d, p) => {
    const h = d.direction === "Up" ? "#ef4444" : "#3b82f6";
    return e.jsx("line", { x1: d.line[0][0], y1: d.line[0][1], x2: d.line[1][0], y2: d.line[1][1], stroke: h, strokeWidth: m, strokeDasharray: `${m * 4} ${m * 2}` }, `c${p}`);
  })] }), e.jsxs("div", { className: "mt-1 flex items-center gap-3 text-[10px] text-text-muted", children: [e.jsx(_, { color: "#ef4444", label: "Cut" }), e.jsx(_, { color: "#ef4444", label: "Bend up", dashed: true }), e.jsx(_, { color: "#3b82f6", label: "Bend down", dashed: true })] })] })] });
}
function _({ color: t, label: s, dashed: r }) {
  return e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx("span", { className: "inline-block h-[2px] w-4", style: { backgroundColor: r ? "transparent" : t, borderTop: r ? `2px dashed ${t}` : void 0 } }), s] });
}
export {
  O as SheetMetalView
};
