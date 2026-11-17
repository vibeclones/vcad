import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, k as n } from "./three-drei-_EcrAYRL.js";
var r = e(t(), 1), i = (e2) => e2;
function a(e2, t2 = i) {
  let n2 = r.useSyncExternalStore(e2.subscribe, r.useCallback(() => t2(e2.getState()), [e2, t2]), () => t2(e2.getInitialState()));
  return r.useDebugValue(n2), n2;
}
var o = (e2) => {
  let t2 = n(e2), r2 = (e3) => a(t2, e3);
  return Object.assign(r2, t2), r2;
}, s = ((e2) => e2 ? o(e2) : o);
export {
  a as n,
  s as t
};
