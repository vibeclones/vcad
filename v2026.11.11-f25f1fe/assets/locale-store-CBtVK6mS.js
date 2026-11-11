import { t as e } from "./react-Cf1qM0wN.js";
import { t } from "./middleware-CJ9hWF1h.js";
import { C as n, w as r } from "./dist-DCVtPzLm.js";
var i = e()(t((e2) => ({ locale: `en`, setLocale: (t2) => {
  r(t2), e2({ locale: t2 });
} }), { name: `vcad-locale` }));
function a() {
  var _a;
  let e2 = localStorage.getItem(`vcad-locale`);
  if (e2) try {
    let t3 = JSON.parse(e2);
    if ((_a = t3 == null ? void 0 : t3.state) == null ? void 0 : _a.locale) {
      r(t3.state.locale), i.setState({ locale: t3.state.locale });
      return;
    }
  } catch {
  }
  let t2 = n();
  r(t2), i.setState({ locale: t2 });
}
export {
  i as n,
  a as t
};
