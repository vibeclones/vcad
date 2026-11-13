import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { I as t, J as n, Z as r } from "./dist-CKOzv-X0.js";
import { M as i, O as a } from "./three-drei-_EcrAYRL.js";
import { t as o } from "./download-D9QwX44N.js";
import { t as s } from "./react-Cf1qM0wN.js";
import { t as c } from "./middleware-CJ9hWF1h.js";
import { T as l } from "./dist-D-hjKoV0.js";
var u = e(i(), 1), d = s()(c((e2) => ({ profile: { ...l }, setName: (t2) => e2((e3) => ({ profile: { ...e3.profile, name: t2 } })), setField: (t2, n2) => e2((e3) => ({ profile: { ...e3.profile, [t2]: n2 } })), resetToGeneric: () => e2({ profile: { ...l } }) }), { name: `vcad-sheet-shop-profile`, merge: (e2, t2) => {
  let n2 = e2;
  return { ...t2, profile: { ...l, ...(n2 == null ? void 0 : n2.profile) ?? {} } };
} })), f = a();
function p() {
  let e2 = r((e3) => e3.selectedPartIds), i2 = t((e3) => e3.scene), a2 = t((e3) => e3.engine), s2 = n((e3) => e3.document), c2 = d((e3) => e3.profile), l2 = (0, u.useMemo)(() => {
    if (!i2 || e2.size !== 1) return null;
    for (let e3 of i2.parts) if (e3.sheetMetal) return e3.sheetMetal;
    return null;
  }, [i2, e2]), p2 = (0, u.useMemo)(() => {
    if (!a2 || !l2) return null;
    try {
      return a2.checkSheetMetal(s2, c2);
    } catch (e3) {
      return console.warn(`[sheet-metal] shop-profile check failed:`, e3), null;
    }
  }, [a2, s2, c2, l2]), [g2, v2] = (0, u.useState)(1), S2 = (0, u.useMemo)(() => {
    if (!a2 || !l2) return null;
    try {
      return a2.costSheetMetal(s2, void 0, g2);
    } catch (e3) {
      return console.warn(`[sheet-metal] cost estimate failed:`, e3), null;
    }
  }, [a2, s2, l2, g2]);
  if (!l2) return null;
  let { model: C, flatPattern: w, dxf: T } = l2, E = (p2 == null ? void 0 : p2.violations) ?? l2.violations, D = (p2 == null ? void 0 : p2.shop.name) ?? c2.name;
  function O() {
    let e3 = new Blob([T], { type: `application/dxf` });
    o(e3, `flat-pattern.dxf`);
  }
  return (0, f.jsxs)(`div`, { className: `flex w-full flex-col gap-3 border-t border-border/40 bg-surface p-3 text-[11px]`, children: [(0, f.jsx)(m, { model: C, flat: w }), (0, f.jsx)(h, { model: C }), (0, f.jsx)(_, { violations: E, shopName: D }), (0, f.jsx)(y, {}), (0, f.jsx)(b, { cost: S2, qty: g2, setQty: v2 }), (0, f.jsx)(x, { flat: w }), (0, f.jsx)(`button`, { type: `button`, onClick: O, className: `rounded bg-hover/40 px-2 py-1 text-text-muted transition-colors hover:bg-hover hover:text-text`, title: `Layered DXF \u2014 CUT / BEND_UP / BEND_DOWN, millimetres`, children: `Download DXF` })] });
}
function m({ model: e2, flat: t2 }) {
  let n2 = t2.bbox[2] - t2.bbox[0], r2 = t2.bbox[3] - t2.bbox[1];
  return (0, f.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [(0, f.jsx)(`div`, { className: `font-medium text-text`, children: `Sheet metal` }), (0, f.jsxs)(`div`, { className: `grid grid-cols-2 gap-x-3 gap-y-1 text-text-muted`, children: [(0, f.jsx)(`span`, { children: `Material` }), (0, f.jsx)(`span`, { className: `text-text`, children: e2.material || `\u2014` }), (0, f.jsx)(`span`, { children: `Thickness` }), (0, f.jsxs)(`span`, { className: `text-text`, children: [e2.thickness.toFixed(2), ` mm`] }), (0, f.jsx)(`span`, { children: `Panels` }), (0, f.jsx)(`span`, { className: `text-text`, children: e2.panel_count }), (0, f.jsx)(`span`, { children: `Bends` }), (0, f.jsx)(`span`, { className: `text-text`, children: e2.bend_count }), (0, f.jsx)(`span`, { children: `Flat bbox` }), (0, f.jsxs)(`span`, { className: `text-text`, children: [n2.toFixed(1), ` \xD7 `, Math.abs(r2).toFixed(1), ` mm`] }), (0, f.jsx)(`span`, { children: `Flat area` }), (0, f.jsxs)(`span`, { className: `text-text`, children: [t2.area_mm2.toFixed(0), ` mm\xB2`] })] })] });
}
function h({ model: e2 }) {
  return e2.bend_count === 0 ? null : (0, f.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [(0, f.jsx)(`div`, { className: `text-text-muted`, children: `Bends` }), (0, f.jsx)(`div`, { className: `flex flex-col gap-1`, children: e2.bends.map((e3, t2) => {
    var _a, _b;
    let n2 = g(e3.k_factor_source), r2 = e3.angle_rad * 180 / Math.PI, i2 = e3.compensated_angle_rad * 180 / Math.PI, a2 = e3.springback_rad * 180 / Math.PI, o2 = Math.abs(a2) > 0.05, s2 = ((_a = e3.k_factor_source) == null ? void 0 : _a.includes(`;hem:`)) ? ((_b = e3.k_factor_source) == null ? void 0 : _b.includes(`;hem:open`)) ? `Hem open` : `Hem closed` : `${r2.toFixed(0)}\xB0`;
    return (0, f.jsxs)(`div`, { className: `flex flex-col gap-0.5 rounded bg-hover/30 px-2 py-1`, children: [(0, f.jsxs)(`div`, { className: `flex items-center justify-between gap-2`, children: [(0, f.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [(0, f.jsx)(`span`, { title: e3.k_factor_source ?? `no provenance`, className: `inline-block h-2 w-2 shrink-0 rounded-full`, style: { backgroundColor: n2 } }), (0, f.jsxs)(`span`, { className: `text-text`, children: [`#`, t2, ` `, e3.direction, ` `, s2] })] }), (0, f.jsxs)(`div`, { className: `flex shrink-0 items-center gap-2 text-text-muted`, children: [(0, f.jsxs)(`span`, { children: [`R `, e3.radius.toFixed(2)] }), (0, f.jsxs)(`span`, { children: [`K `, e3.k_factor.toFixed(3)] }), (0, f.jsxs)(`span`, { children: [`BA `, e3.allowance_mm.toFixed(2)] })] })] }), o2 && (0, f.jsxs)(`div`, { className: `pl-4 text-[10px] text-text-muted/80`, title: `Brake angle to form so the part springs back to the design angle`, children: [`Form to `, i2.toFixed(1), `\xB0 (+`, a2.toFixed(1), `\xB0 springback)`] })] }, t2);
  }) })] });
}
function g(e2) {
  return e2 ? e2.startsWith(`builtin`) ? `#22c55e` : e2.startsWith(`shop`) ? `#3b82f6` : e2.startsWith(`measured`) ? `#a855f7` : e2 === `manual` ? `#f59e0b` : `#888888` : `#888888`;
}
function _({ violations: e2, shopName: t2 }) {
  let n2 = e2.filter((e3) => e3.severity === `Error`).length, r2 = e2.length - n2;
  return (0, f.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [(0, f.jsxs)(`div`, { className: `flex items-center justify-between`, children: [(0, f.jsxs)(`span`, { className: `text-text-muted`, title: `Checked against: ${t2}`, children: [`Manufacturability`, ` `, (0, f.jsxs)(`span`, { className: `text-text-muted/60`, children: [`\xB7 `, t2] })] }), e2.length === 0 ? (0, f.jsx)(`span`, { className: `text-[10px] font-medium text-[#22c55e]`, children: `Shop-ready` }) : (0, f.jsxs)(`span`, { className: `text-[10px] text-text-muted`, children: [n2, ` `, n2 === 1 ? `error` : `errors`, ` \xB7 `, r2, ` `, r2 === 1 ? `warning` : `warnings`] })] }), e2.length > 0 && (0, f.jsx)(`div`, { className: `flex flex-col gap-1`, children: e2.map((e3, t3) => (0, f.jsxs)(`div`, { className: `flex items-start gap-2 rounded bg-hover/30 px-2 py-1`, title: e3.rule, children: [(0, f.jsx)(`span`, { className: `mt-[3px] inline-block h-2 w-2 shrink-0 rounded-full`, style: { backgroundColor: e3.severity === `Error` ? `#ef4444` : `#f59e0b` } }), (0, f.jsx)(`span`, { className: `min-w-0 text-text`, children: e3.message })] }, t3)) })] });
}
var v = [{ key: `max_bend_length_mm`, label: `Max bend length`, unit: `mm`, step: 50 }, { key: `min_bend_radius_ratio`, label: `Min bend radius`, unit: `\xD7t`, step: 0.1 }, { key: `min_flange_height_mm`, label: `Min flange height`, unit: `mm`, step: 0.5 }, { key: `min_hole_to_bend_mm`, label: `Min hole\u2192bend`, unit: `mm`, step: 0.5 }, { key: `min_distance_between_bends_mm`, label: `Min bend\u2192bend`, unit: `mm`, step: 0.5 }];
function y() {
  let e2 = d((e3) => e3.profile), t2 = d((e3) => e3.setName), n2 = d((e3) => e3.setField), r2 = d((e3) => e3.resetToGeneric), [i2, a2] = (0, u.useState)(false);
  return (0, f.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [(0, f.jsxs)(`button`, { type: `button`, onClick: () => a2((e3) => !e3), className: `flex items-center justify-between text-left text-text-muted transition-colors hover:text-text`, children: [(0, f.jsx)(`span`, { children: `Shop profile` }), (0, f.jsx)(`span`, { className: `text-[10px] text-text-muted/60`, children: i2 ? `Hide` : `Edit` })] }), i2 && (0, f.jsxs)(`div`, { className: `flex flex-col gap-1 rounded bg-hover/20 p-2`, children: [(0, f.jsxs)(`label`, { className: `flex items-center justify-between gap-2`, children: [(0, f.jsx)(`span`, { className: `text-text-muted`, children: `Name` }), (0, f.jsx)(`input`, { type: `text`, value: e2.name, onChange: (e3) => t2(e3.target.value), className: `w-32 rounded bg-surface px-1 py-0.5 text-right text-text outline-none focus:ring-1 focus:ring-accent` })] }), v.map((t3) => (0, f.jsxs)(`label`, { className: `flex items-center justify-between gap-2`, children: [(0, f.jsx)(`span`, { className: `text-text-muted`, children: t3.label }), (0, f.jsxs)(`span`, { className: `flex items-center gap-1`, children: [(0, f.jsx)(`input`, { type: `number`, step: t3.step, min: 0, value: e2[t3.key], onChange: (e3) => {
    let r3 = Number.parseFloat(e3.target.value);
    Number.isFinite(r3) && r3 >= 0 && n2(t3.key, r3);
  }, className: `w-20 rounded bg-surface px-1 py-0.5 text-right text-text outline-none focus:ring-1 focus:ring-accent` }), (0, f.jsx)(`span`, { className: `w-6 text-text-muted/60`, children: t3.unit })] })] }, t3.key)), (0, f.jsx)(`button`, { type: `button`, onClick: r2, className: `mt-1 self-start rounded bg-hover/40 px-2 py-0.5 text-[10px] text-text-muted transition-colors hover:bg-hover hover:text-text`, children: `Reset to generic` })] })] });
}
function b({ cost: e2, qty: t2, setQty: n2 }) {
  let [r2, i2] = (0, u.useState)(false);
  if (!e2) return null;
  let a2 = e2.breakdown, o2 = (e3) => `${a2.currency} ${e3.toFixed(e3 < 1 ? 3 : 2)}`;
  return (0, f.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [(0, f.jsxs)(`button`, { type: `button`, onClick: () => i2((e3) => !e3), className: `flex items-center justify-between rounded bg-hover/30 px-2 py-1 text-left transition-colors hover:bg-hover`, title: `Click for breakdown`, children: [(0, f.jsx)(`span`, { className: `text-text-muted`, children: `Cost` }), (0, f.jsxs)(`span`, { className: `flex items-center gap-2`, children: [(0, f.jsx)(`span`, { className: `font-medium text-text`, children: o2(a2.total_each) }), (0, f.jsxs)(`span`, { className: `text-[10px] text-text-muted`, children: [`each \xB7 qty `, a2.quantity] })] })] }), r2 && (0, f.jsxs)(`div`, { className: `flex flex-col gap-1 rounded bg-hover/20 p-2`, children: [(0, f.jsxs)(`label`, { className: `flex items-center justify-between gap-2`, children: [(0, f.jsx)(`span`, { className: `text-text-muted`, children: `Quantity` }), (0, f.jsx)(`input`, { type: `number`, min: 1, step: 1, value: t2, onChange: (e3) => {
    let t3 = Number.parseInt(e3.target.value, 10);
    Number.isFinite(t3) && t3 >= 1 && n2(t3);
  }, className: `w-20 rounded bg-surface px-1 py-0.5 text-right text-text outline-none focus:ring-1 focus:ring-accent` })] }), (0, f.jsxs)(`div`, { className: `grid grid-cols-2 gap-x-3 gap-y-0.5 text-text-muted`, children: [(0, f.jsxs)(`span`, { children: [`Material (`, a2.mass_kg_each.toFixed(3), ` kg)`] }), (0, f.jsx)(`span`, { className: `text-right text-text`, children: o2(a2.material_each) }), (0, f.jsxs)(`span`, { children: [`Cut (`, a2.cut_length_m.toFixed(2), ` m)`] }), (0, f.jsx)(`span`, { className: `text-right text-text`, children: o2(a2.cut_each) }), a2.pierces > 0 && (0, f.jsxs)(f.Fragment, { children: [(0, f.jsxs)(`span`, { children: [`Pierce (`, a2.pierces, `)`] }), (0, f.jsx)(`span`, { className: `text-right text-text`, children: o2(a2.pierce_each) })] }), (0, f.jsxs)(`span`, { children: [`Bend (`, a2.bends, `)`] }), (0, f.jsx)(`span`, { className: `text-right text-text`, children: o2(a2.bend_each) }), (0, f.jsx)(`span`, { children: `Setup (amortized)` }), (0, f.jsx)(`span`, { className: `text-right text-text`, children: o2(a2.setup_each) }), (0, f.jsx)(`span`, { children: `Markup` }), (0, f.jsx)(`span`, { className: `text-right text-text`, children: o2(a2.markup_each) }), (0, f.jsx)(`span`, { className: `font-medium text-text`, children: `Total each` }), (0, f.jsx)(`span`, { className: `text-right font-medium text-text`, children: o2(a2.total_each) }), (0, f.jsx)(`span`, { children: `Total run` }), (0, f.jsx)(`span`, { className: `text-right text-text`, children: o2(a2.total_run) })] })] })] });
}
function x({ flat: e2 }) {
  let [t2, n2, r2, i2] = e2.bbox, a2 = Math.max(1, r2 - t2), o2 = Math.max(1, i2 - n2), s2 = Math.max(a2, o2) * 0.05, c2 = `${t2 - s2} ${n2 - s2} ${a2 + 2 * s2} ${o2 + 2 * s2}`, l2 = Math.max(a2, o2) * 5e-3;
  return (0, f.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [(0, f.jsx)(`div`, { className: `text-text-muted`, children: `Flat pattern` }), (0, f.jsxs)(`div`, { className: `rounded bg-black/20 p-2`, children: [(0, f.jsxs)(`svg`, { viewBox: c2, style: { width: `100%`, height: `auto`, transform: `scaleY(-1)` }, children: [e2.panel_outlines_2d.map((e3, t3) => (0, f.jsx)(`polygon`, { points: e3.map(([e4, t4]) => `${e4},${t4}`).join(` `), fill: `rgba(255,255,255,0.04)`, stroke: `#ef4444`, strokeWidth: l2, strokeLinejoin: `round` }, `o${t3}`)), e2.panel_holes_2d.flatMap((e3, t3) => e3.map((e4, n3) => (0, f.jsx)(`polygon`, { points: e4.map(([e5, t4]) => `${e5},${t4}`).join(` `), fill: `rgba(0,0,0,0.4)`, stroke: `#ef4444`, strokeWidth: l2 }, `h${t3}-${n3}`))), e2.creases.map((e3, t3) => {
    let n3 = e3.direction === `Up` ? `#ef4444` : `#3b82f6`;
    return (0, f.jsx)(`line`, { x1: e3.line[0][0], y1: e3.line[0][1], x2: e3.line[1][0], y2: e3.line[1][1], stroke: n3, strokeWidth: l2, strokeDasharray: `${l2 * 4} ${l2 * 2}` }, `c${t3}`);
  })] }), (0, f.jsxs)(`div`, { className: `mt-1 flex items-center gap-3 text-[10px] text-text-muted`, children: [(0, f.jsx)(S, { color: `#ef4444`, label: `Cut` }), (0, f.jsx)(S, { color: `#ef4444`, label: `Bend up`, dashed: true }), (0, f.jsx)(S, { color: `#3b82f6`, label: `Bend down`, dashed: true })] })] })] });
}
function S({ color: e2, label: t2, dashed: n2 }) {
  return (0, f.jsxs)(`span`, { className: `flex items-center gap-1`, children: [(0, f.jsx)(`span`, { className: `inline-block h-[2px] w-4`, style: { backgroundColor: n2 ? `transparent` : e2, borderTop: n2 ? `2px dashed ${e2}` : void 0 } }), t2] });
}
export {
  p as SheetMetalView
};
