import { t as e } from "./Eye.es-D3QC876P.js";
import { D as t, E as n, Z as r } from "./dist-_2fbu5WV.js";
import { n as i } from "./locale-store-DZ0YyEbC.js";
import { t as a } from "./utils-D0T3A-kS.js";
import { O as o } from "./three-drei-_EcrAYRL.js";
var s = o();
function c() {
  let o2 = r((e2) => e2.readOnlyShare);
  if (i((e2) => e2.locale), !o2) return null;
  let c2 = () => {
    window.dispatchEvent(new CustomEvent(`vcad:fork-prompt`, { detail: o2 }));
  }, l = `__DOCNAME__`, u = t(`banner.readonly.viewing`, { name: l }).split(l), d = u[0] ?? ``, f = u[1] ?? ``;
  return (0, s.jsxs)(`div`, { className: a(`flex items-center justify-center gap-2 px-4 py-1.5`, `bg-brand/10 border-b border-brand/20 text-[11px] text-text`), role: `status`, "aria-live": `polite`, children: [(0, s.jsx)(e, { size: 13, className: `text-brand shrink-0` }), (0, s.jsxs)(`span`, { children: [d, (0, s.jsx)(`span`, { className: `font-medium`, children: o2.docName }), f] }), (0, s.jsx)(`span`, { className: `text-text-muted`, children: `\xB7` }), (0, s.jsx)(`button`, { type: `button`, onClick: c2, className: `text-brand hover:underline focus:outline-none`, children: n(`banner.readonly.fork`) })] });
}
export {
  c as ReadOnlyBanner
};
