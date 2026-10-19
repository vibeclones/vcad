import { ae as o } from "./index-Dh9039MG.js";
function n() {
  const e = o();
  if (!e) throw new Error("documentToLoon requires the kernel WASM module \u2014 call getKernelWasm() during app init before converting documents to loon");
  if (typeof e.documentToLoon != "function" || typeof e.documentToLoonChecked != "function") throw new Error("kernel WASM bundle is missing the documentToLoon bindings \u2014 rebuild @vcad/kernel-wasm (stale bundle)");
  return e;
}
function t(e) {
  return n().documentToLoonChecked(JSON.stringify(e));
}
export {
  t as d
};
