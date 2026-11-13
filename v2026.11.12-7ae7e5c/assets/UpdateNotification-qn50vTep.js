import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t } from "./three-drei-_EcrAYRL.js";
import { t as n } from "./preload-helper-DoZ3lUKv.js";
import { t as r } from "./notification-store-BYW1uPuc.js";
let h;
let __tla = (async () => {
  var i = e(t()), a = `false`, o = `false`, s = a === `true`, c = o === `true`;
  function l(e2 = {}) {
    let { immediate: t2 = false, onNeedRefresh: r2, onOfflineReady: i2, onRegistered: a2, onRegisteredSW: o2, onRegisterError: l2 } = e2, u2, d2, f2, p2 = async (e3 = true) => {
      await d2, s || (f2 == null ? void 0 : f2());
    };
    async function m2() {
      if (`serviceWorker` in navigator) {
        if (u2 = await n(async () => {
          let { Workbox: e3 } = await import("./workbox-window.prod.es5-DG0db3Sr.js").then(async (m3) => {
            await m3.__tla;
            return m3;
          });
          return {
            Workbox: e3
          };
        }, []).then(({ Workbox: e3 }) => new e3(`/vcad/v2026.11.12-7ae7e5c/sw.js`, {
          scope: `/vcad/v2026.11.12-7ae7e5c/`,
          type: `classic`
        })).catch((e3) => {
          l2 == null ? void 0 : l2(e3);
        }), !u2) return;
        if (f2 = () => {
          u2 == null ? void 0 : u2.messageSkipWaiting();
        }, !c) {
          if (s) u2.addEventListener(`activated`, (e3) => {
            (e3.isUpdate || e3.isExternal) && window.location.reload();
          }), u2.addEventListener(`installed`, (e3) => {
            e3.isUpdate || (i2 == null ? void 0 : i2());
          });
          else {
            let e3 = false, t3 = () => {
              e3 = true, u2 == null ? void 0 : u2.addEventListener(`controlling`, (e4) => {
                e4.isUpdate && window.location.reload();
              }), r2 == null ? void 0 : r2();
            };
            u2.addEventListener(`installed`, (n2) => {
              n2.isUpdate === void 0 ? n2.isExternal === void 0 ? !e3 && (i2 == null ? void 0 : i2()) : n2.isExternal ? t3() : !e3 && (i2 == null ? void 0 : i2()) : n2.isUpdate || (i2 == null ? void 0 : i2());
            }), u2.addEventListener(`waiting`, t3);
          }
        }
        u2.register({
          immediate: t2
        }).then((e3) => {
          o2 ? o2(`/vcad/v2026.11.12-7ae7e5c/sw.js`, e3) : a2 == null ? void 0 : a2(e3);
        }).catch((e3) => {
          l2 == null ? void 0 : l2(e3);
        });
      }
    }
    return d2 = m2(), p2;
  }
  function u(e2 = {}) {
    let { immediate: t2 = true, onNeedRefresh: n2, onOfflineReady: r2, onRegistered: a2, onRegisteredSW: o2, onRegisterError: s2 } = e2, [c2, u2] = (0, i.useState)(false), [d2, f2] = (0, i.useState)(false), [p2] = (0, i.useState)(() => l({
      immediate: t2,
      onOfflineReady() {
        f2(true), r2 == null ? void 0 : r2();
      },
      onNeedRefresh() {
        u2(true), n2 == null ? void 0 : n2();
      },
      onRegistered: a2,
      onRegisteredSW: o2,
      onRegisterError: s2
    }));
    return {
      needRefresh: [
        c2,
        u2
      ],
      offlineReady: [
        d2,
        f2
      ],
      updateServiceWorker: p2
    };
  }
  var d = `https://github.com/ecto/vcad/releases/latest/download/latest.json`, f = 36e5;
  function p(e2, t2) {
    let n2 = (e3) => e3.replace(/^v/, ``).split(/[.+-]/).map((e4) => parseInt(e4, 10) || 0), r2 = n2(e2), i2 = n2(t2), a2 = Math.max(r2.length, i2.length);
    for (let e3 = 0; e3 < a2; e3++) {
      let t3 = r2[e3] ?? 0, n3 = i2[e3] ?? 0;
      if (t3 > n3) return true;
      if (t3 < n3) return false;
    }
    return false;
  }
  function m() {
    let e2 = (0, i.useRef)(null), [t2, n2] = (0, i.useState)(null), [r2, a2] = (0, i.useState)(null), { offlineReady: [o2, s2], updateServiceWorker: c2 } = u({
      onRegisteredSW(t3, n3) {
        n3 && (e2.current && clearInterval(e2.current), e2.current = setInterval(() => n3.update(), f));
      }
    });
    return (0, i.useEffect)(() => {
      let e3 = false, t3 = async () => {
        try {
          let t4 = await fetch(d, {
            cache: `no-store`
          });
          if (!t4.ok) return;
          let r4 = await t4.json();
          !e3 && typeof r4.version == `string` && n2(r4.version);
        } catch {
        }
      };
      t3();
      let r3 = setInterval(t3, f);
      return () => {
        e3 = true, clearInterval(r3);
      };
    }, []), (0, i.useEffect)(() => () => {
      e2.current && (e2.current = (clearInterval(e2.current), null));
    }, []), {
      updateAvailable: t2 !== null && t2 !== r2 && p(t2, `0.0.0`),
      offlineReady: o2,
      applyUpdate: (0, i.useCallback)(() => c2(true), [
        c2
      ]),
      dismissUpdate: (0, i.useCallback)(() => a2(t2), [
        t2
      ]),
      dismissOfflineReady: (0, i.useCallback)(() => s2(false), [
        s2
      ]),
      version: `0.0.0`,
      buildTime: `2026-11-13T15:30:41.479Z`,
      latestTagVersion: t2
    };
  }
  h = function() {
    let { updateAvailable: e2, offlineReady: t2, applyUpdate: n2, dismissUpdate: a2, dismissOfflineReady: o2 } = m(), s2 = r((e3) => e3.showWarning), c2 = r((e3) => e3.toast), l2 = (0, i.useRef)(false), u2 = (0, i.useRef)(false);
    return (0, i.useEffect)(() => {
      e2 && !l2.current && (l2.current = true, s2({
        category: `suggestion`,
        title: `Update Available`,
        description: `A new version of vcad is ready.`,
        actions: [
          {
            label: `Refresh Now`,
            variant: `primary`,
            onClick: () => n2()
          },
          {
            label: `Later`,
            variant: `secondary`,
            onClick: () => a2()
          }
        ]
      }));
    }, [
      e2,
      s2,
      n2,
      a2
    ]), (0, i.useEffect)(() => {
      t2 && !u2.current && (u2.current = true, c2.success(`App ready for offline use`), o2());
    }, [
      t2,
      c2,
      o2
    ]), null;
  };
})();
export {
  h as UpdateNotification,
  __tla
};
