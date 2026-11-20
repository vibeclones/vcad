function e(e2, n2) {
  let r2;
  try {
    r2 = e2();
  } catch {
    return;
  }
  return { getItem: (e3) => {
    let i2 = (e4) => e4 === null ? null : JSON.parse(e4, n2 == null ? void 0 : n2.reviver), a = r2.getItem(e3) ?? null;
    return t(a) ? a.then(i2) : i2(a);
  }, setItem: (e3, t2) => r2.setItem(e3, JSON.stringify(t2, n2 == null ? void 0 : n2.replacer)), removeItem: (e3) => r2.removeItem(e3) };
}
var t = (e2) => typeof (e2 == null ? void 0 : e2.then) == `function`, n = (e2) => ({ then(t2) {
  return t2 ? r(t2)(e2) : this;
} }), r = (e2) => (i2) => {
  try {
    let r2 = e2(i2);
    return t(r2) ? r2 : n(r2);
  } catch (e3) {
    return { then(t2, n2) {
      return n2 ? r(n2)(e3) : this;
    } };
  }
}, i = (n2, i2) => (a, o, s) => {
  let c = { storage: e(() => window.localStorage), partialize: (e2) => e2, version: 0, merge: (e2, t2) => ({ ...t2, ...e2 }), ...i2 }, l = false, u = 0, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = c.storage;
  if (!p) return n2((...e2) => {
    console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`), a(...e2);
  }, o, s);
  let m = () => {
    let e2 = c.partialize({ ...o() });
    return p.setItem(c.name, { state: e2, version: c.version });
  }, h = s.setState;
  s.setState = (...e2) => (h(...e2), m());
  let g = n2((...e2) => (a(...e2), m()), o, s);
  s.getInitialState = () => g;
  let _, v = () => {
    var _a;
    if (!p) return;
    let e2 = ++u;
    l = false, d.forEach((e3) => e3(o() ?? g));
    let n3 = ((_a = c.onRehydrateStorage) == null ? void 0 : _a.call(c, o() ?? g)) || void 0;
    return r(p.getItem.bind(p))(c.name).then((e3) => {
      if (e3) {
        if (typeof e3.version == `number` && e3.version !== c.version) {
          if (c.migrate) {
            let n4 = c.migrate(e3.state, e3.version);
            return t(n4) ? n4.then((e4) => [true, e4]) : [true, n4];
          }
          console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
        } else return [false, e3.state];
      }
      return [false, void 0];
    }).then((t2) => {
      if (e2 !== u) return;
      let [n4, r2] = t2;
      if (_ = c.merge(r2, o() ?? g), a(_, true), n4) return m();
    }).then(() => {
      e2 === u && (n3 == null ? void 0 : n3(o(), void 0), _ = o(), l = true, f.forEach((e3) => e3(_)));
    }).then(() => void 0, (t2) => {
      e2 === u && (n3 == null ? void 0 : n3(void 0, t2));
    });
  };
  return s.persist = { setOptions: (e2) => {
    c = { ...c, ...e2 }, e2.storage && (p = e2.storage);
  }, clearStorage: () => {
    ++u, p == null ? void 0 : p.removeItem(c.name);
  }, getOptions: () => c, rehydrate: () => {
    try {
      return Promise.resolve(v());
    } catch (e2) {
      return Promise.reject(e2);
    }
  }, hasHydrated: () => l, onHydrate: (e2) => (d.add(e2), () => {
    d.delete(e2);
  }), onFinishHydration: (e2) => (f.add(e2), () => {
    f.delete(e2);
  }) }, c.skipHydration || v(), _ || g;
};
export {
  i as t
};
