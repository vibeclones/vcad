const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-9ryf29cW.js","assets/three-drei-DdHLxnbx.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-D4g8y8C6.css"])))=>i.map(i=>d[i]);
import { E as ye, _ as Ne } from "./three-drei-DdHLxnbx.js";
import { k as e, b as f, C as Se, f as we } from "./three-fiber-GW7QWJN8.js";
import { c0 as $, b3 as q, b4 as h, ac as ae, bh as X, v as Ce, en as oe, a4 as ke, eo as Pe, ep as Me, dq as R, eq as Fe, er as _e, es as j, et as Ie, bc as w, eu as le, ev as A, dK as ce, ew as de, ex as xe, bZ as ue, b5 as pe, z as ze, bf as me, aY as De, bg as G, aX as m, aw as ee, aj as Ee, aC as $e, an as Le, ax as Te, ao as Re, ak as Be, ay as Oe, ar as He, al as Ve, as as Ze, aD as Ae, au as Ye, av as Xe, am as Ke, aB as Je, cB as Ge, _ as z, bd as T, k as Qe, ba as te, ey as he, __tla as __tla_0 } from "./index-9ryf29cW.js";
import { c as qe } from "./CaretLeft.es-Ok_Esb0T.js";
import { h as We, g as Ue, u as Y } from "./index-BSZvQoDh.js";
import { h as et, l as tt, D as st, a as K } from "./three-tnxpQXqG.js";
import { f as nt, g as it, a as rt } from "./sub-feature-geometry-tgU-o6Qd.js";
import { f as je } from "./Clock.es-DUj8cYWY.js";
import { f as W } from "./Star.es-CyO-GGLe.js";
let ns;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function at() {
    const t = $((s) => s.selection), r = $((s) => s.netlist), n = q((s) => s.activeBoardNodeId), i = h((s) => s.document), c = n != null ? ae(i, n) : null;
    if (t.type === "component" || t.type === "footprint") return e.jsx(ot, {
      compRef: t.ref
    }, t.ref);
    if (t.type === "net") {
      const s = t.netId, a = r == null ? void 0 : r.nets.find((u) => u.name === s), o = (c == null ? void 0 : c.traces.filter((u) => u.net === s).length) ?? 0, x = ((c == null ? void 0 : c.traces) ?? []).filter((u) => u.net === s).reduce((u, d) => {
        const y = d.end.x - d.start.x, b = d.end.y - d.start.y;
        return u + Math.hypot(y, b);
      }, 0);
      return e.jsxs(J, {
        children: [
          e.jsx("div", {
            className: "font-medium text-brand mb-2",
            children: s
          }),
          e.jsxs("div", {
            className: "space-y-1 text-text-muted",
            children: [
              e.jsx(F, {
                label: "Pads",
                value: String((a == null ? void 0 : a.connections.length) ?? 0)
              }),
              e.jsx(F, {
                label: "Traces",
                value: String(o)
              }),
              e.jsx(F, {
                label: "Total Length",
                value: `${x.toFixed(2)}mm`
              }),
              a && a.connections.length > 0 && e.jsxs("div", {
                className: "pt-1 border-t border-border mt-1",
                children: [
                  e.jsx("div", {
                    className: "text-[10px] text-text-muted mb-0.5",
                    children: "Connections:"
                  }),
                  a.connections.slice(0, 8).map((u, d) => e.jsxs("div", {
                    className: "text-[10px]",
                    children: [
                      u.component_ref,
                      ".",
                      u.pin_number
                    ]
                  }, d)),
                  a.connections.length > 8 && e.jsxs("div", {
                    className: "text-[9px] text-text-muted",
                    children: [
                      "+",
                      a.connections.length - 8,
                      " more"
                    ]
                  })
                ]
              })
            ]
          })
        ]
      });
    }
    if (t.type === "trace") {
      const s = c == null ? void 0 : c.traces[t.idx];
      if (!s) return null;
      const a = s.end.x - s.start.x, o = s.end.y - s.start.y, x = Math.hypot(a, o);
      return e.jsxs(J, {
        children: [
          e.jsxs("div", {
            className: "flex justify-between items-center mb-2",
            children: [
              e.jsx("span", {
                className: "font-medium text-text",
                children: "Trace"
              }),
              e.jsx("button", {
                className: "px-1.5 py-0.5 text-[10px] text-danger hover:bg-danger/10 rounded transition-colors",
                onClick: () => {
                  const u = q.getState().activeBoardNodeId;
                  u != null && h.getState().removeTrace(u, t.idx), $.getState().select({
                    type: "none"
                  });
                },
                children: "Delete"
              })
            ]
          }),
          e.jsxs("div", {
            className: "space-y-1 text-text-muted",
            children: [
              e.jsx(F, {
                label: "Net",
                value: s.net
              }),
              e.jsx(F, {
                label: "Layer",
                value: s.layer
              }),
              e.jsx(F, {
                label: "Width",
                value: `${s.width}mm`
              }),
              e.jsx(F, {
                label: "Length",
                value: `${x.toFixed(2)}mm`
              })
            ]
          })
        ]
      });
    }
    if (t.type === "via") {
      const s = c == null ? void 0 : c.vias[t.idx];
      return s ? e.jsxs(J, {
        children: [
          e.jsxs("div", {
            className: "flex justify-between items-center mb-2",
            children: [
              e.jsx("span", {
                className: "font-medium text-text",
                children: "Via"
              }),
              e.jsx("button", {
                className: "px-1.5 py-0.5 text-[10px] text-danger hover:bg-danger/10 rounded transition-colors",
                onClick: () => {
                  const a = q.getState().activeBoardNodeId;
                  a != null && h.getState().removeVia(a, t.idx), $.getState().select({
                    type: "none"
                  });
                },
                children: "Delete"
              })
            ]
          }),
          e.jsxs("div", {
            className: "space-y-1 text-text-muted",
            children: [
              e.jsx(F, {
                label: "Net",
                value: s.net
              }),
              e.jsx(F, {
                label: "Diameter",
                value: `${s.diameter}mm`
              }),
              e.jsx(F, {
                label: "Drill",
                value: `${s.drill}mm`
              }),
              e.jsx(F, {
                label: "Layers",
                value: `${s.startLayer} - ${s.endLayer}`
              }),
              e.jsx(F, {
                label: "Position",
                value: `${s.position.x.toFixed(2)}, ${s.position.y.toFixed(2)}`
              })
            ]
          })
        ]
      }) : null;
    }
    return t.type === "pad" ? e.jsxs(J, {
      children: [
        e.jsxs("div", {
          className: "font-medium text-text mb-2",
          children: [
            t.fpRef,
            ".",
            t.padNum
          ]
        }),
        e.jsx("div", {
          className: "space-y-1 text-text-muted",
          children: e.jsx(F, {
            label: "Net",
            value: t.net
          })
        })
      ]
    }) : null;
  }
  function ot({ compRef: t }) {
    const r = $((l) => l.netlist), n = q((l) => l.activeBoardNodeId), i = h((l) => l.document), c = n != null ? ae(i, n) : null, s = i.schematic, a = s == null ? void 0 : s.components.find((l) => l.ref === t), o = (s == null ? void 0 : s.components.findIndex((l) => l.ref === t)) ?? -1, x = c == null ? void 0 : c.footprints.find((l) => l.ref === t), u = (c == null ? void 0 : c.footprints.findIndex((l) => l.ref === t)) ?? -1, [d, y] = f.useState((a == null ? void 0 : a.value) ?? ""), [b, C] = f.useState(String((x == null ? void 0 : x.position.x) ?? 0)), [k, M] = f.useState(String((x == null ? void 0 : x.position.y) ?? 0)), [_, g] = f.useState(String((x == null ? void 0 : x.rotation) ?? 0)), N = /* @__PURE__ */ new Set();
    if (r) {
      for (const l of r.nets) for (const p of l.connections) if (p.component_ref === t) {
        N.add(l.name);
        break;
      }
    }
    const P = () => {
      o >= 0 && d !== (a == null ? void 0 : a.value) && h.getState().updateSchematicComponent(o, {
        value: d
      }, n ?? void 0);
    }, I = () => {
      const l = parseFloat(b), p = parseFloat(k);
      u >= 0 && !isNaN(l) && !isNaN(p) && n != null && h.getState().moveFootprint(n, u, {
        x: l,
        y: p,
        z: 0
      });
    }, D = () => {
      const l = parseFloat(_);
      if (u >= 0 && !isNaN(l) && l !== ((x == null ? void 0 : x.rotation) ?? 0)) {
        const p = l - ((x == null ? void 0 : x.rotation) ?? 0);
        n != null && h.getState().rotateFootprint(n, u, p);
      }
    };
    return e.jsxs(J, {
      children: [
        e.jsx("div", {
          className: "font-medium text-text mb-2",
          children: t
        }),
        e.jsxs("div", {
          className: "space-y-1.5 text-text-muted",
          children: [
            a && e.jsxs("div", {
              className: "flex justify-between items-center",
              children: [
                e.jsx("span", {
                  children: "Value"
                }),
                e.jsx("input", {
                  type: "text",
                  value: d,
                  onChange: (l) => y(l.target.value),
                  onBlur: P,
                  onKeyDown: (l) => l.key === "Enter" && P(),
                  className: "w-20 text-[11px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right"
                })
              ]
            }),
            x && e.jsxs(e.Fragment, {
              children: [
                e.jsx(F, {
                  label: "Footprint",
                  value: x.footprintName
                }),
                e.jsxs("div", {
                  className: "flex justify-between items-center",
                  children: [
                    e.jsx("span", {
                      children: "X"
                    }),
                    e.jsx("input", {
                      type: "number",
                      value: b,
                      onChange: (l) => C(l.target.value),
                      onBlur: I,
                      onKeyDown: (l) => l.key === "Enter" && I(),
                      className: "w-16 text-[11px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right",
                      step: 0.1
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "flex justify-between items-center",
                  children: [
                    e.jsx("span", {
                      children: "Y"
                    }),
                    e.jsx("input", {
                      type: "number",
                      value: k,
                      onChange: (l) => M(l.target.value),
                      onBlur: I,
                      onKeyDown: (l) => l.key === "Enter" && I(),
                      className: "w-16 text-[11px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right",
                      step: 0.1
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "flex justify-between items-center",
                  children: [
                    e.jsx("span", {
                      children: "Rotation"
                    }),
                    e.jsx("input", {
                      type: "number",
                      value: _,
                      onChange: (l) => g(l.target.value),
                      onBlur: D,
                      onKeyDown: (l) => l.key === "Enter" && D(),
                      className: "w-16 text-[11px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right",
                      step: 90
                    })
                  ]
                }),
                e.jsx(F, {
                  label: "Side",
                  value: x.front !== false ? "Front" : "Back"
                }),
                e.jsx(F, {
                  label: "Pads",
                  value: String(x.pads.length)
                })
              ]
            }),
            x && e.jsx(lt, {
              compRef: t
            }),
            N.size > 0 && e.jsxs("div", {
              className: "pt-1 border-t border-border mt-1",
              children: [
                e.jsx("div", {
                  className: "text-[10px] text-text-muted mb-0.5",
                  children: "Nets:"
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-1",
                  children: [
                    ...N
                  ].map((l) => e.jsx("span", {
                    className: "px-1 py-0.5 bg-brand/10 text-brand rounded text-[9px] cursor-pointer hover:bg-brand/20",
                    onClick: () => $.getState().select({
                      type: "net",
                      netId: l
                    }),
                    children: l
                  }, l))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function J({ children: t }) {
    return e.jsx("div", {
      className: "p-3 text-[11px]",
      children: t
    });
  }
  function F({ label: t, value: r, danger: n }) {
    return e.jsxs("div", {
      className: "flex justify-between",
      children: [
        e.jsx("span", {
          children: t
        }),
        e.jsx("span", {
          className: n ? "text-danger font-medium" : "text-text",
          children: r
        })
      ]
    });
  }
  function lt({ compRef: t }) {
    const r = h((s) => s.document.constraints), n = h((s) => s.removeDesignConstraint), i = h((s) => s.updateDesignConstraint), c = (r ?? []).filter((s) => Object.values(s.kind).some((a) => a != null && typeof a == "object" && a.kind === "pcbFootprint" && a.ref === t) || s.kind.ref === t);
    return c.length === 0 ? null : e.jsxs("div", {
      className: "pt-1 border-t border-border mt-1",
      children: [
        e.jsx("div", {
          className: "text-[10px] text-text-muted mb-0.5",
          children: "Constraints:"
        }),
        c.map((s) => {
          const a = s.kind.type, o = s.kind.value;
          return e.jsxs("div", {
            className: "flex items-center justify-between gap-1 text-[10px]",
            children: [
              e.jsxs("span", {
                className: "font-mono text-text-muted",
                children: [
                  a,
                  s.driven ? " (ref)" : ""
                ]
              }),
              e.jsxs("span", {
                className: "flex items-center gap-1",
                children: [
                  o !== void 0 && e.jsx("input", {
                    className: "w-16 text-[10px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right",
                    defaultValue: String(o),
                    onBlur: (x) => {
                      const u = x.target.value.trim(), d = Number(u);
                      i(s.id, {
                        value: Number.isFinite(d) && u !== "" ? d : u
                      });
                    },
                    title: "Value (mm/deg) or formula over document parameters"
                  }),
                  o !== void 0 && e.jsx("button", {
                    className: `rounded border px-1 ${s.driven ? "border-orange-500 text-orange-500" : "border-border text-text-muted"}`,
                    title: "Toggle driven (reference) dimension",
                    onClick: () => i(s.id, {
                      driven: !s.driven
                    }),
                    children: "ref"
                  }),
                  e.jsx("button", {
                    className: "rounded border border-border px-1 text-text-muted hover:text-danger",
                    title: "Delete constraint",
                    onClick: () => n(s.id),
                    children: "\xD7"
                  })
                ]
              })
            ]
          }, s.id);
        })
      ]
    });
  }
  function ct(t) {
    const [r, n, i] = t.color.map((b) => Math.round(b * 255)), c = t.metallic > 0.5 ? 60 : 30, s = t.roughness > 0.5 ? 40 : 20, a = Math.min(255, r + c), o = Math.min(255, n + c), x = Math.min(255, i + c), u = Math.max(0, r - s), d = Math.max(0, n - s), y = Math.max(0, i - s);
    return `radial-gradient(ellipse at 30% 30%,
    rgb(${a}, ${o}, ${x}) 0%,
    rgb(${r}, ${n}, ${i}) 50%,
    rgb(${u}, ${d}, ${y}) 100%
  )`;
  }
  const dt = {
    sm: "h-5 w-5",
    md: "h-7 w-7",
    lg: "h-10 w-10"
  };
  function V({ material: t, selected: r = false, size: n = "md", onClick: i, onMouseEnter: c, onMouseLeave: s }) {
    const a = ct(t);
    return e.jsx("button", {
      type: "button",
      onClick: i,
      onMouseEnter: c,
      onMouseLeave: s,
      className: X(dt[n], "rounded-full border-2 cursor-pointer transition-all duration-100", "hover:scale-110 hover:shadow-md", "focus:outline-none focus:ring-2 focus:ring-brand/50", r ? "border-brand ring-2 ring-brand/30" : "border-transparent hover:border-border"),
      style: {
        background: a
      },
      title: t.name
    });
  }
  function xt({ material: t, animate: r = true }) {
    const n = f.useRef(null), i = f.useMemo(() => new et(t.color[0], t.color[1], t.color[2]), [
      t.color
    ]), c = f.useMemo(() => We(t.key) ? Ue(t.key) : null, [
      t.key
    ]), s = f.useMemo(() => c ? new tt({
      vertexShader: c.vertexShader,
      fragmentShader: c.fragmentShader,
      uniforms: c.uniforms,
      side: st
    }) : null, [
      c
    ]);
    return f.useEffect(() => () => {
      s == null ? void 0 : s.dispose();
    }, [
      s
    ]), we((a, o) => {
      r && n.current && (n.current.rotation.y += o * 0.3);
    }), e.jsxs("mesh", {
      ref: n,
      castShadow: true,
      receiveShadow: true,
      material: s ?? void 0,
      children: [
        e.jsx("sphereGeometry", {
          args: [
            1,
            64,
            64
          ]
        }),
        !s && e.jsx("meshStandardMaterial", {
          color: i,
          metalness: t.metallic,
          roughness: t.roughness,
          envMapIntensity: 1.2
        })
      ]
    });
  }
  function ut({ material: t, size: r = 80, animate: n = true }) {
    return e.jsx("div", {
      style: {
        width: r,
        height: r
      },
      className: "rounded-lg overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-900",
      children: e.jsxs(Se, {
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
          e.jsx("ambientLight", {
            intensity: 0.3
          }),
          e.jsx("directionalLight", {
            position: [
              5,
              5,
              5
            ],
            intensity: 1.5,
            color: "#fff5e6",
            castShadow: true
          }),
          e.jsx("directionalLight", {
            position: [
              -3,
              2,
              -2
            ],
            intensity: 0.5,
            color: "#e6f0ff"
          }),
          e.jsx("directionalLight", {
            position: [
              0,
              -3,
              -5
            ],
            intensity: 0.3,
            color: "#ffffff"
          }),
          e.jsx(ye, {
            preset: "studio"
          }),
          e.jsx(xt, {
            material: t,
            animate: n
          })
        ]
      })
    });
  }
  function pt() {
    return e.jsx("div", {
      className: "w-20 h-20 rounded-lg bg-gradient-to-b from-neutral-700 to-neutral-800 animate-pulse"
    });
  }
  function Z({ material: t, volumeMm3: r }) {
    const n = r ? Ce(r, t.density) : null;
    return e.jsxs("div", {
      className: "w-56 p-2 space-y-2",
      children: [
        e.jsxs("div", {
          className: "flex gap-3",
          children: [
            e.jsx(f.Suspense, {
              fallback: e.jsx(pt, {}),
              children: e.jsx(ut, {
                material: t,
                size: 80
              })
            }),
            e.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                e.jsx("div", {
                  className: "text-sm font-medium text-text truncate",
                  children: t.name
                }),
                e.jsx("div", {
                  className: "text-[10px] text-text-muted mb-2",
                  children: oe[t.category]
                }),
                e.jsxs("div", {
                  className: "space-y-0.5 text-[10px]",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        e.jsx("span", {
                          className: "text-text-muted",
                          children: "Metallic"
                        }),
                        e.jsx("span", {
                          className: "text-text tabular-nums",
                          children: t.metallic.toFixed(1)
                        })
                      ]
                    }),
                    e.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        e.jsx("span", {
                          className: "text-text-muted",
                          children: "Roughness"
                        }),
                        e.jsx("span", {
                          className: "text-text tabular-nums",
                          children: t.roughness.toFixed(1)
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.jsx("div", {
          className: "border-t border-border"
        }),
        e.jsxs("div", {
          className: "space-y-0.5 text-[10px]",
          children: [
            e.jsxs("div", {
              className: "flex justify-between",
              children: [
                e.jsx("span", {
                  className: "text-text-muted",
                  children: "Density"
                }),
                e.jsxs("span", {
                  className: "text-text tabular-nums",
                  children: [
                    t.density.toLocaleString(),
                    " kg/m\xB3"
                  ]
                })
              ]
            }),
            n !== null && e.jsxs("div", {
              className: "flex justify-between",
              children: [
                e.jsx("span", {
                  className: "text-text-muted",
                  children: "Est. Mass"
                }),
                e.jsxs("span", {
                  className: "text-text font-medium tabular-nums",
                  children: [
                    "~",
                    ke(n)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function fe({ category: t, materials: r, selectedKey: n, favorites: i, volumeMm3: c, defaultOpen: s = false, onSelect: a, onPreview: o, onToggleFavorite: x }) {
    const [u, d] = f.useState(s), y = r.some((b) => b.key === n);
    return e.jsxs("div", {
      children: [
        e.jsxs("button", {
          type: "button",
          onClick: () => d(!u),
          className: "flex items-center w-full gap-1 py-1 text-[10px] font-medium uppercase tracking-wider text-text-muted hover:text-text",
          children: [
            u ? e.jsx(Pe, {
              size: 10
            }) : e.jsx(Me, {
              size: 10
            }),
            e.jsx("span", {
              className: "flex-1 text-left",
              children: oe[t]
            }),
            e.jsxs("span", {
              className: "text-text-muted/50",
              children: [
                "(",
                r.length,
                ")"
              ]
            })
          ]
        }),
        u && e.jsx("div", {
          className: "flex flex-wrap gap-1.5 py-1.5 pl-3",
          children: r.map((b) => {
            const C = i.includes(b.key);
            return e.jsx(R, {
              content: e.jsx(Z, {
                material: b,
                volumeMm3: c
              }),
              side: "right",
              children: e.jsxs("div", {
                className: "relative group",
                children: [
                  e.jsx(V, {
                    material: b,
                    selected: b.key === n,
                    onClick: () => a(b),
                    onMouseEnter: () => o(b),
                    onMouseLeave: () => o(null)
                  }),
                  C && e.jsx(W, {
                    weight: "fill",
                    size: 8,
                    className: "absolute -top-0.5 -right-0.5 text-yellow-500"
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: (k) => {
                      k.stopPropagation(), x(b.key);
                    },
                    className: "absolute -top-1 -right-1 p-0.5 bg-surface border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity",
                    children: e.jsx(W, {
                      weight: C ? "fill" : "regular",
                      size: 8,
                      className: C ? "text-yellow-500" : "text-text-muted"
                    })
                  })
                ]
              })
            }, b.key);
          })
        }),
        !u && y && e.jsx("div", {
          className: "text-[10px] text-brand pl-4 pb-1",
          children: "\u2022 selected"
        })
      ]
    });
  }
  function mt(t) {
    const r = parseInt(t.slice(1, 3), 16) / 255, n = parseInt(t.slice(3, 5), 16) / 255, i = parseInt(t.slice(5, 7), 16) / 255;
    return [
      r,
      n,
      i
    ];
  }
  function ht(t) {
    const r = Math.round(t[0] * 255).toString(16).padStart(2, "0"), n = Math.round(t[1] * 255).toString(16).padStart(2, "0"), i = Math.round(t[2] * 255).toString(16).padStart(2, "0");
    return `#${r}${n}${i}`;
  }
  function jt(t, r, n) {
    const [i, c, s] = t.map((k) => Math.round(k * 255)), a = r > 0.5 ? 60 : 30, o = n > 0.5 ? 40 : 20, x = Math.min(255, i + a), u = Math.min(255, c + a), d = Math.min(255, s + a), y = Math.max(0, i - o), b = Math.max(0, c - o), C = Math.max(0, s - o);
    return `radial-gradient(ellipse at 30% 30%,
    rgb(${x}, ${u}, ${d}) 0%,
    rgb(${i}, ${c}, ${s}) 50%,
    rgb(${y}, ${b}, ${C}) 100%
  )`;
  }
  function ve({ open: t, onOpenChange: r, onSave: n, initialMaterial: i }) {
    const [c, s] = f.useState((i == null ? void 0 : i.name) ?? "Custom Material"), [a, o] = f.useState((i == null ? void 0 : i.color) ? ht(i.color) : "#808080"), [x, u] = f.useState((i == null ? void 0 : i.metallic) ?? 0), [d, y] = f.useState((i == null ? void 0 : i.roughness) ?? 0.5), [b, C] = f.useState((i == null ? void 0 : i.density) ?? 1e3), k = f.useMemo(() => mt(a), [
      a
    ]), M = f.useMemo(() => jt(k, x, d), [
      k,
      x,
      d
    ]), _ = () => {
      n({
        name: c,
        category: "other",
        color: k,
        metallic: x,
        roughness: d,
        density: b
      }), r(false);
    };
    return e.jsx(Fe, {
      open: t,
      onOpenChange: r,
      children: e.jsxs(_e, {
        title: "Custom Material",
        className: "max-w-sm",
        children: [
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  e.jsx("div", {
                    className: "h-16 w-16 rounded-lg shadow-inner",
                    style: {
                      background: M
                    }
                  }),
                  e.jsxs("div", {
                    className: "flex-1 space-y-1",
                    children: [
                      e.jsx("label", {
                        className: "text-[10px] text-text-muted uppercase tracking-wider",
                        children: "Name"
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: c,
                        onChange: (g) => s(g.target.value),
                        className: "w-full bg-card border border-border px-2 py-1 text-xs text-text outline-none hover:border-text-muted focus:border-brand"
                      })
                    ]
                  })
                ]
              }),
              e.jsxs("div", {
                className: "space-y-1",
                children: [
                  e.jsx("label", {
                    className: "text-[10px] text-text-muted uppercase tracking-wider",
                    children: "Color"
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("input", {
                        type: "color",
                        value: a,
                        onChange: (g) => o(g.target.value),
                        className: "h-8 w-8 cursor-pointer border border-border rounded"
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: a.toUpperCase(),
                        onChange: (g) => {
                          const N = g.target.value;
                          /^#[0-9A-Fa-f]{6}$/.test(N) && o(N);
                        },
                        className: "flex-1 bg-card border border-border px-2 py-1 text-xs text-text font-mono outline-none hover:border-text-muted focus:border-brand"
                      })
                    ]
                  })
                ]
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx("label", {
                    className: "text-[10px] text-text-muted uppercase tracking-wider",
                    children: "Surface Properties"
                  }),
                  e.jsx(j, {
                    label: "Metallic",
                    value: x,
                    onChange: u,
                    step: 0.01,
                    min: 0,
                    max: 1
                  }),
                  e.jsx(j, {
                    label: "Roughness",
                    value: d,
                    onChange: y,
                    step: 0.01,
                    min: 0,
                    max: 1
                  })
                ]
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx("label", {
                    className: "text-[10px] text-text-muted uppercase tracking-wider",
                    children: "Physical Properties"
                  }),
                  e.jsx(j, {
                    label: "Density",
                    value: b,
                    onChange: C,
                    step: 10,
                    min: 1,
                    max: 25e3,
                    unit: "kg/m\xB3"
                  })
                ]
              })
            ]
          }),
          e.jsxs(Ie, {
            children: [
              e.jsx("button", {
                type: "button",
                onClick: () => r(false),
                className: "px-3 py-1.5 text-xs text-text-muted hover:text-text hover:bg-hover",
                children: "Cancel"
              }),
              e.jsx("button", {
                type: "button",
                onClick: _,
                className: "px-3 py-1.5 text-xs bg-brand text-white hover:bg-brand/90",
                children: "Save Material"
              })
            ]
          })
        ]
      })
    });
  }
  function ft({ partId: t, currentMaterialKey: r, volumeMm3: n }) {
    var _a;
    const [i, c] = f.useState(""), [s, a] = f.useState(false), [o, x] = f.useState(0), u = h((p) => p.setPartMaterial), d = w((p) => p.setPreviewMaterial), y = w((p) => p.addRecentMaterial), b = w((p) => p.toggleFavoriteMaterial), C = w((p) => p.recentMaterials), k = w((p) => p.favoriteMaterials);
    f.useEffect(() => () => d(null), [
      t,
      d
    ]);
    const M = f.useMemo(() => i.trim() ? le(i) : null, [
      i
    ]), _ = f.useMemo(() => C.map((p) => A(p)).filter((p) => p !== void 0), [
      C
    ]), g = f.useMemo(() => k.map((p) => A(p)).filter((p) => p !== void 0), [
      k
    ]), N = f.useCallback((p) => {
      const E = h.getState(), O = structuredClone(E.document);
      O.materials[p.key] || (O.materials[p.key] = {
        name: p.name,
        color: p.color,
        metallic: p.metallic,
        roughness: p.roughness
      }, h.setState({
        document: O,
        isDirty: true
      })), u(t, p.key), y(p.key), d(null);
    }, [
      t,
      u,
      y,
      d
    ]), P = f.useCallback((p) => {
      d(p ? {
        partId: t,
        materialKey: p.key
      } : null);
    }, [
      t,
      d
    ]), I = f.useCallback((p) => {
      const E = `custom-${Date.now()}-${o}`;
      x((be) => be + 1);
      const O = h.getState(), Q = structuredClone(O.document);
      Q.materials[E] = {
        name: p.name,
        color: p.color,
        metallic: p.metallic,
        roughness: p.roughness
      }, h.setState({
        document: Q,
        isDirty: true
      }), u(t, E), y(E);
    }, [
      t,
      o,
      u,
      y
    ]), l = (_a = A(r)) == null ? void 0 : _a.category;
    return e.jsxs("div", {
      className: "space-y-2",
      children: [
        e.jsxs("div", {
          className: "relative",
          children: [
            e.jsx(ce, {
              size: 12,
              className: "absolute left-2 top-1/2 -translate-y-1/2 text-text-muted"
            }),
            e.jsx("input", {
              type: "text",
              placeholder: "Search materials...",
              value: i,
              onChange: (p) => c(p.target.value),
              className: "w-full bg-card border border-border pl-7 pr-2 py-1 text-xs text-text placeholder-text-muted outline-none hover:border-text-muted focus:border-brand"
            })
          ]
        }),
        M !== null ? e.jsxs("div", {
          className: "space-y-1",
          children: [
            e.jsxs("div", {
              className: "text-[10px] text-text-muted",
              children: [
                M.length,
                " results"
              ]
            }),
            e.jsx("div", {
              className: "flex flex-wrap gap-1.5",
              children: M.map((p) => e.jsx(R, {
                content: e.jsx(Z, {
                  material: p,
                  volumeMm3: n
                }),
                side: "right",
                children: e.jsx("div", {
                  children: e.jsx(V, {
                    material: p,
                    selected: p.key === r,
                    onClick: () => N(p),
                    onMouseEnter: () => P(p),
                    onMouseLeave: () => P(null)
                  })
                })
              }, p.key))
            })
          ]
        }) : e.jsxs(e.Fragment, {
          children: [
            g.length > 0 && e.jsxs("div", {
              className: "space-y-1",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-text-muted",
                  children: [
                    e.jsx(W, {
                      size: 10,
                      weight: "fill",
                      className: "text-yellow-500"
                    }),
                    "Favorites"
                  ]
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-1.5 pl-3",
                  children: g.map((p) => e.jsx(R, {
                    content: e.jsx(Z, {
                      material: p,
                      volumeMm3: n
                    }),
                    side: "right",
                    children: e.jsx("div", {
                      children: e.jsx(V, {
                        material: p,
                        selected: p.key === r,
                        onClick: () => N(p),
                        onMouseEnter: () => P(p),
                        onMouseLeave: () => P(null)
                      })
                    })
                  }, p.key))
                })
              ]
            }),
            _.length > 0 && e.jsxs("div", {
              className: "space-y-1",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-text-muted",
                  children: [
                    e.jsx(je, {
                      size: 10
                    }),
                    "Recent"
                  ]
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-1.5 pl-3",
                  children: _.map((p) => e.jsx(R, {
                    content: e.jsx(Z, {
                      material: p,
                      volumeMm3: n
                    }),
                    side: "right",
                    children: e.jsx("div", {
                      children: e.jsx(V, {
                        material: p,
                        selected: p.key === r,
                        onClick: () => N(p),
                        onMouseEnter: () => P(p),
                        onMouseLeave: () => P(null)
                      })
                    })
                  }, p.key))
                })
              ]
            }),
            e.jsx("div", {
              className: "space-y-0.5 max-h-48 overflow-y-auto scrollbar-thin",
              children: de.map((p) => e.jsx(fe, {
                category: p,
                materials: xe(p),
                selectedKey: r,
                favorites: k,
                volumeMm3: n,
                defaultOpen: p === l || p === "metals",
                onSelect: N,
                onPreview: P,
                onToggleFavorite: b
              }, p))
            })
          ]
        }),
        e.jsxs("button", {
          type: "button",
          onClick: () => a(true),
          className: "flex items-center gap-1.5 w-full px-2 py-1.5 text-xs text-text-muted hover:text-text hover:bg-hover border border-dashed border-border hover:border-text-muted",
          children: [
            e.jsx(ue, {
              size: 12
            }),
            "Custom Material"
          ]
        }),
        e.jsx(ve, {
          open: s,
          onOpenChange: a,
          onSave: I
        })
      ]
    });
  }
  function vt({ instanceId: t, currentMaterialKey: r }) {
    var _a;
    const [n, i] = f.useState(""), [c, s] = f.useState(false), [a, o] = f.useState(0), x = h((l) => l.setInstanceMaterial), u = w((l) => l.setPreviewMaterial), d = w((l) => l.addRecentMaterial), y = w((l) => l.toggleFavoriteMaterial), b = w((l) => l.recentMaterials), C = w((l) => l.favoriteMaterials);
    f.useEffect(() => () => u(null), [
      t,
      u
    ]);
    const k = f.useMemo(() => n.trim() ? le(n) : null, [
      n
    ]), M = f.useMemo(() => b.map((l) => A(l)).filter((l) => l !== void 0), [
      b
    ]), _ = f.useMemo(() => C.map((l) => A(l)).filter((l) => l !== void 0), [
      C
    ]), g = f.useCallback((l) => {
      const p = h.getState(), E = structuredClone(p.document);
      E.materials[l.key] || (E.materials[l.key] = {
        name: l.name,
        color: l.color,
        metallic: l.metallic,
        roughness: l.roughness
      }, h.setState({
        document: E,
        isDirty: true
      })), x(t, l.key), d(l.key), u(null);
    }, [
      t,
      x,
      d,
      u
    ]), N = f.useCallback((l) => {
      u(l ? {
        partId: t,
        materialKey: l.key
      } : null);
    }, [
      t,
      u
    ]), P = f.useCallback((l) => {
      const p = `custom-${Date.now()}-${a}`;
      o((Q) => Q + 1);
      const E = h.getState(), O = structuredClone(E.document);
      O.materials[p] = {
        name: l.name,
        color: l.color,
        metallic: l.metallic,
        roughness: l.roughness
      }, h.setState({
        document: O,
        isDirty: true
      }), x(t, p), d(p);
    }, [
      t,
      a,
      x,
      d
    ]), D = (_a = A(r)) == null ? void 0 : _a.category;
    return e.jsxs("div", {
      className: "space-y-2",
      children: [
        e.jsxs("div", {
          className: "relative",
          children: [
            e.jsx(ce, {
              size: 12,
              className: "absolute left-2 top-1/2 -translate-y-1/2 text-text-muted"
            }),
            e.jsx("input", {
              type: "text",
              placeholder: "Search materials...",
              value: n,
              onChange: (l) => i(l.target.value),
              className: "w-full bg-card border border-border pl-7 pr-2 py-1 text-xs text-text placeholder-text-muted outline-none hover:border-text-muted focus:border-brand"
            })
          ]
        }),
        k !== null ? e.jsxs("div", {
          className: "space-y-1",
          children: [
            e.jsxs("div", {
              className: "text-[10px] text-text-muted",
              children: [
                k.length,
                " results"
              ]
            }),
            e.jsx("div", {
              className: "flex flex-wrap gap-1.5",
              children: k.map((l) => e.jsx(R, {
                content: e.jsx(Z, {
                  material: l
                }),
                side: "right",
                children: e.jsx("div", {
                  children: e.jsx(V, {
                    material: l,
                    selected: l.key === r,
                    onClick: () => g(l),
                    onMouseEnter: () => N(l),
                    onMouseLeave: () => N(null)
                  })
                })
              }, l.key))
            })
          ]
        }) : e.jsxs(e.Fragment, {
          children: [
            _.length > 0 && e.jsxs("div", {
              className: "space-y-1",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-text-muted",
                  children: [
                    e.jsx(W, {
                      size: 10,
                      weight: "fill",
                      className: "text-yellow-500"
                    }),
                    "Favorites"
                  ]
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-1.5 pl-3",
                  children: _.map((l) => e.jsx(R, {
                    content: e.jsx(Z, {
                      material: l
                    }),
                    side: "right",
                    children: e.jsx("div", {
                      children: e.jsx(V, {
                        material: l,
                        selected: l.key === r,
                        onClick: () => g(l),
                        onMouseEnter: () => N(l),
                        onMouseLeave: () => N(null)
                      })
                    })
                  }, l.key))
                })
              ]
            }),
            M.length > 0 && e.jsxs("div", {
              className: "space-y-1",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-text-muted",
                  children: [
                    e.jsx(je, {
                      size: 10
                    }),
                    "Recent"
                  ]
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-1.5 pl-3",
                  children: M.map((l) => e.jsx(R, {
                    content: e.jsx(Z, {
                      material: l
                    }),
                    side: "right",
                    children: e.jsx("div", {
                      children: e.jsx(V, {
                        material: l,
                        selected: l.key === r,
                        onClick: () => g(l),
                        onMouseEnter: () => N(l),
                        onMouseLeave: () => N(null)
                      })
                    })
                  }, l.key))
                })
              ]
            }),
            e.jsx("div", {
              className: "space-y-0.5 max-h-48 overflow-y-auto scrollbar-thin",
              children: de.map((l) => e.jsx(fe, {
                category: l,
                materials: xe(l),
                selectedKey: r,
                favorites: C,
                defaultOpen: l === D || l === "metals",
                onSelect: g,
                onPreview: N,
                onToggleFavorite: y
              }, l))
            })
          ]
        }),
        e.jsxs("button", {
          type: "button",
          onClick: () => s(true),
          className: "flex items-center gap-1.5 w-full px-2 py-1.5 text-xs text-text-muted hover:text-text hover:bg-hover border border-dashed border-border hover:border-text-muted",
          children: [
            e.jsx(ue, {
              size: 12
            }),
            "Custom Material"
          ]
        }),
        e.jsx(ve, {
          open: c,
          onOpenChange: s,
          onSave: P
        })
      ]
    });
  }
  function gt(t) {
    const r = pe((i) => i.scene), n = h((i) => i.parts);
    return f.useMemo(() => {
      if (!t || !r) return;
      const i = n.findIndex((s) => s.id === t);
      if (i === -1) return;
      const c = r.parts[i];
      if (c) return ze(c.mesh);
    }, [
      t,
      r,
      n
    ]);
  }
  function U() {
    const t = w((r) => r.setSidebarPane);
    return e.jsx("button", {
      onClick: () => t("tree"),
      className: "flex h-6 w-6 -ml-1 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
      "aria-label": m("panel.back_to_tree"),
      title: m("panel.back_to_tree"),
      children: e.jsx(qe, {
        size: 14
      })
    });
  }
  const bt = f.lazy(() => Ne(() => import("./index-9ryf29cW.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }).then((t) => t.fy), __vite__mapDeps([0,1,2,3,4])).then((t) => ({
    default: t.EmbroideryProperties
  })));
  function v({ children: t, tooltip: r }) {
    const n = e.jsx("div", {
      className: "text-[10px] font-medium uppercase tracking-wider text-text-muted pt-2 pb-1",
      children: t
    });
    return r ? e.jsx(R, {
      content: r,
      side: "left",
      children: e.jsx("div", {
        className: "cursor-help",
        children: n
      })
    }) : n;
  }
  function se({ kind: t }) {
    return e.jsx("span", {
      className: "text-[10px] px-1.5 py-0.5 bg-hover border border-border/50 text-text-muted uppercase tracking-wide",
      children: t
    });
  }
  function yt({ partId: t }) {
    var _a;
    const r = h((o) => o.document), i = h((o) => o.parts).find((o) => o.id === t), c = gt(t);
    if (!i) return null;
    const a = ((_a = r.roots.find((o) => o.root === i.translateNodeId)) == null ? void 0 : _a.material) ?? "default";
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.material"),
          children: m("panel.section.material")
        }),
        e.jsx(ft, {
          partId: t,
          currentMaterialKey: a,
          volumeMm3: c
        })
      ]
    });
  }
  function Nt({ part: t, offset: r }) {
    const n = h((i) => i.setTranslation);
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.position"),
          children: m("panel.section.position")
        }),
        e.jsxs("div", {
          className: "space-y-0.5",
          children: [
            e.jsx(j, {
              label: "X",
              value: r.x,
              onChange: (i) => n(t.id, {
                ...r,
                x: i
              }),
              unit: "mm"
            }),
            e.jsx(j, {
              label: "Y",
              value: r.y,
              onChange: (i) => n(t.id, {
                ...r,
                y: i
              }),
              unit: "mm"
            }),
            e.jsx(j, {
              label: "Z",
              value: r.z,
              onChange: (i) => n(t.id, {
                ...r,
                z: i
              }),
              unit: "mm"
            })
          ]
        })
      ]
    });
  }
  function St({ part: t, angles: r }) {
    const n = h((i) => i.setRotation);
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.rotation"),
          children: m("panel.section.rotation")
        }),
        e.jsxs("div", {
          className: "space-y-0.5",
          children: [
            e.jsx(j, {
              label: "X",
              value: r.x,
              step: 1,
              onChange: (i) => n(t.id, {
                ...r,
                x: i
              }),
              unit: "\xB0"
            }),
            e.jsx(j, {
              label: "Y",
              value: r.y,
              step: 1,
              onChange: (i) => n(t.id, {
                ...r,
                y: i
              }),
              unit: "\xB0"
            }),
            e.jsx(j, {
              label: "Z",
              value: r.z,
              step: 1,
              onChange: (i) => n(t.id, {
                ...r,
                z: i
              }),
              unit: "\xB0"
            })
          ]
        })
      ]
    });
  }
  function wt({ part: t, factor: r }) {
    const n = h((i) => i.setScale);
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.scale"),
          children: m("panel.section.scale")
        }),
        e.jsxs("div", {
          className: "space-y-0.5",
          children: [
            e.jsx(j, {
              label: "X",
              value: r.x,
              step: 0.1,
              onChange: (i) => n(t.id, {
                ...r,
                x: i
              })
            }),
            e.jsx(j, {
              label: "Y",
              value: r.y,
              step: 0.1,
              onChange: (i) => n(t.id, {
                ...r,
                y: i
              })
            }),
            e.jsx(j, {
              label: "Z",
              value: r.z,
              step: 0.1,
              onChange: (i) => n(t.id, {
                ...r,
                z: i
              })
            })
          ]
        })
      ]
    });
  }
  function Ct({ part: t }) {
    const r = h((x) => x.document), n = h((x) => x.updatePrimitiveOp), i = Y(t.primitiveNodeId, "size.x"), c = Y(t.primitiveNodeId, "size.y"), s = Y(t.primitiveNodeId, "size.z"), a = r.nodes[String(t.primitiveNodeId)];
    if (!a || a.op.type !== "Cube") return null;
    const { size: o } = a.op;
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.dimensions_box"),
          children: m("panel.section.dimensions")
        }),
        e.jsxs("div", {
          className: "space-y-0.5",
          children: [
            e.jsx(j, {
              label: "W",
              primeKey: "W",
              value: o.x,
              min: 0.1,
              onChange: (x) => n(t.id, {
                type: "Cube",
                size: {
                  ...o,
                  x
                }
              }),
              onCommit: () => w.getState().setFocusZone("viewport"),
              unit: "mm",
              ...i
            }),
            e.jsx(j, {
              label: "H",
              primeKey: "H",
              value: o.y,
              min: 0.1,
              onChange: (x) => n(t.id, {
                type: "Cube",
                size: {
                  ...o,
                  y: x
                }
              }),
              onCommit: () => w.getState().setFocusZone("viewport"),
              unit: "mm",
              ...c
            }),
            e.jsx(j, {
              label: "D",
              primeKey: "D",
              value: o.z,
              min: 0.1,
              onChange: (x) => n(t.id, {
                type: "Cube",
                size: {
                  ...o,
                  z: x
                }
              }),
              onCommit: () => w.getState().setFocusZone("viewport"),
              unit: "mm",
              ...s
            })
          ]
        })
      ]
    });
  }
  function kt({ part: t }) {
    const r = h((o) => o.document), n = h((o) => o.updatePrimitiveOp), i = Y(t.primitiveNodeId, "radius"), c = Y(t.primitiveNodeId, "height"), s = r.nodes[String(t.primitiveNodeId)];
    if (!s || s.op.type !== "Cylinder") return null;
    const a = s.op;
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.dimensions_cylinder"),
          children: m("panel.section.dimensions")
        }),
        e.jsxs("div", {
          className: "space-y-0.5",
          children: [
            e.jsx(j, {
              label: "R",
              primeKey: "R",
              value: a.radius,
              min: 0.1,
              onChange: (o) => n(t.id, {
                ...a,
                radius: o
              }),
              onCommit: () => w.getState().setFocusZone("viewport"),
              unit: "mm",
              ...i
            }),
            e.jsx(j, {
              label: "H",
              primeKey: "H",
              value: a.height,
              min: 0.1,
              onChange: (o) => n(t.id, {
                ...a,
                height: o
              }),
              onCommit: () => w.getState().setFocusZone("viewport"),
              unit: "mm",
              ...c
            })
          ]
        })
      ]
    });
  }
  function Pt({ part: t }) {
    const r = h((a) => a.document), n = h((a) => a.updatePrimitiveOp), i = Y(t.primitiveNodeId, "radius"), c = r.nodes[String(t.primitiveNodeId)];
    if (!c || c.op.type !== "Sphere") return null;
    const s = c.op;
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.dimensions_sphere"),
          children: m("panel.section.dimensions")
        }),
        e.jsx("div", {
          className: "space-y-0.5",
          children: e.jsx(j, {
            label: "R",
            primeKey: "R",
            value: s.radius,
            min: 0.1,
            onChange: (a) => n(t.id, {
              ...s,
              radius: a
            }),
            onCommit: () => w.getState().setFocusZone("viewport"),
            unit: "mm",
            ...i
          })
        })
      ]
    });
  }
  function Mt({ part: t }) {
    const r = h((o) => o.document), n = h((o) => o.updateSweepOp), i = B(), c = r.nodes[String(t.sweepNodeId)];
    if (!c || c.op.type !== "Sweep") return null;
    const s = c.op, a = s.path.type === "Helix" ? s.path : null;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Profile sketch used for sweep",
              children: "Profile"
            }),
            e.jsx(H, {
              label: "",
              value: `Sketch #${s.sketch}`,
              tooltip: "Sketch reference \u2014 editing not yet supported"
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Path curve for sweep",
              children: "Path"
            }),
            e.jsx(H, {
              label: "",
              value: s.path.type === "Helix" ? "Helix" : "Line",
              tooltip: "Path type \u2014 editing not yet supported"
            })
          ]
        }),
        a && e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Helix path parameters",
              children: "Helix Path"
            }),
            e.jsxs("div", {
              className: "space-y-0.5",
              children: [
                e.jsx(j, {
                  label: "Radius",
                  value: a.radius,
                  min: 0.1,
                  step: 0.5,
                  onChange: (o) => n(t.id, {
                    path: {
                      ...a,
                      radius: o
                    }
                  }),
                  unit: "mm",
                  ...i
                }),
                e.jsx(j, {
                  label: "Pitch",
                  value: a.pitch,
                  min: 0.1,
                  step: 0.5,
                  onChange: (o) => n(t.id, {
                    path: {
                      ...a,
                      pitch: o
                    }
                  }),
                  unit: "mm",
                  ...i
                }),
                e.jsx(j, {
                  label: "Height",
                  value: a.height,
                  min: 0.1,
                  step: 1,
                  onChange: (o) => n(t.id, {
                    path: {
                      ...a,
                      height: o
                    }
                  }),
                  unit: "mm",
                  ...i
                }),
                e.jsx(j, {
                  label: "Turns",
                  value: a.turns,
                  min: 0.25,
                  step: 0.25,
                  onChange: (o) => n(t.id, {
                    path: {
                      ...a,
                      turns: o
                    }
                  }),
                  ...i
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Initial rotation of the profile around the path",
              children: "Orientation"
            }),
            e.jsx(j, {
              label: "Angle",
              value: (s.orientation ?? 0) * (180 / Math.PI),
              step: 5,
              onChange: (o) => n(t.id, {
                orientation: o * (Math.PI / 180)
              }),
              unit: "\xB0",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Twist angle along the sweep path",
              children: "Twist"
            }),
            e.jsx(j, {
              label: "Angle",
              value: (s.twist_angle ?? 0) * (180 / Math.PI),
              step: 5,
              onChange: (o) => n(t.id, {
                twist_angle: o * (Math.PI / 180)
              }),
              unit: "\xB0",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Scale factor at start and end of sweep",
              children: "Scale"
            }),
            e.jsxs("div", {
              className: "space-y-0.5",
              children: [
                e.jsx(j, {
                  label: "Start",
                  value: s.scale_start ?? 1,
                  min: 0.1,
                  step: 0.1,
                  onChange: (o) => n(t.id, {
                    scale_start: o
                  }),
                  ...i
                }),
                e.jsx(j, {
                  label: "End",
                  value: s.scale_end ?? 1,
                  min: 0.1,
                  step: 0.1,
                  onChange: (o) => n(t.id, {
                    scale_end: o
                  }),
                  ...i
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Higher values = smoother but more polygons",
              children: "Quality"
            }),
            e.jsxs("div", {
              className: "space-y-0.5",
              children: [
                e.jsx(j, {
                  label: "Path Segments",
                  value: s.path_segments ?? 0,
                  min: 0,
                  max: 500,
                  step: 10,
                  onChange: (o) => n(t.id, {
                    path_segments: o
                  }),
                  ...i
                }),
                e.jsx("div", {
                  className: "text-[10px] text-text-muted pl-1 pb-1",
                  children: "0 = auto"
                }),
                e.jsx(j, {
                  label: "Arc Segments",
                  value: s.arc_segments ?? 8,
                  min: 1,
                  max: 32,
                  step: 1,
                  onChange: (o) => n(t.id, {
                    arc_segments: o
                  }),
                  ...i
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function H({ label: t, value: r, tooltip: n }) {
    const i = e.jsxs("div", {
      className: "flex items-center gap-1.5 text-xs",
      children: [
        e.jsx("span", {
          className: "shrink-0 text-[10px] w-4 text-text-muted font-medium",
          children: t
        }),
        e.jsx("span", {
          className: "flex-1 min-w-0 rounded-md bg-card border border-border px-2 py-1 text-xs text-text-muted truncate opacity-60 cursor-not-allowed",
          children: r
        })
      ]
    });
    return n ? e.jsx(R, {
      content: n,
      side: "top",
      children: e.jsx("div", {
        children: i
      })
    }) : i;
  }
  function B() {
    const t = h((r) => r.setParameterDragging);
    return f.useMemo(() => ({
      onScrubStart: () => t(true),
      onScrubEnd: () => t(false)
    }), [
      t
    ]);
  }
  function Ft({ part: t }) {
    const r = h((n) => n.updateBooleanType);
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          children: m("panel.section.operation")
        }),
        e.jsxs("select", {
          value: t.booleanType,
          onChange: (n) => r(t.id, n.target.value),
          className: "w-full text-xs bg-hover border border-border rounded px-2 py-1 text-text focus:outline-none focus:border-brand",
          children: [
            e.jsx("option", {
              value: "union",
              children: m("bool.union")
            }),
            e.jsx("option", {
              value: "difference",
              children: m("bool.difference")
            }),
            e.jsx("option", {
              value: "intersection",
              children: m("bool.intersection")
            })
          ]
        })
      ]
    });
  }
  function _t({ part: t }) {
    const r = h((x) => x.document), n = h((x) => x.setFeatureParam), i = B(), c = r.nodes[String(t.extrudeNodeId)];
    if (!c || c.op.type !== "Extrude") return null;
    const s = c.op, a = s.direction, o = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Extrusion depth along direction vector",
              children: m("panel.section.depth")
            }),
            e.jsx(j, {
              label: "Depth",
              value: o,
              min: 0.01,
              onChange: (x) => n(t.id, "depth", z(x)),
              unit: "mm",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Twist the profile along the extrusion axis",
              children: m("panel.section.twist")
            }),
            e.jsx(j, {
              label: "Angle",
              value: (s.twist_angle ?? 0) * (180 / Math.PI),
              step: 5,
              onChange: (x) => n(t.id, "twist_angle", z(x * (Math.PI / 180))),
              unit: "\xB0",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Scale factor at end of extrusion (1.0 = no taper)",
              children: m("panel.section.taper")
            }),
            e.jsx(j, {
              label: "Scale",
              value: s.scale_end ?? 1,
              min: 0.01,
              step: 0.1,
              onChange: (x) => n(t.id, "scale_end", z(x)),
              ...i
            })
          ]
        })
      ]
    });
  }
  function It({ part: t }) {
    const r = h((a) => a.document), n = h((a) => a.setFeatureParam), i = B(), c = r.nodes[String(t.revolveNodeId)];
    if (!c || c.op.type !== "Revolve") return null;
    const s = c.op;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Angle of revolution (degrees)",
              children: m("panel.section.angle")
            }),
            e.jsx(j, {
              label: "Angle",
              value: s.angle_deg,
              min: 0.1,
              max: 360,
              step: 5,
              onChange: (a) => n(t.id, "angle_deg", z(a)),
              unit: "\xB0",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: m("panel.tooltip.mirror_readonly"),
              children: m("panel.section.axis")
            }),
            e.jsxs("div", {
              className: "space-y-0.5",
              children: [
                e.jsx(H, {
                  label: "X",
                  value: s.axis_dir.x.toFixed(2),
                  tooltip: "Editing not yet supported"
                }),
                e.jsx(H, {
                  label: "Y",
                  value: s.axis_dir.y.toFixed(2),
                  tooltip: "Editing not yet supported"
                }),
                e.jsx(H, {
                  label: "Z",
                  value: s.axis_dir.z.toFixed(2),
                  tooltip: "Editing not yet supported"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function zt({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.setFeatureParam), i = B(), c = r.nodes[String(t.filletNodeId)];
    return !c || c.op.type !== "Fillet" ? null : e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.fillet_radius"),
          children: m("panel.section.radius")
        }),
        e.jsx(j, {
          label: "R",
          value: c.op.radius,
          min: 0.1,
          step: 0.5,
          onChange: (s) => n(t.id, "radius", z(s)),
          unit: "mm",
          ...i
        })
      ]
    });
  }
  function Dt({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.setFeatureParam), i = B(), c = r.nodes[String(t.chamferNodeId)];
    return !c || c.op.type !== "Chamfer" ? null : e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.chamfer_distance"),
          children: m("panel.section.distance")
        }),
        e.jsx(j, {
          label: "D",
          value: c.op.distance,
          min: 0.1,
          step: 0.5,
          onChange: (s) => n(t.id, "distance", z(s)),
          unit: "mm",
          ...i
        })
      ]
    });
  }
  function Et({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.setFeatureParam), i = B(), c = r.nodes[String(t.shellNodeId)];
    return !c || c.op.type !== "Shell" ? null : e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.shell_thickness"),
          children: m("panel.section.thickness")
        }),
        e.jsx(j, {
          label: "T",
          value: c.op.thickness,
          min: 0.1,
          step: 0.5,
          onChange: (s) => n(t.id, "thickness", z(s)),
          unit: "mm",
          ...i
        })
      ]
    });
  }
  function $t({ part: t }) {
    const r = h((o) => o.document), n = h((o) => o.setFeatureParam), i = B(), c = r.nodes[String(t.patternNodeId)];
    if (!c || c.op.type !== "LinearPattern") return null;
    const s = c.op, a = s.direction;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Direction vector for the pattern",
              children: m("panel.section.direction")
            }),
            e.jsxs("div", {
              className: "space-y-0.5",
              children: [
                e.jsx(j, {
                  label: "X",
                  value: a.x,
                  onChange: (o) => n(t.id, "direction", T(o, a.y, a.z)),
                  unit: "mm",
                  ...i
                }),
                e.jsx(j, {
                  label: "Y",
                  value: a.y,
                  onChange: (o) => n(t.id, "direction", T(a.x, o, a.z)),
                  unit: "mm",
                  ...i
                }),
                e.jsx(j, {
                  label: "Z",
                  value: a.z,
                  onChange: (o) => n(t.id, "direction", T(a.x, a.y, o)),
                  unit: "mm",
                  ...i
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Number of copies in the pattern",
              children: m("panel.section.count")
            }),
            e.jsx(j, {
              label: "N",
              value: s.count,
              min: 1,
              max: 100,
              step: 1,
              onChange: (o) => n(t.id, "count", z(Math.round(o))),
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Distance between copies (mm)",
              children: m("panel.section.spacing")
            }),
            e.jsx(j, {
              label: "S",
              value: s.spacing,
              min: 0.1,
              step: 1,
              onChange: (o) => n(t.id, "spacing", z(o)),
              unit: "mm",
              ...i
            })
          ]
        })
      ]
    });
  }
  function Lt({ part: t }) {
    const r = h((a) => a.document), n = h((a) => a.setFeatureParam), i = B(), c = r.nodes[String(t.patternNodeId)];
    if (!c || c.op.type !== "CircularPattern") return null;
    const s = c.op;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Number of copies around the axis",
              children: m("panel.section.count")
            }),
            e.jsx(j, {
              label: "N",
              value: s.count,
              min: 1,
              max: 100,
              step: 1,
              onChange: (a) => n(t.id, "count", z(Math.round(a))),
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Total angle of the circular pattern (degrees)",
              children: m("panel.section.angle")
            }),
            e.jsx(j, {
              label: "Angle",
              value: s.angle_deg,
              min: 1,
              max: 360,
              step: 5,
              onChange: (a) => n(t.id, "angle_deg", z(a)),
              unit: "\xB0",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Point on the rotation axis",
              children: m("panel.section.axis_origin")
            }),
            e.jsxs("div", {
              className: "space-y-0.5",
              children: [
                e.jsx(j, {
                  label: "X",
                  value: s.axis_origin.x,
                  onChange: (a) => n(t.id, "axis_origin", T(a, s.axis_origin.y, s.axis_origin.z)),
                  unit: "mm",
                  ...i
                }),
                e.jsx(j, {
                  label: "Y",
                  value: s.axis_origin.y,
                  onChange: (a) => n(t.id, "axis_origin", T(s.axis_origin.x, a, s.axis_origin.z)),
                  unit: "mm",
                  ...i
                }),
                e.jsx(j, {
                  label: "Z",
                  value: s.axis_origin.z,
                  onChange: (a) => n(t.id, "axis_origin", T(s.axis_origin.x, s.axis_origin.y, a)),
                  unit: "mm",
                  ...i
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Direction of the rotation axis",
              children: m("panel.section.axis_dir")
            }),
            e.jsxs("div", {
              className: "space-y-0.5",
              children: [
                e.jsx(j, {
                  label: "X",
                  value: s.axis_dir.x,
                  onChange: (a) => n(t.id, "axis_dir", T(a, s.axis_dir.y, s.axis_dir.z)),
                  step: 0.1,
                  ...i
                }),
                e.jsx(j, {
                  label: "Y",
                  value: s.axis_dir.y,
                  onChange: (a) => n(t.id, "axis_dir", T(s.axis_dir.x, a, s.axis_dir.z)),
                  step: 0.1,
                  ...i
                }),
                e.jsx(j, {
                  label: "Z",
                  value: s.axis_dir.z,
                  onChange: (a) => n(t.id, "axis_dir", T(s.axis_dir.x, s.axis_dir.y, a)),
                  step: 0.1,
                  ...i
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Tt({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.setFeatureParam), i = r.nodes[String(t.loftNodeId)];
    if (!i || i.op.type !== "Loft") return null;
    const c = i.op;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Loft connects multiple sketch profiles",
              children: m("panel.section.profiles")
            }),
            e.jsx("div", {
              className: "space-y-0.5",
              children: c.sketches.map((s, a) => e.jsx(H, {
                label: `${a + 1}`,
                value: `Sketch #${s}`,
                tooltip: "Sketch reference \u2014 editing not yet supported"
              }, a))
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Connect last profile back to first",
              children: m("panel.section.closed")
            }),
            e.jsxs("label", {
              className: "flex items-center gap-2 text-xs text-text cursor-pointer",
              children: [
                e.jsx("input", {
                  type: "checkbox",
                  checked: c.closed ?? false,
                  onChange: (s) => n(t.id, "closed", Qe(s.target.checked)),
                  className: "accent-brand"
                }),
                e.jsx("span", {
                  children: c.closed ? "Closed loop" : "Open"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Rt({ part: t }) {
    const r = h((u) => u.document), n = h((u) => u.setFeatureParam), i = B(), c = r.nodes[String(t.textNodeId)];
    if (!c || c.op.type !== "Text2D") return null;
    const s = c.op, a = r.nodes[String(t.extrudeNodeId)], o = (a == null ? void 0 : a.op.type) === "Extrude" ? a.op : null, x = o ? Math.sqrt(o.direction.x ** 2 + o.direction.y ** 2 + o.direction.z ** 2) : 0;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "The text content",
              children: m("panel.section.text")
            }),
            e.jsx(H, {
              label: "",
              value: s.text,
              tooltip: "Editing not yet supported"
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Text height in mm",
              children: m("panel.section.size")
            }),
            e.jsx(j, {
              label: "H",
              value: s.height,
              min: 0.5,
              step: 1,
              onChange: (u) => n(t.id, "height", z(u)),
              unit: "mm",
              ...i
            })
          ]
        }),
        o && e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Extrusion depth (mm)",
              children: m("panel.section.depth")
            }),
            e.jsx(j, {
              label: "D",
              value: x,
              min: 0.1,
              step: 0.5,
              onChange: (u) => n(t.id, "depth", z(u)),
              unit: "mm",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              tooltip: "Spacing between letters",
              children: m("panel.section.spacing")
            }),
            e.jsx(j, {
              label: "Letter",
              value: s.letter_spacing ?? 1,
              min: 0.1,
              step: 0.1,
              onChange: (u) => n(t.id, "letter_spacing", z(u)),
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(v, {
              children: m("panel.section.font")
            }),
            e.jsx(H, {
              label: "",
              value: s.font,
              tooltip: "Editing not yet supported"
            })
          ]
        })
      ]
    });
  }
  function Bt(t) {
    return t.part, e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.mirror_readonly"),
          children: m("panel.section.mirror")
        }),
        e.jsx("div", {
          className: "text-xs text-text-muted",
          children: m("panel.mirror_readonly")
        })
      ]
    });
  }
  function S() {
    return e.jsx("div", {
      className: "border-t border-border/40 my-2"
    });
  }
  function Ot({ instanceId: t }) {
    var _a, _b;
    const r = h((s) => s.document), n = (_a = r.instances) == null ? void 0 : _a.find((s) => s.id === t), i = n ? (_b = r.partDefs) == null ? void 0 : _b[n.partDefId] : void 0, c = (n == null ? void 0 : n.material) ?? (i == null ? void 0 : i.defaultMaterial) ?? "default";
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.material_instance"),
          children: m("panel.section.material")
        }),
        e.jsx(vt, {
          instanceId: t,
          currentMaterialKey: c
        })
      ]
    });
  }
  function Ht({ instance: t }) {
    const r = h((i) => i.setInstanceTransform), n = t.transform ?? he();
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.position_world"),
          children: m("panel.section.position")
        }),
        e.jsxs("div", {
          className: "space-y-0.5",
          children: [
            e.jsx(j, {
              label: "X",
              value: n.translation.x,
              onChange: (i) => r(t.id, {
                ...n,
                translation: {
                  ...n.translation,
                  x: i
                }
              }),
              unit: "mm"
            }),
            e.jsx(j, {
              label: "Y",
              value: n.translation.y,
              onChange: (i) => r(t.id, {
                ...n,
                translation: {
                  ...n.translation,
                  y: i
                }
              }),
              unit: "mm"
            }),
            e.jsx(j, {
              label: "Z",
              value: n.translation.z,
              onChange: (i) => r(t.id, {
                ...n,
                translation: {
                  ...n.translation,
                  z: i
                }
              }),
              unit: "mm"
            })
          ]
        })
      ]
    });
  }
  function Vt({ instance: t }) {
    const r = h((i) => i.setInstanceTransform), n = t.transform ?? he();
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: m("panel.tooltip.rotation_world"),
          children: m("panel.section.rotation")
        }),
        e.jsxs("div", {
          className: "space-y-0.5",
          children: [
            e.jsx(j, {
              label: "X",
              value: n.rotation.x,
              step: 1,
              onChange: (i) => r(t.id, {
                ...n,
                rotation: {
                  ...n.rotation,
                  x: i
                }
              }),
              unit: "\xB0"
            }),
            e.jsx(j, {
              label: "Y",
              value: n.rotation.y,
              step: 1,
              onChange: (i) => r(t.id, {
                ...n,
                rotation: {
                  ...n.rotation,
                  y: i
                }
              }),
              unit: "\xB0"
            }),
            e.jsx(j, {
              label: "Z",
              value: n.rotation.z,
              step: 1,
              onChange: (i) => r(t.id, {
                ...n,
                rotation: {
                  ...n.rotation,
                  z: i
                }
              }),
              unit: "\xB0"
            })
          ]
        })
      ]
    });
  }
  function Zt({ instance: t }) {
    var _a;
    const r = h((s) => s.document), n = w((s) => s.clearSelection), i = (_a = r.partDefs) == null ? void 0 : _a[t.partDefId], c = t.name ?? (i == null ? void 0 : i.name) ?? t.partDefId;
    return e.jsxs("div", {
      className: X("w-full flex flex-col bg-surface", "h-full"),
      children: [
        e.jsxs("div", {
          className: "flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 min-w-0",
              children: [
                e.jsx(U, {}),
                e.jsx("span", {
                  className: "text-xs font-medium text-text truncate",
                  children: c
                }),
                e.jsx(se, {
                  kind: "instance"
                })
              ]
            }),
            e.jsx("button", {
              onClick: n,
              className: "flex h-8 w-8 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
              children: e.jsx(G, {
                size: 14
              })
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx(v, {
                  children: m("panel.section.part_def")
                }),
                e.jsx("div", {
                  className: "text-xs text-text",
                  children: (i == null ? void 0 : i.name) ?? t.partDefId
                })
              ]
            }),
            e.jsx(S, {}),
            e.jsx(Ht, {
              instance: t
            }),
            e.jsx(S, {}),
            e.jsx(Vt, {
              instance: t
            }),
            e.jsx(S, {}),
            e.jsx(Ot, {
              instanceId: t.id
            })
          ]
        })
      ]
    });
  }
  function ne(t) {
    switch (t.type) {
      case "Fixed":
        return m("joint.fixed");
      case "Revolute":
        return m("joint.revolute");
      case "Slider":
        return m("joint.slider");
      case "Cylindrical":
        return m("joint.cylindrical");
      case "Ball":
        return m("joint.ball");
      case "Free":
        return m("joint.free");
    }
  }
  function At({ joint: t }) {
    const r = h((o) => o.setJointState), n = t.kind;
    let i = -180, c = 180, s = 1, a = "\xB0";
    if (n.type === "Revolute") n.limits && ([i, c] = n.limits), a = "\xB0";
    else if (n.type === "Slider") n.limits ? [i, c] = n.limits : (i = 0, c = 100), s = 0.5, a = "mm";
    else if (n.type === "Cylindrical") a = "\xB0";
    else if (n.type === "Ball") a = "\xB0";
    else return null;
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: "Current joint state value",
          children: m("panel.section.state")
        }),
        e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsx("input", {
              type: "range",
              min: i,
              max: c,
              step: s,
              value: t.state,
              onChange: (o) => r(t.id, Number(o.target.value)),
              className: `flex-1 h-1 bg-border rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
            [&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer`
            }),
            e.jsxs("span", {
              className: "text-xs text-text tabular-nums w-16 text-right",
              children: [
                t.state.toFixed(n.type === "Slider" ? 1 : 0),
                a
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex justify-between text-[10px] text-text-muted mt-1",
          children: [
            e.jsxs("span", {
              children: [
                i,
                a
              ]
            }),
            e.jsxs("span", {
              children: [
                c,
                a
              ]
            })
          ]
        })
      ]
    });
  }
  function Yt({ joint: t }) {
    const r = te((s) => s.physicsAvailable), n = te((s) => s.setJointTargetVelocity), i = te((s) => {
      var _a;
      return ((_a = s.jointStates.find((a) => a.id === t.id)) == null ? void 0 : _a.targetVelocity) ?? 0;
    });
    if (!r || t.kind.type === "Fixed") return null;
    const c = t.kind.type === "Slider" ? "mm/s" : "\xB0/s";
    return e.jsxs("div", {
      children: [
        e.jsx(v, {
          tooltip: "Drive this joint at a target velocity while the physics simulation plays",
          children: "Motor"
        }),
        e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsx("input", {
              type: "number",
              step: t.kind.type === "Slider" ? 1 : 15,
              value: i,
              onChange: (s) => n(t.id, Number(s.target.value) || 0),
              className: "w-24 rounded border border-border bg-surface px-2 py-1 text-xs text-text tabular-nums",
              "aria-label": "Motor target velocity"
            }),
            e.jsx("span", {
              className: "text-[10px] text-text-muted",
              children: c
            }),
            i !== 0 && e.jsx("button", {
              type: "button",
              onClick: () => n(t.id, 0),
              className: "text-[10px] text-text-muted underline hover:text-text",
              children: "stop"
            })
          ]
        }),
        e.jsx("div", {
          className: "mt-1 text-[10px] text-text-muted",
          children: "Press Play in Simulate to run the motor."
        })
      ]
    });
  }
  function Xt({ joint: t }) {
    var _a, _b;
    const r = h((x) => x.document), n = w((x) => x.clearSelection), i = f.useMemo(() => {
      var _a2;
      return new Map(((_a2 = r.instances) == null ? void 0 : _a2.map((x) => [
        x.id,
        x
      ])) ?? []);
    }, [
      r.instances
    ]), c = t.parentInstanceId ? ((_a = i.get(t.parentInstanceId)) == null ? void 0 : _a.name) ?? t.parentInstanceId : m("panel.ground"), a = ((_b = i.get(t.childInstanceId)) == null ? void 0 : _b.name) ?? t.childInstanceId, o = t.name ?? `${ne(t.kind)} ${m("joint.suffix")}`;
    return e.jsxs("div", {
      className: X("w-full flex flex-col bg-surface", "h-full"),
      children: [
        e.jsxs("div", {
          className: "flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 min-w-0",
              children: [
                e.jsx(U, {}),
                e.jsx("span", {
                  className: "text-xs font-medium text-text truncate",
                  children: o
                }),
                e.jsx(se, {
                  kind: "joint"
                })
              ]
            }),
            e.jsx("button", {
              onClick: n,
              className: "flex h-8 w-8 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
              children: e.jsx(G, {
                size: 14
              })
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx(v, {
                  children: m("panel.section.type")
                }),
                e.jsx("div", {
                  className: "text-xs text-text",
                  children: ne(t.kind)
                })
              ]
            }),
            e.jsx(S, {}),
            e.jsxs("div", {
              children: [
                e.jsx(v, {
                  children: m("panel.section.connection")
                }),
                e.jsxs("div", {
                  className: "text-xs text-text",
                  children: [
                    e.jsx("span", {
                      className: "text-text-muted",
                      children: m("panel.parent")
                    }),
                    " ",
                    c
                  ]
                }),
                e.jsxs("div", {
                  className: "text-xs text-text",
                  children: [
                    e.jsx("span", {
                      className: "text-text-muted",
                      children: m("panel.child")
                    }),
                    " ",
                    a
                  ]
                })
              ]
            }),
            e.jsx(S, {}),
            t.kind.type !== "Fixed" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(At, {
                  joint: t
                }),
                e.jsx(Yt, {
                  joint: t
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Kt({ item: t }) {
    var _a;
    const r = h((d) => d.parts), n = pe((d) => d.scene), i = w((d) => d.clearSelection);
    me((d) => d.locale);
    const c = r.find((d) => d.id === t.partId), s = r.findIndex((d) => d.id === t.partId), a = h((d) => d.document.roots), o = f.useMemo(() => {
      var _a2;
      if (s < 0) return -1;
      let d = 0;
      for (let y = 0; y < a.length; y++) if (((_a2 = a[y]) == null ? void 0 : _a2.visible) !== false) {
        if (y === s) return d;
        d++;
      }
      return -1;
    }, [
      a,
      s
    ]), x = o >= 0 ? (_a = n == null ? void 0 : n.parts[o]) == null ? void 0 : _a.mesh : null, u = f.useMemo(() => {
      if (!x) return null;
      if (t.kind === "face") {
        const y = nt(x, t.faceIndex);
        let b = 0;
        const C = new K(), k = new K(), M = new K(), _ = new K(), g = new K();
        for (const N of y) {
          const P = x.indices[N * 3], I = x.indices[N * 3 + 1], D = x.indices[N * 3 + 2];
          M.set(x.positions[P * 3], x.positions[P * 3 + 1], x.positions[P * 3 + 2]), _.set(x.positions[I * 3], x.positions[I * 3 + 1], x.positions[I * 3 + 2]), g.set(x.positions[D * 3], x.positions[D * 3 + 1], x.positions[D * 3 + 2]), C.subVectors(_, M), k.subVectors(g, M), b += C.cross(k).length() * 0.5;
        }
        return {
          kind: "face",
          area: b,
          triCount: y.length
        };
      }
      if (t.kind === "edge") {
        const { a: y, b } = it(x, t.edgeId);
        return {
          kind: "edge",
          length: y.distanceTo(b),
          a: y,
          b
        };
      }
      return {
        kind: "vertex",
        position: rt(x, t.vertexId)
      };
    }, [
      x,
      t
    ]);
    return e.jsxs("div", {
      className: X("w-full flex flex-col bg-surface", "h-full"),
      children: [
        e.jsxs("div", {
          className: "flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3",
          children: [
            e.jsx(ge, {
              item: t,
              partName: c == null ? void 0 : c.name
            }),
            e.jsx("button", {
              onClick: i,
              className: "flex h-6 w-6 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
              "aria-label": "Clear selection",
              children: e.jsx(G, {
                size: 12
              })
            })
          ]
        }),
        e.jsxs("div", {
          className: "px-3 py-2 space-y-2 text-xs text-text",
          children: [
            !u && e.jsx("span", {
              className: "text-text-muted",
              children: "Mesh not available."
            }),
            u && u.kind === "face" && t.kind === "face" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(L, {
                  label: "Area",
                  value: `${u.area.toFixed(2)} mm\xB2`
                }),
                e.jsx(L, {
                  label: "Triangles",
                  value: String(u.triCount)
                }),
                e.jsx(L, {
                  label: "Face index",
                  value: String(t.faceIndex)
                })
              ]
            }),
            u && u.kind === "edge" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(L, {
                  label: "Length",
                  value: `${u.length.toFixed(2)} mm`
                }),
                e.jsx(L, {
                  label: "From",
                  value: `(${u.a.x.toFixed(1)}, ${u.a.y.toFixed(1)}, ${u.a.z.toFixed(1)})`
                }),
                e.jsx(L, {
                  label: "To",
                  value: `(${u.b.x.toFixed(1)}, ${u.b.y.toFixed(1)}, ${u.b.z.toFixed(1)})`
                })
              ]
            }),
            u && u.kind === "vertex" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(L, {
                  label: "X",
                  value: `${u.position.x.toFixed(2)} mm`
                }),
                e.jsx(L, {
                  label: "Y",
                  value: `${u.position.y.toFixed(2)} mm`
                }),
                e.jsx(L, {
                  label: "Z",
                  value: `${u.position.z.toFixed(2)} mm`
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function L({ label: t, value: r }) {
    return e.jsxs("div", {
      className: "flex items-baseline justify-between gap-3",
      children: [
        e.jsx("span", {
          className: "text-text-muted uppercase tracking-wider text-[10px]",
          children: t
        }),
        e.jsx("span", {
          className: "tabular-nums",
          children: r
        })
      ]
    });
  }
  function ge({ item: t, partName: r }) {
    const n = h((o) => o.documentName) ?? "Document", i = w((o) => o.select), c = w((o) => o.clearSelection), s = t.kind === "face" || t.kind === "edge" || t.kind === "vertex" ? t.kind : null, a = t.kind === "part" ? t.id : t.partId ?? null;
    return e.jsxs("div", {
      className: "flex min-w-0 items-center gap-1 text-xs",
      children: [
        e.jsx(U, {}),
        e.jsx(ie, {
          label: n,
          onClick: c
        }),
        a && e.jsxs(e.Fragment, {
          children: [
            e.jsx(re, {}),
            e.jsx(ie, {
              label: r ?? a,
              onClick: s ? () => i(a) : void 0
            })
          ]
        }),
        s && e.jsxs(e.Fragment, {
          children: [
            e.jsx(re, {}),
            e.jsx("span", {
              className: "text-text capitalize",
              children: s
            })
          ]
        })
      ]
    });
  }
  function ie({ label: t, onClick: r }) {
    return r ? e.jsx("button", {
      type: "button",
      onClick: r,
      className: "truncate max-w-[12ch] text-text-muted hover:text-text hover:underline underline-offset-2 decoration-text-muted/40 transition-colors",
      title: t,
      children: t
    }) : e.jsx("span", {
      className: "truncate text-text-muted/80 max-w-[12ch]",
      children: t
    });
  }
  function re() {
    return e.jsx("span", {
      className: "text-text-muted/40 shrink-0",
      children: "\u203A"
    });
  }
  ns = function() {
    var _a, _b;
    const t = w((g) => g.selectedPartIds), r = w((g) => g.selection), n = w((g) => g.clearSelection), i = $((g) => g.selection), c = h((g) => g.parts), s = h((g) => g.document), a = f.useRef(null);
    me((g) => g.locale);
    const o = i.type !== "none";
    if (f.useEffect(() => {
      function g(N) {
        N.key === "Escape" && (r.length > 0 && n(), $.getState().selection.type !== "none" && $.getState().select({
          type: "none"
        }));
      }
      return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
    }, [
      r.length,
      n
    ]), o) return e.jsx(at, {});
    if (r.length === 0) return null;
    const x = r[0];
    if (r.length === 1 && x && (x.kind === "face" || x.kind === "edge" || x.kind === "vertex")) return e.jsx(Kt, {
      item: x
    });
    if (t.size === 0) return null;
    if (t.size === 1) {
      const g = Array.from(t)[0];
      if (g.startsWith("joint:")) {
        const P = g.slice(6), I = (_a = s.joints) == null ? void 0 : _a.find((D) => D.id === P);
        if (I) return e.jsx(Xt, {
          joint: I
        });
      }
      const N = (_b = s.instances) == null ? void 0 : _b.find((P) => P.id === g);
      if (N) return e.jsx(Zt, {
        instance: N
      });
    }
    if (t.size > 1) return e.jsxs("div", {
      ref: a,
      className: X("w-full flex flex-col bg-surface", "h-full"),
      children: [
        e.jsxs("div", {
          className: "flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 min-w-0",
              children: [
                e.jsx(U, {}),
                e.jsx("span", {
                  className: "text-xs font-medium text-text",
                  children: De("panel.parts_selected", {
                    count: String(t.size)
                  })
                })
              ]
            }),
            e.jsx("button", {
              onClick: n,
              className: "flex h-8 w-8 sm:h-6 sm:w-6 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
              children: e.jsx(G, {
                size: 14
              })
            })
          ]
        }),
        e.jsx("div", {
          className: "p-3 text-[10px] text-text-muted",
          children: m("panel.select_single")
        })
      ]
    });
    const u = Array.from(t)[0], d = c.find((g) => g.id === u);
    if (!d) return null;
    const y = s.nodes[String(d.translateNodeId)], b = s.nodes[String(d.rotateNodeId)], C = s.nodes[String(d.scaleNodeId)], k = (y == null ? void 0 : y.op.type) === "Translate" ? y.op.offset : {
      x: 0,
      y: 0,
      z: 0
    }, M = (b == null ? void 0 : b.op.type) === "Rotate" ? b.op.angles : {
      x: 0,
      y: 0,
      z: 0
    }, _ = (C == null ? void 0 : C.op.type) === "Scale" ? C.op.factor : {
      x: 1,
      y: 1,
      z: 1
    };
    return e.jsxs("div", {
      ref: a,
      className: X("w-full flex flex-col bg-surface", "h-full"),
      children: [
        e.jsxs("div", {
          className: "flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 min-w-0",
              children: [
                e.jsx(ge, {
                  item: {
                    kind: "part",
                    id: d.id
                  },
                  partName: d.name
                }),
                e.jsx(se, {
                  kind: d.kind
                })
              ]
            }),
            e.jsx("button", {
              onClick: n,
              className: "flex h-8 w-8 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
              children: e.jsx(G, {
                size: 14
              })
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin",
          children: [
            ee(d) && d.kind === "cube" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Ct, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            ee(d) && d.kind === "cylinder" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(kt, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            ee(d) && d.kind === "sphere" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Pt, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Ee(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Ft, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            $e(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Mt, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Le(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(_t, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Te(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(It, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Re(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(zt, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Be(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Dt, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Oe(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Et, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            He(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx($t, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Ve(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Lt, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Ze(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Tt, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Ae(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Rt, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Ye(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Bt, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            Xe(d) && e.jsxs(e.Fragment, {
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: () => $.getState().enter(),
                  className: `w-full mt-2 px-3 py-2 text-xs font-medium rounded-md
                bg-fill text-text border border-border
                hover:bg-fill-strong hover:border-text-muted transition-colors`,
                  children: m("panel.edit_circuit")
                }),
                e.jsx(S, {})
              ]
            }),
            (Ke(d) || Je(d)) && e.jsxs(f.Suspense, {
              fallback: null,
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: () => Ge.getState().openPanel(),
                  className: `w-full mt-2 px-3 py-2 text-xs font-medium rounded-md
                bg-fill text-text border border-border
                hover:bg-fill-strong hover:border-text-muted transition-colors`,
                  children: m("panel.open_embroidery")
                }),
                e.jsx(bt, {
                  part: d
                }),
                e.jsx(S, {})
              ]
            }),
            e.jsx(Nt, {
              part: d,
              offset: k
            }),
            e.jsx(S, {}),
            e.jsx(St, {
              part: d,
              angles: M
            }),
            e.jsx(S, {}),
            e.jsx(wt, {
              part: d,
              factor: _
            }),
            e.jsx(S, {}),
            e.jsx(yt, {
              partId: d.id
            })
          ]
        })
      ]
    });
  };
});
export {
  ns as PropertyPanel,
  __tla
};
