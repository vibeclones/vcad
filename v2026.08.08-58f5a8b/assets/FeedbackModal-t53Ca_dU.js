import { b as x, k as e } from "./three-fiber-GW7QWJN8.js";
import { bp as d, bq as m, br as b, bs as u, bt as p, bg as f, c4 as h, bu as j, c5 as g, bh as s } from "./index-CcT_niyD.js";
import "./three-tnxpQXqG.js";
import "./three-drei-DdHLxnbx.js";
const v = "https://github.com/ecto/vcad/issues/new";
function S({ open: i, onOpenChange: r }) {
  const [o, a] = x.useState("");
  function n() {
    const t = o.trim();
    if (!t) return;
    const l = `${t}

---
_Sent from vcad 0.0.0 \xB7 ${navigator.userAgent}_`, c = `${v}?body=${encodeURIComponent(l)}`;
    window.open(c, "_blank", "noopener,noreferrer"), a(""), r(false);
  }
  return e.jsx(d, { open: i, onOpenChange: r, children: e.jsxs(m, { children: [e.jsx(b, { className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" }), e.jsxs(u, { className: s("fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2", "rounded-xl border border-border bg-surface p-6 shadow-xl", "focus:outline-none"), children: [e.jsx(p, { className: "absolute right-3 top-3 p-1.5 text-text-muted hover:text-text transition-colors cursor-pointer", children: e.jsx(f, { size: 14 }) }), e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx(h, { size: 16, className: "text-brand" }), e.jsx(j, { className: "text-sm font-medium text-text", children: "Send feedback" })] }), e.jsx(g, { className: "text-xs text-text-muted mb-3", children: "Bug, idea, or wish? Opens a GitHub issue with your message prefilled." }), e.jsx("textarea", { autoFocus: true, value: o, onChange: (t) => a(t.target.value), onKeyDown: (t) => {
    (t.metaKey || t.ctrlKey) && t.key === "Enter" && (t.preventDefault(), n());
  }, placeholder: "What's on your mind?", rows: 6, className: s("w-full resize-none bg-bg p-3 text-xs text-text", "placeholder:text-text-muted/60 focus:outline-none", "border border-border focus:border-brand/50 transition-colors") }), e.jsxs("div", { className: "mt-3 flex items-center justify-between gap-2", children: [e.jsx("span", { className: "text-[10px] text-text-muted/60", children: "\u2318\u21B5 to submit" }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("button", { type: "button", onClick: () => r(false), className: s("h-7 px-3 text-xs text-text-muted hover:text-text", "hover:bg-hover transition-colors"), children: "Cancel" }), e.jsx("button", { type: "button", onClick: n, disabled: !o.trim(), className: s("h-7 px-3 text-xs font-medium", "bg-brand text-white hover:bg-brand/90 transition-colors", "disabled:opacity-40 disabled:cursor-not-allowed"), children: "Send" })] })] })] })] }) });
}
export {
  S as FeedbackModal
};
