const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCvZCcjD.js","assets/three-drei-en0aG1CM.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-Dk70Q0wd.css"])))=>i.map(i=>d[i]);
import { E as be, _ as ye } from "./three-drei-en0aG1CM.js";
import { k as e, b as f, C as Ne, f as Se } from "./three-fiber-GW7QWJN8.js";
import { c6 as $, b3 as Q, b4 as h, ac as re, bl as Y, v as we, en as ae, a4 as Ce, eo as ke, ep as Pe, bi as R, eq as Me, er as Fe, es as j, et as _e, bc as w, eu as oe, ev as Z, dK as le, ew as ce, ex as de, bj as xe, b5 as ue, z as Ie, bo as pe, aY as De, bp as J, aX as m, aw as U, aj as Ee, aC as ze, an as $e, ax as Le, ao as Te, ak as Re, ay as Be, ar as Oe, al as He, as as Ve, aD as Ae, au as Ze, av as Ye, am as Xe, aB as Ke, cH as Je, _ as D, bd as T, k as Ge, ba as ee, ey as me, __tla as __tla_0 } from "./index-BCvZCcjD.js";
import { c as Qe } from "./CaretLeft.es-Dl_CJtff.js";
import { h as We, l as qe, D as Ue, a as X } from "./three-tnxpQXqG.js";
import { f as et, g as tt, a as st } from "./sub-feature-geometry-tgU-o6Qd.js";
import { f as he } from "./Clock.es-C_rCl1Ek.js";
import { f as W } from "./Star.es-D884S7sY.js";
import { h as nt, g as it } from "./index-COhyxsGg.js";
let ss;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function rt() {
    const t = $((s) => s.selection), r = $((s) => s.netlist), n = Q((s) => s.activeBoardNodeId), i = h((s) => s.document), o = n != null ? re(i, n) : null;
    if (t.type === "component" || t.type === "footprint") return e.jsx(at, {
      compRef: t.ref
    }, t.ref);
    if (t.type === "net") {
      const s = t.netId, a = r == null ? void 0 : r.nets.find((x) => x.name === s), d = (o == null ? void 0 : o.traces.filter((x) => x.net === s).length) ?? 0, p = ((o == null ? void 0 : o.traces) ?? []).filter((x) => x.net === s).reduce((x, c) => {
        const y = c.end.x - c.start.x, b = c.end.y - c.start.y;
        return x + Math.hypot(y, b);
      }, 0);
      return e.jsxs(K, {
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
                value: String(d)
              }),
              e.jsx(F, {
                label: "Total Length",
                value: `${p.toFixed(2)}mm`
              }),
              a && a.connections.length > 0 && e.jsxs("div", {
                className: "pt-1 border-t border-border mt-1",
                children: [
                  e.jsx("div", {
                    className: "text-[10px] text-text-muted mb-0.5",
                    children: "Connections:"
                  }),
                  a.connections.slice(0, 8).map((x, c) => e.jsxs("div", {
                    className: "text-[10px]",
                    children: [
                      x.component_ref,
                      ".",
                      x.pin_number
                    ]
                  }, c)),
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
      const s = o == null ? void 0 : o.traces[t.idx];
      if (!s) return null;
      const a = s.end.x - s.start.x, d = s.end.y - s.start.y, p = Math.hypot(a, d);
      return e.jsxs(K, {
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
                  const x = Q.getState().activeBoardNodeId;
                  x != null && h.getState().removeTrace(x, t.idx), $.getState().select({
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
                value: `${p.toFixed(2)}mm`
              })
            ]
          })
        ]
      });
    }
    if (t.type === "via") {
      const s = o == null ? void 0 : o.vias[t.idx];
      return s ? e.jsxs(K, {
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
                  const a = Q.getState().activeBoardNodeId;
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
    return t.type === "pad" ? e.jsxs(K, {
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
  function at({ compRef: t }) {
    const r = $((l) => l.netlist), n = Q((l) => l.activeBoardNodeId), i = h((l) => l.document), o = n != null ? re(i, n) : null, s = i.schematic, a = s == null ? void 0 : s.components.find((l) => l.ref === t), d = (s == null ? void 0 : s.components.findIndex((l) => l.ref === t)) ?? -1, p = o == null ? void 0 : o.footprints.find((l) => l.ref === t), x = (o == null ? void 0 : o.footprints.findIndex((l) => l.ref === t)) ?? -1, [c, y] = f.useState((a == null ? void 0 : a.value) ?? ""), [b, C] = f.useState(String((p == null ? void 0 : p.position.x) ?? 0)), [k, M] = f.useState(String((p == null ? void 0 : p.position.y) ?? 0)), [_, v] = f.useState(String((p == null ? void 0 : p.rotation) ?? 0)), N = /* @__PURE__ */ new Set();
    if (r) {
      for (const l of r.nets) for (const u of l.connections) if (u.component_ref === t) {
        N.add(l.name);
        break;
      }
    }
    const P = () => {
      d >= 0 && c !== (a == null ? void 0 : a.value) && h.getState().updateSchematicComponent(d, {
        value: c
      }, n ?? void 0);
    }, I = () => {
      const l = parseFloat(b), u = parseFloat(k);
      x >= 0 && !isNaN(l) && !isNaN(u) && n != null && h.getState().moveFootprint(n, x, {
        x: l,
        y: u,
        z: 0
      });
    }, E = () => {
      const l = parseFloat(_);
      if (x >= 0 && !isNaN(l) && l !== ((p == null ? void 0 : p.rotation) ?? 0)) {
        const u = l - ((p == null ? void 0 : p.rotation) ?? 0);
        n != null && h.getState().rotateFootprint(n, x, u);
      }
    };
    return e.jsxs(K, {
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
                  value: c,
                  onChange: (l) => y(l.target.value),
                  onBlur: P,
                  onKeyDown: (l) => l.key === "Enter" && P(),
                  className: "w-20 text-[11px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right"
                })
              ]
            }),
            p && e.jsxs(e.Fragment, {
              children: [
                e.jsx(F, {
                  label: "Footprint",
                  value: p.footprintName
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
                      onChange: (l) => v(l.target.value),
                      onBlur: E,
                      onKeyDown: (l) => l.key === "Enter" && E(),
                      className: "w-16 text-[11px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right",
                      step: 90
                    })
                  ]
                }),
                e.jsx(F, {
                  label: "Side",
                  value: p.front !== false ? "Front" : "Back"
                }),
                e.jsx(F, {
                  label: "Pads",
                  value: String(p.pads.length)
                })
              ]
            }),
            p && e.jsx(ot, {
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
  function K({ children: t }) {
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
  function ot({ compRef: t }) {
    const r = h((s) => s.document.constraints), n = h((s) => s.removeDesignConstraint), i = h((s) => s.updateDesignConstraint), o = (r ?? []).filter((s) => Object.values(s.kind).some((a) => a != null && typeof a == "object" && a.kind === "pcbFootprint" && a.ref === t) || s.kind.ref === t);
    return o.length === 0 ? null : e.jsxs("div", {
      className: "pt-1 border-t border-border mt-1",
      children: [
        e.jsx("div", {
          className: "text-[10px] text-text-muted mb-0.5",
          children: "Constraints:"
        }),
        o.map((s) => {
          const a = s.kind.type, d = s.kind.value;
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
                  d !== void 0 && e.jsx("input", {
                    className: "w-16 text-[10px] text-text bg-transparent border border-border rounded px-1 py-0.5 text-right",
                    defaultValue: String(d),
                    onBlur: (p) => {
                      const x = p.target.value.trim(), c = Number(x);
                      i(s.id, {
                        value: Number.isFinite(c) && x !== "" ? c : x
                      });
                    },
                    title: "Value (mm/deg) or formula over document parameters"
                  }),
                  d !== void 0 && e.jsx("button", {
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
  function lt(t) {
    const [r, n, i] = t.color.map((b) => Math.round(b * 255)), o = t.metallic > 0.5 ? 60 : 30, s = t.roughness > 0.5 ? 40 : 20, a = Math.min(255, r + o), d = Math.min(255, n + o), p = Math.min(255, i + o), x = Math.max(0, r - s), c = Math.max(0, n - s), y = Math.max(0, i - s);
    return `radial-gradient(ellipse at 30% 30%,
    rgb(${a}, ${d}, ${p}) 0%,
    rgb(${r}, ${n}, ${i}) 50%,
    rgb(${x}, ${c}, ${y}) 100%
  )`;
  }
  const ct = {
    sm: "h-5 w-5",
    md: "h-7 w-7",
    lg: "h-10 w-10"
  };
  function V({ material: t, selected: r = false, size: n = "md", onClick: i, onMouseEnter: o, onMouseLeave: s }) {
    const a = lt(t);
    return e.jsx("button", {
      type: "button",
      onClick: i,
      onMouseEnter: o,
      onMouseLeave: s,
      className: Y(ct[n], "rounded-full border-2 cursor-pointer transition-all duration-100", "hover:scale-110 hover:shadow-md", "focus:outline-none focus:ring-2 focus:ring-brand/50", r ? "border-brand ring-2 ring-brand/30" : "border-transparent hover:border-border"),
      style: {
        background: a
      },
      title: t.name
    });
  }
  function dt({ material: t, animate: r = true }) {
    const n = f.useRef(null), i = f.useMemo(() => new We(t.color[0], t.color[1], t.color[2]), [
      t.color
    ]), o = f.useMemo(() => nt(t.key) ? it(t.key) : null, [
      t.key
    ]), s = f.useMemo(() => o ? new qe({
      vertexShader: o.vertexShader,
      fragmentShader: o.fragmentShader,
      uniforms: o.uniforms,
      side: Ue
    }) : null, [
      o
    ]);
    return f.useEffect(() => () => {
      s == null ? void 0 : s.dispose();
    }, [
      s
    ]), Se((a, d) => {
      r && n.current && (n.current.rotation.y += d * 0.3);
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
  function xt({ material: t, size: r = 80, animate: n = true }) {
    return e.jsx("div", {
      style: {
        width: r,
        height: r
      },
      className: "rounded-lg overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-900",
      children: e.jsxs(Ne, {
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
          e.jsx(be, {
            preset: "studio"
          }),
          e.jsx(dt, {
            material: t,
            animate: n
          })
        ]
      })
    });
  }
  function ut() {
    return e.jsx("div", {
      className: "w-20 h-20 rounded-lg bg-gradient-to-b from-neutral-700 to-neutral-800 animate-pulse"
    });
  }
  function A({ material: t, volumeMm3: r }) {
    const n = r ? we(r, t.density) : null;
    return e.jsxs("div", {
      className: "w-56 p-2 space-y-2",
      children: [
        e.jsxs("div", {
          className: "flex gap-3",
          children: [
            e.jsx(f.Suspense, {
              fallback: e.jsx(ut, {}),
              children: e.jsx(xt, {
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
                  children: ae[t.category]
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
                    Ce(n)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function je({ category: t, materials: r, selectedKey: n, favorites: i, volumeMm3: o, defaultOpen: s = false, onSelect: a, onPreview: d, onToggleFavorite: p }) {
    const [x, c] = f.useState(s), y = r.some((b) => b.key === n);
    return e.jsxs("div", {
      children: [
        e.jsxs("button", {
          type: "button",
          onClick: () => c(!x),
          className: "flex items-center w-full gap-1 py-1 text-[10px] font-medium uppercase tracking-wider text-text-muted hover:text-text",
          children: [
            x ? e.jsx(ke, {
              size: 10
            }) : e.jsx(Pe, {
              size: 10
            }),
            e.jsx("span", {
              className: "flex-1 text-left",
              children: ae[t]
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
        x && e.jsx("div", {
          className: "flex flex-wrap gap-1.5 py-1.5 pl-3",
          children: r.map((b) => {
            const C = i.includes(b.key);
            return e.jsx(R, {
              content: e.jsx(A, {
                material: b,
                volumeMm3: o
              }),
              side: "right",
              children: e.jsxs("div", {
                className: "relative group",
                children: [
                  e.jsx(V, {
                    material: b,
                    selected: b.key === n,
                    onClick: () => a(b),
                    onMouseEnter: () => d(b),
                    onMouseLeave: () => d(null)
                  }),
                  C && e.jsx(W, {
                    weight: "fill",
                    size: 8,
                    className: "absolute -top-0.5 -right-0.5 text-yellow-500"
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: (k) => {
                      k.stopPropagation(), p(b.key);
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
        !x && y && e.jsx("div", {
          className: "text-[10px] text-brand pl-4 pb-1",
          children: "\u2022 selected"
        })
      ]
    });
  }
  function pt(t) {
    const r = parseInt(t.slice(1, 3), 16) / 255, n = parseInt(t.slice(3, 5), 16) / 255, i = parseInt(t.slice(5, 7), 16) / 255;
    return [
      r,
      n,
      i
    ];
  }
  function mt(t) {
    const r = Math.round(t[0] * 255).toString(16).padStart(2, "0"), n = Math.round(t[1] * 255).toString(16).padStart(2, "0"), i = Math.round(t[2] * 255).toString(16).padStart(2, "0");
    return `#${r}${n}${i}`;
  }
  function ht(t, r, n) {
    const [i, o, s] = t.map((k) => Math.round(k * 255)), a = r > 0.5 ? 60 : 30, d = n > 0.5 ? 40 : 20, p = Math.min(255, i + a), x = Math.min(255, o + a), c = Math.min(255, s + a), y = Math.max(0, i - d), b = Math.max(0, o - d), C = Math.max(0, s - d);
    return `radial-gradient(ellipse at 30% 30%,
    rgb(${p}, ${x}, ${c}) 0%,
    rgb(${i}, ${o}, ${s}) 50%,
    rgb(${y}, ${b}, ${C}) 100%
  )`;
  }
  function fe({ open: t, onOpenChange: r, onSave: n, initialMaterial: i }) {
    const [o, s] = f.useState((i == null ? void 0 : i.name) ?? "Custom Material"), [a, d] = f.useState((i == null ? void 0 : i.color) ? mt(i.color) : "#808080"), [p, x] = f.useState((i == null ? void 0 : i.metallic) ?? 0), [c, y] = f.useState((i == null ? void 0 : i.roughness) ?? 0.5), [b, C] = f.useState((i == null ? void 0 : i.density) ?? 1e3), k = f.useMemo(() => pt(a), [
      a
    ]), M = f.useMemo(() => ht(k, p, c), [
      k,
      p,
      c
    ]), _ = () => {
      n({
        name: o,
        category: "other",
        color: k,
        metallic: p,
        roughness: c,
        density: b
      }), r(false);
    };
    return e.jsx(Me, {
      open: t,
      onOpenChange: r,
      children: e.jsxs(Fe, {
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
                        value: o,
                        onChange: (v) => s(v.target.value),
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
                        onChange: (v) => d(v.target.value),
                        className: "h-8 w-8 cursor-pointer border border-border rounded"
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: a.toUpperCase(),
                        onChange: (v) => {
                          const N = v.target.value;
                          /^#[0-9A-Fa-f]{6}$/.test(N) && d(N);
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
                    value: p,
                    onChange: x,
                    step: 0.01,
                    min: 0,
                    max: 1
                  }),
                  e.jsx(j, {
                    label: "Roughness",
                    value: c,
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
          e.jsxs(_e, {
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
  function jt({ partId: t, currentMaterialKey: r, volumeMm3: n }) {
    var _a;
    const [i, o] = f.useState(""), [s, a] = f.useState(false), [d, p] = f.useState(0), x = h((u) => u.setPartMaterial), c = w((u) => u.setPreviewMaterial), y = w((u) => u.addRecentMaterial), b = w((u) => u.toggleFavoriteMaterial), C = w((u) => u.recentMaterials), k = w((u) => u.favoriteMaterials);
    f.useEffect(() => () => c(null), [
      t,
      c
    ]);
    const M = f.useMemo(() => i.trim() ? oe(i) : null, [
      i
    ]), _ = f.useMemo(() => C.map((u) => Z(u)).filter((u) => u !== void 0), [
      C
    ]), v = f.useMemo(() => k.map((u) => Z(u)).filter((u) => u !== void 0), [
      k
    ]), N = f.useCallback((u) => {
      const z = h.getState(), O = structuredClone(z.document);
      O.materials[u.key] || (O.materials[u.key] = {
        name: u.name,
        color: u.color,
        metallic: u.metallic,
        roughness: u.roughness
      }, h.setState({
        document: O,
        isDirty: true
      })), x(t, u.key), y(u.key), c(null);
    }, [
      t,
      x,
      y,
      c
    ]), P = f.useCallback((u) => {
      c(u ? {
        partId: t,
        materialKey: u.key
      } : null);
    }, [
      t,
      c
    ]), I = f.useCallback((u) => {
      const z = `custom-${Date.now()}-${d}`;
      p((ve) => ve + 1);
      const O = h.getState(), G = structuredClone(O.document);
      G.materials[z] = {
        name: u.name,
        color: u.color,
        metallic: u.metallic,
        roughness: u.roughness
      }, h.setState({
        document: G,
        isDirty: true
      }), x(t, z), y(z);
    }, [
      t,
      d,
      x,
      y
    ]), l = (_a = Z(r)) == null ? void 0 : _a.category;
    return e.jsxs("div", {
      className: "space-y-2",
      children: [
        e.jsxs("div", {
          className: "relative",
          children: [
            e.jsx(le, {
              size: 12,
              className: "absolute left-2 top-1/2 -translate-y-1/2 text-text-muted"
            }),
            e.jsx("input", {
              type: "text",
              placeholder: "Search materials...",
              value: i,
              onChange: (u) => o(u.target.value),
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
              children: M.map((u) => e.jsx(R, {
                content: e.jsx(A, {
                  material: u,
                  volumeMm3: n
                }),
                side: "right",
                children: e.jsx("div", {
                  children: e.jsx(V, {
                    material: u,
                    selected: u.key === r,
                    onClick: () => N(u),
                    onMouseEnter: () => P(u),
                    onMouseLeave: () => P(null)
                  })
                })
              }, u.key))
            })
          ]
        }) : e.jsxs(e.Fragment, {
          children: [
            v.length > 0 && e.jsxs("div", {
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
                  children: v.map((u) => e.jsx(R, {
                    content: e.jsx(A, {
                      material: u,
                      volumeMm3: n
                    }),
                    side: "right",
                    children: e.jsx("div", {
                      children: e.jsx(V, {
                        material: u,
                        selected: u.key === r,
                        onClick: () => N(u),
                        onMouseEnter: () => P(u),
                        onMouseLeave: () => P(null)
                      })
                    })
                  }, u.key))
                })
              ]
            }),
            _.length > 0 && e.jsxs("div", {
              className: "space-y-1",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-text-muted",
                  children: [
                    e.jsx(he, {
                      size: 10
                    }),
                    "Recent"
                  ]
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-1.5 pl-3",
                  children: _.map((u) => e.jsx(R, {
                    content: e.jsx(A, {
                      material: u,
                      volumeMm3: n
                    }),
                    side: "right",
                    children: e.jsx("div", {
                      children: e.jsx(V, {
                        material: u,
                        selected: u.key === r,
                        onClick: () => N(u),
                        onMouseEnter: () => P(u),
                        onMouseLeave: () => P(null)
                      })
                    })
                  }, u.key))
                })
              ]
            }),
            e.jsx("div", {
              className: "space-y-0.5 max-h-48 overflow-y-auto scrollbar-thin",
              children: ce.map((u) => e.jsx(je, {
                category: u,
                materials: de(u),
                selectedKey: r,
                favorites: k,
                volumeMm3: n,
                defaultOpen: u === l || u === "metals",
                onSelect: N,
                onPreview: P,
                onToggleFavorite: b
              }, u))
            })
          ]
        }),
        e.jsxs("button", {
          type: "button",
          onClick: () => a(true),
          className: "flex items-center gap-1.5 w-full px-2 py-1.5 text-xs text-text-muted hover:text-text hover:bg-hover border border-dashed border-border hover:border-text-muted",
          children: [
            e.jsx(xe, {
              size: 12
            }),
            "Custom Material"
          ]
        }),
        e.jsx(fe, {
          open: s,
          onOpenChange: a,
          onSave: I
        })
      ]
    });
  }
  function ft({ instanceId: t, currentMaterialKey: r }) {
    var _a;
    const [n, i] = f.useState(""), [o, s] = f.useState(false), [a, d] = f.useState(0), p = h((l) => l.setInstanceMaterial), x = w((l) => l.setPreviewMaterial), c = w((l) => l.addRecentMaterial), y = w((l) => l.toggleFavoriteMaterial), b = w((l) => l.recentMaterials), C = w((l) => l.favoriteMaterials);
    f.useEffect(() => () => x(null), [
      t,
      x
    ]);
    const k = f.useMemo(() => n.trim() ? oe(n) : null, [
      n
    ]), M = f.useMemo(() => b.map((l) => Z(l)).filter((l) => l !== void 0), [
      b
    ]), _ = f.useMemo(() => C.map((l) => Z(l)).filter((l) => l !== void 0), [
      C
    ]), v = f.useCallback((l) => {
      const u = h.getState(), z = structuredClone(u.document);
      z.materials[l.key] || (z.materials[l.key] = {
        name: l.name,
        color: l.color,
        metallic: l.metallic,
        roughness: l.roughness
      }, h.setState({
        document: z,
        isDirty: true
      })), p(t, l.key), c(l.key), x(null);
    }, [
      t,
      p,
      c,
      x
    ]), N = f.useCallback((l) => {
      x(l ? {
        partId: t,
        materialKey: l.key
      } : null);
    }, [
      t,
      x
    ]), P = f.useCallback((l) => {
      const u = `custom-${Date.now()}-${a}`;
      d((G) => G + 1);
      const z = h.getState(), O = structuredClone(z.document);
      O.materials[u] = {
        name: l.name,
        color: l.color,
        metallic: l.metallic,
        roughness: l.roughness
      }, h.setState({
        document: O,
        isDirty: true
      }), p(t, u), c(u);
    }, [
      t,
      a,
      p,
      c
    ]), E = (_a = Z(r)) == null ? void 0 : _a.category;
    return e.jsxs("div", {
      className: "space-y-2",
      children: [
        e.jsxs("div", {
          className: "relative",
          children: [
            e.jsx(le, {
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
                content: e.jsx(A, {
                  material: l
                }),
                side: "right",
                children: e.jsx("div", {
                  children: e.jsx(V, {
                    material: l,
                    selected: l.key === r,
                    onClick: () => v(l),
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
                    content: e.jsx(A, {
                      material: l
                    }),
                    side: "right",
                    children: e.jsx("div", {
                      children: e.jsx(V, {
                        material: l,
                        selected: l.key === r,
                        onClick: () => v(l),
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
                    e.jsx(he, {
                      size: 10
                    }),
                    "Recent"
                  ]
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-1.5 pl-3",
                  children: M.map((l) => e.jsx(R, {
                    content: e.jsx(A, {
                      material: l
                    }),
                    side: "right",
                    children: e.jsx("div", {
                      children: e.jsx(V, {
                        material: l,
                        selected: l.key === r,
                        onClick: () => v(l),
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
              children: ce.map((l) => e.jsx(je, {
                category: l,
                materials: de(l),
                selectedKey: r,
                favorites: C,
                defaultOpen: l === E || l === "metals",
                onSelect: v,
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
            e.jsx(xe, {
              size: 12
            }),
            "Custom Material"
          ]
        }),
        e.jsx(fe, {
          open: o,
          onOpenChange: s,
          onSave: P
        })
      ]
    });
  }
  function gt(t) {
    const r = ue((i) => i.scene), n = h((i) => i.parts);
    return f.useMemo(() => {
      if (!t || !r) return;
      const i = n.findIndex((s) => s.id === t);
      if (i === -1) return;
      const o = r.parts[i];
      if (o) return Ie(o.mesh);
    }, [
      t,
      r,
      n
    ]);
  }
  function q() {
    const t = w((r) => r.setSidebarPane);
    return e.jsx("button", {
      onClick: () => t("tree"),
      className: "flex h-6 w-6 -ml-1 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
      "aria-label": m("panel.back_to_tree"),
      title: m("panel.back_to_tree"),
      children: e.jsx(Qe, {
        size: 14
      })
    });
  }
  const vt = f.lazy(() => ye(() => import("./index-BCvZCcjD.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }).then((t) => t.fy), __vite__mapDeps([0,1,2,3,4])).then((t) => ({
    default: t.EmbroideryProperties
  })));
  function g({ children: t, tooltip: r }) {
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
  function te({ kind: t }) {
    return e.jsx("span", {
      className: "text-[10px] px-1.5 py-0.5 bg-hover border border-border/50 text-text-muted uppercase tracking-wide",
      children: t
    });
  }
  function bt({ partId: t }) {
    var _a;
    const r = h((d) => d.document), i = h((d) => d.parts).find((d) => d.id === t), o = gt(t);
    if (!i) return null;
    const a = ((_a = r.roots.find((d) => d.root === i.translateNodeId)) == null ? void 0 : _a.material) ?? "default";
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
          tooltip: m("panel.tooltip.material"),
          children: m("panel.section.material")
        }),
        e.jsx(jt, {
          partId: t,
          currentMaterialKey: a,
          volumeMm3: o
        })
      ]
    });
  }
  function yt({ part: t, offset: r }) {
    const n = h((i) => i.setTranslation);
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
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
  function Nt({ part: t, angles: r }) {
    const n = h((i) => i.setRotation);
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
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
  function St({ part: t, factor: r }) {
    const n = h((i) => i.setScale);
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
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
  function wt({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.updatePrimitiveOp), i = r.nodes[String(t.primitiveNodeId)];
    if (!i || i.op.type !== "Cube") return null;
    const { size: o } = i.op;
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
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
              onChange: (s) => n(t.id, {
                type: "Cube",
                size: {
                  ...o,
                  x: s
                }
              }),
              onCommit: () => w.getState().setFocusZone("viewport"),
              unit: "mm"
            }),
            e.jsx(j, {
              label: "H",
              primeKey: "H",
              value: o.y,
              min: 0.1,
              onChange: (s) => n(t.id, {
                type: "Cube",
                size: {
                  ...o,
                  y: s
                }
              }),
              onCommit: () => w.getState().setFocusZone("viewport"),
              unit: "mm"
            }),
            e.jsx(j, {
              label: "D",
              primeKey: "D",
              value: o.z,
              min: 0.1,
              onChange: (s) => n(t.id, {
                type: "Cube",
                size: {
                  ...o,
                  z: s
                }
              }),
              onCommit: () => w.getState().setFocusZone("viewport"),
              unit: "mm"
            })
          ]
        })
      ]
    });
  }
  function Ct({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.updatePrimitiveOp), i = r.nodes[String(t.primitiveNodeId)];
    if (!i || i.op.type !== "Cylinder") return null;
    const o = i.op;
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
          tooltip: m("panel.tooltip.dimensions_cylinder"),
          children: m("panel.section.dimensions")
        }),
        e.jsxs("div", {
          className: "space-y-0.5",
          children: [
            e.jsx(j, {
              label: "R",
              primeKey: "R",
              value: o.radius,
              min: 0.1,
              onChange: (s) => n(t.id, {
                ...o,
                radius: s
              }),
              onCommit: () => w.getState().setFocusZone("viewport"),
              unit: "mm"
            }),
            e.jsx(j, {
              label: "H",
              primeKey: "H",
              value: o.height,
              min: 0.1,
              onChange: (s) => n(t.id, {
                ...o,
                height: s
              }),
              onCommit: () => w.getState().setFocusZone("viewport"),
              unit: "mm"
            })
          ]
        })
      ]
    });
  }
  function kt({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.updatePrimitiveOp), i = r.nodes[String(t.primitiveNodeId)];
    if (!i || i.op.type !== "Sphere") return null;
    const o = i.op;
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
          tooltip: m("panel.tooltip.dimensions_sphere"),
          children: m("panel.section.dimensions")
        }),
        e.jsx("div", {
          className: "space-y-0.5",
          children: e.jsx(j, {
            label: "R",
            primeKey: "R",
            value: o.radius,
            min: 0.1,
            onChange: (s) => n(t.id, {
              ...o,
              radius: s
            }),
            onCommit: () => w.getState().setFocusZone("viewport"),
            unit: "mm"
          })
        })
      ]
    });
  }
  function Pt({ part: t }) {
    const r = h((d) => d.document), n = h((d) => d.updateSweepOp), i = B(), o = r.nodes[String(t.sweepNodeId)];
    if (!o || o.op.type !== "Sweep") return null;
    const s = o.op, a = s.path.type === "Helix" ? s.path : null;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(g, {
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
            e.jsx(g, {
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
            e.jsx(g, {
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
                  onChange: (d) => n(t.id, {
                    path: {
                      ...a,
                      radius: d
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
                  onChange: (d) => n(t.id, {
                    path: {
                      ...a,
                      pitch: d
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
                  onChange: (d) => n(t.id, {
                    path: {
                      ...a,
                      height: d
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
                  onChange: (d) => n(t.id, {
                    path: {
                      ...a,
                      turns: d
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
            e.jsx(g, {
              tooltip: "Initial rotation of the profile around the path",
              children: "Orientation"
            }),
            e.jsx(j, {
              label: "Angle",
              value: (s.orientation ?? 0) * (180 / Math.PI),
              step: 5,
              onChange: (d) => n(t.id, {
                orientation: d * (Math.PI / 180)
              }),
              unit: "\xB0",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Twist angle along the sweep path",
              children: "Twist"
            }),
            e.jsx(j, {
              label: "Angle",
              value: (s.twist_angle ?? 0) * (180 / Math.PI),
              step: 5,
              onChange: (d) => n(t.id, {
                twist_angle: d * (Math.PI / 180)
              }),
              unit: "\xB0",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
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
                  onChange: (d) => n(t.id, {
                    scale_start: d
                  }),
                  ...i
                }),
                e.jsx(j, {
                  label: "End",
                  value: s.scale_end ?? 1,
                  min: 0.1,
                  step: 0.1,
                  onChange: (d) => n(t.id, {
                    scale_end: d
                  }),
                  ...i
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
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
                  onChange: (d) => n(t.id, {
                    path_segments: d
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
                  onChange: (d) => n(t.id, {
                    arc_segments: d
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
  function Mt({ part: t }) {
    const r = h((n) => n.updateBooleanType);
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
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
  function Ft({ part: t }) {
    const r = h((p) => p.document), n = h((p) => p.setFeatureParam), i = B(), o = r.nodes[String(t.extrudeNodeId)];
    if (!o || o.op.type !== "Extrude") return null;
    const s = o.op, a = s.direction, d = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Extrusion depth along direction vector",
              children: m("panel.section.depth")
            }),
            e.jsx(j, {
              label: "Depth",
              value: d,
              min: 0.01,
              onChange: (p) => n(t.id, "depth", D(p)),
              unit: "mm",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Twist the profile along the extrusion axis",
              children: m("panel.section.twist")
            }),
            e.jsx(j, {
              label: "Angle",
              value: (s.twist_angle ?? 0) * (180 / Math.PI),
              step: 5,
              onChange: (p) => n(t.id, "twist_angle", D(p * (Math.PI / 180))),
              unit: "\xB0",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Scale factor at end of extrusion (1.0 = no taper)",
              children: m("panel.section.taper")
            }),
            e.jsx(j, {
              label: "Scale",
              value: s.scale_end ?? 1,
              min: 0.01,
              step: 0.1,
              onChange: (p) => n(t.id, "scale_end", D(p)),
              ...i
            })
          ]
        })
      ]
    });
  }
  function _t({ part: t }) {
    const r = h((a) => a.document), n = h((a) => a.setFeatureParam), i = B(), o = r.nodes[String(t.revolveNodeId)];
    if (!o || o.op.type !== "Revolve") return null;
    const s = o.op;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Angle of revolution (degrees)",
              children: m("panel.section.angle")
            }),
            e.jsx(j, {
              label: "Angle",
              value: s.angle_deg,
              min: 0.1,
              max: 360,
              step: 5,
              onChange: (a) => n(t.id, "angle_deg", D(a)),
              unit: "\xB0",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
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
  function It({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.setFeatureParam), i = B(), o = r.nodes[String(t.filletNodeId)];
    return !o || o.op.type !== "Fillet" ? null : e.jsxs("div", {
      children: [
        e.jsx(g, {
          tooltip: m("panel.tooltip.fillet_radius"),
          children: m("panel.section.radius")
        }),
        e.jsx(j, {
          label: "R",
          value: o.op.radius,
          min: 0.1,
          step: 0.5,
          onChange: (s) => n(t.id, "radius", D(s)),
          unit: "mm",
          ...i
        })
      ]
    });
  }
  function Dt({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.setFeatureParam), i = B(), o = r.nodes[String(t.chamferNodeId)];
    return !o || o.op.type !== "Chamfer" ? null : e.jsxs("div", {
      children: [
        e.jsx(g, {
          tooltip: m("panel.tooltip.chamfer_distance"),
          children: m("panel.section.distance")
        }),
        e.jsx(j, {
          label: "D",
          value: o.op.distance,
          min: 0.1,
          step: 0.5,
          onChange: (s) => n(t.id, "distance", D(s)),
          unit: "mm",
          ...i
        })
      ]
    });
  }
  function Et({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.setFeatureParam), i = B(), o = r.nodes[String(t.shellNodeId)];
    return !o || o.op.type !== "Shell" ? null : e.jsxs("div", {
      children: [
        e.jsx(g, {
          tooltip: m("panel.tooltip.shell_thickness"),
          children: m("panel.section.thickness")
        }),
        e.jsx(j, {
          label: "T",
          value: o.op.thickness,
          min: 0.1,
          step: 0.5,
          onChange: (s) => n(t.id, "thickness", D(s)),
          unit: "mm",
          ...i
        })
      ]
    });
  }
  function zt({ part: t }) {
    const r = h((d) => d.document), n = h((d) => d.setFeatureParam), i = B(), o = r.nodes[String(t.patternNodeId)];
    if (!o || o.op.type !== "LinearPattern") return null;
    const s = o.op, a = s.direction;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Direction vector for the pattern",
              children: m("panel.section.direction")
            }),
            e.jsxs("div", {
              className: "space-y-0.5",
              children: [
                e.jsx(j, {
                  label: "X",
                  value: a.x,
                  onChange: (d) => n(t.id, "direction", T(d, a.y, a.z)),
                  unit: "mm",
                  ...i
                }),
                e.jsx(j, {
                  label: "Y",
                  value: a.y,
                  onChange: (d) => n(t.id, "direction", T(a.x, d, a.z)),
                  unit: "mm",
                  ...i
                }),
                e.jsx(j, {
                  label: "Z",
                  value: a.z,
                  onChange: (d) => n(t.id, "direction", T(a.x, a.y, d)),
                  unit: "mm",
                  ...i
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Number of copies in the pattern",
              children: m("panel.section.count")
            }),
            e.jsx(j, {
              label: "N",
              value: s.count,
              min: 1,
              max: 100,
              step: 1,
              onChange: (d) => n(t.id, "count", D(Math.round(d))),
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Distance between copies (mm)",
              children: m("panel.section.spacing")
            }),
            e.jsx(j, {
              label: "S",
              value: s.spacing,
              min: 0.1,
              step: 1,
              onChange: (d) => n(t.id, "spacing", D(d)),
              unit: "mm",
              ...i
            })
          ]
        })
      ]
    });
  }
  function $t({ part: t }) {
    const r = h((a) => a.document), n = h((a) => a.setFeatureParam), i = B(), o = r.nodes[String(t.patternNodeId)];
    if (!o || o.op.type !== "CircularPattern") return null;
    const s = o.op;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Number of copies around the axis",
              children: m("panel.section.count")
            }),
            e.jsx(j, {
              label: "N",
              value: s.count,
              min: 1,
              max: 100,
              step: 1,
              onChange: (a) => n(t.id, "count", D(Math.round(a))),
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Total angle of the circular pattern (degrees)",
              children: m("panel.section.angle")
            }),
            e.jsx(j, {
              label: "Angle",
              value: s.angle_deg,
              min: 1,
              max: 360,
              step: 5,
              onChange: (a) => n(t.id, "angle_deg", D(a)),
              unit: "\xB0",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
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
            e.jsx(g, {
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
  function Lt({ part: t }) {
    const r = h((s) => s.document), n = h((s) => s.setFeatureParam), i = r.nodes[String(t.loftNodeId)];
    if (!i || i.op.type !== "Loft") return null;
    const o = i.op;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Loft connects multiple sketch profiles",
              children: m("panel.section.profiles")
            }),
            e.jsx("div", {
              className: "space-y-0.5",
              children: o.sketches.map((s, a) => e.jsx(H, {
                label: `${a + 1}`,
                value: `Sketch #${s}`,
                tooltip: "Sketch reference \u2014 editing not yet supported"
              }, a))
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Connect last profile back to first",
              children: m("panel.section.closed")
            }),
            e.jsxs("label", {
              className: "flex items-center gap-2 text-xs text-text cursor-pointer",
              children: [
                e.jsx("input", {
                  type: "checkbox",
                  checked: o.closed ?? false,
                  onChange: (s) => n(t.id, "closed", Ge(s.target.checked)),
                  className: "accent-brand"
                }),
                e.jsx("span", {
                  children: o.closed ? "Closed loop" : "Open"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Tt({ part: t }) {
    const r = h((x) => x.document), n = h((x) => x.setFeatureParam), i = B(), o = r.nodes[String(t.textNodeId)];
    if (!o || o.op.type !== "Text2D") return null;
    const s = o.op, a = r.nodes[String(t.extrudeNodeId)], d = (a == null ? void 0 : a.op.type) === "Extrude" ? a.op : null, p = d ? Math.sqrt(d.direction.x ** 2 + d.direction.y ** 2 + d.direction.z ** 2) : 0;
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx(g, {
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
            e.jsx(g, {
              tooltip: "Text height in mm",
              children: m("panel.section.size")
            }),
            e.jsx(j, {
              label: "H",
              value: s.height,
              min: 0.5,
              step: 1,
              onChange: (x) => n(t.id, "height", D(x)),
              unit: "mm",
              ...i
            })
          ]
        }),
        d && e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Extrusion depth (mm)",
              children: m("panel.section.depth")
            }),
            e.jsx(j, {
              label: "D",
              value: p,
              min: 0.1,
              step: 0.5,
              onChange: (x) => n(t.id, "depth", D(x)),
              unit: "mm",
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
              tooltip: "Spacing between letters",
              children: m("panel.section.spacing")
            }),
            e.jsx(j, {
              label: "Letter",
              value: s.letter_spacing ?? 1,
              min: 0.1,
              step: 0.1,
              onChange: (x) => n(t.id, "letter_spacing", D(x)),
              ...i
            })
          ]
        }),
        e.jsxs("div", {
          children: [
            e.jsx(g, {
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
  function Rt(t) {
    return t.part, e.jsxs("div", {
      children: [
        e.jsx(g, {
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
  function Bt({ instanceId: t }) {
    var _a, _b;
    const r = h((s) => s.document), n = (_a = r.instances) == null ? void 0 : _a.find((s) => s.id === t), i = n ? (_b = r.partDefs) == null ? void 0 : _b[n.partDefId] : void 0, o = (n == null ? void 0 : n.material) ?? (i == null ? void 0 : i.defaultMaterial) ?? "default";
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
          tooltip: m("panel.tooltip.material_instance"),
          children: m("panel.section.material")
        }),
        e.jsx(ft, {
          instanceId: t,
          currentMaterialKey: o
        })
      ]
    });
  }
  function Ot({ instance: t }) {
    const r = h((i) => i.setInstanceTransform), n = t.transform ?? me();
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
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
  function Ht({ instance: t }) {
    const r = h((i) => i.setInstanceTransform), n = t.transform ?? me();
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
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
  function Vt({ instance: t }) {
    var _a;
    const r = h((s) => s.document), n = w((s) => s.clearSelection), i = (_a = r.partDefs) == null ? void 0 : _a[t.partDefId], o = t.name ?? (i == null ? void 0 : i.name) ?? t.partDefId;
    return e.jsxs("div", {
      className: Y("w-full flex flex-col bg-surface", "h-full"),
      children: [
        e.jsxs("div", {
          className: "flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 min-w-0",
              children: [
                e.jsx(q, {}),
                e.jsx("span", {
                  className: "text-xs font-medium text-text truncate",
                  children: o
                }),
                e.jsx(te, {
                  kind: "instance"
                })
              ]
            }),
            e.jsx("button", {
              onClick: n,
              className: "flex h-8 w-8 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
              children: e.jsx(J, {
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
                e.jsx(g, {
                  children: m("panel.section.part_def")
                }),
                e.jsx("div", {
                  className: "text-xs text-text",
                  children: (i == null ? void 0 : i.name) ?? t.partDefId
                })
              ]
            }),
            e.jsx(S, {}),
            e.jsx(Ot, {
              instance: t
            }),
            e.jsx(S, {}),
            e.jsx(Ht, {
              instance: t
            }),
            e.jsx(S, {}),
            e.jsx(Bt, {
              instanceId: t.id
            })
          ]
        })
      ]
    });
  }
  function se(t) {
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
    const r = h((d) => d.setJointState), n = t.kind;
    let i = -180, o = 180, s = 1, a = "\xB0";
    if (n.type === "Revolute") n.limits && ([i, o] = n.limits), a = "\xB0";
    else if (n.type === "Slider") n.limits ? [i, o] = n.limits : (i = 0, o = 100), s = 0.5, a = "mm";
    else if (n.type === "Cylindrical") a = "\xB0";
    else if (n.type === "Ball") a = "\xB0";
    else return null;
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
          tooltip: "Current joint state value",
          children: m("panel.section.state")
        }),
        e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsx("input", {
              type: "range",
              min: i,
              max: o,
              step: s,
              value: t.state,
              onChange: (d) => r(t.id, Number(d.target.value)),
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
                o,
                a
              ]
            })
          ]
        })
      ]
    });
  }
  function Zt({ joint: t }) {
    const r = ee((s) => s.physicsAvailable), n = ee((s) => s.setJointTargetVelocity), i = ee((s) => {
      var _a;
      return ((_a = s.jointStates.find((a) => a.id === t.id)) == null ? void 0 : _a.targetVelocity) ?? 0;
    });
    if (!r || t.kind.type === "Fixed") return null;
    const o = t.kind.type === "Slider" ? "mm/s" : "\xB0/s";
    return e.jsxs("div", {
      children: [
        e.jsx(g, {
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
              children: o
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
  function Yt({ joint: t }) {
    var _a, _b;
    const r = h((p) => p.document), n = w((p) => p.clearSelection), i = f.useMemo(() => {
      var _a2;
      return new Map(((_a2 = r.instances) == null ? void 0 : _a2.map((p) => [
        p.id,
        p
      ])) ?? []);
    }, [
      r.instances
    ]), o = t.parentInstanceId ? ((_a = i.get(t.parentInstanceId)) == null ? void 0 : _a.name) ?? t.parentInstanceId : m("panel.ground"), a = ((_b = i.get(t.childInstanceId)) == null ? void 0 : _b.name) ?? t.childInstanceId, d = t.name ?? `${se(t.kind)} ${m("joint.suffix")}`;
    return e.jsxs("div", {
      className: Y("w-full flex flex-col bg-surface", "h-full"),
      children: [
        e.jsxs("div", {
          className: "flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 min-w-0",
              children: [
                e.jsx(q, {}),
                e.jsx("span", {
                  className: "text-xs font-medium text-text truncate",
                  children: d
                }),
                e.jsx(te, {
                  kind: "joint"
                })
              ]
            }),
            e.jsx("button", {
              onClick: n,
              className: "flex h-8 w-8 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
              children: e.jsx(J, {
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
                e.jsx(g, {
                  children: m("panel.section.type")
                }),
                e.jsx("div", {
                  className: "text-xs text-text",
                  children: se(t.kind)
                })
              ]
            }),
            e.jsx(S, {}),
            e.jsxs("div", {
              children: [
                e.jsx(g, {
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
                    o
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
                e.jsx(Zt, {
                  joint: t
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Xt({ item: t }) {
    var _a;
    const r = h((c) => c.parts), n = ue((c) => c.scene), i = w((c) => c.clearSelection);
    pe((c) => c.locale);
    const o = r.find((c) => c.id === t.partId), s = r.findIndex((c) => c.id === t.partId), a = h((c) => c.document.roots), d = f.useMemo(() => {
      var _a2;
      if (s < 0) return -1;
      let c = 0;
      for (let y = 0; y < a.length; y++) if (((_a2 = a[y]) == null ? void 0 : _a2.visible) !== false) {
        if (y === s) return c;
        c++;
      }
      return -1;
    }, [
      a,
      s
    ]), p = d >= 0 ? (_a = n == null ? void 0 : n.parts[d]) == null ? void 0 : _a.mesh : null, x = f.useMemo(() => {
      if (!p) return null;
      if (t.kind === "face") {
        const y = et(p, t.faceIndex);
        let b = 0;
        const C = new X(), k = new X(), M = new X(), _ = new X(), v = new X();
        for (const N of y) {
          const P = p.indices[N * 3], I = p.indices[N * 3 + 1], E = p.indices[N * 3 + 2];
          M.set(p.positions[P * 3], p.positions[P * 3 + 1], p.positions[P * 3 + 2]), _.set(p.positions[I * 3], p.positions[I * 3 + 1], p.positions[I * 3 + 2]), v.set(p.positions[E * 3], p.positions[E * 3 + 1], p.positions[E * 3 + 2]), C.subVectors(_, M), k.subVectors(v, M), b += C.cross(k).length() * 0.5;
        }
        return {
          kind: "face",
          area: b,
          triCount: y.length
        };
      }
      if (t.kind === "edge") {
        const { a: y, b } = tt(p, t.edgeId);
        return {
          kind: "edge",
          length: y.distanceTo(b),
          a: y,
          b
        };
      }
      return {
        kind: "vertex",
        position: st(p, t.vertexId)
      };
    }, [
      p,
      t
    ]);
    return e.jsxs("div", {
      className: Y("w-full flex flex-col bg-surface", "h-full"),
      children: [
        e.jsxs("div", {
          className: "flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3",
          children: [
            e.jsx(ge, {
              item: t,
              partName: o == null ? void 0 : o.name
            }),
            e.jsx("button", {
              onClick: i,
              className: "flex h-6 w-6 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
              "aria-label": "Clear selection",
              children: e.jsx(J, {
                size: 12
              })
            })
          ]
        }),
        e.jsxs("div", {
          className: "px-3 py-2 space-y-2 text-xs text-text",
          children: [
            !x && e.jsx("span", {
              className: "text-text-muted",
              children: "Mesh not available."
            }),
            x && x.kind === "face" && t.kind === "face" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(L, {
                  label: "Area",
                  value: `${x.area.toFixed(2)} mm\xB2`
                }),
                e.jsx(L, {
                  label: "Triangles",
                  value: String(x.triCount)
                }),
                e.jsx(L, {
                  label: "Face index",
                  value: String(t.faceIndex)
                })
              ]
            }),
            x && x.kind === "edge" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(L, {
                  label: "Length",
                  value: `${x.length.toFixed(2)} mm`
                }),
                e.jsx(L, {
                  label: "From",
                  value: `(${x.a.x.toFixed(1)}, ${x.a.y.toFixed(1)}, ${x.a.z.toFixed(1)})`
                }),
                e.jsx(L, {
                  label: "To",
                  value: `(${x.b.x.toFixed(1)}, ${x.b.y.toFixed(1)}, ${x.b.z.toFixed(1)})`
                })
              ]
            }),
            x && x.kind === "vertex" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(L, {
                  label: "X",
                  value: `${x.position.x.toFixed(2)} mm`
                }),
                e.jsx(L, {
                  label: "Y",
                  value: `${x.position.y.toFixed(2)} mm`
                }),
                e.jsx(L, {
                  label: "Z",
                  value: `${x.position.z.toFixed(2)} mm`
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
    const n = h((d) => d.documentName) ?? "Document", i = w((d) => d.select), o = w((d) => d.clearSelection), s = t.kind === "face" || t.kind === "edge" || t.kind === "vertex" ? t.kind : null, a = t.kind === "part" ? t.id : t.partId ?? null;
    return e.jsxs("div", {
      className: "flex min-w-0 items-center gap-1 text-xs",
      children: [
        e.jsx(q, {}),
        e.jsx(ne, {
          label: n,
          onClick: o
        }),
        a && e.jsxs(e.Fragment, {
          children: [
            e.jsx(ie, {}),
            e.jsx(ne, {
              label: r ?? a,
              onClick: s ? () => i(a) : void 0
            })
          ]
        }),
        s && e.jsxs(e.Fragment, {
          children: [
            e.jsx(ie, {}),
            e.jsx("span", {
              className: "text-text capitalize",
              children: s
            })
          ]
        })
      ]
    });
  }
  function ne({ label: t, onClick: r }) {
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
  function ie() {
    return e.jsx("span", {
      className: "text-text-muted/40 shrink-0",
      children: "\u203A"
    });
  }
  ss = function() {
    var _a, _b;
    const t = w((v) => v.selectedPartIds), r = w((v) => v.selection), n = w((v) => v.clearSelection), i = $((v) => v.selection), o = h((v) => v.parts), s = h((v) => v.document), a = f.useRef(null);
    pe((v) => v.locale);
    const d = i.type !== "none";
    if (f.useEffect(() => {
      function v(N) {
        N.key === "Escape" && (r.length > 0 && n(), $.getState().selection.type !== "none" && $.getState().select({
          type: "none"
        }));
      }
      return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
    }, [
      r.length,
      n
    ]), d) return e.jsx(rt, {});
    if (r.length === 0) return null;
    const p = r[0];
    if (r.length === 1 && p && (p.kind === "face" || p.kind === "edge" || p.kind === "vertex")) return e.jsx(Xt, {
      item: p
    });
    if (t.size === 0) return null;
    if (t.size === 1) {
      const v = Array.from(t)[0];
      if (v.startsWith("joint:")) {
        const P = v.slice(6), I = (_a = s.joints) == null ? void 0 : _a.find((E) => E.id === P);
        if (I) return e.jsx(Yt, {
          joint: I
        });
      }
      const N = (_b = s.instances) == null ? void 0 : _b.find((P) => P.id === v);
      if (N) return e.jsx(Vt, {
        instance: N
      });
    }
    if (t.size > 1) return e.jsxs("div", {
      ref: a,
      className: Y("w-full flex flex-col bg-surface", "h-full"),
      children: [
        e.jsxs("div", {
          className: "flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/40 px-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 min-w-0",
              children: [
                e.jsx(q, {}),
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
              children: e.jsx(J, {
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
    const x = Array.from(t)[0], c = o.find((v) => v.id === x);
    if (!c) return null;
    const y = s.nodes[String(c.translateNodeId)], b = s.nodes[String(c.rotateNodeId)], C = s.nodes[String(c.scaleNodeId)], k = (y == null ? void 0 : y.op.type) === "Translate" ? y.op.offset : {
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
      className: Y("w-full flex flex-col bg-surface", "h-full"),
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
                    id: c.id
                  },
                  partName: c.name
                }),
                e.jsx(te, {
                  kind: c.kind
                })
              ]
            }),
            e.jsx("button", {
              onClick: n,
              className: "flex h-8 w-8 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover",
              children: e.jsx(J, {
                size: 14
              })
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin",
          children: [
            U(c) && c.kind === "cube" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(wt, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            U(c) && c.kind === "cylinder" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Ct, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            U(c) && c.kind === "sphere" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(kt, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            Ee(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Mt, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            ze(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Pt, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            $e(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Ft, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            Le(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(_t, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            Te(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(It, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            Re(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Dt, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            Be(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Et, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            Oe(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(zt, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            He(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx($t, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            Ve(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Lt, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            Ae(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Tt, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            Ze(c) && e.jsxs(e.Fragment, {
              children: [
                e.jsx(Rt, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            Ye(c) && e.jsxs(e.Fragment, {
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
            (Xe(c) || Ke(c)) && e.jsxs(f.Suspense, {
              fallback: null,
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: () => Je.getState().openPanel(),
                  className: `w-full mt-2 px-3 py-2 text-xs font-medium rounded-md
                bg-fill text-text border border-border
                hover:bg-fill-strong hover:border-text-muted transition-colors`,
                  children: m("panel.open_embroidery")
                }),
                e.jsx(vt, {
                  part: c
                }),
                e.jsx(S, {})
              ]
            }),
            e.jsx(yt, {
              part: c,
              offset: k
            }),
            e.jsx(S, {}),
            e.jsx(Nt, {
              part: c,
              angles: M
            }),
            e.jsx(S, {}),
            e.jsx(St, {
              part: c,
              factor: _
            }),
            e.jsx(S, {}),
            e.jsx(bt, {
              partId: c.id
            })
          ]
        })
      ]
    });
  };
});
export {
  ss as PropertyPanel,
  __tla
};
