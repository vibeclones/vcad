import { ce as i } from "./index-B2PsV3Ii.js";
import "./three-drei-C9A0_-Vj.js";
import "./three-fiber-GW7QWJN8.js";
import "./three-tnxpQXqG.js";
async function a(n, e) {
  await i("plugin:opener|open_url", { url: n, with: e });
}
async function c(n, e) {
  await i("plugin:opener|open_path", { path: n, with: e });
}
async function s(n) {
  return i("plugin:opener|reveal_item_in_dir", { paths: typeof n == "string" ? [n] : n });
}
export {
  c as openPath,
  a as openUrl,
  s as revealItemInDir
};
