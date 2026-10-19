import { b as o } from "./three-fiber-GW7QWJN8.js";
import { br as u, bs as f, bt as a, bu as l } from "./index-BCvZCcjD.js";
import "./three-tnxpQXqG.js";
import "./three-drei-en0aG1CM.js";
function v() {
  const S = u((e) => e.user), d = u((e) => e.isAnonymous), c = !!S && !d, s = f((e) => e.syncStatus), r = a((e) => e.hasSeenFirstSync), i = a((e) => e.markFirstSyncSeen), n = l((e) => e.addToast), t = o.useRef(s);
  return o.useEffect(() => {
    const e = (m) => {
      const { firstName: y } = m.detail;
      n(`Welcome, ${y}! Your work now syncs to the cloud.`, "success", 6e3);
    };
    return window.addEventListener("vcad:welcome-sign-in", e), () => {
      window.removeEventListener("vcad:welcome-sign-in", e);
    };
  }, [n]), o.useEffect(() => {
    if (!c || r) {
      t.current = s;
      return;
    }
    t.current === "syncing" && s === "synced" && (i(), n("Documents synced to cloud", "success")), t.current = s;
  }, [c, s, r, i, n]), null;
}
export {
  v as SignInDelight
};
