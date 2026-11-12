import { J as e } from "./dist-_2fbu5WV.js";
import { c as t, l as n, o as r, s as i } from "./dist-CBlCjY37.js";
import { n as a } from "./circuit-build-JZPuzV3I.js";
import { t as o } from "./electronics-store-DvvmGMOD.js";
var s = (e2) => /^(gnd|agnd|dgnd|0|0v|vss)$/i.test(e2), c = (e2) => /^(vcc|vdd|v\+)$/i.test(e2) || /^\+?\d+(\.\d+)?(v\d*|v)$/i.test(e2), l = /* @__PURE__ */ new Set([`gnd`, `vcc`, `vdd`]);
function u(e2, t2) {
  let n2 = new Map(e2.map((e3) => {
    var _a;
    return [e3.ref, (((_a = e3.properties) == null ? void 0 : _a.symbolId) ?? ``).toLowerCase()];
  })), r2 = [], i2 = [];
  for (let o2 of t2.nets) {
    let t3 = null, l2 = 5;
    for (let r3 of o2.connections) {
      let i3 = n2.get(r3.component_ref);
      if (i3 === `gnd` && (t3 = `gnd`), i3 === `vcc` || i3 === `vdd`) {
        t3 = `vcc`;
        let n3 = e2.find((e3) => e3.ref === r3.component_ref);
        l2 = a(n3 == null ? void 0 : n3.value, 5);
      }
      if (t3) break;
    }
    if (!t3) {
      if (s(o2.name)) t3 = `gnd`;
      else if (c(o2.name)) {
        t3 = `vcc`;
        let e3 = o2.name.match(/^\+?(\d+(\.\d+)?)v/i);
        e3 && (l2 = parseFloat(e3[1]));
      }
    }
    t3 === `gnd` ? r2.push(o2.name) : t3 === `vcc` && i2.push({ net: o2.name, volts: l2 });
  }
  return { groundNets: r2, supplies: i2, stubAsOpen: e2.filter((e3) => {
    var _a;
    return l.has((((_a = e3.properties) == null ? void 0 : _a.symbolId) ?? ``).toLowerCase());
  }).map((e3) => e3.ref) };
}
function d(e2, t2) {
  return JSON.stringify({ c: e2.map((e3) => {
    var _a;
    return [e3.ref, e3.value, (_a = e3.properties) == null ? void 0 : _a.symbolId];
  }), n: t2.nets.map((e3) => [e3.name, e3.connections.length]) });
}
function f(e2, t2, n2) {
  let r2 = Math.min(Math.max(Math.round(n2), 2), 500), i2 = [];
  for (let n3 = 0; n3 < r2; n3++) i2.push(e2 * (t2 / e2) ** (n3 / (r2 - 1)));
  return i2;
}
function p(e2) {
  let t2 = Object.entries(e2.deviceOfRef).filter(([e3]) => /^v/i.test(e3)).sort(([e3], [t3]) => e3.localeCompare(t3, void 0, { numeric: true }));
  if (t2.length > 0) return t2[0][1];
  let n2 = Object.values(e2.supplySourceOfNet);
  return n2.length > 0 ? n2[0] : null;
}
function m(e2) {
  return Object.entries(e2.nodeOfNet).filter(([, e3]) => e3 !== 0).map(([e3]) => e3).sort((e3, t2) => e3.localeCompare(t2, void 0, { numeric: true }));
}
async function h() {
  let n2 = o.getState(), a2 = e.getState().document.schematic, s2 = n2.netlist;
  if (!a2 || !s2) n2.setAnalysis({ status: `error`, error: `No schematic to analyze.` });
  else {
    n2.setAnalysis({ status: `running`, error: null });
    try {
      let e2 = u(a2.components, s2), c2 = await t(a2, e2);
      if (!c2) {
        n2.setAnalysis({ status: `error`, error: `Circuit analysis needs a newer kernel WASM build.` });
        return;
      }
      if (!c2.ok) {
        n2.setAnalysis({ status: `blocked`, blockers: c2.blockers ?? [], mapping: null, dc: null, ac: null, signature: d(a2.components, s2) });
        return;
      }
      let l2 = c2.devices ?? [];
      if (l2.length === 0) {
        n2.setAnalysis({ status: `error`, error: `Nothing to simulate yet \u2014 place some components.` });
        return;
      }
      let h2 = { devices: l2 }, g2 = await i(h2), _2 = m(c2), v2 = o.getState().analysis.outNet, y = v2 && _2.includes(v2) ? v2 : _2[_2.length - 1] ?? null, b = p(c2), x = o.getState().analysis.sweep, S = b == null ? null : await r(h2, b, f(x.startHz, x.stopHz, x.points).map((e3) => 2 * Math.PI * e3));
      n2.setAnalysis({ status: `ok`, error: null, blockers: [], mapping: c2, spec: h2, dc: g2, ac: S, outNet: y, sourceId: b, signature: d(a2.components, s2) });
    } catch (e2) {
      n2.setAnalysis({ status: `error`, error: e2 instanceof Error ? e2.message : String(e2) });
    }
  }
}
async function g(e2, t2) {
  var _a;
  let { mapping: r2, spec: i2, outNet: a2, sourceId: s2 } = o.getState().analysis;
  if (!r2 || !i2) throw Error(`Run an analysis first.`);
  let c2 = r2.deviceOfRef[e2];
  if (c2 === void 0) throw Error(`${e2} is not a simulated device.`);
  let l2 = a2 == null ? void 0 : r2.nodeOfNet[a2];
  if (l2 === void 0 || l2 === 0) throw Error(`Pick a non-ground output net first.`);
  let u2;
  if (t2.type === `cutoff`) {
    if (s2 == null) throw Error(`No driving source for a filter tune.`);
    u2 = { filter: { cutoffHz: t2.cutoffHz, qFactor: t2.qFactor, sourceId: s2, outNode: l2 }, freeDevices: [{ device: c2 }] };
  } else u2 = { dc: { node: l2, dcVoltage: t2.volts }, freeDevices: [{ device: c2 }] };
  let d2 = await n(i2, u2);
  if (!d2) throw Error(`Circuit tuning needs a newer kernel WASM build.`);
  let f2 = d2.tunedValues.find((e3) => e3.device === c2);
  if (f2 && isFinite(f2.after) && f2.after > 0) {
    let t3 = (_a = i2.devices[c2]) == null ? void 0 : _a.kind;
    await v(e2, f2.before, f2.after, t3);
  }
  return await h(), d2;
}
function _(e2, t2) {
  let n2 = t2 === `capacitor` ? `F` : t2 === `inductor` ? `H` : t2 === `vsource` ? `V` : ``;
  for (let [t3, r2] of [[1e9, `G`], [1e6, `M`], [1e3, `k`], [1, ``], [1e-3, `m`], [1e-6, `u`], [1e-9, `n`], [1e-12, `p`]]) if (Math.abs(e2) >= t3) {
    let i2 = e2 / t3, a2 = i2 >= 100 ? 0 : i2 >= 10 ? 1 : 2;
    return `${parseFloat(i2.toFixed(a2))}${r2}${n2}`;
  }
  return `${e2}${n2}`;
}
async function v(t2, n2, r2, i2) {
  var _a;
  let a2 = ((_a = e.getState().document.schematic) == null ? void 0 : _a.components.findIndex((e2) => e2.ref === t2)) ?? -1;
  if (a2 < 0) return;
  let o2 = (t3) => e.getState().updateSchematicComponent(a2, { value: _(t3, i2) }), s2 = Math.log(n2), c2 = Math.log(r2);
  for (let e2 = 1; e2 <= 12; e2++) {
    let t3 = e2 / 12, n3 = t3 * t3 * (3 - 2 * t3);
    o2(e2 === 12 ? r2 : Math.exp(s2 + (c2 - s2) * n3)), e2 < 12 && await new Promise((e3) => setTimeout(e3, 50));
  }
}
export {
  g as a,
  h as i,
  _ as n,
  m as r,
  d as t
};
