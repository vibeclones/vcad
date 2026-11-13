import { t as e } from "./react-Cf1qM0wN.js";
import { t } from "./middleware-CJ9hWF1h.js";
var n = { vcad: { id: `vcad`, name: `vcad (Default)`, description: `Mouse: scroll zoom, MMB orbit. Trackpad: scroll orbit with momentum.`, mouseBindings: [{ button: `middle`, action: `orbit`, device: `mouse` }, { button: `middle`, action: `pan`, device: `trackpad` }, { button: `right`, action: `orbit`, device: `mouse` }, { button: `right`, action: `pan`, device: `trackpad` }], scrollBindings: [{ action: `zoom`, device: `mouse` }, { action: `orbit`, device: `trackpad` }, { modifiers: { shift: true }, action: `zoom`, device: `trackpad` }, { modifiers: { meta: true }, action: `pan` }], trackpadOrbitEnabled: true }, fusion360: { id: `fusion360`, name: `Fusion 360`, description: `Scroll to zoom, MMB to orbit, Shift+MMB to pan`, mouseBindings: [{ button: `middle`, action: `orbit` }, { button: `middle`, modifiers: { shift: true }, action: `pan` }], scrollBindings: [{ action: `zoom` }], trackpadOrbitEnabled: false }, solidworks: { id: `solidworks`, name: `SolidWorks`, description: `Scroll to zoom, MMB to orbit, Ctrl+MMB to pan`, mouseBindings: [{ button: `middle`, action: `orbit` }, { button: `middle`, modifiers: { ctrl: true }, action: `pan` }], scrollBindings: [{ action: `zoom` }], trackpadOrbitEnabled: false }, onshape: { id: `onshape`, name: `Onshape`, description: `Scroll to zoom, RMB to orbit, MMB to pan`, mouseBindings: [{ button: `right`, action: `orbit` }, { button: `middle`, action: `pan` }], scrollBindings: [{ action: `zoom` }], trackpadOrbitEnabled: false }, blender: { id: `blender`, name: `Blender`, description: `Scroll to zoom, MMB to orbit, Shift+MMB to pan`, mouseBindings: [{ button: `middle`, action: `orbit` }, { button: `middle`, modifiers: { shift: true }, action: `pan` }], scrollBindings: [{ action: `zoom` }], trackpadOrbitEnabled: false } }, r = { controlSchemeId: `vcad`, inputDevice: `auto`, zoomBehavior: { zoomTowardsCursor: false, invertDirection: false, sensitivity: 1 }, orbitMomentum: true }, i = e()(t((e2) => ({ ...r, detectedDevice: null, setControlScheme: (t2) => {
  n[t2] && e2({ controlSchemeId: t2 });
}, setInputDevice: (t2) => {
  e2({ inputDevice: t2 });
}, setDetectedDevice: (t2) => {
  e2({ detectedDevice: t2 });
}, setZoomBehavior: (t2) => {
  e2((e3) => ({ zoomBehavior: { ...e3.zoomBehavior, ...t2 } }));
}, setOrbitMomentum: (t2) => {
  e2({ orbitMomentum: t2 });
}, resetToDefaults: () => {
  e2({ ...r, detectedDevice: null });
} }), { name: `vcad-camera-settings`, partialize: (e2) => ({ controlSchemeId: e2.controlSchemeId, inputDevice: e2.inputDevice, zoomBehavior: e2.zoomBehavior, orbitMomentum: e2.orbitMomentum }) }));
function a(e2) {
  return e2.inputDevice === `auto` ? e2.detectedDevice ?? `trackpad` : e2.inputDevice;
}
function o(e2) {
  return n[e2.controlSchemeId] ?? n.vcad;
}
export {
  n as i,
  a as n,
  i as r,
  o as t
};
