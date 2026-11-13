import { i as e, n as t } from "./rolldown-runtime-COiEfhsA.js";
import { M as n, O as r } from "./three-drei-_EcrAYRL.js";
import { t as i } from "./scrub-input-CqhdypAa.js";
import { J as a, Tt as o, W as s } from "./dist-CKOzv-X0.js";
var c = t({ EmbroideryProperties: () => p }), l = e(n(), 1), u = r();
function d({ children: e2 }) {
  return (0, u.jsx)(`div`, { className: `text-[10px] font-medium uppercase tracking-wider text-text-muted pt-2 pb-1`, children: e2 });
}
function f() {
  return (0, u.jsx)(`div`, { className: `border-t border-border my-2` });
}
function p({ part: e2 }) {
  let t2 = a((e3) => e3.document), n2 = a((e3) => e3.setThreadColor), r2 = a((e3) => e3.setThreadName), c2 = a((e3) => e3.setStitchGroupFillParams), p2 = a((e3) => e3.optimizeJumpStitches), [_, v] = (0, l.useState)(null), y = (0, l.useMemo)(() => s(t2, e2.patternNodeId), [t2, e2.patternNodeId]), b = (0, l.useMemo)(() => {
    if (!y) return [];
    let e3 = Array(y.threads.length).fill(0);
    for (let t3 of y.stitch_groups) t3.thread_index < e3.length && (e3[t3.thread_index] += t3.stitches.length);
    return e3;
  }, [y]);
  if (!y) return (0, u.jsxs)(`div`, { className: `text-xs text-text-muted py-1`, children: [`No embroidery design found on node `, e2.patternNodeId] });
  let x = e2.patternNodeId, S = y.stitch_groups.reduce((e3, t3) => e3 + t3.stitches.length, 0), C = y.stitch_groups.length > 0 ? y.stitch_groups.length - 1 : 0, w = y.stitch_groups.length, T = Math.round(S * 0.06 / 60);
  return (0, u.jsxs)(`div`, { className: `space-y-1`, children: [(0, u.jsx)(d, { children: `Statistics` }), (0, u.jsxs)(`div`, { className: `grid grid-cols-2 gap-1`, children: [(0, u.jsx)(m, { label: `Stitches`, value: S.toLocaleString() }), (0, u.jsx)(m, { label: `Jumps`, value: String(C) }), (0, u.jsx)(m, { label: `Groups`, value: String(w) }), (0, u.jsx)(m, { label: `Est. time`, value: T > 0 ? `${T} min` : `<1 min` })] }), (0, u.jsx)(f, {}), (0, u.jsx)(d, { children: `Threads` }), (0, u.jsx)(`div`, { className: `space-y-1`, children: y.threads.map((e3, t3) => {
    var _a;
    return (0, u.jsxs)(`div`, { className: `flex items-center gap-1.5`, children: [(0, u.jsx)(`input`, { type: `color`, value: h(e3.color), onChange: (e4) => {
      let r3 = g(e4.target.value);
      n2(x, t3, r3);
    }, className: `w-5 h-5 p-0 border border-border rounded cursor-pointer bg-transparent`, title: `Thread ${t3 + 1} color` }), (0, u.jsx)(`input`, { type: `text`, value: e3.name, onChange: (e4) => r2(x, t3, e4.target.value), className: `flex-1 min-w-0 text-xs bg-transparent border-b border-transparent hover:border-border focus:border-brand focus:outline-none text-text px-0.5 py-0.5` }), (0, u.jsx)(`span`, { className: `text-[10px] text-text-muted tabular-nums shrink-0`, children: (_a = b[t3]) == null ? void 0 : _a.toLocaleString() })] }, t3);
  }) }), (0, u.jsx)(f, {}), (0, u.jsx)(d, { children: `Stitch Groups` }), (0, u.jsx)(`div`, { className: `space-y-0.5`, children: y.stitch_groups.map((e3, t3) => {
    let n3 = y.threads[e3.thread_index], r3 = _ === t3, a2 = e3.fill_params ?? o;
    return (0, u.jsxs)(`div`, { className: `border border-border rounded`, children: [(0, u.jsxs)(`button`, { onClick: () => v(r3 ? null : t3), className: `w-full flex items-center gap-1.5 px-2 py-1 hover:bg-hover/50 text-left`, children: [(0, u.jsx)(`div`, { className: `w-3 h-3 rounded-full shrink-0 border border-border/50`, style: { backgroundColor: n3 ? `rgb(${n3.color[0]}, ${n3.color[1]}, ${n3.color[2]})` : `#888` } }), (0, u.jsxs)(`span`, { className: `text-xs text-text truncate`, children: [`Group `, t3 + 1] }), (0, u.jsx)(`span`, { className: `text-[10px] text-text-muted ml-auto tabular-nums shrink-0`, children: e3.stitches.length }), (0, u.jsx)(`svg`, { className: `w-3 h-3 text-text-muted transition-transform shrink-0 ${r3 ? `rotate-180` : ``}`, fill: `none`, viewBox: `0 0 24 24`, stroke: `currentColor`, strokeWidth: 2, children: (0, u.jsx)(`path`, { strokeLinecap: `round`, strokeLinejoin: `round`, d: `M19 9l-7 7-7-7` }) })] }), r3 && (0, u.jsxs)(`div`, { className: `px-2 pb-2 space-y-1 border-t border-border`, children: [(0, u.jsxs)(`div`, { className: `flex items-center gap-2 pt-1`, children: [(0, u.jsx)(`span`, { className: `text-[10px] text-text-muted w-10`, children: `Type` }), (0, u.jsxs)(`select`, { value: a2.fill_type, onChange: (e4) => c2(x, t3, { fill_type: e4.target.value }), className: `flex-1 text-xs bg-hover border border-border rounded px-1.5 py-0.5 text-text`, children: [(0, u.jsx)(`option`, { value: `manual`, children: `Manual` }), (0, u.jsx)(`option`, { value: `fill`, children: `Fill` }), (0, u.jsx)(`option`, { value: `satin`, children: `Satin` }), (0, u.jsx)(`option`, { value: `running`, children: `Running` })] })] }), (0, u.jsx)(i, { label: `Angle`, value: a2.angle_deg, min: 0, max: 360, step: 5, onChange: (e4) => c2(x, t3, { angle_deg: e4 }), unit: `\xB0` }), (0, u.jsx)(i, { label: `Density`, value: a2.density_mm, min: 0.1, max: 2, step: 0.05, onChange: (e4) => c2(x, t3, { density_mm: e4 }), unit: `mm` }), (0, u.jsx)(i, { label: `Max length`, value: a2.max_stitch_length_mm, min: 1, max: 20, step: 0.5, onChange: (e4) => c2(x, t3, { max_stitch_length_mm: e4 }), unit: `mm` }), (0, u.jsxs)(`label`, { className: `flex items-center gap-1.5 pt-0.5 cursor-pointer`, children: [(0, u.jsx)(`input`, { type: `checkbox`, checked: a2.underlay, onChange: (e4) => c2(x, t3, { underlay: e4.target.checked }), className: `w-3 h-3 accent-brand` }), (0, u.jsx)(`span`, { className: `text-xs text-text`, children: `Underlay` })] })] })] }, t3);
  }) }), (0, u.jsx)(f, {}), (0, u.jsx)(`button`, { onClick: () => p2(x), className: `w-full rounded bg-hover px-3 py-1.5 text-xs font-medium text-text hover:bg-hover/80 transition-colors`, children: `Optimize Jump Stitches` })] });
}
function m({ label: e2, value: t2 }) {
  return (0, u.jsxs)(`div`, { className: `rounded bg-hover/50 px-2 py-1`, children: [(0, u.jsx)(`div`, { className: `text-[10px] text-text-muted`, children: e2 }), (0, u.jsx)(`div`, { className: `text-xs font-medium text-text tabular-nums`, children: t2 })] });
}
function h(e2) {
  return `#` + e2.map((e3) => e3.toString(16).padStart(2, `0`)).join(``);
}
function g(e2) {
  let t2 = e2.replace(`#`, ``);
  return [parseInt(t2.slice(0, 2), 16), parseInt(t2.slice(2, 4), 16), parseInt(t2.slice(4, 6), 16)];
}
export {
  c as n,
  p as t
};
