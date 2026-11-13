import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { G as r, I as i, J as a, K as o, O as s, U as c, ht as l } from "./dist-CKOzv-X0.js";
import { t as u } from "./electronics-store-CeuBsncA.js";
import { t as d } from "./usePcbLayerConfigs-QZlIuL94.js";
import { t as f } from "./notification-store-BYW1uPuc.js";
import { r as p, t as m } from "./pcb-interference-CAJIuJB9.js";
var h = e(t(), 1), g = n(), _ = 2;
function v(e2) {
  let t2 = e2.outline.vertices;
  if (t2.length < 3) return { w: 0, h: 0 };
  let n2 = 1 / 0, r2 = -1 / 0, i2 = 1 / 0, a2 = -1 / 0;
  for (let e3 of t2) e3.x < n2 && (n2 = e3.x), e3.x > r2 && (r2 = e3.x), e3.y < i2 && (i2 = e3.y), e3.y > a2 && (a2 = e3.y);
  return { w: r2 - n2, h: a2 - i2 };
}
function y({ label: e2, value: t2, danger: n2 }) {
  return (0, g.jsxs)(`span`, { className: `inline-flex items-baseline gap-1`, children: [(0, g.jsx)(`span`, { className: `text-text-muted`, children: e2 }), (0, g.jsx)(`span`, { className: n2 && t2 > 0 ? `text-danger font-medium` : `text-text font-medium`, children: t2 })] });
}
function b({ pcb: e2 }) {
  let t2 = s((e3) => e3.activeBoardNodeId), n2 = a((e3) => e3.document), r2 = a((e3) => e3.parts), u2 = i((e3) => e3.scene), d2 = a((e3) => e3.resizeBoard), y2 = a((e3) => e3.setTranslation), b2 = f((e3) => e3.addToast), [x2, S] = (0, h.useState)(null), { w: C, h: w } = v(e2), T = 0;
  u2 == null ? void 0 : u2.parts.forEach((e3, t3) => {
    var _a, _b;
    let n3 = r2[t3];
    n3 && !l(n3) && (((_b = (_a = e3.mesh) == null ? void 0 : _a.positions) == null ? void 0 : _b.length) ?? 0) > 0 && T++;
  });
  let E = () => {
    if (!x2) return;
    let e3 = parseFloat(x2.w), t3 = parseFloat(x2.h);
    isFinite(e3) && isFinite(t3) && e3 > 0 && t3 > 0 && d2(e3, t3), S(null);
  };
  return x2 ? (0, g.jsxs)(`span`, { className: `inline-flex items-center gap-0.5`, children: [(0, g.jsx)(`input`, { "aria-label": `Board width (mm)`, type: `number`, autoFocus: true, value: x2.w, onChange: (e3) => S({ ...x2, w: e3.target.value }), onKeyDown: (e3) => {
    e3.key === `Enter` && E(), e3.key === `Escape` && S(null);
  }, className: `w-10 bg-surface border border-border rounded px-1 py-0.5 text-text text-[11px] tabular-nums` }), (0, g.jsx)(`span`, { className: `text-text-muted`, children: `\xD7` }), (0, g.jsx)(`input`, { "aria-label": `Board height (mm)`, type: `number`, value: x2.h, onChange: (e3) => S({ ...x2, h: e3.target.value }), onKeyDown: (e3) => {
    e3.key === `Enter` && E(), e3.key === `Escape` && S(null);
  }, className: `w-10 bg-surface border border-border rounded px-1 py-0.5 text-text text-[11px] tabular-nums` }), (0, g.jsx)(`button`, { onClick: E, className: `ml-0.5 px-1 py-0.5 rounded text-accent hover:bg-accent/10`, title: `Apply board size`, children: `\u2713` })] }) : (0, g.jsxs)(`span`, { className: `inline-flex items-center gap-1`, children: [(0, g.jsxs)(`button`, { onClick: () => S({ w: String(Math.round(C)), h: String(Math.round(w)) }), className: `text-text-muted hover:text-text underline decoration-dotted underline-offset-2`, title: `Edit board size`, children: [Math.round(C), `\xD7`, Math.round(w), `mm`] }), T > 0 && (0, g.jsx)(`button`, { onClick: () => {
    let e3 = [];
    u2 == null ? void 0 : u2.parts.forEach((t3, n3) => {
      var _a;
      let i3 = r2[n3];
      if (i3 && l(i3)) return;
      let a3 = m((_a = t3.mesh) == null ? void 0 : _a.positions);
      a3 && e3.push(a3);
    });
    let i2 = p(e3);
    if (!i2) {
      b2(`No surrounding parts to fit the board to`, `info`);
      return;
    }
    let a2 = _, s2 = i2.max[0] - i2.min[0] - 4, f2 = i2.max[1] - i2.min[1] - 4;
    if (s2 < 1 || f2 < 1) {
      b2(`Surrounding parts are too small to fit a board`, `info`);
      return;
    }
    let h2 = t2 == null ? null : c(r2, t2), g2 = h2 ? o(n2, h2) : null, v2 = g2 && g2.scale.x !== 0 ? g2.scale.x : 1, x3 = g2 && g2.scale.y !== 0 ? g2.scale.y : 1;
    d2(s2 / v2, f2 / x3), h2 && y2(h2.id, { x: i2.min[0] + a2, y: i2.min[1] + a2, z: (g2 == null ? void 0 : g2.position.z) ?? 0 }), b2(`Board fit to enclosure \xB7 ${Math.round(s2)}\xD7${Math.round(f2)}mm`, `success`);
  }, className: `px-1 py-0.5 rounded border border-border text-text-muted hover:text-text hover:border-accent/60`, title: `Resize + position the board to fit the surrounding parts`, children: `Fit` })] });
}
function x() {
  let e2 = u((e3) => e3.focusedPane), t2 = u((e3) => e3.schTool), n2 = u((e3) => e3.pcbTool), i2 = u((e3) => e3.pcbActiveLayer), o2 = d(), c2 = u((e3) => e3.drcViolations), l2 = u((e3) => e3.pcbSolveStatus), f2 = a((e3) => {
    var _a;
    return ((_a = e3.document.constraints) == null ? void 0 : _a.length) ?? 0;
  }), p2 = u((e3) => e3.ercViolations), m2 = u((e3) => e3.receiptEntries.length), h2 = u((e3) => e3.showReceiptPanel), _2 = u((e3) => e3.toggleReceiptPanel), v2 = s((e3) => e3.activeBoardNodeId), x2 = a((e3) => e3.document), S = v2 == null ? null : r(x2, v2), C = x2.schematic, w = e2 === `pcb` ? n2 : t2, T = w.charAt(0).toUpperCase() + w.slice(1), E = c2.filter((e3) => e3.severity === `Error`).length, D = c2.length - E, O = p2.length, k = o2.find((e3) => e3.layer === i2);
  return (0, g.jsxs)(`div`, { className: `shrink-0 border-b border-border/40 bg-surface/60 px-3 py-2 text-[11px]`, children: [(0, g.jsxs)(`div`, { className: `flex items-center justify-between gap-2`, children: [(0, g.jsxs)(`span`, { className: `flex items-center gap-1.5 min-w-0`, children: [(0, g.jsx)(`span`, { className: `font-medium text-text`, children: `Circuit` }), S && (0, g.jsx)(b, { pcb: S })] }), (0, g.jsxs)(`div`, { className: `flex items-center gap-2 shrink-0`, children: [f2 > 0 && (0, g.jsx)(`span`, { className: `inline-flex items-center gap-1`, title: `Design constraints: solve status / degrees of freedom`, children: l2 == null ? (0, g.jsxs)(`span`, { className: `text-text-muted`, children: [f2, ` constraints`] }) : l2.overConstrained || !l2.converged ? (0, g.jsx)(`span`, { className: `text-danger font-medium`, children: l2.overConstrained ? `Over-constrained` : `Not converged` }) : l2.dof === 0 ? (0, g.jsx)(`span`, { className: `text-success font-medium`, children: `Solved` }) : (0, g.jsxs)(`span`, { className: `text-text-muted`, children: [l2.dof, ` DOF`] }) }), (0, g.jsxs)(`span`, { className: `inline-flex items-center gap-1`, title: `DRC errors / warnings`, children: [(0, g.jsx)(`span`, { className: `text-text-muted`, children: `DRC` }), (0, g.jsx)(`span`, { className: E > 0 ? `text-danger font-medium` : `text-text-muted`, children: E }), (0, g.jsxs)(`span`, { className: D > 0 ? `text-warning` : `text-text-muted`, children: [`\u26A0`, D] })] }), (0, g.jsxs)(`span`, { className: `inline-flex items-center gap-1`, title: `ERC issues`, children: [(0, g.jsx)(`span`, { className: `text-text-muted`, children: `ERC` }), (0, g.jsx)(`span`, { className: O > 0 ? `text-warning font-medium` : `text-text-muted`, children: O })] }), (0, g.jsxs)(`button`, { onClick: _2, title: `Toggle the Receipt ledger \u2014 what each edit fixed or broke`, className: `inline-flex items-center gap-1 rounded px-1.5 py-0.5 transition-colors ${h2 ? `text-brand bg-brand/10` : `text-text-muted hover:text-text`}`, children: [(0, g.jsx)(`span`, { children: `Ledger` }), m2 > 0 && (0, g.jsx)(`span`, { className: `tabular-nums rounded bg-white/10 px-1 text-[9.5px]`, children: m2 })] })] })] }), (0, g.jsxs)(`div`, { className: `mt-0.5 flex items-center gap-1.5 text-text-muted`, children: [(0, g.jsx)(`span`, { className: `capitalize`, children: e2 }), (0, g.jsx)(`span`, { children: `\xB7` }), (0, g.jsx)(`span`, { className: `text-text`, children: T }), e2 === `pcb` && k && (0, g.jsxs)(`span`, { className: `ml-auto inline-flex items-center gap-1`, title: `Active layer`, children: [(0, g.jsx)(`span`, { className: `w-2 h-2 rounded-full`, style: { backgroundColor: k.color } }), (0, g.jsx)(`span`, { children: i2 })] })] }), (0, g.jsxs)(`div`, { className: `mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5`, children: [S && (0, g.jsxs)(g.Fragment, { children: [(0, g.jsx)(y, { label: `Footprints`, value: S.footprints.length }), (0, g.jsx)(y, { label: `Traces`, value: S.traces.length }), (0, g.jsx)(y, { label: `Vias`, value: S.vias.length }), (0, g.jsx)(y, { label: `Nets`, value: S.nets.length }), (0, g.jsx)(y, { label: `Layers`, value: S.stackup.layers.filter((e3) => e3.copperThickness).length })] }), C && (0, g.jsx)(y, { label: `Components`, value: C.components.length })] })] });
}
export {
  x as ElectronicsPanelHeader,
  x as default
};
