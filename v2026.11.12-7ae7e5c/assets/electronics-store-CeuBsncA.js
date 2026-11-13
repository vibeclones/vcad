import { t as e } from "./react-Cf1qM0wN.js";
import { J as t, O as n, ht as r, q as i } from "./dist-CKOzv-X0.js";
var a = /^(FCu|BCu|In(\d+)Cu)$/;
function o(e2) {
  return a.test(e2);
}
function s(e2) {
  let t2 = a.exec(e2);
  return (t2 == null ? void 0 : t2[2]) ? Number(t2[2]) : 0;
}
function c(e2) {
  return e2 === `FCu` ? 0 : e2 === `BCu` ? 2 ** 53 - 1 : s(e2);
}
function l(e2) {
  var _a;
  let t2 = /* @__PURE__ */ new Set(), n2 = (e3) => {
    e3 && o(e3) && t2.add(e3);
  };
  for (let t3 of ((_a = e2 == null ? void 0 : e2.stackup) == null ? void 0 : _a.layers) ?? []) n2(t3.layer);
  for (let t3 of (e2 == null ? void 0 : e2.traces) ?? []) n2(t3.layer);
  for (let t3 of (e2 == null ? void 0 : e2.zones) ?? []) n2(t3.layer);
  for (let t3 of (e2 == null ? void 0 : e2.vias) ?? []) n2(t3.startLayer), n2(t3.endLayer);
  return t2.size === 0 ? [`FCu`, `BCu`] : [...t2].sort((e3, t3) => c(e3) - c(t3));
}
var u = { FCu: `#F44336`, BCu: `#2196F3`, In1Cu: `#FFEB3B`, In2Cu: `#4CAF50` };
function d(e2) {
  let t2 = u[e2];
  if (t2) return t2;
  let n2 = s(e2);
  return `hsl(${Math.round((n2 * 137.508 + 20) % 360)}, 75%, 58%)`;
}
function f(e2) {
  return o(e2) ? { layer: e2, color: d(e2), visible: true, opacity: 1 } : { layer: e2, color: `#888`, visible: false, opacity: 1 };
}
function p(e2, t2) {
  return e2.find((e3) => e3.layer === t2) ?? f(t2);
}
function m(e2, t2) {
  let n2 = l(t2).map((t3) => p(e2, t3)), r2 = e2.filter((e3) => !o(e3.layer));
  return [...n2, ...r2];
}
var h = { status: `idle`, error: null, blockers: [], mapping: null, spec: null, dc: null, ac: null, outNet: null, sourceId: null, sweep: { startHz: 10, stopHz: 1e6, points: 60 }, showPanel: false, showDcAnnotations: true, signature: null, tuningRef: null, tuneBusy: false, tuneResult: null }, g = [{ layer: `FCu`, color: `#F44336`, visible: true, opacity: 1 }, { layer: `BCu`, color: `#2196F3`, visible: true, opacity: 1 }, { layer: `In1Cu`, color: `#FFEB3B`, visible: false, opacity: 1 }, { layer: `In2Cu`, color: `#4CAF50`, visible: false, opacity: 1 }, { layer: `FSilkS`, color: `#FFEB3B`, visible: true, opacity: 1 }, { layer: `BSilkS`, color: `#E040FB`, visible: true, opacity: 1 }, { layer: `FMask`, color: `#9C27B0`, visible: false, opacity: 0.5 }, { layer: `BMask`, color: `#4CAF50`, visible: false, opacity: 0.5 }, { layer: `EdgeCuts`, color: `#FFD600`, visible: true, opacity: 1 }, { layer: `FCrtYd`, color: `#FF9800`, visible: false, opacity: 0.6 }, { layer: `BCrtYd`, color: `#00BCD4`, visible: false, opacity: 0.6 }, { layer: `FFab`, color: `#795548`, visible: false, opacity: 0.8 }, { layer: `BFab`, color: `#607D8B`, visible: false, opacity: 0.8 }], _ = e((e2, a2) => ({ active: false, layout: `schematic`, focusedPane: `schematic`, selection: { type: `none` }, hoveredNet: null, netlist: null, orphanFootprints: [], unplacedComponents: [], simulating: false, simNodeVoltages: null, simDeviceCurrents: null, simRotorAngles: null, simNetToNode: null, simRefToDevice: null, analysis: { ...h }, pcbZoom: 1, pcbPan: { x: 0, y: 0 }, pcbTool: `select`, pcbActiveLayer: `FCu`, pcbLayers: g.map((e3) => ({ ...e3 })), pcbGridSize: 0.5, pcbSnapToGrid: true, schZoom: 1, schPan: { x: 0, y: 0 }, schTool: `select`, schPlacingSymbol: null, schPlacingRotation: 0, schWireStart: null, schWirePreview: null, schLabelName: `NET`, schGridSize: 10, schRefCounters: {}, pcbDragging: null, pcbConstraintType: `distance`, pcbConstraintTargets: [], pcbConstraintPending: null, pcbSolveStatus: null, drcViolations: [], ercViolations: [], receiptEntries: [], showReceiptPanel: false, pendingMutation: null, interferingFootprints: [], componentBodies: [], showComponentBodies: true, tiltAngle: 0, stackupExplosion: 0, routeActive: false, routeStartPad: null, routePreview: [], routeClearanceCorridor: 0.15, lengthTuneParams: { target_length: 50, max_amplitude: 2, spacing: 1, style: `Trombone` }, lengthTuneNet: null, enter: () => {
  let a3 = t.getState(), o2 = a3.document, s2 = i(o2)[0] ?? null;
  if (s2 == null) {
    let e3 = a3.parts.find(r);
    e3 && (s2 = e3.boardNodeId);
  }
  s2 != null && n.getState().enter(s2), e2({ active: true, layout: `schematic` });
}, startCircuit: () => {
  let e3 = t.getState();
  e3.document.schematic || e3.initSchematic(), t.getState().document.pcb ?? t.getState().initPcb(), a2().enter();
}, exit: () => {
  n.getState().exit(), e2({ active: false, selection: { type: `none` }, hoveredNet: null, routeActive: false, routeStartPad: null, routePreview: [] });
}, setLayout: (t2) => e2({ layout: t2, focusedPane: t2 === `schematic` ? `schematic` : `pcb` }), toggleLayout: () => e2((e3) => {
  let t2 = e3.layout === `schematic` ? `board` : `schematic`;
  return { layout: t2, focusedPane: t2 === `schematic` ? `schematic` : `pcb` };
}), setFocusedPane: (t2) => e2({ focusedPane: t2 }), select: (t2) => e2({ selection: t2 }), setHoveredNet: (t2) => e2({ hoveredNet: t2 }), setPcbTool: (t2) => e2({ pcbTool: t2, routeActive: t2 === `route` && void 0, routeStartPad: t2 === `route` ? void 0 : null, routePreview: t2 === `route` ? void 0 : [], pcbConstraintTargets: [], pcbConstraintPending: null }), setPcbConstraintType: (t2) => e2({ pcbConstraintType: t2, pcbConstraintTargets: [], pcbConstraintPending: null }), pushConstraintTarget: (t2) => e2((e3) => {
  let n2 = [...e3.pcbConstraintTargets, t2], r2 = e3.pcbConstraintType === `fixed` ? 1 : 2;
  return n2.length < r2 ? { pcbConstraintTargets: n2 } : { pcbConstraintTargets: [], pcbConstraintPending: { type: e3.pcbConstraintType, targets: n2 } };
}), clearConstraintPicks: () => e2({ pcbConstraintTargets: [], pcbConstraintPending: null }), setPcbConstraintPending: (t2) => e2({ pcbConstraintPending: t2 }), setPcbSolveStatus: (t2) => e2({ pcbSolveStatus: t2 }), setSchTool: (t2) => e2({ schTool: t2 }), setPcbActiveLayer: (t2) => e2({ pcbActiveLayer: t2 }), inferLayerFromPad: (t2) => {
  let n2 = t2.find((e3) => e3 === `FCu` || e3 === `BCu` || e3.startsWith(`In`));
  n2 && e2({ pcbActiveLayer: n2 });
}, zoomPcbAt: (t2, n2, r2) => e2((e3) => {
  let i2 = e3.pcbZoom, a3 = Math.max(0.1, Math.min(50, i2 * (1 + t2)));
  return a3 === i2 ? {} : { pcbZoom: a3, pcbPan: { x: e3.pcbPan.x + n2 * (1 / a3 - 1 / i2), y: e3.pcbPan.y + r2 * (1 / a3 - 1 / i2) } };
}), adjustPcbPan: (t2, n2) => e2((e3) => ({ pcbPan: { x: e3.pcbPan.x + t2, y: e3.pcbPan.y + n2 } })), zoomSchAt: (t2, n2, r2) => e2((e3) => {
  let i2 = e3.schZoom, a3 = Math.max(0.1, Math.min(50, i2 * (1 + t2)));
  return a3 === i2 ? {} : { schZoom: a3, schPan: { x: e3.schPan.x + n2 * (1 / a3 - 1 / i2), y: e3.schPan.y + r2 * (1 / a3 - 1 / i2) } };
}), adjustSchPan: (t2, n2) => e2((e3) => ({ schPan: { x: e3.schPan.x + t2, y: e3.schPan.y + n2 } })), setPcbGridSize: (t2) => e2({ pcbGridSize: t2 }), setPcbSnapToGrid: (t2) => e2({ pcbSnapToGrid: t2 }), setLayerVisible: (t2, n2) => e2((e3) => ({ pcbLayers: e3.pcbLayers.some((e4) => e4.layer === t2) ? e3.pcbLayers.map((e4) => e4.layer === t2 ? { ...e4, visible: n2 } : e4) : [...e3.pcbLayers, { ...f(t2), visible: n2 }] })), setLayerOpacity: (t2, n2) => e2((e3) => ({ pcbLayers: e3.pcbLayers.some((e4) => e4.layer === t2) ? e3.pcbLayers.map((e4) => e4.layer === t2 ? { ...e4, opacity: n2 } : e4) : [...e3.pcbLayers, { ...f(t2), opacity: n2 }] })), setDrcViolations: (t2) => e2({ drcViolations: t2 }), setErcViolations: (t2) => e2({ ercViolations: t2 }), appendReceiptEntry: (t2) => e2((e3) => ({ receiptEntries: [...e3.receiptEntries, t2] })), clearReceipt: () => e2({ receiptEntries: [] }), toggleReceiptPanel: () => e2((e3) => ({ showReceiptPanel: !e3.showReceiptPanel })), noteMutation: (t2, n2 = {}) => e2({ pendingMutation: { tool: t2, args: n2 } }), consumePendingMutation: () => {
  let t2 = a2().pendingMutation;
  return t2 && e2({ pendingMutation: null }), t2;
}, setInterferingFootprints: (t2) => e2({ interferingFootprints: t2 }), setComponentBodies: (t2) => e2({ componentBodies: t2 }), toggleComponentBodies: () => e2((e3) => ({ showComponentBodies: !e3.showComponentBodies })), setNetlist: (t2) => e2({ netlist: t2 }), setSimulating: (t2) => e2(t2 ? { simulating: t2 } : { simulating: false, simNodeVoltages: null, simDeviceCurrents: null, simRotorAngles: null, simNetToNode: null, simRefToDevice: null }), setSimMaps: (t2, n2) => e2({ simNetToNode: t2, simRefToDevice: n2 }), setSimObservation: (t2, n2, r2) => e2({ simNodeVoltages: t2, simDeviceCurrents: n2, simRotorAngles: r2 }), clearSim: () => e2({ simNodeVoltages: null, simDeviceCurrents: null, simRotorAngles: null, simNetToNode: null, simRefToDevice: null }), setAnalysis: (t2) => e2((e3) => ({ analysis: { ...e3.analysis, ...t2 } })), clearAnalysis: () => e2((e3) => ({ analysis: { ...h, sweep: e3.analysis.sweep, showPanel: e3.analysis.showPanel, showDcAnnotations: e3.analysis.showDcAnnotations } })), setOrphanFootprints: (t2) => e2({ orphanFootprints: t2 }), setUnplacedComponents: (t2) => e2({ unplacedComponents: t2 }), startRouteFromRatsnest: (t2, n2, r2) => e2({ pcbTool: `route`, routeActive: true, routeStartPad: { fpRef: t2, padNum: n2, net: r2 }, routePreview: [], selection: { type: `pad`, fpRef: t2, padNum: n2, net: r2 } }), startRoute: (t2, n2, r2) => e2({ routeActive: true, routeStartPad: { fpRef: t2, padNum: n2, net: r2 }, routePreview: [] }), updateRoutePreview: (t2) => e2({ routePreview: t2 }), cancelRoute: () => e2({ routeActive: false, routeStartPad: null, routePreview: [] }), finishRoute: () => e2({ routeActive: false, routeStartPad: null, routePreview: [] }), setSchPlacingSymbol: (t2) => e2({ schPlacingSymbol: t2, schPlacingRotation: 0, schTool: t2 ? `place` : `select` }), rotateSchPlacement: () => e2((e3) => ({ schPlacingRotation: (e3.schPlacingRotation + 90) % 360 })), startSchWire: (t2) => e2({ schWireStart: t2, schWirePreview: t2 }), updateSchWirePreview: (t2) => e2({ schWirePreview: t2 }), cancelSchWire: () => e2({ schWireStart: null, schWirePreview: null }), setSchLabelName: (t2) => e2({ schLabelName: t2 }), nextRef: (n2) => {
  let r2 = a2(), i2 = t.getState().document.schematic, o2 = r2.schRefCounters[n2] ?? 0;
  if (i2) {
    for (let e3 of i2.components) if (e3.ref.startsWith(n2)) {
      let t2 = parseInt(e3.ref.slice(n2.length), 10);
      !isNaN(t2) && t2 > o2 && (o2 = t2);
    }
  }
  let s2 = o2 + 1;
  return e2({ schRefCounters: { ...r2.schRefCounters, [n2]: s2 } }), `${n2}${s2}`;
}, setLengthTuneParams: (t2) => e2((e3) => ({ lengthTuneParams: { ...e3.lengthTuneParams, ...t2 } })), startLengthTune: (t2) => e2({ pcbTool: `length-tune`, lengthTuneNet: t2 }), cancelLengthTune: () => e2({ lengthTuneNet: null, pcbTool: `select` }), setTiltAngle: (t2) => e2({ tiltAngle: Math.max(0, Math.min(75, t2)) }), setStackupExplosion: (t2) => e2({ stackupExplosion: Math.max(0, Math.min(1, t2)) }), toggleStackupExplosion: () => e2((e3) => ({ stackupExplosion: e3.stackupExplosion > 0.5 ? 0 : 1 })), startPcbDrag: (t2, n2) => e2({ pcbDragging: { fpIdx: t2, startPos: n2 } }), cancelPcbDrag: () => e2({ pcbDragging: null }) }));
export {
  s as a,
  l as i,
  p as n,
  o,
  m as r,
  _ as t
};
