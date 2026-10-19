import { k as e } from "./three-fiber-GW7QWJN8.js";
import { bc as l, bf as c, aY as d, bO as m, aX as p, bh as x } from "./index-9ryf29cW.js";
import "./three-tnxpQXqG.js";
import "./three-drei-DdHLxnbx.js";
function j() {
  const t = l((n) => n.readOnlyShare);
  if (c((n) => n.locale), !t) return null;
  const s = () => {
    window.dispatchEvent(new CustomEvent("vcad:fork-prompt", { detail: t }));
  }, a = "__DOCNAME__", r = d("banner.readonly.viewing", { name: a }).split(a), o = r[0] ?? "", i = r[1] ?? "";
  return e.jsxs("div", { className: x("flex items-center justify-center gap-2 px-4 py-1.5", "bg-brand/10 border-b border-brand/20 text-[11px] text-text"), role: "status", "aria-live": "polite", children: [e.jsx(m, { size: 13, className: "text-brand shrink-0" }), e.jsxs("span", { children: [o, e.jsx("span", { className: "font-medium", children: t.docName }), i] }), e.jsx("span", { className: "text-text-muted", children: "\xB7" }), e.jsx("button", { type: "button", onClick: s, className: "text-brand hover:underline focus:outline-none", children: p("banner.readonly.fork") })] });
}
export {
  j as ReadOnlyBanner
};
