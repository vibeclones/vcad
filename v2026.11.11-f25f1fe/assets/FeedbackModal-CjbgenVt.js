import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { a as r, i, n as a, o, r as s, s as c, t as l } from "./dist-uaNeKfmY.js";
import { t as u } from "./X.es-eqQvie4c.js";
import { t as d } from "./Megaphone.es-BPjyUbH-.js";
import { t as f } from "./utils-D0T3A-kS.js";
var p = e(t(), 1), m = n(), h = `https://github.com/ecto/vcad/issues/new`;
function g({ open: e2, onOpenChange: t2 }) {
  let [n2, g2] = (0, p.useState)(``);
  function _() {
    let e3 = n2.trim();
    if (!e3) return;
    let r2 = `${e3}

---
_Sent from vcad 0.0.0 \xB7 ${navigator.userAgent}_`, i2 = `${h}?body=${encodeURIComponent(r2)}`;
    window.open(i2, `_blank`, `noopener,noreferrer`), g2(``), t2(false);
  }
  return (0, m.jsx)(o, { open: e2, onOpenChange: t2, children: (0, m.jsxs)(r, { children: [(0, m.jsx)(i, { className: `fixed inset-0 z-50 bg-black/50 backdrop-blur-sm` }), (0, m.jsxs)(a, { className: f(`fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2`, `rounded-xl border border-border bg-surface p-6 shadow-xl`, `focus:outline-none`), children: [(0, m.jsx)(l, { className: `absolute right-3 top-3 p-1.5 text-text-muted hover:text-text transition-colors cursor-pointer`, children: (0, m.jsx)(u, { size: 14 }) }), (0, m.jsxs)(`div`, { className: `flex items-center gap-2 mb-1`, children: [(0, m.jsx)(d, { size: 16, className: `text-brand` }), (0, m.jsx)(c, { className: `text-sm font-medium text-text`, children: `Send feedback` })] }), (0, m.jsx)(s, { className: `text-xs text-text-muted mb-3`, children: `Bug, idea, or wish? Opens a GitHub issue with your message prefilled.` }), (0, m.jsx)(`textarea`, { autoFocus: true, value: n2, onChange: (e3) => g2(e3.target.value), onKeyDown: (e3) => {
    (e3.metaKey || e3.ctrlKey) && e3.key === `Enter` && (e3.preventDefault(), _());
  }, placeholder: `What's on your mind?`, rows: 6, className: f(`w-full resize-none bg-bg p-3 text-xs text-text`, `placeholder:text-text-muted/60 focus:outline-none`, `border border-border focus:border-brand/50 transition-colors`) }), (0, m.jsxs)(`div`, { className: `mt-3 flex items-center justify-between gap-2`, children: [(0, m.jsx)(`span`, { className: `text-[10px] text-text-muted/60`, children: `\u2318\u21B5 to submit` }), (0, m.jsxs)(`div`, { className: `flex items-center gap-2`, children: [(0, m.jsx)(`button`, { type: `button`, onClick: () => t2(false), className: f(`h-7 px-3 text-xs text-text-muted hover:text-text`, `hover:bg-hover transition-colors`), children: `Cancel` }), (0, m.jsx)(`button`, { type: `button`, onClick: _, disabled: !n2.trim(), className: f(`h-7 px-3 text-xs font-medium`, `bg-brand text-white hover:bg-brand/90 transition-colors`, `disabled:opacity-40 disabled:cursor-not-allowed`), children: `Send` })] })] })] })] }) });
}
export {
  g as FeedbackModal
};
