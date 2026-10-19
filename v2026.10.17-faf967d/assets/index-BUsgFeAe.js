import { ch as i } from "./index-Dh9039MG.js";
import "./three-drei-vHRsxLlW.js";
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
