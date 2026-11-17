import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n, j as r } from "./three-drei-_EcrAYRL.js";
import { a as i, c as a, d as o, g as s, h as c, i as l, n as u, o as d, p as f, r as p, s as m, t as h } from "./dist-Dt-xZb1V.js";
import { t as g } from "./utils-D0T3A-kS.js";
var _ = e(t(), 1), v = [`top`, `right`, `bottom`, `left`], y = Math.min, b = Math.max, x = Math.round, S = Math.floor, C = (e2) => ({ x: e2, y: e2 }), w = { left: `right`, right: `left`, bottom: `top`, top: `bottom` }, T = { start: `end`, end: `start` };
function E(e2, t2, n2) {
  return b(e2, y(t2, n2));
}
function D(e2, t2) {
  return typeof e2 == `function` ? e2(t2) : e2;
}
function O(e2) {
  return e2.split(`-`)[0];
}
function k(e2) {
  return e2.split(`-`)[1];
}
function A(e2) {
  return e2 === `x` ? `y` : `x`;
}
function j(e2) {
  return e2 === `y` ? `height` : `width`;
}
var M = /* @__PURE__ */ new Set([`top`, `bottom`]);
function N(e2) {
  return M.has(O(e2)) ? `y` : `x`;
}
function P(e2) {
  return A(N(e2));
}
function ee(e2, t2, n2) {
  n2 === void 0 && (n2 = false);
  let r2 = k(e2), i2 = P(e2), a2 = j(i2), o2 = i2 === `x` ? r2 === (n2 ? `end` : `start`) ? `right` : `left` : r2 === `start` ? `bottom` : `top`;
  return t2.reference[a2] > t2.floating[a2] && (o2 = z(o2)), [o2, z(o2)];
}
function F(e2) {
  let t2 = z(e2);
  return [I(e2), t2, I(t2)];
}
function I(e2) {
  return e2.replace(/start|end/g, (e3) => T[e3]);
}
var L = [`left`, `right`], R = [`right`, `left`], te = [`top`, `bottom`], ne = [`bottom`, `top`];
function re(e2, t2, n2) {
  switch (e2) {
    case `top`:
    case `bottom`:
      return n2 ? t2 ? R : L : t2 ? L : R;
    case `left`:
    case `right`:
      return t2 ? te : ne;
    default:
      return [];
  }
}
function ie(e2, t2, n2, r2) {
  let i2 = k(e2), a2 = re(O(e2), n2 === `start`, r2);
  return i2 && (a2 = a2.map((e3) => e3 + `-` + i2), t2 && (a2 = a2.concat(a2.map(I)))), a2;
}
function z(e2) {
  return e2.replace(/left|right|bottom|top/g, (e3) => w[e3]);
}
function ae(e2) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e2 };
}
function oe(e2) {
  return typeof e2 == `number` ? { top: e2, right: e2, bottom: e2, left: e2 } : ae(e2);
}
function B(e2) {
  let { x: t2, y: n2, width: r2, height: i2 } = e2;
  return { width: r2, height: i2, top: n2, left: t2, right: t2 + r2, bottom: n2 + i2, x: t2, y: n2 };
}
function se(e2, t2, n2) {
  let { reference: r2, floating: i2 } = e2, a2 = N(t2), o2 = P(t2), s2 = j(o2), c2 = O(t2), l2 = a2 === `y`, u2 = r2.x + r2.width / 2 - i2.width / 2, d2 = r2.y + r2.height / 2 - i2.height / 2, f2 = r2[s2] / 2 - i2[s2] / 2, p2;
  switch (c2) {
    case `top`:
      p2 = { x: u2, y: r2.y - i2.height };
      break;
    case `bottom`:
      p2 = { x: u2, y: r2.y + r2.height };
      break;
    case `right`:
      p2 = { x: r2.x + r2.width, y: d2 };
      break;
    case `left`:
      p2 = { x: r2.x - i2.width, y: d2 };
      break;
    default:
      p2 = { x: r2.x, y: r2.y };
  }
  switch (k(t2)) {
    case `start`:
      p2[o2] -= f2 * (n2 && l2 ? -1 : 1);
      break;
    case `end`:
      p2[o2] += f2 * (n2 && l2 ? -1 : 1);
  }
  return p2;
}
async function ce(e2, t2) {
  t2 === void 0 && (t2 = {});
  let { x: n2, y: r2, platform: i2, rects: a2, elements: o2, strategy: s2 } = e2, { boundary: c2 = `clippingAncestors`, rootBoundary: l2 = `viewport`, elementContext: u2 = `floating`, altBoundary: d2 = false, padding: f2 = 0 } = D(t2, e2), p2 = oe(f2), m2 = o2[d2 ? u2 === `floating` ? `reference` : `floating` : u2], h2 = B(await i2.getClippingRect({ element: await (i2.isElement == null ? void 0 : i2.isElement(m2)) ?? true ? m2 : m2.contextElement || await (i2.getDocumentElement == null ? void 0 : i2.getDocumentElement(o2.floating)), boundary: c2, rootBoundary: l2, strategy: s2 })), g2 = u2 === `floating` ? { x: n2, y: r2, width: a2.floating.width, height: a2.floating.height } : a2.reference, _2 = await (i2.getOffsetParent == null ? void 0 : i2.getOffsetParent(o2.floating)), v2 = await (i2.isElement == null ? void 0 : i2.isElement(_2)) && await (i2.getScale == null ? void 0 : i2.getScale(_2)) || { x: 1, y: 1 }, y2 = B(i2.convertOffsetParentRelativeRectToViewportRelativeRect ? await i2.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: o2, rect: g2, offsetParent: _2, strategy: s2 }) : g2);
  return { top: (h2.top - y2.top + p2.top) / v2.y, bottom: (y2.bottom - h2.bottom + p2.bottom) / v2.y, left: (h2.left - y2.left + p2.left) / v2.x, right: (y2.right - h2.right + p2.right) / v2.x };
}
var le = async (e2, t2, n2) => {
  let { placement: r2 = `bottom`, strategy: i2 = `absolute`, middleware: a2 = [], platform: o2 } = n2, s2 = a2.filter(Boolean), c2 = await (o2.isRTL == null ? void 0 : o2.isRTL(t2)), l2 = await o2.getElementRects({ reference: e2, floating: t2, strategy: i2 }), { x: u2, y: d2 } = se(l2, r2, c2), f2 = r2, p2 = {}, m2 = 0;
  for (let n3 = 0; n3 < s2.length; n3++) {
    let { name: a3, fn: h2 } = s2[n3], { x: g2, y: _2, data: v2, reset: y2 } = await h2({ x: u2, y: d2, initialPlacement: r2, placement: f2, strategy: i2, middlewareData: p2, rects: l2, platform: { ...o2, detectOverflow: o2.detectOverflow ?? ce }, elements: { reference: e2, floating: t2 } });
    u2 = g2 ?? u2, d2 = _2 ?? d2, p2 = { ...p2, [a3]: { ...p2[a3], ...v2 } }, y2 && m2 <= 50 && (m2++, typeof y2 == `object` && (y2.placement && (f2 = y2.placement), y2.rects && (l2 = y2.rects === true ? await o2.getElementRects({ reference: e2, floating: t2, strategy: i2 }) : y2.rects), { x: u2, y: d2 } = se(l2, f2, c2)), n3 = -1);
  }
  return { x: u2, y: d2, placement: f2, strategy: i2, middlewareData: p2 };
}, ue = (e2) => ({ name: `arrow`, options: e2, async fn(t2) {
  let { x: n2, y: r2, placement: i2, rects: a2, platform: o2, elements: s2, middlewareData: c2 } = t2, { element: l2, padding: u2 = 0 } = D(e2, t2) || {};
  if (l2 == null) return {};
  let d2 = oe(u2), f2 = { x: n2, y: r2 }, p2 = P(i2), m2 = j(p2), h2 = await o2.getDimensions(l2), g2 = p2 === `y`, _2 = g2 ? `top` : `left`, v2 = g2 ? `bottom` : `right`, b2 = g2 ? `clientHeight` : `clientWidth`, x2 = a2.reference[m2] + a2.reference[p2] - f2[p2] - a2.floating[m2], S2 = f2[p2] - a2.reference[p2], C2 = await (o2.getOffsetParent == null ? void 0 : o2.getOffsetParent(l2)), w2 = C2 ? C2[b2] : 0;
  w2 && await (o2.isElement == null ? void 0 : o2.isElement(C2)) || (w2 = s2.floating[b2] || a2.floating[m2]);
  let T2 = x2 / 2 - S2 / 2, O2 = w2 / 2 - h2[m2] / 2 - 1, A2 = y(d2[_2], O2), M2 = y(d2[v2], O2), N2 = A2, ee2 = w2 - h2[m2] - M2, F2 = w2 / 2 - h2[m2] / 2 + T2, I2 = E(N2, F2, ee2), L2 = !c2.arrow && k(i2) != null && F2 !== I2 && a2.reference[m2] / 2 - (F2 < N2 ? A2 : M2) - h2[m2] / 2 < 0, R2 = L2 ? F2 < N2 ? F2 - N2 : F2 - ee2 : 0;
  return { [p2]: f2[p2] + R2, data: { [p2]: I2, centerOffset: F2 - I2 - R2, ...L2 && { alignmentOffset: R2 } }, reset: L2 };
} }), de = function(e2) {
  return e2 === void 0 && (e2 = {}), { name: `flip`, options: e2, async fn(t2) {
    var _a, _b, _c, _d;
    var n2;
    let { placement: r2, middlewareData: i2, rects: a2, initialPlacement: o2, platform: s2, elements: c2 } = t2, { mainAxis: l2 = true, crossAxis: u2 = true, fallbackPlacements: d2, fallbackStrategy: f2 = `bestFit`, fallbackAxisSideDirection: p2 = `none`, flipAlignment: m2 = true, ...h2 } = D(e2, t2);
    if ((n2 = i2.arrow) != null && n2.alignmentOffset) return {};
    let g2 = O(r2), _2 = N(o2), v2 = O(o2) === o2, y2 = await (s2.isRTL == null ? void 0 : s2.isRTL(c2.floating)), b2 = d2 || (v2 || !m2 ? [z(o2)] : F(o2)), x2 = p2 !== `none`;
    !d2 && x2 && b2.push(...ie(o2, m2, p2, y2));
    let S2 = [o2, ...b2], C2 = await s2.detectOverflow(t2, h2), w2 = [], T2 = ((_a = i2.flip) == null ? void 0 : _a.overflows) || [];
    if (l2 && w2.push(C2[g2]), u2) {
      let e3 = ee(r2, a2, y2);
      w2.push(C2[e3[0]], C2[e3[1]]);
    }
    if (T2 = [...T2, { placement: r2, overflows: w2 }], !w2.every((e3) => e3 <= 0)) {
      let e3 = (((_b = i2.flip) == null ? void 0 : _b.index) || 0) + 1, t3 = S2[e3];
      if (t3 && (u2 !== `alignment` || _2 === N(t3) || T2.every((e4) => N(e4.placement) !== _2 || e4.overflows[0] > 0))) return { data: { index: e3, overflows: T2 }, reset: { placement: t3 } };
      let n3 = (_c = T2.filter((e4) => e4.overflows[0] <= 0).sort((e4, t4) => e4.overflows[1] - t4.overflows[1])[0]) == null ? void 0 : _c.placement;
      if (!n3) switch (f2) {
        case `bestFit`: {
          let e4 = (_d = T2.filter((e5) => {
            if (x2) {
              let t4 = N(e5.placement);
              return t4 === _2 || t4 === `y`;
            }
            return true;
          }).map((e5) => [e5.placement, e5.overflows.filter((e6) => e6 > 0).reduce((e6, t4) => e6 + t4, 0)]).sort((e5, t4) => e5[1] - t4[1])[0]) == null ? void 0 : _d[0];
          e4 && (n3 = e4);
          break;
        }
        case `initialPlacement`:
          n3 = o2;
      }
      if (r2 !== n3) return { reset: { placement: n3 } };
    }
    return {};
  } };
};
function fe(e2, t2) {
  return { top: e2.top - t2.height, right: e2.right - t2.width, bottom: e2.bottom - t2.height, left: e2.left - t2.width };
}
function pe(e2) {
  return v.some((t2) => e2[t2] >= 0);
}
var me = function(e2) {
  return e2 === void 0 && (e2 = {}), { name: `hide`, options: e2, async fn(t2) {
    let { rects: n2, platform: r2 } = t2, { strategy: i2 = `referenceHidden`, ...a2 } = D(e2, t2);
    switch (i2) {
      case `referenceHidden`: {
        let e3 = fe(await r2.detectOverflow(t2, { ...a2, elementContext: `reference` }), n2.reference);
        return { data: { referenceHiddenOffsets: e3, referenceHidden: pe(e3) } };
      }
      case `escaped`: {
        let e3 = fe(await r2.detectOverflow(t2, { ...a2, altBoundary: true }), n2.floating);
        return { data: { escapedOffsets: e3, escaped: pe(e3) } };
      }
      default:
        return {};
    }
  } };
}, he = /* @__PURE__ */ new Set([`left`, `top`]);
async function ge(e2, t2) {
  let { placement: n2, platform: r2, elements: i2 } = e2, a2 = await (r2.isRTL == null ? void 0 : r2.isRTL(i2.floating)), o2 = O(n2), s2 = k(n2), c2 = N(n2) === `y`, l2 = he.has(o2) ? -1 : 1, u2 = a2 && c2 ? -1 : 1, d2 = D(t2, e2), { mainAxis: f2, crossAxis: p2, alignmentAxis: m2 } = typeof d2 == `number` ? { mainAxis: d2, crossAxis: 0, alignmentAxis: null } : { mainAxis: d2.mainAxis || 0, crossAxis: d2.crossAxis || 0, alignmentAxis: d2.alignmentAxis };
  return s2 && typeof m2 == `number` && (p2 = s2 === `end` ? m2 * -1 : m2), c2 ? { x: p2 * u2, y: f2 * l2 } : { x: f2 * l2, y: p2 * u2 };
}
var _e = function(e2) {
  return e2 === void 0 && (e2 = 0), { name: `offset`, options: e2, async fn(t2) {
    var _a;
    var n2;
    let { x: r2, y: i2, placement: a2, middlewareData: o2 } = t2, s2 = await ge(t2, e2);
    return a2 === ((_a = o2.offset) == null ? void 0 : _a.placement) && (n2 = o2.arrow) != null && n2.alignmentOffset ? {} : { x: r2 + s2.x, y: i2 + s2.y, data: { ...s2, placement: a2 } };
  } };
}, ve = function(e2) {
  return e2 === void 0 && (e2 = {}), { name: `shift`, options: e2, async fn(t2) {
    let { x: n2, y: r2, placement: i2, platform: a2 } = t2, { mainAxis: o2 = true, crossAxis: s2 = false, limiter: c2 = { fn: (e3) => {
      let { x: t3, y: n3 } = e3;
      return { x: t3, y: n3 };
    } }, ...l2 } = D(e2, t2), u2 = { x: n2, y: r2 }, d2 = await a2.detectOverflow(t2, l2), f2 = N(O(i2)), p2 = A(f2), m2 = u2[p2], h2 = u2[f2];
    if (o2) {
      let e3 = p2 === `y` ? `top` : `left`, t3 = p2 === `y` ? `bottom` : `right`, n3 = m2 + d2[e3], r3 = m2 - d2[t3];
      m2 = E(n3, m2, r3);
    }
    if (s2) {
      let e3 = f2 === `y` ? `top` : `left`, t3 = f2 === `y` ? `bottom` : `right`, n3 = h2 + d2[e3], r3 = h2 - d2[t3];
      h2 = E(n3, h2, r3);
    }
    let g2 = c2.fn({ ...t2, [p2]: m2, [f2]: h2 });
    return { ...g2, data: { x: g2.x - n2, y: g2.y - r2, enabled: { [p2]: o2, [f2]: s2 } } };
  } };
}, ye = function(e2) {
  return e2 === void 0 && (e2 = {}), { options: e2, fn(t2) {
    var _a, _b;
    let { x: n2, y: r2, placement: i2, rects: a2, middlewareData: o2 } = t2, { offset: s2 = 0, mainAxis: c2 = true, crossAxis: l2 = true } = D(e2, t2), u2 = { x: n2, y: r2 }, d2 = N(i2), f2 = A(d2), p2 = u2[f2], m2 = u2[d2], h2 = D(s2, t2), g2 = typeof h2 == `number` ? { mainAxis: h2, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...h2 };
    if (c2) {
      let e3 = f2 === `y` ? `height` : `width`, t3 = a2.reference[f2] - a2.floating[e3] + g2.mainAxis, n3 = a2.reference[f2] + a2.reference[e3] - g2.mainAxis;
      p2 < t3 ? p2 = t3 : p2 > n3 && (p2 = n3);
    }
    if (l2) {
      let e3 = f2 === `y` ? `width` : `height`, t3 = he.has(O(i2)), n3 = a2.reference[d2] - a2.floating[e3] + (t3 && ((_a = o2.offset) == null ? void 0 : _a[d2]) || 0) + (t3 ? 0 : g2.crossAxis), r3 = a2.reference[d2] + a2.reference[e3] + (t3 ? 0 : ((_b = o2.offset) == null ? void 0 : _b[d2]) || 0) - (t3 ? g2.crossAxis : 0);
      m2 < n3 ? m2 = n3 : m2 > r3 && (m2 = r3);
    }
    return { [f2]: p2, [d2]: m2 };
  } };
}, be = function(e2) {
  return e2 === void 0 && (e2 = {}), { name: `size`, options: e2, async fn(t2) {
    var n2, r2;
    let { placement: i2, rects: a2, platform: o2, elements: s2 } = t2, { apply: c2 = () => {
    }, ...l2 } = D(e2, t2), u2 = await o2.detectOverflow(t2, l2), d2 = O(i2), f2 = k(i2), p2 = N(i2) === `y`, { width: m2, height: h2 } = a2.floating, g2, _2;
    d2 === `top` || d2 === `bottom` ? (g2 = d2, _2 = f2 === (await (o2.isRTL == null ? void 0 : o2.isRTL(s2.floating)) ? `start` : `end`) ? `left` : `right`) : (_2 = d2, g2 = f2 === `end` ? `top` : `bottom`);
    let v2 = h2 - u2.top - u2.bottom, x2 = m2 - u2.left - u2.right, S2 = y(h2 - u2[g2], v2), C2 = y(m2 - u2[_2], x2), w2 = !t2.middlewareData.shift, T2 = S2, E2 = C2;
    if ((n2 = t2.middlewareData.shift) != null && n2.enabled.x && (E2 = x2), (r2 = t2.middlewareData.shift) != null && r2.enabled.y && (T2 = v2), w2 && !f2) {
      let e3 = b(u2.left, 0), t3 = b(u2.right, 0), n3 = b(u2.top, 0), r3 = b(u2.bottom, 0);
      p2 ? E2 = m2 - 2 * (e3 !== 0 || t3 !== 0 ? e3 + t3 : b(u2.left, u2.right)) : T2 = h2 - 2 * (n3 !== 0 || r3 !== 0 ? n3 + r3 : b(u2.top, u2.bottom));
    }
    await c2({ ...t2, availableWidth: E2, availableHeight: T2 });
    let A2 = await o2.getDimensions(s2.floating);
    return m2 !== A2.width || h2 !== A2.height ? { reset: { rects: true } } : {};
  } };
};
function xe() {
  return typeof window < `u`;
}
function V(e2) {
  return Se(e2) ? (e2.nodeName || ``).toLowerCase() : `#document`;
}
function H(e2) {
  var t2;
  return (e2 == null || (t2 = e2.ownerDocument) == null ? void 0 : t2.defaultView) || window;
}
function U(e2) {
  var _a;
  return (_a = (Se(e2) ? e2.ownerDocument : e2.document) || window.document) == null ? void 0 : _a.documentElement;
}
function Se(e2) {
  return xe() ? e2 instanceof Node || e2 instanceof H(e2).Node : false;
}
function W(e2) {
  return xe() ? e2 instanceof Element || e2 instanceof H(e2).Element : false;
}
function G(e2) {
  return xe() ? e2 instanceof HTMLElement || e2 instanceof H(e2).HTMLElement : false;
}
function Ce(e2) {
  return !xe() || typeof ShadowRoot > `u` ? false : e2 instanceof ShadowRoot || e2 instanceof H(e2).ShadowRoot;
}
var we = /* @__PURE__ */ new Set([`inline`, `contents`]);
function K(e2) {
  let { overflow: t2, overflowX: n2, overflowY: r2, display: i2 } = J(e2);
  return /auto|scroll|overlay|hidden|clip/.test(t2 + r2 + n2) && !we.has(i2);
}
var Te = /* @__PURE__ */ new Set([`table`, `td`, `th`]);
function Ee(e2) {
  return Te.has(V(e2));
}
var De = [`:popover-open`, `:modal`];
function Oe(e2) {
  return De.some((t2) => {
    try {
      return e2.matches(t2);
    } catch {
      return false;
    }
  });
}
var ke = [`transform`, `translate`, `scale`, `rotate`, `perspective`], Ae = [`transform`, `translate`, `scale`, `rotate`, `perspective`, `filter`], je = [`paint`, `layout`, `strict`, `content`];
function Me(e2) {
  let t2 = Pe(), n2 = W(e2) ? J(e2) : e2;
  return ke.some((e3) => n2[e3] ? n2[e3] !== `none` : false) || (n2.containerType ? n2.containerType !== `normal` : false) || !t2 && (n2.backdropFilter ? n2.backdropFilter !== `none` : false) || !t2 && (n2.filter ? n2.filter !== `none` : false) || Ae.some((e3) => (n2.willChange || ``).includes(e3)) || je.some((e3) => (n2.contain || ``).includes(e3));
}
function Ne(e2) {
  let t2 = Y(e2);
  for (; G(t2) && !q(t2); ) {
    if (Me(t2)) return t2;
    if (Oe(t2)) return null;
    t2 = Y(t2);
  }
  return null;
}
function Pe() {
  return typeof CSS > `u` || !CSS.supports ? false : CSS.supports(`-webkit-backdrop-filter`, `none`);
}
var Fe = /* @__PURE__ */ new Set([`html`, `body`, `#document`]);
function q(e2) {
  return Fe.has(V(e2));
}
function J(e2) {
  return H(e2).getComputedStyle(e2);
}
function Ie(e2) {
  return W(e2) ? { scrollLeft: e2.scrollLeft, scrollTop: e2.scrollTop } : { scrollLeft: e2.scrollX, scrollTop: e2.scrollY };
}
function Y(e2) {
  if (V(e2) === `html`) return e2;
  let t2 = e2.assignedSlot || e2.parentNode || Ce(e2) && e2.host || U(e2);
  return Ce(t2) ? t2.host : t2;
}
function Le(e2) {
  let t2 = Y(e2);
  return q(t2) ? e2.ownerDocument ? e2.ownerDocument.body : e2.body : G(t2) && K(t2) ? t2 : Le(t2);
}
function Re(e2, t2, n2) {
  var _a;
  t2 === void 0 && (t2 = []), n2 === void 0 && (n2 = true);
  let r2 = Le(e2), i2 = r2 === ((_a = e2.ownerDocument) == null ? void 0 : _a.body), a2 = H(r2);
  if (i2) {
    let e3 = ze(a2);
    return t2.concat(a2, a2.visualViewport || [], K(r2) ? r2 : [], e3 && n2 ? Re(e3) : []);
  }
  return t2.concat(r2, Re(r2, [], n2));
}
function ze(e2) {
  return e2.parent && Object.getPrototypeOf(e2.parent) ? e2.frameElement : null;
}
function Be(e2) {
  let t2 = J(e2), n2 = parseFloat(t2.width) || 0, r2 = parseFloat(t2.height) || 0, i2 = G(e2), a2 = i2 ? e2.offsetWidth : n2, o2 = i2 ? e2.offsetHeight : r2, s2 = x(n2) !== a2 || x(r2) !== o2;
  return s2 && (n2 = a2, r2 = o2), { width: n2, height: r2, $: s2 };
}
function Ve(e2) {
  return W(e2) ? e2 : e2.contextElement;
}
function X(e2) {
  let t2 = Ve(e2);
  if (!G(t2)) return C(1);
  let n2 = t2.getBoundingClientRect(), { width: r2, height: i2, $: a2 } = Be(t2), o2 = (a2 ? x(n2.width) : n2.width) / r2, s2 = (a2 ? x(n2.height) : n2.height) / i2;
  return o2 && Number.isFinite(o2) || (o2 = 1), s2 && Number.isFinite(s2) || (s2 = 1), { x: o2, y: s2 };
}
var He = C(0);
function Ue(e2) {
  let t2 = H(e2);
  return !Pe() || !t2.visualViewport ? He : { x: t2.visualViewport.offsetLeft, y: t2.visualViewport.offsetTop };
}
function We(e2, t2, n2) {
  return t2 === void 0 && (t2 = false), !n2 || t2 && n2 !== H(e2) ? false : t2;
}
function Z(e2, t2, n2, r2) {
  t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
  let i2 = e2.getBoundingClientRect(), a2 = Ve(e2), o2 = C(1);
  t2 && (r2 ? W(r2) && (o2 = X(r2)) : o2 = X(e2));
  let s2 = We(a2, n2, r2) ? Ue(a2) : C(0), c2 = (i2.left + s2.x) / o2.x, l2 = (i2.top + s2.y) / o2.y, u2 = i2.width / o2.x, d2 = i2.height / o2.y;
  if (a2) {
    let e3 = H(a2), t3 = r2 && W(r2) ? H(r2) : r2, n3 = e3, i3 = ze(n3);
    for (; i3 && r2 && t3 !== n3; ) {
      let e4 = X(i3), t4 = i3.getBoundingClientRect(), r3 = J(i3), a3 = t4.left + (i3.clientLeft + parseFloat(r3.paddingLeft)) * e4.x, o3 = t4.top + (i3.clientTop + parseFloat(r3.paddingTop)) * e4.y;
      c2 *= e4.x, l2 *= e4.y, u2 *= e4.x, d2 *= e4.y, c2 += a3, l2 += o3, n3 = H(i3), i3 = ze(n3);
    }
  }
  return B({ width: u2, height: d2, x: c2, y: l2 });
}
function Ge(e2, t2) {
  let n2 = Ie(e2).scrollLeft;
  return t2 ? t2.left + n2 : Z(U(e2)).left + n2;
}
function Ke(e2, t2) {
  let n2 = e2.getBoundingClientRect();
  return { x: n2.left + t2.scrollLeft - Ge(e2, n2), y: n2.top + t2.scrollTop };
}
function qe(e2) {
  let { elements: t2, rect: n2, offsetParent: r2, strategy: i2 } = e2, a2 = i2 === `fixed`, o2 = U(r2), s2 = t2 ? Oe(t2.floating) : false;
  if (r2 === o2 || s2 && a2) return n2;
  let c2 = { scrollLeft: 0, scrollTop: 0 }, l2 = C(1), u2 = C(0), d2 = G(r2);
  if ((d2 || !d2 && !a2) && ((V(r2) !== `body` || K(o2)) && (c2 = Ie(r2)), G(r2))) {
    let e3 = Z(r2);
    l2 = X(r2), u2.x = e3.x + r2.clientLeft, u2.y = e3.y + r2.clientTop;
  }
  let f2 = o2 && !d2 && !a2 ? Ke(o2, c2) : C(0);
  return { width: n2.width * l2.x, height: n2.height * l2.y, x: n2.x * l2.x - c2.scrollLeft * l2.x + u2.x + f2.x, y: n2.y * l2.y - c2.scrollTop * l2.y + u2.y + f2.y };
}
function Je(e2) {
  return Array.from(e2.getClientRects());
}
function Ye(e2) {
  let t2 = U(e2), n2 = Ie(e2), r2 = e2.ownerDocument.body, i2 = b(t2.scrollWidth, t2.clientWidth, r2.scrollWidth, r2.clientWidth), a2 = b(t2.scrollHeight, t2.clientHeight, r2.scrollHeight, r2.clientHeight), o2 = -n2.scrollLeft + Ge(e2), s2 = -n2.scrollTop;
  return J(r2).direction === `rtl` && (o2 += b(t2.clientWidth, r2.clientWidth) - i2), { width: i2, height: a2, x: o2, y: s2 };
}
var Xe = 25;
function Ze(e2, t2) {
  let n2 = H(e2), r2 = U(e2), i2 = n2.visualViewport, a2 = r2.clientWidth, o2 = r2.clientHeight, s2 = 0, c2 = 0;
  if (i2) {
    a2 = i2.width, o2 = i2.height;
    let e3 = Pe();
    (!e3 || e3 && t2 === `fixed`) && (s2 = i2.offsetLeft, c2 = i2.offsetTop);
  }
  let l2 = Ge(r2);
  if (l2 <= 0) {
    let e3 = r2.ownerDocument, t3 = e3.body, n3 = getComputedStyle(t3), i3 = e3.compatMode === `CSS1Compat` && parseFloat(n3.marginLeft) + parseFloat(n3.marginRight) || 0, o3 = Math.abs(r2.clientWidth - t3.clientWidth - i3);
    o3 <= Xe && (a2 -= o3);
  } else l2 <= Xe && (a2 += l2);
  return { width: a2, height: o2, x: s2, y: c2 };
}
var Qe = /* @__PURE__ */ new Set([`absolute`, `fixed`]);
function $e(e2, t2) {
  let n2 = Z(e2, true, t2 === `fixed`), r2 = n2.top + e2.clientTop, i2 = n2.left + e2.clientLeft, a2 = G(e2) ? X(e2) : C(1);
  return { width: e2.clientWidth * a2.x, height: e2.clientHeight * a2.y, x: i2 * a2.x, y: r2 * a2.y };
}
function et(e2, t2, n2) {
  let r2;
  if (t2 === `viewport`) r2 = Ze(e2, n2);
  else if (t2 === `document`) r2 = Ye(U(e2));
  else if (W(t2)) r2 = $e(t2, n2);
  else {
    let n3 = Ue(e2);
    r2 = { x: t2.x - n3.x, y: t2.y - n3.y, width: t2.width, height: t2.height };
  }
  return B(r2);
}
function tt(e2, t2) {
  let n2 = Y(e2);
  return n2 === t2 || !W(n2) || q(n2) ? false : J(n2).position === `fixed` || tt(n2, t2);
}
function nt(e2, t2) {
  let n2 = t2.get(e2);
  if (n2) return n2;
  let r2 = Re(e2, [], false).filter((e3) => W(e3) && V(e3) !== `body`), i2 = null, a2 = J(e2).position === `fixed`, o2 = a2 ? Y(e2) : e2;
  for (; W(o2) && !q(o2); ) {
    let t3 = J(o2), n3 = Me(o2);
    !n3 && t3.position === `fixed` && (i2 = null), (a2 ? !n3 && !i2 : !n3 && t3.position === `static` && i2 && Qe.has(i2.position) || K(o2) && !n3 && tt(e2, o2)) ? r2 = r2.filter((e3) => e3 !== o2) : i2 = t3, o2 = Y(o2);
  }
  return t2.set(e2, r2), r2;
}
function rt(e2) {
  let { element: t2, boundary: n2, rootBoundary: r2, strategy: i2 } = e2, a2 = [...n2 === `clippingAncestors` ? Oe(t2) ? [] : nt(t2, this._c) : [].concat(n2), r2], o2 = a2[0], s2 = a2.reduce((e3, n3) => {
    let r3 = et(t2, n3, i2);
    return e3.top = b(r3.top, e3.top), e3.right = y(r3.right, e3.right), e3.bottom = y(r3.bottom, e3.bottom), e3.left = b(r3.left, e3.left), e3;
  }, et(t2, o2, i2));
  return { width: s2.right - s2.left, height: s2.bottom - s2.top, x: s2.left, y: s2.top };
}
function it(e2) {
  let { width: t2, height: n2 } = Be(e2);
  return { width: t2, height: n2 };
}
function at(e2, t2, n2) {
  let r2 = G(t2), i2 = U(t2), a2 = n2 === `fixed`, o2 = Z(e2, true, a2, t2), s2 = { scrollLeft: 0, scrollTop: 0 }, c2 = C(0);
  function l2() {
    c2.x = Ge(i2);
  }
  if (r2 || !r2 && !a2) {
    if ((V(t2) !== `body` || K(i2)) && (s2 = Ie(t2)), r2) {
      let e3 = Z(t2, true, a2, t2);
      c2.x = e3.x + t2.clientLeft, c2.y = e3.y + t2.clientTop;
    } else i2 && l2();
  }
  a2 && !r2 && i2 && l2();
  let u2 = i2 && !r2 && !a2 ? Ke(i2, s2) : C(0);
  return { x: o2.left + s2.scrollLeft - c2.x - u2.x, y: o2.top + s2.scrollTop - c2.y - u2.y, width: o2.width, height: o2.height };
}
function ot(e2) {
  return J(e2).position === `static`;
}
function st(e2, t2) {
  if (!G(e2) || J(e2).position === `fixed`) return null;
  if (t2) return t2(e2);
  let n2 = e2.offsetParent;
  return U(e2) === n2 && (n2 = n2.ownerDocument.body), n2;
}
function ct(e2, t2) {
  let n2 = H(e2);
  if (Oe(e2)) return n2;
  if (!G(e2)) {
    let t3 = Y(e2);
    for (; t3 && !q(t3); ) {
      if (W(t3) && !ot(t3)) return t3;
      t3 = Y(t3);
    }
    return n2;
  }
  let r2 = st(e2, t2);
  for (; r2 && Ee(r2) && ot(r2); ) r2 = st(r2, t2);
  return r2 && q(r2) && ot(r2) && !Me(r2) ? n2 : r2 || Ne(e2) || n2;
}
var lt = async function(e2) {
  let t2 = this.getOffsetParent || ct, n2 = this.getDimensions, r2 = await n2(e2.floating);
  return { reference: at(e2.reference, await t2(e2.floating), e2.strategy), floating: { x: 0, y: 0, width: r2.width, height: r2.height } };
};
function ut(e2) {
  return J(e2).direction === `rtl`;
}
var dt = { convertOffsetParentRelativeRectToViewportRelativeRect: qe, getDocumentElement: U, getClippingRect: rt, getOffsetParent: ct, getElementRects: lt, getClientRects: Je, getDimensions: it, getScale: X, isElement: W, isRTL: ut };
function ft(e2, t2) {
  return e2.x === t2.x && e2.y === t2.y && e2.width === t2.width && e2.height === t2.height;
}
function pt(e2, t2) {
  let n2 = null, r2, i2 = U(e2);
  function a2() {
    var e3;
    clearTimeout(r2), (e3 = n2) == null || e3.disconnect(), n2 = null;
  }
  function o2(s2, c2) {
    s2 === void 0 && (s2 = false), c2 === void 0 && (c2 = 1), a2();
    let l2 = e2.getBoundingClientRect(), { left: u2, top: d2, width: f2, height: p2 } = l2;
    if (s2 || t2(), !f2 || !p2) return;
    let m2 = S(d2), h2 = S(i2.clientWidth - (u2 + f2)), g2 = S(i2.clientHeight - (d2 + p2)), _2 = S(u2), v2 = { rootMargin: -m2 + `px ` + -h2 + `px ` + -g2 + `px ` + -_2 + `px`, threshold: b(0, y(1, c2)) || 1 }, x2 = true;
    function C2(t3) {
      let n3 = t3[0].intersectionRatio;
      if (n3 !== c2) {
        if (!x2) return o2();
        n3 ? o2(false, n3) : r2 = setTimeout(() => {
          o2(false, 1e-7);
        }, 1e3);
      }
      n3 === 1 && !ft(l2, e2.getBoundingClientRect()) && o2(), x2 = false;
    }
    try {
      n2 = new IntersectionObserver(C2, { ...v2, root: i2.ownerDocument });
    } catch {
      n2 = new IntersectionObserver(C2, v2);
    }
    n2.observe(e2);
  }
  return o2(true), a2;
}
function mt(e2, t2, n2, r2) {
  r2 === void 0 && (r2 = {});
  let { ancestorScroll: i2 = true, ancestorResize: a2 = true, elementResize: o2 = typeof ResizeObserver == `function`, layoutShift: s2 = typeof IntersectionObserver == `function`, animationFrame: c2 = false } = r2, l2 = Ve(e2), u2 = i2 || a2 ? [...l2 ? Re(l2) : [], ...Re(t2)] : [];
  u2.forEach((e3) => {
    i2 && e3.addEventListener(`scroll`, n2, { passive: true }), a2 && e3.addEventListener(`resize`, n2);
  });
  let d2 = l2 && s2 ? pt(l2, n2) : null, f2 = -1, p2 = null;
  o2 && (p2 = new ResizeObserver((e3) => {
    let [r3] = e3;
    r3 && r3.target === l2 && p2 && (p2.unobserve(t2), cancelAnimationFrame(f2), f2 = requestAnimationFrame(() => {
      var e4;
      (e4 = p2) == null || e4.observe(t2);
    })), n2();
  }), l2 && !c2 && p2.observe(l2), p2.observe(t2));
  let m2, h2 = c2 ? Z(e2) : null;
  c2 && g2();
  function g2() {
    let t3 = Z(e2);
    h2 && !ft(h2, t3) && n2(), h2 = t3, m2 = requestAnimationFrame(g2);
  }
  return n2(), () => {
    var e3;
    u2.forEach((e4) => {
      i2 && e4.removeEventListener(`scroll`, n2), a2 && e4.removeEventListener(`resize`, n2);
    }), d2 == null ? void 0 : d2(), (e3 = p2) == null || e3.disconnect(), p2 = null, c2 && cancelAnimationFrame(m2);
  };
}
var ht = _e, gt = ve, _t = de, vt = be, yt = me, bt = ue, xt = ye, St = (e2, t2, n2) => {
  let r2 = /* @__PURE__ */ new Map(), i2 = { platform: dt, ...n2 }, a2 = { ...i2.platform, _c: r2 };
  return le(e2, t2, { ...i2, platform: a2 });
}, Ct = e(r(), 1), wt = typeof document < `u` ? _.useLayoutEffect : function() {
};
function Tt(e2, t2) {
  if (e2 === t2) return true;
  if (typeof e2 != typeof t2) return false;
  if (typeof e2 == `function` && e2.toString() === t2.toString()) return true;
  let n2, r2, i2;
  if (e2 && t2 && typeof e2 == `object`) {
    if (Array.isArray(e2)) {
      if (n2 = e2.length, n2 !== t2.length) return false;
      for (r2 = n2; r2-- !== 0; ) if (!Tt(e2[r2], t2[r2])) return false;
      return true;
    }
    if (i2 = Object.keys(e2), n2 = i2.length, n2 !== Object.keys(t2).length) return false;
    for (r2 = n2; r2-- !== 0; ) if (!{}.hasOwnProperty.call(t2, i2[r2])) return false;
    for (r2 = n2; r2-- !== 0; ) {
      let n3 = i2[r2];
      if (!(n3 === `_owner` && e2.$$typeof) && !Tt(e2[n3], t2[n3])) return false;
    }
    return true;
  }
  return e2 !== e2 && t2 !== t2;
}
function Et(e2) {
  return typeof window > `u` ? 1 : (e2.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dt(e2, t2) {
  let n2 = Et(e2);
  return Math.round(t2 * n2) / n2;
}
function Ot(e2) {
  let t2 = _.useRef(e2);
  return wt(() => {
    t2.current = e2;
  }), t2;
}
function kt(e2) {
  e2 === void 0 && (e2 = {});
  let { placement: t2 = `bottom`, strategy: n2 = `absolute`, middleware: r2 = [], platform: i2, elements: { reference: a2, floating: o2 } = {}, transform: s2 = true, whileElementsMounted: c2, open: l2 } = e2, [u2, d2] = _.useState({ x: 0, y: 0, strategy: n2, placement: t2, middlewareData: {}, isPositioned: false }), [f2, p2] = _.useState(r2);
  Tt(f2, r2) || p2(r2);
  let [m2, h2] = _.useState(null), [g2, v2] = _.useState(null), y2 = _.useCallback((e3) => {
    e3 !== C2.current && (C2.current = e3, h2(e3));
  }, []), b2 = _.useCallback((e3) => {
    e3 !== w2.current && (w2.current = e3, v2(e3));
  }, []), x2 = a2 || m2, S2 = o2 || g2, C2 = _.useRef(null), w2 = _.useRef(null), T2 = _.useRef(u2), E2 = c2 != null, D2 = Ot(c2), O2 = Ot(i2), k2 = Ot(l2), A2 = _.useCallback(() => {
    if (!C2.current || !w2.current) return;
    let e3 = { placement: t2, strategy: n2, middleware: f2 };
    O2.current && (e3.platform = O2.current), St(C2.current, w2.current, e3).then((e4) => {
      let t3 = { ...e4, isPositioned: k2.current !== false };
      j2.current && !Tt(T2.current, t3) && (T2.current = t3, Ct.flushSync(() => {
        d2(t3);
      }));
    });
  }, [f2, t2, n2, O2, k2]);
  wt(() => {
    l2 === false && T2.current.isPositioned && (T2.current.isPositioned = false, d2((e3) => ({ ...e3, isPositioned: false })));
  }, [l2]);
  let j2 = _.useRef(false);
  wt(() => (j2.current = true, () => {
    j2.current = false;
  }), []), wt(() => {
    if (x2 && (C2.current = x2), S2 && (w2.current = S2), x2 && S2) {
      if (D2.current) return D2.current(x2, S2, A2);
      A2();
    }
  }, [x2, S2, A2, D2, E2]);
  let M2 = _.useMemo(() => ({ reference: C2, floating: w2, setReference: y2, setFloating: b2 }), [y2, b2]), N2 = _.useMemo(() => ({ reference: x2, floating: S2 }), [x2, S2]), P2 = _.useMemo(() => {
    let e3 = { position: n2, left: 0, top: 0 };
    if (!N2.floating) return e3;
    let t3 = Dt(N2.floating, u2.x), r3 = Dt(N2.floating, u2.y);
    return s2 ? { ...e3, transform: `translate(` + t3 + `px, ` + r3 + `px)`, ...Et(N2.floating) >= 1.5 && { willChange: `transform` } } : { position: n2, left: t3, top: r3 };
  }, [n2, s2, N2.floating, u2.x, u2.y]);
  return _.useMemo(() => ({ ...u2, update: A2, refs: M2, elements: N2, floatingStyles: P2 }), [u2, A2, M2, N2, P2]);
}
var At = (e2) => {
  function t2(e3) {
    return {}.hasOwnProperty.call(e3, `current`);
  }
  return { name: `arrow`, options: e2, fn(n2) {
    let { element: r2, padding: i2 } = typeof e2 == `function` ? e2(n2) : e2;
    return r2 && t2(r2) ? r2.current == null ? {} : bt({ element: r2.current, padding: i2 }).fn(n2) : r2 ? bt({ element: r2, padding: i2 }).fn(n2) : {};
  } };
}, jt = (e2, t2) => ({ ...ht(e2), options: [e2, t2] }), Mt = (e2, t2) => ({ ...gt(e2), options: [e2, t2] }), Nt = (e2, t2) => ({ ...xt(e2), options: [e2, t2] }), Pt = (e2, t2) => ({ ..._t(e2), options: [e2, t2] }), Ft = (e2, t2) => ({ ...vt(e2), options: [e2, t2] }), It = (e2, t2) => ({ ...yt(e2), options: [e2, t2] }), Lt = (e2, t2) => ({ ...At(e2), options: [e2, t2] }), Q = n(), Rt = `Arrow`, zt = _.forwardRef((e2, t2) => {
  let { children: n2, width: r2 = 10, height: i2 = 5, ...o2 } = e2;
  return (0, Q.jsx)(a.svg, { ...o2, ref: t2, width: r2, height: i2, viewBox: `0 0 30 10`, preserveAspectRatio: `none`, children: e2.asChild ? n2 : (0, Q.jsx)(`polygon`, { points: `0,0 30,0 15,10` }) });
});
zt.displayName = Rt;
var Bt = zt;
function Vt(e2) {
  let [t2, n2] = _.useState(void 0);
  return i(() => {
    if (e2) {
      n2({ width: e2.offsetWidth, height: e2.offsetHeight });
      let t3 = new ResizeObserver((t4) => {
        if (!Array.isArray(t4) || !t4.length) return;
        let r2 = t4[0], i2, a2;
        if (`borderBoxSize` in r2) {
          let e3 = r2.borderBoxSize, t5 = Array.isArray(e3) ? e3[0] : e3;
          i2 = t5.inlineSize, a2 = t5.blockSize;
        } else i2 = e2.offsetWidth, a2 = e2.offsetHeight;
        n2({ width: i2, height: a2 });
      });
      return t3.observe(e2, { box: `border-box` }), () => t3.unobserve(e2);
    }
    n2(void 0);
  }, [e2]), t2;
}
var Ht = `Popper`, [Ut, Wt] = f(Ht), [Gt, Kt] = Ut(Ht), qt = (e2) => {
  let { __scopePopper: t2, children: n2 } = e2, [r2, i2] = _.useState(null);
  return (0, Q.jsx)(Gt, { scope: t2, anchor: r2, onAnchorChange: i2, children: n2 });
};
qt.displayName = Ht;
var Jt = `PopperAnchor`, Yt = _.forwardRef((e2, t2) => {
  let { __scopePopper: n2, virtualRef: r2, ...i2 } = e2, o2 = Kt(Jt, n2), s2 = _.useRef(null), l2 = c(t2, s2), u2 = _.useRef(null);
  return _.useEffect(() => {
    let e3 = u2.current;
    u2.current = (r2 == null ? void 0 : r2.current) || s2.current, e3 !== u2.current && o2.onAnchorChange(u2.current);
  }), r2 ? null : (0, Q.jsx)(a.div, { ...i2, ref: l2 });
});
Yt.displayName = Jt;
var Xt = `PopperContent`, [Zt, Qt] = Ut(Xt), $t = _.forwardRef((e2, t2) => {
  var _a, _b, _c, _d, _e2, _f;
  let { __scopePopper: n2, side: r2 = `bottom`, sideOffset: o2 = 0, align: s2 = `center`, alignOffset: l2 = 0, arrowPadding: u2 = 0, avoidCollisions: d2 = true, collisionBoundary: f2 = [], collisionPadding: p2 = 0, sticky: h2 = `partial`, hideWhenDetached: g2 = false, updatePositionStrategy: v2 = `optimized`, onPlaced: y2, ...b2 } = e2, x2 = Kt(Xt, n2), [S2, C2] = _.useState(null), w2 = c(t2, (e3) => C2(e3)), [T2, E2] = _.useState(null), D2 = Vt(T2), O2 = (D2 == null ? void 0 : D2.width) ?? 0, k2 = (D2 == null ? void 0 : D2.height) ?? 0, A2 = r2 + (s2 === `center` ? `` : `-` + s2), j2 = typeof p2 == `number` ? p2 : { top: 0, right: 0, bottom: 0, left: 0, ...p2 }, M2 = Array.isArray(f2) ? f2 : [f2], N2 = M2.length > 0, P2 = { padding: j2, boundary: M2.filter(rn), altBoundary: N2 }, { refs: ee2, floatingStyles: F2, placement: I2, isPositioned: L2, middlewareData: R2 } = kt({ strategy: `fixed`, placement: A2, whileElementsMounted: (...e3) => mt(...e3, { animationFrame: v2 === `always` }), elements: { reference: x2.anchor }, middleware: [jt({ mainAxis: o2 + k2, alignmentAxis: l2 }), d2 && Mt({ mainAxis: true, crossAxis: false, limiter: h2 === `partial` ? Nt() : void 0, ...P2 }), d2 && Pt({ ...P2 }), Ft({ ...P2, apply: ({ elements: e3, rects: t3, availableWidth: n3, availableHeight: r3 }) => {
    let { width: i2, height: a2 } = t3.reference, o3 = e3.floating.style;
    o3.setProperty(`--radix-popper-available-width`, `${n3}px`), o3.setProperty(`--radix-popper-available-height`, `${r3}px`), o3.setProperty(`--radix-popper-anchor-width`, `${i2}px`), o3.setProperty(`--radix-popper-anchor-height`, `${a2}px`);
  } }), T2 && Lt({ element: T2, padding: u2 }), an({ arrowWidth: O2, arrowHeight: k2 }), g2 && It({ strategy: `referenceHidden`, ...P2 })] }), [te2, ne2] = on(I2), re2 = m(y2);
  i(() => {
    L2 && (re2 == null ? void 0 : re2());
  }, [L2, re2]);
  let ie2 = (_a = R2.arrow) == null ? void 0 : _a.x, z2 = (_b = R2.arrow) == null ? void 0 : _b.y, ae2 = ((_c = R2.arrow) == null ? void 0 : _c.centerOffset) !== 0, [oe2, B2] = _.useState();
  return i(() => {
    S2 && B2(window.getComputedStyle(S2).zIndex);
  }, [S2]), (0, Q.jsx)(`div`, { ref: ee2.setFloating, "data-radix-popper-content-wrapper": ``, style: { ...F2, transform: L2 ? F2.transform : `translate(0, -200%)`, minWidth: `max-content`, zIndex: oe2, "--radix-popper-transform-origin": [(_d = R2.transformOrigin) == null ? void 0 : _d.x, (_e2 = R2.transformOrigin) == null ? void 0 : _e2.y].join(` `), ...((_f = R2.hide) == null ? void 0 : _f.referenceHidden) && { visibility: `hidden`, pointerEvents: `none` } }, dir: e2.dir, children: (0, Q.jsx)(Zt, { scope: n2, placedSide: te2, onArrowChange: E2, arrowX: ie2, arrowY: z2, shouldHideArrow: ae2, children: (0, Q.jsx)(a.div, { "data-side": te2, "data-align": ne2, ...b2, ref: w2, style: { ...b2.style, animation: L2 ? void 0 : `none` } }) }) });
});
$t.displayName = Xt;
var en = `PopperArrow`, tn = { top: `bottom`, right: `left`, bottom: `top`, left: `right` }, nn = _.forwardRef(function(e2, t2) {
  let { __scopePopper: n2, ...r2 } = e2, i2 = Qt(en, n2), a2 = tn[i2.placedSide];
  return (0, Q.jsx)(`span`, { ref: i2.onArrowChange, style: { position: `absolute`, left: i2.arrowX, top: i2.arrowY, [a2]: 0, transformOrigin: { top: ``, right: `0 0`, bottom: `center 0`, left: `100% 0` }[i2.placedSide], transform: { top: `translateY(100%)`, right: `translateY(50%) rotate(90deg) translateX(-50%)`, bottom: `rotate(180deg)`, left: `translateY(50%) rotate(-90deg) translateX(50%)` }[i2.placedSide], visibility: i2.shouldHideArrow ? `hidden` : void 0 }, children: (0, Q.jsx)(Bt, { ...r2, ref: t2, style: { ...r2.style, display: `block` } }) });
});
nn.displayName = en;
function rn(e2) {
  return e2 !== null;
}
var an = (e2) => ({ name: `transformOrigin`, options: e2, fn(t2) {
  var _a, _b, _c;
  let { placement: n2, rects: r2, middlewareData: i2 } = t2, a2 = ((_a = i2.arrow) == null ? void 0 : _a.centerOffset) !== 0, o2 = a2 ? 0 : e2.arrowWidth, s2 = a2 ? 0 : e2.arrowHeight, [c2, l2] = on(n2), u2 = { start: `0%`, center: `50%`, end: `100%` }[l2], d2 = (((_b = i2.arrow) == null ? void 0 : _b.x) ?? 0) + o2 / 2, f2 = (((_c = i2.arrow) == null ? void 0 : _c.y) ?? 0) + s2 / 2, p2 = ``, m2 = ``;
  return c2 === `bottom` ? (p2 = a2 ? u2 : `${d2}px`, m2 = `${-s2}px`) : c2 === `top` ? (p2 = a2 ? u2 : `${d2}px`, m2 = `${r2.floating.height + s2}px`) : c2 === `right` ? (p2 = `${-s2}px`, m2 = a2 ? u2 : `${f2}px`) : c2 === `left` && (p2 = `${r2.floating.width + s2}px`, m2 = a2 ? u2 : `${f2}px`), { data: { x: p2, y: m2 } };
} });
function on(e2) {
  let [t2, n2 = `center`] = e2.split(`-`);
  return [t2, n2];
}
var sn = qt, cn = Yt, ln = $t, un = nn, dn = Object.freeze({ position: `absolute`, border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: `hidden`, clip: `rect(0, 0, 0, 0)`, whiteSpace: `nowrap`, wordWrap: `normal` }), fn = `VisuallyHidden`, pn = _.forwardRef((e2, t2) => (0, Q.jsx)(a.span, { ...e2, ref: t2, style: { ...dn, ...e2.style } }));
pn.displayName = fn;
var mn = pn, [hn, gn] = f(`Tooltip`, [Wt]), _n = Wt(), vn = `TooltipProvider`, yn = 700, bn = `tooltip.open`, [xn, Sn] = hn(vn), Cn = (e2) => {
  let { __scopeTooltip: t2, delayDuration: n2 = yn, skipDelayDuration: r2 = 300, disableHoverableContent: i2 = false, children: a2 } = e2, o2 = _.useRef(true), s2 = _.useRef(false), c2 = _.useRef(0);
  return _.useEffect(() => {
    let e3 = c2.current;
    return () => window.clearTimeout(e3);
  }, []), (0, Q.jsx)(xn, { scope: t2, isOpenDelayedRef: o2, delayDuration: n2, onOpen: _.useCallback(() => {
    window.clearTimeout(c2.current), o2.current = false;
  }, []), onClose: _.useCallback(() => {
    window.clearTimeout(c2.current), c2.current = window.setTimeout(() => o2.current = true, r2);
  }, [r2]), isPointerInTransitRef: s2, onPointerInTransitChange: _.useCallback((e3) => {
    s2.current = e3;
  }, []), disableHoverableContent: i2, children: a2 });
};
Cn.displayName = vn;
var wn = `Tooltip`, [Tn, En] = hn(wn), Dn = (e2) => {
  let { __scopeTooltip: t2, children: n2, open: r2, defaultOpen: i2, onOpenChange: a2, disableHoverableContent: o2, delayDuration: s2 } = e2, c2 = Sn(wn, e2.__scopeTooltip), u2 = _n(t2), [d2, f2] = _.useState(null), p2 = l(), m2 = _.useRef(0), g2 = o2 ?? c2.disableHoverableContent, v2 = s2 ?? c2.delayDuration, y2 = _.useRef(false), [b2, x2] = h({ prop: r2, defaultProp: i2 ?? false, onChange: (e3) => {
    e3 ? (c2.onOpen(), document.dispatchEvent(new CustomEvent(bn))) : c2.onClose(), a2 == null ? void 0 : a2(e3);
  }, caller: wn }), S2 = _.useMemo(() => b2 ? y2.current ? `delayed-open` : `instant-open` : `closed`, [b2]), C2 = _.useCallback(() => {
    window.clearTimeout(m2.current), m2.current = 0, y2.current = false, x2(true);
  }, [x2]), w2 = _.useCallback(() => {
    window.clearTimeout(m2.current), m2.current = 0, x2(false);
  }, [x2]), T2 = _.useCallback(() => {
    window.clearTimeout(m2.current), m2.current = window.setTimeout(() => {
      y2.current = true, x2(true), m2.current = 0;
    }, v2);
  }, [v2, x2]);
  return _.useEffect(() => () => {
    m2.current && (m2.current = (window.clearTimeout(m2.current), 0));
  }, []), (0, Q.jsx)(sn, { ...u2, children: (0, Q.jsx)(Tn, { scope: t2, contentId: p2, open: b2, stateAttribute: S2, trigger: d2, onTriggerChange: f2, onTriggerEnter: _.useCallback(() => {
    c2.isOpenDelayedRef.current ? T2() : C2();
  }, [c2.isOpenDelayedRef, T2, C2]), onTriggerLeave: _.useCallback(() => {
    g2 ? w2() : (window.clearTimeout(m2.current), m2.current = 0);
  }, [w2, g2]), onOpen: C2, onClose: w2, disableHoverableContent: g2, children: n2 }) });
};
Dn.displayName = wn;
var On = `TooltipTrigger`, kn = _.forwardRef((e2, t2) => {
  let { __scopeTooltip: n2, ...r2 } = e2, i2 = En(On, n2), o2 = Sn(On, n2), l2 = _n(n2), u2 = _.useRef(null), d2 = c(t2, u2, i2.onTriggerChange), f2 = _.useRef(false), p2 = _.useRef(false), m2 = _.useCallback(() => f2.current = false, []);
  return _.useEffect(() => () => document.removeEventListener(`pointerup`, m2), [m2]), (0, Q.jsx)(cn, { asChild: true, ...l2, children: (0, Q.jsx)(a.button, { "aria-describedby": i2.open ? i2.contentId : void 0, "data-state": i2.stateAttribute, ...r2, ref: d2, onPointerMove: s(e2.onPointerMove, (e3) => {
    e3.pointerType !== `touch` && !p2.current && !o2.isPointerInTransitRef.current && (i2.onTriggerEnter(), p2.current = true);
  }), onPointerLeave: s(e2.onPointerLeave, () => {
    i2.onTriggerLeave(), p2.current = false;
  }), onPointerDown: s(e2.onPointerDown, () => {
    i2.open && i2.onClose(), f2.current = true, document.addEventListener(`pointerup`, m2, { once: true });
  }), onFocus: s(e2.onFocus, () => {
    f2.current || i2.onOpen();
  }), onBlur: s(e2.onBlur, i2.onClose), onClick: s(e2.onClick, i2.onClose) }) });
});
kn.displayName = On;
var An = `TooltipPortal`, [jn, Mn] = hn(An, { forceMount: void 0 }), Nn = (e2) => {
  let { __scopeTooltip: t2, forceMount: n2, children: r2, container: i2 } = e2, a2 = En(An, t2);
  return (0, Q.jsx)(jn, { scope: t2, forceMount: n2, children: (0, Q.jsx)(u, { present: n2 || a2.open, children: (0, Q.jsx)(p, { asChild: true, container: i2, children: r2 }) }) });
};
Nn.displayName = An;
var $ = `TooltipContent`, Pn = _.forwardRef((e2, t2) => {
  let n2 = Mn($, e2.__scopeTooltip), { forceMount: r2 = n2.forceMount, side: i2 = `top`, ...a2 } = e2, o2 = En($, e2.__scopeTooltip);
  return (0, Q.jsx)(u, { present: r2 || o2.open, children: o2.disableHoverableContent ? (0, Q.jsx)(zn, { side: i2, ...a2, ref: t2 }) : (0, Q.jsx)(Fn, { side: i2, ...a2, ref: t2 }) });
}), Fn = _.forwardRef((e2, t2) => {
  let n2 = En($, e2.__scopeTooltip), r2 = Sn($, e2.__scopeTooltip), i2 = _.useRef(null), a2 = c(t2, i2), [o2, s2] = _.useState(null), { trigger: l2, onClose: u2 } = n2, d2 = i2.current, { onPointerInTransitChange: f2 } = r2, p2 = _.useCallback(() => {
    s2(null), f2(false);
  }, [f2]), m2 = _.useCallback((e3, t3) => {
    let n3 = e3.currentTarget, r3 = { x: e3.clientX, y: e3.clientY }, i3 = Un(r3, Hn(r3, n3.getBoundingClientRect())), a3 = Wn(t3.getBoundingClientRect()), o3 = Kn([...i3, ...a3]);
    s2(o3), f2(true);
  }, [f2]);
  return _.useEffect(() => () => p2(), [p2]), _.useEffect(() => {
    if (l2 && d2) {
      let e3 = (e4) => m2(e4, d2), t3 = (e4) => m2(e4, l2);
      return l2.addEventListener(`pointerleave`, e3), d2.addEventListener(`pointerleave`, t3), () => {
        l2.removeEventListener(`pointerleave`, e3), d2.removeEventListener(`pointerleave`, t3);
      };
    }
  }, [l2, d2, m2, p2]), _.useEffect(() => {
    if (o2) {
      let e3 = (e4) => {
        let t3 = e4.target, n3 = { x: e4.clientX, y: e4.clientY }, r3 = (l2 == null ? void 0 : l2.contains(t3)) || (d2 == null ? void 0 : d2.contains(t3)), i3 = !Gn(n3, o2);
        r3 ? p2() : i3 && (p2(), u2());
      };
      return document.addEventListener(`pointermove`, e3), () => document.removeEventListener(`pointermove`, e3);
    }
  }, [l2, d2, o2, u2, p2]), (0, Q.jsx)(zn, { ...e2, ref: a2 });
}), [In, Ln] = hn(wn, { isInside: false }), Rn = o(`TooltipContent`), zn = _.forwardRef((e2, t2) => {
  let { __scopeTooltip: n2, children: r2, "aria-label": i2, onEscapeKeyDown: a2, onPointerDownOutside: o2, ...s2 } = e2, c2 = En($, n2), l2 = _n(n2), { onClose: u2 } = c2;
  return _.useEffect(() => (document.addEventListener(bn, u2), () => document.removeEventListener(bn, u2)), [u2]), _.useEffect(() => {
    if (c2.trigger) {
      let e3 = (e4) => {
        var _a;
        ((_a = e4.target) == null ? void 0 : _a.contains(c2.trigger)) && u2();
      };
      return window.addEventListener(`scroll`, e3, { capture: true }), () => window.removeEventListener(`scroll`, e3, { capture: true });
    }
  }, [c2.trigger, u2]), (0, Q.jsx)(d, { asChild: true, disableOutsidePointerEvents: false, onEscapeKeyDown: a2, onPointerDownOutside: o2, onFocusOutside: (e3) => e3.preventDefault(), onDismiss: u2, children: (0, Q.jsxs)(ln, { "data-state": c2.stateAttribute, ...l2, ...s2, ref: t2, style: { ...s2.style, "--radix-tooltip-content-transform-origin": `var(--radix-popper-transform-origin)`, "--radix-tooltip-content-available-width": `var(--radix-popper-available-width)`, "--radix-tooltip-content-available-height": `var(--radix-popper-available-height)`, "--radix-tooltip-trigger-width": `var(--radix-popper-anchor-width)`, "--radix-tooltip-trigger-height": `var(--radix-popper-anchor-height)` }, children: [(0, Q.jsx)(Rn, { children: r2 }), (0, Q.jsx)(In, { scope: n2, isInside: true, children: (0, Q.jsx)(mn, { id: c2.contentId, role: `tooltip`, children: i2 || r2 }) })] }) });
});
Pn.displayName = $;
var Bn = `TooltipArrow`, Vn = _.forwardRef((e2, t2) => {
  let { __scopeTooltip: n2, ...r2 } = e2, i2 = _n(n2);
  return Ln(Bn, n2).isInside ? null : (0, Q.jsx)(un, { ...i2, ...r2, ref: t2 });
});
Vn.displayName = Bn;
function Hn(e2, t2) {
  let n2 = Math.abs(t2.top - e2.y), r2 = Math.abs(t2.bottom - e2.y), i2 = Math.abs(t2.right - e2.x), a2 = Math.abs(t2.left - e2.x);
  switch (Math.min(n2, r2, i2, a2)) {
    case a2:
      return `left`;
    case i2:
      return `right`;
    case n2:
      return `top`;
    case r2:
      return `bottom`;
    default:
      throw Error(`unreachable`);
  }
}
function Un(e2, t2, n2 = 5) {
  let r2 = [];
  switch (t2) {
    case `top`:
      r2.push({ x: e2.x - n2, y: e2.y + n2 }, { x: e2.x + n2, y: e2.y + n2 });
      break;
    case `bottom`:
      r2.push({ x: e2.x - n2, y: e2.y - n2 }, { x: e2.x + n2, y: e2.y - n2 });
      break;
    case `left`:
      r2.push({ x: e2.x + n2, y: e2.y - n2 }, { x: e2.x + n2, y: e2.y + n2 });
      break;
    case `right`:
      r2.push({ x: e2.x - n2, y: e2.y - n2 }, { x: e2.x - n2, y: e2.y + n2 });
  }
  return r2;
}
function Wn(e2) {
  let { top: t2, right: n2, bottom: r2, left: i2 } = e2;
  return [{ x: i2, y: t2 }, { x: n2, y: t2 }, { x: n2, y: r2 }, { x: i2, y: r2 }];
}
function Gn(e2, t2) {
  let { x: n2, y: r2 } = e2, i2 = false;
  for (let e3 = 0, a2 = t2.length - 1; e3 < t2.length; a2 = e3++) {
    let o2 = t2[e3], s2 = t2[a2], c2 = o2.x, l2 = o2.y, u2 = s2.x, d2 = s2.y;
    l2 > r2 != d2 > r2 && n2 < (u2 - c2) * (r2 - l2) / (d2 - l2) + c2 && (i2 = !i2);
  }
  return i2;
}
function Kn(e2) {
  let t2 = e2.slice();
  return t2.sort((e3, t3) => e3.x < t3.x ? -1 : e3.x > t3.x ? 1 : e3.y < t3.y ? -1 : +(e3.y > t3.y)), qn(t2);
}
function qn(e2) {
  if (e2.length <= 1) return e2.slice();
  let t2 = [];
  for (let n3 = 0; n3 < e2.length; n3++) {
    let r2 = e2[n3];
    for (; t2.length >= 2; ) {
      let e3 = t2[t2.length - 1], n4 = t2[t2.length - 2];
      if ((e3.x - n4.x) * (r2.y - n4.y) >= (e3.y - n4.y) * (r2.x - n4.x)) t2.pop();
      else break;
    }
    t2.push(r2);
  }
  t2.pop();
  let n2 = [];
  for (let t3 = e2.length - 1; t3 >= 0; t3--) {
    let r2 = e2[t3];
    for (; n2.length >= 2; ) {
      let e3 = n2[n2.length - 1], t4 = n2[n2.length - 2];
      if ((e3.x - t4.x) * (r2.y - t4.y) >= (e3.y - t4.y) * (r2.x - t4.x)) n2.pop();
      else break;
    }
    n2.push(r2);
  }
  return n2.pop(), t2.length === 1 && n2.length === 1 && t2[0].x === n2[0].x && t2[0].y === n2[0].y ? t2 : t2.concat(n2);
}
var Jn = Cn, Yn = Dn, Xn = kn, Zn = Nn, Qn = Pn;
function $n({ children: e2 }) {
  return (0, Q.jsx)(Jn, { delayDuration: 0, children: e2 });
}
function er({ children: e2, content: t2, side: n2 = `bottom` }) {
  return (0, Q.jsxs)(Yn, { children: [(0, Q.jsx)(Xn, { asChild: true, children: e2 }), (0, Q.jsx)(Zn, { children: (0, Q.jsx)(Qn, { side: n2, sideOffset: 6, className: `z-50 bg-card px-2.5 py-1.5 text-xs text-text shadow-lg border border-border`, children: t2 }) })] });
}
function tr({ children: e2, className: t2 }) {
  return (0, Q.jsx)(`span`, { className: g(`inline-flex items-center justify-center min-w-[16px]`, `px-1 leading-[14px] text-[10px] font-mono tracking-wider uppercase`, `text-text border border-border/70 bg-surface/80`, t2), children: e2 });
}
function nr({ children: e2, title: t2, description: n2, shortcut: r2, accent: i2, icon: a2, preview: o2, tip: s2, side: c2 = `top`, align: l2 = `center`, delayDuration: u2 = 0 }) {
  return (0, Q.jsxs)(Yn, { delayDuration: u2, children: [(0, Q.jsx)(Xn, { asChild: true, children: e2 }), (0, Q.jsx)(Zn, { children: (0, Q.jsxs)(Qn, { side: c2, align: l2, sideOffset: 8, collisionPadding: 8, className: g(`z-50 max-w-[300px] overflow-hidden`, `bg-gradient-to-b from-card to-surface text-text border border-border shadow-xl`, `data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95`, `data-[state=closed]:animate-out data-[state=closed]:fade-out-0`), children: [i2 && (0, Q.jsx)(`div`, { className: g(`h-[2px] w-full`, i2) }), (0, Q.jsxs)(`div`, { className: `px-3 py-2`, children: [(0, Q.jsxs)(`div`, { className: `flex items-start gap-2.5`, children: [a2 && (0, Q.jsx)(`div`, { className: g(`flex items-center justify-center shrink-0`, `w-7 h-7 border border-border/60 bg-surface/60`), children: a2 }), (0, Q.jsxs)(`div`, { className: `flex-1 min-w-0`, children: [(0, Q.jsxs)(`div`, { className: `flex items-baseline justify-between gap-3`, children: [(0, Q.jsx)(`span`, { className: `text-[12px] font-semibold tracking-tight truncate`, children: t2 }), r2 && (0, Q.jsx)(tr, { children: r2 })] }), n2 && (0, Q.jsx)(`p`, { className: `mt-0.5 text-[10.5px] text-text-muted leading-snug`, children: n2 })] })] }), o2 && (0, Q.jsx)(`div`, { className: `mt-2 pt-2 border-t border-border/40`, children: o2 }), s2 && (0, Q.jsx)(`p`, { className: `mt-2 text-[10px] text-text-muted/80 italic leading-snug`, children: s2 })] })] }) })] });
}
export {
  mt as _,
  un as a,
  Wt as c,
  It as d,
  Nt as f,
  kt as g,
  Ft as h,
  cn as i,
  Lt as l,
  Mt as m,
  er as n,
  ln as o,
  jt as p,
  $n as r,
  sn as s,
  nr as t,
  Pt as u
};
