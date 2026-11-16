import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t } from "./three-drei-_EcrAYRL.js";
import { t as n } from "./notification-store-BYW1uPuc.js";
var r = e(t(), 1);
function i() {
  let e2 = n((e3) => e3.toast);
  return (0, r.useEffect)(() => {
    let t2 = (t3) => {
      let { firstName: n3, provider: r3 } = t3.detail, i3 = r3 && r3 !== `email` ? ` via ${r3}` : ``;
      e2.success(`Signed in as ${n3}${i3}`);
    }, n2 = () => {
      e2.info(`Signed out`);
    }, r2 = (t3) => {
      e2.info(`Sending sign-in link to ${t3.detail.email}\u2026`, { duration: 2500 });
    }, i2 = (t3) => {
      e2.success(`Magic link sent to ${t3.detail.email}. Check your inbox.`);
    }, a = (t3) => {
      e2.error(`Sign-in failed: ${t3.detail.message}`);
    };
    return window.addEventListener(`vcad:sign-in-success`, t2), window.addEventListener(`vcad:sign-out`, n2), window.addEventListener(`vcad:sign-in-attempt`, r2), window.addEventListener(`vcad:sign-in-attempt-sent`, i2), window.addEventListener(`vcad:sign-in-attempt-failed`, a), () => {
      window.removeEventListener(`vcad:sign-in-success`, t2), window.removeEventListener(`vcad:sign-out`, n2), window.removeEventListener(`vcad:sign-in-attempt`, r2), window.removeEventListener(`vcad:sign-in-attempt-sent`, i2), window.removeEventListener(`vcad:sign-in-attempt-failed`, a);
    };
  }, [e2]), null;
}
export {
  i as LoginNotifications
};
