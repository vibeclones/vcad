import { t as e } from "./X.es-eqQvie4c.js";
import { t } from "./utils-D0T3A-kS.js";
import { t as n } from "./button-DSLaODVs.js";
import { t as r } from "./onboarding-store-BxlWWPNy.js";
import { E as i } from "./dist-_2fbu5WV.js";
import { n as a } from "./locale-store-DZ0YyEbC.js";
import { O as o } from "./three-drei-_EcrAYRL.js";
var s = o(), c = { "add-cube": { instructionKey: `tutorial.add_cube.instruction`, detailKey: `tutorial.add_cube.detail` }, "add-cylinder": { instructionKey: `tutorial.add_cylinder.instruction`, detailKey: `tutorial.add_cylinder.detail` }, "position-cylinder": { instructionKey: `tutorial.position_cylinder.instruction`, detailKey: `tutorial.position_cylinder.detail` }, subtract: { instructionKey: `tutorial.subtract.instruction`, detailKey: `tutorial.subtract.detail` }, celebrate: { instructionKey: `tutorial.celebrate.instruction`, detailKey: `tutorial.celebrate.detail` } }, l = [`add-cube`, `add-cylinder`, `position-cylinder`, `subtract`, `celebrate`];
function u() {
  let o2 = r((e2) => e2.guidedFlowActive), u2 = r((e2) => e2.guidedFlowStep), d = r((e2) => e2.skipGuidedFlow), f = r((e2) => e2.completeGuidedFlow);
  if (a((e2) => e2.locale), !o2 || !u2) return null;
  let p = c[u2], m = l.indexOf(u2), h = u2 === `celebrate`;
  return (0, s.jsx)(`div`, { className: `absolute bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none`, children: (0, s.jsxs)(`div`, { className: t(`pointer-events-auto`, `flex flex-col items-center gap-2 px-5 py-3`, `bg-surface/95 backdrop-blur-sm`, `border border-border`, `shadow-lg shadow-black/20`, `animate-in fade-in slide-in-from-bottom-2 duration-300`), children: [!h && (0, s.jsx)(`button`, { onClick: d, className: `absolute right-2 top-2 p-1 text-text-muted hover:text-text`, "aria-label": i(`tutorial.skip`), children: (0, s.jsx)(e, { size: 12 }) }), (0, s.jsxs)(`div`, { className: `text-center`, children: [(0, s.jsx)(`p`, { className: `text-sm font-medium text-text`, children: i(p.instructionKey) }), p.detailKey && (0, s.jsx)(`p`, { className: `text-xs text-text-muted mt-0.5`, children: i(p.detailKey) })] }), (0, s.jsx)(`div`, { className: `flex items-center gap-1.5`, children: l.slice(0, -1).map((e2, n2) => (0, s.jsx)(`div`, { className: t(`w-1.5 h-1.5 rounded-full transition-colors`, n2 < m || n2 === m ? `bg-brand` : `bg-border`) }, e2)) }), h && (0, s.jsx)(`div`, { className: `flex gap-2 mt-1`, children: (0, s.jsx)(n, { size: `sm`, onClick: f, children: i(`tutorial.start_building`) }) }), !h && (0, s.jsx)(`button`, { onClick: d, className: `text-[10px] text-text-muted hover:text-text`, children: i(`tutorial.skip_short`) })] }) });
}
export {
  u as GuidedFlowOverlay
};
