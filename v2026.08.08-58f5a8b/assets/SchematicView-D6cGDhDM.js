const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SchematicCanvas-DxSozhG8.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-CcT_niyD.js","assets/three-drei-DdHLxnbx.js","assets/index-D4g8y8C6.css","assets/Viewport-cLE7xDs1.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-r_zjQeO8.js","assets/index-C2pfJrwu.js","assets/camera-settings-store-BMPz8UL-.js","assets/timeline-sample-CGUCnv8-.js","assets/xr-collab-DA5WHK31.js","assets/pcb-interference-D-jt2V7v.js","assets/adapter-BA8pXygB.js","assets/CircuitAnalysisPanel-e6yUE1Wm.js"])))=>i.map(i=>d[i]);
import { _ as r } from "./three-drei-DdHLxnbx.js";
import { k as o, b as i } from "./three-fiber-GW7QWJN8.js";
import { u as e, __tla as __tla_0 } from "./Viewport-cLE7xDs1.js";
import "./three-tnxpQXqG.js";
import { __tla as __tla_1 } from "./index-CcT_niyD.js";
import "./sub-feature-geometry-tgU-o6Qd.js";
import "./three-postprocessing-r_zjQeO8.js";
import "./index-C2pfJrwu.js";
import "./camera-settings-store-BMPz8UL-.js";
import "./timeline-sample-CGUCnv8-.js";
import "./xr-collab-DA5WHK31.js";
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
  const s = i.lazy(() => r(() => import("./SchematicCanvas-DxSozhG8.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then((t) => ({
    default: t.SchematicCanvas
  }))), m = i.lazy(() => r(() => import("./CircuitAnalysisPanel-e6yUE1Wm.js"), __vite__mapDeps([15,1,2,3,4,5])).then((t) => ({
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
