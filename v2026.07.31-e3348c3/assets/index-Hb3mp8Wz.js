import { ce as n, cj as r } from "./index-BCvZCcjD.js";
import "./three-drei-en0aG1CM.js";
import "./three-fiber-GW7QWJN8.js";
import "./three-tnxpQXqG.js";
async function s() {
  return await n("plugin:deep-link|get_current");
}
async function o(e) {
  return await n("plugin:deep-link|register", { protocol: e });
}
async function c(e) {
  return await n("plugin:deep-link|unregister", { protocol: e });
}
async function l(e) {
  return await n("plugin:deep-link|is_registered", { protocol: e });
}
async function g(e) {
  return await r("deep-link://new-url", (i) => {
    e(i.payload);
  });
}
export {
  s as getCurrent,
  l as isRegistered,
  g as onOpenUrl,
  o as register,
  c as unregister
};
