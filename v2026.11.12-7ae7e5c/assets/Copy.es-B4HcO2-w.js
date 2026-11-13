import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t } from "./three-drei-_EcrAYRL.js";
import { t as n } from "./react-Cf1qM0wN.js";
import { t as r } from "./middleware-CJ9hWF1h.js";
import { a as i, i as a, r as o } from "./dist-CKOzv-X0.js";
import { t as s } from "./SSRBase.es-DslTvOt6.js";
var c = new Set(Object.values(a)), l = n()(r((e2) => (i.subscribe((t2) => {
  e2((e3) => ({ entries: [...e3.entries.slice(-999), t2] }));
}), { entries: i.getEntries(), panelOpen: false, minLevel: `DEBUG`, enabledSources: c, togglePanel: () => e2((e3) => ({ panelOpen: !e3.panelOpen })), openPanel: () => e2({ panelOpen: true }), closePanel: () => e2({ panelOpen: false }), setMinLevel: (t2) => e2({ minLevel: t2 }), toggleSource: (t2) => e2((e3) => {
  let n2 = new Set(e3.enabledSources);
  return n2.has(t2) ? n2.delete(t2) : n2.add(t2), { enabledSources: n2 };
}), clearLogs: () => {
  i.clear(), e2({ entries: [] });
} }), { name: `vcad-log-settings`, partialize: (e2) => ({ minLevel: e2.minLevel, enabledSources: Array.from(e2.enabledSources) }), merge: (e2, t2) => {
  let n2 = e2;
  return { ...t2, minLevel: (n2 == null ? void 0 : n2.minLevel) ?? t2.minLevel, enabledSources: (n2 == null ? void 0 : n2.enabledSources) ? new Set(n2.enabledSources) : t2.enabledSources };
} }));
function u(e2) {
  let t2 = o[e2.minLevel];
  return e2.entries.filter((n2) => o[n2.level] >= t2 && e2.enabledSources.has(n2.source));
}
var d = e(t(), 1), f = /* @__PURE__ */ new Map([[`bold`, d.createElement(d.Fragment, null, d.createElement(`path`, { d: `M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z` }))], [`duotone`, d.createElement(d.Fragment, null, d.createElement(`path`, { d: `M216,40V168H168V88H88V40Z`, opacity: `0.2` }), d.createElement(`path`, { d: `M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z` }))], [`fill`, d.createElement(d.Fragment, null, d.createElement(`path`, { d: `M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z` }))], [`light`, d.createElement(d.Fragment, null, d.createElement(`path`, { d: `M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z` }))], [`regular`, d.createElement(d.Fragment, null, d.createElement(`path`, { d: `M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z` }))], [`thin`, d.createElement(d.Fragment, null, d.createElement(`path`, { d: `M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z` }))]]), p = d.forwardRef((e2, t2) => d.createElement(s, { ref: t2, ...e2, weights: f }));
p.displayName = `CopyIcon`;
var m = p;
export {
  u as n,
  l as r,
  m as t
};
