var e = () => {
  window.si || (window.si = function(...e2) {
    window.siq = window.siq || [], window.siq.push(e2);
  });
}, t = `@vercel/speed-insights`, n = `2.0.0`;
function r() {
  return typeof window < `u`;
}
function i() {
  return `production`;
}
function a() {
  return i() === `development`;
}
function o(e2) {
  return e2.scriptSrc ? c(e2.scriptSrc) : a() ? `https://va.vercel-scripts.com/v1/speed-insights/script.debug.js` : e2.dsn ? `https://va.vercel-scripts.com/v1/speed-insights/script.js` : e2.basePath ? c(`${e2.basePath}/speed-insights/script.js`) : `/_vercel/speed-insights/script.js`;
}
function s(e2, r2) {
  var _a;
  let i2 = e2;
  if (r2) try {
    i2 = { ...(_a = JSON.parse(r2)) == null ? void 0 : _a.speedInsights, ...e2 };
  } catch {
  }
  let s2 = { sdkn: t + (i2.framework ? `/${i2.framework}` : ``), sdkv: n };
  return i2.sampleRate && (s2.sampleRate = i2.sampleRate.toString()), i2.route && (s2.route = i2.route), a() && i2.debug === false && (s2.debug = `false`), i2.dsn && (s2.dsn = i2.dsn), i2.endpoint ? s2.endpoint = c(i2.endpoint) : i2.basePath && (s2.endpoint = c(`${i2.basePath}/speed-insights/vitals`)), { src: o(i2), beforeSend: i2.beforeSend, dataset: s2 };
}
function c(e2) {
  return e2.startsWith(`http://`) || e2.startsWith(`https://`) || e2.startsWith(`/`) ? e2 : `/${e2}`;
}
function l(t2 = {}, n2) {
  var i2;
  if (!r() || t2.route === null) return null;
  e();
  let { beforeSend: a2, src: o2, dataset: c2 } = s(t2, n2);
  if (document.head.querySelector(`script[src*="${o2}"]`)) return null;
  a2 && ((i2 = window.si) == null || i2.call(window, `beforeSend`, a2));
  let l2 = document.createElement(`script`);
  l2.src = o2, l2.defer = true;
  for (let [e2, t3] of Object.entries(c2)) l2.dataset[e2] = t3;
  return l2.onerror = () => {
    console.log(`[Vercel Speed Insights] Failed to load script from ${o2}. Please check if any content blockers are enabled and try again.`);
  }, document.head.appendChild(l2), { setRoute: (e2) => {
    l2.dataset.route = e2 ?? void 0;
  } };
}
export {
  l as injectSpeedInsights
};
