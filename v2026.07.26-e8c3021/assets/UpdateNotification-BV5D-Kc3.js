import { b as a } from "./three-fiber-GW7QWJN8.js";
import { _ as h } from "./three-drei-CC2TnYIC.js";
import { bY as m, bu as g, __tla as __tla_0 } from "./index-DrmFSLOx.js";
import "./three-tnxpQXqG.js";
let A;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function w(n = {}) {
    const { immediate: r = false, onNeedRefresh: c, onOfflineReady: i, onRegistered: f, onRegisteredSW: d, onRegisterError: s } = n;
    let e, o, l;
    const u = async (t = true) => {
      await o, l == null ? void 0 : l();
    };
    async function R() {
      if ("serviceWorker" in navigator) {
        if (e = await h(async () => {
          const { Workbox: t } = await import("./workbox-window.prod.es5-BIl4cyR9.js");
          return {
            Workbox: t
          };
        }, []).then(({ Workbox: t }) => new t("/vcad/v2026.07.26-e8c3021/sw.js", {
          scope: "/vcad/v2026.07.26-e8c3021/",
          type: "classic"
        })).catch((t) => {
          s == null ? void 0 : s(t);
        }), !e) return;
        l = () => {
          e == null ? void 0 : e.messageSkipWaiting();
        };
        {
          let t = false;
          const v = () => {
            t = true, e == null ? void 0 : e.addEventListener("controlling", (p) => {
              p.isUpdate && window.location.reload();
            }), c == null ? void 0 : c();
          };
          e.addEventListener("installed", (p) => {
            typeof p.isUpdate > "u" ? typeof p.isExternal < "u" && p.isExternal ? v() : !t && (i == null ? void 0 : i()) : p.isUpdate || (i == null ? void 0 : i());
          }), e.addEventListener("waiting", v);
        }
        e.register({
          immediate: r
        }).then((t) => {
          d ? d("/vcad/v2026.07.26-e8c3021/sw.js", t) : f == null ? void 0 : f(t);
        }).catch((t) => {
          s == null ? void 0 : s(t);
        });
      }
    }
    return o = R(), u;
  }
  function S(n = {}) {
    const { immediate: r = true, onNeedRefresh: c, onOfflineReady: i, onRegistered: f, onRegisteredSW: d, onRegisterError: s } = n, [e, o] = a.useState(false), [l, u] = a.useState(false), [R] = a.useState(() => w({
      immediate: r,
      onOfflineReady() {
        u(true), i == null ? void 0 : i();
      },
      onNeedRefresh() {
        o(true), c == null ? void 0 : c();
      },
      onRegistered: f,
      onRegisteredSW: d,
      onRegisterError: s
    }));
    return {
      needRefresh: [
        e,
        o
      ],
      offlineReady: [
        l,
        u
      ],
      updateServiceWorker: R
    };
  }
  const b = "https://github.com/ecto/vcad/releases/latest/download/latest.json", y = 3600 * 1e3;
  function E(n, r) {
    const c = (s) => s.replace(/^v/, "").split(/[.+-]/).map((e) => parseInt(e, 10) || 0), i = c(n), f = c(r), d = Math.max(i.length, f.length);
    for (let s = 0; s < d; s++) {
      const e = i[s] ?? 0, o = f[s] ?? 0;
      if (e > o) return true;
      if (e < o) return false;
    }
    return false;
  }
  function k() {
    const n = a.useRef(null), [r, c] = a.useState(null), [i, f] = a.useState(null), { offlineReady: [d, s], updateServiceWorker: e } = S({
      onRegisteredSW(l, u) {
        u && (n.current && clearInterval(n.current), n.current = setInterval(() => u.update(), y));
      }
    });
    return a.useEffect(() => {
      if (m()) return;
      let l = false;
      const u = async () => {
        try {
          const t = await fetch(b, {
            cache: "no-store"
          });
          if (!t.ok) return;
          const v = await t.json();
          !l && typeof v.version == "string" && c(v.version);
        } catch {
        }
      };
      u();
      const R = setInterval(u, y);
      return () => {
        l = true, clearInterval(R);
      };
    }, []), a.useEffect(() => () => {
      n.current && (clearInterval(n.current), n.current = null);
    }, []), {
      updateAvailable: r !== null && r !== i && E(r, "0.0.0"),
      offlineReady: d,
      applyUpdate: a.useCallback(() => e(true), [
        e
      ]),
      dismissUpdate: a.useCallback(() => f(r), [
        r
      ]),
      dismissOfflineReady: a.useCallback(() => s(false), [
        s
      ]),
      version: "0.0.0",
      buildTime: "2026-10-19T17:16:08.143Z",
      latestTagVersion: r
    };
  }
  A = function() {
    const { updateAvailable: n, offlineReady: r, applyUpdate: c, dismissUpdate: i, dismissOfflineReady: f } = k(), d = g((l) => l.showWarning), s = g((l) => l.toast), e = a.useRef(false), o = a.useRef(false);
    return a.useEffect(() => {
      n && !e.current && (e.current = true, d({
        category: "suggestion",
        title: "Update Available",
        description: "A new version of vcad is ready.",
        actions: [
          {
            label: "Refresh Now",
            variant: "primary",
            onClick: () => c()
          },
          {
            label: "Later",
            variant: "secondary",
            onClick: () => i()
          }
        ]
      }));
    }, [
      n,
      d,
      c,
      i
    ]), a.useEffect(() => {
      r && !o.current && (o.current = true, s.success("App ready for offline use"), f());
    }, [
      r,
      s,
      f
    ]), null;
  };
});
export {
  A as UpdateNotification,
  __tla
};
