import { cb as t, cc as r, c8 as a } from "./index-BZXLWVKC.js";
import "./three-drei-BkUUjjN5.js";
import "./three-fiber-GW7QWJN8.js";
import "./three-tnxpQXqG.js";
class l extends t {
  constructor(e) {
    super(e.rid), this.available = true, this.currentVersion = e.currentVersion, this.version = e.version, this.date = e.date, this.body = e.body, this.rawJson = e.rawJson;
  }
  async download(e, s) {
    i(s);
    const d = new r();
    e && (d.onmessage = e);
    const o = await a("plugin:updater|download", { onEvent: d, rid: this.rid, ...s });
    this.downloadedBytes = new t(o);
  }
  async install() {
    if (!this.downloadedBytes) throw new Error("Update.install called before Update.download");
    await a("plugin:updater|install", { updateRid: this.rid, bytesRid: this.downloadedBytes.rid }), this.downloadedBytes = void 0;
  }
  async downloadAndInstall(e, s) {
    i(s);
    const d = new r();
    e && (d.onmessage = e), await a("plugin:updater|download_and_install", { onEvent: d, rid: this.rid, ...s });
  }
  async close() {
    var _a;
    await ((_a = this.downloadedBytes) == null ? void 0 : _a.close()), await super.close();
  }
}
async function y(n) {
  i(n);
  const e = await a("plugin:updater|check", { ...n });
  return e ? new l(e) : null;
}
function i(n) {
  (n == null ? void 0 : n.headers) && (n.headers = Array.from(new Headers(n.headers).entries()));
}
export {
  l as Update,
  y as check
};
