import { b as o } from "./three-fiber-DvYcInOp.js";
import { b as u, d as f, e as a, g as l } from "./index-DYo2o8YT.js";
import "./three-tnxpQXqG.js";
import "./three-drei-B9AdtZoT.js";
function v() {
  const S = u((e) => e.user), d = u((e) => e.isAnonymous), c = !!S && !d, n = f((e) => e.syncStatus), r = a((e) => e.hasSeenFirstSync), i = a((e) => e.markFirstSyncSeen), s = l((e) => e.addToast), t = o.useRef(n);
  return o.useEffect(() => {
    const e = (m) => {
      const { firstName: y } = m.detail;
      s(`Welcome, ${y}! Your work now syncs to the cloud.`, "success", 6e3);
    };
    return window.addEventListener("vcad:welcome-sign-in", e), () => {
      window.removeEventListener("vcad:welcome-sign-in", e);
    };
  }, [s]), o.useEffect(() => {
    if (!c || r) {
      t.current = n;
      return;
    }
    t.current === "syncing" && n === "synced" && (i(), s("Documents synced to cloud", "success")), t.current = n;
  }, [c, n, r, i, s]), null;
}
export {
  v as SignInDelight
};
