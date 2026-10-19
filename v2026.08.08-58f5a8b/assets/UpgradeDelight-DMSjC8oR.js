import { b as n } from "./three-fiber-GW7QWJN8.js";
import { bn as o } from "./index-9ryf29cW.js";
import "./three-tnxpQXqG.js";
import "./three-drei-DdHLxnbx.js";
function l() {
  return n.useEffect(() => {
    const e = new URLSearchParams(window.location.search);
    if (e.get("billing") !== "success") return;
    e.delete("billing"), e.delete("session_id");
    const t = e.toString();
    window.history.replaceState({}, "", t ? `${window.location.pathname}?${t}` : window.location.pathname);
    const i = setTimeout(() => {
      window.dispatchEvent(new CustomEvent("vcad:celebrate-upgrade"));
    }, 400);
    return o(), () => clearTimeout(i);
  }, []), null;
}
export {
  l as UpgradeDelight
};
