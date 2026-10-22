import { k as t } from "./three-fiber-DvYcInOp.js";
import { u as r, a as m, f as p, t as i, c, B as y } from "./index-DYo2o8YT.js";
import "./three-tnxpQXqG.js";
import "./three-drei-B9AdtZoT.js";
const f = { "add-cube": { instructionKey: "tutorial.add_cube.instruction", detailKey: "tutorial.add_cube.detail" }, "add-cylinder": { instructionKey: "tutorial.add_cylinder.instruction", detailKey: "tutorial.add_cylinder.detail" }, "position-cylinder": { instructionKey: "tutorial.position_cylinder.instruction", detailKey: "tutorial.position_cylinder.detail" }, subtract: { instructionKey: "tutorial.subtract.instruction", detailKey: "tutorial.subtract.detail" }, celebrate: { instructionKey: "tutorial.celebrate.instruction", detailKey: "tutorial.celebrate.detail" } }, u = ["add-cube", "add-cylinder", "position-cylinder", "subtract", "celebrate"];
function K() {
  const x = r((e) => e.guidedFlowActive), o = r((e) => e.guidedFlowStep), a = r((e) => e.skipGuidedFlow), b = r((e) => e.completeGuidedFlow);
  if (m((e) => e.locale), !x || !o) return null;
  const l = f[o], n = u.indexOf(o), s = o === "celebrate";
  return t.jsx("div", { className: "absolute bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none", children: t.jsxs("div", { className: c("pointer-events-auto", "flex flex-col items-center gap-2 px-5 py-3", "bg-surface/95 backdrop-blur-sm", "border border-border", "shadow-lg shadow-black/20", "animate-in fade-in slide-in-from-bottom-2 duration-300"), children: [!s && t.jsx("button", { onClick: a, className: "absolute right-2 top-2 p-1 text-text-muted hover:text-text", "aria-label": i("tutorial.skip"), children: t.jsx(p, { size: 12 }) }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-sm font-medium text-text", children: i(l.instructionKey) }), l.detailKey && t.jsx("p", { className: "text-xs text-text-muted mt-0.5", children: i(l.detailKey) })] }), t.jsx("div", { className: "flex items-center gap-1.5", children: u.slice(0, -1).map((e, d) => t.jsx("div", { className: c("w-1.5 h-1.5 rounded-full transition-colors", d < n || d === n ? "bg-brand" : "bg-border") }, e)) }), s && t.jsx("div", { className: "flex gap-2 mt-1", children: t.jsx(y, { size: "sm", onClick: b, children: i("tutorial.start_building") }) }), !s && t.jsx("button", { onClick: a, className: "text-[10px] text-text-muted hover:text-text", children: i("tutorial.skip_short") })] }) });
}
export {
  K as GuidedFlowOverlay
};
