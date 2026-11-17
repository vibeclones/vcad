import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { c as r, f as i, g as a, h as o, i as s, n as c, o as l, p as u, r as d, s as f, t as p, u as m } from "./dist-Dt-xZb1V.js";
var h = n(), g = e(t(), 1), _ = 0;
function v() {
  g.useEffect(() => {
    let e2 = document.querySelectorAll(`[data-radix-focus-guard]`);
    return document.body.insertAdjacentElement(`afterbegin`, e2[0] ?? y()), document.body.insertAdjacentElement(`beforeend`, e2[1] ?? y()), _++, () => {
      _ === 1 && document.querySelectorAll(`[data-radix-focus-guard]`).forEach((e3) => e3.remove()), _--;
    };
  }, []);
}
function y() {
  let e2 = document.createElement(`span`);
  return e2.setAttribute(`data-radix-focus-guard`, ``), e2.tabIndex = 0, e2.style.outline = `none`, e2.style.opacity = `0`, e2.style.position = `fixed`, e2.style.pointerEvents = `none`, e2;
}
var b = `focusScope.autoFocusOnMount`, x = `focusScope.autoFocusOnUnmount`, S = { bubbles: false, cancelable: true }, C = `FocusScope`, w = g.forwardRef((e2, t2) => {
  let { loop: n2 = false, trapped: i2 = false, onMountAutoFocus: a2, onUnmountAutoFocus: s2, ...c2 } = e2, [l2, u2] = g.useState(null), d2 = f(a2), p2 = f(s2), m2 = g.useRef(null), _2 = o(t2, (e3) => u2(e3)), v2 = g.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  g.useEffect(() => {
    if (i2) {
      let e3 = function(e4) {
        if (v2.paused || !l2) return;
        let t4 = e4.target;
        l2.contains(t4) ? m2.current = t4 : T(m2.current, { select: true });
      }, t3 = function(e4) {
        if (v2.paused || !l2) return;
        let t4 = e4.relatedTarget;
        t4 !== null && (l2.contains(t4) || T(m2.current, { select: true }));
      }, n3 = function(e4) {
        if (document.activeElement === document.body) for (let t4 of e4) t4.removedNodes.length > 0 && T(l2);
      };
      document.addEventListener(`focusin`, e3), document.addEventListener(`focusout`, t3);
      let r2 = new MutationObserver(n3);
      return l2 && r2.observe(l2, { childList: true, subtree: true }), () => {
        document.removeEventListener(`focusin`, e3), document.removeEventListener(`focusout`, t3), r2.disconnect();
      };
    }
  }, [i2, l2, v2.paused]), g.useEffect(() => {
    if (l2) {
      oe.add(v2);
      let e3 = document.activeElement;
      if (!l2.contains(e3)) {
        let t3 = new CustomEvent(b, S);
        l2.addEventListener(b, d2), l2.dispatchEvent(t3), t3.defaultPrevented || (ee(le(ne(l2)), { select: true }), document.activeElement === e3 && T(l2));
      }
      return () => {
        l2.removeEventListener(b, d2), setTimeout(() => {
          let t3 = new CustomEvent(x, S);
          l2.addEventListener(x, p2), l2.dispatchEvent(t3), t3.defaultPrevented || T(e3 ?? document.body, { select: true }), l2.removeEventListener(x, p2), oe.remove(v2);
        }, 0);
      };
    }
  }, [l2, d2, p2, v2]);
  let y2 = g.useCallback((e3) => {
    if (!n2 && !i2 || v2.paused) return;
    let t3 = e3.key === `Tab` && !e3.altKey && !e3.ctrlKey && !e3.metaKey, r2 = document.activeElement;
    if (t3 && r2) {
      let t4 = e3.currentTarget, [i3, a3] = te(t4);
      i3 && a3 ? !e3.shiftKey && r2 === a3 ? (e3.preventDefault(), n2 && T(i3, { select: true })) : e3.shiftKey && r2 === i3 && (e3.preventDefault(), n2 && T(a3, { select: true })) : r2 === t4 && e3.preventDefault();
    }
  }, [n2, i2, v2.paused]);
  return (0, h.jsx)(r.div, { tabIndex: -1, ...c2, ref: _2, onKeyDown: y2 });
});
w.displayName = C;
function ee(e2, { select: t2 = false } = {}) {
  let n2 = document.activeElement;
  for (let r2 of e2) if (T(r2, { select: t2 }), document.activeElement !== n2) return;
}
function te(e2) {
  let t2 = ne(e2);
  return [re(t2, e2), re(t2.reverse(), e2)];
}
function ne(e2) {
  let t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (e3) => {
    let t3 = e3.tagName === `INPUT` && e3.type === `hidden`;
    return e3.disabled || e3.hidden || t3 ? NodeFilter.FILTER_SKIP : e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n2.nextNode(); ) t2.push(n2.currentNode);
  return t2;
}
function re(e2, t2) {
  for (let n2 of e2) if (!ie(n2, { upTo: t2 })) return n2;
}
function ie(e2, { upTo: t2 }) {
  if (getComputedStyle(e2).visibility === `hidden`) return true;
  for (; e2; ) {
    if (t2 !== void 0 && e2 === t2) return false;
    if (getComputedStyle(e2).display === `none`) return true;
    e2 = e2.parentElement;
  }
  return false;
}
function ae(e2) {
  return e2 instanceof HTMLInputElement && `select` in e2;
}
function T(e2, { select: t2 = false } = {}) {
  if (e2 && e2.focus) {
    let n2 = document.activeElement;
    e2.focus({ preventScroll: true }), e2 !== n2 && ae(e2) && t2 && e2.select();
  }
}
var oe = se();
function se() {
  let e2 = [];
  return { add(t2) {
    let n2 = e2[0];
    t2 !== n2 && (n2 == null ? void 0 : n2.pause()), e2 = ce(e2, t2), e2.unshift(t2);
  }, remove(t2) {
    var _a;
    e2 = ce(e2, t2), (_a = e2[0]) == null ? void 0 : _a.resume();
  } };
}
function ce(e2, t2) {
  let n2 = [...e2], r2 = n2.indexOf(t2);
  return r2 !== -1 && n2.splice(r2, 1), n2;
}
function le(e2) {
  return e2.filter((e3) => e3.tagName !== `A`);
}
var ue = function(e2) {
  return typeof document > `u` ? null : (Array.isArray(e2) ? e2[0] : e2).ownerDocument.body;
}, E = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), O = {}, k = 0, de = function(e2) {
  return e2 && (e2.host || de(e2.parentNode));
}, fe = function(e2, t2) {
  return t2.map(function(t3) {
    if (e2.contains(t3)) return t3;
    var n2 = de(t3);
    return n2 && e2.contains(n2) ? n2 : (console.error(`aria-hidden`, t3, `in not contained inside`, e2, `. Doing nothing`), null);
  }).filter(function(e3) {
    return !!e3;
  });
}, pe = function(e2, t2, n2, r2) {
  var i2 = fe(t2, Array.isArray(e2) ? e2 : [e2]);
  O[n2] || (O[n2] = /* @__PURE__ */ new WeakMap());
  var a2 = O[n2], o2 = [], s2 = /* @__PURE__ */ new Set(), c2 = new Set(i2), l2 = function(e3) {
    e3 && !s2.has(e3) && (s2.add(e3), l2(e3.parentNode));
  };
  i2.forEach(l2);
  var u2 = function(e3) {
    e3 && !c2.has(e3) && Array.prototype.forEach.call(e3.children, function(e4) {
      if (s2.has(e4)) u2(e4);
      else try {
        var t3 = e4.getAttribute(r2), i3 = t3 !== null && t3 !== `false`, c3 = (E.get(e4) || 0) + 1, l3 = (a2.get(e4) || 0) + 1;
        E.set(e4, c3), a2.set(e4, l3), o2.push(e4), c3 === 1 && i3 && D.set(e4, true), l3 === 1 && e4.setAttribute(n2, `true`), i3 || e4.setAttribute(r2, `true`);
      } catch (t4) {
        console.error(`aria-hidden: cannot operate on `, e4, t4);
      }
    });
  };
  return u2(t2), s2.clear(), k++, function() {
    o2.forEach(function(e3) {
      var t3 = E.get(e3) - 1, i3 = a2.get(e3) - 1;
      E.set(e3, t3), a2.set(e3, i3), t3 || (D.has(e3) || e3.removeAttribute(r2), D.delete(e3)), i3 || e3.removeAttribute(n2);
    }), k--, k || (E = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), O = {});
  };
}, me = function(e2, t2, n2) {
  n2 === void 0 && (n2 = `data-aria-hidden`);
  var r2 = Array.from(Array.isArray(e2) ? e2 : [e2]), i2 = t2 || ue(e2);
  return i2 ? (r2.push.apply(r2, Array.from(i2.querySelectorAll(`[aria-live], script`))), pe(r2, i2, n2, `aria-hidden`)) : function() {
    return null;
  };
}, A = function() {
  return A = Object.assign || function(e2) {
    for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var i2 in t2 = arguments[n2], t2) Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
    return e2;
  }, A.apply(this, arguments);
};
function j(e2, t2) {
  var n2 = {};
  for (var r2 in e2) Object.prototype.hasOwnProperty.call(e2, r2) && t2.indexOf(r2) < 0 && (n2[r2] = e2[r2]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == `function`) for (var i2 = 0, r2 = Object.getOwnPropertySymbols(e2); i2 < r2.length; i2++) t2.indexOf(r2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r2[i2]) && (n2[r2[i2]] = e2[r2[i2]]);
  return n2;
}
function he(e2, t2, n2, r2) {
  function i2(e3) {
    return e3 instanceof n2 ? e3 : new n2(function(t3) {
      t3(e3);
    });
  }
  return new (n2 || (n2 = Promise))(function(n3, a2) {
    function o2(e3) {
      try {
        c2(r2.next(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function s2(e3) {
      try {
        c2(r2.throw(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function c2(e3) {
      e3.done ? n3(e3.value) : i2(e3.value).then(o2, s2);
    }
    c2((r2 = r2.apply(e2, t2 || [])).next());
  });
}
function ge(e2, t2, n2) {
  if (n2 || arguments.length === 2) for (var r2 = 0, i2 = t2.length, a2; r2 < i2; r2++) (a2 || !(r2 in t2)) && (a2 || (a2 = Array.prototype.slice.call(t2, 0, r2)), a2[r2] = t2[r2]);
  return e2.concat(a2 || Array.prototype.slice.call(t2));
}
var M = `right-scroll-bar-position`, N = `width-before-scroll-bar`, _e = `with-scroll-bars-hidden`, ve = `--removed-body-scroll-bar-size`;
function P(e2, t2) {
  return typeof e2 == `function` ? e2(t2) : e2 && (e2.current = t2), e2;
}
function ye(e2, t2) {
  var n2 = (0, g.useState)(function() {
    return { value: e2, callback: t2, facade: { get current() {
      return n2.value;
    }, set current(e3) {
      var t3 = n2.value;
      t3 !== e3 && (n2.value = e3, n2.callback(e3, t3));
    } } };
  })[0];
  return n2.callback = t2, n2.facade;
}
var be = typeof window < `u` ? g.useLayoutEffect : g.useEffect, xe = /* @__PURE__ */ new WeakMap();
function Se(e2, t2) {
  var n2 = ye(t2 || null, function(t3) {
    return e2.forEach(function(e3) {
      return P(e3, t3);
    });
  });
  return be(function() {
    var t3 = xe.get(n2);
    if (t3) {
      var r2 = new Set(t3), i2 = new Set(e2), a2 = n2.current;
      r2.forEach(function(e3) {
        i2.has(e3) || P(e3, null);
      }), i2.forEach(function(e3) {
        r2.has(e3) || P(e3, a2);
      });
    }
    xe.set(n2, e2);
  }, [e2]), n2;
}
function Ce(e2) {
  return e2;
}
function we(e2, t2) {
  t2 === void 0 && (t2 = Ce);
  var n2 = [], r2 = false;
  return { read: function() {
    if (r2) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return n2.length ? n2[n2.length - 1] : e2;
  }, useMedium: function(e3) {
    var i2 = t2(e3, r2);
    return n2.push(i2), function() {
      n2 = n2.filter(function(e4) {
        return e4 !== i2;
      });
    };
  }, assignSyncMedium: function(e3) {
    for (r2 = true; n2.length; ) {
      var t3 = n2;
      n2 = [], t3.forEach(e3);
    }
    n2 = { push: function(t4) {
      return e3(t4);
    }, filter: function() {
      return n2;
    } };
  }, assignMedium: function(e3) {
    r2 = true;
    var t3 = [];
    if (n2.length) {
      var i2 = n2;
      n2 = [], i2.forEach(e3), t3 = n2;
    }
    var a2 = function() {
      var n3 = t3;
      t3 = [], n3.forEach(e3);
    }, o2 = function() {
      return Promise.resolve().then(a2);
    };
    o2(), n2 = { push: function(e4) {
      t3.push(e4), o2();
    }, filter: function(e4) {
      return t3 = t3.filter(e4), n2;
    } };
  } };
}
function Te(e2) {
  e2 === void 0 && (e2 = {});
  var t2 = we(null);
  return t2.options = A({ async: true, ssr: false }, e2), t2;
}
var Ee = function(e2) {
  var t2 = e2.sideCar, n2 = j(e2, [`sideCar`]);
  if (!t2) throw Error("Sidecar: please provide `sideCar` property to import the right car");
  var r2 = t2.read();
  if (!r2) throw Error(`Sidecar medium not found`);
  return g.createElement(r2, A({}, n2));
};
Ee.isSideCarExport = true;
function De(e2, t2) {
  return e2.useMedium(t2), Ee;
}
var Oe = Te(), F = function() {
}, I = g.forwardRef(function(e2, t2) {
  var n2 = g.useRef(null), r2 = g.useState({ onScrollCapture: F, onWheelCapture: F, onTouchMoveCapture: F }), i2 = r2[0], a2 = r2[1], o2 = e2.forwardProps, s2 = e2.children, c2 = e2.className, l2 = e2.removeScrollBar, u2 = e2.enabled, d2 = e2.shards, f2 = e2.sideCar, p2 = e2.noRelative, m2 = e2.noIsolation, h2 = e2.inert, _2 = e2.allowPinchZoom, v2 = e2.as, y2 = v2 === void 0 ? `div` : v2, b2 = e2.gapMode, x2 = j(e2, [`forwardProps`, `children`, `className`, `removeScrollBar`, `enabled`, `shards`, `sideCar`, `noRelative`, `noIsolation`, `inert`, `allowPinchZoom`, `as`, `gapMode`]), S2 = f2, C2 = Se([n2, t2]), w2 = A(A({}, x2), i2);
  return g.createElement(g.Fragment, null, u2 && g.createElement(S2, { sideCar: Oe, removeScrollBar: l2, shards: d2, noRelative: p2, noIsolation: m2, inert: h2, setCallbacks: a2, allowPinchZoom: !!_2, lockRef: n2, gapMode: b2 }), o2 ? g.cloneElement(g.Children.only(s2), A(A({}, w2), { ref: C2 })) : g.createElement(y2, A({}, w2, { className: c2, ref: C2 }), s2));
});
I.defaultProps = { enabled: true, removeScrollBar: true, inert: false }, I.classNames = { fullWidth: N, zeroRight: M };
var ke = function() {
  if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
};
function Ae() {
  if (!document) return null;
  var e2 = document.createElement(`style`);
  e2.type = `text/css`;
  var t2 = ke();
  return t2 && e2.setAttribute(`nonce`, t2), e2;
}
function je(e2, t2) {
  e2.styleSheet ? e2.styleSheet.cssText = t2 : e2.appendChild(document.createTextNode(t2));
}
function Me(e2) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e2);
}
var Ne = function() {
  var e2 = 0, t2 = null;
  return { add: function(n2) {
    e2 == 0 && (t2 = Ae()) && (je(t2, n2), Me(t2)), e2++;
  }, remove: function() {
    e2--, !e2 && t2 && (t2.parentNode && t2.parentNode.removeChild(t2), t2 = null);
  } };
}, Pe = function() {
  var e2 = Ne();
  return function(t2, n2) {
    g.useEffect(function() {
      return e2.add(t2), function() {
        e2.remove();
      };
    }, [t2 && n2]);
  };
}, L = function() {
  var e2 = Pe();
  return function(t2) {
    var n2 = t2.styles, r2 = t2.dynamic;
    return e2(n2, r2), null;
  };
}, Fe = { left: 0, top: 0, right: 0, gap: 0 }, R = function(e2) {
  return parseInt(e2 || ``, 10) || 0;
}, Ie = function(e2) {
  var t2 = window.getComputedStyle(document.body), n2 = t2[e2 === `padding` ? `paddingLeft` : `marginLeft`], r2 = t2[e2 === `padding` ? `paddingTop` : `marginTop`], i2 = t2[e2 === `padding` ? `paddingRight` : `marginRight`];
  return [R(n2), R(r2), R(i2)];
}, Le = function(e2) {
  if (e2 === void 0 && (e2 = `margin`), typeof window > `u`) return Fe;
  var t2 = Ie(e2), n2 = document.documentElement.clientWidth, r2 = window.innerWidth;
  return { left: t2[0], top: t2[1], right: t2[2], gap: Math.max(0, r2 - n2 + t2[2] - t2[0]) };
}, Re = L(), z = `data-scroll-locked`, ze = function(e2, t2, n2, r2) {
  var i2 = e2.left, a2 = e2.top, o2 = e2.right, s2 = e2.gap;
  return n2 === void 0 && (n2 = `margin`), `
  .${_e} {
   overflow: hidden ${r2};
   padding-right: ${s2}px ${r2};
  }
  body[${z}] {
    overflow: hidden ${r2};
    overscroll-behavior: contain;
    ${[t2 && `position: relative ${r2};`, n2 === `margin` && `
    padding-left: ${i2}px;
    padding-top: ${a2}px;
    padding-right: ${o2}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s2}px ${r2};
    `, n2 === `padding` && `padding-right: ${s2}px ${r2};`].filter(Boolean).join(``)}
  }
  
  .${M} {
    right: ${s2}px ${r2};
  }
  
  .${N} {
    margin-right: ${s2}px ${r2};
  }
  
  .${M} .${M} {
    right: 0 ${r2};
  }
  
  .${N} .${N} {
    margin-right: 0 ${r2};
  }
  
  body[${z}] {
    ${ve}: ${s2}px;
  }
`;
}, Be = function() {
  var e2 = parseInt(document.body.getAttribute(`data-scroll-locked`) || `0`, 10);
  return isFinite(e2) ? e2 : 0;
}, Ve = function() {
  g.useEffect(function() {
    return document.body.setAttribute(z, (Be() + 1).toString()), function() {
      var e2 = Be() - 1;
      e2 <= 0 ? document.body.removeAttribute(z) : document.body.setAttribute(z, e2.toString());
    };
  }, []);
}, He = function(e2) {
  var t2 = e2.noRelative, n2 = e2.noImportant, r2 = e2.gapMode, i2 = r2 === void 0 ? `margin` : r2;
  Ve();
  var a2 = g.useMemo(function() {
    return Le(i2);
  }, [i2]);
  return g.createElement(Re, { styles: ze(a2, !t2, i2, n2 ? `` : `!important`) });
}, B = false;
if (typeof window < `u`) try {
  var V = Object.defineProperty({}, "passive", { get: function() {
    return B = true, true;
  } });
  window.addEventListener(`test`, V, V), window.removeEventListener(`test`, V, V);
} catch {
  B = false;
}
var H = B ? { passive: false } : false, Ue = function(e2) {
  return e2.tagName === `TEXTAREA`;
}, We = function(e2, t2) {
  if (!(e2 instanceof Element)) return false;
  var n2 = window.getComputedStyle(e2);
  return n2[t2] !== `hidden` && !(n2.overflowY === n2.overflowX && !Ue(e2) && n2[t2] === `visible`);
}, Ge = function(e2) {
  return We(e2, `overflowY`);
}, Ke = function(e2) {
  return We(e2, `overflowX`);
}, qe = function(e2, t2) {
  var n2 = t2.ownerDocument, r2 = t2;
  do {
    if (typeof ShadowRoot < `u` && r2 instanceof ShadowRoot && (r2 = r2.host), Xe(e2, r2)) {
      var i2 = Ze(e2, r2);
      if (i2[1] > i2[2]) return true;
    }
    r2 = r2.parentNode;
  } while (r2 && r2 !== n2.body);
  return false;
}, Je = function(e2) {
  return [e2.scrollTop, e2.scrollHeight, e2.clientHeight];
}, Ye = function(e2) {
  return [e2.scrollLeft, e2.scrollWidth, e2.clientWidth];
}, Xe = function(e2, t2) {
  return e2 === `v` ? Ge(t2) : Ke(t2);
}, Ze = function(e2, t2) {
  return e2 === `v` ? Je(t2) : Ye(t2);
}, Qe = function(e2, t2) {
  return e2 === `h` && t2 === `rtl` ? -1 : 1;
}, $e = function(e2, t2, n2, r2, i2) {
  var a2 = Qe(e2, window.getComputedStyle(t2).direction), o2 = a2 * r2, s2 = n2.target, c2 = t2.contains(s2), l2 = false, u2 = o2 > 0, d2 = 0, f2 = 0;
  do {
    if (!s2) break;
    var p2 = Ze(e2, s2), m2 = p2[0], h2 = p2[1] - p2[2] - a2 * m2;
    (m2 || h2) && Xe(e2, s2) && (d2 += h2, f2 += m2);
    var g2 = s2.parentNode;
    s2 = g2 && g2.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g2.host : g2;
  } while (!c2 && s2 !== document.body || c2 && (t2.contains(s2) || t2 === s2));
  return (u2 && (i2 && Math.abs(d2) < 1 || !i2 && o2 > d2) || !u2 && (i2 && Math.abs(f2) < 1 || !i2 && -o2 > f2)) && (l2 = true), l2;
}, U = function(e2) {
  return `changedTouches` in e2 ? [e2.changedTouches[0].clientX, e2.changedTouches[0].clientY] : [0, 0];
}, et = function(e2) {
  return [e2.deltaX, e2.deltaY];
}, tt = function(e2) {
  return e2 && `current` in e2 ? e2.current : e2;
}, nt = function(e2, t2) {
  return e2[0] === t2[0] && e2[1] === t2[1];
}, rt = function(e2) {
  return `
  .block-interactivity-${e2} {pointer-events: none;}
  .allow-interactivity-${e2} {pointer-events: all;}
`;
}, it = 0, W = [];
function at(e2) {
  var t2 = g.useRef([]), n2 = g.useRef([0, 0]), r2 = g.useRef(), i2 = g.useState(it++)[0], a2 = g.useState(L)[0], o2 = g.useRef(e2);
  g.useEffect(function() {
    o2.current = e2;
  }, [e2]), g.useEffect(function() {
    if (e2.inert) {
      document.body.classList.add(`block-interactivity-${i2}`);
      var t3 = ge([e2.lockRef.current], (e2.shards || []).map(tt), true).filter(Boolean);
      return t3.forEach(function(e3) {
        return e3.classList.add(`allow-interactivity-${i2}`);
      }), function() {
        document.body.classList.remove(`block-interactivity-${i2}`), t3.forEach(function(e3) {
          return e3.classList.remove(`allow-interactivity-${i2}`);
        });
      };
    }
  }, [e2.inert, e2.lockRef.current, e2.shards]);
  var s2 = g.useCallback(function(e3, t3) {
    if (`touches` in e3 && e3.touches.length === 2 || e3.type === `wheel` && e3.ctrlKey) return !o2.current.allowPinchZoom;
    var i3 = U(e3), a3 = n2.current, s3 = `deltaX` in e3 ? e3.deltaX : a3[0] - i3[0], c3 = `deltaY` in e3 ? e3.deltaY : a3[1] - i3[1], l3, u3 = e3.target, d3 = Math.abs(s3) > Math.abs(c3) ? `h` : `v`;
    if (`touches` in e3 && d3 === `h` && u3.type === `range`) return false;
    var f3 = window.getSelection(), p3 = f3 && f3.anchorNode;
    if (p3 && (p3 === u3 || p3.contains(u3))) return false;
    var m3 = qe(d3, u3);
    if (!m3) return true;
    if (m3 ? l3 = d3 : (l3 = d3 === `v` ? `h` : `v`, m3 = qe(d3, u3)), !m3) return false;
    if (!r2.current && `changedTouches` in e3 && (s3 || c3) && (r2.current = l3), !l3) return true;
    var h2 = r2.current || l3;
    return $e(h2, t3, e3, h2 === `h` ? s3 : c3, true);
  }, []), c2 = g.useCallback(function(e3) {
    var n3 = e3;
    if (W.length && W[W.length - 1] === a2) {
      var r3 = `deltaY` in n3 ? et(n3) : U(n3), i3 = t2.current.filter(function(e4) {
        return e4.name === n3.type && (e4.target === n3.target || n3.target === e4.shadowParent) && nt(e4.delta, r3);
      })[0];
      if (i3 && i3.should) n3.cancelable && n3.preventDefault();
      else if (!i3) {
        var c3 = (o2.current.shards || []).map(tt).filter(Boolean).filter(function(e4) {
          return e4.contains(n3.target);
        });
        (c3.length > 0 ? s2(n3, c3[0]) : !o2.current.noIsolation) && n3.cancelable && n3.preventDefault();
      }
    }
  }, []), l2 = g.useCallback(function(e3, n3, r3, i3) {
    var a3 = { name: e3, delta: n3, target: r3, should: i3, shadowParent: ot(r3) };
    t2.current.push(a3), setTimeout(function() {
      t2.current = t2.current.filter(function(e4) {
        return e4 !== a3;
      });
    }, 1);
  }, []), u2 = g.useCallback(function(e3) {
    n2.current = U(e3), r2.current = void 0;
  }, []), d2 = g.useCallback(function(t3) {
    l2(t3.type, et(t3), t3.target, s2(t3, e2.lockRef.current));
  }, []), f2 = g.useCallback(function(t3) {
    l2(t3.type, U(t3), t3.target, s2(t3, e2.lockRef.current));
  }, []);
  g.useEffect(function() {
    return W.push(a2), e2.setCallbacks({ onScrollCapture: d2, onWheelCapture: d2, onTouchMoveCapture: f2 }), document.addEventListener(`wheel`, c2, H), document.addEventListener(`touchmove`, c2, H), document.addEventListener(`touchstart`, u2, H), function() {
      W = W.filter(function(e3) {
        return e3 !== a2;
      }), document.removeEventListener(`wheel`, c2, H), document.removeEventListener(`touchmove`, c2, H), document.removeEventListener(`touchstart`, u2, H);
    };
  }, []);
  var p2 = e2.removeScrollBar, m2 = e2.inert;
  return g.createElement(g.Fragment, null, m2 ? g.createElement(a2, { styles: rt(i2) }) : null, p2 ? g.createElement(He, { noRelative: e2.noRelative, gapMode: e2.gapMode }) : null);
}
function ot(e2) {
  for (var t2 = null; e2 !== null; ) e2 instanceof ShadowRoot && (t2 = e2.host, e2 = e2.host), e2 = e2.parentNode;
  return t2;
}
var st = De(Oe, at), G = g.forwardRef(function(e2, t2) {
  return g.createElement(I, A({}, e2, { ref: t2, sideCar: st }));
});
G.classNames = I.classNames;
var K = `Dialog`, [ct, lt] = u(K), [ut, q] = ct(K), dt = (e2) => {
  let { __scopeDialog: t2, children: n2, open: r2, defaultOpen: i2, onOpenChange: a2, modal: o2 = true } = e2, c2 = g.useRef(null), l2 = g.useRef(null), [u2, d2] = p({ prop: r2, defaultProp: i2 ?? false, onChange: a2, caller: K });
  return (0, h.jsx)(ut, { scope: t2, triggerRef: c2, contentRef: l2, contentId: s(), titleId: s(), descriptionId: s(), open: u2, onOpenChange: d2, onOpenToggle: g.useCallback(() => d2((e3) => !e3), [d2]), modal: o2, children: n2 });
};
dt.displayName = K;
var ft = `DialogTrigger`, pt = g.forwardRef((e2, t2) => {
  let { __scopeDialog: n2, ...i2 } = e2, s2 = q(ft, n2), c2 = o(t2, s2.triggerRef);
  return (0, h.jsx)(r.button, { type: `button`, "aria-haspopup": `dialog`, "aria-expanded": s2.open, "aria-controls": s2.contentId, "data-state": Q(s2.open), ...i2, ref: c2, onClick: a(e2.onClick, s2.onOpenToggle) });
});
pt.displayName = ft;
var J = `DialogPortal`, [mt, ht] = ct(J, { forceMount: void 0 }), gt = (e2) => {
  let { __scopeDialog: t2, forceMount: n2, children: r2, container: i2 } = e2, a2 = q(J, t2);
  return (0, h.jsx)(mt, { scope: t2, forceMount: n2, children: g.Children.map(r2, (e3) => (0, h.jsx)(c, { present: n2 || a2.open, children: (0, h.jsx)(d, { asChild: true, container: i2, children: e3 }) })) });
};
gt.displayName = J;
var Y = `DialogOverlay`, _t = g.forwardRef((e2, t2) => {
  let n2 = ht(Y, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...i2 } = e2, a2 = q(Y, e2.__scopeDialog);
  return a2.modal ? (0, h.jsx)(c, { present: r2 || a2.open, children: (0, h.jsx)(yt, { ...i2, ref: t2 }) }) : null;
});
_t.displayName = Y;
var vt = m(`DialogOverlay.RemoveScroll`), yt = g.forwardRef((e2, t2) => {
  let { __scopeDialog: n2, ...i2 } = e2, a2 = q(Y, n2);
  return (0, h.jsx)(G, { as: vt, allowPinchZoom: true, shards: [a2.contentRef], children: (0, h.jsx)(r.div, { "data-state": Q(a2.open), ...i2, ref: t2, style: { pointerEvents: `auto`, ...i2.style } }) });
}), X = `DialogContent`, bt = g.forwardRef((e2, t2) => {
  let n2 = ht(X, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...i2 } = e2, a2 = q(X, e2.__scopeDialog);
  return (0, h.jsx)(c, { present: r2 || a2.open, children: a2.modal ? (0, h.jsx)(xt, { ...i2, ref: t2 }) : (0, h.jsx)(St, { ...i2, ref: t2 }) });
});
bt.displayName = X;
var xt = g.forwardRef((e2, t2) => {
  let n2 = q(X, e2.__scopeDialog), r2 = g.useRef(null), i2 = o(t2, n2.contentRef, r2);
  return g.useEffect(() => {
    let e3 = r2.current;
    if (e3) return me(e3);
  }, []), (0, h.jsx)(Ct, { ...e2, ref: i2, trapFocus: n2.open, disableOutsidePointerEvents: true, onCloseAutoFocus: a(e2.onCloseAutoFocus, (e3) => {
    var _a;
    e3.preventDefault(), (_a = n2.triggerRef.current) == null ? void 0 : _a.focus();
  }), onPointerDownOutside: a(e2.onPointerDownOutside, (e3) => {
    let t3 = e3.detail.originalEvent, n3 = t3.button === 0 && t3.ctrlKey === true;
    (t3.button === 2 || n3) && e3.preventDefault();
  }), onFocusOutside: a(e2.onFocusOutside, (e3) => e3.preventDefault()) });
}), St = g.forwardRef((e2, t2) => {
  let n2 = q(X, e2.__scopeDialog), r2 = g.useRef(false), i2 = g.useRef(false);
  return (0, h.jsx)(Ct, { ...e2, ref: t2, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (t3) => {
    var _a, _b;
    (_a = e2.onCloseAutoFocus) == null ? void 0 : _a.call(e2, t3), t3.defaultPrevented || (r2.current || ((_b = n2.triggerRef.current) == null ? void 0 : _b.focus()), t3.preventDefault()), r2.current = false, i2.current = false;
  }, onInteractOutside: (t3) => {
    var _a, _b;
    (_a = e2.onInteractOutside) == null ? void 0 : _a.call(e2, t3), t3.defaultPrevented || (r2.current = true, t3.detail.originalEvent.type === `pointerdown` && (i2.current = true));
    let a2 = t3.target;
    ((_b = n2.triggerRef.current) == null ? void 0 : _b.contains(a2)) && t3.preventDefault(), t3.detail.originalEvent.type === `focusin` && i2.current && t3.preventDefault();
  } });
}), Ct = g.forwardRef((e2, t2) => {
  let { __scopeDialog: n2, trapFocus: r2, onOpenAutoFocus: i2, onCloseAutoFocus: a2, ...s2 } = e2, c2 = q(X, n2), u2 = g.useRef(null), d2 = o(t2, u2);
  return v(), (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(w, { asChild: true, loop: true, trapped: r2, onMountAutoFocus: i2, onUnmountAutoFocus: a2, children: (0, h.jsx)(l, { role: `dialog`, id: c2.contentId, "aria-describedby": c2.descriptionId, "aria-labelledby": c2.titleId, "data-state": Q(c2.open), ...s2, ref: d2, onDismiss: () => c2.onOpenChange(false) }) }), (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(jt, { titleId: c2.titleId }), (0, h.jsx)(Nt, { contentRef: u2, descriptionId: c2.descriptionId })] })] });
}), Z = `DialogTitle`, wt = g.forwardRef((e2, t2) => {
  let { __scopeDialog: n2, ...i2 } = e2, a2 = q(Z, n2);
  return (0, h.jsx)(r.h2, { id: a2.titleId, ...i2, ref: t2 });
});
wt.displayName = Z;
var Tt = `DialogDescription`, Et = g.forwardRef((e2, t2) => {
  let { __scopeDialog: n2, ...i2 } = e2, a2 = q(Tt, n2);
  return (0, h.jsx)(r.p, { id: a2.descriptionId, ...i2, ref: t2 });
});
Et.displayName = Tt;
var Dt = `DialogClose`, Ot = g.forwardRef((e2, t2) => {
  let { __scopeDialog: n2, ...i2 } = e2, o2 = q(Dt, n2);
  return (0, h.jsx)(r.button, { type: `button`, ...i2, ref: t2, onClick: a(e2.onClick, () => o2.onOpenChange(false)) });
});
Ot.displayName = Dt;
function Q(e2) {
  return e2 ? `open` : `closed`;
}
var kt = `DialogTitleWarning`, [At, $] = i(kt, { contentName: X, titleName: Z, docsSlug: `dialog` }), jt = ({ titleId: e2 }) => {
  let t2 = $(kt), n2 = `\`${t2.contentName}\` requires a \`${t2.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t2.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t2.docsSlug}`;
  return g.useEffect(() => {
    e2 && (document.getElementById(e2) || console.error(n2));
  }, [n2, e2]), null;
}, Mt = `DialogDescriptionWarning`, Nt = ({ contentRef: e2, descriptionId: t2 }) => {
  let n2 = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${$(Mt).contentName}}.`;
  return g.useEffect(() => {
    var _a;
    let r2 = (_a = e2.current) == null ? void 0 : _a.getAttribute(`aria-describedby`);
    t2 && r2 && (document.getElementById(t2) || console.warn(n2));
  }, [n2, e2, t2]), null;
}, Pt = dt, Ft = gt, It = _t, Lt = bt, Rt = wt, zt = Et, Bt = Ot;
export {
  Ft as a,
  G as c,
  me as d,
  w as f,
  It as i,
  he as l,
  Lt as n,
  Pt as o,
  v as p,
  zt as r,
  Rt as s,
  Bt as t,
  j as u
};
