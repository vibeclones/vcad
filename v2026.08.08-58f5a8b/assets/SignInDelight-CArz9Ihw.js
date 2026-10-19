import { b as o } from "./three-fiber-GW7QWJN8.js";
import { bj as u, bk as l, bl as a, bm as f } from "./index-9ryf29cW.js";
import "./three-tnxpQXqG.js";
import "./three-drei-DdHLxnbx.js";
function v() {
  const S = u((e) => e.user), m = u((e) => e.isAnonymous), c = !!S && !m, n = l((e) => e.syncStatus), r = a((e) => e.hasSeenFirstSync), i = a((e) => e.markFirstSyncSeen), s = f((e) => e.addToast), t = o.useRef(n);
  return o.useEffect(() => {
    const e = (d) => {
      const { firstName: y } = d.detail;
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
