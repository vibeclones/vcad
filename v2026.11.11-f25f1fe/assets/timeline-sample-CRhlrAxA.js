import { b as e } from "./dist-CG_6leuq.js";
function t(t2, n2) {
  let r = /* @__PURE__ */ new Map();
  for (let i of t2.tracks) i.target.type === `Joint` && i.keys.length !== 0 && r.set(i.target.jointId, e(i, n2));
  return r;
}
function n(e2) {
  return !!(e2 == null ? void 0 : e2.tracks.some((e3) => e3.target.type === `Joint` && e3.keys.length > 0));
}
export {
  t as n,
  n as t
};
