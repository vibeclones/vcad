const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-uCjsQAVk.js","assets/index-CcT_niyD.js","assets/three-drei-DdHLxnbx.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-D4g8y8C6.css"])))=>i.map(i=>d[i]);
import { _ as s } from "./three-drei-DdHLxnbx.js";
import { bR as i, bm as e, __tla as __tla_0 } from "./index-CcT_niyD.js";
import "./three-fiber-GW7QWJN8.js";
import "./three-tnxpQXqG.js";
let d, h;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let r = false;
  d = async function(o = {}) {
    if (i()) try {
      const { check: t } = await s(async () => {
        const { check: c } = await import("./index-uCjsQAVk.js");
        return {
          check: c
        };
      }, __vite__mapDeps([0,1,2,3,4,5])), a = await t();
      if (!a) {
        o.announceIfUpToDate && e.getState().addToast("vcad is up to date.", "info");
        return;
      }
      const n = e.getState();
      n.addToast(`Update available: v${a.version}. Downloading\u2026`, "info", 8e3), await a.downloadAndInstall(), n.addToast("Update installed. Restart vcad to apply.", "success", 0);
    } catch (t) {
      console.warn("[updater] check failed:", t), o.announceIfUpToDate && e.getState().addToast("Couldn't check for updates. Check your connection.", "error");
    }
  };
  h = function() {
    r || (r = true, i() && setTimeout(() => {
      d();
    }, 5e3));
  };
});
export {
  __tla,
  d as checkForUpdates,
  h as scheduleStartupUpdateCheck
};
