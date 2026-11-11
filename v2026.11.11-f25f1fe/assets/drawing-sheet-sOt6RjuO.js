import { I as e, J as t } from "./dist-DCVtPzLm.js";
import { t as n } from "./drawing-store-CPLN4kMr.js";
import { t as r } from "./download-D9QwX44N.js";
var i = (e2, t2) => [e2[1] * t2[2] - e2[2] * t2[1], e2[2] * t2[0] - e2[0] * t2[2], e2[0] * t2[1] - e2[1] * t2[0]], a = (e2, t2) => [e2[0] * t2, e2[1] * t2, e2[2] * t2], o = (e2) => {
  let t2 = Math.hypot(e2[0], e2[1], e2[2]);
  return t2 > 1e-12 ? a(e2, 1 / t2) : e2;
};
function s(e2) {
  let t2 = { front: { forward: [0, 1, 0], worldUp: [0, 0, 1] }, back: { forward: [0, -1, 0], worldUp: [0, 0, 1] }, top: { forward: [0, 0, -1], worldUp: [0, 1, 0] }, bottom: { forward: [0, 0, 1], worldUp: [0, -1, 0] }, right: { forward: [1, 0, 0], worldUp: [0, 0, 1] }, left: { forward: [-1, 0, 0], worldUp: [0, 0, 1] } }[e2];
  if (!t2) return null;
  let n2 = o(i(t2.worldUp, t2.forward));
  return { right: n2, up: o(i(t2.forward, n2)), forward: t2.forward };
}
function c(e2, t2) {
  let n2 = s(e2);
  if (!n2 || t2.length < 2) return null;
  let r2 = [], i2 = null;
  for (let e3 = 0; e3 < t2.length - 1; e3++) {
    let [n3, a2] = t2[e3], [o2, s2] = t2[e3 + 1];
    if (Math.abs(s2 - a2) <= Math.abs(o2 - n3)) continue;
    let c2 = (n3 + o2) / 2;
    i2 === null && (i2 = c2), r2.push({ u_start: Math.min(a2, s2), u_end: Math.max(a2, s2), offset: c2 - i2 });
  }
  return i2 === null ? null : { base: { origin: a(n2.right, i2), normal: n2.right, up: n2.forward }, steps: r2.every((e3) => e3.offset === 0) ? [] : r2 };
}
function l() {
  var _a;
  let t2 = e.getState().scene;
  if (!((_a = t2 == null ? void 0 : t2.parts) == null ? void 0 : _a.length)) return null;
  let n2 = 0, r2 = 0;
  for (let e2 of t2.parts) n2 += e2.mesh.positions.length, r2 += e2.mesh.indices.length;
  let i2 = new Float32Array(n2), a2 = new Uint32Array(r2), o2 = 0, s2 = 0;
  for (let e2 of t2.parts) {
    i2.set(e2.mesh.positions, o2);
    let t3 = o2 / 3;
    for (let n3 = 0; n3 < e2.mesh.indices.length; n3++) a2[s2 + n3] = e2.mesh.indices[n3] + t3;
    o2 += e2.mesh.positions.length, s2 += e2.mesh.indices.length;
  }
  return { positions: i2, indices: a2 };
}
function u(t2) {
  let n2 = e.getState().engine;
  if (!n2) return null;
  let r2 = l();
  if (!r2) return null;
  let i2 = c(t2.view, t2.points);
  return i2 ? n2.offsetSectionMesh(r2, i2, { spacing: 3, angle: Math.PI / 4 }) : null;
}
function d(e2, t2) {
  return { part_name: e2.partName || `UNTITLED`, material: e2.material || ``, finish: ``, scale: e2.scale || t2, drawn_by: e2.author || ``, date: e2.date || ``, revision: e2.revision || `A`, units: `MM`, tolerance_note: `\xB10.1 UNLESS NOTED` };
}
function f() {
  let e2 = t.getState(), n2 = e2.document.part_materials ?? {};
  return e2.parts.map((e3, t2) => ({ item: t2 + 1, name: e3.name || e3.id, qty: 1, material: n2[e3.name] ?? n2[e3.id] ?? `` }));
}
function p(e2, t2, n2, r2) {
  let i2 = (e3) => ({ x: n2[0] + (e3.x - t2[0]) * r2, y: n2[1] + (e3.y - t2[1]) * r2 });
  return { lines: e2.lines.map(([e3, t3]) => [i2(e3), i2(t3)]), arcs: e2.arcs.map((e3) => ({ ...e3, center: i2(e3.center), radius: e3.radius * r2 })), arrows: e2.arrows.map((e3) => ({ ...e3, tip: i2(e3.tip) })), texts: e2.texts.map((e3) => ({ ...e3, position: i2(e3.position) })), is_basic: e2.is_basic };
}
function m(e2) {
  let t2 = e2.points, n2 = [];
  for (let e3 = 0; e3 < t2.length - 1; e3++) n2.push([{ x: t2[e3][0], y: t2[e3][1] }, { x: t2[e3 + 1][0], y: t2[e3 + 1][1] }]);
  let r2 = (t3) => ({ position: { x: t3[0], y: t3[1] }, text: e2.label, height: 4, rotation: 0, alignment: `MiddleCenter` });
  return { lines: n2, arcs: [], arrows: [], texts: t2.length ? [r2(t2[0]), r2(t2[t2.length - 1])] : [], is_basic: false };
}
function h(e2) {
  let t2 = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01], n2 = t2.find((t3) => t3 <= e2) ?? t2[t2.length - 1];
  return { value: n2, note: n2 >= 1 ? `${n2}:1` : `1:${Math.round(1 / n2)}` };
}
function g() {
  var _a;
  let r2 = e.getState().engine, i2 = e.getState().scene;
  if (!r2 || !((_a = i2 == null ? void 0 : i2.parts) == null ? void 0 : _a.length)) return null;
  let { viewDirection: a2 } = n.getState(), o2 = t.getState().document.drawing, s2 = l();
  if (!s2) return null;
  let c2 = r2.projectMesh(s2, a2);
  if (!c2) return null;
  let g2 = ((o2 == null ? void 0 : o2.sections) ?? []).filter((e2) => e2.view === a2), _2 = (o2 == null ? void 0 : o2.showBom) ?? false, v = g2.length > 0, y = v ? 140 : 200, b = v ? [85, 120] : [120, 120], x = c2.bounds.max_x - c2.bounds.min_x || 1, S = c2.bounds.max_y - c2.bounds.min_y || 1, { value: C, note: w } = h(Math.min(y / x, 130 / S)), T = [(c2.bounds.min_x + c2.bounds.max_x) / 2, (c2.bounds.min_y + c2.bounds.max_y) / 2], E = { size: `a4`, views: [{ view: c2, center: b, scale: C, label: `${a2.toUpperCase()} VIEW  (${w})` }], sections: [], annotations: [] }, D = r2.WasmAnnotationLayer;
  try {
    let e2 = new D();
    e2.addHorizontalDimension(c2.bounds.min_x, c2.bounds.min_y, c2.bounds.max_x, c2.bounds.min_y, -10 / C), e2.addVerticalDimension(c2.bounds.max_x, c2.bounds.min_y, c2.bounds.max_x, c2.bounds.max_y, 10 / C);
    let t2 = e2.renderAll();
    e2.free();
    for (let e3 of t2) E.annotations.push(p(e3, T, b, C));
  } catch {
  }
  let O = 160;
  for (let e2 of g2) {
    let t2 = u(e2);
    t2 && (E.sections.push({ view: t2, center: [225, O], scale: C, label: `SECTION ${e2.label}-${e2.label}  (${w})` }), O -= 65, E.annotations.push(p(m(e2), T, b, C)));
  }
  if ((o2 == null ? void 0 : o2.titleBlock) && (E.title_block = d(o2.titleBlock, w)), _2) {
    let e2 = f();
    e2.length > 0 && (E.bom = e2);
  }
  return E;
}
function _() {
  let t2 = e.getState().engine;
  if (!t2) return `Engine not ready`;
  let i2 = g();
  if (!i2) return `Nothing to export`;
  let a2;
  try {
    a2 = t2.drawingSheetToPdf(i2);
  } catch (e2) {
    return `PDF export failed: ${e2.message}`;
  }
  if (!a2) return `Kernel build does not support PDF export`;
  let { viewDirection: o2 } = n.getState(), s2 = new Blob([new Uint8Array(a2)], { type: `application/pdf` });
  return r(s2, `drawing-${o2}.pdf`), null;
}
export {
  d as a,
  c as i,
  l as n,
  _ as r,
  f as t
};
