import { bZ as c, br as i, c7 as b } from "./index-DrmFSLOx.js";
function p(o, l, u) {
  if (!c()) return null;
  const { user: t } = i.getState();
  if (!t) return null;
  const r = b(), d = `doc:${o}:xr`;
  let n = false, e = r.channel(d, { config: { broadcast: { self: false } } });
  return e.on("broadcast", { event: "pose" }, (s) => {
    const a = s.payload;
    !(a == null ? void 0 : a.pose) || !a.userId || l(a);
  }), e.on("broadcast", { event: "leave" }, (s) => {
    var _a;
    const a = (_a = s.payload) == null ? void 0 : _a.userId;
    a && (u == null ? void 0 : u(a));
  }), e.subscribe((s) => {
    s === "SUBSCRIBED" && (n = true);
  }), { broadcast: (s) => {
    if (!e || !n) return;
    const a = { ...s, userId: t.id, ts: Date.now() };
    e.send({ type: "broadcast", event: "pose", payload: a });
  }, leave: () => {
    e && (n && e.send({ type: "broadcast", event: "leave", payload: { userId: t.id } }), n = false, r.removeChannel(e), e = null);
  } };
}
export {
  p as j
};
