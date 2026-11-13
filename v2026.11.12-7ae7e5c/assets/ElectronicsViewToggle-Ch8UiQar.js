import { t as e } from "./PencilSimple.es-iSn-py_w.js";
import { t } from "./Cpu.es-BG-PBmuk.js";
import { t as n } from "./electronics-store-CeuBsncA.js";
import { t as r } from "./utils-D0T3A-kS.js";
import { O as i } from "./three-drei-_EcrAYRL.js";
var a = i();
function o() {
  let i2 = n((e2) => e2.layout), o2 = n((e2) => e2.setLayout), s = (e2, t2, n2) => (0, a.jsxs)(`button`, { type: `button`, onClick: () => o2(e2), "aria-pressed": i2 === e2, className: r(`flex items-center gap-1.5 rounded-md px-3 py-1 text-[11px] font-medium transition-colors`, i2 === e2 ? `bg-brand text-white shadow-sm` : `text-text-muted hover:text-text`), children: [(0, a.jsx)(n2, { size: 13, weight: i2 === e2 ? `fill` : `regular` }), t2] });
  return (0, a.jsxs)(`div`, { className: `pointer-events-auto absolute left-1/2 top-3 z-30 flex -translate-x-1/2 items-center gap-0.5 rounded-lg border border-border bg-surface/95 p-0.5 shadow-lg backdrop-blur-sm`, children: [s(`schematic`, `Schematic`, e), s(`board`, `Board`, t)] });
}
export {
  o as ElectronicsViewToggle
};
