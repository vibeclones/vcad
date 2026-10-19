var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as Vm, a as wp, c as xp, e as di, u as Mp, b as k, d as Et, f as Vi, s as Tp, g as vf, h as fo, i as Zm, j as Fs } from "./three-fiber-GW7QWJN8.js";
import { j as lo, M as fr, a as Ae, k as hi, l as Yi, V as fn, h as Zn, m as tf, n as mf, D as hr, P as ro, O as sr, o as et, I as Ap, p as cr, R as Up, E as Dp, Q as _n, q as Ys, r as Cp, s as Da, t as fl, F as oo, u as Ht, v as ca, w as hl, x as Op, y as As, z as nm, G as tr, H as nr, J as zp, K as Qm, X as qm, Y as fa, Z as Xa, _ as rr, $ as ta, i as ho, a0 as Rp, a1 as Im, a2 as nf, a3 as or, a4 as Lp, a5 as po, a6 as pf, a7 as js, a8 as Xi, a9 as Bp, aa as Pm, ab as Np, ac as Wm, ad as Gp, ae as Hp, af as Fp, ag as vl, ah as jp, ai as kp, aj as Yp, ak as Km, al as Xp, am as Vp, an as vo, ao as Zp, S as gf, ap as Qp, aq as ji, ar as ks, W as qp, as as Ip, L as af, at as Pp, au as Wp, av as Kp, aw as Jp, U as lf, ax as $p, ay as eg, az as am, e as tg, aA as Ns, aB as ng, aC as ag, aD as ig, aE as lg, aF as rg } from "./three-tnxpQXqG.js";
const og = "modulepreload", sg = function(p) {
  return "/vcad/v2026.07.31-e3348c3/" + p;
}, im = {}, I2 = function(l, v, s) {
  let r = Promise.resolve();
  if (v && v.length > 0) {
    let h = function(d) {
      return Promise.all(d.map((m) => Promise.resolve(m).then((y) => ({ status: "fulfilled", value: y }), (y) => ({ status: "rejected", reason: y }))));
    };
    document.getElementsByTagName("link");
    const f = document.querySelector("meta[property=csp-nonce]"), c = (f == null ? void 0 : f.nonce) || (f == null ? void 0 : f.getAttribute("nonce"));
    r = h(v.map((d) => {
      if (d = sg(d), d in im) return;
      im[d] = true;
      const m = d.endsWith(".css"), y = m ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${d}"]${y}`)) return;
      const S = document.createElement("link");
      if (S.rel = m ? "stylesheet" : og, m || (S.as = "script"), S.crossOrigin = "", S.href = d, c && S.setAttribute("nonce", c), document.head.appendChild(S), m) return new Promise((E, A) => {
        S.addEventListener("load", E), S.addEventListener("error", () => A(new Error(`Unable to preload CSS for ${d}`)));
      });
    }));
  }
  function i(h) {
    const f = new Event("vite:preloadError", { cancelable: true });
    if (f.payload = h, window.dispatchEvent(f), !f.defaultPrevented) throw h;
  }
  return r.then((h) => {
    for (const f of h || []) f.status === "rejected" && i(f.reason);
    return l().catch(i);
  });
};
var kc = { exports: {} }, eo = {}, Yc = { exports: {} }, Vn = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var lm;
function ug() {
  if (lm) return Vn;
  lm = 1;
  var p = Vm();
  function l(c) {
    var d = "https://react.dev/errors/" + c;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++) d += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return "Minified React error #" + c + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v() {
  }
  var s = { d: { f: v, r: function() {
    throw Error(l(522));
  }, D: v, C: v, L: v, m: v, X: v, S: v, M: v }, p: 0, findDOMNode: null }, r = Symbol.for("react.portal");
  function i(c, d, m) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: r, key: y == null ? null : "" + y, children: c, containerInfo: d, implementation: m };
  }
  var h = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(c, d) {
    if (c === "font") return "";
    if (typeof d == "string") return d === "use-credentials" ? d : "";
  }
  return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Vn.createPortal = function(c, d) {
    var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11) throw Error(l(299));
    return i(c, d, null, m);
  }, Vn.flushSync = function(c) {
    var d = h.T, m = s.p;
    try {
      if (h.T = null, s.p = 2, c) return c();
    } finally {
      h.T = d, s.p = m, s.d.f();
    }
  }, Vn.preconnect = function(c, d) {
    typeof c == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, s.d.C(c, d));
  }, Vn.prefetchDNS = function(c) {
    typeof c == "string" && s.d.D(c);
  }, Vn.preinit = function(c, d) {
    if (typeof c == "string" && d && typeof d.as == "string") {
      var m = d.as, y = f(m, d.crossOrigin), S = typeof d.integrity == "string" ? d.integrity : void 0, E = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      m === "style" ? s.d.S(c, typeof d.precedence == "string" ? d.precedence : void 0, { crossOrigin: y, integrity: S, fetchPriority: E }) : m === "script" && s.d.X(c, { crossOrigin: y, integrity: S, fetchPriority: E, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
    }
  }, Vn.preinitModule = function(c, d) {
    if (typeof c == "string") if (typeof d == "object" && d !== null) {
      if (d.as == null || d.as === "script") {
        var m = f(d.as, d.crossOrigin);
        s.d.M(c, { crossOrigin: m, integrity: typeof d.integrity == "string" ? d.integrity : void 0, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
      }
    } else d == null && s.d.M(c);
  }, Vn.preload = function(c, d) {
    if (typeof c == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
      var m = d.as, y = f(m, d.crossOrigin);
      s.d.L(c, m, { crossOrigin: y, integrity: typeof d.integrity == "string" ? d.integrity : void 0, nonce: typeof d.nonce == "string" ? d.nonce : void 0, type: typeof d.type == "string" ? d.type : void 0, fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0, referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0, imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0, imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0, media: typeof d.media == "string" ? d.media : void 0 });
    }
  }, Vn.preloadModule = function(c, d) {
    if (typeof c == "string") if (d) {
      var m = f(d.as, d.crossOrigin);
      s.d.m(c, { as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0, crossOrigin: m, integrity: typeof d.integrity == "string" ? d.integrity : void 0 });
    } else s.d.m(c);
  }, Vn.requestFormReset = function(c) {
    s.d.r(c);
  }, Vn.unstable_batchedUpdates = function(c, d) {
    return c(d);
  }, Vn.useFormState = function(c, d, m) {
    return h.H.useFormState(c, d, m);
  }, Vn.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, Vn.version = "19.2.4", Vn;
}
var rm;
function cg() {
  if (rm) return Yc.exports;
  rm = 1;
  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
    } catch (l) {
      console.error(l);
    }
  }
  return p(), Yc.exports = ug(), Yc.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var om;
function fg() {
  if (om) return eo;
  om = 1;
  var p = wp(), l = Vm(), v = cg();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function i(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function f(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function c(e) {
    if (i(e) !== e) throw Error(s(188));
  }
  function d(e) {
    var t = e.alternate;
    if (!t) {
      if (t = i(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (a = o.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return c(o), e;
          if (u === a) return c(o), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== a.return) n = o, a = u;
      else {
        for (var g = false, _ = o.child; _; ) {
          if (_ === n) {
            g = true, n = o, a = u;
            break;
          }
          if (_ === a) {
            g = true, a = o, n = u;
            break;
          }
          _ = _.sibling;
        }
        if (!g) {
          for (_ = u.child; _; ) {
            if (_ === n) {
              g = true, n = u, a = o;
              break;
            }
            if (_ === a) {
              g = true, a = u, n = o;
              break;
            }
            _ = _.sibling;
          }
          if (!g) throw Error(s(189));
        }
      }
      if (n.alternate !== a) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function m(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = m(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, S = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), C = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), I = Symbol.for("react.memo_cache_sentinel"), me = Symbol.iterator;
  function j(e) {
    return e === null || typeof e != "object" ? null : (e = me && e[me] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var J = Symbol.for("react.client.reference");
  function Z(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === J ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case Q:
        return "Profiler";
      case x:
        return "StrictMode";
      case O:
        return "Suspense";
      case L:
        return "SuspenseList";
      case Y:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case A:
        return "Portal";
      case C:
        return e.displayName || "Context";
      case N:
        return (e._context.displayName || "Context") + ".Consumer";
      case z:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case H:
        return t = e.displayName || null, t !== null ? t : Z(e.type) || "Memo";
      case D:
        t = e._payload, e = e._init;
        try {
          return Z(e(t));
        } catch {
        }
    }
    return null;
  }
  var te = Array.isArray, q = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, he = v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Te = { pending: false, data: null, method: null, action: null }, re = [], W = -1;
  function T(e) {
    return { current: e };
  }
  function B(e) {
    0 > W || (e.current = re[W], re[W] = null, W--);
  }
  function V(e, t) {
    W++, re[W] = e.current, e.current = t;
  }
  var M = T(null), K = T(null), ie = T(null), se = T(null);
  function pe(e, t) {
    switch (V(ie, t), V(K, e), V(M, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Mv(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = Mv(t), e = Tv(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    B(M), V(M, e);
  }
  function Oe() {
    B(M), B(K), B(ie);
  }
  function ze(e) {
    e.memoizedState !== null && V(se, e);
    var t = M.current, n = Tv(t, e.type);
    t !== n && (V(K, e), V(M, n));
  }
  function be(e) {
    K.current === e && (B(M), B(K)), se.current === e && (B(se), Wr._currentValue = Te);
  }
  var Ee, Je;
  function Ye(e) {
    if (Ee === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ee = t && t[1] || "", Je = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Ee + e + Je;
  }
  var Ne = false;
  function Ve(e, t) {
    if (!e || Ne) return "";
    Ne = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var Se = function() {
              throw Error();
            };
            if (Object.defineProperty(Se.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Se, []);
              } catch (oe) {
                var ne = oe;
              }
              Reflect.construct(e, [], Se);
            } else {
              try {
                Se.call();
              } catch (oe) {
                ne = oe;
              }
              e.call(Se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (oe) {
              ne = oe;
            }
            (Se = e()) && typeof Se.catch == "function" && Se.catch(function() {
            });
          }
        } catch (oe) {
          if (oe && ne && typeof oe.stack == "string") return [oe.stack, ne.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      o && o.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = a.DetermineComponentFrameRoot(), g = u[0], _ = u[1];
      if (g && _) {
        var R = g.split(`
`), ee = _.split(`
`);
        for (o = a = 0; a < R.length && !R[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; o < ee.length && !ee[o].includes("DetermineComponentFrameRoot"); ) o++;
        if (a === R.length || o === ee.length) for (a = R.length - 1, o = ee.length - 1; 1 <= a && 0 <= o && R[a] !== ee[o]; ) o--;
        for (; 1 <= a && 0 <= o; a--, o--) if (R[a] !== ee[o]) {
          if (a !== 1 || o !== 1) do
            if (a--, o--, 0 > o || R[a] !== ee[o]) {
              var ve = `
` + R[a].replace(" at new ", " at ");
              return e.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", e.displayName)), ve;
            }
          while (1 <= a && 0 <= o);
          break;
        }
      }
    } finally {
      Ne = false, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Ye(n) : "";
  }
  function Ze(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ye(e.type);
      case 16:
        return Ye("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ye("Suspense Fallback") : Ye("Suspense");
      case 19:
        return Ye("SuspenseList");
      case 0:
      case 15:
        return Ve(e.type, false);
      case 11:
        return Ve(e.type.render, false);
      case 1:
        return Ve(e.type, true);
      case 31:
        return Ye("Activity");
      default:
        return "";
    }
  }
  function Me(e) {
    try {
      var t = "", n = null;
      do
        t += Ze(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Fe = Object.prototype.hasOwnProperty, je = p.unstable_scheduleCallback, _e = p.unstable_cancelCallback, rt = p.unstable_shouldYield, Ge = p.unstable_requestPaint, Le = p.unstable_now, Be = p.unstable_getCurrentPriorityLevel, gt = p.unstable_ImmediatePriority, He = p.unstable_UserBlockingPriority, Qe = p.unstable_NormalPriority, $e = p.unstable_LowPriority, ct = p.unstable_IdlePriority, Rt = p.log, kt = p.unstable_setDisableYieldValue, ot = null, ke = null;
  function Xe(e) {
    if (typeof Rt == "function" && kt(e), ke && typeof ke.setStrictMode == "function") try {
      ke.setStrictMode(ot, e);
    } catch {
    }
  }
  var F = Math.clz32 ? Math.clz32 : Pe, ye = Math.log, Re = Math.LN2;
  function Pe(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ye(e) / Re | 0) | 0;
  }
  var ue = 256, ut = 262144, ln = 4194304;
  function yt(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function vt(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var o = 0, u = e.suspendedLanes, g = e.pingedLanes;
    e = e.warmLanes;
    var _ = a & 134217727;
    return _ !== 0 ? (a = _ & ~u, a !== 0 ? o = yt(a) : (g &= _, g !== 0 ? o = yt(g) : n || (n = _ & ~e, n !== 0 && (o = yt(n))))) : (_ = a & ~u, _ !== 0 ? o = yt(_) : g !== 0 ? o = yt(g) : n || (n = a & ~e, n !== 0 && (o = yt(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & u) === 0 && (u = o & -o, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function St(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function _t(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function it() {
    var e = ln;
    return ln <<= 1, (ln & 62914560) === 0 && (ln = 4194304), e;
  }
  function Mt(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Yt(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function $t(e, t, n, a, o, u) {
    var g = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var _ = e.entanglements, R = e.expirationTimes, ee = e.hiddenUpdates;
    for (n = g & ~n; 0 < n; ) {
      var ve = 31 - F(n), Se = 1 << ve;
      _[ve] = 0, R[ve] = -1;
      var ne = ee[ve];
      if (ne !== null) for (ee[ve] = null, ve = 0; ve < ne.length; ve++) {
        var oe = ne[ve];
        oe !== null && (oe.lane &= -536870913);
      }
      n &= ~Se;
    }
    a !== 0 && rn(e, a, 0), u !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(g & ~t));
  }
  function rn(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - F(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Hn(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - F(n), o = 1 << a;
      o & t | e[a] & t && (e[a] |= t), n &= ~o;
    }
  }
  function Fn(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Qn(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Qn(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function wn(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function jn() {
    var e = he.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Pv(e.type));
  }
  function ft(e, t) {
    var n = he.p;
    try {
      return he.p = e, t();
    } finally {
      he.p = n;
    }
  }
  var It = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + It, b = "__reactProps$" + It, w = "__reactContainer$" + It, G = "__reactEvents$" + It, ae = "__reactListeners$" + It, ce = "__reactHandles$" + It, fe = "__reactResources$" + It, xe = "__reactMarker$" + It;
  function we(e) {
    delete e[Pt], delete e[b], delete e[G], delete e[ae], delete e[ce];
  }
  function Ue(e) {
    var t = e[Pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[w] || n[Pt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Rv(e); e !== null; ) {
          if (n = e[Pt]) return n;
          e = Rv(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function De(e) {
    if (e = e[Pt] || e[w]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Ce(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function le(e) {
    var t = e[fe];
    return t || (t = e[fe] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ht(e) {
    e[xe] = true;
  }
  var We = /* @__PURE__ */ new Set(), Ie = {};
  function tt(e, t) {
    dt(e, t), dt(e + "Capture", t);
  }
  function dt(e, t) {
    for (Ie[e] = t, e = 0; e < t.length; e++) We.add(t[e]);
  }
  var Lt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ct = {}, Wt = {};
  function pn(e) {
    return Fe.call(Wt, e) ? true : Fe.call(Ct, e) ? false : Lt.test(e) ? Wt[e] = true : (Ct[e] = true, false);
  }
  function Tt(e, t, n) {
    if (pn(t)) if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(t);
          return;
        case "boolean":
          var a = t.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, "" + n);
    }
  }
  function xn(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function bt(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  function Ot(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Mn(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function wa(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var o = a.get, u = a.set;
      return Object.defineProperty(e, t, { configurable: true, get: function() {
        return o.call(this);
      }, set: function(g) {
        n = "" + g, u.call(this, g);
      } }), Object.defineProperty(e, t, { enumerable: a.enumerable }), { getValue: function() {
        return n;
      }, setValue: function(g) {
        n = "" + g;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function sn(e) {
    if (!e._valueTracker) {
      var t = Mn(e) ? "checked" : "value";
      e._valueTracker = wa(e, t, "" + e[t]);
    }
  }
  function zt(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), a = "";
    return e && (a = Mn(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), true) : false;
  }
  function en(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var jt = /[\n"\\]/g;
  function at(e) {
    return e.replace(jt, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Tn(e, t, n, a, o, u, g, _) {
    e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ot(t)) : e.value !== "" + Ot(t) && (e.value = "" + Ot(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? un(e, g, Ot(t)) : n != null ? un(e, g, Ot(n)) : a != null && e.removeAttribute("value"), o == null && u != null && (e.defaultChecked = !!u), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.name = "" + Ot(_) : e.removeAttribute("name");
  }
  function qn(e, t, n, a, o, u, g, _) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        sn(e);
        return;
      }
      n = n != null ? "" + Ot(n) : "", t = t != null ? "" + Ot(t) : n, _ || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? o, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = _ ? e.checked : !!a, e.defaultChecked = !!a, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g), sn(e);
  }
  function un(e, t, n) {
    t === "number" && en(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function An(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && a && (e[n].defaultSelected = true);
    } else {
      for (n = "" + Ot(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = true, a && (e[o].defaultSelected = true);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Zi(e, t, n) {
    if (t != null && (t = "" + Ot(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Ot(n) : "";
  }
  function Qi(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(s(92));
        if (te(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Ot(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), sn(e);
  }
  function Oa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var bo = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function vr(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || bo.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function gl(e, t, n) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (e = e.style, n != null) {
      for (var a in n) !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var o in t) a = t[o], t.hasOwnProperty(o) && n[o] !== a && vr(e, o, a);
    } else for (var u in t) t.hasOwnProperty(u) && vr(e, u, t[u]);
  }
  function Va(e) {
    if (e.indexOf("-") === -1) return false;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var So = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), yl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xa(e) {
    return yl.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function kn() {
  }
  var Za = null;
  function bl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ha = null, za = null;
  function Sl(e) {
    var t = De(e);
    if (t && (e = t.stateNode)) {
      var n = e[b] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Tn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + at("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var o = a[b] || null;
                if (!o) throw Error(s(90));
                Tn(a, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
              }
            }
            for (t = 0; t < n.length; t++) a = n[t], a.form === e.form && zt(a);
          }
          break e;
        case "textarea":
          Zi(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && An(e, !!n.multiple, t, false);
      }
    }
  }
  var _l = false;
  function qi(e, t, n) {
    if (_l) return e(t, n);
    _l = true;
    try {
      var a = e(t);
      return a;
    } finally {
      if (_l = false, (ha !== null || za !== null) && (ls(), ha && (t = ha, e = za, za = ha = null, Sl(t), e))) for (t = 0; t < e.length; t++) Sl(e[t]);
    }
  }
  function Qa(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[b] || null;
    if (a === null) return null;
    n = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var da = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), In = false;
  if (da) try {
    var qa = {};
    Object.defineProperty(qa, "passive", { get: function() {
      In = true;
    } }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
  } catch {
    In = false;
  }
  var Ma = null, El = null, vi = null;
  function mr() {
    if (vi) return vi;
    var e, t = El, n = t.length, a, o = "value" in Ma ? Ma.value : Ma.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var g = n - e;
    for (a = 1; a <= g && t[n - a] === o[u - a]; a++) ;
    return vi = o.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ii(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ra() {
    return true;
  }
  function mi() {
    return false;
  }
  function cn(e) {
    function t(n, a, o, u, g) {
      this._reactName = n, this._targetInst = o, this.type = a, this.nativeEvent = u, this.target = g, this.currentTarget = null;
      for (var _ in e) e.hasOwnProperty(_) && (n = e[_], this[_] = n ? n(u) : u[_]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? Ra : mi, this.isPropagationStopped = mi, this;
    }
    return y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Ra);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Ra);
    }, persist: function() {
    }, isPersistent: Ra }), t;
  }
  var La = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, pi = cn(La), Ia = y({}, La, { view: 0, detail: 0 }), Pi = cn(Ia), wl, Pa, Wa, Un = y({}, Ia, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qs, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Wa && (Wa && e.type === "mousemove" ? (wl = e.screenX - Wa.screenX, Pa = e.screenY - Wa.screenY) : Pa = wl = 0, Wa = e), wl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Pa;
  } }), _o = cn(Un), xl = y({}, Un, { dataTransfer: 0 }), Ml = cn(xl), Eo = y({}, Ia, { relatedTarget: 0 }), pr = cn(Eo), Yn = y({}, La, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), na = cn(Yn), Xn = y({}, La, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Ba = cn(Xn), wo = y({}, La, { data: 0 }), Df = cn(wo), C0 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, O0 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, z0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function R0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = z0[e]) ? !!t[e] : false;
  }
  function Qs() {
    return R0;
  }
  var L0 = y({}, Ia, { key: function(e) {
    if (e.key) {
      var t = C0[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ii(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? O0[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qs, charCode: function(e) {
    return e.type === "keypress" ? Ii(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ii(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), B0 = cn(L0), N0 = y({}, Un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cf = cn(N0), G0 = y({}, Ia, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qs }), H0 = cn(G0), F0 = y({}, La, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), j0 = cn(F0), k0 = y({}, Un, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Y0 = cn(k0), X0 = y({}, La, { newState: 0, oldState: 0 }), V0 = cn(X0), Z0 = [9, 13, 27, 32], qs = da && "CompositionEvent" in window, gr = null;
  da && "documentMode" in document && (gr = document.documentMode);
  var Q0 = da && "TextEvent" in window && !gr, Of = da && (!qs || gr && 8 < gr && 11 >= gr), zf = " ", Rf = false;
  function Lf(e, t) {
    switch (e) {
      case "keyup":
        return Z0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Bf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Tl = false;
  function q0(e, t) {
    switch (e) {
      case "compositionend":
        return Bf(t);
      case "keypress":
        return t.which !== 32 ? null : (Rf = true, zf);
      case "textInput":
        return e = t.data, e === zf && Rf ? null : e;
      default:
        return null;
    }
  }
  function I0(e, t) {
    if (Tl) return e === "compositionend" || !qs && Lf(e, t) ? (e = mr(), vi = El = Ma = null, Tl = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Of && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var P0 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Nf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!P0[e.type] : t === "textarea";
  }
  function Gf(e, t, n, a) {
    ha ? za ? za.push(a) : za = [a] : ha = a, t = hs(t, "onChange"), 0 < t.length && (n = new pi("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
  }
  var yr = null, br = null;
  function W0(e) {
    bv(e, 0);
  }
  function xo(e) {
    var t = Ce(e);
    if (zt(t)) return e;
  }
  function Hf(e, t) {
    if (e === "change") return t;
  }
  var Ff = false;
  if (da) {
    var Is;
    if (da) {
      var Ps = "oninput" in document;
      if (!Ps) {
        var jf = document.createElement("div");
        jf.setAttribute("oninput", "return;"), Ps = typeof jf.oninput == "function";
      }
      Is = Ps;
    } else Is = false;
    Ff = Is && (!document.documentMode || 9 < document.documentMode);
  }
  function kf() {
    yr && (yr.detachEvent("onpropertychange", Yf), br = yr = null);
  }
  function Yf(e) {
    if (e.propertyName === "value" && xo(br)) {
      var t = [];
      Gf(t, br, e, bl(e)), qi(W0, t);
    }
  }
  function K0(e, t, n) {
    e === "focusin" ? (kf(), yr = t, br = n, yr.attachEvent("onpropertychange", Yf)) : e === "focusout" && kf();
  }
  function J0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return xo(br);
  }
  function $0(e, t) {
    if (e === "click") return xo(t);
  }
  function e1(e, t) {
    if (e === "input" || e === "change") return xo(t);
  }
  function t1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var aa = typeof Object.is == "function" ? Object.is : t1;
  function Sr(e, t) {
    if (aa(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return false;
    for (a = 0; a < n.length; a++) {
      var o = n[a];
      if (!Fe.call(t, o) || !aa(e[o], t[o])) return false;
    }
    return true;
  }
  function Xf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Vf(e, t) {
    var n = Xf(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = e + n.textContent.length, e <= t && a >= t) return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Xf(n);
    }
  }
  function Zf(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Zf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Qf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = en(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = en(e.document);
    }
    return t;
  }
  function Ws(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var n1 = da && "documentMode" in document && 11 >= document.documentMode, Al = null, Ks = null, _r = null, Js = false;
  function qf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Js || Al == null || Al !== en(a) || (a = Al, "selectionStart" in a && Ws(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), _r && Sr(_r, a) || (_r = a, a = hs(Ks, "onSelect"), 0 < a.length && (t = new pi("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = Al)));
  }
  function Wi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ul = { animationend: Wi("Animation", "AnimationEnd"), animationiteration: Wi("Animation", "AnimationIteration"), animationstart: Wi("Animation", "AnimationStart"), transitionrun: Wi("Transition", "TransitionRun"), transitionstart: Wi("Transition", "TransitionStart"), transitioncancel: Wi("Transition", "TransitionCancel"), transitionend: Wi("Transition", "TransitionEnd") }, $s = {}, If = {};
  da && (If = document.createElement("div").style, "AnimationEvent" in window || (delete Ul.animationend.animation, delete Ul.animationiteration.animation, delete Ul.animationstart.animation), "TransitionEvent" in window || delete Ul.transitionend.transition);
  function Ki(e) {
    if ($s[e]) return $s[e];
    if (!Ul[e]) return e;
    var t = Ul[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in If) return $s[e] = t[n];
    return e;
  }
  var Pf = Ki("animationend"), Wf = Ki("animationiteration"), Kf = Ki("animationstart"), a1 = Ki("transitionrun"), i1 = Ki("transitionstart"), l1 = Ki("transitioncancel"), Jf = Ki("transitionend"), $f = /* @__PURE__ */ new Map(), eu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  eu.push("scrollEnd");
  function Ta(e, t) {
    $f.set(e, t), tt(t, [e]);
  }
  var Mo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, va = [], Dl = 0, tu = 0;
  function To() {
    for (var e = Dl, t = tu = Dl = 0; t < e; ) {
      var n = va[t];
      va[t++] = null;
      var a = va[t];
      va[t++] = null;
      var o = va[t];
      va[t++] = null;
      var u = va[t];
      if (va[t++] = null, a !== null && o !== null) {
        var g = a.pending;
        g === null ? o.next = o : (o.next = g.next, g.next = o), a.pending = o;
      }
      u !== 0 && eh(n, o, u);
    }
  }
  function Ao(e, t, n, a) {
    va[Dl++] = e, va[Dl++] = t, va[Dl++] = n, va[Dl++] = a, tu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function nu(e, t, n, a) {
    return Ao(e, t, n, a), Uo(e);
  }
  function Ji(e, t) {
    return Ao(e, null, null, t), Uo(e);
  }
  function eh(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var o = false, u = e.return; u !== null; ) u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (o = true)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, o && t !== null && (o = 31 - F(n), e = u.hiddenUpdates, a = e[o], a === null ? e[o] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function Uo(e) {
    if (50 < Xr) throw Xr = 0, fc = null, Error(s(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Cl = {};
  function r1(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ia(e, t, n, a) {
    return new r1(e, t, n, a);
  }
  function au(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ka(e, t) {
    var n = e.alternate;
    return n === null ? (n = ia(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function th(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
  }
  function Do(e, t, n, a, o, u) {
    var g = 0;
    if (a = e, typeof e == "function") au(e) && (g = 1);
    else if (typeof e == "string") g = fp(e, n, M.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case Y:
        return e = ia(31, n, t, o), e.elementType = Y, e.lanes = u, e;
      case U:
        return $i(n.children, o, u, t);
      case x:
        g = 8, o |= 24;
        break;
      case Q:
        return e = ia(12, n, t, o | 2), e.elementType = Q, e.lanes = u, e;
      case O:
        return e = ia(13, n, t, o), e.elementType = O, e.lanes = u, e;
      case L:
        return e = ia(19, n, t, o), e.elementType = L, e.lanes = u, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case C:
            g = 10;
            break e;
          case N:
            g = 9;
            break e;
          case z:
            g = 11;
            break e;
          case H:
            g = 14;
            break e;
          case D:
            g = 16, a = null;
            break e;
        }
        g = 29, n = Error(s(130, e === null ? "null" : typeof e, "")), a = null;
    }
    return t = ia(g, n, t, o), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function $i(e, t, n, a) {
    return e = ia(7, e, a, t), e.lanes = n, e;
  }
  function iu(e, t, n) {
    return e = ia(6, e, null, t), e.lanes = n, e;
  }
  function nh(e) {
    var t = ia(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function lu(e, t, n) {
    return t = ia(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  var ah = /* @__PURE__ */ new WeakMap();
  function ma(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = ah.get(e);
      return n !== void 0 ? n : (t = { value: e, source: t, stack: Me(t) }, ah.set(e, t), t);
    }
    return { value: e, source: t, stack: Me(t) };
  }
  var Ol = [], zl = 0, Co = null, Er = 0, pa = [], ga = 0, gi = null, Na = 1, Ga = "";
  function Ja(e, t) {
    Ol[zl++] = Er, Ol[zl++] = Co, Co = e, Er = t;
  }
  function ih(e, t, n) {
    pa[ga++] = Na, pa[ga++] = Ga, pa[ga++] = gi, gi = e;
    var a = Na;
    e = Ga;
    var o = 32 - F(a) - 1;
    a &= ~(1 << o), n += 1;
    var u = 32 - F(t) + o;
    if (30 < u) {
      var g = o - o % 5;
      u = (a & (1 << g) - 1).toString(32), a >>= g, o -= g, Na = 1 << 32 - F(t) + o | n << o | a, Ga = u + e;
    } else Na = 1 << u | n << o | a, Ga = e;
  }
  function ru(e) {
    e.return !== null && (Ja(e, 1), ih(e, 1, 0));
  }
  function ou(e) {
    for (; e === Co; ) Co = Ol[--zl], Ol[zl] = null, Er = Ol[--zl], Ol[zl] = null;
    for (; e === gi; ) gi = pa[--ga], pa[ga] = null, Ga = pa[--ga], pa[ga] = null, Na = pa[--ga], pa[ga] = null;
  }
  function lh(e, t) {
    pa[ga++] = Na, pa[ga++] = Ga, pa[ga++] = gi, Na = t.id, Ga = t.overflow, gi = e;
  }
  var Cn = null, tn = null, Dt = false, yi = null, ya = false, su = Error(s(519));
  function bi(e) {
    var t = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw wr(ma(t, e)), su;
  }
  function rh(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[Pt] = e, t[b] = a, n) {
      case "dialog":
        xt("cancel", t), xt("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        xt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Zr.length; n++) xt(Zr[n], t);
        break;
      case "source":
        xt("error", t);
        break;
      case "img":
      case "image":
      case "link":
        xt("error", t), xt("load", t);
        break;
      case "details":
        xt("toggle", t);
        break;
      case "input":
        xt("invalid", t), qn(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        xt("invalid", t);
        break;
      case "textarea":
        xt("invalid", t), Qi(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || wv(t.textContent, n) ? (a.popover != null && (xt("beforetoggle", t), xt("toggle", t)), a.onScroll != null && xt("scroll", t), a.onScrollEnd != null && xt("scrollend", t), a.onClick != null && (t.onclick = kn), t = true) : t = false, t || bi(e, true);
  }
  function oh(e) {
    for (Cn = e.return; Cn; ) switch (Cn.tag) {
      case 5:
      case 31:
      case 13:
        ya = false;
        return;
      case 27:
      case 3:
        ya = true;
        return;
      default:
        Cn = Cn.return;
    }
  }
  function Rl(e) {
    if (e !== Cn) return false;
    if (!Dt) return oh(e), Dt = true, false;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Tc(e.type, e.memoizedProps)), n = !n), n && tn && bi(e), oh(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      tn = zv(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      tn = zv(e);
    } else t === 27 ? (t = tn, Ri(e.type) ? (e = Oc, Oc = null, tn = e) : tn = t) : tn = Cn ? Sa(e.stateNode.nextSibling) : null;
    return true;
  }
  function el() {
    tn = Cn = null, Dt = false;
  }
  function uu() {
    var e = yi;
    return e !== null && ($n === null ? $n = e : $n.push.apply($n, e), yi = null), e;
  }
  function wr(e) {
    yi === null ? yi = [e] : yi.push(e);
  }
  var cu = T(null), tl = null, $a = null;
  function Si(e, t, n) {
    V(cu, t._currentValue), t._currentValue = n;
  }
  function ei(e) {
    e._currentValue = cu.current, B(cu);
  }
  function fu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function hu(e, t, n, a) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var u = o.dependencies;
      if (u !== null) {
        var g = o.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var _ = u;
          u = o;
          for (var R = 0; R < t.length; R++) if (_.context === t[R]) {
            u.lanes |= n, _ = u.alternate, _ !== null && (_.lanes |= n), fu(u.return, n, e), a || (g = null);
            break e;
          }
          u = _.next;
        }
      } else if (o.tag === 18) {
        if (g = o.return, g === null) throw Error(s(341));
        g.lanes |= n, u = g.alternate, u !== null && (u.lanes |= n), fu(g, n, e), g = null;
      } else g = o.child;
      if (g !== null) g.return = o;
      else for (g = o; g !== null; ) {
        if (g === e) {
          g = null;
          break;
        }
        if (o = g.sibling, o !== null) {
          o.return = g.return, g = o;
          break;
        }
        g = g.return;
      }
      o = g;
    }
  }
  function Ll(e, t, n, a) {
    e = null;
    for (var o = t, u = false; o !== null; ) {
      if (!u) {
        if ((o.flags & 524288) !== 0) u = true;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var g = o.alternate;
        if (g === null) throw Error(s(387));
        if (g = g.memoizedProps, g !== null) {
          var _ = o.type;
          aa(o.pendingProps.value, g.value) || (e !== null ? e.push(_) : e = [_]);
        }
      } else if (o === se.current) {
        if (g = o.alternate, g === null) throw Error(s(387));
        g.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Wr) : e = [Wr]);
      }
      o = o.return;
    }
    e !== null && hu(t, e, n, a), t.flags |= 262144;
  }
  function Oo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!aa(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function nl(e) {
    tl = e, $a = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function On(e) {
    return sh(tl, e);
  }
  function zo(e, t) {
    return tl === null && nl(e), sh(e, t);
  }
  function sh(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, $a === null) {
      if (e === null) throw Error(s(308));
      $a = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else $a = $a.next = t;
    return n;
  }
  var o1 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = { aborted: false, addEventListener: function(n, a) {
      e.push(a);
    } };
    this.abort = function() {
      t.aborted = true, e.forEach(function(n) {
        return n();
      });
    };
  }, s1 = p.unstable_scheduleCallback, u1 = p.unstable_NormalPriority, gn = { $$typeof: C, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function du() {
    return { controller: new o1(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function xr(e) {
    e.refCount--, e.refCount === 0 && s1(u1, function() {
      e.controller.abort();
    });
  }
  var Mr = null, vu = 0, Bl = 0, Nl = null;
  function c1(e, t) {
    if (Mr === null) {
      var n = Mr = [];
      vu = 0, Bl = gc(), Nl = { status: "pending", value: void 0, then: function(a) {
        n.push(a);
      } };
    }
    return vu++, t.then(uh, uh), t;
  }
  function uh() {
    if (--vu === 0 && Mr !== null) {
      Nl !== null && (Nl.status = "fulfilled");
      var e = Mr;
      Mr = null, Bl = 0, Nl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function f1(e, t) {
    var n = [], a = { status: "pending", value: null, reason: null, then: function(o) {
      n.push(o);
    } };
    return e.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var o = 0; o < n.length; o++) (0, n[o])(t);
    }, function(o) {
      for (a.status = "rejected", a.reason = o, o = 0; o < n.length; o++) (0, n[o])(void 0);
    }), a;
  }
  var ch = q.S;
  q.S = function(e, t) {
    qd = Le(), typeof t == "object" && t !== null && typeof t.then == "function" && c1(e, t), ch !== null && ch(e, t);
  };
  var al = T(null);
  function mu() {
    var e = al.current;
    return e !== null ? e : Kt.pooledCache;
  }
  function Ro(e, t) {
    t === null ? V(al, al.current) : V(al, t.pool);
  }
  function fh() {
    var e = mu();
    return e === null ? null : { parent: gn._currentValue, pool: e };
  }
  var Gl = Error(s(460)), pu = Error(s(474)), Lo = Error(s(542)), Bo = { then: function() {
  } };
  function hh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function dh(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(kn, kn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, mh(e), e;
      default:
        if (typeof t.status == "string") t.then(kn, kn);
        else {
          if (e = Kt, e !== null && 100 < e.shellSuspendCounter) throw Error(s(482));
          e = t, e.status = "pending", e.then(function(a) {
            if (t.status === "pending") {
              var o = t;
              o.status = "fulfilled", o.value = a;
            }
          }, function(a) {
            if (t.status === "pending") {
              var o = t;
              o.status = "rejected", o.reason = a;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, mh(e), e;
        }
        throw ll = t, Gl;
    }
  }
  function il(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ll = n, Gl) : n;
    }
  }
  var ll = null;
  function vh() {
    if (ll === null) throw Error(s(459));
    var e = ll;
    return ll = null, e;
  }
  function mh(e) {
    if (e === Gl || e === Lo) throw Error(s(483));
  }
  var Hl = null, Tr = 0;
  function No(e) {
    var t = Tr;
    return Tr += 1, Hl === null && (Hl = []), dh(Hl, e, t);
  }
  function Ar(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Go(e, t) {
    throw t.$$typeof === S ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function ph(e) {
    function t(P, X) {
      if (e) {
        var $ = P.deletions;
        $ === null ? (P.deletions = [X], P.flags |= 16) : $.push(X);
      }
    }
    function n(P, X) {
      if (!e) return null;
      for (; X !== null; ) t(P, X), X = X.sibling;
      return null;
    }
    function a(P) {
      for (var X = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? X.set(P.key, P) : X.set(P.index, P), P = P.sibling;
      return X;
    }
    function o(P, X) {
      return P = Ka(P, X), P.index = 0, P.sibling = null, P;
    }
    function u(P, X, $) {
      return P.index = $, e ? ($ = P.alternate, $ !== null ? ($ = $.index, $ < X ? (P.flags |= 67108866, X) : $) : (P.flags |= 67108866, X)) : (P.flags |= 1048576, X);
    }
    function g(P) {
      return e && P.alternate === null && (P.flags |= 67108866), P;
    }
    function _(P, X, $, ge) {
      return X === null || X.tag !== 6 ? (X = iu($, P.mode, ge), X.return = P, X) : (X = o(X, $), X.return = P, X);
    }
    function R(P, X, $, ge) {
      var nt = $.type;
      return nt === U ? ve(P, X, $.props.children, ge, $.key) : X !== null && (X.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === D && il(nt) === X.type) ? (X = o(X, $.props), Ar(X, $), X.return = P, X) : (X = Do($.type, $.key, $.props, null, P.mode, ge), Ar(X, $), X.return = P, X);
    }
    function ee(P, X, $, ge) {
      return X === null || X.tag !== 4 || X.stateNode.containerInfo !== $.containerInfo || X.stateNode.implementation !== $.implementation ? (X = lu($, P.mode, ge), X.return = P, X) : (X = o(X, $.children || []), X.return = P, X);
    }
    function ve(P, X, $, ge, nt) {
      return X === null || X.tag !== 7 ? (X = $i($, P.mode, ge, nt), X.return = P, X) : (X = o(X, $), X.return = P, X);
    }
    function Se(P, X, $) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint") return X = iu("" + X, P.mode, $), X.return = P, X;
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case E:
            return $ = Do(X.type, X.key, X.props, null, P.mode, $), Ar($, X), $.return = P, $;
          case A:
            return X = lu(X, P.mode, $), X.return = P, X;
          case D:
            return X = il(X), Se(P, X, $);
        }
        if (te(X) || j(X)) return X = $i(X, P.mode, $, null), X.return = P, X;
        if (typeof X.then == "function") return Se(P, No(X), $);
        if (X.$$typeof === C) return Se(P, zo(P, X), $);
        Go(P, X);
      }
      return null;
    }
    function ne(P, X, $, ge) {
      var nt = X !== null ? X.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint") return nt !== null ? null : _(P, X, "" + $, ge);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case E:
            return $.key === nt ? R(P, X, $, ge) : null;
          case A:
            return $.key === nt ? ee(P, X, $, ge) : null;
          case D:
            return $ = il($), ne(P, X, $, ge);
        }
        if (te($) || j($)) return nt !== null ? null : ve(P, X, $, ge, null);
        if (typeof $.then == "function") return ne(P, X, No($), ge);
        if ($.$$typeof === C) return ne(P, X, zo(P, $), ge);
        Go(P, $);
      }
      return null;
    }
    function oe(P, X, $, ge, nt) {
      if (typeof ge == "string" && ge !== "" || typeof ge == "number" || typeof ge == "bigint") return P = P.get($) || null, _(X, P, "" + ge, nt);
      if (typeof ge == "object" && ge !== null) {
        switch (ge.$$typeof) {
          case E:
            return P = P.get(ge.key === null ? $ : ge.key) || null, R(X, P, ge, nt);
          case A:
            return P = P.get(ge.key === null ? $ : ge.key) || null, ee(X, P, ge, nt);
          case D:
            return ge = il(ge), oe(P, X, $, ge, nt);
        }
        if (te(ge) || j(ge)) return P = P.get($) || null, ve(X, P, ge, nt, null);
        if (typeof ge.then == "function") return oe(P, X, $, No(ge), nt);
        if (ge.$$typeof === C) return oe(P, X, $, zo(X, ge), nt);
        Go(X, ge);
      }
      return null;
    }
    function qe(P, X, $, ge) {
      for (var nt = null, Bt = null, Ke = X, pt = X = 0, Ut = null; Ke !== null && pt < $.length; pt++) {
        Ke.index > pt ? (Ut = Ke, Ke = null) : Ut = Ke.sibling;
        var Nt = ne(P, Ke, $[pt], ge);
        if (Nt === null) {
          Ke === null && (Ke = Ut);
          break;
        }
        e && Ke && Nt.alternate === null && t(P, Ke), X = u(Nt, X, pt), Bt === null ? nt = Nt : Bt.sibling = Nt, Bt = Nt, Ke = Ut;
      }
      if (pt === $.length) return n(P, Ke), Dt && Ja(P, pt), nt;
      if (Ke === null) {
        for (; pt < $.length; pt++) Ke = Se(P, $[pt], ge), Ke !== null && (X = u(Ke, X, pt), Bt === null ? nt = Ke : Bt.sibling = Ke, Bt = Ke);
        return Dt && Ja(P, pt), nt;
      }
      for (Ke = a(Ke); pt < $.length; pt++) Ut = oe(Ke, P, pt, $[pt], ge), Ut !== null && (e && Ut.alternate !== null && Ke.delete(Ut.key === null ? pt : Ut.key), X = u(Ut, X, pt), Bt === null ? nt = Ut : Bt.sibling = Ut, Bt = Ut);
      return e && Ke.forEach(function(Hi) {
        return t(P, Hi);
      }), Dt && Ja(P, pt), nt;
    }
    function st(P, X, $, ge) {
      if ($ == null) throw Error(s(151));
      for (var nt = null, Bt = null, Ke = X, pt = X = 0, Ut = null, Nt = $.next(); Ke !== null && !Nt.done; pt++, Nt = $.next()) {
        Ke.index > pt ? (Ut = Ke, Ke = null) : Ut = Ke.sibling;
        var Hi = ne(P, Ke, Nt.value, ge);
        if (Hi === null) {
          Ke === null && (Ke = Ut);
          break;
        }
        e && Ke && Hi.alternate === null && t(P, Ke), X = u(Hi, X, pt), Bt === null ? nt = Hi : Bt.sibling = Hi, Bt = Hi, Ke = Ut;
      }
      if (Nt.done) return n(P, Ke), Dt && Ja(P, pt), nt;
      if (Ke === null) {
        for (; !Nt.done; pt++, Nt = $.next()) Nt = Se(P, Nt.value, ge), Nt !== null && (X = u(Nt, X, pt), Bt === null ? nt = Nt : Bt.sibling = Nt, Bt = Nt);
        return Dt && Ja(P, pt), nt;
      }
      for (Ke = a(Ke); !Nt.done; pt++, Nt = $.next()) Nt = oe(Ke, P, pt, Nt.value, ge), Nt !== null && (e && Nt.alternate !== null && Ke.delete(Nt.key === null ? pt : Nt.key), X = u(Nt, X, pt), Bt === null ? nt = Nt : Bt.sibling = Nt, Bt = Nt);
      return e && Ke.forEach(function(Ep) {
        return t(P, Ep);
      }), Dt && Ja(P, pt), nt;
    }
    function qt(P, X, $, ge) {
      if (typeof $ == "object" && $ !== null && $.type === U && $.key === null && ($ = $.props.children), typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case E:
            e: {
              for (var nt = $.key; X !== null; ) {
                if (X.key === nt) {
                  if (nt = $.type, nt === U) {
                    if (X.tag === 7) {
                      n(P, X.sibling), ge = o(X, $.props.children), ge.return = P, P = ge;
                      break e;
                    }
                  } else if (X.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === D && il(nt) === X.type) {
                    n(P, X.sibling), ge = o(X, $.props), Ar(ge, $), ge.return = P, P = ge;
                    break e;
                  }
                  n(P, X);
                  break;
                } else t(P, X);
                X = X.sibling;
              }
              $.type === U ? (ge = $i($.props.children, P.mode, ge, $.key), ge.return = P, P = ge) : (ge = Do($.type, $.key, $.props, null, P.mode, ge), Ar(ge, $), ge.return = P, P = ge);
            }
            return g(P);
          case A:
            e: {
              for (nt = $.key; X !== null; ) {
                if (X.key === nt) if (X.tag === 4 && X.stateNode.containerInfo === $.containerInfo && X.stateNode.implementation === $.implementation) {
                  n(P, X.sibling), ge = o(X, $.children || []), ge.return = P, P = ge;
                  break e;
                } else {
                  n(P, X);
                  break;
                }
                else t(P, X);
                X = X.sibling;
              }
              ge = lu($, P.mode, ge), ge.return = P, P = ge;
            }
            return g(P);
          case D:
            return $ = il($), qt(P, X, $, ge);
        }
        if (te($)) return qe(P, X, $, ge);
        if (j($)) {
          if (nt = j($), typeof nt != "function") throw Error(s(150));
          return $ = nt.call($), st(P, X, $, ge);
        }
        if (typeof $.then == "function") return qt(P, X, No($), ge);
        if ($.$$typeof === C) return qt(P, X, zo(P, $), ge);
        Go(P, $);
      }
      return typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint" ? ($ = "" + $, X !== null && X.tag === 6 ? (n(P, X.sibling), ge = o(X, $), ge.return = P, P = ge) : (n(P, X), ge = iu($, P.mode, ge), ge.return = P, P = ge), g(P)) : n(P, X);
    }
    return function(P, X, $, ge) {
      try {
        Tr = 0;
        var nt = qt(P, X, $, ge);
        return Hl = null, nt;
      } catch (Ke) {
        if (Ke === Gl || Ke === Lo) throw Ke;
        var Bt = ia(29, Ke, null, P.mode);
        return Bt.lanes = ge, Bt.return = P, Bt;
      } finally {
      }
    };
  }
  var rl = ph(true), gh = ph(false), _i = false;
  function gu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function yu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function Ei(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function wi(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Gt & 2) !== 0) {
      var o = a.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), a.pending = t, t = Uo(e), eh(e, null, n), t;
    }
    return Ao(e, a, t, n), Uo(e);
  }
  function Ur(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Hn(e, n);
    }
  }
  function bu(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var g = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          u === null ? o = u = g : u = u.next = g, n = n.next;
        } while (n !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      n = { baseState: a.baseState, firstBaseUpdate: o, lastBaseUpdate: u, shared: a.shared, callbacks: a.callbacks }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Su = false;
  function Dr() {
    if (Su) {
      var e = Nl;
      if (e !== null) throw e;
    }
  }
  function Cr(e, t, n, a) {
    Su = false;
    var o = e.updateQueue;
    _i = false;
    var u = o.firstBaseUpdate, g = o.lastBaseUpdate, _ = o.shared.pending;
    if (_ !== null) {
      o.shared.pending = null;
      var R = _, ee = R.next;
      R.next = null, g === null ? u = ee : g.next = ee, g = R;
      var ve = e.alternate;
      ve !== null && (ve = ve.updateQueue, _ = ve.lastBaseUpdate, _ !== g && (_ === null ? ve.firstBaseUpdate = ee : _.next = ee, ve.lastBaseUpdate = R));
    }
    if (u !== null) {
      var Se = o.baseState;
      g = 0, ve = ee = R = null, _ = u;
      do {
        var ne = _.lane & -536870913, oe = ne !== _.lane;
        if (oe ? (At & ne) === ne : (a & ne) === ne) {
          ne !== 0 && ne === Bl && (Su = true), ve !== null && (ve = ve.next = { lane: 0, tag: _.tag, payload: _.payload, callback: null, next: null });
          e: {
            var qe = e, st = _;
            ne = t;
            var qt = n;
            switch (st.tag) {
              case 1:
                if (qe = st.payload, typeof qe == "function") {
                  Se = qe.call(qt, Se, ne);
                  break e;
                }
                Se = qe;
                break e;
              case 3:
                qe.flags = qe.flags & -65537 | 128;
              case 0:
                if (qe = st.payload, ne = typeof qe == "function" ? qe.call(qt, Se, ne) : qe, ne == null) break e;
                Se = y({}, Se, ne);
                break e;
              case 2:
                _i = true;
            }
          }
          ne = _.callback, ne !== null && (e.flags |= 64, oe && (e.flags |= 8192), oe = o.callbacks, oe === null ? o.callbacks = [ne] : oe.push(ne));
        } else oe = { lane: ne, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, ve === null ? (ee = ve = oe, R = Se) : ve = ve.next = oe, g |= ne;
        if (_ = _.next, _ === null) {
          if (_ = o.shared.pending, _ === null) break;
          oe = _, _ = oe.next, oe.next = null, o.lastBaseUpdate = oe, o.shared.pending = null;
        }
      } while (true);
      ve === null && (R = Se), o.baseState = R, o.firstBaseUpdate = ee, o.lastBaseUpdate = ve, u === null && (o.shared.lanes = 0), Ui |= g, e.lanes = g, e.memoizedState = Se;
    }
  }
  function yh(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function bh(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) yh(n[e], t);
  }
  var Fl = T(null), Ho = T(0);
  function Sh(e, t) {
    e = ui, V(Ho, e), V(Fl, t), ui = e | t.baseLanes;
  }
  function _u() {
    V(Ho, ui), V(Fl, Fl.current);
  }
  function Eu() {
    ui = Ho.current, B(Fl), B(Ho);
  }
  var la = T(null), ba = null;
  function xi(e) {
    var t = e.alternate;
    V(vn, vn.current & 1), V(la, e), ba === null && (t === null || Fl.current !== null || t.memoizedState !== null) && (ba = e);
  }
  function wu(e) {
    V(vn, vn.current), V(la, e), ba === null && (ba = e);
  }
  function _h(e) {
    e.tag === 22 ? (V(vn, vn.current), V(la, e), ba === null && (ba = e)) : Mi();
  }
  function Mi() {
    V(vn, vn.current), V(la, la.current);
  }
  function ra(e) {
    B(la), ba === e && (ba = null), B(vn);
  }
  var vn = T(0);
  function Fo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Dc(n) || Cc(n))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ti = 0, mt = null, Zt = null, yn = null, jo = false, jl = false, ol = false, ko = 0, Or = 0, kl = null, h1 = 0;
  function hn() {
    throw Error(s(321));
  }
  function xu(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!aa(e[n], t[n])) return false;
    return true;
  }
  function Mu(e, t, n, a, o, u) {
    return ti = u, mt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e === null || e.memoizedState === null ? id : ju, ol = false, u = n(a, o), ol = false, jl && (u = wh(t, n, a, o)), Eh(e), u;
  }
  function Eh(e) {
    q.H = Lr;
    var t = Zt !== null && Zt.next !== null;
    if (ti = 0, yn = Zt = mt = null, jo = false, Or = 0, kl = null, t) throw Error(s(300));
    e === null || bn || (e = e.dependencies, e !== null && Oo(e) && (bn = true));
  }
  function wh(e, t, n, a) {
    mt = e;
    var o = 0;
    do {
      if (jl && (kl = null), Or = 0, jl = false, 25 <= o) throw Error(s(301));
      if (o += 1, yn = Zt = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      q.H = ld, u = t(n, a);
    } while (jl);
    return u;
  }
  function d1() {
    var e = q.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? zr(t) : t, e = e.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== e && (mt.flags |= 1024), t;
  }
  function Tu() {
    var e = ko !== 0;
    return ko = 0, e;
  }
  function Au(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Uu(e) {
    if (jo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      jo = false;
    }
    ti = 0, yn = Zt = mt = null, jl = false, Or = ko = 0, kl = null;
  }
  function Pn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return yn === null ? mt.memoizedState = yn = e : yn = yn.next = e, yn;
  }
  function mn() {
    if (Zt === null) {
      var e = mt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Zt.next;
    var t = yn === null ? mt.memoizedState : yn.next;
    if (t !== null) yn = t, Zt = e;
    else {
      if (e === null) throw mt.alternate === null ? Error(s(467)) : Error(s(310));
      Zt = e, e = { memoizedState: Zt.memoizedState, baseState: Zt.baseState, baseQueue: Zt.baseQueue, queue: Zt.queue, next: null }, yn === null ? mt.memoizedState = yn = e : yn = yn.next = e;
    }
    return yn;
  }
  function Yo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function zr(e) {
    var t = Or;
    return Or += 1, kl === null && (kl = []), e = dh(kl, e, t), t = mt, (yn === null ? t.memoizedState : yn.next) === null && (t = t.alternate, q.H = t === null || t.memoizedState === null ? id : ju), e;
  }
  function Xo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return zr(e);
      if (e.$$typeof === C) return On(e);
    }
    throw Error(s(438, String(e)));
  }
  function Du(e) {
    var t = null, n = mt.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = mt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(o) {
        return o.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Yo(), mt.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = I;
    return t.index++, n;
  }
  function ni(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Vo(e) {
    var t = mn();
    return Cu(t, Zt, e);
  }
  function Cu(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = n;
    var o = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (o !== null) {
        var g = o.next;
        o.next = u.next, u.next = g;
      }
      t.baseQueue = o = u, a.pending = null;
    }
    if (u = e.baseState, o === null) e.memoizedState = u;
    else {
      t = o.next;
      var _ = g = null, R = null, ee = t, ve = false;
      do {
        var Se = ee.lane & -536870913;
        if (Se !== ee.lane ? (At & Se) === Se : (ti & Se) === Se) {
          var ne = ee.revertLane;
          if (ne === 0) R !== null && (R = R.next = { lane: 0, revertLane: 0, gesture: null, action: ee.action, hasEagerState: ee.hasEagerState, eagerState: ee.eagerState, next: null }), Se === Bl && (ve = true);
          else if ((ti & ne) === ne) {
            ee = ee.next, ne === Bl && (ve = true);
            continue;
          } else Se = { lane: 0, revertLane: ee.revertLane, gesture: null, action: ee.action, hasEagerState: ee.hasEagerState, eagerState: ee.eagerState, next: null }, R === null ? (_ = R = Se, g = u) : R = R.next = Se, mt.lanes |= ne, Ui |= ne;
          Se = ee.action, ol && n(u, Se), u = ee.hasEagerState ? ee.eagerState : n(u, Se);
        } else ne = { lane: Se, revertLane: ee.revertLane, gesture: ee.gesture, action: ee.action, hasEagerState: ee.hasEagerState, eagerState: ee.eagerState, next: null }, R === null ? (_ = R = ne, g = u) : R = R.next = ne, mt.lanes |= Se, Ui |= Se;
        ee = ee.next;
      } while (ee !== null && ee !== t);
      if (R === null ? g = u : R.next = _, !aa(u, e.memoizedState) && (bn = true, ve && (n = Nl, n !== null))) throw n;
      e.memoizedState = u, e.baseState = g, e.baseQueue = R, a.lastRenderedState = u;
    }
    return o === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Ou(e) {
    var t = mn(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, o = n.pending, u = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var g = o = o.next;
      do
        u = e(u, g.action), g = g.next;
      while (g !== o);
      aa(u, t.memoizedState) || (bn = true), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function xh(e, t, n) {
    var a = mt, o = mn(), u = Dt;
    if (u) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var g = !aa((Zt || o).memoizedState, n);
    if (g && (o.memoizedState = n, bn = true), o = o.queue, Lu(Ah.bind(null, a, o, e), [e]), o.getSnapshot !== t || g || yn !== null && yn.memoizedState.tag & 1) {
      if (a.flags |= 2048, Yl(9, { destroy: void 0 }, Th.bind(null, a, o, n, t), null), Kt === null) throw Error(s(349));
      u || (ti & 127) !== 0 || Mh(a, t, n);
    }
    return n;
  }
  function Mh(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = mt.updateQueue, t === null ? (t = Yo(), mt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Th(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Uh(t) && Dh(e);
  }
  function Ah(e, t, n) {
    return n(function() {
      Uh(t) && Dh(e);
    });
  }
  function Uh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !aa(e, n);
    } catch {
      return true;
    }
  }
  function Dh(e) {
    var t = Ji(e, 2);
    t !== null && ea(t, e, 2);
  }
  function zu(e) {
    var t = Pn();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), ol) {
        Xe(true);
        try {
          n();
        } finally {
          Xe(false);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ni, lastRenderedState: e }, t;
  }
  function Ch(e, t, n, a) {
    return e.baseState = n, Cu(e, Zt, typeof a == "function" ? a : ni);
  }
  function v1(e, t, n, a, o) {
    if (qo(e)) throw Error(s(485));
    if (e = t.action, e !== null) {
      var u = { payload: o, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(g) {
        u.listeners.push(g);
      } };
      q.T !== null ? n(true) : u.isTransition = false, a(u), n = t.pending, n === null ? (u.next = t.pending = u, Oh(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function Oh(e, t) {
    var n = t.action, a = t.payload, o = e.state;
    if (t.isTransition) {
      var u = q.T, g = {};
      q.T = g;
      try {
        var _ = n(o, a), R = q.S;
        R !== null && R(g, _), zh(e, t, _);
      } catch (ee) {
        Ru(e, t, ee);
      } finally {
        u !== null && g.types !== null && (u.types = g.types), q.T = u;
      }
    } else try {
      u = n(o, a), zh(e, t, u);
    } catch (ee) {
      Ru(e, t, ee);
    }
  }
  function zh(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
      Rh(e, t, a);
    }, function(a) {
      return Ru(e, t, a);
    }) : Rh(e, t, n);
  }
  function Rh(e, t, n) {
    t.status = "fulfilled", t.value = n, Lh(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Oh(e, n)));
  }
  function Ru(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Lh(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Lh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Bh(e, t) {
    return t;
  }
  function Nh(e, t) {
    if (Dt) {
      var n = Kt.formState;
      if (n !== null) {
        e: {
          var a = mt;
          if (Dt) {
            if (tn) {
              t: {
                for (var o = tn, u = ya; o.nodeType !== 8; ) {
                  if (!u) {
                    o = null;
                    break t;
                  }
                  if (o = Sa(o.nextSibling), o === null) {
                    o = null;
                    break t;
                  }
                }
                u = o.data, o = u === "F!" || u === "F" ? o : null;
              }
              if (o) {
                tn = Sa(o.nextSibling), a = o.data === "F!";
                break e;
              }
            }
            bi(a);
          }
          a = false;
        }
        a && (t = n[0]);
      }
    }
    return n = Pn(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Bh, lastRenderedState: t }, n.queue = a, n = td.bind(null, mt, a), a.dispatch = n, a = zu(false), u = Fu.bind(null, mt, false, a.queue), a = Pn(), o = { state: t, dispatch: null, action: e, pending: null }, a.queue = o, n = v1.bind(null, mt, o, u, n), o.dispatch = n, a.memoizedState = e, [t, n, false];
  }
  function Gh(e) {
    var t = mn();
    return Hh(t, Zt, e);
  }
  function Hh(e, t, n) {
    if (t = Cu(e, t, Bh)[0], e = Vo(ni)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = zr(t);
    } catch (g) {
      throw g === Gl ? Lo : g;
    }
    else a = t;
    t = mn();
    var o = t.queue, u = o.dispatch;
    return n !== t.memoizedState && (mt.flags |= 2048, Yl(9, { destroy: void 0 }, m1.bind(null, o, n), null)), [a, u, e];
  }
  function m1(e, t) {
    e.action = t;
  }
  function Fh(e) {
    var t = mn(), n = Zt;
    if (n !== null) return Hh(t, n, e);
    mn(), t = t.memoizedState, n = mn();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, false];
  }
  function Yl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = mt.updateQueue, t === null && (t = Yo(), mt.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function jh() {
    return mn().memoizedState;
  }
  function Zo(e, t, n, a) {
    var o = Pn();
    mt.flags |= e, o.memoizedState = Yl(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a);
  }
  function Qo(e, t, n, a) {
    var o = mn();
    a = a === void 0 ? null : a;
    var u = o.memoizedState.inst;
    Zt !== null && a !== null && xu(a, Zt.memoizedState.deps) ? o.memoizedState = Yl(t, u, n, a) : (mt.flags |= e, o.memoizedState = Yl(1 | t, u, n, a));
  }
  function kh(e, t) {
    Zo(8390656, 8, e, t);
  }
  function Lu(e, t) {
    Qo(2048, 8, e, t);
  }
  function p1(e) {
    mt.flags |= 4;
    var t = mt.updateQueue;
    if (t === null) t = Yo(), mt.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Yh(e) {
    var t = mn().memoizedState;
    return p1({ ref: t, nextImpl: e }), function() {
      if ((Gt & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Xh(e, t) {
    return Qo(4, 2, e, t);
  }
  function Vh(e, t) {
    return Qo(4, 4, e, t);
  }
  function Zh(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Qh(e, t, n) {
    n = n != null ? n.concat([e]) : null, Qo(4, 4, Zh.bind(null, t, e), n);
  }
  function Bu() {
  }
  function qh(e, t) {
    var n = mn();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && xu(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Ih(e, t) {
    var n = mn();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && xu(t, a[1])) return a[0];
    if (a = e(), ol) {
      Xe(true);
      try {
        e();
      } finally {
        Xe(false);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Nu(e, t, n) {
    return n === void 0 || (ti & 1073741824) !== 0 && (At & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Pd(), mt.lanes |= e, Ui |= e, n);
  }
  function Ph(e, t, n, a) {
    return aa(n, t) ? n : Fl.current !== null ? (e = Nu(e, n, a), aa(e, t) || (bn = true), e) : (ti & 42) === 0 || (ti & 1073741824) !== 0 && (At & 261930) === 0 ? (bn = true, e.memoizedState = n) : (e = Pd(), mt.lanes |= e, Ui |= e, t);
  }
  function Wh(e, t, n, a, o) {
    var u = he.p;
    he.p = u !== 0 && 8 > u ? u : 8;
    var g = q.T, _ = {};
    q.T = _, Fu(e, false, t, n);
    try {
      var R = o(), ee = q.S;
      if (ee !== null && ee(_, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var ve = f1(R, a);
        Rr(e, t, ve, ua(e));
      } else Rr(e, t, a, ua(e));
    } catch (Se) {
      Rr(e, t, { then: function() {
      }, status: "rejected", reason: Se }, ua());
    } finally {
      he.p = u, g !== null && _.types !== null && (g.types = _.types), q.T = g;
    }
  }
  function g1() {
  }
  function Gu(e, t, n, a) {
    if (e.tag !== 5) throw Error(s(476));
    var o = Kh(e).queue;
    Wh(e, o, t, Te, n === null ? g1 : function() {
      return Jh(e), n(a);
    });
  }
  function Kh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: Te, baseState: Te, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ni, lastRenderedState: Te }, next: null };
    var n = {};
    return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ni, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Jh(e) {
    var t = Kh(e);
    t.next === null && (t = e.alternate.memoizedState), Rr(e, t.next.queue, {}, ua());
  }
  function Hu() {
    return On(Wr);
  }
  function $h() {
    return mn().memoizedState;
  }
  function ed() {
    return mn().memoizedState;
  }
  function y1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = ua();
          e = Ei(n);
          var a = wi(t, e, n);
          a !== null && (ea(a, t, n), Ur(a, t, n)), t = { cache: du() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function b1(e, t, n) {
    var a = ua();
    n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, qo(e) ? nd(t, n) : (n = nu(e, t, n, a), n !== null && (ea(n, e, a), ad(n, t, a)));
  }
  function td(e, t, n) {
    var a = ua();
    Rr(e, t, n, a);
  }
  function Rr(e, t, n, a) {
    var o = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
    if (qo(e)) nd(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var g = t.lastRenderedState, _ = u(g, n);
        if (o.hasEagerState = true, o.eagerState = _, aa(_, g)) return Ao(e, t, o, 0), Kt === null && To(), false;
      } catch {
      } finally {
      }
      if (n = nu(e, t, o, a), n !== null) return ea(n, e, a), ad(n, t, a), true;
    }
    return false;
  }
  function Fu(e, t, n, a) {
    if (a = { lane: 2, revertLane: gc(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, qo(e)) {
      if (t) throw Error(s(479));
    } else t = nu(e, n, a, 2), t !== null && ea(t, e, 2);
  }
  function qo(e) {
    var t = e.alternate;
    return e === mt || t !== null && t === mt;
  }
  function nd(e, t) {
    jl = jo = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ad(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Hn(e, n);
    }
  }
  var Lr = { readContext: On, use: Xo, useCallback: hn, useContext: hn, useEffect: hn, useImperativeHandle: hn, useLayoutEffect: hn, useInsertionEffect: hn, useMemo: hn, useReducer: hn, useRef: hn, useState: hn, useDebugValue: hn, useDeferredValue: hn, useTransition: hn, useSyncExternalStore: hn, useId: hn, useHostTransitionStatus: hn, useFormState: hn, useActionState: hn, useOptimistic: hn, useMemoCache: hn, useCacheRefresh: hn };
  Lr.useEffectEvent = hn;
  var id = { readContext: On, use: Xo, useCallback: function(e, t) {
    return Pn().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: On, useEffect: kh, useImperativeHandle: function(e, t, n) {
    n = n != null ? n.concat([e]) : null, Zo(4194308, 4, Zh.bind(null, t, e), n);
  }, useLayoutEffect: function(e, t) {
    return Zo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    Zo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Pn();
    t = t === void 0 ? null : t;
    var a = e();
    if (ol) {
      Xe(true);
      try {
        e();
      } finally {
        Xe(false);
      }
    }
    return n.memoizedState = [a, t], a;
  }, useReducer: function(e, t, n) {
    var a = Pn();
    if (n !== void 0) {
      var o = n(t);
      if (ol) {
        Xe(true);
        try {
          n(t);
        } finally {
          Xe(false);
        }
      }
    } else o = t;
    return a.memoizedState = a.baseState = o, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }, a.queue = e, e = e.dispatch = b1.bind(null, mt, e), [a.memoizedState, e];
  }, useRef: function(e) {
    var t = Pn();
    return e = { current: e }, t.memoizedState = e;
  }, useState: function(e) {
    e = zu(e);
    var t = e.queue, n = td.bind(null, mt, t);
    return t.dispatch = n, [e.memoizedState, n];
  }, useDebugValue: Bu, useDeferredValue: function(e, t) {
    var n = Pn();
    return Nu(n, e, t);
  }, useTransition: function() {
    var e = zu(false);
    return e = Wh.bind(null, mt, e.queue, true, false), Pn().memoizedState = e, [false, e];
  }, useSyncExternalStore: function(e, t, n) {
    var a = mt, o = Pn();
    if (Dt) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), Kt === null) throw Error(s(349));
      (At & 127) !== 0 || Mh(a, t, n);
    }
    o.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return o.queue = u, kh(Ah.bind(null, a, u, e), [e]), a.flags |= 2048, Yl(9, { destroy: void 0 }, Th.bind(null, a, u, n, t), null), n;
  }, useId: function() {
    var e = Pn(), t = Kt.identifierPrefix;
    if (Dt) {
      var n = Ga, a = Na;
      n = (a & ~(1 << 32 - F(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ko++, 0 < n && (t += "H" + n.toString(32)), t += "_";
    } else n = h1++, t = "_" + t + "r_" + n.toString(32) + "_";
    return e.memoizedState = t;
  }, useHostTransitionStatus: Hu, useFormState: Nh, useActionState: Nh, useOptimistic: function(e) {
    var t = Pn();
    t.memoizedState = t.baseState = e;
    var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = n, t = Fu.bind(null, mt, true, n), n.dispatch = t, [e, t];
  }, useMemoCache: Du, useCacheRefresh: function() {
    return Pn().memoizedState = y1.bind(null, mt);
  }, useEffectEvent: function(e) {
    var t = Pn(), n = { impl: e };
    return t.memoizedState = n, function() {
      if ((Gt & 2) !== 0) throw Error(s(440));
      return n.impl.apply(void 0, arguments);
    };
  } }, ju = { readContext: On, use: Xo, useCallback: qh, useContext: On, useEffect: Lu, useImperativeHandle: Qh, useInsertionEffect: Xh, useLayoutEffect: Vh, useMemo: Ih, useReducer: Vo, useRef: jh, useState: function() {
    return Vo(ni);
  }, useDebugValue: Bu, useDeferredValue: function(e, t) {
    var n = mn();
    return Ph(n, Zt.memoizedState, e, t);
  }, useTransition: function() {
    var e = Vo(ni)[0], t = mn().memoizedState;
    return [typeof e == "boolean" ? e : zr(e), t];
  }, useSyncExternalStore: xh, useId: $h, useHostTransitionStatus: Hu, useFormState: Gh, useActionState: Gh, useOptimistic: function(e, t) {
    var n = mn();
    return Ch(n, Zt, e, t);
  }, useMemoCache: Du, useCacheRefresh: ed };
  ju.useEffectEvent = Yh;
  var ld = { readContext: On, use: Xo, useCallback: qh, useContext: On, useEffect: Lu, useImperativeHandle: Qh, useInsertionEffect: Xh, useLayoutEffect: Vh, useMemo: Ih, useReducer: Ou, useRef: jh, useState: function() {
    return Ou(ni);
  }, useDebugValue: Bu, useDeferredValue: function(e, t) {
    var n = mn();
    return Zt === null ? Nu(n, e, t) : Ph(n, Zt.memoizedState, e, t);
  }, useTransition: function() {
    var e = Ou(ni)[0], t = mn().memoizedState;
    return [typeof e == "boolean" ? e : zr(e), t];
  }, useSyncExternalStore: xh, useId: $h, useHostTransitionStatus: Hu, useFormState: Fh, useActionState: Fh, useOptimistic: function(e, t) {
    var n = mn();
    return Zt !== null ? Ch(n, Zt, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
  }, useMemoCache: Du, useCacheRefresh: ed };
  ld.useEffectEvent = Yh;
  function ku(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Yu = { enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var a = ua(), o = Ei(a);
    o.payload = t, n != null && (o.callback = n), t = wi(e, o, a), t !== null && (ea(t, e, a), Ur(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var a = ua(), o = Ei(a);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = wi(e, o, a), t !== null && (ea(t, e, a), Ur(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ua(), a = Ei(n);
    a.tag = 2, t != null && (a.callback = t), t = wi(e, a, n), t !== null && (ea(t, e, n), Ur(t, e, n));
  } };
  function rd(e, t, n, a, o, u, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, g) : t.prototype && t.prototype.isPureReactComponent ? !Sr(n, a) || !Sr(o, u) : true;
  }
  function od(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Yu.enqueueReplaceState(t, t.state, null);
  }
  function sl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t) a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = y({}, n));
      for (var o in e) n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  function sd(e) {
    Mo(e);
  }
  function ud(e) {
    console.error(e);
  }
  function cd(e) {
    Mo(e);
  }
  function Io(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function fd(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Xu(e, t, n) {
    return n = Ei(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Io(e, t);
    }, n;
  }
  function hd(e) {
    return e = Ei(e), e.tag = 3, e;
  }
  function dd(e, t, n, a) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = a.value;
      e.payload = function() {
        return o(u);
      }, e.callback = function() {
        fd(t, n, a);
      };
    }
    var g = n.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
      fd(t, n, a), typeof o != "function" && (Di === null ? Di = /* @__PURE__ */ new Set([this]) : Di.add(this));
      var _ = a.stack;
      this.componentDidCatch(a.value, { componentStack: _ !== null ? _ : "" });
    });
  }
  function S1(e, t, n, a, o) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Ll(t, n, o, true), n = la.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return ba === null ? rs() : n.alternate === null && dn === 0 && (dn = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, a === Bo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), vc(e, a, o)), false;
          case 22:
            return n.flags |= 65536, a === Bo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), vc(e, a, o)), false;
        }
        throw Error(s(435, n.tag));
      }
      return vc(e, a, o), rs(), false;
    }
    if (Dt) return t = la.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, a !== su && (e = Error(s(422), { cause: a }), wr(ma(e, n)))) : (a !== su && (t = Error(s(423), { cause: a }), wr(ma(t, n))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, a = ma(a, n), o = Xu(e.stateNode, a, o), bu(e, o), dn !== 4 && (dn = 2)), false;
    var u = Error(s(520), { cause: a });
    if (u = ma(u, n), Yr === null ? Yr = [u] : Yr.push(u), dn !== 4 && (dn = 2), t === null) return true;
    a = ma(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Xu(n.stateNode, a, e), bu(n, e), false;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Di === null || !Di.has(u)))) return n.flags |= 65536, o &= -o, n.lanes |= o, o = hd(o), dd(o, e, n, a), bu(n, o), false;
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var Vu = Error(s(461)), bn = false;
  function zn(e, t, n, a) {
    t.child = e === null ? gh(t, null, n, a) : rl(t, e.child, n, a);
  }
  function vd(e, t, n, a, o) {
    n = n.render;
    var u = t.ref;
    if ("ref" in a) {
      var g = {};
      for (var _ in a) _ !== "ref" && (g[_] = a[_]);
    } else g = a;
    return nl(t), a = Mu(e, t, n, g, u, o), _ = Tu(), e !== null && !bn ? (Au(e, t, o), ai(e, t, o)) : (Dt && _ && ru(t), t.flags |= 1, zn(e, t, a, o), t.child);
  }
  function md(e, t, n, a, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !au(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, pd(e, t, u, a, o)) : (e = Do(n.type, null, a, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Ju(e, o)) {
      var g = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Sr, n(g, a) && e.ref === t.ref) return ai(e, t, o);
    }
    return t.flags |= 1, e = Ka(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function pd(e, t, n, a, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Sr(u, a) && e.ref === t.ref) if (bn = false, t.pendingProps = a = u, Ju(e, o)) (e.flags & 131072) !== 0 && (bn = true);
      else return t.lanes = e.lanes, ai(e, t, o);
    }
    return Zu(e, t, n, a, o);
  }
  function gd(e, t, n, a) {
    var o = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, o = 0; a !== null; ) o = o | a.lanes | a.childLanes, a = a.sibling;
          a = o & ~u;
        } else a = 0, t.child = null;
        return yd(e, t, u, n, a);
      }
      if ((n & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ro(t, u !== null ? u.cachePool : null), u !== null ? Sh(t, u) : _u(), _h(t);
      else return a = t.lanes = 536870912, yd(e, t, u !== null ? u.baseLanes | n : n, n, a);
    } else u !== null ? (Ro(t, u.cachePool), Sh(t, u), Mi(), t.memoizedState = null) : (e !== null && Ro(t, null), _u(), Mi());
    return zn(e, t, o, n), t.child;
  }
  function Br(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function yd(e, t, n, a, o) {
    var u = mu();
    return u = u === null ? null : { parent: gn._currentValue, pool: u }, t.memoizedState = { baseLanes: n, cachePool: u }, e !== null && Ro(t, null), _u(), _h(t), e !== null && Ll(e, t, a, true), t.childLanes = o, null;
  }
  function Po(e, t) {
    return t = Ko({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function bd(e, t, n) {
    return rl(t, e.child, null, n), e = Po(t, t.pendingProps), e.flags |= 2, ra(t), t.memoizedState = null, e;
  }
  function _1(e, t, n) {
    var a = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Dt) {
        if (a.mode === "hidden") return e = Po(t, a), t.lanes = 536870912, Br(null, e);
        if (wu(t), (e = tn) ? (e = Ov(e, ya), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: gi !== null ? { id: Na, overflow: Ga } : null, retryLane: 536870912, hydrationErrors: null }, n = nh(e), n.return = t, t.child = n, Cn = t, tn = null)) : e = null, e === null) throw bi(t);
        return t.lanes = 536870912, null;
      }
      return Po(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var g = u.dehydrated;
      if (wu(t), o) if (t.flags & 256) t.flags &= -257, t = bd(e, t, n);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(s(558));
      else if (bn || Ll(e, t, n, false), o = (n & e.childLanes) !== 0, bn || o) {
        if (a = Kt, a !== null && (g = Fn(a, n), g !== 0 && g !== u.retryLane)) throw u.retryLane = g, Ji(e, g), ea(a, e, g), Vu;
        rs(), t = bd(e, t, n);
      } else e = u.treeContext, tn = Sa(g.nextSibling), Cn = t, Dt = true, yi = null, ya = false, e !== null && lh(t, e), t = Po(t, a), t.flags |= 4096;
      return t;
    }
    return e = Ka(e.child, { mode: a.mode, children: a.children }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Wo(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Zu(e, t, n, a, o) {
    return nl(t), n = Mu(e, t, n, a, void 0, o), a = Tu(), e !== null && !bn ? (Au(e, t, o), ai(e, t, o)) : (Dt && a && ru(t), t.flags |= 1, zn(e, t, n, o), t.child);
  }
  function Sd(e, t, n, a, o, u) {
    return nl(t), t.updateQueue = null, n = wh(t, a, n, o), Eh(e), a = Tu(), e !== null && !bn ? (Au(e, t, u), ai(e, t, u)) : (Dt && a && ru(t), t.flags |= 1, zn(e, t, n, u), t.child);
  }
  function _d(e, t, n, a, o) {
    if (nl(t), t.stateNode === null) {
      var u = Cl, g = n.contextType;
      typeof g == "object" && g !== null && (u = On(g)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Yu, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, gu(t), g = n.contextType, u.context = typeof g == "object" && g !== null ? On(g) : Cl, u.state = t.memoizedState, g = n.getDerivedStateFromProps, typeof g == "function" && (ku(t, n, g, a), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (g = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), g !== u.state && Yu.enqueueReplaceState(u, u.state, null), Cr(t, a, u, o), Dr(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = true;
    } else if (e === null) {
      u = t.stateNode;
      var _ = t.memoizedProps, R = sl(n, _);
      u.props = R;
      var ee = u.context, ve = n.contextType;
      g = Cl, typeof ve == "object" && ve !== null && (g = On(ve));
      var Se = n.getDerivedStateFromProps;
      ve = typeof Se == "function" || typeof u.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, ve || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (_ || ee !== g) && od(t, u, a, g), _i = false;
      var ne = t.memoizedState;
      u.state = ne, Cr(t, a, u, o), Dr(), ee = t.memoizedState, _ || ne !== ee || _i ? (typeof Se == "function" && (ku(t, n, Se, a), ee = t.memoizedState), (R = _i || rd(t, n, R, a, ne, ee, g)) ? (ve || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = ee), u.props = a, u.state = ee, u.context = g, a = R) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = false);
    } else {
      u = t.stateNode, yu(e, t), g = t.memoizedProps, ve = sl(n, g), u.props = ve, Se = t.pendingProps, ne = u.context, ee = n.contextType, R = Cl, typeof ee == "object" && ee !== null && (R = On(ee)), _ = n.getDerivedStateFromProps, (ee = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (g !== Se || ne !== R) && od(t, u, a, R), _i = false, ne = t.memoizedState, u.state = ne, Cr(t, a, u, o), Dr();
      var oe = t.memoizedState;
      g !== Se || ne !== oe || _i || e !== null && e.dependencies !== null && Oo(e.dependencies) ? (typeof _ == "function" && (ku(t, n, _, a), oe = t.memoizedState), (ve = _i || rd(t, n, ve, a, ne, oe, R) || e !== null && e.dependencies !== null && Oo(e.dependencies)) ? (ee || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, oe, R), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, oe, R)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || g === e.memoizedProps && ne === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && ne === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = oe), u.props = a, u.state = oe, u.context = R, a = ve) : (typeof u.componentDidUpdate != "function" || g === e.memoizedProps && ne === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && ne === e.memoizedState || (t.flags |= 1024), a = false);
    }
    return u = a, Wo(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = rl(t, e.child, null, o), t.child = rl(t, null, n, o)) : zn(e, t, n, o), t.memoizedState = u.state, e = t.child) : e = ai(e, t, o), e;
  }
  function Ed(e, t, n, a) {
    return el(), t.flags |= 256, zn(e, t, n, a), t.child;
  }
  var Qu = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function qu(e) {
    return { baseLanes: e, cachePool: fh() };
  }
  function Iu(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= sa), e;
  }
  function wd(e, t, n) {
    var a = t.pendingProps, o = false, u = (t.flags & 128) !== 0, g;
    if ((g = u) || (g = e !== null && e.memoizedState === null ? false : (vn.current & 2) !== 0), g && (o = true, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Dt) {
        if (o ? xi(t) : Mi(), (e = tn) ? (e = Ov(e, ya), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: gi !== null ? { id: Na, overflow: Ga } : null, retryLane: 536870912, hydrationErrors: null }, n = nh(e), n.return = t, t.child = n, Cn = t, tn = null)) : e = null, e === null) throw bi(t);
        return Cc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var _ = a.children;
      return a = a.fallback, o ? (Mi(), o = t.mode, _ = Ko({ mode: "hidden", children: _ }, o), a = $i(a, o, n, null), _.return = t, a.return = t, _.sibling = a, t.child = _, a = t.child, a.memoizedState = qu(n), a.childLanes = Iu(e, g, n), t.memoizedState = Qu, Br(null, a)) : (xi(t), Pu(t, _));
    }
    var R = e.memoizedState;
    if (R !== null && (_ = R.dehydrated, _ !== null)) {
      if (u) t.flags & 256 ? (xi(t), t.flags &= -257, t = Wu(e, t, n)) : t.memoizedState !== null ? (Mi(), t.child = e.child, t.flags |= 128, t = null) : (Mi(), _ = a.fallback, o = t.mode, a = Ko({ mode: "visible", children: a.children }, o), _ = $i(_, o, n, null), _.flags |= 2, a.return = t, _.return = t, a.sibling = _, t.child = a, rl(t, e.child, null, n), a = t.child, a.memoizedState = qu(n), a.childLanes = Iu(e, g, n), t.memoizedState = Qu, t = Br(null, a));
      else if (xi(t), Cc(_)) {
        if (g = _.nextSibling && _.nextSibling.dataset, g) var ee = g.dgst;
        g = ee, a = Error(s(419)), a.stack = "", a.digest = g, wr({ value: a, source: null, stack: null }), t = Wu(e, t, n);
      } else if (bn || Ll(e, t, n, false), g = (n & e.childLanes) !== 0, bn || g) {
        if (g = Kt, g !== null && (a = Fn(g, n), a !== 0 && a !== R.retryLane)) throw R.retryLane = a, Ji(e, a), ea(g, e, a), Vu;
        Dc(_) || rs(), t = Wu(e, t, n);
      } else Dc(_) ? (t.flags |= 192, t.child = e.child, t = null) : (e = R.treeContext, tn = Sa(_.nextSibling), Cn = t, Dt = true, yi = null, ya = false, e !== null && lh(t, e), t = Pu(t, a.children), t.flags |= 4096);
      return t;
    }
    return o ? (Mi(), _ = a.fallback, o = t.mode, R = e.child, ee = R.sibling, a = Ka(R, { mode: "hidden", children: a.children }), a.subtreeFlags = R.subtreeFlags & 65011712, ee !== null ? _ = Ka(ee, _) : (_ = $i(_, o, n, null), _.flags |= 2), _.return = t, a.return = t, a.sibling = _, t.child = a, Br(null, a), a = t.child, _ = e.child.memoizedState, _ === null ? _ = qu(n) : (o = _.cachePool, o !== null ? (R = gn._currentValue, o = o.parent !== R ? { parent: R, pool: R } : o) : o = fh(), _ = { baseLanes: _.baseLanes | n, cachePool: o }), a.memoizedState = _, a.childLanes = Iu(e, g, n), t.memoizedState = Qu, Br(e.child, a)) : (xi(t), n = e.child, e = n.sibling, n = Ka(n, { mode: "visible", children: a.children }), n.return = t, n.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Pu(e, t) {
    return t = Ko({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
  }
  function Ko(e, t) {
    return e = ia(22, e, null, t), e.lanes = 0, e;
  }
  function Wu(e, t, n) {
    return rl(t, e.child, null, n), e = Pu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function xd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), fu(e.return, t, n);
  }
  function Ku(e, t, n, a, o, u) {
    var g = e.memoizedState;
    g === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: o, treeForkCount: u } : (g.isBackwards = t, g.rendering = null, g.renderingStartTime = 0, g.last = a, g.tail = n, g.tailMode = o, g.treeForkCount = u);
  }
  function Md(e, t, n) {
    var a = t.pendingProps, o = a.revealOrder, u = a.tail;
    a = a.children;
    var g = vn.current, _ = (g & 2) !== 0;
    if (_ ? (g = g & 1 | 2, t.flags |= 128) : g &= 1, V(vn, g), zn(e, t, a, n), a = Dt ? Er : 0, !_ && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && xd(e, n, t);
      else if (e.tag === 19) xd(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Fo(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ku(t, false, o, n, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Fo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Ku(t, true, n, null, u, a);
        break;
      case "together":
        Ku(t, false, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ai(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ui |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
      if (Ll(e, t, n, false), (n & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = Ka(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ka(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ju(e, t) {
    return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && Oo(e)));
  }
  function E1(e, t, n) {
    switch (t.tag) {
      case 3:
        pe(t, t.stateNode.containerInfo), Si(t, gn, e.memoizedState.cache), el();
        break;
      case 27:
      case 5:
        ze(t);
        break;
      case 4:
        pe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Si(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, wu(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (xi(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? wd(e, t, n) : (xi(t), e = ai(e, t, n), e !== null ? e.sibling : null);
        xi(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Ll(e, t, n, false), a = (n & t.childLanes) !== 0), o) {
          if (a) return Md(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), V(vn, vn.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, gd(e, t, n, t.pendingProps);
      case 24:
        Si(t, gn, e.memoizedState.cache);
    }
    return ai(e, t, n);
  }
  function Td(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) bn = true;
    else {
      if (!Ju(e, n) && (t.flags & 128) === 0) return bn = false, E1(e, t, n);
      bn = (e.flags & 131072) !== 0;
    }
    else bn = false, Dt && (t.flags & 1048576) !== 0 && ih(t, Er, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = il(t.elementType), t.type = e, typeof e == "function") au(e) ? (a = sl(e, a), t.tag = 1, t = _d(null, t, e, a, n)) : (t.tag = 0, t = Zu(null, t, e, a, n));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === z) {
                t.tag = 11, t = vd(null, t, e, a, n);
                break e;
              } else if (o === H) {
                t.tag = 14, t = md(null, t, e, a, n);
                break e;
              }
            }
            throw t = Z(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return Zu(e, t, t.type, t.pendingProps, n);
      case 1:
        return a = t.type, o = sl(a, t.pendingProps), _d(e, t, a, o, n);
      case 3:
        e: {
          if (pe(t, t.stateNode.containerInfo), e === null) throw Error(s(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          o = u.element, yu(e, t), Cr(t, a, null, n);
          var g = t.memoizedState;
          if (a = g.cache, Si(t, gn, a), a !== u.cache && hu(t, [gn], n, true), Dr(), a = g.element, u.isDehydrated) if (u = { element: a, isDehydrated: false, cache: g.cache }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            t = Ed(e, t, a, n);
            break e;
          } else if (a !== o) {
            o = ma(Error(s(424)), t), wr(o), t = Ed(e, t, a, n);
            break e;
          } else {
            switch (e = t.stateNode.containerInfo, e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
            }
            for (tn = Sa(e.firstChild), Cn = t, Dt = true, yi = null, ya = true, n = gh(t, null, a, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          }
          else {
            if (el(), a === o) {
              t = ai(e, t, n);
              break e;
            }
            zn(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Wo(e, t), e === null ? (n = Gv(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Dt || (n = t.type, e = t.pendingProps, a = ds(ie.current).createElement(n), a[Pt] = t, a[b] = e, Rn(a, n, e), ht(a), t.stateNode = a) : t.memoizedState = Gv(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return ze(t), e === null && Dt && (a = t.stateNode = Lv(t.type, t.pendingProps, ie.current), Cn = t, ya = true, o = tn, Ri(t.type) ? (Oc = o, tn = Sa(a.firstChild)) : tn = o), zn(e, t, t.pendingProps.children, n), Wo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Dt && ((o = a = tn) && (a = J1(a, t.type, t.pendingProps, ya), a !== null ? (t.stateNode = a, Cn = t, tn = Sa(a.firstChild), ya = false, o = true) : o = false), o || bi(t)), ze(t), o = t.type, u = t.pendingProps, g = e !== null ? e.memoizedProps : null, a = u.children, Tc(o, u) ? a = null : g !== null && Tc(o, g) && (t.flags |= 32), t.memoizedState !== null && (o = Mu(e, t, d1, null, null, n), Wr._currentValue = o), Wo(e, t), zn(e, t, a, n), t.child;
      case 6:
        return e === null && Dt && ((e = n = tn) && (n = $1(n, t.pendingProps, ya), n !== null ? (t.stateNode = n, Cn = t, tn = null, e = true) : e = false), e || bi(t)), null;
      case 13:
        return wd(e, t, n);
      case 4:
        return pe(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = rl(t, null, a, n) : zn(e, t, a, n), t.child;
      case 11:
        return vd(e, t, t.type, t.pendingProps, n);
      case 7:
        return zn(e, t, t.pendingProps, n), t.child;
      case 8:
        return zn(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return zn(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return a = t.pendingProps, Si(t, t.type, a.value), zn(e, t, a.children, n), t.child;
      case 9:
        return o = t.type._context, a = t.pendingProps.children, nl(t), o = On(o), a = a(o), t.flags |= 1, zn(e, t, a, n), t.child;
      case 14:
        return md(e, t, t.type, t.pendingProps, n);
      case 15:
        return pd(e, t, t.type, t.pendingProps, n);
      case 19:
        return Md(e, t, n);
      case 31:
        return _1(e, t, n);
      case 22:
        return gd(e, t, n, t.pendingProps);
      case 24:
        return nl(t), a = On(gn), e === null ? (o = mu(), o === null && (o = Kt, u = du(), o.pooledCache = u, u.refCount++, u !== null && (o.pooledCacheLanes |= n), o = u), t.memoizedState = { parent: a, cache: o }, gu(t), Si(t, gn, o)) : ((e.lanes & n) !== 0 && (yu(e, t), Cr(t, null, null, n), Dr()), o = e.memoizedState, u = t.memoizedState, o.parent !== a ? (o = { parent: a, cache: a }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Si(t, gn, a)) : (a = u.cache, Si(t, gn, a), a !== o.cache && hu(t, [gn], n, true))), zn(e, t, t.pendingProps.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function ii(e) {
    e.flags |= 4;
  }
  function $u(e, t, n, a, o) {
    if ((t = (e.mode & 32) !== 0) && (t = false), t) {
      if (e.flags |= 16777216, (o & 335544128) === o) if (e.stateNode.complete) e.flags |= 8192;
      else if ($d()) e.flags |= 8192;
      else throw ll = Bo, pu;
    } else e.flags &= -16777217;
  }
  function Ad(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !Yv(t)) if ($d()) e.flags |= 8192;
    else throw ll = Bo, pu;
  }
  function Jo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? it() : 536870912, e.lanes |= t, Ql |= t);
  }
  function Nr(e, t) {
    if (!Dt) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var a = null; n !== null; ) n.alternate !== null && (a = n), n = n.sibling;
        a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
    }
  }
  function nn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, a |= o.subtreeFlags & 65011712, a |= o.flags & 65011712, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function w1(e, t, n) {
    var a = t.pendingProps;
    switch (ou(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return nn(t), null;
      case 1:
        return nn(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ei(gn), Oe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Rl(t) ? ii(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, uu())), nn(t), null;
      case 26:
        var o = t.type, u = t.memoizedState;
        return e === null ? (ii(t), u !== null ? (nn(t), Ad(t, u)) : (nn(t), $u(t, o, null, a, n))) : u ? u !== e.memoizedState ? (ii(t), nn(t), Ad(t, u)) : (nn(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && ii(t), nn(t), $u(t, o, e, a, n)), null;
      case 27:
        if (be(t), n = ie.current, o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && ii(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return nn(t), null;
          }
          e = M.current, Rl(t) ? rh(t) : (e = Lv(o, a, n), t.stateNode = e, ii(t));
        }
        return nn(t), null;
      case 5:
        if (be(t), o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && ii(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return nn(t), null;
          }
          if (u = M.current, Rl(t)) rh(t);
          else {
            var g = ds(ie.current);
            switch (u) {
              case 1:
                u = g.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                u = g.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    u = g.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    u = g.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                    break;
                  case "script":
                    u = g.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                    break;
                  case "select":
                    u = typeof a.is == "string" ? g.createElement("select", { is: a.is }) : g.createElement("select"), a.multiple ? u.multiple = true : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? g.createElement(o, { is: a.is }) : g.createElement(o);
                }
            }
            u[Pt] = t, u[b] = a;
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6) u.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                g.child.return = g, g = g.child;
                continue;
              }
              if (g === t) break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t) break e;
                g = g.return;
              }
              g.sibling.return = g.return, g = g.sibling;
            }
            t.stateNode = u;
            e: switch (Rn(u, o, a), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = true;
                break e;
              default:
                a = false;
            }
            a && ii(t);
          }
        }
        return nn(t), $u(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && ii(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
          if (e = ie.current, Rl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, o = Cn, o !== null) switch (o.tag) {
              case 27:
              case 5:
                a = o.memoizedProps;
            }
            e[Pt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || wv(e.nodeValue, n)), e || bi(t, true);
          } else e = ds(e).createTextNode(a), e[Pt] = t, t.stateNode = e;
        }
        return nn(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Rl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[Pt] = t;
            } else el(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nn(t), e = false;
          } else n = uu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
          if (!e) return t.flags & 256 ? (ra(t), t) : (ra(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return nn(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Rl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
              o[Pt] = t;
            } else el(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nn(t), o = false;
          } else o = uu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = true;
          if (!o) return t.flags & 256 ? (ra(t), t) : (ra(t), null);
        }
        return ra(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== o && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Jo(t, t.updateQueue), nn(t), null);
      case 4:
        return Oe(), e === null && _c(t.stateNode.containerInfo), nn(t), null;
      case 10:
        return ei(t.type), nn(t), null;
      case 19:
        if (B(vn), a = t.memoizedState, a === null) return nn(t), null;
        if (o = (t.flags & 128) !== 0, u = a.rendering, u === null) if (o) Nr(a, false);
        else {
          if (dn !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = Fo(e), u !== null) {
              for (t.flags |= 128, Nr(a, false), e = u.updateQueue, t.updateQueue = e, Jo(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; ) th(n, e), n = n.sibling;
              return V(vn, vn.current & 1 | 2), Dt && Ja(t, a.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && Le() > as && (t.flags |= 128, o = true, Nr(a, false), t.lanes = 4194304);
        }
        else {
          if (!o) if (e = Fo(u), e !== null) {
            if (t.flags |= 128, o = true, e = e.updateQueue, t.updateQueue = e, Jo(t, e), Nr(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Dt) return nn(t), null;
          } else 2 * Le() - a.renderingStartTime > as && n !== 536870912 && (t.flags |= 128, o = true, Nr(a, false), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Le(), e.sibling = null, n = vn.current, V(vn, o ? n & 1 | 2 : n & 1), Dt && Ja(t, a.treeForkCount), e) : (nn(t), null);
      case 22:
      case 23:
        return ra(t), Eu(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (nn(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nn(t), n = t.updateQueue, n !== null && Jo(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && B(al), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ei(gn), nn(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function x1(e, t) {
    switch (ou(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ei(gn), Oe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return be(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ra(t), t.alternate === null) throw Error(s(340));
          el();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (ra(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          el();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return B(vn), null;
      case 4:
        return Oe(), null;
      case 10:
        return ei(t.type), null;
      case 22:
      case 23:
        return ra(t), Eu(), e !== null && B(al), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ei(gn), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ud(e, t) {
    switch (ou(t), t.tag) {
      case 3:
        ei(gn), Oe();
        break;
      case 26:
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        Oe();
        break;
      case 31:
        t.memoizedState !== null && ra(t);
        break;
      case 13:
        ra(t);
        break;
      case 19:
        B(vn);
        break;
      case 10:
        ei(t.type);
        break;
      case 22:
      case 23:
        ra(t), Eu(), e !== null && B(al);
        break;
      case 24:
        ei(gn);
    }
  }
  function Gr(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var o = a.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var u = n.create, g = n.inst;
            a = u(), g.destroy = a;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (_) {
      Vt(t, t.return, _);
    }
  }
  function Ti(e, t, n) {
    try {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var g = a.inst, _ = g.destroy;
            if (_ !== void 0) {
              g.destroy = void 0, o = t;
              var R = n, ee = _;
              try {
                ee();
              } catch (ve) {
                Vt(o, R, ve);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (ve) {
      Vt(t, t.return, ve);
    }
  }
  function Dd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        bh(t, n);
      } catch (a) {
        Vt(e, e.return, a);
      }
    }
  }
  function Cd(e, t, n) {
    n.props = sl(e.type, e.memoizedProps), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Vt(e, t, a);
    }
  }
  function Hr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
      }
    } catch (o) {
      Vt(e, t, o);
    }
  }
  function Ha(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null) if (typeof a == "function") try {
      a();
    } catch (o) {
      Vt(e, t, o);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof n == "function") try {
      n(null);
    } catch (o) {
      Vt(e, t, o);
    }
    else n.current = null;
  }
  function Od(e) {
    var t = e.type, n = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (o) {
      Vt(e, e.return, o);
    }
  }
  function ec(e, t, n) {
    try {
      var a = e.stateNode;
      Q1(a, e.type, n, t), a[b] = t;
    } catch (o) {
      Vt(e, e.return, o);
    }
  }
  function zd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ri(e.type) || e.tag === 4;
  }
  function tc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || zd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ri(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function nc(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = kn));
    else if (a !== 4 && (a === 27 && Ri(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (nc(e, t, n), e = e.sibling; e !== null; ) nc(e, t, n), e = e.sibling;
  }
  function $o(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && Ri(e.type) && (n = e.stateNode), e = e.child, e !== null)) for ($o(e, t, n), e = e.sibling; e !== null; ) $o(e, t, n), e = e.sibling;
  }
  function Rd(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, o = t.attributes; o.length; ) t.removeAttributeNode(o[0]);
      Rn(t, a, n), t[Pt] = e, t[b] = n;
    } catch (u) {
      Vt(e, e.return, u);
    }
  }
  var li = false, Sn = false, ac = false, Ld = typeof WeakSet == "function" ? WeakSet : Set, Dn = null;
  function M1(e, t) {
    if (e = e.containerInfo, xc = Ss, e = Qf(e), Ws(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var o = a.anchorOffset, u = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var g = 0, _ = -1, R = -1, ee = 0, ve = 0, Se = e, ne = null;
          t: for (; ; ) {
            for (var oe; Se !== n || o !== 0 && Se.nodeType !== 3 || (_ = g + o), Se !== u || a !== 0 && Se.nodeType !== 3 || (R = g + a), Se.nodeType === 3 && (g += Se.nodeValue.length), (oe = Se.firstChild) !== null; ) ne = Se, Se = oe;
            for (; ; ) {
              if (Se === e) break t;
              if (ne === n && ++ee === o && (_ = g), ne === u && ++ve === a && (R = g), (oe = Se.nextSibling) !== null) break;
              Se = ne, ne = Se.parentNode;
            }
            Se = oe;
          }
          n = _ === -1 || R === -1 ? null : { start: _, end: R };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Mc = { focusedElem: e, selectionRange: n }, Ss = false, Dn = t; Dn !== null; ) if (t = Dn, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Dn = e;
    else for (; Dn !== null; ) {
      switch (t = Dn, u = t.alternate, e = t.flags, t.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (n = 0; n < e.length; n++) o = e[n], o.ref.impl = o.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && u !== null) {
            e = void 0, n = t, o = u.memoizedProps, u = u.memoizedState, a = n.stateNode;
            try {
              var qe = sl(n.type, o);
              e = a.getSnapshotBeforeUpdate(qe, u), a.__reactInternalSnapshotBeforeUpdate = e;
            } catch (st) {
              Vt(n, n.return, st);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) Uc(e);
            else if (n === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Uc(e);
                break;
              default:
                e.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((e & 1024) !== 0) throw Error(s(163));
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Dn = e;
        break;
      }
      Dn = t.return;
    }
  }
  function Bd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        oi(e, n), a & 4 && Gr(5, n);
        break;
      case 1:
        if (oi(e, n), a & 4) if (e = n.stateNode, t === null) try {
          e.componentDidMount();
        } catch (g) {
          Vt(n, n.return, g);
        }
        else {
          var o = sl(n.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (g) {
            Vt(n, n.return, g);
          }
        }
        a & 64 && Dd(n), a & 512 && Hr(n, n.return);
        break;
      case 3:
        if (oi(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
              t = n.child.stateNode;
              break;
            case 1:
              t = n.child.stateNode;
          }
          try {
            bh(e, t);
          } catch (g) {
            Vt(n, n.return, g);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Rd(n);
      case 26:
      case 5:
        oi(e, n), t === null && a & 4 && Od(n), a & 512 && Hr(n, n.return);
        break;
      case 12:
        oi(e, n);
        break;
      case 31:
        oi(e, n), a & 4 && Hd(e, n);
        break;
      case 13:
        oi(e, n), a & 4 && Fd(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = L1.bind(null, n), ep(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || li, !a) {
          t = t !== null && t.memoizedState !== null || Sn, o = li;
          var u = Sn;
          li = a, (Sn = t) && !u ? si(e, n, (n.subtreeFlags & 8772) !== 0) : oi(e, n), li = o, Sn = u;
        }
        break;
      case 30:
        break;
      default:
        oi(e, n);
    }
  }
  function Nd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Nd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && we(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var on = null, Wn = false;
  function ri(e, t, n) {
    for (n = n.child; n !== null; ) Gd(e, t, n), n = n.sibling;
  }
  function Gd(e, t, n) {
    if (ke && typeof ke.onCommitFiberUnmount == "function") try {
      ke.onCommitFiberUnmount(ot, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        Sn || Ha(n, t), ri(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Sn || Ha(n, t);
        var a = on, o = Wn;
        Ri(n.type) && (on = n.stateNode, Wn = false), ri(e, t, n), qr(n.stateNode), on = a, Wn = o;
        break;
      case 5:
        Sn || Ha(n, t);
      case 6:
        if (a = on, o = Wn, on = null, ri(e, t, n), on = a, Wn = o, on !== null) if (Wn) try {
          (on.nodeType === 9 ? on.body : on.nodeName === "HTML" ? on.ownerDocument.body : on).removeChild(n.stateNode);
        } catch (u) {
          Vt(n, t, u);
        }
        else try {
          on.removeChild(n.stateNode);
        } catch (u) {
          Vt(n, t, u);
        }
        break;
      case 18:
        on !== null && (Wn ? (e = on, Dv(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), er(e)) : Dv(on, n.stateNode));
        break;
      case 4:
        a = on, o = Wn, on = n.stateNode.containerInfo, Wn = true, ri(e, t, n), on = a, Wn = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ti(2, n, t), Sn || Ti(4, n, t), ri(e, t, n);
        break;
      case 1:
        Sn || (Ha(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Cd(n, t, a)), ri(e, t, n);
        break;
      case 21:
        ri(e, t, n);
        break;
      case 22:
        Sn = (a = Sn) || n.memoizedState !== null, ri(e, t, n), Sn = a;
        break;
      default:
        ri(e, t, n);
    }
  }
  function Hd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        er(e);
      } catch (n) {
        Vt(t, t.return, n);
      }
    }
  }
  function Fd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      er(e);
    } catch (n) {
      Vt(t, t.return, n);
    }
  }
  function T1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Ld()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Ld()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function es(e, t) {
    var n = T1(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var o = B1.bind(null, e, a);
        a.then(o, o);
      }
    });
  }
  function Kn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var a = 0; a < n.length; a++) {
      var o = n[a], u = e, g = t, _ = g;
      e: for (; _ !== null; ) {
        switch (_.tag) {
          case 27:
            if (Ri(_.type)) {
              on = _.stateNode, Wn = false;
              break e;
            }
            break;
          case 5:
            on = _.stateNode, Wn = false;
            break e;
          case 3:
          case 4:
            on = _.stateNode.containerInfo, Wn = true;
            break e;
        }
        _ = _.return;
      }
      if (on === null) throw Error(s(160));
      Gd(u, g, o), on = null, Wn = false, u = o.alternate, u !== null && (u.return = null), o.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) jd(t, e), t = t.sibling;
  }
  var Aa = null;
  function jd(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Kn(t, e), Jn(e), a & 4 && (Ti(3, e, e.return), Gr(3, e), Ti(5, e, e.return));
        break;
      case 1:
        Kn(t, e), Jn(e), a & 512 && (Sn || n === null || Ha(n, n.return)), a & 64 && li && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var o = Aa;
        if (Kn(t, e), Jn(e), a & 512 && (Sn || n === null || Ha(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null) if (a === null) if (e.stateNode === null) {
            e: {
              a = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
              t: switch (a) {
                case "title":
                  u = o.getElementsByTagName("title")[0], (!u || u[xe] || u[Pt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = o.createElement(a), o.head.insertBefore(u, o.querySelector("head > title"))), Rn(u, a, n), u[Pt] = e, ht(u), a = u;
                  break e;
                case "link":
                  var g = jv("link", "href", o).get(a + (n.href || ""));
                  if (g) {
                    for (var _ = 0; _ < g.length; _++) if (u = g[_], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                      g.splice(_, 1);
                      break t;
                    }
                  }
                  u = o.createElement(a), Rn(u, a, n), o.head.appendChild(u);
                  break;
                case "meta":
                  if (g = jv("meta", "content", o).get(a + (n.content || ""))) {
                    for (_ = 0; _ < g.length; _++) if (u = g[_], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                      g.splice(_, 1);
                      break t;
                    }
                  }
                  u = o.createElement(a), Rn(u, a, n), o.head.appendChild(u);
                  break;
                default:
                  throw Error(s(468, a));
              }
              u[Pt] = e, ht(u), a = u;
            }
            e.stateNode = a;
          } else kv(o, e.type, e.stateNode);
          else e.stateNode = Fv(o, a, e.memoizedProps);
          else u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? kv(o, e.type, e.stateNode) : Fv(o, a, e.memoizedProps)) : a === null && e.stateNode !== null && ec(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Kn(t, e), Jn(e), a & 512 && (Sn || n === null || Ha(n, n.return)), n !== null && a & 4 && ec(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (Kn(t, e), Jn(e), a & 512 && (Sn || n === null || Ha(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Oa(o, "");
          } catch (qe) {
            Vt(e, e.return, qe);
          }
        }
        a & 4 && e.stateNode != null && (o = e.memoizedProps, ec(e, o, n !== null ? n.memoizedProps : o)), a & 1024 && (ac = true);
        break;
      case 6:
        if (Kn(t, e), Jn(e), a & 4) {
          if (e.stateNode === null) throw Error(s(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (qe) {
            Vt(e, e.return, qe);
          }
        }
        break;
      case 3:
        if (ps = null, o = Aa, Aa = vs(t.containerInfo), Kn(t, e), Aa = o, Jn(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
          er(t.containerInfo);
        } catch (qe) {
          Vt(e, e.return, qe);
        }
        ac && (ac = false, kd(e));
        break;
      case 4:
        a = Aa, Aa = vs(e.stateNode.containerInfo), Kn(t, e), Jn(e), Aa = a;
        break;
      case 12:
        Kn(t, e), Jn(e);
        break;
      case 31:
        Kn(t, e), Jn(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, es(e, a)));
        break;
      case 13:
        Kn(t, e), Jn(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ns = Le()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, es(e, a)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var R = n !== null && n.memoizedState !== null, ee = li, ve = Sn;
        if (li = ee || o, Sn = ve || R, Kn(t, e), Sn = ve, li = ee, Jn(e), a & 8192) e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || R || li || Sn || ul(e)), n = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (n === null) {
              R = n = t;
              try {
                if (u = R.stateNode, o) g = u.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                else {
                  _ = R.stateNode;
                  var Se = R.memoizedProps.style, ne = Se != null && Se.hasOwnProperty("display") ? Se.display : null;
                  _.style.display = ne == null || typeof ne == "boolean" ? "" : ("" + ne).trim();
                }
              } catch (qe) {
                Vt(R, R.return, qe);
              }
            }
          } else if (t.tag === 6) {
            if (n === null) {
              R = t;
              try {
                R.stateNode.nodeValue = o ? "" : R.memoizedProps;
              } catch (qe) {
                Vt(R, R.return, qe);
              }
            }
          } else if (t.tag === 18) {
            if (n === null) {
              R = t;
              try {
                var oe = R.stateNode;
                o ? Cv(oe, true) : Cv(R.stateNode, false);
              } catch (qe) {
                Vt(R, R.return, qe);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            n === t && (n = null), t = t.return;
          }
          n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
        }
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, es(e, n))));
        break;
      case 19:
        Kn(t, e), Jn(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, es(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Kn(t, e), Jn(e);
    }
  }
  function Jn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (zd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode, u = tc(e);
            $o(e, u, o);
            break;
          case 5:
            var g = n.stateNode;
            n.flags & 32 && (Oa(g, ""), n.flags &= -33);
            var _ = tc(e);
            $o(e, _, g);
            break;
          case 3:
          case 4:
            var R = n.stateNode.containerInfo, ee = tc(e);
            nc(e, ee, R);
            break;
          default:
            throw Error(s(161));
        }
      } catch (ve) {
        Vt(e, e.return, ve);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function kd(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      kd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function oi(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Bd(e, t.alternate, t), t = t.sibling;
  }
  function ul(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ti(4, t, t.return), ul(t);
          break;
        case 1:
          Ha(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Cd(t, t.return, n), ul(t);
          break;
        case 27:
          qr(t.stateNode);
        case 26:
        case 5:
          Ha(t, t.return), ul(t);
          break;
        case 22:
          t.memoizedState === null && ul(t);
          break;
        case 30:
          ul(t);
          break;
        default:
          ul(t);
      }
      e = e.sibling;
    }
  }
  function si(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, o = e, u = t, g = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          si(o, u, n), Gr(4, u);
          break;
        case 1:
          if (si(o, u, n), a = u, o = a.stateNode, typeof o.componentDidMount == "function") try {
            o.componentDidMount();
          } catch (ee) {
            Vt(a, a.return, ee);
          }
          if (a = u, o = a.updateQueue, o !== null) {
            var _ = a.stateNode;
            try {
              var R = o.shared.hiddenCallbacks;
              if (R !== null) for (o.shared.hiddenCallbacks = null, o = 0; o < R.length; o++) yh(R[o], _);
            } catch (ee) {
              Vt(a, a.return, ee);
            }
          }
          n && g & 64 && Dd(u), Hr(u, u.return);
          break;
        case 27:
          Rd(u);
        case 26:
        case 5:
          si(o, u, n), n && a === null && g & 4 && Od(u), Hr(u, u.return);
          break;
        case 12:
          si(o, u, n);
          break;
        case 31:
          si(o, u, n), n && g & 4 && Hd(o, u);
          break;
        case 13:
          si(o, u, n), n && g & 4 && Fd(o, u);
          break;
        case 22:
          u.memoizedState === null && si(o, u, n), Hr(u, u.return);
          break;
        case 30:
          break;
        default:
          si(o, u, n);
      }
      t = t.sibling;
    }
  }
  function ic(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && xr(n));
  }
  function lc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && xr(e));
  }
  function Ua(e, t, n, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Yd(e, t, n, a), t = t.sibling;
  }
  function Yd(e, t, n, a) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ua(e, t, n, a), o & 2048 && Gr(9, t);
        break;
      case 1:
        Ua(e, t, n, a);
        break;
      case 3:
        Ua(e, t, n, a), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && xr(e)));
        break;
      case 12:
        if (o & 2048) {
          Ua(e, t, n, a), e = t.stateNode;
          try {
            var u = t.memoizedProps, g = u.id, _ = u.onPostCommit;
            typeof _ == "function" && _(g, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (R) {
            Vt(t, t.return, R);
          }
        } else Ua(e, t, n, a);
        break;
      case 31:
        Ua(e, t, n, a);
        break;
      case 13:
        Ua(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, g = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ua(e, t, n, a) : Fr(e, t) : u._visibility & 2 ? Ua(e, t, n, a) : (u._visibility |= 2, Xl(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || false)), o & 2048 && ic(g, t);
        break;
      case 24:
        Ua(e, t, n, a), o & 2048 && lc(t.alternate, t);
        break;
      default:
        Ua(e, t, n, a);
    }
  }
  function Xl(e, t, n, a, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var u = e, g = t, _ = n, R = a, ee = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Xl(u, g, _, R, o), Gr(8, g);
          break;
        case 23:
          break;
        case 22:
          var ve = g.stateNode;
          g.memoizedState !== null ? ve._visibility & 2 ? Xl(u, g, _, R, o) : Fr(u, g) : (ve._visibility |= 2, Xl(u, g, _, R, o)), o && ee & 2048 && ic(g.alternate, g);
          break;
        case 24:
          Xl(u, g, _, R, o), o && ee & 2048 && lc(g.alternate, g);
          break;
        default:
          Xl(u, g, _, R, o);
      }
      t = t.sibling;
    }
  }
  function Fr(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var n = e, a = t, o = a.flags;
      switch (a.tag) {
        case 22:
          Fr(n, a), o & 2048 && ic(a.alternate, a);
          break;
        case 24:
          Fr(n, a), o & 2048 && lc(a.alternate, a);
          break;
        default:
          Fr(n, a);
      }
      t = t.sibling;
    }
  }
  var jr = 8192;
  function Vl(e, t, n) {
    if (e.subtreeFlags & jr) for (e = e.child; e !== null; ) Xd(e, t, n), e = e.sibling;
  }
  function Xd(e, t, n) {
    switch (e.tag) {
      case 26:
        Vl(e, t, n), e.flags & jr && e.memoizedState !== null && hp(n, Aa, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Vl(e, t, n);
        break;
      case 3:
      case 4:
        var a = Aa;
        Aa = vs(e.stateNode.containerInfo), Vl(e, t, n), Aa = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = jr, jr = 16777216, Vl(e, t, n), jr = a) : Vl(e, t, n));
        break;
      default:
        Vl(e, t, n);
    }
  }
  function Vd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function kr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var a = t[n];
        Dn = a, Qd(a, e);
      }
      Vd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Zd(e), e = e.sibling;
  }
  function Zd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        kr(e), e.flags & 2048 && Ti(9, e, e.return);
        break;
      case 3:
        kr(e);
        break;
      case 12:
        kr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ts(e)) : kr(e);
        break;
      default:
        kr(e);
    }
  }
  function ts(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var a = t[n];
        Dn = a, Qd(a, e);
      }
      Vd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ti(8, t, t.return), ts(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, ts(t));
          break;
        default:
          ts(t);
      }
      e = e.sibling;
    }
  }
  function Qd(e, t) {
    for (; Dn !== null; ) {
      var n = Dn;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ti(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          xr(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, Dn = a;
      else e: for (n = e; Dn !== null; ) {
        a = Dn;
        var o = a.sibling, u = a.return;
        if (Nd(a), a === n) {
          Dn = null;
          break e;
        }
        if (o !== null) {
          o.return = u, Dn = o;
          break e;
        }
        Dn = u;
      }
    }
  }
  var A1 = { getCacheForType: function(e) {
    var t = On(gn), n = t.data.get(e);
    return n === void 0 && (n = e(), t.data.set(e, n)), n;
  }, cacheSignal: function() {
    return On(gn).controller.signal;
  } }, U1 = typeof WeakMap == "function" ? WeakMap : Map, Gt = 0, Kt = null, wt = null, At = 0, Xt = 0, oa = null, Ai = false, Zl = false, rc = false, ui = 0, dn = 0, Ui = 0, cl = 0, oc = 0, sa = 0, Ql = 0, Yr = null, $n = null, sc = false, ns = 0, qd = 0, as = 1 / 0, is = null, Di = null, En = 0, Ci = null, ql = null, ci = 0, uc = 0, cc = null, Id = null, Xr = 0, fc = null;
  function ua() {
    return (Gt & 2) !== 0 && At !== 0 ? At & -At : q.T !== null ? gc() : jn();
  }
  function Pd() {
    if (sa === 0) if ((At & 536870912) === 0 || Dt) {
      var e = ut;
      ut <<= 1, (ut & 3932160) === 0 && (ut = 262144), sa = e;
    } else sa = 536870912;
    return e = la.current, e !== null && (e.flags |= 32), sa;
  }
  function ea(e, t, n) {
    (e === Kt && (Xt === 2 || Xt === 9) || e.cancelPendingCommit !== null) && (Il(e, 0), Oi(e, At, sa, false)), Yt(e, n), ((Gt & 2) === 0 || e !== Kt) && (e === Kt && ((Gt & 2) === 0 && (cl |= n), dn === 4 && Oi(e, At, sa, false)), Fa(e));
  }
  function Wd(e, t, n) {
    if ((Gt & 6) !== 0) throw Error(s(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || St(e, t), o = a ? O1(e, t) : dc(e, t, true), u = a;
    do {
      if (o === 0) {
        Zl && !a && Oi(e, t, 0, false);
        break;
      } else {
        if (n = e.current.alternate, u && !D1(n)) {
          o = dc(e, t, false), u = false;
          continue;
        }
        if (o === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u) var g = 0;
          else g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
          if (g !== 0) {
            t = g;
            e: {
              var _ = e;
              o = Yr;
              var R = _.current.memoizedState.isDehydrated;
              if (R && (Il(_, g).flags |= 256), g = dc(_, g, false), g !== 2) {
                if (rc && !R) {
                  _.errorRecoveryDisabledLanes |= u, cl |= u, o = 4;
                  break e;
                }
                u = $n, $n = o, u !== null && ($n === null ? $n = u : $n.push.apply($n, u));
              }
              o = g;
            }
            if (u = false, o !== 2) continue;
          }
        }
        if (o === 1) {
          Il(e, 0), Oi(e, t, 0, true);
          break;
        }
        e: {
          switch (a = e, u = o, u) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Oi(a, t, sa, !Ai);
              break e;
            case 2:
              $n = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (o = ns + 300 - Le(), 10 < o)) {
            if (Oi(a, t, sa, !Ai), vt(a, 0, true) !== 0) break e;
            ci = t, a.timeoutHandle = Av(Kd.bind(null, a, n, $n, is, sc, t, sa, cl, Ql, Ai, u, "Throttled", -0, 0), o);
            break e;
          }
          Kd(a, n, $n, is, sc, t, sa, cl, Ql, Ai, u, null, -0, 0);
        }
      }
      break;
    } while (true);
    Fa(e);
  }
  function Kd(e, t, n, a, o, u, g, _, R, ee, ve, Se, ne, oe) {
    if (e.timeoutHandle = -1, Se = t.subtreeFlags, Se & 8192 || (Se & 16785408) === 16785408) {
      Se = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: kn }, Xd(t, u, Se);
      var qe = (u & 62914560) === u ? ns - Le() : (u & 4194048) === u ? qd - Le() : 0;
      if (qe = dp(Se, qe), qe !== null) {
        ci = u, e.cancelPendingCommit = qe(lv.bind(null, e, t, u, n, a, o, g, _, R, ve, Se, null, ne, oe)), Oi(e, u, g, !ee);
        return;
      }
    }
    lv(e, t, u, n, a, o, g, _, R);
  }
  function D1(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var a = 0; a < n.length; a++) {
        var o = n[a], u = o.getSnapshot;
        o = o.value;
        try {
          if (!aa(u(), o)) return false;
        } catch {
          return false;
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function Oi(e, t, n, a) {
    t &= ~oc, t &= ~cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var u = 31 - F(o), g = 1 << u;
      a[u] = -1, o &= ~g;
    }
    n !== 0 && rn(e, n, t);
  }
  function ls() {
    return (Gt & 6) === 0 ? (Vr(0), false) : true;
  }
  function hc() {
    if (wt !== null) {
      if (Xt === 0) var e = wt.return;
      else e = wt, $a = tl = null, Uu(e), Hl = null, Tr = 0, e = wt;
      for (; e !== null; ) Ud(e.alternate, e), e = e.return;
      wt = null;
    }
  }
  function Il(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, P1(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), ci = 0, hc(), Kt = e, wt = n = Ka(e.current, null), At = t, Xt = 0, oa = null, Ai = false, Zl = St(e, t), rc = false, Ql = sa = oc = cl = Ui = dn = 0, $n = Yr = null, sc = false, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0) for (e = e.entanglements, a &= t; 0 < a; ) {
      var o = 31 - F(a), u = 1 << o;
      t |= e[o], a &= ~u;
    }
    return ui = t, To(), n;
  }
  function Jd(e, t) {
    mt = null, q.H = Lr, t === Gl || t === Lo ? (t = vh(), Xt = 3) : t === pu ? (t = vh(), Xt = 4) : Xt = t === Vu ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, oa = t, wt === null && (dn = 1, Io(e, ma(t, e.current)));
  }
  function $d() {
    var e = la.current;
    return e === null ? true : (At & 4194048) === At ? ba === null : (At & 62914560) === At || (At & 536870912) !== 0 ? e === ba : false;
  }
  function ev() {
    var e = q.H;
    return q.H = Lr, e === null ? Lr : e;
  }
  function tv() {
    var e = q.A;
    return q.A = A1, e;
  }
  function rs() {
    dn = 4, Ai || (At & 4194048) !== At && la.current !== null || (Zl = true), (Ui & 134217727) === 0 && (cl & 134217727) === 0 || Kt === null || Oi(Kt, At, sa, false);
  }
  function dc(e, t, n) {
    var a = Gt;
    Gt |= 2;
    var o = ev(), u = tv();
    (Kt !== e || At !== t) && (is = null, Il(e, t)), t = false;
    var g = dn;
    e: do
      try {
        if (Xt !== 0 && wt !== null) {
          var _ = wt, R = oa;
          switch (Xt) {
            case 8:
              hc(), g = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              la.current === null && (t = true);
              var ee = Xt;
              if (Xt = 0, oa = null, Pl(e, _, R, ee), n && Zl) {
                g = 0;
                break e;
              }
              break;
            default:
              ee = Xt, Xt = 0, oa = null, Pl(e, _, R, ee);
          }
        }
        C1(), g = dn;
        break;
      } catch (ve) {
        Jd(e, ve);
      }
    while (true);
    return t && e.shellSuspendCounter++, $a = tl = null, Gt = a, q.H = o, q.A = u, wt === null && (Kt = null, At = 0, To()), g;
  }
  function C1() {
    for (; wt !== null; ) nv(wt);
  }
  function O1(e, t) {
    var n = Gt;
    Gt |= 2;
    var a = ev(), o = tv();
    Kt !== e || At !== t ? (is = null, as = Le() + 500, Il(e, t)) : Zl = St(e, t);
    e: do
      try {
        if (Xt !== 0 && wt !== null) {
          t = wt;
          var u = oa;
          t: switch (Xt) {
            case 1:
              Xt = 0, oa = null, Pl(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (hh(u)) {
                Xt = 0, oa = null, av(t);
                break;
              }
              t = function() {
                Xt !== 2 && Xt !== 9 || Kt !== e || (Xt = 7), Fa(e);
              }, u.then(t, t);
              break e;
            case 3:
              Xt = 7;
              break e;
            case 4:
              Xt = 5;
              break e;
            case 7:
              hh(u) ? (Xt = 0, oa = null, av(t)) : (Xt = 0, oa = null, Pl(e, t, u, 7));
              break;
            case 5:
              var g = null;
              switch (wt.tag) {
                case 26:
                  g = wt.memoizedState;
                case 5:
                case 27:
                  var _ = wt;
                  if (g ? Yv(g) : _.stateNode.complete) {
                    Xt = 0, oa = null;
                    var R = _.sibling;
                    if (R !== null) wt = R;
                    else {
                      var ee = _.return;
                      ee !== null ? (wt = ee, os(ee)) : wt = null;
                    }
                    break t;
                  }
              }
              Xt = 0, oa = null, Pl(e, t, u, 5);
              break;
            case 6:
              Xt = 0, oa = null, Pl(e, t, u, 6);
              break;
            case 8:
              hc(), dn = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        z1();
        break;
      } catch (ve) {
        Jd(e, ve);
      }
    while (true);
    return $a = tl = null, q.H = a, q.A = o, Gt = n, wt !== null ? 0 : (Kt = null, At = 0, To(), dn);
  }
  function z1() {
    for (; wt !== null && !rt(); ) nv(wt);
  }
  function nv(e) {
    var t = Td(e.alternate, e, ui);
    e.memoizedProps = e.pendingProps, t === null ? os(e) : wt = t;
  }
  function av(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Sd(n, t, t.pendingProps, t.type, void 0, At);
        break;
      case 11:
        t = Sd(n, t, t.pendingProps, t.type.render, t.ref, At);
        break;
      case 5:
        Uu(t);
      default:
        Ud(n, t), t = wt = th(t, ui), t = Td(n, t, ui);
    }
    e.memoizedProps = e.pendingProps, t === null ? os(e) : wt = t;
  }
  function Pl(e, t, n, a) {
    $a = tl = null, Uu(t), Hl = null, Tr = 0;
    var o = t.return;
    try {
      if (S1(e, o, t, n, At)) {
        dn = 1, Io(e, ma(n, e.current)), wt = null;
        return;
      }
    } catch (u) {
      if (o !== null) throw wt = o, u;
      dn = 1, Io(e, ma(n, e.current)), wt = null;
      return;
    }
    t.flags & 32768 ? (Dt || a === 1 ? e = true : Zl || (At & 536870912) !== 0 ? e = false : (Ai = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = la.current, a !== null && a.tag === 13 && (a.flags |= 16384))), iv(t, e)) : os(t);
  }
  function os(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        iv(t, Ai);
        return;
      }
      e = t.return;
      var n = w1(t.alternate, t, ui);
      if (n !== null) {
        wt = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        wt = t;
        return;
      }
      wt = t = e;
    } while (t !== null);
    dn === 0 && (dn = 5);
  }
  function iv(e, t) {
    do {
      var n = x1(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, wt = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        wt = e;
        return;
      }
      wt = e = n;
    } while (e !== null);
    dn = 6, wt = null;
  }
  function lv(e, t, n, a, o, u, g, _, R) {
    e.cancelPendingCommit = null;
    do
      ss();
    while (En !== 0);
    if ((Gt & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (u = t.lanes | t.childLanes, u |= tu, $t(e, n, u, g, _, R), e === Kt && (wt = Kt = null, At = 0), ql = t, Ci = e, ci = n, uc = u, cc = o, Id = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, N1(Qe, function() {
        return cv(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = q.T, q.T = null, o = he.p, he.p = 2, g = Gt, Gt |= 4;
        try {
          M1(e, t, n);
        } finally {
          Gt = g, he.p = o, q.T = a;
        }
      }
      En = 1, rv(), ov(), sv();
    }
  }
  function rv() {
    if (En === 1) {
      En = 0;
      var e = Ci, t = ql, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = q.T, q.T = null;
        var a = he.p;
        he.p = 2;
        var o = Gt;
        Gt |= 4;
        try {
          jd(t, e);
          var u = Mc, g = Qf(e.containerInfo), _ = u.focusedElem, R = u.selectionRange;
          if (g !== _ && _ && _.ownerDocument && Zf(_.ownerDocument.documentElement, _)) {
            if (R !== null && Ws(_)) {
              var ee = R.start, ve = R.end;
              if (ve === void 0 && (ve = ee), "selectionStart" in _) _.selectionStart = ee, _.selectionEnd = Math.min(ve, _.value.length);
              else {
                var Se = _.ownerDocument || document, ne = Se && Se.defaultView || window;
                if (ne.getSelection) {
                  var oe = ne.getSelection(), qe = _.textContent.length, st = Math.min(R.start, qe), qt = R.end === void 0 ? st : Math.min(R.end, qe);
                  !oe.extend && st > qt && (g = qt, qt = st, st = g);
                  var P = Vf(_, st), X = Vf(_, qt);
                  if (P && X && (oe.rangeCount !== 1 || oe.anchorNode !== P.node || oe.anchorOffset !== P.offset || oe.focusNode !== X.node || oe.focusOffset !== X.offset)) {
                    var $ = Se.createRange();
                    $.setStart(P.node, P.offset), oe.removeAllRanges(), st > qt ? (oe.addRange($), oe.extend(X.node, X.offset)) : ($.setEnd(X.node, X.offset), oe.addRange($));
                  }
                }
              }
            }
            for (Se = [], oe = _; oe = oe.parentNode; ) oe.nodeType === 1 && Se.push({ element: oe, left: oe.scrollLeft, top: oe.scrollTop });
            for (typeof _.focus == "function" && _.focus(), _ = 0; _ < Se.length; _++) {
              var ge = Se[_];
              ge.element.scrollLeft = ge.left, ge.element.scrollTop = ge.top;
            }
          }
          Ss = !!xc, Mc = xc = null;
        } finally {
          Gt = o, he.p = a, q.T = n;
        }
      }
      e.current = t, En = 2;
    }
  }
  function ov() {
    if (En === 2) {
      En = 0;
      var e = Ci, t = ql, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = q.T, q.T = null;
        var a = he.p;
        he.p = 2;
        var o = Gt;
        Gt |= 4;
        try {
          Bd(e, t.alternate, t);
        } finally {
          Gt = o, he.p = a, q.T = n;
        }
      }
      En = 3;
    }
  }
  function sv() {
    if (En === 4 || En === 3) {
      En = 0, Ge();
      var e = Ci, t = ql, n = ci, a = Id;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? En = 5 : (En = 0, ql = Ci = null, uv(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (Di = null), wn(n), t = t.stateNode, ke && typeof ke.onCommitFiberRoot == "function") try {
        ke.onCommitFiberRoot(ot, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        t = q.T, o = he.p, he.p = 2, q.T = null;
        try {
          for (var u = e.onRecoverableError, g = 0; g < a.length; g++) {
            var _ = a[g];
            u(_.value, { componentStack: _.stack });
          }
        } finally {
          q.T = t, he.p = o;
        }
      }
      (ci & 3) !== 0 && ss(), Fa(e), o = e.pendingLanes, (n & 261930) !== 0 && (o & 42) !== 0 ? e === fc ? Xr++ : (Xr = 0, fc = e) : Xr = 0, Vr(0);
    }
  }
  function uv(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, xr(t)));
  }
  function ss() {
    return rv(), ov(), sv(), cv();
  }
  function cv() {
    if (En !== 5) return false;
    var e = Ci, t = uc;
    uc = 0;
    var n = wn(ci), a = q.T, o = he.p;
    try {
      he.p = 32 > n ? 32 : n, q.T = null, n = cc, cc = null;
      var u = Ci, g = ci;
      if (En = 0, ql = Ci = null, ci = 0, (Gt & 6) !== 0) throw Error(s(331));
      var _ = Gt;
      if (Gt |= 4, Zd(u.current), Yd(u, u.current, g, n), Gt = _, Vr(0, false), ke && typeof ke.onPostCommitFiberRoot == "function") try {
        ke.onPostCommitFiberRoot(ot, u);
      } catch {
      }
      return true;
    } finally {
      he.p = o, q.T = a, uv(e, t);
    }
  }
  function fv(e, t, n) {
    t = ma(n, t), t = Xu(e.stateNode, t, 2), e = wi(e, t, 2), e !== null && (Yt(e, 2), Fa(e));
  }
  function Vt(e, t, n) {
    if (e.tag === 3) fv(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        fv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Di === null || !Di.has(a))) {
          e = ma(n, e), n = hd(2), a = wi(t, n, 2), a !== null && (dd(n, a, t, e), Yt(a, 2), Fa(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function vc(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new U1();
      var o = /* @__PURE__ */ new Set();
      a.set(t, o);
    } else o = a.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), a.set(t, o));
    o.has(n) || (rc = true, o.add(n), e = R1.bind(null, e, t, n), t.then(e, e));
  }
  function R1(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Kt === e && (At & n) === n && (dn === 4 || dn === 3 && (At & 62914560) === At && 300 > Le() - ns ? (Gt & 2) === 0 && Il(e, 0) : oc |= n, Ql === At && (Ql = 0)), Fa(e);
  }
  function hv(e, t) {
    t === 0 && (t = it()), e = Ji(e, t), e !== null && (Yt(e, t), Fa(e));
  }
  function L1(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), hv(e, n);
  }
  function B1(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(t), hv(e, n);
  }
  function N1(e, t) {
    return je(e, t);
  }
  var us = null, Wl = null, mc = false, cs = false, pc = false, zi = 0;
  function Fa(e) {
    e !== Wl && e.next === null && (Wl === null ? us = Wl = e : Wl = Wl.next = e), cs = true, mc || (mc = true, H1());
  }
  function Vr(e, t) {
    if (!pc && cs) {
      pc = true;
      do
        for (var n = false, a = us; a !== null; ) {
          if (e !== 0) {
            var o = a.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var g = a.suspendedLanes, _ = a.pingedLanes;
              u = (1 << 31 - F(42 | e) + 1) - 1, u &= o & ~(g & ~_), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = true, pv(a, u));
          } else u = At, u = vt(a, a === Kt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || St(a, u) || (n = true, pv(a, u));
          a = a.next;
        }
      while (n);
      pc = false;
    }
  }
  function G1() {
    dv();
  }
  function dv() {
    cs = mc = false;
    var e = 0;
    zi !== 0 && I1() && (e = zi);
    for (var t = Le(), n = null, a = us; a !== null; ) {
      var o = a.next, u = vv(a, t);
      u === 0 ? (a.next = null, n === null ? us = o : n.next = o, o === null && (Wl = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (cs = true)), a = o;
    }
    En !== 0 && En !== 5 || Vr(e), zi !== 0 && (zi = 0);
  }
  function vv(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var g = 31 - F(u), _ = 1 << g, R = o[g];
      R === -1 ? ((_ & n) === 0 || (_ & a) !== 0) && (o[g] = _t(_, t)) : R <= t && (e.expiredLanes |= _), u &= ~_;
    }
    if (t = Kt, n = At, n = vt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Xt === 2 || Xt === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && _e(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || St(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && _e(a), wn(n)) {
        case 2:
        case 8:
          n = He;
          break;
        case 32:
          n = Qe;
          break;
        case 268435456:
          n = ct;
          break;
        default:
          n = Qe;
      }
      return a = mv.bind(null, e), n = je(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && _e(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function mv(e, t) {
    if (En !== 0 && En !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (ss() && e.callbackNode !== n) return null;
    var a = At;
    return a = vt(e, e === Kt ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Wd(e, a, t), vv(e, Le()), e.callbackNode != null && e.callbackNode === n ? mv.bind(null, e) : null);
  }
  function pv(e, t) {
    if (ss()) return null;
    Wd(e, t, true);
  }
  function H1() {
    W1(function() {
      (Gt & 6) !== 0 ? je(gt, G1) : dv();
    });
  }
  function gc() {
    if (zi === 0) {
      var e = Bl;
      e === 0 && (e = ue, ue <<= 1, (ue & 261888) === 0 && (ue = 256)), zi = e;
    }
    return zi;
  }
  function gv(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : xa("" + e);
  }
  function yv(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function F1(e, t, n, a, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var u = gv((o[b] || null).action), g = a.submitter;
      g && (t = (t = g[b] || null) ? gv(t.formAction) : g.getAttribute("formAction"), t !== null && (u = t, g = null));
      var _ = new pi("action", "action", null, a, o);
      e.push({ event: _, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (zi !== 0) {
            var R = g ? yv(o, g) : new FormData(o);
            Gu(n, { pending: true, data: R, method: o.method, action: u }, null, R);
          }
        } else typeof u == "function" && (_.preventDefault(), R = g ? yv(o, g) : new FormData(o), Gu(n, { pending: true, data: R, method: o.method, action: u }, u, R));
      }, currentTarget: o }] });
    }
  }
  for (var yc = 0; yc < eu.length; yc++) {
    var bc = eu[yc], j1 = bc.toLowerCase(), k1 = bc[0].toUpperCase() + bc.slice(1);
    Ta(j1, "on" + k1);
  }
  Ta(Pf, "onAnimationEnd"), Ta(Wf, "onAnimationIteration"), Ta(Kf, "onAnimationStart"), Ta("dblclick", "onDoubleClick"), Ta("focusin", "onFocus"), Ta("focusout", "onBlur"), Ta(a1, "onTransitionRun"), Ta(i1, "onTransitionStart"), Ta(l1, "onTransitionCancel"), Ta(Jf, "onTransitionEnd"), dt("onMouseEnter", ["mouseout", "mouseover"]), dt("onMouseLeave", ["mouseout", "mouseover"]), dt("onPointerEnter", ["pointerout", "pointerover"]), dt("onPointerLeave", ["pointerout", "pointerover"]), tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Y1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zr));
  function bv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], o = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t) for (var g = a.length - 1; 0 <= g; g--) {
          var _ = a[g], R = _.instance, ee = _.currentTarget;
          if (_ = _.listener, R !== u && o.isPropagationStopped()) break e;
          u = _, o.currentTarget = ee;
          try {
            u(o);
          } catch (ve) {
            Mo(ve);
          }
          o.currentTarget = null, u = R;
        }
        else for (g = 0; g < a.length; g++) {
          if (_ = a[g], R = _.instance, ee = _.currentTarget, _ = _.listener, R !== u && o.isPropagationStopped()) break e;
          u = _, o.currentTarget = ee;
          try {
            u(o);
          } catch (ve) {
            Mo(ve);
          }
          o.currentTarget = null, u = R;
        }
      }
    }
  }
  function xt(e, t) {
    var n = t[G];
    n === void 0 && (n = t[G] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Sv(t, e, 2, false), n.add(a));
  }
  function Sc(e, t, n) {
    var a = 0;
    t && (a |= 4), Sv(n, e, a, t);
  }
  var fs = "_reactListening" + Math.random().toString(36).slice(2);
  function _c(e) {
    if (!e[fs]) {
      e[fs] = true, We.forEach(function(n) {
        n !== "selectionchange" && (Y1.has(n) || Sc(n, false, e), Sc(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[fs] || (t[fs] = true, Sc("selectionchange", false, t));
    }
  }
  function Sv(e, t, n, a) {
    switch (Pv(t)) {
      case 2:
        var o = pp;
        break;
      case 8:
        o = gp;
        break;
      default:
        o = Nc;
    }
    n = o.bind(null, t, n, e), o = void 0, !In || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), a ? o !== void 0 ? e.addEventListener(t, n, { capture: true, passive: o }) : e.addEventListener(t, n, true) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, false);
  }
  function Ec(e, t, n, a, o) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (; ; ) {
      if (a === null) return;
      var g = a.tag;
      if (g === 3 || g === 4) {
        var _ = a.stateNode.containerInfo;
        if (_ === o) break;
        if (g === 4) for (g = a.return; g !== null; ) {
          var R = g.tag;
          if ((R === 3 || R === 4) && g.stateNode.containerInfo === o) return;
          g = g.return;
        }
        for (; _ !== null; ) {
          if (g = Ue(_), g === null) return;
          if (R = g.tag, R === 5 || R === 6 || R === 26 || R === 27) {
            a = u = g;
            continue e;
          }
          _ = _.parentNode;
        }
      }
      a = a.return;
    }
    qi(function() {
      var ee = u, ve = bl(n), Se = [];
      e: {
        var ne = $f.get(e);
        if (ne !== void 0) {
          var oe = pi, qe = e;
          switch (e) {
            case "keypress":
              if (Ii(n) === 0) break e;
            case "keydown":
            case "keyup":
              oe = B0;
              break;
            case "focusin":
              qe = "focus", oe = pr;
              break;
            case "focusout":
              qe = "blur", oe = pr;
              break;
            case "beforeblur":
            case "afterblur":
              oe = pr;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              oe = _o;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              oe = Ml;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              oe = H0;
              break;
            case Pf:
            case Wf:
            case Kf:
              oe = na;
              break;
            case Jf:
              oe = j0;
              break;
            case "scroll":
            case "scrollend":
              oe = Pi;
              break;
            case "wheel":
              oe = Y0;
              break;
            case "copy":
            case "cut":
            case "paste":
              oe = Ba;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              oe = Cf;
              break;
            case "toggle":
            case "beforetoggle":
              oe = V0;
          }
          var st = (t & 4) !== 0, qt = !st && (e === "scroll" || e === "scrollend"), P = st ? ne !== null ? ne + "Capture" : null : ne;
          st = [];
          for (var X = ee, $; X !== null; ) {
            var ge = X;
            if ($ = ge.stateNode, ge = ge.tag, ge !== 5 && ge !== 26 && ge !== 27 || $ === null || P === null || (ge = Qa(X, P), ge != null && st.push(Qr(X, ge, $))), qt) break;
            X = X.return;
          }
          0 < st.length && (ne = new oe(ne, qe, null, n, ve), Se.push({ event: ne, listeners: st }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (ne = e === "mouseover" || e === "pointerover", oe = e === "mouseout" || e === "pointerout", ne && n !== Za && (qe = n.relatedTarget || n.fromElement) && (Ue(qe) || qe[w])) break e;
          if ((oe || ne) && (ne = ve.window === ve ? ve : (ne = ve.ownerDocument) ? ne.defaultView || ne.parentWindow : window, oe ? (qe = n.relatedTarget || n.toElement, oe = ee, qe = qe ? Ue(qe) : null, qe !== null && (qt = i(qe), st = qe.tag, qe !== qt || st !== 5 && st !== 27 && st !== 6) && (qe = null)) : (oe = null, qe = ee), oe !== qe)) {
            if (st = _o, ge = "onMouseLeave", P = "onMouseEnter", X = "mouse", (e === "pointerout" || e === "pointerover") && (st = Cf, ge = "onPointerLeave", P = "onPointerEnter", X = "pointer"), qt = oe == null ? ne : Ce(oe), $ = qe == null ? ne : Ce(qe), ne = new st(ge, X + "leave", oe, n, ve), ne.target = qt, ne.relatedTarget = $, ge = null, Ue(ve) === ee && (st = new st(P, X + "enter", qe, n, ve), st.target = $, st.relatedTarget = qt, ge = st), qt = ge, oe && qe) t: {
              for (st = X1, P = oe, X = qe, $ = 0, ge = P; ge; ge = st(ge)) $++;
              ge = 0;
              for (var nt = X; nt; nt = st(nt)) ge++;
              for (; 0 < $ - ge; ) P = st(P), $--;
              for (; 0 < ge - $; ) X = st(X), ge--;
              for (; $--; ) {
                if (P === X || X !== null && P === X.alternate) {
                  st = P;
                  break t;
                }
                P = st(P), X = st(X);
              }
              st = null;
            }
            else st = null;
            oe !== null && _v(Se, ne, oe, st, false), qe !== null && qt !== null && _v(Se, qt, qe, st, true);
          }
        }
        e: {
          if (ne = ee ? Ce(ee) : window, oe = ne.nodeName && ne.nodeName.toLowerCase(), oe === "select" || oe === "input" && ne.type === "file") var Bt = Hf;
          else if (Nf(ne)) if (Ff) Bt = e1;
          else {
            Bt = J0;
            var Ke = K0;
          }
          else oe = ne.nodeName, !oe || oe.toLowerCase() !== "input" || ne.type !== "checkbox" && ne.type !== "radio" ? ee && Va(ee.elementType) && (Bt = Hf) : Bt = $0;
          if (Bt && (Bt = Bt(e, ee))) {
            Gf(Se, Bt, n, ve);
            break e;
          }
          Ke && Ke(e, ne, ee), e === "focusout" && ee && ne.type === "number" && ee.memoizedProps.value != null && un(ne, "number", ne.value);
        }
        switch (Ke = ee ? Ce(ee) : window, e) {
          case "focusin":
            (Nf(Ke) || Ke.contentEditable === "true") && (Al = Ke, Ks = ee, _r = null);
            break;
          case "focusout":
            _r = Ks = Al = null;
            break;
          case "mousedown":
            Js = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Js = false, qf(Se, n, ve);
            break;
          case "selectionchange":
            if (n1) break;
          case "keydown":
          case "keyup":
            qf(Se, n, ve);
        }
        var pt;
        if (qs) e: {
          switch (e) {
            case "compositionstart":
              var Ut = "onCompositionStart";
              break e;
            case "compositionend":
              Ut = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ut = "onCompositionUpdate";
              break e;
          }
          Ut = void 0;
        }
        else Tl ? Lf(e, n) && (Ut = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ut = "onCompositionStart");
        Ut && (Of && n.locale !== "ko" && (Tl || Ut !== "onCompositionStart" ? Ut === "onCompositionEnd" && Tl && (pt = mr()) : (Ma = ve, El = "value" in Ma ? Ma.value : Ma.textContent, Tl = true)), Ke = hs(ee, Ut), 0 < Ke.length && (Ut = new Df(Ut, e, null, n, ve), Se.push({ event: Ut, listeners: Ke }), pt ? Ut.data = pt : (pt = Bf(n), pt !== null && (Ut.data = pt)))), (pt = Q0 ? q0(e, n) : I0(e, n)) && (Ut = hs(ee, "onBeforeInput"), 0 < Ut.length && (Ke = new Df("onBeforeInput", "beforeinput", null, n, ve), Se.push({ event: Ke, listeners: Ut }), Ke.data = pt)), F1(Se, e, ee, n, ve);
      }
      bv(Se, t);
    });
  }
  function Qr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function hs(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var o = e, u = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || u === null || (o = Qa(e, n), o != null && a.unshift(Qr(e, o, u)), o = Qa(e, t), o != null && a.push(Qr(e, o, u))), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function X1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _v(e, t, n, a, o) {
    for (var u = t._reactName, g = []; n !== null && n !== a; ) {
      var _ = n, R = _.alternate, ee = _.stateNode;
      if (_ = _.tag, R !== null && R === a) break;
      _ !== 5 && _ !== 26 && _ !== 27 || ee === null || (R = ee, o ? (ee = Qa(n, u), ee != null && g.unshift(Qr(n, ee, R))) : o || (ee = Qa(n, u), ee != null && g.push(Qr(n, ee, R)))), n = n.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var V1 = /\r\n?/g, Z1 = /\u0000|\uFFFD/g;
  function Ev(e) {
    return (typeof e == "string" ? e : "" + e).replace(V1, `
`).replace(Z1, "");
  }
  function wv(e, t) {
    return t = Ev(t), Ev(e) === t;
  }
  function Qt(e, t, n, a, o, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Oa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Oa(e, "" + a);
        break;
      case "className":
        xn(e, "class", a);
        break;
      case "tabIndex":
        xn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xn(e, n, a);
        break;
      case "style":
        gl(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          xn(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = xa("" + a), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (n === "formAction" ? (t !== "input" && Qt(e, t, "name", o.name, o, null), Qt(e, t, "formEncType", o.formEncType, o, null), Qt(e, t, "formMethod", o.formMethod, o, null), Qt(e, t, "formTarget", o.formTarget, o, null)) : (Qt(e, t, "encType", o.encType, o, null), Qt(e, t, "method", o.method, o, null), Qt(e, t, "target", o.target, o, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = xa("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = kn);
        break;
      case "onScroll":
        a != null && xt("scroll", e);
        break;
      case "onScrollEnd":
        a != null && xt("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = xa("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === true ? e.setAttribute(n, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
        break;
      case "popover":
        xt("beforetoggle", e), xt("toggle", e), Tt(e, "popover", a);
        break;
      case "xlinkActuate":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        bt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        bt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        bt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        bt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Tt(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = So.get(n) || n, Tt(e, n, a));
    }
  }
  function wc(e, t, n, a, o, u) {
    switch (n) {
      case "style":
        gl(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Oa(e, a) : (typeof a == "number" || typeof a == "bigint") && Oa(e, "" + a);
        break;
      case "onScroll":
        a != null && xt("scroll", e);
        break;
      case "onScrollEnd":
        a != null && xt("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = kn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ie.hasOwnProperty(n)) e: {
          if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), u = e[b] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, o), typeof a == "function")) {
            typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, o);
            break e;
          }
          n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : Tt(e, n, a);
        }
    }
  }
  function Rn(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        xt("error", e), xt("load", e);
        var a = false, o = false, u;
        for (u in n) if (n.hasOwnProperty(u)) {
          var g = n[u];
          if (g != null) switch (u) {
            case "src":
              a = true;
              break;
            case "srcSet":
              o = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, t));
            default:
              Qt(e, t, u, g, n, null);
          }
        }
        o && Qt(e, t, "srcSet", n.srcSet, n, null), a && Qt(e, t, "src", n.src, n, null);
        return;
      case "input":
        xt("invalid", e);
        var _ = u = g = o = null, R = null, ee = null;
        for (a in n) if (n.hasOwnProperty(a)) {
          var ve = n[a];
          if (ve != null) switch (a) {
            case "name":
              o = ve;
              break;
            case "type":
              g = ve;
              break;
            case "checked":
              R = ve;
              break;
            case "defaultChecked":
              ee = ve;
              break;
            case "value":
              u = ve;
              break;
            case "defaultValue":
              _ = ve;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (ve != null) throw Error(s(137, t));
              break;
            default:
              Qt(e, t, a, ve, n, null);
          }
        }
        qn(e, u, _, R, ee, g, o, false);
        return;
      case "select":
        xt("invalid", e), a = g = u = null;
        for (o in n) if (n.hasOwnProperty(o) && (_ = n[o], _ != null)) switch (o) {
          case "value":
            u = _;
            break;
          case "defaultValue":
            g = _;
            break;
          case "multiple":
            a = _;
          default:
            Qt(e, t, o, _, n, null);
        }
        t = u, n = g, e.multiple = !!a, t != null ? An(e, !!a, t, false) : n != null && An(e, !!a, n, true);
        return;
      case "textarea":
        xt("invalid", e), u = o = a = null;
        for (g in n) if (n.hasOwnProperty(g) && (_ = n[g], _ != null)) switch (g) {
          case "value":
            a = _;
            break;
          case "defaultValue":
            o = _;
            break;
          case "children":
            u = _;
            break;
          case "dangerouslySetInnerHTML":
            if (_ != null) throw Error(s(91));
            break;
          default:
            Qt(e, t, g, _, n, null);
        }
        Qi(e, a, o, u);
        return;
      case "option":
        for (R in n) if (n.hasOwnProperty(R) && (a = n[R], a != null)) switch (R) {
          case "selected":
            e.selected = a && typeof a != "function" && typeof a != "symbol";
            break;
          default:
            Qt(e, t, R, a, n, null);
        }
        return;
      case "dialog":
        xt("beforetoggle", e), xt("toggle", e), xt("cancel", e), xt("close", e);
        break;
      case "iframe":
      case "object":
        xt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Zr.length; a++) xt(Zr[a], e);
        break;
      case "image":
        xt("error", e), xt("load", e);
        break;
      case "details":
        xt("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        xt("error", e), xt("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (ee in n) if (n.hasOwnProperty(ee) && (a = n[ee], a != null)) switch (ee) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(137, t));
          default:
            Qt(e, t, ee, a, n, null);
        }
        return;
      default:
        if (Va(t)) {
          for (ve in n) n.hasOwnProperty(ve) && (a = n[ve], a !== void 0 && wc(e, t, ve, a, n, void 0));
          return;
        }
    }
    for (_ in n) n.hasOwnProperty(_) && (a = n[_], a != null && Qt(e, t, _, a, n, null));
  }
  function Q1(e, t, n, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, u = null, g = null, _ = null, R = null, ee = null, ve = null;
        for (oe in n) {
          var Se = n[oe];
          if (n.hasOwnProperty(oe) && Se != null) switch (oe) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              R = Se;
            default:
              a.hasOwnProperty(oe) || Qt(e, t, oe, null, a, Se);
          }
        }
        for (var ne in a) {
          var oe = a[ne];
          if (Se = n[ne], a.hasOwnProperty(ne) && (oe != null || Se != null)) switch (ne) {
            case "type":
              u = oe;
              break;
            case "name":
              o = oe;
              break;
            case "checked":
              ee = oe;
              break;
            case "defaultChecked":
              ve = oe;
              break;
            case "value":
              g = oe;
              break;
            case "defaultValue":
              _ = oe;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (oe != null) throw Error(s(137, t));
              break;
            default:
              oe !== Se && Qt(e, t, ne, oe, a, Se);
          }
        }
        Tn(e, g, _, R, ee, ve, u, o);
        return;
      case "select":
        oe = g = _ = ne = null;
        for (u in n) if (R = n[u], n.hasOwnProperty(u) && R != null) switch (u) {
          case "value":
            break;
          case "multiple":
            oe = R;
          default:
            a.hasOwnProperty(u) || Qt(e, t, u, null, a, R);
        }
        for (o in a) if (u = a[o], R = n[o], a.hasOwnProperty(o) && (u != null || R != null)) switch (o) {
          case "value":
            ne = u;
            break;
          case "defaultValue":
            _ = u;
            break;
          case "multiple":
            g = u;
          default:
            u !== R && Qt(e, t, o, u, a, R);
        }
        t = _, n = g, a = oe, ne != null ? An(e, !!n, ne, false) : !!a != !!n && (t != null ? An(e, !!n, t, true) : An(e, !!n, n ? [] : "", false));
        return;
      case "textarea":
        oe = ne = null;
        for (_ in n) if (o = n[_], n.hasOwnProperty(_) && o != null && !a.hasOwnProperty(_)) switch (_) {
          case "value":
            break;
          case "children":
            break;
          default:
            Qt(e, t, _, null, a, o);
        }
        for (g in a) if (o = a[g], u = n[g], a.hasOwnProperty(g) && (o != null || u != null)) switch (g) {
          case "value":
            ne = o;
            break;
          case "defaultValue":
            oe = o;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (o != null) throw Error(s(91));
            break;
          default:
            o !== u && Qt(e, t, g, o, a, u);
        }
        Zi(e, ne, oe);
        return;
      case "option":
        for (var qe in n) if (ne = n[qe], n.hasOwnProperty(qe) && ne != null && !a.hasOwnProperty(qe)) switch (qe) {
          case "selected":
            e.selected = false;
            break;
          default:
            Qt(e, t, qe, null, a, ne);
        }
        for (R in a) if (ne = a[R], oe = n[R], a.hasOwnProperty(R) && ne !== oe && (ne != null || oe != null)) switch (R) {
          case "selected":
            e.selected = ne && typeof ne != "function" && typeof ne != "symbol";
            break;
          default:
            Qt(e, t, R, ne, a, oe);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var st in n) ne = n[st], n.hasOwnProperty(st) && ne != null && !a.hasOwnProperty(st) && Qt(e, t, st, null, a, ne);
        for (ee in a) if (ne = a[ee], oe = n[ee], a.hasOwnProperty(ee) && ne !== oe && (ne != null || oe != null)) switch (ee) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (ne != null) throw Error(s(137, t));
            break;
          default:
            Qt(e, t, ee, ne, a, oe);
        }
        return;
      default:
        if (Va(t)) {
          for (var qt in n) ne = n[qt], n.hasOwnProperty(qt) && ne !== void 0 && !a.hasOwnProperty(qt) && wc(e, t, qt, void 0, a, ne);
          for (ve in a) ne = a[ve], oe = n[ve], !a.hasOwnProperty(ve) || ne === oe || ne === void 0 && oe === void 0 || wc(e, t, ve, ne, a, oe);
          return;
        }
    }
    for (var P in n) ne = n[P], n.hasOwnProperty(P) && ne != null && !a.hasOwnProperty(P) && Qt(e, t, P, null, a, ne);
    for (Se in a) ne = a[Se], oe = n[Se], !a.hasOwnProperty(Se) || ne === oe || ne == null && oe == null || Qt(e, t, Se, ne, a, oe);
  }
  function xv(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function q1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var o = n[a], u = o.transferSize, g = o.initiatorType, _ = o.duration;
        if (u && _ && xv(g)) {
          for (g = 0, _ = o.responseEnd, a += 1; a < n.length; a++) {
            var R = n[a], ee = R.startTime;
            if (ee > _) break;
            var ve = R.transferSize, Se = R.initiatorType;
            ve && xv(Se) && (R = R.responseEnd, g += ve * (R < _ ? 1 : (_ - ee) / (R - ee)));
          }
          if (--a, t += 8 * (u + g) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var xc = null, Mc = null;
  function ds(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Mv(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Tv(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Tc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ac = null;
  function I1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ac ? false : (Ac = e, true) : (Ac = null, false);
  }
  var Av = typeof setTimeout == "function" ? setTimeout : void 0, P1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Uv = typeof Promise == "function" ? Promise : void 0, W1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uv < "u" ? function(e) {
    return Uv.resolve(null).then(e).catch(K1);
  } : Av;
  function K1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ri(e) {
    return e === "head";
  }
  function Dv(e, t) {
    var n = t, a = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$" || n === "/&") {
        if (a === 0) {
          e.removeChild(o), er(t);
          return;
        }
        a--;
      } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") a++;
      else if (n === "html") qr(e.ownerDocument.documentElement);
      else if (n === "head") {
        n = e.ownerDocument.head, qr(n);
        for (var u = n.firstChild; u; ) {
          var g = u.nextSibling, _ = u.nodeName;
          u[xe] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = g;
        }
      } else n === "body" && qr(e.ownerDocument.body);
      n = o;
    } while (n);
    er(t);
  }
  function Cv(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (e === 0) break;
        e--;
      } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = a;
    } while (n);
  }
  function Uc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uc(n), we(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function J1(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[xe]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (u !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (u = e.getAttribute("src"), (u !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (t === "input" && e.type === "hidden") {
        var u = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (e = Sa(e.nextSibling), e === null) break;
    }
    return null;
  }
  function $1(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Sa(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ov(e, t) {
    for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Sa(e.nextSibling), e === null)) return null;
    return e;
  }
  function Dc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Cc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ep(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var a = function() {
        t(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function Sa(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Oc = null;
  function zv(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Sa(e.nextSibling);
          t--;
        } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Rv(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Lv(e, t, n) {
    switch (t = ds(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function qr(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    we(e);
  }
  var _a = /* @__PURE__ */ new Map(), Bv = /* @__PURE__ */ new Set();
  function vs(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var fi = he.d;
  he.d = { f: tp, r: np, D: ap, C: ip, L: lp, m: rp, X: sp, S: op, M: up };
  function tp() {
    var e = fi.f(), t = ls();
    return e || t;
  }
  function np(e) {
    var t = De(e);
    t !== null && t.tag === 5 && t.type === "form" ? Jh(t) : fi.r(e);
  }
  var Kl = typeof document > "u" ? null : document;
  function Nv(e, t, n) {
    var a = Kl;
    if (a && typeof t == "string" && t) {
      var o = at(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), Bv.has(o) || (Bv.add(o), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(o) === null && (t = a.createElement("link"), Rn(t, "link", e), ht(t), a.head.appendChild(t)));
    }
  }
  function ap(e) {
    fi.D(e), Nv("dns-prefetch", e, null);
  }
  function ip(e, t) {
    fi.C(e, t), Nv("preconnect", e, t);
  }
  function lp(e, t, n) {
    fi.L(e, t, n);
    var a = Kl;
    if (a && e && t) {
      var o = 'link[rel="preload"][as="' + at(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + at(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + at(n.imageSizes) + '"]')) : o += '[href="' + at(e) + '"]';
      var u = o;
      switch (t) {
        case "style":
          u = Jl(e);
          break;
        case "script":
          u = $l(e);
      }
      _a.has(u) || (e = y({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), _a.set(u, e), a.querySelector(o) !== null || t === "style" && a.querySelector(Ir(u)) || t === "script" && a.querySelector(Pr(u)) || (t = a.createElement("link"), Rn(t, "link", e), ht(t), a.head.appendChild(t)));
    }
  }
  function rp(e, t) {
    fi.m(e, t);
    var n = Kl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + at(a) + '"][href="' + at(e) + '"]', u = o;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = $l(e);
      }
      if (!_a.has(u) && (e = y({ rel: "modulepreload", href: e }, t), _a.set(u, e), n.querySelector(o) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Pr(u))) return;
        }
        a = n.createElement("link"), Rn(a, "link", e), ht(a), n.head.appendChild(a);
      }
    }
  }
  function op(e, t, n) {
    fi.S(e, t, n);
    var a = Kl;
    if (a && e) {
      var o = le(a).hoistableStyles, u = Jl(e);
      t = t || "default";
      var g = o.get(u);
      if (!g) {
        var _ = { loading: 0, preload: null };
        if (g = a.querySelector(Ir(u))) _.loading = 5;
        else {
          e = y({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = _a.get(u)) && zc(e, n);
          var R = g = a.createElement("link");
          ht(R), Rn(R, "link", e), R._p = new Promise(function(ee, ve) {
            R.onload = ee, R.onerror = ve;
          }), R.addEventListener("load", function() {
            _.loading |= 1;
          }), R.addEventListener("error", function() {
            _.loading |= 2;
          }), _.loading |= 4, ms(g, t, a);
        }
        g = { type: "stylesheet", instance: g, count: 1, state: _ }, o.set(u, g);
      }
    }
  }
  function sp(e, t) {
    fi.X(e, t);
    var n = Kl;
    if (n && e) {
      var a = le(n).hoistableScripts, o = $l(e), u = a.get(o);
      u || (u = n.querySelector(Pr(o)), u || (e = y({ src: e, async: true }, t), (t = _a.get(o)) && Rc(e, t), u = n.createElement("script"), ht(u), Rn(u, "link", e), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, a.set(o, u));
    }
  }
  function up(e, t) {
    fi.M(e, t);
    var n = Kl;
    if (n && e) {
      var a = le(n).hoistableScripts, o = $l(e), u = a.get(o);
      u || (u = n.querySelector(Pr(o)), u || (e = y({ src: e, async: true, type: "module" }, t), (t = _a.get(o)) && Rc(e, t), u = n.createElement("script"), ht(u), Rn(u, "link", e), n.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, a.set(o, u));
    }
  }
  function Gv(e, t, n, a) {
    var o = (o = ie.current) ? vs(o) : null;
    if (!o) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Jl(n.href), n = le(o).hoistableStyles, a = n.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Jl(n.href);
          var u = le(o).hoistableStyles, g = u.get(e);
          if (g || (o = o.ownerDocument || o, g = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, u.set(e, g), (u = o.querySelector(Ir(e))) && !u._p && (g.instance = u, g.state.loading = 5), _a.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, _a.set(e, n), u || cp(o, e, n, g.state))), t && a === null) throw Error(s(528, ""));
          return g;
        }
        if (t && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = $l(n), n = le(o).hoistableScripts, a = n.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Jl(e) {
    return 'href="' + at(e) + '"';
  }
  function Ir(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Hv(e) {
    return y({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function cp(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Rn(t, "link", n), ht(t), e.head.appendChild(t));
  }
  function $l(e) {
    return '[src="' + at(e) + '"]';
  }
  function Pr(e) {
    return "script[async]" + e;
  }
  function Fv(e, t, n) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = e.querySelector('style[data-href~="' + at(n.href) + '"]');
        if (a) return t.instance = a, ht(a), a;
        var o = y({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
        return a = (e.ownerDocument || e).createElement("style"), ht(a), Rn(a, "style", o), ms(a, n.precedence, e), t.instance = a;
      case "stylesheet":
        o = Jl(n.href);
        var u = e.querySelector(Ir(o));
        if (u) return t.state.loading |= 4, t.instance = u, ht(u), u;
        a = Hv(n), (o = _a.get(o)) && zc(a, o), u = (e.ownerDocument || e).createElement("link"), ht(u);
        var g = u;
        return g._p = new Promise(function(_, R) {
          g.onload = _, g.onerror = R;
        }), Rn(u, "link", a), t.state.loading |= 4, ms(u, n.precedence, e), t.instance = u;
      case "script":
        return u = $l(n.src), (o = e.querySelector(Pr(u))) ? (t.instance = o, ht(o), o) : (a = n, (o = _a.get(u)) && (a = y({}, n), Rc(a, o)), e = e.ownerDocument || e, o = e.createElement("script"), ht(o), Rn(o, "link", a), e.head.appendChild(o), t.instance = o);
      case "void":
        return null;
      default:
        throw Error(s(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, ms(a, n.precedence, e));
    return t.instance;
  }
  function ms(e, t, n) {
    for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = a.length ? a[a.length - 1] : null, u = o, g = 0; g < a.length; g++) {
      var _ = a[g];
      if (_.dataset.precedence === t) u = _;
      else if (u !== o) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function zc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Rc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ps = null;
  function jv(e, t, n) {
    if (ps === null) {
      var a = /* @__PURE__ */ new Map(), o = ps = /* @__PURE__ */ new Map();
      o.set(n, a);
    } else o = ps, a = o.get(n), a || (a = /* @__PURE__ */ new Map(), o.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var u = n[o];
      if (!(u[xe] || u[Pt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = u.getAttribute(t) || "";
        g = e + g;
        var _ = a.get(g);
        _ ? _.push(u) : a.set(g, [u]);
      }
    }
    return a;
  }
  function kv(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
  }
  function fp(e, t, n) {
    if (n === 1 || t.itemProp != null) return false;
    switch (e) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return true;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function Yv(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function hp(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = Jl(a.href), u = t.querySelector(Ir(o));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = gs.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, ht(u);
          return;
        }
        u = t.ownerDocument || t, a = Hv(a), (o = _a.get(o)) && zc(a, o), u = u.createElement("link"), ht(u);
        var g = u;
        g._p = new Promise(function(_, R) {
          g.onload = _, g.onerror = R;
        }), Rn(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = gs.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Lc = 0;
  function dp(e, t) {
    return e.stylesheets && e.count === 0 && bs(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && bs(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Lc === 0 && (Lc = 62500 * q1());
      var o = setTimeout(function() {
        if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && bs(e, e.stylesheets), e.unsuspend)) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, (e.imgBytes > Lc ? 50 : 800) + t);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(o);
      };
    } : null;
  }
  function gs() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) bs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ys = null;
  function bs(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ys = /* @__PURE__ */ new Map(), t.forEach(vp, e), ys = null, gs.call(e));
  }
  function vp(e, t) {
    if (!(t.state.loading & 4)) {
      var n = ys.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), ys.set(e, n);
        for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < o.length; u++) {
          var g = o[u];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (n.set(g.dataset.precedence, g), a = g);
        }
        a && n.set(null, a);
      }
      o = t.instance, g = o.getAttribute("data-precedence"), u = n.get(g) || a, u === a && n.set(null, o), n.set(g, o), this.count++, a = gs.bind(this), o.addEventListener("load", a), o.addEventListener("error", a), u ? u.parentNode.insertBefore(o, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Wr = { $$typeof: C, Provider: null, Consumer: null, _currentValue: Te, _currentValue2: Te, _threadCount: 0 };
  function mp(e, t, n, a, o, u, g, _, R) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Mt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mt(0), this.hiddenUpdates = Mt(null), this.identifierPrefix = a, this.onUncaughtError = o, this.onCaughtError = u, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = R, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Xv(e, t, n, a, o, u, g, _, R, ee, ve, Se) {
    return e = new mp(e, t, n, g, R, ee, ve, Se, _), t = 1, u === true && (t |= 24), u = ia(3, null, null, t), e.current = u, u.stateNode = e, t = du(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = { element: a, isDehydrated: n, cache: t }, gu(u), e;
  }
  function Vv(e) {
    return e ? (e = Cl, e) : Cl;
  }
  function Zv(e, t, n, a, o, u) {
    o = Vv(o), a.context === null ? a.context = o : a.pendingContext = o, a = Ei(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = wi(e, a, t), n !== null && (ea(n, e, t), Ur(n, e, t));
  }
  function Qv(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Bc(e, t) {
    Qv(e, t), (e = e.alternate) && Qv(e, t);
  }
  function qv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ji(e, 67108864);
      t !== null && ea(t, e, 67108864), Bc(e, 67108864);
    }
  }
  function Iv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ua();
      t = Qn(t);
      var n = Ji(e, t);
      n !== null && ea(n, e, t), Bc(e, t);
    }
  }
  var Ss = true;
  function pp(e, t, n, a) {
    var o = q.T;
    q.T = null;
    var u = he.p;
    try {
      he.p = 2, Nc(e, t, n, a);
    } finally {
      he.p = u, q.T = o;
    }
  }
  function gp(e, t, n, a) {
    var o = q.T;
    q.T = null;
    var u = he.p;
    try {
      he.p = 8, Nc(e, t, n, a);
    } finally {
      he.p = u, q.T = o;
    }
  }
  function Nc(e, t, n, a) {
    if (Ss) {
      var o = Gc(a);
      if (o === null) Ec(e, t, a, _s, n), Wv(e, a);
      else if (bp(o, e, t, n, a)) a.stopPropagation();
      else if (Wv(e, a), t & 4 && -1 < yp.indexOf(e)) {
        for (; o !== null; ) {
          var u = De(o);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var g = yt(u.pendingLanes);
                if (g !== 0) {
                  var _ = u;
                  for (_.pendingLanes |= 2, _.entangledLanes |= 2; g; ) {
                    var R = 1 << 31 - F(g);
                    _.entanglements[1] |= R, g &= ~R;
                  }
                  Fa(u), (Gt & 6) === 0 && (as = Le() + 500, Vr(0));
                }
              }
              break;
            case 31:
            case 13:
              _ = Ji(u, 2), _ !== null && ea(_, u, 2), ls(), Bc(u, 2);
          }
          if (u = Gc(a), u === null && Ec(e, t, a, _s, n), u === o) break;
          o = u;
        }
        o !== null && a.stopPropagation();
      } else Ec(e, t, a, null, n);
    }
  }
  function Gc(e) {
    return e = bl(e), Hc(e);
  }
  var _s = null;
  function Hc(e) {
    if (_s = null, e = Ue(e), e !== null) {
      var t = i(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return _s = e, null;
  }
  function Pv(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Be()) {
          case gt:
            return 2;
          case He:
            return 8;
          case Qe:
          case $e:
            return 32;
          case ct:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fc = false, Li = null, Bi = null, Ni = null, Kr = /* @__PURE__ */ new Map(), Jr = /* @__PURE__ */ new Map(), Gi = [], yp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Wv(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Li = null;
        break;
      case "dragenter":
      case "dragleave":
        Bi = null;
        break;
      case "mouseover":
      case "mouseout":
        Ni = null;
        break;
      case "pointerover":
      case "pointerout":
        Kr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jr.delete(t.pointerId);
    }
  }
  function $r(e, t, n, a, o, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: u, targetContainers: [o] }, t !== null && (t = De(t), t !== null && qv(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function bp(e, t, n, a, o) {
    switch (t) {
      case "focusin":
        return Li = $r(Li, e, t, n, a, o), true;
      case "dragenter":
        return Bi = $r(Bi, e, t, n, a, o), true;
      case "mouseover":
        return Ni = $r(Ni, e, t, n, a, o), true;
      case "pointerover":
        var u = o.pointerId;
        return Kr.set(u, $r(Kr.get(u) || null, e, t, n, a, o)), true;
      case "gotpointercapture":
        return u = o.pointerId, Jr.set(u, $r(Jr.get(u) || null, e, t, n, a, o)), true;
    }
    return false;
  }
  function Kv(e) {
    var t = Ue(e.target);
    if (t !== null) {
      var n = i(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = h(n), t !== null) {
            e.blockedOn = t, ft(e.priority, function() {
              Iv(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = f(n), t !== null) {
            e.blockedOn = t, ft(e.priority, function() {
              Iv(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Es(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Gc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        Za = a, n.target.dispatchEvent(a), Za = null;
      } else return t = De(n), t !== null && qv(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function Jv(e, t, n) {
    Es(e) && n.delete(t);
  }
  function Sp() {
    Fc = false, Li !== null && Es(Li) && (Li = null), Bi !== null && Es(Bi) && (Bi = null), Ni !== null && Es(Ni) && (Ni = null), Kr.forEach(Jv), Jr.forEach(Jv);
  }
  function ws(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fc || (Fc = true, p.unstable_scheduleCallback(p.unstable_NormalPriority, Sp)));
  }
  var xs = null;
  function $v(e) {
    xs !== e && (xs = e, p.unstable_scheduleCallback(p.unstable_NormalPriority, function() {
      xs === e && (xs = null);
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t], a = e[t + 1], o = e[t + 2];
        if (typeof a != "function") {
          if (Hc(a || n) === null) continue;
          break;
        }
        var u = De(n);
        u !== null && (e.splice(t, 3), t -= 3, Gu(u, { pending: true, data: o, method: n.method, action: a }, a, o));
      }
    }));
  }
  function er(e) {
    function t(R) {
      return ws(R, e);
    }
    Li !== null && ws(Li, e), Bi !== null && ws(Bi, e), Ni !== null && ws(Ni, e), Kr.forEach(t), Jr.forEach(t);
    for (var n = 0; n < Gi.length; n++) {
      var a = Gi[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Gi.length && (n = Gi[0], n.blockedOn === null); ) Kv(n), n.blockedOn === null && Gi.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (a = 0; a < n.length; a += 3) {
      var o = n[a], u = n[a + 1], g = o[b] || null;
      if (typeof u == "function") g || $v(n);
      else if (g) {
        var _ = null;
        if (u && u.hasAttribute("formAction")) {
          if (o = u, g = u[b] || null) _ = g.formAction;
          else if (Hc(o) !== null) continue;
        } else _ = g.action;
        typeof _ == "function" ? n[a + 1] = _ : (n.splice(a, 3), a -= 3), $v(n);
      }
    }
  }
  function em() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({ handler: function() {
        return new Promise(function(g) {
          return o = g;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      o !== null && (o(), o = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, { state: u.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, o = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        a = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function jc(e) {
    this._internalRoot = e;
  }
  Ms.prototype.render = jc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, a = ua();
    Zv(n, a, e, t, null, null);
  }, Ms.prototype.unmount = jc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Zv(e.current, 2, null, e, null, null), ls(), t[w] = null;
    }
  };
  function Ms(e) {
    this._internalRoot = e;
  }
  Ms.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = jn();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Gi.length && t !== 0 && t < Gi[n].priority; n++) ;
      Gi.splice(n, 0, e), n === 0 && Kv(e);
    }
  };
  var tm = l.version;
  if (tm !== "19.2.4") throw Error(s(527, tm, "19.2.4"));
  he.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = d(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var _p = { bundleType: 0, version: "19.2.4", rendererPackageName: "react-dom", currentDispatcherRef: q, reconcilerVersion: "19.2.4" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ts = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ts.isDisabled && Ts.supportsFiber) try {
      ot = Ts.inject(_p), ke = Ts;
    } catch {
    }
  }
  return eo.createRoot = function(e, t) {
    if (!r(e)) throw Error(s(299));
    var n = false, a = "", o = sd, u = ud, g = cd;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError)), t = Xv(e, 1, false, null, null, n, a, null, o, u, g, em), e[w] = t.current, _c(e), new jc(t);
  }, eo.hydrateRoot = function(e, t, n) {
    if (!r(e)) throw Error(s(299));
    var a = false, o = "", u = sd, g = ud, _ = cd, R = null;
    return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (_ = n.onRecoverableError), n.formState !== void 0 && (R = n.formState)), t = Xv(e, 1, true, t, n ?? null, a, o, R, u, g, _, em), t.context = Vv(null), n = t.current, a = ua(), a = Qn(a), o = Ei(a), o.callback = null, wi(n, o, a), n = a, t.current.lanes = n, Yt(t, n), Fa(t), e[w] = t.current, _c(e), new Ms(t);
  }, eo.version = "19.2.4", eo;
}
var sm;
function hg() {
  if (sm) return kc.exports;
  sm = 1;
  function p() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
    } catch (l) {
      console.error(l);
    }
  }
  return p(), kc.exports = fg(), kc.exports;
}
var dg = hg();
const vg = (p) => p;
function mg(p, l = vg) {
  const v = di.useSyncExternalStore(p.subscribe, di.useCallback(() => l(p.getState()), [p, l]), di.useCallback(() => l(p.getInitialState()), [p, l]));
  return di.useDebugValue(v), v;
}
const um = (p) => {
  const l = xp(p), v = (s) => mg(l, s);
  return Object.assign(v, l), v;
}, P2 = ((p) => p ? um(p) : um);
function pg(p, l) {
  let v;
  try {
    v = p();
  } catch {
    return;
  }
  return { getItem: (r) => {
    var i;
    const h = (c) => c === null ? null : JSON.parse(c, void 0), f = (i = v.getItem(r)) != null ? i : null;
    return f instanceof Promise ? f.then(h) : h(f);
  }, setItem: (r, i) => v.setItem(r, JSON.stringify(i, void 0)), removeItem: (r) => v.removeItem(r) };
}
const rf = (p) => (l) => {
  try {
    const v = p(l);
    return v instanceof Promise ? v : { then(s) {
      return rf(s)(v);
    }, catch(s) {
      return this;
    } };
  } catch (v) {
    return { then(s) {
      return this;
    }, catch(s) {
      return rf(s)(v);
    } };
  }
}, gg = (p, l) => (v, s, r) => {
  let i = { storage: pg(() => window.localStorage), partialize: (x) => x, version: 0, merge: (x, Q) => ({ ...Q, ...x }), ...l }, h = false, f = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let m = i.storage;
  if (!m) return p((...x) => {
    console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), v(...x);
  }, s, r);
  const y = () => {
    const x = i.partialize({ ...s() });
    return m.setItem(i.name, { state: x, version: i.version });
  }, S = r.setState;
  r.setState = (x, Q) => (S(x, Q), y());
  const E = p((...x) => (v(...x), y()), s, r);
  r.getInitialState = () => E;
  let A;
  const U = () => {
    var x, Q;
    if (!m) return;
    const N = ++f;
    h = false, c.forEach((z) => {
      var O;
      return z((O = s()) != null ? O : E);
    });
    const C = ((Q = i.onRehydrateStorage) == null ? void 0 : Q.call(i, (x = s()) != null ? x : E)) || void 0;
    return rf(m.getItem.bind(m))(i.name).then((z) => {
      if (z) if (typeof z.version == "number" && z.version !== i.version) {
        if (i.migrate) {
          const O = i.migrate(z.state, z.version);
          return O instanceof Promise ? O.then((L) => [true, L]) : [true, O];
        }
        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
      } else return [false, z.state];
      return [false, void 0];
    }).then((z) => {
      var O;
      if (N !== f) return;
      const [L, H] = z;
      if (A = i.merge(H, (O = s()) != null ? O : E), v(A, true), L) return y();
    }).then(() => {
      N === f && (C == null ? void 0 : C(A, void 0), A = s(), h = true, d.forEach((z) => z(A)));
    }).catch((z) => {
      N === f && (C == null ? void 0 : C(void 0, z));
    });
  };
  return r.persist = { setOptions: (x) => {
    i = { ...i, ...x }, x.storage && (m = x.storage);
  }, clearStorage: () => {
    m == null ? void 0 : m.removeItem(i.name);
  }, getOptions: () => i, rehydrate: () => U(), hasHydrated: () => h, onHydrate: (x) => (c.add(x), () => {
    c.delete(x);
  }), onFinishHydration: (x) => (d.add(x), () => {
    d.delete(x);
  }) }, i.skipHydration || U(), A || E;
}, W2 = gg;
var yg = Object.defineProperty, bg = (p, l, v) => l in p ? yg(p, l, { enumerable: true, configurable: true, writable: true, value: v }) : p[l] = v, Ft = (p, l, v) => (bg(p, typeof l != "symbol" ? l + "" : l, v), v);
function Xc(p, l, v, s, r) {
  let i;
  if (p = p.subarray || p.slice ? p : p.buffer, v = v.subarray || v.slice ? v : v.buffer, p = l ? p.subarray ? p.subarray(l, r && l + r) : p.slice(l, r && l + r) : p, v.set) v.set(p, s);
  else for (i = 0; i < p.length; i++) v[i + s] = p[i];
  return v;
}
function Sg(p) {
  return p instanceof Float32Array ? p : p instanceof lo ? p.getAttribute("position").array : p.map((l) => {
    const v = Array.isArray(l);
    return l instanceof Ae ? [l.x, l.y, l.z] : l instanceof fn ? [l.x, l.y, 0] : v && l.length === 3 ? [l[0], l[1], l[2]] : v && l.length === 2 ? [l[0], l[1], 0] : l;
  }).flat();
}
class K2 extends lo {
  constructor() {
    super(), Ft(this, "type", "MeshLine"), Ft(this, "isMeshLine", true), Ft(this, "positions", []), Ft(this, "previous", []), Ft(this, "next", []), Ft(this, "side", []), Ft(this, "width", []), Ft(this, "indices_array", []), Ft(this, "uvs", []), Ft(this, "counters", []), Ft(this, "widthCallback", null), Ft(this, "_attributes"), Ft(this, "_points", []), Ft(this, "points"), Ft(this, "matrixWorld", new fr()), Object.defineProperties(this, { points: { enumerable: true, get() {
      return this._points;
    }, set(l) {
      this.setPoints(l, this.widthCallback);
    } } });
  }
  setMatrixWorld(l) {
    this.matrixWorld = l;
  }
  setPoints(l, v) {
    if (l = Sg(l), this._points = l, this.widthCallback = v ?? null, this.positions = [], this.counters = [], l.length && l[0] instanceof Ae) for (let s = 0; s < l.length; s++) {
      const r = l[s], i = s / (l.length - 1);
      this.positions.push(r.x, r.y, r.z), this.positions.push(r.x, r.y, r.z), this.counters.push(i), this.counters.push(i);
    }
    else for (let s = 0; s < l.length; s += 3) {
      const r = s / (l.length - 1);
      this.positions.push(l[s], l[s + 1], l[s + 2]), this.positions.push(l[s], l[s + 1], l[s + 2]), this.counters.push(r), this.counters.push(r);
    }
    this.process();
  }
  compareV3(l, v) {
    const s = l * 6, r = v * 6;
    return this.positions[s] === this.positions[r] && this.positions[s + 1] === this.positions[r + 1] && this.positions[s + 2] === this.positions[r + 2];
  }
  copyV3(l) {
    const v = l * 6;
    return [this.positions[v], this.positions[v + 1], this.positions[v + 2]];
  }
  process() {
    const l = this.positions.length / 6;
    this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [];
    let v, s;
    this.compareV3(0, l - 1) ? s = this.copyV3(l - 2) : s = this.copyV3(0), this.previous.push(s[0], s[1], s[2]), this.previous.push(s[0], s[1], s[2]);
    for (let r = 0; r < l; r++) {
      if (this.side.push(1), this.side.push(-1), this.widthCallback ? v = this.widthCallback(r / (l - 1)) : v = 1, this.width.push(v), this.width.push(v), this.uvs.push(r / (l - 1), 0), this.uvs.push(r / (l - 1), 1), r < l - 1) {
        s = this.copyV3(r), this.previous.push(s[0], s[1], s[2]), this.previous.push(s[0], s[1], s[2]);
        const i = r * 2;
        this.indices_array.push(i, i + 1, i + 2), this.indices_array.push(i + 2, i + 1, i + 3);
      }
      r > 0 && (s = this.copyV3(r), this.next.push(s[0], s[1], s[2]), this.next.push(s[0], s[1], s[2]));
    }
    this.compareV3(l - 1, 0) ? s = this.copyV3(1) : s = this.copyV3(l - 1), this.next.push(s[0], s[1], s[2]), this.next.push(s[0], s[1], s[2]), !this._attributes || this._attributes.position.count !== this.counters.length ? this._attributes = { position: new hi(new Float32Array(this.positions), 3), previous: new hi(new Float32Array(this.previous), 3), next: new hi(new Float32Array(this.next), 3), side: new hi(new Float32Array(this.side), 1), width: new hi(new Float32Array(this.width), 1), uv: new hi(new Float32Array(this.uvs), 2), index: new hi(new Uint16Array(this.indices_array), 1), counters: new hi(new Float32Array(this.counters), 1) } : (this._attributes.position.copyArray(new Float32Array(this.positions)), this._attributes.position.needsUpdate = true, this._attributes.previous.copyArray(new Float32Array(this.previous)), this._attributes.previous.needsUpdate = true, this._attributes.next.copyArray(new Float32Array(this.next)), this._attributes.next.needsUpdate = true, this._attributes.side.copyArray(new Float32Array(this.side)), this._attributes.side.needsUpdate = true, this._attributes.width.copyArray(new Float32Array(this.width)), this._attributes.width.needsUpdate = true, this._attributes.uv.copyArray(new Float32Array(this.uvs)), this._attributes.uv.needsUpdate = true, this._attributes.index.copyArray(new Uint16Array(this.indices_array)), this._attributes.index.needsUpdate = true), this.setAttribute("position", this._attributes.position), this.setAttribute("previous", this._attributes.previous), this.setAttribute("next", this._attributes.next), this.setAttribute("side", this._attributes.side), this.setAttribute("width", this._attributes.width), this.setAttribute("uv", this._attributes.uv), this.setAttribute("counters", this._attributes.counters), this.setAttribute("position", this._attributes.position), this.setAttribute("previous", this._attributes.previous), this.setAttribute("next", this._attributes.next), this.setAttribute("side", this._attributes.side), this.setAttribute("width", this._attributes.width), this.setAttribute("uv", this._attributes.uv), this.setAttribute("counters", this._attributes.counters), this.setIndex(this._attributes.index), this.computeBoundingSphere(), this.computeBoundingBox();
  }
  advance({ x: l, y: v, z: s }) {
    const r = this._attributes.position.array, i = this._attributes.previous.array, h = this._attributes.next.array, f = r.length;
    Xc(r, 0, i, 0, f), Xc(r, 6, r, 0, f - 6), r[f - 6] = l, r[f - 5] = v, r[f - 4] = s, r[f - 3] = l, r[f - 2] = v, r[f - 1] = s, Xc(r, 6, h, 0, f - 6), h[f - 6] = l, h[f - 5] = v, h[f - 4] = s, h[f - 3] = l, h[f - 2] = v, h[f - 1] = s, this._attributes.position.needsUpdate = true, this._attributes.previous.needsUpdate = true, this._attributes.next.needsUpdate = true;
  }
}
const _g = `
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <fog_pars_vertex>
  #include <clipping_planes_pars_vertex>

  attribute vec3 previous;
  attribute vec3 next;
  attribute float side;
  attribute float width;
  attribute float counters;
  
  uniform vec2 resolution;
  uniform float lineWidth;
  uniform vec3 color;
  uniform float opacity;
  uniform float sizeAttenuation;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
  }
  
  void main() {
    float aspect = resolution.x / resolution.y;
    vColor = vec4(color, opacity);
    vUV = uv;
    vCounters = counters;
  
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(position, 1.0) * aspect;
    vec4 prevPos = m * vec4(previous, 1.0);
    vec4 nextPos = m * vec4(next, 1.0);
  
    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(prevPos, aspect);
    vec2 nextP = fix(nextPos, aspect);
  
    float w = lineWidth * width;
  
    vec2 dir;
    if (nextP == currentP) dir = normalize(currentP - prevP);
    else if (prevP == currentP) dir = normalize(nextP - currentP);
    else {
      vec2 dir1 = normalize(currentP - prevP);
      vec2 dir2 = normalize(nextP - currentP);
      dir = normalize(dir1 + dir2);
  
      vec2 perp = vec2(-dir1.y, dir1.x);
      vec2 miter = vec2(-dir.y, dir.x);
      //w = clamp(w / dot(miter, perp), 0., 4. * lineWidth * width);
    }
  
    //vec2 normal = (cross(vec3(dir, 0.), vec3(0., 0., 1.))).xy;
    vec4 normal = vec4(-dir.y, dir.x, 0., 1.);
    normal.xy *= .5 * w;
    //normal *= projectionMatrix;
    if (sizeAttenuation == 0.) {
      normal.xy *= finalPosition.w;
      normal.xy /= (vec4(resolution, 0., 1.) * projectionMatrix).xy * aspect;
    }
  
    finalPosition.xy += normal.xy * side;
    gl_Position = finalPosition;
    #include <logdepthbuf_vertex>
    #include <fog_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    #include <clipping_planes_vertex>
    #include <fog_vertex>
  }
`, Eg = parseInt(mf.replace(/\D+/g, "")), wg = Eg >= 154 ? "colorspace_fragment" : "encodings_fragment", xg = `
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  
  uniform sampler2D map;
  uniform sampler2D alphaMap;
  uniform float useGradient;
  uniform float useMap;
  uniform float useAlphaMap;
  uniform float useDash;
  uniform float dashArray;
  uniform float dashOffset;
  uniform float dashRatio;
  uniform float visibility;
  uniform float alphaTest;
  uniform vec2 repeat;
  uniform vec3 gradient[2];
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  void main() {
    #include <logdepthbuf_fragment>
    vec4 diffuseColor = vColor;
    if (useGradient == 1.) diffuseColor = vec4(mix(gradient[0], gradient[1], vCounters), 1.0);
    if (useMap == 1.) diffuseColor *= texture2D(map, vUV * repeat);
    if (useAlphaMap == 1.) diffuseColor.a *= texture2D(alphaMap, vUV * repeat).a;
    if (diffuseColor.a < alphaTest) discard;
    if (useDash == 1.) diffuseColor.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
    diffuseColor.a *= step(vCounters, visibility);
    #include <clipping_planes_fragment>
    gl_FragColor = diffuseColor;     
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <${wg}>
  }
`;
class J2 extends Yi {
  constructor(l) {
    super({ uniforms: { ...tf.fog, lineWidth: { value: 1 }, map: { value: null }, useMap: { value: 0 }, alphaMap: { value: null }, useAlphaMap: { value: 0 }, color: { value: new Zn(16777215) }, gradient: { value: [new Zn(16711680), new Zn(65280)] }, opacity: { value: 1 }, resolution: { value: new fn(1, 1) }, sizeAttenuation: { value: 1 }, dashArray: { value: 0 }, dashOffset: { value: 0 }, dashRatio: { value: 0.5 }, useDash: { value: 0 }, useGradient: { value: 0 }, visibility: { value: 1 }, alphaTest: { value: 0 }, repeat: { value: new fn(1, 1) } }, vertexShader: _g, fragmentShader: xg }), Ft(this, "lineWidth"), Ft(this, "map"), Ft(this, "useMap"), Ft(this, "alphaMap"), Ft(this, "useAlphaMap"), Ft(this, "color"), Ft(this, "gradient"), Ft(this, "resolution"), Ft(this, "sizeAttenuation"), Ft(this, "dashArray"), Ft(this, "dashOffset"), Ft(this, "dashRatio"), Ft(this, "useDash"), Ft(this, "useGradient"), Ft(this, "visibility"), Ft(this, "repeat"), this.type = "MeshLineMaterial", Object.defineProperties(this, { lineWidth: { enumerable: true, get() {
      return this.uniforms.lineWidth.value;
    }, set(v) {
      this.uniforms.lineWidth.value = v;
    } }, map: { enumerable: true, get() {
      return this.uniforms.map.value;
    }, set(v) {
      this.uniforms.map.value = v;
    } }, useMap: { enumerable: true, get() {
      return this.uniforms.useMap.value;
    }, set(v) {
      this.uniforms.useMap.value = v;
    } }, alphaMap: { enumerable: true, get() {
      return this.uniforms.alphaMap.value;
    }, set(v) {
      this.uniforms.alphaMap.value = v;
    } }, useAlphaMap: { enumerable: true, get() {
      return this.uniforms.useAlphaMap.value;
    }, set(v) {
      this.uniforms.useAlphaMap.value = v;
    } }, color: { enumerable: true, get() {
      return this.uniforms.color.value;
    }, set(v) {
      this.uniforms.color.value = v;
    } }, gradient: { enumerable: true, get() {
      return this.uniforms.gradient.value;
    }, set(v) {
      this.uniforms.gradient.value = v;
    } }, opacity: { enumerable: true, get() {
      return this.uniforms.opacity.value;
    }, set(v) {
      this.uniforms.opacity.value = v;
    } }, resolution: { enumerable: true, get() {
      return this.uniforms.resolution.value;
    }, set(v) {
      this.uniforms.resolution.value.copy(v);
    } }, sizeAttenuation: { enumerable: true, get() {
      return this.uniforms.sizeAttenuation.value;
    }, set(v) {
      this.uniforms.sizeAttenuation.value = v;
    } }, dashArray: { enumerable: true, get() {
      return this.uniforms.dashArray.value;
    }, set(v) {
      this.uniforms.dashArray.value = v, this.useDash = v !== 0 ? 1 : 0;
    } }, dashOffset: { enumerable: true, get() {
      return this.uniforms.dashOffset.value;
    }, set(v) {
      this.uniforms.dashOffset.value = v;
    } }, dashRatio: { enumerable: true, get() {
      return this.uniforms.dashRatio.value;
    }, set(v) {
      this.uniforms.dashRatio.value = v;
    } }, useDash: { enumerable: true, get() {
      return this.uniforms.useDash.value;
    }, set(v) {
      this.uniforms.useDash.value = v;
    } }, useGradient: { enumerable: true, get() {
      return this.uniforms.useGradient.value;
    }, set(v) {
      this.uniforms.useGradient.value = v;
    } }, visibility: { enumerable: true, get() {
      return this.uniforms.visibility.value;
    }, set(v) {
      this.uniforms.visibility.value = v;
    } }, alphaTest: { enumerable: true, get() {
      return this.uniforms.alphaTest.value;
    }, set(v) {
      this.uniforms.alphaTest.value = v;
    } }, repeat: { enumerable: true, get() {
      return this.uniforms.repeat.value;
    }, set(v) {
      this.uniforms.repeat.value.copy(v);
    } } }), this.setValues(l);
  }
  copy(l) {
    return super.copy(l), this.lineWidth = l.lineWidth, this.map = l.map, this.useMap = l.useMap, this.alphaMap = l.alphaMap, this.useAlphaMap = l.useAlphaMap, this.color.copy(l.color), this.gradient = l.gradient, this.opacity = l.opacity, this.resolution.copy(l.resolution), this.sizeAttenuation = l.sizeAttenuation, this.dashArray = l.dashArray, this.dashOffset = l.dashOffset, this.dashRatio = l.dashRatio, this.useDash = l.useDash, this.useGradient = l.useGradient, this.visibility = l.visibility, this.alphaTest = l.alphaTest, this.repeat.copy(l.repeat), this;
  }
}
const Mg = {}, cm = (p) => {
  let l;
  const v = /* @__PURE__ */ new Set(), s = (m, y) => {
    const S = typeof m == "function" ? m(l) : m;
    if (!Object.is(S, l)) {
      const E = l;
      l = y ?? (typeof S != "object" || S === null) ? S : Object.assign({}, l, S), v.forEach((A) => A(l, E));
    }
  }, r = () => l, c = { setState: s, getState: r, getInitialState: () => d, subscribe: (m) => (v.add(m), () => v.delete(m)), destroy: () => {
    (Mg ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), v.clear();
  } }, d = l = p(s, r, c);
  return c;
}, Tg = (p) => p ? cm(p) : cm, Jm = {}, { useDebugValue: Ag } = di, { useSyncExternalStoreWithSelector: Ug } = Mp;
let fm = false;
const Dg = (p) => p;
function Cg(p, l = Dg, v) {
  (Jm ? "production" : void 0) !== "production" && v && !fm && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), fm = true);
  const s = Ug(p.subscribe, p.getState, p.getServerState || p.getInitialState, l, v);
  return Ag(s), s;
}
const hm = (p) => {
  (Jm ? "production" : void 0) !== "production" && typeof p != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
  const l = typeof p == "function" ? Tg(p) : p, v = (s, r) => Cg(l, s, r);
  return Object.assign(v, l), v;
}, Og = (p) => p ? hm(p) : hm;
var dm, vm;
const mm = typeof window < "u" && ((dm = window.document) != null && dm.createElement || ((vm = window.navigator) == null ? void 0 : vm.product) === "ReactNative") ? di.useLayoutEffect : di.useEffect;
function $2() {
  const p = Og((l) => ({ current: new Array(), version: 0, set: l }));
  return { In: ({ children: l }) => {
    const v = p((r) => r.set), s = p((r) => r.version);
    return mm(() => {
      v((r) => ({ version: r.version + 1 }));
    }, []), mm(() => (v(({ current: r }) => ({ current: [...r, l] })), () => v(({ current: r }) => ({ current: r.filter((i) => i !== l) }))), [l, s]), null;
  }, Out: () => {
    const l = p((v) => v.current);
    return di.createElement(di.Fragment, null, l);
  } };
}
function Jt() {
  return Jt = Object.assign ? Object.assign.bind() : function(p) {
    for (var l = 1; l < arguments.length; l++) {
      var v = arguments[l];
      for (var s in v) ({}).hasOwnProperty.call(v, s) && (p[s] = v[s]);
    }
    return p;
  }, Jt.apply(null, arguments);
}
const go = new Ae(), yf = new Ae(), zg = new Ae(), pm = new fn();
function Rg(p, l, v) {
  const s = go.setFromMatrixPosition(p.matrixWorld);
  s.project(l);
  const r = v.width / 2, i = v.height / 2;
  return [s.x * r + r, -(s.y * i) + i];
}
function Lg(p, l) {
  const v = go.setFromMatrixPosition(p.matrixWorld), s = yf.setFromMatrixPosition(l.matrixWorld), r = v.sub(s), i = l.getWorldDirection(zg);
  return r.angleTo(i) > Math.PI / 2;
}
function Bg(p, l, v, s) {
  const r = go.setFromMatrixPosition(p.matrixWorld), i = r.clone();
  i.project(l), pm.set(i.x, i.y), v.setFromCamera(pm, l);
  const h = v.intersectObjects(s, true);
  if (h.length) {
    const f = h[0].distance;
    return r.distanceTo(v.ray.origin) < f;
  }
  return true;
}
function Ng(p, l) {
  if (l instanceof sr) return l.zoom;
  if (l instanceof ro) {
    const v = go.setFromMatrixPosition(p.matrixWorld), s = yf.setFromMatrixPosition(l.matrixWorld), r = l.fov * Math.PI / 180, i = v.distanceTo(s);
    return 1 / (2 * Math.tan(r / 2) * i);
  } else return 1;
}
function Gg(p, l, v) {
  if (l instanceof ro || l instanceof sr) {
    const s = go.setFromMatrixPosition(p.matrixWorld), r = yf.setFromMatrixPosition(l.matrixWorld), i = s.distanceTo(r), h = (v[1] - v[0]) / (l.far - l.near), f = v[1] - h * l.far;
    return Math.round(h * i + f);
  }
}
const of = (p) => Math.abs(p) < 1e-10 ? 0 : p;
function $m(p, l, v = "") {
  let s = "matrix3d(";
  for (let r = 0; r !== 16; r++) s += of(l[r] * p.elements[r]) + (r !== 15 ? "," : ")");
  return v + s;
}
const Hg = /* @__PURE__ */ ((p) => (l) => $m(l, p))([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]), Fg = /* @__PURE__ */ ((p) => (l, v) => $m(l, p(v), "translate(-50%,-50%)"))((p) => [1 / p, 1 / p, 1 / p, 1, -1 / p, -1 / p, -1 / p, -1, 1 / p, 1 / p, 1 / p, 1, 1, 1, 1, 1]);
function jg(p) {
  return p && typeof p == "object" && "current" in p;
}
const eb = k.forwardRef(({ children: p, eps: l = 1e-3, style: v, className: s, prepend: r, center: i, fullscreen: h, portal: f, distanceFactor: c, sprite: d = false, transform: m = false, occlude: y, onOcclude: S, castShadow: E, receiveShadow: A, material: U, geometry: x, zIndexRange: Q = [16777271, 0], calculatePosition: N = Rg, as: C = "div", wrapperClass: z, pointerEvents: O = "auto", ...L }, H) => {
  const { gl: D, camera: Y, scene: I, size: me, raycaster: j, events: J, viewport: Z } = Et(), [te] = k.useState(() => document.createElement(C)), q = k.useRef(null), he = k.useRef(null), Te = k.useRef(0), re = k.useRef([0, 0]), W = k.useRef(null), T = k.useRef(null), B = (f == null ? void 0 : f.current) || J.connected || D.domElement.parentNode, V = k.useRef(null), M = k.useRef(false), K = k.useMemo(() => y && y !== "blending" || Array.isArray(y) && y.length && jg(y[0]), [y]);
  k.useLayoutEffect(() => {
    const ze = D.domElement;
    y && y === "blending" ? (ze.style.zIndex = `${Math.floor(Q[0] / 2)}`, ze.style.position = "absolute", ze.style.pointerEvents = "none") : (ze.style.zIndex = null, ze.style.position = null, ze.style.pointerEvents = null);
  }, [y]), k.useLayoutEffect(() => {
    if (he.current) {
      const ze = q.current = dg.createRoot(te);
      if (I.updateMatrixWorld(), m) te.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
      else {
        const be = N(he.current, Y, me);
        te.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${be[0]}px,${be[1]}px,0);transform-origin:0 0;`;
      }
      return B && (r ? B.prepend(te) : B.appendChild(te)), () => {
        B && B.removeChild(te), ze.unmount();
      };
    }
  }, [B, m]), k.useLayoutEffect(() => {
    z && (te.className = z);
  }, [z]);
  const ie = k.useMemo(() => m ? { position: "absolute", top: 0, left: 0, width: me.width, height: me.height, transformStyle: "preserve-3d", pointerEvents: "none" } : { position: "absolute", transform: i ? "translate3d(-50%,-50%,0)" : "none", ...h && { top: -me.height / 2, left: -me.width / 2, width: me.width, height: me.height }, ...v }, [v, i, h, me, m]), se = k.useMemo(() => ({ position: "absolute", pointerEvents: O }), [O]);
  k.useLayoutEffect(() => {
    if (M.current = false, m) {
      var ze;
      (ze = q.current) == null || ze.render(k.createElement("div", { ref: W, style: ie }, k.createElement("div", { ref: T, style: se }, k.createElement("div", { ref: H, className: s, style: v, children: p }))));
    } else {
      var be;
      (be = q.current) == null || be.render(k.createElement("div", { ref: H, style: ie, className: s, children: p }));
    }
  });
  const pe = k.useRef(true);
  Vi((ze) => {
    if (he.current) {
      Y.updateMatrixWorld(), he.current.updateWorldMatrix(true, false);
      const be = m ? re.current : N(he.current, Y, me);
      if (m || Math.abs(Te.current - Y.zoom) > l || Math.abs(re.current[0] - be[0]) > l || Math.abs(re.current[1] - be[1]) > l) {
        const Ee = Lg(he.current, Y);
        let Je = false;
        K && (Array.isArray(y) ? Je = y.map((Ze) => Ze.current) : y !== "blending" && (Je = [I]));
        const Ye = pe.current;
        if (Je) {
          const Ze = Bg(he.current, Y, j, Je);
          pe.current = Ze && !Ee;
        } else pe.current = !Ee;
        Ye !== pe.current && (S ? S(!pe.current) : te.style.display = pe.current ? "block" : "none");
        const Ne = Math.floor(Q[0] / 2), Ve = y ? K ? [Q[0], Ne] : [Ne - 1, 0] : Q;
        if (te.style.zIndex = `${Gg(he.current, Y, Ve)}`, m) {
          const [Ze, Me] = [me.width / 2, me.height / 2], Fe = Y.projectionMatrix.elements[5] * Me, { isOrthographicCamera: je, top: _e, left: rt, bottom: Ge, right: Le } = Y, Be = Hg(Y.matrixWorldInverse), gt = je ? `scale(${Fe})translate(${of(-(Le + rt) / 2)}px,${of((_e + Ge) / 2)}px)` : `translateZ(${Fe}px)`;
          let He = he.current.matrixWorld;
          d && (He = Y.matrixWorldInverse.clone().transpose().copyPosition(He).scale(he.current.scale), He.elements[3] = He.elements[7] = He.elements[11] = 0, He.elements[15] = 1), te.style.width = me.width + "px", te.style.height = me.height + "px", te.style.perspective = je ? "" : `${Fe}px`, W.current && T.current && (W.current.style.transform = `${gt}${Be}translate(${Ze}px,${Me}px)`, T.current.style.transform = Fg(He, 1 / ((c || 10) / 400)));
        } else {
          const Ze = c === void 0 ? 1 : Ng(he.current, Y) * c;
          te.style.transform = `translate3d(${be[0]}px,${be[1]}px,0) scale(${Ze})`;
        }
        re.current = be, Te.current = Y.zoom;
      }
    }
    if (!K && V.current && !M.current) if (m) {
      if (W.current) {
        const be = W.current.children[0];
        if (be != null && be.clientWidth && be != null && be.clientHeight) {
          const { isOrthographicCamera: Ee } = Y;
          if (Ee || x) L.scale && (Array.isArray(L.scale) ? L.scale instanceof Ae ? V.current.scale.copy(L.scale.clone().divideScalar(1)) : V.current.scale.set(1 / L.scale[0], 1 / L.scale[1], 1 / L.scale[2]) : V.current.scale.setScalar(1 / L.scale));
          else {
            const Je = (c || 10) / 400, Ye = be.clientWidth * Je, Ne = be.clientHeight * Je;
            V.current.scale.set(Ye, Ne, 1);
          }
          M.current = true;
        }
      }
    } else {
      const be = te.children[0];
      if (be != null && be.clientWidth && be != null && be.clientHeight) {
        const Ee = 1 / Z.factor, Je = be.clientWidth * Ee, Ye = be.clientHeight * Ee;
        V.current.scale.set(Je, Ye, 1), M.current = true;
      }
      V.current.lookAt(ze.camera.position);
    }
  });
  const Oe = k.useMemo(() => ({ vertexShader: m ? void 0 : `
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `, fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      ` }), [m]);
  return k.createElement("group", Jt({}, L, { ref: he }), y && !K && k.createElement("mesh", { castShadow: E, receiveShadow: A, ref: V }, x || k.createElement("planeGeometry", null), U || k.createElement("shaderMaterial", { side: hr, vertexShader: Oe.vertexShader, fragmentShader: Oe.fragmentShader })));
}), Xs = parseInt(mf.replace(/\D+/g, "")), e0 = Xs >= 125 ? "uv1" : "uv2";
function kg(p, l = Math.PI / 3) {
  const v = Math.cos(l), s = (1 + 1e-10) * 100, r = [new Ae(), new Ae(), new Ae()], i = new Ae(), h = new Ae(), f = new Ae(), c = new Ae();
  function d(U) {
    const x = ~~(U.x * s), Q = ~~(U.y * s), N = ~~(U.z * s);
    return `${x},${Q},${N}`;
  }
  const m = p.index ? p.toNonIndexed() : p, y = m.attributes.position, S = {};
  for (let U = 0, x = y.count / 3; U < x; U++) {
    const Q = 3 * U, N = r[0].fromBufferAttribute(y, Q + 0), C = r[1].fromBufferAttribute(y, Q + 1), z = r[2].fromBufferAttribute(y, Q + 2);
    i.subVectors(z, C), h.subVectors(N, C);
    const O = new Ae().crossVectors(i, h).normalize();
    for (let L = 0; L < 3; L++) {
      const H = r[L], D = d(H);
      D in S || (S[D] = []), S[D].push(O);
    }
  }
  const E = new Float32Array(y.count * 3), A = new hi(E, 3, false);
  for (let U = 0, x = y.count / 3; U < x; U++) {
    const Q = 3 * U, N = r[0].fromBufferAttribute(y, Q + 0), C = r[1].fromBufferAttribute(y, Q + 1), z = r[2].fromBufferAttribute(y, Q + 2);
    i.subVectors(z, C), h.subVectors(N, C), f.crossVectors(i, h).normalize();
    for (let O = 0; O < 3; O++) {
      const L = r[O], H = d(L), D = S[H];
      c.set(0, 0, 0);
      for (let Y = 0, I = D.length; Y < I; Y++) {
        const me = D[Y];
        f.dot(me) > v && c.add(me);
      }
      c.normalize(), A.setXYZ(Q + O, c.x, c.y, c.z);
    }
  }
  return m.setAttribute("normal", A), m;
}
var Ea = Uint8Array, ki = Uint16Array, sf = Uint32Array, t0 = new Ea([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), n0 = new Ea([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Yg = new Ea([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), a0 = function(p, l) {
  for (var v = new ki(31), s = 0; s < 31; ++s) v[s] = l += 1 << p[s - 1];
  for (var r = new sf(v[30]), s = 1; s < 30; ++s) for (var i = v[s]; i < v[s + 1]; ++i) r[i] = i - v[s] << 5 | s;
  return [v, r];
}, i0 = a0(t0, 2), l0 = i0[0], Xg = i0[1];
l0[28] = 258, Xg[258] = 28;
var Vg = a0(n0, 0), Zg = Vg[0], uf = new ki(32768);
for (var an = 0; an < 32768; ++an) {
  var Fi = (an & 43690) >>> 1 | (an & 21845) << 1;
  Fi = (Fi & 52428) >>> 2 | (Fi & 13107) << 2, Fi = (Fi & 61680) >>> 4 | (Fi & 3855) << 4, uf[an] = ((Fi & 65280) >>> 8 | (Fi & 255) << 8) >>> 1;
}
var so = (function(p, l, v) {
  for (var s = p.length, r = 0, i = new ki(l); r < s; ++r) ++i[p[r] - 1];
  var h = new ki(l);
  for (r = 0; r < l; ++r) h[r] = h[r - 1] + i[r - 1] << 1;
  var f;
  if (v) {
    f = new ki(1 << l);
    var c = 15 - l;
    for (r = 0; r < s; ++r) if (p[r]) for (var d = r << 4 | p[r], m = l - p[r], y = h[p[r] - 1]++ << m, S = y | (1 << m) - 1; y <= S; ++y) f[uf[y] >>> c] = d;
  } else for (f = new ki(s), r = 0; r < s; ++r) p[r] && (f[r] = uf[h[p[r] - 1]++] >>> 15 - p[r]);
  return f;
}), yo = new Ea(288);
for (var an = 0; an < 144; ++an) yo[an] = 8;
for (var an = 144; an < 256; ++an) yo[an] = 9;
for (var an = 256; an < 280; ++an) yo[an] = 7;
for (var an = 280; an < 288; ++an) yo[an] = 8;
var r0 = new Ea(32);
for (var an = 0; an < 32; ++an) r0[an] = 5;
var Qg = so(yo, 9, 1), qg = so(r0, 5, 1), Vc = function(p) {
  for (var l = p[0], v = 1; v < p.length; ++v) p[v] > l && (l = p[v]);
  return l;
}, Ca = function(p, l, v) {
  var s = l / 8 | 0;
  return (p[s] | p[s + 1] << 8) >> (l & 7) & v;
}, Zc = function(p, l) {
  var v = l / 8 | 0;
  return (p[v] | p[v + 1] << 8 | p[v + 2] << 16) >> (l & 7);
}, Ig = function(p) {
  return (p / 8 | 0) + (p & 7 && 1);
}, Pg = function(p, l, v) {
  (v == null || v > p.length) && (v = p.length);
  var s = new (p instanceof ki ? ki : p instanceof sf ? sf : Ea)(v - l);
  return s.set(p.subarray(l, v)), s;
}, Wg = function(p, l, v) {
  var s = p.length;
  if (!s || v && !v.l && s < 5) return l || new Ea(0);
  var r = !l || v, i = !v || v.i;
  v || (v = {}), l || (l = new Ea(s * 3));
  var h = function(ie) {
    var se = l.length;
    if (ie > se) {
      var pe = new Ea(Math.max(se * 2, ie));
      pe.set(l), l = pe;
    }
  }, f = v.f || 0, c = v.p || 0, d = v.b || 0, m = v.l, y = v.d, S = v.m, E = v.n, A = s * 8;
  do {
    if (!m) {
      v.f = f = Ca(p, c, 1);
      var U = Ca(p, c + 1, 3);
      if (c += 3, U) if (U == 1) m = Qg, y = qg, S = 9, E = 5;
      else if (U == 2) {
        var C = Ca(p, c, 31) + 257, z = Ca(p, c + 10, 15) + 4, O = C + Ca(p, c + 5, 31) + 1;
        c += 14;
        for (var L = new Ea(O), H = new Ea(19), D = 0; D < z; ++D) H[Yg[D]] = Ca(p, c + D * 3, 7);
        c += z * 3;
        for (var Y = Vc(H), I = (1 << Y) - 1, me = so(H, Y, 1), D = 0; D < O; ) {
          var j = me[Ca(p, c, I)];
          c += j & 15;
          var x = j >>> 4;
          if (x < 16) L[D++] = x;
          else {
            var J = 0, Z = 0;
            for (x == 16 ? (Z = 3 + Ca(p, c, 3), c += 2, J = L[D - 1]) : x == 17 ? (Z = 3 + Ca(p, c, 7), c += 3) : x == 18 && (Z = 11 + Ca(p, c, 127), c += 7); Z--; ) L[D++] = J;
          }
        }
        var te = L.subarray(0, C), q = L.subarray(C);
        S = Vc(te), E = Vc(q), m = so(te, S, 1), y = so(q, E, 1);
      } else throw "invalid block type";
      else {
        var x = Ig(c) + 4, Q = p[x - 4] | p[x - 3] << 8, N = x + Q;
        if (N > s) {
          if (i) throw "unexpected EOF";
          break;
        }
        r && h(d + Q), l.set(p.subarray(x, N), d), v.b = d += Q, v.p = c = N * 8;
        continue;
      }
      if (c > A) {
        if (i) throw "unexpected EOF";
        break;
      }
    }
    r && h(d + 131072);
    for (var he = (1 << S) - 1, Te = (1 << E) - 1, re = c; ; re = c) {
      var J = m[Zc(p, c) & he], W = J >>> 4;
      if (c += J & 15, c > A) {
        if (i) throw "unexpected EOF";
        break;
      }
      if (!J) throw "invalid length/literal";
      if (W < 256) l[d++] = W;
      else if (W == 256) {
        re = c, m = null;
        break;
      } else {
        var T = W - 254;
        if (W > 264) {
          var D = W - 257, B = t0[D];
          T = Ca(p, c, (1 << B) - 1) + l0[D], c += B;
        }
        var V = y[Zc(p, c) & Te], M = V >>> 4;
        if (!V) throw "invalid distance";
        c += V & 15;
        var q = Zg[M];
        if (M > 3) {
          var B = n0[M];
          q += Zc(p, c) & (1 << B) - 1, c += B;
        }
        if (c > A) {
          if (i) throw "unexpected EOF";
          break;
        }
        r && h(d + 131072);
        for (var K = d + T; d < K; d += 4) l[d] = l[d - q], l[d + 1] = l[d + 1 - q], l[d + 2] = l[d + 2 - q], l[d + 3] = l[d + 3 - q];
        d = K;
      }
    }
    v.l = m, v.p = re, v.b = d, m && (f = 1, v.m = S, v.d = y, v.n = E);
  } while (!f);
  return d == l.length ? l : Pg(l, 0, d);
}, Kg = new Ea(0), Jg = function(p) {
  if ((p[0] & 15) != 8 || p[0] >>> 4 > 7 || (p[0] << 8 | p[1]) % 31) throw "invalid zlib data";
  if (p[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function Us(p, l) {
  return Wg((Jg(p), p.subarray(2, -4)), l);
}
var $g = typeof TextDecoder < "u" && new TextDecoder(), ey = 0;
try {
  $g.decode(Kg, { stream: true }), ey = 1;
} catch {
}
const ty = (p) => p && p.isCubeTexture;
class ny extends et {
  constructor(l, v) {
    var s, r;
    const i = ty(l), f = ((r = i ? (s = l.image[0]) == null ? void 0 : s.width : l.image.width) != null ? r : 1024) / 4, c = Math.floor(Math.log2(f)), d = Math.pow(2, c), m = 3 * Math.max(d, 112), y = 4 * d, S = [i ? "#define ENVMAP_TYPE_CUBE" : "", `#define CUBEUV_TEXEL_WIDTH ${1 / m}`, `#define CUBEUV_TEXEL_HEIGHT ${1 / y}`, `#define CUBEUV_MAX_MIP ${c}.0`], E = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `, A = S.join(`
`) + `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${Xs >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, U = { map: { value: l }, height: { value: (v == null ? void 0 : v.height) || 15 }, radius: { value: (v == null ? void 0 : v.radius) || 100 } }, x = new Ap(1, 16), Q = new Yi({ uniforms: U, fragmentShader: A, vertexShader: E, side: hr });
    super(x, Q);
  }
  set radius(l) {
    this.material.uniforms.radius.value = l;
  }
  get radius() {
    return this.material.uniforms.radius.value;
  }
  set height(l) {
    this.material.uniforms.height.value = l;
  }
  get height() {
    return this.material.uniforms.height.value;
  }
}
var ay = Object.defineProperty, iy = (p, l, v) => l in p ? ay(p, l, { enumerable: true, configurable: true, writable: true, value: v }) : p[l] = v, ly = (p, l, v) => (iy(p, l + "", v), v);
class ry {
  constructor() {
    ly(this, "_listeners");
  }
  addEventListener(l, v) {
    this._listeners === void 0 && (this._listeners = {});
    const s = this._listeners;
    s[l] === void 0 && (s[l] = []), s[l].indexOf(v) === -1 && s[l].push(v);
  }
  hasEventListener(l, v) {
    if (this._listeners === void 0) return false;
    const s = this._listeners;
    return s[l] !== void 0 && s[l].indexOf(v) !== -1;
  }
  removeEventListener(l, v) {
    if (this._listeners === void 0) return;
    const r = this._listeners[l];
    if (r !== void 0) {
      const i = r.indexOf(v);
      i !== -1 && r.splice(i, 1);
    }
  }
  dispatchEvent(l) {
    if (this._listeners === void 0) return;
    const s = this._listeners[l.type];
    if (s !== void 0) {
      l.target = this;
      const r = s.slice(0);
      for (let i = 0, h = r.length; i < h; i++) r[i].call(this, l);
      l.target = null;
    }
  }
}
var oy = Object.defineProperty, sy = (p, l, v) => l in p ? oy(p, l, { enumerable: true, configurable: true, writable: true, value: v }) : p[l] = v, de = (p, l, v) => (sy(p, typeof l != "symbol" ? l + "" : l, v), v);
let uy = class extends cr {
  constructor(l, v) {
    super(), de(this, "isTransformControls", true), de(this, "visible", false), de(this, "domElement"), de(this, "raycaster", new Up()), de(this, "gizmo"), de(this, "plane"), de(this, "tempVector", new Ae()), de(this, "tempVector2", new Ae()), de(this, "tempQuaternion", new _n()), de(this, "unit", { X: new Ae(1, 0, 0), Y: new Ae(0, 1, 0), Z: new Ae(0, 0, 1) }), de(this, "pointStart", new Ae()), de(this, "pointEnd", new Ae()), de(this, "offset", new Ae()), de(this, "rotationAxis", new Ae()), de(this, "startNorm", new Ae()), de(this, "endNorm", new Ae()), de(this, "rotationAngle", 0), de(this, "cameraPosition", new Ae()), de(this, "cameraQuaternion", new _n()), de(this, "cameraScale", new Ae()), de(this, "parentPosition", new Ae()), de(this, "parentQuaternion", new _n()), de(this, "parentQuaternionInv", new _n()), de(this, "parentScale", new Ae()), de(this, "worldPositionStart", new Ae()), de(this, "worldQuaternionStart", new _n()), de(this, "worldScaleStart", new Ae()), de(this, "worldPosition", new Ae()), de(this, "worldQuaternion", new _n()), de(this, "worldQuaternionInv", new _n()), de(this, "worldScale", new Ae()), de(this, "eye", new Ae()), de(this, "positionStart", new Ae()), de(this, "quaternionStart", new _n()), de(this, "scaleStart", new Ae()), de(this, "camera"), de(this, "object"), de(this, "enabled", true), de(this, "axis", null), de(this, "mode", "translate"), de(this, "translationSnap", null), de(this, "rotationSnap", null), de(this, "scaleSnap", null), de(this, "space", "world"), de(this, "size", 1), de(this, "dragging", false), de(this, "showX", true), de(this, "showY", true), de(this, "showZ", true), de(this, "changeEvent", { type: "change" }), de(this, "mouseDownEvent", { type: "mouseDown", mode: this.mode }), de(this, "mouseUpEvent", { type: "mouseUp", mode: this.mode }), de(this, "objectChangeEvent", { type: "objectChange" }), de(this, "intersectObjectWithRay", (r, i, h) => {
      const f = i.intersectObject(r, true);
      for (let c = 0; c < f.length; c++) if (f[c].object.visible || h) return f[c];
      return false;
    }), de(this, "attach", (r) => (this.object = r, this.visible = true, this)), de(this, "detach", () => (this.object = void 0, this.visible = false, this.axis = null, this)), de(this, "reset", () => this.enabled ? (this.dragging && this.object !== void 0 && (this.object.position.copy(this.positionStart), this.object.quaternion.copy(this.quaternionStart), this.object.scale.copy(this.scaleStart), this.dispatchEvent(this.changeEvent), this.dispatchEvent(this.objectChangeEvent), this.pointStart.copy(this.pointEnd)), this) : this), de(this, "updateMatrixWorld", () => {
      this.object !== void 0 && (this.object.updateMatrixWorld(), this.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this.parentPosition, this.parentQuaternion, this.parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this.worldScale), this.parentQuaternionInv.copy(this.parentQuaternion).invert(), this.worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this.cameraScale), this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld();
    }), de(this, "pointerHover", (r) => {
      if (this.object === void 0 || this.dragging === true) return;
      this.raycaster.setFromCamera(r, this.camera);
      const i = this.intersectObjectWithRay(this.gizmo.picker[this.mode], this.raycaster);
      i ? this.axis = i.object.name : this.axis = null;
    }), de(this, "pointerDown", (r) => {
      if (!(this.object === void 0 || this.dragging === true || r.button !== 0) && this.axis !== null) {
        this.raycaster.setFromCamera(r, this.camera);
        const i = this.intersectObjectWithRay(this.plane, this.raycaster, true);
        if (i) {
          let h = this.space;
          if (this.mode === "scale" ? h = "local" : (this.axis === "E" || this.axis === "XYZE" || this.axis === "XYZ") && (h = "world"), h === "local" && this.mode === "rotate") {
            const f = this.rotationSnap;
            this.axis === "X" && f && (this.object.rotation.x = Math.round(this.object.rotation.x / f) * f), this.axis === "Y" && f && (this.object.rotation.y = Math.round(this.object.rotation.y / f) * f), this.axis === "Z" && f && (this.object.rotation.z = Math.round(this.object.rotation.z / f) * f);
          }
          this.object.updateMatrixWorld(), this.object.parent && this.object.parent.updateMatrixWorld(), this.positionStart.copy(this.object.position), this.quaternionStart.copy(this.object.quaternion), this.scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this.worldScaleStart), this.pointStart.copy(i.point).sub(this.worldPositionStart);
        }
        this.dragging = true, this.mouseDownEvent.mode = this.mode, this.dispatchEvent(this.mouseDownEvent);
      }
    }), de(this, "pointerMove", (r) => {
      const i = this.axis, h = this.mode, f = this.object;
      let c = this.space;
      if (h === "scale" ? c = "local" : (i === "E" || i === "XYZE" || i === "XYZ") && (c = "world"), f === void 0 || i === null || this.dragging === false || r.button !== -1) return;
      this.raycaster.setFromCamera(r, this.camera);
      const d = this.intersectObjectWithRay(this.plane, this.raycaster, true);
      if (d) {
        if (this.pointEnd.copy(d.point).sub(this.worldPositionStart), h === "translate") this.offset.copy(this.pointEnd).sub(this.pointStart), c === "local" && i !== "XYZ" && this.offset.applyQuaternion(this.worldQuaternionInv), i.indexOf("X") === -1 && (this.offset.x = 0), i.indexOf("Y") === -1 && (this.offset.y = 0), i.indexOf("Z") === -1 && (this.offset.z = 0), c === "local" && i !== "XYZ" ? this.offset.applyQuaternion(this.quaternionStart).divide(this.parentScale) : this.offset.applyQuaternion(this.parentQuaternionInv).divide(this.parentScale), f.position.copy(this.offset).add(this.positionStart), this.translationSnap && (c === "local" && (f.position.applyQuaternion(this.tempQuaternion.copy(this.quaternionStart).invert()), i.search("X") !== -1 && (f.position.x = Math.round(f.position.x / this.translationSnap) * this.translationSnap), i.search("Y") !== -1 && (f.position.y = Math.round(f.position.y / this.translationSnap) * this.translationSnap), i.search("Z") !== -1 && (f.position.z = Math.round(f.position.z / this.translationSnap) * this.translationSnap), f.position.applyQuaternion(this.quaternionStart)), c === "world" && (f.parent && f.position.add(this.tempVector.setFromMatrixPosition(f.parent.matrixWorld)), i.search("X") !== -1 && (f.position.x = Math.round(f.position.x / this.translationSnap) * this.translationSnap), i.search("Y") !== -1 && (f.position.y = Math.round(f.position.y / this.translationSnap) * this.translationSnap), i.search("Z") !== -1 && (f.position.z = Math.round(f.position.z / this.translationSnap) * this.translationSnap), f.parent && f.position.sub(this.tempVector.setFromMatrixPosition(f.parent.matrixWorld))));
        else if (h === "scale") {
          if (i.search("XYZ") !== -1) {
            let m = this.pointEnd.length() / this.pointStart.length();
            this.pointEnd.dot(this.pointStart) < 0 && (m *= -1), this.tempVector2.set(m, m, m);
          } else this.tempVector.copy(this.pointStart), this.tempVector2.copy(this.pointEnd), this.tempVector.applyQuaternion(this.worldQuaternionInv), this.tempVector2.applyQuaternion(this.worldQuaternionInv), this.tempVector2.divide(this.tempVector), i.search("X") === -1 && (this.tempVector2.x = 1), i.search("Y") === -1 && (this.tempVector2.y = 1), i.search("Z") === -1 && (this.tempVector2.z = 1);
          f.scale.copy(this.scaleStart).multiply(this.tempVector2), this.scaleSnap && this.object && (i.search("X") !== -1 && (this.object.scale.x = Math.round(f.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), i.search("Y") !== -1 && (f.scale.y = Math.round(f.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), i.search("Z") !== -1 && (f.scale.z = Math.round(f.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
        } else if (h === "rotate") {
          this.offset.copy(this.pointEnd).sub(this.pointStart);
          const m = 20 / this.worldPosition.distanceTo(this.tempVector.setFromMatrixPosition(this.camera.matrixWorld));
          i === "E" ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this.startNorm.copy(this.pointStart).normalize(), this.endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this.endNorm.cross(this.startNorm).dot(this.eye) < 0 ? 1 : -1) : i === "XYZE" ? (this.rotationAxis.copy(this.offset).cross(this.eye).normalize(), this.rotationAngle = this.offset.dot(this.tempVector.copy(this.rotationAxis).cross(this.eye)) * m) : (i === "X" || i === "Y" || i === "Z") && (this.rotationAxis.copy(this.unit[i]), this.tempVector.copy(this.unit[i]), c === "local" && this.tempVector.applyQuaternion(this.worldQuaternion), this.rotationAngle = this.offset.dot(this.tempVector.cross(this.eye).normalize()) * m), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), c === "local" && i !== "E" && i !== "XYZE" ? (f.quaternion.copy(this.quaternionStart), f.quaternion.multiply(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this.parentQuaternionInv), f.quaternion.copy(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), f.quaternion.multiply(this.quaternionStart).normalize());
        }
        this.dispatchEvent(this.changeEvent), this.dispatchEvent(this.objectChangeEvent);
      }
    }), de(this, "pointerUp", (r) => {
      r.button === 0 && (this.dragging && this.axis !== null && (this.mouseUpEvent.mode = this.mode, this.dispatchEvent(this.mouseUpEvent)), this.dragging = false, this.axis = null);
    }), de(this, "getPointer", (r) => {
      var i;
      if (this.domElement && ((i = this.domElement.ownerDocument) != null && i.pointerLockElement)) return { x: 0, y: 0, button: r.button };
      {
        const h = r.changedTouches ? r.changedTouches[0] : r, f = this.domElement.getBoundingClientRect();
        return { x: (h.clientX - f.left) / f.width * 2 - 1, y: -(h.clientY - f.top) / f.height * 2 + 1, button: r.button };
      }
    }), de(this, "onPointerHover", (r) => {
      if (this.enabled) switch (r.pointerType) {
        case "mouse":
        case "pen":
          this.pointerHover(this.getPointer(r));
          break;
      }
    }), de(this, "onPointerDown", (r) => {
      !this.enabled || !this.domElement || (this.domElement.style.touchAction = "none", this.domElement.ownerDocument.addEventListener("pointermove", this.onPointerMove), this.pointerHover(this.getPointer(r)), this.pointerDown(this.getPointer(r)));
    }), de(this, "onPointerMove", (r) => {
      this.enabled && this.pointerMove(this.getPointer(r));
    }), de(this, "onPointerUp", (r) => {
      !this.enabled || !this.domElement || (this.domElement.style.touchAction = "", this.domElement.ownerDocument.removeEventListener("pointermove", this.onPointerMove), this.pointerUp(this.getPointer(r)));
    }), de(this, "getMode", () => this.mode), de(this, "setMode", (r) => {
      this.mode = r;
    }), de(this, "setTranslationSnap", (r) => {
      this.translationSnap = r;
    }), de(this, "setRotationSnap", (r) => {
      this.rotationSnap = r;
    }), de(this, "setScaleSnap", (r) => {
      this.scaleSnap = r;
    }), de(this, "setSize", (r) => {
      this.size = r;
    }), de(this, "setSpace", (r) => {
      this.space = r;
    }), de(this, "update", () => {
      console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.");
    }), de(this, "connect", (r) => {
      r === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.domElement = r, this.domElement.addEventListener("pointerdown", this.onPointerDown), this.domElement.addEventListener("pointermove", this.onPointerHover), this.domElement.ownerDocument.addEventListener("pointerup", this.onPointerUp);
    }), de(this, "dispose", () => {
      var r, i, h, f, c, d;
      (r = this.domElement) == null || r.removeEventListener("pointerdown", this.onPointerDown), (i = this.domElement) == null || i.removeEventListener("pointermove", this.onPointerHover), (f = (h = this.domElement) == null ? void 0 : h.ownerDocument) == null || f.removeEventListener("pointermove", this.onPointerMove), (d = (c = this.domElement) == null ? void 0 : c.ownerDocument) == null || d.removeEventListener("pointerup", this.onPointerUp), this.traverse((m) => {
        const y = m;
        y.geometry && y.geometry.dispose(), y.material && y.material.dispose();
      });
    }), this.domElement = v, this.camera = l, this.gizmo = new cy(), this.add(this.gizmo), this.plane = new fy(), this.add(this.plane);
    const s = (r, i) => {
      let h = i;
      Object.defineProperty(this, r, { get: function() {
        return h !== void 0 ? h : i;
      }, set: function(f) {
        h !== f && (h = f, this.plane[r] = f, this.gizmo[r] = f, this.dispatchEvent({ type: r + "-changed", value: f }), this.dispatchEvent(this.changeEvent));
      } }), this[r] = i, this.plane[r] = i, this.gizmo[r] = i;
    };
    s("camera", this.camera), s("object", this.object), s("enabled", this.enabled), s("axis", this.axis), s("mode", this.mode), s("translationSnap", this.translationSnap), s("rotationSnap", this.rotationSnap), s("scaleSnap", this.scaleSnap), s("space", this.space), s("size", this.size), s("dragging", this.dragging), s("showX", this.showX), s("showY", this.showY), s("showZ", this.showZ), s("worldPosition", this.worldPosition), s("worldPositionStart", this.worldPositionStart), s("worldQuaternion", this.worldQuaternion), s("worldQuaternionStart", this.worldQuaternionStart), s("cameraPosition", this.cameraPosition), s("cameraQuaternion", this.cameraQuaternion), s("pointStart", this.pointStart), s("pointEnd", this.pointEnd), s("rotationAxis", this.rotationAxis), s("rotationAngle", this.rotationAngle), s("eye", this.eye), v !== void 0 && this.connect(v);
  }
};
class cy extends cr {
  constructor() {
    super(), de(this, "isTransformControlsGizmo", true), de(this, "type", "TransformControlsGizmo"), de(this, "tempVector", new Ae(0, 0, 0)), de(this, "tempEuler", new Dp()), de(this, "alignVector", new Ae(0, 1, 0)), de(this, "zeroVector", new Ae(0, 0, 0)), de(this, "lookAtMatrix", new fr()), de(this, "tempQuaternion", new _n()), de(this, "tempQuaternion2", new _n()), de(this, "identityQuaternion", new _n()), de(this, "unitX", new Ae(1, 0, 0)), de(this, "unitY", new Ae(0, 1, 0)), de(this, "unitZ", new Ae(0, 0, 1)), de(this, "gizmo"), de(this, "picker"), de(this, "helper"), de(this, "rotationAxis", new Ae()), de(this, "cameraPosition", new Ae()), de(this, "worldPositionStart", new Ae()), de(this, "worldQuaternionStart", new _n()), de(this, "worldPosition", new Ae()), de(this, "worldQuaternion", new _n()), de(this, "eye", new Ae()), de(this, "camera", null), de(this, "enabled", true), de(this, "axis", null), de(this, "mode", "translate"), de(this, "space", "world"), de(this, "size", 1), de(this, "dragging", false), de(this, "showX", true), de(this, "showY", true), de(this, "showZ", true), de(this, "updateMatrixWorld", () => {
      let W = this.space;
      this.mode === "scale" && (W = "local");
      const T = W === "local" ? this.worldQuaternion : this.identityQuaternion;
      this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
      let B = [];
      B = B.concat(this.picker[this.mode].children), B = B.concat(this.gizmo[this.mode].children), B = B.concat(this.helper[this.mode].children);
      for (let V = 0; V < B.length; V++) {
        const M = B[V];
        M.visible = true, M.rotation.set(0, 0, 0), M.position.copy(this.worldPosition);
        let K;
        if (this.camera.isOrthographicCamera ? K = (this.camera.top - this.camera.bottom) / this.camera.zoom : K = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), M.scale.set(1, 1, 1).multiplyScalar(K * this.size / 7), M.tag === "helper") {
          M.visible = false, M.name === "AXIS" ? (M.position.copy(this.worldPositionStart), M.visible = !!this.axis, this.axis === "X" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, 0)), M.quaternion.copy(T).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(T).dot(this.eye)) > 0.9 && (M.visible = false)), this.axis === "Y" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, Math.PI / 2)), M.quaternion.copy(T).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(T).dot(this.eye)) > 0.9 && (M.visible = false)), this.axis === "Z" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0)), M.quaternion.copy(T).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(T).dot(this.eye)) > 0.9 && (M.visible = false)), this.axis === "XYZE" && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0)), this.alignVector.copy(this.rotationAxis), M.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.zeroVector, this.alignVector, this.unitY)), M.quaternion.multiply(this.tempQuaternion), M.visible = this.dragging), this.axis === "E" && (M.visible = false)) : M.name === "START" ? (M.position.copy(this.worldPositionStart), M.visible = this.dragging) : M.name === "END" ? (M.position.copy(this.worldPosition), M.visible = this.dragging) : M.name === "DELTA" ? (M.position.copy(this.worldPositionStart), M.quaternion.copy(this.worldQuaternionStart), this.tempVector.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), this.tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert()), M.scale.copy(this.tempVector), M.visible = this.dragging) : (M.quaternion.copy(T), this.dragging ? M.position.copy(this.worldPositionStart) : M.position.copy(this.worldPosition), this.axis && (M.visible = this.axis.search(M.name) !== -1));
          continue;
        }
        M.quaternion.copy(T), this.mode === "translate" || this.mode === "scale" ? ((M.name === "X" || M.name === "XYZX") && Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(T).dot(this.eye)) > 0.99 && (M.scale.set(1e-10, 1e-10, 1e-10), M.visible = false), (M.name === "Y" || M.name === "XYZY") && Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(T).dot(this.eye)) > 0.99 && (M.scale.set(1e-10, 1e-10, 1e-10), M.visible = false), (M.name === "Z" || M.name === "XYZZ") && Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(T).dot(this.eye)) > 0.99 && (M.scale.set(1e-10, 1e-10, 1e-10), M.visible = false), M.name === "XY" && Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(T).dot(this.eye)) < 0.2 && (M.scale.set(1e-10, 1e-10, 1e-10), M.visible = false), M.name === "YZ" && Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(T).dot(this.eye)) < 0.2 && (M.scale.set(1e-10, 1e-10, 1e-10), M.visible = false), M.name === "XZ" && Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(T).dot(this.eye)) < 0.2 && (M.scale.set(1e-10, 1e-10, 1e-10), M.visible = false), M.name.search("X") !== -1 && (this.alignVector.copy(this.unitX).applyQuaternion(T).dot(this.eye) < 0 ? M.tag === "fwd" ? M.visible = false : M.scale.x *= -1 : M.tag === "bwd" && (M.visible = false)), M.name.search("Y") !== -1 && (this.alignVector.copy(this.unitY).applyQuaternion(T).dot(this.eye) < 0 ? M.tag === "fwd" ? M.visible = false : M.scale.y *= -1 : M.tag === "bwd" && (M.visible = false)), M.name.search("Z") !== -1 && (this.alignVector.copy(this.unitZ).applyQuaternion(T).dot(this.eye) < 0 ? M.tag === "fwd" ? M.visible = false : M.scale.z *= -1 : M.tag === "bwd" && (M.visible = false))) : this.mode === "rotate" && (this.tempQuaternion2.copy(T), this.alignVector.copy(this.eye).applyQuaternion(this.tempQuaternion.copy(T).invert()), M.name.search("E") !== -1 && M.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.eye, this.zeroVector, this.unitY)), M.name === "X" && (this.tempQuaternion.setFromAxisAngle(this.unitX, Math.atan2(-this.alignVector.y, this.alignVector.z)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), M.quaternion.copy(this.tempQuaternion)), M.name === "Y" && (this.tempQuaternion.setFromAxisAngle(this.unitY, Math.atan2(this.alignVector.x, this.alignVector.z)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), M.quaternion.copy(this.tempQuaternion)), M.name === "Z" && (this.tempQuaternion.setFromAxisAngle(this.unitZ, Math.atan2(this.alignVector.y, this.alignVector.x)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), M.quaternion.copy(this.tempQuaternion))), M.visible = M.visible && (M.name.indexOf("X") === -1 || this.showX), M.visible = M.visible && (M.name.indexOf("Y") === -1 || this.showY), M.visible = M.visible && (M.name.indexOf("Z") === -1 || this.showZ), M.visible = M.visible && (M.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), M.material.tempOpacity = M.material.tempOpacity || M.material.opacity, M.material.tempColor = M.material.tempColor || M.material.color.clone(), M.material.color.copy(M.material.tempColor), M.material.opacity = M.material.tempOpacity, this.enabled ? this.axis && (M.name === this.axis ? (M.material.opacity = 1, M.material.color.lerp(new Zn(1, 1, 1), 0.5)) : this.axis.split("").some(function(ie) {
          return M.name === ie;
        }) ? (M.material.opacity = 1, M.material.color.lerp(new Zn(1, 1, 1), 0.5)) : (M.material.opacity *= 0.25, M.material.color.lerp(new Zn(1, 1, 1), 0.5))) : (M.material.opacity *= 0.5, M.material.color.lerp(new Zn(1, 1, 1), 0.5));
      }
      super.updateMatrixWorld();
    });
    const l = new Ys({ depthTest: false, depthWrite: false, transparent: true, side: hr, fog: false, toneMapped: false }), v = new Cp({ depthTest: false, depthWrite: false, transparent: true, linewidth: 1, fog: false, toneMapped: false }), s = l.clone();
    s.opacity = 0.15;
    const r = l.clone();
    r.opacity = 0.33;
    const i = l.clone();
    i.color.set(16711680);
    const h = l.clone();
    h.color.set(65280);
    const f = l.clone();
    f.color.set(255);
    const c = l.clone();
    c.opacity = 0.25;
    const d = c.clone();
    d.color.set(16776960);
    const m = c.clone();
    m.color.set(65535);
    const y = c.clone();
    y.color.set(16711935), l.clone().color.set(16776960);
    const E = v.clone();
    E.color.set(16711680);
    const A = v.clone();
    A.color.set(65280);
    const U = v.clone();
    U.color.set(255);
    const x = v.clone();
    x.color.set(65535);
    const Q = v.clone();
    Q.color.set(16711935);
    const N = v.clone();
    N.color.set(16776960);
    const C = v.clone();
    C.color.set(7895160);
    const z = N.clone();
    z.opacity = 0.25;
    const O = new Da(0, 0.05, 0.2, 12, 1, false), L = new fl(0.125, 0.125, 0.125), H = new lo();
    H.setAttribute("position", new oo([0, 0, 0, 1, 0, 0], 3));
    const D = (W, T) => {
      const B = new lo(), V = [];
      for (let M = 0; M <= 64 * T; ++M) V.push(0, Math.cos(M / 32 * Math.PI) * W, Math.sin(M / 32 * Math.PI) * W);
      return B.setAttribute("position", new oo(V, 3)), B;
    }, Y = () => {
      const W = new lo();
      return W.setAttribute("position", new oo([0, 0, 0, 1, 1, 1], 3)), W;
    }, I = { X: [[new et(O, i), [1, 0, 0], [0, 0, -Math.PI / 2], null, "fwd"], [new et(O, i), [1, 0, 0], [0, 0, Math.PI / 2], null, "bwd"], [new Ht(H, E)]], Y: [[new et(O, h), [0, 1, 0], null, null, "fwd"], [new et(O, h), [0, 1, 0], [Math.PI, 0, 0], null, "bwd"], [new Ht(H, A), null, [0, 0, Math.PI / 2]]], Z: [[new et(O, f), [0, 0, 1], [Math.PI / 2, 0, 0], null, "fwd"], [new et(O, f), [0, 0, 1], [-Math.PI / 2, 0, 0], null, "bwd"], [new Ht(H, U), null, [0, -Math.PI / 2, 0]]], XYZ: [[new et(new hl(0.1, 0), c.clone()), [0, 0, 0], [0, 0, 0]]], XY: [[new et(new ca(0.295, 0.295), d.clone()), [0.15, 0.15, 0]], [new Ht(H, N), [0.18, 0.3, 0], null, [0.125, 1, 1]], [new Ht(H, N), [0.3, 0.18, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]], YZ: [[new et(new ca(0.295, 0.295), m.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]], [new Ht(H, x), [0, 0.18, 0.3], [0, 0, Math.PI / 2], [0.125, 1, 1]], [new Ht(H, x), [0, 0.3, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]], XZ: [[new et(new ca(0.295, 0.295), y.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]], [new Ht(H, Q), [0.18, 0, 0.3], null, [0.125, 1, 1]], [new Ht(H, Q), [0.3, 0, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]] }, me = { X: [[new et(new Da(0.2, 0, 1, 4, 1, false), s), [0.6, 0, 0], [0, 0, -Math.PI / 2]]], Y: [[new et(new Da(0.2, 0, 1, 4, 1, false), s), [0, 0.6, 0]]], Z: [[new et(new Da(0.2, 0, 1, 4, 1, false), s), [0, 0, 0.6], [Math.PI / 2, 0, 0]]], XYZ: [[new et(new hl(0.2, 0), s)]], XY: [[new et(new ca(0.4, 0.4), s), [0.2, 0.2, 0]]], YZ: [[new et(new ca(0.4, 0.4), s), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]], XZ: [[new et(new ca(0.4, 0.4), s), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]] }, j = { START: [[new et(new hl(0.01, 2), r), null, null, null, "helper"]], END: [[new et(new hl(0.01, 2), r), null, null, null, "helper"]], DELTA: [[new Ht(Y(), r), null, null, null, "helper"]], X: [[new Ht(H, r.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]], Y: [[new Ht(H, r.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]], Z: [[new Ht(H, r.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]] }, J = { X: [[new Ht(D(1, 0.5), E)], [new et(new hl(0.04, 0), i), [0, 0, 0.99], null, [1, 3, 1]]], Y: [[new Ht(D(1, 0.5), A), null, [0, 0, -Math.PI / 2]], [new et(new hl(0.04, 0), h), [0, 0, 0.99], null, [3, 1, 1]]], Z: [[new Ht(D(1, 0.5), U), null, [0, Math.PI / 2, 0]], [new et(new hl(0.04, 0), f), [0.99, 0, 0], null, [1, 3, 1]]], E: [[new Ht(D(1.25, 1), z), null, [0, Math.PI / 2, 0]], [new et(new Da(0.03, 0, 0.15, 4, 1, false), z), [1.17, 0, 0], [0, 0, -Math.PI / 2], [1, 1, 1e-3]], [new et(new Da(0.03, 0, 0.15, 4, 1, false), z), [-1.17, 0, 0], [0, 0, Math.PI / 2], [1, 1, 1e-3]], [new et(new Da(0.03, 0, 0.15, 4, 1, false), z), [0, -1.17, 0], [Math.PI, 0, 0], [1, 1, 1e-3]], [new et(new Da(0.03, 0, 0.15, 4, 1, false), z), [0, 1.17, 0], [0, 0, 0], [1, 1, 1e-3]]], XYZE: [[new Ht(D(1, 1), C), null, [0, Math.PI / 2, 0]]] }, Z = { AXIS: [[new Ht(H, r.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]] }, te = { X: [[new et(new As(1, 0.1, 4, 24), s), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]], Y: [[new et(new As(1, 0.1, 4, 24), s), [0, 0, 0], [Math.PI / 2, 0, 0]]], Z: [[new et(new As(1, 0.1, 4, 24), s), [0, 0, 0], [0, 0, -Math.PI / 2]]], E: [[new et(new As(1.25, 0.1, 2, 24), s)]], XYZE: [[new et(new Op(0.7, 10, 8), s)]] }, q = { X: [[new et(L, i), [0.8, 0, 0], [0, 0, -Math.PI / 2]], [new Ht(H, E), null, null, [0.8, 1, 1]]], Y: [[new et(L, h), [0, 0.8, 0]], [new Ht(H, A), null, [0, 0, Math.PI / 2], [0.8, 1, 1]]], Z: [[new et(L, f), [0, 0, 0.8], [Math.PI / 2, 0, 0]], [new Ht(H, U), null, [0, -Math.PI / 2, 0], [0.8, 1, 1]]], XY: [[new et(L, d), [0.85, 0.85, 0], null, [2, 2, 0.2]], [new Ht(H, N), [0.855, 0.98, 0], null, [0.125, 1, 1]], [new Ht(H, N), [0.98, 0.855, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]], YZ: [[new et(L, m), [0, 0.85, 0.85], null, [0.2, 2, 2]], [new Ht(H, x), [0, 0.855, 0.98], [0, 0, Math.PI / 2], [0.125, 1, 1]], [new Ht(H, x), [0, 0.98, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]], XZ: [[new et(L, y), [0.85, 0, 0.85], null, [2, 0.2, 2]], [new Ht(H, Q), [0.855, 0, 0.98], null, [0.125, 1, 1]], [new Ht(H, Q), [0.98, 0, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]], XYZX: [[new et(new fl(0.125, 0.125, 0.125), c.clone()), [1.1, 0, 0]]], XYZY: [[new et(new fl(0.125, 0.125, 0.125), c.clone()), [0, 1.1, 0]]], XYZZ: [[new et(new fl(0.125, 0.125, 0.125), c.clone()), [0, 0, 1.1]]] }, he = { X: [[new et(new Da(0.2, 0, 0.8, 4, 1, false), s), [0.5, 0, 0], [0, 0, -Math.PI / 2]]], Y: [[new et(new Da(0.2, 0, 0.8, 4, 1, false), s), [0, 0.5, 0]]], Z: [[new et(new Da(0.2, 0, 0.8, 4, 1, false), s), [0, 0, 0.5], [Math.PI / 2, 0, 0]]], XY: [[new et(L, s), [0.85, 0.85, 0], null, [3, 3, 0.2]]], YZ: [[new et(L, s), [0, 0.85, 0.85], null, [0.2, 3, 3]]], XZ: [[new et(L, s), [0.85, 0, 0.85], null, [3, 0.2, 3]]], XYZX: [[new et(new fl(0.2, 0.2, 0.2), s), [1.1, 0, 0]]], XYZY: [[new et(new fl(0.2, 0.2, 0.2), s), [0, 1.1, 0]]], XYZZ: [[new et(new fl(0.2, 0.2, 0.2), s), [0, 0, 1.1]]] }, Te = { X: [[new Ht(H, r.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]], Y: [[new Ht(H, r.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]], Z: [[new Ht(H, r.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]] }, re = (W) => {
      const T = new cr();
      for (let B in W) for (let V = W[B].length; V--; ) {
        const M = W[B][V][0].clone(), K = W[B][V][1], ie = W[B][V][2], se = W[B][V][3], pe = W[B][V][4];
        M.name = B, M.tag = pe, K && M.position.set(K[0], K[1], K[2]), ie && M.rotation.set(ie[0], ie[1], ie[2]), se && M.scale.set(se[0], se[1], se[2]), M.updateMatrix();
        const Oe = M.geometry.clone();
        Oe.applyMatrix4(M.matrix), M.geometry = Oe, M.renderOrder = 1 / 0, M.position.set(0, 0, 0), M.rotation.set(0, 0, 0), M.scale.set(1, 1, 1), T.add(M);
      }
      return T;
    };
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = re(I)), this.add(this.gizmo.rotate = re(J)), this.add(this.gizmo.scale = re(q)), this.add(this.picker.translate = re(me)), this.add(this.picker.rotate = re(te)), this.add(this.picker.scale = re(he)), this.add(this.helper.translate = re(j)), this.add(this.helper.rotate = re(Z)), this.add(this.helper.scale = re(Te)), this.picker.translate.visible = false, this.picker.rotate.visible = false, this.picker.scale.visible = false;
  }
}
class fy extends et {
  constructor() {
    super(new ca(1e5, 1e5, 2, 2), new Ys({ visible: false, wireframe: true, side: hr, transparent: true, opacity: 0.1, toneMapped: false })), de(this, "isTransformControlsPlane", true), de(this, "type", "TransformControlsPlane"), de(this, "unitX", new Ae(1, 0, 0)), de(this, "unitY", new Ae(0, 1, 0)), de(this, "unitZ", new Ae(0, 0, 1)), de(this, "tempVector", new Ae()), de(this, "dirVector", new Ae()), de(this, "alignVector", new Ae()), de(this, "tempMatrix", new fr()), de(this, "identityQuaternion", new _n()), de(this, "cameraQuaternion", new _n()), de(this, "worldPosition", new Ae()), de(this, "worldQuaternion", new _n()), de(this, "eye", new Ae()), de(this, "axis", null), de(this, "mode", "translate"), de(this, "space", "world"), de(this, "updateMatrixWorld", () => {
      let l = this.space;
      switch (this.position.copy(this.worldPosition), this.mode === "scale" && (l = "local"), this.unitX.set(1, 0, 0).applyQuaternion(l === "local" ? this.worldQuaternion : this.identityQuaternion), this.unitY.set(0, 1, 0).applyQuaternion(l === "local" ? this.worldQuaternion : this.identityQuaternion), this.unitZ.set(0, 0, 1).applyQuaternion(l === "local" ? this.worldQuaternion : this.identityQuaternion), this.alignVector.copy(this.unitY), this.mode) {
        case "translate":
        case "scale":
          switch (this.axis) {
            case "X":
              this.alignVector.copy(this.eye).cross(this.unitX), this.dirVector.copy(this.unitX).cross(this.alignVector);
              break;
            case "Y":
              this.alignVector.copy(this.eye).cross(this.unitY), this.dirVector.copy(this.unitY).cross(this.alignVector);
              break;
            case "Z":
              this.alignVector.copy(this.eye).cross(this.unitZ), this.dirVector.copy(this.unitZ).cross(this.alignVector);
              break;
            case "XY":
              this.dirVector.copy(this.unitZ);
              break;
            case "YZ":
              this.dirVector.copy(this.unitX);
              break;
            case "XZ":
              this.alignVector.copy(this.unitZ), this.dirVector.copy(this.unitY);
              break;
            case "XYZ":
            case "E":
              this.dirVector.set(0, 0, 0);
              break;
          }
          break;
        case "rotate":
        default:
          this.dirVector.set(0, 0, 0);
      }
      this.dirVector.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (this.tempMatrix.lookAt(this.tempVector.set(0, 0, 0), this.dirVector, this.alignVector), this.quaternion.setFromRotationMatrix(this.tempMatrix)), super.updateMatrixWorld();
    });
  }
}
var hy = Object.defineProperty, dy = (p, l, v) => l in p ? hy(p, l, { enumerable: true, configurable: true, writable: true, value: v }) : p[l] = v, lt = (p, l, v) => (dy(p, typeof l != "symbol" ? l + "" : l, v), v);
const Ds = new zp(), gm = new Qm(), vy = Math.cos(70 * (Math.PI / 180)), ym = (p, l) => (p % l + l) % l;
let my = class extends ry {
  constructor(l, v) {
    super(), lt(this, "object"), lt(this, "domElement"), lt(this, "enabled", true), lt(this, "target", new Ae()), lt(this, "minDistance", 0), lt(this, "maxDistance", 1 / 0), lt(this, "minZoom", 0), lt(this, "maxZoom", 1 / 0), lt(this, "minPolarAngle", 0), lt(this, "maxPolarAngle", Math.PI), lt(this, "minAzimuthAngle", -1 / 0), lt(this, "maxAzimuthAngle", 1 / 0), lt(this, "enableDamping", false), lt(this, "dampingFactor", 0.05), lt(this, "enableZoom", true), lt(this, "zoomSpeed", 1), lt(this, "enableRotate", true), lt(this, "rotateSpeed", 1), lt(this, "enablePan", true), lt(this, "panSpeed", 1), lt(this, "screenSpacePanning", true), lt(this, "keyPanSpeed", 7), lt(this, "zoomToCursor", false), lt(this, "autoRotate", false), lt(this, "autoRotateSpeed", 2), lt(this, "reverseOrbit", false), lt(this, "reverseHorizontalOrbit", false), lt(this, "reverseVerticalOrbit", false), lt(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }), lt(this, "mouseButtons", { LEFT: tr.ROTATE, MIDDLE: tr.DOLLY, RIGHT: tr.PAN }), lt(this, "touches", { ONE: nr.ROTATE, TWO: nr.DOLLY_PAN }), lt(this, "target0"), lt(this, "position0"), lt(this, "zoom0"), lt(this, "_domElementKeyEvents", null), lt(this, "getPolarAngle"), lt(this, "getAzimuthalAngle"), lt(this, "setPolarAngle"), lt(this, "setAzimuthalAngle"), lt(this, "getDistance"), lt(this, "getZoomScale"), lt(this, "listenToKeyEvents"), lt(this, "stopListenToKeyEvents"), lt(this, "saveState"), lt(this, "reset"), lt(this, "update"), lt(this, "connect"), lt(this, "dispose"), lt(this, "dollyIn"), lt(this, "dollyOut"), lt(this, "getScale"), lt(this, "setScale"), this.object = l, this.domElement = v, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => m.phi, this.getAzimuthalAngle = () => m.theta, this.setPolarAngle = (F) => {
      let ye = ym(F, 2 * Math.PI), Re = m.phi;
      Re < 0 && (Re += 2 * Math.PI), ye < 0 && (ye += 2 * Math.PI);
      let Pe = Math.abs(ye - Re);
      2 * Math.PI - Pe < Pe && (ye < Re ? ye += 2 * Math.PI : Re += 2 * Math.PI), y.phi = ye - Re, s.update();
    }, this.setAzimuthalAngle = (F) => {
      let ye = ym(F, 2 * Math.PI), Re = m.theta;
      Re < 0 && (Re += 2 * Math.PI), ye < 0 && (ye += 2 * Math.PI);
      let Pe = Math.abs(ye - Re);
      2 * Math.PI - Pe < Pe && (ye < Re ? ye += 2 * Math.PI : Re += 2 * Math.PI), y.theta = ye - Re, s.update();
    }, this.getDistance = () => s.object.position.distanceTo(s.target), this.listenToKeyEvents = (F) => {
      F.addEventListener("keydown", Qe), this._domElementKeyEvents = F;
    }, this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", Qe), this._domElementKeyEvents = null;
    }, this.saveState = () => {
      s.target0.copy(s.target), s.position0.copy(s.object.position), s.zoom0 = s.object.zoom;
    }, this.reset = () => {
      s.target.copy(s.target0), s.object.position.copy(s.position0), s.object.zoom = s.zoom0, s.object.updateProjectionMatrix(), s.dispatchEvent(r), s.update(), c = f.NONE;
    }, this.update = (() => {
      const F = new Ae(), ye = new Ae(0, 1, 0), Re = new _n().setFromUnitVectors(l.up, ye), Pe = Re.clone().invert(), ue = new Ae(), ut = new _n(), ln = 2 * Math.PI;
      return function() {
        const vt = s.object.position;
        Re.setFromUnitVectors(l.up, ye), Pe.copy(Re).invert(), F.copy(vt).sub(s.target), F.applyQuaternion(Re), m.setFromVector3(F), s.autoRotate && c === f.NONE && Z(j()), s.enableDamping ? (m.theta += y.theta * s.dampingFactor, m.phi += y.phi * s.dampingFactor) : (m.theta += y.theta, m.phi += y.phi);
        let St = s.minAzimuthAngle, _t = s.maxAzimuthAngle;
        isFinite(St) && isFinite(_t) && (St < -Math.PI ? St += ln : St > Math.PI && (St -= ln), _t < -Math.PI ? _t += ln : _t > Math.PI && (_t -= ln), St <= _t ? m.theta = Math.max(St, Math.min(_t, m.theta)) : m.theta = m.theta > (St + _t) / 2 ? Math.max(St, m.theta) : Math.min(_t, m.theta)), m.phi = Math.max(s.minPolarAngle, Math.min(s.maxPolarAngle, m.phi)), m.makeSafe(), s.enableDamping === true ? s.target.addScaledVector(E, s.dampingFactor) : s.target.add(E), s.zoomToCursor && Y || s.object.isOrthographicCamera ? m.radius = V(m.radius) : m.radius = V(m.radius * S), F.setFromSpherical(m), F.applyQuaternion(Pe), vt.copy(s.target).add(F), s.object.matrixAutoUpdate || s.object.updateMatrix(), s.object.lookAt(s.target), s.enableDamping === true ? (y.theta *= 1 - s.dampingFactor, y.phi *= 1 - s.dampingFactor, E.multiplyScalar(1 - s.dampingFactor)) : (y.set(0, 0, 0), E.set(0, 0, 0));
        let it = false;
        if (s.zoomToCursor && Y) {
          let Mt = null;
          if (s.object instanceof ro && s.object.isPerspectiveCamera) {
            const Yt = F.length();
            Mt = V(Yt * S);
            const $t = Yt - Mt;
            s.object.position.addScaledVector(H, $t), s.object.updateMatrixWorld();
          } else if (s.object.isOrthographicCamera) {
            const Yt = new Ae(D.x, D.y, 0);
            Yt.unproject(s.object), s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom / S)), s.object.updateProjectionMatrix(), it = true;
            const $t = new Ae(D.x, D.y, 0);
            $t.unproject(s.object), s.object.position.sub($t).add(Yt), s.object.updateMatrixWorld(), Mt = F.length();
          } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), s.zoomToCursor = false;
          Mt !== null && (s.screenSpacePanning ? s.target.set(0, 0, -1).transformDirection(s.object.matrix).multiplyScalar(Mt).add(s.object.position) : (Ds.origin.copy(s.object.position), Ds.direction.set(0, 0, -1).transformDirection(s.object.matrix), Math.abs(s.object.up.dot(Ds.direction)) < vy ? l.lookAt(s.target) : (gm.setFromNormalAndCoplanarPoint(s.object.up, s.target), Ds.intersectPlane(gm, s.target))));
        } else s.object instanceof sr && s.object.isOrthographicCamera && (it = S !== 1, it && (s.object.zoom = Math.max(s.minZoom, Math.min(s.maxZoom, s.object.zoom / S)), s.object.updateProjectionMatrix()));
        return S = 1, Y = false, it || ue.distanceToSquared(s.object.position) > d || 8 * (1 - ut.dot(s.object.quaternion)) > d ? (s.dispatchEvent(r), ue.copy(s.object.position), ut.copy(s.object.quaternion), it = false, true) : false;
      };
    })(), this.connect = (F) => {
      s.domElement = F, s.domElement.style.touchAction = "none", s.domElement.addEventListener("contextmenu", Rt), s.domElement.addEventListener("pointerdown", rt), s.domElement.addEventListener("pointercancel", Le), s.domElement.addEventListener("wheel", He);
    }, this.dispose = () => {
      var F, ye, Re, Pe, ue, ut;
      s.domElement && (s.domElement.style.touchAction = "auto"), (F = s.domElement) == null || F.removeEventListener("contextmenu", Rt), (ye = s.domElement) == null || ye.removeEventListener("pointerdown", rt), (Re = s.domElement) == null || Re.removeEventListener("pointercancel", Le), (Pe = s.domElement) == null || Pe.removeEventListener("wheel", He), (ue = s.domElement) == null || ue.ownerDocument.removeEventListener("pointermove", Ge), (ut = s.domElement) == null || ut.ownerDocument.removeEventListener("pointerup", Le), s._domElementKeyEvents !== null && s._domElementKeyEvents.removeEventListener("keydown", Qe);
    };
    const s = this, r = { type: "change" }, i = { type: "start" }, h = { type: "end" }, f = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 };
    let c = f.NONE;
    const d = 1e-6, m = new nm(), y = new nm();
    let S = 1;
    const E = new Ae(), A = new fn(), U = new fn(), x = new fn(), Q = new fn(), N = new fn(), C = new fn(), z = new fn(), O = new fn(), L = new fn(), H = new Ae(), D = new fn();
    let Y = false;
    const I = [], me = {};
    function j() {
      return 2 * Math.PI / 60 / 60 * s.autoRotateSpeed;
    }
    function J() {
      return Math.pow(0.95, s.zoomSpeed);
    }
    function Z(F) {
      s.reverseOrbit || s.reverseHorizontalOrbit ? y.theta += F : y.theta -= F;
    }
    function te(F) {
      s.reverseOrbit || s.reverseVerticalOrbit ? y.phi += F : y.phi -= F;
    }
    const q = (() => {
      const F = new Ae();
      return function(Re, Pe) {
        F.setFromMatrixColumn(Pe, 0), F.multiplyScalar(-Re), E.add(F);
      };
    })(), he = (() => {
      const F = new Ae();
      return function(Re, Pe) {
        s.screenSpacePanning === true ? F.setFromMatrixColumn(Pe, 1) : (F.setFromMatrixColumn(Pe, 0), F.crossVectors(s.object.up, F)), F.multiplyScalar(Re), E.add(F);
      };
    })(), Te = (() => {
      const F = new Ae();
      return function(Re, Pe) {
        const ue = s.domElement;
        if (ue && s.object instanceof ro && s.object.isPerspectiveCamera) {
          const ut = s.object.position;
          F.copy(ut).sub(s.target);
          let ln = F.length();
          ln *= Math.tan(s.object.fov / 2 * Math.PI / 180), q(2 * Re * ln / ue.clientHeight, s.object.matrix), he(2 * Pe * ln / ue.clientHeight, s.object.matrix);
        } else ue && s.object instanceof sr && s.object.isOrthographicCamera ? (q(Re * (s.object.right - s.object.left) / s.object.zoom / ue.clientWidth, s.object.matrix), he(Pe * (s.object.top - s.object.bottom) / s.object.zoom / ue.clientHeight, s.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), s.enablePan = false);
      };
    })();
    function re(F) {
      s.object instanceof ro && s.object.isPerspectiveCamera || s.object instanceof sr && s.object.isOrthographicCamera ? S = F : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), s.enableZoom = false);
    }
    function W(F) {
      re(S / F);
    }
    function T(F) {
      re(S * F);
    }
    function B(F) {
      if (!s.zoomToCursor || !s.domElement) return;
      Y = true;
      const ye = s.domElement.getBoundingClientRect(), Re = F.clientX - ye.left, Pe = F.clientY - ye.top, ue = ye.width, ut = ye.height;
      D.x = Re / ue * 2 - 1, D.y = -(Pe / ut) * 2 + 1, H.set(D.x, D.y, 1).unproject(s.object).sub(s.object.position).normalize();
    }
    function V(F) {
      return Math.max(s.minDistance, Math.min(s.maxDistance, F));
    }
    function M(F) {
      A.set(F.clientX, F.clientY);
    }
    function K(F) {
      B(F), z.set(F.clientX, F.clientY);
    }
    function ie(F) {
      Q.set(F.clientX, F.clientY);
    }
    function se(F) {
      U.set(F.clientX, F.clientY), x.subVectors(U, A).multiplyScalar(s.rotateSpeed);
      const ye = s.domElement;
      ye && (Z(2 * Math.PI * x.x / ye.clientHeight), te(2 * Math.PI * x.y / ye.clientHeight)), A.copy(U), s.update();
    }
    function pe(F) {
      O.set(F.clientX, F.clientY), L.subVectors(O, z), L.y > 0 ? W(J()) : L.y < 0 && T(J()), z.copy(O), s.update();
    }
    function Oe(F) {
      N.set(F.clientX, F.clientY), C.subVectors(N, Q).multiplyScalar(s.panSpeed), Te(C.x, C.y), Q.copy(N), s.update();
    }
    function ze(F) {
      B(F), F.deltaY < 0 ? T(J()) : F.deltaY > 0 && W(J()), s.update();
    }
    function be(F) {
      let ye = false;
      switch (F.code) {
        case s.keys.UP:
          Te(0, s.keyPanSpeed), ye = true;
          break;
        case s.keys.BOTTOM:
          Te(0, -s.keyPanSpeed), ye = true;
          break;
        case s.keys.LEFT:
          Te(s.keyPanSpeed, 0), ye = true;
          break;
        case s.keys.RIGHT:
          Te(-s.keyPanSpeed, 0), ye = true;
          break;
      }
      ye && (F.preventDefault(), s.update());
    }
    function Ee() {
      if (I.length == 1) A.set(I[0].pageX, I[0].pageY);
      else {
        const F = 0.5 * (I[0].pageX + I[1].pageX), ye = 0.5 * (I[0].pageY + I[1].pageY);
        A.set(F, ye);
      }
    }
    function Je() {
      if (I.length == 1) Q.set(I[0].pageX, I[0].pageY);
      else {
        const F = 0.5 * (I[0].pageX + I[1].pageX), ye = 0.5 * (I[0].pageY + I[1].pageY);
        Q.set(F, ye);
      }
    }
    function Ye() {
      const F = I[0].pageX - I[1].pageX, ye = I[0].pageY - I[1].pageY, Re = Math.sqrt(F * F + ye * ye);
      z.set(0, Re);
    }
    function Ne() {
      s.enableZoom && Ye(), s.enablePan && Je();
    }
    function Ve() {
      s.enableZoom && Ye(), s.enableRotate && Ee();
    }
    function Ze(F) {
      if (I.length == 1) U.set(F.pageX, F.pageY);
      else {
        const Re = Xe(F), Pe = 0.5 * (F.pageX + Re.x), ue = 0.5 * (F.pageY + Re.y);
        U.set(Pe, ue);
      }
      x.subVectors(U, A).multiplyScalar(s.rotateSpeed);
      const ye = s.domElement;
      ye && (Z(2 * Math.PI * x.x / ye.clientHeight), te(2 * Math.PI * x.y / ye.clientHeight)), A.copy(U);
    }
    function Me(F) {
      if (I.length == 1) N.set(F.pageX, F.pageY);
      else {
        const ye = Xe(F), Re = 0.5 * (F.pageX + ye.x), Pe = 0.5 * (F.pageY + ye.y);
        N.set(Re, Pe);
      }
      C.subVectors(N, Q).multiplyScalar(s.panSpeed), Te(C.x, C.y), Q.copy(N);
    }
    function Fe(F) {
      const ye = Xe(F), Re = F.pageX - ye.x, Pe = F.pageY - ye.y, ue = Math.sqrt(Re * Re + Pe * Pe);
      O.set(0, ue), L.set(0, Math.pow(O.y / z.y, s.zoomSpeed)), W(L.y), z.copy(O);
    }
    function je(F) {
      s.enableZoom && Fe(F), s.enablePan && Me(F);
    }
    function _e(F) {
      s.enableZoom && Fe(F), s.enableRotate && Ze(F);
    }
    function rt(F) {
      var ye, Re;
      s.enabled !== false && (I.length === 0 && ((ye = s.domElement) == null || ye.ownerDocument.addEventListener("pointermove", Ge), (Re = s.domElement) == null || Re.ownerDocument.addEventListener("pointerup", Le)), kt(F), F.pointerType === "touch" ? $e(F) : Be(F));
    }
    function Ge(F) {
      s.enabled !== false && (F.pointerType === "touch" ? ct(F) : gt(F));
    }
    function Le(F) {
      var ye, Re, Pe;
      ot(F), I.length === 0 && ((ye = s.domElement) == null || ye.releasePointerCapture(F.pointerId), (Re = s.domElement) == null || Re.ownerDocument.removeEventListener("pointermove", Ge), (Pe = s.domElement) == null || Pe.ownerDocument.removeEventListener("pointerup", Le)), s.dispatchEvent(h), c = f.NONE;
    }
    function Be(F) {
      let ye;
      switch (F.button) {
        case 0:
          ye = s.mouseButtons.LEFT;
          break;
        case 1:
          ye = s.mouseButtons.MIDDLE;
          break;
        case 2:
          ye = s.mouseButtons.RIGHT;
          break;
        default:
          ye = -1;
      }
      switch (ye) {
        case tr.DOLLY:
          if (s.enableZoom === false) return;
          K(F), c = f.DOLLY;
          break;
        case tr.ROTATE:
          if (F.ctrlKey || F.metaKey || F.shiftKey) {
            if (s.enablePan === false) return;
            ie(F), c = f.PAN;
          } else {
            if (s.enableRotate === false) return;
            M(F), c = f.ROTATE;
          }
          break;
        case tr.PAN:
          if (F.ctrlKey || F.metaKey || F.shiftKey) {
            if (s.enableRotate === false) return;
            M(F), c = f.ROTATE;
          } else {
            if (s.enablePan === false) return;
            ie(F), c = f.PAN;
          }
          break;
        default:
          c = f.NONE;
      }
      c !== f.NONE && s.dispatchEvent(i);
    }
    function gt(F) {
      if (s.enabled !== false) switch (c) {
        case f.ROTATE:
          if (s.enableRotate === false) return;
          se(F);
          break;
        case f.DOLLY:
          if (s.enableZoom === false) return;
          pe(F);
          break;
        case f.PAN:
          if (s.enablePan === false) return;
          Oe(F);
          break;
      }
    }
    function He(F) {
      s.enabled === false || s.enableZoom === false || c !== f.NONE && c !== f.ROTATE || (F.preventDefault(), s.dispatchEvent(i), ze(F), s.dispatchEvent(h));
    }
    function Qe(F) {
      s.enabled === false || s.enablePan === false || be(F);
    }
    function $e(F) {
      switch (ke(F), I.length) {
        case 1:
          switch (s.touches.ONE) {
            case nr.ROTATE:
              if (s.enableRotate === false) return;
              Ee(), c = f.TOUCH_ROTATE;
              break;
            case nr.PAN:
              if (s.enablePan === false) return;
              Je(), c = f.TOUCH_PAN;
              break;
            default:
              c = f.NONE;
          }
          break;
        case 2:
          switch (s.touches.TWO) {
            case nr.DOLLY_PAN:
              if (s.enableZoom === false && s.enablePan === false) return;
              Ne(), c = f.TOUCH_DOLLY_PAN;
              break;
            case nr.DOLLY_ROTATE:
              if (s.enableZoom === false && s.enableRotate === false) return;
              Ve(), c = f.TOUCH_DOLLY_ROTATE;
              break;
            default:
              c = f.NONE;
          }
          break;
        default:
          c = f.NONE;
      }
      c !== f.NONE && s.dispatchEvent(i);
    }
    function ct(F) {
      switch (ke(F), c) {
        case f.TOUCH_ROTATE:
          if (s.enableRotate === false) return;
          Ze(F), s.update();
          break;
        case f.TOUCH_PAN:
          if (s.enablePan === false) return;
          Me(F), s.update();
          break;
        case f.TOUCH_DOLLY_PAN:
          if (s.enableZoom === false && s.enablePan === false) return;
          je(F), s.update();
          break;
        case f.TOUCH_DOLLY_ROTATE:
          if (s.enableZoom === false && s.enableRotate === false) return;
          _e(F), s.update();
          break;
        default:
          c = f.NONE;
      }
    }
    function Rt(F) {
      s.enabled !== false && F.preventDefault();
    }
    function kt(F) {
      I.push(F);
    }
    function ot(F) {
      delete me[F.pointerId];
      for (let ye = 0; ye < I.length; ye++) if (I[ye].pointerId == F.pointerId) {
        I.splice(ye, 1);
        return;
      }
    }
    function ke(F) {
      let ye = me[F.pointerId];
      ye === void 0 && (ye = new fn(), me[F.pointerId] = ye), ye.set(F.pageX, F.pageY);
    }
    function Xe(F) {
      const ye = F.pointerId === I[0].pointerId ? I[1] : I[0];
      return me[ye.pointerId];
    }
    this.dollyIn = (F = J()) => {
      T(F), s.update();
    }, this.dollyOut = (F = J()) => {
      W(F), s.update();
    }, this.getScale = () => S, this.setScale = (F) => {
      re(F), s.update();
    }, this.getZoomScale = () => J(), v !== void 0 && this.connect(v), this.update();
  }
};
const py = { uniforms: { tDiffuse: { value: null }, h: { value: 1 / 512 } }, vertexShader: `
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `, fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  ` }, gy = { uniforms: { tDiffuse: { value: null }, v: { value: 1 / 512 } }, vertexShader: `
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `, fragmentShader: `

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  ` };
class yy extends qm {
  constructor(l) {
    super(l), this.type = fa;
  }
  parse(l) {
    const h = function(D, Y) {
      switch (D) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (Y || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (Y || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (Y || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (Y || ""));
      }
    }, y = function(D, Y, I) {
      Y = Y || 1024;
      let j = D.pos, J = -1, Z = 0, te = "", q = String.fromCharCode.apply(null, new Uint16Array(D.subarray(j, j + 128)));
      for (; 0 > (J = q.indexOf(`
`)) && Z < Y && j < D.byteLength; ) te += q, Z += q.length, j += 128, q += String.fromCharCode.apply(null, new Uint16Array(D.subarray(j, j + 128)));
      return -1 < J ? (D.pos += Z + J + 1, te + q.slice(0, J)) : false;
    }, S = function(D) {
      const Y = /^#\?(\S+)/, I = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, me = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, j = /^\s*FORMAT=(\S+)\s*$/, J = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, Z = { valid: 0, string: "", comments: "", programtype: "RGBE", format: "", gamma: 1, exposure: 1, width: 0, height: 0 };
      let te, q;
      for ((D.pos >= D.byteLength || !(te = y(D))) && h(1, "no header found"), (q = te.match(Y)) || h(3, "bad initial token"), Z.valid |= 1, Z.programtype = q[1], Z.string += te + `
`; te = y(D), te !== false; ) {
        if (Z.string += te + `
`, te.charAt(0) === "#") {
          Z.comments += te + `
`;
          continue;
        }
        if ((q = te.match(I)) && (Z.gamma = parseFloat(q[1])), (q = te.match(me)) && (Z.exposure = parseFloat(q[1])), (q = te.match(j)) && (Z.valid |= 2, Z.format = q[1]), (q = te.match(J)) && (Z.valid |= 4, Z.height = parseInt(q[1], 10), Z.width = parseInt(q[2], 10)), Z.valid & 2 && Z.valid & 4) break;
      }
      return Z.valid & 2 || h(3, "missing format specifier"), Z.valid & 4 || h(3, "missing image size specifier"), Z;
    }, E = function(D, Y, I) {
      const me = Y;
      if (me < 8 || me > 32767 || D[0] !== 2 || D[1] !== 2 || D[2] & 128) return new Uint8Array(D);
      me !== (D[2] << 8 | D[3]) && h(3, "wrong scanline width");
      const j = new Uint8Array(4 * Y * I);
      j.length || h(4, "unable to allocate buffer space");
      let J = 0, Z = 0;
      const te = 4 * me, q = new Uint8Array(4), he = new Uint8Array(te);
      let Te = I;
      for (; Te > 0 && Z < D.byteLength; ) {
        Z + 4 > D.byteLength && h(1), q[0] = D[Z++], q[1] = D[Z++], q[2] = D[Z++], q[3] = D[Z++], (q[0] != 2 || q[1] != 2 || (q[2] << 8 | q[3]) != me) && h(3, "bad rgbe scanline format");
        let re = 0, W;
        for (; re < te && Z < D.byteLength; ) {
          W = D[Z++];
          const B = W > 128;
          if (B && (W -= 128), (W === 0 || re + W > te) && h(3, "bad scanline data"), B) {
            const V = D[Z++];
            for (let M = 0; M < W; M++) he[re++] = V;
          } else he.set(D.subarray(Z, Z + W), re), re += W, Z += W;
        }
        const T = me;
        for (let B = 0; B < T; B++) {
          let V = 0;
          j[J] = he[B + V], V += me, j[J + 1] = he[B + V], V += me, j[J + 2] = he[B + V], V += me, j[J + 3] = he[B + V], J += 4;
        }
        Te--;
      }
      return j;
    }, A = function(D, Y, I, me) {
      const j = D[Y + 3], J = Math.pow(2, j - 128) / 255;
      I[me + 0] = D[Y + 0] * J, I[me + 1] = D[Y + 1] * J, I[me + 2] = D[Y + 2] * J, I[me + 3] = 1;
    }, U = function(D, Y, I, me) {
      const j = D[Y + 3], J = Math.pow(2, j - 128) / 255;
      I[me + 0] = rr.toHalfFloat(Math.min(D[Y + 0] * J, 65504)), I[me + 1] = rr.toHalfFloat(Math.min(D[Y + 1] * J, 65504)), I[me + 2] = rr.toHalfFloat(Math.min(D[Y + 2] * J, 65504)), I[me + 3] = rr.toHalfFloat(1);
    }, x = new Uint8Array(l);
    x.pos = 0;
    const Q = S(x), N = Q.width, C = Q.height, z = E(x.subarray(x.pos), N, C);
    let O, L, H;
    switch (this.type) {
      case Xa:
        H = z.length / 4;
        const D = new Float32Array(H * 4);
        for (let I = 0; I < H; I++) A(z, I * 4, D, I * 4);
        O = D, L = Xa;
        break;
      case fa:
        H = z.length / 4;
        const Y = new Uint16Array(H * 4);
        for (let I = 0; I < H; I++) U(z, I * 4, Y, I * 4);
        O = Y, L = fa;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return { width: N, height: C, data: O, header: Q.string, gamma: Q.gamma, exposure: Q.exposure, type: L };
  }
  setDataType(l) {
    return this.type = l, this;
  }
  load(l, v, s, r) {
    function i(h, f) {
      switch (h.type) {
        case Xa:
        case fa:
          "colorSpace" in h ? h.colorSpace = "srgb-linear" : h.encoding = 3e3, h.minFilter = ta, h.magFilter = ta, h.generateMipmaps = false, h.flipY = true;
          break;
      }
      v && v(h, f);
    }
    return super.load(l, i, s, r);
  }
}
const to = Xs >= 152;
class by extends qm {
  constructor(l) {
    super(l), this.type = fa;
  }
  parse(l) {
    const Y = Math.pow(2.7182818, 2.2);
    function I(b, w) {
      for (var G = 0, ae = 0; ae < 65536; ++ae) (ae == 0 || b[ae >> 3] & 1 << (ae & 7)) && (w[G++] = ae);
      for (var ce = G - 1; G < 65536; ) w[G++] = 0;
      return ce;
    }
    function me(b) {
      for (var w = 0; w < 16384; w++) b[w] = {}, b[w].len = 0, b[w].lit = 0, b[w].p = null;
    }
    const j = { l: 0, c: 0, lc: 0 };
    function J(b, w, G, ae, ce) {
      for (; G < b; ) w = w << 8 | Xe(ae, ce), G += 8;
      G -= b, j.l = w >> G & (1 << b) - 1, j.c = w, j.lc = G;
    }
    const Z = new Array(59);
    function te(b) {
      for (var w = 0; w <= 58; ++w) Z[w] = 0;
      for (var w = 0; w < 65537; ++w) Z[b[w]] += 1;
      for (var G = 0, w = 58; w > 0; --w) {
        var ae = G + Z[w] >> 1;
        Z[w] = G, G = ae;
      }
      for (var w = 0; w < 65537; ++w) {
        var ce = b[w];
        ce > 0 && (b[w] = ce | Z[ce]++ << 6);
      }
    }
    function q(b, w, G, ae, ce, fe, xe) {
      for (var we = G, Ue = 0, De = 0; ce <= fe; ce++) {
        if (we.value - G.value > ae) return false;
        J(6, Ue, De, b, we);
        var Ce = j.l;
        if (Ue = j.c, De = j.lc, xe[ce] = Ce, Ce == 63) {
          if (we.value - G.value > ae) throw "Something wrong with hufUnpackEncTable";
          J(8, Ue, De, b, we);
          var le = j.l + 6;
          if (Ue = j.c, De = j.lc, ce + le > fe + 1) throw "Something wrong with hufUnpackEncTable";
          for (; le--; ) xe[ce++] = 0;
          ce--;
        } else if (Ce >= 59) {
          var le = Ce - 59 + 2;
          if (ce + le > fe + 1) throw "Something wrong with hufUnpackEncTable";
          for (; le--; ) xe[ce++] = 0;
          ce--;
        }
      }
      te(xe);
    }
    function he(b) {
      return b & 63;
    }
    function Te(b) {
      return b >> 6;
    }
    function re(b, w, G, ae) {
      for (; w <= G; w++) {
        var ce = Te(b[w]), fe = he(b[w]);
        if (ce >> fe) throw "Invalid table entry";
        if (fe > 14) {
          var xe = ae[ce >> fe - 14];
          if (xe.len) throw "Invalid table entry";
          if (xe.lit++, xe.p) {
            var we = xe.p;
            xe.p = new Array(xe.lit);
            for (var Ue = 0; Ue < xe.lit - 1; ++Ue) xe.p[Ue] = we[Ue];
          } else xe.p = new Array(1);
          xe.p[xe.lit - 1] = w;
        } else if (fe) for (var De = 0, Ue = 1 << 14 - fe; Ue > 0; Ue--) {
          var xe = ae[(ce << 14 - fe) + De];
          if (xe.len || xe.p) throw "Invalid table entry";
          xe.len = fe, xe.lit = w, De++;
        }
      }
      return true;
    }
    const W = { c: 0, lc: 0 };
    function T(b, w, G, ae) {
      b = b << 8 | Xe(G, ae), w += 8, W.c = b, W.lc = w;
    }
    const B = { c: 0, lc: 0 };
    function V(b, w, G, ae, ce, fe, xe, we, Ue, De) {
      if (b == w) {
        ae < 8 && (T(G, ae, ce, xe), G = W.c, ae = W.lc), ae -= 8;
        var Ce = G >> ae, Ce = new Uint8Array([Ce])[0];
        if (Ue.value + Ce > De) return false;
        for (var le = we[Ue.value - 1]; Ce-- > 0; ) we[Ue.value++] = le;
      } else if (Ue.value < De) we[Ue.value++] = b;
      else return false;
      B.c = G, B.lc = ae;
    }
    function M(b) {
      return b & 65535;
    }
    function K(b) {
      var w = M(b);
      return w > 32767 ? w - 65536 : w;
    }
    const ie = { a: 0, b: 0 };
    function se(b, w) {
      var G = K(b), ae = K(w), ce = ae, fe = G + (ce & 1) + (ce >> 1), xe = fe, we = fe - ce;
      ie.a = xe, ie.b = we;
    }
    function pe(b, w) {
      var G = M(b), ae = M(w), ce = G - (ae >> 1) & 65535, fe = ae + ce - 32768 & 65535;
      ie.a = fe, ie.b = ce;
    }
    function Oe(b, w, G, ae, ce, fe, xe) {
      for (var we = xe < 16384, Ue = G > ce ? ce : G, De = 1, Ce; De <= Ue; ) De <<= 1;
      for (De >>= 1, Ce = De, De >>= 1; De >= 1; ) {
        for (var le = 0, ht = le + fe * (ce - Ce), We = fe * De, Ie = fe * Ce, tt = ae * De, dt = ae * Ce, Lt, Ct, Wt, pn; le <= ht; le += Ie) {
          for (var Tt = le, xn = le + ae * (G - Ce); Tt <= xn; Tt += dt) {
            var bt = Tt + tt, Ot = Tt + We, Mn = Ot + tt;
            we ? (se(b[Tt + w], b[Ot + w]), Lt = ie.a, Wt = ie.b, se(b[bt + w], b[Mn + w]), Ct = ie.a, pn = ie.b, se(Lt, Ct), b[Tt + w] = ie.a, b[bt + w] = ie.b, se(Wt, pn), b[Ot + w] = ie.a, b[Mn + w] = ie.b) : (pe(b[Tt + w], b[Ot + w]), Lt = ie.a, Wt = ie.b, pe(b[bt + w], b[Mn + w]), Ct = ie.a, pn = ie.b, pe(Lt, Ct), b[Tt + w] = ie.a, b[bt + w] = ie.b, pe(Wt, pn), b[Ot + w] = ie.a, b[Mn + w] = ie.b);
          }
          if (G & De) {
            var Ot = Tt + We;
            we ? se(b[Tt + w], b[Ot + w]) : pe(b[Tt + w], b[Ot + w]), Lt = ie.a, b[Ot + w] = ie.b, b[Tt + w] = Lt;
          }
        }
        if (ce & De) for (var Tt = le, xn = le + ae * (G - Ce); Tt <= xn; Tt += dt) {
          var bt = Tt + tt;
          we ? se(b[Tt + w], b[bt + w]) : pe(b[Tt + w], b[bt + w]), Lt = ie.a, b[bt + w] = ie.b, b[Tt + w] = Lt;
        }
        Ce = De, De >>= 1;
      }
      return le;
    }
    function ze(b, w, G, ae, ce, fe, xe, we, Ue, De) {
      for (var Ce = 0, le = 0, ht = we, We = Math.trunc(ce.value + (fe + 7) / 8); ce.value < We; ) for (T(Ce, le, G, ce), Ce = W.c, le = W.lc; le >= 14; ) {
        var Ie = Ce >> le - 14 & 16383, tt = w[Ie];
        if (tt.len) le -= tt.len, V(tt.lit, xe, Ce, le, G, ae, ce, Ue, De, ht), Ce = B.c, le = B.lc;
        else {
          if (!tt.p) throw "hufDecode issues";
          var dt;
          for (dt = 0; dt < tt.lit; dt++) {
            for (var Lt = he(b[tt.p[dt]]); le < Lt && ce.value < We; ) T(Ce, le, G, ce), Ce = W.c, le = W.lc;
            if (le >= Lt && Te(b[tt.p[dt]]) == (Ce >> le - Lt & (1 << Lt) - 1)) {
              le -= Lt, V(tt.p[dt], xe, Ce, le, G, ae, ce, Ue, De, ht), Ce = B.c, le = B.lc;
              break;
            }
          }
          if (dt == tt.lit) throw "hufDecode issues";
        }
      }
      var Ct = 8 - fe & 7;
      for (Ce >>= Ct, le -= Ct; le > 0; ) {
        var tt = w[Ce << 14 - le & 16383];
        if (tt.len) le -= tt.len, V(tt.lit, xe, Ce, le, G, ae, ce, Ue, De, ht), Ce = B.c, le = B.lc;
        else throw "hufDecode issues";
      }
      return true;
    }
    function be(b, w, G, ae, ce, fe) {
      var xe = { value: 0 }, we = G.value, Ue = ke(w, G), De = ke(w, G);
      G.value += 4;
      var Ce = ke(w, G);
      if (G.value += 4, Ue < 0 || Ue >= 65537 || De < 0 || De >= 65537) throw "Something wrong with HUF_ENCSIZE";
      var le = new Array(65537), ht = new Array(16384);
      me(ht);
      var We = ae - (G.value - we);
      if (q(b, w, G, We, Ue, De, le), Ce > 8 * (ae - (G.value - we))) throw "Something wrong with hufUncompress";
      re(le, Ue, De, ht), ze(le, ht, b, w, G, Ce, De, fe, ce, xe);
    }
    function Ee(b, w, G) {
      for (var ae = 0; ae < G; ++ae) w[ae] = b[w[ae]];
    }
    function Je(b) {
      for (var w = 1; w < b.length; w++) {
        var G = b[w - 1] + b[w] - 128;
        b[w] = G;
      }
    }
    function Ye(b, w) {
      for (var G = 0, ae = Math.floor((b.length + 1) / 2), ce = 0, fe = b.length - 1; !(ce > fe || (w[ce++] = b[G++], ce > fe)); ) w[ce++] = b[ae++];
    }
    function Ne(b) {
      for (var w = b.byteLength, G = new Array(), ae = 0, ce = new DataView(b); w > 0; ) {
        var fe = ce.getInt8(ae++);
        if (fe < 0) {
          var xe = -fe;
          w -= xe + 1;
          for (var we = 0; we < xe; we++) G.push(ce.getUint8(ae++));
        } else {
          var xe = fe;
          w -= 2;
          for (var Ue = ce.getUint8(ae++), we = 0; we < xe + 1; we++) G.push(Ue);
        }
      }
      return G;
    }
    function Ve(b, w, G, ae, ce, fe) {
      var bt = new DataView(fe.buffer), xe = G[b.idx[0]].width, we = G[b.idx[0]].height, Ue = 3, De = Math.floor(xe / 8), Ce = Math.ceil(xe / 8), le = Math.ceil(we / 8), ht = xe - (Ce - 1) * 8, We = we - (le - 1) * 8, Ie = { value: 0 }, tt = new Array(Ue), dt = new Array(Ue), Lt = new Array(Ue), Ct = new Array(Ue), Wt = new Array(Ue);
      for (let zt = 0; zt < Ue; ++zt) Wt[zt] = w[b.idx[zt]], tt[zt] = zt < 1 ? 0 : tt[zt - 1] + Ce * le, dt[zt] = new Float32Array(64), Lt[zt] = new Uint16Array(64), Ct[zt] = new Uint16Array(Ce * 64);
      for (let zt = 0; zt < le; ++zt) {
        var pn = 8;
        zt == le - 1 && (pn = We);
        var Tt = 8;
        for (let jt = 0; jt < Ce; ++jt) {
          jt == Ce - 1 && (Tt = ht);
          for (let at = 0; at < Ue; ++at) Lt[at].fill(0), Lt[at][0] = ce[tt[at]++], Ze(Ie, ae, Lt[at]), Me(Lt[at], dt[at]), Fe(dt[at]);
          je(dt);
          for (let at = 0; at < Ue; ++at) _e(dt[at], Ct[at], jt * 64);
        }
        let en = 0;
        for (let jt = 0; jt < Ue; ++jt) {
          const at = G[b.idx[jt]].type;
          for (let Tn = 8 * zt; Tn < 8 * zt + pn; ++Tn) {
            en = Wt[jt][Tn];
            for (let qn = 0; qn < De; ++qn) {
              const un = qn * 64 + (Tn & 7) * 8;
              bt.setUint16(en + 0 * at, Ct[jt][un + 0], true), bt.setUint16(en + 2 * at, Ct[jt][un + 1], true), bt.setUint16(en + 4 * at, Ct[jt][un + 2], true), bt.setUint16(en + 6 * at, Ct[jt][un + 3], true), bt.setUint16(en + 8 * at, Ct[jt][un + 4], true), bt.setUint16(en + 10 * at, Ct[jt][un + 5], true), bt.setUint16(en + 12 * at, Ct[jt][un + 6], true), bt.setUint16(en + 14 * at, Ct[jt][un + 7], true), en += 16 * at;
            }
          }
          if (De != Ce) for (let Tn = 8 * zt; Tn < 8 * zt + pn; ++Tn) {
            const qn = Wt[jt][Tn] + 8 * De * 2 * at, un = De * 64 + (Tn & 7) * 8;
            for (let An = 0; An < Tt; ++An) bt.setUint16(qn + An * 2 * at, Ct[jt][un + An], true);
          }
        }
      }
      for (var xn = new Uint16Array(xe), bt = new DataView(fe.buffer), Ot = 0; Ot < Ue; ++Ot) {
        G[b.idx[Ot]].decoded = true;
        var Mn = G[b.idx[Ot]].type;
        if (G[Ot].type == 2) for (var wa = 0; wa < we; ++wa) {
          const zt = Wt[Ot][wa];
          for (var sn = 0; sn < xe; ++sn) xn[sn] = bt.getUint16(zt + sn * 2 * Mn, true);
          for (var sn = 0; sn < xe; ++sn) bt.setFloat32(zt + sn * 2 * Mn, ue(xn[sn]), true);
        }
      }
    }
    function Ze(b, w, G) {
      for (var ae, ce = 1; ce < 64; ) ae = w[b.value], ae == 65280 ? ce = 64 : ae >> 8 == 255 ? ce += ae & 255 : (G[ce] = ae, ce++), b.value++;
    }
    function Me(b, w) {
      w[0] = ue(b[0]), w[1] = ue(b[1]), w[2] = ue(b[5]), w[3] = ue(b[6]), w[4] = ue(b[14]), w[5] = ue(b[15]), w[6] = ue(b[27]), w[7] = ue(b[28]), w[8] = ue(b[2]), w[9] = ue(b[4]), w[10] = ue(b[7]), w[11] = ue(b[13]), w[12] = ue(b[16]), w[13] = ue(b[26]), w[14] = ue(b[29]), w[15] = ue(b[42]), w[16] = ue(b[3]), w[17] = ue(b[8]), w[18] = ue(b[12]), w[19] = ue(b[17]), w[20] = ue(b[25]), w[21] = ue(b[30]), w[22] = ue(b[41]), w[23] = ue(b[43]), w[24] = ue(b[9]), w[25] = ue(b[11]), w[26] = ue(b[18]), w[27] = ue(b[24]), w[28] = ue(b[31]), w[29] = ue(b[40]), w[30] = ue(b[44]), w[31] = ue(b[53]), w[32] = ue(b[10]), w[33] = ue(b[19]), w[34] = ue(b[23]), w[35] = ue(b[32]), w[36] = ue(b[39]), w[37] = ue(b[45]), w[38] = ue(b[52]), w[39] = ue(b[54]), w[40] = ue(b[20]), w[41] = ue(b[22]), w[42] = ue(b[33]), w[43] = ue(b[38]), w[44] = ue(b[46]), w[45] = ue(b[51]), w[46] = ue(b[55]), w[47] = ue(b[60]), w[48] = ue(b[21]), w[49] = ue(b[34]), w[50] = ue(b[37]), w[51] = ue(b[47]), w[52] = ue(b[50]), w[53] = ue(b[56]), w[54] = ue(b[59]), w[55] = ue(b[61]), w[56] = ue(b[35]), w[57] = ue(b[36]), w[58] = ue(b[48]), w[59] = ue(b[49]), w[60] = ue(b[57]), w[61] = ue(b[58]), w[62] = ue(b[62]), w[63] = ue(b[63]);
    }
    function Fe(b) {
      const w = 0.5 * Math.cos(0.7853975), G = 0.5 * Math.cos(3.14159 / 16), ae = 0.5 * Math.cos(3.14159 / 8), ce = 0.5 * Math.cos(3 * 3.14159 / 16), fe = 0.5 * Math.cos(5 * 3.14159 / 16), xe = 0.5 * Math.cos(3 * 3.14159 / 8), we = 0.5 * Math.cos(7 * 3.14159 / 16);
      for (var Ue = new Array(4), De = new Array(4), Ce = new Array(4), le = new Array(4), ht = 0; ht < 8; ++ht) {
        var We = ht * 8;
        Ue[0] = ae * b[We + 2], Ue[1] = xe * b[We + 2], Ue[2] = ae * b[We + 6], Ue[3] = xe * b[We + 6], De[0] = G * b[We + 1] + ce * b[We + 3] + fe * b[We + 5] + we * b[We + 7], De[1] = ce * b[We + 1] - we * b[We + 3] - G * b[We + 5] - fe * b[We + 7], De[2] = fe * b[We + 1] - G * b[We + 3] + we * b[We + 5] + ce * b[We + 7], De[3] = we * b[We + 1] - fe * b[We + 3] + ce * b[We + 5] - G * b[We + 7], Ce[0] = w * (b[We + 0] + b[We + 4]), Ce[3] = w * (b[We + 0] - b[We + 4]), Ce[1] = Ue[0] + Ue[3], Ce[2] = Ue[1] - Ue[2], le[0] = Ce[0] + Ce[1], le[1] = Ce[3] + Ce[2], le[2] = Ce[3] - Ce[2], le[3] = Ce[0] - Ce[1], b[We + 0] = le[0] + De[0], b[We + 1] = le[1] + De[1], b[We + 2] = le[2] + De[2], b[We + 3] = le[3] + De[3], b[We + 4] = le[3] - De[3], b[We + 5] = le[2] - De[2], b[We + 6] = le[1] - De[1], b[We + 7] = le[0] - De[0];
      }
      for (var Ie = 0; Ie < 8; ++Ie) Ue[0] = ae * b[16 + Ie], Ue[1] = xe * b[16 + Ie], Ue[2] = ae * b[48 + Ie], Ue[3] = xe * b[48 + Ie], De[0] = G * b[8 + Ie] + ce * b[24 + Ie] + fe * b[40 + Ie] + we * b[56 + Ie], De[1] = ce * b[8 + Ie] - we * b[24 + Ie] - G * b[40 + Ie] - fe * b[56 + Ie], De[2] = fe * b[8 + Ie] - G * b[24 + Ie] + we * b[40 + Ie] + ce * b[56 + Ie], De[3] = we * b[8 + Ie] - fe * b[24 + Ie] + ce * b[40 + Ie] - G * b[56 + Ie], Ce[0] = w * (b[Ie] + b[32 + Ie]), Ce[3] = w * (b[Ie] - b[32 + Ie]), Ce[1] = Ue[0] + Ue[3], Ce[2] = Ue[1] - Ue[2], le[0] = Ce[0] + Ce[1], le[1] = Ce[3] + Ce[2], le[2] = Ce[3] - Ce[2], le[3] = Ce[0] - Ce[1], b[0 + Ie] = le[0] + De[0], b[8 + Ie] = le[1] + De[1], b[16 + Ie] = le[2] + De[2], b[24 + Ie] = le[3] + De[3], b[32 + Ie] = le[3] - De[3], b[40 + Ie] = le[2] - De[2], b[48 + Ie] = le[1] - De[1], b[56 + Ie] = le[0] - De[0];
    }
    function je(b) {
      for (var w = 0; w < 64; ++w) {
        var G = b[0][w], ae = b[1][w], ce = b[2][w];
        b[0][w] = G + 1.5747 * ce, b[1][w] = G - 0.1873 * ae - 0.4682 * ce, b[2][w] = G + 1.8556 * ae;
      }
    }
    function _e(b, w, G) {
      for (var ae = 0; ae < 64; ++ae) w[G + ae] = rr.toHalfFloat(rt(b[ae]));
    }
    function rt(b) {
      return b <= 1 ? Math.sign(b) * Math.pow(Math.abs(b), 2.2) : Math.sign(b) * Math.pow(Y, Math.abs(b) - 1);
    }
    function Ge(b) {
      return new DataView(b.array.buffer, b.offset.value, b.size);
    }
    function Le(b) {
      var w = b.viewer.buffer.slice(b.offset.value, b.offset.value + b.size), G = new Uint8Array(Ne(w)), ae = new Uint8Array(G.length);
      return Je(G), Ye(G, ae), new DataView(ae.buffer);
    }
    function Be(b) {
      var w = b.array.slice(b.offset.value, b.offset.value + b.size), G = Us(w), ae = new Uint8Array(G.length);
      return Je(G), Ye(G, ae), new DataView(ae.buffer);
    }
    function gt(b) {
      for (var w = b.viewer, G = { value: b.offset.value }, ae = new Uint16Array(b.width * b.scanlineBlockSize * (b.channels * b.type)), ce = new Uint8Array(8192), fe = 0, xe = new Array(b.channels), we = 0; we < b.channels; we++) xe[we] = {}, xe[we].start = fe, xe[we].end = xe[we].start, xe[we].nx = b.width, xe[we].ny = b.lines, xe[we].size = b.type, fe += xe[we].nx * xe[we].ny * xe[we].size;
      var Ue = ut(w, G), De = ut(w, G);
      if (De >= 8192) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      if (Ue <= De) for (var we = 0; we < De - Ue + 1; we++) ce[we + Ue] = F(w, G);
      var Ce = new Uint16Array(65536), le = I(ce, Ce), ht = ke(w, G);
      be(b.array, w, G, ht, ae, fe);
      for (var we = 0; we < b.channels; ++we) for (var We = xe[we], Ie = 0; Ie < xe[we].size; ++Ie) Oe(ae, We.start + Ie, We.nx, We.size, We.ny, We.nx * We.size, le);
      Ee(Ce, ae, fe);
      for (var tt = 0, dt = new Uint8Array(ae.buffer.byteLength), Lt = 0; Lt < b.lines; Lt++) for (var Ct = 0; Ct < b.channels; Ct++) {
        var We = xe[Ct], Wt = We.nx * We.size, pn = new Uint8Array(ae.buffer, We.end * 2, Wt * 2);
        dt.set(pn, tt), tt += Wt * 2, We.end += Wt;
      }
      return new DataView(dt.buffer);
    }
    function He(b) {
      var w = b.array.slice(b.offset.value, b.offset.value + b.size), G = Us(w);
      const ae = b.lines * b.channels * b.width, ce = b.type == 1 ? new Uint16Array(ae) : new Uint32Array(ae);
      let fe = 0, xe = 0;
      const we = new Array(4);
      for (let Ue = 0; Ue < b.lines; Ue++) for (let De = 0; De < b.channels; De++) {
        let Ce = 0;
        switch (b.type) {
          case 1:
            we[0] = fe, we[1] = we[0] + b.width, fe = we[1] + b.width;
            for (let le = 0; le < b.width; ++le) {
              const ht = G[we[0]++] << 8 | G[we[1]++];
              Ce += ht, ce[xe] = Ce, xe++;
            }
            break;
          case 2:
            we[0] = fe, we[1] = we[0] + b.width, we[2] = we[1] + b.width, fe = we[2] + b.width;
            for (let le = 0; le < b.width; ++le) {
              const ht = G[we[0]++] << 24 | G[we[1]++] << 16 | G[we[2]++] << 8;
              Ce += ht, ce[xe] = Ce, xe++;
            }
            break;
        }
      }
      return new DataView(ce.buffer);
    }
    function Qe(b) {
      var w = b.viewer, G = { value: b.offset.value }, ae = new Uint8Array(b.width * b.lines * (b.channels * b.type * 2)), ce = { version: ye(w, G), unknownUncompressedSize: ye(w, G), unknownCompressedSize: ye(w, G), acCompressedSize: ye(w, G), dcCompressedSize: ye(w, G), rleCompressedSize: ye(w, G), rleUncompressedSize: ye(w, G), rleRawSize: ye(w, G), totalAcUncompressedCount: ye(w, G), totalDcUncompressedCount: ye(w, G), acCompression: ye(w, G) };
      if (ce.version < 2) throw "EXRLoader.parse: " + jn.compression + " version " + ce.version + " is unsupported";
      for (var fe = new Array(), xe = ut(w, G) - 2; xe > 0; ) {
        var we = $e(w.buffer, G), Ue = F(w, G), De = Ue >> 2 & 3, Ce = (Ue >> 4) - 1, le = new Int8Array([Ce])[0], ht = F(w, G);
        fe.push({ name: we, index: le, type: ht, compression: De }), xe -= we.length + 3;
      }
      for (var We = jn.channels, Ie = new Array(b.channels), tt = 0; tt < b.channels; ++tt) {
        var dt = Ie[tt] = {}, Lt = We[tt];
        dt.name = Lt.name, dt.compression = 0, dt.decoded = false, dt.type = Lt.pixelType, dt.pLinear = Lt.pLinear, dt.width = b.width, dt.height = b.lines;
      }
      for (var Ct = { idx: new Array(3) }, Wt = 0; Wt < b.channels; ++Wt) for (var dt = Ie[Wt], tt = 0; tt < fe.length; ++tt) {
        var pn = fe[tt];
        dt.name == pn.name && (dt.compression = pn.compression, pn.index >= 0 && (Ct.idx[pn.index] = Wt), dt.offset = Wt);
      }
      if (ce.acCompressedSize > 0) switch (ce.acCompression) {
        case 0:
          var bt = new Uint16Array(ce.totalAcUncompressedCount);
          be(b.array, w, G, ce.acCompressedSize, bt, ce.totalAcUncompressedCount);
          break;
        case 1:
          var Tt = b.array.slice(G.value, G.value + ce.totalAcUncompressedCount), xn = Us(Tt), bt = new Uint16Array(xn.buffer);
          G.value += ce.totalAcUncompressedCount;
          break;
      }
      if (ce.dcCompressedSize > 0) {
        var Ot = { array: b.array, offset: G, size: ce.dcCompressedSize }, Mn = new Uint16Array(Be(Ot).buffer);
        G.value += ce.dcCompressedSize;
      }
      if (ce.rleRawSize > 0) {
        var Tt = b.array.slice(G.value, G.value + ce.rleCompressedSize), xn = Us(Tt), wa = Ne(xn.buffer);
        G.value += ce.rleCompressedSize;
      }
      for (var sn = 0, zt = new Array(Ie.length), tt = 0; tt < zt.length; ++tt) zt[tt] = new Array();
      for (var en = 0; en < b.lines; ++en) for (var jt = 0; jt < Ie.length; ++jt) zt[jt].push(sn), sn += Ie[jt].width * b.type * 2;
      Ve(Ct, zt, Ie, bt, Mn, ae);
      for (var tt = 0; tt < Ie.length; ++tt) {
        var dt = Ie[tt];
        if (!dt.decoded) switch (dt.compression) {
          case 2:
            for (var at = 0, Tn = 0, en = 0; en < b.lines; ++en) {
              for (var qn = zt[tt][at], un = 0; un < dt.width; ++un) {
                for (var An = 0; An < 2 * dt.type; ++An) ae[qn++] = wa[Tn + An * dt.width * dt.height];
                Tn++;
              }
              at++;
            }
            break;
          case 1:
          default:
            throw "EXRLoader.parse: unsupported channel compression";
        }
      }
      return new DataView(ae.buffer);
    }
    function $e(b, w) {
      for (var G = new Uint8Array(b), ae = 0; G[w.value + ae] != 0; ) ae += 1;
      var ce = new TextDecoder().decode(G.slice(w.value, w.value + ae));
      return w.value = w.value + ae + 1, ce;
    }
    function ct(b, w, G) {
      var ae = new TextDecoder().decode(new Uint8Array(b).slice(w.value, w.value + G));
      return w.value = w.value + G, ae;
    }
    function Rt(b, w) {
      var G = ot(b, w), ae = ke(b, w);
      return [G, ae];
    }
    function kt(b, w) {
      var G = ke(b, w), ae = ke(b, w);
      return [G, ae];
    }
    function ot(b, w) {
      var G = b.getInt32(w.value, true);
      return w.value = w.value + 4, G;
    }
    function ke(b, w) {
      var G = b.getUint32(w.value, true);
      return w.value = w.value + 4, G;
    }
    function Xe(b, w) {
      var G = b[w.value];
      return w.value = w.value + 1, G;
    }
    function F(b, w) {
      var G = b.getUint8(w.value);
      return w.value = w.value + 1, G;
    }
    const ye = function(b, w) {
      let G;
      return "getBigInt64" in DataView.prototype ? G = Number(b.getBigInt64(w.value, true)) : G = b.getUint32(w.value + 4, true) + Number(b.getUint32(w.value, true) << 32), w.value += 8, G;
    };
    function Re(b, w) {
      var G = b.getFloat32(w.value, true);
      return w.value += 4, G;
    }
    function Pe(b, w) {
      return rr.toHalfFloat(Re(b, w));
    }
    function ue(b) {
      var w = (b & 31744) >> 10, G = b & 1023;
      return (b >> 15 ? -1 : 1) * (w ? w === 31 ? G ? NaN : 1 / 0 : Math.pow(2, w - 15) * (1 + G / 1024) : 6103515625e-14 * (G / 1024));
    }
    function ut(b, w) {
      var G = b.getUint16(w.value, true);
      return w.value += 2, G;
    }
    function ln(b, w) {
      return ue(ut(b, w));
    }
    function yt(b, w, G, ae) {
      for (var ce = G.value, fe = []; G.value < ce + ae - 1; ) {
        var xe = $e(w, G), we = ot(b, G), Ue = F(b, G);
        G.value += 3;
        var De = ot(b, G), Ce = ot(b, G);
        fe.push({ name: xe, pixelType: we, pLinear: Ue, xSampling: De, ySampling: Ce });
      }
      return G.value += 1, fe;
    }
    function vt(b, w) {
      var G = Re(b, w), ae = Re(b, w), ce = Re(b, w), fe = Re(b, w), xe = Re(b, w), we = Re(b, w), Ue = Re(b, w), De = Re(b, w);
      return { redX: G, redY: ae, greenX: ce, greenY: fe, blueX: xe, blueY: we, whiteX: Ue, whiteY: De };
    }
    function St(b, w) {
      var G = ["NO_COMPRESSION", "RLE_COMPRESSION", "ZIPS_COMPRESSION", "ZIP_COMPRESSION", "PIZ_COMPRESSION", "PXR24_COMPRESSION", "B44_COMPRESSION", "B44A_COMPRESSION", "DWAA_COMPRESSION", "DWAB_COMPRESSION"], ae = F(b, w);
      return G[ae];
    }
    function _t(b, w) {
      var G = ke(b, w), ae = ke(b, w), ce = ke(b, w), fe = ke(b, w);
      return { xMin: G, yMin: ae, xMax: ce, yMax: fe };
    }
    function it(b, w) {
      var G = ["INCREASING_Y"], ae = F(b, w);
      return G[ae];
    }
    function Mt(b, w) {
      var G = Re(b, w), ae = Re(b, w);
      return [G, ae];
    }
    function Yt(b, w) {
      var G = Re(b, w), ae = Re(b, w), ce = Re(b, w);
      return [G, ae, ce];
    }
    function $t(b, w, G, ae, ce) {
      if (ae === "string" || ae === "stringvector" || ae === "iccProfile") return ct(w, G, ce);
      if (ae === "chlist") return yt(b, w, G, ce);
      if (ae === "chromaticities") return vt(b, G);
      if (ae === "compression") return St(b, G);
      if (ae === "box2i") return _t(b, G);
      if (ae === "lineOrder") return it(b, G);
      if (ae === "float") return Re(b, G);
      if (ae === "v2f") return Mt(b, G);
      if (ae === "v3f") return Yt(b, G);
      if (ae === "int") return ot(b, G);
      if (ae === "rational") return Rt(b, G);
      if (ae === "timecode") return kt(b, G);
      if (ae === "preview") return G.value += ce, "skipped";
      G.value += ce;
    }
    function rn(b, w, G) {
      const ae = {};
      if (b.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      ae.version = b.getUint8(4);
      const ce = b.getUint8(5);
      ae.spec = { singleTile: !!(ce & 2), longName: !!(ce & 4), deepFormat: !!(ce & 8), multiPart: !!(ce & 16) }, G.value = 8;
      for (var fe = true; fe; ) {
        var xe = $e(w, G);
        if (xe == 0) fe = false;
        else {
          var we = $e(w, G), Ue = ke(b, G), De = $t(b, w, G, we, Ue);
          De === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${we}'.`) : ae[xe] = De;
        }
      }
      if ((ce & -5) != 0) throw console.error("EXRHeader:", ae), "THREE.EXRLoader: provided file is currently unsupported.";
      return ae;
    }
    function Hn(b, w, G, ae, ce) {
      const fe = { size: 0, viewer: w, array: G, offset: ae, width: b.dataWindow.xMax - b.dataWindow.xMin + 1, height: b.dataWindow.yMax - b.dataWindow.yMin + 1, channels: b.channels.length, bytesPerLine: null, lines: null, inputSize: null, type: b.channels[0].pixelType, uncompress: null, getter: null, format: null, [to ? "colorSpace" : "encoding"]: null };
      switch (b.compression) {
        case "NO_COMPRESSION":
          fe.lines = 1, fe.uncompress = Ge;
          break;
        case "RLE_COMPRESSION":
          fe.lines = 1, fe.uncompress = Le;
          break;
        case "ZIPS_COMPRESSION":
          fe.lines = 1, fe.uncompress = Be;
          break;
        case "ZIP_COMPRESSION":
          fe.lines = 16, fe.uncompress = Be;
          break;
        case "PIZ_COMPRESSION":
          fe.lines = 32, fe.uncompress = gt;
          break;
        case "PXR24_COMPRESSION":
          fe.lines = 16, fe.uncompress = He;
          break;
        case "DWAA_COMPRESSION":
          fe.lines = 32, fe.uncompress = Qe;
          break;
        case "DWAB_COMPRESSION":
          fe.lines = 256, fe.uncompress = Qe;
          break;
        default:
          throw "EXRLoader.parse: " + b.compression + " is unsupported";
      }
      if (fe.scanlineBlockSize = fe.lines, fe.type == 1) switch (ce) {
        case Xa:
          fe.getter = ln, fe.inputSize = 2;
          break;
        case fa:
          fe.getter = ut, fe.inputSize = 2;
          break;
      }
      else if (fe.type == 2) switch (ce) {
        case Xa:
          fe.getter = Re, fe.inputSize = 4;
          break;
        case fa:
          fe.getter = Pe, fe.inputSize = 4;
      }
      else throw "EXRLoader.parse: unsupported pixelType " + fe.type + " for " + b.compression + ".";
      fe.blockCount = (b.dataWindow.yMax + 1) / fe.scanlineBlockSize;
      for (var xe = 0; xe < fe.blockCount; xe++) ye(w, ae);
      fe.outputChannels = fe.channels == 3 ? 4 : fe.channels;
      const we = fe.width * fe.height * fe.outputChannels;
      switch (ce) {
        case Xa:
          fe.byteArray = new Float32Array(we), fe.channels < fe.outputChannels && fe.byteArray.fill(1, 0, we);
          break;
        case fa:
          fe.byteArray = new Uint16Array(we), fe.channels < fe.outputChannels && fe.byteArray.fill(15360, 0, we);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", ce);
          break;
      }
      return fe.bytesPerLine = fe.width * fe.inputSize * fe.channels, fe.outputChannels == 4 ? fe.format = ho : fe.format = Rp, to ? fe.colorSpace = "srgb-linear" : fe.encoding = 3e3, fe;
    }
    const Fn = new DataView(l), Qn = new Uint8Array(l), wn = { value: 0 }, jn = rn(Fn, l, wn), ft = Hn(jn, Fn, Qn, wn, this.type), It = { value: 0 }, Pt = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let b = 0; b < ft.height / ft.scanlineBlockSize; b++) {
      const w = ke(Fn, wn);
      ft.size = ke(Fn, wn), ft.lines = w + ft.scanlineBlockSize > ft.height ? ft.height - w : ft.scanlineBlockSize;
      const ae = ft.size < ft.lines * ft.bytesPerLine ? ft.uncompress(ft) : Ge(ft);
      wn.value += ft.size;
      for (let ce = 0; ce < ft.scanlineBlockSize; ce++) {
        const fe = ce + b * ft.scanlineBlockSize;
        if (fe >= ft.height) break;
        for (let xe = 0; xe < ft.channels; xe++) {
          const we = Pt[jn.channels[xe].name];
          for (let Ue = 0; Ue < ft.width; Ue++) {
            It.value = (ce * (ft.channels * ft.width) + xe * ft.width + Ue) * ft.inputSize;
            const De = (ft.height - 1 - fe) * (ft.width * ft.outputChannels) + Ue * ft.outputChannels + we;
            ft.byteArray[De] = ft.getter(ae, It);
          }
        }
      }
    }
    return { header: jn, width: ft.width, height: ft.height, data: ft.byteArray, format: ft.format, [to ? "colorSpace" : "encoding"]: ft[to ? "colorSpace" : "encoding"], type: this.type };
  }
  setDataType(l) {
    return this.type = l, this;
  }
  load(l, v, s, r) {
    function i(h, f) {
      to ? h.colorSpace = f.colorSpace : h.encoding = f.encoding, h.minFilter = ta, h.magFilter = ta, h.generateMipmaps = false, h.flipY = false, v && v(h, f);
    }
    return super.load(l, i, s, r);
  }
}
const bm = new po(), Cs = new Ae();
class bf extends Im {
  constructor() {
    super(), this.isLineSegmentsGeometry = true, this.type = "LineSegmentsGeometry";
    const l = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], v = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], s = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(s), this.setAttribute("position", new oo(l, 3)), this.setAttribute("uv", new oo(v, 2));
  }
  applyMatrix4(l) {
    const v = this.attributes.instanceStart, s = this.attributes.instanceEnd;
    return v !== void 0 && (v.applyMatrix4(l), s.applyMatrix4(l), v.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(l) {
    let v;
    l instanceof Float32Array ? v = l : Array.isArray(l) && (v = new Float32Array(l));
    const s = new nf(v, 6, 1);
    return this.setAttribute("instanceStart", new or(s, 3, 0)), this.setAttribute("instanceEnd", new or(s, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(l, v = 3) {
    let s;
    l instanceof Float32Array ? s = l : Array.isArray(l) && (s = new Float32Array(l));
    const r = new nf(s, v * 2, 1);
    return this.setAttribute("instanceColorStart", new or(r, v, 0)), this.setAttribute("instanceColorEnd", new or(r, v, v)), this;
  }
  fromWireframeGeometry(l) {
    return this.setPositions(l.attributes.position.array), this;
  }
  fromEdgesGeometry(l) {
    return this.setPositions(l.attributes.position.array), this;
  }
  fromMesh(l) {
    return this.fromWireframeGeometry(new Lp(l.geometry)), this;
  }
  fromLineSegments(l) {
    const v = l.geometry;
    return this.setPositions(v.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new po());
    const l = this.attributes.instanceStart, v = this.attributes.instanceEnd;
    l !== void 0 && v !== void 0 && (this.boundingBox.setFromBufferAttribute(l), bm.setFromBufferAttribute(v), this.boundingBox.union(bm));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new pf()), this.boundingBox === null && this.computeBoundingBox();
    const l = this.attributes.instanceStart, v = this.attributes.instanceEnd;
    if (l !== void 0 && v !== void 0) {
      const s = this.boundingSphere.center;
      this.boundingBox.getCenter(s);
      let r = 0;
      for (let i = 0, h = l.count; i < h; i++) Cs.fromBufferAttribute(l, i), r = Math.max(r, s.distanceToSquared(Cs)), Cs.fromBufferAttribute(v, i), r = Math.max(r, s.distanceToSquared(Cs));
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
  applyMatrix(l) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(l);
  }
}
class o0 extends bf {
  constructor() {
    super(), this.isLineGeometry = true, this.type = "LineGeometry";
  }
  setPositions(l) {
    const v = l.length - 3, s = new Float32Array(2 * v);
    for (let r = 0; r < v; r += 3) s[2 * r] = l[r], s[2 * r + 1] = l[r + 1], s[2 * r + 2] = l[r + 2], s[2 * r + 3] = l[r + 3], s[2 * r + 4] = l[r + 4], s[2 * r + 5] = l[r + 5];
    return super.setPositions(s), this;
  }
  setColors(l, v = 3) {
    const s = l.length - v, r = new Float32Array(2 * s);
    if (v === 3) for (let i = 0; i < s; i += v) r[2 * i] = l[i], r[2 * i + 1] = l[i + 1], r[2 * i + 2] = l[i + 2], r[2 * i + 3] = l[i + 3], r[2 * i + 4] = l[i + 4], r[2 * i + 5] = l[i + 5];
    else for (let i = 0; i < s; i += v) r[2 * i] = l[i], r[2 * i + 1] = l[i + 1], r[2 * i + 2] = l[i + 2], r[2 * i + 3] = l[i + 3], r[2 * i + 4] = l[i + 4], r[2 * i + 5] = l[i + 5], r[2 * i + 6] = l[i + 6], r[2 * i + 7] = l[i + 7];
    return super.setColors(r, v), this;
  }
  fromLine(l) {
    const v = l.geometry;
    return this.setPositions(v.attributes.position.array), this;
  }
}
class Sf extends Yi {
  constructor(l) {
    super({ type: "LineMaterial", uniforms: js.clone(js.merge([tf.common, tf.fog, { worldUnits: { value: 1 }, linewidth: { value: 1 }, resolution: { value: new fn(1, 1) }, dashOffset: { value: 0 }, dashScale: { value: 1 }, dashSize: { value: 1 }, gapSize: { value: 1 } }])), vertexShader: `
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`, fragmentShader: `
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Xs >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`, clipping: true }), this.isLineMaterial = true, this.onBeforeCompile = function() {
      this.transparent ? this.defines.USE_LINE_COLOR_ALPHA = "1" : delete this.defines.USE_LINE_COLOR_ALPHA;
    }, Object.defineProperties(this, { color: { enumerable: true, get: function() {
      return this.uniforms.diffuse.value;
    }, set: function(v) {
      this.uniforms.diffuse.value = v;
    } }, worldUnits: { enumerable: true, get: function() {
      return "WORLD_UNITS" in this.defines;
    }, set: function(v) {
      v === true ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
    } }, linewidth: { enumerable: true, get: function() {
      return this.uniforms.linewidth.value;
    }, set: function(v) {
      this.uniforms.linewidth.value = v;
    } }, dashed: { enumerable: true, get: function() {
      return "USE_DASH" in this.defines;
    }, set(v) {
      !!v != "USE_DASH" in this.defines && (this.needsUpdate = true), v === true ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
    } }, dashScale: { enumerable: true, get: function() {
      return this.uniforms.dashScale.value;
    }, set: function(v) {
      this.uniforms.dashScale.value = v;
    } }, dashSize: { enumerable: true, get: function() {
      return this.uniforms.dashSize.value;
    }, set: function(v) {
      this.uniforms.dashSize.value = v;
    } }, dashOffset: { enumerable: true, get: function() {
      return this.uniforms.dashOffset.value;
    }, set: function(v) {
      this.uniforms.dashOffset.value = v;
    } }, gapSize: { enumerable: true, get: function() {
      return this.uniforms.gapSize.value;
    }, set: function(v) {
      this.uniforms.gapSize.value = v;
    } }, opacity: { enumerable: true, get: function() {
      return this.uniforms.opacity.value;
    }, set: function(v) {
      this.uniforms.opacity.value = v;
    } }, resolution: { enumerable: true, get: function() {
      return this.uniforms.resolution.value;
    }, set: function(v) {
      this.uniforms.resolution.value.copy(v);
    } }, alphaToCoverage: { enumerable: true, get: function() {
      return "USE_ALPHA_TO_COVERAGE" in this.defines;
    }, set: function(v) {
      !!v != "USE_ALPHA_TO_COVERAGE" in this.defines && (this.needsUpdate = true), v === true ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = true) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = false);
    } } }), this.setValues(l);
  }
}
const Qc = new Xi(), Sm = new Ae(), _m = new Ae(), Ln = new Xi(), Bn = new Xi(), ja = new Xi(), qc = new Ae(), Ic = new fr(), Gn = new Bp(), Em = new Ae(), Os = new po(), zs = new pf(), ka = new Xi();
let Ya, ml;
function wm(p, l, v) {
  return ka.set(0, 0, -l, 1).applyMatrix4(p.projectionMatrix), ka.multiplyScalar(1 / ka.w), ka.x = ml / v.width, ka.y = ml / v.height, ka.applyMatrix4(p.projectionMatrixInverse), ka.multiplyScalar(1 / ka.w), Math.abs(Math.max(ka.x, ka.y));
}
function Sy(p, l) {
  const v = p.matrixWorld, s = p.geometry, r = s.attributes.instanceStart, i = s.attributes.instanceEnd, h = Math.min(s.instanceCount, r.count);
  for (let f = 0, c = h; f < c; f++) {
    Gn.start.fromBufferAttribute(r, f), Gn.end.fromBufferAttribute(i, f), Gn.applyMatrix4(v);
    const d = new Ae(), m = new Ae();
    Ya.distanceSqToSegment(Gn.start, Gn.end, m, d), m.distanceTo(d) < ml * 0.5 && l.push({ point: m, pointOnLine: d, distance: Ya.origin.distanceTo(m), object: p, face: null, faceIndex: f, uv: null, [e0]: null });
  }
}
function _y(p, l, v) {
  const s = l.projectionMatrix, i = p.material.resolution, h = p.matrixWorld, f = p.geometry, c = f.attributes.instanceStart, d = f.attributes.instanceEnd, m = Math.min(f.instanceCount, c.count), y = -l.near;
  Ya.at(1, ja), ja.w = 1, ja.applyMatrix4(l.matrixWorldInverse), ja.applyMatrix4(s), ja.multiplyScalar(1 / ja.w), ja.x *= i.x / 2, ja.y *= i.y / 2, ja.z = 0, qc.copy(ja), Ic.multiplyMatrices(l.matrixWorldInverse, h);
  for (let S = 0, E = m; S < E; S++) {
    if (Ln.fromBufferAttribute(c, S), Bn.fromBufferAttribute(d, S), Ln.w = 1, Bn.w = 1, Ln.applyMatrix4(Ic), Bn.applyMatrix4(Ic), Ln.z > y && Bn.z > y) continue;
    if (Ln.z > y) {
      const C = Ln.z - Bn.z, z = (Ln.z - y) / C;
      Ln.lerp(Bn, z);
    } else if (Bn.z > y) {
      const C = Bn.z - Ln.z, z = (Bn.z - y) / C;
      Bn.lerp(Ln, z);
    }
    Ln.applyMatrix4(s), Bn.applyMatrix4(s), Ln.multiplyScalar(1 / Ln.w), Bn.multiplyScalar(1 / Bn.w), Ln.x *= i.x / 2, Ln.y *= i.y / 2, Bn.x *= i.x / 2, Bn.y *= i.y / 2, Gn.start.copy(Ln), Gn.start.z = 0, Gn.end.copy(Bn), Gn.end.z = 0;
    const U = Gn.closestPointToPointParameter(qc, true);
    Gn.at(U, Em);
    const x = Pm.lerp(Ln.z, Bn.z, U), Q = x >= -1 && x <= 1, N = qc.distanceTo(Em) < ml * 0.5;
    if (Q && N) {
      Gn.start.fromBufferAttribute(c, S), Gn.end.fromBufferAttribute(d, S), Gn.start.applyMatrix4(h), Gn.end.applyMatrix4(h);
      const C = new Ae(), z = new Ae();
      Ya.distanceSqToSegment(Gn.start, Gn.end, z, C), v.push({ point: z, pointOnLine: C, distance: Ya.origin.distanceTo(z), object: p, face: null, faceIndex: S, uv: null, [e0]: null });
    }
  }
}
class s0 extends et {
  constructor(l = new bf(), v = new Sf({ color: Math.random() * 16777215 })) {
    super(l, v), this.isLineSegments2 = true, this.type = "LineSegments2";
  }
  computeLineDistances() {
    const l = this.geometry, v = l.attributes.instanceStart, s = l.attributes.instanceEnd, r = new Float32Array(2 * v.count);
    for (let h = 0, f = 0, c = v.count; h < c; h++, f += 2) Sm.fromBufferAttribute(v, h), _m.fromBufferAttribute(s, h), r[f] = f === 0 ? 0 : r[f - 1], r[f + 1] = r[f] + Sm.distanceTo(_m);
    const i = new nf(r, 2, 1);
    return l.setAttribute("instanceDistanceStart", new or(i, 1, 0)), l.setAttribute("instanceDistanceEnd", new or(i, 1, 1)), this;
  }
  raycast(l, v) {
    const s = this.material.worldUnits, r = l.camera;
    r === null && !s && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const i = l.params.Line2 !== void 0 && l.params.Line2.threshold || 0;
    Ya = l.ray;
    const h = this.matrixWorld, f = this.geometry, c = this.material;
    ml = c.linewidth + i, f.boundingSphere === null && f.computeBoundingSphere(), zs.copy(f.boundingSphere).applyMatrix4(h);
    let d;
    if (s) d = ml * 0.5;
    else {
      const y = Math.max(r.near, zs.distanceToPoint(Ya.origin));
      d = wm(r, y, c.resolution);
    }
    if (zs.radius += d, Ya.intersectsSphere(zs) === false) return;
    f.boundingBox === null && f.computeBoundingBox(), Os.copy(f.boundingBox).applyMatrix4(h);
    let m;
    if (s) m = ml * 0.5;
    else {
      const y = Math.max(r.near, Os.distanceToPoint(Ya.origin));
      m = wm(r, y, c.resolution);
    }
    Os.expandByScalar(m), Ya.intersectsBox(Os) !== false && (s ? Sy(this, v) : _y(this, r, v));
  }
  onBeforeRender(l) {
    const v = this.material.uniforms;
    v && v.resolution && (l.getViewport(Qc), this.material.uniforms.resolution.value.set(Qc.z, Qc.w));
  }
}
class Ey extends s0 {
  constructor(l = new o0(), v = new Sf({ color: Math.random() * 16777215 })) {
    super(l, v), this.isLine2 = true, this.type = "Line2";
  }
}
const wy = k.forwardRef(function({ points: l, color: v = 16777215, vertexColors: s, linewidth: r, lineWidth: i, segments: h, dashed: f, ...c }, d) {
  var m, y;
  const S = Et((Q) => Q.size), E = k.useMemo(() => h ? new s0() : new Ey(), [h]), [A] = k.useState(() => new Sf()), U = (s == null || (m = s[0]) == null ? void 0 : m.length) === 4 ? 4 : 3, x = k.useMemo(() => {
    const Q = h ? new bf() : new o0(), N = l.map((C) => {
      const z = Array.isArray(C);
      return C instanceof Ae || C instanceof Xi ? [C.x, C.y, C.z] : C instanceof fn ? [C.x, C.y, 0] : z && C.length === 3 ? [C[0], C[1], C[2]] : z && C.length === 2 ? [C[0], C[1], 0] : C;
    });
    if (Q.setPositions(N.flat()), s) {
      v = 16777215;
      const C = s.map((z) => z instanceof Zn ? z.toArray() : z);
      Q.setColors(C.flat(), U);
    }
    return Q;
  }, [l, h, s, U]);
  return k.useLayoutEffect(() => {
    E.computeLineDistances();
  }, [l, E]), k.useLayoutEffect(() => {
    f ? A.defines.USE_DASH = "" : delete A.defines.USE_DASH, A.needsUpdate = true;
  }, [f, A]), k.useEffect(() => () => {
    x.dispose(), A.dispose();
  }, [x]), k.createElement("primitive", Jt({ object: E, ref: d }, c), k.createElement("primitive", { object: x, attach: "geometry" }), k.createElement("primitive", Jt({ object: A, attach: "material", color: v, vertexColors: !!s, resolution: [S.width, S.height], linewidth: (y = r ?? i) !== null && y !== void 0 ? y : 1, dashed: f, transparent: U === 4 }, c)));
});
function xy() {
  var p = /* @__PURE__ */ Object.create(null);
  function l(r, i) {
    var h = r.id, f = r.name, c = r.dependencies;
    c === void 0 && (c = []);
    var d = r.init;
    d === void 0 && (d = function() {
    });
    var m = r.getTransferables;
    if (m === void 0 && (m = null), !p[h]) try {
      c = c.map(function(S) {
        return S && S.isWorkerModule && (l(S, function(E) {
          if (E instanceof Error) throw E;
        }), S = p[S.id].value), S;
      }), d = s("<" + f + ">.init", d), m && (m = s("<" + f + ">.getTransferables", m));
      var y = null;
      typeof d == "function" ? y = d.apply(void 0, c) : console.error("worker module init function failed to rehydrate"), p[h] = { id: h, value: y, getTransferables: m }, i(y);
    } catch (S) {
      S && S.noLog || console.error(S), i(S);
    }
  }
  function v(r, i) {
    var h, f = r.id, c = r.args;
    (!p[f] || typeof p[f].value != "function") && i(new Error("Worker module " + f + ": not found or its 'init' did not return a function"));
    try {
      var d = (h = p[f]).value.apply(h, c);
      d && typeof d.then == "function" ? d.then(m, function(y) {
        return i(y instanceof Error ? y : new Error("" + y));
      }) : m(d);
    } catch (y) {
      i(y);
    }
    function m(y) {
      try {
        var S = p[f].getTransferables && p[f].getTransferables(y);
        (!S || !Array.isArray(S) || !S.length) && (S = void 0), i(y, S);
      } catch (E) {
        console.error(E), i(E);
      }
    }
  }
  function s(r, i) {
    var h = void 0;
    self.troikaDefine = function(c) {
      return h = c;
    };
    var f = URL.createObjectURL(new Blob(["/** " + r.replace(/\*/g, "") + ` **/

troikaDefine(
` + i + `
)`], { type: "application/javascript" }));
    try {
      importScripts(f);
    } catch (c) {
      console.error(c);
    }
    return URL.revokeObjectURL(f), delete self.troikaDefine, h;
  }
  self.addEventListener("message", function(r) {
    var i = r.data, h = i.messageId, f = i.action, c = i.data;
    try {
      f === "registerModule" && l(c, function(d) {
        d instanceof Error ? postMessage({ messageId: h, success: false, error: d.message }) : postMessage({ messageId: h, success: true, result: { isCallable: typeof d == "function" } });
      }), f === "callModule" && v(c, function(d, m) {
        d instanceof Error ? postMessage({ messageId: h, success: false, error: d.message }) : postMessage({ messageId: h, success: true, result: d }, m || void 0);
      });
    } catch (d) {
      postMessage({ messageId: h, success: false, error: d.stack });
    }
  });
}
function My(p) {
  var l = function() {
    for (var v = [], s = arguments.length; s--; ) v[s] = arguments[s];
    return l._getInitResult().then(function(r) {
      if (typeof r == "function") return r.apply(void 0, v);
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  };
  return l._getInitResult = function() {
    var v = p.dependencies, s = p.init;
    v = Array.isArray(v) ? v.map(function(i) {
      return i && (i = i.onMainThread || i, i._getInitResult && (i = i._getInitResult())), i;
    }) : [];
    var r = Promise.all(v).then(function(i) {
      return s.apply(null, i);
    });
    return l._getInitResult = function() {
      return r;
    }, r;
  }, l;
}
var u0 = function() {
  var p = false;
  if (typeof window < "u" && typeof window.document < "u") try {
    var l = new Worker(URL.createObjectURL(new Blob([""], { type: "application/javascript" })));
    l.terminate(), p = true;
  } catch (v) {
    console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + v.message + "]");
  }
  return u0 = function() {
    return p;
  }, p;
}, Ty = 0, Ay = 0, Pc = false, uo = /* @__PURE__ */ Object.create(null), co = /* @__PURE__ */ Object.create(null), cf = /* @__PURE__ */ Object.create(null);
function dr(p) {
  if ((!p || typeof p.init != "function") && !Pc) throw new Error("requires `options.init` function");
  var l = p.dependencies, v = p.init, s = p.getTransferables, r = p.workerId, i = My(p);
  r == null && (r = "#default");
  var h = "workerModule" + ++Ty, f = p.name || h, c = null;
  l = l && l.map(function(m) {
    return typeof m == "function" && !m.workerModuleData && (Pc = true, m = dr({ workerId: r, name: "<" + f + "> function dependency: " + m.name, init: `function(){return (
` + Gs(m) + `
)}` }), Pc = false), m && m.workerModuleData && (m = m.workerModuleData), m;
  });
  function d() {
    for (var m = [], y = arguments.length; y--; ) m[y] = arguments[y];
    if (!u0()) return i.apply(void 0, m);
    if (!c) {
      c = xm(r, "registerModule", d.workerModuleData);
      var S = function() {
        c = null, co[r].delete(S);
      };
      (co[r] || (co[r] = /* @__PURE__ */ new Set())).add(S);
    }
    return c.then(function(E) {
      var A = E.isCallable;
      if (A) return xm(r, "callModule", { id: h, args: m });
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  }
  return d.workerModuleData = { isWorkerModule: true, id: h, name: f, dependencies: l, init: Gs(v), getTransferables: s && Gs(s) }, d.onMainThread = i, d;
}
function Uy(p) {
  co[p] && co[p].forEach(function(l) {
    l();
  }), uo[p] && (uo[p].terminate(), delete uo[p]);
}
function Gs(p) {
  var l = p.toString();
  return !/^function/.test(l) && /^\w+\s*\(/.test(l) && (l = "function " + l), l;
}
function Dy(p) {
  var l = uo[p];
  if (!l) {
    var v = Gs(xy);
    l = uo[p] = new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: " + p.replace(/\*/g, "") + ` **/

;(` + v + ")()"], { type: "application/javascript" }))), l.onmessage = function(s) {
      var r = s.data, i = r.messageId, h = cf[i];
      if (!h) throw new Error("WorkerModule response with empty or unknown messageId");
      delete cf[i], h(r);
    };
  }
  return l;
}
function xm(p, l, v) {
  return new Promise(function(s, r) {
    var i = ++Ay;
    cf[i] = function(h) {
      h.success ? s(h.result) : r(new Error("Error in worker " + l + " call: " + h.error));
    }, Dy(p).postMessage({ messageId: i, action: l, data: v });
  });
}
function c0() {
  var p = (function(l) {
    function v(re, W, T, B, V, M, K, ie) {
      var se = 1 - K;
      ie.x = se * se * re + 2 * se * K * T + K * K * V, ie.y = se * se * W + 2 * se * K * B + K * K * M;
    }
    function s(re, W, T, B, V, M, K, ie, se, pe) {
      var Oe = 1 - se;
      pe.x = Oe * Oe * Oe * re + 3 * Oe * Oe * se * T + 3 * Oe * se * se * V + se * se * se * K, pe.y = Oe * Oe * Oe * W + 3 * Oe * Oe * se * B + 3 * Oe * se * se * M + se * se * se * ie;
    }
    function r(re, W) {
      for (var T = /([MLQCZ])([^MLQCZ]*)/g, B, V, M, K, ie; B = T.exec(re); ) {
        var se = B[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(pe) {
          return parseFloat(pe);
        });
        switch (B[1]) {
          case "M":
            K = V = se[0], ie = M = se[1];
            break;
          case "L":
            (se[0] !== K || se[1] !== ie) && W("L", K, ie, K = se[0], ie = se[1]);
            break;
          case "Q": {
            W("Q", K, ie, K = se[2], ie = se[3], se[0], se[1]);
            break;
          }
          case "C": {
            W("C", K, ie, K = se[4], ie = se[5], se[0], se[1], se[2], se[3]);
            break;
          }
          case "Z":
            (K !== V || ie !== M) && W("L", K, ie, V, M);
            break;
        }
      }
    }
    function i(re, W, T) {
      T === void 0 && (T = 16);
      var B = { x: 0, y: 0 };
      r(re, function(V, M, K, ie, se, pe, Oe, ze, be) {
        switch (V) {
          case "L":
            W(M, K, ie, se);
            break;
          case "Q": {
            for (var Ee = M, Je = K, Ye = 1; Ye < T; Ye++) v(M, K, pe, Oe, ie, se, Ye / (T - 1), B), W(Ee, Je, B.x, B.y), Ee = B.x, Je = B.y;
            break;
          }
          case "C": {
            for (var Ne = M, Ve = K, Ze = 1; Ze < T; Ze++) s(M, K, pe, Oe, ze, be, ie, se, Ze / (T - 1), B), W(Ne, Ve, B.x, B.y), Ne = B.x, Ve = B.y;
            break;
          }
        }
      });
    }
    var h = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", f = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}", c = /* @__PURE__ */ new WeakMap(), d = { premultipliedAlpha: false, preserveDrawingBuffer: true, antialias: false, depth: false };
    function m(re, W) {
      var T = re.getContext ? re.getContext("webgl", d) : re, B = c.get(T);
      if (!B) {
        let Oe = function(Ne) {
          var Ve = M[Ne];
          if (!Ve && (Ve = M[Ne] = T.getExtension(Ne), !Ve)) throw new Error(Ne + " not supported");
          return Ve;
        }, ze = function(Ne, Ve) {
          var Ze = T.createShader(Ve);
          return T.shaderSource(Ze, Ne), T.compileShader(Ze), Ze;
        }, be = function(Ne, Ve, Ze, Me) {
          if (!K[Ne]) {
            var Fe = {}, je = {}, _e = T.createProgram();
            T.attachShader(_e, ze(Ve, T.VERTEX_SHADER)), T.attachShader(_e, ze(Ze, T.FRAGMENT_SHADER)), T.linkProgram(_e), K[Ne] = { program: _e, transaction: function(Ge) {
              T.useProgram(_e), Ge({ setUniform: function(Be, gt) {
                for (var He = [], Qe = arguments.length - 2; Qe-- > 0; ) He[Qe] = arguments[Qe + 2];
                var $e = je[gt] || (je[gt] = T.getUniformLocation(_e, gt));
                T["uniform" + Be].apply(T, [$e].concat(He));
              }, setAttribute: function(Be, gt, He, Qe, $e) {
                var ct = Fe[Be];
                ct || (ct = Fe[Be] = { buf: T.createBuffer(), loc: T.getAttribLocation(_e, Be), data: null }), T.bindBuffer(T.ARRAY_BUFFER, ct.buf), T.vertexAttribPointer(ct.loc, gt, T.FLOAT, false, 0, 0), T.enableVertexAttribArray(ct.loc), V ? T.vertexAttribDivisor(ct.loc, Qe) : Oe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(ct.loc, Qe), $e !== ct.data && (T.bufferData(T.ARRAY_BUFFER, $e, He), ct.data = $e);
              } });
            } };
          }
          K[Ne].transaction(Me);
        }, Ee = function(Ne, Ve) {
          se++;
          try {
            T.activeTexture(T.TEXTURE0 + se);
            var Ze = ie[Ne];
            Ze || (Ze = ie[Ne] = T.createTexture(), T.bindTexture(T.TEXTURE_2D, Ze), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MIN_FILTER, T.NEAREST), T.texParameteri(T.TEXTURE_2D, T.TEXTURE_MAG_FILTER, T.NEAREST)), T.bindTexture(T.TEXTURE_2D, Ze), Ve(Ze, se);
          } finally {
            se--;
          }
        }, Je = function(Ne, Ve, Ze) {
          var Me = T.createFramebuffer();
          pe.push(Me), T.bindFramebuffer(T.FRAMEBUFFER, Me), T.activeTexture(T.TEXTURE0 + Ve), T.bindTexture(T.TEXTURE_2D, Ne), T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, Ne, 0);
          try {
            Ze(Me);
          } finally {
            T.deleteFramebuffer(Me), T.bindFramebuffer(T.FRAMEBUFFER, pe[--pe.length - 1] || null);
          }
        }, Ye = function() {
          M = {}, K = {}, ie = {}, se = -1, pe.length = 0;
        };
        var V = typeof WebGL2RenderingContext < "u" && T instanceof WebGL2RenderingContext, M = {}, K = {}, ie = {}, se = -1, pe = [];
        T.canvas.addEventListener("webglcontextlost", function(Ne) {
          Ye(), Ne.preventDefault();
        }, false), c.set(T, B = { gl: T, isWebGL2: V, getExtension: Oe, withProgram: be, withTexture: Ee, withTextureFramebuffer: Je, handleContextLoss: Ye });
      }
      W(B);
    }
    function y(re, W, T, B, V, M, K, ie) {
      K === void 0 && (K = 15), ie === void 0 && (ie = null), m(re, function(se) {
        var pe = se.gl, Oe = se.withProgram, ze = se.withTexture;
        ze("copy", function(be, Ee) {
          pe.texImage2D(pe.TEXTURE_2D, 0, pe.RGBA, V, M, 0, pe.RGBA, pe.UNSIGNED_BYTE, W), Oe("copy", h, f, function(Je) {
            var Ye = Je.setUniform, Ne = Je.setAttribute;
            Ne("aUV", 2, pe.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), Ye("1i", "image", Ee), pe.bindFramebuffer(pe.FRAMEBUFFER, ie || null), pe.disable(pe.BLEND), pe.colorMask(K & 8, K & 4, K & 2, K & 1), pe.viewport(T, B, V, M), pe.scissor(T, B, V, M), pe.drawArrays(pe.TRIANGLES, 0, 3);
          });
        });
      });
    }
    function S(re, W, T) {
      var B = re.width, V = re.height;
      m(re, function(M) {
        var K = M.gl, ie = new Uint8Array(B * V * 4);
        K.readPixels(0, 0, B, V, K.RGBA, K.UNSIGNED_BYTE, ie), re.width = W, re.height = T, y(K, ie, 0, 0, B, V);
      });
    }
    var E = Object.freeze({ __proto__: null, withWebGLContext: m, renderImageData: y, resizeWebGLCanvasWithoutClearing: S });
    function A(re, W, T, B, V, M) {
      M === void 0 && (M = 1);
      var K = new Uint8Array(re * W), ie = B[2] - B[0], se = B[3] - B[1], pe = [];
      i(T, function(Ne, Ve, Ze, Me) {
        pe.push({ x1: Ne, y1: Ve, x2: Ze, y2: Me, minX: Math.min(Ne, Ze), minY: Math.min(Ve, Me), maxX: Math.max(Ne, Ze), maxY: Math.max(Ve, Me) });
      }), pe.sort(function(Ne, Ve) {
        return Ne.maxX - Ve.maxX;
      });
      for (var Oe = 0; Oe < re; Oe++) for (var ze = 0; ze < W; ze++) {
        var be = Je(B[0] + ie * (Oe + 0.5) / re, B[1] + se * (ze + 0.5) / W), Ee = Math.pow(1 - Math.abs(be) / V, M) / 2;
        be < 0 && (Ee = 1 - Ee), Ee = Math.max(0, Math.min(255, Math.round(Ee * 255))), K[ze * re + Oe] = Ee;
      }
      return K;
      function Je(Ne, Ve) {
        for (var Ze = 1 / 0, Me = 1 / 0, Fe = pe.length; Fe--; ) {
          var je = pe[Fe];
          if (je.maxX + Me <= Ne) break;
          if (Ne + Me > je.minX && Ve - Me < je.maxY && Ve + Me > je.minY) {
            var _e = Q(Ne, Ve, je.x1, je.y1, je.x2, je.y2);
            _e < Ze && (Ze = _e, Me = Math.sqrt(Ze));
          }
        }
        return Ye(Ne, Ve) && (Me = -Me), Me;
      }
      function Ye(Ne, Ve) {
        for (var Ze = 0, Me = pe.length; Me--; ) {
          var Fe = pe[Me];
          if (Fe.maxX <= Ne) break;
          var je = Fe.y1 > Ve != Fe.y2 > Ve && Ne < (Fe.x2 - Fe.x1) * (Ve - Fe.y1) / (Fe.y2 - Fe.y1) + Fe.x1;
          je && (Ze += Fe.y1 < Fe.y2 ? 1 : -1);
        }
        return Ze !== 0;
      }
    }
    function U(re, W, T, B, V, M, K, ie, se, pe) {
      M === void 0 && (M = 1), ie === void 0 && (ie = 0), se === void 0 && (se = 0), pe === void 0 && (pe = 0), x(re, W, T, B, V, M, K, null, ie, se, pe);
    }
    function x(re, W, T, B, V, M, K, ie, se, pe, Oe) {
      M === void 0 && (M = 1), se === void 0 && (se = 0), pe === void 0 && (pe = 0), Oe === void 0 && (Oe = 0);
      for (var ze = A(re, W, T, B, V, M), be = new Uint8Array(ze.length * 4), Ee = 0; Ee < ze.length; Ee++) be[Ee * 4 + Oe] = ze[Ee];
      y(K, be, se, pe, re, W, 1 << 3 - Oe, ie);
    }
    function Q(re, W, T, B, V, M) {
      var K = V - T, ie = M - B, se = K * K + ie * ie, pe = se ? Math.max(0, Math.min(1, ((re - T) * K + (W - B) * ie) / se)) : 0, Oe = re - (T + pe * K), ze = W - (B + pe * ie);
      return Oe * Oe + ze * ze;
    }
    var N = Object.freeze({ __proto__: null, generate: A, generateIntoCanvas: U, generateIntoFramebuffer: x }), C = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", z = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", O = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", L = new Float32Array([0, 0, 2, 0, 0, 2]), H = null, D = false, Y = {}, I = /* @__PURE__ */ new WeakMap();
    function me(re) {
      if (!D && !te(re)) throw new Error("WebGL generation not supported");
    }
    function j(re, W, T, B, V, M, K) {
      if (M === void 0 && (M = 1), K === void 0 && (K = null), !K && (K = H, !K)) {
        var ie = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
        if (!ie) throw new Error("OffscreenCanvas or DOM canvas not supported");
        K = H = ie.getContext("webgl", { depth: false });
      }
      me(K);
      var se = new Uint8Array(re * W * 4);
      m(K, function(be) {
        var Ee = be.gl, Je = be.withTexture, Ye = be.withTextureFramebuffer;
        Je("readable", function(Ne, Ve) {
          Ee.texImage2D(Ee.TEXTURE_2D, 0, Ee.RGBA, re, W, 0, Ee.RGBA, Ee.UNSIGNED_BYTE, null), Ye(Ne, Ve, function(Ze) {
            Z(re, W, T, B, V, M, Ee, Ze, 0, 0, 0), Ee.readPixels(0, 0, re, W, Ee.RGBA, Ee.UNSIGNED_BYTE, se);
          });
        });
      });
      for (var pe = new Uint8Array(re * W), Oe = 0, ze = 0; Oe < se.length; Oe += 4) pe[ze++] = se[Oe];
      return pe;
    }
    function J(re, W, T, B, V, M, K, ie, se, pe) {
      M === void 0 && (M = 1), ie === void 0 && (ie = 0), se === void 0 && (se = 0), pe === void 0 && (pe = 0), Z(re, W, T, B, V, M, K, null, ie, se, pe);
    }
    function Z(re, W, T, B, V, M, K, ie, se, pe, Oe) {
      M === void 0 && (M = 1), se === void 0 && (se = 0), pe === void 0 && (pe = 0), Oe === void 0 && (Oe = 0), me(K);
      var ze = [];
      i(T, function(be, Ee, Je, Ye) {
        ze.push(be, Ee, Je, Ye);
      }), ze = new Float32Array(ze), m(K, function(be) {
        var Ee = be.gl, Je = be.isWebGL2, Ye = be.getExtension, Ne = be.withProgram, Ve = be.withTexture, Ze = be.withTextureFramebuffer, Me = be.handleContextLoss;
        if (Ve("rawDistances", function(Fe, je) {
          (re !== Fe._lastWidth || W !== Fe._lastHeight) && Ee.texImage2D(Ee.TEXTURE_2D, 0, Ee.RGBA, Fe._lastWidth = re, Fe._lastHeight = W, 0, Ee.RGBA, Ee.UNSIGNED_BYTE, null), Ne("main", C, z, function(_e) {
            var rt = _e.setAttribute, Ge = _e.setUniform, Le = !Je && Ye("ANGLE_instanced_arrays"), Be = !Je && Ye("EXT_blend_minmax");
            rt("aUV", 2, Ee.STATIC_DRAW, 0, L), rt("aLineSegment", 4, Ee.DYNAMIC_DRAW, 1, ze), Ge.apply(void 0, ["4f", "uGlyphBounds"].concat(B)), Ge("1f", "uMaxDistance", V), Ge("1f", "uExponent", M), Ze(Fe, je, function(gt) {
              Ee.enable(Ee.BLEND), Ee.colorMask(true, true, true, true), Ee.viewport(0, 0, re, W), Ee.scissor(0, 0, re, W), Ee.blendFunc(Ee.ONE, Ee.ONE), Ee.blendEquationSeparate(Ee.FUNC_ADD, Je ? Ee.MAX : Be.MAX_EXT), Ee.clear(Ee.COLOR_BUFFER_BIT), Je ? Ee.drawArraysInstanced(Ee.TRIANGLES, 0, 3, ze.length / 4) : Le.drawArraysInstancedANGLE(Ee.TRIANGLES, 0, 3, ze.length / 4);
            });
          }), Ne("post", h, O, function(_e) {
            _e.setAttribute("aUV", 2, Ee.STATIC_DRAW, 0, L), _e.setUniform("1i", "tex", je), Ee.bindFramebuffer(Ee.FRAMEBUFFER, ie), Ee.disable(Ee.BLEND), Ee.colorMask(Oe === 0, Oe === 1, Oe === 2, Oe === 3), Ee.viewport(se, pe, re, W), Ee.scissor(se, pe, re, W), Ee.drawArrays(Ee.TRIANGLES, 0, 3);
          });
        }), Ee.isContextLost()) throw Me(), new Error("webgl context lost");
      });
    }
    function te(re) {
      var W = !re || re === H ? Y : re.canvas || re, T = I.get(W);
      if (T === void 0) {
        D = true;
        var B = null;
        try {
          var V = [97, 106, 97, 61, 99, 137, 118, 80, 80, 118, 137, 99, 61, 97, 106, 97], M = j(4, 4, "M8,8L16,8L24,24L16,24Z", [0, 0, 32, 32], 24, 1, re);
          T = M && V.length === M.length && M.every(function(K, ie) {
            return K === V[ie];
          }), T || (B = "bad trial run results", console.info(V, M));
        } catch (K) {
          T = false, B = K.message;
        }
        B && console.warn("WebGL SDF generation not supported:", B), D = false, I.set(W, T);
      }
      return T;
    }
    var q = Object.freeze({ __proto__: null, generate: j, generateIntoCanvas: J, generateIntoFramebuffer: Z, isSupported: te });
    function he(re, W, T, B, V, M) {
      V === void 0 && (V = Math.max(B[2] - B[0], B[3] - B[1]) / 2), M === void 0 && (M = 1);
      try {
        return j.apply(q, arguments);
      } catch (K) {
        return console.info("WebGL SDF generation failed, falling back to JS", K), A.apply(N, arguments);
      }
    }
    function Te(re, W, T, B, V, M, K, ie, se, pe) {
      V === void 0 && (V = Math.max(B[2] - B[0], B[3] - B[1]) / 2), M === void 0 && (M = 1), ie === void 0 && (ie = 0), se === void 0 && (se = 0), pe === void 0 && (pe = 0);
      try {
        return J.apply(q, arguments);
      } catch (Oe) {
        return console.info("WebGL SDF generation failed, falling back to JS", Oe), U.apply(N, arguments);
      }
    }
    return l.forEachPathCommand = r, l.generate = he, l.generateIntoCanvas = Te, l.javascript = N, l.pathToLineSegments = i, l.webgl = q, l.webglUtils = E, Object.defineProperty(l, "__esModule", { value: true }), l;
  })({});
  return p;
}
function Cy() {
  var p = (function(l) {
    var v = { R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73", EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9", ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2", ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj", AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u", CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b", B: "a,3,f+2,2v,690", S: "9,2,k", WS: "c,k,4f4,1vk+a,u,1j,335", ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i", BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1", NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n", AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d", LRO: "6ct", RLO: "6cu", LRE: "6cq", RLE: "6cr", PDF: "6cs", LRI: "6ee", RLI: "6ef", FSI: "6eg", PDI: "6eh" }, s = {}, r = {};
    s.L = 1, r[1] = "L", Object.keys(v).forEach(function(Me, Fe) {
      s[Me] = 1 << Fe + 1, r[s[Me]] = Me;
    }), Object.freeze(s);
    var i = s.LRI | s.RLI | s.FSI, h = s.L | s.R | s.AL, f = s.B | s.S | s.WS | s.ON | s.FSI | s.LRI | s.RLI | s.PDI, c = s.BN | s.RLE | s.LRE | s.RLO | s.LRO | s.PDF, d = s.S | s.WS | s.B | i | s.PDI | c, m = null;
    function y() {
      if (!m) {
        m = /* @__PURE__ */ new Map();
        var Me = function(je) {
          if (v.hasOwnProperty(je)) {
            var _e = 0;
            v[je].split(",").forEach(function(rt) {
              var Ge = rt.split("+"), Le = Ge[0], Be = Ge[1];
              Le = parseInt(Le, 36), Be = Be ? parseInt(Be, 36) : 0, m.set(_e += Le, s[je]);
              for (var gt = 0; gt < Be; gt++) m.set(++_e, s[je]);
            });
          }
        };
        for (var Fe in v) Me(Fe);
      }
    }
    function S(Me) {
      return y(), m.get(Me.codePointAt(0)) || s.L;
    }
    function E(Me) {
      return r[S(Me)];
    }
    var A = { pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1", canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye" };
    function U(Me, Fe) {
      var je = 36, _e = 0, rt = /* @__PURE__ */ new Map(), Ge = Fe && /* @__PURE__ */ new Map(), Le;
      return Me.split(",").forEach(function Be(gt) {
        if (gt.indexOf("+") !== -1) for (var He = +gt; He--; ) Be(Le);
        else {
          Le = gt;
          var Qe = gt.split(">"), $e = Qe[0], ct = Qe[1];
          $e = String.fromCodePoint(_e += parseInt($e, je)), ct = String.fromCodePoint(_e += parseInt(ct, je)), rt.set($e, ct), Fe && Ge.set(ct, $e);
        }
      }), { map: rt, reverseMap: Ge };
    }
    var x, Q, N;
    function C() {
      if (!x) {
        var Me = U(A.pairs, true), Fe = Me.map, je = Me.reverseMap;
        x = Fe, Q = je, N = U(A.canonical, false).map;
      }
    }
    function z(Me) {
      return C(), x.get(Me) || null;
    }
    function O(Me) {
      return C(), Q.get(Me) || null;
    }
    function L(Me) {
      return C(), N.get(Me) || null;
    }
    var H = s.L, D = s.R, Y = s.EN, I = s.ES, me = s.ET, j = s.AN, J = s.CS, Z = s.B, te = s.S, q = s.ON, he = s.BN, Te = s.NSM, re = s.AL, W = s.LRO, T = s.RLO, B = s.LRE, V = s.RLE, M = s.PDF, K = s.LRI, ie = s.RLI, se = s.FSI, pe = s.PDI;
    function Oe(Me, Fe) {
      for (var je = 125, _e = new Uint32Array(Me.length), rt = 0; rt < Me.length; rt++) _e[rt] = S(Me[rt]);
      var Ge = /* @__PURE__ */ new Map();
      function Le(Yn, na) {
        var Xn = _e[Yn];
        _e[Yn] = na, Ge.set(Xn, Ge.get(Xn) - 1), Xn & f && Ge.set(f, Ge.get(f) - 1), Ge.set(na, (Ge.get(na) || 0) + 1), na & f && Ge.set(f, (Ge.get(f) || 0) + 1);
      }
      for (var Be = new Uint8Array(Me.length), gt = /* @__PURE__ */ new Map(), He = [], Qe = null, $e = 0; $e < Me.length; $e++) Qe || He.push(Qe = { start: $e, end: Me.length - 1, level: Fe === "rtl" ? 1 : Fe === "ltr" ? 0 : Eo($e, false) }), _e[$e] & Z && (Qe.end = $e, Qe = null);
      for (var ct = V | B | T | W | i | pe | M | Z, Rt = function(Yn) {
        return Yn + (Yn & 1 ? 1 : 2);
      }, kt = function(Yn) {
        return Yn + (Yn & 1 ? 2 : 1);
      }, ot = 0; ot < He.length; ot++) {
        Qe = He[ot];
        var ke = [{ _level: Qe.level, _override: 0, _isolate: 0 }], Xe = void 0, F = 0, ye = 0, Re = 0;
        Ge.clear();
        for (var Pe = Qe.start; Pe <= Qe.end; Pe++) {
          var ue = _e[Pe];
          if (Xe = ke[ke.length - 1], Ge.set(ue, (Ge.get(ue) || 0) + 1), ue & f && Ge.set(f, (Ge.get(f) || 0) + 1), ue & ct) if (ue & (V | B)) {
            Be[Pe] = Xe._level;
            var ut = (ue === V ? kt : Rt)(Xe._level);
            ut <= je && !F && !ye ? ke.push({ _level: ut, _override: 0, _isolate: 0 }) : F || ye++;
          } else if (ue & (T | W)) {
            Be[Pe] = Xe._level;
            var ln = (ue === T ? kt : Rt)(Xe._level);
            ln <= je && !F && !ye ? ke.push({ _level: ln, _override: ue & T ? D : H, _isolate: 0 }) : F || ye++;
          } else if (ue & i) {
            ue & se && (ue = Eo(Pe + 1, true) === 1 ? ie : K), Be[Pe] = Xe._level, Xe._override && Le(Pe, Xe._override);
            var yt = (ue === ie ? kt : Rt)(Xe._level);
            yt <= je && F === 0 && ye === 0 ? (Re++, ke.push({ _level: yt, _override: 0, _isolate: 1, _isolInitIndex: Pe })) : F++;
          } else if (ue & pe) {
            if (F > 0) F--;
            else if (Re > 0) {
              for (ye = 0; !ke[ke.length - 1]._isolate; ) ke.pop();
              var vt = ke[ke.length - 1]._isolInitIndex;
              vt != null && (gt.set(vt, Pe), gt.set(Pe, vt)), ke.pop(), Re--;
            }
            Xe = ke[ke.length - 1], Be[Pe] = Xe._level, Xe._override && Le(Pe, Xe._override);
          } else ue & M ? (F === 0 && (ye > 0 ? ye-- : !Xe._isolate && ke.length > 1 && (ke.pop(), Xe = ke[ke.length - 1])), Be[Pe] = Xe._level) : ue & Z && (Be[Pe] = Qe.level);
          else Be[Pe] = Xe._level, Xe._override && ue !== he && Le(Pe, Xe._override);
        }
        for (var St = [], _t = null, it = Qe.start; it <= Qe.end; it++) {
          var Mt = _e[it];
          if (!(Mt & c)) {
            var Yt = Be[it], $t = Mt & i, rn = Mt === pe;
            _t && Yt === _t._level ? (_t._end = it, _t._endsWithIsolInit = $t) : St.push(_t = { _start: it, _end: it, _level: Yt, _startsWithPDI: rn, _endsWithIsolInit: $t });
          }
        }
        for (var Hn = [], Fn = 0; Fn < St.length; Fn++) {
          var Qn = St[Fn];
          if (!Qn._startsWithPDI || Qn._startsWithPDI && !gt.has(Qn._start)) {
            for (var wn = [_t = Qn], jn = void 0; _t && _t._endsWithIsolInit && (jn = gt.get(_t._end)) != null; ) for (var ft = Fn + 1; ft < St.length; ft++) if (St[ft]._start === jn) {
              wn.push(_t = St[ft]);
              break;
            }
            for (var It = [], Pt = 0; Pt < wn.length; Pt++) for (var b = wn[Pt], w = b._start; w <= b._end; w++) It.push(w);
            for (var G = Be[It[0]], ae = Qe.level, ce = It[0] - 1; ce >= 0; ce--) if (!(_e[ce] & c)) {
              ae = Be[ce];
              break;
            }
            var fe = It[It.length - 1], xe = Be[fe], we = Qe.level;
            if (!(_e[fe] & i)) {
              for (var Ue = fe + 1; Ue <= Qe.end; Ue++) if (!(_e[Ue] & c)) {
                we = Be[Ue];
                break;
              }
            }
            Hn.push({ _seqIndices: It, _sosType: Math.max(ae, G) % 2 ? D : H, _eosType: Math.max(we, xe) % 2 ? D : H });
          }
        }
        for (var De = 0; De < Hn.length; De++) {
          var Ce = Hn[De], le = Ce._seqIndices, ht = Ce._sosType, We = Ce._eosType, Ie = Be[le[0]] & 1 ? D : H;
          if (Ge.get(Te)) for (var tt = 0; tt < le.length; tt++) {
            var dt = le[tt];
            if (_e[dt] & Te) {
              for (var Lt = ht, Ct = tt - 1; Ct >= 0; Ct--) if (!(_e[le[Ct]] & c)) {
                Lt = _e[le[Ct]];
                break;
              }
              Le(dt, Lt & (i | pe) ? q : Lt);
            }
          }
          if (Ge.get(Y)) for (var Wt = 0; Wt < le.length; Wt++) {
            var pn = le[Wt];
            if (_e[pn] & Y) for (var Tt = Wt - 1; Tt >= -1; Tt--) {
              var xn = Tt === -1 ? ht : _e[le[Tt]];
              if (xn & h) {
                xn === re && Le(pn, j);
                break;
              }
            }
          }
          if (Ge.get(re)) for (var bt = 0; bt < le.length; bt++) {
            var Ot = le[bt];
            _e[Ot] & re && Le(Ot, D);
          }
          if (Ge.get(I) || Ge.get(J)) for (var Mn = 1; Mn < le.length - 1; Mn++) {
            var wa = le[Mn];
            if (_e[wa] & (I | J)) {
              for (var sn = 0, zt = 0, en = Mn - 1; en >= 0 && (sn = _e[le[en]], !!(sn & c)); en--) ;
              for (var jt = Mn + 1; jt < le.length && (zt = _e[le[jt]], !!(zt & c)); jt++) ;
              sn === zt && (_e[wa] === I ? sn === Y : sn & (Y | j)) && Le(wa, sn);
            }
          }
          if (Ge.get(Y)) for (var at = 0; at < le.length; at++) {
            var Tn = le[at];
            if (_e[Tn] & Y) {
              for (var qn = at - 1; qn >= 0 && _e[le[qn]] & (me | c); qn--) Le(le[qn], Y);
              for (at++; at < le.length && _e[le[at]] & (me | c | Y); at++) _e[le[at]] !== Y && Le(le[at], Y);
            }
          }
          if (Ge.get(me) || Ge.get(I) || Ge.get(J)) for (var un = 0; un < le.length; un++) {
            var An = le[un];
            if (_e[An] & (me | I | J)) {
              Le(An, q);
              for (var Zi = un - 1; Zi >= 0 && _e[le[Zi]] & c; Zi--) Le(le[Zi], q);
              for (var Qi = un + 1; Qi < le.length && _e[le[Qi]] & c; Qi++) Le(le[Qi], q);
            }
          }
          if (Ge.get(Y)) for (var Oa = 0, bo = ht; Oa < le.length; Oa++) {
            var vr = le[Oa], gl = _e[vr];
            gl & Y ? bo === H && Le(vr, H) : gl & h && (bo = gl);
          }
          if (Ge.get(f)) {
            var Va = D | Y | j, So = Va | H, yl = [];
            {
              for (var xa = [], kn = 0; kn < le.length; kn++) if (_e[le[kn]] & f) {
                var Za = Me[le[kn]], bl = void 0;
                if (z(Za) !== null) if (xa.length < 63) xa.push({ char: Za, seqIndex: kn });
                else break;
                else if ((bl = O(Za)) !== null) for (var ha = xa.length - 1; ha >= 0; ha--) {
                  var za = xa[ha].char;
                  if (za === bl || za === O(L(Za)) || z(L(za)) === Za) {
                    yl.push([xa[ha].seqIndex, kn]), xa.length = ha;
                    break;
                  }
                }
              }
              yl.sort(function(Yn, na) {
                return Yn[0] - na[0];
              });
            }
            for (var Sl = 0; Sl < yl.length; Sl++) {
              for (var _l = yl[Sl], qi = _l[0], Qa = _l[1], da = false, In = 0, qa = qi + 1; qa < Qa; qa++) {
                var Ma = le[qa];
                if (_e[Ma] & So) {
                  da = true;
                  var El = _e[Ma] & Va ? D : H;
                  if (El === Ie) {
                    In = El;
                    break;
                  }
                }
              }
              if (da && !In) {
                In = ht;
                for (var vi = qi - 1; vi >= 0; vi--) {
                  var mr = le[vi];
                  if (_e[mr] & So) {
                    var Ii = _e[mr] & Va ? D : H;
                    Ii !== Ie ? In = Ii : In = Ie;
                    break;
                  }
                }
              }
              if (In) {
                if (_e[le[qi]] = _e[le[Qa]] = In, In !== Ie) {
                  for (var Ra = qi + 1; Ra < le.length; Ra++) if (!(_e[le[Ra]] & c)) {
                    S(Me[le[Ra]]) & Te && (_e[le[Ra]] = In);
                    break;
                  }
                }
                if (In !== Ie) {
                  for (var mi = Qa + 1; mi < le.length; mi++) if (!(_e[le[mi]] & c)) {
                    S(Me[le[mi]]) & Te && (_e[le[mi]] = In);
                    break;
                  }
                }
              }
            }
            for (var cn = 0; cn < le.length; cn++) if (_e[le[cn]] & f) {
              for (var La = cn, pi = cn, Ia = ht, Pi = cn - 1; Pi >= 0; Pi--) if (_e[le[Pi]] & c) La = Pi;
              else {
                Ia = _e[le[Pi]] & Va ? D : H;
                break;
              }
              for (var wl = We, Pa = cn + 1; Pa < le.length; Pa++) if (_e[le[Pa]] & (f | c)) pi = Pa;
              else {
                wl = _e[le[Pa]] & Va ? D : H;
                break;
              }
              for (var Wa = La; Wa <= pi; Wa++) _e[le[Wa]] = Ia === wl ? Ia : Ie;
              cn = pi;
            }
          }
        }
        for (var Un = Qe.start; Un <= Qe.end; Un++) {
          var _o = Be[Un], xl = _e[Un];
          if (_o & 1 ? xl & (H | Y | j) && Be[Un]++ : xl & D ? Be[Un]++ : xl & (j | Y) && (Be[Un] += 2), xl & c && (Be[Un] = Un === 0 ? Qe.level : Be[Un - 1]), Un === Qe.end || S(Me[Un]) & (te | Z)) for (var Ml = Un; Ml >= 0 && S(Me[Ml]) & d; Ml--) Be[Ml] = Qe.level;
        }
      }
      return { levels: Be, paragraphs: He };
      function Eo(Yn, na) {
        for (var Xn = Yn; Xn < Me.length; Xn++) {
          var Ba = _e[Xn];
          if (Ba & (D | re)) return 1;
          if (Ba & (Z | H) || na && Ba === pe) return 0;
          if (Ba & i) {
            var wo = pr(Xn);
            Xn = wo === -1 ? Me.length : wo;
          }
        }
        return 0;
      }
      function pr(Yn) {
        for (var na = 1, Xn = Yn + 1; Xn < Me.length; Xn++) {
          var Ba = _e[Xn];
          if (Ba & Z) break;
          if (Ba & pe) {
            if (--na === 0) return Xn;
          } else Ba & i && na++;
        }
        return -1;
      }
    }
    var ze = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", be;
    function Ee() {
      if (!be) {
        var Me = U(ze, true), Fe = Me.map, je = Me.reverseMap;
        je.forEach(function(_e, rt) {
          Fe.set(rt, _e);
        }), be = Fe;
      }
    }
    function Je(Me) {
      return Ee(), be.get(Me) || null;
    }
    function Ye(Me, Fe, je, _e) {
      var rt = Me.length;
      je = Math.max(0, je == null ? 0 : +je), _e = Math.min(rt - 1, _e == null ? rt - 1 : +_e);
      for (var Ge = /* @__PURE__ */ new Map(), Le = je; Le <= _e; Le++) if (Fe[Le] & 1) {
        var Be = Je(Me[Le]);
        Be !== null && Ge.set(Le, Be);
      }
      return Ge;
    }
    function Ne(Me, Fe, je, _e) {
      var rt = Me.length;
      je = Math.max(0, je == null ? 0 : +je), _e = Math.min(rt - 1, _e == null ? rt - 1 : +_e);
      var Ge = [];
      return Fe.paragraphs.forEach(function(Le) {
        var Be = Math.max(je, Le.start), gt = Math.min(_e, Le.end);
        if (Be < gt) {
          for (var He = Fe.levels.slice(Be, gt + 1), Qe = gt; Qe >= Be && S(Me[Qe]) & d; Qe--) He[Qe] = Le.level;
          for (var $e = Le.level, ct = 1 / 0, Rt = 0; Rt < He.length; Rt++) {
            var kt = He[Rt];
            kt > $e && ($e = kt), kt < ct && (ct = kt | 1);
          }
          for (var ot = $e; ot >= ct; ot--) for (var ke = 0; ke < He.length; ke++) if (He[ke] >= ot) {
            for (var Xe = ke; ke + 1 < He.length && He[ke + 1] >= ot; ) ke++;
            ke > Xe && Ge.push([Xe + Be, ke + Be]);
          }
        }
      }), Ge;
    }
    function Ve(Me, Fe, je, _e) {
      var rt = Ze(Me, Fe, je, _e), Ge = [].concat(Me);
      return rt.forEach(function(Le, Be) {
        Ge[Be] = (Fe.levels[Le] & 1 ? Je(Me[Le]) : null) || Me[Le];
      }), Ge.join("");
    }
    function Ze(Me, Fe, je, _e) {
      for (var rt = Ne(Me, Fe, je, _e), Ge = [], Le = 0; Le < Me.length; Le++) Ge[Le] = Le;
      return rt.forEach(function(Be) {
        for (var gt = Be[0], He = Be[1], Qe = Ge.slice(gt, He + 1), $e = Qe.length; $e--; ) Ge[He - $e] = Qe[$e];
      }), Ge;
    }
    return l.closingToOpeningBracket = O, l.getBidiCharType = S, l.getBidiCharTypeName = E, l.getCanonicalBracket = L, l.getEmbeddingLevels = Oe, l.getMirroredCharacter = Je, l.getMirroredCharactersMap = Ye, l.getReorderSegments = Ne, l.getReorderedIndices = Ze, l.getReorderedString = Ve, l.openingToClosingBracket = z, Object.defineProperty(l, "__esModule", { value: true }), l;
  })({});
  return p;
}
const f0 = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function ff(p) {
  const l = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function v(s, r) {
    let i = Hp[r];
    return i ? ff(i) : s;
  }
  return p.replace(l, v);
}
const Nn = [];
for (let p = 0; p < 256; p++) Nn[p] = (p < 16 ? "0" : "") + p.toString(16);
function Oy() {
  const p = Math.random() * 4294967295 | 0, l = Math.random() * 4294967295 | 0, v = Math.random() * 4294967295 | 0, s = Math.random() * 4294967295 | 0;
  return (Nn[p & 255] + Nn[p >> 8 & 255] + Nn[p >> 16 & 255] + Nn[p >> 24 & 255] + "-" + Nn[l & 255] + Nn[l >> 8 & 255] + "-" + Nn[l >> 16 & 15 | 64] + Nn[l >> 24 & 255] + "-" + Nn[v & 63 | 128] + Nn[v >> 8 & 255] + "-" + Nn[v >> 16 & 255] + Nn[v >> 24 & 255] + Nn[s & 255] + Nn[s >> 8 & 255] + Nn[s >> 16 & 255] + Nn[s >> 24 & 255]).toUpperCase();
}
const dl = Object.assign || function() {
  let p = arguments[0];
  for (let l = 1, v = arguments.length; l < v; l++) {
    let s = arguments[l];
    if (s) for (let r in s) Object.prototype.hasOwnProperty.call(s, r) && (p[r] = s[r]);
  }
  return p;
}, zy = Date.now(), Mm = /* @__PURE__ */ new WeakMap(), Tm = /* @__PURE__ */ new Map();
let Ry = 1e10;
function hf(p, l) {
  const v = Gy(l);
  let s = Mm.get(p);
  if (s || Mm.set(p, s = /* @__PURE__ */ Object.create(null)), s[v]) return new s[v]();
  const r = `_onBeforeCompile${v}`, i = function(d, m) {
    p.onBeforeCompile.call(this, d, m);
    const y = this.customProgramCacheKey() + "|" + d.vertexShader + "|" + d.fragmentShader;
    let S = Tm[y];
    if (!S) {
      const E = Ly(this, d, l, v);
      S = Tm[y] = E;
    }
    d.vertexShader = S.vertexShader, d.fragmentShader = S.fragmentShader, dl(d.uniforms, this.uniforms), l.timeUniform && (d.uniforms[l.timeUniform] = { get value() {
      return Date.now() - zy;
    } }), this[r] && this[r](d);
  }, h = function() {
    return f(l.chained ? p : p.clone());
  }, f = function(d) {
    const m = Object.create(d, c);
    return Object.defineProperty(m, "baseMaterial", { value: p }), Object.defineProperty(m, "id", { value: Ry++ }), m.uuid = Oy(), m.uniforms = dl({}, d.uniforms, l.uniforms), m.defines = dl({}, d.defines, l.defines), m.defines[`TROIKA_DERIVED_MATERIAL_${v}`] = "", m.extensions = dl({}, d.extensions, l.extensions), m._listeners = void 0, m;
  }, c = { constructor: { value: h }, isDerivedMaterial: { value: true }, type: { get: () => p.type, set: (d) => {
    p.type = d;
  } }, isDerivedFrom: { writable: true, configurable: true, value: function(d) {
    const m = this.baseMaterial;
    return d === m || m.isDerivedMaterial && m.isDerivedFrom(d) || false;
  } }, customProgramCacheKey: { writable: true, configurable: true, value: function() {
    return p.customProgramCacheKey() + "|" + v;
  } }, onBeforeCompile: { get() {
    return i;
  }, set(d) {
    this[r] = d;
  } }, copy: { writable: true, configurable: true, value: function(d) {
    return p.copy.call(this, d), !p.isShaderMaterial && !p.isDerivedMaterial && (dl(this.extensions, d.extensions), dl(this.defines, d.defines), dl(this.uniforms, js.clone(d.uniforms))), this;
  } }, clone: { writable: true, configurable: true, value: function() {
    const d = new p.constructor();
    return f(d).copy(this);
  } }, getDepthMaterial: { writable: true, configurable: true, value: function() {
    let d = this._depthMaterial;
    return d || (d = this._depthMaterial = hf(p.isDerivedMaterial ? p.getDepthMaterial() : new Wm({ depthPacking: Gp }), l), d.defines.IS_DEPTH_MATERIAL = "", d.uniforms = this.uniforms), d;
  } }, getDistanceMaterial: { writable: true, configurable: true, value: function() {
    let d = this._distanceMaterial;
    return d || (d = this._distanceMaterial = hf(p.isDerivedMaterial ? p.getDistanceMaterial() : new Np(), l), d.defines.IS_DISTANCE_MATERIAL = "", d.uniforms = this.uniforms), d;
  } }, dispose: { writable: true, configurable: true, value() {
    const { _depthMaterial: d, _distanceMaterial: m } = this;
    d && d.dispose(), m && m.dispose(), p.dispose.call(this);
  } } };
  return s[v] = h, new h();
}
function Ly(p, { vertexShader: l, fragmentShader: v }, s, r) {
  let { vertexDefs: i, vertexMainIntro: h, vertexMainOutro: f, vertexTransform: c, fragmentDefs: d, fragmentMainIntro: m, fragmentMainOutro: y, fragmentColorTransform: S, customRewriter: E, timeUniform: A } = s;
  if (i = i || "", h = h || "", f = f || "", d = d || "", m = m || "", y = y || "", (c || E) && (l = ff(l)), (S || E) && (v = v.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, `
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`), v = ff(v)), E) {
    let U = E({ vertexShader: l, fragmentShader: v });
    l = U.vertexShader, v = U.fragmentShader;
  }
  if (S) {
    let U = [];
    v = v.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (x) => (U.push(x), "")), y = `${S}
${U.join(`
`)}
${y}`;
  }
  if (A) {
    const U = `
uniform float ${A};
`;
    i = U + i, d = U + d;
  }
  return c && (l = `vec3 troika_position_${r};
vec3 troika_normal_${r};
vec2 troika_uv_${r};
${l}
`, i = `${i}
void troikaVertexTransform${r}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c}
}
`, h = `
troika_position_${r} = vec3(position);
troika_normal_${r} = vec3(normal);
troika_uv_${r} = vec2(uv);
troikaVertexTransform${r}(troika_position_${r}, troika_normal_${r}, troika_uv_${r});
${h}
`, l = l.replace(/\b(position|normal|uv)\b/g, (U, x, Q, N) => /\battribute\s+vec[23]\s+$/.test(N.substr(0, Q)) ? x : `troika_${x}_${r}`), p.map && p.map.channel > 0 || (l = l.replace(/\bMAP_UV\b/g, `troika_uv_${r}`))), l = Am(l, r, i, h, f), v = Am(v, r, d, m, y), { vertexShader: l, fragmentShader: v };
}
function Am(p, l, v, s, r) {
  return (s || r || v) && (p = p.replace(f0, `
${v}
void troikaOrigMain${l}() {`), p += `
void main() {
  ${s}
  troikaOrigMain${l}();
  ${r}
}`), p;
}
function By(p, l) {
  return p === "uniforms" ? void 0 : typeof l == "function" ? l.toString() : l;
}
let Ny = 0;
const Um = /* @__PURE__ */ new Map();
function Gy(p) {
  const l = JSON.stringify(p, By);
  let v = Um.get(l);
  return v == null && Um.set(l, v = ++Ny), v;
}
/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/
function Hy() {
  return typeof window > "u" && (self.window = self), (function(p) {
    var l = { parse: function(r) {
      var i = l._bin, h = new Uint8Array(r);
      if (i.readASCII(h, 0, 4) == "ttcf") {
        var f = 4;
        i.readUshort(h, f), f += 2, i.readUshort(h, f), f += 2;
        var c = i.readUint(h, f);
        f += 4;
        for (var d = [], m = 0; m < c; m++) {
          var y = i.readUint(h, f);
          f += 4, d.push(l._readFont(h, y));
        }
        return d;
      }
      return [l._readFont(h, 0)];
    }, _readFont: function(r, i) {
      var h = l._bin, f = i;
      h.readFixed(r, i), i += 4;
      var c = h.readUshort(r, i);
      i += 2, h.readUshort(r, i), i += 2, h.readUshort(r, i), i += 2, h.readUshort(r, i), i += 2;
      for (var d = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GDEF", "GPOS", "GSUB", "SVG "], m = { _data: r, _offset: f }, y = {}, S = 0; S < c; S++) {
        var E = h.readASCII(r, i, 4);
        i += 4, h.readUint(r, i), i += 4;
        var A = h.readUint(r, i);
        i += 4;
        var U = h.readUint(r, i);
        i += 4, y[E] = { offset: A, length: U };
      }
      for (S = 0; S < d.length; S++) {
        var x = d[S];
        y[x] && (m[x.trim()] = l[x.trim()].parse(r, y[x].offset, y[x].length, m));
      }
      return m;
    }, _tabOffset: function(r, i, h) {
      for (var f = l._bin, c = f.readUshort(r, h + 4), d = h + 12, m = 0; m < c; m++) {
        var y = f.readASCII(r, d, 4);
        d += 4, f.readUint(r, d), d += 4;
        var S = f.readUint(r, d);
        if (d += 4, f.readUint(r, d), d += 4, y == i) return S;
      }
      return 0;
    } };
    l._bin = { readFixed: function(r, i) {
      return (r[i] << 8 | r[i + 1]) + (r[i + 2] << 8 | r[i + 3]) / 65540;
    }, readF2dot14: function(r, i) {
      return l._bin.readShort(r, i) / 16384;
    }, readInt: function(r, i) {
      return l._bin._view(r).getInt32(i);
    }, readInt8: function(r, i) {
      return l._bin._view(r).getInt8(i);
    }, readShort: function(r, i) {
      return l._bin._view(r).getInt16(i);
    }, readUshort: function(r, i) {
      return l._bin._view(r).getUint16(i);
    }, readUshorts: function(r, i, h) {
      for (var f = [], c = 0; c < h; c++) f.push(l._bin.readUshort(r, i + 2 * c));
      return f;
    }, readUint: function(r, i) {
      return l._bin._view(r).getUint32(i);
    }, readUint64: function(r, i) {
      return 4294967296 * l._bin.readUint(r, i) + l._bin.readUint(r, i + 4);
    }, readASCII: function(r, i, h) {
      for (var f = "", c = 0; c < h; c++) f += String.fromCharCode(r[i + c]);
      return f;
    }, readUnicode: function(r, i, h) {
      for (var f = "", c = 0; c < h; c++) {
        var d = r[i++] << 8 | r[i++];
        f += String.fromCharCode(d);
      }
      return f;
    }, _tdec: typeof window < "u" && window.TextDecoder ? new window.TextDecoder() : null, readUTF8: function(r, i, h) {
      var f = l._bin._tdec;
      return f && i == 0 && h == r.length ? f.decode(r) : l._bin.readASCII(r, i, h);
    }, readBytes: function(r, i, h) {
      for (var f = [], c = 0; c < h; c++) f.push(r[i + c]);
      return f;
    }, readASCIIArray: function(r, i, h) {
      for (var f = [], c = 0; c < h; c++) f.push(String.fromCharCode(r[i + c]));
      return f;
    }, _view: function(r) {
      return r._dataView || (r._dataView = r.buffer ? new DataView(r.buffer, r.byteOffset, r.byteLength) : new DataView(new Uint8Array(r).buffer));
    } }, l._lctf = {}, l._lctf.parse = function(r, i, h, f, c) {
      var d = l._bin, m = {}, y = i;
      d.readFixed(r, i), i += 4;
      var S = d.readUshort(r, i);
      i += 2;
      var E = d.readUshort(r, i);
      i += 2;
      var A = d.readUshort(r, i);
      return i += 2, m.scriptList = l._lctf.readScriptList(r, y + S), m.featureList = l._lctf.readFeatureList(r, y + E), m.lookupList = l._lctf.readLookupList(r, y + A, c), m;
    }, l._lctf.readLookupList = function(r, i, h) {
      var f = l._bin, c = i, d = [], m = f.readUshort(r, i);
      i += 2;
      for (var y = 0; y < m; y++) {
        var S = f.readUshort(r, i);
        i += 2;
        var E = l._lctf.readLookupTable(r, c + S, h);
        d.push(E);
      }
      return d;
    }, l._lctf.readLookupTable = function(r, i, h) {
      var f = l._bin, c = i, d = { tabs: [] };
      d.ltype = f.readUshort(r, i), i += 2, d.flag = f.readUshort(r, i), i += 2;
      var m = f.readUshort(r, i);
      i += 2;
      for (var y = d.ltype, S = 0; S < m; S++) {
        var E = f.readUshort(r, i);
        i += 2;
        var A = h(r, y, c + E, d);
        d.tabs.push(A);
      }
      return d;
    }, l._lctf.numOfOnes = function(r) {
      for (var i = 0, h = 0; h < 32; h++) (r >>> h & 1) != 0 && i++;
      return i;
    }, l._lctf.readClassDef = function(r, i) {
      var h = l._bin, f = [], c = h.readUshort(r, i);
      if (i += 2, c == 1) {
        var d = h.readUshort(r, i);
        i += 2;
        var m = h.readUshort(r, i);
        i += 2;
        for (var y = 0; y < m; y++) f.push(d + y), f.push(d + y), f.push(h.readUshort(r, i)), i += 2;
      }
      if (c == 2) {
        var S = h.readUshort(r, i);
        for (i += 2, y = 0; y < S; y++) f.push(h.readUshort(r, i)), i += 2, f.push(h.readUshort(r, i)), i += 2, f.push(h.readUshort(r, i)), i += 2;
      }
      return f;
    }, l._lctf.getInterval = function(r, i) {
      for (var h = 0; h < r.length; h += 3) {
        var f = r[h], c = r[h + 1];
        if (r[h + 2], f <= i && i <= c) return h;
      }
      return -1;
    }, l._lctf.readCoverage = function(r, i) {
      var h = l._bin, f = {};
      f.fmt = h.readUshort(r, i), i += 2;
      var c = h.readUshort(r, i);
      return i += 2, f.fmt == 1 && (f.tab = h.readUshorts(r, i, c)), f.fmt == 2 && (f.tab = h.readUshorts(r, i, 3 * c)), f;
    }, l._lctf.coverageIndex = function(r, i) {
      var h = r.tab;
      if (r.fmt == 1) return h.indexOf(i);
      if (r.fmt == 2) {
        var f = l._lctf.getInterval(h, i);
        if (f != -1) return h[f + 2] + (i - h[f]);
      }
      return -1;
    }, l._lctf.readFeatureList = function(r, i) {
      var h = l._bin, f = i, c = [], d = h.readUshort(r, i);
      i += 2;
      for (var m = 0; m < d; m++) {
        var y = h.readASCII(r, i, 4);
        i += 4;
        var S = h.readUshort(r, i);
        i += 2;
        var E = l._lctf.readFeatureTable(r, f + S);
        E.tag = y.trim(), c.push(E);
      }
      return c;
    }, l._lctf.readFeatureTable = function(r, i) {
      var h = l._bin, f = i, c = {}, d = h.readUshort(r, i);
      i += 2, d > 0 && (c.featureParams = f + d);
      var m = h.readUshort(r, i);
      i += 2, c.tab = [];
      for (var y = 0; y < m; y++) c.tab.push(h.readUshort(r, i + 2 * y));
      return c;
    }, l._lctf.readScriptList = function(r, i) {
      var h = l._bin, f = i, c = {}, d = h.readUshort(r, i);
      i += 2;
      for (var m = 0; m < d; m++) {
        var y = h.readASCII(r, i, 4);
        i += 4;
        var S = h.readUshort(r, i);
        i += 2, c[y.trim()] = l._lctf.readScriptTable(r, f + S);
      }
      return c;
    }, l._lctf.readScriptTable = function(r, i) {
      var h = l._bin, f = i, c = {}, d = h.readUshort(r, i);
      i += 2, d > 0 && (c.default = l._lctf.readLangSysTable(r, f + d));
      var m = h.readUshort(r, i);
      i += 2;
      for (var y = 0; y < m; y++) {
        var S = h.readASCII(r, i, 4);
        i += 4;
        var E = h.readUshort(r, i);
        i += 2, c[S.trim()] = l._lctf.readLangSysTable(r, f + E);
      }
      return c;
    }, l._lctf.readLangSysTable = function(r, i) {
      var h = l._bin, f = {};
      h.readUshort(r, i), i += 2, f.reqFeature = h.readUshort(r, i), i += 2;
      var c = h.readUshort(r, i);
      return i += 2, f.features = h.readUshorts(r, i, c), f;
    }, l.CFF = {}, l.CFF.parse = function(r, i, h) {
      var f = l._bin;
      (r = new Uint8Array(r.buffer, i, h))[i = 0], r[++i], r[++i], r[++i], i++;
      var c = [];
      i = l.CFF.readIndex(r, i, c);
      for (var d = [], m = 0; m < c.length - 1; m++) d.push(f.readASCII(r, i + c[m], c[m + 1] - c[m]));
      i += c[c.length - 1];
      var y = [];
      i = l.CFF.readIndex(r, i, y);
      var S = [];
      for (m = 0; m < y.length - 1; m++) S.push(l.CFF.readDict(r, i + y[m], i + y[m + 1]));
      i += y[y.length - 1];
      var E = S[0], A = [];
      i = l.CFF.readIndex(r, i, A);
      var U = [];
      for (m = 0; m < A.length - 1; m++) U.push(f.readASCII(r, i + A[m], A[m + 1] - A[m]));
      if (i += A[A.length - 1], l.CFF.readSubrs(r, i, E), E.CharStrings) {
        i = E.CharStrings, A = [], i = l.CFF.readIndex(r, i, A);
        var x = [];
        for (m = 0; m < A.length - 1; m++) x.push(f.readBytes(r, i + A[m], A[m + 1] - A[m]));
        E.CharStrings = x;
      }
      if (E.ROS) {
        i = E.FDArray;
        var Q = [];
        for (i = l.CFF.readIndex(r, i, Q), E.FDArray = [], m = 0; m < Q.length - 1; m++) {
          var N = l.CFF.readDict(r, i + Q[m], i + Q[m + 1]);
          l.CFF._readFDict(r, N, U), E.FDArray.push(N);
        }
        i += Q[Q.length - 1], i = E.FDSelect, E.FDSelect = [];
        var C = r[i];
        if (i++, C != 3) throw C;
        var z = f.readUshort(r, i);
        for (i += 2, m = 0; m < z + 1; m++) E.FDSelect.push(f.readUshort(r, i), r[i + 2]), i += 3;
      }
      return E.Encoding && (E.Encoding = l.CFF.readEncoding(r, E.Encoding, E.CharStrings.length)), E.charset && (E.charset = l.CFF.readCharset(r, E.charset, E.CharStrings.length)), l.CFF._readFDict(r, E, U), E;
    }, l.CFF._readFDict = function(r, i, h) {
      var f;
      for (var c in i.Private && (f = i.Private[1], i.Private = l.CFF.readDict(r, f, f + i.Private[0]), i.Private.Subrs && l.CFF.readSubrs(r, f + i.Private.Subrs, i.Private)), i) ["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(c) != -1 && (i[c] = h[i[c] - 426 + 35]);
    }, l.CFF.readSubrs = function(r, i, h) {
      var f = l._bin, c = [];
      i = l.CFF.readIndex(r, i, c);
      var d, m = c.length;
      d = m < 1240 ? 107 : m < 33900 ? 1131 : 32768, h.Bias = d, h.Subrs = [];
      for (var y = 0; y < c.length - 1; y++) h.Subrs.push(f.readBytes(r, i + c[y], c[y + 1] - c[y]));
    }, l.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], l.CFF.glyphByUnicode = function(r, i) {
      for (var h = 0; h < r.charset.length; h++) if (r.charset[h] == i) return h;
      return -1;
    }, l.CFF.glyphBySE = function(r, i) {
      return i < 0 || i > 255 ? -1 : l.CFF.glyphByUnicode(r, l.CFF.tableSE[i]);
    }, l.CFF.readEncoding = function(r, i, h) {
      l._bin;
      var f = [".notdef"], c = r[i];
      if (i++, c != 0) throw "error: unknown encoding format: " + c;
      var d = r[i];
      i++;
      for (var m = 0; m < d; m++) f.push(r[i + m]);
      return f;
    }, l.CFF.readCharset = function(r, i, h) {
      var f = l._bin, c = [".notdef"], d = r[i];
      if (i++, d == 0) for (var m = 0; m < h; m++) {
        var y = f.readUshort(r, i);
        i += 2, c.push(y);
      }
      else {
        if (d != 1 && d != 2) throw "error: format: " + d;
        for (; c.length < h; ) {
          y = f.readUshort(r, i), i += 2;
          var S = 0;
          for (d == 1 ? (S = r[i], i++) : (S = f.readUshort(r, i), i += 2), m = 0; m <= S; m++) c.push(y), y++;
        }
      }
      return c;
    }, l.CFF.readIndex = function(r, i, h) {
      var f = l._bin, c = f.readUshort(r, i) + 1, d = r[i += 2];
      if (i++, d == 1) for (var m = 0; m < c; m++) h.push(r[i + m]);
      else if (d == 2) for (m = 0; m < c; m++) h.push(f.readUshort(r, i + 2 * m));
      else if (d == 3) for (m = 0; m < c; m++) h.push(16777215 & f.readUint(r, i + 3 * m - 1));
      else if (c != 1) throw "unsupported offset size: " + d + ", count: " + c;
      return (i += c * d) - 1;
    }, l.CFF.getCharString = function(r, i, h) {
      var f = l._bin, c = r[i], d = r[i + 1];
      r[i + 2], r[i + 3], r[i + 4];
      var m = 1, y = null, S = null;
      c <= 20 && (y = c, m = 1), c == 12 && (y = 100 * c + d, m = 2), 21 <= c && c <= 27 && (y = c, m = 1), c == 28 && (S = f.readShort(r, i + 1), m = 3), 29 <= c && c <= 31 && (y = c, m = 1), 32 <= c && c <= 246 && (S = c - 139, m = 1), 247 <= c && c <= 250 && (S = 256 * (c - 247) + d + 108, m = 2), 251 <= c && c <= 254 && (S = 256 * -(c - 251) - d - 108, m = 2), c == 255 && (S = f.readInt(r, i + 1) / 65535, m = 5), h.val = S ?? "o" + y, h.size = m;
    }, l.CFF.readCharString = function(r, i, h) {
      for (var f = i + h, c = l._bin, d = []; i < f; ) {
        var m = r[i], y = r[i + 1];
        r[i + 2], r[i + 3], r[i + 4];
        var S = 1, E = null, A = null;
        m <= 20 && (E = m, S = 1), m == 12 && (E = 100 * m + y, S = 2), m != 19 && m != 20 || (E = m, S = 2), 21 <= m && m <= 27 && (E = m, S = 1), m == 28 && (A = c.readShort(r, i + 1), S = 3), 29 <= m && m <= 31 && (E = m, S = 1), 32 <= m && m <= 246 && (A = m - 139, S = 1), 247 <= m && m <= 250 && (A = 256 * (m - 247) + y + 108, S = 2), 251 <= m && m <= 254 && (A = 256 * -(m - 251) - y - 108, S = 2), m == 255 && (A = c.readInt(r, i + 1) / 65535, S = 5), d.push(A ?? "o" + E), i += S;
      }
      return d;
    }, l.CFF.readDict = function(r, i, h) {
      for (var f = l._bin, c = {}, d = []; i < h; ) {
        var m = r[i], y = r[i + 1];
        r[i + 2], r[i + 3], r[i + 4];
        var S = 1, E = null, A = null;
        if (m == 28 && (A = f.readShort(r, i + 1), S = 3), m == 29 && (A = f.readInt(r, i + 1), S = 5), 32 <= m && m <= 246 && (A = m - 139, S = 1), 247 <= m && m <= 250 && (A = 256 * (m - 247) + y + 108, S = 2), 251 <= m && m <= 254 && (A = 256 * -(m - 251) - y - 108, S = 2), m == 255) throw A = f.readInt(r, i + 1) / 65535, S = 5, "unknown number";
        if (m == 30) {
          var U = [];
          for (S = 1; ; ) {
            var x = r[i + S];
            S++;
            var Q = x >> 4, N = 15 & x;
            if (Q != 15 && U.push(Q), N != 15 && U.push(N), N == 15) break;
          }
          for (var C = "", z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], O = 0; O < U.length; O++) C += z[U[O]];
          A = parseFloat(C);
        }
        m <= 21 && (E = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][m], S = 1, m == 12 && (E = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][y], S = 2)), E != null ? (c[E] = d.length == 1 ? d[0] : d, d = []) : d.push(A), i += S;
      }
      return c;
    }, l.cmap = {}, l.cmap.parse = function(r, i, h) {
      r = new Uint8Array(r.buffer, i, h), i = 0;
      var f = l._bin, c = {};
      f.readUshort(r, i), i += 2;
      var d = f.readUshort(r, i);
      i += 2;
      var m = [];
      c.tables = [];
      for (var y = 0; y < d; y++) {
        var S = f.readUshort(r, i);
        i += 2;
        var E = f.readUshort(r, i);
        i += 2;
        var A = f.readUint(r, i);
        i += 4;
        var U = "p" + S + "e" + E, x = m.indexOf(A);
        if (x == -1) {
          var Q;
          x = c.tables.length, m.push(A);
          var N = f.readUshort(r, A);
          N == 0 ? Q = l.cmap.parse0(r, A) : N == 4 ? Q = l.cmap.parse4(r, A) : N == 6 ? Q = l.cmap.parse6(r, A) : N == 12 ? Q = l.cmap.parse12(r, A) : console.debug("unknown format: " + N, S, E, A), c.tables.push(Q);
        }
        if (c[U] != null) throw "multiple tables for one platform+encoding";
        c[U] = x;
      }
      return c;
    }, l.cmap.parse0 = function(r, i) {
      var h = l._bin, f = {};
      f.format = h.readUshort(r, i), i += 2;
      var c = h.readUshort(r, i);
      i += 2, h.readUshort(r, i), i += 2, f.map = [];
      for (var d = 0; d < c - 6; d++) f.map.push(r[i + d]);
      return f;
    }, l.cmap.parse4 = function(r, i) {
      var h = l._bin, f = i, c = {};
      c.format = h.readUshort(r, i), i += 2;
      var d = h.readUshort(r, i);
      i += 2, h.readUshort(r, i), i += 2;
      var m = h.readUshort(r, i);
      i += 2;
      var y = m / 2;
      c.searchRange = h.readUshort(r, i), i += 2, c.entrySelector = h.readUshort(r, i), i += 2, c.rangeShift = h.readUshort(r, i), i += 2, c.endCount = h.readUshorts(r, i, y), i += 2 * y, i += 2, c.startCount = h.readUshorts(r, i, y), i += 2 * y, c.idDelta = [];
      for (var S = 0; S < y; S++) c.idDelta.push(h.readShort(r, i)), i += 2;
      for (c.idRangeOffset = h.readUshorts(r, i, y), i += 2 * y, c.glyphIdArray = []; i < f + d; ) c.glyphIdArray.push(h.readUshort(r, i)), i += 2;
      return c;
    }, l.cmap.parse6 = function(r, i) {
      var h = l._bin, f = {};
      f.format = h.readUshort(r, i), i += 2, h.readUshort(r, i), i += 2, h.readUshort(r, i), i += 2, f.firstCode = h.readUshort(r, i), i += 2;
      var c = h.readUshort(r, i);
      i += 2, f.glyphIdArray = [];
      for (var d = 0; d < c; d++) f.glyphIdArray.push(h.readUshort(r, i)), i += 2;
      return f;
    }, l.cmap.parse12 = function(r, i) {
      var h = l._bin, f = {};
      f.format = h.readUshort(r, i), i += 2, i += 2, h.readUint(r, i), i += 4, h.readUint(r, i), i += 4;
      var c = h.readUint(r, i);
      i += 4, f.groups = [];
      for (var d = 0; d < c; d++) {
        var m = i + 12 * d, y = h.readUint(r, m + 0), S = h.readUint(r, m + 4), E = h.readUint(r, m + 8);
        f.groups.push([y, S, E]);
      }
      return f;
    }, l.glyf = {}, l.glyf.parse = function(r, i, h, f) {
      for (var c = [], d = 0; d < f.maxp.numGlyphs; d++) c.push(null);
      return c;
    }, l.glyf._parseGlyf = function(r, i) {
      var h = l._bin, f = r._data, c = l._tabOffset(f, "glyf", r._offset) + r.loca[i];
      if (r.loca[i] == r.loca[i + 1]) return null;
      var d = {};
      if (d.noc = h.readShort(f, c), c += 2, d.xMin = h.readShort(f, c), c += 2, d.yMin = h.readShort(f, c), c += 2, d.xMax = h.readShort(f, c), c += 2, d.yMax = h.readShort(f, c), c += 2, d.xMin >= d.xMax || d.yMin >= d.yMax) return null;
      if (d.noc > 0) {
        d.endPts = [];
        for (var m = 0; m < d.noc; m++) d.endPts.push(h.readUshort(f, c)), c += 2;
        var y = h.readUshort(f, c);
        if (c += 2, f.length - c < y) return null;
        d.instructions = h.readBytes(f, c, y), c += y;
        var S = d.endPts[d.noc - 1] + 1;
        for (d.flags = [], m = 0; m < S; m++) {
          var E = f[c];
          if (c++, d.flags.push(E), (8 & E) != 0) {
            var A = f[c];
            c++;
            for (var U = 0; U < A; U++) d.flags.push(E), m++;
          }
        }
        for (d.xs = [], m = 0; m < S; m++) {
          var x = (2 & d.flags[m]) != 0, Q = (16 & d.flags[m]) != 0;
          x ? (d.xs.push(Q ? f[c] : -f[c]), c++) : Q ? d.xs.push(0) : (d.xs.push(h.readShort(f, c)), c += 2);
        }
        for (d.ys = [], m = 0; m < S; m++) x = (4 & d.flags[m]) != 0, Q = (32 & d.flags[m]) != 0, x ? (d.ys.push(Q ? f[c] : -f[c]), c++) : Q ? d.ys.push(0) : (d.ys.push(h.readShort(f, c)), c += 2);
        var N = 0, C = 0;
        for (m = 0; m < S; m++) N += d.xs[m], C += d.ys[m], d.xs[m] = N, d.ys[m] = C;
      } else {
        var z;
        d.parts = [];
        do {
          z = h.readUshort(f, c), c += 2;
          var O = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
          if (d.parts.push(O), O.glyphIndex = h.readUshort(f, c), c += 2, 1 & z) {
            var L = h.readShort(f, c);
            c += 2;
            var H = h.readShort(f, c);
            c += 2;
          } else L = h.readInt8(f, c), c++, H = h.readInt8(f, c), c++;
          2 & z ? (O.m.tx = L, O.m.ty = H) : (O.p1 = L, O.p2 = H), 8 & z ? (O.m.a = O.m.d = h.readF2dot14(f, c), c += 2) : 64 & z ? (O.m.a = h.readF2dot14(f, c), c += 2, O.m.d = h.readF2dot14(f, c), c += 2) : 128 & z && (O.m.a = h.readF2dot14(f, c), c += 2, O.m.b = h.readF2dot14(f, c), c += 2, O.m.c = h.readF2dot14(f, c), c += 2, O.m.d = h.readF2dot14(f, c), c += 2);
        } while (32 & z);
        if (256 & z) {
          var D = h.readUshort(f, c);
          for (c += 2, d.instr = [], m = 0; m < D; m++) d.instr.push(f[c]), c++;
        }
      }
      return d;
    }, l.GDEF = {}, l.GDEF.parse = function(r, i, h, f) {
      var c = i;
      i += 4;
      var d = l._bin.readUshort(r, i);
      return { glyphClassDef: d === 0 ? null : l._lctf.readClassDef(r, c + d) };
    }, l.GPOS = {}, l.GPOS.parse = function(r, i, h, f) {
      return l._lctf.parse(r, i, h, f, l.GPOS.subt);
    }, l.GPOS.subt = function(r, i, h, f) {
      var c = l._bin, d = h, m = {};
      if (m.fmt = c.readUshort(r, h), h += 2, i == 1 || i == 2 || i == 3 || i == 7 || i == 8 && m.fmt <= 2) {
        var y = c.readUshort(r, h);
        h += 2, m.coverage = l._lctf.readCoverage(r, y + d);
      }
      if (i == 1 && m.fmt == 1) {
        var S = c.readUshort(r, h);
        h += 2, S != 0 && (m.pos = l.GPOS.readValueRecord(r, h, S));
      } else if (i == 2 && m.fmt >= 1 && m.fmt <= 2) {
        S = c.readUshort(r, h), h += 2;
        var E = c.readUshort(r, h);
        h += 2;
        var A = l._lctf.numOfOnes(S), U = l._lctf.numOfOnes(E);
        if (m.fmt == 1) {
          m.pairsets = [];
          var x = c.readUshort(r, h);
          h += 2;
          for (var Q = 0; Q < x; Q++) {
            var N = d + c.readUshort(r, h);
            h += 2;
            var C = c.readUshort(r, N);
            N += 2;
            for (var z = [], O = 0; O < C; O++) {
              var L = c.readUshort(r, N);
              N += 2, S != 0 && (j = l.GPOS.readValueRecord(r, N, S), N += 2 * A), E != 0 && (J = l.GPOS.readValueRecord(r, N, E), N += 2 * U), z.push({ gid2: L, val1: j, val2: J });
            }
            m.pairsets.push(z);
          }
        }
        if (m.fmt == 2) {
          var H = c.readUshort(r, h);
          h += 2;
          var D = c.readUshort(r, h);
          h += 2;
          var Y = c.readUshort(r, h);
          h += 2;
          var I = c.readUshort(r, h);
          for (h += 2, m.classDef1 = l._lctf.readClassDef(r, d + H), m.classDef2 = l._lctf.readClassDef(r, d + D), m.matrix = [], Q = 0; Q < Y; Q++) {
            var me = [];
            for (O = 0; O < I; O++) {
              var j = null, J = null;
              S != 0 && (j = l.GPOS.readValueRecord(r, h, S), h += 2 * A), E != 0 && (J = l.GPOS.readValueRecord(r, h, E), h += 2 * U), me.push({ val1: j, val2: J });
            }
            m.matrix.push(me);
          }
        }
      } else if (i == 4 && m.fmt == 1) m.markCoverage = l._lctf.readCoverage(r, c.readUshort(r, h) + d), m.baseCoverage = l._lctf.readCoverage(r, c.readUshort(r, h + 2) + d), m.markClassCount = c.readUshort(r, h + 4), m.markArray = l.GPOS.readMarkArray(r, c.readUshort(r, h + 6) + d), m.baseArray = l.GPOS.readBaseArray(r, c.readUshort(r, h + 8) + d, m.markClassCount);
      else if (i == 6 && m.fmt == 1) m.mark1Coverage = l._lctf.readCoverage(r, c.readUshort(r, h) + d), m.mark2Coverage = l._lctf.readCoverage(r, c.readUshort(r, h + 2) + d), m.markClassCount = c.readUshort(r, h + 4), m.mark1Array = l.GPOS.readMarkArray(r, c.readUshort(r, h + 6) + d), m.mark2Array = l.GPOS.readBaseArray(r, c.readUshort(r, h + 8) + d, m.markClassCount);
      else {
        if (i == 9 && m.fmt == 1) {
          var Z = c.readUshort(r, h);
          h += 2;
          var te = c.readUint(r, h);
          if (h += 4, f.ltype == 9) f.ltype = Z;
          else if (f.ltype != Z) throw "invalid extension substitution";
          return l.GPOS.subt(r, f.ltype, d + te);
        }
        console.debug("unsupported GPOS table LookupType", i, "format", m.fmt);
      }
      return m;
    }, l.GPOS.readValueRecord = function(r, i, h) {
      var f = l._bin, c = [];
      return c.push(1 & h ? f.readShort(r, i) : 0), i += 1 & h ? 2 : 0, c.push(2 & h ? f.readShort(r, i) : 0), i += 2 & h ? 2 : 0, c.push(4 & h ? f.readShort(r, i) : 0), i += 4 & h ? 2 : 0, c.push(8 & h ? f.readShort(r, i) : 0), i += 8 & h ? 2 : 0, c;
    }, l.GPOS.readBaseArray = function(r, i, h) {
      var f = l._bin, c = [], d = i, m = f.readUshort(r, i);
      i += 2;
      for (var y = 0; y < m; y++) {
        for (var S = [], E = 0; E < h; E++) S.push(l.GPOS.readAnchorRecord(r, d + f.readUshort(r, i))), i += 2;
        c.push(S);
      }
      return c;
    }, l.GPOS.readMarkArray = function(r, i) {
      var h = l._bin, f = [], c = i, d = h.readUshort(r, i);
      i += 2;
      for (var m = 0; m < d; m++) {
        var y = l.GPOS.readAnchorRecord(r, h.readUshort(r, i + 2) + c);
        y.markClass = h.readUshort(r, i), f.push(y), i += 4;
      }
      return f;
    }, l.GPOS.readAnchorRecord = function(r, i) {
      var h = l._bin, f = {};
      return f.fmt = h.readUshort(r, i), f.x = h.readShort(r, i + 2), f.y = h.readShort(r, i + 4), f;
    }, l.GSUB = {}, l.GSUB.parse = function(r, i, h, f) {
      return l._lctf.parse(r, i, h, f, l.GSUB.subt);
    }, l.GSUB.subt = function(r, i, h, f) {
      var c = l._bin, d = h, m = {};
      if (m.fmt = c.readUshort(r, h), h += 2, i != 1 && i != 2 && i != 4 && i != 5 && i != 6) return null;
      if (i == 1 || i == 2 || i == 4 || i == 5 && m.fmt <= 2 || i == 6 && m.fmt <= 2) {
        var y = c.readUshort(r, h);
        h += 2, m.coverage = l._lctf.readCoverage(r, d + y);
      }
      if (i == 1 && m.fmt >= 1 && m.fmt <= 2) {
        if (m.fmt == 1) m.delta = c.readShort(r, h), h += 2;
        else if (m.fmt == 2) {
          var S = c.readUshort(r, h);
          h += 2, m.newg = c.readUshorts(r, h, S), h += 2 * m.newg.length;
        }
      } else if (i == 2 && m.fmt == 1) {
        S = c.readUshort(r, h), h += 2, m.seqs = [];
        for (var E = 0; E < S; E++) {
          var A = c.readUshort(r, h) + d;
          h += 2;
          var U = c.readUshort(r, A);
          m.seqs.push(c.readUshorts(r, A + 2, U));
        }
      } else if (i == 4) for (m.vals = [], S = c.readUshort(r, h), h += 2, E = 0; E < S; E++) {
        var x = c.readUshort(r, h);
        h += 2, m.vals.push(l.GSUB.readLigatureSet(r, d + x));
      }
      else if (i == 5 && m.fmt == 2) {
        if (m.fmt == 2) {
          var Q = c.readUshort(r, h);
          h += 2, m.cDef = l._lctf.readClassDef(r, d + Q), m.scset = [];
          var N = c.readUshort(r, h);
          for (h += 2, E = 0; E < N; E++) {
            var C = c.readUshort(r, h);
            h += 2, m.scset.push(C == 0 ? null : l.GSUB.readSubClassSet(r, d + C));
          }
        }
      } else if (i == 6 && m.fmt == 3) {
        if (m.fmt == 3) {
          for (E = 0; E < 3; E++) {
            S = c.readUshort(r, h), h += 2;
            for (var z = [], O = 0; O < S; O++) z.push(l._lctf.readCoverage(r, d + c.readUshort(r, h + 2 * O)));
            h += 2 * S, E == 0 && (m.backCvg = z), E == 1 && (m.inptCvg = z), E == 2 && (m.ahedCvg = z);
          }
          S = c.readUshort(r, h), h += 2, m.lookupRec = l.GSUB.readSubstLookupRecords(r, h, S);
        }
      } else {
        if (i == 7 && m.fmt == 1) {
          var L = c.readUshort(r, h);
          h += 2;
          var H = c.readUint(r, h);
          if (h += 4, f.ltype == 9) f.ltype = L;
          else if (f.ltype != L) throw "invalid extension substitution";
          return l.GSUB.subt(r, f.ltype, d + H);
        }
        console.debug("unsupported GSUB table LookupType", i, "format", m.fmt);
      }
      return m;
    }, l.GSUB.readSubClassSet = function(r, i) {
      var h = l._bin.readUshort, f = i, c = [], d = h(r, i);
      i += 2;
      for (var m = 0; m < d; m++) {
        var y = h(r, i);
        i += 2, c.push(l.GSUB.readSubClassRule(r, f + y));
      }
      return c;
    }, l.GSUB.readSubClassRule = function(r, i) {
      var h = l._bin.readUshort, f = {}, c = h(r, i), d = h(r, i += 2);
      i += 2, f.input = [];
      for (var m = 0; m < c - 1; m++) f.input.push(h(r, i)), i += 2;
      return f.substLookupRecords = l.GSUB.readSubstLookupRecords(r, i, d), f;
    }, l.GSUB.readSubstLookupRecords = function(r, i, h) {
      for (var f = l._bin.readUshort, c = [], d = 0; d < h; d++) c.push(f(r, i), f(r, i + 2)), i += 4;
      return c;
    }, l.GSUB.readChainSubClassSet = function(r, i) {
      var h = l._bin, f = i, c = [], d = h.readUshort(r, i);
      i += 2;
      for (var m = 0; m < d; m++) {
        var y = h.readUshort(r, i);
        i += 2, c.push(l.GSUB.readChainSubClassRule(r, f + y));
      }
      return c;
    }, l.GSUB.readChainSubClassRule = function(r, i) {
      for (var h = l._bin, f = {}, c = ["backtrack", "input", "lookahead"], d = 0; d < c.length; d++) {
        var m = h.readUshort(r, i);
        i += 2, d == 1 && m--, f[c[d]] = h.readUshorts(r, i, m), i += 2 * f[c[d]].length;
      }
      return m = h.readUshort(r, i), i += 2, f.subst = h.readUshorts(r, i, 2 * m), i += 2 * f.subst.length, f;
    }, l.GSUB.readLigatureSet = function(r, i) {
      var h = l._bin, f = i, c = [], d = h.readUshort(r, i);
      i += 2;
      for (var m = 0; m < d; m++) {
        var y = h.readUshort(r, i);
        i += 2, c.push(l.GSUB.readLigature(r, f + y));
      }
      return c;
    }, l.GSUB.readLigature = function(r, i) {
      var h = l._bin, f = { chain: [] };
      f.nglyph = h.readUshort(r, i), i += 2;
      var c = h.readUshort(r, i);
      i += 2;
      for (var d = 0; d < c - 1; d++) f.chain.push(h.readUshort(r, i)), i += 2;
      return f;
    }, l.head = {}, l.head.parse = function(r, i, h) {
      var f = l._bin, c = {};
      return f.readFixed(r, i), i += 4, c.fontRevision = f.readFixed(r, i), i += 4, f.readUint(r, i), i += 4, f.readUint(r, i), i += 4, c.flags = f.readUshort(r, i), i += 2, c.unitsPerEm = f.readUshort(r, i), i += 2, c.created = f.readUint64(r, i), i += 8, c.modified = f.readUint64(r, i), i += 8, c.xMin = f.readShort(r, i), i += 2, c.yMin = f.readShort(r, i), i += 2, c.xMax = f.readShort(r, i), i += 2, c.yMax = f.readShort(r, i), i += 2, c.macStyle = f.readUshort(r, i), i += 2, c.lowestRecPPEM = f.readUshort(r, i), i += 2, c.fontDirectionHint = f.readShort(r, i), i += 2, c.indexToLocFormat = f.readShort(r, i), i += 2, c.glyphDataFormat = f.readShort(r, i), i += 2, c;
    }, l.hhea = {}, l.hhea.parse = function(r, i, h) {
      var f = l._bin, c = {};
      return f.readFixed(r, i), i += 4, c.ascender = f.readShort(r, i), i += 2, c.descender = f.readShort(r, i), i += 2, c.lineGap = f.readShort(r, i), i += 2, c.advanceWidthMax = f.readUshort(r, i), i += 2, c.minLeftSideBearing = f.readShort(r, i), i += 2, c.minRightSideBearing = f.readShort(r, i), i += 2, c.xMaxExtent = f.readShort(r, i), i += 2, c.caretSlopeRise = f.readShort(r, i), i += 2, c.caretSlopeRun = f.readShort(r, i), i += 2, c.caretOffset = f.readShort(r, i), i += 2, i += 8, c.metricDataFormat = f.readShort(r, i), i += 2, c.numberOfHMetrics = f.readUshort(r, i), i += 2, c;
    }, l.hmtx = {}, l.hmtx.parse = function(r, i, h, f) {
      for (var c = l._bin, d = { aWidth: [], lsBearing: [] }, m = 0, y = 0, S = 0; S < f.maxp.numGlyphs; S++) S < f.hhea.numberOfHMetrics && (m = c.readUshort(r, i), i += 2, y = c.readShort(r, i), i += 2), d.aWidth.push(m), d.lsBearing.push(y);
      return d;
    }, l.kern = {}, l.kern.parse = function(r, i, h, f) {
      var c = l._bin, d = c.readUshort(r, i);
      if (i += 2, d == 1) return l.kern.parseV1(r, i - 2, h, f);
      var m = c.readUshort(r, i);
      i += 2;
      for (var y = { glyph1: [], rval: [] }, S = 0; S < m; S++) {
        i += 2, h = c.readUshort(r, i), i += 2;
        var E = c.readUshort(r, i);
        i += 2;
        var A = E >>> 8;
        if ((A &= 15) != 0) throw "unknown kern table format: " + A;
        i = l.kern.readFormat0(r, i, y);
      }
      return y;
    }, l.kern.parseV1 = function(r, i, h, f) {
      var c = l._bin;
      c.readFixed(r, i), i += 4;
      var d = c.readUint(r, i);
      i += 4;
      for (var m = { glyph1: [], rval: [] }, y = 0; y < d; y++) {
        c.readUint(r, i), i += 4;
        var S = c.readUshort(r, i);
        i += 2, c.readUshort(r, i), i += 2;
        var E = S >>> 8;
        if ((E &= 15) != 0) throw "unknown kern table format: " + E;
        i = l.kern.readFormat0(r, i, m);
      }
      return m;
    }, l.kern.readFormat0 = function(r, i, h) {
      var f = l._bin, c = -1, d = f.readUshort(r, i);
      i += 2, f.readUshort(r, i), i += 2, f.readUshort(r, i), i += 2, f.readUshort(r, i), i += 2;
      for (var m = 0; m < d; m++) {
        var y = f.readUshort(r, i);
        i += 2;
        var S = f.readUshort(r, i);
        i += 2;
        var E = f.readShort(r, i);
        i += 2, y != c && (h.glyph1.push(y), h.rval.push({ glyph2: [], vals: [] }));
        var A = h.rval[h.rval.length - 1];
        A.glyph2.push(S), A.vals.push(E), c = y;
      }
      return i;
    }, l.loca = {}, l.loca.parse = function(r, i, h, f) {
      var c = l._bin, d = [], m = f.head.indexToLocFormat, y = f.maxp.numGlyphs + 1;
      if (m == 0) for (var S = 0; S < y; S++) d.push(c.readUshort(r, i + (S << 1)) << 1);
      if (m == 1) for (S = 0; S < y; S++) d.push(c.readUint(r, i + (S << 2)));
      return d;
    }, l.maxp = {}, l.maxp.parse = function(r, i, h) {
      var f = l._bin, c = {}, d = f.readUint(r, i);
      return i += 4, c.numGlyphs = f.readUshort(r, i), i += 2, d == 65536 && (c.maxPoints = f.readUshort(r, i), i += 2, c.maxContours = f.readUshort(r, i), i += 2, c.maxCompositePoints = f.readUshort(r, i), i += 2, c.maxCompositeContours = f.readUshort(r, i), i += 2, c.maxZones = f.readUshort(r, i), i += 2, c.maxTwilightPoints = f.readUshort(r, i), i += 2, c.maxStorage = f.readUshort(r, i), i += 2, c.maxFunctionDefs = f.readUshort(r, i), i += 2, c.maxInstructionDefs = f.readUshort(r, i), i += 2, c.maxStackElements = f.readUshort(r, i), i += 2, c.maxSizeOfInstructions = f.readUshort(r, i), i += 2, c.maxComponentElements = f.readUshort(r, i), i += 2, c.maxComponentDepth = f.readUshort(r, i), i += 2), c;
    }, l.name = {}, l.name.parse = function(r, i, h) {
      var f = l._bin, c = {};
      f.readUshort(r, i), i += 2;
      var d = f.readUshort(r, i);
      i += 2, f.readUshort(r, i);
      for (var m, y = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"], S = i += 2, E = 0; E < d; E++) {
        var A = f.readUshort(r, i);
        i += 2;
        var U = f.readUshort(r, i);
        i += 2;
        var x = f.readUshort(r, i);
        i += 2;
        var Q = f.readUshort(r, i);
        i += 2;
        var N = f.readUshort(r, i);
        i += 2;
        var C = f.readUshort(r, i);
        i += 2;
        var z, O = y[Q], L = S + 12 * d + C;
        if (A == 0) z = f.readUnicode(r, L, N / 2);
        else if (A == 3 && U == 0) z = f.readUnicode(r, L, N / 2);
        else if (U == 0) z = f.readASCII(r, L, N);
        else if (U == 1) z = f.readUnicode(r, L, N / 2);
        else if (U == 3) z = f.readUnicode(r, L, N / 2);
        else {
          if (A != 1) throw "unknown encoding " + U + ", platformID: " + A;
          z = f.readASCII(r, L, N), console.debug("reading unknown MAC encoding " + U + " as ASCII");
        }
        var H = "p" + A + "," + x.toString(16);
        c[H] == null && (c[H] = {}), c[H][O !== void 0 ? O : Q] = z, c[H]._lang = x;
      }
      for (var D in c) if (c[D].postScriptName != null && c[D]._lang == 1033) return c[D];
      for (var D in c) if (c[D].postScriptName != null && c[D]._lang == 0) return c[D];
      for (var D in c) if (c[D].postScriptName != null && c[D]._lang == 3084) return c[D];
      for (var D in c) if (c[D].postScriptName != null) return c[D];
      for (var D in c) {
        m = D;
        break;
      }
      return console.debug("returning name table with languageID " + c[m]._lang), c[m];
    }, l["OS/2"] = {}, l["OS/2"].parse = function(r, i, h) {
      var f = l._bin.readUshort(r, i);
      i += 2;
      var c = {};
      if (f == 0) l["OS/2"].version0(r, i, c);
      else if (f == 1) l["OS/2"].version1(r, i, c);
      else if (f == 2 || f == 3 || f == 4) l["OS/2"].version2(r, i, c);
      else {
        if (f != 5) throw "unknown OS/2 table version: " + f;
        l["OS/2"].version5(r, i, c);
      }
      return c;
    }, l["OS/2"].version0 = function(r, i, h) {
      var f = l._bin;
      return h.xAvgCharWidth = f.readShort(r, i), i += 2, h.usWeightClass = f.readUshort(r, i), i += 2, h.usWidthClass = f.readUshort(r, i), i += 2, h.fsType = f.readUshort(r, i), i += 2, h.ySubscriptXSize = f.readShort(r, i), i += 2, h.ySubscriptYSize = f.readShort(r, i), i += 2, h.ySubscriptXOffset = f.readShort(r, i), i += 2, h.ySubscriptYOffset = f.readShort(r, i), i += 2, h.ySuperscriptXSize = f.readShort(r, i), i += 2, h.ySuperscriptYSize = f.readShort(r, i), i += 2, h.ySuperscriptXOffset = f.readShort(r, i), i += 2, h.ySuperscriptYOffset = f.readShort(r, i), i += 2, h.yStrikeoutSize = f.readShort(r, i), i += 2, h.yStrikeoutPosition = f.readShort(r, i), i += 2, h.sFamilyClass = f.readShort(r, i), i += 2, h.panose = f.readBytes(r, i, 10), i += 10, h.ulUnicodeRange1 = f.readUint(r, i), i += 4, h.ulUnicodeRange2 = f.readUint(r, i), i += 4, h.ulUnicodeRange3 = f.readUint(r, i), i += 4, h.ulUnicodeRange4 = f.readUint(r, i), i += 4, h.achVendID = [f.readInt8(r, i), f.readInt8(r, i + 1), f.readInt8(r, i + 2), f.readInt8(r, i + 3)], i += 4, h.fsSelection = f.readUshort(r, i), i += 2, h.usFirstCharIndex = f.readUshort(r, i), i += 2, h.usLastCharIndex = f.readUshort(r, i), i += 2, h.sTypoAscender = f.readShort(r, i), i += 2, h.sTypoDescender = f.readShort(r, i), i += 2, h.sTypoLineGap = f.readShort(r, i), i += 2, h.usWinAscent = f.readUshort(r, i), i += 2, h.usWinDescent = f.readUshort(r, i), i += 2;
    }, l["OS/2"].version1 = function(r, i, h) {
      var f = l._bin;
      return i = l["OS/2"].version0(r, i, h), h.ulCodePageRange1 = f.readUint(r, i), i += 4, h.ulCodePageRange2 = f.readUint(r, i), i += 4;
    }, l["OS/2"].version2 = function(r, i, h) {
      var f = l._bin;
      return i = l["OS/2"].version1(r, i, h), h.sxHeight = f.readShort(r, i), i += 2, h.sCapHeight = f.readShort(r, i), i += 2, h.usDefault = f.readUshort(r, i), i += 2, h.usBreak = f.readUshort(r, i), i += 2, h.usMaxContext = f.readUshort(r, i), i += 2;
    }, l["OS/2"].version5 = function(r, i, h) {
      var f = l._bin;
      return i = l["OS/2"].version2(r, i, h), h.usLowerOpticalPointSize = f.readUshort(r, i), i += 2, h.usUpperOpticalPointSize = f.readUshort(r, i), i += 2;
    }, l.post = {}, l.post.parse = function(r, i, h) {
      var f = l._bin, c = {};
      return c.version = f.readFixed(r, i), i += 4, c.italicAngle = f.readFixed(r, i), i += 4, c.underlinePosition = f.readShort(r, i), i += 2, c.underlineThickness = f.readShort(r, i), i += 2, c;
    }, l == null && (l = {}), l.U == null && (l.U = {}), l.U.codeToGlyph = function(r, i) {
      var h = r.cmap, f = -1;
      if (h.p0e4 != null ? f = h.p0e4 : h.p3e1 != null ? f = h.p3e1 : h.p1e0 != null ? f = h.p1e0 : h.p0e3 != null && (f = h.p0e3), f == -1) throw "no familiar platform and encoding!";
      var c = h.tables[f];
      if (c.format == 0) return i >= c.map.length ? 0 : c.map[i];
      if (c.format == 4) {
        for (var d = -1, m = 0; m < c.endCount.length; m++) if (i <= c.endCount[m]) {
          d = m;
          break;
        }
        return d == -1 || c.startCount[d] > i ? 0 : 65535 & (c.idRangeOffset[d] != 0 ? c.glyphIdArray[i - c.startCount[d] + (c.idRangeOffset[d] >> 1) - (c.idRangeOffset.length - d)] : i + c.idDelta[d]);
      }
      if (c.format == 12) {
        if (i > c.groups[c.groups.length - 1][1]) return 0;
        for (m = 0; m < c.groups.length; m++) {
          var y = c.groups[m];
          if (y[0] <= i && i <= y[1]) return y[2] + (i - y[0]);
        }
        return 0;
      }
      throw "unknown cmap table format " + c.format;
    }, l.U.glyphToPath = function(r, i) {
      var h = { cmds: [], crds: [] };
      if (r.SVG && r.SVG.entries[i]) {
        var f = r.SVG.entries[i];
        return f == null ? h : (typeof f == "string" && (f = l.SVG.toPath(f), r.SVG.entries[i] = f), f);
      }
      if (r.CFF) {
        var c = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: r.CFF.Private ? r.CFF.Private.defaultWidthX : 0, open: false }, d = r.CFF, m = r.CFF.Private;
        if (d.ROS) {
          for (var y = 0; d.FDSelect[y + 2] <= i; ) y += 2;
          m = d.FDArray[d.FDSelect[y + 1]].Private;
        }
        l.U._drawCFF(r.CFF.CharStrings[i], c, d, m, h);
      } else r.glyf && l.U._drawGlyf(i, r, h);
      return h;
    }, l.U._drawGlyf = function(r, i, h) {
      var f = i.glyf[r];
      f == null && (f = i.glyf[r] = l.glyf._parseGlyf(i, r)), f != null && (f.noc > -1 ? l.U._simpleGlyph(f, h) : l.U._compoGlyph(f, i, h));
    }, l.U._simpleGlyph = function(r, i) {
      for (var h = 0; h < r.noc; h++) {
        for (var f = h == 0 ? 0 : r.endPts[h - 1] + 1, c = r.endPts[h], d = f; d <= c; d++) {
          var m = d == f ? c : d - 1, y = d == c ? f : d + 1, S = 1 & r.flags[d], E = 1 & r.flags[m], A = 1 & r.flags[y], U = r.xs[d], x = r.ys[d];
          if (d == f) if (S) {
            if (!E) {
              l.U.P.moveTo(i, U, x);
              continue;
            }
            l.U.P.moveTo(i, r.xs[m], r.ys[m]);
          } else E ? l.U.P.moveTo(i, r.xs[m], r.ys[m]) : l.U.P.moveTo(i, (r.xs[m] + U) / 2, (r.ys[m] + x) / 2);
          S ? E && l.U.P.lineTo(i, U, x) : A ? l.U.P.qcurveTo(i, U, x, r.xs[y], r.ys[y]) : l.U.P.qcurveTo(i, U, x, (U + r.xs[y]) / 2, (x + r.ys[y]) / 2);
        }
        l.U.P.closePath(i);
      }
    }, l.U._compoGlyph = function(r, i, h) {
      for (var f = 0; f < r.parts.length; f++) {
        var c = { cmds: [], crds: [] }, d = r.parts[f];
        l.U._drawGlyf(d.glyphIndex, i, c);
        for (var m = d.m, y = 0; y < c.crds.length; y += 2) {
          var S = c.crds[y], E = c.crds[y + 1];
          h.crds.push(S * m.a + E * m.b + m.tx), h.crds.push(S * m.c + E * m.d + m.ty);
        }
        for (y = 0; y < c.cmds.length; y++) h.cmds.push(c.cmds[y]);
      }
    }, l.U._getGlyphClass = function(r, i) {
      var h = l._lctf.getInterval(i, r);
      return h == -1 ? 0 : i[h + 2];
    }, l.U._applySubs = function(r, i, h, f) {
      for (var c = r.length - i - 1, d = 0; d < h.tabs.length; d++) if (h.tabs[d] != null) {
        var m, y = h.tabs[d];
        if (!y.coverage || (m = l._lctf.coverageIndex(y.coverage, r[i])) != -1) {
          if (h.ltype == 1) r[i], y.fmt == 1 ? r[i] = r[i] + y.delta : r[i] = y.newg[m];
          else if (h.ltype == 4) for (var S = y.vals[m], E = 0; E < S.length; E++) {
            var A = S[E], U = A.chain.length;
            if (!(U > c)) {
              for (var x = true, Q = 0, N = 0; N < U; N++) {
                for (; r[i + Q + (1 + N)] == -1; ) Q++;
                A.chain[N] != r[i + Q + (1 + N)] && (x = false);
              }
              if (x) {
                for (r[i] = A.nglyph, N = 0; N < U + Q; N++) r[i + N + 1] = -1;
                break;
              }
            }
          }
          else if (h.ltype == 5 && y.fmt == 2) for (var C = l._lctf.getInterval(y.cDef, r[i]), z = y.cDef[C + 2], O = y.scset[z], L = 0; L < O.length; L++) {
            var H = O[L], D = H.input;
            if (!(D.length > c)) {
              for (x = true, N = 0; N < D.length; N++) {
                var Y = l._lctf.getInterval(y.cDef, r[i + 1 + N]);
                if (C == -1 && y.cDef[Y + 2] != D[N]) {
                  x = false;
                  break;
                }
              }
              if (x) {
                var I = H.substLookupRecords;
                for (E = 0; E < I.length; E += 2) I[E], I[E + 1];
              }
            }
          }
          else if (h.ltype == 6 && y.fmt == 3) {
            if (!l.U._glsCovered(r, y.backCvg, i - y.backCvg.length) || !l.U._glsCovered(r, y.inptCvg, i) || !l.U._glsCovered(r, y.ahedCvg, i + y.inptCvg.length)) continue;
            var me = y.lookupRec;
            for (L = 0; L < me.length; L += 2) {
              C = me[L];
              var j = f[me[L + 1]];
              l.U._applySubs(r, i + C, j, f);
            }
          }
        }
      }
    }, l.U._glsCovered = function(r, i, h) {
      for (var f = 0; f < i.length; f++) if (l._lctf.coverageIndex(i[f], r[h + f]) == -1) return false;
      return true;
    }, l.U.glyphsToPath = function(r, i, h) {
      for (var f = { cmds: [], crds: [] }, c = 0, d = 0; d < i.length; d++) {
        var m = i[d];
        if (m != -1) {
          for (var y = d < i.length - 1 && i[d + 1] != -1 ? i[d + 1] : 0, S = l.U.glyphToPath(r, m), E = 0; E < S.crds.length; E += 2) f.crds.push(S.crds[E] + c), f.crds.push(S.crds[E + 1]);
          for (h && f.cmds.push(h), E = 0; E < S.cmds.length; E++) f.cmds.push(S.cmds[E]);
          h && f.cmds.push("X"), c += r.hmtx.aWidth[m], d < i.length - 1 && (c += l.U.getPairAdjustment(r, m, y));
        }
      }
      return f;
    }, l.U.P = {}, l.U.P.moveTo = function(r, i, h) {
      r.cmds.push("M"), r.crds.push(i, h);
    }, l.U.P.lineTo = function(r, i, h) {
      r.cmds.push("L"), r.crds.push(i, h);
    }, l.U.P.curveTo = function(r, i, h, f, c, d, m) {
      r.cmds.push("C"), r.crds.push(i, h, f, c, d, m);
    }, l.U.P.qcurveTo = function(r, i, h, f, c) {
      r.cmds.push("Q"), r.crds.push(i, h, f, c);
    }, l.U.P.closePath = function(r) {
      r.cmds.push("Z");
    }, l.U._drawCFF = function(r, i, h, f, c) {
      for (var d = i.stack, m = i.nStems, y = i.haveWidth, S = i.width, E = i.open, A = 0, U = i.x, x = i.y, Q = 0, N = 0, C = 0, z = 0, O = 0, L = 0, H = 0, D = 0, Y = 0, I = 0, me = { val: 0, size: 0 }; A < r.length; ) {
        l.CFF.getCharString(r, A, me);
        var j = me.val;
        if (A += me.size, j == "o1" || j == "o18") d.length % 2 != 0 && !y && (S = d.shift() + f.nominalWidthX), m += d.length >> 1, d.length = 0, y = true;
        else if (j == "o3" || j == "o23") d.length % 2 != 0 && !y && (S = d.shift() + f.nominalWidthX), m += d.length >> 1, d.length = 0, y = true;
        else if (j == "o4") d.length > 1 && !y && (S = d.shift() + f.nominalWidthX, y = true), E && l.U.P.closePath(c), x += d.pop(), l.U.P.moveTo(c, U, x), E = true;
        else if (j == "o5") for (; d.length > 0; ) U += d.shift(), x += d.shift(), l.U.P.lineTo(c, U, x);
        else if (j == "o6" || j == "o7") for (var J = d.length, Z = j == "o6", te = 0; te < J; te++) {
          var q = d.shift();
          Z ? U += q : x += q, Z = !Z, l.U.P.lineTo(c, U, x);
        }
        else if (j == "o8" || j == "o24") {
          J = d.length;
          for (var he = 0; he + 6 <= J; ) Q = U + d.shift(), N = x + d.shift(), C = Q + d.shift(), z = N + d.shift(), U = C + d.shift(), x = z + d.shift(), l.U.P.curveTo(c, Q, N, C, z, U, x), he += 6;
          j == "o24" && (U += d.shift(), x += d.shift(), l.U.P.lineTo(c, U, x));
        } else {
          if (j == "o11") break;
          if (j == "o1234" || j == "o1235" || j == "o1236" || j == "o1237") j == "o1234" && (N = x, C = (Q = U + d.shift()) + d.shift(), I = z = N + d.shift(), L = z, D = x, U = (H = (O = (Y = C + d.shift()) + d.shift()) + d.shift()) + d.shift(), l.U.P.curveTo(c, Q, N, C, z, Y, I), l.U.P.curveTo(c, O, L, H, D, U, x)), j == "o1235" && (Q = U + d.shift(), N = x + d.shift(), C = Q + d.shift(), z = N + d.shift(), Y = C + d.shift(), I = z + d.shift(), O = Y + d.shift(), L = I + d.shift(), H = O + d.shift(), D = L + d.shift(), U = H + d.shift(), x = D + d.shift(), d.shift(), l.U.P.curveTo(c, Q, N, C, z, Y, I), l.U.P.curveTo(c, O, L, H, D, U, x)), j == "o1236" && (Q = U + d.shift(), N = x + d.shift(), C = Q + d.shift(), I = z = N + d.shift(), L = z, H = (O = (Y = C + d.shift()) + d.shift()) + d.shift(), D = L + d.shift(), U = H + d.shift(), l.U.P.curveTo(c, Q, N, C, z, Y, I), l.U.P.curveTo(c, O, L, H, D, U, x)), j == "o1237" && (Q = U + d.shift(), N = x + d.shift(), C = Q + d.shift(), z = N + d.shift(), Y = C + d.shift(), I = z + d.shift(), O = Y + d.shift(), L = I + d.shift(), H = O + d.shift(), D = L + d.shift(), Math.abs(H - U) > Math.abs(D - x) ? U = H + d.shift() : x = D + d.shift(), l.U.P.curveTo(c, Q, N, C, z, Y, I), l.U.P.curveTo(c, O, L, H, D, U, x));
          else if (j == "o14") {
            if (d.length > 0 && !y && (S = d.shift() + h.nominalWidthX, y = true), d.length == 4) {
              var Te = d.shift(), re = d.shift(), W = d.shift(), T = d.shift(), B = l.CFF.glyphBySE(h, W), V = l.CFF.glyphBySE(h, T);
              l.U._drawCFF(h.CharStrings[B], i, h, f, c), i.x = Te, i.y = re, l.U._drawCFF(h.CharStrings[V], i, h, f, c);
            }
            E && (l.U.P.closePath(c), E = false);
          } else if (j == "o19" || j == "o20") d.length % 2 != 0 && !y && (S = d.shift() + f.nominalWidthX), m += d.length >> 1, d.length = 0, y = true, A += m + 7 >> 3;
          else if (j == "o21") d.length > 2 && !y && (S = d.shift() + f.nominalWidthX, y = true), x += d.pop(), U += d.pop(), E && l.U.P.closePath(c), l.U.P.moveTo(c, U, x), E = true;
          else if (j == "o22") d.length > 1 && !y && (S = d.shift() + f.nominalWidthX, y = true), U += d.pop(), E && l.U.P.closePath(c), l.U.P.moveTo(c, U, x), E = true;
          else if (j == "o25") {
            for (; d.length > 6; ) U += d.shift(), x += d.shift(), l.U.P.lineTo(c, U, x);
            Q = U + d.shift(), N = x + d.shift(), C = Q + d.shift(), z = N + d.shift(), U = C + d.shift(), x = z + d.shift(), l.U.P.curveTo(c, Q, N, C, z, U, x);
          } else if (j == "o26") for (d.length % 2 && (U += d.shift()); d.length > 0; ) Q = U, N = x + d.shift(), U = C = Q + d.shift(), x = (z = N + d.shift()) + d.shift(), l.U.P.curveTo(c, Q, N, C, z, U, x);
          else if (j == "o27") for (d.length % 2 && (x += d.shift()); d.length > 0; ) N = x, C = (Q = U + d.shift()) + d.shift(), z = N + d.shift(), U = C + d.shift(), x = z, l.U.P.curveTo(c, Q, N, C, z, U, x);
          else if (j == "o10" || j == "o29") {
            var M = j == "o10" ? f : h;
            if (d.length == 0) console.debug("error: empty stack");
            else {
              var K = d.pop(), ie = M.Subrs[K + M.Bias];
              i.x = U, i.y = x, i.nStems = m, i.haveWidth = y, i.width = S, i.open = E, l.U._drawCFF(ie, i, h, f, c), U = i.x, x = i.y, m = i.nStems, y = i.haveWidth, S = i.width, E = i.open;
            }
          } else if (j == "o30" || j == "o31") {
            var se = d.length, pe = (he = 0, j == "o31");
            for (he += se - (J = -3 & se); he < J; ) pe ? (N = x, C = (Q = U + d.shift()) + d.shift(), x = (z = N + d.shift()) + d.shift(), J - he == 5 ? (U = C + d.shift(), he++) : U = C, pe = false) : (Q = U, N = x + d.shift(), C = Q + d.shift(), z = N + d.shift(), U = C + d.shift(), J - he == 5 ? (x = z + d.shift(), he++) : x = z, pe = true), l.U.P.curveTo(c, Q, N, C, z, U, x), he += 4;
          } else {
            if ((j + "").charAt(0) == "o") throw console.debug("Unknown operation: " + j, r), j;
            d.push(j);
          }
        }
      }
      i.x = U, i.y = x, i.nStems = m, i.haveWidth = y, i.width = S, i.open = E;
    };
    var v = l, s = { Typr: v };
    return p.Typr = v, p.default = s, Object.defineProperty(p, "__esModule", { value: true }), p;
  })({}).Typr;
}
/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/
function Fy() {
  return (function(p) {
    var l = Uint8Array, v = Uint16Array, s = Uint32Array, r = new l([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), i = new l([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), h = new l([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), f = function(j, J) {
      for (var Z = new v(31), te = 0; te < 31; ++te) Z[te] = J += 1 << j[te - 1];
      var q = new s(Z[30]);
      for (te = 1; te < 30; ++te) for (var he = Z[te]; he < Z[te + 1]; ++he) q[he] = he - Z[te] << 5 | te;
      return [Z, q];
    }, c = f(r, 2), d = c[0], m = c[1];
    d[28] = 258, m[258] = 28;
    for (var y = f(i, 0)[0], S = new v(32768), E = 0; E < 32768; ++E) {
      var A = (43690 & E) >>> 1 | (21845 & E) << 1;
      A = (61680 & (A = (52428 & A) >>> 2 | (13107 & A) << 2)) >>> 4 | (3855 & A) << 4, S[E] = ((65280 & A) >>> 8 | (255 & A) << 8) >>> 1;
    }
    var U = function(j, J, Z) {
      for (var te = j.length, q = 0, he = new v(J); q < te; ++q) ++he[j[q] - 1];
      var Te, re = new v(J);
      for (q = 0; q < J; ++q) re[q] = re[q - 1] + he[q - 1] << 1;
      {
        Te = new v(1 << J);
        var W = 15 - J;
        for (q = 0; q < te; ++q) if (j[q]) for (var T = q << 4 | j[q], B = J - j[q], V = re[j[q] - 1]++ << B, M = V | (1 << B) - 1; V <= M; ++V) Te[S[V] >>> W] = T;
      }
      return Te;
    }, x = new l(288);
    for (E = 0; E < 144; ++E) x[E] = 8;
    for (E = 144; E < 256; ++E) x[E] = 9;
    for (E = 256; E < 280; ++E) x[E] = 7;
    for (E = 280; E < 288; ++E) x[E] = 8;
    var Q = new l(32);
    for (E = 0; E < 32; ++E) Q[E] = 5;
    var N = U(x, 9), C = U(Q, 5), z = function(j) {
      for (var J = j[0], Z = 1; Z < j.length; ++Z) j[Z] > J && (J = j[Z]);
      return J;
    }, O = function(j, J, Z) {
      var te = J / 8 | 0;
      return (j[te] | j[te + 1] << 8) >> (7 & J) & Z;
    }, L = function(j, J) {
      var Z = J / 8 | 0;
      return (j[Z] | j[Z + 1] << 8 | j[Z + 2] << 16) >> (7 & J);
    }, H = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], D = function(j, J, Z) {
      var te = new Error(J || H[j]);
      if (te.code = j, Error.captureStackTrace && Error.captureStackTrace(te, D), !Z) throw te;
      return te;
    }, Y = function(j, J, Z) {
      var te = j.length;
      if (!te || Z && !Z.l && te < 5) return J || new l(0);
      var q = !J || Z, he = !Z || Z.i;
      Z || (Z = {}), J || (J = new l(3 * te));
      var Te, re = function(Xe) {
        var F = J.length;
        if (Xe > F) {
          var ye = new l(Math.max(2 * F, Xe));
          ye.set(J), J = ye;
        }
      }, W = Z.f || 0, T = Z.p || 0, B = Z.b || 0, V = Z.l, M = Z.d, K = Z.m, ie = Z.n, se = 8 * te;
      do {
        if (!V) {
          Z.f = W = O(j, T, 1);
          var pe = O(j, T + 1, 3);
          if (T += 3, !pe) {
            var Oe = j[(je = ((Te = T) / 8 | 0) + (7 & Te && 1) + 4) - 4] | j[je - 3] << 8, ze = je + Oe;
            if (ze > te) {
              he && D(0);
              break;
            }
            q && re(B + Oe), J.set(j.subarray(je, ze), B), Z.b = B += Oe, Z.p = T = 8 * ze;
            continue;
          }
          if (pe == 1) V = N, M = C, K = 9, ie = 5;
          else if (pe == 2) {
            var be = O(j, T, 31) + 257, Ee = O(j, T + 10, 15) + 4, Je = be + O(j, T + 5, 31) + 1;
            T += 14;
            for (var Ye = new l(Je), Ne = new l(19), Ve = 0; Ve < Ee; ++Ve) Ne[h[Ve]] = O(j, T + 3 * Ve, 7);
            T += 3 * Ee;
            var Ze = z(Ne), Me = (1 << Ze) - 1, Fe = U(Ne, Ze);
            for (Ve = 0; Ve < Je; ) {
              var je, _e = Fe[O(j, T, Me)];
              if (T += 15 & _e, (je = _e >>> 4) < 16) Ye[Ve++] = je;
              else {
                var rt = 0, Ge = 0;
                for (je == 16 ? (Ge = 3 + O(j, T, 3), T += 2, rt = Ye[Ve - 1]) : je == 17 ? (Ge = 3 + O(j, T, 7), T += 3) : je == 18 && (Ge = 11 + O(j, T, 127), T += 7); Ge--; ) Ye[Ve++] = rt;
              }
            }
            var Le = Ye.subarray(0, be), Be = Ye.subarray(be);
            K = z(Le), ie = z(Be), V = U(Le, K), M = U(Be, ie);
          } else D(1);
          if (T > se) {
            he && D(0);
            break;
          }
        }
        q && re(B + 131072);
        for (var gt = (1 << K) - 1, He = (1 << ie) - 1, Qe = T; ; Qe = T) {
          var $e = (rt = V[L(j, T) & gt]) >>> 4;
          if ((T += 15 & rt) > se) {
            he && D(0);
            break;
          }
          if (rt || D(2), $e < 256) J[B++] = $e;
          else {
            if ($e == 256) {
              Qe = T, V = null;
              break;
            }
            var ct = $e - 254;
            if ($e > 264) {
              var Rt = r[Ve = $e - 257];
              ct = O(j, T, (1 << Rt) - 1) + d[Ve], T += Rt;
            }
            var kt = M[L(j, T) & He], ot = kt >>> 4;
            if (kt || D(3), T += 15 & kt, Be = y[ot], ot > 3 && (Rt = i[ot], Be += L(j, T) & (1 << Rt) - 1, T += Rt), T > se) {
              he && D(0);
              break;
            }
            q && re(B + 131072);
            for (var ke = B + ct; B < ke; B += 4) J[B] = J[B - Be], J[B + 1] = J[B + 1 - Be], J[B + 2] = J[B + 2 - Be], J[B + 3] = J[B + 3 - Be];
            B = ke;
          }
        }
        Z.l = V, Z.p = Qe, Z.b = B, V && (W = 1, Z.m = K, Z.d = M, Z.n = ie);
      } while (!W);
      return B == J.length ? J : (function(Xe, F, ye) {
        (ye == null || ye > Xe.length) && (ye = Xe.length);
        var Re = new (Xe instanceof v ? v : Xe instanceof s ? s : l)(ye - F);
        return Re.set(Xe.subarray(F, ye)), Re;
      })(J, 0, B);
    }, I = new l(0), me = typeof TextDecoder < "u" && new TextDecoder();
    try {
      me.decode(I, { stream: true });
    } catch {
    }
    return p.convert_streams = function(j) {
      var J = new DataView(j), Z = 0;
      function te() {
        var be = J.getUint16(Z);
        return Z += 2, be;
      }
      function q() {
        var be = J.getUint32(Z);
        return Z += 4, be;
      }
      function he(be) {
        Oe.setUint16(ze, be), ze += 2;
      }
      function Te(be) {
        Oe.setUint32(ze, be), ze += 4;
      }
      for (var re = { signature: q(), flavor: q(), length: q(), numTables: te(), reserved: te(), totalSfntSize: q(), majorVersion: te(), minorVersion: te(), metaOffset: q(), metaLength: q(), metaOrigLength: q(), privOffset: q(), privLength: q() }, W = 0; Math.pow(2, W) <= re.numTables; ) W++;
      W--;
      for (var T = 16 * Math.pow(2, W), B = 16 * re.numTables - T, V = 12, M = [], K = 0; K < re.numTables; K++) M.push({ tag: q(), offset: q(), compLength: q(), origLength: q(), origChecksum: q() }), V += 16;
      var ie, se = new Uint8Array(12 + 16 * M.length + M.reduce((function(be, Ee) {
        return be + Ee.origLength + 4;
      }), 0)), pe = se.buffer, Oe = new DataView(pe), ze = 0;
      return Te(re.flavor), he(re.numTables), he(T), he(W), he(B), M.forEach((function(be) {
        Te(be.tag), Te(be.origChecksum), Te(V), Te(be.origLength), be.outOffset = V, (V += be.origLength) % 4 != 0 && (V += 4 - V % 4);
      })), M.forEach((function(be) {
        var Ee, Je = j.slice(be.offset, be.offset + be.compLength);
        if (be.compLength != be.origLength) {
          var Ye = new Uint8Array(be.origLength);
          Ee = new Uint8Array(Je, 2), Y(Ee, Ye);
        } else Ye = new Uint8Array(Je);
        se.set(Ye, be.outOffset);
        var Ne = 0;
        (V = be.outOffset + be.origLength) % 4 != 0 && (Ne = 4 - V % 4), se.set(new Uint8Array(Ne).buffer, be.outOffset + be.origLength), ie = V + Ne;
      })), pe.slice(0, ie);
    }, Object.defineProperty(p, "__esModule", { value: true }), p;
  })({}).convert_streams;
}
function jy(p, l) {
  const v = { M: 2, L: 2, Q: 4, C: 6, Z: 0 }, s = { C: "18g,ca,368,1kz", D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v", R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6", L: "x9u,jff,a,fd,jv", T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n" }, r = 1, i = 2, h = 4, f = 8, c = 16, d = 32;
  let m;
  function y(H) {
    if (!m) {
      const D = { R: i, L: r, D: h, C: c, U: d, T: f };
      m = /* @__PURE__ */ new Map();
      for (let Y in s) {
        let I = 0;
        s[Y].split(",").forEach((me) => {
          let [j, J] = me.split("+");
          j = parseInt(j, 36), J = J ? parseInt(J, 36) : 0, m.set(I += j, D[Y]);
          for (let Z = J; Z--; ) m.set(++I, D[Y]);
        });
      }
    }
    return m.get(H) || d;
  }
  const S = 1, E = 2, A = 3, U = 4, x = [null, "isol", "init", "fina", "medi"];
  function Q(H) {
    const D = new Uint8Array(H.length);
    let Y = d, I = S, me = -1;
    for (let j = 0; j < H.length; j++) {
      const J = H.codePointAt(j);
      let Z = y(J) | 0, te = S;
      Z & f || (Y & (r | h | c) ? Z & (i | h | c) ? (te = A, (I === S || I === A) && D[me]++) : Z & (r | d) && (I === E || I === U) && D[me]-- : Y & (i | d) && (I === E || I === U) && D[me]--, I = D[j] = te, Y = Z, me = j, J > 65535 && j++);
    }
    return D;
  }
  function N(H, D) {
    const Y = [];
    for (let me = 0; me < D.length; me++) {
      const j = D.codePointAt(me);
      j > 65535 && me++, Y.push(p.U.codeToGlyph(H, j));
    }
    const I = H.GSUB;
    if (I) {
      const { lookupList: me, featureList: j } = I;
      let J;
      const Z = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, te = [];
      j.forEach((q) => {
        if (Z.test(q.tag)) for (let he = 0; he < q.tab.length; he++) {
          if (te[q.tab[he]]) continue;
          te[q.tab[he]] = true;
          const Te = me[q.tab[he]], re = /^(isol|init|fina|medi)$/.test(q.tag);
          re && !J && (J = Q(D));
          for (let W = 0; W < Y.length; W++) (!J || !re || x[J[W]] === q.tag) && p.U._applySubs(Y, W, Te, me);
        }
      });
    }
    return Y;
  }
  function C(H, D) {
    const Y = new Int16Array(D.length * 3);
    let I = 0;
    for (; I < D.length; I++) {
      const Z = D[I];
      if (Z === -1) continue;
      Y[I * 3 + 2] = H.hmtx.aWidth[Z];
      const te = H.GPOS;
      if (te) {
        const q = te.lookupList;
        for (let he = 0; he < q.length; he++) {
          const Te = q[he];
          for (let re = 0; re < Te.tabs.length; re++) {
            const W = Te.tabs[re];
            if (Te.ltype === 1) {
              if (p._lctf.coverageIndex(W.coverage, Z) !== -1 && W.pos) {
                J(W.pos, I);
                break;
              }
            } else if (Te.ltype === 2) {
              let T = null, B = me();
              if (B !== -1) {
                const V = p._lctf.coverageIndex(W.coverage, D[B]);
                if (V !== -1) {
                  if (W.fmt === 1) {
                    const M = W.pairsets[V];
                    for (let K = 0; K < M.length; K++) M[K].gid2 === Z && (T = M[K]);
                  } else if (W.fmt === 2) {
                    const M = p.U._getGlyphClass(D[B], W.classDef1), K = p.U._getGlyphClass(Z, W.classDef2);
                    T = W.matrix[M][K];
                  }
                  if (T) {
                    T.val1 && J(T.val1, B), T.val2 && J(T.val2, I);
                    break;
                  }
                }
              }
            } else if (Te.ltype === 4) {
              const T = p._lctf.coverageIndex(W.markCoverage, Z);
              if (T !== -1) {
                const B = me(j), V = B === -1 ? -1 : p._lctf.coverageIndex(W.baseCoverage, D[B]);
                if (V !== -1) {
                  const M = W.markArray[T], K = W.baseArray[V][M.markClass];
                  Y[I * 3] = K.x - M.x + Y[B * 3] - Y[B * 3 + 2], Y[I * 3 + 1] = K.y - M.y + Y[B * 3 + 1];
                  break;
                }
              }
            } else if (Te.ltype === 6) {
              const T = p._lctf.coverageIndex(W.mark1Coverage, Z);
              if (T !== -1) {
                const B = me();
                if (B !== -1) {
                  const V = D[B];
                  if (z(H, V) === 3) {
                    const M = p._lctf.coverageIndex(W.mark2Coverage, V);
                    if (M !== -1) {
                      const K = W.mark1Array[T], ie = W.mark2Array[M][K.markClass];
                      Y[I * 3] = ie.x - K.x + Y[B * 3] - Y[B * 3 + 2], Y[I * 3 + 1] = ie.y - K.y + Y[B * 3 + 1];
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      } else if (H.kern && !H.cff) {
        const q = me();
        if (q !== -1) {
          const he = H.kern.glyph1.indexOf(D[q]);
          if (he !== -1) {
            const Te = H.kern.rval[he].glyph2.indexOf(Z);
            Te !== -1 && (Y[q * 3 + 2] += H.kern.rval[he].vals[Te]);
          }
        }
      }
    }
    return Y;
    function me(Z) {
      for (let te = I - 1; te >= 0; te--) if (D[te] !== -1 && (!Z || Z(D[te]))) return te;
      return -1;
    }
    function j(Z) {
      return z(H, Z) === 1;
    }
    function J(Z, te) {
      for (let q = 0; q < 3; q++) Y[te * 3 + q] += Z[q] || 0;
    }
  }
  function z(H, D) {
    const Y = H.GDEF && H.GDEF.glyphClassDef;
    return Y ? p.U._getGlyphClass(D, Y) : 0;
  }
  function O(...H) {
    for (let D = 0; D < H.length; D++) if (typeof H[D] == "number") return H[D];
  }
  function L(H) {
    const D = /* @__PURE__ */ Object.create(null), Y = H["OS/2"], I = H.hhea, me = H.head.unitsPerEm, j = O(Y && Y.sTypoAscender, I && I.ascender, me), J = { unitsPerEm: me, ascender: j, descender: O(Y && Y.sTypoDescender, I && I.descender, 0), capHeight: O(Y && Y.sCapHeight, j), xHeight: O(Y && Y.sxHeight, j), lineGap: O(Y && Y.sTypoLineGap, I && I.lineGap), supportsCodePoint(Z) {
      return p.U.codeToGlyph(H, Z) > 0;
    }, forEachGlyph(Z, te, q, he) {
      let Te = 0;
      const re = 1 / J.unitsPerEm * te, W = N(H, Z);
      let T = 0;
      const B = C(H, W);
      return W.forEach((V, M) => {
        if (V !== -1) {
          let K = D[V];
          if (!K) {
            const { cmds: ie, crds: se } = p.U.glyphToPath(H, V);
            let pe = "", Oe = 0;
            for (let Ye = 0, Ne = ie.length; Ye < Ne; Ye++) {
              const Ve = v[ie[Ye]];
              pe += ie[Ye];
              for (let Ze = 1; Ze <= Ve; Ze++) pe += (Ze > 1 ? "," : "") + se[Oe++];
            }
            let ze, be, Ee, Je;
            if (se.length) {
              ze = be = 1 / 0, Ee = Je = -1 / 0;
              for (let Ye = 0, Ne = se.length; Ye < Ne; Ye += 2) {
                let Ve = se[Ye], Ze = se[Ye + 1];
                Ve < ze && (ze = Ve), Ze < be && (be = Ze), Ve > Ee && (Ee = Ve), Ze > Je && (Je = Ze);
              }
            } else ze = Ee = be = Je = 0;
            K = D[V] = { index: V, advanceWidth: H.hmtx.aWidth[V], xMin: ze, yMin: be, xMax: Ee, yMax: Je, path: pe };
          }
          he.call(null, K, Te + B[M * 3] * re, B[M * 3 + 1] * re, T), Te += B[M * 3 + 2] * re, q && (Te += q * te);
        }
        T += Z.codePointAt(T) > 65535 ? 2 : 1;
      }), Te;
    } };
    return J;
  }
  return function(D) {
    const Y = new Uint8Array(D, 0, 4), I = p._bin.readASCII(Y, 0, 4);
    if (I === "wOFF") D = l(D);
    else if (I === "wOF2") throw new Error("woff2 fonts not supported");
    return L(p.parse(D)[0]);
  };
}
const ky = dr({ name: "Typr Font Parser", dependencies: [Hy, Fy, jy], init(p, l, v) {
  const s = p(), r = l();
  return v(s, r);
} });
/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/
function Yy() {
  return (function(p) {
    var l = function() {
      this.buckets = /* @__PURE__ */ new Map();
    };
    l.prototype.add = function(C) {
      var z = C >> 5;
      this.buckets.set(z, (this.buckets.get(z) || 0) | 1 << (31 & C));
    }, l.prototype.has = function(C) {
      var z = this.buckets.get(C >> 5);
      return z !== void 0 && (z & 1 << (31 & C)) != 0;
    }, l.prototype.serialize = function() {
      var C = [];
      return this.buckets.forEach((function(z, O) {
        C.push((+O).toString(36) + ":" + z.toString(36));
      })), C.join(",");
    }, l.prototype.deserialize = function(C) {
      var z = this;
      this.buckets.clear(), C.split(",").forEach((function(O) {
        var L = O.split(":");
        z.buckets.set(parseInt(L[0], 36), parseInt(L[1], 36));
      }));
    };
    var v = Math.pow(2, 8), s = v - 1, r = ~s;
    function i(C) {
      var z = (function(L) {
        return L & r;
      })(C).toString(16), O = (function(L) {
        return (L & r) + v - 1;
      })(C).toString(16);
      return "codepoint-index/plane" + (C >> 16) + "/" + z + "-" + O + ".json";
    }
    function h(C, z) {
      var O = C & s, L = z.codePointAt(O / 6 | 0);
      return ((L = (L || 48) - 48) & 1 << O % 6) != 0;
    }
    function f(C, z) {
      var O;
      (O = C, O.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map((function(L) {
        return L.split("-").map((function(H) {
          return parseInt(H.trim(), 16);
        }));
      }))).forEach((function(L) {
        var H = L[0], D = L[1];
        D === void 0 && (D = H), z(H, D);
      }));
    }
    function c(C, z) {
      f(C, (function(O, L) {
        for (var H = O; H <= L; H++) z(H);
      }));
    }
    var d = {}, m = {}, y = /* @__PURE__ */ new WeakMap(), S = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
    function E(C) {
      var z = y.get(C);
      return z || (z = new l(), c(C.ranges, (function(O) {
        return z.add(O);
      })), y.set(C, z)), z;
    }
    var A, U = /* @__PURE__ */ new Map();
    function x(C, z, O) {
      return C[z] ? z : C[O] ? O : (function(L) {
        for (var H in L) return H;
      })(C);
    }
    function Q(C, z) {
      var O = z;
      if (!C.includes(O)) {
        O = 1 / 0;
        for (var L = 0; L < C.length; L++) Math.abs(C[L] - z) < Math.abs(O - z) && (O = C[L]);
      }
      return O;
    }
    function N(C) {
      return A || (A = /* @__PURE__ */ new Set(), c("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", (function(z) {
        A.add(z);
      }))), A.has(C);
    }
    return p.CodePointSet = l, p.clearCache = function() {
      d = {}, m = {};
    }, p.getFontsForString = function(C, z) {
      z === void 0 && (z = {});
      var O, L = z.lang;
      L === void 0 && (L = new RegExp("\\p{Script=Hangul}", "u").test(O = C) ? "ko" : new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}", "u").test(O) ? "ja" : "en");
      var H = z.category;
      H === void 0 && (H = "sans-serif");
      var D = z.style;
      D === void 0 && (D = "normal");
      var Y = z.weight;
      Y === void 0 && (Y = 400);
      var I = (z.dataUrl || S).replace(/\/$/g, ""), me = /* @__PURE__ */ new Map(), j = new Uint8Array(C.length), J = {}, Z = {}, te = new Array(C.length), q = /* @__PURE__ */ new Map(), he = false;
      function Te(T) {
        var B = U.get(T);
        return B || (B = fetch(I + "/" + T).then((function(V) {
          if (!V.ok) throw new Error(V.statusText);
          return V.json().then((function(M) {
            if (!Array.isArray(M) || M[0] !== 1) throw new Error("Incorrect schema version; need 1, got " + M[0]);
            return M[1];
          }));
        })).catch((function(V) {
          if (I !== S) return he || (console.error('unicode-font-resolver: Failed loading from dataUrl "' + I + '", trying default CDN. ' + V.message), he = true), I = S, U.delete(T), Te(T);
          throw V;
        })), U.set(T, B)), B;
      }
      for (var re = function(T) {
        var B = C.codePointAt(T), V = i(B);
        te[T] = V, d[V] || q.has(V) || q.set(V, Te(V).then((function(M) {
          d[V] = M;
        }))), B > 65535 && (T++, W = T);
      }, W = 0; W < C.length; W++) re(W);
      return Promise.all(q.values()).then((function() {
        q.clear();
        for (var T = function(V) {
          var M = C.codePointAt(V), K = null, ie = d[te[V]], se = void 0;
          for (var pe in ie) {
            var Oe = Z[pe];
            if (Oe === void 0 && (Oe = Z[pe] = new RegExp(pe).test(L || "en")), Oe) {
              for (var ze in se = pe, ie[pe]) if (h(M, ie[pe][ze])) {
                K = ze;
                break;
              }
              break;
            }
          }
          if (!K) {
            e: for (var be in ie) if (be !== se) {
              for (var Ee in ie[be]) if (h(M, ie[be][Ee])) {
                K = Ee;
                break e;
              }
            }
          }
          K || (console.debug("No font coverage for U+" + M.toString(16)), K = "latin"), te[V] = K, m[K] || q.has(K) || q.set(K, Te("font-meta/" + K + ".json").then((function(Je) {
            m[K] = Je;
          }))), M > 65535 && (V++, B = V);
        }, B = 0; B < C.length; B++) T(B);
        return Promise.all(q.values());
      })).then((function() {
        for (var T, B = null, V = 0; V < C.length; V++) {
          var M = C.codePointAt(V);
          if (B && (N(M) || E(B).has(M))) j[V] = j[V - 1];
          else {
            B = m[te[V]];
            var K = J[B.id];
            if (!K) {
              var ie = B.typeforms, se = x(ie, H, "sans-serif"), pe = x(ie[se], D, "normal"), Oe = Q((T = ie[se]) === null || T === void 0 ? void 0 : T[pe], Y);
              K = J[B.id] = I + "/font-files/" + B.id + "/" + se + "." + pe + "." + Oe + ".woff";
            }
            var ze = me.get(K);
            ze == null && (ze = me.size, me.set(K, ze)), j[V] = ze;
          }
          M > 65535 && (V++, j[V] = j[V - 1]);
        }
        return { fontUrls: Array.from(me.keys()), chars: j };
      }));
    }, Object.defineProperty(p, "__esModule", { value: true }), p;
  })({});
}
function Xy(p, l) {
  const v = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  function r(h, f) {
    const c = (d) => {
      console.error(`Failure loading font ${h}`, d);
    };
    try {
      const d = new XMLHttpRequest();
      d.open("get", h, true), d.responseType = "arraybuffer", d.onload = function() {
        if (d.status >= 400) c(new Error(d.statusText));
        else if (d.status > 0) try {
          const m = p(d.response);
          m.src = h, f(m);
        } catch (m) {
          c(m);
        }
      }, d.onerror = c, d.send();
    } catch (d) {
      c(d);
    }
  }
  function i(h, f) {
    let c = v[h];
    c ? f(c) : s[h] ? s[h].push(f) : (s[h] = [f], r(h, (d) => {
      d.src = h, v[h] = d, s[h].forEach((m) => m(d)), delete s[h];
    }));
  }
  return function(h, f, { lang: c, fonts: d = [], style: m = "normal", weight: y = "normal", unicodeFontsURL: S } = {}) {
    const E = new Uint8Array(h.length), A = [];
    h.length || N();
    const U = /* @__PURE__ */ new Map(), x = [];
    if (m !== "italic" && (m = "normal"), typeof y != "number" && (y = y === "bold" ? 700 : 400), d && !Array.isArray(d) && (d = [d]), d = d.slice().filter((z) => !z.lang || z.lang.test(c)).reverse(), d.length) {
      let H = 0;
      (function D(Y = 0) {
        for (let I = Y, me = h.length; I < me; I++) {
          const j = h.codePointAt(I);
          if (H === 1 && A[E[I - 1]].supportsCodePoint(j) || I > 0 && /\s/.test(h[I])) E[I] = E[I - 1], H === 2 && (x[x.length - 1][1] = I);
          else for (let J = E[I], Z = d.length; J <= Z; J++) if (J === Z) {
            const te = H === 2 ? x[x.length - 1] : x[x.length] = [I, I];
            te[1] = I, H = 2;
          } else {
            E[I] = J;
            const { src: te, unicodeRange: q } = d[J];
            if (!q || C(j, q)) {
              const he = v[te];
              if (!he) {
                i(te, () => {
                  D(I);
                });
                return;
              }
              if (he.supportsCodePoint(j)) {
                let Te = U.get(he);
                typeof Te != "number" && (Te = A.length, A.push(he), U.set(he, Te)), E[I] = Te, H = 1;
                break;
              }
            }
          }
          j > 65535 && I + 1 < me && (E[I + 1] = E[I], I++, H === 2 && (x[x.length - 1][1] = I));
        }
        Q();
      })();
    } else x.push([0, h.length - 1]), Q();
    function Q() {
      if (x.length) {
        const z = x.map((O) => h.substring(O[0], O[1] + 1)).join(`
`);
        l.getFontsForString(z, { lang: c || void 0, style: m, weight: y, dataUrl: S }).then(({ fontUrls: O, chars: L }) => {
          const H = A.length;
          let D = 0;
          x.forEach((I) => {
            for (let me = 0, j = I[1] - I[0]; me <= j; me++) E[I[0] + me] = L[D++] + H;
            D++;
          });
          let Y = 0;
          O.forEach((I, me) => {
            i(I, (j) => {
              A[me + H] = j, ++Y === O.length && N();
            });
          });
        });
      } else N();
    }
    function N() {
      f({ chars: E, fonts: A });
    }
    function C(z, O) {
      for (let L = 0; L < O.length; L++) {
        const [H, D = H] = O[L];
        if (H <= z && z <= D) return true;
      }
      return false;
    }
  };
}
const Vy = dr({ name: "FontResolver", dependencies: [Xy, ky, Yy], init(p, l, v) {
  return p(l, v());
} });
function Zy(p, l) {
  const s = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, r = "[^\\S\\u00A0]", i = new RegExp(`${r}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
  function h({ text: A, lang: U, fonts: x, style: Q, weight: N, preResolvedFonts: C, unicodeFontsURL: z }, O) {
    const L = ({ chars: H, fonts: D }) => {
      let Y, I;
      const me = [];
      for (let j = 0; j < H.length; j++) H[j] !== I ? (I = H[j], me.push(Y = { start: j, end: j, fontObj: D[H[j]] })) : Y.end = j;
      O(me);
    };
    C ? L(C) : p(A, L, { lang: U, fonts: x, style: Q, weight: N, unicodeFontsURL: z });
  }
  function f({ text: A = "", font: U, lang: x, sdfGlyphSize: Q = 64, fontSize: N = 400, fontWeight: C = 1, fontStyle: z = "normal", letterSpacing: O = 0, lineHeight: L = "normal", maxWidth: H = 1 / 0, direction: D, textAlign: Y = "left", textIndent: I = 0, whiteSpace: me = "normal", overflowWrap: j = "normal", anchorX: J = 0, anchorY: Z = 0, metricsOnly: te = false, unicodeFontsURL: q, preResolvedFonts: he = null, includeCaretPositions: Te = false, chunkedBoundsSize: re = 8192, colorRanges: W = null }, T) {
    const B = y(), V = { fontLoad: 0, typesetting: 0 };
    A.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), A = A.replace(/\r\n/g, `
`).replace(/\r/g, `
`)), N = +N, O = +O, H = +H, L = L || "normal", I = +I, h({ text: A, lang: x, style: z, weight: C, fonts: typeof U == "string" ? [{ src: U }] : U, unicodeFontsURL: q, preResolvedFonts: he }, (M) => {
      V.fontLoad = y() - B;
      const K = isFinite(H);
      let ie = null, se = null, pe = null, Oe = null, ze = null, be = null, Ee = null, Je = null, Ye = 0, Ne = 0, Ve = me !== "nowrap";
      const Ze = /* @__PURE__ */ new Map(), Me = y();
      let Fe = I, je = 0, _e = new S();
      const rt = [_e];
      M.forEach((He) => {
        const { fontObj: Qe } = He, { ascender: $e, descender: ct, unitsPerEm: Rt, lineGap: kt, capHeight: ot, xHeight: ke } = Qe;
        let Xe = Ze.get(Qe);
        if (!Xe) {
          const ue = N / Rt, ut = L === "normal" ? ($e - ct + kt) * ue : L * N, ln = (ut - ($e - ct) * ue) / 2, yt = Math.min(ut, ($e - ct) * ue), vt = ($e + ct) / 2 * ue + yt / 2;
          Xe = { index: Ze.size, src: Qe.src, fontObj: Qe, fontSizeMult: ue, unitsPerEm: Rt, ascender: $e * ue, descender: ct * ue, capHeight: ot * ue, xHeight: ke * ue, lineHeight: ut, baseline: -ln - $e * ue, caretTop: vt, caretBottom: vt - yt }, Ze.set(Qe, Xe);
        }
        const { fontSizeMult: F } = Xe, ye = A.slice(He.start, He.end + 1);
        let Re, Pe;
        Qe.forEachGlyph(ye, N, O, (ue, ut, ln, yt) => {
          ut += je, yt += He.start, Re = ut, Pe = ue;
          const vt = A.charAt(yt), St = ue.advanceWidth * F, _t = _e.count;
          let it;
          if ("isEmpty" in ue || (ue.isWhitespace = !!vt && new RegExp(r).test(vt), ue.canBreakAfter = !!vt && i.test(vt), ue.isEmpty = ue.xMin === ue.xMax || ue.yMin === ue.yMax || s.test(vt)), !ue.isWhitespace && !ue.isEmpty && Ne++, Ve && K && !ue.isWhitespace && ut + St + Fe > H && _t) {
            if (_e.glyphAt(_t - 1).glyphObj.canBreakAfter) it = new S(), Fe = -ut;
            else for (let Yt = _t; Yt--; ) if (Yt === 0 && j === "break-word") {
              it = new S(), Fe = -ut;
              break;
            } else if (_e.glyphAt(Yt).glyphObj.canBreakAfter) {
              it = _e.splitAt(Yt + 1);
              const $t = it.glyphAt(0).x;
              Fe -= $t;
              for (let rn = it.count; rn--; ) it.glyphAt(rn).x -= $t;
              break;
            }
            it && (_e.isSoftWrapped = true, _e = it, rt.push(_e), Ye = H);
          }
          let Mt = _e.glyphAt(_e.count);
          Mt.glyphObj = ue, Mt.x = ut + Fe, Mt.y = ln, Mt.width = St, Mt.charIndex = yt, Mt.fontData = Xe, vt === `
` && (_e = new S(), rt.push(_e), Fe = -(ut + St + O * N) + I);
        }), je = Re + Pe.advanceWidth * F + O * N;
      });
      let Ge = 0;
      rt.forEach((He) => {
        let Qe = true;
        for (let $e = He.count; $e--; ) {
          const ct = He.glyphAt($e);
          Qe && !ct.glyphObj.isWhitespace && (He.width = ct.x + ct.width, He.width > Ye && (Ye = He.width), Qe = false);
          let { lineHeight: Rt, capHeight: kt, xHeight: ot, baseline: ke } = ct.fontData;
          Rt > He.lineHeight && (He.lineHeight = Rt);
          const Xe = ke - He.baseline;
          Xe < 0 && (He.baseline += Xe, He.cap += Xe, He.ex += Xe), He.cap = Math.max(He.cap, He.baseline + kt), He.ex = Math.max(He.ex, He.baseline + ot);
        }
        He.baseline -= Ge, He.cap -= Ge, He.ex -= Ge, Ge += He.lineHeight;
      });
      let Le = 0, Be = 0;
      if (J && (typeof J == "number" ? Le = -J : typeof J == "string" && (Le = -Ye * (J === "left" ? 0 : J === "center" ? 0.5 : J === "right" ? 1 : d(J)))), Z && (typeof Z == "number" ? Be = -Z : typeof Z == "string" && (Be = Z === "top" ? 0 : Z === "top-baseline" ? -rt[0].baseline : Z === "top-cap" ? -rt[0].cap : Z === "top-ex" ? -rt[0].ex : Z === "middle" ? Ge / 2 : Z === "bottom" ? Ge : Z === "bottom-baseline" ? -rt[rt.length - 1].baseline : d(Z) * Ge)), !te) {
        const He = l.getEmbeddingLevels(A, D);
        ie = new Uint16Array(Ne), se = new Uint8Array(Ne), pe = new Float32Array(Ne * 2), Oe = {}, Ee = [1 / 0, 1 / 0, -1 / 0, -1 / 0], Je = [], Te && (be = new Float32Array(A.length * 4)), W && (ze = new Uint8Array(Ne * 3));
        let Qe = 0, $e = -1, ct = -1, Rt, kt;
        if (rt.forEach((ot, ke) => {
          let { count: Xe, width: F } = ot;
          if (Xe > 0) {
            let ye = 0;
            for (let yt = Xe; yt-- && ot.glyphAt(yt).glyphObj.isWhitespace; ) ye++;
            let Re = 0, Pe = 0;
            if (Y === "center") Re = (Ye - F) / 2;
            else if (Y === "right") Re = Ye - F;
            else if (Y === "justify" && ot.isSoftWrapped) {
              let yt = 0;
              for (let vt = Xe - ye; vt--; ) ot.glyphAt(vt).glyphObj.isWhitespace && yt++;
              Pe = (Ye - F) / yt;
            }
            if (Pe || Re) {
              let yt = 0;
              for (let vt = 0; vt < Xe; vt++) {
                let St = ot.glyphAt(vt);
                const _t = St.glyphObj;
                St.x += Re + yt, Pe !== 0 && _t.isWhitespace && vt < Xe - ye && (yt += Pe, St.width += Pe);
              }
            }
            const ue = l.getReorderSegments(A, He, ot.glyphAt(0).charIndex, ot.glyphAt(ot.count - 1).charIndex);
            for (let yt = 0; yt < ue.length; yt++) {
              const [vt, St] = ue[yt];
              let _t = 1 / 0, it = -1 / 0;
              for (let Mt = 0; Mt < Xe; Mt++) if (ot.glyphAt(Mt).charIndex >= vt) {
                let Yt = Mt, $t = Mt;
                for (; $t < Xe; $t++) {
                  let rn = ot.glyphAt($t);
                  if (rn.charIndex > St) break;
                  $t < Xe - ye && (_t = Math.min(_t, rn.x), it = Math.max(it, rn.x + rn.width));
                }
                for (let rn = Yt; rn < $t; rn++) {
                  const Hn = ot.glyphAt(rn);
                  Hn.x = it - (Hn.x + Hn.width - _t);
                }
                break;
              }
            }
            let ut;
            const ln = (yt) => ut = yt;
            for (let yt = 0; yt < Xe; yt++) {
              const vt = ot.glyphAt(yt);
              ut = vt.glyphObj;
              const St = ut.index, _t = He.levels[vt.charIndex] & 1;
              if (_t) {
                const it = l.getMirroredCharacter(A[vt.charIndex]);
                it && vt.fontData.fontObj.forEachGlyph(it, 0, 0, ln);
              }
              if (Te) {
                const { charIndex: it, fontData: Mt } = vt, Yt = vt.x + Le, $t = vt.x + vt.width + Le;
                be[it * 4] = _t ? $t : Yt, be[it * 4 + 1] = _t ? Yt : $t, be[it * 4 + 2] = ot.baseline + Mt.caretBottom + Be, be[it * 4 + 3] = ot.baseline + Mt.caretTop + Be;
                const rn = it - $e;
                rn > 1 && m(be, $e, rn), $e = it;
              }
              if (W) {
                const { charIndex: it } = vt;
                for (; it > ct; ) ct++, W.hasOwnProperty(ct) && (kt = W[ct]);
              }
              if (!ut.isWhitespace && !ut.isEmpty) {
                const it = Qe++, { fontSizeMult: Mt, src: Yt, index: $t } = vt.fontData, rn = Oe[Yt] || (Oe[Yt] = {});
                rn[St] || (rn[St] = { path: ut.path, pathBounds: [ut.xMin, ut.yMin, ut.xMax, ut.yMax] });
                const Hn = vt.x + Le, Fn = vt.y + ot.baseline + Be;
                pe[it * 2] = Hn, pe[it * 2 + 1] = Fn;
                const Qn = Hn + ut.xMin * Mt, wn = Fn + ut.yMin * Mt, jn = Hn + ut.xMax * Mt, ft = Fn + ut.yMax * Mt;
                Qn < Ee[0] && (Ee[0] = Qn), wn < Ee[1] && (Ee[1] = wn), jn > Ee[2] && (Ee[2] = jn), ft > Ee[3] && (Ee[3] = ft), it % re === 0 && (Rt = { start: it, end: it, rect: [1 / 0, 1 / 0, -1 / 0, -1 / 0] }, Je.push(Rt)), Rt.end++;
                const It = Rt.rect;
                if (Qn < It[0] && (It[0] = Qn), wn < It[1] && (It[1] = wn), jn > It[2] && (It[2] = jn), ft > It[3] && (It[3] = ft), ie[it] = St, se[it] = $t, W) {
                  const Pt = it * 3;
                  ze[Pt] = kt >> 16 & 255, ze[Pt + 1] = kt >> 8 & 255, ze[Pt + 2] = kt & 255;
                }
              }
            }
          }
        }), be) {
          const ot = A.length - $e;
          ot > 1 && m(be, $e, ot);
        }
      }
      const gt = [];
      Ze.forEach(({ index: He, src: Qe, unitsPerEm: $e, ascender: ct, descender: Rt, lineHeight: kt, capHeight: ot, xHeight: ke }) => {
        gt[He] = { src: Qe, unitsPerEm: $e, ascender: ct, descender: Rt, lineHeight: kt, capHeight: ot, xHeight: ke };
      }), V.typesetting = y() - Me, T({ glyphIds: ie, glyphFontIndices: se, glyphPositions: pe, glyphData: Oe, fontData: gt, caretPositions: be, glyphColors: ze, chunkedBounds: Je, fontSize: N, topBaseline: Be + rt[0].baseline, blockBounds: [Le, Be - Ge, Le + Ye, Be], visibleBounds: Ee, timings: V });
    });
  }
  function c(A, U) {
    f({ ...A, metricsOnly: true }, (x) => {
      const [Q, N, C, z] = x.blockBounds;
      U({ width: C - Q, height: z - N });
    });
  }
  function d(A) {
    let U = A.match(/^([\d.]+)%$/), x = U ? parseFloat(U[1]) : NaN;
    return isNaN(x) ? 0 : x / 100;
  }
  function m(A, U, x) {
    const Q = A[U * 4], N = A[U * 4 + 1], C = A[U * 4 + 2], z = A[U * 4 + 3], O = (N - Q) / x;
    for (let L = 0; L < x; L++) {
      const H = (U + L) * 4;
      A[H] = Q + O * L, A[H + 1] = Q + O * (L + 1), A[H + 2] = C, A[H + 3] = z;
    }
  }
  function y() {
    return (self.performance || Date).now();
  }
  function S() {
    this.data = [];
  }
  const E = ["glyphObj", "x", "y", "width", "charIndex", "fontData"];
  return S.prototype = { width: 0, lineHeight: 0, baseline: 0, cap: 0, ex: 0, isSoftWrapped: false, get count() {
    return Math.ceil(this.data.length / E.length);
  }, glyphAt(A) {
    let U = S.flyweight;
    return U.data = this.data, U.index = A, U;
  }, splitAt(A) {
    let U = new S();
    return U.data = this.data.splice(A * E.length), U;
  } }, S.flyweight = E.reduce((A, U, x, Q) => (Object.defineProperty(A, U, { get() {
    return this.data[this.index * E.length + x];
  }, set(N) {
    this.data[this.index * E.length + x] = N;
  } }), A), { data: null, index: 0 }), { typeset: f, measure: c };
}
const pl = () => (self.performance || Date).now(), Vs = c0();
let Dm;
function Qy(p, l, v, s, r, i, h, f, c, d, m = true) {
  return m ? Iy(p, l, v, s, r, i, h, f, c, d).then(null, (y) => (Dm || (console.warn("WebGL SDF generation failed, falling back to JS", y), Dm = true), Om(p, l, v, s, r, i, h, f, c, d))) : Om(p, l, v, s, r, i, h, f, c, d);
}
const Hs = [], qy = 5;
let df = 0;
function h0() {
  const p = pl();
  for (; Hs.length && pl() - p < qy; ) Hs.shift()();
  df = Hs.length ? setTimeout(h0, 0) : 0;
}
const Iy = (...p) => new Promise((l, v) => {
  Hs.push(() => {
    const s = pl();
    try {
      Vs.webgl.generateIntoCanvas(...p), l({ timing: pl() - s });
    } catch (r) {
      v(r);
    }
  }), df || (df = setTimeout(h0, 0));
}), Py = 4, Wy = 2e3, Cm = {};
let Ky = 0;
function Om(p, l, v, s, r, i, h, f, c, d) {
  const m = "TroikaTextSDFGenerator_JS_" + Ky++ % Py;
  let y = Cm[m];
  return y || (y = Cm[m] = { workerModule: dr({ name: m, workerId: m, dependencies: [c0, pl], init(S, E) {
    const A = S().javascript.generate;
    return function(...U) {
      const x = E();
      return { textureData: A(...U), timing: E() - x };
    };
  }, getTransferables(S) {
    return [S.textureData.buffer];
  } }), requests: 0, idleTimer: null }), y.requests++, clearTimeout(y.idleTimer), y.workerModule(p, l, v, s, r, i).then(({ textureData: S, timing: E }) => {
    const A = pl(), U = new Uint8Array(S.length * 4);
    for (let x = 0; x < S.length; x++) U[x * 4 + d] = S[x];
    return Vs.webglUtils.renderImageData(h, U, f, c, p, l, 1 << 3 - d), E += pl() - A, --y.requests === 0 && (y.idleTimer = setTimeout(() => {
      Uy(m);
    }, Wy)), { timing: E };
  });
}
function Jy(p) {
  p._warm || (Vs.webgl.isSupported(p), p._warm = true);
}
const $y = Vs.webglUtils.resizeWebGLCanvasWithoutClearing, io = { unicodeFontsURL: null, sdfGlyphSize: 64, sdfMargin: 1 / 16, sdfExponent: 9, textureWidth: 2048 }, e2 = new Zn();
function ar() {
  return (self.performance || Date).now();
}
const zm = /* @__PURE__ */ Object.create(null);
function d0(p, l) {
  p = a2({}, p);
  const v = ar(), s = [];
  if (p.font && s.push({ label: "user", src: i2(p.font) }), p.font = s, p.text = "" + p.text, p.sdfGlyphSize = p.sdfGlyphSize || io.sdfGlyphSize, p.unicodeFontsURL = p.unicodeFontsURL || io.unicodeFontsURL, p.colorRanges != null) {
    let S = {};
    for (let E in p.colorRanges) if (p.colorRanges.hasOwnProperty(E)) {
      let A = p.colorRanges[E];
      typeof A != "number" && (A = e2.set(A).getHex()), S[E] = A;
    }
    p.colorRanges = S;
  }
  Object.freeze(p);
  const { textureWidth: r, sdfExponent: i } = io, { sdfGlyphSize: h } = p, f = r / h * 4;
  let c = zm[h];
  if (!c) {
    const S = document.createElement("canvas");
    S.width = r, S.height = h * 256 / f, c = zm[h] = { glyphCount: 0, sdfGlyphSize: h, sdfCanvas: S, sdfTexture: new vl(S, void 0, void 0, void 0, ta, ta), contextLost: false, glyphsByFont: /* @__PURE__ */ new Map() }, c.sdfTexture.generateMipmaps = false, t2(c);
  }
  const { sdfTexture: d, sdfCanvas: m } = c;
  p0(p).then((S) => {
    const { glyphIds: E, glyphFontIndices: A, fontData: U, glyphPositions: x, fontSize: Q, timings: N } = S, C = [], z = new Float32Array(E.length * 4);
    let O = 0, L = 0;
    const H = ar(), D = U.map((J) => {
      let Z = c.glyphsByFont.get(J.src);
      return Z || c.glyphsByFont.set(J.src, Z = /* @__PURE__ */ new Map()), Z;
    });
    E.forEach((J, Z) => {
      const te = A[Z], { src: q, unitsPerEm: he } = U[te];
      let Te = D[te].get(J);
      if (!Te) {
        const { path: V, pathBounds: M } = S.glyphData[q][J], K = Math.max(M[2] - M[0], M[3] - M[1]) / h * (io.sdfMargin * h + 0.5), ie = c.glyphCount++, se = [M[0] - K, M[1] - K, M[2] + K, M[3] + K];
        D[te].set(J, Te = { path: V, atlasIndex: ie, sdfViewBox: se }), C.push(Te);
      }
      const { sdfViewBox: re } = Te, W = x[L++], T = x[L++], B = Q / he;
      z[O++] = W + re[0] * B, z[O++] = T + re[1] * B, z[O++] = W + re[2] * B, z[O++] = T + re[3] * B, E[Z] = Te.atlasIndex;
    }), N.quads = (N.quads || 0) + (ar() - H);
    const Y = ar();
    N.sdf = {};
    const I = m.height, me = Math.ceil(c.glyphCount / f), j = Math.pow(2, Math.ceil(Math.log2(me * h)));
    j > I && (console.info(`Increasing SDF texture size ${I}->${j}`), $y(m, r, j), d.dispose()), Promise.all(C.map((J) => v0(J, c, p.gpuAccelerateSDF).then(({ timing: Z }) => {
      N.sdf[J.atlasIndex] = Z;
    }))).then(() => {
      C.length && !c.contextLost && (m0(c), d.needsUpdate = true), N.sdfTotal = ar() - Y, N.total = ar() - v, l(Object.freeze({ parameters: p, sdfTexture: d, sdfGlyphSize: h, sdfExponent: i, glyphBounds: z, glyphAtlasIndices: E, glyphColors: S.glyphColors, caretPositions: S.caretPositions, chunkedBounds: S.chunkedBounds, ascender: S.ascender, descender: S.descender, lineHeight: S.lineHeight, capHeight: S.capHeight, xHeight: S.xHeight, topBaseline: S.topBaseline, blockBounds: S.blockBounds, visibleBounds: S.visibleBounds, timings: S.timings }));
    });
  }), Promise.resolve().then(() => {
    c.contextLost || Jy(m);
  });
}
function v0({ path: p, atlasIndex: l, sdfViewBox: v }, { sdfGlyphSize: s, sdfCanvas: r, contextLost: i }, h) {
  if (i) return Promise.resolve({ timing: -1 });
  const { textureWidth: f, sdfExponent: c } = io, d = Math.max(v[2] - v[0], v[3] - v[1]), m = Math.floor(l / 4), y = m % (f / s) * s, S = Math.floor(m / (f / s)) * s, E = l % 4;
  return Qy(s, s, p, v, d, c, r, y, S, E, h);
}
function t2(p) {
  const l = p.sdfCanvas;
  l.addEventListener("webglcontextlost", (v) => {
    console.log("Context Lost", v), v.preventDefault(), p.contextLost = true;
  }), l.addEventListener("webglcontextrestored", (v) => {
    console.log("Context Restored", v), p.contextLost = false;
    const s = [];
    p.glyphsByFont.forEach((r) => {
      r.forEach((i) => {
        s.push(v0(i, p, true));
      });
    }), Promise.all(s).then(() => {
      m0(p), p.sdfTexture.needsUpdate = true;
    });
  });
}
function n2({ font: p, characters: l, sdfGlyphSize: v }, s) {
  let r = Array.isArray(l) ? l.join(`
`) : "" + l;
  d0({ font: p, sdfGlyphSize: v, text: r }, s);
}
function a2(p, l) {
  for (let v in l) l.hasOwnProperty(v) && (p[v] = l[v]);
  return p;
}
let Rs;
function i2(p) {
  return Rs || (Rs = typeof document > "u" ? {} : document.createElement("a")), Rs.href = p, Rs.href;
}
function m0(p) {
  if (typeof createImageBitmap != "function") {
    console.info("Safari<15: applying SDF canvas workaround");
    const { sdfCanvas: l, sdfTexture: v } = p, { width: s, height: r } = l, i = p.sdfCanvas.getContext("webgl");
    let h = v.image.data;
    (!h || h.length !== s * r * 4) && (h = new Uint8Array(s * r * 4), v.image = { width: s, height: r, data: h }, v.flipY = false, v.isDataTexture = true), i.readPixels(0, 0, s, r, i.RGBA, i.UNSIGNED_BYTE, h);
  }
}
const l2 = dr({ name: "Typesetter", dependencies: [Zy, Vy, Cy], init(p, l, v) {
  return p(l, v());
} }), p0 = dr({ name: "Typesetter", dependencies: [l2], init(p) {
  return function(l) {
    return new Promise((v) => {
      p.typeset(l, v);
    });
  };
}, getTransferables(p) {
  const l = [];
  for (let v in p) p[v] && p[v].buffer && l.push(p[v].buffer);
  return l;
} });
p0.onMainThread;
const Rm = {};
function r2(p) {
  let l = Rm[p];
  return l || (l = Rm[p] = new ca(1, 1, p, p).translate(0.5, 0.5, 0)), l;
}
const o2 = "aTroikaGlyphBounds", Lm = "aTroikaGlyphIndex", s2 = "aTroikaGlyphColor";
class u2 extends Im {
  constructor() {
    super(), this.detail = 1, this.curveRadius = 0, this.groups = [{ start: 0, count: 1 / 0, materialIndex: 0 }, { start: 0, count: 1 / 0, materialIndex: 1 }], this.boundingSphere = new pf(), this.boundingBox = new po();
  }
  computeBoundingSphere() {
  }
  computeBoundingBox() {
  }
  set detail(l) {
    if (l !== this._detail) {
      this._detail = l, (typeof l != "number" || l < 1) && (l = 1);
      let v = r2(l);
      ["position", "normal", "uv"].forEach((s) => {
        this.attributes[s] = v.attributes[s].clone();
      }), this.setIndex(v.getIndex().clone());
    }
  }
  get detail() {
    return this._detail;
  }
  set curveRadius(l) {
    l !== this._curveRadius && (this._curveRadius = l, this._updateBounds());
  }
  get curveRadius() {
    return this._curveRadius;
  }
  updateGlyphs(l, v, s, r, i) {
    this.updateAttributeData(o2, l, 4), this.updateAttributeData(Lm, v, 1), this.updateAttributeData(s2, i, 3), this._blockBounds = s, this._chunkedBounds = r, this.instanceCount = v.length, this._updateBounds();
  }
  _updateBounds() {
    const l = this._blockBounds;
    if (l) {
      const { curveRadius: v, boundingBox: s } = this;
      if (v) {
        const { PI: r, floor: i, min: h, max: f, sin: c, cos: d } = Math, m = r / 2, y = r * 2, S = Math.abs(v), E = l[0] / S, A = l[2] / S, U = i((E + m) / y) !== i((A + m) / y) ? -S : h(c(E) * S, c(A) * S), x = i((E - m) / y) !== i((A - m) / y) ? S : f(c(E) * S, c(A) * S), Q = i((E + r) / y) !== i((A + r) / y) ? S * 2 : f(S - d(E) * S, S - d(A) * S);
        s.min.set(U, l[1], v < 0 ? -Q : 0), s.max.set(x, l[3], v < 0 ? 0 : Q);
      } else s.min.set(l[0], l[1], 0), s.max.set(l[2], l[3], 0);
      s.getBoundingSphere(this.boundingSphere);
    }
  }
  applyClipRect(l) {
    let v = this.getAttribute(Lm).count, s = this._chunkedBounds;
    if (s) for (let r = s.length; r--; ) {
      v = s[r].end;
      let i = s[r].rect;
      if (i[1] < l.w && i[3] > l.y && i[0] < l.z && i[2] > l.x) break;
    }
    this.instanceCount = v;
  }
  updateAttributeData(l, v, s) {
    const r = this.getAttribute(l);
    v ? r && r.array.length === v.length ? (r.array.set(v), r.needsUpdate = true) : (this.setAttribute(l, new Fp(v, s)), delete this._maxInstanceCount, this.dispose()) : r && this.deleteAttribute(l);
  }
}
const c2 = `
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`, f2 = `
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`, h2 = `
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`, d2 = `
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;
function v2(p) {
  const l = hf(p, { chained: true, extensions: { derivatives: true }, uniforms: { uTroikaSDFTexture: { value: null }, uTroikaSDFTextureSize: { value: new fn() }, uTroikaSDFGlyphSize: { value: 0 }, uTroikaSDFExponent: { value: 0 }, uTroikaTotalBounds: { value: new Xi(0, 0, 0, 0) }, uTroikaClipRect: { value: new Xi(0, 0, 0, 0) }, uTroikaEdgeOffset: { value: 0 }, uTroikaFillOpacity: { value: 1 }, uTroikaPositionOffset: { value: new fn() }, uTroikaCurveRadius: { value: 0 }, uTroikaBlurRadius: { value: 0 }, uTroikaStrokeWidth: { value: 0 }, uTroikaStrokeColor: { value: new Zn() }, uTroikaStrokeOpacity: { value: 1 }, uTroikaOrient: { value: new jp() }, uTroikaUseGlyphColors: { value: true }, uTroikaSDFDebug: { value: false } }, vertexDefs: c2, vertexTransform: f2, fragmentDefs: h2, fragmentColorTransform: d2, customRewriter({ vertexShader: v, fragmentShader: s }) {
    let r = /\buniform\s+vec3\s+diffuse\b/;
    return r.test(s) && (s = s.replace(r, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), r.test(v) || (v = v.replace(f0, `uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))), { vertexShader: v, fragmentShader: s };
  } });
  return l.transparent = true, l.forceSinglePass = true, Object.defineProperties(l, { isTroikaTextMaterial: { value: true }, shadowSide: { get() {
    return this.side;
  }, set() {
  } } }), l;
}
const _f = new Ys({ color: 16777215, side: hr, transparent: true }), Bm = 8421504, Nm = new fr(), Ls = new Ae(), Wc = new Ae(), no = [], m2 = new Ae(), Kc = "+x+y";
function Gm(p) {
  return Array.isArray(p) ? p[0] : p;
}
let g0 = () => {
  const p = new et(new ca(1, 1), _f);
  return g0 = () => p, p;
}, y0 = () => {
  const p = new et(new ca(1, 1, 32, 1), _f);
  return y0 = () => p, p;
};
const p2 = { type: "syncstart" }, g2 = { type: "synccomplete" }, b0 = ["font", "fontSize", "fontStyle", "fontWeight", "lang", "letterSpacing", "lineHeight", "maxWidth", "overflowWrap", "text", "direction", "textAlign", "textIndent", "whiteSpace", "anchorX", "anchorY", "colorRanges", "sdfGlyphSize"], y2 = b0.concat("material", "color", "depthOffset", "clipRect", "curveRadius", "orientation", "glyphGeometryDetail");
let S0 = class extends et {
  constructor() {
    const l = new u2();
    super(l, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.unicodeFontsURL = null, this.fontSize = 0.1, this.fontWeight = "normal", this.fontStyle = "normal", this.lang = null, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = Bm, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = Kc, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = true, this.debugSDF = false;
  }
  sync(l) {
    this._needsSync && (this._needsSync = false, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(l) : (this._isSyncing = true, this.dispatchEvent(p2), d0({ text: this.text, font: this.font, lang: this.lang, fontSize: this.fontSize || 0.1, fontWeight: this.fontWeight || "normal", fontStyle: this.fontStyle || "normal", letterSpacing: this.letterSpacing || 0, lineHeight: this.lineHeight || "normal", maxWidth: this.maxWidth, direction: this.direction || "auto", textAlign: this.textAlign, textIndent: this.textIndent, whiteSpace: this.whiteSpace, overflowWrap: this.overflowWrap, anchorX: this.anchorX, anchorY: this.anchorY, colorRanges: this.colorRanges, includeCaretPositions: true, sdfGlyphSize: this.sdfGlyphSize, gpuAccelerateSDF: this.gpuAccelerateSDF, unicodeFontsURL: this.unicodeFontsURL }, (v) => {
      this._isSyncing = false, this._textRenderInfo = v, this.geometry.updateGlyphs(v.glyphBounds, v.glyphAtlasIndices, v.blockBounds, v.chunkedBounds, v.glyphColors);
      const s = this._queuedSyncs;
      s && (this._queuedSyncs = null, this._needsSync = true, this.sync(() => {
        s.forEach((r) => r && r());
      })), this.dispatchEvent(g2), l && l();
    })));
  }
  onBeforeRender(l, v, s, r, i, h) {
    this.sync(), i.isTroikaTextMaterial && this._prepareForRender(i);
  }
  dispose() {
    this.geometry.dispose();
  }
  get textRenderInfo() {
    return this._textRenderInfo || null;
  }
  createDerivedMaterial(l) {
    return v2(l);
  }
  get material() {
    let l = this._derivedMaterial;
    const v = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = _f.clone());
    if ((!l || !l.isDerivedFrom(v)) && (l = this._derivedMaterial = this.createDerivedMaterial(v), v.addEventListener("dispose", function s() {
      v.removeEventListener("dispose", s), l.dispose();
    })), this.hasOutline()) {
      let s = l._outlineMtl;
      return s || (s = l._outlineMtl = Object.create(l, { id: { value: l.id + 0.1 } }), s.isTextOutlineMaterial = true, s.depthWrite = false, s.map = null, l.addEventListener("dispose", function r() {
        l.removeEventListener("dispose", r), s.dispose();
      })), [s, l];
    } else return l;
  }
  set material(l) {
    l && l.isTroikaTextMaterial ? (this._derivedMaterial = l, this._baseMaterial = l.baseMaterial) : this._baseMaterial = l;
  }
  hasOutline() {
    return !!(this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY);
  }
  get glyphGeometryDetail() {
    return this.geometry.detail;
  }
  set glyphGeometryDetail(l) {
    this.geometry.detail = l;
  }
  get curveRadius() {
    return this.geometry.curveRadius;
  }
  set curveRadius(l) {
    this.geometry.curveRadius = l;
  }
  get customDepthMaterial() {
    return Gm(this.material).getDepthMaterial();
  }
  set customDepthMaterial(l) {
  }
  get customDistanceMaterial() {
    return Gm(this.material).getDistanceMaterial();
  }
  set customDistanceMaterial(l) {
  }
  _prepareForRender(l) {
    const v = l.isTextOutlineMaterial, s = l.uniforms, r = this.textRenderInfo;
    if (r) {
      const { sdfTexture: f, blockBounds: c } = r;
      s.uTroikaSDFTexture.value = f, s.uTroikaSDFTextureSize.value.set(f.image.width, f.image.height), s.uTroikaSDFGlyphSize.value = r.sdfGlyphSize, s.uTroikaSDFExponent.value = r.sdfExponent, s.uTroikaTotalBounds.value.fromArray(c), s.uTroikaUseGlyphColors.value = !v && !!r.glyphColors;
      let d = 0, m = 0, y = 0, S, E, A, U = 0, x = 0;
      if (v) {
        let { outlineWidth: N, outlineOffsetX: C, outlineOffsetY: z, outlineBlur: O, outlineOpacity: L } = this;
        d = this._parsePercent(N) || 0, m = Math.max(0, this._parsePercent(O) || 0), S = L, U = this._parsePercent(C) || 0, x = this._parsePercent(z) || 0;
      } else y = Math.max(0, this._parsePercent(this.strokeWidth) || 0), y && (A = this.strokeColor, s.uTroikaStrokeColor.value.set(A ?? Bm), E = this.strokeOpacity, E == null && (E = 1)), S = this.fillOpacity;
      s.uTroikaEdgeOffset.value = d, s.uTroikaPositionOffset.value.set(U, x), s.uTroikaBlurRadius.value = m, s.uTroikaStrokeWidth.value = y, s.uTroikaStrokeOpacity.value = E, s.uTroikaFillOpacity.value = S ?? 1, s.uTroikaCurveRadius.value = this.curveRadius || 0;
      let Q = this.clipRect;
      if (Q && Array.isArray(Q) && Q.length === 4) s.uTroikaClipRect.value.fromArray(Q);
      else {
        const N = (this.fontSize || 0.1) * 100;
        s.uTroikaClipRect.value.set(c[0] - N, c[1] - N, c[2] + N, c[3] + N);
      }
      this.geometry.applyClipRect(s.uTroikaClipRect.value);
    }
    s.uTroikaSDFDebug.value = !!this.debugSDF, l.polygonOffset = !!this.depthOffset, l.polygonOffsetFactor = l.polygonOffsetUnits = this.depthOffset || 0;
    const i = v ? this.outlineColor || 0 : this.color;
    if (i == null) delete l.color;
    else {
      const f = l.hasOwnProperty("color") ? l.color : l.color = new Zn();
      (i !== f._input || typeof i == "object") && f.set(f._input = i);
    }
    let h = this.orientation || Kc;
    if (h !== l._orientation) {
      let f = s.uTroikaOrient.value;
      h = h.replace(/[^-+xyz]/g, "");
      let c = h !== Kc && h.match(/^([-+])([xyz])([-+])([xyz])$/);
      if (c) {
        let [, d, m, y, S] = c;
        Ls.set(0, 0, 0)[m] = d === "-" ? 1 : -1, Wc.set(0, 0, 0)[S] = y === "-" ? -1 : 1, Nm.lookAt(m2, Ls.cross(Wc), Wc), f.setFromMatrix4(Nm);
      } else f.identity();
      l._orientation = h;
    }
  }
  _parsePercent(l) {
    if (typeof l == "string") {
      let v = l.match(/^(-?[\d.]+)%$/), s = v ? parseFloat(v[1]) : NaN;
      l = (isNaN(s) ? 0 : s / 100) * this.fontSize;
    }
    return l;
  }
  localPositionToTextCoords(l, v = new fn()) {
    v.copy(l);
    const s = this.curveRadius;
    return s && (v.x = Math.atan2(l.x, Math.abs(s) - Math.abs(l.z)) * Math.abs(s)), v;
  }
  worldPositionToTextCoords(l, v = new fn()) {
    return Ls.copy(l), this.localPositionToTextCoords(this.worldToLocal(Ls), v);
  }
  raycast(l, v) {
    const { textRenderInfo: s, curveRadius: r } = this;
    if (s) {
      const i = s.blockBounds, h = r ? y0() : g0(), f = h.geometry, { position: c, uv: d } = f.attributes;
      for (let m = 0; m < d.count; m++) {
        let y = i[0] + d.getX(m) * (i[2] - i[0]);
        const S = i[1] + d.getY(m) * (i[3] - i[1]);
        let E = 0;
        r && (E = r - Math.cos(y / r) * r, y = Math.sin(y / r) * r), c.setXYZ(m, y, S, E);
      }
      f.boundingSphere = this.geometry.boundingSphere, f.boundingBox = this.geometry.boundingBox, h.matrixWorld = this.matrixWorld, h.material.side = this.material.side, no.length = 0, h.raycast(l, no);
      for (let m = 0; m < no.length; m++) no[m].object = this, v.push(no[m]);
    }
  }
  copy(l) {
    const v = this.geometry;
    return super.copy(l), this.geometry = v, y2.forEach((s) => {
      this[s] = l[s];
    }), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
b0.forEach((p) => {
  const l = "_private_" + p;
  Object.defineProperty(S0.prototype, p, { get() {
    return this[l];
  }, set(v) {
    v !== this[l] && (this[l] = v, this._needsSync = true);
  } });
});
new po();
new Zn();
const ib = k.forwardRef(({ sdfGlyphSize: p = 64, anchorX: l = "center", anchorY: v = "middle", font: s, fontSize: r = 1, children: i, characters: h, onSync: f, ...c }, d) => {
  const m = Et(({ invalidate: A }) => A), [y] = k.useState(() => new S0()), [S, E] = k.useMemo(() => {
    const A = [];
    let U = "";
    return k.Children.forEach(i, (x) => {
      typeof x == "string" || typeof x == "number" ? U += x : A.push(x);
    }), [A, U];
  }, [i]);
  return Tp(() => new Promise((A) => n2({ font: s, characters: h }, A)), ["troika-text", s, h]), k.useLayoutEffect(() => void y.sync(() => {
    m(), f && f(y);
  })), k.useEffect(() => () => y.dispose(), [y]), k.createElement("primitive", Jt({ object: y, ref: d, font: s, text: E, anchorX: l, anchorY: v, fontSize: r, sdfGlyphSize: p }, c), S);
});
function _0(p, l, v, s) {
  var r;
  return r = class extends Yi {
    constructor(i) {
      super({ vertexShader: l, fragmentShader: v, ...i });
      for (const h in p) this.uniforms[h] = new kp(p[h]), Object.defineProperty(this, h, { get() {
        return this.uniforms[h].value;
      }, set(f) {
        this.uniforms[h].value = f;
      } });
      this.uniforms = js.clone(this.uniforms);
    }
  }, r.key = Pm.generateUUID(), r;
}
const b2 = () => parseInt(mf.replace(/\D+/g, "")), E0 = b2(), lb = k.forwardRef(({ threshold: p = 15, geometry: l, ...v }, s) => {
  const r = k.useRef(null);
  k.useImperativeHandle(s, () => r.current, []);
  const i = k.useMemo(() => [0, 0, 0, 1, 0, 0], []), h = k.useRef(null), f = k.useRef(null);
  return k.useLayoutEffect(() => {
    const c = r.current.parent, d = l ?? (c == null ? void 0 : c.geometry);
    if (!d || h.current === d && f.current === p) return;
    h.current = d, f.current = p;
    const y = new Yp(d, p).attributes.position.array;
    r.current.geometry.setPositions(y), r.current.geometry.attributes.instanceStart.needsUpdate = true, r.current.geometry.attributes.instanceEnd.needsUpdate = true, r.current.computeLineDistances();
  }), k.createElement(wy, Jt({ segments: true, points: i, ref: r, raycast: () => null }, v));
}), Hm = _0({ screenspace: false, color: new Zn("black"), opacity: 1, thickness: 0.05, size: new fn() }, `#include <common>
   #include <morphtarget_pars_vertex>
   #include <skinning_pars_vertex>
   #include <clipping_planes_pars_vertex>
   uniform float thickness;
   uniform bool screenspace;
   uniform vec2 size;
   void main() {
     #if defined (USE_SKINNING)
	     #include <beginnormal_vertex>
       #include <morphnormal_vertex>
       #include <skinbase_vertex>
       #include <skinnormal_vertex>
       #include <defaultnormal_vertex>
     #endif
     #include <begin_vertex>
	   #include <morphtarget_vertex>
	   #include <skinning_vertex>
     #include <project_vertex>
     #include <clipping_planes_vertex>
     vec4 tNormal = vec4(normal, 0.0);
     vec4 tPosition = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       tNormal = instanceMatrix * tNormal;
       tPosition = instanceMatrix * tPosition;
     #endif
     if (screenspace) {
       vec3 newPosition = tPosition.xyz + tNormal.xyz * thickness;
       gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
     } else {
       vec4 clipPosition = projectionMatrix * modelViewMatrix * tPosition;
       vec4 clipNormal = projectionMatrix * modelViewMatrix * tNormal;
       vec2 offset = normalize(clipNormal.xy) * thickness / size * clipPosition.w * 2.0;
       clipPosition.xy += offset;
       gl_Position = clipPosition;
     }
   }`, `uniform vec3 color;
   uniform float opacity;
   #include <clipping_planes_pars_fragment>
   void main(){
     #include <clipping_planes_fragment>
     gl_FragColor = vec4(color, opacity);
     #include <tonemapping_fragment>
     #include <${E0 >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
   }`);
function rb({ color: p = "black", opacity: l = 1, transparent: v = false, screenspace: s = false, toneMapped: r = true, polygonOffset: i = false, polygonOffsetFactor: h = 0, renderOrder: f = 0, thickness: c = 0.05, angle: d = Math.PI, clippingPlanes: m, ...y }) {
  const S = k.useRef(null), [E] = k.useState(() => new Hm({ side: Km })), { gl: A } = Et(), U = A.getDrawingBufferSize(new fn());
  k.useMemo(() => vf({ OutlinesMaterial: Hm }), []);
  const x = k.useRef(0), Q = k.useRef(null);
  return k.useLayoutEffect(() => {
    const N = S.current;
    if (!N) return;
    const C = N.parent;
    if (C && C.geometry && (x.current !== d || Q.current !== C.geometry)) {
      var z;
      x.current = d, Q.current = C.geometry;
      let O = (z = N.children) == null ? void 0 : z[0];
      O && (d && O.geometry.dispose(), N.remove(O)), C.skeleton ? (O = new Xp(), O.material = E, O.bind(C.skeleton, C.bindMatrix), N.add(O)) : C.isInstancedMesh ? (O = new Vp(C.geometry, E, C.count), O.instanceMatrix = C.instanceMatrix, N.add(O)) : (O = new et(), O.material = E, N.add(O)), O.geometry = d ? kg(C.geometry, d) : C.geometry, O.morphTargetInfluences = C.morphTargetInfluences, O.morphTargetDictionary = C.morphTargetDictionary;
    }
  }), k.useLayoutEffect(() => {
    const N = S.current;
    if (!N) return;
    const C = N.children[0];
    if (C) {
      C.renderOrder = f;
      const z = N.parent;
      fo(C, { morphTargetInfluences: z.morphTargetInfluences, morphTargetDictionary: z.morphTargetDictionary }), fo(C.material, { transparent: v, thickness: c, color: p, opacity: l, size: U, screenspace: s, toneMapped: r, polygonOffset: i, polygonOffsetFactor: h, clippingPlanes: m, clipping: m && m.length > 0 });
    }
  }), k.useEffect(() => () => {
    const N = S.current;
    if (!N) return;
    const C = N.children[0];
    C && (d && C.geometry.dispose(), N.remove(C));
  }, []), k.createElement("group", Jt({ ref: S }, y));
}
function S2(p, l, v) {
  const s = Et((E) => E.size), r = Et((E) => E.viewport), i = typeof p == "number" ? p : s.width * r.dpr, h = s.height * r.dpr, f = (typeof p == "number" ? v : p) || {}, { samples: c = 0, depth: d, ...m } = f, y = d ?? f.depthBuffer, S = k.useMemo(() => {
    const E = new vo(i, h, { minFilter: ta, magFilter: ta, type: fa, ...m });
    return y && (E.depthTexture = new Zp(i, h, Xa)), E.samples = c, E;
  }, []);
  return k.useLayoutEffect(() => {
    S.setSize(i, h), c && (S.samples = c);
  }, [c, S, i, h]), k.useEffect(() => () => S.dispose(), []), S;
}
const _2 = (p) => typeof p == "function", E2 = k.forwardRef(({ envMap: p, resolution: l = 256, frames: v = 1 / 0, children: s, makeDefault: r, ...i }, h) => {
  const f = Et(({ set: x }) => x), c = Et(({ camera: x }) => x), d = Et(({ size: x }) => x), m = k.useRef(null);
  k.useImperativeHandle(h, () => m.current, []);
  const y = k.useRef(null), S = S2(l);
  k.useLayoutEffect(() => {
    i.manual || m.current.updateProjectionMatrix();
  }, [d, i]), k.useLayoutEffect(() => {
    m.current.updateProjectionMatrix();
  }), k.useLayoutEffect(() => {
    if (r) {
      const x = c;
      return f(() => ({ camera: m.current })), () => f(() => ({ camera: x }));
    }
  }, [m, r, f]);
  let E = 0, A = null;
  const U = _2(s);
  return Vi((x) => {
    U && (v === 1 / 0 || E < v) && (y.current.visible = false, x.gl.setRenderTarget(S), A = x.scene.background, p && (x.scene.background = p), x.gl.render(x.scene, m.current), x.scene.background = A, x.gl.setRenderTarget(null), y.current.visible = true, E++);
  }), k.createElement(k.Fragment, null, k.createElement("orthographicCamera", Jt({ left: d.width / -2, right: d.width / 2, top: d.height / 2, bottom: d.height / -2, ref: m }, i), !U && s), k.createElement("group", { ref: y }, U && s(S.texture)));
}), ob = k.forwardRef(({ makeDefault: p, camera: l, regress: v, domElement: s, enableDamping: r = true, keyEvents: i = false, onChange: h, onStart: f, onEnd: c, ...d }, m) => {
  const y = Et((L) => L.invalidate), S = Et((L) => L.camera), E = Et((L) => L.gl), A = Et((L) => L.events), U = Et((L) => L.setEvents), x = Et((L) => L.set), Q = Et((L) => L.get), N = Et((L) => L.performance), C = l || S, z = s || A.connected || E.domElement, O = k.useMemo(() => new my(C), [C]);
  return Vi(() => {
    O.enabled && O.update();
  }, -1), k.useEffect(() => (i && O.connect(i === true ? z : i), O.connect(z), () => void O.dispose()), [i, z, v, O, y]), k.useEffect(() => {
    const L = (Y) => {
      y(), v && N.regress(), h && h(Y);
    }, H = (Y) => {
      f && f(Y);
    }, D = (Y) => {
      c && c(Y);
    };
    return O.addEventListener("change", L), O.addEventListener("start", H), O.addEventListener("end", D), () => {
      O.removeEventListener("start", H), O.removeEventListener("end", D), O.removeEventListener("change", L);
    };
  }, [h, f, c, O, y, U]), k.useEffect(() => {
    if (p) {
      const L = Q().controls;
      return x({ controls: O }), () => x({ controls: L });
    }
  }, [p, O]), k.createElement("primitive", Jt({ ref: m, object: O, enableDamping: r }, d));
}), sb = k.forwardRef(({ children: p, domElement: l, onChange: v, onMouseDown: s, onMouseUp: r, onObjectChange: i, object: h, makeDefault: f, camera: c, enabled: d, axis: m, mode: y, translationSnap: S, rotationSnap: E, scaleSnap: A, space: U, size: x, showX: Q, showY: N, showZ: C, ...z }, O) => {
  const L = Et((T) => T.controls), H = Et((T) => T.gl), D = Et((T) => T.events), Y = Et((T) => T.camera), I = Et((T) => T.invalidate), me = Et((T) => T.get), j = Et((T) => T.set), J = c || Y, Z = l || D.connected || H.domElement, te = k.useMemo(() => new uy(J, Z), [J, Z]), q = k.useRef(null);
  k.useLayoutEffect(() => (h ? te.attach(h instanceof cr ? h : h.current) : q.current instanceof cr && te.attach(q.current), () => void te.detach()), [h, p, te]), k.useEffect(() => {
    if (L) {
      const T = (B) => L.enabled = !B.value;
      return te.addEventListener("dragging-changed", T), () => te.removeEventListener("dragging-changed", T);
    }
  }, [te, L]);
  const he = k.useRef(void 0), Te = k.useRef(void 0), re = k.useRef(void 0), W = k.useRef(void 0);
  return k.useLayoutEffect(() => void (he.current = v), [v]), k.useLayoutEffect(() => void (Te.current = s), [s]), k.useLayoutEffect(() => void (re.current = r), [r]), k.useLayoutEffect(() => void (W.current = i), [i]), k.useEffect(() => {
    const T = (K) => {
      I(), he.current == null || he.current(K);
    }, B = (K) => Te.current == null ? void 0 : Te.current(K), V = (K) => re.current == null ? void 0 : re.current(K), M = (K) => W.current == null ? void 0 : W.current(K);
    return te.addEventListener("change", T), te.addEventListener("mouseDown", B), te.addEventListener("mouseUp", V), te.addEventListener("objectChange", M), () => {
      te.removeEventListener("change", T), te.removeEventListener("mouseDown", B), te.removeEventListener("mouseUp", V), te.removeEventListener("objectChange", M);
    };
  }, [I, te]), k.useEffect(() => {
    if (f) {
      const T = me().controls;
      return j({ controls: te }), () => j({ controls: T });
    }
  }, [f, te]), k.createElement(k.Fragment, null, k.createElement("primitive", { ref: O, object: te, enabled: d, axis: m, mode: y, translationSnap: S, rotationSnap: E, scaleSnap: A, space: U, size: x, showX: Q, showY: N, showZ: C }), k.createElement("group", Jt({ ref: q }, z), p));
});
function w2({ defaultScene: p, defaultCamera: l, renderPriority: v = 1 }) {
  const { gl: s, scene: r, camera: i } = Et();
  let h;
  return Vi(() => {
    h = s.autoClear, v === 1 && (s.autoClear = true, s.render(p, l)), s.autoClear = false, s.clearDepth(), s.render(r, i), s.autoClear = h;
  }, v), k.createElement("group", { onPointerOver: () => null });
}
function x2({ children: p, renderPriority: l = 1 }) {
  const { scene: v, camera: s } = Et(), [r] = k.useState(() => new gf());
  return k.createElement(k.Fragment, null, Zm(k.createElement(k.Fragment, null, p, k.createElement(w2, { defaultScene: v, defaultCamera: s, renderPriority: l })), r, { events: { priority: l + 1 } }));
}
const w0 = k.createContext({}), M2 = () => k.useContext(w0), T2 = 2 * Math.PI, Jc = new cr(), Fm = new fr(), [ir, $c] = [new _n(), new _n()], jm = new Ae(), km = new Ae(), A2 = (p) => "minPolarAngle" in p, Ym = (p) => "getTarget" in p, ub = ({ alignment: p = "bottom-right", margin: l = [80, 80], renderPriority: v = 1, onUpdate: s, onTarget: r, children: i }) => {
  const h = Et((L) => L.size), f = Et((L) => L.camera), c = Et((L) => L.controls), d = Et((L) => L.invalidate), m = k.useRef(null), y = k.useRef(null), S = k.useRef(false), E = k.useRef(0), A = k.useRef(new Ae(0, 0, 0)), U = k.useRef(new Ae(0, 0, 0));
  k.useEffect(() => {
    U.current.copy(f.up), Jc.up.copy(f.up);
  }, [f]);
  const x = k.useCallback((L) => {
    S.current = true, (c || r) && (A.current = (r == null ? void 0 : r()) || (Ym(c) ? c.getTarget(A.current) : c == null ? void 0 : c.target)), E.current = f.position.distanceTo(jm), ir.copy(f.quaternion), km.copy(L).multiplyScalar(E.current).add(jm), Jc.lookAt(km), $c.copy(Jc.quaternion), d();
  }, [c, f, r, d]);
  Vi((L, H) => {
    if (y.current && m.current) {
      var D;
      if (S.current) if (ir.angleTo($c) < 0.01) S.current = false, A2(c) && f.up.copy(U.current);
      else {
        const Y = H * T2;
        ir.rotateTowards($c, Y), f.position.set(0, 0, 1).applyQuaternion(ir).multiplyScalar(E.current).add(A.current), f.up.set(0, 1, 0).applyQuaternion(ir).normalize(), f.quaternion.copy(ir), Ym(c) && c.setPosition(f.position.x, f.position.y, f.position.z), s ? s() : c && c.update(H), d();
      }
      Fm.copy(f.matrix).invert(), (D = m.current) == null || D.quaternion.setFromRotationMatrix(Fm);
    }
  });
  const Q = k.useMemo(() => ({ tweenCamera: x }), [x]), [N, C] = l, z = p.endsWith("-center") ? 0 : p.endsWith("-left") ? -h.width / 2 + N : h.width / 2 - N, O = p.startsWith("center-") ? 0 : p.startsWith("top-") ? h.height / 2 - C : -h.height / 2 + C;
  return k.createElement(x2, { renderPriority: v }, k.createElement(w0.Provider, { value: Q }, k.createElement(E2, { makeDefault: true, ref: y, position: [0, 0, 200] }), k.createElement("group", { ref: m, position: [z, O, 0] }, i)));
};
function ef({ scale: p = [0.8, 0.05, 0.05], color: l, rotation: v }) {
  return k.createElement("group", { rotation: v }, k.createElement("mesh", { position: [0.4, 0, 0] }, k.createElement("boxGeometry", { args: p }), k.createElement("meshBasicMaterial", { color: l, toneMapped: false })));
}
function lr({ onClick: p, font: l, disabled: v, arcStyle: s, label: r, labelColor: i, axisHeadScale: h = 1, ...f }) {
  const c = Et((U) => U.gl), d = k.useMemo(() => {
    const U = document.createElement("canvas");
    U.width = 64, U.height = 64;
    const x = U.getContext("2d");
    return x.beginPath(), x.arc(32, 32, 16, 0, 2 * Math.PI), x.closePath(), x.fillStyle = s, x.fill(), r && (x.font = l, x.textAlign = "center", x.fillStyle = i, x.fillText(r, 32, 41)), new Qp(U);
  }, [s, r, i, l]), [m, y] = k.useState(false), S = (r ? 1 : 0.75) * (m ? 1.2 : 1) * h, E = (U) => {
    U.stopPropagation(), y(true);
  }, A = (U) => {
    U.stopPropagation(), y(false);
  };
  return k.createElement("sprite", Jt({ scale: S, onPointerOver: v ? void 0 : E, onPointerOut: v ? void 0 : p || A }, f), k.createElement("spriteMaterial", { map: d, "map-anisotropy": c.capabilities.getMaxAnisotropy() || 1, alphaTest: 0.3, opacity: r ? 1 : 0.75, toneMapped: false }));
}
const cb = ({ hideNegativeAxes: p, hideAxisHeads: l, disabled: v, font: s = "18px Inter var, Arial, sans-serif", axisColors: r = ["#ff2060", "#20df80", "#2080ff"], axisHeadScale: i = 1, axisScale: h, labels: f = ["X", "Y", "Z"], labelColor: c = "#000", onClick: d, ...m }) => {
  const [y, S, E] = r, { tweenCamera: A } = M2(), U = { font: s, disabled: v, labelColor: c, onClick: d, axisHeadScale: i, onPointerDown: v ? void 0 : (x) => {
    A(x.object.position), x.stopPropagation();
  } };
  return k.createElement("group", Jt({ scale: 40 }, m), k.createElement(ef, { color: y, rotation: [0, 0, 0], scale: h }), k.createElement(ef, { color: S, rotation: [0, 0, Math.PI / 2], scale: h }), k.createElement(ef, { color: E, rotation: [0, -Math.PI / 2, 0], scale: h }), !l && k.createElement(k.Fragment, null, k.createElement(lr, Jt({ arcStyle: y, position: [1, 0, 0], label: f[0] }, U)), k.createElement(lr, Jt({ arcStyle: S, position: [0, 1, 0], label: f[1] }, U)), k.createElement(lr, Jt({ arcStyle: E, position: [0, 0, 1], label: f[2] }, U)), !p && k.createElement(k.Fragment, null, k.createElement(lr, Jt({ arcStyle: y, position: [-1, 0, 0] }, U)), k.createElement(lr, Jt({ arcStyle: S, position: [0, -1, 0] }, U)), k.createElement(lr, Jt({ arcStyle: E, position: [0, 0, -1] }, U)))));
}, U2 = _0({ cellSize: 0.5, sectionSize: 1, fadeDistance: 100, fadeStrength: 1, fadeFrom: 1, cellThickness: 0.5, sectionThickness: 1, cellColor: new Zn(), sectionColor: new Zn(), infiniteGrid: false, followCamera: false, worldCamProjPosition: new Ae(), worldPlanePosition: new Ae() }, `
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform vec3 worldPlanePosition;
    uniform float fadeDistance;
    uniform bool infiniteGrid;
    uniform bool followCamera;

    void main() {
      localPosition = position.xzy;
      if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
      
      worldPosition = modelMatrix * vec4(localPosition, 1.0);
      if (followCamera) {
        worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
        localPosition = (inverse(modelMatrix) * worldPosition).xyz;
      }

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `, `
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform float cellSize;
    uniform float sectionSize;
    uniform vec3 cellColor;
    uniform vec3 sectionColor;
    uniform float fadeDistance;
    uniform float fadeStrength;
    uniform float fadeFrom;
    uniform float cellThickness;
    uniform float sectionThickness;

    float getGrid(float size, float thickness) {
      vec2 r = localPosition.xz / size;
      vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
      float line = min(grid.x, grid.y) + 1.0 - thickness;
      return 1.0 - min(line, 1.0);
    }

    void main() {
      float g1 = getGrid(cellSize, cellThickness);
      float g2 = getGrid(sectionSize, sectionThickness);

      vec3 from = worldCamProjPosition*vec3(fadeFrom);
      float dist = distance(from, worldPosition.xyz);
      float d = 1.0 - min(dist / fadeDistance, 1.0);
      vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

      gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
      gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
      if (gl_FragColor.a <= 0.0) discard;

      #include <tonemapping_fragment>
      #include <${E0 >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
    }
  `), fb = k.forwardRef(({ args: p, cellColor: l = "#000000", sectionColor: v = "#2080ff", cellSize: s = 0.5, sectionSize: r = 1, followCamera: i = false, infiniteGrid: h = false, fadeDistance: f = 100, fadeStrength: c = 1, fadeFrom: d = 1, cellThickness: m = 0.5, sectionThickness: y = 1, side: S = Km, ...E }, A) => {
  vf({ GridMaterial: U2 });
  const U = k.useRef(null);
  k.useImperativeHandle(A, () => U.current, []);
  const x = new Qm(), Q = new Ae(0, 1, 0), N = new Ae(0, 0, 0);
  Vi((O) => {
    x.setFromNormalAndCoplanarPoint(Q, N).applyMatrix4(U.current.matrixWorld);
    const L = U.current.material, H = L.uniforms.worldCamProjPosition, D = L.uniforms.worldPlanePosition;
    x.projectPoint(O.camera.position, H.value), D.value.set(0, 0, 0).applyMatrix4(U.current.matrixWorld);
  });
  const C = { cellSize: s, sectionSize: r, cellColor: l, sectionColor: v, cellThickness: m, sectionThickness: y }, z = { fadeDistance: f, fadeStrength: c, fadeFrom: d, infiniteGrid: h, followCamera: i };
  return k.createElement("mesh", Jt({ ref: U, frustumCulled: false }, E), k.createElement("gridMaterial", Jt({ transparent: true, "extensions-derivatives": true, side: S }, C, z)), k.createElement("planeGeometry", { args: p }));
});
function D2(p, l) {
  const v = p + "Geometry";
  return k.forwardRef(({ args: s, children: r, ...i }, h) => {
    const f = k.useRef(null);
    return k.useImperativeHandle(h, () => f.current), k.useLayoutEffect(() => void (l == null ? void 0 : l(f.current))), k.createElement("mesh", Jt({ ref: f }, i), k.createElement(v, { attach: "geometry", args: s }), r);
  });
}
const hb = D2("plane"), x0 = (p, l, v) => {
  let s;
  switch (p) {
    case lf:
      s = new Uint8ClampedArray(l * v * 4);
      break;
    case fa:
      s = new Uint16Array(l * v * 4);
      break;
    case Jp:
      s = new Uint32Array(l * v * 4);
      break;
    case Kp:
      s = new Int8Array(l * v * 4);
      break;
    case Wp:
      s = new Int16Array(l * v * 4);
      break;
    case Pp:
      s = new Int32Array(l * v * 4);
      break;
    case Xa:
      s = new Float32Array(l * v * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return s;
};
let Bs;
const C2 = (p, l, v, s) => {
  if (Bs !== void 0) return Bs;
  const r = new vo(1, 1, s);
  l.setRenderTarget(r);
  const i = new et(new ca(), new Ys({ color: 16777215 }));
  l.render(i, v), l.setRenderTarget(null);
  const h = x0(p, r.width, r.height);
  return l.readRenderTargetPixels(r, 0, 0, r.width, r.height, h), r.dispose(), i.geometry.dispose(), i.material.dispose(), Bs = h[0] !== 0, Bs;
};
class Ef {
  constructor(l) {
    __publicField(this, "_renderer");
    __publicField(this, "_rendererIsDisposable", false);
    __publicField(this, "_material");
    __publicField(this, "_scene");
    __publicField(this, "_camera");
    __publicField(this, "_quad");
    __publicField(this, "_renderTarget");
    __publicField(this, "_width");
    __publicField(this, "_height");
    __publicField(this, "_type");
    __publicField(this, "_colorSpace");
    __publicField(this, "_supportsReadPixels", true);
    __publicField(this, "render", () => {
      this._renderer.setRenderTarget(this._renderTarget);
      try {
        this._renderer.render(this._scene, this._camera);
      } catch (l) {
        throw this._renderer.setRenderTarget(null), l;
      }
      this._renderer.setRenderTarget(null);
    });
    var _a, _b, _c, _d, _e, _f2, _g2, _h, _i, _j, _k, _l, _m2, _n2, _o, _p;
    this._width = l.width, this._height = l.height, this._type = l.type, this._colorSpace = l.colorSpace;
    const v = { format: ho, depthBuffer: false, stencilBuffer: false, type: this._type, colorSpace: this._colorSpace, anisotropy: ((_a = l.renderTargetOptions) == null ? void 0 : _a.anisotropy) !== void 0 ? (_b = l.renderTargetOptions) == null ? void 0 : _b.anisotropy : 1, generateMipmaps: ((_c = l.renderTargetOptions) == null ? void 0 : _c.generateMipmaps) !== void 0 ? (_d = l.renderTargetOptions) == null ? void 0 : _d.generateMipmaps : false, magFilter: ((_e = l.renderTargetOptions) == null ? void 0 : _e.magFilter) !== void 0 ? (_f2 = l.renderTargetOptions) == null ? void 0 : _f2.magFilter : ta, minFilter: ((_g2 = l.renderTargetOptions) == null ? void 0 : _g2.minFilter) !== void 0 ? (_h = l.renderTargetOptions) == null ? void 0 : _h.minFilter : ta, samples: ((_i = l.renderTargetOptions) == null ? void 0 : _i.samples) !== void 0 ? (_j = l.renderTargetOptions) == null ? void 0 : _j.samples : void 0, wrapS: ((_k = l.renderTargetOptions) == null ? void 0 : _k.wrapS) !== void 0 ? (_l = l.renderTargetOptions) == null ? void 0 : _l.wrapS : ji, wrapT: ((_m2 = l.renderTargetOptions) == null ? void 0 : _m2.wrapT) !== void 0 ? (_n2 = l.renderTargetOptions) == null ? void 0 : _n2.wrapT : ji };
    if (this._material = l.material, l.renderer ? this._renderer = l.renderer : (this._renderer = Ef.instantiateRenderer(), this._rendererIsDisposable = true), this._scene = new gf(), this._camera = new sr(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !C2(this._type, this._renderer, this._camera, v)) {
      let s;
      switch (this._type) {
        case fa:
          s = this._renderer.extensions.has("EXT_color_buffer_float") ? Xa : void 0;
          break;
      }
      s !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${Xa}`), this._type = s) : (this._supportsReadPixels = false, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
    }
    this._quad = new et(new ca(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new vo(this.width, this.height, v), this._renderTarget.texture.mapping = ((_o = l.renderTargetOptions) == null ? void 0 : _o.mapping) !== void 0 ? (_p = l.renderTargetOptions) == null ? void 0 : _p.mapping : ks;
  }
  static instantiateRenderer() {
    const l = new qp();
    return l.setSize(128, 128), l;
  }
  toArray() {
    if (!this._supportsReadPixels) throw new Error("Can't read pixels in this browser");
    const l = x0(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, l), l;
  }
  toDataTexture(l) {
    const v = new Ip(this.toArray(), this.width, this.height, ho, this._type, (l == null ? void 0 : l.mapping) || ks, (l == null ? void 0 : l.wrapS) || ji, (l == null ? void 0 : l.wrapT) || ji, (l == null ? void 0 : l.magFilter) || ta, (l == null ? void 0 : l.minFilter) || ta, (l == null ? void 0 : l.anisotropy) || 1, af);
    return v.generateMipmaps = (l == null ? void 0 : l.generateMipmaps) !== void 0 ? l == null ? void 0 : l.generateMipmaps : false, v;
  }
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  dispose(l) {
    this.disposeOnDemandRenderer(), l && this.renderTarget.dispose(), this.material instanceof Yi && Object.values(this.material.uniforms).forEach((v) => {
      v.value instanceof vl && v.value.dispose();
    }), Object.values(this.material).forEach((v) => {
      v instanceof vl && v.dispose();
    }), this.material.dispose(), this._quad.geometry.dispose();
  }
  get width() {
    return this._width;
  }
  set width(l) {
    this._width = l, this._renderTarget.setSize(this._width, this._height);
  }
  get height() {
    return this._height;
  }
  set height(l) {
    this._height = l, this._renderTarget.setSize(this._width, this._height);
  }
  get renderer() {
    return this._renderer;
  }
  get renderTarget() {
    return this._renderTarget;
  }
  set renderTarget(l) {
    this._renderTarget = l, this._width = l.width, this._height = l.height;
  }
  get material() {
    return this._material;
  }
  get type() {
    return this._type;
  }
  get colorSpace() {
    return this._colorSpace;
  }
}
class M0 extends Error {
}
class T0 extends Error {
}
const ao = (p, l, v) => {
  const s = new RegExp(`${l}="([^"]*)"`, "i").exec(p);
  if (s) return s[1];
  const r = new RegExp(`<${l}[^>]*>([\\s\\S]*?)</${l}>`, "i").exec(p);
  if (r) {
    const i = r[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return i && i.length === 3 ? i.map((h) => h.replace(/<\/?rdf:li>/g, "")) : r[1].trim();
  }
  if (v !== void 0) return v;
  throw new Error(`Can't find ${l} in gainmap metadata`);
}, O2 = (p) => {
  let l;
  typeof TextDecoder < "u" ? l = new TextDecoder().decode(p) : l = p.toString();
  let v = l.indexOf("<x:xmpmeta");
  for (; v !== -1; ) {
    const s = l.indexOf("x:xmpmeta>", v), r = l.slice(v, s + 10);
    try {
      const i = ao(r, "hdrgm:GainMapMin", "0"), h = ao(r, "hdrgm:GainMapMax"), f = ao(r, "hdrgm:Gamma", "1"), c = ao(r, "hdrgm:OffsetSDR", "0.015625"), d = ao(r, "hdrgm:OffsetHDR", "0.015625"), m = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(r), y = m ? m[1] : "0", S = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(r);
      if (!S) throw new Error("Incomplete gainmap metadata");
      const E = S[1];
      return { gainMapMin: Array.isArray(i) ? i.map((A) => parseFloat(A)) : [parseFloat(i), parseFloat(i), parseFloat(i)], gainMapMax: Array.isArray(h) ? h.map((A) => parseFloat(A)) : [parseFloat(h), parseFloat(h), parseFloat(h)], gamma: Array.isArray(f) ? f.map((A) => parseFloat(A)) : [parseFloat(f), parseFloat(f), parseFloat(f)], offsetSdr: Array.isArray(c) ? c.map((A) => parseFloat(A)) : [parseFloat(c), parseFloat(c), parseFloat(c)], offsetHdr: Array.isArray(d) ? d.map((A) => parseFloat(A)) : [parseFloat(d), parseFloat(d), parseFloat(d)], hdrCapacityMin: parseFloat(y), hdrCapacityMax: parseFloat(E) };
    } catch {
    }
    v = l.indexOf("<x:xmpmeta", s);
  }
};
class z2 {
  constructor(l) {
    __publicField(this, "options");
    this.options = { debug: l && l.debug !== void 0 ? l.debug : false, extractFII: l && l.extractFII !== void 0 ? l.extractFII : true, extractNonFII: l && l.extractNonFII !== void 0 ? l.extractNonFII : true };
  }
  extract(l) {
    return new Promise((v, s) => {
      const r = this.options.debug, i = new DataView(l.buffer);
      if (i.getUint16(0) !== 65496) {
        s(new Error("Not a valid jpeg"));
        return;
      }
      const h = i.byteLength;
      let f = 2, c = 0, d;
      for (; f < h; ) {
        if (++c > 250) {
          s(new Error(`Found no marker after ${c} loops \u{1F635}`));
          return;
        }
        if (i.getUint8(f) !== 255) {
          s(new Error(`Not a valid marker at offset 0x${f.toString(16)}, found: 0x${i.getUint8(f).toString(16)}`));
          return;
        }
        if (d = i.getUint8(f + 1), r && console.log(`Marker: ${d.toString(16)}`), d === 226) {
          r && console.log("Found APP2 marker (0xffe2)");
          const m = f + 4;
          if (i.getUint32(m) === 1297106432) {
            const y = m + 4;
            let S;
            if (i.getUint16(y) === 18761) S = false;
            else if (i.getUint16(y) === 19789) S = true;
            else {
              s(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (i.getUint16(y + 2, !S) !== 42) {
              s(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const E = i.getUint32(y + 4, !S);
            if (E < 8) {
              s(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const A = y + E, U = i.getUint16(A, !S), x = A + 2;
            let Q = 0;
            for (let O = x; O < x + 12 * U; O += 12) i.getUint16(O, !S) === 45057 && (Q = i.getUint32(O + 8, !S));
            const C = A + 2 + U * 12 + 4, z = [];
            for (let O = C; O < C + Q * 16; O += 16) {
              const L = { MPType: i.getUint32(O, !S), size: i.getUint32(O + 4, !S), dataOffset: i.getUint32(O + 8, !S), dependantImages: i.getUint32(O + 12, !S), start: -1, end: -1, isFII: false };
              L.dataOffset ? (L.start = y + L.dataOffset, L.isFII = false) : (L.start = 0, L.isFII = true), L.end = L.start + L.size, z.push(L);
            }
            if (this.options.extractNonFII && z.length) {
              const O = new Blob([i]), L = [];
              for (const H of z) {
                if (H.isFII && !this.options.extractFII) continue;
                const D = O.slice(H.start, H.end + 1, "image/jpeg");
                L.push(D);
              }
              v(L);
            }
          }
        }
        f += 2 + i.getUint16(f + 2);
      }
    });
  }
}
const R2 = async (p) => {
  const l = O2(p);
  if (!l) throw new T0("Gain map XMP metadata not found");
  const s = await new z2({ extractFII: true, extractNonFII: true }).extract(p);
  if (s.length !== 2) throw new M0("Gain map recovery image not found");
  return { sdr: new Uint8Array(await s[0].arrayBuffer()), gainMap: new Uint8Array(await s[1].arrayBuffer()), metadata: l };
}, Xm = (p) => new Promise((l, v) => {
  const s = document.createElement("img");
  s.onload = () => {
    l(s);
  }, s.onerror = (r) => {
    v(r);
  }, s.src = URL.createObjectURL(p);
});
class L2 extends $p {
  constructor(l, v) {
    super(v);
    __publicField(this, "_renderer");
    __publicField(this, "_renderTargetOptions");
    __publicField(this, "_internalLoadingManager");
    __publicField(this, "_config");
    this._config = l, l.renderer && (this._renderer = l.renderer), this._internalLoadingManager = new eg();
  }
  setRenderer(l) {
    return this._renderer = l, this;
  }
  setRenderTargetOptions(l) {
    return this._renderTargetOptions = l, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    const l = this._config.createMaterial({ gainMapMax: [1, 1, 1], gainMapMin: [0, 0, 0], gamma: [1, 1, 1], offsetHdr: [1, 1, 1], offsetSdr: [1, 1, 1], hdrCapacityMax: 1, hdrCapacityMin: 0, maxDisplayBoost: 1, gainMap: new vl(), sdr: new vl() });
    return this._config.createQuadRenderer({ width: 16, height: 16, type: fa, colorSpace: af, material: l, renderer: this._renderer, renderTargetOptions: this._renderTargetOptions });
  }
  async processImages(l, v, s) {
    const r = v ? new Blob([v], { type: "image/jpeg" }) : void 0, i = new Blob([l], { type: "image/jpeg" });
    let h, f, c = false;
    if (typeof createImageBitmap > "u") {
      const d = await Promise.all([r ? Xm(r) : Promise.resolve(void 0), Xm(i)]);
      f = d[0], h = d[1], c = s === "flipY";
    } else {
      const d = await Promise.all([r ? createImageBitmap(r, { imageOrientation: s || "flipY" }) : Promise.resolve(void 0), createImageBitmap(i, { imageOrientation: s || "flipY" })]);
      f = d[0], h = d[1];
    }
    return { sdrImage: h, gainMapImage: f, needsFlip: c };
  }
  createTextures(l, v, s) {
    const r = new vl(v || new ImageData(2, 2), ks, ji, ji, ta, am, ho, lf, 1, af);
    r.flipY = s, r.needsUpdate = true;
    const i = new vl(l, ks, ji, ji, ta, am, ho, lf, 1, tg);
    return i.flipY = s, i.needsUpdate = true, { gainMap: r, sdr: i };
  }
  updateQuadRenderer(l, v, s, r, i) {
    l.width = v.width, l.height = v.height, l.material.gainMap = s, l.material.sdr = r, l.material.gainMapMin = i.gainMapMin, l.material.gainMapMax = i.gainMapMax, l.material.offsetHdr = i.offsetHdr, l.material.offsetSdr = i.offsetSdr, l.material.gamma = i.gamma, l.material.hdrCapacityMin = i.hdrCapacityMin, l.material.hdrCapacityMax = i.hdrCapacityMax, l.material.maxDisplayBoost = Math.pow(2, i.hdrCapacityMax), l.material.needsUpdate = true;
  }
}
const B2 = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, N2 = `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
class G2 extends Yi {
  constructor({ gamma: l, offsetHdr: v, offsetSdr: s, gainMapMin: r, gainMapMax: i, maxDisplayBoost: h, hdrCapacityMin: f, hdrCapacityMax: c, sdr: d, gainMap: m }) {
    super({ name: "GainMapDecoderMaterial", vertexShader: B2, fragmentShader: N2, uniforms: { sdr: { value: d }, gainMap: { value: m }, gamma: { value: new Ae(1 / l[0], 1 / l[1], 1 / l[2]) }, offsetHdr: { value: new Ae().fromArray(v) }, offsetSdr: { value: new Ae().fromArray(s) }, gainMapMin: { value: new Ae().fromArray(r) }, gainMapMax: { value: new Ae().fromArray(i) }, weightFactor: { value: (Math.log2(h) - f) / (c - f) } }, blending: ng, depthTest: false, depthWrite: false });
    __publicField(this, "_maxDisplayBoost");
    __publicField(this, "_hdrCapacityMin");
    __publicField(this, "_hdrCapacityMax");
    this._maxDisplayBoost = h, this._hdrCapacityMin = f, this._hdrCapacityMax = c, this.needsUpdate = true, this.uniformsNeedUpdate = true;
  }
  get sdr() {
    return this.uniforms.sdr.value;
  }
  set sdr(l) {
    this.uniforms.sdr.value = l;
  }
  get gainMap() {
    return this.uniforms.gainMap.value;
  }
  set gainMap(l) {
    this.uniforms.gainMap.value = l;
  }
  get offsetHdr() {
    return this.uniforms.offsetHdr.value.toArray();
  }
  set offsetHdr(l) {
    this.uniforms.offsetHdr.value.fromArray(l);
  }
  get offsetSdr() {
    return this.uniforms.offsetSdr.value.toArray();
  }
  set offsetSdr(l) {
    this.uniforms.offsetSdr.value.fromArray(l);
  }
  get gainMapMin() {
    return this.uniforms.gainMapMin.value.toArray();
  }
  set gainMapMin(l) {
    this.uniforms.gainMapMin.value.fromArray(l);
  }
  get gainMapMax() {
    return this.uniforms.gainMapMax.value.toArray();
  }
  set gainMapMax(l) {
    this.uniforms.gainMapMax.value.fromArray(l);
  }
  get gamma() {
    const l = this.uniforms.gamma.value;
    return [1 / l.x, 1 / l.y, 1 / l.z];
  }
  set gamma(l) {
    const v = this.uniforms.gamma.value;
    v.x = 1 / l[0], v.y = 1 / l[1], v.z = 1 / l[2];
  }
  get hdrCapacityMin() {
    return this._hdrCapacityMin;
  }
  set hdrCapacityMin(l) {
    this._hdrCapacityMin = l, this.calculateWeight();
  }
  get hdrCapacityMax() {
    return this._hdrCapacityMax;
  }
  set hdrCapacityMax(l) {
    this._hdrCapacityMax = l, this.calculateWeight();
  }
  get maxDisplayBoost() {
    return this._maxDisplayBoost;
  }
  set maxDisplayBoost(l) {
    this._maxDisplayBoost = Math.max(1, Math.min(65504, l)), this.calculateWeight();
  }
  calculateWeight() {
    const l = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
    this.uniforms.weightFactor.value = Math.max(0, Math.min(1, l));
  }
}
class A0 extends L2 {
  constructor(l, v) {
    super({ renderer: l, createMaterial: (s) => new G2(s), createQuadRenderer: (s) => new Ef(s) }, v);
  }
  async render(l, v, s, r) {
    const { sdrImage: i, gainMapImage: h, needsFlip: f } = await this.processImages(s, r, "flipY"), { gainMap: c, sdr: d } = this.createTextures(i, h, f);
    this.updateQuadRenderer(l, i, c, d, v), l.render();
  }
}
class H2 extends A0 {
  load([l, v, s], r, i, h) {
    const f = this.prepareQuadRenderer();
    let c, d, m;
    const y = async () => {
      if (c && d && m) {
        try {
          await this.render(f, m, c, d);
        } catch (Y) {
          this.manager.itemError(l), this.manager.itemError(v), this.manager.itemError(s), typeof h == "function" && h(Y), f.disposeOnDemandRenderer();
          return;
        }
        typeof r == "function" && r(f), this.manager.itemEnd(l), this.manager.itemEnd(v), this.manager.itemEnd(s), f.disposeOnDemandRenderer();
      }
    };
    let S = true, E = 0, A = 0, U = true, x = 0, Q = 0, N = true, C = 0, z = 0;
    const O = () => {
      if (typeof i == "function") {
        const Y = E + x + C, I = A + Q + z, me = S && U && N;
        i(new ProgressEvent("progress", { lengthComputable: me, loaded: I, total: Y }));
      }
    };
    this.manager.itemStart(l), this.manager.itemStart(v), this.manager.itemStart(s);
    const L = new Ns(this._internalLoadingManager);
    L.setResponseType("arraybuffer"), L.setRequestHeader(this.requestHeader), L.setPath(this.path), L.setWithCredentials(this.withCredentials), L.load(l, async (Y) => {
      if (typeof Y == "string") throw new Error("Invalid sdr buffer");
      c = Y, await y();
    }, (Y) => {
      S = Y.lengthComputable, A = Y.loaded, E = Y.total, O();
    }, (Y) => {
      this.manager.itemError(l), typeof h == "function" && h(Y);
    });
    const H = new Ns(this._internalLoadingManager);
    H.setResponseType("arraybuffer"), H.setRequestHeader(this.requestHeader), H.setPath(this.path), H.setWithCredentials(this.withCredentials), H.load(v, async (Y) => {
      if (typeof Y == "string") throw new Error("Invalid gainmap buffer");
      d = Y, await y();
    }, (Y) => {
      U = Y.lengthComputable, Q = Y.loaded, x = Y.total, O();
    }, (Y) => {
      this.manager.itemError(v), typeof h == "function" && h(Y);
    });
    const D = new Ns(this._internalLoadingManager);
    return D.setRequestHeader(this.requestHeader), D.setPath(this.path), D.setWithCredentials(this.withCredentials), D.load(s, async (Y) => {
      if (typeof Y != "string") throw new Error("Invalid metadata string");
      m = JSON.parse(Y), await y();
    }, (Y) => {
      N = Y.lengthComputable, z = Y.loaded, C = Y.total, O();
    }, (Y) => {
      this.manager.itemError(s), typeof h == "function" && h(Y);
    }), f;
  }
}
class F2 extends A0 {
  load(l, v, s, r) {
    const i = this.prepareQuadRenderer(), h = new Ns(this._internalLoadingManager);
    return h.setResponseType("arraybuffer"), h.setRequestHeader(this.requestHeader), h.setPath(this.path), h.setWithCredentials(this.withCredentials), this.manager.itemStart(l), h.load(l, async (f) => {
      if (typeof f == "string") throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const c = new Uint8Array(f);
      let d, m, y;
      try {
        const S = await R2(c);
        d = S.sdr, m = S.gainMap, y = S.metadata;
      } catch (S) {
        if (S instanceof T0 || S instanceof M0) console.warn(`Failure to reconstruct an HDR image from ${l}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), y = { gainMapMin: [0, 0, 0], gainMapMax: [1, 1, 1], gamma: [1, 1, 1], hdrCapacityMin: 0, hdrCapacityMax: 1, offsetHdr: [0, 0, 0], offsetSdr: [0, 0, 0] }, d = c;
        else throw S;
      }
      try {
        await this.render(i, y, d.buffer, m == null ? void 0 : m.buffer);
      } catch (S) {
        this.manager.itemError(l), typeof r == "function" && r(S), i.disposeOnDemandRenderer();
        return;
      }
      typeof v == "function" && v(i), this.manager.itemEnd(l), i.disposeOnDemandRenderer();
    }, s, (f) => {
      this.manager.itemError(l), typeof r == "function" && r(f);
    }), i;
  }
}
const mo = { apartment: "lebombo_1k.hdr", city: "potsdamer_platz_1k.hdr", dawn: "kiara_1_dawn_1k.hdr", forest: "forest_slope_1k.hdr", lobby: "st_fagans_interior_1k.hdr", night: "dikhololo_night_1k.hdr", park: "rooitou_park_1k.hdr", studio: "studio_small_03_1k.hdr", sunset: "venice_sunset_1k.hdr", warehouse: "empty_warehouse_01_1k.hdr" }, U0 = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", ur = (p) => Array.isArray(p), wf = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function Zs({ files: p = wf, path: l = "", preset: v = void 0, colorSpace: s = void 0, extensions: r } = {}) {
  v && (xf(v), p = mo[v], l = U0);
  const i = ur(p), { extension: h, isCubemap: f } = Mf(p), c = Tf(h);
  if (!c) throw new Error("useEnvironment: Unrecognized file extension: " + p);
  const d = Et((E) => E.gl);
  k.useLayoutEffect(() => {
    if (h !== "webp" && h !== "jpg" && h !== "jpeg") return;
    function E() {
      Fs.clear(c, i ? [p] : p);
    }
    d.domElement.addEventListener("webglcontextlost", E, { once: true });
  }, [p, d.domElement]);
  const m = Fs(c, i ? [p] : p, (E) => {
    (h === "webp" || h === "jpg" || h === "jpeg") && E.setRenderer(d), E.setPath == null || E.setPath(l), r && r(E);
  });
  let y = i ? m[0] : m;
  if (h === "jpg" || h === "jpeg" || h === "webp") {
    var S;
    y = (S = y.renderTarget) == null ? void 0 : S.texture;
  }
  return y.mapping = f ? ag : ig, y.colorSpace = s ?? (f ? "srgb" : "srgb-linear"), y;
}
const j2 = { files: wf, path: "", preset: void 0, extensions: void 0 };
Zs.preload = (p) => {
  const l = { ...j2, ...p };
  let { files: v, path: s = "" } = l;
  const { preset: r, extensions: i } = l;
  r && (xf(r), v = mo[r], s = U0);
  const { extension: h } = Mf(v);
  if (h === "webp" || h === "jpg" || h === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
  const f = Tf(h);
  if (!f) throw new Error("useEnvironment: Unrecognized file extension: " + v);
  Fs.preload(f, ur(v) ? [v] : v, (c) => {
    c.setPath == null || c.setPath(s), i && i(c);
  });
};
const k2 = { files: wf, preset: void 0 };
Zs.clear = (p) => {
  const l = { ...k2, ...p };
  let { files: v } = l;
  const { preset: s } = l;
  s && (xf(s), v = mo[s]);
  const { extension: r } = Mf(v), i = Tf(r);
  if (!i) throw new Error("useEnvironment: Unrecognized file extension: " + v);
  Fs.clear(i, ur(v) ? [v] : v);
};
function xf(p) {
  if (!(p in mo)) throw new Error("Preset must be one of: " + Object.keys(mo).join(", "));
}
function Mf(p) {
  var l;
  const v = ur(p) && p.length === 6, s = ur(p) && p.length === 3 && p.some((h) => h.endsWith("json")), r = ur(p) ? p[0] : p;
  return { extension: v ? "cube" : s ? "webp" : r.startsWith("data:application/exr") ? "exr" : r.startsWith("data:application/hdr") ? "hdr" : r.startsWith("data:image/jpeg") ? "jpg" : (l = r.split(".").pop()) == null || (l = l.split("?")) == null || (l = l.shift()) == null ? void 0 : l.toLowerCase(), isCubemap: v, isGainmap: s };
}
function Tf(p) {
  return p === "cube" ? lg : p === "hdr" ? yy : p === "exr" ? by : p === "jpg" || p === "jpeg" ? F2 : p === "webp" ? H2 : null;
}
const Y2 = (p) => p.current && p.current.isScene, X2 = (p) => Y2(p) ? p.current : p;
function Af(p, l, v, s, r = {}) {
  var i, h, f, c;
  r = { backgroundBlurriness: 0, backgroundIntensity: 1, backgroundRotation: [0, 0, 0], environmentIntensity: 1, environmentRotation: [0, 0, 0], ...r };
  const d = X2(l || v), m = d.background, y = d.environment, S = { backgroundBlurriness: d.backgroundBlurriness, backgroundIntensity: d.backgroundIntensity, backgroundRotation: (i = (h = d.backgroundRotation) == null || h.clone == null ? void 0 : h.clone()) !== null && i !== void 0 ? i : [0, 0, 0], environmentIntensity: d.environmentIntensity, environmentRotation: (f = (c = d.environmentRotation) == null || c.clone == null ? void 0 : c.clone()) !== null && f !== void 0 ? f : [0, 0, 0] };
  return p !== "only" && (d.environment = s), p && (d.background = s), fo(d, r), () => {
    p !== "only" && (d.environment = y), p && (d.background = m), fo(d, S);
  };
}
function Uf({ scene: p, background: l = false, map: v, ...s }) {
  const r = Et((i) => i.scene);
  return k.useLayoutEffect(() => {
    if (v) return Af(l, p, r, v, s);
  }), null;
}
function D0({ background: p = false, scene: l, blur: v, backgroundBlurriness: s, backgroundIntensity: r, backgroundRotation: i, environmentIntensity: h, environmentRotation: f, ...c }) {
  const d = Zs(c), m = Et((y) => y.scene);
  return k.useLayoutEffect(() => Af(p, l, m, d, { backgroundBlurriness: v ?? s, backgroundIntensity: r, backgroundRotation: i, environmentIntensity: h, environmentRotation: f })), k.useEffect(() => () => {
    d.dispose();
  }, [d]), null;
}
function V2({ children: p, near: l = 0.1, far: v = 1e3, resolution: s = 256, frames: r = 1, map: i, background: h = false, blur: f, backgroundBlurriness: c, backgroundIntensity: d, backgroundRotation: m, environmentIntensity: y, environmentRotation: S, scene: E, files: A, path: U, preset: x = void 0, extensions: Q }) {
  const N = Et((D) => D.gl), C = Et((D) => D.scene), z = k.useRef(null), [O] = k.useState(() => new gf()), L = k.useMemo(() => {
    const D = new rg(s);
    return D.texture.type = fa, D;
  }, [s]);
  k.useEffect(() => () => {
    L.dispose();
  }, [L]), k.useLayoutEffect(() => {
    if (r === 1) {
      const D = N.autoClear;
      N.autoClear = true, z.current.update(N, O), N.autoClear = D;
    }
    return Af(h, E, C, L.texture, { backgroundBlurriness: f ?? c, backgroundIntensity: d, backgroundRotation: m, environmentIntensity: y, environmentRotation: S });
  }, [p, O, L.texture, E, C, h, r, N]);
  let H = 1;
  return Vi(() => {
    if (r === 1 / 0 || H < r) {
      const D = N.autoClear;
      N.autoClear = true, z.current.update(N, O), N.autoClear = D, H++;
    }
  }), k.createElement(k.Fragment, null, Zm(k.createElement(k.Fragment, null, p, k.createElement("cubeCamera", { ref: z, args: [l, v, L] }), A || x ? k.createElement(D0, { background: true, files: A, preset: x, path: U, extensions: Q }) : i ? k.createElement(Uf, { background: true, map: i, extensions: Q }) : null), O));
}
function Z2(p) {
  var l, v, s, r;
  const i = Zs(p), h = p.map || i;
  k.useMemo(() => vf({ GroundProjectedEnvImpl: ny }), []), k.useEffect(() => () => {
    i.dispose();
  }, [i]);
  const f = k.useMemo(() => [h], [h]), c = (l = p.ground) == null ? void 0 : l.height, d = (v = p.ground) == null ? void 0 : v.radius, m = (s = (r = p.ground) == null ? void 0 : r.scale) !== null && s !== void 0 ? s : 1e3;
  return k.createElement(k.Fragment, null, k.createElement(Uf, Jt({}, p, { map: h })), k.createElement("groundProjectedEnvImpl", { args: f, scale: m, height: c, radius: d }));
}
function db(p) {
  return p.ground ? k.createElement(Z2, p) : p.map ? k.createElement(Uf, p) : p.children ? k.createElement(V2, p) : k.createElement(D0, p);
}
const vb = k.forwardRef(({ scale: p = 10, frames: l = 1 / 0, opacity: v = 1, width: s = 1, height: r = 1, blur: i = 1, near: h = 0, far: f = 10, resolution: c = 512, smooth: d = true, color: m = "#000000", depthWrite: y = false, renderOrder: S, ...E }, A) => {
  const U = k.useRef(null), x = Et((Z) => Z.scene), Q = Et((Z) => Z.gl), N = k.useRef(null);
  s = s * (Array.isArray(p) ? p[0] : p || 1), r = r * (Array.isArray(p) ? p[1] : p || 1);
  const [C, z, O, L, H, D, Y] = k.useMemo(() => {
    const Z = new vo(c, c), te = new vo(c, c);
    te.texture.generateMipmaps = Z.texture.generateMipmaps = false;
    const q = new ca(s, r).rotateX(Math.PI / 2), he = new et(q), Te = new Wm();
    Te.depthTest = Te.depthWrite = false, Te.onBeforeCompile = (T) => {
      T.uniforms = { ...T.uniforms, ucolor: { value: new Zn(m) } }, T.fragmentShader = T.fragmentShader.replace("void main() {", `uniform vec3 ucolor;
           void main() {
          `), T.fragmentShader = T.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );", "vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );");
    };
    const re = new Yi(py), W = new Yi(gy);
    return W.depthTest = re.depthTest = false, [Z, q, Te, he, re, W, te];
  }, [c, s, r, p, m]), I = (Z) => {
    L.visible = true, L.material = H, H.uniforms.tDiffuse.value = C.texture, H.uniforms.h.value = Z * 1 / 256, Q.setRenderTarget(Y), Q.render(L, N.current), L.material = D, D.uniforms.tDiffuse.value = Y.texture, D.uniforms.v.value = Z * 1 / 256, Q.setRenderTarget(C), Q.render(L, N.current), L.visible = false;
  };
  let me = 0, j, J;
  return Vi(() => {
    N.current && (l === 1 / 0 || me < l) && (me++, j = x.background, J = x.overrideMaterial, U.current.visible = false, x.background = null, x.overrideMaterial = O, Q.setRenderTarget(C), Q.render(x, N.current), I(i), d && I(i * 0.4), Q.setRenderTarget(null), U.current.visible = true, x.overrideMaterial = J, x.background = j);
  }), k.useImperativeHandle(A, () => U.current, []), k.createElement("group", Jt({ "rotation-x": Math.PI / 2 }, E, { ref: U }), k.createElement("mesh", { renderOrder: S, geometry: z, scale: [1, -1, 1], rotation: [-Math.PI / 2, 0, 0] }, k.createElement("meshBasicMaterial", { transparent: true, map: C.texture, opacity: v, depthWrite: y })), k.createElement("orthographicCamera", { ref: N, args: [-s / 2, s / 2, r / 2, -r / 2, h, f] }));
}), mb = k.forwardRef(({ light: p, args: l, map: v, toneMapped: s = false, color: r = "white", form: i = "rect", intensity: h = 1, scale: f = 1, target: c = [0, 0, 0], children: d, ...m }, y) => {
  const S = k.useRef(null);
  return k.useImperativeHandle(y, () => S.current, []), k.useLayoutEffect(() => {
    !d && !m.material && (fo(S.current.material, { color: r }), S.current.material.color.multiplyScalar(h));
  }, [r, h, d, m.material]), k.useLayoutEffect(() => {
    m.rotation || S.current.quaternion.identity(), c && !m.rotation && (typeof c == "boolean" ? S.current.lookAt(0, 0, 0) : S.current.lookAt(Array.isArray(c) ? new Ae(...c) : c));
  }, [c, m.rotation]), f = Array.isArray(f) && f.length === 2 ? [f[0], f[1], 1] : f, k.createElement("mesh", Jt({ ref: S, scale: f }, m), i === "circle" ? k.createElement("ringGeometry", { args: l || [0, 0.5, 64] }) : i === "ring" ? k.createElement("ringGeometry", { args: l || [0.25, 0.5, 64] }) : i === "rect" || i === "plane" ? k.createElement("planeGeometry", { args: l || [1, 1] }) : i === "box" ? k.createElement("boxGeometry", { args: l || [1, 1, 1] }) : k.createElement(i, { args: l }), d || k.createElement("meshBasicMaterial", { toneMapped: s, map: v, side: hr }), p && k.createElement("pointLight", Jt({ castShadow: true }, p)));
});
export {
  vb as C,
  db as E,
  fb as G,
  eb as H,
  wy as L,
  K2 as M,
  ob as O,
  hb as P,
  sb as T,
  I2 as _,
  lb as a,
  rb as b,
  P2 as c,
  ib as d,
  ub as e,
  cb as f,
  mb as g,
  dg as h,
  J2 as i,
  W2 as p,
  cg as r,
  $2 as t,
  mg as u
};
