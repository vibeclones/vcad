import { t as e } from "./react-Cf1qM0wN.js";
var t = { stepover: 3, stepdown: 2, feedRate: 1e3, plungeRate: 300, spindleRpm: 12e3, safeZ: 5, retractZ: 10 }, n = [{ id: `default-endmill-6mm`, name: `6mm Flat Endmill`, type: `flat_endmill`, diameter: 6, fluteLength: 20, flutes: 2, defaultRpm: 12e3, defaultFeed: 1e3, defaultPlunge: 300 }, { id: `default-ball-6mm`, name: `6mm Ball Endmill`, type: `ball_endmill`, diameter: 6, fluteLength: 20, flutes: 2, defaultRpm: 12e3, defaultFeed: 800, defaultPlunge: 250 }, { id: `default-bull-6mm`, name: `6mm Bull Endmill R1`, type: `bull_endmill`, diameter: 6, cornerRadius: 1, fluteLength: 20, flutes: 2, defaultRpm: 12e3, defaultFeed: 900, defaultPlunge: 280 }, { id: `default-endmill-3mm`, name: `3mm Flat Endmill`, type: `flat_endmill`, diameter: 3, fluteLength: 15, flutes: 2, defaultRpm: 18e3, defaultFeed: 600, defaultPlunge: 200 }, { id: `default-vbit-90`, name: `90\xB0 V-Bit`, type: `vbit`, diameter: 6, angle: 90, defaultRpm: 15e3, defaultFeed: 500, defaultPlunge: 150 }], r = 0;
function i() {
  return `op-${++r}-${Date.now()}`;
}
function a() {
  return `tool-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
var o = e((e2) => ({ camPanelOpen: false, openCamPanel: () => e2({ camPanelOpen: true }), closeCamPanel: () => e2({ camPanelOpen: false }), tools: n, selectedToolId: null, addTool: (t2) => {
  let n2 = { ...t2, id: a() };
  e2((e3) => ({ tools: [...e3.tools, n2] }));
}, updateTool: (t2, n2) => {
  e2((e3) => ({ tools: e3.tools.map((e4) => e4.id === t2 ? { ...e4, ...n2 } : e4) }));
}, removeTool: (t2) => {
  e2((e3) => ({ tools: e3.tools.filter((e4) => e4.id !== t2), selectedToolId: e3.selectedToolId === t2 ? null : e3.selectedToolId }));
}, selectTool: (t2) => e2({ selectedToolId: t2 }), operations: [], selectedOperationId: null, addOperation: (t2) => {
  let n2 = i(), r2 = { ...t2, id: n2 };
  e2((e3) => ({ operations: [...e3.operations, r2], selectedOperationId: n2 }));
}, updateOperation: (t2, n2) => {
  e2((e3) => ({ operations: e3.operations.map((e4) => e4.id === t2 ? { ...e4, ...n2 } : e4) }));
}, removeOperation: (t2) => {
  e2((e3) => ({ operations: e3.operations.filter((e4) => e4.id !== t2), selectedOperationId: e3.selectedOperationId === t2 ? null : e3.selectedOperationId }));
}, selectOperation: (t2) => e2({ selectedOperationId: t2 }), moveOperation: (t2, n2) => {
  e2((e3) => {
    let r2 = e3.operations.findIndex((e4) => e4.id === t2);
    if (r2 === -1) return e3;
    let i2 = n2 === `up` ? Math.max(0, r2 - 1) : Math.min(e3.operations.length - 1, r2 + 1);
    if (i2 === r2) return e3;
    let a2 = [...e3.operations];
    return [a2[r2], a2[i2]] = [a2[i2], a2[r2]], { operations: a2 };
  });
}, settings: t, setSettings: (t2) => e2((e3) => ({ settings: { ...e3.settings, ...t2 } })), resetSettings: () => e2({ settings: t }), isGenerating: false, generateError: null, toolpathJson: null, gcodeOutput: null, stats: null, setGenerating: (t2) => e2({ isGenerating: t2 }), setGenerateError: (t2) => e2({ generateError: t2 }), setToolpathJson: (t2) => e2({ toolpathJson: t2 }), setGcodeOutput: (t2) => e2({ gcodeOutput: t2 }), setStats: (t2) => e2({ stats: t2 }), reset: () => e2({ operations: [], selectedOperationId: null, selectedToolId: null, isGenerating: false, generateError: null, toolpathJson: null, gcodeOutput: null, stats: null }) }));
function s(e2) {
  if (e2 < 60) return `${Math.round(e2)}s`;
  let t2 = Math.floor(e2 / 60), n2 = Math.round(e2 % 60);
  return t2 < 60 ? n2 > 0 ? `${t2}m ${n2}s` : `${t2}m` : `${Math.floor(t2 / 60)}h ${t2 % 60}m`;
}
function c(e2) {
  return JSON.stringify({ type: e2.type, diameter: e2.diameter, flute_length: e2.fluteLength, flutes: e2.flutes, angle: e2.angle, point_angle: e2.pointAngle, corner_radius: e2.cornerRadius });
}
export {
  c as n,
  o as r,
  s as t
};
