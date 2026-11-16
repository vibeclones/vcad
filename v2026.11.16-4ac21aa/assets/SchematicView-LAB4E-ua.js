const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SchematicCanvas-DAjfp_9o.js","assets/rolldown-runtime-COiEfhsA.js","assets/three-drei-_EcrAYRL.js","assets/three-Dweqhmle.js","assets/dist-D9_WanPk.js","assets/dist-MczQd_yy.js","assets/wasm-singleton-Bqk2CJkl.js","assets/preload-helper-elKoTz8Y.js","assets/react-Cf1qM0wN.js","assets/electronics-store-BBX0OU47.js","assets/useTheme-CwVKiAR_.js","assets/symbol-library-BAMkXgDz.js","assets/CircuitAnalysisPanel-D0pqhdqC.js","assets/X.es-eqQvie4c.js","assets/SSRBase.es-DslTvOt6.js","assets/Play.es-CbJ_KDSj.js","assets/Warning.es-ByPDIdad.js","assets/circuit-analysis-kB2vynAs.js","assets/circuit-build-JZPuzV3I.js"])))=>i.map(i=>d[i]);
import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { t as r } from "./useTheme-CwVKiAR_.js";
import { t as i } from "./preload-helper-elKoTz8Y.js";
let l;
let __tla = (async () => {
  var a = e(t(), 1), o = n(), s = (0, a.lazy)(() => i(() => import("./SchematicCanvas-DAjfp_9o.js").then(async (m) => {
    await m.__tla;
    return m;
  }).then((e2) => ({
    default: e2.SchematicCanvas
  })), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))), c = (0, a.lazy)(() => i(() => import("./CircuitAnalysisPanel-D0pqhdqC.js").then(async (m) => {
    await m.__tla;
    return m;
  }).then((e2) => ({
    default: e2.CircuitAnalysisPanel
  })), __vite__mapDeps([12,1,2,3,13,14,15,16,9,8,4,5,6,7,17,18])));
  l = function() {
    let { isDark: e2 } = r();
    return (0, o.jsx)(`div`, {
      className: `absolute inset-0 z-20 overflow-hidden`,
      style: {
        backgroundColor: e2 ? `#0a0a0a` : `#ffffff`
      },
      children: (0, o.jsxs)(a.Suspense, {
        fallback: null,
        children: [
          (0, o.jsx)(s, {}),
          (0, o.jsx)(c, {})
        ]
      })
    });
  };
})();
export {
  l as SchematicView,
  __tla
};
