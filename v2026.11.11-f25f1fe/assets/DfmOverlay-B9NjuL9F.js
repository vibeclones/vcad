import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { t as r } from "./Warning.es-ByPDIdad.js";
import { n as i, t as a } from "./XCircle.es-B_E2sDE5.js";
import { t as o } from "./Info.es-D2p_p8Bm.js";
import { r as s } from "./slicer-store-orSryVNf.js";
import { I as c, __tla as __tla_0 } from "./dist-DCVtPzLm.js";
import { n as l } from "./printer-store-C2Ol7jzV.js";
import { t as u } from "./preload-helper-H3bccnwO.js";
let h;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var d = e(t(), 1), f = n(), p = null;
  async function m() {
    if (p) return p;
    try {
      let e2 = await u(() => import("./vcad_kernel_wasm-CZ4lc4bq.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      return p = e2, e2;
    } catch {
      return null;
    }
  }
  h = function() {
    let [e2, t2] = (0, d.useState)(null), [, n2] = (0, d.useState)(false), u2 = s((e3) => e3.printPanelOpen), p2 = c((e3) => e3.scene), h2 = l((e3) => e3.selectedPrinter), g = (0, d.useCallback)(async () => {
      var _a;
      if ((_a = p2 == null ? void 0 : p2.parts) == null ? void 0 : _a.length) {
        n2(true);
        try {
          let e3 = await m();
          if (!e3) return;
          let n3 = e3.checkPrintability;
          if (!n3) return;
          let r2 = p2.parts[0];
          if (!(r2 == null ? void 0 : r2.solid)) {
            t2(null);
            return;
          }
          let i2 = (h2 == null ? void 0 : h2.id) || `generic`, a2 = n3(r2.solid, i2);
          t2(a2);
        } catch {
          t2(null);
        } finally {
          n2(false);
        }
      }
    }, [
      p2,
      h2
    ]);
    if ((0, d.useEffect)(() => {
      u2 ? g() : t2(null);
    }, [
      u2,
      g
    ]), !u2 || !e2 || e2.warnings.length === 0) return null;
    let _ = (e3) => {
      switch (e3) {
        case `Error`:
          return (0, f.jsx)(a, {
            size: 14,
            className: `text-red-400 flex-shrink-0`
          });
        case `Warning`:
          return (0, f.jsx)(r, {
            size: 14,
            className: `text-orange-400 flex-shrink-0`
          });
        default:
          return (0, f.jsx)(o, {
            size: 14,
            className: `text-blue-400 flex-shrink-0`
          });
      }
    }, v = e2.score >= 80 ? `text-green-400` : e2.score >= 50 ? `text-orange-400` : `text-red-400`;
    return (0, f.jsxs)(`div`, {
      className: `fixed top-16 left-4 w-72 bg-surface border border-border rounded-lg shadow-lg z-30 max-h-64 overflow-y-auto`,
      children: [
        (0, f.jsxs)(`div`, {
          className: `flex items-center justify-between p-2 border-b border-border`,
          children: [
            (0, f.jsxs)(`div`, {
              className: `flex items-center gap-1.5`,
              children: [
                (0, f.jsx)(i, {
                  size: 16,
                  className: v
                }),
                (0, f.jsxs)(`span`, {
                  className: `text-xs font-medium`,
                  children: [
                    `Printability: `,
                    (0, f.jsxs)(`span`, {
                      className: v,
                      children: [
                        e2.score,
                        `/100`
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, f.jsxs)(`span`, {
              className: `text-xs text-text-muted`,
              children: [
                e2.warnings.length,
                ` issue`,
                e2.warnings.length === 1 ? `` : `s`
              ]
            })
          ]
        }),
        (0, f.jsx)(`div`, {
          className: `p-1.5 space-y-1`,
          children: e2.warnings.map((e3, t3) => (0, f.jsxs)(`div`, {
            className: `flex items-start gap-1.5 p-1.5 rounded hover:bg-hover text-xs`,
            children: [
              _(e3.severity),
              (0, f.jsxs)(`div`, {
                children: [
                  (0, f.jsx)(`div`, {
                    className: `text-text`,
                    children: e3.message
                  }),
                  e3.suggestion && (0, f.jsx)(`div`, {
                    className: `text-text-muted mt-0.5`,
                    children: e3.suggestion
                  })
                ]
              })
            ]
          }, t3))
        })
      ]
    });
  };
});
export {
  h as DfmOverlay,
  __tla
};
