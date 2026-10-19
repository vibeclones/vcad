import { k as e, b as A } from "./three-fiber-GW7QWJN8.js";
import { c6 as d, b3 as B, b4 as E, ae as F, b5 as I, bu as M, ay as T, a1 as D, af as V } from "./index-B2PsV3Ii.js";
import { a as H, m as W } from "./pcb-interference-D-jt2V7v.js";
import "./three-tnxpQXqG.js";
import "./three-drei-C9A0_-Vj.js";
const $ = 2;
function K(x) {
  const o = x.outline.vertices;
  if (o.length < 3) return { w: 0, h: 0 };
  let u = 1 / 0, i = -1 / 0, p = 1 / 0, m = -1 / 0;
  for (const a of o) a.x < u && (u = a.x), a.x > i && (i = a.x), a.y < p && (p = a.y), a.y > m && (m = a.y);
  return { w: i - u, h: m - p };
}
function N({ label: x, value: o, danger: u }) {
  return e.jsxs("span", { className: "inline-flex items-baseline gap-1", children: [e.jsx("span", { className: "text-text-muted", children: x }), e.jsx("span", { className: u && o > 0 ? "text-danger font-medium" : "text-text font-medium", children: o })] });
}
function O({ pcb: x }) {
  const o = B((t) => t.activeBoardNodeId), u = E((t) => t.document), i = E((t) => t.parts), p = I((t) => t.scene), m = E((t) => t.resizeBoard), a = E((t) => t.setTranslation), b = M((t) => t.addToast), [c, h] = A.useState(null), { w: v, h: w } = K(x);
  let r = 0;
  p == null ? void 0 : p.parts.forEach((t, n) => {
    var _a, _b;
    const l = i[n];
    l && !T(l) && (((_b = (_a = t.mesh) == null ? void 0 : _a.positions) == null ? void 0 : _b.length) ?? 0) > 0 && r++;
  });
  const g = () => {
    if (!c) return;
    const t = parseFloat(c.w), n = parseFloat(c.h);
    isFinite(t) && isFinite(n) && t > 0 && n > 0 && m(t, n), h(null);
  }, C = () => {
    const t = [];
    p == null ? void 0 : p.parts.forEach((L, z) => {
      var _a;
      const k = i[z];
      if (k && T(k)) return;
      const P = H((_a = L.mesh) == null ? void 0 : _a.positions);
      P && t.push(P);
    });
    const n = W(t);
    if (!n) {
      b("No surrounding parts to fit the board to", "info");
      return;
    }
    const l = $, j = n.max[0] - n.min[0] - 2 * l, y = n.max[1] - n.min[1] - 2 * l;
    if (j < 1 || y < 1) {
      b("Surrounding parts are too small to fit a board", "info");
      return;
    }
    const s = o != null ? D(i, o) : null, f = s ? V(u, s) : null, R = f && f.scale.x !== 0 ? f.scale.x : 1, S = f && f.scale.y !== 0 ? f.scale.y : 1;
    m(j / R, y / S), s && a(s.id, { x: n.min[0] + l, y: n.min[1] + l, z: (f == null ? void 0 : f.position.z) ?? 0 }), b(`Board fit to enclosure \xB7 ${Math.round(j)}\xD7${Math.round(y)}mm`, "success");
  };
  return c ? e.jsxs("span", { className: "inline-flex items-center gap-0.5", children: [e.jsx("input", { "aria-label": "Board width (mm)", type: "number", autoFocus: true, value: c.w, onChange: (t) => h({ ...c, w: t.target.value }), onKeyDown: (t) => {
    t.key === "Enter" && g(), t.key === "Escape" && h(null);
  }, className: "w-10 bg-surface border border-border rounded px-1 py-0.5 text-text text-[11px] tabular-nums" }), e.jsx("span", { className: "text-text-muted", children: "\xD7" }), e.jsx("input", { "aria-label": "Board height (mm)", type: "number", value: c.h, onChange: (t) => h({ ...c, h: t.target.value }), onKeyDown: (t) => {
    t.key === "Enter" && g(), t.key === "Escape" && h(null);
  }, className: "w-10 bg-surface border border-border rounded px-1 py-0.5 text-text text-[11px] tabular-nums" }), e.jsx("button", { onClick: g, className: "ml-0.5 px-1 py-0.5 rounded text-accent hover:bg-accent/10", title: "Apply board size", children: "\u2713" })] }) : e.jsxs("span", { className: "inline-flex items-center gap-1", children: [e.jsxs("button", { onClick: () => h({ w: String(Math.round(v)), h: String(Math.round(w)) }), className: "text-text-muted hover:text-text underline decoration-dotted underline-offset-2", title: "Edit board size", children: [Math.round(v), "\xD7", Math.round(w), "mm"] }), r > 0 && e.jsx("button", { onClick: C, className: "px-1 py-0.5 rounded border border-border text-text-muted hover:text-text hover:border-accent/60", title: "Resize + position the board to fit the surrounding parts", children: "Fit" })] });
}
function G() {
  const x = d((s) => s.focusedPane), o = d((s) => s.schTool), u = d((s) => s.pcbTool), i = d((s) => s.pcbActiveLayer), p = d((s) => s.pcbLayers), m = d((s) => s.drcViolations), a = d((s) => s.ercViolations), b = d((s) => s.receiptEntries.length), c = d((s) => s.showReceiptPanel), h = d((s) => s.toggleReceiptPanel), v = B((s) => s.activeBoardNodeId), w = E((s) => s.document), r = v != null ? F(w, v) : null, g = w.schematic, C = x === "pcb" ? u : o, t = C.charAt(0).toUpperCase() + C.slice(1), n = m.filter((s) => s.severity === "Error").length, l = m.length - n, j = a.length, y = p.find((s) => s.layer === i);
  return e.jsxs("div", { className: "shrink-0 border-b border-border/40 bg-surface/60 px-3 py-2 text-[11px]", children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsxs("span", { className: "flex items-center gap-1.5 min-w-0", children: [e.jsx("span", { className: "font-medium text-text", children: "Circuit" }), r && e.jsx(O, { pcb: r })] }), e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [e.jsxs("span", { className: "inline-flex items-center gap-1", title: "DRC errors / warnings", children: [e.jsx("span", { className: "text-text-muted", children: "DRC" }), e.jsx("span", { className: n > 0 ? "text-danger font-medium" : "text-text-muted", children: n }), e.jsxs("span", { className: l > 0 ? "text-warning" : "text-text-muted", children: ["\u26A0", l] })] }), e.jsxs("span", { className: "inline-flex items-center gap-1", title: "ERC issues", children: [e.jsx("span", { className: "text-text-muted", children: "ERC" }), e.jsx("span", { className: j > 0 ? "text-warning font-medium" : "text-text-muted", children: j })] }), e.jsxs("button", { onClick: h, title: "Toggle the Receipt ledger \u2014 what each edit fixed or broke", className: `inline-flex items-center gap-1 rounded px-1.5 py-0.5 transition-colors ${c ? "text-brand bg-brand/10" : "text-text-muted hover:text-text"}`, children: [e.jsx("span", { children: "Ledger" }), b > 0 && e.jsx("span", { className: "tabular-nums rounded bg-white/10 px-1 text-[9.5px]", children: b })] })] })] }), e.jsxs("div", { className: "mt-0.5 flex items-center gap-1.5 text-text-muted", children: [e.jsx("span", { className: "capitalize", children: x }), e.jsx("span", { children: "\xB7" }), e.jsx("span", { className: "text-text", children: t }), x === "pcb" && y && e.jsxs("span", { className: "ml-auto inline-flex items-center gap-1", title: "Active layer", children: [e.jsx("span", { className: "w-2 h-2 rounded-full", style: { backgroundColor: y.color } }), e.jsx("span", { children: i })] })] }), e.jsxs("div", { className: "mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5", children: [r && e.jsxs(e.Fragment, { children: [e.jsx(N, { label: "Footprints", value: r.footprints.length }), e.jsx(N, { label: "Traces", value: r.traces.length }), e.jsx(N, { label: "Vias", value: r.vias.length }), e.jsx(N, { label: "Nets", value: r.nets.length }), e.jsx(N, { label: "Layers", value: r.stackup.layers.filter((s) => s.copperThickness).length })] }), g && e.jsx(N, { label: "Components", value: g.components.length })] })] });
}
export {
  G as ElectronicsPanelHeader,
  G as default
};
