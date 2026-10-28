const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SchematicCanvas-BnVMpGHx.js","assets/three-fiber-DvYcInOp.js","assets/three-tnxpQXqG.js","assets/index-BkIlMx7Q.js","assets/three-drei-CTUAgrap.js","assets/index-CaVsa28i.css","assets/Viewport-YeIqv6Er.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-DulYNr-h.js","assets/index-ClRGfgpL.js","assets/camera-settings-store-Dvlp4GzI.js","assets/timeline-sample-Bp0BrK2T.js","assets/xr-collab-B0xsIXjx.js","assets/pcb-interference-D-jt2V7v.js","assets/CircuitAnalysisPanel-C5JGZ6Np.js"])))=>i.map(i=>d[i]);
import { _ as r } from "./three-drei-CTUAgrap.js";
import { k as o, b as i } from "./three-fiber-DvYcInOp.js";
import { u as e, __tla as __tla_0 } from "./Viewport-YeIqv6Er.js";
import "./three-tnxpQXqG.js";
import { __tla as __tla_1 } from "./index-BkIlMx7Q.js";
import "./sub-feature-geometry-tgU-o6Qd.js";
import "./three-postprocessing-DulYNr-h.js";
import "./index-ClRGfgpL.js";
import "./camera-settings-store-Dvlp4GzI.js";
import "./timeline-sample-Bp0BrK2T.js";
import "./xr-collab-B0xsIXjx.js";
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
  const s = i.lazy(() => r(() => import("./SchematicCanvas-BnVMpGHx.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then((t) => ({
    default: t.SchematicCanvas
  }))), m = i.lazy(() => r(() => import("./CircuitAnalysisPanel-C5JGZ6Np.js"), __vite__mapDeps([14,1,2,3,4,5])).then((t) => ({
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
