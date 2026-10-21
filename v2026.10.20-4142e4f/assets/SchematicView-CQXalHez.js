const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SchematicCanvas-C48HKpeS.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-CF9msCJo.js","assets/three-drei-B7JBl7yq.js","assets/index-D4JVGUuO.css","assets/Viewport-C3cTa-rX.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-r_zjQeO8.js","assets/index-H_OcW-5V.js","assets/camera-settings-store-CiSlse5R.js","assets/timeline-sample-MHKhnT3T.js","assets/xr-collab-p6HTWCvE.js","assets/pcb-interference-D-jt2V7v.js","assets/CircuitAnalysisPanel-CVYh29A8.js"])))=>i.map(i=>d[i]);
import { _ as r } from "./three-drei-B7JBl7yq.js";
import { k as o, b as i } from "./three-fiber-GW7QWJN8.js";
import { u as e, __tla as __tla_0 } from "./Viewport-C3cTa-rX.js";
import "./three-tnxpQXqG.js";
import { __tla as __tla_1 } from "./index-CF9msCJo.js";
import "./sub-feature-geometry-tgU-o6Qd.js";
import "./three-postprocessing-r_zjQeO8.js";
import "./index-H_OcW-5V.js";
import "./camera-settings-store-CiSlse5R.js";
import "./timeline-sample-MHKhnT3T.js";
import "./xr-collab-p6HTWCvE.js";
import "./pcb-interference-D-jt2V7v.js";
let E;
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
  const s = i.lazy(() => r(() => import("./SchematicCanvas-C48HKpeS.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then((t) => ({
    default: t.SchematicCanvas
  }))), m = i.lazy(() => r(() => import("./CircuitAnalysisPanel-CVYh29A8.js"), __vite__mapDeps([14,1,2,3,4,5])).then((t) => ({
    default: t.CircuitAnalysisPanel
  })));
  E = function() {
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
  E as SchematicView,
  __tla
};
