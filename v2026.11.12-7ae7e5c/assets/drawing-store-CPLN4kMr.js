import { t as e } from "./react-Cf1qM0wN.js";
var t = 0.1, n = 10, r = e((e2, r2) => ({ viewMode: `3d`, viewDirection: `front`, showHiddenLines: true, showDimensions: true, zoom: 1, pan: { x: 0, y: 0 }, detailViews: [], nextDetailId: 1, setViewMode: (t2) => e2({ viewMode: t2 }), setViewDirection: (t2) => e2({ viewDirection: t2, pan: { x: 0, y: 0 }, zoom: 1 }), toggleHiddenLines: () => e2((e3) => ({ showHiddenLines: !e3.showHiddenLines })), toggleDimensions: () => e2((e3) => ({ showDimensions: !e3.showDimensions })), setZoom: (r3) => e2({ zoom: Math.max(t, Math.min(n, r3)) }), adjustZoom: (r3) => e2((e3) => ({ zoom: Math.max(t, Math.min(n, e3.zoom * (1 + r3))) })), setPan: (t2) => e2({ pan: t2 }), adjustPan: (t2, n2) => e2((e3) => ({ pan: { x: e3.pan.x + t2, y: e3.pan.y + n2 } })), resetView: () => e2({ zoom: 1, pan: { x: 0, y: 0 } }), addDetailView: (t2) => {
  let n2 = r2(), i = `detail-${n2.nextDetailId}`;
  return e2({ detailViews: [...n2.detailViews, { ...t2, id: i }], nextDetailId: n2.nextDetailId + 1 }), i;
}, removeDetailView: (t2) => e2((e3) => ({ detailViews: e3.detailViews.filter((e4) => e4.id !== t2) })), updateDetailView: (t2, n2) => e2((e3) => ({ detailViews: e3.detailViews.map((e4) => e4.id === t2 ? { ...e4, ...n2 } : e4) })), clearDetailViews: () => e2({ detailViews: [] }) }));
export {
  r as t
};
