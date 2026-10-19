import { k as e, b as F } from "./three-fiber-GW7QWJN8.js";
import { c6 as r, b4 as C, b3 as B, ac as A, b5 as I, bu as D, av as T, $ as M, ad as V } from "./index-BCvZCcjD.js";
import { a as O, m as $ } from "./pcb-interference-D-jt2V7v.js";
import "./three-tnxpQXqG.js";
import "./three-drei-en0aG1CM.js";
const H = 2;
function W(x) {
  const o = x.outline.vertices;
  if (o.length < 3) return { w: 0, h: 0 };
  let m = 1 / 0, i = -1 / 0, f = 1 / 0, u = -1 / 0;
  for (const n of o) n.x < m && (m = n.x), n.x > i && (i = n.x), n.y < f && (f = n.y), n.y > u && (u = n.y);
  return { w: i - m, h: u - f };
}
function y({ label: x, value: o, danger: m }) {
  return e.jsxs("span", { className: "inline-flex items-baseline gap-1", children: [e.jsx("span", { className: "text-text-muted", children: x }), e.jsx("span", { className: m && o > 0 ? "text-danger font-medium" : "text-text font-medium", children: o })] });
}
function K({ pcb: x }) {
  const o = B((t) => t.activeBoardNodeId), m = C((t) => t.document), i = C((t) => t.parts), f = I((t) => t.scene), u = C((t) => t.resizeBoard), n = C((t) => t.setTranslation), j = D((t) => t.addToast), [c, p] = F.useState(null), { w: E, h: S } = W(x);
  let w = 0;
  f == null ? void 0 : f.parts.forEach((t, a) => {
    var _a, _b;
    const h = i[a];
    h && !T(h) && (((_b = (_a = t.mesh) == null ? void 0 : _a.positions) == null ? void 0 : _b.length) ?? 0) > 0 && w++;
  });
  const N = () => {
    if (!c) return;
    const t = parseFloat(c.w), a = parseFloat(c.h);
    isFinite(t) && isFinite(a) && t > 0 && a > 0 && u(t, a), p(null);
  }, l = () => {
    const t = [];
    f == null ? void 0 : f.parts.forEach((L, z) => {
      var _a;
      const k = i[z];
      if (k && T(k)) return;
      const P = O((_a = L.mesh) == null ? void 0 : _a.positions);
      P && t.push(P);
    });
    const a = $(t);
    if (!a) {
      j("No surrounding parts to fit the board to", "info");
      return;
    }
    const h = H, b = a.max[0] - a.min[0] - 2 * h, v = a.max[1] - a.min[1] - 2 * h;
    if (b < 1 || v < 1) {
      j("Surrounding parts are too small to fit a board", "info");
      return;
    }
    const g = o != null ? M(i, o) : null, d = g ? V(m, g) : null, s = d && d.scale.x !== 0 ? d.scale.x : 1, R = d && d.scale.y !== 0 ? d.scale.y : 1;
    u(b / s, v / R), g && n(g.id, { x: a.min[0] + h, y: a.min[1] + h, z: (d == null ? void 0 : d.position.z) ?? 0 }), j(`Board fit to enclosure \xB7 ${Math.round(b)}\xD7${Math.round(v)}mm`, "success");
  };
  return c ? e.jsxs("span", { className: "inline-flex items-center gap-0.5", children: [e.jsx("input", { "aria-label": "Board width (mm)", type: "number", autoFocus: true, value: c.w, onChange: (t) => p({ ...c, w: t.target.value }), onKeyDown: (t) => {
    t.key === "Enter" && N(), t.key === "Escape" && p(null);
  }, className: "w-10 bg-surface border border-border rounded px-1 py-0.5 text-text text-[11px] tabular-nums" }), e.jsx("span", { className: "text-text-muted", children: "\xD7" }), e.jsx("input", { "aria-label": "Board height (mm)", type: "number", value: c.h, onChange: (t) => p({ ...c, h: t.target.value }), onKeyDown: (t) => {
    t.key === "Enter" && N(), t.key === "Escape" && p(null);
  }, className: "w-10 bg-surface border border-border rounded px-1 py-0.5 text-text text-[11px] tabular-nums" }), e.jsx("button", { onClick: N, className: "ml-0.5 px-1 py-0.5 rounded text-accent hover:bg-accent/10", title: "Apply board size", children: "\u2713" })] }) : e.jsxs("span", { className: "inline-flex items-center gap-1", children: [e.jsxs("button", { onClick: () => p({ w: String(Math.round(E)), h: String(Math.round(S)) }), className: "text-text-muted hover:text-text underline decoration-dotted underline-offset-2", title: "Edit board size", children: [Math.round(E), "\xD7", Math.round(S), "mm"] }), w > 0 && e.jsx("button", { onClick: l, className: "px-1 py-0.5 rounded border border-border text-text-muted hover:text-text hover:border-accent/60", title: "Resize + position the board to fit the surrounding parts", children: "Fit" })] });
}
function G() {
  const x = r((s) => s.focusedPane), o = r((s) => s.schTool), m = r((s) => s.pcbTool), i = r((s) => s.pcbActiveLayer), f = r((s) => s.pcbLayers), u = r((s) => s.drcViolations), n = r((s) => s.pcbSolveStatus), j = C((s) => {
    var _a;
    return ((_a = s.document.constraints) == null ? void 0 : _a.length) ?? 0;
  }), c = r((s) => s.ercViolations), p = r((s) => s.receiptEntries.length), E = r((s) => s.showReceiptPanel), S = r((s) => s.toggleReceiptPanel), w = B((s) => s.activeBoardNodeId), N = C((s) => s.document), l = w != null ? A(N, w) : null, t = N.schematic, a = x === "pcb" ? m : o, h = a.charAt(0).toUpperCase() + a.slice(1), b = u.filter((s) => s.severity === "Error").length, v = u.length - b, g = c.length, d = f.find((s) => s.layer === i);
  return e.jsxs("div", { className: "shrink-0 border-b border-border/40 bg-surface/60 px-3 py-2 text-[11px]", children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsxs("span", { className: "flex items-center gap-1.5 min-w-0", children: [e.jsx("span", { className: "font-medium text-text", children: "Circuit" }), l && e.jsx(K, { pcb: l })] }), e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [j > 0 && e.jsx("span", { className: "inline-flex items-center gap-1", title: "Design constraints: solve status / degrees of freedom", children: n == null ? e.jsxs("span", { className: "text-text-muted", children: [j, " constraints"] }) : n.overConstrained || !n.converged ? e.jsx("span", { className: "text-danger font-medium", children: n.overConstrained ? "Over-constrained" : "Not converged" }) : n.dof === 0 ? e.jsx("span", { className: "text-success font-medium", children: "Solved" }) : e.jsxs("span", { className: "text-text-muted", children: [n.dof, " DOF"] }) }), e.jsxs("span", { className: "inline-flex items-center gap-1", title: "DRC errors / warnings", children: [e.jsx("span", { className: "text-text-muted", children: "DRC" }), e.jsx("span", { className: b > 0 ? "text-danger font-medium" : "text-text-muted", children: b }), e.jsxs("span", { className: v > 0 ? "text-warning" : "text-text-muted", children: ["\u26A0", v] })] }), e.jsxs("span", { className: "inline-flex items-center gap-1", title: "ERC issues", children: [e.jsx("span", { className: "text-text-muted", children: "ERC" }), e.jsx("span", { className: g > 0 ? "text-warning font-medium" : "text-text-muted", children: g })] }), e.jsxs("button", { onClick: S, title: "Toggle the Receipt ledger \u2014 what each edit fixed or broke", className: `inline-flex items-center gap-1 rounded px-1.5 py-0.5 transition-colors ${E ? "text-brand bg-brand/10" : "text-text-muted hover:text-text"}`, children: [e.jsx("span", { children: "Ledger" }), p > 0 && e.jsx("span", { className: "tabular-nums rounded bg-white/10 px-1 text-[9.5px]", children: p })] })] })] }), e.jsxs("div", { className: "mt-0.5 flex items-center gap-1.5 text-text-muted", children: [e.jsx("span", { className: "capitalize", children: x }), e.jsx("span", { children: "\xB7" }), e.jsx("span", { className: "text-text", children: h }), x === "pcb" && d && e.jsxs("span", { className: "ml-auto inline-flex items-center gap-1", title: "Active layer", children: [e.jsx("span", { className: "w-2 h-2 rounded-full", style: { backgroundColor: d.color } }), e.jsx("span", { children: i })] })] }), e.jsxs("div", { className: "mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5", children: [l && e.jsxs(e.Fragment, { children: [e.jsx(y, { label: "Footprints", value: l.footprints.length }), e.jsx(y, { label: "Traces", value: l.traces.length }), e.jsx(y, { label: "Vias", value: l.vias.length }), e.jsx(y, { label: "Nets", value: l.nets.length }), e.jsx(y, { label: "Layers", value: l.stackup.layers.filter((s) => s.copperThickness).length })] }), t && e.jsx(y, { label: "Components", value: t.components.length })] })] });
}
export {
  G as ElectronicsPanelHeader,
  G as default
};
