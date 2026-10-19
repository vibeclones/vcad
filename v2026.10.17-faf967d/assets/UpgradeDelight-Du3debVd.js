import { b as o } from "./three-fiber-GW7QWJN8.js";
import { bv as r } from "./index-Dh9039MG.js";
import "./three-tnxpQXqG.js";
import "./three-drei-vHRsxLlW.js";
function l() {
  return o.useEffect(() => {
    const e = new URLSearchParams(window.location.search);
    if (e.get("billing") !== "success") return;
    e.delete("billing"), e.delete("session_id");
    const t = e.toString();
    window.history.replaceState({}, "", t ? `${window.location.pathname}?${t}` : window.location.pathname);
    const i = setTimeout(() => {
      window.dispatchEvent(new CustomEvent("vcad:celebrate-upgrade"));
    }, 400);
    return r(), () => clearTimeout(i);
  }, []), null;
}
export {
  l as UpgradeDelight
};
