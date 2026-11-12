import { t as e } from "./react-Cf1qM0wN.js";
import { t } from "./middleware-CJ9hWF1h.js";
import { n, t as r } from "./dist-_2fbu5WV.js";
var i = e()(t((e2, t2) => ({ viewedEntryIds: /* @__PURE__ */ new Set(), lastSeenVersion: null, panelOpen: false, selectedEntryId: null, filterCategory: `all`, getUnreadCount: () => {
  let { viewedEntryIds: e3 } = t2();
  return n.entries.filter((t3) => !e3.has(t3.id)).length;
}, getUnreadEntries: () => {
  let { viewedEntryIds: e3 } = t2();
  return n.entries.filter((t3) => !e3.has(t3.id));
}, getFilteredEntries: () => {
  let { filterCategory: e3 } = t2();
  return e3 === `all` ? n.entries : n.entries.filter((t3) => t3.category === e3);
}, openPanel: () => e2({ panelOpen: true }), closePanel: () => e2({ panelOpen: false, selectedEntryId: null }), togglePanel: () => e2((e3) => ({ panelOpen: !e3.panelOpen, selectedEntryId: e3.panelOpen ? null : e3.selectedEntryId })), selectEntry: (n2) => {
  e2({ selectedEntryId: n2 }), n2 && t2().markEntryViewed(n2);
}, markEntryViewed: (t3) => e2((e3) => ({ viewedEntryIds: /* @__PURE__ */ new Set([...e3.viewedEntryIds, t3]) })), markAllViewed: () => e2({ viewedEntryIds: new Set(n.entries.map((e3) => e3.id)), lastSeenVersion: r }), setFilter: (t3) => e2({ filterCategory: t3 }) }), { name: `vcad-changelog`, partialize: (e2) => ({ viewedEntryIds: Array.from(e2.viewedEntryIds), lastSeenVersion: e2.lastSeenVersion }), merge: (e2, t2) => {
  let n2 = e2;
  return { ...t2, viewedEntryIds: new Set((n2 == null ? void 0 : n2.viewedEntryIds) ?? []), lastSeenVersion: (n2 == null ? void 0 : n2.lastSeenVersion) ?? null };
} }));
export {
  i as t
};
