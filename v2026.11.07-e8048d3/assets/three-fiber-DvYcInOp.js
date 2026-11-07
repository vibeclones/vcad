import { R as Lc, V as Dc, a as Al, W as Np, O as Tp, P as Ip, S as Pp, b as Du, c as Rp, d as jp, B as Mp, C as Fp, L as Op, e as Uc, N as Lp, A as Dp, f as Up, g as fc, h as Ap, i as qp, U as Hp, T as Bp } from "./three-tnxpQXqG.js";
function Vp(i, u) {
  for (var s = 0; s < u.length; s++) {
    const d = u[s];
    if (typeof d != "string" && !Array.isArray(d)) {
      for (const c in d) if (c !== "default" && !(c in i)) {
        const g = Object.getOwnPropertyDescriptor(d, c);
        g && Object.defineProperty(i, c, g.get ? g : { enumerable: true, get: () => d[c] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
function ui(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Uu = { exports: {} }, Ul = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var dc;
function $p() {
  if (dc) return Ul;
  dc = 1;
  var i = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function s(d, c, g) {
    var F = null;
    if (g !== void 0 && (F = "" + g), c.key !== void 0 && (F = "" + c.key), "key" in c) {
      g = {};
      for (var k in c) k !== "key" && (g[k] = c[k]);
    } else g = c;
    return c = g.ref, { $$typeof: i, type: d, key: F, ref: c !== void 0 ? c : null, props: g };
  }
  return Ul.Fragment = u, Ul.jsx = s, Ul.jsxs = s, Ul;
}
var pc;
function Qp() {
  return pc || (pc = 1, Uu.exports = $p()), Uu.exports;
}
var Xe = Qp(), Au = { exports: {} }, ne = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var mc;
function Yp() {
  if (mc) return ne;
  mc = 1;
  var i = Symbol.for("react.transitional.element"), u = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), F = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), P = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), w = Symbol.iterator;
  function x(p) {
    return p === null || typeof p != "object" ? null : (p = w && p[w] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var R = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, Z = {};
  function N(p, E, D) {
    this.props = p, this.context = E, this.refs = Z, this.updater = D || R;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(p, E) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, E, "setState");
  }, N.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function C() {
  }
  C.prototype = N.prototype;
  function Q(p, E, D) {
    this.props = p, this.context = E, this.refs = Z, this.updater = D || R;
  }
  var X = Q.prototype = new C();
  X.constructor = Q, q(X, N.prototype), X.isPureReactComponent = true;
  var ee = Array.isArray;
  function A() {
  }
  var U = { H: null, A: null, T: null, S: null }, me = Object.prototype.hasOwnProperty;
  function re(p, E, D) {
    var O = D.ref;
    return { $$typeof: i, type: p, key: E, ref: O !== void 0 ? O : null, props: D };
  }
  function oe(p, E) {
    return re(p.type, E, p.props);
  }
  function fe(p) {
    return typeof p == "object" && p !== null && p.$$typeof === i;
  }
  function Me(p) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(D) {
      return E[D];
    });
  }
  var Y = /\/+/g;
  function Se(p, E) {
    return typeof p == "object" && p !== null && p.key != null ? Me("" + p.key) : E.toString(36);
  }
  function we(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(A, A) : (p.status = "pending", p.then(function(E) {
          p.status === "pending" && (p.status = "fulfilled", p.value = E);
        }, function(E) {
          p.status === "pending" && (p.status = "rejected", p.reason = E);
        })), p.status) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function j(p, E, D, O, J) {
    var ue = typeof p;
    (ue === "undefined" || ue === "boolean") && (p = null);
    var be = false;
    if (p === null) be = true;
    else switch (ue) {
      case "bigint":
      case "string":
      case "number":
        be = true;
        break;
      case "object":
        switch (p.$$typeof) {
          case i:
          case u:
            be = true;
            break;
          case _:
            return be = p._init, j(be(p._payload), E, D, O, J);
        }
    }
    if (be) return J = J(p), be = O === "" ? "." + Se(p, 0) : O, ee(J) ? (D = "", be != null && (D = be.replace(Y, "$&/") + "/"), j(J, E, D, "", function(Vl) {
      return Vl;
    })) : J != null && (fe(J) && (J = oe(J, D + (J.key == null || p && p.key === J.key ? "" : ("" + J.key).replace(Y, "$&/") + "/") + be)), E.push(J)), 1;
    be = 0;
    var Je = O === "" ? "." : O + ":";
    if (ee(p)) for (var _e = 0; _e < p.length; _e++) O = p[_e], ue = Je + Se(O, _e), be += j(O, E, D, ue, J);
    else if (_e = x(p), typeof _e == "function") for (p = _e.call(p), _e = 0; !(O = p.next()).done; ) O = O.value, ue = Je + Se(O, _e++), be += j(O, E, D, ue, J);
    else if (ue === "object") {
      if (typeof p.then == "function") return j(we(p), E, D, O, J);
      throw E = String(p), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    }
    return be;
  }
  function H(p, E, D) {
    if (p == null) return p;
    var O = [], J = 0;
    return j(p, O, "", "", function(ue) {
      return E.call(D, ue, J++);
    }), O;
  }
  function B(p) {
    if (p._status === -1) {
      var E = p._result;
      E = E(), E.then(function(D) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = D);
      }, function(D) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = D);
      }), p._status === -1 && (p._status = 0, p._result = E);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var K = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p), error: p });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  }, de = { map: H, forEach: function(p, E, D) {
    H(p, function() {
      E.apply(this, arguments);
    }, D);
  }, count: function(p) {
    var E = 0;
    return H(p, function() {
      E++;
    }), E;
  }, toArray: function(p) {
    return H(p, function(E) {
      return E;
    }) || [];
  }, only: function(p) {
    if (!fe(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } };
  return ne.Activity = S, ne.Children = de, ne.Component = N, ne.Fragment = s, ne.Profiler = c, ne.PureComponent = Q, ne.StrictMode = d, ne.Suspense = y, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, ne.__COMPILER_RUNTIME = { __proto__: null, c: function(p) {
    return U.H.useMemoCache(p);
  } }, ne.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, ne.cacheSignal = function() {
    return null;
  }, ne.cloneElement = function(p, E, D) {
    if (p == null) throw Error("The argument must be a React element, but you passed " + p + ".");
    var O = q({}, p.props), J = p.key;
    if (E != null) for (ue in E.key !== void 0 && (J = "" + E.key), E) !me.call(E, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && E.ref === void 0 || (O[ue] = E[ue]);
    var ue = arguments.length - 2;
    if (ue === 1) O.children = D;
    else if (1 < ue) {
      for (var be = Array(ue), Je = 0; Je < ue; Je++) be[Je] = arguments[Je + 2];
      O.children = be;
    }
    return re(p.type, J, O);
  }, ne.createContext = function(p) {
    return p = { $$typeof: F, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null }, p.Provider = p, p.Consumer = { $$typeof: g, _context: p }, p;
  }, ne.createElement = function(p, E, D) {
    var O, J = {}, ue = null;
    if (E != null) for (O in E.key !== void 0 && (ue = "" + E.key), E) me.call(E, O) && O !== "key" && O !== "__self" && O !== "__source" && (J[O] = E[O]);
    var be = arguments.length - 2;
    if (be === 1) J.children = D;
    else if (1 < be) {
      for (var Je = Array(be), _e = 0; _e < be; _e++) Je[_e] = arguments[_e + 2];
      J.children = Je;
    }
    if (p && p.defaultProps) for (O in be = p.defaultProps, be) J[O] === void 0 && (J[O] = be[O]);
    return re(p, ue, J);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(p) {
    return { $$typeof: k, render: p };
  }, ne.isValidElement = fe, ne.lazy = function(p) {
    return { $$typeof: _, _payload: { _status: -1, _result: p }, _init: B };
  }, ne.memo = function(p, E) {
    return { $$typeof: P, type: p, compare: E === void 0 ? null : E };
  }, ne.startTransition = function(p) {
    var E = U.T, D = {};
    U.T = D;
    try {
      var O = p(), J = U.S;
      J !== null && J(D, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(A, K);
    } catch (ue) {
      K(ue);
    } finally {
      E !== null && D.types !== null && (E.types = D.types), U.T = E;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return U.H.useCacheRefresh();
  }, ne.use = function(p) {
    return U.H.use(p);
  }, ne.useActionState = function(p, E, D) {
    return U.H.useActionState(p, E, D);
  }, ne.useCallback = function(p, E) {
    return U.H.useCallback(p, E);
  }, ne.useContext = function(p) {
    return U.H.useContext(p);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(p, E) {
    return U.H.useDeferredValue(p, E);
  }, ne.useEffect = function(p, E) {
    return U.H.useEffect(p, E);
  }, ne.useEffectEvent = function(p) {
    return U.H.useEffectEvent(p);
  }, ne.useId = function() {
    return U.H.useId();
  }, ne.useImperativeHandle = function(p, E, D) {
    return U.H.useImperativeHandle(p, E, D);
  }, ne.useInsertionEffect = function(p, E) {
    return U.H.useInsertionEffect(p, E);
  }, ne.useLayoutEffect = function(p, E) {
    return U.H.useLayoutEffect(p, E);
  }, ne.useMemo = function(p, E) {
    return U.H.useMemo(p, E);
  }, ne.useOptimistic = function(p, E) {
    return U.H.useOptimistic(p, E);
  }, ne.useReducer = function(p, E, D) {
    return U.H.useReducer(p, E, D);
  }, ne.useRef = function(p) {
    return U.H.useRef(p);
  }, ne.useState = function(p) {
    return U.H.useState(p);
  }, ne.useSyncExternalStore = function(p, E, D) {
    return U.H.useSyncExternalStore(p, E, D);
  }, ne.useTransition = function() {
    return U.H.useTransition();
  }, ne.version = "19.2.4", ne;
}
var hc;
function ii() {
  return hc || (hc = 1, Au.exports = Yp()), Au.exports;
}
var G = ii();
const ai = ui(G), ph = Vp({ __proto__: null, default: ai }, [G]);
var qu = { exports: {} }, Hu = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var vc;
function Wp() {
  return vc || (vc = 1, (function(i) {
    function u(j, H) {
      var B = j.length;
      j.push(H);
      e: for (; 0 < B; ) {
        var K = B - 1 >>> 1, de = j[K];
        if (0 < c(de, H)) j[K] = H, j[B] = de, B = K;
        else break e;
      }
    }
    function s(j) {
      return j.length === 0 ? null : j[0];
    }
    function d(j) {
      if (j.length === 0) return null;
      var H = j[0], B = j.pop();
      if (B !== H) {
        j[0] = B;
        e: for (var K = 0, de = j.length, p = de >>> 1; K < p; ) {
          var E = 2 * (K + 1) - 1, D = j[E], O = E + 1, J = j[O];
          if (0 > c(D, B)) O < de && 0 > c(J, D) ? (j[K] = J, j[O] = B, K = O) : (j[K] = D, j[E] = B, K = E);
          else if (O < de && 0 > c(J, B)) j[K] = J, j[O] = B, K = O;
          else break e;
        }
      }
      return H;
    }
    function c(j, H) {
      var B = j.sortIndex - H.sortIndex;
      return B !== 0 ? B : j.id - H.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var g = performance;
      i.unstable_now = function() {
        return g.now();
      };
    } else {
      var F = Date, k = F.now();
      i.unstable_now = function() {
        return F.now() - k;
      };
    }
    var y = [], P = [], _ = 1, S = null, w = 3, x = false, R = false, q = false, Z = false, N = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function X(j) {
      for (var H = s(P); H !== null; ) {
        if (H.callback === null) d(P);
        else if (H.startTime <= j) d(P), H.sortIndex = H.expirationTime, u(y, H);
        else break;
        H = s(P);
      }
    }
    function ee(j) {
      if (q = false, X(j), !R) if (s(y) !== null) R = true, A || (A = true, Me());
      else {
        var H = s(P);
        H !== null && we(ee, H.startTime - j);
      }
    }
    var A = false, U = -1, me = 5, re = -1;
    function oe() {
      return Z ? true : !(i.unstable_now() - re < me);
    }
    function fe() {
      if (Z = false, A) {
        var j = i.unstable_now();
        re = j;
        var H = true;
        try {
          e: {
            R = false, q && (q = false, C(U), U = -1), x = true;
            var B = w;
            try {
              n: {
                for (X(j), S = s(y); S !== null && !(S.expirationTime > j && oe()); ) {
                  var K = S.callback;
                  if (typeof K == "function") {
                    S.callback = null, w = S.priorityLevel;
                    var de = K(S.expirationTime <= j);
                    if (j = i.unstable_now(), typeof de == "function") {
                      S.callback = de, X(j), H = true;
                      break n;
                    }
                    S === s(y) && d(y), X(j);
                  } else d(y);
                  S = s(y);
                }
                if (S !== null) H = true;
                else {
                  var p = s(P);
                  p !== null && we(ee, p.startTime - j), H = false;
                }
              }
              break e;
            } finally {
              S = null, w = B, x = false;
            }
            H = void 0;
          }
        } finally {
          H ? Me() : A = false;
        }
      }
    }
    var Me;
    if (typeof Q == "function") Me = function() {
      Q(fe);
    };
    else if (typeof MessageChannel < "u") {
      var Y = new MessageChannel(), Se = Y.port2;
      Y.port1.onmessage = fe, Me = function() {
        Se.postMessage(null);
      };
    } else Me = function() {
      N(fe, 0);
    };
    function we(j, H) {
      U = N(function() {
        j(i.unstable_now());
      }, H);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, i.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : me = 0 < j ? Math.floor(1e3 / j) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, i.unstable_next = function(j) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = w;
      }
      var B = w;
      w = H;
      try {
        return j();
      } finally {
        w = B;
      }
    }, i.unstable_requestPaint = function() {
      Z = true;
    }, i.unstable_runWithPriority = function(j, H) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var B = w;
      w = j;
      try {
        return H();
      } finally {
        w = B;
      }
    }, i.unstable_scheduleCallback = function(j, H, B) {
      var K = i.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? K + B : K) : B = K, j) {
        case 1:
          var de = -1;
          break;
        case 2:
          de = 250;
          break;
        case 5:
          de = 1073741823;
          break;
        case 4:
          de = 1e4;
          break;
        default:
          de = 5e3;
      }
      return de = B + de, j = { id: _++, callback: H, priorityLevel: j, startTime: B, expirationTime: de, sortIndex: -1 }, B > K ? (j.sortIndex = B, u(P, j), s(y) === null && j === s(P) && (q ? (C(U), U = -1) : q = true, we(ee, B - K))) : (j.sortIndex = de, u(y, j), R || x || (R = true, A || (A = true, Me()))), j;
    }, i.unstable_shouldYield = oe, i.unstable_wrapCallback = function(j) {
      var H = w;
      return function() {
        var B = w;
        w = H;
        try {
          return j.apply(this, arguments);
        } finally {
          w = B;
        }
      };
    };
  })(Hu)), Hu;
}
var gc;
function Xp() {
  return gc || (gc = 1, qu.exports = Wp()), qu.exports;
}
var Bu = { exports: {} }, Vu = {}, $u = { exports: {} }, Qu = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var bc;
function Gp() {
  if (bc) return Qu;
  bc = 1;
  var i = ii();
  function u(S, w) {
    return S === w && (S !== 0 || 1 / S === 1 / w) || S !== S && w !== w;
  }
  var s = typeof Object.is == "function" ? Object.is : u, d = i.useState, c = i.useEffect, g = i.useLayoutEffect, F = i.useDebugValue;
  function k(S, w) {
    var x = w(), R = d({ inst: { value: x, getSnapshot: w } }), q = R[0].inst, Z = R[1];
    return g(function() {
      q.value = x, q.getSnapshot = w, y(q) && Z({ inst: q });
    }, [S, x, w]), c(function() {
      return y(q) && Z({ inst: q }), S(function() {
        y(q) && Z({ inst: q });
      });
    }, [S]), F(x), x;
  }
  function y(S) {
    var w = S.getSnapshot;
    S = S.value;
    try {
      var x = w();
      return !s(S, x);
    } catch {
      return true;
    }
  }
  function P(S, w) {
    return w();
  }
  var _ = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? P : k;
  return Qu.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : _, Qu;
}
var yc;
function Zp() {
  return yc || (yc = 1, $u.exports = Gp()), $u.exports;
}
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Sc;
function Kp() {
  if (Sc) return Vu;
  Sc = 1;
  var i = ii(), u = Zp();
  function s(P, _) {
    return P === _ && (P !== 0 || 1 / P === 1 / _) || P !== P && _ !== _;
  }
  var d = typeof Object.is == "function" ? Object.is : s, c = u.useSyncExternalStore, g = i.useRef, F = i.useEffect, k = i.useMemo, y = i.useDebugValue;
  return Vu.useSyncExternalStoreWithSelector = function(P, _, S, w, x) {
    var R = g(null);
    if (R.current === null) {
      var q = { hasValue: false, value: null };
      R.current = q;
    } else q = R.current;
    R = k(function() {
      function N(A) {
        if (!C) {
          if (C = true, Q = A, A = w(A), x !== void 0 && q.hasValue) {
            var U = q.value;
            if (x(U, A)) return X = U;
          }
          return X = A;
        }
        if (U = X, d(Q, A)) return U;
        var me = w(A);
        return x !== void 0 && x(U, me) ? (Q = A, U) : (Q = A, X = me);
      }
      var C = false, Q, X, ee = S === void 0 ? null : S;
      return [function() {
        return N(_());
      }, ee === null ? void 0 : function() {
        return N(ee());
      }];
    }, [_, S, w, x]);
    var Z = c(P, R[0], R[1]);
    return F(function() {
      q.hasValue = true, q.value = Z;
    }, [Z]), y(Z), Z;
  }, Vu;
}
var Ec;
function Jp() {
  return Ec || (Ec = 1, Bu.exports = Kp()), Bu.exports;
}
var em = Jp();
const nm = ui(em), kc = (i) => {
  let u;
  const s = /* @__PURE__ */ new Set(), d = (P, _) => {
    const S = typeof P == "function" ? P(u) : P;
    if (!Object.is(S, u)) {
      const w = u;
      u = _ ?? (typeof S != "object" || S === null) ? S : Object.assign({}, u, S), s.forEach((x) => x(u, w));
    }
  }, c = () => u, k = { setState: d, getState: c, getInitialState: () => y, subscribe: (P) => (s.add(P), () => s.delete(P)) }, y = u = i(d, c, k);
  return k;
}, tm = ((i) => i ? kc(i) : kc), { useSyncExternalStoreWithSelector: lm } = nm, rm = (i) => i;
function om(i, u = rm, s) {
  const d = lm(i.subscribe, i.getState, i.getInitialState, u, s);
  return ai.useDebugValue(d), d;
}
const wc = (i, u) => {
  const s = tm(i), d = (c, g = u) => om(s, c, g);
  return Object.assign(d, s), d;
}, Ac = ((i, u) => i ? wc(i, u) : wc), um = (i) => typeof i == "object" && typeof i.then == "function", Nt = [];
function qc(i, u, s = (d, c) => d === c) {
  if (i === u) return true;
  if (!i || !u) return false;
  const d = i.length;
  if (u.length !== d) return false;
  for (let c = 0; c < d; c++) if (!s(i[c], u[c])) return false;
  return true;
}
function Hc(i, u = null, s = false, d = {}) {
  u === null && (u = [i]);
  for (const g of Nt) if (qc(u, g.keys, g.equal)) {
    if (s) return;
    if (Object.prototype.hasOwnProperty.call(g, "error")) throw g.error;
    if (Object.prototype.hasOwnProperty.call(g, "response")) return d.lifespan && d.lifespan > 0 && (g.timeout && clearTimeout(g.timeout), g.timeout = setTimeout(g.remove, d.lifespan)), g.response;
    if (!s) throw g.promise;
  }
  const c = { keys: u, equal: d.equal, remove: () => {
    const g = Nt.indexOf(c);
    g !== -1 && Nt.splice(g, 1);
  }, promise: (um(i) ? i : i(...u)).then((g) => {
    c.response = g, d.lifespan && d.lifespan > 0 && (c.timeout = setTimeout(c.remove, d.lifespan));
  }).catch((g) => c.error = g) };
  if (Nt.push(c), !s) throw c.promise;
}
const im = (i, u, s) => Hc(i, u, false, s), am = (i, u, s) => void Hc(i, u, true, s), sm = (i) => {
  if (i === void 0 || i.length === 0) Nt.splice(0, Nt.length);
  else {
    const u = Nt.find((s) => qc(i, s.keys, s.equal));
    u && u.remove();
  }
};
var ei = Xp();
const cm = ui(ei);
function si(i, u, s) {
  if (!i) return;
  if (s(i) === true) return i;
  let d = u ? i.return : i.child;
  for (; d; ) {
    const c = si(d, u, s);
    if (c) return c;
    d = u ? null : d.sibling;
  }
}
function Bc(i) {
  try {
    return Object.defineProperties(i, { _currentRenderer: { get() {
      return null;
    }, set() {
    } }, _currentRenderer2: { get() {
      return null;
    }, set() {
    } } });
  } catch {
    return i;
  }
}
const ci = Bc(G.createContext(null));
class Vc extends G.Component {
  render() {
    return G.createElement(ci.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function $c() {
  const i = G.useContext(ci);
  if (i === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const u = G.useId();
  return G.useMemo(() => {
    for (const s of [i, i == null ? void 0 : i.alternate]) {
      if (!s) continue;
      const d = si(s, false, (c) => {
        let g = c.memoizedState;
        for (; g; ) {
          if (g.memoizedState === u) return true;
          g = g.next;
        }
      });
      if (d) return d;
    }
  }, [i, u]);
}
const fm = Symbol.for("react.context"), dm = (i) => i !== null && typeof i == "object" && "$$typeof" in i && i.$$typeof === fm;
function pm() {
  const i = $c(), [u] = G.useState(() => /* @__PURE__ */ new Map());
  u.clear();
  let s = i;
  for (; s; ) {
    const d = s.type;
    dm(d) && d !== ci && !u.has(d) && u.set(d, G.use(Bc(d))), s = s.return;
  }
  return u;
}
function mm() {
  const i = pm();
  return G.useMemo(() => Array.from(i.keys()).reduce((u, s) => (d) => G.createElement(u, null, G.createElement(s.Provider, { ...d, value: i.get(s) })), (u) => G.createElement(Vc, { ...u })), [i]);
}
function Qc(i) {
  let u = i.root;
  for (; u.getState().previousRoot; ) u = u.getState().previousRoot;
  return u;
}
const Yc = (i) => i && i.isOrthographicCamera, hm = (i) => i && i.hasOwnProperty("current"), vm = (i) => i != null && (typeof i == "string" || typeof i == "number" || i.isColor), Bl = ((i, u) => typeof window < "u" && (((i = window.document) == null ? void 0 : i.createElement) || ((u = window.navigator) == null ? void 0 : u.product) === "ReactNative"))() ? G.useLayoutEffect : G.useEffect;
function fi(i) {
  const u = G.useRef(i);
  return Bl(() => void (u.current = i), [i]), u;
}
function gm() {
  const i = $c(), u = mm();
  return G.useMemo(() => ({ children: s }) => {
    const c = !!si(i, true, (g) => g.type === G.StrictMode) ? G.StrictMode : G.Fragment;
    return Xe.jsx(c, { children: Xe.jsx(u, { children: s }) });
  }, [i, u]);
}
function bm({ set: i }) {
  return Bl(() => (i(new Promise(() => null)), () => i(false)), [i]), null;
}
const ym = ((i) => (i = class extends G.Component {
  constructor(...s) {
    super(...s), this.state = { error: false };
  }
  componentDidCatch(s) {
    this.props.set(s);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}, i.getDerivedStateFromError = () => ({ error: true }), i))();
function Wc(i) {
  var u;
  const s = typeof window < "u" ? (u = window.devicePixelRatio) != null ? u : 2 : 1;
  return Array.isArray(i) ? Math.min(Math.max(i[0], s), i[1]) : i;
}
function rl(i) {
  var u;
  return (u = i.__r3f) == null ? void 0 : u.root.getState();
}
const xe = { obj: (i) => i === Object(i) && !xe.arr(i) && typeof i != "function", fun: (i) => typeof i == "function", str: (i) => typeof i == "string", num: (i) => typeof i == "number", boo: (i) => typeof i == "boolean", und: (i) => i === void 0, nul: (i) => i === null, arr: (i) => Array.isArray(i), equ(i, u, { arrays: s = "shallow", objects: d = "reference", strict: c = true } = {}) {
  if (typeof i != typeof u || !!i != !!u) return false;
  if (xe.str(i) || xe.num(i) || xe.boo(i)) return i === u;
  const g = xe.obj(i);
  if (g && d === "reference") return i === u;
  const F = xe.arr(i);
  if (F && s === "reference") return i === u;
  if ((F || g) && i === u) return true;
  let k;
  for (k in i) if (!(k in u)) return false;
  if (g && s === "shallow" && d === "shallow") {
    for (k in c ? u : i) if (!xe.equ(i[k], u[k], { strict: c, objects: "reference" })) return false;
  } else for (k in c ? u : i) if (i[k] !== u[k]) return false;
  if (xe.und(k)) {
    if (F && i.length === 0 && u.length === 0 || g && Object.keys(i).length === 0 && Object.keys(u).length === 0) return true;
    if (i !== u) return false;
  }
  return true;
} };
function Sm(i) {
  const u = { nodes: {}, materials: {}, meshes: {} };
  return i && i.traverse((s) => {
    s.name && (u.nodes[s.name] = s), s.material && !u.materials[s.material.name] && (u.materials[s.material.name] = s.material), s.isMesh && !u.meshes[s.name] && (u.meshes[s.name] = s);
  }), u;
}
function Em(i) {
  i.type !== "Scene" && (i.dispose == null || i.dispose());
  for (const u in i) {
    const s = i[u];
    (s == null ? void 0 : s.type) !== "Scene" && (s == null || s.dispose == null || s.dispose());
  }
}
const Xc = ["children", "key", "ref"];
function km(i) {
  const u = {};
  for (const s in i) Xc.includes(s) || (u[s] = i[s]);
  return u;
}
function Yr(i, u, s, d) {
  const c = i;
  let g = c == null ? void 0 : c.__r3f;
  return g || (g = { root: u, type: s, parent: null, children: [], props: km(d), object: c, eventCount: 0, handlers: {}, isHidden: false }, c && (c.__r3f = g)), g;
}
function Hl(i, u) {
  if (!u.includes("-")) return { root: i, key: u, target: i[u] };
  if (u in i) return { root: i, key: u, target: i[u] };
  let s = i;
  const d = u.split("-");
  for (const c of d) {
    if (typeof s != "object" || s === null) {
      if (s !== void 0) {
        const g = d.slice(d.indexOf(c)).join("-");
        return { root: s, key: g, target: void 0 };
      }
      return { root: i, key: u, target: void 0 };
    }
    u = c, i = s, s = s[u];
  }
  return { root: i, key: u, target: s };
}
const zc = /-\d+$/;
function Wr(i, u) {
  if (xe.str(u.props.attach)) {
    if (zc.test(u.props.attach)) {
      const c = u.props.attach.replace(zc, ""), { root: g, key: F } = Hl(i.object, c);
      Array.isArray(g[F]) || (g[F] = []);
    }
    const { root: s, key: d } = Hl(i.object, u.props.attach);
    u.previousAttach = s[d], s[d] = u.object;
  } else xe.fun(u.props.attach) && (u.previousAttach = u.props.attach(i.object, u.object));
}
function Xr(i, u) {
  if (xe.str(u.props.attach)) {
    const { root: s, key: d } = Hl(i.object, u.props.attach), c = u.previousAttach;
    c === void 0 ? delete s[d] : s[d] = c;
  } else u.previousAttach == null || u.previousAttach(i.object, u.object);
  delete u.previousAttach;
}
const ni = [...Xc, "args", "dispose", "attach", "object", "onUpdate", "dispose"], _c = /* @__PURE__ */ new Map();
function wm(i) {
  let u = _c.get(i.constructor);
  try {
    u || (u = new i.constructor(), _c.set(i.constructor, u));
  } catch {
  }
  return u;
}
function zm(i, u) {
  const s = {};
  for (const d in u) if (!ni.includes(d) && !xe.equ(u[d], i.props[d])) {
    s[d] = u[d];
    for (const c in u) c.startsWith(`${d}-`) && (s[c] = u[c]);
  }
  for (const d in i.props) {
    if (ni.includes(d) || u.hasOwnProperty(d)) continue;
    const { root: c, key: g } = Hl(i.object, d);
    if (c.constructor && c.constructor.length === 0) {
      const F = wm(c);
      xe.und(F) || (s[g] = F[g]);
    } else s[g] = 0;
  }
  return s;
}
const _m = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"], xm = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function st(i, u) {
  var s;
  const d = i.__r3f, c = d && Qc(d).getState(), g = d == null ? void 0 : d.eventCount;
  for (const k in u) {
    let y = u[k];
    if (ni.includes(k)) continue;
    if (d && xm.test(k)) {
      typeof y == "function" ? d.handlers[k] = y : delete d.handlers[k], d.eventCount = Object.keys(d.handlers).length;
      continue;
    }
    if (y === void 0) continue;
    let { root: P, key: _, target: S } = Hl(i, k);
    if (S === void 0 && (typeof P != "object" || P === null)) throw Error(`R3F: Cannot set "${k}". Ensure it is an object before setting "${_}".`);
    if (S instanceof fc && y instanceof fc) S.mask = y.mask;
    else if (S instanceof Ap && vm(y)) S.set(y);
    else if (S !== null && typeof S == "object" && typeof S.set == "function" && typeof S.copy == "function" && y != null && y.constructor && S.constructor === y.constructor) S.copy(y);
    else if (S !== null && typeof S == "object" && typeof S.set == "function" && Array.isArray(y)) typeof S.fromArray == "function" ? S.fromArray(y) : S.set(...y);
    else if (S !== null && typeof S == "object" && typeof S.set == "function" && typeof y == "number") typeof S.setScalar == "function" ? S.setScalar(y) : S.set(y);
    else {
      var F;
      P[_] = y, c && !c.linear && _m.includes(_) && (F = P[_]) != null && F.isTexture && P[_].format === qp && P[_].type === Hp && (P[_].colorSpace = Uc);
    }
  }
  if (d != null && d.parent && c != null && c.internal && (s = d.object) != null && s.isObject3D && g !== d.eventCount) {
    const k = d.object, y = c.internal.interaction.indexOf(k);
    y > -1 && c.internal.interaction.splice(y, 1), d.eventCount && k.raycast !== null && c.internal.interaction.push(k);
  }
  return d && d.props.attach === void 0 && (d.object.isBufferGeometry ? d.props.attach = "geometry" : d.object.isMaterial && (d.props.attach = "material")), d && al(d), i;
}
function al(i) {
  var u;
  if (!i.parent) return;
  i.props.onUpdate == null || i.props.onUpdate(i.object);
  const s = (u = i.root) == null || u.getState == null ? void 0 : u.getState();
  s && s.internal.frames === 0 && s.invalidate();
}
function Gc(i, u) {
  i.manual || (Yc(i) ? (i.left = u.width / -2, i.right = u.width / 2, i.top = u.height / 2, i.bottom = u.height / -2) : i.aspect = u.width / u.height, i.updateProjectionMatrix());
}
const tn = (i) => i == null ? void 0 : i.isObject3D;
function Vr(i) {
  return (i.eventObject || i.object).uuid + "/" + i.index + i.instanceId;
}
function Zc(i, u, s, d) {
  const c = s.get(u);
  c && (s.delete(u), s.size === 0 && (i.delete(d), c.target.releasePointerCapture(d)));
}
function Cm(i, u) {
  const { internal: s } = i.getState();
  s.interaction = s.interaction.filter((d) => d !== u), s.initialHits = s.initialHits.filter((d) => d !== u), s.hovered.forEach((d, c) => {
    (d.eventObject === u || d.object === u) && s.hovered.delete(c);
  }), s.capturedMap.forEach((d, c) => {
    Zc(s.capturedMap, u, d, c);
  });
}
function Nm(i) {
  function u(y) {
    const { internal: P } = i.getState(), _ = y.offsetX - P.initialClick[0], S = y.offsetY - P.initialClick[1];
    return Math.round(Math.sqrt(_ * _ + S * S));
  }
  function s(y) {
    return y.filter((P) => ["Move", "Over", "Enter", "Out", "Leave"].some((_) => {
      var S;
      return (S = P.__r3f) == null ? void 0 : S.handlers["onPointer" + _];
    }));
  }
  function d(y, P) {
    const _ = i.getState(), S = /* @__PURE__ */ new Set(), w = [], x = P ? P(_.internal.interaction) : _.internal.interaction;
    for (let N = 0; N < x.length; N++) {
      const C = rl(x[N]);
      C && (C.raycaster.camera = void 0);
    }
    _.previousRoot || _.events.compute == null || _.events.compute(y, _);
    function R(N) {
      const C = rl(N);
      if (!C || !C.events.enabled || C.raycaster.camera === null) return [];
      if (C.raycaster.camera === void 0) {
        var Q;
        C.events.compute == null || C.events.compute(y, C, (Q = C.previousRoot) == null ? void 0 : Q.getState()), C.raycaster.camera === void 0 && (C.raycaster.camera = null);
      }
      return C.raycaster.camera ? C.raycaster.intersectObject(N, true) : [];
    }
    let q = x.flatMap(R).sort((N, C) => {
      const Q = rl(N.object), X = rl(C.object);
      return !Q || !X ? N.distance - C.distance : X.events.priority - Q.events.priority || N.distance - C.distance;
    }).filter((N) => {
      const C = Vr(N);
      return S.has(C) ? false : (S.add(C), true);
    });
    _.events.filter && (q = _.events.filter(q, _));
    for (const N of q) {
      let C = N.object;
      for (; C; ) {
        var Z;
        (Z = C.__r3f) != null && Z.eventCount && w.push({ ...N, eventObject: C }), C = C.parent;
      }
    }
    if ("pointerId" in y && _.internal.capturedMap.has(y.pointerId)) for (let N of _.internal.capturedMap.get(y.pointerId).values()) S.has(Vr(N.intersection)) || w.push(N.intersection);
    return w;
  }
  function c(y, P, _, S) {
    if (y.length) {
      const w = { stopped: false };
      for (const x of y) {
        let R = rl(x.object);
        if (R || x.object.traverseAncestors((q) => {
          const Z = rl(q);
          if (Z) return R = Z, false;
        }), R) {
          const { raycaster: q, pointer: Z, camera: N, internal: C } = R, Q = new Al(Z.x, Z.y, 0).unproject(N), X = (re) => {
            var oe, fe;
            return (oe = (fe = C.capturedMap.get(re)) == null ? void 0 : fe.has(x.eventObject)) != null ? oe : false;
          }, ee = (re) => {
            const oe = { intersection: x, target: P.target };
            C.capturedMap.has(re) ? C.capturedMap.get(re).set(x.eventObject, oe) : C.capturedMap.set(re, /* @__PURE__ */ new Map([[x.eventObject, oe]])), P.target.setPointerCapture(re);
          }, A = (re) => {
            const oe = C.capturedMap.get(re);
            oe && Zc(C.capturedMap, x.eventObject, oe, re);
          };
          let U = {};
          for (let re in P) {
            let oe = P[re];
            typeof oe != "function" && (U[re] = oe);
          }
          let me = { ...x, ...U, pointer: Z, intersections: y, stopped: w.stopped, delta: _, unprojectedPoint: Q, ray: q.ray, camera: N, stopPropagation() {
            const re = "pointerId" in P && C.capturedMap.get(P.pointerId);
            if ((!re || re.has(x.eventObject)) && (me.stopped = w.stopped = true, C.hovered.size && Array.from(C.hovered.values()).find((oe) => oe.eventObject === x.eventObject))) {
              const oe = y.slice(0, y.indexOf(x));
              g([...oe, x]);
            }
          }, target: { hasPointerCapture: X, setPointerCapture: ee, releasePointerCapture: A }, currentTarget: { hasPointerCapture: X, setPointerCapture: ee, releasePointerCapture: A }, nativeEvent: P };
          if (S(me), w.stopped === true) break;
        }
      }
    }
    return y;
  }
  function g(y) {
    const { internal: P } = i.getState();
    for (const _ of P.hovered.values()) if (!y.length || !y.find((S) => S.object === _.object && S.index === _.index && S.instanceId === _.instanceId)) {
      const w = _.eventObject.__r3f;
      if (P.hovered.delete(Vr(_)), w != null && w.eventCount) {
        const x = w.handlers, R = { ..._, intersections: y };
        x.onPointerOut == null || x.onPointerOut(R), x.onPointerLeave == null || x.onPointerLeave(R);
      }
    }
  }
  function F(y, P) {
    for (let _ = 0; _ < P.length; _++) {
      const S = P[_].__r3f;
      S == null || S.handlers.onPointerMissed == null || S.handlers.onPointerMissed(y);
    }
  }
  function k(y) {
    switch (y) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => g([]);
      case "onLostPointerCapture":
        return (P) => {
          const { internal: _ } = i.getState();
          "pointerId" in P && _.capturedMap.has(P.pointerId) && requestAnimationFrame(() => {
            _.capturedMap.has(P.pointerId) && (_.capturedMap.delete(P.pointerId), g([]));
          });
        };
    }
    return function(_) {
      const { onPointerMissed: S, internal: w } = i.getState();
      w.lastEvent.current = _;
      const x = y === "onPointerMove", R = y === "onClick" || y === "onContextMenu" || y === "onDoubleClick", Z = d(_, x ? s : void 0), N = R ? u(_) : 0;
      y === "onPointerDown" && (w.initialClick = [_.offsetX, _.offsetY], w.initialHits = Z.map((Q) => Q.eventObject)), R && !Z.length && N <= 2 && (F(_, w.interaction), S && S(_)), x && g(Z);
      function C(Q) {
        const X = Q.eventObject, ee = X.__r3f;
        if (!(ee != null && ee.eventCount)) return;
        const A = ee.handlers;
        if (x) {
          if (A.onPointerOver || A.onPointerEnter || A.onPointerOut || A.onPointerLeave) {
            const U = Vr(Q), me = w.hovered.get(U);
            me ? me.stopped && Q.stopPropagation() : (w.hovered.set(U, Q), A.onPointerOver == null || A.onPointerOver(Q), A.onPointerEnter == null || A.onPointerEnter(Q));
          }
          A.onPointerMove == null || A.onPointerMove(Q);
        } else {
          const U = A[y];
          U ? (!R || w.initialHits.includes(X)) && (F(_, w.interaction.filter((me) => !w.initialHits.includes(me))), U(Q)) : R && w.initialHits.includes(X) && F(_, w.interaction.filter((me) => !w.initialHits.includes(me)));
        }
      }
      c(Z, _, N, C);
    };
  }
  return { handlePointer: k };
}
const xc = (i) => !!(i != null && i.render), di = G.createContext(null), Tm = (i, u) => {
  const s = Ac((k, y) => {
    const P = new Al(), _ = new Al(), S = new Al();
    function w(N = y().camera, C = _, Q = y().size) {
      const { width: X, height: ee, top: A, left: U } = Q, me = X / ee;
      C.isVector3 ? S.copy(C) : S.set(...C);
      const re = N.getWorldPosition(P).distanceTo(S);
      if (Yc(N)) return { width: X / N.zoom, height: ee / N.zoom, top: A, left: U, factor: 1, distance: re, aspect: me };
      {
        const oe = N.fov * Math.PI / 180, fe = 2 * Math.tan(oe / 2) * re, Me = fe * (X / ee);
        return { width: Me, height: fe, top: A, left: U, factor: X / Me, distance: re, aspect: me };
      }
    }
    let x;
    const R = (N) => k((C) => ({ performance: { ...C.performance, current: N } })), q = new Dc();
    return { set: k, get: y, gl: null, camera: null, raycaster: null, events: { priority: 1, enabled: true, connected: false }, scene: null, xr: null, invalidate: (N = 1) => i(y(), N), advance: (N, C) => u(N, C, y()), legacy: false, linear: false, flat: false, controls: null, clock: new Up(), pointer: q, mouse: q, frameloop: "always", onPointerMissed: void 0, performance: { current: 1, min: 0.5, max: 1, debounce: 200, regress: () => {
      const N = y();
      x && clearTimeout(x), N.performance.current !== N.performance.min && R(N.performance.min), x = setTimeout(() => R(y().performance.max), N.performance.debounce);
    } }, size: { width: 0, height: 0, top: 0, left: 0 }, viewport: { initialDpr: 0, dpr: 0, width: 0, height: 0, top: 0, left: 0, aspect: 0, distance: 0, factor: 0, getCurrentViewport: w }, setEvents: (N) => k((C) => ({ ...C, events: { ...C.events, ...N } })), setSize: (N, C, Q = 0, X = 0) => {
      const ee = y().camera, A = { width: N, height: C, top: Q, left: X };
      k((U) => ({ size: A, viewport: { ...U.viewport, ...w(ee, _, A) } }));
    }, setDpr: (N) => k((C) => {
      const Q = Wc(N);
      return { viewport: { ...C.viewport, dpr: Q, initialDpr: C.viewport.initialDpr || Q } };
    }), setFrameloop: (N = "always") => {
      const C = y().clock;
      C.stop(), C.elapsedTime = 0, N !== "never" && (C.start(), C.elapsedTime = 0), k(() => ({ frameloop: N }));
    }, previousRoot: void 0, internal: { interaction: [], hovered: /* @__PURE__ */ new Map(), subscribers: [], initialClick: [0, 0], initialHits: [], capturedMap: /* @__PURE__ */ new Map(), lastEvent: G.createRef(), active: false, frames: 0, priority: 0, subscribe: (N, C, Q) => {
      const X = y().internal;
      return X.priority = X.priority + (C > 0 ? 1 : 0), X.subscribers.push({ ref: N, priority: C, store: Q }), X.subscribers = X.subscribers.sort((ee, A) => ee.priority - A.priority), () => {
        const ee = y().internal;
        ee != null && ee.subscribers && (ee.priority = ee.priority - (C > 0 ? 1 : 0), ee.subscribers = ee.subscribers.filter((A) => A.ref !== N));
      };
    } } };
  }), d = s.getState();
  let c = d.size, g = d.viewport.dpr, F = d.camera;
  return s.subscribe(() => {
    const { camera: k, size: y, viewport: P, gl: _, set: S } = s.getState();
    if (y.width !== c.width || y.height !== c.height || P.dpr !== g) {
      c = y, g = P.dpr, Gc(k, y), P.dpr > 0 && _.setPixelRatio(P.dpr);
      const w = typeof HTMLCanvasElement < "u" && _.domElement instanceof HTMLCanvasElement;
      _.setSize(y.width, y.height, w);
    }
    k !== F && (F = k, S((w) => ({ viewport: { ...w.viewport, ...w.viewport.getCurrentViewport(k) } })));
  }), s.subscribe((k) => i(k)), s;
};
function pi() {
  const i = G.useContext(di);
  if (!i) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return i;
}
function hh(i = (s) => s, u) {
  return pi()(i, u);
}
function vh(i, u = 0) {
  const s = pi(), d = s.getState().internal.subscribe, c = fi(i);
  return Bl(() => d(c, u, s), [u, d, s]), null;
}
const Cc = /* @__PURE__ */ new WeakMap(), Im = (i) => {
  var u;
  return typeof i == "function" && (i == null || (u = i.prototype) == null ? void 0 : u.constructor) === i;
};
function Kc(i, u) {
  return function(s, ...d) {
    let c;
    return Im(s) ? (c = Cc.get(s), c || (c = new s(), Cc.set(s, c))) : c = s, i && i(c), Promise.all(d.map((g) => new Promise((F, k) => c.load(g, (y) => {
      tn(y == null ? void 0 : y.scene) && Object.assign(y, Sm(y.scene)), F(y);
    }, u, (y) => k(new Error(`Could not load ${g}: ${y == null ? void 0 : y.message}`))))));
  };
}
function Jc(i, u, s, d) {
  const c = Array.isArray(u) ? u : [u], g = im(Kc(s, d), [i, ...c], { equal: xe.equ });
  return Array.isArray(u) ? g : g[0];
}
Jc.preload = function(i, u, s) {
  const d = Array.isArray(u) ? u : [u];
  return am(Kc(s), [i, ...d]);
};
Jc.clear = function(i, u) {
  const s = Array.isArray(u) ? u : [u];
  return sm([i, ...s]);
};
/**
* @license React
* react-reconciler-constants.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
const Pm = 1, Rm = 8, jm = 32, Mm = 2;
var Fm = { version: "9.5.0" };
function Om(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Nc = { exports: {} }, Tc = { exports: {} }, Ic;
function Lm() {
  return Ic || (Ic = 1, (function(i) {
    i.exports = function(u) {
      function s(e, n, t, l) {
        return new jf(e, n, t, l);
      }
      function d() {
      }
      function c(e) {
        var n = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          n += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var t = 2; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
        }
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function g(e) {
        var n = e, t = e;
        if (e.alternate) for (; n.return; ) n = n.return;
        else {
          e = n;
          do
            n = e, (n.flags & 4098) !== 0 && (t = n.return), e = n.return;
          while (e);
        }
        return n.tag === 3 ? t : null;
      }
      function F(e) {
        if (g(e) !== e) throw Error(c(188));
      }
      function k(e) {
        var n = e.alternate;
        if (!n) {
          if (n = g(e), n === null) throw Error(c(188));
          return n !== e ? null : e;
        }
        for (var t = e, l = n; ; ) {
          var r = t.return;
          if (r === null) break;
          var o = r.alternate;
          if (o === null) {
            if (l = r.return, l !== null) {
              t = l;
              continue;
            }
            break;
          }
          if (r.child === o.child) {
            for (o = r.child; o; ) {
              if (o === t) return F(r), e;
              if (o === l) return F(r), n;
              o = o.sibling;
            }
            throw Error(c(188));
          }
          if (t.return !== l.return) t = r, l = o;
          else {
            for (var a = false, f = r.child; f; ) {
              if (f === t) {
                a = true, t = r, l = o;
                break;
              }
              if (f === l) {
                a = true, l = r, t = o;
                break;
              }
              f = f.sibling;
            }
            if (!a) {
              for (f = o.child; f; ) {
                if (f === t) {
                  a = true, t = o, l = r;
                  break;
                }
                if (f === l) {
                  a = true, l = o, t = r;
                  break;
                }
                f = f.sibling;
              }
              if (!a) throw Error(c(189));
            }
          }
          if (t.alternate !== l) throw Error(c(190));
        }
        if (t.tag !== 3) throw Error(c(188));
        return t.stateNode.current === t ? e : n;
      }
      function y(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return e;
        for (e = e.child; e !== null; ) {
          if (n = y(e), n !== null) return n;
          e = e.sibling;
        }
        return null;
      }
      function P(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return e;
        for (e = e.child; e !== null; ) {
          if (e.tag !== 4 && (n = P(e), n !== null)) return n;
          e = e.sibling;
        }
        return null;
      }
      function _(e) {
        return e === null || typeof e != "object" ? null : (e = Is && e[Is] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function S(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === Df ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case Dt:
            return "Fragment";
          case ru:
            return "Profiler";
          case Ns:
            return "StrictMode";
          case uu:
            return "Suspense";
          case iu:
            return "SuspenseList";
          case su:
            return "Activity";
        }
        if (typeof e == "object") switch (e.$$typeof) {
          case Lt:
            return "Portal";
          case Kn:
            return e.displayName || "Context";
          case Ts:
            return (e._context.displayName || "Context") + ".Consumer";
          case ou:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case au:
            return n = e.displayName || null, n !== null ? n : S(e.type) || "Memo";
          case Jn:
            n = e._payload, e = e._init;
            try {
              return S(e(n));
            } catch {
            }
        }
        return null;
      }
      function w(e) {
        return { current: e };
      }
      function x(e) {
        0 > qt || (e.current = hu[qt], hu[qt] = null, qt--);
      }
      function R(e, n) {
        qt++, hu[qt] = e.current, e.current = n;
      }
      function q(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (dp(e) / pp | 0) | 0;
      }
      function Z(e) {
        var n = e & 42;
        if (n !== 0) return n;
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
      function N(e, n, t) {
        var l = e.pendingLanes;
        if (l === 0) return 0;
        var r = 0, o = e.suspendedLanes, a = e.pingedLanes;
        e = e.warmLanes;
        var f = l & 134217727;
        return f !== 0 ? (l = f & ~o, l !== 0 ? r = Z(l) : (a &= f, a !== 0 ? r = Z(a) : t || (t = f & ~e, t !== 0 && (r = Z(t))))) : (f = l & ~o, f !== 0 ? r = Z(f) : a !== 0 ? r = Z(a) : t || (t = l & ~e, t !== 0 && (r = Z(t)))), r === 0 ? 0 : n !== 0 && n !== r && (n & o) === 0 && (o = r & -r, t = n & -n, o >= t || o === 32 && (t & 4194048) !== 0) ? n : r;
      }
      function C(e, n) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
      }
      function Q(e, n) {
        switch (e) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return n + 250;
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
            return n + 5e3;
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
      function X() {
        var e = _r;
        return _r <<= 1, (_r & 62914560) === 0 && (_r = 4194304), e;
      }
      function ee(e) {
        for (var n = [], t = 0; 31 > t; t++) n.push(e);
        return n;
      }
      function A(e, n) {
        e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
      }
      function U(e, n, t, l, r, o) {
        var a = e.pendingLanes;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
        var f = e.entanglements, b = e.expirationTimes, z = e.hiddenUpdates;
        for (t = a & ~t; 0 < t; ) {
          var M = 31 - fn(t), T = 1 << M;
          f[M] = 0, b[M] = -1;
          var L = z[M];
          if (L !== null) for (z[M] = null, M = 0; M < L.length; M++) {
            var te = L[M];
            te !== null && (te.lane &= -536870913);
          }
          t &= ~T;
        }
        l !== 0 && me(e, l, 0), o !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(a & ~n));
      }
      function me(e, n, t) {
        e.pendingLanes |= n, e.suspendedLanes &= ~n;
        var l = 31 - fn(n);
        e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | t & 261930;
      }
      function re(e, n) {
        var t = e.entangledLanes |= n;
        for (e = e.entanglements; t; ) {
          var l = 31 - fn(t), r = 1 << l;
          r & n | e[l] & n && (e[l] |= n), t &= ~r;
        }
      }
      function oe(e, n) {
        var t = n & -n;
        return t = (t & 42) !== 0 ? 1 : fe(t), (t & (e.suspendedLanes | n)) !== 0 ? 0 : t;
      }
      function fe(e) {
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
      function Me(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function Y(e) {
        if (typeof bp == "function" && yp(e), dn && typeof dn.setStrictMode == "function") try {
          dn.setStrictMode(Cl, e);
        } catch {
        }
      }
      function Se(e, n) {
        return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
      }
      function we(e) {
        if (bu === void 0) try {
          throw Error();
        } catch (t) {
          var n = t.stack.trim().match(/\n( *(at )?)/);
          bu = n && n[1] || "", tc = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return `
` + bu + e + tc;
      }
      function j(e, n) {
        if (!e || yu) return "";
        yu = true;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var l = { DetermineComponentFrameRoot: function() {
            try {
              if (n) {
                var T = function() {
                  throw Error();
                };
                if (Object.defineProperty(T.prototype, "props", { set: function() {
                  throw Error();
                } }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(T, []);
                  } catch (te) {
                    var L = te;
                  }
                  Reflect.construct(e, [], T);
                } else {
                  try {
                    T.call();
                  } catch (te) {
                    L = te;
                  }
                  e.call(T.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (te) {
                  L = te;
                }
                (T = e()) && typeof T.catch == "function" && T.catch(function() {
                });
              }
            } catch (te) {
              if (te && L && typeof te.stack == "string") return [te.stack, L.stack];
            }
            return [null, null];
          } };
          l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var r = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
          r && r.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
          var o = l.DetermineComponentFrameRoot(), a = o[0], f = o[1];
          if (a && f) {
            var b = a.split(`
`), z = f.split(`
`);
            for (r = l = 0; l < b.length && !b[l].includes("DetermineComponentFrameRoot"); ) l++;
            for (; r < z.length && !z[r].includes("DetermineComponentFrameRoot"); ) r++;
            if (l === b.length || r === z.length) for (l = b.length - 1, r = z.length - 1; 1 <= l && 0 <= r && b[l] !== z[r]; ) r--;
            for (; 1 <= l && 0 <= r; l--, r--) if (b[l] !== z[r]) {
              if (l !== 1 || r !== 1) do
                if (l--, r--, 0 > r || b[l] !== z[r]) {
                  var M = `
` + b[l].replace(" at new ", " at ");
                  return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), M;
                }
              while (1 <= l && 0 <= r);
              break;
            }
          }
        } finally {
          yu = false, Error.prepareStackTrace = t;
        }
        return (t = e ? e.displayName || e.name : "") ? we(t) : "";
      }
      function H(e, n) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return we(e.type);
          case 16:
            return we("Lazy");
          case 13:
            return e.child !== n && n !== null ? we("Suspense Fallback") : we("Suspense");
          case 19:
            return we("SuspenseList");
          case 0:
          case 15:
            return j(e.type, false);
          case 11:
            return j(e.type.render, false);
          case 1:
            return j(e.type, true);
          case 31:
            return we("Activity");
          default:
            return "";
        }
      }
      function B(e) {
        try {
          var n = "", t = null;
          do
            n += H(e, t), t = e, e = e.return;
          while (e);
          return n;
        } catch (l) {
          return `
Error generating stack: ` + l.message + `
` + l.stack;
        }
      }
      function K(e, n) {
        if (typeof e == "object" && e !== null) {
          var t = lc.get(e);
          return t !== void 0 ? t : (n = { value: e, source: n, stack: B(n) }, lc.set(e, n), n);
        }
        return { value: e, source: n, stack: B(n) };
      }
      function de(e, n) {
        Bt[Vt++] = Nl, Bt[Vt++] = Cr, Cr = e, Nl = n;
      }
      function p(e, n, t) {
        gn[bn++] = In, gn[bn++] = Pn, gn[bn++] = et, et = e;
        var l = In;
        e = Pn;
        var r = 32 - fn(l) - 1;
        l &= ~(1 << r), t += 1;
        var o = 32 - fn(n) + r;
        if (30 < o) {
          var a = r - r % 5;
          o = (l & (1 << a) - 1).toString(32), l >>= a, r -= a, In = 1 << 32 - fn(n) + r | t << r | l, Pn = o + e;
        } else In = 1 << o | t << r | l, Pn = e;
      }
      function E(e) {
        e.return !== null && (de(e, 1), p(e, 1, 0));
      }
      function D(e) {
        for (; e === Cr; ) Cr = Bt[--Vt], Bt[Vt] = null, Nl = Bt[--Vt], Bt[Vt] = null;
        for (; e === et; ) et = gn[--bn], gn[bn] = null, Pn = gn[--bn], gn[bn] = null, In = gn[--bn], gn[bn] = null;
      }
      function O(e, n) {
        gn[bn++] = In, gn[bn++] = Pn, gn[bn++] = et, In = n.id, Pn = n.overflow, et = e;
      }
      function J(e, n) {
        R(nt, n), R(Tl, e), R(Ye, null), e = qf(n), x(Ye), R(Ye, e);
      }
      function ue() {
        x(Ye), x(Tl), x(nt);
      }
      function be(e) {
        e.memoizedState !== null && R(Nr, e);
        var n = Ye.current, t = Hf(n, e.type);
        n !== t && (R(Tl, e), R(Ye, t));
      }
      function Je(e) {
        Tl.current === e && (x(Ye), x(Tl)), Nr.current === e && (x(Nr), Dn ? yt._currentValue = Ut : yt._currentValue2 = Ut);
      }
      function _e(e) {
        var n = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw sl(K(n, e)), Su;
      }
      function Vl(e, n) {
        if (!Ke) throw Error(c(175));
        Hd(e.stateNode, e.type, e.memoizedProps, n, e) || _e(e, true);
      }
      function hi(e) {
        for (We = e.return; We; ) switch (We.tag) {
          case 5:
          case 31:
          case 13:
            yn = false;
            return;
          case 27:
          case 3:
            yn = true;
            return;
          default:
            We = We.return;
        }
      }
      function It(e) {
        if (!Ke || e !== We) return false;
        if (!pe) return hi(e), pe = true, false;
        var n = e.tag;
        if (Ae ? n !== 3 && n !== 27 && (n !== 5 || Bs(e.type) && !kr(e.type, e.memoizedProps)) && Ce && _e(e) : n !== 3 && (n !== 5 || Bs(e.type) && !kr(e.type, e.memoizedProps)) && Ce && _e(e), hi(e), n === 13) {
          if (!Ke) throw Error(c(316));
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
          Ce = Yd(e);
        } else if (n === 31) {
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
          Ce = Qd(e);
        } else Ce = Ae && n === 27 ? Rd(e.type, Ce) : We ? Hs(e.stateNode) : null;
        return true;
      }
      function ct() {
        Ke && (Ce = We = null, pe = false);
      }
      function Jr() {
        var e = tt;
        return e !== null && (un === null ? un = e : un.push.apply(un, e), tt = null), e;
      }
      function sl(e) {
        tt === null ? tt = [e] : tt.push(e);
      }
      function $n(e, n, t) {
        Dn ? (R(Tr, n._currentValue), n._currentValue = t) : (R(Tr, n._currentValue2), n._currentValue2 = t);
      }
      function Rn(e) {
        var n = Tr.current;
        Dn ? e._currentValue = n : e._currentValue2 = n, x(Tr);
      }
      function eo(e, n, t) {
        for (; e !== null; ) {
          var l = e.alternate;
          if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === t) break;
          e = e.return;
        }
      }
      function no(e, n, t, l) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
          var o = r.dependencies;
          if (o !== null) {
            var a = r.child;
            o = o.firstContext;
            e: for (; o !== null; ) {
              var f = o;
              o = r;
              for (var b = 0; b < n.length; b++) if (f.context === n[b]) {
                o.lanes |= t, f = o.alternate, f !== null && (f.lanes |= t), eo(o.return, t, e), l || (a = null);
                break e;
              }
              o = f.next;
            }
          } else if (r.tag === 18) {
            if (a = r.return, a === null) throw Error(c(341));
            a.lanes |= t, o = a.alternate, o !== null && (o.lanes |= t), eo(a, t, e), a = null;
          } else a = r.child;
          if (a !== null) a.return = r;
          else for (a = r; a !== null; ) {
            if (a === e) {
              a = null;
              break;
            }
            if (r = a.sibling, r !== null) {
              r.return = a.return, a = r;
              break;
            }
            a = a.return;
          }
          r = a;
        }
      }
      function Pt(e, n, t, l) {
        e = null;
        for (var r = n, o = false; r !== null; ) {
          if (!o) {
            if ((r.flags & 524288) !== 0) o = true;
            else if ((r.flags & 262144) !== 0) break;
          }
          if (r.tag === 10) {
            var a = r.alternate;
            if (a === null) throw Error(c(387));
            if (a = a.memoizedProps, a !== null) {
              var f = r.type;
              pn(r.pendingProps.value, a.value) || (e !== null ? e.push(f) : e = [f]);
            }
          } else if (r === Nr.current) {
            if (a = r.alternate, a === null) throw Error(c(387));
            a.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(yt) : e = [yt]);
          }
          r = r.return;
        }
        e !== null && no(n, e, t, l), n.flags |= 262144;
      }
      function $l(e) {
        for (e = e.firstContext; e !== null; ) {
          var n = e.context;
          if (!pn(Dn ? n._currentValue : n._currentValue2, e.memoizedValue)) return true;
          e = e.next;
        }
        return false;
      }
      function ft(e) {
        St = e, An = null, e = e.dependencies, e !== null && (e.firstContext = null);
      }
      function $e(e) {
        return vi(St, e);
      }
      function Ql(e, n) {
        return St === null && ft(e), vi(e, n);
      }
      function vi(e, n) {
        var t = Dn ? n._currentValue : n._currentValue2;
        if (n = { context: n, memoizedValue: t, next: null }, An === null) {
          if (e === null) throw Error(c(308));
          An = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
        } else An = An.next = n;
        return t;
      }
      function to() {
        return { controller: new Ep(), data: /* @__PURE__ */ new Map(), refCount: 0 };
      }
      function cl(e) {
        e.refCount--, e.refCount === 0 && kp(wp, function() {
          e.controller.abort();
        });
      }
      function Yl() {
      }
      function Cn(e) {
        e !== $t && e.next === null && ($t === null ? Ir = $t = e : $t = $t.next = e), Pr = true, Eu || (Eu = true, sf());
      }
      function Rt(e, n) {
        if (!ku && Pr) {
          ku = true;
          do
            for (var t = false, l = Ir; l !== null; ) {
              if (e !== 0) {
                var r = l.pendingLanes;
                if (r === 0) var o = 0;
                else {
                  var a = l.suspendedLanes, f = l.pingedLanes;
                  o = (1 << 31 - fn(42 | e) + 1) - 1, o &= r & ~(a & ~f), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0;
                }
                o !== 0 && (t = true, Ei(l, o));
              } else o = ce, o = N(l, l === ke ? o : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== bt), (o & 3) === 0 || C(l, o) || (t = true, Ei(l, o));
              l = l.next;
            }
          while (t);
          ku = false;
        }
      }
      function gi() {
        bi();
      }
      function bi() {
        Pr = Eu = false;
        var e = 0;
        Et !== 0 && Zf() && (e = Et);
        for (var n = rn(), t = null, l = Ir; l !== null; ) {
          var r = l.next, o = yi(l, n);
          o === 0 ? (l.next = null, t === null ? Ir = r : t.next = r, r === null && ($t = t)) : (t = l, (e !== 0 || (o & 3) !== 0) && (Pr = true)), l = r;
        }
        qe !== 0 && qe !== 5 || Rt(e), Et !== 0 && (Et = 0);
      }
      function yi(e, n) {
        for (var t = e.suspendedLanes, l = e.pingedLanes, r = e.expirationTimes, o = e.pendingLanes & -62914561; 0 < o; ) {
          var a = 31 - fn(o), f = 1 << a, b = r[a];
          b === -1 ? ((f & t) === 0 || (f & l) !== 0) && (r[a] = Q(f, n)) : b <= n && (e.expiredLanes |= f), o &= ~f;
        }
        if (n = ke, t = ce, t = N(e, e === n ? t : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== bt), l = e.callbackNode, t === 0 || e === n && (ye === 2 || ye === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && vu(l), e.callbackNode = null, e.callbackPriority = 0;
        if ((t & 3) === 0 || C(e, t)) {
          if (n = t & -t, n === e.callbackPriority) return n;
          switch (l !== null && vu(l), Me(t)) {
            case 2:
            case 8:
              t = vp;
              break;
            case 32:
              t = gu;
              break;
            case 268435456:
              t = gp;
              break;
            default:
              t = gu;
          }
          return l = Si.bind(null, e), t = xr(t, l), e.callbackPriority = n, e.callbackNode = t, n;
        }
        return l !== null && l !== null && vu(l), e.callbackPriority = 2, e.callbackNode = null, 2;
      }
      function Si(e, n) {
        if (qe !== 0 && qe !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var t = e.callbackNode;
        if (wl() && e.callbackNode !== t) return null;
        var l = ce;
        return l = N(e, e === ke ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== bt), l === 0 ? null : (ls(e, l, n), yi(e, rn()), e.callbackNode != null && e.callbackNode === t ? Si.bind(null, e) : null);
      }
      function Ei(e, n) {
        if (wl()) return null;
        ls(e, n, true);
      }
      function sf() {
        rd ? od(function() {
          (ae & 6) !== 0 ? xr(ec, gi) : bi();
        }) : xr(ec, gi);
      }
      function lo() {
        if (Et === 0) {
          var e = Qt;
          e === 0 && (e = wr, wr <<= 1, (wr & 261888) === 0 && (wr = 256)), Et = e;
        }
        return Et;
      }
      function cf(e, n) {
        if (Il === null) {
          var t = Il = [];
          wu = 0, Qt = lo(), Yt = { status: "pending", value: void 0, then: function(l) {
            t.push(l);
          } };
        }
        return wu++, n.then(ki, ki), n;
      }
      function ki() {
        if (--wu === 0 && Il !== null) {
          Yt !== null && (Yt.status = "fulfilled");
          var e = Il;
          Il = null, Qt = 0, Yt = null;
          for (var n = 0; n < e.length; n++) (0, e[n])();
        }
      }
      function ff(e, n) {
        var t = [], l = { status: "pending", value: null, reason: null, then: function(r) {
          t.push(r);
        } };
        return e.then(function() {
          l.status = "fulfilled", l.value = n;
          for (var r = 0; r < t.length; r++) (0, t[r])(n);
        }, function(r) {
          for (l.status = "rejected", l.reason = r, r = 0; r < t.length; r++) (0, t[r])(void 0);
        }), l;
      }
      function ro() {
        var e = kt.current;
        return e !== null ? e : ke.pooledCache;
      }
      function Wl(e, n) {
        n === null ? R(kt, kt.current) : R(kt, n.pool);
      }
      function wi() {
        var e = ro();
        return e === null ? null : { parent: Dn ? Ne._currentValue : Ne._currentValue2, pool: e };
      }
      function Xl(e, n) {
        if (pn(e, n)) return true;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null) return false;
        var t = Object.keys(e), l = Object.keys(n);
        if (t.length !== l.length) return false;
        for (l = 0; l < t.length; l++) {
          var r = t[l];
          if (!Sp.call(n, r) || !pn(e[r], n[r])) return false;
        }
        return true;
      }
      function zi(e) {
        return e = e.status, e === "fulfilled" || e === "rejected";
      }
      function _i(e, n, t) {
        switch (t = e[t], t === void 0 ? e.push(n) : t !== n && (n.then(Yl, Yl), n = t), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, Ci(e), e;
          default:
            if (typeof n.status == "string") n.then(Yl, Yl);
            else {
              if (e = ke, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482));
              e = n, e.status = "pending", e.then(function(l) {
                if (n.status === "pending") {
                  var r = n;
                  r.status = "fulfilled", r.value = l;
                }
              }, function(l) {
                if (n.status === "pending") {
                  var r = n;
                  r.status = "rejected", r.reason = l;
                }
              });
            }
            switch (n.status) {
              case "fulfilled":
                return n.value;
              case "rejected":
                throw e = n.reason, Ci(e), e;
            }
            throw wt = n, Wt;
        }
      }
      function dt(e) {
        try {
          var n = e._init;
          return n(e._payload);
        } catch (t) {
          throw t !== null && typeof t == "object" && typeof t.then == "function" ? (wt = t, Wt) : t;
        }
      }
      function xi() {
        if (wt === null) throw Error(c(459));
        var e = wt;
        return wt = null, e;
      }
      function Ci(e) {
        if (e === Wt || e === Rr) throw Error(c(483));
      }
      function Gl(e) {
        var n = Pl;
        return Pl += 1, Xt === null && (Xt = []), _i(Xt, e, n);
      }
      function fl(e, n) {
        n = n.props.ref, e.ref = n !== void 0 ? n : null;
      }
      function Zl(e, n) {
        throw n.$$typeof === Of ? Error(c(525)) : (e = Object.prototype.toString.call(n), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)));
      }
      function Ni(e) {
        function n(h, m) {
          if (e) {
            var v = h.deletions;
            v === null ? (h.deletions = [m], h.flags |= 16) : v.push(m);
          }
        }
        function t(h, m) {
          if (!e) return null;
          for (; m !== null; ) n(h, m), m = m.sibling;
          return null;
        }
        function l(h) {
          for (var m = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
          return m;
        }
        function r(h, m) {
          return h = Ln(h, m), h.index = 0, h.sibling = null, h;
        }
        function o(h, m, v) {
          return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < m ? (h.flags |= 67108866, m) : v) : (h.flags |= 67108866, m)) : (h.flags |= 1048576, m);
        }
        function a(h) {
          return e && h.alternate === null && (h.flags |= 67108866), h;
        }
        function f(h, m, v, I) {
          return m === null || m.tag !== 6 ? (m = eu(v, h.mode, I), m.return = h, m) : (m = r(m, v), m.return = h, m);
        }
        function b(h, m, v, I) {
          var $ = v.type;
          return $ === Dt ? M(h, m, v.props.children, I, v.key) : m !== null && (m.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Jn && dt($) === m.type) ? (m = r(m, v.props), fl(m, v), m.return = h, m) : (m = yr(v.type, v.key, v.props, null, h.mode, I), fl(m, v), m.return = h, m);
        }
        function z(h, m, v, I) {
          return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = nu(v, h.mode, I), m.return = h, m) : (m = r(m, v.children || []), m.return = h, m);
        }
        function M(h, m, v, I, $) {
          return m === null || m.tag !== 7 ? (m = gt(v, h.mode, I, $), m.return = h, m) : (m = r(m, v), m.return = h, m);
        }
        function T(h, m, v) {
          if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return m = eu("" + m, h.mode, v), m.return = h, m;
          if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
              case Sr:
                return v = yr(m.type, m.key, m.props, null, h.mode, v), fl(v, m), v.return = h, v;
              case Lt:
                return m = nu(m, h.mode, v), m.return = h, m;
              case Jn:
                return m = dt(m), T(h, m, v);
            }
            if (Er(m) || _(m)) return m = gt(m, h.mode, v, null), m.return = h, m;
            if (typeof m.then == "function") return T(h, Gl(m), v);
            if (m.$$typeof === Kn) return T(h, Ql(h, m), v);
            Zl(h, m);
          }
          return null;
        }
        function L(h, m, v, I) {
          var $ = m !== null ? m.key : null;
          if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return $ !== null ? null : f(h, m, "" + v, I);
          if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
              case Sr:
                return v.key === $ ? b(h, m, v, I) : null;
              case Lt:
                return v.key === $ ? z(h, m, v, I) : null;
              case Jn:
                return v = dt(v), L(h, m, v, I);
            }
            if (Er(v) || _(v)) return $ !== null ? null : M(h, m, v, I, null);
            if (typeof v.then == "function") return L(h, m, Gl(v), I);
            if (v.$$typeof === Kn) return L(h, m, Ql(h, v), I);
            Zl(h, v);
          }
          return null;
        }
        function te(h, m, v, I, $) {
          if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint") return h = h.get(v) || null, f(m, h, "" + I, $);
          if (typeof I == "object" && I !== null) {
            switch (I.$$typeof) {
              case Sr:
                return h = h.get(I.key === null ? v : I.key) || null, b(m, h, I, $);
              case Lt:
                return h = h.get(I.key === null ? v : I.key) || null, z(m, h, I, $);
              case Jn:
                return I = dt(I), te(h, m, v, I, $);
            }
            if (Er(I) || _(I)) return h = h.get(v) || null, M(m, h, I, $, null);
            if (typeof I.then == "function") return te(h, m, v, Gl(I), $);
            if (I.$$typeof === Kn) return te(h, m, v, Ql(m, I), $);
            Zl(m, I);
          }
          return null;
        }
        function Ue(h, m, v, I) {
          for (var $ = null, Te = null, W = m, ve = m = 0, Ve = null; W !== null && ve < v.length; ve++) {
            W.index > ve ? (Ve = W, W = null) : Ve = W.sibling;
            var ge = L(h, W, v[ve], I);
            if (ge === null) {
              W === null && (W = Ve);
              break;
            }
            e && W && ge.alternate === null && n(h, W), m = o(ge, m, ve), Te === null ? $ = ge : Te.sibling = ge, Te = ge, W = Ve;
          }
          if (ve === v.length) return t(h, W), pe && de(h, ve), $;
          if (W === null) {
            for (; ve < v.length; ve++) W = T(h, v[ve], I), W !== null && (m = o(W, m, ve), Te === null ? $ = W : Te.sibling = W, Te = W);
            return pe && de(h, ve), $;
          }
          for (W = l(W); ve < v.length; ve++) Ve = te(W, h, ve, v[ve], I), Ve !== null && (e && Ve.alternate !== null && W.delete(Ve.key === null ? ve : Ve.key), m = o(Ve, m, ve), Te === null ? $ = Ve : Te.sibling = Ve, Te = Ve);
          return e && W.forEach(function(at) {
            return n(h, at);
          }), pe && de(h, ve), $;
        }
        function Dl(h, m, v, I) {
          if (v == null) throw Error(c(151));
          for (var $ = null, Te = null, W = m, ve = m = 0, Ve = null, ge = v.next(); W !== null && !ge.done; ve++, ge = v.next()) {
            W.index > ve ? (Ve = W, W = null) : Ve = W.sibling;
            var at = L(h, W, ge.value, I);
            if (at === null) {
              W === null && (W = Ve);
              break;
            }
            e && W && at.alternate === null && n(h, W), m = o(at, m, ve), Te === null ? $ = at : Te.sibling = at, Te = at, W = Ve;
          }
          if (ge.done) return t(h, W), pe && de(h, ve), $;
          if (W === null) {
            for (; !ge.done; ve++, ge = v.next()) ge = T(h, ge.value, I), ge !== null && (m = o(ge, m, ve), Te === null ? $ = ge : Te.sibling = ge, Te = ge);
            return pe && de(h, ve), $;
          }
          for (W = l(W); !ge.done; ve++, ge = v.next()) ge = te(W, h, ve, ge.value, I), ge !== null && (e && ge.alternate !== null && W.delete(ge.key === null ? ve : ge.key), m = o(ge, m, ve), Te === null ? $ = ge : Te.sibling = ge, Te = ge);
          return e && W.forEach(function(Cp) {
            return n(h, Cp);
          }), pe && de(h, ve), $;
        }
        function Ct(h, m, v, I) {
          if (typeof v == "object" && v !== null && v.type === Dt && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
              case Sr:
                e: {
                  for (var $ = v.key; m !== null; ) {
                    if (m.key === $) {
                      if ($ = v.type, $ === Dt) {
                        if (m.tag === 7) {
                          t(h, m.sibling), I = r(m, v.props.children), I.return = h, h = I;
                          break e;
                        }
                      } else if (m.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Jn && dt($) === m.type) {
                        t(h, m.sibling), I = r(m, v.props), fl(I, v), I.return = h, h = I;
                        break e;
                      }
                      t(h, m);
                      break;
                    } else n(h, m);
                    m = m.sibling;
                  }
                  v.type === Dt ? (I = gt(v.props.children, h.mode, I, v.key), I.return = h, h = I) : (I = yr(v.type, v.key, v.props, null, h.mode, I), fl(I, v), I.return = h, h = I);
                }
                return a(h);
              case Lt:
                e: {
                  for ($ = v.key; m !== null; ) {
                    if (m.key === $) if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                      t(h, m.sibling), I = r(m, v.children || []), I.return = h, h = I;
                      break e;
                    } else {
                      t(h, m);
                      break;
                    }
                    else n(h, m);
                    m = m.sibling;
                  }
                  I = nu(v, h.mode, I), I.return = h, h = I;
                }
                return a(h);
              case Jn:
                return v = dt(v), Ct(h, m, v, I);
            }
            if (Er(v)) return Ue(h, m, v, I);
            if (_(v)) {
              if ($ = _(v), typeof $ != "function") throw Error(c(150));
              return v = $.call(v), Dl(h, m, v, I);
            }
            if (typeof v.then == "function") return Ct(h, m, Gl(v), I);
            if (v.$$typeof === Kn) return Ct(h, m, Ql(h, v), I);
            Zl(h, v);
          }
          return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, m !== null && m.tag === 6 ? (t(h, m.sibling), I = r(m, v), I.return = h, h = I) : (t(h, m), I = eu(v, h.mode, I), I.return = h, h = I), a(h)) : t(h, m);
        }
        return function(h, m, v, I) {
          try {
            Pl = 0;
            var $ = Ct(h, m, v, I);
            return Xt = null, $;
          } catch (W) {
            if (W === Wt || W === Rr) throw W;
            var Te = s(29, W, null, h.mode);
            return Te.lanes = I, Te.return = h, Te;
          } finally {
          }
        };
      }
      function Kl() {
        for (var e = Gt, n = _u = Gt = 0; n < e; ) {
          var t = Sn[n];
          Sn[n++] = null;
          var l = Sn[n];
          Sn[n++] = null;
          var r = Sn[n];
          Sn[n++] = null;
          var o = Sn[n];
          if (Sn[n++] = null, l !== null && r !== null) {
            var a = l.pending;
            a === null ? r.next = r : (r.next = a.next, a.next = r), l.pending = r;
          }
          o !== 0 && Ti(t, r, o);
        }
      }
      function Jl(e, n, t, l) {
        Sn[Gt++] = e, Sn[Gt++] = n, Sn[Gt++] = t, Sn[Gt++] = l, _u |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
      }
      function oo(e, n, t, l) {
        return Jl(e, n, t, l), er(e);
      }
      function pt(e, n) {
        return Jl(e, null, null, n), er(e);
      }
      function Ti(e, n, t) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t);
        for (var r = false, o = e.return; o !== null; ) o.childLanes |= t, l = o.alternate, l !== null && (l.childLanes |= t), o.tag === 22 && (e = o.stateNode, e === null || e._visibility & 1 || (r = true)), e = o, o = o.return;
        return e.tag === 3 ? (o = e.stateNode, r && n !== null && (r = 31 - fn(t), e = o.hiddenUpdates, l = e[r], l === null ? e[r] = [n] : l.push(n), n.lane = t | 536870912), o) : null;
      }
      function er(e) {
        if (50 < Ll) throw Ll = 0, Lu = null, Error(c(185));
        for (var n = e.return; n !== null; ) e = n, n = e.return;
        return e.tag === 3 ? e.stateNode : null;
      }
      function uo(e) {
        e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
      }
      function io(e, n) {
        e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
      }
      function Qn(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
      }
      function Yn(e, n, t) {
        var l = e.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (ae & 2) !== 0) {
          var r = l.pending;
          return r === null ? n.next = n : (n.next = r.next, r.next = n), l.pending = n, n = er(e), Ti(e, null, t), n;
        }
        return Jl(e, l, n, t), er(e);
      }
      function dl(e, n, t) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194048) !== 0)) {
          var l = n.lanes;
          l &= e.pendingLanes, t |= l, n.lanes = t, re(e, t);
        }
      }
      function ao(e, n) {
        var t = e.updateQueue, l = e.alternate;
        if (l !== null && (l = l.updateQueue, t === l)) {
          var r = null, o = null;
          if (t = t.firstBaseUpdate, t !== null) {
            do {
              var a = { lane: t.lane, tag: t.tag, payload: t.payload, callback: null, next: null };
              o === null ? r = o = a : o = o.next = a, t = t.next;
            } while (t !== null);
            o === null ? r = o = n : o = o.next = n;
          } else r = o = n;
          t = { baseState: l.baseState, firstBaseUpdate: r, lastBaseUpdate: o, shared: l.shared, callbacks: l.callbacks }, e.updateQueue = t;
          return;
        }
        e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
      }
      function pl() {
        if (xu) {
          var e = Yt;
          if (e !== null) throw e;
        }
      }
      function ml(e, n, t, l) {
        xu = false;
        var r = e.updateQueue;
        lt = false;
        var o = r.firstBaseUpdate, a = r.lastBaseUpdate, f = r.shared.pending;
        if (f !== null) {
          r.shared.pending = null;
          var b = f, z = b.next;
          b.next = null, a === null ? o = z : a.next = z, a = b;
          var M = e.alternate;
          M !== null && (M = M.updateQueue, f = M.lastBaseUpdate, f !== a && (f === null ? M.firstBaseUpdate = z : f.next = z, M.lastBaseUpdate = b));
        }
        if (o !== null) {
          var T = r.baseState;
          a = 0, M = z = b = null, f = o;
          do {
            var L = f.lane & -536870913, te = L !== f.lane;
            if (te ? (ce & L) === L : (l & L) === L) {
              L !== 0 && L === Qt && (xu = true), M !== null && (M = M.next = { lane: 0, tag: f.tag, payload: f.payload, callback: null, next: null });
              e: {
                var Ue = e, Dl = f;
                L = n;
                var Ct = t;
                switch (Dl.tag) {
                  case 1:
                    if (Ue = Dl.payload, typeof Ue == "function") {
                      T = Ue.call(Ct, T, L);
                      break e;
                    }
                    T = Ue;
                    break e;
                  case 3:
                    Ue.flags = Ue.flags & -65537 | 128;
                  case 0:
                    if (Ue = Dl.payload, L = typeof Ue == "function" ? Ue.call(Ct, T, L) : Ue, L == null) break e;
                    T = lu({}, T, L);
                    break e;
                  case 2:
                    lt = true;
                }
              }
              L = f.callback, L !== null && (e.flags |= 64, te && (e.flags |= 8192), te = r.callbacks, te === null ? r.callbacks = [L] : te.push(L));
            } else te = { lane: L, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, M === null ? (z = M = te, b = T) : M = M.next = te, a |= L;
            if (f = f.next, f === null) {
              if (f = r.shared.pending, f === null) break;
              te = f, f = te.next, te.next = null, r.lastBaseUpdate = te, r.shared.pending = null;
            }
          } while (true);
          M === null && (b = T), r.baseState = b, r.firstBaseUpdate = z, r.lastBaseUpdate = M, o === null && (r.shared.lanes = 0), ot |= a, e.lanes = a, e.memoizedState = T;
        }
      }
      function Ii(e, n) {
        if (typeof e != "function") throw Error(c(191, e));
        e.call(n);
      }
      function Pi(e, n) {
        var t = e.callbacks;
        if (t !== null) for (e.callbacks = null, e = 0; e < t.length; e++) Ii(t[e], n);
      }
      function Ri(e, n) {
        e = Bn, R(Mr, e), R(Zt, n), Bn = e | n.baseLanes;
      }
      function so() {
        R(Mr, Bn), R(Zt, Zt.current);
      }
      function co() {
        Bn = Mr.current, x(Zt), x(Mr);
      }
      function Wn(e) {
        var n = e.alternate;
        R(je, je.current & 1), R(mn, e), _n === null && (n === null || Zt.current !== null || n.memoizedState !== null) && (_n = e);
      }
      function fo(e) {
        R(je, je.current), R(mn, e), _n === null && (_n = e);
      }
      function ji(e) {
        e.tag === 22 ? (R(je, je.current), R(mn, e), _n === null && (_n = e)) : Xn();
      }
      function Xn() {
        R(je, je.current), R(mn, mn.current);
      }
      function an(e) {
        x(mn), _n === e && (_n = null), x(je);
      }
      function nr(e) {
        for (var n = e; n !== null; ) {
          if (n.tag === 13) {
            var t = n.memoizedState;
            if (t !== null && (t = t.dehydrated, t === null || du(t) || pu(t))) return n;
          } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
            if ((n.flags & 128) !== 0) return n;
          } else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === e) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return null;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
        return null;
      }
      function Ie() {
        throw Error(c(321));
      }
      function po(e, n) {
        if (n === null) return false;
        for (var t = 0; t < n.length && t < e.length; t++) if (!pn(e[t], n[t])) return false;
        return true;
      }
      function mo(e, n, t, l, r, o) {
        return qn = o, le = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, V.H = e === null || e.memoizedState === null ? uc : Cu, _t = false, o = t(l, r), _t = false, Kt && (o = Fi(n, t, l, r)), Mi(e), o;
      }
      function Mi(e) {
        V.H = jl;
        var n = Ee !== null && Ee.next !== null;
        if (qn = 0, Fe = Ee = le = null, Fr = false, Rl = 0, Jt = null, n) throw Error(c(300));
        e === null || Oe || (e = e.dependencies, e !== null && $l(e) && (Oe = true));
      }
      function Fi(e, n, t, l) {
        le = e;
        var r = 0;
        do {
          if (Kt && (Jt = null), Rl = 0, Kt = false, 25 <= r) throw Error(c(301));
          if (r += 1, Fe = Ee = null, e.updateQueue != null) {
            var o = e.updateQueue;
            o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
          }
          V.H = ic, o = n(t, l);
        } while (Kt);
        return o;
      }
      function df() {
        var e = V.H, n = e.useState()[0];
        return n = typeof n.then == "function" ? hl(n) : n, e = e.useState()[0], (Ee !== null ? Ee.memoizedState : null) !== e && (le.flags |= 1024), n;
      }
      function ho() {
        var e = Or !== 0;
        return Or = 0, e;
      }
      function vo(e, n, t) {
        n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~t;
      }
      function go(e) {
        if (Fr) {
          for (e = e.memoizedState; e !== null; ) {
            var n = e.queue;
            n !== null && (n.pending = null), e = e.next;
          }
          Fr = false;
        }
        qn = 0, Fe = Ee = le = null, Kt = false, Rl = Or = 0, Jt = null;
      }
      function en() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return Fe === null ? le.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
      }
      function Re() {
        if (Ee === null) {
          var e = le.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = Ee.next;
        var n = Fe === null ? le.memoizedState : Fe.next;
        if (n !== null) Fe = n, Ee = e;
        else {
          if (e === null) throw le.alternate === null ? Error(c(467)) : Error(c(310));
          Ee = e, e = { memoizedState: Ee.memoizedState, baseState: Ee.baseState, baseQueue: Ee.baseQueue, queue: Ee.queue, next: null }, Fe === null ? le.memoizedState = Fe = e : Fe = Fe.next = e;
        }
        return Fe;
      }
      function tr() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
      }
      function hl(e) {
        var n = Rl;
        return Rl += 1, Jt === null && (Jt = []), e = _i(Jt, e, n), n = le, (Fe === null ? n.memoizedState : Fe.next) === null && (n = n.alternate, V.H = n === null || n.memoizedState === null ? uc : Cu), e;
      }
      function lr(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function") return hl(e);
          if (e.$$typeof === Kn) return $e(e);
        }
        throw Error(c(438, String(e)));
      }
      function bo(e) {
        var n = null, t = le.updateQueue;
        if (t !== null && (n = t.memoCache), n == null) {
          var l = le.alternate;
          l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = { data: l.data.map(function(r) {
            return r.slice();
          }), index: 0 })));
        }
        if (n == null && (n = { data: [], index: 0 }), t === null && (t = tr(), le.updateQueue = t), t.memoCache = n, t = n.data[n.index], t === void 0) for (t = n.data[n.index] = Array(e), l = 0; l < e; l++) t[l] = Lf;
        return n.index++, t;
      }
      function jn(e, n) {
        return typeof n == "function" ? n(e) : n;
      }
      function rr(e) {
        var n = Re();
        return yo(n, Ee, e);
      }
      function yo(e, n, t) {
        var l = e.queue;
        if (l === null) throw Error(c(311));
        l.lastRenderedReducer = t;
        var r = e.baseQueue, o = l.pending;
        if (o !== null) {
          if (r !== null) {
            var a = r.next;
            r.next = o.next, o.next = a;
          }
          n.baseQueue = r = o, l.pending = null;
        }
        if (o = e.baseState, r === null) e.memoizedState = o;
        else {
          n = r.next;
          var f = a = null, b = null, z = n, M = false;
          do {
            var T = z.lane & -536870913;
            if (T !== z.lane ? (ce & T) === T : (qn & T) === T) {
              var L = z.revertLane;
              if (L === 0) b !== null && (b = b.next = { lane: 0, revertLane: 0, gesture: null, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), T === Qt && (M = true);
              else if ((qn & L) === L) {
                z = z.next, L === Qt && (M = true);
                continue;
              } else T = { lane: 0, revertLane: z.revertLane, gesture: null, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }, b === null ? (f = b = T, a = o) : b = b.next = T, le.lanes |= L, ot |= L;
              T = z.action, _t && t(o, T), o = z.hasEagerState ? z.eagerState : t(o, T);
            } else L = { lane: T, revertLane: z.revertLane, gesture: z.gesture, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }, b === null ? (f = b = L, a = o) : b = b.next = L, le.lanes |= T, ot |= T;
            z = z.next;
          } while (z !== null && z !== n);
          if (b === null ? a = o : b.next = f, !pn(o, e.memoizedState) && (Oe = true, M && (t = Yt, t !== null))) throw t;
          e.memoizedState = o, e.baseState = a, e.baseQueue = b, l.lastRenderedState = o;
        }
        return r === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
      }
      function So(e) {
        var n = Re(), t = n.queue;
        if (t === null) throw Error(c(311));
        t.lastRenderedReducer = e;
        var l = t.dispatch, r = t.pending, o = n.memoizedState;
        if (r !== null) {
          t.pending = null;
          var a = r = r.next;
          do
            o = e(o, a.action), a = a.next;
          while (a !== r);
          pn(o, n.memoizedState) || (Oe = true), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
        }
        return [o, l];
      }
      function Oi(e, n, t) {
        var l = le, r = Re(), o = pe;
        if (o) {
          if (t === void 0) throw Error(c(407));
          t = t();
        } else t = n();
        var a = !pn((Ee || r).memoizedState, t);
        if (a && (r.memoizedState = t, Oe = true), r = r.queue, wo(Ui.bind(null, l, r, e), [e]), r.getSnapshot !== n || a || Fe !== null && Fe.memoizedState.tag & 1) {
          if (l.flags |= 2048, jt(9, { destroy: void 0 }, Di.bind(null, l, r, t, n), null), ke === null) throw Error(c(349));
          o || (qn & 127) !== 0 || Li(l, n, t);
        }
        return t;
      }
      function Li(e, n, t) {
        e.flags |= 16384, e = { getSnapshot: n, value: t }, n = le.updateQueue, n === null ? (n = tr(), le.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
      }
      function Di(e, n, t, l) {
        n.value = t, n.getSnapshot = l, Ai(n) && qi(e);
      }
      function Ui(e, n, t) {
        return t(function() {
          Ai(n) && qi(e);
        });
      }
      function Ai(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
          var t = n();
          return !pn(e, t);
        } catch {
          return true;
        }
      }
      function qi(e) {
        var n = pt(e, 2);
        n !== null && ln(n, e, 2);
      }
      function Eo(e) {
        var n = en();
        if (typeof e == "function") {
          var t = e;
          if (e = t(), _t) {
            Y(true);
            try {
              t();
            } finally {
              Y(false);
            }
          }
        }
        return n.memoizedState = n.baseState = e, n.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: jn, lastRenderedState: e }, n;
      }
      function Hi(e, n, t, l) {
        return e.baseState = t, yo(e, Ee, typeof l == "function" ? l : jn);
      }
      function pf(e, n, t, l, r) {
        if (ir(e)) throw Error(c(485));
        if (e = n.action, e !== null) {
          var o = { payload: r, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(a) {
            o.listeners.push(a);
          } };
          V.T !== null ? t(true) : o.isTransition = false, l(o), t = n.pending, t === null ? (o.next = n.pending = o, Bi(n, o)) : (o.next = t.next, n.pending = t.next = o);
        }
      }
      function Bi(e, n) {
        var t = n.action, l = n.payload, r = e.state;
        if (n.isTransition) {
          var o = V.T, a = {};
          V.T = a;
          try {
            var f = t(r, l), b = V.S;
            b !== null && b(a, f), Vi(e, n, f);
          } catch (z) {
            ko(e, n, z);
          } finally {
            o !== null && a.types !== null && (o.types = a.types), V.T = o;
          }
        } else try {
          o = t(r, l), Vi(e, n, o);
        } catch (z) {
          ko(e, n, z);
        }
      }
      function Vi(e, n, t) {
        t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(function(l) {
          $i(e, n, l);
        }, function(l) {
          return ko(e, n, l);
        }) : $i(e, n, t);
      }
      function $i(e, n, t) {
        n.status = "fulfilled", n.value = t, Qi(n), e.state = t, n = e.pending, n !== null && (t = n.next, t === n ? e.pending = null : (t = t.next, n.next = t, Bi(e, t)));
      }
      function ko(e, n, t) {
        var l = e.pending;
        if (e.pending = null, l !== null) {
          l = l.next;
          do
            n.status = "rejected", n.reason = t, Qi(n), n = n.next;
          while (n !== l);
        }
        e.action = null;
      }
      function Qi(e) {
        e = e.listeners;
        for (var n = 0; n < e.length; n++) (0, e[n])();
      }
      function Yi(e, n) {
        return n;
      }
      function Wi(e, n) {
        if (pe) {
          var t = ke.formState;
          if (t !== null) {
            e: {
              var l = le;
              if (pe) {
                if (Ce) {
                  var r = Id(Ce, yn);
                  if (r) {
                    Ce = Hs(r), l = Pd(r);
                    break e;
                  }
                }
                _e(l);
              }
              l = false;
            }
            l && (n = t[0]);
          }
        }
        t = en(), t.memoizedState = t.baseState = n, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Yi, lastRenderedState: n }, t.queue = l, t = da.bind(null, le, l), l.dispatch = t, l = Eo(false);
        var o = Co.bind(null, le, false, l.queue);
        return l = en(), r = { state: n, dispatch: null, action: e, pending: null }, l.queue = r, t = pf.bind(null, le, r, o, t), r.dispatch = t, l.memoizedState = e, [n, t, false];
      }
      function Xi(e) {
        var n = Re();
        return Gi(n, Ee, e);
      }
      function Gi(e, n, t) {
        if (n = yo(e, n, Yi)[0], e = rr(jn)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
          var l = hl(n);
        } catch (a) {
          throw a === Wt ? Rr : a;
        }
        else l = n;
        n = Re();
        var r = n.queue, o = r.dispatch;
        return t !== n.memoizedState && (le.flags |= 2048, jt(9, { destroy: void 0 }, mf.bind(null, r, t), null)), [l, o, e];
      }
      function mf(e, n) {
        e.action = n;
      }
      function Zi(e) {
        var n = Re(), t = Ee;
        if (t !== null) return Gi(n, t, e);
        Re(), n = n.memoizedState, t = Re();
        var l = t.queue.dispatch;
        return t.memoizedState = e, [n, l, false];
      }
      function jt(e, n, t, l) {
        return e = { tag: e, create: t, deps: l, inst: n, next: null }, n = le.updateQueue, n === null && (n = tr(), le.updateQueue = n), t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (l = t.next, t.next = e, e.next = l, n.lastEffect = e), e;
      }
      function Ki() {
        return Re().memoizedState;
      }
      function or(e, n, t, l) {
        var r = en();
        le.flags |= e, r.memoizedState = jt(1 | n, { destroy: void 0 }, t, l === void 0 ? null : l);
      }
      function ur(e, n, t, l) {
        var r = Re();
        l = l === void 0 ? null : l;
        var o = r.memoizedState.inst;
        Ee !== null && l !== null && po(l, Ee.memoizedState.deps) ? r.memoizedState = jt(n, o, t, l) : (le.flags |= e, r.memoizedState = jt(1 | n, o, t, l));
      }
      function Ji(e, n) {
        or(8390656, 8, e, n);
      }
      function wo(e, n) {
        ur(2048, 8, e, n);
      }
      function hf(e) {
        le.flags |= 4;
        var n = le.updateQueue;
        if (n === null) n = tr(), le.updateQueue = n, n.events = [e];
        else {
          var t = n.events;
          t === null ? n.events = [e] : t.push(e);
        }
      }
      function ea(e) {
        var n = Re().memoizedState;
        return hf({ ref: n, nextImpl: e }), function() {
          if ((ae & 2) !== 0) throw Error(c(440));
          return n.impl.apply(void 0, arguments);
        };
      }
      function na(e, n) {
        return ur(4, 2, e, n);
      }
      function ta(e, n) {
        return ur(4, 4, e, n);
      }
      function la(e, n) {
        if (typeof n == "function") {
          e = e();
          var t = n(e);
          return function() {
            typeof t == "function" ? t() : n(null);
          };
        }
        if (n != null) return e = e(), n.current = e, function() {
          n.current = null;
        };
      }
      function ra(e, n, t) {
        t = t != null ? t.concat([e]) : null, ur(4, 4, la.bind(null, n, e), t);
      }
      function zo() {
      }
      function oa(e, n) {
        var t = Re();
        n = n === void 0 ? null : n;
        var l = t.memoizedState;
        return n !== null && po(n, l[1]) ? l[0] : (t.memoizedState = [e, n], e);
      }
      function ua(e, n) {
        var t = Re();
        n = n === void 0 ? null : n;
        var l = t.memoizedState;
        if (n !== null && po(n, l[1])) return l[0];
        if (l = e(), _t) {
          Y(true);
          try {
            e();
          } finally {
            Y(false);
          }
        }
        return t.memoizedState = [l, n], l;
      }
      function _o(e, n, t) {
        return t === void 0 || (qn & 1073741824) !== 0 && (ce & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = t, e = ts(), le.lanes |= e, ot |= e, t);
      }
      function ia(e, n, t, l) {
        return pn(t, n) ? t : Zt.current !== null ? (e = _o(e, t, l), pn(e, n) || (Oe = true), e) : (qn & 42) === 0 || (qn & 1073741824) !== 0 && (ce & 261930) === 0 ? (Oe = true, e.memoizedState = t) : (e = ts(), le.lanes |= e, ot |= e, n);
      }
      function aa(e, n, t, l, r) {
        var o = Un();
        He(o !== 0 && 8 > o ? o : 8);
        var a = V.T, f = {};
        V.T = f, Co(e, false, n, t);
        try {
          var b = r(), z = V.S;
          if (z !== null && z(f, b), b !== null && typeof b == "object" && typeof b.then == "function") {
            var M = ff(b, l);
            vl(e, n, M, sn(e));
          } else vl(e, n, l, sn(e));
        } catch (T) {
          vl(e, n, { then: function() {
          }, status: "rejected", reason: T }, sn());
        } finally {
          He(o), a !== null && f.types !== null && (a.types = f.types), V.T = a;
        }
      }
      function sa(e) {
        var n = e.memoizedState;
        if (n !== null) return n;
        n = { memoizedState: Ut, baseState: Ut, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: jn, lastRenderedState: Ut }, next: null };
        var t = {};
        return n.next = { memoizedState: t, baseState: t, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: jn, lastRenderedState: t }, next: null }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
      }
      function xo() {
        return $e(yt);
      }
      function ca() {
        return Re().memoizedState;
      }
      function fa() {
        return Re().memoizedState;
      }
      function vf(e) {
        for (var n = e.return; n !== null; ) {
          switch (n.tag) {
            case 24:
            case 3:
              var t = sn();
              e = Qn(t);
              var l = Yn(n, e, t);
              l !== null && (ln(l, n, t), dl(l, n, t)), n = { cache: to() }, e.payload = n;
              return;
          }
          n = n.return;
        }
      }
      function gf(e, n, t) {
        var l = sn();
        t = { lane: l, revertLane: 0, gesture: null, action: t, hasEagerState: false, eagerState: null, next: null }, ir(e) ? pa(n, t) : (t = oo(e, n, t, l), t !== null && (ln(t, e, l), ma(t, n, l)));
      }
      function da(e, n, t) {
        var l = sn();
        vl(e, n, t, l);
      }
      function vl(e, n, t, l) {
        var r = { lane: l, revertLane: 0, gesture: null, action: t, hasEagerState: false, eagerState: null, next: null };
        if (ir(e)) pa(n, r);
        else {
          var o = e.alternate;
          if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
            var a = n.lastRenderedState, f = o(a, t);
            if (r.hasEagerState = true, r.eagerState = f, pn(f, a)) return Jl(e, n, r, 0), ke === null && Kl(), false;
          } catch {
          } finally {
          }
          if (t = oo(e, n, r, l), t !== null) return ln(t, e, l), ma(t, n, l), true;
        }
        return false;
      }
      function Co(e, n, t, l) {
        if (l = { lane: 2, revertLane: lo(), gesture: null, action: l, hasEagerState: false, eagerState: null, next: null }, ir(e)) {
          if (n) throw Error(c(479));
        } else n = oo(e, t, l, 2), n !== null && ln(n, e, 2);
      }
      function ir(e) {
        var n = e.alternate;
        return e === le || n !== null && n === le;
      }
      function pa(e, n) {
        Kt = Fr = true;
        var t = e.pending;
        t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
      }
      function ma(e, n, t) {
        if ((t & 4194048) !== 0) {
          var l = n.lanes;
          l &= e.pendingLanes, t |= l, n.lanes = t, re(e, t);
        }
      }
      function No(e, n, t, l) {
        n = e.memoizedState, t = t(l, n), t = t == null ? n : lu({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
      }
      function ha(e, n, t, l, r, o, a) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, o, a) : n.prototype && n.prototype.isPureReactComponent ? !Xl(t, l) || !Xl(r, o) : true;
      }
      function va(e, n, t, l) {
        e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, l), n.state !== e && Nu.enqueueReplaceState(n, n.state, null);
      }
      function mt(e, n) {
        var t = n;
        if ("ref" in n) {
          t = {};
          for (var l in n) l !== "ref" && (t[l] = n[l]);
        }
        if (e = e.defaultProps) {
          t === n && (t = lu({}, t));
          for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        }
        return t;
      }
      function ar(e, n) {
        try {
          var t = e.onUncaughtError;
          t(n.value, { componentStack: n.stack });
        } catch (l) {
          setTimeout(function() {
            throw l;
          });
        }
      }
      function ga(e, n, t) {
        try {
          var l = e.onCaughtError;
          l(t.value, { componentStack: t.stack, errorBoundary: n.tag === 1 ? n.stateNode : null });
        } catch (r) {
          setTimeout(function() {
            throw r;
          });
        }
      }
      function To(e, n, t) {
        return t = Qn(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
          ar(e, n);
        }, t;
      }
      function ba(e) {
        return e = Qn(e), e.tag = 3, e;
      }
      function ya(e, n, t, l) {
        var r = t.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var o = l.value;
          e.payload = function() {
            return r(o);
          }, e.callback = function() {
            ga(n, t, l);
          };
        }
        var a = t.stateNode;
        a !== null && typeof a.componentDidCatch == "function" && (e.callback = function() {
          ga(n, t, l), typeof r != "function" && (ut === null ? ut = /* @__PURE__ */ new Set([this]) : ut.add(this));
          var f = l.stack;
          this.componentDidCatch(l.value, { componentStack: f !== null ? f : "" });
        });
      }
      function bf(e, n, t, l, r) {
        if (t.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          if (n = t.alternate, n !== null && Pt(n, t, r, true), t = mn.current, t !== null) {
            switch (t.tag) {
              case 31:
              case 13:
                return _n === null ? gr() : t.alternate === null && Pe === 0 && (Pe = 3), t.flags &= -257, t.flags |= 65536, t.lanes = r, l === jr ? t.flags |= 16384 : (n = t.updateQueue, n === null ? t.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), Ko(e, l, r)), false;
              case 22:
                return t.flags |= 65536, l === jr ? t.flags |= 16384 : (n = t.updateQueue, n === null ? (n = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([l]) }, t.updateQueue = n) : (t = n.retryQueue, t === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : t.add(l)), Ko(e, l, r)), false;
            }
            throw Error(c(435, t.tag));
          }
          return Ko(e, l, r), gr(), false;
        }
        if (pe) return n = mn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, l !== Su && (e = Error(c(422), { cause: l }), sl(K(e, t)))) : (l !== Su && (n = Error(c(423), { cause: l }), sl(K(n, t))), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, l = K(l, t), r = To(e.stateNode, l, r), ao(e, r), Pe !== 4 && (Pe = 2)), false;
        var o = Error(c(520), { cause: l });
        if (o = K(o, t), Fl === null ? Fl = [o] : Fl.push(o), Pe !== 4 && (Pe = 2), n === null) return true;
        l = K(l, t), t = n;
        do {
          switch (t.tag) {
            case 3:
              return t.flags |= 65536, e = r & -r, t.lanes |= e, e = To(t.stateNode, l, e), ao(t, e), false;
            case 1:
              if (n = t.type, o = t.stateNode, (t.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (ut === null || !ut.has(o)))) return t.flags |= 65536, r &= -r, t.lanes |= r, r = ba(r), ya(r, e, t, l), ao(t, r), false;
          }
          t = t.return;
        } while (t !== null);
        return false;
      }
      function Qe(e, n, t, l) {
        n.child = e === null ? oc(n, null, t, l) : zt(n, e.child, t, l);
      }
      function Sa(e, n, t, l, r) {
        t = t.render;
        var o = n.ref;
        if ("ref" in l) {
          var a = {};
          for (var f in l) f !== "ref" && (a[f] = l[f]);
        } else a = l;
        return ft(n), l = mo(e, n, t, a, o, r), f = ho(), e !== null && !Oe ? (vo(e, n, r), Mn(e, n, r)) : (pe && f && E(n), n.flags |= 1, Qe(e, n, l, r), n.child);
      }
      function Ea(e, n, t, l, r) {
        if (e === null) {
          var o = t.type;
          return typeof o == "function" && !Jo(o) && o.defaultProps === void 0 && t.compare === null ? (n.tag = 15, n.type = o, ka(e, n, o, l, r)) : (e = yr(t.type, null, l, n, n.mode, r), e.ref = n.ref, e.return = n, n.child = e);
        }
        if (o = e.child, !Oo(e, r)) {
          var a = o.memoizedProps;
          if (t = t.compare, t = t !== null ? t : Xl, t(a, l) && e.ref === n.ref) return Mn(e, n, r);
        }
        return n.flags |= 1, e = Ln(o, l), e.ref = n.ref, e.return = n, n.child = e;
      }
      function ka(e, n, t, l, r) {
        if (e !== null) {
          var o = e.memoizedProps;
          if (Xl(o, l) && e.ref === n.ref) if (Oe = false, n.pendingProps = l = o, Oo(e, r)) (e.flags & 131072) !== 0 && (Oe = true);
          else return n.lanes = e.lanes, Mn(e, n, r);
        }
        return Io(e, n, t, l, r);
      }
      function wa(e, n, t, l) {
        var r = l.children, o = e !== null ? e.memoizedState : null;
        if (e === null && n.stateNode === null && (n.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), l.mode === "hidden") {
          if ((n.flags & 128) !== 0) {
            if (o = o !== null ? o.baseLanes | t : t, e !== null) {
              for (l = n.child = e.child, r = 0; l !== null; ) r = r | l.lanes | l.childLanes, l = l.sibling;
              l = r & ~o;
            } else l = 0, n.child = null;
            return za(e, n, o, t, l);
          }
          if ((t & 536870912) !== 0) n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Wl(n, o !== null ? o.cachePool : null), o !== null ? Ri(n, o) : so(), ji(n);
          else return l = n.lanes = 536870912, za(e, n, o !== null ? o.baseLanes | t : t, t, l);
        } else o !== null ? (Wl(n, o.cachePool), Ri(n, o), Xn(), n.memoizedState = null) : (e !== null && Wl(n, null), so(), Xn());
        return Qe(e, n, r, t), n.child;
      }
      function gl(e, n) {
        return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), n.sibling;
      }
      function za(e, n, t, l, r) {
        var o = ro();
        return o = o === null ? null : { parent: Dn ? Ne._currentValue : Ne._currentValue2, pool: o }, n.memoizedState = { baseLanes: t, cachePool: o }, e !== null && Wl(n, null), so(), ji(n), e !== null && Pt(e, n, l, true), n.childLanes = r, null;
      }
      function sr(e, n) {
        return n = fr({ mode: n.mode, children: n.children }, e.mode), n.ref = e.ref, e.child = n, n.return = e, n;
      }
      function _a(e, n, t) {
        return zt(n, e.child, null, t), e = sr(n, n.pendingProps), e.flags |= 2, an(n), n.memoizedState = null, e;
      }
      function yf(e, n, t) {
        var l = n.pendingProps, r = (n.flags & 128) !== 0;
        if (n.flags &= -129, e === null) {
          if (pe) {
            if (l.mode === "hidden") return e = sr(n, l), n.lanes = 536870912, gl(null, e);
            if (fo(n), (e = Ce) ? (e = Ad(e, yn), e !== null && (n.memoizedState = { dehydrated: e, treeContext: et !== null ? { id: In, overflow: Pn } : null, retryLane: 536870912, hydrationErrors: null }, t = ks(e), t.return = n, n.child = t, We = n, Ce = null)) : e = null, e === null) throw _e(n);
            return n.lanes = 536870912, null;
          }
          return sr(n, l);
        }
        var o = e.memoizedState;
        if (o !== null) {
          var a = o.dehydrated;
          if (fo(n), r) if (n.flags & 256) n.flags &= -257, n = _a(e, n, t);
          else if (n.memoizedState !== null) n.child = e.child, n.flags |= 128, n = null;
          else throw Error(c(558));
          else if (Oe || Pt(e, n, t, false), r = (t & e.childLanes) !== 0, Oe || r) {
            if (l = ke, l !== null && (a = oe(l, t), a !== 0 && a !== o.retryLane)) throw o.retryLane = a, pt(e, a), ln(l, e, a), Tu;
            gr(), n = _a(e, n, t);
          } else e = o.treeContext, Ke && (Ce = Fd(a), We = n, pe = true, tt = null, yn = false, e !== null && O(n, e)), n = sr(n, l), n.flags |= 4096;
          return n;
        }
        return e = Ln(e.child, { mode: l.mode, children: l.children }), e.ref = n.ref, n.child = e, e.return = n, e;
      }
      function cr(e, n) {
        var t = n.ref;
        if (t === null) e !== null && e.ref !== null && (n.flags |= 4194816);
        else {
          if (typeof t != "function" && typeof t != "object") throw Error(c(284));
          (e === null || e.ref !== t) && (n.flags |= 4194816);
        }
      }
      function Io(e, n, t, l, r) {
        return ft(n), t = mo(e, n, t, l, void 0, r), l = ho(), e !== null && !Oe ? (vo(e, n, r), Mn(e, n, r)) : (pe && l && E(n), n.flags |= 1, Qe(e, n, t, r), n.child);
      }
      function xa(e, n, t, l, r, o) {
        return ft(n), n.updateQueue = null, t = Fi(n, l, t, r), Mi(e), l = ho(), e !== null && !Oe ? (vo(e, n, o), Mn(e, n, o)) : (pe && l && E(n), n.flags |= 1, Qe(e, n, t, o), n.child);
      }
      function Ca(e, n, t, l, r) {
        if (ft(n), n.stateNode === null) {
          var o = Ht, a = t.contextType;
          typeof a == "object" && a !== null && (o = $e(a)), o = new t(l, o), n.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Nu, n.stateNode = o, o._reactInternals = n, o = n.stateNode, o.props = l, o.state = n.memoizedState, o.refs = {}, uo(n), a = t.contextType, o.context = typeof a == "object" && a !== null ? $e(a) : Ht, o.state = n.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (No(n, t, a, l), o.state = n.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (a = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), a !== o.state && Nu.enqueueReplaceState(o, o.state, null), ml(n, l, o, r), pl(), o.state = n.memoizedState), typeof o.componentDidMount == "function" && (n.flags |= 4194308), l = true;
        } else if (e === null) {
          o = n.stateNode;
          var f = n.memoizedProps, b = mt(t, f);
          o.props = b;
          var z = o.context, M = t.contextType;
          a = Ht, typeof M == "object" && M !== null && (a = $e(M));
          var T = t.getDerivedStateFromProps;
          M = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function", f = n.pendingProps !== f, M || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f || z !== a) && va(n, o, l, a), lt = false;
          var L = n.memoizedState;
          o.state = L, ml(n, l, o, r), pl(), z = n.memoizedState, f || L !== z || lt ? (typeof T == "function" && (No(n, t, T, l), z = n.memoizedState), (b = lt || ha(n, t, b, l, L, z, a)) ? (M || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = z), o.props = l, o.state = z, o.context = a, l = b) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), l = false);
        } else {
          o = n.stateNode, io(e, n), a = n.memoizedProps, M = mt(t, a), o.props = M, T = n.pendingProps, L = o.context, z = t.contextType, b = Ht, typeof z == "object" && z !== null && (b = $e(z)), f = t.getDerivedStateFromProps, (z = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== T || L !== b) && va(n, o, l, b), lt = false, L = n.memoizedState, o.state = L, ml(n, l, o, r), pl();
          var te = n.memoizedState;
          a !== T || L !== te || lt || e !== null && e.dependencies !== null && $l(e.dependencies) ? (typeof f == "function" && (No(n, t, f, l), te = n.memoizedState), (M = lt || ha(n, t, M, l, L, te, b) || e !== null && e.dependencies !== null && $l(e.dependencies)) ? (z || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(l, te, b), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(l, te, b)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && L === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && L === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = te), o.props = l, o.state = te, o.context = b, l = M) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && L === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && L === e.memoizedState || (n.flags |= 1024), l = false);
        }
        return o = l, cr(e, n), l = (n.flags & 128) !== 0, o || l ? (o = n.stateNode, t = l && typeof t.getDerivedStateFromError != "function" ? null : o.render(), n.flags |= 1, e !== null && l ? (n.child = zt(n, e.child, null, r), n.child = zt(n, null, t, r)) : Qe(e, n, t, r), n.memoizedState = o.state, e = n.child) : e = Mn(e, n, r), e;
      }
      function Na(e, n, t, l) {
        return ct(), n.flags |= 256, Qe(e, n, t, l), n.child;
      }
      function Po(e) {
        return { baseLanes: e, cachePool: wi() };
      }
      function Ro(e, n, t) {
        return e = e !== null ? e.childLanes & ~t : 0, n && (e |= vn), e;
      }
      function Ta(e, n, t) {
        var l = n.pendingProps, r = false, o = (n.flags & 128) !== 0, a;
        if ((a = o) || (a = e !== null && e.memoizedState === null ? false : (je.current & 2) !== 0), a && (r = true, n.flags &= -129), a = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
          if (pe) {
            if (r ? Wn(n) : Xn(), (e = Ce) ? (e = qd(e, yn), e !== null && (n.memoizedState = { dehydrated: e, treeContext: et !== null ? { id: In, overflow: Pn } : null, retryLane: 536870912, hydrationErrors: null }, t = ks(e), t.return = n, n.child = t, We = n, Ce = null)) : e = null, e === null) throw _e(n);
            return pu(e) ? n.lanes = 32 : n.lanes = 536870912, null;
          }
          var f = l.children;
          return l = l.fallback, r ? (Xn(), r = n.mode, f = fr({ mode: "hidden", children: f }, r), l = gt(l, r, t, null), f.return = n, l.return = n, f.sibling = l, n.child = f, l = n.child, l.memoizedState = Po(t), l.childLanes = Ro(e, a, t), n.memoizedState = Iu, gl(null, l)) : (Wn(n), jo(n, f));
        }
        var b = e.memoizedState;
        if (b !== null && (f = b.dehydrated, f !== null)) {
          if (o) n.flags & 256 ? (Wn(n), n.flags &= -257, n = Mo(e, n, t)) : n.memoizedState !== null ? (Xn(), n.child = e.child, n.flags |= 128, n = null) : (Xn(), f = l.fallback, r = n.mode, l = fr({ mode: "visible", children: l.children }, r), f = gt(f, r, t, null), f.flags |= 2, l.return = n, f.return = n, l.sibling = f, n.child = l, zt(n, e.child, null, t), l = n.child, l.memoizedState = Po(t), l.childLanes = Ro(e, a, t), n.memoizedState = Iu, n = gl(null, l));
          else if (Wn(n), pu(f)) a = Nd(f).digest, l = Error(c(419)), l.stack = "", l.digest = a, sl({ value: l, source: null, stack: null }), n = Mo(e, n, t);
          else if (Oe || Pt(e, n, t, false), a = (t & e.childLanes) !== 0, Oe || a) {
            if (a = ke, a !== null && (l = oe(a, t), l !== 0 && l !== b.retryLane)) throw b.retryLane = l, pt(e, l), ln(a, e, l), Tu;
            du(f) || gr(), n = Mo(e, n, t);
          } else du(f) ? (n.flags |= 192, n.child = e.child, n = null) : (e = b.treeContext, Ke && (Ce = Od(f), We = n, pe = true, tt = null, yn = false, e !== null && O(n, e)), n = jo(n, l.children), n.flags |= 4096);
          return n;
        }
        return r ? (Xn(), f = l.fallback, r = n.mode, b = e.child, o = b.sibling, l = Ln(b, { mode: "hidden", children: l.children }), l.subtreeFlags = b.subtreeFlags & 65011712, o !== null ? f = Ln(o, f) : (f = gt(f, r, t, null), f.flags |= 2), f.return = n, l.return = n, l.sibling = f, n.child = l, gl(null, l), l = n.child, f = e.child.memoizedState, f === null ? f = Po(t) : (r = f.cachePool, r !== null ? (b = Dn ? Ne._currentValue : Ne._currentValue2, r = r.parent !== b ? { parent: b, pool: b } : r) : r = wi(), f = { baseLanes: f.baseLanes | t, cachePool: r }), l.memoizedState = f, l.childLanes = Ro(e, a, t), n.memoizedState = Iu, gl(e.child, l)) : (Wn(n), t = e.child, e = t.sibling, t = Ln(t, { mode: "visible", children: l.children }), t.return = n, t.sibling = null, e !== null && (a = n.deletions, a === null ? (n.deletions = [e], n.flags |= 16) : a.push(e)), n.child = t, n.memoizedState = null, t);
      }
      function jo(e, n) {
        return n = fr({ mode: "visible", children: n }, e.mode), n.return = e, e.child = n;
      }
      function fr(e, n) {
        return e = s(22, e, null, n), e.lanes = 0, e;
      }
      function Mo(e, n, t) {
        return zt(n, e.child, null, t), e = jo(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
      }
      function Ia(e, n, t) {
        e.lanes |= n;
        var l = e.alternate;
        l !== null && (l.lanes |= n), eo(e.return, n, t);
      }
      function Fo(e, n, t, l, r, o) {
        var a = e.memoizedState;
        a === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: l, tail: t, tailMode: r, treeForkCount: o } : (a.isBackwards = n, a.rendering = null, a.renderingStartTime = 0, a.last = l, a.tail = t, a.tailMode = r, a.treeForkCount = o);
      }
      function Pa(e, n, t) {
        var l = n.pendingProps, r = l.revealOrder, o = l.tail;
        l = l.children;
        var a = je.current, f = (a & 2) !== 0;
        if (f ? (a = a & 1 | 2, n.flags |= 128) : a &= 1, R(je, a), Qe(e, n, l, t), l = pe ? Nl : 0, !f && e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ia(e, t, n);
          else if (e.tag === 19) Ia(e, t, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        switch (r) {
          case "forwards":
            for (t = n.child, r = null; t !== null; ) e = t.alternate, e !== null && nr(e) === null && (r = t), t = t.sibling;
            t = r, t === null ? (r = n.child, n.child = null) : (r = t.sibling, t.sibling = null), Fo(n, false, r, t, o, l);
            break;
          case "backwards":
          case "unstable_legacy-backwards":
            for (t = null, r = n.child, n.child = null; r !== null; ) {
              if (e = r.alternate, e !== null && nr(e) === null) {
                n.child = r;
                break;
              }
              e = r.sibling, r.sibling = t, t = r, r = e;
            }
            Fo(n, true, t, null, o, l);
            break;
          case "together":
            Fo(n, false, null, null, void 0, l);
            break;
          default:
            n.memoizedState = null;
        }
        return n.child;
      }
      function Mn(e, n, t) {
        if (e !== null && (n.dependencies = e.dependencies), ot |= n.lanes, (t & n.childLanes) === 0) if (e !== null) {
          if (Pt(e, n, t, false), (t & n.childLanes) === 0) return null;
        } else return null;
        if (e !== null && n.child !== e.child) throw Error(c(153));
        if (n.child !== null) {
          for (e = n.child, t = Ln(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Ln(e, e.pendingProps), t.return = n;
          t.sibling = null;
        }
        return n.child;
      }
      function Oo(e, n) {
        return (e.lanes & n) !== 0 ? true : (e = e.dependencies, !!(e !== null && $l(e)));
      }
      function Sf(e, n, t) {
        switch (n.tag) {
          case 3:
            J(n, n.stateNode.containerInfo), $n(n, Ne, e.memoizedState.cache), ct();
            break;
          case 27:
          case 5:
            be(n);
            break;
          case 4:
            J(n, n.stateNode.containerInfo);
            break;
          case 10:
            $n(n, n.type, n.memoizedProps.value);
            break;
          case 31:
            if (n.memoizedState !== null) return n.flags |= 128, fo(n), null;
            break;
          case 13:
            var l = n.memoizedState;
            if (l !== null) return l.dehydrated !== null ? (Wn(n), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? Ta(e, n, t) : (Wn(n), e = Mn(e, n, t), e !== null ? e.sibling : null);
            Wn(n);
            break;
          case 19:
            var r = (e.flags & 128) !== 0;
            if (l = (t & n.childLanes) !== 0, l || (Pt(e, n, t, false), l = (t & n.childLanes) !== 0), r) {
              if (l) return Pa(e, n, t);
              n.flags |= 128;
            }
            if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), R(je, je.current), l) break;
            return null;
          case 22:
            return n.lanes = 0, wa(e, n, t, n.pendingProps);
          case 24:
            $n(n, Ne, e.memoizedState.cache);
        }
        return Mn(e, n, t);
      }
      function Ra(e, n, t) {
        if (e !== null) if (e.memoizedProps !== n.pendingProps) Oe = true;
        else {
          if (!Oo(e, t) && (n.flags & 128) === 0) return Oe = false, Sf(e, n, t);
          Oe = (e.flags & 131072) !== 0;
        }
        else Oe = false, pe && (n.flags & 1048576) !== 0 && p(n, Nl, n.index);
        switch (n.lanes = 0, n.tag) {
          case 16:
            e: {
              var l = n.pendingProps;
              if (e = dt(n.elementType), n.type = e, typeof e == "function") Jo(e) ? (l = mt(e, l), n.tag = 1, n = Ca(null, n, e, l, t)) : (n.tag = 0, n = Io(null, n, e, l, t));
              else {
                if (e != null) {
                  var r = e.$$typeof;
                  if (r === ou) {
                    n.tag = 11, n = Sa(null, n, e, l, t);
                    break e;
                  } else if (r === au) {
                    n.tag = 14, n = Ea(null, n, e, l, t);
                    break e;
                  }
                }
                throw n = S(e) || e, Error(c(306, n, ""));
              }
            }
            return n;
          case 0:
            return Io(e, n, n.type, n.pendingProps, t);
          case 1:
            return l = n.type, r = mt(l, n.pendingProps), Ca(e, n, l, r, t);
          case 3:
            e: {
              if (J(n, n.stateNode.containerInfo), e === null) throw Error(c(387));
              var o = n.pendingProps;
              r = n.memoizedState, l = r.element, io(e, n), ml(n, o, null, t);
              var a = n.memoizedState;
              if (o = a.cache, $n(n, Ne, o), o !== r.cache && no(n, [Ne], t, true), pl(), o = a.element, Ke && r.isDehydrated) if (r = { element: o, isDehydrated: false, cache: a.cache }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
                n = Na(e, n, o, t);
                break e;
              } else if (o !== l) {
                l = K(Error(c(424)), n), sl(l), n = Na(e, n, o, t);
                break e;
              } else for (Ke && (Ce = Md(n.stateNode.containerInfo), We = n, pe = true, tt = null, yn = true), t = oc(n, null, o, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
              else {
                if (ct(), o === l) {
                  n = Mn(e, n, t);
                  break e;
                }
                Qe(e, n, o, t);
              }
              n = n.child;
            }
            return n;
          case 26:
            if (zn) return cr(e, n), e === null ? (t = $s(n.type, null, n.pendingProps, null)) ? n.memoizedState = t : pe || (n.stateNode = ip(n.type, n.pendingProps, nt.current, n)) : n.memoizedState = $s(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
          case 27:
            if (Ae) return be(n), e === null && Ae && pe && (l = n.stateNode = Zs(n.type, n.pendingProps, nt.current, Ye.current, false), We = n, yn = true, Ce = Ld(n.type, l, Ce)), Qe(e, n, n.pendingProps.children, t), cr(e, n), e === null && (n.flags |= 4194304), n.child;
          case 5:
            return e === null && pe && (rp(n.type, n.pendingProps, Ye.current), (r = l = Ce) && (l = Dd(l, n.type, n.pendingProps, yn), l !== null ? (n.stateNode = l, We = n, Ce = jd(l), yn = false, r = true) : r = false), r || _e(n)), be(n), r = n.type, o = n.pendingProps, a = e !== null ? e.memoizedProps : null, l = o.children, kr(r, o) ? l = null : a !== null && kr(r, a) && (n.flags |= 32), n.memoizedState !== null && (r = mo(e, n, df, null, null, t), Dn ? yt._currentValue = r : yt._currentValue2 = r), cr(e, n), Qe(e, n, l, t), n.child;
          case 6:
            return e === null && pe && (op(n.pendingProps, Ye.current), (e = t = Ce) && (t = Ud(t, n.pendingProps, yn), t !== null ? (n.stateNode = t, We = n, Ce = null, e = true) : e = false), e || _e(n)), null;
          case 13:
            return Ta(e, n, t);
          case 4:
            return J(n, n.stateNode.containerInfo), l = n.pendingProps, e === null ? n.child = zt(n, null, l, t) : Qe(e, n, l, t), n.child;
          case 11:
            return Sa(e, n, n.type, n.pendingProps, t);
          case 7:
            return Qe(e, n, n.pendingProps, t), n.child;
          case 8:
            return Qe(e, n, n.pendingProps.children, t), n.child;
          case 12:
            return Qe(e, n, n.pendingProps.children, t), n.child;
          case 10:
            return l = n.pendingProps, $n(n, n.type, l.value), Qe(e, n, l.children, t), n.child;
          case 9:
            return r = n.type._context, l = n.pendingProps.children, ft(n), r = $e(r), l = l(r), n.flags |= 1, Qe(e, n, l, t), n.child;
          case 14:
            return Ea(e, n, n.type, n.pendingProps, t);
          case 15:
            return ka(e, n, n.type, n.pendingProps, t);
          case 19:
            return Pa(e, n, t);
          case 31:
            return yf(e, n, t);
          case 22:
            return wa(e, n, t, n.pendingProps);
          case 24:
            return ft(n), l = $e(Ne), e === null ? (r = ro(), r === null && (r = ke, o = to(), r.pooledCache = o, o.refCount++, o !== null && (r.pooledCacheLanes |= t), r = o), n.memoizedState = { parent: l, cache: r }, uo(n), $n(n, Ne, r)) : ((e.lanes & t) !== 0 && (io(e, n), ml(n, null, null, t), pl()), r = e.memoizedState, o = n.memoizedState, r.parent !== l ? (r = { parent: l, cache: l }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), $n(n, Ne, l)) : (l = o.cache, $n(n, Ne, l), l !== r.cache && no(n, [Ne], t, true))), Qe(e, n, n.pendingProps.children, t), n.child;
          case 29:
            throw n.pendingProps;
        }
        throw Error(c(156, n.tag));
      }
      function En(e) {
        e.flags |= 4;
      }
      function dr(e) {
        Tn && (e.flags |= 8);
      }
      function ja(e, n) {
        if (e !== null && e.child === n.child) return false;
        if ((n.flags & 16) !== 0) return true;
        for (e = n.child; e !== null; ) {
          if ((e.flags & 8218) !== 0 || (e.subtreeFlags & 8218) !== 0) return true;
          e = e.sibling;
        }
        return false;
      }
      function Lo(e, n, t, l) {
        if (Ze) for (t = n.child; t !== null; ) {
          if (t.tag === 5 || t.tag === 6) cu(e, t.stateNode);
          else if (!(t.tag === 4 || Ae && t.tag === 27) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === n) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) return;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
        else if (Tn) for (var r = n.child; r !== null; ) {
          if (r.tag === 5) {
            var o = r.stateNode;
            t && l && (o = As(o, r.type, r.memoizedProps)), cu(e, o);
          } else if (r.tag === 6) o = r.stateNode, t && l && (o = qs(o, r.memoizedProps)), cu(e, o);
          else if (r.tag !== 4) {
            if (r.tag === 22 && r.memoizedState !== null) o = r.child, o !== null && (o.return = r), Lo(e, r, true, true);
            else if (r.child !== null) {
              r.child.return = r, r = r.child;
              continue;
            }
          }
          if (r === n) break;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === n) return;
            r = r.return;
          }
          r.sibling.return = r.return, r = r.sibling;
        }
      }
      function Ma(e, n, t, l) {
        var r = false;
        if (Tn) for (var o = n.child; o !== null; ) {
          if (o.tag === 5) {
            var a = o.stateNode;
            t && l && (a = As(a, o.type, o.memoizedProps)), Ds(e, a);
          } else if (o.tag === 6) a = o.stateNode, t && l && (a = qs(a, o.memoizedProps)), Ds(e, a);
          else if (o.tag !== 4) {
            if (o.tag === 22 && o.memoizedState !== null) r = o.child, r !== null && (r.return = o), Ma(e, o, true, true), r = true;
            else if (o.child !== null) {
              o.child.return = o, o = o.child;
              continue;
            }
          }
          if (o === n) break;
          for (; o.sibling === null; ) {
            if (o.return === null || o.return === n) return r;
            o = o.return;
          }
          o.sibling.return = o.return, o = o.sibling;
        }
        return r;
      }
      function Fa(e, n) {
        if (Tn && ja(e, n)) {
          e = n.stateNode;
          var t = e.containerInfo, l = Ls();
          Ma(l, n, false, false), e.pendingChildren = l, En(n), Cd(t, l);
        }
      }
      function Do(e, n, t, l) {
        if (Ze) e.memoizedProps !== l && En(n);
        else if (Tn) {
          var r = e.stateNode, o = e.memoizedProps;
          if ((e = ja(e, n)) || o !== l) {
            var a = Ye.current;
            o = xd(r, t, o, l, !e, null), o === r ? n.stateNode = r : (dr(n), Rs(o, t, l, a) && En(n), n.stateNode = o, e && Lo(o, n, false, false));
          } else n.stateNode = r;
        }
      }
      function Uo(e, n, t, l, r) {
        if ((e.mode & 32) !== 0 && (t === null ? Jf(n, l) : ed(n, t, l))) {
          if (e.flags |= 16777216, (r & 335544128) === r || fu(n, l)) if (Ms(e.stateNode, n, l)) e.flags |= 8192;
          else if (is()) e.flags |= 8192;
          else throw wt = jr, zu;
        } else e.flags &= -16777217;
      }
      function Oa(e, n) {
        if (sp(n)) {
          if (e.flags |= 16777216, !Gs(n)) if (is()) e.flags |= 8192;
          else throw wt = jr, zu;
        } else e.flags &= -16777217;
      }
      function pr(e, n) {
        n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? X() : 536870912, e.lanes |= n, tl |= n);
      }
      function bl(e, n) {
        if (!pe) switch (e.tailMode) {
          case "hidden":
            n = e.tail;
            for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
            t === null ? e.tail = null : t.sibling = null;
            break;
          case "collapsed":
            t = e.tail;
            for (var l = null; t !== null; ) t.alternate !== null && (l = t), t = t.sibling;
            l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
        }
      }
      function ze(e) {
        var n = e.alternate !== null && e.alternate.child === e.child, t = 0, l = 0;
        if (n) for (var r = e.child; r !== null; ) t |= r.lanes | r.childLanes, l |= r.subtreeFlags & 65011712, l |= r.flags & 65011712, r.return = e, r = r.sibling;
        else for (r = e.child; r !== null; ) t |= r.lanes | r.childLanes, l |= r.subtreeFlags, l |= r.flags, r.return = e, r = r.sibling;
        return e.subtreeFlags |= l, e.childLanes = t, n;
      }
      function Ef(e, n, t) {
        var l = n.pendingProps;
        switch (D(n), n.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return ze(n), null;
          case 1:
            return ze(n), null;
          case 3:
            return t = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), Rn(Ne), ue(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (It(n) ? En(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Jr())), Fa(e, n), ze(n), null;
          case 26:
            if (zn) {
              var r = n.type, o = n.memoizedState;
              return e === null ? (En(n), o !== null ? (ze(n), Oa(n, o)) : (ze(n), Uo(n, r, null, l, t))) : o ? o !== e.memoizedState ? (En(n), ze(n), Oa(n, o)) : (ze(n), n.flags &= -16777217) : (o = e.memoizedProps, Ze ? o !== l && En(n) : Do(e, n, r, l), ze(n), Uo(n, r, o, l, t)), null;
            }
          case 27:
            if (Ae) {
              if (Je(n), t = nt.current, r = n.type, e !== null && n.stateNode != null) Ze ? e.memoizedProps !== l && En(n) : Do(e, n, r, l);
              else {
                if (!l) {
                  if (n.stateNode === null) throw Error(c(166));
                  return ze(n), null;
                }
                e = Ye.current, It(n) ? Vl(n, e) : (e = Zs(r, l, t, e, true), n.stateNode = e, En(n));
              }
              return ze(n), null;
            }
          case 5:
            if (Je(n), r = n.type, e !== null && n.stateNode != null) Do(e, n, r, l);
            else {
              if (!l) {
                if (n.stateNode === null) throw Error(c(166));
                return ze(n), null;
              }
              if (o = Ye.current, It(n)) Vl(n, o), Kd(n.stateNode, r, l, o) && (n.flags |= 64);
              else {
                var a = $f(r, l, nt.current, o, n);
                dr(n), Lo(a, n, false, false), n.stateNode = a, Rs(a, r, l, o) && En(n);
              }
            }
            return ze(n), Uo(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, t), null;
          case 6:
            if (e && n.stateNode != null) t = e.memoizedProps, Ze ? t !== l && En(n) : Tn && (t !== l ? (e = nt.current, t = Ye.current, dr(n), n.stateNode = js(l, e, t, n)) : n.stateNode = e.stateNode);
            else {
              if (typeof l != "string" && n.stateNode === null) throw Error(c(166));
              if (e = nt.current, t = Ye.current, It(n)) {
                if (!Ke) throw Error(c(176));
                if (e = n.stateNode, t = n.memoizedProps, l = null, r = We, r !== null) switch (r.tag) {
                  case 27:
                  case 5:
                    l = r.memoizedProps;
                }
                Bd(e, t, n, l) || _e(n, true);
              } else dr(n), n.stateNode = js(l, e, t, n);
            }
            return ze(n), null;
          case 31:
            if (t = n.memoizedState, e === null || e.memoizedState !== null) {
              if (l = It(n), t !== null) {
                if (e === null) {
                  if (!l) throw Error(c(318));
                  if (!Ke) throw Error(c(556));
                  if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
                  Vd(e, n);
                } else ct(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                ze(n), e = false;
              } else t = Jr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = true;
              if (!e) return n.flags & 256 ? (an(n), n) : (an(n), null);
              if ((n.flags & 128) !== 0) throw Error(c(558));
            }
            return ze(n), null;
          case 13:
            if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (r = It(n), l !== null && l.dehydrated !== null) {
                if (e === null) {
                  if (!r) throw Error(c(318));
                  if (!Ke) throw Error(c(344));
                  if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(c(317));
                  $d(r, n);
                } else ct(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                ze(n), r = false;
              } else r = Jr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), r = true;
              if (!r) return n.flags & 256 ? (an(n), n) : (an(n), null);
            }
            return an(n), (n.flags & 128) !== 0 ? (n.lanes = t, n) : (t = l !== null, e = e !== null && e.memoizedState !== null, t && (l = n.child, r = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (r = l.alternate.memoizedState.cachePool.pool), o = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (o = l.memoizedState.cachePool.pool), o !== r && (l.flags |= 2048)), t !== e && t && (n.child.flags |= 8192), pr(n, n.updateQueue), ze(n), null);
          case 4:
            return ue(), Fa(e, n), e === null && Xf(n.stateNode.containerInfo), ze(n), null;
          case 10:
            return Rn(n.type), ze(n), null;
          case 19:
            if (x(je), l = n.memoizedState, l === null) return ze(n), null;
            if (r = (n.flags & 128) !== 0, o = l.rendering, o === null) if (r) bl(l, false);
            else {
              if (Pe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
                if (o = nr(e), o !== null) {
                  for (n.flags |= 128, bl(l, false), e = o.updateQueue, n.updateQueue = e, pr(n, e), n.subtreeFlags = 0, e = t, t = n.child; t !== null; ) Es(t, e), t = t.sibling;
                  return R(je, je.current & 1 | 2), pe && de(n, l.treeForkCount), n.child;
                }
                e = e.sibling;
              }
              l.tail !== null && rn() > Ol && (n.flags |= 128, r = true, bl(l, false), n.lanes = 4194304);
            }
            else {
              if (!r) if (e = nr(o), e !== null) {
                if (n.flags |= 128, r = true, e = e.updateQueue, n.updateQueue = e, pr(n, e), bl(l, true), l.tail === null && l.tailMode === "hidden" && !o.alternate && !pe) return ze(n), null;
              } else 2 * rn() - l.renderingStartTime > Ol && t !== 536870912 && (n.flags |= 128, r = true, bl(l, false), n.lanes = 4194304);
              l.isBackwards ? (o.sibling = n.child, n.child = o) : (e = l.last, e !== null ? e.sibling = o : n.child = o, l.last = o);
            }
            return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = rn(), e.sibling = null, t = je.current, R(je, r ? t & 1 | 2 : t & 1), pe && de(n, l.treeForkCount), e) : (ze(n), null);
          case 22:
          case 23:
            return an(n), co(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (t & 536870912) !== 0 && (n.flags & 128) === 0 && (ze(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ze(n), t = n.updateQueue, t !== null && pr(n, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== t && (n.flags |= 2048), e !== null && x(kt), null;
          case 24:
            return t = null, e !== null && (t = e.memoizedState.cache), n.memoizedState.cache !== t && (n.flags |= 2048), Rn(Ne), ze(n), null;
          case 25:
            return null;
          case 30:
            return null;
        }
        throw Error(c(156, n.tag));
      }
      function kf(e, n) {
        switch (D(n), n.tag) {
          case 1:
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 3:
            return Rn(Ne), ue(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
          case 26:
          case 27:
          case 5:
            return Je(n), null;
          case 31:
            if (n.memoizedState !== null) {
              if (an(n), n.alternate === null) throw Error(c(340));
              ct();
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 13:
            if (an(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
              if (n.alternate === null) throw Error(c(340));
              ct();
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 19:
            return x(je), null;
          case 4:
            return ue(), null;
          case 10:
            return Rn(n.type), null;
          case 22:
          case 23:
            return an(n), co(), e !== null && x(kt), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
          case 24:
            return Rn(Ne), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function La(e, n) {
        switch (D(n), n.tag) {
          case 3:
            Rn(Ne), ue();
            break;
          case 26:
          case 27:
          case 5:
            Je(n);
            break;
          case 4:
            ue();
            break;
          case 31:
            n.memoizedState !== null && an(n);
            break;
          case 13:
            an(n);
            break;
          case 19:
            x(je);
            break;
          case 10:
            Rn(n.type);
            break;
          case 22:
          case 23:
            an(n), co(), e !== null && x(kt);
            break;
          case 24:
            Rn(Ne);
        }
      }
      function yl(e, n) {
        try {
          var t = n.updateQueue, l = t !== null ? t.lastEffect : null;
          if (l !== null) {
            var r = l.next;
            t = r;
            do {
              if ((t.tag & e) === e) {
                l = void 0;
                var o = t.create, a = t.inst;
                l = o(), a.destroy = l;
              }
              t = t.next;
            } while (t !== r);
          }
        } catch (f) {
          he(n, n.return, f);
        }
      }
      function Gn(e, n, t) {
        try {
          var l = n.updateQueue, r = l !== null ? l.lastEffect : null;
          if (r !== null) {
            var o = r.next;
            l = o;
            do {
              if ((l.tag & e) === e) {
                var a = l.inst, f = a.destroy;
                if (f !== void 0) {
                  a.destroy = void 0, r = n;
                  var b = t, z = f;
                  try {
                    z();
                  } catch (M) {
                    he(r, b, M);
                  }
                }
              }
              l = l.next;
            } while (l !== o);
          }
        } catch (M) {
          he(n, n.return, M);
        }
      }
      function Da(e) {
        var n = e.updateQueue;
        if (n !== null) {
          var t = e.stateNode;
          try {
            Pi(n, t);
          } catch (l) {
            he(e, e.return, l);
          }
        }
      }
      function Ua(e, n, t) {
        t.props = mt(e.type, e.memoizedProps), t.state = e.memoizedState;
        try {
          t.componentWillUnmount();
        } catch (l) {
          he(e, n, l);
        }
      }
      function Sl(e, n) {
        try {
          var t = e.ref;
          if (t !== null) {
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                var l = zl(e.stateNode);
                break;
              case 30:
                l = e.stateNode;
                break;
              default:
                l = e.stateNode;
            }
            typeof t == "function" ? e.refCleanup = t(l) : t.current = l;
          }
        } catch (r) {
          he(e, n, r);
        }
      }
      function Nn(e, n) {
        var t = e.ref, l = e.refCleanup;
        if (t !== null) if (typeof l == "function") try {
          l();
        } catch (r) {
          he(e, n, r);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
        else if (typeof t == "function") try {
          t(null);
        } catch (r) {
          he(e, n, r);
        }
        else t.current = null;
      }
      function Aa(e) {
        var n = e.type, t = e.memoizedProps, l = e.stateNode;
        try {
          hd(l, n, t, e);
        } catch (r) {
          he(e, e.return, r);
        }
      }
      function Ao(e, n, t) {
        try {
          vd(e.stateNode, e.type, t, n, e);
        } catch (l) {
          he(e, e.return, l);
        }
      }
      function qa(e) {
        return e.tag === 5 || e.tag === 3 || (zn ? e.tag === 26 : false) || (Ae ? e.tag === 27 && At(e.type) : false) || e.tag === 4;
      }
      function qo(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || qa(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (Ae && e.tag === 27 && At(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function Ho(e, n, t) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, n ? bd(t, e, n) : pd(t, e);
        else if (l !== 4 && (Ae && l === 27 && At(e.type) && (t = e.stateNode, n = null), e = e.child, e !== null)) for (Ho(e, n, t), e = e.sibling; e !== null; ) Ho(e, n, t), e = e.sibling;
      }
      function mr(e, n, t) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, n ? gd(t, e, n) : dd(t, e);
        else if (l !== 4 && (Ae && l === 27 && At(e.type) && (t = e.stateNode), e = e.child, e !== null)) for (mr(e, n, t), e = e.sibling; e !== null; ) mr(e, n, t), e = e.sibling;
      }
      function Ha(e, n, t) {
        e = e.containerInfo;
        try {
          Us(e, t);
        } catch (l) {
          he(n, n.return, l);
        }
      }
      function Ba(e) {
        var n = e.stateNode, t = e.memoizedProps;
        try {
          fp(e.type, t, n, e);
        } catch (l) {
          he(e, e.return, l);
        }
      }
      function wf(e, n) {
        for (Bf(e.containerInfo), Be = n; Be !== null; ) if (e = Be, n = e.child, (e.subtreeFlags & 1028) !== 0 && n !== null) n.return = e, Be = n;
        else for (; Be !== null; ) {
          e = Be;
          var t = e.alternate;
          switch (n = e.flags, e.tag) {
            case 0:
              if ((n & 4) !== 0 && (n = e.updateQueue, n = n !== null ? n.events : null, n !== null)) for (var l = 0; l < n.length; l++) {
                var r = n[l];
                r.ref.impl = r.nextImpl;
              }
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && t !== null) {
                n = void 0, l = e, r = t.memoizedProps, t = t.memoizedState;
                var o = l.stateNode;
                try {
                  var a = mt(l.type, r);
                  n = o.getSnapshotBeforeUpdate(a, t), o.__reactInternalSnapshotBeforeUpdate = n;
                } catch (f) {
                  he(l, l.return, f);
                }
              }
              break;
            case 3:
              (n & 1024) !== 0 && Ze && _d(e.stateNode.containerInfo);
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((n & 1024) !== 0) throw Error(c(163));
          }
          if (n = e.sibling, n !== null) {
            n.return = e.return, Be = n;
            break;
          }
          Be = e.return;
        }
      }
      function Va(e, n, t) {
        var l = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Fn(e, t), l & 4 && yl(5, t);
            break;
          case 1:
            if (Fn(e, t), l & 4) if (e = t.stateNode, n === null) try {
              e.componentDidMount();
            } catch (a) {
              he(t, t.return, a);
            }
            else {
              var r = mt(t.type, n.memoizedProps);
              n = n.memoizedState;
              try {
                e.componentDidUpdate(r, n, e.__reactInternalSnapshotBeforeUpdate);
              } catch (a) {
                he(t, t.return, a);
              }
            }
            l & 64 && Da(t), l & 512 && Sl(t, t.return);
            break;
          case 3:
            if (Fn(e, t), l & 64 && (l = t.updateQueue, l !== null)) {
              if (e = null, t.child !== null) switch (t.child.tag) {
                case 27:
                case 5:
                  e = zl(t.child.stateNode);
                  break;
                case 1:
                  e = t.child.stateNode;
              }
              try {
                Pi(l, e);
              } catch (a) {
                he(t, t.return, a);
              }
            }
            break;
          case 27:
            Ae && n === null && l & 4 && Ba(t);
          case 26:
          case 5:
            if (Fn(e, t), n === null) {
              if (l & 4) Aa(t);
              else if (l & 64) {
                e = t.type, n = t.memoizedProps, r = t.stateNode;
                try {
                  Wd(r, e, n, t);
                } catch (a) {
                  he(t, t.return, a);
                }
              }
            }
            l & 512 && Sl(t, t.return);
            break;
          case 12:
            Fn(e, t);
            break;
          case 31:
            Fn(e, t), l & 4 && Qa(e, t);
            break;
          case 13:
            Fn(e, t), l & 4 && Ya(e, t), l & 64 && (l = t.memoizedState, l !== null && (l = l.dehydrated, l !== null && (t = If.bind(null, t), Td(l, t))));
            break;
          case 22:
            if (l = t.memoizedState !== null || Hn, !l) {
              n = n !== null && n.memoizedState !== null || Le, r = Hn;
              var o = Le;
              Hn = l, (Le = n) && !o ? On(e, t, (t.subtreeFlags & 8772) !== 0) : Fn(e, t), Hn = r, Le = o;
            }
            break;
          case 30:
            break;
          default:
            Fn(e, t);
        }
      }
      function $a(e) {
        var n = e.alternate;
        n !== null && (e.alternate = null, $a(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Kf(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function kn(e, n, t) {
        for (t = t.child; t !== null; ) Bo(e, n, t), t = t.sibling;
      }
      function Bo(e, n, t) {
        if (dn && typeof dn.onCommitFiberUnmount == "function") try {
          dn.onCommitFiberUnmount(Cl, t);
        } catch {
        }
        switch (t.tag) {
          case 26:
            if (zn) {
              Le || Nn(t, n), kn(e, n, t), t.memoizedState ? Ys(t.memoizedState) : t.stateNode && Xs(t.stateNode);
              break;
            }
          case 27:
            if (Ae) {
              Le || Nn(t, n);
              var l = De, r = on;
              At(t.type) && (De = t.stateNode, on = false), kn(e, n, t), Ks(t.stateNode), De = l, on = r;
              break;
            }
          case 5:
            Le || Nn(t, n);
          case 6:
            if (Ze) {
              if (l = De, r = on, De = null, kn(e, n, t), De = l, on = r, De !== null) if (on) try {
                Sd(De, t.stateNode);
              } catch (o) {
                he(t, n, o);
              }
              else try {
                yd(De, t.stateNode);
              } catch (o) {
                he(t, n, o);
              }
            } else kn(e, n, t);
            break;
          case 18:
            Ze && De !== null && (on ? np(De, t.stateNode) : ep(De, t.stateNode));
            break;
          case 4:
            Ze ? (l = De, r = on, De = t.stateNode.containerInfo, on = true, kn(e, n, t), De = l, on = r) : (Tn && Ha(t.stateNode, t, Ls()), kn(e, n, t));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Gn(2, t, n), Le || Gn(4, t, n), kn(e, n, t);
            break;
          case 1:
            Le || (Nn(t, n), l = t.stateNode, typeof l.componentWillUnmount == "function" && Ua(t, n, l)), kn(e, n, t);
            break;
          case 21:
            kn(e, n, t);
            break;
          case 22:
            Le = (l = Le) || t.memoizedState !== null, kn(e, n, t), Le = l;
            break;
          default:
            kn(e, n, t);
        }
      }
      function Qa(e, n) {
        if (Ke && n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
          e = e.dehydrated;
          try {
            Gd(e);
          } catch (t) {
            he(n, n.return, t);
          }
        }
      }
      function Ya(e, n) {
        if (Ke && n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
          Zd(e);
        } catch (t) {
          he(n, n.return, t);
        }
      }
      function zf(e) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            var n = e.stateNode;
            return n === null && (n = e.stateNode = new ac()), n;
          case 22:
            return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new ac()), n;
          default:
            throw Error(c(435, e.tag));
        }
      }
      function hr(e, n) {
        var t = zf(e);
        n.forEach(function(l) {
          if (!t.has(l)) {
            t.add(l);
            var r = Pf.bind(null, e, l);
            l.then(r, r);
          }
        });
      }
      function Ge(e, n) {
        var t = n.deletions;
        if (t !== null) for (var l = 0; l < t.length; l++) {
          var r = t[l], o = e, a = n;
          if (Ze) {
            var f = a;
            e: for (; f !== null; ) {
              switch (f.tag) {
                case 27:
                  if (Ae) {
                    if (At(f.type)) {
                      De = f.stateNode, on = false;
                      break e;
                    }
                    break;
                  }
                case 5:
                  De = f.stateNode, on = false;
                  break e;
                case 3:
                case 4:
                  De = f.stateNode.containerInfo, on = true;
                  break e;
              }
              f = f.return;
            }
            if (De === null) throw Error(c(160));
            Bo(o, a, r), De = null, on = false;
          } else Bo(o, a, r);
          o = r.alternate, o !== null && (o.return = null), r.return = null;
        }
        if (n.subtreeFlags & 13886) for (n = n.child; n !== null; ) Wa(n, e), n = n.sibling;
      }
      function Wa(e, n) {
        var t = e.alternate, l = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Ge(n, e), nn(e), l & 4 && (Gn(3, e, e.return), yl(3, e), Gn(5, e, e.return));
            break;
          case 1:
            Ge(n, e), nn(e), l & 512 && (Le || t === null || Nn(t, t.return)), l & 64 && Hn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? l : t.concat(l))));
            break;
          case 26:
            if (zn) {
              var r = xn;
              if (Ge(n, e), nn(e), l & 512 && (Le || t === null || Nn(t, t.return)), l & 4) {
                l = t !== null ? t.memoizedState : null;
                var o = e.memoizedState;
                t === null ? o === null ? e.stateNode === null ? e.stateNode = up(r, e.type, e.memoizedProps, e) : Ws(r, e.type, e.stateNode) : e.stateNode = Qs(r, o, e.memoizedProps) : l !== o ? (l === null ? t.stateNode !== null && Xs(t.stateNode) : Ys(l), o === null ? Ws(r, e.type, e.stateNode) : Qs(r, o, e.memoizedProps)) : o === null && e.stateNode !== null && Ao(e, e.memoizedProps, t.memoizedProps);
              }
              break;
            }
          case 27:
            if (Ae) {
              Ge(n, e), nn(e), l & 512 && (Le || t === null || Nn(t, t.return)), t !== null && l & 4 && Ao(e, e.memoizedProps, t.memoizedProps);
              break;
            }
          case 5:
            if (Ge(n, e), nn(e), l & 512 && (Le || t === null || Nn(t, t.return)), Ze) {
              if (e.flags & 32) {
                r = e.stateNode;
                try {
                  Os(r);
                } catch (T) {
                  he(e, e.return, T);
                }
              }
              l & 4 && e.stateNode != null && (r = e.memoizedProps, Ao(e, r, t !== null ? t.memoizedProps : r)), l & 1024 && (Pu = true);
            } else Tn && e.alternate !== null && (e.alternate.stateNode = e.stateNode);
            break;
          case 6:
            if (Ge(n, e), nn(e), l & 4 && Ze) {
              if (e.stateNode === null) throw Error(c(162));
              l = e.memoizedProps, t = t !== null ? t.memoizedProps : l, r = e.stateNode;
              try {
                md(r, t, l);
              } catch (T) {
                he(e, e.return, T);
              }
            }
            break;
          case 3:
            if (zn ? (ap(), r = xn, xn = mu(n.containerInfo), Ge(n, e), xn = r) : Ge(n, e), nn(e), l & 4) {
              if (Ze && Ke && t !== null && t.memoizedState.isDehydrated) try {
                Xd(n.containerInfo);
              } catch (T) {
                he(e, e.return, T);
              }
              if (Tn) {
                l = n.containerInfo, t = n.pendingChildren;
                try {
                  Us(l, t);
                } catch (T) {
                  he(e, e.return, T);
                }
              }
            }
            Pu && (Pu = false, Xa(e));
            break;
          case 4:
            zn ? (t = xn, xn = mu(e.stateNode.containerInfo), Ge(n, e), nn(e), xn = t) : (Ge(n, e), nn(e)), l & 4 && Tn && Ha(e.stateNode, e, e.stateNode.pendingChildren);
            break;
          case 12:
            Ge(n, e), nn(e);
            break;
          case 31:
            Ge(n, e), nn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, hr(e, l)));
            break;
          case 13:
            Ge(n, e), nn(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Hr = rn()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, hr(e, l)));
            break;
          case 22:
            r = e.memoizedState !== null;
            var a = t !== null && t.memoizedState !== null, f = Hn, b = Le;
            if (Hn = f || r, Le = b || a, Ge(n, e), Le = b, Hn = f, nn(e), l & 8192 && (n = e.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (t === null || a || Hn || Le || ht(e)), Ze)) {
              e: if (t = null, Ze) for (n = e; ; ) {
                if (n.tag === 5 || zn && n.tag === 26) {
                  if (t === null) {
                    a = t = n;
                    try {
                      o = a.stateNode, r ? Ed(o) : wd(a.stateNode, a.memoizedProps);
                    } catch (T) {
                      he(a, a.return, T);
                    }
                  }
                } else if (n.tag === 6) {
                  if (t === null) {
                    a = n;
                    try {
                      var z = a.stateNode;
                      r ? kd(z) : zd(z, a.memoizedProps);
                    } catch (T) {
                      he(a, a.return, T);
                    }
                  }
                } else if (n.tag === 18) {
                  if (t === null) {
                    a = n;
                    try {
                      var M = a.stateNode;
                      r ? tp(M) : lp(a.stateNode);
                    } catch (T) {
                      he(a, a.return, T);
                    }
                  }
                } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
                  n.child.return = n, n = n.child;
                  continue;
                }
                if (n === e) break e;
                for (; n.sibling === null; ) {
                  if (n.return === null || n.return === e) break e;
                  t === n && (t = null), n = n.return;
                }
                t === n && (t = null), n.sibling.return = n.return, n = n.sibling;
              }
            }
            l & 4 && (l = e.updateQueue, l !== null && (t = l.retryQueue, t !== null && (l.retryQueue = null, hr(e, t))));
            break;
          case 19:
            Ge(n, e), nn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, hr(e, l)));
            break;
          case 30:
            break;
          case 21:
            break;
          default:
            Ge(n, e), nn(e);
        }
      }
      function nn(e) {
        var n = e.flags;
        if (n & 2) {
          try {
            for (var t, l = e.return; l !== null; ) {
              if (qa(l)) {
                t = l;
                break;
              }
              l = l.return;
            }
            if (Ze) {
              if (t == null) throw Error(c(160));
              switch (t.tag) {
                case 27:
                  if (Ae) {
                    var r = t.stateNode, o = qo(e);
                    mr(e, o, r);
                    break;
                  }
                case 5:
                  var a = t.stateNode;
                  t.flags & 32 && (Os(a), t.flags &= -33);
                  var f = qo(e);
                  mr(e, f, a);
                  break;
                case 3:
                case 4:
                  var b = t.stateNode.containerInfo, z = qo(e);
                  Ho(e, z, b);
                  break;
                default:
                  throw Error(c(161));
              }
            }
          } catch (M) {
            he(e, e.return, M);
          }
          e.flags &= -3;
        }
        n & 4096 && (e.flags &= -4097);
      }
      function Xa(e) {
        if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
          var n = e;
          Xa(n), n.tag === 5 && n.flags & 1024 && ld(n.stateNode), e = e.sibling;
        }
      }
      function Fn(e, n) {
        if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) Va(e, n.alternate, n), n = n.sibling;
      }
      function ht(e) {
        for (e = e.child; e !== null; ) {
          var n = e;
          switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Gn(4, n, n.return), ht(n);
              break;
            case 1:
              Nn(n, n.return);
              var t = n.stateNode;
              typeof t.componentWillUnmount == "function" && Ua(n, n.return, t), ht(n);
              break;
            case 27:
              Ae && Ks(n.stateNode);
            case 26:
            case 5:
              Nn(n, n.return), ht(n);
              break;
            case 22:
              n.memoizedState === null && ht(n);
              break;
            case 30:
              ht(n);
              break;
            default:
              ht(n);
          }
          e = e.sibling;
        }
      }
      function On(e, n, t) {
        for (t = t && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
          var l = n.alternate, r = e, o = n, a = o.flags;
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
              On(r, o, t), yl(4, o);
              break;
            case 1:
              if (On(r, o, t), l = o, r = l.stateNode, typeof r.componentDidMount == "function") try {
                r.componentDidMount();
              } catch (z) {
                he(l, l.return, z);
              }
              if (l = o, r = l.updateQueue, r !== null) {
                var f = l.stateNode;
                try {
                  var b = r.shared.hiddenCallbacks;
                  if (b !== null) for (r.shared.hiddenCallbacks = null, r = 0; r < b.length; r++) Ii(b[r], f);
                } catch (z) {
                  he(l, l.return, z);
                }
              }
              t && a & 64 && Da(o), Sl(o, o.return);
              break;
            case 27:
              Ae && Ba(o);
            case 26:
            case 5:
              On(r, o, t), t && l === null && a & 4 && Aa(o), Sl(o, o.return);
              break;
            case 12:
              On(r, o, t);
              break;
            case 31:
              On(r, o, t), t && a & 4 && Qa(r, o);
              break;
            case 13:
              On(r, o, t), t && a & 4 && Ya(r, o);
              break;
            case 22:
              o.memoizedState === null && On(r, o, t), Sl(o, o.return);
              break;
            case 30:
              break;
            default:
              On(r, o, t);
          }
          n = n.sibling;
        }
      }
      function Vo(e, n) {
        var t = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && cl(t));
      }
      function $o(e, n) {
        e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && cl(e));
      }
      function wn(e, n, t, l) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) Ga(e, n, t, l), n = n.sibling;
      }
      function Ga(e, n, t, l) {
        var r = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            wn(e, n, t, l), r & 2048 && yl(9, n);
            break;
          case 1:
            wn(e, n, t, l);
            break;
          case 3:
            wn(e, n, t, l), r & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && cl(e)));
            break;
          case 12:
            if (r & 2048) {
              wn(e, n, t, l), e = n.stateNode;
              try {
                var o = n.memoizedProps, a = o.id, f = o.onPostCommit;
                typeof f == "function" && f(a, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
              } catch (b) {
                he(n, n.return, b);
              }
            } else wn(e, n, t, l);
            break;
          case 31:
            wn(e, n, t, l);
            break;
          case 13:
            wn(e, n, t, l);
            break;
          case 23:
            break;
          case 22:
            o = n.stateNode, a = n.alternate, n.memoizedState !== null ? o._visibility & 2 ? wn(e, n, t, l) : El(e, n) : o._visibility & 2 ? wn(e, n, t, l) : (o._visibility |= 2, Mt(e, n, t, l, (n.subtreeFlags & 10256) !== 0 || false)), r & 2048 && Vo(a, n);
            break;
          case 24:
            wn(e, n, t, l), r & 2048 && $o(n.alternate, n);
            break;
          default:
            wn(e, n, t, l);
        }
      }
      function Mt(e, n, t, l, r) {
        for (r = r && ((n.subtreeFlags & 10256) !== 0 || false), n = n.child; n !== null; ) {
          var o = e, a = n, f = t, b = l, z = a.flags;
          switch (a.tag) {
            case 0:
            case 11:
            case 15:
              Mt(o, a, f, b, r), yl(8, a);
              break;
            case 23:
              break;
            case 22:
              var M = a.stateNode;
              a.memoizedState !== null ? M._visibility & 2 ? Mt(o, a, f, b, r) : El(o, a) : (M._visibility |= 2, Mt(o, a, f, b, r)), r && z & 2048 && Vo(a.alternate, a);
              break;
            case 24:
              Mt(o, a, f, b, r), r && z & 2048 && $o(a.alternate, a);
              break;
            default:
              Mt(o, a, f, b, r);
          }
          n = n.sibling;
        }
      }
      function El(e, n) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) {
          var t = e, l = n, r = l.flags;
          switch (l.tag) {
            case 22:
              El(t, l), r & 2048 && Vo(l.alternate, l);
              break;
            case 24:
              El(t, l), r & 2048 && $o(l.alternate, l);
              break;
            default:
              El(t, l);
          }
          n = n.sibling;
        }
      }
      function vt(e, n, t) {
        if (e.subtreeFlags & el) for (e = e.child; e !== null; ) Za(e, n, t), e = e.sibling;
      }
      function Za(e, n, t) {
        switch (e.tag) {
          case 26:
            if (vt(e, n, t), e.flags & el) if (e.memoizedState !== null) cp(t, xn, e.memoizedState, e.memoizedProps);
            else {
              var l = e.stateNode, r = e.type;
              e = e.memoizedProps, ((n & 335544128) === n || fu(r, e)) && Fs(t, l, r, e);
            }
            break;
          case 5:
            vt(e, n, t), e.flags & el && (l = e.stateNode, r = e.type, e = e.memoizedProps, ((n & 335544128) === n || fu(r, e)) && Fs(t, l, r, e));
            break;
          case 3:
          case 4:
            zn ? (l = xn, xn = mu(e.stateNode.containerInfo), vt(e, n, t), xn = l) : vt(e, n, t);
            break;
          case 22:
            e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = el, el = 16777216, vt(e, n, t), el = l) : vt(e, n, t));
            break;
          default:
            vt(e, n, t);
        }
      }
      function Ka(e) {
        var n = e.alternate;
        if (n !== null && (e = n.child, e !== null)) {
          n.child = null;
          do
            n = e.sibling, e.sibling = null, e = n;
          while (e !== null);
        }
      }
      function kl(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (n !== null) for (var t = 0; t < n.length; t++) {
            var l = n[t];
            Be = l, es(l, e);
          }
          Ka(e);
        }
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Ja(e), e = e.sibling;
      }
      function Ja(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            kl(e), e.flags & 2048 && Gn(9, e, e.return);
            break;
          case 3:
            kl(e);
            break;
          case 12:
            kl(e);
            break;
          case 22:
            var n = e.stateNode;
            e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, vr(e)) : kl(e);
            break;
          default:
            kl(e);
        }
      }
      function vr(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
          if (n !== null) for (var t = 0; t < n.length; t++) {
            var l = n[t];
            Be = l, es(l, e);
          }
          Ka(e);
        }
        for (e = e.child; e !== null; ) {
          switch (n = e, n.tag) {
            case 0:
            case 11:
            case 15:
              Gn(8, n, n.return), vr(n);
              break;
            case 22:
              t = n.stateNode, t._visibility & 2 && (t._visibility &= -3, vr(n));
              break;
            default:
              vr(n);
          }
          e = e.sibling;
        }
      }
      function es(e, n) {
        for (; Be !== null; ) {
          var t = Be;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Gn(8, t, n);
              break;
            case 23:
            case 22:
              if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
                var l = t.memoizedState.cachePool.pool;
                l != null && l.refCount++;
              }
              break;
            case 24:
              cl(t.memoizedState.cache);
          }
          if (l = t.child, l !== null) l.return = t, Be = l;
          else e: for (t = e; Be !== null; ) {
            l = Be;
            var r = l.sibling, o = l.return;
            if ($a(l), l === t) {
              Be = null;
              break e;
            }
            if (r !== null) {
              r.return = o, Be = r;
              break e;
            }
            Be = o;
          }
        }
      }
      function Qo(e) {
        var n = Wf(e);
        if (n != null) {
          if (typeof n.memoizedProps["data-testname"] != "string") throw Error(c(364));
          return n;
        }
        if (e = ud(e), e === null) throw Error(c(362));
        return e.stateNode.current;
      }
      function Yo(e, n) {
        var t = e.tag;
        switch (n.$$typeof) {
          case Lr:
            if (e.type === n.value) return true;
            break;
          case Dr:
            e: {
              for (n = n.value, e = [e, 0], t = 0; t < e.length; ) {
                var l = e[t++], r = l.tag, o = e[t++], a = n[o];
                if (r !== 5 && r !== 26 && r !== 27 || !xl(l)) {
                  for (; a != null && Yo(l, a); ) o++, a = n[o];
                  if (o === n.length) {
                    n = true;
                    break e;
                  } else for (l = l.child; l !== null; ) e.push(l, o), l = l.sibling;
                }
              }
              n = false;
            }
            return n;
          case Ur:
            if ((t === 5 || t === 26 || t === 27) && sd(e.stateNode, n.value)) return true;
            break;
          case qr:
            if ((t === 5 || t === 6 || t === 26 || t === 27) && (e = ad(e), e !== null && 0 <= e.indexOf(n.value))) return true;
            break;
          case Ar:
            if ((t === 5 || t === 26 || t === 27) && (e = e.memoizedProps["data-testname"], typeof e == "string" && e.toLowerCase() === n.value.toLowerCase())) return true;
            break;
          default:
            throw Error(c(365));
        }
        return false;
      }
      function Wo(e) {
        switch (e.$$typeof) {
          case Lr:
            return "<" + (S(e.value) || "Unknown") + ">";
          case Dr:
            return ":has(" + (Wo(e) || "") + ")";
          case Ur:
            return '[role="' + e.value + '"]';
          case qr:
            return '"' + e.value + '"';
          case Ar:
            return '[data-testname="' + e.value + '"]';
          default:
            throw Error(c(365));
        }
      }
      function ns(e, n) {
        var t = [];
        e = [e, 0];
        for (var l = 0; l < e.length; ) {
          var r = e[l++], o = r.tag, a = e[l++], f = n[a];
          if (o !== 5 && o !== 26 && o !== 27 || !xl(r)) {
            for (; f != null && Yo(r, f); ) a++, f = n[a];
            if (a === n.length) t.push(r);
            else for (r = r.child; r !== null; ) e.push(r, a), r = r.sibling;
          }
        }
        return t;
      }
      function Xo(e, n) {
        if (!_l) throw Error(c(363));
        e = Qo(e), e = ns(e, n), n = [], e = Array.from(e);
        for (var t = 0; t < e.length; ) {
          var l = e[t++], r = l.tag;
          if (r === 5 || r === 26 || r === 27) xl(l) || n.push(l.stateNode);
          else for (l = l.child; l !== null; ) e.push(l), l = l.sibling;
        }
        return n;
      }
      function sn() {
        return (ae & 2) !== 0 && ce !== 0 ? ce & -ce : V.T !== null ? lo() : Gf();
      }
      function ts() {
        if (vn === 0) if ((ce & 536870912) === 0 || pe) {
          var e = zr;
          zr <<= 1, (zr & 3932160) === 0 && (zr = 262144), vn = e;
        } else vn = 536870912;
        return e = mn.current, e !== null && (e.flags |= 32), vn;
      }
      function ln(e, n, t) {
        (e === ke && (ye === 2 || ye === 9) || e.cancelPendingCommit !== null) && (Ft(e, 0), Zn(e, ce, vn, false)), A(e, t), ((ae & 2) === 0 || e !== ke) && (e === ke && ((ae & 2) === 0 && (xt |= t), Pe === 4 && Zn(e, ce, vn, false)), Cn(e));
      }
      function ls(e, n, t) {
        if ((ae & 6) !== 0) throw Error(c(327));
        var l = !t && (n & 127) === 0 && (n & e.expiredLanes) === 0 || C(e, n), r = l ? Cf(e, n) : Zo(e, n, true), o = l;
        do {
          if (r === 0) {
            nl && !l && Zn(e, n, 0, false);
            break;
          } else {
            if (t = e.current.alternate, o && !_f(t)) {
              r = Zo(e, n, false), o = false;
              continue;
            }
            if (r === 2) {
              if (o = n, e.errorRecoveryDisabledLanes & o) var a = 0;
              else a = e.pendingLanes & -536870913, a = a !== 0 ? a : a & 536870912 ? 536870912 : 0;
              if (a !== 0) {
                n = a;
                e: {
                  var f = e;
                  r = Fl;
                  var b = Ke && f.current.memoizedState.isDehydrated;
                  if (b && (Ft(f, a).flags |= 256), a = Zo(f, a, false), a !== 2) {
                    if (Ru && !b) {
                      f.errorRecoveryDisabledLanes |= o, xt |= o, r = 4;
                      break e;
                    }
                    o = un, un = r, o !== null && (un === null ? un = o : un.push.apply(un, o));
                  }
                  r = a;
                }
                if (o = false, r !== 2) continue;
              }
            }
            if (r === 1) {
              Ft(e, 0), Zn(e, n, 0, true);
              break;
            }
            e: {
              switch (l = e, o = r, o) {
                case 0:
                case 1:
                  throw Error(c(345));
                case 4:
                  if ((n & 4194048) !== n) break;
                case 6:
                  Zn(l, n, vn, !rt);
                  break e;
                case 2:
                  un = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(c(329));
              }
              if ((n & 62914560) === n && (r = Hr + 300 - rn(), 10 < r)) {
                if (Zn(l, n, vn, !rt), N(l, 0, true) !== 0) break e;
                Vn = n, l.timeoutHandle = Qf(rs.bind(null, l, t, un, Br, Mu, n, vn, xt, tl, rt, o, "Throttled", -0, 0), r);
                break e;
              }
              rs(l, t, un, Br, Mu, n, vn, xt, tl, rt, o, null, -0, 0);
            }
          }
          break;
        } while (true);
        Cn(e);
      }
      function rs(e, n, t, l, r, o, a, f, b, z, M, T, L, te) {
        if (e.timeoutHandle = bt, T = n.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
          T = nd(), Za(n, o, T);
          var Ue = (o & 62914560) === o ? Hr - rn() : (o & 4194048) === o ? sc - rn() : 0;
          if (Ue = td(T, Ue), Ue !== null) {
            Vn = o, e.cancelPendingCommit = Ue(ps.bind(null, e, n, o, t, l, r, a, f, b, M, T, null, L, te)), Zn(e, o, a, !z);
            return;
          }
        }
        ps(e, n, o, t, l, r, a, f, b);
      }
      function _f(e) {
        for (var n = e; ; ) {
          var t = n.tag;
          if ((t === 0 || t === 11 || t === 15) && n.flags & 16384 && (t = n.updateQueue, t !== null && (t = t.stores, t !== null))) for (var l = 0; l < t.length; l++) {
            var r = t[l], o = r.getSnapshot;
            r = r.value;
            try {
              if (!pn(o(), r)) return false;
            } catch {
              return false;
            }
          }
          if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
          else {
            if (n === e) break;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) return true;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
        }
        return true;
      }
      function Zn(e, n, t, l) {
        n &= ~ju, n &= ~xt, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
        for (var r = n; 0 < r; ) {
          var o = 31 - fn(r), a = 1 << o;
          l[o] = -1, r &= ~a;
        }
        t !== 0 && me(e, t, n);
      }
      function os() {
        return (ae & 6) === 0 ? (Rt(0), false) : true;
      }
      function Go() {
        if (se !== null) {
          if (ye === 0) var e = se.return;
          else e = se, An = St = null, go(e), Xt = null, Pl = 0, e = se;
          for (; e !== null; ) La(e.alternate, e), e = e.return;
          se = null;
        }
      }
      function Ft(e, n) {
        var t = e.timeoutHandle;
        t !== bt && (e.timeoutHandle = bt, Yf(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), Vn = 0, Go(), ke = e, se = t = Ln(e.current, null), ce = n, ye = 0, hn = null, rt = false, nl = C(e, n), Ru = false, tl = vn = ju = xt = ot = Pe = 0, un = Fl = null, Mu = false, (n & 8) !== 0 && (n |= n & 32);
        var l = e.entangledLanes;
        if (l !== 0) for (e = e.entanglements, l &= n; 0 < l; ) {
          var r = 31 - fn(l), o = 1 << r;
          n |= e[r], l &= ~o;
        }
        return Bn = n, Kl(), t;
      }
      function us(e, n) {
        le = null, V.H = jl, n === Wt || n === Rr ? (n = xi(), ye = 3) : n === zu ? (n = xi(), ye = 4) : ye = n === Tu ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, hn = n, se === null && (Pe = 1, ar(e, K(n, e.current)));
      }
      function is() {
        var e = mn.current;
        return e === null ? true : (ce & 4194048) === ce ? _n === null : (ce & 62914560) === ce || (ce & 536870912) !== 0 ? e === _n : false;
      }
      function as() {
        var e = V.H;
        return V.H = jl, e === null ? jl : e;
      }
      function ss() {
        var e = V.A;
        return V.A = _p, e;
      }
      function gr() {
        Pe = 4, rt || (ce & 4194048) !== ce && mn.current !== null || (nl = true), (ot & 134217727) === 0 && (xt & 134217727) === 0 || ke === null || Zn(ke, ce, vn, false);
      }
      function Zo(e, n, t) {
        var l = ae;
        ae |= 2;
        var r = as(), o = ss();
        (ke !== e || ce !== n) && (Br = null, Ft(e, n)), n = false;
        var a = Pe;
        e: do
          try {
            if (ye !== 0 && se !== null) {
              var f = se, b = hn;
              switch (ye) {
                case 8:
                  Go(), a = 6;
                  break e;
                case 3:
                case 2:
                case 9:
                case 6:
                  mn.current === null && (n = true);
                  var z = ye;
                  if (ye = 0, hn = null, Ot(e, f, b, z), t && nl) {
                    a = 0;
                    break e;
                  }
                  break;
                default:
                  z = ye, ye = 0, hn = null, Ot(e, f, b, z);
              }
            }
            xf(), a = Pe;
            break;
          } catch (M) {
            us(e, M);
          }
        while (true);
        return n && e.shellSuspendCounter++, An = St = null, ae = l, V.H = r, V.A = o, se === null && (ke = null, ce = 0, Kl()), a;
      }
      function xf() {
        for (; se !== null; ) cs(se);
      }
      function Cf(e, n) {
        var t = ae;
        ae |= 2;
        var l = as(), r = ss();
        ke !== e || ce !== n ? (Br = null, Ol = rn() + 500, Ft(e, n)) : nl = C(e, n);
        e: do
          try {
            if (ye !== 0 && se !== null) {
              n = se;
              var o = hn;
              n: switch (ye) {
                case 1:
                  ye = 0, hn = null, Ot(e, n, o, 1);
                  break;
                case 2:
                case 9:
                  if (zi(o)) {
                    ye = 0, hn = null, fs(n);
                    break;
                  }
                  n = function() {
                    ye !== 2 && ye !== 9 || ke !== e || (ye = 7), Cn(e);
                  }, o.then(n, n);
                  break e;
                case 3:
                  ye = 7;
                  break e;
                case 4:
                  ye = 5;
                  break e;
                case 7:
                  zi(o) ? (ye = 0, hn = null, fs(n)) : (ye = 0, hn = null, Ot(e, n, o, 7));
                  break;
                case 5:
                  var a = null;
                  switch (se.tag) {
                    case 26:
                      a = se.memoizedState;
                    case 5:
                    case 27:
                      var f = se, b = f.type, z = f.pendingProps;
                      if (a ? Gs(a) : Ms(f.stateNode, b, z)) {
                        ye = 0, hn = null;
                        var M = f.sibling;
                        if (M !== null) se = M;
                        else {
                          var T = f.return;
                          T !== null ? (se = T, br(T)) : se = null;
                        }
                        break n;
                      }
                  }
                  ye = 0, hn = null, Ot(e, n, o, 5);
                  break;
                case 6:
                  ye = 0, hn = null, Ot(e, n, o, 6);
                  break;
                case 8:
                  Go(), Pe = 6;
                  break e;
                default:
                  throw Error(c(462));
              }
            }
            Nf();
            break;
          } catch (L) {
            us(e, L);
          }
        while (true);
        return An = St = null, V.H = l, V.A = r, ae = t, se !== null ? 0 : (ke = null, ce = 0, Kl(), Pe);
      }
      function Nf() {
        for (; se !== null && !mp(); ) cs(se);
      }
      function cs(e) {
        var n = Ra(e.alternate, e, Bn);
        e.memoizedProps = e.pendingProps, n === null ? br(e) : se = n;
      }
      function fs(e) {
        var n = e, t = n.alternate;
        switch (n.tag) {
          case 15:
          case 0:
            n = xa(t, n, n.pendingProps, n.type, void 0, ce);
            break;
          case 11:
            n = xa(t, n, n.pendingProps, n.type.render, n.ref, ce);
            break;
          case 5:
            go(n);
          default:
            La(t, n), n = se = Es(n, Bn), n = Ra(t, n, Bn);
        }
        e.memoizedProps = e.pendingProps, n === null ? br(e) : se = n;
      }
      function Ot(e, n, t, l) {
        An = St = null, go(n), Xt = null, Pl = 0;
        var r = n.return;
        try {
          if (bf(e, r, n, t, ce)) {
            Pe = 1, ar(e, K(t, e.current)), se = null;
            return;
          }
        } catch (o) {
          if (r !== null) throw se = r, o;
          Pe = 1, ar(e, K(t, e.current)), se = null;
          return;
        }
        n.flags & 32768 ? (pe || l === 1 ? e = true : nl || (ce & 536870912) !== 0 ? e = false : (rt = e = true, (l === 2 || l === 9 || l === 3 || l === 6) && (l = mn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ds(n, e)) : br(n);
      }
      function br(e) {
        var n = e;
        do {
          if ((n.flags & 32768) !== 0) {
            ds(n, rt);
            return;
          }
          e = n.return;
          var t = Ef(n.alternate, n, Bn);
          if (t !== null) {
            se = t;
            return;
          }
          if (n = n.sibling, n !== null) {
            se = n;
            return;
          }
          se = n = e;
        } while (n !== null);
        Pe === 0 && (Pe = 5);
      }
      function ds(e, n) {
        do {
          var t = kf(e.alternate, e);
          if (t !== null) {
            t.flags &= 32767, se = t;
            return;
          }
          if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !n && (e = e.sibling, e !== null)) {
            se = e;
            return;
          }
          se = e = t;
        } while (e !== null);
        Pe = 6, se = null;
      }
      function ps(e, n, t, l, r, o, a, f, b) {
        e.cancelPendingCommit = null;
        do
          wl();
        while (qe !== 0);
        if ((ae & 6) !== 0) throw Error(c(327));
        if (n !== null) {
          if (n === e.current) throw Error(c(177));
          if (o = n.lanes | n.childLanes, o |= _u, U(e, t, o, a, f, b), e === ke && (se = ke = null, ce = 0), ll = n, it = e, Vn = t, Fu = o, Ou = r, cc = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Rf(gu, function() {
            return bs(), null;
          })) : (e.callbackNode = null, e.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
            l = V.T, V.T = null, r = Un(), He(2), a = ae, ae |= 4;
            try {
              wf(e, n, t);
            } finally {
              ae = a, He(r), V.T = l;
            }
          }
          qe = 1, ms(), hs(), vs();
        }
      }
      function ms() {
        if (qe === 1) {
          qe = 0;
          var e = it, n = ll, t = (n.flags & 13878) !== 0;
          if ((n.subtreeFlags & 13878) !== 0 || t) {
            t = V.T, V.T = null;
            var l = Un();
            He(2);
            var r = ae;
            ae |= 4;
            try {
              Wa(n, e), Vf(e.containerInfo);
            } finally {
              ae = r, He(l), V.T = t;
            }
          }
          e.current = n, qe = 2;
        }
      }
      function hs() {
        if (qe === 2) {
          qe = 0;
          var e = it, n = ll, t = (n.flags & 8772) !== 0;
          if ((n.subtreeFlags & 8772) !== 0 || t) {
            t = V.T, V.T = null;
            var l = Un();
            He(2);
            var r = ae;
            ae |= 4;
            try {
              Va(e, n.alternate, n);
            } finally {
              ae = r, He(l), V.T = t;
            }
          }
          qe = 3;
        }
      }
      function vs() {
        if (qe === 4 || qe === 3) {
          qe = 0, hp();
          var e = it, n = ll, t = Vn, l = cc;
          (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? qe = 5 : (qe = 0, ll = it = null, gs(e, e.pendingLanes));
          var r = e.pendingLanes;
          if (r === 0 && (ut = null), Me(t), n = n.stateNode, dn && typeof dn.onCommitFiberRoot == "function") try {
            dn.onCommitFiberRoot(Cl, n, void 0, (n.current.flags & 128) === 128);
          } catch {
          }
          if (l !== null) {
            n = V.T, r = Un(), He(2), V.T = null;
            try {
              for (var o = e.onRecoverableError, a = 0; a < l.length; a++) {
                var f = l[a];
                o(f.value, { componentStack: f.stack });
              }
            } finally {
              V.T = n, He(r);
            }
          }
          (Vn & 3) !== 0 && wl(), Cn(e), r = e.pendingLanes, (t & 261930) !== 0 && (r & 42) !== 0 ? e === Lu ? Ll++ : (Ll = 0, Lu = e) : Ll = 0, Ke && Jd(), Rt(0);
        }
      }
      function gs(e, n) {
        (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, cl(n)));
      }
      function wl() {
        return ms(), hs(), vs(), bs();
      }
      function bs() {
        if (qe !== 5) return false;
        var e = it, n = Fu;
        Fu = 0;
        var t = Me(Vn), l = 32 > t ? 32 : t;
        t = V.T;
        var r = Un();
        try {
          He(l), V.T = null, l = Ou, Ou = null;
          var o = it, a = Vn;
          if (qe = 0, ll = it = null, Vn = 0, (ae & 6) !== 0) throw Error(c(331));
          var f = ae;
          if (ae |= 4, Ja(o.current), Ga(o, o.current, a, l), ae = f, Rt(0, false), dn && typeof dn.onPostCommitFiberRoot == "function") try {
            dn.onPostCommitFiberRoot(Cl, o);
          } catch {
          }
          return true;
        } finally {
          He(r), V.T = t, gs(e, n);
        }
      }
      function ys(e, n, t) {
        n = K(t, n), n = To(e.stateNode, n, 2), e = Yn(e, n, 2), e !== null && (A(e, 2), Cn(e));
      }
      function he(e, n, t) {
        if (e.tag === 3) ys(e, e, t);
        else for (; n !== null; ) {
          if (n.tag === 3) {
            ys(n, e, t);
            break;
          } else if (n.tag === 1) {
            var l = n.stateNode;
            if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ut === null || !ut.has(l))) {
              e = K(t, e), t = ba(2), l = Yn(n, t, 2), l !== null && (ya(t, l, n, e), A(l, 2), Cn(l));
              break;
            }
          }
          n = n.return;
        }
      }
      function Ko(e, n, t) {
        var l = e.pingCache;
        if (l === null) {
          l = e.pingCache = new xp();
          var r = /* @__PURE__ */ new Set();
          l.set(n, r);
        } else r = l.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), l.set(n, r));
        r.has(t) || (Ru = true, r.add(t), e = Tf.bind(null, e, n, t), n.then(e, e));
      }
      function Tf(e, n, t) {
        var l = e.pingCache;
        l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, ke === e && (ce & t) === t && (Pe === 4 || Pe === 3 && (ce & 62914560) === ce && 300 > rn() - Hr ? (ae & 2) === 0 && Ft(e, 0) : ju |= t, tl === ce && (tl = 0)), Cn(e);
      }
      function Ss(e, n) {
        n === 0 && (n = X()), e = pt(e, n), e !== null && (A(e, n), Cn(e));
      }
      function If(e) {
        var n = e.memoizedState, t = 0;
        n !== null && (t = n.retryLane), Ss(e, t);
      }
      function Pf(e, n) {
        var t = 0;
        switch (e.tag) {
          case 31:
          case 13:
            var l = e.stateNode, r = e.memoizedState;
            r !== null && (t = r.retryLane);
            break;
          case 19:
            l = e.stateNode;
            break;
          case 22:
            l = e.stateNode._retryCache;
            break;
          default:
            throw Error(c(314));
        }
        l !== null && l.delete(n), Ss(e, t);
      }
      function Rf(e, n) {
        return xr(e, n);
      }
      function jf(e, n, t, l) {
        this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Jo(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function Ln(e, n) {
        var t = e.alternate;
        return t === null ? (t = s(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
      }
      function Es(e, n) {
        e.flags &= 65011714;
        var t = e.alternate;
        return t === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, n = t.dependencies, e.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), e;
      }
      function yr(e, n, t, l, r, o) {
        var a = 0;
        if (l = e, typeof e == "function") Jo(e) && (a = 1);
        else if (typeof e == "string") a = zn && Ae ? Vs(e, t, Ye.current) ? 26 : Js(e) ? 27 : 5 : zn ? Vs(e, t, Ye.current) ? 26 : 5 : Ae && Js(e) ? 27 : 5;
        else e: switch (e) {
          case su:
            return e = s(31, t, n, r), e.elementType = su, e.lanes = o, e;
          case Dt:
            return gt(t.children, r, o, n);
          case Ns:
            a = 8, r |= 24;
            break;
          case ru:
            return e = s(12, t, n, r | 2), e.elementType = ru, e.lanes = o, e;
          case uu:
            return e = s(13, t, n, r), e.elementType = uu, e.lanes = o, e;
          case iu:
            return e = s(19, t, n, r), e.elementType = iu, e.lanes = o, e;
          default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
              case Kn:
                a = 10;
                break e;
              case Ts:
                a = 9;
                break e;
              case ou:
                a = 11;
                break e;
              case au:
                a = 14;
                break e;
              case Jn:
                a = 16, l = null;
                break e;
            }
            a = 29, t = Error(c(130, e === null ? "null" : typeof e, "")), l = null;
        }
        return n = s(a, t, n, r), n.elementType = e, n.type = l, n.lanes = o, n;
      }
      function gt(e, n, t, l) {
        return e = s(7, e, l, n), e.lanes = t, e;
      }
      function eu(e, n, t) {
        return e = s(6, e, null, n), e.lanes = t, e;
      }
      function ks(e) {
        var n = s(18, null, null, 0);
        return n.stateNode = e, n;
      }
      function nu(e, n, t) {
        return n = s(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
      }
      function Mf(e, n, t, l, r, o, a, f, b) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = bt, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ee(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ee(0), this.hiddenUpdates = ee(null), this.identifierPrefix = l, this.onUncaughtError = r, this.onCaughtError = o, this.onRecoverableError = a, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function ws(e, n, t, l, r, o, a, f, b, z, M, T) {
        return e = new Mf(e, n, t, a, b, z, M, T, f), n = 1, o === true && (n |= 24), o = s(3, null, null, n), e.current = o, o.stateNode = e, n = to(), n.refCount++, e.pooledCache = n, n.refCount++, o.memoizedState = { element: l, isDehydrated: t, cache: n }, uo(o), e;
      }
      function zs(e) {
        return e ? (e = Ht, e) : Ht;
      }
      function _s(e) {
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
        return e = k(n), e = e !== null ? y(e) : null, e === null ? null : zl(e.stateNode);
      }
      function xs(e, n, t, l, r, o) {
        r = zs(r), l.context === null ? l.context = r : l.pendingContext = r, l = Qn(n), l.payload = { element: t }, o = o === void 0 ? null : o, o !== null && (l.callback = o), t = Yn(e, l, n), t !== null && (ln(t, e, n), dl(t, e, n));
      }
      function Cs(e, n) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var t = e.retryLane;
          e.retryLane = t !== 0 && t < n ? t : n;
        }
      }
      function tu(e, n) {
        Cs(e, n), (e = e.alternate) && Cs(e, n);
      }
      var ie = {}, Ff = ai, cn = cm, lu = Object.assign, Of = Symbol.for("react.element"), Sr = Symbol.for("react.transitional.element"), Lt = Symbol.for("react.portal"), Dt = Symbol.for("react.fragment"), Ns = Symbol.for("react.strict_mode"), ru = Symbol.for("react.profiler"), Ts = Symbol.for("react.consumer"), Kn = Symbol.for("react.context"), ou = Symbol.for("react.forward_ref"), uu = Symbol.for("react.suspense"), iu = Symbol.for("react.suspense_list"), au = Symbol.for("react.memo"), Jn = Symbol.for("react.lazy"), su = Symbol.for("react.activity"), Lf = Symbol.for("react.memo_cache_sentinel"), Is = Symbol.iterator, Df = Symbol.for("react.client.reference"), Er = Array.isArray, V = Ff.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Uf = u.rendererVersion, Af = u.rendererPackageName, Ps = u.extraDevToolsConfig, zl = u.getPublicInstance, qf = u.getRootHostContext, Hf = u.getChildHostContext, Bf = u.prepareForCommit, Vf = u.resetAfterCommit, $f = u.createInstance;
      u.cloneMutableInstance;
      var cu = u.appendInitialChild, Rs = u.finalizeInitialChildren, kr = u.shouldSetTextContent, js = u.createTextInstance;
      u.cloneMutableTextInstance;
      var Qf = u.scheduleTimeout, Yf = u.cancelTimeout, bt = u.noTimeout, Dn = u.isPrimaryRenderer;
      u.warnsIfNotActing;
      var Ze = u.supportsMutation, Tn = u.supportsPersistence, Ke = u.supportsHydration, Wf = u.getInstanceFromNode;
      u.beforeActiveInstanceBlur;
      var Xf = u.preparePortalMount;
      u.prepareScopeUpdate, u.getInstanceFromScope;
      var He = u.setCurrentUpdatePriority, Un = u.getCurrentUpdatePriority, Gf = u.resolveUpdatePriority;
      u.trackSchedulerEvent, u.resolveEventType, u.resolveEventTimeStamp;
      var Zf = u.shouldAttemptEagerTransition, Kf = u.detachDeletedInstance;
      u.requestPostPaintCallback;
      var Jf = u.maySuspendCommit, ed = u.maySuspendCommitOnUpdate, fu = u.maySuspendCommitInSyncRender, Ms = u.preloadInstance, nd = u.startSuspendingCommit, Fs = u.suspendInstance;
      u.suspendOnActiveViewTransition;
      var td = u.waitForCommitToBeReady;
      u.getSuspendedCommitReason;
      var Ut = u.NotPendingTransition, yt = u.HostTransitionContext, ld = u.resetFormInstance;
      u.bindToConsole;
      var rd = u.supportsMicrotasks, od = u.scheduleMicrotask, _l = u.supportsTestSelectors, ud = u.findFiberRoot, id = u.getBoundingRect, ad = u.getTextContent, xl = u.isHiddenSubtree, sd = u.matchAccessibilityRole, cd = u.setFocusIfFocusable, fd = u.setupIntersectionObserver, dd = u.appendChild, pd = u.appendChildToContainer, md = u.commitTextUpdate, hd = u.commitMount, vd = u.commitUpdate, gd = u.insertBefore, bd = u.insertInContainerBefore, yd = u.removeChild, Sd = u.removeChildFromContainer, Os = u.resetTextContent, Ed = u.hideInstance, kd = u.hideTextInstance, wd = u.unhideInstance, zd = u.unhideTextInstance;
      u.cancelViewTransitionName, u.cancelRootViewTransitionName, u.restoreRootViewTransitionName, u.cloneRootViewTransitionContainer, u.removeRootViewTransitionClone, u.measureClonedInstance, u.hasInstanceChanged, u.hasInstanceAffectedParent, u.startViewTransition, u.startGestureTransition, u.stopViewTransition, u.getCurrentGestureOffset, u.createViewTransitionInstance;
      var _d = u.clearContainer;
      u.createFragmentInstance, u.updateFragmentInstanceFiber, u.commitNewChildToFragmentInstance, u.deleteChildFromFragmentInstance;
      var xd = u.cloneInstance, Ls = u.createContainerChildSet, Ds = u.appendChildToContainerChildSet, Cd = u.finalizeContainerChildren, Us = u.replaceContainerChildren, As = u.cloneHiddenInstance, qs = u.cloneHiddenTextInstance, du = u.isSuspenseInstancePending, pu = u.isSuspenseInstanceFallback, Nd = u.getSuspenseInstanceFallbackErrorDetails, Td = u.registerSuspenseInstanceRetry, Id = u.canHydrateFormStateMarker, Pd = u.isFormStateMarkerMatching, Hs = u.getNextHydratableSibling, Rd = u.getNextHydratableSiblingAfterSingleton, jd = u.getFirstHydratableChild, Md = u.getFirstHydratableChildWithinContainer, Fd = u.getFirstHydratableChildWithinActivityInstance, Od = u.getFirstHydratableChildWithinSuspenseInstance, Ld = u.getFirstHydratableChildWithinSingleton, Dd = u.canHydrateInstance, Ud = u.canHydrateTextInstance, Ad = u.canHydrateActivityInstance, qd = u.canHydrateSuspenseInstance, Hd = u.hydrateInstance, Bd = u.hydrateTextInstance, Vd = u.hydrateActivityInstance, $d = u.hydrateSuspenseInstance, Qd = u.getNextHydratableInstanceAfterActivityInstance, Yd = u.getNextHydratableInstanceAfterSuspenseInstance, Wd = u.commitHydratedInstance, Xd = u.commitHydratedContainer, Gd = u.commitHydratedActivityInstance, Zd = u.commitHydratedSuspenseInstance, Kd = u.finalizeHydratedChildren, Jd = u.flushHydrationEvents;
      u.clearActivityBoundary;
      var ep = u.clearSuspenseBoundary;
      u.clearActivityBoundaryFromContainer;
      var np = u.clearSuspenseBoundaryFromContainer, tp = u.hideDehydratedBoundary, lp = u.unhideDehydratedBoundary, Bs = u.shouldDeleteUnhydratedTailInstances;
      u.diffHydratedPropsForDevWarnings, u.diffHydratedTextForDevWarnings, u.describeHydratableInstanceForDevWarnings;
      var rp = u.validateHydratableInstance, op = u.validateHydratableTextInstance, zn = u.supportsResources, Vs = u.isHostHoistableType, mu = u.getHoistableRoot, $s = u.getResource, Qs = u.acquireResource, Ys = u.releaseResource, up = u.hydrateHoistable, Ws = u.mountHoistable, Xs = u.unmountHoistable, ip = u.createHoistableInstance, ap = u.prepareToCommitHoistables, sp = u.mayResourceSuspendCommit, Gs = u.preloadResource, cp = u.suspendResource, Ae = u.supportsSingletons, Zs = u.resolveSingletonInstance, fp = u.acquireSingletonInstance, Ks = u.releaseSingletonInstance, Js = u.isHostSingletonType, At = u.isSingletonScope, hu = [], qt = -1, Ht = {}, fn = Math.clz32 ? Math.clz32 : q, dp = Math.log, pp = Math.LN2, wr = 256, zr = 262144, _r = 4194304, xr = cn.unstable_scheduleCallback, vu = cn.unstable_cancelCallback, mp = cn.unstable_shouldYield, hp = cn.unstable_requestPaint, rn = cn.unstable_now, ec = cn.unstable_ImmediatePriority, vp = cn.unstable_UserBlockingPriority, gu = cn.unstable_NormalPriority, gp = cn.unstable_IdlePriority, bp = cn.log, yp = cn.unstable_setDisableYieldValue, Cl = null, dn = null, pn = typeof Object.is == "function" ? Object.is : Se, nc = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var n = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
          if (!window.dispatchEvent(n)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, Sp = Object.prototype.hasOwnProperty, bu, tc, yu = false, lc = /* @__PURE__ */ new WeakMap(), Bt = [], Vt = 0, Cr = null, Nl = 0, gn = [], bn = 0, et = null, In = 1, Pn = "", Ye = w(null), Tl = w(null), nt = w(null), Nr = w(null), We = null, Ce = null, pe = false, tt = null, yn = false, Su = Error(c(519)), Tr = w(null), St = null, An = null, Ep = typeof AbortController < "u" ? AbortController : function() {
        var e = [], n = this.signal = { aborted: false, addEventListener: function(t, l) {
          e.push(l);
        } };
        this.abort = function() {
          n.aborted = true, e.forEach(function(t) {
            return t();
          });
        };
      }, kp = cn.unstable_scheduleCallback, wp = cn.unstable_NormalPriority, Ne = { $$typeof: Kn, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 }, Ir = null, $t = null, Eu = false, Pr = false, ku = false, Et = 0, Il = null, wu = 0, Qt = 0, Yt = null, rc = V.S;
      V.S = function(e, n) {
        sc = rn(), typeof n == "object" && n !== null && typeof n.then == "function" && cf(e, n), rc !== null && rc(e, n);
      };
      var kt = w(null), Wt = Error(c(460)), zu = Error(c(474)), Rr = Error(c(542)), jr = { then: function() {
      } }, wt = null, Xt = null, Pl = 0, zt = Ni(true), oc = Ni(false), Sn = [], Gt = 0, _u = 0, lt = false, xu = false, Zt = w(null), Mr = w(0), mn = w(null), _n = null, je = w(0), qn = 0, le = null, Ee = null, Fe = null, Fr = false, Kt = false, _t = false, Or = 0, Rl = 0, Jt = null, zp = 0, jl = { readContext: $e, use: lr, useCallback: Ie, useContext: Ie, useEffect: Ie, useImperativeHandle: Ie, useLayoutEffect: Ie, useInsertionEffect: Ie, useMemo: Ie, useReducer: Ie, useRef: Ie, useState: Ie, useDebugValue: Ie, useDeferredValue: Ie, useTransition: Ie, useSyncExternalStore: Ie, useId: Ie, useHostTransitionStatus: Ie, useFormState: Ie, useActionState: Ie, useOptimistic: Ie, useMemoCache: Ie, useCacheRefresh: Ie };
      jl.useEffectEvent = Ie;
      var uc = { readContext: $e, use: lr, useCallback: function(e, n) {
        return en().memoizedState = [e, n === void 0 ? null : n], e;
      }, useContext: $e, useEffect: Ji, useImperativeHandle: function(e, n, t) {
        t = t != null ? t.concat([e]) : null, or(4194308, 4, la.bind(null, n, e), t);
      }, useLayoutEffect: function(e, n) {
        return or(4194308, 4, e, n);
      }, useInsertionEffect: function(e, n) {
        or(4, 2, e, n);
      }, useMemo: function(e, n) {
        var t = en();
        n = n === void 0 ? null : n;
        var l = e();
        if (_t) {
          Y(true);
          try {
            e();
          } finally {
            Y(false);
          }
        }
        return t.memoizedState = [l, n], l;
      }, useReducer: function(e, n, t) {
        var l = en();
        if (t !== void 0) {
          var r = t(n);
          if (_t) {
            Y(true);
            try {
              t(n);
            } finally {
              Y(false);
            }
          }
        } else r = n;
        return l.memoizedState = l.baseState = r, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: r }, l.queue = e, e = e.dispatch = gf.bind(null, le, e), [l.memoizedState, e];
      }, useRef: function(e) {
        var n = en();
        return e = { current: e }, n.memoizedState = e;
      }, useState: function(e) {
        e = Eo(e);
        var n = e.queue, t = da.bind(null, le, n);
        return n.dispatch = t, [e.memoizedState, t];
      }, useDebugValue: zo, useDeferredValue: function(e, n) {
        var t = en();
        return _o(t, e, n);
      }, useTransition: function() {
        var e = Eo(false);
        return e = aa.bind(null, le, e.queue, true, false), en().memoizedState = e, [false, e];
      }, useSyncExternalStore: function(e, n, t) {
        var l = le, r = en();
        if (pe) {
          if (t === void 0) throw Error(c(407));
          t = t();
        } else {
          if (t = n(), ke === null) throw Error(c(349));
          (ce & 127) !== 0 || Li(l, n, t);
        }
        r.memoizedState = t;
        var o = { value: t, getSnapshot: n };
        return r.queue = o, Ji(Ui.bind(null, l, o, e), [e]), l.flags |= 2048, jt(9, { destroy: void 0 }, Di.bind(null, l, o, t, n), null), t;
      }, useId: function() {
        var e = en(), n = ke.identifierPrefix;
        if (pe) {
          var t = Pn, l = In;
          t = (l & ~(1 << 32 - fn(l) - 1)).toString(32) + t, n = "_" + n + "R_" + t, t = Or++, 0 < t && (n += "H" + t.toString(32)), n += "_";
        } else t = zp++, n = "_" + n + "r_" + t.toString(32) + "_";
        return e.memoizedState = n;
      }, useHostTransitionStatus: xo, useFormState: Wi, useActionState: Wi, useOptimistic: function(e) {
        var n = en();
        n.memoizedState = n.baseState = e;
        var t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return n.queue = t, n = Co.bind(null, le, true, t), t.dispatch = n, [e, n];
      }, useMemoCache: bo, useCacheRefresh: function() {
        return en().memoizedState = vf.bind(null, le);
      }, useEffectEvent: function(e) {
        var n = en(), t = { impl: e };
        return n.memoizedState = t, function() {
          if ((ae & 2) !== 0) throw Error(c(440));
          return t.impl.apply(void 0, arguments);
        };
      } }, Cu = { readContext: $e, use: lr, useCallback: oa, useContext: $e, useEffect: wo, useImperativeHandle: ra, useInsertionEffect: na, useLayoutEffect: ta, useMemo: ua, useReducer: rr, useRef: Ki, useState: function() {
        return rr(jn);
      }, useDebugValue: zo, useDeferredValue: function(e, n) {
        var t = Re();
        return ia(t, Ee.memoizedState, e, n);
      }, useTransition: function() {
        var e = rr(jn)[0], n = Re().memoizedState;
        return [typeof e == "boolean" ? e : hl(e), n];
      }, useSyncExternalStore: Oi, useId: ca, useHostTransitionStatus: xo, useFormState: Xi, useActionState: Xi, useOptimistic: function(e, n) {
        var t = Re();
        return Hi(t, Ee, e, n);
      }, useMemoCache: bo, useCacheRefresh: fa };
      Cu.useEffectEvent = ea;
      var ic = { readContext: $e, use: lr, useCallback: oa, useContext: $e, useEffect: wo, useImperativeHandle: ra, useInsertionEffect: na, useLayoutEffect: ta, useMemo: ua, useReducer: So, useRef: Ki, useState: function() {
        return So(jn);
      }, useDebugValue: zo, useDeferredValue: function(e, n) {
        var t = Re();
        return Ee === null ? _o(t, e, n) : ia(t, Ee.memoizedState, e, n);
      }, useTransition: function() {
        var e = So(jn)[0], n = Re().memoizedState;
        return [typeof e == "boolean" ? e : hl(e), n];
      }, useSyncExternalStore: Oi, useId: ca, useHostTransitionStatus: xo, useFormState: Zi, useActionState: Zi, useOptimistic: function(e, n) {
        var t = Re();
        return Ee !== null ? Hi(t, Ee, e, n) : (t.baseState = e, [e, t.queue.dispatch]);
      }, useMemoCache: bo, useCacheRefresh: fa };
      ic.useEffectEvent = ea;
      var Nu = { enqueueSetState: function(e, n, t) {
        e = e._reactInternals;
        var l = sn(), r = Qn(l);
        r.payload = n, t != null && (r.callback = t), n = Yn(e, r, l), n !== null && (ln(n, e, l), dl(n, e, l));
      }, enqueueReplaceState: function(e, n, t) {
        e = e._reactInternals;
        var l = sn(), r = Qn(l);
        r.tag = 1, r.payload = n, t != null && (r.callback = t), n = Yn(e, r, l), n !== null && (ln(n, e, l), dl(n, e, l));
      }, enqueueForceUpdate: function(e, n) {
        e = e._reactInternals;
        var t = sn(), l = Qn(t);
        l.tag = 2, n != null && (l.callback = n), n = Yn(e, l, t), n !== null && (ln(n, e, t), dl(n, e, t));
      } }, Tu = Error(c(461)), Oe = false, Iu = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }, Hn = false, Le = false, Pu = false, ac = typeof WeakSet == "function" ? WeakSet : Set, Be = null, De = null, on = false, xn = null, el = 8192, _p = { getCacheForType: function(e) {
        var n = $e(Ne), t = n.data.get(e);
        return t === void 0 && (t = e(), n.data.set(e, t)), t;
      }, cacheSignal: function() {
        return $e(Ne).controller.signal;
      } }, Lr = 0, Dr = 1, Ur = 2, Ar = 3, qr = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Ml = Symbol.for;
        Lr = Ml("selector.component"), Dr = Ml("selector.has_pseudo_class"), Ur = Ml("selector.role"), Ar = Ml("selector.test_id"), qr = Ml("selector.text");
      }
      var xp = typeof WeakMap == "function" ? WeakMap : Map, ae = 0, ke = null, se = null, ce = 0, ye = 0, hn = null, rt = false, nl = false, Ru = false, Bn = 0, Pe = 0, ot = 0, xt = 0, ju = 0, vn = 0, tl = 0, Fl = null, un = null, Mu = false, Hr = 0, sc = 0, Ol = 1 / 0, Br = null, ut = null, qe = 0, it = null, ll = null, Vn = 0, Fu = 0, Ou = null, cc = null, Ll = 0, Lu = null;
      return ie.attemptContinuousHydration = function(e) {
        if (e.tag === 13 || e.tag === 31) {
          var n = pt(e, 67108864);
          n !== null && ln(n, e, 67108864), tu(e, 67108864);
        }
      }, ie.attemptHydrationAtCurrentPriority = function(e) {
        if (e.tag === 13 || e.tag === 31) {
          var n = sn();
          n = fe(n);
          var t = pt(e, n);
          t !== null && ln(t, e, n), tu(e, n);
        }
      }, ie.attemptSynchronousHydration = function(e) {
        switch (e.tag) {
          case 3:
            if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
              var n = Z(e.pendingLanes);
              if (n !== 0) {
                for (e.pendingLanes |= 2, e.entangledLanes |= 2; n; ) {
                  var t = 1 << 31 - fn(n);
                  e.entanglements[1] |= t, n &= ~t;
                }
                Cn(e), (ae & 6) === 0 && (Ol = rn() + 500, Rt(0));
              }
            }
            break;
          case 31:
          case 13:
            n = pt(e, 2), n !== null && ln(n, e, 2), os(), tu(e, 2);
        }
      }, ie.batchedUpdates = function(e, n) {
        return e(n);
      }, ie.createComponentSelector = function(e) {
        return { $$typeof: Lr, value: e };
      }, ie.createContainer = function(e, n, t, l, r, o, a, f, b, z) {
        return ws(e, n, false, null, t, l, o, null, a, f, b, z);
      }, ie.createHasPseudoClassSelector = function(e) {
        return { $$typeof: Dr, value: e };
      }, ie.createHydrationContainer = function(e, n, t, l, r, o, a, f, b, z, M, T, L, te) {
        var Ue;
        return e = ws(t, l, true, e, r, o, f, te, b, z, M, T), e.context = zs(null), t = e.current, l = sn(), l = fe(l), r = Qn(l), r.callback = (Ue = n) != null ? Ue : null, Yn(t, r, l), n = l, e.current.lanes = n, A(e, n), Cn(e), e;
      }, ie.createPortal = function(e, n, t) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: Lt, key: l == null ? null : "" + l, children: e, containerInfo: n, implementation: t };
      }, ie.createRoleSelector = function(e) {
        return { $$typeof: Ur, value: e };
      }, ie.createTestNameSelector = function(e) {
        return { $$typeof: Ar, value: e };
      }, ie.createTextSelector = function(e) {
        return { $$typeof: qr, value: e };
      }, ie.defaultOnCaughtError = function(e) {
        console.error(e);
      }, ie.defaultOnRecoverableError = function(e) {
        nc(e);
      }, ie.defaultOnUncaughtError = function(e) {
        nc(e);
      }, ie.deferredUpdates = function(e) {
        var n = V.T, t = Un();
        try {
          return He(32), V.T = null, e();
        } finally {
          He(t), V.T = n;
        }
      }, ie.discreteUpdates = function(e, n, t, l, r) {
        var o = V.T, a = Un();
        try {
          return He(2), V.T = null, e(n, t, l, r);
        } finally {
          He(a), V.T = o, ae === 0 && (Ol = rn() + 500);
        }
      }, ie.findAllNodes = Xo, ie.findBoundingRects = function(e, n) {
        if (!_l) throw Error(c(363));
        n = Xo(e, n), e = [];
        for (var t = 0; t < n.length; t++) e.push(id(n[t]));
        for (n = e.length - 1; 0 < n; n--) {
          t = e[n];
          for (var l = t.x, r = l + t.width, o = t.y, a = o + t.height, f = n - 1; 0 <= f; f--) if (n !== f) {
            var b = e[f], z = b.x, M = z + b.width, T = b.y, L = T + b.height;
            if (l >= z && o >= T && r <= M && a <= L) {
              e.splice(n, 1);
              break;
            } else if (l !== z || t.width !== b.width || L < o || T > a) {
              if (!(o !== T || t.height !== b.height || M < l || z > r)) {
                z > l && (b.width += z - l, b.x = l), M < r && (b.width = r - z), e.splice(n, 1);
                break;
              }
            } else {
              T > o && (b.height += T - o, b.y = o), L < a && (b.height = a - T), e.splice(n, 1);
              break;
            }
          }
        }
        return e;
      }, ie.findHostInstance = _s, ie.findHostInstanceWithNoPortals = function(e) {
        return e = k(e), e = e !== null ? P(e) : null, e === null ? null : zl(e.stateNode);
      }, ie.findHostInstanceWithWarning = function(e) {
        return _s(e);
      }, ie.flushPassiveEffects = wl, ie.flushSyncFromReconciler = function(e) {
        var n = ae;
        ae |= 1;
        var t = V.T, l = Un();
        try {
          if (He(2), V.T = null, e) return e();
        } finally {
          He(l), V.T = t, ae = n, (ae & 6) === 0 && Rt(0);
        }
      }, ie.flushSyncWork = os, ie.focusWithin = function(e, n) {
        if (!_l) throw Error(c(363));
        for (e = Qo(e), n = ns(e, n), n = Array.from(n), e = 0; e < n.length; ) {
          var t = n[e++], l = t.tag;
          if (!xl(t)) {
            if ((l === 5 || l === 26 || l === 27) && cd(t.stateNode)) return true;
            for (t = t.child; t !== null; ) n.push(t), t = t.sibling;
          }
        }
        return false;
      }, ie.getFindAllNodesFailureDescription = function(e, n) {
        if (!_l) throw Error(c(363));
        var t = 0, l = [];
        e = [Qo(e), 0];
        for (var r = 0; r < e.length; ) {
          var o = e[r++], a = o.tag, f = e[r++], b = n[f];
          if ((a !== 5 && a !== 26 && a !== 27 || !xl(o)) && (Yo(o, b) && (l.push(Wo(b)), f++, f > t && (t = f)), f < n.length)) for (o = o.child; o !== null; ) e.push(o, f), o = o.sibling;
        }
        if (t < n.length) {
          for (e = []; t < n.length; t++) e.push(Wo(n[t]));
          return `findAllNodes was able to match part of the selector:
  ` + (l.join(" > ") + `

No matching component was found for:
  `) + e.join(" > ");
        }
        return null;
      }, ie.getPublicRootInstance = function(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
          case 27:
          case 5:
            return zl(e.child.stateNode);
          default:
            return e.child.stateNode;
        }
      }, ie.injectIntoDevTools = function() {
        var e = { bundleType: 0, version: Uf, rendererPackageName: Af, currentDispatcherRef: V, reconcilerVersion: "19.2.0" };
        if (Ps !== null && (e.rendererConfig = Ps), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") e = false;
        else {
          var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (n.isDisabled || !n.supportsFiber) e = true;
          else {
            try {
              Cl = n.inject(e), dn = n;
            } catch {
            }
            e = !!n.checkDCE;
          }
        }
        return e;
      }, ie.isAlreadyRendering = function() {
        return (ae & 6) !== 0;
      }, ie.observeVisibleRects = function(e, n, t, l) {
        if (!_l) throw Error(c(363));
        e = Xo(e, n);
        var r = fd(e, t, l).disconnect;
        return { disconnect: function() {
          r();
        } };
      }, ie.shouldError = function() {
        return null;
      }, ie.shouldSuspend = function() {
        return false;
      }, ie.startHostTransition = function(e, n, t, l) {
        if (e.tag !== 5) throw Error(c(476));
        var r = sa(e).queue;
        aa(e, r, n, Ut, t === null ? d : function() {
          var o = sa(e);
          return o.next === null && (o = e.alternate.memoizedState), vl(e, o.next.queue, {}, sn()), t(l);
        });
      }, ie.updateContainer = function(e, n, t, l) {
        var r = n.current, o = sn();
        return xs(r, o, e, n, t, l), o;
      }, ie.updateContainerSync = function(e, n, t, l) {
        return xs(n.current, 2, e, n, t, l), 2;
      }, ie;
    }, i.exports.default = i.exports, Object.defineProperty(i.exports, "__esModule", { value: true });
  })(Tc)), Tc.exports;
}
var Pc;
function Dm() {
  return Pc || (Pc = 1, Nc.exports = Lm()), Nc.exports;
}
var Um = Dm();
const Am = Om(Um);
function qm(i) {
  const u = Am(i);
  return u.injectIntoDevTools(), u;
}
const ef = 0, il = {}, Hm = /^three(?=[A-Z])/, Kr = (i) => `${i[0].toUpperCase()}${i.slice(1)}`;
let Bm = 0;
const Vm = (i) => typeof i == "function";
function $m(i) {
  if (Vm(i)) {
    const u = `${Bm++}`;
    return il[u] = i, u;
  } else Object.assign(il, i);
}
function nf(i, u) {
  const s = Kr(i), d = il[s];
  if (i !== "primitive" && !d) throw new Error(`R3F: ${s} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (i === "primitive" && !u.object) throw new Error("R3F: Primitives without 'object' are invalid!");
  if (u.args !== void 0 && !Array.isArray(u.args)) throw new Error("R3F: The args prop must be an array!");
}
function Qm(i, u, s) {
  var d;
  return i = Kr(i) in il ? i : i.replace(Hm, ""), nf(i, u), i === "primitive" && (d = u.object) != null && d.__r3f && delete u.object.__r3f, Yr(u.object, s, i, u);
}
function Ym(i) {
  if (!i.isHidden) {
    var u;
    i.props.attach && (u = i.parent) != null && u.object ? Xr(i.parent, i) : tn(i.object) && (i.object.visible = false), i.isHidden = true, al(i);
  }
}
function tf(i) {
  if (i.isHidden) {
    var u;
    i.props.attach && (u = i.parent) != null && u.object ? Wr(i.parent, i) : tn(i.object) && i.props.visible !== false && (i.object.visible = true), i.isHidden = false, al(i);
  }
}
function mi(i, u, s) {
  const d = u.root.getState();
  if (!(!i.parent && i.object !== d.scene)) {
    if (!u.object) {
      var c, g;
      const F = il[Kr(u.type)];
      u.object = (c = u.props.object) != null ? c : new F(...(g = u.props.args) != null ? g : []), u.object.__r3f = u;
    }
    if (st(u.object, u.props), u.props.attach) Wr(i, u);
    else if (tn(u.object) && tn(i.object)) {
      const F = i.object.children.indexOf(s == null ? void 0 : s.object);
      if (s && F !== -1) {
        const k = i.object.children.indexOf(u.object);
        if (k !== -1) {
          i.object.children.splice(k, 1);
          const y = k < F ? F - 1 : F;
          i.object.children.splice(y, 0, u.object);
        } else u.object.parent = i.object, i.object.children.splice(F, 0, u.object), u.object.dispatchEvent({ type: "added" }), i.object.dispatchEvent({ type: "childadded", child: u.object });
      } else i.object.add(u.object);
    }
    for (const F of u.children) mi(u, F);
    al(u);
  }
}
function Yu(i, u) {
  u && (u.parent = i, i.children.push(u), mi(i, u));
}
function Rc(i, u, s) {
  if (!u || !s) return;
  u.parent = i;
  const d = i.children.indexOf(s);
  d !== -1 ? i.children.splice(d, 0, u) : i.children.push(u), mi(i, u, s);
}
function lf(i) {
  if (typeof i.dispose == "function") {
    const u = () => {
      try {
        i.dispose();
      } catch {
      }
    };
    typeof IS_REACT_ACT_ENVIRONMENT < "u" ? u() : ei.unstable_scheduleCallback(ei.unstable_IdlePriority, u);
  }
}
function ti(i, u, s) {
  if (!u) return;
  u.parent = null;
  const d = i.children.indexOf(u);
  d !== -1 && i.children.splice(d, 1), u.props.attach ? Xr(i, u) : tn(u.object) && tn(i.object) && (i.object.remove(u.object), Cm(Qc(u), u.object));
  const c = u.props.dispose !== null && s !== false;
  for (let g = u.children.length - 1; g >= 0; g--) {
    const F = u.children[g];
    ti(u, F, c);
  }
  u.children.length = 0, delete u.object.__r3f, c && u.type !== "primitive" && u.object.type !== "Scene" && lf(u.object), s === void 0 && al(u);
}
function Wm(i, u) {
  for (const s of [i, i.alternate]) if (s !== null) if (typeof s.ref == "function") {
    s.refCleanup == null || s.refCleanup();
    const d = s.ref(u);
    typeof d == "function" && (s.refCleanup = d);
  } else s.ref && (s.ref.current = u);
}
const Qr = [];
function Xm() {
  for (const [s] of Qr) {
    const d = s.parent;
    if (d) {
      s.props.attach ? Xr(d, s) : tn(s.object) && tn(d.object) && d.object.remove(s.object);
      for (const c of s.children) c.props.attach ? Xr(s, c) : tn(c.object) && tn(s.object) && s.object.remove(c.object);
    }
    s.isHidden && tf(s), s.object.__r3f && delete s.object.__r3f, s.type !== "primitive" && lf(s.object);
  }
  for (const [s, d, c] of Qr) {
    s.props = d;
    const g = s.parent;
    if (g) {
      var i, u;
      const F = il[Kr(s.type)];
      s.object = (i = s.props.object) != null ? i : new F(...(u = s.props.args) != null ? u : []), s.object.__r3f = s, Wm(c, s.object), st(s.object, s.props), s.props.attach ? Wr(g, s) : tn(s.object) && tn(g.object) && g.object.add(s.object);
      for (const k of s.children) k.props.attach ? Wr(s, k) : tn(k.object) && tn(s.object) && s.object.add(k.object);
      al(s);
    }
  }
  Qr.length = 0;
}
const Wu = () => {
}, jc = {};
let $r = ef;
const Gm = 0, Zm = 4, Gr = qm({ isPrimaryRenderer: false, warnsIfNotActing: false, supportsMutation: true, supportsPersistence: false, supportsHydration: false, createInstance: Qm, removeChild: ti, appendChild: Yu, appendInitialChild: Yu, insertBefore: Rc, appendChildToContainer(i, u) {
  const s = i.getState().scene.__r3f;
  !u || !s || Yu(s, u);
}, removeChildFromContainer(i, u) {
  const s = i.getState().scene.__r3f;
  !u || !s || ti(s, u);
}, insertInContainerBefore(i, u, s) {
  const d = i.getState().scene.__r3f;
  !u || !s || !d || Rc(d, u, s);
}, getRootHostContext: () => jc, getChildHostContext: () => jc, commitUpdate(i, u, s, d, c) {
  var g, F, k;
  nf(u, d);
  let y = false;
  if ((i.type === "primitive" && s.object !== d.object || ((g = d.args) == null ? void 0 : g.length) !== ((F = s.args) == null ? void 0 : F.length) || (k = d.args) != null && k.some((_, S) => {
    var w;
    return _ !== ((w = s.args) == null ? void 0 : w[S]);
  })) && (y = true), y) Qr.push([i, { ...d }, c]);
  else {
    const _ = zm(i, d);
    Object.keys(_).length && (Object.assign(i.props, _), st(i.object, _));
  }
  (c.sibling === null || (c.flags & Zm) === Gm) && Xm();
}, finalizeInitialChildren: () => false, commitMount() {
}, getPublicInstance: (i) => i == null ? void 0 : i.object, prepareForCommit: () => null, preparePortalMount: (i) => Yr(i.getState().scene, i, "", {}), resetAfterCommit: () => {
}, shouldSetTextContent: () => false, clearContainer: () => false, hideInstance: Ym, unhideInstance: tf, createTextInstance: Wu, hideTextInstance: Wu, unhideTextInstance: Wu, scheduleTimeout: typeof setTimeout == "function" ? setTimeout : void 0, cancelTimeout: typeof clearTimeout == "function" ? clearTimeout : void 0, noTimeout: -1, getInstanceFromNode: () => null, beforeActiveInstanceBlur() {
}, afterActiveInstanceBlur() {
}, detachDeletedInstance() {
}, prepareScopeUpdate() {
}, getInstanceFromScope: () => null, shouldAttemptEagerTransition: () => false, trackSchedulerEvent: () => {
}, resolveEventType: () => null, resolveEventTimeStamp: () => -1.1, requestPostPaintCallback() {
}, maySuspendCommit: () => false, preloadInstance: () => true, suspendInstance() {
}, waitForCommitToBeReady: () => null, NotPendingTransition: null, HostTransitionContext: G.createContext(null), setCurrentUpdatePriority(i) {
  $r = i;
}, getCurrentUpdatePriority() {
  return $r;
}, resolveUpdatePriority() {
  var i;
  if ($r !== ef) return $r;
  switch (typeof window < "u" && ((i = window.event) == null ? void 0 : i.type)) {
    case "click":
    case "contextmenu":
    case "dblclick":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
      return Mm;
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerenter":
    case "pointerleave":
    case "wheel":
      return Rm;
    default:
      return jm;
  }
}, resetFormInstance() {
}, rendererPackageName: "@react-three/fiber", rendererVersion: Fm.version, applyViewTransitionName(i, u, s) {
}, restoreViewTransitionName(i, u) {
}, cancelViewTransitionName(i, u, s) {
}, cancelRootViewTransitionName(i) {
}, restoreRootViewTransitionName(i) {
}, InstanceMeasurement: null, measureInstance: (i) => null, wasInstanceInViewport: (i) => true, hasInstanceChanged: (i, u) => false, hasInstanceAffectedParent: (i, u) => false, suspendOnActiveViewTransition(i, u) {
}, startGestureTransition: () => null, startViewTransition: () => null, stopViewTransition(i) {
}, createViewTransitionInstance: (i) => null, getCurrentGestureOffset(i) {
  throw new Error("startGestureTransition is not yet supported in react-three-fiber.");
}, cloneMutableInstance(i, u) {
  return i;
}, cloneMutableTextInstance(i) {
  return i;
}, cloneRootViewTransitionContainer(i) {
  throw new Error("Not implemented.");
}, removeRootViewTransitionClone(i, u) {
  throw new Error("Not implemented.");
}, createFragmentInstance: (i) => null, updateFragmentInstanceFiber(i, u) {
}, commitNewChildToFragmentInstance(i, u) {
}, deleteChildFromFragmentInstance(i, u) {
}, measureClonedInstance: (i) => null, maySuspendCommitOnUpdate: (i, u, s) => false, maySuspendCommitInSyncRender: (i, u) => false, startSuspendingCommit: () => null, getSuspendedCommitReason: (i, u) => null }), Tt = /* @__PURE__ */ new Map(), ol = { objects: "shallow", strict: false };
function Km(i, u) {
  if (!u && typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement && i.parentElement) {
    const { width: s, height: d, top: c, left: g } = i.parentElement.getBoundingClientRect();
    return { width: s, height: d, top: c, left: g };
  } else if (!u && typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas) return { width: i.width, height: i.height, top: 0, left: 0 };
  return { width: 0, height: 0, top: 0, left: 0, ...u };
}
function Jm(i) {
  const u = Tt.get(i), s = u == null ? void 0 : u.fiber, d = u == null ? void 0 : u.store;
  u && console.warn("R3F.createRoot should only be called once!");
  const c = typeof reportError == "function" ? reportError : console.error, g = d || Tm(oi, Fc), F = s || Gr.createContainer(g, Pm, null, false, null, "", c, c, c, null);
  u || Tt.set(i, { fiber: F, store: g });
  let k, y, P = false, _ = null;
  return { async configure(S = {}) {
    let w;
    _ = new Promise((p) => w = p);
    let { gl: x, size: R, scene: q, events: Z, onCreated: N, shadows: C = false, linear: Q = false, flat: X = false, legacy: ee = false, orthographic: A = false, frameloop: U = "always", dpr: me = [1, 2], performance: re, raycaster: oe, camera: fe, onPointerMissed: Me } = S, Y = g.getState(), Se = Y.gl;
    if (!Y.gl) {
      const p = { canvas: i, powerPreference: "high-performance", antialias: true, alpha: true }, E = typeof x == "function" ? await x(p) : x;
      xc(E) ? Se = E : Se = new Np({ ...p, ...x }), Y.set({ gl: Se });
    }
    let we = Y.raycaster;
    we || Y.set({ raycaster: we = new Lc() });
    const { params: j, ...H } = oe || {};
    if (xe.equ(H, we, ol) || st(we, { ...H }), xe.equ(j, we.params, ol) || st(we, { params: { ...we.params, ...j } }), !Y.camera || Y.camera === y && !xe.equ(y, fe, ol)) {
      y = fe;
      const p = fe == null ? void 0 : fe.isCamera, E = p ? fe : A ? new Tp(0, 0, 0, 0, 0.1, 1e3) : new Ip(75, 0, 0.1, 1e3);
      p || (E.position.z = 5, fe && (st(E, fe), E.manual || ("aspect" in fe || "left" in fe || "right" in fe || "bottom" in fe || "top" in fe) && (E.manual = true, E.updateProjectionMatrix())), !Y.camera && !(fe != null && fe.rotation) && E.lookAt(0, 0, 0)), Y.set({ camera: E }), we.camera = E;
    }
    if (!Y.scene) {
      let p;
      q != null && q.isScene ? (p = q, Yr(p, g, "", {})) : (p = new Pp(), Yr(p, g, "", {}), q && st(p, q)), Y.set({ scene: p });
    }
    Z && !Y.events.handlers && Y.set({ events: Z(g) });
    const B = Km(i, R);
    if (xe.equ(B, Y.size, ol) || Y.setSize(B.width, B.height, B.top, B.left), me && Y.viewport.dpr !== Wc(me) && Y.setDpr(me), Y.frameloop !== U && Y.setFrameloop(U), Y.onPointerMissed || Y.set({ onPointerMissed: Me }), re && !xe.equ(re, Y.performance, ol) && Y.set((p) => ({ performance: { ...p.performance, ...re } })), !Y.xr) {
      var K;
      const p = (O, J) => {
        const ue = g.getState();
        ue.frameloop !== "never" && Fc(O, true, ue, J);
      }, E = () => {
        const O = g.getState();
        O.gl.xr.enabled = O.gl.xr.isPresenting, O.gl.xr.setAnimationLoop(O.gl.xr.isPresenting ? p : null), O.gl.xr.isPresenting || oi(O);
      }, D = { connect() {
        const O = g.getState().gl;
        O.xr.addEventListener("sessionstart", E), O.xr.addEventListener("sessionend", E);
      }, disconnect() {
        const O = g.getState().gl;
        O.xr.removeEventListener("sessionstart", E), O.xr.removeEventListener("sessionend", E);
      } };
      typeof ((K = Se.xr) == null ? void 0 : K.addEventListener) == "function" && D.connect(), Y.set({ xr: D });
    }
    if (Se.shadowMap) {
      const p = Se.shadowMap.enabled, E = Se.shadowMap.type;
      if (Se.shadowMap.enabled = !!C, xe.boo(C)) Se.shadowMap.type = Du;
      else if (xe.str(C)) {
        var de;
        const D = { basic: Mp, percentage: jp, soft: Du, variance: Rp };
        Se.shadowMap.type = (de = D[C]) != null ? de : Du;
      } else xe.obj(C) && Object.assign(Se.shadowMap, C);
      (p !== Se.shadowMap.enabled || E !== Se.shadowMap.type) && (Se.shadowMap.needsUpdate = true);
    }
    return Fp.enabled = !ee, P || (Se.outputColorSpace = Q ? Op : Uc, Se.toneMapping = X ? Lp : Dp), Y.legacy !== ee && Y.set(() => ({ legacy: ee })), Y.linear !== Q && Y.set(() => ({ linear: Q })), Y.flat !== X && Y.set(() => ({ flat: X })), x && !xe.fun(x) && !xc(x) && !xe.equ(x, Se, ol) && st(Se, x), k = N, P = true, w(), this;
  }, render(S) {
    return !P && !_ && this.configure(), _.then(() => {
      Gr.updateContainer(Xe.jsx(eh, { store: g, children: S, onCreated: k, rootElement: i }), F, null, () => {
      });
    }), g;
  }, unmount() {
    rf(i);
  } };
}
function eh({ store: i, children: u, onCreated: s, rootElement: d }) {
  return Bl(() => {
    const c = i.getState();
    c.set((g) => ({ internal: { ...g.internal, active: true } })), s && s(c), i.getState().events.connected || c.events.connect == null || c.events.connect(d);
  }, []), Xe.jsx(di.Provider, { value: i, children: u });
}
function rf(i, u) {
  const s = Tt.get(i), d = s == null ? void 0 : s.fiber;
  if (d) {
    const c = s == null ? void 0 : s.store.getState();
    c && (c.internal.active = false), Gr.updateContainer(null, d, null, () => {
      c && setTimeout(() => {
        try {
          var g, F, k, y;
          c.events.disconnect == null || c.events.disconnect(), (g = c.gl) == null || (F = g.renderLists) == null || F.dispose == null || F.dispose(), (k = c.gl) == null || k.forceContextLoss == null || k.forceContextLoss(), (y = c.gl) != null && y.xr && c.xr.disconnect(), Em(c.scene), Tt.delete(i);
        } catch {
        }
      }, 500);
    });
  }
}
function gh(i, u, s) {
  return Xe.jsx(nh, { children: i, container: u, state: s });
}
function nh({ state: i = {}, children: u, container: s }) {
  const { events: d, size: c, ...g } = i, F = pi(), [k] = G.useState(() => new Lc()), [y] = G.useState(() => new Dc()), P = fi((S, w) => {
    let x;
    if (w.camera && c) {
      const R = w.camera;
      x = S.viewport.getCurrentViewport(R, new Al(), c), R !== S.camera && Gc(R, c);
    }
    return { ...S, ...w, scene: s, raycaster: k, pointer: y, mouse: y, previousRoot: F, events: { ...S.events, ...w.events, ...d }, size: { ...S.size, ...c }, viewport: { ...S.viewport, ...x }, setEvents: (R) => w.set((q) => ({ ...q, events: { ...q.events, ...R } })) };
  }), _ = G.useMemo(() => {
    const S = Ac((x, R) => ({ ...g, set: x, get: R })), w = (x) => S.setState((R) => P.current(x, R));
    return w(F.getState()), F.subscribe(w), S;
  }, [F, s]);
  return Xe.jsx(Xe.Fragment, { children: Gr.createPortal(Xe.jsx(di.Provider, { value: _, children: u }), _, null) });
}
function th(i, u) {
  const s = { callback: i };
  return u.add(s), () => void u.delete(s);
}
const of = /* @__PURE__ */ new Set(), lh = /* @__PURE__ */ new Set(), rh = /* @__PURE__ */ new Set(), bh = (i) => th(i, of);
function Xu(i, u) {
  if (i.size) for (const { callback: s } of i.values()) s(u);
}
function ql(i, u) {
  switch (i) {
    case "before":
      return Xu(of, u);
    case "after":
      return Xu(lh, u);
    case "tail":
      return Xu(rh, u);
  }
}
let Gu, Zu;
function li(i, u, s) {
  let d = u.clock.getDelta();
  u.frameloop === "never" && typeof i == "number" && (d = i - u.clock.elapsedTime, u.clock.oldTime = u.clock.elapsedTime, u.clock.elapsedTime = i), Gu = u.internal.subscribers;
  for (let c = 0; c < Gu.length; c++) Zu = Gu[c], Zu.ref.current(Zu.store.getState(), d, s);
  return !u.internal.priority && u.gl.render && u.gl.render(u.scene, u.camera), u.internal.frames = Math.max(0, u.internal.frames - 1), u.frameloop === "always" ? 1 : u.internal.frames;
}
let Zr = false, ri = false, Ku, Mc, ul;
function uf(i) {
  Mc = requestAnimationFrame(uf), Zr = true, Ku = 0, ql("before", i), ri = true;
  for (const s of Tt.values()) {
    var u;
    ul = s.store.getState(), ul.internal.active && (ul.frameloop === "always" || ul.internal.frames > 0) && !((u = ul.gl.xr) != null && u.isPresenting) && (Ku += li(i, ul));
  }
  if (ri = false, ql("after", i), Ku === 0) return ql("tail", i), Zr = false, cancelAnimationFrame(Mc);
}
function oi(i, u = 1) {
  var s;
  if (!i) return Tt.forEach((d) => oi(d.store.getState(), u));
  (s = i.gl.xr) != null && s.isPresenting || !i.internal.active || i.frameloop === "never" || (u > 1 ? i.internal.frames = Math.min(60, i.internal.frames + u) : ri ? i.internal.frames = 2 : i.internal.frames = 1, Zr || (Zr = true, requestAnimationFrame(uf)));
}
function Fc(i, u = true, s, d) {
  if (u && ql("before", i), s) li(i, s, d);
  else for (const c of Tt.values()) li(i, c.store.getState());
  u && ql("after", i);
}
const Ju = { onClick: ["click", false], onContextMenu: ["contextmenu", false], onDoubleClick: ["dblclick", false], onWheel: ["wheel", true], onPointerDown: ["pointerdown", true], onPointerUp: ["pointerup", true], onPointerLeave: ["pointerleave", true], onPointerMove: ["pointermove", true], onPointerCancel: ["pointercancel", true], onLostPointerCapture: ["lostpointercapture", true] };
function oh(i) {
  const { handlePointer: u } = Nm(i);
  return { priority: 1, enabled: true, compute(s, d, c) {
    d.pointer.set(s.offsetX / d.size.width * 2 - 1, -(s.offsetY / d.size.height) * 2 + 1), d.raycaster.setFromCamera(d.pointer, d.camera);
  }, connected: void 0, handlers: Object.keys(Ju).reduce((s, d) => ({ ...s, [d]: u(d) }), {}), update: () => {
    var s;
    const { events: d, internal: c } = i.getState();
    (s = c.lastEvent) != null && s.current && d.handlers && d.handlers.onPointerMove(c.lastEvent.current);
  }, connect: (s) => {
    const { set: d, events: c } = i.getState();
    if (c.disconnect == null || c.disconnect(), d((g) => ({ events: { ...g.events, connected: s } })), c.handlers) for (const g in c.handlers) {
      const F = c.handlers[g], [k, y] = Ju[g];
      s.addEventListener(k, F, { passive: y });
    }
  }, disconnect: () => {
    const { set: s, events: d } = i.getState();
    if (d.connected) {
      if (d.handlers) for (const c in d.handlers) {
        const g = d.handlers[c], [F] = Ju[c];
        d.connected.removeEventListener(F, g);
      }
      s((c) => ({ events: { ...c.events, connected: void 0 } }));
    }
  } };
}
function Oc(i, u) {
  let s;
  return (...d) => {
    window.clearTimeout(s), s = window.setTimeout(() => i(...d), u);
  };
}
function uh({ debounce: i, scroll: u, polyfill: s, offsetSize: d } = { debounce: 0, scroll: false, offsetSize: false }) {
  const c = s || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!c) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [g, F] = G.useState({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), k = G.useRef({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: g, orientationHandler: null }), y = i ? typeof i == "number" ? i : i.scroll : null, P = i ? typeof i == "number" ? i : i.resize : null, _ = G.useRef(false);
  G.useEffect(() => (_.current = true, () => void (_.current = false)));
  const [S, w, x] = G.useMemo(() => {
    const N = () => {
      if (!k.current.element) return;
      const { left: C, top: Q, width: X, height: ee, bottom: A, right: U, x: me, y: re } = k.current.element.getBoundingClientRect(), oe = { left: C, top: Q, width: X, height: ee, bottom: A, right: U, x: me, y: re };
      k.current.element instanceof HTMLElement && d && (oe.height = k.current.element.offsetHeight, oe.width = k.current.element.offsetWidth), Object.freeze(oe), _.current && !ch(k.current.lastBounds, oe) && F(k.current.lastBounds = oe);
    };
    return [N, P ? Oc(N, P) : N, y ? Oc(N, y) : N];
  }, [F, d, y, P]);
  function R() {
    k.current.scrollContainers && (k.current.scrollContainers.forEach((N) => N.removeEventListener("scroll", x, true)), k.current.scrollContainers = null), k.current.resizeObserver && (k.current.resizeObserver.disconnect(), k.current.resizeObserver = null), k.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", k.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", k.current.orientationHandler));
  }
  function q() {
    k.current.element && (k.current.resizeObserver = new c(x), k.current.resizeObserver.observe(k.current.element), u && k.current.scrollContainers && k.current.scrollContainers.forEach((N) => N.addEventListener("scroll", x, { capture: true, passive: true })), k.current.orientationHandler = () => {
      x();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", k.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", k.current.orientationHandler));
  }
  const Z = (N) => {
    !N || N === k.current.element || (R(), k.current.element = N, k.current.scrollContainers = af(N), q());
  };
  return ah(x, !!u), ih(w), G.useEffect(() => {
    R(), q();
  }, [u, x, w]), G.useEffect(() => R, []), [Z, g, S];
}
function ih(i) {
  G.useEffect(() => {
    const u = i;
    return window.addEventListener("resize", u), () => void window.removeEventListener("resize", u);
  }, [i]);
}
function ah(i, u) {
  G.useEffect(() => {
    if (u) {
      const s = i;
      return window.addEventListener("scroll", s, { capture: true, passive: true }), () => void window.removeEventListener("scroll", s, true);
    }
  }, [i, u]);
}
function af(i) {
  const u = [];
  if (!i || i === document.body) return u;
  const { overflow: s, overflowX: d, overflowY: c } = window.getComputedStyle(i);
  return [s, d, c].some((g) => g === "auto" || g === "scroll") && u.push(i), [...u, ...af(i.parentElement)];
}
const sh = ["x", "y", "top", "bottom", "left", "right", "width", "height"], ch = (i, u) => sh.every((s) => i[s] === u[s]);
function fh({ ref: i, children: u, fallback: s, resize: d, style: c, gl: g, events: F = oh, eventSource: k, eventPrefix: y, shadows: P, linear: _, flat: S, legacy: w, orthographic: x, frameloop: R, dpr: q, performance: Z, raycaster: N, camera: C, scene: Q, onPointerMissed: X, onCreated: ee, ...A }) {
  G.useMemo(() => $m(Bp), []);
  const U = gm(), [me, re] = uh({ scroll: true, debounce: { scroll: 50, resize: 0 }, ...d }), oe = G.useRef(null), fe = G.useRef(null);
  G.useImperativeHandle(i, () => oe.current);
  const Me = fi(X), [Y, Se] = G.useState(false), [we, j] = G.useState(false);
  if (Y) throw Y;
  if (we) throw we;
  const H = G.useRef(null);
  Bl(() => {
    const K = oe.current;
    if (re.width > 0 && re.height > 0 && K) {
      H.current || (H.current = Jm(K));
      async function de() {
        await H.current.configure({ gl: g, scene: Q, events: F, shadows: P, linear: _, flat: S, legacy: w, orthographic: x, frameloop: R, dpr: q, performance: Z, raycaster: N, camera: C, size: re, onPointerMissed: (...p) => Me.current == null ? void 0 : Me.current(...p), onCreated: (p) => {
          p.events.connect == null || p.events.connect(k ? hm(k) ? k.current : k : fe.current), y && p.setEvents({ compute: (E, D) => {
            const O = E[y + "X"], J = E[y + "Y"];
            D.pointer.set(O / D.size.width * 2 - 1, -(J / D.size.height) * 2 + 1), D.raycaster.setFromCamera(D.pointer, D.camera);
          } }), ee == null ? void 0 : ee(p);
        } }), H.current.render(Xe.jsx(U, { children: Xe.jsx(ym, { set: j, children: Xe.jsx(G.Suspense, { fallback: Xe.jsx(bm, { set: Se }), children: u ?? null }) }) }));
      }
      de();
    }
  }), G.useEffect(() => {
    const K = oe.current;
    if (K) return () => rf(K);
  }, []);
  const B = k ? "none" : "auto";
  return Xe.jsx("div", { ref: fe, style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", pointerEvents: B, ...c }, ...A, children: Xe.jsx("div", { ref: me, style: { width: "100%", height: "100%" }, children: Xe.jsx("canvas", { ref: oe, style: { display: "block" }, children: s }) }) });
}
function yh(i) {
  return Xe.jsx(Vc, { children: Xe.jsx(fh, { ...i }) });
}
export {
  yh as C,
  ph as R,
  Xp as a,
  G as b,
  tm as c,
  hh as d,
  ai as e,
  vh as f,
  $m as g,
  st as h,
  gh as i,
  Jc as j,
  Xe as k,
  ui as l,
  pi as m,
  Gr as n,
  di as o,
  bh as p,
  ii as r,
  im as s,
  nm as u
};
