var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2, _b;
import { i as e, t } from "./rolldown-runtime-COiEfhsA.js";
import { $ as n, $t as r, At as i, Cn as a, Ct as o, Dn as s, Dt as c, Et as l, F as u, Ft as d, G as f, Gt as p, H as m, I as h, It as g, J as _, Jt as v, K as y, L as b, Lt as x, Nt as S, On as C, Ot as w, P as T, Pt as E, Q as D, Qt as O, R as k, Rt as A, Sn as j, St as M, Tn as N, U as P, Ut as F, V as I, W as ee, Wt as L, X as R, Y as z, Yt as B, Z as te, Zt as V, _t as ne, an as H, at as re, bn as ie, bt as U, ct as ae, dn as oe, en as se, et as ce, fn as le, gn as ue, gt as de, hn as fe, ht as pe, in as me, it as W, jt as he, kt as ge, ln as _e, lt as ve, mn as ye, mt as be, nn as xe, on as Se, pn as Ce, pt as we, q as Te, qt as Ee, rt as De, tn as Oe, tt as ke, un as Ae, ut as je, vn as Me, vt as Ne, wn as G, wt as K, xt as Pe, yn as Fe, yt as Ie, zt as q } from "./three-Dweqhmle.js";
var Le = t(((e3) => {
  var t2 = Symbol.for(`react.transitional.element`), n2 = Symbol.for(`react.portal`), r2 = Symbol.for(`react.fragment`), i2 = Symbol.for(`react.strict_mode`), a2 = Symbol.for(`react.profiler`), o2 = Symbol.for(`react.consumer`), s2 = Symbol.for(`react.context`), c2 = Symbol.for(`react.forward_ref`), l2 = Symbol.for(`react.suspense`), u2 = Symbol.for(`react.memo`), d2 = Symbol.for(`react.lazy`), f2 = Symbol.for(`react.activity`), p2 = Symbol.iterator;
  function m2(e4) {
    return typeof e4 != `object` || !e4 ? null : (e4 = p2 && e4[p2] || e4[`@@iterator`], typeof e4 == `function` ? e4 : null);
  }
  var h2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, g2 = Object.assign, _2 = {};
  function v2(e4, t3, n3) {
    this.props = e4, this.context = t3, this.refs = _2, this.updater = n3 || h2;
  }
  v2.prototype.isReactComponent = {}, v2.prototype.setState = function(e4, t3) {
    if (typeof e4 != `object` && typeof e4 != `function` && e4 != null) throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
    this.updater.enqueueSetState(this, e4, t3, `setState`);
  }, v2.prototype.forceUpdate = function(e4) {
    this.updater.enqueueForceUpdate(this, e4, `forceUpdate`);
  };
  function y2() {
  }
  y2.prototype = v2.prototype;
  function b2(e4, t3, n3) {
    this.props = e4, this.context = t3, this.refs = _2, this.updater = n3 || h2;
  }
  var x2 = b2.prototype = new y2();
  x2.constructor = b2, g2(x2, v2.prototype), x2.isPureReactComponent = true;
  var S2 = Array.isArray;
  function C2() {
  }
  var w2 = { H: null, A: null, T: null, S: null }, T2 = Object.prototype.hasOwnProperty;
  function E2(e4, n3, r3) {
    var i3 = r3.ref;
    return { $$typeof: t2, type: e4, key: n3, ref: i3 === void 0 ? null : i3, props: r3 };
  }
  function D2(e4, t3) {
    return E2(e4.type, t3, e4.props);
  }
  function O2(e4) {
    return typeof e4 == `object` && !!e4 && e4.$$typeof === t2;
  }
  function k2(e4) {
    var t3 = { "=": `=0`, ":": `=2` };
    return `$` + e4.replace(/[=:]/g, function(e5) {
      return t3[e5];
    });
  }
  var A2 = /\/+/g;
  function j2(e4, t3) {
    return typeof e4 == `object` && e4 && e4.key != null ? k2(`` + e4.key) : t3.toString(36);
  }
  function M2(e4) {
    switch (e4.status) {
      case `fulfilled`:
        return e4.value;
      case `rejected`:
        throw e4.reason;
      default:
        switch (typeof e4.status == `string` ? e4.then(C2, C2) : (e4.status = `pending`, e4.then(function(t3) {
          e4.status === `pending` && (e4.status = `fulfilled`, e4.value = t3);
        }, function(t3) {
          e4.status === `pending` && (e4.status = `rejected`, e4.reason = t3);
        })), e4.status) {
          case `fulfilled`:
            return e4.value;
          case `rejected`:
            throw e4.reason;
        }
    }
    throw e4;
  }
  function N2(e4, r3, i3, a3, o3) {
    var s3 = typeof e4;
    (s3 === `undefined` || s3 === `boolean`) && (e4 = null);
    var c3 = false;
    if (e4 === null) c3 = true;
    else switch (s3) {
      case `bigint`:
      case `string`:
      case `number`:
        c3 = true;
        break;
      case `object`:
        switch (e4.$$typeof) {
          case t2:
          case n2:
            c3 = true;
            break;
          case d2:
            return c3 = e4._init, N2(c3(e4._payload), r3, i3, a3, o3);
        }
    }
    if (c3) return o3 = o3(e4), c3 = a3 === `` ? `.` + j2(e4, 0) : a3, S2(o3) ? (i3 = ``, c3 != null && (i3 = c3.replace(A2, `$&/`) + `/`), N2(o3, r3, i3, ``, function(e5) {
      return e5;
    })) : o3 != null && (O2(o3) && (o3 = D2(o3, i3 + (o3.key == null || e4 && e4.key === o3.key ? `` : (`` + o3.key).replace(A2, `$&/`) + `/`) + c3)), r3.push(o3)), 1;
    c3 = 0;
    var l3 = a3 === `` ? `.` : a3 + `:`;
    if (S2(e4)) for (var u3 = 0; u3 < e4.length; u3++) a3 = e4[u3], s3 = l3 + j2(a3, u3), c3 += N2(a3, r3, i3, s3, o3);
    else if (u3 = m2(e4), typeof u3 == `function`) for (e4 = u3.call(e4), u3 = 0; !(a3 = e4.next()).done; ) a3 = a3.value, s3 = l3 + j2(a3, u3++), c3 += N2(a3, r3, i3, s3, o3);
    else if (s3 === `object`) {
      if (typeof e4.then == `function`) return N2(M2(e4), r3, i3, a3, o3);
      throw r3 = String(e4), Error(`Objects are not valid as a React child (found: ` + (r3 === `[object Object]` ? `object with keys {` + Object.keys(e4).join(`, `) + `}` : r3) + `). If you meant to render a collection of children, use an array instead.`);
    }
    return c3;
  }
  function P2(e4, t3, n3) {
    if (e4 == null) return e4;
    var r3 = [], i3 = 0;
    return N2(e4, r3, ``, ``, function(e5) {
      return t3.call(n3, e5, i3++);
    }), r3;
  }
  function F2(e4) {
    if (e4._status === -1) {
      var t3 = e4._result;
      t3 = t3(), t3.then(function(t4) {
        (e4._status === 0 || e4._status === -1) && (e4._status = 1, e4._result = t4);
      }, function(t4) {
        (e4._status === 0 || e4._status === -1) && (e4._status = 2, e4._result = t4);
      }), e4._status === -1 && (e4._status = 0, e4._result = t3);
    }
    if (e4._status === 1) return e4._result.default;
    throw e4._result;
  }
  var I2 = typeof reportError == `function` ? reportError : function(e4) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e4 == `object` && e4 && typeof e4.message == `string` ? String(e4.message) : String(e4), error: e4 });
      if (!window.dispatchEvent(t3)) return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e4);
      return;
    }
    console.error(e4);
  }, ee2 = { map: P2, forEach: function(e4, t3, n3) {
    P2(e4, function() {
      t3.apply(this, arguments);
    }, n3);
  }, count: function(e4) {
    var t3 = 0;
    return P2(e4, function() {
      t3++;
    }), t3;
  }, toArray: function(e4) {
    return P2(e4, function(e5) {
      return e5;
    }) || [];
  }, only: function(e4) {
    if (!O2(e4)) throw Error(`React.Children.only expected to receive a single React element child.`);
    return e4;
  } };
  e3.Activity = f2, e3.Children = ee2, e3.Component = v2, e3.Fragment = r2, e3.Profiler = a2, e3.PureComponent = b2, e3.StrictMode = i2, e3.Suspense = l2, e3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w2, e3.__COMPILER_RUNTIME = { __proto__: null, c: function(e4) {
    return w2.H.useMemoCache(e4);
  } }, e3.cache = function(e4) {
    return function() {
      return e4.apply(null, arguments);
    };
  }, e3.cacheSignal = function() {
    return null;
  }, e3.cloneElement = function(e4, t3, n3) {
    if (e4 == null) throw Error(`The argument must be a React element, but you passed ` + e4 + `.`);
    var r3 = g2({}, e4.props), i3 = e4.key;
    if (t3 != null) for (a3 in t3.key !== void 0 && (i3 = `` + t3.key), t3) !T2.call(t3, a3) || a3 === `key` || a3 === `__self` || a3 === `__source` || a3 === `ref` && t3.ref === void 0 || (r3[a3] = t3[a3]);
    var a3 = arguments.length - 2;
    if (a3 === 1) r3.children = n3;
    else if (1 < a3) {
      for (var o3 = Array(a3), s3 = 0; s3 < a3; s3++) o3[s3] = arguments[s3 + 2];
      r3.children = o3;
    }
    return E2(e4.type, i3, r3);
  }, e3.createContext = function(e4) {
    return e4 = { $$typeof: s2, _currentValue: e4, _currentValue2: e4, _threadCount: 0, Provider: null, Consumer: null }, e4.Provider = e4, e4.Consumer = { $$typeof: o2, _context: e4 }, e4;
  }, e3.createElement = function(e4, t3, n3) {
    var r3, i3 = {}, a3 = null;
    if (t3 != null) for (r3 in t3.key !== void 0 && (a3 = `` + t3.key), t3) T2.call(t3, r3) && r3 !== `key` && r3 !== `__self` && r3 !== `__source` && (i3[r3] = t3[r3]);
    var o3 = arguments.length - 2;
    if (o3 === 1) i3.children = n3;
    else if (1 < o3) {
      for (var s3 = Array(o3), c3 = 0; c3 < o3; c3++) s3[c3] = arguments[c3 + 2];
      i3.children = s3;
    }
    if (e4 && e4.defaultProps) for (r3 in o3 = e4.defaultProps, o3) i3[r3] === void 0 && (i3[r3] = o3[r3]);
    return E2(e4, a3, i3);
  }, e3.createRef = function() {
    return { current: null };
  }, e3.forwardRef = function(e4) {
    return { $$typeof: c2, render: e4 };
  }, e3.isValidElement = O2, e3.lazy = function(e4) {
    return { $$typeof: d2, _payload: { _status: -1, _result: e4 }, _init: F2 };
  }, e3.memo = function(e4, t3) {
    return { $$typeof: u2, type: e4, compare: t3 === void 0 ? null : t3 };
  }, e3.startTransition = function(e4) {
    var t3 = w2.T, n3 = {};
    w2.T = n3;
    try {
      var r3 = e4(), i3 = w2.S;
      i3 !== null && i3(n3, r3), typeof r3 == `object` && r3 && typeof r3.then == `function` && r3.then(C2, I2);
    } catch (e5) {
      I2(e5);
    } finally {
      t3 !== null && n3.types !== null && (t3.types = n3.types), w2.T = t3;
    }
  }, e3.unstable_useCacheRefresh = function() {
    return w2.H.useCacheRefresh();
  }, e3.use = function(e4) {
    return w2.H.use(e4);
  }, e3.useActionState = function(e4, t3, n3) {
    return w2.H.useActionState(e4, t3, n3);
  }, e3.useCallback = function(e4, t3) {
    return w2.H.useCallback(e4, t3);
  }, e3.useContext = function(e4) {
    return w2.H.useContext(e4);
  }, e3.useDebugValue = function() {
  }, e3.useDeferredValue = function(e4, t3) {
    return w2.H.useDeferredValue(e4, t3);
  }, e3.useEffect = function(e4, t3) {
    return w2.H.useEffect(e4, t3);
  }, e3.useEffectEvent = function(e4) {
    return w2.H.useEffectEvent(e4);
  }, e3.useId = function() {
    return w2.H.useId();
  }, e3.useImperativeHandle = function(e4, t3, n3) {
    return w2.H.useImperativeHandle(e4, t3, n3);
  }, e3.useInsertionEffect = function(e4, t3) {
    return w2.H.useInsertionEffect(e4, t3);
  }, e3.useLayoutEffect = function(e4, t3) {
    return w2.H.useLayoutEffect(e4, t3);
  }, e3.useMemo = function(e4, t3) {
    return w2.H.useMemo(e4, t3);
  }, e3.useOptimistic = function(e4, t3) {
    return w2.H.useOptimistic(e4, t3);
  }, e3.useReducer = function(e4, t3, n3) {
    return w2.H.useReducer(e4, t3, n3);
  }, e3.useRef = function(e4) {
    return w2.H.useRef(e4);
  }, e3.useState = function(e4) {
    return w2.H.useState(e4);
  }, e3.useSyncExternalStore = function(e4, t3, n3) {
    return w2.H.useSyncExternalStore(e4, t3, n3);
  }, e3.useTransition = function() {
    return w2.H.useTransition();
  }, e3.version = `19.2.4`;
})), Re = t(((e3, t2) => {
  t2.exports = Le();
})), ze = t(((e3) => {
  function t2(e4, t3) {
    var n3 = e4.length;
    e4.push(t3);
    a: for (; 0 < n3; ) {
      var r3 = n3 - 1 >>> 1, a3 = e4[r3];
      if (0 < i2(a3, t3)) e4[r3] = t3, e4[n3] = a3, n3 = r3;
      else break a;
    }
  }
  function n2(e4) {
    return e4.length === 0 ? null : e4[0];
  }
  function r2(e4) {
    if (e4.length === 0) return null;
    var t3 = e4[0], n3 = e4.pop();
    if (n3 !== t3) {
      e4[0] = n3;
      a: for (var r3 = 0, a3 = e4.length, o3 = a3 >>> 1; r3 < o3; ) {
        var s3 = 2 * (r3 + 1) - 1, c3 = e4[s3], l3 = s3 + 1, u3 = e4[l3];
        if (0 > i2(c3, n3)) l3 < a3 && 0 > i2(u3, c3) ? (e4[r3] = u3, e4[l3] = n3, r3 = l3) : (e4[r3] = c3, e4[s3] = n3, r3 = s3);
        else if (l3 < a3 && 0 > i2(u3, n3)) e4[r3] = u3, e4[l3] = n3, r3 = l3;
        else break a;
      }
    }
    return t3;
  }
  function i2(e4, t3) {
    var n3 = e4.sortIndex - t3.sortIndex;
    return n3 === 0 ? e4.id - t3.id : n3;
  }
  if (e3.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
    var a2 = performance;
    e3.unstable_now = function() {
      return a2.now();
    };
  } else {
    var o2 = Date, s2 = o2.now();
    e3.unstable_now = function() {
      return o2.now() - s2;
    };
  }
  var c2 = [], l2 = [], u2 = 1, d2 = null, f2 = 3, p2 = false, m2 = false, h2 = false, g2 = false, _2 = typeof setTimeout == `function` ? setTimeout : null, v2 = typeof clearTimeout == `function` ? clearTimeout : null, y2 = typeof setImmediate < `u` ? setImmediate : null;
  function b2(e4) {
    for (var i3 = n2(l2); i3 !== null; ) {
      if (i3.callback === null) r2(l2);
      else if (i3.startTime <= e4) r2(l2), i3.sortIndex = i3.expirationTime, t2(c2, i3);
      else break;
      i3 = n2(l2);
    }
  }
  function x2(e4) {
    if (h2 = false, b2(e4), !m2) {
      if (n2(c2) !== null) m2 = true, S2 || (S2 = true, O2());
      else {
        var t3 = n2(l2);
        t3 !== null && j2(x2, t3.startTime - e4);
      }
    }
  }
  var S2 = false, C2 = -1, w2 = 5, T2 = -1;
  function E2() {
    return g2 ? true : !(e3.unstable_now() - T2 < w2);
  }
  function D2() {
    if (g2 = false, S2) {
      var t3 = e3.unstable_now();
      T2 = t3;
      var i3 = true;
      try {
        a: {
          m2 = false, h2 && (h2 = false, v2(C2), C2 = -1), p2 = true;
          var a3 = f2;
          try {
            b: {
              for (b2(t3), d2 = n2(c2); d2 !== null && !(d2.expirationTime > t3 && E2()); ) {
                var o3 = d2.callback;
                if (typeof o3 == `function`) {
                  d2.callback = null, f2 = d2.priorityLevel;
                  var s3 = o3(d2.expirationTime <= t3);
                  if (t3 = e3.unstable_now(), typeof s3 == `function`) {
                    d2.callback = s3, b2(t3), i3 = true;
                    break b;
                  }
                  d2 === n2(c2) && r2(c2), b2(t3);
                } else r2(c2);
                d2 = n2(c2);
              }
              if (d2 !== null) i3 = true;
              else {
                var u3 = n2(l2);
                u3 !== null && j2(x2, u3.startTime - t3), i3 = false;
              }
            }
            break a;
          } finally {
            d2 = null, f2 = a3, p2 = false;
          }
          i3 = void 0;
        }
      } finally {
        i3 ? O2() : S2 = false;
      }
    }
  }
  var O2;
  if (typeof y2 == `function`) O2 = function() {
    y2(D2);
  };
  else if (typeof MessageChannel < `u`) {
    var k2 = new MessageChannel(), A2 = k2.port2;
    k2.port1.onmessage = D2, O2 = function() {
      A2.postMessage(null);
    };
  } else O2 = function() {
    _2(D2, 0);
  };
  function j2(t3, n3) {
    C2 = _2(function() {
      t3(e3.unstable_now());
    }, n3);
  }
  e3.unstable_IdlePriority = 5, e3.unstable_ImmediatePriority = 1, e3.unstable_LowPriority = 4, e3.unstable_NormalPriority = 3, e3.unstable_Profiling = null, e3.unstable_UserBlockingPriority = 2, e3.unstable_cancelCallback = function(e4) {
    e4.callback = null;
  }, e3.unstable_forceFrameRate = function(e4) {
    0 > e4 || 125 < e4 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : w2 = 0 < e4 ? Math.floor(1e3 / e4) : 5;
  }, e3.unstable_getCurrentPriorityLevel = function() {
    return f2;
  }, e3.unstable_next = function(e4) {
    switch (f2) {
      case 1:
      case 2:
      case 3:
        var t3 = 3;
        break;
      default:
        t3 = f2;
    }
    var n3 = f2;
    f2 = t3;
    try {
      return e4();
    } finally {
      f2 = n3;
    }
  }, e3.unstable_requestPaint = function() {
    g2 = true;
  }, e3.unstable_runWithPriority = function(e4, t3) {
    switch (e4) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e4 = 3;
    }
    var n3 = f2;
    f2 = e4;
    try {
      return t3();
    } finally {
      f2 = n3;
    }
  }, e3.unstable_scheduleCallback = function(r3, i3, a3) {
    var o3 = e3.unstable_now();
    switch (typeof a3 == `object` && a3 ? (a3 = a3.delay, a3 = typeof a3 == `number` && 0 < a3 ? o3 + a3 : o3) : a3 = o3, r3) {
      case 1:
        var s3 = -1;
        break;
      case 2:
        s3 = 250;
        break;
      case 5:
        s3 = 1073741823;
        break;
      case 4:
        s3 = 1e4;
        break;
      default:
        s3 = 5e3;
    }
    return s3 = a3 + s3, r3 = { id: u2++, callback: i3, priorityLevel: r3, startTime: a3, expirationTime: s3, sortIndex: -1 }, a3 > o3 ? (r3.sortIndex = a3, t2(l2, r3), n2(c2) === null && r3 === n2(l2) && (h2 ? (v2(C2), C2 = -1) : h2 = true, j2(x2, a3 - o3))) : (r3.sortIndex = s3, t2(c2, r3), m2 || p2 || (m2 = true, S2 || (S2 = true, O2()))), r3;
  }, e3.unstable_shouldYield = E2, e3.unstable_wrapCallback = function(e4) {
    var t3 = f2;
    return function() {
      var n3 = f2;
      f2 = t3;
      try {
        return e4.apply(this, arguments);
      } finally {
        f2 = n3;
      }
    };
  };
})), Be = t(((e3, t2) => {
  t2.exports = ze();
})), Ve = t(((e3) => {
  var t2 = Re();
  function n2(e4) {
    var t3 = `https://react.dev/errors/` + e4;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n3 = 2; n3 < arguments.length; n3++) t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
    }
    return `Minified React error #` + e4 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function r2() {
  }
  var i2 = { d: { f: r2, r: function() {
    throw Error(n2(522));
  }, D: r2, C: r2, L: r2, m: r2, X: r2, S: r2, M: r2 }, p: 0, findDOMNode: null }, a2 = Symbol.for(`react.portal`);
  function o2(e4, t3, n3) {
    var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: a2, key: r3 == null ? null : `` + r3, children: e4, containerInfo: t3, implementation: n3 };
  }
  var s2 = t2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function c2(e4, t3) {
    if (e4 === `font`) return ``;
    if (typeof t3 == `string`) return t3 === `use-credentials` ? t3 : ``;
  }
  e3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i2, e3.createPortal = function(e4, t3) {
    var r3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t3 || t3.nodeType !== 1 && t3.nodeType !== 9 && t3.nodeType !== 11) throw Error(n2(299));
    return o2(e4, t3, null, r3);
  }, e3.flushSync = function(e4) {
    var t3 = s2.T, n3 = i2.p;
    try {
      if (s2.T = null, i2.p = 2, e4) return e4();
    } finally {
      s2.T = t3, i2.p = n3, i2.d.f();
    }
  }, e3.preconnect = function(e4, t3) {
    typeof e4 == `string` && (t3 ? (t3 = t3.crossOrigin, t3 = typeof t3 == `string` ? t3 === `use-credentials` ? t3 : `` : void 0) : t3 = null, i2.d.C(e4, t3));
  }, e3.prefetchDNS = function(e4) {
    typeof e4 == `string` && i2.d.D(e4);
  }, e3.preinit = function(e4, t3) {
    if (typeof e4 == `string` && t3 && typeof t3.as == `string`) {
      var n3 = t3.as, r3 = c2(n3, t3.crossOrigin), a3 = typeof t3.integrity == `string` ? t3.integrity : void 0, o3 = typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0;
      n3 === `style` ? i2.d.S(e4, typeof t3.precedence == `string` ? t3.precedence : void 0, { crossOrigin: r3, integrity: a3, fetchPriority: o3 }) : n3 === `script` && i2.d.X(e4, { crossOrigin: r3, integrity: a3, fetchPriority: o3, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0 });
    }
  }, e3.preinitModule = function(e4, t3) {
    if (typeof e4 == `string`) {
      if (typeof t3 == `object` && t3) {
        if (t3.as == null || t3.as === `script`) {
          var n3 = c2(t3.as, t3.crossOrigin);
          i2.d.M(e4, { crossOrigin: n3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0 });
        }
      } else t3 ?? i2.d.M(e4);
    }
  }, e3.preload = function(e4, t3) {
    if (typeof e4 == `string` && typeof t3 == `object` && t3 && typeof t3.as == `string`) {
      var n3 = t3.as, r3 = c2(n3, t3.crossOrigin);
      i2.d.L(e4, n3, { crossOrigin: r3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, type: typeof t3.type == `string` ? t3.type : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0, referrerPolicy: typeof t3.referrerPolicy == `string` ? t3.referrerPolicy : void 0, imageSrcSet: typeof t3.imageSrcSet == `string` ? t3.imageSrcSet : void 0, imageSizes: typeof t3.imageSizes == `string` ? t3.imageSizes : void 0, media: typeof t3.media == `string` ? t3.media : void 0 });
    }
  }, e3.preloadModule = function(e4, t3) {
    if (typeof e4 == `string`) {
      if (t3) {
        var n3 = c2(t3.as, t3.crossOrigin);
        i2.d.m(e4, { as: typeof t3.as == `string` && t3.as !== `script` ? t3.as : void 0, crossOrigin: n3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0 });
      } else i2.d.m(e4);
    }
  }, e3.requestFormReset = function(e4) {
    i2.d.r(e4);
  }, e3.unstable_batchedUpdates = function(e4, t3) {
    return e4(t3);
  }, e3.useFormState = function(e4, t3, n3) {
    return s2.H.useFormState(e4, t3, n3);
  }, e3.useFormStatus = function() {
    return s2.H.useHostTransitionStatus();
  }, e3.version = `19.2.4`;
})), He = t(((e3, t2) => {
  function n2() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (e4) {
      console.error(e4);
    }
  }
  n2(), t2.exports = Ve();
})), Ue = t(((e3) => {
  var t2 = Be(), n2 = Re(), r2 = He();
  function i2(e4) {
    var t3 = `https://react.dev/errors/` + e4;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n3 = 2; n3 < arguments.length; n3++) t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
    }
    return `Minified React error #` + e4 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function a2(e4) {
    return !(!e4 || e4.nodeType !== 1 && e4.nodeType !== 9 && e4.nodeType !== 11);
  }
  function o2(e4) {
    var t3 = e4, n3 = e4;
    if (e4.alternate) for (; t3.return; ) t3 = t3.return;
    else {
      e4 = t3;
      do
        t3 = e4, t3.flags & 4098 && (n3 = t3.return), e4 = t3.return;
      while (e4);
    }
    return t3.tag === 3 ? n3 : null;
  }
  function s2(e4) {
    if (e4.tag === 13) {
      var t3 = e4.memoizedState;
      if (t3 === null && (e4 = e4.alternate, e4 !== null && (t3 = e4.memoizedState)), t3 !== null) return t3.dehydrated;
    }
    return null;
  }
  function c2(e4) {
    if (e4.tag === 31) {
      var t3 = e4.memoizedState;
      if (t3 === null && (e4 = e4.alternate, e4 !== null && (t3 = e4.memoizedState)), t3 !== null) return t3.dehydrated;
    }
    return null;
  }
  function l2(e4) {
    if (o2(e4) !== e4) throw Error(i2(188));
  }
  function u2(e4) {
    var t3 = e4.alternate;
    if (!t3) {
      if (t3 = o2(e4), t3 === null) throw Error(i2(188));
      return t3 === e4 ? e4 : null;
    }
    for (var n3 = e4, r3 = t3; ; ) {
      var a3 = n3.return;
      if (a3 === null) break;
      var s3 = a3.alternate;
      if (s3 === null) {
        if (r3 = a3.return, r3 !== null) {
          n3 = r3;
          continue;
        }
        break;
      }
      if (a3.child === s3.child) {
        for (s3 = a3.child; s3; ) {
          if (s3 === n3) return l2(a3), e4;
          if (s3 === r3) return l2(a3), t3;
          s3 = s3.sibling;
        }
        throw Error(i2(188));
      }
      if (n3.return !== r3.return) n3 = a3, r3 = s3;
      else {
        for (var c3 = false, u3 = a3.child; u3; ) {
          if (u3 === n3) {
            c3 = true, n3 = a3, r3 = s3;
            break;
          }
          if (u3 === r3) {
            c3 = true, r3 = a3, n3 = s3;
            break;
          }
          u3 = u3.sibling;
        }
        if (!c3) {
          for (u3 = s3.child; u3; ) {
            if (u3 === n3) {
              c3 = true, n3 = s3, r3 = a3;
              break;
            }
            if (u3 === r3) {
              c3 = true, r3 = s3, n3 = a3;
              break;
            }
            u3 = u3.sibling;
          }
          if (!c3) throw Error(i2(189));
        }
      }
      if (n3.alternate !== r3) throw Error(i2(190));
    }
    if (n3.tag !== 3) throw Error(i2(188));
    return n3.stateNode.current === n3 ? e4 : t3;
  }
  function d2(e4) {
    var t3 = e4.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e4;
    for (e4 = e4.child; e4 !== null; ) {
      if (t3 = d2(e4), t3 !== null) return t3;
      e4 = e4.sibling;
    }
    return null;
  }
  var f2 = Object.assign, p2 = Symbol.for(`react.element`), m2 = Symbol.for(`react.transitional.element`), h2 = Symbol.for(`react.portal`), g2 = Symbol.for(`react.fragment`), _2 = Symbol.for(`react.strict_mode`), v2 = Symbol.for(`react.profiler`), y2 = Symbol.for(`react.consumer`), b2 = Symbol.for(`react.context`), x2 = Symbol.for(`react.forward_ref`), S2 = Symbol.for(`react.suspense`), C2 = Symbol.for(`react.suspense_list`), w2 = Symbol.for(`react.memo`), T2 = Symbol.for(`react.lazy`), E2 = Symbol.for(`react.activity`), D2 = Symbol.for(`react.memo_cache_sentinel`), O2 = Symbol.iterator;
  function k2(e4) {
    return typeof e4 != `object` || !e4 ? null : (e4 = O2 && e4[O2] || e4[`@@iterator`], typeof e4 == `function` ? e4 : null);
  }
  var A2 = Symbol.for(`react.client.reference`);
  function j2(e4) {
    if (e4 == null) return null;
    if (typeof e4 == `function`) return e4.$$typeof === A2 ? null : e4.displayName || e4.name || null;
    if (typeof e4 == `string`) return e4;
    switch (e4) {
      case g2:
        return `Fragment`;
      case v2:
        return `Profiler`;
      case _2:
        return `StrictMode`;
      case S2:
        return `Suspense`;
      case C2:
        return `SuspenseList`;
      case E2:
        return `Activity`;
    }
    if (typeof e4 == `object`) switch (e4.$$typeof) {
      case h2:
        return `Portal`;
      case b2:
        return e4.displayName || `Context`;
      case y2:
        return (e4._context.displayName || `Context`) + `.Consumer`;
      case x2:
        var t3 = e4.render;
        return e4 = e4.displayName, e4 || (e4 = (e4 = t3.displayName || t3.name || ``, e4 === `` ? `ForwardRef` : `ForwardRef(` + e4 + `)`)), e4;
      case w2:
        return t3 = e4.displayName || null, t3 === null ? j2(e4.type) || `Memo` : t3;
      case T2:
        t3 = e4._payload, e4 = e4._init;
        try {
          return j2(e4(t3));
        } catch {
        }
    }
    return null;
  }
  var M2 = Array.isArray, N2 = n2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P2 = r2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F2 = { pending: false, data: null, method: null, action: null }, I2 = [], ee2 = -1;
  function L2(e4) {
    return { current: e4 };
  }
  function R2(e4) {
    0 > ee2 || (e4.current = I2[ee2], I2[ee2] = null, ee2--);
  }
  function z2(e4, t3) {
    ee2++, I2[ee2] = e4.current, e4.current = t3;
  }
  var B2 = L2(null), te2 = L2(null), V2 = L2(null), ne2 = L2(null);
  function H2(e4, t3) {
    switch (z2(V2, t3), z2(te2, e4), z2(B2, null), t3.nodeType) {
      case 9:
      case 11:
        e4 = (e4 = t3.documentElement) && (e4 = e4.namespaceURI) ? Vd(e4) : 0;
        break;
      default:
        if (e4 = t3.tagName, t3 = t3.namespaceURI) t3 = Vd(t3), e4 = Hd(t3, e4);
        else switch (e4) {
          case `svg`:
            e4 = 1;
            break;
          case `math`:
            e4 = 2;
            break;
          default:
            e4 = 0;
        }
    }
    R2(B2), z2(B2, e4);
  }
  function re2() {
    R2(B2), R2(te2), R2(V2);
  }
  function ie2(e4) {
    e4.memoizedState !== null && z2(ne2, e4);
    var t3 = B2.current, n3 = Hd(t3, e4.type);
    t3 !== n3 && (z2(te2, e4), z2(B2, n3));
  }
  function U2(e4) {
    te2.current === e4 && (R2(B2), R2(te2)), ne2.current === e4 && (R2(ne2), Qf._currentValue = F2);
  }
  var ae2, oe2;
  function se2(e4) {
    if (ae2 === void 0) try {
      throw Error();
    } catch (e5) {
      var t3 = e5.stack.trim().match(/\n( *(at )?)/);
      ae2 = t3 && t3[1] || ``, oe2 = -1 < e5.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e5.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
    }
    return `
` + ae2 + e4 + oe2;
  }
  var ce2 = false;
  function le2(e4, t3) {
    if (!e4 || ce2) return ``;
    ce2 = true;
    var n3 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r3 = { DetermineComponentFrameRoot: function() {
        try {
          if (t3) {
            var n4 = function() {
              throw Error();
            };
            if (Object.defineProperty(n4.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == `object` && Reflect.construct) {
              try {
                Reflect.construct(n4, []);
              } catch (e5) {
                var r4 = e5;
              }
              Reflect.construct(e4, [], n4);
            } else {
              try {
                n4.call();
              } catch (e5) {
                r4 = e5;
              }
              e4.call(n4.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (e5) {
              r4 = e5;
            }
            (n4 = e4()) && typeof n4.catch == `function` && n4.catch(function() {
            });
          }
        } catch (e5) {
          if (e5 && r4 && typeof e5.stack == `string`) return [e5.stack, r4.stack];
        }
        return [null, null];
      } };
      r3.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
      var i3 = Object.getOwnPropertyDescriptor(r3.DetermineComponentFrameRoot, `name`);
      i3 && i3.configurable && Object.defineProperty(r3.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
      var a3 = r3.DetermineComponentFrameRoot(), o3 = a3[0], s3 = a3[1];
      if (o3 && s3) {
        var c3 = o3.split(`
`), l3 = s3.split(`
`);
        for (i3 = r3 = 0; r3 < c3.length && !c3[r3].includes(`DetermineComponentFrameRoot`); ) r3++;
        for (; i3 < l3.length && !l3[i3].includes(`DetermineComponentFrameRoot`); ) i3++;
        if (r3 === c3.length || i3 === l3.length) for (r3 = c3.length - 1, i3 = l3.length - 1; 1 <= r3 && 0 <= i3 && c3[r3] !== l3[i3]; ) i3--;
        for (; 1 <= r3 && 0 <= i3; r3--, i3--) if (c3[r3] !== l3[i3]) {
          if (r3 !== 1 || i3 !== 1) do
            if (r3--, i3--, 0 > i3 || c3[r3] !== l3[i3]) {
              var u3 = `
` + c3[r3].replace(` at new `, ` at `);
              return e4.displayName && u3.includes(`<anonymous>`) && (u3 = u3.replace(`<anonymous>`, e4.displayName)), u3;
            }
          while (1 <= r3 && 0 <= i3);
          break;
        }
      }
    } finally {
      ce2 = false, Error.prepareStackTrace = n3;
    }
    return (n3 = e4 ? e4.displayName || e4.name : ``) ? se2(n3) : ``;
  }
  function ue2(e4, t3) {
    switch (e4.tag) {
      case 26:
      case 27:
      case 5:
        return se2(e4.type);
      case 16:
        return se2(`Lazy`);
      case 13:
        return e4.child !== t3 && t3 !== null ? se2(`Suspense Fallback`) : se2(`Suspense`);
      case 19:
        return se2(`SuspenseList`);
      case 0:
      case 15:
        return le2(e4.type, false);
      case 11:
        return le2(e4.type.render, false);
      case 1:
        return le2(e4.type, true);
      case 31:
        return se2(`Activity`);
      default:
        return ``;
    }
  }
  function de2(e4) {
    try {
      var t3 = ``, n3 = null;
      do
        t3 += ue2(e4, n3), n3 = e4, e4 = e4.return;
      while (e4);
      return t3;
    } catch (e5) {
      return `
Error generating stack: ` + e5.message + `
` + e5.stack;
    }
  }
  var fe2 = Object.prototype.hasOwnProperty, pe2 = t2.unstable_scheduleCallback, me2 = t2.unstable_cancelCallback, W2 = t2.unstable_shouldYield, he2 = t2.unstable_requestPaint, ge2 = t2.unstable_now, _e2 = t2.unstable_getCurrentPriorityLevel, ve2 = t2.unstable_ImmediatePriority, ye2 = t2.unstable_UserBlockingPriority, be2 = t2.unstable_NormalPriority, xe2 = t2.unstable_LowPriority, Se2 = t2.unstable_IdlePriority, Ce2 = t2.log, we2 = t2.unstable_setDisableYieldValue, Te2 = null, Ee2 = null;
  function De2(e4) {
    if (typeof Ce2 == `function` && we2(e4), Ee2 && typeof Ee2.setStrictMode == `function`) try {
      Ee2.setStrictMode(Te2, e4);
    } catch {
    }
  }
  var Oe2 = Math.clz32 ? Math.clz32 : je2, ke2 = Math.log, Ae2 = Math.LN2;
  function je2(e4) {
    return e4 >>>= 0, e4 === 0 ? 32 : 31 - (ke2(e4) / Ae2 | 0) | 0;
  }
  var Me2 = 256, Ne2 = 262144, G2 = 4194304;
  function K2(e4) {
    var t3 = e4 & 42;
    if (t3 !== 0) return t3;
    switch (e4 & -e4) {
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
        return e4 & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e4 & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e4 & 62914560;
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
        return e4;
    }
  }
  function Pe2(e4, t3, n3) {
    var r3 = e4.pendingLanes;
    if (r3 === 0) return 0;
    var i3 = 0, a3 = e4.suspendedLanes, o3 = e4.pingedLanes;
    e4 = e4.warmLanes;
    var s3 = r3 & 134217727;
    return s3 === 0 ? (s3 = r3 & ~a3, s3 === 0 ? o3 === 0 ? n3 || (n3 = r3 & ~e4, n3 !== 0 && (i3 = K2(n3))) : i3 = K2(o3) : i3 = K2(s3)) : (r3 = s3 & ~a3, r3 === 0 ? (o3 &= s3, o3 === 0 ? n3 || (n3 = s3 & ~e4, n3 !== 0 && (i3 = K2(n3))) : i3 = K2(o3)) : i3 = K2(r3)), i3 === 0 ? 0 : t3 !== 0 && t3 !== i3 && (t3 & a3) === 0 && (a3 = i3 & -i3, n3 = t3 & -t3, a3 >= n3 || a3 === 32 && n3 & 4194048) ? t3 : i3;
  }
  function Fe2(e4, t3) {
    return (e4.pendingLanes & ~(e4.suspendedLanes & ~e4.pingedLanes) & t3) === 0;
  }
  function Ie2(e4, t3) {
    switch (e4) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t3 + 250;
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
        return t3 + 5e3;
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
  function q2() {
    var e4 = G2;
    return G2 <<= 1, !(G2 & 62914560) && (G2 = 4194304), e4;
  }
  function Le2(e4) {
    for (var t3 = [], n3 = 0; 31 > n3; n3++) t3.push(e4);
    return t3;
  }
  function ze2(e4, t3) {
    e4.pendingLanes |= t3, t3 !== 268435456 && (e4.suspendedLanes = 0, e4.pingedLanes = 0, e4.warmLanes = 0);
  }
  function Ve2(e4, t3, n3, r3, i3, a3) {
    var o3 = e4.pendingLanes;
    e4.pendingLanes = n3, e4.suspendedLanes = 0, e4.pingedLanes = 0, e4.warmLanes = 0, e4.expiredLanes &= n3, e4.entangledLanes &= n3, e4.errorRecoveryDisabledLanes &= n3, e4.shellSuspendCounter = 0;
    var s3 = e4.entanglements, c3 = e4.expirationTimes, l3 = e4.hiddenUpdates;
    for (n3 = o3 & ~n3; 0 < n3; ) {
      var u3 = 31 - Oe2(n3), d3 = 1 << u3;
      s3[u3] = 0, c3[u3] = -1;
      var f3 = l3[u3];
      if (f3 !== null) for (l3[u3] = null, u3 = 0; u3 < f3.length; u3++) {
        var p3 = f3[u3];
        p3 !== null && (p3.lane &= -536870913);
      }
      n3 &= ~d3;
    }
    r3 !== 0 && Ue2(e4, r3, 0), a3 !== 0 && i3 === 0 && e4.tag !== 0 && (e4.suspendedLanes |= a3 & ~(o3 & ~t3));
  }
  function Ue2(e4, t3, n3) {
    e4.pendingLanes |= t3, e4.suspendedLanes &= ~t3;
    var r3 = 31 - Oe2(t3);
    e4.entangledLanes |= t3, e4.entanglements[r3] = e4.entanglements[r3] | 1073741824 | n3 & 261930;
  }
  function We2(e4, t3) {
    var n3 = e4.entangledLanes |= t3;
    for (e4 = e4.entanglements; n3; ) {
      var r3 = 31 - Oe2(n3), i3 = 1 << r3;
      i3 & t3 | e4[r3] & t3 && (e4[r3] |= t3), n3 &= ~i3;
    }
  }
  function J2(e4, t3) {
    var n3 = t3 & -t3;
    return n3 = n3 & 42 ? 1 : Ge2(n3), (n3 & (e4.suspendedLanes | t3)) === 0 ? n3 : 0;
  }
  function Ge2(e4) {
    switch (e4) {
      case 2:
        e4 = 1;
        break;
      case 8:
        e4 = 4;
        break;
      case 32:
        e4 = 16;
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
        e4 = 128;
        break;
      case 268435456:
        e4 = 134217728;
        break;
      default:
        e4 = 0;
    }
    return e4;
  }
  function Ke2(e4) {
    return e4 &= -e4, 2 < e4 ? 8 < e4 ? e4 & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function qe2() {
    var e4 = P2.p;
    return e4 === 0 ? (e4 = window.event, e4 === void 0 ? 32 : mp(e4.type)) : e4;
  }
  function Je2(e4, t3) {
    var n3 = P2.p;
    try {
      return P2.p = e4, t3();
    } finally {
      P2.p = n3;
    }
  }
  var Ye2 = Math.random().toString(36).slice(2), Xe2 = `__reactFiber$` + Ye2, Ze2 = `__reactProps$` + Ye2, Qe2 = `__reactContainer$` + Ye2, $e2 = `__reactEvents$` + Ye2, et2 = `__reactListeners$` + Ye2, tt2 = `__reactHandles$` + Ye2, nt2 = `__reactResources$` + Ye2, rt2 = `__reactMarker$` + Ye2;
  function it2(e4) {
    delete e4[Xe2], delete e4[Ze2], delete e4[$e2], delete e4[et2], delete e4[tt2];
  }
  function at2(e4) {
    var t3 = e4[Xe2];
    if (t3) return t3;
    for (var n3 = e4.parentNode; n3; ) {
      if (t3 = n3[Qe2] || n3[Xe2]) {
        if (n3 = t3.alternate, t3.child !== null || n3 !== null && n3.child !== null) for (e4 = df(e4); e4 !== null; ) {
          if (n3 = e4[Xe2]) return n3;
          e4 = df(e4);
        }
        return t3;
      }
      e4 = n3, n3 = e4.parentNode;
    }
    return null;
  }
  function ot2(e4) {
    if (e4 = e4[Xe2] || e4[Qe2]) {
      var t3 = e4.tag;
      if (t3 === 5 || t3 === 6 || t3 === 13 || t3 === 31 || t3 === 26 || t3 === 27 || t3 === 3) return e4;
    }
    return null;
  }
  function st2(e4) {
    var t3 = e4.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e4.stateNode;
    throw Error(i2(33));
  }
  function ct2(e4) {
    var t3 = e4[nt2];
    return t3 || (t3 = e4[nt2] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t3;
  }
  function lt2(e4) {
    e4[rt2] = true;
  }
  var ut2 = /* @__PURE__ */ new Set(), dt2 = {};
  function ft2(e4, t3) {
    pt2(e4, t3), pt2(e4 + `Capture`, t3);
  }
  function pt2(e4, t3) {
    for (dt2[e4] = t3, e4 = 0; e4 < t3.length; e4++) ut2.add(t3[e4]);
  }
  var mt2 = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), ht2 = {}, gt2 = {};
  function _t2(e4) {
    return fe2.call(gt2, e4) ? true : fe2.call(ht2, e4) ? false : mt2.test(e4) ? gt2[e4] = true : (ht2[e4] = true, false);
  }
  function vt2(e4, t3, n3) {
    if (_t2(t3)) {
      if (n3 === null) e4.removeAttribute(t3);
      else {
        switch (typeof n3) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e4.removeAttribute(t3);
            return;
          case `boolean`:
            var r3 = t3.toLowerCase().slice(0, 5);
            if (r3 !== `data-` && r3 !== `aria-`) {
              e4.removeAttribute(t3);
              return;
            }
        }
        e4.setAttribute(t3, `` + n3);
      }
    }
  }
  function yt2(e4, t3, n3) {
    if (n3 === null) e4.removeAttribute(t3);
    else {
      switch (typeof n3) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e4.removeAttribute(t3);
          return;
      }
      e4.setAttribute(t3, `` + n3);
    }
  }
  function bt2(e4, t3, n3, r3) {
    if (r3 === null) e4.removeAttribute(n3);
    else {
      switch (typeof r3) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e4.removeAttribute(n3);
          return;
      }
      e4.setAttributeNS(t3, n3, `` + r3);
    }
  }
  function xt2(e4) {
    switch (typeof e4) {
      case `bigint`:
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e4;
      case `object`:
        return e4;
      default:
        return ``;
    }
  }
  function St2(e4) {
    var t3 = e4.type;
    return (e4 = e4.nodeName) && e4.toLowerCase() === `input` && (t3 === `checkbox` || t3 === `radio`);
  }
  function Ct2(e4, t3, n3) {
    var r3 = Object.getOwnPropertyDescriptor(e4.constructor.prototype, t3);
    if (!e4.hasOwnProperty(t3) && r3 !== void 0 && typeof r3.get == `function` && typeof r3.set == `function`) {
      var i3 = r3.get, a3 = r3.set;
      return Object.defineProperty(e4, t3, { configurable: true, get: function() {
        return i3.call(this);
      }, set: function(e5) {
        n3 = `` + e5, a3.call(this, e5);
      } }), Object.defineProperty(e4, t3, { enumerable: r3.enumerable }), { getValue: function() {
        return n3;
      }, setValue: function(e5) {
        n3 = `` + e5;
      }, stopTracking: function() {
        e4._valueTracker = null, delete e4[t3];
      } };
    }
  }
  function wt2(e4) {
    if (!e4._valueTracker) {
      var t3 = St2(e4) ? `checked` : `value`;
      e4._valueTracker = Ct2(e4, t3, `` + e4[t3]);
    }
  }
  function Tt2(e4) {
    if (!e4) return false;
    var t3 = e4._valueTracker;
    if (!t3) return true;
    var n3 = t3.getValue(), r3 = ``;
    return e4 && (r3 = St2(e4) ? e4.checked ? `true` : `false` : e4.value), e4 = r3, e4 !== n3 && (t3.setValue(e4), true);
  }
  function Et2(e4) {
    if (e4 || (e4 = typeof document < `u` ? document : void 0), e4 === void 0) return null;
    try {
      return e4.activeElement || e4.body;
    } catch {
      return e4.body;
    }
  }
  var Dt2 = /[\n"\\]/g;
  function Ot2(e4) {
    return e4.replace(Dt2, function(e5) {
      return `\\` + e5.charCodeAt(0).toString(16) + ` `;
    });
  }
  function kt2(e4, t3, n3, r3, i3, a3, o3, s3) {
    e4.name = ``, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` ? e4.type = o3 : e4.removeAttribute(`type`), t3 == null ? o3 !== `submit` && o3 !== `reset` || e4.removeAttribute(`value`) : o3 === `number` ? (t3 === 0 && e4.value === `` || e4.value != t3) && (e4.value = `` + xt2(t3)) : e4.value !== `` + xt2(t3) && (e4.value = `` + xt2(t3)), t3 == null ? n3 == null ? r3 != null && e4.removeAttribute(`value`) : jt2(e4, o3, xt2(n3)) : jt2(e4, o3, xt2(t3)), i3 == null && a3 != null && (e4.defaultChecked = !!a3), i3 != null && (e4.checked = i3 && typeof i3 != `function` && typeof i3 != `symbol`), s3 != null && typeof s3 != `function` && typeof s3 != `symbol` && typeof s3 != `boolean` ? e4.name = `` + xt2(s3) : e4.removeAttribute(`name`);
  }
  function At2(e4, t3, n3, r3, i3, a3, o3, s3) {
    if (a3 != null && typeof a3 != `function` && typeof a3 != `symbol` && typeof a3 != `boolean` && (e4.type = a3), t3 != null || n3 != null) {
      if (!(a3 !== `submit` && a3 !== `reset` || t3 != null)) {
        wt2(e4);
        return;
      }
      n3 = n3 == null ? `` : `` + xt2(n3), t3 = t3 == null ? n3 : `` + xt2(t3), s3 || t3 === e4.value || (e4.value = t3), e4.defaultValue = t3;
    }
    r3 ?? (r3 = i3), r3 = typeof r3 != `function` && typeof r3 != `symbol` && !!r3, e4.checked = s3 ? e4.checked : !!r3, e4.defaultChecked = !!r3, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` && (e4.name = o3), wt2(e4);
  }
  function jt2(e4, t3, n3) {
    t3 === `number` && Et2(e4.ownerDocument) === e4 || e4.defaultValue === `` + n3 || (e4.defaultValue = `` + n3);
  }
  function Mt2(e4, t3, n3, r3) {
    if (e4 = e4.options, t3) {
      t3 = {};
      for (var i3 = 0; i3 < n3.length; i3++) t3[`$` + n3[i3]] = true;
      for (n3 = 0; n3 < e4.length; n3++) i3 = t3.hasOwnProperty(`$` + e4[n3].value), e4[n3].selected !== i3 && (e4[n3].selected = i3), i3 && r3 && (e4[n3].defaultSelected = true);
    } else {
      for (n3 = `` + xt2(n3), t3 = null, i3 = 0; i3 < e4.length; i3++) {
        if (e4[i3].value === n3) {
          e4[i3].selected = true, r3 && (e4[i3].defaultSelected = true);
          return;
        }
        t3 !== null || e4[i3].disabled || (t3 = e4[i3]);
      }
      t3 !== null && (t3.selected = true);
    }
  }
  function Nt2(e4, t3, n3) {
    t3 != null && (t3 = `` + xt2(t3), t3 !== e4.value && (e4.value = t3), n3 == null) ? e4.defaultValue !== t3 && (e4.defaultValue = t3) : e4.defaultValue = n3 == null ? `` : `` + xt2(n3);
  }
  function Pt2(e4, t3, n3, r3) {
    if (t3 == null) {
      if (r3 != null) {
        if (n3 != null) throw Error(i2(92));
        if (M2(r3)) {
          if (1 < r3.length) throw Error(i2(93));
          r3 = r3[0];
        }
        n3 = r3;
      }
      n3 ?? (n3 = ``), t3 = n3;
    }
    n3 = xt2(t3), e4.defaultValue = n3, r3 = e4.textContent, r3 === n3 && r3 !== `` && r3 !== null && (e4.value = r3), wt2(e4);
  }
  function Ft2(e4, t3) {
    if (t3) {
      var n3 = e4.firstChild;
      if (n3 && n3 === e4.lastChild && n3.nodeType === 3) {
        n3.nodeValue = t3;
        return;
      }
    }
    e4.textContent = t3;
  }
  var It2 = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
  function Lt2(e4, t3, n3) {
    var r3 = t3.indexOf(`--`) === 0;
    n3 == null || typeof n3 == `boolean` || n3 === `` ? r3 ? e4.setProperty(t3, ``) : t3 === `float` ? e4.cssFloat = `` : e4[t3] = `` : r3 ? e4.setProperty(t3, n3) : typeof n3 != `number` || n3 === 0 || It2.has(t3) ? t3 === `float` ? e4.cssFloat = n3 : e4[t3] = (`` + n3).trim() : e4[t3] = n3 + `px`;
  }
  function Rt2(e4, t3, n3) {
    if (t3 != null && typeof t3 != `object`) throw Error(i2(62));
    if (e4 = e4.style, n3 != null) {
      for (var r3 in n3) !n3.hasOwnProperty(r3) || t3 != null && t3.hasOwnProperty(r3) || (r3.indexOf(`--`) === 0 ? e4.setProperty(r3, ``) : r3 === `float` ? e4.cssFloat = `` : e4[r3] = ``);
      for (var a3 in t3) r3 = t3[a3], t3.hasOwnProperty(a3) && n3[a3] !== r3 && Lt2(e4, a3, r3);
    } else for (var o3 in t3) t3.hasOwnProperty(o3) && Lt2(e4, o3, t3[o3]);
  }
  function zt2(e4) {
    if (e4.indexOf(`-`) === -1) return false;
    switch (e4) {
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return false;
      default:
        return true;
    }
  }
  var Bt2 = /* @__PURE__ */ new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), Vt2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ht2(e4) {
    return Vt2.test(`` + e4) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e4;
  }
  function Ut2() {
  }
  var Wt2 = null;
  function Gt2(e4) {
    return e4 = e4.target || e4.srcElement || window, e4.correspondingUseElement && (e4 = e4.correspondingUseElement), e4.nodeType === 3 ? e4.parentNode : e4;
  }
  var Kt2 = null, qt2 = null;
  function Jt2(e4) {
    var t3 = ot2(e4);
    if (t3 && (e4 = t3.stateNode)) {
      var n3 = e4[Ze2] || null;
      a: switch (e4 = t3.stateNode, t3.type) {
        case `input`:
          if (kt2(e4, n3.value, n3.defaultValue, n3.defaultValue, n3.checked, n3.defaultChecked, n3.type, n3.name), t3 = n3.name, n3.type === `radio` && t3 != null) {
            for (n3 = e4; n3.parentNode; ) n3 = n3.parentNode;
            for (n3 = n3.querySelectorAll(`input[name="` + Ot2(`` + t3) + `"][type="radio"]`), t3 = 0; t3 < n3.length; t3++) {
              var r3 = n3[t3];
              if (r3 !== e4 && r3.form === e4.form) {
                var a3 = r3[Ze2] || null;
                if (!a3) throw Error(i2(90));
                kt2(r3, a3.value, a3.defaultValue, a3.defaultValue, a3.checked, a3.defaultChecked, a3.type, a3.name);
              }
            }
            for (t3 = 0; t3 < n3.length; t3++) r3 = n3[t3], r3.form === e4.form && Tt2(r3);
          }
          break a;
        case `textarea`:
          Nt2(e4, n3.value, n3.defaultValue);
          break a;
        case `select`:
          t3 = n3.value, t3 != null && Mt2(e4, !!n3.multiple, t3, false);
      }
    }
  }
  var Yt2 = false;
  function Xt2(e4, t3, n3) {
    if (Yt2) return e4(t3, n3);
    Yt2 = true;
    try {
      return e4(t3);
    } finally {
      if (Yt2 = false, (Kt2 !== null || qt2 !== null) && (vu(), Kt2 && (t3 = Kt2, e4 = qt2, qt2 = Kt2 = null, Jt2(t3), e4))) for (t3 = 0; t3 < e4.length; t3++) Jt2(e4[t3]);
    }
  }
  function Zt2(e4, t3) {
    var n3 = e4.stateNode;
    if (n3 === null) return null;
    var r3 = n3[Ze2] || null;
    if (r3 === null) return null;
    n3 = r3[t3];
    a: switch (t3) {
      case `onClick`:
      case `onClickCapture`:
      case `onDoubleClick`:
      case `onDoubleClickCapture`:
      case `onMouseDown`:
      case `onMouseDownCapture`:
      case `onMouseMove`:
      case `onMouseMoveCapture`:
      case `onMouseUp`:
      case `onMouseUpCapture`:
      case `onMouseEnter`:
        (r3 = !r3.disabled) || (e4 = e4.type, r3 = e4 !== `button` && e4 !== `input` && e4 !== `select` && e4 !== `textarea`), e4 = !r3;
        break a;
      default:
        e4 = false;
    }
    if (e4) return null;
    if (n3 && typeof n3 != `function`) throw Error(i2(231, t3, typeof n3));
    return n3;
  }
  var Qt2 = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0, $t2 = false;
  if (Qt2) try {
    var en2 = {};
    Object.defineProperty(en2, "passive", { get: function() {
      $t2 = true;
    } }), window.addEventListener(`test`, en2, en2), window.removeEventListener(`test`, en2, en2);
  } catch {
    $t2 = false;
  }
  var tn2 = null, nn2 = null, rn2 = null;
  function an2() {
    if (rn2) return rn2;
    var e4, t3 = nn2, n3 = t3.length, r3, i3 = `value` in tn2 ? tn2.value : tn2.textContent, a3 = i3.length;
    for (e4 = 0; e4 < n3 && t3[e4] === i3[e4]; e4++) ;
    var o3 = n3 - e4;
    for (r3 = 1; r3 <= o3 && t3[n3 - r3] === i3[a3 - r3]; r3++) ;
    return rn2 = i3.slice(e4, 1 < r3 ? 1 - r3 : void 0);
  }
  function on2(e4) {
    var t3 = e4.keyCode;
    return `charCode` in e4 ? (e4 = e4.charCode, e4 === 0 && t3 === 13 && (e4 = 13)) : e4 = t3, e4 === 10 && (e4 = 13), 32 <= e4 || e4 === 13 ? e4 : 0;
  }
  function sn2() {
    return true;
  }
  function cn2() {
    return false;
  }
  function ln2(e4) {
    function t3(t4, n3, r3, i3, a3) {
      for (var o3 in this._reactName = t4, this._targetInst = r3, this.type = n3, this.nativeEvent = i3, this.target = a3, this.currentTarget = null, e4) e4.hasOwnProperty(o3) && (t4 = e4[o3], this[o3] = t4 ? t4(i3) : i3[o3]);
      return this.isDefaultPrevented = (i3.defaultPrevented == null ? false === i3.returnValue : i3.defaultPrevented) ? sn2 : cn2, this.isPropagationStopped = cn2, this;
    }
    return f2(t3.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e5 = this.nativeEvent;
      e5 && (e5.preventDefault ? e5.preventDefault() : typeof e5.returnValue != `unknown` && (e5.returnValue = false), this.isDefaultPrevented = sn2);
    }, stopPropagation: function() {
      var e5 = this.nativeEvent;
      e5 && (e5.stopPropagation ? e5.stopPropagation() : typeof e5.cancelBubble != `unknown` && (e5.cancelBubble = true), this.isPropagationStopped = sn2);
    }, persist: function() {
    }, isPersistent: sn2 }), t3;
  }
  var un2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e4) {
    return e4.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, dn2 = ln2(un2), fn2 = f2({}, un2, { view: 0, detail: 0 }), pn2 = ln2(fn2), mn2, hn2, gn2, _n2 = f2({}, fn2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: On2, button: 0, buttons: 0, relatedTarget: function(e4) {
    return e4.relatedTarget === void 0 ? e4.fromElement === e4.srcElement ? e4.toElement : e4.fromElement : e4.relatedTarget;
  }, movementX: function(e4) {
    return `movementX` in e4 ? e4.movementX : (e4 !== gn2 && (gn2 && e4.type === `mousemove` ? (mn2 = e4.screenX - gn2.screenX, hn2 = e4.screenY - gn2.screenY) : hn2 = mn2 = 0, gn2 = e4), mn2);
  }, movementY: function(e4) {
    return `movementY` in e4 ? e4.movementY : hn2;
  } }), vn2 = ln2(_n2), yn2 = ln2(f2({}, _n2, { dataTransfer: 0 })), bn2 = ln2(f2({}, fn2, { relatedTarget: 0 })), xn2 = ln2(f2({}, un2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), Sn2 = ln2(f2({}, un2, { clipboardData: function(e4) {
    return `clipboardData` in e4 ? e4.clipboardData : window.clipboardData;
  } })), Cn2 = ln2(f2({}, un2, { data: 0 })), wn2 = { Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified` }, Tn2 = { 8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta` }, En2 = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
  function Dn2(e4) {
    var t3 = this.nativeEvent;
    return t3.getModifierState ? t3.getModifierState(e4) : (e4 = En2[e4]) ? !!t3[e4] : false;
  }
  function On2() {
    return Dn2;
  }
  var kn2 = ln2(f2({}, fn2, { key: function(e4) {
    if (e4.key) {
      var t3 = wn2[e4.key] || e4.key;
      if (t3 !== `Unidentified`) return t3;
    }
    return e4.type === `keypress` ? (e4 = on2(e4), e4 === 13 ? `Enter` : String.fromCharCode(e4)) : e4.type === `keydown` || e4.type === `keyup` ? Tn2[e4.keyCode] || `Unidentified` : ``;
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: On2, charCode: function(e4) {
    return e4.type === `keypress` ? on2(e4) : 0;
  }, keyCode: function(e4) {
    return e4.type === `keydown` || e4.type === `keyup` ? e4.keyCode : 0;
  }, which: function(e4) {
    return e4.type === `keypress` ? on2(e4) : e4.type === `keydown` || e4.type === `keyup` ? e4.keyCode : 0;
  } })), An2 = ln2(f2({}, _n2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), jn2 = ln2(f2({}, fn2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: On2 })), Mn2 = ln2(f2({}, un2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Nn2 = ln2(f2({}, _n2, { deltaX: function(e4) {
    return `deltaX` in e4 ? e4.deltaX : `wheelDeltaX` in e4 ? -e4.wheelDeltaX : 0;
  }, deltaY: function(e4) {
    return `deltaY` in e4 ? e4.deltaY : `wheelDeltaY` in e4 ? -e4.wheelDeltaY : `wheelDelta` in e4 ? -e4.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 })), Pn2 = ln2(f2({}, un2, { newState: 0, oldState: 0 })), Fn2 = [9, 13, 27, 32], In2 = Qt2 && `CompositionEvent` in window, Ln2 = null;
  Qt2 && `documentMode` in document && (Ln2 = document.documentMode);
  var Rn2 = Qt2 && `TextEvent` in window && !Ln2, zn2 = Qt2 && (!In2 || Ln2 && 8 < Ln2 && 11 >= Ln2), Bn2 = ` `, Vn2 = false;
  function Hn2(e4, t3) {
    switch (e4) {
      case `keyup`:
        return Fn2.indexOf(t3.keyCode) !== -1;
      case `keydown`:
        return t3.keyCode !== 229;
      case `keypress`:
      case `mousedown`:
      case `focusout`:
        return true;
      default:
        return false;
    }
  }
  function Un2(e4) {
    return e4 = e4.detail, typeof e4 == `object` && `data` in e4 ? e4.data : null;
  }
  var Wn2 = false;
  function Gn2(e4, t3) {
    switch (e4) {
      case `compositionend`:
        return Un2(t3);
      case `keypress`:
        return t3.which === 32 ? (Vn2 = true, Bn2) : null;
      case `textInput`:
        return e4 = t3.data, e4 === Bn2 && Vn2 ? null : e4;
      default:
        return null;
    }
  }
  function Kn2(e4, t3) {
    if (Wn2) return e4 === `compositionend` || !In2 && Hn2(e4, t3) ? (e4 = an2(), rn2 = nn2 = tn2 = null, Wn2 = false, e4) : null;
    switch (e4) {
      case `paste`:
        return null;
      case `keypress`:
        if (!(t3.ctrlKey || t3.altKey || t3.metaKey) || t3.ctrlKey && t3.altKey) {
          if (t3.char && 1 < t3.char.length) return t3.char;
          if (t3.which) return String.fromCharCode(t3.which);
        }
        return null;
      case `compositionend`:
        return zn2 && t3.locale !== `ko` ? null : t3.data;
      default:
        return null;
    }
  }
  var qn2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Jn2(e4) {
    var t3 = e4 && e4.nodeName && e4.nodeName.toLowerCase();
    return t3 === `input` ? !!qn2[e4.type] : t3 === `textarea`;
  }
  function Yn2(e4, t3, n3, r3) {
    Kt2 ? qt2 ? qt2.push(r3) : qt2 = [r3] : Kt2 = r3, t3 = Ed(t3, `onChange`), 0 < t3.length && (n3 = new dn2(`onChange`, `change`, null, n3, r3), e4.push({ event: n3, listeners: t3 }));
  }
  var Xn2 = null, Zn2 = null;
  function Qn2(e4) {
    vd(e4, 0);
  }
  function $n2(e4) {
    if (Tt2(st2(e4))) return e4;
  }
  function er2(e4, t3) {
    if (e4 === `change`) return t3;
  }
  var tr2 = false;
  if (Qt2) {
    var nr2;
    if (Qt2) {
      var rr2 = `oninput` in document;
      if (!rr2) {
        var ir2 = document.createElement(`div`);
        ir2.setAttribute(`oninput`, `return;`), rr2 = typeof ir2.oninput == `function`;
      }
      nr2 = rr2;
    } else nr2 = false;
    tr2 = nr2 && (!document.documentMode || 9 < document.documentMode);
  }
  function ar2() {
    Xn2 && (Xn2.detachEvent(`onpropertychange`, or2), Zn2 = Xn2 = null);
  }
  function or2(e4) {
    if (e4.propertyName === `value` && $n2(Zn2)) {
      var t3 = [];
      Yn2(t3, Zn2, e4, Gt2(e4)), Xt2(Qn2, t3);
    }
  }
  function sr2(e4, t3, n3) {
    e4 === `focusin` ? (ar2(), Xn2 = t3, Zn2 = n3, Xn2.attachEvent(`onpropertychange`, or2)) : e4 === `focusout` && ar2();
  }
  function cr2(e4) {
    if (e4 === `selectionchange` || e4 === `keyup` || e4 === `keydown`) return $n2(Zn2);
  }
  function lr2(e4, t3) {
    if (e4 === `click`) return $n2(t3);
  }
  function ur2(e4, t3) {
    if (e4 === `input` || e4 === `change`) return $n2(t3);
  }
  function dr2(e4, t3) {
    return e4 === t3 && (e4 !== 0 || 1 / e4 == 1 / t3) || e4 !== e4 && t3 !== t3;
  }
  var fr2 = typeof Object.is == `function` ? Object.is : dr2;
  function pr2(e4, t3) {
    if (fr2(e4, t3)) return true;
    if (typeof e4 != `object` || !e4 || typeof t3 != `object` || !t3) return false;
    var n3 = Object.keys(e4), r3 = Object.keys(t3);
    if (n3.length !== r3.length) return false;
    for (r3 = 0; r3 < n3.length; r3++) {
      var i3 = n3[r3];
      if (!fe2.call(t3, i3) || !fr2(e4[i3], t3[i3])) return false;
    }
    return true;
  }
  function mr2(e4) {
    for (; e4 && e4.firstChild; ) e4 = e4.firstChild;
    return e4;
  }
  function hr2(e4, t3) {
    var n3 = mr2(e4);
    e4 = 0;
    for (var r3; n3; ) {
      if (n3.nodeType === 3) {
        if (r3 = e4 + n3.textContent.length, e4 <= t3 && r3 >= t3) return { node: n3, offset: t3 - e4 };
        e4 = r3;
      }
      a: {
        for (; n3; ) {
          if (n3.nextSibling) {
            n3 = n3.nextSibling;
            break a;
          }
          n3 = n3.parentNode;
        }
        n3 = void 0;
      }
      n3 = mr2(n3);
    }
  }
  function gr2(e4, t3) {
    return e4 && t3 ? e4 === t3 ? true : e4 && e4.nodeType === 3 ? false : t3 && t3.nodeType === 3 ? gr2(e4, t3.parentNode) : `contains` in e4 ? e4.contains(t3) : e4.compareDocumentPosition ? !!(e4.compareDocumentPosition(t3) & 16) : false : false;
  }
  function _r2(e4) {
    e4 = e4 != null && e4.ownerDocument != null && e4.ownerDocument.defaultView != null ? e4.ownerDocument.defaultView : window;
    for (var t3 = Et2(e4.document); t3 instanceof e4.HTMLIFrameElement; ) {
      try {
        var n3 = typeof t3.contentWindow.location.href == `string`;
      } catch {
        n3 = false;
      }
      if (n3) e4 = t3.contentWindow;
      else break;
      t3 = Et2(e4.document);
    }
    return t3;
  }
  function vr2(e4) {
    var t3 = e4 && e4.nodeName && e4.nodeName.toLowerCase();
    return t3 && (t3 === `input` && (e4.type === `text` || e4.type === `search` || e4.type === `tel` || e4.type === `url` || e4.type === `password`) || t3 === `textarea` || e4.contentEditable === `true`);
  }
  var yr2 = Qt2 && `documentMode` in document && 11 >= document.documentMode, br2 = null, xr2 = null, Sr2 = null, Cr2 = false;
  function wr2(e4, t3, n3) {
    var r3 = n3.window === n3 ? n3.document : n3.nodeType === 9 ? n3 : n3.ownerDocument;
    Cr2 || br2 == null || br2 !== Et2(r3) || (r3 = br2, `selectionStart` in r3 && vr2(r3) ? r3 = { start: r3.selectionStart, end: r3.selectionEnd } : (r3 = (r3.ownerDocument && r3.ownerDocument.defaultView || window).getSelection(), r3 = { anchorNode: r3.anchorNode, anchorOffset: r3.anchorOffset, focusNode: r3.focusNode, focusOffset: r3.focusOffset }), Sr2 && pr2(Sr2, r3) || (Sr2 = r3, r3 = Ed(xr2, `onSelect`), 0 < r3.length && (t3 = new dn2(`onSelect`, `select`, null, t3, n3), e4.push({ event: t3, listeners: r3 }), t3.target = br2)));
  }
  function Tr2(e4, t3) {
    var n3 = {};
    return n3[e4.toLowerCase()] = t3.toLowerCase(), n3[`Webkit` + e4] = `webkit` + t3, n3[`Moz` + e4] = `moz` + t3, n3;
  }
  var Er2 = { animationend: Tr2(`Animation`, `AnimationEnd`), animationiteration: Tr2(`Animation`, `AnimationIteration`), animationstart: Tr2(`Animation`, `AnimationStart`), transitionrun: Tr2(`Transition`, `TransitionRun`), transitionstart: Tr2(`Transition`, `TransitionStart`), transitioncancel: Tr2(`Transition`, `TransitionCancel`), transitionend: Tr2(`Transition`, `TransitionEnd`) }, Dr2 = {}, Or2 = {};
  Qt2 && (Or2 = document.createElement(`div`).style, `AnimationEvent` in window || (delete Er2.animationend.animation, delete Er2.animationiteration.animation, delete Er2.animationstart.animation), `TransitionEvent` in window || delete Er2.transitionend.transition);
  function kr2(e4) {
    if (Dr2[e4]) return Dr2[e4];
    if (!Er2[e4]) return e4;
    var t3 = Er2[e4], n3;
    for (n3 in t3) if (t3.hasOwnProperty(n3) && n3 in Or2) return Dr2[e4] = t3[n3];
    return e4;
  }
  var Ar2 = kr2(`animationend`), jr2 = kr2(`animationiteration`), Mr2 = kr2(`animationstart`), Nr2 = kr2(`transitionrun`), Pr2 = kr2(`transitionstart`), Fr2 = kr2(`transitioncancel`), Ir2 = kr2(`transitionend`), Lr2 = /* @__PURE__ */ new Map(), Rr2 = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  Rr2.push(`scrollEnd`);
  function zr2(e4, t3) {
    Lr2.set(e4, t3), ft2(t3, [e4]);
  }
  var Br2 = typeof reportError == `function` ? reportError : function(e4) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e4 == `object` && e4 && typeof e4.message == `string` ? String(e4.message) : String(e4), error: e4 });
      if (!window.dispatchEvent(t3)) return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e4);
      return;
    }
    console.error(e4);
  }, Vr2 = [], Hr2 = 0, Ur2 = 0;
  function Wr2() {
    for (var e4 = Hr2, t3 = Ur2 = Hr2 = 0; t3 < e4; ) {
      var n3 = Vr2[t3];
      Vr2[t3++] = null;
      var r3 = Vr2[t3];
      Vr2[t3++] = null;
      var i3 = Vr2[t3];
      Vr2[t3++] = null;
      var a3 = Vr2[t3];
      if (Vr2[t3++] = null, r3 !== null && i3 !== null) {
        var o3 = r3.pending;
        o3 === null ? i3.next = i3 : (i3.next = o3.next, o3.next = i3), r3.pending = i3;
      }
      a3 !== 0 && Jr2(n3, i3, a3);
    }
  }
  function Gr2(e4, t3, n3, r3) {
    Vr2[Hr2++] = e4, Vr2[Hr2++] = t3, Vr2[Hr2++] = n3, Vr2[Hr2++] = r3, Ur2 |= r3, e4.lanes |= r3, e4 = e4.alternate, e4 !== null && (e4.lanes |= r3);
  }
  function Kr2(e4, t3, n3, r3) {
    return Gr2(e4, t3, n3, r3), Yr2(e4);
  }
  function qr2(e4, t3) {
    return Gr2(e4, null, null, t3), Yr2(e4);
  }
  function Jr2(e4, t3, n3) {
    e4.lanes |= n3;
    var r3 = e4.alternate;
    r3 !== null && (r3.lanes |= n3);
    for (var i3 = false, a3 = e4.return; a3 !== null; ) a3.childLanes |= n3, r3 = a3.alternate, r3 !== null && (r3.childLanes |= n3), a3.tag === 22 && (e4 = a3.stateNode, e4 === null || e4._visibility & 1 || (i3 = true)), e4 = a3, a3 = a3.return;
    return e4.tag === 3 ? (a3 = e4.stateNode, i3 && t3 !== null && (i3 = 31 - Oe2(n3), e4 = a3.hiddenUpdates, r3 = e4[i3], r3 === null ? e4[i3] = [t3] : r3.push(t3), t3.lane = n3 | 536870912), a3) : null;
  }
  function Yr2(e4) {
    if (50 < lu) throw lu = 0, uu = null, Error(i2(185));
    for (var t3 = e4.return; t3 !== null; ) e4 = t3, t3 = e4.return;
    return e4.tag === 3 ? e4.stateNode : null;
  }
  var Xr2 = {};
  function Zr2(e4, t3, n3, r3) {
    this.tag = e4, this.key = n3, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r3, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qr2(e4, t3, n3, r3) {
    return new Zr2(e4, t3, n3, r3);
  }
  function $r2(e4) {
    return e4 = e4.prototype, !(!e4 || !e4.isReactComponent);
  }
  function ei2(e4, t3) {
    var n3 = e4.alternate;
    return n3 === null ? (n3 = Qr2(e4.tag, t3, e4.key, e4.mode), n3.elementType = e4.elementType, n3.type = e4.type, n3.stateNode = e4.stateNode, n3.alternate = e4, e4.alternate = n3) : (n3.pendingProps = t3, n3.type = e4.type, n3.flags = 0, n3.subtreeFlags = 0, n3.deletions = null), n3.flags = e4.flags & 65011712, n3.childLanes = e4.childLanes, n3.lanes = e4.lanes, n3.child = e4.child, n3.memoizedProps = e4.memoizedProps, n3.memoizedState = e4.memoizedState, n3.updateQueue = e4.updateQueue, t3 = e4.dependencies, n3.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }, n3.sibling = e4.sibling, n3.index = e4.index, n3.ref = e4.ref, n3.refCleanup = e4.refCleanup, n3;
  }
  function ti2(e4, t3) {
    e4.flags &= 65011714;
    var n3 = e4.alternate;
    return n3 === null ? (e4.childLanes = 0, e4.lanes = t3, e4.child = null, e4.subtreeFlags = 0, e4.memoizedProps = null, e4.memoizedState = null, e4.updateQueue = null, e4.dependencies = null, e4.stateNode = null) : (e4.childLanes = n3.childLanes, e4.lanes = n3.lanes, e4.child = n3.child, e4.subtreeFlags = 0, e4.deletions = null, e4.memoizedProps = n3.memoizedProps, e4.memoizedState = n3.memoizedState, e4.updateQueue = n3.updateQueue, e4.type = n3.type, t3 = n3.dependencies, e4.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }), e4;
  }
  function ni2(e4, t3, n3, r3, a3, o3) {
    var s3 = 0;
    if (r3 = e4, typeof e4 == `function`) $r2(e4) && (s3 = 1);
    else if (typeof e4 == `string`) s3 = Uf(e4, n3, B2.current) ? 26 : e4 === `html` || e4 === `head` || e4 === `body` ? 27 : 5;
    else a: switch (e4) {
      case E2:
        return e4 = Qr2(31, n3, t3, a3), e4.elementType = E2, e4.lanes = o3, e4;
      case g2:
        return ri2(n3.children, a3, o3, t3);
      case _2:
        s3 = 8, a3 |= 24;
        break;
      case v2:
        return e4 = Qr2(12, n3, t3, a3 | 2), e4.elementType = v2, e4.lanes = o3, e4;
      case S2:
        return e4 = Qr2(13, n3, t3, a3), e4.elementType = S2, e4.lanes = o3, e4;
      case C2:
        return e4 = Qr2(19, n3, t3, a3), e4.elementType = C2, e4.lanes = o3, e4;
      default:
        if (typeof e4 == `object` && e4) switch (e4.$$typeof) {
          case b2:
            s3 = 10;
            break a;
          case y2:
            s3 = 9;
            break a;
          case x2:
            s3 = 11;
            break a;
          case w2:
            s3 = 14;
            break a;
          case T2:
            s3 = 16, r3 = null;
            break a;
        }
        s3 = 29, n3 = Error(i2(130, e4 === null ? `null` : typeof e4, ``)), r3 = null;
    }
    return t3 = Qr2(s3, n3, t3, a3), t3.elementType = e4, t3.type = r3, t3.lanes = o3, t3;
  }
  function ri2(e4, t3, n3, r3) {
    return e4 = Qr2(7, e4, r3, t3), e4.lanes = n3, e4;
  }
  function ii2(e4, t3, n3) {
    return e4 = Qr2(6, e4, null, t3), e4.lanes = n3, e4;
  }
  function ai2(e4) {
    var t3 = Qr2(18, null, null, 0);
    return t3.stateNode = e4, t3;
  }
  function oi2(e4, t3, n3) {
    return t3 = Qr2(4, e4.children === null ? [] : e4.children, e4.key, t3), t3.lanes = n3, t3.stateNode = { containerInfo: e4.containerInfo, pendingChildren: null, implementation: e4.implementation }, t3;
  }
  var si2 = /* @__PURE__ */ new WeakMap();
  function ci2(e4, t3) {
    if (typeof e4 == `object` && e4) {
      var n3 = si2.get(e4);
      return n3 === void 0 ? (t3 = { value: e4, source: t3, stack: de2(t3) }, si2.set(e4, t3), t3) : n3;
    }
    return { value: e4, source: t3, stack: de2(t3) };
  }
  var li2 = [], ui2 = 0, di2 = null, fi2 = 0, pi2 = [], mi2 = 0, hi2 = null, gi2 = 1, _i2 = ``;
  function vi2(e4, t3) {
    li2[ui2++] = fi2, li2[ui2++] = di2, di2 = e4, fi2 = t3;
  }
  function yi2(e4, t3, n3) {
    pi2[mi2++] = gi2, pi2[mi2++] = _i2, pi2[mi2++] = hi2, hi2 = e4;
    var r3 = gi2;
    e4 = _i2;
    var i3 = 32 - Oe2(r3) - 1;
    r3 &= ~(1 << i3), n3 += 1;
    var a3 = 32 - Oe2(t3) + i3;
    if (30 < a3) {
      var o3 = i3 - i3 % 5;
      a3 = (r3 & (1 << o3) - 1).toString(32), r3 >>= o3, i3 -= o3, gi2 = 1 << 32 - Oe2(t3) + i3 | n3 << i3 | r3, _i2 = a3 + e4;
    } else gi2 = 1 << a3 | n3 << i3 | r3, _i2 = e4;
  }
  function bi2(e4) {
    e4.return !== null && (vi2(e4, 1), yi2(e4, 1, 0));
  }
  function xi2(e4) {
    for (; e4 === di2; ) di2 = li2[--ui2], li2[ui2] = null, fi2 = li2[--ui2], li2[ui2] = null;
    for (; e4 === hi2; ) hi2 = pi2[--mi2], pi2[mi2] = null, _i2 = pi2[--mi2], pi2[mi2] = null, gi2 = pi2[--mi2], pi2[mi2] = null;
  }
  function Si2(e4, t3) {
    pi2[mi2++] = gi2, pi2[mi2++] = _i2, pi2[mi2++] = hi2, gi2 = t3.id, _i2 = t3.overflow, hi2 = e4;
  }
  var Ci2 = null, wi2 = null, Ti2 = false, Ei2 = null, Di2 = false, Oi2 = Error(i2(519));
  function ki2(e4) {
    throw Fi2(ci2(Error(i2(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e4)), Oi2;
  }
  function Ai2(e4) {
    var t3 = e4.stateNode, n3 = e4.type, r3 = e4.memoizedProps;
    switch (t3[Xe2] = e4, t3[Ze2] = r3, n3) {
      case `dialog`:
        yd(`cancel`, t3), yd(`close`, t3);
        break;
      case `iframe`:
      case `object`:
      case `embed`:
        yd(`load`, t3);
        break;
      case `video`:
      case `audio`:
        for (n3 = 0; n3 < gd.length; n3++) yd(gd[n3], t3);
        break;
      case `source`:
        yd(`error`, t3);
        break;
      case `img`:
      case `image`:
      case `link`:
        yd(`error`, t3), yd(`load`, t3);
        break;
      case `details`:
        yd(`toggle`, t3);
        break;
      case `input`:
        yd(`invalid`, t3), At2(t3, r3.value, r3.defaultValue, r3.checked, r3.defaultChecked, r3.type, r3.name, true);
        break;
      case `select`:
        yd(`invalid`, t3);
        break;
      case `textarea`:
        yd(`invalid`, t3), Pt2(t3, r3.value, r3.defaultValue, r3.children);
    }
    n3 = r3.children, typeof n3 != `string` && typeof n3 != `number` && typeof n3 != `bigint` || t3.textContent === `` + n3 || true === r3.suppressHydrationWarning || Md(t3.textContent, n3) ? (r3.popover != null && (yd(`beforetoggle`, t3), yd(`toggle`, t3)), r3.onScroll != null && yd(`scroll`, t3), r3.onScrollEnd != null && yd(`scrollend`, t3), r3.onClick != null && (t3.onclick = Ut2), t3 = true) : t3 = false, t3 || ki2(e4, true);
  }
  function ji2(e4) {
    for (Ci2 = e4.return; Ci2; ) switch (Ci2.tag) {
      case 5:
      case 31:
      case 13:
        Di2 = false;
        return;
      case 27:
      case 3:
        Di2 = true;
        return;
      default:
        Ci2 = Ci2.return;
    }
  }
  function Mi2(e4) {
    if (e4 !== Ci2) return false;
    if (!Ti2) return ji2(e4), Ti2 = true, false;
    var t3 = e4.tag, n3;
    if ((n3 = t3 !== 3 && t3 !== 27) && ((n3 = t3 === 5) && (n3 = e4.type, n3 = n3 === `form` || n3 === `button` || Ud(e4.type, e4.memoizedProps)), n3 = !n3), n3 && wi2 && ki2(e4), ji2(e4), t3 === 13) {
      if (e4 = e4.memoizedState, e4 = e4 === null ? null : e4.dehydrated, !e4) throw Error(i2(317));
      wi2 = uf(e4);
    } else if (t3 === 31) {
      if (e4 = e4.memoizedState, e4 = e4 === null ? null : e4.dehydrated, !e4) throw Error(i2(317));
      wi2 = uf(e4);
    } else t3 === 27 ? (t3 = wi2, Zd(e4.type) ? (e4 = lf, lf = null, wi2 = e4) : wi2 = t3) : wi2 = Ci2 ? cf(e4.stateNode.nextSibling) : null;
    return true;
  }
  function Ni2() {
    wi2 = Ci2 = null, Ti2 = false;
  }
  function Pi2() {
    var e4 = Ei2;
    return e4 !== null && (Yl === null ? Yl = e4 : Yl.push.apply(Yl, e4), Ei2 = null), e4;
  }
  function Fi2(e4) {
    Ei2 === null ? Ei2 = [e4] : Ei2.push(e4);
  }
  var Ii2 = L2(null), Li2 = null, Ri2 = null;
  function zi2(e4, t3, n3) {
    z2(Ii2, t3._currentValue), t3._currentValue = n3;
  }
  function Bi(e4) {
    e4._currentValue = Ii2.current, R2(Ii2);
  }
  function Vi(e4, t3, n3) {
    for (; e4 !== null; ) {
      var r3 = e4.alternate;
      if ((e4.childLanes & t3) === t3 ? r3 !== null && (r3.childLanes & t3) !== t3 && (r3.childLanes |= t3) : (e4.childLanes |= t3, r3 !== null && (r3.childLanes |= t3)), e4 === n3) break;
      e4 = e4.return;
    }
  }
  function Hi(e4, t3, n3, r3) {
    var a3 = e4.child;
    for (a3 !== null && (a3.return = e4); a3 !== null; ) {
      var o3 = a3.dependencies;
      if (o3 !== null) {
        var s3 = a3.child;
        o3 = o3.firstContext;
        a: for (; o3 !== null; ) {
          var c3 = o3;
          o3 = a3;
          for (var l3 = 0; l3 < t3.length; l3++) if (c3.context === t3[l3]) {
            o3.lanes |= n3, c3 = o3.alternate, c3 !== null && (c3.lanes |= n3), Vi(o3.return, n3, e4), r3 || (s3 = null);
            break a;
          }
          o3 = c3.next;
        }
      } else if (a3.tag === 18) {
        if (s3 = a3.return, s3 === null) throw Error(i2(341));
        s3.lanes |= n3, o3 = s3.alternate, o3 !== null && (o3.lanes |= n3), Vi(s3, n3, e4), s3 = null;
      } else s3 = a3.child;
      if (s3 !== null) s3.return = a3;
      else for (s3 = a3; s3 !== null; ) {
        if (s3 === e4) {
          s3 = null;
          break;
        }
        if (a3 = s3.sibling, a3 !== null) {
          a3.return = s3.return, s3 = a3;
          break;
        }
        s3 = s3.return;
      }
      a3 = s3;
    }
  }
  function Ui(e4, t3, n3, r3) {
    e4 = null;
    for (var a3 = t3, o3 = false; a3 !== null; ) {
      if (!o3) {
        if (a3.flags & 524288) o3 = true;
        else if (a3.flags & 262144) break;
      }
      if (a3.tag === 10) {
        var s3 = a3.alternate;
        if (s3 === null) throw Error(i2(387));
        if (s3 = s3.memoizedProps, s3 !== null) {
          var c3 = a3.type;
          fr2(a3.pendingProps.value, s3.value) || (e4 === null ? e4 = [c3] : e4.push(c3));
        }
      } else if (a3 === ne2.current) {
        if (s3 = a3.alternate, s3 === null) throw Error(i2(387));
        s3.memoizedState.memoizedState !== a3.memoizedState.memoizedState && (e4 === null ? e4 = [Qf] : e4.push(Qf));
      }
      a3 = a3.return;
    }
    e4 !== null && Hi(t3, e4, n3, r3), t3.flags |= 262144;
  }
  function Wi(e4) {
    for (e4 = e4.firstContext; e4 !== null; ) {
      if (!fr2(e4.context._currentValue, e4.memoizedValue)) return true;
      e4 = e4.next;
    }
    return false;
  }
  function Gi(e4) {
    Li2 = e4, Ri2 = null, e4 = e4.dependencies, e4 !== null && (e4.firstContext = null);
  }
  function Ki2(e4) {
    return Ji2(Li2, e4);
  }
  function qi2(e4, t3) {
    return Li2 === null && Gi(e4), Ji2(e4, t3);
  }
  function Ji2(e4, t3) {
    var n3 = t3._currentValue;
    if (t3 = { context: t3, memoizedValue: n3, next: null }, Ri2 === null) {
      if (e4 === null) throw Error(i2(308));
      Ri2 = t3, e4.dependencies = { lanes: 0, firstContext: t3 }, e4.flags |= 524288;
    } else Ri2 = Ri2.next = t3;
    return n3;
  }
  var Yi2 = typeof AbortController < `u` ? AbortController : function() {
    var e4 = [], t3 = this.signal = { aborted: false, addEventListener: function(t4, n3) {
      e4.push(n3);
    } };
    this.abort = function() {
      t3.aborted = true, e4.forEach(function(e5) {
        return e5();
      });
    };
  }, Xi2 = t2.unstable_scheduleCallback, Zi2 = t2.unstable_NormalPriority, Qi2 = { $$typeof: b2, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function $i2() {
    return { controller: new Yi2(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function ea2(e4) {
    e4.refCount--, e4.refCount === 0 && Xi2(Zi2, function() {
      e4.controller.abort();
    });
  }
  var ta2 = null, na2 = 0, ra2 = 0, ia2 = null;
  function aa2(e4, t3) {
    if (ta2 === null) {
      var n3 = ta2 = [];
      na2 = 0, ra2 = ud(), ia2 = { status: `pending`, value: void 0, then: function(e5) {
        n3.push(e5);
      } };
    }
    return na2++, t3.then(oa2, oa2), t3;
  }
  function oa2() {
    if (--na2 === 0 && ta2 !== null) {
      ia2 !== null && (ia2.status = `fulfilled`);
      var e4 = ta2;
      ta2 = null, ra2 = 0, ia2 = null;
      for (var t3 = 0; t3 < e4.length; t3++) (0, e4[t3])();
    }
  }
  function sa2(e4, t3) {
    var n3 = [], r3 = { status: `pending`, value: null, reason: null, then: function(e5) {
      n3.push(e5);
    } };
    return e4.then(function() {
      r3.status = `fulfilled`, r3.value = t3;
      for (var e5 = 0; e5 < n3.length; e5++) (0, n3[e5])(t3);
    }, function(e5) {
      for (r3.status = `rejected`, r3.reason = e5, e5 = 0; e5 < n3.length; e5++) (0, n3[e5])(void 0);
    }), r3;
  }
  var ca2 = N2.S;
  N2.S = function(e4, t3) {
    Ql = ge2(), typeof t3 == `object` && t3 && typeof t3.then == `function` && aa2(e4, t3), ca2 !== null && ca2(e4, t3);
  };
  var la2 = L2(null);
  function ua2() {
    var e4 = la2.current;
    return e4 === null ? Nl.pooledCache : e4;
  }
  function da2(e4, t3) {
    t3 === null ? z2(la2, la2.current) : z2(la2, t3.pool);
  }
  function Y2() {
    var e4 = ua2();
    return e4 === null ? null : { parent: Qi2._currentValue, pool: e4 };
  }
  var fa2 = Error(i2(460)), pa2 = Error(i2(474)), ma2 = Error(i2(542)), ha2 = { then: function() {
  } };
  function ga2(e4) {
    return e4 = e4.status, e4 === `fulfilled` || e4 === `rejected`;
  }
  function X2(e4, t3, n3) {
    switch (n3 = e4[n3], n3 === void 0 ? e4.push(t3) : n3 !== t3 && (t3.then(Ut2, Ut2), t3 = n3), t3.status) {
      case `fulfilled`:
        return t3.value;
      case `rejected`:
        throw e4 = t3.reason, ba2(e4), e4;
      default:
        if (typeof t3.status == `string`) t3.then(Ut2, Ut2);
        else {
          if (e4 = Nl, e4 !== null && 100 < e4.shellSuspendCounter) throw Error(i2(482));
          e4 = t3, e4.status = `pending`, e4.then(function(e5) {
            if (t3.status === `pending`) {
              var n4 = t3;
              n4.status = `fulfilled`, n4.value = e5;
            }
          }, function(e5) {
            if (t3.status === `pending`) {
              var n4 = t3;
              n4.status = `rejected`, n4.reason = e5;
            }
          });
        }
        switch (t3.status) {
          case `fulfilled`:
            return t3.value;
          case `rejected`:
            throw e4 = t3.reason, ba2(e4), e4;
        }
        throw va2 = t3, fa2;
    }
  }
  function _a3(e4) {
    try {
      var t3 = e4._init;
      return t3(e4._payload);
    } catch (e5) {
      throw typeof e5 == `object` && e5 && typeof e5.then == `function` ? (va2 = e5, fa2) : e5;
    }
  }
  var va2 = null;
  function ya2() {
    if (va2 === null) throw Error(i2(459));
    var e4 = va2;
    return va2 = null, e4;
  }
  function ba2(e4) {
    if (e4 === fa2 || e4 === ma2) throw Error(i2(483));
  }
  var xa2 = null, Sa2 = 0;
  function Ca2(e4) {
    var t3 = Sa2;
    return Sa2 += 1, xa2 === null && (xa2 = []), X2(xa2, e4, t3);
  }
  function wa2(e4, t3) {
    t3 = t3.props.ref, e4.ref = t3 === void 0 ? null : t3;
  }
  function Ta2(e4, t3) {
    throw t3.$$typeof === p2 ? Error(i2(525)) : (e4 = Object.prototype.toString.call(t3), Error(i2(31, e4 === `[object Object]` ? `object with keys {` + Object.keys(t3).join(`, `) + `}` : e4)));
  }
  function Ea2(e4) {
    function t3(t4, n4) {
      if (e4) {
        var r4 = t4.deletions;
        r4 === null ? (t4.deletions = [n4], t4.flags |= 16) : r4.push(n4);
      }
    }
    function n3(n4, r4) {
      if (!e4) return null;
      for (; r4 !== null; ) t3(n4, r4), r4 = r4.sibling;
      return null;
    }
    function r3(e5) {
      for (var t4 = /* @__PURE__ */ new Map(); e5 !== null; ) e5.key === null ? t4.set(e5.index, e5) : t4.set(e5.key, e5), e5 = e5.sibling;
      return t4;
    }
    function a3(e5, t4) {
      return e5 = ei2(e5, t4), e5.index = 0, e5.sibling = null, e5;
    }
    function o3(t4, n4, r4) {
      return t4.index = r4, e4 ? (r4 = t4.alternate, r4 === null ? (t4.flags |= 67108866, n4) : (r4 = r4.index, r4 < n4 ? (t4.flags |= 67108866, n4) : r4)) : (t4.flags |= 1048576, n4);
    }
    function s3(t4) {
      return e4 && t4.alternate === null && (t4.flags |= 67108866), t4;
    }
    function c3(e5, t4, n4, r4) {
      return t4 === null || t4.tag !== 6 ? (t4 = ii2(n4, e5.mode, r4), t4.return = e5, t4) : (t4 = a3(t4, n4), t4.return = e5, t4);
    }
    function l3(e5, t4, n4, r4) {
      var i3 = n4.type;
      return i3 === g2 ? d3(e5, t4, n4.props.children, r4, n4.key) : t4 !== null && (t4.elementType === i3 || typeof i3 == `object` && i3 && i3.$$typeof === T2 && _a3(i3) === t4.type) ? (t4 = a3(t4, n4.props), wa2(t4, n4), t4.return = e5, t4) : (t4 = ni2(n4.type, n4.key, n4.props, null, e5.mode, r4), wa2(t4, n4), t4.return = e5, t4);
    }
    function u3(e5, t4, n4, r4) {
      return t4 === null || t4.tag !== 4 || t4.stateNode.containerInfo !== n4.containerInfo || t4.stateNode.implementation !== n4.implementation ? (t4 = oi2(n4, e5.mode, r4), t4.return = e5, t4) : (t4 = a3(t4, n4.children || []), t4.return = e5, t4);
    }
    function d3(e5, t4, n4, r4, i3) {
      return t4 === null || t4.tag !== 7 ? (t4 = ri2(n4, e5.mode, r4, i3), t4.return = e5, t4) : (t4 = a3(t4, n4), t4.return = e5, t4);
    }
    function f3(e5, t4, n4) {
      if (typeof t4 == `string` && t4 !== `` || typeof t4 == `number` || typeof t4 == `bigint`) return t4 = ii2(`` + t4, e5.mode, n4), t4.return = e5, t4;
      if (typeof t4 == `object` && t4) {
        switch (t4.$$typeof) {
          case m2:
            return n4 = ni2(t4.type, t4.key, t4.props, null, e5.mode, n4), wa2(n4, t4), n4.return = e5, n4;
          case h2:
            return t4 = oi2(t4, e5.mode, n4), t4.return = e5, t4;
          case T2:
            return t4 = _a3(t4), f3(e5, t4, n4);
        }
        if (M2(t4) || k2(t4)) return t4 = ri2(t4, e5.mode, n4, null), t4.return = e5, t4;
        if (typeof t4.then == `function`) return f3(e5, Ca2(t4), n4);
        if (t4.$$typeof === b2) return f3(e5, qi2(e5, t4), n4);
        Ta2(e5, t4);
      }
      return null;
    }
    function p3(e5, t4, n4, r4) {
      var i3 = t4 === null ? null : t4.key;
      if (typeof n4 == `string` && n4 !== `` || typeof n4 == `number` || typeof n4 == `bigint`) return i3 === null ? c3(e5, t4, `` + n4, r4) : null;
      if (typeof n4 == `object` && n4) {
        switch (n4.$$typeof) {
          case m2:
            return n4.key === i3 ? l3(e5, t4, n4, r4) : null;
          case h2:
            return n4.key === i3 ? u3(e5, t4, n4, r4) : null;
          case T2:
            return n4 = _a3(n4), p3(e5, t4, n4, r4);
        }
        if (M2(n4) || k2(n4)) return i3 === null ? d3(e5, t4, n4, r4, null) : null;
        if (typeof n4.then == `function`) return p3(e5, t4, Ca2(n4), r4);
        if (n4.$$typeof === b2) return p3(e5, t4, qi2(e5, n4), r4);
        Ta2(e5, n4);
      }
      return null;
    }
    function _3(e5, t4, n4, r4, i3) {
      if (typeof r4 == `string` && r4 !== `` || typeof r4 == `number` || typeof r4 == `bigint`) return e5 = e5.get(n4) || null, c3(t4, e5, `` + r4, i3);
      if (typeof r4 == `object` && r4) {
        switch (r4.$$typeof) {
          case m2:
            return e5 = e5.get(r4.key === null ? n4 : r4.key) || null, l3(t4, e5, r4, i3);
          case h2:
            return e5 = e5.get(r4.key === null ? n4 : r4.key) || null, u3(t4, e5, r4, i3);
          case T2:
            return r4 = _a3(r4), _3(e5, t4, n4, r4, i3);
        }
        if (M2(r4) || k2(r4)) return e5 = e5.get(n4) || null, d3(t4, e5, r4, i3, null);
        if (typeof r4.then == `function`) return _3(e5, t4, n4, Ca2(r4), i3);
        if (r4.$$typeof === b2) return _3(e5, t4, n4, qi2(t4, r4), i3);
        Ta2(t4, r4);
      }
      return null;
    }
    function v3(i3, a4, s4, c4) {
      for (var l4 = null, u4 = null, d4 = a4, m3 = a4 = 0, h3 = null; d4 !== null && m3 < s4.length; m3++) {
        d4.index > m3 ? (h3 = d4, d4 = null) : h3 = d4.sibling;
        var g3 = p3(i3, d4, s4[m3], c4);
        if (g3 === null) {
          d4 === null && (d4 = h3);
          break;
        }
        e4 && d4 && g3.alternate === null && t3(i3, d4), a4 = o3(g3, a4, m3), u4 === null ? l4 = g3 : u4.sibling = g3, u4 = g3, d4 = h3;
      }
      if (m3 === s4.length) return n3(i3, d4), Ti2 && vi2(i3, m3), l4;
      if (d4 === null) {
        for (; m3 < s4.length; m3++) d4 = f3(i3, s4[m3], c4), d4 !== null && (a4 = o3(d4, a4, m3), u4 === null ? l4 = d4 : u4.sibling = d4, u4 = d4);
        return Ti2 && vi2(i3, m3), l4;
      }
      for (d4 = r3(d4); m3 < s4.length; m3++) h3 = _3(d4, i3, m3, s4[m3], c4), h3 !== null && (e4 && h3.alternate !== null && d4.delete(h3.key === null ? m3 : h3.key), a4 = o3(h3, a4, m3), u4 === null ? l4 = h3 : u4.sibling = h3, u4 = h3);
      return e4 && d4.forEach(function(e5) {
        return t3(i3, e5);
      }), Ti2 && vi2(i3, m3), l4;
    }
    function y3(a4, s4, c4, l4) {
      if (c4 == null) throw Error(i2(151));
      for (var u4 = null, d4 = null, m3 = s4, h3 = s4 = 0, g3 = null, v4 = c4.next(); m3 !== null && !v4.done; h3++, v4 = c4.next()) {
        m3.index > h3 ? (g3 = m3, m3 = null) : g3 = m3.sibling;
        var y4 = p3(a4, m3, v4.value, l4);
        if (y4 === null) {
          m3 === null && (m3 = g3);
          break;
        }
        e4 && m3 && y4.alternate === null && t3(a4, m3), s4 = o3(y4, s4, h3), d4 === null ? u4 = y4 : d4.sibling = y4, d4 = y4, m3 = g3;
      }
      if (v4.done) return n3(a4, m3), Ti2 && vi2(a4, h3), u4;
      if (m3 === null) {
        for (; !v4.done; h3++, v4 = c4.next()) v4 = f3(a4, v4.value, l4), v4 !== null && (s4 = o3(v4, s4, h3), d4 === null ? u4 = v4 : d4.sibling = v4, d4 = v4);
        return Ti2 && vi2(a4, h3), u4;
      }
      for (m3 = r3(m3); !v4.done; h3++, v4 = c4.next()) v4 = _3(m3, a4, h3, v4.value, l4), v4 !== null && (e4 && v4.alternate !== null && m3.delete(v4.key === null ? h3 : v4.key), s4 = o3(v4, s4, h3), d4 === null ? u4 = v4 : d4.sibling = v4, d4 = v4);
      return e4 && m3.forEach(function(e5) {
        return t3(a4, e5);
      }), Ti2 && vi2(a4, h3), u4;
    }
    function x3(e5, r4, o4, c4) {
      if (typeof o4 == `object` && o4 && o4.type === g2 && o4.key === null && (o4 = o4.props.children), typeof o4 == `object` && o4) {
        switch (o4.$$typeof) {
          case m2:
            a: {
              for (var l4 = o4.key; r4 !== null; ) {
                if (r4.key === l4) {
                  if (l4 = o4.type, l4 === g2) {
                    if (r4.tag === 7) {
                      n3(e5, r4.sibling), c4 = a3(r4, o4.props.children), c4.return = e5, e5 = c4;
                      break a;
                    }
                  } else if (r4.elementType === l4 || typeof l4 == `object` && l4 && l4.$$typeof === T2 && _a3(l4) === r4.type) {
                    n3(e5, r4.sibling), c4 = a3(r4, o4.props), wa2(c4, o4), c4.return = e5, e5 = c4;
                    break a;
                  }
                  n3(e5, r4);
                  break;
                }
                t3(e5, r4), r4 = r4.sibling;
              }
              o4.type === g2 ? (c4 = ri2(o4.props.children, e5.mode, c4, o4.key), c4.return = e5, e5 = c4) : (c4 = ni2(o4.type, o4.key, o4.props, null, e5.mode, c4), wa2(c4, o4), c4.return = e5, e5 = c4);
            }
            return s3(e5);
          case h2:
            a: {
              for (l4 = o4.key; r4 !== null; ) {
                if (r4.key === l4) {
                  if (r4.tag === 4 && r4.stateNode.containerInfo === o4.containerInfo && r4.stateNode.implementation === o4.implementation) {
                    n3(e5, r4.sibling), c4 = a3(r4, o4.children || []), c4.return = e5, e5 = c4;
                    break a;
                  }
                  n3(e5, r4);
                  break;
                }
                t3(e5, r4), r4 = r4.sibling;
              }
              c4 = oi2(o4, e5.mode, c4), c4.return = e5, e5 = c4;
            }
            return s3(e5);
          case T2:
            return o4 = _a3(o4), x3(e5, r4, o4, c4);
        }
        if (M2(o4)) return v3(e5, r4, o4, c4);
        if (k2(o4)) {
          if (l4 = k2(o4), typeof l4 != `function`) throw Error(i2(150));
          return o4 = l4.call(o4), y3(e5, r4, o4, c4);
        }
        if (typeof o4.then == `function`) return x3(e5, r4, Ca2(o4), c4);
        if (o4.$$typeof === b2) return x3(e5, r4, qi2(e5, o4), c4);
        Ta2(e5, o4);
      }
      return typeof o4 == `string` && o4 !== `` || typeof o4 == `number` || typeof o4 == `bigint` ? (o4 = `` + o4, r4 !== null && r4.tag === 6 ? (n3(e5, r4.sibling), c4 = a3(r4, o4), c4.return = e5, e5 = c4) : (n3(e5, r4), c4 = ii2(o4, e5.mode, c4), c4.return = e5, e5 = c4), s3(e5)) : n3(e5, r4);
    }
    return function(e5, t4, n4, r4) {
      try {
        Sa2 = 0;
        var i3 = x3(e5, t4, n4, r4);
        return xa2 = null, i3;
      } catch (t5) {
        if (t5 === fa2 || t5 === ma2) throw t5;
        var a4 = Qr2(29, t5, null, e5.mode);
        return a4.lanes = r4, a4.return = e5, a4;
      }
    };
  }
  var Da2 = Ea2(true), Oa2 = Ea2(false), ka2 = false;
  function Aa2(e4) {
    e4.updateQueue = { baseState: e4.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function ja2(e4, t3) {
    e4 = e4.updateQueue, t3.updateQueue === e4 && (t3.updateQueue = { baseState: e4.baseState, firstBaseUpdate: e4.firstBaseUpdate, lastBaseUpdate: e4.lastBaseUpdate, shared: e4.shared, callbacks: null });
  }
  function Ma2(e4) {
    return { lane: e4, tag: 0, payload: null, callback: null, next: null };
  }
  function Na2(e4, t3, n3) {
    var r3 = e4.updateQueue;
    if (r3 === null) return null;
    if (r3 = r3.shared, Q & 2) {
      var i3 = r3.pending;
      return i3 === null ? t3.next = t3 : (t3.next = i3.next, i3.next = t3), r3.pending = t3, t3 = Yr2(e4), Jr2(e4, null, n3), t3;
    }
    return Gr2(e4, r3, t3, n3), Yr2(e4);
  }
  function Pa2(e4, t3, n3) {
    if (t3 = t3.updateQueue, t3 !== null && (t3 = t3.shared, n3 & 4194048)) {
      var r3 = t3.lanes;
      r3 &= e4.pendingLanes, n3 |= r3, t3.lanes = n3, We2(e4, n3);
    }
  }
  function Fa2(e4, t3) {
    var n3 = e4.updateQueue, r3 = e4.alternate;
    if (r3 !== null && (r3 = r3.updateQueue, n3 === r3)) {
      var i3 = null, a3 = null;
      if (n3 = n3.firstBaseUpdate, n3 !== null) {
        do {
          var o3 = { lane: n3.lane, tag: n3.tag, payload: n3.payload, callback: null, next: null };
          a3 === null ? i3 = a3 = o3 : a3 = a3.next = o3, n3 = n3.next;
        } while (n3 !== null);
        a3 === null ? i3 = a3 = t3 : a3 = a3.next = t3;
      } else i3 = a3 = t3;
      n3 = { baseState: r3.baseState, firstBaseUpdate: i3, lastBaseUpdate: a3, shared: r3.shared, callbacks: r3.callbacks }, e4.updateQueue = n3;
    } else e4 = n3.lastBaseUpdate, e4 === null ? n3.firstBaseUpdate = t3 : e4.next = t3, n3.lastBaseUpdate = t3;
  }
  var Ia2 = false;
  function La2() {
    if (Ia2) {
      var e4 = ia2;
      if (e4 !== null) throw e4;
    }
  }
  function Ra2(e4, t3, n3, r3) {
    Ia2 = false;
    var i3 = e4.updateQueue;
    ka2 = false;
    var a3 = i3.firstBaseUpdate, o3 = i3.lastBaseUpdate, s3 = i3.shared.pending;
    if (s3 !== null) {
      i3.shared.pending = null;
      var c3 = s3, l3 = c3.next;
      c3.next = null, o3 === null ? a3 = l3 : o3.next = l3, o3 = c3;
      var u3 = e4.alternate;
      u3 !== null && (u3 = u3.updateQueue, s3 = u3.lastBaseUpdate, s3 !== o3 && (s3 === null ? u3.firstBaseUpdate = l3 : s3.next = l3, u3.lastBaseUpdate = c3));
    }
    if (a3 !== null) {
      var d3 = i3.baseState;
      o3 = 0, u3 = l3 = c3 = null, s3 = a3;
      do {
        var p3 = s3.lane & -536870913, m3 = p3 !== s3.lane;
        if (m3 ? (Fl & p3) === p3 : (r3 & p3) === p3) {
          p3 !== 0 && p3 === ra2 && (Ia2 = true), u3 !== null && (u3 = u3.next = { lane: 0, tag: s3.tag, payload: s3.payload, callback: null, next: null });
          a: {
            var h3 = e4, g3 = s3;
            p3 = t3;
            var _3 = n3;
            switch (g3.tag) {
              case 1:
                if (h3 = g3.payload, typeof h3 == `function`) {
                  d3 = h3.call(_3, d3, p3);
                  break a;
                }
                d3 = h3;
                break a;
              case 3:
                h3.flags = h3.flags & -65537 | 128;
              case 0:
                if (h3 = g3.payload, p3 = typeof h3 == `function` ? h3.call(_3, d3, p3) : h3, p3 == null) break a;
                d3 = f2({}, d3, p3);
                break a;
              case 2:
                ka2 = true;
            }
          }
          p3 = s3.callback, p3 !== null && (e4.flags |= 64, m3 && (e4.flags |= 8192), m3 = i3.callbacks, m3 === null ? i3.callbacks = [p3] : m3.push(p3));
        } else m3 = { lane: p3, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null }, u3 === null ? (l3 = u3 = m3, c3 = d3) : u3 = u3.next = m3, o3 |= p3;
        if (s3 = s3.next, s3 === null) {
          if (s3 = i3.shared.pending, s3 === null) break;
          m3 = s3, s3 = m3.next, m3.next = null, i3.lastBaseUpdate = m3, i3.shared.pending = null;
        }
      } while (1);
      u3 === null && (c3 = d3), i3.baseState = c3, i3.firstBaseUpdate = l3, i3.lastBaseUpdate = u3, a3 === null && (i3.shared.lanes = 0), Ul |= o3, e4.lanes = o3, e4.memoizedState = d3;
    }
  }
  function za2(e4, t3) {
    if (typeof e4 != `function`) throw Error(i2(191, e4));
    e4.call(t3);
  }
  function Ba2(e4, t3) {
    var n3 = e4.callbacks;
    if (n3 !== null) for (e4.callbacks = null, e4 = 0; e4 < n3.length; e4++) za2(n3[e4], t3);
  }
  var Va2 = L2(null), Ha2 = L2(0);
  function Ua2(e4, t3) {
    e4 = Vl, z2(Ha2, e4), z2(Va2, t3), Vl = e4 | t3.baseLanes;
  }
  function Wa2() {
    z2(Ha2, Vl), z2(Va2, Va2.current);
  }
  function Ga2() {
    Vl = Ha2.current, R2(Va2), R2(Ha2);
  }
  var Ka2 = L2(null), qa2 = null;
  function Ja2(e4) {
    var t3 = e4.alternate;
    z2($a2, $a2.current & 1), z2(Ka2, e4), qa2 === null && (t3 === null || Va2.current !== null || t3.memoizedState !== null) && (qa2 = e4);
  }
  function Ya2(e4) {
    z2($a2, $a2.current), z2(Ka2, e4), qa2 === null && (qa2 = e4);
  }
  function Xa2(e4) {
    e4.tag === 22 ? (z2($a2, $a2.current), z2(Ka2, e4), qa2 === null && (qa2 = e4)) : Za2(e4);
  }
  function Za2() {
    z2($a2, $a2.current), z2(Ka2, Ka2.current);
  }
  function Qa2(e4) {
    R2(Ka2), qa2 === e4 && (qa2 = null), R2($a2);
  }
  var $a2 = L2(0);
  function eo2(e4) {
    for (var t3 = e4; t3 !== null; ) {
      if (t3.tag === 13) {
        var n3 = t3.memoizedState;
        if (n3 !== null && (n3 = n3.dehydrated, n3 === null || af(n3) || of(n3))) return t3;
      } else if (t3.tag === 19 && (t3.memoizedProps.revealOrder === `forwards` || t3.memoizedProps.revealOrder === `backwards` || t3.memoizedProps.revealOrder === `unstable_legacy-backwards` || t3.memoizedProps.revealOrder === `together`)) {
        if (t3.flags & 128) return t3;
      } else if (t3.child !== null) {
        t3.child.return = t3, t3 = t3.child;
        continue;
      }
      if (t3 === e4) break;
      for (; t3.sibling === null; ) {
        if (t3.return === null || t3.return === e4) return null;
        t3 = t3.return;
      }
      t3.sibling.return = t3.return, t3 = t3.sibling;
    }
    return null;
  }
  var to2 = 0, no2 = null, ro2 = null, io2 = null, ao2 = false, oo2 = false, so2 = false, co2 = 0, lo2 = 0, uo2 = null, fo2 = 0;
  function po2() {
    throw Error(i2(321));
  }
  function mo2(e4, t3) {
    if (t3 === null) return false;
    for (var n3 = 0; n3 < t3.length && n3 < e4.length; n3++) if (!fr2(e4[n3], t3[n3])) return false;
    return true;
  }
  function ho2(e4, t3, n3, r3, i3, a3) {
    return to2 = a3, no2 = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, N2.H = e4 === null || e4.memoizedState === null ? js2 : Ms2, so2 = false, a3 = n3(r3, i3), so2 = false, oo2 && (a3 = _o2(t3, n3, r3, i3)), go2(e4), a3;
  }
  function go2(e4) {
    N2.H = As2;
    var t3 = ro2 !== null && ro2.next !== null;
    if (to2 = 0, io2 = ro2 = no2 = null, ao2 = false, lo2 = 0, uo2 = null, t3) throw Error(i2(300));
    e4 === null || Ys2 || (e4 = e4.dependencies, e4 !== null && Wi(e4) && (Ys2 = true));
  }
  function _o2(e4, t3, n3, r3) {
    no2 = e4;
    var a3 = 0;
    do {
      if (oo2 && (uo2 = null), lo2 = 0, oo2 = false, 25 <= a3) throw Error(i2(301));
      if (a3 += 1, io2 = ro2 = null, e4.updateQueue != null) {
        var o3 = e4.updateQueue;
        o3.lastEffect = null, o3.events = null, o3.stores = null, o3.memoCache != null && (o3.memoCache.index = 0);
      }
      N2.H = Ns2, o3 = t3(n3, r3);
    } while (oo2);
    return o3;
  }
  function vo2() {
    var e4 = N2.H, t3 = e4.useState()[0];
    return t3 = typeof t3.then == `function` ? To2(t3) : t3, e4 = e4.useState()[0], (ro2 === null ? null : ro2.memoizedState) !== e4 && (no2.flags |= 1024), t3;
  }
  function yo2() {
    var e4 = co2 !== 0;
    return co2 = 0, e4;
  }
  function bo2(e4, t3, n3) {
    t3.updateQueue = e4.updateQueue, t3.flags &= -2053, e4.lanes &= ~n3;
  }
  function xo2(e4) {
    if (ao2) {
      for (e4 = e4.memoizedState; e4 !== null; ) {
        var t3 = e4.queue;
        t3 !== null && (t3.pending = null), e4 = e4.next;
      }
      ao2 = false;
    }
    to2 = 0, io2 = ro2 = no2 = null, oo2 = false, lo2 = co2 = 0, uo2 = null;
  }
  function So2() {
    var e4 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return io2 === null ? no2.memoizedState = io2 = e4 : io2 = io2.next = e4, io2;
  }
  function Co2() {
    if (ro2 === null) {
      var e4 = no2.alternate;
      e4 = e4 === null ? null : e4.memoizedState;
    } else e4 = ro2.next;
    var t3 = io2 === null ? no2.memoizedState : io2.next;
    if (t3 !== null) io2 = t3, ro2 = e4;
    else {
      if (e4 === null) throw no2.alternate === null ? Error(i2(467)) : Error(i2(310));
      ro2 = e4, e4 = { memoizedState: ro2.memoizedState, baseState: ro2.baseState, baseQueue: ro2.baseQueue, queue: ro2.queue, next: null }, io2 === null ? no2.memoizedState = io2 = e4 : io2 = io2.next = e4;
    }
    return io2;
  }
  function wo2() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function To2(e4) {
    var t3 = lo2;
    return lo2 += 1, uo2 === null && (uo2 = []), e4 = X2(uo2, e4, t3), t3 = no2, (io2 === null ? t3.memoizedState : io2.next) === null && (t3 = t3.alternate, N2.H = t3 === null || t3.memoizedState === null ? js2 : Ms2), e4;
  }
  function Eo2(e4) {
    if (typeof e4 == `object` && e4) {
      if (typeof e4.then == `function`) return To2(e4);
      if (e4.$$typeof === b2) return Ki2(e4);
    }
    throw Error(i2(438, String(e4)));
  }
  function Do2(e4) {
    var t3 = null, n3 = no2.updateQueue;
    if (n3 !== null && (t3 = n3.memoCache), t3 == null) {
      var r3 = no2.alternate;
      r3 !== null && (r3 = r3.updateQueue, r3 !== null && (r3 = r3.memoCache, r3 != null && (t3 = { data: r3.data.map(function(e5) {
        return e5.slice();
      }), index: 0 })));
    }
    if (t3 ?? (t3 = { data: [], index: 0 }), n3 === null && (n3 = wo2(), no2.updateQueue = n3), n3.memoCache = t3, n3 = t3.data[t3.index], n3 === void 0) for (n3 = t3.data[t3.index] = Array(e4), r3 = 0; r3 < e4; r3++) n3[r3] = D2;
    return t3.index++, n3;
  }
  function Oo2(e4, t3) {
    return typeof t3 == `function` ? t3(e4) : t3;
  }
  function ko2(e4) {
    return Ao2(Co2(), ro2, e4);
  }
  function Ao2(e4, t3, n3) {
    var r3 = e4.queue;
    if (r3 === null) throw Error(i2(311));
    r3.lastRenderedReducer = n3;
    var a3 = e4.baseQueue, o3 = r3.pending;
    if (o3 !== null) {
      if (a3 !== null) {
        var s3 = a3.next;
        a3.next = o3.next, o3.next = s3;
      }
      t3.baseQueue = a3 = o3, r3.pending = null;
    }
    if (o3 = e4.baseState, a3 === null) e4.memoizedState = o3;
    else {
      t3 = a3.next;
      var c3 = s3 = null, l3 = null, u3 = t3, d3 = false;
      do {
        var f3 = u3.lane & -536870913;
        if (f3 === u3.lane ? (to2 & f3) === f3 : (Fl & f3) === f3) {
          var p3 = u3.revertLane;
          if (p3 === 0) l3 !== null && (l3 = l3.next = { lane: 0, revertLane: 0, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }), f3 === ra2 && (d3 = true);
          else if ((to2 & p3) === p3) {
            u3 = u3.next, p3 === ra2 && (d3 = true);
            continue;
          } else f3 = { lane: 0, revertLane: u3.revertLane, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l3 === null ? (c3 = l3 = f3, s3 = o3) : l3 = l3.next = f3, no2.lanes |= p3, Ul |= p3;
          f3 = u3.action, so2 && n3(o3, f3), o3 = u3.hasEagerState ? u3.eagerState : n3(o3, f3);
        } else p3 = { lane: f3, revertLane: u3.revertLane, gesture: u3.gesture, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l3 === null ? (c3 = l3 = p3, s3 = o3) : l3 = l3.next = p3, no2.lanes |= f3, Ul |= f3;
        u3 = u3.next;
      } while (u3 !== null && u3 !== t3);
      if (l3 === null ? s3 = o3 : l3.next = c3, !fr2(o3, e4.memoizedState) && (Ys2 = true, d3 && (n3 = ia2, n3 !== null))) throw n3;
      e4.memoizedState = o3, e4.baseState = s3, e4.baseQueue = l3, r3.lastRenderedState = o3;
    }
    return a3 === null && (r3.lanes = 0), [e4.memoizedState, r3.dispatch];
  }
  function jo2(e4) {
    var t3 = Co2(), n3 = t3.queue;
    if (n3 === null) throw Error(i2(311));
    n3.lastRenderedReducer = e4;
    var r3 = n3.dispatch, a3 = n3.pending, o3 = t3.memoizedState;
    if (a3 !== null) {
      n3.pending = null;
      var s3 = a3 = a3.next;
      do
        o3 = e4(o3, s3.action), s3 = s3.next;
      while (s3 !== a3);
      fr2(o3, t3.memoizedState) || (Ys2 = true), t3.memoizedState = o3, t3.baseQueue === null && (t3.baseState = o3), n3.lastRenderedState = o3;
    }
    return [o3, r3];
  }
  function Mo2(e4, t3, n3) {
    var r3 = no2, a3 = Co2(), o3 = Ti2;
    if (o3) {
      if (n3 === void 0) throw Error(i2(407));
      n3 = n3();
    } else n3 = t3();
    var s3 = !fr2((ro2 || a3).memoizedState, n3);
    if (s3 && (a3.memoizedState = n3, Ys2 = true), a3 = a3.queue, ns2(Fo2.bind(null, r3, a3, e4), [e4]), a3.getSnapshot !== t3 || s3 || io2 !== null && io2.memoizedState.tag & 1) {
      if (r3.flags |= 2048, Zo2(9, { destroy: void 0 }, Po2.bind(null, r3, a3, n3, t3), null), Nl === null) throw Error(i2(349));
      o3 || to2 & 127 || No2(r3, t3, n3);
    }
    return n3;
  }
  function No2(e4, t3, n3) {
    e4.flags |= 16384, e4 = { getSnapshot: t3, value: n3 }, t3 = no2.updateQueue, t3 === null ? (t3 = wo2(), no2.updateQueue = t3, t3.stores = [e4]) : (n3 = t3.stores, n3 === null ? t3.stores = [e4] : n3.push(e4));
  }
  function Po2(e4, t3, n3, r3) {
    t3.value = n3, t3.getSnapshot = r3, Io2(t3) && Lo2(e4);
  }
  function Fo2(e4, t3, n3) {
    return n3(function() {
      Io2(t3) && Lo2(e4);
    });
  }
  function Io2(e4) {
    var t3 = e4.getSnapshot;
    e4 = e4.value;
    try {
      var n3 = t3();
      return !fr2(e4, n3);
    } catch {
      return true;
    }
  }
  function Lo2(e4) {
    var t3 = qr2(e4, 2);
    t3 !== null && pu(t3, e4, 2);
  }
  function Z2(e4) {
    var t3 = So2();
    if (typeof e4 == `function`) {
      var n3 = e4;
      if (e4 = n3(), so2) {
        De2(true);
        try {
          n3();
        } finally {
          De2(false);
        }
      }
    }
    return t3.memoizedState = t3.baseState = e4, t3.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Oo2, lastRenderedState: e4 }, t3;
  }
  function Ro2(e4, t3, n3, r3) {
    return e4.baseState = n3, Ao2(e4, ro2, typeof r3 == `function` ? r3 : Oo2);
  }
  function zo2(e4, t3, n3, r3, a3) {
    if (Ds2(e4)) throw Error(i2(485));
    if (e4 = t3.action, e4 !== null) {
      var o3 = { payload: a3, action: e4, next: null, isTransition: true, status: `pending`, value: null, reason: null, listeners: [], then: function(e5) {
        o3.listeners.push(e5);
      } };
      N2.T === null ? o3.isTransition = false : n3(true), r3(o3), n3 = t3.pending, n3 === null ? (o3.next = t3.pending = o3, Bo2(t3, o3)) : (o3.next = n3.next, t3.pending = n3.next = o3);
    }
  }
  function Bo2(e4, t3) {
    var n3 = t3.action, r3 = t3.payload, i3 = e4.state;
    if (t3.isTransition) {
      var a3 = N2.T, o3 = {};
      N2.T = o3;
      try {
        var s3 = n3(i3, r3), c3 = N2.S;
        c3 !== null && c3(o3, s3), Vo2(e4, t3, s3);
      } catch (n4) {
        Uo2(e4, t3, n4);
      } finally {
        a3 !== null && o3.types !== null && (a3.types = o3.types), N2.T = a3;
      }
    } else try {
      a3 = n3(i3, r3), Vo2(e4, t3, a3);
    } catch (n4) {
      Uo2(e4, t3, n4);
    }
  }
  function Vo2(e4, t3, n3) {
    typeof n3 == `object` && n3 && typeof n3.then == `function` ? n3.then(function(n4) {
      Ho2(e4, t3, n4);
    }, function(n4) {
      return Uo2(e4, t3, n4);
    }) : Ho2(e4, t3, n3);
  }
  function Ho2(e4, t3, n3) {
    t3.status = `fulfilled`, t3.value = n3, Wo2(t3), e4.state = n3, t3 = e4.pending, t3 !== null && (n3 = t3.next, n3 === t3 ? e4.pending = null : (n3 = n3.next, t3.next = n3, Bo2(e4, n3)));
  }
  function Uo2(e4, t3, n3) {
    var r3 = e4.pending;
    if (e4.pending = null, r3 !== null) {
      r3 = r3.next;
      do
        t3.status = `rejected`, t3.reason = n3, Wo2(t3), t3 = t3.next;
      while (t3 !== r3);
    }
    e4.action = null;
  }
  function Wo2(e4) {
    e4 = e4.listeners;
    for (var t3 = 0; t3 < e4.length; t3++) (0, e4[t3])();
  }
  function Go2(e4, t3) {
    return t3;
  }
  function Ko2(e4, t3) {
    if (Ti2) {
      var n3 = Nl.formState;
      if (n3 !== null) {
        a: {
          var r3 = no2;
          if (Ti2) {
            if (wi2) {
              b: {
                for (var i3 = wi2, a3 = Di2; i3.nodeType !== 8; ) if (!a3 || (i3 = cf(i3.nextSibling), i3 === null)) {
                  i3 = null;
                  break b;
                }
                a3 = i3.data, i3 = a3 === `F!` || a3 === `F` ? i3 : null;
              }
              if (i3) {
                wi2 = cf(i3.nextSibling), r3 = i3.data === `F!`;
                break a;
              }
            }
            ki2(r3);
          }
          r3 = false;
        }
        r3 && (t3 = n3[0]);
      }
    }
    return n3 = So2(), n3.memoizedState = n3.baseState = t3, r3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Go2, lastRenderedState: t3 }, n3.queue = r3, n3 = ws2.bind(null, no2, r3), r3.dispatch = n3, r3 = Z2(false), a3 = Es2.bind(null, no2, false, r3.queue), r3 = So2(), i3 = { state: t3, dispatch: null, action: e4, pending: null }, r3.queue = i3, n3 = zo2.bind(null, no2, i3, a3, n3), i3.dispatch = n3, r3.memoizedState = e4, [t3, n3, false];
  }
  function qo2(e4) {
    return Jo2(Co2(), ro2, e4);
  }
  function Jo2(e4, t3, n3) {
    if (t3 = Ao2(e4, t3, Go2)[0], e4 = ko2(Oo2)[0], typeof t3 == `object` && t3 && typeof t3.then == `function`) try {
      var r3 = To2(t3);
    } catch (e5) {
      throw e5 === fa2 ? ma2 : e5;
    }
    else r3 = t3;
    t3 = Co2();
    var i3 = t3.queue, a3 = i3.dispatch;
    return n3 !== t3.memoizedState && (no2.flags |= 2048, Zo2(9, { destroy: void 0 }, Yo2.bind(null, i3, n3), null)), [r3, a3, e4];
  }
  function Yo2(e4, t3) {
    e4.action = t3;
  }
  function Xo2(e4) {
    var t3 = Co2(), n3 = ro2;
    if (n3 !== null) return Jo2(t3, n3, e4);
    Co2(), t3 = t3.memoizedState, n3 = Co2();
    var r3 = n3.queue.dispatch;
    return n3.memoizedState = e4, [t3, r3, false];
  }
  function Zo2(e4, t3, n3, r3) {
    return e4 = { tag: e4, create: n3, deps: r3, inst: t3, next: null }, t3 = no2.updateQueue, t3 === null && (t3 = wo2(), no2.updateQueue = t3), n3 = t3.lastEffect, n3 === null ? t3.lastEffect = e4.next = e4 : (r3 = n3.next, n3.next = e4, e4.next = r3, t3.lastEffect = e4), e4;
  }
  function Qo2() {
    return Co2().memoizedState;
  }
  function $o2(e4, t3, n3, r3) {
    var i3 = So2();
    no2.flags |= e4, i3.memoizedState = Zo2(1 | t3, { destroy: void 0 }, n3, r3 === void 0 ? null : r3);
  }
  function es2(e4, t3, n3, r3) {
    var i3 = Co2();
    r3 = r3 === void 0 ? null : r3;
    var a3 = i3.memoizedState.inst;
    ro2 !== null && r3 !== null && mo2(r3, ro2.memoizedState.deps) ? i3.memoizedState = Zo2(t3, a3, n3, r3) : (no2.flags |= e4, i3.memoizedState = Zo2(1 | t3, a3, n3, r3));
  }
  function ts2(e4, t3) {
    $o2(8390656, 8, e4, t3);
  }
  function ns2(e4, t3) {
    es2(2048, 8, e4, t3);
  }
  function rs2(e4) {
    no2.flags |= 4;
    var t3 = no2.updateQueue;
    if (t3 === null) t3 = wo2(), no2.updateQueue = t3, t3.events = [e4];
    else {
      var n3 = t3.events;
      n3 === null ? t3.events = [e4] : n3.push(e4);
    }
  }
  function is2(e4) {
    var t3 = Co2().memoizedState;
    return rs2({ ref: t3, nextImpl: e4 }), function() {
      if (Q & 2) throw Error(i2(440));
      return t3.impl.apply(void 0, arguments);
    };
  }
  function as2(e4, t3) {
    return es2(4, 2, e4, t3);
  }
  function os2(e4, t3) {
    return es2(4, 4, e4, t3);
  }
  function ss2(e4, t3) {
    if (typeof t3 == `function`) {
      e4 = e4();
      var n3 = t3(e4);
      return function() {
        typeof n3 == `function` ? n3() : t3(null);
      };
    }
    if (t3 != null) return e4 = e4(), t3.current = e4, function() {
      t3.current = null;
    };
  }
  function cs2(e4, t3, n3) {
    n3 = n3 == null ? null : n3.concat([e4]), es2(4, 4, ss2.bind(null, t3, e4), n3);
  }
  function ls2() {
  }
  function us2(e4, t3) {
    var n3 = Co2();
    t3 = t3 === void 0 ? null : t3;
    var r3 = n3.memoizedState;
    return t3 !== null && mo2(t3, r3[1]) ? r3[0] : (n3.memoizedState = [e4, t3], e4);
  }
  function ds2(e4, t3) {
    var n3 = Co2();
    t3 = t3 === void 0 ? null : t3;
    var r3 = n3.memoizedState;
    if (t3 !== null && mo2(t3, r3[1])) return r3[0];
    if (r3 = e4(), so2) {
      De2(true);
      try {
        e4();
      } finally {
        De2(false);
      }
    }
    return n3.memoizedState = [r3, t3], r3;
  }
  function fs2(e4, t3, n3) {
    return n3 === void 0 || to2 & 1073741824 && !(Fl & 261930) ? e4.memoizedState = t3 : (e4.memoizedState = n3, e4 = fu(), no2.lanes |= e4, Ul |= e4, n3);
  }
  function ps2(e4, t3, n3, r3) {
    return fr2(n3, t3) ? n3 : Va2.current === null ? !(to2 & 42) || to2 & 1073741824 && !(Fl & 261930) ? (Ys2 = true, e4.memoizedState = n3) : (e4 = fu(), no2.lanes |= e4, Ul |= e4, t3) : (e4 = fs2(e4, n3, r3), fr2(e4, t3) || (Ys2 = true), e4);
  }
  function ms2(e4, t3, n3, r3, i3) {
    var a3 = P2.p;
    P2.p = a3 !== 0 && 8 > a3 ? a3 : 8;
    var o3 = N2.T, s3 = {};
    N2.T = s3, Es2(e4, false, t3, n3);
    try {
      var c3 = i3(), l3 = N2.S;
      l3 !== null && l3(s3, c3), typeof c3 == `object` && c3 && typeof c3.then == `function` ? Ts2(e4, t3, sa2(c3, r3), du(e4)) : Ts2(e4, t3, r3, du(e4));
    } catch (n4) {
      Ts2(e4, t3, { then: function() {
      }, status: `rejected`, reason: n4 }, du());
    } finally {
      P2.p = a3, o3 !== null && s3.types !== null && (o3.types = s3.types), N2.T = o3;
    }
  }
  function hs2() {
  }
  function gs2(e4, t3, n3, r3) {
    if (e4.tag !== 5) throw Error(i2(476));
    var a3 = _s2(e4).queue;
    ms2(e4, a3, t3, F2, n3 === null ? hs2 : function() {
      return vs2(e4), n3(r3);
    });
  }
  function _s2(e4) {
    var t3 = e4.memoizedState;
    if (t3 !== null) return t3;
    t3 = { memoizedState: F2, baseState: F2, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Oo2, lastRenderedState: F2 }, next: null };
    var n3 = {};
    return t3.next = { memoizedState: n3, baseState: n3, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Oo2, lastRenderedState: n3 }, next: null }, e4.memoizedState = t3, e4 = e4.alternate, e4 !== null && (e4.memoizedState = t3), t3;
  }
  function vs2(e4) {
    var t3 = _s2(e4);
    t3.next === null && (t3 = e4.alternate.memoizedState), Ts2(e4, t3.next.queue, {}, du());
  }
  function ys2() {
    return Ki2(Qf);
  }
  function bs2() {
    return Co2().memoizedState;
  }
  function xs2() {
    return Co2().memoizedState;
  }
  function Ss2(e4) {
    for (var t3 = e4.return; t3 !== null; ) {
      switch (t3.tag) {
        case 24:
        case 3:
          var n3 = du();
          e4 = Ma2(n3);
          var r3 = Na2(t3, e4, n3);
          r3 !== null && (pu(r3, t3, n3), Pa2(r3, t3, n3)), t3 = { cache: $i2() }, e4.payload = t3;
          return;
      }
      t3 = t3.return;
    }
  }
  function Cs2(e4, t3, n3) {
    var r3 = du();
    n3 = { lane: r3, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null }, Ds2(e4) ? Os2(t3, n3) : (n3 = Kr2(e4, t3, n3, r3), n3 !== null && (pu(n3, e4, r3), ks2(n3, t3, r3)));
  }
  function ws2(e4, t3, n3) {
    Ts2(e4, t3, n3, du());
  }
  function Ts2(e4, t3, n3, r3) {
    var i3 = { lane: r3, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null };
    if (Ds2(e4)) Os2(t3, i3);
    else {
      var a3 = e4.alternate;
      if (e4.lanes === 0 && (a3 === null || a3.lanes === 0) && (a3 = t3.lastRenderedReducer, a3 !== null)) try {
        var o3 = t3.lastRenderedState, s3 = a3(o3, n3);
        if (i3.hasEagerState = true, i3.eagerState = s3, fr2(s3, o3)) return Gr2(e4, t3, i3, 0), Nl === null && Wr2(), false;
      } catch {
      }
      if (n3 = Kr2(e4, t3, i3, r3), n3 !== null) return pu(n3, e4, r3), ks2(n3, t3, r3), true;
    }
    return false;
  }
  function Es2(e4, t3, n3, r3) {
    if (r3 = { lane: 2, revertLane: ud(), gesture: null, action: r3, hasEagerState: false, eagerState: null, next: null }, Ds2(e4)) {
      if (t3) throw Error(i2(479));
    } else t3 = Kr2(e4, n3, r3, 2), t3 !== null && pu(t3, e4, 2);
  }
  function Ds2(e4) {
    var t3 = e4.alternate;
    return e4 === no2 || t3 !== null && t3 === no2;
  }
  function Os2(e4, t3) {
    oo2 = ao2 = true;
    var n3 = e4.pending;
    n3 === null ? t3.next = t3 : (t3.next = n3.next, n3.next = t3), e4.pending = t3;
  }
  function ks2(e4, t3, n3) {
    if (n3 & 4194048) {
      var r3 = t3.lanes;
      r3 &= e4.pendingLanes, n3 |= r3, t3.lanes = n3, We2(e4, n3);
    }
  }
  var As2 = { readContext: Ki2, use: Eo2, useCallback: po2, useContext: po2, useEffect: po2, useImperativeHandle: po2, useLayoutEffect: po2, useInsertionEffect: po2, useMemo: po2, useReducer: po2, useRef: po2, useState: po2, useDebugValue: po2, useDeferredValue: po2, useTransition: po2, useSyncExternalStore: po2, useId: po2, useHostTransitionStatus: po2, useFormState: po2, useActionState: po2, useOptimistic: po2, useMemoCache: po2, useCacheRefresh: po2 };
  As2.useEffectEvent = po2;
  var js2 = { readContext: Ki2, use: Eo2, useCallback: function(e4, t3) {
    return So2().memoizedState = [e4, t3 === void 0 ? null : t3], e4;
  }, useContext: Ki2, useEffect: ts2, useImperativeHandle: function(e4, t3, n3) {
    n3 = n3 == null ? null : n3.concat([e4]), $o2(4194308, 4, ss2.bind(null, t3, e4), n3);
  }, useLayoutEffect: function(e4, t3) {
    return $o2(4194308, 4, e4, t3);
  }, useInsertionEffect: function(e4, t3) {
    $o2(4, 2, e4, t3);
  }, useMemo: function(e4, t3) {
    var n3 = So2();
    t3 = t3 === void 0 ? null : t3;
    var r3 = e4();
    if (so2) {
      De2(true);
      try {
        e4();
      } finally {
        De2(false);
      }
    }
    return n3.memoizedState = [r3, t3], r3;
  }, useReducer: function(e4, t3, n3) {
    var r3 = So2();
    if (n3 !== void 0) {
      var i3 = n3(t3);
      if (so2) {
        De2(true);
        try {
          n3(t3);
        } finally {
          De2(false);
        }
      }
    } else i3 = t3;
    return r3.memoizedState = r3.baseState = i3, e4 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e4, lastRenderedState: i3 }, r3.queue = e4, e4 = e4.dispatch = Cs2.bind(null, no2, e4), [r3.memoizedState, e4];
  }, useRef: function(e4) {
    var t3 = So2();
    return e4 = { current: e4 }, t3.memoizedState = e4;
  }, useState: function(e4) {
    e4 = Z2(e4);
    var t3 = e4.queue, n3 = ws2.bind(null, no2, t3);
    return t3.dispatch = n3, [e4.memoizedState, n3];
  }, useDebugValue: ls2, useDeferredValue: function(e4, t3) {
    return fs2(So2(), e4, t3);
  }, useTransition: function() {
    var e4 = Z2(false);
    return e4 = ms2.bind(null, no2, e4.queue, true, false), So2().memoizedState = e4, [false, e4];
  }, useSyncExternalStore: function(e4, t3, n3) {
    var r3 = no2, a3 = So2();
    if (Ti2) {
      if (n3 === void 0) throw Error(i2(407));
      n3 = n3();
    } else {
      if (n3 = t3(), Nl === null) throw Error(i2(349));
      Fl & 127 || No2(r3, t3, n3);
    }
    a3.memoizedState = n3;
    var o3 = { value: n3, getSnapshot: t3 };
    return a3.queue = o3, ts2(Fo2.bind(null, r3, o3, e4), [e4]), r3.flags |= 2048, Zo2(9, { destroy: void 0 }, Po2.bind(null, r3, o3, n3, t3), null), n3;
  }, useId: function() {
    var e4 = So2(), t3 = Nl.identifierPrefix;
    if (Ti2) {
      var n3 = _i2, r3 = gi2;
      n3 = (r3 & ~(1 << 32 - Oe2(r3) - 1)).toString(32) + n3, t3 = `_` + t3 + `R_` + n3, n3 = co2++, 0 < n3 && (t3 += `H` + n3.toString(32)), t3 += `_`;
    } else n3 = fo2++, t3 = `_` + t3 + `r_` + n3.toString(32) + `_`;
    return e4.memoizedState = t3;
  }, useHostTransitionStatus: ys2, useFormState: Ko2, useActionState: Ko2, useOptimistic: function(e4) {
    var t3 = So2();
    t3.memoizedState = t3.baseState = e4;
    var n3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t3.queue = n3, t3 = Es2.bind(null, no2, true, n3), n3.dispatch = t3, [e4, t3];
  }, useMemoCache: Do2, useCacheRefresh: function() {
    return So2().memoizedState = Ss2.bind(null, no2);
  }, useEffectEvent: function(e4) {
    var t3 = So2(), n3 = { impl: e4 };
    return t3.memoizedState = n3, function() {
      if (Q & 2) throw Error(i2(440));
      return n3.impl.apply(void 0, arguments);
    };
  } }, Ms2 = { readContext: Ki2, use: Eo2, useCallback: us2, useContext: Ki2, useEffect: ns2, useImperativeHandle: cs2, useInsertionEffect: as2, useLayoutEffect: os2, useMemo: ds2, useReducer: ko2, useRef: Qo2, useState: function() {
    return ko2(Oo2);
  }, useDebugValue: ls2, useDeferredValue: function(e4, t3) {
    return ps2(Co2(), ro2.memoizedState, e4, t3);
  }, useTransition: function() {
    var e4 = ko2(Oo2)[0], t3 = Co2().memoizedState;
    return [typeof e4 == `boolean` ? e4 : To2(e4), t3];
  }, useSyncExternalStore: Mo2, useId: bs2, useHostTransitionStatus: ys2, useFormState: qo2, useActionState: qo2, useOptimistic: function(e4, t3) {
    return Ro2(Co2(), ro2, e4, t3);
  }, useMemoCache: Do2, useCacheRefresh: xs2 };
  Ms2.useEffectEvent = is2;
  var Ns2 = { readContext: Ki2, use: Eo2, useCallback: us2, useContext: Ki2, useEffect: ns2, useImperativeHandle: cs2, useInsertionEffect: as2, useLayoutEffect: os2, useMemo: ds2, useReducer: jo2, useRef: Qo2, useState: function() {
    return jo2(Oo2);
  }, useDebugValue: ls2, useDeferredValue: function(e4, t3) {
    var n3 = Co2();
    return ro2 === null ? fs2(n3, e4, t3) : ps2(n3, ro2.memoizedState, e4, t3);
  }, useTransition: function() {
    var e4 = jo2(Oo2)[0], t3 = Co2().memoizedState;
    return [typeof e4 == `boolean` ? e4 : To2(e4), t3];
  }, useSyncExternalStore: Mo2, useId: bs2, useHostTransitionStatus: ys2, useFormState: Xo2, useActionState: Xo2, useOptimistic: function(e4, t3) {
    var n3 = Co2();
    return ro2 === null ? (n3.baseState = e4, [e4, n3.queue.dispatch]) : Ro2(n3, ro2, e4, t3);
  }, useMemoCache: Do2, useCacheRefresh: xs2 };
  Ns2.useEffectEvent = is2;
  function Ps2(e4, t3, n3, r3) {
    t3 = e4.memoizedState, n3 = n3(r3, t3), n3 = n3 == null ? t3 : f2({}, t3, n3), e4.memoizedState = n3, e4.lanes === 0 && (e4.updateQueue.baseState = n3);
  }
  var Fs2 = { enqueueSetState: function(e4, t3, n3) {
    e4 = e4._reactInternals;
    var r3 = du(), i3 = Ma2(r3);
    i3.payload = t3, n3 != null && (i3.callback = n3), t3 = Na2(e4, i3, r3), t3 !== null && (pu(t3, e4, r3), Pa2(t3, e4, r3));
  }, enqueueReplaceState: function(e4, t3, n3) {
    e4 = e4._reactInternals;
    var r3 = du(), i3 = Ma2(r3);
    i3.tag = 1, i3.payload = t3, n3 != null && (i3.callback = n3), t3 = Na2(e4, i3, r3), t3 !== null && (pu(t3, e4, r3), Pa2(t3, e4, r3));
  }, enqueueForceUpdate: function(e4, t3) {
    e4 = e4._reactInternals;
    var n3 = du(), r3 = Ma2(n3);
    r3.tag = 2, t3 != null && (r3.callback = t3), t3 = Na2(e4, r3, n3), t3 !== null && (pu(t3, e4, n3), Pa2(t3, e4, n3));
  } };
  function Is2(e4, t3, n3, r3, i3, a3, o3) {
    return e4 = e4.stateNode, typeof e4.shouldComponentUpdate == `function` ? e4.shouldComponentUpdate(r3, a3, o3) : t3.prototype && t3.prototype.isPureReactComponent ? !pr2(n3, r3) || !pr2(i3, a3) : true;
  }
  function Ls2(e4, t3, n3, r3) {
    e4 = t3.state, typeof t3.componentWillReceiveProps == `function` && t3.componentWillReceiveProps(n3, r3), typeof t3.UNSAFE_componentWillReceiveProps == `function` && t3.UNSAFE_componentWillReceiveProps(n3, r3), t3.state !== e4 && Fs2.enqueueReplaceState(t3, t3.state, null);
  }
  function Rs2(e4, t3) {
    var n3 = t3;
    if (`ref` in t3) for (var r3 in n3 = {}, t3) r3 !== `ref` && (n3[r3] = t3[r3]);
    if (e4 = e4.defaultProps) for (var i3 in n3 === t3 && (n3 = f2({}, n3)), e4) n3[i3] === void 0 && (n3[i3] = e4[i3]);
    return n3;
  }
  function zs2(e4) {
    Br2(e4);
  }
  function Bs2(e4) {
    console.error(e4);
  }
  function Vs2(e4) {
    Br2(e4);
  }
  function Hs2(e4, t3) {
    try {
      var n3 = e4.onUncaughtError;
      n3(t3.value, { componentStack: t3.stack });
    } catch (e5) {
      setTimeout(function() {
        throw e5;
      });
    }
  }
  function Us2(e4, t3, n3) {
    try {
      var r3 = e4.onCaughtError;
      r3(n3.value, { componentStack: n3.stack, errorBoundary: t3.tag === 1 ? t3.stateNode : null });
    } catch (e5) {
      setTimeout(function() {
        throw e5;
      });
    }
  }
  function Ws2(e4, t3, n3) {
    return n3 = Ma2(n3), n3.tag = 3, n3.payload = { element: null }, n3.callback = function() {
      Hs2(e4, t3);
    }, n3;
  }
  function Gs2(e4) {
    return e4 = Ma2(e4), e4.tag = 3, e4;
  }
  function Ks2(e4, t3, n3, r3) {
    var i3 = n3.type.getDerivedStateFromError;
    if (typeof i3 == `function`) {
      var a3 = r3.value;
      e4.payload = function() {
        return i3(a3);
      }, e4.callback = function() {
        Us2(t3, n3, r3);
      };
    }
    var o3 = n3.stateNode;
    o3 !== null && typeof o3.componentDidCatch == `function` && (e4.callback = function() {
      Us2(t3, n3, r3), typeof i3 != `function` && (tu === null ? tu = /* @__PURE__ */ new Set([this]) : tu.add(this));
      var e5 = r3.stack;
      this.componentDidCatch(r3.value, { componentStack: e5 === null ? `` : e5 });
    });
  }
  function qs2(e4, t3, n3, r3, a3) {
    if (n3.flags |= 32768, typeof r3 == `object` && r3 && typeof r3.then == `function`) {
      if (t3 = n3.alternate, t3 !== null && Ui(t3, n3, a3, true), n3 = Ka2.current, n3 !== null) {
        switch (n3.tag) {
          case 31:
          case 13:
            return qa2 === null ? Tu() : n3.alternate === null && Hl === 0 && (Hl = 3), n3.flags &= -257, n3.flags |= 65536, n3.lanes = a3, r3 === ha2 ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? n3.updateQueue = /* @__PURE__ */ new Set([r3]) : t3.add(r3), Wu(e4, r3, a3)), false;
          case 22:
            return n3.flags |= 65536, r3 === ha2 ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? (t3 = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r3]) }, n3.updateQueue = t3) : (n3 = t3.retryQueue, n3 === null ? t3.retryQueue = /* @__PURE__ */ new Set([r3]) : n3.add(r3)), Wu(e4, r3, a3)), false;
        }
        throw Error(i2(435, n3.tag));
      }
      return Wu(e4, r3, a3), Tu(), false;
    }
    if (Ti2) return t3 = Ka2.current, t3 === null ? (r3 !== Oi2 && (t3 = Error(i2(423), { cause: r3 }), Fi2(ci2(t3, n3))), e4 = e4.current.alternate, e4.flags |= 65536, a3 &= -a3, e4.lanes |= a3, r3 = ci2(r3, n3), a3 = Ws2(e4.stateNode, r3, a3), Fa2(e4, a3), Hl !== 4 && (Hl = 2)) : (!(t3.flags & 65536) && (t3.flags |= 256), t3.flags |= 65536, t3.lanes = a3, r3 !== Oi2 && (e4 = Error(i2(422), { cause: r3 }), Fi2(ci2(e4, n3)))), false;
    var o3 = Error(i2(520), { cause: r3 });
    if (o3 = ci2(o3, n3), Jl === null ? Jl = [o3] : Jl.push(o3), Hl !== 4 && (Hl = 2), t3 === null) return true;
    r3 = ci2(r3, n3), n3 = t3;
    do {
      switch (n3.tag) {
        case 3:
          return n3.flags |= 65536, e4 = a3 & -a3, n3.lanes |= e4, e4 = Ws2(n3.stateNode, r3, e4), Fa2(n3, e4), false;
        case 1:
          if (t3 = n3.type, o3 = n3.stateNode, !(n3.flags & 128) && (typeof t3.getDerivedStateFromError == `function` || o3 !== null && typeof o3.componentDidCatch == `function` && (tu === null || !tu.has(o3)))) return n3.flags |= 65536, a3 &= -a3, n3.lanes |= a3, a3 = Gs2(a3), Ks2(a3, e4, n3, r3), Fa2(n3, a3), false;
      }
      n3 = n3.return;
    } while (n3 !== null);
    return false;
  }
  var Js2 = Error(i2(461)), Ys2 = false;
  function Xs2(e4, t3, n3, r3) {
    t3.child = e4 === null ? Oa2(t3, null, n3, r3) : Da2(t3, e4.child, n3, r3);
  }
  function Zs2(e4, t3, n3, r3, i3) {
    n3 = n3.render;
    var a3 = t3.ref;
    if (`ref` in r3) {
      var o3 = {};
      for (var s3 in r3) s3 !== `ref` && (o3[s3] = r3[s3]);
    } else o3 = r3;
    return Gi(t3), r3 = ho2(e4, t3, n3, o3, a3, i3), s3 = yo2(), e4 !== null && !Ys2 ? (bo2(e4, t3, i3), xc2(e4, t3, i3)) : (Ti2 && s3 && bi2(t3), t3.flags |= 1, Xs2(e4, t3, r3, i3), t3.child);
  }
  function Qs2(e4, t3, n3, r3, i3) {
    if (e4 === null) {
      var a3 = n3.type;
      return typeof a3 == `function` && !$r2(a3) && a3.defaultProps === void 0 && n3.compare === null ? (t3.tag = 15, t3.type = a3, $s2(e4, t3, a3, r3, i3)) : (e4 = ni2(n3.type, null, r3, t3, t3.mode, i3), e4.ref = t3.ref, e4.return = t3, t3.child = e4);
    }
    if (a3 = e4.child, !Sc2(e4, i3)) {
      var o3 = a3.memoizedProps;
      if (n3 = n3.compare, n3 = n3 === null ? pr2 : n3, n3(o3, r3) && e4.ref === t3.ref) return xc2(e4, t3, i3);
    }
    return t3.flags |= 1, e4 = ei2(a3, r3), e4.ref = t3.ref, e4.return = t3, t3.child = e4;
  }
  function $s2(e4, t3, n3, r3, i3) {
    if (e4 !== null) {
      var a3 = e4.memoizedProps;
      if (pr2(a3, r3) && e4.ref === t3.ref) {
        if (Ys2 = false, t3.pendingProps = r3 = a3, Sc2(e4, i3)) e4.flags & 131072 && (Ys2 = true);
        else return t3.lanes = e4.lanes, xc2(e4, t3, i3);
      }
    }
    return sc2(e4, t3, n3, r3, i3);
  }
  function ec2(e4, t3, n3, r3) {
    var i3 = r3.children, a3 = e4 === null ? null : e4.memoizedState;
    if (e4 === null && t3.stateNode === null && (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r3.mode === `hidden`) {
      if (t3.flags & 128) {
        if (a3 = a3 === null ? n3 : a3.baseLanes | n3, e4 !== null) {
          for (r3 = t3.child = e4.child, i3 = 0; r3 !== null; ) i3 = i3 | r3.lanes | r3.childLanes, r3 = r3.sibling;
          r3 = i3 & ~a3;
        } else r3 = 0, t3.child = null;
        return nc2(e4, t3, a3, n3, r3);
      }
      if (n3 & 536870912) t3.memoizedState = { baseLanes: 0, cachePool: null }, e4 !== null && da2(t3, a3 === null ? null : a3.cachePool), a3 === null ? Wa2() : Ua2(t3, a3), Xa2(t3);
      else return r3 = t3.lanes = 536870912, nc2(e4, t3, a3 === null ? n3 : a3.baseLanes | n3, n3, r3);
    } else a3 === null ? (e4 !== null && da2(t3, null), Wa2(), Za2(t3)) : (da2(t3, a3.cachePool), Ua2(t3, a3), Za2(t3), t3.memoizedState = null);
    return Xs2(e4, t3, i3, n3), t3.child;
  }
  function tc2(e4, t3) {
    return e4 !== null && e4.tag === 22 || t3.stateNode !== null || (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t3.sibling;
  }
  function nc2(e4, t3, n3, r3, i3) {
    var a3 = ua2();
    return a3 = a3 === null ? null : { parent: Qi2._currentValue, pool: a3 }, t3.memoizedState = { baseLanes: n3, cachePool: a3 }, e4 !== null && da2(t3, null), Wa2(), Xa2(t3), e4 !== null && Ui(e4, t3, r3, true), t3.childLanes = i3, null;
  }
  function rc2(e4, t3) {
    return t3 = gc2({ mode: t3.mode, children: t3.children }, e4.mode), t3.ref = e4.ref, e4.child = t3, t3.return = e4, t3;
  }
  function ic2(e4, t3, n3) {
    return Da2(t3, e4.child, null, n3), e4 = rc2(t3, t3.pendingProps), e4.flags |= 2, Qa2(t3), t3.memoizedState = null, e4;
  }
  function ac2(e4, t3, n3) {
    var r3 = t3.pendingProps, a3 = !!(t3.flags & 128);
    if (t3.flags &= -129, e4 === null) {
      if (Ti2) {
        if (r3.mode === `hidden`) return e4 = rc2(t3, r3), t3.lanes = 536870912, tc2(null, e4);
        if (Ya2(t3), (e4 = wi2) ? (e4 = rf(e4, Di2), e4 = e4 !== null && e4.data === `&` ? e4 : null, e4 !== null && (t3.memoizedState = { dehydrated: e4, treeContext: hi2 === null ? null : { id: gi2, overflow: _i2 }, retryLane: 536870912, hydrationErrors: null }, n3 = ai2(e4), n3.return = t3, t3.child = n3, Ci2 = t3, wi2 = null)) : e4 = null, e4 === null) throw ki2(t3);
        return t3.lanes = 536870912, null;
      }
      return rc2(t3, r3);
    }
    var o3 = e4.memoizedState;
    if (o3 !== null) {
      var s3 = o3.dehydrated;
      if (Ya2(t3), a3) {
        if (t3.flags & 256) t3.flags &= -257, t3 = ic2(e4, t3, n3);
        else if (t3.memoizedState !== null) t3.child = e4.child, t3.flags |= 128, t3 = null;
        else throw Error(i2(558));
      } else if (Ys2 || Ui(e4, t3, n3, false), a3 = (n3 & e4.childLanes) !== 0, Ys2 || a3) {
        if (r3 = Nl, r3 !== null && (s3 = J2(r3, n3), s3 !== 0 && s3 !== o3.retryLane)) throw o3.retryLane = s3, qr2(e4, s3), pu(r3, e4, s3), Js2;
        Tu(), t3 = ic2(e4, t3, n3);
      } else e4 = o3.treeContext, wi2 = cf(s3.nextSibling), Ci2 = t3, Ti2 = true, Ei2 = null, Di2 = false, e4 !== null && Si2(t3, e4), t3 = rc2(t3, r3), t3.flags |= 4096;
      return t3;
    }
    return e4 = ei2(e4.child, { mode: r3.mode, children: r3.children }), e4.ref = t3.ref, t3.child = e4, e4.return = t3, e4;
  }
  function oc2(e4, t3) {
    var n3 = t3.ref;
    if (n3 === null) e4 !== null && e4.ref !== null && (t3.flags |= 4194816);
    else {
      if (typeof n3 != `function` && typeof n3 != `object`) throw Error(i2(284));
      (e4 === null || e4.ref !== n3) && (t3.flags |= 4194816);
    }
  }
  function sc2(e4, t3, n3, r3, i3) {
    return Gi(t3), n3 = ho2(e4, t3, n3, r3, void 0, i3), r3 = yo2(), e4 !== null && !Ys2 ? (bo2(e4, t3, i3), xc2(e4, t3, i3)) : (Ti2 && r3 && bi2(t3), t3.flags |= 1, Xs2(e4, t3, n3, i3), t3.child);
  }
  function cc2(e4, t3, n3, r3, i3, a3) {
    return Gi(t3), t3.updateQueue = null, n3 = _o2(t3, r3, n3, i3), go2(e4), r3 = yo2(), e4 !== null && !Ys2 ? (bo2(e4, t3, a3), xc2(e4, t3, a3)) : (Ti2 && r3 && bi2(t3), t3.flags |= 1, Xs2(e4, t3, n3, a3), t3.child);
  }
  function lc2(e4, t3, n3, r3, i3) {
    if (Gi(t3), t3.stateNode === null) {
      var a3 = Xr2, o3 = n3.contextType;
      typeof o3 == `object` && o3 && (a3 = Ki2(o3)), a3 = new n3(r3, a3), t3.memoizedState = a3.state !== null && a3.state !== void 0 ? a3.state : null, a3.updater = Fs2, t3.stateNode = a3, a3._reactInternals = t3, a3 = t3.stateNode, a3.props = r3, a3.state = t3.memoizedState, a3.refs = {}, Aa2(t3), o3 = n3.contextType, a3.context = typeof o3 == `object` && o3 ? Ki2(o3) : Xr2, a3.state = t3.memoizedState, o3 = n3.getDerivedStateFromProps, typeof o3 == `function` && (Ps2(t3, n3, o3, r3), a3.state = t3.memoizedState), typeof n3.getDerivedStateFromProps == `function` || typeof a3.getSnapshotBeforeUpdate == `function` || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (o3 = a3.state, typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount(), o3 !== a3.state && Fs2.enqueueReplaceState(a3, a3.state, null), Ra2(t3, r3, a3, i3), La2(), a3.state = t3.memoizedState), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = true;
    } else if (e4 === null) {
      a3 = t3.stateNode;
      var s3 = t3.memoizedProps, c3 = Rs2(n3, s3);
      a3.props = c3;
      var l3 = a3.context, u3 = n3.contextType;
      o3 = Xr2, typeof u3 == `object` && u3 && (o3 = Ki2(u3));
      var d3 = n3.getDerivedStateFromProps;
      u3 = typeof d3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`, s3 = t3.pendingProps !== s3, u3 || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (s3 || l3 !== o3) && Ls2(t3, a3, r3, o3), ka2 = false;
      var f3 = t3.memoizedState;
      a3.state = f3, Ra2(t3, r3, a3, i3), La2(), l3 = t3.memoizedState, s3 || f3 !== l3 || ka2 ? (typeof d3 == `function` && (Ps2(t3, n3, d3, r3), l3 = t3.memoizedState), (c3 = ka2 || Is2(t3, n3, c3, r3, f3, l3, o3)) ? (u3 || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount()), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308)) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), t3.memoizedProps = r3, t3.memoizedState = l3), a3.props = r3, a3.state = l3, a3.context = o3, r3 = c3) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = false);
    } else {
      a3 = t3.stateNode, ja2(e4, t3), o3 = t3.memoizedProps, u3 = Rs2(n3, o3), a3.props = u3, d3 = t3.pendingProps, f3 = a3.context, l3 = n3.contextType, c3 = Xr2, typeof l3 == `object` && l3 && (c3 = Ki2(l3)), s3 = n3.getDerivedStateFromProps, (l3 = typeof s3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`) || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (o3 !== d3 || f3 !== c3) && Ls2(t3, a3, r3, c3), ka2 = false, f3 = t3.memoizedState, a3.state = f3, Ra2(t3, r3, a3, i3), La2();
      var p3 = t3.memoizedState;
      o3 !== d3 || f3 !== p3 || ka2 || e4 !== null && e4.dependencies !== null && Wi(e4.dependencies) ? (typeof s3 == `function` && (Ps2(t3, n3, s3, r3), p3 = t3.memoizedState), (u3 = ka2 || Is2(t3, n3, u3, r3, f3, p3, c3) || e4 !== null && e4.dependencies !== null && Wi(e4.dependencies)) ? (l3 || typeof a3.UNSAFE_componentWillUpdate != `function` && typeof a3.componentWillUpdate != `function` || (typeof a3.componentWillUpdate == `function` && a3.componentWillUpdate(r3, p3, c3), typeof a3.UNSAFE_componentWillUpdate == `function` && a3.UNSAFE_componentWillUpdate(r3, p3, c3)), typeof a3.componentDidUpdate == `function` && (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate == `function` && (t3.flags |= 1024)) : (typeof a3.componentDidUpdate != `function` || o3 === e4.memoizedProps && f3 === e4.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o3 === e4.memoizedProps && f3 === e4.memoizedState || (t3.flags |= 1024), t3.memoizedProps = r3, t3.memoizedState = p3), a3.props = r3, a3.state = p3, a3.context = c3, r3 = u3) : (typeof a3.componentDidUpdate != `function` || o3 === e4.memoizedProps && f3 === e4.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o3 === e4.memoizedProps && f3 === e4.memoizedState || (t3.flags |= 1024), r3 = false);
    }
    return a3 = r3, oc2(e4, t3), r3 = !!(t3.flags & 128), a3 || r3 ? (a3 = t3.stateNode, n3 = r3 && typeof n3.getDerivedStateFromError != `function` ? null : a3.render(), t3.flags |= 1, e4 !== null && r3 ? (t3.child = Da2(t3, e4.child, null, i3), t3.child = Da2(t3, null, n3, i3)) : Xs2(e4, t3, n3, i3), t3.memoizedState = a3.state, e4 = t3.child) : e4 = xc2(e4, t3, i3), e4;
  }
  function uc2(e4, t3, n3, r3) {
    return Ni2(), t3.flags |= 256, Xs2(e4, t3, n3, r3), t3.child;
  }
  var dc2 = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function fc2(e4) {
    return { baseLanes: e4, cachePool: Y2() };
  }
  function pc2(e4, t3, n3) {
    return e4 = e4 === null ? 0 : e4.childLanes & ~n3, t3 && (e4 |= Kl), e4;
  }
  function mc2(e4, t3, n3) {
    var r3 = t3.pendingProps, a3 = false, o3 = !!(t3.flags & 128), s3;
    if ((s3 = o3) || (s3 = e4 !== null && e4.memoizedState === null ? false : !!($a2.current & 2)), s3 && (a3 = true, t3.flags &= -129), s3 = !!(t3.flags & 32), t3.flags &= -33, e4 === null) {
      if (Ti2) {
        if (a3 ? Ja2(t3) : Za2(t3), (e4 = wi2) ? (e4 = rf(e4, Di2), e4 = e4 !== null && e4.data !== `&` ? e4 : null, e4 !== null && (t3.memoizedState = { dehydrated: e4, treeContext: hi2 === null ? null : { id: gi2, overflow: _i2 }, retryLane: 536870912, hydrationErrors: null }, n3 = ai2(e4), n3.return = t3, t3.child = n3, Ci2 = t3, wi2 = null)) : e4 = null, e4 === null) throw ki2(t3);
        return of(e4) ? t3.lanes = 32 : t3.lanes = 536870912, null;
      }
      var c3 = r3.children;
      return r3 = r3.fallback, a3 ? (Za2(t3), a3 = t3.mode, c3 = gc2({ mode: `hidden`, children: c3 }, a3), r3 = ri2(r3, a3, n3, null), c3.return = t3, r3.return = t3, c3.sibling = r3, t3.child = c3, r3 = t3.child, r3.memoizedState = fc2(n3), r3.childLanes = pc2(e4, s3, n3), t3.memoizedState = dc2, tc2(null, r3)) : (Ja2(t3), hc2(t3, c3));
    }
    var l3 = e4.memoizedState;
    if (l3 !== null && (c3 = l3.dehydrated, c3 !== null)) {
      if (o3) t3.flags & 256 ? (Ja2(t3), t3.flags &= -257, t3 = _c2(e4, t3, n3)) : t3.memoizedState === null ? (Za2(t3), c3 = r3.fallback, a3 = t3.mode, r3 = gc2({ mode: `visible`, children: r3.children }, a3), c3 = ri2(c3, a3, n3, null), c3.flags |= 2, r3.return = t3, c3.return = t3, r3.sibling = c3, t3.child = r3, Da2(t3, e4.child, null, n3), r3 = t3.child, r3.memoizedState = fc2(n3), r3.childLanes = pc2(e4, s3, n3), t3.memoizedState = dc2, t3 = tc2(null, r3)) : (Za2(t3), t3.child = e4.child, t3.flags |= 128, t3 = null);
      else if (Ja2(t3), of(c3)) {
        if (s3 = c3.nextSibling && c3.nextSibling.dataset, s3) var u3 = s3.dgst;
        s3 = u3, r3 = Error(i2(419)), r3.stack = ``, r3.digest = s3, Fi2({ value: r3, source: null, stack: null }), t3 = _c2(e4, t3, n3);
      } else if (Ys2 || Ui(e4, t3, n3, false), s3 = (n3 & e4.childLanes) !== 0, Ys2 || s3) {
        if (s3 = Nl, s3 !== null && (r3 = J2(s3, n3), r3 !== 0 && r3 !== l3.retryLane)) throw l3.retryLane = r3, qr2(e4, r3), pu(s3, e4, r3), Js2;
        af(c3) || Tu(), t3 = _c2(e4, t3, n3);
      } else af(c3) ? (t3.flags |= 192, t3.child = e4.child, t3 = null) : (e4 = l3.treeContext, wi2 = cf(c3.nextSibling), Ci2 = t3, Ti2 = true, Ei2 = null, Di2 = false, e4 !== null && Si2(t3, e4), t3 = hc2(t3, r3.children), t3.flags |= 4096);
      return t3;
    }
    return a3 ? (Za2(t3), c3 = r3.fallback, a3 = t3.mode, l3 = e4.child, u3 = l3.sibling, r3 = ei2(l3, { mode: `hidden`, children: r3.children }), r3.subtreeFlags = l3.subtreeFlags & 65011712, u3 === null ? (c3 = ri2(c3, a3, n3, null), c3.flags |= 2) : c3 = ei2(u3, c3), c3.return = t3, r3.return = t3, r3.sibling = c3, t3.child = r3, tc2(null, r3), r3 = t3.child, c3 = e4.child.memoizedState, c3 === null ? c3 = fc2(n3) : (a3 = c3.cachePool, a3 === null ? a3 = Y2() : (l3 = Qi2._currentValue, a3 = a3.parent === l3 ? a3 : { parent: l3, pool: l3 }), c3 = { baseLanes: c3.baseLanes | n3, cachePool: a3 }), r3.memoizedState = c3, r3.childLanes = pc2(e4, s3, n3), t3.memoizedState = dc2, tc2(e4.child, r3)) : (Ja2(t3), n3 = e4.child, e4 = n3.sibling, n3 = ei2(n3, { mode: `visible`, children: r3.children }), n3.return = t3, n3.sibling = null, e4 !== null && (s3 = t3.deletions, s3 === null ? (t3.deletions = [e4], t3.flags |= 16) : s3.push(e4)), t3.child = n3, t3.memoizedState = null, n3);
  }
  function hc2(e4, t3) {
    return t3 = gc2({ mode: `visible`, children: t3 }, e4.mode), t3.return = e4, e4.child = t3;
  }
  function gc2(e4, t3) {
    return e4 = Qr2(22, e4, null, t3), e4.lanes = 0, e4;
  }
  function _c2(e4, t3, n3) {
    return Da2(t3, e4.child, null, n3), e4 = hc2(t3, t3.pendingProps.children), e4.flags |= 2, t3.memoizedState = null, e4;
  }
  function vc2(e4, t3, n3) {
    e4.lanes |= t3;
    var r3 = e4.alternate;
    r3 !== null && (r3.lanes |= t3), Vi(e4.return, t3, n3);
  }
  function yc2(e4, t3, n3, r3, i3, a3) {
    var o3 = e4.memoizedState;
    o3 === null ? e4.memoizedState = { isBackwards: t3, rendering: null, renderingStartTime: 0, last: r3, tail: n3, tailMode: i3, treeForkCount: a3 } : (o3.isBackwards = t3, o3.rendering = null, o3.renderingStartTime = 0, o3.last = r3, o3.tail = n3, o3.tailMode = i3, o3.treeForkCount = a3);
  }
  function bc2(e4, t3, n3) {
    var r3 = t3.pendingProps, i3 = r3.revealOrder, a3 = r3.tail;
    r3 = r3.children;
    var o3 = $a2.current, s3 = !!(o3 & 2);
    if (s3 ? (o3 = o3 & 1 | 2, t3.flags |= 128) : o3 &= 1, z2($a2, o3), Xs2(e4, t3, r3, n3), r3 = Ti2 ? fi2 : 0, !s3 && e4 !== null && e4.flags & 128) a: for (e4 = t3.child; e4 !== null; ) {
      if (e4.tag === 13) e4.memoizedState !== null && vc2(e4, n3, t3);
      else if (e4.tag === 19) vc2(e4, n3, t3);
      else if (e4.child !== null) {
        e4.child.return = e4, e4 = e4.child;
        continue;
      }
      if (e4 === t3) break a;
      for (; e4.sibling === null; ) {
        if (e4.return === null || e4.return === t3) break a;
        e4 = e4.return;
      }
      e4.sibling.return = e4.return, e4 = e4.sibling;
    }
    switch (i3) {
      case `forwards`:
        for (n3 = t3.child, i3 = null; n3 !== null; ) e4 = n3.alternate, e4 !== null && eo2(e4) === null && (i3 = n3), n3 = n3.sibling;
        n3 = i3, n3 === null ? (i3 = t3.child, t3.child = null) : (i3 = n3.sibling, n3.sibling = null), yc2(t3, false, i3, n3, a3, r3);
        break;
      case `backwards`:
      case `unstable_legacy-backwards`:
        for (n3 = null, i3 = t3.child, t3.child = null; i3 !== null; ) {
          if (e4 = i3.alternate, e4 !== null && eo2(e4) === null) {
            t3.child = i3;
            break;
          }
          e4 = i3.sibling, i3.sibling = n3, n3 = i3, i3 = e4;
        }
        yc2(t3, true, n3, null, a3, r3);
        break;
      case `together`:
        yc2(t3, false, null, null, void 0, r3);
        break;
      default:
        t3.memoizedState = null;
    }
    return t3.child;
  }
  function xc2(e4, t3, n3) {
    if (e4 !== null && (t3.dependencies = e4.dependencies), Ul |= t3.lanes, (n3 & t3.childLanes) === 0) {
      if (e4 !== null) {
        if (Ui(e4, t3, n3, false), (n3 & t3.childLanes) === 0) return null;
      } else return null;
    }
    if (e4 !== null && t3.child !== e4.child) throw Error(i2(153));
    if (t3.child !== null) {
      for (e4 = t3.child, n3 = ei2(e4, e4.pendingProps), t3.child = n3, n3.return = t3; e4.sibling !== null; ) e4 = e4.sibling, n3 = n3.sibling = ei2(e4, e4.pendingProps), n3.return = t3;
      n3.sibling = null;
    }
    return t3.child;
  }
  function Sc2(e4, t3) {
    return (e4.lanes & t3) !== 0 || (e4 = e4.dependencies, !!(e4 !== null && Wi(e4)));
  }
  function Cc2(e4, t3, n3) {
    switch (t3.tag) {
      case 3:
        H2(t3, t3.stateNode.containerInfo), zi2(t3, Qi2, e4.memoizedState.cache), Ni2();
        break;
      case 27:
      case 5:
        ie2(t3);
        break;
      case 4:
        H2(t3, t3.stateNode.containerInfo);
        break;
      case 10:
        zi2(t3, t3.type, t3.memoizedProps.value);
        break;
      case 31:
        if (t3.memoizedState !== null) return t3.flags |= 128, Ya2(t3), null;
        break;
      case 13:
        var r3 = t3.memoizedState;
        if (r3 !== null) return r3.dehydrated === null ? (n3 & t3.child.childLanes) === 0 ? (Ja2(t3), e4 = xc2(e4, t3, n3), e4 === null ? null : e4.sibling) : mc2(e4, t3, n3) : (Ja2(t3), t3.flags |= 128, null);
        Ja2(t3);
        break;
      case 19:
        var i3 = !!(e4.flags & 128);
        if (r3 = (n3 & t3.childLanes) !== 0, r3 || (r3 = (Ui(e4, t3, n3, false), (n3 & t3.childLanes) !== 0)), i3) {
          if (r3) return bc2(e4, t3, n3);
          t3.flags |= 128;
        }
        if (i3 = t3.memoizedState, i3 !== null && (i3.rendering = null, i3.tail = null, i3.lastEffect = null), z2($a2, $a2.current), r3) break;
        return null;
      case 22:
        return t3.lanes = 0, ec2(e4, t3, n3, t3.pendingProps);
      case 24:
        zi2(t3, Qi2, e4.memoizedState.cache);
    }
    return xc2(e4, t3, n3);
  }
  function wc2(e4, t3, n3) {
    if (e4 !== null) {
      if (e4.memoizedProps !== t3.pendingProps) Ys2 = true;
      else {
        if (!Sc2(e4, n3) && !(t3.flags & 128)) return Ys2 = false, Cc2(e4, t3, n3);
        Ys2 = !!(e4.flags & 131072);
      }
    } else Ys2 = false, Ti2 && t3.flags & 1048576 && yi2(t3, fi2, t3.index);
    switch (t3.lanes = 0, t3.tag) {
      case 16:
        a: {
          var r3 = t3.pendingProps;
          if (e4 = _a3(t3.elementType), t3.type = e4, typeof e4 == `function`) $r2(e4) ? (r3 = Rs2(e4, r3), t3.tag = 1, t3 = lc2(null, t3, e4, r3, n3)) : (t3.tag = 0, t3 = sc2(null, t3, e4, r3, n3));
          else {
            if (e4 != null) {
              var a3 = e4.$$typeof;
              if (a3 === x2) {
                t3.tag = 11, t3 = Zs2(null, t3, e4, r3, n3);
                break a;
              }
              if (a3 === w2) {
                t3.tag = 14, t3 = Qs2(null, t3, e4, r3, n3);
                break a;
              }
            }
            throw t3 = j2(e4) || e4, Error(i2(306, t3, ``));
          }
        }
        return t3;
      case 0:
        return sc2(e4, t3, t3.type, t3.pendingProps, n3);
      case 1:
        return r3 = t3.type, a3 = Rs2(r3, t3.pendingProps), lc2(e4, t3, r3, a3, n3);
      case 3:
        a: {
          if (H2(t3, t3.stateNode.containerInfo), e4 === null) throw Error(i2(387));
          r3 = t3.pendingProps;
          var o3 = t3.memoizedState;
          a3 = o3.element, ja2(e4, t3), Ra2(t3, r3, null, n3);
          var s3 = t3.memoizedState;
          if (r3 = s3.cache, zi2(t3, Qi2, r3), r3 !== o3.cache && Hi(t3, [Qi2], n3, true), La2(), r3 = s3.element, o3.isDehydrated) {
            if (o3 = { element: r3, isDehydrated: false, cache: s3.cache }, t3.updateQueue.baseState = o3, t3.memoizedState = o3, t3.flags & 256) {
              t3 = uc2(e4, t3, r3, n3);
              break a;
            }
            if (r3 !== a3) {
              a3 = ci2(Error(i2(424)), t3), Fi2(a3), t3 = uc2(e4, t3, r3, n3);
              break a;
            }
            switch (e4 = t3.stateNode.containerInfo, e4.nodeType) {
              case 9:
                e4 = e4.body;
                break;
              default:
                e4 = e4.nodeName === `HTML` ? e4.ownerDocument.body : e4;
            }
            for (wi2 = cf(e4.firstChild), Ci2 = t3, Ti2 = true, Ei2 = null, Di2 = true, n3 = Oa2(t3, null, r3, n3), t3.child = n3; n3; ) n3.flags = n3.flags & -3 | 4096, n3 = n3.sibling;
          } else {
            if (Ni2(), r3 === a3) {
              t3 = xc2(e4, t3, n3);
              break a;
            }
            Xs2(e4, t3, r3, n3);
          }
          t3 = t3.child;
        }
        return t3;
      case 26:
        return oc2(e4, t3), e4 === null ? (n3 = kf(t3.type, null, t3.pendingProps, null)) ? t3.memoizedState = n3 : Ti2 || (n3 = t3.type, e4 = t3.pendingProps, r3 = Bd(V2.current).createElement(n3), r3[Xe2] = t3, r3[Ze2] = e4, Pd(r3, n3, e4), lt2(r3), t3.stateNode = r3) : t3.memoizedState = kf(t3.type, e4.memoizedProps, t3.pendingProps, e4.memoizedState), null;
      case 27:
        return ie2(t3), e4 === null && Ti2 && (r3 = t3.stateNode = ff(t3.type, t3.pendingProps, V2.current), Ci2 = t3, Di2 = true, a3 = wi2, Zd(t3.type) ? (lf = a3, wi2 = cf(r3.firstChild)) : wi2 = a3), Xs2(e4, t3, t3.pendingProps.children, n3), oc2(e4, t3), e4 === null && (t3.flags |= 4194304), t3.child;
      case 5:
        return e4 === null && Ti2 && ((a3 = r3 = wi2) && (r3 = tf(r3, t3.type, t3.pendingProps, Di2), r3 === null ? a3 = false : (t3.stateNode = r3, Ci2 = t3, wi2 = cf(r3.firstChild), Di2 = false, a3 = true)), a3 || ki2(t3)), ie2(t3), a3 = t3.type, o3 = t3.pendingProps, s3 = e4 === null ? null : e4.memoizedProps, r3 = o3.children, Ud(a3, o3) ? r3 = null : s3 !== null && Ud(a3, s3) && (t3.flags |= 32), t3.memoizedState !== null && (a3 = ho2(e4, t3, vo2, null, null, n3), Qf._currentValue = a3), oc2(e4, t3), Xs2(e4, t3, r3, n3), t3.child;
      case 6:
        return e4 === null && Ti2 && ((e4 = n3 = wi2) && (n3 = nf(n3, t3.pendingProps, Di2), n3 === null ? e4 = false : (t3.stateNode = n3, Ci2 = t3, wi2 = null, e4 = true)), e4 || ki2(t3)), null;
      case 13:
        return mc2(e4, t3, n3);
      case 4:
        return H2(t3, t3.stateNode.containerInfo), r3 = t3.pendingProps, e4 === null ? t3.child = Da2(t3, null, r3, n3) : Xs2(e4, t3, r3, n3), t3.child;
      case 11:
        return Zs2(e4, t3, t3.type, t3.pendingProps, n3);
      case 7:
        return Xs2(e4, t3, t3.pendingProps, n3), t3.child;
      case 8:
        return Xs2(e4, t3, t3.pendingProps.children, n3), t3.child;
      case 12:
        return Xs2(e4, t3, t3.pendingProps.children, n3), t3.child;
      case 10:
        return r3 = t3.pendingProps, zi2(t3, t3.type, r3.value), Xs2(e4, t3, r3.children, n3), t3.child;
      case 9:
        return a3 = t3.type._context, r3 = t3.pendingProps.children, Gi(t3), a3 = Ki2(a3), r3 = r3(a3), t3.flags |= 1, Xs2(e4, t3, r3, n3), t3.child;
      case 14:
        return Qs2(e4, t3, t3.type, t3.pendingProps, n3);
      case 15:
        return $s2(e4, t3, t3.type, t3.pendingProps, n3);
      case 19:
        return bc2(e4, t3, n3);
      case 31:
        return ac2(e4, t3, n3);
      case 22:
        return ec2(e4, t3, n3, t3.pendingProps);
      case 24:
        return Gi(t3), r3 = Ki2(Qi2), e4 === null ? (a3 = ua2(), a3 === null && (a3 = Nl, o3 = $i2(), a3.pooledCache = o3, o3.refCount++, o3 !== null && (a3.pooledCacheLanes |= n3), a3 = o3), t3.memoizedState = { parent: r3, cache: a3 }, Aa2(t3), zi2(t3, Qi2, a3)) : ((e4.lanes & n3) !== 0 && (ja2(e4, t3), Ra2(t3, null, null, n3), La2()), a3 = e4.memoizedState, o3 = t3.memoizedState, a3.parent === r3 ? (r3 = o3.cache, zi2(t3, Qi2, r3), r3 !== a3.cache && Hi(t3, [Qi2], n3, true)) : (a3 = { parent: r3, cache: r3 }, t3.memoizedState = a3, t3.lanes === 0 && (t3.memoizedState = t3.updateQueue.baseState = a3), zi2(t3, Qi2, r3))), Xs2(e4, t3, t3.pendingProps.children, n3), t3.child;
      case 29:
        throw t3.pendingProps;
    }
    throw Error(i2(156, t3.tag));
  }
  function Tc2(e4) {
    e4.flags |= 4;
  }
  function Ec2(e4, t3, n3, r3, i3) {
    if ((t3 = !!(e4.mode & 32)) && (t3 = false), t3) {
      if (e4.flags |= 16777216, (i3 & 335544128) === i3) {
        if (e4.stateNode.complete) e4.flags |= 8192;
        else if (Su()) e4.flags |= 8192;
        else throw va2 = ha2, pa2;
      }
    } else e4.flags &= -16777217;
  }
  function Dc2(e4, t3) {
    if (t3.type !== `stylesheet` || t3.state.loading & 4) e4.flags &= -16777217;
    else if (e4.flags |= 16777216, !Wf(t3)) {
      if (Su()) e4.flags |= 8192;
      else throw va2 = ha2, pa2;
    }
  }
  function Oc2(e4, t3) {
    t3 !== null && (e4.flags |= 4), e4.flags & 16384 && (t3 = e4.tag === 22 ? 536870912 : q2(), e4.lanes |= t3, ql |= t3);
  }
  function kc2(e4, t3) {
    if (!Ti2) switch (e4.tailMode) {
      case `hidden`:
        t3 = e4.tail;
        for (var n3 = null; t3 !== null; ) t3.alternate !== null && (n3 = t3), t3 = t3.sibling;
        n3 === null ? e4.tail = null : n3.sibling = null;
        break;
      case `collapsed`:
        n3 = e4.tail;
        for (var r3 = null; n3 !== null; ) n3.alternate !== null && (r3 = n3), n3 = n3.sibling;
        r3 === null ? t3 || e4.tail === null ? e4.tail = null : e4.tail.sibling = null : r3.sibling = null;
    }
  }
  function Ac2(e4) {
    var t3 = e4.alternate !== null && e4.alternate.child === e4.child, n3 = 0, r3 = 0;
    if (t3) for (var i3 = e4.child; i3 !== null; ) n3 |= i3.lanes | i3.childLanes, r3 |= i3.subtreeFlags & 65011712, r3 |= i3.flags & 65011712, i3.return = e4, i3 = i3.sibling;
    else for (i3 = e4.child; i3 !== null; ) n3 |= i3.lanes | i3.childLanes, r3 |= i3.subtreeFlags, r3 |= i3.flags, i3.return = e4, i3 = i3.sibling;
    return e4.subtreeFlags |= r3, e4.childLanes = n3, t3;
  }
  function jc2(e4, t3, n3) {
    var r3 = t3.pendingProps;
    switch (xi2(t3), t3.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ac2(t3), null;
      case 1:
        return Ac2(t3), null;
      case 3:
        return n3 = t3.stateNode, r3 = null, e4 !== null && (r3 = e4.memoizedState.cache), t3.memoizedState.cache !== r3 && (t3.flags |= 2048), Bi(Qi2), re2(), n3.pendingContext && (n3.context = n3.pendingContext, n3.pendingContext = null), (e4 === null || e4.child === null) && (Mi2(t3) ? Tc2(t3) : e4 === null || e4.memoizedState.isDehydrated && !(t3.flags & 256) || (t3.flags |= 1024, Pi2())), Ac2(t3), null;
      case 26:
        var a3 = t3.type, o3 = t3.memoizedState;
        return e4 === null ? (Tc2(t3), o3 === null ? (Ac2(t3), Ec2(t3, a3, null, r3, n3)) : (Ac2(t3), Dc2(t3, o3))) : o3 ? o3 === e4.memoizedState ? (Ac2(t3), t3.flags &= -16777217) : (Tc2(t3), Ac2(t3), Dc2(t3, o3)) : (e4 = e4.memoizedProps, e4 !== r3 && Tc2(t3), Ac2(t3), Ec2(t3, a3, e4, r3, n3)), null;
      case 27:
        if (U2(t3), n3 = V2.current, a3 = t3.type, e4 !== null && t3.stateNode != null) e4.memoizedProps !== r3 && Tc2(t3);
        else {
          if (!r3) {
            if (t3.stateNode === null) throw Error(i2(166));
            return Ac2(t3), null;
          }
          e4 = B2.current, Mi2(t3) ? Ai2(t3, e4) : (e4 = ff(a3, r3, n3), t3.stateNode = e4, Tc2(t3));
        }
        return Ac2(t3), null;
      case 5:
        if (U2(t3), a3 = t3.type, e4 !== null && t3.stateNode != null) e4.memoizedProps !== r3 && Tc2(t3);
        else {
          if (!r3) {
            if (t3.stateNode === null) throw Error(i2(166));
            return Ac2(t3), null;
          }
          if (o3 = B2.current, Mi2(t3)) Ai2(t3, o3);
          else {
            var s3 = Bd(V2.current);
            switch (o3) {
              case 1:
                o3 = s3.createElementNS(`http://www.w3.org/2000/svg`, a3);
                break;
              case 2:
                o3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, a3);
                break;
              default:
                switch (a3) {
                  case `svg`:
                    o3 = s3.createElementNS(`http://www.w3.org/2000/svg`, a3);
                    break;
                  case `math`:
                    o3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, a3);
                    break;
                  case `script`:
                    o3 = s3.createElement(`div`), o3.innerHTML = `<script><\/script>`, o3 = o3.removeChild(o3.firstChild);
                    break;
                  case `select`:
                    o3 = typeof r3.is == `string` ? s3.createElement(`select`, { is: r3.is }) : s3.createElement(`select`), r3.multiple ? o3.multiple = true : r3.size && (o3.size = r3.size);
                    break;
                  default:
                    o3 = typeof r3.is == `string` ? s3.createElement(a3, { is: r3.is }) : s3.createElement(a3);
                }
            }
            o3[Xe2] = t3, o3[Ze2] = r3;
            a: for (s3 = t3.child; s3 !== null; ) {
              if (s3.tag === 5 || s3.tag === 6) o3.appendChild(s3.stateNode);
              else if (s3.tag !== 4 && s3.tag !== 27 && s3.child !== null) {
                s3.child.return = s3, s3 = s3.child;
                continue;
              }
              if (s3 === t3) break a;
              for (; s3.sibling === null; ) {
                if (s3.return === null || s3.return === t3) break a;
                s3 = s3.return;
              }
              s3.sibling.return = s3.return, s3 = s3.sibling;
            }
            t3.stateNode = o3;
            a: switch (Pd(o3, a3, r3), a3) {
              case `button`:
              case `input`:
              case `select`:
              case `textarea`:
                r3 = !!r3.autoFocus;
                break a;
              case `img`:
                r3 = true;
                break a;
              default:
                r3 = false;
            }
            r3 && Tc2(t3);
          }
        }
        return Ac2(t3), Ec2(t3, t3.type, e4 === null ? null : e4.memoizedProps, t3.pendingProps, n3), null;
      case 6:
        if (e4 && t3.stateNode != null) e4.memoizedProps !== r3 && Tc2(t3);
        else {
          if (typeof r3 != `string` && t3.stateNode === null) throw Error(i2(166));
          if (e4 = V2.current, Mi2(t3)) {
            if (e4 = t3.stateNode, n3 = t3.memoizedProps, r3 = null, a3 = Ci2, a3 !== null) switch (a3.tag) {
              case 27:
              case 5:
                r3 = a3.memoizedProps;
            }
            e4[Xe2] = t3, e4 = !!(e4.nodeValue === n3 || r3 !== null && true === r3.suppressHydrationWarning || Md(e4.nodeValue, n3)), e4 || ki2(t3, true);
          } else e4 = Bd(e4).createTextNode(r3), e4[Xe2] = t3, t3.stateNode = e4;
        }
        return Ac2(t3), null;
      case 31:
        if (n3 = t3.memoizedState, e4 === null || e4.memoizedState !== null) {
          if (r3 = Mi2(t3), n3 !== null) {
            if (e4 === null) {
              if (!r3) throw Error(i2(318));
              if (e4 = t3.memoizedState, e4 = e4 === null ? null : e4.dehydrated, !e4) throw Error(i2(557));
              e4[Xe2] = t3;
            } else Ni2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            Ac2(t3), e4 = false;
          } else n3 = Pi2(), e4 !== null && e4.memoizedState !== null && (e4.memoizedState.hydrationErrors = n3), e4 = true;
          if (!e4) return t3.flags & 256 ? (Qa2(t3), t3) : (Qa2(t3), null);
          if (t3.flags & 128) throw Error(i2(558));
        }
        return Ac2(t3), null;
      case 13:
        if (r3 = t3.memoizedState, e4 === null || e4.memoizedState !== null && e4.memoizedState.dehydrated !== null) {
          if (a3 = Mi2(t3), r3 !== null && r3.dehydrated !== null) {
            if (e4 === null) {
              if (!a3) throw Error(i2(318));
              if (a3 = t3.memoizedState, a3 = a3 === null ? null : a3.dehydrated, !a3) throw Error(i2(317));
              a3[Xe2] = t3;
            } else Ni2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            Ac2(t3), a3 = false;
          } else a3 = Pi2(), e4 !== null && e4.memoizedState !== null && (e4.memoizedState.hydrationErrors = a3), a3 = true;
          if (!a3) return t3.flags & 256 ? (Qa2(t3), t3) : (Qa2(t3), null);
        }
        return Qa2(t3), t3.flags & 128 ? (t3.lanes = n3, t3) : (n3 = r3 !== null, e4 = e4 !== null && e4.memoizedState !== null, n3 && (r3 = t3.child, a3 = null, r3.alternate !== null && r3.alternate.memoizedState !== null && r3.alternate.memoizedState.cachePool !== null && (a3 = r3.alternate.memoizedState.cachePool.pool), o3 = null, r3.memoizedState !== null && r3.memoizedState.cachePool !== null && (o3 = r3.memoizedState.cachePool.pool), o3 !== a3 && (r3.flags |= 2048)), n3 !== e4 && n3 && (t3.child.flags |= 8192), Oc2(t3, t3.updateQueue), Ac2(t3), null);
      case 4:
        return re2(), e4 === null && Sd(t3.stateNode.containerInfo), Ac2(t3), null;
      case 10:
        return Bi(t3.type), Ac2(t3), null;
      case 19:
        if (R2($a2), r3 = t3.memoizedState, r3 === null) return Ac2(t3), null;
        if (a3 = !!(t3.flags & 128), o3 = r3.rendering, o3 === null) {
          if (a3) kc2(r3, false);
          else {
            if (Hl !== 0 || e4 !== null && e4.flags & 128) for (e4 = t3.child; e4 !== null; ) {
              if (o3 = eo2(e4), o3 !== null) {
                for (t3.flags |= 128, kc2(r3, false), e4 = o3.updateQueue, t3.updateQueue = e4, Oc2(t3, e4), t3.subtreeFlags = 0, e4 = n3, n3 = t3.child; n3 !== null; ) ti2(n3, e4), n3 = n3.sibling;
                return z2($a2, $a2.current & 1 | 2), Ti2 && vi2(t3, r3.treeForkCount), t3.child;
              }
              e4 = e4.sibling;
            }
            r3.tail !== null && ge2() > $l && (t3.flags |= 128, a3 = true, kc2(r3, false), t3.lanes = 4194304);
          }
        } else {
          if (!a3) {
            if (e4 = eo2(o3), e4 !== null) {
              if (t3.flags |= 128, a3 = true, e4 = e4.updateQueue, t3.updateQueue = e4, Oc2(t3, e4), kc2(r3, true), r3.tail === null && r3.tailMode === `hidden` && !o3.alternate && !Ti2) return Ac2(t3), null;
            } else 2 * ge2() - r3.renderingStartTime > $l && n3 !== 536870912 && (t3.flags |= 128, a3 = true, kc2(r3, false), t3.lanes = 4194304);
          }
          r3.isBackwards ? (o3.sibling = t3.child, t3.child = o3) : (e4 = r3.last, e4 === null ? t3.child = o3 : e4.sibling = o3, r3.last = o3);
        }
        return r3.tail === null ? (Ac2(t3), null) : (e4 = r3.tail, r3.rendering = e4, r3.tail = e4.sibling, r3.renderingStartTime = ge2(), e4.sibling = null, n3 = $a2.current, z2($a2, a3 ? n3 & 1 | 2 : n3 & 1), Ti2 && vi2(t3, r3.treeForkCount), e4);
      case 22:
      case 23:
        return Qa2(t3), Ga2(), r3 = t3.memoizedState !== null, e4 === null ? r3 && (t3.flags |= 8192) : e4.memoizedState !== null !== r3 && (t3.flags |= 8192), r3 ? n3 & 536870912 && !(t3.flags & 128) && (Ac2(t3), t3.subtreeFlags & 6 && (t3.flags |= 8192)) : Ac2(t3), n3 = t3.updateQueue, n3 !== null && Oc2(t3, n3.retryQueue), n3 = null, e4 !== null && e4.memoizedState !== null && e4.memoizedState.cachePool !== null && (n3 = e4.memoizedState.cachePool.pool), r3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (r3 = t3.memoizedState.cachePool.pool), r3 !== n3 && (t3.flags |= 2048), e4 !== null && R2(la2), null;
      case 24:
        return n3 = null, e4 !== null && (n3 = e4.memoizedState.cache), t3.memoizedState.cache !== n3 && (t3.flags |= 2048), Bi(Qi2), Ac2(t3), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i2(156, t3.tag));
  }
  function Mc2(e4, t3) {
    switch (xi2(t3), t3.tag) {
      case 1:
        return e4 = t3.flags, e4 & 65536 ? (t3.flags = e4 & -65537 | 128, t3) : null;
      case 3:
        return Bi(Qi2), re2(), e4 = t3.flags, e4 & 65536 && !(e4 & 128) ? (t3.flags = e4 & -65537 | 128, t3) : null;
      case 26:
      case 27:
      case 5:
        return U2(t3), null;
      case 31:
        if (t3.memoizedState !== null) {
          if (Qa2(t3), t3.alternate === null) throw Error(i2(340));
          Ni2();
        }
        return e4 = t3.flags, e4 & 65536 ? (t3.flags = e4 & -65537 | 128, t3) : null;
      case 13:
        if (Qa2(t3), e4 = t3.memoizedState, e4 !== null && e4.dehydrated !== null) {
          if (t3.alternate === null) throw Error(i2(340));
          Ni2();
        }
        return e4 = t3.flags, e4 & 65536 ? (t3.flags = e4 & -65537 | 128, t3) : null;
      case 19:
        return R2($a2), null;
      case 4:
        return re2(), null;
      case 10:
        return Bi(t3.type), null;
      case 22:
      case 23:
        return Qa2(t3), Ga2(), e4 !== null && R2(la2), e4 = t3.flags, e4 & 65536 ? (t3.flags = e4 & -65537 | 128, t3) : null;
      case 24:
        return Bi(Qi2), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nc2(e4, t3) {
    switch (xi2(t3), t3.tag) {
      case 3:
        Bi(Qi2), re2();
        break;
      case 26:
      case 27:
      case 5:
        U2(t3);
        break;
      case 4:
        re2();
        break;
      case 31:
        t3.memoizedState !== null && Qa2(t3);
        break;
      case 13:
        Qa2(t3);
        break;
      case 19:
        R2($a2);
        break;
      case 10:
        Bi(t3.type);
        break;
      case 22:
      case 23:
        Qa2(t3), Ga2(), e4 !== null && R2(la2);
        break;
      case 24:
        Bi(Qi2);
    }
  }
  function Pc2(e4, t3) {
    try {
      var n3 = t3.updateQueue, r3 = n3 === null ? null : n3.lastEffect;
      if (r3 !== null) {
        var i3 = r3.next;
        n3 = i3;
        do {
          if ((n3.tag & e4) === e4) {
            r3 = void 0;
            var a3 = n3.create, o3 = n3.inst;
            r3 = a3(), o3.destroy = r3;
          }
          n3 = n3.next;
        } while (n3 !== i3);
      }
    } catch (e5) {
      Uu(t3, t3.return, e5);
    }
  }
  function Fc2(e4, t3, n3) {
    try {
      var r3 = t3.updateQueue, i3 = r3 === null ? null : r3.lastEffect;
      if (i3 !== null) {
        var a3 = i3.next;
        r3 = a3;
        do {
          if ((r3.tag & e4) === e4) {
            var o3 = r3.inst, s3 = o3.destroy;
            if (s3 !== void 0) {
              o3.destroy = void 0, i3 = t3;
              var c3 = n3, l3 = s3;
              try {
                l3();
              } catch (e5) {
                Uu(i3, c3, e5);
              }
            }
          }
          r3 = r3.next;
        } while (r3 !== a3);
      }
    } catch (e5) {
      Uu(t3, t3.return, e5);
    }
  }
  function Ic2(e4) {
    var t3 = e4.updateQueue;
    if (t3 !== null) {
      var n3 = e4.stateNode;
      try {
        Ba2(t3, n3);
      } catch (t4) {
        Uu(e4, e4.return, t4);
      }
    }
  }
  function Lc2(e4, t3, n3) {
    n3.props = Rs2(e4.type, e4.memoizedProps), n3.state = e4.memoizedState;
    try {
      n3.componentWillUnmount();
    } catch (n4) {
      Uu(e4, t3, n4);
    }
  }
  function Rc2(e4, t3) {
    try {
      var n3 = e4.ref;
      if (n3 !== null) {
        switch (e4.tag) {
          case 26:
          case 27:
          case 5:
            var r3 = e4.stateNode;
            break;
          case 30:
            r3 = e4.stateNode;
            break;
          default:
            r3 = e4.stateNode;
        }
        typeof n3 == `function` ? e4.refCleanup = n3(r3) : n3.current = r3;
      }
    } catch (n4) {
      Uu(e4, t3, n4);
    }
  }
  function zc2(e4, t3) {
    var n3 = e4.ref, r3 = e4.refCleanup;
    if (n3 !== null) {
      if (typeof r3 == `function`) try {
        r3();
      } catch (n4) {
        Uu(e4, t3, n4);
      } finally {
        e4.refCleanup = null, e4 = e4.alternate, e4 != null && (e4.refCleanup = null);
      }
      else if (typeof n3 == `function`) try {
        n3(null);
      } catch (n4) {
        Uu(e4, t3, n4);
      }
      else n3.current = null;
    }
  }
  function Bc2(e4) {
    var t3 = e4.type, n3 = e4.memoizedProps, r3 = e4.stateNode;
    try {
      a: switch (t3) {
        case `button`:
        case `input`:
        case `select`:
        case `textarea`:
          n3.autoFocus && r3.focus();
          break a;
        case `img`:
          n3.src ? r3.src = n3.src : n3.srcSet && (r3.srcset = n3.srcSet);
      }
    } catch (t4) {
      Uu(e4, e4.return, t4);
    }
  }
  function Vc2(e4, t3, n3) {
    try {
      var r3 = e4.stateNode;
      Fd(r3, e4.type, n3, t3), r3[Ze2] = t3;
    } catch (t4) {
      Uu(e4, e4.return, t4);
    }
  }
  function Hc2(e4) {
    return e4.tag === 5 || e4.tag === 3 || e4.tag === 26 || e4.tag === 27 && Zd(e4.type) || e4.tag === 4;
  }
  function Uc2(e4) {
    a: for (; ; ) {
      for (; e4.sibling === null; ) {
        if (e4.return === null || Hc2(e4.return)) return null;
        e4 = e4.return;
      }
      for (e4.sibling.return = e4.return, e4 = e4.sibling; e4.tag !== 5 && e4.tag !== 6 && e4.tag !== 18; ) {
        if (e4.tag === 27 && Zd(e4.type) || e4.flags & 2 || e4.child === null || e4.tag === 4) continue a;
        e4.child.return = e4, e4 = e4.child;
      }
      if (!(e4.flags & 2)) return e4.stateNode;
    }
  }
  function Wc2(e4, t3, n3) {
    var r3 = e4.tag;
    if (r3 === 5 || r3 === 6) e4 = e4.stateNode, t3 ? (n3.nodeType === 9 ? n3.body : n3.nodeName === `HTML` ? n3.ownerDocument.body : n3).insertBefore(e4, t3) : (t3 = n3.nodeType === 9 ? n3.body : n3.nodeName === `HTML` ? n3.ownerDocument.body : n3, t3.appendChild(e4), n3 = n3._reactRootContainer, n3 != null || t3.onclick !== null || (t3.onclick = Ut2));
    else if (r3 !== 4 && (r3 === 27 && Zd(e4.type) && (n3 = e4.stateNode, t3 = null), e4 = e4.child, e4 !== null)) for (Wc2(e4, t3, n3), e4 = e4.sibling; e4 !== null; ) Wc2(e4, t3, n3), e4 = e4.sibling;
  }
  function Gc2(e4, t3, n3) {
    var r3 = e4.tag;
    if (r3 === 5 || r3 === 6) e4 = e4.stateNode, t3 ? n3.insertBefore(e4, t3) : n3.appendChild(e4);
    else if (r3 !== 4 && (r3 === 27 && Zd(e4.type) && (n3 = e4.stateNode), e4 = e4.child, e4 !== null)) for (Gc2(e4, t3, n3), e4 = e4.sibling; e4 !== null; ) Gc2(e4, t3, n3), e4 = e4.sibling;
  }
  function Kc2(e4) {
    var t3 = e4.stateNode, n3 = e4.memoizedProps;
    try {
      for (var r3 = e4.type, i3 = t3.attributes; i3.length; ) t3.removeAttributeNode(i3[0]);
      Pd(t3, r3, n3), t3[Xe2] = e4, t3[Ze2] = n3;
    } catch (t4) {
      Uu(e4, e4.return, t4);
    }
  }
  var qc2 = false, Jc2 = false, Yc2 = false, Xc2 = typeof WeakSet == `function` ? WeakSet : Set, Zc2 = null;
  function Qc2(e4, t3) {
    if (e4 = e4.containerInfo, Rd = sp, e4 = _r2(e4), vr2(e4)) {
      if (`selectionStart` in e4) var n3 = { start: e4.selectionStart, end: e4.selectionEnd };
      else a: {
        n3 = (n3 = e4.ownerDocument) && n3.defaultView || window;
        var r3 = n3.getSelection && n3.getSelection();
        if (r3 && r3.rangeCount !== 0) {
          n3 = r3.anchorNode;
          var a3 = r3.anchorOffset, o3 = r3.focusNode;
          r3 = r3.focusOffset;
          try {
            n3.nodeType, o3.nodeType;
          } catch {
            n3 = null;
            break a;
          }
          var s3 = 0, c3 = -1, l3 = -1, u3 = 0, d3 = 0, f3 = e4, p3 = null;
          b: for (; ; ) {
            for (var m3; f3 !== n3 || a3 !== 0 && f3.nodeType !== 3 || (c3 = s3 + a3), f3 !== o3 || r3 !== 0 && f3.nodeType !== 3 || (l3 = s3 + r3), f3.nodeType === 3 && (s3 += f3.nodeValue.length), (m3 = f3.firstChild) !== null; ) p3 = f3, f3 = m3;
            for (; ; ) {
              if (f3 === e4) break b;
              if (p3 === n3 && ++u3 === a3 && (c3 = s3), p3 === o3 && ++d3 === r3 && (l3 = s3), (m3 = f3.nextSibling) !== null) break;
              f3 = p3, p3 = f3.parentNode;
            }
            f3 = m3;
          }
          n3 = c3 === -1 || l3 === -1 ? null : { start: c3, end: l3 };
        } else n3 = null;
      }
      n3 || (n3 = { start: 0, end: 0 });
    } else n3 = null;
    for (zd = { focusedElem: e4, selectionRange: n3 }, sp = false, Zc2 = t3; Zc2 !== null; ) if (t3 = Zc2, e4 = t3.child, t3.subtreeFlags & 1028 && e4 !== null) e4.return = t3, Zc2 = e4;
    else for (; Zc2 !== null; ) {
      switch (t3 = Zc2, o3 = t3.alternate, e4 = t3.flags, t3.tag) {
        case 0:
          if (e4 & 4 && (e4 = t3.updateQueue, e4 = e4 === null ? null : e4.events, e4 !== null)) for (n3 = 0; n3 < e4.length; n3++) a3 = e4[n3], a3.ref.impl = a3.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if (e4 & 1024 && o3 !== null) {
            e4 = void 0, n3 = t3, a3 = o3.memoizedProps, o3 = o3.memoizedState, r3 = n3.stateNode;
            try {
              var h3 = Rs2(n3.type, a3);
              e4 = r3.getSnapshotBeforeUpdate(h3, o3), r3.__reactInternalSnapshotBeforeUpdate = e4;
            } catch (e5) {
              Uu(n3, n3.return, e5);
            }
          }
          break;
        case 3:
          if (e4 & 1024) {
            if (e4 = t3.stateNode.containerInfo, n3 = e4.nodeType, n3 === 9) ef(e4);
            else if (n3 === 1) switch (e4.nodeName) {
              case `HEAD`:
              case `HTML`:
              case `BODY`:
                ef(e4);
                break;
              default:
                e4.textContent = ``;
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
          if (e4 & 1024) throw Error(i2(163));
      }
      if (e4 = t3.sibling, e4 !== null) {
        e4.return = t3.return, Zc2 = e4;
        break;
      }
      Zc2 = t3.return;
    }
  }
  function $c2(e4, t3, n3) {
    var r3 = n3.flags;
    switch (n3.tag) {
      case 0:
      case 11:
      case 15:
        ml(e4, n3), r3 & 4 && Pc2(5, n3);
        break;
      case 1:
        if (ml(e4, n3), r3 & 4) {
          if (e4 = n3.stateNode, t3 === null) try {
            e4.componentDidMount();
          } catch (e5) {
            Uu(n3, n3.return, e5);
          }
          else {
            var i3 = Rs2(n3.type, t3.memoizedProps);
            t3 = t3.memoizedState;
            try {
              e4.componentDidUpdate(i3, t3, e4.__reactInternalSnapshotBeforeUpdate);
            } catch (e5) {
              Uu(n3, n3.return, e5);
            }
          }
        }
        r3 & 64 && Ic2(n3), r3 & 512 && Rc2(n3, n3.return);
        break;
      case 3:
        if (ml(e4, n3), r3 & 64 && (e4 = n3.updateQueue, e4 !== null)) {
          if (t3 = null, n3.child !== null) switch (n3.child.tag) {
            case 27:
            case 5:
              t3 = n3.child.stateNode;
              break;
            case 1:
              t3 = n3.child.stateNode;
          }
          try {
            Ba2(e4, t3);
          } catch (e5) {
            Uu(n3, n3.return, e5);
          }
        }
        break;
      case 27:
        t3 === null && r3 & 4 && Kc2(n3);
      case 26:
      case 5:
        ml(e4, n3), t3 === null && r3 & 4 && Bc2(n3), r3 & 512 && Rc2(n3, n3.return);
        break;
      case 12:
        ml(e4, n3);
        break;
      case 31:
        ml(e4, n3), r3 & 4 && al(e4, n3);
        break;
      case 13:
        ml(e4, n3), r3 & 4 && ol(e4, n3), r3 & 64 && (e4 = n3.memoizedState, e4 !== null && (e4 = e4.dehydrated, e4 !== null && (n3 = qu.bind(null, n3), sf(e4, n3))));
        break;
      case 22:
        if (r3 = n3.memoizedState !== null || qc2, !r3) {
          t3 = t3 !== null && t3.memoizedState !== null || Jc2, i3 = qc2;
          var a3 = Jc2;
          qc2 = r3, (Jc2 = t3) && !a3 ? gl(e4, n3, !!(n3.subtreeFlags & 8772)) : ml(e4, n3), qc2 = i3, Jc2 = a3;
        }
        break;
      case 30:
        break;
      default:
        ml(e4, n3);
    }
  }
  function el2(e4) {
    var t3 = e4.alternate;
    t3 !== null && (e4.alternate = null, el2(t3)), e4.child = null, e4.deletions = null, e4.sibling = null, e4.tag === 5 && (t3 = e4.stateNode, t3 !== null && it2(t3)), e4.stateNode = null, e4.return = null, e4.dependencies = null, e4.memoizedProps = null, e4.memoizedState = null, e4.pendingProps = null, e4.stateNode = null, e4.updateQueue = null;
  }
  var tl2 = null, nl2 = false;
  function rl2(e4, t3, n3) {
    for (n3 = n3.child; n3 !== null; ) il(e4, t3, n3), n3 = n3.sibling;
  }
  function il(e4, t3, n3) {
    if (Ee2 && typeof Ee2.onCommitFiberUnmount == `function`) try {
      Ee2.onCommitFiberUnmount(Te2, n3);
    } catch {
    }
    switch (n3.tag) {
      case 26:
        Jc2 || zc2(n3, t3), rl2(e4, t3, n3), n3.memoizedState ? n3.memoizedState.count-- : n3.stateNode && (n3 = n3.stateNode, n3.parentNode.removeChild(n3));
        break;
      case 27:
        Jc2 || zc2(n3, t3);
        var r3 = tl2, i3 = nl2;
        Zd(n3.type) && (tl2 = n3.stateNode, nl2 = false), rl2(e4, t3, n3), pf(n3.stateNode), tl2 = r3, nl2 = i3;
        break;
      case 5:
        Jc2 || zc2(n3, t3);
      case 6:
        if (r3 = tl2, i3 = nl2, tl2 = null, rl2(e4, t3, n3), tl2 = r3, nl2 = i3, tl2 !== null) {
          if (nl2) try {
            (tl2.nodeType === 9 ? tl2.body : tl2.nodeName === `HTML` ? tl2.ownerDocument.body : tl2).removeChild(n3.stateNode);
          } catch (e5) {
            Uu(n3, t3, e5);
          }
          else try {
            tl2.removeChild(n3.stateNode);
          } catch (e5) {
            Uu(n3, t3, e5);
          }
        }
        break;
      case 18:
        tl2 !== null && (nl2 ? (e4 = tl2, Qd(e4.nodeType === 9 ? e4.body : e4.nodeName === `HTML` ? e4.ownerDocument.body : e4, n3.stateNode), Np(e4)) : Qd(tl2, n3.stateNode));
        break;
      case 4:
        r3 = tl2, i3 = nl2, tl2 = n3.stateNode.containerInfo, nl2 = true, rl2(e4, t3, n3), tl2 = r3, nl2 = i3;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Fc2(2, n3, t3), Jc2 || Fc2(4, n3, t3), rl2(e4, t3, n3);
        break;
      case 1:
        Jc2 || (zc2(n3, t3), r3 = n3.stateNode, typeof r3.componentWillUnmount == `function` && Lc2(n3, t3, r3)), rl2(e4, t3, n3);
        break;
      case 21:
        rl2(e4, t3, n3);
        break;
      case 22:
        Jc2 = (r3 = Jc2) || n3.memoizedState !== null, rl2(e4, t3, n3), Jc2 = r3;
        break;
      default:
        rl2(e4, t3, n3);
    }
  }
  function al(e4, t3) {
    if (t3.memoizedState === null && (e4 = t3.alternate, e4 !== null && (e4 = e4.memoizedState, e4 !== null))) {
      e4 = e4.dehydrated;
      try {
        Np(e4);
      } catch (e5) {
        Uu(t3, t3.return, e5);
      }
    }
  }
  function ol(e4, t3) {
    if (t3.memoizedState === null && (e4 = t3.alternate, e4 !== null && (e4 = e4.memoizedState, e4 !== null && (e4 = e4.dehydrated, e4 !== null)))) try {
      Np(e4);
    } catch (e5) {
      Uu(t3, t3.return, e5);
    }
  }
  function sl(e4) {
    switch (e4.tag) {
      case 31:
      case 13:
      case 19:
        var t3 = e4.stateNode;
        return t3 === null && (t3 = e4.stateNode = new Xc2()), t3;
      case 22:
        return e4 = e4.stateNode, t3 = e4._retryCache, t3 === null && (t3 = e4._retryCache = new Xc2()), t3;
      default:
        throw Error(i2(435, e4.tag));
    }
  }
  function cl(e4, t3) {
    var n3 = sl(e4);
    t3.forEach(function(t4) {
      if (!n3.has(t4)) {
        n3.add(t4);
        var r3 = Ju.bind(null, e4, t4);
        t4.then(r3, r3);
      }
    });
  }
  function ll(e4, t3) {
    var n3 = t3.deletions;
    if (n3 !== null) for (var r3 = 0; r3 < n3.length; r3++) {
      var a3 = n3[r3], o3 = e4, s3 = t3, c3 = s3;
      a: for (; c3 !== null; ) {
        switch (c3.tag) {
          case 27:
            if (Zd(c3.type)) {
              tl2 = c3.stateNode, nl2 = false;
              break a;
            }
            break;
          case 5:
            tl2 = c3.stateNode, nl2 = false;
            break a;
          case 3:
          case 4:
            tl2 = c3.stateNode.containerInfo, nl2 = true;
            break a;
        }
        c3 = c3.return;
      }
      if (tl2 === null) throw Error(i2(160));
      il(o3, s3, a3), tl2 = null, nl2 = false, o3 = a3.alternate, o3 !== null && (o3.return = null), a3.return = null;
    }
    if (t3.subtreeFlags & 13886) for (t3 = t3.child; t3 !== null; ) dl(t3, e4), t3 = t3.sibling;
  }
  var ul = null;
  function dl(e4, t3) {
    var n3 = e4.alternate, r3 = e4.flags;
    switch (e4.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ll(t3, e4), fl(e4), r3 & 4 && (Fc2(3, e4, e4.return), Pc2(3, e4), Fc2(5, e4, e4.return));
        break;
      case 1:
        ll(t3, e4), fl(e4), r3 & 512 && (Jc2 || n3 === null || zc2(n3, n3.return)), r3 & 64 && qc2 && (e4 = e4.updateQueue, e4 !== null && (r3 = e4.callbacks, r3 !== null && (n3 = e4.shared.hiddenCallbacks, e4.shared.hiddenCallbacks = n3 === null ? r3 : n3.concat(r3))));
        break;
      case 26:
        var a3 = ul;
        if (ll(t3, e4), fl(e4), r3 & 512 && (Jc2 || n3 === null || zc2(n3, n3.return)), r3 & 4) {
          var o3 = n3 === null ? null : n3.memoizedState;
          if (r3 = e4.memoizedState, n3 === null) {
            if (r3 === null) {
              if (e4.stateNode === null) {
                a: {
                  r3 = e4.type, n3 = e4.memoizedProps, a3 = a3.ownerDocument || a3;
                  b: switch (r3) {
                    case `title`:
                      o3 = a3.getElementsByTagName(`title`)[0], (!o3 || o3[rt2] || o3[Xe2] || o3.namespaceURI === `http://www.w3.org/2000/svg` || o3.hasAttribute(`itemprop`)) && (o3 = a3.createElement(r3), a3.head.insertBefore(o3, a3.querySelector(`head > title`))), Pd(o3, r3, n3), o3[Xe2] = e4, lt2(o3), r3 = o3;
                      break a;
                    case `link`:
                      var s3 = Vf(`link`, `href`, a3).get(r3 + (n3.href || ``));
                      if (s3) {
                        for (var c3 = 0; c3 < s3.length; c3++) if (o3 = s3[c3], o3.getAttribute(`href`) === (n3.href == null || n3.href === `` ? null : n3.href) && o3.getAttribute(`rel`) === (n3.rel == null ? null : n3.rel) && o3.getAttribute(`title`) === (n3.title == null ? null : n3.title) && o3.getAttribute(`crossorigin`) === (n3.crossOrigin == null ? null : n3.crossOrigin)) {
                          s3.splice(c3, 1);
                          break b;
                        }
                      }
                      o3 = a3.createElement(r3), Pd(o3, r3, n3), a3.head.appendChild(o3);
                      break;
                    case `meta`:
                      if (s3 = Vf(`meta`, `content`, a3).get(r3 + (n3.content || ``))) {
                        for (c3 = 0; c3 < s3.length; c3++) if (o3 = s3[c3], o3.getAttribute(`content`) === (n3.content == null ? null : `` + n3.content) && o3.getAttribute(`name`) === (n3.name == null ? null : n3.name) && o3.getAttribute(`property`) === (n3.property == null ? null : n3.property) && o3.getAttribute(`http-equiv`) === (n3.httpEquiv == null ? null : n3.httpEquiv) && o3.getAttribute(`charset`) === (n3.charSet == null ? null : n3.charSet)) {
                          s3.splice(c3, 1);
                          break b;
                        }
                      }
                      o3 = a3.createElement(r3), Pd(o3, r3, n3), a3.head.appendChild(o3);
                      break;
                    default:
                      throw Error(i2(468, r3));
                  }
                  o3[Xe2] = e4, lt2(o3), r3 = o3;
                }
                e4.stateNode = r3;
              } else Hf(a3, e4.type, e4.stateNode);
            } else e4.stateNode = If(a3, r3, e4.memoizedProps);
          } else o3 === r3 ? r3 === null && e4.stateNode !== null && Vc2(e4, e4.memoizedProps, n3.memoizedProps) : (o3 === null ? n3.stateNode !== null && (n3 = n3.stateNode, n3.parentNode.removeChild(n3)) : o3.count--, r3 === null ? Hf(a3, e4.type, e4.stateNode) : If(a3, r3, e4.memoizedProps));
        }
        break;
      case 27:
        ll(t3, e4), fl(e4), r3 & 512 && (Jc2 || n3 === null || zc2(n3, n3.return)), n3 !== null && r3 & 4 && Vc2(e4, e4.memoizedProps, n3.memoizedProps);
        break;
      case 5:
        if (ll(t3, e4), fl(e4), r3 & 512 && (Jc2 || n3 === null || zc2(n3, n3.return)), e4.flags & 32) {
          a3 = e4.stateNode;
          try {
            Ft2(a3, ``);
          } catch (t4) {
            Uu(e4, e4.return, t4);
          }
        }
        r3 & 4 && e4.stateNode != null && (a3 = e4.memoizedProps, Vc2(e4, a3, n3 === null ? a3 : n3.memoizedProps)), r3 & 1024 && (Yc2 = true);
        break;
      case 6:
        if (ll(t3, e4), fl(e4), r3 & 4) {
          if (e4.stateNode === null) throw Error(i2(162));
          r3 = e4.memoizedProps, n3 = e4.stateNode;
          try {
            n3.nodeValue = r3;
          } catch (t4) {
            Uu(e4, e4.return, t4);
          }
        }
        break;
      case 3:
        if (Bf = null, a3 = ul, ul = gf(t3.containerInfo), ll(t3, e4), ul = a3, fl(e4), r3 & 4 && n3 !== null && n3.memoizedState.isDehydrated) try {
          Np(t3.containerInfo);
        } catch (t4) {
          Uu(e4, e4.return, t4);
        }
        Yc2 && (Yc2 = false, pl(e4));
        break;
      case 4:
        r3 = ul, ul = gf(e4.stateNode.containerInfo), ll(t3, e4), fl(e4), ul = r3;
        break;
      case 12:
        ll(t3, e4), fl(e4);
        break;
      case 31:
        ll(t3, e4), fl(e4), r3 & 4 && (r3 = e4.updateQueue, r3 !== null && (e4.updateQueue = null, cl(e4, r3)));
        break;
      case 13:
        ll(t3, e4), fl(e4), e4.child.flags & 8192 && e4.memoizedState !== null != (n3 !== null && n3.memoizedState !== null) && (Zl = ge2()), r3 & 4 && (r3 = e4.updateQueue, r3 !== null && (e4.updateQueue = null, cl(e4, r3)));
        break;
      case 22:
        a3 = e4.memoizedState !== null;
        var l3 = n3 !== null && n3.memoizedState !== null, u3 = qc2, d3 = Jc2;
        if (qc2 = u3 || a3, Jc2 = d3 || l3, ll(t3, e4), Jc2 = d3, qc2 = u3, fl(e4), r3 & 8192) a: for (t3 = e4.stateNode, t3._visibility = a3 ? t3._visibility & -2 : t3._visibility | 1, a3 && (n3 === null || l3 || qc2 || Jc2 || hl(e4)), n3 = null, t3 = e4; ; ) {
          if (t3.tag === 5 || t3.tag === 26) {
            if (n3 === null) {
              l3 = n3 = t3;
              try {
                if (o3 = l3.stateNode, a3) s3 = o3.style, typeof s3.setProperty == `function` ? s3.setProperty(`display`, `none`, `important`) : s3.display = `none`;
                else {
                  c3 = l3.stateNode;
                  var f3 = l3.memoizedProps.style, p3 = f3 != null && f3.hasOwnProperty(`display`) ? f3.display : null;
                  c3.style.display = p3 == null || typeof p3 == `boolean` ? `` : (`` + p3).trim();
                }
              } catch (e5) {
                Uu(l3, l3.return, e5);
              }
            }
          } else if (t3.tag === 6) {
            if (n3 === null) {
              l3 = t3;
              try {
                l3.stateNode.nodeValue = a3 ? `` : l3.memoizedProps;
              } catch (e5) {
                Uu(l3, l3.return, e5);
              }
            }
          } else if (t3.tag === 18) {
            if (n3 === null) {
              l3 = t3;
              try {
                var m3 = l3.stateNode;
                a3 ? $d(m3, true) : $d(l3.stateNode, false);
              } catch (e5) {
                Uu(l3, l3.return, e5);
              }
            }
          } else if ((t3.tag !== 22 && t3.tag !== 23 || t3.memoizedState === null || t3 === e4) && t3.child !== null) {
            t3.child.return = t3, t3 = t3.child;
            continue;
          }
          if (t3 === e4) break a;
          for (; t3.sibling === null; ) {
            if (t3.return === null || t3.return === e4) break a;
            n3 === t3 && (n3 = null), t3 = t3.return;
          }
          n3 === t3 && (n3 = null), t3.sibling.return = t3.return, t3 = t3.sibling;
        }
        r3 & 4 && (r3 = e4.updateQueue, r3 !== null && (n3 = r3.retryQueue, n3 !== null && (r3.retryQueue = null, cl(e4, n3))));
        break;
      case 19:
        ll(t3, e4), fl(e4), r3 & 4 && (r3 = e4.updateQueue, r3 !== null && (e4.updateQueue = null, cl(e4, r3)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ll(t3, e4), fl(e4);
    }
  }
  function fl(e4) {
    var t3 = e4.flags;
    if (t3 & 2) {
      try {
        for (var n3, r3 = e4.return; r3 !== null; ) {
          if (Hc2(r3)) {
            n3 = r3;
            break;
          }
          r3 = r3.return;
        }
        if (n3 == null) throw Error(i2(160));
        switch (n3.tag) {
          case 27:
            var a3 = n3.stateNode;
            Gc2(e4, Uc2(e4), a3);
            break;
          case 5:
            var o3 = n3.stateNode;
            n3.flags & 32 && (Ft2(o3, ``), n3.flags &= -33), Gc2(e4, Uc2(e4), o3);
            break;
          case 3:
          case 4:
            var s3 = n3.stateNode.containerInfo;
            Wc2(e4, Uc2(e4), s3);
            break;
          default:
            throw Error(i2(161));
        }
      } catch (t4) {
        Uu(e4, e4.return, t4);
      }
      e4.flags &= -3;
    }
    t3 & 4096 && (e4.flags &= -4097);
  }
  function pl(e4) {
    if (e4.subtreeFlags & 1024) for (e4 = e4.child; e4 !== null; ) {
      var t3 = e4;
      pl(t3), t3.tag === 5 && t3.flags & 1024 && t3.stateNode.reset(), e4 = e4.sibling;
    }
  }
  function ml(e4, t3) {
    if (t3.subtreeFlags & 8772) for (t3 = t3.child; t3 !== null; ) $c2(e4, t3.alternate, t3), t3 = t3.sibling;
  }
  function hl(e4) {
    for (e4 = e4.child; e4 !== null; ) {
      var t3 = e4;
      switch (t3.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fc2(4, t3, t3.return), hl(t3);
          break;
        case 1:
          zc2(t3, t3.return);
          var n3 = t3.stateNode;
          typeof n3.componentWillUnmount == `function` && Lc2(t3, t3.return, n3), hl(t3);
          break;
        case 27:
          pf(t3.stateNode);
        case 26:
        case 5:
          zc2(t3, t3.return), hl(t3);
          break;
        case 22:
          t3.memoizedState === null && hl(t3);
          break;
        case 30:
          hl(t3);
          break;
        default:
          hl(t3);
      }
      e4 = e4.sibling;
    }
  }
  function gl(e4, t3, n3) {
    for (n3 && (n3 = !!(t3.subtreeFlags & 8772)), t3 = t3.child; t3 !== null; ) {
      var r3 = t3.alternate, i3 = e4, a3 = t3, o3 = a3.flags;
      switch (a3.tag) {
        case 0:
        case 11:
        case 15:
          gl(i3, a3, n3), Pc2(4, a3);
          break;
        case 1:
          if (gl(i3, a3, n3), r3 = a3, i3 = r3.stateNode, typeof i3.componentDidMount == `function`) try {
            i3.componentDidMount();
          } catch (e5) {
            Uu(r3, r3.return, e5);
          }
          if (r3 = a3, i3 = r3.updateQueue, i3 !== null) {
            var s3 = r3.stateNode;
            try {
              var c3 = i3.shared.hiddenCallbacks;
              if (c3 !== null) for (i3.shared.hiddenCallbacks = null, i3 = 0; i3 < c3.length; i3++) za2(c3[i3], s3);
            } catch (e5) {
              Uu(r3, r3.return, e5);
            }
          }
          n3 && o3 & 64 && Ic2(a3), Rc2(a3, a3.return);
          break;
        case 27:
          Kc2(a3);
        case 26:
        case 5:
          gl(i3, a3, n3), n3 && r3 === null && o3 & 4 && Bc2(a3), Rc2(a3, a3.return);
          break;
        case 12:
          gl(i3, a3, n3);
          break;
        case 31:
          gl(i3, a3, n3), n3 && o3 & 4 && al(i3, a3);
          break;
        case 13:
          gl(i3, a3, n3), n3 && o3 & 4 && ol(i3, a3);
          break;
        case 22:
          a3.memoizedState === null && gl(i3, a3, n3), Rc2(a3, a3.return);
          break;
        case 30:
          break;
        default:
          gl(i3, a3, n3);
      }
      t3 = t3.sibling;
    }
  }
  function _l(e4, t3) {
    var n3 = null;
    e4 !== null && e4.memoizedState !== null && e4.memoizedState.cachePool !== null && (n3 = e4.memoizedState.cachePool.pool), e4 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (e4 = t3.memoizedState.cachePool.pool), e4 !== n3 && (e4 != null && e4.refCount++, n3 != null && ea2(n3));
  }
  function vl(e4, t3) {
    e4 = null, t3.alternate !== null && (e4 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e4 && (t3.refCount++, e4 != null && ea2(e4));
  }
  function yl(e4, t3, n3, r3) {
    if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) bl(e4, t3, n3, r3), t3 = t3.sibling;
  }
  function bl(e4, t3, n3, r3) {
    var i3 = t3.flags;
    switch (t3.tag) {
      case 0:
      case 11:
      case 15:
        yl(e4, t3, n3, r3), i3 & 2048 && Pc2(9, t3);
        break;
      case 1:
        yl(e4, t3, n3, r3);
        break;
      case 3:
        yl(e4, t3, n3, r3), i3 & 2048 && (e4 = null, t3.alternate !== null && (e4 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e4 && (t3.refCount++, e4 != null && ea2(e4)));
        break;
      case 12:
        if (i3 & 2048) {
          yl(e4, t3, n3, r3), e4 = t3.stateNode;
          try {
            var a3 = t3.memoizedProps, o3 = a3.id, s3 = a3.onPostCommit;
            typeof s3 == `function` && s3(o3, t3.alternate === null ? `mount` : `update`, e4.passiveEffectDuration, -0);
          } catch (e5) {
            Uu(t3, t3.return, e5);
          }
        } else yl(e4, t3, n3, r3);
        break;
      case 31:
        yl(e4, t3, n3, r3);
        break;
      case 13:
        yl(e4, t3, n3, r3);
        break;
      case 23:
        break;
      case 22:
        a3 = t3.stateNode, o3 = t3.alternate, t3.memoizedState === null ? a3._visibility & 2 ? yl(e4, t3, n3, r3) : (a3._visibility |= 2, xl(e4, t3, n3, r3, !!(t3.subtreeFlags & 10256) || false)) : a3._visibility & 2 ? yl(e4, t3, n3, r3) : Sl(e4, t3), i3 & 2048 && _l(o3, t3);
        break;
      case 24:
        yl(e4, t3, n3, r3), i3 & 2048 && vl(t3.alternate, t3);
        break;
      default:
        yl(e4, t3, n3, r3);
    }
  }
  function xl(e4, t3, n3, r3, i3) {
    for (i3 && (i3 = !!(t3.subtreeFlags & 10256) || false), t3 = t3.child; t3 !== null; ) {
      var a3 = e4, o3 = t3, s3 = n3, c3 = r3, l3 = o3.flags;
      switch (o3.tag) {
        case 0:
        case 11:
        case 15:
          xl(a3, o3, s3, c3, i3), Pc2(8, o3);
          break;
        case 23:
          break;
        case 22:
          var u3 = o3.stateNode;
          o3.memoizedState === null ? (u3._visibility |= 2, xl(a3, o3, s3, c3, i3)) : u3._visibility & 2 ? xl(a3, o3, s3, c3, i3) : Sl(a3, o3), i3 && l3 & 2048 && _l(o3.alternate, o3);
          break;
        case 24:
          xl(a3, o3, s3, c3, i3), i3 && l3 & 2048 && vl(o3.alternate, o3);
          break;
        default:
          xl(a3, o3, s3, c3, i3);
      }
      t3 = t3.sibling;
    }
  }
  function Sl(e4, t3) {
    if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) {
      var n3 = e4, r3 = t3, i3 = r3.flags;
      switch (r3.tag) {
        case 22:
          Sl(n3, r3), i3 & 2048 && _l(r3.alternate, r3);
          break;
        case 24:
          Sl(n3, r3), i3 & 2048 && vl(r3.alternate, r3);
          break;
        default:
          Sl(n3, r3);
      }
      t3 = t3.sibling;
    }
  }
  var Cl = 8192;
  function wl(e4, t3, n3) {
    if (e4.subtreeFlags & Cl) for (e4 = e4.child; e4 !== null; ) Tl(e4, t3, n3), e4 = e4.sibling;
  }
  function Tl(e4, t3, n3) {
    switch (e4.tag) {
      case 26:
        wl(e4, t3, n3), e4.flags & Cl && e4.memoizedState !== null && Gf(n3, ul, e4.memoizedState, e4.memoizedProps);
        break;
      case 5:
        wl(e4, t3, n3);
        break;
      case 3:
      case 4:
        var r3 = ul;
        ul = gf(e4.stateNode.containerInfo), wl(e4, t3, n3), ul = r3;
        break;
      case 22:
        e4.memoizedState === null && (r3 = e4.alternate, r3 !== null && r3.memoizedState !== null ? (r3 = Cl, Cl = 16777216, wl(e4, t3, n3), Cl = r3) : wl(e4, t3, n3));
        break;
      default:
        wl(e4, t3, n3);
    }
  }
  function El(e4) {
    var t3 = e4.alternate;
    if (t3 !== null && (e4 = t3.child, e4 !== null)) {
      t3.child = null;
      do
        t3 = e4.sibling, e4.sibling = null, e4 = t3;
      while (e4 !== null);
    }
  }
  function Dl(e4) {
    var t3 = e4.deletions;
    if (e4.flags & 16) {
      if (t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        Zc2 = r3, Al(r3, e4);
      }
      El(e4);
    }
    if (e4.subtreeFlags & 10256) for (e4 = e4.child; e4 !== null; ) Ol(e4), e4 = e4.sibling;
  }
  function Ol(e4) {
    switch (e4.tag) {
      case 0:
      case 11:
      case 15:
        Dl(e4), e4.flags & 2048 && Fc2(9, e4, e4.return);
        break;
      case 3:
        Dl(e4);
        break;
      case 12:
        Dl(e4);
        break;
      case 22:
        var t3 = e4.stateNode;
        e4.memoizedState !== null && t3._visibility & 2 && (e4.return === null || e4.return.tag !== 13) ? (t3._visibility &= -3, kl(e4)) : Dl(e4);
        break;
      default:
        Dl(e4);
    }
  }
  function kl(e4) {
    var t3 = e4.deletions;
    if (e4.flags & 16) {
      if (t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        Zc2 = r3, Al(r3, e4);
      }
      El(e4);
    }
    for (e4 = e4.child; e4 !== null; ) {
      switch (t3 = e4, t3.tag) {
        case 0:
        case 11:
        case 15:
          Fc2(8, t3, t3.return), kl(t3);
          break;
        case 22:
          n3 = t3.stateNode, n3._visibility & 2 && (n3._visibility &= -3, kl(t3));
          break;
        default:
          kl(t3);
      }
      e4 = e4.sibling;
    }
  }
  function Al(e4, t3) {
    for (; Zc2 !== null; ) {
      var n3 = Zc2;
      switch (n3.tag) {
        case 0:
        case 11:
        case 15:
          Fc2(8, n3, t3);
          break;
        case 23:
        case 22:
          if (n3.memoizedState !== null && n3.memoizedState.cachePool !== null) {
            var r3 = n3.memoizedState.cachePool.pool;
            r3 != null && r3.refCount++;
          }
          break;
        case 24:
          ea2(n3.memoizedState.cache);
      }
      if (r3 = n3.child, r3 !== null) r3.return = n3, Zc2 = r3;
      else a: for (n3 = e4; Zc2 !== null; ) {
        r3 = Zc2;
        var i3 = r3.sibling, a3 = r3.return;
        if (el2(r3), r3 === n3) {
          Zc2 = null;
          break a;
        }
        if (i3 !== null) {
          i3.return = a3, Zc2 = i3;
          break a;
        }
        Zc2 = a3;
      }
    }
  }
  var jl = { getCacheForType: function(e4) {
    var t3 = Ki2(Qi2), n3 = t3.data.get(e4);
    return n3 === void 0 && (n3 = e4(), t3.data.set(e4, n3)), n3;
  }, cacheSignal: function() {
    return Ki2(Qi2).controller.signal;
  } }, Ml = typeof WeakMap == `function` ? WeakMap : Map, Q = 0, Nl = null, Pl = null, Fl = 0, Il = 0, Ll = null, Rl = false, zl = false, Bl = false, Vl = 0, Hl = 0, Ul = 0, Wl = 0, Gl = 0, Kl = 0, ql = 0, Jl = null, Yl = null, Xl = false, Zl = 0, Ql = 0, $l = 1 / 0, eu = null, tu = null, nu = 0, ru = null, iu = null, au = 0, ou = 0, su = null, cu = null, lu = 0, uu = null;
  function du() {
    return Q & 2 && Fl !== 0 ? Fl & -Fl : N2.T === null ? qe2() : ud();
  }
  function fu() {
    if (Kl === 0) {
      if (!(Fl & 536870912) || Ti2) {
        var e4 = Ne2;
        Ne2 <<= 1, !(Ne2 & 3932160) && (Ne2 = 262144), Kl = e4;
      } else Kl = 536870912;
    }
    return e4 = Ka2.current, e4 !== null && (e4.flags |= 32), Kl;
  }
  function pu(e4, t3, n3) {
    (e4 === Nl && (Il === 2 || Il === 9) || e4.cancelPendingCommit !== null) && (bu(e4, 0), _u(e4, Fl, Kl, false)), ze2(e4, n3), Q & 2 && e4 === Nl || (e4 === Nl && (!(Q & 2) && (Wl |= n3), Hl === 4 && _u(e4, Fl, Kl, false)), nd(e4));
  }
  function mu(e4, t3, n3) {
    if (Q & 6) throw Error(i2(327));
    var r3 = !n3 && !(t3 & 127) && (t3 & e4.expiredLanes) === 0 || Fe2(e4, t3), a3 = r3 ? Ou(e4, t3) : Eu(e4, t3, true), o3 = r3;
    do {
      if (a3 === 0) {
        zl && !r3 && _u(e4, t3, 0, false);
        break;
      }
      if (n3 = e4.current.alternate, o3 && !gu(n3)) a3 = Eu(e4, t3, false), o3 = false;
      else {
        if (a3 === 2) {
          if (o3 = t3, e4.errorRecoveryDisabledLanes & o3) var s3 = 0;
          else s3 = e4.pendingLanes & -536870913, s3 = s3 === 0 ? s3 & 536870912 ? 536870912 : 0 : s3;
          if (s3 !== 0) {
            t3 = s3;
            a: {
              var c3 = e4;
              a3 = Jl;
              var l3 = c3.current.memoizedState.isDehydrated;
              if (l3 && (bu(c3, s3).flags |= 256), s3 = Eu(c3, s3, false), s3 !== 2) {
                if (Bl && !l3) {
                  c3.errorRecoveryDisabledLanes |= o3, Wl |= o3, a3 = 4;
                  break a;
                }
                o3 = Yl, Yl = a3, o3 !== null && (Yl === null ? Yl = o3 : Yl.push.apply(Yl, o3));
              }
              a3 = s3;
            }
            if (o3 = false, a3 !== 2) continue;
          }
        }
        if (a3 === 1) {
          bu(e4, 0), _u(e4, t3, 0, true);
          break;
        }
        a: {
          switch (r3 = e4, o3 = a3, o3) {
            case 0:
            case 1:
              throw Error(i2(345));
            case 4:
              if ((t3 & 4194048) !== t3) break;
            case 6:
              _u(r3, t3, Kl, !Rl);
              break a;
            case 2:
              Yl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i2(329));
          }
          if ((t3 & 62914560) === t3 && (a3 = Zl + 300 - ge2(), 10 < a3)) {
            if (_u(r3, t3, Kl, !Rl), Pe2(r3, 0, true) !== 0) break a;
            au = t3, r3.timeoutHandle = Kd(hu.bind(null, r3, n3, Yl, eu, Xl, t3, Kl, Wl, ql, Rl, o3, `Throttled`, -0, 0), a3);
            break a;
          }
          hu(r3, n3, Yl, eu, Xl, t3, Kl, Wl, ql, Rl, o3, null, -0, 0);
        }
        break;
      }
    } while (1);
    nd(e4);
  }
  function hu(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3) {
    if (e4.timeoutHandle = -1, d3 = t3.subtreeFlags, d3 & 8192 || (d3 & 16785408) == 16785408) {
      d3 = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Ut2 }, Tl(t3, a3, d3);
      var m3 = (a3 & 62914560) === a3 ? Zl - ge2() : (a3 & 4194048) === a3 ? Ql - ge2() : 0;
      if (m3 = qf(d3, m3), m3 !== null) {
        au = a3, e4.cancelPendingCommit = m3(Fu.bind(null, e4, t3, a3, n3, r3, i3, o3, s3, c3, u3, d3, null, f3, p3)), _u(e4, a3, o3, !l3);
        return;
      }
    }
    Fu(e4, t3, a3, n3, r3, i3, o3, s3, c3);
  }
  function gu(e4) {
    for (var t3 = e4; ; ) {
      var n3 = t3.tag;
      if ((n3 === 0 || n3 === 11 || n3 === 15) && t3.flags & 16384 && (n3 = t3.updateQueue, n3 !== null && (n3 = n3.stores, n3 !== null))) for (var r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3], a3 = i3.getSnapshot;
        i3 = i3.value;
        try {
          if (!fr2(a3(), i3)) return false;
        } catch {
          return false;
        }
      }
      if (n3 = t3.child, t3.subtreeFlags & 16384 && n3 !== null) n3.return = t3, t3 = n3;
      else {
        if (t3 === e4) break;
        for (; t3.sibling === null; ) {
          if (t3.return === null || t3.return === e4) return true;
          t3 = t3.return;
        }
        t3.sibling.return = t3.return, t3 = t3.sibling;
      }
    }
    return true;
  }
  function _u(e4, t3, n3, r3) {
    t3 &= ~Gl, t3 &= ~Wl, e4.suspendedLanes |= t3, e4.pingedLanes &= ~t3, r3 && (e4.warmLanes |= t3), r3 = e4.expirationTimes;
    for (var i3 = t3; 0 < i3; ) {
      var a3 = 31 - Oe2(i3), o3 = 1 << a3;
      r3[a3] = -1, i3 &= ~o3;
    }
    n3 !== 0 && Ue2(e4, n3, t3);
  }
  function vu() {
    return Q & 6 ? true : (rd(0, false), false);
  }
  function yu() {
    if (Pl !== null) {
      if (Il === 0) var e4 = Pl.return;
      else e4 = Pl, Ri2 = Li2 = null, xo2(e4), xa2 = null, Sa2 = 0, e4 = Pl;
      for (; e4 !== null; ) Nc2(e4.alternate, e4), e4 = e4.return;
      Pl = null;
    }
  }
  function bu(e4, t3) {
    var n3 = e4.timeoutHandle;
    n3 !== -1 && (e4.timeoutHandle = -1, qd(n3)), n3 = e4.cancelPendingCommit, n3 !== null && (e4.cancelPendingCommit = null, n3()), au = 0, yu(), Nl = e4, Pl = n3 = ei2(e4.current, null), Fl = t3, Il = 0, Ll = null, Rl = false, zl = Fe2(e4, t3), Bl = false, ql = Kl = Gl = Wl = Ul = Hl = 0, Yl = Jl = null, Xl = false, t3 & 8 && (t3 |= t3 & 32);
    var r3 = e4.entangledLanes;
    if (r3 !== 0) for (e4 = e4.entanglements, r3 &= t3; 0 < r3; ) {
      var i3 = 31 - Oe2(r3), a3 = 1 << i3;
      t3 |= e4[i3], r3 &= ~a3;
    }
    return Vl = t3, Wr2(), n3;
  }
  function xu(e4, t3) {
    no2 = null, N2.H = As2, t3 === fa2 || t3 === ma2 ? (t3 = ya2(), Il = 3) : t3 === pa2 ? (t3 = ya2(), Il = 4) : Il = t3 === Js2 ? 8 : typeof t3 == `object` && t3 && typeof t3.then == `function` ? 6 : 1, Ll = t3, Pl === null && (Hl = 1, Hs2(e4, ci2(t3, e4.current)));
  }
  function Su() {
    var e4 = Ka2.current;
    return e4 === null ? true : (Fl & 4194048) === Fl ? qa2 === null : (Fl & 62914560) === Fl || Fl & 536870912 ? e4 === qa2 : false;
  }
  function Cu() {
    var e4 = N2.H;
    return N2.H = As2, e4 === null ? As2 : e4;
  }
  function wu() {
    var e4 = N2.A;
    return N2.A = jl, e4;
  }
  function Tu() {
    Hl = 4, Rl || (Fl & 4194048) !== Fl && Ka2.current !== null || (zl = true), !(Ul & 134217727) && !(Wl & 134217727) || Nl === null || _u(Nl, Fl, Kl, false);
  }
  function Eu(e4, t3, n3) {
    var r3 = Q;
    Q |= 2;
    var i3 = Cu(), a3 = wu();
    (Nl !== e4 || Fl !== t3) && (eu = null, bu(e4, t3)), t3 = false;
    var o3 = Hl;
    a: do
      try {
        if (Il !== 0 && Pl !== null) {
          var s3 = Pl, c3 = Ll;
          switch (Il) {
            case 8:
              yu(), o3 = 6;
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              Ka2.current === null && (t3 = true);
              var l3 = Il;
              if (Il = 0, Ll = null, Mu(e4, s3, c3, l3), n3 && zl) {
                o3 = 0;
                break a;
              }
              break;
            default:
              l3 = Il, Il = 0, Ll = null, Mu(e4, s3, c3, l3);
          }
        }
        Du(), o3 = Hl;
        break;
      } catch (t4) {
        xu(e4, t4);
      }
    while (1);
    return t3 && e4.shellSuspendCounter++, Ri2 = Li2 = null, Q = r3, N2.H = i3, N2.A = a3, Pl === null && (Nl = null, Fl = 0, Wr2()), o3;
  }
  function Du() {
    for (; Pl !== null; ) Au(Pl);
  }
  function Ou(e4, t3) {
    var n3 = Q;
    Q |= 2;
    var r3 = Cu(), a3 = wu();
    Nl !== e4 || Fl !== t3 ? (eu = null, $l = ge2() + 500, bu(e4, t3)) : zl = Fe2(e4, t3);
    a: do
      try {
        if (Il !== 0 && Pl !== null) {
          t3 = Pl;
          var o3 = Ll;
          b: switch (Il) {
            case 1:
              Il = 0, Ll = null, Mu(e4, t3, o3, 1);
              break;
            case 2:
            case 9:
              if (ga2(o3)) {
                Il = 0, Ll = null, ju(t3);
                break;
              }
              t3 = function() {
                Il !== 2 && Il !== 9 || Nl !== e4 || (Il = 7), nd(e4);
              }, o3.then(t3, t3);
              break a;
            case 3:
              Il = 7;
              break a;
            case 4:
              Il = 5;
              break a;
            case 7:
              ga2(o3) ? (Il = 0, Ll = null, ju(t3)) : (Il = 0, Ll = null, Mu(e4, t3, o3, 7));
              break;
            case 5:
              var s3 = null;
              switch (Pl.tag) {
                case 26:
                  s3 = Pl.memoizedState;
                case 5:
                case 27:
                  var c3 = Pl;
                  if (s3 ? Wf(s3) : c3.stateNode.complete) {
                    Il = 0, Ll = null;
                    var l3 = c3.sibling;
                    if (l3 !== null) Pl = l3;
                    else {
                      var u3 = c3.return;
                      u3 === null ? Pl = null : (Pl = u3, Nu(u3));
                    }
                    break b;
                  }
              }
              Il = 0, Ll = null, Mu(e4, t3, o3, 5);
              break;
            case 6:
              Il = 0, Ll = null, Mu(e4, t3, o3, 6);
              break;
            case 8:
              yu(), Hl = 6;
              break a;
            default:
              throw Error(i2(462));
          }
        }
        ku();
        break;
      } catch (t4) {
        xu(e4, t4);
      }
    while (1);
    return Ri2 = Li2 = null, N2.H = r3, N2.A = a3, Q = n3, Pl === null ? (Nl = null, Fl = 0, Wr2(), Hl) : 0;
  }
  function ku() {
    for (; Pl !== null && !W2(); ) Au(Pl);
  }
  function Au(e4) {
    var t3 = wc2(e4.alternate, e4, Vl);
    e4.memoizedProps = e4.pendingProps, t3 === null ? Nu(e4) : Pl = t3;
  }
  function ju(e4) {
    var t3 = e4, n3 = t3.alternate;
    switch (t3.tag) {
      case 15:
      case 0:
        t3 = cc2(n3, t3, t3.pendingProps, t3.type, void 0, Fl);
        break;
      case 11:
        t3 = cc2(n3, t3, t3.pendingProps, t3.type.render, t3.ref, Fl);
        break;
      case 5:
        xo2(t3);
      default:
        Nc2(n3, t3), t3 = Pl = ti2(t3, Vl), t3 = wc2(n3, t3, Vl);
    }
    e4.memoizedProps = e4.pendingProps, t3 === null ? Nu(e4) : Pl = t3;
  }
  function Mu(e4, t3, n3, r3) {
    Ri2 = Li2 = null, xo2(t3), xa2 = null, Sa2 = 0;
    var i3 = t3.return;
    try {
      if (qs2(e4, i3, t3, n3, Fl)) {
        Hl = 1, Hs2(e4, ci2(n3, e4.current)), Pl = null;
        return;
      }
    } catch (t4) {
      if (i3 !== null) throw Pl = i3, t4;
      Hl = 1, Hs2(e4, ci2(n3, e4.current)), Pl = null;
      return;
    }
    t3.flags & 32768 ? (Ti2 || r3 === 1 ? e4 = true : zl || Fl & 536870912 ? e4 = false : (Rl = e4 = true, (r3 === 2 || r3 === 9 || r3 === 3 || r3 === 6) && (r3 = Ka2.current, r3 !== null && r3.tag === 13 && (r3.flags |= 16384))), Pu(t3, e4)) : Nu(t3);
  }
  function Nu(e4) {
    var t3 = e4;
    do {
      if (t3.flags & 32768) {
        Pu(t3, Rl);
        return;
      }
      e4 = t3.return;
      var n3 = jc2(t3.alternate, t3, Vl);
      if (n3 !== null) {
        Pl = n3;
        return;
      }
      if (t3 = t3.sibling, t3 !== null) {
        Pl = t3;
        return;
      }
      Pl = t3 = e4;
    } while (t3 !== null);
    Hl === 0 && (Hl = 5);
  }
  function Pu(e4, t3) {
    do {
      var n3 = Mc2(e4.alternate, e4);
      if (n3 !== null) {
        n3.flags &= 32767, Pl = n3;
        return;
      }
      if (n3 = e4.return, n3 !== null && (n3.flags |= 32768, n3.subtreeFlags = 0, n3.deletions = null), !t3 && (e4 = e4.sibling, e4 !== null)) {
        Pl = e4;
        return;
      }
      Pl = e4 = n3;
    } while (e4 !== null);
    Hl = 6, Pl = null;
  }
  function Fu(e4, t3, n3, r3, a3, o3, s3, c3, l3) {
    e4.cancelPendingCommit = null;
    do
      Bu();
    while (nu !== 0);
    if (Q & 6) throw Error(i2(327));
    if (t3 !== null) {
      if (t3 === e4.current) throw Error(i2(177));
      if (o3 = t3.lanes | t3.childLanes, o3 |= Ur2, Ve2(e4, n3, o3, s3, c3, l3), e4 === Nl && (Pl = Nl = null, Fl = 0), iu = t3, ru = e4, au = n3, ou = o3, su = a3, cu = r3, t3.subtreeFlags & 10256 || t3.flags & 10256 ? (e4.callbackNode = null, e4.callbackPriority = 0, Yu(be2, function() {
        return Vu(), null;
      })) : (e4.callbackNode = null, e4.callbackPriority = 0), r3 = !!(t3.flags & 13878), t3.subtreeFlags & 13878 || r3) {
        r3 = N2.T, N2.T = null, a3 = P2.p, P2.p = 2, s3 = Q, Q |= 4;
        try {
          Qc2(e4, t3, n3);
        } finally {
          Q = s3, P2.p = a3, N2.T = r3;
        }
      }
      nu = 1, Iu(), Lu(), Ru();
    }
  }
  function Iu() {
    if (nu === 1) {
      nu = 0;
      var e4 = ru, t3 = iu, n3 = !!(t3.flags & 13878);
      if (t3.subtreeFlags & 13878 || n3) {
        n3 = N2.T, N2.T = null;
        var r3 = P2.p;
        P2.p = 2;
        var i3 = Q;
        Q |= 4;
        try {
          dl(t3, e4);
          var a3 = zd, o3 = _r2(e4.containerInfo), s3 = a3.focusedElem, c3 = a3.selectionRange;
          if (o3 !== s3 && s3 && s3.ownerDocument && gr2(s3.ownerDocument.documentElement, s3)) {
            if (c3 !== null && vr2(s3)) {
              var l3 = c3.start, u3 = c3.end;
              if (u3 === void 0 && (u3 = l3), `selectionStart` in s3) s3.selectionStart = l3, s3.selectionEnd = Math.min(u3, s3.value.length);
              else {
                var d3 = s3.ownerDocument || document, f3 = d3 && d3.defaultView || window;
                if (f3.getSelection) {
                  var p3 = f3.getSelection(), m3 = s3.textContent.length, h3 = Math.min(c3.start, m3), g3 = c3.end === void 0 ? h3 : Math.min(c3.end, m3);
                  !p3.extend && h3 > g3 && (o3 = g3, g3 = h3, h3 = o3);
                  var _3 = hr2(s3, h3), v3 = hr2(s3, g3);
                  if (_3 && v3 && (p3.rangeCount !== 1 || p3.anchorNode !== _3.node || p3.anchorOffset !== _3.offset || p3.focusNode !== v3.node || p3.focusOffset !== v3.offset)) {
                    var y3 = d3.createRange();
                    y3.setStart(_3.node, _3.offset), p3.removeAllRanges(), h3 > g3 ? (p3.addRange(y3), p3.extend(v3.node, v3.offset)) : (y3.setEnd(v3.node, v3.offset), p3.addRange(y3));
                  }
                }
              }
            }
            for (d3 = [], p3 = s3; p3 = p3.parentNode; ) p3.nodeType === 1 && d3.push({ element: p3, left: p3.scrollLeft, top: p3.scrollTop });
            for (typeof s3.focus == `function` && s3.focus(), s3 = 0; s3 < d3.length; s3++) {
              var b3 = d3[s3];
              b3.element.scrollLeft = b3.left, b3.element.scrollTop = b3.top;
            }
          }
          sp = !!Rd, zd = Rd = null;
        } finally {
          Q = i3, P2.p = r3, N2.T = n3;
        }
      }
      e4.current = t3, nu = 2;
    }
  }
  function Lu() {
    if (nu === 2) {
      nu = 0;
      var e4 = ru, t3 = iu, n3 = !!(t3.flags & 8772);
      if (t3.subtreeFlags & 8772 || n3) {
        n3 = N2.T, N2.T = null;
        var r3 = P2.p;
        P2.p = 2;
        var i3 = Q;
        Q |= 4;
        try {
          $c2(e4, t3.alternate, t3);
        } finally {
          Q = i3, P2.p = r3, N2.T = n3;
        }
      }
      nu = 3;
    }
  }
  function Ru() {
    if (nu === 4 || nu === 3) {
      nu = 0, he2();
      var e4 = ru, t3 = iu, n3 = au, r3 = cu;
      t3.subtreeFlags & 10256 || t3.flags & 10256 ? nu = 5 : (nu = 0, iu = ru = null, zu(e4, e4.pendingLanes));
      var i3 = e4.pendingLanes;
      if (i3 === 0 && (tu = null), Ke2(n3), t3 = t3.stateNode, Ee2 && typeof Ee2.onCommitFiberRoot == `function`) try {
        Ee2.onCommitFiberRoot(Te2, t3, void 0, (t3.current.flags & 128) == 128);
      } catch {
      }
      if (r3 !== null) {
        t3 = N2.T, i3 = P2.p, P2.p = 2, N2.T = null;
        try {
          for (var a3 = e4.onRecoverableError, o3 = 0; o3 < r3.length; o3++) {
            var s3 = r3[o3];
            a3(s3.value, { componentStack: s3.stack });
          }
        } finally {
          N2.T = t3, P2.p = i3;
        }
      }
      au & 3 && Bu(), nd(e4), i3 = e4.pendingLanes, n3 & 261930 && i3 & 42 ? e4 === uu ? lu++ : (lu = 0, uu = e4) : lu = 0, rd(0, false);
    }
  }
  function zu(e4, t3) {
    (e4.pooledCacheLanes &= t3) === 0 && (t3 = e4.pooledCache, t3 != null && (e4.pooledCache = null, ea2(t3)));
  }
  function Bu() {
    return Iu(), Lu(), Ru(), Vu();
  }
  function Vu() {
    if (nu !== 5) return false;
    var e4 = ru, t3 = ou;
    ou = 0;
    var n3 = Ke2(au), r3 = N2.T, a3 = P2.p;
    try {
      P2.p = 32 > n3 ? 32 : n3, N2.T = null, n3 = su, su = null;
      var o3 = ru, s3 = au;
      if (nu = 0, iu = ru = null, au = 0, Q & 6) throw Error(i2(331));
      var c3 = Q;
      if (Q |= 4, Ol(o3.current), bl(o3, o3.current, s3, n3), Q = c3, rd(0, false), Ee2 && typeof Ee2.onPostCommitFiberRoot == `function`) try {
        Ee2.onPostCommitFiberRoot(Te2, o3);
      } catch {
      }
      return true;
    } finally {
      P2.p = a3, N2.T = r3, zu(e4, t3);
    }
  }
  function Hu(e4, t3, n3) {
    t3 = ci2(n3, t3), t3 = Ws2(e4.stateNode, t3, 2), e4 = Na2(e4, t3, 2), e4 !== null && (ze2(e4, 2), nd(e4));
  }
  function Uu(e4, t3, n3) {
    if (e4.tag === 3) Hu(e4, e4, n3);
    else for (; t3 !== null; ) {
      if (t3.tag === 3) {
        Hu(t3, e4, n3);
        break;
      }
      if (t3.tag === 1) {
        var r3 = t3.stateNode;
        if (typeof t3.type.getDerivedStateFromError == `function` || typeof r3.componentDidCatch == `function` && (tu === null || !tu.has(r3))) {
          e4 = ci2(n3, e4), n3 = Gs2(2), r3 = Na2(t3, n3, 2), r3 !== null && (Ks2(n3, r3, t3, e4), ze2(r3, 2), nd(r3));
          break;
        }
      }
      t3 = t3.return;
    }
  }
  function Wu(e4, t3, n3) {
    var r3 = e4.pingCache;
    if (r3 === null) {
      r3 = e4.pingCache = new Ml();
      var i3 = /* @__PURE__ */ new Set();
      r3.set(t3, i3);
    } else i3 = r3.get(t3), i3 === void 0 && (i3 = /* @__PURE__ */ new Set(), r3.set(t3, i3));
    i3.has(n3) || (Bl = true, i3.add(n3), e4 = Gu.bind(null, e4, t3, n3), t3.then(e4, e4));
  }
  function Gu(e4, t3, n3) {
    var r3 = e4.pingCache;
    r3 !== null && r3.delete(t3), e4.pingedLanes |= e4.suspendedLanes & n3, e4.warmLanes &= ~n3, Nl === e4 && (Fl & n3) === n3 && (Hl === 4 || Hl === 3 && (Fl & 62914560) === Fl && 300 > ge2() - Zl ? !(Q & 2) && bu(e4, 0) : Gl |= n3, ql === Fl && (ql = 0)), nd(e4);
  }
  function Ku(e4, t3) {
    t3 === 0 && (t3 = q2()), e4 = qr2(e4, t3), e4 !== null && (ze2(e4, t3), nd(e4));
  }
  function qu(e4) {
    var t3 = e4.memoizedState, n3 = 0;
    t3 !== null && (n3 = t3.retryLane), Ku(e4, n3);
  }
  function Ju(e4, t3) {
    var n3 = 0;
    switch (e4.tag) {
      case 31:
      case 13:
        var r3 = e4.stateNode, a3 = e4.memoizedState;
        a3 !== null && (n3 = a3.retryLane);
        break;
      case 19:
        r3 = e4.stateNode;
        break;
      case 22:
        r3 = e4.stateNode._retryCache;
        break;
      default:
        throw Error(i2(314));
    }
    r3 !== null && r3.delete(t3), Ku(e4, n3);
  }
  function Yu(e4, t3) {
    return pe2(e4, t3);
  }
  var Xu = null, Zu = null, Qu = false, $u = false, ed = false, td = 0;
  function nd(e4) {
    e4 !== Zu && e4.next === null && (Zu === null ? Xu = Zu = e4 : Zu = Zu.next = e4), $u = true, Qu || (Qu = true, ld());
  }
  function rd(e4, t3) {
    if (!ed && $u) {
      ed = true;
      do
        for (var n3 = false, r3 = Xu; r3 !== null; ) {
          if (!t3) {
            if (e4 !== 0) {
              var i3 = r3.pendingLanes;
              if (i3 === 0) var a3 = 0;
              else {
                var o3 = r3.suspendedLanes, s3 = r3.pingedLanes;
                a3 = (1 << 31 - Oe2(42 | e4) + 1) - 1, a3 &= i3 & ~(o3 & ~s3), a3 = a3 & 201326741 ? a3 & 201326741 | 1 : a3 ? a3 | 2 : 0;
              }
              a3 !== 0 && (n3 = true, cd(r3, a3));
            } else a3 = Fl, a3 = Pe2(r3, r3 === Nl ? a3 : 0, r3.cancelPendingCommit !== null || r3.timeoutHandle !== -1), !(a3 & 3) || Fe2(r3, a3) || (n3 = true, cd(r3, a3));
          }
          r3 = r3.next;
        }
      while (n3);
      ed = false;
    }
  }
  function id() {
    ad();
  }
  function ad() {
    $u = Qu = false;
    var e4 = 0;
    td !== 0 && Gd() && (e4 = td);
    for (var t3 = ge2(), n3 = null, r3 = Xu; r3 !== null; ) {
      var i3 = r3.next, a3 = od(r3, t3);
      a3 === 0 ? (r3.next = null, n3 === null ? Xu = i3 : n3.next = i3, i3 === null && (Zu = n3)) : (n3 = r3, (e4 !== 0 || a3 & 3) && ($u = true)), r3 = i3;
    }
    nu !== 0 && nu !== 5 || rd(e4, false), td !== 0 && (td = 0);
  }
  function od(e4, t3) {
    for (var n3 = e4.suspendedLanes, r3 = e4.pingedLanes, i3 = e4.expirationTimes, a3 = e4.pendingLanes & -62914561; 0 < a3; ) {
      var o3 = 31 - Oe2(a3), s3 = 1 << o3, c3 = i3[o3];
      c3 === -1 ? ((s3 & n3) === 0 || (s3 & r3) !== 0) && (i3[o3] = Ie2(s3, t3)) : c3 <= t3 && (e4.expiredLanes |= s3), a3 &= ~s3;
    }
    if (t3 = Nl, n3 = Fl, n3 = Pe2(e4, e4 === t3 ? n3 : 0, e4.cancelPendingCommit !== null || e4.timeoutHandle !== -1), r3 = e4.callbackNode, n3 === 0 || e4 === t3 && (Il === 2 || Il === 9) || e4.cancelPendingCommit !== null) return r3 !== null && r3 !== null && me2(r3), e4.callbackNode = null, e4.callbackPriority = 0;
    if (!(n3 & 3) || Fe2(e4, n3)) {
      if (t3 = n3 & -n3, t3 === e4.callbackPriority) return t3;
      switch (r3 !== null && me2(r3), Ke2(n3)) {
        case 2:
        case 8:
          n3 = ye2;
          break;
        case 32:
          n3 = be2;
          break;
        case 268435456:
          n3 = Se2;
          break;
        default:
          n3 = be2;
      }
      return r3 = sd.bind(null, e4), n3 = pe2(n3, r3), e4.callbackPriority = t3, e4.callbackNode = n3, t3;
    }
    return r3 !== null && r3 !== null && me2(r3), e4.callbackPriority = 2, e4.callbackNode = null, 2;
  }
  function sd(e4, t3) {
    if (nu !== 0 && nu !== 5) return e4.callbackNode = null, e4.callbackPriority = 0, null;
    var n3 = e4.callbackNode;
    if (Bu() && e4.callbackNode !== n3) return null;
    var r3 = Fl;
    return r3 = Pe2(e4, e4 === Nl ? r3 : 0, e4.cancelPendingCommit !== null || e4.timeoutHandle !== -1), r3 === 0 ? null : (mu(e4, r3, t3), od(e4, ge2()), e4.callbackNode != null && e4.callbackNode === n3 ? sd.bind(null, e4) : null);
  }
  function cd(e4, t3) {
    if (Bu()) return null;
    mu(e4, t3, true);
  }
  function ld() {
    Yd(function() {
      Q & 6 ? pe2(ve2, id) : ad();
    });
  }
  function ud() {
    if (td === 0) {
      var e4 = ra2;
      e4 === 0 && (e4 = Me2, Me2 <<= 1, !(Me2 & 261888) && (Me2 = 256)), td = e4;
    }
    return td;
  }
  function dd(e4) {
    return e4 == null || typeof e4 == `symbol` || typeof e4 == `boolean` ? null : typeof e4 == `function` ? e4 : Ht2(`` + e4);
  }
  function fd(e4, t3) {
    var n3 = t3.ownerDocument.createElement(`input`);
    return n3.name = t3.name, n3.value = t3.value, e4.id && n3.setAttribute(`form`, e4.id), t3.parentNode.insertBefore(n3, t3), e4 = new FormData(e4), n3.parentNode.removeChild(n3), e4;
  }
  function pd(e4, t3, n3, r3, i3) {
    if (t3 === `submit` && n3 && n3.stateNode === i3) {
      var a3 = dd((i3[Ze2] || null).action), o3 = r3.submitter;
      o3 && (t3 = (t3 = o3[Ze2] || null) ? dd(t3.formAction) : o3.getAttribute(`formAction`), t3 !== null && (a3 = t3, o3 = null));
      var s3 = new dn2(`action`, `action`, null, r3, i3);
      e4.push({ event: s3, listeners: [{ instance: null, listener: function() {
        if (r3.defaultPrevented) {
          if (td !== 0) {
            var e5 = o3 ? fd(i3, o3) : new FormData(i3);
            gs2(n3, { pending: true, data: e5, method: i3.method, action: a3 }, null, e5);
          }
        } else typeof a3 == `function` && (s3.preventDefault(), e5 = o3 ? fd(i3, o3) : new FormData(i3), gs2(n3, { pending: true, data: e5, method: i3.method, action: a3 }, a3, e5));
      }, currentTarget: i3 }] });
    }
  }
  for (var md = 0; md < Rr2.length; md++) {
    var hd = Rr2[md];
    zr2(hd.toLowerCase(), `on` + (hd[0].toUpperCase() + hd.slice(1)));
  }
  zr2(Ar2, `onAnimationEnd`), zr2(jr2, `onAnimationIteration`), zr2(Mr2, `onAnimationStart`), zr2(`dblclick`, `onDoubleClick`), zr2(`focusin`, `onFocus`), zr2(`focusout`, `onBlur`), zr2(Nr2, `onTransitionRun`), zr2(Pr2, `onTransitionStart`), zr2(Fr2, `onTransitionCancel`), zr2(Ir2, `onTransitionEnd`), pt2(`onMouseEnter`, [`mouseout`, `mouseover`]), pt2(`onMouseLeave`, [`mouseout`, `mouseover`]), pt2(`onPointerEnter`, [`pointerout`, `pointerover`]), pt2(`onPointerLeave`, [`pointerout`, `pointerover`]), ft2(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), ft2(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), ft2(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), ft2(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), ft2(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), ft2(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var gd = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), _d = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));
  function vd(e4, t3) {
    t3 = !!(t3 & 4);
    for (var n3 = 0; n3 < e4.length; n3++) {
      var r3 = e4[n3], i3 = r3.event;
      r3 = r3.listeners;
      a: {
        var a3 = void 0;
        if (t3) for (var o3 = r3.length - 1; 0 <= o3; o3--) {
          var s3 = r3[o3], c3 = s3.instance, l3 = s3.currentTarget;
          if (s3 = s3.listener, c3 !== a3 && i3.isPropagationStopped()) break a;
          a3 = s3, i3.currentTarget = l3;
          try {
            a3(i3);
          } catch (e5) {
            Br2(e5);
          }
          i3.currentTarget = null, a3 = c3;
        }
        else for (o3 = 0; o3 < r3.length; o3++) {
          if (s3 = r3[o3], c3 = s3.instance, l3 = s3.currentTarget, s3 = s3.listener, c3 !== a3 && i3.isPropagationStopped()) break a;
          a3 = s3, i3.currentTarget = l3;
          try {
            a3(i3);
          } catch (e5) {
            Br2(e5);
          }
          i3.currentTarget = null, a3 = c3;
        }
      }
    }
  }
  function yd(e4, t3) {
    var n3 = t3[$e2];
    n3 === void 0 && (n3 = t3[$e2] = /* @__PURE__ */ new Set());
    var r3 = e4 + `__bubble`;
    n3.has(r3) || (Cd(t3, e4, 2, false), n3.add(r3));
  }
  function bd(e4, t3, n3) {
    var r3 = 0;
    t3 && (r3 |= 4), Cd(n3, e4, r3, t3);
  }
  var xd = `_reactListening` + Math.random().toString(36).slice(2);
  function Sd(e4) {
    if (!e4[xd]) {
      e4[xd] = true, ut2.forEach(function(t4) {
        t4 !== `selectionchange` && (_d.has(t4) || bd(t4, false, e4), bd(t4, true, e4));
      });
      var t3 = e4.nodeType === 9 ? e4 : e4.ownerDocument;
      t3 === null || t3[xd] || (t3[xd] = true, bd(`selectionchange`, false, t3));
    }
  }
  function Cd(e4, t3, n3, r3) {
    switch (mp(t3)) {
      case 2:
        var i3 = cp;
        break;
      case 8:
        i3 = lp;
        break;
      default:
        i3 = up;
    }
    n3 = i3.bind(null, t3, n3, e4), i3 = void 0, !$t2 || t3 !== `touchstart` && t3 !== `touchmove` && t3 !== `wheel` || (i3 = true), r3 ? i3 === void 0 ? e4.addEventListener(t3, n3, true) : e4.addEventListener(t3, n3, { capture: true, passive: i3 }) : i3 === void 0 ? e4.addEventListener(t3, n3, false) : e4.addEventListener(t3, n3, { passive: i3 });
  }
  function wd(e4, t3, n3, r3, i3) {
    var a3 = r3;
    if (!(t3 & 1) && !(t3 & 2) && r3 !== null) a: for (; ; ) {
      if (r3 === null) return;
      var s3 = r3.tag;
      if (s3 === 3 || s3 === 4) {
        var c3 = r3.stateNode.containerInfo;
        if (c3 === i3) break;
        if (s3 === 4) for (s3 = r3.return; s3 !== null; ) {
          var l3 = s3.tag;
          if ((l3 === 3 || l3 === 4) && s3.stateNode.containerInfo === i3) return;
          s3 = s3.return;
        }
        for (; c3 !== null; ) {
          if (s3 = at2(c3), s3 === null) return;
          if (l3 = s3.tag, l3 === 5 || l3 === 6 || l3 === 26 || l3 === 27) {
            r3 = a3 = s3;
            continue a;
          }
          c3 = c3.parentNode;
        }
      }
      r3 = r3.return;
    }
    Xt2(function() {
      var r4 = a3, i4 = Gt2(n3), s4 = [];
      a: {
        var c4 = Lr2.get(e4);
        if (c4 !== void 0) {
          var l4 = dn2, u3 = e4;
          switch (e4) {
            case `keypress`:
              if (on2(n3) === 0) break a;
            case `keydown`:
            case `keyup`:
              l4 = kn2;
              break;
            case `focusin`:
              u3 = `focus`, l4 = bn2;
              break;
            case `focusout`:
              u3 = `blur`, l4 = bn2;
              break;
            case `beforeblur`:
            case `afterblur`:
              l4 = bn2;
              break;
            case `click`:
              if (n3.button === 2) break a;
            case `auxclick`:
            case `dblclick`:
            case `mousedown`:
            case `mousemove`:
            case `mouseup`:
            case `mouseout`:
            case `mouseover`:
            case `contextmenu`:
              l4 = vn2;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              l4 = yn2;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              l4 = jn2;
              break;
            case Ar2:
            case jr2:
            case Mr2:
              l4 = xn2;
              break;
            case Ir2:
              l4 = Mn2;
              break;
            case `scroll`:
            case `scrollend`:
              l4 = pn2;
              break;
            case `wheel`:
              l4 = Nn2;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              l4 = Sn2;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              l4 = An2;
              break;
            case `toggle`:
            case `beforetoggle`:
              l4 = Pn2;
          }
          var d3 = !!(t3 & 4), f3 = !d3 && (e4 === `scroll` || e4 === `scrollend`), p3 = d3 ? c4 === null ? null : c4 + `Capture` : c4;
          d3 = [];
          for (var m3 = r4, h3; m3 !== null; ) {
            var g3 = m3;
            if (h3 = g3.stateNode, g3 = g3.tag, g3 !== 5 && g3 !== 26 && g3 !== 27 || h3 === null || p3 === null || (g3 = Zt2(m3, p3), g3 != null && d3.push(Td(m3, g3, h3))), f3) break;
            m3 = m3.return;
          }
          0 < d3.length && (c4 = new l4(c4, u3, null, n3, i4), s4.push({ event: c4, listeners: d3 }));
        }
      }
      if (!(t3 & 7)) {
        a: {
          if (c4 = e4 === `mouseover` || e4 === `pointerover`, l4 = e4 === `mouseout` || e4 === `pointerout`, c4 && n3 !== Wt2 && (u3 = n3.relatedTarget || n3.fromElement) && (at2(u3) || u3[Qe2])) break a;
          if ((l4 || c4) && (c4 = i4.window === i4 ? i4 : (c4 = i4.ownerDocument) ? c4.defaultView || c4.parentWindow : window, l4 ? (u3 = n3.relatedTarget || n3.toElement, l4 = r4, u3 = u3 ? at2(u3) : null, u3 !== null && (f3 = o2(u3), d3 = u3.tag, u3 !== f3 || d3 !== 5 && d3 !== 27 && d3 !== 6) && (u3 = null)) : (l4 = null, u3 = r4), l4 !== u3)) {
            if (d3 = vn2, g3 = `onMouseLeave`, p3 = `onMouseEnter`, m3 = `mouse`, (e4 === `pointerout` || e4 === `pointerover`) && (d3 = An2, g3 = `onPointerLeave`, p3 = `onPointerEnter`, m3 = `pointer`), f3 = l4 == null ? c4 : st2(l4), h3 = u3 == null ? c4 : st2(u3), c4 = new d3(g3, m3 + `leave`, l4, n3, i4), c4.target = f3, c4.relatedTarget = h3, g3 = null, at2(i4) === r4 && (d3 = new d3(p3, m3 + `enter`, u3, n3, i4), d3.target = h3, d3.relatedTarget = f3, g3 = d3), f3 = g3, l4 && u3) b: {
              for (d3 = Dd, p3 = l4, m3 = u3, h3 = 0, g3 = p3; g3; g3 = d3(g3)) h3++;
              g3 = 0;
              for (var _3 = m3; _3; _3 = d3(_3)) g3++;
              for (; 0 < h3 - g3; ) p3 = d3(p3), h3--;
              for (; 0 < g3 - h3; ) m3 = d3(m3), g3--;
              for (; h3--; ) {
                if (p3 === m3 || m3 !== null && p3 === m3.alternate) {
                  d3 = p3;
                  break b;
                }
                p3 = d3(p3), m3 = d3(m3);
              }
              d3 = null;
            }
            else d3 = null;
            l4 !== null && Od(s4, c4, l4, d3, false), u3 !== null && f3 !== null && Od(s4, f3, u3, d3, true);
          }
        }
        a: {
          if (c4 = r4 ? st2(r4) : window, l4 = c4.nodeName && c4.nodeName.toLowerCase(), l4 === `select` || l4 === `input` && c4.type === `file`) var v3 = er2;
          else if (Jn2(c4)) {
            if (tr2) v3 = ur2;
            else {
              v3 = cr2;
              var y3 = sr2;
            }
          } else l4 = c4.nodeName, !l4 || l4.toLowerCase() !== `input` || c4.type !== `checkbox` && c4.type !== `radio` ? r4 && zt2(r4.elementType) && (v3 = er2) : v3 = lr2;
          if (v3 && (v3 = v3(e4, r4))) {
            Yn2(s4, v3, n3, i4);
            break a;
          }
          y3 && y3(e4, c4, r4), e4 === `focusout` && r4 && c4.type === `number` && r4.memoizedProps.value != null && jt2(c4, `number`, c4.value);
        }
        switch (y3 = r4 ? st2(r4) : window, e4) {
          case `focusin`:
            (Jn2(y3) || y3.contentEditable === `true`) && (br2 = y3, xr2 = r4, Sr2 = null);
            break;
          case `focusout`:
            Sr2 = xr2 = br2 = null;
            break;
          case `mousedown`:
            Cr2 = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            Cr2 = false, wr2(s4, n3, i4);
            break;
          case `selectionchange`:
            if (yr2) break;
          case `keydown`:
          case `keyup`:
            wr2(s4, n3, i4);
        }
        var b3;
        if (In2) b: {
          switch (e4) {
            case `compositionstart`:
              var x3 = `onCompositionStart`;
              break b;
            case `compositionend`:
              x3 = `onCompositionEnd`;
              break b;
            case `compositionupdate`:
              x3 = `onCompositionUpdate`;
              break b;
          }
          x3 = void 0;
        }
        else Wn2 ? Hn2(e4, n3) && (x3 = `onCompositionEnd`) : e4 === `keydown` && n3.keyCode === 229 && (x3 = `onCompositionStart`);
        x3 && (zn2 && n3.locale !== `ko` && (Wn2 || x3 !== `onCompositionStart` ? x3 === `onCompositionEnd` && Wn2 && (b3 = an2()) : (tn2 = i4, nn2 = `value` in tn2 ? tn2.value : tn2.textContent, Wn2 = true)), y3 = Ed(r4, x3), 0 < y3.length && (x3 = new Cn2(x3, e4, null, n3, i4), s4.push({ event: x3, listeners: y3 }), b3 ? x3.data = b3 : (b3 = Un2(n3), b3 !== null && (x3.data = b3)))), (b3 = Rn2 ? Gn2(e4, n3) : Kn2(e4, n3)) && (x3 = Ed(r4, `onBeforeInput`), 0 < x3.length && (y3 = new Cn2(`onBeforeInput`, `beforeinput`, null, n3, i4), s4.push({ event: y3, listeners: x3 }), y3.data = b3)), pd(s4, e4, r4, n3, i4);
      }
      vd(s4, t3);
    });
  }
  function Td(e4, t3, n3) {
    return { instance: e4, listener: t3, currentTarget: n3 };
  }
  function Ed(e4, t3) {
    for (var n3 = t3 + `Capture`, r3 = []; e4 !== null; ) {
      var i3 = e4, a3 = i3.stateNode;
      if (i3 = i3.tag, i3 !== 5 && i3 !== 26 && i3 !== 27 || a3 === null || (i3 = Zt2(e4, n3), i3 != null && r3.unshift(Td(e4, i3, a3)), i3 = Zt2(e4, t3), i3 != null && r3.push(Td(e4, i3, a3))), e4.tag === 3) return r3;
      e4 = e4.return;
    }
    return [];
  }
  function Dd(e4) {
    if (e4 === null) return null;
    do
      e4 = e4.return;
    while (e4 && e4.tag !== 5 && e4.tag !== 27);
    return e4 || null;
  }
  function Od(e4, t3, n3, r3, i3) {
    for (var a3 = t3._reactName, o3 = []; n3 !== null && n3 !== r3; ) {
      var s3 = n3, c3 = s3.alternate, l3 = s3.stateNode;
      if (s3 = s3.tag, c3 !== null && c3 === r3) break;
      s3 !== 5 && s3 !== 26 && s3 !== 27 || l3 === null || (c3 = l3, i3 ? (l3 = Zt2(n3, a3), l3 != null && o3.unshift(Td(n3, l3, c3))) : i3 || (l3 = Zt2(n3, a3), l3 != null && o3.push(Td(n3, l3, c3)))), n3 = n3.return;
    }
    o3.length !== 0 && e4.push({ event: t3, listeners: o3 });
  }
  var kd = /\r\n?/g, Ad = /\u0000|\uFFFD/g;
  function jd(e4) {
    return (typeof e4 == `string` ? e4 : `` + e4).replace(kd, `
`).replace(Ad, ``);
  }
  function Md(e4, t3) {
    return t3 = jd(t3), jd(e4) === t3;
  }
  function $(e4, t3, n3, r3, a3, o3) {
    switch (n3) {
      case `children`:
        typeof r3 == `string` ? t3 === `body` || t3 === `textarea` && r3 === `` || Ft2(e4, r3) : (typeof r3 == `number` || typeof r3 == `bigint`) && t3 !== `body` && Ft2(e4, `` + r3);
        break;
      case `className`:
        yt2(e4, `class`, r3);
        break;
      case `tabIndex`:
        yt2(e4, `tabindex`, r3);
        break;
      case `dir`:
      case `role`:
      case `viewBox`:
      case `width`:
      case `height`:
        yt2(e4, n3, r3);
        break;
      case `style`:
        Rt2(e4, r3, o3);
        break;
      case `data`:
        if (t3 !== `object`) {
          yt2(e4, `data`, r3);
          break;
        }
      case `src`:
      case `href`:
        if (r3 === `` && (t3 !== `a` || n3 !== `href`) || r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || typeof r3 == `boolean`) {
          e4.removeAttribute(n3);
          break;
        }
        r3 = Ht2(`` + r3), e4.setAttribute(n3, r3);
        break;
      case `action`:
      case `formAction`:
        if (typeof r3 == `function`) {
          e4.setAttribute(n3, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
          break;
        }
        if (typeof o3 == `function` && (n3 === `formAction` ? (t3 !== `input` && $(e4, t3, `name`, a3.name, a3, null), $(e4, t3, `formEncType`, a3.formEncType, a3, null), $(e4, t3, `formMethod`, a3.formMethod, a3, null), $(e4, t3, `formTarget`, a3.formTarget, a3, null)) : ($(e4, t3, `encType`, a3.encType, a3, null), $(e4, t3, `method`, a3.method, a3, null), $(e4, t3, `target`, a3.target, a3, null))), r3 == null || typeof r3 == `symbol` || typeof r3 == `boolean`) {
          e4.removeAttribute(n3);
          break;
        }
        r3 = Ht2(`` + r3), e4.setAttribute(n3, r3);
        break;
      case `onClick`:
        r3 != null && (e4.onclick = Ut2);
        break;
      case `onScroll`:
        r3 != null && yd(`scroll`, e4);
        break;
      case `onScrollEnd`:
        r3 != null && yd(`scrollend`, e4);
        break;
      case `dangerouslySetInnerHTML`:
        if (r3 != null) {
          if (typeof r3 != `object` || !(`__html` in r3)) throw Error(i2(61));
          if (n3 = r3.__html, n3 != null) {
            if (a3.children != null) throw Error(i2(60));
            e4.innerHTML = n3;
          }
        }
        break;
      case `multiple`:
        e4.multiple = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
        break;
      case `muted`:
        e4.muted = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
        break;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `defaultValue`:
      case `defaultChecked`:
      case `innerHTML`:
      case `ref`:
        break;
      case `autoFocus`:
        break;
      case `xlinkHref`:
        if (r3 == null || typeof r3 == `function` || typeof r3 == `boolean` || typeof r3 == `symbol`) {
          e4.removeAttribute(`xlink:href`);
          break;
        }
        n3 = Ht2(`` + r3), e4.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n3);
        break;
      case `contentEditable`:
      case `spellCheck`:
      case `draggable`:
      case `value`:
      case `autoReverse`:
      case `externalResourcesRequired`:
      case `focusable`:
      case `preserveAlpha`:
        r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e4.setAttribute(n3, `` + r3) : e4.removeAttribute(n3);
        break;
      case `inert`:
      case `allowFullScreen`:
      case `async`:
      case `autoPlay`:
      case `controls`:
      case `default`:
      case `defer`:
      case `disabled`:
      case `disablePictureInPicture`:
      case `disableRemotePlayback`:
      case `formNoValidate`:
      case `hidden`:
      case `loop`:
      case `noModule`:
      case `noValidate`:
      case `open`:
      case `playsInline`:
      case `readOnly`:
      case `required`:
      case `reversed`:
      case `scoped`:
      case `seamless`:
      case `itemScope`:
        r3 && typeof r3 != `function` && typeof r3 != `symbol` ? e4.setAttribute(n3, ``) : e4.removeAttribute(n3);
        break;
      case `capture`:
      case `download`:
        true === r3 ? e4.setAttribute(n3, ``) : false !== r3 && r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e4.setAttribute(n3, r3) : e4.removeAttribute(n3);
        break;
      case `cols`:
      case `rows`:
      case `size`:
      case `span`:
        r3 != null && typeof r3 != `function` && typeof r3 != `symbol` && !isNaN(r3) && 1 <= r3 ? e4.setAttribute(n3, r3) : e4.removeAttribute(n3);
        break;
      case `rowSpan`:
      case `start`:
        r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || isNaN(r3) ? e4.removeAttribute(n3) : e4.setAttribute(n3, r3);
        break;
      case `popover`:
        yd(`beforetoggle`, e4), yd(`toggle`, e4), vt2(e4, `popover`, r3);
        break;
      case `xlinkActuate`:
        bt2(e4, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r3);
        break;
      case `xlinkArcrole`:
        bt2(e4, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r3);
        break;
      case `xlinkRole`:
        bt2(e4, `http://www.w3.org/1999/xlink`, `xlink:role`, r3);
        break;
      case `xlinkShow`:
        bt2(e4, `http://www.w3.org/1999/xlink`, `xlink:show`, r3);
        break;
      case `xlinkTitle`:
        bt2(e4, `http://www.w3.org/1999/xlink`, `xlink:title`, r3);
        break;
      case `xlinkType`:
        bt2(e4, `http://www.w3.org/1999/xlink`, `xlink:type`, r3);
        break;
      case `xmlBase`:
        bt2(e4, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r3);
        break;
      case `xmlLang`:
        bt2(e4, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r3);
        break;
      case `xmlSpace`:
        bt2(e4, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r3);
        break;
      case `is`:
        vt2(e4, `is`, r3);
        break;
      case `innerText`:
      case `textContent`:
        break;
      default:
        (!(2 < n3.length) || n3[0] !== `o` && n3[0] !== `O` || n3[1] !== `n` && n3[1] !== `N`) && (n3 = Bt2.get(n3) || n3, vt2(e4, n3, r3));
    }
  }
  function Nd(e4, t3, n3, r3, a3, o3) {
    switch (n3) {
      case `style`:
        Rt2(e4, r3, o3);
        break;
      case `dangerouslySetInnerHTML`:
        if (r3 != null) {
          if (typeof r3 != `object` || !(`__html` in r3)) throw Error(i2(61));
          if (n3 = r3.__html, n3 != null) {
            if (a3.children != null) throw Error(i2(60));
            e4.innerHTML = n3;
          }
        }
        break;
      case `children`:
        typeof r3 == `string` ? Ft2(e4, r3) : (typeof r3 == `number` || typeof r3 == `bigint`) && Ft2(e4, `` + r3);
        break;
      case `onScroll`:
        r3 != null && yd(`scroll`, e4);
        break;
      case `onScrollEnd`:
        r3 != null && yd(`scrollend`, e4);
        break;
      case `onClick`:
        r3 != null && (e4.onclick = Ut2);
        break;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `innerHTML`:
      case `ref`:
        break;
      case `innerText`:
      case `textContent`:
        break;
      default:
        if (!dt2.hasOwnProperty(n3)) a: {
          if (n3[0] === `o` && n3[1] === `n` && (a3 = n3.endsWith(`Capture`), t3 = n3.slice(2, a3 ? n3.length - 7 : void 0), o3 = e4[Ze2] || null, o3 = o3 == null ? null : o3[n3], typeof o3 == `function` && e4.removeEventListener(t3, o3, a3), typeof r3 == `function`)) {
            typeof o3 != `function` && o3 !== null && (n3 in e4 ? e4[n3] = null : e4.hasAttribute(n3) && e4.removeAttribute(n3)), e4.addEventListener(t3, r3, a3);
            break a;
          }
          n3 in e4 ? e4[n3] = r3 : true === r3 ? e4.setAttribute(n3, ``) : vt2(e4, n3, r3);
        }
    }
  }
  function Pd(e4, t3, n3) {
    switch (t3) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `img`:
        yd(`error`, e4), yd(`load`, e4);
        var r3 = false, a3 = false, o3;
        for (o3 in n3) if (n3.hasOwnProperty(o3)) {
          var s3 = n3[o3];
          if (s3 != null) switch (o3) {
            case `src`:
              r3 = true;
              break;
            case `srcSet`:
              a3 = true;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(i2(137, t3));
            default:
              $(e4, t3, o3, s3, n3, null);
          }
        }
        a3 && $(e4, t3, `srcSet`, n3.srcSet, n3, null), r3 && $(e4, t3, `src`, n3.src, n3, null);
        return;
      case `input`:
        yd(`invalid`, e4);
        var c3 = o3 = s3 = a3 = null, l3 = null, u3 = null;
        for (r3 in n3) if (n3.hasOwnProperty(r3)) {
          var d3 = n3[r3];
          if (d3 != null) switch (r3) {
            case `name`:
              a3 = d3;
              break;
            case `type`:
              s3 = d3;
              break;
            case `checked`:
              l3 = d3;
              break;
            case `defaultChecked`:
              u3 = d3;
              break;
            case `value`:
              o3 = d3;
              break;
            case `defaultValue`:
              c3 = d3;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (d3 != null) throw Error(i2(137, t3));
              break;
            default:
              $(e4, t3, r3, d3, n3, null);
          }
        }
        At2(e4, o3, c3, l3, u3, s3, a3, false);
        return;
      case `select`:
        for (a3 in yd(`invalid`, e4), r3 = s3 = o3 = null, n3) if (n3.hasOwnProperty(a3) && (c3 = n3[a3], c3 != null)) switch (a3) {
          case `value`:
            o3 = c3;
            break;
          case `defaultValue`:
            s3 = c3;
            break;
          case `multiple`:
            r3 = c3;
          default:
            $(e4, t3, a3, c3, n3, null);
        }
        t3 = o3, n3 = s3, e4.multiple = !!r3, t3 == null ? n3 != null && Mt2(e4, !!r3, n3, true) : Mt2(e4, !!r3, t3, false);
        return;
      case `textarea`:
        for (s3 in yd(`invalid`, e4), o3 = a3 = r3 = null, n3) if (n3.hasOwnProperty(s3) && (c3 = n3[s3], c3 != null)) switch (s3) {
          case `value`:
            r3 = c3;
            break;
          case `defaultValue`:
            a3 = c3;
            break;
          case `children`:
            o3 = c3;
            break;
          case `dangerouslySetInnerHTML`:
            if (c3 != null) throw Error(i2(91));
            break;
          default:
            $(e4, t3, s3, c3, n3, null);
        }
        Pt2(e4, r3, a3, o3);
        return;
      case `option`:
        for (l3 in n3) if (n3.hasOwnProperty(l3) && (r3 = n3[l3], r3 != null)) switch (l3) {
          case `selected`:
            e4.selected = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
            break;
          default:
            $(e4, t3, l3, r3, n3, null);
        }
        return;
      case `dialog`:
        yd(`beforetoggle`, e4), yd(`toggle`, e4), yd(`cancel`, e4), yd(`close`, e4);
        break;
      case `iframe`:
      case `object`:
        yd(`load`, e4);
        break;
      case `video`:
      case `audio`:
        for (r3 = 0; r3 < gd.length; r3++) yd(gd[r3], e4);
        break;
      case `image`:
        yd(`error`, e4), yd(`load`, e4);
        break;
      case `details`:
        yd(`toggle`, e4);
        break;
      case `embed`:
      case `source`:
      case `link`:
        yd(`error`, e4), yd(`load`, e4);
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (u3 in n3) if (n3.hasOwnProperty(u3) && (r3 = n3[u3], r3 != null)) switch (u3) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(i2(137, t3));
          default:
            $(e4, t3, u3, r3, n3, null);
        }
        return;
      default:
        if (zt2(t3)) {
          for (d3 in n3) n3.hasOwnProperty(d3) && (r3 = n3[d3], r3 !== void 0 && Nd(e4, t3, d3, r3, n3, void 0));
          return;
        }
    }
    for (c3 in n3) n3.hasOwnProperty(c3) && (r3 = n3[c3], r3 != null && $(e4, t3, c3, r3, n3, null));
  }
  function Fd(e4, t3, n3, r3) {
    switch (t3) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `input`:
        var a3 = null, o3 = null, s3 = null, c3 = null, l3 = null, u3 = null, d3 = null;
        for (m3 in n3) {
          var f3 = n3[m3];
          if (n3.hasOwnProperty(m3) && f3 != null) switch (m3) {
            case `checked`:
              break;
            case `value`:
              break;
            case `defaultValue`:
              l3 = f3;
            default:
              r3.hasOwnProperty(m3) || $(e4, t3, m3, null, r3, f3);
          }
        }
        for (var p3 in r3) {
          var m3 = r3[p3];
          if (f3 = n3[p3], r3.hasOwnProperty(p3) && (m3 != null || f3 != null)) switch (p3) {
            case `type`:
              o3 = m3;
              break;
            case `name`:
              a3 = m3;
              break;
            case `checked`:
              u3 = m3;
              break;
            case `defaultChecked`:
              d3 = m3;
              break;
            case `value`:
              s3 = m3;
              break;
            case `defaultValue`:
              c3 = m3;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (m3 != null) throw Error(i2(137, t3));
              break;
            default:
              m3 !== f3 && $(e4, t3, p3, m3, r3, f3);
          }
        }
        kt2(e4, s3, c3, l3, u3, d3, o3, a3);
        return;
      case `select`:
        for (o3 in m3 = s3 = c3 = p3 = null, n3) if (l3 = n3[o3], n3.hasOwnProperty(o3) && l3 != null) switch (o3) {
          case `value`:
            break;
          case `multiple`:
            m3 = l3;
          default:
            r3.hasOwnProperty(o3) || $(e4, t3, o3, null, r3, l3);
        }
        for (a3 in r3) if (o3 = r3[a3], l3 = n3[a3], r3.hasOwnProperty(a3) && (o3 != null || l3 != null)) switch (a3) {
          case `value`:
            p3 = o3;
            break;
          case `defaultValue`:
            c3 = o3;
            break;
          case `multiple`:
            s3 = o3;
          default:
            o3 !== l3 && $(e4, t3, a3, o3, r3, l3);
        }
        t3 = c3, n3 = s3, r3 = m3, p3 == null ? !!r3 != !!n3 && (t3 == null ? Mt2(e4, !!n3, n3 ? [] : ``, false) : Mt2(e4, !!n3, t3, true)) : Mt2(e4, !!n3, p3, false);
        return;
      case `textarea`:
        for (c3 in m3 = p3 = null, n3) if (a3 = n3[c3], n3.hasOwnProperty(c3) && a3 != null && !r3.hasOwnProperty(c3)) switch (c3) {
          case `value`:
            break;
          case `children`:
            break;
          default:
            $(e4, t3, c3, null, r3, a3);
        }
        for (s3 in r3) if (a3 = r3[s3], o3 = n3[s3], r3.hasOwnProperty(s3) && (a3 != null || o3 != null)) switch (s3) {
          case `value`:
            p3 = a3;
            break;
          case `defaultValue`:
            m3 = a3;
            break;
          case `children`:
            break;
          case `dangerouslySetInnerHTML`:
            if (a3 != null) throw Error(i2(91));
            break;
          default:
            a3 !== o3 && $(e4, t3, s3, a3, r3, o3);
        }
        Nt2(e4, p3, m3);
        return;
      case `option`:
        for (var h3 in n3) if (p3 = n3[h3], n3.hasOwnProperty(h3) && p3 != null && !r3.hasOwnProperty(h3)) switch (h3) {
          case `selected`:
            e4.selected = false;
            break;
          default:
            $(e4, t3, h3, null, r3, p3);
        }
        for (l3 in r3) if (p3 = r3[l3], m3 = n3[l3], r3.hasOwnProperty(l3) && p3 !== m3 && (p3 != null || m3 != null)) switch (l3) {
          case `selected`:
            e4.selected = p3 && typeof p3 != `function` && typeof p3 != `symbol`;
            break;
          default:
            $(e4, t3, l3, p3, r3, m3);
        }
        return;
      case `img`:
      case `link`:
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (var g3 in n3) p3 = n3[g3], n3.hasOwnProperty(g3) && p3 != null && !r3.hasOwnProperty(g3) && $(e4, t3, g3, null, r3, p3);
        for (u3 in r3) if (p3 = r3[u3], m3 = n3[u3], r3.hasOwnProperty(u3) && p3 !== m3 && (p3 != null || m3 != null)) switch (u3) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            if (p3 != null) throw Error(i2(137, t3));
            break;
          default:
            $(e4, t3, u3, p3, r3, m3);
        }
        return;
      default:
        if (zt2(t3)) {
          for (var _3 in n3) p3 = n3[_3], n3.hasOwnProperty(_3) && p3 !== void 0 && !r3.hasOwnProperty(_3) && Nd(e4, t3, _3, void 0, r3, p3);
          for (d3 in r3) p3 = r3[d3], m3 = n3[d3], !r3.hasOwnProperty(d3) || p3 === m3 || p3 === void 0 && m3 === void 0 || Nd(e4, t3, d3, p3, r3, m3);
          return;
        }
    }
    for (var v3 in n3) p3 = n3[v3], n3.hasOwnProperty(v3) && p3 != null && !r3.hasOwnProperty(v3) && $(e4, t3, v3, null, r3, p3);
    for (f3 in r3) p3 = r3[f3], m3 = n3[f3], !r3.hasOwnProperty(f3) || p3 === m3 || p3 == null && m3 == null || $(e4, t3, f3, p3, r3, m3);
  }
  function Id(e4) {
    switch (e4) {
      case `css`:
      case `script`:
      case `font`:
      case `img`:
      case `image`:
      case `input`:
      case `link`:
        return true;
      default:
        return false;
    }
  }
  function Ld() {
    if (typeof performance.getEntriesByType == `function`) {
      for (var e4 = 0, t3 = 0, n3 = performance.getEntriesByType(`resource`), r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3], a3 = i3.transferSize, o3 = i3.initiatorType, s3 = i3.duration;
        if (a3 && s3 && Id(o3)) {
          for (o3 = 0, s3 = i3.responseEnd, r3 += 1; r3 < n3.length; r3++) {
            var c3 = n3[r3], l3 = c3.startTime;
            if (l3 > s3) break;
            var u3 = c3.transferSize, d3 = c3.initiatorType;
            u3 && Id(d3) && (c3 = c3.responseEnd, o3 += u3 * (c3 < s3 ? 1 : (s3 - l3) / (c3 - l3)));
          }
          if (--r3, t3 += 8 * (a3 + o3) / (i3.duration / 1e3), e4++, 10 < e4) break;
        }
      }
      if (0 < e4) return t3 / e4 / 1e6;
    }
    return navigator.connection && (e4 = navigator.connection.downlink, typeof e4 == `number`) ? e4 : 5;
  }
  var Rd = null, zd = null;
  function Bd(e4) {
    return e4.nodeType === 9 ? e4 : e4.ownerDocument;
  }
  function Vd(e4) {
    switch (e4) {
      case `http://www.w3.org/2000/svg`:
        return 1;
      case `http://www.w3.org/1998/Math/MathML`:
        return 2;
      default:
        return 0;
    }
  }
  function Hd(e4, t3) {
    if (e4 === 0) switch (t3) {
      case `svg`:
        return 1;
      case `math`:
        return 2;
      default:
        return 0;
    }
    return e4 === 1 && t3 === `foreignObject` ? 0 : e4;
  }
  function Ud(e4, t3) {
    return e4 === `textarea` || e4 === `noscript` || typeof t3.children == `string` || typeof t3.children == `number` || typeof t3.children == `bigint` || typeof t3.dangerouslySetInnerHTML == `object` && t3.dangerouslySetInnerHTML !== null && t3.dangerouslySetInnerHTML.__html != null;
  }
  var Wd = null;
  function Gd() {
    var e4 = window.event;
    return e4 && e4.type === `popstate` ? e4 !== Wd && (Wd = e4, true) : (Wd = null, false);
  }
  var Kd = typeof setTimeout == `function` ? setTimeout : void 0, qd = typeof clearTimeout == `function` ? clearTimeout : void 0, Jd = typeof Promise == `function` ? Promise : void 0, Yd = typeof queueMicrotask == `function` ? queueMicrotask : Jd === void 0 ? Kd : function(e4) {
    return Jd.resolve(null).then(e4).catch(Xd);
  };
  function Xd(e4) {
    setTimeout(function() {
      throw e4;
    });
  }
  function Zd(e4) {
    return e4 === `head`;
  }
  function Qd(e4, t3) {
    var n3 = t3, r3 = 0;
    do {
      var i3 = n3.nextSibling;
      if (e4.removeChild(n3), i3 && i3.nodeType === 8) {
        if (n3 = i3.data, n3 === `/$` || n3 === `/&`) {
          if (r3 === 0) {
            e4.removeChild(i3), Np(t3);
            return;
          }
          r3--;
        } else if (n3 === `$` || n3 === `$?` || n3 === `$~` || n3 === `$!` || n3 === `&`) r3++;
        else if (n3 === `html`) pf(e4.ownerDocument.documentElement);
        else if (n3 === `head`) {
          n3 = e4.ownerDocument.head, pf(n3);
          for (var a3 = n3.firstChild; a3; ) {
            var o3 = a3.nextSibling, s3 = a3.nodeName;
            a3[rt2] || s3 === `SCRIPT` || s3 === `STYLE` || s3 === `LINK` && a3.rel.toLowerCase() === `stylesheet` || n3.removeChild(a3), a3 = o3;
          }
        } else n3 === `body` && pf(e4.ownerDocument.body);
      }
      n3 = i3;
    } while (n3);
    Np(t3);
  }
  function $d(e4, t3) {
    var n3 = e4;
    e4 = 0;
    do {
      var r3 = n3.nextSibling;
      if (n3.nodeType === 1 ? t3 ? (n3._stashedDisplay = n3.style.display, n3.style.display = `none`) : (n3.style.display = n3._stashedDisplay || ``, n3.getAttribute(`style`) === `` && n3.removeAttribute(`style`)) : n3.nodeType === 3 && (t3 ? (n3._stashedText = n3.nodeValue, n3.nodeValue = ``) : n3.nodeValue = n3._stashedText || ``), r3 && r3.nodeType === 8) {
        if (n3 = r3.data, n3 === `/$`) {
          if (e4 === 0) break;
          e4--;
        } else n3 !== `$` && n3 !== `$?` && n3 !== `$~` && n3 !== `$!` || e4++;
      }
      n3 = r3;
    } while (n3);
  }
  function ef(e4) {
    var t3 = e4.firstChild;
    for (t3 && t3.nodeType === 10 && (t3 = t3.nextSibling); t3; ) {
      var n3 = t3;
      switch (t3 = t3.nextSibling, n3.nodeName) {
        case `HTML`:
        case `HEAD`:
        case `BODY`:
          ef(n3), it2(n3);
          continue;
        case `SCRIPT`:
        case `STYLE`:
          continue;
        case `LINK`:
          if (n3.rel.toLowerCase() === `stylesheet`) continue;
      }
      e4.removeChild(n3);
    }
  }
  function tf(e4, t3, n3, r3) {
    for (; e4.nodeType === 1; ) {
      var i3 = n3;
      if (e4.nodeName.toLowerCase() !== t3.toLowerCase()) {
        if (!r3 && (e4.nodeName !== `INPUT` || e4.type !== `hidden`)) break;
      } else if (!r3) {
        if (t3 === `input` && e4.type === `hidden`) {
          var a3 = i3.name == null ? null : `` + i3.name;
          if (i3.type === `hidden` && e4.getAttribute(`name`) === a3) return e4;
        } else return e4;
      } else if (!e4[rt2]) switch (t3) {
        case `meta`:
          if (!e4.hasAttribute(`itemprop`)) break;
          return e4;
        case `link`:
          if (a3 = e4.getAttribute(`rel`), a3 === `stylesheet` && e4.hasAttribute(`data-precedence`) || a3 !== i3.rel || e4.getAttribute(`href`) !== (i3.href == null || i3.href === `` ? null : i3.href) || e4.getAttribute(`crossorigin`) !== (i3.crossOrigin == null ? null : i3.crossOrigin) || e4.getAttribute(`title`) !== (i3.title == null ? null : i3.title)) break;
          return e4;
        case `style`:
          if (e4.hasAttribute(`data-precedence`)) break;
          return e4;
        case `script`:
          if (a3 = e4.getAttribute(`src`), (a3 !== (i3.src == null ? null : i3.src) || e4.getAttribute(`type`) !== (i3.type == null ? null : i3.type) || e4.getAttribute(`crossorigin`) !== (i3.crossOrigin == null ? null : i3.crossOrigin)) && a3 && e4.hasAttribute(`async`) && !e4.hasAttribute(`itemprop`)) break;
          return e4;
        default:
          return e4;
      }
      if (e4 = cf(e4.nextSibling), e4 === null) break;
    }
    return null;
  }
  function nf(e4, t3, n3) {
    if (t3 === ``) return null;
    for (; e4.nodeType !== 3; ) if ((e4.nodeType !== 1 || e4.nodeName !== `INPUT` || e4.type !== `hidden`) && !n3 || (e4 = cf(e4.nextSibling), e4 === null)) return null;
    return e4;
  }
  function rf(e4, t3) {
    for (; e4.nodeType !== 8; ) if ((e4.nodeType !== 1 || e4.nodeName !== `INPUT` || e4.type !== `hidden`) && !t3 || (e4 = cf(e4.nextSibling), e4 === null)) return null;
    return e4;
  }
  function af(e4) {
    return e4.data === `$?` || e4.data === `$~`;
  }
  function of(e4) {
    return e4.data === `$!` || e4.data === `$?` && e4.ownerDocument.readyState !== `loading`;
  }
  function sf(e4, t3) {
    var n3 = e4.ownerDocument;
    if (e4.data === `$~`) e4._reactRetry = t3;
    else if (e4.data !== `$?` || n3.readyState !== `loading`) t3();
    else {
      var r3 = function() {
        t3(), n3.removeEventListener(`DOMContentLoaded`, r3);
      };
      n3.addEventListener(`DOMContentLoaded`, r3), e4._reactRetry = r3;
    }
  }
  function cf(e4) {
    for (; e4 != null; e4 = e4.nextSibling) {
      var t3 = e4.nodeType;
      if (t3 === 1 || t3 === 3) break;
      if (t3 === 8) {
        if (t3 = e4.data, t3 === `$` || t3 === `$!` || t3 === `$?` || t3 === `$~` || t3 === `&` || t3 === `F!` || t3 === `F`) break;
        if (t3 === `/$` || t3 === `/&`) return null;
      }
    }
    return e4;
  }
  var lf = null;
  function uf(e4) {
    e4 = e4.nextSibling;
    for (var t3 = 0; e4; ) {
      if (e4.nodeType === 8) {
        var n3 = e4.data;
        if (n3 === `/$` || n3 === `/&`) {
          if (t3 === 0) return cf(e4.nextSibling);
          t3--;
        } else n3 !== `$` && n3 !== `$!` && n3 !== `$?` && n3 !== `$~` && n3 !== `&` || t3++;
      }
      e4 = e4.nextSibling;
    }
    return null;
  }
  function df(e4) {
    e4 = e4.previousSibling;
    for (var t3 = 0; e4; ) {
      if (e4.nodeType === 8) {
        var n3 = e4.data;
        if (n3 === `$` || n3 === `$!` || n3 === `$?` || n3 === `$~` || n3 === `&`) {
          if (t3 === 0) return e4;
          t3--;
        } else n3 !== `/$` && n3 !== `/&` || t3++;
      }
      e4 = e4.previousSibling;
    }
    return null;
  }
  function ff(e4, t3, n3) {
    switch (t3 = Bd(n3), e4) {
      case `html`:
        if (e4 = t3.documentElement, !e4) throw Error(i2(452));
        return e4;
      case `head`:
        if (e4 = t3.head, !e4) throw Error(i2(453));
        return e4;
      case `body`:
        if (e4 = t3.body, !e4) throw Error(i2(454));
        return e4;
      default:
        throw Error(i2(451));
    }
  }
  function pf(e4) {
    for (var t3 = e4.attributes; t3.length; ) e4.removeAttributeNode(t3[0]);
    it2(e4);
  }
  var mf = /* @__PURE__ */ new Map(), hf = /* @__PURE__ */ new Set();
  function gf(e4) {
    return typeof e4.getRootNode == `function` ? e4.getRootNode() : e4.nodeType === 9 ? e4 : e4.ownerDocument;
  }
  var _f = P2.d;
  P2.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
  function vf() {
    var e4 = _f.f(), t3 = vu();
    return e4 || t3;
  }
  function yf(e4) {
    var t3 = ot2(e4);
    t3 !== null && t3.tag === 5 && t3.type === `form` ? vs2(t3) : _f.r(e4);
  }
  var bf = typeof document > `u` ? null : document;
  function xf(e4, t3, n3) {
    var r3 = bf;
    if (r3 && typeof t3 == `string` && t3) {
      var i3 = Ot2(t3);
      i3 = `link[rel="` + e4 + `"][href="` + i3 + `"]`, typeof n3 == `string` && (i3 += `[crossorigin="` + n3 + `"]`), hf.has(i3) || (hf.add(i3), e4 = { rel: e4, crossOrigin: n3, href: t3 }, r3.querySelector(i3) === null && (t3 = r3.createElement(`link`), Pd(t3, `link`, e4), lt2(t3), r3.head.appendChild(t3)));
    }
  }
  function Sf(e4) {
    _f.D(e4), xf(`dns-prefetch`, e4, null);
  }
  function Cf(e4, t3) {
    _f.C(e4, t3), xf(`preconnect`, e4, t3);
  }
  function wf(e4, t3, n3) {
    _f.L(e4, t3, n3);
    var r3 = bf;
    if (r3 && e4 && t3) {
      var i3 = `link[rel="preload"][as="` + Ot2(t3) + `"]`;
      t3 === `image` && n3 && n3.imageSrcSet ? (i3 += `[imagesrcset="` + Ot2(n3.imageSrcSet) + `"]`, typeof n3.imageSizes == `string` && (i3 += `[imagesizes="` + Ot2(n3.imageSizes) + `"]`)) : i3 += `[href="` + Ot2(e4) + `"]`;
      var a3 = i3;
      switch (t3) {
        case `style`:
          a3 = Af(e4);
          break;
        case `script`:
          a3 = Pf(e4);
      }
      mf.has(a3) || (e4 = f2({ rel: `preload`, href: t3 === `image` && n3 && n3.imageSrcSet ? void 0 : e4, as: t3 }, n3), mf.set(a3, e4), r3.querySelector(i3) !== null || t3 === `style` && r3.querySelector(jf(a3)) || t3 === `script` && r3.querySelector(Ff(a3)) || (t3 = r3.createElement(`link`), Pd(t3, `link`, e4), lt2(t3), r3.head.appendChild(t3)));
    }
  }
  function Tf(e4, t3) {
    _f.m(e4, t3);
    var n3 = bf;
    if (n3 && e4) {
      var r3 = t3 && typeof t3.as == `string` ? t3.as : `script`, i3 = `link[rel="modulepreload"][as="` + Ot2(r3) + `"][href="` + Ot2(e4) + `"]`, a3 = i3;
      switch (r3) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          a3 = Pf(e4);
      }
      if (!mf.has(a3) && (e4 = f2({ rel: `modulepreload`, href: e4 }, t3), mf.set(a3, e4), n3.querySelector(i3) === null)) {
        switch (r3) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            if (n3.querySelector(Ff(a3))) return;
        }
        r3 = n3.createElement(`link`), Pd(r3, `link`, e4), lt2(r3), n3.head.appendChild(r3);
      }
    }
  }
  function Ef(e4, t3, n3) {
    _f.S(e4, t3, n3);
    var r3 = bf;
    if (r3 && e4) {
      var i3 = ct2(r3).hoistableStyles, a3 = Af(e4);
      t3 || (t3 = `default`);
      var o3 = i3.get(a3);
      if (!o3) {
        var s3 = { loading: 0, preload: null };
        if (o3 = r3.querySelector(jf(a3))) s3.loading = 5;
        else {
          e4 = f2({ rel: `stylesheet`, href: e4, "data-precedence": t3 }, n3), (n3 = mf.get(a3)) && Rf(e4, n3);
          var c3 = o3 = r3.createElement(`link`);
          lt2(c3), Pd(c3, `link`, e4), c3._p = new Promise(function(e5, t4) {
            c3.onload = e5, c3.onerror = t4;
          }), c3.addEventListener(`load`, function() {
            s3.loading |= 1;
          }), c3.addEventListener(`error`, function() {
            s3.loading |= 2;
          }), s3.loading |= 4, Lf(o3, t3, r3);
        }
        o3 = { type: `stylesheet`, instance: o3, count: 1, state: s3 }, i3.set(a3, o3);
      }
    }
  }
  function Df(e4, t3) {
    _f.X(e4, t3);
    var n3 = bf;
    if (n3 && e4) {
      var r3 = ct2(n3).hoistableScripts, i3 = Pf(e4), a3 = r3.get(i3);
      a3 || (a3 = n3.querySelector(Ff(i3)), a3 || (e4 = f2({ src: e4, async: true }, t3), (t3 = mf.get(i3)) && zf(e4, t3), a3 = n3.createElement(`script`), lt2(a3), Pd(a3, `link`, e4), n3.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i3, a3));
    }
  }
  function Of(e4, t3) {
    _f.M(e4, t3);
    var n3 = bf;
    if (n3 && e4) {
      var r3 = ct2(n3).hoistableScripts, i3 = Pf(e4), a3 = r3.get(i3);
      a3 || (a3 = n3.querySelector(Ff(i3)), a3 || (e4 = f2({ src: e4, async: true, type: `module` }, t3), (t3 = mf.get(i3)) && zf(e4, t3), a3 = n3.createElement(`script`), lt2(a3), Pd(a3, `link`, e4), n3.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i3, a3));
    }
  }
  function kf(e4, t3, n3, r3) {
    var a3 = (a3 = V2.current) ? gf(a3) : null;
    if (!a3) throw Error(i2(446));
    switch (e4) {
      case `meta`:
      case `title`:
        return null;
      case `style`:
        return typeof n3.precedence == `string` && typeof n3.href == `string` ? (t3 = Af(n3.href), n3 = ct2(a3).hoistableStyles, r3 = n3.get(t3), r3 || (r3 = { type: `style`, instance: null, count: 0, state: null }, n3.set(t3, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
      case `link`:
        if (n3.rel === `stylesheet` && typeof n3.href == `string` && typeof n3.precedence == `string`) {
          e4 = Af(n3.href);
          var o3 = ct2(a3).hoistableStyles, s3 = o3.get(e4);
          if (s3 || (a3 = a3.ownerDocument || a3, s3 = { type: `stylesheet`, instance: null, count: 0, state: { loading: 0, preload: null } }, o3.set(e4, s3), (o3 = a3.querySelector(jf(e4))) && !o3._p && (s3.instance = o3, s3.state.loading = 5), mf.has(e4) || (n3 = { rel: `preload`, as: `style`, href: n3.href, crossOrigin: n3.crossOrigin, integrity: n3.integrity, media: n3.media, hrefLang: n3.hrefLang, referrerPolicy: n3.referrerPolicy }, mf.set(e4, n3), o3 || Nf(a3, e4, n3, s3.state))), t3 && r3 === null) throw Error(i2(528, ``));
          return s3;
        }
        if (t3 && r3 !== null) throw Error(i2(529, ``));
        return null;
      case `script`:
        return t3 = n3.async, n3 = n3.src, typeof n3 == `string` && t3 && typeof t3 != `function` && typeof t3 != `symbol` ? (t3 = Pf(n3), n3 = ct2(a3).hoistableScripts, r3 = n3.get(t3), r3 || (r3 = { type: `script`, instance: null, count: 0, state: null }, n3.set(t3, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
      default:
        throw Error(i2(444, e4));
    }
  }
  function Af(e4) {
    return `href="` + Ot2(e4) + `"`;
  }
  function jf(e4) {
    return `link[rel="stylesheet"][` + e4 + `]`;
  }
  function Mf(e4) {
    return f2({}, e4, { "data-precedence": e4.precedence, precedence: null });
  }
  function Nf(e4, t3, n3, r3) {
    e4.querySelector(`link[rel="preload"][as="style"][` + t3 + `]`) ? r3.loading = 1 : (t3 = e4.createElement(`link`), r3.preload = t3, t3.addEventListener(`load`, function() {
      return r3.loading |= 1;
    }), t3.addEventListener(`error`, function() {
      return r3.loading |= 2;
    }), Pd(t3, `link`, n3), lt2(t3), e4.head.appendChild(t3));
  }
  function Pf(e4) {
    return `[src="` + Ot2(e4) + `"]`;
  }
  function Ff(e4) {
    return `script[async]` + e4;
  }
  function If(e4, t3, n3) {
    if (t3.count++, t3.instance === null) switch (t3.type) {
      case `style`:
        var r3 = e4.querySelector(`style[data-href~="` + Ot2(n3.href) + `"]`);
        if (r3) return t3.instance = r3, lt2(r3), r3;
        var a3 = f2({}, n3, { "data-href": n3.href, "data-precedence": n3.precedence, href: null, precedence: null });
        return r3 = (e4.ownerDocument || e4).createElement(`style`), lt2(r3), Pd(r3, `style`, a3), Lf(r3, n3.precedence, e4), t3.instance = r3;
      case `stylesheet`:
        a3 = Af(n3.href);
        var o3 = e4.querySelector(jf(a3));
        if (o3) return t3.state.loading |= 4, t3.instance = o3, lt2(o3), o3;
        r3 = Mf(n3), (a3 = mf.get(a3)) && Rf(r3, a3), o3 = (e4.ownerDocument || e4).createElement(`link`), lt2(o3);
        var s3 = o3;
        return s3._p = new Promise(function(e5, t4) {
          s3.onload = e5, s3.onerror = t4;
        }), Pd(o3, `link`, r3), t3.state.loading |= 4, Lf(o3, n3.precedence, e4), t3.instance = o3;
      case `script`:
        return o3 = Pf(n3.src), (a3 = e4.querySelector(Ff(o3))) ? (t3.instance = a3, lt2(a3), a3) : (r3 = n3, (a3 = mf.get(o3)) && (r3 = f2({}, n3), zf(r3, a3)), e4 = e4.ownerDocument || e4, a3 = e4.createElement(`script`), lt2(a3), Pd(a3, `link`, r3), e4.head.appendChild(a3), t3.instance = a3);
      case `void`:
        return null;
      default:
        throw Error(i2(443, t3.type));
    }
    else t3.type === `stylesheet` && !(t3.state.loading & 4) && (r3 = t3.instance, t3.state.loading |= 4, Lf(r3, n3.precedence, e4));
    return t3.instance;
  }
  function Lf(e4, t3, n3) {
    for (var r3 = n3.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i3 = r3.length ? r3[r3.length - 1] : null, a3 = i3, o3 = 0; o3 < r3.length; o3++) {
      var s3 = r3[o3];
      if (s3.dataset.precedence === t3) a3 = s3;
      else if (a3 !== i3) break;
    }
    a3 ? a3.parentNode.insertBefore(e4, a3.nextSibling) : (t3 = n3.nodeType === 9 ? n3.head : n3, t3.insertBefore(e4, t3.firstChild));
  }
  function Rf(e4, t3) {
    e4.crossOrigin ?? (e4.crossOrigin = t3.crossOrigin), e4.referrerPolicy ?? (e4.referrerPolicy = t3.referrerPolicy), e4.title ?? (e4.title = t3.title);
  }
  function zf(e4, t3) {
    e4.crossOrigin ?? (e4.crossOrigin = t3.crossOrigin), e4.referrerPolicy ?? (e4.referrerPolicy = t3.referrerPolicy), e4.integrity ?? (e4.integrity = t3.integrity);
  }
  var Bf = null;
  function Vf(e4, t3, n3) {
    if (Bf === null) {
      var r3 = /* @__PURE__ */ new Map(), i3 = Bf = /* @__PURE__ */ new Map();
      i3.set(n3, r3);
    } else i3 = Bf, r3 = i3.get(n3), r3 || (r3 = /* @__PURE__ */ new Map(), i3.set(n3, r3));
    if (r3.has(e4)) return r3;
    for (r3.set(e4, null), n3 = n3.getElementsByTagName(e4), i3 = 0; i3 < n3.length; i3++) {
      var a3 = n3[i3];
      if (!(a3[rt2] || a3[Xe2] || e4 === `link` && a3.getAttribute(`rel`) === `stylesheet`) && a3.namespaceURI !== `http://www.w3.org/2000/svg`) {
        var o3 = a3.getAttribute(t3) || ``;
        o3 = e4 + o3;
        var s3 = r3.get(o3);
        s3 ? s3.push(a3) : r3.set(o3, [a3]);
      }
    }
    return r3;
  }
  function Hf(e4, t3, n3) {
    e4 = e4.ownerDocument || e4, e4.head.insertBefore(n3, t3 === `title` ? e4.querySelector(`head > title`) : null);
  }
  function Uf(e4, t3, n3) {
    if (n3 === 1 || t3.itemProp != null) return false;
    switch (e4) {
      case `meta`:
      case `title`:
        return true;
      case `style`:
        if (typeof t3.precedence != `string` || typeof t3.href != `string` || t3.href === ``) break;
        return true;
      case `link`:
        if (typeof t3.rel != `string` || typeof t3.href != `string` || t3.href === `` || t3.onLoad || t3.onError) break;
        switch (t3.rel) {
          case `stylesheet`:
            return e4 = t3.disabled, typeof t3.precedence == `string` && e4 == null;
          default:
            return true;
        }
      case `script`:
        if (t3.async && typeof t3.async != `function` && typeof t3.async != `symbol` && !t3.onLoad && !t3.onError && t3.src && typeof t3.src == `string`) return true;
    }
    return false;
  }
  function Wf(e4) {
    return !(e4.type === `stylesheet` && !(e4.state.loading & 3));
  }
  function Gf(e4, t3, n3, r3) {
    if (n3.type === `stylesheet` && (typeof r3.media != `string` || false !== matchMedia(r3.media).matches) && !(n3.state.loading & 4)) {
      if (n3.instance === null) {
        var i3 = Af(r3.href), a3 = t3.querySelector(jf(i3));
        if (a3) {
          t3 = a3._p, typeof t3 == `object` && t3 && typeof t3.then == `function` && (e4.count++, e4 = Jf.bind(e4), t3.then(e4, e4)), n3.state.loading |= 4, n3.instance = a3, lt2(a3);
          return;
        }
        a3 = t3.ownerDocument || t3, r3 = Mf(r3), (i3 = mf.get(i3)) && Rf(r3, i3), a3 = a3.createElement(`link`), lt2(a3);
        var o3 = a3;
        o3._p = new Promise(function(e5, t4) {
          o3.onload = e5, o3.onerror = t4;
        }), Pd(a3, `link`, r3), n3.instance = a3;
      }
      e4.stylesheets === null && (e4.stylesheets = /* @__PURE__ */ new Map()), e4.stylesheets.set(n3, t3), (t3 = n3.state.preload) && !(n3.state.loading & 3) && (e4.count++, n3 = Jf.bind(e4), t3.addEventListener(`load`, n3), t3.addEventListener(`error`, n3));
    }
  }
  var Kf = 0;
  function qf(e4, t3) {
    return e4.stylesheets && e4.count === 0 && Xf(e4, e4.stylesheets), 0 < e4.count || 0 < e4.imgCount ? function(n3) {
      var r3 = setTimeout(function() {
        if (e4.stylesheets && Xf(e4, e4.stylesheets), e4.unsuspend) {
          var t4 = e4.unsuspend;
          e4.unsuspend = null, t4();
        }
      }, 6e4 + t3);
      0 < e4.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
      var i3 = setTimeout(function() {
        if (e4.waitingForImages = false, e4.count === 0 && (e4.stylesheets && Xf(e4, e4.stylesheets), e4.unsuspend)) {
          var t4 = e4.unsuspend;
          e4.unsuspend = null, t4();
        }
      }, (e4.imgBytes > Kf ? 50 : 800) + t3);
      return e4.unsuspend = n3, function() {
        e4.unsuspend = null, clearTimeout(r3), clearTimeout(i3);
      };
    } : null;
  }
  function Jf() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Xf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e4 = this.unsuspend;
        this.unsuspend = null, e4();
      }
    }
  }
  var Yf = null;
  function Xf(e4, t3) {
    e4.stylesheets = null, e4.unsuspend !== null && (e4.count++, Yf = /* @__PURE__ */ new Map(), t3.forEach(Zf, e4), Yf = null, Jf.call(e4));
  }
  function Zf(e4, t3) {
    if (!(t3.state.loading & 4)) {
      var n3 = Yf.get(e4);
      if (n3) var r3 = n3.get(null);
      else {
        n3 = /* @__PURE__ */ new Map(), Yf.set(e4, n3);
        for (var i3 = e4.querySelectorAll(`link[data-precedence],style[data-precedence]`), a3 = 0; a3 < i3.length; a3++) {
          var o3 = i3[a3];
          (o3.nodeName === `LINK` || o3.getAttribute(`media`) !== `not all`) && (n3.set(o3.dataset.precedence, o3), r3 = o3);
        }
        r3 && n3.set(null, r3);
      }
      i3 = t3.instance, o3 = i3.getAttribute(`data-precedence`), a3 = n3.get(o3) || r3, a3 === r3 && n3.set(null, i3), n3.set(o3, i3), this.count++, r3 = Jf.bind(this), i3.addEventListener(`load`, r3), i3.addEventListener(`error`, r3), a3 ? a3.parentNode.insertBefore(i3, a3.nextSibling) : (e4 = e4.nodeType === 9 ? e4.head : e4, e4.insertBefore(i3, e4.firstChild)), t3.state.loading |= 4;
    }
  }
  var Qf = { $$typeof: b2, Provider: null, Consumer: null, _currentValue: F2, _currentValue2: F2, _threadCount: 0 };
  function $f(e4, t3, n3, r3, i3, a3, o3, s3, c3) {
    this.tag = 1, this.containerInfo = e4, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Le2(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Le2(0), this.hiddenUpdates = Le2(null), this.identifierPrefix = r3, this.onUncaughtError = i3, this.onCaughtError = a3, this.onRecoverableError = o3, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c3, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ep(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3) {
    return e4 = new $f(e4, t3, n3, o3, c3, l3, u3, d3, s3), t3 = 1, true === a3 && (t3 |= 24), a3 = Qr2(3, null, null, t3), e4.current = a3, a3.stateNode = e4, t3 = $i2(), t3.refCount++, e4.pooledCache = t3, t3.refCount++, a3.memoizedState = { element: r3, isDehydrated: n3, cache: t3 }, Aa2(a3), e4;
  }
  function tp(e4) {
    return e4 ? (e4 = Xr2, e4) : Xr2;
  }
  function np(e4, t3, n3, r3, i3, a3) {
    i3 = tp(i3), r3.context === null ? r3.context = i3 : r3.pendingContext = i3, r3 = Ma2(t3), r3.payload = { element: n3 }, a3 = a3 === void 0 ? null : a3, a3 !== null && (r3.callback = a3), n3 = Na2(e4, r3, t3), n3 !== null && (pu(n3, e4, t3), Pa2(n3, e4, t3));
  }
  function rp(e4, t3) {
    if (e4 = e4.memoizedState, e4 !== null && e4.dehydrated !== null) {
      var n3 = e4.retryLane;
      e4.retryLane = n3 !== 0 && n3 < t3 ? n3 : t3;
    }
  }
  function ip(e4, t3) {
    rp(e4, t3), (e4 = e4.alternate) && rp(e4, t3);
  }
  function ap(e4) {
    if (e4.tag === 13 || e4.tag === 31) {
      var t3 = qr2(e4, 67108864);
      t3 !== null && pu(t3, e4, 67108864), ip(e4, 67108864);
    }
  }
  function op(e4) {
    if (e4.tag === 13 || e4.tag === 31) {
      var t3 = du();
      t3 = Ge2(t3);
      var n3 = qr2(e4, t3);
      n3 !== null && pu(n3, e4, t3), ip(e4, t3);
    }
  }
  var sp = true;
  function cp(e4, t3, n3, r3) {
    var i3 = N2.T;
    N2.T = null;
    var a3 = P2.p;
    try {
      P2.p = 2, up(e4, t3, n3, r3);
    } finally {
      P2.p = a3, N2.T = i3;
    }
  }
  function lp(e4, t3, n3, r3) {
    var i3 = N2.T;
    N2.T = null;
    var a3 = P2.p;
    try {
      P2.p = 8, up(e4, t3, n3, r3);
    } finally {
      P2.p = a3, N2.T = i3;
    }
  }
  function up(e4, t3, n3, r3) {
    if (sp) {
      var i3 = dp(r3);
      if (i3 === null) wd(e4, t3, r3, fp, n3), Cp(e4, r3);
      else if (Tp(i3, e4, t3, n3, r3)) r3.stopPropagation();
      else if (Cp(e4, r3), t3 & 4 && -1 < Sp.indexOf(e4)) {
        for (; i3 !== null; ) {
          var a3 = ot2(i3);
          if (a3 !== null) switch (a3.tag) {
            case 3:
              if (a3 = a3.stateNode, a3.current.memoizedState.isDehydrated) {
                var o3 = K2(a3.pendingLanes);
                if (o3 !== 0) {
                  var s3 = a3;
                  for (s3.pendingLanes |= 2, s3.entangledLanes |= 2; o3; ) {
                    var c3 = 1 << 31 - Oe2(o3);
                    s3.entanglements[1] |= c3, o3 &= ~c3;
                  }
                  nd(a3), !(Q & 6) && ($l = ge2() + 500, rd(0, false));
                }
              }
              break;
            case 31:
            case 13:
              s3 = qr2(a3, 2), s3 !== null && pu(s3, a3, 2), vu(), ip(a3, 2);
          }
          if (a3 = dp(r3), a3 === null && wd(e4, t3, r3, fp, n3), a3 === i3) break;
          i3 = a3;
        }
        i3 !== null && r3.stopPropagation();
      } else wd(e4, t3, r3, null, n3);
    }
  }
  function dp(e4) {
    return e4 = Gt2(e4), pp(e4);
  }
  var fp = null;
  function pp(e4) {
    if (fp = null, e4 = at2(e4), e4 !== null) {
      var t3 = o2(e4);
      if (t3 === null) e4 = null;
      else {
        var n3 = t3.tag;
        if (n3 === 13) {
          if (e4 = s2(t3), e4 !== null) return e4;
          e4 = null;
        } else if (n3 === 31) {
          if (e4 = c2(t3), e4 !== null) return e4;
          e4 = null;
        } else if (n3 === 3) {
          if (t3.stateNode.current.memoizedState.isDehydrated) return t3.tag === 3 ? t3.stateNode.containerInfo : null;
          e4 = null;
        } else t3 !== e4 && (e4 = null);
      }
    }
    return fp = e4, null;
  }
  function mp(e4) {
    switch (e4) {
      case `beforetoggle`:
      case `cancel`:
      case `click`:
      case `close`:
      case `contextmenu`:
      case `copy`:
      case `cut`:
      case `auxclick`:
      case `dblclick`:
      case `dragend`:
      case `dragstart`:
      case `drop`:
      case `focusin`:
      case `focusout`:
      case `input`:
      case `invalid`:
      case `keydown`:
      case `keypress`:
      case `keyup`:
      case `mousedown`:
      case `mouseup`:
      case `paste`:
      case `pause`:
      case `play`:
      case `pointercancel`:
      case `pointerdown`:
      case `pointerup`:
      case `ratechange`:
      case `reset`:
      case `resize`:
      case `seeked`:
      case `submit`:
      case `toggle`:
      case `touchcancel`:
      case `touchend`:
      case `touchstart`:
      case `volumechange`:
      case `change`:
      case `selectionchange`:
      case `textInput`:
      case `compositionstart`:
      case `compositionend`:
      case `compositionupdate`:
      case `beforeblur`:
      case `afterblur`:
      case `beforeinput`:
      case `blur`:
      case `fullscreenchange`:
      case `focus`:
      case `hashchange`:
      case `popstate`:
      case `select`:
      case `selectstart`:
        return 2;
      case `drag`:
      case `dragenter`:
      case `dragexit`:
      case `dragleave`:
      case `dragover`:
      case `mousemove`:
      case `mouseout`:
      case `mouseover`:
      case `pointermove`:
      case `pointerout`:
      case `pointerover`:
      case `scroll`:
      case `touchmove`:
      case `wheel`:
      case `mouseenter`:
      case `mouseleave`:
      case `pointerenter`:
      case `pointerleave`:
        return 8;
      case `message`:
        switch (_e2()) {
          case ve2:
            return 2;
          case ye2:
            return 8;
          case be2:
          case xe2:
            return 32;
          case Se2:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hp = false, gp = null, _p = null, vp = null, yp = /* @__PURE__ */ new Map(), bp = /* @__PURE__ */ new Map(), xp = [], Sp = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
  function Cp(e4, t3) {
    switch (e4) {
      case `focusin`:
      case `focusout`:
        gp = null;
        break;
      case `dragenter`:
      case `dragleave`:
        _p = null;
        break;
      case `mouseover`:
      case `mouseout`:
        vp = null;
        break;
      case `pointerover`:
      case `pointerout`:
        yp.delete(t3.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        bp.delete(t3.pointerId);
    }
  }
  function wp(e4, t3, n3, r3, i3, a3) {
    return e4 === null || e4.nativeEvent !== a3 ? (e4 = { blockedOn: t3, domEventName: n3, eventSystemFlags: r3, nativeEvent: a3, targetContainers: [i3] }, t3 !== null && (t3 = ot2(t3), t3 !== null && ap(t3)), e4) : (e4.eventSystemFlags |= r3, t3 = e4.targetContainers, i3 !== null && t3.indexOf(i3) === -1 && t3.push(i3), e4);
  }
  function Tp(e4, t3, n3, r3, i3) {
    switch (t3) {
      case `focusin`:
        return gp = wp(gp, e4, t3, n3, r3, i3), true;
      case `dragenter`:
        return _p = wp(_p, e4, t3, n3, r3, i3), true;
      case `mouseover`:
        return vp = wp(vp, e4, t3, n3, r3, i3), true;
      case `pointerover`:
        var a3 = i3.pointerId;
        return yp.set(a3, wp(yp.get(a3) || null, e4, t3, n3, r3, i3)), true;
      case `gotpointercapture`:
        return a3 = i3.pointerId, bp.set(a3, wp(bp.get(a3) || null, e4, t3, n3, r3, i3)), true;
    }
    return false;
  }
  function Ep(e4) {
    var t3 = at2(e4.target);
    if (t3 !== null) {
      var n3 = o2(t3);
      if (n3 !== null) {
        if (t3 = n3.tag, t3 === 13) {
          if (t3 = s2(n3), t3 !== null) {
            e4.blockedOn = t3, Je2(e4.priority, function() {
              op(n3);
            });
            return;
          }
        } else if (t3 === 31) {
          if (t3 = c2(n3), t3 !== null) {
            e4.blockedOn = t3, Je2(e4.priority, function() {
              op(n3);
            });
            return;
          }
        } else if (t3 === 3 && n3.stateNode.current.memoizedState.isDehydrated) {
          e4.blockedOn = n3.tag === 3 ? n3.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e4.blockedOn = null;
  }
  function Dp(e4) {
    if (e4.blockedOn !== null) return false;
    for (var t3 = e4.targetContainers; 0 < t3.length; ) {
      var n3 = dp(e4.nativeEvent);
      if (n3 === null) {
        n3 = e4.nativeEvent;
        var r3 = new n3.constructor(n3.type, n3);
        Wt2 = r3, n3.target.dispatchEvent(r3), Wt2 = null;
      } else return t3 = ot2(n3), t3 !== null && ap(t3), e4.blockedOn = n3, false;
      t3.shift();
    }
    return true;
  }
  function Op(e4, t3, n3) {
    Dp(e4) && n3.delete(t3);
  }
  function kp() {
    hp = false, gp !== null && Dp(gp) && (gp = null), _p !== null && Dp(_p) && (_p = null), vp !== null && Dp(vp) && (vp = null), yp.forEach(Op), bp.forEach(Op);
  }
  function Ap(e4, n3) {
    e4.blockedOn === n3 && (e4.blockedOn = null, hp || (hp = true, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, kp)));
  }
  var jp = null;
  function Mp(e4) {
    jp !== e4 && (jp = e4, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, function() {
      jp === e4 && (jp = null);
      for (var t3 = 0; t3 < e4.length; t3 += 3) {
        var n3 = e4[t3], r3 = e4[t3 + 1], i3 = e4[t3 + 2];
        if (typeof r3 != `function`) {
          if (pp(r3 || n3) === null) continue;
          break;
        }
        var a3 = ot2(n3);
        a3 !== null && (e4.splice(t3, 3), t3 -= 3, gs2(a3, { pending: true, data: i3, method: n3.method, action: r3 }, r3, i3));
      }
    }));
  }
  function Np(e4) {
    function t3(t4) {
      return Ap(t4, e4);
    }
    gp !== null && Ap(gp, e4), _p !== null && Ap(_p, e4), vp !== null && Ap(vp, e4), yp.forEach(t3), bp.forEach(t3);
    for (var n3 = 0; n3 < xp.length; n3++) {
      var r3 = xp[n3];
      r3.blockedOn === e4 && (r3.blockedOn = null);
    }
    for (; 0 < xp.length && (n3 = xp[0], n3.blockedOn === null); ) Ep(n3), n3.blockedOn === null && xp.shift();
    if (n3 = (e4.ownerDocument || e4).$$reactFormReplay, n3 != null) for (r3 = 0; r3 < n3.length; r3 += 3) {
      var i3 = n3[r3], a3 = n3[r3 + 1], o3 = i3[Ze2] || null;
      if (typeof a3 == `function`) o3 || Mp(n3);
      else if (o3) {
        var s3 = null;
        if (a3 && a3.hasAttribute(`formAction`)) {
          if (i3 = a3, o3 = a3[Ze2] || null) s3 = o3.formAction;
          else if (pp(i3) !== null) continue;
        } else s3 = o3.action;
        typeof s3 == `function` ? n3[r3 + 1] = s3 : (n3.splice(r3, 3), r3 -= 3), Mp(n3);
      }
    }
  }
  function Pp() {
    function e4(e5) {
      e5.canIntercept && e5.info === `react-transition` && e5.intercept({ handler: function() {
        return new Promise(function(e6) {
          return i3 = e6;
        });
      }, focusReset: `manual`, scroll: `manual` });
    }
    function t3() {
      i3 !== null && (i3(), i3 = null), r3 || setTimeout(n3, 20);
    }
    function n3() {
      if (!r3 && !navigation.transition) {
        var e5 = navigation.currentEntry;
        e5 && e5.url != null && navigation.navigate(e5.url, { state: e5.getState(), info: `react-transition`, history: `replace` });
      }
    }
    if (typeof navigation == `object`) {
      var r3 = false, i3 = null;
      return navigation.addEventListener(`navigate`, e4), navigation.addEventListener(`navigatesuccess`, t3), navigation.addEventListener(`navigateerror`, t3), setTimeout(n3, 100), function() {
        r3 = true, navigation.removeEventListener(`navigate`, e4), navigation.removeEventListener(`navigatesuccess`, t3), navigation.removeEventListener(`navigateerror`, t3), i3 !== null && (i3(), i3 = null);
      };
    }
  }
  function Fp(e4) {
    this._internalRoot = e4;
  }
  Ip.prototype.render = Fp.prototype.render = function(e4) {
    var t3 = this._internalRoot;
    if (t3 === null) throw Error(i2(409));
    var n3 = t3.current;
    np(n3, du(), e4, t3, null, null);
  }, Ip.prototype.unmount = Fp.prototype.unmount = function() {
    var e4 = this._internalRoot;
    if (e4 !== null) {
      this._internalRoot = null;
      var t3 = e4.containerInfo;
      np(e4.current, 2, null, e4, null, null), vu(), t3[Qe2] = null;
    }
  };
  function Ip(e4) {
    this._internalRoot = e4;
  }
  Ip.prototype.unstable_scheduleHydration = function(e4) {
    if (e4) {
      var t3 = qe2();
      e4 = { blockedOn: null, target: e4, priority: t3 };
      for (var n3 = 0; n3 < xp.length && t3 !== 0 && t3 < xp[n3].priority; n3++) ;
      xp.splice(n3, 0, e4), n3 === 0 && Ep(e4);
    }
  };
  var Lp = n2.version;
  if (Lp !== `19.2.4`) throw Error(i2(527, Lp, `19.2.4`));
  P2.findDOMNode = function(e4) {
    var t3 = e4._reactInternals;
    if (t3 === void 0) throw typeof e4.render == `function` ? Error(i2(188)) : (e4 = Object.keys(e4).join(`,`), Error(i2(268, e4)));
    return e4 = u2(t3), e4 = e4 === null ? null : d2(e4), e4 = e4 === null ? null : e4.stateNode, e4;
  };
  var Rp = { bundleType: 0, version: `19.2.4`, rendererPackageName: `react-dom`, currentDispatcherRef: N2, reconcilerVersion: `19.2.4` };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zp.isDisabled && zp.supportsFiber) try {
      Te2 = zp.inject(Rp), Ee2 = zp;
    } catch {
    }
  }
  e3.createRoot = function(e4, t3) {
    if (!a2(e4)) throw Error(i2(299));
    var n3 = false, r3 = ``, o3 = zs2, s3 = Bs2, c3 = Vs2;
    return t3 != null && (true === t3.unstable_strictMode && (n3 = true), t3.identifierPrefix !== void 0 && (r3 = t3.identifierPrefix), t3.onUncaughtError !== void 0 && (o3 = t3.onUncaughtError), t3.onCaughtError !== void 0 && (s3 = t3.onCaughtError), t3.onRecoverableError !== void 0 && (c3 = t3.onRecoverableError)), t3 = ep(e4, 1, false, null, null, n3, r3, null, o3, s3, c3, Pp), e4[Qe2] = t3.current, Sd(e4), new Fp(t3);
  };
})), We = t(((e3, t2) => {
  function n2() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (e4) {
      console.error(e4);
    }
  }
  n2(), t2.exports = Ue();
})), J = e(Re(), 1), Ge = e(We()), Ke = (e3) => {
  let t2, n2 = /* @__PURE__ */ new Set(), r2 = (e4, r3) => {
    let i3 = typeof e4 == `function` ? e4(t2) : e4;
    if (!Object.is(i3, t2)) {
      let e5 = t2;
      t2 = r3 ?? (typeof i3 != `object` || !i3) ? i3 : Object.assign({}, t2, i3), n2.forEach((n3) => n3(t2, e5));
    }
  }, i2 = () => t2, a2 = { setState: r2, getState: i2, getInitialState: () => o2, subscribe: (e4) => (n2.add(e4), () => n2.delete(e4)) }, o2 = t2 = e3(r2, i2, a2);
  return a2;
}, qe = ((e3) => e3 ? Ke(e3) : Ke), Je = t(((e3) => {
  var t2 = Symbol.for(`react.transitional.element`), n2 = Symbol.for(`react.fragment`);
  function r2(e4, n3, r3) {
    var i2 = null;
    if (r3 !== void 0 && (i2 = `` + r3), n3.key !== void 0 && (i2 = `` + n3.key), `key` in n3) for (var a2 in r3 = {}, n3) a2 !== `key` && (r3[a2] = n3[a2]);
    else r3 = n3;
    return n3 = r3.ref, { $$typeof: t2, type: e4, key: i2, ref: n3 === void 0 ? null : n3, props: r3 };
  }
  e3.Fragment = n2, e3.jsx = r2, e3.jsxs = r2;
})), Ye = t(((e3, t2) => {
  t2.exports = Je();
})), Xe = t(((e3) => {
  var t2 = Re();
  function n2(e4, t3) {
    return e4 === t3 && (e4 !== 0 || 1 / e4 == 1 / t3) || e4 !== e4 && t3 !== t3;
  }
  var r2 = typeof Object.is == `function` ? Object.is : n2, i2 = t2.useState, a2 = t2.useEffect, o2 = t2.useLayoutEffect, s2 = t2.useDebugValue;
  function c2(e4, t3) {
    var n3 = t3(), r3 = i2({ inst: { value: n3, getSnapshot: t3 } }), c3 = r3[0].inst, u3 = r3[1];
    return o2(function() {
      c3.value = n3, c3.getSnapshot = t3, l2(c3) && u3({ inst: c3 });
    }, [e4, n3, t3]), a2(function() {
      return l2(c3) && u3({ inst: c3 }), e4(function() {
        l2(c3) && u3({ inst: c3 });
      });
    }, [e4]), s2(n3), n3;
  }
  function l2(e4) {
    var t3 = e4.getSnapshot;
    e4 = e4.value;
    try {
      var n3 = t3();
      return !r2(e4, n3);
    } catch {
      return true;
    }
  }
  function u2(e4, t3) {
    return t3();
  }
  var d2 = typeof window > `u` || window.document === void 0 || window.document.createElement === void 0 ? u2 : c2;
  e3.useSyncExternalStore = t2.useSyncExternalStore === void 0 ? d2 : t2.useSyncExternalStore;
})), Ze = t(((e3, t2) => {
  t2.exports = Xe();
})), Qe = t(((e3) => {
  var t2 = Re(), n2 = Ze();
  function r2(e4, t3) {
    return e4 === t3 && (e4 !== 0 || 1 / e4 == 1 / t3) || e4 !== e4 && t3 !== t3;
  }
  var i2 = typeof Object.is == `function` ? Object.is : r2, a2 = n2.useSyncExternalStore, o2 = t2.useRef, s2 = t2.useEffect, c2 = t2.useMemo, l2 = t2.useDebugValue;
  e3.useSyncExternalStoreWithSelector = function(e4, t3, n3, r3, u2) {
    var d2 = o2(null);
    if (d2.current === null) {
      var f2 = { hasValue: false, value: null };
      d2.current = f2;
    } else f2 = d2.current;
    d2 = c2(function() {
      function e5(e6) {
        if (!a3) {
          if (a3 = true, o3 = e6, e6 = r3(e6), u2 !== void 0 && f2.hasValue) {
            var t4 = f2.value;
            if (u2(t4, e6)) return s3 = t4;
          }
          return s3 = e6;
        }
        if (t4 = s3, i2(o3, e6)) return t4;
        var n4 = r3(e6);
        return u2 !== void 0 && u2(t4, n4) ? (o3 = e6, t4) : (o3 = e6, s3 = n4);
      }
      var a3 = false, o3, s3, c3 = n3 === void 0 ? null : n3;
      return [function() {
        return e5(t3());
      }, c3 === null ? void 0 : function() {
        return e5(c3());
      }];
    }, [t3, n3, r3, u2]);
    var p2 = a2(e4, d2[0], d2[1]);
    return s2(function() {
      f2.hasValue = true, f2.value = p2;
    }, [p2]), l2(p2), p2;
  };
})), $e = t(((e3, t2) => {
  t2.exports = Qe();
})), et = Ye(), { useSyncExternalStoreWithSelector: tt } = e($e(), 1).default, nt = (e3) => e3;
function rt(e3, t2 = nt, n2) {
  let r2 = tt(e3.subscribe, e3.getState, e3.getInitialState, t2, n2);
  return J.useDebugValue(r2), r2;
}
var it = (e3, t2) => {
  let n2 = qe(e3), r2 = (e4, r3 = t2) => rt(n2, e4, r3);
  return Object.assign(r2, n2), r2;
}, at = ((e3, t2) => e3 ? it(e3, t2) : it), ot = (e3) => typeof e3 == `object` && typeof e3.then == `function`, st = [];
function ct(e3, t2, n2 = (e4, t3) => e4 === t3) {
  if (e3 === t2) return true;
  if (!e3 || !t2) return false;
  let r2 = e3.length;
  if (t2.length !== r2) return false;
  for (let i2 = 0; i2 < r2; i2++) if (!n2(e3[i2], t2[i2])) return false;
  return true;
}
function lt(e3, t2 = null, n2 = false, r2 = {}) {
  t2 === null && (t2 = [e3]);
  for (let e4 of st) if (ct(t2, e4.keys, e4.equal)) {
    if (n2) return;
    if (Object.prototype.hasOwnProperty.call(e4, `error`)) throw e4.error;
    if (Object.prototype.hasOwnProperty.call(e4, `response`)) return r2.lifespan && r2.lifespan > 0 && (e4.timeout && clearTimeout(e4.timeout), e4.timeout = setTimeout(e4.remove, r2.lifespan)), e4.response;
    if (!n2) throw e4.promise;
  }
  let i2 = { keys: t2, equal: r2.equal, remove: () => {
    let e4 = st.indexOf(i2);
    e4 !== -1 && st.splice(e4, 1);
  }, promise: (ot(e3) ? e3 : e3(...t2)).then((e4) => {
    i2.response = e4, r2.lifespan && r2.lifespan > 0 && (i2.timeout = setTimeout(i2.remove, r2.lifespan));
  }).catch((e4) => i2.error = e4) };
  if (st.push(i2), !n2) throw i2.promise;
}
var ut = (e3, t2, n2) => lt(e3, t2, false, n2), dt = (e3, t2, n2) => void lt(e3, t2, true, n2), ft = (e3) => {
  if (e3 === void 0 || e3.length === 0) st.splice(0, st.length);
  else {
    let t2 = st.find((t3) => ct(e3, t3.keys, t3.equal));
    t2 && t2.remove();
  }
};
typeof window < `u` && (((_a2 = window.document) == null ? void 0 : _a2.createElement) || ((_b = window.navigator) == null ? void 0 : _b.product) === `ReactNative`) ? J.useLayoutEffect : J.useEffect;
function pt(e3, t2, n2) {
  if (!e3) return;
  if (n2(e3) === true) return e3;
  let r2 = t2 ? e3.return : e3.child;
  for (; r2; ) {
    let e4 = pt(r2, t2, n2);
    if (e4) return e4;
    r2 = t2 ? null : r2.sibling;
  }
}
function mt(e3) {
  try {
    return Object.defineProperties(e3, { _currentRenderer: { get() {
      return null;
    }, set() {
    } }, _currentRenderer2: { get() {
      return null;
    }, set() {
    } } });
  } catch {
    return e3;
  }
}
var ht = mt(J.createContext(null)), gt = class extends J.Component {
  render() {
    return J.createElement(ht.Provider, { value: this._reactInternals }, this.props.children);
  }
};
function _t() {
  let e3 = J.useContext(ht);
  if (e3 === null) throw Error(`its-fine: useFiber must be called within a <FiberProvider />!`);
  let t2 = J.useId();
  return J.useMemo(() => {
    for (let n2 of [e3, e3 == null ? void 0 : e3.alternate]) {
      if (!n2) continue;
      let e4 = pt(n2, false, (e5) => {
        let n3 = e5.memoizedState;
        for (; n3; ) {
          if (n3.memoizedState === t2) return true;
          n3 = n3.next;
        }
      });
      if (e4) return e4;
    }
  }, [e3, t2]);
}
var vt = Symbol.for(`react.context`), yt = (e3) => typeof e3 == `object` && !!e3 && `$$typeof` in e3 && e3.$$typeof === vt;
function bt() {
  let e3 = _t(), [t2] = J.useState(() => /* @__PURE__ */ new Map());
  t2.clear();
  let n2 = e3;
  for (; n2; ) {
    let e4 = n2.type;
    yt(e4) && e4 !== ht && !t2.has(e4) && t2.set(e4, J.use(mt(e4))), n2 = n2.return;
  }
  return t2;
}
function xt() {
  let e3 = bt();
  return J.useMemo(() => Array.from(e3.keys()).reduce((t2, n2) => (r2) => J.createElement(t2, null, J.createElement(n2.Provider, { ...r2, value: e3.get(n2) })), (e4) => J.createElement(gt, { ...e4 })), [e3]);
}
function St(e3) {
  if (typeof requestAnimationFrame == `function`) {
    let t3 = requestAnimationFrame(e3);
    return () => cancelAnimationFrame(t3);
  }
  let t2 = setTimeout(e3, 16);
  return () => clearTimeout(t2);
}
function Ct() {
  if (!J.Activity) throw Error(`its-fine: useActivityBridge requires React 19.2 or later!`);
  let e3 = _t(), [t2] = J.useState(() => {
    let t3 = [], n2 = false;
    pt(e3, true, (e4) => {
      var _a3, _b2;
      if (e4.elementType === J.Activity) {
        let n3 = ((_a3 = e4.child) == null ? void 0 : _a3.tag) === 22 ? e4.child.stateNode : null;
        if (typeof (n3 == null ? void 0 : n3._visibility) != `number`) throw Error(`its-fine: unsupported React Activity internals!`);
        t3.push(n3);
      } else e4.tag === 22 && ((_b2 = e4.return) == null ? void 0 : _b2.elementType) !== J.Activity && (n2 = true);
    });
    let r2 = `hidden`, i2 = /* @__PURE__ */ new Set(), a2, o2 = { mounted: false, connected: false, subscribe(e4) {
      return i2.add(e4), () => {
        i2.delete(e4);
      };
    }, sync(e4) {
      o2.mounted && !o2.connected && n2 && t3.length > 0 ? a2 || (a2 = St(() => {
        a2 = void 0, o2.sync(true);
      })) : (a2 == null ? void 0 : a2(), a2 = void 0);
      let s2 = r2;
      if (o2.mounted ? o2.connected ? s2 = `visible` : e4 && (s2 = t3.every((e5) => !!(e5._visibility & 1)) ? `visible` : `hidden`) : s2 = `hidden`, r2 !== s2) {
        r2 = s2;
        for (let e5 of i2) e5();
      }
    }, Bridge({ children: e4 }) {
      return J.createElement(J.Activity, { mode: J.useSyncExternalStore(o2.subscribe, () => r2, () => `hidden`) }, e4);
    } };
    return o2;
  });
  return J.useInsertionEffect(() => (t2.mounted = true, queueMicrotask(() => t2.sync(false)), () => {
    t2.mounted = false, queueMicrotask(() => t2.sync(false));
  }), [t2]), J.useLayoutEffect(() => (t2.connected = true, t2.sync(false), () => {
    t2.connected = false, t2.sync(true);
  }), [t2]), t2.Bridge;
}
var wt = t(((e3) => {
  function t2(e4, t3) {
    var n3 = e4.length;
    e4.push(t3);
    a: for (; 0 < n3; ) {
      var r3 = n3 - 1 >>> 1, a3 = e4[r3];
      if (0 < i2(a3, t3)) e4[r3] = t3, e4[n3] = a3, n3 = r3;
      else break a;
    }
  }
  function n2(e4) {
    return e4.length === 0 ? null : e4[0];
  }
  function r2(e4) {
    if (e4.length === 0) return null;
    var t3 = e4[0], n3 = e4.pop();
    if (n3 !== t3) {
      e4[0] = n3;
      a: for (var r3 = 0, a3 = e4.length, o3 = a3 >>> 1; r3 < o3; ) {
        var s3 = 2 * (r3 + 1) - 1, c3 = e4[s3], l3 = s3 + 1, u3 = e4[l3];
        if (0 > i2(c3, n3)) l3 < a3 && 0 > i2(u3, c3) ? (e4[r3] = u3, e4[l3] = n3, r3 = l3) : (e4[r3] = c3, e4[s3] = n3, r3 = s3);
        else if (l3 < a3 && 0 > i2(u3, n3)) e4[r3] = u3, e4[l3] = n3, r3 = l3;
        else break a;
      }
    }
    return t3;
  }
  function i2(e4, t3) {
    var n3 = e4.sortIndex - t3.sortIndex;
    return n3 === 0 ? e4.id - t3.id : n3;
  }
  if (e3.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
    var a2 = performance;
    e3.unstable_now = function() {
      return a2.now();
    };
  } else {
    var o2 = Date, s2 = o2.now();
    e3.unstable_now = function() {
      return o2.now() - s2;
    };
  }
  var c2 = [], l2 = [], u2 = 1, d2 = null, f2 = 3, p2 = false, m2 = false, h2 = false, g2 = false, _2 = typeof setTimeout == `function` ? setTimeout : null, v2 = typeof clearTimeout == `function` ? clearTimeout : null, y2 = typeof setImmediate < `u` ? setImmediate : null;
  function b2(e4) {
    for (var i3 = n2(l2); i3 !== null; ) {
      if (i3.callback === null) r2(l2);
      else if (i3.startTime <= e4) r2(l2), i3.sortIndex = i3.expirationTime, t2(c2, i3);
      else break;
      i3 = n2(l2);
    }
  }
  function x2(e4) {
    if (h2 = false, b2(e4), !m2) {
      if (n2(c2) !== null) m2 = true, S2 || (S2 = true, O2());
      else {
        var t3 = n2(l2);
        t3 !== null && j2(x2, t3.startTime - e4);
      }
    }
  }
  var S2 = false, C2 = -1, w2 = 5, T2 = -1;
  function E2() {
    return g2 ? true : !(e3.unstable_now() - T2 < w2);
  }
  function D2() {
    if (g2 = false, S2) {
      var t3 = e3.unstable_now();
      T2 = t3;
      var i3 = true;
      try {
        a: {
          m2 = false, h2 && (h2 = false, v2(C2), C2 = -1), p2 = true;
          var a3 = f2;
          try {
            b: {
              for (b2(t3), d2 = n2(c2); d2 !== null && !(d2.expirationTime > t3 && E2()); ) {
                var o3 = d2.callback;
                if (typeof o3 == `function`) {
                  d2.callback = null, f2 = d2.priorityLevel;
                  var s3 = o3(d2.expirationTime <= t3);
                  if (t3 = e3.unstable_now(), typeof s3 == `function`) {
                    d2.callback = s3, b2(t3), i3 = true;
                    break b;
                  }
                  d2 === n2(c2) && r2(c2), b2(t3);
                } else r2(c2);
                d2 = n2(c2);
              }
              if (d2 !== null) i3 = true;
              else {
                var u3 = n2(l2);
                u3 !== null && j2(x2, u3.startTime - t3), i3 = false;
              }
            }
            break a;
          } finally {
            d2 = null, f2 = a3, p2 = false;
          }
          i3 = void 0;
        }
      } finally {
        i3 ? O2() : S2 = false;
      }
    }
  }
  var O2;
  if (typeof y2 == `function`) O2 = function() {
    y2(D2);
  };
  else if (typeof MessageChannel < `u`) {
    var k2 = new MessageChannel(), A2 = k2.port2;
    k2.port1.onmessage = D2, O2 = function() {
      A2.postMessage(null);
    };
  } else O2 = function() {
    _2(D2, 0);
  };
  function j2(t3, n3) {
    C2 = _2(function() {
      t3(e3.unstable_now());
    }, n3);
  }
  e3.unstable_IdlePriority = 5, e3.unstable_ImmediatePriority = 1, e3.unstable_LowPriority = 4, e3.unstable_NormalPriority = 3, e3.unstable_Profiling = null, e3.unstable_UserBlockingPriority = 2, e3.unstable_cancelCallback = function(e4) {
    e4.callback = null;
  }, e3.unstable_forceFrameRate = function(e4) {
    0 > e4 || 125 < e4 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : w2 = 0 < e4 ? Math.floor(1e3 / e4) : 5;
  }, e3.unstable_getCurrentPriorityLevel = function() {
    return f2;
  }, e3.unstable_next = function(e4) {
    switch (f2) {
      case 1:
      case 2:
      case 3:
        var t3 = 3;
        break;
      default:
        t3 = f2;
    }
    var n3 = f2;
    f2 = t3;
    try {
      return e4();
    } finally {
      f2 = n3;
    }
  }, e3.unstable_requestPaint = function() {
    g2 = true;
  }, e3.unstable_runWithPriority = function(e4, t3) {
    switch (e4) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e4 = 3;
    }
    var n3 = f2;
    f2 = e4;
    try {
      return t3();
    } finally {
      f2 = n3;
    }
  }, e3.unstable_scheduleCallback = function(r3, i3, a3) {
    var o3 = e3.unstable_now();
    switch (typeof a3 == `object` && a3 ? (a3 = a3.delay, a3 = typeof a3 == `number` && 0 < a3 ? o3 + a3 : o3) : a3 = o3, r3) {
      case 1:
        var s3 = -1;
        break;
      case 2:
        s3 = 250;
        break;
      case 5:
        s3 = 1073741823;
        break;
      case 4:
        s3 = 1e4;
        break;
      default:
        s3 = 5e3;
    }
    return s3 = a3 + s3, r3 = { id: u2++, callback: i3, priorityLevel: r3, startTime: a3, expirationTime: s3, sortIndex: -1 }, a3 > o3 ? (r3.sortIndex = a3, t2(l2, r3), n2(c2) === null && r3 === n2(l2) && (h2 ? (v2(C2), C2 = -1) : h2 = true, j2(x2, a3 - o3))) : (r3.sortIndex = s3, t2(c2, r3), m2 || p2 || (m2 = true, S2 || (S2 = true, O2()))), r3;
  }, e3.unstable_shouldYield = E2, e3.unstable_wrapCallback = function(e4) {
    var t3 = f2;
    return function() {
      var n3 = f2;
      f2 = t3;
      try {
        return e4.apply(this, arguments);
      } finally {
        f2 = n3;
      }
    };
  };
})), Tt = e(t(((e3, t2) => {
  t2.exports = wt();
}))()), Et = ((e3, t2) => {
  var _a3, _b2;
  return typeof window < `u` && (((_a3 = e3 = window.document) == null ? void 0 : _a3.createElement) || ((_b2 = t2 = window.navigator) == null ? void 0 : _b2.product) === `ReactNative`);
})() ? J.useLayoutEffect : J.useEffect;
function Dt(e3) {
  let t2 = J.useRef(e3);
  return Et(() => void (t2.current = e3), [e3]), t2;
}
function Ot({ promise: e3, onSettled: t2 }) {
  return J.use(e3), Et(t2, [t2]), null;
}
function kt() {
  let [e3, t2] = J.useState(null), n2 = J.useCallback(() => t2(null), []), r2 = J.useCallback((e4) => t2((t3) => t3 ?? Promise.resolve(e4).then(() => {
  }, () => {
  })), []);
  return [e3 ? (0, et.jsx)(J.Suspense, { fallback: null, children: (0, et.jsx)(Ot, { promise: e3, onSettled: n2 }) }) : null, r2];
}
var At = J.Activity ? Ct : () => J.Fragment;
function jt() {
  let e3 = _t(), t2 = xt(), n2 = At();
  return J.useMemo(() => ({ children: r2 }) => {
    let i2 = pt(e3, true, (e4) => e4.type === J.StrictMode) ? J.StrictMode : J.Fragment;
    return (0, et.jsx)(i2, { children: (0, et.jsx)(n2, { children: (0, et.jsx)(t2, { children: r2 }) }) });
  }, [e3, t2, n2]);
}
function Mt({ set: e3 }) {
  return Et(() => (e3(new Promise(() => null)), () => e3(false)), [e3]), null;
}
var Nt = ((e3) => (e3 = class extends J.Component {
  constructor(...e4) {
    super(...e4), this.state = { error: false };
  }
  componentDidCatch(e4) {
    this.props.set(e4);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}, e3.getDerivedStateFromError = () => ({ error: true }), e3))();
function Pt(e3) {
  let t2 = e3.root;
  for (; t2.getState().previousRoot; ) t2 = t2.getState().previousRoot;
  return t2;
}
var Ft = (e3) => e3 && e3.isOrthographicCamera, It = (e3) => e3 && e3.hasOwnProperty(`current`), Lt = (e3) => e3 != null && (typeof e3 == `string` || typeof e3 == `number` || e3.isColor), Rt = () => {
};
function zt(e3) {
  let t2 = typeof window < `u` ? window.devicePixelRatio ?? 2 : 1;
  return Array.isArray(e3) ? Math.min(Math.max(e3[0], t2), e3[1]) : e3;
}
function Bt(e3) {
  if (typeof window > `u` || typeof window.matchMedia != `function` || !window.devicePixelRatio) return () => {
  };
  let t2, n2 = () => {
    try {
      var e4;
      t2 = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), typeof (t2 == null ? void 0 : t2.addEventListener) == `function` ? t2.addEventListener(`change`, i2) : (e4 = t2) == null || e4.addListener == null || e4.addListener(i2);
    } catch {
      t2 = void 0;
    }
  }, r2 = () => {
    var e4;
    typeof (t2 == null ? void 0 : t2.removeEventListener) == `function` ? t2.removeEventListener(`change`, i2) : (e4 = t2) == null || e4.removeListener == null || e4.removeListener(i2), t2 = void 0;
  }, i2 = () => {
    r2(), n2(), e3();
  };
  return n2(), r2;
}
function Vt(e3) {
  var _a3;
  return (_a3 = e3.__r3f) == null ? void 0 : _a3.root.getState();
}
var Ht = { obj: (e3) => e3 === Object(e3) && !Ht.arr(e3) && typeof e3 != `function`, fun: (e3) => typeof e3 == `function`, str: (e3) => typeof e3 == `string`, num: (e3) => typeof e3 == `number`, boo: (e3) => typeof e3 == `boolean`, und: (e3) => e3 === void 0, nul: (e3) => e3 === null, arr: (e3) => Array.isArray(e3), equ(e3, t2, { arrays: n2 = `shallow`, objects: r2 = `reference`, strict: i2 = true } = {}) {
  if (typeof e3 != typeof t2 || !!e3 != !!t2) return false;
  if (Ht.str(e3) || Ht.num(e3) || Ht.boo(e3)) return e3 === t2;
  let a2 = Ht.obj(e3);
  if (a2 && r2 === `reference`) return e3 === t2;
  let o2 = Ht.arr(e3);
  if (o2 && n2 === `reference`) return e3 === t2;
  if ((o2 || a2) && e3 === t2) return true;
  let s2;
  for (s2 in e3) if (!(s2 in t2)) return false;
  if (a2 && n2 === `shallow` && r2 === `shallow`) {
    for (s2 in i2 ? t2 : e3) if (!Ht.equ(e3[s2], t2[s2], { strict: i2, objects: `reference` })) return false;
  } else for (s2 in i2 ? t2 : e3) if (e3[s2] !== t2[s2]) return false;
  if (Ht.und(s2)) {
    if (o2 && e3.length === 0 && t2.length === 0 || a2 && Object.keys(e3).length === 0 && Object.keys(t2).length === 0) return true;
    if (e3 !== t2) return false;
  }
  return true;
} };
function Ut(e3) {
  let t2 = { nodes: {}, materials: {}, meshes: {} };
  return e3 && e3.traverse((e4) => {
    e4.name && (t2.nodes[e4.name] = e4), e4.material && !t2.materials[e4.material.name] && (t2.materials[e4.material.name] = e4.material), e4.isMesh && !t2.meshes[e4.name] && (t2.meshes[e4.name] = e4);
  }), t2;
}
function Wt(e3) {
  e3.type !== `Scene` && (e3.dispose == null || e3.dispose());
  for (let t2 in e3) {
    let n2 = e3[t2];
    (n2 == null ? void 0 : n2.type) !== `Scene` && (n2 == null || n2.dispose == null || n2.dispose());
  }
}
var Gt = [`children`, `key`, `ref`];
function Kt(e3) {
  let t2 = {};
  for (let n2 in e3) Gt.includes(n2) || (t2[n2] = e3[n2]);
  return t2;
}
function qt(e3, t2, n2, r2) {
  let i2 = e3, a2 = i2 == null ? void 0 : i2.__r3f;
  return a2 || (a2 = { root: t2, type: n2, parent: null, children: [], props: Kt(r2), object: i2, eventCount: 0, handlers: {}, previousVisible: void 0, isHidden: false }, i2 && (i2.__r3f = a2)), a2;
}
function Jt(e3, t2) {
  if (!t2.includes(`-`) || t2 in e3) return { root: e3, key: t2, target: e3[t2] };
  let n2 = e3, r2 = t2.split(`-`);
  for (let i2 of r2) {
    if (typeof n2 != `object` || !n2) {
      if (n2 !== void 0) {
        let e4 = r2.slice(r2.indexOf(i2)).join(`-`);
        return { root: n2, key: e4, target: void 0 };
      }
      return { root: e3, key: t2, target: void 0 };
    }
    t2 = i2, e3 = n2, n2 = n2[t2];
  }
  return { root: e3, key: t2, target: n2 };
}
var Yt = /-\d+$/;
function Xt(e3, t2) {
  if (Ht.str(t2.props.attach)) {
    if (Yt.test(t2.props.attach)) {
      let n3 = t2.props.attach.replace(Yt, ``), { root: r3, key: i2 } = Jt(e3.object, n3);
      Array.isArray(r3[i2]) || (r3[i2] = []);
    }
    let { root: n2, key: r2 } = Jt(e3.object, t2.props.attach);
    t2.previousAttach = n2[r2], n2[r2] = t2.object;
  } else Ht.fun(t2.props.attach) && (t2.previousAttach = t2.props.attach(e3.object, t2.object));
}
function Zt(e3, t2) {
  if (Ht.str(t2.props.attach)) {
    let { root: n2, key: r2 } = Jt(e3.object, t2.props.attach), i2 = t2.previousAttach;
    i2 === void 0 ? delete n2[r2] : n2[r2] = i2;
  } else t2.previousAttach == null || t2.previousAttach(e3.object, t2.object);
  delete t2.previousAttach;
}
var Qt = [...Gt, `args`, `dispose`, `attach`, `object`, `onUpdate`, `dispose`], $t = /* @__PURE__ */ new Map();
function en(e3) {
  let t2 = $t.get(e3.constructor);
  try {
    t2 || (t2 = new e3.constructor(), $t.set(e3.constructor, t2));
  } catch {
  }
  return t2;
}
function tn(e3, t2) {
  let n2 = {};
  for (let r2 in t2) if (!Qt.includes(r2) && !Ht.equ(t2[r2], e3.props[r2])) {
    n2[r2] = t2[r2];
    for (let e4 in t2) e4.startsWith(`${r2}-`) && (n2[e4] = t2[e4]);
  }
  for (let r2 in e3.props) {
    if (Qt.includes(r2) || t2.hasOwnProperty(r2)) continue;
    let { root: i2, key: a2 } = Jt(e3.object, r2);
    if (i2.constructor && i2.constructor.length === 0) {
      let e4 = en(i2);
      Ht.und(e4) || (n2[r2] = e4[a2]);
    } else n2[r2] = 0;
  }
  return n2;
}
var nn = [`map`, `emissiveMap`, `sheenColorMap`, `specularColorMap`, `envMap`], rn = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function an(e3, t2) {
  var n2;
  let r2 = e3.__r3f, i2 = r2 && Pt(r2).getState(), a2 = r2 == null ? void 0 : r2.eventCount;
  for (let n3 in t2) {
    let a3 = t2[n3];
    if (Qt.includes(n3)) continue;
    if (r2 && rn.test(n3)) {
      typeof a3 == `function` ? r2.handlers[n3] = a3 : delete r2.handlers[n3], r2.eventCount = Object.keys(r2.handlers).length;
      continue;
    }
    if (a3 === void 0) continue;
    if (n3 === `visible` && r2 != null && r2.isHidden && r2.previousVisible !== void 0) {
      r2.previousVisible = a3;
      continue;
    }
    let { root: s2, key: c2, target: l2 } = Jt(e3, n3);
    if (l2 === void 0 && (typeof s2 != `object` || !s2)) throw Error(`R3F: Cannot set "${n3}". Ensure it is an object before setting "${c2}".`);
    if (l2 instanceof Pe && a3 instanceof Pe) l2.mask = a3.mask;
    else if (l2 instanceof z && Lt(a3)) l2.set(a3);
    else if (typeof l2 == `object` && l2 && typeof l2.set == `function` && typeof l2.copy == `function` && a3 != null && a3.constructor && l2.constructor === a3.constructor) l2.copy(a3);
    else if (typeof l2 == `object` && l2 && typeof l2.set == `function` && Array.isArray(a3)) typeof l2.fromArray == `function` ? l2.fromArray(a3) : l2.set(...a3);
    else if (typeof l2 == `object` && l2 && typeof l2.set == `function` && typeof a3 == `number`) typeof l2.setScalar == `function` ? l2.setScalar(a3) : l2.set(a3);
    else if (s2 instanceof Se && c2 === `uniforms` && Ht.obj(a3)) {
      Ht.obj(s2.uniforms) || (s2.uniforms = {});
      let e4 = s2.uniforms, t3 = a3;
      for (let n4 in t3) {
        let r3 = t3[n4], i3 = e4[n4];
        i3 ? Object.assign(i3, r3) : e4[n4] = { ...r3 };
      }
    } else {
      var o2;
      s2[c2] = a3, i2 && !i2.linear && nn.includes(c2) && (o2 = s2[c2]) != null && o2.isTexture && s2[c2].format === 1023 && s2[c2].type === 1009 && (s2[c2].colorSpace = me);
    }
  }
  if (r2 != null && r2.parent && i2 != null && i2.internal && (n2 = r2.object) != null && n2.isObject3D && a2 !== r2.eventCount) {
    let e4 = r2.object, t3 = i2.internal.interaction.indexOf(e4);
    t3 > -1 && i2.internal.interaction.splice(t3, 1), r2.eventCount && e4.raycast !== null && i2.internal.interaction.push(e4);
  }
  return r2 && r2.props.attach === void 0 && (r2.object.isBufferGeometry ? r2.props.attach = `geometry` : r2.object.isMaterial && (r2.props.attach = `material`)), r2 && on(r2), e3;
}
function on(e3) {
  var t2;
  if (!e3.parent) return;
  e3.props.onUpdate == null || e3.props.onUpdate(e3.object);
  let n2 = (t2 = e3.root) == null || t2.getState == null ? void 0 : t2.getState();
  n2 && n2.internal.frames === 0 && n2.invalidate();
}
function sn(e3, t2) {
  e3.manual || (Ft(e3) ? (e3.left = t2.width / -2, e3.right = t2.width / 2, e3.top = t2.height / 2, e3.bottom = t2.height / -2) : e3.aspect = t2.width / t2.height, e3.updateProjectionMatrix());
}
var cn = (e3) => e3 == null ? void 0 : e3.isObject3D;
function ln(e3) {
  return (e3.eventObject || e3.object).uuid + `/` + e3.index + e3.instanceId;
}
function un(e3, t2, n2, r2) {
  let i2 = n2.get(t2);
  i2 && (n2.delete(t2), n2.size === 0 && (e3.delete(r2), i2.target.releasePointerCapture(r2)));
}
function dn(e3, t2, n2) {
  let { internal: r2 } = e3.getState();
  for (let e4 = 0; e4 < r2.interaction.length; e4++) r2.interaction[e4] === t2 && (r2.interaction[e4] = n2);
  for (let e4 = 0; e4 < r2.initialHits.length; e4++) r2.initialHits[e4] === t2 && (r2.initialHits[e4] = n2);
  r2.hovered.forEach((e4, i2) => {
    if (e4.eventObject === t2 || e4.object === t2) {
      r2.hovered.delete(i2);
      let a2 = { ...e4, eventObject: e4.eventObject === t2 ? n2 : e4.eventObject, object: e4.object === t2 ? n2 : e4.object };
      r2.hovered.set(ln(a2), a2);
    }
  }), r2.capturedMap.forEach((e4) => {
    for (let [r3, i2] of Array.from(e4)) {
      let { intersection: a2 } = i2;
      (r3 === t2 || a2.object === t2 || a2.eventObject === t2) && (r3 === t2 && e4.delete(r3), e4.set(r3 === t2 ? n2 : r3, { ...i2, intersection: { ...a2, object: a2.object === t2 ? n2 : a2.object, eventObject: a2.eventObject === t2 ? n2 : a2.eventObject } }));
    }
  });
}
function fn(e3, t2) {
  let { internal: n2 } = e3.getState();
  n2.interaction = n2.interaction.filter((e4) => e4 !== t2), n2.initialHits = n2.initialHits.filter((e4) => e4 !== t2), n2.hovered.forEach((e4, r2) => {
    (e4.eventObject === t2 || e4.object === t2) && n2.hovered.delete(r2);
  }), n2.capturedMap.forEach((e4, r2) => {
    un(n2.capturedMap, t2, e4, r2);
  });
}
function pn(e3) {
  function t2(t3) {
    let { internal: n3 } = e3.getState(), r3 = t3.offsetX - n3.initialClick[0], i3 = t3.offsetY - n3.initialClick[1];
    return Math.round(Math.sqrt(r3 * r3 + i3 * i3));
  }
  function n2(e4) {
    return e4.filter((e5) => [`Move`, `Over`, `Enter`, `Out`, `Leave`].some((t3) => {
      var _a3;
      return (_a3 = e5.__r3f) == null ? void 0 : _a3.handlers[`onPointer` + t3];
    }));
  }
  function r2(t3, n3) {
    let r3 = e3.getState(), i3 = /* @__PURE__ */ new Set(), a3 = [], o3 = n3 ? n3(r3.internal.interaction) : r3.internal.interaction;
    for (let e4 = 0; e4 < o3.length; e4++) {
      let t4 = Vt(o3[e4]);
      t4 && (t4.raycaster.camera = void 0);
    }
    r3.previousRoot || r3.events.compute == null || r3.events.compute(t3, r3);
    function s3(e4) {
      var _a3;
      let n4 = Vt(e4);
      return !n4 || !n4.events.enabled || n4.raycaster.camera === null ? [] : (n4.raycaster.camera === void 0 && (n4.events.compute == null || n4.events.compute(t3, n4, (_a3 = n4.previousRoot) == null ? void 0 : _a3.getState()), n4.raycaster.camera === void 0 && (n4.raycaster.camera = null)), n4.raycaster.camera ? n4.raycaster.intersectObject(e4, true) : []);
    }
    let c2 = o3.flatMap(s3).sort((e4, t4) => {
      let n4 = Vt(e4.object), r4 = Vt(t4.object);
      return !n4 || !r4 ? e4.distance - t4.distance : r4.events.priority - n4.events.priority || e4.distance - t4.distance;
    }).filter((e4) => {
      let t4 = ln(e4);
      return !i3.has(t4) && (i3.add(t4), true);
    });
    r3.events.filter && (c2 = r3.events.filter(c2, r3));
    for (let e4 of c2) {
      let t4 = e4.object;
      for (; t4; ) {
        var l2;
        (l2 = t4.__r3f) != null && l2.eventCount && a3.push({ ...e4, eventObject: t4 }), t4 = t4.parent;
      }
    }
    if (`pointerId` in t3 && r3.internal.capturedMap.has(t3.pointerId)) for (let e4 of r3.internal.capturedMap.get(t3.pointerId).values()) i3.has(ln(e4.intersection)) || a3.push(e4.intersection);
    return a3;
  }
  function i2(e4, t3, n3, r3) {
    if (e4.length) {
      let i3 = { stopped: false };
      for (let o3 of e4) {
        let s3 = Vt(o3.object);
        if (s3 || o3.object.traverseAncestors((e5) => {
          let t4 = Vt(e5);
          if (t4) return s3 = t4, false;
        }), s3) {
          let { raycaster: c2, pointer: l2, camera: u2, internal: d2 } = s3, f2 = new G(l2.x, l2.y, 0).unproject(u2), p2 = (e5) => {
            var _a3;
            return ((_a3 = d2.capturedMap.get(e5)) == null ? void 0 : _a3.has(o3.eventObject)) ?? false;
          }, m2 = (e5) => {
            let n4 = { intersection: o3, target: t3.target };
            d2.capturedMap.has(e5) ? d2.capturedMap.get(e5).set(o3.eventObject, n4) : d2.capturedMap.set(e5, /* @__PURE__ */ new Map([[o3.eventObject, n4]])), t3.target.setPointerCapture(e5);
          }, h2 = (e5) => {
            let t4 = d2.capturedMap.get(e5);
            t4 && un(d2.capturedMap, o3.eventObject, t4, e5);
          }, g2 = {};
          for (let e5 in t3) {
            let n4 = t3[e5];
            typeof n4 != `function` && (g2[e5] = n4);
          }
          let _2 = { ...o3, ...g2, pointer: l2, intersections: e4, stopped: i3.stopped, delta: n3, unprojectedPoint: f2, ray: c2.ray, camera: u2, stopPropagation() {
            let n4 = `pointerId` in t3 && d2.capturedMap.get(t3.pointerId);
            (!n4 || n4.has(o3.eventObject)) && (_2.stopped = i3.stopped = true, d2.hovered.size && Array.from(d2.hovered.values()).find((e5) => e5.eventObject === o3.eventObject) && a2([...e4.slice(0, e4.indexOf(o3)), o3]));
          }, target: { hasPointerCapture: p2, setPointerCapture: m2, releasePointerCapture: h2 }, currentTarget: { hasPointerCapture: p2, setPointerCapture: m2, releasePointerCapture: h2 }, nativeEvent: t3 };
          if (r3(_2), i3.stopped === true) break;
        }
      }
    }
    return e4;
  }
  function a2(t3) {
    let { internal: n3 } = e3.getState();
    for (let e4 of n3.hovered.values()) if (!t3.length || !t3.find((t4) => t4.object === e4.object && t4.index === e4.index && t4.instanceId === e4.instanceId)) {
      let r3 = e4.eventObject.__r3f;
      if (n3.hovered.delete(ln(e4)), r3 != null && r3.eventCount) {
        let n4 = r3.handlers, i3 = { ...e4, intersections: t3 };
        n4.onPointerOut == null || n4.onPointerOut(i3), n4.onPointerLeave == null || n4.onPointerLeave(i3);
      }
    }
  }
  function o2(e4, t3) {
    for (let n3 = 0; n3 < t3.length; n3++) {
      let r3 = t3[n3].__r3f;
      r3 == null || r3.handlers.onPointerMissed == null || r3.handlers.onPointerMissed(e4);
    }
  }
  function s2(s3) {
    switch (s3) {
      case `onPointerLeave`:
      case `onPointerCancel`:
        return () => a2([]);
      case `onLostPointerCapture`:
        return (t3) => {
          let { internal: n3 } = e3.getState();
          `pointerId` in t3 && n3.capturedMap.has(t3.pointerId) && requestAnimationFrame(() => {
            n3.capturedMap.has(t3.pointerId) && (n3.capturedMap.delete(t3.pointerId), a2([]));
          });
        };
    }
    return function(c2) {
      let { onPointerMissed: l2, internal: u2 } = e3.getState();
      u2.lastEvent.current = c2;
      let d2 = s3 === `onPointerMove`, f2 = s3 === `onClick` || s3 === `onContextMenu` || s3 === `onDoubleClick`, p2 = r2(c2, d2 ? n2 : void 0), m2 = f2 ? t2(c2) : 0;
      s3 === `onPointerDown` && (u2.initialClick = [c2.offsetX, c2.offsetY], u2.initialHits = p2.map((e4) => e4.eventObject)), f2 && !p2.length && m2 <= 2 && (o2(c2, u2.interaction), l2 && l2(c2)), d2 && a2(p2);
      function h2(e4) {
        let t3 = e4.eventObject, n3 = t3.__r3f;
        if (!(n3 != null && n3.eventCount)) return;
        let r3 = n3.handlers;
        if (d2) {
          if (r3.onPointerOver || r3.onPointerEnter || r3.onPointerOut || r3.onPointerLeave) {
            let t4 = ln(e4), n4 = u2.hovered.get(t4);
            n4 ? n4.stopped && e4.stopPropagation() : (u2.hovered.set(t4, e4), r3.onPointerOver == null || r3.onPointerOver(e4), r3.onPointerEnter == null || r3.onPointerEnter(e4));
          }
          r3.onPointerMove == null || r3.onPointerMove(e4);
        } else {
          let n4 = r3[s3];
          n4 ? (!f2 || u2.initialHits.includes(t3)) && (o2(c2, u2.interaction.filter((e5) => !u2.initialHits.includes(e5))), n4(e4)) : f2 && u2.initialHits.includes(t3) && o2(c2, u2.interaction.filter((e5) => !u2.initialHits.includes(e5)));
        }
      }
      i2(p2, c2, m2, h2);
    };
  }
  return { handlePointer: s2 };
}
var mn = (e3) => typeof (e3 == null ? void 0 : e3.then) == `function`, hn = (e3) => Object.assign(Promise.resolve(e3), { status: `fulfilled`, value: e3 }), gn = (e3) => {
  let t2 = Promise.reject(e3);
  return t2.catch(() => {
  }), Object.assign(t2, { status: `rejected`, reason: e3 });
}, _n = () => {
  let e3, t2, n2 = new Promise((r2, i2) => {
    e3 = (e4) => {
      Object.assign(n2, { status: `fulfilled`, value: e4 }), r2(e4);
    }, t2 = (e4) => {
      Object.assign(n2, { status: `rejected`, reason: e4 }), i2(e4);
    };
  });
  return n2.status = `pending`, n2.catch(() => {
  }), { promise: n2, resolve: e3, reject: t2 };
}, vn = (e3) => !!(e3 != null && e3.render);
function yn(e3, t2) {
  let n2 = { canvas: e3, powerPreference: `high-performance`, antialias: true, alpha: true };
  return typeof t2 == `function` ? t2(n2) : vn(t2) ? t2 : new b({ ...n2, ...t2 });
}
function bn(e3) {
  if ((e3.hasInitialized == null ? void 0 : e3.hasInitialized()) === false) return;
  let t2 = Sn(() => {
    var t3;
    return e3.dispose ? e3.dispose() : (t3 = e3.renderLists) == null || t3.dispose == null ? void 0 : t3.dispose();
  });
  if (mn(t2)) return Promise.resolve(t2).catch((e4) => console.warn(`[R3F] Error disposing renderer`, e4)).then(() => Sn(() => e3.forceContextLoss == null ? void 0 : e3.forceContextLoss()));
  Sn(() => e3.forceContextLoss == null ? void 0 : e3.forceContextLoss());
}
function xn(e3, t2) {
  if (e3) {
    if (t2) return bn(e3);
    Sn(() => {
      var t3;
      return (t3 = e3.renderLists) == null || t3.dispose == null ? void 0 : t3.dispose();
    }), Sn(() => e3.forceContextLoss == null ? void 0 : e3.forceContextLoss());
  }
}
function Sn(e3) {
  try {
    return e3();
  } catch (e4) {
    console.warn(`[R3F] Error while unmounting root; teardown may be incomplete:`, e4);
  }
}
var Cn = J.createContext(null), wn = (e3, t2) => {
  let n2 = at((n3, r3) => {
    let i3 = new G(), o3 = new G(), s3 = new G();
    function c2(e4 = r3().camera, t3 = o3, n4 = r3().size) {
      let { width: a2, height: c3, top: l3, left: u3 } = n4, d3 = a2 / c3;
      t3.isVector3 ? s3.copy(t3) : s3.set(...t3);
      let f2 = e4.getWorldPosition(i3).distanceTo(s3);
      if (Ft(e4)) return { width: a2 / e4.zoom, height: c3 / e4.zoom, top: l3, left: u3, factor: 1, distance: f2, aspect: d3 };
      {
        let t4 = e4.fov * Math.PI / 180, n5 = 2 * Math.tan(t4 / 2) * f2, r4 = a2 / c3 * n5;
        return { width: r4, height: n5, top: l3, left: u3, factor: a2 / r4, distance: f2, aspect: d3 };
      }
    }
    let l2, u2 = (e4) => n3((t3) => ({ performance: { ...t3.performance, current: e4 } })), d2 = new a();
    return { set: n3, get: r3, gl: null, camera: null, raycaster: null, events: { priority: 1, enabled: true, connected: false }, scene: null, xr: null, invalidate: (t3 = 1) => e3(r3(), t3), advance: (e4, n4) => t2(e4, n4, r3()), legacy: false, linear: false, flat: false, controls: null, clock: new _(), pointer: d2, mouse: d2, frameloop: `always`, onPointerMissed: void 0, performance: { current: 1, min: 0.5, max: 1, debounce: 200, regress: () => {
      let e4 = r3();
      l2 && clearTimeout(l2), e4.performance.current !== e4.performance.min && u2(e4.performance.min), l2 = setTimeout(() => u2(r3().performance.max), e4.performance.debounce);
    } }, size: { width: 0, height: 0, top: 0, left: 0 }, viewport: { initialDpr: 0, dpr: 0, width: 0, height: 0, top: 0, left: 0, aspect: 0, distance: 0, factor: 0, getCurrentViewport: c2 }, setEvents: (e4) => n3((t3) => ({ ...t3, events: { ...t3.events, ...e4 } })), setSize: (e4, t3, i4 = 0, a2 = 0) => {
      let s4 = r3().camera, l3 = { width: e4, height: t3, top: i4, left: a2 };
      n3((e5) => ({ size: l3, viewport: { ...e5.viewport, ...c2(s4, o3, l3) } }));
    }, setDpr: (e4) => n3((t3) => {
      let n4 = zt(e4);
      return { viewport: { ...t3.viewport, dpr: n4, initialDpr: t3.viewport.initialDpr || n4 } };
    }), setFrameloop: (e4 = `always`) => {
      let t3 = r3().clock;
      t3.stop(), t3.elapsedTime = 0, e4 !== `never` && (t3.start(), t3.elapsedTime = 0), n3(() => ({ frameloop: e4 }));
    }, previousRoot: void 0, internal: { interaction: [], hovered: /* @__PURE__ */ new Map(), subscribers: [], initialClick: [0, 0], initialHits: [], capturedMap: /* @__PURE__ */ new Map(), lastEvent: J.createRef(), active: false, frames: 0, priority: 0, subscribe: (e4, t3, n4) => {
      let i4 = r3().internal;
      return i4.priority += +(t3 > 0), i4.subscribers.push({ ref: e4, priority: t3, store: n4 }), i4.subscribers = i4.subscribers.sort((e5, t4) => e5.priority - t4.priority), () => {
        let n5 = r3().internal;
        n5 != null && n5.subscribers && (n5.priority -= +(t3 > 0), n5.subscribers = n5.subscribers.filter((t4) => t4.ref !== e4));
      };
    } } };
  }), r2 = n2.getState(), i2 = r2.size, o2 = r2.viewport.dpr, s2 = r2.camera;
  return n2.subscribe(() => {
    let { camera: e4, size: t3, viewport: r3, gl: a2, set: c2 } = n2.getState();
    if (t3.width !== i2.width || t3.height !== i2.height || r3.dpr !== o2) {
      i2 = t3, o2 = r3.dpr, sn(e4, t3), r3.dpr > 0 && a2.setPixelRatio(r3.dpr);
      let n3 = typeof HTMLCanvasElement < `u` && a2.domElement instanceof HTMLCanvasElement;
      a2.setSize(t3.width, t3.height, n3);
    }
    e4 !== s2 && (s2 = e4, c2((t4) => ({ viewport: { ...t4.viewport, ...t4.viewport.getCurrentViewport(e4) } })));
  }), n2.subscribe((t3) => e3(t3)), n2;
};
function Tn() {
  let e3 = J.useContext(Cn);
  if (!e3) throw Error(`R3F: Hooks can only be used within the Canvas component!`);
  return e3;
}
function En(e3 = (e4) => e4, t2) {
  return Tn()(e3, t2);
}
function Dn(e3, t2 = 0) {
  let n2 = Tn(), r2 = n2.getState().internal.subscribe, i2 = Dt(e3);
  return Et(() => r2(i2, t2, n2), [t2, r2, n2]), null;
}
var On = /* @__PURE__ */ new WeakMap(), kn = (e3) => {
  var _a3;
  return typeof e3 == `function` && ((_a3 = e3 == null ? void 0 : e3.prototype) == null ? void 0 : _a3.constructor) === e3;
};
function An(e3, t2) {
  return function(n2, ...r2) {
    let i2;
    return kn(n2) ? (i2 = On.get(n2), i2 || (i2 = new n2(), On.set(n2, i2))) : i2 = n2, e3 && e3(i2), Promise.all(r2.map((e4) => new Promise((n3, r3) => i2.load(e4, (e5) => {
      cn(e5 == null ? void 0 : e5.scene) && Object.assign(e5, Ut(e5.scene)), n3(e5);
    }, t2, (t3) => r3(Error(`Could not load ${e4}: ${t3 == null ? void 0 : t3.message}`))))));
  };
}
function jn(e3, t2, n2, r2) {
  let i2 = Array.isArray(t2) ? t2 : [t2], a2 = ut(An(n2, r2), [e3, ...i2], { equal: Ht.equ });
  return Array.isArray(t2) ? a2 : a2[0];
}
jn.preload = function(e3, t2, n2) {
  let r2 = Array.isArray(t2) ? t2 : [t2];
  return dt(An(n2), [e3, ...r2]);
}, jn.clear = function(e3, t2) {
  return ft([e3, ...Array.isArray(t2) ? t2 : [t2]]);
};
var Mn = 1, Nn = 8, Pn = 32, Fn = 2, In = 268435456, Ln = { objects: `shallow` };
function Rn(e3, t2) {
  if (!t2 && typeof HTMLCanvasElement < `u` && e3 instanceof HTMLCanvasElement && e3.parentElement) {
    let { width: t3, height: n2, top: r2, left: i2 } = e3.parentElement.getBoundingClientRect();
    return { width: t3, height: n2, top: r2, left: i2 };
  }
  return !t2 && typeof OffscreenCanvas < `u` && e3 instanceof OffscreenCanvas ? { width: e3.width, height: e3.height, top: 0, left: 0 } : { width: 0, height: 0, top: 0, left: 0, ...t2 };
}
function zn({ store: e3, configuration: t2 }, n2, r2) {
  var _a3;
  let { gl: i2, scene: a2, camera: o2, shadows: s2 = false, linear: c2 = false, flat: l2 = false, legacy: u2 = false, frameloop: d2 = `always`, dpr: f2 = [1, 2], performance: m2, onPointerMissed: h2 } = r2, g2 = Rn(n2, r2.size), _2 = { ...r2, shadows: s2, linear: c2, flat: l2, legacy: u2, frameloop: d2, size: g2 }, v2 = e3.getState(), y2 = v2.gl, b2 = t2.previous, x2 = (e4) => !b2 || !Ht.equ(_2[e4], b2[e4], Ln);
  t2.previous = void 0;
  let S2 = v2.raycaster;
  if (S2 || v2.set({ raycaster: S2 = new Oe() }), x2(`raycaster`)) {
    let { params: e4, ...t3 } = r2.raycaster ?? {};
    an(S2, { ...t3, params: { ...S2.params, ...e4 } });
  }
  if (!v2.camera || v2.camera === t2.camera && x2(`camera`)) {
    t2.camera = o2;
    let e4 = o2 == null ? void 0 : o2.isCamera, n3 = e4 ? o2 : r2.orthographic ? new p(0, 0, 0, 0, 0.1, 1e3) : new Ee(75, 0, 0.1, 1e3);
    e4 || (n3.position.z = 5, o2 && (an(n3, o2), n3.manual || (`aspect` in o2 || `left` in o2 || `right` in o2 || `bottom` in o2 || `top` in o2) && (n3.manual = true, n3.updateProjectionMatrix())), !v2.camera && !(o2 != null && o2.rotation) && n3.lookAt(0, 0, 0)), v2.set({ camera: n3 }), S2.camera = n3;
  }
  if (!v2.scene) {
    let t3;
    a2 != null && a2.isScene ? (t3 = a2, qt(t3, e3, ``, {})) : (t3 = new H(), qt(t3, e3, ``, {}), a2 && an(t3, a2)), v2.set({ scene: t3 });
  }
  if (r2.events && !v2.events.handlers && v2.set({ events: r2.events(e3) }), x2(`size`) && v2.setSize(g2.width, g2.height, g2.top, g2.left), v2.viewport.dpr !== zt(f2) && v2.setDpr(f2), x2(`frameloop`) && v2.setFrameloop(d2), x2(`onPointerMissed`) && v2.set({ onPointerMissed: h2 }), m2 && x2(`performance`) && v2.set((e4) => ({ performance: { ...e4.performance, ...m2 } })), !v2.xr) {
    let t3 = (t4, n4) => {
      let r4 = e3.getState();
      r4.frameloop !== `never` && qr(t4, true, r4, n4);
    }, n3 = () => {
      let n4 = e3.getState();
      n4.gl.xr.enabled = n4.gl.xr.isPresenting, n4.gl.xr.setAnimationLoop(n4.gl.xr.isPresenting ? t3 : null), n4.gl.xr.isPresenting || Kr(n4);
    }, r3 = { connect() {
      let t4 = e3.getState().gl;
      t4.xr.addEventListener(`sessionstart`, n3), t4.xr.addEventListener(`sessionend`, n3);
    }, disconnect() {
      let t4 = e3.getState().gl;
      t4.xr.removeEventListener(`sessionstart`, n3), t4.xr.removeEventListener(`sessionend`, n3);
    } };
    typeof ((_a3 = y2.xr) == null ? void 0 : _a3.addEventListener) == `function` && r3.connect(), v2.set({ xr: r3 });
  }
  if (y2.shadowMap && x2(`shadows`)) {
    let e4 = y2.shadowMap.enabled, t3 = y2.shadowMap.type;
    if (y2.shadowMap.enabled = !!s2, Ht.boo(s2)) y2.shadowMap.type = 2;
    else if (Ht.str(s2)) {
      let e5 = { basic: 0, percentage: 1, soft: 2, variance: 3 };
      y2.shadowMap.type = e5[s2] ?? 2;
    } else Ht.obj(s2) && Object.assign(y2.shadowMap, s2);
    (e4 !== y2.shadowMap.enabled || t3 !== y2.shadowMap.type) && (y2.shadowMap.needsUpdate = true);
  }
  let C2 = i2 && !Ht.fun(i2) && !vn(i2) ? i2 : void 0;
  x2(`legacy`) && (R.enabled = !u2, v2.set({ legacy: u2 })), x2(`linear`) && ((C2 == null ? void 0 : C2.outputColorSpace) === void 0 && (y2.outputColorSpace = c2 ? w : me), v2.set({ linear: c2 })), x2(`flat`) && ((C2 == null ? void 0 : C2.toneMapping) === void 0 && (y2.toneMapping = l2 ? 0 : 4), v2.set({ flat: l2 })), C2 && x2(`gl`) && an(y2, C2), t2.previous = _2;
}
function Bn(e3) {
  let t2 = () => {
    var _a3;
    return (_a3 = e3.store.getState().gl) == null ? void 0 : _a3.xr;
  }, n2 = () => {
    var r3, i2, a2;
    let o2 = e3.store.getState();
    if ((r3 = t2()) != null && r3.isPresenting || (i2 = t2()) != null && i2.getSession != null && i2.getSession()) {
      t2().addEventListener(`sessionend`, n2);
      return;
    }
    (a2 = t2()) == null || a2.removeEventListener == null || a2.removeEventListener(`sessionend`, n2);
    let s2 = e3.configuration.previous;
    if (!s2) return;
    let c2 = s2.dpr ?? [1, 2];
    o2.viewport.dpr !== zt(c2) && o2.setDpr(c2);
  }, r2 = Bt(n2);
  return () => {
    var e4;
    r2(), (e4 = t2()) == null || e4.removeEventListener == null || e4.removeEventListener(`sessionend`, n2);
  };
}
var Vn = { name: `@react-three/fiber`, version: `9.8.2`, description: `A React renderer for Threejs`, keywords: [`react`, `renderer`, `fiber`, `three`, `threejs`], author: `Paul Henschel (https://github.com/drcmda)`, license: `MIT`, maintainers: [`Josh Ellis (https://github.com/joshuaellis)`, `Cody Bennett (https://github.com/codyjasonbennett)`, `Kris Baumgarter (https://github.com/krispya)`], bugs: { url: `https://github.com/pmndrs/react-three-fiber/issues` }, homepage: `https://github.com/pmndrs/react-three-fiber#readme`, repository: { type: `git`, url: `git+https://github.com/pmndrs/react-three-fiber.git` }, collective: { type: `opencollective`, url: `https://opencollective.com/react-three-fiber` }, main: `dist/react-three-fiber.cjs.js`, module: `dist/react-three-fiber.esm.js`, types: `dist/react-three-fiber.cjs.d.ts`, "react-native": `native/dist/react-three-fiber-native.cjs.js`, files: [`dist`, `native`, `react-reconciler`, `CHANGELOG.md`], sideEffects: false, preconstruct: { entrypoints: [`index.tsx`, `native.tsx`] }, scripts: { prebuild: `cp ../../readme.md readme.md` }, devDependencies: { "@types/react-reconciler": `^0.33.0`, "react-reconciler": `^0.34.0` }, dependencies: { "@babel/runtime": `^7.17.8`, "@types/webxr": `*`, "base64-js": `^1.5.1`, buffer: `^6.0.3`, "its-fine": `^2.1.1`, "react-use-measure": `^2.1.7`, scheduler: `^0.28.0`, "suspend-react": `^0.1.3`, "use-sync-external-store": `^1.4.0`, zustand: `^5.0.3` }, peerDependencies: { expo: `>=43.0`, "expo-asset": `>=8.4`, "expo-file-system": `>=11.0`, "expo-gl": `>=11.0`, react: `>=19 <19.4`, "react-dom": `>=19 <19.4`, "react-native": `>=0.78`, three: `>=0.156` }, peerDependenciesMeta: { "react-dom": { optional: true }, "react-native": { optional: true }, expo: { optional: true }, "expo-asset": { optional: true }, "expo-file-system": { optional: true }, "expo-gl": { optional: true } } };
function Hn(e3) {
  return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, `default`) ? e3.default : e3;
}
var Un = { exports: {} }, Wn = { exports: {} };
Wn.exports;
var Gn;
function Kn() {
  return Gn || (Gn = 1, (function(e3) {
    e3.exports = function(e4) {
      function t2(e5, t3, n3, r3) {
        return new Ya2(e5, t3, n3, r3);
      }
      function n2() {
      }
      function r2(e5) {
        var t3 = `https://react.dev/errors/` + e5;
        if (1 < arguments.length) {
          t3 += `?args[]=` + encodeURIComponent(arguments[1]);
          for (var n3 = 2; n3 < arguments.length; n3++) t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
        }
        return `Minified React error #` + e5 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
      }
      function i2(e5) {
        for (var t3 = e5, n3 = t3; n3 && !n3.alternate; ) t3 = n3, t3.flags & 4098 && (e5 = t3.return), n3 = t3.return;
        for (; t3.return; ) t3 = t3.return;
        return t3.tag === 3 ? e5 : null;
      }
      function a2(e5) {
        if (i2(e5) !== e5) throw Error(r2(188));
      }
      function o2(e5) {
        var t3 = e5.alternate;
        if (!t3) {
          if (t3 = i2(e5), t3 === null) throw Error(r2(188));
          return t3 === e5 ? e5 : null;
        }
        for (var n3 = e5, o3 = t3; ; ) {
          var s3 = n3.return;
          if (s3 === null) break;
          var c3 = s3.alternate;
          if (c3 === null) {
            if (o3 = s3.return, o3 !== null) {
              n3 = o3;
              continue;
            }
            break;
          }
          if (s3.child === c3.child) {
            for (c3 = s3.child; c3; ) {
              if (c3 === n3) return a2(s3), e5;
              if (c3 === o3) return a2(s3), t3;
              c3 = c3.sibling;
            }
            throw Error(r2(188));
          }
          if (n3.return !== o3.return) n3 = s3, o3 = c3;
          else {
            for (var l3 = false, u3 = s3.child; u3; ) {
              if (u3 === n3) {
                l3 = true, n3 = s3, o3 = c3;
                break;
              }
              if (u3 === o3) {
                l3 = true, o3 = s3, n3 = c3;
                break;
              }
              u3 = u3.sibling;
            }
            if (!l3) {
              for (u3 = c3.child; u3; ) {
                if (u3 === n3) {
                  l3 = true, n3 = c3, o3 = s3;
                  break;
                }
                if (u3 === o3) {
                  l3 = true, o3 = c3, n3 = s3;
                  break;
                }
                u3 = u3.sibling;
              }
              if (!l3) throw Error(r2(189));
            }
          }
          if (n3.alternate !== o3) throw Error(r2(190));
        }
        if (n3.tag !== 3) throw Error(r2(188));
        return n3.stateNode.current === n3 ? e5 : t3;
      }
      function s2(e5) {
        var t3 = e5.tag;
        if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e5;
        for (e5 = e5.child; e5 !== null; ) {
          if (t3 = s2(e5), t3 !== null) return t3;
          e5 = e5.sibling;
        }
        return null;
      }
      function c2(e5) {
        var t3 = e5.tag;
        if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e5;
        for (e5 = e5.child; e5 !== null; ) {
          if (e5.tag !== 4 && (t3 = c2(e5), t3 !== null)) return t3;
          e5 = e5.sibling;
        }
        return null;
      }
      function l2(e5) {
        return typeof e5 != `object` || !e5 ? null : (e5 = Po2 && e5[Po2] || e5[`@@iterator`], typeof e5 == `function` ? e5 : null);
      }
      function u2(e5) {
        if (e5 == null) return null;
        if (typeof e5 == `function`) return e5.$$typeof === Io2 ? null : e5.displayName || e5.name || null;
        if (typeof e5 == `string`) return e5;
        switch (e5) {
          case yo2:
            return `Fragment`;
          case xo2:
            return `Profiler`;
          case bo2:
            return `StrictMode`;
          case To2:
            return `Suspense`;
          case Eo2:
            return `SuspenseList`;
          case ko2:
            return `Activity`;
          case Mo2:
            return `ViewTransition`;
        }
        if (typeof e5 == `object`) switch (e5.$$typeof) {
          case vo2:
            return `Portal`;
          case Co2:
            return e5.displayName || `Context`;
          case So2:
            return (e5._context.displayName || `Context`) + `.Consumer`;
          case wo2:
            var t3 = e5.render;
            return e5 = e5.displayName, e5 || (e5 = (e5 = t3.displayName || t3.name || ``, e5 === `` ? `ForwardRef` : `ForwardRef(` + e5 + `)`)), e5;
          case Do2:
            return t3 = e5.displayName || null, t3 === null ? u2(e5.type) || `Memo` : t3;
          case Oo2:
            t3 = e5._payload, e5 = e5._init;
            try {
              return u2(e5(t3));
            } catch {
            }
        }
        return null;
      }
      function d2(e5) {
        return { current: e5 };
      }
      function f2(e5) {
        0 > xl || (e5.current = bl[xl], bl[xl] = null, xl--);
      }
      function p2(e5, t3) {
        xl++, bl[xl] = e5.current, e5.current = t3;
      }
      function m2(e5) {
        return e5 >>>= 0, e5 === 0 ? 32 : 31 - (wl(e5) / Tl | 0) | 0;
      }
      function h2(e5) {
        var t3 = e5 & 42;
        if (t3 !== 0) return t3;
        switch (e5 & -e5) {
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
            return e5 & -e5;
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return e5 & 3932160;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return e5 & 62914560;
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
            return e5;
        }
      }
      function g2(e5, t3, n3) {
        var r3 = e5.pendingLanes;
        if (r3 === 0) return 0;
        var i3 = 0, a3 = e5.suspendedLanes, o3 = e5.pingedLanes;
        e5 = e5.warmLanes;
        var s3 = r3 & 134217727;
        return s3 === 0 ? (s3 = r3 & ~a3, s3 === 0 ? o3 === 0 ? n3 || (n3 = r3 & ~e5, n3 !== 0 && (i3 = h2(n3))) : i3 = h2(o3) : i3 = h2(s3)) : (r3 = s3 & ~a3, r3 === 0 ? (o3 &= s3, o3 === 0 ? n3 || (n3 = s3 & ~e5, n3 !== 0 && (i3 = h2(n3))) : i3 = h2(o3)) : i3 = h2(r3)), i3 === 0 ? 0 : t3 !== 0 && t3 !== i3 && (t3 & a3) === 0 && (a3 = i3 & -i3, n3 = t3 & -t3, a3 >= n3 || a3 === 32 && n3 & 4194048) ? t3 : i3;
      }
      function _2(e5, t3) {
        return (e5.pendingLanes & ~(e5.suspendedLanes & ~e5.pingedLanes) & t3) === 0;
      }
      function v2(e5, t3) {
        t3 & 8 && (t3 |= t3 & 32);
        var n3 = e5.entangledLanes;
        if (n3 !== 0) for (e5 = e5.entanglements, n3 &= t3; 0 < n3; ) {
          var r3 = 31 - Cl(n3), i3 = 1 << r3;
          t3 |= e5[r3], n3 &= ~i3;
        }
        return t3;
      }
      function y2(e5, t3) {
        switch (e5) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return t3 + 250;
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
            return t3 + 5e3;
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
      function b2() {
        var e5 = Ol;
        return Ol <<= 1, !(Ol & 62914560) && (Ol = 4194304), e5;
      }
      function x2(e5) {
        for (var t3 = [], n3 = 0; 31 > n3; n3++) t3.push(e5);
        return t3;
      }
      function S2(e5, t3) {
        e5.pendingLanes |= t3, t3 !== 268435456 && (e5.suspendedLanes = 0, e5.pingedLanes = 0, e5.warmLanes = 0);
      }
      function C2(e5, t3, n3, r3, i3, a3) {
        var o3 = e5.pendingLanes;
        e5.pendingLanes = n3, e5.suspendedLanes = 0, e5.pingedLanes = 0, e5.warmLanes = 0, e5.expiredLanes &= n3, e5.entangledLanes &= n3, e5.errorRecoveryDisabledLanes &= n3, e5.shellSuspendCounter = 0;
        var s3 = e5.entanglements, c3 = e5.expirationTimes, l3 = e5.hiddenUpdates;
        for (n3 = o3 & ~n3; 0 < n3; ) {
          var u3 = 31 - Cl(n3), d3 = 1 << u3;
          s3[u3] = 0, c3[u3] = -1;
          var f3 = l3[u3];
          if (f3 !== null) for (l3[u3] = null, u3 = 0; u3 < f3.length; u3++) {
            var p3 = f3[u3];
            p3 !== null && (p3.lane &= -536870913);
          }
          n3 &= ~d3;
        }
        r3 !== 0 && w2(e5, r3, 0), a3 !== 0 && i3 === 0 && e5.tag !== 0 && (e5.suspendedLanes |= a3 & ~(o3 & ~t3));
      }
      function w2(e5, t3, n3) {
        e5.pendingLanes |= t3, e5.suspendedLanes &= ~t3;
        var r3 = 31 - Cl(t3);
        e5.entangledLanes |= t3, e5.entanglements[r3] = e5.entanglements[r3] | 1073741824 | n3 & 261930;
      }
      function T2(e5, t3) {
        var n3 = e5.entangledLanes |= t3;
        for (e5 = e5.entanglements; n3; ) {
          var r3 = 31 - Cl(n3), i3 = 1 << r3;
          i3 & t3 | e5[r3] & t3 && (e5[r3] |= t3), n3 &= ~i3;
        }
      }
      function E2(e5, t3) {
        var n3 = t3 & -t3;
        return n3 = n3 & 42 ? 1 : D2(n3), (n3 & (e5.suspendedLanes | t3)) === 0 ? n3 : 0;
      }
      function D2(e5) {
        switch (e5) {
          case 2:
            e5 = 1;
            break;
          case 8:
            e5 = 4;
            break;
          case 32:
            e5 = 16;
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
            e5 = 128;
            break;
          case 268435456:
            e5 = 134217728;
            break;
          default:
            e5 = 0;
        }
        return e5;
      }
      function O2(e5) {
        return e5 &= -e5, 2 < e5 ? 8 < e5 ? e5 & 134217727 ? 32 : 268435456 : 8 : 2;
      }
      function k2(e5) {
        if (typeof Ll == `function` && Rl(e5), Bl && typeof Bl.setStrictMode == `function`) try {
          Bl.setStrictMode(zl, e5);
        } catch {
        }
      }
      function A2(e5, t3) {
        if (e5.name != null && e5.name !== `auto`) return e5.name;
        if (t3.autoName !== null) return t3.autoName;
        e5 = gf.identifierPrefix;
        var n3 = Vl++;
        return e5 = `_` + e5 + `t_` + n3.toString(32) + `_`, t3.autoName = e5;
      }
      function j2(e5) {
        if (e5 == null || typeof e5 == `string`) return e5;
        var t3 = null, n3 = wf;
        if (n3 !== null) for (var r3 = 0; r3 < n3.length; r3++) {
          var i3 = e5[n3[r3]];
          if (i3 != null) {
            if (i3 === `none`) return `none`;
            t3 = t3 == null ? i3 : t3 + (` ` + i3);
          }
        }
        return t3 ?? e5.default;
      }
      function M2(e5, t3) {
        return e5 = j2(e5), t3 = j2(t3), t3 == null ? e5 === `auto` ? null : e5 : t3 === `auto` ? null : t3;
      }
      function N2(e5, t3) {
        return e5 === t3 && (e5 !== 0 || 1 / e5 == 1 / t3) || e5 !== e5 && t3 !== t3;
      }
      function P2(e5) {
        if (Gl === void 0) try {
          throw Error();
        } catch (e6) {
          var t3 = e6.stack.trim().match(/\n( *(at )?)/);
          Gl = t3 && t3[1] || ``, Kl = -1 < e6.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e6.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
        }
        return `
` + Gl + e5 + Kl;
      }
      function F2(e5, t3) {
        if (!e5 || ql) return ``;
        ql = true;
        var n3 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var r3 = { DetermineComponentFrameRoot: function() {
            try {
              if (t3) {
                var n4 = function() {
                  throw Error();
                };
                if (Object.defineProperty(n4.prototype, "props", { set: function() {
                  throw Error();
                } }), typeof Reflect == `object` && Reflect.construct) {
                  try {
                    Reflect.construct(n4, []);
                  } catch (e6) {
                    var r4 = e6;
                  }
                  Reflect.construct(e5, [], n4);
                } else {
                  try {
                    n4.call();
                  } catch (e6) {
                    r4 = e6;
                  }
                  n4 = false;
                  try {
                    var i4 = Object.getOwnPropertyDescriptor(e5.prototype, `props`);
                    Object.defineProperty(e5.prototype, "props", { configurable: true, set: function() {
                      throw Error();
                    } }), n4 = true, new e5();
                  } finally {
                    n4 && (i4 === void 0 ? delete e5.prototype.props : Object.defineProperty(e5.prototype, "props", i4));
                  }
                }
              } else {
                try {
                  throw Error();
                } catch (e6) {
                  r4 = e6;
                }
                (n4 = e5()) && typeof n4.catch == `function` && n4.catch(function() {
                });
              }
            } catch (e6) {
              if (e6 && r4 && typeof e6.stack == `string`) return [e6.stack, r4.stack];
            }
            return [null, null];
          } };
          r3.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
          var i3 = Object.getOwnPropertyDescriptor(r3.DetermineComponentFrameRoot, `name`);
          i3 && i3.configurable && Object.defineProperty(r3.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
          var a3 = r3.DetermineComponentFrameRoot(), o3 = a3[0], s3 = a3[1];
          if (o3 && s3) {
            var c3 = o3.split(`
`), l3 = s3.split(`
`);
            for (i3 = r3 = 0; r3 < c3.length && !c3[r3].includes(`DetermineComponentFrameRoot`); ) r3++;
            for (; i3 < l3.length && !l3[i3].includes(`DetermineComponentFrameRoot`); ) i3++;
            if (r3 === c3.length || i3 === l3.length) for (r3 = c3.length - 1, i3 = l3.length - 1; 1 <= r3 && 0 <= i3 && c3[r3] !== l3[i3]; ) i3--;
            for (; 1 <= r3 && 0 <= i3; r3--, i3--) if (c3[r3] !== l3[i3]) {
              if (r3 !== 1 || i3 !== 1) do
                if (r3--, i3--, 0 > i3 || c3[r3] !== l3[i3]) {
                  var u3 = `
` + c3[r3].replace(` at new `, ` at `);
                  return e5.displayName && u3.includes(`<anonymous>`) && (u3 = u3.replace(`<anonymous>`, e5.displayName)), u3;
                }
              while (1 <= r3 && 0 <= i3);
              break;
            }
          }
        } finally {
          ql = false, Error.prepareStackTrace = n3;
        }
        return (n3 = e5 ? e5.displayName || e5.name : ``) ? P2(n3) : ``;
      }
      function I2(e5, t3) {
        switch (e5.tag) {
          case 26:
          case 27:
          case 5:
            return P2(e5.type);
          case 16:
            return P2(`Lazy`);
          case 13:
            return e5.child !== t3 && t3 !== null ? P2(`Suspense Fallback`) : P2(`Suspense`);
          case 19:
            return P2(`SuspenseList`);
          case 0:
          case 15:
            return F2(e5.type, false);
          case 11:
            return F2(e5.type.render, false);
          case 1:
            return F2(e5.type, true);
          case 31:
            return P2(`Activity`);
          case 30:
            return P2(`ViewTransition`);
          default:
            return ``;
        }
      }
      function ee2(e5) {
        try {
          var t3 = ``, n3 = null;
          do
            t3 += I2(e5, n3), n3 = e5, e5 = e5.return;
          while (e5);
          return t3;
        } catch (e6) {
          return `
Error generating stack: ` + e6.message + `
` + e6.stack;
        }
      }
      function L2(e5, t3) {
        if (typeof e5 == `object` && e5) {
          var n3 = Jl.get(e5);
          return n3 === void 0 ? (t3 = { value: e5, source: t3, stack: ee2(t3) }, Jl.set(e5, t3), t3) : n3;
        }
        return { value: e5, source: t3, stack: ee2(t3) };
      }
      function R2(e5, t3) {
        Yl[Xl++] = Ql, Yl[Xl++] = Zl, Zl = e5, Ql = t3;
      }
      function z2(e5, t3, n3) {
        $l[eu++] = nu, $l[eu++] = ru, $l[eu++] = tu, tu = e5;
        var r3 = nu;
        e5 = ru;
        var i3 = 32 - Cl(r3) - 1;
        r3 &= ~(1 << i3), n3 += 1;
        var a3 = 32 - Cl(t3) + i3;
        if (30 < a3) {
          var o3 = i3 - i3 % 5;
          a3 = (r3 & (1 << o3) - 1).toString(32), r3 >>= o3, i3 -= o3, nu = 1 << 32 - Cl(t3) + i3 | n3 << i3 | r3, ru = a3 + e5;
        } else nu = 1 << a3 | n3 << i3 | r3, ru = e5;
      }
      function B2(e5) {
        e5.return !== null && (R2(e5, 1), z2(e5, 1, 0));
      }
      function te2(e5) {
        for (; e5 === Zl; ) Zl = Yl[--Xl], Yl[Xl] = null, Ql = Yl[--Xl], Yl[Xl] = null;
        for (; e5 === tu; ) tu = $l[--eu], $l[eu] = null, ru = $l[--eu], $l[eu] = null, nu = $l[--eu], $l[eu] = null;
      }
      function V2(e5, t3) {
        $l[eu++] = nu, $l[eu++] = ru, $l[eu++] = tu, nu = t3.id, ru = t3.overflow, tu = e5;
      }
      function ne2(e5, t3) {
        p2(ou, t3), p2(au, e5), p2(iu, null), e5 = Ho2(t3), f2(iu), p2(iu, e5);
      }
      function H2() {
        f2(iu), f2(au), f2(ou);
      }
      function re2(e5) {
        var t3 = e5.memoizedState;
        t3 !== null && (t3 = t3.memoizedState, es2 ? bs2._currentValue = t3 : bs2._currentValue2 = t3, p2(su, e5)), t3 = iu.current;
        var n3 = Uo2(t3, e5.type);
        t3 !== n3 && (p2(au, e5), p2(iu, n3));
      }
      function ie2(e5) {
        au.current === e5 && (f2(iu), f2(au)), su.current === e5 && (f2(su), es2 ? bs2._currentValue = ys2 : bs2._currentValue2 = ys2);
      }
      function U2(e5) {
        throw ue2(L2(Error(r2(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e5)), pu;
      }
      function ae2(e5, t3) {
        if (!rs2) throw Error(r2(175));
        Fc2(e5.stateNode, e5.type, e5.memoizedProps, t3, e5) || U2(e5, true);
      }
      function oe2(e5) {
        for (cu = e5.return; cu; ) switch (cu.tag) {
          case 5:
          case 31:
          case 13:
            fu = false;
            return;
          case 27:
          case 3:
            fu = true;
            return;
          default:
            cu = cu.return;
        }
      }
      function se2(e5) {
        if (!rs2 || e5 !== cu) return false;
        if (!uu) return oe2(e5), uu = true, false;
        var t3 = e5.tag;
        if (ml ? t3 !== 3 && t3 !== 27 && (t3 !== 5 || Zc2(e5.type) && !Yo2(e5.type, e5.memoizedProps)) && lu && U2(e5) : t3 !== 3 && (t3 !== 5 || Zc2(e5.type) && !Yo2(e5.type, e5.memoizedProps)) && lu && U2(e5), oe2(e5), t3 === 13) {
          if (!rs2) throw Error(r2(316));
          if (e5 = e5.memoizedState, e5 = e5 === null ? null : e5.dehydrated, !e5) throw Error(r2(317));
          lu = Bc2(e5);
        } else if (t3 === 31) {
          if (e5 = e5.memoizedState, e5 = e5 === null ? null : e5.dehydrated, !e5) throw Error(r2(317));
          lu = zc2(e5);
        } else lu = ml && t3 === 27 ? Tc2(e5.type, lu) : cu ? wc2(e5.stateNode) : null;
        return true;
      }
      function ce2() {
        rs2 && (lu = cu = null, uu = false);
      }
      function le2() {
        var e5 = du;
        return e5 !== null && (cf === null ? cf = e5 : cf.push.apply(cf, e5), du = null), e5;
      }
      function ue2(e5) {
        du === null ? du = [e5] : du.push(e5);
      }
      function de2(e5, t3, n3) {
        es2 ? (p2(mu, t3._currentValue), t3._currentValue = n3) : (p2(mu, t3._currentValue2), t3._currentValue2 = n3);
      }
      function fe2(e5) {
        var t3 = mu.current;
        es2 ? e5._currentValue = t3 : e5._currentValue2 = t3, f2(mu);
      }
      function pe2(e5, t3, n3) {
        for (; e5 !== null; ) {
          var r3 = e5.alternate;
          if ((e5.childLanes & t3) === t3 ? r3 !== null && (r3.childLanes & t3) !== t3 && (r3.childLanes |= t3) : (e5.childLanes |= t3, r3 !== null && (r3.childLanes |= t3)), e5 === n3) break;
          e5 = e5.return;
        }
      }
      function me2(e5, t3, n3, i3) {
        var a3 = e5.child;
        for (a3 !== null && (a3.return = e5); a3 !== null; ) {
          var o3 = a3.dependencies;
          if (o3 !== null) {
            var s3 = a3.child;
            o3 = o3.firstContext;
            e: for (; o3 !== null; ) {
              var c3 = o3;
              o3 = a3;
              for (var l3 = 0; l3 < t3.length; l3++) if (c3.context === t3[l3]) {
                o3.lanes |= n3, c3 = o3.alternate, c3 !== null && (c3.lanes |= n3), pe2(o3.return, n3, e5), i3 || (s3 = null);
                break e;
              }
              o3 = c3.next;
            }
          } else if (a3.tag === 18) {
            if (s3 = a3.return, s3 === null) throw Error(r2(341));
            s3.lanes |= n3, o3 = s3.alternate, o3 !== null && (o3.lanes |= n3), pe2(s3, n3, e5), s3 = null;
          } else a3.tag === 13 && a3.memoizedState !== null && a3.memoizedState.dehydrated === null ? (a3.lanes |= n3, s3 = a3.alternate, s3 !== null && (s3.lanes |= n3), pe2(a3.return, n3, e5), s3 = a3.child, s3 = s3 === null ? null : s3.sibling) : s3 = a3.child;
          if (s3 !== null) s3.return = a3;
          else for (s3 = a3; s3 !== null; ) {
            if (s3 === e5) {
              s3 = null;
              break;
            }
            if (a3 = s3.sibling, a3 !== null) {
              a3.return = s3.return, s3 = a3;
              break;
            }
            s3 = s3.return;
          }
          a3 = s3;
        }
      }
      function W2(e5, t3, n3, i3) {
        e5 = null;
        for (var a3 = t3, o3 = false; a3 !== null; ) {
          if (!o3) {
            if (a3.flags & 524288) o3 = true;
            else if (a3.flags & 262144) break;
          }
          if (a3.tag === 10) {
            var s3 = a3.alternate;
            if (s3 === null) throw Error(r2(387));
            if (s3 = s3.memoizedProps, s3 !== null) {
              var c3 = a3.type;
              Hl(a3.pendingProps.value, s3.value) || (e5 === null ? e5 = [c3] : e5.push(c3));
            }
          } else if (a3 === su.current) {
            if (s3 = a3.alternate, s3 === null) throw Error(r2(387));
            s3.memoizedState.memoizedState !== a3.memoizedState.memoizedState && (e5 === null ? e5 = [bs2] : e5.push(bs2));
          }
          a3 = a3.return;
        }
        return e5 !== null && me2(t3, e5, n3, i3), t3.flags |= 262144, e5 !== null;
      }
      function he2(e5) {
        for (e5 = e5.firstContext; e5 !== null; ) {
          var t3 = e5.context;
          if (!Hl(es2 ? t3._currentValue : t3._currentValue2, e5.memoizedValue)) return true;
          e5 = e5.next;
        }
        return false;
      }
      function ge2(e5) {
        hu = e5, gu = null, e5 = e5.dependencies, e5 !== null && (e5.firstContext = null);
      }
      function _e2(e5) {
        return ye2(hu, e5);
      }
      function ve2(e5, t3) {
        return hu === null && ge2(e5), ye2(e5, t3);
      }
      function ye2(e5, t3) {
        var n3 = es2 ? t3._currentValue : t3._currentValue2;
        if (t3 = { context: t3, memoizedValue: n3, next: null }, gu === null) {
          if (e5 === null) throw Error(r2(308));
          gu = t3, e5.dependencies = { lanes: 0, firstContext: t3 }, e5.flags |= 524288;
        } else gu = gu.next = t3;
        return n3;
      }
      function be2() {
        return { controller: new _u(), data: /* @__PURE__ */ new Map(), refCount: 0 };
      }
      function xe2(e5) {
        e5.refCount--, e5.refCount === 0 && vu(yu, function() {
          e5.controller.abort();
        });
      }
      function Se2(e5, t3) {
        if (e5.pendingLanes & 4194048) {
          var n3 = e5.transitionTypes;
          for (n3 === null && (n3 = e5.transitionTypes = []), e5 = 0; e5 < t3.length; e5++) {
            var r3 = t3[e5];
            n3.indexOf(r3) === -1 && n3.push(r3);
          }
        }
      }
      function Ce2(e5) {
        var t3 = e5.transitionTypes;
        return e5.transitionTypes = null, t3;
      }
      function we2() {
      }
      function Te2(e5) {
        e5 !== Cu && e5.next === null && (Cu === null ? Su = Cu = e5 : Cu = Cu.next = e5), Tu = true, wu || (wu = true, Me2());
      }
      function Ee2(e5, t3) {
        if (!Eu && Tu) {
          Eu = true;
          do
            for (var n3 = false, r3 = Su; r3 !== null; ) {
              if (!t3) {
                if (e5 !== 0) {
                  var i3 = r3.pendingLanes;
                  if (i3 === 0) var a3 = 0;
                  else {
                    var o3 = r3.suspendedLanes, s3 = r3.pingedLanes;
                    a3 = (1 << 31 - Cl(42 | e5) + 1) - 1, a3 &= i3 & ~(o3 & ~s3), a3 = a3 & 201326741 ? a3 & 201326741 | 1 : a3 ? a3 | 2 : 0;
                  }
                  a3 !== 0 && (n3 = true, je2(r3, a3));
                } else a3 = qd, a3 = g2(r3, r3 === Gd ? a3 : 0, r3.cancelPendingCommit !== null || r3.timeoutHandle !== $o2), !(a3 & 3) || _2(r3, a3) || (n3 = true, je2(r3, a3));
              }
              r3 = r3.next;
            }
          while (n3);
          Eu = false;
        }
      }
      function De2() {
        Oe2();
      }
      function Oe2() {
        Tu = wu = false;
        var e5 = 0;
        Du !== 0 && ls2() && (e5 = Du);
        for (var t3 = Q(), n3 = null, r3 = Su; r3 !== null; ) {
          var i3 = r3.next, a3 = ke2(r3, t3);
          a3 === 0 ? (r3.next = null, n3 === null ? Su = i3 : n3.next = i3, i3 === null && (Cu = n3)) : (n3 = r3, (e5 !== 0 || a3 & 3) && (Tu = true)), r3 = i3;
        }
        hf !== 0 && hf !== 5 || Ee2(e5, false), Du !== 0 && (Du = 0);
      }
      function ke2(e5, t3) {
        for (var n3 = e5.suspendedLanes, r3 = e5.pingedLanes, i3 = e5.expirationTimes, a3 = e5.pendingLanes & -62914561; 0 < a3; ) {
          var o3 = 31 - Cl(a3), s3 = 1 << o3, c3 = i3[o3];
          c3 === -1 ? ((s3 & n3) === 0 || (s3 & r3) !== 0) && (i3[o3] = y2(s3, t3)) : c3 <= t3 && (e5.expiredLanes |= s3), a3 &= ~s3;
        }
        if (t3 = Gd, n3 = qd, n3 = g2(e5, e5 === t3 ? n3 : 0, e5.cancelPendingCommit !== null || e5.timeoutHandle !== $o2), r3 = e5.callbackNode, n3 === 0 || e5 === t3 && (Jd === 2 || Jd === 9) || e5.cancelPendingCommit !== null) return r3 !== null && r3 !== null && Al(r3), e5.callbackNode = null, e5.callbackPriority = 0;
        if (!(n3 & 3) || _2(e5, n3)) {
          if (t3 = n3 & -n3, t3 === e5.callbackPriority) return t3;
          switch (r3 !== null && Al(r3), O2(n3)) {
            case 2:
            case 8:
              n3 = Pl;
              break;
            case 32:
              n3 = Fl;
              break;
            case 268435456:
              n3 = Il;
              break;
            default:
              n3 = Fl;
          }
          return r3 = Ae2.bind(null, e5), n3 = kl(n3, r3), e5.callbackPriority = t3, e5.callbackNode = n3, t3;
        }
        return r3 !== null && r3 !== null && Al(r3), e5.callbackPriority = 2, e5.callbackNode = null, 2;
      }
      function Ae2(e5, t3) {
        if (hf !== 0 && hf !== 5) return e5.callbackNode = null, e5.callbackPriority = 0, null;
        var n3 = e5.callbackNode;
        if (za2() && e5.callbackNode !== n3) return null;
        var r3 = qd;
        return r3 = g2(e5, e5 === Gd ? r3 : 0, e5.cancelPendingCommit !== null || e5.timeoutHandle !== $o2), r3 === 0 ? null : (Y2(e5, r3, t3), ke2(e5, Q()), e5.callbackNode != null && e5.callbackNode === n3 ? Ae2.bind(null, e5) : null);
      }
      function je2(e5, t3) {
        if (za2()) return null;
        Y2(e5, t3, true);
      }
      function Me2() {
        Ss2 ? Cs2(function() {
          Wd & 6 ? kl(Nl, De2) : Oe2();
        }) : kl(Nl, De2);
      }
      function Ne2() {
        if (Du === 0) {
          var e5 = Au;
          e5 === 0 && (e5 = El, El <<= 1, !(El & 261888) && (El = 256)), Du = e5;
        }
        return Du;
      }
      function G2(e5, t3) {
        if (Ou === null) {
          var n3 = Ou = [];
          ku = 0, Au = Ne2(), ju = { status: `pending`, value: void 0, then: function(e6) {
            n3.push(e6);
          } };
        }
        return ku++, t3.then(K2, K2), t3;
      }
      function K2() {
        if (--ku === 0 && (xu = null, Ou !== null)) {
          ju !== null && (ju.status = `fulfilled`);
          var e5 = Ou;
          Ou = null, Au = 0, ju = null;
          for (var t3 = 0; t3 < e5.length; t3++) (0, e5[t3])();
        }
      }
      function Pe2(e5, t3) {
        var n3 = [], r3 = { status: `pending`, value: null, reason: null, then: function(e6) {
          n3.push(e6);
        } };
        return e5.then(function() {
          r3.status = `fulfilled`, r3.value = t3;
          for (var e6 = 0; e6 < n3.length; e6++) (0, n3[e6])(t3);
        }, function(e6) {
          for (r3.status = `rejected`, r3.reason = e6, e6 = 0; e6 < n3.length; e6++) (0, n3[e6])(void 0);
        }), r3;
      }
      function Fe2() {
        var e5 = Nu.current;
        return e5 === null ? Gd.pooledCache : e5;
      }
      function Ie2(e5, t3) {
        t3 === null ? p2(Nu, Nu.current) : p2(Nu, t3.pool);
      }
      function q2() {
        var e5 = Fe2();
        return e5 === null ? null : { parent: es2 ? bu._currentValue : bu._currentValue2, pool: e5 };
      }
      function Le2(e5, t3) {
        if (Hl(e5, t3)) return true;
        if (typeof e5 != `object` || !e5 || typeof t3 != `object` || !t3) return false;
        var n3 = Object.keys(e5), r3 = Object.keys(t3);
        if (n3.length !== r3.length) return false;
        for (r3 = 0; r3 < n3.length; r3++) {
          var i3 = n3[r3];
          if (!Wl.call(t3, i3) || !Hl(e5[i3], t3[i3])) return false;
        }
        return true;
      }
      function Re2(e5) {
        return e5 = e5.status, e5 === `fulfilled` || e5 === `rejected`;
      }
      function ze2(e5, t3, n3) {
        switch (n3 = e5[n3], n3 === void 0 ? e5.push(t3) : n3 !== t3 && (t3.then(we2, we2), t3 = n3), t3.status) {
          case `fulfilled`:
            return t3.value;
          case `rejected`:
            throw e5 = t3.reason, He2(e5), e5 === void 0 && !(`reason` in t3) ? Error(r2(600)) : e5;
          default:
            if (typeof t3.status == `string`) t3.then(we2, we2);
            else {
              if (e5 = Gd, e5 !== null && 100 < e5.shellSuspendCounter) throw Error(r2(482));
              e5 = t3, e5.status = `pending`, e5.then(function(e6) {
                if (t3.status === `pending`) {
                  var n4 = t3;
                  n4.status = `fulfilled`, n4.value = e6;
                }
              }, function(e6) {
                if (t3.status === `pending`) {
                  var n4 = t3;
                  n4.status = `rejected`, n4.reason = e6;
                }
              });
            }
            switch (t3.status) {
              case `fulfilled`:
                return t3.value;
              case `rejected`:
                throw e5 = t3.reason, He2(e5), e5;
            }
            throw Ru = t3, Pu;
        }
      }
      function Be2(e5) {
        try {
          var t3 = e5._init;
          return t3(e5._payload);
        } catch (e6) {
          throw typeof e6 == `object` && e6 && typeof e6.then == `function` ? (Ru = e6, Pu) : e6;
        }
      }
      function Ve2() {
        if (Ru === null) throw Error(r2(459));
        var e5 = Ru;
        return Ru = null, e5;
      }
      function He2(e5) {
        if (e5 === Pu || e5 === Iu) throw Error(r2(483));
      }
      function Ue2(e5) {
        var t3 = Bu;
        return Bu += 1, zu === null && (zu = []), ze2(zu, e5, t3);
      }
      function We2(e5, t3) {
        t3 = t3.props.ref, e5.ref = t3 === void 0 ? null : t3;
      }
      function Ge2(e5, t3) {
        throw t3.$$typeof === go2 ? Error(r2(525)) : (e5 = Object.prototype.toString.call(t3), Error(r2(31, e5 === `[object Object]` ? `object with keys {` + Object.keys(t3).join(`, `) + `}` : e5)));
      }
      function Ke2(e5) {
        function n3(t3, n4) {
          if (e5) {
            var r3 = t3.deletions;
            r3 === null ? (t3.deletions = [n4], t3.flags |= 16) : r3.push(n4);
          }
        }
        function i3(t3, r3) {
          if (!e5) return null;
          for (; r3 !== null; ) n3(t3, r3), r3 = r3.sibling;
          return null;
        }
        function a3(e6) {
          for (var t3 = /* @__PURE__ */ new Map(); e6 !== null; ) e6.key === null ? t3.set(e6.index, e6) : t3.set(e6.key, e6), e6 = e6.sibling;
          return t3;
        }
        function o3(e6, t3) {
          return e6 = Za2(e6, t3), e6.index = 0, e6.sibling = null, e6;
        }
        function s3(t3, n4, r3) {
          return t3.index = r3, e5 ? (r3 = t3.alternate, r3 === null ? (t3.flags |= 134217730, n4) : (r3 = r3.index, r3 < n4 ? (t3.flags |= 2, n4) : r3)) : (t3.flags |= 1048576, n4);
        }
        function c3(t3) {
          return e5 && t3.alternate === null && (t3.flags |= 134217730), t3;
        }
        function u3(e6, t3, n4, r3) {
          return t3 === null || t3.tag !== 6 ? (t3 = to2(n4, e6.mode, r3), t3.return = e6, t3) : (t3 = o3(t3, n4), t3.return = e6, t3);
        }
        function d3(e6, t3, n4, r3) {
          var i4 = n4.type;
          return i4 === yo2 ? (e6 = p3(e6, t3, n4.props.children, r3, n4.key), We2(e6, n4), e6) : t3 !== null && (t3.elementType === i4 || typeof i4 == `object` && i4 && i4.$$typeof === Oo2 && Be2(i4) === t3.type) ? (t3 = o3(t3, n4.props), We2(t3, n4), t3.return = e6, t3) : (t3 = $a2(n4.type, n4.key, n4.props, null, e6.mode, r3), We2(t3, n4), t3.return = e6, t3);
        }
        function f3(e6, t3, n4, r3) {
          return t3 === null || t3.tag !== 4 || t3.stateNode.containerInfo !== n4.containerInfo || t3.stateNode.implementation !== n4.implementation ? (t3 = ro2(n4, e6.mode, r3), t3.return = e6, t3) : (t3 = o3(t3, n4.children || []), t3.return = e6, t3);
        }
        function p3(e6, t3, n4, r3, i4) {
          return t3 === null || t3.tag !== 7 ? (t3 = eo2(n4, e6.mode, r3, i4), t3.return = e6, t3) : (t3 = o3(t3, n4), t3.return = e6, t3);
        }
        function m3(e6, t3, n4) {
          if (typeof t3 == `string` && t3 !== `` || typeof t3 == `number` || typeof t3 == `bigint`) return t3 = to2(`` + t3, e6.mode, n4), t3.return = e6, t3;
          if (typeof t3 == `object` && t3) {
            switch (t3.$$typeof) {
              case _o2:
                return n4 = $a2(t3.type, t3.key, t3.props, null, e6.mode, n4), We2(n4, t3), n4.return = e6, n4;
              case vo2:
                return t3 = ro2(t3, e6.mode, n4), t3.return = e6, t3;
              case Oo2:
                return t3 = Be2(t3), m3(e6, t3, n4);
            }
            if (Lo2(t3) || l2(t3)) return t3 = eo2(t3, e6.mode, n4, null), t3.return = e6, t3;
            if (typeof t3.then == `function`) return m3(e6, Ue2(t3), n4);
            if (t3.$$typeof === Co2) return m3(e6, ve2(e6, t3), n4);
            Ge2(e6, t3);
          }
          return null;
        }
        function h3(e6, t3, n4, r3) {
          var i4 = t3 === null ? null : t3.key;
          if (typeof n4 == `string` && n4 !== `` || typeof n4 == `number` || typeof n4 == `bigint`) return i4 === null ? u3(e6, t3, `` + n4, r3) : null;
          if (typeof n4 == `object` && n4) {
            switch (n4.$$typeof) {
              case _o2:
                return n4.key === i4 ? d3(e6, t3, n4, r3) : null;
              case vo2:
                return n4.key === i4 ? f3(e6, t3, n4, r3) : null;
              case Oo2:
                return n4 = Be2(n4), h3(e6, t3, n4, r3);
            }
            if (Lo2(n4) || l2(n4)) return i4 === null ? p3(e6, t3, n4, r3, null) : null;
            if (typeof n4.then == `function`) return h3(e6, t3, Ue2(n4), r3);
            if (n4.$$typeof === Co2) return h3(e6, t3, ve2(e6, n4), r3);
            Ge2(e6, n4);
          }
          return null;
        }
        function g3(e6, t3, n4, r3, i4) {
          if (typeof r3 == `string` && r3 !== `` || typeof r3 == `number` || typeof r3 == `bigint`) return e6 = e6.get(n4) || null, u3(t3, e6, `` + r3, i4);
          if (typeof r3 == `object` && r3) {
            switch (r3.$$typeof) {
              case _o2:
                return e6 = e6.get(r3.key === null ? n4 : r3.key) || null, d3(t3, e6, r3, i4);
              case vo2:
                return e6 = e6.get(r3.key === null ? n4 : r3.key) || null, f3(t3, e6, r3, i4);
              case Oo2:
                return r3 = Be2(r3), g3(e6, t3, n4, r3, i4);
            }
            if (Lo2(r3) || l2(r3)) return e6 = e6.get(n4) || null, p3(t3, e6, r3, i4, null);
            if (typeof r3.then == `function`) return g3(e6, t3, n4, Ue2(r3), i4);
            if (r3.$$typeof === Co2) return g3(e6, t3, n4, ve2(t3, r3), i4);
            Ge2(t3, r3);
          }
          return null;
        }
        function _3(t3, r3, o4, c4) {
          for (var l3 = null, u4 = null, d4 = r3, f4 = r3 = 0, p4 = null; d4 !== null && f4 < o4.length; f4++) {
            d4.index > f4 ? (p4 = d4, d4 = null) : p4 = d4.sibling;
            var _4 = h3(t3, d4, o4[f4], c4);
            if (_4 === null) {
              d4 === null && (d4 = p4);
              break;
            }
            e5 && d4 && _4.alternate === null && n3(t3, d4), r3 = s3(_4, r3, f4), u4 === null ? l3 = _4 : u4.sibling = _4, u4 = _4, d4 = p4;
          }
          if (f4 === o4.length) return i3(t3, d4), uu && R2(t3, f4), l3;
          if (d4 === null) {
            for (; f4 < o4.length; f4++) d4 = m3(t3, o4[f4], c4), d4 !== null && (r3 = s3(d4, r3, f4), u4 === null ? l3 = d4 : u4.sibling = d4, u4 = d4);
            return uu && R2(t3, f4), l3;
          }
          for (d4 = a3(d4); f4 < o4.length; f4++) p4 = g3(d4, t3, f4, o4[f4], c4), p4 !== null && (e5 && (_4 = p4.alternate, _4 !== null && d4.delete(_4.key === null ? f4 : _4.key)), r3 = s3(p4, r3, f4), u4 === null ? l3 = p4 : u4.sibling = p4, u4 = p4);
          return e5 && d4.forEach(function(e6) {
            return n3(t3, e6);
          }), uu && R2(t3, f4), l3;
        }
        function v3(t3, o4, c4, l3) {
          if (c4 == null) throw Error(r2(151));
          for (var u4 = null, d4 = null, f4 = o4, p4 = o4 = 0, _4 = null, v4 = c4.next(); f4 !== null && !v4.done; p4++, v4 = c4.next()) {
            f4.index > p4 ? (_4 = f4, f4 = null) : _4 = f4.sibling;
            var y4 = h3(t3, f4, v4.value, l3);
            if (y4 === null) {
              f4 === null && (f4 = _4);
              break;
            }
            e5 && f4 && y4.alternate === null && n3(t3, f4), o4 = s3(y4, o4, p4), d4 === null ? u4 = y4 : d4.sibling = y4, d4 = y4, f4 = _4;
          }
          if (v4.done) return i3(t3, f4), uu && R2(t3, p4), u4;
          if (f4 === null) {
            for (; !v4.done; p4++, v4 = c4.next()) v4 = m3(t3, v4.value, l3), v4 !== null && (o4 = s3(v4, o4, p4), d4 === null ? u4 = v4 : d4.sibling = v4, d4 = v4);
            return uu && R2(t3, p4), u4;
          }
          for (f4 = a3(f4); !v4.done; p4++, v4 = c4.next()) v4 = g3(f4, t3, p4, v4.value, l3), v4 !== null && (e5 && (_4 = v4.alternate, _4 !== null && f4.delete(_4.key === null ? p4 : _4.key)), o4 = s3(v4, o4, p4), d4 === null ? u4 = v4 : d4.sibling = v4, d4 = v4);
          return e5 && f4.forEach(function(e6) {
            return n3(t3, e6);
          }), uu && R2(t3, p4), u4;
        }
        function y3(e6, t3, a4, s4) {
          if (typeof a4 == `object` && a4 && a4.type === yo2 && a4.key === null && a4.props.ref === void 0 && (a4 = a4.props.children), typeof a4 == `object` && a4) {
            switch (a4.$$typeof) {
              case _o2:
                e: {
                  for (var u4 = a4.key; t3 !== null; ) {
                    if (t3.key === u4) {
                      if (u4 = a4.type, u4 === yo2) {
                        if (t3.tag === 7) {
                          i3(e6, t3.sibling), s4 = o3(t3, a4.props.children), We2(s4, a4), s4.return = e6, e6 = s4;
                          break e;
                        }
                      } else if (t3.elementType === u4 || typeof u4 == `object` && u4 && u4.$$typeof === Oo2 && Be2(u4) === t3.type) {
                        i3(e6, t3.sibling), s4 = o3(t3, a4.props), We2(s4, a4), s4.return = e6, e6 = s4;
                        break e;
                      }
                      i3(e6, t3);
                      break;
                    }
                    n3(e6, t3), t3 = t3.sibling;
                  }
                  a4.type === yo2 ? (s4 = eo2(a4.props.children, e6.mode, s4, a4.key), We2(s4, a4), s4.return = e6, e6 = s4) : (s4 = $a2(a4.type, a4.key, a4.props, null, e6.mode, s4), We2(s4, a4), s4.return = e6, e6 = s4);
                }
                return c3(e6);
              case vo2:
                e: {
                  for (u4 = a4.key; t3 !== null; ) {
                    if (t3.key === u4) {
                      if (t3.tag === 4 && t3.stateNode.containerInfo === a4.containerInfo && t3.stateNode.implementation === a4.implementation) {
                        i3(e6, t3.sibling), s4 = o3(t3, a4.children || []), s4.return = e6, e6 = s4;
                        break e;
                      }
                      i3(e6, t3);
                      break;
                    }
                    n3(e6, t3), t3 = t3.sibling;
                  }
                  s4 = ro2(a4, e6.mode, s4), s4.return = e6, e6 = s4;
                }
                return c3(e6);
              case Oo2:
                return a4 = Be2(a4), y3(e6, t3, a4, s4);
            }
            if (Lo2(a4)) return _3(e6, t3, a4, s4);
            if (l2(a4)) {
              if (u4 = l2(a4), typeof u4 != `function`) throw Error(r2(150));
              return a4 = u4.call(a4), v3(e6, t3, a4, s4);
            }
            if (typeof a4.then == `function`) return y3(e6, t3, Ue2(a4), s4);
            if (a4.$$typeof === Co2) return y3(e6, t3, ve2(e6, a4), s4);
            Ge2(e6, a4);
          }
          return typeof a4 == `string` && a4 !== `` || typeof a4 == `number` || typeof a4 == `bigint` ? (a4 = `` + a4, t3 !== null && t3.tag === 6 ? (i3(e6, t3.sibling), s4 = o3(t3, a4), s4.return = e6, e6 = s4) : (i3(e6, t3), s4 = to2(a4, e6.mode, s4), s4.return = e6, e6 = s4), c3(e6)) : i3(e6, t3);
        }
        return function(e6, n4, r3, i4) {
          try {
            Bu = 0;
            var a4 = y3(e6, n4, r3, i4);
            return zu = null, a4;
          } catch (n5) {
            if (n5 === Pu || n5 === Iu) throw n5;
            var o4 = t2(29, n5, null, e6.mode);
            return o4.lanes = i4, o4.return = e6, o4;
          }
        };
      }
      function qe2() {
        for (var e5 = Wu, t3 = Gu = Wu = 0; t3 < e5; ) {
          var n3 = Uu[t3];
          Uu[t3++] = null;
          var r3 = Uu[t3];
          Uu[t3++] = null;
          var i3 = Uu[t3];
          Uu[t3++] = null;
          var a3 = Uu[t3];
          if (Uu[t3++] = null, r3 !== null && i3 !== null) {
            var o3 = r3.pending;
            o3 === null ? i3.next = i3 : (i3.next = o3.next, o3.next = i3), r3.pending = i3;
          }
          a3 !== 0 && Ze2(n3, i3, a3);
        }
      }
      function Je2(e5, t3, n3, r3) {
        Uu[Wu++] = e5, Uu[Wu++] = t3, Uu[Wu++] = n3, Uu[Wu++] = r3, Gu |= r3, e5.lanes |= r3, e5 = e5.alternate, e5 !== null && (e5.lanes |= r3);
      }
      function Ye2(e5, t3, n3, r3) {
        return Je2(e5, t3, n3, r3), Qe2(e5);
      }
      function Xe2(e5, t3) {
        return Je2(e5, null, null, t3), Qe2(e5);
      }
      function Ze2(e5, t3, n3) {
        e5.lanes |= n3;
        var r3 = e5.alternate;
        r3 !== null && (r3.lanes |= n3);
        for (var i3 = false, a3 = e5.return; a3 !== null; ) a3.childLanes |= n3, r3 = a3.alternate, r3 !== null && (r3.childLanes |= n3), a3.tag === 22 && (e5 = a3.stateNode, e5 === null || e5._visibility & 1 || (i3 = true)), e5 = a3, a3 = a3.return;
        return e5.tag === 3 ? (a3 = e5.stateNode, i3 && t3 !== null && (i3 = 31 - Cl(n3), e5 = a3.hiddenUpdates, r3 = e5[i3], r3 === null ? e5[i3] = [t3] : r3.push(t3), t3.lane = n3 | 536870912), a3) : null;
      }
      function Qe2(e5) {
        if (50 < Tf) throw Tf = 0, Ef = null, Error(r2(185));
        for (var t3 = e5.return; t3 !== null; ) e5 = t3, t3 = e5.return;
        return e5.tag === 3 ? e5.stateNode : null;
      }
      function $e2(e5) {
        e5.updateQueue = { baseState: e5.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
      }
      function et2(e5, t3) {
        e5 = e5.updateQueue, t3.updateQueue === e5 && (t3.updateQueue = { baseState: e5.baseState, firstBaseUpdate: e5.firstBaseUpdate, lastBaseUpdate: e5.lastBaseUpdate, shared: e5.shared, callbacks: null });
      }
      function tt2(e5) {
        return { lane: e5, tag: 0, payload: null, callback: null, next: null };
      }
      function nt2(e5, t3, n3) {
        var r3 = e5.updateQueue;
        if (r3 === null) return null;
        if (r3 = r3.shared, Wd & 2) {
          var i3 = r3.pending;
          return i3 === null ? t3.next = t3 : (t3.next = i3.next, i3.next = t3), r3.pending = t3, t3 = Qe2(e5), Ze2(e5, null, n3), t3;
        }
        return Je2(e5, r3, t3, n3), Qe2(e5);
      }
      function rt2(e5, t3, n3) {
        if (t3 = t3.updateQueue, t3 !== null && (t3 = t3.shared, n3 & 4194048)) {
          var r3 = t3.lanes;
          r3 &= e5.pendingLanes, n3 |= r3, t3.lanes = n3, T2(e5, n3);
        }
      }
      function it2(e5, t3) {
        var n3 = e5.updateQueue, r3 = e5.alternate;
        if (r3 !== null && (r3 = r3.updateQueue, n3 === r3)) {
          var i3 = null, a3 = null;
          if (n3 = n3.firstBaseUpdate, n3 !== null) {
            do {
              var o3 = { lane: n3.lane, tag: n3.tag, payload: n3.payload, callback: null, next: null };
              a3 === null ? i3 = a3 = o3 : a3 = a3.next = o3, n3 = n3.next;
            } while (n3 !== null);
            a3 === null ? i3 = a3 = t3 : a3 = a3.next = t3;
          } else i3 = a3 = t3;
          n3 = { baseState: r3.baseState, firstBaseUpdate: i3, lastBaseUpdate: a3, shared: r3.shared, callbacks: r3.callbacks }, e5.updateQueue = n3;
        } else e5 = n3.lastBaseUpdate, e5 === null ? n3.firstBaseUpdate = t3 : e5.next = t3, n3.lastBaseUpdate = t3;
      }
      function at2() {
        if (qu) {
          var e5 = ju;
          if (e5 !== null) throw e5;
        }
      }
      function ot2(e5, t3, n3, r3) {
        qu = false;
        var i3 = e5.updateQueue;
        Ku = false;
        var a3 = i3.firstBaseUpdate, o3 = i3.lastBaseUpdate, s3 = i3.shared.pending;
        if (s3 !== null) {
          i3.shared.pending = null;
          var c3 = s3, l3 = c3.next;
          c3.next = null, o3 === null ? a3 = l3 : o3.next = l3, o3 = c3;
          var u3 = e5.alternate;
          u3 !== null && (u3 = u3.updateQueue, s3 = u3.lastBaseUpdate, s3 !== o3 && (s3 === null ? u3.firstBaseUpdate = l3 : s3.next = l3, u3.lastBaseUpdate = c3));
        }
        if (a3 !== null) {
          var d3 = i3.baseState;
          o3 = 0, u3 = l3 = c3 = null, s3 = a3;
          do {
            var f3 = s3.lane & -536870913, p3 = f3 !== s3.lane;
            if (p3 ? (qd & f3) === f3 : (r3 & f3) === f3) {
              f3 !== 0 && f3 === Au && (qu = true), u3 !== null && (u3 = u3.next = { lane: 0, tag: s3.tag, payload: s3.payload, callback: null, next: null });
              e: {
                var m3 = e5, h3 = s3;
                f3 = t3;
                var g3 = n3;
                switch (h3.tag) {
                  case 1:
                    if (m3 = h3.payload, typeof m3 == `function`) {
                      d3 = m3.call(g3, d3, f3);
                      break e;
                    }
                    d3 = m3;
                    break e;
                  case 3:
                    m3.flags = m3.flags & -65537 | 128;
                  case 0:
                    if (m3 = h3.payload, f3 = typeof m3 == `function` ? m3.call(g3, d3, f3) : m3, f3 == null) break e;
                    d3 = ho2({}, d3, f3);
                    break e;
                  case 2:
                    Ku = true;
                }
              }
              f3 = s3.callback, f3 !== null && (e5.flags |= 64, p3 && (e5.flags |= 8192), p3 = i3.callbacks, p3 === null ? i3.callbacks = [f3] : p3.push(f3));
            } else p3 = { lane: f3, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null }, u3 === null ? (l3 = u3 = p3, c3 = d3) : u3 = u3.next = p3, o3 |= f3;
            if (s3 = s3.next, s3 === null) {
              if (s3 = i3.shared.pending, s3 === null) break;
              p3 = s3, s3 = p3.next, p3.next = null, i3.lastBaseUpdate = p3, i3.shared.pending = null;
            }
          } while (1);
          u3 === null && (c3 = d3), i3.baseState = c3, i3.firstBaseUpdate = l3, i3.lastBaseUpdate = u3, a3 === null && (i3.shared.lanes = 0), tf |= o3, e5.lanes = o3, e5.memoizedState = d3;
        }
      }
      function st2(e5, t3) {
        if (typeof e5 != `function`) throw Error(r2(191, e5));
        e5.call(t3);
      }
      function ct2(e5, t3) {
        var n3 = e5.callbacks;
        if (n3 !== null) for (e5.callbacks = null, e5 = 0; e5 < n3.length; e5++) st2(n3[e5], t3);
      }
      function lt2(e5, t3) {
        e5 = $d, p2(Yu, e5), p2(Ju, t3), $d = e5 | t3.baseLanes;
      }
      function ut2() {
        p2(Yu, $d), p2(Ju, Ju.current);
      }
      function dt2() {
        $d = Yu.current, f2(Ju), f2(Yu);
      }
      function ft2(e5) {
        var t3 = e5.alternate;
        p2(Qu, Qu.current & 1), p2(Xu, e5), Zu === null && (t3 === null || Ju.current !== null || t3.memoizedState !== null) && (Zu = e5);
      }
      function pt2(e5) {
        p2(Qu, Qu.current), p2(Xu, e5), Zu === null && (Zu = e5);
      }
      function mt2(e5) {
        e5.tag === 22 ? (p2(Qu, Qu.current), p2(Xu, e5), Zu === null && (Zu = e5)) : ht2();
      }
      function ht2() {
        p2(Qu, Qu.current), p2(Xu, Xu.current);
      }
      function gt2(e5) {
        f2(Xu), Zu === e5 && (Zu = null), f2(Qu);
      }
      function _t2(e5, t3) {
        p2(Xu, Xu.current), p2(Qu, t3);
      }
      function vt2(e5) {
        f2(Qu), f2(Xu), Zu === e5 && (Zu = null);
      }
      function yt2(e5) {
        for (var t3 = e5; t3 !== null; ) {
          if (t3.tag === 13) {
            var n3 = t3.memoizedState;
            if (n3 !== null && (n3 = n3.dehydrated, n3 === null || vc2(n3) || yc2(n3))) return t3;
          } else if (t3.tag === 19 && t3.memoizedProps.revealOrder !== `independent`) {
            if (t3.flags & 128) return t3;
          } else if (t3.child !== null) {
            t3.child.return = t3, t3 = t3.child;
            continue;
          }
          if (t3 === e5) break;
          for (; t3.sibling === null; ) {
            if (t3.return === null || t3.return === e5) return null;
            t3 = t3.return;
          }
          t3.sibling.return = t3.return, t3 = t3.sibling;
        }
        return null;
      }
      function bt2() {
        throw Error(r2(321));
      }
      function xt2(e5, t3) {
        if (t3 === null) return false;
        for (var n3 = 0; n3 < t3.length && n3 < e5.length; n3++) if (!Hl(e5[n3], t3[n3])) return false;
        return true;
      }
      function St2(e5, t3, n3, r3, i3, a3) {
        return $u = a3, ed = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, Z2.H = e5 === null || e5.memoizedState === null ? dd : fd, ad = false, a3 = n3(r3, i3), ad = false, id && (a3 = wt2(t3, n3, r3, i3)), Ct2(e5), a3;
      }
      function Ct2(e5) {
        Z2.H = ud;
        var t3 = td !== null && td.next !== null;
        if ($u = 0, nd = td = ed = null, rd = false, sd = 0, cd = null, t3) throw Error(r2(300));
        e5 === null || gd || (e5 = e5.dependencies, e5 !== null && he2(e5) && (gd = true));
      }
      function wt2(e5, t3, n3, i3) {
        ed = e5;
        var a3 = 0;
        do {
          if (id && (cd = null), sd = 0, id = false, 25 <= a3) throw Error(r2(301));
          if (a3 += 1, nd = td = null, e5.updateQueue != null) {
            var o3 = e5.updateQueue;
            o3.lastEffect = null, o3.events = null, o3.stores = null, o3.memoCache != null && (o3.memoCache.index = 0);
          }
          Z2.H = pd, o3 = t3(n3, i3);
        } while (id);
        return o3;
      }
      function Et2() {
        var e5 = Z2.H, t3 = e5.useState()[0];
        return t3 = typeof t3.then == `function` ? Nt2(t3) : t3, e5 = e5.useState()[0], (td === null ? null : td.memoizedState) !== e5 && (ed.flags |= 1024), t3;
      }
      function Dt2() {
        var e5 = od !== 0;
        return od = 0, e5;
      }
      function Ot2(e5, t3, n3) {
        t3.updateQueue = e5.updateQueue, t3.flags &= -2053, e5.lanes &= ~n3;
      }
      function kt2(e5) {
        if (rd) {
          for (e5 = e5.memoizedState; e5 !== null; ) {
            var t3 = e5.queue;
            t3 !== null && (t3.pending = null), e5 = e5.next;
          }
          rd = false;
        }
        $u = 0, nd = td = ed = null, id = false, sd = od = 0, cd = null;
      }
      function At2() {
        var e5 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return nd === null ? ed.memoizedState = nd = e5 : nd = nd.next = e5, nd;
      }
      function jt2() {
        if (td === null) {
          var e5 = ed.alternate;
          e5 = e5 === null ? null : e5.memoizedState;
        } else e5 = td.next;
        var t3 = nd === null ? ed.memoizedState : nd.next;
        if (t3 !== null) nd = t3, td = e5;
        else {
          if (e5 === null) throw ed.alternate === null ? Error(r2(467)) : Error(r2(310));
          td = e5, e5 = { memoizedState: td.memoizedState, baseState: td.baseState, baseQueue: td.baseQueue, queue: td.queue, next: null }, nd === null ? ed.memoizedState = nd = e5 : nd = nd.next = e5;
        }
        return nd;
      }
      function Mt2() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }
      function Nt2(e5) {
        var t3 = sd;
        return sd += 1, cd === null && (cd = []), e5 = ze2(cd, e5, t3), t3 = ed, (nd === null ? t3.memoizedState : nd.next) === null && (t3 = t3.alternate, Z2.H = t3 === null || t3.memoizedState === null ? dd : fd), e5;
      }
      function Pt2(e5) {
        if (typeof e5 == `object` && e5) {
          if (typeof e5.then == `function`) return Nt2(e5);
          if (e5.$$typeof === No2) return;
          if (e5.$$typeof === Co2) return _e2(e5);
        }
        throw Error(r2(438, String(e5)));
      }
      function Ft2(e5) {
        var t3 = null, n3 = ed.updateQueue;
        if (n3 !== null && (t3 = n3.memoCache), t3 == null) {
          var r3 = ed.alternate;
          r3 !== null && (r3 = r3.updateQueue, r3 !== null && (r3 = r3.memoCache, r3 != null && (t3 = { data: r3.data.map(function(e6) {
            return e6.slice();
          }), index: 0 })));
        }
        if (t3 ?? (t3 = { data: [], index: 0 }), n3 === null && (n3 = Mt2(), ed.updateQueue = n3), n3.memoCache = t3, n3 = t3.data[t3.index], n3 === void 0) for (n3 = t3.data[t3.index] = Array(e5), r3 = 0; r3 < e5; r3++) n3[r3] = jo2;
        return t3.index++, n3;
      }
      function It2(e5, t3) {
        return typeof t3 == `function` ? t3(e5) : t3;
      }
      function Lt2(e5) {
        return Rt2(jt2(), td, e5);
      }
      function Rt2(e5, t3, n3) {
        var i3 = e5.queue;
        if (i3 === null) throw Error(r2(311));
        i3.lastRenderedReducer = n3;
        var a3 = e5.baseQueue, o3 = i3.pending;
        if (o3 !== null) {
          if (a3 !== null) {
            var s3 = a3.next;
            a3.next = o3.next, o3.next = s3;
          }
          t3.baseQueue = a3 = o3, i3.pending = null;
        }
        if (o3 = e5.baseState, a3 === null) e5.memoizedState = o3;
        else {
          t3 = a3.next;
          var c3 = s3 = null, l3 = null, u3 = t3, d3 = false;
          do {
            var f3 = u3.lane & -536870913;
            if (f3 === u3.lane ? ($u & f3) === f3 : (qd & f3) === f3) {
              var p3 = u3.revertLane;
              if (p3 === 0) l3 !== null && (l3 = l3.next = { lane: 0, revertLane: 0, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }), f3 === Au && (d3 = true);
              else if (($u & p3) === p3) {
                u3 = u3.next, p3 === Au && (d3 = true);
                continue;
              } else f3 = { lane: 0, revertLane: u3.revertLane, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l3 === null ? (c3 = l3 = f3, s3 = o3) : l3 = l3.next = f3, ed.lanes |= p3, tf |= p3;
              f3 = u3.action, ad && n3(o3, f3), o3 = u3.hasEagerState ? u3.eagerState : n3(o3, f3);
            } else p3 = { lane: f3, revertLane: u3.revertLane, gesture: u3.gesture, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l3 === null ? (c3 = l3 = p3, s3 = o3) : l3 = l3.next = p3, ed.lanes |= f3, tf |= f3;
            u3 = u3.next;
          } while (u3 !== null && u3 !== t3);
          if (l3 === null ? s3 = o3 : l3.next = c3, !Hl(o3, e5.memoizedState) && (gd = true, d3 && (n3 = ju, n3 !== null))) throw n3;
          e5.memoizedState = o3, e5.baseState = s3, e5.baseQueue = l3, i3.lastRenderedState = o3;
        }
        return a3 === null && (i3.lanes = 0), [e5.memoizedState, i3.dispatch];
      }
      function zt2(e5) {
        var t3 = jt2(), n3 = t3.queue;
        if (n3 === null) throw Error(r2(311));
        n3.lastRenderedReducer = e5;
        var i3 = n3.dispatch, a3 = n3.pending, o3 = t3.memoizedState;
        if (a3 !== null) {
          n3.pending = null;
          var s3 = a3 = a3.next;
          do
            o3 = e5(o3, s3.action), s3 = s3.next;
          while (s3 !== a3);
          Hl(o3, t3.memoizedState) || (gd = true), t3.memoizedState = o3, t3.baseQueue === null && (t3.baseState = o3), n3.lastRenderedState = o3;
        }
        return [o3, i3];
      }
      function Bt2(e5, t3, n3) {
        var i3 = ed, a3 = jt2(), o3 = uu;
        if (o3) {
          if (n3 === void 0) throw Error(r2(407));
          n3 = n3();
        } else n3 = t3();
        var s3 = !Hl((td || a3).memoizedState, n3);
        if (s3 && (a3.memoizedState = n3, gd = true), a3 = a3.queue, fn2(Ut2.bind(null, i3, a3, e5), [e5]), e5 = a3.getSnapshot !== t3 || s3 || nd !== null && !!(nd.memoizedState.tag & 1), sn2(e5 ? 9 : 8, { destroy: void 0 }, Ht2.bind(null, i3, a3, n3, t3), null), e5) {
          if (i3.flags |= 2048, Gd === null) throw Error(r2(349));
          o3 || $u & 127 || Vt2(i3, t3, n3);
        }
        return n3;
      }
      function Vt2(e5, t3, n3) {
        e5.flags |= 16384, e5 = { getSnapshot: t3, value: n3 }, t3 = ed.updateQueue, t3 === null ? (t3 = Mt2(), ed.updateQueue = t3, t3.stores = [e5]) : (n3 = t3.stores, n3 === null ? t3.stores = [e5] : n3.push(e5));
      }
      function Ht2(e5, t3, n3, r3) {
        t3.value = n3, t3.getSnapshot = r3, Wt2(t3) && Gt2(e5);
      }
      function Ut2(e5, t3, n3) {
        return n3(function() {
          Wt2(t3) && Gt2(e5);
        });
      }
      function Wt2(e5) {
        var t3 = e5.getSnapshot;
        e5 = e5.value;
        try {
          var n3 = t3();
          return !Hl(e5, n3);
        } catch {
          return true;
        }
      }
      function Gt2(e5) {
        var t3 = Xe2(e5, 2);
        t3 !== null && da2(t3, e5, 2);
      }
      function Kt2(e5) {
        var t3 = At2();
        if (typeof e5 == `function`) {
          var n3 = e5;
          if (e5 = n3(), ad) {
            k2(true);
            try {
              n3();
            } finally {
              k2(false);
            }
          }
        }
        return t3.memoizedState = t3.baseState = e5, t3.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: It2, lastRenderedState: e5 }, t3;
      }
      function qt2(e5, t3, n3, r3) {
        return e5.baseState = n3, Rt2(e5, td, typeof r3 == `function` ? r3 : It2);
      }
      function Jt2(e5, t3, n3, i3, a3) {
        if (Pn2(e5)) throw Error(r2(485));
        if (e5 = t3.action, e5 !== null) {
          var o3 = { payload: a3, action: e5, next: null, isTransition: true, status: `pending`, value: null, reason: null, listeners: [], then: function(e6) {
            o3.listeners.push(e6);
          } };
          Z2.T === null ? o3.isTransition = false : n3(true), i3(o3), n3 = t3.pending, n3 === null ? (o3.next = t3.pending = o3, Yt2(t3, o3)) : (o3.next = n3.next, t3.pending = n3.next = o3);
        }
      }
      function Yt2(e5, t3) {
        var n3 = t3.action, r3 = t3.payload, i3 = e5.state;
        if (t3.isTransition) {
          var a3 = Z2.T, o3 = {};
          o3.types = a3 === null ? null : a3.types, Z2.T = o3;
          try {
            var s3 = n3(i3, r3), c3 = Z2.S;
            c3 !== null && c3(o3, s3), Xt2(e5, t3, s3);
          } catch (n4) {
            Qt2(e5, t3, n4);
          } finally {
            a3 !== null && o3.types !== null && (a3.types = o3.types), Z2.T = a3;
          }
        } else try {
          a3 = n3(i3, r3), Xt2(e5, t3, a3);
        } catch (n4) {
          Qt2(e5, t3, n4);
        }
      }
      function Xt2(e5, t3, n3) {
        typeof n3 == `object` && n3 && typeof n3.then == `function` ? n3.then(function(n4) {
          Zt2(e5, t3, n4);
        }, function(n4) {
          return Qt2(e5, t3, n4);
        }) : Zt2(e5, t3, n3);
      }
      function Zt2(e5, t3, n3) {
        t3.status = `fulfilled`, t3.value = n3, $t2(t3), e5.state = n3, t3 = e5.pending, t3 !== null && (n3 = t3.next, n3 === t3 ? e5.pending = null : (n3 = n3.next, t3.next = n3, Yt2(e5, n3)));
      }
      function Qt2(e5, t3, n3) {
        var r3 = e5.pending;
        if (e5.pending = null, r3 !== null) {
          r3 = r3.next;
          do
            t3.status = `rejected`, t3.reason = n3, $t2(t3), t3 = t3.next;
          while (t3 !== r3);
        }
        e5.action = null;
      }
      function $t2(e5) {
        e5 = e5.listeners;
        for (var t3 = 0; t3 < e5.length; t3++) (0, e5[t3])();
      }
      function en2(e5, t3) {
        return t3;
      }
      function tn2(e5, t3) {
        if (uu) {
          var n3 = Gd.formState;
          if (n3 !== null) {
            e: {
              var r3 = ed;
              if (uu) {
                if (lu) {
                  var i3 = Sc2(lu, fu);
                  if (i3) {
                    lu = wc2(i3), r3 = Cc2(i3);
                    break e;
                  }
                }
                U2(r3);
              }
              r3 = false;
            }
            r3 && (t3 = n3[0]);
          }
        }
        n3 = At2(), n3.memoizedState = n3.baseState = t3, r3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: en2, lastRenderedState: t3 }, n3.queue = r3, n3 = jn2.bind(null, ed, r3), r3.dispatch = n3, r3 = Kt2(false);
        var a3 = Nn2.bind(null, ed, false, r3.queue);
        return r3 = At2(), i3 = { state: t3, dispatch: null, action: e5, pending: null }, r3.queue = i3, n3 = Jt2.bind(null, ed, i3, a3, n3), i3.dispatch = n3, r3.memoizedState = e5, [t3, n3, false];
      }
      function nn2(e5) {
        return rn2(jt2(), td, e5);
      }
      function rn2(e5, t3, n3) {
        if (t3 = Rt2(e5, t3, en2)[0], e5 = Lt2(It2)[0], typeof t3 == `object` && t3 && typeof t3.then == `function`) try {
          var r3 = Nt2(t3);
        } catch (e6) {
          throw e6 === Pu ? Iu : e6;
        }
        else r3 = t3;
        t3 = jt2();
        var i3 = t3.queue, a3 = i3.dispatch;
        return n3 !== t3.memoizedState && (ed.flags |= 2048, sn2(9, { destroy: void 0 }, an2.bind(null, i3, n3), null)), [r3, a3, e5];
      }
      function an2(e5, t3) {
        e5.action = t3;
      }
      function on2(e5) {
        var t3 = jt2(), n3 = td;
        if (n3 !== null) return rn2(t3, n3, e5);
        jt2(), t3 = t3.memoizedState, n3 = jt2();
        var r3 = n3.queue.dispatch;
        return n3.memoizedState = e5, [t3, r3, false];
      }
      function sn2(e5, t3, n3, r3) {
        return e5 = { tag: e5, create: n3, deps: r3, inst: t3, next: null }, t3 = ed.updateQueue, t3 === null && (t3 = Mt2(), ed.updateQueue = t3), n3 = t3.lastEffect, n3 === null ? t3.lastEffect = e5.next = e5 : (r3 = n3.next, n3.next = e5, e5.next = r3, t3.lastEffect = e5), e5;
      }
      function cn2() {
        return jt2().memoizedState;
      }
      function ln2(e5, t3, n3, r3) {
        var i3 = At2();
        ed.flags |= e5, i3.memoizedState = sn2(1 | t3, { destroy: void 0 }, n3, r3 === void 0 ? null : r3);
      }
      function un2(e5, t3, n3, r3) {
        var i3 = jt2();
        r3 = r3 === void 0 ? null : r3;
        var a3 = i3.memoizedState.inst;
        td !== null && r3 !== null && xt2(r3, td.memoizedState.deps) ? i3.memoizedState = sn2(t3, a3, n3, r3) : (ed.flags |= e5, i3.memoizedState = sn2(1 | t3, a3, n3, r3));
      }
      function dn2(e5, t3) {
        ln2(8390656, 8, e5, t3);
      }
      function fn2(e5, t3) {
        un2(2048, 8, e5, t3);
      }
      function pn2(e5) {
        ed.flags |= 4;
        var t3 = ed.updateQueue;
        if (t3 === null) t3 = Mt2(), ed.updateQueue = t3, t3.events = [e5];
        else {
          var n3 = t3.events;
          n3 === null ? t3.events = [e5] : n3.push(e5);
        }
      }
      function mn2(e5) {
        var t3 = jt2().memoizedState;
        return pn2({ ref: t3, nextImpl: e5 }), function() {
          if (Wd & 2) throw Error(r2(440));
          return t3.impl.apply(void 0, arguments);
        };
      }
      function hn2(e5, t3) {
        return un2(4, 2, e5, t3);
      }
      function gn2(e5, t3) {
        return un2(4, 4, e5, t3);
      }
      function _n2(e5, t3) {
        if (typeof t3 == `function`) {
          e5 = e5();
          var n3 = t3(e5);
          return function() {
            typeof n3 == `function` ? n3() : t3(null);
          };
        }
        if (t3 != null) return e5 = e5(), t3.current = e5, function() {
          t3.current = null;
        };
      }
      function vn2(e5, t3, n3) {
        n3 = n3 == null ? null : n3.concat([e5]), un2(4, 4, _n2.bind(null, t3, e5), n3);
      }
      function yn2() {
      }
      function bn2(e5, t3) {
        var n3 = jt2();
        t3 = t3 === void 0 ? null : t3;
        var r3 = n3.memoizedState;
        return t3 !== null && xt2(t3, r3[1]) ? r3[0] : (n3.memoizedState = [e5, t3], e5);
      }
      function xn2(e5, t3) {
        var n3 = jt2();
        t3 = t3 === void 0 ? null : t3;
        var r3 = n3.memoizedState;
        if (t3 !== null && xt2(t3, r3[1])) return r3[0];
        if (r3 = e5(), ad) {
          k2(true);
          try {
            e5();
          } finally {
            k2(false);
          }
        }
        return n3.memoizedState = [r3, t3], r3;
      }
      function Sn2(e5, t3, n3) {
        return n3 === void 0 || $u & 1073741824 && !(qd & 261930) ? e5.memoizedState = t3 : (e5.memoizedState = n3, e5 = la2(), ed.lanes |= e5, tf |= e5, n3);
      }
      function Cn2(e5, t3, n3, r3) {
        return Hl(n3, t3) ? n3 : Ju.current === null ? !($u & 106) || $u & 1073741824 && !(qd & 261930) ? (gd = true, e5.memoizedState = n3) : (e5 = la2(), ed.lanes |= e5, tf |= e5, t3) : (e5 = Sn2(e5, n3, r3), Hl(e5, t3) || (gd = true), e5);
      }
      function wn2(e5, t3, n3, r3, i3) {
        var a3 = ss2();
        os2(a3 !== 0 && 8 > a3 ? a3 : 8);
        var o3 = Z2.T, s3 = {};
        s3.types = o3 === null ? null : o3.types, Z2.T = s3, Nn2(e5, false, t3, n3);
        try {
          var c3 = i3(), l3 = Z2.S;
          l3 !== null && l3(s3, c3), typeof c3 == `object` && c3 && typeof c3.then == `function` ? Mn2(e5, t3, Pe2(c3, r3), ca2(e5)) : Mn2(e5, t3, r3, ca2(e5));
        } catch (n4) {
          Mn2(e5, t3, { then: function() {
          }, status: `rejected`, reason: n4 }, ca2());
        } finally {
          os2(a3), o3 !== null && s3.types !== null && (o3.types = s3.types), Z2.T = o3;
        }
      }
      function Tn2(e5) {
        var t3 = e5.memoizedState;
        if (t3 !== null) return t3;
        t3 = { memoizedState: ys2, baseState: ys2, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: It2, lastRenderedState: ys2 }, next: null };
        var n3 = {};
        return t3.next = { memoizedState: n3, baseState: n3, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: It2, lastRenderedState: n3 }, next: null }, e5.memoizedState = t3, e5 = e5.alternate, e5 !== null && (e5.memoizedState = t3), t3;
      }
      function En2() {
        return _e2(bs2);
      }
      function Dn2() {
        return jt2().memoizedState;
      }
      function On2() {
        return jt2().memoizedState;
      }
      function kn2(e5) {
        for (var t3 = e5.return; t3 !== null; ) {
          switch (t3.tag) {
            case 24:
            case 3:
              var n3 = ca2();
              e5 = tt2(n3);
              var r3 = nt2(t3, e5, n3);
              r3 !== null && (da2(r3, t3, n3), rt2(r3, t3, n3)), t3 = { cache: be2() }, e5.payload = t3;
              return;
          }
          t3 = t3.return;
        }
      }
      function An2(e5, t3, n3) {
        var r3 = ca2();
        n3 = { lane: r3, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null }, Pn2(e5) ? Fn2(t3, n3) : (n3 = Ye2(e5, t3, n3, r3), n3 !== null && (da2(n3, e5, r3), In2(n3, t3, r3)));
      }
      function jn2(e5, t3, n3) {
        Mn2(e5, t3, n3, ca2());
      }
      function Mn2(e5, t3, n3, r3) {
        var i3 = { lane: r3, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null };
        if (Pn2(e5)) Fn2(t3, i3);
        else {
          var a3 = e5.alternate;
          if (e5.lanes === 0 && (a3 === null || a3.lanes === 0) && (a3 = t3.lastRenderedReducer, a3 !== null)) try {
            var o3 = t3.lastRenderedState, s3 = a3(o3, n3);
            if (i3.hasEagerState = true, i3.eagerState = s3, Hl(s3, o3)) return Je2(e5, t3, i3, 0), Gd === null && qe2(), false;
          } catch {
          }
          if (n3 = Ye2(e5, t3, i3, r3), n3 !== null) return da2(n3, e5, r3), In2(n3, t3, r3), true;
        }
        return false;
      }
      function Nn2(e5, t3, n3, i3) {
        if (i3 = { lane: 2, revertLane: Ne2(), gesture: null, action: i3, hasEagerState: false, eagerState: null, next: null }, Pn2(e5)) {
          if (t3) throw Error(r2(479));
        } else t3 = Ye2(e5, n3, i3, 2), t3 !== null && da2(t3, e5, 2);
      }
      function Pn2(e5) {
        var t3 = e5.alternate;
        return e5 === ed || t3 !== null && t3 === ed;
      }
      function Fn2(e5, t3) {
        id = rd = true;
        var n3 = e5.pending;
        n3 === null ? t3.next = t3 : (t3.next = n3.next, n3.next = t3), e5.pending = t3;
      }
      function In2(e5, t3, n3) {
        if (n3 & 4194048) {
          var r3 = t3.lanes;
          r3 &= e5.pendingLanes, n3 |= r3, t3.lanes = n3, T2(e5, n3);
        }
      }
      function Ln2(e5, t3, n3, r3) {
        t3 = e5.memoizedState, n3 = n3(r3, t3), n3 = n3 == null ? t3 : ho2({}, t3, n3), e5.memoizedState = n3, e5.lanes === 0 && (e5.updateQueue.baseState = n3);
      }
      function Rn2(e5, t3, n3, r3, i3, a3, o3) {
        return e5 = e5.stateNode, typeof e5.shouldComponentUpdate == `function` ? e5.shouldComponentUpdate(r3, a3, o3) : t3.prototype && t3.prototype.isPureReactComponent ? !Le2(n3, r3) || !Le2(i3, a3) : true;
      }
      function zn2(e5, t3, n3, r3) {
        e5 = t3.state, typeof t3.componentWillReceiveProps == `function` && t3.componentWillReceiveProps(n3, r3), typeof t3.UNSAFE_componentWillReceiveProps == `function` && t3.UNSAFE_componentWillReceiveProps(n3, r3), t3.state !== e5 && md.enqueueReplaceState(t3, t3.state, null);
      }
      function Bn2(e5, t3) {
        var n3 = t3;
        if (`ref` in t3) for (var r3 in n3 = {}, t3) r3 !== `ref` && (n3[r3] = t3[r3]);
        if (e5 = e5.defaultProps) for (var i3 in n3 === t3 && (n3 = ho2({}, n3)), e5) n3[i3] === void 0 && (n3[i3] = e5[i3]);
        return n3;
      }
      function Vn2(e5, t3) {
        try {
          var n3 = e5.onUncaughtError;
          n3(t3.value, { componentStack: t3.stack });
        } catch (e6) {
          setTimeout(function() {
            throw e6;
          });
        }
      }
      function Hn2(e5, t3, n3) {
        try {
          var r3 = e5.onCaughtError;
          r3(n3.value, { componentStack: n3.stack, errorBoundary: t3.tag === 1 ? t3.stateNode : null });
        } catch (e6) {
          setTimeout(function() {
            throw e6;
          });
        }
      }
      function Un2(e5, t3, n3) {
        return n3 = tt2(n3), n3.tag = 3, n3.payload = { element: null }, n3.callback = function() {
          Vn2(e5, t3);
        }, n3;
      }
      function Wn2(e5) {
        return e5 = tt2(e5), e5.tag = 3, e5;
      }
      function Gn2(e5, t3, n3, r3) {
        var i3 = n3.type.getDerivedStateFromError;
        if (typeof i3 == `function`) {
          var a3 = r3.value;
          e5.payload = function() {
            return i3(a3);
          }, e5.callback = function() {
            Hn2(t3, n3, r3);
          };
        }
        var o3 = n3.stateNode;
        o3 !== null && typeof o3.componentDidCatch == `function` && (e5.callback = function() {
          Hn2(t3, n3, r3), typeof i3 != `function` && (mf === null ? mf = /* @__PURE__ */ new Set([this]) : mf.add(this));
          var e6 = r3.stack;
          this.componentDidCatch(r3.value, { componentStack: e6 === null ? `` : e6 });
        });
      }
      function Kn2(e5, t3, n3, i3, a3) {
        if (n3.flags |= 32768, typeof i3 == `object` && i3 && typeof i3.then == `function`) {
          if (t3 = n3.alternate, t3 !== null && W2(t3, n3, a3, true), n3 = Xu.current, n3 !== null) {
            switch (n3.tag) {
              case 31:
              case 13:
              case 19:
                return Zu === null ? xa2() : n3.alternate === null && ef === 0 && (ef = 3), n3.flags &= -257, n3.flags |= 65536, n3.lanes = a3, i3 === Lu ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? n3.updateQueue = /* @__PURE__ */ new Set([i3]) : t3.add(i3), Ua2(e5, i3, a3)), false;
              case 22:
                return n3.flags |= 65536, i3 === Lu ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? (t3 = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([i3]) }, n3.updateQueue = t3) : (n3 = t3.retryQueue, n3 === null ? t3.retryQueue = /* @__PURE__ */ new Set([i3]) : n3.add(i3)), Ua2(e5, i3, a3)), false;
            }
            throw Error(r2(435, n3.tag));
          }
          return Ua2(e5, i3, a3), xa2(), false;
        }
        if (uu) return t3 = Xu.current, t3 === null ? (i3 !== pu && (t3 = Error(r2(423), { cause: i3 }), ue2(L2(t3, n3))), e5 = e5.current.alternate, e5.flags |= 65536, a3 &= -a3, e5.lanes |= a3, i3 = L2(i3, n3), a3 = Un2(e5.stateNode, i3, a3), it2(e5, a3), ef !== 4 && (ef = 2)) : (!(t3.flags & 65536) && (t3.flags |= 256), t3.flags |= 65536, t3.lanes = a3, i3 !== pu && (e5 = Error(r2(422), { cause: i3 }), ue2(L2(e5, n3)))), false;
        var o3 = Error(r2(520), { cause: i3 });
        if (o3 = L2(o3, n3), sf === null ? sf = [o3] : sf.push(o3), ef !== 4 && (ef = 2), t3 === null) return true;
        i3 = L2(i3, n3), n3 = t3;
        do {
          switch (n3.tag) {
            case 3:
              return n3.flags |= 65536, e5 = a3 & -a3, n3.lanes |= e5, e5 = Un2(n3.stateNode, i3, e5), it2(n3, e5), false;
            case 1:
              if (t3 = n3.type, o3 = n3.stateNode, !(n3.flags & 128) && (typeof t3.getDerivedStateFromError == `function` || o3 !== null && typeof o3.componentDidCatch == `function` && (mf === null || !mf.has(o3)))) return n3.flags |= 65536, a3 &= -a3, n3.lanes |= a3, a3 = Wn2(a3), Gn2(a3, e5, n3, i3), it2(n3, a3), false;
              break;
            case 22:
              if (n3.memoizedState !== null) return n3.flags |= 65536, false;
          }
          n3 = n3.return;
        } while (n3 !== null);
        return false;
      }
      function qn2(e5, t3, n3, r3) {
        t3.child = e5 === null ? Hu(t3, null, n3, r3) : Vu(t3, e5.child, n3, r3);
      }
      function Jn2(e5, t3, n3, r3, i3) {
        n3 = n3.render;
        var a3 = t3.ref;
        if (`ref` in r3) {
          var o3 = {};
          for (var s3 in r3) s3 !== `ref` && (o3[s3] = r3[s3]);
        } else o3 = r3;
        return ge2(t3), r3 = St2(e5, t3, n3, o3, a3, i3), s3 = Dt2(), e5 !== null && !gd ? (Ot2(e5, t3, i3), xr2(e5, t3, i3)) : (uu && s3 && B2(t3), t3.flags |= 1, qn2(e5, t3, r3, i3), t3.child);
      }
      function Yn2(e5, t3, n3, r3, i3) {
        if (e5 === null) {
          var a3 = n3.type;
          return typeof a3 == `function` && !Xa2(a3) && a3.defaultProps === void 0 && n3.compare === null ? (t3.tag = 15, t3.type = a3, Xn2(e5, t3, a3, r3, i3)) : (e5 = $a2(n3.type, null, r3, t3, t3.mode, i3), e5.ref = t3.ref, e5.return = t3, t3.child = e5);
        }
        if (a3 = e5.child, !Sr2(e5, i3)) {
          var o3 = a3.memoizedProps;
          if (n3 = n3.compare, n3 = n3 === null ? Le2 : n3, n3(o3, r3) && e5.ref === t3.ref) return xr2(e5, t3, i3);
        }
        return t3.flags |= 1, e5 = Za2(a3, r3), e5.ref = t3.ref, e5.return = t3, t3.child = e5;
      }
      function Xn2(e5, t3, n3, r3, i3) {
        if (e5 !== null) {
          var a3 = e5.memoizedProps;
          if (Le2(a3, r3) && e5.ref === t3.ref) {
            if (gd = false, t3.pendingProps = r3 = a3, Sr2(e5, i3)) e5.flags & 131072 && (gd = true);
            else return t3.lanes = e5.lanes, xr2(e5, t3, i3);
          }
        }
        return ir2(e5, t3, n3, r3, i3);
      }
      function Zn2(e5, t3, n3, r3) {
        var i3 = r3.children, a3 = e5 === null ? null : e5.memoizedState;
        if (e5 === null && t3.stateNode === null && (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r3.mode === `hidden`) {
          if (t3.flags & 128) {
            if (a3 = a3 === null ? n3 : a3.baseLanes | n3, e5 !== null) {
              for (r3 = t3.child = e5.child, i3 = 0; r3 !== null; ) i3 = i3 | r3.lanes | r3.childLanes, r3 = r3.sibling;
              r3 = i3 & ~a3;
            } else r3 = 0, t3.child = null;
            return $n2(e5, t3, a3, n3, r3);
          }
          if (n3 & 536870912) t3.memoizedState = { baseLanes: 0, cachePool: null }, e5 !== null && Ie2(t3, a3 === null ? null : a3.cachePool), a3 === null ? ut2() : lt2(t3, a3), mt2(t3);
          else return r3 = t3.lanes = 536870912, $n2(e5, t3, a3 === null ? n3 : a3.baseLanes | n3, n3, r3);
        } else a3 === null ? (e5 !== null && Ie2(t3, null), ut2(), ht2()) : (Ie2(t3, a3.cachePool), lt2(t3, a3), ht2(), t3.memoizedState = null);
        return qn2(e5, t3, i3, n3), t3.child;
      }
      function Qn2(e5, t3) {
        return e5 !== null && e5.tag === 22 || t3.stateNode !== null || (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t3.sibling;
      }
      function $n2(e5, t3, n3, r3, i3) {
        var a3 = Fe2();
        return a3 = a3 === null ? null : { parent: es2 ? bu._currentValue : bu._currentValue2, pool: a3 }, t3.memoizedState = { baseLanes: n3, cachePool: a3 }, e5 !== null && Ie2(t3, null), ut2(), mt2(t3), e5 !== null && W2(e5, t3, r3, true), t3.childLanes = i3, null;
      }
      function er2(e5, t3) {
        return t3 = fr2({ mode: t3.mode, children: t3.children }, e5.mode), t3.ref = e5.ref, e5.child = t3, t3.return = e5, t3;
      }
      function tr2(e5, t3, n3) {
        return Vu(t3, e5.child, null, n3), e5 = er2(t3, t3.pendingProps), e5.flags |= 2, gt2(t3), t3.memoizedState = null, e5;
      }
      function nr2(e5, t3, n3) {
        var i3 = t3.pendingProps, a3 = !!(t3.flags & 128);
        if (t3.flags &= -129, e5 === null) {
          if (uu) {
            if (i3.mode === `hidden`) return e5 = er2(t3, i3), t3.lanes = 536870912, e5.memoizedState = { baseLanes: 0, cachePool: null }, Qn2(null, e5);
            if (pt2(t3), (e5 = lu) ? (e5 = Nc2(e5, fu), e5 !== null && (t3.memoizedState = { dehydrated: e5, treeContext: tu === null ? null : { id: nu, overflow: ru }, retryLane: 536870912, hydrationErrors: null }, n3 = no2(e5), n3.return = t3, t3.child = n3, cu = t3, lu = null)) : e5 = null, e5 === null) throw U2(t3);
            return t3.lanes = 536870912, null;
          }
          return er2(t3, i3);
        }
        var o3 = e5.memoizedState;
        if (o3 !== null) {
          var s3 = o3.dehydrated;
          if (pt2(t3), a3) {
            if (t3.flags & 256) t3.flags &= -257, t3 = tr2(e5, t3, n3);
            else if (t3.memoizedState !== null) t3.child = e5.child, t3.flags |= 128, t3 = null;
            else throw Error(r2(558));
          } else if (gd || W2(e5, t3, n3, false), a3 = (n3 & e5.childLanes) !== 0, gd || a3) {
            if (Ju.current === null) {
              if (i3 = Gd, i3 !== null && (s3 = E2(i3, n3), s3 !== 0 && s3 !== o3.retryLane)) throw o3.retryLane = s3, Xe2(e5, s3), da2(i3, e5, s3), hd;
              xa2();
            }
            t3 = tr2(e5, t3, n3);
          } else e5 = o3.treeContext, rs2 && (lu = Oc2(s3), cu = t3, uu = true, du = null, fu = false, e5 !== null && V2(t3, e5)), t3 = er2(t3, i3), t3.flags |= 134221824;
          return t3;
        }
        return e5 = Za2(e5.child, { mode: i3.mode, children: i3.children }), e5.ref = t3.ref, t3.child = e5, e5.return = t3, e5;
      }
      function rr2(e5, t3) {
        var n3 = t3.ref;
        if (n3 === null) e5 !== null && e5.ref !== null && (t3.flags |= 4194816);
        else {
          if (typeof n3 != `function` && typeof n3 != `object`) throw Error(r2(284));
          (e5 === null || e5.ref !== n3) && (t3.flags |= 4194816);
        }
      }
      function ir2(e5, t3, n3, r3, i3) {
        return ge2(t3), n3 = St2(e5, t3, n3, r3, void 0, i3), r3 = Dt2(), e5 !== null && !gd ? (Ot2(e5, t3, i3), xr2(e5, t3, i3)) : (uu && r3 && B2(t3), t3.flags |= 1, qn2(e5, t3, n3, i3), t3.child);
      }
      function ar2(e5, t3, n3, r3, i3, a3) {
        return ge2(t3), t3.updateQueue = null, n3 = wt2(t3, r3, n3, i3), Ct2(e5), r3 = Dt2(), e5 !== null && !gd ? (Ot2(e5, t3, a3), xr2(e5, t3, a3)) : (uu && r3 && B2(t3), t3.flags |= 1, qn2(e5, t3, n3, a3), t3.child);
      }
      function or2(e5, t3, n3, r3, i3) {
        if (ge2(t3), t3.stateNode === null) {
          var a3 = Sl, o3 = n3.contextType;
          typeof o3 == `object` && o3 && (a3 = _e2(o3)), a3 = new n3(r3, a3), t3.memoizedState = a3.state !== null && a3.state !== void 0 ? a3.state : null, a3.updater = md, t3.stateNode = a3, a3._reactInternals = t3, a3 = t3.stateNode, a3.props = r3, a3.state = t3.memoizedState, a3.refs = {}, $e2(t3), o3 = n3.contextType, a3.context = typeof o3 == `object` && o3 ? _e2(o3) : Sl, a3.state = t3.memoizedState, o3 = n3.getDerivedStateFromProps, typeof o3 == `function` && (Ln2(t3, n3, o3, r3), a3.state = t3.memoizedState), typeof n3.getDerivedStateFromProps == `function` || typeof a3.getSnapshotBeforeUpdate == `function` || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (o3 = a3.state, typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount(), o3 !== a3.state && md.enqueueReplaceState(a3, a3.state, null), ot2(t3, r3, a3, i3), at2(), a3.state = t3.memoizedState), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = true;
        } else if (e5 === null) {
          a3 = t3.stateNode;
          var s3 = t3.memoizedProps, c3 = Bn2(n3, s3);
          a3.props = c3;
          var l3 = a3.context, u3 = n3.contextType;
          o3 = Sl, typeof u3 == `object` && u3 && (o3 = _e2(u3));
          var d3 = n3.getDerivedStateFromProps;
          u3 = typeof d3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`, s3 = t3.pendingProps !== s3, u3 || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (s3 || l3 !== o3) && zn2(t3, a3, r3, o3), Ku = false;
          var f3 = t3.memoizedState;
          a3.state = f3, ot2(t3, r3, a3, i3), at2(), l3 = t3.memoizedState, s3 || f3 !== l3 || Ku ? (typeof d3 == `function` && (Ln2(t3, n3, d3, r3), l3 = t3.memoizedState), (c3 = Ku || Rn2(t3, n3, c3, r3, f3, l3, o3)) ? (u3 || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount()), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308)) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), t3.memoizedProps = r3, t3.memoizedState = l3), a3.props = r3, a3.state = l3, a3.context = o3, r3 = c3) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = false);
        } else {
          a3 = t3.stateNode, et2(e5, t3), o3 = t3.memoizedProps, u3 = Bn2(n3, o3), a3.props = u3, d3 = t3.pendingProps, f3 = a3.context, l3 = n3.contextType, c3 = Sl, typeof l3 == `object` && l3 && (c3 = _e2(l3)), s3 = n3.getDerivedStateFromProps, (l3 = typeof s3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`) || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (o3 !== d3 || f3 !== c3) && zn2(t3, a3, r3, c3), Ku = false, f3 = t3.memoizedState, a3.state = f3, ot2(t3, r3, a3, i3), at2();
          var p3 = t3.memoizedState;
          o3 !== d3 || f3 !== p3 || Ku || e5 !== null && e5.dependencies !== null && he2(e5.dependencies) ? (typeof s3 == `function` && (Ln2(t3, n3, s3, r3), p3 = t3.memoizedState), (u3 = Ku || Rn2(t3, n3, u3, r3, f3, p3, c3) || e5 !== null && e5.dependencies !== null && he2(e5.dependencies)) ? (l3 || typeof a3.UNSAFE_componentWillUpdate != `function` && typeof a3.componentWillUpdate != `function` || (typeof a3.componentWillUpdate == `function` && a3.componentWillUpdate(r3, p3, c3), typeof a3.UNSAFE_componentWillUpdate == `function` && a3.UNSAFE_componentWillUpdate(r3, p3, c3)), typeof a3.componentDidUpdate == `function` && (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate == `function` && (t3.flags |= 1024)) : (typeof a3.componentDidUpdate != `function` || o3 === e5.memoizedProps && f3 === e5.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o3 === e5.memoizedProps && f3 === e5.memoizedState || (t3.flags |= 1024), t3.memoizedProps = r3, t3.memoizedState = p3), a3.props = r3, a3.state = p3, a3.context = c3, r3 = u3) : (typeof a3.componentDidUpdate != `function` || o3 === e5.memoizedProps && f3 === e5.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o3 === e5.memoizedProps && f3 === e5.memoizedState || (t3.flags |= 1024), r3 = false);
        }
        return a3 = r3, rr2(e5, t3), r3 = !!(t3.flags & 128), a3 || r3 ? (a3 = t3.stateNode, n3 = r3 && typeof n3.getDerivedStateFromError != `function` ? null : a3.render(), t3.flags |= 1, e5 !== null && r3 ? (t3.child = Vu(t3, e5.child, null, i3), t3.child = Vu(t3, null, n3, i3)) : qn2(e5, t3, n3, i3), t3.memoizedState = a3.state, e5 = t3.child) : e5 = xr2(e5, t3, i3), e5;
      }
      function sr2(e5, t3, n3, r3) {
        return ce2(), t3.flags |= 256, qn2(e5, t3, n3, r3), t3.child;
      }
      function cr2(e5) {
        return { baseLanes: e5, cachePool: q2() };
      }
      function lr2(e5, t3, n3) {
        return e5 = e5 === null ? 0 : e5.childLanes & ~n3, t3 && (e5 |= af), e5;
      }
      function ur2(e5, t3, n3) {
        var r3 = t3.pendingProps, i3 = false, a3 = !!(t3.flags & 128), o3;
        if ((o3 = a3) || (o3 = e5 !== null && e5.memoizedState === null ? false : !!(Qu.current & 2)), o3 && (i3 = true, t3.flags &= -129), o3 = !!(t3.flags & 32), t3.flags &= -33, e5 === null) {
          if (uu) {
            if (i3 ? ft2(t3) : ht2(), (e5 = lu) ? (e5 = Pc2(e5, fu), e5 !== null && (t3.memoizedState = { dehydrated: e5, treeContext: tu === null ? null : { id: nu, overflow: ru }, retryLane: 536870912, hydrationErrors: null }, n3 = no2(e5), n3.return = t3, t3.child = n3, cu = t3, lu = null)) : e5 = null, e5 === null) throw U2(t3);
            return t3.lanes = yc2(e5) ? 32 : 536870912, null;
          }
          return a3 = r3.children, r3 = r3.fallback, i3 ? (ht2(), i3 = t3.mode, a3 = fr2({ mode: `hidden`, children: a3 }, i3), r3 = eo2(r3, i3, n3, null), a3.return = t3, r3.return = t3, a3.sibling = r3, t3.child = a3, r3 = t3.child, r3.memoizedState = cr2(n3), r3.childLanes = lr2(e5, o3, n3), t3.memoizedState = _d, Qn2(null, r3)) : (ft2(t3), dr2(t3, a3));
        }
        var s3 = e5.memoizedState;
        if (s3 !== null) {
          var c3 = s3.dehydrated;
          if (c3 !== null) return mr2(e5, t3, a3, o3, r3, c3, s3, n3);
        }
        return i3 ? (ht2(), i3 = r3.fallback, a3 = t3.mode, s3 = e5.child, c3 = s3.sibling, r3 = Za2(s3, { mode: `hidden`, children: r3.children }), r3.subtreeFlags = s3.subtreeFlags & 1206910976, c3 === null ? (i3 = eo2(i3, a3, n3, null), i3.flags |= 2) : i3 = Za2(c3, i3), i3.return = t3, r3.return = t3, r3.sibling = i3, t3.child = r3, Qn2(null, r3), r3 = t3.child, i3 = e5.child.memoizedState, i3 === null ? i3 = cr2(n3) : (a3 = i3.cachePool, a3 === null ? a3 = q2() : (s3 = es2 ? bu._currentValue : bu._currentValue2, a3 = a3.parent === s3 ? a3 : { parent: s3, pool: s3 }), i3 = { baseLanes: i3.baseLanes | n3, cachePool: a3 }), r3.memoizedState = i3, r3.childLanes = lr2(e5, o3, n3), t3.memoizedState = _d, Qn2(e5.child, r3)) : (ft2(t3), n3 = e5.child, e5 = n3.sibling, n3 = Za2(n3, { mode: `visible`, children: r3.children }), n3.return = t3, n3.sibling = null, e5 !== null && (o3 = t3.deletions, o3 === null ? (t3.deletions = [e5], t3.flags |= 16) : o3.push(e5)), t3.child = n3, t3.memoizedState = null, n3);
      }
      function dr2(e5, t3) {
        return t3 = fr2({ mode: `visible`, children: t3 }, e5.mode), t3.return = e5, e5.child = t3;
      }
      function fr2(e5, n3) {
        return e5 = t2(22, e5, null, n3), e5.lanes = 0, e5;
      }
      function pr2(e5, t3, n3) {
        return Vu(t3, e5.child, null, n3), e5 = dr2(t3, t3.pendingProps.children), e5.flags |= 2, t3.memoizedState = null, e5;
      }
      function mr2(e5, t3, n3, i3, a3, o3, s3, c3) {
        if (n3) return t3.flags & 256 ? (ft2(t3), t3.flags &= -257, pr2(e5, t3, c3)) : t3.memoizedState === null ? (ht2(), o3 = a3.fallback, s3 = t3.mode, a3 = fr2({ mode: `visible`, children: a3.children }, s3), o3 = eo2(o3, s3, c3, null), o3.flags |= 2, a3.return = t3, o3.return = t3, a3.sibling = o3, t3.child = a3, Vu(t3, e5.child, null, c3), a3 = t3.child, a3.memoizedState = cr2(c3), a3.childLanes = lr2(e5, i3, c3), t3.memoizedState = _d, Qn2(null, a3)) : (ht2(), t3.child = e5.child, t3.flags |= 128, null);
        if (ft2(t3), yc2(o3)) return i3 = bc2(o3).digest, i3 !== `` && (a3 = Error(r2(419)), a3.stack = ``, a3.digest = i3, ue2({ value: a3, source: null, stack: null })), pr2(e5, t3, c3);
        if (gd || W2(e5, t3, c3, false), i3 = (c3 & e5.childLanes) !== 0, gd || i3) {
          if (Ju.current !== null) return pr2(e5, t3, c3);
          if (i3 = Gd, i3 !== null && (a3 = E2(i3, c3), a3 !== 0 && a3 !== s3.retryLane)) throw s3.retryLane = a3, Xe2(e5, a3), da2(i3, e5, a3), hd;
          return vc2(o3) || xa2(), pr2(e5, t3, c3);
        }
        return vc2(o3) ? (t3.flags |= 192, t3.child = e5.child, null) : (e5 = s3.treeContext, rs2 && (lu = kc2(o3), cu = t3, uu = true, du = null, fu = false, e5 !== null && V2(t3, e5)), t3 = dr2(t3, a3.children), t3.flags |= 134221824, t3);
      }
      function hr2(e5, t3, n3) {
        e5.lanes |= t3;
        var r3 = e5.alternate;
        r3 !== null && (r3.lanes |= t3), pe2(e5.return, t3, n3);
      }
      function gr2(e5) {
        for (var t3 = null; e5 !== null; ) {
          var n3 = e5.alternate;
          n3 !== null && yt2(n3) === null && (t3 = e5), e5 = e5.sibling;
        }
        return t3;
      }
      function _r2(e5, t3, n3, r3, i3, a3) {
        var o3 = e5.memoizedState;
        o3 === null ? e5.memoizedState = { isBackwards: t3, rendering: null, renderingStartTime: 0, last: r3, tail: n3, tailMode: i3, treeForkCount: a3 } : (o3.isBackwards = t3, o3.rendering = null, o3.renderingStartTime = 0, o3.last = r3, o3.tail = n3, o3.tailMode = i3, o3.treeForkCount = a3);
      }
      function vr2(e5) {
        var t3 = e5.child;
        for (e5.child = null; t3 !== null; ) {
          var n3 = t3.sibling;
          t3.sibling = e5.child, e5.child = t3, t3 = n3;
        }
      }
      function yr2(e5, t3, n3) {
        var r3 = t3.pendingProps, i3 = r3.revealOrder, a3 = r3.tail;
        r3 = r3.children;
        var o3 = Qu.current;
        if (t3.flags & 128) return _t2(t3, o3), null;
        var s3 = !!(o3 & 2);
        if (s3 ? (o3 = o3 & 1 | 2, t3.flags |= 128) : o3 &= 1, _t2(t3, o3), i3 === `backwards` && e5 !== null ? (vr2(e5), qn2(e5, t3, r3, n3), vr2(e5)) : qn2(e5, t3, r3, n3), r3 = uu ? Ql : 0, !s3 && e5 !== null && e5.flags & 128) e: for (e5 = t3.child; e5 !== null; ) {
          if (e5.tag === 13) e5.memoizedState !== null && hr2(e5, n3, t3);
          else if (e5.tag === 19) hr2(e5, n3, t3);
          else if (e5.child !== null) {
            e5.child.return = e5, e5 = e5.child;
            continue;
          }
          if (e5 === t3) break e;
          for (; e5.sibling === null; ) {
            if (e5.return === null || e5.return === t3) break e;
            e5 = e5.return;
          }
          e5.sibling.return = e5.return, e5 = e5.sibling;
        }
        switch (i3) {
          case `backwards`:
            n3 = gr2(t3.child), n3 === null ? (i3 = t3.child, t3.child = null) : (i3 = n3.sibling, n3.sibling = null, vr2(t3)), _r2(t3, true, i3, null, a3, r3);
            break;
          case `unstable_legacy-backwards`:
            for (n3 = null, i3 = t3.child, t3.child = null; i3 !== null; ) {
              if (e5 = i3.alternate, e5 !== null && yt2(e5) === null) {
                t3.child = i3;
                break;
              }
              e5 = i3.sibling, i3.sibling = n3, n3 = i3, i3 = e5;
            }
            _r2(t3, true, n3, null, a3, r3);
            break;
          case `together`:
            _r2(t3, false, null, null, void 0, r3);
            break;
          case `independent`:
            t3.memoizedState = null;
            break;
          default:
            n3 = gr2(t3.child), n3 === null ? (i3 = t3.child, t3.child = null) : (i3 = n3.sibling, n3.sibling = null), _r2(t3, false, i3, n3, a3, r3);
        }
        return t3.child;
      }
      function br2(e5, t3, n3) {
        var r3 = t3.pendingProps;
        return de2(t3, t3.type, r3.value), qn2(e5, t3, r3.children, n3), t3.child;
      }
      function xr2(e5, t3, n3) {
        if (e5 !== null && (t3.dependencies = e5.dependencies), tf |= t3.lanes, (n3 & t3.childLanes) === 0) {
          if (e5 !== null) {
            if (W2(e5, t3, n3, false), (n3 & t3.childLanes) === 0) return null;
          } else return null;
        }
        if (e5 !== null && t3.child !== e5.child) throw Error(r2(153));
        if (t3.child !== null) {
          for (e5 = t3.child, n3 = Za2(e5, e5.pendingProps), t3.child = n3, n3.return = t3; e5.sibling !== null; ) e5 = e5.sibling, n3 = n3.sibling = Za2(e5, e5.pendingProps), n3.return = t3;
          n3.sibling = null;
        }
        return t3.child;
      }
      function Sr2(e5, t3) {
        return (e5.lanes & t3) !== 0 || (e5 = e5.dependencies, !!(e5 !== null && he2(e5)));
      }
      function Cr2(e5, t3, n3) {
        switch (t3.tag) {
          case 3:
            ne2(t3, t3.stateNode.containerInfo), de2(t3, bu, e5.memoizedState.cache), ce2();
            break;
          case 27:
          case 5:
            re2(t3);
            break;
          case 4:
            ne2(t3, t3.stateNode.containerInfo);
            break;
          case 10:
            de2(t3, t3.type, t3.memoizedProps.value);
            break;
          case 31:
            if (t3.memoizedState !== null) return t3.flags |= 128, pt2(t3), null;
            break;
          case 13:
            var r3 = t3.memoizedState;
            if (r3 !== null) {
              if (r3.dehydrated !== null) return ft2(t3), t3.flags |= 128, null;
              r3 = W2(e5, t3, n3, false);
              var i3 = t3.child.childLanes;
              return r3 || (n3 & i3) !== 0 ? ur2(e5, t3, n3) : (ft2(t3), e5 = xr2(e5, t3, n3), e5 === null ? null : e5.sibling);
            }
            ft2(t3);
            break;
          case 19:
            if (t3.flags & 128) return yr2(e5, t3, n3);
            if (i3 = !!(e5.flags & 128), r3 = (n3 & t3.childLanes) !== 0, r3 || (r3 = (W2(e5, t3, n3, false), (n3 & t3.childLanes) !== 0)), i3) {
              if (r3) return yr2(e5, t3, n3);
              t3.flags |= 128;
            }
            if (i3 = t3.memoizedState, i3 !== null && (i3.rendering = null, i3.tail = null, i3.lastEffect = null), _t2(t3, Qu.current), r3) break;
            return null;
          case 22:
            return t3.lanes = 0, Zn2(e5, t3, n3, t3.pendingProps);
          case 24:
            de2(t3, bu, e5.memoizedState.cache);
        }
        return xr2(e5, t3, n3);
      }
      function wr2(e5, t3, n3) {
        if (e5 !== null) {
          if (e5.memoizedProps !== t3.pendingProps) gd = true;
          else {
            if (!Sr2(e5, n3) && !(t3.flags & 128)) return gd = false, Cr2(e5, t3, n3);
            gd = !!(e5.flags & 131072);
          }
        } else gd = false, uu && t3.flags & 1048576 && z2(t3, Ql, t3.index);
        switch (t3.lanes = 0, t3.tag) {
          case 16:
            e: {
              var i3 = t3.pendingProps;
              if (e5 = Be2(t3.elementType), t3.type = e5, typeof e5 == `function`) Xa2(e5) ? (i3 = Bn2(e5, i3), t3.tag = 1, t3 = or2(null, t3, e5, i3, n3)) : (t3.tag = 0, t3 = ir2(null, t3, e5, i3, n3));
              else {
                if (e5 != null) {
                  var a3 = e5.$$typeof;
                  if (a3 === wo2) {
                    t3.tag = 11, t3 = Jn2(null, t3, e5, i3, n3);
                    break e;
                  }
                  if (a3 === Do2) {
                    t3.tag = 14, t3 = Yn2(null, t3, e5, i3, n3);
                    break e;
                  }
                  if (a3 === Co2) {
                    t3.tag = 10, t3.type = e5, t3 = br2(null, t3, n3);
                    break e;
                  }
                }
                throw t3 = u2(e5) || e5, Error(r2(306, t3, ``));
              }
            }
            return t3;
          case 0:
            return ir2(e5, t3, t3.type, t3.pendingProps, n3);
          case 1:
            return i3 = t3.type, a3 = Bn2(i3, t3.pendingProps), or2(e5, t3, i3, a3, n3);
          case 3:
            e: {
              if (ne2(t3, t3.stateNode.containerInfo), e5 === null) throw Error(r2(387));
              var o3 = t3.pendingProps;
              a3 = t3.memoizedState, i3 = a3.element, et2(e5, t3), ot2(t3, o3, null, n3);
              var s3 = t3.memoizedState;
              if (o3 = s3.cache, de2(t3, bu, o3), o3 !== a3.cache && me2(t3, [bu], n3, true), at2(), o3 = s3.element, rs2 && a3.isDehydrated) {
                if (a3 = { element: o3, isDehydrated: false, cache: s3.cache }, t3.updateQueue.baseState = a3, t3.memoizedState = a3, t3.flags & 256) {
                  t3 = sr2(e5, t3, o3, n3);
                  break e;
                }
                if (o3 !== i3) {
                  i3 = L2(Error(r2(424)), t3), ue2(i3), t3 = sr2(e5, t3, o3, n3);
                  break e;
                }
                for (rs2 && (lu = Dc2(t3.stateNode.containerInfo), cu = t3, uu = true, du = null, fu = true), n3 = Hu(t3, null, o3, n3), t3.child = n3; n3; ) n3.flags = n3.flags & -3 | 134221824, n3 = n3.sibling;
              } else {
                if (ce2(), o3 === i3) {
                  t3 = xr2(e5, t3, n3);
                  break e;
                }
                qn2(e5, t3, o3, n3);
              }
              t3 = t3.child;
            }
            return t3;
          case 26:
            if (el2) return rr2(e5, t3), e5 === null ? (n3 = rl2(t3.type, null, t3.pendingProps, null)) ? t3.memoizedState = n3 : uu || (t3.stateNode = ll(t3.type, t3.pendingProps, ou.current, t3)) : t3.memoizedState = rl2(t3.type, e5.memoizedProps, t3.pendingProps, e5.memoizedState), null;
          case 27:
            if (ml) return re2(t3), e5 === null && ml && uu && (i3 = t3.stateNode = hl(t3.type, t3.pendingProps, ou.current, iu.current, false), cu = t3, fu = true, lu = Ac2(t3.type, i3, lu)), qn2(e5, t3, t3.pendingProps.children, n3), rr2(e5, t3), e5 === null && (t3.flags |= 4194304), t3.child;
          case 5:
            return e5 === null && uu && (Qc2(t3.type, t3.pendingProps, iu.current), (a3 = i3 = lu) && (i3 = jc2(i3, t3.type, t3.pendingProps, fu), i3 === null ? a3 = false : (t3.stateNode = i3, cu = t3, lu = Ec2(i3), fu = false, a3 = true)), a3 || U2(t3)), re2(t3), a3 = t3.type, o3 = t3.pendingProps, s3 = e5 === null ? null : e5.memoizedProps, i3 = o3.children, Yo2(a3, o3) ? i3 = null : s3 !== null && Yo2(a3, s3) && (t3.flags |= 32), t3.memoizedState !== null && (a3 = St2(e5, t3, Et2, null, null, n3), es2 ? bs2._currentValue = a3 : bs2._currentValue2 = a3), rr2(e5, t3), qn2(e5, t3, i3, n3), t3.child;
          case 6:
            return e5 === null && uu && ($c2(t3.pendingProps, iu.current), (e5 = n3 = lu) && (n3 = Mc2(n3, t3.pendingProps, fu), n3 === null ? e5 = false : (t3.stateNode = n3, cu = t3, lu = null, e5 = true)), e5 || U2(t3)), null;
          case 13:
            return ur2(e5, t3, n3);
          case 4:
            return ne2(t3, t3.stateNode.containerInfo), i3 = t3.pendingProps, e5 === null ? t3.child = Vu(t3, null, i3, n3) : qn2(e5, t3, i3, n3), t3.child;
          case 11:
            return Jn2(e5, t3, t3.type, t3.pendingProps, n3);
          case 7:
            return i3 = t3.pendingProps, rr2(e5, t3), qn2(e5, t3, i3, n3), t3.child;
          case 8:
            return qn2(e5, t3, t3.pendingProps.children, n3), t3.child;
          case 12:
            return qn2(e5, t3, t3.pendingProps.children, n3), t3.child;
          case 10:
            return br2(e5, t3, n3);
          case 9:
            return a3 = t3.type._context, i3 = t3.pendingProps.children, ge2(t3), a3 = _e2(a3), i3 = i3(a3), t3.flags |= 1, qn2(e5, t3, i3, n3), t3.child;
          case 14:
            return Yn2(e5, t3, t3.type, t3.pendingProps, n3);
          case 15:
            return Xn2(e5, t3, t3.type, t3.pendingProps, n3);
          case 19:
            return yr2(e5, t3, n3);
          case 31:
            return nr2(e5, t3, n3);
          case 22:
            return Zn2(e5, t3, n3, t3.pendingProps);
          case 24:
            return ge2(t3), i3 = _e2(bu), e5 === null ? (a3 = Fe2(), a3 === null && (a3 = Gd, o3 = be2(), a3.pooledCache = o3, o3.refCount++, o3 !== null && (a3.pooledCacheLanes |= n3), a3 = o3), t3.memoizedState = { parent: i3, cache: a3 }, $e2(t3), de2(t3, bu, a3)) : ((e5.lanes & n3) !== 0 && (et2(e5, t3), ot2(t3, null, null, n3), at2()), a3 = e5.memoizedState, o3 = t3.memoizedState, a3.parent === i3 ? (i3 = o3.cache, de2(t3, bu, i3), i3 !== a3.cache && me2(t3, [bu], n3, true)) : (a3 = { parent: i3, cache: i3 }, t3.memoizedState = a3, t3.lanes === 0 && (t3.memoizedState = t3.updateQueue.baseState = a3), de2(t3, bu, i3))), qn2(e5, t3, t3.pendingProps.children, n3), t3.child;
          case 30:
            return t3.stateNode === null && (t3.stateNode = { autoName: null, paired: null, clones: null, ref: null }), i3 = t3.pendingProps, i3.name != null && i3.name !== `auto` ? t3.flags |= e5 === null ? 18882560 : 18874368 : uu && B2(t3), e5 !== null && e5.memoizedProps.name !== i3.name ? t3.flags |= 4194816 : rr2(e5, t3), qn2(e5, t3, i3.children, n3), t3.child;
          case 29:
            throw t3.pendingProps;
        }
        throw Error(r2(156, t3.tag));
      }
      function Tr2(e5) {
        e5.flags |= 4;
      }
      function Er2(e5) {
        ns2 && (e5.flags |= 8);
      }
      function Dr2(e5, t3) {
        if (e5 !== null && e5.child === t3.child) return false;
        if (t3.flags & 16) return true;
        for (e5 = t3.child; e5 !== null; ) {
          if (e5.flags & 8218 || e5.subtreeFlags & 8218) return true;
          e5 = e5.sibling;
        }
        return false;
      }
      function Or2(e5, t3, n3, r3) {
        if (ts2) for (n3 = t3.child; n3 !== null; ) {
          if (n3.tag === 5 || n3.tag === 6) qo2(e5, n3.stateNode);
          else if (!(n3.tag === 4 || ml && n3.tag === 27) && n3.child !== null) {
            n3.child.return = n3, n3 = n3.child;
            continue;
          }
          if (n3 === t3) break;
          for (; n3.sibling === null; ) {
            if (n3.return === null || n3.return === t3) return;
            n3 = n3.return;
          }
          n3.sibling.return = n3.return, n3 = n3.sibling;
        }
        else if (ns2) for (var i3 = t3.child; i3 !== null; ) {
          if (i3.tag === 5) {
            var a3 = i3.stateNode;
            n3 && r3 && (a3 = gc2(a3, i3.type, i3.memoizedProps)), qo2(e5, a3);
          } else if (i3.tag === 6) a3 = i3.stateNode, n3 && r3 && (a3 = _c2(a3, i3.memoizedProps)), qo2(e5, a3);
          else if (i3.tag !== 4) {
            if (i3.tag === 22 && i3.memoizedState !== null) a3 = i3.child, a3 !== null && (a3.return = i3), Or2(e5, i3, true, true);
            else if (i3.child !== null) {
              i3.child.return = i3, i3 = i3.child;
              continue;
            }
          }
          if (i3 === t3) break;
          for (; i3.sibling === null; ) {
            if (i3.return === null || i3.return === t3) return;
            i3 = i3.return;
          }
          i3.sibling.return = i3.return, i3 = i3.sibling;
        }
      }
      function kr2(e5, t3, n3, r3) {
        var i3 = false;
        if (ns2) for (var a3 = t3.child; a3 !== null; ) {
          if (a3.tag === 5) {
            var o3 = a3.stateNode;
            n3 && r3 && (o3 = gc2(o3, a3.type, a3.memoizedProps)), pc2(e5, o3);
          } else if (a3.tag === 6) o3 = a3.stateNode, n3 && r3 && (o3 = _c2(o3, a3.memoizedProps)), pc2(e5, o3);
          else if (a3.tag !== 4) {
            if (a3.tag === 22 && a3.memoizedState !== null) i3 = a3.child, i3 !== null && (i3.return = a3), kr2(e5, a3, true, true), i3 = true;
            else if (a3.child !== null) {
              a3.child.return = a3, a3 = a3.child;
              continue;
            }
          }
          if (a3 === t3) break;
          for (; a3.sibling === null; ) {
            if (a3.return === null || a3.return === t3) return i3;
            a3 = a3.return;
          }
          a3.sibling.return = a3.return, a3 = a3.sibling;
        }
        return i3;
      }
      function Ar2(e5, t3) {
        if (ns2 && Dr2(e5, t3)) {
          e5 = t3.stateNode;
          var n3 = e5.containerInfo, r3 = fc2();
          kr2(r3, t3, false, false), e5.pendingChildren = r3, Tr2(t3), mc2(n3, r3);
        }
      }
      function jr2(e5, t3, n3, r3) {
        if (ts2) e5.memoizedProps !== r3 && Tr2(t3);
        else if (ns2) {
          var i3 = e5.stateNode, a3 = e5.memoizedProps;
          if ((e5 = Dr2(e5, t3)) || a3 !== r3) {
            var o3 = iu.current;
            a3 = dc2(i3, n3, a3, r3, !e5, null), a3 === i3 ? t3.stateNode = i3 : (Er2(t3), Jo2(a3, n3, r3, o3) && Tr2(t3), t3.stateNode = a3, e5 && Or2(a3, t3, false, false));
          } else t3.stateNode = i3;
        }
      }
      function Mr2(e5, t3, n3, r3, i3) {
        if (e5.mode & 32 && (n3 === null ? ds2(t3, r3) : fs2(t3, n3, r3))) {
          if (e5.flags |= 16777216, (i3 & 335544128) === i3 || ps2(t3, r3)) {
            if (ms2(e5.stateNode, t3, r3)) e5.flags |= 8192;
            else if (va2()) e5.flags |= 8192;
            else throw Ru = Lu, Fu;
          }
        } else e5.flags &= -16777217;
      }
      function Nr2(e5, t3) {
        if (dl(t3)) {
          if (e5.flags |= 16777216, !fl(t3)) {
            if (va2()) e5.flags |= 8192;
            else throw Ru = Lu, Fu;
          }
        } else e5.flags &= -16777217;
      }
      function Pr2(e5, t3) {
        t3 !== null && (e5.flags |= 4), e5.flags & 16384 && (t3 = e5.tag === 22 ? 536870912 : b2(), e5.lanes |= t3, of |= t3);
      }
      function Fr2(e5, t3) {
        if (!uu) switch (e5.tailMode) {
          case `visible`:
            break;
          case `collapsed`:
            for (var n3 = e5.tail, r3 = null; n3 !== null; ) n3.alternate !== null && (r3 = n3), n3 = n3.sibling;
            r3 === null ? t3 || e5.tail === null ? e5.tail = null : e5.tail.sibling = null : r3.sibling = null;
            break;
          default:
            for (t3 = e5.tail, n3 = null; t3 !== null; ) t3.alternate !== null && (n3 = t3), t3 = t3.sibling;
            n3 === null ? e5.tail = null : n3.sibling = null;
        }
      }
      function Ir2(e5) {
        var t3 = e5.alternate !== null && e5.alternate.child === e5.child, n3 = 0, r3 = 0;
        if (t3) for (var i3 = e5.child; i3 !== null; ) n3 |= i3.lanes | i3.childLanes, r3 |= i3.subtreeFlags & 1206910976, r3 |= i3.flags & 1206910976, i3.return = e5, i3 = i3.sibling;
        else for (i3 = e5.child; i3 !== null; ) n3 |= i3.lanes | i3.childLanes, r3 |= i3.subtreeFlags, r3 |= i3.flags, i3.return = e5, i3 = i3.sibling;
        return e5.subtreeFlags |= r3, e5.childLanes = n3, t3;
      }
      function Lr2(e5, t3, n3) {
        var i3 = t3.pendingProps;
        switch (te2(t3), t3.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Ir2(t3), null;
          case 1:
            return Ir2(t3), null;
          case 3:
            return n3 = t3.stateNode, i3 = null, e5 !== null && (i3 = e5.memoizedState.cache), t3.memoizedState.cache !== i3 && (t3.flags |= 2048), fe2(bu), H2(), n3.pendingContext && (n3.context = n3.pendingContext, n3.pendingContext = null), (e5 === null || e5.child === null) && (se2(t3) ? Tr2(t3) : e5 === null || e5.memoizedState.isDehydrated && !(t3.flags & 256) || (t3.flags |= 1024, le2())), Ar2(e5, t3), Ir2(t3), null;
          case 26:
            if (el2) {
              var a3 = t3.type, o3 = t3.memoizedState;
              return e5 === null ? (Tr2(t3), o3 === null ? (Ir2(t3), Mr2(t3, a3, null, i3, n3)) : (Ir2(t3), Nr2(t3, o3))) : o3 ? o3 === e5.memoizedState ? (Ir2(t3), t3.flags &= -16777217) : (Tr2(t3), Ir2(t3), Nr2(t3, o3)) : (o3 = e5.memoizedProps, ts2 ? o3 !== i3 && Tr2(t3) : jr2(e5, t3, a3, i3), Ir2(t3), Mr2(t3, a3, o3, i3, n3)), null;
            }
          case 27:
            if (ml) {
              if (ie2(t3), n3 = ou.current, a3 = t3.type, e5 !== null && t3.stateNode != null) ts2 ? e5.memoizedProps !== i3 && Tr2(t3) : jr2(e5, t3, a3, i3);
              else {
                if (!i3) {
                  if (t3.stateNode === null) throw Error(r2(166));
                  return Ir2(t3), t3.subtreeFlags &= -33554433, null;
                }
                e5 = iu.current, se2(t3) ? ae2(t3, e5) : (e5 = hl(a3, i3, n3, e5, true), t3.stateNode = e5, Tr2(t3));
              }
              return Ir2(t3), t3.subtreeFlags &= -33554433, null;
            }
          case 5:
            if (ie2(t3), a3 = t3.type, e5 !== null && t3.stateNode != null) jr2(e5, t3, a3, i3);
            else {
              if (!i3) {
                if (t3.stateNode === null) throw Error(r2(166));
                return Ir2(t3), t3.subtreeFlags &= -33554433, null;
              }
              if (o3 = iu.current, se2(t3)) ae2(t3, o3), Gc2(t3.stateNode, a3, i3, o3) && (t3.flags |= 64);
              else {
                var s3 = Ko2(a3, i3, ou.current, o3, t3);
                Er2(t3), Or2(s3, t3, false, false), t3.stateNode = s3, Jo2(s3, a3, i3, o3) && Tr2(t3);
              }
            }
            return Ir2(t3), t3.subtreeFlags &= -33554433, Mr2(t3, t3.type, e5 === null ? null : e5.memoizedProps, t3.pendingProps, n3), null;
          case 6:
            if (e5 && t3.stateNode != null) n3 = e5.memoizedProps, ts2 ? n3 !== i3 && Tr2(t3) : ns2 && (n3 === i3 ? t3.stateNode = e5.stateNode : (e5 = ou.current, n3 = iu.current, Er2(t3), t3.stateNode = Xo2(i3, e5, n3, t3)));
            else {
              if (typeof i3 != `string` && t3.stateNode === null) throw Error(r2(166));
              if (e5 = ou.current, n3 = iu.current, se2(t3)) {
                if (!rs2) throw Error(r2(176));
                if (e5 = t3.stateNode, n3 = t3.memoizedProps, i3 = null, a3 = cu, a3 !== null) switch (a3.tag) {
                  case 27:
                  case 5:
                    i3 = a3.memoizedProps;
                }
                Ic2(e5, n3, t3, i3) || U2(t3, true);
              } else Er2(t3), t3.stateNode = Xo2(i3, e5, n3, t3);
            }
            return Ir2(t3), null;
          case 31:
            if (n3 = t3.memoizedState, e5 === null || e5.memoizedState !== null) {
              if (i3 = se2(t3), n3 !== null) {
                if (e5 === null) {
                  if (!i3) throw Error(r2(318));
                  if (!rs2) throw Error(r2(556));
                  if (e5 = t3.memoizedState, e5 = e5 === null ? null : e5.dehydrated, !e5) throw Error(r2(557));
                  Lc2(e5, t3);
                } else ce2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
                Ir2(t3), e5 = false;
              } else n3 = le2(), e5 !== null && e5.memoizedState !== null && (e5.memoizedState.hydrationErrors = n3), e5 = true;
              if (!e5) return t3.flags & 256 ? (gt2(t3), t3) : (gt2(t3), null);
              if (t3.flags & 128) throw Error(r2(558));
            }
            return Ir2(t3), null;
          case 13:
            if (i3 = t3.memoizedState, e5 === null || e5.memoizedState !== null && e5.memoizedState.dehydrated !== null) {
              if (a3 = se2(t3), i3 !== null && i3.dehydrated !== null) {
                if (e5 === null) {
                  if (!a3) throw Error(r2(318));
                  if (!rs2) throw Error(r2(344));
                  if (a3 = t3.memoizedState, a3 = a3 === null ? null : a3.dehydrated, !a3) throw Error(r2(317));
                  Rc2(a3, t3);
                } else ce2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
                Ir2(t3), a3 = false;
              } else a3 = le2(), e5 !== null && e5.memoizedState !== null && (e5.memoizedState.hydrationErrors = a3), a3 = true;
              if (!a3) return t3.flags & 256 ? (gt2(t3), t3) : (gt2(t3), null);
            }
            return gt2(t3), t3.flags & 128 ? (t3.lanes = n3, t3) : (n3 = i3 !== null, e5 = e5 !== null && e5.memoizedState !== null, n3 && (i3 = t3.child, a3 = null, i3.alternate !== null && i3.alternate.memoizedState !== null && i3.alternate.memoizedState.cachePool !== null && (a3 = i3.alternate.memoizedState.cachePool.pool), o3 = null, i3.memoizedState !== null && i3.memoizedState.cachePool !== null && (o3 = i3.memoizedState.cachePool.pool), o3 !== a3 && (i3.flags |= 2048)), n3 !== e5 && n3 && (t3.child.flags |= 8192), Pr2(t3, t3.updateQueue), Ir2(t3), null);
          case 4:
            return H2(), Ar2(e5, t3), e5 === null && as2(t3.stateNode.containerInfo), t3.flags |= 67108864, Ir2(t3), null;
          case 10:
            return fe2(t3.type), Ir2(t3), null;
          case 19:
            if (vt2(t3), i3 = t3.memoizedState, i3 === null) return Ir2(t3), null;
            if (a3 = !!(t3.flags & 128), o3 = i3.rendering, o3 === null) {
              if (a3) Fr2(i3, false);
              else {
                if (ef !== 0 || e5 !== null && e5.flags & 128) for (e5 = t3.child; e5 !== null; ) {
                  if (o3 = yt2(e5), o3 !== null) {
                    for (t3.flags |= 128, Fr2(i3, false), e5 = o3.updateQueue, t3.updateQueue = e5, Pr2(t3, e5), t3.subtreeFlags = 0, e5 = n3, n3 = t3.child; n3 !== null; ) Qa2(n3, e5), n3 = n3.sibling;
                    return _t2(t3, Qu.current & 1 | 2), uu && R2(t3, i3.treeForkCount), t3.child;
                  }
                  e5 = e5.sibling;
                }
                i3.tail !== null && Q() > ff && (t3.flags |= 128, a3 = true, Fr2(i3, false), t3.lanes = 4194304);
              }
            } else {
              if (!a3) {
                if (e5 = yt2(o3), e5 !== null) {
                  if (t3.flags |= 128, a3 = true, e5 = e5.updateQueue, t3.updateQueue = e5, Pr2(t3, e5), Fr2(i3, true), i3.tail === null && i3.tailMode !== `collapsed` && i3.tailMode !== `visible` && !o3.alternate && !uu) return Ir2(t3), null;
                } else 2 * Q() - i3.renderingStartTime > ff && n3 !== 536870912 && (t3.flags |= 128, a3 = true, Fr2(i3, false), t3.lanes = 4194304);
              }
              i3.isBackwards ? (o3.sibling = t3.child, t3.child = o3) : (e5 = i3.last, e5 === null ? t3.child = o3 : e5.sibling = o3, i3.last = o3);
            }
            if (i3.tail !== null) {
              e5 = i3.tail;
              e: {
                for (n3 = e5; n3 !== null; ) {
                  if (n3.alternate !== null) {
                    n3 = false;
                    break e;
                  }
                  n3 = n3.sibling;
                }
                n3 = true;
              }
              return i3.rendering = e5, i3.tail = e5.sibling, i3.renderingStartTime = Q(), e5.sibling = null, o3 = Qu.current, o3 = a3 ? o3 & 1 | 2 : o3 & 1, i3.tailMode === `visible` || i3.tailMode === `collapsed` || !n3 || uu ? _t2(t3, o3) : (n3 = o3, p2(Xu, t3), p2(Qu, n3), Zu === null && (Zu = t3)), uu && R2(t3, i3.treeForkCount), e5;
            }
            return Ir2(t3), null;
          case 22:
          case 23:
            return gt2(t3), dt2(), i3 = t3.memoizedState !== null, e5 === null ? i3 && (t3.flags |= 8192) : e5.memoizedState !== null !== i3 && (t3.flags |= 8192), i3 ? n3 & 536870912 && !(t3.flags & 128) && (Ir2(t3), t3.subtreeFlags & 6 && (t3.flags |= 8192)) : Ir2(t3), n3 = t3.updateQueue, n3 !== null && Pr2(t3, n3.retryQueue), n3 = null, e5 !== null && e5.memoizedState !== null && e5.memoizedState.cachePool !== null && (n3 = e5.memoizedState.cachePool.pool), i3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (i3 = t3.memoizedState.cachePool.pool), i3 !== n3 && (t3.flags |= 2048), e5 !== null && f2(Nu), null;
          case 24:
            return n3 = null, e5 !== null && (n3 = e5.memoizedState.cache), t3.memoizedState.cache !== n3 && (t3.flags |= 2048), fe2(bu), Ir2(t3), null;
          case 25:
            return null;
          case 30:
            return t3.flags |= 33554432, Ir2(t3), null;
        }
        throw Error(r2(156, t3.tag));
      }
      function Rr2(e5, t3) {
        switch (te2(t3), t3.tag) {
          case 1:
            return e5 = t3.flags, e5 & 65536 ? (t3.flags = e5 & -65537 | 128, t3) : null;
          case 3:
            return fe2(bu), H2(), e5 = t3.flags, e5 & 65536 && !(e5 & 128) ? (t3.flags = e5 & -65537 | 128, t3) : null;
          case 26:
          case 27:
          case 5:
            return ie2(t3), null;
          case 31:
            if (t3.memoizedState !== null) {
              if (gt2(t3), t3.alternate === null) throw Error(r2(340));
              ce2();
            }
            return e5 = t3.flags, e5 & 65536 ? (t3.flags = e5 & -65537 | 128, t3) : null;
          case 13:
            if (gt2(t3), e5 = t3.memoizedState, e5 !== null && e5.dehydrated !== null) {
              if (t3.alternate === null) throw Error(r2(340));
              ce2();
            }
            return e5 = t3.flags, e5 & 65536 ? (t3.flags = e5 & -65537 | 128, t3) : null;
          case 19:
            return vt2(t3), e5 = t3.flags, e5 & 65536 ? (t3.flags = e5 & -65537 | 128, e5 = t3.memoizedState, e5 !== null && (e5.rendering = null, e5.tail = null), t3.flags |= 4, t3) : null;
          case 4:
            return H2(), null;
          case 10:
            return fe2(t3.type), null;
          case 22:
          case 23:
            return gt2(t3), dt2(), e5 !== null && f2(Nu), e5 = t3.flags, e5 & 65536 ? (t3.flags = e5 & -65537 | 128, t3) : null;
          case 24:
            return fe2(bu), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function zr2(e5, t3) {
        switch (te2(t3), t3.tag) {
          case 3:
            fe2(bu), H2();
            break;
          case 26:
          case 27:
          case 5:
            ie2(t3);
            break;
          case 4:
            H2();
            break;
          case 31:
            t3.memoizedState !== null && gt2(t3);
            break;
          case 13:
            gt2(t3);
            break;
          case 19:
            vt2(t3);
            break;
          case 10:
            fe2(t3.type);
            break;
          case 22:
          case 23:
            gt2(t3), dt2(), e5 !== null && f2(Nu);
            break;
          case 24:
            fe2(bu);
        }
      }
      function Br2(e5, t3) {
        try {
          var n3 = t3.updateQueue, r3 = n3 === null ? null : n3.lastEffect;
          if (r3 !== null) {
            var i3 = r3.next;
            n3 = i3;
            do {
              if ((n3.tag & e5) === e5) {
                r3 = void 0;
                var a3 = n3.create, o3 = n3.inst;
                r3 = a3(), o3.destroy = r3;
              }
              n3 = n3.next;
            } while (n3 !== i3);
          }
        } catch (e6) {
          Ha2(t3, t3.return, e6);
        }
      }
      function Vr2(e5, t3, n3) {
        try {
          var r3 = t3.updateQueue, i3 = r3 === null ? null : r3.lastEffect;
          if (i3 !== null) {
            var a3 = i3.next;
            r3 = a3;
            do {
              if ((r3.tag & e5) === e5) {
                var o3 = r3.inst, s3 = o3.destroy;
                if (s3 !== void 0) {
                  o3.destroy = void 0, i3 = t3;
                  var c3 = n3, l3 = s3;
                  try {
                    l3();
                  } catch (e6) {
                    Ha2(i3, c3, e6);
                  }
                }
              }
              r3 = r3.next;
            } while (r3 !== a3);
          }
        } catch (e6) {
          Ha2(t3, t3.return, e6);
        }
      }
      function Hr2(e5) {
        var t3 = e5.updateQueue;
        if (t3 !== null) {
          var n3 = e5.stateNode;
          try {
            ct2(t3, n3);
          } catch (t4) {
            Ha2(e5, e5.return, t4);
          }
        }
      }
      function Ur2(e5, t3, n3) {
        n3.props = Bn2(e5.type, e5.memoizedProps), n3.state = e5.memoizedState;
        try {
          n3.componentWillUnmount();
        } catch (n4) {
          Ha2(e5, t3, n4);
        }
      }
      function Wr2(e5, t3) {
        try {
          var n3 = e5.ref;
          if (n3 !== null) {
            switch (e5.tag) {
              case 26:
              case 27:
              case 5:
                var r3 = Vo2(e5.stateNode);
                break;
              case 30:
                var i3 = e5.stateNode, a3 = A2(e5.memoizedProps, i3);
                (i3.ref === null || i3.ref.name !== a3) && (i3.ref = ac2(a3)), r3 = i3.ref;
                break;
              case 7:
                e5.stateNode === null && (e5.stateNode = sc2(e5)), r3 = e5.stateNode;
                break;
              default:
                r3 = e5.stateNode;
            }
            typeof n3 == `function` ? e5.refCleanup = n3(r3) : n3.current = r3;
          }
        } catch (n4) {
          Ha2(e5, t3, n4);
        }
      }
      function Gr2(e5, t3) {
        var n3 = e5.ref, r3 = e5.refCleanup;
        if (n3 !== null) {
          if (typeof r3 == `function`) try {
            r3();
          } catch (n4) {
            Ha2(e5, t3, n4);
          } finally {
            e5.refCleanup = null, e5 = e5.alternate, e5 != null && (e5.refCleanup = null);
          }
          else if (typeof n3 == `function`) try {
            n3(null);
          } catch (n4) {
            Ha2(e5, t3, n4);
          }
          else n3.current = null;
        }
      }
      function Kr2() {
        var e5 = vd;
        return vd = false, e5;
      }
      function qr2(e5, t3) {
        if ((e5.tag === 5 || e5.tag === 27 || e5.tag === 6) && e5.alternate === null && t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) lc2(e5.stateNode, t3[n3]);
      }
      function Jr2(e5) {
        for (var t3 = e5.return; t3 !== null && (Zr2(t3) && lc2(e5.stateNode, t3.stateNode), !Xr2(t3)); ) t3 = t3.return;
      }
      function Yr2(e5) {
        for (var t3 = e5.return; t3 !== null && (Zr2(t3) && uc2(e5.stateNode, t3.stateNode), !Xr2(t3)); ) t3 = t3.return;
      }
      function Xr2(e5) {
        return e5.tag === 5 || e5.tag === 3 || (ml ? e5.tag === 27 : false);
      }
      function Zr2(e5) {
        return e5 && e5.tag === 7 && e5.stateNode !== null;
      }
      function Qr2(e5) {
        var t3 = e5.type, n3 = e5.memoizedProps, r3 = e5.stateNode;
        try {
          Fs2(r3, t3, n3, e5);
        } catch (t4) {
          Ha2(e5, e5.return, t4);
        }
      }
      function $r2(e5, t3, n3) {
        try {
          Is2(e5.stateNode, e5.type, n3, t3, e5);
        } catch (t4) {
          Ha2(e5, e5.return, t4);
        }
      }
      function ei2(e5) {
        return e5.tag === 5 || e5.tag === 3 || (el2 ? e5.tag === 26 : false) || (ml ? e5.tag === 27 && yl(e5.type) : false) || e5.tag === 4;
      }
      function ti2(e5) {
        e: for (; ; ) {
          for (; e5.sibling === null; ) {
            if (e5.return === null || ei2(e5.return)) return null;
            e5 = e5.return;
          }
          for (e5.sibling.return = e5.return, e5 = e5.sibling; e5.tag !== 5 && e5.tag !== 6 && e5.tag !== 18; ) {
            if (ml && e5.tag === 27 && yl(e5.type) || e5.flags & 2 || e5.child === null || e5.tag === 4) continue e;
            e5.child.return = e5, e5 = e5.child;
          }
          if (!(e5.flags & 2)) return e5.stateNode;
        }
      }
      function ni2(e5, t3, n3, r3) {
        var i3 = e5.tag;
        if (i3 === 5 || i3 === 6) i3 = e5.stateNode, t3 ? Rs2(n3, i3, t3) : Ns2(n3, i3), qr2(e5, r3), vd = true;
        else if (i3 !== 4 && (ml && i3 === 27 && (qr2(e5, r3), r3 = null, yl(e5.type) && (n3 = e5.stateNode, t3 = null)), e5 = e5.child, e5 !== null)) for (ni2(e5, t3, n3, r3), e5 = e5.sibling; e5 !== null; ) ni2(e5, t3, n3, r3), e5 = e5.sibling;
      }
      function ri2(e5, t3, n3, r3) {
        var i3 = e5.tag;
        if (i3 === 5 || i3 === 6) i3 = e5.stateNode, t3 ? Ls2(n3, i3, t3) : Ms2(n3, i3), qr2(e5, r3), vd = true;
        else if (i3 !== 4 && (ml && i3 === 27 && (qr2(e5, r3), r3 = null, yl(e5.type) && (n3 = e5.stateNode)), e5 = e5.child, e5 !== null)) for (ri2(e5, t3, n3, r3), e5 = e5.sibling; e5 !== null; ) ri2(e5, t3, n3, r3), e5 = e5.sibling;
      }
      function ii2(e5, t3) {
        if (e5.tag === 5 || ml && e5.tag === 27) qr2(e5, t3);
        else if (e5.tag !== 4 && (e5 = e5.child, e5 !== null)) for (ii2(e5, t3), e5 = e5.sibling; e5 !== null; ) ii2(e5, t3), e5 = e5.sibling;
      }
      function ai2(e5, t3, n3) {
        e5 = e5.containerInfo;
        try {
          hc2(e5, n3);
        } catch (e6) {
          Ha2(t3, t3.return, e6);
        }
      }
      function oi2(e5) {
        var t3 = e5.stateNode, n3 = e5.memoizedProps;
        try {
          gl(e5.type, n3, t3, e5);
        } catch (t4) {
          Ha2(e5, e5.return, t4);
        }
      }
      function si2(e5) {
        (e5.tag === 30 || e5.subtreeFlags & 33554432) && (yd = true);
      }
      function ci2() {
        var e5 = xd;
        return xd = null, e5;
      }
      function li2(e5, t3, n3, r3, i3) {
        return Sd = 0, ui2(e5.child, t3, n3, r3, i3);
      }
      function ui2(e5, t3, n3, r3, i3) {
        if (!ts2) return false;
        for (var a3 = false; e5 !== null; ) {
          if (e5.tag === 5) {
            var o3 = e5.stateNode;
            if (r3 !== null) {
              var s3 = Zs2(o3);
              r3.push(s3), $s2(s3) && (a3 = true);
            } else a3 || $s2(Zs2(o3)) && (a3 = true);
            yd = true, Ks2(o3, Sd === 0 ? t3 : t3 + `_` + Sd, n3), Sd++;
          } else e5.tag === 22 && e5.memoizedState !== null || e5.tag === 30 && i3 || ui2(e5.child, t3, n3, r3, i3) && (a3 = true);
          e5 = e5.sibling;
        }
        return a3;
      }
      function di2(e5, t3) {
        if (ts2) for (; e5 !== null; ) e5.tag === 5 ? qs2(e5.stateNode, e5.memoizedProps) : e5.tag === 22 && e5.memoizedState !== null || e5.tag === 30 && t3 || di2(e5.child, t3), e5 = e5.sibling;
      }
      function fi2(e5) {
        if (e5.subtreeFlags & 18874368) for (e5 = e5.child; e5 !== null; ) {
          if ((e5.tag !== 22 || e5.memoizedState === null) && (fi2(e5), e5.tag === 30 && e5.flags & 18874368 && e5.stateNode.paired)) {
            var t3 = e5.memoizedProps;
            if (t3.name == null || t3.name === `auto`) throw Error(r2(544));
            var n3 = t3.name;
            t3 = M2(t3.default, t3.share), t3 !== `none` && (li2(e5, n3, t3, null, false) || di2(e5.child, false));
          }
          e5 = e5.sibling;
        }
      }
      function pi2(e5, t3) {
        if (e5.tag === 30) {
          var n3 = e5.stateNode, r3 = e5.memoizedProps, i3 = A2(r3, n3), a3 = M2(r3.default, n3.paired ? r3.share : r3.enter);
          a3 === `none` ? fi2(e5) : li2(e5, i3, a3, null, false) ? (fi2(e5), n3.paired || t3 || ua2(e5, r3.onEnter)) : di2(e5.child, false);
        } else if (e5.subtreeFlags & 33554432) for (e5 = e5.child; e5 !== null; ) pi2(e5, t3), e5 = e5.sibling;
        else fi2(e5);
      }
      function mi2(e5) {
        if (bd !== null && bd.size !== 0) {
          var t3 = bd;
          if (e5.subtreeFlags & 18874368) for (e5 = e5.child; e5 !== null; ) {
            if (e5.tag !== 22 || e5.memoizedState === null) {
              if (e5.tag === 30 && e5.flags & 18874368) {
                var n3 = e5.memoizedProps, r3 = n3.name;
                if (r3 != null && r3 !== `auto`) {
                  var i3 = t3.get(r3);
                  if (i3 !== void 0) {
                    var a3 = M2(n3.default, n3.share);
                    if (a3 !== `none` && (li2(e5, r3, a3, null, false) ? (a3 = e5.stateNode, i3.paired = a3, a3.paired = i3, ua2(e5, n3.onShare)) : di2(e5.child, false)), t3.delete(r3), t3.size === 0) break;
                  }
                }
              }
              mi2(e5);
            }
            e5 = e5.sibling;
          }
        }
      }
      function hi2(e5) {
        if (e5.tag === 30) {
          var t3 = e5.memoizedProps, n3 = A2(t3, e5.stateNode), r3 = bd === null ? void 0 : bd.get(n3), i3 = M2(t3.default, r3 === void 0 ? t3.exit : t3.share);
          i3 !== `none` && (li2(e5, n3, i3, null, false) ? r3 === void 0 ? ua2(e5, t3.onExit) : (i3 = e5.stateNode, r3.paired = i3, i3.paired = r3, bd.delete(n3), ua2(e5, t3.onShare)) : di2(e5.child, false)), bd !== null && mi2(e5);
        } else if (e5.subtreeFlags & 33554432) for (e5 = e5.child; e5 !== null; ) hi2(e5), e5 = e5.sibling;
        else bd !== null && mi2(e5);
      }
      function gi2(e5) {
        for (e5 = e5.child; e5 !== null; ) {
          if (e5.tag === 30) {
            var t3 = e5.memoizedProps, n3 = A2(t3, e5.stateNode);
            t3 = M2(t3.default, t3.update), e5.flags &= -5, t3 !== `none` && li2(e5, n3, t3, e5.memoizedState = [], false);
          } else e5.subtreeFlags & 33554432 && gi2(e5);
          e5 = e5.sibling;
        }
      }
      function _i2(e5) {
        if (e5.subtreeFlags & 18874368) for (e5 = e5.child; e5 !== null; ) {
          if (e5.tag !== 22 || e5.memoizedState === null) {
            if (e5.tag === 30 && e5.flags & 18874368) {
              var t3 = e5.stateNode;
              t3.paired !== null && (t3.paired = null, di2(e5.child, false));
            }
            _i2(e5);
          }
          e5 = e5.sibling;
        }
      }
      function vi2(e5) {
        if (e5.tag === 30) e5.stateNode.paired = null, di2(e5.child, false), _i2(e5);
        else if (e5.subtreeFlags & 33554432) for (e5 = e5.child; e5 !== null; ) vi2(e5), e5 = e5.sibling;
        else _i2(e5);
      }
      function yi2(e5) {
        for (e5 = e5.child; e5 !== null; ) e5.tag === 30 ? di2(e5.child, false) : e5.subtreeFlags & 33554432 && yi2(e5), e5 = e5.sibling;
      }
      function bi2(e5, t3, n3, r3, i3, a3, o3) {
        if (!ts2) return false;
        for (var s3 = false; t3 !== null; ) {
          if (t3.tag === 5) {
            var c3 = t3.stateNode;
            if (a3 !== null && Sd < a3.length) {
              var l3 = a3[Sd], u3 = Zs2(c3);
              ($s2(l3) || $s2(u3)) && (s3 = true), !(e5.flags & 4) && ec2(l3, u3) && (e5.flags |= 4), tc2(l3, u3) && (e5.flags |= 32);
            } else e5.flags |= 32;
            e5.flags & 4 && Ks2(c3, Sd === 0 ? n3 : n3 + `_` + Sd, i3), s3 && e5.flags & 4 || (xd === null && (xd = []), xd.push(c3, Sd === 0 ? r3 : r3 + `_` + Sd, t3.memoizedProps)), Sd++;
          } else (t3.tag !== 22 || t3.memoizedState === null) && (t3.tag === 30 && o3 ? e5.flags |= t3.flags & 32 : bi2(e5, t3.child, n3, r3, i3, a3, o3) && (s3 = true));
          t3 = t3.sibling;
        }
        return s3;
      }
      function xi2(e5, t3) {
        for (e5 = e5.child; e5 !== null; ) {
          if (e5.tag === 30) {
            var n3 = e5.memoizedProps, r3 = e5.stateNode, i3 = A2(n3, r3), a3 = M2(n3.default, n3.update);
            if (t3) {
              r3 = r3.clones;
              var o3 = r3 === null ? null : r3.map(Qs2);
            } else o3 = e5.memoizedState, e5.memoizedState = null;
            r3 = e5;
            var s3 = e5.child;
            Sd = 0, i3 = bi2(r3, s3, i3, i3, a3, o3, false), e5.flags & 4 && i3 && (t3 || ua2(e5, n3.onUpdate));
          } else e5.subtreeFlags & 33554432 && xi2(e5, t3);
          e5 = e5.sibling;
        }
      }
      function Si2(e5, t3, n3) {
        for (Wo2(e5.containerInfo), e5 = (n3 & 335544064) === n3, Od = t3, t3 = e5 ? 9270 : 1024; Od !== null; ) {
          if (n3 = Od, e5) {
            var r3 = n3.deletions;
            if (r3 !== null) for (var i3 = 0; i3 < r3.length; i3++) e5 && hi2(r3[i3]);
          }
          if (n3.alternate === null && n3.flags & 2) e5 && si2(n3), Ci2(e5);
          else {
            if (n3.tag === 22) {
              if (r3 = n3.alternate, n3.memoizedState !== null) {
                r3 !== null && r3.memoizedState === null && e5 && hi2(r3), Ci2(e5);
                continue;
              }
              if (r3 !== null && r3.memoizedState !== null) {
                e5 && si2(n3), Ci2(e5);
                continue;
              }
            }
            r3 = n3.child, (n3.subtreeFlags & t3) !== 0 && r3 !== null ? (r3.return = n3, Od = r3) : (e5 && gi2(n3), Ci2(e5));
          }
        }
        bd = null;
      }
      function Ci2(e5) {
        for (; Od !== null; ) {
          var t3 = Od, n3 = e5, i3 = t3.alternate, a3 = t3.flags;
          switch (t3.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (a3 & 1024 && i3 !== null) {
                n3 = void 0, a3 = i3.memoizedProps, i3 = i3.memoizedState;
                var o3 = t3.stateNode;
                try {
                  var s3 = Bn2(t3.type, a3);
                  n3 = o3.getSnapshotBeforeUpdate(s3, i3), o3.__reactInternalSnapshotBeforeUpdate = n3;
                } catch (e6) {
                  Ha2(t3, t3.return, e6);
                }
              }
              break;
            case 3:
              a3 & 1024 && ts2 && oc2(t3.stateNode.containerInfo);
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            case 30:
              n3 && i3 !== null && (n3 = A2(i3.memoizedProps, i3.stateNode), a3 = t3.memoizedProps, a3 = M2(a3.default, a3.update), a3 !== `none` && li2(i3, n3, a3, i3.memoizedState = [], true));
              break;
            default:
              if (a3 & 1024) throw Error(r2(163));
          }
          if (i3 = t3.sibling, i3 !== null) {
            i3.return = t3.return, Od = i3;
            break;
          }
          Od = t3.return;
        }
      }
      function wi2(e5, t3, n3) {
        var r3 = n3.flags;
        switch (n3.tag) {
          case 0:
          case 11:
          case 15:
            Vi(e5, n3), r3 & 4 && Br2(5, n3);
            break;
          case 1:
            if (Vi(e5, n3), r3 & 4) {
              if (e5 = n3.stateNode, t3 === null) try {
                e5.componentDidMount();
              } catch (e6) {
                Ha2(n3, n3.return, e6);
              }
              else {
                var i3 = Bn2(n3.type, t3.memoizedProps);
                t3 = t3.memoizedState;
                try {
                  e5.componentDidUpdate(i3, t3, e5.__reactInternalSnapshotBeforeUpdate);
                } catch (e6) {
                  Ha2(n3, n3.return, e6);
                }
              }
            }
            r3 & 64 && Hr2(n3), r3 & 512 && Wr2(n3, n3.return);
            break;
          case 3:
            if (Vi(e5, n3), r3 & 64 && (r3 = n3.updateQueue, r3 !== null)) {
              if (e5 = null, n3.child !== null) switch (n3.child.tag) {
                case 27:
                case 5:
                  e5 = Vo2(n3.child.stateNode);
                  break;
                case 1:
                  e5 = n3.child.stateNode;
              }
              try {
                ct2(r3, e5);
              } catch (e6) {
                Ha2(n3, n3.return, e6);
              }
            }
            break;
          case 27:
            ml && t3 === null && r3 & 4 && oi2(n3);
          case 26:
          case 5:
            if (Vi(e5, n3), t3 === null) {
              if (r3 & 4) Qr2(n3);
              else if (r3 & 64) {
                e5 = n3.type, t3 = n3.memoizedProps, i3 = n3.stateNode;
                try {
                  Vc2(i3, e5, t3, n3);
                } catch (e6) {
                  Ha2(n3, n3.return, e6);
                }
              }
            }
            r3 & 512 && Wr2(n3, n3.return);
            break;
          case 12:
            Vi(e5, n3);
            break;
          case 31:
            Vi(e5, n3), r3 & 4 && ji2(e5, n3);
            break;
          case 13:
            Vi(e5, n3), r3 & 4 && Mi2(e5, n3), r3 & 64 && (r3 = n3.memoizedState, r3 !== null && (r3 = r3.dehydrated, r3 !== null && (n3 = Ka2.bind(null, n3), xc2(r3, n3))));
            break;
          case 22:
            if (r3 = n3.memoizedState !== null || Cd, !r3) {
              var a3 = t3 !== null && t3.memoizedState !== null || wd;
              t3 = Cd, i3 = wd, Cd = r3, (wd = a3) && !i3 ? (r3 = ml ? 2 : 0, n3.subtreeFlags & 8772 && (r3 |= 1), Ui(e5, n3, r3)) : Vi(e5, n3), Cd = t3, wd = i3;
            }
            break;
          case 30:
            Vi(e5, n3), r3 & 512 && Wr2(n3, n3.return);
            break;
          case 7:
            r3 & 512 && Wr2(n3, n3.return);
          default:
            Vi(e5, n3);
        }
      }
      function Ti2(e5, t3) {
        if (ts2) for (e5 = e5.child; e5 !== null; ) Ei2(e5, t3), e5 = e5.sibling;
      }
      function Ei2(e5, t3) {
        if (ts2) switch (e5.tag) {
          case 5:
          case 26:
            try {
              var n3 = e5.stateNode;
              t3 ? Hs2(n3) : Ws2(e5.stateNode, e5.memoizedProps);
            } catch (t4) {
              Ha2(e5, e5.return, t4);
            }
            Di2(e5, t3);
            break;
          case 6:
            try {
              var r3 = e5.stateNode;
              t3 ? Us2(r3) : Gs2(r3, e5.memoizedProps), vd = true;
            } catch (t4) {
              Ha2(e5, e5.return, t4);
            }
            break;
          case 18:
            try {
              var i3 = e5.stateNode;
              t3 ? Yc2(i3) : Xc2(e5.stateNode);
            } catch (t4) {
              Ha2(e5, e5.return, t4);
            }
            break;
          case 22:
          case 23:
            e5.memoizedState === null && Ti2(e5, t3);
            break;
          default:
            Ti2(e5, t3);
        }
      }
      function Di2(e5, t3) {
        if (ts2 && e5.subtreeFlags & 67108864) for (e5 = e5.child; e5 !== null; ) {
          var n3 = e5, r3 = t3;
          if (ts2) switch (n3.tag) {
            case 4:
              Ei2(n3, r3);
              break;
            case 22:
              n3.memoizedState === null && Di2(n3, r3);
              break;
            default:
              Di2(n3, r3);
          }
          e5 = e5.sibling;
        }
      }
      function Oi2(e5) {
        var t3 = e5.alternate;
        t3 !== null && (e5.alternate = null, Oi2(t3)), e5.child = null, e5.deletions = null, e5.sibling = null, e5.tag === 5 && (t3 = e5.stateNode, t3 !== null && us2(t3)), e5.stateNode = null, e5.return = null, e5.dependencies = null, e5.memoizedProps = null, e5.memoizedState = null, e5.pendingProps = null, e5.stateNode = null, e5.updateQueue = null;
      }
      function ki2(e5, t3, n3) {
        for (n3 = n3.child; n3 !== null; ) Ai2(e5, t3, n3), n3 = n3.sibling;
      }
      function Ai2(e5, t3, n3) {
        if (Bl && typeof Bl.onCommitFiberUnmount == `function`) try {
          Bl.onCommitFiberUnmount(zl, n3);
        } catch {
        }
        switch (n3.tag) {
          case 26:
            if (el2) {
              wd || Gr2(n3, t3), ki2(e5, t3, n3), n3.memoizedState ? al(n3.memoizedState) : n3.stateNode && (wd || cl(n3.stateNode));
              break;
            }
          case 27:
            if (ml) {
              wd || Gr2(n3, t3), Yr2(n3);
              var r3 = $, i3 = Nd;
              yl(n3.type) && ($ = n3.stateNode, Nd = false), ki2(e5, t3, n3), _l(n3.stateNode, n3.type, n3.memoizedProps), $ = r3, Nd = i3;
              break;
            }
          case 5:
            wd || Gr2(n3, t3), Yr2(n3);
          case 6:
            if (n3.tag === 6 && Yr2(n3), ts2) {
              if (r3 = $, i3 = Nd, $ = null, ki2(e5, t3, n3), $ = r3, Nd = i3, $ !== null) {
                if (Nd) try {
                  Bs2($, n3.stateNode), vd = true;
                } catch (e6) {
                  Ha2(n3, t3, e6);
                }
                else try {
                  zs2($, n3.stateNode), vd = true;
                } catch (e6) {
                  Ha2(n3, t3, e6);
                }
              }
            } else ki2(e5, t3, n3);
            break;
          case 18:
            ts2 && $ !== null && (Nd ? Jc2($, n3.stateNode) : qc2($, n3.stateNode));
            break;
          case 4:
            ts2 ? (r3 = $, i3 = Nd, $ = n3.stateNode.containerInfo, Nd = true, ki2(e5, t3, n3), $ = r3, Nd = i3) : (ns2 && ai2(n3.stateNode, n3, fc2()), ki2(e5, t3, n3));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Vr2(2, n3, t3), wd || Vr2(4, n3, t3), ki2(e5, t3, n3);
            break;
          case 1:
            wd || (Gr2(n3, t3), r3 = n3.stateNode, typeof r3.componentWillUnmount == `function` && Ur2(n3, t3, r3)), ki2(e5, t3, n3);
            break;
          case 21:
            ki2(e5, t3, n3);
            break;
          case 22:
            wd = (r3 = wd) || n3.memoizedState !== null, ki2(e5, t3, n3), wd = r3;
            break;
          case 30:
            Gr2(n3, t3), ki2(e5, t3, n3);
            break;
          case 7:
            wd || Gr2(n3, t3), ki2(e5, t3, n3);
            break;
          default:
            ki2(e5, t3, n3);
        }
      }
      function ji2(e5, t3) {
        if (rs2 && t3.memoizedState === null && (e5 = t3.alternate, e5 !== null && (e5 = e5.memoizedState, e5 !== null))) {
          e5 = e5.dehydrated;
          try {
            Uc2(e5);
          } catch (e6) {
            Ha2(t3, t3.return, e6);
          }
        }
      }
      function Mi2(e5, t3) {
        if (rs2 && t3.memoizedState === null && (e5 = t3.alternate, e5 !== null && (e5 = e5.memoizedState, e5 !== null && (e5 = e5.dehydrated, e5 !== null)))) try {
          Wc2(e5);
        } catch (e6) {
          Ha2(t3, t3.return, e6);
        }
      }
      function Ni2(e5) {
        switch (e5.tag) {
          case 31:
          case 13:
          case 19:
            var t3 = e5.stateNode;
            return t3 === null && (t3 = e5.stateNode = new Dd()), t3;
          case 22:
            return e5 = e5.stateNode, t3 = e5._retryCache, t3 === null && (t3 = e5._retryCache = new Dd()), t3;
          default:
            throw Error(r2(435, e5.tag));
        }
      }
      function Pi2(e5, t3) {
        var n3 = Ni2(e5);
        t3.forEach(function(t4) {
          if (!n3.has(t4)) {
            n3.add(t4);
            var r3 = qa2.bind(null, e5, t4);
            t4.then(r3, r3);
          }
        });
      }
      function Fi2(e5, t3, n3) {
        var i3 = t3.deletions;
        if (i3 !== null) for (var a3 = 0; a3 < i3.length; a3++) {
          var o3 = i3[a3], s3 = e5, c3 = t3;
          if (ts2) {
            var l3 = c3;
            e: for (; l3 !== null; ) {
              switch (l3.tag) {
                case 27:
                  if (ml) {
                    if (yl(l3.type)) {
                      $ = l3.stateNode, Nd = false;
                      break e;
                    }
                    break;
                  }
                case 5:
                  $ = l3.stateNode, Nd = false;
                  break e;
                case 3:
                case 4:
                  $ = l3.stateNode.containerInfo, Nd = true;
                  break e;
              }
              l3 = l3.return;
            }
            if ($ === null) throw Error(r2(160));
            Ai2(s3, c3, o3), $ = null, Nd = false;
          } else Ai2(s3, c3, o3);
          s3 = o3.alternate, s3 !== null && (s3.return = null), o3.return = null;
        }
        if (t3.subtreeFlags & 13886) for (t3 = t3.child; t3 !== null; ) Ii2(t3, e5, n3), t3 = t3.sibling;
      }
      function Ii2(e5, t3, n3) {
        var i3 = e5.alternate, a3 = e5.flags;
        switch (e5.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (a3 & 4 && (i3 = e5.updateQueue, i3 = i3 === null ? null : i3.events, i3 !== null)) for (var o3 = 0; o3 < i3.length; o3++) {
              var s3 = i3[o3];
              s3.ref.impl = s3.nextImpl;
            }
            Fi2(t3, e5, n3), Li2(e5), a3 & 4 && (Vr2(3, e5, e5.return), Br2(3, e5), Vr2(5, e5, e5.return));
            break;
          case 1:
            Fi2(t3, e5, n3), Li2(e5), a3 & 512 && (wd || i3 === null || Gr2(i3, i3.return)), a3 & 64 && Cd && (e5 = e5.updateQueue, e5 !== null && (t3 = e5.callbacks, t3 !== null && (a3 = e5.shared.hiddenCallbacks, e5.shared.hiddenCallbacks = a3 === null ? t3 : a3.concat(t3))));
            break;
          case 26:
            if (el2) {
              o3 = Pd, Fi2(t3, e5, n3), Li2(e5), a3 & 512 && (wd || i3 === null || Gr2(i3, i3.return)), a3 & 4 && (n3 = i3 === null ? null : i3.memoizedState, a3 = e5.memoizedState, i3 === null ? a3 === null ? e5.stateNode === null ? e5.stateNode = Cd ? ll(e5.type, e5.memoizedProps, t3.containerInfo, e5) : ol(o3, e5.type, e5.memoizedProps, e5) : Cd || sl(o3, e5.type, e5.stateNode) : e5.stateNode = il(o3, a3, e5.memoizedProps) : n3 === a3 ? a3 === null && e5.stateNode !== null && $r2(e5, e5.memoizedProps, i3.memoizedProps) : (n3 === null ? (t3 = i3.stateNode, t3 === null || wd || cl(t3)) : al(n3), a3 === null ? Cd || sl(o3, e5.type, e5.stateNode) : il(o3, a3, e5.memoizedProps)));
              break;
            }
          case 27:
            if (ml) {
              Fi2(t3, e5, n3), Li2(e5), a3 & 512 && (wd || i3 === null || Gr2(i3, i3.return)), i3 !== null && a3 & 4 && $r2(e5, e5.memoizedProps, i3.memoizedProps);
              break;
            }
          case 5:
            if (o3 = Td, Td = false, Fi2(t3, e5, n3), Td = o3, Li2(e5), a3 & 512 && (wd || i3 === null || Gr2(i3, i3.return)), ts2) {
              if (e5.flags & 32) {
                t3 = e5.stateNode;
                try {
                  Vs2(t3), vd = true;
                } catch (t4) {
                  Ha2(e5, e5.return, t4);
                }
              }
              a3 & 4 && e5.stateNode != null && (t3 = e5.memoizedProps, $r2(e5, t3, i3 === null ? t3 : i3.memoizedProps)), a3 & 1024 && (Ed = true);
            } else ns2 && e5.alternate !== null && (e5.alternate.stateNode = e5.stateNode);
            break;
          case 6:
            if (Fi2(t3, e5, n3), Li2(e5), a3 & 4 && ts2) {
              if (e5.stateNode === null) throw Error(r2(162));
              t3 = e5.memoizedProps, a3 = i3 === null ? t3 : i3.memoizedProps, n3 = e5.stateNode;
              try {
                Ps2(n3, a3, t3), vd = true;
              } catch (t4) {
                Ha2(e5, e5.return, t4);
              }
            }
            break;
          case 3:
            if (vd = false, el2 ? (ul(), o3 = Pd, Pd = nl2(t3.containerInfo), Fi2(t3, e5, n3), Pd = o3) : Fi2(t3, e5, n3), Li2(e5), a3 & 4) {
              if (ts2 && rs2 && i3 !== null && i3.memoizedState.isDehydrated) try {
                Hc2(t3.containerInfo);
              } catch (t4) {
                Ha2(e5, e5.return, t4);
              }
              if (ns2) {
                a3 = t3.containerInfo, t3 = t3.pendingChildren;
                try {
                  hc2(a3, t3), vd = true;
                } catch (t4) {
                  Ha2(e5, e5.return, t4);
                }
              }
            }
            Ed && (Ed = false, Ri2(e5)), vd = false;
            break;
          case 4:
            i3 = Td, Td = Cd, o3 = Kr2(), el2 ? (s3 = Pd, Pd = nl2(e5.stateNode.containerInfo), Fi2(t3, e5, n3), Li2(e5), Pd = s3) : (Fi2(t3, e5, n3), Li2(e5)), vd && Ad && (jd = true), vd = o3, Td = i3, a3 & 4 && ns2 && ai2(e5.stateNode, e5, e5.stateNode.pendingChildren);
            break;
          case 12:
            Fi2(t3, e5, n3), Li2(e5);
            break;
          case 31:
            Fi2(t3, e5, n3), Li2(e5), a3 & 4 && (t3 = e5.updateQueue, t3 !== null && (e5.updateQueue = null, Pi2(e5, t3)));
            break;
          case 13:
            Fi2(t3, e5, n3), Li2(e5), e5.child.flags & 8192 && e5.memoizedState !== null != (i3 !== null && i3.memoizedState !== null) && (uf = Q()), a3 & 4 && (t3 = e5.updateQueue, t3 !== null && (e5.updateQueue = null, Pi2(e5, t3)));
            break;
          case 22:
            o3 = e5.memoizedState !== null, s3 = i3 !== null && i3.memoizedState !== null;
            var c3 = Cd, l3 = wd, u3 = Td;
            Cd = c3 || o3, Td = u3 || o3, wd = l3 || s3, Fi2(t3, e5, n3), wd = l3, Td = u3, Cd = c3, Li2(e5), a3 & 8192 && (t3 = e5.stateNode, t3._visibility = o3 ? t3._visibility & -2 : t3._visibility | 1, !o3 || i3 === null || s3 || Cd || wd || (t3 = ml ? 2 : 0, n3 = s3 || wd, i3 = Cd, s3 = wd, Cd = o3 || Cd, wd = n3, Hi(e5, t3), Cd = i3, wd = s3), ts2 && (o3 || !Td) && Ti2(e5, o3)), a3 & 4 && (t3 = e5.updateQueue, t3 !== null && (a3 = t3.retryQueue, a3 !== null && (t3.retryQueue = null, Pi2(e5, a3))));
            break;
          case 19:
            Fi2(t3, e5, n3), Li2(e5), a3 & 4 && (t3 = e5.updateQueue, t3 !== null && (e5.updateQueue = null, Pi2(e5, t3)));
            break;
          case 30:
            a3 & 512 && (wd || i3 === null || Gr2(i3, i3.return)), a3 = Kr2(), o3 = Ad, s3 = (n3 & 335544064) === n3, c3 = e5.memoizedProps, Ad = s3 && M2(c3.default, c3.update) !== `none`, Fi2(t3, e5, n3), Li2(e5), s3 && i3 !== null && vd && (e5.flags |= 4), Ad = o3, vd = a3;
            break;
          case 21:
            break;
          case 7:
            a3 & 512 && (wd || i3 === null || Gr2(i3, i3.return)), i3 && i3.stateNode !== null && cc2(e5, i3.stateNode);
          default:
            Fi2(t3, e5, n3), Li2(e5);
        }
      }
      function Li2(e5) {
        var t3 = e5.flags;
        if (t3 & 2) {
          try {
            for (var n3, i3 = e5.return; i3 !== null; ) {
              if (ei2(i3)) {
                n3 = i3;
                break;
              }
              i3 = i3.return;
            }
            i3 = null;
            for (var a3 = e5.return; a3 !== null; ) {
              if (Zr2(a3)) {
                var o3 = a3.stateNode;
                i3 === null ? i3 = [o3] : i3.push(o3);
              }
              if (Xr2(a3)) break;
              a3 = a3.return;
            }
            var s3 = i3;
            if (ts2) {
              if (n3 == null) throw Error(r2(160));
              switch (n3.tag) {
                case 27:
                  if (ml) {
                    var c3 = n3.stateNode;
                    ri2(e5, ti2(e5), c3, s3);
                    break;
                  }
                case 5:
                  var l3 = n3.stateNode;
                  n3.flags & 32 && (Vs2(l3), n3.flags &= -33), ri2(e5, ti2(e5), l3, s3);
                  break;
                case 3:
                case 4:
                  var u3 = n3.stateNode.containerInfo;
                  ni2(e5, ti2(e5), u3, s3);
                  break;
                default:
                  throw Error(r2(161));
              }
            } else ii2(e5, s3);
          } catch (t4) {
            Ha2(e5, e5.return, t4);
          }
          e5.flags &= -3;
        }
        t3 & 4096 && (e5.flags &= -4097);
      }
      function Ri2(e5) {
        if (e5.subtreeFlags & 1024) for (e5 = e5.child; e5 !== null; ) {
          var t3 = e5;
          Ri2(t3), t3.tag === 5 && t3.flags & 1024 && xs2(t3.stateNode), e5 = e5.sibling;
        }
      }
      function zi2(e5, t3) {
        if (t3.subtreeFlags & 9270) for (t3 = t3.child; t3 !== null; ) Bi(t3, e5), t3 = t3.sibling;
        else xi2(t3, false);
      }
      function Bi(e5, t3) {
        var n3 = e5.alternate;
        if (n3 === null) pi2(e5, false);
        else switch (e5.tag) {
          case 3:
            if (Md = kd = false, ci2(), zi2(t3, e5), !kd && !jd) {
              if (e5 = xd, e5 !== null) for (var r3 = 0; r3 < e5.length; r3 += 3) Js2(e5[r3], e5[r3 + 1], e5[r3 + 2]);
              Ys2(t3.containerInfo), Md = true;
            }
            xd = null;
            break;
          case 5:
            zi2(t3, e5);
            break;
          case 4:
            r3 = kd, kd = false, zi2(t3, e5), kd && (jd = true), kd = r3;
            break;
          case 22:
            e5.memoizedState === null && (n3.memoizedState === null ? zi2(t3, e5) : pi2(e5, false));
            break;
          case 30:
            r3 = kd;
            var i3 = ci2();
            kd = false, zi2(t3, e5), kd && (e5.flags |= 4);
            var a3 = e5.memoizedProps, o3 = e5.stateNode;
            t3 = A2(a3, o3), o3 = A2(n3.memoizedProps, o3);
            var s3 = M2(a3.default, a3.update);
            s3 === `none` ? n3 = false : (a3 = n3.memoizedState, n3.memoizedState = null, n3 = e5.child, Sd = 0, n3 = bi2(e5, n3, t3, o3, s3, a3, true), Sd !== (a3 === null ? 0 : a3.length) && (e5.flags |= 32)), e5.flags & 4 && n3 ? (ua2(e5, e5.memoizedProps.onUpdate), xd = i3) : i3 !== null && (i3.push.apply(i3, xd), xd = i3), kd = e5.flags & 32 ? true : r3;
            break;
          default:
            zi2(t3, e5);
        }
      }
      function Vi(e5, t3) {
        if (t3.subtreeFlags & 8772) for (t3 = t3.child; t3 !== null; ) wi2(e5, t3.alternate, t3), t3 = t3.sibling;
      }
      function Hi(e5, t3) {
        for (e5 = e5.child; e5 !== null; ) {
          var n3 = e5, r3 = t3;
          switch (n3.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Vr2(4, n3, n3.return), Hi(n3, r3);
              break;
            case 1:
              Gr2(n3, n3.return);
              var i3 = n3.stateNode;
              typeof i3.componentWillUnmount == `function` && Ur2(n3, n3.return, i3), Hi(n3, r3);
              break;
            case 27:
              ml && r3 & 2 && _l(n3.stateNode, n3.type, n3.memoizedProps);
            case 5:
              Gr2(n3, n3.return), n3.tag !== 5 && n3.tag !== 27 || Yr2(n3), Hi(n3, r3);
              break;
            case 6:
              Yr2(n3);
              break;
            case 26:
              Gr2(n3, n3.return), el2 && (i3 = n3.stateNode, n3.memoizedState !== null || i3 === null || wd || cl(i3)), Hi(n3, r3);
              break;
            case 22:
              n3.memoizedState === null && Hi(n3, r3);
              break;
            case 30:
              Gr2(n3, n3.return), Hi(n3, r3);
              break;
            case 7:
              Gr2(n3, n3.return);
            default:
              Hi(n3, r3);
          }
          e5 = e5.sibling;
        }
      }
      function Ui(e5, t3, n3) {
        for (n3 = t3.subtreeFlags & 8772 ? n3 : n3 & -2, t3 = t3.child; t3 !== null; ) {
          var r3 = t3.alternate, i3 = e5, a3 = t3, o3 = a3.flags, s3 = !!(n3 & 1);
          switch (a3.tag) {
            case 0:
            case 11:
            case 15:
              Ui(i3, a3, n3), Br2(4, a3);
              break;
            case 1:
              if (Ui(i3, a3, n3), r3 = a3, i3 = r3.stateNode, typeof i3.componentDidMount == `function`) try {
                i3.componentDidMount();
              } catch (e6) {
                Ha2(r3, r3.return, e6);
              }
              if (r3 = a3, i3 = r3.updateQueue, i3 !== null) {
                var c3 = r3.stateNode;
                try {
                  var l3 = i3.shared.hiddenCallbacks;
                  if (l3 !== null) for (i3.shared.hiddenCallbacks = null, i3 = 0; i3 < l3.length; i3++) st2(l3[i3], c3);
                } catch (e6) {
                  Ha2(r3, r3.return, e6);
                }
              }
              s3 && o3 & 64 && Hr2(a3), Wr2(a3, a3.return);
              break;
            case 27:
              ml && n3 & 2 && oi2(a3);
            case 5:
              a3.tag !== 5 && a3.tag !== 27 || Jr2(a3), Ui(i3, a3, n3), s3 && r3 === null && o3 & 4 && Qr2(a3), Wr2(a3, a3.return);
              break;
            case 6:
              Jr2(a3);
              break;
            case 26:
              el2 && (c3 = a3.stateNode, a3.memoizedState !== null || c3 === null || Cd || sl(nl2(c3.ownerDocument), a3.type, c3)), Ui(i3, a3, n3), s3 && r3 === null && o3 & 4 && Qr2(a3), Wr2(a3, a3.return);
              break;
            case 12:
              Ui(i3, a3, n3);
              break;
            case 31:
              Ui(i3, a3, n3), s3 && o3 & 4 && ji2(i3, a3);
              break;
            case 13:
              Ui(i3, a3, n3), s3 && o3 & 4 && Mi2(i3, a3);
              break;
            case 22:
              a3.memoizedState === null && Ui(i3, a3, n3), Wr2(a3, a3.return);
              break;
            case 30:
              Ui(i3, a3, n3), Wr2(a3, a3.return);
              break;
            case 7:
              Wr2(a3, a3.return);
            default:
              Ui(i3, a3, n3);
          }
          t3 = t3.sibling;
        }
      }
      function Wi(e5, t3) {
        var n3 = null;
        e5 !== null && e5.memoizedState !== null && e5.memoizedState.cachePool !== null && (n3 = e5.memoizedState.cachePool.pool), e5 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (e5 = t3.memoizedState.cachePool.pool), e5 !== n3 && (e5 != null && e5.refCount++, n3 != null && xe2(n3));
      }
      function Gi(e5, t3) {
        e5 = null, t3.alternate !== null && (e5 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e5 && (t3.refCount++, e5 != null && xe2(e5));
      }
      function Ki2(e5, t3, n3, r3) {
        var i3 = (n3 & 335544064) === n3;
        if (t3.subtreeFlags & (i3 ? 10262 : 10256)) for (t3 = t3.child; t3 !== null; ) qi2(e5, t3, n3, r3), t3 = t3.sibling;
        else i3 && yi2(t3);
      }
      function qi2(e5, t3, n3, r3) {
        var i3 = (n3 & 335544064) === n3;
        i3 && t3.alternate === null && t3.return !== null && t3.return.alternate !== null && vi2(t3);
        var a3 = t3.flags;
        switch (t3.tag) {
          case 0:
          case 11:
          case 15:
            Ki2(e5, t3, n3, r3), a3 & 2048 && Br2(9, t3);
            break;
          case 1:
            Ki2(e5, t3, n3, r3);
            break;
          case 3:
            Ki2(e5, t3, n3, r3), i3 && ts2 && Md && Xs2(e5.containerInfo), a3 & 2048 && (e5 = null, t3.alternate !== null && (e5 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e5 && (t3.refCount++, e5 != null && xe2(e5)));
            break;
          case 12:
            if (a3 & 2048) {
              Ki2(e5, t3, n3, r3), e5 = t3.stateNode;
              try {
                var o3 = t3.memoizedProps, s3 = o3.id, c3 = o3.onPostCommit;
                typeof c3 == `function` && c3(s3, t3.alternate === null ? `mount` : `update`, e5.passiveEffectDuration, -0);
              } catch (e6) {
                Ha2(t3, t3.return, e6);
              }
            } else Ki2(e5, t3, n3, r3);
            break;
          case 31:
            Ki2(e5, t3, n3, r3);
            break;
          case 13:
            Ki2(e5, t3, n3, r3);
            break;
          case 23:
            break;
          case 22:
            o3 = t3.stateNode, s3 = t3.alternate, t3.memoizedState === null ? (i3 && s3 !== null && s3.memoizedState !== null && vi2(t3), o3._visibility & 2 ? Ki2(e5, t3, n3, r3) : (o3._visibility |= 2, Ji2(e5, t3, n3, r3, !!(t3.subtreeFlags & 10256) || false))) : (i3 && s3 !== null && s3.memoizedState === null && vi2(s3), o3._visibility & 2 ? Ki2(e5, t3, n3, r3) : Yi2(e5, t3)), a3 & 2048 && Wi(s3, t3);
            break;
          case 24:
            Ki2(e5, t3, n3, r3), a3 & 2048 && Gi(t3.alternate, t3);
            break;
          case 30:
            i3 && (i3 = t3.alternate, i3 !== null && (di2(i3.child, true), di2(t3.child, true))), Ki2(e5, t3, n3, r3);
            break;
          default:
            Ki2(e5, t3, n3, r3);
        }
      }
      function Ji2(e5, t3, n3, r3, i3) {
        for (i3 && (i3 = !!(t3.subtreeFlags & 10256) || false), t3 = t3.child; t3 !== null; ) {
          var a3 = e5, o3 = t3, s3 = n3, c3 = r3, l3 = o3.flags;
          switch (o3.tag) {
            case 0:
            case 11:
            case 15:
              Ji2(a3, o3, s3, c3, i3), Br2(8, o3);
              break;
            case 23:
              break;
            case 22:
              var u3 = o3.stateNode;
              o3.memoizedState === null ? (u3._visibility |= 2, Ji2(a3, o3, s3, c3, i3)) : u3._visibility & 2 ? Ji2(a3, o3, s3, c3, i3) : Yi2(a3, o3), i3 && l3 & 2048 && Wi(o3.alternate, o3);
              break;
            case 24:
              Ji2(a3, o3, s3, c3, i3), i3 && l3 & 2048 && Gi(o3.alternate, o3);
              break;
            default:
              Ji2(a3, o3, s3, c3, i3);
          }
          t3 = t3.sibling;
        }
      }
      function Yi2(e5, t3) {
        if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) {
          var n3 = e5, r3 = t3, i3 = r3.flags;
          switch (r3.tag) {
            case 22:
              Yi2(n3, r3), i3 & 2048 && Wi(r3.alternate, r3);
              break;
            case 24:
              Yi2(n3, r3), i3 & 2048 && Gi(r3.alternate, r3);
              break;
            default:
              Yi2(n3, r3);
          }
          t3 = t3.sibling;
        }
      }
      function Xi2(e5, t3, n3) {
        if (e5.subtreeFlags & Fd) for (e5 = e5.child; e5 !== null; ) Zi2(e5, t3, n3), e5 = e5.sibling;
      }
      function Zi2(e5, t3, n3) {
        switch (e5.tag) {
          case 26:
            if (Xi2(e5, t3, n3), e5.flags & Fd) {
              if (e5.memoizedState !== null) pl(n3, Pd, e5.memoizedState, e5.memoizedProps);
              else {
                var r3 = e5.stateNode, i3 = e5.type;
                e5 = e5.memoizedProps, ((t3 & 335544128) === t3 || ps2(i3, e5)) && gs2(n3, r3, i3, e5);
              }
            }
            break;
          case 5:
            Xi2(e5, t3, n3), e5.flags & Fd && (r3 = e5.stateNode, i3 = e5.type, e5 = e5.memoizedProps, ((t3 & 335544128) === t3 || ps2(i3, e5)) && gs2(n3, r3, i3, e5));
            break;
          case 3:
          case 4:
            el2 ? (r3 = Pd, Pd = nl2(e5.stateNode.containerInfo), Xi2(e5, t3, n3), Pd = r3) : Xi2(e5, t3, n3);
            break;
          case 22:
            e5.memoizedState === null && (r3 = e5.alternate, r3 !== null && r3.memoizedState !== null ? (r3 = Fd, Fd = 16777216, Xi2(e5, t3, n3), Fd = r3) : Xi2(e5, t3, n3));
            break;
          case 30:
            (e5.flags & Fd) !== 0 && (r3 = e5.memoizedProps.name, r3 != null && r3 !== `auto` && (i3 = e5.stateNode, i3.paired = null, bd === null && (bd = /* @__PURE__ */ new Map()), bd.set(r3, i3))), Xi2(e5, t3, n3);
            break;
          default:
            Xi2(e5, t3, n3);
        }
      }
      function Qi2(e5) {
        var t3 = e5.alternate;
        if (t3 !== null && (e5 = t3.child, e5 !== null)) {
          t3.child = null;
          do
            t3 = e5.sibling, e5.sibling = null, e5 = t3;
          while (e5 !== null);
        }
      }
      function $i2(e5) {
        var t3 = e5.deletions;
        if (e5.flags & 16) {
          if (t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) {
            var r3 = t3[n3];
            Od = r3, na2(r3, e5);
          }
          Qi2(e5);
        }
        if (e5.subtreeFlags & 10256) for (e5 = e5.child; e5 !== null; ) ea2(e5), e5 = e5.sibling;
      }
      function ea2(e5) {
        switch (e5.tag) {
          case 0:
          case 11:
          case 15:
            $i2(e5), e5.flags & 2048 && Vr2(9, e5, e5.return);
            break;
          case 3:
            $i2(e5);
            break;
          case 12:
            $i2(e5);
            break;
          case 22:
            var t3 = e5.stateNode;
            e5.memoizedState !== null && t3._visibility & 2 && (e5.return === null || e5.return.tag !== 13) ? (t3._visibility &= -3, ta2(e5)) : $i2(e5);
            break;
          default:
            $i2(e5);
        }
      }
      function ta2(e5) {
        var t3 = e5.deletions;
        if (e5.flags & 16) {
          if (t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) {
            var r3 = t3[n3];
            Od = r3, na2(r3, e5);
          }
          Qi2(e5);
        }
        for (e5 = e5.child; e5 !== null; ) {
          switch (t3 = e5, t3.tag) {
            case 0:
            case 11:
            case 15:
              Vr2(8, t3, t3.return), ta2(t3);
              break;
            case 22:
              n3 = t3.stateNode, n3._visibility & 2 && (n3._visibility &= -3, ta2(t3));
              break;
            default:
              ta2(t3);
          }
          e5 = e5.sibling;
        }
      }
      function na2(e5, t3) {
        for (; Od !== null; ) {
          var n3 = Od;
          switch (n3.tag) {
            case 0:
            case 11:
            case 15:
              Vr2(8, n3, t3);
              break;
            case 23:
            case 22:
              if (n3.memoizedState !== null && n3.memoizedState.cachePool !== null) {
                var r3 = n3.memoizedState.cachePool.pool;
                r3 != null && r3.refCount++;
              }
              break;
            case 24:
              xe2(n3.memoizedState.cache);
          }
          if (r3 = n3.child, r3 !== null) r3.return = n3, Od = r3;
          else e: for (n3 = e5; Od !== null; ) {
            r3 = Od;
            var i3 = r3.sibling, a3 = r3.return;
            if (Oi2(r3), r3 === n3) {
              Od = null;
              break e;
            }
            if (i3 !== null) {
              i3.return = a3, Od = i3;
              break e;
            }
            Od = a3;
          }
        }
      }
      function ra2(e5) {
        var t3 = is2(e5);
        if (t3 != null) {
          if (typeof t3.memoizedProps[`data-testname`] != `string`) throw Error(r2(364));
          return t3;
        }
        if (e5 = Ts2(e5), e5 === null) throw Error(r2(362));
        return e5.stateNode.current;
      }
      function ia2(e5, t3) {
        var n3 = e5.tag;
        switch (t3.$$typeof) {
          case Ld:
            if (e5.type === t3.value) return true;
            break;
          case Rd:
            e: {
              for (t3 = t3.value, e5 = [e5, 0], n3 = 0; n3 < e5.length; ) {
                var i3 = e5[n3++], a3 = i3.tag, o3 = e5[n3++], s3 = t3[o3];
                if (a3 !== 5 && a3 !== 26 && a3 !== 27 || !Os2(i3)) {
                  for (; s3 != null && ia2(i3, s3); ) o3++, s3 = t3[o3];
                  if (o3 === t3.length) {
                    t3 = true;
                    break e;
                  }
                  for (i3 = i3.child; i3 !== null; ) e5.push(i3, o3), i3 = i3.sibling;
                }
              }
              t3 = false;
            }
            return t3;
          case zd:
            if ((n3 === 5 || n3 === 26 || n3 === 27) && ks2(e5.stateNode, t3.value)) return true;
            break;
          case Vd:
            if ((n3 === 5 || n3 === 6 || n3 === 26 || n3 === 27) && (e5 = Ds2(e5), e5 !== null && 0 <= e5.indexOf(t3.value))) return true;
            break;
          case Bd:
            if ((n3 === 5 || n3 === 26 || n3 === 27) && (e5 = e5.memoizedProps[`data-testname`], typeof e5 == `string` && e5.toLowerCase() === t3.value.toLowerCase())) return true;
            break;
          default:
            throw Error(r2(365));
        }
        return false;
      }
      function aa2(e5) {
        switch (e5.$$typeof) {
          case Ld:
            return `<` + (u2(e5.value) || `Unknown`) + `>`;
          case Rd:
            return `:has(` + (aa2(e5) || ``) + `)`;
          case zd:
            return `[role="` + e5.value + `"]`;
          case Vd:
            return `"` + e5.value + `"`;
          case Bd:
            return `[data-testname="` + e5.value + `"]`;
          default:
            throw Error(r2(365));
        }
      }
      function oa2(e5, t3) {
        var n3 = [];
        e5 = [e5, 0];
        for (var r3 = 0; r3 < e5.length; ) {
          var i3 = e5[r3++], a3 = i3.tag, o3 = e5[r3++], s3 = t3[o3];
          if (a3 !== 5 && a3 !== 26 && a3 !== 27 || !Os2(i3)) {
            for (; s3 != null && ia2(i3, s3); ) o3++, s3 = t3[o3];
            if (o3 === t3.length) n3.push(i3);
            else for (i3 = i3.child; i3 !== null; ) e5.push(i3, o3), i3 = i3.sibling;
          }
        }
        return n3;
      }
      function sa2(e5, t3) {
        if (!ws2) throw Error(r2(363));
        e5 = ra2(e5), e5 = oa2(e5, t3), t3 = [], e5 = Array.from(e5);
        for (var n3 = 0; n3 < e5.length; ) {
          var i3 = e5[n3++], a3 = i3.tag;
          if (a3 === 5 || a3 === 26 || a3 === 27) Os2(i3) || t3.push(i3.stateNode);
          else for (i3 = i3.child; i3 !== null; ) e5.push(i3), i3 = i3.sibling;
        }
        return t3;
      }
      function ca2() {
        return Wd & 2 && qd !== 0 ? qd & -qd : Z2.T === null ? cs2() : Ne2();
      }
      function la2() {
        if (af === 0) {
          if (!(qd & 536870912) || uu) {
            var e5 = Dl;
            Dl <<= 1, !(Dl & 3932160) && (Dl = 262144), af = e5;
          } else af = 536870912;
        }
        return e5 = Xu.current, e5 !== null && (e5.flags |= 32), af;
      }
      function ua2(e5, t3) {
        if (t3 != null) {
          var n3 = e5.stateNode, r3 = n3.ref;
          r3 === null && (r3 = n3.ref = ac2(A2(e5.memoizedProps, n3))), Cf === null && (Cf = []), Cf.push(t3.bind(null, r3));
        }
      }
      function da2(e5, t3, n3) {
        (e5 === Gd && (Jd === 2 || Jd === 9) || e5.cancelPendingCommit !== null) && (X2(e5, 0), ma2(e5, qd, af, false)), S2(e5, n3), Wd & 2 && e5 === Gd || (e5 === Gd && (!(Wd & 2) && (nf |= n3), ef === 4 && ma2(e5, qd, af, false)), Te2(e5));
      }
      function Y2(e5, t3, n3) {
        if (Wd & 6) throw Error(r2(327));
        var i3 = !n3 && !(t3 & 127) && (t3 & e5.expiredLanes) === 0 || _2(e5, t3), a3 = i3 ? wa2(e5, t3) : Sa2(e5, t3, true), o3 = i3;
        do {
          if (a3 === 0) {
            Zd && !i3 && ma2(e5, t3, 0, false);
            break;
          }
          if (n3 = e5.current.alternate, o3 && !pa2(n3)) a3 = Sa2(e5, t3, false), o3 = false;
          else {
            if (a3 === 2) {
              if (o3 = t3, e5.errorRecoveryDisabledLanes & o3) var s3 = 0;
              else s3 = e5.pendingLanes & -536870913, s3 = s3 === 0 ? s3 & 536870912 ? 536870912 : 0 : s3;
              if (s3 !== 0) {
                t3 = s3;
                e: {
                  var c3 = e5;
                  a3 = sf;
                  var l3 = rs2 && c3.current.memoizedState.isDehydrated;
                  if (l3 && (X2(c3, s3).flags |= 256), s3 = Sa2(c3, s3, false), s3 !== 2 && s3 !== 6) {
                    if (Qd && !l3) {
                      c3.errorRecoveryDisabledLanes |= o3, nf |= o3, a3 = 4;
                      break e;
                    }
                    o3 = cf, cf = a3, o3 !== null && (cf === null ? cf = o3 : cf.push.apply(cf, o3));
                  }
                  a3 = s3;
                }
                if (o3 = false, a3 !== 2) continue;
              }
            }
            if (a3 === 1) {
              X2(e5, 0), ma2(e5, t3, 0, true);
              break;
            }
            e: {
              switch (i3 = e5, o3 = a3, o3) {
                case 0:
                case 1:
                  throw Error(r2(345));
                case 4:
                  if ((t3 & 4194048) !== t3 && (t3 & 62914560) !== t3) break;
                case 6:
                  ma2(i3, t3, af, !Xd);
                  break e;
                case 2:
                  cf = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(r2(329));
              }
              if ((t3 & 62914560) === t3 && (a3 = uf + 300 - Q(), 10 < a3)) {
                if (ma2(i3, t3, af, !Xd), g2(i3, 0, true) !== 0) break e;
                vf = t3, i3.timeoutHandle = Zo2(fa2.bind(null, i3, n3, cf, pf, lf, t3, af, nf, of, Xd, o3, `Throttled`, -0, 0), a3);
                break e;
              }
              fa2(i3, n3, cf, pf, lf, t3, af, nf, of, Xd, o3, null, -0, 0);
            }
            break;
          }
        } while (1);
        Te2(e5);
      }
      function fa2(e5, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3) {
        e5.timeoutHandle = $o2;
        var m3 = t3.subtreeFlags, h3 = (a3 & 335544064) === a3;
        d3 = null, (h3 || m3 & 8192 || (m3 & 16785408) == 16785408) && (d3 = hs2(), bd = null, Zi2(t3, a3, d3), h3 && _s2(d3, e5.containerInfo), m3 = (a3 & 62914560) === a3 ? uf - Q() : (a3 & 4194048) === a3 ? df - Q() : 0, m3 = vs2(d3, m3), m3 !== null) ? (vf = a3, e5.cancelPendingCommit = m3(ja2.bind(null, e5, t3, a3, n3, r3, i3, o3, s3, c3, l3, u3, d3, null, f3, p3)), ma2(e5, a3, o3, !l3)) : ja2(e5, t3, a3, n3, r3, i3, o3, s3, c3, l3, u3, d3);
      }
      function pa2(e5) {
        for (var t3 = e5; ; ) {
          var n3 = t3.tag;
          if ((n3 === 0 || n3 === 11 || n3 === 15) && t3.flags & 16384 && (n3 = t3.updateQueue, n3 !== null && (n3 = n3.stores, n3 !== null))) for (var r3 = 0; r3 < n3.length; r3++) {
            var i3 = n3[r3], a3 = i3.getSnapshot;
            i3 = i3.value;
            try {
              if (!Hl(a3(), i3)) return false;
            } catch {
              return false;
            }
          }
          if (n3 = t3.child, t3.subtreeFlags & 16384 && n3 !== null) n3.return = t3, t3 = n3;
          else {
            if (t3 === e5) break;
            for (; t3.sibling === null; ) {
              if (t3.return === null || t3.return === e5) return true;
              t3 = t3.return;
            }
            t3.sibling.return = t3.return, t3 = t3.sibling;
          }
        }
        return true;
      }
      function ma2(e5, t3, n3, r3) {
        t3 = v2(e5, t3), t3 &= ~rf, t3 &= ~nf, e5.suspendedLanes |= t3, e5.pingedLanes &= ~t3, r3 && (e5.warmLanes |= t3), r3 = e5.expirationTimes;
        for (var i3 = t3; 0 < i3; ) {
          var a3 = 31 - Cl(i3), o3 = 1 << a3;
          r3[a3] = -1, i3 &= ~o3;
        }
        n3 !== 0 && w2(e5, n3, t3);
      }
      function ha2() {
        return Wd & 6 ? true : (Ee2(0, false), false);
      }
      function ga2() {
        if (Kd !== null) {
          if (Jd === 0) var e5 = Kd.return;
          else e5 = Kd, gu = hu = null, kt2(e5), zu = null, Bu = 0, e5 = Kd;
          for (; e5 !== null; ) zr2(e5.alternate, e5), e5 = e5.return;
          Kd = null;
        }
      }
      function X2(e5, t3) {
        var n3 = e5.timeoutHandle;
        return n3 !== $o2 && (e5.timeoutHandle = $o2, Qo2(n3)), n3 = e5.cancelPendingCommit, n3 !== null && (e5.cancelPendingCommit = null, n3()), vf = 0, ga2(), Gd = e5, Kd = n3 = Za2(e5.current, null), qd = t3, Jd = 0, Yd = null, Xd = false, Zd = _2(e5, t3), Qd = false, of = af = rf = nf = tf = ef = 0, cf = sf = null, lf = false, $d = v2(e5, t3), qe2(), n3;
      }
      function _a3(e5, t3) {
        ed = null, Z2.H = ud, t3 === Pu || t3 === Iu ? (t3 = Ve2(), Jd = 3) : t3 === Fu ? (t3 = Ve2(), Jd = 4) : Jd = t3 === hd ? 8 : typeof t3 == `object` && t3 && typeof t3.then == `function` ? 6 : 1, Yd = t3, Kd === null && (ef = 1, Vn2(e5, L2(t3, e5.current)));
      }
      function va2() {
        var e5 = Xu.current;
        return e5 === null ? true : (qd & 4194048) === qd ? Zu === null : (qd & 62914560) === qd || qd & 536870912 ? e5 === Zu : false;
      }
      function ya2() {
        var e5 = Z2.H;
        return Z2.H = ud, e5 === null ? ud : e5;
      }
      function ba2() {
        var e5 = Z2.A;
        return Z2.A = Id, e5;
      }
      function xa2() {
        ef = 4, Xd || (qd & 4194048) !== qd && Xu.current !== null || (Zd = true), !(tf & 134217727) && !(nf & 134217727) || Gd === null || ma2(Gd, qd, af, false);
      }
      function Sa2(e5, t3, n3) {
        var r3 = Wd;
        Wd |= 2;
        var i3 = ya2(), a3 = ba2();
        (Gd !== e5 || qd !== t3) && (pf = null, X2(e5, t3)), t3 = false;
        var o3 = ef;
        e: do
          try {
            if (Jd !== 0 && Kd !== null) {
              var s3 = Kd, c3 = Yd;
              switch (Jd) {
                case 8:
                  ga2(), o3 = 6;
                  break e;
                case 3:
                case 2:
                case 9:
                case 6:
                  Xu.current === null && (t3 = true);
                  var l3 = Jd;
                  if (Jd = 0, Yd = null, Oa2(e5, s3, c3, l3), n3 && Zd) {
                    o3 = 0;
                    break e;
                  }
                  break;
                default:
                  l3 = Jd, Jd = 0, Yd = null, Oa2(e5, s3, c3, l3);
              }
            }
            Ca2(), o3 = ef;
            break;
          } catch (t4) {
            _a3(e5, t4);
          }
        while (1);
        return t3 && e5.shellSuspendCounter++, gu = hu = null, Wd = r3, Z2.H = i3, Z2.A = a3, Kd === null && (Gd = null, qd = 0, qe2()), o3;
      }
      function Ca2() {
        for (; Kd !== null; ) Ea2(Kd);
      }
      function wa2(e5, t3) {
        var n3 = Wd;
        Wd |= 2;
        var i3 = ya2(), a3 = ba2();
        Gd !== e5 || qd !== t3 ? (pf = null, ff = Q() + 500, X2(e5, t3)) : Zd = _2(e5, t3);
        e: do
          try {
            if (Jd !== 0 && Kd !== null) {
              t3 = Kd;
              var o3 = Yd;
              n: switch (Jd) {
                case 1:
                  Jd = 0, Yd = null, Oa2(e5, t3, o3, 1);
                  break;
                case 2:
                case 9:
                  if (Re2(o3)) {
                    Jd = 0, Yd = null, Da2(t3);
                    break;
                  }
                  t3 = function() {
                    Jd !== 2 && Jd !== 9 || Gd !== e5 || (Jd = 7), Te2(e5);
                  }, o3.then(t3, t3);
                  break e;
                case 3:
                  Jd = 7;
                  break e;
                case 4:
                  Jd = 5;
                  break e;
                case 7:
                  Re2(o3) ? (Jd = 0, Yd = null, Da2(t3)) : (Jd = 0, Yd = null, Oa2(e5, t3, o3, 7));
                  break;
                case 5:
                  var s3 = null;
                  switch (Kd.tag) {
                    case 26:
                      s3 = Kd.memoizedState;
                    case 5:
                    case 27:
                      var c3 = Kd, l3 = c3.type, u3 = c3.pendingProps;
                      if (s3 ? fl(s3) : ms2(c3.stateNode, l3, u3)) {
                        Jd = 0, Yd = null;
                        var d3 = c3.sibling;
                        if (d3 !== null) Kd = d3;
                        else {
                          var f3 = c3.return;
                          f3 === null ? Kd = null : (Kd = f3, ka2(f3));
                        }
                        break n;
                      }
                  }
                  Jd = 0, Yd = null, Oa2(e5, t3, o3, 5);
                  break;
                case 6:
                  Jd = 0, Yd = null, Oa2(e5, t3, o3, 6);
                  break;
                case 8:
                  ga2(), ef = 6;
                  break e;
                default:
                  throw Error(r2(462));
              }
            }
            Ta2();
            break;
          } catch (t4) {
            _a3(e5, t4);
          }
        while (1);
        return gu = hu = null, Z2.H = i3, Z2.A = a3, Wd = n3, Kd === null ? (Gd = null, qd = 0, qe2(), ef) : 0;
      }
      function Ta2() {
        for (; Kd !== null && !jl(); ) Ea2(Kd);
      }
      function Ea2(e5) {
        var t3 = wr2(e5.alternate, e5, $d);
        e5.memoizedProps = e5.pendingProps, t3 === null ? ka2(e5) : Kd = t3;
      }
      function Da2(e5) {
        var t3 = e5, n3 = t3.alternate;
        switch (t3.tag) {
          case 15:
          case 0:
            t3 = ar2(n3, t3, t3.pendingProps, t3.type, void 0, qd);
            break;
          case 11:
            t3 = ar2(n3, t3, t3.pendingProps, t3.type.render, t3.ref, qd);
            break;
          case 5:
            kt2(t3);
            var r3 = t3;
            rs2 && r3 === cu && (uu ? (oe2(r3), r3.tag === 5 && r3.stateNode != null && (lu = r3.stateNode)) : (oe2(r3), uu = true));
          default:
            zr2(n3, t3), t3 = Kd = Qa2(t3, $d), t3 = wr2(n3, t3, $d);
        }
        e5.memoizedProps = e5.pendingProps, t3 === null ? ka2(e5) : Kd = t3;
      }
      function Oa2(e5, t3, n3, r3) {
        gu = hu = null, kt2(t3), zu = null, Bu = 0;
        var i3 = t3.return;
        try {
          if (Kn2(e5, i3, t3, n3, qd)) {
            ef = 1, Vn2(e5, L2(n3, e5.current)), Kd = null;
            return;
          }
        } catch (t4) {
          if (i3 !== null) throw Kd = i3, t4;
          ef = 1, Vn2(e5, L2(n3, e5.current)), Kd = null;
          return;
        }
        t3.flags & 32768 ? (uu || r3 === 1 ? e5 = true : Zd || qd & 536870912 ? e5 = false : (Xd = e5 = true, (r3 === 2 || r3 === 9 || r3 === 3 || r3 === 6) && (r3 = Xu.current, r3 !== null && r3.tag === 13 && (r3.flags |= 16384))), Aa2(t3, e5)) : ka2(t3);
      }
      function ka2(e5) {
        var t3 = e5;
        do {
          if (t3.flags & 32768) {
            Aa2(t3, Xd);
            return;
          }
          e5 = t3.return;
          var n3 = Lr2(t3.alternate, t3, $d);
          if (n3 !== null) {
            Kd = n3;
            return;
          }
          if (t3 = t3.sibling, t3 !== null) {
            Kd = t3;
            return;
          }
          Kd = t3 = e5;
        } while (t3 !== null);
        ef === 0 && (ef = 5);
      }
      function Aa2(e5, t3) {
        do {
          var n3 = Rr2(e5.alternate, e5);
          if (n3 !== null) {
            n3.flags &= 32767, Kd = n3;
            return;
          }
          if (n3 = e5.return, n3 !== null && (n3.flags |= 32768, n3.subtreeFlags = 0, n3.deletions = null), !t3 && (e5 = e5.sibling, e5 !== null)) {
            Kd = e5;
            return;
          }
          Kd = e5 = n3;
        } while (e5 !== null);
        ef = 6, Kd = null;
      }
      function ja2(e5, t3, n3, i3, a3, o3, s3, c3, l3, u3, d3, f3) {
        e5.cancelPendingCommit = null;
        do
          za2();
        while (hf !== 0);
        if (Wd & 6) throw Error(r2(327));
        if (t3 !== null) {
          if (t3 === e5.current) throw Error(r2(177));
          e5 === Gd && (Kd = Gd = null, qd = 0), _f = t3, gf = e5, vf = n3, bf = a3, xf = i3, Ma2(e5, t3, n3, s3, c3, l3, f3);
        }
      }
      function Ma2(e5, t3, n3, r3, i3, a3, o3) {
        var s3 = t3.lanes | t3.childLanes;
        if (yf = s3, s3 |= Gu, C2(e5, n3, s3, r3, i3, a3), Cf = null, (n3 & 335544064) === n3 ? (wf = Ce2(e5), r3 = 10262) : (wf = null, r3 = 10256), (t3.subtreeFlags & r3) !== 0 || (t3.flags & r3) !== 0 ? (e5.callbackNode = null, e5.callbackPriority = 0, Ja2(Fl, function() {
          return Ba2(), null;
        })) : (e5.callbackNode = null, e5.callbackPriority = 0), yd = false, r3 = !!(t3.flags & 13878), t3.subtreeFlags & 13878 || r3) {
          r3 = Z2.T, Z2.T = null, i3 = ss2(), os2(2), a3 = Wd, Wd |= 4;
          try {
            Si2(e5, t3, n3);
          } finally {
            Wd = a3, os2(i3), Z2.T = r3;
          }
        }
        hf = 1, yd ? Sf = nc2(o3, e5.containerInfo, wf, Fa2, Ia2, Pa2, La2, Ba2, Na2, null, null) : (Fa2(), Ia2(), La2());
      }
      function Na2(e5) {
        if (hf !== 0) {
          var t3 = gf.onRecoverableError;
          t3(e5, { componentStack: null });
        }
      }
      function Pa2() {
        hf === 3 && (hf = 0, Bi(_f, gf), hf = 4);
      }
      function Fa2() {
        if (hf === 1) {
          hf = 0;
          var e5 = gf, t3 = _f, n3 = vf, r3 = !!(t3.flags & 13878);
          if (t3.subtreeFlags & 13878 || r3) {
            r3 = Z2.T, Z2.T = null;
            var i3 = ss2();
            os2(2);
            var a3 = Wd;
            Wd |= 4;
            try {
              Ad = jd = false, Ii2(t3, e5, n3), Go2(e5.containerInfo);
            } finally {
              Wd = a3, os2(i3), Z2.T = r3;
            }
          }
          e5.current = t3, hf = 2;
        }
      }
      function Ia2() {
        if (hf === 2) {
          hf = 0;
          var e5 = gf, t3 = _f, n3 = !!(t3.flags & 8772);
          if (t3.subtreeFlags & 8772 || n3) {
            n3 = Z2.T, Z2.T = null;
            var r3 = ss2();
            os2(2);
            var i3 = Wd;
            Wd |= 4;
            try {
              wi2(e5, t3.alternate, t3);
            } finally {
              Wd = i3, os2(r3), Z2.T = n3;
            }
          }
          hf = 3;
        }
      }
      function La2() {
        if (hf === 4 || hf === 3) {
          hf = 0;
          var e5 = Sf;
          Sf = null, Ml();
          var t3 = gf, n3 = _f, r3 = vf, i3 = xf, a3 = (r3 & 335544064) === r3 ? 10262 : 10256;
          if ((n3.subtreeFlags & a3) !== 0 || (n3.flags & a3) !== 0 ? hf = 5 : (hf = 0, _f = gf = null, Ra2(t3, t3.pendingLanes)), a3 = t3.pendingLanes, a3 === 0 && (mf = null), O2(r3), n3 = n3.stateNode, Bl && typeof Bl.onCommitFiberRoot == `function`) try {
            Bl.onCommitFiberRoot(zl, n3, void 0, (n3.current.flags & 128) == 128);
          } catch {
          }
          if (i3 !== null) {
            n3 = Z2.T, a3 = ss2(), os2(2), Z2.T = null;
            try {
              for (var o3 = t3.onRecoverableError, s3 = 0; s3 < i3.length; s3++) {
                var c3 = i3[s3];
                o3(c3.value, { componentStack: c3.stack });
              }
            } finally {
              Z2.T = n3, os2(a3);
            }
          }
          if (i3 = Cf, o3 = wf, wf = null, i3 !== null && (Cf = null, o3 === null && (o3 = []), e5 !== null)) for (c3 = 0; c3 < i3.length; c3++) n3 = (0, i3[c3])(o3), n3 !== void 0 && ic2(e5, n3);
          vf & 3 && za2(), Te2(t3), a3 = t3.pendingLanes, r3 & 261930 && a3 & 42 ? t3 === Ef ? Tf++ : (Tf = 0, Ef = t3) : (Tf = 0, Ef = null), rs2 && Kc2(), Ee2(0, false);
        }
      }
      function Ra2(e5, t3) {
        (e5.pooledCacheLanes &= t3) === 0 && (t3 = e5.pooledCache, t3 != null && (e5.pooledCache = null, xe2(t3)));
      }
      function za2() {
        return Sf !== null && (rc2(Sf), Sf = null), Fa2(), Ia2(), La2(), Ba2();
      }
      function Ba2() {
        if (hf !== 5) return false;
        var e5 = gf, t3 = yf;
        yf = 0;
        var n3 = O2(vf), i3 = 32 > n3 ? 32 : n3;
        n3 = Z2.T;
        var a3 = ss2();
        try {
          os2(i3), Z2.T = null, i3 = bf, bf = null;
          var o3 = gf, s3 = vf;
          if (hf = 0, _f = gf = null, vf = 0, Wd & 6) throw Error(r2(331));
          var c3 = Wd;
          if (Wd |= 4, ea2(o3.current), qi2(o3, o3.current, s3, i3), Wd = c3, Ee2(0, false), Bl && typeof Bl.onPostCommitFiberRoot == `function`) try {
            Bl.onPostCommitFiberRoot(zl, o3);
          } catch {
          }
          return true;
        } finally {
          os2(a3), Z2.T = n3, Ra2(e5, t3);
        }
      }
      function Va2(e5, t3, n3) {
        t3 = L2(n3, t3), t3 = Un2(e5.stateNode, t3, 2), e5 = nt2(e5, t3, 2), e5 !== null && (S2(e5, 2), Te2(e5));
      }
      function Ha2(e5, t3, n3) {
        if (e5.tag === 3) Va2(e5, e5, n3);
        else for (; t3 !== null; ) {
          if (t3.tag === 3) {
            Va2(t3, e5, n3);
            break;
          }
          if (t3.tag === 1) {
            var r3 = t3.stateNode;
            if (typeof t3.type.getDerivedStateFromError == `function` || typeof r3.componentDidCatch == `function` && (mf === null || !mf.has(r3))) {
              e5 = L2(n3, e5), n3 = Wn2(2), r3 = nt2(t3, n3, 2), r3 !== null && (Gn2(n3, r3, t3, e5), S2(r3, 2), Te2(r3));
              break;
            }
          }
          t3 = t3.return;
        }
      }
      function Ua2(e5, t3, n3) {
        var r3 = e5.pingCache;
        if (r3 === null) {
          r3 = e5.pingCache = new Ud();
          var i3 = /* @__PURE__ */ new Set();
          r3.set(t3, i3);
        } else i3 = r3.get(t3), i3 === void 0 && (i3 = /* @__PURE__ */ new Set(), r3.set(t3, i3));
        i3.has(n3) || (Qd = true, i3.add(n3), e5 = Wa2.bind(null, e5, t3, n3), t3.then(e5, e5));
      }
      function Wa2(e5, t3, n3) {
        var r3 = e5.pingCache;
        r3 !== null && r3.delete(t3), e5.pingedLanes |= e5.suspendedLanes & n3, e5.warmLanes &= ~n3, Gd === e5 && (qd & n3) === n3 && ((ef === 4 || ef === 3 && (qd & 62914560) === qd && 300 > Q() - uf) && !(Wd & 2) ? X2(e5, 0) : rf |= n3, of === qd && (of = 0)), Te2(e5);
      }
      function Ga2(e5, t3) {
        t3 === 0 && (t3 = b2()), e5 = Xe2(e5, t3), e5 !== null && (S2(e5, t3), Te2(e5));
      }
      function Ka2(e5) {
        var t3 = e5.memoizedState, n3 = 0;
        t3 !== null && (n3 = t3.retryLane), Ga2(e5, n3);
      }
      function qa2(e5, t3) {
        var n3 = 0;
        switch (e5.tag) {
          case 31:
          case 13:
            var i3 = e5.stateNode, a3 = e5.memoizedState;
            a3 !== null && (n3 = a3.retryLane);
            break;
          case 19:
            i3 = e5.stateNode;
            break;
          case 22:
            i3 = e5.stateNode._retryCache;
            break;
          default:
            throw Error(r2(314));
        }
        i3 !== null && i3.delete(t3), Ga2(e5, n3);
      }
      function Ja2(e5, t3) {
        return kl(e5, t3);
      }
      function Ya2(e5, t3, n3, r3) {
        this.tag = e5, this.key = n3, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r3, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Xa2(e5) {
        return e5 = e5.prototype, !(!e5 || !e5.isReactComponent);
      }
      function Za2(e5, n3) {
        var r3 = e5.alternate;
        return r3 === null ? (r3 = t2(e5.tag, n3, e5.key, e5.mode), r3.elementType = e5.elementType, r3.type = e5.type, r3.stateNode = e5.stateNode, r3.alternate = e5, e5.alternate = r3) : (r3.pendingProps = n3, r3.type = e5.type, r3.flags = 0, r3.subtreeFlags = 0, r3.deletions = null), r3.flags = e5.flags & 1206910976, r3.childLanes = e5.childLanes, r3.lanes = e5.lanes, r3.child = e5.child, r3.memoizedProps = e5.memoizedProps, r3.memoizedState = e5.memoizedState, r3.updateQueue = e5.updateQueue, n3 = e5.dependencies, r3.dependencies = n3 === null ? null : { lanes: n3.lanes, firstContext: n3.firstContext }, r3.sibling = e5.sibling, r3.index = e5.index, r3.ref = e5.ref, r3.refCleanup = e5.refCleanup, r3;
      }
      function Qa2(e5, t3) {
        e5.flags &= 1206910978;
        var n3 = e5.alternate;
        return n3 === null ? (e5.childLanes = 0, e5.lanes = t3, e5.child = null, e5.subtreeFlags = 0, e5.memoizedProps = null, e5.memoizedState = null, e5.updateQueue = null, e5.dependencies = null, e5.stateNode = null) : (e5.childLanes = n3.childLanes, e5.lanes = n3.lanes, e5.child = n3.child, e5.subtreeFlags = 0, e5.deletions = null, e5.memoizedProps = n3.memoizedProps, e5.memoizedState = n3.memoizedState, e5.updateQueue = n3.updateQueue, e5.type = n3.type, t3 = n3.dependencies, e5.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }), e5;
      }
      function $a2(e5, n3, i3, a3, o3, s3) {
        var c3 = 0;
        if (a3 = e5, typeof a3 == `function`) Xa2(a3) && (c3 = 1);
        else if (typeof a3 == `string`) c3 = el2 && ml ? tl2(e5, i3, iu.current) ? 26 : vl(e5) ? 27 : 5 : el2 ? tl2(e5, i3, iu.current) ? 26 : 5 : ml && vl(e5) ? 27 : 5;
        else e: switch (a3) {
          case ko2:
            return e5 = t2(31, i3, n3, o3), e5.elementType = ko2, e5.lanes = s3, e5;
          case yo2:
            return eo2(i3.children, o3, s3, n3);
          case bo2:
            c3 = 8, o3 |= 24;
            break;
          case xo2:
            return e5 = t2(12, i3, n3, o3 | 2), e5.elementType = xo2, e5.lanes = s3, e5;
          case To2:
            return e5 = t2(13, i3, n3, o3), e5.elementType = To2, e5.lanes = s3, e5;
          case Eo2:
            return e5 = t2(19, i3, n3, o3), e5.elementType = Eo2, e5.lanes = s3, e5;
          case Ao2:
          case Mo2:
            return e5 = o3 | 32, e5 = t2(30, i3, n3, e5), e5.elementType = Mo2, e5.lanes = s3, e5.stateNode = { autoName: null, paired: null, clones: null, ref: null }, e5;
          default:
            if (typeof a3 == `object` && a3) switch (a3.$$typeof) {
              case Co2:
                c3 = 10;
                break e;
              case So2:
                c3 = 9;
                break e;
              case wo2:
                c3 = 11;
                break e;
              case Do2:
                c3 = 14;
                break e;
              case Oo2:
                c3 = 16, a3 = null;
                break e;
            }
            c3 = 29, i3 = Error(r2(130, e5 === null ? `null` : typeof e5, ``)), a3 = null;
        }
        return n3 = t2(c3, i3, n3, o3), n3.elementType = e5, n3.type = a3, n3.lanes = s3, n3;
      }
      function eo2(e5, n3, r3, i3) {
        return e5 = t2(7, e5, i3, n3), e5.lanes = r3, e5;
      }
      function to2(e5, n3, r3) {
        return e5 = t2(6, e5, null, n3), e5.lanes = r3, e5;
      }
      function no2(e5) {
        var n3 = t2(18, null, null, 0);
        return n3.stateNode = e5, n3;
      }
      function ro2(e5, n3, r3) {
        return n3 = t2(4, e5.children === null ? [] : e5.children, e5.key, n3), n3.lanes = r3, n3.stateNode = { containerInfo: e5.containerInfo, pendingChildren: null, implementation: e5.implementation }, n3;
      }
      function io2(e5, t3, n3, r3, i3, a3, o3, s3, c3) {
        this.tag = 1, this.containerInfo = e5, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = $o2, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = x2(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = x2(0), this.hiddenUpdates = x2(null), this.identifierPrefix = r3, this.onUncaughtError = i3, this.onCaughtError = a3, this.onRecoverableError = o3, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c3, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function ao2(e5, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3) {
        return e5 = new io2(e5, n3, r3, s3, l3, u3, d3, f3, c3), n3 = 1, o3 === true && (n3 |= 24), o3 = t2(3, null, null, n3), e5.current = o3, o3.stateNode = e5, n3 = be2(), n3.refCount++, e5.pooledCache = n3, n3.refCount++, o3.memoizedState = { element: i3, isDehydrated: r3, cache: n3 }, $e2(o3), e5;
      }
      function oo2(e5) {
        return e5 ? (e5 = Sl, e5) : Sl;
      }
      function so2(e5) {
        var t3 = e5._reactInternals;
        if (t3 === void 0) throw typeof e5.render == `function` ? Error(r2(188)) : (e5 = Object.keys(e5).join(`,`), Error(r2(268, e5)));
        return e5 = o2(t3), e5 = e5 === null ? null : s2(e5), e5 === null ? null : Vo2(e5.stateNode);
      }
      function co2(e5, t3, n3, r3, i3, a3) {
        i3 = oo2(i3), r3.context === null ? r3.context = i3 : r3.pendingContext = i3, r3 = tt2(t3), r3.payload = { element: n3 }, a3 = a3 === void 0 ? null : a3, a3 !== null && (r3.callback = a3), n3 = nt2(e5, r3, t3), n3 !== null && (da2(n3, e5, t3), rt2(n3, e5, t3));
      }
      function lo2(e5, t3) {
        if (e5 = e5.memoizedState, e5 !== null && e5.dehydrated !== null) {
          var n3 = e5.retryLane;
          e5.retryLane = n3 !== 0 && n3 < t3 ? n3 : t3;
        }
      }
      function uo2(e5, t3) {
        lo2(e5, t3), (e5 = e5.alternate) && lo2(e5, t3);
      }
      var fo2 = {}, po2 = J.default, mo2 = Tt.default, ho2 = Object.assign, go2 = Symbol.for(`react.element`), _o2 = Symbol.for(`react.transitional.element`), vo2 = Symbol.for(`react.portal`), yo2 = Symbol.for(`react.fragment`), bo2 = Symbol.for(`react.strict_mode`), xo2 = Symbol.for(`react.profiler`), So2 = Symbol.for(`react.consumer`), Co2 = Symbol.for(`react.context`), wo2 = Symbol.for(`react.forward_ref`), To2 = Symbol.for(`react.suspense`), Eo2 = Symbol.for(`react.suspense_list`), Do2 = Symbol.for(`react.memo`), Oo2 = Symbol.for(`react.lazy`), ko2 = Symbol.for(`react.activity`), Ao2 = Symbol.for(`react.legacy_hidden`), jo2 = Symbol.for(`react.memo_cache_sentinel`), Mo2 = Symbol.for(`react.view_transition`), No2 = Symbol.for(`react.recoverable`), Po2 = Symbol.iterator, Fo2 = Symbol.for(`react.optimistic_key`), Io2 = Symbol.for(`react.client.reference`), Lo2 = Array.isArray, Z2 = po2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ro2 = e4.rendererVersion, zo2 = e4.rendererPackageName, Bo2 = e4.extraDevToolsConfig, Vo2 = e4.getPublicInstance, Ho2 = e4.getRootHostContext, Uo2 = e4.getChildHostContext, Wo2 = e4.prepareForCommit, Go2 = e4.resetAfterCommit, Ko2 = e4.createInstance;
      e4.cloneMutableInstance;
      var qo2 = e4.appendInitialChild, Jo2 = e4.finalizeInitialChildren, Yo2 = e4.shouldSetTextContent, Xo2 = e4.createTextInstance;
      e4.cloneMutableTextInstance;
      var Zo2 = e4.scheduleTimeout, Qo2 = e4.cancelTimeout, $o2 = e4.noTimeout, es2 = e4.isPrimaryRenderer;
      e4.warnsIfNotActing;
      var ts2 = e4.supportsMutation, ns2 = e4.supportsPersistence, rs2 = e4.supportsHydration, is2 = e4.getInstanceFromNode;
      e4.beforeActiveInstanceBlur;
      var as2 = e4.preparePortalMount;
      e4.prepareScopeUpdate, e4.getInstanceFromScope;
      var os2 = e4.setCurrentUpdatePriority, ss2 = e4.getCurrentUpdatePriority, cs2 = e4.resolveUpdatePriority;
      e4.trackSchedulerEvent, e4.resolveEventType, e4.resolveEventTimeStamp;
      var ls2 = e4.shouldAttemptEagerTransition, us2 = e4.detachDeletedInstance;
      e4.requestPostPaintCallback;
      var ds2 = e4.maySuspendCommit, fs2 = e4.maySuspendCommitOnUpdate, ps2 = e4.maySuspendCommitInSyncRender, ms2 = e4.preloadInstance, hs2 = e4.startSuspendingCommit, gs2 = e4.suspendInstance, _s2 = e4.suspendOnActiveViewTransition, vs2 = e4.waitForCommitToBeReady;
      e4.getSuspendedCommitReason;
      var ys2 = e4.NotPendingTransition, bs2 = e4.HostTransitionContext, xs2 = e4.resetFormInstance;
      e4.bindToConsole;
      var Ss2 = e4.supportsMicrotasks, Cs2 = e4.scheduleMicrotask, ws2 = e4.supportsTestSelectors, Ts2 = e4.findFiberRoot, Es2 = e4.getBoundingRect, Ds2 = e4.getTextContent, Os2 = e4.isHiddenSubtree, ks2 = e4.matchAccessibilityRole, As2 = e4.setFocusIfFocusable, js2 = e4.setupIntersectionObserver, Ms2 = e4.appendChild, Ns2 = e4.appendChildToContainer, Ps2 = e4.commitTextUpdate, Fs2 = e4.commitMount, Is2 = e4.commitUpdate, Ls2 = e4.insertBefore, Rs2 = e4.insertInContainerBefore, zs2 = e4.removeChild, Bs2 = e4.removeChildFromContainer, Vs2 = e4.resetTextContent, Hs2 = e4.hideInstance, Us2 = e4.hideTextInstance, Ws2 = e4.unhideInstance, Gs2 = e4.unhideTextInstance, Ks2 = e4.applyViewTransitionName, qs2 = e4.restoreViewTransitionName, Js2 = e4.cancelViewTransitionName, Ys2 = e4.cancelRootViewTransitionName, Xs2 = e4.restoreRootViewTransitionName;
      e4.cloneRootViewTransitionContainer, e4.removeRootViewTransitionClone;
      var Zs2 = e4.measureInstance, Qs2 = e4.measureClonedInstance, $s2 = e4.wasInstanceInViewport, ec2 = e4.hasInstanceChanged, tc2 = e4.hasInstanceAffectedParent, nc2 = e4.startViewTransition;
      e4.startGestureTransition;
      var rc2 = e4.stopViewTransition, ic2 = e4.addViewTransitionFinishedListener;
      e4.getCurrentGestureOffset;
      var ac2 = e4.createViewTransitionInstance, oc2 = e4.clearContainer, sc2 = e4.createFragmentInstance, cc2 = e4.updateFragmentInstanceFiber, lc2 = e4.commitNewChildToFragmentInstance, uc2 = e4.deleteChildFromFragmentInstance, dc2 = e4.cloneInstance, fc2 = e4.createContainerChildSet, pc2 = e4.appendChildToContainerChildSet, mc2 = e4.finalizeContainerChildren, hc2 = e4.replaceContainerChildren, gc2 = e4.cloneHiddenInstance, _c2 = e4.cloneHiddenTextInstance, vc2 = e4.isSuspenseInstancePending, yc2 = e4.isSuspenseInstanceFallback, bc2 = e4.getSuspenseInstanceFallbackErrorDetails, xc2 = e4.registerSuspenseInstanceRetry, Sc2 = e4.canHydrateFormStateMarker, Cc2 = e4.isFormStateMarkerMatching, wc2 = e4.getNextHydratableSibling, Tc2 = e4.getNextHydratableSiblingAfterSingleton, Ec2 = e4.getFirstHydratableChild, Dc2 = e4.getFirstHydratableChildWithinContainer, Oc2 = e4.getFirstHydratableChildWithinActivityInstance, kc2 = e4.getFirstHydratableChildWithinSuspenseInstance, Ac2 = e4.getFirstHydratableChildWithinSingleton, jc2 = e4.canHydrateInstance, Mc2 = e4.canHydrateTextInstance, Nc2 = e4.canHydrateActivityInstance, Pc2 = e4.canHydrateSuspenseInstance, Fc2 = e4.hydrateInstance, Ic2 = e4.hydrateTextInstance, Lc2 = e4.hydrateActivityInstance, Rc2 = e4.hydrateSuspenseInstance, zc2 = e4.getNextHydratableInstanceAfterActivityInstance, Bc2 = e4.getNextHydratableInstanceAfterSuspenseInstance, Vc2 = e4.commitHydratedInstance, Hc2 = e4.commitHydratedContainer, Uc2 = e4.commitHydratedActivityInstance, Wc2 = e4.commitHydratedSuspenseInstance, Gc2 = e4.finalizeHydratedChildren, Kc2 = e4.flushHydrationEvents;
      e4.clearActivityBoundary;
      var qc2 = e4.clearSuspenseBoundary;
      e4.clearActivityBoundaryFromContainer;
      var Jc2 = e4.clearSuspenseBoundaryFromContainer, Yc2 = e4.hideDehydratedBoundary, Xc2 = e4.unhideDehydratedBoundary, Zc2 = e4.shouldDeleteUnhydratedTailInstances;
      e4.diffHydratedPropsForDevWarnings, e4.diffHydratedTextForDevWarnings, e4.describeHydratableInstanceForDevWarnings;
      var Qc2 = e4.validateHydratableInstance, $c2 = e4.validateHydratableTextInstance, el2 = e4.supportsResources, tl2 = e4.isHostHoistableType, nl2 = e4.getHoistableRoot, rl2 = e4.getResource, il = e4.acquireResource, al = e4.releaseResource, ol = e4.hydrateHoistable, sl = e4.mountHoistable, cl = e4.unmountHoistable, ll = e4.createHoistableInstance, ul = e4.prepareToCommitHoistables, dl = e4.mayResourceSuspendCommit, fl = e4.preloadResource, pl = e4.suspendResource, ml = e4.supportsSingletons, hl = e4.resolveSingletonInstance, gl = e4.acquireSingletonInstance, _l = e4.releaseSingletonInstance, vl = e4.isHostSingletonType, yl = e4.isSingletonScope, bl = [], xl = -1, Sl = {}, Cl = Math.clz32 ? Math.clz32 : m2, wl = Math.log, Tl = Math.LN2, El = 256, Dl = 262144, Ol = 4194304, kl = mo2.unstable_scheduleCallback, Al = mo2.unstable_cancelCallback, jl = mo2.unstable_shouldYield, Ml = mo2.unstable_requestPaint, Q = mo2.unstable_now, Nl = mo2.unstable_ImmediatePriority, Pl = mo2.unstable_UserBlockingPriority, Fl = mo2.unstable_NormalPriority, Il = mo2.unstable_IdlePriority, Ll = mo2.log, Rl = mo2.unstable_setDisableYieldValue, zl = null, Bl = null, Vl = 0, Hl = typeof Object.is == `function` ? Object.is : N2, Ul = typeof reportError == `function` ? reportError : function(e5) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
          var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e5 == `object` && e5 && typeof e5.message == `string` ? String(e5.message) : String(e5), error: e5 });
          if (!window.dispatchEvent(t3)) return;
        } else if (typeof process == `object` && typeof process.emit == `function`) {
          process.emit(`uncaughtException`, e5);
          return;
        }
        console.error(e5);
      }, Wl = Object.prototype.hasOwnProperty, Gl, Kl, ql = false, Jl = /* @__PURE__ */ new WeakMap(), Yl = [], Xl = 0, Zl = null, Ql = 0, $l = [], eu = 0, tu = null, nu = 1, ru = ``, iu = d2(null), au = d2(null), ou = d2(null), su = d2(null), cu = null, lu = null, uu = false, du = null, fu = false, pu = Error(r2(519)), mu = d2(null), hu = null, gu = null, _u = typeof AbortController < `u` ? AbortController : function() {
        var e5 = [], t3 = this.signal = { aborted: false, addEventListener: function(t4, n3) {
          e5.push(n3);
        } };
        this.abort = function() {
          t3.aborted = true, e5.forEach(function(e6) {
            return e6();
          });
        };
      }, vu = mo2.unstable_scheduleCallback, yu = mo2.unstable_NormalPriority, bu = { $$typeof: Co2, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 }, xu = null, Su = null, Cu = null, wu = false, Tu = false, Eu = false, Du = 0, Ou = null, ku = 0, Au = 0, ju = null, Mu = Z2.S;
      Z2.S = function(e5, t3) {
        if (df = Q(), typeof t3 == `object` && t3 && typeof t3.then == `function` && G2(e5, t3), xu !== null) for (var n3 = Su; n3 !== null; ) Se2(n3, xu), n3 = n3.next;
        if (n3 = e5.types, n3 != null) {
          for (var r3 = Su; r3 !== null; ) Se2(r3, n3), r3 = r3.next;
          if (Au !== 0) {
            r3 = xu, r3 === null && (r3 = xu = []);
            for (var i3 = 0; i3 < n3.length; i3++) {
              var a3 = n3[i3];
              r3.indexOf(a3) === -1 && r3.push(a3);
            }
          }
        }
        Mu !== null && Mu(e5, t3);
      };
      var Nu = d2(null), Pu = Error(r2(460)), Fu = Error(r2(474)), Iu = Error(r2(542)), Lu = { then: function() {
      } }, Ru = null, zu = null, Bu = 0, Vu = Ke2(true), Hu = Ke2(false), Uu = [], Wu = 0, Gu = 0, Ku = false, qu = false, Ju = d2(null), Yu = d2(0), Xu = d2(null), Zu = null, Qu = d2(0), $u = 0, ed = null, td = null, nd = null, rd = false, id = false, ad = false, od = 0, sd = 0, cd = null, ld = 0, ud = { readContext: _e2, use: Pt2, useCallback: bt2, useContext: bt2, useEffect: bt2, useImperativeHandle: bt2, useLayoutEffect: bt2, useInsertionEffect: bt2, useMemo: bt2, useReducer: bt2, useRef: bt2, useState: bt2, useDebugValue: bt2, useDeferredValue: bt2, useTransition: bt2, useSyncExternalStore: bt2, useId: bt2, useHostTransitionStatus: bt2, useFormState: bt2, useActionState: bt2, useOptimistic: bt2, useMemoCache: bt2, useCacheRefresh: bt2, useEffectEvent: bt2 }, dd = { readContext: _e2, use: Pt2, useCallback: function(e5, t3) {
        return At2().memoizedState = [e5, t3 === void 0 ? null : t3], e5;
      }, useContext: _e2, useEffect: dn2, useImperativeHandle: function(e5, t3, n3) {
        n3 = n3 == null ? null : n3.concat([e5]), ln2(4194308, 4, _n2.bind(null, t3, e5), n3);
      }, useLayoutEffect: function(e5, t3) {
        return ln2(4194308, 4, e5, t3);
      }, useInsertionEffect: function(e5, t3) {
        ln2(4, 2, e5, t3);
      }, useMemo: function(e5, t3) {
        var n3 = At2();
        t3 = t3 === void 0 ? null : t3;
        var r3 = e5();
        if (ad) {
          k2(true);
          try {
            e5();
          } finally {
            k2(false);
          }
        }
        return n3.memoizedState = [r3, t3], r3;
      }, useReducer: function(e5, t3, n3) {
        var r3 = At2();
        if (n3 !== void 0) {
          var i3 = n3(t3);
          if (ad) {
            k2(true);
            try {
              n3(t3);
            } finally {
              k2(false);
            }
          }
        } else i3 = t3;
        return r3.memoizedState = r3.baseState = i3, e5 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e5, lastRenderedState: i3 }, r3.queue = e5, e5 = e5.dispatch = An2.bind(null, ed, e5), [r3.memoizedState, e5];
      }, useRef: function(e5) {
        var t3 = At2();
        return e5 = { current: e5 }, t3.memoizedState = e5;
      }, useState: function(e5) {
        e5 = Kt2(e5);
        var t3 = e5.queue, n3 = jn2.bind(null, ed, t3);
        return t3.dispatch = n3, [e5.memoizedState, n3];
      }, useDebugValue: yn2, useDeferredValue: function(e5, t3) {
        return Sn2(At2(), e5, t3);
      }, useTransition: function() {
        var e5 = Kt2(false);
        return e5 = wn2.bind(null, ed, e5.queue, true, false), At2().memoizedState = e5, [false, e5];
      }, useSyncExternalStore: function(e5, t3, n3) {
        var i3 = ed, a3 = At2();
        if (uu) {
          if (n3 === void 0) throw Error(r2(407));
          n3 = n3();
        } else {
          if (n3 = t3(), Gd === null) throw Error(r2(349));
          qd & 127 || Vt2(i3, t3, n3);
        }
        a3.memoizedState = n3;
        var o3 = { value: n3, getSnapshot: t3 };
        return a3.queue = o3, dn2(Ut2.bind(null, i3, o3, e5), [e5]), i3.flags |= 2048, sn2(9, { destroy: void 0 }, Ht2.bind(null, i3, o3, n3, t3), null), n3;
      }, useId: function() {
        var e5 = At2(), t3 = Gd.identifierPrefix;
        if (uu) {
          var n3 = ru, r3 = nu;
          n3 = (r3 & ~(1 << 32 - Cl(r3) - 1)).toString(32) + n3, t3 = `_` + t3 + `R_` + n3, n3 = od++, 0 < n3 && (t3 += `H` + n3.toString(32)), t3 += `_`;
        } else n3 = ld++, t3 = `_` + t3 + `r_` + n3.toString(32) + `_`;
        return e5.memoizedState = t3;
      }, useHostTransitionStatus: En2, useFormState: tn2, useActionState: tn2, useOptimistic: function(e5) {
        var t3 = At2();
        t3.memoizedState = t3.baseState = e5;
        var n3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return t3.queue = n3, t3 = Nn2.bind(null, ed, true, n3), n3.dispatch = t3, [e5, t3];
      }, useMemoCache: Ft2, useCacheRefresh: function() {
        return At2().memoizedState = kn2.bind(null, ed);
      }, useEffectEvent: function(e5) {
        var t3 = At2(), n3 = { impl: e5 };
        return t3.memoizedState = n3, function() {
          if (Wd & 2) throw Error(r2(440));
          return n3.impl.apply(void 0, arguments);
        };
      } }, fd = { readContext: _e2, use: Pt2, useCallback: bn2, useContext: _e2, useEffect: fn2, useImperativeHandle: vn2, useInsertionEffect: hn2, useLayoutEffect: gn2, useMemo: xn2, useReducer: Lt2, useRef: cn2, useState: function() {
        return Lt2(It2);
      }, useDebugValue: yn2, useDeferredValue: function(e5, t3) {
        return Cn2(jt2(), td.memoizedState, e5, t3);
      }, useTransition: function() {
        var e5 = Lt2(It2)[0], t3 = jt2().memoizedState;
        return [typeof e5 == `boolean` ? e5 : Nt2(e5), t3];
      }, useSyncExternalStore: Bt2, useId: Dn2, useHostTransitionStatus: En2, useFormState: nn2, useActionState: nn2, useOptimistic: function(e5, t3) {
        return qt2(jt2(), td, e5, t3);
      }, useMemoCache: Ft2, useCacheRefresh: On2, useEffectEvent: mn2 }, pd = { readContext: _e2, use: Pt2, useCallback: bn2, useContext: _e2, useEffect: fn2, useImperativeHandle: vn2, useInsertionEffect: hn2, useLayoutEffect: gn2, useMemo: xn2, useReducer: zt2, useRef: cn2, useState: function() {
        return zt2(It2);
      }, useDebugValue: yn2, useDeferredValue: function(e5, t3) {
        var n3 = jt2();
        return td === null ? Sn2(n3, e5, t3) : Cn2(n3, td.memoizedState, e5, t3);
      }, useTransition: function() {
        var e5 = zt2(It2)[0], t3 = jt2().memoizedState;
        return [typeof e5 == `boolean` ? e5 : Nt2(e5), t3];
      }, useSyncExternalStore: Bt2, useId: Dn2, useHostTransitionStatus: En2, useFormState: on2, useActionState: on2, useOptimistic: function(e5, t3) {
        var n3 = jt2();
        return td === null ? (n3.baseState = e5, [e5, n3.queue.dispatch]) : qt2(n3, td, e5, t3);
      }, useMemoCache: Ft2, useCacheRefresh: On2, useEffectEvent: mn2 }, md = { enqueueSetState: function(e5, t3, n3) {
        e5 = e5._reactInternals;
        var r3 = ca2(), i3 = tt2(r3);
        i3.payload = t3, n3 != null && (i3.callback = n3), t3 = nt2(e5, i3, r3), t3 !== null && (da2(t3, e5, r3), rt2(t3, e5, r3));
      }, enqueueReplaceState: function(e5, t3, n3) {
        e5 = e5._reactInternals;
        var r3 = ca2(), i3 = tt2(r3);
        i3.tag = 1, i3.payload = t3, n3 != null && (i3.callback = n3), t3 = nt2(e5, i3, r3), t3 !== null && (da2(t3, e5, r3), rt2(t3, e5, r3));
      }, enqueueForceUpdate: function(e5, t3) {
        e5 = e5._reactInternals;
        var n3 = ca2(), r3 = tt2(n3);
        r3.tag = 2, t3 != null && (r3.callback = t3), t3 = nt2(e5, r3, n3), t3 !== null && (da2(t3, e5, n3), rt2(t3, e5, n3));
      } }, hd = Error(r2(461)), gd = false, _d = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }, vd = false, yd = false, bd = null, xd = null, Sd = 0, Cd = false, wd = false, Td = false, Ed = false, Dd = typeof WeakSet == `function` ? WeakSet : Set, Od = null, kd = false, Ad = false, jd = false, Md = false, $ = null, Nd = false, Pd = null, Fd = 8192, Id = { getCacheForType: function(e5) {
        var t3 = _e2(bu), n3 = t3.data.get(e5);
        return n3 === void 0 && (n3 = e5(), t3.data.set(e5, n3)), n3;
      }, cacheSignal: function() {
        return _e2(bu).controller.signal;
      } }, Ld = 0, Rd = 1, zd = 2, Bd = 3, Vd = 4;
      if (typeof Symbol == `function` && Symbol.for) {
        var Hd = Symbol.for;
        Ld = Hd(`selector.component`), Rd = Hd(`selector.has_pseudo_class`), zd = Hd(`selector.role`), Bd = Hd(`selector.test_id`), Vd = Hd(`selector.text`);
      }
      var Ud = typeof WeakMap == `function` ? WeakMap : Map, Wd = 0, Gd = null, Kd = null, qd = 0, Jd = 0, Yd = null, Xd = false, Zd = false, Qd = false, $d = 0, ef = 0, tf = 0, nf = 0, rf = 0, af = 0, of = 0, sf = null, cf = null, lf = false, uf = 0, df = 0, ff = 1 / 0, pf = null, mf = null, hf = 0, gf = null, _f = null, vf = 0, yf = 0, bf = null, xf = null, Sf = null, Cf = null, wf = null, Tf = 0, Ef = null;
      return fo2.attemptContinuousHydration = function(e5) {
        if (e5.tag === 13 || e5.tag === 31) {
          var t3 = Xe2(e5, 67108864);
          t3 !== null && da2(t3, e5, 67108864), uo2(e5, 67108864);
        }
      }, fo2.attemptHydrationAtCurrentPriority = function(e5) {
        if (e5.tag === 13 || e5.tag === 31) {
          var t3 = ca2();
          t3 = D2(t3);
          var n3 = Xe2(e5, t3);
          n3 !== null && da2(n3, e5, t3), uo2(e5, t3);
        }
      }, fo2.attemptSynchronousHydration = function(e5) {
        switch (e5.tag) {
          case 3:
            if (e5 = e5.stateNode, e5.current.memoizedState.isDehydrated) {
              var t3 = h2(e5.pendingLanes);
              if (t3 !== 0) {
                for (e5.pendingLanes |= 2, e5.entangledLanes |= 2; t3; ) {
                  var n3 = 1 << 31 - Cl(t3);
                  e5.entanglements[1] |= n3, t3 &= ~n3;
                }
                Te2(e5), !(Wd & 6) && (ff = Q() + 500, Ee2(0, false));
              }
            }
            break;
          case 31:
          case 13:
            t3 = Xe2(e5, 2), t3 !== null && da2(t3, e5, 2), ha2(), uo2(e5, 2);
        }
      }, fo2.batchedUpdates = function(e5, t3) {
        return e5(t3);
      }, fo2.createComponentSelector = function(e5) {
        return { $$typeof: Ld, value: e5 };
      }, fo2.createContainer = function(e5, t3, n3, r3, i3, a3, o3, s3, c3, l3) {
        return ao2(e5, t3, false, null, n3, r3, a3, null, o3, s3, c3, l3);
      }, fo2.createHasPseudoClassSelector = function(e5) {
        return { $$typeof: Rd, value: e5 };
      }, fo2.createHydrationContainer = function(e5, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3) {
        return e5 = ao2(n3, r3, true, e5, i3, a3, s3, p3, c3, l3, u3, d3), e5.context = oo2(null), n3 = e5.current, r3 = ca2(), r3 = D2(r3), i3 = tt2(r3), i3.callback = t3 ?? null, nt2(n3, i3, r3), t3 = r3, e5.current.lanes = t3, S2(e5, t3), Te2(e5), e5;
      }, fo2.createPortal = function(e5, t3, n3) {
        var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: vo2, key: r3 == null ? null : r3 === Fo2 ? Fo2 : `` + r3, children: e5, containerInfo: t3, implementation: n3 };
      }, fo2.createRoleSelector = function(e5) {
        return { $$typeof: zd, value: e5 };
      }, fo2.createTestNameSelector = function(e5) {
        return { $$typeof: Bd, value: e5 };
      }, fo2.createTextSelector = function(e5) {
        return { $$typeof: Vd, value: e5 };
      }, fo2.defaultOnCaughtError = function(e5) {
        console.error(e5);
      }, fo2.defaultOnRecoverableError = function(e5) {
        Ul(e5);
      }, fo2.defaultOnUncaughtError = function(e5) {
        Ul(e5);
      }, fo2.deferredUpdates = function(e5) {
        var t3 = Z2.T, n3 = ss2();
        try {
          return os2(32), Z2.T = null, e5();
        } finally {
          os2(n3), Z2.T = t3;
        }
      }, fo2.discreteUpdates = function(e5, t3, n3, r3, i3) {
        var a3 = Z2.T, o3 = ss2();
        try {
          return os2(2), Z2.T = null, e5(t3, n3, r3, i3);
        } finally {
          os2(o3), Z2.T = a3, Wd === 0 && (ff = Q() + 500);
        }
      }, fo2.findAllNodes = sa2, fo2.findBoundingRects = function(e5, t3) {
        if (!ws2) throw Error(r2(363));
        t3 = sa2(e5, t3), e5 = [];
        for (var n3 = 0; n3 < t3.length; n3++) e5.push(Es2(t3[n3]));
        for (t3 = e5.length - 1; 0 < t3; t3--) {
          n3 = e5[t3];
          for (var i3 = n3.x, a3 = i3 + n3.width, o3 = n3.y, s3 = o3 + n3.height, c3 = t3 - 1; 0 <= c3; c3--) if (t3 !== c3) {
            var l3 = e5[c3], u3 = l3.x, d3 = u3 + l3.width, f3 = l3.y, p3 = f3 + l3.height;
            if (i3 >= u3 && o3 >= f3 && a3 <= d3 && s3 <= p3) {
              e5.splice(t3, 1);
              break;
            }
            if (i3 !== u3 || n3.width !== l3.width || p3 < o3 || f3 > s3) {
              if (!(o3 !== f3 || n3.height !== l3.height || d3 < i3 || u3 > a3)) {
                u3 > i3 && (l3.width += u3 - i3, l3.x = i3), d3 < a3 && (l3.width = a3 - u3), e5.splice(t3, 1);
                break;
              }
            } else {
              f3 > o3 && (l3.height += f3 - o3, l3.y = o3), p3 < s3 && (l3.height = s3 - f3), e5.splice(t3, 1);
              break;
            }
          }
        }
        return e5;
      }, fo2.findHostInstance = so2, fo2.findHostInstanceWithNoPortals = function(e5) {
        return e5 = o2(e5), e5 = e5 === null ? null : c2(e5), e5 === null ? null : Vo2(e5.stateNode);
      }, fo2.findHostInstanceWithWarning = function(e5) {
        return so2(e5);
      }, fo2.flushPassiveEffects = za2, fo2.flushSyncFromReconciler = function(e5) {
        var t3 = Wd;
        Wd |= 1;
        var n3 = Z2.T, r3 = ss2();
        try {
          if (os2(2), Z2.T = null, e5) return e5();
        } finally {
          os2(r3), Z2.T = n3, Wd = t3, !(Wd & 6) && Ee2(0, false);
        }
      }, fo2.flushSyncWork = ha2, fo2.focusWithin = function(e5, t3) {
        if (!ws2) throw Error(r2(363));
        for (e5 = ra2(e5), t3 = oa2(e5, t3), t3 = Array.from(t3), e5 = 0; e5 < t3.length; ) {
          var n3 = t3[e5++], i3 = n3.tag;
          if (!Os2(n3)) {
            if ((i3 === 5 || i3 === 26 || i3 === 27) && As2(n3.stateNode)) return true;
            for (n3 = n3.child; n3 !== null; ) t3.push(n3), n3 = n3.sibling;
          }
        }
        return false;
      }, fo2.getFindAllNodesFailureDescription = function(e5, t3) {
        if (!ws2) throw Error(r2(363));
        var n3 = 0, i3 = [];
        e5 = [ra2(e5), 0];
        for (var a3 = 0; a3 < e5.length; ) {
          var o3 = e5[a3++], s3 = o3.tag, c3 = e5[a3++], l3 = t3[c3];
          if ((s3 !== 5 && s3 !== 26 && s3 !== 27 || !Os2(o3)) && (ia2(o3, l3) && (i3.push(aa2(l3)), c3++, c3 > n3 && (n3 = c3)), c3 < t3.length)) for (o3 = o3.child; o3 !== null; ) e5.push(o3, c3), o3 = o3.sibling;
        }
        if (n3 < t3.length) {
          for (e5 = []; n3 < t3.length; n3++) e5.push(aa2(t3[n3]));
          return `findAllNodes was able to match part of the selector:
  ` + (i3.join(` > `) + `

No matching component was found for:
  `) + e5.join(` > `);
        }
        return null;
      }, fo2.getPublicRootInstance = function(e5) {
        if (e5 = e5.current, !e5.child) return null;
        switch (e5.child.tag) {
          case 27:
          case 5:
            return Vo2(e5.child.stateNode);
          default:
            return e5.child.stateNode;
        }
      }, fo2.injectIntoDevTools = function() {
        var e5 = { bundleType: 0, version: Ro2, rendererPackageName: zo2, currentDispatcherRef: Z2, reconcilerVersion: `19.3.0` };
        if (Bo2 !== null && (e5.rendererConfig = Bo2), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u`) e5 = false;
        else {
          var t3 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t3.isDisabled || !t3.supportsFiber) e5 = true;
          else {
            try {
              zl = t3.inject(e5), Bl = t3;
            } catch {
            }
            e5 = !!t3.checkDCE;
          }
        }
        return e5;
      }, fo2.isAlreadyRendering = function() {
        return !!(Wd & 6);
      }, fo2.observeVisibleRects = function(e5, t3, n3, i3) {
        if (!ws2) throw Error(r2(363));
        e5 = sa2(e5, t3);
        var a3 = js2(e5, n3, i3).disconnect;
        return { disconnect: function() {
          a3();
        } };
      }, fo2.shouldError = function() {
        return null;
      }, fo2.shouldSuspend = function() {
        return false;
      }, fo2.startHostTransition = function(e5, t3, i3, a3) {
        if (e5.tag !== 5) throw Error(r2(476));
        var o3 = Tn2(e5).queue;
        wn2(e5, o3, t3, ys2, i3 === null ? n2 : function() {
          var t4 = Tn2(e5);
          return t4.next === null && (t4 = e5.alternate.memoizedState), Mn2(e5, t4.next.queue, {}, ca2()), i3(a3);
        });
      }, fo2.updateContainer = function(e5, t3, n3, r3) {
        var i3 = t3.current, a3 = ca2();
        return co2(i3, a3, e5, t3, n3, r3), a3;
      }, fo2.updateContainerSync = function(e5, t3, n3, r3) {
        return co2(t3.current, 2, e5, t3, n3, r3), 2;
      }, fo2;
    }, e3.exports.default = e3.exports, Object.defineProperty(e3.exports, "__esModule", { value: true });
  })(Wn)), Wn.exports;
}
({ exports: {} }).exports;
var qn;
function Jn() {
  return qn || (qn = 1, Un.exports = Kn()), Un.exports;
}
var Yn = Hn(Jn()), Xn = {}, Zn = 0, Qn = (e3) => `${e3[0].toUpperCase()}${e3.slice(1)}`;
function $n(e3) {
  return e3 in Xn;
}
function er(e3) {
  return Xn[e3];
}
function tr(e3) {
  if (typeof e3 == `function`) {
    let t2 = `${Zn++}`;
    return Xn[t2] = e3, t2;
  }
  Object.assign(Xn, e3);
}
function nr(e3) {
  let t2 = Yn(e3);
  return t2.injectIntoDevTools(), t2;
}
var rr = 0, ir = /^three(?=[A-Z])/;
function ar(e3, t2) {
  let n2 = Qn(e3), r2 = er(n2);
  if (e3 !== `primitive` && !r2) throw Error(`R3F: ${n2} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (e3 === `primitive` && !t2.object) throw Error(`R3F: Primitives without 'object' are invalid!`);
  if (t2.args !== void 0 && !Array.isArray(t2.args)) throw Error(`R3F: The args prop must be an array!`);
}
function or(e3, t2, n2) {
  var r2;
  return e3 = $n(Qn(e3)) ? e3 : e3.replace(ir, ``), ar(e3, t2), e3 === `primitive` && (r2 = t2.object) != null && r2.__r3f && delete t2.object.__r3f, qt(t2.object, n2, e3, t2);
}
function sr(e3) {
  if (!e3.isHidden) {
    var t2;
    e3.props.attach && (t2 = e3.parent) != null && t2.object ? Zt(e3.parent, e3) : cn(e3.object) && (e3.previousVisible = e3.object.visible, e3.object.visible = false), e3.isHidden = true, on(e3);
  }
}
function cr(e3) {
  if (e3.isHidden) {
    var t2;
    e3.props.attach && (t2 = e3.parent) != null && t2.object ? Xt(e3.parent, e3) : cn(e3.object) && (e3.object.visible = e3.previousVisible ?? true), e3.previousVisible = void 0, e3.isHidden = false, on(e3);
  }
}
function lr(e3, t2, n2) {
  let r2 = t2.root.getState();
  if (e3.parent || e3.object === r2.scene) {
    if (!t2.object) {
      let e4 = er(Qn(t2.type));
      t2.object = t2.props.object ?? new e4(...t2.props.args ?? []), t2.object.__r3f = t2;
    }
    if (an(t2.object, t2.props), t2.props.attach) Xt(e3, t2);
    else if (cn(t2.object) && cn(e3.object)) {
      let r3 = e3.object.children.indexOf(n2 == null ? void 0 : n2.object);
      if (n2 && r3 !== -1) {
        let n3 = e3.object.children.indexOf(t2.object);
        if (n3 !== -1) {
          e3.object.children.splice(n3, 1);
          let i2 = n3 < r3 ? r3 - 1 : r3;
          e3.object.children.splice(i2, 0, t2.object);
        } else t2.object.parent = e3.object, e3.object.children.splice(r3, 0, t2.object), t2.object.dispatchEvent({ type: `added` }), e3.object.dispatchEvent({ type: `childadded`, child: t2.object });
      } else e3.object.add(t2.object);
    }
    for (let e4 of t2.children) lr(t2, e4);
    on(t2);
  }
}
function ur(e3, t2) {
  if (t2) {
    if (t2.parent === e3) {
      let n2 = e3.children.indexOf(t2);
      n2 !== -1 && e3.children.splice(n2, 1);
    }
    t2.parent = e3, e3.children.push(t2), lr(e3, t2);
  }
}
function dr(e3, t2, n2) {
  if (!t2 || !n2) return;
  if (t2.parent === e3) {
    let n3 = e3.children.indexOf(t2);
    n3 !== -1 && e3.children.splice(n3, 1);
  }
  t2.parent = e3;
  let r2 = e3.children.indexOf(n2);
  r2 === -1 ? e3.children.push(t2) : e3.children.splice(r2, 0, t2), lr(e3, t2, n2);
}
function fr(e3) {
  if (typeof e3.dispose == `function`) {
    let t2 = () => {
      try {
        e3.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < `u` ? t2() : (0, Tt.unstable_scheduleCallback)(Tt.unstable_IdlePriority, t2);
  }
}
function pr(e3, t2, n2) {
  if (!t2) return;
  let r2 = !!t2.parent;
  t2.parent = null;
  let i2 = e3.children.indexOf(t2);
  i2 !== -1 && e3.children.splice(i2, 1), t2.props.attach ? Zt(e3, t2) : cn(t2.object) && cn(e3.object) && (e3.object.remove(t2.object), fn(Pt(t2), t2.object));
  let a2 = t2.props.dispose !== null && n2 !== false;
  for (let e4 = t2.children.length - 1; e4 >= 0; e4--) {
    let n3 = t2.children[e4];
    pr(t2, n3, a2);
  }
  if (t2.children.length = 0, delete t2.object.__r3f, a2 && t2.type !== `primitive` && t2.object.type !== `Scene` && fr(t2.object), n2 === void 0 && r2) {
    var o2;
    let e4 = (o2 = t2.root) == null || o2.getState == null ? void 0 : o2.getState();
    e4 && e4.internal.frames === 0 && e4.invalidate();
  }
}
function mr(e3, t2) {
  for (let n2 of [e3, e3.alternate]) if (n2 !== null) {
    if (typeof n2.ref == `function`) {
      n2.refCleanup == null || n2.refCleanup();
      let e4 = n2.ref(t2);
      typeof e4 == `function` && (n2.refCleanup = e4);
    } else n2.ref && (n2.ref.current = t2);
  }
}
var hr = [];
function gr() {
  if (hr.length !== 0) try {
    _r();
  } finally {
    hr.length = 0;
  }
}
function _r() {
  for (let [e3] of hr) {
    let t2 = e3.parent;
    if (t2) {
      e3.props.attach ? Zt(t2, e3) : cn(e3.object) && cn(t2.object) && t2.object.remove(e3.object);
      for (let t3 of e3.children) t3.props.attach ? Zt(e3, t3) : cn(t3.object) && cn(e3.object) && e3.object.remove(t3.object);
    }
    e3.isHidden && cr(e3), e3.object.__r3f && delete e3.object.__r3f, e3.type !== `primitive` && fr(e3.object);
  }
  for (let [e3, t2, n2] of hr) {
    e3.props = t2;
    let r2 = e3.parent;
    if (r2) {
      let t3 = er(Qn(e3.type)), i2 = e3.object;
      e3.object = e3.props.object ?? new t3(...e3.props.args ?? []), e3.object.__r3f = e3, mr(n2, e3.object), dn(Pt(e3), i2, e3.object), an(e3.object, e3.props), e3.props.attach ? Xt(r2, e3) : cn(e3.object) && cn(r2.object) && r2.object.add(e3.object);
      for (let t4 of e3.children) t4.props.attach ? Xt(e3, t4) : cn(t4.object) && cn(e3.object) && e3.object.add(t4.object);
      on(e3);
    }
  }
}
var vr = () => {
}, yr = {}, br = rr;
function xr(e3) {
  switch (e3) {
    case `beforetoggle`:
    case `cancel`:
    case `click`:
    case `close`:
    case `contextmenu`:
    case `copy`:
    case `cut`:
    case `auxclick`:
    case `dblclick`:
    case `dragend`:
    case `dragstart`:
    case `drop`:
    case `focusin`:
    case `focusout`:
    case `input`:
    case `invalid`:
    case `keydown`:
    case `keypress`:
    case `keyup`:
    case `mousedown`:
    case `mouseup`:
    case `paste`:
    case `pause`:
    case `play`:
    case `pointercancel`:
    case `pointerdown`:
    case `pointerup`:
    case `ratechange`:
    case `reset`:
    case `resize`:
    case `seeked`:
    case `submit`:
    case `touchcancel`:
    case `touchend`:
    case `touchstart`:
    case `volumechange`:
    case `change`:
    case `selectionchange`:
    case `compositionstart`:
    case `compositionend`:
    case `compositionupdate`:
    case `beforeinput`:
    case `blur`:
    case `fullscreenchange`:
    case `focus`:
    case `hashchange`:
    case `popstate`:
    case `select`:
    case `selectstart`:
      return Fn;
    case `drag`:
    case `dragenter`:
    case `dragexit`:
    case `dragleave`:
    case `dragover`:
    case `mousemove`:
    case `mouseout`:
    case `mouseover`:
    case `pointermove`:
    case `pointerout`:
    case `pointerover`:
    case `scroll`:
    case `touchmove`:
    case `wheel`:
    case `mouseenter`:
    case `mouseleave`:
    case `pointerenter`:
    case `pointerleave`:
      return Nn;
    case `message`:
      switch ((0, Tt.unstable_getCurrentPriorityLevel)()) {
        case Tt.unstable_ImmediatePriority:
          return Fn;
        case Tt.unstable_UserBlockingPriority:
          return Nn;
        case Tt.unstable_NormalPriority:
        case Tt.unstable_LowPriority:
          return Pn;
        case Tt.unstable_IdlePriority:
          return In;
        default:
          return Pn;
      }
    default:
      return Pn;
  }
}
function Sr(e3) {
  typeof queueMicrotask == `function` ? queueMicrotask(e3) : typeof Promise < `u` ? Promise.resolve().then(e3).catch((e4) => {
    setTimeout(() => {
      throw e4;
    });
  }) : setTimeout(e3);
}
var Cr = nr({ isPrimaryRenderer: false, warnsIfNotActing: false, supportsMutation: true, supportsPersistence: false, supportsHydration: false, createInstance: or, removeChild: pr, appendChild: ur, appendInitialChild: ur, insertBefore: dr, appendChildToContainer(e3, t2) {
  let n2 = e3.getState().scene.__r3f;
  t2 && n2 && ur(n2, t2);
}, removeChildFromContainer(e3, t2) {
  let n2 = e3.getState().scene.__r3f;
  t2 && n2 && pr(n2, t2);
}, insertInContainerBefore(e3, t2, n2) {
  let r2 = e3.getState().scene.__r3f;
  t2 && n2 && r2 && dr(r2, t2, n2);
}, getRootHostContext: () => yr, getChildHostContext: () => yr, commitUpdate(e3, t2, n2, r2, i2) {
  var _a3, _b2;
  var a2;
  ar(t2, r2);
  let o2 = false;
  if (e3.type === `primitive` && n2.object !== r2.object ? o2 = true : ((_a3 = r2.args) == null ? void 0 : _a3.length) === ((_b2 = n2.args) == null ? void 0 : _b2.length) ? (a2 = r2.args) != null && a2.some((e4, t3) => {
    var _a4;
    return e4 !== ((_a4 = n2.args) == null ? void 0 : _a4[t3]);
  }) && (o2 = true) : o2 = true, o2) hr.push([e3, Kt(r2), i2]);
  else {
    let t3 = tn(e3, r2), n3 = e3.props.attach;
    e3.props = Kt(r2), n3 === void 0 ? delete e3.props.attach : e3.props.attach = n3, Object.keys(t3).length && an(e3.object, t3);
  }
}, finalizeInitialChildren: () => false, commitMount() {
}, getPublicInstance: (e3) => e3 == null ? void 0 : e3.object, prepareForCommit: () => null, preparePortalMount: (e3) => qt(e3.getState().scene, e3, ``, {}), resetAfterCommit: gr, shouldSetTextContent: () => false, clearContainer: () => false, hideInstance: sr, unhideInstance: cr, createTextInstance: vr, hideTextInstance: vr, unhideTextInstance: vr, supportsMicrotasks: true, scheduleMicrotask: Sr, scheduleTimeout: typeof setTimeout == `function` ? setTimeout : void 0, cancelTimeout: typeof clearTimeout == `function` ? clearTimeout : void 0, noTimeout: -1, getInstanceFromNode: () => null, beforeActiveInstanceBlur() {
}, afterActiveInstanceBlur() {
}, detachDeletedInstance() {
}, prepareScopeUpdate() {
}, getInstanceFromScope: () => null, shouldAttemptEagerTransition: () => false, trackSchedulerEvent: () => {
}, resolveEventType: () => null, resolveEventTimeStamp: () => -1.1, requestPostPaintCallback() {
}, maySuspendCommit: () => false, preloadInstance: () => true, suspendInstance() {
}, waitForCommitToBeReady: () => null, NotPendingTransition: null, HostTransitionContext: J.createContext(null), setCurrentUpdatePriority(e3) {
  br = e3;
}, getCurrentUpdatePriority() {
  return br;
}, resolveUpdatePriority() {
  var _a3;
  if (br !== rr) return br;
  let e3 = typeof window < `u` ? (_a3 = window.event) == null ? void 0 : _a3.type : void 0;
  return e3 === void 0 ? Pn : xr(e3);
}, resetFormInstance() {
}, rendererPackageName: `@react-three/fiber`, rendererVersion: Vn.version, applyViewTransitionName(e3, t2, n2) {
}, restoreViewTransitionName(e3, t2) {
}, cancelViewTransitionName(e3, t2, n2) {
}, cancelRootViewTransitionName(e3) {
}, restoreRootViewTransitionName(e3) {
}, InstanceMeasurement: null, measureInstance: (e3) => null, wasInstanceInViewport: (e3) => true, hasInstanceChanged: (e3, t2) => false, hasInstanceAffectedParent: (e3, t2) => false, suspendOnActiveViewTransition(e3, t2) {
}, startViewTransition(e3, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
  return r2(), i2(), u2 == null ? void 0 : u2(), o2(), null;
}, startGestureTransition(e3, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  return o2(), s2(), l2 == null ? void 0 : l2(), null;
}, stopViewTransition(e3) {
}, addViewTransitionFinishedListener(e3, t2) {
  t2();
}, createViewTransitionInstance: (e3) => null, getCurrentGestureOffset(e3) {
  throw Error(`startGestureTransition is not yet supported in react-three-fiber.`);
}, cloneMutableInstance(e3, t2) {
  return e3;
}, cloneMutableTextInstance(e3) {
  return e3;
}, cloneRootViewTransitionContainer(e3) {
  throw Error(`Not implemented.`);
}, removeRootViewTransitionClone(e3, t2) {
  throw Error(`Not implemented.`);
}, createFragmentInstance: (e3) => null, updateFragmentInstanceFiber(e3, t2) {
}, commitNewChildToFragmentInstance(e3, t2) {
}, deleteChildFromFragmentInstance(e3, t2) {
}, measureClonedInstance: (e3) => null, maySuspendCommitOnUpdate: (e3, t2, n2) => false, maySuspendCommitInSyncRender: (e3, t2) => false, startSuspendingCommit: () => null, getSuspendedCommitReason: (e3, t2) => null }), wr = /* @__PURE__ */ new Map();
function Tr(e3, t2) {
  let n2 = e3.state;
  switch (t2.type) {
    case `use`:
      return n2.status !== `disposed` && (e3.state = { status: `open` }, true);
    case `unmount`:
      return n2.status !== `disposed` && (e3.state = { status: `closing`, token: t2.token }, true);
    case `dispose`:
      return n2.status !== `closing` || n2.token !== t2.token ? false : (e3.state = { status: `disposed` }, true);
  }
}
function Er(e3) {
  let t2 = wr.get(e3), n2 = t2 == null ? void 0 : t2.fiber, r2 = t2 == null ? void 0 : t2.store;
  t2 && console.warn(`R3F.createRoot should only be called once!`);
  let i2 = typeof reportError == `function` ? reportError : console.error, a2 = r2 || wn(Kr, qr), o2 = n2 || Cr.createContainer(a2, Mn, null, false, null, ``, i2, i2, i2, null), s2 = t2 || { fiber: o2, store: a2, state: { status: `open` }, ready: hn(void 0), configuration: {}, ownsRenderer: false };
  t2 || wr.set(e3, s2);
  let c2 = false;
  return { get ready() {
    return s2.ready;
  }, configure(t3 = {}) {
    if (!Tr(s2, { type: `use` })) return gn(Error(`R3F: Cannot configure a root after disposal has started.`));
    let n3 = s2.ready, { promise: r3, resolve: i3, reject: o3 } = _n();
    s2.ready = r3;
    let c3 = (n4) => {
      let r4 = a2.getState();
      r4.gl || (s2.ownsRenderer = !vn(t3.gl), r4.set({ gl: n4 })), zn(s2, e3, t3), !s2.unwatchDpr && (t3.dpr === void 0 || Array.isArray(t3.dpr)) && (s2.unwatchDpr = Bn(s2)), i3(this);
    }, l2 = () => {
      try {
        let n4 = a2.getState().gl ?? yn(e3, t3.gl);
        mn(n4) ? Promise.resolve(n4).then(c3).catch(o3) : c3(n4);
      } catch (e4) {
        o3(e4);
      }
    };
    return n3.status === `pending` ? n3.then(l2, o3) : l2(), r3;
  }, render(t3) {
    if (!Tr(s2, { type: `use` })) return a2;
    if (!a2.getState().gl && s2.ready.status === `fulfilled` && this.configure(), s2.ready.status === `rejected`) throw s2.ready.reason;
    let n3 = () => {
      var _a3;
      if (s2.state.status !== `open` || s2.ready.status === `rejected`) return;
      if (s2.ready.status === `pending`) {
        s2.ready.then(n3, i2);
        return;
      }
      let r3 = (_a3 = s2.configuration.previous) == null ? void 0 : _a3.onCreated, l2 = (0, et.jsx)(Dr, { store: a2, children: t3, onCreated: r3, rootElement: e3 });
      c2 ? Cr.updateContainer(l2, o2, null, Rt) : (c2 = true, Cr.updateContainerSync(l2, o2, null, Rt), Cr.flushSyncWork());
    };
    return n3(), a2;
  }, unmount() {
    wr.get(e3) === s2 && kr(e3);
  } };
}
function Dr({ store: e3, children: t2, onCreated: n2, rootElement: r2 }) {
  return Et(() => {
    let t3 = e3.getState();
    t3.set((e4) => ({ internal: { ...e4.internal, active: true } })), n2 && n2(t3), e3.getState().events.connected || t3.events.connect == null || t3.events.connect(r2);
  }, []), (0, et.jsx)(Cn.Provider, { value: e3, children: t2 });
}
function Or(e3) {
  try {
    return e3();
  } catch (e4) {
    console.warn(`[R3F] Error while unmounting root; teardown may be incomplete:`, e4);
  }
}
function kr(e3, t2) {
  let n2 = wr.get(e3), r2 = Symbol(`unmount`);
  if (!n2 || !Tr(n2, { type: `unmount`, token: r2 })) return;
  let i2 = () => {
    var a2;
    if (n2.ready.status === `pending`) {
      n2.ready.then(i2, i2);
      return;
    }
    if (!Tr(n2, { type: `dispose`, token: r2 })) return;
    wr.delete(e3);
    let o2 = n2.store.getState();
    o2.internal.active = false, Or(() => n2.unwatchDpr == null ? void 0 : n2.unwatchDpr()), Or(() => o2.events.disconnect == null ? void 0 : o2.events.disconnect()), (a2 = o2.gl) != null && a2.xr && Or(() => o2.xr.disconnect()), o2.scene && Or(() => Wt(o2.scene));
    let s2 = Or(() => xn(o2.gl, n2.ownsRenderer));
    mn(s2) ? s2.then(() => t2 == null ? void 0 : t2(e3)) : t2 == null ? void 0 : t2(e3);
  };
  Cr.updateContainer(null, n2.fiber, null, () => {
    n2.state.status === `closing` && n2.state.token === r2 && Cr.updateContainer(null, n2.fiber, null, i2);
  });
}
function Ar(e3, t2) {
  let n2 = { callback: e3 };
  return t2.add(n2), () => void t2.delete(n2);
}
var jr = /* @__PURE__ */ new Set(), Mr = /* @__PURE__ */ new Set(), Nr = /* @__PURE__ */ new Set(), Pr = (e3) => Ar(e3, jr);
function Fr(e3, t2) {
  if (e3.size) for (let { callback: n2 } of e3.values()) n2(t2);
}
function Ir(e3, t2) {
  switch (e3) {
    case `before`:
      return Fr(jr, t2);
    case `after`:
      return Fr(Mr, t2);
    case `tail`:
      return Fr(Nr, t2);
  }
}
var Lr, Rr;
function zr(e3, t2, n2) {
  let r2 = t2.clock.getDelta();
  t2.frameloop === `never` && typeof e3 == `number` && (r2 = e3 - t2.clock.elapsedTime, t2.clock.oldTime = t2.clock.elapsedTime, t2.clock.elapsedTime = e3), Lr = t2.internal.subscribers;
  for (let e4 = 0; e4 < Lr.length; e4++) Rr = Lr[e4], Rr.ref.current(Rr.store.getState(), r2, n2);
  return !t2.internal.priority && t2.gl.render && t2.gl.render(t2.scene, t2.camera), t2.internal.frames = Math.max(0, t2.internal.frames - 1), t2.frameloop === `always` ? 1 : t2.internal.frames;
}
var Br = false, Vr = false, Hr, Ur, Wr;
function Gr(e3) {
  Ur = requestAnimationFrame(Gr), Br = true, Hr = 0, Ir(`before`, e3), Vr = true;
  for (let n2 of wr.values()) {
    var t2;
    Wr = n2.store.getState(), Wr.internal.active && (Wr.frameloop === `always` || Wr.internal.frames > 0) && !((t2 = Wr.gl.xr) != null && t2.isPresenting) && (Hr += zr(e3, Wr));
  }
  if (Vr = false, Ir(`after`, e3), Hr === 0) return Ir(`tail`, e3), Br = false, cancelAnimationFrame(Ur);
}
function Kr(e3, t2 = 1) {
  var n2;
  if (!e3) return wr.forEach((e4) => Kr(e4.store.getState(), t2));
  (n2 = e3.gl.xr) != null && n2.isPresenting || !e3.internal.active || e3.frameloop === `never` || (t2 > 1 ? e3.internal.frames = Math.min(60, e3.internal.frames + t2) : Vr ? e3.internal.frames = 2 : e3.internal.frames = 1, Br || (Br = true, requestAnimationFrame(Gr)));
}
function qr(e3, t2 = true, n2, r2) {
  if (t2 && Ir(`before`, e3), n2) zr(e3, n2, r2);
  else for (let t3 of wr.values()) zr(e3, t3.store.getState());
  t2 && Ir(`after`, e3);
}
function Jr(e3, t2, n2) {
  return (0, et.jsx)(Xr, { children: e3, container: t2, state: n2 });
}
function Yr(e3, t2) {
  let { parentStore: n2, container: r2 } = e3, i2 = at((e4, n3) => ({ ...t2, set: e4, get: n3, setEvents: (t3) => e4((e5) => ({ ...e5, events: { ...e5.events, ...t3 } })) })), a2 = { current: n2.getState() };
  return i2.setState((t3) => Zr(a2.current, t3, e3)), { parentStore: n2, container: r2, portalStore: i2, parentStateRef: a2 };
}
function Xr({ state: e3 = {}, children: t2, container: n2 }) {
  let r2 = Tn(), { events: i2, size: o2, ...s2 } = e3, [c2] = J.useState(() => new Oe()), [l2] = J.useState(() => new a()), u2 = { parentStore: r2, container: n2, raycaster: c2, pointer: l2, events: i2, size: o2 }, d2 = Dt((e4, t3) => Zr(e4, t3, u2)), [f2, p2] = J.useState(() => Yr(u2, s2));
  (f2.parentStore !== r2 || f2.container !== n2) && p2(Yr(u2, s2));
  let { portalStore: m2, parentStateRef: h2 } = f2;
  return Et(() => {
    let e4 = (e5) => {
      h2.current = e5, m2.setState((t4) => d2.current(e5, t4));
    }, t3 = r2.subscribe(e4), n3 = r2.getState();
    return n3 !== h2.current && e4(n3), t3;
  }, [r2, m2, h2]), (0, et.jsx)(et.Fragment, { children: Cr.createPortal((0, et.jsx)(Cn.Provider, { value: m2, children: t2 }), m2, null) });
}
function Zr(e3, t2, n2) {
  let { parentStore: r2, container: i2, raycaster: a2, pointer: o2, events: s2, size: c2 } = n2, l2;
  if (t2.camera && c2) {
    let n3 = t2.camera;
    l2 = e3.viewport.getCurrentViewport(n3, new G(), c2), n3 !== e3.camera && sn(n3, c2);
  }
  return { ...e3, ...t2, scene: i2, raycaster: a2, pointer: o2, mouse: o2, previousRoot: r2, events: { ...e3.events, ...t2.events, ...s2 }, size: { ...e3.size, ...c2 }, viewport: { ...e3.viewport, ...l2 } };
}
var Qr = { onClick: [`click`, false], onContextMenu: [`contextmenu`, false], onDoubleClick: [`dblclick`, false], onWheel: [`wheel`, true], onPointerDown: [`pointerdown`, true], onPointerUp: [`pointerup`, true], onPointerLeave: [`pointerleave`, true], onPointerMove: [`pointermove`, true], onPointerCancel: [`pointercancel`, true], onLostPointerCapture: [`lostpointercapture`, true] };
function $r(e3) {
  let { handlePointer: t2 } = pn(e3);
  return { priority: 1, enabled: true, compute(e4, t3, n2) {
    t3.pointer.set(e4.offsetX / t3.size.width * 2 - 1, -(e4.offsetY / t3.size.height) * 2 + 1), t3.raycaster.setFromCamera(t3.pointer, t3.camera);
  }, connected: void 0, handlers: Object.keys(Qr).reduce((e4, n2) => ({ ...e4, [n2]: t2(n2) }), {}), update: () => {
    var t3;
    let { events: n2, internal: r2 } = e3.getState();
    (t3 = r2.lastEvent) != null && t3.current && n2.handlers && n2.handlers.onPointerMove(r2.lastEvent.current);
  }, connect: (t3) => {
    let { set: n2, events: r2 } = e3.getState();
    if (r2.disconnect == null || r2.disconnect(), n2((e4) => ({ events: { ...e4.events, connected: t3 } })), r2.handlers) for (let e4 in r2.handlers) {
      let n3 = r2.handlers[e4], [i2, a2] = Qr[e4];
      t3.addEventListener(i2, n3, { passive: a2 });
    }
  }, disconnect: () => {
    let { set: t3, events: n2 } = e3.getState();
    if (n2.connected) {
      if (n2.handlers) for (let e4 in n2.handlers) {
        let t4 = n2.handlers[e4], [r2] = Qr[e4];
        n2.connected.removeEventListener(r2, t4);
      }
      t3((e4) => ({ events: { ...e4.events, connected: void 0 } }));
    }
  } };
}
function ei(e3, t2) {
  let n2;
  return (...r2) => {
    window.clearTimeout(n2), n2 = window.setTimeout(() => e3(...r2), t2);
  };
}
function ti({ debounce: e3, scroll: t2, polyfill: n2, offsetSize: r2 } = { debounce: 0, scroll: false, offsetSize: false }) {
  let i2 = n2 || (typeof window > `u` ? class {
  } : window.ResizeObserver);
  if (!i2) throw Error(`This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills`);
  let [a2, o2] = (0, J.useState)({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), s2 = (0, J.useRef)({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: a2, orientationHandler: null }), c2 = e3 ? typeof e3 == `number` ? e3 : e3.scroll : null, l2 = e3 ? typeof e3 == `number` ? e3 : e3.resize : null, u2 = (0, J.useRef)(false);
  (0, J.useEffect)(() => (u2.current = true, () => void (u2.current = false)));
  let [d2, f2, p2] = (0, J.useMemo)(() => {
    let e4 = () => {
      if (!s2.current.element) return;
      let { left: e5, top: t3, width: n3, height: i3, bottom: a3, right: c3, x: l3, y: d3 } = s2.current.element.getBoundingClientRect(), f3 = { left: e5, top: t3, width: n3, height: i3, bottom: a3, right: c3, x: l3, y: d3 };
      s2.current.element instanceof HTMLElement && r2 && (f3.height = s2.current.element.offsetHeight, f3.width = s2.current.element.offsetWidth), Object.freeze(f3), u2.current && !oi(s2.current.lastBounds, f3) && o2(s2.current.lastBounds = f3);
    };
    return [e4, l2 ? ei(e4, l2) : e4, c2 ? ei(e4, c2) : e4];
  }, [o2, r2, c2, l2]);
  function m2() {
    s2.current.scrollContainers && (s2.current.scrollContainers.forEach((e4) => e4.removeEventListener(`scroll`, p2, true)), s2.current.scrollContainers = null), s2.current.resizeObserver && (s2.current.resizeObserver.disconnect(), s2.current.resizeObserver = null), s2.current.orientationHandler && (`orientation` in screen && `removeEventListener` in screen.orientation ? screen.orientation.removeEventListener(`change`, s2.current.orientationHandler) : `onorientationchange` in window && window.removeEventListener(`orientationchange`, s2.current.orientationHandler));
  }
  function h2() {
    s2.current.element && (s2.current.resizeObserver = new i2(p2), s2.current.resizeObserver.observe(s2.current.element), t2 && s2.current.scrollContainers && s2.current.scrollContainers.forEach((e4) => e4.addEventListener(`scroll`, p2, { capture: true, passive: true })), s2.current.orientationHandler = () => {
      p2();
    }, `orientation` in screen && `addEventListener` in screen.orientation ? screen.orientation.addEventListener(`change`, s2.current.orientationHandler) : `onorientationchange` in window && window.addEventListener(`orientationchange`, s2.current.orientationHandler));
  }
  return ri(p2, !!t2), ni(f2), (0, J.useEffect)(() => {
    m2(), h2();
  }, [t2, p2, f2]), (0, J.useEffect)(() => m2, []), [(e4) => {
    !e4 || e4 === s2.current.element || (m2(), s2.current.element = e4, s2.current.scrollContainers = ii(e4), h2());
  }, a2, d2];
}
function ni(e3) {
  (0, J.useEffect)(() => {
    let t2 = e3;
    return window.addEventListener(`resize`, t2), () => void window.removeEventListener(`resize`, t2);
  }, [e3]);
}
function ri(e3, t2) {
  (0, J.useEffect)(() => {
    if (t2) {
      let t3 = e3;
      return window.addEventListener(`scroll`, t3, { capture: true, passive: true }), () => void window.removeEventListener(`scroll`, t3, true);
    }
  }, [e3, t2]);
}
function ii(e3) {
  let t2 = [];
  if (!e3 || e3 === document.body) return t2;
  let { overflow: n2, overflowX: r2, overflowY: i2 } = window.getComputedStyle(e3);
  return [n2, r2, i2].some((e4) => e4 === `auto` || e4 === `scroll`) && t2.push(e3), [...t2, ...ii(e3.parentElement)];
}
var ai = [`x`, `y`, `top`, `bottom`, `left`, `right`, `width`, `height`], oi = (e3, t2) => ai.every((n2) => e3[n2] === t2[n2]);
function si({ ref: e3, children: t2, fallback: n2, resize: r2, style: i2, gl: a2, events: o2 = $r, eventSource: s2, eventPrefix: c2, shadows: l2, linear: u2, flat: d2, legacy: f2, orthographic: p2, frameloop: m2, dpr: h2, performance: g2, raycaster: _2, camera: v2, scene: y2, onPointerMissed: b2, onCreated: x2, ...S2 }) {
  J.useMemo(() => tr(k), []);
  let C2 = jt(), [w2, T2] = ti({ scroll: true, debounce: { scroll: 50, resize: 0 }, ...r2 }), E2 = J.useRef(null), D2 = J.useRef(null);
  J.useImperativeHandle(e3, () => E2.current);
  let O2 = Dt(b2), A2 = J.useCallback((e4) => O2.current == null ? void 0 : O2.current(e4), [O2]), [j2, M2] = J.useState(false), [N2, P2] = J.useState(false);
  if (j2) throw j2;
  if (N2) throw N2;
  let F2 = J.useRef(null), [I2, ee2] = kt(), L2 = J.useRef(null), R2 = () => s2 ? It(s2) ? s2.current : s2 : D2.current;
  return J.useInsertionEffect(() => () => {
    let e4 = F2.current;
    F2.current = null, e4 == null ? void 0 : e4.unmount();
  }, []), Et(() => {
    let e4 = E2.current;
    T2.width > 0 && T2.height > 0 && e4 && (F2.current || (F2.current = Er(e4)), F2.current.configure({ gl: a2, scene: y2, events: o2, shadows: l2, linear: u2, flat: d2, legacy: f2, orthographic: p2, frameloop: m2, dpr: h2, performance: g2, raycaster: _2, camera: v2, size: T2, onPointerMissed: A2, onCreated: (e5) => {
      L2.current = e5, e5.events.connect == null || e5.events.connect(R2() ?? D2.current), c2 && e5.setEvents({ compute: (e6, t3) => {
        let n3 = e6[c2 + `X`], r3 = e6[c2 + `Y`];
        t3.pointer.set(n3 / t3.size.width * 2 - 1, -(r3 / t3.size.height) * 2 + 1), t3.raycaster.setFromCamera(t3.pointer, t3.camera);
      } }), x2 == null ? void 0 : x2(e5);
    } }).catch(P2), F2.current.ready.status === `fulfilled` ? F2.current.render((0, et.jsx)(C2, { children: (0, et.jsx)(Nt, { set: P2, children: (0, et.jsx)(J.Suspense, { fallback: (0, et.jsx)(Mt, { set: M2 }), children: t2 ?? null }) }) })) : F2.current.ready.status === `pending` && ee2(F2.current.ready));
  }), J.useEffect(() => {
    var _a3;
    let e4 = (_a3 = L2.current) == null ? void 0 : _a3.get(), t3 = R2();
    e4 && t3 && e4.events.connected !== t3 && (e4.events.connect == null || e4.events.connect(t3));
  }), J.useEffect(() => {
    let e4 = E2.current;
    return () => {
      var t3;
      e4.isConnected || (t3 = F2.current) == null || t3.unmount();
    };
  }, []), (0, et.jsxs)(`div`, { ref: D2, style: { position: `relative`, width: `100%`, height: `100%`, overflow: `hidden`, pointerEvents: s2 ? `none` : `auto`, ...i2 }, ...S2, children: [(0, et.jsx)(`div`, { ref: w2, style: { width: `100%`, height: `100%` }, children: (0, et.jsx)(`canvas`, { ref: E2, style: { display: `block` }, children: n2 }) }), I2] });
}
function ci(e3) {
  return (0, et.jsx)(gt, { children: (0, et.jsx)(si, { ...e3 }) });
}
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e3[r2] = n2[r2]);
    }
    return e3;
  }, li.apply(null, arguments);
}
var ui = new G(), di = new G(), fi = new G(), pi = new a();
function mi(e3, t2, n2) {
  let r2 = ui.setFromMatrixPosition(e3.matrixWorld);
  r2.project(t2);
  let i2 = n2.width / 2, a2 = n2.height / 2;
  return [r2.x * i2 + i2, -(r2.y * a2) + a2];
}
function hi(e3, t2) {
  let n2 = ui.setFromMatrixPosition(e3.matrixWorld), r2 = di.setFromMatrixPosition(t2.matrixWorld), i2 = n2.sub(r2), a2 = t2.getWorldDirection(fi);
  return i2.angleTo(a2) > Math.PI / 2;
}
function gi(e3, t2, n2, r2) {
  let i2 = ui.setFromMatrixPosition(e3.matrixWorld), a2 = i2.clone();
  a2.project(t2), pi.set(a2.x, a2.y), n2.setFromCamera(pi, t2);
  let o2 = n2.intersectObjects(r2, true);
  if (o2.length) {
    let e4 = o2[0].distance;
    return i2.distanceTo(n2.ray.origin) < e4;
  }
  return true;
}
function _i(e3, t2) {
  if (t2 instanceof p) return t2.zoom;
  if (t2 instanceof Ee) {
    let n2 = ui.setFromMatrixPosition(e3.matrixWorld), r2 = di.setFromMatrixPosition(t2.matrixWorld), i2 = t2.fov * Math.PI / 180, a2 = n2.distanceTo(r2);
    return 1 / (2 * Math.tan(i2 / 2) * a2);
  }
  return 1;
}
function vi(e3, t2, n2) {
  if (t2 instanceof Ee || t2 instanceof p) {
    let r2 = ui.setFromMatrixPosition(e3.matrixWorld), i2 = di.setFromMatrixPosition(t2.matrixWorld), a2 = r2.distanceTo(i2), o2 = (n2[1] - n2[0]) / (t2.far - t2.near), s2 = n2[1] - o2 * t2.far;
    return Math.round(o2 * a2 + s2);
  }
}
var yi = (e3) => Math.abs(e3) < 1e-10 ? 0 : e3;
function bi(e3, t2, n2 = ``) {
  let r2 = `matrix3d(`;
  for (let n3 = 0; n3 !== 16; n3++) r2 += yi(t2[n3] * e3.elements[n3]) + (n3 === 15 ? `)` : `,`);
  return n2 + r2;
}
var xi = /* @__PURE__ */ ((e3) => (t2) => bi(t2, e3))([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]), Si = /* @__PURE__ */ ((e3) => (t2, n2) => bi(t2, e3(n2), `translate(-50%,-50%)`))((e3) => [1 / e3, 1 / e3, 1 / e3, 1, -1 / e3, -1 / e3, -1 / e3, -1, 1 / e3, 1 / e3, 1 / e3, 1, 1, 1, 1, 1]);
function Ci(e3) {
  return e3 && typeof e3 == `object` && `current` in e3;
}
var wi = J.forwardRef(({ children: e3, eps: t2 = 1e-3, style: n2, className: r2, prepend: i2, center: a2, fullscreen: o2, portal: s2, distanceFactor: c2, sprite: l2 = false, transform: u2 = false, occlude: d2, onOcclude: f2, castShadow: p2, receiveShadow: m2, material: h2, geometry: g2, zIndexRange: _2 = [16777271, 0], calculatePosition: v2 = mi, as: y2 = `div`, wrapperClass: b2, pointerEvents: x2 = `auto`, ...S2 }, C2) => {
  let { gl: w2, camera: T2, scene: E2, size: D2, raycaster: O2, events: k2, viewport: A2 } = En(), [j2] = J.useState(() => document.createElement(y2)), M2 = J.useRef(null), N2 = J.useRef(null), P2 = J.useRef(0), F2 = J.useRef([0, 0]), I2 = J.useRef(null), ee2 = J.useRef(null), L2 = (s2 == null ? void 0 : s2.current) || k2.connected || w2.domElement.parentNode, R2 = J.useRef(null), z2 = J.useRef(false), B2 = J.useMemo(() => d2 && d2 !== `blending` || Array.isArray(d2) && d2.length && Ci(d2[0]), [d2]);
  J.useLayoutEffect(() => {
    let e4 = w2.domElement;
    d2 && d2 === `blending` ? (e4.style.zIndex = `${Math.floor(_2[0] / 2)}`, e4.style.position = `absolute`, e4.style.pointerEvents = `none`) : (e4.style.zIndex = null, e4.style.position = null, e4.style.pointerEvents = null);
  }, [d2]), J.useLayoutEffect(() => {
    if (N2.current) {
      let e4 = M2.current = Ge.createRoot(j2);
      if (E2.updateMatrixWorld(), u2) j2.style.cssText = `position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;`;
      else {
        let e5 = v2(N2.current, T2, D2);
        j2.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${e5[0]}px,${e5[1]}px,0);transform-origin:0 0;`;
      }
      return L2 && (i2 ? L2.prepend(j2) : L2.appendChild(j2)), () => {
        L2 && L2.removeChild(j2), e4.unmount();
      };
    }
  }, [L2, u2]), J.useLayoutEffect(() => {
    b2 && (j2.className = b2);
  }, [b2]);
  let te2 = J.useMemo(() => u2 ? { position: `absolute`, top: 0, left: 0, width: D2.width, height: D2.height, transformStyle: `preserve-3d`, pointerEvents: `none` } : { position: `absolute`, transform: a2 ? `translate3d(-50%,-50%,0)` : `none`, ...o2 && { top: -D2.height / 2, left: -D2.width / 2, width: D2.width, height: D2.height }, ...n2 }, [n2, a2, o2, D2, u2]), V2 = J.useMemo(() => ({ position: `absolute`, pointerEvents: x2 }), [x2]);
  J.useLayoutEffect(() => {
    if (z2.current = false, u2) {
      var t3;
      (t3 = M2.current) == null || t3.render(J.createElement(`div`, { ref: I2, style: te2 }, J.createElement(`div`, { ref: ee2, style: V2 }, J.createElement(`div`, { ref: C2, className: r2, style: n2, children: e3 }))));
    } else {
      var i3;
      (i3 = M2.current) == null || i3.render(J.createElement(`div`, { ref: C2, style: te2, className: r2, children: e3 }));
    }
  });
  let ne2 = J.useRef(true);
  Dn((e4) => {
    if (N2.current) {
      T2.updateMatrixWorld(), N2.current.updateWorldMatrix(true, false);
      let e5 = u2 ? F2.current : v2(N2.current, T2, D2);
      if (u2 || Math.abs(P2.current - T2.zoom) > t2 || Math.abs(F2.current[0] - e5[0]) > t2 || Math.abs(F2.current[1] - e5[1]) > t2) {
        let t3 = hi(N2.current, T2), n3 = false;
        B2 && (Array.isArray(d2) ? n3 = d2.map((e6) => e6.current) : d2 !== `blending` && (n3 = [E2]));
        let r3 = ne2.current;
        if (n3) {
          let e6 = gi(N2.current, T2, O2, n3);
          ne2.current = e6 && !t3;
        } else ne2.current = !t3;
        r3 !== ne2.current && (f2 ? f2(!ne2.current) : j2.style.display = ne2.current ? `block` : `none`);
        let i3 = Math.floor(_2[0] / 2), a3 = d2 ? B2 ? [_2[0], i3] : [i3 - 1, 0] : _2;
        if (j2.style.zIndex = `${vi(N2.current, T2, a3)}`, u2) {
          let [e6, t4] = [D2.width / 2, D2.height / 2], n4 = T2.projectionMatrix.elements[5] * t4, { isOrthographicCamera: r4, top: i4, left: a4, bottom: o3, right: s3 } = T2, u3 = xi(T2.matrixWorldInverse), d3 = r4 ? `scale(${n4})translate(${yi(-(s3 + a4) / 2)}px,${yi((i4 + o3) / 2)}px)` : `translateZ(${n4}px)`, f3 = N2.current.matrixWorld;
          l2 && (f3 = T2.matrixWorldInverse.clone().transpose().copyPosition(f3).scale(N2.current.scale), f3.elements[3] = f3.elements[7] = f3.elements[11] = 0, f3.elements[15] = 1), j2.style.width = D2.width + `px`, j2.style.height = D2.height + `px`, j2.style.perspective = r4 ? `` : `${n4}px`, I2.current && ee2.current && (I2.current.style.transform = `${d3}${u3}translate(${e6}px,${t4}px)`, ee2.current.style.transform = Si(f3, 1 / ((c2 || 10) / 400)));
        } else {
          let t4 = c2 === void 0 ? 1 : _i(N2.current, T2) * c2;
          j2.style.transform = `translate3d(${e5[0]}px,${e5[1]}px,0) scale(${t4})`;
        }
        F2.current = e5, P2.current = T2.zoom;
      }
    }
    if (!B2 && R2.current && !z2.current) {
      if (u2) {
        if (I2.current) {
          let e5 = I2.current.children[0];
          if (e5 != null && e5.clientWidth && e5 != null && e5.clientHeight) {
            let { isOrthographicCamera: t3 } = T2;
            if (t3 || g2) S2.scale && (Array.isArray(S2.scale) ? S2.scale instanceof G ? R2.current.scale.copy(S2.scale.clone().divideScalar(1)) : R2.current.scale.set(1 / S2.scale[0], 1 / S2.scale[1], 1 / S2.scale[2]) : R2.current.scale.setScalar(1 / S2.scale));
            else {
              let t4 = (c2 || 10) / 400, n3 = e5.clientWidth * t4, r3 = e5.clientHeight * t4;
              R2.current.scale.set(n3, r3, 1);
            }
            z2.current = true;
          }
        }
      } else {
        let t3 = j2.children[0];
        if (t3 != null && t3.clientWidth && t3 != null && t3.clientHeight) {
          let e5 = 1 / A2.factor, n3 = t3.clientWidth * e5, r3 = t3.clientHeight * e5;
          R2.current.scale.set(n3, r3, 1), z2.current = true;
        }
        R2.current.lookAt(e4.camera.position);
      }
    }
  });
  let H2 = J.useMemo(() => ({ vertexShader: u2 ? void 0 : `
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
      ` }), [u2]);
  return J.createElement(`group`, li({}, S2, { ref: N2 }), d2 && !B2 && J.createElement(`mesh`, { castShadow: p2, receiveShadow: m2, ref: R2 }, g2 || J.createElement(`planeGeometry`, null), h2 || J.createElement(`shaderMaterial`, { side: 2, vertexShader: H2.vertexShader, fragmentShader: H2.fragmentShader })));
}), Ti = parseInt(`187`.replace(/\D+/g, ``)), Ei = Ti >= 125 ? `uv1` : `uv2`;
function Di(e3, t2 = Math.PI / 3) {
  let n2 = Math.cos(t2), r2 = (1 + 1e-10) * 100, i2 = [new G(), new G(), new G()], a2 = new G(), o2 = new G(), s2 = new G(), c2 = new G();
  function l2(e4) {
    return `${~~(e4.x * r2)},${~~(e4.y * r2)},${~~(e4.z * r2)}`;
  }
  let u2 = e3.index ? e3.toNonIndexed() : e3, d2 = u2.attributes.position, f2 = {};
  for (let e4 = 0, t3 = d2.count / 3; e4 < t3; e4++) {
    let t4 = 3 * e4, n3 = i2[0].fromBufferAttribute(d2, t4 + 0), r3 = i2[1].fromBufferAttribute(d2, t4 + 1), s3 = i2[2].fromBufferAttribute(d2, t4 + 2);
    a2.subVectors(s3, r3), o2.subVectors(n3, r3);
    let c3 = new G().crossVectors(a2, o2).normalize();
    for (let e5 = 0; e5 < 3; e5++) {
      let t5 = i2[e5], n4 = l2(t5);
      n4 in f2 || (f2[n4] = []), f2[n4].push(c3);
    }
  }
  let p2 = new Float32Array(d2.count * 3), m2 = new P(p2, 3, false);
  for (let e4 = 0, t3 = d2.count / 3; e4 < t3; e4++) {
    let t4 = 3 * e4, r3 = i2[0].fromBufferAttribute(d2, t4 + 0), u3 = i2[1].fromBufferAttribute(d2, t4 + 1), p3 = i2[2].fromBufferAttribute(d2, t4 + 2);
    a2.subVectors(p3, u3), o2.subVectors(r3, u3), s2.crossVectors(a2, o2).normalize();
    for (let e5 = 0; e5 < 3; e5++) {
      let r4 = i2[e5], a3 = f2[l2(r4)];
      c2.set(0, 0, 0);
      for (let e6 = 0, t5 = a3.length; e6 < t5; e6++) {
        let t6 = a3[e6];
        s2.dot(t6) > n2 && c2.add(t6);
      }
      c2.normalize(), m2.setXYZ(t4 + e5, c2.x, c2.y, c2.z);
    }
  }
  return u2.setAttribute(`normal`, m2), u2;
}
var Oi = Uint8Array, ki = Uint16Array, Ai = Uint32Array, ji = new Oi([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Mi = new Oi([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Ni = new Oi([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Pi = function(e3, t2) {
  for (var n2 = new ki(31), r2 = 0; r2 < 31; ++r2) n2[r2] = t2 += 1 << e3[r2 - 1];
  for (var i2 = new Ai(n2[30]), r2 = 1; r2 < 30; ++r2) for (var a2 = n2[r2]; a2 < n2[r2 + 1]; ++a2) i2[a2] = a2 - n2[r2] << 5 | r2;
  return [n2, i2];
}, Fi = Pi(ji, 2), Ii = Fi[0], Li = Fi[1];
Ii[28] = 258, Li[258] = 28;
var Ri = Pi(Mi, 0), zi = Ri[0];
Ri[1];
for (var Bi = new ki(32768), Vi = 0; Vi < 32768; ++Vi) {
  var Hi = (Vi & 43690) >>> 1 | (Vi & 21845) << 1;
  Hi = (Hi & 52428) >>> 2 | (Hi & 13107) << 2, Hi = (Hi & 61680) >>> 4 | (Hi & 3855) << 4, Bi[Vi] = ((Hi & 65280) >>> 8 | (Hi & 255) << 8) >>> 1;
}
for (var Ui = (function(e3, t2, n2) {
  for (var r2 = e3.length, i2 = 0, a2 = new ki(t2); i2 < r2; ++i2) ++a2[e3[i2] - 1];
  var o2 = new ki(t2);
  for (i2 = 0; i2 < t2; ++i2) o2[i2] = o2[i2 - 1] + a2[i2 - 1] << 1;
  var s2;
  if (n2) {
    s2 = new ki(1 << t2);
    var c2 = 15 - t2;
    for (i2 = 0; i2 < r2; ++i2) if (e3[i2]) for (var l2 = i2 << 4 | e3[i2], u2 = t2 - e3[i2], d2 = o2[e3[i2] - 1]++ << u2, f2 = d2 | (1 << u2) - 1; d2 <= f2; ++d2) s2[Bi[d2] >>> c2] = l2;
  } else for (s2 = new ki(r2), i2 = 0; i2 < r2; ++i2) e3[i2] && (s2[i2] = Bi[o2[e3[i2] - 1]++] >>> 15 - e3[i2]);
  return s2;
}), Wi = new Oi(288), Vi = 0; Vi < 144; ++Vi) Wi[Vi] = 8;
for (var Vi = 144; Vi < 256; ++Vi) Wi[Vi] = 9;
for (var Vi = 256; Vi < 280; ++Vi) Wi[Vi] = 7;
for (var Vi = 280; Vi < 288; ++Vi) Wi[Vi] = 8;
for (var Gi = new Oi(32), Vi = 0; Vi < 32; ++Vi) Gi[Vi] = 5;
var Ki = Ui(Wi, 9, 1), qi = Ui(Gi, 5, 1), Ji = function(e3) {
  for (var t2 = e3[0], n2 = 1; n2 < e3.length; ++n2) e3[n2] > t2 && (t2 = e3[n2]);
  return t2;
}, Yi = function(e3, t2, n2) {
  var r2 = t2 / 8 | 0;
  return (e3[r2] | e3[r2 + 1] << 8) >> (t2 & 7) & n2;
}, Xi = function(e3, t2) {
  var n2 = t2 / 8 | 0;
  return (e3[n2] | e3[n2 + 1] << 8 | e3[n2 + 2] << 16) >> (t2 & 7);
}, Zi = function(e3) {
  return (e3 / 8 | 0) + (e3 & 7 && 1);
}, Qi = function(e3, t2, n2) {
  (t2 == null || t2 < 0) && (t2 = 0), (n2 == null || n2 > e3.length) && (n2 = e3.length);
  var r2 = new (e3 instanceof ki ? ki : e3 instanceof Ai ? Ai : Oi)(n2 - t2);
  return r2.set(e3.subarray(t2, n2)), r2;
}, $i = function(e3, t2, n2) {
  var r2 = e3.length;
  if (!r2 || n2 && !n2.l && r2 < 5) return t2 || new Oi(0);
  var i2 = !t2 || n2, a2 = !n2 || n2.i;
  n2 || (n2 = {}), t2 || (t2 = new Oi(r2 * 3));
  var o2 = function(e4) {
    var n3 = t2.length;
    if (e4 > n3) {
      var r3 = new Oi(Math.max(n3 * 2, e4));
      r3.set(t2), t2 = r3;
    }
  }, s2 = n2.f || 0, c2 = n2.p || 0, l2 = n2.b || 0, u2 = n2.l, d2 = n2.d, f2 = n2.m, p2 = n2.n, m2 = r2 * 8;
  do {
    if (!u2) {
      n2.f = s2 = Yi(e3, c2, 1);
      var h2 = Yi(e3, c2 + 1, 3);
      if (c2 += 3, !h2) {
        var g2 = Zi(c2) + 4, _2 = e3[g2 - 4] | e3[g2 - 3] << 8, v2 = g2 + _2;
        if (v2 > r2) {
          if (a2) throw `unexpected EOF`;
          break;
        }
        i2 && o2(l2 + _2), t2.set(e3.subarray(g2, v2), l2), n2.b = l2 += _2, n2.p = c2 = v2 * 8;
        continue;
      }
      if (h2 == 1) u2 = Ki, d2 = qi, f2 = 9, p2 = 5;
      else if (h2 == 2) {
        var y2 = Yi(e3, c2, 31) + 257, b2 = Yi(e3, c2 + 10, 15) + 4, x2 = y2 + Yi(e3, c2 + 5, 31) + 1;
        c2 += 14;
        for (var S2 = new Oi(x2), C2 = new Oi(19), w2 = 0; w2 < b2; ++w2) C2[Ni[w2]] = Yi(e3, c2 + w2 * 3, 7);
        c2 += b2 * 3;
        for (var T2 = Ji(C2), E2 = (1 << T2) - 1, D2 = Ui(C2, T2, 1), w2 = 0; w2 < x2; ) {
          var O2 = D2[Yi(e3, c2, E2)];
          c2 += O2 & 15;
          var g2 = O2 >>> 4;
          if (g2 < 16) S2[w2++] = g2;
          else {
            var k2 = 0, A2 = 0;
            for (g2 == 16 ? (A2 = 3 + Yi(e3, c2, 3), c2 += 2, k2 = S2[w2 - 1]) : g2 == 17 ? (A2 = 3 + Yi(e3, c2, 7), c2 += 3) : g2 == 18 && (A2 = 11 + Yi(e3, c2, 127), c2 += 7); A2--; ) S2[w2++] = k2;
          }
        }
        var j2 = S2.subarray(0, y2), M2 = S2.subarray(y2);
        f2 = Ji(j2), p2 = Ji(M2), u2 = Ui(j2, f2, 1), d2 = Ui(M2, p2, 1);
      } else throw `invalid block type`;
      if (c2 > m2) {
        if (a2) throw `unexpected EOF`;
        break;
      }
    }
    i2 && o2(l2 + 131072);
    for (var N2 = (1 << f2) - 1, P2 = (1 << p2) - 1, F2 = c2; ; F2 = c2) {
      var k2 = u2[Xi(e3, c2) & N2], I2 = k2 >>> 4;
      if (c2 += k2 & 15, c2 > m2) {
        if (a2) throw `unexpected EOF`;
        break;
      }
      if (!k2) throw `invalid length/literal`;
      if (I2 < 256) t2[l2++] = I2;
      else if (I2 == 256) {
        F2 = c2, u2 = null;
        break;
      } else {
        var ee2 = I2 - 254;
        if (I2 > 264) {
          var w2 = I2 - 257, L2 = ji[w2];
          ee2 = Yi(e3, c2, (1 << L2) - 1) + Ii[w2], c2 += L2;
        }
        var R2 = d2[Xi(e3, c2) & P2], z2 = R2 >>> 4;
        if (!R2) throw `invalid distance`;
        c2 += R2 & 15;
        var M2 = zi[z2];
        if (z2 > 3) {
          var L2 = Mi[z2];
          M2 += Xi(e3, c2) & (1 << L2) - 1, c2 += L2;
        }
        if (c2 > m2) {
          if (a2) throw `unexpected EOF`;
          break;
        }
        i2 && o2(l2 + 131072);
        for (var B2 = l2 + ee2; l2 < B2; l2 += 4) t2[l2] = t2[l2 - M2], t2[l2 + 1] = t2[l2 + 1 - M2], t2[l2 + 2] = t2[l2 + 2 - M2], t2[l2 + 3] = t2[l2 + 3 - M2];
        l2 = B2;
      }
    }
    n2.l = u2, n2.p = F2, n2.b = l2, u2 && (s2 = 1, n2.m = f2, n2.d = d2, n2.n = p2);
  } while (!s2);
  return l2 == t2.length ? t2 : Qi(t2, 0, l2);
}, ea = new Oi(0), ta = function(e3) {
  if ((e3[0] & 15) != 8 || e3[0] >>> 4 > 7 || (e3[0] << 8 | e3[1]) % 31) throw `invalid zlib data`;
  if (e3[1] & 32) throw `invalid zlib data: preset dictionaries not supported`;
};
function na(e3, t2) {
  return $i((ta(e3), e3.subarray(2, -4)), t2);
}
var ra = typeof TextDecoder < `u` && new TextDecoder();
try {
  ra.decode(ea, { stream: true });
} catch {
}
var ia = (e3) => e3 && e3.isCubeTexture, aa = class extends g {
  constructor(e3, t2) {
    var _a3;
    let n2 = ia(e3), r2 = ((n2 ? (_a3 = e3.image[0]) == null ? void 0 : _a3.width : e3.image.width) ?? 1024) / 4, i2 = Math.floor(Math.log2(r2)), a2 = 2 ** i2, o2 = 3 * Math.max(a2, 112), s2 = 4 * a2, c2 = [n2 ? `#define ENVMAP_TYPE_CUBE` : ``, `#define CUBEUV_TEXEL_WIDTH ${1 / o2}`, `#define CUBEUV_TEXEL_HEIGHT ${1 / s2}`, `#define CUBEUV_MAX_MIP ${i2}.0`].join(`
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
            #include <${Ti >= 154 ? `colorspace_fragment` : `encodings_fragment`}>
        }
        `, l2 = { map: { value: e3 }, height: { value: (t2 == null ? void 0 : t2.height) || 15 }, radius: { value: (t2 == null ? void 0 : t2.radius) || 100 } }, u2 = new be(1, 16), d2 = new Se({ uniforms: l2, fragmentShader: c2, vertexShader: `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `, side: 2 });
    super(u2, d2);
  }
  set radius(e3) {
    this.material.uniforms.radius.value = e3;
  }
  get radius() {
    return this.material.uniforms.radius.value;
  }
  set height(e3) {
    this.material.uniforms.height.value = e3;
  }
  get height() {
    return this.material.uniforms.height.value;
  }
}, oa = Object.defineProperty, sa = (e3, t2, n2) => t2 in e3 ? oa(e3, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e3[t2] = n2, ca = (e3, t2, n2) => (sa(e3, typeof t2 == `symbol` ? t2 : t2 + ``, n2), n2), la = class {
  constructor() {
    ca(this, `_listeners`);
  }
  addEventListener(e3, t2) {
    this._listeners === void 0 && (this._listeners = {});
    let n2 = this._listeners;
    n2[e3] === void 0 && (n2[e3] = []), n2[e3].indexOf(t2) === -1 && n2[e3].push(t2);
  }
  hasEventListener(e3, t2) {
    if (this._listeners === void 0) return false;
    let n2 = this._listeners;
    return n2[e3] !== void 0 && n2[e3].indexOf(t2) !== -1;
  }
  removeEventListener(e3, t2) {
    if (this._listeners === void 0) return;
    let n2 = this._listeners[e3];
    if (n2 !== void 0) {
      let e4 = n2.indexOf(t2);
      e4 !== -1 && n2.splice(e4, 1);
    }
  }
  dispatchEvent(e3) {
    if (this._listeners === void 0) return;
    let t2 = this._listeners[e3.type];
    if (t2 !== void 0) {
      e3.target = this;
      let n2 = t2.slice(0);
      for (let t3 = 0, r2 = n2.length; t3 < r2; t3++) n2[t3].call(this, e3);
      e3.target = null;
    }
  }
}, ua = Object.defineProperty, da = (e3, t2, n2) => t2 in e3 ? ua(e3, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e3[t2] = n2, Y = (e3, t2, n2) => (da(e3, typeof t2 == `symbol` ? t2 : t2 + ``, n2), n2), fa = class extends F {
  constructor(e3, t2) {
    super(), Y(this, `isTransformControls`, true), Y(this, `visible`, false), Y(this, `domElement`), Y(this, `raycaster`, new Oe()), Y(this, `gizmo`), Y(this, `plane`), Y(this, `tempVector`, new G()), Y(this, `tempVector2`, new G()), Y(this, `tempQuaternion`, new V()), Y(this, `unit`, { X: new G(1, 0, 0), Y: new G(0, 1, 0), Z: new G(0, 0, 1) }), Y(this, `pointStart`, new G()), Y(this, `pointEnd`, new G()), Y(this, `offset`, new G()), Y(this, `rotationAxis`, new G()), Y(this, `startNorm`, new G()), Y(this, `endNorm`, new G()), Y(this, `rotationAngle`, 0), Y(this, `cameraPosition`, new G()), Y(this, `cameraQuaternion`, new V()), Y(this, `cameraScale`, new G()), Y(this, `parentPosition`, new G()), Y(this, `parentQuaternion`, new V()), Y(this, `parentQuaternionInv`, new V()), Y(this, `parentScale`, new G()), Y(this, `worldPositionStart`, new G()), Y(this, `worldQuaternionStart`, new V()), Y(this, `worldScaleStart`, new G()), Y(this, `worldPosition`, new G()), Y(this, `worldQuaternion`, new V()), Y(this, `worldQuaternionInv`, new V()), Y(this, `worldScale`, new G()), Y(this, `eye`, new G()), Y(this, `positionStart`, new G()), Y(this, `quaternionStart`, new V()), Y(this, `scaleStart`, new G()), Y(this, `camera`), Y(this, `object`), Y(this, `enabled`, true), Y(this, `axis`, null), Y(this, `mode`, `translate`), Y(this, `translationSnap`, null), Y(this, `rotationSnap`, null), Y(this, `scaleSnap`, null), Y(this, `space`, `world`), Y(this, `size`, 1), Y(this, `dragging`, false), Y(this, `showX`, true), Y(this, `showY`, true), Y(this, `showZ`, true), Y(this, `changeEvent`, { type: `change` }), Y(this, `mouseDownEvent`, { type: `mouseDown`, mode: this.mode }), Y(this, `mouseUpEvent`, { type: `mouseUp`, mode: this.mode }), Y(this, `objectChangeEvent`, { type: `objectChange` }), Y(this, `intersectObjectWithRay`, (e4, t3, n3) => {
      let r2 = t3.intersectObject(e4, true);
      for (let e5 = 0; e5 < r2.length; e5++) if (r2[e5].object.visible || n3) return r2[e5];
      return false;
    }), Y(this, `attach`, (e4) => (this.object = e4, this.visible = true, this)), Y(this, `detach`, () => (this.object = void 0, this.visible = false, this.axis = null, this)), Y(this, `reset`, () => (this.enabled && this.dragging && this.object !== void 0 && (this.object.position.copy(this.positionStart), this.object.quaternion.copy(this.quaternionStart), this.object.scale.copy(this.scaleStart), this.dispatchEvent(this.changeEvent), this.dispatchEvent(this.objectChangeEvent), this.pointStart.copy(this.pointEnd)), this)), Y(this, `updateMatrixWorld`, () => {
      this.object !== void 0 && (this.object.updateMatrixWorld(), this.object.parent === null ? console.error(`TransformControls: The attached 3D object must be a part of the scene graph.`) : this.object.parent.matrixWorld.decompose(this.parentPosition, this.parentQuaternion, this.parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this.worldScale), this.parentQuaternionInv.copy(this.parentQuaternion).invert(), this.worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this.cameraScale), this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld();
    }), Y(this, `pointerHover`, (e4) => {
      if (this.object === void 0 || this.dragging === true) return;
      this.raycaster.setFromCamera(e4, this.camera);
      let t3 = this.intersectObjectWithRay(this.gizmo.picker[this.mode], this.raycaster);
      this.axis = t3 ? t3.object.name : null;
    }), Y(this, `pointerDown`, (e4) => {
      if (this.object !== void 0 && this.dragging !== true && e4.button === 0 && this.axis !== null) {
        this.raycaster.setFromCamera(e4, this.camera);
        let t3 = this.intersectObjectWithRay(this.plane, this.raycaster, true);
        if (t3) {
          let e5 = this.space;
          if (this.mode === `scale` ? e5 = `local` : (this.axis === `E` || this.axis === `XYZE` || this.axis === `XYZ`) && (e5 = `world`), e5 === `local` && this.mode === `rotate`) {
            let e6 = this.rotationSnap;
            this.axis === `X` && e6 && (this.object.rotation.x = Math.round(this.object.rotation.x / e6) * e6), this.axis === `Y` && e6 && (this.object.rotation.y = Math.round(this.object.rotation.y / e6) * e6), this.axis === `Z` && e6 && (this.object.rotation.z = Math.round(this.object.rotation.z / e6) * e6);
          }
          this.object.updateMatrixWorld(), this.object.parent && this.object.parent.updateMatrixWorld(), this.positionStart.copy(this.object.position), this.quaternionStart.copy(this.object.quaternion), this.scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this.worldScaleStart), this.pointStart.copy(t3.point).sub(this.worldPositionStart);
        }
        this.dragging = true, this.mouseDownEvent.mode = this.mode, this.dispatchEvent(this.mouseDownEvent);
      }
    }), Y(this, `pointerMove`, (e4) => {
      let t3 = this.axis, n3 = this.mode, r2 = this.object, i2 = this.space;
      if (n3 === `scale` ? i2 = `local` : (t3 === `E` || t3 === `XYZE` || t3 === `XYZ`) && (i2 = `world`), r2 === void 0 || t3 === null || this.dragging === false || e4.button !== -1) return;
      this.raycaster.setFromCamera(e4, this.camera);
      let a2 = this.intersectObjectWithRay(this.plane, this.raycaster, true);
      if (a2) {
        if (this.pointEnd.copy(a2.point).sub(this.worldPositionStart), n3 === `translate`) this.offset.copy(this.pointEnd).sub(this.pointStart), i2 === `local` && t3 !== `XYZ` && this.offset.applyQuaternion(this.worldQuaternionInv), t3.indexOf(`X`) === -1 && (this.offset.x = 0), t3.indexOf(`Y`) === -1 && (this.offset.y = 0), t3.indexOf(`Z`) === -1 && (this.offset.z = 0), i2 === `local` && t3 !== `XYZ` ? this.offset.applyQuaternion(this.quaternionStart).divide(this.parentScale) : this.offset.applyQuaternion(this.parentQuaternionInv).divide(this.parentScale), r2.position.copy(this.offset).add(this.positionStart), this.translationSnap && (i2 === `local` && (r2.position.applyQuaternion(this.tempQuaternion.copy(this.quaternionStart).invert()), t3.search(`X`) !== -1 && (r2.position.x = Math.round(r2.position.x / this.translationSnap) * this.translationSnap), t3.search(`Y`) !== -1 && (r2.position.y = Math.round(r2.position.y / this.translationSnap) * this.translationSnap), t3.search(`Z`) !== -1 && (r2.position.z = Math.round(r2.position.z / this.translationSnap) * this.translationSnap), r2.position.applyQuaternion(this.quaternionStart)), i2 === `world` && (r2.parent && r2.position.add(this.tempVector.setFromMatrixPosition(r2.parent.matrixWorld)), t3.search(`X`) !== -1 && (r2.position.x = Math.round(r2.position.x / this.translationSnap) * this.translationSnap), t3.search(`Y`) !== -1 && (r2.position.y = Math.round(r2.position.y / this.translationSnap) * this.translationSnap), t3.search(`Z`) !== -1 && (r2.position.z = Math.round(r2.position.z / this.translationSnap) * this.translationSnap), r2.parent && r2.position.sub(this.tempVector.setFromMatrixPosition(r2.parent.matrixWorld))));
        else if (n3 === `scale`) {
          if (t3.search(`XYZ`) !== -1) {
            let e5 = this.pointEnd.length() / this.pointStart.length();
            this.pointEnd.dot(this.pointStart) < 0 && (e5 *= -1), this.tempVector2.set(e5, e5, e5);
          } else this.tempVector.copy(this.pointStart), this.tempVector2.copy(this.pointEnd), this.tempVector.applyQuaternion(this.worldQuaternionInv), this.tempVector2.applyQuaternion(this.worldQuaternionInv), this.tempVector2.divide(this.tempVector), t3.search(`X`) === -1 && (this.tempVector2.x = 1), t3.search(`Y`) === -1 && (this.tempVector2.y = 1), t3.search(`Z`) === -1 && (this.tempVector2.z = 1);
          r2.scale.copy(this.scaleStart).multiply(this.tempVector2), this.scaleSnap && this.object && (t3.search(`X`) !== -1 && (this.object.scale.x = Math.round(r2.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t3.search(`Y`) !== -1 && (r2.scale.y = Math.round(r2.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t3.search(`Z`) !== -1 && (r2.scale.z = Math.round(r2.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
        } else if (n3 === `rotate`) {
          this.offset.copy(this.pointEnd).sub(this.pointStart);
          let e5 = 20 / this.worldPosition.distanceTo(this.tempVector.setFromMatrixPosition(this.camera.matrixWorld));
          t3 === `E` ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this.startNorm.copy(this.pointStart).normalize(), this.endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this.endNorm.cross(this.startNorm).dot(this.eye) < 0 ? 1 : -1) : t3 === `XYZE` ? (this.rotationAxis.copy(this.offset).cross(this.eye).normalize(), this.rotationAngle = this.offset.dot(this.tempVector.copy(this.rotationAxis).cross(this.eye)) * e5) : (t3 === `X` || t3 === `Y` || t3 === `Z`) && (this.rotationAxis.copy(this.unit[t3]), this.tempVector.copy(this.unit[t3]), i2 === `local` && this.tempVector.applyQuaternion(this.worldQuaternion), this.rotationAngle = this.offset.dot(this.tempVector.cross(this.eye).normalize()) * e5), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), i2 === `local` && t3 !== `E` && t3 !== `XYZE` ? (r2.quaternion.copy(this.quaternionStart), r2.quaternion.multiply(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this.parentQuaternionInv), r2.quaternion.copy(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), r2.quaternion.multiply(this.quaternionStart).normalize());
        }
        this.dispatchEvent(this.changeEvent), this.dispatchEvent(this.objectChangeEvent);
      }
    }), Y(this, `pointerUp`, (e4) => {
      e4.button === 0 && (this.dragging && this.axis !== null && (this.mouseUpEvent.mode = this.mode, this.dispatchEvent(this.mouseUpEvent)), this.dragging = false, this.axis = null);
    }), Y(this, `getPointer`, (e4) => {
      var _a3;
      if (this.domElement && ((_a3 = this.domElement.ownerDocument) == null ? void 0 : _a3.pointerLockElement)) return { x: 0, y: 0, button: e4.button };
      {
        let t3 = e4.changedTouches ? e4.changedTouches[0] : e4, n3 = this.domElement.getBoundingClientRect();
        return { x: (t3.clientX - n3.left) / n3.width * 2 - 1, y: -(t3.clientY - n3.top) / n3.height * 2 + 1, button: e4.button };
      }
    }), Y(this, `onPointerHover`, (e4) => {
      if (this.enabled) switch (e4.pointerType) {
        case `mouse`:
        case `pen`:
          this.pointerHover(this.getPointer(e4));
      }
    }), Y(this, `onPointerDown`, (e4) => {
      this.enabled && this.domElement && (this.domElement.style.touchAction = `none`, this.domElement.ownerDocument.addEventListener(`pointermove`, this.onPointerMove), this.pointerHover(this.getPointer(e4)), this.pointerDown(this.getPointer(e4)));
    }), Y(this, `onPointerMove`, (e4) => {
      this.enabled && this.pointerMove(this.getPointer(e4));
    }), Y(this, `onPointerUp`, (e4) => {
      this.enabled && this.domElement && (this.domElement.style.touchAction = ``, this.domElement.ownerDocument.removeEventListener(`pointermove`, this.onPointerMove), this.pointerUp(this.getPointer(e4)));
    }), Y(this, `getMode`, () => this.mode), Y(this, `setMode`, (e4) => {
      this.mode = e4;
    }), Y(this, `setTranslationSnap`, (e4) => {
      this.translationSnap = e4;
    }), Y(this, `setRotationSnap`, (e4) => {
      this.rotationSnap = e4;
    }), Y(this, `setScaleSnap`, (e4) => {
      this.scaleSnap = e4;
    }), Y(this, `setSize`, (e4) => {
      this.size = e4;
    }), Y(this, `setSpace`, (e4) => {
      this.space = e4;
    }), Y(this, `update`, () => {
      console.warn(`THREE.TransformControls: update function has no more functionality and therefore has been deprecated.`);
    }), Y(this, `connect`, (e4) => {
      e4 === document && console.error(`THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.`), this.domElement = e4, this.domElement.addEventListener(`pointerdown`, this.onPointerDown), this.domElement.addEventListener(`pointermove`, this.onPointerHover), this.domElement.ownerDocument.addEventListener(`pointerup`, this.onPointerUp);
    }), Y(this, `dispose`, () => {
      var _a3, _b2;
      var e4, t3, n3, r2;
      (e4 = this.domElement) == null || e4.removeEventListener(`pointerdown`, this.onPointerDown), (t3 = this.domElement) == null || t3.removeEventListener(`pointermove`, this.onPointerHover), (n3 = (_a3 = this.domElement) == null ? void 0 : _a3.ownerDocument) == null || n3.removeEventListener(`pointermove`, this.onPointerMove), (r2 = (_b2 = this.domElement) == null ? void 0 : _b2.ownerDocument) == null || r2.removeEventListener(`pointerup`, this.onPointerUp), this.traverse((e5) => {
        let t4 = e5;
        t4.geometry && t4.geometry.dispose(), t4.material && t4.material.dispose();
      });
    }), this.domElement = t2, this.camera = e3, this.gizmo = new pa(), this.add(this.gizmo), this.plane = new ma(), this.add(this.plane);
    let n2 = (e4, t3) => {
      let n3 = t3;
      Object.defineProperty(this, e4, { get: function() {
        return n3 === void 0 ? t3 : n3;
      }, set: function(t4) {
        n3 !== t4 && (n3 = t4, this.plane[e4] = t4, this.gizmo[e4] = t4, this.dispatchEvent({ type: e4 + `-changed`, value: t4 }), this.dispatchEvent(this.changeEvent));
      } }), this[e4] = t3, this.plane[e4] = t3, this.gizmo[e4] = t3;
    };
    n2(`camera`, this.camera), n2(`object`, this.object), n2(`enabled`, this.enabled), n2(`axis`, this.axis), n2(`mode`, this.mode), n2(`translationSnap`, this.translationSnap), n2(`rotationSnap`, this.rotationSnap), n2(`scaleSnap`, this.scaleSnap), n2(`space`, this.space), n2(`size`, this.size), n2(`dragging`, this.dragging), n2(`showX`, this.showX), n2(`showY`, this.showY), n2(`showZ`, this.showZ), n2(`worldPosition`, this.worldPosition), n2(`worldPositionStart`, this.worldPositionStart), n2(`worldQuaternion`, this.worldQuaternion), n2(`worldQuaternionStart`, this.worldQuaternionStart), n2(`cameraPosition`, this.cameraPosition), n2(`cameraQuaternion`, this.cameraQuaternion), n2(`pointStart`, this.pointStart), n2(`pointEnd`, this.pointEnd), n2(`rotationAxis`, this.rotationAxis), n2(`rotationAngle`, this.rotationAngle), n2(`eye`, this.eye), t2 !== void 0 && this.connect(t2);
  }
}, pa = class extends F {
  constructor() {
    super(), Y(this, `isTransformControlsGizmo`, true), Y(this, `type`, `TransformControlsGizmo`), Y(this, `tempVector`, new G(0, 0, 0)), Y(this, `tempEuler`, new re()), Y(this, `alignVector`, new G(0, 1, 0)), Y(this, `zeroVector`, new G(0, 0, 0)), Y(this, `lookAtMatrix`, new d()), Y(this, `tempQuaternion`, new V()), Y(this, `tempQuaternion2`, new V()), Y(this, `identityQuaternion`, new V()), Y(this, `unitX`, new G(1, 0, 0)), Y(this, `unitY`, new G(0, 1, 0)), Y(this, `unitZ`, new G(0, 0, 1)), Y(this, `gizmo`), Y(this, `picker`), Y(this, `helper`), Y(this, `rotationAxis`, new G()), Y(this, `cameraPosition`, new G()), Y(this, `worldPositionStart`, new G()), Y(this, `worldQuaternionStart`, new V()), Y(this, `worldPosition`, new G()), Y(this, `worldQuaternion`, new V()), Y(this, `eye`, new G()), Y(this, `camera`, null), Y(this, `enabled`, true), Y(this, `axis`, null), Y(this, `mode`, `translate`), Y(this, `space`, `world`), Y(this, `size`, 1), Y(this, `dragging`, false), Y(this, `showX`, true), Y(this, `showY`, true), Y(this, `showZ`, true), Y(this, `updateMatrixWorld`, () => {
      let e4 = this.space;
      this.mode === `scale` && (e4 = `local`);
      let t3 = e4 === `local` ? this.worldQuaternion : this.identityQuaternion;
      this.gizmo.translate.visible = this.mode === `translate`, this.gizmo.rotate.visible = this.mode === `rotate`, this.gizmo.scale.visible = this.mode === `scale`, this.helper.translate.visible = this.mode === `translate`, this.helper.rotate.visible = this.mode === `rotate`, this.helper.scale.visible = this.mode === `scale`;
      let n3 = [];
      n3 = n3.concat(this.picker[this.mode].children), n3 = n3.concat(this.gizmo[this.mode].children), n3 = n3.concat(this.helper[this.mode].children);
      for (let e5 = 0; e5 < n3.length; e5++) {
        let r3 = n3[e5];
        r3.visible = true, r3.rotation.set(0, 0, 0), r3.position.copy(this.worldPosition);
        let i3;
        if (i3 = this.camera.isOrthographicCamera ? (this.camera.top - this.camera.bottom) / this.camera.zoom : this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), r3.scale.set(1, 1, 1).multiplyScalar(i3 * this.size / 7), r3.tag === `helper`) r3.visible = false, r3.name === `AXIS` ? (r3.position.copy(this.worldPositionStart), r3.visible = !!this.axis, this.axis === `X` && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, 0)), r3.quaternion.copy(t3).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(t3).dot(this.eye)) > 0.9 && (r3.visible = false)), this.axis === `Y` && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, Math.PI / 2)), r3.quaternion.copy(t3).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(t3).dot(this.eye)) > 0.9 && (r3.visible = false)), this.axis === `Z` && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0)), r3.quaternion.copy(t3).multiply(this.tempQuaternion), Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(t3).dot(this.eye)) > 0.9 && (r3.visible = false)), this.axis === `XYZE` && (this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0)), this.alignVector.copy(this.rotationAxis), r3.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.zeroVector, this.alignVector, this.unitY)), r3.quaternion.multiply(this.tempQuaternion), r3.visible = this.dragging), this.axis === `E` && (r3.visible = false)) : r3.name === `START` ? (r3.position.copy(this.worldPositionStart), r3.visible = this.dragging) : r3.name === `END` ? (r3.position.copy(this.worldPosition), r3.visible = this.dragging) : r3.name === `DELTA` ? (r3.position.copy(this.worldPositionStart), r3.quaternion.copy(this.worldQuaternionStart), this.tempVector.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), this.tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert()), r3.scale.copy(this.tempVector), r3.visible = this.dragging) : (r3.quaternion.copy(t3), this.dragging ? r3.position.copy(this.worldPositionStart) : r3.position.copy(this.worldPosition), this.axis && (r3.visible = this.axis.search(r3.name) !== -1));
        else {
          if (r3.quaternion.copy(t3), this.mode === `translate` || this.mode === `scale`) {
            let e6 = 0.99, n4 = 0.2;
            (r3.name === `X` || r3.name === `XYZX`) && Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(t3).dot(this.eye)) > e6 && (r3.scale.set(1e-10, 1e-10, 1e-10), r3.visible = false), (r3.name === `Y` || r3.name === `XYZY`) && Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(t3).dot(this.eye)) > e6 && (r3.scale.set(1e-10, 1e-10, 1e-10), r3.visible = false), (r3.name === `Z` || r3.name === `XYZZ`) && Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(t3).dot(this.eye)) > e6 && (r3.scale.set(1e-10, 1e-10, 1e-10), r3.visible = false), r3.name === `XY` && Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(t3).dot(this.eye)) < n4 && (r3.scale.set(1e-10, 1e-10, 1e-10), r3.visible = false), r3.name === `YZ` && Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(t3).dot(this.eye)) < n4 && (r3.scale.set(1e-10, 1e-10, 1e-10), r3.visible = false), r3.name === `XZ` && Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(t3).dot(this.eye)) < n4 && (r3.scale.set(1e-10, 1e-10, 1e-10), r3.visible = false), r3.name.search(`X`) !== -1 && (this.alignVector.copy(this.unitX).applyQuaternion(t3).dot(this.eye) < 0 ? r3.tag === `fwd` ? r3.visible = false : r3.scale.x *= -1 : r3.tag === `bwd` && (r3.visible = false)), r3.name.search(`Y`) !== -1 && (this.alignVector.copy(this.unitY).applyQuaternion(t3).dot(this.eye) < 0 ? r3.tag === `fwd` ? r3.visible = false : r3.scale.y *= -1 : r3.tag === `bwd` && (r3.visible = false)), r3.name.search(`Z`) !== -1 && (this.alignVector.copy(this.unitZ).applyQuaternion(t3).dot(this.eye) < 0 ? r3.tag === `fwd` ? r3.visible = false : r3.scale.z *= -1 : r3.tag === `bwd` && (r3.visible = false));
          } else this.mode === `rotate` && (this.tempQuaternion2.copy(t3), this.alignVector.copy(this.eye).applyQuaternion(this.tempQuaternion.copy(t3).invert()), r3.name.search(`E`) !== -1 && r3.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.eye, this.zeroVector, this.unitY)), r3.name === `X` && (this.tempQuaternion.setFromAxisAngle(this.unitX, Math.atan2(-this.alignVector.y, this.alignVector.z)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), r3.quaternion.copy(this.tempQuaternion)), r3.name === `Y` && (this.tempQuaternion.setFromAxisAngle(this.unitY, Math.atan2(this.alignVector.x, this.alignVector.z)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), r3.quaternion.copy(this.tempQuaternion)), r3.name === `Z` && (this.tempQuaternion.setFromAxisAngle(this.unitZ, Math.atan2(this.alignVector.y, this.alignVector.x)), this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion), r3.quaternion.copy(this.tempQuaternion)));
          r3.visible = r3.visible && (r3.name.indexOf(`X`) === -1 || this.showX), r3.visible = r3.visible && (r3.name.indexOf(`Y`) === -1 || this.showY), r3.visible = r3.visible && (r3.name.indexOf(`Z`) === -1 || this.showZ), r3.visible = r3.visible && (r3.name.indexOf(`E`) === -1 || this.showX && this.showY && this.showZ), r3.material.tempOpacity = r3.material.tempOpacity || r3.material.opacity, r3.material.tempColor = r3.material.tempColor || r3.material.color.clone(), r3.material.color.copy(r3.material.tempColor), r3.material.opacity = r3.material.tempOpacity, this.enabled ? this.axis && (r3.name === this.axis || this.axis.split(``).some(function(e6) {
            return r3.name === e6;
          }) ? (r3.material.opacity = 1, r3.material.color.lerp(new z(1, 1, 1), 0.5)) : (r3.material.opacity *= 0.25, r3.material.color.lerp(new z(1, 1, 1), 0.5))) : (r3.material.opacity *= 0.5, r3.material.color.lerp(new z(1, 1, 1), 0.5));
        }
      }
      super.updateMatrixWorld();
    });
    let e3 = new x({ depthTest: false, depthWrite: false, transparent: true, side: 2, fog: false, toneMapped: false }), t2 = new K({ depthTest: false, depthWrite: false, transparent: true, linewidth: 1, fog: false, toneMapped: false }), n2 = e3.clone();
    n2.opacity = 0.15;
    let r2 = e3.clone();
    r2.opacity = 0.33;
    let i2 = e3.clone();
    i2.color.set(16711680);
    let a2 = e3.clone();
    a2.color.set(65280);
    let o2 = e3.clone();
    o2.color.set(255);
    let s2 = e3.clone();
    s2.opacity = 0.25;
    let c2 = s2.clone();
    c2.color.set(16776960);
    let l2 = s2.clone();
    l2.color.set(65535);
    let u2 = s2.clone();
    u2.color.set(16711935), e3.clone().color.set(16776960);
    let f2 = t2.clone();
    f2.color.set(16711680);
    let p2 = t2.clone();
    p2.color.set(65280);
    let h2 = t2.clone();
    h2.color.set(255);
    let _2 = t2.clone();
    _2.color.set(65535);
    let v2 = t2.clone();
    v2.color.set(16711935);
    let y2 = t2.clone();
    y2.color.set(16776960);
    let b2 = t2.clone();
    b2.color.set(7895160);
    let S2 = y2.clone();
    S2.opacity = 0.25;
    let C2 = new D(0, 0.05, 0.2, 12, 1, false), w2 = new m(0.125, 0.125, 0.125), T2 = new ee();
    T2.setAttribute(`position`, new ve([0, 0, 0, 1, 0, 0], 3));
    let E2 = (e4, t3) => {
      let n3 = new ee(), r3 = [];
      for (let n4 = 0; n4 <= 64 * t3; ++n4) r3.push(0, Math.cos(n4 / 32 * Math.PI) * e4, Math.sin(n4 / 32 * Math.PI) * e4);
      return n3.setAttribute(`position`, new ve(r3, 3)), n3;
    }, O2 = () => {
      let e4 = new ee();
      return e4.setAttribute(`position`, new ve([0, 0, 0, 1, 1, 1], 3)), e4;
    }, k2 = { X: [[new g(C2, i2), [1, 0, 0], [0, 0, -Math.PI / 2], null, `fwd`], [new g(C2, i2), [1, 0, 0], [0, 0, Math.PI / 2], null, `bwd`], [new M(T2, f2)]], Y: [[new g(C2, a2), [0, 1, 0], null, null, `fwd`], [new g(C2, a2), [0, 1, 0], [Math.PI, 0, 0], null, `bwd`], [new M(T2, p2), null, [0, 0, Math.PI / 2]]], Z: [[new g(C2, o2), [0, 0, 1], [Math.PI / 2, 0, 0], null, `fwd`], [new g(C2, o2), [0, 0, 1], [-Math.PI / 2, 0, 0], null, `bwd`], [new M(T2, h2), null, [0, -Math.PI / 2, 0]]], XYZ: [[new g(new L(0.1, 0), s2.clone()), [0, 0, 0], [0, 0, 0]]], XY: [[new g(new B(0.295, 0.295), c2.clone()), [0.15, 0.15, 0]], [new M(T2, y2), [0.18, 0.3, 0], null, [0.125, 1, 1]], [new M(T2, y2), [0.3, 0.18, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]], YZ: [[new g(new B(0.295, 0.295), l2.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]], [new M(T2, _2), [0, 0.18, 0.3], [0, 0, Math.PI / 2], [0.125, 1, 1]], [new M(T2, _2), [0, 0.3, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]], XZ: [[new g(new B(0.295, 0.295), u2.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]], [new M(T2, v2), [0.18, 0, 0.3], null, [0.125, 1, 1]], [new M(T2, v2), [0.3, 0, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]] }, A2 = { X: [[new g(new D(0.2, 0, 1, 4, 1, false), n2), [0.6, 0, 0], [0, 0, -Math.PI / 2]]], Y: [[new g(new D(0.2, 0, 1, 4, 1, false), n2), [0, 0.6, 0]]], Z: [[new g(new D(0.2, 0, 1, 4, 1, false), n2), [0, 0, 0.6], [Math.PI / 2, 0, 0]]], XYZ: [[new g(new L(0.2, 0), n2)]], XY: [[new g(new B(0.4, 0.4), n2), [0.2, 0.2, 0]]], YZ: [[new g(new B(0.4, 0.4), n2), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]], XZ: [[new g(new B(0.4, 0.4), n2), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]] }, j2 = { START: [[new g(new L(0.01, 2), r2), null, null, null, `helper`]], END: [[new g(new L(0.01, 2), r2), null, null, null, `helper`]], DELTA: [[new M(O2(), r2), null, null, null, `helper`]], X: [[new M(T2, r2.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], `helper`]], Y: [[new M(T2, r2.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], `helper`]], Z: [[new M(T2, r2.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], `helper`]] }, N2 = { X: [[new M(E2(1, 0.5), f2)], [new g(new L(0.04, 0), i2), [0, 0, 0.99], null, [1, 3, 1]]], Y: [[new M(E2(1, 0.5), p2), null, [0, 0, -Math.PI / 2]], [new g(new L(0.04, 0), a2), [0, 0, 0.99], null, [3, 1, 1]]], Z: [[new M(E2(1, 0.5), h2), null, [0, Math.PI / 2, 0]], [new g(new L(0.04, 0), o2), [0.99, 0, 0], null, [1, 3, 1]]], E: [[new M(E2(1.25, 1), S2), null, [0, Math.PI / 2, 0]], [new g(new D(0.03, 0, 0.15, 4, 1, false), S2), [1.17, 0, 0], [0, 0, -Math.PI / 2], [1, 1, 1e-3]], [new g(new D(0.03, 0, 0.15, 4, 1, false), S2), [-1.17, 0, 0], [0, 0, Math.PI / 2], [1, 1, 1e-3]], [new g(new D(0.03, 0, 0.15, 4, 1, false), S2), [0, -1.17, 0], [Math.PI, 0, 0], [1, 1, 1e-3]], [new g(new D(0.03, 0, 0.15, 4, 1, false), S2), [0, 1.17, 0], [0, 0, 0], [1, 1, 1e-3]]], XYZE: [[new M(E2(1, 1), b2), null, [0, Math.PI / 2, 0]]] }, P2 = { AXIS: [[new M(T2, r2.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], `helper`]] }, I2 = { X: [[new g(new ue(1, 0.1, 4, 24), n2), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]], Y: [[new g(new ue(1, 0.1, 4, 24), n2), [0, 0, 0], [Math.PI / 2, 0, 0]]], Z: [[new g(new ue(1, 0.1, 4, 24), n2), [0, 0, 0], [0, 0, -Math.PI / 2]]], E: [[new g(new ue(1.25, 0.1, 2, 24), n2)]], XYZE: [[new g(new le(0.7, 10, 8), n2)]] }, R2 = { X: [[new g(w2, i2), [0.8, 0, 0], [0, 0, -Math.PI / 2]], [new M(T2, f2), null, null, [0.8, 1, 1]]], Y: [[new g(w2, a2), [0, 0.8, 0]], [new M(T2, p2), null, [0, 0, Math.PI / 2], [0.8, 1, 1]]], Z: [[new g(w2, o2), [0, 0, 0.8], [Math.PI / 2, 0, 0]], [new M(T2, h2), null, [0, -Math.PI / 2, 0], [0.8, 1, 1]]], XY: [[new g(w2, c2), [0.85, 0.85, 0], null, [2, 2, 0.2]], [new M(T2, y2), [0.855, 0.98, 0], null, [0.125, 1, 1]], [new M(T2, y2), [0.98, 0.855, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]], YZ: [[new g(w2, l2), [0, 0.85, 0.85], null, [0.2, 2, 2]], [new M(T2, _2), [0, 0.855, 0.98], [0, 0, Math.PI / 2], [0.125, 1, 1]], [new M(T2, _2), [0, 0.98, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]], XZ: [[new g(w2, u2), [0.85, 0, 0.85], null, [2, 0.2, 2]], [new M(T2, v2), [0.855, 0, 0.98], null, [0.125, 1, 1]], [new M(T2, v2), [0.98, 0, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]], XYZX: [[new g(new m(0.125, 0.125, 0.125), s2.clone()), [1.1, 0, 0]]], XYZY: [[new g(new m(0.125, 0.125, 0.125), s2.clone()), [0, 1.1, 0]]], XYZZ: [[new g(new m(0.125, 0.125, 0.125), s2.clone()), [0, 0, 1.1]]] }, te2 = { X: [[new g(new D(0.2, 0, 0.8, 4, 1, false), n2), [0.5, 0, 0], [0, 0, -Math.PI / 2]]], Y: [[new g(new D(0.2, 0, 0.8, 4, 1, false), n2), [0, 0.5, 0]]], Z: [[new g(new D(0.2, 0, 0.8, 4, 1, false), n2), [0, 0, 0.5], [Math.PI / 2, 0, 0]]], XY: [[new g(w2, n2), [0.85, 0.85, 0], null, [3, 3, 0.2]]], YZ: [[new g(w2, n2), [0, 0.85, 0.85], null, [0.2, 3, 3]]], XZ: [[new g(w2, n2), [0.85, 0, 0.85], null, [3, 0.2, 3]]], XYZX: [[new g(new m(0.2, 0.2, 0.2), n2), [1.1, 0, 0]]], XYZY: [[new g(new m(0.2, 0.2, 0.2), n2), [0, 1.1, 0]]], XYZZ: [[new g(new m(0.2, 0.2, 0.2), n2), [0, 0, 1.1]]] }, ne2 = { X: [[new M(T2, r2.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], `helper`]], Y: [[new M(T2, r2.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], `helper`]], Z: [[new M(T2, r2.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], `helper`]] }, H2 = (e4) => {
      let t3 = new F();
      for (let n3 in e4) for (let r3 = e4[n3].length; r3--; ) {
        let i3 = e4[n3][r3][0].clone(), a3 = e4[n3][r3][1], o3 = e4[n3][r3][2], s3 = e4[n3][r3][3], c3 = e4[n3][r3][4];
        i3.name = n3, i3.tag = c3, a3 && i3.position.set(a3[0], a3[1], a3[2]), o3 && i3.rotation.set(o3[0], o3[1], o3[2]), s3 && i3.scale.set(s3[0], s3[1], s3[2]), i3.updateMatrix();
        let l3 = i3.geometry.clone();
        l3.applyMatrix4(i3.matrix), i3.geometry = l3, i3.renderOrder = 1 / 0, i3.position.set(0, 0, 0), i3.rotation.set(0, 0, 0), i3.scale.set(1, 1, 1), t3.add(i3);
      }
      return t3;
    };
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = H2(k2)), this.add(this.gizmo.rotate = H2(N2)), this.add(this.gizmo.scale = H2(R2)), this.add(this.picker.translate = H2(A2)), this.add(this.picker.rotate = H2(I2)), this.add(this.picker.scale = H2(te2)), this.add(this.helper.translate = H2(j2)), this.add(this.helper.rotate = H2(P2)), this.add(this.helper.scale = H2(ne2)), this.picker.translate.visible = false, this.picker.rotate.visible = false, this.picker.scale.visible = false;
  }
}, ma = class extends g {
  constructor() {
    super(new B(1e5, 1e5, 2, 2), new x({ visible: false, wireframe: true, side: 2, transparent: true, opacity: 0.1, toneMapped: false })), Y(this, `isTransformControlsPlane`, true), Y(this, `type`, `TransformControlsPlane`), Y(this, `unitX`, new G(1, 0, 0)), Y(this, `unitY`, new G(0, 1, 0)), Y(this, `unitZ`, new G(0, 0, 1)), Y(this, `tempVector`, new G()), Y(this, `dirVector`, new G()), Y(this, `alignVector`, new G()), Y(this, `tempMatrix`, new d()), Y(this, `identityQuaternion`, new V()), Y(this, `cameraQuaternion`, new V()), Y(this, `worldPosition`, new G()), Y(this, `worldQuaternion`, new V()), Y(this, `eye`, new G()), Y(this, `axis`, null), Y(this, `mode`, `translate`), Y(this, `space`, `world`), Y(this, `updateMatrixWorld`, () => {
      let e3 = this.space;
      switch (this.position.copy(this.worldPosition), this.mode === `scale` && (e3 = `local`), this.unitX.set(1, 0, 0).applyQuaternion(e3 === `local` ? this.worldQuaternion : this.identityQuaternion), this.unitY.set(0, 1, 0).applyQuaternion(e3 === `local` ? this.worldQuaternion : this.identityQuaternion), this.unitZ.set(0, 0, 1).applyQuaternion(e3 === `local` ? this.worldQuaternion : this.identityQuaternion), this.alignVector.copy(this.unitY), this.mode) {
        case `translate`:
        case `scale`:
          switch (this.axis) {
            case `X`:
              this.alignVector.copy(this.eye).cross(this.unitX), this.dirVector.copy(this.unitX).cross(this.alignVector);
              break;
            case `Y`:
              this.alignVector.copy(this.eye).cross(this.unitY), this.dirVector.copy(this.unitY).cross(this.alignVector);
              break;
            case `Z`:
              this.alignVector.copy(this.eye).cross(this.unitZ), this.dirVector.copy(this.unitZ).cross(this.alignVector);
              break;
            case `XY`:
              this.dirVector.copy(this.unitZ);
              break;
            case `YZ`:
              this.dirVector.copy(this.unitX);
              break;
            case `XZ`:
              this.alignVector.copy(this.unitZ), this.dirVector.copy(this.unitY);
              break;
            case `XYZ`:
            case `E`:
              this.dirVector.set(0, 0, 0);
          }
          break;
        default:
          this.dirVector.set(0, 0, 0);
      }
      this.dirVector.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (this.tempMatrix.lookAt(this.tempVector.set(0, 0, 0), this.dirVector, this.alignVector), this.quaternion.setFromRotationMatrix(this.tempMatrix)), super.updateMatrixWorld();
    });
  }
}, ha = Object.defineProperty, ga = (e3, t2, n2) => t2 in e3 ? ha(e3, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e3[t2] = n2, X = (e3, t2, n2) => (ga(e3, typeof t2 == `symbol` ? t2 : t2 + ``, n2), n2), _a = new se(), va = new v(), ya = Math.cos(Math.PI / 180 * 70), ba = (e3, t2) => (e3 % t2 + t2) % t2, xa = class extends la {
  constructor(e3, t2) {
    super(), X(this, `object`), X(this, `domElement`), X(this, `enabled`, true), X(this, `target`, new G()), X(this, `minDistance`, 0), X(this, `maxDistance`, 1 / 0), X(this, `minZoom`, 0), X(this, `maxZoom`, 1 / 0), X(this, `minPolarAngle`, 0), X(this, `maxPolarAngle`, Math.PI), X(this, `minAzimuthAngle`, -1 / 0), X(this, `maxAzimuthAngle`, 1 / 0), X(this, `enableDamping`, false), X(this, `dampingFactor`, 0.05), X(this, `enableZoom`, true), X(this, `zoomSpeed`, 1), X(this, `enableRotate`, true), X(this, `rotateSpeed`, 1), X(this, `enablePan`, true), X(this, `panSpeed`, 1), X(this, `screenSpacePanning`, true), X(this, `keyPanSpeed`, 7), X(this, `zoomToCursor`, false), X(this, `autoRotate`, false), X(this, `autoRotateSpeed`, 2), X(this, `reverseOrbit`, false), X(this, `reverseHorizontalOrbit`, false), X(this, `reverseVerticalOrbit`, false), X(this, `keys`, { LEFT: `ArrowLeft`, UP: `ArrowUp`, RIGHT: `ArrowRight`, BOTTOM: `ArrowDown` }), X(this, `mouseButtons`, { LEFT: he.ROTATE, MIDDLE: he.DOLLY, RIGHT: he.PAN }), X(this, `touches`, { ONE: ye.ROTATE, TWO: ye.DOLLY_PAN }), X(this, `target0`), X(this, `position0`), X(this, `zoom0`), X(this, `_domElementKeyEvents`, null), X(this, `getPolarAngle`), X(this, `getAzimuthalAngle`), X(this, `setPolarAngle`), X(this, `setAzimuthalAngle`), X(this, `getDistance`), X(this, `getZoomScale`), X(this, `listenToKeyEvents`), X(this, `stopListenToKeyEvents`), X(this, `saveState`), X(this, `reset`), X(this, `update`), X(this, `connect`), X(this, `dispose`), X(this, `dollyIn`), X(this, `dollyOut`), X(this, `getScale`), X(this, `setScale`), this.object = e3, this.domElement = t2, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => u2.phi, this.getAzimuthalAngle = () => u2.theta, this.setPolarAngle = (e4) => {
      let t3 = ba(e4, 2 * Math.PI), r3 = u2.phi;
      r3 < 0 && (r3 += 2 * Math.PI), t3 < 0 && (t3 += 2 * Math.PI);
      let i3 = Math.abs(t3 - r3);
      2 * Math.PI - i3 < i3 && (t3 < r3 ? t3 += 2 * Math.PI : r3 += 2 * Math.PI), d2.phi = t3 - r3, n2.update();
    }, this.setAzimuthalAngle = (e4) => {
      let t3 = ba(e4, 2 * Math.PI), r3 = u2.theta;
      r3 < 0 && (r3 += 2 * Math.PI), t3 < 0 && (t3 += 2 * Math.PI);
      let i3 = Math.abs(t3 - r3);
      2 * Math.PI - i3 < i3 && (t3 < r3 ? t3 += 2 * Math.PI : r3 += 2 * Math.PI), d2.theta = t3 - r3, n2.update();
    }, this.getDistance = () => n2.object.position.distanceTo(n2.target), this.listenToKeyEvents = (e4) => {
      e4.addEventListener(`keydown`, we2), this._domElementKeyEvents = e4;
    }, this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener(`keydown`, we2), this._domElementKeyEvents = null;
    }, this.saveState = () => {
      n2.target0.copy(n2.target), n2.position0.copy(n2.object.position), n2.zoom0 = n2.object.zoom;
    }, this.reset = () => {
      n2.target.copy(n2.target0), n2.object.position.copy(n2.position0), n2.object.zoom = n2.zoom0, n2.object.updateProjectionMatrix(), n2.dispatchEvent(r2), n2.update(), c2 = s2.NONE;
    }, this.update = (() => {
      let t3 = new G(), i3 = new G(0, 1, 0), a2 = new V().setFromUnitVectors(e3.up, i3), o3 = a2.clone().invert(), h3 = new G(), g3 = new V(), _3 = 2 * Math.PI;
      return function() {
        let v3 = n2.object.position;
        a2.setFromUnitVectors(e3.up, i3), o3.copy(a2).invert(), t3.copy(v3).sub(n2.target), t3.applyQuaternion(a2), u2.setFromVector3(t3), n2.autoRotate && c2 === s2.NONE && j2(k2()), n2.enableDamping ? (u2.theta += d2.theta * n2.dampingFactor, u2.phi += d2.phi * n2.dampingFactor) : (u2.theta += d2.theta, u2.phi += d2.phi);
        let y3 = n2.minAzimuthAngle, b3 = n2.maxAzimuthAngle;
        isFinite(y3) && isFinite(b3) && (y3 < -Math.PI ? y3 += _3 : y3 > Math.PI && (y3 -= _3), b3 < -Math.PI ? b3 += _3 : b3 > Math.PI && (b3 -= _3), y3 <= b3 ? u2.theta = Math.max(y3, Math.min(b3, u2.theta)) : u2.theta = u2.theta > (y3 + b3) / 2 ? Math.max(y3, u2.theta) : Math.min(b3, u2.theta)), u2.phi = Math.max(n2.minPolarAngle, Math.min(n2.maxPolarAngle, u2.phi)), u2.makeSafe(), n2.enableDamping === true ? n2.target.addScaledVector(m2, n2.dampingFactor) : n2.target.add(m2), n2.zoomToCursor && E2 || n2.object.isOrthographicCamera ? u2.radius = z2(u2.radius) : u2.radius = z2(u2.radius * f2), t3.setFromSpherical(u2), t3.applyQuaternion(o3), v3.copy(n2.target).add(t3), n2.object.matrixAutoUpdate || n2.object.updateMatrix(), n2.object.lookAt(n2.target), n2.enableDamping === true ? (d2.theta *= 1 - n2.dampingFactor, d2.phi *= 1 - n2.dampingFactor, m2.multiplyScalar(1 - n2.dampingFactor)) : (d2.set(0, 0, 0), m2.set(0, 0, 0));
        let x3 = false;
        if (n2.zoomToCursor && E2) {
          let r3 = null;
          if (n2.object instanceof Ee && n2.object.isPerspectiveCamera) {
            let e4 = t3.length();
            r3 = z2(e4 * f2);
            let i4 = e4 - r3;
            n2.object.position.addScaledVector(w2, i4), n2.object.updateMatrixWorld();
          } else if (n2.object.isOrthographicCamera) {
            let e4 = new G(T2.x, T2.y, 0);
            e4.unproject(n2.object), n2.object.zoom = Math.max(n2.minZoom, Math.min(n2.maxZoom, n2.object.zoom / f2)), n2.object.updateProjectionMatrix(), x3 = true;
            let i4 = new G(T2.x, T2.y, 0);
            i4.unproject(n2.object), n2.object.position.sub(i4).add(e4), n2.object.updateMatrixWorld(), r3 = t3.length();
          } else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`), n2.zoomToCursor = false;
          r3 !== null && (n2.screenSpacePanning ? n2.target.set(0, 0, -1).transformDirection(n2.object.matrix).multiplyScalar(r3).add(n2.object.position) : (_a.origin.copy(n2.object.position), _a.direction.set(0, 0, -1).transformDirection(n2.object.matrix), Math.abs(n2.object.up.dot(_a.direction)) < ya ? e3.lookAt(n2.target) : (va.setFromNormalAndCoplanarPoint(n2.object.up, n2.target), _a.intersectPlane(va, n2.target))));
        } else n2.object instanceof p && n2.object.isOrthographicCamera && (x3 = f2 !== 1, x3 && (n2.object.zoom = Math.max(n2.minZoom, Math.min(n2.maxZoom, n2.object.zoom / f2)), n2.object.updateProjectionMatrix()));
        return f2 = 1, E2 = false, x3 || h3.distanceToSquared(n2.object.position) > l2 || 8 * (1 - g3.dot(n2.object.quaternion)) > l2 ? (n2.dispatchEvent(r2), h3.copy(n2.object.position), g3.copy(n2.object.quaternion), x3 = false, true) : false;
      };
    })(), this.connect = (e4) => {
      n2.domElement = e4, n2.domElement.style.touchAction = `none`, n2.domElement.addEventListener(`contextmenu`, Oe2), n2.domElement.addEventListener(`pointerdown`, ge2), n2.domElement.addEventListener(`pointercancel`, ve2), n2.domElement.addEventListener(`wheel`, Se2);
    }, this.dispose = () => {
      var e4, t3, r3, i3, a2, o3;
      n2.domElement && (n2.domElement.style.touchAction = `auto`), (e4 = n2.domElement) == null || e4.removeEventListener(`contextmenu`, Oe2), (t3 = n2.domElement) == null || t3.removeEventListener(`pointerdown`, ge2), (r3 = n2.domElement) == null || r3.removeEventListener(`pointercancel`, ve2), (i3 = n2.domElement) == null || i3.removeEventListener(`wheel`, Se2), (a2 = n2.domElement) == null || a2.ownerDocument.removeEventListener(`pointermove`, _e2), (o3 = n2.domElement) == null || o3.ownerDocument.removeEventListener(`pointerup`, ve2), n2._domElementKeyEvents !== null && n2._domElementKeyEvents.removeEventListener(`keydown`, we2);
    };
    let n2 = this, r2 = { type: `change` }, i2 = { type: `start` }, o2 = { type: `end` }, s2 = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, c2 = s2.NONE, l2 = 1e-6, u2 = new Ce(), d2 = new Ce(), f2 = 1, m2 = new G(), h2 = new a(), g2 = new a(), _2 = new a(), v2 = new a(), y2 = new a(), b2 = new a(), x2 = new a(), S2 = new a(), C2 = new a(), w2 = new G(), T2 = new a(), E2 = false, D2 = [], O2 = {};
    function k2() {
      return 2 * Math.PI / 60 / 60 * n2.autoRotateSpeed;
    }
    function A2() {
      return 0.95 ** n2.zoomSpeed;
    }
    function j2(e4) {
      n2.reverseOrbit || n2.reverseHorizontalOrbit ? d2.theta += e4 : d2.theta -= e4;
    }
    function M2(e4) {
      n2.reverseOrbit || n2.reverseVerticalOrbit ? d2.phi += e4 : d2.phi -= e4;
    }
    let N2 = (() => {
      let e4 = new G();
      return function(t3, n3) {
        e4.setFromMatrixColumn(n3, 0), e4.multiplyScalar(-t3), m2.add(e4);
      };
    })(), P2 = (() => {
      let e4 = new G();
      return function(t3, r3) {
        n2.screenSpacePanning === true ? e4.setFromMatrixColumn(r3, 1) : (e4.setFromMatrixColumn(r3, 0), e4.crossVectors(n2.object.up, e4)), e4.multiplyScalar(t3), m2.add(e4);
      };
    })(), F2 = (() => {
      let e4 = new G();
      return function(t3, r3) {
        let i3 = n2.domElement;
        if (i3 && n2.object instanceof Ee && n2.object.isPerspectiveCamera) {
          let a2 = n2.object.position;
          e4.copy(a2).sub(n2.target);
          let o3 = e4.length();
          o3 *= Math.tan(n2.object.fov / 2 * Math.PI / 180), N2(2 * t3 * o3 / i3.clientHeight, n2.object.matrix), P2(2 * r3 * o3 / i3.clientHeight, n2.object.matrix);
        } else i3 && n2.object instanceof p && n2.object.isOrthographicCamera ? (N2(t3 * (n2.object.right - n2.object.left) / n2.object.zoom / i3.clientWidth, n2.object.matrix), P2(r3 * (n2.object.top - n2.object.bottom) / n2.object.zoom / i3.clientHeight, n2.object.matrix)) : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`), n2.enablePan = false);
      };
    })();
    function I2(e4) {
      n2.object instanceof Ee && n2.object.isPerspectiveCamera || n2.object instanceof p && n2.object.isOrthographicCamera ? f2 = e4 : (console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`), n2.enableZoom = false);
    }
    function ee2(e4) {
      I2(f2 / e4);
    }
    function L2(e4) {
      I2(f2 * e4);
    }
    function R2(e4) {
      if (!n2.zoomToCursor || !n2.domElement) return;
      E2 = true;
      let t3 = n2.domElement.getBoundingClientRect(), r3 = e4.clientX - t3.left, i3 = e4.clientY - t3.top, a2 = t3.width, o3 = t3.height;
      T2.x = r3 / a2 * 2 - 1, T2.y = -(i3 / o3) * 2 + 1, w2.set(T2.x, T2.y, 1).unproject(n2.object).sub(n2.object.position).normalize();
    }
    function z2(e4) {
      return Math.max(n2.minDistance, Math.min(n2.maxDistance, e4));
    }
    function B2(e4) {
      h2.set(e4.clientX, e4.clientY);
    }
    function te2(e4) {
      R2(e4), x2.set(e4.clientX, e4.clientY);
    }
    function ne2(e4) {
      v2.set(e4.clientX, e4.clientY);
    }
    function H2(e4) {
      g2.set(e4.clientX, e4.clientY), _2.subVectors(g2, h2).multiplyScalar(n2.rotateSpeed);
      let t3 = n2.domElement;
      t3 && (j2(2 * Math.PI * _2.x / t3.clientHeight), M2(2 * Math.PI * _2.y / t3.clientHeight)), h2.copy(g2), n2.update();
    }
    function re2(e4) {
      S2.set(e4.clientX, e4.clientY), C2.subVectors(S2, x2), C2.y > 0 ? ee2(A2()) : C2.y < 0 && L2(A2()), x2.copy(S2), n2.update();
    }
    function ie2(e4) {
      y2.set(e4.clientX, e4.clientY), b2.subVectors(y2, v2).multiplyScalar(n2.panSpeed), F2(b2.x, b2.y), v2.copy(y2), n2.update();
    }
    function U2(e4) {
      R2(e4), e4.deltaY < 0 ? L2(A2()) : e4.deltaY > 0 && ee2(A2()), n2.update();
    }
    function ae2(e4) {
      let t3 = false;
      switch (e4.code) {
        case n2.keys.UP:
          F2(0, n2.keyPanSpeed), t3 = true;
          break;
        case n2.keys.BOTTOM:
          F2(0, -n2.keyPanSpeed), t3 = true;
          break;
        case n2.keys.LEFT:
          F2(n2.keyPanSpeed, 0), t3 = true;
          break;
        case n2.keys.RIGHT:
          F2(-n2.keyPanSpeed, 0), t3 = true;
      }
      t3 && (e4.preventDefault(), n2.update());
    }
    function oe2() {
      if (D2.length == 1) h2.set(D2[0].pageX, D2[0].pageY);
      else {
        let e4 = 0.5 * (D2[0].pageX + D2[1].pageX), t3 = 0.5 * (D2[0].pageY + D2[1].pageY);
        h2.set(e4, t3);
      }
    }
    function se2() {
      if (D2.length == 1) v2.set(D2[0].pageX, D2[0].pageY);
      else {
        let e4 = 0.5 * (D2[0].pageX + D2[1].pageX), t3 = 0.5 * (D2[0].pageY + D2[1].pageY);
        v2.set(e4, t3);
      }
    }
    function ce2() {
      let e4 = D2[0].pageX - D2[1].pageX, t3 = D2[0].pageY - D2[1].pageY, n3 = Math.sqrt(e4 * e4 + t3 * t3);
      x2.set(0, n3);
    }
    function le2() {
      n2.enableZoom && ce2(), n2.enablePan && se2();
    }
    function ue2() {
      n2.enableZoom && ce2(), n2.enableRotate && oe2();
    }
    function de2(e4) {
      if (D2.length == 1) g2.set(e4.pageX, e4.pageY);
      else {
        let t4 = Me2(e4), n3 = 0.5 * (e4.pageX + t4.x), r3 = 0.5 * (e4.pageY + t4.y);
        g2.set(n3, r3);
      }
      _2.subVectors(g2, h2).multiplyScalar(n2.rotateSpeed);
      let t3 = n2.domElement;
      t3 && (j2(2 * Math.PI * _2.x / t3.clientHeight), M2(2 * Math.PI * _2.y / t3.clientHeight)), h2.copy(g2);
    }
    function fe2(e4) {
      if (D2.length == 1) y2.set(e4.pageX, e4.pageY);
      else {
        let t3 = Me2(e4), n3 = 0.5 * (e4.pageX + t3.x), r3 = 0.5 * (e4.pageY + t3.y);
        y2.set(n3, r3);
      }
      b2.subVectors(y2, v2).multiplyScalar(n2.panSpeed), F2(b2.x, b2.y), v2.copy(y2);
    }
    function pe2(e4) {
      let t3 = Me2(e4), r3 = e4.pageX - t3.x, i3 = e4.pageY - t3.y, a2 = Math.sqrt(r3 * r3 + i3 * i3);
      S2.set(0, a2), C2.set(0, (S2.y / x2.y) ** +n2.zoomSpeed), ee2(C2.y), x2.copy(S2);
    }
    function me2(e4) {
      n2.enableZoom && pe2(e4), n2.enablePan && fe2(e4);
    }
    function W2(e4) {
      n2.enableZoom && pe2(e4), n2.enableRotate && de2(e4);
    }
    function ge2(e4) {
      var t3, r3;
      n2.enabled !== false && (D2.length === 0 && ((t3 = n2.domElement) == null || t3.ownerDocument.addEventListener(`pointermove`, _e2), (r3 = n2.domElement) == null || r3.ownerDocument.addEventListener(`pointerup`, ve2)), ke2(e4), e4.pointerType === `touch` ? Te2(e4) : be2(e4));
    }
    function _e2(e4) {
      n2.enabled !== false && (e4.pointerType === `touch` ? De2(e4) : xe2(e4));
    }
    function ve2(e4) {
      var t3, r3, i3;
      Ae2(e4), D2.length === 0 && ((t3 = n2.domElement) == null || t3.releasePointerCapture(e4.pointerId), (r3 = n2.domElement) == null || r3.ownerDocument.removeEventListener(`pointermove`, _e2), (i3 = n2.domElement) == null || i3.ownerDocument.removeEventListener(`pointerup`, ve2)), n2.dispatchEvent(o2), c2 = s2.NONE;
    }
    function be2(e4) {
      let t3;
      switch (e4.button) {
        case 0:
          t3 = n2.mouseButtons.LEFT;
          break;
        case 1:
          t3 = n2.mouseButtons.MIDDLE;
          break;
        case 2:
          t3 = n2.mouseButtons.RIGHT;
          break;
        default:
          t3 = -1;
      }
      switch (t3) {
        case he.DOLLY:
          if (n2.enableZoom === false) return;
          te2(e4), c2 = s2.DOLLY;
          break;
        case he.ROTATE:
          if (e4.ctrlKey || e4.metaKey || e4.shiftKey) {
            if (n2.enablePan === false) return;
            ne2(e4), c2 = s2.PAN;
          } else {
            if (n2.enableRotate === false) return;
            B2(e4), c2 = s2.ROTATE;
          }
          break;
        case he.PAN:
          if (e4.ctrlKey || e4.metaKey || e4.shiftKey) {
            if (n2.enableRotate === false) return;
            B2(e4), c2 = s2.ROTATE;
          } else {
            if (n2.enablePan === false) return;
            ne2(e4), c2 = s2.PAN;
          }
          break;
        default:
          c2 = s2.NONE;
      }
      c2 !== s2.NONE && n2.dispatchEvent(i2);
    }
    function xe2(e4) {
      if (n2.enabled !== false) switch (c2) {
        case s2.ROTATE:
          if (n2.enableRotate === false) return;
          H2(e4);
          break;
        case s2.DOLLY:
          if (n2.enableZoom === false) return;
          re2(e4);
          break;
        case s2.PAN:
          if (n2.enablePan === false) return;
          ie2(e4);
      }
    }
    function Se2(e4) {
      n2.enabled === false || n2.enableZoom === false || c2 !== s2.NONE && c2 !== s2.ROTATE || (e4.preventDefault(), n2.dispatchEvent(i2), U2(e4), n2.dispatchEvent(o2));
    }
    function we2(e4) {
      n2.enabled !== false && n2.enablePan !== false && ae2(e4);
    }
    function Te2(e4) {
      switch (je2(e4), D2.length) {
        case 1:
          switch (n2.touches.ONE) {
            case ye.ROTATE:
              if (n2.enableRotate === false) return;
              oe2(), c2 = s2.TOUCH_ROTATE;
              break;
            case ye.PAN:
              if (n2.enablePan === false) return;
              se2(), c2 = s2.TOUCH_PAN;
              break;
            default:
              c2 = s2.NONE;
          }
          break;
        case 2:
          switch (n2.touches.TWO) {
            case ye.DOLLY_PAN:
              if (n2.enableZoom === false && n2.enablePan === false) return;
              le2(), c2 = s2.TOUCH_DOLLY_PAN;
              break;
            case ye.DOLLY_ROTATE:
              if (n2.enableZoom === false && n2.enableRotate === false) return;
              ue2(), c2 = s2.TOUCH_DOLLY_ROTATE;
              break;
            default:
              c2 = s2.NONE;
          }
          break;
        default:
          c2 = s2.NONE;
      }
      c2 !== s2.NONE && n2.dispatchEvent(i2);
    }
    function De2(e4) {
      switch (je2(e4), c2) {
        case s2.TOUCH_ROTATE:
          if (n2.enableRotate === false) return;
          de2(e4), n2.update();
          break;
        case s2.TOUCH_PAN:
          if (n2.enablePan === false) return;
          fe2(e4), n2.update();
          break;
        case s2.TOUCH_DOLLY_PAN:
          if (n2.enableZoom === false && n2.enablePan === false) return;
          me2(e4), n2.update();
          break;
        case s2.TOUCH_DOLLY_ROTATE:
          if (n2.enableZoom === false && n2.enableRotate === false) return;
          W2(e4), n2.update();
          break;
        default:
          c2 = s2.NONE;
      }
    }
    function Oe2(e4) {
      n2.enabled !== false && e4.preventDefault();
    }
    function ke2(e4) {
      D2.push(e4);
    }
    function Ae2(e4) {
      delete O2[e4.pointerId];
      for (let t3 = 0; t3 < D2.length; t3++) if (D2[t3].pointerId == e4.pointerId) {
        D2.splice(t3, 1);
        return;
      }
    }
    function je2(e4) {
      let t3 = O2[e4.pointerId];
      t3 === void 0 && (t3 = new a(), O2[e4.pointerId] = t3), t3.set(e4.pageX, e4.pageY);
    }
    function Me2(e4) {
      let t3 = e4.pointerId === D2[0].pointerId ? D2[1] : D2[0];
      return O2[t3.pointerId];
    }
    this.dollyIn = (e4 = A2()) => {
      L2(e4), n2.update();
    }, this.dollyOut = (e4 = A2()) => {
      ee2(e4), n2.update();
    }, this.getScale = () => f2, this.setScale = (e4) => {
      I2(e4), n2.update();
    }, this.getZoomScale = () => A2(), t2 !== void 0 && this.connect(t2), this.update();
  }
}, Sa = { uniforms: { tDiffuse: { value: null }, h: { value: 1 / 512 } }, vertexShader: `
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
  ` }, Ca = { uniforms: { tDiffuse: { value: null }, v: { value: 1 / 512 } }, vertexShader: `
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
  ` }, wa = class extends ce {
  constructor(e3) {
    super(e3), this.type = we;
  }
  parse(e3) {
    let t2 = function(e4, t3) {
      switch (e4) {
        case 1:
          throw Error(`THREE.RGBELoader: Read Error: ` + (t3 || ``));
        case 2:
          throw Error(`THREE.RGBELoader: Write Error: ` + (t3 || ``));
        case 3:
          throw Error(`THREE.RGBELoader: Bad File Format: ` + (t3 || ``));
        default:
        case 4:
          throw Error(`THREE.RGBELoader: Memory Error: ` + (t3 || ``));
      }
    }, n2 = function(e4, t3, n3) {
      t3 || (t3 = 1024);
      let r3 = e4.pos, i3 = -1, a3 = 0, o3 = ``, s3 = String.fromCharCode.apply(null, new Uint16Array(e4.subarray(r3, r3 + 128)));
      for (; 0 > (i3 = s3.indexOf(`
`)) && a3 < t3 && r3 < e4.byteLength; ) o3 += s3, a3 += s3.length, r3 += 128, s3 += String.fromCharCode.apply(null, new Uint16Array(e4.subarray(r3, r3 + 128)));
      return -1 < i3 && (false !== n3 && (e4.pos += a3 + i3 + 1), o3 + s3.slice(0, i3));
    }, r2 = function(e4) {
      let r3 = /^#\?(\S+)/, i3 = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, a3 = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, o3 = /^\s*FORMAT=(\S+)\s*$/, s3 = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, c3 = { valid: 0, string: ``, comments: ``, programtype: `RGBE`, format: ``, gamma: 1, exposure: 1, width: 0, height: 0 }, l3, u3;
      for ((e4.pos >= e4.byteLength || !(l3 = n2(e4))) && t2(1, `no header found`), (u3 = l3.match(r3)) || t2(3, `bad initial token`), c3.valid |= 1, c3.programtype = u3[1], c3.string += l3 + `
`; l3 = n2(e4), false !== l3; ) if (c3.string += l3 + `
`, l3.charAt(0) === `#`) c3.comments += l3 + `
`;
      else if ((u3 = l3.match(i3)) && (c3.gamma = parseFloat(u3[1])), (u3 = l3.match(a3)) && (c3.exposure = parseFloat(u3[1])), (u3 = l3.match(o3)) && (c3.valid |= 2, c3.format = u3[1]), (u3 = l3.match(s3)) && (c3.valid |= 4, c3.height = parseInt(u3[1], 10), c3.width = parseInt(u3[2], 10)), c3.valid & 2 && c3.valid & 4) break;
      return c3.valid & 2 || t2(3, `missing format specifier`), c3.valid & 4 || t2(3, `missing image size specifier`), c3;
    }, i2 = function(e4, n3, r3) {
      let i3 = n3;
      if (i3 < 8 || i3 > 32767 || e4[0] !== 2 || e4[1] !== 2 || e4[2] & 128) return new Uint8Array(e4);
      i3 !== (e4[2] << 8 | e4[3]) && t2(3, `wrong scanline width`);
      let a3 = new Uint8Array(4 * n3 * r3);
      a3.length || t2(4, `unable to allocate buffer space`);
      let o3 = 0, s3 = 0, c3 = 4 * i3, l3 = new Uint8Array(4), u3 = new Uint8Array(c3), d3 = r3;
      for (; d3 > 0 && s3 < e4.byteLength; ) {
        s3 + 4 > e4.byteLength && t2(1), l3[0] = e4[s3++], l3[1] = e4[s3++], l3[2] = e4[s3++], l3[3] = e4[s3++], (l3[0] != 2 || l3[1] != 2 || (l3[2] << 8 | l3[3]) != i3) && t2(3, `bad rgbe scanline format`);
        let n4 = 0, r4;
        for (; n4 < c3 && s3 < e4.byteLength; ) {
          r4 = e4[s3++];
          let i4 = r4 > 128;
          if (i4 && (r4 -= 128), (r4 === 0 || n4 + r4 > c3) && t2(3, `bad scanline data`), i4) {
            let t3 = e4[s3++];
            for (let e5 = 0; e5 < r4; e5++) u3[n4++] = t3;
          } else u3.set(e4.subarray(s3, s3 + r4), n4), n4 += r4, s3 += r4;
        }
        let f3 = i3;
        for (let e5 = 0; e5 < f3; e5++) {
          let t3 = 0;
          a3[o3] = u3[e5 + t3], t3 += i3, a3[o3 + 1] = u3[e5 + t3], t3 += i3, a3[o3 + 2] = u3[e5 + t3], t3 += i3, a3[o3 + 3] = u3[e5 + t3], o3 += 4;
        }
        d3--;
      }
      return a3;
    }, a2 = function(e4, t3, n3, r3) {
      let i3 = 2 ** (e4[t3 + 3] - 128) / 255;
      n3[r3 + 0] = e4[t3 + 0] * i3, n3[r3 + 1] = e4[t3 + 1] * i3, n3[r3 + 2] = e4[t3 + 2] * i3, n3[r3 + 3] = 1;
    }, o2 = function(e4, t3, n3, r3) {
      let i3 = 2 ** (e4[t3 + 3] - 128) / 255;
      n3[r3 + 0] = ke.toHalfFloat(Math.min(e4[t3 + 0] * i3, 65504)), n3[r3 + 1] = ke.toHalfFloat(Math.min(e4[t3 + 1] * i3, 65504)), n3[r3 + 2] = ke.toHalfFloat(Math.min(e4[t3 + 2] * i3, 65504)), n3[r3 + 3] = ke.toHalfFloat(1);
    }, s2 = new Uint8Array(e3);
    s2.pos = 0;
    let c2 = r2(s2), l2 = c2.width, u2 = c2.height, d2 = i2(s2.subarray(s2.pos), l2, u2), f2, p2, m2;
    switch (this.type) {
      case je:
        m2 = d2.length / 4;
        let e4 = new Float32Array(m2 * 4);
        for (let t4 = 0; t4 < m2; t4++) a2(d2, t4 * 4, e4, t4 * 4);
        f2 = e4, p2 = je;
        break;
      case we:
        m2 = d2.length / 4;
        let t3 = new Uint16Array(m2 * 4);
        for (let e5 = 0; e5 < m2; e5++) o2(d2, e5 * 4, t3, e5 * 4);
        f2 = t3, p2 = we;
        break;
      default:
        throw Error(`THREE.RGBELoader: Unsupported type: ` + this.type);
    }
    return { width: l2, height: u2, data: f2, header: c2.string, gamma: c2.gamma, exposure: c2.exposure, type: p2 };
  }
  setDataType(e3) {
    return this.type = e3, this;
  }
  load(e3, t2, n2, r2) {
    function i2(e4, n3) {
      switch (e4.type) {
        case je:
        case we:
          `colorSpace` in e4 ? e4.colorSpace = `srgb-linear` : e4.encoding = 3e3, e4.minFilter = l, e4.magFilter = l, e4.generateMipmaps = false, e4.flipY = true;
      }
      t2 && t2(e4, n3);
    }
    return super.load(e3, i2, n2, r2);
  }
}, Ta = Ti >= 152, Ea = class extends ce {
  constructor(e3) {
    super(e3), this.type = we;
  }
  parse(e3) {
    let t2 = 65536, n2 = 8192, i2 = 65537, a2 = 16384, o2 = 16383, s2 = 65535, c2 = 2.7182818 ** 2.2;
    function l2(e4, n3) {
      for (var r2 = 0, i3 = 0; i3 < t2; ++i3) (i3 == 0 || e4[i3 >> 3] & 1 << (i3 & 7)) && (n3[r2++] = i3);
      for (var a3 = r2 - 1; r2 < t2; ) n3[r2++] = 0;
      return a3;
    }
    function u2(e4) {
      for (var t3 = 0; t3 < a2; t3++) e4[t3] = {}, e4[t3].len = 0, e4[t3].lit = 0, e4[t3].p = null;
    }
    let d2 = { l: 0, c: 0, lc: 0 };
    function f2(e4, t3, n3, r2, i3) {
      for (; n3 < e4; ) t3 = t3 << 8 | ue2(r2, i3), n3 += 8;
      n3 -= e4, d2.l = t3 >> n3 & (1 << e4) - 1, d2.c = t3, d2.lc = n3;
    }
    let p2 = Array(59);
    function m2(e4) {
      for (var t3 = 0; t3 <= 58; ++t3) p2[t3] = 0;
      for (var t3 = 0; t3 < i2; ++t3) p2[e4[t3]] += 1;
      for (var n3 = 0, t3 = 58; t3 > 0; --t3) {
        var r2 = n3 + p2[t3] >> 1;
        p2[t3] = n3, n3 = r2;
      }
      for (var t3 = 0; t3 < i2; ++t3) {
        var a3 = e4[t3];
        a3 > 0 && (e4[t3] = a3 | p2[a3]++ << 6);
      }
    }
    function h2(e4, t3, n3, r2, i3, a3, o3) {
      for (var s3 = n3, c3 = 0, l3 = 0; i3 <= a3; i3++) {
        if (s3.value - n3.value > r2) return false;
        f2(6, c3, l3, e4, s3);
        var u3 = d2.l;
        if (c3 = d2.c, l3 = d2.lc, o3[i3] = u3, u3 == 63) {
          if (s3.value - n3.value > r2) throw `Something wrong with hufUnpackEncTable`;
          f2(8, c3, l3, e4, s3);
          var p3 = d2.l + 6;
          if (c3 = d2.c, l3 = d2.lc, i3 + p3 > a3 + 1) throw `Something wrong with hufUnpackEncTable`;
          for (; p3--; ) o3[i3++] = 0;
          i3--;
        } else if (u3 >= 59) {
          var p3 = u3 - 59 + 2;
          if (i3 + p3 > a3 + 1) throw `Something wrong with hufUnpackEncTable`;
          for (; p3--; ) o3[i3++] = 0;
          i3--;
        }
      }
      m2(o3);
    }
    function g2(e4) {
      return e4 & 63;
    }
    function _2(e4) {
      return e4 >> 6;
    }
    function v2(e4, t3, n3, r2) {
      for (; t3 <= n3; t3++) {
        var i3 = _2(e4[t3]), a3 = g2(e4[t3]);
        if (i3 >> a3) throw `Invalid table entry`;
        if (a3 > 14) {
          var o3 = r2[i3 >> a3 - 14];
          if (o3.len) throw `Invalid table entry`;
          if (o3.lit++, o3.p) {
            var s3 = o3.p;
            o3.p = Array(o3.lit);
            for (var c3 = 0; c3 < o3.lit - 1; ++c3) o3.p[c3] = s3[c3];
          } else o3.p = [,];
          o3.p[o3.lit - 1] = t3;
        } else if (a3) for (var l3 = 0, c3 = 1 << 14 - a3; c3 > 0; c3--) {
          var o3 = r2[(i3 << 14 - a3) + l3];
          if (o3.len || o3.p) throw `Invalid table entry`;
          o3.len = a3, o3.lit = t3, l3++;
        }
      }
      return true;
    }
    let y2 = { c: 0, lc: 0 };
    function b2(e4, t3, n3, r2) {
      e4 = e4 << 8 | ue2(n3, r2), t3 += 8, y2.c = e4, y2.lc = t3;
    }
    let x2 = { c: 0, lc: 0 };
    function S2(e4, t3, n3, r2, i3, a3, o3, s3, c3, l3) {
      if (e4 == t3) {
        r2 < 8 && (b2(n3, r2, i3, o3), n3 = y2.c, r2 = y2.lc), r2 -= 8;
        var u3 = n3 >> r2, u3 = new Uint8Array([u3])[0];
        if (c3.value + u3 > l3) return false;
        for (var d3 = s3[c3.value - 1]; u3-- > 0; ) s3[c3.value++] = d3;
      } else if (c3.value < l3) s3[c3.value++] = e4;
      else return false;
      x2.c = n3, x2.lc = r2;
    }
    function C2(e4) {
      return e4 & 65535;
    }
    function w2(e4) {
      var t3 = C2(e4);
      return t3 > 32767 ? t3 - 65536 : t3;
    }
    let T2 = { a: 0, b: 0 };
    function E2(e4, t3) {
      var n3 = w2(e4), r2 = w2(t3), i3 = n3 + (r2 & 1) + (r2 >> 1), a3 = i3, o3 = i3 - r2;
      T2.a = a3, T2.b = o3;
    }
    function D2(e4, t3) {
      var n3 = C2(e4), r2 = C2(t3), i3 = n3 - (r2 >> 1) & s2, a3 = r2 + i3 - 32768 & s2;
      T2.a = a3, T2.b = i3;
    }
    function O2(e4, t3, n3, r2, i3, a3, o3) {
      for (var s3 = o3 < 16384, c3 = n3 > i3 ? i3 : n3, l3 = 1, u3; l3 <= c3; ) l3 <<= 1;
      for (l3 >>= 1, u3 = l3, l3 >>= 1; l3 >= 1; ) {
        for (var d3 = 0, f3 = d3 + a3 * (i3 - u3), p3 = a3 * l3, m3 = a3 * u3, h3 = r2 * l3, g3 = r2 * u3, _3, v3, y3, b3; d3 <= f3; d3 += m3) {
          for (var x3 = d3, S3 = d3 + r2 * (n3 - u3); x3 <= S3; x3 += g3) {
            var C3 = x3 + h3, w3 = x3 + p3, O3 = w3 + h3;
            s3 ? (E2(e4[x3 + t3], e4[w3 + t3]), _3 = T2.a, y3 = T2.b, E2(e4[C3 + t3], e4[O3 + t3]), v3 = T2.a, b3 = T2.b, E2(_3, v3), e4[x3 + t3] = T2.a, e4[C3 + t3] = T2.b, E2(y3, b3), e4[w3 + t3] = T2.a, e4[O3 + t3] = T2.b) : (D2(e4[x3 + t3], e4[w3 + t3]), _3 = T2.a, y3 = T2.b, D2(e4[C3 + t3], e4[O3 + t3]), v3 = T2.a, b3 = T2.b, D2(_3, v3), e4[x3 + t3] = T2.a, e4[C3 + t3] = T2.b, D2(y3, b3), e4[w3 + t3] = T2.a, e4[O3 + t3] = T2.b);
          }
          if (n3 & l3) {
            var w3 = x3 + p3;
            s3 ? E2(e4[x3 + t3], e4[w3 + t3]) : D2(e4[x3 + t3], e4[w3 + t3]), _3 = T2.a, e4[w3 + t3] = T2.b, e4[x3 + t3] = _3;
          }
        }
        if (i3 & l3) for (var x3 = d3, S3 = d3 + r2 * (n3 - u3); x3 <= S3; x3 += g3) {
          var C3 = x3 + h3;
          s3 ? E2(e4[x3 + t3], e4[C3 + t3]) : D2(e4[x3 + t3], e4[C3 + t3]), _3 = T2.a, e4[C3 + t3] = T2.b, e4[x3 + t3] = _3;
        }
        u3 = l3, l3 >>= 1;
      }
      return d3;
    }
    function k2(e4, t3, n3, r2, i3, a3, s3, c3, l3, u3) {
      for (var d3 = 0, f3 = 0, p3 = c3, m3 = Math.trunc(i3.value + (a3 + 7) / 8); i3.value < m3; ) for (b2(d3, f3, n3, i3), d3 = y2.c, f3 = y2.lc; f3 >= 14; ) {
        var h3 = t3[d3 >> f3 - 14 & o2];
        if (h3.len) f3 -= h3.len, S2(h3.lit, s3, d3, f3, n3, r2, i3, l3, u3, p3), d3 = x2.c, f3 = x2.lc;
        else {
          if (!h3.p) throw `hufDecode issues`;
          for (var v3 = 0; v3 < h3.lit; v3++) {
            for (var C3 = g2(e4[h3.p[v3]]); f3 < C3 && i3.value < m3; ) b2(d3, f3, n3, i3), d3 = y2.c, f3 = y2.lc;
            if (f3 >= C3 && _2(e4[h3.p[v3]]) == (d3 >> f3 - C3 & (1 << C3) - 1)) {
              f3 -= C3, S2(h3.p[v3], s3, d3, f3, n3, r2, i3, l3, u3, p3), d3 = x2.c, f3 = x2.lc;
              break;
            }
          }
          if (v3 == h3.lit) throw `hufDecode issues`;
        }
      }
      var w3 = 8 - a3 & 7;
      for (d3 >>= w3, f3 -= w3; f3 > 0; ) {
        var h3 = t3[d3 << 14 - f3 & o2];
        if (h3.len) f3 -= h3.len, S2(h3.lit, s3, d3, f3, n3, r2, i3, l3, u3, p3), d3 = x2.c, f3 = x2.lc;
        else throw `hufDecode issues`;
      }
      return true;
    }
    function A2(e4, t3, n3, r2, o3, s3) {
      var c3 = { value: 0 }, l3 = n3.value, d3 = le2(t3, n3), f3 = le2(t3, n3);
      n3.value += 4;
      var p3 = le2(t3, n3);
      if (n3.value += 4, d3 < 0 || d3 >= i2 || f3 < 0 || f3 >= i2) throw `Something wrong with HUF_ENCSIZE`;
      var m3 = Array(i2), g3 = Array(a2);
      if (u2(g3), h2(e4, t3, n3, r2 - (n3.value - l3), d3, f3, m3), p3 > 8 * (r2 - (n3.value - l3))) throw `Something wrong with hufUncompress`;
      v2(m3, d3, f3, g3), k2(m3, g3, e4, t3, n3, p3, f3, s3, o3, c3);
    }
    function j2(e4, t3, n3) {
      for (var r2 = 0; r2 < n3; ++r2) t3[r2] = e4[t3[r2]];
    }
    function M2(e4) {
      for (var t3 = 1; t3 < e4.length; t3++) {
        var n3 = e4[t3 - 1] + e4[t3] - 128;
        e4[t3] = n3;
      }
    }
    function N2(e4, t3) {
      for (var n3 = 0, r2 = Math.floor((e4.length + 1) / 2), i3 = 0, a3 = e4.length - 1; !(i3 > a3 || (t3[i3++] = e4[n3++], i3 > a3)); ) t3[i3++] = e4[r2++];
    }
    function P2(e4) {
      for (var t3 = e4.byteLength, n3 = [], r2 = 0, i3 = new DataView(e4); t3 > 0; ) {
        var a3 = i3.getInt8(r2++);
        if (a3 < 0) {
          var o3 = -a3;
          t3 -= o3 + 1;
          for (var s3 = 0; s3 < o3; s3++) n3.push(i3.getUint8(r2++));
        } else {
          var o3 = a3;
          t3 -= 2;
          for (var c3 = i3.getUint8(r2++), s3 = 0; s3 < o3 + 1; s3++) n3.push(c3);
        }
      }
      return n3;
    }
    function F2(e4, t3, n3, r2, i3, a3) {
      var o3 = new DataView(a3.buffer), s3 = n3[e4.idx[0]].width, c3 = n3[e4.idx[0]].height, l3 = 3, u3 = Math.floor(s3 / 8), d3 = Math.ceil(s3 / 8), f3 = Math.ceil(c3 / 8), p3 = s3 - (d3 - 1) * 8, m3 = c3 - (f3 - 1) * 8, h3 = { value: 0 }, g3 = Array(l3), _3 = Array(l3), v3 = Array(l3), y3 = Array(l3), b3 = Array(l3);
      for (let n4 = 0; n4 < l3; ++n4) b3[n4] = t3[e4.idx[n4]], g3[n4] = n4 < 1 ? 0 : g3[n4 - 1] + d3 * f3, _3[n4] = new Float32Array(64), v3[n4] = new Uint16Array(64), y3[n4] = new Uint16Array(d3 * 64);
      for (let t4 = 0; t4 < f3; ++t4) {
        var x3 = 8;
        t4 == f3 - 1 && (x3 = m3);
        var S3 = 8;
        for (let e5 = 0; e5 < d3; ++e5) {
          e5 == d3 - 1 && (S3 = p3);
          for (let e6 = 0; e6 < l3; ++e6) v3[e6].fill(0), v3[e6][0] = i3[g3[e6]++], I2(h3, r2, v3[e6]), ee2(v3[e6], _3[e6]), L2(_3[e6]);
          R2(_3);
          for (let t5 = 0; t5 < l3; ++t5) z2(_3[t5], y3[t5], e5 * 64);
        }
        let a4 = 0;
        for (let r3 = 0; r3 < l3; ++r3) {
          let i4 = n3[e4.idx[r3]].type;
          for (let e5 = 8 * t4; e5 < 8 * t4 + x3; ++e5) {
            a4 = b3[r3][e5];
            for (let t5 = 0; t5 < u3; ++t5) {
              let n4 = t5 * 64 + (e5 & 7) * 8;
              o3.setUint16(a4 + 0 * i4, y3[r3][n4 + 0], true), o3.setUint16(a4 + 2 * i4, y3[r3][n4 + 1], true), o3.setUint16(a4 + 4 * i4, y3[r3][n4 + 2], true), o3.setUint16(a4 + 6 * i4, y3[r3][n4 + 3], true), o3.setUint16(a4 + 8 * i4, y3[r3][n4 + 4], true), o3.setUint16(a4 + 10 * i4, y3[r3][n4 + 5], true), o3.setUint16(a4 + 12 * i4, y3[r3][n4 + 6], true), o3.setUint16(a4 + 14 * i4, y3[r3][n4 + 7], true), a4 += 16 * i4;
            }
          }
          if (u3 != d3) for (let e5 = 8 * t4; e5 < 8 * t4 + x3; ++e5) {
            let t5 = b3[r3][e5] + 8 * u3 * 2 * i4, n4 = u3 * 64 + (e5 & 7) * 8;
            for (let e6 = 0; e6 < S3; ++e6) o3.setUint16(t5 + e6 * 2 * i4, y3[r3][n4 + e6], true);
          }
        }
      }
      for (var C3 = new Uint16Array(s3), o3 = new DataView(a3.buffer), w3 = 0; w3 < l3; ++w3) {
        n3[e4.idx[w3]].decoded = true;
        var T3 = n3[e4.idx[w3]].type;
        if (n3[w3].type == 2) for (var E3 = 0; E3 < c3; ++E3) {
          let e5 = b3[w3][E3];
          for (var D3 = 0; D3 < s3; ++D3) C3[D3] = o3.getUint16(e5 + D3 * 2 * T3, true);
          for (var D3 = 0; D3 < s3; ++D3) o3.setFloat32(e5 + D3 * 2 * T3, W2(C3[D3]), true);
        }
      }
    }
    function I2(e4, t3, n3) {
      for (var r2, i3 = 1; i3 < 64; ) r2 = t3[e4.value], r2 == 65280 ? i3 = 64 : r2 >> 8 == 255 ? i3 += r2 & 255 : (n3[i3] = r2, i3++), e4.value++;
    }
    function ee2(e4, t3) {
      t3[0] = W2(e4[0]), t3[1] = W2(e4[1]), t3[2] = W2(e4[5]), t3[3] = W2(e4[6]), t3[4] = W2(e4[14]), t3[5] = W2(e4[15]), t3[6] = W2(e4[27]), t3[7] = W2(e4[28]), t3[8] = W2(e4[2]), t3[9] = W2(e4[4]), t3[10] = W2(e4[7]), t3[11] = W2(e4[13]), t3[12] = W2(e4[16]), t3[13] = W2(e4[26]), t3[14] = W2(e4[29]), t3[15] = W2(e4[42]), t3[16] = W2(e4[3]), t3[17] = W2(e4[8]), t3[18] = W2(e4[12]), t3[19] = W2(e4[17]), t3[20] = W2(e4[25]), t3[21] = W2(e4[30]), t3[22] = W2(e4[41]), t3[23] = W2(e4[43]), t3[24] = W2(e4[9]), t3[25] = W2(e4[11]), t3[26] = W2(e4[18]), t3[27] = W2(e4[24]), t3[28] = W2(e4[31]), t3[29] = W2(e4[40]), t3[30] = W2(e4[44]), t3[31] = W2(e4[53]), t3[32] = W2(e4[10]), t3[33] = W2(e4[19]), t3[34] = W2(e4[23]), t3[35] = W2(e4[32]), t3[36] = W2(e4[39]), t3[37] = W2(e4[45]), t3[38] = W2(e4[52]), t3[39] = W2(e4[54]), t3[40] = W2(e4[20]), t3[41] = W2(e4[22]), t3[42] = W2(e4[33]), t3[43] = W2(e4[38]), t3[44] = W2(e4[46]), t3[45] = W2(e4[51]), t3[46] = W2(e4[55]), t3[47] = W2(e4[60]), t3[48] = W2(e4[21]), t3[49] = W2(e4[34]), t3[50] = W2(e4[37]), t3[51] = W2(e4[47]), t3[52] = W2(e4[50]), t3[53] = W2(e4[56]), t3[54] = W2(e4[59]), t3[55] = W2(e4[61]), t3[56] = W2(e4[35]), t3[57] = W2(e4[36]), t3[58] = W2(e4[48]), t3[59] = W2(e4[49]), t3[60] = W2(e4[57]), t3[61] = W2(e4[58]), t3[62] = W2(e4[62]), t3[63] = W2(e4[63]);
    }
    function L2(e4) {
      let t3 = 0.5 * Math.cos(3.14159 / 4), n3 = 0.5 * Math.cos(3.14159 / 16), r2 = 0.5 * Math.cos(3.14159 / 8), i3 = 0.5 * Math.cos(3 * 3.14159 / 16), a3 = 0.5 * Math.cos(15.70795 / 16), o3 = 0.5 * Math.cos(3 * 3.14159 / 8), s3 = 0.5 * Math.cos(21.99113 / 16);
      for (var c3 = [, , , ,], l3 = [, , , ,], u3 = [, , , ,], d3 = [, , , ,], f3 = 0; f3 < 8; ++f3) {
        var p3 = f3 * 8;
        c3[0] = r2 * e4[p3 + 2], c3[1] = o3 * e4[p3 + 2], c3[2] = r2 * e4[p3 + 6], c3[3] = o3 * e4[p3 + 6], l3[0] = n3 * e4[p3 + 1] + i3 * e4[p3 + 3] + a3 * e4[p3 + 5] + s3 * e4[p3 + 7], l3[1] = i3 * e4[p3 + 1] - s3 * e4[p3 + 3] - n3 * e4[p3 + 5] - a3 * e4[p3 + 7], l3[2] = a3 * e4[p3 + 1] - n3 * e4[p3 + 3] + s3 * e4[p3 + 5] + i3 * e4[p3 + 7], l3[3] = s3 * e4[p3 + 1] - a3 * e4[p3 + 3] + i3 * e4[p3 + 5] - n3 * e4[p3 + 7], u3[0] = t3 * (e4[p3 + 0] + e4[p3 + 4]), u3[3] = t3 * (e4[p3 + 0] - e4[p3 + 4]), u3[1] = c3[0] + c3[3], u3[2] = c3[1] - c3[2], d3[0] = u3[0] + u3[1], d3[1] = u3[3] + u3[2], d3[2] = u3[3] - u3[2], d3[3] = u3[0] - u3[1], e4[p3 + 0] = d3[0] + l3[0], e4[p3 + 1] = d3[1] + l3[1], e4[p3 + 2] = d3[2] + l3[2], e4[p3 + 3] = d3[3] + l3[3], e4[p3 + 4] = d3[3] - l3[3], e4[p3 + 5] = d3[2] - l3[2], e4[p3 + 6] = d3[1] - l3[1], e4[p3 + 7] = d3[0] - l3[0];
      }
      for (var m3 = 0; m3 < 8; ++m3) c3[0] = r2 * e4[16 + m3], c3[1] = o3 * e4[16 + m3], c3[2] = r2 * e4[48 + m3], c3[3] = o3 * e4[48 + m3], l3[0] = n3 * e4[8 + m3] + i3 * e4[24 + m3] + a3 * e4[40 + m3] + s3 * e4[56 + m3], l3[1] = i3 * e4[8 + m3] - s3 * e4[24 + m3] - n3 * e4[40 + m3] - a3 * e4[56 + m3], l3[2] = a3 * e4[8 + m3] - n3 * e4[24 + m3] + s3 * e4[40 + m3] + i3 * e4[56 + m3], l3[3] = s3 * e4[8 + m3] - a3 * e4[24 + m3] + i3 * e4[40 + m3] - n3 * e4[56 + m3], u3[0] = t3 * (e4[m3] + e4[32 + m3]), u3[3] = t3 * (e4[m3] - e4[32 + m3]), u3[1] = c3[0] + c3[3], u3[2] = c3[1] - c3[2], d3[0] = u3[0] + u3[1], d3[1] = u3[3] + u3[2], d3[2] = u3[3] - u3[2], d3[3] = u3[0] - u3[1], e4[0 + m3] = d3[0] + l3[0], e4[8 + m3] = d3[1] + l3[1], e4[16 + m3] = d3[2] + l3[2], e4[24 + m3] = d3[3] + l3[3], e4[32 + m3] = d3[3] - l3[3], e4[40 + m3] = d3[2] - l3[2], e4[48 + m3] = d3[1] - l3[1], e4[56 + m3] = d3[0] - l3[0];
    }
    function R2(e4) {
      for (var t3 = 0; t3 < 64; ++t3) {
        var n3 = e4[0][t3], r2 = e4[1][t3], i3 = e4[2][t3];
        e4[0][t3] = n3 + 1.5747 * i3, e4[1][t3] = n3 - 0.1873 * r2 - 0.4682 * i3, e4[2][t3] = n3 + 1.8556 * r2;
      }
    }
    function z2(e4, t3, n3) {
      for (var r2 = 0; r2 < 64; ++r2) t3[n3 + r2] = ke.toHalfFloat(B2(e4[r2]));
    }
    function B2(e4) {
      return e4 <= 1 ? Math.sign(e4) * Math.abs(e4) ** 2.2 : Math.sign(e4) * c2 ** (Math.abs(e4) - 1);
    }
    function te2(e4) {
      return new DataView(e4.array.buffer, e4.offset.value, e4.size);
    }
    function V2(e4) {
      var t3 = e4.viewer.buffer.slice(e4.offset.value, e4.offset.value + e4.size), n3 = new Uint8Array(P2(t3)), r2 = new Uint8Array(n3.length);
      return M2(n3), N2(n3, r2), new DataView(r2.buffer);
    }
    function ne2(e4) {
      var t3 = na(e4.array.slice(e4.offset.value, e4.offset.value + e4.size)), n3 = new Uint8Array(t3.length);
      return M2(t3), N2(t3, n3), new DataView(n3.buffer);
    }
    function H2(e4) {
      for (var r2 = e4.viewer, i3 = { value: e4.offset.value }, a3 = new Uint16Array(e4.width * e4.scanlineBlockSize * (e4.channels * e4.type)), o3 = new Uint8Array(n2), s3 = 0, c3 = Array(e4.channels), u3 = 0; u3 < e4.channels; u3++) c3[u3] = {}, c3[u3].start = s3, c3[u3].end = c3[u3].start, c3[u3].nx = e4.width, c3[u3].ny = e4.lines, c3[u3].size = e4.type, s3 += c3[u3].nx * c3[u3].ny * c3[u3].size;
      var d3 = he2(r2, i3), f3 = he2(r2, i3);
      if (f3 >= n2) throw `Something is wrong with PIZ_COMPRESSION BITMAP_SIZE`;
      if (d3 <= f3) for (var u3 = 0; u3 < f3 - d3 + 1; u3++) o3[u3 + d3] = de2(r2, i3);
      var p3 = new Uint16Array(t2), m3 = l2(o3, p3), h3 = le2(r2, i3);
      A2(e4.array, r2, i3, h3, a3, s3);
      for (var u3 = 0; u3 < e4.channels; ++u3) for (var g3 = c3[u3], _3 = 0; _3 < c3[u3].size; ++_3) O2(a3, g3.start + _3, g3.nx, g3.size, g3.ny, g3.nx * g3.size, m3);
      j2(p3, a3, s3);
      for (var v3 = 0, y3 = new Uint8Array(a3.buffer.byteLength), b3 = 0; b3 < e4.lines; b3++) for (var x3 = 0; x3 < e4.channels; x3++) {
        var g3 = c3[x3], S3 = g3.nx * g3.size, C3 = new Uint8Array(a3.buffer, g3.end * 2, S3 * 2);
        y3.set(C3, v3), v3 += S3 * 2, g3.end += S3;
      }
      return new DataView(y3.buffer);
    }
    function re2(e4) {
      var t3 = na(e4.array.slice(e4.offset.value, e4.offset.value + e4.size));
      let n3 = e4.lines * e4.channels * e4.width, r2 = e4.type == 1 ? new Uint16Array(n3) : new Uint32Array(n3), i3 = 0, a3 = 0, o3 = [, , , ,];
      for (let n4 = 0; n4 < e4.lines; n4++) for (let n5 = 0; n5 < e4.channels; n5++) {
        let n6 = 0;
        switch (e4.type) {
          case 1:
            o3[0] = i3, o3[1] = o3[0] + e4.width, i3 = o3[1] + e4.width;
            for (let i4 = 0; i4 < e4.width; ++i4) {
              let e5 = t3[o3[0]++] << 8 | t3[o3[1]++];
              n6 += e5, r2[a3] = n6, a3++;
            }
            break;
          case 2:
            o3[0] = i3, o3[1] = o3[0] + e4.width, o3[2] = o3[1] + e4.width, i3 = o3[2] + e4.width;
            for (let i4 = 0; i4 < e4.width; ++i4) {
              let e5 = t3[o3[0]++] << 24 | t3[o3[1]++] << 16 | t3[o3[2]++] << 8;
              n6 += e5, r2[a3] = n6, a3++;
            }
        }
      }
      return new DataView(r2.buffer);
    }
    function ie2(e4) {
      var t3 = e4.viewer, n3 = { value: e4.offset.value }, r2 = new Uint8Array(e4.width * e4.lines * (e4.channels * e4.type * 2)), i3 = { version: fe2(t3, n3), unknownUncompressedSize: fe2(t3, n3), unknownCompressedSize: fe2(t3, n3), acCompressedSize: fe2(t3, n3), dcCompressedSize: fe2(t3, n3), rleCompressedSize: fe2(t3, n3), rleUncompressedSize: fe2(t3, n3), rleRawSize: fe2(t3, n3), totalAcUncompressedCount: fe2(t3, n3), totalDcUncompressedCount: fe2(t3, n3), acCompression: fe2(t3, n3) };
      if (i3.version < 2) throw `EXRLoader.parse: ` + G2.compression + ` version ` + i3.version + ` is unsupported`;
      for (var a3 = [], o3 = he2(t3, n3) - 2; o3 > 0; ) {
        var s3 = U2(t3.buffer, n3), c3 = de2(t3, n3), l3 = c3 >> 2 & 3, u3 = (c3 >> 4) - 1, d3 = new Int8Array([u3])[0], f3 = de2(t3, n3);
        a3.push({ name: s3, index: d3, type: f3, compression: l3 }), o3 -= s3.length + 3;
      }
      for (var p3 = G2.channels, m3 = Array(e4.channels), h3 = 0; h3 < e4.channels; ++h3) {
        var g3 = m3[h3] = {}, _3 = p3[h3];
        g3.name = _3.name, g3.compression = 0, g3.decoded = false, g3.type = _3.pixelType, g3.pLinear = _3.pLinear, g3.width = e4.width, g3.height = e4.lines;
      }
      for (var v3 = { idx: [, , ,] }, y3 = 0; y3 < e4.channels; ++y3) for (var g3 = m3[y3], h3 = 0; h3 < a3.length; ++h3) {
        var b3 = a3[h3];
        g3.name == b3.name && (g3.compression = b3.compression, b3.index >= 0 && (v3.idx[b3.index] = y3), g3.offset = y3);
      }
      if (i3.acCompressedSize > 0) switch (i3.acCompression) {
        case 0:
          var x3 = new Uint16Array(i3.totalAcUncompressedCount);
          A2(e4.array, t3, n3, i3.acCompressedSize, x3, i3.totalAcUncompressedCount);
          break;
        case 1:
          var S3 = e4.array.slice(n3.value, n3.value + i3.totalAcUncompressedCount), C3 = na(S3), x3 = new Uint16Array(C3.buffer);
          n3.value += i3.totalAcUncompressedCount;
      }
      if (i3.dcCompressedSize > 0) {
        var w3 = { array: e4.array, offset: n3, size: i3.dcCompressedSize }, T3 = new Uint16Array(ne2(w3).buffer);
        n3.value += i3.dcCompressedSize;
      }
      if (i3.rleRawSize > 0) {
        var S3 = e4.array.slice(n3.value, n3.value + i3.rleCompressedSize), C3 = na(S3), E3 = P2(C3.buffer);
        n3.value += i3.rleCompressedSize;
      }
      for (var D3 = 0, O3 = Array(m3.length), h3 = 0; h3 < O3.length; ++h3) O3[h3] = [];
      for (var k3 = 0; k3 < e4.lines; ++k3) for (var j3 = 0; j3 < m3.length; ++j3) O3[j3].push(D3), D3 += m3[j3].width * e4.type * 2;
      F2(v3, O3, m3, x3, T3, r2);
      for (var h3 = 0; h3 < m3.length; ++h3) {
        var g3 = m3[h3];
        if (!g3.decoded) switch (g3.compression) {
          case 2:
            for (var M3 = 0, N3 = 0, k3 = 0; k3 < e4.lines; ++k3) {
              for (var I3 = O3[h3][M3], ee3 = 0; ee3 < g3.width; ++ee3) {
                for (var L3 = 0; L3 < 2 * g3.type; ++L3) r2[I3++] = E3[N3 + L3 * g3.width * g3.height];
                N3++;
              }
              M3++;
            }
            break;
          default:
            throw `EXRLoader.parse: unsupported channel compression`;
        }
      }
      return new DataView(r2.buffer);
    }
    function U2(e4, t3) {
      for (var n3 = new Uint8Array(e4), r2 = 0; n3[t3.value + r2] != 0; ) r2 += 1;
      var i3 = new TextDecoder().decode(n3.slice(t3.value, t3.value + r2));
      return t3.value = t3.value + r2 + 1, i3;
    }
    function ae2(e4, t3, n3) {
      var r2 = new TextDecoder().decode(new Uint8Array(e4).slice(t3.value, t3.value + n3));
      return t3.value += n3, r2;
    }
    function oe2(e4, t3) {
      return [ce2(e4, t3), le2(e4, t3)];
    }
    function se2(e4, t3) {
      return [le2(e4, t3), le2(e4, t3)];
    }
    function ce2(e4, t3) {
      var n3 = e4.getInt32(t3.value, true);
      return t3.value += 4, n3;
    }
    function le2(e4, t3) {
      var n3 = e4.getUint32(t3.value, true);
      return t3.value += 4, n3;
    }
    function ue2(e4, t3) {
      var n3 = e4[t3.value];
      return t3.value += 1, n3;
    }
    function de2(e4, t3) {
      var n3 = e4.getUint8(t3.value);
      return t3.value += 1, n3;
    }
    let fe2 = function(e4, t3) {
      let n3;
      return n3 = `getBigInt64` in DataView.prototype ? Number(e4.getBigInt64(t3.value, true)) : e4.getUint32(t3.value + 4, true) + Number(e4.getUint32(t3.value, true) << 32), t3.value += 8, n3;
    };
    function pe2(e4, t3) {
      var n3 = e4.getFloat32(t3.value, true);
      return t3.value += 4, n3;
    }
    function me2(e4, t3) {
      return ke.toHalfFloat(pe2(e4, t3));
    }
    function W2(e4) {
      var t3 = (e4 & 31744) >> 10, n3 = e4 & 1023;
      return (e4 >> 15 ? -1 : 1) * (t3 ? t3 === 31 ? n3 ? NaN : 1 / 0 : 2 ** (t3 - 15) * (1 + n3 / 1024) : n3 / 1024 * 6103515625e-14);
    }
    function he2(e4, t3) {
      var n3 = e4.getUint16(t3.value, true);
      return t3.value += 2, n3;
    }
    function ge2(e4, t3) {
      return W2(he2(e4, t3));
    }
    function _e2(e4, t3, n3, r2) {
      for (var i3 = n3.value, a3 = []; n3.value < i3 + r2 - 1; ) {
        var o3 = U2(t3, n3), s3 = ce2(e4, n3), c3 = de2(e4, n3);
        n3.value += 3;
        var l3 = ce2(e4, n3), u3 = ce2(e4, n3);
        a3.push({ name: o3, pixelType: s3, pLinear: c3, xSampling: l3, ySampling: u3 });
      }
      return n3.value += 1, a3;
    }
    function ve2(e4, t3) {
      return { redX: pe2(e4, t3), redY: pe2(e4, t3), greenX: pe2(e4, t3), greenY: pe2(e4, t3), blueX: pe2(e4, t3), blueY: pe2(e4, t3), whiteX: pe2(e4, t3), whiteY: pe2(e4, t3) };
    }
    function ye2(e4, t3) {
      return [`NO_COMPRESSION`, `RLE_COMPRESSION`, `ZIPS_COMPRESSION`, `ZIP_COMPRESSION`, `PIZ_COMPRESSION`, `PXR24_COMPRESSION`, `B44_COMPRESSION`, `B44A_COMPRESSION`, `DWAA_COMPRESSION`, `DWAB_COMPRESSION`][de2(e4, t3)];
    }
    function be2(e4, t3) {
      return { xMin: le2(e4, t3), yMin: le2(e4, t3), xMax: le2(e4, t3), yMax: le2(e4, t3) };
    }
    function Se2(e4, t3) {
      return [`INCREASING_Y`][de2(e4, t3)];
    }
    function Ce2(e4, t3) {
      return [pe2(e4, t3), pe2(e4, t3)];
    }
    function Te2(e4, t3) {
      return [pe2(e4, t3), pe2(e4, t3), pe2(e4, t3)];
    }
    function Ee2(e4, t3, n3, r2, i3) {
      if (r2 === `string` || r2 === `stringvector` || r2 === `iccProfile`) return ae2(t3, n3, i3);
      if (r2 === `chlist`) return _e2(e4, t3, n3, i3);
      if (r2 === `chromaticities`) return ve2(e4, n3);
      if (r2 === `compression`) return ye2(e4, n3);
      if (r2 === `box2i`) return be2(e4, n3);
      if (r2 === `lineOrder`) return Se2(e4, n3);
      if (r2 === `float`) return pe2(e4, n3);
      if (r2 === `v2f`) return Ce2(e4, n3);
      if (r2 === `v3f`) return Te2(e4, n3);
      if (r2 === `int`) return ce2(e4, n3);
      if (r2 === `rational`) return oe2(e4, n3);
      if (r2 === `timecode`) return se2(e4, n3);
      if (r2 === `preview`) return n3.value += i3, `skipped`;
      n3.value += i3;
    }
    function De2(e4, t3, n3) {
      let r2 = {};
      if (e4.getUint32(0, true) != 20000630) throw `THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.`;
      r2.version = e4.getUint8(4);
      let i3 = e4.getUint8(5);
      r2.spec = { singleTile: !!(i3 & 2), longName: !!(i3 & 4), deepFormat: !!(i3 & 8), multiPart: !!(i3 & 16) }, n3.value = 8;
      for (var a3 = true; a3; ) {
        var o3 = U2(t3, n3);
        if (o3 == 0) a3 = false;
        else {
          var s3 = U2(t3, n3), c3 = Ee2(e4, t3, n3, s3, le2(e4, n3));
          c3 === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${s3}'.`) : r2[o3] = c3;
        }
      }
      if (i3 & -5) throw console.error(`EXRHeader:`, r2), `THREE.EXRLoader: provided file is currently unsupported.`;
      return r2;
    }
    function Oe2(e4, t3, n3, i3, a3) {
      let o3 = { size: 0, viewer: t3, array: n3, offset: i3, width: e4.dataWindow.xMax - e4.dataWindow.xMin + 1, height: e4.dataWindow.yMax - e4.dataWindow.yMin + 1, channels: e4.channels.length, bytesPerLine: null, lines: null, inputSize: null, type: e4.channels[0].pixelType, uncompress: null, getter: null, format: null, [Ta ? `colorSpace` : `encoding`]: null };
      switch (e4.compression) {
        case `NO_COMPRESSION`:
          o3.lines = 1, o3.uncompress = te2;
          break;
        case `RLE_COMPRESSION`:
          o3.lines = 1, o3.uncompress = V2;
          break;
        case `ZIPS_COMPRESSION`:
          o3.lines = 1, o3.uncompress = ne2;
          break;
        case `ZIP_COMPRESSION`:
          o3.lines = 16, o3.uncompress = ne2;
          break;
        case `PIZ_COMPRESSION`:
          o3.lines = 32, o3.uncompress = H2;
          break;
        case `PXR24_COMPRESSION`:
          o3.lines = 16, o3.uncompress = re2;
          break;
        case `DWAA_COMPRESSION`:
          o3.lines = 32, o3.uncompress = ie2;
          break;
        case `DWAB_COMPRESSION`:
          o3.lines = 256, o3.uncompress = ie2;
          break;
        default:
          throw `EXRLoader.parse: ` + e4.compression + ` is unsupported`;
      }
      if (o3.scanlineBlockSize = o3.lines, o3.type == 1) switch (a3) {
        case je:
          o3.getter = ge2, o3.inputSize = 2;
          break;
        case we:
          o3.getter = he2, o3.inputSize = 2;
      }
      else if (o3.type == 2) switch (a3) {
        case je:
          o3.getter = pe2, o3.inputSize = 4;
          break;
        case we:
          o3.getter = me2, o3.inputSize = 4;
      }
      else throw `EXRLoader.parse: unsupported pixelType ` + o3.type + ` for ` + e4.compression + `.`;
      o3.blockCount = (e4.dataWindow.yMax + 1) / o3.scanlineBlockSize;
      for (var s3 = 0; s3 < o3.blockCount; s3++) fe2(t3, i3);
      o3.outputChannels = o3.channels == 3 ? 4 : o3.channels;
      let c3 = o3.width * o3.height * o3.outputChannels;
      switch (a3) {
        case je:
          o3.byteArray = new Float32Array(c3), o3.channels < o3.outputChannels && o3.byteArray.fill(1, 0, c3);
          break;
        case we:
          o3.byteArray = new Uint16Array(c3), o3.channels < o3.outputChannels && o3.byteArray.fill(15360, 0, c3);
          break;
        default:
          console.error(`THREE.EXRLoader: unsupported type: `, a3);
      }
      return o3.bytesPerLine = o3.width * o3.inputSize * o3.channels, o3.format = o3.outputChannels == 4 ? r : xe, Ta ? o3.colorSpace = `srgb-linear` : o3.encoding = 3e3, o3;
    }
    let Ae2 = new DataView(e3), Me2 = new Uint8Array(e3), Ne2 = { value: 0 }, G2 = De2(Ae2, e3, Ne2), K2 = Oe2(G2, Ae2, Me2, Ne2, this.type), Pe2 = { value: 0 }, Fe2 = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let e4 = 0; e4 < K2.height / K2.scanlineBlockSize; e4++) {
      let t3 = le2(Ae2, Ne2);
      K2.size = le2(Ae2, Ne2), K2.lines = t3 + K2.scanlineBlockSize > K2.height ? K2.height - t3 : K2.scanlineBlockSize;
      let n3 = K2.size < K2.lines * K2.bytesPerLine ? K2.uncompress(K2) : te2(K2);
      Ne2.value += K2.size;
      for (let t4 = 0; t4 < K2.scanlineBlockSize; t4++) {
        let r2 = t4 + e4 * K2.scanlineBlockSize;
        if (r2 >= K2.height) break;
        for (let e5 = 0; e5 < K2.channels; e5++) {
          let i3 = Fe2[G2.channels[e5].name];
          for (let a3 = 0; a3 < K2.width; a3++) {
            Pe2.value = (t4 * (K2.channels * K2.width) + e5 * K2.width + a3) * K2.inputSize;
            let o3 = (K2.height - 1 - r2) * (K2.width * K2.outputChannels) + a3 * K2.outputChannels + i3;
            K2.byteArray[o3] = K2.getter(n3, Pe2);
          }
        }
      }
    }
    return { header: G2, width: K2.width, height: K2.height, data: K2.byteArray, format: K2.format, [Ta ? `colorSpace` : `encoding`]: K2[Ta ? `colorSpace` : `encoding`], type: this.type };
  }
  setDataType(e3) {
    return this.type = e3, this;
  }
  load(e3, t2, n2, r2) {
    function i2(e4, n3) {
      Ta ? e4.colorSpace = n3.colorSpace : e4.encoding = n3.encoding, e4.minFilter = l, e4.magFilter = l, e4.generateMipmaps = false, e4.flipY = false, t2 && t2(e4, n3);
    }
    return super.load(e3, i2, n2, r2);
  }
}, Da = new I(), Oa = new G(), ka = class extends de {
  constructor() {
    super(), this.isLineSegmentsGeometry = true, this.type = `LineSegmentsGeometry`, this.setIndex([0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5]), this.setAttribute(`position`, new ve([-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], 3)), this.setAttribute(`uv`, new ve([-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], 2));
  }
  applyMatrix4(e3) {
    let t2 = this.attributes.instanceStart, n2 = this.attributes.instanceEnd;
    return t2 !== void 0 && (t2.applyMatrix4(e3), n2.applyMatrix4(e3), t2.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(e3) {
    let t2;
    e3 instanceof Float32Array ? t2 = e3 : Array.isArray(e3) && (t2 = new Float32Array(e3));
    let n2 = new ne(t2, 6, 1);
    return this.setAttribute(`instanceStart`, new U(n2, 3, 0)), this.setAttribute(`instanceEnd`, new U(n2, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(e3, t2 = 3) {
    let n2;
    e3 instanceof Float32Array ? n2 = e3 : Array.isArray(e3) && (n2 = new Float32Array(e3));
    let r2 = new ne(n2, t2 * 2, 1);
    return this.setAttribute(`instanceColorStart`, new U(r2, t2, 0)), this.setAttribute(`instanceColorEnd`, new U(r2, t2, t2)), this;
  }
  fromWireframeGeometry(e3) {
    return this.setPositions(e3.attributes.position.array), this;
  }
  fromEdgesGeometry(e3) {
    return this.setPositions(e3.attributes.position.array), this;
  }
  fromMesh(e3) {
    return this.fromWireframeGeometry(new C(e3.geometry)), this;
  }
  fromLineSegments(e3) {
    let t2 = e3.geometry;
    return this.setPositions(t2.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new I());
    let e3 = this.attributes.instanceStart, t2 = this.attributes.instanceEnd;
    e3 !== void 0 && t2 !== void 0 && (this.boundingBox.setFromBufferAttribute(e3), Da.setFromBufferAttribute(t2), this.boundingBox.union(Da));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new oe()), this.boundingBox === null && this.computeBoundingBox();
    let e3 = this.attributes.instanceStart, t2 = this.attributes.instanceEnd;
    if (e3 !== void 0 && t2 !== void 0) {
      let n2 = this.boundingSphere.center;
      this.boundingBox.getCenter(n2);
      let r2 = 0;
      for (let i2 = 0, a2 = e3.count; i2 < a2; i2++) Oa.fromBufferAttribute(e3, i2), r2 = Math.max(r2, n2.distanceToSquared(Oa)), Oa.fromBufferAttribute(t2, i2), r2 = Math.max(r2, n2.distanceToSquared(Oa));
      this.boundingSphere.radius = Math.sqrt(r2), isNaN(this.boundingSphere.radius) && console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`, this);
    }
  }
  toJSON() {
  }
  applyMatrix(e3) {
    return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`), this.applyMatrix4(e3);
  }
}, Aa = class extends ka {
  constructor() {
    super(), this.isLineGeometry = true, this.type = `LineGeometry`;
  }
  setPositions(e3) {
    let t2 = e3.length - 3, n2 = new Float32Array(2 * t2);
    for (let r2 = 0; r2 < t2; r2 += 3) n2[2 * r2] = e3[r2], n2[2 * r2 + 1] = e3[r2 + 1], n2[2 * r2 + 2] = e3[r2 + 2], n2[2 * r2 + 3] = e3[r2 + 3], n2[2 * r2 + 4] = e3[r2 + 4], n2[2 * r2 + 5] = e3[r2 + 5];
    return super.setPositions(n2), this;
  }
  setColors(e3, t2 = 3) {
    let n2 = e3.length - t2, r2 = new Float32Array(2 * n2);
    if (t2 === 3) for (let i2 = 0; i2 < n2; i2 += t2) r2[2 * i2] = e3[i2], r2[2 * i2 + 1] = e3[i2 + 1], r2[2 * i2 + 2] = e3[i2 + 2], r2[2 * i2 + 3] = e3[i2 + 3], r2[2 * i2 + 4] = e3[i2 + 4], r2[2 * i2 + 5] = e3[i2 + 5];
    else for (let i2 = 0; i2 < n2; i2 += t2) r2[2 * i2] = e3[i2], r2[2 * i2 + 1] = e3[i2 + 1], r2[2 * i2 + 2] = e3[i2 + 2], r2[2 * i2 + 3] = e3[i2 + 3], r2[2 * i2 + 4] = e3[i2 + 4], r2[2 * i2 + 5] = e3[i2 + 5], r2[2 * i2 + 6] = e3[i2 + 6], r2[2 * i2 + 7] = e3[i2 + 7];
    return super.setColors(r2, t2), this;
  }
  fromLine(e3) {
    let t2 = e3.geometry;
    return this.setPositions(t2.attributes.position.array), this;
  }
}, ja = class extends Se {
  constructor(e3) {
    super({ type: `LineMaterial`, uniforms: Fe.clone(Fe.merge([u.common, u.fog, { worldUnits: { value: 1 }, linewidth: { value: 1 }, resolution: { value: new a(1, 1) }, dashOffset: { value: 0 }, dashScale: { value: 1 }, dashSize: { value: 1 }, gapSize: { value: 1 } }])), vertexShader: `
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
					#include <${Ti >= 154 ? `colorspace_fragment` : `encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`, clipping: true }), this.isLineMaterial = true, this.onBeforeCompile = function() {
      this.transparent ? this.defines.USE_LINE_COLOR_ALPHA = `1` : delete this.defines.USE_LINE_COLOR_ALPHA;
    }, Object.defineProperties(this, { color: { enumerable: true, get: function() {
      return this.uniforms.diffuse.value;
    }, set: function(e4) {
      this.uniforms.diffuse.value = e4;
    } }, worldUnits: { enumerable: true, get: function() {
      return `WORLD_UNITS` in this.defines;
    }, set: function(e4) {
      e4 === true ? this.defines.WORLD_UNITS = `` : delete this.defines.WORLD_UNITS;
    } }, linewidth: { enumerable: true, get: function() {
      return this.uniforms.linewidth.value;
    }, set: function(e4) {
      this.uniforms.linewidth.value = e4;
    } }, dashed: { enumerable: true, get: function() {
      return `USE_DASH` in this.defines;
    }, set(e4) {
      !!e4 != `USE_DASH` in this.defines && (this.needsUpdate = true), e4 === true ? this.defines.USE_DASH = `` : delete this.defines.USE_DASH;
    } }, dashScale: { enumerable: true, get: function() {
      return this.uniforms.dashScale.value;
    }, set: function(e4) {
      this.uniforms.dashScale.value = e4;
    } }, dashSize: { enumerable: true, get: function() {
      return this.uniforms.dashSize.value;
    }, set: function(e4) {
      this.uniforms.dashSize.value = e4;
    } }, dashOffset: { enumerable: true, get: function() {
      return this.uniforms.dashOffset.value;
    }, set: function(e4) {
      this.uniforms.dashOffset.value = e4;
    } }, gapSize: { enumerable: true, get: function() {
      return this.uniforms.gapSize.value;
    }, set: function(e4) {
      this.uniforms.gapSize.value = e4;
    } }, opacity: { enumerable: true, get: function() {
      return this.uniforms.opacity.value;
    }, set: function(e4) {
      this.uniforms.opacity.value = e4;
    } }, resolution: { enumerable: true, get: function() {
      return this.uniforms.resolution.value;
    }, set: function(e4) {
      this.uniforms.resolution.value.copy(e4);
    } }, alphaToCoverage: { enumerable: true, get: function() {
      return `USE_ALPHA_TO_COVERAGE` in this.defines;
    }, set: function(e4) {
      !!e4 != `USE_ALPHA_TO_COVERAGE` in this.defines && (this.needsUpdate = true), e4 === true ? (this.defines.USE_ALPHA_TO_COVERAGE = ``, this.extensions.derivatives = true) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = false);
    } } }), this.setValues(e3);
  }
}, Ma = new N(), Na = new G(), Pa = new G(), Fa = new N(), Ia = new N(), La = new N(), Ra = new G(), za = new d(), Ba = new o(), Va = new G(), Ha = new I(), Ua = new oe(), Wa = new N(), Ga, Ka;
function qa(e3, t2, n2) {
  return Wa.set(0, 0, -t2, 1).applyMatrix4(e3.projectionMatrix), Wa.multiplyScalar(1 / Wa.w), Wa.x = Ka / n2.width, Wa.y = Ka / n2.height, Wa.applyMatrix4(e3.projectionMatrixInverse), Wa.multiplyScalar(1 / Wa.w), Math.abs(Math.max(Wa.x, Wa.y));
}
function Ja(e3, t2) {
  let n2 = e3.matrixWorld, r2 = e3.geometry, i2 = r2.attributes.instanceStart, a2 = r2.attributes.instanceEnd, o2 = Math.min(r2.instanceCount, i2.count);
  for (let r3 = 0, s2 = o2; r3 < s2; r3++) {
    Ba.start.fromBufferAttribute(i2, r3), Ba.end.fromBufferAttribute(a2, r3), Ba.applyMatrix4(n2);
    let o3 = new G(), s3 = new G();
    Ga.distanceSqToSegment(Ba.start, Ba.end, s3, o3), s3.distanceTo(o3) < Ka * 0.5 && t2.push({ point: s3, pointOnLine: o3, distance: Ga.origin.distanceTo(s3), object: e3, face: null, faceIndex: r3, uv: null, [Ei]: null });
  }
}
function Ya(e3, t2, n2) {
  let r2 = t2.projectionMatrix, i2 = e3.material.resolution, a2 = e3.matrixWorld, o2 = e3.geometry, s2 = o2.attributes.instanceStart, c2 = o2.attributes.instanceEnd, l2 = Math.min(o2.instanceCount, s2.count), u2 = -t2.near;
  Ga.at(1, La), La.w = 1, La.applyMatrix4(t2.matrixWorldInverse), La.applyMatrix4(r2), La.multiplyScalar(1 / La.w), La.x *= i2.x / 2, La.y *= i2.y / 2, La.z = 0, Ra.copy(La), za.multiplyMatrices(t2.matrixWorldInverse, a2);
  for (let t3 = 0, o3 = l2; t3 < o3; t3++) {
    if (Fa.fromBufferAttribute(s2, t3), Ia.fromBufferAttribute(c2, t3), Fa.w = 1, Ia.w = 1, Fa.applyMatrix4(za), Ia.applyMatrix4(za), Fa.z > u2 && Ia.z > u2) continue;
    if (Fa.z > u2) {
      let e4 = Fa.z - Ia.z, t4 = (Fa.z - u2) / e4;
      Fa.lerp(Ia, t4);
    } else if (Ia.z > u2) {
      let e4 = Ia.z - Fa.z, t4 = (Ia.z - u2) / e4;
      Ia.lerp(Fa, t4);
    }
    Fa.applyMatrix4(r2), Ia.applyMatrix4(r2), Fa.multiplyScalar(1 / Fa.w), Ia.multiplyScalar(1 / Ia.w), Fa.x *= i2.x / 2, Fa.y *= i2.y / 2, Ia.x *= i2.x / 2, Ia.y *= i2.y / 2, Ba.start.copy(Fa), Ba.start.z = 0, Ba.end.copy(Ia), Ba.end.z = 0;
    let o4 = Ba.closestPointToPointParameter(Ra, true);
    Ba.at(o4, Va);
    let l3 = S.lerp(Fa.z, Ia.z, o4), d2 = l3 >= -1 && l3 <= 1, f2 = Ra.distanceTo(Va) < Ka * 0.5;
    if (d2 && f2) {
      Ba.start.fromBufferAttribute(s2, t3), Ba.end.fromBufferAttribute(c2, t3), Ba.start.applyMatrix4(a2), Ba.end.applyMatrix4(a2);
      let r3 = new G(), i3 = new G();
      Ga.distanceSqToSegment(Ba.start, Ba.end, i3, r3), n2.push({ point: i3, pointOnLine: r3, distance: Ga.origin.distanceTo(i3), object: e3, face: null, faceIndex: t3, uv: null, [Ei]: null });
    }
  }
}
var Xa = class extends g {
  constructor(e3 = new ka(), t2 = new ja({ color: Math.random() * 16777215 })) {
    super(e3, t2), this.isLineSegments2 = true, this.type = `LineSegments2`;
  }
  computeLineDistances() {
    let e3 = this.geometry, t2 = e3.attributes.instanceStart, n2 = e3.attributes.instanceEnd, r2 = new Float32Array(2 * t2.count);
    for (let e4 = 0, i3 = 0, a2 = t2.count; e4 < a2; e4++, i3 += 2) Na.fromBufferAttribute(t2, e4), Pa.fromBufferAttribute(n2, e4), r2[i3] = i3 === 0 ? 0 : r2[i3 - 1], r2[i3 + 1] = r2[i3] + Na.distanceTo(Pa);
    let i2 = new ne(r2, 2, 1);
    return e3.setAttribute(`instanceDistanceStart`, new U(i2, 1, 0)), e3.setAttribute(`instanceDistanceEnd`, new U(i2, 1, 1)), this;
  }
  raycast(e3, t2) {
    let n2 = this.material.worldUnits, r2 = e3.camera;
    r2 === null && !n2 && console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);
    let i2 = e3.params.Line2 === void 0 ? 0 : e3.params.Line2.threshold || 0;
    Ga = e3.ray;
    let a2 = this.matrixWorld, o2 = this.geometry, s2 = this.material;
    Ka = s2.linewidth + i2, o2.boundingSphere === null && o2.computeBoundingSphere(), Ua.copy(o2.boundingSphere).applyMatrix4(a2);
    let c2;
    if (c2 = n2 ? Ka * 0.5 : qa(r2, Math.max(r2.near, Ua.distanceToPoint(Ga.origin)), s2.resolution), Ua.radius += c2, Ga.intersectsSphere(Ua) === false) return;
    o2.boundingBox === null && o2.computeBoundingBox(), Ha.copy(o2.boundingBox).applyMatrix4(a2);
    let l2;
    l2 = n2 ? Ka * 0.5 : qa(r2, Math.max(r2.near, Ha.distanceToPoint(Ga.origin)), s2.resolution), Ha.expandByScalar(l2), Ga.intersectsBox(Ha) !== false && (n2 ? Ja(this, t2) : Ya(this, r2, t2));
  }
  onBeforeRender(e3) {
    let t2 = this.material.uniforms;
    t2 && t2.resolution && (e3.getViewport(Ma), this.material.uniforms.resolution.value.set(Ma.z, Ma.w));
  }
}, Za = class extends Xa {
  constructor(e3 = new Aa(), t2 = new ja({ color: Math.random() * 16777215 })) {
    super(e3, t2), this.isLine2 = true, this.type = `Line2`;
  }
}, Qa = J.forwardRef(function({ points: e3, color: t2 = 16777215, vertexColors: n2, linewidth: r2, lineWidth: i2, segments: o2, dashed: s2, ...c2 }, l2) {
  var u2;
  let d2 = En((e4) => e4.size), f2 = J.useMemo(() => o2 ? new Xa() : new Za(), [o2]), [p2] = J.useState(() => new ja()), m2 = (n2 == null || (u2 = n2[0]) == null ? void 0 : u2.length) === 4 ? 4 : 3, h2 = J.useMemo(() => {
    let r3 = o2 ? new ka() : new Aa(), i3 = e3.map((e4) => {
      let t3 = Array.isArray(e4);
      return e4 instanceof G || e4 instanceof N ? [e4.x, e4.y, e4.z] : e4 instanceof a ? [e4.x, e4.y, 0] : t3 && e4.length === 3 ? [e4[0], e4[1], e4[2]] : t3 && e4.length === 2 ? [e4[0], e4[1], 0] : e4;
    });
    if (r3.setPositions(i3.flat()), n2) {
      t2 = 16777215;
      let e4 = n2.map((e5) => e5 instanceof z ? e5.toArray() : e5);
      r3.setColors(e4.flat(), m2);
    }
    return r3;
  }, [e3, o2, n2, m2]);
  return J.useLayoutEffect(() => {
    f2.computeLineDistances();
  }, [e3, f2]), J.useLayoutEffect(() => {
    s2 ? p2.defines.USE_DASH = `` : delete p2.defines.USE_DASH, p2.needsUpdate = true;
  }, [s2, p2]), J.useEffect(() => () => {
    h2.dispose(), p2.dispose();
  }, [h2]), J.createElement(`primitive`, li({ object: f2, ref: l2 }, c2), J.createElement(`primitive`, { object: h2, attach: `geometry` }), J.createElement(`primitive`, li({ object: p2, attach: `material`, color: t2, vertexColors: !!n2, resolution: [d2.width, d2.height], linewidth: r2 ?? i2 ?? 1, dashed: s2, transparent: m2 === 4 }, c2)));
});
function $a() {
  var e3 = /* @__PURE__ */ Object.create(null);
  function t2(n3, i2) {
    var a2 = n3.id, o2 = n3.name, s2 = n3.dependencies;
    s2 === void 0 && (s2 = []);
    var c2 = n3.init;
    c2 === void 0 && (c2 = function() {
    });
    var l2 = n3.getTransferables;
    if (l2 === void 0 && (l2 = null), !e3[a2]) try {
      s2 = s2.map(function(n4) {
        return n4 && n4.isWorkerModule && (t2(n4, function(e4) {
          if (e4 instanceof Error) throw e4;
        }), n4 = e3[n4.id].value), n4;
      }), c2 = r2(`<` + o2 + `>.init`, c2), l2 && (l2 = r2(`<` + o2 + `>.getTransferables`, l2));
      var u2 = null;
      typeof c2 == `function` ? u2 = c2.apply(void 0, s2) : console.error(`worker module init function failed to rehydrate`), e3[a2] = { id: a2, value: u2, getTransferables: l2 }, i2(u2);
    } catch (e4) {
      e4 && e4.noLog || console.error(e4), i2(e4);
    }
  }
  function n2(t3, n3) {
    var r3, i2 = t3.id, a2 = t3.args;
    e3[i2] && typeof e3[i2].value == `function` || n3(Error(`Worker module ` + i2 + `: not found or its 'init' did not return a function`));
    try {
      var o2 = (r3 = e3[i2]).value.apply(r3, a2);
      o2 && typeof o2.then == `function` ? o2.then(s2, function(e4) {
        return n3(e4 instanceof Error ? e4 : Error(`` + e4));
      }) : s2(o2);
    } catch (e4) {
      n3(e4);
    }
    function s2(t4) {
      try {
        var r4 = e3[i2].getTransferables && e3[i2].getTransferables(t4);
        r4 && Array.isArray(r4) && r4.length || (r4 = void 0), n3(t4, r4);
      } catch (e4) {
        console.error(e4), n3(e4);
      }
    }
  }
  function r2(e4, t3) {
    var n3 = void 0;
    self.troikaDefine = function(e5) {
      return n3 = e5;
    };
    var r3 = URL.createObjectURL(new Blob([`/** ` + e4.replace(/\*/g, ``) + ` **/

troikaDefine(
` + t3 + `
)`], { type: `application/javascript` }));
    try {
      importScripts(r3);
    } catch (e5) {
      console.error(e5);
    }
    return URL.revokeObjectURL(r3), delete self.troikaDefine, n3;
  }
  self.addEventListener(`message`, function(e4) {
    var r3 = e4.data, i2 = r3.messageId, a2 = r3.action, o2 = r3.data;
    try {
      a2 === `registerModule` && t2(o2, function(e5) {
        e5 instanceof Error ? postMessage({ messageId: i2, success: false, error: e5.message }) : postMessage({ messageId: i2, success: true, result: { isCallable: typeof e5 == `function` } });
      }), a2 === `callModule` && n2(o2, function(e5, t3) {
        e5 instanceof Error ? postMessage({ messageId: i2, success: false, error: e5.message }) : postMessage({ messageId: i2, success: true, result: e5 }, t3 || void 0);
      });
    } catch (e5) {
      postMessage({ messageId: i2, success: false, error: e5.stack });
    }
  });
}
function eo(e3) {
  var t2 = function() {
    for (var e4 = [], n2 = arguments.length; n2--; ) e4[n2] = arguments[n2];
    return t2._getInitResult().then(function(t3) {
      if (typeof t3 == `function`) return t3.apply(void 0, e4);
      throw Error("Worker module function was called but `init` did not return a callable function");
    });
  };
  return t2._getInitResult = function() {
    var n2 = e3.dependencies, r2 = e3.init;
    n2 = Array.isArray(n2) ? n2.map(function(e4) {
      return e4 && (e4 = e4.onMainThread || e4, e4._getInitResult && (e4 = e4._getInitResult())), e4;
    }) : [];
    var i2 = Promise.all(n2).then(function(e4) {
      return r2.apply(null, e4);
    });
    return t2._getInitResult = function() {
      return i2;
    }, i2;
  }, t2;
}
var to = function() {
  var e3 = false;
  if (typeof window < `u` && window.document !== void 0) try {
    new Worker(URL.createObjectURL(new Blob([``], { type: `application/javascript` }))).terminate(), e3 = true;
  } catch (e4) {
    console.log(`Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [` + e4.message + `]`);
  }
  return to = function() {
    return e3;
  }, e3;
}, no = 0, ro = 0, io = false, ao = /* @__PURE__ */ Object.create(null), oo = /* @__PURE__ */ Object.create(null), so = /* @__PURE__ */ Object.create(null);
function co(e3) {
  if ((!e3 || typeof e3.init != `function`) && !io) throw Error("requires `options.init` function");
  var t2 = e3.dependencies, n2 = e3.init, r2 = e3.getTransferables, i2 = e3.workerId, a2 = eo(e3);
  i2 ?? (i2 = `#default`);
  var o2 = `workerModule` + ++no, s2 = e3.name || o2, c2 = null;
  t2 && (t2 = t2.map(function(e4) {
    return typeof e4 == `function` && !e4.workerModuleData && (io = true, e4 = co({ workerId: i2, name: `<` + s2 + `> function dependency: ` + e4.name, init: `function(){return (
` + uo(e4) + `
)}` }), io = false), e4 && e4.workerModuleData && (e4 = e4.workerModuleData), e4;
  }));
  function l2() {
    for (var e4 = [], t3 = arguments.length; t3--; ) e4[t3] = arguments[t3];
    if (!to()) return a2.apply(void 0, e4);
    if (!c2) {
      c2 = po(i2, `registerModule`, l2.workerModuleData);
      var n3 = function() {
        c2 = null, oo[i2].delete(n3);
      };
      (oo[i2] || (oo[i2] = /* @__PURE__ */ new Set())).add(n3);
    }
    return c2.then(function(t4) {
      if (t4.isCallable) return po(i2, `callModule`, { id: o2, args: e4 });
      throw Error("Worker module function was called but `init` did not return a callable function");
    });
  }
  return l2.workerModuleData = { isWorkerModule: true, id: o2, name: s2, dependencies: t2, init: uo(n2), getTransferables: r2 && uo(r2) }, l2.onMainThread = a2, l2;
}
function lo(e3) {
  oo[e3] && oo[e3].forEach(function(e4) {
    e4();
  }), ao[e3] && (ao[e3].terminate(), delete ao[e3]);
}
function uo(e3) {
  var t2 = e3.toString();
  return !/^function/.test(t2) && /^\w+\s*\(/.test(t2) && (t2 = `function ` + t2), t2;
}
function fo(e3) {
  var t2 = ao[e3];
  if (!t2) {
    var n2 = uo($a);
    t2 = ao[e3] = new Worker(URL.createObjectURL(new Blob([`/** Worker Module Bootstrap: ` + e3.replace(/\*/g, ``) + ` **/

;(` + n2 + `)()`], { type: `application/javascript` }))), t2.onmessage = function(e4) {
      var t3 = e4.data, n3 = t3.messageId, r2 = so[n3];
      if (!r2) throw Error(`WorkerModule response with empty or unknown messageId`);
      delete so[n3], r2(t3);
    };
  }
  return t2;
}
function po(e3, t2, n2) {
  return new Promise(function(r2, i2) {
    var a2 = ++ro;
    so[a2] = function(e4) {
      e4.success ? r2(e4.result) : i2(Error(`Error in worker ` + t2 + ` call: ` + e4.error));
    }, fo(e3).postMessage({ messageId: a2, action: t2, data: n2 });
  });
}
function mo() {
  return (function(e3) {
    function t2(e4, t3, n3, r3, i3, a3, o3, s3) {
      var c3 = 1 - o3;
      s3.x = c3 * c3 * e4 + 2 * c3 * o3 * n3 + o3 * o3 * i3, s3.y = c3 * c3 * t3 + 2 * c3 * o3 * r3 + o3 * o3 * a3;
    }
    function n2(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3) {
      var u3 = 1 - c3;
      l3.x = u3 * u3 * u3 * e4 + 3 * u3 * u3 * c3 * n3 + 3 * u3 * c3 * c3 * i3 + c3 * c3 * c3 * o3, l3.y = u3 * u3 * u3 * t3 + 3 * u3 * u3 * c3 * r3 + 3 * u3 * c3 * c3 * a3 + c3 * c3 * c3 * s3;
    }
    function r2(e4, t3) {
      for (var n3 = /([MLQCZ])([^MLQCZ]*)/g, r3, i3, a3, o3, s3; r3 = n3.exec(e4); ) {
        var c3 = r3[2].replace(/^\s*|\s*$/g, ``).split(/[,\s]+/).map(function(e5) {
          return parseFloat(e5);
        });
        switch (r3[1]) {
          case `M`:
            o3 = i3 = c3[0], s3 = a3 = c3[1];
            break;
          case `L`:
            (c3[0] !== o3 || c3[1] !== s3) && t3(`L`, o3, s3, o3 = c3[0], s3 = c3[1]);
            break;
          case `Q`:
            t3(`Q`, o3, s3, o3 = c3[2], s3 = c3[3], c3[0], c3[1]);
            break;
          case `C`:
            t3(`C`, o3, s3, o3 = c3[4], s3 = c3[5], c3[0], c3[1], c3[2], c3[3]);
            break;
          case `Z`:
            (o3 !== i3 || s3 !== a3) && t3(`L`, o3, s3, i3, a3);
        }
      }
    }
    function i2(e4, i3, a3) {
      a3 === void 0 && (a3 = 16);
      var o3 = { x: 0, y: 0 };
      r2(e4, function(e5, r3, s3, c3, l3, u3, d3, f3, p3) {
        switch (e5) {
          case `L`:
            i3(r3, s3, c3, l3);
            break;
          case `Q`:
            for (var m3 = r3, h3 = s3, g3 = 1; g3 < a3; g3++) t2(r3, s3, u3, d3, c3, l3, g3 / (a3 - 1), o3), i3(m3, h3, o3.x, o3.y), m3 = o3.x, h3 = o3.y;
            break;
          case `C`:
            for (var _3 = r3, v3 = s3, y3 = 1; y3 < a3; y3++) n2(r3, s3, u3, d3, f3, p3, c3, l3, y3 / (a3 - 1), o3), i3(_3, v3, o3.x, o3.y), _3 = o3.x, v3 = o3.y;
        }
      });
    }
    var a2 = `precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}`, o2 = /* @__PURE__ */ new WeakMap(), s2 = { premultipliedAlpha: false, preserveDrawingBuffer: true, antialias: false, depth: false };
    function c2(e4, t3) {
      var n3 = e4.getContext ? e4.getContext(`webgl`, s2) : e4, r3 = o2.get(n3);
      if (!r3) {
        let e5 = function(e6) {
          var t5 = a3[e6];
          if (!t5 && (t5 = a3[e6] = n3.getExtension(e6), !t5)) throw Error(e6 + ` not supported`);
          return t5;
        }, t4 = function(e6, t5) {
          var r4 = n3.createShader(t5);
          return n3.shaderSource(r4, e6), n3.compileShader(r4), r4;
        }, s3 = function(r4, a4, o3, s4) {
          if (!c3[r4]) {
            var l4 = {}, u4 = {}, d4 = n3.createProgram();
            n3.attachShader(d4, t4(a4, n3.VERTEX_SHADER)), n3.attachShader(d4, t4(o3, n3.FRAGMENT_SHADER)), n3.linkProgram(d4), c3[r4] = { program: d4, transaction: function(t5) {
              n3.useProgram(d4), t5({ setUniform: function(e6, t6) {
                for (var r5 = [], i4 = arguments.length - 2; i4-- > 0; ) r5[i4] = arguments[i4 + 2];
                var a5 = u4[t6] || (u4[t6] = n3.getUniformLocation(d4, t6));
                n3[`uniform` + e6].apply(n3, [a5].concat(r5));
              }, setAttribute: function(t6, r5, a5, o4, s5) {
                var c4 = l4[t6];
                c4 || (c4 = l4[t6] = { buf: n3.createBuffer(), loc: n3.getAttribLocation(d4, t6), data: null }), n3.bindBuffer(n3.ARRAY_BUFFER, c4.buf), n3.vertexAttribPointer(c4.loc, r5, n3.FLOAT, false, 0, 0), n3.enableVertexAttribArray(c4.loc), i3 ? n3.vertexAttribDivisor(c4.loc, o4) : e5(`ANGLE_instanced_arrays`).vertexAttribDivisorANGLE(c4.loc, o4), s5 !== c4.data && (n3.bufferData(n3.ARRAY_BUFFER, s5, a5), c4.data = s5);
              } });
            } };
          }
          c3[r4].transaction(s4);
        }, f3 = function(e6, t5) {
          u3++;
          try {
            n3.activeTexture(n3.TEXTURE0 + u3);
            var r4 = l3[e6];
            r4 || (r4 = l3[e6] = n3.createTexture(), n3.bindTexture(n3.TEXTURE_2D, r4), n3.texParameteri(n3.TEXTURE_2D, n3.TEXTURE_MIN_FILTER, n3.NEAREST), n3.texParameteri(n3.TEXTURE_2D, n3.TEXTURE_MAG_FILTER, n3.NEAREST)), n3.bindTexture(n3.TEXTURE_2D, r4), t5(r4, u3);
          } finally {
            u3--;
          }
        }, p3 = function(e6, t5, r4) {
          var i4 = n3.createFramebuffer();
          d3.push(i4), n3.bindFramebuffer(n3.FRAMEBUFFER, i4), n3.activeTexture(n3.TEXTURE0 + t5), n3.bindTexture(n3.TEXTURE_2D, e6), n3.framebufferTexture2D(n3.FRAMEBUFFER, n3.COLOR_ATTACHMENT0, n3.TEXTURE_2D, e6, 0);
          try {
            r4(i4);
          } finally {
            n3.deleteFramebuffer(i4), n3.bindFramebuffer(n3.FRAMEBUFFER, d3[--d3.length - 1] || null);
          }
        }, m3 = function() {
          a3 = {}, c3 = {}, l3 = {}, u3 = -1, d3.length = 0;
        };
        var i3 = typeof WebGL2RenderingContext < `u` && n3 instanceof WebGL2RenderingContext, a3 = {}, c3 = {}, l3 = {}, u3 = -1, d3 = [];
        n3.canvas.addEventListener(`webglcontextlost`, function(e6) {
          m3(), e6.preventDefault();
        }, false);
        o2.set(n3, r3 = { gl: n3, isWebGL2: i3, getExtension: e5, withProgram: s3, withTexture: f3, withTextureFramebuffer: p3, handleContextLoss: m3 });
      }
      t3(r3);
    }
    function l2(e4, t3, n3, r3, i3, o3, s3, l3) {
      s3 === void 0 && (s3 = 15), l3 === void 0 && (l3 = null), c2(e4, function(e5) {
        var c3 = e5.gl, u3 = e5.withProgram, d3 = e5.withTexture;
        d3(`copy`, function(e6, d4) {
          c3.texImage2D(c3.TEXTURE_2D, 0, c3.RGBA, i3, o3, 0, c3.RGBA, c3.UNSIGNED_BYTE, t3), u3(`copy`, a2, `precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}`, function(e7) {
            var t4 = e7.setUniform, a3 = e7.setAttribute;
            a3(`aUV`, 2, c3.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), t4(`1i`, `image`, d4), c3.bindFramebuffer(c3.FRAMEBUFFER, l3 || null), c3.disable(c3.BLEND), c3.colorMask(s3 & 8, s3 & 4, s3 & 2, s3 & 1), c3.viewport(n3, r3, i3, o3), c3.scissor(n3, r3, i3, o3), c3.drawArrays(c3.TRIANGLES, 0, 3);
          });
        });
      });
    }
    function u2(e4, t3, n3) {
      var r3 = e4.width, i3 = e4.height;
      c2(e4, function(a3) {
        var o3 = a3.gl, s3 = new Uint8Array(r3 * i3 * 4);
        o3.readPixels(0, 0, r3, i3, o3.RGBA, o3.UNSIGNED_BYTE, s3), e4.width = t3, e4.height = n3, l2(o3, s3, 0, 0, r3, i3);
      });
    }
    var d2 = Object.freeze({ __proto__: null, withWebGLContext: c2, renderImageData: l2, resizeWebGLCanvasWithoutClearing: u2 });
    function f2(e4, t3, n3, r3, a3, o3) {
      o3 === void 0 && (o3 = 1);
      var s3 = new Uint8Array(e4 * t3), c3 = r3[2] - r3[0], l3 = r3[3] - r3[1], u3 = [];
      i2(n3, function(e5, t4, n4, r4) {
        u3.push({ x1: e5, y1: t4, x2: n4, y2: r4, minX: Math.min(e5, n4), minY: Math.min(t4, r4), maxX: Math.max(e5, n4), maxY: Math.max(t4, r4) });
      }), u3.sort(function(e5, t4) {
        return e5.maxX - t4.maxX;
      });
      for (var d3 = 0; d3 < e4; d3++) for (var f3 = 0; f3 < t3; f3++) {
        var p3 = g3(r3[0] + c3 * (d3 + 0.5) / e4, r3[1] + l3 * (f3 + 0.5) / t3), m3 = (1 - Math.abs(p3) / a3) ** o3 / 2;
        p3 < 0 && (m3 = 1 - m3), m3 = Math.max(0, Math.min(255, Math.round(m3 * 255))), s3[f3 * e4 + d3] = m3;
      }
      return s3;
      function g3(e5, t4) {
        for (var n4 = 1 / 0, r4 = 1 / 0, i3 = u3.length; i3--; ) {
          var a4 = u3[i3];
          if (a4.maxX + r4 <= e5) break;
          if (e5 + r4 > a4.minX && t4 - r4 < a4.maxY && t4 + r4 > a4.minY) {
            var o4 = h2(e5, t4, a4.x1, a4.y1, a4.x2, a4.y2);
            o4 < n4 && (n4 = o4, r4 = Math.sqrt(n4));
          }
        }
        return _3(e5, t4) && (r4 = -r4), r4;
      }
      function _3(e5, t4) {
        for (var n4 = 0, r4 = u3.length; r4--; ) {
          var i3 = u3[r4];
          if (i3.maxX <= e5) break;
          i3.y1 > t4 != i3.y2 > t4 && e5 < (i3.x2 - i3.x1) * (t4 - i3.y1) / (i3.y2 - i3.y1) + i3.x1 && (n4 += i3.y1 < i3.y2 ? 1 : -1);
        }
        return n4 !== 0;
      }
    }
    function p2(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3) {
      a3 === void 0 && (a3 = 1), s3 === void 0 && (s3 = 0), c3 === void 0 && (c3 = 0), l3 === void 0 && (l3 = 0), m2(e4, t3, n3, r3, i3, a3, o3, null, s3, c3, l3);
    }
    function m2(e4, t3, n3, r3, i3, a3, o3, s3, c3, u3, d3) {
      a3 === void 0 && (a3 = 1), c3 === void 0 && (c3 = 0), u3 === void 0 && (u3 = 0), d3 === void 0 && (d3 = 0);
      for (var p3 = f2(e4, t3, n3, r3, i3, a3), m3 = new Uint8Array(p3.length * 4), h3 = 0; h3 < p3.length; h3++) m3[h3 * 4 + d3] = p3[h3];
      l2(o3, m3, c3, u3, e4, t3, 1 << 3 - d3, s3);
    }
    function h2(e4, t3, n3, r3, i3, a3) {
      var o3 = i3 - n3, s3 = a3 - r3, c3 = o3 * o3 + s3 * s3, l3 = c3 ? Math.max(0, Math.min(1, ((e4 - n3) * o3 + (t3 - r3) * s3) / c3)) : 0, u3 = e4 - (n3 + l3 * o3), d3 = t3 - (r3 + l3 * s3);
      return u3 * u3 + d3 * d3;
    }
    var g2 = Object.freeze({ __proto__: null, generate: f2, generateIntoCanvas: p2, generateIntoFramebuffer: m2 }), _2 = `precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}`, v2 = `precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}`, y2 = `precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}`, b2 = new Float32Array([0, 0, 2, 0, 0, 2]), x2 = null, S2 = false, C2 = {}, w2 = /* @__PURE__ */ new WeakMap();
    function T2(e4) {
      if (!S2 && !k2(e4)) throw Error(`WebGL generation not supported`);
    }
    function E2(e4, t3, n3, r3, i3, a3, o3) {
      if (a3 === void 0 && (a3 = 1), o3 === void 0 && (o3 = null), !o3 && (o3 = x2, !o3)) {
        var s3 = typeof OffscreenCanvas == `function` ? new OffscreenCanvas(1, 1) : typeof document < `u` ? document.createElement(`canvas`) : null;
        if (!s3) throw Error(`OffscreenCanvas or DOM canvas not supported`);
        o3 = x2 = s3.getContext(`webgl`, { depth: false });
      }
      T2(o3);
      var l3 = new Uint8Array(e4 * t3 * 4);
      c2(o3, function(o4) {
        var s4 = o4.gl, c3 = o4.withTexture, u4 = o4.withTextureFramebuffer;
        c3(`readable`, function(o5, c4) {
          s4.texImage2D(s4.TEXTURE_2D, 0, s4.RGBA, e4, t3, 0, s4.RGBA, s4.UNSIGNED_BYTE, null), u4(o5, c4, function(o6) {
            O2(e4, t3, n3, r3, i3, a3, s4, o6, 0, 0, 0), s4.readPixels(0, 0, e4, t3, s4.RGBA, s4.UNSIGNED_BYTE, l3);
          });
        });
      });
      for (var u3 = new Uint8Array(e4 * t3), d3 = 0, f3 = 0; d3 < l3.length; d3 += 4) u3[f3++] = l3[d3];
      return u3;
    }
    function D2(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3) {
      a3 === void 0 && (a3 = 1), s3 === void 0 && (s3 = 0), c3 === void 0 && (c3 = 0), l3 === void 0 && (l3 = 0), O2(e4, t3, n3, r3, i3, a3, o3, null, s3, c3, l3);
    }
    function O2(e4, t3, n3, r3, o3, s3, l3, u3, d3, f3, p3) {
      s3 === void 0 && (s3 = 1), d3 === void 0 && (d3 = 0), f3 === void 0 && (f3 = 0), p3 === void 0 && (p3 = 0), T2(l3);
      var m3 = [];
      i2(n3, function(e5, t4, n4, r4) {
        m3.push(e5, t4, n4, r4);
      }), m3 = new Float32Array(m3), c2(l3, function(n4) {
        var i3 = n4.gl, c3 = n4.isWebGL2, l4 = n4.getExtension, h3 = n4.withProgram, g3 = n4.withTexture, x3 = n4.withTextureFramebuffer, S3 = n4.handleContextLoss;
        if (g3(`rawDistances`, function(n5, g4) {
          (e4 !== n5._lastWidth || t3 !== n5._lastHeight) && i3.texImage2D(i3.TEXTURE_2D, 0, i3.RGBA, n5._lastWidth = e4, n5._lastHeight = t3, 0, i3.RGBA, i3.UNSIGNED_BYTE, null), h3(`main`, _2, v2, function(a3) {
            var u4 = a3.setAttribute, d4 = a3.setUniform, f4 = !c3 && l4(`ANGLE_instanced_arrays`), p4 = !c3 && l4(`EXT_blend_minmax`);
            u4(`aUV`, 2, i3.STATIC_DRAW, 0, b2), u4(`aLineSegment`, 4, i3.DYNAMIC_DRAW, 1, m3), d4.apply(void 0, [`4f`, `uGlyphBounds`].concat(r3)), d4(`1f`, `uMaxDistance`, o3), d4(`1f`, `uExponent`, s3), x3(n5, g4, function(n6) {
              i3.enable(i3.BLEND), i3.colorMask(true, true, true, true), i3.viewport(0, 0, e4, t3), i3.scissor(0, 0, e4, t3), i3.blendFunc(i3.ONE, i3.ONE), i3.blendEquationSeparate(i3.FUNC_ADD, c3 ? i3.MAX : p4.MAX_EXT), i3.clear(i3.COLOR_BUFFER_BIT), c3 ? i3.drawArraysInstanced(i3.TRIANGLES, 0, 3, m3.length / 4) : f4.drawArraysInstancedANGLE(i3.TRIANGLES, 0, 3, m3.length / 4);
            });
          }), h3(`post`, a2, y2, function(n6) {
            n6.setAttribute(`aUV`, 2, i3.STATIC_DRAW, 0, b2), n6.setUniform(`1i`, `tex`, g4), i3.bindFramebuffer(i3.FRAMEBUFFER, u3), i3.disable(i3.BLEND), i3.colorMask(p3 === 0, p3 === 1, p3 === 2, p3 === 3), i3.viewport(d3, f3, e4, t3), i3.scissor(d3, f3, e4, t3), i3.drawArrays(i3.TRIANGLES, 0, 3);
          });
        }), i3.isContextLost()) throw S3(), Error(`webgl context lost`);
      });
    }
    function k2(e4) {
      var t3 = !e4 || e4 === x2 ? C2 : e4.canvas || e4, n3 = w2.get(t3);
      if (n3 === void 0) {
        S2 = true;
        var r3 = null;
        try {
          var i3 = [97, 106, 97, 61, 99, 137, 118, 80, 80, 118, 137, 99, 61, 97, 106, 97], a3 = E2(4, 4, `M8,8L16,8L24,24L16,24Z`, [0, 0, 32, 32], 24, 1, e4);
          n3 = a3 && i3.length === a3.length && a3.every(function(e5, t4) {
            return e5 === i3[t4];
          }), n3 || (r3 = `bad trial run results`, console.info(i3, a3));
        } catch (e5) {
          n3 = false, r3 = e5.message;
        }
        r3 && console.warn(`WebGL SDF generation not supported:`, r3), S2 = false, w2.set(t3, n3);
      }
      return n3;
    }
    var A2 = Object.freeze({ __proto__: null, generate: E2, generateIntoCanvas: D2, generateIntoFramebuffer: O2, isSupported: k2 });
    function j2(e4, t3, n3, r3, i3, a3) {
      i3 === void 0 && (i3 = Math.max(r3[2] - r3[0], r3[3] - r3[1]) / 2), a3 === void 0 && (a3 = 1);
      try {
        return E2.apply(A2, arguments);
      } catch (e5) {
        return console.info(`WebGL SDF generation failed, falling back to JS`, e5), f2.apply(g2, arguments);
      }
    }
    function M2(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3) {
      i3 === void 0 && (i3 = Math.max(r3[2] - r3[0], r3[3] - r3[1]) / 2), a3 === void 0 && (a3 = 1), s3 === void 0 && (s3 = 0), c3 === void 0 && (c3 = 0), l3 === void 0 && (l3 = 0);
      try {
        return D2.apply(A2, arguments);
      } catch (e5) {
        return console.info(`WebGL SDF generation failed, falling back to JS`, e5), p2.apply(g2, arguments);
      }
    }
    return e3.forEachPathCommand = r2, e3.generate = j2, e3.generateIntoCanvas = M2, e3.javascript = g2, e3.pathToLineSegments = i2, e3.webgl = A2, e3.webglUtils = d2, Object.defineProperty(e3, "__esModule", { value: true }), e3;
  })({});
}
function ho() {
  return (function(e3) {
    var t2 = { R: `13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73`, EN: `1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9`, ES: `17,2,6dp+1,f+1,av,16vr,mx+1,4o,2`, ET: `z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj`, AN: `16o+5,2j+9,2+1,35,ed,1ff2+9,87+u`, CS: `18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b`, B: `a,3,f+2,2v,690`, S: `9,2,k`, WS: `c,k,4f4,1vk+a,u,1j,335`, ON: `x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i`, BN: `0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1`, NSM: `lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n`, AL: `16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d`, LRO: `6ct`, RLO: `6cu`, LRE: `6cq`, RLE: `6cr`, PDF: `6cs`, LRI: `6ee`, RLI: `6ef`, FSI: `6eg`, PDI: `6eh` }, n2 = {}, r2 = {};
    n2.L = 1, r2[1] = `L`, Object.keys(t2).forEach(function(e4, t3) {
      n2[e4] = 1 << t3 + 1, r2[n2[e4]] = e4;
    }), Object.freeze(n2);
    var i2 = n2.LRI | n2.RLI | n2.FSI, a2 = n2.L | n2.R | n2.AL, o2 = n2.B | n2.S | n2.WS | n2.ON | n2.FSI | n2.LRI | n2.RLI | n2.PDI, s2 = n2.BN | n2.RLE | n2.LRE | n2.RLO | n2.LRO | n2.PDF, c2 = n2.S | n2.WS | n2.B | i2 | n2.PDI | s2, l2 = null;
    function u2() {
      if (!l2) {
        l2 = /* @__PURE__ */ new Map();
        var e4 = function(e5) {
          if (t2.hasOwnProperty(e5)) {
            var r4 = 0;
            t2[e5].split(`,`).forEach(function(t3) {
              var i3 = t3.split(`+`), a3 = i3[0], o3 = i3[1];
              a3 = parseInt(a3, 36), o3 = o3 ? parseInt(o3, 36) : 0, l2.set(r4 += a3, n2[e5]);
              for (var s3 = 0; s3 < o3; s3++) l2.set(++r4, n2[e5]);
            });
          }
        };
        for (var r3 in t2) e4(r3);
      }
    }
    function d2(e4) {
      return u2(), l2.get(e4.codePointAt(0)) || n2.L;
    }
    function f2(e4) {
      return r2[d2(e4)];
    }
    var p2 = { pairs: `14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1`, canonical: `6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye` };
    function m2(e4, t3) {
      var n3 = 0, r3 = /* @__PURE__ */ new Map(), i3 = t3 && /* @__PURE__ */ new Map(), a3;
      return e4.split(`,`).forEach(function e5(o3) {
        if (o3.indexOf(`+`) !== -1) for (var s3 = +o3; s3--; ) e5(a3);
        else {
          a3 = o3;
          var c3 = o3.split(`>`), l3 = c3[0], u3 = c3[1];
          l3 = String.fromCodePoint(n3 += parseInt(l3, 36)), u3 = String.fromCodePoint(n3 += parseInt(u3, 36)), r3.set(l3, u3), t3 && i3.set(u3, l3);
        }
      }), { map: r3, reverseMap: i3 };
    }
    var h2, g2, _2;
    function v2() {
      if (!h2) {
        var e4 = m2(p2.pairs, true), t3 = e4.map, n3 = e4.reverseMap;
        h2 = t3, g2 = n3, _2 = m2(p2.canonical, false).map;
      }
    }
    function y2(e4) {
      return v2(), h2.get(e4) || null;
    }
    function b2(e4) {
      return v2(), g2.get(e4) || null;
    }
    function x2(e4) {
      return v2(), _2.get(e4) || null;
    }
    var S2 = n2.L, C2 = n2.R, w2 = n2.EN, T2 = n2.ES, E2 = n2.ET, D2 = n2.AN, O2 = n2.CS, k2 = n2.B, A2 = n2.S, j2 = n2.ON, M2 = n2.BN, N2 = n2.NSM, P2 = n2.AL, F2 = n2.LRO, I2 = n2.RLO, ee2 = n2.LRE, L2 = n2.RLE, R2 = n2.PDF, z2 = n2.LRI, B2 = n2.RLI, te2 = n2.FSI, V2 = n2.PDI;
    function ne2(e4, t3) {
      for (var n3 = 125, r3 = new Uint32Array(e4.length), l3 = 0; l3 < e4.length; l3++) r3[l3] = d2(e4[l3]);
      var u3 = /* @__PURE__ */ new Map();
      function f3(e5, t4) {
        var n4 = r3[e5];
        r3[e5] = t4, u3.set(n4, u3.get(n4) - 1), n4 & o2 && u3.set(o2, u3.get(o2) - 1), u3.set(t4, (u3.get(t4) || 0) + 1), t4 & o2 && u3.set(o2, (u3.get(o2) || 0) + 1);
      }
      for (var p3 = new Uint8Array(e4.length), m3 = /* @__PURE__ */ new Map(), h3 = [], g3 = null, _3 = 0; _3 < e4.length; _3++) g3 || h3.push(g3 = { start: _3, end: e4.length - 1, level: t3 === `rtl` ? 1 : t3 === `ltr` ? 0 : Kt2(_3, false) }), r3[_3] & k2 && (g3.end = _3, g3 = null);
      for (var v3 = L2 | ee2 | I2 | F2 | i2 | V2 | R2 | k2, ne3 = function(e5) {
        return e5 + (e5 & 1 ? 1 : 2);
      }, H3 = function(e5) {
        return e5 + (e5 & 1 ? 2 : 1);
      }, re3 = 0; re3 < h3.length; re3++) {
        g3 = h3[re3];
        var ie3 = [{ _level: g3.level, _override: 0, _isolate: 0 }], U3 = void 0, ae3 = 0, oe3 = 0, se3 = 0;
        u3.clear();
        for (var ce3 = g3.start; ce3 <= g3.end; ce3++) {
          var le2 = r3[ce3];
          if (U3 = ie3[ie3.length - 1], u3.set(le2, (u3.get(le2) || 0) + 1), le2 & o2 && u3.set(o2, (u3.get(o2) || 0) + 1), le2 & v3) {
            if (le2 & (L2 | ee2)) {
              p3[ce3] = U3._level;
              var ue2 = (le2 === L2 ? H3 : ne3)(U3._level);
              ue2 <= n3 && !ae3 && !oe3 ? ie3.push({ _level: ue2, _override: 0, _isolate: 0 }) : ae3 || oe3++;
            } else if (le2 & (I2 | F2)) {
              p3[ce3] = U3._level;
              var de2 = (le2 === I2 ? H3 : ne3)(U3._level);
              de2 <= n3 && !ae3 && !oe3 ? ie3.push({ _level: de2, _override: le2 & I2 ? C2 : S2, _isolate: 0 }) : ae3 || oe3++;
            } else if (le2 & i2) {
              le2 & te2 && (le2 = Kt2(ce3 + 1, true) === 1 ? B2 : z2), p3[ce3] = U3._level, U3._override && f3(ce3, U3._override);
              var fe2 = (le2 === B2 ? H3 : ne3)(U3._level);
              fe2 <= n3 && ae3 === 0 && oe3 === 0 ? (se3++, ie3.push({ _level: fe2, _override: 0, _isolate: 1, _isolInitIndex: ce3 })) : ae3++;
            } else if (le2 & V2) {
              if (ae3 > 0) ae3--;
              else if (se3 > 0) {
                for (oe3 = 0; !ie3[ie3.length - 1]._isolate; ) ie3.pop();
                var pe2 = ie3[ie3.length - 1]._isolInitIndex;
                pe2 != null && (m3.set(pe2, ce3), m3.set(ce3, pe2)), ie3.pop(), se3--;
              }
              U3 = ie3[ie3.length - 1], p3[ce3] = U3._level, U3._override && f3(ce3, U3._override);
            } else le2 & R2 ? (ae3 === 0 && (oe3 > 0 ? oe3-- : !U3._isolate && ie3.length > 1 && (ie3.pop(), U3 = ie3[ie3.length - 1])), p3[ce3] = U3._level) : le2 & k2 && (p3[ce3] = g3.level);
          } else p3[ce3] = U3._level, U3._override && le2 !== M2 && f3(ce3, U3._override);
        }
        for (var me2 = [], W2 = null, he2 = g3.start; he2 <= g3.end; he2++) {
          var ge2 = r3[he2];
          if (!(ge2 & s2)) {
            var _e2 = p3[he2], ve2 = ge2 & i2, ye2 = ge2 === V2;
            W2 && _e2 === W2._level ? (W2._end = he2, W2._endsWithIsolInit = ve2) : me2.push(W2 = { _start: he2, _end: he2, _level: _e2, _startsWithPDI: ye2, _endsWithIsolInit: ve2 });
          }
        }
        for (var be2 = [], xe2 = 0; xe2 < me2.length; xe2++) {
          var Se2 = me2[xe2];
          if (!Se2._startsWithPDI || Se2._startsWithPDI && !m3.has(Se2._start)) {
            for (var Ce2 = [W2 = Se2], we2 = void 0; W2 && W2._endsWithIsolInit && (we2 = m3.get(W2._end)) != null; ) for (var Te2 = xe2 + 1; Te2 < me2.length; Te2++) if (me2[Te2]._start === we2) {
              Ce2.push(W2 = me2[Te2]);
              break;
            }
            for (var Ee2 = [], De2 = 0; De2 < Ce2.length; De2++) for (var Oe2 = Ce2[De2], ke2 = Oe2._start; ke2 <= Oe2._end; ke2++) Ee2.push(ke2);
            for (var Ae2 = p3[Ee2[0]], je2 = g3.level, Me2 = Ee2[0] - 1; Me2 >= 0; Me2--) if (!(r3[Me2] & s2)) {
              je2 = p3[Me2];
              break;
            }
            var Ne2 = Ee2[Ee2.length - 1], G2 = p3[Ne2], K2 = g3.level;
            if (!(r3[Ne2] & i2)) {
              for (var Pe2 = Ne2 + 1; Pe2 <= g3.end; Pe2++) if (!(r3[Pe2] & s2)) {
                K2 = p3[Pe2];
                break;
              }
            }
            be2.push({ _seqIndices: Ee2, _sosType: Math.max(je2, Ae2) % 2 ? C2 : S2, _eosType: Math.max(K2, G2) % 2 ? C2 : S2 });
          }
        }
        for (var Fe2 = 0; Fe2 < be2.length; Fe2++) {
          var Ie2 = be2[Fe2], q2 = Ie2._seqIndices, Le2 = Ie2._sosType, Re2 = Ie2._eosType, ze2 = p3[q2[0]] & 1 ? C2 : S2;
          if (u3.get(N2)) for (var Be2 = 0; Be2 < q2.length; Be2++) {
            var Ve2 = q2[Be2];
            if (r3[Ve2] & N2) {
              for (var He2 = Le2, Ue2 = Be2 - 1; Ue2 >= 0; Ue2--) if (!(r3[q2[Ue2]] & s2)) {
                He2 = r3[q2[Ue2]];
                break;
              }
              f3(Ve2, He2 & (i2 | V2) ? j2 : He2);
            }
          }
          if (u3.get(w2)) for (var We2 = 0; We2 < q2.length; We2++) {
            var J2 = q2[We2];
            if (r3[J2] & w2) for (var Ge2 = We2 - 1; Ge2 >= -1; Ge2--) {
              var Ke2 = Ge2 === -1 ? Le2 : r3[q2[Ge2]];
              if (Ke2 & a2) {
                Ke2 === P2 && f3(J2, D2);
                break;
              }
            }
          }
          if (u3.get(P2)) for (var qe2 = 0; qe2 < q2.length; qe2++) {
            var Je2 = q2[qe2];
            r3[Je2] & P2 && f3(Je2, C2);
          }
          if (u3.get(T2) || u3.get(O2)) for (var Ye2 = 1; Ye2 < q2.length - 1; Ye2++) {
            var Xe2 = q2[Ye2];
            if (r3[Xe2] & (T2 | O2)) {
              for (var Ze2 = 0, Qe2 = 0, $e2 = Ye2 - 1; $e2 >= 0 && (Ze2 = r3[q2[$e2]], Ze2 & s2); $e2--) ;
              for (var et2 = Ye2 + 1; et2 < q2.length && (Qe2 = r3[q2[et2]], Qe2 & s2); et2++) ;
              Ze2 === Qe2 && (r3[Xe2] === T2 ? Ze2 === w2 : Ze2 & (w2 | D2)) && f3(Xe2, Ze2);
            }
          }
          if (u3.get(w2)) {
            for (var tt2 = 0; tt2 < q2.length; tt2++) if (r3[q2[tt2]] & w2) {
              for (var nt2 = tt2 - 1; nt2 >= 0 && r3[q2[nt2]] & (E2 | s2); nt2--) f3(q2[nt2], w2);
              for (tt2++; tt2 < q2.length && r3[q2[tt2]] & (E2 | s2 | w2); tt2++) r3[q2[tt2]] !== w2 && f3(q2[tt2], w2);
            }
          }
          if (u3.get(E2) || u3.get(T2) || u3.get(O2)) for (var rt2 = 0; rt2 < q2.length; rt2++) {
            var it2 = q2[rt2];
            if (r3[it2] & (E2 | T2 | O2)) {
              f3(it2, j2);
              for (var at2 = rt2 - 1; at2 >= 0 && r3[q2[at2]] & s2; at2--) f3(q2[at2], j2);
              for (var ot2 = rt2 + 1; ot2 < q2.length && r3[q2[ot2]] & s2; ot2++) f3(q2[ot2], j2);
            }
          }
          if (u3.get(w2)) for (var st2 = 0, ct2 = Le2; st2 < q2.length; st2++) {
            var lt2 = q2[st2], ut2 = r3[lt2];
            ut2 & w2 ? ct2 === S2 && f3(lt2, S2) : ut2 & a2 && (ct2 = ut2);
          }
          if (u3.get(o2)) {
            for (var dt2 = C2 | w2 | D2, ft2 = dt2 | S2, pt2 = [], mt2 = [], ht2 = 0; ht2 < q2.length; ht2++) if (r3[q2[ht2]] & o2) {
              var gt2 = e4[q2[ht2]], _t2 = void 0;
              if (y2(gt2) !== null) {
                if (mt2.length < 63) mt2.push({ char: gt2, seqIndex: ht2 });
                else break;
              } else if ((_t2 = b2(gt2)) !== null) for (var vt2 = mt2.length - 1; vt2 >= 0; vt2--) {
                var yt2 = mt2[vt2].char;
                if (yt2 === _t2 || yt2 === b2(x2(gt2)) || y2(x2(yt2)) === gt2) {
                  pt2.push([mt2[vt2].seqIndex, ht2]), mt2.length = vt2;
                  break;
                }
              }
            }
            pt2.sort(function(e5, t4) {
              return e5[0] - t4[0];
            });
            for (var bt2 = 0; bt2 < pt2.length; bt2++) {
              for (var xt2 = pt2[bt2], St2 = xt2[0], Ct2 = xt2[1], wt2 = false, Tt2 = 0, Et2 = St2 + 1; Et2 < Ct2; Et2++) {
                var Dt2 = q2[Et2];
                if (r3[Dt2] & ft2) {
                  wt2 = true;
                  var Ot2 = r3[Dt2] & dt2 ? C2 : S2;
                  if (Ot2 === ze2) {
                    Tt2 = Ot2;
                    break;
                  }
                }
              }
              if (wt2 && !Tt2) {
                Tt2 = Le2;
                for (var kt2 = St2 - 1; kt2 >= 0; kt2--) {
                  var At2 = q2[kt2];
                  if (r3[At2] & ft2) {
                    var jt2 = r3[At2] & dt2 ? C2 : S2;
                    Tt2 = jt2 === ze2 ? ze2 : jt2;
                    break;
                  }
                }
              }
              if (Tt2) {
                if (r3[q2[St2]] = r3[q2[Ct2]] = Tt2, Tt2 !== ze2) {
                  for (var Mt2 = St2 + 1; Mt2 < q2.length; Mt2++) if (!(r3[q2[Mt2]] & s2)) {
                    d2(e4[q2[Mt2]]) & N2 && (r3[q2[Mt2]] = Tt2);
                    break;
                  }
                }
                if (Tt2 !== ze2) {
                  for (var Nt2 = Ct2 + 1; Nt2 < q2.length; Nt2++) if (!(r3[q2[Nt2]] & s2)) {
                    d2(e4[q2[Nt2]]) & N2 && (r3[q2[Nt2]] = Tt2);
                    break;
                  }
                }
              }
            }
            for (var Pt2 = 0; Pt2 < q2.length; Pt2++) if (r3[q2[Pt2]] & o2) {
              for (var Ft2 = Pt2, It2 = Pt2, Lt2 = Le2, Rt2 = Pt2 - 1; Rt2 >= 0; Rt2--) if (r3[q2[Rt2]] & s2) Ft2 = Rt2;
              else {
                Lt2 = r3[q2[Rt2]] & dt2 ? C2 : S2;
                break;
              }
              for (var zt2 = Re2, Bt2 = Pt2 + 1; Bt2 < q2.length; Bt2++) if (r3[q2[Bt2]] & (o2 | s2)) It2 = Bt2;
              else {
                zt2 = r3[q2[Bt2]] & dt2 ? C2 : S2;
                break;
              }
              for (var Vt2 = Ft2; Vt2 <= It2; Vt2++) r3[q2[Vt2]] = Lt2 === zt2 ? Lt2 : ze2;
              Pt2 = It2;
            }
          }
        }
        for (var Ht2 = g3.start; Ht2 <= g3.end; Ht2++) {
          var Ut2 = p3[Ht2], Wt2 = r3[Ht2];
          if (Ut2 & 1 ? Wt2 & (S2 | w2 | D2) && p3[Ht2]++ : Wt2 & C2 ? p3[Ht2]++ : Wt2 & (D2 | w2) && (p3[Ht2] += 2), Wt2 & s2 && (p3[Ht2] = Ht2 === 0 ? g3.level : p3[Ht2 - 1]), Ht2 === g3.end || d2(e4[Ht2]) & (A2 | k2)) for (var Gt2 = Ht2; Gt2 >= 0 && d2(e4[Gt2]) & c2; Gt2--) p3[Gt2] = g3.level;
        }
      }
      return { levels: p3, paragraphs: h3 };
      function Kt2(t4, n4) {
        for (var a3 = t4; a3 < e4.length; a3++) {
          var o3 = r3[a3];
          if (o3 & (C2 | P2)) return 1;
          if (o3 & (k2 | S2) || n4 && o3 === V2) return 0;
          if (o3 & i2) {
            var s3 = qt2(a3);
            a3 = s3 === -1 ? e4.length : s3;
          }
        }
        return 0;
      }
      function qt2(t4) {
        for (var n4 = 1, a3 = t4 + 1; a3 < e4.length; a3++) {
          var o3 = r3[a3];
          if (o3 & k2) break;
          if (o3 & V2) {
            if (--n4 === 0) return a3;
          } else o3 & i2 && n4++;
        }
        return -1;
      }
    }
    var H2 = `14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1`, re2;
    function ie2() {
      if (!re2) {
        var e4 = m2(H2, true), t3 = e4.map;
        e4.reverseMap.forEach(function(e5, n3) {
          t3.set(n3, e5);
        }), re2 = t3;
      }
    }
    function U2(e4) {
      return ie2(), re2.get(e4) || null;
    }
    function ae2(e4, t3, n3, r3) {
      var i3 = e4.length;
      n3 = Math.max(0, n3 == null ? 0 : +n3), r3 = Math.min(i3 - 1, r3 == null ? i3 - 1 : +r3);
      for (var a3 = /* @__PURE__ */ new Map(), o3 = n3; o3 <= r3; o3++) if (t3[o3] & 1) {
        var s3 = U2(e4[o3]);
        s3 !== null && a3.set(o3, s3);
      }
      return a3;
    }
    function oe2(e4, t3, n3, r3) {
      var i3 = e4.length;
      n3 = Math.max(0, n3 == null ? 0 : +n3), r3 = Math.min(i3 - 1, r3 == null ? i3 - 1 : +r3);
      var a3 = [];
      return t3.paragraphs.forEach(function(i4) {
        var o3 = Math.max(n3, i4.start), s3 = Math.min(r3, i4.end);
        if (o3 < s3) {
          for (var l3 = t3.levels.slice(o3, s3 + 1), u3 = s3; u3 >= o3 && d2(e4[u3]) & c2; u3--) l3[u3] = i4.level;
          for (var f3 = i4.level, p3 = 1 / 0, m3 = 0; m3 < l3.length; m3++) {
            var h3 = l3[m3];
            h3 > f3 && (f3 = h3), h3 < p3 && (p3 = h3 | 1);
          }
          for (var g3 = f3; g3 >= p3; g3--) for (var _3 = 0; _3 < l3.length; _3++) if (l3[_3] >= g3) {
            for (var v3 = _3; _3 + 1 < l3.length && l3[_3 + 1] >= g3; ) _3++;
            _3 > v3 && a3.push([v3 + o3, _3 + o3]);
          }
        }
      }), a3;
    }
    function se2(e4, t3, n3, r3) {
      var i3 = ce2(e4, t3, n3, r3), a3 = [].concat(e4);
      return i3.forEach(function(n4, r4) {
        a3[r4] = (t3.levels[n4] & 1 ? U2(e4[n4]) : null) || e4[n4];
      }), a3.join(``);
    }
    function ce2(e4, t3, n3, r3) {
      for (var i3 = oe2(e4, t3, n3, r3), a3 = [], o3 = 0; o3 < e4.length; o3++) a3[o3] = o3;
      return i3.forEach(function(e5) {
        for (var t4 = e5[0], n4 = e5[1], r4 = a3.slice(t4, n4 + 1), i4 = r4.length; i4--; ) a3[n4 - i4] = r4[i4];
      }), a3;
    }
    return e3.closingToOpeningBracket = b2, e3.getBidiCharType = d2, e3.getBidiCharTypeName = f2, e3.getCanonicalBracket = x2, e3.getEmbeddingLevels = ne2, e3.getMirroredCharacter = U2, e3.getMirroredCharactersMap = ae2, e3.getReorderSegments = oe2, e3.getReorderedIndices = ce2, e3.getReorderedString = se2, e3.openingToClosingBracket = y2, Object.defineProperty(e3, "__esModule", { value: true }), e3;
  })({});
}
var go = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function _o(e3) {
  let t2 = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function n2(e4, t3) {
    let n3 = T[t3];
    return n3 ? _o(n3) : e4;
  }
  return e3.replace(t2, n2);
}
var vo = [];
for (let e3 = 0; e3 < 256; e3++) vo[e3] = (e3 < 16 ? `0` : ``) + e3.toString(16);
function yo() {
  let e3 = Math.random() * 4294967295 | 0, t2 = Math.random() * 4294967295 | 0, n2 = Math.random() * 4294967295 | 0, r2 = Math.random() * 4294967295 | 0;
  return (vo[e3 & 255] + vo[e3 >> 8 & 255] + vo[e3 >> 16 & 255] + vo[e3 >> 24 & 255] + `-` + vo[t2 & 255] + vo[t2 >> 8 & 255] + `-` + vo[t2 >> 16 & 15 | 64] + vo[t2 >> 24 & 255] + `-` + vo[n2 & 63 | 128] + vo[n2 >> 8 & 255] + `-` + vo[n2 >> 16 & 255] + vo[n2 >> 24 & 255] + vo[r2 & 255] + vo[r2 >> 8 & 255] + vo[r2 >> 16 & 255] + vo[r2 >> 24 & 255]).toUpperCase();
}
var bo = Object.assign || function() {
  let e3 = arguments[0];
  for (let t2 = 1, n2 = arguments.length; t2 < n2; t2++) {
    let n3 = arguments[t2];
    if (n3) for (let t3 in n3) Object.prototype.hasOwnProperty.call(n3, t3) && (e3[t3] = n3[t3]);
  }
  return e3;
}, xo = Date.now(), So = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new Map(), wo = 1e10;
function To(e3, t2) {
  let n2 = jo(t2), r2 = So.get(e3);
  if (r2 || So.set(e3, r2 = /* @__PURE__ */ Object.create(null)), r2[n2]) return new r2[n2]();
  let i2 = `_onBeforeCompile${n2}`, a2 = function(r3, a3) {
    e3.onBeforeCompile.call(this, r3, a3);
    let o3 = this.customProgramCacheKey() + `|` + r3.vertexShader + `|` + r3.fragmentShader, s3 = Co[o3];
    s3 || (s3 = Co[o3] = Eo(this, r3, t2, n2)), r3.vertexShader = s3.vertexShader, r3.fragmentShader = s3.fragmentShader, bo(r3.uniforms, this.uniforms), t2.timeUniform && (r3.uniforms[t2.timeUniform] = { get value() {
      return Date.now() - xo;
    } }), this[i2] && this[i2](r3);
  }, o2 = function() {
    return s2(t2.chained ? e3 : e3.clone());
  }, s2 = function(r3) {
    let i3 = Object.create(r3, c2);
    return Object.defineProperty(i3, "baseMaterial", { value: e3 }), Object.defineProperty(i3, "id", { value: wo++ }), i3.uuid = yo(), i3.uniforms = bo({}, r3.uniforms, t2.uniforms), i3.defines = bo({}, r3.defines, t2.defines), i3.defines[`TROIKA_DERIVED_MATERIAL_${n2}`] = ``, i3.extensions = bo({}, r3.extensions, t2.extensions), i3._listeners = void 0, i3;
  }, c2 = { constructor: { value: o2 }, isDerivedMaterial: { value: true }, type: { get: () => e3.type, set: (t3) => {
    e3.type = t3;
  } }, isDerivedFrom: { writable: true, configurable: true, value: function(e4) {
    let t3 = this.baseMaterial;
    return e4 === t3 || t3.isDerivedMaterial && t3.isDerivedFrom(e4) || false;
  } }, customProgramCacheKey: { writable: true, configurable: true, value: function() {
    return e3.customProgramCacheKey() + `|` + n2;
  } }, onBeforeCompile: { get() {
    return a2;
  }, set(e4) {
    this[i2] = e4;
  } }, copy: { writable: true, configurable: true, value: function(t3) {
    return e3.copy.call(this, t3), !e3.isShaderMaterial && !e3.isDerivedMaterial && (bo(this.extensions, t3.extensions), bo(this.defines, t3.defines), bo(this.uniforms, Fe.clone(t3.uniforms))), this;
  } }, clone: { writable: true, configurable: true, value: function() {
    let t3 = new e3.constructor();
    return s2(t3).copy(this);
  } }, getDepthMaterial: { writable: true, configurable: true, value: function() {
    let n3 = this._depthMaterial;
    return n3 || (n3 = this._depthMaterial = To(e3.isDerivedMaterial ? e3.getDepthMaterial() : new A({ depthPacking: O }), t2), n3.defines.IS_DEPTH_MATERIAL = ``, n3.uniforms = this.uniforms), n3;
  } }, getDistanceMaterial: { writable: true, configurable: true, value: function() {
    let n3 = this._distanceMaterial;
    return n3 || (n3 = this._distanceMaterial = To(e3.isDerivedMaterial ? e3.getDistanceMaterial() : new q(), t2), n3.defines.IS_DISTANCE_MATERIAL = ``, n3.uniforms = this.uniforms), n3;
  } }, dispose: { writable: true, configurable: true, value() {
    let { _depthMaterial: t3, _distanceMaterial: n3 } = this;
    t3 && t3.dispose(), n3 && n3.dispose(), e3.dispose.call(this);
  } } };
  return r2[n2] = o2, new o2();
}
function Eo(e3, { vertexShader: t2, fragmentShader: n2 }, r2, i2) {
  let { vertexDefs: a2, vertexMainIntro: o2, vertexMainOutro: s2, vertexTransform: c2, fragmentDefs: l2, fragmentMainIntro: u2, fragmentMainOutro: d2, fragmentColorTransform: f2, customRewriter: p2, timeUniform: m2 } = r2;
  if (a2 || (a2 = ``), o2 || (o2 = ``), s2 || (s2 = ``), l2 || (l2 = ``), u2 || (u2 = ``), d2 || (d2 = ``), (c2 || p2) && (t2 = _o(t2)), (f2 || p2) && (n2 = n2.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, `
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`), n2 = _o(n2)), p2) {
    let e4 = p2({ vertexShader: t2, fragmentShader: n2 });
    t2 = e4.vertexShader, n2 = e4.fragmentShader;
  }
  if (f2) {
    let e4 = [];
    n2 = n2.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (t3) => (e4.push(t3), ``)), d2 = `${f2}
${e4.join(`
`)}
${d2}`;
  }
  if (m2) {
    let e4 = `
uniform float ${m2};
`;
    a2 = e4 + a2, l2 = e4 + l2;
  }
  return c2 && (t2 = `vec3 troika_position_${i2};
vec3 troika_normal_${i2};
vec2 troika_uv_${i2};
${t2}
`, a2 = `${a2}
void troikaVertexTransform${i2}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c2}
}
`, o2 = `
troika_position_${i2} = vec3(position);
troika_normal_${i2} = vec3(normal);
troika_uv_${i2} = vec2(uv);
troikaVertexTransform${i2}(troika_position_${i2}, troika_normal_${i2}, troika_uv_${i2});
${o2}
`, t2 = t2.replace(/\b(position|normal|uv)\b/g, (e4, t3, n3, r3) => /\battribute\s+vec[23]\s+$/.test(r3.substr(0, n3)) ? t3 : `troika_${t3}_${i2}`), e3.map && e3.map.channel > 0 || (t2 = t2.replace(/\bMAP_UV\b/g, `troika_uv_${i2}`))), t2 = Do(t2, i2, a2, o2, s2), n2 = Do(n2, i2, l2, u2, d2), { vertexShader: t2, fragmentShader: n2 };
}
function Do(e3, t2, n2, r2, i2) {
  return (r2 || i2 || n2) && (e3 = e3.replace(go, `
${n2}
void troikaOrigMain${t2}() {`), e3 += `
void main() {
  ${r2}
  troikaOrigMain${t2}();
  ${i2}
}`), e3;
}
function Oo(e3, t2) {
  return e3 === `uniforms` ? void 0 : typeof t2 == `function` ? t2.toString() : t2;
}
var ko = 0, Ao = /* @__PURE__ */ new Map();
function jo(e3) {
  let t2 = JSON.stringify(e3, Oo), n2 = Ao.get(t2);
  return n2 ?? Ao.set(t2, n2 = ++ko), n2;
}
function Mo() {
  return typeof window > `u` && (self.window = self), (function(e3) {
    var t2 = { parse: function(e4) {
      var n3 = t2._bin, r3 = new Uint8Array(e4);
      if (n3.readASCII(r3, 0, 4) == `ttcf`) {
        var i2 = 4;
        n3.readUshort(r3, i2), i2 += 2, n3.readUshort(r3, i2), i2 += 2;
        var a2 = n3.readUint(r3, i2);
        i2 += 4;
        for (var o2 = [], s2 = 0; s2 < a2; s2++) {
          var c2 = n3.readUint(r3, i2);
          i2 += 4, o2.push(t2._readFont(r3, c2));
        }
        return o2;
      }
      return [t2._readFont(r3, 0)];
    }, _readFont: function(e4, n3) {
      var r3 = t2._bin, i2 = n3;
      r3.readFixed(e4, n3), n3 += 4;
      var a2 = r3.readUshort(e4, n3);
      n3 += 2, r3.readUshort(e4, n3), n3 += 2, r3.readUshort(e4, n3), n3 += 2, r3.readUshort(e4, n3), n3 += 2;
      for (var o2 = [`cmap`, `head`, `hhea`, `maxp`, `hmtx`, `name`, `OS/2`, `post`, `loca`, `glyf`, `kern`, `CFF `, `GDEF`, `GPOS`, `GSUB`, `SVG `], s2 = { _data: e4, _offset: i2 }, c2 = {}, l2 = 0; l2 < a2; l2++) {
        var u2 = r3.readASCII(e4, n3, 4);
        n3 += 4, r3.readUint(e4, n3), n3 += 4;
        var d2 = r3.readUint(e4, n3);
        n3 += 4;
        var f2 = r3.readUint(e4, n3);
        n3 += 4, c2[u2] = { offset: d2, length: f2 };
      }
      for (l2 = 0; l2 < o2.length; l2++) {
        var p2 = o2[l2];
        c2[p2] && (s2[p2.trim()] = t2[p2.trim()].parse(e4, c2[p2].offset, c2[p2].length, s2));
      }
      return s2;
    }, _tabOffset: function(e4, n3, r3) {
      for (var i2 = t2._bin, a2 = i2.readUshort(e4, r3 + 4), o2 = r3 + 12, s2 = 0; s2 < a2; s2++) {
        var c2 = i2.readASCII(e4, o2, 4);
        o2 += 4, i2.readUint(e4, o2), o2 += 4;
        var l2 = i2.readUint(e4, o2);
        if (o2 += 4, i2.readUint(e4, o2), o2 += 4, c2 == n3) return l2;
      }
      return 0;
    } };
    t2._bin = { readFixed: function(e4, t3) {
      return (e4[t3] << 8 | e4[t3 + 1]) + (e4[t3 + 2] << 8 | e4[t3 + 3]) / 65540;
    }, readF2dot14: function(e4, n3) {
      return t2._bin.readShort(e4, n3) / 16384;
    }, readInt: function(e4, n3) {
      return t2._bin._view(e4).getInt32(n3);
    }, readInt8: function(e4, n3) {
      return t2._bin._view(e4).getInt8(n3);
    }, readShort: function(e4, n3) {
      return t2._bin._view(e4).getInt16(n3);
    }, readUshort: function(e4, n3) {
      return t2._bin._view(e4).getUint16(n3);
    }, readUshorts: function(e4, n3, r3) {
      for (var i2 = [], a2 = 0; a2 < r3; a2++) i2.push(t2._bin.readUshort(e4, n3 + 2 * a2));
      return i2;
    }, readUint: function(e4, n3) {
      return t2._bin._view(e4).getUint32(n3);
    }, readUint64: function(e4, n3) {
      return 4294967296 * t2._bin.readUint(e4, n3) + t2._bin.readUint(e4, n3 + 4);
    }, readASCII: function(e4, t3, n3) {
      for (var r3 = ``, i2 = 0; i2 < n3; i2++) r3 += String.fromCharCode(e4[t3 + i2]);
      return r3;
    }, readUnicode: function(e4, t3, n3) {
      for (var r3 = ``, i2 = 0; i2 < n3; i2++) {
        var a2 = e4[t3++] << 8 | e4[t3++];
        r3 += String.fromCharCode(a2);
      }
      return r3;
    }, _tdec: typeof window < `u` && window.TextDecoder ? new window.TextDecoder() : null, readUTF8: function(e4, n3, r3) {
      var i2 = t2._bin._tdec;
      return i2 && n3 == 0 && r3 == e4.length ? i2.decode(e4) : t2._bin.readASCII(e4, n3, r3);
    }, readBytes: function(e4, t3, n3) {
      for (var r3 = [], i2 = 0; i2 < n3; i2++) r3.push(e4[t3 + i2]);
      return r3;
    }, readASCIIArray: function(e4, t3, n3) {
      for (var r3 = [], i2 = 0; i2 < n3; i2++) r3.push(String.fromCharCode(e4[t3 + i2]));
      return r3;
    }, _view: function(e4) {
      return e4._dataView || (e4._dataView = e4.buffer ? new DataView(e4.buffer, e4.byteOffset, e4.byteLength) : new DataView(new Uint8Array(e4).buffer));
    } }, t2._lctf = {}, t2._lctf.parse = function(e4, n3, r3, i2, a2) {
      var o2 = t2._bin, s2 = {}, c2 = n3;
      o2.readFixed(e4, n3), n3 += 4;
      var l2 = o2.readUshort(e4, n3);
      n3 += 2;
      var u2 = o2.readUshort(e4, n3);
      n3 += 2;
      var d2 = o2.readUshort(e4, n3);
      return n3 += 2, s2.scriptList = t2._lctf.readScriptList(e4, c2 + l2), s2.featureList = t2._lctf.readFeatureList(e4, c2 + u2), s2.lookupList = t2._lctf.readLookupList(e4, c2 + d2, a2), s2;
    }, t2._lctf.readLookupList = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = n3, o2 = [], s2 = i2.readUshort(e4, n3);
      n3 += 2;
      for (var c2 = 0; c2 < s2; c2++) {
        var l2 = i2.readUshort(e4, n3);
        n3 += 2;
        var u2 = t2._lctf.readLookupTable(e4, a2 + l2, r3);
        o2.push(u2);
      }
      return o2;
    }, t2._lctf.readLookupTable = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = n3, o2 = { tabs: [] };
      o2.ltype = i2.readUshort(e4, n3), n3 += 2, o2.flag = i2.readUshort(e4, n3), n3 += 2;
      var s2 = i2.readUshort(e4, n3);
      n3 += 2;
      for (var c2 = o2.ltype, l2 = 0; l2 < s2; l2++) {
        var u2 = i2.readUshort(e4, n3);
        n3 += 2;
        var d2 = r3(e4, c2, a2 + u2, o2);
        o2.tabs.push(d2);
      }
      return o2;
    }, t2._lctf.numOfOnes = function(e4) {
      for (var t3 = 0, n3 = 0; n3 < 32; n3++) e4 >>> n3 & 1 && t3++;
      return t3;
    }, t2._lctf.readClassDef = function(e4, n3) {
      var r3 = t2._bin, i2 = [], a2 = r3.readUshort(e4, n3);
      if (n3 += 2, a2 == 1) {
        var o2 = r3.readUshort(e4, n3);
        n3 += 2;
        var s2 = r3.readUshort(e4, n3);
        n3 += 2;
        for (var c2 = 0; c2 < s2; c2++) i2.push(o2 + c2), i2.push(o2 + c2), i2.push(r3.readUshort(e4, n3)), n3 += 2;
      }
      if (a2 == 2) {
        var l2 = r3.readUshort(e4, n3);
        for (n3 += 2, c2 = 0; c2 < l2; c2++) i2.push(r3.readUshort(e4, n3)), n3 += 2, i2.push(r3.readUshort(e4, n3)), n3 += 2, i2.push(r3.readUshort(e4, n3)), n3 += 2;
      }
      return i2;
    }, t2._lctf.getInterval = function(e4, t3) {
      for (var n3 = 0; n3 < e4.length; n3 += 3) {
        var r3 = e4[n3], i2 = e4[n3 + 1];
        if (e4[n3 + 2], r3 <= t3 && t3 <= i2) return n3;
      }
      return -1;
    }, t2._lctf.readCoverage = function(e4, n3) {
      var r3 = t2._bin, i2 = {};
      i2.fmt = r3.readUshort(e4, n3), n3 += 2;
      var a2 = r3.readUshort(e4, n3);
      return n3 += 2, i2.fmt == 1 && (i2.tab = r3.readUshorts(e4, n3, a2)), i2.fmt == 2 && (i2.tab = r3.readUshorts(e4, n3, 3 * a2)), i2;
    }, t2._lctf.coverageIndex = function(e4, n3) {
      var r3 = e4.tab;
      if (e4.fmt == 1) return r3.indexOf(n3);
      if (e4.fmt == 2) {
        var i2 = t2._lctf.getInterval(r3, n3);
        if (i2 != -1) return r3[i2 + 2] + (n3 - r3[i2]);
      }
      return -1;
    }, t2._lctf.readFeatureList = function(e4, n3) {
      var r3 = t2._bin, i2 = n3, a2 = [], o2 = r3.readUshort(e4, n3);
      n3 += 2;
      for (var s2 = 0; s2 < o2; s2++) {
        var c2 = r3.readASCII(e4, n3, 4);
        n3 += 4;
        var l2 = r3.readUshort(e4, n3);
        n3 += 2;
        var u2 = t2._lctf.readFeatureTable(e4, i2 + l2);
        u2.tag = c2.trim(), a2.push(u2);
      }
      return a2;
    }, t2._lctf.readFeatureTable = function(e4, n3) {
      var r3 = t2._bin, i2 = n3, a2 = {}, o2 = r3.readUshort(e4, n3);
      n3 += 2, o2 > 0 && (a2.featureParams = i2 + o2);
      var s2 = r3.readUshort(e4, n3);
      n3 += 2, a2.tab = [];
      for (var c2 = 0; c2 < s2; c2++) a2.tab.push(r3.readUshort(e4, n3 + 2 * c2));
      return a2;
    }, t2._lctf.readScriptList = function(e4, n3) {
      var r3 = t2._bin, i2 = n3, a2 = {}, o2 = r3.readUshort(e4, n3);
      n3 += 2;
      for (var s2 = 0; s2 < o2; s2++) {
        var c2 = r3.readASCII(e4, n3, 4);
        n3 += 4;
        var l2 = r3.readUshort(e4, n3);
        n3 += 2, a2[c2.trim()] = t2._lctf.readScriptTable(e4, i2 + l2);
      }
      return a2;
    }, t2._lctf.readScriptTable = function(e4, n3) {
      var r3 = t2._bin, i2 = n3, a2 = {}, o2 = r3.readUshort(e4, n3);
      n3 += 2, o2 > 0 && (a2.default = t2._lctf.readLangSysTable(e4, i2 + o2));
      var s2 = r3.readUshort(e4, n3);
      n3 += 2;
      for (var c2 = 0; c2 < s2; c2++) {
        var l2 = r3.readASCII(e4, n3, 4);
        n3 += 4;
        var u2 = r3.readUshort(e4, n3);
        n3 += 2, a2[l2.trim()] = t2._lctf.readLangSysTable(e4, i2 + u2);
      }
      return a2;
    }, t2._lctf.readLangSysTable = function(e4, n3) {
      var r3 = t2._bin, i2 = {};
      r3.readUshort(e4, n3), n3 += 2, i2.reqFeature = r3.readUshort(e4, n3), n3 += 2;
      var a2 = r3.readUshort(e4, n3);
      return n3 += 2, i2.features = r3.readUshorts(e4, n3, a2), i2;
    }, t2.CFF = {}, t2.CFF.parse = function(e4, n3, r3) {
      var i2 = t2._bin;
      (e4 = new Uint8Array(e4.buffer, n3, r3))[n3 = 0], e4[++n3], e4[++n3], e4[++n3], n3++;
      var a2 = [];
      n3 = t2.CFF.readIndex(e4, n3, a2);
      for (var o2 = [], s2 = 0; s2 < a2.length - 1; s2++) o2.push(i2.readASCII(e4, n3 + a2[s2], a2[s2 + 1] - a2[s2]));
      n3 += a2[a2.length - 1];
      var c2 = [];
      n3 = t2.CFF.readIndex(e4, n3, c2);
      var l2 = [];
      for (s2 = 0; s2 < c2.length - 1; s2++) l2.push(t2.CFF.readDict(e4, n3 + c2[s2], n3 + c2[s2 + 1]));
      n3 += c2[c2.length - 1];
      var u2 = l2[0], d2 = [];
      n3 = t2.CFF.readIndex(e4, n3, d2);
      var f2 = [];
      for (s2 = 0; s2 < d2.length - 1; s2++) f2.push(i2.readASCII(e4, n3 + d2[s2], d2[s2 + 1] - d2[s2]));
      if (n3 += d2[d2.length - 1], t2.CFF.readSubrs(e4, n3, u2), u2.CharStrings) {
        n3 = u2.CharStrings, d2 = [], n3 = t2.CFF.readIndex(e4, n3, d2);
        var p2 = [];
        for (s2 = 0; s2 < d2.length - 1; s2++) p2.push(i2.readBytes(e4, n3 + d2[s2], d2[s2 + 1] - d2[s2]));
        u2.CharStrings = p2;
      }
      if (u2.ROS) {
        n3 = u2.FDArray;
        var m2 = [];
        for (n3 = t2.CFF.readIndex(e4, n3, m2), u2.FDArray = [], s2 = 0; s2 < m2.length - 1; s2++) {
          var h2 = t2.CFF.readDict(e4, n3 + m2[s2], n3 + m2[s2 + 1]);
          t2.CFF._readFDict(e4, h2, f2), u2.FDArray.push(h2);
        }
        n3 += m2[m2.length - 1], n3 = u2.FDSelect, u2.FDSelect = [];
        var g2 = e4[n3];
        if (n3++, g2 != 3) throw g2;
        var _2 = i2.readUshort(e4, n3);
        for (n3 += 2, s2 = 0; s2 < _2 + 1; s2++) u2.FDSelect.push(i2.readUshort(e4, n3), e4[n3 + 2]), n3 += 3;
      }
      return u2.Encoding && (u2.Encoding = t2.CFF.readEncoding(e4, u2.Encoding, u2.CharStrings.length)), u2.charset && (u2.charset = t2.CFF.readCharset(e4, u2.charset, u2.CharStrings.length)), t2.CFF._readFDict(e4, u2, f2), u2;
    }, t2.CFF._readFDict = function(e4, n3, r3) {
      var i2;
      for (var a2 in n3.Private && (i2 = n3.Private[1], n3.Private = t2.CFF.readDict(e4, i2, i2 + n3.Private[0]), n3.Private.Subrs && t2.CFF.readSubrs(e4, i2 + n3.Private.Subrs, n3.Private)), n3) [`FamilyName`, `FontName`, `FullName`, `Notice`, `version`, `Copyright`].indexOf(a2) != -1 && (n3[a2] = r3[n3[a2] - 426 + 35]);
    }, t2.CFF.readSubrs = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = [];
      n3 = t2.CFF.readIndex(e4, n3, a2);
      var o2, s2 = a2.length;
      o2 = s2 < 1240 ? 107 : s2 < 33900 ? 1131 : 32768, r3.Bias = o2, r3.Subrs = [];
      for (var c2 = 0; c2 < a2.length - 1; c2++) r3.Subrs.push(i2.readBytes(e4, n3 + a2[c2], a2[c2 + 1] - a2[c2]));
    }, t2.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], t2.CFF.glyphByUnicode = function(e4, t3) {
      for (var n3 = 0; n3 < e4.charset.length; n3++) if (e4.charset[n3] == t3) return n3;
      return -1;
    }, t2.CFF.glyphBySE = function(e4, n3) {
      return n3 < 0 || n3 > 255 ? -1 : t2.CFF.glyphByUnicode(e4, t2.CFF.tableSE[n3]);
    }, t2.CFF.readEncoding = function(e4, n3, r3) {
      t2._bin;
      var i2 = [`.notdef`], a2 = e4[n3];
      if (n3++, a2 != 0) throw `error: unknown encoding format: ` + a2;
      var o2 = e4[n3];
      n3++;
      for (var s2 = 0; s2 < o2; s2++) i2.push(e4[n3 + s2]);
      return i2;
    }, t2.CFF.readCharset = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = [`.notdef`], o2 = e4[n3];
      if (n3++, o2 == 0) for (var s2 = 0; s2 < r3; s2++) {
        var c2 = i2.readUshort(e4, n3);
        n3 += 2, a2.push(c2);
      }
      else {
        if (o2 != 1 && o2 != 2) throw `error: format: ` + o2;
        for (; a2.length < r3; ) {
          c2 = i2.readUshort(e4, n3), n3 += 2;
          var l2 = 0;
          for (o2 == 1 ? (l2 = e4[n3], n3++) : (l2 = i2.readUshort(e4, n3), n3 += 2), s2 = 0; s2 <= l2; s2++) a2.push(c2), c2++;
        }
      }
      return a2;
    }, t2.CFF.readIndex = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = i2.readUshort(e4, n3) + 1, o2 = e4[n3 += 2];
      if (n3++, o2 == 1) for (var s2 = 0; s2 < a2; s2++) r3.push(e4[n3 + s2]);
      else if (o2 == 2) for (s2 = 0; s2 < a2; s2++) r3.push(i2.readUshort(e4, n3 + 2 * s2));
      else if (o2 == 3) for (s2 = 0; s2 < a2; s2++) r3.push(16777215 & i2.readUint(e4, n3 + 3 * s2 - 1));
      else if (a2 != 1) throw `unsupported offset size: ` + o2 + `, count: ` + a2;
      return (n3 += a2 * o2) - 1;
    }, t2.CFF.getCharString = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = e4[n3], o2 = e4[n3 + 1];
      e4[n3 + 2], e4[n3 + 3], e4[n3 + 4];
      var s2 = 1, c2 = null, l2 = null;
      a2 <= 20 && (c2 = a2, s2 = 1), a2 == 12 && (c2 = 100 * a2 + o2, s2 = 2), 21 <= a2 && a2 <= 27 && (c2 = a2, s2 = 1), a2 == 28 && (l2 = i2.readShort(e4, n3 + 1), s2 = 3), 29 <= a2 && a2 <= 31 && (c2 = a2, s2 = 1), 32 <= a2 && a2 <= 246 && (l2 = a2 - 139, s2 = 1), 247 <= a2 && a2 <= 250 && (l2 = 256 * (a2 - 247) + o2 + 108, s2 = 2), 251 <= a2 && a2 <= 254 && (l2 = 256 * -(a2 - 251) - o2 - 108, s2 = 2), a2 == 255 && (l2 = i2.readInt(e4, n3 + 1) / 65535, s2 = 5), r3.val = l2 ?? `o` + c2, r3.size = s2;
    }, t2.CFF.readCharString = function(e4, n3, r3) {
      for (var i2 = n3 + r3, a2 = t2._bin, o2 = []; n3 < i2; ) {
        var s2 = e4[n3], c2 = e4[n3 + 1];
        e4[n3 + 2], e4[n3 + 3], e4[n3 + 4];
        var l2 = 1, u2 = null, d2 = null;
        s2 <= 20 && (u2 = s2, l2 = 1), s2 == 12 && (u2 = 100 * s2 + c2, l2 = 2), s2 != 19 && s2 != 20 || (u2 = s2, l2 = 2), 21 <= s2 && s2 <= 27 && (u2 = s2, l2 = 1), s2 == 28 && (d2 = a2.readShort(e4, n3 + 1), l2 = 3), 29 <= s2 && s2 <= 31 && (u2 = s2, l2 = 1), 32 <= s2 && s2 <= 246 && (d2 = s2 - 139, l2 = 1), 247 <= s2 && s2 <= 250 && (d2 = 256 * (s2 - 247) + c2 + 108, l2 = 2), 251 <= s2 && s2 <= 254 && (d2 = 256 * -(s2 - 251) - c2 - 108, l2 = 2), s2 == 255 && (d2 = a2.readInt(e4, n3 + 1) / 65535, l2 = 5), o2.push(d2 ?? `o` + u2), n3 += l2;
      }
      return o2;
    }, t2.CFF.readDict = function(e4, n3, r3) {
      for (var i2 = t2._bin, a2 = {}, o2 = []; n3 < r3; ) {
        var s2 = e4[n3], c2 = e4[n3 + 1];
        e4[n3 + 2], e4[n3 + 3], e4[n3 + 4];
        var l2 = 1, u2 = null, d2 = null;
        if (s2 == 28 && (d2 = i2.readShort(e4, n3 + 1), l2 = 3), s2 == 29 && (d2 = i2.readInt(e4, n3 + 1), l2 = 5), 32 <= s2 && s2 <= 246 && (d2 = s2 - 139, l2 = 1), 247 <= s2 && s2 <= 250 && (d2 = 256 * (s2 - 247) + c2 + 108, l2 = 2), 251 <= s2 && s2 <= 254 && (d2 = 256 * -(s2 - 251) - c2 - 108, l2 = 2), s2 == 255) throw d2 = i2.readInt(e4, n3 + 1) / 65535, l2 = 5, `unknown number`;
        if (s2 == 30) {
          var f2 = [];
          for (l2 = 1; ; ) {
            var p2 = e4[n3 + l2];
            l2++;
            var m2 = p2 >> 4, h2 = 15 & p2;
            if (m2 != 15 && f2.push(m2), h2 != 15 && f2.push(h2), h2 == 15) break;
          }
          for (var g2 = ``, _2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `.`, `e`, `e-`, `reserved`, `-`, `endOfNumber`], v2 = 0; v2 < f2.length; v2++) g2 += _2[f2[v2]];
          d2 = parseFloat(g2);
        }
        s2 <= 21 && (u2 = [`version`, `Notice`, `FullName`, `FamilyName`, `Weight`, `FontBBox`, `BlueValues`, `OtherBlues`, `FamilyBlues`, `FamilyOtherBlues`, `StdHW`, `StdVW`, `escape`, `UniqueID`, `XUID`, `charset`, `Encoding`, `CharStrings`, `Private`, `Subrs`, `defaultWidthX`, `nominalWidthX`][s2], l2 = 1, s2 == 12 && (u2 = [`Copyright`, `isFixedPitch`, `ItalicAngle`, `UnderlinePosition`, `UnderlineThickness`, `PaintType`, `CharstringType`, `FontMatrix`, `StrokeWidth`, `BlueScale`, `BlueShift`, `BlueFuzz`, `StemSnapH`, `StemSnapV`, `ForceBold`, 0, 0, `LanguageGroup`, `ExpansionFactor`, `initialRandomSeed`, `SyntheticBase`, `PostScript`, `BaseFontName`, `BaseFontBlend`, 0, 0, 0, 0, 0, 0, `ROS`, `CIDFontVersion`, `CIDFontRevision`, `CIDFontType`, `CIDCount`, `UIDBase`, `FDArray`, `FDSelect`, `FontName`][c2], l2 = 2)), u2 == null ? o2.push(d2) : (a2[u2] = o2.length == 1 ? o2[0] : o2, o2 = []), n3 += l2;
      }
      return a2;
    }, t2.cmap = {}, t2.cmap.parse = function(e4, n3, r3) {
      e4 = new Uint8Array(e4.buffer, n3, r3), n3 = 0;
      var i2 = t2._bin, a2 = {};
      i2.readUshort(e4, n3), n3 += 2;
      var o2 = i2.readUshort(e4, n3);
      n3 += 2;
      var s2 = [];
      a2.tables = [];
      for (var c2 = 0; c2 < o2; c2++) {
        var l2 = i2.readUshort(e4, n3);
        n3 += 2;
        var u2 = i2.readUshort(e4, n3);
        n3 += 2;
        var d2 = i2.readUint(e4, n3);
        n3 += 4;
        var f2 = `p` + l2 + `e` + u2, p2 = s2.indexOf(d2);
        if (p2 == -1) {
          var m2;
          p2 = a2.tables.length, s2.push(d2);
          var h2 = i2.readUshort(e4, d2);
          h2 == 0 ? m2 = t2.cmap.parse0(e4, d2) : h2 == 4 ? m2 = t2.cmap.parse4(e4, d2) : h2 == 6 ? m2 = t2.cmap.parse6(e4, d2) : h2 == 12 ? m2 = t2.cmap.parse12(e4, d2) : console.debug(`unknown format: ` + h2, l2, u2, d2), a2.tables.push(m2);
        }
        if (a2[f2] != null) throw `multiple tables for one platform+encoding`;
        a2[f2] = p2;
      }
      return a2;
    }, t2.cmap.parse0 = function(e4, n3) {
      var r3 = t2._bin, i2 = {};
      i2.format = r3.readUshort(e4, n3), n3 += 2;
      var a2 = r3.readUshort(e4, n3);
      n3 += 2, r3.readUshort(e4, n3), n3 += 2, i2.map = [];
      for (var o2 = 0; o2 < a2 - 6; o2++) i2.map.push(e4[n3 + o2]);
      return i2;
    }, t2.cmap.parse4 = function(e4, n3) {
      var r3 = t2._bin, i2 = n3, a2 = {};
      a2.format = r3.readUshort(e4, n3), n3 += 2;
      var o2 = r3.readUshort(e4, n3);
      n3 += 2, r3.readUshort(e4, n3), n3 += 2;
      var s2 = r3.readUshort(e4, n3);
      n3 += 2;
      var c2 = s2 / 2;
      a2.searchRange = r3.readUshort(e4, n3), n3 += 2, a2.entrySelector = r3.readUshort(e4, n3), n3 += 2, a2.rangeShift = r3.readUshort(e4, n3), n3 += 2, a2.endCount = r3.readUshorts(e4, n3, c2), n3 += 2 * c2, n3 += 2, a2.startCount = r3.readUshorts(e4, n3, c2), n3 += 2 * c2, a2.idDelta = [];
      for (var l2 = 0; l2 < c2; l2++) a2.idDelta.push(r3.readShort(e4, n3)), n3 += 2;
      for (a2.idRangeOffset = r3.readUshorts(e4, n3, c2), n3 += 2 * c2, a2.glyphIdArray = []; n3 < i2 + o2; ) a2.glyphIdArray.push(r3.readUshort(e4, n3)), n3 += 2;
      return a2;
    }, t2.cmap.parse6 = function(e4, n3) {
      var r3 = t2._bin, i2 = {};
      i2.format = r3.readUshort(e4, n3), n3 += 2, r3.readUshort(e4, n3), n3 += 2, r3.readUshort(e4, n3), n3 += 2, i2.firstCode = r3.readUshort(e4, n3), n3 += 2;
      var a2 = r3.readUshort(e4, n3);
      n3 += 2, i2.glyphIdArray = [];
      for (var o2 = 0; o2 < a2; o2++) i2.glyphIdArray.push(r3.readUshort(e4, n3)), n3 += 2;
      return i2;
    }, t2.cmap.parse12 = function(e4, n3) {
      var r3 = t2._bin, i2 = {};
      i2.format = r3.readUshort(e4, n3), n3 += 2, n3 += 2, r3.readUint(e4, n3), n3 += 4, r3.readUint(e4, n3), n3 += 4;
      var a2 = r3.readUint(e4, n3);
      n3 += 4, i2.groups = [];
      for (var o2 = 0; o2 < a2; o2++) {
        var s2 = n3 + 12 * o2, c2 = r3.readUint(e4, s2 + 0), l2 = r3.readUint(e4, s2 + 4), u2 = r3.readUint(e4, s2 + 8);
        i2.groups.push([c2, l2, u2]);
      }
      return i2;
    }, t2.glyf = {}, t2.glyf.parse = function(e4, t3, n3, r3) {
      for (var i2 = [], a2 = 0; a2 < r3.maxp.numGlyphs; a2++) i2.push(null);
      return i2;
    }, t2.glyf._parseGlyf = function(e4, n3) {
      var r3 = t2._bin, i2 = e4._data, a2 = t2._tabOffset(i2, `glyf`, e4._offset) + e4.loca[n3];
      if (e4.loca[n3] == e4.loca[n3 + 1]) return null;
      var o2 = {};
      if (o2.noc = r3.readShort(i2, a2), a2 += 2, o2.xMin = r3.readShort(i2, a2), a2 += 2, o2.yMin = r3.readShort(i2, a2), a2 += 2, o2.xMax = r3.readShort(i2, a2), a2 += 2, o2.yMax = r3.readShort(i2, a2), a2 += 2, o2.xMin >= o2.xMax || o2.yMin >= o2.yMax) return null;
      if (o2.noc > 0) {
        o2.endPts = [];
        for (var s2 = 0; s2 < o2.noc; s2++) o2.endPts.push(r3.readUshort(i2, a2)), a2 += 2;
        var c2 = r3.readUshort(i2, a2);
        if (a2 += 2, i2.length - a2 < c2) return null;
        o2.instructions = r3.readBytes(i2, a2, c2), a2 += c2;
        var l2 = o2.endPts[o2.noc - 1] + 1;
        for (o2.flags = [], s2 = 0; s2 < l2; s2++) {
          var u2 = i2[a2];
          if (a2++, o2.flags.push(u2), 8 & u2) {
            var d2 = i2[a2];
            a2++;
            for (var f2 = 0; f2 < d2; f2++) o2.flags.push(u2), s2++;
          }
        }
        for (o2.xs = [], s2 = 0; s2 < l2; s2++) {
          var p2 = !!(2 & o2.flags[s2]), m2 = !!(16 & o2.flags[s2]);
          p2 ? (o2.xs.push(m2 ? i2[a2] : -i2[a2]), a2++) : m2 ? o2.xs.push(0) : (o2.xs.push(r3.readShort(i2, a2)), a2 += 2);
        }
        for (o2.ys = [], s2 = 0; s2 < l2; s2++) p2 = !!(4 & o2.flags[s2]), m2 = !!(32 & o2.flags[s2]), p2 ? (o2.ys.push(m2 ? i2[a2] : -i2[a2]), a2++) : m2 ? o2.ys.push(0) : (o2.ys.push(r3.readShort(i2, a2)), a2 += 2);
        var h2 = 0, g2 = 0;
        for (s2 = 0; s2 < l2; s2++) h2 += o2.xs[s2], g2 += o2.ys[s2], o2.xs[s2] = h2, o2.ys[s2] = g2;
      } else {
        var _2;
        o2.parts = [];
        do {
          _2 = r3.readUshort(i2, a2), a2 += 2;
          var v2 = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
          if (o2.parts.push(v2), v2.glyphIndex = r3.readUshort(i2, a2), a2 += 2, 1 & _2) {
            var y2 = r3.readShort(i2, a2);
            a2 += 2;
            var b2 = r3.readShort(i2, a2);
            a2 += 2;
          } else y2 = r3.readInt8(i2, a2), a2++, b2 = r3.readInt8(i2, a2), a2++;
          2 & _2 ? (v2.m.tx = y2, v2.m.ty = b2) : (v2.p1 = y2, v2.p2 = b2), 8 & _2 ? (v2.m.a = v2.m.d = r3.readF2dot14(i2, a2), a2 += 2) : 64 & _2 ? (v2.m.a = r3.readF2dot14(i2, a2), a2 += 2, v2.m.d = r3.readF2dot14(i2, a2), a2 += 2) : 128 & _2 && (v2.m.a = r3.readF2dot14(i2, a2), a2 += 2, v2.m.b = r3.readF2dot14(i2, a2), a2 += 2, v2.m.c = r3.readF2dot14(i2, a2), a2 += 2, v2.m.d = r3.readF2dot14(i2, a2), a2 += 2);
        } while (32 & _2);
        if (256 & _2) {
          var x2 = r3.readUshort(i2, a2);
          for (a2 += 2, o2.instr = [], s2 = 0; s2 < x2; s2++) o2.instr.push(i2[a2]), a2++;
        }
      }
      return o2;
    }, t2.GDEF = {}, t2.GDEF.parse = function(e4, n3, r3, i2) {
      var a2 = n3;
      n3 += 4;
      var o2 = t2._bin.readUshort(e4, n3);
      return { glyphClassDef: o2 === 0 ? null : t2._lctf.readClassDef(e4, a2 + o2) };
    }, t2.GPOS = {}, t2.GPOS.parse = function(e4, n3, r3, i2) {
      return t2._lctf.parse(e4, n3, r3, i2, t2.GPOS.subt);
    }, t2.GPOS.subt = function(e4, n3, r3, i2) {
      var a2 = t2._bin, o2 = r3, s2 = {};
      if (s2.fmt = a2.readUshort(e4, r3), r3 += 2, n3 == 1 || n3 == 2 || n3 == 3 || n3 == 7 || n3 == 8 && s2.fmt <= 2) {
        var c2 = a2.readUshort(e4, r3);
        r3 += 2, s2.coverage = t2._lctf.readCoverage(e4, c2 + o2);
      }
      if (n3 == 1 && s2.fmt == 1) {
        var l2 = a2.readUshort(e4, r3);
        r3 += 2, l2 != 0 && (s2.pos = t2.GPOS.readValueRecord(e4, r3, l2));
      } else if (n3 == 2 && s2.fmt >= 1 && s2.fmt <= 2) {
        l2 = a2.readUshort(e4, r3), r3 += 2;
        var u2 = a2.readUshort(e4, r3);
        r3 += 2;
        var d2 = t2._lctf.numOfOnes(l2), f2 = t2._lctf.numOfOnes(u2);
        if (s2.fmt == 1) {
          s2.pairsets = [];
          var p2 = a2.readUshort(e4, r3);
          r3 += 2;
          for (var m2 = 0; m2 < p2; m2++) {
            var h2 = o2 + a2.readUshort(e4, r3);
            r3 += 2;
            var g2 = a2.readUshort(e4, h2);
            h2 += 2;
            for (var _2 = [], v2 = 0; v2 < g2; v2++) {
              var y2 = a2.readUshort(e4, h2);
              h2 += 2, l2 != 0 && (T2 = t2.GPOS.readValueRecord(e4, h2, l2), h2 += 2 * d2), u2 != 0 && (E2 = t2.GPOS.readValueRecord(e4, h2, u2), h2 += 2 * f2), _2.push({ gid2: y2, val1: T2, val2: E2 });
            }
            s2.pairsets.push(_2);
          }
        }
        if (s2.fmt == 2) {
          var b2 = a2.readUshort(e4, r3);
          r3 += 2;
          var x2 = a2.readUshort(e4, r3);
          r3 += 2;
          var S2 = a2.readUshort(e4, r3);
          r3 += 2;
          var C2 = a2.readUshort(e4, r3);
          for (r3 += 2, s2.classDef1 = t2._lctf.readClassDef(e4, o2 + b2), s2.classDef2 = t2._lctf.readClassDef(e4, o2 + x2), s2.matrix = [], m2 = 0; m2 < S2; m2++) {
            var w2 = [];
            for (v2 = 0; v2 < C2; v2++) {
              var T2 = null, E2 = null;
              l2 != 0 && (T2 = t2.GPOS.readValueRecord(e4, r3, l2), r3 += 2 * d2), u2 != 0 && (E2 = t2.GPOS.readValueRecord(e4, r3, u2), r3 += 2 * f2), w2.push({ val1: T2, val2: E2 });
            }
            s2.matrix.push(w2);
          }
        }
      } else if (n3 == 4 && s2.fmt == 1) s2.markCoverage = t2._lctf.readCoverage(e4, a2.readUshort(e4, r3) + o2), s2.baseCoverage = t2._lctf.readCoverage(e4, a2.readUshort(e4, r3 + 2) + o2), s2.markClassCount = a2.readUshort(e4, r3 + 4), s2.markArray = t2.GPOS.readMarkArray(e4, a2.readUshort(e4, r3 + 6) + o2), s2.baseArray = t2.GPOS.readBaseArray(e4, a2.readUshort(e4, r3 + 8) + o2, s2.markClassCount);
      else if (n3 == 6 && s2.fmt == 1) s2.mark1Coverage = t2._lctf.readCoverage(e4, a2.readUshort(e4, r3) + o2), s2.mark2Coverage = t2._lctf.readCoverage(e4, a2.readUshort(e4, r3 + 2) + o2), s2.markClassCount = a2.readUshort(e4, r3 + 4), s2.mark1Array = t2.GPOS.readMarkArray(e4, a2.readUshort(e4, r3 + 6) + o2), s2.mark2Array = t2.GPOS.readBaseArray(e4, a2.readUshort(e4, r3 + 8) + o2, s2.markClassCount);
      else {
        if (n3 == 9 && s2.fmt == 1) {
          var D2 = a2.readUshort(e4, r3);
          r3 += 2;
          var O2 = a2.readUint(e4, r3);
          if (r3 += 4, i2.ltype == 9) i2.ltype = D2;
          else if (i2.ltype != D2) throw `invalid extension substitution`;
          return t2.GPOS.subt(e4, i2.ltype, o2 + O2);
        }
        console.debug(`unsupported GPOS table LookupType`, n3, `format`, s2.fmt);
      }
      return s2;
    }, t2.GPOS.readValueRecord = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = [];
      return a2.push(1 & r3 ? i2.readShort(e4, n3) : 0), n3 += 1 & r3 ? 2 : 0, a2.push(2 & r3 ? i2.readShort(e4, n3) : 0), n3 += 2 & r3 ? 2 : 0, a2.push(4 & r3 ? i2.readShort(e4, n3) : 0), n3 += 4 & r3 ? 2 : 0, a2.push(8 & r3 ? i2.readShort(e4, n3) : 0), n3 += 8 & r3 ? 2 : 0, a2;
    }, t2.GPOS.readBaseArray = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = [], o2 = n3, s2 = i2.readUshort(e4, n3);
      n3 += 2;
      for (var c2 = 0; c2 < s2; c2++) {
        for (var l2 = [], u2 = 0; u2 < r3; u2++) l2.push(t2.GPOS.readAnchorRecord(e4, o2 + i2.readUshort(e4, n3))), n3 += 2;
        a2.push(l2);
      }
      return a2;
    }, t2.GPOS.readMarkArray = function(e4, n3) {
      var r3 = t2._bin, i2 = [], a2 = n3, o2 = r3.readUshort(e4, n3);
      n3 += 2;
      for (var s2 = 0; s2 < o2; s2++) {
        var c2 = t2.GPOS.readAnchorRecord(e4, r3.readUshort(e4, n3 + 2) + a2);
        c2.markClass = r3.readUshort(e4, n3), i2.push(c2), n3 += 4;
      }
      return i2;
    }, t2.GPOS.readAnchorRecord = function(e4, n3) {
      var r3 = t2._bin, i2 = {};
      return i2.fmt = r3.readUshort(e4, n3), i2.x = r3.readShort(e4, n3 + 2), i2.y = r3.readShort(e4, n3 + 4), i2;
    }, t2.GSUB = {}, t2.GSUB.parse = function(e4, n3, r3, i2) {
      return t2._lctf.parse(e4, n3, r3, i2, t2.GSUB.subt);
    }, t2.GSUB.subt = function(e4, n3, r3, i2) {
      var a2 = t2._bin, o2 = r3, s2 = {};
      if (s2.fmt = a2.readUshort(e4, r3), r3 += 2, n3 != 1 && n3 != 2 && n3 != 4 && n3 != 5 && n3 != 6) return null;
      if (n3 == 1 || n3 == 2 || n3 == 4 || n3 == 5 && s2.fmt <= 2 || n3 == 6 && s2.fmt <= 2) {
        var c2 = a2.readUshort(e4, r3);
        r3 += 2, s2.coverage = t2._lctf.readCoverage(e4, o2 + c2);
      }
      if (n3 == 1 && s2.fmt >= 1 && s2.fmt <= 2) {
        if (s2.fmt == 1) s2.delta = a2.readShort(e4, r3), r3 += 2;
        else if (s2.fmt == 2) {
          var l2 = a2.readUshort(e4, r3);
          r3 += 2, s2.newg = a2.readUshorts(e4, r3, l2), r3 += 2 * s2.newg.length;
        }
      } else if (n3 == 2 && s2.fmt == 1) {
        l2 = a2.readUshort(e4, r3), r3 += 2, s2.seqs = [];
        for (var u2 = 0; u2 < l2; u2++) {
          var d2 = a2.readUshort(e4, r3) + o2;
          r3 += 2;
          var f2 = a2.readUshort(e4, d2);
          s2.seqs.push(a2.readUshorts(e4, d2 + 2, f2));
        }
      } else if (n3 == 4) for (s2.vals = [], l2 = a2.readUshort(e4, r3), r3 += 2, u2 = 0; u2 < l2; u2++) {
        var p2 = a2.readUshort(e4, r3);
        r3 += 2, s2.vals.push(t2.GSUB.readLigatureSet(e4, o2 + p2));
      }
      else if (n3 == 5 && s2.fmt == 2) {
        if (s2.fmt == 2) {
          var m2 = a2.readUshort(e4, r3);
          r3 += 2, s2.cDef = t2._lctf.readClassDef(e4, o2 + m2), s2.scset = [];
          var h2 = a2.readUshort(e4, r3);
          for (r3 += 2, u2 = 0; u2 < h2; u2++) {
            var g2 = a2.readUshort(e4, r3);
            r3 += 2, s2.scset.push(g2 == 0 ? null : t2.GSUB.readSubClassSet(e4, o2 + g2));
          }
        }
      } else if (n3 == 6 && s2.fmt == 3) {
        if (s2.fmt == 3) {
          for (u2 = 0; u2 < 3; u2++) {
            l2 = a2.readUshort(e4, r3), r3 += 2;
            for (var _2 = [], v2 = 0; v2 < l2; v2++) _2.push(t2._lctf.readCoverage(e4, o2 + a2.readUshort(e4, r3 + 2 * v2)));
            r3 += 2 * l2, u2 == 0 && (s2.backCvg = _2), u2 == 1 && (s2.inptCvg = _2), u2 == 2 && (s2.ahedCvg = _2);
          }
          l2 = a2.readUshort(e4, r3), r3 += 2, s2.lookupRec = t2.GSUB.readSubstLookupRecords(e4, r3, l2);
        }
      } else {
        if (n3 == 7 && s2.fmt == 1) {
          var y2 = a2.readUshort(e4, r3);
          r3 += 2;
          var b2 = a2.readUint(e4, r3);
          if (r3 += 4, i2.ltype == 9) i2.ltype = y2;
          else if (i2.ltype != y2) throw `invalid extension substitution`;
          return t2.GSUB.subt(e4, i2.ltype, o2 + b2);
        }
        console.debug(`unsupported GSUB table LookupType`, n3, `format`, s2.fmt);
      }
      return s2;
    }, t2.GSUB.readSubClassSet = function(e4, n3) {
      var r3 = t2._bin.readUshort, i2 = n3, a2 = [], o2 = r3(e4, n3);
      n3 += 2;
      for (var s2 = 0; s2 < o2; s2++) {
        var c2 = r3(e4, n3);
        n3 += 2, a2.push(t2.GSUB.readSubClassRule(e4, i2 + c2));
      }
      return a2;
    }, t2.GSUB.readSubClassRule = function(e4, n3) {
      var r3 = t2._bin.readUshort, i2 = {}, a2 = r3(e4, n3), o2 = r3(e4, n3 += 2);
      n3 += 2, i2.input = [];
      for (var s2 = 0; s2 < a2 - 1; s2++) i2.input.push(r3(e4, n3)), n3 += 2;
      return i2.substLookupRecords = t2.GSUB.readSubstLookupRecords(e4, n3, o2), i2;
    }, t2.GSUB.readSubstLookupRecords = function(e4, n3, r3) {
      for (var i2 = t2._bin.readUshort, a2 = [], o2 = 0; o2 < r3; o2++) a2.push(i2(e4, n3), i2(e4, n3 + 2)), n3 += 4;
      return a2;
    }, t2.GSUB.readChainSubClassSet = function(e4, n3) {
      var r3 = t2._bin, i2 = n3, a2 = [], o2 = r3.readUshort(e4, n3);
      n3 += 2;
      for (var s2 = 0; s2 < o2; s2++) {
        var c2 = r3.readUshort(e4, n3);
        n3 += 2, a2.push(t2.GSUB.readChainSubClassRule(e4, i2 + c2));
      }
      return a2;
    }, t2.GSUB.readChainSubClassRule = function(e4, n3) {
      for (var r3 = t2._bin, i2 = {}, a2 = [`backtrack`, `input`, `lookahead`], o2 = 0; o2 < a2.length; o2++) {
        var s2 = r3.readUshort(e4, n3);
        n3 += 2, o2 == 1 && s2--, i2[a2[o2]] = r3.readUshorts(e4, n3, s2), n3 += 2 * i2[a2[o2]].length;
      }
      return s2 = r3.readUshort(e4, n3), n3 += 2, i2.subst = r3.readUshorts(e4, n3, 2 * s2), n3 += 2 * i2.subst.length, i2;
    }, t2.GSUB.readLigatureSet = function(e4, n3) {
      var r3 = t2._bin, i2 = n3, a2 = [], o2 = r3.readUshort(e4, n3);
      n3 += 2;
      for (var s2 = 0; s2 < o2; s2++) {
        var c2 = r3.readUshort(e4, n3);
        n3 += 2, a2.push(t2.GSUB.readLigature(e4, i2 + c2));
      }
      return a2;
    }, t2.GSUB.readLigature = function(e4, n3) {
      var r3 = t2._bin, i2 = { chain: [] };
      i2.nglyph = r3.readUshort(e4, n3), n3 += 2;
      var a2 = r3.readUshort(e4, n3);
      n3 += 2;
      for (var o2 = 0; o2 < a2 - 1; o2++) i2.chain.push(r3.readUshort(e4, n3)), n3 += 2;
      return i2;
    }, t2.head = {}, t2.head.parse = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = {};
      return i2.readFixed(e4, n3), n3 += 4, a2.fontRevision = i2.readFixed(e4, n3), n3 += 4, i2.readUint(e4, n3), n3 += 4, i2.readUint(e4, n3), n3 += 4, a2.flags = i2.readUshort(e4, n3), n3 += 2, a2.unitsPerEm = i2.readUshort(e4, n3), n3 += 2, a2.created = i2.readUint64(e4, n3), n3 += 8, a2.modified = i2.readUint64(e4, n3), n3 += 8, a2.xMin = i2.readShort(e4, n3), n3 += 2, a2.yMin = i2.readShort(e4, n3), n3 += 2, a2.xMax = i2.readShort(e4, n3), n3 += 2, a2.yMax = i2.readShort(e4, n3), n3 += 2, a2.macStyle = i2.readUshort(e4, n3), n3 += 2, a2.lowestRecPPEM = i2.readUshort(e4, n3), n3 += 2, a2.fontDirectionHint = i2.readShort(e4, n3), n3 += 2, a2.indexToLocFormat = i2.readShort(e4, n3), n3 += 2, a2.glyphDataFormat = i2.readShort(e4, n3), n3 += 2, a2;
    }, t2.hhea = {}, t2.hhea.parse = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = {};
      return i2.readFixed(e4, n3), n3 += 4, a2.ascender = i2.readShort(e4, n3), n3 += 2, a2.descender = i2.readShort(e4, n3), n3 += 2, a2.lineGap = i2.readShort(e4, n3), n3 += 2, a2.advanceWidthMax = i2.readUshort(e4, n3), n3 += 2, a2.minLeftSideBearing = i2.readShort(e4, n3), n3 += 2, a2.minRightSideBearing = i2.readShort(e4, n3), n3 += 2, a2.xMaxExtent = i2.readShort(e4, n3), n3 += 2, a2.caretSlopeRise = i2.readShort(e4, n3), n3 += 2, a2.caretSlopeRun = i2.readShort(e4, n3), n3 += 2, a2.caretOffset = i2.readShort(e4, n3), n3 += 2, n3 += 8, a2.metricDataFormat = i2.readShort(e4, n3), n3 += 2, a2.numberOfHMetrics = i2.readUshort(e4, n3), n3 += 2, a2;
    }, t2.hmtx = {}, t2.hmtx.parse = function(e4, n3, r3, i2) {
      for (var a2 = t2._bin, o2 = { aWidth: [], lsBearing: [] }, s2 = 0, c2 = 0, l2 = 0; l2 < i2.maxp.numGlyphs; l2++) l2 < i2.hhea.numberOfHMetrics && (s2 = a2.readUshort(e4, n3), n3 += 2, c2 = a2.readShort(e4, n3), n3 += 2), o2.aWidth.push(s2), o2.lsBearing.push(c2);
      return o2;
    }, t2.kern = {}, t2.kern.parse = function(e4, n3, r3, i2) {
      var a2 = t2._bin, o2 = a2.readUshort(e4, n3);
      if (n3 += 2, o2 == 1) return t2.kern.parseV1(e4, n3 - 2, r3, i2);
      var s2 = a2.readUshort(e4, n3);
      n3 += 2;
      for (var c2 = { glyph1: [], rval: [] }, l2 = 0; l2 < s2; l2++) {
        n3 += 2, r3 = a2.readUshort(e4, n3), n3 += 2;
        var u2 = a2.readUshort(e4, n3);
        n3 += 2;
        var d2 = u2 >>> 8;
        if ((d2 &= 15) != 0) throw `unknown kern table format: ` + d2;
        n3 = t2.kern.readFormat0(e4, n3, c2);
      }
      return c2;
    }, t2.kern.parseV1 = function(e4, n3, r3, i2) {
      var a2 = t2._bin;
      a2.readFixed(e4, n3), n3 += 4;
      var o2 = a2.readUint(e4, n3);
      n3 += 4;
      for (var s2 = { glyph1: [], rval: [] }, c2 = 0; c2 < o2; c2++) {
        a2.readUint(e4, n3), n3 += 4;
        var l2 = a2.readUshort(e4, n3);
        n3 += 2, a2.readUshort(e4, n3), n3 += 2;
        var u2 = l2 >>> 8;
        if ((u2 &= 15) != 0) throw `unknown kern table format: ` + u2;
        n3 = t2.kern.readFormat0(e4, n3, s2);
      }
      return s2;
    }, t2.kern.readFormat0 = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = -1, o2 = i2.readUshort(e4, n3);
      n3 += 2, i2.readUshort(e4, n3), n3 += 2, i2.readUshort(e4, n3), n3 += 2, i2.readUshort(e4, n3), n3 += 2;
      for (var s2 = 0; s2 < o2; s2++) {
        var c2 = i2.readUshort(e4, n3);
        n3 += 2;
        var l2 = i2.readUshort(e4, n3);
        n3 += 2;
        var u2 = i2.readShort(e4, n3);
        n3 += 2, c2 != a2 && (r3.glyph1.push(c2), r3.rval.push({ glyph2: [], vals: [] }));
        var d2 = r3.rval[r3.rval.length - 1];
        d2.glyph2.push(l2), d2.vals.push(u2), a2 = c2;
      }
      return n3;
    }, t2.loca = {}, t2.loca.parse = function(e4, n3, r3, i2) {
      var a2 = t2._bin, o2 = [], s2 = i2.head.indexToLocFormat, c2 = i2.maxp.numGlyphs + 1;
      if (s2 == 0) for (var l2 = 0; l2 < c2; l2++) o2.push(a2.readUshort(e4, n3 + (l2 << 1)) << 1);
      if (s2 == 1) for (l2 = 0; l2 < c2; l2++) o2.push(a2.readUint(e4, n3 + (l2 << 2)));
      return o2;
    }, t2.maxp = {}, t2.maxp.parse = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = {}, o2 = i2.readUint(e4, n3);
      return n3 += 4, a2.numGlyphs = i2.readUshort(e4, n3), n3 += 2, o2 == 65536 && (a2.maxPoints = i2.readUshort(e4, n3), n3 += 2, a2.maxContours = i2.readUshort(e4, n3), n3 += 2, a2.maxCompositePoints = i2.readUshort(e4, n3), n3 += 2, a2.maxCompositeContours = i2.readUshort(e4, n3), n3 += 2, a2.maxZones = i2.readUshort(e4, n3), n3 += 2, a2.maxTwilightPoints = i2.readUshort(e4, n3), n3 += 2, a2.maxStorage = i2.readUshort(e4, n3), n3 += 2, a2.maxFunctionDefs = i2.readUshort(e4, n3), n3 += 2, a2.maxInstructionDefs = i2.readUshort(e4, n3), n3 += 2, a2.maxStackElements = i2.readUshort(e4, n3), n3 += 2, a2.maxSizeOfInstructions = i2.readUshort(e4, n3), n3 += 2, a2.maxComponentElements = i2.readUshort(e4, n3), n3 += 2, a2.maxComponentDepth = i2.readUshort(e4, n3), n3 += 2), a2;
    }, t2.name = {}, t2.name.parse = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = {};
      i2.readUshort(e4, n3), n3 += 2;
      var o2 = i2.readUshort(e4, n3);
      n3 += 2, i2.readUshort(e4, n3);
      for (var s2, c2 = [`copyright`, `fontFamily`, `fontSubfamily`, `ID`, `fullName`, `version`, `postScriptName`, `trademark`, `manufacturer`, `designer`, `description`, `urlVendor`, `urlDesigner`, `licence`, `licenceURL`, `---`, `typoFamilyName`, `typoSubfamilyName`, `compatibleFull`, `sampleText`, `postScriptCID`, `wwsFamilyName`, `wwsSubfamilyName`, `lightPalette`, `darkPalette`], l2 = n3 += 2, u2 = 0; u2 < o2; u2++) {
        var d2 = i2.readUshort(e4, n3);
        n3 += 2;
        var f2 = i2.readUshort(e4, n3);
        n3 += 2;
        var p2 = i2.readUshort(e4, n3);
        n3 += 2;
        var m2 = i2.readUshort(e4, n3);
        n3 += 2;
        var h2 = i2.readUshort(e4, n3);
        n3 += 2;
        var g2 = i2.readUshort(e4, n3);
        n3 += 2;
        var _2, v2 = c2[m2], y2 = l2 + 12 * o2 + g2;
        if (d2 == 0) _2 = i2.readUnicode(e4, y2, h2 / 2);
        else if (d2 == 3 && f2 == 0) _2 = i2.readUnicode(e4, y2, h2 / 2);
        else if (f2 == 0) _2 = i2.readASCII(e4, y2, h2);
        else if (f2 == 1) _2 = i2.readUnicode(e4, y2, h2 / 2);
        else if (f2 == 3) _2 = i2.readUnicode(e4, y2, h2 / 2);
        else {
          if (d2 != 1) throw `unknown encoding ` + f2 + `, platformID: ` + d2;
          _2 = i2.readASCII(e4, y2, h2), console.debug(`reading unknown MAC encoding ` + f2 + ` as ASCII`);
        }
        var b2 = `p` + d2 + `,` + p2.toString(16);
        a2[b2] ?? (a2[b2] = {}), a2[b2][v2 === void 0 ? m2 : v2] = _2, a2[b2]._lang = p2;
      }
      for (var x2 in a2) if (a2[x2].postScriptName != null && a2[x2]._lang == 1033) return a2[x2];
      for (var x2 in a2) if (a2[x2].postScriptName != null && a2[x2]._lang == 0) return a2[x2];
      for (var x2 in a2) if (a2[x2].postScriptName != null && a2[x2]._lang == 3084) return a2[x2];
      for (var x2 in a2) if (a2[x2].postScriptName != null) return a2[x2];
      for (var x2 in a2) {
        s2 = x2;
        break;
      }
      return console.debug(`returning name table with languageID ` + a2[s2]._lang), a2[s2];
    }, t2[`OS/2`] = {}, t2[`OS/2`].parse = function(e4, n3, r3) {
      var i2 = t2._bin.readUshort(e4, n3);
      n3 += 2;
      var a2 = {};
      if (i2 == 0) t2[`OS/2`].version0(e4, n3, a2);
      else if (i2 == 1) t2[`OS/2`].version1(e4, n3, a2);
      else if (i2 == 2 || i2 == 3 || i2 == 4) t2[`OS/2`].version2(e4, n3, a2);
      else {
        if (i2 != 5) throw `unknown OS/2 table version: ` + i2;
        t2[`OS/2`].version5(e4, n3, a2);
      }
      return a2;
    }, t2[`OS/2`].version0 = function(e4, n3, r3) {
      var i2 = t2._bin;
      return r3.xAvgCharWidth = i2.readShort(e4, n3), n3 += 2, r3.usWeightClass = i2.readUshort(e4, n3), n3 += 2, r3.usWidthClass = i2.readUshort(e4, n3), n3 += 2, r3.fsType = i2.readUshort(e4, n3), n3 += 2, r3.ySubscriptXSize = i2.readShort(e4, n3), n3 += 2, r3.ySubscriptYSize = i2.readShort(e4, n3), n3 += 2, r3.ySubscriptXOffset = i2.readShort(e4, n3), n3 += 2, r3.ySubscriptYOffset = i2.readShort(e4, n3), n3 += 2, r3.ySuperscriptXSize = i2.readShort(e4, n3), n3 += 2, r3.ySuperscriptYSize = i2.readShort(e4, n3), n3 += 2, r3.ySuperscriptXOffset = i2.readShort(e4, n3), n3 += 2, r3.ySuperscriptYOffset = i2.readShort(e4, n3), n3 += 2, r3.yStrikeoutSize = i2.readShort(e4, n3), n3 += 2, r3.yStrikeoutPosition = i2.readShort(e4, n3), n3 += 2, r3.sFamilyClass = i2.readShort(e4, n3), n3 += 2, r3.panose = i2.readBytes(e4, n3, 10), n3 += 10, r3.ulUnicodeRange1 = i2.readUint(e4, n3), n3 += 4, r3.ulUnicodeRange2 = i2.readUint(e4, n3), n3 += 4, r3.ulUnicodeRange3 = i2.readUint(e4, n3), n3 += 4, r3.ulUnicodeRange4 = i2.readUint(e4, n3), n3 += 4, r3.achVendID = [i2.readInt8(e4, n3), i2.readInt8(e4, n3 + 1), i2.readInt8(e4, n3 + 2), i2.readInt8(e4, n3 + 3)], n3 += 4, r3.fsSelection = i2.readUshort(e4, n3), n3 += 2, r3.usFirstCharIndex = i2.readUshort(e4, n3), n3 += 2, r3.usLastCharIndex = i2.readUshort(e4, n3), n3 += 2, r3.sTypoAscender = i2.readShort(e4, n3), n3 += 2, r3.sTypoDescender = i2.readShort(e4, n3), n3 += 2, r3.sTypoLineGap = i2.readShort(e4, n3), n3 += 2, r3.usWinAscent = i2.readUshort(e4, n3), n3 += 2, r3.usWinDescent = i2.readUshort(e4, n3), n3 += 2;
    }, t2[`OS/2`].version1 = function(e4, n3, r3) {
      var i2 = t2._bin;
      return n3 = t2[`OS/2`].version0(e4, n3, r3), r3.ulCodePageRange1 = i2.readUint(e4, n3), n3 += 4, r3.ulCodePageRange2 = i2.readUint(e4, n3), n3 += 4;
    }, t2[`OS/2`].version2 = function(e4, n3, r3) {
      var i2 = t2._bin;
      return n3 = t2[`OS/2`].version1(e4, n3, r3), r3.sxHeight = i2.readShort(e4, n3), n3 += 2, r3.sCapHeight = i2.readShort(e4, n3), n3 += 2, r3.usDefault = i2.readUshort(e4, n3), n3 += 2, r3.usBreak = i2.readUshort(e4, n3), n3 += 2, r3.usMaxContext = i2.readUshort(e4, n3), n3 += 2;
    }, t2[`OS/2`].version5 = function(e4, n3, r3) {
      var i2 = t2._bin;
      return n3 = t2[`OS/2`].version2(e4, n3, r3), r3.usLowerOpticalPointSize = i2.readUshort(e4, n3), n3 += 2, r3.usUpperOpticalPointSize = i2.readUshort(e4, n3), n3 += 2;
    }, t2.post = {}, t2.post.parse = function(e4, n3, r3) {
      var i2 = t2._bin, a2 = {};
      return a2.version = i2.readFixed(e4, n3), n3 += 4, a2.italicAngle = i2.readFixed(e4, n3), n3 += 4, a2.underlinePosition = i2.readShort(e4, n3), n3 += 2, a2.underlineThickness = i2.readShort(e4, n3), n3 += 2, a2;
    }, t2 ?? (t2 = {}), t2.U ?? (t2.U = {}), t2.U.codeToGlyph = function(e4, t3) {
      var n3 = e4.cmap, r3 = -1;
      if (n3.p0e4 == null ? n3.p3e1 == null ? n3.p1e0 == null ? n3.p0e3 != null && (r3 = n3.p0e3) : r3 = n3.p1e0 : r3 = n3.p3e1 : r3 = n3.p0e4, r3 == -1) throw `no familiar platform and encoding!`;
      var i2 = n3.tables[r3];
      if (i2.format == 0) return t3 >= i2.map.length ? 0 : i2.map[t3];
      if (i2.format == 4) {
        for (var a2 = -1, o2 = 0; o2 < i2.endCount.length; o2++) if (t3 <= i2.endCount[o2]) {
          a2 = o2;
          break;
        }
        return a2 == -1 || i2.startCount[a2] > t3 ? 0 : 65535 & (i2.idRangeOffset[a2] == 0 ? t3 + i2.idDelta[a2] : i2.glyphIdArray[t3 - i2.startCount[a2] + (i2.idRangeOffset[a2] >> 1) - (i2.idRangeOffset.length - a2)]);
      }
      if (i2.format == 12) {
        if (t3 > i2.groups[i2.groups.length - 1][1]) return 0;
        for (o2 = 0; o2 < i2.groups.length; o2++) {
          var s2 = i2.groups[o2];
          if (s2[0] <= t3 && t3 <= s2[1]) return s2[2] + (t3 - s2[0]);
        }
        return 0;
      }
      throw `unknown cmap table format ` + i2.format;
    }, t2.U.glyphToPath = function(e4, n3) {
      var r3 = { cmds: [], crds: [] };
      if (e4.SVG && e4.SVG.entries[n3]) {
        var i2 = e4.SVG.entries[n3];
        return i2 == null ? r3 : (typeof i2 == `string` && (i2 = t2.SVG.toPath(i2), e4.SVG.entries[n3] = i2), i2);
      }
      if (e4.CFF) {
        var a2 = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: e4.CFF.Private ? e4.CFF.Private.defaultWidthX : 0, open: false }, o2 = e4.CFF, s2 = e4.CFF.Private;
        if (o2.ROS) {
          for (var c2 = 0; o2.FDSelect[c2 + 2] <= n3; ) c2 += 2;
          s2 = o2.FDArray[o2.FDSelect[c2 + 1]].Private;
        }
        t2.U._drawCFF(e4.CFF.CharStrings[n3], a2, o2, s2, r3);
      } else e4.glyf && t2.U._drawGlyf(n3, e4, r3);
      return r3;
    }, t2.U._drawGlyf = function(e4, n3, r3) {
      var i2 = n3.glyf[e4];
      i2 ?? (i2 = n3.glyf[e4] = t2.glyf._parseGlyf(n3, e4)), i2 != null && (i2.noc > -1 ? t2.U._simpleGlyph(i2, r3) : t2.U._compoGlyph(i2, n3, r3));
    }, t2.U._simpleGlyph = function(e4, n3) {
      for (var r3 = 0; r3 < e4.noc; r3++) {
        for (var i2 = r3 == 0 ? 0 : e4.endPts[r3 - 1] + 1, a2 = e4.endPts[r3], o2 = i2; o2 <= a2; o2++) {
          var s2 = o2 == i2 ? a2 : o2 - 1, c2 = o2 == a2 ? i2 : o2 + 1, l2 = 1 & e4.flags[o2], u2 = 1 & e4.flags[s2], d2 = 1 & e4.flags[c2], f2 = e4.xs[o2], p2 = e4.ys[o2];
          if (o2 == i2) {
            if (l2) {
              if (!u2) {
                t2.U.P.moveTo(n3, f2, p2);
                continue;
              }
              t2.U.P.moveTo(n3, e4.xs[s2], e4.ys[s2]);
            } else u2 ? t2.U.P.moveTo(n3, e4.xs[s2], e4.ys[s2]) : t2.U.P.moveTo(n3, (e4.xs[s2] + f2) / 2, (e4.ys[s2] + p2) / 2);
          }
          l2 ? u2 && t2.U.P.lineTo(n3, f2, p2) : d2 ? t2.U.P.qcurveTo(n3, f2, p2, e4.xs[c2], e4.ys[c2]) : t2.U.P.qcurveTo(n3, f2, p2, (f2 + e4.xs[c2]) / 2, (p2 + e4.ys[c2]) / 2);
        }
        t2.U.P.closePath(n3);
      }
    }, t2.U._compoGlyph = function(e4, n3, r3) {
      for (var i2 = 0; i2 < e4.parts.length; i2++) {
        var a2 = { cmds: [], crds: [] }, o2 = e4.parts[i2];
        t2.U._drawGlyf(o2.glyphIndex, n3, a2);
        for (var s2 = o2.m, c2 = 0; c2 < a2.crds.length; c2 += 2) {
          var l2 = a2.crds[c2], u2 = a2.crds[c2 + 1];
          r3.crds.push(l2 * s2.a + u2 * s2.b + s2.tx), r3.crds.push(l2 * s2.c + u2 * s2.d + s2.ty);
        }
        for (c2 = 0; c2 < a2.cmds.length; c2++) r3.cmds.push(a2.cmds[c2]);
      }
    }, t2.U._getGlyphClass = function(e4, n3) {
      var r3 = t2._lctf.getInterval(n3, e4);
      return r3 == -1 ? 0 : n3[r3 + 2];
    }, t2.U._applySubs = function(e4, n3, r3, i2) {
      for (var a2 = e4.length - n3 - 1, o2 = 0; o2 < r3.tabs.length; o2++) if (r3.tabs[o2] != null) {
        var s2, c2 = r3.tabs[o2];
        if (!c2.coverage || (s2 = t2._lctf.coverageIndex(c2.coverage, e4[n3])) != -1) {
          if (r3.ltype == 1) e4[n3], e4[n3] = c2.fmt == 1 ? e4[n3] + c2.delta : c2.newg[s2];
          else if (r3.ltype == 4) for (var l2 = c2.vals[s2], u2 = 0; u2 < l2.length; u2++) {
            var d2 = l2[u2], f2 = d2.chain.length;
            if (!(f2 > a2)) {
              for (var p2 = true, m2 = 0, h2 = 0; h2 < f2; h2++) {
                for (; e4[n3 + m2 + (1 + h2)] == -1; ) m2++;
                d2.chain[h2] != e4[n3 + m2 + (1 + h2)] && (p2 = false);
              }
              if (p2) {
                for (e4[n3] = d2.nglyph, h2 = 0; h2 < f2 + m2; h2++) e4[n3 + h2 + 1] = -1;
                break;
              }
            }
          }
          else if (r3.ltype == 5 && c2.fmt == 2) for (var g2 = t2._lctf.getInterval(c2.cDef, e4[n3]), _2 = c2.cDef[g2 + 2], v2 = c2.scset[_2], y2 = 0; y2 < v2.length; y2++) {
            var b2 = v2[y2], x2 = b2.input;
            if (!(x2.length > a2)) {
              for (p2 = true, h2 = 0; h2 < x2.length; h2++) {
                var S2 = t2._lctf.getInterval(c2.cDef, e4[n3 + 1 + h2]);
                if (g2 == -1 && c2.cDef[S2 + 2] != x2[h2]) {
                  p2 = false;
                  break;
                }
              }
              if (p2) {
                var C2 = b2.substLookupRecords;
                for (u2 = 0; u2 < C2.length; u2 += 2) C2[u2], C2[u2 + 1];
              }
            }
          }
          else if (r3.ltype == 6 && c2.fmt == 3) {
            if (!t2.U._glsCovered(e4, c2.backCvg, n3 - c2.backCvg.length) || !t2.U._glsCovered(e4, c2.inptCvg, n3) || !t2.U._glsCovered(e4, c2.ahedCvg, n3 + c2.inptCvg.length)) continue;
            var w2 = c2.lookupRec;
            for (y2 = 0; y2 < w2.length; y2 += 2) {
              g2 = w2[y2];
              var T2 = i2[w2[y2 + 1]];
              t2.U._applySubs(e4, n3 + g2, T2, i2);
            }
          }
        }
      }
    }, t2.U._glsCovered = function(e4, n3, r3) {
      for (var i2 = 0; i2 < n3.length; i2++) if (t2._lctf.coverageIndex(n3[i2], e4[r3 + i2]) == -1) return false;
      return true;
    }, t2.U.glyphsToPath = function(e4, n3, r3) {
      for (var i2 = { cmds: [], crds: [] }, a2 = 0, o2 = 0; o2 < n3.length; o2++) {
        var s2 = n3[o2];
        if (s2 != -1) {
          for (var c2 = o2 < n3.length - 1 && n3[o2 + 1] != -1 ? n3[o2 + 1] : 0, l2 = t2.U.glyphToPath(e4, s2), u2 = 0; u2 < l2.crds.length; u2 += 2) i2.crds.push(l2.crds[u2] + a2), i2.crds.push(l2.crds[u2 + 1]);
          for (r3 && i2.cmds.push(r3), u2 = 0; u2 < l2.cmds.length; u2++) i2.cmds.push(l2.cmds[u2]);
          r3 && i2.cmds.push(`X`), a2 += e4.hmtx.aWidth[s2], o2 < n3.length - 1 && (a2 += t2.U.getPairAdjustment(e4, s2, c2));
        }
      }
      return i2;
    }, t2.U.P = {}, t2.U.P.moveTo = function(e4, t3, n3) {
      e4.cmds.push(`M`), e4.crds.push(t3, n3);
    }, t2.U.P.lineTo = function(e4, t3, n3) {
      e4.cmds.push(`L`), e4.crds.push(t3, n3);
    }, t2.U.P.curveTo = function(e4, t3, n3, r3, i2, a2, o2) {
      e4.cmds.push(`C`), e4.crds.push(t3, n3, r3, i2, a2, o2);
    }, t2.U.P.qcurveTo = function(e4, t3, n3, r3, i2) {
      e4.cmds.push(`Q`), e4.crds.push(t3, n3, r3, i2);
    }, t2.U.P.closePath = function(e4) {
      e4.cmds.push(`Z`);
    }, t2.U._drawCFF = function(e4, n3, r3, i2, a2) {
      for (var o2 = n3.stack, s2 = n3.nStems, c2 = n3.haveWidth, l2 = n3.width, u2 = n3.open, d2 = 0, f2 = n3.x, p2 = n3.y, m2 = 0, h2 = 0, g2 = 0, _2 = 0, v2 = 0, y2 = 0, b2 = 0, x2 = 0, S2 = 0, C2 = 0, w2 = { val: 0, size: 0 }; d2 < e4.length; ) {
        t2.CFF.getCharString(e4, d2, w2);
        var T2 = w2.val;
        if (d2 += w2.size, T2 == `o1` || T2 == `o18`) o2.length % 2 != 0 && !c2 && (l2 = o2.shift() + i2.nominalWidthX), s2 += o2.length >> 1, o2.length = 0, c2 = true;
        else if (T2 == `o3` || T2 == `o23`) o2.length % 2 != 0 && !c2 && (l2 = o2.shift() + i2.nominalWidthX), s2 += o2.length >> 1, o2.length = 0, c2 = true;
        else if (T2 == `o4`) o2.length > 1 && !c2 && (l2 = o2.shift() + i2.nominalWidthX, c2 = true), u2 && t2.U.P.closePath(a2), p2 += o2.pop(), t2.U.P.moveTo(a2, f2, p2), u2 = true;
        else if (T2 == `o5`) for (; o2.length > 0; ) f2 += o2.shift(), p2 += o2.shift(), t2.U.P.lineTo(a2, f2, p2);
        else if (T2 == `o6` || T2 == `o7`) for (var E2 = o2.length, D2 = T2 == `o6`, O2 = 0; O2 < E2; O2++) {
          var k2 = o2.shift();
          D2 ? f2 += k2 : p2 += k2, D2 = !D2, t2.U.P.lineTo(a2, f2, p2);
        }
        else if (T2 == `o8` || T2 == `o24`) {
          E2 = o2.length;
          for (var A2 = 0; A2 + 6 <= E2; ) m2 = f2 + o2.shift(), h2 = p2 + o2.shift(), g2 = m2 + o2.shift(), _2 = h2 + o2.shift(), f2 = g2 + o2.shift(), p2 = _2 + o2.shift(), t2.U.P.curveTo(a2, m2, h2, g2, _2, f2, p2), A2 += 6;
          T2 == `o24` && (f2 += o2.shift(), p2 += o2.shift(), t2.U.P.lineTo(a2, f2, p2));
        } else {
          if (T2 == `o11`) break;
          if (T2 == `o1234` || T2 == `o1235` || T2 == `o1236` || T2 == `o1237`) T2 == `o1234` && (h2 = p2, g2 = (m2 = f2 + o2.shift()) + o2.shift(), C2 = _2 = h2 + o2.shift(), y2 = _2, x2 = p2, f2 = (b2 = (v2 = (S2 = g2 + o2.shift()) + o2.shift()) + o2.shift()) + o2.shift(), t2.U.P.curveTo(a2, m2, h2, g2, _2, S2, C2), t2.U.P.curveTo(a2, v2, y2, b2, x2, f2, p2)), T2 == `o1235` && (m2 = f2 + o2.shift(), h2 = p2 + o2.shift(), g2 = m2 + o2.shift(), _2 = h2 + o2.shift(), S2 = g2 + o2.shift(), C2 = _2 + o2.shift(), v2 = S2 + o2.shift(), y2 = C2 + o2.shift(), b2 = v2 + o2.shift(), x2 = y2 + o2.shift(), f2 = b2 + o2.shift(), p2 = x2 + o2.shift(), o2.shift(), t2.U.P.curveTo(a2, m2, h2, g2, _2, S2, C2), t2.U.P.curveTo(a2, v2, y2, b2, x2, f2, p2)), T2 == `o1236` && (m2 = f2 + o2.shift(), h2 = p2 + o2.shift(), g2 = m2 + o2.shift(), C2 = _2 = h2 + o2.shift(), y2 = _2, b2 = (v2 = (S2 = g2 + o2.shift()) + o2.shift()) + o2.shift(), x2 = y2 + o2.shift(), f2 = b2 + o2.shift(), t2.U.P.curveTo(a2, m2, h2, g2, _2, S2, C2), t2.U.P.curveTo(a2, v2, y2, b2, x2, f2, p2)), T2 == `o1237` && (m2 = f2 + o2.shift(), h2 = p2 + o2.shift(), g2 = m2 + o2.shift(), _2 = h2 + o2.shift(), S2 = g2 + o2.shift(), C2 = _2 + o2.shift(), v2 = S2 + o2.shift(), y2 = C2 + o2.shift(), b2 = v2 + o2.shift(), x2 = y2 + o2.shift(), Math.abs(b2 - f2) > Math.abs(x2 - p2) ? f2 = b2 + o2.shift() : p2 = x2 + o2.shift(), t2.U.P.curveTo(a2, m2, h2, g2, _2, S2, C2), t2.U.P.curveTo(a2, v2, y2, b2, x2, f2, p2));
          else if (T2 == `o14`) {
            if (o2.length > 0 && !c2 && (l2 = o2.shift() + r3.nominalWidthX, c2 = true), o2.length == 4) {
              var j2 = o2.shift(), M2 = o2.shift(), N2 = o2.shift(), P2 = o2.shift(), F2 = t2.CFF.glyphBySE(r3, N2), I2 = t2.CFF.glyphBySE(r3, P2);
              t2.U._drawCFF(r3.CharStrings[F2], n3, r3, i2, a2), n3.x = j2, n3.y = M2, t2.U._drawCFF(r3.CharStrings[I2], n3, r3, i2, a2);
            }
            u2 && (u2 = (t2.U.P.closePath(a2), false));
          } else if (T2 == `o19` || T2 == `o20`) o2.length % 2 != 0 && !c2 && (l2 = o2.shift() + i2.nominalWidthX), s2 += o2.length >> 1, o2.length = 0, c2 = true, d2 += s2 + 7 >> 3;
          else if (T2 == `o21`) o2.length > 2 && !c2 && (l2 = o2.shift() + i2.nominalWidthX, c2 = true), p2 += o2.pop(), f2 += o2.pop(), u2 && t2.U.P.closePath(a2), t2.U.P.moveTo(a2, f2, p2), u2 = true;
          else if (T2 == `o22`) o2.length > 1 && !c2 && (l2 = o2.shift() + i2.nominalWidthX, c2 = true), f2 += o2.pop(), u2 && t2.U.P.closePath(a2), t2.U.P.moveTo(a2, f2, p2), u2 = true;
          else if (T2 == `o25`) {
            for (; o2.length > 6; ) f2 += o2.shift(), p2 += o2.shift(), t2.U.P.lineTo(a2, f2, p2);
            m2 = f2 + o2.shift(), h2 = p2 + o2.shift(), g2 = m2 + o2.shift(), _2 = h2 + o2.shift(), f2 = g2 + o2.shift(), p2 = _2 + o2.shift(), t2.U.P.curveTo(a2, m2, h2, g2, _2, f2, p2);
          } else if (T2 == `o26`) for (o2.length % 2 && (f2 += o2.shift()); o2.length > 0; ) m2 = f2, h2 = p2 + o2.shift(), f2 = g2 = m2 + o2.shift(), p2 = (_2 = h2 + o2.shift()) + o2.shift(), t2.U.P.curveTo(a2, m2, h2, g2, _2, f2, p2);
          else if (T2 == `o27`) for (o2.length % 2 && (p2 += o2.shift()); o2.length > 0; ) h2 = p2, g2 = (m2 = f2 + o2.shift()) + o2.shift(), _2 = h2 + o2.shift(), f2 = g2 + o2.shift(), p2 = _2, t2.U.P.curveTo(a2, m2, h2, g2, _2, f2, p2);
          else if (T2 == `o10` || T2 == `o29`) {
            var ee2 = T2 == `o10` ? i2 : r3;
            if (o2.length == 0) console.debug(`error: empty stack`);
            else {
              var L2 = o2.pop(), R2 = ee2.Subrs[L2 + ee2.Bias];
              n3.x = f2, n3.y = p2, n3.nStems = s2, n3.haveWidth = c2, n3.width = l2, n3.open = u2, t2.U._drawCFF(R2, n3, r3, i2, a2), f2 = n3.x, p2 = n3.y, s2 = n3.nStems, c2 = n3.haveWidth, l2 = n3.width, u2 = n3.open;
            }
          } else if (T2 == `o30` || T2 == `o31`) {
            var z2 = o2.length, B2 = (A2 = 0, T2 == `o31`);
            for (A2 += z2 - (E2 = -3 & z2); A2 < E2; ) B2 ? (h2 = p2, g2 = (m2 = f2 + o2.shift()) + o2.shift(), p2 = (_2 = h2 + o2.shift()) + o2.shift(), E2 - A2 == 5 ? (f2 = g2 + o2.shift(), A2++) : f2 = g2, B2 = false) : (m2 = f2, h2 = p2 + o2.shift(), g2 = m2 + o2.shift(), _2 = h2 + o2.shift(), f2 = g2 + o2.shift(), E2 - A2 == 5 ? (p2 = _2 + o2.shift(), A2++) : p2 = _2, B2 = true), t2.U.P.curveTo(a2, m2, h2, g2, _2, f2, p2), A2 += 4;
          } else {
            if ((T2 + ``).charAt(0) == `o`) throw console.debug(`Unknown operation: ` + T2, e4), T2;
            o2.push(T2);
          }
        }
      }
      n3.x = f2, n3.y = p2, n3.nStems = s2, n3.haveWidth = c2, n3.width = l2, n3.open = u2;
    };
    var n2 = t2, r2 = { Typr: n2 };
    return e3.Typr = n2, e3.default = r2, Object.defineProperty(e3, "__esModule", { value: true }), e3;
  })({}).Typr;
}
function No() {
  return (function(e3) {
    var t2 = Uint8Array, n2 = Uint16Array, r2 = Uint32Array, i2 = new t2([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), a2 = new t2([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), o2 = new t2([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), s2 = function(e4, t3) {
      for (var i3 = new n2(31), a3 = 0; a3 < 31; ++a3) i3[a3] = t3 += 1 << e4[a3 - 1];
      var o3 = new r2(i3[30]);
      for (a3 = 1; a3 < 30; ++a3) for (var s3 = i3[a3]; s3 < i3[a3 + 1]; ++s3) o3[s3] = s3 - i3[a3] << 5 | a3;
      return [i3, o3];
    }, c2 = s2(i2, 2), l2 = c2[0], u2 = c2[1];
    l2[28] = 258, u2[258] = 28;
    for (var d2 = s2(a2, 0)[0], f2 = new n2(32768), p2 = 0; p2 < 32768; ++p2) {
      var m2 = (43690 & p2) >>> 1 | (21845 & p2) << 1;
      m2 = (61680 & (m2 = (52428 & m2) >>> 2 | (13107 & m2) << 2)) >>> 4 | (3855 & m2) << 4, f2[p2] = ((65280 & m2) >>> 8 | (255 & m2) << 8) >>> 1;
    }
    var h2 = function(e4, t3, r3) {
      for (var i3 = e4.length, a3 = 0, o3 = new n2(t3); a3 < i3; ++a3) ++o3[e4[a3] - 1];
      var s3, c3 = new n2(t3);
      for (a3 = 0; a3 < t3; ++a3) c3[a3] = c3[a3 - 1] + o3[a3 - 1] << 1;
      if (r3) {
        s3 = new n2(1 << t3);
        var l3 = 15 - t3;
        for (a3 = 0; a3 < i3; ++a3) if (e4[a3]) for (var u3 = a3 << 4 | e4[a3], d3 = t3 - e4[a3], p3 = c3[e4[a3] - 1]++ << d3, m3 = p3 | (1 << d3) - 1; p3 <= m3; ++p3) s3[f2[p3] >>> l3] = u3;
      } else for (s3 = new n2(i3), a3 = 0; a3 < i3; ++a3) e4[a3] && (s3[a3] = f2[c3[e4[a3] - 1]++] >>> 15 - e4[a3]);
      return s3;
    }, g2 = new t2(288);
    for (p2 = 0; p2 < 144; ++p2) g2[p2] = 8;
    for (p2 = 144; p2 < 256; ++p2) g2[p2] = 9;
    for (p2 = 256; p2 < 280; ++p2) g2[p2] = 7;
    for (p2 = 280; p2 < 288; ++p2) g2[p2] = 8;
    var _2 = new t2(32);
    for (p2 = 0; p2 < 32; ++p2) _2[p2] = 5;
    var v2 = h2(g2, 9, 1), y2 = h2(_2, 5, 1), b2 = function(e4) {
      for (var t3 = e4[0], n3 = 1; n3 < e4.length; ++n3) e4[n3] > t3 && (t3 = e4[n3]);
      return t3;
    }, x2 = function(e4, t3, n3) {
      var r3 = t3 / 8 | 0;
      return (e4[r3] | e4[r3 + 1] << 8) >> (7 & t3) & n3;
    }, S2 = function(e4, t3) {
      var n3 = t3 / 8 | 0;
      return (e4[n3] | e4[n3 + 1] << 8 | e4[n3 + 2] << 16) >> (7 & t3);
    }, C2 = [`unexpected EOF`, `invalid block type`, `invalid length/literal`, `invalid distance`, `stream finished`, `no stream handler`, , `no callback`, `invalid UTF-8 data`, `extra field too long`, `date not in range 1980-2099`, `filename too long`, `stream finishing`, `invalid zip data`], w2 = function(e4, t3, n3) {
      var r3 = Error(t3 || C2[e4]);
      if (r3.code = e4, Error.captureStackTrace && Error.captureStackTrace(r3, w2), !n3) throw r3;
      return r3;
    }, T2 = function(e4, s3, c3) {
      var u3 = e4.length;
      if (!u3 || c3 && !c3.l && u3 < 5) return s3 || new t2(0);
      var f3 = !s3 || c3, p3 = !c3 || c3.i;
      c3 || (c3 = {}), s3 || (s3 = new t2(3 * u3));
      var m3, g3 = function(e5) {
        var n3 = s3.length;
        if (e5 > n3) {
          var r3 = new t2(Math.max(2 * n3, e5));
          r3.set(s3), s3 = r3;
        }
      }, _3 = c3.f || 0, C3 = c3.p || 0, T3 = c3.b || 0, E3 = c3.l, D3 = c3.d, O2 = c3.m, k2 = c3.n, A2 = 8 * u3;
      do {
        if (!E3) {
          c3.f = _3 = x2(e4, C3, 1);
          var j2 = x2(e4, C3 + 1, 3);
          if (C3 += 3, !j2) {
            var M2 = e4[(V2 = ((m3 = C3) / 8 | 0) + (7 & m3 && 1) + 4) - 4] | e4[V2 - 3] << 8, N2 = V2 + M2;
            if (N2 > u3) {
              p3 && w2(0);
              break;
            }
            f3 && g3(T3 + M2), s3.set(e4.subarray(V2, N2), T3), c3.b = T3 += M2, c3.p = C3 = 8 * N2;
            continue;
          }
          if (j2 == 1) E3 = v2, D3 = y2, O2 = 9, k2 = 5;
          else if (j2 == 2) {
            var P2 = x2(e4, C3, 31) + 257, F2 = x2(e4, C3 + 10, 15) + 4, I2 = P2 + x2(e4, C3 + 5, 31) + 1;
            C3 += 14;
            for (var ee2 = new t2(I2), L2 = new t2(19), R2 = 0; R2 < F2; ++R2) L2[o2[R2]] = x2(e4, C3 + 3 * R2, 7);
            C3 += 3 * F2;
            var z2 = b2(L2), B2 = (1 << z2) - 1, te2 = h2(L2, z2, 1);
            for (R2 = 0; R2 < I2; ) {
              var V2, ne2 = te2[x2(e4, C3, B2)];
              if (C3 += 15 & ne2, (V2 = ne2 >>> 4) < 16) ee2[R2++] = V2;
              else {
                var H2 = 0, re2 = 0;
                for (V2 == 16 ? (re2 = 3 + x2(e4, C3, 3), C3 += 2, H2 = ee2[R2 - 1]) : V2 == 17 ? (re2 = 3 + x2(e4, C3, 7), C3 += 3) : V2 == 18 && (re2 = 11 + x2(e4, C3, 127), C3 += 7); re2--; ) ee2[R2++] = H2;
              }
            }
            var ie2 = ee2.subarray(0, P2), U2 = ee2.subarray(P2);
            O2 = b2(ie2), k2 = b2(U2), E3 = h2(ie2, O2, 1), D3 = h2(U2, k2, 1);
          } else w2(1);
          if (C3 > A2) {
            p3 && w2(0);
            break;
          }
        }
        f3 && g3(T3 + 131072);
        for (var ae2 = (1 << O2) - 1, oe2 = (1 << k2) - 1, se2 = C3; ; se2 = C3) {
          var ce2 = (H2 = E3[S2(e4, C3) & ae2]) >>> 4;
          if ((C3 += 15 & H2) > A2) {
            p3 && w2(0);
            break;
          }
          if (H2 || w2(2), ce2 < 256) s3[T3++] = ce2;
          else {
            if (ce2 == 256) {
              se2 = C3, E3 = null;
              break;
            }
            var le2 = ce2 - 254;
            if (ce2 > 264) {
              var ue2 = i2[R2 = ce2 - 257];
              le2 = x2(e4, C3, (1 << ue2) - 1) + l2[R2], C3 += ue2;
            }
            var de2 = D3[S2(e4, C3) & oe2], fe2 = de2 >>> 4;
            if (de2 || w2(3), C3 += 15 & de2, U2 = d2[fe2], fe2 > 3 && (ue2 = a2[fe2], U2 += S2(e4, C3) & (1 << ue2) - 1, C3 += ue2), C3 > A2) {
              p3 && w2(0);
              break;
            }
            f3 && g3(T3 + 131072);
            for (var pe2 = T3 + le2; T3 < pe2; T3 += 4) s3[T3] = s3[T3 - U2], s3[T3 + 1] = s3[T3 + 1 - U2], s3[T3 + 2] = s3[T3 + 2 - U2], s3[T3 + 3] = s3[T3 + 3 - U2];
            T3 = pe2;
          }
        }
        c3.l = E3, c3.p = se2, c3.b = T3, E3 && (_3 = 1, c3.m = O2, c3.d = D3, c3.n = k2);
      } while (!_3);
      return T3 == s3.length ? s3 : (function(e5, i3, a3) {
        (i3 == null || i3 < 0) && (i3 = 0), (a3 == null || a3 > e5.length) && (a3 = e5.length);
        var o3 = new (e5 instanceof n2 ? n2 : e5 instanceof r2 ? r2 : t2)(a3 - i3);
        return o3.set(e5.subarray(i3, a3)), o3;
      })(s3, 0, T3);
    }, E2 = new t2(0), D2 = typeof TextDecoder < `u` && new TextDecoder();
    try {
      D2.decode(E2, { stream: true });
    } catch {
    }
    return e3.convert_streams = function(e4) {
      var t3 = new DataView(e4), n3 = 0;
      function r3() {
        var e5 = t3.getUint16(n3);
        return n3 += 2, e5;
      }
      function i3() {
        var e5 = t3.getUint32(n3);
        return n3 += 4, e5;
      }
      function a3(e5) {
        _3.setUint16(v3, e5), v3 += 2;
      }
      function o3(e5) {
        _3.setUint32(v3, e5), v3 += 4;
      }
      for (var s3 = { signature: i3(), flavor: i3(), length: i3(), numTables: r3(), reserved: r3(), totalSfntSize: i3(), majorVersion: r3(), minorVersion: r3(), metaOffset: i3(), metaLength: i3(), metaOrigLength: i3(), privOffset: i3(), privLength: i3() }, c3 = 0; 2 ** c3 <= s3.numTables; ) c3++;
      c3--;
      for (var l3 = 16 * 2 ** c3, u3 = 16 * s3.numTables - l3, d3 = 12, f3 = [], p3 = 0; p3 < s3.numTables; p3++) f3.push({ tag: i3(), offset: i3(), compLength: i3(), origLength: i3(), origChecksum: i3() }), d3 += 16;
      var m3, h3 = new Uint8Array(12 + 16 * f3.length + f3.reduce((function(e5, t4) {
        return e5 + t4.origLength + 4;
      }), 0)), g3 = h3.buffer, _3 = new DataView(g3), v3 = 0;
      return o3(s3.flavor), a3(s3.numTables), a3(l3), a3(c3), a3(u3), f3.forEach((function(e5) {
        o3(e5.tag), o3(e5.origChecksum), o3(d3), o3(e5.origLength), e5.outOffset = d3, (d3 += e5.origLength) % 4 != 0 && (d3 += 4 - d3 % 4);
      })), f3.forEach((function(t4) {
        var n4, r4 = e4.slice(t4.offset, t4.offset + t4.compLength);
        if (t4.compLength != t4.origLength) {
          var i4 = new Uint8Array(t4.origLength);
          n4 = new Uint8Array(r4, 2), T2(n4, i4);
        } else i4 = new Uint8Array(r4);
        h3.set(i4, t4.outOffset);
        var a4 = 0;
        (d3 = t4.outOffset + t4.origLength) % 4 != 0 && (a4 = 4 - d3 % 4), h3.set(new Uint8Array(a4).buffer, t4.outOffset + t4.origLength), m3 = d3 + a4;
      })), g3.slice(0, m3);
    }, Object.defineProperty(e3, "__esModule", { value: true }), e3;
  })({}).convert_streams;
}
function Po(e3, t2) {
  let n2 = { M: 2, L: 2, Q: 4, C: 6, Z: 0 }, r2 = { C: `18g,ca,368,1kz`, D: `17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v`, R: `17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6`, L: `x9u,jff,a,fd,jv`, T: `4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n` }, i2;
  function a2(e4) {
    if (!i2) {
      let e5 = { R: 2, L: 1, D: 4, C: 16, U: 32, T: 8 };
      i2 = /* @__PURE__ */ new Map();
      for (let t3 in r2) {
        let n3 = 0;
        r2[t3].split(`,`).forEach((r3) => {
          let [a3, o3] = r3.split(`+`);
          a3 = parseInt(a3, 36), o3 = o3 ? parseInt(o3, 36) : 0, i2.set(n3 += a3, e5[t3]);
          for (let r4 = o3; r4--; ) i2.set(++n3, e5[t3]);
        });
      }
    }
    return i2.get(e4) || 32;
  }
  let o2 = [null, `isol`, `init`, `fina`, `medi`];
  function s2(e4) {
    let t3 = new Uint8Array(e4.length), n3 = 32, r3 = 1, i3 = -1;
    for (let o3 = 0; o3 < e4.length; o3++) {
      let s3 = e4.codePointAt(o3), c3 = a2(s3) | 0, l3 = 1;
      c3 & 8 || (n3 & 21 ? c3 & 22 ? (l3 = 3, (r3 === 1 || r3 === 3) && t3[i3]++) : c3 & 33 && (r3 === 2 || r3 === 4) && t3[i3]-- : n3 & 34 && (r3 === 2 || r3 === 4) && t3[i3]--, r3 = t3[o3] = l3, n3 = c3, i3 = o3, s3 > 65535 && o3++);
    }
    return t3;
  }
  function c2(t3, n3) {
    let r3 = [];
    for (let i4 = 0; i4 < n3.length; i4++) {
      let a3 = n3.codePointAt(i4);
      a3 > 65535 && i4++, r3.push(e3.U.codeToGlyph(t3, a3));
    }
    let i3 = t3.GSUB;
    if (i3) {
      let { lookupList: t4, featureList: a3 } = i3, c3, l3 = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, u3 = [];
      a3.forEach((i4) => {
        if (l3.test(i4.tag)) for (let a4 = 0; a4 < i4.tab.length; a4++) {
          if (u3[i4.tab[a4]]) continue;
          u3[i4.tab[a4]] = true;
          let l4 = t4[i4.tab[a4]], d3 = /^(isol|init|fina|medi)$/.test(i4.tag);
          d3 && !c3 && (c3 = s2(n3));
          for (let n4 = 0; n4 < r3.length; n4++) c3 && d3 && o2[c3[n4]] !== i4.tag || e3.U._applySubs(r3, n4, l4, t4);
        }
      });
    }
    return r3;
  }
  function l2(t3, n3) {
    let r3 = new Int16Array(n3.length * 3), i3 = 0;
    for (; i3 < n3.length; i3++) {
      let c3 = n3[i3];
      if (c3 === -1) continue;
      r3[i3 * 3 + 2] = t3.hmtx.aWidth[c3];
      let l3 = t3.GPOS;
      if (l3) {
        let d3 = l3.lookupList;
        for (let l4 = 0; l4 < d3.length; l4++) {
          let f3 = d3[l4];
          for (let l5 = 0; l5 < f3.tabs.length; l5++) {
            let d4 = f3.tabs[l5];
            if (f3.ltype === 1) {
              if (e3._lctf.coverageIndex(d4.coverage, c3) !== -1 && d4.pos) {
                s3(d4.pos, i3);
                break;
              }
            } else if (f3.ltype === 2) {
              let t4 = null, r4 = a3();
              if (r4 !== -1) {
                let a4 = e3._lctf.coverageIndex(d4.coverage, n3[r4]);
                if (a4 !== -1) {
                  if (d4.fmt === 1) {
                    let e4 = d4.pairsets[a4];
                    for (let n4 = 0; n4 < e4.length; n4++) e4[n4].gid2 === c3 && (t4 = e4[n4]);
                  } else if (d4.fmt === 2) {
                    let i4 = e3.U._getGlyphClass(n3[r4], d4.classDef1), a5 = e3.U._getGlyphClass(c3, d4.classDef2);
                    t4 = d4.matrix[i4][a5];
                  }
                  if (t4) {
                    t4.val1 && s3(t4.val1, r4), t4.val2 && s3(t4.val2, i3);
                    break;
                  }
                }
              }
            } else if (f3.ltype === 4) {
              let t4 = e3._lctf.coverageIndex(d4.markCoverage, c3);
              if (t4 !== -1) {
                let s4 = a3(o3), c4 = s4 === -1 ? -1 : e3._lctf.coverageIndex(d4.baseCoverage, n3[s4]);
                if (c4 !== -1) {
                  let e4 = d4.markArray[t4], n4 = d4.baseArray[c4][e4.markClass];
                  r3[i3 * 3] = n4.x - e4.x + r3[s4 * 3] - r3[s4 * 3 + 2], r3[i3 * 3 + 1] = n4.y - e4.y + r3[s4 * 3 + 1];
                  break;
                }
              }
            } else if (f3.ltype === 6) {
              let o4 = e3._lctf.coverageIndex(d4.mark1Coverage, c3);
              if (o4 !== -1) {
                let s4 = a3();
                if (s4 !== -1) {
                  let a4 = n3[s4];
                  if (u2(t3, a4) === 3) {
                    let t4 = e3._lctf.coverageIndex(d4.mark2Coverage, a4);
                    if (t4 !== -1) {
                      let e4 = d4.mark1Array[o4], n4 = d4.mark2Array[t4][e4.markClass];
                      r3[i3 * 3] = n4.x - e4.x + r3[s4 * 3] - r3[s4 * 3 + 2], r3[i3 * 3 + 1] = n4.y - e4.y + r3[s4 * 3 + 1];
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      } else if (t3.kern && !t3.cff) {
        let e4 = a3();
        if (e4 !== -1) {
          let i4 = t3.kern.glyph1.indexOf(n3[e4]);
          if (i4 !== -1) {
            let n4 = t3.kern.rval[i4].glyph2.indexOf(c3);
            n4 !== -1 && (r3[e4 * 3 + 2] += t3.kern.rval[i4].vals[n4]);
          }
        }
      }
    }
    return r3;
    function a3(e4) {
      for (let t4 = i3 - 1; t4 >= 0; t4--) if (n3[t4] !== -1 && (!e4 || e4(n3[t4]))) return t4;
      return -1;
    }
    function o3(e4) {
      return u2(t3, e4) === 1;
    }
    function s3(e4, t4) {
      for (let n4 = 0; n4 < 3; n4++) r3[t4 * 3 + n4] += e4[n4] || 0;
    }
  }
  function u2(t3, n3) {
    let r3 = t3.GDEF && t3.GDEF.glyphClassDef;
    return r3 ? e3.U._getGlyphClass(n3, r3) : 0;
  }
  function d2(...e4) {
    for (let t3 = 0; t3 < e4.length; t3++) if (typeof e4[t3] == `number`) return e4[t3];
  }
  function f2(t3) {
    let r3 = /* @__PURE__ */ Object.create(null), i3 = t3[`OS/2`], a3 = t3.hhea, o3 = t3.head.unitsPerEm, s3 = d2(i3 && i3.sTypoAscender, a3 && a3.ascender, o3), u3 = { unitsPerEm: o3, ascender: s3, descender: d2(i3 && i3.sTypoDescender, a3 && a3.descender, 0), capHeight: d2(i3 && i3.sCapHeight, s3), xHeight: d2(i3 && i3.sxHeight, s3), lineGap: d2(i3 && i3.sTypoLineGap, a3 && a3.lineGap), supportsCodePoint(n3) {
      return e3.U.codeToGlyph(t3, n3) > 0;
    }, forEachGlyph(i4, a4, o4, s4) {
      let d3 = 0, f3 = 1 / u3.unitsPerEm * a4, p2 = c2(t3, i4), m2 = 0, h2 = l2(t3, p2);
      return p2.forEach((c3, l3) => {
        if (c3 !== -1) {
          let i5 = r3[c3];
          if (!i5) {
            let { cmds: a5, crds: o5 } = e3.U.glyphToPath(t3, c3), s5 = ``, l4 = 0;
            for (let e4 = 0, t4 = a5.length; e4 < t4; e4++) {
              let t5 = n2[a5[e4]];
              s5 += a5[e4];
              for (let e5 = 1; e5 <= t5; e5++) s5 += (e5 > 1 ? `,` : ``) + o5[l4++];
            }
            let u4, d4, f4, p3;
            if (o5.length) {
              u4 = d4 = 1 / 0, f4 = p3 = -1 / 0;
              for (let e4 = 0, t4 = o5.length; e4 < t4; e4 += 2) {
                let t5 = o5[e4], n3 = o5[e4 + 1];
                t5 < u4 && (u4 = t5), n3 < d4 && (d4 = n3), t5 > f4 && (f4 = t5), n3 > p3 && (p3 = n3);
              }
            } else u4 = f4 = d4 = p3 = 0;
            i5 = r3[c3] = { index: c3, advanceWidth: t3.hmtx.aWidth[c3], xMin: u4, yMin: d4, xMax: f4, yMax: p3, path: s5 };
          }
          s4.call(null, i5, d3 + h2[l3 * 3] * f3, h2[l3 * 3 + 1] * f3, m2), d3 += h2[l3 * 3 + 2] * f3, o4 && (d3 += o4 * a4);
        }
        m2 += i4.codePointAt(m2) > 65535 ? 2 : 1;
      }), d3;
    } };
    return u3;
  }
  return function(n3) {
    let r3 = new Uint8Array(n3, 0, 4), i3 = e3._bin.readASCII(r3, 0, 4);
    if (i3 === `wOFF`) n3 = t2(n3);
    else if (i3 === `wOF2`) throw Error(`woff2 fonts not supported`);
    return f2(e3.parse(n3)[0]);
  };
}
var Fo = co({ name: `Typr Font Parser`, dependencies: [Mo, No, Po], init(e3, t2, n2) {
  return n2(e3(), t2());
} });
function Io() {
  return (function(e3) {
    var t2 = function() {
      this.buckets = /* @__PURE__ */ new Map();
    };
    t2.prototype.add = function(e4) {
      var t3 = e4 >> 5;
      this.buckets.set(t3, (this.buckets.get(t3) || 0) | 1 << (31 & e4));
    }, t2.prototype.has = function(e4) {
      var t3 = this.buckets.get(e4 >> 5);
      return t3 !== void 0 && !!(t3 & 1 << (31 & e4));
    }, t2.prototype.serialize = function() {
      var e4 = [];
      return this.buckets.forEach((function(t3, n3) {
        e4.push((+n3).toString(36) + `:` + t3.toString(36));
      })), e4.join(`,`);
    }, t2.prototype.deserialize = function(e4) {
      var t3 = this;
      this.buckets.clear(), e4.split(`,`).forEach((function(e5) {
        var n3 = e5.split(`:`);
        t3.buckets.set(parseInt(n3[0], 36), parseInt(n3[1], 36));
      }));
    };
    var n2 = 256, r2 = n2 - 1, i2 = ~r2;
    function a2(e4) {
      var t3 = (function(e5) {
        return e5 & i2;
      })(e4).toString(16), r3 = (function(e5) {
        return (e5 & i2) + n2 - 1;
      })(e4).toString(16);
      return `codepoint-index/plane` + (e4 >> 16) + `/` + t3 + `-` + r3 + `.json`;
    }
    function o2(e4, t3) {
      var n3 = e4 & r2, i3 = t3.codePointAt(n3 / 6 | 0);
      return !!((i3 = (i3 || 48) - 48) & 1 << n3 % 6);
    }
    function s2(e4, t3) {
      var n3;
      (n3 = e4, n3.replace(/U\+/gi, ``).replace(/^,+|,+$/g, ``).split(/,+/).map((function(e5) {
        return e5.split(`-`).map((function(e6) {
          return parseInt(e6.trim(), 16);
        }));
      }))).forEach((function(e5) {
        var n4 = e5[0], r3 = e5[1];
        r3 === void 0 && (r3 = n4), t3(n4, r3);
      }));
    }
    function c2(e4, t3) {
      s2(e4, (function(e5, n3) {
        for (var r3 = e5; r3 <= n3; r3++) t3(r3);
      }));
    }
    var l2 = {}, u2 = {}, d2 = /* @__PURE__ */ new WeakMap(), f2 = `https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data`;
    function p2(e4) {
      var n3 = d2.get(e4);
      return n3 || (n3 = new t2(), c2(e4.ranges, (function(e5) {
        return n3.add(e5);
      })), d2.set(e4, n3)), n3;
    }
    var m2, h2 = /* @__PURE__ */ new Map();
    function g2(e4, t3, n3) {
      return e4[t3] ? t3 : e4[n3] ? n3 : (function(e5) {
        for (var t4 in e5) return t4;
      })(e4);
    }
    function _2(e4, t3) {
      var n3 = t3;
      if (!e4.includes(n3)) {
        n3 = 1 / 0;
        for (var r3 = 0; r3 < e4.length; r3++) Math.abs(e4[r3] - t3) < Math.abs(n3 - t3) && (n3 = e4[r3]);
      }
      return n3;
    }
    function v2(e4) {
      return m2 || (m2 = /* @__PURE__ */ new Set(), c2(`9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000`, (function(e5) {
        m2.add(e5);
      }))), m2.has(e4);
    }
    return e3.CodePointSet = t2, e3.clearCache = function() {
      l2 = {}, u2 = {};
    }, e3.getFontsForString = function(e4, t3) {
      t3 === void 0 && (t3 = {});
      var n3, r3 = t3.lang;
      r3 === void 0 && (r3 = new RegExp("\\p{Script=Hangul}", "u").test(n3 = e4) ? `ko` : new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}", "u").test(n3) ? `ja` : `en`);
      var i3 = t3.category;
      i3 === void 0 && (i3 = `sans-serif`);
      var s3 = t3.style;
      s3 === void 0 && (s3 = `normal`);
      var c3 = t3.weight;
      c3 === void 0 && (c3 = 400);
      var d3 = (t3.dataUrl || f2).replace(/\/$/g, ``), m3 = /* @__PURE__ */ new Map(), y2 = new Uint8Array(e4.length), b2 = {}, x2 = {}, S2 = Array(e4.length), C2 = /* @__PURE__ */ new Map(), w2 = false;
      function T2(e5) {
        var t4 = h2.get(e5);
        return t4 || (t4 = fetch(d3 + `/` + e5).then((function(e6) {
          if (!e6.ok) throw Error(e6.statusText);
          return e6.json().then((function(e7) {
            if (!Array.isArray(e7) || e7[0] !== 1) throw Error(`Incorrect schema version; need 1, got ` + e7[0]);
            return e7[1];
          }));
        })).catch((function(t5) {
          if (d3 !== f2) return w2 || (w2 = (console.error(`unicode-font-resolver: Failed loading from dataUrl "` + d3 + `", trying default CDN. ` + t5.message), true)), d3 = f2, h2.delete(e5), T2(e5);
          throw t5;
        })), h2.set(e5, t4)), t4;
      }
      for (var E2 = function(t4) {
        var n4 = e4.codePointAt(t4), r4 = a2(n4);
        S2[t4] = r4, l2[r4] || C2.has(r4) || C2.set(r4, T2(r4).then((function(e5) {
          l2[r4] = e5;
        }))), n4 > 65535 && (t4++, D2 = t4);
      }, D2 = 0; D2 < e4.length; D2++) E2(D2);
      return Promise.all(C2.values()).then((function() {
        C2.clear();
        for (var t4 = function(t5) {
          var i4 = e4.codePointAt(t5), a3 = null, s4 = l2[S2[t5]], c4 = void 0;
          for (var d4 in s4) {
            var f3 = x2[d4];
            if (f3 === void 0 && (f3 = x2[d4] = new RegExp(d4).test(r3 || `en`)), f3) {
              for (var p3 in c4 = d4, s4[d4]) if (o2(i4, s4[d4][p3])) {
                a3 = p3;
                break;
              }
              break;
            }
          }
          if (!a3) {
            t: for (var m4 in s4) if (m4 !== c4) {
              for (var h3 in s4[m4]) if (o2(i4, s4[m4][h3])) {
                a3 = h3;
                break t;
              }
            }
          }
          a3 || (a3 = (console.debug(`No font coverage for U+` + i4.toString(16)), `latin`)), S2[t5] = a3, u2[a3] || C2.has(a3) || C2.set(a3, T2(`font-meta/` + a3 + `.json`).then((function(e5) {
            u2[a3] = e5;
          }))), i4 > 65535 && (t5++, n4 = t5);
        }, n4 = 0; n4 < e4.length; n4++) t4(n4);
        return Promise.all(C2.values());
      })).then((function() {
        var _a3;
        for (var t4 = null, n4 = 0; n4 < e4.length; n4++) {
          var r4 = e4.codePointAt(n4);
          if (t4 && (v2(r4) || p2(t4).has(r4))) y2[n4] = y2[n4 - 1];
          else {
            t4 = u2[S2[n4]];
            var a3 = b2[t4.id];
            if (!a3) {
              var o3 = t4.typeforms, l3 = g2(o3, i3, `sans-serif`), f3 = g2(o3[l3], s3, `normal`), h3 = _2((_a3 = o3[l3]) == null ? void 0 : _a3[f3], c3);
              a3 = b2[t4.id] = d3 + `/font-files/` + t4.id + `/` + l3 + `.` + f3 + `.` + h3 + `.woff`;
            }
            var x3 = m3.get(a3);
            x3 ?? (x3 = m3.size, m3.set(a3, x3)), y2[n4] = x3;
          }
          r4 > 65535 && (n4++, y2[n4] = y2[n4 - 1]);
        }
        return { fontUrls: Array.from(m3.keys()), chars: y2 };
      }));
    }, Object.defineProperty(e3, "__esModule", { value: true }), e3;
  })({});
}
function Lo(e3, t2) {
  let n2 = /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ Object.create(null);
  function i2(t3, n3) {
    let r3 = (e4) => {
      console.error(`Failure loading font ${t3}`, e4);
    };
    try {
      let i3 = new XMLHttpRequest();
      i3.open(`get`, t3, true), i3.responseType = `arraybuffer`, i3.onload = function() {
        if (i3.status >= 400) r3(Error(i3.statusText));
        else if (i3.status > 0) try {
          let r4 = e3(i3.response);
          r4.src = t3, n3(r4);
        } catch (e4) {
          r3(e4);
        }
      }, i3.onerror = r3, i3.send();
    } catch (e4) {
      r3(e4);
    }
  }
  function a2(e4, t3) {
    let a3 = n2[e4];
    a3 ? t3(a3) : r2[e4] ? r2[e4].push(t3) : (r2[e4] = [t3], i2(e4, (t4) => {
      t4.src = e4, n2[e4] = t4, r2[e4].forEach((e5) => e5(t4)), delete r2[e4];
    }));
  }
  return function(e4, r3, { lang: i3, fonts: o2 = [], style: s2 = `normal`, weight: c2 = `normal`, unicodeFontsURL: l2 } = {}) {
    let u2 = new Uint8Array(e4.length), d2 = [];
    e4.length || h2();
    let f2 = /* @__PURE__ */ new Map(), p2 = [];
    if (s2 !== `italic` && (s2 = `normal`), typeof c2 != `number` && (c2 = c2 === `bold` ? 700 : 400), o2 && !Array.isArray(o2) && (o2 = [o2]), o2 = o2.slice().filter((e5) => !e5.lang || e5.lang.test(i3)).reverse(), o2.length) {
      let t3 = 0;
      (function r4(i4 = 0) {
        for (let s3 = i4, c3 = e4.length; s3 < c3; s3++) {
          let i5 = e4.codePointAt(s3);
          if (t3 === 1 && d2[u2[s3 - 1]].supportsCodePoint(i5) || s3 > 0 && /\s/.test(e4[s3])) u2[s3] = u2[s3 - 1], t3 === 2 && (p2[p2.length - 1][1] = s3);
          else for (let e5 = u2[s3], c4 = o2.length; e5 <= c4; e5++) if (e5 === c4) {
            let e6 = t3 === 2 ? p2[p2.length - 1] : p2[p2.length] = [s3, s3];
            e6[1] = s3, t3 = 2;
          } else {
            u2[s3] = e5;
            let { src: c5, unicodeRange: l3 } = o2[e5];
            if (!l3 || g2(i5, l3)) {
              let e6 = n2[c5];
              if (!e6) {
                a2(c5, () => {
                  r4(s3);
                });
                return;
              }
              if (e6.supportsCodePoint(i5)) {
                let n3 = f2.get(e6);
                typeof n3 != `number` && (n3 = d2.length, d2.push(e6), f2.set(e6, n3)), u2[s3] = n3, t3 = 1;
                break;
              }
            }
          }
          i5 > 65535 && s3 + 1 < c3 && (u2[s3 + 1] = u2[s3], s3++, t3 === 2 && (p2[p2.length - 1][1] = s3));
        }
        m2();
      })();
    } else p2.push([0, e4.length - 1]), m2();
    function m2() {
      if (p2.length) {
        let n3 = p2.map((t3) => e4.substring(t3[0], t3[1] + 1)).join(`
`);
        t2.getFontsForString(n3, { lang: i3 || void 0, style: s2, weight: c2, dataUrl: l2 }).then(({ fontUrls: e5, chars: t3 }) => {
          let n4 = d2.length, r4 = 0;
          p2.forEach((e6) => {
            for (let i5 = 0, a3 = e6[1] - e6[0]; i5 <= a3; i5++) u2[e6[0] + i5] = t3[r4++] + n4;
            r4++;
          });
          let i4 = 0;
          e5.forEach((t4, r5) => {
            a2(t4, (t5) => {
              d2[r5 + n4] = t5, ++i4 === e5.length && h2();
            });
          });
        });
      } else h2();
    }
    function h2() {
      r3({ chars: u2, fonts: d2 });
    }
    function g2(e5, t3) {
      for (let n3 = 0; n3 < t3.length; n3++) {
        let [r4, i4 = r4] = t3[n3];
        if (r4 <= e5 && e5 <= i4) return true;
      }
      return false;
    }
  };
}
var Z = co({ name: `FontResolver`, dependencies: [Lo, Fo, Io], init(e3, t2, n2) {
  return e3(t2, n2());
} });
function Ro(e3, t2) {
  let n2 = 1 / 0, r2 = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, i2 = `[^\\S\\u00A0]`, a2 = RegExp(`${i2}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
  function o2({ text: t3, lang: n3, fonts: r3, style: i3, weight: a3, preResolvedFonts: o3, unicodeFontsURL: s3 }, c3) {
    let l3 = ({ chars: e4, fonts: t4 }) => {
      let n4, r4, i4 = [];
      for (let a4 = 0; a4 < e4.length; a4++) e4[a4] === r4 ? n4.end = a4 : (r4 = e4[a4], i4.push(n4 = { start: a4, end: a4, fontObj: t4[e4[a4]] }));
      c3(i4);
    };
    o3 ? l3(o3) : e3(t3, l3, { lang: n3, fonts: r3, style: i3, weight: a3, unicodeFontsURL: s3 });
  }
  function s2({ text: e4 = ``, font: s3, lang: c3, sdfGlyphSize: p3 = 64, fontSize: m2 = 400, fontWeight: h2 = 1, fontStyle: g2 = `normal`, letterSpacing: _2 = 0, lineHeight: v2 = `normal`, maxWidth: y2 = n2, direction: b2, textAlign: x2 = `left`, textIndent: S2 = 0, whiteSpace: C2 = `normal`, overflowWrap: w2 = `normal`, anchorX: T2 = 0, anchorY: E2 = 0, metricsOnly: D2 = false, unicodeFontsURL: O2, preResolvedFonts: k2 = null, includeCaretPositions: A2 = false, chunkedBoundsSize: j2 = 8192, colorRanges: M2 = null }, N2) {
    let P2 = d2(), F2 = { fontLoad: 0, typesetting: 0 };
    e4.indexOf(`\r`) > -1 && (console.info(`Typesetter: got text with \\r chars; normalizing to \\n`), e4 = e4.replace(/\r\n/g, `
`).replace(/\r/g, `
`)), m2 = +m2, _2 = +_2, y2 = +y2, v2 || (v2 = `normal`), S2 = +S2, o2({ text: e4, lang: c3, style: g2, weight: h2, fonts: typeof s3 == `string` ? [{ src: s3 }] : s3, unicodeFontsURL: O2, preResolvedFonts: k2 }, (o3) => {
      F2.fontLoad = d2() - P2;
      let s4 = isFinite(y2), c4 = null, p4 = null, h3 = null, g3 = null, O3 = null, k3 = null, I2 = null, ee2 = null, L2 = 0, R2 = 0, z2 = C2 !== `nowrap`, B2 = /* @__PURE__ */ new Map(), te2 = d2(), V2 = S2, ne2 = 0, H2 = new f2(), re2 = [H2];
      o3.forEach((t3) => {
        let { fontObj: n3 } = t3, { ascender: o4, descender: c5, unitsPerEm: l3, lineGap: u3, capHeight: d3, xHeight: p5 } = n3, h4 = B2.get(n3);
        if (!h4) {
          let e5 = m2 / l3, t4 = v2 === `normal` ? (o4 - c5 + u3) * e5 : v2 * m2, r3 = (t4 - (o4 - c5) * e5) / 2, i3 = Math.min(t4, (o4 - c5) * e5), a3 = (o4 + c5) / 2 * e5 + i3 / 2;
          h4 = { index: B2.size, src: n3.src, fontObj: n3, fontSizeMult: e5, unitsPerEm: l3, ascender: o4 * e5, descender: c5 * e5, capHeight: d3 * e5, xHeight: p5 * e5, lineHeight: t4, baseline: -r3 - o4 * e5, caretTop: a3, caretBottom: a3 - i3 }, B2.set(n3, h4);
        }
        let { fontSizeMult: g4 } = h4, b3 = e4.slice(t3.start, t3.end + 1), x3, C3;
        n3.forEachGlyph(b3, m2, _2, (n4, o5, c6, l4) => {
          o5 += ne2, l4 += t3.start, x3 = o5, C3 = n4;
          let u4 = e4.charAt(l4), d4 = n4.advanceWidth * g4, p6 = H2.count, v3;
          if (`isEmpty` in n4 || (n4.isWhitespace = !!u4 && RegExp(i2).test(u4), n4.canBreakAfter = !!u4 && a2.test(u4), n4.isEmpty = n4.xMin === n4.xMax || n4.yMin === n4.yMax || r2.test(u4)), !n4.isWhitespace && !n4.isEmpty && R2++, z2 && s4 && !n4.isWhitespace && o5 + d4 + V2 > y2 && p6) {
            if (H2.glyphAt(p6 - 1).glyphObj.canBreakAfter) v3 = new f2(), V2 = -o5;
            else for (let e5 = p6; e5--; ) if (e5 === 0 && w2 === `break-word`) {
              v3 = new f2(), V2 = -o5;
              break;
            } else if (H2.glyphAt(e5).glyphObj.canBreakAfter) {
              v3 = H2.splitAt(e5 + 1);
              let t4 = v3.glyphAt(0).x;
              V2 -= t4;
              for (let e6 = v3.count; e6--; ) v3.glyphAt(e6).x -= t4;
              break;
            }
            v3 && (H2.isSoftWrapped = true, H2 = v3, re2.push(H2), L2 = y2);
          }
          let b4 = H2.glyphAt(H2.count);
          b4.glyphObj = n4, b4.x = o5 + V2, b4.y = c6, b4.width = d4, b4.charIndex = l4, b4.fontData = h4, u4 === `
` && (H2 = new f2(), re2.push(H2), V2 = -(o5 + d4 + _2 * m2) + S2);
        }), ne2 = x3 + C3.advanceWidth * g4 + _2 * m2;
      });
      let ie2 = 0;
      re2.forEach((e5) => {
        let t3 = true;
        for (let n3 = e5.count; n3--; ) {
          let r3 = e5.glyphAt(n3);
          t3 && !r3.glyphObj.isWhitespace && (e5.width = r3.x + r3.width, e5.width > L2 && (L2 = e5.width), t3 = false);
          let { lineHeight: i3, capHeight: a3, xHeight: o4, baseline: s5 } = r3.fontData;
          i3 > e5.lineHeight && (e5.lineHeight = i3);
          let c5 = s5 - e5.baseline;
          c5 < 0 && (e5.baseline += c5, e5.cap += c5, e5.ex += c5), e5.cap = Math.max(e5.cap, e5.baseline + a3), e5.ex = Math.max(e5.ex, e5.baseline + o4);
        }
        e5.baseline -= ie2, e5.cap -= ie2, e5.ex -= ie2, ie2 += e5.lineHeight;
      });
      let U2 = 0, ae2 = 0;
      if (T2 && (typeof T2 == `number` ? U2 = -T2 : typeof T2 == `string` && (U2 = -L2 * (T2 === `left` ? 0 : T2 === `center` ? 0.5 : T2 === `right` ? 1 : l2(T2)))), E2 && (typeof E2 == `number` ? ae2 = -E2 : typeof E2 == `string` && (ae2 = E2 === `top` ? 0 : E2 === `top-baseline` ? -re2[0].baseline : E2 === `top-cap` ? -re2[0].cap : E2 === `top-ex` ? -re2[0].ex : E2 === `middle` ? ie2 / 2 : E2 === `bottom` ? ie2 : E2 === `bottom-baseline` ? -re2[re2.length - 1].baseline : l2(E2) * ie2)), !D2) {
        let r3 = t2.getEmbeddingLevels(e4, b2);
        c4 = new Uint16Array(R2), p4 = new Uint8Array(R2), h3 = new Float32Array(R2 * 2), g3 = {}, I2 = [n2, n2, -1 / 0, -1 / 0], ee2 = [], A2 && (k3 = new Float32Array(e4.length * 4)), M2 && (O3 = new Uint8Array(R2 * 3));
        let i3 = 0, a3 = -1, o4 = -1, s5, l3;
        if (re2.forEach((d3, f3) => {
          let { count: m3, width: _3 } = d3;
          if (m3 > 0) {
            let f4 = 0;
            for (let e5 = m3; e5-- && d3.glyphAt(e5).glyphObj.isWhitespace; ) f4++;
            let v3 = 0, y3 = 0;
            if (x2 === `center`) v3 = (L2 - _3) / 2;
            else if (x2 === `right`) v3 = L2 - _3;
            else if (x2 === `justify` && d3.isSoftWrapped) {
              let e5 = 0;
              for (let t3 = m3 - f4; t3--; ) d3.glyphAt(t3).glyphObj.isWhitespace && e5++;
              y3 = (L2 - _3) / e5;
            }
            if (y3 || v3) {
              let e5 = 0;
              for (let t3 = 0; t3 < m3; t3++) {
                let n3 = d3.glyphAt(t3), r4 = n3.glyphObj;
                n3.x += v3 + e5, y3 !== 0 && r4.isWhitespace && t3 < m3 - f4 && (e5 += y3, n3.width += y3);
              }
            }
            let b3 = t2.getReorderSegments(e4, r3, d3.glyphAt(0).charIndex, d3.glyphAt(d3.count - 1).charIndex);
            for (let e5 = 0; e5 < b3.length; e5++) {
              let [t3, n3] = b3[e5], r4 = 1 / 0, i4 = -1 / 0;
              for (let e6 = 0; e6 < m3; e6++) if (d3.glyphAt(e6).charIndex >= t3) {
                let t4 = e6, a4 = e6;
                for (; a4 < m3; a4++) {
                  let e7 = d3.glyphAt(a4);
                  if (e7.charIndex > n3) break;
                  a4 < m3 - f4 && (r4 = Math.min(r4, e7.x), i4 = Math.max(i4, e7.x + e7.width));
                }
                for (let e7 = t4; e7 < a4; e7++) {
                  let t5 = d3.glyphAt(e7);
                  t5.x = i4 - (t5.x + t5.width - r4);
                }
                break;
              }
            }
            let S3, C3 = (e5) => S3 = e5;
            for (let f5 = 0; f5 < m3; f5++) {
              let m4 = d3.glyphAt(f5);
              S3 = m4.glyphObj;
              let _4 = S3.index, v4 = r3.levels[m4.charIndex] & 1;
              if (v4) {
                let n3 = t2.getMirroredCharacter(e4[m4.charIndex]);
                n3 && m4.fontData.fontObj.forEachGlyph(n3, 0, 0, C3);
              }
              if (A2) {
                let { charIndex: e5, fontData: t3 } = m4, n3 = m4.x + U2, r4 = m4.x + m4.width + U2;
                k3[e5 * 4] = v4 ? r4 : n3, k3[e5 * 4 + 1] = v4 ? n3 : r4, k3[e5 * 4 + 2] = d3.baseline + t3.caretBottom + ae2, k3[e5 * 4 + 3] = d3.baseline + t3.caretTop + ae2;
                let i4 = e5 - a3;
                i4 > 1 && u2(k3, a3, i4), a3 = e5;
              }
              if (M2) {
                let { charIndex: e5 } = m4;
                for (; e5 > o4; ) o4++, M2.hasOwnProperty(o4) && (l3 = M2[o4]);
              }
              if (!S3.isWhitespace && !S3.isEmpty) {
                let e5 = i3++, { fontSizeMult: t3, src: r4, index: a4 } = m4.fontData, o5 = g3[r4] || (g3[r4] = {});
                o5[_4] || (o5[_4] = { path: S3.path, pathBounds: [S3.xMin, S3.yMin, S3.xMax, S3.yMax] });
                let u3 = m4.x + U2, f6 = m4.y + d3.baseline + ae2;
                h3[e5 * 2] = u3, h3[e5 * 2 + 1] = f6;
                let v5 = u3 + S3.xMin * t3, y4 = f6 + S3.yMin * t3, b4 = u3 + S3.xMax * t3, x3 = f6 + S3.yMax * t3;
                v5 < I2[0] && (I2[0] = v5), y4 < I2[1] && (I2[1] = y4), b4 > I2[2] && (I2[2] = b4), x3 > I2[3] && (I2[3] = x3), e5 % j2 === 0 && (s5 = { start: e5, end: e5, rect: [n2, n2, -1 / 0, -1 / 0] }, ee2.push(s5)), s5.end++;
                let C4 = s5.rect;
                if (v5 < C4[0] && (C4[0] = v5), y4 < C4[1] && (C4[1] = y4), b4 > C4[2] && (C4[2] = b4), x3 > C4[3] && (C4[3] = x3), c4[e5] = _4, p4[e5] = a4, M2) {
                  let t4 = e5 * 3;
                  O3[t4] = l3 >> 16 & 255, O3[t4 + 1] = l3 >> 8 & 255, O3[t4 + 2] = l3 & 255;
                }
              }
            }
          }
        }), k3) {
          let t3 = e4.length - a3;
          t3 > 1 && u2(k3, a3, t3);
        }
      }
      let oe2 = [];
      B2.forEach(({ index: e5, src: t3, unitsPerEm: n3, ascender: r3, descender: i3, lineHeight: a3, capHeight: o4, xHeight: s5 }) => {
        oe2[e5] = { src: t3, unitsPerEm: n3, ascender: r3, descender: i3, lineHeight: a3, capHeight: o4, xHeight: s5 };
      }), F2.typesetting = d2() - te2, N2({ glyphIds: c4, glyphFontIndices: p4, glyphPositions: h3, glyphData: g3, fontData: oe2, caretPositions: k3, glyphColors: O3, chunkedBounds: ee2, fontSize: m2, topBaseline: ae2 + re2[0].baseline, blockBounds: [U2, ae2 - ie2, U2 + L2, ae2], visibleBounds: I2, timings: F2 });
    });
  }
  function c2(e4, t3) {
    s2({ ...e4, metricsOnly: true }, (e5) => {
      let [n3, r3, i3, a3] = e5.blockBounds;
      t3({ width: i3 - n3, height: a3 - r3 });
    });
  }
  function l2(e4) {
    let t3 = e4.match(/^([\d.]+)%$/), n3 = t3 ? parseFloat(t3[1]) : NaN;
    return isNaN(n3) ? 0 : n3 / 100;
  }
  function u2(e4, t3, n3) {
    let r3 = e4[t3 * 4], i3 = e4[t3 * 4 + 1], a3 = e4[t3 * 4 + 2], o3 = e4[t3 * 4 + 3], s3 = (i3 - r3) / n3;
    for (let i4 = 0; i4 < n3; i4++) {
      let n4 = (t3 + i4) * 4;
      e4[n4] = r3 + s3 * i4, e4[n4 + 1] = r3 + s3 * (i4 + 1), e4[n4 + 2] = a3, e4[n4 + 3] = o3;
    }
  }
  function d2() {
    return (self.performance || Date).now();
  }
  function f2() {
    this.data = [];
  }
  let p2 = [`glyphObj`, `x`, `y`, `width`, `charIndex`, `fontData`];
  return f2.prototype = { width: 0, lineHeight: 0, baseline: 0, cap: 0, ex: 0, isSoftWrapped: false, get count() {
    return Math.ceil(this.data.length / p2.length);
  }, glyphAt(e4) {
    let t3 = f2.flyweight;
    return t3.data = this.data, t3.index = e4, t3;
  }, splitAt(e4) {
    let t3 = new f2();
    return t3.data = this.data.splice(e4 * p2.length), t3;
  } }, f2.flyweight = p2.reduce((e4, t3, n3, r3) => (Object.defineProperty(e4, t3, { get() {
    return this.data[this.index * p2.length + n3];
  }, set(e5) {
    this.data[this.index * p2.length + n3] = e5;
  } }), e4), { data: null, index: 0 }), { typeset: s2, measure: c2 };
}
var zo = () => (self.performance || Date).now(), Bo = mo(), Vo;
function Ho(e3, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2 = true) {
  return u2 ? qo(e3, t2, n2, r2, i2, a2, o2, s2, c2, l2).then(null, (u3) => (Vo || (Vo = (console.warn(`WebGL SDF generation failed, falling back to JS`, u3), true)), Qo(e3, t2, n2, r2, i2, a2, o2, s2, c2, l2))) : Qo(e3, t2, n2, r2, i2, a2, o2, s2, c2, l2);
}
var Uo = [], Wo = 5, Go = 0;
function Ko() {
  let e3 = zo();
  for (; Uo.length && zo() - e3 < Wo; ) Uo.shift()();
  Go = Uo.length ? setTimeout(Ko, 0) : 0;
}
var qo = (...e3) => new Promise((t2, n2) => {
  Uo.push(() => {
    let r2 = zo();
    try {
      Bo.webgl.generateIntoCanvas(...e3), t2({ timing: zo() - r2 });
    } catch (e4) {
      n2(e4);
    }
  }), Go || (Go = setTimeout(Ko, 0));
}), Jo = 4, Yo = 2e3, Xo = {}, Zo = 0;
function Qo(e3, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  let u2 = `TroikaTextSDFGenerator_JS_` + Zo++ % Jo, d2 = Xo[u2];
  return d2 || (d2 = Xo[u2] = { workerModule: co({ name: u2, workerId: u2, dependencies: [mo, zo], init(e4, t3) {
    let n3 = e4().javascript.generate;
    return function(...e5) {
      let r3 = t3();
      return { textureData: n3(...e5), timing: t3() - r3 };
    };
  }, getTransferables(e4) {
    return [e4.textureData.buffer];
  } }), requests: 0, idleTimer: null }), d2.requests++, clearTimeout(d2.idleTimer), d2.workerModule(e3, t2, n2, r2, i2, a2).then(({ textureData: n3, timing: r3 }) => {
    let i3 = zo(), a3 = new Uint8Array(n3.length * 4);
    for (let e4 = 0; e4 < n3.length; e4++) a3[e4 * 4 + l2] = n3[e4];
    return Bo.webglUtils.renderImageData(o2, a3, s2, c2, e3, t2, 1 << 3 - l2), r3 += zo() - i3, --d2.requests === 0 && (d2.idleTimer = setTimeout(() => {
      lo(u2);
    }, Yo)), { timing: r3 };
  });
}
function $o(e3) {
  e3._warm || (e3._warm = (Bo.webgl.isSupported(e3), true));
}
var es = Bo.webglUtils.resizeWebGLCanvasWithoutClearing, ts = { defaultFontURL: null, unicodeFontsURL: null, sdfGlyphSize: 64, sdfMargin: 1 / 16, sdfExponent: 9, textureWidth: 2048, useWorker: true }, ns = new z();
function rs() {
  return (self.performance || Date).now();
}
var is = /* @__PURE__ */ Object.create(null);
function as(e3, t2) {
  e3 = ls({}, e3);
  let n2 = rs(), { defaultFontURL: r2 } = ts, i2 = [];
  if (r2 && i2.push({ label: `default`, src: ds(r2) }), e3.font && i2.push({ label: `user`, src: ds(e3.font) }), e3.font = i2, e3.text = `` + e3.text, e3.sdfGlyphSize = e3.sdfGlyphSize || ts.sdfGlyphSize, e3.unicodeFontsURL = e3.unicodeFontsURL || ts.unicodeFontsURL, e3.colorRanges != null) {
    let t3 = {};
    for (let n3 in e3.colorRanges) if (e3.colorRanges.hasOwnProperty(n3)) {
      let r3 = e3.colorRanges[n3];
      typeof r3 != `number` && (r3 = ns.set(r3).getHex()), t3[n3] = r3;
    }
    e3.colorRanges = t3;
  }
  Object.freeze(e3);
  let { textureWidth: a2, sdfExponent: o2 } = ts, { sdfGlyphSize: s2 } = e3, c2 = a2 / s2 * 4, u2 = is[s2];
  if (!u2) {
    let e4 = document.createElement(`canvas`);
    e4.width = a2, e4.height = s2 * 256 / c2, u2 = is[s2] = { glyphCount: 0, sdfGlyphSize: s2, sdfCanvas: e4, sdfTexture: new fe(e4, void 0, void 0, void 0, l, l), contextLost: false, glyphsByFont: /* @__PURE__ */ new Map() }, u2.sdfTexture.generateMipmaps = false, ss(u2);
  }
  let { sdfTexture: d2, sdfCanvas: f2 } = u2;
  (ts.useWorker ? ps : ms)(e3).then((r3) => {
    let { glyphIds: i3, glyphFontIndices: l2, fontData: p2, glyphPositions: m2, fontSize: h2, timings: g2 } = r3, _2 = [], v2 = new Float32Array(i3.length * 4), y2 = 0, b2 = 0, x2 = rs(), S2 = p2.map((e4) => {
      let t3 = u2.glyphsByFont.get(e4.src);
      return t3 || u2.glyphsByFont.set(e4.src, t3 = /* @__PURE__ */ new Map()), t3;
    });
    i3.forEach((e4, t3) => {
      let n3 = l2[t3], { src: a3, unitsPerEm: o3 } = p2[n3], c3 = S2[n3].get(e4);
      if (!c3) {
        let { path: t4, pathBounds: i4 } = r3.glyphData[a3][e4], o4 = Math.max(i4[2] - i4[0], i4[3] - i4[1]) / s2 * (ts.sdfMargin * s2 + 0.5), l3 = u2.glyphCount++, d4 = [i4[0] - o4, i4[1] - o4, i4[2] + o4, i4[3] + o4];
        S2[n3].set(e4, c3 = { path: t4, atlasIndex: l3, sdfViewBox: d4 }), _2.push(c3);
      }
      let { sdfViewBox: d3 } = c3, f3 = m2[b2++], g3 = m2[b2++], x3 = h2 / o3;
      v2[y2++] = f3 + d3[0] * x3, v2[y2++] = g3 + d3[1] * x3, v2[y2++] = f3 + d3[2] * x3, v2[y2++] = g3 + d3[3] * x3, i3[t3] = c3.atlasIndex;
    }), g2.quads = (g2.quads || 0) + (rs() - x2);
    let C2 = rs();
    g2.sdf = {};
    let w2 = f2.height, T2 = Math.ceil(u2.glyphCount / c2), E2 = 2 ** Math.ceil(Math.log2(T2 * s2));
    E2 > w2 && (console.info(`Increasing SDF texture size ${w2}->${E2}`), es(f2, a2, E2), d2.dispose()), Promise.all(_2.map((t3) => os(t3, u2, e3.gpuAccelerateSDF).then(({ timing: e4 }) => {
      g2.sdf[t3.atlasIndex] = e4;
    }))).then(() => {
      _2.length && !u2.contextLost && (fs(u2), d2.needsUpdate = true), g2.sdfTotal = rs() - C2, g2.total = rs() - n2, t2(Object.freeze({ parameters: e3, sdfTexture: d2, sdfGlyphSize: s2, sdfExponent: o2, glyphBounds: v2, glyphAtlasIndices: i3, glyphColors: r3.glyphColors, caretPositions: r3.caretPositions, chunkedBounds: r3.chunkedBounds, ascender: r3.ascender, descender: r3.descender, lineHeight: r3.lineHeight, capHeight: r3.capHeight, xHeight: r3.xHeight, topBaseline: r3.topBaseline, blockBounds: r3.blockBounds, visibleBounds: r3.visibleBounds, timings: r3.timings }));
    });
  }), Promise.resolve().then(() => {
    u2.contextLost || $o(f2);
  });
}
function os({ path: e3, atlasIndex: t2, sdfViewBox: n2 }, { sdfGlyphSize: r2, sdfCanvas: i2, contextLost: a2 }, o2) {
  if (a2) return Promise.resolve({ timing: -1 });
  let { textureWidth: s2, sdfExponent: c2 } = ts, l2 = Math.max(n2[2] - n2[0], n2[3] - n2[1]), u2 = Math.floor(t2 / 4);
  return Ho(r2, r2, e3, n2, l2, c2, i2, u2 % (s2 / r2) * r2, Math.floor(u2 / (s2 / r2)) * r2, t2 % 4, o2);
}
function ss(e3) {
  let t2 = e3.sdfCanvas;
  t2.addEventListener(`webglcontextlost`, (t3) => {
    console.log(`Context Lost`, t3), t3.preventDefault(), e3.contextLost = true;
  }), t2.addEventListener(`webglcontextrestored`, (t3) => {
    console.log(`Context Restored`, t3), e3.contextLost = false;
    let n2 = [];
    e3.glyphsByFont.forEach((t4) => {
      t4.forEach((t5) => {
        n2.push(os(t5, e3, true));
      });
    }), Promise.all(n2).then(() => {
      fs(e3), e3.sdfTexture.needsUpdate = true;
    });
  });
}
function cs({ font: e3, characters: t2, sdfGlyphSize: n2 }, r2) {
  as({ font: e3, sdfGlyphSize: n2, text: Array.isArray(t2) ? t2.join(`
`) : `` + t2 }, r2);
}
function ls(e3, t2) {
  for (let n2 in t2) t2.hasOwnProperty(n2) && (e3[n2] = t2[n2]);
  return e3;
}
var us;
function ds(e3) {
  return us || (us = typeof document > `u` ? {} : document.createElement(`a`)), us.href = e3, us.href;
}
function fs(e3) {
  if (typeof createImageBitmap != `function`) {
    console.info(`Safari<15: applying SDF canvas workaround`);
    let { sdfCanvas: t2, sdfTexture: n2 } = e3, { width: r2, height: i2 } = t2, a2 = e3.sdfCanvas.getContext(`webgl`), o2 = n2.image.data;
    o2 && o2.length === r2 * i2 * 4 || (o2 = new Uint8Array(r2 * i2 * 4), n2.image = { width: r2, height: i2, data: o2 }, n2.flipY = false, n2.isDataTexture = true), a2.readPixels(0, 0, r2, i2, a2.RGBA, a2.UNSIGNED_BYTE, o2);
  }
}
var ps = co({ name: `Typesetter`, dependencies: [co({ name: `Typesetter`, dependencies: [Ro, Z, ho], init(e3, t2, n2) {
  return e3(t2, n2());
} })], init(e3) {
  return function(t2) {
    return new Promise((n2) => {
      e3.typeset(t2, n2);
    });
  };
}, getTransferables(e3) {
  let t2 = [];
  for (let n2 in e3) e3[n2] && e3[n2].buffer && t2.push(e3[n2].buffer);
  return t2;
} }), ms = ps.onMainThread, hs = {};
function gs(e3) {
  let t2 = hs[e3];
  return t2 || (t2 = hs[e3] = new B(1, 1, e3, e3).translate(0.5, 0.5, 0)), t2;
}
var _s = `aTroikaGlyphBounds`, vs = `aTroikaGlyphIndex`, ys = `aTroikaGlyphColor`, bs = class extends de {
  constructor() {
    super(), this.detail = 1, this.curveRadius = 0, this.groups = [{ start: 0, count: 1 / 0, materialIndex: 0 }, { start: 0, count: 1 / 0, materialIndex: 1 }], this.boundingSphere = new oe(), this.boundingBox = new I();
  }
  computeBoundingSphere() {
  }
  computeBoundingBox() {
  }
  set detail(e3) {
    if (e3 !== this._detail) {
      this._detail = e3, (typeof e3 != `number` || e3 < 1) && (e3 = 1);
      let t2 = gs(e3);
      [`position`, `normal`, `uv`].forEach((e4) => {
        this.attributes[e4] = t2.attributes[e4].clone();
      }), this.setIndex(t2.getIndex().clone());
    }
  }
  get detail() {
    return this._detail;
  }
  set curveRadius(e3) {
    e3 !== this._curveRadius && (this._curveRadius = e3, this._updateBounds());
  }
  get curveRadius() {
    return this._curveRadius;
  }
  updateGlyphs(e3, t2, n2, r2, i2) {
    this.updateAttributeData(_s, e3, 4), this.updateAttributeData(vs, t2, 1), this.updateAttributeData(ys, i2, 3), this._blockBounds = n2, this._chunkedBounds = r2, this.instanceCount = t2.length, this._updateBounds();
  }
  _updateBounds() {
    let e3 = this._blockBounds;
    if (e3) {
      let { curveRadius: t2, boundingBox: n2 } = this;
      if (t2) {
        let { PI: r2, floor: i2, min: a2, max: o2, sin: s2, cos: c2 } = Math, l2 = r2 / 2, u2 = r2 * 2, d2 = Math.abs(t2), f2 = e3[0] / d2, p2 = e3[2] / d2, m2 = i2((f2 + l2) / u2) === i2((p2 + l2) / u2) ? a2(s2(f2) * d2, s2(p2) * d2) : -d2, h2 = i2((f2 - l2) / u2) === i2((p2 - l2) / u2) ? o2(s2(f2) * d2, s2(p2) * d2) : d2, g2 = i2((f2 + r2) / u2) === i2((p2 + r2) / u2) ? o2(d2 - c2(f2) * d2, d2 - c2(p2) * d2) : d2 * 2;
        n2.min.set(m2, e3[1], t2 < 0 ? -g2 : 0), n2.max.set(h2, e3[3], t2 < 0 ? 0 : g2);
      } else n2.min.set(e3[0], e3[1], 0), n2.max.set(e3[2], e3[3], 0);
      n2.getBoundingSphere(this.boundingSphere);
    }
  }
  applyClipRect(e3) {
    let t2 = this.getAttribute(vs).count, n2 = this._chunkedBounds;
    if (n2) for (let r2 = n2.length; r2--; ) {
      t2 = n2[r2].end;
      let i2 = n2[r2].rect;
      if (i2[1] < e3.w && i2[3] > e3.y && i2[0] < e3.z && i2[2] > e3.x) break;
    }
    this.instanceCount = t2;
  }
  updateAttributeData(e3, t2, n2) {
    let r2 = this.getAttribute(e3);
    t2 ? r2 && r2.array.length === t2.length ? (r2.array.set(t2), r2.needsUpdate = true) : (this.setAttribute(e3, new pe(t2, n2)), delete this._maxInstanceCount, this.dispose()) : r2 && this.deleteAttribute(e3);
  }
}, xs = `
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
`, Ss = `
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
`, Cs = `
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
`, ws = `
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
function Ts(e3) {
  let t2 = To(e3, { chained: true, extensions: { derivatives: true }, uniforms: { uTroikaSDFTexture: { value: null }, uTroikaSDFTextureSize: { value: new a() }, uTroikaSDFGlyphSize: { value: 0 }, uTroikaSDFExponent: { value: 0 }, uTroikaTotalBounds: { value: new N(0, 0, 0, 0) }, uTroikaClipRect: { value: new N(0, 0, 0, 0) }, uTroikaEdgeOffset: { value: 0 }, uTroikaFillOpacity: { value: 1 }, uTroikaPositionOffset: { value: new a() }, uTroikaCurveRadius: { value: 0 }, uTroikaBlurRadius: { value: 0 }, uTroikaStrokeWidth: { value: 0 }, uTroikaStrokeColor: { value: new z() }, uTroikaStrokeOpacity: { value: 1 }, uTroikaOrient: { value: new E() }, uTroikaUseGlyphColors: { value: true }, uTroikaSDFDebug: { value: false } }, vertexDefs: xs, vertexTransform: Ss, fragmentDefs: Cs, fragmentColorTransform: ws, customRewriter({ vertexShader: e4, fragmentShader: t3 }) {
    let n2 = /\buniform\s+vec3\s+diffuse\b/;
    return n2.test(t3) && (t3 = t3.replace(n2, `varying vec3 vTroikaGlyphColor`).replace(/\bdiffuse\b/g, `vTroikaGlyphColor`), n2.test(e4) || (e4 = e4.replace(go, `uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))), { vertexShader: e4, fragmentShader: t3 };
  } });
  return t2.transparent = true, t2.forceSinglePass = true, Object.defineProperties(t2, { isTroikaTextMaterial: { value: true }, shadowSide: { get() {
    return this.side;
  }, set() {
  } } }), t2;
}
var Es = new x({ color: 16777215, side: 2, transparent: true }), Ds = 8421504, Os = new d(), ks = new G(), As = new G(), js = [], Ms = new G(), Ns = `+x+y`;
function Ps(e3) {
  return Array.isArray(e3) ? e3[0] : e3;
}
var Fs = () => {
  let e3 = new g(new B(1, 1), Es);
  return Fs = () => e3, e3;
}, Is = () => {
  let e3 = new g(new B(1, 1, 32, 1), Es);
  return Is = () => e3, e3;
}, Ls = { type: `syncstart` }, Rs = { type: `synccomplete` }, zs = [`font`, `fontSize`, `fontStyle`, `fontWeight`, `lang`, `letterSpacing`, `lineHeight`, `maxWidth`, `overflowWrap`, `text`, `direction`, `textAlign`, `textIndent`, `whiteSpace`, `anchorX`, `anchorY`, `colorRanges`, `sdfGlyphSize`], Bs = zs.concat(`material`, `color`, `depthOffset`, `clipRect`, `curveRadius`, `orientation`, `glyphGeometryDetail`), Vs = class extends g {
  constructor() {
    let e3 = new bs();
    super(e3, null), this.text = ``, this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = `auto`, this.font = null, this.unicodeFontsURL = null, this.fontSize = 0.1, this.fontWeight = `normal`, this.fontStyle = `normal`, this.lang = null, this.letterSpacing = 0, this.lineHeight = `normal`, this.maxWidth = 1 / 0, this.overflowWrap = `normal`, this.textAlign = `left`, this.textIndent = 0, this.whiteSpace = `normal`, this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = Ds, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = Ns, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = true, this.debugSDF = false;
  }
  sync(e3) {
    this._needsSync && (this._needsSync = false, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(e3) : (this._isSyncing = true, this.dispatchEvent(Ls), as({ text: this.text, font: this.font, lang: this.lang, fontSize: this.fontSize || 0.1, fontWeight: this.fontWeight || `normal`, fontStyle: this.fontStyle || `normal`, letterSpacing: this.letterSpacing || 0, lineHeight: this.lineHeight || `normal`, maxWidth: this.maxWidth, direction: this.direction || `auto`, textAlign: this.textAlign, textIndent: this.textIndent, whiteSpace: this.whiteSpace, overflowWrap: this.overflowWrap, anchorX: this.anchorX, anchorY: this.anchorY, colorRanges: this.colorRanges, includeCaretPositions: true, sdfGlyphSize: this.sdfGlyphSize, gpuAccelerateSDF: this.gpuAccelerateSDF, unicodeFontsURL: this.unicodeFontsURL }, (t2) => {
      this._isSyncing = false, this._textRenderInfo = t2, this.geometry.updateGlyphs(t2.glyphBounds, t2.glyphAtlasIndices, t2.blockBounds, t2.chunkedBounds, t2.glyphColors);
      let n2 = this._queuedSyncs;
      n2 && (this._queuedSyncs = null, this._needsSync = true, this.sync(() => {
        n2.forEach((e4) => e4 && e4());
      })), this.dispatchEvent(Rs), e3 && e3();
    })));
  }
  onBeforeRender(e3, t2, n2, r2, i2, a2) {
    this.sync(), i2.isTroikaTextMaterial && this._prepareForRender(i2);
  }
  dispose() {
    this.geometry.dispose();
  }
  get textRenderInfo() {
    return this._textRenderInfo || null;
  }
  createDerivedMaterial(e3) {
    return Ts(e3);
  }
  get material() {
    let e3 = this._derivedMaterial, t2 = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = Es.clone());
    if (e3 && e3.isDerivedFrom(t2) || (e3 = this._derivedMaterial = this.createDerivedMaterial(t2), t2.addEventListener(`dispose`, function n2() {
      t2.removeEventListener(`dispose`, n2), e3.dispose();
    })), this.hasOutline()) {
      let t3 = e3._outlineMtl;
      return t3 || (t3 = e3._outlineMtl = Object.create(e3, { id: { value: e3.id + 0.1 } }), t3.isTextOutlineMaterial = true, t3.depthWrite = false, t3.map = null, e3.addEventListener(`dispose`, function n2() {
        e3.removeEventListener(`dispose`, n2), t3.dispose();
      })), [t3, e3];
    }
    return e3;
  }
  set material(e3) {
    e3 && e3.isTroikaTextMaterial ? (this._derivedMaterial = e3, this._baseMaterial = e3.baseMaterial) : this._baseMaterial = e3;
  }
  hasOutline() {
    return !!(this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY);
  }
  get glyphGeometryDetail() {
    return this.geometry.detail;
  }
  set glyphGeometryDetail(e3) {
    this.geometry.detail = e3;
  }
  get curveRadius() {
    return this.geometry.curveRadius;
  }
  set curveRadius(e3) {
    this.geometry.curveRadius = e3;
  }
  get customDepthMaterial() {
    return Ps(this.material).getDepthMaterial();
  }
  set customDepthMaterial(e3) {
  }
  get customDistanceMaterial() {
    return Ps(this.material).getDistanceMaterial();
  }
  set customDistanceMaterial(e3) {
  }
  _prepareForRender(e3) {
    let t2 = e3.isTextOutlineMaterial, n2 = e3.uniforms, r2 = this.textRenderInfo;
    if (r2) {
      let { sdfTexture: e4, blockBounds: i3 } = r2;
      n2.uTroikaSDFTexture.value = e4, n2.uTroikaSDFTextureSize.value.set(e4.image.width, e4.image.height), n2.uTroikaSDFGlyphSize.value = r2.sdfGlyphSize, n2.uTroikaSDFExponent.value = r2.sdfExponent, n2.uTroikaTotalBounds.value.fromArray(i3), n2.uTroikaUseGlyphColors.value = !t2 && !!r2.glyphColors;
      let a3 = 0, o2 = 0, s2 = 0, c2, l2, u2, d2 = 0, f2 = 0;
      if (t2) {
        let { outlineWidth: e5, outlineOffsetX: t3, outlineOffsetY: n3, outlineBlur: r3, outlineOpacity: i4 } = this;
        a3 = this._parsePercent(e5) || 0, o2 = Math.max(0, this._parsePercent(r3) || 0), c2 = i4, d2 = this._parsePercent(t3) || 0, f2 = this._parsePercent(n3) || 0;
      } else s2 = Math.max(0, this._parsePercent(this.strokeWidth) || 0), s2 && (u2 = this.strokeColor, n2.uTroikaStrokeColor.value.set(u2 ?? Ds), l2 = this.strokeOpacity, l2 ?? (l2 = 1)), c2 = this.fillOpacity;
      n2.uTroikaEdgeOffset.value = a3, n2.uTroikaPositionOffset.value.set(d2, f2), n2.uTroikaBlurRadius.value = o2, n2.uTroikaStrokeWidth.value = s2, n2.uTroikaStrokeOpacity.value = l2, n2.uTroikaFillOpacity.value = c2 ?? 1, n2.uTroikaCurveRadius.value = this.curveRadius || 0;
      let p2 = this.clipRect;
      if (p2 && Array.isArray(p2) && p2.length === 4) n2.uTroikaClipRect.value.fromArray(p2);
      else {
        let e5 = (this.fontSize || 0.1) * 100;
        n2.uTroikaClipRect.value.set(i3[0] - e5, i3[1] - e5, i3[2] + e5, i3[3] + e5);
      }
      this.geometry.applyClipRect(n2.uTroikaClipRect.value);
    }
    n2.uTroikaSDFDebug.value = !!this.debugSDF, e3.polygonOffset = !!this.depthOffset, e3.polygonOffsetFactor = e3.polygonOffsetUnits = this.depthOffset || 0;
    let i2 = t2 ? this.outlineColor || 0 : this.color;
    if (i2 == null) delete e3.color;
    else {
      let t3 = e3.hasOwnProperty(`color`) ? e3.color : e3.color = new z();
      (i2 !== t3._input || typeof i2 == `object`) && t3.set(t3._input = i2);
    }
    let a2 = this.orientation || Ns;
    if (a2 !== e3._orientation) {
      let t3 = n2.uTroikaOrient.value;
      a2 = a2.replace(/[^-+xyz]/g, ``);
      let r3 = a2 !== Ns && a2.match(/^([-+])([xyz])([-+])([xyz])$/);
      if (r3) {
        let [, e4, n3, i3, a3] = r3;
        ks.set(0, 0, 0)[n3] = e4 === `-` ? 1 : -1, As.set(0, 0, 0)[a3] = i3 === `-` ? -1 : 1, Os.lookAt(Ms, ks.cross(As), As), t3.setFromMatrix4(Os);
      } else t3.identity();
      e3._orientation = a2;
    }
  }
  _parsePercent(e3) {
    if (typeof e3 == `string`) {
      let t2 = e3.match(/^(-?[\d.]+)%$/), n2 = t2 ? parseFloat(t2[1]) : NaN;
      e3 = (isNaN(n2) ? 0 : n2 / 100) * this.fontSize;
    }
    return e3;
  }
  localPositionToTextCoords(e3, t2 = new a()) {
    t2.copy(e3);
    let n2 = this.curveRadius;
    return n2 && (t2.x = Math.atan2(e3.x, Math.abs(n2) - Math.abs(e3.z)) * Math.abs(n2)), t2;
  }
  worldPositionToTextCoords(e3, t2 = new a()) {
    return ks.copy(e3), this.localPositionToTextCoords(this.worldToLocal(ks), t2);
  }
  raycast(e3, t2) {
    let { textRenderInfo: n2, curveRadius: r2 } = this;
    if (n2) {
      let i2 = n2.blockBounds, a2 = r2 ? Is() : Fs(), o2 = a2.geometry, { position: s2, uv: c2 } = o2.attributes;
      for (let e4 = 0; e4 < c2.count; e4++) {
        let t3 = i2[0] + c2.getX(e4) * (i2[2] - i2[0]), n3 = i2[1] + c2.getY(e4) * (i2[3] - i2[1]), a3 = 0;
        r2 && (a3 = r2 - Math.cos(t3 / r2) * r2, t3 = Math.sin(t3 / r2) * r2), s2.setXYZ(e4, t3, n3, a3);
      }
      o2.boundingSphere = this.geometry.boundingSphere, o2.boundingBox = this.geometry.boundingBox, a2.matrixWorld = this.matrixWorld, a2.material.side = this.material.side, js.length = 0, a2.raycast(e3, js);
      for (let e4 = 0; e4 < js.length; e4++) js[e4].object = this, t2.push(js[e4]);
    }
  }
  copy(e3) {
    let t2 = this.geometry;
    return super.copy(e3), this.geometry = t2, Bs.forEach((t3) => {
      this[t3] = e3[t3];
    }), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
zs.forEach((e3) => {
  let t2 = `_private_` + e3;
  Object.defineProperty(Vs.prototype, e3, { get() {
    return this[t2];
  }, set(e4) {
    e4 !== this[t2] && (this[t2] = e4, this._needsSync = true);
  } });
}), new I(), new z();
var Hs = J.forwardRef(({ sdfGlyphSize: e3 = 64, anchorX: t2 = `center`, anchorY: n2 = `middle`, font: r2, fontSize: i2 = 1, children: a2, characters: o2, onSync: s2, ...c2 }, l2) => {
  let u2 = En(({ invalidate: e4 }) => e4), [d2] = J.useState(() => new Vs()), [f2, p2] = J.useMemo(() => {
    let e4 = [], t3 = ``;
    return J.Children.forEach(a2, (n3) => {
      typeof n3 == `string` || typeof n3 == `number` ? t3 += n3 : e4.push(n3);
    }), [e4, t3];
  }, [a2]);
  return ut(() => new Promise((e4) => cs({ font: r2, characters: o2 }, e4)), [`troika-text`, r2, o2]), J.useLayoutEffect(() => void d2.sync(() => {
    u2(), s2 && s2(d2);
  })), J.useEffect(() => () => d2.dispose(), [d2]), J.createElement(`primitive`, li({ object: d2, ref: l2, font: r2, text: p2, anchorX: t2, anchorY: n2, fontSize: i2, sdfGlyphSize: e3 }, c2), f2);
});
function Us(e3, t2, n2, r2) {
  var i2 = class extends Se {
    constructor(i3) {
      super({ vertexShader: t2, fragmentShader: n2, ...i3 });
      for (let t3 in e3) this.uniforms[t3] = new Me(e3[t3]), Object.defineProperty(this, t3, { get() {
        return this.uniforms[t3].value;
      }, set(e4) {
        this.uniforms[t3].value = e4;
      } });
      this.uniforms = Fe.clone(this.uniforms), r2 == null ? void 0 : r2(this);
    }
  };
  return i2.key = S.generateUUID(), i2;
}
var Ws = parseInt(`187`.replace(/\D+/g, ``)), Gs = J.forwardRef(({ threshold: e3 = 15, geometry: t2, ...n2 }, r2) => {
  let i2 = J.useRef(null);
  J.useImperativeHandle(r2, () => i2.current, []);
  let a2 = J.useMemo(() => [0, 0, 0, 1, 0, 0], []), o2 = J.useRef(null), s2 = J.useRef(null);
  return J.useLayoutEffect(() => {
    let n3 = i2.current.parent, r3 = t2 ?? (n3 == null ? void 0 : n3.geometry);
    if (!r3 || o2.current === r3 && s2.current === e3) return;
    o2.current = r3, s2.current = e3;
    let a3 = new W(r3, e3).attributes.position.array;
    i2.current.geometry.setPositions(a3), i2.current.geometry.attributes.instanceStart.needsUpdate = true, i2.current.geometry.attributes.instanceEnd.needsUpdate = true, i2.current.computeLineDistances();
  }), J.createElement(Qa, li({ segments: true, points: a2, ref: i2, raycast: () => null }, n2));
}), Ks = Us({ screenspace: false, color: new z(`black`), opacity: 1, thickness: 0.05, size: new a() }, `#include <common>
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
     #include <${Ws >= 154 ? `colorspace_fragment` : `encodings_fragment`}>
   }`);
function qs({ color: e3 = `black`, opacity: t2 = 1, transparent: n2 = false, screenspace: r2 = false, toneMapped: i2 = true, polygonOffset: o2 = false, polygonOffsetFactor: s2 = 0, renderOrder: c2 = 0, thickness: l2 = 0.05, angle: u2 = Math.PI, clippingPlanes: d2, ...f2 }) {
  let p2 = J.useRef(null), [m2] = J.useState(() => new Ks({ side: 1 })), { gl: h2 } = En(), _2 = h2.getDrawingBufferSize(new a());
  J.useMemo(() => tr({ OutlinesMaterial: Ks }), []);
  let v2 = J.useRef(0), y2 = J.useRef(null);
  return J.useLayoutEffect(() => {
    var _a3;
    let e4 = p2.current;
    if (!e4) return;
    let t3 = e4.parent;
    if (t3 && t3.geometry && (v2.current !== u2 || y2.current !== t3.geometry)) {
      v2.current = u2, y2.current = t3.geometry;
      let n3 = (_a3 = e4.children) == null ? void 0 : _a3[0];
      n3 && (u2 && n3.geometry.dispose(), e4.remove(n3)), t3.skeleton ? (n3 = new Ae(), n3.material = m2, n3.bind(t3.skeleton, t3.bindMatrix), e4.add(n3)) : t3.isInstancedMesh ? (n3 = new Ne(t3.geometry, m2, t3.count), n3.instanceMatrix = t3.instanceMatrix, e4.add(n3)) : (n3 = new g(), n3.material = m2, e4.add(n3)), n3.geometry = u2 ? Di(t3.geometry, u2) : t3.geometry, n3.morphTargetInfluences = t3.morphTargetInfluences, n3.morphTargetDictionary = t3.morphTargetDictionary;
    }
  }), J.useLayoutEffect(() => {
    let a2 = p2.current;
    if (!a2) return;
    let u3 = a2.children[0];
    if (u3) {
      u3.renderOrder = c2;
      let f3 = a2.parent;
      an(u3, { morphTargetInfluences: f3.morphTargetInfluences, morphTargetDictionary: f3.morphTargetDictionary }), an(u3.material, { transparent: n2, thickness: l2, color: e3, opacity: t2, size: _2, screenspace: r2, toneMapped: i2, polygonOffset: o2, polygonOffsetFactor: s2, clippingPlanes: d2, clipping: d2 && d2.length > 0 });
    }
  }), J.useEffect(() => () => {
    let e4 = p2.current;
    if (!e4) return;
    let t3 = e4.children[0];
    t3 && (u2 && t3.geometry.dispose(), e4.remove(t3));
  }, []), J.createElement(`group`, li({ ref: p2 }, f2));
}
function Js(e3, t2, n2) {
  let r2 = En((e4) => e4.size), i2 = En((e4) => e4.viewport), a2 = typeof e3 == `number` ? e3 : r2.width * i2.dpr, o2 = typeof t2 == `number` ? t2 : r2.height * i2.dpr, c2 = (typeof e3 == `number` ? n2 : e3) || {}, { samples: u2 = 0, depth: d2, ...f2 } = c2, p2 = d2 ?? c2.depthBuffer, m2 = J.useMemo(() => {
    let e4 = new s(a2, o2, { minFilter: l, magFilter: l, type: we, ...f2 });
    return p2 && (e4.depthTexture = new De(a2, o2, je)), e4.samples = u2, e4;
  }, []);
  return J.useLayoutEffect(() => {
    m2.setSize(a2, o2), u2 && (m2.samples = u2);
  }, [u2, m2, a2, o2]), J.useEffect(() => () => m2.dispose(), []), m2;
}
var Ys = (e3) => typeof e3 == `function`, Xs = J.forwardRef(({ envMap: e3, resolution: t2 = 256, frames: n2 = 1 / 0, children: r2, makeDefault: i2, ...a2 }, o2) => {
  let s2 = En(({ set: e4 }) => e4), c2 = En(({ camera: e4 }) => e4), l2 = En(({ size: e4 }) => e4), u2 = J.useRef(null);
  J.useImperativeHandle(o2, () => u2.current, []);
  let d2 = J.useRef(null), f2 = Js(t2);
  J.useLayoutEffect(() => {
    a2.manual || u2.current.updateProjectionMatrix();
  }, [l2, a2]), J.useLayoutEffect(() => {
    u2.current.updateProjectionMatrix();
  }), J.useLayoutEffect(() => {
    if (i2) {
      let e4 = c2;
      return s2(() => ({ camera: u2.current })), () => s2(() => ({ camera: e4 }));
    }
  }, [u2, i2, s2]);
  let p2 = 0, m2 = null, h2 = Ys(r2);
  return Dn((t3) => {
    h2 && (n2 === 1 / 0 || p2 < n2) && (d2.current.visible = false, t3.gl.setRenderTarget(f2), m2 = t3.scene.background, e3 && (t3.scene.background = e3), t3.gl.render(t3.scene, u2.current), t3.scene.background = m2, t3.gl.setRenderTarget(null), d2.current.visible = true, p2++);
  }), J.createElement(J.Fragment, null, J.createElement(`orthographicCamera`, li({ left: l2.width / -2, right: l2.width / 2, top: l2.height / 2, bottom: l2.height / -2, ref: u2 }, a2), !h2 && r2), J.createElement(`group`, { ref: d2 }, h2 && r2(f2.texture)));
}), Zs = J.forwardRef(({ makeDefault: e3, camera: t2, regress: n2, domElement: r2, enableDamping: i2 = true, keyEvents: a2 = false, onChange: o2, onStart: s2, onEnd: c2, ...l2 }, u2) => {
  let d2 = En((e4) => e4.invalidate), f2 = En((e4) => e4.camera), p2 = En((e4) => e4.gl), m2 = En((e4) => e4.events), h2 = En((e4) => e4.setEvents), g2 = En((e4) => e4.set), _2 = En((e4) => e4.get), v2 = En((e4) => e4.performance), y2 = t2 || f2, b2 = r2 || m2.connected || p2.domElement, x2 = J.useMemo(() => new xa(y2), [y2]);
  return Dn(() => {
    x2.enabled && x2.update();
  }, -1), J.useEffect(() => (a2 && x2.connect(a2 === true ? b2 : a2), x2.connect(b2), () => void x2.dispose()), [a2, b2, n2, x2, d2]), J.useEffect(() => {
    let e4 = (e5) => {
      d2(), n2 && v2.regress(), o2 && o2(e5);
    }, t3 = (e5) => {
      s2 && s2(e5);
    }, r3 = (e5) => {
      c2 && c2(e5);
    };
    return x2.addEventListener(`change`, e4), x2.addEventListener(`start`, t3), x2.addEventListener(`end`, r3), () => {
      x2.removeEventListener(`start`, t3), x2.removeEventListener(`end`, r3), x2.removeEventListener(`change`, e4);
    };
  }, [o2, s2, c2, x2, d2, h2]), J.useEffect(() => {
    if (e3) {
      let e4 = _2().controls;
      return g2({ controls: x2 }), () => g2({ controls: e4 });
    }
  }, [e3, x2]), J.createElement(`primitive`, li({ ref: u2, object: x2, enableDamping: i2 }, l2));
}), Qs = J.forwardRef(({ children: e3, domElement: t2, onChange: n2, onMouseDown: r2, onMouseUp: i2, onObjectChange: a2, object: o2, makeDefault: s2, camera: c2, enabled: l2, axis: u2, mode: d2, translationSnap: f2, rotationSnap: p2, scaleSnap: m2, space: h2, size: g2, showX: _2, showY: v2, showZ: y2, ...b2 }, x2) => {
  let S2 = En((e4) => e4.controls), C2 = En((e4) => e4.gl), w2 = En((e4) => e4.events), T2 = En((e4) => e4.camera), E2 = En((e4) => e4.invalidate), D2 = En((e4) => e4.get), O2 = En((e4) => e4.set), k2 = c2 || T2, A2 = t2 || w2.connected || C2.domElement, j2 = J.useMemo(() => new fa(k2, A2), [k2, A2]), M2 = J.useRef(null);
  J.useLayoutEffect(() => (o2 ? j2.attach(o2 instanceof F ? o2 : o2.current) : M2.current instanceof F && j2.attach(M2.current), () => void j2.detach()), [o2, e3, j2]), J.useEffect(() => {
    if (S2) {
      let e4 = (e5) => S2.enabled = !e5.value;
      return j2.addEventListener(`dragging-changed`, e4), () => j2.removeEventListener(`dragging-changed`, e4);
    }
  }, [j2, S2]);
  let N2 = J.useRef(void 0), P2 = J.useRef(void 0), I2 = J.useRef(void 0), ee2 = J.useRef(void 0);
  return J.useLayoutEffect(() => void (N2.current = n2), [n2]), J.useLayoutEffect(() => void (P2.current = r2), [r2]), J.useLayoutEffect(() => void (I2.current = i2), [i2]), J.useLayoutEffect(() => void (ee2.current = a2), [a2]), J.useEffect(() => {
    let e4 = (e5) => {
      E2(), N2.current == null || N2.current(e5);
    }, t3 = (e5) => P2.current == null ? void 0 : P2.current(e5), n3 = (e5) => I2.current == null ? void 0 : I2.current(e5), r3 = (e5) => ee2.current == null ? void 0 : ee2.current(e5);
    return j2.addEventListener(`change`, e4), j2.addEventListener(`mouseDown`, t3), j2.addEventListener(`mouseUp`, n3), j2.addEventListener(`objectChange`, r3), () => {
      j2.removeEventListener(`change`, e4), j2.removeEventListener(`mouseDown`, t3), j2.removeEventListener(`mouseUp`, n3), j2.removeEventListener(`objectChange`, r3);
    };
  }, [E2, j2]), J.useEffect(() => {
    if (s2) {
      let e4 = D2().controls;
      return O2({ controls: j2 }), () => O2({ controls: e4 });
    }
  }, [s2, j2]), J.createElement(J.Fragment, null, J.createElement(`primitive`, { ref: x2, object: j2, enabled: l2, axis: u2, mode: d2, translationSnap: f2, rotationSnap: p2, scaleSnap: m2, space: h2, size: g2, showX: _2, showY: v2, showZ: y2 }), J.createElement(`group`, li({ ref: M2 }, b2), e3));
});
function $s({ defaultScene: e3, defaultCamera: t2, renderPriority: n2 = 1 }) {
  let { gl: r2, scene: i2, camera: a2 } = En(), o2;
  return Dn(() => {
    o2 = r2.autoClear, n2 === 1 && (r2.autoClear = true, r2.render(e3, t2)), r2.autoClear = false, r2.clearDepth(), r2.render(i2, a2), r2.autoClear = o2;
  }, n2), J.createElement(`group`, { onPointerOver: () => null });
}
function ec({ children: e3, renderPriority: t2 = 1 }) {
  let { scene: n2, camera: r2 } = En(), [i2] = J.useState(() => new H());
  return J.createElement(J.Fragment, null, Jr(J.createElement(J.Fragment, null, e3, J.createElement($s, { defaultScene: n2, defaultCamera: r2, renderPriority: t2 })), i2, { events: { priority: t2 + 1 } }));
}
var tc = J.createContext({}), nc = () => J.useContext(tc), rc = 2 * Math.PI, ic = new F(), ac = new d(), [oc, sc] = [new V(), new V()], cc = new G(), lc = new G(), uc = (e3) => `minPolarAngle` in e3, dc = (e3) => `getTarget` in e3, fc = ({ alignment: e3 = `bottom-right`, margin: t2 = [80, 80], renderPriority: n2 = 1, onUpdate: r2, onTarget: i2, children: a2 }) => {
  let o2 = En((e4) => e4.size), s2 = En((e4) => e4.camera), c2 = En((e4) => e4.controls), l2 = En((e4) => e4.invalidate), u2 = J.useRef(null), d2 = J.useRef(null), f2 = J.useRef(false), p2 = J.useRef(0), m2 = J.useRef(new G(0, 0, 0)), h2 = J.useRef(new G(0, 0, 0));
  J.useEffect(() => {
    h2.current.copy(s2.up), ic.up.copy(s2.up);
  }, [s2]);
  let g2 = J.useCallback((e4) => {
    f2.current = true, (c2 || i2) && (m2.current = (i2 == null ? void 0 : i2()) || (dc(c2) ? c2.getTarget(m2.current) : c2 == null ? void 0 : c2.target)), p2.current = s2.position.distanceTo(cc), oc.copy(s2.quaternion), lc.copy(e4).multiplyScalar(p2.current).add(cc), ic.lookAt(lc), sc.copy(ic.quaternion), l2();
  }, [c2, s2, i2, l2]);
  Dn((e4, t3) => {
    if (d2.current && u2.current) {
      var n3;
      if (f2.current) {
        if (oc.angleTo(sc) < 0.01) f2.current = false, uc(c2) && s2.up.copy(h2.current);
        else {
          let e5 = t3 * rc;
          oc.rotateTowards(sc, e5), s2.position.set(0, 0, 1).applyQuaternion(oc).multiplyScalar(p2.current).add(m2.current), s2.up.set(0, 1, 0).applyQuaternion(oc).normalize(), s2.quaternion.copy(oc), dc(c2) && c2.setPosition(s2.position.x, s2.position.y, s2.position.z), r2 ? r2() : c2 && c2.update(t3), l2();
        }
      }
      ac.copy(s2.matrix).invert(), (n3 = u2.current) == null || n3.quaternion.setFromRotationMatrix(ac);
    }
  });
  let _2 = J.useMemo(() => ({ tweenCamera: g2 }), [g2]), [v2, y2] = t2, b2 = e3.endsWith(`-center`) ? 0 : e3.endsWith(`-left`) ? -o2.width / 2 + v2 : o2.width / 2 - v2, x2 = e3.startsWith(`center-`) ? 0 : e3.startsWith(`top-`) ? o2.height / 2 - y2 : -o2.height / 2 + y2;
  return J.createElement(ec, { renderPriority: n2 }, J.createElement(tc.Provider, { value: _2 }, J.createElement(Xs, { makeDefault: true, ref: d2, position: [0, 0, 200] }), J.createElement(`group`, { ref: u2, position: [b2, x2, 0] }, a2)));
};
function pc({ scale: e3 = [0.8, 0.05, 0.05], color: t2, rotation: n2 }) {
  return J.createElement(`group`, { rotation: n2 }, J.createElement(`mesh`, { position: [0.4, 0, 0] }, J.createElement(`boxGeometry`, { args: e3 }), J.createElement(`meshBasicMaterial`, { color: t2, toneMapped: false })));
}
function mc({ onClick: e3, font: t2, disabled: n2, arcStyle: r2, label: i2, labelColor: a2, axisHeadScale: o2 = 1, ...s2 }) {
  let c2 = En((e4) => e4.gl), l2 = J.useMemo(() => {
    let e4 = document.createElement(`canvas`);
    e4.width = 64, e4.height = 64;
    let n3 = e4.getContext(`2d`);
    return n3.beginPath(), n3.arc(32, 32, 16, 0, 2 * Math.PI), n3.closePath(), n3.fillStyle = r2, n3.fill(), i2 && (n3.font = t2, n3.textAlign = `center`, n3.fillStyle = a2, n3.fillText(i2, 32, 41)), new y(e4);
  }, [r2, i2, a2, t2]), [u2, d2] = J.useState(false), f2 = (i2 ? 1 : 0.75) * (u2 ? 1.2 : 1) * o2;
  return J.createElement(`sprite`, li({ scale: f2, onPointerOver: n2 ? void 0 : (e4) => {
    e4.stopPropagation(), d2(true);
  }, onPointerOut: n2 ? void 0 : e3 || ((e4) => {
    e4.stopPropagation(), d2(false);
  }) }, s2), J.createElement(`spriteMaterial`, { map: l2, "map-anisotropy": c2.capabilities.getMaxAnisotropy() || 1, alphaTest: 0.3, opacity: i2 ? 1 : 0.75, toneMapped: false }));
}
var hc = ({ hideNegativeAxes: e3, hideAxisHeads: t2, disabled: n2, font: r2 = `18px Inter var, Arial, sans-serif`, axisColors: i2 = [`#ff2060`, `#20df80`, `#2080ff`], axisHeadScale: a2 = 1, axisScale: o2, labels: s2 = [`X`, `Y`, `Z`], labelColor: c2 = `#000`, onClick: l2, ...u2 }) => {
  let [d2, f2, p2] = i2, { tweenCamera: m2 } = nc(), h2 = { font: r2, disabled: n2, labelColor: c2, onClick: l2, axisHeadScale: a2, onPointerDown: n2 ? void 0 : (e4) => {
    m2(e4.object.position), e4.stopPropagation();
  } };
  return J.createElement(`group`, li({ scale: 40 }, u2), J.createElement(pc, { color: d2, rotation: [0, 0, 0], scale: o2 }), J.createElement(pc, { color: f2, rotation: [0, 0, Math.PI / 2], scale: o2 }), J.createElement(pc, { color: p2, rotation: [0, -Math.PI / 2, 0], scale: o2 }), !t2 && J.createElement(J.Fragment, null, J.createElement(mc, li({ arcStyle: d2, position: [1, 0, 0], label: s2[0] }, h2)), J.createElement(mc, li({ arcStyle: f2, position: [0, 1, 0], label: s2[1] }, h2)), J.createElement(mc, li({ arcStyle: p2, position: [0, 0, 1], label: s2[2] }, h2)), !e3 && J.createElement(J.Fragment, null, J.createElement(mc, li({ arcStyle: d2, position: [-1, 0, 0] }, h2)), J.createElement(mc, li({ arcStyle: f2, position: [0, -1, 0] }, h2)), J.createElement(mc, li({ arcStyle: p2, position: [0, 0, -1] }, h2)))));
}, gc = Us({ cellSize: 0.5, sectionSize: 1, fadeDistance: 100, fadeStrength: 1, fadeFrom: 1, cellThickness: 0.5, sectionThickness: 1, cellColor: new z(), sectionColor: new z(), infiniteGrid: false, followCamera: false, worldCamProjPosition: new G(), worldPlanePosition: new G() }, `
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
      #include <${Ws >= 154 ? `colorspace_fragment` : `encodings_fragment`}>
    }
  `), _c = J.forwardRef(({ args: e3, cellColor: t2 = `#000000`, sectionColor: n2 = `#2080ff`, cellSize: r2 = 0.5, sectionSize: i2 = 1, followCamera: a2 = false, infiniteGrid: o2 = false, fadeDistance: s2 = 100, fadeStrength: c2 = 1, fadeFrom: l2 = 1, cellThickness: u2 = 0.5, sectionThickness: d2 = 1, side: f2 = 1, ...p2 }, m2) => {
  tr({ GridMaterial: gc });
  let h2 = J.useRef(null);
  J.useImperativeHandle(m2, () => h2.current, []);
  let g2 = new v(), _2 = new G(0, 1, 0), y2 = new G(0, 0, 0);
  Dn((e4) => {
    g2.setFromNormalAndCoplanarPoint(_2, y2).applyMatrix4(h2.current.matrixWorld);
    let t3 = h2.current.material, n3 = t3.uniforms.worldCamProjPosition, r3 = t3.uniforms.worldPlanePosition;
    g2.projectPoint(e4.camera.position, n3.value), r3.value.set(0, 0, 0).applyMatrix4(h2.current.matrixWorld);
  });
  let b2 = { cellSize: r2, sectionSize: i2, cellColor: t2, sectionColor: n2, cellThickness: u2, sectionThickness: d2 }, x2 = { fadeDistance: s2, fadeStrength: c2, fadeFrom: l2, infiniteGrid: o2, followCamera: a2 };
  return J.createElement(`mesh`, li({ ref: h2, frustumCulled: false }, p2), J.createElement(`gridMaterial`, li({ transparent: true, "extensions-derivatives": true, side: f2 }, b2, x2)), J.createElement(`planeGeometry`, { args: e3 }));
});
function vc(e3, t2) {
  let n2 = e3 + `Geometry`;
  return J.forwardRef(({ args: e4, children: r2, ...i2 }, a2) => {
    let o2 = J.useRef(null);
    return J.useImperativeHandle(a2, () => o2.current), J.useLayoutEffect(() => void (t2 == null ? void 0 : t2(o2.current))), J.createElement(`mesh`, li({ ref: o2 }, i2), J.createElement(n2, { attach: `geometry`, args: e4 }), r2);
  });
}
var yc = vc(`plane`), bc = (e3, t2, n2) => {
  let r2;
  switch (e3) {
    case ie:
      r2 = new Uint8ClampedArray(t2 * n2 * 4);
      break;
    case we:
      r2 = new Uint16Array(t2 * n2 * 4);
      break;
    case j:
      r2 = new Uint32Array(t2 * n2 * 4);
      break;
    case f:
      r2 = new Int8Array(t2 * n2 * 4);
      break;
    case _e:
      r2 = new Int16Array(t2 * n2 * 4);
      break;
    case Ie:
      r2 = new Int32Array(t2 * n2 * 4);
      break;
    case je:
      r2 = new Float32Array(t2 * n2 * 4);
      break;
    default:
      throw Error(`Unsupported data type`);
  }
  return r2;
}, xc, Sc = (e3, t2, n2, r2) => {
  if (xc !== void 0) return xc;
  let i2 = new s(1, 1, r2);
  t2.setRenderTarget(i2);
  let a2 = new g(new B(), new x({ color: 16777215 }));
  t2.render(a2, n2), t2.setRenderTarget(null);
  let o2 = bc(e3, i2.width, i2.height);
  return t2.readRenderTargetPixels(i2, 0, 0, i2.width, i2.height, o2), i2.dispose(), a2.geometry.dispose(), a2.material.dispose(), xc = o2[0] !== 0, xc;
}, Cc = class e2 {
  constructor(t2) {
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
      } catch (e3) {
        throw this._renderer.setRenderTarget(null), e3;
      }
      this._renderer.setRenderTarget(null);
    });
    var _a3, _b2, _c2, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o2, _p;
    this._width = t2.width, this._height = t2.height, this._type = t2.type, this._colorSpace = t2.colorSpace;
    let n2 = { format: r, depthBuffer: false, stencilBuffer: false, type: this._type, colorSpace: this._colorSpace, anisotropy: ((_a3 = t2.renderTargetOptions) == null ? void 0 : _a3.anisotropy) === void 0 ? 1 : (_b2 = t2.renderTargetOptions) == null ? void 0 : _b2.anisotropy, generateMipmaps: ((_c2 = t2.renderTargetOptions) == null ? void 0 : _c2.generateMipmaps) !== void 0 && ((_d = t2.renderTargetOptions) == null ? void 0 : _d.generateMipmaps), magFilter: ((_e2 = t2.renderTargetOptions) == null ? void 0 : _e2.magFilter) === void 0 ? l : (_f = t2.renderTargetOptions) == null ? void 0 : _f.magFilter, minFilter: ((_g = t2.renderTargetOptions) == null ? void 0 : _g.minFilter) === void 0 ? l : (_h = t2.renderTargetOptions) == null ? void 0 : _h.minFilter, samples: ((_i2 = t2.renderTargetOptions) == null ? void 0 : _i2.samples) === void 0 ? void 0 : (_j = t2.renderTargetOptions) == null ? void 0 : _j.samples, wrapS: ((_k = t2.renderTargetOptions) == null ? void 0 : _k.wrapS) === void 0 ? Te : (_l = t2.renderTargetOptions) == null ? void 0 : _l.wrapS, wrapT: ((_m = t2.renderTargetOptions) == null ? void 0 : _m.wrapT) === void 0 ? Te : (_n2 = t2.renderTargetOptions) == null ? void 0 : _n2.wrapT };
    if (this._material = t2.material, t2.renderer ? this._renderer = t2.renderer : (this._renderer = e2.instantiateRenderer(), this._rendererIsDisposable = true), this._scene = new H(), this._camera = new p(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !Sc(this._type, this._renderer, this._camera, n2)) {
      let e3;
      switch (this._type) {
        case we:
          e3 = this._renderer.extensions.has(`EXT_color_buffer_float`) ? je : void 0;
      }
      e3 === void 0 ? (this._supportsReadPixels = false, console.warn(`This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown`)) : (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${je}`), this._type = e3);
    }
    this._quad = new g(new B(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new s(this.width, this.height, n2), this._renderTarget.texture.mapping = ((_o2 = t2.renderTargetOptions) == null ? void 0 : _o2.mapping) === void 0 ? 300 : (_p = t2.renderTargetOptions) == null ? void 0 : _p.mapping;
  }
  static instantiateRenderer() {
    let e3 = new b();
    return e3.setSize(128, 128), e3;
  }
  toArray() {
    if (!this._supportsReadPixels) throw Error(`Can't read pixels in this browser`);
    let e3 = bc(this._type, this._width, this._height);
    return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, e3), e3;
  }
  toDataTexture(e3) {
    let t2 = new n(this.toArray(), this.width, this.height, r, this._type, (e3 == null ? void 0 : e3.mapping) || 300, (e3 == null ? void 0 : e3.wrapS) || 1001, (e3 == null ? void 0 : e3.wrapT) || 1001, (e3 == null ? void 0 : e3.magFilter) || 1006, (e3 == null ? void 0 : e3.minFilter) || 1006, (e3 == null ? void 0 : e3.anisotropy) || 1, w);
    return t2.generateMipmaps = (e3 == null ? void 0 : e3.generateMipmaps) !== void 0 && (e3 == null ? void 0 : e3.generateMipmaps), t2;
  }
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
  }
  dispose(e3) {
    this.disposeOnDemandRenderer(), e3 && this.renderTarget.dispose(), this.material instanceof Se && Object.values(this.material.uniforms).forEach((e4) => {
      e4.value instanceof fe && e4.value.dispose();
    }), Object.values(this.material).forEach((e4) => {
      e4 instanceof fe && e4.dispose();
    }), this.material.dispose(), this._quad.geometry.dispose();
  }
  get width() {
    return this._width;
  }
  set width(e3) {
    this._width = e3, this._renderTarget.setSize(this._width, this._height);
  }
  get height() {
    return this._height;
  }
  set height(e3) {
    this._height = e3, this._renderTarget.setSize(this._width, this._height);
  }
  get renderer() {
    return this._renderer;
  }
  get renderTarget() {
    return this._renderTarget;
  }
  set renderTarget(e3) {
    this._renderTarget = e3, this._width = e3.width, this._height = e3.height;
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
}, wc = class extends Error {
}, Tc = class extends Error {
}, Ec = (e3, t2, n2) => {
  let r2 = RegExp(`${t2}="([^"]*)"`, `i`).exec(e3);
  if (r2) return r2[1];
  let i2 = RegExp(`<${t2}[^>]*>([\\s\\S]*?)</${t2}>`, `i`).exec(e3);
  if (i2) {
    let e4 = i2[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    return e4 && e4.length === 3 ? e4.map((e5) => e5.replace(/<\/?rdf:li>/g, ``)) : i2[1].trim();
  }
  if (n2 !== void 0) return n2;
  throw Error(`Can't find ${t2} in gainmap metadata`);
}, Dc = (e3) => {
  let t2;
  t2 = typeof TextDecoder < `u` ? new TextDecoder().decode(e3) : e3.toString();
  let n2 = t2.indexOf(`<x:xmpmeta`);
  for (; n2 !== -1; ) {
    let e4 = t2.indexOf(`x:xmpmeta>`, n2), r2 = t2.slice(n2, e4 + 10);
    try {
      let e5 = Ec(r2, `hdrgm:GainMapMin`, `0`), t3 = Ec(r2, `hdrgm:GainMapMax`), n3 = Ec(r2, `hdrgm:Gamma`, `1`), i2 = Ec(r2, `hdrgm:OffsetSDR`, `0.015625`), a2 = Ec(r2, `hdrgm:OffsetHDR`, `0.015625`), o2 = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(r2), s2 = o2 ? o2[1] : `0`, c2 = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(r2);
      if (!c2) throw Error(`Incomplete gainmap metadata`);
      let l2 = c2[1];
      return { gainMapMin: Array.isArray(e5) ? e5.map((e6) => parseFloat(e6)) : [parseFloat(e5), parseFloat(e5), parseFloat(e5)], gainMapMax: Array.isArray(t3) ? t3.map((e6) => parseFloat(e6)) : [parseFloat(t3), parseFloat(t3), parseFloat(t3)], gamma: Array.isArray(n3) ? n3.map((e6) => parseFloat(e6)) : [parseFloat(n3), parseFloat(n3), parseFloat(n3)], offsetSdr: Array.isArray(i2) ? i2.map((e6) => parseFloat(e6)) : [parseFloat(i2), parseFloat(i2), parseFloat(i2)], offsetHdr: Array.isArray(a2) ? a2.map((e6) => parseFloat(e6)) : [parseFloat(a2), parseFloat(a2), parseFloat(a2)], hdrCapacityMin: parseFloat(s2), hdrCapacityMax: parseFloat(l2) };
    } catch {
    }
    n2 = t2.indexOf(`<x:xmpmeta`, e4);
  }
}, Oc = class {
  constructor(e3) {
    __publicField(this, "options");
    this.options = { debug: e3 && e3.debug !== void 0 ? e3.debug : false, extractFII: e3 && e3.extractFII !== void 0 ? e3.extractFII : true, extractNonFII: e3 && e3.extractNonFII !== void 0 ? e3.extractNonFII : true };
  }
  extract(e3) {
    return new Promise((t2, n2) => {
      let r2 = this.options.debug, i2 = new DataView(e3.buffer);
      if (i2.getUint16(0) !== 65496) {
        n2(Error(`Not a valid jpeg`));
        return;
      }
      let a2 = i2.byteLength, o2 = 2, s2 = 0, c2;
      for (; o2 < a2; ) {
        if (++s2 > 250) {
          n2(Error(`Found no marker after ${s2} loops \u{1F635}`));
          return;
        }
        if (i2.getUint8(o2) !== 255) {
          n2(Error(`Not a valid marker at offset 0x${o2.toString(16)}, found: 0x${i2.getUint8(o2).toString(16)}`));
          return;
        }
        if (c2 = i2.getUint8(o2 + 1), r2 && console.log(`Marker: ${c2.toString(16)}`), c2 === 226) {
          r2 && console.log(`Found APP2 marker (0xffe2)`);
          let e4 = o2 + 4;
          if (i2.getUint32(e4) === 1297106432) {
            let r3 = e4 + 4, a3;
            if (i2.getUint16(r3) === 18761) a3 = false;
            else if (i2.getUint16(r3) === 19789) a3 = true;
            else {
              n2(Error(`No valid endianness marker found in TIFF header`));
              return;
            }
            if (i2.getUint16(r3 + 2, !a3) !== 42) {
              n2(Error(`Not valid TIFF data! (no 0x002A marker)`));
              return;
            }
            let o3 = i2.getUint32(r3 + 4, !a3);
            if (o3 < 8) {
              n2(Error(`Not valid TIFF data! (First offset less than 8)`));
              return;
            }
            let s3 = r3 + o3, c3 = i2.getUint16(s3, !a3), l2 = s3 + 2, u2 = 0;
            for (let e5 = l2; e5 < l2 + 12 * c3; e5 += 12) i2.getUint16(e5, !a3) === 45057 && (u2 = i2.getUint32(e5 + 8, !a3));
            let d2 = s3 + 2 + c3 * 12 + 4, f2 = [];
            for (let e5 = d2; e5 < d2 + u2 * 16; e5 += 16) {
              let t3 = { MPType: i2.getUint32(e5, !a3), size: i2.getUint32(e5 + 4, !a3), dataOffset: i2.getUint32(e5 + 8, !a3), dependantImages: i2.getUint32(e5 + 12, !a3), start: -1, end: -1, isFII: false };
              t3.dataOffset ? (t3.start = r3 + t3.dataOffset, t3.isFII = false) : (t3.start = 0, t3.isFII = true), t3.end = t3.start + t3.size, f2.push(t3);
            }
            if (this.options.extractNonFII && f2.length) {
              let e5 = new Blob([i2]), n3 = [];
              for (let t3 of f2) {
                if (t3.isFII && !this.options.extractFII) continue;
                let r4 = e5.slice(t3.start, t3.end + 1, `image/jpeg`);
                n3.push(r4);
              }
              t2(n3);
            }
          }
        }
        o2 += 2 + i2.getUint16(o2 + 2);
      }
    });
  }
}, kc = async (e3) => {
  let t2 = Dc(e3);
  if (!t2) throw new Tc(`Gain map XMP metadata not found`);
  let n2 = await new Oc({ extractFII: true, extractNonFII: true }).extract(e3);
  if (n2.length !== 2) throw new wc(`Gain map recovery image not found`);
  return { sdr: new Uint8Array(await n2[0].arrayBuffer()), gainMap: new Uint8Array(await n2[1].arrayBuffer()), metadata: t2 };
}, Ac = (e3) => new Promise((t2, n2) => {
  let r2 = document.createElement(`img`);
  r2.onload = () => {
    t2(r2);
  }, r2.onerror = (e4) => {
    n2(e4);
  }, r2.src = URL.createObjectURL(e3);
}), jc = class extends ge {
  constructor(e3, t2) {
    super(t2);
    __publicField(this, "_renderer");
    __publicField(this, "_renderTargetOptions");
    __publicField(this, "_internalLoadingManager");
    __publicField(this, "_config");
    this._config = e3, e3.renderer && (this._renderer = e3.renderer), this._internalLoadingManager = new i();
  }
  setRenderer(e3) {
    return this._renderer = e3, this;
  }
  setRenderTargetOptions(e3) {
    return this._renderTargetOptions = e3, this;
  }
  prepareQuadRenderer() {
    this._renderer || console.warn(`WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.`);
    let e3 = this._config.createMaterial({ gainMapMax: [1, 1, 1], gainMapMin: [0, 0, 0], gamma: [1, 1, 1], offsetHdr: [1, 1, 1], offsetSdr: [1, 1, 1], hdrCapacityMax: 1, hdrCapacityMin: 0, maxDisplayBoost: 1, gainMap: new fe(), sdr: new fe() });
    return this._config.createQuadRenderer({ width: 16, height: 16, type: we, colorSpace: w, material: e3, renderer: this._renderer, renderTargetOptions: this._renderTargetOptions });
  }
  async processImages(e3, t2, n2) {
    let r2 = t2 ? new Blob([t2], { type: `image/jpeg` }) : void 0, i2 = new Blob([e3], { type: `image/jpeg` }), a2, o2, s2 = false;
    if (typeof createImageBitmap > `u`) {
      let e4 = await Promise.all([r2 ? Ac(r2) : Promise.resolve(void 0), Ac(i2)]);
      o2 = e4[0], a2 = e4[1], s2 = n2 === `flipY`;
    } else {
      let e4 = await Promise.all([r2 ? createImageBitmap(r2, { imageOrientation: n2 || `flipY` }) : Promise.resolve(void 0), createImageBitmap(i2, { imageOrientation: n2 || `flipY` })]);
      o2 = e4[0], a2 = e4[1];
    }
    return { sdrImage: a2, gainMapImage: o2, needsFlip: s2 };
  }
  createTextures(e3, t2, n2) {
    let i2 = new fe(t2 || new ImageData(2, 2), 300, Te, Te, l, c, r, ie, 1, w);
    i2.flipY = n2, i2.needsUpdate = true;
    let a2 = new fe(e3, 300, Te, Te, l, c, r, ie, 1, me);
    return a2.flipY = n2, a2.needsUpdate = true, { gainMap: i2, sdr: a2 };
  }
  updateQuadRenderer(e3, t2, n2, r2, i2) {
    e3.width = t2.width, e3.height = t2.height, e3.material.gainMap = n2, e3.material.sdr = r2, e3.material.gainMapMin = i2.gainMapMin, e3.material.gainMapMax = i2.gainMapMax, e3.material.offsetHdr = i2.offsetHdr, e3.material.offsetSdr = i2.offsetSdr, e3.material.gamma = i2.gamma, e3.material.hdrCapacityMin = i2.hdrCapacityMin, e3.material.hdrCapacityMax = i2.hdrCapacityMax, e3.material.maxDisplayBoost = 2 ** i2.hdrCapacityMax, e3.material.needsUpdate = true;
  }
}, Mc = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, Nc = `
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
`, Pc = class extends Se {
  constructor({ gamma: e3, offsetHdr: t2, offsetSdr: n2, gainMapMin: r2, gainMapMax: i2, maxDisplayBoost: a2, hdrCapacityMin: o2, hdrCapacityMax: s2, sdr: c2, gainMap: l2 }) {
    super({ name: `GainMapDecoderMaterial`, vertexShader: Mc, fragmentShader: Nc, uniforms: { sdr: { value: c2 }, gainMap: { value: l2 }, gamma: { value: new G(1 / e3[0], 1 / e3[1], 1 / e3[2]) }, offsetHdr: { value: new G().fromArray(t2) }, offsetSdr: { value: new G().fromArray(n2) }, gainMapMin: { value: new G().fromArray(r2) }, gainMapMax: { value: new G().fromArray(i2) }, weightFactor: { value: (Math.log2(a2) - o2) / (s2 - o2) } }, blending: 0, depthTest: false, depthWrite: false });
    __publicField(this, "_maxDisplayBoost");
    __publicField(this, "_hdrCapacityMin");
    __publicField(this, "_hdrCapacityMax");
    this._maxDisplayBoost = a2, this._hdrCapacityMin = o2, this._hdrCapacityMax = s2, this.needsUpdate = true, this.uniformsNeedUpdate = true;
  }
  get sdr() {
    return this.uniforms.sdr.value;
  }
  set sdr(e3) {
    this.uniforms.sdr.value = e3;
  }
  get gainMap() {
    return this.uniforms.gainMap.value;
  }
  set gainMap(e3) {
    this.uniforms.gainMap.value = e3;
  }
  get offsetHdr() {
    return this.uniforms.offsetHdr.value.toArray();
  }
  set offsetHdr(e3) {
    this.uniforms.offsetHdr.value.fromArray(e3);
  }
  get offsetSdr() {
    return this.uniforms.offsetSdr.value.toArray();
  }
  set offsetSdr(e3) {
    this.uniforms.offsetSdr.value.fromArray(e3);
  }
  get gainMapMin() {
    return this.uniforms.gainMapMin.value.toArray();
  }
  set gainMapMin(e3) {
    this.uniforms.gainMapMin.value.fromArray(e3);
  }
  get gainMapMax() {
    return this.uniforms.gainMapMax.value.toArray();
  }
  set gainMapMax(e3) {
    this.uniforms.gainMapMax.value.fromArray(e3);
  }
  get gamma() {
    let e3 = this.uniforms.gamma.value;
    return [1 / e3.x, 1 / e3.y, 1 / e3.z];
  }
  set gamma(e3) {
    let t2 = this.uniforms.gamma.value;
    t2.x = 1 / e3[0], t2.y = 1 / e3[1], t2.z = 1 / e3[2];
  }
  get hdrCapacityMin() {
    return this._hdrCapacityMin;
  }
  set hdrCapacityMin(e3) {
    this._hdrCapacityMin = e3, this.calculateWeight();
  }
  get hdrCapacityMax() {
    return this._hdrCapacityMax;
  }
  set hdrCapacityMax(e3) {
    this._hdrCapacityMax = e3, this.calculateWeight();
  }
  get maxDisplayBoost() {
    return this._maxDisplayBoost;
  }
  set maxDisplayBoost(e3) {
    this._maxDisplayBoost = Math.max(1, Math.min(65504, e3)), this.calculateWeight();
  }
  calculateWeight() {
    let e3 = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
    this.uniforms.weightFactor.value = Math.max(0, Math.min(1, e3));
  }
}, Fc = class extends jc {
  constructor(e3, t2) {
    super({ renderer: e3, createMaterial: (e4) => new Pc(e4), createQuadRenderer: (e4) => new Cc(e4) }, t2);
  }
  async render(e3, t2, n2, r2) {
    let { sdrImage: i2, gainMapImage: a2, needsFlip: o2 } = await this.processImages(n2, r2, `flipY`), { gainMap: s2, sdr: c2 } = this.createTextures(i2, a2, o2);
    this.updateQuadRenderer(e3, i2, s2, c2, t2), e3.render();
  }
}, Ic = class extends Fc {
  load([e3, t2, n2], r2, i2, a2) {
    let o2 = this.prepareQuadRenderer(), s2, c2, l2, u2 = async () => {
      if (s2 && c2 && l2) {
        try {
          await this.render(o2, l2, s2, c2);
        } catch (r3) {
          this.manager.itemError(e3), this.manager.itemError(t2), this.manager.itemError(n2), typeof a2 == `function` && a2(r3), o2.disposeOnDemandRenderer();
          return;
        }
        typeof r2 == `function` && r2(o2), this.manager.itemEnd(e3), this.manager.itemEnd(t2), this.manager.itemEnd(n2), o2.disposeOnDemandRenderer();
      }
    }, d2 = true, f2 = 0, p2 = 0, m2 = true, h2 = 0, g2 = 0, _2 = true, v2 = 0, y2 = 0, b2 = () => {
      if (typeof i2 == `function`) {
        let e4 = f2 + h2 + v2, t3 = p2 + g2 + y2;
        i2(new ProgressEvent(`progress`, { lengthComputable: d2 && m2 && _2, loaded: t3, total: e4 }));
      }
    };
    this.manager.itemStart(e3), this.manager.itemStart(t2), this.manager.itemStart(n2);
    let x2 = new ae(this._internalLoadingManager);
    x2.setResponseType(`arraybuffer`), x2.setRequestHeader(this.requestHeader), x2.setPath(this.path), x2.setWithCredentials(this.withCredentials), x2.load(e3, async (e4) => {
      if (typeof e4 == `string`) throw Error(`Invalid sdr buffer`);
      s2 = e4, await u2();
    }, (e4) => {
      d2 = e4.lengthComputable, p2 = e4.loaded, f2 = e4.total, b2();
    }, (t3) => {
      this.manager.itemError(e3), typeof a2 == `function` && a2(t3);
    });
    let S2 = new ae(this._internalLoadingManager);
    S2.setResponseType(`arraybuffer`), S2.setRequestHeader(this.requestHeader), S2.setPath(this.path), S2.setWithCredentials(this.withCredentials), S2.load(t2, async (e4) => {
      if (typeof e4 == `string`) throw Error(`Invalid gainmap buffer`);
      c2 = e4, await u2();
    }, (e4) => {
      m2 = e4.lengthComputable, g2 = e4.loaded, h2 = e4.total, b2();
    }, (e4) => {
      this.manager.itemError(t2), typeof a2 == `function` && a2(e4);
    });
    let C2 = new ae(this._internalLoadingManager);
    return C2.setRequestHeader(this.requestHeader), C2.setPath(this.path), C2.setWithCredentials(this.withCredentials), C2.load(n2, async (e4) => {
      if (typeof e4 != `string`) throw Error(`Invalid metadata string`);
      l2 = JSON.parse(e4), await u2();
    }, (e4) => {
      _2 = e4.lengthComputable, y2 = e4.loaded, v2 = e4.total, b2();
    }, (e4) => {
      this.manager.itemError(n2), typeof a2 == `function` && a2(e4);
    }), o2;
  }
}, Lc = class extends Fc {
  load(e3, t2, n2, r2) {
    let i2 = this.prepareQuadRenderer(), a2 = new ae(this._internalLoadingManager);
    return a2.setResponseType(`arraybuffer`), a2.setRequestHeader(this.requestHeader), a2.setPath(this.path), a2.setWithCredentials(this.withCredentials), this.manager.itemStart(e3), a2.load(e3, async (n3) => {
      if (typeof n3 == `string`) throw Error(`Invalid buffer, received [string], was expecting [ArrayBuffer]`);
      let a3 = new Uint8Array(n3), o2, s2, c2;
      try {
        let e4 = await kc(a3);
        o2 = e4.sdr, s2 = e4.gainMap, c2 = e4.metadata;
      } catch (t3) {
        if (t3 instanceof Tc || t3 instanceof wc) console.warn(`Failure to reconstruct an HDR image from ${e3}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), c2 = { gainMapMin: [0, 0, 0], gainMapMax: [1, 1, 1], gamma: [1, 1, 1], hdrCapacityMin: 0, hdrCapacityMax: 1, offsetHdr: [0, 0, 0], offsetSdr: [0, 0, 0] }, o2 = a3;
        else throw t3;
      }
      try {
        await this.render(i2, c2, o2.buffer, s2 == null ? void 0 : s2.buffer);
      } catch (t3) {
        this.manager.itemError(e3), typeof r2 == `function` && r2(t3), i2.disposeOnDemandRenderer();
        return;
      }
      typeof t2 == `function` && t2(i2), this.manager.itemEnd(e3), i2.disposeOnDemandRenderer();
    }, n2, (t3) => {
      this.manager.itemError(e3), typeof r2 == `function` && r2(t3);
    }), i2;
  }
}, Rc = { apartment: `lebombo_1k.hdr`, city: `potsdamer_platz_1k.hdr`, dawn: `kiara_1_dawn_1k.hdr`, forest: `forest_slope_1k.hdr`, lobby: `st_fagans_interior_1k.hdr`, night: `dikhololo_night_1k.hdr`, park: `rooitou_park_1k.hdr`, studio: `studio_small_03_1k.hdr`, sunset: `venice_sunset_1k.hdr`, warehouse: `empty_warehouse_01_1k.hdr` }, zc = `https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/`, Bc = (e3) => Array.isArray(e3), Vc = [`/px.png`, `/nx.png`, `/py.png`, `/ny.png`, `/pz.png`, `/nz.png`];
function Hc({ files: e3 = Vc, path: t2 = ``, preset: n2 = void 0, colorSpace: r2 = void 0, extensions: i2 } = {}) {
  var _a3;
  n2 && (Gc(n2), e3 = Rc[n2], t2 = zc);
  let a2 = Bc(e3), { extension: o2, isCubemap: s2 } = Kc(e3), c2 = qc(o2);
  if (!c2) throw Error(`useEnvironment: Unrecognized file extension: ` + e3);
  let l2 = En((e4) => e4.gl);
  (0, J.useLayoutEffect)(() => {
    if (o2 !== `webp` && o2 !== `jpg` && o2 !== `jpeg`) return;
    function t3() {
      jn.clear(c2, a2 ? [e3] : e3);
    }
    l2.domElement.addEventListener(`webglcontextlost`, t3, { once: true });
  }, [e3, l2.domElement]);
  let u2 = jn(c2, a2 ? [e3] : e3, (e4) => {
    (o2 === `webp` || o2 === `jpg` || o2 === `jpeg`) && e4.setRenderer(l2), e4.setPath == null || e4.setPath(t2), i2 && i2(e4);
  }), d2 = a2 ? u2[0] : u2;
  return (o2 === `jpg` || o2 === `jpeg` || o2 === `webp`) && (d2 = (_a3 = d2.renderTarget) == null ? void 0 : _a3.texture), d2.mapping = s2 ? 301 : 303, d2.colorSpace = r2 ?? (s2 ? `srgb` : `srgb-linear`), d2;
}
var Uc = { files: Vc, path: ``, preset: void 0, extensions: void 0 };
Hc.preload = (e3) => {
  let t2 = { ...Uc, ...e3 }, { files: n2, path: r2 = `` } = t2, { preset: i2, extensions: a2 } = t2;
  i2 && (Gc(i2), n2 = Rc[i2], r2 = zc);
  let { extension: o2 } = Kc(n2);
  if (o2 === `webp` || o2 === `jpg` || o2 === `jpeg`) throw Error(`useEnvironment: Preloading gainmaps is not supported`);
  let s2 = qc(o2);
  if (!s2) throw Error(`useEnvironment: Unrecognized file extension: ` + n2);
  jn.preload(s2, Bc(n2) ? [n2] : n2, (e4) => {
    e4.setPath == null || e4.setPath(r2), a2 && a2(e4);
  });
};
var Wc = { files: Vc, preset: void 0 };
Hc.clear = (e3) => {
  let t2 = { ...Wc, ...e3 }, { files: n2 } = t2, { preset: r2 } = t2;
  r2 && (Gc(r2), n2 = Rc[r2]);
  let { extension: i2 } = Kc(n2), a2 = qc(i2);
  if (!a2) throw Error(`useEnvironment: Unrecognized file extension: ` + n2);
  jn.clear(a2, Bc(n2) ? [n2] : n2);
};
function Gc(e3) {
  if (!(e3 in Rc)) throw Error(`Preset must be one of: ` + Object.keys(Rc).join(`, `));
}
function Kc(e3) {
  var t2;
  let n2 = Bc(e3) && e3.length === 6, r2 = Bc(e3) && e3.length === 3 && e3.some((e4) => e4.endsWith(`json`)), i2 = Bc(e3) ? e3[0] : e3;
  return { extension: n2 ? `cube` : r2 ? `webp` : i2.startsWith(`data:application/exr`) ? `exr` : i2.startsWith(`data:application/hdr`) ? `hdr` : i2.startsWith(`data:image/jpeg`) ? `jpg` : (t2 = i2.split(`.`).pop()) == null || (t2 = t2.split(`?`)) == null || (t2 = t2.shift()) == null ? void 0 : t2.toLowerCase(), isCubemap: n2, isGainmap: r2 };
}
function qc(e3) {
  return e3 === `cube` ? te : e3 === `hdr` ? wa : e3 === `exr` ? Ea : e3 === `jpg` || e3 === `jpeg` ? Lc : e3 === `webp` ? Ic : null;
}
var Jc = (e3) => e3.current && e3.current.isScene, Yc = (e3) => Jc(e3) ? e3.current : e3;
function Xc(e3, t2, n2, r2, i2 = {}) {
  var a2, o2;
  i2 = { backgroundBlurriness: 0, backgroundIntensity: 1, backgroundRotation: [0, 0, 0], environmentIntensity: 1, environmentRotation: [0, 0, 0], ...i2 };
  let s2 = Yc(t2 || n2), c2 = s2.background, l2 = s2.environment, u2 = { backgroundBlurriness: s2.backgroundBlurriness, backgroundIntensity: s2.backgroundIntensity, backgroundRotation: ((a2 = s2.backgroundRotation) == null || a2.clone == null ? void 0 : a2.clone()) ?? [0, 0, 0], environmentIntensity: s2.environmentIntensity, environmentRotation: ((o2 = s2.environmentRotation) == null || o2.clone == null ? void 0 : o2.clone()) ?? [0, 0, 0] };
  return e3 !== `only` && (s2.environment = r2), e3 && (s2.background = r2), an(s2, i2), () => {
    e3 !== `only` && (s2.environment = l2), e3 && (s2.background = c2), an(s2, u2);
  };
}
function Zc({ scene: e3, background: t2 = false, map: n2, ...r2 }) {
  let i2 = En((e4) => e4.scene);
  return J.useLayoutEffect(() => {
    if (n2) return Xc(t2, e3, i2, n2, r2);
  }), null;
}
function Qc({ background: e3 = false, scene: t2, blur: n2, backgroundBlurriness: r2, backgroundIntensity: i2, backgroundRotation: a2, environmentIntensity: o2, environmentRotation: s2, ...c2 }) {
  let l2 = Hc(c2), u2 = En((e4) => e4.scene);
  return J.useLayoutEffect(() => Xc(e3, t2, u2, l2, { backgroundBlurriness: n2 ?? r2, backgroundIntensity: i2, backgroundRotation: a2, environmentIntensity: o2, environmentRotation: s2 })), J.useEffect(() => () => {
    l2.dispose();
  }, [l2]), null;
}
function $c({ children: e3, near: t2 = 0.1, far: n2 = 1e3, resolution: r2 = 256, frames: i2 = 1, map: a2, background: o2 = false, blur: s2, backgroundBlurriness: c2, backgroundIntensity: l2, backgroundRotation: u2, environmentIntensity: d2, environmentRotation: f2, scene: p2, files: m2, path: g2, preset: _2 = void 0, extensions: v2 }) {
  let y2 = En((e4) => e4.gl), b2 = En((e4) => e4.scene), x2 = J.useRef(null), [S2] = J.useState(() => new H()), C2 = J.useMemo(() => {
    let e4 = new h(r2);
    return e4.texture.type = we, e4;
  }, [r2]);
  J.useEffect(() => () => {
    C2.dispose();
  }, [C2]), J.useLayoutEffect(() => {
    if (i2 === 1) {
      let e4 = y2.autoClear;
      y2.autoClear = true, x2.current.update(y2, S2), y2.autoClear = e4;
    }
    return Xc(o2, p2, b2, C2.texture, { backgroundBlurriness: s2 ?? c2, backgroundIntensity: l2, backgroundRotation: u2, environmentIntensity: d2, environmentRotation: f2 });
  }, [e3, S2, C2.texture, p2, b2, o2, i2, y2]);
  let w2 = 1;
  return Dn(() => {
    if (i2 === 1 / 0 || w2 < i2) {
      let e4 = y2.autoClear;
      y2.autoClear = true, x2.current.update(y2, S2), y2.autoClear = e4, w2++;
    }
  }), J.createElement(J.Fragment, null, Jr(J.createElement(J.Fragment, null, e3, J.createElement(`cubeCamera`, { ref: x2, args: [t2, n2, C2] }), m2 || _2 ? J.createElement(Qc, { background: true, files: m2, preset: _2, path: g2, extensions: v2 }) : a2 ? J.createElement(Zc, { background: true, map: a2, extensions: v2 }) : null), S2));
}
function el(e3) {
  var _a3, _b2, _c2;
  let t2 = Hc(e3), n2 = e3.map || t2;
  J.useMemo(() => tr({ GroundProjectedEnvImpl: aa }), []), J.useEffect(() => () => {
    t2.dispose();
  }, [t2]);
  let r2 = J.useMemo(() => [n2], [n2]), i2 = (_a3 = e3.ground) == null ? void 0 : _a3.height, a2 = (_b2 = e3.ground) == null ? void 0 : _b2.radius, o2 = ((_c2 = e3.ground) == null ? void 0 : _c2.scale) ?? 1e3;
  return J.createElement(J.Fragment, null, J.createElement(Zc, li({}, e3, { map: n2 })), J.createElement(`groundProjectedEnvImpl`, { args: r2, scale: o2, height: i2, radius: a2 }));
}
function tl(e3) {
  return e3.ground ? J.createElement(el, e3) : e3.map ? J.createElement(Zc, e3) : e3.children ? J.createElement($c, e3) : J.createElement(Qc, e3);
}
var nl = J.forwardRef(({ scale: e3 = 10, frames: t2 = 1 / 0, opacity: n2 = 1, width: r2 = 1, height: i2 = 1, blur: a2 = 1, near: o2 = 0, far: c2 = 10, resolution: l2 = 512, smooth: u2 = true, color: d2 = `#000000`, depthWrite: f2 = false, renderOrder: p2, ...m2 }, h2) => {
  let _2 = J.useRef(null), v2 = En((e4) => e4.scene), y2 = En((e4) => e4.gl), b2 = J.useRef(null);
  r2 *= Array.isArray(e3) ? e3[0] : e3 || 1, i2 *= Array.isArray(e3) ? e3[1] : e3 || 1;
  let [x2, S2, C2, w2, T2, E2, D2] = J.useMemo(() => {
    let e4 = new s(l2, l2), t3 = new s(l2, l2);
    t3.texture.generateMipmaps = e4.texture.generateMipmaps = false;
    let n3 = new B(r2, i2).rotateX(Math.PI / 2), a3 = new g(n3), o3 = new A();
    o3.depthTest = o3.depthWrite = false, o3.onBeforeCompile = (e5) => {
      e5.uniforms = { ...e5.uniforms, ucolor: { value: new z(d2) } }, e5.fragmentShader = e5.fragmentShader.replace(`void main() {`, `uniform vec3 ucolor;
           void main() {
          `), e5.fragmentShader = e5.fragmentShader.replace(`vec4( vec3( 1.0 - fragCoordZ ), opacity );`, `vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );`);
    };
    let c3 = new Se(Sa), u3 = new Se(Ca);
    return u3.depthTest = c3.depthTest = false, [e4, n3, o3, a3, c3, u3, t3];
  }, [l2, r2, i2, e3, d2]), O2 = (e4) => {
    w2.visible = true, w2.material = T2, T2.uniforms.tDiffuse.value = x2.texture, T2.uniforms.h.value = e4 * 1 / 256, y2.setRenderTarget(D2), y2.render(w2, b2.current), w2.material = E2, E2.uniforms.tDiffuse.value = D2.texture, E2.uniforms.v.value = e4 * 1 / 256, y2.setRenderTarget(x2), y2.render(w2, b2.current), w2.visible = false;
  }, k2 = 0, j2, M2;
  return Dn(() => {
    b2.current && (t2 === 1 / 0 || k2 < t2) && (k2++, j2 = v2.background, M2 = v2.overrideMaterial, _2.current.visible = false, v2.background = null, v2.overrideMaterial = C2, y2.setRenderTarget(x2), y2.render(v2, b2.current), O2(a2), u2 && O2(a2 * 0.4), y2.setRenderTarget(null), _2.current.visible = true, v2.overrideMaterial = M2, v2.background = j2);
  }), J.useImperativeHandle(h2, () => _2.current, []), J.createElement(`group`, li({ "rotation-x": Math.PI / 2 }, m2, { ref: _2 }), J.createElement(`mesh`, { renderOrder: p2, geometry: S2, scale: [1, -1, 1], rotation: [-Math.PI / 2, 0, 0] }, J.createElement(`meshBasicMaterial`, { transparent: true, map: x2.texture, opacity: n2, depthWrite: f2 })), J.createElement(`orthographicCamera`, { ref: b2, args: [-r2 / 2, r2 / 2, i2 / 2, -i2 / 2, o2, c2] }));
}), rl = J.forwardRef(({ light: e3, args: t2, map: n2, toneMapped: r2 = false, color: i2 = `white`, form: a2 = `rect`, intensity: o2 = 1, scale: s2 = 1, target: c2 = [0, 0, 0], children: l2, ...u2 }, d2) => {
  let f2 = J.useRef(null);
  return J.useImperativeHandle(d2, () => f2.current, []), J.useLayoutEffect(() => {
    !l2 && !u2.material && (an(f2.current.material, { color: i2 }), f2.current.material.color.multiplyScalar(o2));
  }, [i2, o2, l2, u2.material]), J.useLayoutEffect(() => {
    u2.rotation || f2.current.quaternion.identity(), c2 && !u2.rotation && (typeof c2 == `boolean` ? f2.current.lookAt(0, 0, 0) : f2.current.lookAt(Array.isArray(c2) ? new G(...c2) : c2));
  }, [c2, u2.rotation]), s2 = Array.isArray(s2) && s2.length === 2 ? [s2[0], s2[1], 1] : s2, J.createElement(`mesh`, li({ ref: f2, scale: s2 }, u2), a2 === `circle` ? J.createElement(`ringGeometry`, { args: t2 || [0, 0.5, 64] }) : a2 === `ring` ? J.createElement(`ringGeometry`, { args: t2 || [0.25, 0.5, 64] }) : a2 === `rect` || a2 === `plane` ? J.createElement(`planeGeometry`, { args: t2 || [1, 1] }) : a2 === `box` ? J.createElement(`boxGeometry`, { args: t2 || [1, 1, 1] }) : J.createElement(a2, { args: t2 }), l2 || J.createElement(`meshBasicMaterial`, { toneMapped: r2, map: n2, side: 2 }), e3 && J.createElement(`pointLight`, li({ castShadow: true }, e3)));
});
export {
  We as A,
  jn as C,
  $e as D,
  ut as E,
  Re as M,
  Ye as O,
  Dn as S,
  En as T,
  an as _,
  _c as a,
  tr as b,
  Qs as c,
  Gs as d,
  Hs as f,
  Pr as g,
  ci as h,
  yc as i,
  He as j,
  qe as k,
  Zs as l,
  wi as m,
  nl as n,
  hc as o,
  Qa as p,
  tl as r,
  fc as s,
  rl as t,
  qs as u,
  Cn as v,
  Tn as w,
  Cr as x,
  Jr as y
};
