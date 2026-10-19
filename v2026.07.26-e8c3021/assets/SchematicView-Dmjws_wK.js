const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SchematicCanvas-B_T-2s8Q.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-DrmFSLOx.js","assets/three-drei-CC2TnYIC.js","assets/index-DqEkx6ky.css","assets/Viewport-OAxh8CyF.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-r_zjQeO8.js","assets/index-COhyxsGg.js","assets/camera-settings-store-DR7-L-bW.js","assets/timeline-sample-CGUCnv8-.js","assets/xr-collab-BLlqBax8.js","assets/pcb-interference-D-jt2V7v.js","assets/adapter-BA8pXygB.js","assets/CircuitAnalysisPanel-CFQ240ah.js"])))=>i.map(i=>d[i]);
import { _ as r } from "./three-drei-CC2TnYIC.js";
import { k as o, b as i } from "./three-fiber-GW7QWJN8.js";
import { u as e, __tla as __tla_0 } from "./Viewport-OAxh8CyF.js";
import "./three-tnxpQXqG.js";
import { __tla as __tla_1 } from "./index-DrmFSLOx.js";
import "./sub-feature-geometry-tgU-o6Qd.js";
import "./three-postprocessing-r_zjQeO8.js";
import "./index-COhyxsGg.js";
import "./camera-settings-store-DR7-L-bW.js";
import "./timeline-sample-CGUCnv8-.js";
import "./xr-collab-BLlqBax8.js";
import "./pcb-interference-D-jt2V7v.js";
import "./adapter-BA8pXygB.js";
let b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const s = i.lazy(() => r(() => import("./SchematicCanvas-B_T-2s8Q.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then((t) => ({
    default: t.SchematicCanvas
  }))), m = i.lazy(() => r(() => import("./CircuitAnalysisPanel-CFQ240ah.js"), __vite__mapDeps([15,1,2,3,4,5])).then((t) => ({
    default: t.CircuitAnalysisPanel
  })));
  b = function() {
    const { isDark: t } = e(), a = t ? "#0a0a0a" : "#ffffff";
    return o.jsx("div", {
      className: "absolute inset-0 z-20 overflow-hidden",
      style: {
        backgroundColor: a
      },
      children: o.jsxs(i.Suspense, {
        fallback: null,
        children: [
          o.jsx(s, {}),
          o.jsx(m, {})
        ]
      })
    });
  };
});
export {
  b as SchematicView,
  __tla
};
