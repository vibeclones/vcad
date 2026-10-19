const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SchematicCanvas-CT3SReB4.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-B2PsV3Ii.js","assets/three-drei-C9A0_-Vj.js","assets/index-BYnp_IFw.css","assets/Viewport-CqeTAZQ8.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-r_zjQeO8.js","assets/index-COhyxsGg.js","assets/camera-settings-store-CtGgLqjZ.js","assets/timeline-sample-CGUCnv8-.js","assets/xr-collab-l_NFo89E.js","assets/pcb-interference-D-jt2V7v.js","assets/adapter-ChvXPDVA.js","assets/CircuitAnalysisPanel-BwrnSFsW.js"])))=>i.map(i=>d[i]);
import { _ as r } from "./three-drei-C9A0_-Vj.js";
import { k as o, b as i } from "./three-fiber-GW7QWJN8.js";
import { u as e, __tla as __tla_0 } from "./Viewport-CqeTAZQ8.js";
import "./three-tnxpQXqG.js";
import { __tla as __tla_1 } from "./index-B2PsV3Ii.js";
import "./sub-feature-geometry-tgU-o6Qd.js";
import "./three-postprocessing-r_zjQeO8.js";
import "./index-COhyxsGg.js";
import "./camera-settings-store-CtGgLqjZ.js";
import "./timeline-sample-CGUCnv8-.js";
import "./xr-collab-l_NFo89E.js";
import "./pcb-interference-D-jt2V7v.js";
import "./adapter-ChvXPDVA.js";
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
  const s = i.lazy(() => r(() => import("./SchematicCanvas-CT3SReB4.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then((t) => ({
    default: t.SchematicCanvas
  }))), m = i.lazy(() => r(() => import("./CircuitAnalysisPanel-BwrnSFsW.js"), __vite__mapDeps([15,1,2,3,4,5])).then((t) => ({
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
