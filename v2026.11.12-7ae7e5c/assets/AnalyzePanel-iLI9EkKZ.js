import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { t as r } from "./X.es-eqQvie4c.js";
import { t as i } from "./Play.es-CbJ_KDSj.js";
import { t as a } from "./Spinner.es-LwlEcn2f.js";
import { t as o } from "./Trash.es-B0Vt7_Be.js";
import { t as s } from "./Plus.es-BDPop4l-.js";
import { I as c, J as l, Z as u } from "./dist-CKOzv-X0.js";
import { n as d, r as f, t as p } from "./analyze-store-CD5c_561.js";
import { t as m } from "./notification-store-BYW1uPuc.js";
import { n as h } from "./sub-feature-geometry-DGED74Qo.js";
var g = e(t(), 1), _ = n(), v = { provisional: { label: `Provisional`, cls: `bg-amber-500/15 text-amber-500` }, holds: { label: `Holds`, cls: `bg-green-500/15 text-green-500` }, stale: { label: `Stale`, cls: `bg-orange-500/15 text-orange-400` }, violated: { label: `Violated`, cls: `bg-red-500/15 text-red-500` }, unverifiable: { label: `Unverifiable`, cls: `bg-red-500/15 text-red-400` }, error: { label: `Error`, cls: `bg-red-500/15 text-red-500` } };
function y({ status: e2 }) {
  let t2 = v[e2];
  return (0, _.jsx)(`span`, { className: `px-1.5 py-0.5 text-[10px] font-medium rounded ${t2.cls}`, children: t2.label });
}
function b(e2) {
  let t2 = e2.find((e3) => e3.basis === `predicted`);
  return t2 ? `Predicted by ${t2.oracle.id}; a physical measurement of \u201C${t2.description}\u201D closes this claim.` : null;
}
function x({ run: e2 }) {
  var _a, _b;
  return e2.claimStatus ? (0, _.jsxs)(`div`, { className: `mt-2 rounded border border-border p-2 space-y-1`, children: [(0, _.jsxs)(`div`, { className: `flex items-center gap-2`, children: [(0, _.jsx)(`span`, { className: `text-[10px] uppercase tracking-wide text-text-muted`, children: `Receipt` }), (0, _.jsx)(y, { status: e2.claimStatus })] }), e2.error && (0, _.jsx)(`div`, { className: `text-[11px] text-red-400`, children: e2.error }), (_a = e2.reasons) == null ? void 0 : _a.map((e3, t2) => (0, _.jsx)(`div`, { className: `text-[11px] text-red-400`, children: e3 }, t2)), (_b = e2.claims) == null ? void 0 : _b.map((e3) => (0, _.jsxs)(`div`, { className: `text-[11px] text-text-muted flex items-start gap-1.5`, children: [(0, _.jsx)(`span`, { className: e3.verdict === `pass` ? `text-green-500` : e3.verdict === `fail` ? `text-red-500` : `text-amber-500`, children: e3.verdict === `pass` ? `\u2713` : e3.verdict === `fail` ? `\u2715` : `?` }), (0, _.jsxs)(`span`, { children: [e3.description, e3.predicted && typeof e3.predicted.value == `number` && (0, _.jsxs)(_.Fragment, { children: [` `, `\u2014 `, S(e3.predicted.value), e3.predicted.unit ? ` ${e3.predicted.unit}` : ``] })] })] }, e3.id)), e2.claims && b(e2.claims) && (0, _.jsx)(`div`, { className: `text-[10px] text-text-muted italic`, children: b(e2.claims) })] }) : null;
}
function S(e2) {
  if (e2 === 0) return `0`;
  let t2 = Math.abs(e2);
  return t2 >= 1e3 || t2 < 1e-3 ? e2.toExponential(3) : e2.toPrecision(4);
}
function C() {
  let e2 = u((e3) => e3.selection), t2 = c((e3) => e3.scene), n2 = l((e3) => e3.parts);
  return (0, g.useMemo)(() => {
    var _a;
    let r2 = e2.find((e3) => e3.kind === `face`);
    if (!r2 || r2.kind !== `face` || !t2) return { region: null, partId: null };
    let i2 = n2.findIndex((e3) => e3.id === r2.partId), a2 = i2 >= 0 ? (_a = t2.parts[i2]) == null ? void 0 : _a.mesh : null;
    if (!a2) return { region: null, partId: null };
    let o2 = h(a2, r2.faceIndex);
    if (o2.length === 0) return { region: null, partId: null };
    let s2 = [1 / 0, 1 / 0, 1 / 0], c2 = [-1 / 0, -1 / 0, -1 / 0];
    for (let e3 of o2) for (let t3 = 0; t3 < 3; t3++) {
      let n3 = a2.indices[3 * e3 + t3];
      for (let e4 = 0; e4 < 3; e4++) {
        let t4 = a2.positions[3 * n3 + e4];
        t4 < s2[e4] && (s2[e4] = t4), t4 > c2[e4] && (c2[e4] = t4);
      }
    }
    return { region: { min: s2, max: c2 }, partId: r2.partId };
  }, [e2, t2, n2]);
}
function w({ label: e2, value: t2, onChange: n2, step: r2 = 1 }) {
  return (0, _.jsxs)(`label`, { className: `flex items-center justify-between gap-2 text-[11px]`, children: [(0, _.jsx)(`span`, { className: `text-text-muted`, children: e2 }), (0, _.jsx)(`input`, { type: `number`, className: `w-24 bg-background border border-border rounded px-1.5 py-0.5 text-right`, value: t2, step: r2, onChange: (e3) => n2(Number(e3.target.value)) })] });
}
function T({ study: e2 }) {
  let t2 = f((e3) => e3.updateStudy), n2 = m((e3) => e3.addToast), { region: r2, partId: i2 } = C();
  if (e2.study.type !== `structural`) return null;
  let a2 = e2.study, c2 = (n3) => t2({ ...e2, study: { ...a2, ...n3 } });
  return (0, _.jsxs)(`div`, { className: `space-y-2`, children: [(0, _.jsx)(w, { label: `Resolution`, value: a2.resolution, onChange: (e3) => c2({ resolution: Math.max(4, Math.round(e3)) }) }), (0, _.jsx)(w, { label: `Young's modulus (MPa)`, value: a2.youngsModulusMpa, step: 1e3, onChange: (e3) => c2({ youngsModulusMpa: e3 }) }), (0, _.jsx)(w, { label: `Poisson`, value: a2.poisson, step: 0.01, onChange: (e3) => c2({ poisson: e3 }) }), (0, _.jsx)(w, { label: `Yield strength (MPa)`, value: a2.yieldStrengthMpa ?? 0, onChange: (e3) => c2({ yieldStrengthMpa: e3 > 0 ? e3 : void 0 }) }), (0, _.jsxs)(`div`, { className: `pt-1`, children: [(0, _.jsxs)(`div`, { className: `flex items-center justify-between`, children: [(0, _.jsx)(`span`, { className: `text-[11px] font-medium`, children: `Loads (N)` }), (0, _.jsxs)(`button`, { className: `flex items-center gap-1 text-[10px] text-brand hover:underline`, onClick: () => {
    if (!r2 || i2 !== a2.partId) {
      n2(`Select a face on the study's part first`, `error`);
      return;
    }
    let e3 = { region: p(r2.min, r2.max), force: [0, 0, -100] };
    c2({ loads: [...a2.loads, e3] });
  }, children: [(0, _.jsx)(s, { size: 10 }), ` from selected face`] })] }), a2.loads.length === 0 && (0, _.jsx)(`div`, { className: `text-[10px] text-text-muted`, children: `Pick a face in the viewport, then add it as a load region.` }), a2.loads.map((e3, t3) => (0, _.jsxs)(`div`, { className: `mt-1 flex items-center gap-1`, children: [[0, 1, 2].map((n3) => (0, _.jsx)(`input`, { type: `number`, className: `w-16 bg-background border border-border rounded px-1 py-0.5 text-[11px] text-right`, value: e3.force[n3], onChange: (e4) => {
    let r3 = a2.loads.map((r4, i3) => i3 === t3 ? { ...r4, force: r4.force.map((t4, r5) => r5 === n3 ? Number(e4.target.value) : t4) } : r4);
    c2({ loads: r3 });
  } }, n3)), (0, _.jsx)(`button`, { className: `text-text-muted hover:text-red-400`, onClick: () => c2({ loads: a2.loads.filter((e4, n3) => n3 !== t3) }), children: (0, _.jsx)(o, { size: 12 }) })] }, t3))] }), (0, _.jsxs)(`div`, { className: `pt-1`, children: [(0, _.jsxs)(`div`, { className: `flex items-center justify-between`, children: [(0, _.jsx)(`span`, { className: `text-[11px] font-medium`, children: `Supports (fixed)` }), (0, _.jsxs)(`button`, { className: `flex items-center gap-1 text-[10px] text-brand hover:underline`, onClick: () => {
    if (!r2 || i2 !== a2.partId) {
      n2(`Select a face on the study's part first`, `error`);
      return;
    }
    let e3 = { region: p(r2.min, r2.max), fix: [true, true, true] };
    c2({ supports: [...a2.supports, e3] });
  }, children: [(0, _.jsx)(s, { size: 10 }), ` from selected face`] })] }), a2.supports.map((e3, t3) => (0, _.jsxs)(`div`, { className: `mt-1 flex items-center gap-2 text-[11px]`, children: [(0, _.jsxs)(`span`, { className: `text-text-muted`, children: [`[`, e3.region.min.map((e4) => e4.toFixed(0)).join(`, `), `] \u2192`, ` `, `[`, e3.region.max.map((e4) => e4.toFixed(0)).join(`, `), `]`] }), (0, _.jsx)(`button`, { className: `ml-auto text-text-muted hover:text-red-400`, onClick: () => c2({ supports: a2.supports.filter((e4, n3) => n3 !== t3) }), children: (0, _.jsx)(o, { size: 12 }) })] }, t3))] })] });
}
function E({ study: e2, run: t2 }) {
  let n2 = f((e3) => e3.fieldOverlay), r2 = f((e3) => e3.setField);
  if (!t2.fea) return null;
  let i2 = t2.fea.study.levels[t2.fea.study.levels.length - 1];
  if (!i2) return null;
  let a2 = t2.fea.study.verdict.verdict === `Converged`, o2 = ({ field: t3, label: i3 }) => {
    let a3 = (n2 == null ? void 0 : n2.studyId) === e2.id && n2.field === t3;
    return (0, _.jsx)(`button`, { className: `px-1.5 py-0.5 text-[10px] rounded transition-colors ${a3 ? `bg-brand text-white` : `bg-brand/15 text-brand hover:bg-brand/25`}`, onClick: () => r2(e2.id, a3 ? null : t3), children: i3 });
  };
  return (0, _.jsxs)(`div`, { className: `mt-2 space-y-1 text-[11px]`, children: [(0, _.jsxs)(`div`, { className: `grid grid-cols-2 gap-x-2 gap-y-0.5`, children: [(0, _.jsx)(`span`, { className: `text-text-muted`, children: `Max displacement` }), (0, _.jsxs)(`span`, { className: `text-right`, children: [S(i2.max_displacement_mm), ` mm`] }), (0, _.jsx)(`span`, { className: `text-text-muted`, children: `Max von Mises` }), (0, _.jsxs)(`span`, { className: `text-right`, children: [S(i2.max_von_mises_mpa), ` MPa`] }), t2.fea.study.safety_factor != null && (0, _.jsxs)(_.Fragment, { children: [(0, _.jsx)(`span`, { className: `text-text-muted`, children: `Safety factor` }), (0, _.jsx)(`span`, { className: `text-right ${t2.fea.study.safety_factor < 1 ? `text-red-500` : ``}`, children: S(t2.fea.study.safety_factor) })] }), (0, _.jsx)(`span`, { className: `text-text-muted`, children: `Convergence` }), (0, _.jsx)(`span`, { className: `text-right ${a2 ? `text-green-500` : `text-red-400`}`, children: a2 ? `Converged` : `Unverifiable` })] }), (0, _.jsxs)(`div`, { className: `flex items-center gap-1.5 pt-1`, children: [(0, _.jsx)(`span`, { className: `text-[10px] text-text-muted`, children: `Color by:` }), (0, _.jsx)(o2, { field: `displacement`, label: `Displacement` }), (0, _.jsx)(o2, { field: `vonMises`, label: `von Mises` })] }), (n2 == null ? void 0 : n2.studyId) === e2.id && (0, _.jsxs)(`div`, { className: `flex items-center gap-1 text-[10px] text-text-muted`, children: [(0, _.jsx)(`span`, { children: S(n2.min) }), (0, _.jsx)(`div`, { className: `h-2 flex-1 rounded`, style: { background: `linear-gradient(to right, #0d26e6, #00bff2, #1ad94d, #fad91a, #f2261a)` } }), (0, _.jsxs)(`span`, { children: [S(n2.max), ` `, n2.unit] })] })] });
}
function D({ study: e2 }) {
  let t2 = f((e3) => e3.updateStudy);
  if (e2.study.type !== `tolerance`) return null;
  let n2 = e2.study, r2 = (r3) => t2({ ...e2, study: { ...n2, ...r3 } }), i2 = (e3, t3) => r2({ contributors: n2.contributors.map((n3, r3) => r3 === e3 ? t3 : n3) });
  return (0, _.jsxs)(`div`, { className: `space-y-2`, children: [(0, _.jsxs)(`div`, { className: `flex items-center justify-between`, children: [(0, _.jsx)(`span`, { className: `text-[11px] font-medium`, children: `Contributors (mm)` }), (0, _.jsxs)(`button`, { className: `flex items-center gap-1 text-[10px] text-brand hover:underline`, onClick: () => r2({ contributors: [...n2.contributors, { name: `dim ${n2.contributors.length + 1}`, coeff: 1, nominal: 10, tolMinus: 0.1, tolPlus: 0.1 }] }), children: [(0, _.jsx)(s, { size: 10 }), ` add`] })] }), n2.contributors.map((e3, t3) => (0, _.jsxs)(`div`, { className: `flex items-center gap-1 text-[11px]`, children: [(0, _.jsx)(`input`, { className: `w-20 bg-background border border-border rounded px-1 py-0.5`, value: e3.name, onChange: (n3) => i2(t3, { ...e3, name: n3.target.value }) }), [`coeff`, `nominal`, `tolMinus`, `tolPlus`].map((n3) => (0, _.jsx)(`input`, { type: `number`, title: n3, className: `w-14 bg-background border border-border rounded px-1 py-0.5 text-right`, value: e3[n3], onChange: (r3) => i2(t3, { ...e3, [n3]: Number(r3.target.value) }) }, n3)), (0, _.jsx)(`button`, { className: `text-text-muted hover:text-red-400`, onClick: () => r2({ contributors: n2.contributors.filter((e4, n3) => n3 !== t3) }), children: (0, _.jsx)(o, { size: 12 }) })] }, t3)), (0, _.jsx)(w, { label: `Requirement \u201C${n2.requirement.name}\u201D lower (mm)`, value: n2.requirement.lowerMm ?? 0, step: 0.01, onChange: (e3) => r2({ requirement: { ...n2.requirement, lowerMm: e3 } }) }), (0, _.jsx)(w, { label: `Requirement upper (mm)`, value: n2.requirement.upperMm ?? 0, step: 0.01, onChange: (e3) => r2({ requirement: { ...n2.requirement, upperMm: e3 } }) })] });
}
function O({ run: e2 }) {
  if (!e2.tolerance) return null;
  let t2 = [[`Worst case`, e2.tolerance.worst_case], [`RSS`, e2.tolerance.rss], [`Monte Carlo`, e2.tolerance.monte_carlo]];
  return (0, _.jsx)(`div`, { className: `mt-2 space-y-1 text-[11px]`, children: t2.map(([e3, t3]) => (0, _.jsxs)(`div`, { className: `flex justify-between gap-2`, children: [(0, _.jsx)(`span`, { className: `text-text-muted`, children: e3 }), (0, _.jsx)(`span`, { className: `text-right truncate`, children: k(t3) })] }, e3)) });
}
function k(e2) {
  if (!e2 || typeof e2 != `object`) return `\u2014`;
  let t2 = e2, n2 = (e3) => typeof t2[e3] == `number` ? t2[e3] : null, r2 = [], i2 = n2(`min_gap`), a2 = n2(`max_gap`);
  if (i2 != null && a2 != null) return r2.push(`${S(i2)} \u2026 ${S(a2)} mm`), typeof t2.passes == `boolean` && r2.push(t2.passes ? `passes` : `FAILS`), r2.join(`, `);
  let o2 = n2(`mean_gap`), s2 = n2(`sigma_gap`), c2 = n2(`yield_estimate`) ?? n2(`fit_probability`);
  return o2 != null && r2.push(`\u03BC ${S(o2)}${s2 == null ? `` : ` \u03C3 ${S(s2)}`} mm`), c2 != null && r2.push(`yield ${(c2 * 100).toFixed(2)}%`), r2.join(`, `) || `\u2014`;
}
function A({ study: e2 }) {
  let t2 = f((t3) => t3.runs[e2.id]) ?? { status: `idle` }, n2 = f((e3) => e3.runStudy), r2 = f((e3) => e3.removeStudy), s2 = f((e3) => e3.acceptBaseline), l2 = c((e3) => e3.scene), u2 = (0, g.useMemo)(() => e2.study.type === `structural` ? d(e2.study.partId) : null, [l2, e2]), p2 = t2.status === `done` && t2.meshKeyAtRun != null && t2.meshKeyAtRun !== u2, m2 = p2 && t2.claimStatus && t2.claimStatus !== `violated` ? { ...t2, claimStatus: `stale` } : t2;
  return (0, _.jsxs)(`div`, { className: `rounded border border-border p-2`, children: [(0, _.jsxs)(`div`, { className: `flex items-center gap-2`, children: [(0, _.jsx)(`span`, { className: `text-[12px] font-medium truncate`, children: e2.name }), (0, _.jsx)(`span`, { className: `text-[10px] text-text-muted uppercase`, children: e2.study.type }), (0, _.jsxs)(`div`, { className: `ml-auto flex items-center gap-1`, children: [(0, _.jsx)(`button`, { className: `p-1 rounded bg-brand/15 text-brand hover:bg-brand/25 disabled:opacity-50`, title: `Run study`, disabled: t2.status === `running`, onClick: () => void n2(e2.id), children: t2.status === `running` ? (0, _.jsx)(a, { size: 12, className: `animate-spin` }) : (0, _.jsx)(i, { size: 12 }) }), (0, _.jsx)(`button`, { className: `p-1 rounded text-text-muted hover:text-red-400`, title: `Delete study`, onClick: () => r2(e2.id), children: (0, _.jsx)(o, { size: 12 }) })] })] }), e2.study.type === `structural` ? (0, _.jsx)(T, { study: e2 }) : (0, _.jsx)(D, { study: e2 }), t2.status === `done` && (e2.study.type === `structural` ? (0, _.jsx)(E, { study: e2, run: t2 }) : (0, _.jsx)(O, { run: t2 })), (t2.status === `done` || t2.status === `error`) && (0, _.jsx)(x, { run: m2 }), m2.claimStatus === `stale` && t2.status === `done` && (0, _.jsx)(`button`, { className: `mt-1 text-[10px] text-brand hover:underline`, onClick: () => p2 ? void n2(e2.id) : s2(e2.id), children: p2 ? `Re-run against current geometry` : `Accept as new baseline` })] });
}
var j = 1;
function M() {
  let e2 = f((e3) => e3.closePanel), t2 = f((e3) => e3.addStudy), n2 = l((e3) => e3.document.analysis_studies) ?? [], i2 = u((e3) => e3.selection), a2 = l((e3) => e3.parts), o2 = m((e3) => e3.addToast), [c2, d2] = (0, g.useState)(false);
  return (0, _.jsxs)(`div`, { className: `fixed right-0 top-0 bottom-0 w-80 bg-surface border-l border-border z-50 flex flex-col`, children: [(0, _.jsxs)(`div`, { className: `flex items-center justify-between p-3 border-b border-border`, children: [(0, _.jsx)(`h2`, { className: `font-medium`, children: `Analyze` }), (0, _.jsx)(`button`, { className: `p-1 hover:bg-hover rounded text-text-muted`, onClick: e2, title: `Close`, children: (0, _.jsx)(r, { size: 16 }) })] }), (0, _.jsxs)(`div`, { className: `flex-1 overflow-y-auto p-3 space-y-2`, children: [n2.length === 0 && (0, _.jsx)(`div`, { className: `text-[11px] text-text-muted`, children: `No studies yet. A study persists on the document and re-verifies when the geometry changes.` }), n2.map((e3) => (0, _.jsx)(A, { study: e3 }, e3.id)), c2 ? (0, _.jsxs)(`div`, { className: `flex gap-2`, children: [(0, _.jsx)(`button`, { className: `flex-1 px-2 py-1.5 text-[11px] rounded bg-brand/15 text-brand hover:bg-brand/25`, onClick: () => {
    var _a;
    let e3 = i2.find((e4) => e4.kind === `part` || e4.kind === `face`), r2 = (e3 == null ? void 0 : e3.kind) === `face` ? e3.partId : (e3 == null ? void 0 : e3.kind) === `part` ? e3.id : (_a = a2[0]) == null ? void 0 : _a.id;
    r2 ? (t2({ id: `study-${Date.now()}-${j++}`, name: `Structural ${n2.length + 1}`, study: { type: `structural`, partId: r2, resolution: 24, youngsModulusMpa: 69e3, poisson: 0.33, yieldStrengthMpa: 276, loads: [], supports: [] } }), d2(false)) : o2(`Select a part first`, `error`);
  }, children: `Structural FEA` }), (0, _.jsx)(`button`, { className: `flex-1 px-2 py-1.5 text-[11px] rounded bg-brand/15 text-brand hover:bg-brand/25`, onClick: () => {
    t2({ id: `study-${Date.now()}-${j++}`, name: `Stackup ${n2.length + 1}`, study: { type: `tolerance`, contributors: [{ name: `dim 1`, coeff: 1, nominal: 10, tolMinus: 0.1, tolPlus: 0.1 }], requirement: { name: `gap`, lowerMm: 0 } } }), d2(false);
  }, children: `Tolerance stackup` })] }) : (0, _.jsxs)(`button`, { className: `w-full flex items-center justify-center gap-1 px-2 py-1.5 text-[11px] rounded border border-dashed border-border text-text-muted hover:text-text hover:border-text-muted`, onClick: () => d2(true), children: [(0, _.jsx)(s, { size: 12 }), ` New study`] })] })] });
}
export {
  M as AnalyzePanel
};
