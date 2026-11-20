import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n, j as r } from "./three-drei-_EcrAYRL.js";
var i = e(t(), 1), a = n();
typeof window < `u` && window.document && window.document.createElement;
function o(e2, t2, { checkForDefaultPrevented: n2 = true } = {}) {
  return function(r2) {
    if (e2 == null ? void 0 : e2(r2), n2 === false || !r2.defaultPrevented) return t2 == null ? void 0 : t2(r2);
  };
}
var s = e(r(), 1);
function c(e2, t2) {
  if (typeof e2 == `function`) return e2(t2);
  e2 != null && (e2.current = t2);
}
function l(...e2) {
  return (t2) => {
    let n2 = false, r2 = e2.map((e3) => {
      let r3 = c(e3, t2);
      return !n2 && typeof r3 == `function` && (n2 = true), r3;
    });
    if (n2) return () => {
      for (let t3 = 0; t3 < r2.length; t3++) {
        let n3 = r2[t3];
        typeof n3 == `function` ? n3() : c(e2[t3], null);
      }
    };
  };
}
function u(...e2) {
  return i.useCallback(l(...e2), e2);
}
function d(e2, t2) {
  let n2 = i.createContext(t2), r2 = (e3) => {
    let { children: t3, ...r3 } = e3, o3 = i.useMemo(() => r3, Object.values(r3));
    return (0, a.jsx)(n2.Provider, { value: o3, children: t3 });
  };
  r2.displayName = e2 + `Provider`;
  function o2(r3) {
    let a2 = i.useContext(n2);
    if (a2) return a2;
    if (t2 !== void 0) return t2;
    throw Error(`\`${r3}\` must be used within \`${e2}\``);
  }
  return [r2, o2];
}
function f(e2, t2 = []) {
  let n2 = [];
  function r2(t3, r3) {
    let o3 = i.createContext(r3), s2 = n2.length;
    n2 = [...n2, r3];
    let c2 = (t4) => {
      var _a;
      let { scope: n3, children: r4, ...c3 } = t4, l3 = ((_a = n3 == null ? void 0 : n3[e2]) == null ? void 0 : _a[s2]) || o3, u2 = i.useMemo(() => c3, Object.values(c3));
      return (0, a.jsx)(l3.Provider, { value: u2, children: r4 });
    };
    c2.displayName = t3 + `Provider`;
    function l2(n3, a2) {
      var _a;
      let c3 = ((_a = a2 == null ? void 0 : a2[e2]) == null ? void 0 : _a[s2]) || o3, l3 = i.useContext(c3);
      if (l3) return l3;
      if (r3 !== void 0) return r3;
      throw Error(`\`${n3}\` must be used within \`${t3}\``);
    }
    return [c2, l2];
  }
  let o2 = () => {
    let t3 = n2.map((e3) => i.createContext(e3));
    return function(n3) {
      let r3 = (n3 == null ? void 0 : n3[e2]) || t3;
      return i.useMemo(() => ({ [`__scope${e2}`]: { ...n3, [e2]: r3 } }), [n3, r3]);
    };
  };
  return o2.scopeName = e2, [r2, p(o2, ...t2)];
}
function p(...e2) {
  let t2 = e2[0];
  if (e2.length === 1) return t2;
  let n2 = () => {
    let n3 = e2.map((e3) => ({ useScope: e3(), scopeName: e3.scopeName }));
    return function(e3) {
      let r2 = n3.reduce((t3, { useScope: n4, scopeName: r3 }) => {
        let i2 = n4(e3)[`__scope${r3}`];
        return { ...t3, ...i2 };
      }, {});
      return i.useMemo(() => ({ [`__scope${t2.scopeName}`]: r2 }), [r2]);
    };
  };
  return n2.scopeName = t2.scopeName, n2;
}
function m(e2) {
  let t2 = h(e2), n2 = i.forwardRef((e3, n3) => {
    let { children: r2, ...o2 } = e3, s2 = i.Children.toArray(r2), c2 = s2.find(v);
    if (c2) {
      let e4 = c2.props.children, r3 = s2.map((t3) => t3 === c2 ? i.Children.count(e4) > 1 ? i.Children.only(null) : i.isValidElement(e4) ? e4.props.children : null : t3);
      return (0, a.jsx)(t2, { ...o2, ref: n3, children: i.isValidElement(e4) ? i.cloneElement(e4, void 0, r3) : null });
    }
    return (0, a.jsx)(t2, { ...o2, ref: n3, children: r2 });
  });
  return n2.displayName = `${e2}.Slot`, n2;
}
function h(e2) {
  let t2 = i.forwardRef((e3, t3) => {
    let { children: n2, ...r2 } = e3;
    if (i.isValidElement(n2)) {
      let e4 = b(n2), a2 = y(r2, n2.props);
      return n2.type !== i.Fragment && (a2.ref = t3 ? l(t3, e4) : e4), i.cloneElement(n2, a2);
    }
    return i.Children.count(n2) > 1 ? i.Children.only(null) : null;
  });
  return t2.displayName = `${e2}.SlotClone`, t2;
}
var g = Symbol(`radix.slottable`);
function _(e2) {
  let t2 = ({ children: e3 }) => (0, a.jsx)(a.Fragment, { children: e3 });
  return t2.displayName = `${e2}.Slottable`, t2.__radixId = g, t2;
}
function v(e2) {
  return i.isValidElement(e2) && typeof e2.type == `function` && `__radixId` in e2.type && e2.type.__radixId === g;
}
function y(e2, t2) {
  let n2 = { ...t2 };
  for (let r2 in t2) {
    let i2 = e2[r2], a2 = t2[r2];
    /^on[A-Z]/.test(r2) ? i2 && a2 ? n2[r2] = (...e3) => {
      let t3 = a2(...e3);
      return i2(...e3), t3;
    } : i2 && (n2[r2] = i2) : r2 === `style` ? n2[r2] = { ...i2, ...a2 } : r2 === `className` && (n2[r2] = [i2, a2].filter(Boolean).join(` `));
  }
  return { ...e2, ...n2 };
}
function b(e2) {
  var _a, _b;
  let t2 = (_a = Object.getOwnPropertyDescriptor(e2.props, `ref`)) == null ? void 0 : _a.get, n2 = t2 && `isReactWarning` in t2 && t2.isReactWarning;
  return n2 ? e2.ref : (t2 = (_b = Object.getOwnPropertyDescriptor(e2, `ref`)) == null ? void 0 : _b.get, n2 = t2 && `isReactWarning` in t2 && t2.isReactWarning, n2 ? e2.props.ref : e2.props.ref || e2.ref);
}
var x = [`a`, `button`, `div`, `form`, `h2`, `h3`, `img`, `input`, `label`, `li`, `nav`, `ol`, `p`, `select`, `span`, `svg`, `ul`].reduce((e2, t2) => {
  let n2 = m(`Primitive.${t2}`), r2 = i.forwardRef((e3, r3) => {
    let { asChild: i2, ...o2 } = e3, s2 = i2 ? n2 : t2;
    return typeof window < `u` && (window[Symbol.for(`radix-ui`)] = true), (0, a.jsx)(s2, { ...o2, ref: r3 });
  });
  return r2.displayName = `Primitive.${t2}`, { ...e2, [t2]: r2 };
}, {});
function S(e2, t2) {
  e2 && s.flushSync(() => e2.dispatchEvent(t2));
}
function C(e2) {
  let t2 = i.useRef(e2);
  return i.useEffect(() => {
    t2.current = e2;
  }), i.useMemo(() => (...e3) => {
    var _a;
    return (_a = t2.current) == null ? void 0 : _a.call(t2, ...e3);
  }, []);
}
function w(e2, t2 = globalThis == null ? void 0 : globalThis.document) {
  let n2 = C(e2);
  i.useEffect(() => {
    let e3 = (e4) => {
      e4.key === `Escape` && n2(e4);
    };
    return t2.addEventListener(`keydown`, e3, { capture: true }), () => t2.removeEventListener(`keydown`, e3, { capture: true });
  }, [n2, t2]);
}
var T = `DismissableLayer`, E = `dismissableLayer.update`, D = `dismissableLayer.pointerDownOutside`, O = `dismissableLayer.focusOutside`, k, A = i.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), j = i.forwardRef((e2, t2) => {
  let { disableOutsidePointerEvents: n2 = false, onEscapeKeyDown: r2, onPointerDownOutside: s2, onFocusOutside: c2, onInteractOutside: l2, onDismiss: d2, ...f2 } = e2, p2 = i.useContext(A), [m2, h2] = i.useState(null), g2 = (m2 == null ? void 0 : m2.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, _2] = i.useState({}), v2 = u(t2, (e3) => h2(e3)), y2 = Array.from(p2.layers), [b2] = [...p2.layersWithOutsidePointerEventsDisabled].slice(-1), S2 = y2.indexOf(b2), C2 = m2 ? y2.indexOf(m2) : -1, T2 = p2.layersWithOutsidePointerEventsDisabled.size > 0, D2 = C2 >= S2, O2 = P((e3) => {
    let t3 = e3.target, n3 = [...p2.branches].some((e4) => e4.contains(t3));
    D2 && !n3 && (s2 == null ? void 0 : s2(e3), l2 == null ? void 0 : l2(e3), e3.defaultPrevented || (d2 == null ? void 0 : d2()));
  }, g2), j2 = F((e3) => {
    let t3 = e3.target;
    [...p2.branches].some((e4) => e4.contains(t3)) || (c2 == null ? void 0 : c2(e3), l2 == null ? void 0 : l2(e3), e3.defaultPrevented || (d2 == null ? void 0 : d2()));
  }, g2);
  return w((e3) => {
    C2 === p2.layers.size - 1 && (r2 == null ? void 0 : r2(e3), !e3.defaultPrevented && d2 && (e3.preventDefault(), d2()));
  }, g2), i.useEffect(() => {
    if (m2) return n2 && (p2.layersWithOutsidePointerEventsDisabled.size === 0 && (k = g2.body.style.pointerEvents, g2.body.style.pointerEvents = `none`), p2.layersWithOutsidePointerEventsDisabled.add(m2)), p2.layers.add(m2), I(), () => {
      n2 && p2.layersWithOutsidePointerEventsDisabled.size === 1 && (g2.body.style.pointerEvents = k);
    };
  }, [m2, g2, n2, p2]), i.useEffect(() => () => {
    m2 && (p2.layers.delete(m2), p2.layersWithOutsidePointerEventsDisabled.delete(m2), I());
  }, [m2, p2]), i.useEffect(() => {
    let e3 = () => _2({});
    return document.addEventListener(E, e3), () => document.removeEventListener(E, e3);
  }, []), (0, a.jsx)(x.div, { ...f2, ref: v2, style: { pointerEvents: T2 ? D2 ? `auto` : `none` : void 0, ...e2.style }, onFocusCapture: o(e2.onFocusCapture, j2.onFocusCapture), onBlurCapture: o(e2.onBlurCapture, j2.onBlurCapture), onPointerDownCapture: o(e2.onPointerDownCapture, O2.onPointerDownCapture) });
});
j.displayName = T;
var M = `DismissableLayerBranch`, N = i.forwardRef((e2, t2) => {
  let n2 = i.useContext(A), r2 = i.useRef(null), o2 = u(t2, r2);
  return i.useEffect(() => {
    let e3 = r2.current;
    if (e3) return n2.branches.add(e3), () => {
      n2.branches.delete(e3);
    };
  }, [n2.branches]), (0, a.jsx)(x.div, { ...e2, ref: o2 });
});
N.displayName = M;
function P(e2, t2 = globalThis == null ? void 0 : globalThis.document) {
  let n2 = C(e2), r2 = i.useRef(false), a2 = i.useRef(() => {
  });
  return i.useEffect(() => {
    let e3 = (e4) => {
      if (e4.target && !r2.current) {
        let r3 = function() {
          L(D, n2, i3, { discrete: true });
        }, i3 = { originalEvent: e4 };
        e4.pointerType === `touch` ? (t2.removeEventListener(`click`, a2.current), a2.current = r3, t2.addEventListener(`click`, a2.current, { once: true })) : r3();
      } else t2.removeEventListener(`click`, a2.current);
      r2.current = false;
    }, i2 = window.setTimeout(() => {
      t2.addEventListener(`pointerdown`, e3);
    }, 0);
    return () => {
      window.clearTimeout(i2), t2.removeEventListener(`pointerdown`, e3), t2.removeEventListener(`click`, a2.current);
    };
  }, [t2, n2]), { onPointerDownCapture: () => r2.current = true };
}
function F(e2, t2 = globalThis == null ? void 0 : globalThis.document) {
  let n2 = C(e2), r2 = i.useRef(false);
  return i.useEffect(() => {
    let e3 = (e4) => {
      e4.target && !r2.current && L(O, n2, { originalEvent: e4 }, { discrete: false });
    };
    return t2.addEventListener(`focusin`, e3), () => t2.removeEventListener(`focusin`, e3);
  }, [t2, n2]), { onFocusCapture: () => r2.current = true, onBlurCapture: () => r2.current = false };
}
function I() {
  let e2 = new CustomEvent(E);
  document.dispatchEvent(e2);
}
function L(e2, t2, n2, { discrete: r2 }) {
  let i2 = n2.originalEvent.target, a2 = new CustomEvent(e2, { bubbles: false, cancelable: true, detail: n2 });
  t2 && i2.addEventListener(e2, t2, { once: true }), r2 ? S(i2, a2) : i2.dispatchEvent(a2);
}
var R = (globalThis == null ? void 0 : globalThis.document) ? i.useLayoutEffect : () => {
}, z = i.useId || (() => void 0), B = 0;
function V(e2) {
  let [t2, n2] = i.useState(z());
  return R(() => {
    e2 || n2((e3) => e3 ?? String(B++));
  }, [e2]), e2 || (t2 ? `radix-${t2}` : ``);
}
var H = `Portal`, U = i.forwardRef((e2, t2) => {
  var _a;
  let { container: n2, ...r2 } = e2, [o2, c2] = i.useState(false);
  R(() => c2(true), []);
  let l2 = n2 || o2 && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return l2 ? s.createPortal((0, a.jsx)(x.div, { ...r2, ref: t2 }), l2) : null;
});
U.displayName = H;
function W(e2, t2) {
  return i.useReducer((e3, n2) => t2[e3][n2] ?? e3, e2);
}
var G = (e2) => {
  let { present: t2, children: n2 } = e2, r2 = K(t2), a2 = typeof n2 == `function` ? n2({ present: r2.isPresent }) : i.Children.only(n2), o2 = u(r2.ref, J(a2));
  return typeof n2 == `function` || r2.isPresent ? i.cloneElement(a2, { ref: o2 }) : null;
};
G.displayName = `Presence`;
function K(e2) {
  let [t2, n2] = i.useState(), r2 = i.useRef(null), a2 = i.useRef(e2), o2 = i.useRef(`none`), [s2, c2] = W(e2 ? `mounted` : `unmounted`, { mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` }, unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` }, unmounted: { MOUNT: `mounted` } });
  return i.useEffect(() => {
    let e3 = q(r2.current);
    o2.current = s2 === `mounted` ? e3 : `none`;
  }, [s2]), R(() => {
    let t3 = r2.current, n3 = a2.current;
    if (n3 !== e2) {
      let r3 = o2.current, i2 = q(t3);
      e2 ? c2(`MOUNT`) : i2 === `none` || (t3 == null ? void 0 : t3.display) === `none` ? c2(`UNMOUNT`) : c2(n3 && r3 !== i2 ? `ANIMATION_OUT` : `UNMOUNT`), a2.current = e2;
    }
  }, [e2, c2]), R(() => {
    if (t2) {
      let e3, n3 = t2.ownerDocument.defaultView ?? window, i2 = (i3) => {
        let o3 = q(r2.current).includes(CSS.escape(i3.animationName));
        if (i3.target === t2 && o3 && (c2(`ANIMATION_END`), !a2.current)) {
          let r3 = t2.style.animationFillMode;
          t2.style.animationFillMode = `forwards`, e3 = n3.setTimeout(() => {
            t2.style.animationFillMode === `forwards` && (t2.style.animationFillMode = r3);
          });
        }
      }, s3 = (e4) => {
        e4.target === t2 && (o2.current = q(r2.current));
      };
      return t2.addEventListener(`animationstart`, s3), t2.addEventListener(`animationcancel`, i2), t2.addEventListener(`animationend`, i2), () => {
        n3.clearTimeout(e3), t2.removeEventListener(`animationstart`, s3), t2.removeEventListener(`animationcancel`, i2), t2.removeEventListener(`animationend`, i2);
      };
    }
    c2(`ANIMATION_END`);
  }, [t2, c2]), { isPresent: [`mounted`, `unmountSuspended`].includes(s2), ref: i.useCallback((e3) => {
    r2.current = e3 ? getComputedStyle(e3) : null, n2(e3);
  }, []) };
}
function q(e2) {
  return (e2 == null ? void 0 : e2.animationName) || `none`;
}
function J(e2) {
  var _a, _b;
  let t2 = (_a = Object.getOwnPropertyDescriptor(e2.props, `ref`)) == null ? void 0 : _a.get, n2 = t2 && `isReactWarning` in t2 && t2.isReactWarning;
  return n2 ? e2.ref : (t2 = (_b = Object.getOwnPropertyDescriptor(e2, `ref`)) == null ? void 0 : _b.get, n2 = t2 && `isReactWarning` in t2 && t2.isReactWarning, n2 ? e2.props.ref : e2.props.ref || e2.ref);
}
var Y = i.useInsertionEffect || R;
function X({ prop: e2, defaultProp: t2, onChange: n2 = () => {
}, caller: r2 }) {
  let [a2, o2, s2] = Z({ defaultProp: t2, onChange: n2 }), c2 = e2 !== void 0, l2 = c2 ? e2 : a2;
  {
    let t3 = i.useRef(e2 !== void 0);
    i.useEffect(() => {
      let e3 = t3.current;
      e3 !== c2 && console.warn(`${r2} is changing from ${e3 ? `controlled` : `uncontrolled`} to ${c2 ? `controlled` : `uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t3.current = c2;
    }, [c2, r2]);
  }
  return [l2, i.useCallback((t3) => {
    var _a;
    if (c2) {
      let n3 = Q(t3) ? t3(e2) : t3;
      n3 !== e2 && ((_a = s2.current) == null ? void 0 : _a.call(s2, n3));
    } else o2(t3);
  }, [c2, e2, o2, s2])];
}
function Z({ defaultProp: e2, onChange: t2 }) {
  let [n2, r2] = i.useState(e2), a2 = i.useRef(n2), o2 = i.useRef(t2);
  return Y(() => {
    o2.current = t2;
  }, [t2]), i.useEffect(() => {
    var _a;
    a2.current !== n2 && ((_a = o2.current) == null ? void 0 : _a.call(o2, n2), a2.current = n2);
  }, [n2, a2]), [n2, r2, o2];
}
function Q(e2) {
  return typeof e2 == `function`;
}
export {
  R as a,
  x as c,
  _ as d,
  d as f,
  o as g,
  u as h,
  V as i,
  S as l,
  l as m,
  G as n,
  j as o,
  f as p,
  U as r,
  C as s,
  X as t,
  m as u
};
