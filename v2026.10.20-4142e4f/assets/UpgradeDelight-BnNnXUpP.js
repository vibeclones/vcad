import { b as i } from "./three-fiber-GW7QWJN8.js";
import { r as o } from "./index-CF9msCJo.js";
import "./three-tnxpQXqG.js";
import "./three-drei-B7JBl7yq.js";
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
