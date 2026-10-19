import { k as t } from "./three-fiber-GW7QWJN8.js";
import { c6 as c } from "./index-B2PsV3Ii.js";
import "./three-tnxpQXqG.js";
import "./three-drei-C9A0_-Vj.js";
const m = { regression: { label: "Regression", cls: "bg-red-500/20 text-red-300" }, "improved-with-regressions": { label: "Improved \xB7 regressions", cls: "bg-amber-500/20 text-amber-300" }, improved: { label: "Improved", cls: "bg-emerald-500/20 text-emerald-300" }, clean: { label: "Clean", cls: "bg-emerald-500/20 text-emerald-300" }, "no-op": { label: "No change", cls: "bg-white/10 text-text-muted" } }, d = { footprint: "footprint", placement: "placement", routing: "routing", via: "via", connectivity: "unrouted", unknown: "other" }, u = (e) => e > 0 ? `+${e}` : `${e}`;
function i(e) {
  const a = /* @__PURE__ */ new Map();
  for (const s of e) a.set(s.cause, (a.get(s.cause) ?? 0) + s.count);
  return [...a.entries()].map(([s, o]) => ({ cause: s, count: o })).sort((s, o) => o.count - s.count);
}
function p(e) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e.before.byRule), ...Object.keys(e.after.byRule)])].map((s) => ({ rule: s, b: e.before.byRule[s] ?? 0, a: e.after.byRule[s] ?? 0, d: (e.after.byRule[s] ?? 0) - (e.before.byRule[s] ?? 0) })).filter((s) => s.d !== 0).sort((s, o) => Math.abs(o.d) - Math.abs(s.d));
}
function x({ children: e, cls: a }) {
  return t.jsx("span", { className: `px-1.5 py-0.5 rounded border text-[9.5px] whitespace-nowrap ${a}`, children: e });
}
function b({ e }) {
  const a = m[e.verdict] ?? m["no-op"], s = p(e), o = i(e.fixed), l = i(e.introduced), n = i(e.persisted.filter((r) => r.blame === "pre-existing"));
  return t.jsxs("div", { className: "rounded-md border border-border/60 bg-black/10 p-2", children: [t.jsxs("div", { className: "flex justify-between items-center mb-1.5", children: [t.jsx("span", { className: "font-medium text-text font-mono", children: e.tool }), t.jsx("span", { className: `px-1.5 py-0.5 rounded text-[9.5px] font-medium ${a.cls}`, children: a.label })] }), t.jsxs("div", { className: "text-text-muted mb-1.5", children: ["DRC ", e.before.errors, " \u2192 ", e.after.errors, " ", t.jsxs("span", { className: "opacity-60", children: ["(", u(e.deltaTotal), ")"] })] }), e.tally.shortsIntroduced > 0 && t.jsxs("div", { className: "mb-1.5 px-1.5 py-1 rounded bg-red-500/15 text-red-300 text-[10px]", children: ["\u26A0 ", e.tally.shortsIntroduced, " hard short", e.tally.shortsIntroduced > 1 ? "s" : "", " introduced \u2014 board electrically broken"] }), s.length > 0 && t.jsx("div", { className: "space-y-0.5 mb-1.5", children: s.map((r) => t.jsxs("div", { className: "flex justify-between", children: [t.jsx("span", { className: "text-text-muted", children: r.rule }), t.jsxs("span", { className: "tabular-nums", children: [t.jsxs("span", { className: "opacity-60", children: [r.b, "\u2192", r.a] }), " ", t.jsx("span", { className: r.d < 0 ? "text-emerald-400" : "text-red-400", children: u(r.d) })] })] }, r.rule)) }), t.jsxs("div", { className: "flex flex-wrap gap-1", children: [o.map((r) => t.jsxs(x, { cls: "text-emerald-300 border-emerald-500/30", children: ["\u2713 ", r.count, "\xD7 ", d[r.cause]] }, `f-${r.cause}`)), l.map((r) => t.jsxs(x, { cls: "text-red-300 border-red-500/30", children: ["\u2717 ", r.count, "\xD7 ", d[r.cause]] }, `i-${r.cause}`)), n.map((r) => t.jsxs(x, { cls: "text-text-muted border-border", children: ["\xB7 ", r.count, "\xD7 ", d[r.cause]] }, `p-${r.cause}`))] })] });
}
function y() {
  const e = c((n) => n.showReceiptPanel), a = c((n) => n.receiptEntries), s = c((n) => n.clearReceipt), o = c((n) => n.toggleReceiptPanel);
  if (!e) return null;
  const l = [...a].reverse();
  return t.jsxs("div", { className: "absolute bottom-3 left-3 w-80 max-h-[70vh] flex flex-col rounded-lg border border-border bg-surface/95 backdrop-blur-sm shadow-lg text-[11px] pointer-events-auto", children: [t.jsxs("div", { className: "flex justify-between items-center px-3 py-2 border-b border-border", children: [t.jsx("span", { className: "font-medium text-text", children: "Receipt ledger" }), t.jsxs("div", { className: "flex gap-2.5 items-center", children: [t.jsx("span", { className: "text-text-muted tabular-nums", children: a.length }), t.jsx("button", { onClick: s, className: "text-[10px] text-text-muted hover:text-text transition-colors", children: "Clear" }), t.jsx("button", { onClick: o, "aria-label": "Close ledger", className: "text-[10px] text-text-muted hover:text-text transition-colors", children: "\u2715" })] })] }), t.jsx("div", { className: "overflow-y-auto p-2 space-y-2", children: l.length === 0 ? t.jsx("div", { className: "text-text-muted px-1 py-3 leading-relaxed", children: "No edits yet. Route, move, or place something and each change shows up here \u2014 what it fixed, what it introduced, and who's to blame." }) : l.map((n) => t.jsx(b, { e: n }, n.index)) })] });
}
export {
  y as ReceiptPanel
};
