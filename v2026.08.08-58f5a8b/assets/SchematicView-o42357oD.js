const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SchematicCanvas-C-geOUFd.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-9ryf29cW.js","assets/three-drei-DdHLxnbx.js","assets/index-D4g8y8C6.css","assets/Viewport-Cct6B0iZ.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-r_zjQeO8.js","assets/index-BSZvQoDh.js","assets/camera-settings-store-BMPz8UL-.js","assets/timeline-sample-CGUCnv8-.js","assets/xr-collab-DwT5BZw7.js","assets/pcb-interference-D-jt2V7v.js","assets/adapter-BA8pXygB.js","assets/CircuitAnalysisPanel-akfB-2Y4.js"])))=>i.map(i=>d[i]);
import { _ as r } from "./three-drei-DdHLxnbx.js";
import { k as o, b as i } from "./three-fiber-GW7QWJN8.js";
import { u as e, __tla as __tla_0 } from "./Viewport-Cct6B0iZ.js";
import "./three-tnxpQXqG.js";
import { __tla as __tla_1 } from "./index-9ryf29cW.js";
import "./sub-feature-geometry-tgU-o6Qd.js";
import "./three-postprocessing-r_zjQeO8.js";
import "./index-BSZvQoDh.js";
import "./camera-settings-store-BMPz8UL-.js";
import "./timeline-sample-CGUCnv8-.js";
import "./xr-collab-DwT5BZw7.js";
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
  const s = i.lazy(() => r(() => import("./SchematicCanvas-C-geOUFd.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then((t) => ({
    default: t.SchematicCanvas
  }))), m = i.lazy(() => r(() => import("./CircuitAnalysisPanel-akfB-2Y4.js"), __vite__mapDeps([15,1,2,3,4,5])).then((t) => ({
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
