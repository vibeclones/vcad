var e = () => {
  window.va || (window.va = function(...e2) {
    window.vaq || (window.vaq = []), window.vaq.push(e2);
  });
}, t = `@vercel/analytics`, n = `2.0.1`;
function r() {
  return typeof window < `u`;
}
function i() {
  return `production`;
}
function a(e2 = `auto`) {
  e2 === `auto` ? window.vam = i() : window.vam = e2;
}
function o() {
  return (r() ? window.vam : i()) || `production`;
}
function s() {
  return o() === `development`;
}
function c(e2) {
  return e2.scriptSrc ? u(e2.scriptSrc) : s() ? `https://va.vercel-scripts.com/v1/script.debug.js` : e2.basePath ? u(`${e2.basePath}/insights/script.js`) : `/_vercel/insights/script.js`;
}
function l(e2, r2) {
  var _a;
  let i2 = e2;
  if (r2) try {
    i2 = { ...(_a = JSON.parse(r2)) == null ? void 0 : _a.analytics, ...e2 };
  } catch {
  }
  a(i2.mode);
  let o2 = { sdkn: t + (i2.framework ? `/${i2.framework}` : ``), sdkv: n };
  return i2.disableAutoTrack && (o2.disableAutoTrack = `1`), i2.viewEndpoint && (o2.viewEndpoint = u(i2.viewEndpoint)), i2.eventEndpoint && (o2.eventEndpoint = u(i2.eventEndpoint)), i2.sessionEndpoint && (o2.sessionEndpoint = u(i2.sessionEndpoint)), s() && i2.debug === false && (o2.debug = `false`), i2.dsn && (o2.dsn = i2.dsn), i2.endpoint ? o2.endpoint = i2.endpoint : i2.basePath && (o2.endpoint = u(`${i2.basePath}/insights`)), { beforeSend: i2.beforeSend, src: c(i2), dataset: o2 };
}
function u(e2) {
  return e2.startsWith(`http://`) || e2.startsWith(`https://`) || e2.startsWith(`/`) ? e2 : `/${e2}`;
}
function d(t2 = { debug: true }, n2) {
  var i2;
  if (!r()) return;
  let { beforeSend: a2, src: o2, dataset: c2 } = l(t2, n2);
  if (e(), a2 && ((i2 = window.va) == null || i2.call(window, `beforeSend`, a2)), document.head.querySelector(`script[src*="${o2}"]`)) return;
  let u2 = document.createElement(`script`);
  u2.src = o2;
  for (let [e2, t3] of Object.entries(c2)) u2.dataset[e2] = t3;
  u2.defer = true, u2.onerror = () => {
    let e2 = s() ? `Please check if any ad blockers are enabled and try again.` : `Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.`;
    console.log(`[Vercel Web Analytics] Failed to load script from ${o2}. ${e2}`);
  }, document.head.appendChild(u2);
}
export {
  d as inject
};
