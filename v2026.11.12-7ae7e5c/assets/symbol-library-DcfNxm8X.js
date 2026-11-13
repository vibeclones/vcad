import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t } from "./three-drei-_EcrAYRL.js";
import { a as n } from "./dist-D-hjKoV0.js";
var r = e(t(), 1), i = null, a = null, o = /* @__PURE__ */ new Set();
function s() {
  for (let e2 of o) e2();
}
function c() {
  return a || (a = (async () => {
    for (let e2 = 0; e2 < 40; e2++) {
      try {
        let e3 = await n();
        if (e3.length > 0) {
          i = e3, s();
          return;
        }
      } catch {
      }
      await new Promise((e3) => setTimeout(e3, 200));
    }
  })()), a;
}
c();
function l(e2, t2, n2, r2, i2, a2 = `FCu`) {
  return { number: e2, padType: `SMD`, shape: { type: `Rect`, width: r2, height: i2 }, position: { x: t2, y: n2 }, layers: [a2] };
}
function u(e2, t2, n2, r2) {
  return { type: `Line`, start: { x: e2, y: t2 }, end: { x: n2, y: r2 }, width: 0.12, layer: `FSilkS` };
}
var d = [{ id: `resistor`, name: `Resistor`, prefix: `R`, defaultValue: `10k`, pins: [{ number: `1`, name: `1`, pin_type: `Passive`, position: { x: -8, y: 15 } }, { number: `2`, name: `2`, pin_type: `Passive`, position: { x: 48, y: 15 } }], graphics: [{ type: `rect`, x: 5, y: 5, width: 30, height: 20 }, { type: `line`, x1: -8, y1: 15, x2: 5, y2: 15 }, { type: `line`, x1: 35, y1: 15, x2: 48, y2: 15 }], footprintTemplate: { name: `0805`, pads: [l(`1`, -1, 0, 1, 1.2), l(`2`, 1, 0, 1, 1.2)], graphics: [u(-0.5, -0.7, 0.5, -0.7), u(-0.5, 0.7, 0.5, 0.7)] } }, { id: `capacitor`, name: `Capacitor`, prefix: `C`, defaultValue: `100nF`, pins: [{ number: `1`, name: `1`, pin_type: `Passive`, position: { x: -8, y: 15 } }, { number: `2`, name: `2`, pin_type: `Passive`, position: { x: 48, y: 15 } }], graphics: [{ type: `line`, x1: -8, y1: 15, x2: 16, y2: 15 }, { type: `line`, x1: 16, y1: 3, x2: 16, y2: 27 }, { type: `line`, x1: 24, y1: 3, x2: 24, y2: 27 }, { type: `line`, x1: 24, y1: 15, x2: 48, y2: 15 }], footprintTemplate: { name: `0805`, pads: [l(`1`, -1, 0, 1, 1.2), l(`2`, 1, 0, 1, 1.2)], graphics: [u(-0.5, -0.7, 0.5, -0.7), u(-0.5, 0.7, 0.5, 0.7)] } }, { id: `vcc`, name: `VCC`, prefix: `PWR`, defaultValue: `VCC`, pins: [{ number: `1`, name: `1`, pin_type: `PowerOutput`, position: { x: 20, y: 30 } }], graphics: [{ type: `line`, x1: 20, y1: 30, x2: 20, y2: 10 }, { type: `polyline`, points: [{ x: 10, y: 10 }, { x: 20, y: 0 }, { x: 30, y: 10 }] }], footprintTemplate: null }, { id: `gnd`, name: `GND`, prefix: `PWR`, defaultValue: `GND`, pins: [{ number: `1`, name: `1`, pin_type: `PowerInput`, position: { x: 20, y: 0 } }], graphics: [{ type: `line`, x1: 20, y1: 0, x2: 20, y2: 15 }, { type: `line`, x1: 8, y1: 15, x2: 32, y2: 15 }, { type: `line`, x1: 12, y1: 20, x2: 28, y2: 20 }, { type: `line`, x1: 16, y1: 25, x2: 24, y2: 25 }], footprintTemplate: null }];
new Proxy(d, { get(e2, t2, n2) {
  return Reflect.get(i ?? e2, t2, n2);
} });
function f(e2) {
  return (i ?? d).find((t2) => t2.id === e2);
}
function p() {
  return (0, r.useSyncExternalStore)((e2) => (o.add(e2), () => o.delete(e2)), () => i ?? d, () => i ?? d);
}
export {
  p as n,
  f as t
};
