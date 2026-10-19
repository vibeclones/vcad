import { k as e } from "./three-fiber-GW7QWJN8.js";
import { b4 as h, bc as o, bb as u, bo as p, bf as f, bp as j, bq as v, br as y, bs as g, bt as k, bg as N, bu as K, aX as s, bv as w, bw as S, bx as _, by as z, bh as r, bz as C } from "./index-BZXLWVKC.js";
import { f as M } from "./Book.es-DmFwBVCB.js";
import { s as E } from "./ChatCircle.es-D1q-QRPi.js";
import "./three-tnxpQXqG.js";
import "./three-drei-BkUUjjN5.js";
const I = [{ id: "primitive", icon: w, labelKey: "modal.about.action.shape", descKey: "modal.about.action.shape_desc", color: "text-emerald-400" }, { id: "sketch", icon: S, labelKey: "modal.about.action.sketch", descKey: "modal.about.action.sketch_desc", color: "text-blue-400" }, { id: "open", icon: _, labelKey: "modal.about.action.open", descKey: "modal.about.action.open_desc", color: "text-amber-400" }, { id: "tutorial", icon: z, labelKey: "modal.about.action.tutorial", descKey: "modal.about.action.tutorial_desc", color: "text-violet-400" }], T = [{ keys: "\u2318K", descKey: "modal.about.keyhint.palette" }, { keys: "1-7", descKey: "modal.about.keyhint.tabs" }, { keys: "M R S", descKey: "modal.about.keyhint.transform" }, { keys: "\u2318\u21E7U D I", descKey: "modal.about.keyhint.boolean" }];
function H({ open: c, onOpenChange: a }) {
  const l = h((t) => t.addPrimitive), n = o((t) => t.select), i = o((t) => t.setTransformMode), d = u((t) => t.enterSketchMode), x = p((t) => t.openPanel);
  f((t) => t.locale);
  function m(t) {
    switch (a(false), t) {
      case "primitive": {
        const b = l("cube");
        n(b), i("translate");
        break;
      }
      case "sketch":
        d("XY");
        break;
      case "open":
        window.dispatchEvent(new CustomEvent("vcad:open"));
        break;
      case "tutorial":
        window.dispatchEvent(new CustomEvent("vcad:start-tutorial"));
        break;
    }
  }
  return e.jsx(j, { open: c, onOpenChange: a, children: e.jsxs(v, { children: [e.jsx(y, { className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" }), e.jsxs(g, { "data-tauri-drag-region": "", className: r("fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2", "rounded-xl border border-border bg-surface p-8 shadow-xl select-none", "focus:outline-none"), children: [e.jsx(k, { className: "absolute right-4 top-4 p-2 text-text-muted hover:text-text transition-colors cursor-pointer", children: e.jsx(N, { size: 16 }) }), e.jsxs("div", { className: "text-center mb-8", children: [e.jsxs(K, { className: "text-3xl font-bold tracking-tight text-text mb-2", children: ["vcad", e.jsx("span", { className: "text-brand", children: "." })] }), e.jsx("p", { className: "text-sm text-text-muted", children: s("modal.about.tagline") })] }), e.jsx("div", { className: "grid grid-cols-2 gap-3 mb-8", children: I.map((t) => e.jsxs("button", { onClick: () => m(t.id), className: r("flex flex-col items-start gap-1 p-4", "bg-bg hover:bg-hover transition-colors text-left"), children: [e.jsx(t.icon, { size: 20, className: t.color }), e.jsx("span", { className: "text-sm font-medium text-text", children: s(t.labelKey) }), e.jsx("span", { className: "text-xs text-text-muted", children: s(t.descKey) })] }, t.id)) }), e.jsx("div", { className: "flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8 text-xs text-text-muted", children: T.map((t) => e.jsxs("div", { className: "flex items-center gap-1.5", children: [e.jsx("kbd", { className: "px-1.5 py-0.5 bg-bg text-[10px] font-mono", children: t.keys }), e.jsx("span", { children: s(t.descKey) })] }, t.keys)) }), e.jsxs("div", { className: "flex items-center justify-center gap-6 text-xs", children: [e.jsxs("a", { href: "https://github.com/ecto/vcad", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-1.5 text-text-muted hover:text-text transition-colors", children: [e.jsx(C, { size: 14 }), e.jsx("span", { children: "GitHub" })] }), e.jsxs("a", { href: "https://vcad.io/docs", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-1.5 text-text-muted hover:text-text transition-colors", children: [e.jsx(M, { size: 14 }), e.jsx("span", { children: s("modal.about.docs") })] }), e.jsxs("a", { href: "https://discord.gg/vcad", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-1.5 text-text-muted hover:text-text transition-colors", children: [e.jsx(E, { size: 14 }), e.jsx("span", { children: "Discord" })] }), e.jsxs("button", { onClick: () => {
    x(), a(false);
  }, className: "text-text-muted/50 hover:text-brand transition-colors", title: s("modal.about.whats_new"), children: ["v", "0.0.0"] })] }), e.jsxs("div", { className: "mt-4 flex items-center justify-center gap-4 text-[11px] text-text-muted/60", children: [e.jsx("a", { href: "/privacy", className: "hover:text-text-muted transition-colors", children: s("footer.privacy") }), e.jsx("a", { href: "/terms", className: "hover:text-text-muted transition-colors", children: s("footer.terms") }), e.jsx("a", { href: "/security", className: "hover:text-text-muted transition-colors", children: s("footer.security") }), e.jsx("span", { children: "\xB7" }), e.jsx("a", { href: "https://muni.works", target: "_blank", rel: "noopener noreferrer", className: "hover:text-text-muted transition-colors", children: "\xA9 2026 Municipal Robotics" })] })] })] }) });
}
export {
  H as AboutModal
};
