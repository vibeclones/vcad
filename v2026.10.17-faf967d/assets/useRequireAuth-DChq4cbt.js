import { b as u } from "./three-fiber-GW7QWJN8.js";
import { br as r, b_ as n } from "./index-Dh9039MG.js";
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
