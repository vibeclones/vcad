import { b as i } from "./three-fiber-DvYcInOp.js";
import { r as o } from "./index-DYo2o8YT.js";
import "./three-tnxpQXqG.js";
import "./three-drei-B9AdtZoT.js";
function l() {
  return i.useEffect(() => {
    const e = new URLSearchParams(window.location.search);
    if (e.get("billing") !== "success") return;
    e.delete("billing"), e.delete("session_id");
    const t = e.toString();
    window.history.replaceState({}, "", t ? `${window.location.pathname}?${t}` : window.location.pathname);
    const r = setTimeout(() => {
      window.dispatchEvent(new CustomEvent("vcad:celebrate-upgrade"));
    }, 400);
    return o(), () => clearTimeout(r);
  }, []), null;
}
export {
  l as UpgradeDelight
};
