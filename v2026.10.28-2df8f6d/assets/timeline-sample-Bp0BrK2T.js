import { Q as a } from "./index-BkIlMx7Q.js";
function r(n, t) {
  const o = /* @__PURE__ */ new Map();
  for (const e of n.tracks) e.target.type === "Joint" && e.keys.length !== 0 && o.set(e.target.jointId, a(e, t));
  return o;
}
function c(n) {
  return !!(n == null ? void 0 : n.tracks.some((t) => t.target.type === "Joint" && t.keys.length > 0));
}
export {
  c as h,
  r as s
};
