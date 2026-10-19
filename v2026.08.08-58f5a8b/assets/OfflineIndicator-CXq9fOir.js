import { b as t, k as o } from "./three-fiber-GW7QWJN8.js";
import { m as s } from "./WifiSlash.es-BfmAfqCq.js";
import { bf as a, aX as f } from "./index-9ryf29cW.js";
import "./three-tnxpQXqG.js";
import "./three-drei-DdHLxnbx.js";
function l() {
  const [e, n] = t.useState(typeof navigator < "u" ? navigator.onLine : true), i = t.useCallback(() => n(true), []), r = t.useCallback(() => n(false), []);
  return t.useEffect(() => (window.addEventListener("online", i), window.addEventListener("offline", r), () => {
    window.removeEventListener("online", i), window.removeEventListener("offline", r);
  }), [i, r]), { isOnline: e, isOffline: !e };
}
function x() {
  const { isOffline: e } = l();
  return a((n) => n.locale), e ? o.jsxs("div", { className: "fixed bottom-3 left-3 z-40 flex items-center gap-2 px-3 py-1.5 bg-warning/10 border border-warning/30 text-warning text-xs", children: [o.jsx(s, { size: 14, weight: "bold" }), o.jsx("span", { children: f("status.offline") })] }) : null;
}
export {
  x as OfflineIndicator
};
