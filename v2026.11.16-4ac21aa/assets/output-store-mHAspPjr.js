import { t as e } from "./react-Cf1qM0wN.js";
var t = { pla: { process: `fdm`, catalogName: `PLA`, display: { name: `PLA`, method: `3D Print`, days: 3 } }, aluminum: { process: `cnc_3axis`, catalogName: `Aluminum 6061`, display: { name: `Aluminum`, method: `CNC`, days: 5 } }, steel: { process: `cnc_3axis`, catalogName: `Steel 1018`, display: { name: `Steel`, method: `CNC`, days: 7 } } }, n = e((e2) => ({ quotePanelOpen: false, openQuotePanel: () => e2({ quotePanelOpen: true }), closeQuotePanel: () => e2({ quotePanelOpen: false }), selectedMaterial: `pla`, setSelectedMaterial: (t2) => e2({ selectedMaterial: t2 }), cachedPrices: {}, setCachedPrices: (t2) => e2({ cachedPrices: t2 }) }));
export {
  n,
  t
};
