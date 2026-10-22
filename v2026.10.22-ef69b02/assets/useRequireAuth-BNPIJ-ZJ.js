import { b as u } from "./three-fiber-DvYcInOp.js";
import { b as r, N as n } from "./index-DYo2o8YT.js";
function f(o) {
  const i = r((t) => t.user), a = r((t) => t.isAnonymous), e = !!i && !a, [h, s] = u.useState(false), A = u.useCallback((t) => {
    if (!n()) {
      t();
      return;
    }
    if (e) {
      t();
      return;
    }
    s(true);
  }, [e]);
  return { isAuthenticated: !n() || e, requireAuth: A, showAuth: h, setShowAuth: s, feature: o };
}
export {
  f as u
};
