import { _ as g } from "./three-drei-B9AdtZoT.js";
import { b as a, k as s } from "./three-fiber-DvYcInOp.js";
import { U as j, V as v, W as b, X as N, Y as y, Z as w, __tla as __tla_0 } from "./index-DYo2o8YT.js";
import { u as P } from "./printer-store-Cefx8mOd.js";
import "./three-tnxpQXqG.js";
let O;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let c = null;
  async function k() {
    if (c) return c;
    try {
      const t = await g(() => import("./vcad_kernel_wasm-6ypbUAoo.js"), []);
      return c = t, t;
    } catch {
      return null;
    }
  }
  O = function() {
    const [t, r] = a.useState(null), [, o] = a.useState(false), i = j((e) => e.printPanelOpen), l = v((e) => e.scene), u = P((e) => e.selectedPrinter), d = a.useCallback(async () => {
      var _a;
      if ((_a = l == null ? void 0 : l.parts) == null ? void 0 : _a.length) {
        o(true);
        try {
          const e = await k();
          if (!e) return;
          const n = e.checkPrintability;
          if (!n) return;
          const m = l.parts[0];
          if (!(m == null ? void 0 : m.solid)) {
            r(null);
            return;
          }
          const h = (u == null ? void 0 : u.id) || "generic", p = n(m.solid, h);
          r(p);
        } catch {
          r(null);
        } finally {
          o(false);
        }
      }
    }, [
      l,
      u
    ]);
    if (a.useEffect(() => {
      i ? d() : r(null);
    }, [
      i,
      d
    ]), !i || !t || t.warnings.length === 0) return null;
    const f = (e) => {
      switch (e) {
        case "Error":
          return s.jsx(w, {
            size: 14,
            className: "text-red-400 flex-shrink-0"
          });
        case "Warning":
          return s.jsx(y, {
            size: 14,
            className: "text-orange-400 flex-shrink-0"
          });
        default:
          return s.jsx(N, {
            size: 14,
            className: "text-blue-400 flex-shrink-0"
          });
      }
    }, x = t.score >= 80 ? "text-green-400" : t.score >= 50 ? "text-orange-400" : "text-red-400";
    return s.jsxs("div", {
      className: "fixed top-16 left-4 w-72 bg-surface border border-border rounded-lg shadow-lg z-30 max-h-64 overflow-y-auto",
      children: [
        s.jsxs("div", {
          className: "flex items-center justify-between p-2 border-b border-border",
          children: [
            s.jsxs("div", {
              className: "flex items-center gap-1.5",
              children: [
                s.jsx(b, {
                  size: 16,
                  className: x
                }),
                s.jsxs("span", {
                  className: "text-xs font-medium",
                  children: [
                    "Printability: ",
                    s.jsxs("span", {
                      className: x,
                      children: [
                        t.score,
                        "/100"
                      ]
                    })
                  ]
                })
              ]
            }),
            s.jsxs("span", {
              className: "text-xs text-text-muted",
              children: [
                t.warnings.length,
                " issue",
                t.warnings.length !== 1 ? "s" : ""
              ]
            })
          ]
        }),
        s.jsx("div", {
          className: "p-1.5 space-y-1",
          children: t.warnings.map((e, n) => s.jsxs("div", {
            className: "flex items-start gap-1.5 p-1.5 rounded hover:bg-hover text-xs",
            children: [
              f(e.severity),
              s.jsxs("div", {
                children: [
                  s.jsx("div", {
                    className: "text-text",
                    children: e.message
                  }),
                  e.suggestion && s.jsx("div", {
                    className: "text-text-muted mt-0.5",
                    children: e.suggestion
                  })
                ]
              })
            ]
          }, n))
        })
      ]
    });
  };
});
export {
  O as DfmOverlay,
  __tla
};
