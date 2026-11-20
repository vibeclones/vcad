try {
  self[`workbox:window:7.3.0`] && _();
} catch {
}
function e(e2, t2) {
  return new Promise((function(n2) {
    var r2 = new MessageChannel();
    r2.port1.onmessage = function(e3) {
      n2(e3.data);
    }, e2.postMessage(t2, [r2.port2]);
  }));
}
function t(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
function n(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, `value` in r2 && (r2.writable = true), Object.defineProperty(e2, a(r2.key), r2);
  }
}
function r(e2, n2) {
  var r2 = typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (r2) return (r2 = r2.call(e2)).next.bind(r2);
  if (Array.isArray(e2) || (r2 = (function(e3, n3) {
    if (e3) {
      if (typeof e3 == `string`) return t(e3, n3);
      var r3 = {}.toString.call(e3).slice(8, -1);
      return r3 === `Object` && e3.constructor && (r3 = e3.constructor.name), r3 === `Map` || r3 === `Set` ? Array.from(e3) : r3 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? t(e3, n3) : void 0;
    }
  })(e2)) || n2 && e2 && typeof e2.length == `number`) {
    r2 && (e2 = r2);
    var i2 = 0;
    return function() {
      return i2 >= e2.length ? { done: true } : { done: false, value: e2[i2++] };
    };
  }
  throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i(e2, t2) {
  return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
    return e3.__proto__ = t3, e3;
  }, i(e2, t2);
}
function a(e2) {
  var t2 = (function(e3, t3) {
    if (typeof e3 != `object` || !e3) return e3;
    var n2 = e3[Symbol.toPrimitive];
    if (n2 !== void 0) {
      var r2 = n2.call(e3, t3);
      if (typeof r2 != `object`) return r2;
      throw TypeError(`@@toPrimitive must return a primitive value.`);
    }
    return String(e3);
  })(e2, `string`);
  return typeof t2 == `symbol` ? t2 : t2 + ``;
}
try {
  self[`workbox:core:7.3.0`] && _();
} catch {
}
var o = function() {
  var e2 = this;
  this.promise = new Promise((function(t2, n2) {
    e2.resolve = t2, e2.reject = n2;
  }));
};
function s(e2, t2) {
  var n2 = location.href;
  return new URL(e2, n2).href === new URL(t2, n2).href;
}
var c = function(e2, t2) {
  this.type = e2, Object.assign(this, t2);
};
function l(e2, t2, n2) {
  return n2 ? t2 ? t2(e2) : e2 : (e2 && e2.then || (e2 = Promise.resolve(e2)), t2 ? e2.then(t2) : e2);
}
function u() {
}
var d = { type: `SKIP_WAITING` };
function f(e2, t2) {
  if (!t2) return e2 && e2.then ? e2.then(u) : Promise.resolve();
}
var p = (function(t2) {
  function r2(e2, n2) {
    var r3, i2;
    return n2 === void 0 && (n2 = {}), (r3 = t2.call(this) || this).nn = {}, r3.tn = 0, r3.rn = new o(), r3.en = new o(), r3.on = new o(), r3.un = 0, r3.an = /* @__PURE__ */ new Set(), r3.cn = function() {
      var e3 = r3.fn, t3 = e3.installing;
      r3.tn > 0 || !s(t3.scriptURL, r3.sn.toString()) || performance.now() > r3.un + 6e4 ? (r3.vn = t3, e3.removeEventListener(`updatefound`, r3.cn)) : (r3.hn = t3, r3.an.add(t3), r3.rn.resolve(t3)), ++r3.tn, t3.addEventListener(`statechange`, r3.ln);
    }, r3.ln = function(e3) {
      var t3 = r3.fn, n3 = e3.target, i3 = n3.state, a3 = n3 === r3.vn, o2 = { sw: n3, isExternal: a3, originalEvent: e3 };
      !a3 && r3.mn && (o2.isUpdate = true), r3.dispatchEvent(new c(i3, o2)), i3 === `installed` ? r3.wn = self.setTimeout((function() {
        i3 === `installed` && t3.waiting === n3 && r3.dispatchEvent(new c(`waiting`, o2));
      }), 200) : i3 === `activating` && (clearTimeout(r3.wn), a3 || r3.en.resolve(n3));
    }, r3.yn = function(e3) {
      var t3 = r3.hn, n3 = t3 !== navigator.serviceWorker.controller;
      r3.dispatchEvent(new c(`controlling`, { isExternal: n3, originalEvent: e3, sw: t3, isUpdate: r3.mn })), n3 || r3.on.resolve(t3);
    }, r3.gn = (i2 = function(e3) {
      var t3 = e3.data, n3 = e3.ports, i3 = e3.source;
      return l(r3.getSW(), (function() {
        r3.an.has(i3) && r3.dispatchEvent(new c(`message`, { data: t3, originalEvent: e3, ports: n3, sw: i3 }));
      }));
    }, function() {
      var e3 = [...arguments];
      try {
        return Promise.resolve(i2.apply(this, e3));
      } catch (e4) {
        return Promise.reject(e4);
      }
    }), r3.sn = e2, r3.nn = n2, navigator.serviceWorker.addEventListener(`message`, r3.gn), r3;
  }
  var a2, u2 = t2;
  (a2 = r2).prototype = Object.create(u2.prototype), a2.prototype.constructor = a2, i(a2, u2);
  var p2 = r2.prototype;
  return p2.register = function(e2) {
    var t3 = (e2 === void 0 ? {} : e2).immediate, n2 = t3 !== void 0 && t3;
    try {
      var r3 = this;
      return l((function(e3, t4) {
        var n3 = e3();
        return n3 && n3.then ? n3.then(t4) : t4(n3);
      })((function() {
        if (!n2 && document.readyState !== `complete`) return f(new Promise((function(e3) {
          return window.addEventListener(`load`, e3);
        })));
      }), (function() {
        return r3.mn = !!navigator.serviceWorker.controller, r3.dn = r3.pn(), l(r3.bn(), (function(e3) {
          r3.fn = e3, r3.dn && (r3.hn = r3.dn, r3.en.resolve(r3.dn), r3.on.resolve(r3.dn), r3.dn.addEventListener(`statechange`, r3.ln, { once: true }));
          var t4 = r3.fn.waiting;
          return t4 && s(t4.scriptURL, r3.sn.toString()) && (r3.hn = t4, Promise.resolve().then((function() {
            r3.dispatchEvent(new c(`waiting`, { sw: t4, wasWaitingBeforeRegister: true }));
          })).then((function() {
          }))), r3.hn && (r3.rn.resolve(r3.hn), r3.an.add(r3.hn)), r3.fn.addEventListener(`updatefound`, r3.cn), navigator.serviceWorker.addEventListener(`controllerchange`, r3.yn), r3.fn;
        }));
      })));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, p2.update = function() {
    try {
      return this.fn ? l(f(this.fn.update())) : l();
    } catch (e2) {
      return Promise.reject(e2);
    }
  }, p2.getSW = function() {
    return this.hn === void 0 ? this.rn.promise : Promise.resolve(this.hn);
  }, p2.messageSW = function(t3) {
    try {
      return l(this.getSW(), (function(n2) {
        return e(n2, t3);
      }));
    } catch (e2) {
      return Promise.reject(e2);
    }
  }, p2.messageSkipWaiting = function() {
    this.fn && this.fn.waiting && e(this.fn.waiting, d);
  }, p2.pn = function() {
    var e2 = navigator.serviceWorker.controller;
    return e2 && s(e2.scriptURL, this.sn.toString()) ? e2 : void 0;
  }, p2.bn = function() {
    try {
      var e2 = this;
      return l((function(e3, t3) {
        try {
          var n2 = e3();
        } catch (e4) {
          return t3(e4);
        }
        return n2 && n2.then ? n2.then(void 0, t3) : n2;
      })((function() {
        return l(navigator.serviceWorker.register(e2.sn, e2.nn), (function(t3) {
          return e2.un = performance.now(), t3;
        }));
      }), (function(e3) {
        throw e3;
      })));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, (function(e2, t3, r3) {
    return t3 && n(e2.prototype, t3), r3 && n(e2, r3), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  })(r2, [{ key: `active`, get: function() {
    return this.en.promise;
  } }, { key: `controlling`, get: function() {
    return this.on.promise;
  } }]);
})((function() {
  function e2() {
    this.Pn = /* @__PURE__ */ new Map();
  }
  var t2 = e2.prototype;
  return t2.addEventListener = function(e3, t3) {
    this.jn(e3).add(t3);
  }, t2.removeEventListener = function(e3, t3) {
    this.jn(e3).delete(t3);
  }, t2.dispatchEvent = function(e3) {
    e3.target = this;
    for (var t3, n2 = r(this.jn(e3.type)); !(t3 = n2()).done; ) (0, t3.value)(e3);
  }, t2.jn = function(e3) {
    return this.Pn.has(e3) || this.Pn.set(e3, /* @__PURE__ */ new Set()), this.Pn.get(e3);
  }, e2;
})());
export {
  p as Workbox
};
