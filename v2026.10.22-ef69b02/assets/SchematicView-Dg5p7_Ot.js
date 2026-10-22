const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SchematicCanvas-DyCnxEjZ.js","assets/three-fiber-DvYcInOp.js","assets/three-tnxpQXqG.js","assets/index-DYo2o8YT.js","assets/three-drei-B9AdtZoT.js","assets/index-B-jReDxj.css","assets/Viewport-BfpYzH5N.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-DulYNr-h.js","assets/index-DgjyMUb0.js","assets/camera-settings-store-CuM3JHb6.js","assets/timeline-sample-DOpBIj1k.js","assets/xr-collab-D1EUhp3o.js","assets/pcb-interference-D-jt2V7v.js","assets/CircuitAnalysisPanel-eFouJBdy.js"])))=>i.map(i=>d[i]);
import { _ as r } from "./three-drei-B9AdtZoT.js";
import { k as o, b as i } from "./three-fiber-DvYcInOp.js";
import { u as e, __tla as __tla_0 } from "./Viewport-BfpYzH5N.js";
import "./three-tnxpQXqG.js";
import { __tla as __tla_1 } from "./index-DYo2o8YT.js";
import "./sub-feature-geometry-tgU-o6Qd.js";
import "./three-postprocessing-DulYNr-h.js";
import "./index-DgjyMUb0.js";
import "./camera-settings-store-CuM3JHb6.js";
import "./timeline-sample-DOpBIj1k.js";
import "./xr-collab-D1EUhp3o.js";
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
  const s = i.lazy(() => r(() => import("./SchematicCanvas-DyCnxEjZ.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then((t) => ({
    default: t.SchematicCanvas
  }))), m = i.lazy(() => r(() => import("./CircuitAnalysisPanel-eFouJBdy.js"), __vite__mapDeps([14,1,2,3,4,5])).then((t) => ({
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
