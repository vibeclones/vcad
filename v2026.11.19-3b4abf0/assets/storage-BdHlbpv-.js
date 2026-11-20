var e = (e2, t2) => t2.some((t3) => e2 instanceof t3), t, n;
function r() {
  return t || (t = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function i() {
  return n || (n = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]);
}
var a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
function c(e2) {
  let t2 = new Promise((t3, n2) => {
    let r2 = () => {
      e2.removeEventListener(`success`, i2), e2.removeEventListener(`error`, a2);
    }, i2 = () => {
      t3(m(e2.result)), r2();
    }, a2 = () => {
      n2(e2.error), r2();
    };
    e2.addEventListener(`success`, i2), e2.addEventListener(`error`, a2);
  });
  return s.set(t2, e2), t2;
}
function l(e2) {
  if (a.has(e2)) return;
  let t2 = new Promise((t3, n2) => {
    let r2 = () => {
      e2.removeEventListener(`complete`, i2), e2.removeEventListener(`error`, a2), e2.removeEventListener(`abort`, a2);
    }, i2 = () => {
      t3(), r2();
    }, a2 = () => {
      n2(e2.error || new DOMException(`AbortError`, `AbortError`)), r2();
    };
    e2.addEventListener(`complete`, i2), e2.addEventListener(`error`, a2), e2.addEventListener(`abort`, a2);
  });
  a.set(e2, t2);
}
var u = { get(e2, t2, n2) {
  if (e2 instanceof IDBTransaction) {
    if (t2 === `done`) return a.get(e2);
    if (t2 === `store`) return n2.objectStoreNames[1] ? void 0 : n2.objectStore(n2.objectStoreNames[0]);
  }
  return m(e2[t2]);
}, set(e2, t2, n2) {
  return e2[t2] = n2, true;
}, has(e2, t2) {
  return e2 instanceof IDBTransaction && (t2 === `done` || t2 === `store`) || t2 in e2;
} };
function d(e2) {
  u = e2(u);
}
function f(e2) {
  return i().includes(e2) ? function(...t2) {
    return e2.apply(h(this), t2), m(this.request);
  } : function(...t2) {
    return m(e2.apply(h(this), t2));
  };
}
function p(t2) {
  return typeof t2 == `function` ? f(t2) : (t2 instanceof IDBTransaction && l(t2), e(t2, r()) ? new Proxy(t2, u) : t2);
}
function m(e2) {
  if (e2 instanceof IDBRequest) return c(e2);
  if (o.has(e2)) return o.get(e2);
  let t2 = p(e2);
  return t2 !== e2 && (o.set(e2, t2), s.set(t2, e2)), t2;
}
var h = (e2) => s.get(e2);
function g(e2, t2, { blocked: n2, upgrade: r2, blocking: i2, terminated: a2 } = {}) {
  let o2 = indexedDB.open(e2, t2), s2 = m(o2);
  return r2 && o2.addEventListener(`upgradeneeded`, (e3) => {
    r2(m(o2.result), e3.oldVersion, e3.newVersion, m(o2.transaction), e3);
  }), n2 && o2.addEventListener(`blocked`, (e3) => n2(e3.oldVersion, e3.newVersion, e3)), s2.then((e3) => {
    a2 && e3.addEventListener(`close`, () => a2()), i2 && e3.addEventListener(`versionchange`, (e4) => i2(e4.oldVersion, e4.newVersion, e4));
  }).catch(() => {
  }), s2;
}
var _ = [`get`, `getKey`, `getAll`, `getAllKeys`, `count`], v = [`put`, `add`, `delete`, `clear`], y = /* @__PURE__ */ new Map();
function b(e2, t2) {
  if (!(e2 instanceof IDBDatabase && !(t2 in e2) && typeof t2 == `string`)) return;
  if (y.get(t2)) return y.get(t2);
  let n2 = t2.replace(/FromIndex$/, ``), r2 = t2 !== n2, i2 = v.includes(n2);
  if (!(n2 in (r2 ? IDBIndex : IDBObjectStore).prototype) || !(i2 || _.includes(n2))) return;
  let a2 = async function(e3, ...t3) {
    let a3 = this.transaction(e3, i2 ? `readwrite` : `readonly`), o2 = a3.store;
    return r2 && (o2 = o2.index(t3.shift())), (await Promise.all([o2[n2](...t3), i2 && a3.done]))[0];
  };
  return y.set(t2, a2), a2;
}
d((e2) => ({ ...e2, get: (t2, n2, r2) => b(t2, n2) || e2.get(t2, n2, r2), has: (t2, n2) => !!b(t2, n2) || e2.has(t2, n2) }));
var x = [`continue`, `continuePrimaryKey`, `advance`], S = {}, C = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), T = { get(e2, t2) {
  if (!x.includes(t2)) return e2[t2];
  let n2 = S[t2];
  return n2 || (n2 = S[t2] = function(...e3) {
    C.set(this, w.get(this)[t2](...e3));
  }), n2;
} };
async function* E(...e2) {
  let t2 = this;
  if (t2 instanceof IDBCursor || (t2 = await t2.openCursor(...e2)), !t2) return;
  t2 = t2;
  let n2 = new Proxy(t2, T);
  for (w.set(n2, t2), s.set(n2, h(t2)); t2; ) yield n2, t2 = await (C.get(n2) || t2.continue()), C.delete(n2);
}
function D(t2, n2) {
  return n2 === Symbol.asyncIterator && e(t2, [IDBIndex, IDBObjectStore, IDBCursor]) || n2 === `iterate` && e(t2, [IDBIndex, IDBObjectStore]);
}
d((e2) => ({ ...e2, get(t2, n2, r2) {
  return D(t2, n2) ? E : e2.get(t2, n2, r2);
}, has(t2, n2) {
  return D(t2, n2) || e2.has(t2, n2);
} }));
var O = `vcad-documents`, k = 1, A = `documents`, j = `locks`, M = crypto.randomUUID(), N = null;
async function P() {
  return N || (N = await g(O, k, { upgrade(e2) {
    if (!e2.objectStoreNames.contains(A)) {
      let t2 = e2.createObjectStore(A, { keyPath: `id` });
      t2.createIndex(`modifiedAt`, `modifiedAt`), t2.createIndex(`name`, `name`);
    }
    e2.objectStoreNames.contains(j) || e2.createObjectStore(j, { keyPath: `documentId` });
  } }), N);
}
async function F(e2, t2, n2, r2) {
  let i2 = await P(), a2 = await i2.get(A, e2), o2 = { id: e2, name: t2, document: n2, createdAt: (a2 == null ? void 0 : a2.createdAt) ?? Date.now(), modifiedAt: Date.now(), version: ((a2 == null ? void 0 : a2.version) ?? 0) + 1, syncStatus: `local`, thumbnail: r2 };
  await i2.put(A, o2);
}
async function I(e2) {
  let t2 = await (await P()).get(A, e2);
  return t2 ? { ...t2, document: L(t2.document) } : null;
}
function L(e2) {
  if (e2 && typeof e2 == `object`) {
    let t2 = e2;
    if (typeof t2.kind == `string`) return e2;
    if (typeof t2.loonSource == `string` && t2.loonSource) return { kind: `loon`, version: `0.3`, loonSource: t2.loonSource, document: t2.document, parts: t2.parts ?? [], nextNodeId: t2.nextNodeId ?? 1, nextPartNum: t2.nextPartNum };
    if (t2.document && typeof t2.document == `object`) return { kind: `legacy`, version: `0.1`, document: t2.document, parts: t2.parts ?? [], consumedParts: t2.consumedParts, nextNodeId: t2.nextNodeId ?? 1, nextPartNum: t2.nextPartNum };
  }
  throw Error(`adoptPersistedVcadFile: unrecognized stored document shape`);
}
async function R() {
  return (await (await P()).getAllFromIndex(A, `modifiedAt`)).map((e2) => ({ id: e2.id, name: e2.name, createdAt: e2.createdAt, modifiedAt: e2.modifiedAt, syncStatus: e2.syncStatus, cloudId: e2.cloudId })).reverse();
}
async function z(e2) {
  let t2 = await P();
  await t2.delete(A, e2), await t2.delete(j, e2);
}
async function B(e2, t2) {
  let n2 = await P(), r2 = await n2.get(A, e2);
  r2 && (r2.name = t2, r2.modifiedAt = Date.now(), await n2.put(A, r2));
}
async function V() {
  return (await (await P()).getAll(A)).map((e2) => ({ ...e2, document: L(e2.document) }));
}
async function H(e2) {
  await (await P()).put(A, e2);
}
async function U(e2) {
  let t2 = await P(), n2 = await t2.get(j, e2), r2 = n2 && Date.now() - n2.acquiredAt > 3e4;
  if (n2 && !r2 && n2.tabId !== M) return false;
  let i2 = { documentId: e2, tabId: M, acquiredAt: Date.now() };
  return await t2.put(j, i2), true;
}
async function W(e2) {
  var _a;
  let t2 = await P();
  ((_a = await t2.get(j, e2)) == null ? void 0 : _a.tabId) === M && await t2.delete(j, e2);
}
async function G(e2) {
  var _a;
  let t2 = await P();
  if (((_a = await t2.get(j, e2)) == null ? void 0 : _a.tabId) !== M) return false;
  let n2 = { documentId: e2, tabId: M, acquiredAt: Date.now() };
  return await t2.put(j, n2), true;
}
async function K(e2) {
  let t2 = await (await P()).get(j, e2);
  return !(!t2 || Date.now() - t2.acquiredAt > 3e4 || t2.tabId === M);
}
async function q() {
  var _a;
  if (!((_a = navigator.storage) == null ? void 0 : _a.estimate)) return { used: 0, quota: 0, percentage: 0 };
  let { usage: e2 = 0, quota: t2 = 0 } = await navigator.storage.estimate();
  return { used: e2, quota: t2, percentage: t2 > 0 ? e2 / t2 * 100 : 0 };
}
async function J() {
  let { percentage: e2 } = await q();
  return e2 < 95;
}
async function Y() {
  let { percentage: e2 } = await q();
  return e2 >= 80 && e2 < 95;
}
async function X() {
  let e2 = (await R()).filter((e3) => e3.name.startsWith(`Untitled`));
  if (e2.length === 0) return `Untitled`;
  let t2 = 0;
  for (let n2 of e2) {
    let e3 = n2.name.match(/^Untitled(?: (\d+))?$/);
    if (e3) {
      let n3 = e3[1] ? parseInt(e3[1], 10) : 1;
      t2 = Math.max(t2, n3);
    }
  }
  return `Untitled ${t2 + 1}`;
}
async function Z() {
  return (await R())[0] ?? null;
}
async function Q() {
  let e2 = await P(), t2 = await e2.getAll(j);
  for (let n2 of t2) n2.tabId === M && await e2.delete(j, n2.documentId);
}
typeof window < `u` && window.addEventListener(`beforeunload`, () => {
  Q().catch(() => {
  });
});
export {
  Z as a,
  J as c,
  I as d,
  G as f,
  F as g,
  H as h,
  V as i,
  Y as l,
  B as m,
  z as n,
  q as o,
  W as p,
  X as r,
  K as s,
  U as t,
  R as u
};
