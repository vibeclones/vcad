import { a9 as e } from "./index-CcT_niyD.js";
function n() {
  const o = e();
  if (!o) throw new Error("documentToLoon requires the kernel WASM module \u2014 call getKernelWasm() during app init before converting documents to loon");
  if (typeof o.documentToLoon != "function" || typeof o.documentToLoonChecked != "function") throw new Error("kernel WASM bundle is missing the documentToLoon bindings \u2014 rebuild @vcad/kernel-wasm (stale bundle)");
  return o;
}
function t(o) {
  return n().documentToLoonChecked(JSON.stringify(o));
}
export {
  t as d
};
