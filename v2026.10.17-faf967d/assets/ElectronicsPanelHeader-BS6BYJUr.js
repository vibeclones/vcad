import { k as e, b as F } from "./three-fiber-GW7QWJN8.js";
import { c8 as d, c9 as A, bc as C, bb as B, ah as D, bd as I, bu as M, aD as T, a4 as V, ai as O } from "./index-Dh9039MG.js";
import { a as H, m as W } from "./pcb-interference-D-jt2V7v.js";
import "./three-tnxpQXqG.js";
import "./three-drei-vHRsxLlW.js";
const $ = 2;
function K(x) {
  const r = x.outline.vertices;
  if (r.length < 3) return { w: 0, h: 0 };
  let m = 1 / 0, o = -1 / 0, f = 1 / 0, u = -1 / 0;
  for (const n of r) n.x < m && (m = n.x), n.x > o && (o = n.x), n.y < f && (f = n.y), n.y > u && (u = n.y);
  return { w: o - m, h: u - f };
}
function y({ label: x, value: r, danger: m }) {
  return e.jsxs("span", { className: "inline-flex items-baseline gap-1", children: [e.jsx("span", { className: "text-text-muted", children: x }), e.jsx("span", { className: m && r > 0 ? "text-danger font-medium" : "text-text font-medium", children: r })] });
}
function U({ pcb: x }) {
  const r = B((t) => t.activeBoardNodeId), m = C((t) => t.document), o = C((t) => t.parts), f = I((t) => t.scene), u = C((t) => t.resizeBoard), n = C((t) => t.setTranslation), j = M((t) => t.addToast), [i, p] = F.useState(null), { w: E, h: S } = K(x);
  let w = 0;
  f == null ? void 0 : f.parts.forEach((t, a) => {
    var _a, _b;
    const h = o[a];
    h && !T(h) && (((_b = (_a = t.mesh) == null ? void 0 : _a.positions) == null ? void 0 : _b.length) ?? 0) > 0 && w++;
  });
  const N = () => {
    if (!i) return;
    const t = parseFloat(i.w), a = parseFloat(i.h);
    isFinite(t) && isFinite(a) && t > 0 && a > 0 && u(t, a), p(null);
  }, c = () => {
    const t = [];
    f == null ? void 0 : f.parts.forEach((L, z) => {
      var _a;
      const P = o[z];
      if (P && T(P)) return;
      const k = H((_a = L.mesh) == null ? void 0 : _a.positions);
      k && t.push(k);
    });
    const a = W(t);
    if (!a) {
      j("No surrounding parts to fit the board to", "info");
      return;
    }
    const h = $, b = a.max[0] - a.min[0] - 2 * h, v = a.max[1] - a.min[1] - 2 * h;
    if (b < 1 || v < 1) {
      j("Surrounding parts are too small to fit a board", "info");
      return;
    }
    const g = r != null ? V(o, r) : null, l = g ? O(m, g) : null, s = l && l.scale.x !== 0 ? l.scale.x : 1, R = l && l.scale.y !== 0 ? l.scale.y : 1;
    u(b / s, v / R), g && n(g.id, { x: a.min[0] + h, y: a.min[1] + h, z: (l == null ? void 0 : l.position.z) ?? 0 }), j(`Board fit to enclosure \xB7 ${Math.round(b)}\xD7${Math.round(v)}mm`, "success");
  };
  return i ? e.jsxs("span", { className: "inline-flex items-center gap-0.5", children: [e.jsx("input", { "aria-label": "Board width (mm)", type: "number", autoFocus: true, value: i.w, onChange: (t) => p({ ...i, w: t.target.value }), onKeyDown: (t) => {
    t.key === "Enter" && N(), t.key === "Escape" && p(null);
  }, className: "w-10 bg-surface border border-border rounded px-1 py-0.5 text-text text-[11px] tabular-nums" }), e.jsx("span", { className: "text-text-muted", children: "\xD7" }), e.jsx("input", { "aria-label": "Board height (mm)", type: "number", value: i.h, onChange: (t) => p({ ...i, h: t.target.value }), onKeyDown: (t) => {
    t.key === "Enter" && N(), t.key === "Escape" && p(null);
  }, className: "w-10 bg-surface border border-border rounded px-1 py-0.5 text-text text-[11px] tabular-nums" }), e.jsx("button", { onClick: N, className: "ml-0.5 px-1 py-0.5 rounded text-accent hover:bg-accent/10", title: "Apply board size", children: "\u2713" })] }) : e.jsxs("span", { className: "inline-flex items-center gap-1", children: [e.jsxs("button", { onClick: () => p({ w: String(Math.round(E)), h: String(Math.round(S)) }), className: "text-text-muted hover:text-text underline decoration-dotted underline-offset-2", title: "Edit board size", children: [Math.round(E), "\xD7", Math.round(S), "mm"] }), w > 0 && e.jsx("button", { onClick: c, className: "px-1 py-0.5 rounded border border-border text-text-muted hover:text-text hover:border-accent/60", title: "Resize + position the board to fit the surrounding parts", children: "Fit" })] });
}
function J() {
  const x = d((s) => s.focusedPane), r = d((s) => s.schTool), m = d((s) => s.pcbTool), o = d((s) => s.pcbActiveLayer), f = A(), u = d((s) => s.drcViolations), n = d((s) => s.pcbSolveStatus), j = C((s) => {
    var _a;
    return ((_a = s.document.constraints) == null ? void 0 : _a.length) ?? 0;
  }), i = d((s) => s.ercViolations), p = d((s) => s.receiptEntries.length), E = d((s) => s.showReceiptPanel), S = d((s) => s.toggleReceiptPanel), w = B((s) => s.activeBoardNodeId), N = C((s) => s.document), c = w != null ? D(N, w) : null, t = N.schematic, a = x === "pcb" ? m : r, h = a.charAt(0).toUpperCase() + a.slice(1), b = u.filter((s) => s.severity === "Error").length, v = u.length - b, g = i.length, l = f.find((s) => s.layer === o);
  return e.jsxs("div", { className: "shrink-0 border-b border-border/40 bg-surface/60 px-3 py-2 text-[11px]", children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsxs("span", { className: "flex items-center gap-1.5 min-w-0", children: [e.jsx("span", { className: "font-medium text-text", children: "Circuit" }), c && e.jsx(U, { pcb: c })] }), e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [j > 0 && e.jsx("span", { className: "inline-flex items-center gap-1", title: "Design constraints: solve status / degrees of freedom", children: n == null ? e.jsxs("span", { className: "text-text-muted", children: [j, " constraints"] }) : n.overConstrained || !n.converged ? e.jsx("span", { className: "text-danger font-medium", children: n.overConstrained ? "Over-constrained" : "Not converged" }) : n.dof === 0 ? e.jsx("span", { className: "text-success font-medium", children: "Solved" }) : e.jsxs("span", { className: "text-text-muted", children: [n.dof, " DOF"] }) }), e.jsxs("span", { className: "inline-flex items-center gap-1", title: "DRC errors / warnings", children: [e.jsx("span", { className: "text-text-muted", children: "DRC" }), e.jsx("span", { className: b > 0 ? "text-danger font-medium" : "text-text-muted", children: b }), e.jsxs("span", { className: v > 0 ? "text-warning" : "text-text-muted", children: ["\u26A0", v] })] }), e.jsxs("span", { className: "inline-flex items-center gap-1", title: "ERC issues", children: [e.jsx("span", { className: "text-text-muted", children: "ERC" }), e.jsx("span", { className: g > 0 ? "text-warning font-medium" : "text-text-muted", children: g })] }), e.jsxs("button", { onClick: S, title: "Toggle the Receipt ledger \u2014 what each edit fixed or broke", className: `inline-flex items-center gap-1 rounded px-1.5 py-0.5 transition-colors ${E ? "text-brand bg-brand/10" : "text-text-muted hover:text-text"}`, children: [e.jsx("span", { children: "Ledger" }), p > 0 && e.jsx("span", { className: "tabular-nums rounded bg-white/10 px-1 text-[9.5px]", children: p })] })] })] }), e.jsxs("div", { className: "mt-0.5 flex items-center gap-1.5 text-text-muted", children: [e.jsx("span", { className: "capitalize", children: x }), e.jsx("span", { children: "\xB7" }), e.jsx("span", { className: "text-text", children: h }), x === "pcb" && l && e.jsxs("span", { className: "ml-auto inline-flex items-center gap-1", title: "Active layer", children: [e.jsx("span", { className: "w-2 h-2 rounded-full", style: { backgroundColor: l.color } }), e.jsx("span", { children: o })] })] }), e.jsxs("div", { className: "mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5", children: [c && e.jsxs(e.Fragment, { children: [e.jsx(y, { label: "Footprints", value: c.footprints.length }), e.jsx(y, { label: "Traces", value: c.traces.length }), e.jsx(y, { label: "Vias", value: c.vias.length }), e.jsx(y, { label: "Nets", value: c.nets.length }), e.jsx(y, { label: "Layers", value: c.stackup.layers.filter((s) => s.copperThickness).length })] }), t && e.jsx(y, { label: "Components", value: t.components.length })] })] });
}
export {
  J as ElectronicsPanelHeader,
  J as default
};
