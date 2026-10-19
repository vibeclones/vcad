import { k as t } from "./three-fiber-GW7QWJN8.js";
import { be as s, bf as m, bg as p, aX as i, bh as c, bi as y } from "./index-CcT_niyD.js";
import "./three-tnxpQXqG.js";
import "./three-drei-DdHLxnbx.js";
const f = { "add-cube": { instructionKey: "tutorial.add_cube.instruction", detailKey: "tutorial.add_cube.detail" }, "add-cylinder": { instructionKey: "tutorial.add_cylinder.instruction", detailKey: "tutorial.add_cylinder.detail" }, "position-cylinder": { instructionKey: "tutorial.position_cylinder.instruction", detailKey: "tutorial.position_cylinder.detail" }, subtract: { instructionKey: "tutorial.subtract.instruction", detailKey: "tutorial.subtract.detail" }, celebrate: { instructionKey: "tutorial.celebrate.instruction", detailKey: "tutorial.celebrate.detail" } }, u = ["add-cube", "add-cylinder", "position-cylinder", "subtract", "celebrate"];
function K() {
  const b = s((e) => e.guidedFlowActive), o = s((e) => e.guidedFlowStep), l = s((e) => e.skipGuidedFlow), x = s((e) => e.completeGuidedFlow);
  if (m((e) => e.locale), !b || !o) return null;
  const a = f[o], n = u.indexOf(o), r = o === "celebrate";
  return t.jsx("div", { className: "absolute bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none", children: t.jsxs("div", { className: c("pointer-events-auto", "flex flex-col items-center gap-2 px-5 py-3", "bg-surface/95 backdrop-blur-sm", "border border-border", "shadow-lg shadow-black/20", "animate-in fade-in slide-in-from-bottom-2 duration-300"), children: [!r && t.jsx("button", { onClick: l, className: "absolute right-2 top-2 p-1 text-text-muted hover:text-text", "aria-label": i("tutorial.skip"), children: t.jsx(p, { size: 12 }) }), t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-sm font-medium text-text", children: i(a.instructionKey) }), a.detailKey && t.jsx("p", { className: "text-xs text-text-muted mt-0.5", children: i(a.detailKey) })] }), t.jsx("div", { className: "flex items-center gap-1.5", children: u.slice(0, -1).map((e, d) => t.jsx("div", { className: c("w-1.5 h-1.5 rounded-full transition-colors", d < n || d === n ? "bg-brand" : "bg-border") }, e)) }), r && t.jsx("div", { className: "flex gap-2 mt-1", children: t.jsx(y, { size: "sm", onClick: x, children: i("tutorial.start_building") }) }), !r && t.jsx("button", { onClick: l, className: "text-[10px] text-text-muted hover:text-text", children: i("tutorial.skip_short") })] }) });
}
export {
  K as GuidedFlowOverlay
};
