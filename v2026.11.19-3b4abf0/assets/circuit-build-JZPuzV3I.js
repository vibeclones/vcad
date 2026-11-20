var e = { p: 1e-12, n: 1e-9, u: 1e-6, \u00B5: 1e-6, m: 1e-3, k: 1e3, K: 1e3, M: 1e6, G: 1e9 };
function t(t2, n2) {
  if (!t2) return n2;
  let r2 = t2.trim().match(/^([0-9]*\.?[0-9]+)\s*([pnuµmkKMG]?)/);
  if (!r2) return n2;
  let i2 = parseFloat(r2[1]);
  if (!isFinite(i2)) return n2;
  let a = r2[2];
  return i2 * (a ? e[a] ?? 1 : 1);
}
var n = (e2) => /^(gnd|0|vss)$/i.test(e2), r = (e2) => /^(vcc|vdd|v\+)$/i.test(e2) || /^\+?\d+(v\d*|v)$/i.test(e2);
function i(e2, i2, a) {
  var _a;
  let o = (a == null ? void 0 : a.dt) ?? 1e-5, s = (a == null ? void 0 : a.vcc) ?? 5, c = /* @__PURE__ */ new Map();
  for (let e3 of i2.nets) for (let t2 of e3.connections) c.set(`${t2.component_ref}.${t2.pin_number}`, e3.name);
  let l = new Map(e2.map((e3) => {
    var _a2;
    return [e3.ref, (((_a2 = e3.properties) == null ? void 0 : _a2.symbolId) ?? ``).toLowerCase()];
  })), u = (e3) => {
    for (let t2 of e3.connections) {
      let e4 = l.get(t2.component_ref);
      if (e4 === `gnd`) return `gnd`;
      if (e4 === `vcc` || e4 === `vdd`) return `vcc`;
    }
    return n(e3.name) ? `gnd` : r(e3.name) ? `vcc` : null;
  }, d = new Map(i2.nets.map((e3) => [e3.name, u(e3)])), f = /* @__PURE__ */ new Map();
  for (let e3 of i2.nets) d.get(e3.name) === `gnd` && f.set(e3.name, 0);
  let p = 1;
  for (let e3 of i2.nets) f.has(e3.name) || f.set(e3.name, p++);
  let m = (e3, t2) => {
    let n2 = c.get(`${e3}.${t2}`);
    return n2 === void 0 ? null : f.get(n2) ?? null;
  }, h = [], g = /* @__PURE__ */ new Map();
  for (let e3 of i2.nets) if (d.get(e3.name) === `vcc`) {
    let t2 = f.get(e3.name);
    h.push({ kind: `vsource`, p: t2, n: 0, value: s });
  }
  let _ = (e3, t2, n2) => {
    var _a2;
    let r2 = [(_a2 = e3.pins[t2]) == null ? void 0 : _a2.number, ...n2].filter((e4) => !!e4);
    for (let t3 of r2) {
      let n3 = m(e3.ref, t3);
      if (n3 !== null) return n3;
    }
    return null;
  };
  for (let n2 of e2) {
    let e3 = (((_a = n2.properties) == null ? void 0 : _a.symbolId) ?? ``).toLowerCase(), r2 = _(n2, 0, [`1`, `A`, `+`]), i3 = _(n2, 1, [`2`, `K`, `-`]), a2 = (e4, t2) => {
      r2 !== null && i3 !== null && (g.set(n2.ref, h.length), h.push({ kind: e4, p: r2, n: i3, value: t2 }));
    };
    switch (e3) {
      case `resistor`:
        a2(`resistor`, t(n2.value, 1e3));
        break;
      case `capacitor`:
        a2(`capacitor`, t(n2.value, 1e-7));
        break;
      case `inductor`:
        a2(`inductor`, t(n2.value, 1e-3));
        break;
      case `led`:
        a2(`led`);
        break;
      case `diode`:
        a2(`diode`);
        break;
      case `motor`:
        a2(`motor`);
    }
  }
  return { spec: { dt: o, devices: h }, netToNode: f, refToDevice: g };
}
export {
  t as n,
  i as t
};
