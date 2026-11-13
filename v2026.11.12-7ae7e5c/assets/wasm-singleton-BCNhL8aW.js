const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/__vite-browser-external-D2U8RZpp.js","assets/rolldown-runtime-COiEfhsA.js"])))=>i.map(i=>d[i]);
import { i as e, n as t } from "./rolldown-runtime-COiEfhsA.js";
import { t as n } from "./preload-helper-DoZ3lUKv.js";
let r, m, l, u;
let __tla = (async () => {
  let i, a, o, s, c;
  r = t({
    getKernelWasm: () => u,
    primeKernelWasm: () => l
  });
  i = null;
  a = null;
  s = false;
  c = 0;
  l = function(e2) {
    s ? console.warn(`[wasm-singleton] primeKernelWasm called after init started \u2014 ignored`) : o = e2;
  };
  u = async function() {
    return a || (i || (i = d()), i);
  };
  async function d() {
    let t2 = await n(() => import("./vcad_kernel_wasm-DeOXXisY.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), []);
    if (typeof process < `u` && process.versions != null && process.versions.node != null) {
      let r2 = o;
      o = void 0;
      let i2 = (e2) => typeof Response > `u` || !(e2 instanceof Response), a2;
      if (r2 && i2(r2)) a2 = r2;
      else {
        let t3 = await n(() => import("./__vite-browser-external-D2U8RZpp.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((t4) => e(t4.default, 1)), __vite__mapDeps([0,1])), r3 = await n(() => import("./__vite-browser-external-D2U8RZpp.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((t4) => e(t4.default, 1)), __vite__mapDeps([0,1])), i3 = await n(() => import("./__vite-browser-external-D2U8RZpp.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((t4) => e(t4.default, 1)), __vite__mapDeps([0,1])), o2 = r3.fileURLToPath(import.meta.url), s2 = i3.join(i3.dirname(o2), `..`, `..`, `kernel-wasm`, `vcad_kernel_wasm_bg.wasm`);
        a2 = t3.readFileSync(s2);
      }
      s = true, t2.initSync({
        module: a2
      });
    } else {
      s = true;
      let e2 = o;
      o = void 0, e2 && typeof Response < `u` && e2 instanceof Response, await t2.default(e2 ? {
        module_or_path: e2
      } : void 0);
    }
    return p(t2), a = t2, c++, t2;
  }
  var f = [
    `evaluateDocument`,
    `documentDiff`,
    `documentMerge`,
    `documentToLoon`,
    `documentToLoonChecked`
  ];
  function p(e2) {
    let t2 = f.filter((t3) => typeof e2[t3] != `function`);
    if (t2.length > 0) {
      let n2 = typeof e2.get_kernel_version == `function` ? e2.get_kernel_version() : `unknown`;
      throw Error(`stale @vcad/kernel-wasm bundle (kernel version ${n2}): missing required bindings ${t2.join(`, `)} \u2014 rebuild the workspace (VCAD_WASM_SKIP unset) or update to a current bundle`);
    }
  }
  m = function() {
    return a;
  };
})();
export {
  __tla,
  r as i,
  m as n,
  l as r,
  u as t
};
