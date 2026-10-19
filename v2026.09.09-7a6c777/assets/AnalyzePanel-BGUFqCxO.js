import { b as N, k as e } from "./three-fiber-GW7QWJN8.js";
import { bY as f, b4 as v, bc as k, bm as w, bg as R, bZ as g, b5 as $, b_ as P, by as F, bA as j, b$ as S } from "./index-BiF9MVSB.js";
import { p as T } from "./Spinner.es-BoWTApn4.js";
import { f as A } from "./sub-feature-geometry-tgU-o6Qd.js";
import "./three-tnxpQXqG.js";
import "./three-drei-BkUUjjN5.js";
const q = { provisional: { label: "Provisional", cls: "bg-amber-500/15 text-amber-500" }, holds: { label: "Holds", cls: "bg-green-500/15 text-green-500" }, stale: { label: "Stale", cls: "bg-orange-500/15 text-orange-400" }, violated: { label: "Violated", cls: "bg-red-500/15 text-red-500" }, unverifiable: { label: "Unverifiable", cls: "bg-red-500/15 text-red-400" }, error: { label: "Error", cls: "bg-red-500/15 text-red-500" } };
function E({ status: s }) {
  const t = q[s];
  return e.jsx("span", { className: `px-1.5 py-0.5 text-[10px] font-medium rounded ${t.cls}`, children: t.label });
}
function C(s) {
  const t = s.find((n) => n.basis === "predicted");
  return t ? `Predicted by ${t.oracle.id}; a physical measurement of \u201C${t.description}\u201D closes this claim.` : null;
}
function D({ run: s }) {
  var _a, _b;
  return s.claimStatus ? e.jsxs("div", { className: "mt-2 rounded border border-border p-2 space-y-1", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-[10px] uppercase tracking-wide text-text-muted", children: "Receipt" }), e.jsx(E, { status: s.claimStatus })] }), s.error && e.jsx("div", { className: "text-[11px] text-red-400", children: s.error }), (_a = s.reasons) == null ? void 0 : _a.map((t, n) => e.jsx("div", { className: "text-[11px] text-red-400", children: t }, n)), (_b = s.claims) == null ? void 0 : _b.map((t) => e.jsxs("div", { className: "text-[11px] text-text-muted flex items-start gap-1.5", children: [e.jsx("span", { className: t.verdict === "pass" ? "text-green-500" : t.verdict === "fail" ? "text-red-500" : "text-amber-500", children: t.verdict === "pass" ? "\u2713" : t.verdict === "fail" ? "\u2715" : "?" }), e.jsxs("span", { children: [t.description, t.predicted && typeof t.predicted.value == "number" && e.jsxs(e.Fragment, { children: [" ", "\u2014 ", p(t.predicted.value), t.predicted.unit ? ` ${t.predicted.unit}` : ""] })] })] }, t.id)), s.claims && C(s.claims) && e.jsx("div", { className: "text-[10px] text-text-muted italic", children: C(s.claims) })] }) : null;
}
function p(s) {
  if (s === 0) return "0";
  const t = Math.abs(s);
  return t >= 1e3 || t < 1e-3 ? s.toExponential(3) : s.toPrecision(4);
}
function B() {
  const s = k((i) => i.selection), t = $((i) => i.scene), n = v((i) => i.parts);
  return N.useMemo(() => {
    var _a;
    const i = s.find((a) => a.kind === "face");
    if (!i || i.kind !== "face" || !t) return { region: null, partId: null };
    const c = n.findIndex((a) => a.id === i.partId), r = c >= 0 ? (_a = t.parts[c]) == null ? void 0 : _a.mesh : null;
    if (!r) return { region: null, partId: null };
    const d = A(r, i.faceIndex);
    if (d.length === 0) return { region: null, partId: null };
    const l = [1 / 0, 1 / 0, 1 / 0], u = [-1 / 0, -1 / 0, -1 / 0];
    for (const a of d) for (let o = 0; o < 3; o++) {
      const m = r.indices[3 * a + o];
      for (let x = 0; x < 3; x++) {
        const b = r.positions[3 * m + x];
        b < l[x] && (l[x] = b), b > u[x] && (u[x] = b);
      }
    }
    return { region: { min: l, max: u }, partId: i.partId };
  }, [s, t, n]);
}
function h({ label: s, value: t, onChange: n, step: i = 1 }) {
  return e.jsxs("label", { className: "flex items-center justify-between gap-2 text-[11px]", children: [e.jsx("span", { className: "text-text-muted", children: s }), e.jsx("input", { type: "number", className: "w-24 bg-background border border-border rounded px-1.5 py-0.5 text-right", value: t, step: i, onChange: (c) => n(Number(c.target.value)) })] });
}
function K({ study: s }) {
  const t = f((a) => a.updateStudy), n = w((a) => a.addToast), { region: i, partId: c } = B();
  if (s.study.type !== "structural") return null;
  const r = s.study, d = (a) => t({ ...s, study: { ...r, ...a } }), l = () => {
    if (!i || c !== r.partId) {
      n("Select a face on the study's part first", "error");
      return;
    }
    const a = { region: S(i.min, i.max), force: [0, 0, -100] };
    d({ loads: [...r.loads, a] });
  }, u = () => {
    if (!i || c !== r.partId) {
      n("Select a face on the study's part first", "error");
      return;
    }
    const a = { region: S(i.min, i.max), fix: [true, true, true] };
    d({ supports: [...r.supports, a] });
  };
  return e.jsxs("div", { className: "space-y-2", children: [e.jsx(h, { label: "Resolution", value: r.resolution, onChange: (a) => d({ resolution: Math.max(4, Math.round(a)) }) }), e.jsx(h, { label: "Young's modulus (MPa)", value: r.youngsModulusMpa, step: 1e3, onChange: (a) => d({ youngsModulusMpa: a }) }), e.jsx(h, { label: "Poisson", value: r.poisson, step: 0.01, onChange: (a) => d({ poisson: a }) }), e.jsx(h, { label: "Yield strength (MPa)", value: r.yieldStrengthMpa ?? 0, onChange: (a) => d({ yieldStrengthMpa: a > 0 ? a : void 0 }) }), e.jsxs("div", { className: "pt-1", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-[11px] font-medium", children: "Loads (N)" }), e.jsxs("button", { className: "flex items-center gap-1 text-[10px] text-brand hover:underline", onClick: l, children: [e.jsx(g, { size: 10 }), " from selected face"] })] }), r.loads.length === 0 && e.jsx("div", { className: "text-[10px] text-text-muted", children: "Pick a face in the viewport, then add it as a load region." }), r.loads.map((a, o) => e.jsxs("div", { className: "mt-1 flex items-center gap-1", children: [[0, 1, 2].map((m) => e.jsx("input", { type: "number", className: "w-16 bg-background border border-border rounded px-1 py-0.5 text-[11px] text-right", value: a.force[m], onChange: (x) => {
    const b = r.loads.map((y, I) => I === o ? { ...y, force: y.force.map((_, z) => z === m ? Number(x.target.value) : _) } : y);
    d({ loads: b });
  } }, m)), e.jsx("button", { className: "text-text-muted hover:text-red-400", onClick: () => d({ loads: r.loads.filter((m, x) => x !== o) }), children: e.jsx(j, { size: 12 }) })] }, o))] }), e.jsxs("div", { className: "pt-1", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-[11px] font-medium", children: "Supports (fixed)" }), e.jsxs("button", { className: "flex items-center gap-1 text-[10px] text-brand hover:underline", onClick: u, children: [e.jsx(g, { size: 10 }), " from selected face"] })] }), r.supports.map((a, o) => e.jsxs("div", { className: "mt-1 flex items-center gap-2 text-[11px]", children: [e.jsxs("span", { className: "text-text-muted", children: ["[", a.region.min.map((m) => m.toFixed(0)).join(", "), "] \u2192", " ", "[", a.region.max.map((m) => m.toFixed(0)).join(", "), "]"] }), e.jsx("button", { className: "ml-auto text-text-muted hover:text-red-400", onClick: () => d({ supports: r.supports.filter((m, x) => x !== o) }), children: e.jsx(j, { size: 12 }) })] }, o))] })] });
}
function L({ study: s, run: t }) {
  const n = f((l) => l.fieldOverlay), i = f((l) => l.setField);
  if (!t.fea) return null;
  const c = t.fea.study.levels[t.fea.study.levels.length - 1];
  if (!c) return null;
  const r = t.fea.study.verdict.verdict === "Converged", d = ({ field: l, label: u }) => {
    const a = (n == null ? void 0 : n.studyId) === s.id && n.field === l;
    return e.jsx("button", { className: `px-1.5 py-0.5 text-[10px] rounded transition-colors ${a ? "bg-brand text-white" : "bg-brand/15 text-brand hover:bg-brand/25"}`, onClick: () => i(s.id, a ? null : l), children: u });
  };
  return e.jsxs("div", { className: "mt-2 space-y-1 text-[11px]", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-x-2 gap-y-0.5", children: [e.jsx("span", { className: "text-text-muted", children: "Max displacement" }), e.jsxs("span", { className: "text-right", children: [p(c.max_displacement_mm), " mm"] }), e.jsx("span", { className: "text-text-muted", children: "Max von Mises" }), e.jsxs("span", { className: "text-right", children: [p(c.max_von_mises_mpa), " MPa"] }), t.fea.study.safety_factor != null && e.jsxs(e.Fragment, { children: [e.jsx("span", { className: "text-text-muted", children: "Safety factor" }), e.jsx("span", { className: `text-right ${t.fea.study.safety_factor < 1 ? "text-red-500" : ""}`, children: p(t.fea.study.safety_factor) })] }), e.jsx("span", { className: "text-text-muted", children: "Convergence" }), e.jsx("span", { className: `text-right ${r ? "text-green-500" : "text-red-400"}`, children: r ? "Converged" : "Unverifiable" })] }), e.jsxs("div", { className: "flex items-center gap-1.5 pt-1", children: [e.jsx("span", { className: "text-[10px] text-text-muted", children: "Color by:" }), e.jsx(d, { field: "displacement", label: "Displacement" }), e.jsx(d, { field: "vonMises", label: "von Mises" })] }), (n == null ? void 0 : n.studyId) === s.id && e.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-text-muted", children: [e.jsx("span", { children: p(n.min) }), e.jsx("div", { className: "h-2 flex-1 rounded", style: { background: "linear-gradient(to right, #0d26e6, #00bff2, #1ad94d, #fad91a, #f2261a)" } }), e.jsxs("span", { children: [p(n.max), " ", n.unit] })] })] });
}
function U({ study: s }) {
  const t = f((r) => r.updateStudy);
  if (s.study.type !== "tolerance") return null;
  const n = s.study, i = (r) => t({ ...s, study: { ...n, ...r } }), c = (r, d) => i({ contributors: n.contributors.map((l, u) => u === r ? d : l) });
  return e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-[11px] font-medium", children: "Contributors (mm)" }), e.jsxs("button", { className: "flex items-center gap-1 text-[10px] text-brand hover:underline", onClick: () => i({ contributors: [...n.contributors, { name: `dim ${n.contributors.length + 1}`, coeff: 1, nominal: 10, tolMinus: 0.1, tolPlus: 0.1 }] }), children: [e.jsx(g, { size: 10 }), " add"] })] }), n.contributors.map((r, d) => e.jsxs("div", { className: "flex items-center gap-1 text-[11px]", children: [e.jsx("input", { className: "w-20 bg-background border border-border rounded px-1 py-0.5", value: r.name, onChange: (l) => c(d, { ...r, name: l.target.value }) }), ["coeff", "nominal", "tolMinus", "tolPlus"].map((l) => e.jsx("input", { type: "number", title: l, className: "w-14 bg-background border border-border rounded px-1 py-0.5 text-right", value: r[l], onChange: (u) => c(d, { ...r, [l]: Number(u.target.value) }) }, l)), e.jsx("button", { className: "text-text-muted hover:text-red-400", onClick: () => i({ contributors: n.contributors.filter((l, u) => u !== d) }), children: e.jsx(j, { size: 12 }) })] }, d)), e.jsx(h, { label: `Requirement \u201C${n.requirement.name}\u201D lower (mm)`, value: n.requirement.lowerMm ?? 0, step: 0.01, onChange: (r) => i({ requirement: { ...n.requirement, lowerMm: r } }) }), e.jsx(h, { label: "Requirement upper (mm)", value: n.requirement.upperMm ?? 0, step: 0.01, onChange: (r) => i({ requirement: { ...n.requirement, upperMm: r } }) })] });
}
function Y({ run: s }) {
  if (!s.tolerance) return null;
  const t = [["Worst case", s.tolerance.worst_case], ["RSS", s.tolerance.rss], ["Monte Carlo", s.tolerance.monte_carlo]];
  return e.jsx("div", { className: "mt-2 space-y-1 text-[11px]", children: t.map(([n, i]) => e.jsxs("div", { className: "flex justify-between gap-2", children: [e.jsx("span", { className: "text-text-muted", children: n }), e.jsx("span", { className: "text-right truncate", children: O(i) })] }, n)) });
}
function O(s) {
  if (!s || typeof s != "object") return "\u2014";
  const t = s, n = (a) => typeof t[a] == "number" ? t[a] : null, i = [], c = n("min_gap"), r = n("max_gap");
  if (c != null && r != null) return i.push(`${p(c)} \u2026 ${p(r)} mm`), typeof t.passes == "boolean" && i.push(t.passes ? "passes" : "FAILS"), i.join(", ");
  const d = n("mean_gap"), l = n("sigma_gap"), u = n("yield_estimate") ?? n("fit_probability");
  return d != null && i.push(`\u03BC ${p(d)}${l != null ? ` \u03C3 ${p(l)}` : ""} mm`), u != null && i.push(`yield ${(u * 100).toFixed(2)}%`), i.join(", ") || "\u2014";
}
function W({ study: s }) {
  const t = f((a) => a.runs[s.id]) ?? { status: "idle" }, n = f((a) => a.runStudy), i = f((a) => a.removeStudy), c = f((a) => a.acceptBaseline), r = $((a) => a.scene), d = N.useMemo(() => s.study.type === "structural" ? P(s.study.partId) : null, [r, s]), l = t.status === "done" && t.meshKeyAtRun != null && t.meshKeyAtRun !== d, u = l && t.claimStatus && t.claimStatus !== "violated" ? { ...t, claimStatus: "stale" } : t;
  return e.jsxs("div", { className: "rounded border border-border p-2", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-[12px] font-medium truncate", children: s.name }), e.jsx("span", { className: "text-[10px] text-text-muted uppercase", children: s.study.type }), e.jsxs("div", { className: "ml-auto flex items-center gap-1", children: [e.jsx("button", { className: "p-1 rounded bg-brand/15 text-brand hover:bg-brand/25 disabled:opacity-50", title: "Run study", disabled: t.status === "running", onClick: () => void n(s.id), children: t.status === "running" ? e.jsx(T, { size: 12, className: "animate-spin" }) : e.jsx(F, { size: 12 }) }), e.jsx("button", { className: "p-1 rounded text-text-muted hover:text-red-400", title: "Delete study", onClick: () => i(s.id), children: e.jsx(j, { size: 12 }) })] })] }), s.study.type === "structural" ? e.jsx(K, { study: s }) : e.jsx(U, { study: s }), t.status === "done" && (s.study.type === "structural" ? e.jsx(L, { study: s, run: t }) : e.jsx(Y, { run: t })), (t.status === "done" || t.status === "error") && e.jsx(D, { run: u }), u.claimStatus === "stale" && t.status === "done" && e.jsx("button", { className: "mt-1 text-[10px] text-brand hover:underline", onClick: () => l ? void n(s.id) : c(s.id), children: l ? "Re-run against current geometry" : "Accept as new baseline" })] });
}
let M = 1;
function X() {
  const s = f((o) => o.closePanel), t = f((o) => o.addStudy), n = v((o) => o.document.analysis_studies) ?? [], i = k((o) => o.selection), c = v((o) => o.parts), r = w((o) => o.addToast), [d, l] = N.useState(false), u = () => {
    var _a;
    const o = i.find((x) => x.kind === "part" || x.kind === "face"), m = (o == null ? void 0 : o.kind) === "face" ? o.partId : (o == null ? void 0 : o.kind) === "part" ? o.id : (_a = c[0]) == null ? void 0 : _a.id;
    if (!m) {
      r("Select a part first", "error");
      return;
    }
    t({ id: `study-${Date.now()}-${M++}`, name: `Structural ${n.length + 1}`, study: { type: "structural", partId: m, resolution: 24, youngsModulusMpa: 69e3, poisson: 0.33, yieldStrengthMpa: 276, loads: [], supports: [] } }), l(false);
  }, a = () => {
    t({ id: `study-${Date.now()}-${M++}`, name: `Stackup ${n.length + 1}`, study: { type: "tolerance", contributors: [{ name: "dim 1", coeff: 1, nominal: 10, tolMinus: 0.1, tolPlus: 0.1 }], requirement: { name: "gap", lowerMm: 0 } } }), l(false);
  };
  return e.jsxs("div", { className: "fixed right-0 top-0 bottom-0 w-80 bg-surface border-l border-border z-50 flex flex-col", children: [e.jsxs("div", { className: "flex items-center justify-between p-3 border-b border-border", children: [e.jsx("h2", { className: "font-medium", children: "Analyze" }), e.jsx("button", { className: "p-1 hover:bg-hover rounded text-text-muted", onClick: s, title: "Close", children: e.jsx(R, { size: 16 }) })] }), e.jsxs("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: [n.length === 0 && e.jsx("div", { className: "text-[11px] text-text-muted", children: "No studies yet. A study persists on the document and re-verifies when the geometry changes." }), n.map((o) => e.jsx(W, { study: o }, o.id)), d ? e.jsxs("div", { className: "flex gap-2", children: [e.jsx("button", { className: "flex-1 px-2 py-1.5 text-[11px] rounded bg-brand/15 text-brand hover:bg-brand/25", onClick: u, children: "Structural FEA" }), e.jsx("button", { className: "flex-1 px-2 py-1.5 text-[11px] rounded bg-brand/15 text-brand hover:bg-brand/25", onClick: a, children: "Tolerance stackup" })] }) : e.jsxs("button", { className: "w-full flex items-center justify-center gap-1 px-2 py-1.5 text-[11px] rounded border border-dashed border-border text-text-muted hover:text-text hover:border-text-muted", onClick: () => l(true), children: [e.jsx(g, { size: 12 }), " New study"] })] })] });
}
export {
  X as AnalyzePanel
};
