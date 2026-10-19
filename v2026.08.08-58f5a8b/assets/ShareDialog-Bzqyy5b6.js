const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UsernamePickerModal-BXs_VIcx.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-CcT_niyD.js","assets/three-drei-DdHLxnbx.js","assets/index-D4g8y8C6.css","assets/WarningCircle.es-B58BbrZE.js"])))=>i.map(i=>d[i]);
import { _ as B } from "./three-drei-DdHLxnbx.js";
import { b as a, k as e } from "./three-fiber-GW7QWJN8.js";
import { bj as L, b4 as U, bB as G, bC as z, bD as H, bE as J, bF as E, bG as O, bH as T, bI as A, bm as y, bp as K, bq as Q, br as W, bs as X, bt as Y, bg as Z, bJ as ee, bu as te, bh as u, bK as se, bL as ae, bM as re, bN as oe, __tla as __tla_0 } from "./index-CcT_niyD.js";
import "./three-tnxpQXqG.js";
let be;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ne = a.lazy(() => B(() => import("./UsernamePickerModal-BXs_VIcx.js"), __vite__mapDeps([0,1,2,3,4,5,6])).then((i) => ({
    default: i.UsernamePickerModal
  })));
  function le(i, x, S, k) {
    const h = i && x ? `${window.location.origin}/@${i.username}/${x}` : `${window.location.origin}/view/${S}`;
    if (!k) return h;
    const b = re(), c = oe(b);
    return `${h}?at=${c}`;
  }
  be = function({ open: i, onOpenChange: x }) {
    const S = L((t) => t.user), k = L((t) => t.isAnonymous), h = !!S && !k, b = U((t) => t.documentId), c = U((t) => t.documentName), [n, C] = a.useState(null), [F, j] = a.useState(false), [r, m] = a.useState(null), [l, v] = a.useState(null), [f, p] = a.useState(null), [$, g] = a.useState(false), [P, I] = a.useState(false), [R, D] = a.useState(false);
    a.useEffect(() => {
      if (!i || !b) {
        j(false), C(null), m(null), v(null), p(null);
        return;
      }
      let t = false;
      return (async () => {
        try {
          const [s, o] = await Promise.all([
            G(b),
            z()
          ]);
          if (t) return;
          if (C((s == null ? void 0 : s.cloudId) ?? null), v(o), j(true), s == null ? void 0 : s.cloudId) {
            const d = await H(s.cloudId);
            !t && d.length > 0 && d[0] && m(d[0]);
          }
        } catch (s) {
          console.error("[share-dialog] lookup failed:", s), t || j(true);
        }
      })(), () => {
        t = true;
      };
    }, [
      i,
      b
    ]);
    const M = a.useCallback(async () => {
      if (n) {
        if (!r && !l) {
          D(true);
          return;
        }
        g(true);
        try {
          if (r) await J(r.token), m(null), p(null);
          else {
            const t = E(c || "untitled");
            l && (await O(n, t, "public"), p(t));
            const s = await T(n);
            m(s), l && await A(s.token, l.username, t).catch(() => {
            });
          }
        } catch (t) {
          console.error("[share-dialog] toggle failed:", t), y.getState().toast.error(`Share action failed: ${t.message}`);
        } finally {
          g(false);
        }
      }
    }, [
      n,
      r,
      l,
      c
    ]), V = a.useCallback(async (t) => {
      const s = await z();
      if (v(s), n && !r) {
        g(true);
        try {
          const o = E(c || "untitled");
          await O(n, o, "public"), p(o);
          const d = await T(n);
          m(d), s && await A(d.token, s.username, o).catch(() => {
          });
        } catch (o) {
          console.error("[share-dialog] post-username share failed:", o), y.getState().toast.error(`Share failed: ${o.message}`);
        } finally {
          g(false);
        }
      }
    }, [
      n,
      r,
      c
    ]), _ = a.useCallback(async (t) => {
      if (!r) return;
      const s = le(l, f, r.token, t);
      try {
        await navigator.clipboard.writeText(s), I(true), y.getState().toast.success(t ? "Link copied with current view" : "Link copied"), setTimeout(() => I(false), 1500);
      } catch (o) {
        console.error("[share-dialog] clipboard write failed:", o), y.getState().toast.error("Could not copy to clipboard");
      }
    }, [
      r,
      l,
      f
    ]), N = h ? F && !n ? "Save this document to the cloud before sharing." : null : "Sign in to share this document.", w = !!r, q = r ? l && f ? `${window.location.origin}/@${l.username}/${f}` : `${window.location.origin}/view/${r.token}` : "";
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(K, {
          open: i,
          onOpenChange: x,
          children: e.jsxs(Q, {
            children: [
              e.jsx(W, {
                className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              }),
              e.jsxs(X, {
                "data-tauri-drag-region": "",
                className: u("fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2", "rounded-xl border border-border bg-surface p-6 shadow-xl select-none", "focus:outline-none"),
                children: [
                  e.jsx(Y, {
                    className: "absolute right-3 top-3 p-1.5 text-text-muted hover:text-text transition-colors cursor-pointer",
                    children: e.jsx(Z, {
                      size: 14
                    })
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mb-5",
                    children: [
                      e.jsx(ee, {
                        size: 14,
                        className: "text-brand"
                      }),
                      e.jsxs(te, {
                        className: "text-sm font-semibold text-text truncate",
                        children: [
                          "Share ",
                          c || "document"
                        ]
                      })
                    ]
                  }),
                  N && e.jsx("div", {
                    className: "text-xs text-text-muted py-4",
                    children: N
                  }),
                  !N && e.jsxs(e.Fragment, {
                    children: [
                      e.jsxs("label", {
                        className: "flex items-center justify-between gap-3 py-3 border-t border-b border-border",
                        children: [
                          e.jsx("span", {
                            className: "text-xs text-text",
                            children: "Anyone with the link can view"
                          }),
                          e.jsx("button", {
                            type: "button",
                            role: "switch",
                            "aria-checked": w,
                            disabled: $,
                            onClick: M,
                            className: u("relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors", w ? "bg-brand" : "bg-border", $ && "opacity-50 cursor-wait"),
                            children: e.jsx("span", {
                              className: u("inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform", w ? "translate-x-5" : "translate-x-1")
                            })
                          })
                        ]
                      }),
                      w && e.jsxs("div", {
                        className: "mt-4 space-y-2",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("input", {
                                type: "text",
                                readOnly: true,
                                value: q,
                                onFocus: (t) => t.currentTarget.select(),
                                className: u("flex-1 min-w-0 px-2 py-1.5 text-[11px] font-mono", "bg-bg border border-border text-text", "focus:outline-none focus:border-brand")
                              }),
                              e.jsxs("button", {
                                type: "button",
                                onClick: () => _(false),
                                className: u("flex items-center gap-1 px-2 py-1.5 text-[11px] font-medium", "bg-brand text-white hover:bg-brand/90 transition-colors"),
                                children: [
                                  P ? e.jsx(se, {
                                    size: 12
                                  }) : e.jsx(ae, {
                                    size: 12
                                  }),
                                  e.jsx("span", {
                                    children: P ? "Copied" : "Copy"
                                  })
                                ]
                              })
                            ]
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => _(true),
                            className: u("w-full text-left px-2 py-1.5 text-[11px]", "text-text-muted hover:text-text hover:bg-hover transition-colors", "border border-dashed border-border"),
                            title: "Includes camera, selection, and active feature in the URL",
                            children: "Copy with current view \u2192"
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-text-muted/80 leading-relaxed pt-1",
                            children: "Viewers can see this document read-only. They'll be prompted to sign in and fork if they try to edit."
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),
        e.jsx(a.Suspense, {
          fallback: null,
          children: e.jsx(ne, {
            open: R,
            onOpenChange: D,
            onComplete: V
          })
        })
      ]
    });
  };
});
export {
  be as ShareDialog,
  __tla
};
