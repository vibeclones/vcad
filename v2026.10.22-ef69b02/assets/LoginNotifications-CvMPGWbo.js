import { b as v } from "./three-fiber-DvYcInOp.js";
import { g as m } from "./index-DYo2o8YT.js";
import "./three-tnxpQXqG.js";
import "./three-drei-B9AdtZoT.js";
function u() {
  const n = m((t) => t.toast);
  return v.useEffect(() => {
    const t = (e) => {
      const { firstName: r, provider: i } = e.detail, c = i && i !== "email" ? ` via ${i}` : "";
      n.success(`Signed in as ${r}${c}`);
    }, s = () => {
      n.info("Signed out");
    }, o = (e) => {
      n.info(`Sending sign-in link to ${e.detail.email}\u2026`, { duration: 2500 });
    }, a = (e) => {
      n.success(`Magic link sent to ${e.detail.email}. Check your inbox.`);
    }, d = (e) => {
      n.error(`Sign-in failed: ${e.detail.message}`);
    };
    return window.addEventListener("vcad:sign-in-success", t), window.addEventListener("vcad:sign-out", s), window.addEventListener("vcad:sign-in-attempt", o), window.addEventListener("vcad:sign-in-attempt-sent", a), window.addEventListener("vcad:sign-in-attempt-failed", d), () => {
      window.removeEventListener("vcad:sign-in-success", t), window.removeEventListener("vcad:sign-out", s), window.removeEventListener("vcad:sign-in-attempt", o), window.removeEventListener("vcad:sign-in-attempt-sent", a), window.removeEventListener("vcad:sign-in-attempt-failed", d);
    };
  }, [n]), null;
}
export {
  u as LoginNotifications
};
