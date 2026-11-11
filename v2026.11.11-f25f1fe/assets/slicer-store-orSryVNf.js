import { t as e } from "./react-Cf1qM0wN.js";
var t = { layerHeight: 0.2, firstLayerHeight: 0.25, nozzleDiameter: 0.4, lineWidth: 0.45, wallCount: 3, infillDensity: 0.15, infillPattern: `grid`, supportEnabled: false, supportAngle: 45 }, n = e((e2) => ({ settings: t, setSettings: (t2) => e2((e3) => ({ settings: { ...e3.settings, ...t2 } })), resetSettings: () => e2({ settings: t }), isSlicing: false, sliceError: null, stats: null, sliceResult: null, setSlicing: (t2) => e2({ isSlicing: t2 }), setSliceError: (t2) => e2({ sliceError: t2 }), setStats: (t2) => e2({ stats: t2 }), setSliceResult: (t2) => e2({ sliceResult: t2 }), previewLayerIndex: 0, setPreviewLayerIndex: (t2) => e2({ previewLayerIndex: t2 }), currentLayerPreview: null, setCurrentLayerPreview: (t2) => e2({ currentLayerPreview: t2 }), printPanelOpen: false, openPrintPanel: () => e2({ printPanelOpen: true }), closePrintPanel: () => e2({ printPanelOpen: false }) }));
function r(e2) {
  let t2 = Math.floor(e2 / 3600), n2 = Math.floor(e2 % 3600 / 60);
  return t2 > 0 ? `${t2}h ${n2}m` : `${n2}m`;
}
function i(e2) {
  return { grid: 0, lines: 1, triangles: 2, honeycomb: 3, gyroid: 4 }[e2];
}
export {
  i as n,
  n as r,
  r as t
};
