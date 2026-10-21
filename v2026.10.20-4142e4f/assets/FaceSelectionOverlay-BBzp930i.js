import { k as e } from "./three-fiber-GW7QWJN8.js";
import { j as t, h as l, L as x, B as c, f as d, M as m } from "./index-CF9msCJo.js";
import "./three-tnxpQXqG.js";
import "./three-drei-B7JBl7yq.js";
function u() {
  const n = t((s) => s.faceSelectionMode), a = t((s) => s.cancelFaceSelection), o = t((s) => s.enterSketchMode), i = l((s) => s.parts);
  if (!n) return null;
  const r = i.length > 0;
  return e.jsx("div", { className: "fixed inset-x-0 top-4 z-30 flex justify-center pointer-events-none", children: e.jsxs("div", { className: "bg-surface border border-brand/50 shadow-lg px-4 py-3 flex items-center gap-4 pointer-events-auto", children: [e.jsxs("div", { className: "flex items-center gap-2 text-brand", children: [e.jsx(x, { size: 20, weight: "bold" }), e.jsx("span", { className: "text-sm font-medium", children: r ? "Click a face to start sketching" : "No parts to select from" })] }), e.jsx("div", { className: "h-4 w-px bg-border" }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(c, { variant: "ghost", size: "sm", className: "text-xs", onClick: () => o("XY"), children: "Use XY Plane" }), e.jsx(c, { variant: "ghost", size: "icon-sm", onClick: () => {
    a(), m.sketchAbandoned("face_selection");
  }, children: e.jsx(d, { size: 16 }) })] }), e.jsx("span", { className: "text-xs text-text-muted", children: "ESC to cancel" })] }) });
}
export {
  u as FaceSelectionOverlay
};
