const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EmbroideryProperties--i_I07Fu.js","assets/rolldown-runtime-COiEfhsA.js","assets/three-drei-_EcrAYRL.js","assets/three-Dweqhmle.js","assets/scrub-input-CqhdypAa.js","assets/SSRBase.es-DslTvOt6.js","assets/Plus.es-BDPop4l-.js","assets/utils-D0T3A-kS.js","assets/tooltip-i4xVbcXN.js","assets/dist-Dt-xZb1V.js","assets/dist-CKOzv-X0.js","assets/dist-D-hjKoV0.js","assets/wasm-singleton-BCNhL8aW.js","assets/preload-helper-DoZ3lUKv.js","assets/react-Cf1qM0wN.js"])))=>i.map(i=>d[i]);
import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n, S as r, h as i, r as a } from "./three-drei-_EcrAYRL.js";
import { t as o } from "./X.es-eqQvie4c.js";
import { t as s } from "./CaretLeft.es-BVpMgA2k.js";
import { n as c } from "./tooltip-i4xVbcXN.js";
import { t as l } from "./scrub-input-CqhdypAa.js";
import { i as u, n as d, t as f } from "./shaders-5Rx5fzkr.js";
import { D as p, Dt as m, E as h, G as g, I as _, J as v, N as y, O as b, St as x, Z as S, _t as C, at as w, bt as ee, c as te, ct as ne, ft as re, gt as T, ht as ie, lt as ae, mt as oe, o as se, ot as ce, pt as le, s as ue, st as de, ut as fe, vt as pe, xt as me, __tla as __tla_0 } from "./dist-CKOzv-X0.js";
import { Y as he, on as ge, wn as E } from "./three-Dweqhmle.js";
import { i as _e, n as ve, r as ye } from "./sub-feature-geometry-DGED74Qo.js";
import { n as D } from "./locale-store-CxcppLg_.js";
import { t as O } from "./electronics-store-CeuBsncA.js";
import { n as be } from "./embroidery-store-88XXKNEp.js";
import { t as k } from "./utils-D0T3A-kS.js";
import { t as A } from "./MagnifyingGlass.es-MOWF6F1V.js";
import { t as j } from "./Plus.es-BDPop4l-.js";
import { t as M } from "./Clock.es-CyAHvBxl.js";
import { t as N } from "./Star.es-B4mWkvnp.js";
import { a as P, i as xe, n as Se, r as F, t as I } from "./materials-CddkfdE3.js";
import { a as Ce, i as we, n as Te, o as L, r as Ee, s as R, t as De } from "./dialog-CadIY03y.js";
import { t as Oe } from "./CaretDown.es-BSeMeOxB.js";
import { t as ke } from "./preload-helper-DoZ3lUKv.js";
let St;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var z = e(t(), 1), B = n();
  function Ae() {
    let e2 = O((e3) => e3.selection), t2 = O((e3) => e3.netlist), n2 = b((e3) => e3.activeBoardNodeId), r2 = v((e3) => e3.document), i2 = n2 == null ? null : g(r2, n2);
    if (e2.type === `component` || e2.type === `footprint`) return (0, B.jsx)(je, {
      compRef: e2.ref
    }, e2.ref);
    if (e2.type === `net`) {
      let n3 = e2.netId, r3 = t2 == null ? void 0 : t2.nets.find((e3) => e3.name === n3), a2 = (i2 == null ? void 0 : i2.traces.filter((e3) => e3.net === n3).length) ?? 0, o2 = ((i2 == null ? void 0 : i2.traces) ?? []).filter((e3) => e3.net === n3).reduce((e3, t3) => {
        let n4 = t3.end.x - t3.start.x, r4 = t3.end.y - t3.start.y;
        return e3 + Math.hypot(n4, r4);
      }, 0);
      return (0, B.jsxs)(V, {
        children: [
          (0, B.jsx)(`div`, {
            className: `font-medium text-brand mb-2`,
            children: n3
          }),
          (0, B.jsxs)(`div`, {
            className: `space-y-1 text-text-muted`,
            children: [
              (0, B.jsx)(H, {
                label: `Pads`,
                value: String((r3 == null ? void 0 : r3.connections.length) ?? 0)
              }),
              (0, B.jsx)(H, {
                label: `Traces`,
                value: String(a2)
              }),
              (0, B.jsx)(H, {
                label: `Total Length`,
                value: `${o2.toFixed(2)}mm`
              }),
              r3 && r3.connections.length > 0 && (0, B.jsxs)(`div`, {
                className: `pt-1 border-t border-border mt-1`,
                children: [
                  (0, B.jsx)(`div`, {
                    className: `text-[10px] text-text-muted mb-0.5`,
                    children: `Connections:`
                  }),
                  r3.connections.slice(0, 8).map((e3, t3) => (0, B.jsxs)(`div`, {
                    className: `text-[10px]`,
                    children: [
                      e3.component_ref,
                      `.`,
                      e3.pin_number
                    ]
                  }, t3)),
                  r3.connections.length > 8 && (0, B.jsxs)(`div`, {
                    className: `text-[9px] text-text-muted`,
                    children: [
                      `+`,
                      r3.connections.length - 8,
                      ` more`
                    ]
                  })
                ]
              })
            ]
          })
        ]
      });
    }
    if (e2.type === `trace`) {
      let t3 = i2 == null ? void 0 : i2.traces[e2.idx];
      if (!t3) return null;
      let n3 = t3.end.x - t3.start.x, r3 = t3.end.y - t3.start.y, a2 = Math.hypot(n3, r3);
      return (0, B.jsxs)(V, {
        children: [
          (0, B.jsxs)(`div`, {
            className: `flex justify-between items-center mb-2`,
            children: [
              (0, B.jsx)(`span`, {
                className: `font-medium text-text`,
                children: `Trace`
              }),
              (0, B.jsx)(`button`, {
                className: `px-1.5 py-0.5 text-[10px] text-danger hover:bg-danger/10 rounded transition-colors`,
                onClick: () => {
                  let t4 = b.getState().activeBoardNodeId;
                  t4 != null && v.getState().removeTrace(t4, e2.idx), O.getState().select({
                    type: `none`
                  });
                },
                children: `Delete`
              })
            ]
          }),
          (0, B.jsxs)(`div`, {
            className: `space-y-1 text-text-muted`,
            children: [
              (0, B.jsx)(H, {
                label: `Net`,
                value: t3.net
              }),
              (0, B.jsx)(H, {
                label: `Layer`,
                value: t3.layer
              }),
              (0, B.jsx)(H, {
                label: `Width`,
                value: `${t3.width}mm`
              }),
              (0, B.jsx)(H, {
                label: `Length`,
                value: `${a2.toFixed(2)}mm`
              })
            ]
          })
        ]
      });
    }
    if (e2.type === `via`) {
      let t3 = i2 == null ? void 0 : i2.vias[e2.idx];
      return t3 ? (0, B.jsxs)(V, {
        children: [
          (0, B.jsxs)(`div`, {
            className: `flex justify-between items-center mb-2`,
            children: [
              (0, B.jsx)(`span`, {
                className: `font-medium text-text`,
                children: `Via`
              }),
              (0, B.jsx)(`button`, {
                className: `px-1.5 py-0.5 text-[10px] text-danger hover:bg-danger/10 rounded transition-colors`,
                onClick: () => {
                  let t4 = b.getState().activeBoardNodeId;
                  t4 != null && v.getState().removeVia(t4, e2.idx), O.getState().select({
                    type: `none`
                  });
                },
                children: `Delete`
              })
            ]
          }),
          (0, B.jsxs)(`div`, {
            className: `space-y-1 text-text-muted`,
            children: [
              (0, B.jsx)(H, {
                label: `Net`,
                value: t3.net
              }),
              (0, B.jsx)(H, {
                label: `Diameter`,
                value: `${t3.diameter}mm`
              }),
              (0, B.jsx)(H, {
                label: `Drill`,
                value: `${t3.drill}mm`
              }),
              (0, B.jsx)(H, {
                label: `Layers`,
                value: `${t3.startLayer} - ${t3.endLayer}`
              }),
              (0, B.jsx)(H, {
                label: `Position`,
                value: `${t3.position.x.toFixed(2)}, ${t3.position.y.toFixed(2)}`
              })
            ]
          })
        ]
      }) : null;
    }
    return e2.type === `pad` ? (0, B.jsxs)(V, {
      children: [
        (0, B.jsxs)(`div`, {
          className: `font-medium text-text mb-2`,
          children: [
            e2.fpRef,
            `.`,
            e2.padNum
          ]
        }),
        (0, B.jsx)(`div`, {
          className: `space-y-1 text-text-muted`,
          children: (0, B.jsx)(H, {
            label: `Net`,
            value: e2.net
          })
        })
      ]
    }) : null;
  }
  function je({ compRef: e2 }) {
    let t2 = O((e3) => e3.netlist), n2 = b((e3) => e3.activeBoardNodeId), r2 = v((e3) => e3.document), i2 = n2 == null ? null : g(r2, n2), a2 = r2.schematic, o2 = a2 == null ? void 0 : a2.components.find((t3) => t3.ref === e2), s2 = (a2 == null ? void 0 : a2.components.findIndex((t3) => t3.ref === e2)) ?? -1, c2 = i2 == null ? void 0 : i2.footprints.find((t3) => t3.ref === e2), l2 = (i2 == null ? void 0 : i2.footprints.findIndex((t3) => t3.ref === e2)) ?? -1, [u2, d2] = (0, z.useState)((o2 == null ? void 0 : o2.value) ?? ``), [f2, p2] = (0, z.useState)(String((c2 == null ? void 0 : c2.position.x) ?? 0)), [m2, h2] = (0, z.useState)(String((c2 == null ? void 0 : c2.position.y) ?? 0)), [_2, y2] = (0, z.useState)(String((c2 == null ? void 0 : c2.rotation) ?? 0)), x2 = /* @__PURE__ */ new Set();
    if (t2) {
      for (let n3 of t2.nets) for (let t3 of n3.connections) if (t3.component_ref === e2) {
        x2.add(n3.name);
        break;
      }
    }
    let S2 = () => {
      s2 >= 0 && u2 !== (o2 == null ? void 0 : o2.value) && v.getState().updateSchematicComponent(s2, {
        value: u2
      }, n2 ?? void 0);
    }, C2 = () => {
      let e3 = parseFloat(f2), t3 = parseFloat(m2);
      l2 >= 0 && !isNaN(e3) && !isNaN(t3) && n2 != null && v.getState().moveFootprint(n2, l2, {
        x: e3,
        y: t3,
        z: 0
      });
    }, w2 = () => {
      let e3 = parseFloat(_2);
      if (l2 >= 0 && !isNaN(e3) && e3 !== ((c2 == null ? void 0 : c2.rotation) ?? 0)) {
        let t3 = e3 - ((c2 == null ? void 0 : c2.rotation) ?? 0);
        n2 != null && v.getState().rotateFootprint(n2, l2, t3);
      }
    };
    return (0, B.jsxs)(V, {
      children: [
        (0, B.jsx)(`div`, {
          className: `font-medium text-text mb-2`,
          children: e2
        }),
        (0, B.jsxs)(`div`, {
          className: `space-y-1.5 text-text-muted`,
          children: [
            o2 && (0, B.jsxs)(`div`, {
              className: `flex justify-between items-center`,
              children: [
                (0, B.jsx)(`span`, {
                  children: `Value`
                }),
                (0, B.jsx)(`input`, {
                  type: `text`,
                  value: u2,
                  onChange: (e3) => d2(e3.target.value),
                  onBlur: S2,
                  onKeyDown: (e3) => e3.key === `Enter` && S2(),
                  className: `w-20 text-[11px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right`
                })
              ]
            }),
            c2 && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(H, {
                  label: `Footprint`,
                  value: c2.footprintName
                }),
                (0, B.jsxs)(`div`, {
                  className: `flex justify-between items-center`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: `X`
                    }),
                    (0, B.jsx)(`input`, {
                      type: `number`,
                      value: f2,
                      onChange: (e3) => p2(e3.target.value),
                      onBlur: C2,
                      onKeyDown: (e3) => e3.key === `Enter` && C2(),
                      className: `w-16 text-[11px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right`,
                      step: 0.1
                    })
                  ]
                }),
                (0, B.jsxs)(`div`, {
                  className: `flex justify-between items-center`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: `Y`
                    }),
                    (0, B.jsx)(`input`, {
                      type: `number`,
                      value: m2,
                      onChange: (e3) => h2(e3.target.value),
                      onBlur: C2,
                      onKeyDown: (e3) => e3.key === `Enter` && C2(),
                      className: `w-16 text-[11px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right`,
                      step: 0.1
                    })
                  ]
                }),
                (0, B.jsxs)(`div`, {
                  className: `flex justify-between items-center`,
                  children: [
                    (0, B.jsx)(`span`, {
                      children: `Rotation`
                    }),
                    (0, B.jsx)(`input`, {
                      type: `number`,
                      value: _2,
                      onChange: (e3) => y2(e3.target.value),
                      onBlur: w2,
                      onKeyDown: (e3) => e3.key === `Enter` && w2(),
                      className: `w-16 text-[11px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right`,
                      step: 90
                    })
                  ]
                }),
                (0, B.jsx)(H, {
                  label: `Side`,
                  value: c2.front === false ? `Back` : `Front`
                }),
                (0, B.jsx)(H, {
                  label: `Pads`,
                  value: String(c2.pads.length)
                })
              ]
            }),
            c2 && (0, B.jsx)(Me, {
              compRef: e2
            }),
            x2.size > 0 && (0, B.jsxs)(`div`, {
              className: `pt-1 border-t border-border mt-1`,
              children: [
                (0, B.jsx)(`div`, {
                  className: `text-[10px] text-text-muted mb-0.5`,
                  children: `Nets:`
                }),
                (0, B.jsx)(`div`, {
                  className: `flex flex-wrap gap-1`,
                  children: [
                    ...x2
                  ].map((e3) => (0, B.jsx)(`span`, {
                    className: `px-1 py-0.5 bg-brand/10 text-brand rounded text-[9px] cursor-pointer hover:bg-brand/20`,
                    onClick: () => O.getState().select({
                      type: `net`,
                      netId: e3
                    }),
                    children: e3
                  }, e3))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function V({ children: e2 }) {
    return (0, B.jsx)(`div`, {
      className: `p-3 text-[11px]`,
      children: e2
    });
  }
  function H({ label: e2, value: t2, danger: n2 }) {
    return (0, B.jsxs)(`div`, {
      className: `flex justify-between`,
      children: [
        (0, B.jsx)(`span`, {
          children: e2
        }),
        (0, B.jsx)(`span`, {
          className: n2 ? `text-danger font-medium` : `text-text`,
          children: t2
        })
      ]
    });
  }
  function Me({ compRef: e2 }) {
    let t2 = v((e3) => e3.document.constraints), n2 = v((e3) => e3.removeDesignConstraint), r2 = v((e3) => e3.updateDesignConstraint), i2 = (t2 ?? []).filter((t3) => Object.values(t3.kind).some((t4) => typeof t4 == `object` && !!t4 && t4.kind === `pcbFootprint` && t4.ref === e2) || t3.kind.ref === e2);
    return i2.length === 0 ? null : (0, B.jsxs)(`div`, {
      className: `pt-1 border-t border-border mt-1`,
      children: [
        (0, B.jsx)(`div`, {
          className: `text-[10px] text-text-muted mb-0.5`,
          children: `Constraints:`
        }),
        i2.map((e3) => {
          let t3 = e3.kind.type, i3 = e3.kind.value;
          return (0, B.jsxs)(`div`, {
            className: `flex items-center justify-between gap-1 text-[10px]`,
            children: [
              (0, B.jsxs)(`span`, {
                className: `font-mono text-text-muted`,
                children: [
                  t3,
                  e3.driven ? ` (ref)` : ``
                ]
              }),
              (0, B.jsxs)(`span`, {
                className: `flex items-center gap-1`,
                children: [
                  i3 !== void 0 && (0, B.jsx)(`input`, {
                    className: `w-16 text-[10px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right`,
                    defaultValue: String(i3),
                    onBlur: (t4) => {
                      let n3 = t4.target.value.trim(), i4 = Number(n3);
                      r2(e3.id, {
                        value: Number.isFinite(i4) && n3 !== `` ? i4 : n3
                      });
                    },
                    title: `Value (mm/deg) or formula over document parameters`
                  }),
                  i3 !== void 0 && (0, B.jsx)(`button`, {
                    className: `rounded border px-1 ${e3.driven ? `border-orange-500 text-orange-500` : `border-border text-text-muted`}`,
                    title: `Toggle driven (reference) dimension`,
                    onClick: () => r2(e3.id, {
                      driven: !e3.driven
                    }),
                    children: `ref`
                  }),
                  (0, B.jsx)(`button`, {
                    className: `rounded border border-border px-1 text-text-muted hover:text-danger`,
                    title: `Delete constraint`,
                    onClick: () => n2(e3.id),
                    children: `\xD7`
                  })
                ]
              })
            ]
          }, e3.id);
        })
      ]
    });
  }
  function Ne(e2) {
    let [t2, n2, r2] = e2.color.map((e3) => Math.round(e3 * 255)), i2 = e2.metallic > 0.5 ? 60 : 30, a2 = e2.roughness > 0.5 ? 40 : 20;
    return `radial-gradient(ellipse at 30% 30%,
    rgb(${Math.min(255, t2 + i2)}, ${Math.min(255, n2 + i2)}, ${Math.min(255, r2 + i2)}) 0%,
    rgb(${t2}, ${n2}, ${r2}) 50%,
    rgb(${Math.max(0, t2 - a2)}, ${Math.max(0, n2 - a2)}, ${Math.max(0, r2 - a2)}) 100%
  )`;
  }
  var Pe = {
    sm: `h-5 w-5`,
    md: `h-7 w-7`,
    lg: `h-10 w-10`
  };
  function U({ material: e2, selected: t2 = false, size: n2 = `md`, onClick: r2, onMouseEnter: i2, onMouseLeave: a2 }) {
    let o2 = Ne(e2);
    return (0, B.jsx)(`button`, {
      type: `button`,
      onClick: r2,
      onMouseEnter: i2,
      onMouseLeave: a2,
      className: k(Pe[n2], `rounded-full border-2 cursor-pointer transition-all duration-100`, `hover:scale-110 hover:shadow-md`, `focus:outline-none focus:ring-2 focus:ring-brand/50`, t2 ? `border-brand ring-2 ring-brand/30` : `border-transparent hover:border-border`),
      style: {
        background: o2
      },
      title: e2.name
    });
  }
  function Fe({ material: e2, animate: t2 = true }) {
    let n2 = (0, z.useRef)(null), i2 = (0, z.useMemo)(() => new he(e2.color[0], e2.color[1], e2.color[2]), [
      e2.color
    ]), a2 = (0, z.useMemo)(() => d(e2.key) ? f(e2.key) : null, [
      e2.key
    ]), o2 = (0, z.useMemo)(() => a2 ? new ge({
      vertexShader: a2.vertexShader,
      fragmentShader: a2.fragmentShader,
      uniforms: a2.uniforms,
      side: 2
    }) : null, [
      a2
    ]);
    return (0, z.useEffect)(() => () => {
      o2 == null ? void 0 : o2.dispose();
    }, [
      o2
    ]), r((e3, r2) => {
      t2 && n2.current && (n2.current.rotation.y += r2 * 0.3);
    }), (0, B.jsxs)(`mesh`, {
      ref: n2,
      castShadow: true,
      receiveShadow: true,
      material: o2 ?? void 0,
      children: [
        (0, B.jsx)(`sphereGeometry`, {
          args: [
            1,
            64,
            64
          ]
        }),
        !o2 && (0, B.jsx)(`meshStandardMaterial`, {
          color: i2,
          metalness: e2.metallic,
          roughness: e2.roughness,
          envMapIntensity: 1.2
        })
      ]
    });
  }
  function Ie({ material: e2, size: t2 = 80, animate: n2 = true }) {
    return (0, B.jsx)(`div`, {
      style: {
        width: t2,
        height: t2
      },
      className: `rounded-lg overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-900`,
      children: (0, B.jsxs)(i, {
        camera: {
          position: [
            0,
            0,
            2.8
          ],
          fov: 40
        },
        gl: {
          antialias: true,
          alpha: true
        },
        dpr: [
          1,
          2
        ],
        children: [
          (0, B.jsx)(`ambientLight`, {
            intensity: 0.3
          }),
          (0, B.jsx)(`directionalLight`, {
            position: [
              5,
              5,
              5
            ],
            intensity: 1.5,
            color: `#fff5e6`,
            castShadow: true
          }),
          (0, B.jsx)(`directionalLight`, {
            position: [
              -3,
              2,
              -2
            ],
            intensity: 0.5,
            color: `#e6f0ff`
          }),
          (0, B.jsx)(`directionalLight`, {
            position: [
              0,
              -3,
              -5
            ],
            intensity: 0.3,
            color: `#ffffff`
          }),
          (0, B.jsx)(a, {
            preset: `studio`
          }),
          (0, B.jsx)(Fe, {
            material: e2,
            animate: n2
          })
        ]
      })
    });
  }
  function Le() {
    return (0, B.jsx)(`div`, {
      className: `w-20 h-20 rounded-lg bg-gradient-to-b from-neutral-700 to-neutral-800 animate-pulse`
    });
  }
  function W({ material: e2, volumeMm3: t2 }) {
    let n2 = t2 ? se(t2, e2.density) : null;
    return (0, B.jsxs)(`div`, {
      className: `w-56 p-2 space-y-2`,
      children: [
        (0, B.jsxs)(`div`, {
          className: `flex gap-3`,
          children: [
            (0, B.jsx)(z.Suspense, {
              fallback: (0, B.jsx)(Le, {}),
              children: (0, B.jsx)(Ie, {
                material: e2,
                size: 80
              })
            }),
            (0, B.jsxs)(`div`, {
              className: `flex-1 min-w-0`,
              children: [
                (0, B.jsx)(`div`, {
                  className: `text-sm font-medium text-text truncate`,
                  children: e2.name
                }),
                (0, B.jsx)(`div`, {
                  className: `text-[10px] text-text-muted mb-2`,
                  children: I[e2.category]
                }),
                (0, B.jsxs)(`div`, {
                  className: `space-y-0.5 text-[10px]`,
                  children: [
                    (0, B.jsxs)(`div`, {
                      className: `flex justify-between`,
                      children: [
                        (0, B.jsx)(`span`, {
                          className: `text-text-muted`,
                          children: `Metallic`
                        }),
                        (0, B.jsx)(`span`, {
                          className: `text-text tabular-nums`,
                          children: e2.metallic.toFixed(1)
                        })
                      ]
                    }),
                    (0, B.jsxs)(`div`, {
                      className: `flex justify-between`,
                      children: [
                        (0, B.jsx)(`span`, {
                          className: `text-text-muted`,
                          children: `Roughness`
                        }),
                        (0, B.jsx)(`span`, {
                          className: `text-text tabular-nums`,
                          children: e2.roughness.toFixed(1)
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, B.jsx)(`div`, {
          className: `border-t border-border`
        }),
        (0, B.jsxs)(`div`, {
          className: `space-y-0.5 text-[10px]`,
          children: [
            (0, B.jsxs)(`div`, {
              className: `flex justify-between`,
              children: [
                (0, B.jsx)(`span`, {
                  className: `text-text-muted`,
                  children: `Density`
                }),
                (0, B.jsxs)(`span`, {
                  className: `text-text tabular-nums`,
                  children: [
                    e2.density.toLocaleString(),
                    ` kg/m\xB3`
                  ]
                })
              ]
            }),
            n2 !== null && (0, B.jsxs)(`div`, {
              className: `flex justify-between`,
              children: [
                (0, B.jsx)(`span`, {
                  className: `text-text-muted`,
                  children: `Est. Mass`
                }),
                (0, B.jsxs)(`span`, {
                  className: `text-text font-medium tabular-nums`,
                  children: [
                    `~`,
                    te(n2)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function G({ category: e2, materials: t2, selectedKey: n2, favorites: r2, volumeMm3: i2, defaultOpen: a2 = false, onSelect: o2, onPreview: s2, onToggleFavorite: l2 }) {
    let [u2, d2] = (0, z.useState)(a2), f2 = t2.some((e3) => e3.key === n2);
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsxs)(`button`, {
          type: `button`,
          onClick: () => d2(!u2),
          className: `flex items-center w-full gap-1 py-1 text-[10px] font-medium uppercase tracking-wider text-text-muted hover:text-text`,
          children: [
            u2 ? (0, B.jsx)(Oe, {
              size: 10
            }) : (0, B.jsx)(we, {
              size: 10
            }),
            (0, B.jsx)(`span`, {
              className: `flex-1 text-left`,
              children: I[e2]
            }),
            (0, B.jsxs)(`span`, {
              className: `text-text-muted/50`,
              children: [
                `(`,
                t2.length,
                `)`
              ]
            })
          ]
        }),
        u2 && (0, B.jsx)(`div`, {
          className: `flex flex-wrap gap-1.5 py-1.5 pl-3`,
          children: t2.map((e3) => {
            let t3 = r2.includes(e3.key);
            return (0, B.jsx)(c, {
              content: (0, B.jsx)(W, {
                material: e3,
                volumeMm3: i2
              }),
              side: `right`,
              children: (0, B.jsxs)(`div`, {
                className: `relative group`,
                children: [
                  (0, B.jsx)(U, {
                    material: e3,
                    selected: e3.key === n2,
                    onClick: () => o2(e3),
                    onMouseEnter: () => s2(e3),
                    onMouseLeave: () => s2(null)
                  }),
                  t3 && (0, B.jsx)(N, {
                    weight: `fill`,
                    size: 8,
                    className: `absolute -top-0.5 -right-0.5 text-yellow-500`
                  }),
                  (0, B.jsx)(`button`, {
                    type: `button`,
                    onClick: (t4) => {
                      t4.stopPropagation(), l2(e3.key);
                    },
                    className: `absolute -top-1 -right-1 p-0.5 bg-surface border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity`,
                    children: (0, B.jsx)(N, {
                      weight: t3 ? `fill` : `regular`,
                      size: 8,
                      className: t3 ? `text-yellow-500` : `text-text-muted`
                    })
                  })
                ]
              })
            }, e3.key);
          })
        }),
        !u2 && f2 && (0, B.jsx)(`div`, {
          className: `text-[10px] text-brand pl-4 pb-1`,
          children: `\u2022 selected`
        })
      ]
    });
  }
  function Re(e2) {
    return [
      parseInt(e2.slice(1, 3), 16) / 255,
      parseInt(e2.slice(3, 5), 16) / 255,
      parseInt(e2.slice(5, 7), 16) / 255
    ];
  }
  function ze(e2) {
    return `#${Math.round(e2[0] * 255).toString(16).padStart(2, `0`)}${Math.round(e2[1] * 255).toString(16).padStart(2, `0`)}${Math.round(e2[2] * 255).toString(16).padStart(2, `0`)}`;
  }
  function Be(e2, t2, n2) {
    let [r2, i2, a2] = e2.map((e3) => Math.round(e3 * 255)), o2 = t2 > 0.5 ? 60 : 30, s2 = n2 > 0.5 ? 40 : 20;
    return `radial-gradient(ellipse at 30% 30%,
    rgb(${Math.min(255, r2 + o2)}, ${Math.min(255, i2 + o2)}, ${Math.min(255, a2 + o2)}) 0%,
    rgb(${r2}, ${i2}, ${a2}) 50%,
    rgb(${Math.max(0, r2 - s2)}, ${Math.max(0, i2 - s2)}, ${Math.max(0, a2 - s2)}) 100%
  )`;
  }
  function K({ open: e2, onOpenChange: t2, onSave: n2, initialMaterial: r2 }) {
    let [i2, a2] = (0, z.useState)((r2 == null ? void 0 : r2.name) ?? `Custom Material`), [o2, s2] = (0, z.useState)((r2 == null ? void 0 : r2.color) ? ze(r2.color) : `#808080`), [c2, u2] = (0, z.useState)((r2 == null ? void 0 : r2.metallic) ?? 0), [d2, f2] = (0, z.useState)((r2 == null ? void 0 : r2.roughness) ?? 0.5), [p2, m2] = (0, z.useState)((r2 == null ? void 0 : r2.density) ?? 1e3), h2 = (0, z.useMemo)(() => Re(o2), [
      o2
    ]), g2 = (0, z.useMemo)(() => Be(h2, c2, d2), [
      h2,
      c2,
      d2
    ]);
    return (0, B.jsx)(De, {
      open: e2,
      onOpenChange: t2,
      children: (0, B.jsxs)(Te, {
        title: `Custom Material`,
        className: `max-w-sm`,
        children: [
          (0, B.jsxs)(`div`, {
            className: `space-y-4`,
            children: [
              (0, B.jsxs)(`div`, {
                className: `flex items-center gap-4`,
                children: [
                  (0, B.jsx)(`div`, {
                    className: `h-16 w-16 rounded-lg shadow-inner`,
                    style: {
                      background: g2
                    }
                  }),
                  (0, B.jsxs)(`div`, {
                    className: `flex-1 space-y-1`,
                    children: [
                      (0, B.jsx)(`label`, {
                        className: `text-[10px] text-text-muted uppercase tracking-wider`,
                        children: `Name`
                      }),
                      (0, B.jsx)(`input`, {
                        type: `text`,
                        value: i2,
                        onChange: (e3) => a2(e3.target.value),
                        className: `w-full bg-card border border-border px-2 py-1 text-xs text-text outline-none hover:border-text-muted focus:border-brand`
                      })
                    ]
                  })
                ]
              }),
              (0, B.jsxs)(`div`, {
                className: `space-y-1`,
                children: [
                  (0, B.jsx)(`label`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider`,
                    children: `Color`
                  }),
                  (0, B.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, B.jsx)(`input`, {
                        type: `color`,
                        value: o2,
                        onChange: (e3) => s2(e3.target.value),
                        className: `h-8 w-8 cursor-pointer border border-border rounded`
                      }),
                      (0, B.jsx)(`input`, {
                        type: `text`,
                        value: o2.toUpperCase(),
                        onChange: (e3) => {
                          let t3 = e3.target.value;
                          /^#[0-9A-Fa-f]{6}$/.test(t3) && s2(t3);
                        },
                        className: `flex-1 bg-card border border-border px-2 py-1 text-xs text-text font-mono outline-none hover:border-text-muted focus:border-brand`
                      })
                    ]
                  })
                ]
              }),
              (0, B.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, B.jsx)(`label`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider`,
                    children: `Surface Properties`
                  }),
                  (0, B.jsx)(l, {
                    label: `Metallic`,
                    value: c2,
                    onChange: u2,
                    step: 0.01,
                    min: 0,
                    max: 1
                  }),
                  (0, B.jsx)(l, {
                    label: `Roughness`,
                    value: d2,
                    onChange: f2,
                    step: 0.01,
                    min: 0,
                    max: 1
                  })
                ]
              }),
              (0, B.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, B.jsx)(`label`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider`,
                    children: `Physical Properties`
                  }),
                  (0, B.jsx)(l, {
                    label: `Density`,
                    value: p2,
                    onChange: m2,
                    step: 10,
                    min: 1,
                    max: 25e3,
                    unit: `kg/m\xB3`
                  })
                ]
              })
            ]
          }),
          (0, B.jsxs)(Ee, {
            children: [
              (0, B.jsx)(`button`, {
                type: `button`,
                onClick: () => t2(false),
                className: `px-3 py-1.5 text-xs text-text-muted hover:text-text hover:bg-hover`,
                children: `Cancel`
              }),
              (0, B.jsx)(`button`, {
                type: `button`,
                onClick: () => {
                  n2({
                    name: i2,
                    category: `other`,
                    color: h2,
                    metallic: c2,
                    roughness: d2,
                    density: p2
                  }), t2(false);
                },
                className: `px-3 py-1.5 text-xs bg-brand text-white hover:bg-brand/90`,
                children: `Save Material`
              })
            ]
          })
        ]
      })
    });
  }
  function Ve({ partId: e2, currentMaterialKey: t2, volumeMm3: n2 }) {
    var _a;
    let [r2, i2] = (0, z.useState)(``), [a2, o2] = (0, z.useState)(false), [s2, l2] = (0, z.useState)(0), u2 = v((e3) => e3.setPartMaterial), d2 = S((e3) => e3.setPreviewMaterial), f2 = S((e3) => e3.addRecentMaterial), p2 = S((e3) => e3.toggleFavoriteMaterial), m2 = S((e3) => e3.recentMaterials), h2 = S((e3) => e3.favoriteMaterials);
    (0, z.useEffect)(() => () => d2(null), [
      e2,
      d2
    ]);
    let g2 = (0, z.useMemo)(() => r2.trim() ? P(r2) : null, [
      r2
    ]), _2 = (0, z.useMemo)(() => m2.map((e3) => F(e3)).filter((e3) => e3 !== void 0), [
      m2
    ]), y2 = (0, z.useMemo)(() => h2.map((e3) => F(e3)).filter((e3) => e3 !== void 0), [
      h2
    ]), b2 = (0, z.useCallback)((t3) => {
      let n3 = v.getState(), r3 = structuredClone(n3.document);
      r3.materials[t3.key] || (r3.materials[t3.key] = {
        name: t3.name,
        color: t3.color,
        metallic: t3.metallic,
        roughness: t3.roughness
      }, v.setState({
        document: r3,
        isDirty: true
      })), u2(e2, t3.key), f2(t3.key), d2(null);
    }, [
      e2,
      u2,
      f2,
      d2
    ]), x2 = (0, z.useCallback)((t3) => {
      d2(t3 ? {
        partId: e2,
        materialKey: t3.key
      } : null);
    }, [
      e2,
      d2
    ]), C2 = (0, z.useCallback)((t3) => {
      let n3 = `custom-${Date.now()}-${s2}`;
      l2((e3) => e3 + 1);
      let r3 = v.getState(), i3 = structuredClone(r3.document);
      i3.materials[n3] = {
        name: t3.name,
        color: t3.color,
        metallic: t3.metallic,
        roughness: t3.roughness
      }, v.setState({
        document: i3,
        isDirty: true
      }), u2(e2, n3), f2(n3);
    }, [
      e2,
      s2,
      u2,
      f2
    ]), w2 = (_a = F(t2)) == null ? void 0 : _a.category;
    return (0, B.jsxs)(`div`, {
      className: `space-y-2`,
      children: [
        (0, B.jsxs)(`div`, {
          className: `relative`,
          children: [
            (0, B.jsx)(A, {
              size: 12,
              className: `absolute left-2 top-1/2 -translate-y-1/2 text-text-muted`
            }),
            (0, B.jsx)(`input`, {
              type: `text`,
              placeholder: `Search materials...`,
              value: r2,
              onChange: (e3) => i2(e3.target.value),
              className: `w-full bg-card border border-border pl-7 pr-2 py-1 text-xs text-text placeholder-text-muted outline-none hover:border-text-muted focus:border-brand`
            })
          ]
        }),
        g2 === null ? (0, B.jsxs)(B.Fragment, {
          children: [
            y2.length > 0 && (0, B.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, B.jsxs)(`div`, {
                  className: `flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-text-muted`,
                  children: [
                    (0, B.jsx)(N, {
                      size: 10,
                      weight: `fill`,
                      className: `text-yellow-500`
                    }),
                    `Favorites`
                  ]
                }),
                (0, B.jsx)(`div`, {
                  className: `flex flex-wrap gap-1.5 pl-3`,
                  children: y2.map((e3) => (0, B.jsx)(c, {
                    content: (0, B.jsx)(W, {
                      material: e3,
                      volumeMm3: n2
                    }),
                    side: `right`,
                    children: (0, B.jsx)(`div`, {
                      children: (0, B.jsx)(U, {
                        material: e3,
                        selected: e3.key === t2,
                        onClick: () => b2(e3),
                        onMouseEnter: () => x2(e3),
                        onMouseLeave: () => x2(null)
                      })
                    })
                  }, e3.key))
                })
              ]
            }),
            _2.length > 0 && (0, B.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, B.jsxs)(`div`, {
                  className: `flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-text-muted`,
                  children: [
                    (0, B.jsx)(M, {
                      size: 10
                    }),
                    `Recent`
                  ]
                }),
                (0, B.jsx)(`div`, {
                  className: `flex flex-wrap gap-1.5 pl-3`,
                  children: _2.map((e3) => (0, B.jsx)(c, {
                    content: (0, B.jsx)(W, {
                      material: e3,
                      volumeMm3: n2
                    }),
                    side: `right`,
                    children: (0, B.jsx)(`div`, {
                      children: (0, B.jsx)(U, {
                        material: e3,
                        selected: e3.key === t2,
                        onClick: () => b2(e3),
                        onMouseEnter: () => x2(e3),
                        onMouseLeave: () => x2(null)
                      })
                    })
                  }, e3.key))
                })
              ]
            }),
            (0, B.jsx)(`div`, {
              className: `space-y-0.5 max-h-48 overflow-y-auto scrollbar-thin`,
              children: Se.map((e3) => (0, B.jsx)(G, {
                category: e3,
                materials: xe(e3),
                selectedKey: t2,
                favorites: h2,
                volumeMm3: n2,
                defaultOpen: e3 === w2 || e3 === `metals`,
                onSelect: b2,
                onPreview: x2,
                onToggleFavorite: p2
              }, e3))
            })
          ]
        }) : (0, B.jsxs)(`div`, {
          className: `space-y-1`,
          children: [
            (0, B.jsxs)(`div`, {
              className: `text-[10px] text-text-muted`,
              children: [
                g2.length,
                ` results`
              ]
            }),
            (0, B.jsx)(`div`, {
              className: `flex flex-wrap gap-1.5`,
              children: g2.map((e3) => (0, B.jsx)(c, {
                content: (0, B.jsx)(W, {
                  material: e3,
                  volumeMm3: n2
                }),
                side: `right`,
                children: (0, B.jsx)(`div`, {
                  children: (0, B.jsx)(U, {
                    material: e3,
                    selected: e3.key === t2,
                    onClick: () => b2(e3),
                    onMouseEnter: () => x2(e3),
                    onMouseLeave: () => x2(null)
                  })
                })
              }, e3.key))
            })
          ]
        }),
        (0, B.jsxs)(`button`, {
          type: `button`,
          onClick: () => o2(true),
          className: `flex items-center gap-1.5 w-full px-2 py-1.5 text-xs text-text-muted hover:text-text hover:bg-hover border border-dashed border-border hover:border-text-muted`,
          children: [
            (0, B.jsx)(j, {
              size: 12
            }),
            `Custom Material`
          ]
        }),
        (0, B.jsx)(K, {
          open: a2,
          onOpenChange: o2,
          onSave: C2
        })
      ]
    });
  }
  function He({ instanceId: e2, currentMaterialKey: t2 }) {
    var _a;
    let [n2, r2] = (0, z.useState)(``), [i2, a2] = (0, z.useState)(false), [o2, s2] = (0, z.useState)(0), l2 = v((e3) => e3.setInstanceMaterial), u2 = S((e3) => e3.setPreviewMaterial), d2 = S((e3) => e3.addRecentMaterial), f2 = S((e3) => e3.toggleFavoriteMaterial), p2 = S((e3) => e3.recentMaterials), m2 = S((e3) => e3.favoriteMaterials);
    (0, z.useEffect)(() => () => u2(null), [
      e2,
      u2
    ]);
    let h2 = (0, z.useMemo)(() => n2.trim() ? P(n2) : null, [
      n2
    ]), g2 = (0, z.useMemo)(() => p2.map((e3) => F(e3)).filter((e3) => e3 !== void 0), [
      p2
    ]), _2 = (0, z.useMemo)(() => m2.map((e3) => F(e3)).filter((e3) => e3 !== void 0), [
      m2
    ]), y2 = (0, z.useCallback)((t3) => {
      let n3 = v.getState(), r3 = structuredClone(n3.document);
      r3.materials[t3.key] || (r3.materials[t3.key] = {
        name: t3.name,
        color: t3.color,
        metallic: t3.metallic,
        roughness: t3.roughness
      }, v.setState({
        document: r3,
        isDirty: true
      })), l2(e2, t3.key), d2(t3.key), u2(null);
    }, [
      e2,
      l2,
      d2,
      u2
    ]), b2 = (0, z.useCallback)((t3) => {
      u2(t3 ? {
        partId: e2,
        materialKey: t3.key
      } : null);
    }, [
      e2,
      u2
    ]), x2 = (0, z.useCallback)((t3) => {
      let n3 = `custom-${Date.now()}-${o2}`;
      s2((e3) => e3 + 1);
      let r3 = v.getState(), i3 = structuredClone(r3.document);
      i3.materials[n3] = {
        name: t3.name,
        color: t3.color,
        metallic: t3.metallic,
        roughness: t3.roughness
      }, v.setState({
        document: i3,
        isDirty: true
      }), l2(e2, n3), d2(n3);
    }, [
      e2,
      o2,
      l2,
      d2
    ]), C2 = (_a = F(t2)) == null ? void 0 : _a.category;
    return (0, B.jsxs)(`div`, {
      className: `space-y-2`,
      children: [
        (0, B.jsxs)(`div`, {
          className: `relative`,
          children: [
            (0, B.jsx)(A, {
              size: 12,
              className: `absolute left-2 top-1/2 -translate-y-1/2 text-text-muted`
            }),
            (0, B.jsx)(`input`, {
              type: `text`,
              placeholder: `Search materials...`,
              value: n2,
              onChange: (e3) => r2(e3.target.value),
              className: `w-full bg-card border border-border pl-7 pr-2 py-1 text-xs text-text placeholder-text-muted outline-none hover:border-text-muted focus:border-brand`
            })
          ]
        }),
        h2 === null ? (0, B.jsxs)(B.Fragment, {
          children: [
            _2.length > 0 && (0, B.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, B.jsxs)(`div`, {
                  className: `flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-text-muted`,
                  children: [
                    (0, B.jsx)(N, {
                      size: 10,
                      weight: `fill`,
                      className: `text-yellow-500`
                    }),
                    `Favorites`
                  ]
                }),
                (0, B.jsx)(`div`, {
                  className: `flex flex-wrap gap-1.5 pl-3`,
                  children: _2.map((e3) => (0, B.jsx)(c, {
                    content: (0, B.jsx)(W, {
                      material: e3
                    }),
                    side: `right`,
                    children: (0, B.jsx)(`div`, {
                      children: (0, B.jsx)(U, {
                        material: e3,
                        selected: e3.key === t2,
                        onClick: () => y2(e3),
                        onMouseEnter: () => b2(e3),
                        onMouseLeave: () => b2(null)
                      })
                    })
                  }, e3.key))
                })
              ]
            }),
            g2.length > 0 && (0, B.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, B.jsxs)(`div`, {
                  className: `flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-text-muted`,
                  children: [
                    (0, B.jsx)(M, {
                      size: 10
                    }),
                    `Recent`
                  ]
                }),
                (0, B.jsx)(`div`, {
                  className: `flex flex-wrap gap-1.5 pl-3`,
                  children: g2.map((e3) => (0, B.jsx)(c, {
                    content: (0, B.jsx)(W, {
                      material: e3
                    }),
                    side: `right`,
                    children: (0, B.jsx)(`div`, {
                      children: (0, B.jsx)(U, {
                        material: e3,
                        selected: e3.key === t2,
                        onClick: () => y2(e3),
                        onMouseEnter: () => b2(e3),
                        onMouseLeave: () => b2(null)
                      })
                    })
                  }, e3.key))
                })
              ]
            }),
            (0, B.jsx)(`div`, {
              className: `space-y-0.5 max-h-48 overflow-y-auto scrollbar-thin`,
              children: Se.map((e3) => (0, B.jsx)(G, {
                category: e3,
                materials: xe(e3),
                selectedKey: t2,
                favorites: m2,
                defaultOpen: e3 === C2 || e3 === `metals`,
                onSelect: y2,
                onPreview: b2,
                onToggleFavorite: f2
              }, e3))
            })
          ]
        }) : (0, B.jsxs)(`div`, {
          className: `space-y-1`,
          children: [
            (0, B.jsxs)(`div`, {
              className: `text-[10px] text-text-muted`,
              children: [
                h2.length,
                ` results`
              ]
            }),
            (0, B.jsx)(`div`, {
              className: `flex flex-wrap gap-1.5`,
              children: h2.map((e3) => (0, B.jsx)(c, {
                content: (0, B.jsx)(W, {
                  material: e3
                }),
                side: `right`,
                children: (0, B.jsx)(`div`, {
                  children: (0, B.jsx)(U, {
                    material: e3,
                    selected: e3.key === t2,
                    onClick: () => y2(e3),
                    onMouseEnter: () => b2(e3),
                    onMouseLeave: () => b2(null)
                  })
                })
              }, e3.key))
            })
          ]
        }),
        (0, B.jsxs)(`button`, {
          type: `button`,
          onClick: () => a2(true),
          className: `flex items-center gap-1.5 w-full px-2 py-1.5 text-xs text-text-muted hover:text-text hover:bg-hover border border-dashed border-border hover:border-text-muted`,
          children: [
            (0, B.jsx)(j, {
              size: 12
            }),
            `Custom Material`
          ]
        }),
        (0, B.jsx)(K, {
          open: i2,
          onOpenChange: a2,
          onSave: x2
        })
      ]
    });
  }
  function Ue(e2) {
    let t2 = _((e3) => e3.scene), n2 = v((e3) => e3.parts);
    return (0, z.useMemo)(() => {
      if (!e2 || !t2) return;
      let r2 = n2.findIndex((t3) => t3.id === e2);
      if (r2 === -1) return;
      let i2 = t2.parts[r2];
      if (i2) return ue(i2.mesh);
    }, [
      e2,
      t2,
      n2
    ]);
  }
  function q() {
    let e2 = S((e3) => e3.setSidebarPane);
    return (0, B.jsx)(`button`, {
      onClick: () => e2(`tree`),
      className: `flex h-6 w-6 -ml-1 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover`,
      "aria-label": h(`panel.back_to_tree`),
      title: h(`panel.back_to_tree`),
      children: (0, B.jsx)(s, {
        size: 14
      })
    });
  }
  var We = (0, z.lazy)(() => ke(() => import("./EmbroideryProperties--i_I07Fu.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }).then((e2) => e2.n).then((e2) => ({
    default: e2.EmbroideryProperties
  })), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])));
  function J({ children: e2, tooltip: t2 }) {
    let n2 = (0, B.jsx)(`div`, {
      className: `text-[10px] font-medium uppercase tracking-wider text-text-muted pt-2 pb-1`,
      children: e2
    });
    return t2 ? (0, B.jsx)(c, {
      content: t2,
      side: `left`,
      children: (0, B.jsx)(`div`, {
        className: `cursor-help`,
        children: n2
      })
    }) : n2;
  }
  function Y({ kind: e2 }) {
    return (0, B.jsx)(`span`, {
      className: `text-[10px] px-1.5 py-0.5 bg-hover border border-border/50 text-text-muted uppercase tracking-wide`,
      children: e2
    });
  }
  function Ge({ partId: e2 }) {
    var _a;
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.parts).find((t3) => t3.id === e2), r2 = Ue(e2);
    if (!n2) return null;
    let i2 = ((_a = t2.roots.find((e3) => e3.root === n2.translateNodeId)) == null ? void 0 : _a.material) ?? `default`;
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.material`),
          children: h(`panel.section.material`)
        }),
        (0, B.jsx)(Ve, {
          partId: e2,
          currentMaterialKey: i2,
          volumeMm3: r2
        })
      ]
    });
  }
  function Ke({ part: e2, offset: t2 }) {
    let n2 = v((e3) => e3.setTranslation);
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.position`),
          children: h(`panel.section.position`)
        }),
        (0, B.jsxs)(`div`, {
          className: `space-y-0.5`,
          children: [
            (0, B.jsx)(l, {
              label: `X`,
              value: t2.x,
              onChange: (r2) => n2(e2.id, {
                ...t2,
                x: r2
              }),
              unit: `mm`
            }),
            (0, B.jsx)(l, {
              label: `Y`,
              value: t2.y,
              onChange: (r2) => n2(e2.id, {
                ...t2,
                y: r2
              }),
              unit: `mm`
            }),
            (0, B.jsx)(l, {
              label: `Z`,
              value: t2.z,
              onChange: (r2) => n2(e2.id, {
                ...t2,
                z: r2
              }),
              unit: `mm`
            })
          ]
        })
      ]
    });
  }
  function qe({ part: e2, angles: t2 }) {
    let n2 = v((e3) => e3.setRotation);
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.rotation`),
          children: h(`panel.section.rotation`)
        }),
        (0, B.jsxs)(`div`, {
          className: `space-y-0.5`,
          children: [
            (0, B.jsx)(l, {
              label: `X`,
              value: t2.x,
              step: 1,
              onChange: (r2) => n2(e2.id, {
                ...t2,
                x: r2
              }),
              unit: `\xB0`
            }),
            (0, B.jsx)(l, {
              label: `Y`,
              value: t2.y,
              step: 1,
              onChange: (r2) => n2(e2.id, {
                ...t2,
                y: r2
              }),
              unit: `\xB0`
            }),
            (0, B.jsx)(l, {
              label: `Z`,
              value: t2.z,
              step: 1,
              onChange: (r2) => n2(e2.id, {
                ...t2,
                z: r2
              }),
              unit: `\xB0`
            })
          ]
        })
      ]
    });
  }
  function Je({ part: e2, factor: t2 }) {
    let n2 = v((e3) => e3.setScale);
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.scale`),
          children: h(`panel.section.scale`)
        }),
        (0, B.jsxs)(`div`, {
          className: `space-y-0.5`,
          children: [
            (0, B.jsx)(l, {
              label: `X`,
              value: t2.x,
              step: 0.1,
              onChange: (r2) => n2(e2.id, {
                ...t2,
                x: r2
              })
            }),
            (0, B.jsx)(l, {
              label: `Y`,
              value: t2.y,
              step: 0.1,
              onChange: (r2) => n2(e2.id, {
                ...t2,
                y: r2
              })
            }),
            (0, B.jsx)(l, {
              label: `Z`,
              value: t2.z,
              step: 0.1,
              onChange: (r2) => n2(e2.id, {
                ...t2,
                z: r2
              })
            })
          ]
        })
      ]
    });
  }
  function Ye({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.updatePrimitiveOp), r2 = u(e2.primitiveNodeId, `size.x`), i2 = u(e2.primitiveNodeId, `size.y`), a2 = u(e2.primitiveNodeId, `size.z`), o2 = t2.nodes[String(e2.primitiveNodeId)];
    if (!o2 || o2.op.type !== `Cube`) return null;
    let { size: s2 } = o2.op;
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.dimensions_box`),
          children: h(`panel.section.dimensions`)
        }),
        (0, B.jsxs)(`div`, {
          className: `space-y-0.5`,
          children: [
            (0, B.jsx)(l, {
              label: `W`,
              primeKey: `W`,
              value: s2.x,
              min: 0.1,
              onChange: (t3) => n2(e2.id, {
                type: `Cube`,
                size: {
                  ...s2,
                  x: t3
                }
              }),
              onCommit: () => S.getState().setFocusZone(`viewport`),
              unit: `mm`,
              ...r2
            }),
            (0, B.jsx)(l, {
              label: `H`,
              primeKey: `H`,
              value: s2.y,
              min: 0.1,
              onChange: (t3) => n2(e2.id, {
                type: `Cube`,
                size: {
                  ...s2,
                  y: t3
                }
              }),
              onCommit: () => S.getState().setFocusZone(`viewport`),
              unit: `mm`,
              ...i2
            }),
            (0, B.jsx)(l, {
              label: `D`,
              primeKey: `D`,
              value: s2.z,
              min: 0.1,
              onChange: (t3) => n2(e2.id, {
                type: `Cube`,
                size: {
                  ...s2,
                  z: t3
                }
              }),
              onCommit: () => S.getState().setFocusZone(`viewport`),
              unit: `mm`,
              ...a2
            })
          ]
        })
      ]
    });
  }
  function Xe({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.updatePrimitiveOp), r2 = u(e2.primitiveNodeId, `radius`), i2 = u(e2.primitiveNodeId, `height`), a2 = t2.nodes[String(e2.primitiveNodeId)];
    if (!a2 || a2.op.type !== `Cylinder`) return null;
    let o2 = a2.op;
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.dimensions_cylinder`),
          children: h(`panel.section.dimensions`)
        }),
        (0, B.jsxs)(`div`, {
          className: `space-y-0.5`,
          children: [
            (0, B.jsx)(l, {
              label: `R`,
              primeKey: `R`,
              value: o2.radius,
              min: 0.1,
              onChange: (t3) => n2(e2.id, {
                ...o2,
                radius: t3
              }),
              onCommit: () => S.getState().setFocusZone(`viewport`),
              unit: `mm`,
              ...r2
            }),
            (0, B.jsx)(l, {
              label: `H`,
              primeKey: `H`,
              value: o2.height,
              min: 0.1,
              onChange: (t3) => n2(e2.id, {
                ...o2,
                height: t3
              }),
              onCommit: () => S.getState().setFocusZone(`viewport`),
              unit: `mm`,
              ...i2
            })
          ]
        })
      ]
    });
  }
  function Ze({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.updatePrimitiveOp), r2 = u(e2.primitiveNodeId, `radius`), i2 = t2.nodes[String(e2.primitiveNodeId)];
    if (!i2 || i2.op.type !== `Sphere`) return null;
    let a2 = i2.op;
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.dimensions_sphere`),
          children: h(`panel.section.dimensions`)
        }),
        (0, B.jsx)(`div`, {
          className: `space-y-0.5`,
          children: (0, B.jsx)(l, {
            label: `R`,
            primeKey: `R`,
            value: a2.radius,
            min: 0.1,
            onChange: (t3) => n2(e2.id, {
              ...a2,
              radius: t3
            }),
            onCommit: () => S.getState().setFocusZone(`viewport`),
            unit: `mm`,
            ...r2
          })
        })
      ]
    });
  }
  function Qe({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.updateSweepOp), r2 = Z(), i2 = t2.nodes[String(e2.sweepNodeId)];
    if (!i2 || i2.op.type !== `Sweep`) return null;
    let a2 = i2.op, o2 = a2.path.type === `Helix` ? a2.path : null;
    return (0, B.jsxs)(`div`, {
      className: `space-y-3`,
      children: [
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Profile sketch used for sweep`,
              children: `Profile`
            }),
            (0, B.jsx)(X, {
              label: ``,
              value: `Sketch #${a2.sketch}`,
              tooltip: `Sketch reference \u2014 editing not yet supported`
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Path curve for sweep`,
              children: `Path`
            }),
            (0, B.jsx)(X, {
              label: ``,
              value: a2.path.type === `Helix` ? `Helix` : `Line`,
              tooltip: `Path type \u2014 editing not yet supported`
            })
          ]
        }),
        o2 && (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Helix path parameters`,
              children: `Helix Path`
            }),
            (0, B.jsxs)(`div`, {
              className: `space-y-0.5`,
              children: [
                (0, B.jsx)(l, {
                  label: `Radius`,
                  value: o2.radius,
                  min: 0.1,
                  step: 0.5,
                  onChange: (t3) => n2(e2.id, {
                    path: {
                      ...o2,
                      radius: t3
                    }
                  }),
                  unit: `mm`,
                  ...r2
                }),
                (0, B.jsx)(l, {
                  label: `Pitch`,
                  value: o2.pitch,
                  min: 0.1,
                  step: 0.5,
                  onChange: (t3) => n2(e2.id, {
                    path: {
                      ...o2,
                      pitch: t3
                    }
                  }),
                  unit: `mm`,
                  ...r2
                }),
                (0, B.jsx)(l, {
                  label: `Height`,
                  value: o2.height,
                  min: 0.1,
                  step: 1,
                  onChange: (t3) => n2(e2.id, {
                    path: {
                      ...o2,
                      height: t3
                    }
                  }),
                  unit: `mm`,
                  ...r2
                }),
                (0, B.jsx)(l, {
                  label: `Turns`,
                  value: o2.turns,
                  min: 0.25,
                  step: 0.25,
                  onChange: (t3) => n2(e2.id, {
                    path: {
                      ...o2,
                      turns: t3
                    }
                  }),
                  ...r2
                })
              ]
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Initial rotation of the profile around the path`,
              children: `Orientation`
            }),
            (0, B.jsx)(l, {
              label: `Angle`,
              value: (a2.orientation ?? 0) * (180 / Math.PI),
              step: 5,
              onChange: (t3) => n2(e2.id, {
                orientation: Math.PI / 180 * t3
              }),
              unit: `\xB0`,
              ...r2
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Twist angle along the sweep path`,
              children: `Twist`
            }),
            (0, B.jsx)(l, {
              label: `Angle`,
              value: (a2.twist_angle ?? 0) * (180 / Math.PI),
              step: 5,
              onChange: (t3) => n2(e2.id, {
                twist_angle: Math.PI / 180 * t3
              }),
              unit: `\xB0`,
              ...r2
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Scale factor at start and end of sweep`,
              children: `Scale`
            }),
            (0, B.jsxs)(`div`, {
              className: `space-y-0.5`,
              children: [
                (0, B.jsx)(l, {
                  label: `Start`,
                  value: a2.scale_start ?? 1,
                  min: 0.1,
                  step: 0.1,
                  onChange: (t3) => n2(e2.id, {
                    scale_start: t3
                  }),
                  ...r2
                }),
                (0, B.jsx)(l, {
                  label: `End`,
                  value: a2.scale_end ?? 1,
                  min: 0.1,
                  step: 0.1,
                  onChange: (t3) => n2(e2.id, {
                    scale_end: t3
                  }),
                  ...r2
                })
              ]
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Higher values = smoother but more polygons`,
              children: `Quality`
            }),
            (0, B.jsxs)(`div`, {
              className: `space-y-0.5`,
              children: [
                (0, B.jsx)(l, {
                  label: `Path Segments`,
                  value: a2.path_segments ?? 0,
                  min: 0,
                  max: 500,
                  step: 10,
                  onChange: (t3) => n2(e2.id, {
                    path_segments: t3
                  }),
                  ...r2
                }),
                (0, B.jsx)(`div`, {
                  className: `text-[10px] text-text-muted pl-1 pb-1`,
                  children: `0 = auto`
                }),
                (0, B.jsx)(l, {
                  label: `Arc Segments`,
                  value: a2.arc_segments ?? 8,
                  min: 1,
                  max: 32,
                  step: 1,
                  onChange: (t3) => n2(e2.id, {
                    arc_segments: t3
                  }),
                  ...r2
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function X({ label: e2, value: t2, tooltip: n2 }) {
    let r2 = (0, B.jsxs)(`div`, {
      className: `flex items-center gap-1.5 text-xs`,
      children: [
        (0, B.jsx)(`span`, {
          className: `shrink-0 text-[10px] w-4 text-text-muted font-medium`,
          children: e2
        }),
        (0, B.jsx)(`span`, {
          className: `flex-1 min-w-0 rounded-md bg-card border border-border px-2 py-1 text-xs text-text-muted truncate opacity-60 cursor-not-allowed`,
          children: t2
        })
      ]
    });
    return n2 ? (0, B.jsx)(c, {
      content: n2,
      side: `top`,
      children: (0, B.jsx)(`div`, {
        children: r2
      })
    }) : r2;
  }
  function Z() {
    let e2 = v((e3) => e3.setParameterDragging);
    return (0, z.useMemo)(() => ({
      onScrubStart: () => e2(true),
      onScrubEnd: () => e2(false)
    }), [
      e2
    ]);
  }
  function $e({ part: e2 }) {
    let t2 = v((e3) => e3.updateBooleanType);
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          children: h(`panel.section.operation`)
        }),
        (0, B.jsxs)(`select`, {
          value: e2.booleanType,
          onChange: (n2) => t2(e2.id, n2.target.value),
          className: `w-full text-xs bg-hover border border-border rounded px-2 py-1 text-text focus:outline-none focus:border-brand`,
          children: [
            (0, B.jsx)(`option`, {
              value: `union`,
              children: h(`bool.union`)
            }),
            (0, B.jsx)(`option`, {
              value: `difference`,
              children: h(`bool.difference`)
            }),
            (0, B.jsx)(`option`, {
              value: `intersection`,
              children: h(`bool.intersection`)
            })
          ]
        })
      ]
    });
  }
  function et({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.setFeatureParam), r2 = Z(), i2 = t2.nodes[String(e2.extrudeNodeId)];
    if (!i2 || i2.op.type !== `Extrude`) return null;
    let a2 = i2.op, o2 = a2.direction, s2 = Math.sqrt(o2.x * o2.x + o2.y * o2.y + o2.z * o2.z);
    return (0, B.jsxs)(`div`, {
      className: `space-y-3`,
      children: [
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Extrusion depth along direction vector`,
              children: h(`panel.section.depth`)
            }),
            (0, B.jsx)(l, {
              label: `Depth`,
              value: s2,
              min: 0.01,
              onChange: (t3) => n2(e2.id, `depth`, L(t3)),
              unit: `mm`,
              ...r2
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Twist the profile along the extrusion axis`,
              children: h(`panel.section.twist`)
            }),
            (0, B.jsx)(l, {
              label: `Angle`,
              value: (a2.twist_angle ?? 0) * (180 / Math.PI),
              step: 5,
              onChange: (t3) => n2(e2.id, `twist_angle`, L(Math.PI / 180 * t3)),
              unit: `\xB0`,
              ...r2
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Scale factor at end of extrusion (1.0 = no taper)`,
              children: h(`panel.section.taper`)
            }),
            (0, B.jsx)(l, {
              label: `Scale`,
              value: a2.scale_end ?? 1,
              min: 0.01,
              step: 0.1,
              onChange: (t3) => n2(e2.id, `scale_end`, L(t3)),
              ...r2
            })
          ]
        })
      ]
    });
  }
  function tt({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.setFeatureParam), r2 = Z(), i2 = t2.nodes[String(e2.revolveNodeId)];
    if (!i2 || i2.op.type !== `Revolve`) return null;
    let a2 = i2.op;
    return (0, B.jsxs)(`div`, {
      className: `space-y-3`,
      children: [
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Angle of revolution (degrees)`,
              children: h(`panel.section.angle`)
            }),
            (0, B.jsx)(l, {
              label: `Angle`,
              value: a2.angle_deg,
              min: 0.1,
              max: 360,
              step: 5,
              onChange: (t3) => n2(e2.id, `angle_deg`, L(t3)),
              unit: `\xB0`,
              ...r2
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: h(`panel.tooltip.mirror_readonly`),
              children: h(`panel.section.axis`)
            }),
            (0, B.jsxs)(`div`, {
              className: `space-y-0.5`,
              children: [
                (0, B.jsx)(X, {
                  label: `X`,
                  value: a2.axis_dir.x.toFixed(2),
                  tooltip: `Editing not yet supported`
                }),
                (0, B.jsx)(X, {
                  label: `Y`,
                  value: a2.axis_dir.y.toFixed(2),
                  tooltip: `Editing not yet supported`
                }),
                (0, B.jsx)(X, {
                  label: `Z`,
                  value: a2.axis_dir.z.toFixed(2),
                  tooltip: `Editing not yet supported`
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function nt({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.setFeatureParam), r2 = Z(), i2 = t2.nodes[String(e2.filletNodeId)];
    return !i2 || i2.op.type !== `Fillet` ? null : (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.fillet_radius`),
          children: h(`panel.section.radius`)
        }),
        (0, B.jsx)(l, {
          label: `R`,
          value: i2.op.radius,
          min: 0.1,
          step: 0.5,
          onChange: (t3) => n2(e2.id, `radius`, L(t3)),
          unit: `mm`,
          ...r2
        })
      ]
    });
  }
  function rt({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.setFeatureParam), r2 = Z(), i2 = t2.nodes[String(e2.chamferNodeId)];
    return !i2 || i2.op.type !== `Chamfer` ? null : (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.chamfer_distance`),
          children: h(`panel.section.distance`)
        }),
        (0, B.jsx)(l, {
          label: `D`,
          value: i2.op.distance,
          min: 0.1,
          step: 0.5,
          onChange: (t3) => n2(e2.id, `distance`, L(t3)),
          unit: `mm`,
          ...r2
        })
      ]
    });
  }
  function it({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.setFeatureParam), r2 = Z(), i2 = t2.nodes[String(e2.shellNodeId)];
    return !i2 || i2.op.type !== `Shell` ? null : (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.shell_thickness`),
          children: h(`panel.section.thickness`)
        }),
        (0, B.jsx)(l, {
          label: `T`,
          value: i2.op.thickness,
          min: 0.1,
          step: 0.5,
          onChange: (t3) => n2(e2.id, `thickness`, L(t3)),
          unit: `mm`,
          ...r2
        })
      ]
    });
  }
  function at({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.setFeatureParam), r2 = Z(), i2 = t2.nodes[String(e2.patternNodeId)];
    if (!i2 || i2.op.type !== `LinearPattern`) return null;
    let a2 = i2.op, o2 = a2.direction;
    return (0, B.jsxs)(`div`, {
      className: `space-y-3`,
      children: [
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Direction vector for the pattern`,
              children: h(`panel.section.direction`)
            }),
            (0, B.jsxs)(`div`, {
              className: `space-y-0.5`,
              children: [
                (0, B.jsx)(l, {
                  label: `X`,
                  value: o2.x,
                  onChange: (t3) => n2(e2.id, `direction`, R(t3, o2.y, o2.z)),
                  unit: `mm`,
                  ...r2
                }),
                (0, B.jsx)(l, {
                  label: `Y`,
                  value: o2.y,
                  onChange: (t3) => n2(e2.id, `direction`, R(o2.x, t3, o2.z)),
                  unit: `mm`,
                  ...r2
                }),
                (0, B.jsx)(l, {
                  label: `Z`,
                  value: o2.z,
                  onChange: (t3) => n2(e2.id, `direction`, R(o2.x, o2.y, t3)),
                  unit: `mm`,
                  ...r2
                })
              ]
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Number of copies in the pattern`,
              children: h(`panel.section.count`)
            }),
            (0, B.jsx)(l, {
              label: `N`,
              value: a2.count,
              min: 1,
              max: 100,
              step: 1,
              onChange: (t3) => n2(e2.id, `count`, L(Math.round(t3))),
              ...r2
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Distance between copies (mm)`,
              children: h(`panel.section.spacing`)
            }),
            (0, B.jsx)(l, {
              label: `S`,
              value: a2.spacing,
              min: 0.1,
              step: 1,
              onChange: (t3) => n2(e2.id, `spacing`, L(t3)),
              unit: `mm`,
              ...r2
            })
          ]
        })
      ]
    });
  }
  function ot({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.setFeatureParam), r2 = Z(), i2 = t2.nodes[String(e2.patternNodeId)];
    if (!i2 || i2.op.type !== `CircularPattern`) return null;
    let a2 = i2.op;
    return (0, B.jsxs)(`div`, {
      className: `space-y-3`,
      children: [
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Number of copies around the axis`,
              children: h(`panel.section.count`)
            }),
            (0, B.jsx)(l, {
              label: `N`,
              value: a2.count,
              min: 1,
              max: 100,
              step: 1,
              onChange: (t3) => n2(e2.id, `count`, L(Math.round(t3))),
              ...r2
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Total angle of the circular pattern (degrees)`,
              children: h(`panel.section.angle`)
            }),
            (0, B.jsx)(l, {
              label: `Angle`,
              value: a2.angle_deg,
              min: 1,
              max: 360,
              step: 5,
              onChange: (t3) => n2(e2.id, `angle_deg`, L(t3)),
              unit: `\xB0`,
              ...r2
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Point on the rotation axis`,
              children: h(`panel.section.axis_origin`)
            }),
            (0, B.jsxs)(`div`, {
              className: `space-y-0.5`,
              children: [
                (0, B.jsx)(l, {
                  label: `X`,
                  value: a2.axis_origin.x,
                  onChange: (t3) => n2(e2.id, `axis_origin`, R(t3, a2.axis_origin.y, a2.axis_origin.z)),
                  unit: `mm`,
                  ...r2
                }),
                (0, B.jsx)(l, {
                  label: `Y`,
                  value: a2.axis_origin.y,
                  onChange: (t3) => n2(e2.id, `axis_origin`, R(a2.axis_origin.x, t3, a2.axis_origin.z)),
                  unit: `mm`,
                  ...r2
                }),
                (0, B.jsx)(l, {
                  label: `Z`,
                  value: a2.axis_origin.z,
                  onChange: (t3) => n2(e2.id, `axis_origin`, R(a2.axis_origin.x, a2.axis_origin.y, t3)),
                  unit: `mm`,
                  ...r2
                })
              ]
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Direction of the rotation axis`,
              children: h(`panel.section.axis_dir`)
            }),
            (0, B.jsxs)(`div`, {
              className: `space-y-0.5`,
              children: [
                (0, B.jsx)(l, {
                  label: `X`,
                  value: a2.axis_dir.x,
                  onChange: (t3) => n2(e2.id, `axis_dir`, R(t3, a2.axis_dir.y, a2.axis_dir.z)),
                  step: 0.1,
                  ...r2
                }),
                (0, B.jsx)(l, {
                  label: `Y`,
                  value: a2.axis_dir.y,
                  onChange: (t3) => n2(e2.id, `axis_dir`, R(a2.axis_dir.x, t3, a2.axis_dir.z)),
                  step: 0.1,
                  ...r2
                }),
                (0, B.jsx)(l, {
                  label: `Z`,
                  value: a2.axis_dir.z,
                  onChange: (t3) => n2(e2.id, `axis_dir`, R(a2.axis_dir.x, a2.axis_dir.y, t3)),
                  step: 0.1,
                  ...r2
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function st({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.setFeatureParam), r2 = t2.nodes[String(e2.loftNodeId)];
    if (!r2 || r2.op.type !== `Loft`) return null;
    let i2 = r2.op;
    return (0, B.jsxs)(`div`, {
      className: `space-y-3`,
      children: [
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Loft connects multiple sketch profiles`,
              children: h(`panel.section.profiles`)
            }),
            (0, B.jsx)(`div`, {
              className: `space-y-0.5`,
              children: i2.sketches.map((e3, t3) => (0, B.jsx)(X, {
                label: `${t3 + 1}`,
                value: `Sketch #${e3}`,
                tooltip: `Sketch reference \u2014 editing not yet supported`
              }, t3))
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Connect last profile back to first`,
              children: h(`panel.section.closed`)
            }),
            (0, B.jsxs)(`label`, {
              className: `flex items-center gap-2 text-xs text-text cursor-pointer`,
              children: [
                (0, B.jsx)(`input`, {
                  type: `checkbox`,
                  checked: i2.closed ?? false,
                  onChange: (t3) => n2(e2.id, `closed`, Ce(t3.target.checked)),
                  className: `accent-brand`
                }),
                (0, B.jsx)(`span`, {
                  children: i2.closed ? `Closed loop` : `Open`
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function ct({ part: e2 }) {
    let t2 = v((e3) => e3.document), n2 = v((e3) => e3.setFeatureParam), r2 = Z(), i2 = t2.nodes[String(e2.textNodeId)];
    if (!i2 || i2.op.type !== `Text2D`) return null;
    let a2 = i2.op, o2 = t2.nodes[String(e2.extrudeNodeId)], s2 = (o2 == null ? void 0 : o2.op.type) === `Extrude` ? o2.op : null, c2 = s2 ? Math.sqrt(s2.direction.x ** 2 + s2.direction.y ** 2 + s2.direction.z ** 2) : 0;
    return (0, B.jsxs)(`div`, {
      className: `space-y-3`,
      children: [
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `The text content`,
              children: h(`panel.section.text`)
            }),
            (0, B.jsx)(X, {
              label: ``,
              value: a2.text,
              tooltip: `Editing not yet supported`
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Text height in mm`,
              children: h(`panel.section.size`)
            }),
            (0, B.jsx)(l, {
              label: `H`,
              value: a2.height,
              min: 0.5,
              step: 1,
              onChange: (t3) => n2(e2.id, `height`, L(t3)),
              unit: `mm`,
              ...r2
            })
          ]
        }),
        s2 && (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Extrusion depth (mm)`,
              children: h(`panel.section.depth`)
            }),
            (0, B.jsx)(l, {
              label: `D`,
              value: c2,
              min: 0.1,
              step: 0.5,
              onChange: (t3) => n2(e2.id, `depth`, L(t3)),
              unit: `mm`,
              ...r2
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              tooltip: `Spacing between letters`,
              children: h(`panel.section.spacing`)
            }),
            (0, B.jsx)(l, {
              label: `Letter`,
              value: a2.letter_spacing ?? 1,
              min: 0.1,
              step: 0.1,
              onChange: (t3) => n2(e2.id, `letter_spacing`, L(t3)),
              ...r2
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          children: [
            (0, B.jsx)(J, {
              children: h(`panel.section.font`)
            }),
            (0, B.jsx)(X, {
              label: ``,
              value: a2.font,
              tooltip: `Editing not yet supported`
            })
          ]
        })
      ]
    });
  }
  function lt(e2) {
    return e2.part, (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.mirror_readonly`),
          children: h(`panel.section.mirror`)
        }),
        (0, B.jsx)(`div`, {
          className: `text-xs text-text-muted`,
          children: h(`panel.mirror_readonly`)
        })
      ]
    });
  }
  function Q() {
    return (0, B.jsx)(`div`, {
      className: `border-t border-border/40 my-2`
    });
  }
  function ut({ instanceId: e2 }) {
    var _a, _b;
    let t2 = v((e3) => e3.document), n2 = (_a = t2.instances) == null ? void 0 : _a.find((t3) => t3.id === e2), r2 = n2 ? (_b = t2.partDefs) == null ? void 0 : _b[n2.partDefId] : void 0, i2 = (n2 == null ? void 0 : n2.material) ?? (r2 == null ? void 0 : r2.defaultMaterial) ?? `default`;
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.material_instance`),
          children: h(`panel.section.material`)
        }),
        (0, B.jsx)(He, {
          instanceId: e2,
          currentMaterialKey: i2
        })
      ]
    });
  }
  function dt({ instance: e2 }) {
    let t2 = v((e3) => e3.setInstanceTransform), n2 = e2.transform ?? m();
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.position_world`),
          children: h(`panel.section.position`)
        }),
        (0, B.jsxs)(`div`, {
          className: `space-y-0.5`,
          children: [
            (0, B.jsx)(l, {
              label: `X`,
              value: n2.translation.x,
              onChange: (r2) => t2(e2.id, {
                ...n2,
                translation: {
                  ...n2.translation,
                  x: r2
                }
              }),
              unit: `mm`
            }),
            (0, B.jsx)(l, {
              label: `Y`,
              value: n2.translation.y,
              onChange: (r2) => t2(e2.id, {
                ...n2,
                translation: {
                  ...n2.translation,
                  y: r2
                }
              }),
              unit: `mm`
            }),
            (0, B.jsx)(l, {
              label: `Z`,
              value: n2.translation.z,
              onChange: (r2) => t2(e2.id, {
                ...n2,
                translation: {
                  ...n2.translation,
                  z: r2
                }
              }),
              unit: `mm`
            })
          ]
        })
      ]
    });
  }
  function ft({ instance: e2 }) {
    let t2 = v((e3) => e3.setInstanceTransform), n2 = e2.transform ?? m();
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: h(`panel.tooltip.rotation_world`),
          children: h(`panel.section.rotation`)
        }),
        (0, B.jsxs)(`div`, {
          className: `space-y-0.5`,
          children: [
            (0, B.jsx)(l, {
              label: `X`,
              value: n2.rotation.x,
              step: 1,
              onChange: (r2) => t2(e2.id, {
                ...n2,
                rotation: {
                  ...n2.rotation,
                  x: r2
                }
              }),
              unit: `\xB0`
            }),
            (0, B.jsx)(l, {
              label: `Y`,
              value: n2.rotation.y,
              step: 1,
              onChange: (r2) => t2(e2.id, {
                ...n2,
                rotation: {
                  ...n2.rotation,
                  y: r2
                }
              }),
              unit: `\xB0`
            }),
            (0, B.jsx)(l, {
              label: `Z`,
              value: n2.rotation.z,
              step: 1,
              onChange: (r2) => t2(e2.id, {
                ...n2,
                rotation: {
                  ...n2.rotation,
                  z: r2
                }
              }),
              unit: `\xB0`
            })
          ]
        })
      ]
    });
  }
  function pt({ instance: e2 }) {
    var _a;
    let t2 = v((e3) => e3.document), n2 = S((e3) => e3.clearSelection), r2 = (_a = t2.partDefs) == null ? void 0 : _a[e2.partDefId], i2 = e2.name ?? (r2 == null ? void 0 : r2.name) ?? e2.partDefId;
    return (0, B.jsxs)(`div`, {
      className: k(`w-full flex flex-col bg-surface`, `h-full`),
      children: [
        (0, B.jsxs)(`div`, {
          className: `flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3`,
          children: [
            (0, B.jsxs)(`div`, {
              className: `flex items-center gap-2 min-w-0`,
              children: [
                (0, B.jsx)(q, {}),
                (0, B.jsx)(`span`, {
                  className: `text-xs font-medium text-text truncate`,
                  children: i2
                }),
                (0, B.jsx)(Y, {
                  kind: `instance`
                })
              ]
            }),
            (0, B.jsx)(`button`, {
              onClick: n2,
              className: `flex h-8 w-8 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover`,
              children: (0, B.jsx)(o, {
                size: 14
              })
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          className: `flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin`,
          children: [
            (0, B.jsxs)(`div`, {
              children: [
                (0, B.jsx)(J, {
                  children: h(`panel.section.part_def`)
                }),
                (0, B.jsx)(`div`, {
                  className: `text-xs text-text`,
                  children: (r2 == null ? void 0 : r2.name) ?? e2.partDefId
                })
              ]
            }),
            (0, B.jsx)(Q, {}),
            (0, B.jsx)(dt, {
              instance: e2
            }),
            (0, B.jsx)(Q, {}),
            (0, B.jsx)(ft, {
              instance: e2
            }),
            (0, B.jsx)(Q, {}),
            (0, B.jsx)(ut, {
              instanceId: e2.id
            })
          ]
        })
      ]
    });
  }
  function mt(e2) {
    switch (e2.type) {
      case `Fixed`:
        return h(`joint.fixed`);
      case `Revolute`:
        return h(`joint.revolute`);
      case `Slider`:
        return h(`joint.slider`);
      case `Cylindrical`:
        return h(`joint.cylindrical`);
      case `Ball`:
        return h(`joint.ball`);
      case `Free`:
        return h(`joint.free`);
    }
  }
  function ht({ joint: e2 }) {
    let t2 = v((e3) => e3.setJointState), n2 = e2.kind, r2 = -180, i2 = 180, a2 = 1, o2 = `\xB0`;
    if (n2.type === `Revolute`) n2.limits && ([r2, i2] = n2.limits), o2 = `\xB0`;
    else if (n2.type === `Slider`) n2.limits ? [r2, i2] = n2.limits : (r2 = 0, i2 = 100), a2 = 0.5, o2 = `mm`;
    else if (n2.type === `Cylindrical`) o2 = `\xB0`;
    else if (n2.type === `Ball`) o2 = `\xB0`;
    else return null;
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: `Current joint state value`,
          children: h(`panel.section.state`)
        }),
        (0, B.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, B.jsx)(`input`, {
              type: `range`,
              min: r2,
              max: i2,
              step: a2,
              value: e2.state,
              onChange: (n3) => t2(e2.id, Number(n3.target.value)),
              className: `flex-1 h-1 bg-border rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
            [&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer`
            }),
            (0, B.jsxs)(`span`, {
              className: `text-xs text-text tabular-nums w-16 text-right`,
              children: [
                e2.state.toFixed(+(n2.type === `Slider`)),
                o2
              ]
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          className: `flex justify-between text-[10px] text-text-muted mt-1`,
          children: [
            (0, B.jsxs)(`span`, {
              children: [
                r2,
                o2
              ]
            }),
            (0, B.jsxs)(`span`, {
              children: [
                i2,
                o2
              ]
            })
          ]
        })
      ]
    });
  }
  function gt({ joint: e2 }) {
    let t2 = y((e3) => e3.physicsAvailable), n2 = y((e3) => e3.setJointTargetVelocity), r2 = y((t3) => {
      var _a;
      return ((_a = t3.jointStates.find((t4) => t4.id === e2.id)) == null ? void 0 : _a.targetVelocity) ?? 0;
    });
    if (!t2 || e2.kind.type === `Fixed`) return null;
    let i2 = e2.kind.type === `Slider` ? `mm/s` : `\xB0/s`;
    return (0, B.jsxs)(`div`, {
      children: [
        (0, B.jsx)(J, {
          tooltip: `Drive this joint at a target velocity while the physics simulation plays`,
          children: `Motor`
        }),
        (0, B.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, B.jsx)(`input`, {
              type: `number`,
              step: e2.kind.type === `Slider` ? 1 : 15,
              value: r2,
              onChange: (t3) => n2(e2.id, Number(t3.target.value) || 0),
              className: `w-24 rounded border border-border bg-surface px-2 py-1 text-xs text-text tabular-nums`,
              "aria-label": `Motor target velocity`
            }),
            (0, B.jsx)(`span`, {
              className: `text-[10px] text-text-muted`,
              children: i2
            }),
            r2 !== 0 && (0, B.jsx)(`button`, {
              type: `button`,
              onClick: () => n2(e2.id, 0),
              className: `text-[10px] text-text-muted underline hover:text-text`,
              children: `stop`
            })
          ]
        }),
        (0, B.jsx)(`div`, {
          className: `mt-1 text-[10px] text-text-muted`,
          children: `Press Play in Simulate to run the motor.`
        })
      ]
    });
  }
  function _t({ joint: e2 }) {
    var _a, _b;
    let t2 = v((e3) => e3.document), n2 = S((e3) => e3.clearSelection), r2 = (0, z.useMemo)(() => {
      var _a2;
      return new Map(((_a2 = t2.instances) == null ? void 0 : _a2.map((e3) => [
        e3.id,
        e3
      ])) ?? []);
    }, [
      t2.instances
    ]), i2 = e2.parentInstanceId ? ((_a = r2.get(e2.parentInstanceId)) == null ? void 0 : _a.name) ?? e2.parentInstanceId : h(`panel.ground`), a2 = ((_b = r2.get(e2.childInstanceId)) == null ? void 0 : _b.name) ?? e2.childInstanceId, s2 = e2.name ?? `${mt(e2.kind)} ${h(`joint.suffix`)}`;
    return (0, B.jsxs)(`div`, {
      className: k(`w-full flex flex-col bg-surface`, `h-full`),
      children: [
        (0, B.jsxs)(`div`, {
          className: `flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3`,
          children: [
            (0, B.jsxs)(`div`, {
              className: `flex items-center gap-2 min-w-0`,
              children: [
                (0, B.jsx)(q, {}),
                (0, B.jsx)(`span`, {
                  className: `text-xs font-medium text-text truncate`,
                  children: s2
                }),
                (0, B.jsx)(Y, {
                  kind: `joint`
                })
              ]
            }),
            (0, B.jsx)(`button`, {
              onClick: n2,
              className: `flex h-8 w-8 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover`,
              children: (0, B.jsx)(o, {
                size: 14
              })
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          className: `flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin`,
          children: [
            (0, B.jsxs)(`div`, {
              children: [
                (0, B.jsx)(J, {
                  children: h(`panel.section.type`)
                }),
                (0, B.jsx)(`div`, {
                  className: `text-xs text-text`,
                  children: mt(e2.kind)
                })
              ]
            }),
            (0, B.jsx)(Q, {}),
            (0, B.jsxs)(`div`, {
              children: [
                (0, B.jsx)(J, {
                  children: h(`panel.section.connection`)
                }),
                (0, B.jsxs)(`div`, {
                  className: `text-xs text-text`,
                  children: [
                    (0, B.jsx)(`span`, {
                      className: `text-text-muted`,
                      children: h(`panel.parent`)
                    }),
                    ` `,
                    i2
                  ]
                }),
                (0, B.jsxs)(`div`, {
                  className: `text-xs text-text`,
                  children: [
                    (0, B.jsx)(`span`, {
                      className: `text-text-muted`,
                      children: h(`panel.child`)
                    }),
                    ` `,
                    a2
                  ]
                })
              ]
            }),
            (0, B.jsx)(Q, {}),
            e2.kind.type !== `Fixed` && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(ht, {
                  joint: e2
                }),
                (0, B.jsx)(gt, {
                  joint: e2
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function vt({ item: e2 }) {
    var _a;
    let t2 = v((e3) => e3.parts), n2 = _((e3) => e3.scene), r2 = S((e3) => e3.clearSelection);
    D((e3) => e3.locale);
    let i2 = t2.find((t3) => t3.id === e2.partId), a2 = t2.findIndex((t3) => t3.id === e2.partId), s2 = v((e3) => e3.document.roots), c2 = (0, z.useMemo)(() => {
      var _a2;
      if (a2 < 0) return -1;
      let e3 = 0;
      for (let t3 = 0; t3 < s2.length; t3++) if (((_a2 = s2[t3]) == null ? void 0 : _a2.visible) !== false) {
        if (t3 === a2) return e3;
        e3++;
      }
      return -1;
    }, [
      s2,
      a2
    ]), l2 = c2 >= 0 ? (_a = n2 == null ? void 0 : n2.parts[c2]) == null ? void 0 : _a.mesh : null, u2 = (0, z.useMemo)(() => {
      if (!l2) return null;
      if (e2.kind === `face`) {
        let t3 = ve(l2, e2.faceIndex), n3 = 0, r3 = new E(), i3 = new E(), a3 = new E(), o2 = new E(), s3 = new E();
        for (let e3 of t3) {
          let t4 = l2.indices[e3 * 3], c3 = l2.indices[e3 * 3 + 1], u3 = l2.indices[e3 * 3 + 2];
          a3.set(l2.positions[t4 * 3], l2.positions[t4 * 3 + 1], l2.positions[t4 * 3 + 2]), o2.set(l2.positions[c3 * 3], l2.positions[c3 * 3 + 1], l2.positions[c3 * 3 + 2]), s3.set(l2.positions[u3 * 3], l2.positions[u3 * 3 + 1], l2.positions[u3 * 3 + 2]), r3.subVectors(o2, a3), i3.subVectors(s3, a3), n3 += r3.cross(i3).length() * 0.5;
        }
        return {
          kind: `face`,
          area: n3,
          triCount: t3.length
        };
      }
      if (e2.kind === `edge`) {
        let { a: t3, b: n3 } = ye(l2, e2.edgeId);
        return {
          kind: `edge`,
          length: t3.distanceTo(n3),
          a: t3,
          b: n3
        };
      }
      return {
        kind: `vertex`,
        position: _e(l2, e2.vertexId)
      };
    }, [
      l2,
      e2
    ]);
    return (0, B.jsxs)(`div`, {
      className: k(`w-full flex flex-col bg-surface`, `h-full`),
      children: [
        (0, B.jsxs)(`div`, {
          className: `flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3`,
          children: [
            (0, B.jsx)(yt, {
              item: e2,
              partName: i2 == null ? void 0 : i2.name
            }),
            (0, B.jsx)(`button`, {
              onClick: r2,
              className: `flex h-6 w-6 items-center justify-center text-text-muted hover:text-text hover:bg-hover`,
              "aria-label": `Clear selection`,
              children: (0, B.jsx)(o, {
                size: 12
              })
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          className: `px-3 py-2 space-y-2 text-xs text-text`,
          children: [
            !u2 && (0, B.jsx)(`span`, {
              className: `text-text-muted`,
              children: `Mesh not available.`
            }),
            u2 && u2.kind === `face` && e2.kind === `face` && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)($, {
                  label: `Area`,
                  value: `${u2.area.toFixed(2)} mm\xB2`
                }),
                (0, B.jsx)($, {
                  label: `Triangles`,
                  value: String(u2.triCount)
                }),
                (0, B.jsx)($, {
                  label: `Face index`,
                  value: String(e2.faceIndex)
                })
              ]
            }),
            u2 && u2.kind === `edge` && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)($, {
                  label: `Length`,
                  value: `${u2.length.toFixed(2)} mm`
                }),
                (0, B.jsx)($, {
                  label: `From`,
                  value: `(${u2.a.x.toFixed(1)}, ${u2.a.y.toFixed(1)}, ${u2.a.z.toFixed(1)})`
                }),
                (0, B.jsx)($, {
                  label: `To`,
                  value: `(${u2.b.x.toFixed(1)}, ${u2.b.y.toFixed(1)}, ${u2.b.z.toFixed(1)})`
                })
              ]
            }),
            u2 && u2.kind === `vertex` && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)($, {
                  label: `X`,
                  value: `${u2.position.x.toFixed(2)} mm`
                }),
                (0, B.jsx)($, {
                  label: `Y`,
                  value: `${u2.position.y.toFixed(2)} mm`
                }),
                (0, B.jsx)($, {
                  label: `Z`,
                  value: `${u2.position.z.toFixed(2)} mm`
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function $({ label: e2, value: t2 }) {
    return (0, B.jsxs)(`div`, {
      className: `flex items-baseline justify-between gap-3`,
      children: [
        (0, B.jsx)(`span`, {
          className: `text-text-muted uppercase tracking-wider text-[10px]`,
          children: e2
        }),
        (0, B.jsx)(`span`, {
          className: `tabular-nums`,
          children: t2
        })
      ]
    });
  }
  function yt({ item: e2, partName: t2 }) {
    let n2 = v((e3) => e3.documentName) ?? `Document`, r2 = S((e3) => e3.select), i2 = S((e3) => e3.clearSelection), a2 = e2.kind === `face` || e2.kind === `edge` || e2.kind === `vertex` ? e2.kind : null, o2 = e2.kind === `part` ? e2.id : e2.partId ?? null;
    return (0, B.jsxs)(`div`, {
      className: `flex min-w-0 items-center gap-1 text-xs`,
      children: [
        (0, B.jsx)(q, {}),
        (0, B.jsx)(bt, {
          label: n2,
          onClick: i2
        }),
        o2 && (0, B.jsxs)(B.Fragment, {
          children: [
            (0, B.jsx)(xt, {}),
            (0, B.jsx)(bt, {
              label: t2 ?? o2,
              onClick: a2 ? () => r2(o2) : void 0
            })
          ]
        }),
        a2 && (0, B.jsxs)(B.Fragment, {
          children: [
            (0, B.jsx)(xt, {}),
            (0, B.jsx)(`span`, {
              className: `text-text capitalize`,
              children: a2
            })
          ]
        })
      ]
    });
  }
  function bt({ label: e2, onClick: t2 }) {
    return t2 ? (0, B.jsx)(`button`, {
      type: `button`,
      onClick: t2,
      className: `truncate max-w-[12ch] text-text-muted hover:text-text hover:underline underline-offset-2 decoration-text-muted/40 transition-colors`,
      title: e2,
      children: e2
    }) : (0, B.jsx)(`span`, {
      className: `truncate text-text-muted/80 max-w-[12ch]`,
      children: e2
    });
  }
  function xt() {
    return (0, B.jsx)(`span`, {
      className: `text-text-muted/40 shrink-0`,
      children: `\u203A`
    });
  }
  St = function() {
    var _a, _b;
    let e2 = S((e3) => e3.selectedPartIds), t2 = S((e3) => e3.selection), n2 = S((e3) => e3.clearSelection), r2 = O((e3) => e3.selection), i2 = v((e3) => e3.parts), a2 = v((e3) => e3.document), s2 = (0, z.useRef)(null);
    D((e3) => e3.locale);
    let c2 = r2.type !== `none`;
    if ((0, z.useEffect)(() => {
      function e3(e4) {
        e4.key === `Escape` && (t2.length > 0 && n2(), O.getState().selection.type !== `none` && O.getState().select({
          type: `none`
        }));
      }
      return window.addEventListener(`keydown`, e3), () => window.removeEventListener(`keydown`, e3);
    }, [
      t2.length,
      n2
    ]), c2) return (0, B.jsx)(Ae, {});
    if (t2.length === 0) return null;
    let l2 = t2[0];
    if (t2.length === 1 && l2 && (l2.kind === `face` || l2.kind === `edge` || l2.kind === `vertex`)) return (0, B.jsx)(vt, {
      item: l2
    });
    if (e2.size === 0) return null;
    if (e2.size === 1) {
      let t3 = Array.from(e2)[0];
      if (t3.startsWith(`joint:`)) {
        let e3 = t3.slice(6), n4 = (_a = a2.joints) == null ? void 0 : _a.find((t4) => t4.id === e3);
        if (n4) return (0, B.jsx)(_t, {
          joint: n4
        });
      }
      let n3 = (_b = a2.instances) == null ? void 0 : _b.find((e3) => e3.id === t3);
      if (n3) return (0, B.jsx)(pt, {
        instance: n3
      });
    }
    if (e2.size > 1) return (0, B.jsxs)(`div`, {
      ref: s2,
      className: k(`w-full flex flex-col bg-surface`, `h-full`),
      children: [
        (0, B.jsxs)(`div`, {
          className: `flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3`,
          children: [
            (0, B.jsxs)(`div`, {
              className: `flex items-center gap-2 min-w-0`,
              children: [
                (0, B.jsx)(q, {}),
                (0, B.jsx)(`span`, {
                  className: `text-xs font-medium text-text`,
                  children: p(`panel.parts_selected`, {
                    count: String(e2.size)
                  })
                })
              ]
            }),
            (0, B.jsx)(`button`, {
              onClick: n2,
              className: `flex h-8 w-8 sm:h-6 sm:w-6 items-center justify-center text-text-muted hover:text-text hover:bg-hover`,
              children: (0, B.jsx)(o, {
                size: 14
              })
            })
          ]
        }),
        (0, B.jsx)(`div`, {
          className: `p-3 text-[10px] text-text-muted`,
          children: h(`panel.select_single`)
        })
      ]
    });
    let u2 = Array.from(e2)[0], d2 = i2.find((e3) => e3.id === u2);
    if (!d2) return null;
    let f2 = a2.nodes[String(d2.translateNodeId)], m2 = a2.nodes[String(d2.rotateNodeId)], g2 = a2.nodes[String(d2.scaleNodeId)], _2 = (f2 == null ? void 0 : f2.op.type) === `Translate` ? f2.op.offset : {
      x: 0,
      y: 0,
      z: 0
    }, y2 = (m2 == null ? void 0 : m2.op.type) === `Rotate` ? m2.op.angles : {
      x: 0,
      y: 0,
      z: 0
    }, b2 = (g2 == null ? void 0 : g2.op.type) === `Scale` ? g2.op.factor : {
      x: 1,
      y: 1,
      z: 1
    };
    return (0, B.jsxs)(`div`, {
      ref: s2,
      className: k(`w-full flex flex-col bg-surface`, `h-full`),
      children: [
        (0, B.jsxs)(`div`, {
          className: `flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3`,
          children: [
            (0, B.jsxs)(`div`, {
              className: `flex items-center gap-2 min-w-0`,
              children: [
                (0, B.jsx)(yt, {
                  item: {
                    kind: `part`,
                    id: d2.id
                  },
                  partName: d2.name
                }),
                (0, B.jsx)(Y, {
                  kind: d2.kind
                })
              ]
            }),
            (0, B.jsx)(`button`, {
              onClick: n2,
              className: `flex h-8 w-8 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover`,
              children: (0, B.jsx)(o, {
                size: 14
              })
            })
          ]
        }),
        (0, B.jsxs)(`div`, {
          className: `flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin`,
          children: [
            T(d2) && d2.kind === `cube` && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(Ye, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            T(d2) && d2.kind === `cylinder` && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(Xe, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            T(d2) && d2.kind === `sphere` && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(Ze, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            w(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)($e, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            me(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(Qe, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            ae(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(et, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            C(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(tt, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            fe(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(nt, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            ce(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(rt, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            pe(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(it, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            re(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(at, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            de(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(ot, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            le(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(st, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            x(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(ct, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            oe(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(lt, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            ie(d2) && (0, B.jsxs)(B.Fragment, {
              children: [
                (0, B.jsx)(`button`, {
                  type: `button`,
                  onClick: () => O.getState().enter(),
                  className: `w-full mt-2 px-3 py-2 text-xs font-medium rounded-md
                bg-fill text-text border border-border
                hover:bg-fill-strong hover:border-text-muted transition-colors`,
                  children: h(`panel.edit_circuit`)
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            (ne(d2) || ee(d2)) && (0, B.jsxs)(z.Suspense, {
              fallback: null,
              children: [
                (0, B.jsx)(`button`, {
                  type: `button`,
                  onClick: () => be.getState().openPanel(),
                  className: `w-full mt-2 px-3 py-2 text-xs font-medium rounded-md
                bg-fill text-text border border-border
                hover:bg-fill-strong hover:border-text-muted transition-colors`,
                  children: h(`panel.open_embroidery`)
                }),
                (0, B.jsx)(We, {
                  part: d2
                }),
                (0, B.jsx)(Q, {})
              ]
            }),
            (0, B.jsx)(Ke, {
              part: d2,
              offset: _2
            }),
            (0, B.jsx)(Q, {}),
            (0, B.jsx)(qe, {
              part: d2,
              angles: y2
            }),
            (0, B.jsx)(Q, {}),
            (0, B.jsx)(Je, {
              part: d2,
              factor: b2
            }),
            (0, B.jsx)(Q, {}),
            (0, B.jsx)(Ge, {
              partId: d2.id
            })
          ]
        })
      ]
    });
  };
});
export {
  St as PropertyPanel,
  __tla
};
