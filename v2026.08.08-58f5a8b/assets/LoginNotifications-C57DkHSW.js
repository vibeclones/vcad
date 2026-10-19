import { b as m } from "./three-fiber-GW7QWJN8.js";
import { bm as l } from "./index-9ryf29cW.js";
import { notify as c } from "./native-notify-8ZV2Ss5X.js";
import "./three-tnxpQXqG.js";
import "./three-drei-DdHLxnbx.js";
function E() {
  const t = l((n) => n.toast);
  return m.useEffect(() => {
    const n = (e) => {
      const { firstName: r, provider: i } = e.detail, v = i && i !== "email" ? ` via ${i}` : "";
      t.success(`Signed in as ${r}${v}`), c({ title: "vcad \u2014 Signed in", body: `Welcome back, ${r}.` });
    }, o = () => {
      t.info("Signed out");
    }, s = (e) => {
      t.info(`Sending sign-in link to ${e.detail.email}\u2026`, { duration: 2500 });
    }, d = (e) => {
      t.success(`Magic link sent to ${e.detail.email}. Check your inbox.`);
    }, a = (e) => {
      t.error(`Sign-in failed: ${e.detail.message}`), c({ title: "vcad \u2014 Sign-in failed", body: e.detail.message });
    };
    return window.addEventListener("vcad:sign-in-success", n), window.addEventListener("vcad:sign-out", o), window.addEventListener("vcad:sign-in-attempt", s), window.addEventListener("vcad:sign-in-attempt-sent", d), window.addEventListener("vcad:sign-in-attempt-failed", a), () => {
      window.removeEventListener("vcad:sign-in-success", n), window.removeEventListener("vcad:sign-out", o), window.removeEventListener("vcad:sign-in-attempt", s), window.removeEventListener("vcad:sign-in-attempt-sent", d), window.removeEventListener("vcad:sign-in-attempt-failed", a);
    };
  }, [t]), null;
}
export {
  E as LoginNotifications
};
