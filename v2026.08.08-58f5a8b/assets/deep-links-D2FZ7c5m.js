const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D3Pnreqs.js","assets/index-CcT_niyD.js","assets/three-drei-DdHLxnbx.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-D4g8y8C6.css"])))=>i.map(i=>d[i]);
import { _ as a } from "./three-drei-DdHLxnbx.js";
import { bR as r, c2 as o, c3 as s, __tla as __tla_0 } from "./index-CcT_niyD.js";
import "./three-fiber-GW7QWJN8.js";
import "./three-tnxpQXqG.js";
let f;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let n = false;
  async function c(e) {
    if (o(e)) {
      const t = await s(e);
      t.ok || (console.warn("[deep-link] auth callback failed:", t.error), window.dispatchEvent(new CustomEvent("vcad:auth-callback-failed", {
        detail: {
          error: t.error
        }
      })));
      return;
    }
    window.dispatchEvent(new CustomEvent("vcad:deep-link", {
      detail: {
        url: e
      }
    }));
  }
  f = async function() {
    if (!n && (n = true, !!r())) try {
      const { onOpenUrl: e } = await a(async () => {
        const { onOpenUrl: t } = await import("./index-D3Pnreqs.js");
        return {
          onOpenUrl: t
        };
      }, __vite__mapDeps([0,1,2,3,4,5]));
      await e((t) => {
        for (const i of t) c(i);
      });
    } catch (e) {
      console.warn("[deep-link] setup failed:", e);
    }
  };
});
export {
  __tla,
  f as installDeepLinkListener
};
