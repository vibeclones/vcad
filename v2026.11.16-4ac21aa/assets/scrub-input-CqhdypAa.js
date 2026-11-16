import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { t as r } from "./SSRBase.es-DslTvOt6.js";
import { t as i } from "./Plus.es-BDPop4l-.js";
import { t as a } from "./utils-D0T3A-kS.js";
import { n as o } from "./tooltip-i4xVbcXN.js";
var s = e(t(), 1), c = /* @__PURE__ */ new Map([[`bold`, s.createElement(s.Fragment, null, s.createElement(`path`, { d: `M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z` }))], [`duotone`, s.createElement(s.Fragment, null, s.createElement(`path`, { d: `M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z`, opacity: `0.2` }), s.createElement(`path`, { d: `M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z` }))], [`fill`, s.createElement(s.Fragment, null, s.createElement(`path`, { d: `M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z` }))], [`light`, s.createElement(s.Fragment, null, s.createElement(`path`, { d: `M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z` }))], [`regular`, s.createElement(s.Fragment, null, s.createElement(`path`, { d: `M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z` }))], [`thin`, s.createElement(s.Fragment, null, s.createElement(`path`, { d: `M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z` }))]]), l = s.forwardRef((e2, t2) => s.createElement(r, { ref: t2, ...e2, weights: c }));
l.displayName = `MinusIcon`;
var u = l, d = n(), f = typeof window < `u` && typeof window.matchMedia == `function` && window.matchMedia(`(pointer: coarse)`).matches;
function p(e2, t2 = 3) {
  let n2 = 10 ** t2;
  return Math.round(e2 * n2) / n2;
}
function m({ label: e2, value: t2, onChange: n2, step: r2 = 1, min: c2 = -1 / 0, max: l2 = 1 / 0, unit: m2, className: h, compact: g = false, tooltip: _, onScrubStart: v, onScrubEnd: y, primeKey: b, onCommit: x, expression: S = null, onBind: C, validateExpression: w, resolvedValue: T }) {
  let E = S ?? String(p(t2)), [D, O] = (0, s.useState)(E), [k, A] = (0, s.useState)(false), [j, M] = (0, s.useState)(false), [N, P] = (0, s.useState)(null), F = (0, s.useRef)(null), I = (0, s.useRef)(0), L = (0, s.useRef)(0);
  (0, s.useEffect)(() => {
    !k && !j && (O(S ?? String(p(t2))), P(null));
  }, [t2, S, k, j]);
  function R() {
    let e3 = D.trim(), r3 = parseFloat(e3);
    if (!isNaN(r3) && String(r3) === e3) {
      let e4 = Math.max(c2, Math.min(l2, r3));
      S && C && C(null), n2(e4), P(null);
    } else if (e3.length > 0 && C) {
      let t3 = (w == null ? void 0 : w(e3)) ?? null;
      if (t3) {
        P(t3), A(false), x == null ? void 0 : x();
        return;
      }
      C(e3), P(null);
    } else isNaN(r3) ? (O(S ?? String(p(t2))), P(null)) : (n2(Math.max(c2, Math.min(l2, r3))), P(null));
    A(false), x == null ? void 0 : x();
  }
  let z = (0, s.useCallback)((e3) => {
    f || e3.pointerType !== `mouse` || e3.button !== 0 || k || (S ?? (e3.preventDefault(), M(true), I.current = e3.clientX, L.current = t2, v == null ? void 0 : v()));
  }, [k, t2, v, S]), B = (0, s.useCallback)((e3) => {
    let i2 = p(t2 + e3 * r2);
    n2(Math.max(c2, Math.min(l2, i2)));
  }, [t2, r2, c2, l2, n2]), V = (0, s.useCallback)((e3) => {
    if (!j) return;
    let t3 = e3.clientX - I.current;
    I.current = e3.clientX;
    let i2 = 1;
    e3.shiftKey && (i2 = 0.1), e3.altKey && (i2 = 10);
    let a2 = t3 * r2 * i2, o2 = p(L.current + a2), s2 = Math.max(c2, Math.min(l2, o2));
    L.current = s2, n2(s2);
  }, [j, r2, c2, l2, n2]), H = (0, s.useCallback)(() => {
    j && (M(false), y == null ? void 0 : y());
  }, [j, y]);
  (0, s.useEffect)(() => {
    if (j) return window.addEventListener(`pointermove`, V), window.addEventListener(`pointerup`, H), () => {
      window.removeEventListener(`pointermove`, V), window.removeEventListener(`pointerup`, H);
    };
  }, [j, V, H]), (0, s.useEffect)(() => {
    if (!b) return;
    let e3 = (e4) => {
      var _a;
      ((_a = e4.detail) == null ? void 0 : _a.param) === b && (A(true), setTimeout(() => {
        var _a2;
        (_a2 = F.current) == null ? void 0 : _a2.select();
      }, 0));
    };
    return window.addEventListener(`vcad:prime-property-input`, e3), () => window.removeEventListener(`vcad:prime-property-input`, e3);
  }, [b]);
  function U() {
    A(true), setTimeout(() => {
      var _a;
      return (_a = F.current) == null ? void 0 : _a.select();
    }, 0);
  }
  let W = (0, d.jsx)(`span`, { className: a(`shrink-0 text-text-muted font-medium`, g ? `text-[9px] w-3` : `text-[10px] w-4`), children: e2 }), G = S != null;
  return (0, d.jsxs)(`label`, { className: a(`flex items-center gap-1.5 text-xs`, h), title: N ?? (G ? `${S} = ${p(T ?? t2)}${m2 ? ` ${m2}` : ``}` : void 0), children: [_ ? (0, d.jsx)(o, { content: _, side: `top`, children: W }) : W, f && !g && (0, d.jsx)(`button`, { type: `button`, onClick: () => B(-1), className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-text-muted active:bg-hover`, "aria-label": `Decrease ${e2}`, children: (0, d.jsx)(u, { size: 14 }) }), (0, d.jsx)(`input`, { ref: F, type: f && k ? `number` : `text`, inputMode: f ? `decimal` : void 0, value: k ? D : E, onChange: (e3) => O(e3.target.value), onBlur: R, onFocus: () => {
    f && (A(true), setTimeout(() => {
      var _a;
      return (_a = F.current) == null ? void 0 : _a.select();
    }, 0));
  }, onKeyDown: (e3) => {
    e3.key === `Enter` && R(), e3.key === `Escape` && (O(E), A(false), P(null));
  }, onPointerDown: z, onDoubleClick: U, readOnly: !k && !f, className: a(`flex-1 min-w-0 rounded-md bg-card border text-text outline-none transition-colors text-center`, `hover:border-text-muted focus:border-brand`, N ? `border-red-500` : G ? `border-brand/50 text-brand font-mono` : `border-border`, !k && !f && !G && `cursor-ew-resize select-none`, !k && G && `cursor-text`, j && `cursor-ew-resize`, g ? `px-1 py-0.5 text-[10px]` : `px-2 py-1 text-xs`, f && !g && `h-9 text-sm tabular-nums`) }), f && !g && (0, d.jsx)(`button`, { type: `button`, onClick: () => B(1), className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-text-muted active:bg-hover`, "aria-label": `Increase ${e2}`, children: (0, d.jsx)(i, { size: 14 }) }), !g && (0, d.jsx)(`span`, { className: a(`text-[10px] shrink-0`, N ? `text-red-500` : `text-text-muted`), children: G ? `= ${p(T ?? t2)}` : m2 })] });
}
export {
  m as t
};
