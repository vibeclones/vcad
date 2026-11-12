import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { a as r, i, n as a, o, r as s, s as c } from "./dist-uaNeKfmY.js";
import { t as l } from "./Sparkle.es-CvwkSRhH.js";
import { t as u } from "./Check.es-CsgUpltm.js";
import { t as d } from "./react-Cf1qM0wN.js";
var f = e(t(), 1), p = (0, f.createContext)({ color: `currentColor`, size: `1em`, weight: `regular`, mirrored: false }), m = f.forwardRef((e2, t2) => {
  let { alt: n2, color: r2, size: i2, weight: a2, mirrored: o2, children: s2, weights: c2, ...l2 } = e2, { color: u2 = `currentColor`, size: d2, weight: m2 = `regular`, mirrored: h2 = false, ...g2 } = f.useContext(p);
  return f.createElement(`svg`, { ref: t2, xmlns: `http://www.w3.org/2000/svg`, width: i2 ?? d2, height: i2 ?? d2, fill: r2 ?? u2, viewBox: `0 0 256 256`, transform: o2 || h2 ? `scale(-1, 1)` : void 0, ...g2, ...l2 }, !!n2 && f.createElement(`title`, null, n2), s2, c2.get(a2 ?? m2));
});
m.displayName = `IconBase`;
var h = f.forwardRef((e2, t2) => f.createElement(m, { ref: t2, ...e2, weights: u }));
h.displayName = `CheckIcon`;
var g = h, _ = f.forwardRef((e2, t2) => f.createElement(m, { ref: t2, ...e2, weights: l }));
_.displayName = `SparkleIcon`;
var v = _, y = `vcad.tos.accepted.2026-04-23`;
function b() {
  if (typeof window > `u`) return true;
  try {
    return window.localStorage.getItem(y) === `1`;
  } catch {
    return false;
  }
}
var x = d((e2) => ({ accepted: b(), accept: () => {
  try {
    window.localStorage.setItem(y, `1`), window.localStorage.setItem(`${y}.at`, (/* @__PURE__ */ new Date()).toISOString());
  } catch {
  }
  e2({ accepted: true });
} })), S = n(), C = 220;
function w() {
  let e2 = x((e3) => e3.accepted), t2 = x((e3) => e3.accept), [n2, l2] = (0, f.useState)(false), [u2, d2] = (0, f.useState)(false);
  return e2 ? null : (0, S.jsx)(o, { open: true, modal: true, children: (0, S.jsxs)(r, { children: [(0, S.jsx)(i, { className: `auth-overlay fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm` }), (0, S.jsxs)(a, { "aria-labelledby": `tos-gate-title`, "aria-describedby": `tos-gate-desc`, onEscapeKeyDown: (e3) => e3.preventDefault(), onPointerDownOutside: (e3) => e3.preventDefault(), onInteractOutside: (e3) => e3.preventDefault(), className: `auth-content fixed left-1/2 top-1/2 z-[100] w-[440px] -translate-x-1/2 -translate-y-1/2 border border-border bg-card/85 backdrop-blur-xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] focus:outline-none`, children: [(0, S.jsx)(`div`, { "aria-hidden": true, className: `pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-brand),transparent)] opacity-70` }), (0, S.jsxs)(`div`, { className: `flex flex-col items-center px-8 pt-8 pb-7`, children: [(0, S.jsx)(`div`, { className: `flex h-10 w-10 items-center justify-center border border-brand/30 bg-brand/12`, children: (0, S.jsx)(v, { size: 22, weight: `fill`, className: `text-brand` }) }), (0, S.jsx)(c, { id: `tos-gate-title`, className: `mt-4 text-[22px] font-semibold tracking-tight text-text`, children: `Welcome to vcad` }), (0, S.jsxs)(s, { id: `tos-gate-desc`, className: `mt-2 text-center text-[13px] leading-relaxed text-text-muted`, children: [`A quick housekeeping note before we hand you the kernel.`, (0, S.jsx)(`br`, {}), (0, S.jsx)(`span`, { className: `text-text-muted/70`, children: `We\u2019re open-source and don\u2019t sell your data \u2014 but the lawyers want their moment.` })] }), (0, S.jsxs)(`label`, { className: `mt-6 flex w-full cursor-pointer items-start gap-3 text-[13px] text-text`, children: [(0, S.jsx)(`input`, { type: `checkbox`, checked: n2, onChange: (e3) => l2(e3.target.checked), className: `peer sr-only` }), (0, S.jsx)(`span`, { "aria-hidden": true, "data-checked": n2, className: `mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center border border-border bg-bg/40 transition-colors duration-150 hover:border-text-muted/60 data-[checked=true]:border-brand data-[checked=true]:bg-brand peer-focus-visible:ring-2 peer-focus-visible:ring-brand/60 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-card`, children: (0, S.jsx)(g, { size: 11, weight: `bold`, className: `text-primary-foreground transition-[clip-path] duration-150`, style: { clipPath: n2 ? `inset(0 0 0 0)` : `inset(0 100% 0 0)` } }) }), (0, S.jsxs)(`span`, { className: `leading-relaxed`, children: [`I agree to the`, ` `, (0, S.jsx)(`a`, { href: `/terms`, target: `_blank`, rel: `noopener noreferrer`, className: `text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-hover hover:decoration-brand`, children: `Terms of Service` }), ` `, `and acknowledge the`, ` `, (0, S.jsx)(`a`, { href: `/privacy`, target: `_blank`, rel: `noopener noreferrer`, className: `text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-hover hover:decoration-brand`, children: `Privacy Policy` }), `.`] })] }), (0, S.jsx)(`button`, { type: `button`, disabled: !n2 || u2, onClick: () => {
    n2 && !u2 && (d2(true), window.setTimeout(() => {
      t2();
    }, C));
  }, className: n2 ? `upgrade-cta ${u2 ? `cta-press` : ``} mt-6 w-full border border-brand bg-brand px-4 py-3 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card` : `mt-6 w-full cursor-not-allowed border border-border bg-bg/40 px-4 py-3 text-[13px] font-medium text-text-muted/50`, children: `Continue to vcad` }), (0, S.jsx)(`div`, { className: `mt-6 h-px w-full bg-border/70` }), (0, S.jsx)(`p`, { className: `mt-3 text-[11px] text-text-muted/70`, children: `You can review these documents at any time from the account menu.` })] })] })] }) });
}
export {
  w as TermsGate
};
