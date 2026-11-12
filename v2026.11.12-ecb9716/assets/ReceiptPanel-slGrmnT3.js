import { t as e } from "./electronics-store-DvvmGMOD.js";
import { O as t } from "./three-drei-_EcrAYRL.js";
var n = t(), r = { regression: { label: `Regression`, cls: `bg-red-500/20 text-red-300` }, "improved-with-regressions": { label: `Improved \xB7 regressions`, cls: `bg-amber-500/20 text-amber-300` }, improved: { label: `Improved`, cls: `bg-emerald-500/20 text-emerald-300` }, clean: { label: `Clean`, cls: `bg-emerald-500/20 text-emerald-300` }, "no-op": { label: `No change`, cls: `bg-white/10 text-text-muted` } }, i = { footprint: `footprint`, placement: `placement`, routing: `routing`, via: `via`, connectivity: `unrouted`, unknown: `other` }, a = (e2) => e2 > 0 ? `+${e2}` : `${e2}`;
function o(e2) {
  let t2 = /* @__PURE__ */ new Map();
  for (let n2 of e2) t2.set(n2.cause, (t2.get(n2.cause) ?? 0) + n2.count);
  return [...t2.entries()].map(([e3, t3]) => ({ cause: e3, count: t3 })).sort((e3, t3) => t3.count - e3.count);
}
function s(e2) {
  return [.../* @__PURE__ */ new Set([...Object.keys(e2.before.byRule), ...Object.keys(e2.after.byRule)])].map((t2) => ({ rule: t2, b: e2.before.byRule[t2] ?? 0, a: e2.after.byRule[t2] ?? 0, d: (e2.after.byRule[t2] ?? 0) - (e2.before.byRule[t2] ?? 0) })).filter((e3) => e3.d !== 0).sort((e3, t2) => Math.abs(t2.d) - Math.abs(e3.d));
}
function c({ children: e2, cls: t2 }) {
  return (0, n.jsx)(`span`, { className: `px-1.5 py-0.5 rounded border text-[9.5px] whitespace-nowrap ${t2}`, children: e2 });
}
function l({ e: e2 }) {
  let t2 = r[e2.verdict] ?? r[`no-op`], l2 = s(e2), u2 = o(e2.fixed), d = o(e2.introduced), f = o(e2.persisted.filter((e3) => e3.blame === `pre-existing`));
  return (0, n.jsxs)(`div`, { className: `rounded-md border border-border/60 bg-black/10 p-2`, children: [(0, n.jsxs)(`div`, { className: `flex justify-between items-center mb-1.5`, children: [(0, n.jsx)(`span`, { className: `font-medium text-text font-mono`, children: e2.tool }), (0, n.jsx)(`span`, { className: `px-1.5 py-0.5 rounded text-[9.5px] font-medium ${t2.cls}`, children: t2.label })] }), (0, n.jsxs)(`div`, { className: `text-text-muted mb-1.5`, children: [`DRC `, e2.before.errors, ` \u2192 `, e2.after.errors, ` `, (0, n.jsxs)(`span`, { className: `opacity-60`, children: [`(`, a(e2.deltaTotal), `)`] })] }), e2.tally.shortsIntroduced > 0 && (0, n.jsxs)(`div`, { className: `mb-1.5 px-1.5 py-1 rounded bg-red-500/15 text-red-300 text-[10px]`, children: [`\u26A0 `, e2.tally.shortsIntroduced, ` hard short`, e2.tally.shortsIntroduced > 1 ? `s` : ``, ` introduced \u2014 board electrically broken`] }), l2.length > 0 && (0, n.jsx)(`div`, { className: `space-y-0.5 mb-1.5`, children: l2.map((e3) => (0, n.jsxs)(`div`, { className: `flex justify-between`, children: [(0, n.jsx)(`span`, { className: `text-text-muted`, children: e3.rule }), (0, n.jsxs)(`span`, { className: `tabular-nums`, children: [(0, n.jsxs)(`span`, { className: `opacity-60`, children: [e3.b, `\u2192`, e3.a] }), ` `, (0, n.jsx)(`span`, { className: e3.d < 0 ? `text-emerald-400` : `text-red-400`, children: a(e3.d) })] })] }, e3.rule)) }), (0, n.jsxs)(`div`, { className: `flex flex-wrap gap-1`, children: [u2.map((e3) => (0, n.jsxs)(c, { cls: `text-emerald-300 border-emerald-500/30`, children: [`\u2713 `, e3.count, `\xD7 `, i[e3.cause]] }, `f-${e3.cause}`)), d.map((e3) => (0, n.jsxs)(c, { cls: `text-red-300 border-red-500/30`, children: [`\u2717 `, e3.count, `\xD7 `, i[e3.cause]] }, `i-${e3.cause}`)), f.map((e3) => (0, n.jsxs)(c, { cls: `text-text-muted border-border`, children: [`\xB7 `, e3.count, `\xD7 `, i[e3.cause]] }, `p-${e3.cause}`))] })] });
}
function u() {
  let t2 = e((e2) => e2.showReceiptPanel), r2 = e((e2) => e2.receiptEntries), i2 = e((e2) => e2.clearReceipt), a2 = e((e2) => e2.toggleReceiptPanel);
  if (!t2) return null;
  let o2 = [...r2].reverse();
  return (0, n.jsxs)(`div`, { className: `absolute bottom-3 left-3 w-80 max-h-[70vh] flex flex-col rounded-lg border border-border bg-surface/95 backdrop-blur-sm shadow-lg text-[11px] pointer-events-auto`, children: [(0, n.jsxs)(`div`, { className: `flex justify-between items-center px-3 py-2 border-b border-border`, children: [(0, n.jsx)(`span`, { className: `font-medium text-text`, children: `Receipt ledger` }), (0, n.jsxs)(`div`, { className: `flex gap-2.5 items-center`, children: [(0, n.jsx)(`span`, { className: `text-text-muted tabular-nums`, children: r2.length }), (0, n.jsx)(`button`, { onClick: i2, className: `text-[10px] text-text-muted hover:text-text transition-colors`, children: `Clear` }), (0, n.jsx)(`button`, { onClick: a2, "aria-label": `Close ledger`, className: `text-[10px] text-text-muted hover:text-text transition-colors`, children: `\u2715` })] })] }), (0, n.jsx)(`div`, { className: `overflow-y-auto p-2 space-y-2`, children: o2.length === 0 ? (0, n.jsx)(`div`, { className: `text-text-muted px-1 py-3 leading-relaxed`, children: `No edits yet. Route, move, or place something and each change shows up here \u2014 what it fixed, what it introduced, and who's to blame.` }) : o2.map((e2) => (0, n.jsx)(l, { e: e2 }, e2.index)) })] });
}
export {
  u as ReceiptPanel
};
