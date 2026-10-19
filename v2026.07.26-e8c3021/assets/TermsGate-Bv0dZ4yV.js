import { b as s, k as e } from "./three-fiber-GW7QWJN8.js";
import { ds as d, dt as f, du as m, bx as h, by as g, bz as v, bA as w, bC as y, cb as j } from "./index-DrmFSLOx.js";
import { c as k } from "./three-drei-CC2TnYIC.js";
import "./three-tnxpQXqG.js";
const l = s.forwardRef((r, n) => s.createElement(d, { ref: n, ...r, weights: f }));
l.displayName = "CheckIcon";
const N = l, b = s.forwardRef((r, n) => s.createElement(d, { ref: n, ...r, weights: m }));
b.displayName = "SparkleIcon";
const S = b, E = "2026-04-23", c = `vcad.tos.accepted.${E}`;
function C() {
  if (typeof window > "u") return true;
  try {
    return window.localStorage.getItem(c) === "1";
  } catch {
    return false;
  }
}
const i = k((r) => ({ accepted: C(), accept: () => {
  try {
    window.localStorage.setItem(c, "1"), window.localStorage.setItem(`${c}.at`, (/* @__PURE__ */ new Date()).toISOString());
  } catch {
  }
  r({ accepted: true });
} })), _ = 220;
function R() {
  const r = i((t) => t.accepted), n = i((t) => t.accept), [a, u] = s.useState(false), [o, x] = s.useState(false);
  if (r) return null;
  const p = () => {
    !a || o || (x(true), window.setTimeout(() => {
      n();
    }, _));
  };
  return e.jsx(h, { open: true, modal: true, children: e.jsxs(g, { children: [e.jsx(v, { className: "auth-overlay fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm" }), e.jsxs(w, { "aria-labelledby": "tos-gate-title", "aria-describedby": "tos-gate-desc", onEscapeKeyDown: (t) => t.preventDefault(), onPointerDownOutside: (t) => t.preventDefault(), onInteractOutside: (t) => t.preventDefault(), className: "auth-content fixed left-1/2 top-1/2 z-[100] w-[440px] -translate-x-1/2 -translate-y-1/2 border border-border bg-card/85 backdrop-blur-xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] focus:outline-none", children: [e.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-brand),transparent)] opacity-70" }), e.jsxs("div", { className: "flex flex-col items-center px-8 pt-8 pb-7", children: [e.jsx("div", { className: "flex h-10 w-10 items-center justify-center border border-brand/30 bg-brand/12", children: e.jsx(S, { size: 22, weight: "fill", className: "text-brand" }) }), e.jsx(y, { id: "tos-gate-title", className: "mt-4 text-[22px] font-semibold tracking-tight text-text", children: "Welcome to vcad" }), e.jsxs(j, { id: "tos-gate-desc", className: "mt-2 text-center text-[13px] leading-relaxed text-text-muted", children: ["A quick housekeeping note before we hand you the kernel.", e.jsx("br", {}), e.jsx("span", { className: "text-text-muted/70", children: "We\u2019re open-source and don\u2019t sell your data \u2014 but the lawyers want their moment." })] }), e.jsxs("label", { className: "mt-6 flex w-full cursor-pointer items-start gap-3 text-[13px] text-text", children: [e.jsx("input", { type: "checkbox", checked: a, onChange: (t) => u(t.target.checked), className: "peer sr-only" }), e.jsx("span", { "aria-hidden": true, "data-checked": a, className: "mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center border border-border bg-bg/40 transition-colors duration-150 hover:border-text-muted/60 data-[checked=true]:border-brand data-[checked=true]:bg-brand peer-focus-visible:ring-2 peer-focus-visible:ring-brand/60 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-card", children: e.jsx(N, { size: 11, weight: "bold", className: "text-primary-foreground transition-[clip-path] duration-150", style: { clipPath: a ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" } }) }), e.jsxs("span", { className: "leading-relaxed", children: ["I agree to the", " ", e.jsx("a", { href: "/terms", target: "_blank", rel: "noopener noreferrer", className: "text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-hover hover:decoration-brand", children: "Terms of Service" }), " ", "and acknowledge the", " ", e.jsx("a", { href: "/privacy", target: "_blank", rel: "noopener noreferrer", className: "text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-hover hover:decoration-brand", children: "Privacy Policy" }), "."] })] }), e.jsx("button", { type: "button", disabled: !a || o, onClick: p, className: a ? `upgrade-cta ${o ? "cta-press" : ""} mt-6 w-full border border-brand bg-brand px-4 py-3 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card` : "mt-6 w-full cursor-not-allowed border border-border bg-bg/40 px-4 py-3 text-[13px] font-medium text-text-muted/50", children: "Continue to vcad" }), e.jsx("div", { className: "mt-6 h-px w-full bg-border/70" }), e.jsx("p", { className: "mt-3 text-[11px] text-text-muted/70", children: "You can review these documents at any time from the account menu." })] })] })] }) });
}
export {
  R as TermsGate
};
