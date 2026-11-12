import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t } from "./three-drei-_EcrAYRL.js";
import { N as n, R as r } from "./dist-_2fbu5WV.js";
import { t as i } from "./electronics-store-DvvmGMOD.js";
import { t as a } from "./SSRBase.es-DslTvOt6.js";
import { t as o } from "./drawing-store-CPLN4kMr.js";
var s = { Enter: { type: `Enter` }, Escape: { type: `Esc` }, Tab: { type: `Tab` }, Backspace: { type: `Backspace` }, Delete: { type: `Delete` }, " ": { type: `Space` }, Spacebar: { type: `Space` }, ArrowLeft: { type: `ArrowLeft` }, ArrowRight: { type: `ArrowRight` }, ArrowUp: { type: `ArrowUp` }, ArrowDown: { type: `ArrowDown` }, Home: { type: `Home` }, End: { type: `End` }, PageUp: { type: `PageUp` }, PageDown: { type: `PageDown` }, "`": { type: `Backtick` } };
function c(e2) {
  if (e2.key === `Shift` || e2.key === `Control` || e2.key === `Alt` || e2.key === `Meta` || e2.key === `AltGraph` || e2.key === `CapsLock`) return null;
  let t2 = l(e2);
  return t2 ? { primary: e2.metaKey || e2.ctrlKey, shift: e2.shiftKey, alt: e2.altKey, key: t2 } : null;
}
function l(e2) {
  let t2 = /^F(\d{1,2})$/.exec(e2.key);
  if (t2) {
    let e3 = Number(t2[1]);
    if (e3 >= 1 && e3 <= 24) return { type: `F`, value: e3 };
  }
  return s[e2.key] || (e2.key.length === 1 ? { type: `Char`, value: e2.key.toLowerCase() } : null);
}
function u(e2, t2) {
  return t2 === `mac` ? d(e2) : f(e2);
}
function d(e2) {
  let t2 = ``;
  return e2.alt && (t2 += `\u2325`), e2.shift && (t2 += `\u21E7`), e2.primary && (t2 += `\u2318`), t2 += p(e2.key), t2;
}
function f(e2) {
  let t2 = [];
  return e2.primary && t2.push(`Ctrl`), e2.shift && t2.push(`Shift`), e2.alt && t2.push(`Alt`), t2.push(m(e2.key)), t2.join(`+`);
}
function p(e2) {
  switch (e2.type) {
    case `Char`:
      return e2.value.toUpperCase();
    case `F`:
      return `F${e2.value}`;
    case `Enter`:
      return `\u21B5`;
    case `Esc`:
      return `Esc`;
    case `Tab`:
      return `\u21E5`;
    case `Backspace`:
      return `\u232B`;
    case `Delete`:
      return `\u2326`;
    case `Space`:
      return `Space`;
    case `ArrowLeft`:
      return `\u2190`;
    case `ArrowRight`:
      return `\u2192`;
    case `ArrowUp`:
      return `\u2191`;
    case `ArrowDown`:
      return `\u2193`;
    case `Home`:
      return `Home`;
    case `End`:
      return `End`;
    case `PageUp`:
      return `PgUp`;
    case `PageDown`:
      return `PgDn`;
    case `Backtick`:
      return "`";
  }
}
function m(e2) {
  switch (e2.type) {
    case `Char`:
      return e2.value.toUpperCase();
    case `F`:
      return `F${e2.value}`;
    default:
      return e2.type.replace(/^Arrow/, ``);
  }
}
function h() {
  return typeof navigator > `u` ? false : /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || ``);
}
var g = e(t(), 1), _ = /* @__PURE__ */ new Map([[`bold`, g.createElement(g.Fragment, null, g.createElement(`path`, { d: `M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,68v20H140V36h4A44.05,44.05,0,0,1,188,80ZM112,36h4v64H68V80A44.05,44.05,0,0,1,112,36Zm32,184H112a44.05,44.05,0,0,1-44-44V124H188v52A44.05,44.05,0,0,1,144,220Z` }))], [`duotone`, g.createElement(g.Fragment, null, g.createElement(`path`, { d: `M200,112v64a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56V112Z`, opacity: `0.2` }), g.createElement(`path`, { d: `M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z` }))], [`fill`, g.createElement(g.Fragment, null, g.createElement(`path`, { d: `M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Z` }))], [`light`, g.createElement(g.Fragment, null, g.createElement(`path`, { d: `M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,62v26H134V30h10A50.06,50.06,0,0,1,194,80ZM112,30h10v76H62V80A50.06,50.06,0,0,1,112,30Zm32,196H112a50.06,50.06,0,0,1-50-50V118H194v58A50.06,50.06,0,0,1,144,226Z` }))], [`regular`, g.createElement(g.Fragment, null, g.createElement(`path`, { d: `M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z` }))], [`thin`, g.createElement(g.Fragment, null, g.createElement(`path`, { d: `M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,60v28H132V28h12A52.06,52.06,0,0,1,196,80ZM112,28h12v80H60V80A52.06,52.06,0,0,1,112,28Zm32,200H112a52.06,52.06,0,0,1-52-52V116H196v60A52.06,52.06,0,0,1,144,228Z` }))]]), v = g.forwardRef((e2, t2) => g.createElement(a, { ref: t2, ...e2, weights: _ }));
v.displayName = `MouseIcon`;
var y = v;
function b() {
  return S({ electronicsActive: i((e2) => e2.active), sketchActive: r((e2) => e2.active), simMode: n((e2) => e2.mode), drawingView: o((e2) => e2.viewMode) });
}
function x() {
  return S({ electronicsActive: i.getState().active, sketchActive: r.getState().active, simMode: n.getState().mode, drawingView: o.getState().viewMode });
}
function S(e2) {
  return e2.electronicsActive ? `Electronics` : e2.sketchActive ? `Sketch` : e2.simMode === `running` ? `Physics` : e2.drawingView === `2d` ? `Drawing` : `Normal`;
}
export {
  u as a,
  c as i,
  b as n,
  h as o,
  y as r,
  x as t
};
