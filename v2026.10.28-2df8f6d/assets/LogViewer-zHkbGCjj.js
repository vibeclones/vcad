import { b as l, k as t } from "./three-fiber-DvYcInOp.js";
import { aq as R, aG as a, aH as S, c, f as Z, G as k, g as b } from "./index-BkIlMx7Q.js";
import "./three-tnxpQXqG.js";
import "./three-drei-CTUAgrap.js";
const M = /* @__PURE__ */ new Map([["bold", l.createElement(l.Fragment, null, l.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.6,83.6,0,0,1-16.75,50.28L77.72,60.75A84,84,0,0,1,212,128ZM44,128A83.6,83.6,0,0,1,60.75,77.72L178.28,195.25A84,84,0,0,1,44,128Z" }))], ["duotone", l.createElement(l.Fragment, null, l.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), l.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.56,87.56,0,0,1-20.41,56.28L71.72,60.4A88,88,0,0,1,216,128ZM40,128A87.56,87.56,0,0,1,60.41,71.72L184.28,195.6A88,88,0,0,1,40,128Z" }))], ["fill", l.createElement(l.Fragment, null, l.createElement("path", { d: "M200,128a71.69,71.69,0,0,1-15.78,44.91L83.09,71.78A71.95,71.95,0,0,1,200,128ZM56,128a71.95,71.95,0,0,0,116.91,56.22L71.78,83.09A71.69,71.69,0,0,0,56,128Zm180,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-20,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))], ["light", l.createElement(l.Fragment, null, l.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.6,89.6,0,0,1-22.29,59.22L68.78,60.29A89.95,89.95,0,0,1,218,128ZM38,128A89.6,89.6,0,0,1,60.29,68.78L187.22,195.71A89.95,89.95,0,0,1,38,128Z" }))], ["regular", l.createElement(l.Fragment, null, l.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.56,87.56,0,0,1-20.41,56.28L71.72,60.4A88,88,0,0,1,216,128ZM40,128A87.56,87.56,0,0,1,60.41,71.72L184.28,195.6A88,88,0,0,1,40,128Z" }))], ["thin", l.createElement(l.Fragment, null, l.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm92,100a91.67,91.67,0,0,1-24.21,62.13L65.87,60.21A92,92,0,0,1,220,128ZM36,128A91.67,91.67,0,0,1,60.21,65.87L190.13,195.79A92,92,0,0,1,36,128Z" }))]]), g = l.forwardRef((n, r) => l.createElement(R, { ref: r, ...n, weights: M }));
g.displayName = "ProhibitIcon";
const C = g, y = [{ id: "console", label: "Console" }], O = [{ value: "DEBUG", label: "Debug" }, { value: "INFO", label: "Info" }, { value: "WARN", label: "Warn" }, { value: "ERROR", label: "Error" }], F = [{ value: "kernel", label: "kernel" }, { value: "engine", label: "engine" }, { value: "app", label: "app" }, { value: "gpu", label: "gpu" }, { value: "step", label: "step" }, { value: "mesh", label: "mesh" }], T = { DEBUG: "text-text-muted", INFO: "text-blue-400", WARN: "text-yellow-400", ERROR: "text-red-400" }, $ = { DEBUG: "bg-text-muted/10", INFO: "bg-blue-400/10", WARN: "bg-yellow-400/10", ERROR: "bg-red-400/10" };
function p(n) {
  return new Date(n).toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
function D({ entry: n }) {
  return t.jsxs("div", { className: c("flex items-baseline gap-2 px-3 py-0.5 border-b border-border/40 font-mono text-[11px]", $[n.level]), children: [t.jsx("span", { className: "text-text-muted/60 shrink-0 text-[10px]", children: p(n.timestamp) }), t.jsx("span", { className: c("shrink-0 text-[10px] uppercase font-semibold w-10", T[n.level]), children: n.level }), t.jsx("span", { className: "shrink-0 text-text-muted/70 text-[10px]", children: n.source }), t.jsx("span", { className: "text-text break-all min-w-0 flex-1", children: n.message })] });
}
function U() {
  const n = l.useRef(null), r = l.useRef(null), m = l.useRef(true), i = a((e) => e.panelOpen), d = a((e) => e.closePanel), f = a((e) => e.clearLogs), x = a((e) => e.entries), u = a((e) => e.minLevel), v = a((e) => e.setMinLevel), h = a((e) => e.enabledSources), E = a((e) => e.toggleSource), j = "console", o = S({ entries: x, minLevel: u, enabledSources: h });
  l.useEffect(() => {
    r.current && m.current && (r.current.scrollTop = r.current.scrollHeight);
  }, [o.length]);
  const L = () => {
    if (!r.current) return;
    const { scrollTop: e, scrollHeight: s, clientHeight: w } = r.current;
    m.current = s - e - w < 50;
  };
  l.useEffect(() => {
    function e(s) {
      s.key === "Escape" && i && d();
    }
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
  }, [i, d]);
  const N = () => {
    const e = o.map((s) => `[${p(s.timestamp)}] [${s.level}] [${s.source}] ${s.message}`).join(`
`);
    navigator.clipboard.writeText(e), b.getState().addToast("Logs copied to clipboard", "success");
  }, A = () => {
    f(), b.getState().addToast("Logs cleared", "info");
  };
  return i ? t.jsxs("div", { ref: n, className: c("w-full bg-surface flex flex-col h-[40vh] min-h-0 border-t border-border/40", "animate-in slide-in-from-bottom duration-150"), children: [t.jsxs("div", { className: "flex h-7 shrink-0 items-stretch border-b border-border/40", children: [y.map((e) => t.jsx("button", { className: c("px-3 text-[11px] border-r border-border/40 transition-colors", j === e.id ? "bg-bg text-text border-b-0" : "text-text-muted hover:text-text hover:bg-hover"), children: e.label }, e.id)), t.jsx("div", { className: "flex-1" }), t.jsx("button", { onClick: d, className: "flex h-full w-7 items-center justify-center text-text-muted hover:text-text hover:bg-hover", title: "Close DevTools (~)", children: t.jsx(Z, { size: 13 }) })] }), t.jsxs("div", { className: "flex h-7 shrink-0 items-center gap-1 px-2 border-b border-border/40 text-[10px]", children: [t.jsx("button", { onClick: A, className: "flex h-5 w-5 items-center justify-center text-text-muted hover:text-text hover:bg-hover", title: "Clear console", children: t.jsx(C, { size: 12 }) }), t.jsx("button", { onClick: N, className: "flex h-5 w-5 items-center justify-center text-text-muted hover:text-text hover:bg-hover", title: "Copy filtered entries", children: t.jsx(k, { size: 12 }) }), t.jsx("div", { className: "mx-1 h-4 w-px bg-border" }), t.jsx("div", { className: "flex items-center gap-0.5", children: O.map((e) => t.jsx("button", { onClick: () => v(e.value), className: c("px-1.5 h-5 leading-none transition-colors", u === e.value ? "bg-brand/15 text-brand" : "text-text-muted hover:text-text hover:bg-hover"), title: `Show ${e.label} and above`, children: e.label }, e.value)) }), t.jsx("div", { className: "mx-1 h-4 w-px bg-border" }), t.jsx("div", { className: "flex items-center gap-0.5 flex-wrap", children: F.map((e) => {
    const s = h.has(e.value);
    return t.jsx("button", { onClick: () => E(e.value), className: c("px-1.5 h-5 leading-none font-mono transition-colors", s ? "text-text" : "text-text-muted/50 line-through hover:text-text-muted"), title: s ? `Hide ${e.label}` : `Show ${e.label}`, children: e.label }, e.value);
  }) }), t.jsx("div", { className: "flex-1" }), t.jsxs("span", { className: "text-text-muted", children: [o.length, o.length !== x.length && ` / ${x.length}`] })] }), t.jsx("div", { ref: r, onScroll: L, className: "flex-1 overflow-y-auto min-h-0 bg-bg", children: o.length === 0 ? t.jsx("div", { className: "flex items-center justify-center h-32 text-text-muted text-xs", children: "No messages" }) : o.map((e) => t.jsx(D, { entry: e }, e.id)) })] }) : null;
}
export {
  U as LogViewer
};
