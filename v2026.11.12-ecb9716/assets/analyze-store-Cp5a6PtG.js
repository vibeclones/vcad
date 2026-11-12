var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { t as e } from "./react-Cf1qM0wN.js";
import "./dist-CBlCjY37.js";
import { I as t, J as n } from "./dist-_2fbu5WV.js";
var r = class {
  constructor() {
    __publicField(this, "worker", null);
    __publicField(this, "ready", null);
    __publicField(this, "nextId", 1);
    __publicField(this, "pending", /* @__PURE__ */ new Map());
  }
  ensureWorker() {
    if (this.ready) return this.ready;
    if (typeof Worker > `u`) return Promise.reject(Error(`Web Workers unavailable`));
    let e2 = new Worker(new URL(`/vcad/v2026.11.12-ecb9716/assets/analyze-worker-DZGE1vJD.js`, `` + import.meta.url), { type: `module` });
    return this.worker = e2, this.ready = new Promise((t2, n2) => {
      e2.addEventListener(`message`, (e3) => {
        let { type: r2, id: i2, message: a2, analysis: o2 } = e3.data;
        if (r2 === `ready`) {
          t2();
          return;
        }
        if (r2 === `error` && i2 === null) {
          n2(Error(a2)), this.worker = null, this.ready = null;
          return;
        }
        let s2 = this.pending.get(i2);
        s2 && (this.pending.delete(i2), r2 === `result` ? s2.resolve(o2) : s2.reject(Error(a2)));
      }), e2.postMessage({ type: `init` });
    }), this.ready;
  }
  request(e2, t2 = []) {
    return this.ensureWorker().then(() => new Promise((n2, r2) => {
      let i2 = this.nextId++;
      this.pending.set(i2, { resolve: n2, reject: r2 }), this.worker.postMessage({ ...e2, id: i2 }, t2);
    }));
  }
  runStructural(e2, t2, n2, r2) {
    let i2 = n2.slice(), a2 = r2.slice();
    return this.request({ type: `fea`, specJson: JSON.stringify(e2), optionsJson: JSON.stringify(t2 ?? {}), positions: i2, indices: a2 }, [i2.buffer, a2.buffer]);
  }
  runTolerance(e2, t2, n2) {
    return this.request({ type: `tolerance`, specJson: JSON.stringify(e2), paramsJson: JSON.stringify(t2 ?? {}), optionsJson: JSON.stringify(n2 ?? {}) });
  }
  dispose() {
    var _a;
    (_a = this.worker) == null ? void 0 : _a.terminate(), this.worker = null, this.ready = null;
    for (let e2 of this.pending.values()) e2.reject(Error(`Analyze worker disposed`));
    this.pending.clear();
  }
}, i = null;
function a() {
  return i || (i = new r()), i;
}
var o = 1e-6;
function s() {
  return n.getState().document.analysis_studies ?? [];
}
function c(e2) {
  n.getState().setAnalysisStudies(e2);
}
function l(e2) {
  let t2 = Math.min(1, Math.max(0, e2)), n2 = [[0, [0.05, 0.15, 0.9]], [0.25, [0, 0.75, 0.95]], [0.5, [0.1, 0.85, 0.3]], [0.75, [0.98, 0.85, 0.1]], [1, [0.95, 0.15, 0.1]]];
  for (let e3 = 1; e3 < n2.length; e3++) if (t2 <= n2[e3][0]) {
    let [r2, i2] = n2[e3 - 1], [a2, o2] = n2[e3], s2 = (t2 - r2) / (a2 - r2);
    return [i2[0] + s2 * (o2[0] - i2[0]), i2[1] + s2 * (o2[1] - i2[1]), i2[2] + s2 * (o2[2] - i2[2])];
  }
  return n2[n2.length - 1][1];
}
function u(e2) {
  let t2 = 1 / 0, n2 = -1 / 0;
  for (let r3 of e2) r3 < t2 && (t2 = r3), r3 > n2 && (n2 = r3);
  isFinite(t2) || (t2 = 0, n2 = 0);
  let r2 = n2 - t2 || 1, i2 = new Float32Array(e2.length * 3);
  for (let n3 = 0; n3 < e2.length; n3++) {
    let [a2, o2, s2] = l((e2[n3] - t2) / r2);
    i2[3 * n3] = a2, i2[3 * n3 + 1] = o2, i2[3 * n3 + 2] = s2;
  }
  return { colors: i2, min: t2, max: n2 };
}
function d(e2) {
  let t2 = [];
  for (let n2 of e2) {
    let e3 = n2.predicted;
    e3 && typeof e3.value == `number` && t2.push({ id: n2.id, value: e3.value, unit: e3.unit ?? `` });
  }
  return t2;
}
function f(e2, t2, n2) {
  if (n2) return { status: `unverifiable`, reasons: n2 };
  if (e2.length === 0) return { status: `unverifiable`, reasons: [`solver returned no claims \u2014 nothing to certify`] };
  if (e2.some((e3) => e3.verdict === `fail`)) return { status: `violated` };
  if (e2.some((e3) => e3.verdict === `unverifiable`)) return { status: `unverifiable`, reasons: e2.filter((e3) => e3.verdict === `unverifiable`).map((e3) => e3.description) };
  if (t2) {
    let n3 = new Map(d(e2).map((e3) => [e3.id, e3.value])), r2 = true;
    for (let e3 of t2.quantities) {
      let t3 = n3.get(e3.id);
      if (t3 === void 0) {
        r2 = false;
        break;
      }
      let i2 = Math.max(Math.abs(e3.value), 1e-30);
      if (Math.abs(t3 - e3.value) / i2 > o) {
        r2 = false;
        break;
      }
    }
    return { status: r2 ? `holds` : `stale` };
  }
  return { status: `provisional` };
}
function p(e2) {
  let t2 = m(e2);
  if (!t2) return null;
  let n2 = t2.positions, r2 = 1 / 0, i2 = 1 / 0, a2 = 1 / 0, o2 = -1 / 0, s2 = -1 / 0, c2 = -1 / 0;
  for (let e3 = 0; e3 < n2.length; e3 += 3) {
    let t3 = n2[e3], l2 = n2[e3 + 1], u2 = n2[e3 + 2];
    t3 < r2 && (r2 = t3), l2 < i2 && (i2 = l2), u2 < a2 && (a2 = u2), t3 > o2 && (o2 = t3), l2 > s2 && (s2 = l2), u2 > c2 && (c2 = u2);
  }
  return `${n2.length}:${t2.indices.length}:${r2.toFixed(4)},${i2.toFixed(4)},${a2.toFixed(4)}:${o2.toFixed(4)},${s2.toFixed(4)},${c2.toFixed(4)}`;
}
function m(e2) {
  var _a;
  let r2 = t.getState().scene, i2 = n.getState().parts;
  if (!r2) return null;
  let a2 = i2.findIndex((t2) => t2.id === e2), o2 = a2 >= 0 ? (_a = r2.parts[a2]) == null ? void 0 : _a.mesh : null;
  return !o2 || o2.positions.length === 0 ? null : { positions: o2.positions, indices: o2.indices };
}
var h = e((e2, t2) => ({ panelOpen: false, runs: {}, fieldOverlay: null, openPanel: () => e2({ panelOpen: true }), closePanel: () => e2({ panelOpen: false, fieldOverlay: null }), addStudy: (e3) => c([...s(), e3]), updateStudy: (e3) => c(s().map((t3) => t3.id === e3.id ? e3 : t3)), removeStudy: (t3) => {
  c(s().filter((e3) => e3.id !== t3)), e2((e3) => {
    var _a;
    let n2 = { ...e3.runs };
    return delete n2[t3], { runs: n2, fieldOverlay: ((_a = e3.fieldOverlay) == null ? void 0 : _a.studyId) === t3 ? null : e3.fieldOverlay };
  });
}, runStudy: async (n2) => {
  let r2 = s().find((e3) => e3.id === n2);
  if (!r2) return;
  let i2 = (t3) => e2((e3) => ({ runs: { ...e3.runs, [n2]: t3 } }));
  i2({ status: `running` });
  try {
    let e3 = a();
    if (r2.study.type === `structural`) {
      let n3 = r2.study, a2 = m(n3.partId);
      if (!a2) throw Error(`part mesh not found \u2014 the study's part may have been deleted`);
      let o2 = { resolution: n3.resolution, youngs_modulus_mpa: n3.youngsModulusMpa, poisson: n3.poisson, yield_strength_mpa: n3.yieldStrengthMpa ?? null, loads: n3.loads.map((e4) => ({ region: e4.region, force: e4.force })), supports: n3.supports.map((e4) => ({ region: e4.region, fix: e4.fix })) }, s2 = await e3.runStructural(o2, { fields: true }, a2.positions, a2.indices), c2 = s2.study.verdict.verdict === `Unverifiable` ? s2.study.verdict.reasons : null, l2 = s2.receipt_claims ?? [], { status: u2, reasons: h2 } = f(l2, r2.baseline, c2);
      i2({ status: `done`, fea: s2, claims: l2, claimStatus: u2, reasons: h2, meshKeyAtRun: p(n3.partId) }), u2 === `provisional` && !r2.baseline && t2().updateStudy({ ...r2, baseline: { recordedAtIso: (/* @__PURE__ */ new Date()).toISOString(), quantities: d(l2) } });
    } else {
      let n3 = r2.study, a2 = { name: r2.name, contributors: n3.contributors.map((e4) => ({ name: e4.name, coeff: e4.coeff, nominal: e4.nominal, tol_minus: e4.tolMinus, tol_plus: e4.tolPlus, dist: e4.dist === `uniform` ? { type: `uniform`, lo: -e4.tolMinus, hi: e4.tolPlus } : { type: `normal_from_tol`, convention: { type: `three_sigma` } } })), requirement: { name: n3.requirement.name, ...n3.requirement.lowerMm == null ? {} : { lower_mm: n3.requirement.lowerMm }, ...n3.requirement.upperMm == null ? {} : { upper_mm: n3.requirement.upperMm } } }, o2 = await e3.runTolerance(a2), s2 = o2.receipt_claims ?? [], { status: c2, reasons: l2 } = f(s2, r2.baseline, null);
      i2({ status: `done`, tolerance: o2, claims: s2, claimStatus: c2, reasons: l2 }), c2 === `provisional` && !r2.baseline && t2().updateStudy({ ...r2, baseline: { recordedAtIso: (/* @__PURE__ */ new Date()).toISOString(), quantities: d(s2) } });
    }
  } catch (e3) {
    i2({ status: `error`, error: String(e3 instanceof Error ? e3.message : e3), claimStatus: `error` });
  }
}, acceptBaseline: (n2) => {
  let r2 = s().find((e3) => e3.id === n2), i2 = t2().runs[n2];
  r2 && (i2 == null ? void 0 : i2.claims) && (t2().updateStudy({ ...r2, baseline: { recordedAtIso: (/* @__PURE__ */ new Date()).toISOString(), quantities: d(i2.claims) } }), e2((e3) => ({ runs: { ...e3.runs, [n2]: { ...i2, claimStatus: `provisional` } } })));
}, setField: (n2, r2) => {
  if (!r2) {
    e2({ fieldOverlay: null });
    return;
  }
  let i2 = s().find((e3) => e3.id === n2), a2 = t2().runs[n2];
  if (!i2 || i2.study.type !== `structural` || !(a2 == null ? void 0 : a2.fea)) return;
  let o2 = r2 === `displacement` ? a2.fea.vertex_displacement_mm : a2.fea.vertex_von_mises_mpa;
  if (!o2 || o2.length === 0) return;
  let { colors: c2, min: l2, max: d2 } = u(o2);
  e2({ fieldOverlay: { studyId: n2, partId: i2.study.partId, field: r2, colors: c2, min: l2, max: d2, unit: r2 === `displacement` ? `mm` : `MPa` } });
} }));
function g(e2, t2, n2 = 0.5) {
  return { min: [e2[0] - n2, e2[1] - n2, e2[2] - n2], max: [t2[0] + n2, t2[1] + n2, t2[2] + n2] };
}
export {
  p as n,
  h as r,
  g as t
};
