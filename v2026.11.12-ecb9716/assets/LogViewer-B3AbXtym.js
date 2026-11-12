import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { t as r } from "./X.es-eqQvie4c.js";
import { n as i, r as a, t as o } from "./Copy.es-DkwJABGZ.js";
import { t as s } from "./SSRBase.es-DslTvOt6.js";
import { t as c } from "./utils-D0T3A-kS.js";
import { t as l } from "./notification-store-BYW1uPuc.js";
var u = e(t(), 1), d = /* @__PURE__ */ new Map([[`bold`, u.createElement(u.Fragment, null, u.createElement(`path`, { d: `M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.6,83.6,0,0,1-16.75,50.28L77.72,60.75A84,84,0,0,1,212,128ZM44,128A83.6,83.6,0,0,1,60.75,77.72L178.28,195.25A84,84,0,0,1,44,128Z` }))], [`duotone`, u.createElement(u.Fragment, null, u.createElement(`path`, { d: `M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z`, opacity: `0.2` }), u.createElement(`path`, { d: `M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.56,87.56,0,0,1-20.41,56.28L71.72,60.4A88,88,0,0,1,216,128ZM40,128A87.56,87.56,0,0,1,60.41,71.72L184.28,195.6A88,88,0,0,1,40,128Z` }))], [`fill`, u.createElement(u.Fragment, null, u.createElement(`path`, { d: `M200,128a71.69,71.69,0,0,1-15.78,44.91L83.09,71.78A71.95,71.95,0,0,1,200,128ZM56,128a71.95,71.95,0,0,0,116.91,56.22L71.78,83.09A71.69,71.69,0,0,0,56,128Zm180,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-20,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z` }))], [`light`, u.createElement(u.Fragment, null, u.createElement(`path`, { d: `M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.6,89.6,0,0,1-22.29,59.22L68.78,60.29A89.95,89.95,0,0,1,218,128ZM38,128A89.6,89.6,0,0,1,60.29,68.78L187.22,195.71A89.95,89.95,0,0,1,38,128Z` }))], [`regular`, u.createElement(u.Fragment, null, u.createElement(`path`, { d: `M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.56,87.56,0,0,1-20.41,56.28L71.72,60.4A88,88,0,0,1,216,128ZM40,128A87.56,87.56,0,0,1,60.41,71.72L184.28,195.6A88,88,0,0,1,40,128Z` }))], [`thin`, u.createElement(u.Fragment, null, u.createElement(`path`, { d: `M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm92,100a91.67,91.67,0,0,1-24.21,62.13L65.87,60.21A92,92,0,0,1,220,128ZM36,128A91.67,91.67,0,0,1,60.21,65.87L190.13,195.79A92,92,0,0,1,36,128Z` }))]]), f = u.forwardRef((e2, t2) => u.createElement(s, { ref: t2, ...e2, weights: d }));
f.displayName = `ProhibitIcon`;
var p = f, m = n(), h = [{ id: `console`, label: `Console` }], g = [{ value: `DEBUG`, label: `Debug` }, { value: `INFO`, label: `Info` }, { value: `WARN`, label: `Warn` }, { value: `ERROR`, label: `Error` }], _ = [{ value: `kernel`, label: `kernel` }, { value: `engine`, label: `engine` }, { value: `app`, label: `app` }, { value: `gpu`, label: `gpu` }, { value: `step`, label: `step` }, { value: `mesh`, label: `mesh` }], v = { DEBUG: `text-text-muted`, INFO: `text-blue-400`, WARN: `text-yellow-400`, ERROR: `text-red-400` }, y = { DEBUG: `bg-text-muted/10`, INFO: `bg-blue-400/10`, WARN: `bg-yellow-400/10`, ERROR: `bg-red-400/10` };
function b(e2) {
  return new Date(e2).toLocaleTimeString(`en-US`, { hour12: false, hour: `2-digit`, minute: `2-digit`, second: `2-digit` });
}
function x({ entry: e2 }) {
  return (0, m.jsxs)(`div`, { className: c(`flex items-baseline gap-2 px-3 py-0.5 border-b border-border/40 font-mono text-[11px]`, y[e2.level]), children: [(0, m.jsx)(`span`, { className: `text-text-muted/60 shrink-0 text-[10px]`, children: b(e2.timestamp) }), (0, m.jsx)(`span`, { className: c(`shrink-0 text-[10px] uppercase font-semibold w-10`, v[e2.level]), children: e2.level }), (0, m.jsx)(`span`, { className: `shrink-0 text-text-muted/70 text-[10px]`, children: e2.source }), (0, m.jsx)(`span`, { className: `text-text break-all min-w-0 flex-1`, children: e2.message })] });
}
function S() {
  let e2 = (0, u.useRef)(null), t2 = (0, u.useRef)(null), n2 = (0, u.useRef)(true), s2 = a((e3) => e3.panelOpen), d2 = a((e3) => e3.closePanel), f2 = a((e3) => e3.clearLogs), v2 = a((e3) => e3.entries), y2 = a((e3) => e3.minLevel), S2 = a((e3) => e3.setMinLevel), C = a((e3) => e3.enabledSources), w = a((e3) => e3.toggleSource), T = i({ entries: v2, panelOpen: s2, minLevel: y2, enabledSources: C, togglePanel: () => {
  }, openPanel: () => {
  }, closePanel: () => {
  }, setMinLevel: () => {
  }, toggleSource: () => {
  }, clearLogs: () => {
  } });
  return (0, u.useEffect)(() => {
    t2.current && n2.current && (t2.current.scrollTop = t2.current.scrollHeight);
  }, [T.length]), (0, u.useEffect)(() => {
    function e3(e4) {
      e4.key === `Escape` && s2 && d2();
    }
    return window.addEventListener(`keydown`, e3), () => window.removeEventListener(`keydown`, e3);
  }, [s2, d2]), s2 ? (0, m.jsxs)(`div`, { ref: e2, className: c(`w-full bg-surface flex flex-col h-[40vh] min-h-0 border-t border-border/40`, `animate-in slide-in-from-bottom duration-150`), children: [(0, m.jsxs)(`div`, { className: `flex h-7 shrink-0 items-stretch border-b border-border/40`, children: [h.map((e3) => (0, m.jsx)(`button`, { className: c(`px-3 text-[11px] border-r border-border/40 transition-colors`, e3.id === `console` ? `bg-bg text-text border-b-0` : `text-text-muted hover:text-text hover:bg-hover`), children: e3.label }, e3.id)), (0, m.jsx)(`div`, { className: `flex-1` }), (0, m.jsx)(`button`, { onClick: d2, className: `flex h-full w-7 items-center justify-center text-text-muted hover:text-text hover:bg-hover`, title: `Close DevTools (~)`, children: (0, m.jsx)(r, { size: 13 }) })] }), (0, m.jsxs)(`div`, { className: `flex h-7 shrink-0 items-center gap-1 px-2 border-b border-border/40 text-[10px]`, children: [(0, m.jsx)(`button`, { onClick: () => {
    f2(), l.getState().addToast(`Logs cleared`, `info`);
  }, className: `flex h-5 w-5 items-center justify-center text-text-muted hover:text-text hover:bg-hover`, title: `Clear console`, children: (0, m.jsx)(p, { size: 12 }) }), (0, m.jsx)(`button`, { onClick: () => {
    let e3 = T.map((e4) => `[${b(e4.timestamp)}] [${e4.level}] [${e4.source}] ${e4.message}`).join(`
`);
    navigator.clipboard.writeText(e3), l.getState().addToast(`Logs copied to clipboard`, `success`);
  }, className: `flex h-5 w-5 items-center justify-center text-text-muted hover:text-text hover:bg-hover`, title: `Copy filtered entries`, children: (0, m.jsx)(o, { size: 12 }) }), (0, m.jsx)(`div`, { className: `mx-1 h-4 w-px bg-border` }), (0, m.jsx)(`div`, { className: `flex items-center gap-0.5`, children: g.map((e3) => (0, m.jsx)(`button`, { onClick: () => S2(e3.value), className: c(`px-1.5 h-5 leading-none transition-colors`, y2 === e3.value ? `bg-brand/15 text-brand` : `text-text-muted hover:text-text hover:bg-hover`), title: `Show ${e3.label} and above`, children: e3.label }, e3.value)) }), (0, m.jsx)(`div`, { className: `mx-1 h-4 w-px bg-border` }), (0, m.jsx)(`div`, { className: `flex items-center gap-0.5 flex-wrap`, children: _.map((e3) => {
    let t3 = C.has(e3.value);
    return (0, m.jsx)(`button`, { onClick: () => w(e3.value), className: c(`px-1.5 h-5 leading-none font-mono transition-colors`, t3 ? `text-text` : `text-text-muted/50 line-through hover:text-text-muted`), title: t3 ? `Hide ${e3.label}` : `Show ${e3.label}`, children: e3.label }, e3.value);
  }) }), (0, m.jsx)(`div`, { className: `flex-1` }), (0, m.jsxs)(`span`, { className: `text-text-muted`, children: [T.length, T.length !== v2.length && ` / ${v2.length}`] })] }), (0, m.jsx)(`div`, { ref: t2, onScroll: () => {
    if (!t2.current) return;
    let { scrollTop: e3, scrollHeight: r2, clientHeight: i2 } = t2.current;
    n2.current = r2 - e3 - i2 < 50;
  }, className: `flex-1 overflow-y-auto min-h-0 bg-bg`, children: T.length === 0 ? (0, m.jsx)(`div`, { className: `flex items-center justify-center h-32 text-text-muted text-xs`, children: `No messages` }) : T.map((e3) => (0, m.jsx)(x, { entry: e3 }, e3.id)) })] }) : null;
}
export {
  S as LogViewer
};
