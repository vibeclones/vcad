import { Z as e } from "./dist-CKOzv-X0.js";
function t(t2) {
  let n = e.getState();
  n.clearSelection(), t2.selectedPartIds.length === 1 && t2.selectedPartIds[0] ? n.select(t2.selectedPartIds[0]) : t2.selectedPartIds.length > 1 && n.selectMultiple(t2.selectedPartIds), typeof window < `u` && window.dispatchEvent(new CustomEvent(`vcad:apply-viewer-state`, { detail: t2.camera }));
}
export {
  t as applyViewerStateHint
};
