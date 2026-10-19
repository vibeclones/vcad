import { k as e } from "./three-fiber-GW7QWJN8.js";
import { bk as l, bn as c, b4 as d, bW as m, b3 as p, bp as b } from "./index-Dh9039MG.js";
import "./three-tnxpQXqG.js";
import "./three-drei-vHRsxLlW.js";
function j() {
  const t = l((n) => n.readOnlyShare);
  if (c((n) => n.locale), !t) return null;
  const a = () => {
    window.dispatchEvent(new CustomEvent("vcad:fork-prompt", { detail: t }));
  }, r = "__DOCNAME__", s = d("banner.readonly.viewing", { name: r }).split(r), o = s[0] ?? "", i = s[1] ?? "";
  return e.jsxs("div", { className: b("flex items-center justify-center gap-2 px-4 py-1.5", "bg-brand/10 border-b border-brand/20 text-[11px] text-text"), role: "status", "aria-live": "polite", children: [e.jsx(m, { size: 13, className: "text-brand shrink-0" }), e.jsxs("span", { children: [o, e.jsx("span", { className: "font-medium", children: t.docName }), i] }), e.jsx("span", { className: "text-text-muted", children: "\xB7" }), e.jsx("button", { type: "button", onClick: a, className: "text-brand hover:underline focus:outline-none", children: p("banner.readonly.fork") })] });
}
export {
  j as ReadOnlyBanner
};
