import { b as t, k as r } from "./three-fiber-GW7QWJN8.js";
import { m as s } from "./WifiSlash.es-D9CUM9jQ.js";
import { bo as a, aX as l } from "./index-BCvZCcjD.js";
import "./three-tnxpQXqG.js";
import "./three-drei-en0aG1CM.js";
function f() {
  const [e, n] = t.useState(typeof navigator < "u" ? navigator.onLine : true), i = t.useCallback(() => n(true), []), o = t.useCallback(() => n(false), []);
  return t.useEffect(() => (window.addEventListener("online", i), window.addEventListener("offline", o), () => {
    window.removeEventListener("online", i), window.removeEventListener("offline", o);
  }), [i, o]), { isOnline: e, isOffline: !e };
}
function x() {
  const { isOffline: e } = f();
  return a((n) => n.locale), e ? r.jsxs("div", { className: "fixed bottom-3 left-3 z-40 flex items-center gap-2 px-3 py-1.5 bg-warning/10 border border-warning/30 text-warning text-xs", children: [r.jsx(s, { size: 14, weight: "bold" }), r.jsx("span", { children: l("status.offline") })] }) : null;
}
export {
  x as OfflineIndicator
};
