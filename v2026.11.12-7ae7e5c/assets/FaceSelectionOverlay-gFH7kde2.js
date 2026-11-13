import { J as e, R as t } from "./dist-CKOzv-X0.js";
import { t as n } from "./Crosshair.es-CgucwDA7.js";
import { t as r } from "./X.es-eqQvie4c.js";
import { t as i } from "./button-DSLaODVs.js";
import { t as a } from "./analytics-Cth_f83R.js";
import { O as o } from "./three-drei-_EcrAYRL.js";
var s = o();
function c() {
  let o2 = t((e2) => e2.faceSelectionMode), c2 = t((e2) => e2.cancelFaceSelection), l = t((e2) => e2.enterSketchMode), u = e((e2) => e2.parts);
  if (!o2) return null;
  let d = u.length > 0;
  return (0, s.jsx)(`div`, { className: `fixed inset-x-0 top-4 z-30 flex justify-center pointer-events-none`, children: (0, s.jsxs)(`div`, { className: `bg-surface border border-brand/50 shadow-lg px-4 py-3 flex items-center gap-4 pointer-events-auto`, children: [(0, s.jsxs)(`div`, { className: `flex items-center gap-2 text-brand`, children: [(0, s.jsx)(n, { size: 20, weight: `bold` }), (0, s.jsx)(`span`, { className: `text-sm font-medium`, children: d ? `Click a face to start sketching` : `No parts to select from` })] }), (0, s.jsx)(`div`, { className: `h-4 w-px bg-border` }), (0, s.jsxs)(`div`, { className: `flex items-center gap-2`, children: [(0, s.jsx)(i, { variant: `ghost`, size: `sm`, className: `text-xs`, onClick: () => l(`XY`), children: `Use XY Plane` }), (0, s.jsx)(i, { variant: `ghost`, size: `icon-sm`, onClick: () => {
    c2(), a.sketchAbandoned(`face_selection`);
  }, children: (0, s.jsx)(r, { size: 16 }) })] }), (0, s.jsx)(`span`, { className: `text-xs text-text-muted`, children: `ESC to cancel` })] }) });
}
export {
  c as FaceSelectionOverlay
};
