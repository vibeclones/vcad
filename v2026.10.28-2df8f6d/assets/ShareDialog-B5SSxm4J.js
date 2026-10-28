const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UsernamePickerModal-DIpRs6fv.js","assets/three-fiber-DvYcInOp.js","assets/three-tnxpQXqG.js","assets/index-BkIlMx7Q.js","assets/three-drei-CTUAgrap.js","assets/index-CaVsa28i.css","assets/WarningCircle.es-DyWGwxwZ.js"])))=>i.map(i=>d[i]);
import { _ as H } from "./three-drei-CTUAgrap.js";
import { b as a, k as e } from "./three-fiber-DvYcInOp.js";
import { b as z, h as O, s as q, v as T, w as B, x as J, y as U, z as E, A as L, D as A, g as y, R as K, P as Q, O as W, C as X, l as Y, f as Z, E as ee, T as te, c as u, F as se, G as ae, H as re, I as oe, __tla as __tla_0 } from "./index-BkIlMx7Q.js";
import "./three-tnxpQXqG.js";
let xe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ne = a.lazy(() => H(() => import("./UsernamePickerModal-DIpRs6fv.js"), __vite__mapDeps([0,1,2,3,4,5,6])).then((i) => ({
    default: i.UsernamePickerModal
  })));
  function le(i, h, S, k) {
    const f = i && h ? `${window.location.origin}/@${i.username}/${h}` : `${window.location.origin}/view/${S}`;
    if (!k) return f;
    const x = re(), c = oe(x);
    return `${f}?at=${c}`;
  }
  xe = function({ open: i, onOpenChange: h }) {
    const S = z((t) => t.user), k = z((t) => t.isAnonymous), f = !!S && !k, x = O((t) => t.documentId), c = O((t) => t.documentName), [n, C] = a.useState(null), [R, j] = a.useState(false), [r, m] = a.useState(null), [l, v] = a.useState(null), [p, b] = a.useState(null), [$, g] = a.useState(false), [P, I] = a.useState(false), [F, D] = a.useState(false);
    a.useEffect(() => {
      if (!i || !x) {
        j(false), C(null), m(null), v(null), b(null);
        return;
      }
      let t = false;
      return (async () => {
        try {
          const [s, o] = await Promise.all([
            q(x),
            T()
          ]);
          if (t) return;
          if (C((s == null ? void 0 : s.cloudId) ?? null), v(o), j(true), s == null ? void 0 : s.cloudId) {
            const d = await B(s.cloudId);
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
      x
    ]);
    const M = a.useCallback(async () => {
      if (n) {
        if (!r && !l) {
          D(true);
          return;
        }
        g(true);
        try {
          if (r) await J(r.token), m(null), b(null);
          else {
            const t = U(c || "untitled");
            l && (await E(n, t, "public"), b(t));
            const s = await L(n);
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
      const s = await T();
      if (v(s), n && !r) {
        g(true);
        try {
          const o = U(c || "untitled");
          await E(n, o, "public"), b(o);
          const d = await L(n);
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
      const s = le(l, p, r.token, t);
      try {
        await navigator.clipboard.writeText(s), I(true), y.getState().toast.success(t ? "Link copied with current view" : "Link copied"), setTimeout(() => I(false), 1500);
      } catch (o) {
        console.error("[share-dialog] clipboard write failed:", o), y.getState().toast.error("Could not copy to clipboard");
      }
    }, [
      r,
      l,
      p
    ]), N = f ? R && !n ? "Save this document to the cloud before sharing." : null : "Sign in to share this document.", w = !!r, G = r ? l && p ? `${window.location.origin}/@${l.username}/${p}` : `${window.location.origin}/view/${r.token}` : "";
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(K, {
          open: i,
          onOpenChange: h,
          children: e.jsxs(Q, {
            children: [
              e.jsx(W, {
                className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              }),
              e.jsxs(X, {
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
                                value: G,
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
            open: F,
            onOpenChange: D,
            onComplete: V
          })
        })
      ]
    });
  };
});
export {
  xe as ShareDialog,
  __tla
};
