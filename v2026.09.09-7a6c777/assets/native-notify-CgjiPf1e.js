const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-AyPCVw85.js","assets/index-BZXLWVKC.js","assets/three-drei-BkUUjjN5.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-gl-vjbWI.css"])))=>i.map(i=>d[i]);
import { _ as e } from "./three-drei-BkUUjjN5.js";
import { bR as o, __tla as __tla_0 } from "./index-BZXLWVKC.js";
import "./three-fiber-GW7QWJN8.js";
import "./three-tnxpQXqG.js";
let f, m;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let r = null, n = null;
  async function s() {
    return r !== null ? r : n || (n = (async () => {
      try {
        const t = await e(() => import("./index-AyPCVw85.js"), __vite__mapDeps([0,1,2,3,4,5]));
        let i = await t.isPermissionGranted();
        return i || (i = await t.requestPermission() === "granted"), r = i, i;
      } catch {
        return r = false, false;
      } finally {
        n = null;
      }
    })(), n);
  }
  f = async function(t) {
    if (o()) try {
      if (!await s()) return;
      (await e(() => import("./index-AyPCVw85.js"), __vite__mapDeps([0,1,2,3,4,5]))).sendNotification({
        title: t.title,
        body: t.body
      });
    } catch (i) {
      console.warn("[notify] native notification failed:", i);
    }
  };
  m = async function(t) {
    o() && (typeof document < "u" && document.visibilityState === "visible" || await f(t));
  };
});
export {
  __tla,
  f as notify,
  m as notifyIfBackgrounded
};
