import { k as o } from "./three-fiber-DvYcInOp.js";
import { a3 as s, c, n as d, af as l } from "./index-DYo2o8YT.js";
import "./three-tnxpQXqG.js";
import "./three-drei-B9AdtZoT.js";
function b() {
  const e = s((t) => t.layout), a = s((t) => t.setLayout), r = (t, n, i) => o.jsxs("button", { type: "button", onClick: () => a(t), "aria-pressed": e === t, className: c("flex items-center gap-1.5 rounded-md px-3 py-1 text-[11px] font-medium transition-colors", e === t ? "bg-brand text-white shadow-sm" : "text-text-muted hover:text-text"), children: [o.jsx(i, { size: 13, weight: e === t ? "fill" : "regular" }), n] });
  return o.jsxs("div", { className: "pointer-events-auto absolute left-1/2 top-3 z-30 flex -translate-x-1/2 items-center gap-0.5 rounded-lg border border-border bg-surface/95 p-0.5 shadow-lg backdrop-blur-sm", children: [r("schematic", "Schematic", d), r("board", "Board", l)] });
}
export {
  b as ElectronicsViewToggle
};
