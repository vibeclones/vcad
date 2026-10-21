import { c as r, p as c } from "./three-drei-B7JBl7yq.js";
const e = { vcad: { id: "vcad", name: "vcad (Default)", description: "Mouse: scroll zoom, MMB orbit. Trackpad: scroll orbit with momentum.", mouseBindings: [{ button: "middle", action: "orbit", device: "mouse" }, { button: "middle", action: "pan", device: "trackpad" }, { button: "right", action: "orbit", device: "mouse" }, { button: "right", action: "pan", device: "trackpad" }], scrollBindings: [{ action: "zoom", device: "mouse" }, { action: "orbit", device: "trackpad" }, { modifiers: { shift: true }, action: "zoom", device: "trackpad" }, { modifiers: { meta: true }, action: "pan" }], trackpadOrbitEnabled: true }, fusion360: { id: "fusion360", name: "Fusion 360", description: "Scroll to zoom, MMB to orbit, Shift+MMB to pan", mouseBindings: [{ button: "middle", action: "orbit" }, { button: "middle", modifiers: { shift: true }, action: "pan" }], scrollBindings: [{ action: "zoom" }], trackpadOrbitEnabled: false }, solidworks: { id: "solidworks", name: "SolidWorks", description: "Scroll to zoom, MMB to orbit, Ctrl+MMB to pan", mouseBindings: [{ button: "middle", action: "orbit" }, { button: "middle", modifiers: { ctrl: true }, action: "pan" }], scrollBindings: [{ action: "zoom" }], trackpadOrbitEnabled: false }, onshape: { id: "onshape", name: "Onshape", description: "Scroll to zoom, RMB to orbit, MMB to pan", mouseBindings: [{ button: "right", action: "orbit" }, { button: "middle", action: "pan" }], scrollBindings: [{ action: "zoom" }], trackpadOrbitEnabled: false }, blender: { id: "blender", name: "Blender", description: "Scroll to zoom, MMB to orbit, Shift+MMB to pan", mouseBindings: [{ button: "middle", action: "orbit" }, { button: "middle", modifiers: { shift: true }, action: "pan" }], scrollBindings: [{ action: "zoom" }], trackpadOrbitEnabled: false } }, a = { zoomTowardsCursor: false, invertDirection: false, sensitivity: 1 }, i = { controlSchemeId: "vcad", inputDevice: "auto", zoomBehavior: a, orbitMomentum: true }, s = r()(c((o) => ({ ...i, detectedDevice: null, setControlScheme: (t) => {
  e[t] && o({ controlSchemeId: t });
}, setInputDevice: (t) => {
  o({ inputDevice: t });
}, setDetectedDevice: (t) => {
  o({ detectedDevice: t });
}, setZoomBehavior: (t) => {
  o((n) => ({ zoomBehavior: { ...n.zoomBehavior, ...t } }));
}, setOrbitMomentum: (t) => {
  o({ orbitMomentum: t });
}, resetToDefaults: () => {
  o({ ...i, detectedDevice: null });
} }), { name: "vcad-camera-settings", partialize: (o) => ({ controlSchemeId: o.controlSchemeId, inputDevice: o.inputDevice, zoomBehavior: o.zoomBehavior, orbitMomentum: o.orbitMomentum }) }));
function m(o) {
  return o.inputDevice === "auto" ? o.detectedDevice ?? "trackpad" : o.inputDevice;
}
function l(o) {
  return e[o.controlSchemeId] ?? e.vcad;
}
export {
  e as C,
  l as a,
  m as g,
  s as u
};
