import { b as e, k as t } from "./three-fiber-DvYcInOp.js";
import { aq as V, b as h, i as x, a as M, R as Z, P as j, O as E, C as k, l as w, f as y, T as S, t as r, ac as N, c as o, aD as F } from "./index-BkIlMx7Q.js";
import "./three-tnxpQXqG.js";
import "./three-drei-CTUAgrap.js";
const O = /* @__PURE__ */ new Map([["bold", e.createElement(e.Fragment, null, e.createElement("path", { d: "M228,64a36,36,0,1,0-48,33.94V112a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V97.94a36,36,0,1,0-24,0V112a28,28,0,0,0,28,28h36v18.06a36,36,0,1,0,24,0V140h36a28,28,0,0,0,28-28V97.94A36.07,36.07,0,0,0,228,64ZM64,52A12,12,0,1,1,52,64,12,12,0,0,1,64,52Zm64,152a12,12,0,1,1,12-12A12,12,0,0,1,128,204ZM192,76a12,12,0,1,1,12-12A12,12,0,0,1,192,76Z" }))], ["duotone", e.createElement(e.Fragment, null, e.createElement("path", { d: "M88,64A24,24,0,1,1,64,40,24,24,0,0,1,88,64ZM192,40a24,24,0,1,0,24,24A24,24,0,0,0,192,40Z", opacity: "0.2" }), e.createElement("path", { d: "M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z" }))], ["fill", e.createElement(e.Fragment, null, e.createElement("path", { d: "M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM144,192a16,16,0,1,1-16-16A16,16,0,0,1,144,192Z" }))], ["light", e.createElement(e.Fragment, null, e.createElement("path", { d: "M222,64a30,30,0,1,0-36,29.4V112a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V93.4a30,30,0,1,0-12,0V112a22,22,0,0,0,22,22h42v28.6a30,30,0,1,0,12,0V134h42a22,22,0,0,0,22-22V93.4A30.05,30.05,0,0,0,222,64ZM46,64A18,18,0,1,1,64,82,18,18,0,0,1,46,64ZM146,192a18,18,0,1,1-18-18A18,18,0,0,1,146,192ZM192,82a18,18,0,1,1,18-18A18,18,0,0,1,192,82Z" }))], ["regular", e.createElement(e.Fragment, null, e.createElement("path", { d: "M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z" }))], ["thin", e.createElement(e.Fragment, null, e.createElement("path", { d: "M220,64a28,28,0,1,0-32,27.71V112a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V91.71a28,28,0,1,0-8,0V112a20,20,0,0,0,20,20h44v32.29a28,28,0,1,0,8,0V132h44a20,20,0,0,0,20-20V91.71A28,28,0,0,0,220,64ZM44,64A20,20,0,1,1,64,84,20,20,0,0,1,44,64ZM148,192a20,20,0,1,1-20-20A20,20,0,0,1,148,192ZM192,84a20,20,0,1,1,20-20A20,20,0,0,1,192,84Z" }))]]), u = e.forwardRef((s, n) => e.createElement(V, { ref: n, ...s, weights: O }));
u.displayName = "GitForkIcon";
const C = u;
function P() {
  const [s, n] = e.useState(false), [p, l] = e.useState(false), [i, c] = e.useState(false), f = h((a) => a.user), g = h((a) => a.isAnonymous), m = !!f && !g, A = x((a) => a.readOnlyShare), d = x((a) => a.setReadOnlyShare);
  M((a) => a.locale), e.useEffect(() => {
    const a = () => {
      n(true);
    };
    return window.addEventListener("vcad:fork-prompt", a), () => window.removeEventListener("vcad:fork-prompt", a);
  }, []), e.useEffect(() => {
    i && m && (d(null), c(false), l(false), n(false));
  }, [i, m, d]);
  const v = () => {
    c(true), l(true);
  }, b = () => {
    n(false);
  };
  return !A && s && n(false), t.jsxs(t.Fragment, { children: [t.jsx(Z, { open: s, onOpenChange: n, children: t.jsxs(j, { children: [t.jsx(E, { className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" }), t.jsxs(k, { className: o("fixed left-1/2 top-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2", "rounded-xl border border-border bg-surface p-6 shadow-xl select-none", "focus:outline-none"), children: [t.jsx(w, { className: "absolute right-3 top-3 p-1.5 text-text-muted hover:text-text transition-colors cursor-pointer", children: t.jsx(y, { size: 14 }) }), t.jsxs("div", { className: "flex items-start gap-3 mb-5", children: [t.jsx("div", { className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/15", children: t.jsx(C, { size: 16, className: "text-brand" }) }), t.jsxs("div", { className: "min-w-0", children: [t.jsx(S, { className: "text-sm font-semibold text-text", children: r("modal.fork.title") }), t.jsx(N, { className: "mt-1 text-xs text-text-muted leading-relaxed", children: r("modal.fork.description") })] })] }), t.jsxs("div", { className: "flex items-center justify-end gap-2", children: [t.jsx("button", { type: "button", onClick: b, className: o("px-3 py-1.5 text-xs font-medium", "text-text-muted hover:text-text hover:bg-hover transition-colors"), children: r("modal.fork.keep_viewing") }), t.jsx("button", { type: "button", onClick: v, className: o("px-3 py-1.5 text-xs font-medium", "bg-brand text-white hover:bg-brand/90 transition-colors"), children: r("modal.fork.signin") })] })] })] }) }), t.jsx(F, { open: p, onOpenChange: l })] });
}
export {
  P as ForkPromptModal
};
