import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t } from "./three-drei-_EcrAYRL.js";
import { Z as n } from "./dist-CKOzv-X0.js";
var r = e(t(), 1), i = typeof window < `u` ? window.matchMedia(`(prefers-color-scheme: dark)`) : null;
function a(e2) {
  return i == null ? void 0 : i.addEventListener(`change`, e2), () => i == null ? void 0 : i.removeEventListener(`change`, e2);
}
function o() {
  return (i == null ? void 0 : i.matches) ?? true;
}
function s() {
  let e2 = n((e3) => e3.theme), t2 = n((e3) => e3.toggleTheme), i2 = (0, r.useSyncExternalStore)(a, o, () => true);
  return { theme: e2, toggleTheme: t2, isDark: e2 === `system` ? i2 : e2 === `dark` };
}
export {
  s as t
};
