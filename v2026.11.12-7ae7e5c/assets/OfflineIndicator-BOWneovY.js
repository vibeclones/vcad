import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./WifiSlash.es-CIN27_aU.js";
import { M as n, O as r } from "./three-drei-_EcrAYRL.js";
import { E as i } from "./dist-CKOzv-X0.js";
import { n as a } from "./locale-store-CxcppLg_.js";
var o = e(n(), 1);
function s() {
  let [e2, t2] = (0, o.useState)(typeof navigator < `u` ? navigator.onLine : true), n2 = (0, o.useCallback)(() => t2(true), []), r2 = (0, o.useCallback)(() => t2(false), []);
  return (0, o.useEffect)(() => (window.addEventListener(`online`, n2), window.addEventListener(`offline`, r2), () => {
    window.removeEventListener(`online`, n2), window.removeEventListener(`offline`, r2);
  }), [n2, r2]), { isOnline: e2, isOffline: !e2 };
}
var c = r();
function l() {
  let { isOffline: e2 } = s();
  return a((e3) => e3.locale), e2 ? (0, c.jsxs)(`div`, { className: `fixed bottom-3 left-3 z-40 flex items-center gap-2 px-3 py-1.5 bg-warning/10 border border-warning/30 text-warning text-xs`, children: [(0, c.jsx)(t, { size: 14, weight: `bold` }), (0, c.jsx)(`span`, { children: i(`status.offline`) })] }) : null;
}
export {
  l as OfflineIndicator
};
