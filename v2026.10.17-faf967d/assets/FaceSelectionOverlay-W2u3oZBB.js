import { k as e } from "./three-fiber-GW7QWJN8.js";
import { bj as t, bc as l, bX as x, bq as c, bo as d, bY as m } from "./index-Dh9039MG.js";
import "./three-tnxpQXqG.js";
import "./three-drei-vHRsxLlW.js";
function j() {
  const a = t((s) => s.faceSelectionMode), n = t((s) => s.cancelFaceSelection), o = t((s) => s.enterSketchMode), i = l((s) => s.parts);
  if (!a) return null;
  const r = i.length > 0;
  return e.jsx("div", { className: "fixed inset-x-0 top-4 z-30 flex justify-center pointer-events-none", children: e.jsxs("div", { className: "bg-surface border border-brand/50 shadow-lg px-4 py-3 flex items-center gap-4 pointer-events-auto", children: [e.jsxs("div", { className: "flex items-center gap-2 text-brand", children: [e.jsx(x, { size: 20, weight: "bold" }), e.jsx("span", { className: "text-sm font-medium", children: r ? "Click a face to start sketching" : "No parts to select from" })] }), e.jsx("div", { className: "h-4 w-px bg-border" }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(c, { variant: "ghost", size: "sm", className: "text-xs", onClick: () => o("XY"), children: "Use XY Plane" }), e.jsx(c, { variant: "ghost", size: "icon-sm", onClick: () => {
    n(), m.sketchAbandoned("face_selection");
  }, children: e.jsx(d, { size: 16 }) })] }), e.jsx("span", { className: "text-xs text-text-muted", children: "ESC to cancel" })] }) });
}
export {
  j as FaceSelectionOverlay
};
