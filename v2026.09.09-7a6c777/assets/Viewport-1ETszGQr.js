const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BZXLWVKC.js","assets/three-drei-BkUUjjN5.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-gl-vjbWI.css","assets/SchematicView-CIuazhQ2.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-r_zjQeO8.js","assets/index-19jtBFkQ.js","assets/camera-settings-store-BV70AtJJ.js","assets/timeline-sample-CGUCnv8-.js","assets/xr-collab-CFg3WBup.js","assets/pcb-interference-D-jt2V7v.js","assets/adapter-BA8pXygB.js","assets/ElectronicsViewToggle-DtXbrpX7.js","assets/LengthTunePanel-BozNNddX.js","assets/ReceiptPanel-CAeCYo-d.js","assets/PcbGettingStarted-CJuXtU15.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { G as bo, L as Ae, c as So, a as mn, b as Vo, H as it, _ as yt, T as $o, d as Wo, P as Go, C as Ho, O as Yo, e as Xo, f as Uo, E as zn, g as wt } from "./three-drei-BkUUjjN5.js";
import { b as c, k as i, d as Pe, f as Qe, C as qo } from "./three-fiber-GW7QWJN8.js";
import { bc as $, b4 as oe, bY as Ko, bb as ke, ev as kt, av as En, c0 as le, aB as Zo, am as Jo, cB as Qo, eL as jt, dB as es, af as ts, aV as ns, ai as os, b5 as De, b8 as zt, d as Pn, aS as ss, b7 as In, aw as rs, eM as gt, bh as Cn, aF as Ke, eN as jn, eO as Mo, ba as Ye, eP as An, eQ as is, dE as Nt, b9 as tt, cl as as, eR as cs, b3 as Tt, ac as Rn, ae as ls, eS as _t, eT as Rt, b2 as us, eU as ds, bj as fs, $ as hn, ad as Eo, aE as dt, ez as xn, eV as ps, eW as ms, eX as hs, eY as xs, A as gs, eZ as ys, e_ as Po, e$ as vs, f0 as ws, f1 as bs, f2 as Ss, f3 as Ms, f4 as Es, __tla as __tla_0 } from "./index-BZXLWVKC.js";
import { j as ft, k as $e, D as Ue, l as Ut, h as We, aj as Ps, E as Zt, a as E, a5 as rt, F as It, v as Co, a1 as Cs, af as Ot, b5 as Dn, x as js, q as Rs, s as ks, M as At, Q as st, r as zs, b6 as Is, b7 as As, b8 as Ds, b9 as Tn, R as gn, V as _n, z as Ts, P as Qt, K as _s, H as Fn, an as Fs, e as yn, A as jo } from "./three-tnxpQXqG.js";
import { p as Ln, f as Ro, b as Ls, g as ko, a as zo } from "./sub-feature-geometry-tgU-o6Qd.js";
import { a as Ns, q as Os, d as Bs } from "./three-postprocessing-r_zjQeO8.js";
import { h as Vs, g as $s, r as en } from "./index-19jtBFkQ.js";
import { u as Yt, a as Ws, g as Gs } from "./camera-settings-store-BV70AtJJ.js";
import { s as Hs } from "./timeline-sample-CGUCnv8-.js";
import { j as Ys } from "./xr-collab-CFg3WBup.js";
import { a as Xs, i as Us } from "./pcb-interference-D-jt2V7v.js";
import { s as qs, b as Ks } from "./adapter-BA8pXygB.js";
let _c, at;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const vn = typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function Zs(e) {
    return vn == null ? void 0 : vn.addEventListener("change", e), () => vn == null ? void 0 : vn.removeEventListener("change", e);
  }
  function Js() {
    return (vn == null ? void 0 : vn.matches) ?? true;
  }
  at = function() {
    const e = $((r) => r.theme), t = $((r) => r.toggleTheme), o = c.useSyncExternalStore(Zs, Js, () => true);
    return {
      theme: e,
      toggleTheme: t,
      isDark: e === "system" ? o : e === "dark"
    };
  };
  function Qs() {
    const { isDark: e } = at(), t = $((l) => l.isOrbiting), o = oe((l) => l.parts.length > 0), n = t || !o, r = c.useMemo(() => [
      [
        -500,
        0,
        0
      ],
      [
        500,
        0,
        0
      ]
    ], []), a = c.useMemo(() => [
      [
        0,
        0,
        -500
      ],
      [
        0,
        0,
        500
      ]
    ], []), s = c.useMemo(() => [
      [
        0,
        0,
        0
      ],
      [
        0,
        500,
        0
      ]
    ], []);
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx(bo, {
          args: [
            1e3,
            1e3
          ],
          cellSize: 10,
          cellThickness: 0.5,
          cellColor: e ? "#2a2a2a" : "#555555",
          sectionSize: 100,
          sectionThickness: 1,
          sectionColor: e ? "#3a3a3a" : "#333333",
          fadeDistance: 500,
          fadeStrength: 1,
          infiniteGrid: true
        }),
        n && i.jsxs(i.Fragment, {
          children: [
            i.jsx(Ae, {
              points: r,
              color: e ? "#e06c75" : "#c94f4f",
              lineWidth: 1.5,
              transparent: true,
              opacity: 0.7,
              depthWrite: false,
              renderOrder: -1
            }),
            i.jsx(Ae, {
              points: a,
              color: e ? "#98c379" : "#5a9a4a",
              lineWidth: 1.5,
              transparent: true,
              opacity: 0.7,
              depthWrite: false,
              renderOrder: -1
            }),
            i.jsx(Ae, {
              points: s,
              color: e ? "#61afef" : "#4a7dc9",
              lineWidth: 1.5,
              transparent: true,
              opacity: 0.7,
              depthWrite: false,
              renderOrder: -1
            })
          ]
        })
      ]
    });
  }
  const er = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, Nn = er ? 8 : 4, tr = Nn * Nn, nt = {
    startX: 0,
    startY: 0,
    down: false,
    wasDrag: false
  };
  function nr(e, t) {
    nt.startX = e, nt.startY = t, nt.down = true, nt.wasDrag = false;
  }
  function or(e, t) {
    if (!nt.down || nt.wasDrag) return;
    const o = e - nt.startX, n = t - nt.startY;
    o * o + n * n > tr && (nt.wasDrag = true);
  }
  function sr() {
    nt.down = false;
  }
  function Jt() {
    return nt.wasDrag;
  }
  const ot = So((e) => ({
    showBoundaryEdges: false,
    setShowBoundaryEdges: (t) => e({
      showBoundaryEdges: t
    }),
    toggleBoundaryEdges: () => e((t) => ({
      showBoundaryEdges: !t.showBoundaryEdges
    })),
    inspectTriangles: false,
    setInspectTriangles: (t) => e({
      inspectTriangles: t,
      currentInspection: null
    }),
    toggleInspectTriangles: () => e((t) => ({
      inspectTriangles: !t.inspectTriangles,
      currentInspection: null
    })),
    currentInspection: null,
    setCurrentInspection: (t) => e({
      currentInspection: t
    })
  })), rr = [
    "Unknown",
    "Plane",
    "Cylinder",
    "Sphere",
    "Cone",
    "Bilinear",
    "Torus",
    "BSpline",
    "FanFill"
  ], Io = [
    "#888888",
    "#ffcc00",
    "#66cc66",
    "#ff66ff",
    "#ff8800",
    "#88ccff",
    "#00ccff",
    "#aa66ff",
    "#ff3366"
  ];
  function ir(e, t) {
    const { positions: o, indices: n, faceKinds: r } = e;
    if (t < 0 || t * 3 + 2 >= n.length) return null;
    const a = n[t * 3], s = n[t * 3 + 1], l = n[t * 3 + 2], u = [
      o[a * 3],
      o[a * 3 + 1],
      o[a * 3 + 2]
    ], m = [
      o[s * 3],
      o[s * 3 + 1],
      o[s * 3 + 2]
    ], x = [
      o[l * 3],
      o[l * 3 + 1],
      o[l * 3 + 2]
    ], d = [
      (u[0] + m[0] + x[0]) / 3,
      (u[1] + m[1] + x[1]) / 3,
      (u[2] + m[2] + x[2]) / 3
    ], g = m[0] - u[0], f = m[1] - u[1], p = m[2] - u[2], v = x[0] - u[0], P = x[1] - u[1], b = x[2] - u[2];
    let h = f * b - p * P, w = p * v - g * b, S = g * P - f * v;
    const C = Math.sqrt(h * h + w * w + S * S);
    C > 0 && (h /= C, w /= C, S /= C);
    let j = 0, R = 0, A = 0;
    const N = o.length / 3;
    for (let xe = 0; xe < N; xe++) j += o[xe * 3], R += o[xe * 3 + 1], A += o[xe * 3 + 2];
    N > 0 && (j /= N, R /= N, A /= N);
    const W = d[0] - j, D = d[1] - R, F = d[2] - A, _ = Math.sqrt(W * W + D * D + F * F) || 1, X = (h * W + w * D + S * F) / _, se = (r == null ? void 0 : r[t]) ?? 0, re = rr[se] ?? `kind(${se})`;
    return {
      triangleIndex: t,
      faceKind: se,
      faceKindName: re,
      vertexIds: [
        a,
        s,
        l
      ],
      positions: [
        u,
        m,
        x
      ],
      centroid: d,
      ccwNormal: [
        h,
        w,
        S
      ],
      outwardDot: X
    };
  }
  function ar() {
    const e = ot((s) => s.currentInspection), t = ot((s) => s.setCurrentInspection);
    if (!ot((s) => s.inspectTriangles) || !e) return null;
    const n = Io[e.faceKind] ?? "#888", { outwardDot: r } = e, a = r > 0.5 ? "outward \u2713" : r < -0.5 ? "INWARD \u2717" : "sideways";
    return i.jsxs("div", {
      style: {
        position: "absolute",
        top: 60,
        left: 12,
        background: "rgba(20,20,24,0.92)",
        color: "#eee",
        fontFamily: "monospace",
        fontSize: 12,
        padding: "10px 14px",
        border: `1px solid ${n}`,
        borderRadius: 4,
        zIndex: 50,
        maxWidth: 360,
        lineHeight: 1.5,
        pointerEvents: "auto"
      },
      children: [
        i.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6
          },
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("span", {
                  style: {
                    display: "inline-block",
                    width: 10,
                    height: 10,
                    background: n,
                    marginRight: 6,
                    verticalAlign: "middle"
                  }
                }),
                i.jsx("strong", {
                  children: e.faceKindName
                }),
                i.jsxs("span", {
                  style: {
                    color: "#888",
                    marginLeft: 8
                  },
                  children: [
                    "tri #",
                    e.triangleIndex
                  ]
                })
              ]
            }),
            i.jsx("button", {
              onClick: () => t(null),
              style: {
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                fontSize: 12
              },
              children: "\u2715"
            })
          ]
        }),
        i.jsxs("div", {
          style: {
            color: "#aaa"
          },
          children: [
            "verts: ",
            e.vertexIds.map((s) => `#${s}`).join("  ")
          ]
        }),
        e.positions.map((s, l) => i.jsxs("div", {
          style: {
            color: "#ccc"
          },
          children: [
            " ",
            "(",
            s[0].toFixed(3),
            ", ",
            s[1].toFixed(3),
            ", ",
            s[2].toFixed(3),
            ")"
          ]
        }, l)),
        i.jsxs("div", {
          style: {
            marginTop: 6,
            color: "#aaa"
          },
          children: [
            "CCW normal: (",
            e.ccwNormal[0].toFixed(3),
            ", ",
            e.ccwNormal[1].toFixed(3),
            ", ",
            e.ccwNormal[2].toFixed(3),
            ")"
          ]
        }),
        i.jsxs("div", {
          style: {
            color: r < 0 ? "#ff6666" : "#66ff66"
          },
          children: [
            "outward dot: ",
            r.toFixed(3),
            " \u2014 ",
            a
          ]
        })
      ]
    });
  }
  function cr() {
    const e = ot((n) => n.currentInspection), t = c.useMemo(() => {
      if (!e) return null;
      const n = new ft(), r = new Float32Array([
        ...e.positions[0],
        ...e.positions[1],
        ...e.positions[2]
      ]);
      return n.setAttribute("position", new $e(r, 3)), n.setIndex([
        0,
        1,
        2
      ]), n;
    }, [
      e
    ]);
    if (!e || !t) return null;
    const o = Io[e.faceKind] ?? "#ffffff";
    return i.jsx("mesh", {
      geometry: t,
      renderOrder: 999,
      children: i.jsx("meshBasicMaterial", {
        color: o,
        transparent: true,
        opacity: 0.5,
        depthTest: false,
        side: Ue
      })
    });
  }
  const On = new We(1, 0.45, 0.1), Bn = new We(0.62, 0.32, 0.1), lr = new We(54527), tn = Math.PI / 180, Ao = 0.01;
  function Do({ color: e, vertexColors: t, emissive: o, emissiveIntensity: n, metalness: r, roughness: a, envMapIntensity: s = 1, side: l = Ue, transmission: u, ior: m, thickness: x, attenuationDistance: d, attenuationColor: g, clearcoat: f, clearcoatRoughness: p, transparent: v, opacity: P, depthWrite: b }) {
    if (u !== void 0 && u > 0 || f !== void 0 && f > 0) {
      const w = g ? new We(g[0], g[1], g[2]) : void 0;
      return i.jsx("meshPhysicalMaterial", {
        color: e,
        vertexColors: t,
        emissive: o,
        emissiveIntensity: n,
        metalness: r,
        roughness: a,
        envMapIntensity: s,
        flatShading: false,
        side: l,
        transmission: u ?? 0,
        ior: m ?? 1.5,
        thickness: x ?? 0.5,
        attenuationDistance: d ?? 1 / 0,
        attenuationColor: w,
        clearcoat: f ?? 0,
        clearcoatRoughness: p ?? 0,
        transparent: v || (u ?? 0) > 0,
        opacity: P ?? 1,
        depthWrite: b ?? true
      });
    }
    return i.jsx("meshStandardMaterial", {
      color: e,
      vertexColors: t,
      emissive: o,
      emissiveIntensity: n,
      metalness: r,
      roughness: a,
      envMapIntensity: s,
      flatShading: false,
      side: l,
      transparent: v,
      opacity: P ?? 1,
      depthWrite: b ?? true
    });
  }
  function ur(e, t) {
    const o = e.indices, n = e.positions, r = o[t * 3], a = o[t * 3 + 1], s = o[t * 3 + 2], l = new E(n[r * 3], n[r * 3 + 1], n[r * 3 + 2]), u = new E(n[a * 3], n[a * 3 + 1], n[a * 3 + 2]), m = new E(n[s * 3], n[s * 3 + 1], n[s * 3 + 2]), x = u.clone().sub(l), d = m.clone().sub(l), g = x.cross(d).normalize(), f = [], p = o.length / 3;
    for (let v = 0; v < p; v++) {
      const P = o[v * 3], b = o[v * 3 + 1], h = o[v * 3 + 2], w = new E(n[P * 3], n[P * 3 + 1], n[P * 3 + 2]), S = new E(n[b * 3], n[b * 3 + 1], n[b * 3 + 2]), C = new E(n[h * 3], n[h * 3 + 1], n[h * 3 + 2]), j = S.clone().sub(w), R = C.clone().sub(w);
      j.cross(R).normalize().dot(g) > 1 - Ao && f.push(v);
    }
    return f;
  }
  function dr(e, t) {
    const o = new ft(), n = [];
    for (const r of t) {
      const a = e.indices[r * 3], s = e.indices[r * 3 + 1], l = e.indices[r * 3 + 2];
      n.push(e.positions[a * 3], e.positions[a * 3 + 1], e.positions[a * 3 + 2], e.positions[s * 3], e.positions[s * 3 + 1], e.positions[s * 3 + 2], e.positions[l * 3], e.positions[l * 3 + 1], e.positions[l * 3 + 2]);
    }
    return o.setAttribute("position", new It(n, 3)), o.computeVertexNormals(), o;
  }
  function Vn(e, t, o) {
    const n = e.indices[t * 3], r = e.indices[t * 3 + 1], a = e.indices[t * 3 + 2], s = new E(e.positions[n * 3], e.positions[n * 3 + 1], e.positions[n * 3 + 2]), l = new E(e.positions[r * 3], e.positions[r * 3 + 1], e.positions[r * 3 + 2]), u = new E(e.positions[a * 3], e.positions[a * 3 + 1], e.positions[a * 3 + 2]), m = l.clone().sub(s).cross(u.clone().sub(s)).normalize(), x = m.dot(s), d = 0.01, g = /* @__PURE__ */ new Map(), f = e.indices.length / 3;
    for (let S = 0; S < f; S++) {
      const C = e.indices[S * 3], j = e.indices[S * 3 + 1], R = e.indices[S * 3 + 2], A = new E(e.positions[C * 3], e.positions[C * 3 + 1], e.positions[C * 3 + 2]), N = new E(e.positions[j * 3], e.positions[j * 3 + 1], e.positions[j * 3 + 2]), W = new E(e.positions[R * 3], e.positions[R * 3 + 1], e.positions[R * 3 + 2]);
      if (!(N.clone().sub(A).cross(W.clone().sub(A)).normalize().dot(m) < 1 - Ao) && !(Math.abs(m.dot(A) - x) > d)) for (const F of [
        A,
        N,
        W
      ]) {
        const _ = `${F.x.toFixed(4)},${F.y.toFixed(4)},${F.z.toFixed(4)}`;
        g.has(_) || g.set(_, {
          x: F.x,
          y: F.y,
          z: F.z
        });
      }
    }
    const p = Array.from(g.values());
    let v = 0, P = 0, b = 0;
    for (const S of p) v += S.x, P += S.y, b += S.z;
    const h = Math.max(p.length, 1), w = {
      x: v / h,
      y: P / h,
      z: b / h
    };
    return {
      partId: o,
      faceIndex: t,
      normal: {
        x: m.x,
        y: m.y,
        z: m.z
      },
      centroid: w,
      vertices: p
    };
  }
  function fr({ mesh: e, materialKey: t }) {
    const o = c.useRef(null), n = c.useRef(null), [r, a] = c.useState(false), s = $((f) => f.showWireframe), l = $((f) => f.isOrbiting), u = Pe((f) => f.invalidate), m = oe((f) => f.document.materials), x = c.useMemo(() => {
      if (m[t]) return m[t];
      const f = kt(t);
      return f ? {
        name: f.name,
        color: f.color,
        metallic: f.metallic,
        roughness: f.roughness,
        transmission: f.transmission,
        ior: f.ior,
        thickness: f.thickness,
        attenuationDistance: f.attenuationDistance,
        attenuationColor: f.attenuationColor,
        clearcoat: f.clearcoat,
        clearcoatRoughness: f.clearcoatRoughness
      } : null;
    }, [
      m,
      t
    ]), d = c.useMemo(() => x ? new We(x.color[0], x.color[1], x.color[2]) : new We(0.55, 0.55, 0.55), [
      x
    ]);
    c.useEffect(() => {
      a(false);
      const f = o.current;
      if (!f) return;
      let p = false;
      return (async () => {
        const { getKernelWasmSync: v } = await yt(async () => {
          const { getKernelWasmSync: j } = await import("./index-BZXLWVKC.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }).then((R) => R.fx);
          return {
            getKernelWasmSync: j
          };
        }, __vite__mapDeps([0,1,2,3,4])), P = v();
        if (p) return;
        const b = new Float32Array(e.positions), h = new Uint32Array(e.indices);
        let w, S, C;
        if (P == null ? void 0 : P.renderBakeMesh) {
          const j = JSON.parse(P.renderBakeMesh(JSON.stringify({
            positions: Array.from(b),
            indices: Array.from(h)
          })));
          w = new Float32Array(j.positions), S = new Uint32Array(j.indices), C = new Float32Array(j.normals);
        } else w = b, S = h, C = new Float32Array(0);
        f.setAttribute("position", new $e(w, 3)), f.setIndex(new $e(S, 1)), C.length === w.length ? f.setAttribute("normal", new $e(C, 3)) : f.computeVertexNormals(), f.computeBoundingSphere(), f.computeBoundingBox(), a(true), u();
      })(), () => {
        p = true, f.dispose();
      };
    }, [
      e,
      u
    ]);
    const g = c.useRef(null);
    return c.useEffect(() => {
      const f = n.current;
      f && (g.current || (g.current = f.raycast.bind(f)), l ? f.raycast = () => {
      } : f.raycast = g.current);
    }, [
      l
    ]), i.jsxs("mesh", {
      ref: n,
      castShadow: true,
      receiveShadow: true,
      children: [
        i.jsx("bufferGeometry", {
          ref: o
        }),
        i.jsx(Do, {
          color: d,
          metalness: (x == null ? void 0 : x.metallic) ?? 0,
          roughness: (x == null ? void 0 : x.roughness) ?? 0.7,
          transmission: x == null ? void 0 : x.transmission,
          ior: x == null ? void 0 : x.ior,
          thickness: x == null ? void 0 : x.thickness,
          attenuationDistance: x == null ? void 0 : x.attenuationDistance,
          attenuationColor: x == null ? void 0 : x.attenuationColor,
          clearcoat: x == null ? void 0 : x.clearcoat,
          clearcoatRoughness: x == null ? void 0 : x.clearcoatRoughness
        }),
        s && r && i.jsx(mn, {
          threshold: 15,
          color: "#666"
        })
      ]
    });
  }
  const $n = c.memo(function({ partInfo: t, mesh: o, materialKey: n, selected: r, transform: a, selectionId: s, ghosted: l = false }) {
    const u = c.useRef(null), m = c.useRef(null), [x, d] = c.useState(false), g = $((k) => k.select), f = $((k) => k.toggleSelect), p = $((k) => k.selectItem), v = $((k) => k.setHoveredItem), P = $((k) => k.selectionFilter), b = $((k) => k.showWireframe), h = $((k) => k.hoveredPartId), w = $((k) => k.setHoveredPartId), S = Pe((k) => k.camera), C = Pe((k) => k.size), j = Pe((k) => k.invalidate), R = oe((k) => k.document.materials), A = oe((k) => k.renamePart), N = Ko((k) => {
      var _a2;
      return ((_a2 = k.fieldOverlay) == null ? void 0 : _a2.partId) === t.id ? k.fieldOverlay.colors : null;
    }), W = ke((k) => k.faceSelectionMode), D = ke((k) => k.hoveredFace), F = ke((k) => k.setHoveredFace), _ = ke((k) => k.selectFace), X = $((k) => k.isOrbiting), se = $((k) => k.isDraggingGizmo), re = $((k) => k.isGizmoHovered), xe = $((k) => k.captureMode), ge = r && !xe, B = s ?? t.id, ie = $((k) => k.hoveredItem), Ce = h === B || ie != null && ie.kind !== "segment" && ie.kind !== "constraint" && (ie.kind === "part" ? ie.id === B : ie.partId === t.id), ee = W && (D == null ? void 0 : D.partId) === t.id, Ee = c.useMemo(() => {
      if (X || !ee || (D == null ? void 0 : D.faceIndex) == null) return null;
      const k = ur(o, D.faceIndex);
      return dr(o, k);
    }, [
      X,
      ee,
      D == null ? void 0 : D.faceIndex,
      o
    ]);
    c.useEffect(() => () => {
      Ee == null ? void 0 : Ee.dispose();
    }, [
      Ee
    ]);
    const [de, be] = c.useState(false), [Fe, Ge] = c.useState(t.name), Oe = c.useRef(null), Se = $((k) => k.previewMaterial), ze = c.useMemo(() => (Se == null ? void 0 : Se.partId) === t.id ? Se.materialKey : n, [
      Se,
      t.id,
      n
    ]), me = c.useMemo(() => {
      const k = (y) => y ? {
        name: y.name,
        color: y.color,
        metallic: y.metallic,
        roughness: y.roughness,
        transmission: y.transmission,
        ior: y.ior,
        thickness: y.thickness,
        attenuationDistance: y.attenuationDistance,
        attenuationColor: y.attenuationColor,
        clearcoat: y.clearcoat,
        clearcoatRoughness: y.clearcoatRoughness
      } : null;
      if ((Se == null ? void 0 : Se.partId) === t.id) {
        const y = Se.materialKey;
        if (R[y]) return R[y];
        const I = k(kt(y));
        if (I) return I;
      }
      return R[n] ? R[n] : k(kt(n));
    }, [
      R,
      n,
      Se,
      t.id
    ]), je = c.useMemo(() => Vs(ze) ? $s(ze) : null, [
      ze
    ]), Le = c.useMemo(() => je ? new Ut({
      vertexShader: je.vertexShader,
      fragmentShader: je.fragmentShader,
      uniforms: je.uniforms,
      side: Ue
    }) : null, [
      je
    ]);
    c.useEffect(() => () => {
      Le == null ? void 0 : Le.dispose();
    }, [
      Le
    ]);
    const V = c.useMemo(() => me ? new We(me.color[0], me.color[1], me.color[2]) : new We(0.55, 0.55, 0.55), [
      me
    ]), Ne = !l && !xe && (ge || Ce && !W), Xe = c.useMemo(() => {
      var _a2;
      if (!x) return false;
      const k = u.current;
      if (!k) return false;
      const y = new Ps(k, 15), I = ((_a2 = y.attributes.position) == null ? void 0 : _a2.count) ?? 0;
      return y.dispose(), I === 0;
    }, [
      x,
      o
    ]);
    c.useEffect(() => {
      Ge(t.name);
    }, [
      t.name,
      r
    ]), c.useEffect(() => {
      var _a2;
      de && ((_a2 = Oe.current) == null ? void 0 : _a2.select());
    }, [
      de
    ]), c.useEffect(() => {
      d(false);
      const k = u.current;
      if (!k) return;
      const y = new Float32Array(o.positions), I = new Uint32Array(o.indices);
      if (k.setAttribute("position", new $e(y, 3)), k.setIndex(new $e(I, 1)), o.normals && o.normals.length === y.length) {
        const L = new Float32Array(o.normals);
        k.setAttribute("normal", new $e(L, 3));
      } else console.warn("[SceneMesh] kernel emitted mesh without normals \u2014 rebuild @vcad/kernel-wasm; falling back to computed normals"), k.computeVertexNormals();
      if (N && N.length === y.length) k.setAttribute("color", new $e(N, 3));
      else if (o.colors && o.colors.length === y.length) {
        const L = new Float32Array(o.colors);
        k.setAttribute("color", new $e(L, 3));
      } else k.deleteAttribute("color");
      return k.computeBoundingSphere(), k.computeBoundingBox(), d(true), j(), () => {
        k.dispose();
      };
    }, [
      o,
      t.name,
      j,
      N
    ]), c.useEffect(() => {
      const k = m.current;
      if (k) {
        if (a) {
          k.position.set(a.translation.x, a.translation.y, a.translation.z);
          const y = new Zt(a.rotation.x * tn, a.rotation.y * tn, a.rotation.z * tn, "ZYX");
          k.quaternion.setFromEuler(y), k.scale.set(a.scale.x, a.scale.y, a.scale.z);
        } else k.position.set(0, 0, 0), k.quaternion.identity(), k.scale.set(1, 1, 1);
        j();
      }
    }, [
      a,
      j
    ]);
    const ae = c.useMemo(() => {
      if (!o.positions.length) return new E();
      const k = new rt(), y = new E();
      for (let L = 0; L < o.positions.length; L += 3) y.set(o.positions[L], o.positions[L + 1], o.positions[L + 2]), k.expandByPoint(y);
      const I = new E();
      return k.getCenter(I), I.z = k.max.z + 4, I;
    }, [
      o.positions
    ]), Q = c.useCallback(() => {
      const k = Fe.trim();
      k && k !== t.name && A(t.id, k), be(false);
    }, [
      Fe,
      t.id,
      t.name,
      A
    ]), U = c.useCallback(() => {
      Ge(t.name), be(false);
    }, [
      t.name
    ]), we = ot((k) => k.inspectTriangles), he = ot((k) => k.setCurrentInspection), He = c.useCallback((k) => {
      if (Jt() || se || re) return;
      if (k.stopPropagation(), we && k.faceIndex != null) {
        const I = ir(o, k.faceIndex);
        I && (he(I), console.log("[triangle-inspector]", I));
        return;
      }
      if (W && k.faceIndex != null) {
        const I = Vn(o, k.faceIndex, t.id);
        _(I);
        return;
      }
      if (k.nativeEvent.shiftKey || k.nativeEvent.metaKey) {
        f(B);
        return;
      }
      if (k.faceIndex != null) {
        const I = Ln({
          triIndex: k.faceIndex,
          hitPoint: k.point,
          mesh: o,
          partId: t.id,
          filter: P,
          camera: S,
          viewport: C
        });
        if (I) {
          p(I);
          return;
        }
      }
      g(B);
    }, [
      B,
      se,
      re,
      W,
      o,
      t.id,
      _,
      f,
      g,
      p,
      P,
      S,
      C,
      we,
      he
    ]), Ie = c.useCallback((k) => {
      if (!(X || se || re)) {
        if (W && k.faceIndex != null) {
          k.stopPropagation();
          const y = Vn(o, k.faceIndex, t.id);
          F(y);
          return;
        }
        if (k.faceIndex != null) {
          k.stopPropagation();
          const y = Ln({
            triIndex: k.faceIndex,
            hitPoint: k.point,
            mesh: o,
            partId: t.id,
            filter: P,
            camera: S,
            viewport: C
          });
          v(y || {
            kind: "part",
            id: t.id
          });
        }
      }
    }, [
      X,
      se,
      re,
      W,
      o,
      t.id,
      F,
      v,
      P,
      S,
      C
    ]), Ze = c.useCallback((k) => {
      X || se || re || (k.stopPropagation(), W || w(t.id));
    }, [
      X,
      se,
      re,
      W,
      t.id,
      w
    ]), Te = c.useCallback(() => {
      X || (W ? F(null) : w(null));
    }, [
      X,
      W,
      F,
      w
    ]), qe = c.useRef(null);
    return c.useEffect(() => {
      const k = m.current;
      k && (qe.current || (qe.current = k.raycast.bind(k)), X || l ? k.raycast = () => {
      } : k.raycast = qe.current);
    }, [
      X,
      l
    ]), i.jsxs("mesh", {
      ref: m,
      castShadow: true,
      receiveShadow: true,
      onClick: He,
      onPointerMove: Ie,
      onPointerOver: Ze,
      onPointerOut: Te,
      material: Le ?? void 0,
      userData: {
        partId: t.id
      },
      children: [
        i.jsx("bufferGeometry", {
          ref: u
        }),
        !Le && i.jsx(Do, {
          color: o.colors || N ? void 0 : V,
          vertexColors: !!o.colors || !!N,
          metalness: (me == null ? void 0 : me.metallic) ?? 0,
          roughness: (me == null ? void 0 : me.roughness) ?? 0.7,
          transmission: me == null ? void 0 : me.transmission,
          ior: me == null ? void 0 : me.ior,
          thickness: me == null ? void 0 : me.thickness,
          attenuationDistance: me == null ? void 0 : me.attenuationDistance,
          attenuationColor: me == null ? void 0 : me.attenuationColor,
          clearcoat: me == null ? void 0 : me.clearcoat,
          clearcoatRoughness: me == null ? void 0 : me.clearcoatRoughness,
          transparent: l || void 0,
          opacity: l ? 0.16 : void 0,
          depthWrite: l ? false : void 0
        }),
        b && x && i.jsx(mn, {
          threshold: 15,
          color: "#666"
        }),
        Ne && x && !Xe && i.jsx(mn, {
          threshold: 15,
          color: ge ? On : Bn,
          lineWidth: ge ? 3 : 2,
          renderOrder: 1
        }),
        Ne && x && Xe && i.jsx(Vo, {
          color: ge ? On : Bn,
          thickness: ge ? 3 : 2,
          angle: Math.PI,
          renderOrder: 1
        }),
        Ee && i.jsx("mesh", {
          geometry: Ee,
          renderOrder: 1,
          children: i.jsx("meshBasicMaterial", {
            color: lr,
            transparent: true,
            opacity: 0.4,
            depthTest: true,
            depthWrite: false,
            polygonOffset: true,
            polygonOffsetFactor: -4,
            polygonOffsetUnits: -4,
            side: Ue
          })
        }),
        r && !W && i.jsx(it, {
          position: ae,
          center: true,
          style: {
            pointerEvents: "auto"
          },
          children: i.jsxs("div", {
            className: "flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-text whitespace-nowrap bg-surface/90 backdrop-blur-sm border border-border rounded-md shadow-sm",
            children: [
              de ? i.jsx("input", {
                ref: Oe,
                type: "text",
                value: Fe,
                onClick: (k) => k.stopPropagation(),
                onFocus: (k) => k.currentTarget.select(),
                onChange: (k) => Ge(k.target.value),
                onBlur: Q,
                onKeyDown: (k) => {
                  k.key === "Enter" && Q(), k.key === "Escape" && U();
                },
                className: "min-w-[80px] bg-transparent text-text outline-none",
                autoFocus: true
              }) : i.jsx("button", {
                type: "button",
                onClick: (k) => {
                  k.stopPropagation(), be(true);
                },
                className: "text-text",
                children: t.name
              }),
              !de && En(t) && i.jsx("button", {
                type: "button",
                onClick: (k) => {
                  k.stopPropagation(), le.getState().enter();
                },
                className: "px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors",
                children: "Edit"
              }),
              !de && (Zo(t) || Jo(t)) && i.jsx("button", {
                type: "button",
                onClick: (k) => {
                  k.stopPropagation(), Qo.getState().openPanel();
                },
                className: "px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors",
                children: "Edit"
              })
            ]
          })
        })
      ]
    });
  }), pr = {
    H: [
      1,
      1,
      1
    ],
    C: [
      0.34,
      0.34,
      0.34
    ],
    N: [
      0.19,
      0.31,
      0.97
    ],
    O: [
      1,
      0.05,
      0.05
    ],
    F: [
      0.56,
      0.88,
      0.31
    ],
    Na: [
      0.67,
      0.36,
      0.95
    ],
    Mg: [
      0.54,
      1,
      0
    ],
    Al: [
      0.75,
      0.65,
      0.65
    ],
    Si: [
      0.94,
      0.78,
      0.63
    ],
    P: [
      1,
      0.5,
      0
    ],
    S: [
      1,
      1,
      0.19
    ],
    Cl: [
      0.12,
      0.94,
      0.12
    ],
    K: [
      0.56,
      0.25,
      0.83
    ],
    Ca: [
      0.24,
      1,
      0
    ],
    Fe: [
      0.88,
      0.4,
      0.2
    ],
    Cu: [
      0.78,
      0.5,
      0.2
    ],
    Zn: [
      0.49,
      0.5,
      0.69
    ],
    Au: [
      1,
      0.82,
      0.14
    ]
  }, mr = {
    H: 0.31,
    C: 0.76,
    N: 0.71,
    O: 0.66,
    F: 0.57,
    Na: 1.66,
    Mg: 1.41,
    Al: 1.21,
    Si: 1.11,
    P: 1.07,
    S: 1.05,
    Cl: 1.02,
    K: 2.03,
    Ca: 1.76,
    Fe: 1.32,
    Cu: 1.32,
    Zn: 1.22,
    Au: 1.36
  };
  function nn(e, t) {
    const o = e.species[e.speciesIdx[t]];
    return (o == null ? void 0 : o.color) ?? pr[(o == null ? void 0 : o.element) ?? "C"] ?? [
      0.85,
      0.4,
      0.85
    ];
  }
  function Wn(e, t, o) {
    const n = e.species[e.speciesIdx[t]], r = (n == null ? void 0 : n.radius) ?? mr[(n == null ? void 0 : n.element) ?? "C"] ?? 0.75;
    return o === "space_filling" ? r * 1.8 : o === "wireframe" ? r * 0.2 : r * 0.42;
  }
  const To = `
vec3 acesFilm(vec3 x){
  const float a=2.51, b=0.03, c=2.43, d=0.59, e=0.14;
  return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0);
}
vec3 shadeMolecule(vec3 srgb, vec3 N, vec3 V){
  vec3 base = pow(srgb, vec3(2.2));                 // to linear
  vec3 keyDir  = normalize(vec3(0.35, 0.65, 0.68)); // camera-relative lights
  vec3 fillDir = normalize(vec3(-0.6, -0.2, 0.35));
  float key  = max(dot(N, keyDir), 0.0);
  float fill = max(dot(N, fillDir), 0.0) * 0.30;
  // hemispheric ambient (sky above / ground below in view space)
  float hemi = N.y * 0.5 + 0.5;
  vec3 ambient = mix(vec3(0.10,0.10,0.13), vec3(0.42,0.48,0.58), hemi);
  // Blinn specular from the key light
  vec3 H = normalize(keyDir + V);
  float spec = pow(max(dot(N, H), 0.0), 56.0) * 0.55;
  // Fresnel rim
  float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  vec3 rim = vec3(0.45, 0.62, 0.95) * fres * 0.6;
  // subtle edge AO so spheres feel volumetric
  float edgeAO = mix(0.72, 1.0, max(dot(N, V), 0.0));
  vec3 col = base * (ambient + key + fill) * edgeAO + spec + rim;
  col = acesFilm(col);
  return pow(col, vec3(1.0/2.2));                   // to sRGB
}`, hr = `
in vec3 iCenter;
in float iRadius;
in vec3 iColor;
in float iIndex;
out vec3 vColor;
out float vRadius;
// flat: the atom index is a per-atom integer and must reach the fragment shader
// unmodified. Without flat the rasterizer would interpolate it across the quad;
// even though all four quad vertices currently share one iIndex (making that a
// no-op), flat makes the exact-integer guarantee hold no matter how the vertex
// shader changes, so the abs(vIndex - uSelected) < 0.5 selection test stays safe.
flat out float vIndex;
out vec3 vCenterView;
out vec3 vViewPos;
void main(){
  vColor = iColor;
  vRadius = iRadius;
  vIndex = iIndex;
  vec4 cv = modelViewMatrix * vec4(iCenter, 1.0);
  vCenterView = cv.xyz;
  // camera-facing quad, oversized for perspective safety
  vec3 pos = cv.xyz + vec3(position.xy * iRadius * 1.5, 0.0);
  vViewPos = pos;
  gl_Position = projectionMatrix * vec4(pos, 1.0);
}`, xr = `
precision highp float;
uniform float logDepthBufFC;
uniform float uSelected;       // selected atom index, or -1
uniform mat4 projectionMatrix; // three binds this built-in when declared in-stage
in vec3 vColor;
in float vRadius;
flat in float vIndex;          // per-atom index, not interpolated (see vertex shader)
in vec3 vCenterView;
in vec3 vViewPos;
out vec4 fragColor;
${To}
void main(){
  vec3 rd = normalize(vViewPos);          // ray from camera (origin) to fragment
  vec3 oc = -vCenterView;
  float b = dot(oc, rd);
  float c = dot(oc, oc) - vRadius * vRadius;
  float h = b * b - c;
  if (h < 0.0) discard;                   // ray misses sphere
  float t = -b - sqrt(h);
  if (t < 0.0) discard;
  vec3 P = rd * t;                        // hit point (view space)
  vec3 N = normalize(P - vCenterView);
  vec3 V = normalize(-P);
  // correct depth for logarithmicDepthBuffer
  vec4 clip = projectionMatrix * vec4(P, 1.0);
  gl_FragDepth = log2(1.0 + clip.w) * logDepthBufFC * 0.5;
  vec3 col = shadeMolecule(vColor, N, V);
  // Selection highlight: warm emissive lift + a bright silhouette ring.
  if (abs(vIndex - uSelected) < 0.5) {
    float ring = smoothstep(0.55, 0.98, 1.0 - max(dot(N, V), 0.0));
    col = mix(col, vec3(1.0, 0.85, 0.35), 0.28) + vec3(1.0, 0.8, 0.3) * ring * 0.9;
  }
  fragColor = vec4(col, 1.0);
}`, gr = `
out vec3 vColor;
out vec3 vNormalV;
out vec3 vViewPos;
void main(){
  #ifdef USE_INSTANCING_COLOR
    vColor = instanceColor;
  #else
    vColor = vec3(0.6);
  #endif
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  vViewPos = mv.xyz;
  vNormalV = normalize((modelViewMatrix * instanceMatrix * vec4(normal, 0.0)).xyz);
  gl_Position = projectionMatrix * mv;
}`, yr = `
precision highp float;
uniform float logDepthBufFC;
uniform mat4 projectionMatrix; // three binds this built-in when declared in-stage
in vec3 vColor;
in vec3 vNormalV;
in vec3 vViewPos;
out vec4 fragColor;
${To}
void main(){
  vec3 N = normalize(vNormalV);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(-vViewPos);
  vec4 clip = projectionMatrix * vec4(vViewPos, 1.0);
  gl_FragDepth = log2(1.0 + clip.w) * logDepthBufFC * 0.5;
  fragColor = vec4(shadeMolecule(vColor, N, V), 1.0);
}`;
  function vr({ molecule: e, representation: t = "ball_and_stick" }) {
    const o = c.useRef(null), n = c.useRef(null), r = jt((b) => b.selectAtom), a = e.positions.length, s = e.bonds ?? [], l = t !== "space_filling", u = c.useMemo(() => {
      let b = 1e-3;
      for (const h of e.positions) b = Math.max(b, Math.hypot(h[0], h[1], h[2]));
      return 34 / b;
    }, [
      e
    ]), m = c.useMemo(() => {
      const b = new Co(2, 2), h = new Cs();
      h.index = b.index, h.attributes.position = b.attributes.position, h.attributes.uv = b.attributes.uv;
      const w = new Float32Array(a * 3), S = new Float32Array(a), C = new Float32Array(a * 3), j = new Float32Array(a);
      for (let R = 0; R < a; R++) {
        const A = e.positions[R];
        w[R * 3] = A[0] * u, w[R * 3 + 1] = A[1] * u, w[R * 3 + 2] = A[2] * u, S[R] = Wn(e, R, t) * u;
        const N = nn(e, R);
        C[R * 3] = N[0], C[R * 3 + 1] = N[1], C[R * 3 + 2] = N[2], j[R] = R;
      }
      return h.setAttribute("iCenter", new Ot(w, 3)), h.setAttribute("iRadius", new Ot(S, 1)), h.setAttribute("iColor", new Ot(C, 3)), h.setAttribute("iIndex", new Ot(j, 1)), h.instanceCount = a, b.dispose(), h;
    }, [
      e,
      a,
      t,
      u
    ]), x = c.useMemo(() => new Ut({
      glslVersion: Dn,
      uniforms: {
        logDepthBufFC: {
          value: 1
        },
        uSelected: {
          value: -1
        }
      },
      vertexShader: hr,
      fragmentShader: xr
    }), []), d = c.useMemo(() => new js(1, 12, 8), []), g = c.useMemo(() => new Rs({
      colorWrite: false,
      depthWrite: false
    }), []), f = c.useMemo(() => new ks(1, 1, 1, 12, 1), []), p = c.useMemo(() => new Ut({
      glslVersion: Dn,
      uniforms: {
        logDepthBufFC: {
          value: 1
        }
      },
      vertexShader: gr,
      fragmentShader: yr
    }), []), v = l ? s.length * 2 : 0;
    c.useEffect(() => () => m.dispose(), [
      m
    ]), c.useEffect(() => () => {
      x.dispose(), d.dispose(), g.dispose(), f.dispose(), p.dispose();
    }, [
      x,
      d,
      g,
      f,
      p
    ]), c.useLayoutEffect(() => {
      const b = o.current;
      if (!b || !l) return;
      const h = (t === "wireframe" ? 0.05 : 0.11) * u, w = new At(), S = new E(), C = new E(), j = new st(), R = new E(0, 1, 0), A = new E(), N = new E(), W = new E(), D = new E(), F = new We();
      let _ = 0;
      for (const X of s) {
        const se = e.positions[X.a], re = e.positions[X.b];
        A.set(se[0] * u, se[1] * u, se[2] * u), N.set(re[0] * u, re[1] * u, re[2] * u), D.addVectors(A, N).multiplyScalar(0.5), W.subVectors(N, A);
        const xe = W.length();
        if (xe < 1e-6) {
          w.makeScale(0, 0, 0), b.setMatrixAt(_, w), b.setMatrixAt(_ + 1, w), _ += 2;
          continue;
        }
        W.normalize(), j.setFromUnitVectors(R, W), C.set(h, xe / 2, h), S.addVectors(A, D).multiplyScalar(0.5), w.compose(S, j, C), b.setMatrixAt(_, w);
        const ge = nn(e, X.a);
        F.setRGB(ge[0], ge[1], ge[2]), b.setColorAt(_, F), S.addVectors(D, N).multiplyScalar(0.5), w.compose(S, j, C), b.setMatrixAt(_ + 1, w);
        const B = nn(e, X.b);
        F.setRGB(B[0], B[1], B[2]), b.setColorAt(_ + 1, F), _ += 2;
      }
      b.count = v, b.instanceMatrix.needsUpdate = true, b.instanceColor && (b.instanceColor.needsUpdate = true);
    }, [
      e,
      s,
      l,
      t,
      v,
      u
    ]), c.useLayoutEffect(() => {
      const b = n.current;
      if (!b) return;
      const h = new At(), w = new E(), S = new E(), C = new st();
      for (let j = 0; j < a; j++) {
        const R = e.positions[j], A = Wn(e, j, t) * u;
        w.set(R[0] * u, R[1] * u, R[2] * u), S.set(A, A, A), h.compose(w, C, S), b.setMatrixAt(j, h);
      }
      b.count = a, b.instanceMatrix.needsUpdate = true;
    }, [
      e,
      a,
      t,
      u
    ]), Qe(({ camera: b }) => {
      const h = 2 / Math.log2(b.far + 1);
      x.uniforms.logDepthBufFC.value = h, p.uniforms.logDepthBufFC.value = h;
      const w = jt.getState().selectedAtomIndex;
      x.uniforms.uSelected.value = w ?? -1;
    });
    const P = (b) => {
      if (Jt()) return;
      b.stopPropagation();
      const h = b.instanceId;
      if (h === void 0) return;
      const w = jt.getState().selectedAtomIndex;
      r(w === h ? null : h);
    };
    return a === 0 ? null : i.jsxs("group", {
      children: [
        i.jsx("mesh", {
          geometry: m,
          material: x,
          frustumCulled: false
        }),
        i.jsx("instancedMesh", {
          ref: n,
          args: [
            d,
            g,
            a
          ],
          frustumCulled: false,
          onClick: P
        }, a),
        l && s.length > 0 && i.jsx("instancedMesh", {
          ref: o,
          args: [
            f,
            p,
            v
          ],
          frustumCulled: false
        })
      ]
    });
  }
  function wr(e, t) {
    const o = /* @__PURE__ */ new Map(), n = (s, l) => s < l ? `${s},${l}` : `${l},${s}`, r = t.length / 3;
    for (let s = 0; s < r; s++) {
      const l = t[3 * s], u = t[3 * s + 1], m = t[3 * s + 2];
      for (const [x, d] of [
        [
          l,
          u
        ],
        [
          u,
          m
        ],
        [
          m,
          l
        ]
      ]) {
        const g = n(x, d);
        o.set(g, (o.get(g) ?? 0) + 1);
      }
    }
    const a = [];
    for (const [s, l] of o) {
      if (l !== 1) continue;
      const [u, m] = s.split(","), x = parseInt(u, 10), d = parseInt(m, 10);
      a.push(e[3 * x], e[3 * x + 1], e[3 * x + 2], e[3 * d], e[3 * d + 1], e[3 * d + 2]);
    }
    return new Float32Array(a);
  }
  function br({ positions: e, indices: t }) {
    const o = c.useMemo(() => {
      const n = wr(e, t), r = new ft();
      return r.setAttribute("position", new $e(n, 3)), r;
    }, [
      e,
      t
    ]);
    return i.jsx("lineSegments", {
      geometry: o,
      renderOrder: 999,
      children: i.jsx("lineBasicMaterial", {
        color: "#ff2040",
        linewidth: 2,
        depthTest: false,
        transparent: true
      })
    });
  }
  const Sr = `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`, Mr = `
  varying vec3 vWorldPosition;

  void main() {
    // Diagonal stripes in world space
    float stripe = sin((vWorldPosition.x + vWorldPosition.y + vWorldPosition.z) * 8.0);
    float pattern = step(0.0, stripe);

    // Yellow and black zebra pattern
    vec3 yellow = vec3(1.0, 0.85, 0.0);
    vec3 black = vec3(0.1, 0.1, 0.1);
    vec3 color = mix(black, yellow, pattern);

    gl_FragColor = vec4(color, 1.0);
  }
`;
  function Er({ mesh: e }) {
    const t = c.useRef(null), o = c.useMemo(() => new Ut({
      vertexShader: Sr,
      fragmentShader: Mr,
      side: Ue
    }), []);
    return c.useEffect(() => {
      const n = t.current;
      if (n) return n.setAttribute("position", new $e(e.positions, 3)), n.setIndex(new $e(e.indices, 1)), e.normals && e.normals.length === e.positions.length ? n.setAttribute("normal", new $e(e.normals, 3)) : n.computeVertexNormals(), () => {
        n.dispose();
      };
    }, [
      e
    ]), i.jsx("mesh", {
      material: o,
      renderOrder: 1,
      children: i.jsx("bufferGeometry", {
        ref: t
      })
    });
  }
  function Pr() {
    const e = $((m) => m.clearanceIndicator), t = $((m) => m.captureMode);
    if (!e || t) return null;
    const { pointA: o, pointB: n, distanceMm: r, pass: a, label: s } = e, l = [
      (o[0] + n[0]) / 2,
      (o[1] + n[1]) / 2,
      (o[2] + n[2]) / 2
    ], u = a ? "#22c55e" : "#ef4444";
    return i.jsxs("group", {
      children: [
        i.jsx(Ae, {
          points: [
            o,
            n
          ],
          color: u,
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 1.2
        }),
        i.jsxs("mesh", {
          position: o,
          children: [
            i.jsx("sphereGeometry", {
              args: [
                0.8,
                12,
                12
              ]
            }),
            i.jsx("meshBasicMaterial", {
              color: u
            })
          ]
        }),
        i.jsxs("mesh", {
          position: n,
          children: [
            i.jsx("sphereGeometry", {
              args: [
                0.8,
                12,
                12
              ]
            }),
            i.jsx("meshBasicMaterial", {
              color: u
            })
          ]
        }),
        i.jsx(it, {
          position: l,
          center: true,
          zIndexRange: [
            40,
            0
          ],
          children: i.jsxs("div", {
            className: "pointer-events-auto flex items-center gap-1.5 rounded border px-1.5 py-0.5 text-[10px] font-mono whitespace-nowrap shadow-sm",
            style: {
              background: "var(--color-bg, #fff)",
              borderColor: u,
              color: u
            },
            children: [
              i.jsxs("span", {
                children: [
                  s ? `${s}: ` : "",
                  r.toFixed(2),
                  " mm"
                ]
              }),
              i.jsx("span", {
                className: "font-sans",
                children: a ? "clear" : "violated"
              }),
              i.jsx("button", {
                "aria-label": "Dismiss clearance measurement",
                className: "ml-0.5 opacity-60 hover:opacity-100",
                onClick: () => $.getState().setClearanceIndicator(null),
                children: "\xD7"
              })
            ]
          })
        })
      ]
    });
  }
  function Cr({ mesh: e }) {
    const t = c.useRef(null);
    return c.useEffect(() => {
      const o = t.current;
      if (!o) return;
      const n = new Float32Array(e.positions), r = new Uint32Array(e.indices);
      return o.setAttribute("position", new $e(n, 3)), o.setIndex(new $e(r, 1)), o.computeVertexNormals(), o.computeBoundingSphere(), () => {
        o.dispose();
      };
    }, [
      e
    ]), i.jsxs("mesh", {
      children: [
        i.jsx("bufferGeometry", {
          ref: t
        }),
        i.jsx("meshStandardMaterial", {
          color: "#00d4ff",
          transparent: true,
          opacity: 0.4,
          side: Ue,
          depthWrite: false
        })
      ]
    });
  }
  const jr = "#ff4d4d", Rr = "#2fbf71";
  function Gn({ mesh: e, color: t }) {
    const o = c.useRef(null);
    return c.useEffect(() => {
      const n = o.current;
      if (n) return n.setAttribute("position", new $e(new Float32Array(e.positions), 3)), n.setIndex(new $e(new Uint32Array(e.indices), 1)), n.computeVertexNormals(), n.computeBoundingSphere(), () => {
        n.dispose();
      };
    }, [
      e
    ]), i.jsxs("mesh", {
      renderOrder: 997,
      raycast: () => null,
      children: [
        i.jsx("bufferGeometry", {
          ref: o
        }),
        i.jsx("meshStandardMaterial", {
          color: t,
          transparent: true,
          opacity: 0.35,
          side: Ue,
          depthWrite: false
        })
      ]
    });
  }
  function kr() {
    const e = es((t) => t.ghost);
    return e ? i.jsxs("group", {
      children: [
        e.removed.map((t, o) => i.jsx(Gn, {
          mesh: t,
          color: jr
        }, `r${o}`)),
        e.added.map((t, o) => i.jsx(Gn, {
          mesh: t,
          color: Rr
        }, `a${o}`))
      ]
    }) : null;
  }
  const et = 10, Bt = 200, zr = 5;
  function Je(e) {
    return new E(e.x, e.y, e.z);
  }
  function qt({ position: e, screenPx: t = 1, children: o }) {
    const n = c.useRef(null), { camera: r, size: a } = Pe(), s = c.useRef(new E());
    return Qe(() => {
      const l = n.current;
      if (!l) return;
      const u = Array.isArray(e) ? s.current.fromArray(e) : e, m = r, x = m.position.distanceTo(u), d = (m.fov ?? 50) * Math.PI / 180, g = 2 * x * Math.tan(d / 2) / a.height;
      l.scale.setScalar(Math.max(1e-4, t * g));
    }), i.jsx("group", {
      ref: n,
      position: e,
      children: o
    });
  }
  function _e(e, t, o, n) {
    return new E(t.x + e.x * o.x + e.y * n.x, t.y + e.x * o.y + e.y * n.y, t.z + e.x * o.z + e.y * n.z);
  }
  function Hn(e, t, o, n) {
    const r = e.x - t.x, a = e.y - t.y, s = e.z - t.z;
    return {
      x: r * o.x + a * o.y + s * o.z,
      y: r * n.x + a * n.y + s * n.z
    };
  }
  function Ir({ origin: e, xDir: t, yDir: o, bounds: n }) {
    const { isDark: r } = at(), a = c.useMemo(() => {
      if (!n) return {
        minU: -Bt,
        maxU: Bt,
        minV: -Bt,
        maxV: Bt
      };
      const x = et;
      return {
        minU: Math.floor((n.minU - x) / et) * et,
        maxU: Math.ceil((n.maxU + x) / et) * et,
        minV: Math.floor((n.minV - x) / et) * et,
        maxV: Math.ceil((n.maxV + x) / et) * et
      };
    }, [
      n
    ]), s = c.useMemo(() => {
      const x = [], d = Je(e), g = Je(t), f = Je(o), p = r ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
      for (let v = a.minV; v <= a.maxV; v += et) {
        if (v === 0) continue;
        const P = d.clone().add(g.clone().multiplyScalar(a.minU)).add(f.clone().multiplyScalar(v)), b = d.clone().add(g.clone().multiplyScalar(a.maxU)).add(f.clone().multiplyScalar(v));
        x.push({
          points: [
            [
              P.x,
              P.y,
              P.z
            ],
            [
              b.x,
              b.y,
              b.z
            ]
          ],
          color: p,
          width: 1
        });
      }
      for (let v = a.minU; v <= a.maxU; v += et) {
        if (v === 0) continue;
        const P = d.clone().add(f.clone().multiplyScalar(a.minV)).add(g.clone().multiplyScalar(v)), b = d.clone().add(f.clone().multiplyScalar(a.maxV)).add(g.clone().multiplyScalar(v));
        x.push({
          points: [
            [
              P.x,
              P.y,
              P.z
            ],
            [
              b.x,
              b.y,
              b.z
            ]
          ],
          color: p,
          width: 1
        });
      }
      return x;
    }, [
      e,
      t,
      o,
      r,
      a
    ]), l = c.useMemo(() => {
      const x = Je(e), d = Je(t), g = x.clone().add(d.clone().multiplyScalar(a.minU)), f = x.clone().add(d.clone().multiplyScalar(a.maxU));
      return [
        [
          g.x,
          g.y,
          g.z
        ],
        [
          f.x,
          f.y,
          f.z
        ]
      ];
    }, [
      e,
      t,
      a
    ]), u = c.useMemo(() => {
      const x = Je(e), d = Je(o), g = x.clone().add(d.clone().multiplyScalar(a.minV)), f = x.clone().add(d.clone().multiplyScalar(a.maxV));
      return [
        [
          g.x,
          g.y,
          g.z
        ],
        [
          f.x,
          f.y,
          f.z
        ]
      ];
    }, [
      e,
      o,
      a
    ]), m = c.useMemo(() => Je(e), [
      e
    ]);
    return i.jsxs("group", {
      children: [
        s.map((x, d) => i.jsx(Ae, {
          points: x.points,
          color: r ? "#404040" : "#888888",
          lineWidth: x.width,
          transparent: true,
          opacity: 0.3,
          depthWrite: false
        }, d)),
        i.jsx(Ae, {
          points: l,
          color: "#ef4444",
          lineWidth: 2,
          transparent: true,
          opacity: 0.8,
          depthWrite: false
        }),
        i.jsx(Ae, {
          points: u,
          color: "#22c55e",
          lineWidth: 2,
          transparent: true,
          opacity: 0.8,
          depthWrite: false
        }),
        i.jsxs("mesh", {
          position: m,
          children: [
            i.jsx("sphereGeometry", {
              args: [
                1,
                16,
                16
              ]
            }),
            i.jsx("meshBasicMaterial", {
              color: "#ffffff"
            })
          ]
        })
      ]
    });
  }
  function Ar({ segments: e, selectedSegments: t, constraints: o, pendingPoints: n, origin: r, xDir: a, yDir: s }) {
    const { isDark: l } = at(), u = c.useMemo(() => e.map((g, f) => {
      const p = t.includes(f), v = _e(g.start, r, a, s), P = _e(g.end, r, a, s);
      if (g.type === "Line") return {
        type: "line",
        points: [
          [
            v.x,
            v.y,
            v.z
          ],
          [
            P.x,
            P.y,
            P.z
          ]
        ],
        color: p ? "#f59e0b" : "#3b82f6",
        width: p ? 3 : 2,
        start: v,
        end: P
      };
      {
        const b = _e(g.center, r, a, s), h = v.distanceTo(b), w = Math.atan2(g.start.y - g.center.y, g.start.x - g.center.x), S = Math.atan2(g.end.y - g.center.y, g.end.x - g.center.x), C = [], j = 16;
        let R = S - w;
        g.ccw && R < 0 && (R += 2 * Math.PI), !g.ccw && R > 0 && (R -= 2 * Math.PI);
        for (let A = 0; A <= j; A++) {
          const N = A / j, W = w + R * N, D = {
            x: g.center.x + h * Math.cos(W),
            y: g.center.y + h * Math.sin(W)
          }, F = _e(D, r, a, s);
          C.push([
            F.x,
            F.y,
            F.z
          ]);
        }
        return {
          type: "arc",
          points: C,
          color: p ? "#f59e0b" : "#3b82f6",
          width: p ? 3 : 2,
          start: v,
          end: P
        };
      }
    }), [
      e,
      t,
      r,
      a,
      s
    ]), m = c.useMemo(() => {
      const g = [], f = /* @__PURE__ */ new Set();
      for (const p of e) {
        const v = _e(p.start, r, a, s), P = _e(p.end, r, a, s), b = `${v.x.toFixed(2)},${v.y.toFixed(2)},${v.z.toFixed(2)}`, h = `${P.x.toFixed(2)},${P.y.toFixed(2)},${P.z.toFixed(2)}`;
        f.has(b) || (f.add(b), g.push(v)), f.has(h) || (f.add(h), g.push(P));
      }
      return g;
    }, [
      e,
      r,
      a,
      s
    ]), x = c.useMemo(() => n.map((g) => _e(g, r, a, s)), [
      n,
      r,
      a,
      s
    ]), d = c.useMemo(() => {
      const g = [];
      for (const f of o) if (f.type === "Horizontal") {
        const p = e[f.line];
        if ((p == null ? void 0 : p.type) === "Line") {
          const v = {
            x: (p.start.x + p.end.x) / 2,
            y: (p.start.y + p.end.y) / 2 + 3
          };
          g.push({
            position: _e(v, r, a, s),
            text: "H",
            color: "#22c55e"
          });
        }
      } else if (f.type === "Vertical") {
        const p = e[f.line];
        if ((p == null ? void 0 : p.type) === "Line") {
          const v = {
            x: (p.start.x + p.end.x) / 2 + 3,
            y: (p.start.y + p.end.y) / 2
          };
          g.push({
            position: _e(v, r, a, s),
            text: "V",
            color: "#22c55e"
          });
        }
      } else if (f.type === "Length") {
        const p = e[f.line];
        if ((p == null ? void 0 : p.type) === "Line") {
          const v = {
            x: (p.start.x + p.end.x) / 2,
            y: (p.start.y + p.end.y) / 2 - 3
          };
          g.push({
            position: _e(v, r, a, s),
            text: `${f.length}`,
            color: "#a855f7"
          });
        }
      } else if (f.type === "Parallel") {
        const p = e[f.lineA], v = e[f.lineB];
        if ((p == null ? void 0 : p.type) === "Line" && (v == null ? void 0 : v.type) === "Line") {
          const P = {
            x: (p.start.x + p.end.x) / 2,
            y: (p.start.y + p.end.y) / 2 + 3
          }, b = {
            x: (v.start.x + v.end.x) / 2,
            y: (v.start.y + v.end.y) / 2 + 3
          };
          g.push({
            position: _e(P, r, a, s),
            text: "//",
            color: "#06b6d4"
          }), g.push({
            position: _e(b, r, a, s),
            text: "//",
            color: "#06b6d4"
          });
        }
      } else if (f.type === "Perpendicular") {
        const p = e[f.lineA];
        if ((p == null ? void 0 : p.type) === "Line") {
          const v = {
            x: (p.start.x + p.end.x) / 2,
            y: (p.start.y + p.end.y) / 2 + 3
          };
          g.push({
            position: _e(v, r, a, s),
            text: "\u22A5",
            color: "#f43f5e"
          });
        }
      } else if (f.type === "EqualLength") {
        const p = e[f.lineA], v = e[f.lineB];
        if ((p == null ? void 0 : p.type) === "Line" && (v == null ? void 0 : v.type) === "Line") {
          const P = {
            x: (p.start.x + p.end.x) / 2,
            y: (p.start.y + p.end.y) / 2 + 3
          }, b = {
            x: (v.start.x + v.end.x) / 2,
            y: (v.start.y + v.end.y) / 2 + 3
          };
          g.push({
            position: _e(P, r, a, s),
            text: "=",
            color: "#eab308"
          }), g.push({
            position: _e(b, r, a, s),
            text: "=",
            color: "#eab308"
          });
        }
      }
      return g;
    }, [
      o,
      e,
      r,
      a,
      s
    ]);
    return i.jsxs("group", {
      children: [
        u.map((g, f) => i.jsx(Ae, {
          points: g.points,
          color: g.color,
          lineWidth: g.width,
          depthWrite: false
        }, f)),
        m.map((g, f) => i.jsx(qt, {
          position: g,
          children: i.jsxs("mesh", {
            children: [
              i.jsx("sphereGeometry", {
                args: [
                  4,
                  12,
                  12
                ]
              }),
              i.jsx("meshBasicMaterial", {
                color: l ? "#00d4ff" : "#0891b2"
              })
            ]
          })
        }, f)),
        x.map((g, f) => i.jsx(qt, {
          position: g,
          children: i.jsxs("mesh", {
            children: [
              i.jsx("sphereGeometry", {
                args: [
                  5,
                  12,
                  12
                ]
              }),
              i.jsx("meshBasicMaterial", {
                color: "#f59e0b"
              })
            ]
          })
        }, `pending-${f}`)),
        d.map((g, f) => i.jsx(it, {
          position: g.position,
          center: true,
          children: i.jsx("div", {
            className: "pointer-events-none select-none whitespace-nowrap text-xs font-bold",
            style: {
              color: g.color
            },
            children: g.text
          })
        }, f))
      ]
    });
  }
  function Dr({ cursorWorldPos: e, cursorSketchPos: t, snapTarget: o, gridSnap: n, previewLine: r, previewRect: a, previewCircle: s, origin: l, xDir: u, yDir: m }) {
    const x = c.useMemo(() => e ? Je(e) : null, [
      e
    ]), d = 14, g = c.useMemo(() => {
      const h = Je(u);
      return [
        [
          -h.x * d,
          -h.y * d,
          -h.z * d
        ],
        [
          h.x * d,
          h.y * d,
          h.z * d
        ]
      ];
    }, [
      u
    ]), f = c.useMemo(() => {
      const h = Je(m);
      return [
        [
          -h.x * d,
          -h.y * d,
          -h.z * d
        ],
        [
          h.x * d,
          h.y * d,
          h.z * d
        ]
      ];
    }, [
      m
    ]), p = c.useMemo(() => {
      if (!r) return null;
      const h = _e(r.start, l, u, m), w = _e(r.end, l, u, m);
      return [
        [
          h.x,
          h.y,
          h.z
        ],
        [
          w.x,
          w.y,
          w.z
        ]
      ];
    }, [
      r,
      l,
      u,
      m
    ]), v = c.useMemo(() => {
      if (!a) return null;
      const { p1: h, p2: w } = a, S = Math.min(h.x, w.x), C = Math.max(h.x, w.x), j = Math.min(h.y, w.y), R = Math.max(h.y, w.y);
      return [
        {
          x: S,
          y: j
        },
        {
          x: C,
          y: j
        },
        {
          x: C,
          y: R
        },
        {
          x: S,
          y: R
        },
        {
          x: S,
          y: j
        }
      ].map((N) => {
        const W = _e(N, l, u, m);
        return [
          W.x,
          W.y,
          W.z
        ];
      });
    }, [
      a,
      l,
      u,
      m
    ]), P = c.useMemo(() => {
      if (!s || s.radius < 0.1) return null;
      const { center: h, radius: w } = s, S = 32, C = [];
      for (let j = 0; j <= S; j++) {
        const R = 2 * Math.PI * j / S, A = {
          x: h.x + w * Math.cos(R),
          y: h.y + w * Math.sin(R)
        }, N = _e(A, l, u, m);
        C.push([
          N.x,
          N.y,
          N.z
        ]);
      }
      return C;
    }, [
      s,
      l,
      u,
      m
    ]), b = c.useMemo(() => o ? _e(o, l, u, m) : null, [
      o,
      l,
      u,
      m
    ]);
    return !x || !t || !g || !f ? null : i.jsxs("group", {
      children: [
        i.jsxs(qt, {
          position: x,
          children: [
            i.jsx(Ae, {
              points: g,
              color: n && !o ? "#06b6d4" : "rgba(255,255,255,0.5)",
              lineWidth: n && !o ? 1.5 : 1,
              depthWrite: false
            }),
            i.jsx(Ae, {
              points: f,
              color: n && !o ? "#06b6d4" : "rgba(255,255,255,0.5)",
              lineWidth: n && !o ? 1.5 : 1,
              depthWrite: false
            })
          ]
        }),
        p && i.jsx(Ae, {
          points: p,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        v && i.jsx(Ae, {
          points: v,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        P && i.jsx(Ae, {
          points: P,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        b && i.jsxs(qt, {
          position: b,
          children: [
            i.jsxs("mesh", {
              children: [
                i.jsx("ringGeometry", {
                  args: [
                    8,
                    10,
                    24
                  ]
                }),
                i.jsx("meshBasicMaterial", {
                  color: "#22c55e",
                  side: Ue
                })
              ]
            }),
            i.jsxs("mesh", {
              children: [
                i.jsx("sphereGeometry", {
                  args: [
                    3,
                    12,
                    12
                  ]
                }),
                i.jsx("meshBasicMaterial", {
                  color: "#22c55e"
                })
              ]
            })
          ]
        }),
        i.jsx(it, {
          position: x,
          style: {
            pointerEvents: "none"
          },
          children: i.jsxs("div", {
            className: "ml-4 -mt-2 whitespace-nowrap rounded bg-black/70 px-1.5 py-0.5 text-xs text-white",
            children: [
              t.x.toFixed(1),
              ", ",
              t.y.toFixed(1)
            ]
          })
        })
      ]
    });
  }
  function Tr() {
    const { raycaster: e } = Pe(), t = ke((B) => B.active), o = ke((B) => B.plane), n = ke((B) => B.origin), r = ke((B) => B.segments), a = ke((B) => B.constraints), s = ke((B) => B.tool), l = ke((B) => B.constraintTool), u = ke((B) => B.points), m = ke((B) => B.selectedSegments), x = ke((B) => B.cursorWorldPos), d = ke((B) => B.cursorSketchPos), g = ke((B) => B.snapTarget), f = ke((B) => B.selectedFace), p = ke((B) => B.addPoint), v = ke((B) => B.finishShape), P = ke((B) => B.toggleSegmentSelection), b = ke((B) => B.setCursorPos), h = $((B) => B.gridSnap), w = $((B) => B.pointSnap), S = l !== "none", C = c.useMemo(() => ({
      ...ts(o),
      origin: n
    }), [
      o,
      n
    ]), j = c.useMemo(() => {
      const B = f == null ? void 0 : f.vertices;
      if (!B || B.length === 0) return null;
      const ie = B.map((be) => Hn(Je(be), C.origin, C.xDir, C.yDir));
      let Ce = 1 / 0, ee = -1 / 0, Ee = 1 / 0, de = -1 / 0;
      for (const be of ie) be.x < Ce && (Ce = be.x), be.x > ee && (ee = be.x), be.y < Ee && (Ee = be.y), be.y > de && (de = be.y);
      return {
        vertices: ie,
        bounds: {
          minU: Ce,
          maxU: ee,
          minV: Ee,
          maxV: de
        }
      };
    }, [
      f,
      C
    ]), R = c.useMemo(() => {
      if (!j || j.vertices.length === 0) return r;
      const B = j.vertices.map((ie) => ({
        type: "Line",
        start: ie,
        end: ie
      }));
      return [
        ...r,
        ...B
      ];
    }, [
      r,
      j
    ]), A = c.useCallback((B) => {
      const { snapped: ie, target: Ce } = ns(R, B, {
        gridEnabled: h,
        gridSize: et,
        pointEnabled: w,
        pointTolerance: zr
      });
      return {
        snapped: ie,
        target: Ce
      };
    }, [
      w,
      h,
      R
    ]), N = c.useRef(null), W = 5e4, D = c.useMemo(() => {
      const B = new Co(W, W), ie = Je(C.normal), Ce = new E(0, 0, 1), ee = new st().setFromUnitVectors(Ce, ie);
      return B.applyQuaternion(ee), B.translate(C.origin.x, C.origin.y, C.origin.z), B;
    }, [
      C
    ]), F = c.useCallback(() => {
      if (!N.current) return;
      const B = e.intersectObject(N.current);
      if (B.length === 0) {
        b(null, null, null);
        return;
      }
      const ie = N.current.worldToLocal(B[0].point.clone()), Ce = Hn(ie, C.origin, C.xDir, C.yDir), { snapped: ee, target: Ee } = A(Ce), de = _e(ee, C.origin, C.xDir, C.yDir);
      b({
        x: de.x,
        y: de.y,
        z: de.z
      }, ee, Ee);
    }, [
      C,
      e,
      A,
      b
    ]), _ = c.useCallback((B) => {
      if (B.button === 0 && !Jt() && (B.stopPropagation(), !!d)) if (S) {
        const ie = os(r, d, 2);
        ie !== null && P(ie);
      } else p(d);
    }, [
      d,
      S,
      r,
      p,
      P
    ]), X = c.useCallback((B) => {
      B.stopPropagation(), s === "line" && v();
    }, [
      s,
      v
    ]), se = c.useCallback(() => {
      b(null, null, null);
    }, [
      b
    ]), re = c.useMemo(() => s === "line" && u.length > 0 && d ? {
      start: u[u.length - 1],
      end: d
    } : null, [
      s,
      u,
      d
    ]), xe = c.useMemo(() => s === "rectangle" && u.length === 1 && d ? {
      p1: u[0],
      p2: d
    } : null, [
      s,
      u,
      d
    ]), ge = c.useMemo(() => {
      if (s === "circle" && u.length === 1 && d) {
        const B = u[0], ie = Math.sqrt((d.x - B.x) ** 2 + (d.y - B.y) ** 2);
        return {
          center: B,
          radius: ie
        };
      }
      return null;
    }, [
      s,
      u,
      d
    ]);
    return t ? i.jsxs("group", {
      children: [
        i.jsx("mesh", {
          ref: N,
          geometry: D,
          frustumCulled: false,
          onPointerMove: F,
          onClick: _,
          onDoubleClick: X,
          onPointerLeave: se,
          children: i.jsx("meshBasicMaterial", {
            visible: false,
            side: Ue
          })
        }),
        i.jsx(Ir, {
          origin: C.origin,
          xDir: C.xDir,
          yDir: C.yDir,
          bounds: (j == null ? void 0 : j.bounds) ?? null
        }),
        i.jsx(Ar, {
          segments: r,
          selectedSegments: m,
          constraints: a,
          pendingPoints: u,
          origin: C.origin,
          xDir: C.xDir,
          yDir: C.yDir
        }),
        i.jsx(Dr, {
          cursorWorldPos: x,
          cursorSketchPos: d,
          snapTarget: g,
          gridSnap: h,
          previewLine: re,
          previewRect: xe,
          previewCircle: ge,
          origin: C.origin,
          xDir: C.xDir,
          yDir: C.yDir
        })
      ]
    }) : null;
  }
  const wn = 5, Yn = 0.15, _r = 0.35, Fr = {
    XY: "#61afef",
    XZ: "#98c379",
    YZ: "#e06c75"
  };
  function on({ plane: e, rotation: t, position: o }) {
    const [n, r] = c.useState(false), a = c.useRef(null), s = ke((x) => x.enterSketchMode), l = ke((x) => x.active), { invalidate: u } = Pe(), m = (x) => {
      var _a2;
      if (x.stopPropagation(), l) return;
      let d = false;
      ((_a2 = x.face) == null ? void 0 : _a2.normal) && a.current && (d = x.face.normal.clone().transformDirection(a.current.matrixWorld).dot(x.ray.direction) > 0), s(e, void 0, d);
    };
    return Qe(() => {
      if (!a.current) return;
      const x = a.current.material, d = n ? _r : Yn, g = d - x.opacity;
      if (Math.abs(g) < 0.01) {
        x.opacity = d;
        return;
      }
      x.opacity += g * 0.2, u();
    }), i.jsxs("mesh", {
      ref: a,
      position: o,
      rotation: t,
      onPointerEnter: (x) => {
        x.stopPropagation(), l || (r(true), document.body.style.cursor = "pointer");
      },
      onPointerLeave: () => {
        r(false), document.body.style.cursor = "auto";
      },
      onClick: m,
      children: [
        i.jsx("planeGeometry", {
          args: [
            wn,
            wn
          ]
        }),
        i.jsx("meshBasicMaterial", {
          color: Fr[e],
          transparent: true,
          opacity: Yn,
          side: Ue,
          depthWrite: false,
          depthTest: false
        })
      ]
    });
  }
  function Lr() {
    if (ke((o) => o.active)) return null;
    const t = wn / 2;
    return i.jsxs("group", {
      children: [
        i.jsx(on, {
          plane: "XY",
          rotation: [
            0,
            0,
            0
          ],
          position: [
            t,
            t,
            0
          ]
        }),
        i.jsx(on, {
          plane: "XZ",
          rotation: [
            -Math.PI / 2,
            0,
            0
          ],
          position: [
            t,
            0,
            t
          ]
        }),
        i.jsx(on, {
          plane: "YZ",
          rotation: [
            0,
            Math.PI / 2,
            0
          ],
          position: [
            0,
            t,
            t
          ]
        })
      ]
    });
  }
  const Nr = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, sn = Math.PI / 180, rn = 180 / Math.PI, Or = new st().setFromAxisAngle(new E(1, 0, 0), -Math.PI / 2), Br = new st().setFromAxisAngle(new E(1, 0, 0), Math.PI / 2);
  function Xn(e) {
    return [
      e.x,
      e.z,
      -e.y
    ];
  }
  function Un(e) {
    return {
      x: e.x,
      y: -e.z,
      z: e.y
    };
  }
  function qn(e, t) {
    const o = bn.setFromEuler(Et.set(e.x * sn, e.y * sn, e.z * sn, "ZYX"));
    return t.copy(Or).multiply(o);
  }
  function Kn(e) {
    return bn.copy(Br).multiply(e), Et.setFromQuaternion(bn, "ZYX"), {
      x: Et.x * rn,
      y: Et.y * rn,
      z: Et.z * rn
    };
  }
  const bn = new st(), Et = new Zt();
  function Vr({ orbitControls: e }) {
    var _a2;
    const t = $((w) => w.selectedPartIds), o = $((w) => w.transformMode), n = $((w) => w.setDraggingGizmo), r = $((w) => w.setGizmoHovered), a = $((w) => w.gridSnap), s = $((w) => w.snapIncrement), l = oe((w) => w.parts), u = oe((w) => w.document), [m, x] = c.useState(null), d = c.useCallback((w) => {
      x(w);
    }, []), g = c.useRef(null), f = c.useRef(false), p = t.size === 1 ? Array.from(t)[0] : null, v = p ? l.find((w) => w.id === p) : null, P = p ? (_a2 = u.instances) == null ? void 0 : _a2.find((w) => w.id === p) : null, b = v !== null || P !== null;
    if (c.useEffect(() => {
      if (!(!m || !b) && !f.current) {
        if (v) {
          const w = u.nodes[String(v.translateNodeId)], S = u.nodes[String(v.rotateNodeId)], C = u.nodes[String(v.scaleNodeId)];
          (w == null ? void 0 : w.op.type) === "Translate" && m.position.set(...Xn(w.op.offset));
          const j = (S == null ? void 0 : S.op.type) === "Rotate" ? S.op.angles : {
            x: 0,
            y: 0,
            z: 0
          };
          if (qn(j, m.quaternion), (C == null ? void 0 : C.op.type) === "Scale") {
            const { factor: R } = C.op;
            m.scale.set(R.x, R.y, R.z);
          }
        } else if (P) {
          const S = P.transform ?? {
            translation: {
              x: 0,
              y: 0,
              z: 0
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            scale: {
              x: 1,
              y: 1,
              z: 1
            }
          };
          m.position.set(...Xn(S.translation)), qn(S.rotation, m.quaternion), m.scale.set(S.scale.x, S.scale.y, S.scale.z);
        }
      }
    }, [
      m,
      v,
      P,
      b,
      u
    ]), c.useEffect(() => {
      const w = g.current;
      if (!w) return;
      const S = (j) => {
        const R = j.value;
        f.current = R, n(R), e.current && (e.current.enabled = !R), R && oe.getState().pushUndoSnapshot();
      }, C = (j) => {
        const R = j.value != null;
        r(R), R && $.getState().setHoveredItem(null);
      };
      return w.addEventListener("dragging-changed", S), w.addEventListener("axis-changed", C), () => {
        w.removeEventListener("dragging-changed", S), w.removeEventListener("axis-changed", C), r(false);
      };
    }, [
      m,
      e,
      n,
      r
    ]), c.useEffect(() => {
      const w = g.current;
      if (!w) return;
      const S = () => {
        if (!m || !p) return;
        const C = oe.getState();
        v ? o === "translate" ? C.setTranslation(p, Un(m.position), true) : o === "rotate" ? C.setRotation(p, Kn(m.quaternion), true) : o === "scale" && C.setScale(p, {
          x: m.scale.x,
          y: m.scale.y,
          z: m.scale.z
        }, true) : P && C.setInstanceTransform(p, {
          translation: Un(m.position),
          rotation: Kn(m.quaternion),
          scale: {
            x: m.scale.x,
            y: m.scale.y,
            z: m.scale.z
          }
        }, true);
      };
      return w.addEventListener("objectChange", S), () => {
        w.removeEventListener("objectChange", S);
      };
    }, [
      m,
      p,
      v,
      P,
      o
    ]), !b) return null;
    const h = a ? {
      translationSnap: s,
      rotationSnap: Math.PI / 180 * 15,
      scaleSnap: 0.1
    } : {};
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx("object3D", {
          ref: d
        }),
        m && i.jsx($o, {
          ref: g,
          object: m,
          mode: o,
          space: "local",
          size: Nr ? 1.8 : 0.8,
          ...h
        })
      ]
    });
  }
  const $r = 0.4, Wr = 0.85, Gr = new We(54527), Hr = new We(16328306), _o = "#00d4ff", Fo = "#f92672", Yr = "#6b8fa3", Xr = "#4a7080";
  function Lo({ box: e, color: t, opacity: o }) {
    const n = e.min, r = e.max, a = [
      [
        new E(n.x, n.y, n.z),
        new E(r.x, n.y, n.z)
      ],
      [
        new E(r.x, n.y, n.z),
        new E(r.x, n.y, r.z)
      ],
      [
        new E(r.x, n.y, r.z),
        new E(n.x, n.y, r.z)
      ],
      [
        new E(n.x, n.y, r.z),
        new E(n.x, n.y, n.z)
      ],
      [
        new E(n.x, r.y, n.z),
        new E(r.x, r.y, n.z)
      ],
      [
        new E(r.x, r.y, n.z),
        new E(r.x, r.y, r.z)
      ],
      [
        new E(r.x, r.y, r.z),
        new E(n.x, r.y, r.z)
      ],
      [
        new E(n.x, r.y, r.z),
        new E(n.x, r.y, n.z)
      ],
      [
        new E(n.x, n.y, n.z),
        new E(n.x, r.y, n.z)
      ],
      [
        new E(r.x, n.y, n.z),
        new E(r.x, r.y, n.z)
      ],
      [
        new E(r.x, n.y, r.z),
        new E(r.x, r.y, r.z)
      ],
      [
        new E(n.x, n.y, r.z),
        new E(n.x, r.y, r.z)
      ]
    ];
    return i.jsx(i.Fragment, {
      children: a.map((s, l) => i.jsx(Ae, {
        points: s,
        color: t,
        lineWidth: 1,
        dashed: true,
        dashSize: 1,
        gapSize: 0.8,
        transparent: true,
        opacity: o
      }, l))
    });
  }
  function No(e) {
    const t = oe((n) => n.parts), o = De((n) => n.scene);
    return c.useMemo(() => {
      if (e.size === 0 || !o) return null;
      const n = new rt();
      let r = false;
      return e.forEach((a) => {
        const s = t.findIndex((d) => d.id === a);
        if (s === -1) return;
        const l = o.parts[s];
        if (!l) return;
        const u = l.mesh;
        if (!u.positions.length) return;
        const m = new rt(), x = new E();
        for (let d = 0; d < u.positions.length; d += 3) x.set(u.positions[d], u.positions[d + 1], u.positions[d + 2]), m.expandByPoint(x);
        n.union(m), r = true;
      }), r ? n : null;
    }, [
      e,
      t,
      o
    ]);
  }
  function Ur() {
    const e = $((r) => r.selectedPartIds), t = No(e), { isDark: o } = at();
    if (!t) return null;
    const n = o ? Yr : Xr;
    return i.jsx(Lo, {
      box: t,
      color: n,
      opacity: 0.5
    });
  }
  function qr() {
    const e = zt((n) => n.participants);
    if ($((n) => n.followMode) === "free") return null;
    const o = [];
    return e.forEach((n) => {
      n.id !== Pn && n.selectedPartIds.size !== 0 && o.push(i.jsx(Kr, {
        ids: n.selectedPartIds,
        color: n.color
      }, n.id));
    }), i.jsx(i.Fragment, {
      children: o
    });
  }
  function Kr({ ids: e, color: t }) {
    const o = No(e);
    return o ? i.jsx(Lo, {
      box: o,
      color: t,
      opacity: 0.7
    }) : null;
  }
  function Zr() {
    const e = De((o) => o.scene), t = c.useMemo(() => {
      let o = 100;
      if (e == null ? void 0 : e.parts) for (const n of e.parts) {
        const r = n.mesh.positions;
        for (let a = 0; a < r.length; a += 3) o = Math.max(o, Math.abs(r[a]), Math.abs(r[a + 1]), Math.abs(r[a + 2]));
      }
      return o * 0.25;
    }, [
      e
    ]);
    return i.jsxs("group", {
      children: [
        i.jsx(Ae, {
          points: [
            [
              0,
              0,
              0
            ],
            [
              t,
              0,
              0
            ]
          ],
          color: "#ff3b30",
          lineWidth: 3
        }),
        i.jsx(Ae, {
          points: [
            [
              0,
              0,
              0
            ],
            [
              0,
              t,
              0
            ]
          ],
          color: "#34c759",
          lineWidth: 3
        }),
        i.jsx(Ae, {
          points: [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              t
            ]
          ],
          color: "#0a84ff",
          lineWidth: 3
        })
      ]
    });
  }
  function kn(e) {
    const t = De((n) => n.scene), o = oe((n) => n.parts);
    return c.useMemo(() => {
      var _a2;
      if (!t) return null;
      const n = o.findIndex((r) => r.id === e);
      return n < 0 ? null : ((_a2 = t.parts[n]) == null ? void 0 : _a2.mesh) ?? null;
    }, [
      t,
      o,
      e
    ]);
  }
  function Jr({ item: e, variant: t }) {
    const o = kn(e.partId), n = c.useMemo(() => {
      if (!o) return null;
      const s = Ro(o, e.faceIndex);
      return s.length === 0 ? null : Ls(o, s);
    }, [
      o,
      e.faceIndex
    ]);
    if (c.useEffect(() => () => {
      n == null ? void 0 : n.dispose();
    }, [
      n
    ]), !n) return null;
    const r = t === "selected" ? Hr : Gr, a = t === "selected" ? Wr : $r;
    return i.jsx("mesh", {
      geometry: n,
      renderOrder: 998,
      children: i.jsx("meshBasicMaterial", {
        color: r,
        transparent: true,
        opacity: a,
        depthWrite: false,
        depthTest: false,
        side: Ue
      })
    });
  }
  function Qr({ item: e, variant: t }) {
    const o = kn(e.partId), n = c.useMemo(() => {
      if (!o) return null;
      const { a, b: s } = ko(o, e.edgeId);
      return [
        [
          a.x,
          a.y,
          a.z
        ],
        [
          s.x,
          s.y,
          s.z
        ]
      ];
    }, [
      o,
      e.edgeId
    ]);
    if (!n) return null;
    const r = t === "selected" ? Fo : _o;
    return i.jsx(Ae, {
      points: n,
      color: r,
      lineWidth: t === "selected" ? 3 : 2,
      transparent: true,
      opacity: t === "selected" ? 1 : 0.7,
      depthWrite: false,
      depthTest: false,
      renderOrder: 998
    });
  }
  function ei({ item: e, variant: t }) {
    const o = kn(e.partId), n = c.useMemo(() => o ? zo(o, e.vertexId) : null, [
      o,
      e.vertexId
    ]), r = c.useRef(null), { camera: a, size: s } = Pe();
    if (Qe(() => {
      if (!r.current || !n) return;
      const u = a, m = new E(n.x, n.z, -n.y), x = u.position.distanceTo(m), d = (u.fov ?? 50) * Math.PI / 180, g = 2 * x * Math.tan(d / 2) / s.height, f = t === "selected" ? 6 : 5;
      r.current.scale.setScalar(Math.max(1e-4, f * g));
    }), !n) return null;
    const l = t === "selected" ? Fo : _o;
    return i.jsxs("mesh", {
      ref: r,
      position: n,
      renderOrder: 999,
      children: [
        i.jsx("sphereGeometry", {
          args: [
            1,
            12,
            12
          ]
        }),
        i.jsx("meshBasicMaterial", {
          color: l,
          transparent: true,
          opacity: t === "selected" ? 1 : 0.85,
          depthWrite: false,
          depthTest: false
        })
      ]
    });
  }
  function Zn({ item: e, variant: t }) {
    return e.kind === "face" ? i.jsx(Jr, {
      item: e,
      variant: t
    }) : e.kind === "edge" ? i.jsx(Qr, {
      item: e,
      variant: t
    }) : e.kind === "vertex" ? i.jsx(ei, {
      item: e,
      variant: t
    }) : null;
  }
  function ti() {
    const e = $((n) => n.selection), t = $((n) => n.hoveredItem), o = c.useMemo(() => !t || t.kind === "part" || e.some((n) => ss(n, t)) ? null : t, [
      t,
      e
    ]);
    return i.jsxs(i.Fragment, {
      children: [
        e.map((n, r) => i.jsx(Zn, {
          item: n,
          variant: "selected"
        }, `sel-${r}`)),
        o && i.jsx(Zn, {
          item: o,
          variant: "hover"
        })
      ]
    });
  }
  function ni() {
    const e = $((n) => n.isDraggingGizmo), t = $((n) => n.isOrbiting);
    return $((n) => n.captureMode) ? i.jsx(Zr, {}) : t || e ? null : i.jsxs(i.Fragment, {
      children: [
        i.jsx(Ur, {}),
        i.jsx(qr, {}),
        i.jsx(ti, {})
      ]
    });
  }
  const an = "#94a3b8";
  function oi(e, t, o) {
    const n = structuredClone(e);
    return n.type === "Cube" ? t === "size.x" ? n.size.x = o : t === "size.y" ? n.size.y = o : t === "size.z" && (n.size.z = o) : n.type === "Cylinder" ? t === "radius" ? n.radius = o : t === "height" && (n.height = o) : n.type === "Sphere" && t === "radius" && (n.radius = o), n;
  }
  function si({ value: e, paramKey: t, partId: o, primitiveNodeId: n }) {
    const [r, a] = c.useState(false), [s, l] = c.useState(e.toFixed(1)), u = c.useRef(null), m = oe((b) => b.document), x = oe((b) => b.updatePrimitiveOp);
    c.useEffect(() => {
      r || l(e.toFixed(1));
    }, [
      e,
      r
    ]), c.useEffect(() => {
      r && u.current && (u.current.focus(), u.current.select());
    }, [
      r
    ]);
    const d = () => {
      const b = parseFloat(s);
      if (!isNaN(b) && b > 0) {
        const h = m.nodes[String(n)];
        if (h) {
          const w = oi(h.op, t, b);
          x(o, w);
        }
      } else l(e.toFixed(1));
      a(false);
    }, g = () => {
      l(e.toFixed(1)), a(false);
    }, f = (b) => {
      b.stopPropagation(), b.key === "Enter" ? d() : b.key === "Escape" && g();
    }, v = t === "radius" ? "r=" : "", P = " mm";
    return r ? i.jsxs("div", {
      className: "bg-surface border border-brand px-1 py-0.5 text-[10px] text-text whitespace-nowrap flex items-center rounded",
      onClick: (b) => b.stopPropagation(),
      onPointerDown: (b) => b.stopPropagation(),
      children: [
        v,
        i.jsx("input", {
          ref: u,
          type: "text",
          value: s,
          onChange: (b) => l(b.target.value),
          onBlur: d,
          onKeyDown: f,
          className: "w-12 bg-transparent outline-none text-[10px] text-text",
          onClick: (b) => b.stopPropagation(),
          onPointerDown: (b) => b.stopPropagation()
        }),
        P
      ]
    }) : i.jsxs("div", {
      className: "bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap cursor-pointer hover:border-brand hover:text-text transition-colors rounded",
      onClick: (b) => {
        b.stopPropagation(), a(true);
      },
      onPointerDown: (b) => b.stopPropagation(),
      children: [
        v,
        e.toFixed(1),
        P
      ]
    });
  }
  function ri({ start: e, end: t, label: o, offset: n = new E(), editable: r, value: a, paramKey: s, partId: l, primitiveNodeId: u }) {
    const m = new E().lerpVectors(e, t, 0.5).add(n), x = 1, d = new E().subVectors(t, e).normalize(), g = new E(0, 1, 0), f = new E().crossVectors(d, g).normalize();
    f.length() < 0.1 && f.set(1, 0, 0);
    const p = e.clone().add(f.clone().multiplyScalar(x)), v = e.clone().add(f.clone().multiplyScalar(-x)), P = t.clone().add(f.clone().multiplyScalar(x)), b = t.clone().add(f.clone().multiplyScalar(-x)), h = r && a !== void 0 && s && l && u !== void 0;
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx(Ae, {
          points: [
            e,
            t
          ],
          color: an,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        i.jsx(Ae, {
          points: [
            p,
            v
          ],
          color: an,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        i.jsx(Ae, {
          points: [
            P,
            b
          ],
          color: an,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        i.jsx(it, {
          position: m,
          center: true,
          style: {
            pointerEvents: h ? "auto" : "none",
            zIndex: 10
          },
          children: h ? i.jsx(si, {
            value: a,
            paramKey: s,
            partId: l,
            primitiveNodeId: u
          }) : i.jsx("div", {
            className: "bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap rounded",
            children: o
          })
        })
      ]
    });
  }
  function ii() {
    const e = $((d) => d.selectedPartIds), t = $((d) => d.isDraggingGizmo), o = oe((d) => d.parts), n = oe((d) => d.document), r = De((d) => d.scene), a = In((d) => d.parameters), s = In((d) => d.bindings), l = c.useMemo(() => {
      if (e.size !== 1) return null;
      const d = Array.from(e)[0], g = o.find((S) => S.id === d);
      if (!g || !rs(g)) return null;
      const f = o.findIndex((S) => S.id === d);
      if (!(r == null ? void 0 : r.parts[f])) return null;
      const v = n.nodes[String(g.primitiveNodeId)];
      if (!v) return null;
      const P = n.nodes[String(g.translateNodeId)], b = (P == null ? void 0 : P.op.type) === "Translate" ? P.op.offset : {
        x: 0,
        y: 0,
        z: 0
      }, h = new E(b.x, b.y, b.z);
      let w = null;
      if (v.op.type === "Cube") {
        const S = v.op.size, C = en(g.primitiveNodeId, {
          "size.x": S.x,
          "size.y": S.y,
          "size.z": S.z
        }, a, s), j = {
          x: C["size.x"],
          y: C["size.y"],
          z: C["size.z"]
        }, R = j.x / 2, A = j.y / 2, N = j.z / 2;
        w = [
          {
            start: new E(h.x - R, h.y - A - 3, h.z + N),
            end: new E(h.x + R, h.y - A - 3, h.z + N),
            label: `${j.x.toFixed(1)} mm`,
            value: j.x,
            paramKey: "size.x"
          },
          {
            start: new E(h.x + R + 3, h.y - A, h.z + N),
            end: new E(h.x + R + 3, h.y + A, h.z + N),
            label: `${j.y.toFixed(1)} mm`,
            value: j.y,
            paramKey: "size.y"
          },
          {
            start: new E(h.x + R + 3, h.y - A - 3, h.z - N),
            end: new E(h.x + R + 3, h.y - A - 3, h.z + N),
            label: `${j.z.toFixed(1)} mm`,
            value: j.z,
            paramKey: "size.z"
          }
        ];
      }
      if (v.op.type === "Cylinder") {
        const { radius: S, height: C } = en(g.primitiveNodeId, {
          radius: v.op.radius,
          height: v.op.height
        }, a, s), j = C / 2;
        w = [
          {
            start: new E(h.x, h.y - j - 3, h.z),
            end: new E(h.x + S, h.y - j - 3, h.z),
            label: `r=${S.toFixed(1)} mm`,
            value: S,
            paramKey: "radius"
          },
          {
            start: new E(h.x + S + 3, h.y - j, h.z),
            end: new E(h.x + S + 3, h.y + j, h.z),
            label: `${C.toFixed(1)} mm`,
            value: C,
            paramKey: "height"
          }
        ];
      }
      if (v.op.type === "Sphere") {
        const { radius: S } = en(g.primitiveNodeId, {
          radius: v.op.radius
        }, a, s);
        w = [
          {
            start: new E(h.x, h.y, h.z),
            end: new E(h.x + S, h.y, h.z),
            label: `r=${S.toFixed(1)} mm`,
            value: S,
            paramKey: "radius"
          }
        ];
      }
      return w ? {
        dimensions: w,
        partId: d,
        primitiveNodeId: g.primitiveNodeId
      } : null;
    }, [
      e,
      o,
      n,
      r,
      a,
      s
    ]);
    if (!l || t) return null;
    const { dimensions: u, partId: m, primitiveNodeId: x } = l;
    return i.jsx(i.Fragment, {
      children: u.map((d, g) => i.jsx(ri, {
        start: d.start,
        end: d.end,
        label: d.label,
        editable: true,
        value: d.value,
        paramKey: d.paramKey,
        partId: m,
        primitiveNodeId: x
      }, g))
    });
  }
  const ai = {
    error: "bg-red-500/90 text-white ring-red-300",
    warning: "bg-amber-500/90 text-white ring-amber-200",
    info: "bg-sky-500/90 text-white ring-sky-200"
  }, ci = {
    error: "!",
    warning: "!",
    info: "i"
  };
  function li() {
    const e = gt((l) => l.enabled), t = gt((l) => l.report), o = gt((l) => l.visibleSeverities), n = gt((l) => l.selectedIssueId), r = gt((l) => l.selectIssue), a = le((l) => l.active), s = c.useMemo(() => {
      if (!t) return [];
      const l = t.issues.filter((u) => o.has(u.severity));
      return mi(l);
    }, [
      t,
      o
    ]);
    return !e || s.length === 0 || a ? null : i.jsx("group", {
      children: s.map((l, u) => {
        const m = l[0];
        if (!m) return null;
        const x = [
          m.anchor[0],
          m.anchor[1],
          m.anchor[2]
        ], d = l.some((g) => g.id === n);
        return i.jsx(it, {
          position: x,
          center: true,
          zIndexRange: d ? [
            1e3,
            900
          ] : [
            100,
            0
          ],
          style: {
            pointerEvents: "none"
          },
          children: i.jsx(ui, {
            issues: l,
            selected: d,
            onSelect: (g) => r(g === n ? null : g)
          })
        }, `dfm-${u}`);
      })
    });
  }
  function ui({ issues: e, selected: t, onSelect: o }) {
    const n = pi(e), r = e.find((u) => u.severity === n) ?? e[0];
    if (!r) return null;
    const a = ai[n], s = ci[n], l = e.length;
    return i.jsxs("div", {
      className: "flex items-start gap-2",
      children: [
        i.jsxs("button", {
          type: "button",
          onClick: (u) => {
            u.stopPropagation(), o(r.id);
          },
          className: Cn("pointer-events-auto relative flex h-6 w-6 items-center justify-center rounded-full font-bold text-xs ring-2 shadow-md transition-transform", a, t ? "scale-125" : "hover:scale-110"),
          title: r.message,
          children: [
            s,
            l > 1 && i.jsx("span", {
              className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-surface px-1 text-[10px] font-semibold text-text ring-1 ring-border",
              children: l
            })
          ]
        }),
        t && i.jsx(di, {
          issue: r,
          extras: l - 1
        })
      ]
    });
  }
  function di({ issue: e, extras: t }) {
    return i.jsxs("div", {
      className: "w-72 rounded-md border border-border bg-surface/95 backdrop-blur-sm p-3 shadow-lg text-text text-xs space-y-2",
      children: [
        i.jsxs("div", {
          className: "flex items-center justify-between gap-2",
          children: [
            i.jsx("p", {
              className: "font-medium leading-snug",
              children: e.message
            }),
            i.jsx("span", {
              className: Cn("shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold capitalize", e.severity === "error" ? "bg-red-500/20 text-red-300" : e.severity === "warning" ? "bg-amber-500/20 text-amber-300" : "bg-sky-500/20 text-sky-300"),
              children: e.severity
            })
          ]
        }),
        e.explanation && i.jsx("p", {
          className: "leading-relaxed text-text-muted",
          children: e.explanation
        }),
        i.jsxs("div", {
          className: "flex gap-2 text-[11px] text-text-muted",
          children: [
            i.jsxs("span", {
              children: [
                "measured ",
                i.jsx("strong", {
                  className: "text-text",
                  children: Jn(e.measured)
                }),
                " ",
                e.units
              ]
            }),
            i.jsxs("span", {
              children: [
                "limit ",
                i.jsx("strong", {
                  className: "text-text",
                  children: Jn(e.limit)
                }),
                " ",
                e.units
              ]
            })
          ]
        }),
        e.suggested_fix && i.jsxs("div", {
          className: "mt-1 rounded bg-surface-2 px-2 py-1 text-[11px]",
          children: [
            i.jsx("div", {
              className: "font-semibold opacity-80",
              children: "Suggested fix"
            }),
            i.jsx("div", {
              className: "opacity-90",
              children: fi(e.suggested_fix)
            })
          ]
        }),
        t > 0 && i.jsxs("div", {
          className: "text-[10px] text-text-muted italic",
          children: [
            "+",
            t,
            " more issue",
            t > 1 ? "s" : "",
            " at this location"
          ]
        })
      ]
    });
  }
  function Jn(e) {
    return Math.abs(e) >= 100 ? e.toFixed(0) : Math.abs(e) >= 10 ? e.toFixed(1) : e.toFixed(2);
  }
  function fi(e) {
    if (!e) return "";
    switch (e.type) {
      case "set_param":
        return `Set ${e.path} = ${JSON.stringify(e.value)} on node ${e.node}`;
      case "wrap_op":
        return `Wrap node ${e.node} with a new op`;
      case "replace_op":
        return `Replace node ${e.node}`;
      case "manual":
        return e.description;
    }
  }
  function pi(e) {
    return e.some((t) => t.severity === "error") ? "error" : e.some((t) => t.severity === "warning") ? "warning" : "info";
  }
  function mi(e) {
    const t = /* @__PURE__ */ new Map();
    for (const o of e) {
      const n = `${cn(o.anchor[0])}|${cn(o.anchor[1])}|${cn(o.anchor[2])}`, r = t.get(n);
      r ? r.push(o) : t.set(n, [
        o
      ]);
    }
    return Array.from(t.values());
  }
  function cn(e) {
    return Math.round(e * 2);
  }
  let Pt = null, Kt = null, Sn = null, Xt = null, Mn = null;
  function hi() {
    return Xt;
  }
  function Qn() {
    Mn == null ? void 0 : Mn();
  }
  function eo(e) {
    Pt = e;
  }
  function xi() {
    const e = De((d) => d.scene), t = De((d) => d.engine), o = oe((d) => d.document), { camera: n, size: r, controls: a, invalidate: s } = Pe(), l = Mo(), u = c.useRef(false), m = c.useRef({
      x: 0,
      y: 0,
      z: 0,
      tx: 0,
      ty: 0,
      tz: 0
    }), x = c.useRef(false);
    return c.useEffect(() => {
      var _a2, _b, _c2, _d;
      if (!l || !t || !o) {
        u.current = false;
        return;
      }
      let d;
      try {
        d = t.evaluateWithSolids(o);
      } catch (w) {
        Ke.warn("gpu", `Ray-trace eval failed: ${w}`), u.current = false;
        return;
      }
      const g = (((_a2 = d.parts) == null ? void 0 : _a2.length) ?? 0) > 0, f = (((_b = d.instances) == null ? void 0 : _b.length) ?? 0) > 0;
      if (!g && !f) {
        u.current = false;
        return;
      }
      const p = l;
      (_c2 = p.clearScene) == null ? void 0 : _c2.call(p);
      const v = (w) => {
        if (!w) return null;
        const C = o.materials[w] ?? kt(w);
        return C ? {
          color: C.color,
          metallic: C.metallic,
          roughness: C.roughness
        } : null;
      }, P = (w, S) => {
        const C = v(S);
        C && typeof p.uploadSolidWithMaterial == "function" ? p.uploadSolidWithMaterial(w, C.color[0], C.color[1], C.color[2], C.metallic, C.roughness) : p.uploadSolid(w);
      };
      let b = false, h;
      for (const w of d.parts ?? []) {
        const S = w.solid;
        if (S) {
          try {
            P(S, w.material);
          } catch (C) {
            Ke.debug("gpu", `uploadSolid failed: ${C}`);
          }
          h === void 0 && (h = w.material), b = true;
        }
      }
      if (f && ((_d = d.partDefs) == null ? void 0 : _d.length)) {
        const w = /* @__PURE__ */ new Map();
        for (const C of d.partDefs) {
          const j = C.solid;
          j && w.set(C.id, j);
        }
        const S = jn(o);
        for (const C of d.instances ?? []) {
          const j = w.get(C.partDefId);
          if (!j) continue;
          const R = C.id ?? C.instanceId, A = (R ? S.get(R) : void 0) ?? C.transform, N = A ? j.scale(A.scale.x, A.scale.y, A.scale.z).rotate(A.rotation.x, A.rotation.y, A.rotation.z).translate(A.translation.x, A.translation.y, A.translation.z) : j;
          try {
            P(N, C.material);
          } catch (W) {
            Ke.debug("gpu", `uploadSolid (instance) failed: ${W}`);
          }
          h === void 0 && (h = C.material), b = true;
        }
      }
      if (b && h && typeof p.uploadSolidWithMaterial != "function") {
        const w = o.materials[h], S = w ? null : kt(h), C = w ?? S;
        if (C) try {
          let j = false;
          if (typeof p.setMaterialFromDef == "function") try {
            p.setMaterialFromDef(JSON.stringify(C), null), j = true;
          } catch (R) {
            Ke.debug("gpu", `setMaterialFromDef rejected the definition, falling back: ${R}`);
          }
          j || p.setMaterial(C.color[0], C.color[1], C.color[2], C.metallic, C.roughness);
        } catch (j) {
          Ke.debug("gpu", `Failed to set material: ${j}`);
        }
      }
      if (u.current = b, b) {
        x.current = true;
        const w = n, C = (a == null ? void 0 : a.target) ?? {
          x: 0,
          y: 0,
          z: 0
        }, j = {
          position: [
            w.position.x,
            w.position.y,
            w.position.z
          ],
          target: [
            C.x,
            C.y,
            C.z
          ],
          fov: w.fov,
          width: r.width,
          height: r.height
        };
        Kt = j, m.current = {
          x: w.position.x,
          y: w.position.y,
          z: w.position.z,
          tx: C.x,
          ty: C.y,
          tz: C.z
        }, Pt && (x.current = false, Pt(j)), s();
      }
    }, [
      e,
      l,
      t,
      o,
      n,
      a,
      r,
      s
    ]), c.useEffect(() => (Sn = s, () => {
      Sn = null;
    }), [
      s
    ]), Qe(() => {
      if (!l || !u.current) return;
      const d = n, f = (a == null ? void 0 : a.target) ?? {
        x: 0,
        y: 0,
        z: 0
      }, p = m.current, v = 1e-3;
      if (!(Math.abs(d.position.x - p.x) > v || Math.abs(d.position.y - p.y) > v || Math.abs(d.position.z - p.z) > v || Math.abs(f.x - p.tx) > v || Math.abs(f.y - p.ty) > v || Math.abs(f.z - p.tz) > v) && !x.current) return;
      m.current = {
        x: d.position.x,
        y: d.position.y,
        z: d.position.z,
        tx: f.x,
        ty: f.y,
        tz: f.z
      };
      const b = {
        position: [
          d.position.x,
          d.position.y,
          d.position.z
        ],
        target: [
          f.x,
          f.y,
          f.z
        ],
        fov: d.fov,
        width: r.width,
        height: r.height
      };
      Kt = b, Pt && (x.current = false, Pt(b));
    }), null;
  }
  const gi = {
    off: 0,
    normals: 1,
    "face-id": 2,
    lighting: 3,
    orientation: 4
  }, yi = {
    draft: {
      scale: 0.5,
      maxPixels: 640 * 480
    },
    standard: {
      scale: 1,
      maxPixels: 1280 * 720
    },
    high: {
      scale: 2,
      maxPixels: 1920 * 1080
    }
  }, vi = 6;
  function wi() {
    const e = c.useRef(null), t = $((D) => D.raytraceQuality), o = $((D) => D.raytraceDebugMode), n = $((D) => D.raytraceEdgesEnabled), r = $((D) => D.raytraceEdgeDepthThreshold), a = $((D) => D.raytraceEdgeNormalThreshold), s = $((D) => D.raytraceEdgeSilhouetteEnabled), l = $((D) => D.raytraceEdgeCreaseEnabled), u = $((D) => D.raytraceEdgeBoundaryEnabled), m = $((D) => D.raytraceEdgeSilhouetteWidth), x = $((D) => D.raytraceEdgeCreaseWidth), d = $((D) => D.raytraceEdgeBoundaryWidth), g = $((D) => D.raytraceEdgeSoftness), f = Mo(), { isDark: p } = at(), v = c.useRef("off"), P = c.useRef({
      enabled: true,
      depth: 0.1,
      normal: 30,
      silhouette: true,
      crease: true,
      boundary: true,
      silhouetteWidth: 1,
      creaseWidth: 0.75,
      boundaryWidth: 1.25,
      softness: 1.5
    }), b = c.useRef({
      stylize: true
    }), h = c.useRef(false), w = c.useRef(null), S = c.useRef(null), C = c.useRef(t);
    c.useEffect(() => {
      C.current = t;
    }, [
      t
    ]);
    const j = c.useCallback((D, F, _, X, se, re) => {
      const xe = new ImageData(new Uint8ClampedArray(F), _, X);
      if (_ !== se || X !== re) {
        D.imageSmoothingEnabled = true, D.imageSmoothingQuality = "high";
        const ge = document.createElement("canvas");
        ge.width = _, ge.height = X;
        const B = ge.getContext("2d");
        B && (B.putImageData(xe, 0, 0), D.drawImage(ge, 0, 0, se, re));
      } else D.putImageData(xe, 0, 0);
    }, []), R = c.useCallback((D, F) => {
      if (!f || !e.current || h.current) return;
      const _ = e.current;
      if (!_.getContext("2d")) return;
      (_.width !== D.width || _.height !== D.height) && (_.width = D.width, _.height = D.height);
      const se = yi[F];
      let re = Math.floor(D.width * se.scale), xe = Math.floor(D.height * se.scale);
      const ge = re * xe;
      if (ge > se.maxPixels) {
        const me = Math.sqrt(se.maxPixels / ge);
        re = Math.floor(re * me), xe = Math.floor(xe * me);
      }
      h.current = true;
      const B = re, ie = xe, Ce = D.width, ee = D.height, [Ee, de, be] = D.position, [Fe, Ge, Oe] = D.target, Se = [
        Ee,
        -be,
        de
      ], ze = [
        Fe,
        -Oe,
        Ge
      ];
      f.render(Se, ze, [
        0,
        0,
        1
      ], re, xe, D.fov * Math.PI / 180).then((me) => {
        const je = e.current;
        if (je) {
          const V = je.getContext("2d");
          V && j(V, me, B, ie, Ce, ee);
        }
        h.current = false;
        const Le = $.getState();
        Le.raytraceError !== null && Le.setRaytraceError(null);
      }).catch((me) => {
        const je = (me == null ? void 0 : me.message) ?? String(me);
        Ke.warn("gpu", `Render failed: ${je}`), $.getState().setRaytraceError(je), h.current = false;
      });
    }, [
      f,
      j
    ]), A = c.useCallback(() => {
      S.current && (clearTimeout(S.current), S.current = null);
    }, []), W = c.useCallback((D) => {
      var _a2;
      if (A(), !f) return;
      const _ = [
        "draft",
        "standard",
        "high"
      ].indexOf(C.current), X = [
        {
          tier: "draft",
          frames: 1,
          gap: 0
        }
      ];
      _ >= 1 && X.push({
        tier: "standard",
        frames: 4,
        gap: 80
      }), _ >= 2 && X.push({
        tier: "high",
        frames: 24,
        gap: 80
      });
      const se = f;
      (_a2 = se.resetAccumulation) == null ? void 0 : _a2.call(se);
      let re = 0, xe = 0;
      const ge = () => {
        var _a3;
        if (re >= X.length) return;
        const B = X[re];
        if (xe >= B.frames) {
          if (re++, xe = 0, re >= X.length) return;
          (_a3 = se.resetAccumulation) == null ? void 0 : _a3.call(se), S.current = setTimeout(ge, X[re].gap);
          return;
        }
        R(D, B.tier), xe++;
        const ie = B.tier === "high" ? 60 : 30;
        S.current = setTimeout(ge, ie);
      };
      ge();
    }, [
      A,
      R,
      f
    ]);
    return c.useEffect(() => (Xt = e.current, () => {
      Xt === e.current && (Xt = null);
    }), []), c.useEffect(() => (Mn = () => {
      const D = w.current;
      D && R(D, "standard");
    }, () => {
      Mn = null;
    }), [
      R
    ]), c.useEffect(() => {
      const D = (F) => {
        w.current = F, W(F);
      };
      return eo(D), Kt ? D(Kt) : Sn == null ? void 0 : Sn(), () => {
        eo(null);
      };
    }, [
      W
    ]), c.useEffect(() => {
      w.current && W(w.current);
    }, [
      t,
      W
    ]), c.useEffect(() => {
      var _a2;
      if (!f) return;
      (_a2 = f.setTheme) == null ? void 0 : _a2.call(f, p ? 0 : 1), w.current && W(w.current);
    }, [
      p,
      f,
      W
    ]), c.useEffect(() => {
      if (!f || o === v.current) return;
      v.current = o;
      const D = gi[o] ?? 0, F = f;
      if (typeof F.setDebugMode != "function") {
        Ke.debug("gpu", "setDebugMode not available - WASM may need rebuild");
        return;
      }
      F.setDebugMode(D), w.current && W(w.current);
    }, [
      o,
      f,
      W
    ]), c.useEffect(() => {
      if (!f) return;
      const D = P.current;
      if (n === D.enabled && r === D.depth && a === D.normal && s === D.silhouette && l === D.crease && u === D.boundary && m === D.silhouetteWidth && x === D.creaseWidth && d === D.boundaryWidth && g === D.softness) return;
      P.current = {
        enabled: n,
        depth: r,
        normal: a,
        silhouette: s,
        crease: l,
        boundary: u,
        silhouetteWidth: m,
        creaseWidth: x,
        boundaryWidth: d,
        softness: g
      };
      const F = f;
      typeof F.setEdgeDetection == "function" && F.setEdgeDetection(n, r, a), typeof F.setEdgeStyle == "function" ? F.setEdgeStyle(s, l, u, 0.08, 0.08, 0.1, 1, 0.12, 0.12, 0.14, 1, 0.06, 0.06, 0.08, 1, m, x, d, g) : Ke.debug("gpu", "setEdgeStyle not available - WASM may need rebuild"), w.current && W(w.current);
    }, [
      n,
      r,
      a,
      s,
      l,
      u,
      m,
      x,
      d,
      g,
      f,
      W
    ]), c.useEffect(() => {
      if (!f) return;
      const D = b.current;
      if (n === D.stylize) return;
      b.current = {
        stylize: n
      };
      const F = f;
      if (typeof F.setPathTrace != "function") {
        Ke.debug("gpu", "setPathTrace not available - WASM may need rebuild");
        return;
      }
      F.setPathTrace(vi, n), w.current && W(w.current);
    }, [
      n,
      f,
      W
    ]), f ? i.jsx("canvas", {
      ref: e,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }
    }) : null;
  }
  const bi = Math.PI / 7, Si = 0.25, Mi = 6, Ei = 40;
  function Pi(e, t, o, n) {
    o.copy(e);
    const r = Ci.copy(t).sub(e), a = r.length();
    a < 1e-6 ? r.set(0, -1, 0) : r.divideScalar(a);
    const s = Math.max(Mi, Math.min(Ei, a * Si)), l = Math.tan(bi) * s, u = ji.set(0, 0, 1);
    Math.abs(r.dot(u)) > 0.98 && u.set(0, 1, 0);
    const m = Ri.crossVectors(r, u).normalize(), x = ki.crossVectors(m, r).normalize(), d = zi.copy(e).addScaledVector(r, s), g = Ii.copy(m).multiplyScalar(l), f = Ai.copy(x).multiplyScalar(l);
    n[0].copy(d).add(g).add(f), n[1].copy(d).sub(g).add(f), n[2].copy(d).sub(g).sub(f), n[3].copy(d).add(g).sub(f);
  }
  const Ci = new E(), ji = new E(), Ri = new E(), ki = new E(), zi = new E(), Ii = new E(), Ai = new E(), Di = 8, Ti = Di * 2;
  function _i({ participant: e, goal: t }) {
    const o = Pe((x) => x.invalidate), n = c.useRef(new E(...t.position)), r = c.useRef(new E(...t.target)), a = c.useRef(new E()), s = c.useRef([
      new E(),
      new E(),
      new E(),
      new E()
    ]);
    c.useEffect(() => {
      o();
    }, [
      t.position[0],
      t.position[1],
      t.position[2],
      t.target[0],
      t.target[1],
      t.target[2],
      o
    ]);
    const l = c.useMemo(() => {
      const x = new ft(), d = new Float32Array(Ti * 3);
      return x.setAttribute("position", new $e(d, 3)), x;
    }, []), u = c.useMemo(() => new zs({
      color: e.color,
      transparent: true,
      opacity: 0.85,
      depthTest: true
    }), [
      e.color
    ]);
    c.useEffect(() => () => {
      l.dispose(), u.dispose();
    }, [
      l,
      u
    ]);
    const m = c.useRef(null);
    return Qe(() => {
      const x = Fi.set(t.position[0], t.position[1], t.position[2]), d = Li.set(t.target[0], t.target[1], t.target[2]), g = 0.15;
      n.current.lerp(x, g), r.current.lerp(d, g), Pi(n.current, r.current, a.current, s.current);
      const f = l.getAttribute("position"), p = a.current, v = s.current;
      for (let h = 0; h < 4; h++) {
        const w = v[h], S = v[(h + 1) % 4];
        f.setXYZ(h * 2, w.x, w.y, w.z), f.setXYZ(h * 2 + 1, S.x, S.y, S.z);
      }
      for (let h = 0; h < 4; h++) {
        f.setXYZ(8 + h * 2, p.x, p.y, p.z);
        const w = v[h];
        f.setXYZ(8 + h * 2 + 1, w.x, w.y, w.z);
      }
      f.needsUpdate = true, l.computeBoundingSphere(), m.current && m.current.position.copy(p);
      const P = n.current.distanceToSquared(x), b = r.current.distanceToSquared(d);
      (P > 1e-4 || b > 1e-4) && o();
    }), i.jsxs("group", {
      children: [
        i.jsx("lineSegments", {
          geometry: l,
          material: u
        }),
        i.jsx("group", {
          ref: m,
          children: i.jsx(it, {
            center: true,
            distanceFactor: 40,
            style: {
              pointerEvents: "none",
              transform: "translate(0, -18px)",
              whiteSpace: "nowrap",
              fontSize: "11px",
              fontWeight: 600,
              padding: "2px 6px",
              borderRadius: "4px",
              color: "white",
              background: e.color,
              boxShadow: "0 1px 3px rgba(0,0,0,0.3)"
            },
            children: e.name
          })
        })
      ]
    });
  }
  const Fi = new E(), Li = new E();
  function Ni() {
    const e = zt((r) => r.participants), t = $((r) => r.followMode), o = $((r) => r.followingParticipantId);
    if (t === "free") return null;
    const n = [];
    return e.forEach((r) => {
      r.id !== Pn && r.camera && (t === "lock" && o === r.id || n.push(i.jsx(_i, {
        participant: r,
        goal: r.camera
      }, r.id)));
    }), i.jsx(i.Fragment, {
      children: n
    });
  }
  function Oi() {
    const e = Pe((n) => n.camera), t = Pe((n) => n.controls), o = c.useRef(null);
    c.useEffect(() => {
      function n() {
        const { selectedPartIds: f } = $.getState();
        if (f.size === 0) return;
        const p = De.getState().scene, v = oe.getState().parts;
        if (!p) return;
        const P = new rt();
        let b = false;
        for (const [R, A] of p.parts.entries()) {
          const N = v[R];
          if (!N || !f.has(N.id)) continue;
          const W = A.mesh.positions;
          for (let D = 0; D < W.length; D += 3) P.expandByPoint(new E(W[D], W[D + 1], W[D + 2]));
          b = true;
        }
        if (!b) return;
        const h = new E();
        P.getCenter(h);
        const w = new E();
        P.getSize(w);
        const C = Math.max(w.x, w.y, w.z, 1) * 2, j = new E().copy(e.position).sub(t && "target" in t && t.target ? t.target : new E(0, 0, 0)).normalize();
        e.position.copy(h).addScaledVector(j, C), t && "target" in t && t.target && t.target.copy(h);
      }
      function r() {
        const f = De.getState().scene;
        if (!f) return null;
        const p = new rt(), v = new E();
        if (f.instances && f.instances.length > 0) for (const P of f.instances) {
          const b = P.transform, h = P.mesh.positions;
          for (let w = 0; w < h.length; w += 3) {
            const S = h[w], C = h[w + 1], j = h[w + 2];
            b ? v.set(S * b.scale.x + b.translation.x, C * b.scale.y + b.translation.y, j * b.scale.z + b.translation.z) : v.set(S, C, j), p.expandByPoint(v);
          }
        }
        else {
          if (f.parts.length === 0) return null;
          for (const P of f.parts) {
            const b = P.mesh.positions;
            for (let h = 0; h < b.length; h += 3) p.expandByPoint(new E(b[h], b[h + 1], b[h + 2]));
          }
        }
        return p.isEmpty() ? null : p;
      }
      function a() {
        const f = r(), p = new E();
        let v = 150;
        if (f) {
          f.getCenter(p);
          const b = new E();
          f.getSize(b), v = Math.max(b.x, b.y, b.z, 50) * 2;
        }
        const P = v / Math.sqrt(3);
        e.position.set(p.x + P, p.y + P, p.z + P), t && "target" in t && t.target && t.target.copy(p);
      }
      function s() {
        const f = r(), p = new E();
        let v = 150;
        if (f) {
          f.getCenter(p);
          const w = new E();
          f.getSize(w), v = Math.max(w.x, w.y, w.z, 50) * 2;
        }
        const P = new E(p.x, p.z, -p.y), b = t && "target" in t && t.target ? t.target : new E(0, 0, 0), h = new E().copy(e.position).sub(b);
        h.lengthSq() < 1e-6 && h.set(1, 1, 1), h.normalize(), e.position.copy(P).addScaledVector(h, v), t && "target" in t && t.target && t.target.copy(P);
      }
      function l() {
        const f = r(), p = new E();
        let v = 150;
        if (f) {
          f.getCenter(p);
          const P = new E();
          f.getSize(P), v = Math.max(P.x, P.y, P.z, 50) * 2;
        }
        e.position.set(p.x, p.y, p.z + v), t && "target" in t && t.target && t.target.copy(p);
      }
      function u() {
        const f = r(), p = new E();
        let v = 150;
        if (f) {
          f.getCenter(p);
          const P = new E();
          f.getSize(P), v = Math.max(P.x, P.y, P.z, 50) * 2;
        }
        e.position.set(p.x, p.y - v, p.z), t && "target" in t && t.target && t.target.copy(p);
      }
      function m() {
        const f = r(), p = new E();
        let v = 150;
        if (f) {
          f.getCenter(p);
          const P = new E();
          f.getSize(P), v = Math.max(P.x, P.y, P.z, 50) * 2;
        }
        e.position.set(p.x + v, p.y, p.z), t && "target" in t && t.target && t.target.copy(p);
      }
      window.addEventListener("vcad:focus-selection", n), window.addEventListener("vcad:camera-isometric", a), window.addEventListener("vcad:camera-top", l), window.addEventListener("vcad:camera-front", u), window.addEventListener("vcad:camera-right", m);
      const x = () => {
        var _a2;
        if (!t || !("target" in t) || !t.target || typeof window < "u" && new URLSearchParams(window.location.search).has("at")) return;
        const f = oe.getState().documentId, p = De.getState().scene;
        !f || o.current === f || !(p && (p.parts.some((P) => P.mesh.indices.length > 0) || (((_a2 = p.instances) == null ? void 0 : _a2.some((P) => P.mesh.indices.length > 0)) ?? false))) || (o.current = f, s());
      };
      x();
      const d = oe.subscribe(x), g = De.subscribe(x);
      return () => {
        window.removeEventListener("vcad:focus-selection", n), window.removeEventListener("vcad:camera-isometric", a), window.removeEventListener("vcad:camera-top", l), window.removeEventListener("vcad:camera-front", u), window.removeEventListener("vcad:camera-right", m), d(), g();
      };
    }, [
      e,
      t
    ]);
  }
  function Bi() {
    const e = Pe((r) => r.gl), t = Pe((r) => r.invalidate), [o, n] = c.useState(false);
    return c.useEffect(() => {
      const r = e.domElement;
      if (!r) return;
      let a;
      const s = () => {
        clearTimeout(a), a = setTimeout(() => {
          window.dispatchEvent(new CustomEvent("vcad:gl-stuck-lost"));
        }, 1500);
      };
      try {
        const m = e.getContext();
        m && typeof m.isContextLost == "function" && m.isContextLost() && n(true);
      } catch {
        n(true);
      }
      const l = (m) => {
        m.preventDefault(), n(true), s();
      }, u = () => {
        clearTimeout(a), n(false);
      };
      return r.addEventListener("webglcontextlost", l, false), r.addEventListener("webglcontextrestored", u, false), () => {
        clearTimeout(a), r.removeEventListener("webglcontextlost", l, false), r.removeEventListener("webglcontextrestored", u, false);
      };
    }, [
      e
    ]), c.useEffect(() => {
      if (o) return;
      t();
      const r = requestAnimationFrame(() => t());
      return () => cancelAnimationFrame(r);
    }, [
      o,
      t
    ]), o;
  }
  function Vi() {
    const e = Yt((a) => a.inputDevice), t = Yt((a) => a.detectedDevice), o = Yt((a) => a.setDetectedDevice), n = c.useRef([]), r = c.useRef(false);
    c.useEffect(() => {
      if (e !== "auto" || t !== null) {
        r.current = true;
        return;
      }
      r.current = false, n.current = [];
      const a = (s) => {
        if (r.current || (n.current.push({
          deltaMode: s.deltaMode,
          hasHorizontal: Math.abs(s.deltaX) > 0.5,
          deltaY: Math.abs(s.deltaY)
        }), n.current.length < 5)) return;
        r.current = true;
        const l = n.current;
        if (l.some((d) => d.deltaMode === 1)) {
          o("mouse");
          return;
        }
        if (l.filter((d) => d.hasHorizontal).length >= 2) {
          o("trackpad");
          return;
        }
        l.reduce((d, g) => d + g.deltaY, 0) / l.length < 20 ? o("trackpad") : o("mouse");
      };
      return window.addEventListener("wheel", a, {
        passive: true
      }), () => window.removeEventListener("wheel", a);
    }, [
      e,
      t,
      o
    ]);
  }
  function $i() {
    var _a2;
    const e = c.useRef(null), t = c.useRef(0), o = c.useRef([]), n = oe((h) => h.document.joints), r = oe((h) => h.setJointState), a = (n == null ? void 0 : n.map((h) => h.id).join(",")) ?? "", s = Ye((h) => h.mode), l = Ye((h) => h.timestep), u = Ye((h) => h.playbackSpeed), m = Ye((h) => h.setPhysicsAvailable), x = Ye((h) => h.setJointStates), d = Ye((h) => h.setObservation), g = Ye((h) => h.setMode);
    c.useEffect(() => {
      An().then((h) => {
        console.log("[Physics] isPhysicsAvailable:", h), m(h);
      });
    }, [
      m
    ]), c.useEffect(() => {
      if (!n || n.length === 0) {
        e.current && (e.current.close(), e.current = null, o.current = []);
        return;
      }
      let h = true;
      async function w() {
        if (!(!await An() || !h)) try {
          const C = oe.getState().document, j = [], R = await is.create(C, {
            endEffectorIds: j,
            dt: 1 / 240,
            substeps: 4
          });
          if (!h) {
            R.close();
            return;
          }
          e.current && e.current.close(), e.current = R;
          const A = oe.getState().document.joints ?? [];
          o.current = A.map((D) => D.id);
          const N = A.map((D) => ({
            id: D.id,
            name: D.name ?? D.id,
            position: D.state ?? 0,
            velocity: 0,
            torque: 0,
            targetVelocity: 0,
            limits: null
          }));
          x(N);
          const W = R.observe();
          d({
            jointPositions: W.joint_positions,
            jointVelocities: W.joint_velocities,
            endEffectorPoses: W.end_effector_poses
          }), console.log(`[Physics] Initialized with ${R.numJoints} joints, ${R.actionDim} action dim`);
        } catch (C) {
          console.error("[Physics] Failed to initialize:", C);
        }
      }
      return w(), () => {
        h = false;
      };
    }, [
      a,
      x,
      d
    ]), c.useEffect(() => () => {
      e.current && (e.current.close(), e.current = null);
    }, []);
    const f = c.useCallback(() => Ye.getState().jointStates.map((w) => w.position), []), p = c.useCallback(() => Ye.getState().jointStates.map((w) => w.torque), []), v = c.useCallback(() => Ye.getState().jointStates.map((w) => w.targetVelocity ?? 0), []), P = c.useCallback((h) => {
      d({
        jointPositions: h.joint_positions,
        jointVelocities: h.joint_velocities,
        endEffectorPoses: h.end_effector_poses
      });
      const S = Ye.getState().jointStates.map((A, N) => ({
        ...A,
        position: h.joint_positions[N] ?? A.position,
        velocity: h.joint_velocities[N] ?? A.velocity
      }));
      x(S);
      const C = oe.getState().document, j = structuredClone(C);
      o.current.forEach((A, N) => {
        var _a3;
        const W = (_a3 = j.joints) == null ? void 0 : _a3.find((D) => D.id === A);
        W && h.joint_positions[N] !== void 0 && (W.state = h.joint_positions[N]);
      });
      const R = jn(j);
      De.getState().updateInstanceTransforms(R);
    }, [
      d,
      x
    ]), { invalidate: b } = Pe();
    return Qe((h, w) => {
      const S = e.current;
      if (S && !(s === "off" || s === "paused")) {
        if (s === "stepping") {
          const C = Ye.getState().actionType, j = C === "torque" ? p() : C === "velocity" ? v() : f(), R = S.step(C, j);
          P(R.observation), g("paused");
          return;
        }
        if (s === "running") {
          const C = w * u;
          t.current += C;
          const j = Ye.getState().actionType;
          for (; t.current >= l; ) {
            const R = j === "torque" ? p() : j === "velocity" ? v() : f(), A = S.step(j, R);
            Math.random() < 0.01 && console.log("[Physics] actionType:", j, "actions:", R, "positions:", A.observation.joint_positions), P(A.observation), t.current -= l;
          }
          b();
        }
      }
    }), c.useEffect(() => {
      if (s === "off" && e.current) {
        const h = Ye.getState().jointStates;
        o.current.forEach((S, C) => {
          var _a3;
          const j = (_a3 = h[C]) == null ? void 0 : _a3.position;
          j !== void 0 && r(S, j, true);
        });
        const w = e.current.reset();
        P(w), t.current = 0;
      }
    }, [
      s,
      P,
      r
    ]), {
      isInitialized: !!e.current,
      numJoints: ((_a2 = e.current) == null ? void 0 : _a2.numJoints) ?? 0
    };
  }
  function Wi() {
    const e = c.useRef(null), { invalidate: t } = Pe();
    c.useEffect(() => Nt.subscribe(() => {
      t();
    }), [
      t
    ]), Qe((o, n) => {
      const r = oe.getState().document.timeline;
      if (!r || r.tracks.length === 0) return;
      const a = Nt.getState();
      if (!a.visible) {
        e.current = null;
        return;
      }
      const s = Ye.getState().mode;
      if (s === "running" || s === "stepping") return;
      const l = Math.max(r.durationS, 1e-6);
      let u = a.timeS;
      if (a.playing ? (u += n * a.speed, u >= l && (a.loop ? u %= l : (u = l, Nt.setState({
        playing: false
      }))), Nt.setState({
        timeS: u
      })) : u = Math.min(Math.max(u, 0), l), e.current === u) return;
      e.current = u;
      const m = Hs(r, u);
      if (m.size === 0) return;
      const x = oe.getState().document, d = structuredClone(x);
      let g = false;
      for (const p of d.joints ?? []) {
        const v = m.get(p.id);
        v !== void 0 && (p.state = v, g = true);
      }
      if (!g) return;
      const f = jn(d);
      De.getState().updateInstanceTransforms(f), t();
    });
  }
  const Gi = [
    "video/mp4;codecs=avc1.640028",
    "video/mp4;codecs=avc1.42E01E",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm"
  ], Hi = 12e6, Yi = 60, Xi = 250;
  function Ui() {
    if (typeof MediaRecorder > "u") return null;
    for (const e of Gi) if (MediaRecorder.isTypeSupported(e)) return e;
    return null;
  }
  function qi(e) {
    return e.startsWith("video/mp4") ? "mp4" : e.startsWith("video/webm") ? "webm" : "bin";
  }
  function Ki(e) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "untitled";
  }
  function Zi() {
    return (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
  }
  function Ji() {
    const { gl: e } = Pe(), t = tt((a) => a.status), o = $((a) => a.renderMode), n = Ye((a) => a.mode), r = c.useRef({
      recorder: null,
      chunks: [],
      mimeType: null,
      rafId: null,
      raytraceDriving: false
    });
    c.useEffect(() => {
      const a = tt.getState(), s = r.current;
      if (t === "recording" && !s.recorder) {
        const l = Ui();
        if (!l) {
          a.setError("MediaRecorder is not supported in this browser.");
          return;
        }
        const u = hi(), m = o === "raytrace" && u !== null;
        o === "raytrace" && !m && Ke.warn("app", "Raytrace overlay not mounted at record start; falling back to WebGL canvas.");
        const d = m ? u : e.domElement;
        if (typeof d.captureStream != "function") {
          a.setError("Canvas.captureStream is not supported in this browser.");
          return;
        }
        const g = d.captureStream(Yi);
        let f;
        try {
          f = new MediaRecorder(g, {
            mimeType: l,
            videoBitsPerSecond: Hi
          });
        } catch (p) {
          a.setError(p instanceof Error ? p.message : "Failed to create MediaRecorder.");
          return;
        }
        s.chunks = [], s.recorder = f, s.mimeType = l, s.raytraceDriving = m, f.ondataavailable = (p) => {
          p.data && p.data.size > 0 && (s.chunks.push(p.data), tt.getState().addBytes(p.data.size));
        }, f.onerror = (p) => {
          var _a2;
          const P = ((_a2 = p.error) == null ? void 0 : _a2.message) ?? "MediaRecorder error";
          Ke.warn("app", `Recorder error: ${P}`), tt.getState().setError(P);
        }, f.onstop = () => {
          const p = s.chunks, v = s.mimeType ?? "video/webm";
          if (s.chunks = [], s.recorder = null, s.mimeType = null, s.raytraceDriving = false, s.rafId !== null && (cancelAnimationFrame(s.rafId), s.rafId = null), p.length === 0) {
            tt.getState().reset();
            return;
          }
          const P = new Blob(p, {
            type: v
          }), b = oe.getState().documentName ?? "untitled", h = `vcad-sim-${Ki(b)}-${Zi()}.${qi(v)}`;
          as(P, h), tt.getState().reset();
        };
        try {
          f.start(Xi), tt.getState().setMimeType(l);
        } catch (p) {
          s.recorder = null, s.mimeType = null, s.raytraceDriving = false, a.setError(p instanceof Error ? p.message : "Failed to start recording.");
          return;
        }
        if (s.raytraceDriving) {
          const p = () => {
            r.current.raytraceDriving && (Qn(), r.current.rafId = requestAnimationFrame(p));
          };
          r.current.rafId = requestAnimationFrame(p);
        }
        return;
      }
      if (t === "saving" && s.recorder) {
        s.raytraceDriving = false, s.rafId !== null && (cancelAnimationFrame(s.rafId), s.rafId = null);
        try {
          s.recorder.state !== "inactive" && s.recorder.stop();
        } catch (l) {
          Ke.warn("app", `Recorder stop failed: ${l}`), tt.getState().reset();
        }
        return;
      }
      if (t === "idle" && s.recorder) {
        s.chunks = [];
        try {
          s.recorder.ondataavailable = null, s.recorder.onstop = null, s.recorder.onerror = null, s.recorder.state !== "inactive" && s.recorder.stop();
        } catch {
        }
        s.recorder = null, s.mimeType = null, s.raytraceDriving = false, s.rafId !== null && (cancelAnimationFrame(s.rafId), s.rafId = null);
      }
    }, [
      t,
      o,
      e
    ]), c.useEffect(() => {
      const a = r.current, s = a.recorder;
      if (s) if (n === "paused" && s.state === "recording") try {
        s.pause(), tt.getState().pause(), a.rafId !== null && (cancelAnimationFrame(a.rafId), a.rafId = null);
      } catch (l) {
        Ke.warn("app", `Recorder pause failed: ${l}`);
      }
      else if (n === "running" && s.state === "paused") try {
        if (s.resume(), tt.getState().resume(), a.raytraceDriving && a.rafId === null) {
          const l = () => {
            r.current.raytraceDriving && (Qn(), r.current.rafId = requestAnimationFrame(l));
          };
          a.rafId = requestAnimationFrame(l);
        }
      } catch (l) {
        Ke.warn("app", `Recorder resume failed: ${l}`);
      }
      else n === "off" && s.state !== "inactive" && tt.getState().stop();
    }, [
      n,
      t
    ]), c.useEffect(() => () => {
      const a = r.current;
      a.rafId !== null && (cancelAnimationFrame(a.rafId), a.rafId = null);
      const s = a.recorder;
      if (s && s.state !== "inactive") try {
        s.ondataavailable = null, s.onstop = null, s.onerror = null, s.stop();
      } catch {
      }
      a.recorder = null, a.chunks = [], a.mimeType = null, a.raytraceDriving = false;
    }, []);
  }
  function Qi(e, t) {
    const o = e ?? {};
    return (o.shift ?? false) === (t.shift ?? false) && (o.ctrl ?? false) === (t.ctrl ?? false) && (o.meta ?? false) === (t.meta ?? false) && (o.alt ?? false) === (t.alt ?? false);
  }
  function ea(e) {
    return {
      shift: e.shiftKey,
      ctrl: e.ctrlKey,
      meta: e.metaKey,
      alt: e.altKey
    };
  }
  function ta(e, t, o) {
    const r = [
      ...e.filter((a) => !a.device || a.device === o)
    ].sort((a, s) => {
      const l = (u) => Object.values(u ?? {}).filter(Boolean).length;
      return l(s.modifiers) - l(a.modifiers);
    });
    for (const a of r) if (Qi(a.modifiers, t)) return a.action;
    return "none";
  }
  function na(e, t) {
    const o = {
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2
    }, n = (s) => {
      switch (s) {
        case "orbit":
          return o.ROTATE;
        case "zoom":
          return o.DOLLY;
        case "pan":
          return o.PAN;
        default:
          return;
      }
    }, r = e.mouseBindings.filter((s) => !s.device || s.device === t), a = (s) => {
      var _a2;
      return ((_a2 = r.find((u) => {
        var _a3, _b, _c2, _d;
        return u.button === s && !((_a3 = u.modifiers) == null ? void 0 : _a3.shift) && !((_b = u.modifiers) == null ? void 0 : _b.ctrl) && !((_c2 = u.modifiers) == null ? void 0 : _c2.meta) && !((_d = u.modifiers) == null ? void 0 : _d.alt);
      })) == null ? void 0 : _a2.action) ?? "none";
    };
    return {
      LEFT: n(a("left")),
      MIDDLE: n(a("middle")),
      RIGHT: n(a("right"))
    };
  }
  const oa = {
    FCu: 0.8,
    In1Cu: 0.6,
    In2Cu: 0.4,
    In3Cu: 0.2,
    In4Cu: 0,
    In5Cu: -0.2,
    In6Cu: -0.4,
    BCu: -0.8,
    FSilkS: 0.9,
    BSilkS: -0.9,
    FMask: 0.85,
    BMask: -0.85,
    EdgeCuts: 0,
    FCrtYd: 0.95,
    BCrtYd: -0.95,
    FFab: 0.92,
    BFab: -0.92
  };
  function Dt(e, t = 0) {
    return (oa[e] ?? 0) * (1 + t * 4);
  }
  function pt(e, t, o = 0) {
    return t / 2 + Dt(e, o);
  }
  new E();
  new E();
  function to(e, t, o) {
    let n = e.x, r = e.y;
    return o && t > 0 && (n = Math.round(n / t) * t, r = Math.round(r / t) * t), {
      x: n,
      y: r
    };
  }
  function sa(e, t) {
    var _a2;
    return ((_a2 = e.find((n) => n.layer === t)) == null ? void 0 : _a2.color) ?? "#888";
  }
  function Oo(e, t) {
    var _a2;
    return ((_a2 = e.find((n) => n.layer === t)) == null ? void 0 : _a2.visible) ?? false;
  }
  const ra = 120, no = new We("#3b82f6"), ia = /* @__PURE__ */ new Set([
    "component",
    "silkscreen"
  ]), aa = /* @__PURE__ */ new Set([
    "laminate",
    "substrate",
    "mask"
  ]);
  function oo(e, t) {
    if (!e || t <= 0) return 0;
    const o = e;
    return Dt(o, t) - Dt(o, 0);
  }
  function ca(e, t, o) {
    var _a2, _b;
    switch (o.type) {
      case "trace":
        return e.kind === "trace" && e.index === o.idx;
      case "via":
        return e.kind === "via" && e.index === o.idx;
      case "pad": {
        if (e.kind !== "pad" || e.footprint === void 0) return false;
        const n = t.footprints[e.footprint];
        return (n == null ? void 0 : n.ref) === o.fpRef && ((_a2 = n == null ? void 0 : n.pads[e.index]) == null ? void 0 : _a2.number) === o.padNum;
      }
      case "footprint":
      case "component":
        return e.kind === "pad" && e.footprint !== void 0 && ((_b = t.footprints[e.footprint]) == null ? void 0 : _b.ref) === o.ref;
      default:
        return false;
    }
  }
  function la({ pcb: e, layers: t, activeNet: o, hoveredNet: n, selection: r, explosion: a, showBoard: s }) {
    const { invalidate: l } = Pe(), [u, m] = c.useState([]), x = c.useRef(0);
    c.useEffect(() => {
      const p = ++x.current, v = setTimeout(() => {
        cs(e).then((P) => {
          x.current === p && (m(P), l());
        }).catch((P) => console.error("[PcbKernelBoard] preview meshes failed:", P));
      }, ra);
      return () => clearTimeout(v);
    }, [
      e,
      l
    ]);
    const d = c.useMemo(() => u.filter((p) => !ia.has(p.role)).map((p, v) => {
      var _a2, _b, _c2;
      const P = new ft();
      P.setAttribute("position", new It(p.positions, 3)), p.normals.length === p.positions.length ? P.setAttribute("normal", new It(p.normals, 3)) : P.computeVertexNormals(), P.setIndex(p.indices);
      const b = p.alpha ?? 1, h = new Is({
        color: new We(p.color[0], p.color[1], p.color[2]),
        metalness: p.metalness,
        roughness: p.roughness,
        envMapIntensity: 0.5,
        clearcoat: p.clearcoat ?? 0,
        clearcoatRoughness: p.clearcoat_roughness ?? 0,
        ...b < 1 ? {
          transparent: true,
          opacity: b,
          depthWrite: false,
          side: Ue
        } : {},
        ...(((_a2 = p.emissive) == null ? void 0 : _a2[0]) ?? 0) > 0 || (((_b = p.emissive) == null ? void 0 : _b[1]) ?? 0) > 0 || (((_c2 = p.emissive) == null ? void 0 : _c2[2]) ?? 0) > 0 ? {
          emissive: new We(p.emissive[0], p.emissive[1], p.emissive[2]),
          emissiveIntensity: 1
        } : {}
      });
      return {
        key: `${p.role}-${p.layer ?? "all"}-${v}`,
        role: p.role,
        layer: p.layer,
        geometry: P,
        material: h,
        entities: p.entities ?? []
      };
    }), [
      u
    ]);
    c.useEffect(() => () => d.forEach((p) => {
      p.geometry.dispose(), p.material.dispose();
    }), [
      d
    ]);
    const g = c.useMemo(() => {
      const p = [];
      for (const v of d) {
        if (v.entities.length === 0) continue;
        const P = v.entities.filter((R) => o != null && R.net === o || n != null && R.net === n || ca(R, e, r));
        if (P.length === 0) continue;
        const b = v.geometry.getIndex();
        let h = 0;
        for (const R of P) h += R.count;
        const w = new Uint32Array(h);
        let S = 0;
        for (const R of P) for (let A = 0; A < R.count; A++) w[S++] = b.getX(R.start + A);
        const C = new ft();
        C.setAttribute("position", v.geometry.getAttribute("position"));
        const j = v.geometry.getAttribute("normal");
        j && C.setAttribute("normal", j), C.setIndex(new $e(w, 1)), p.push({
          key: `hl-${v.key}`,
          geometry: C
        });
      }
      return p;
    }, [
      d,
      e,
      o,
      n,
      r
    ]);
    c.useEffect(() => () => g.forEach((p) => p.geometry.dispose()), [
      g
    ]);
    const f = c.useMemo(() => {
      const p = /* @__PURE__ */ new Map();
      for (const v of d) p.set(`hl-${v.key}`, oo(v.layer, a));
      return p;
    }, [
      d,
      a
    ]);
    return i.jsxs("group", {
      children: [
        d.map((p) => aa.has(p.role) && !s || p.layer && !Oo(t, p.layer) ? null : i.jsx("mesh", {
          geometry: p.geometry,
          material: p.material,
          position: [
            0,
            0,
            oo(p.layer, a)
          ],
          renderOrder: p.role === "mask" ? 1 : 0
        }, p.key)),
        g.map((p) => i.jsx("mesh", {
          geometry: p.geometry,
          position: [
            0,
            0,
            f.get(p.key) ?? 0
          ],
          renderOrder: 2,
          children: i.jsx("meshStandardMaterial", {
            color: no,
            emissive: no,
            emissiveIntensity: 0.55,
            roughness: 0.35,
            metalness: 0.2,
            polygonOffset: true,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -2
          })
        }, p.key))
      ]
    });
  }
  function ua(e, t, o, n, r, a) {
    const s = pt(e.layer, r, a), l = Math.cos(n), u = Math.sin(n), m = (x, d) => {
      const g = x * l - d * u + t, f = x * u + d * l + o;
      return new E(g, f, s);
    };
    switch (e.type) {
      case "Line":
        return {
          points: [
            m(e.start.x, e.start.y),
            m(e.end.x, e.end.y)
          ],
          color: "#FFEB3B",
          layer: e.layer
        };
      case "Rect": {
        const x = m(e.start.x, e.start.y), d = m(e.end.x, e.start.y), g = m(e.end.x, e.end.y), f = m(e.start.x, e.end.y);
        return {
          points: [
            x,
            d,
            g,
            f,
            x
          ],
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      case "Circle": {
        const d = [];
        for (let g = 0; g <= 24; g++) {
          const f = g / 24 * Math.PI * 2, p = e.center.x + Math.cos(f) * e.radius, v = e.center.y + Math.sin(f) * e.radius;
          d.push(m(p, v));
        }
        return {
          points: d,
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      case "Polygon": {
        const x = e.vertices.map((d) => m(d.x, d.y));
        return x.length > 0 && x.push(x[0]), {
          points: x,
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      default:
        return null;
    }
  }
  function da({ footprint: e, layers: t, boardThickness: o, highlight: n, explosion: r, interfering: a }) {
    const s = (e.rotation ?? 0) * Math.PI / 180, l = c.useMemo(() => e.graphics ? e.graphics.map((m) => ua(m, e.position.x, e.position.y, s, o, r)).filter((m) => m !== null && Oo(t, m.layer)) : [], [
      e,
      t,
      o,
      s,
      r
    ]), u = pt(e.front !== false ? "FSilkS" : "BSilkS", o, r);
    return i.jsxs("group", {
      children: [
        l.map((m, x) => i.jsxs("line", {
          children: [
            i.jsx("bufferGeometry", {
              children: i.jsx("bufferAttribute", {
                attach: "attributes-position",
                args: [
                  new Float32Array(m.points.flatMap((d) => [
                    d.x,
                    d.y,
                    d.z
                  ])),
                  3
                ]
              })
            }),
            i.jsx("lineBasicMaterial", {
              color: a ? "#ef4444" : n ? "#3b82f6" : sa(t, m.layer),
              linewidth: 1
            })
          ]
        }, x)),
        i.jsx(Wo, {
          position: [
            e.position.x,
            e.position.y,
            u + 0.05
          ],
          rotation: [
            0,
            0,
            s
          ],
          fontSize: 0.8,
          color: a ? "#ef4444" : n ? "#3b82f6" : "#FFEB3B",
          anchorX: "center",
          anchorY: "middle",
          outlineWidth: 0.05,
          outlineColor: "#000000",
          children: e.ref
        })
      ]
    });
  }
  const so = new We("#ef4444"), fa = new We(0, 0, 0);
  function pa() {
    const e = le((a) => a.componentBodies), t = le((a) => a.showComponentBodies), o = le((a) => a.interferingFootprints), n = c.useMemo(() => new Set(o), [
      o
    ]), r = c.useMemo(() => e.map((a, s) => {
      const l = new ft();
      l.setAttribute("position", new It(a.positions, 3)), a.normals.length === a.positions.length && l.setAttribute("normal", new It(a.normals, 3)), l.setIndex(a.indices), a.normals.length !== a.positions.length && l.computeVertexNormals();
      const u = a.emissive ?? [
        0,
        0,
        0
      ];
      return {
        key: `body-${s}`,
        geo: l,
        ref: a.footprint_ref,
        color: new We(a.color[0], a.color[1], a.color[2]),
        metalness: a.metalness,
        roughness: a.roughness ?? 0.45,
        emissive: new We(u[0], u[1], u[2]),
        emissiveOn: u[0] > 0 || u[1] > 0 || u[2] > 0
      };
    }), [
      e
    ]);
    return c.useEffect(() => () => r.forEach((a) => a.geo.dispose()), [
      r
    ]), !t || r.length === 0 ? null : i.jsx("group", {
      children: r.map((a) => {
        const s = n.has(a.ref);
        return i.jsx("mesh", {
          geometry: a.geo,
          castShadow: true,
          receiveShadow: true,
          children: i.jsx("meshStandardMaterial", {
            color: s ? so : a.color,
            metalness: s ? 0.1 : a.metalness,
            roughness: s ? 0.45 : a.roughness,
            emissive: s ? so : a.emissiveOn ? a.emissive : fa,
            emissiveIntensity: s ? 0.45 : a.emissiveOn ? 2.5 : 0
          })
        }, a.key);
      })
    });
  }
  function ma(e, t, o) {
    if (!t) return [];
    const n = [], r = /* @__PURE__ */ new Map();
    for (const a of e) for (const s of a.pads) {
      const l = `${a.ref}:${s.number}`;
      r.set(l, {
        x: a.position.x + s.position.x,
        y: a.position.y + s.position.y
      });
    }
    for (const a of t.nets) if (!(a.connections.length < 2 || o.some((l) => l.net === a.name))) for (let l = 0; l < a.connections.length - 1; l++) {
      const u = a.connections[l], m = a.connections[l + 1], x = r.get(`${u.component_ref}:${u.pin_number}`), d = r.get(`${m.component_ref}:${m.pin_number}`);
      x && d && n.push({
        net: a.name,
        from: x,
        to: d,
        fpRef: u.component_ref,
        padNum: u.pin_number
      });
    }
    return n;
  }
  const ha = "#3b82f6", xa = "#555555";
  function ga({ pcb: e, netlist: t, activeNet: o, hoveredNet: n, boardThickness: r, explosion: a, onStartRoute: s, onHoverNet: l }) {
    const u = c.useMemo(() => ma(e.footprints, t, e.traces), [
      e.footprints,
      t,
      e.traces
    ]), m = pt("FCu", r, a) + 0.1;
    return u.length === 0 ? null : i.jsx("group", {
      children: u.map((x, d) => {
        const f = x.net === o || x.net === n ? ha : xa, p = new Float32Array([
          x.from.x,
          x.from.y,
          m,
          x.to.x,
          x.to.y,
          m
        ]);
        return i.jsxs("line", {
          onClick: (v) => {
            v.stopPropagation(), s(x.fpRef, x.padNum, x.net);
          },
          onPointerEnter: () => l(x.net),
          onPointerLeave: () => l(null),
          children: [
            i.jsx("bufferGeometry", {
              children: i.jsx("bufferAttribute", {
                attach: "attributes-position",
                args: [
                  p,
                  3
                ]
              })
            }),
            i.jsx("lineDashedMaterial", {
              color: f,
              dashSize: 0.5,
              gapSize: 0.5,
              linewidth: 1
            })
          ]
        }, d);
      })
    });
  }
  const ro = "#3b82f6";
  function ya({ pcb: e, routeStartPad: t, routePreview: o, boardThickness: n, activeLayer: r, explosion: a }) {
    if (!t || o.length === 0) return null;
    const s = e.footprints.find((w) => w.ref === t.fpRef), l = s == null ? void 0 : s.pads.find((w) => w.number === t.padNum);
    if (!s || !l) return null;
    const u = {
      x: s.position.x + l.position.x,
      y: s.position.y + l.position.y
    }, m = o[o.length - 1], x = pt(r, n, a) + 0.02, d = e.rules.defaultRules.traceWidth, g = e.rules.defaultRules.clearance, f = m.x - u.x, p = m.y - u.y, v = Math.sqrt(f * f + p * p);
    if (v < 0.01) return null;
    const P = Math.atan2(p, f), b = (u.x + m.x) / 2, h = (u.y + m.y) / 2;
    return i.jsxs("group", {
      children: [
        i.jsxs("mesh", {
          position: [
            b,
            h,
            x - 0.01
          ],
          rotation: [
            0,
            0,
            P
          ],
          children: [
            i.jsx("boxGeometry", {
              args: [
                v,
                d + g * 2,
                0.02
              ]
            }),
            i.jsx("meshBasicMaterial", {
              color: ro,
              transparent: true,
              opacity: 0.15
            })
          ]
        }),
        i.jsxs("mesh", {
          position: [
            b,
            h,
            x
          ],
          rotation: [
            0,
            0,
            P
          ],
          children: [
            i.jsx("boxGeometry", {
              args: [
                v,
                d,
                0.035
              ]
            }),
            i.jsx("meshBasicMaterial", {
              color: ro,
              transparent: true,
              opacity: 0.7
            })
          ]
        })
      ]
    });
  }
  function va({ violation: e, z: t }) {
    const o = c.useRef(null);
    Qe(({ clock: r }) => {
      if (!o.current) return;
      const a = r.getElapsedTime(), s = 0.6 + 0.4 * Math.sin(a * 3);
      o.current.scale.set(s, s, 1);
    });
    const n = e.severity === "Error" ? "#ef4444" : "#f59e0b";
    return i.jsxs("mesh", {
      ref: o,
      position: [
        e.position.x,
        e.position.y,
        t
      ],
      children: [
        i.jsx("ringGeometry", {
          args: [
            0.6,
            0.8,
            24
          ]
        }),
        i.jsx("meshBasicMaterial", {
          color: n,
          transparent: true,
          opacity: 0.8,
          side: Ue
        })
      ]
    });
  }
  function wa({ violations: e, boardThickness: t, explosion: o }) {
    if (e.length === 0) return null;
    const n = pt("FCu", t, o) + 0.15;
    return i.jsx("group", {
      children: e.map((r, a) => i.jsx(va, {
        violation: r,
        z: n
      }, a))
    });
  }
  const ba = {
    coincident: "\u2316",
    concentric: "\u25CE",
    horizontal: "\u2014",
    vertical: "|",
    parallel: "\u2225",
    perpendicular: "\u22A5",
    equalLength: "=",
    fixed: "\u2693",
    symmetric: "\u22C8",
    pointOnEdge: "\u2310"
  };
  function Sa(e, t, o) {
    if (Number(o.node) !== t) return null;
    if (o.kind === "pcbFootprint") {
      const n = e.footprints.find((r) => r.ref === o.ref);
      if (!n) return null;
      if (o.pad) {
        const r = n.pads.find((s) => s.number === o.pad);
        if (!r) return null;
        const a = (n.rotation ?? 0) * Math.PI / 180;
        return {
          x: n.position.x + r.position.x * Math.cos(a) - r.position.y * Math.sin(a),
          y: n.position.y + r.position.x * Math.sin(a) + r.position.y * Math.cos(a)
        };
      }
      return {
        x: n.position.x,
        y: n.position.y
      };
    }
    if (o.kind === "pcbOutlineVertex") {
      const n = e.outline.vertices[o.index];
      return n ? {
        x: n.x,
        y: n.y
      } : null;
    }
    if (o.kind === "pcbOutlineEdge") {
      const n = e.outline.vertices.length, r = e.outline.vertices[o.index], a = e.outline.vertices[(o.index + 1) % n];
      return r && a ? {
        x: (r.x + a.x) / 2,
        y: (r.y + a.y) / 2
      } : null;
    }
    return null;
  }
  function Ma(e) {
    return Object.values(e).filter((t) => t != null && typeof t == "object" && "kind" in t);
  }
  function Ea(e) {
    return {
      pointerEvents: "none",
      fontSize: "10px",
      fontFamily: "JetBrains Mono, monospace",
      whiteSpace: "nowrap",
      color: e ? "var(--text-muted, #9ca3af)" : "var(--text, #e5e7eb)",
      fontStyle: e ? "italic" : "normal",
      background: "rgba(0,0,0,0.55)",
      padding: "1px 4px",
      borderRadius: "3px"
    };
  }
  function Pa({ pcb: e, nodeId: t, constraints: o, pickedTargets: n, boardThickness: r, explosion: a }) {
    const s = pt("FCu", r, a) + 0.12, l = c.useMemo(() => o.map((m) => {
      const d = Ma(m.kind).map((v) => Sa(e, t, v)).filter((v) => v !== null);
      if (d.length === 0) return null;
      const g = {
        x: d.reduce((v, P) => v + P.x, 0) / d.length,
        y: d.reduce((v, P) => v + P.y, 0) / d.length
      }, f = m.kind.type, p = m.kind.value;
      return {
        c: m,
        type: f,
        value: p,
        points: d,
        mid: g
      };
    }).filter((m) => m !== null), [
      o,
      e,
      t
    ]), u = c.useMemo(() => n.map((m) => {
      var _a2;
      return m.kind === "footprint" ? (_a2 = e.footprints.find((x) => x.ref === m.ref)) == null ? void 0 : _a2.position : e.outline.vertices[m.idx];
    }).filter((m) => m != null), [
      n,
      e
    ]);
    return l.length === 0 && u.length === 0 ? null : i.jsxs("group", {
      children: [
        l.map(({ c: m, type: x, value: d, points: g, mid: f }) => {
          const p = d !== void 0, v = m.driven === true;
          return i.jsxs("group", {
            children: [
              p && g.length === 2 && i.jsx(Ae, {
                points: [
                  [
                    g[0].x,
                    g[0].y,
                    s
                  ],
                  [
                    g[1].x,
                    g[1].y,
                    s
                  ]
                ],
                color: v ? "#9ca3af" : "#e5e7eb",
                lineWidth: 1,
                dashed: v,
                dashSize: 0.5,
                gapSize: 0.35,
                transparent: true,
                opacity: 0.75
              }),
              i.jsx(it, {
                position: [
                  f.x,
                  f.y,
                  s
                ],
                center: true,
                zIndexRange: [
                  20,
                  0
                ],
                children: i.jsx("div", {
                  style: Ea(v),
                  children: p ? `${typeof d == "number" ? d.toFixed(2) : String(d)}${x === "angle" || x === "rotation" ? "\xB0" : ""}${v ? " (ref)" : ""}` : ba[x] ?? x
                })
              })
            ]
          }, m.id);
        }),
        u.map((m, x) => i.jsxs("mesh", {
          position: [
            m.x,
            m.y,
            s + 0.02
          ],
          children: [
            i.jsx("ringGeometry", {
              args: [
                1,
                1.25,
                24
              ]
            }),
            i.jsx("meshBasicMaterial", {
              color: "#f97316",
              transparent: true,
              opacity: 0.9
            })
          ]
        }, `pick-${x}`))
      ]
    });
  }
  function Ca({ showBoard: e = true } = {}) {
    const { invalidate: t } = Pe(), o = c.useRef(null), n = c.useRef(null), r = Tt((V) => V.activeBoardNodeId), a = oe((V) => V.document), s = r != null ? Rn(a, r) : null, l = le((V) => V.selection), u = le((V) => V.hoveredNet), m = le((V) => V.netlist), x = le((V) => V.pcbLayers), d = le((V) => V.pcbGridSize), g = le((V) => V.pcbSnapToGrid), f = le((V) => V.pcbActiveLayer), p = le((V) => V.drcViolations), v = le((V) => V.routeActive), P = le((V) => V.routePreview), b = le((V) => V.routeStartPad), h = le((V) => V.pcbTool), w = le((V) => V.pcbDragging), S = le((V) => V.stackupExplosion), C = le((V) => V.interferingFootprints), j = le((V) => V.select), R = le((V) => V.setHoveredNet), A = le((V) => V.startRouteFromRatsnest), N = le((V) => V.updateRoutePreview), W = le((V) => V.startPcbDrag), D = le((V) => V.cancelPcbDrag), F = le((V) => V.pcbConstraintTargets), _ = le((V) => V.pushConstraintTarget), X = le((V) => V.setPcbSolveStatus), se = oe((V) => V.solveDesignConstraints), re = oe((V) => V.document.constraints), xe = oe((V) => V.moveFootprint), ge = oe((V) => V.removeTrace), B = oe((V) => V.removeVia), ie = c.useMemo(() => l.type === "net" ? l.netId : l.type === "trace" || l.type === "via" || l.type === "pad" ? l.net : null, [
      l
    ]), Ce = c.useMemo(() => l.type === "footprint" || l.type === "component" ? l.ref : null, [
      l
    ]), ee = c.useRef(null), Ee = c.useCallback((V) => {
      if (!s || V.button !== 0) return;
      V.stopPropagation();
      const Ne = V.point, Xe = n.current ? n.current.worldToLocal(Ne.clone()) : Ne, ae = to(Xe, d, g);
      if (h === "move") for (let Q = s.footprints.length - 1; Q >= 0; Q--) {
        const U = s.footprints[Q], we = 5, he = 5;
        if (ae.x >= U.position.x - we && ae.x <= U.position.x + we && ae.y >= U.position.y - he && ae.y <= U.position.y + he) {
          W(Q, U.position), ee.current = {
            fpIdx: Q,
            startWorld: ae
          };
          return;
        }
      }
      if (h === "constrain") {
        for (let Q = s.footprints.length - 1; Q >= 0; Q--) {
          const U = s.footprints[Q], we = 5, he = 5;
          if (ae.x >= U.position.x - we && ae.x <= U.position.x + we && ae.y >= U.position.y - he && ae.y <= U.position.y + he) {
            _({
              kind: "footprint",
              ref: U.ref
            });
            return;
          }
        }
        for (let Q = 0; Q < s.outline.vertices.length; Q++) {
          const U = s.outline.vertices[Q];
          if (Math.hypot(ae.x - U.x, ae.y - U.y) < 1.5) {
            _({
              kind: "outlineVertex",
              idx: Q
            });
            return;
          }
        }
        return;
      }
      if (h === "select") {
        for (let Q = s.footprints.length - 1; Q >= 0; Q--) {
          const U = s.footprints[Q];
          for (const He of U.pads) {
            const Ie = U.position.x + He.position.x, Ze = U.position.y + He.position.y;
            if (Math.sqrt((ae.x - Ie) ** 2 + (ae.y - Ze) ** 2) < 1.5) {
              j({
                type: "pad",
                fpRef: U.ref,
                padNum: He.number,
                net: He.net ?? ""
              });
              return;
            }
          }
          const we = 5, he = 5;
          if (ae.x >= U.position.x - we && ae.x <= U.position.x + we && ae.y >= U.position.y - he && ae.y <= U.position.y + he) {
            j({
              type: "footprint",
              ref: U.ref
            });
            return;
          }
        }
        for (let Q = 0; Q < s.traces.length; Q++) {
          const U = s.traces[Q], we = U.end.x - U.start.x, he = U.end.y - U.start.y, He = we * we + he * he;
          if (He < 1e-6) continue;
          let Ie = ((ae.x - U.start.x) * we + (ae.y - U.start.y) * he) / He;
          Ie = Math.max(0, Math.min(1, Ie));
          const Ze = U.start.x + Ie * we, Te = U.start.y + Ie * he;
          if (Math.sqrt((ae.x - Ze) ** 2 + (ae.y - Te) ** 2) < U.width / 2 + 0.5) {
            j({
              type: "trace",
              idx: Q,
              net: U.net
            });
            return;
          }
        }
        for (let Q = 0; Q < s.vias.length; Q++) {
          const U = s.vias[Q];
          if (Math.sqrt((ae.x - U.position.x) ** 2 + (ae.y - U.position.y) ** 2) < U.diameter / 2 + 0.3) {
            j({
              type: "via",
              idx: Q,
              net: U.net
            });
            return;
          }
        }
        j({
          type: "none"
        });
      }
      if (h === "delete") {
        for (let Q = 0; Q < s.traces.length; Q++) {
          const U = s.traces[Q], we = U.end.x - U.start.x, he = U.end.y - U.start.y, He = we * we + he * he;
          if (He < 1e-6) continue;
          let Ie = ((ae.x - U.start.x) * we + (ae.y - U.start.y) * he) / He;
          Ie = Math.max(0, Math.min(1, Ie));
          const Ze = U.start.x + Ie * we, Te = U.start.y + Ie * he;
          if (Math.sqrt((ae.x - Ze) ** 2 + (ae.y - Te) ** 2) < U.width / 2 + 0.5 && r != null) {
            ge(r, Q);
            return;
          }
        }
        for (let Q = 0; Q < s.vias.length; Q++) {
          const U = s.vias[Q];
          if (Math.sqrt((ae.x - U.position.x) ** 2 + (ae.y - U.position.y) ** 2) < U.diameter / 2 + 0.3 && r != null) {
            B(r, Q);
            return;
          }
        }
      }
      if (h === "route") for (const Q of s.footprints) for (const U of Q.pads) {
        const we = Q.position.x + U.position.x, he = Q.position.y + U.position.y;
        if (Math.sqrt((ae.x - we) ** 2 + (ae.y - he) ** 2) < 1.5) {
          le.getState().startRoute(Q.ref, U.number, U.net ?? "");
          return;
        }
      }
    }, [
      s,
      h,
      d,
      g,
      r,
      j,
      W,
      ge,
      B
    ]), de = c.useCallback((V) => {
      if (!s) return;
      const Ne = V.point, Xe = n.current ? n.current.worldToLocal(Ne.clone()) : Ne, ae = to(Xe, d, g);
      if (w && r != null) {
        xe(r, w.fpIdx, {
          x: ae.x,
          y: ae.y,
          z: 0
        }), t();
        return;
      }
      v && (N([
        ae
      ]), t());
    }, [
      s,
      w,
      v,
      d,
      g,
      r,
      xe,
      N,
      t
    ]), be = c.useCallback(() => {
      if (w) {
        if (r != null && ((re == null ? void 0 : re.length) ?? 0) > 0 && s) {
          const V = s.footprints[w.fpIdx];
          if (V) {
            const Ne = se({
              extraFixed: [
                {
                  node: Number(r),
                  ref: V.ref
                }
              ]
            });
            if (Ne) {
              const Xe = Ne.groups.reduce((ae, Q) => ae + Q.dof, 0);
              X({
                converged: Ne.converged,
                dof: Xe,
                overConstrained: Ne.groups.some((ae) => ae.dof < 0)
              });
            }
          }
        }
        D();
      }
    }, [
      w,
      D,
      r,
      re,
      s,
      se,
      X
    ]);
    if (!s) return null;
    const Fe = s.outline.thickness;
    let Ge = 1 / 0, Oe = -1 / 0, Se = 1 / 0, ze = -1 / 0;
    for (const V of s.outline.vertices) V.x < Ge && (Ge = V.x), V.x > Oe && (Oe = V.x), V.y < Se && (Se = V.y), V.y > ze && (ze = V.y);
    const me = isFinite(Ge) ? (Ge + Oe) / 2 : 0, je = isFinite(Se) ? (Se + ze) / 2 : 0, Le = pt("FCu", Fe);
    return i.jsxs("group", {
      ref: n,
      children: [
        i.jsx(bo, {
          position: [
            me,
            je,
            Le - 0.05
          ],
          rotation: [
            Math.PI / 2,
            0,
            0
          ],
          args: [
            200,
            200
          ],
          cellSize: d,
          cellColor: "#333333",
          sectionSize: d * 10,
          sectionColor: "#444444",
          fadeDistance: 100,
          infiniteGrid: true
        }),
        i.jsx(Go, {
          ref: o,
          args: [
            500,
            500
          ],
          position: [
            me,
            je,
            Le
          ],
          visible: false,
          onPointerDown: Ee,
          onPointerMove: de,
          onPointerUp: be
        }),
        i.jsx(la, {
          pcb: s,
          layers: x,
          activeNet: ie,
          hoveredNet: u,
          selection: l,
          explosion: S,
          showBoard: e
        }),
        s.footprints.map((V, Ne) => i.jsx(da, {
          footprint: V,
          layers: x,
          boardThickness: Fe,
          highlight: Ce === V.ref,
          interfering: C.includes(V.ref),
          explosion: S
        }, `fp-${Ne}`)),
        i.jsx(pa, {}),
        i.jsx(ga, {
          pcb: s,
          netlist: m,
          activeNet: ie,
          hoveredNet: u,
          boardThickness: Fe,
          explosion: S,
          onStartRoute: A,
          onHoverNet: R
        }),
        v && i.jsx(ya, {
          pcb: s,
          routeStartPad: b,
          routePreview: P,
          boardThickness: Fe,
          activeLayer: f,
          explosion: S
        }),
        r != null && i.jsx(Pa, {
          pcb: s,
          nodeId: Number(r),
          constraints: re ?? [],
          pickedTargets: F,
          boardThickness: Fe,
          explosion: S
        }),
        i.jsx(wa, {
          violations: p,
          boardThickness: Fe,
          explosion: S
        })
      ]
    });
  }
  const ja = [
    {
      name: "Core 1",
      top: "FCu",
      bottom: "In1Cu"
    },
    {
      name: "Core 2",
      top: "In1Cu",
      bottom: "In2Cu"
    },
    {
      name: "Core 3",
      top: "In2Cu",
      bottom: "BCu"
    }
  ];
  function Ra({ pcb: e, explosion: t }) {
    const o = c.useMemo(() => {
      const s = e.outline.vertices;
      if (s.length < 3) return null;
      const l = new As();
      l.moveTo(s[0].x, s[0].y);
      for (let u = 1; u < s.length; u++) l.lineTo(s[u].x, s[u].y);
      if (l.closePath(), e.outline.cutouts) for (const u of e.outline.cutouts) {
        if (u.length < 3) continue;
        const m = new Ds();
        m.moveTo(u[0].x, u[0].y);
        for (let x = 1; x < u.length; x++) m.lineTo(u[x].x, u[x].y);
        m.closePath(), l.holes.push(m);
      }
      return l;
    }, [
      e.outline
    ]), n = e.outline.thickness, r = c.useMemo(() => o ? new Tn(o, {
      depth: n,
      bevelEnabled: false
    }) : null, [
      o,
      n
    ]), a = c.useMemo(() => !o || t <= 0 ? null : new Tn(o, {
      depth: 0.1,
      bevelEnabled: false
    }), [
      o,
      t
    ]);
    return r ? i.jsxs("group", {
      children: [
        i.jsx("mesh", {
          geometry: r,
          position: [
            0,
            0,
            -n / 2
          ],
          children: i.jsx("meshPhysicalMaterial", {
            color: "#0d5a2d",
            roughness: 0.5,
            metalness: 0,
            clearcoat: 1,
            clearcoatRoughness: 0.18,
            side: Ue
          })
        }),
        t > 0 && a && ja.map((s) => {
          const l = Dt(s.top, t), u = Dt(s.bottom, t), m = (l + u) / 2;
          return i.jsx("mesh", {
            geometry: a,
            position: [
              0,
              0,
              m - 0.05
            ],
            children: i.jsx("meshStandardMaterial", {
              color: "#1a7a3a",
              roughness: 0.9,
              metalness: 0,
              transparent: true,
              opacity: 0.3,
              side: Ue
            })
          }, s.name);
        })
      ]
    }) : null;
  }
  function ka({ excludeNodeId: e }) {
    const t = oe((o) => o.document);
    return ls(t).length > 0 ? null : t.pcb && e == null ? i.jsx(Ra, {
      pcb: t.pcb,
      explosion: 0
    }) : null;
  }
  class za extends c.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        failed: false
      });
    }
    static getDerivedStateFromError() {
      return {
        failed: true
      };
    }
    componentDidCatch(t) {
      console.warn("[viewport] post-processing disabled after EffectComposer error:", t == null ? void 0 : t.message);
    }
    render() {
      return this.state.failed ? null : this.props.children;
    }
  }
  function Ia({ children: e }) {
    const t = _t(), o = Rt((r) => r.view), n = c.useMemo(() => [
      o.position[0],
      o.position[1],
      o.position[2]
    ], [
      o.position
    ]);
    return t ? i.jsx("group", {
      scale: o.scale,
      position: n,
      children: e
    }) : i.jsx(i.Fragment, {
      children: e
    });
  }
  function Bo() {
    if (typeof window > "u") return null;
    const e = window;
    return e.SpeechRecognition ?? e.webkitSpeechRecognition ?? null;
  }
  function Aa() {
    return Bo() != null;
  }
  function Da(e) {
    var _a2, _b;
    const t = Bo();
    if (!t) return (_a2 = e.onError) == null ? void 0 : _a2.call(e, "Speech recognition not supported in this browser."), null;
    const o = new t();
    o.continuous = true, o.interimResults = true, o.lang = e.lang ?? "en-US";
    let n = false, r = "", a = "";
    o.onresult = (s) => {
      var _a3;
      let l = "", u = r;
      for (let m = s.resultIndex; m < s.results.length; m++) {
        const x = s.results[m];
        if (!x) continue;
        const d = ((_a3 = x[0]) == null ? void 0 : _a3.transcript) ?? "";
        x.isFinal ? u += d : l += d;
      }
      r = u, a = l, e.onTranscript((u + l).trim(), false);
    }, o.onerror = (s) => {
      var _a3;
      const l = s.error ?? "unknown";
      (_a3 = e.onError) == null ? void 0 : _a3.call(e, l);
    }, o.onend = () => {
      var _a3;
      if (n) return;
      n = true;
      const s = (r + a).trim();
      s && e.onTranscript(s, true), (_a3 = e.onEnd) == null ? void 0 : _a3.call(e);
    };
    try {
      o.start();
    } catch (s) {
      return (_b = e.onError) == null ? void 0 : _b.call(e, s.message), null;
    }
    return {
      stop() {
        if (!n) try {
          o.stop();
        } catch {
        }
      }
    };
  }
  const Ta = 0.025, _a = 0.04, Fa = 0.4, La = 5e-3, Na = 0.5, Oa = 1e3, io = 1e-4, ao = 10;
  function ln(e, t, o, n, r) {
    var _a2;
    const a = t.get(o);
    if (!a) return false;
    const s = (_a2 = e.getJointPose) == null ? void 0 : _a2.call(e, a, n);
    if (!s) return false;
    const l = s.transform.position;
    return r.set(l.x, l.y, l.z), true;
  }
  const un = new E(), dn = new E(), co = new E();
  function Ba(e, t, o, n, r) {
    if (!ln(e, t, "thumb-tip", o, un) || !ln(e, t, "index-finger-tip", o, dn) || !ln(e, t, "wrist", o, co)) return false;
    const a = un.distanceTo(dn), s = n ? a < _a : a < Ta;
    return r.pinching = s, r.midpoint.copy(un).add(dn).multiplyScalar(0.5), r.reach.copy(r.midpoint).sub(co).normalize(), true;
  }
  function Va(e) {
    var _a2;
    let t = e;
    for (; t; ) {
      const o = (_a2 = t.userData) == null ? void 0 : _a2.partId;
      if (typeof o == "string") return o;
      t = t.parent;
    }
    return null;
  }
  const fn = new gn(), lo = new E(), uo = new E();
  function $a(e, t, o) {
    lo.copy(t).addScaledVector(o, -0.02), uo.copy(o), fn.set(lo, uo), fn.far = Fa + 0.02;
    const n = fn.intersectObject(e, true);
    for (const r of n) {
      const a = Va(r.object);
      if (a) return a;
    }
    return null;
  }
  const Wa = 800, mt = new E(), ht = new E(), bt = new E(), Vt = new E();
  function Ga() {
    const e = _t(), { gl: t, scene: o } = Pe(), n = c.useRef({
      pinching: false,
      midpoint: new E()
    }), r = c.useRef({
      pinching: false,
      midpoint: new E()
    }), a = c.useRef(null), s = c.useRef({
      pinching: false,
      midpoint: new E(),
      reach: new E()
    }), l = c.useRef(null), u = c.useRef(null), m = c.useRef("");
    return c.useEffect(() => () => {
      var _a2;
      (_a2 = u.current) == null ? void 0 : _a2.stop(), u.current = null;
    }, []), Qe((x, d, g) => {
      if (!e) return;
      const f = g;
      if (!f) return;
      const p = t.xr.getSession(), v = t.xr.getReferenceSpace();
      if (!p || !v) return;
      for (const j of p.inputSources) {
        if (!j.hand) continue;
        const R = j.handedness === "left" ? n : r, A = s.current;
        if (Ba(f, j.hand, v, R.current.pinching, A) && (R.current.pinching = A.pinching, R.current.midpoint.copy(A.midpoint), A.pinching && a.current == null)) {
          const N = $a(o, A.midpoint, A.reach);
          N && (a.current = {
            kind: "fillet",
            partId: N
          });
        }
      }
      const P = n.current, b = r.current, h = P.pinching && b.pinching;
      if ((P.pinching && !b.pinching || !P.pinching && b.pinching) && a.current == null && Aa()) {
        const j = performance.now(), R = l.current;
        if (R == null) l.current = {
          startedAt: j
        };
        else if (u.current == null && j - R.startedAt >= Wa) {
          m.current = "";
          const A = Da({
            lang: "en-US",
            onTranscript: (N, W) => {
              W && (m.current = N);
            },
            onEnd: () => {
              const N = m.current.trim();
              if (u.current = null, m.current = "", !N) return;
              const W = Array.from($.getState().selectedPartIds), D = oe.getState().parts, F = W.map((_) => {
                const X = D.find((se) => se.id === _);
                return X ? {
                  partId: X.id,
                  partName: X.name ?? X.id,
                  geometryType: "part"
                } : null;
              }).filter((_) => _ != null);
              us.getState().sendMessage(N, F, []);
            },
            onError: () => {
              u.current = null;
            }
          });
          A && (u.current = A);
        }
      } else if (l.current && (l.current = null), u.current) {
        const j = u.current;
        u.current = null, j.stop();
      }
      if (h && a.current == null) {
        mt.copy(P.midpoint), ht.copy(b.midpoint);
        const j = mt.distanceTo(ht);
        bt.copy(mt).add(ht).multiplyScalar(0.5);
        const R = Rt.getState().view, A = new E().copy(bt).sub(new E(...R.position)).divideScalar(R.scale);
        a.current = {
          kind: "scale",
          initialAnchor: bt.clone(),
          initialDistance: j,
          initialView: R,
          sceneAnchor: A
        };
      }
      const S = a.current;
      if (S && S.kind === "scale" && h) {
        mt.copy(P.midpoint), ht.copy(b.midpoint);
        const j = mt.distanceTo(ht);
        bt.copy(mt).add(ht).multiplyScalar(0.5);
        const R = S.initialDistance > 1e-6 ? j / S.initialDistance : 1;
        let A = S.initialView.scale * R;
        A < io && (A = io), A > ao && (A = ao), Vt.copy(S.sceneAnchor).multiplyScalar(A).multiplyScalar(-1).add(bt), Rt.getState().setView({
          scale: A,
          position: [
            Vt.x,
            Vt.y,
            Vt.z
          ]
        });
        return;
      }
      if (!(!S || !(!P.pinching || !b.pinching))) {
        if (S.kind === "fillet") {
          const j = P.midpoint.distanceTo(b.midpoint);
          if (a.current = null, j < La || j > Na) return;
          const R = Rt.getState().view, A = R.scale > 1e-9 ? 1e-3 / R.scale : 1, N = j * Oa * A;
          oe.getState().addFillet(S.partId, N);
          return;
        }
        if (S.kind === "scale") {
          a.current = null;
          return;
        }
      }
    }), null;
  }
  const Ha = 5e3, Ct = So((e, t) => ({
    peers: /* @__PURE__ */ new Map(),
    ingest: (o) => e((n) => {
      const r = new Map(n.peers);
      return r.set(o.userId, o), {
        peers: r
      };
    }),
    drop: (o) => e((n) => {
      if (!n.peers.has(o)) return n;
      const r = new Map(n.peers);
      return r.delete(o), {
        peers: r
      };
    }),
    pruneStale: () => {
      const o = Date.now(), n = t().peers;
      let r = false;
      const a = new Map(n);
      for (const [s, l] of n) o - l.ts > Ha && (a.delete(s), r = true);
      r && e({
        peers: a
      });
    },
    clear: () => e({
      peers: /* @__PURE__ */ new Map()
    })
  })), Ya = 100, Xa = 2e3, fo = new E(), St = new st(), $t = new E();
  function po(e, t, o) {
    t.copy(e).sub(new E(o.position[0], o.position[1], o.position[2])).divideScalar(o.scale);
  }
  function Ua() {
    var _a2, _b;
    const e = _t(), { camera: t, gl: o } = Pe(), n = ds((u) => u.cloudId), a = (_b = (_a2 = fs((u) => u.user)) == null ? void 0 : _a2.user_metadata) == null ? void 0 : _b.name, s = c.useRef(null), l = c.useRef(0);
    return c.useEffect(() => {
      if (!e || !n) return;
      const u = Ct.getState().ingest, m = Ct.getState().drop, x = Ys(n, u, m);
      return s.current = x, () => {
        x == null ? void 0 : x.leave(), s.current = null, Ct.getState().clear();
      };
    }, [
      e,
      n
    ]), c.useEffect(() => {
      if (!e) return;
      const u = window.setInterval(() => Ct.getState().pruneStale(), Xa);
      return () => window.clearInterval(u);
    }, [
      e
    ]), Qe((u, m, x) => {
      var _a3;
      if (!e || !s.current) return;
      const d = performance.now();
      if (d - l.current < Ya) return;
      l.current = d;
      const g = Rt.getState().view;
      t.getWorldPosition(fo), t.getWorldQuaternion(St), po(fo, $t, g);
      let f, p;
      const v = x, P = o.xr.getSession(), b = o.xr.getReferenceSpace();
      if (v && P && b) for (const h of P.inputSources) {
        if (!h.hand) continue;
        const w = h.hand.get("wrist");
        if (!w) continue;
        const S = (_a3 = v.getJointPose) == null ? void 0 : _a3.call(v, w, b);
        if (!S) continue;
        const C = new E(S.transform.position.x, S.transform.position.y, S.transform.position.z), j = new E();
        po(C, j, g);
        const R = [
          j.x,
          j.y,
          j.z
        ];
        h.handedness === "left" ? f = R : h.handedness === "right" && (p = R);
      }
      s.current.broadcast({
        name: a,
        pose: {
          head: [
            $t.x,
            $t.y,
            $t.z
          ],
          headRot: [
            St.x,
            St.y,
            St.z,
            St.w
          ],
          leftHand: f,
          rightHand: p
        }
      });
    }), i.jsx(qa, {});
  }
  function qa() {
    const e = Ct((o) => o.peers), t = Array.from(e.values());
    return t.length === 0 ? null : i.jsx("group", {
      children: t.map((o) => i.jsx(Ka, {
        update: o
      }, o.userId))
    });
  }
  const mo = new st(), Wt = new Zt();
  function Ka({ update: e }) {
    const t = e.color ?? "#c084fc", o = e.pose.head;
    return mo.set(e.pose.headRot[0], e.pose.headRot[1], e.pose.headRot[2], e.pose.headRot[3]), Wt.setFromQuaternion(mo), i.jsxs("group", {
      children: [
        i.jsxs("mesh", {
          position: o,
          rotation: [
            Wt.x,
            Wt.y,
            Wt.z
          ],
          children: [
            i.jsx("boxGeometry", {
              args: [
                140,
                100,
                100
              ]
            }),
            i.jsx("meshStandardMaterial", {
              color: t,
              emissive: t,
              emissiveIntensity: 0.3
            })
          ]
        }),
        e.pose.leftHand && i.jsxs("mesh", {
          position: e.pose.leftHand,
          children: [
            i.jsx("sphereGeometry", {
              args: [
                40,
                12,
                12
              ]
            }),
            i.jsx("meshStandardMaterial", {
              color: t,
              emissive: t,
              emissiveIntensity: 0.25
            })
          ]
        }),
        e.pose.rightHand && i.jsxs("mesh", {
          position: e.pose.rightHand,
          children: [
            i.jsx("sphereGeometry", {
              args: [
                40,
                12,
                12
              ]
            }),
            i.jsx("meshStandardMaterial", {
              color: t,
              emissive: t,
              emissiveIntensity: 0.25
            })
          ]
        })
      ]
    });
  }
  const Za = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, Ja = new E(), Qa = new E();
  function pn() {
    const e = $.getState();
    e.followMode === "lock" && (e.setFollowMode("free"), e.setFollowingParticipant(null));
  }
  const ec = {
    studio: "studio",
    warehouse: "warehouse",
    apartment: "apartment",
    park: "park",
    city: "city",
    dawn: "dawn",
    night: "night",
    sunset: "sunset",
    forest: "forest",
    neutral: "studio"
  };
  function tc(e) {
    return {
      environment: {
        type: "None"
      },
      lights: [
        {
          id: "key",
          kind: {
            type: "Directional",
            direction: {
              x: 0.5,
              y: -0.8,
              z: 0.4
            }
          },
          color: [
            1,
            0.98,
            0.95
          ],
          intensity: e ? 1.4 : 1.2,
          castShadow: true
        },
        {
          id: "fill",
          kind: {
            type: "Directional",
            direction: {
              x: -0.3,
              y: -0.4,
              z: -0.2
            }
          },
          color: [
            0.95,
            0.97,
            1
          ],
          intensity: e ? 0.5 : 0.4
        },
        {
          id: "rim",
          kind: {
            type: "Directional",
            direction: {
              x: -0.5,
              y: -0.2,
              z: 0.5
            }
          },
          color: [
            1,
            1,
            1
          ],
          intensity: e ? 0.35 : 0.2
        }
      ],
      background: {
        type: "Solid",
        color: [
          0,
          0,
          0
        ]
      },
      postProcessing: e ? {
        ambientOcclusion: {
          enabled: true,
          intensity: 1.8,
          radius: 0.5
        },
        vignette: {
          enabled: true,
          offset: 0.5,
          darkness: 0.15
        }
      } : {
        ambientOcclusion: {
          enabled: true,
          intensity: 1.5,
          radius: 0.5
        },
        vignette: {
          enabled: true,
          offset: 0.5,
          darkness: 0.1
        }
      }
    };
  }
  function nc(e, t) {
    const o = tc(t);
    return e ? {
      environment: e.environment ?? o.environment,
      lights: e.lights ?? o.lights,
      background: e.background ?? o.background,
      postProcessing: e.postProcessing ?? o.postProcessing
    } : o;
  }
  function oc(e, t = 100) {
    return [
      -e.x * t,
      -e.y * t,
      -e.z * t
    ];
  }
  function ho(e) {
    const t = e;
    return t.id ?? t.instanceId ?? t.partDefId ?? "";
  }
  const xo = new At(), xt = new E(), Gt = new E(), go = new E(), yo = new E();
  function Mt(e, t, o) {
    xt.subVectors(t, e).normalize();
    const n = new E(0, 1, 0);
    return Math.abs(xt.dot(n)) > 0.999 ? Gt.crossVectors(new E(0, 0, 1), xt).normalize() : Gt.crossVectors(xt, n).normalize(), go.crossVectors(Gt, xt), yo.copy(xt).negate(), xo.makeBasis(Gt, go, yo), o.setFromRotationMatrix(xo), o;
  }
  function sc() {
    const e = ot((n) => n.showBoundaryEdges), t = ot((n) => n.toggleBoundaryEdges), o = De((n) => n.scene);
    return c.useEffect(() => {
      const n = (r) => {
        r.ctrlKey && r.shiftKey && (r.key === "B" || r.key === "b") && (r.preventDefault(), t());
      };
      return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
    }, [
      t
    ]), !e || !o ? null : i.jsx(i.Fragment, {
      children: o.parts.map((n, r) => n.mesh.positions.length ? i.jsx(br, {
        positions: n.mesh.positions,
        indices: n.mesh.indices
      }, `boundary-${r}`) : null)
    });
  }
  function rc() {
    const e = ot((o) => o.inspectTriangles), t = ot((o) => o.toggleInspectTriangles);
    return c.useEffect(() => {
      const o = (n) => {
        n.ctrlKey && n.shiftKey && (n.key === "T" || n.key === "t") && (n.preventDefault(), t());
      };
      return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
    }, [
      t
    ]), e ? i.jsx(cr, {}) : null;
  }
  function ic({ direction: e, color: t, intensity: o, bounds: n }) {
    const r = c.useRef(null), { center: a, radius: s } = n, l = Math.max(s, 10);
    return c.useEffect(() => {
      const u = r.current;
      if (!u) return;
      const m = new E(e.x, e.y, e.z).normalize();
      u.position.set(a[0] - m.x * l * 2.5, a[1] - m.y * l * 2.5, a[2] - m.z * l * 2.5), u.target.position.set(a[0], a[1], a[2]), u.target.updateMatrixWorld();
      const x = u.shadow.camera;
      x.left = -l * 1.3, x.right = l * 1.3, x.top = l * 1.3, x.bottom = -l * 1.3, x.near = 0.1, x.far = l * 6, x.updateProjectionMatrix(), u.shadow.needsUpdate = true;
    }, [
      e.x,
      e.y,
      e.z,
      a,
      l
    ]), i.jsx("directionalLight", {
      ref: r,
      intensity: o,
      color: t,
      castShadow: true,
      "shadow-mapSize-width": 2048,
      "shadow-mapSize-height": 2048,
      "shadow-bias": -1e-4,
      "shadow-normalBias": 0.02
    });
  }
  function ac({ mode: e = "3d", pcbEditFocus: t = false }) {
    var _a2, _b;
    Oi(), Vi(), $i(), Wi(), Ji();
    const o = e === "pcb", [n, r] = c.useState(false), a = De((y) => y.engineReady), s = De((y) => y.scene), l = De((y) => y.previewMesh), u = oe((y) => y.parts), m = oe((y) => y.document.instances), x = oe((y) => y.document.partDefs), d = oe((y) => y.document.roots), g = oe((y) => y.document.scene), f = oe((y) => y.document.molecule), p = jt((y) => y.molecule), v = jt((y) => y.representation), P = p ?? f ?? null, b = $((y) => y.selectedPartIds), h = $((y) => y.selection), w = $((y) => y.isDraggingGizmo), S = $((y) => y.setOrbiting), C = $((y) => y.renderMode), j = $((y) => y.raytraceAvailable), R = ke((y) => y.active), A = Tt((y) => y.activeBoardNodeId), N = c.useMemo(() => {
      if (!t || A == null) return null;
      const y = hn(u, A);
      return y ? Eo(oe.getState().document, y) : null;
    }, [
      t,
      A,
      u
    ]), W = c.useMemo(() => {
      var _a3;
      return !t || A == null ? null : ((_a3 = hn(u, A)) == null ? void 0 : _a3.id) ?? null;
    }, [
      t,
      A,
      u
    ]), D = _t(), F = c.useRef(null), { camera: _, invalidate: X } = Pe(), { isDark: se } = at(), re = Yt(), xe = Ws(re), ge = Gs(re), { zoomBehavior: B, orbitMomentum: ie } = re, Ce = c.useRef(new gn()), ee = c.useRef(new _n()), Ee = c.useRef(X);
    Ee.current = X;
    const de = c.useRef(new Ts()), be = c.useRef(new E()), Fe = c.useRef({
      theta: 0,
      phi: 0
    }), Ge = c.useRef(false), Oe = c.useRef(new E()), Se = c.useRef(new E()), ze = c.useRef(null), me = c.useRef(false), je = c.useRef(null), Le = c.useRef(new st()), V = c.useCallback(() => {
      me.current && (me.current = false, ze.current = null, je.current = null, F.current && (F.current.enabled = true), r(false));
    }, []), Ne = c.useMemo(() => {
      const y = /* @__PURE__ */ new Map();
      if (!m || !x) return y;
      const I = /* @__PURE__ */ new Map();
      d.forEach((L, Y) => {
        I.set(L.root, Y);
      });
      for (const L of m) {
        const Y = x[L.partDefId];
        if (!Y) continue;
        const K = I.get(Y.root);
        K !== void 0 && y.set(K, L.id);
      }
      return y;
    }, [
      m,
      x,
      d
    ]), Xe = c.useMemo(() => d.map((y, I) => y.visible !== false ? I : -1).filter((y) => y >= 0), [
      d
    ]), ae = c.useCallback((y, I) => {
      if (b.has(y)) return true;
      const L = Ne.get(I);
      return !!(L && b.has(L));
    }, [
      b,
      Ne
    ]), Q = c.useMemo(() => {
      const y = {
        center: [
          0,
          30,
          0
        ],
        radius: 120
      };
      if (!s) return y;
      let I = 1 / 0, L = 1 / 0, Y = 1 / 0, K = -1 / 0, ce = -1 / 0, fe = -1 / 0;
      const H = (G, Z, te) => {
        const J = G, M = te, z = -Z;
        J < I && (I = J), M < L && (L = M), z < Y && (Y = z), J > K && (K = J), M > ce && (ce = M), z > fe && (fe = z);
      }, Me = (G, Z) => {
        for (let J = 0; J + 2 < G.length; J += 48) {
          const M = G[J], z = G[J + 1], T = G[J + 2];
          Z ? H(M * Z.scale.x + Z.translation.x, z * Z.scale.y + Z.translation.y, T * Z.scale.z + Z.translation.z) : H(M, z, T);
        }
      };
      for (const G of s.parts ?? []) Me(G.mesh.positions);
      for (const G of s.instances ?? []) Me(G.mesh.positions, G.transform ?? null);
      if (!Number.isFinite(I)) return y;
      const Re = [
        (I + K) / 2,
        (L + ce) / 2,
        (Y + fe) / 2
      ], ue = Math.hypot(K - I, ce - L, fe - Y) / 2 || 60;
      return {
        center: Re,
        radius: ue
      };
    }, [
      s
    ]), U = c.useMemo(() => {
      if (h.length === 0 || !s) return null;
      const y = h.some((ue) => ue.kind === "face" || ue.kind === "edge" || ue.kind === "vertex"), I = new rt(), L = new E();
      let Y = false;
      const K = (ue) => {
        var _a3;
        const G = u.findIndex((te) => te.id === ue);
        if (G < 0) return null;
        const Z = Xe.indexOf(G);
        return Z < 0 ? null : ((_a3 = s.parts[Z]) == null ? void 0 : _a3.mesh) ?? null;
      };
      for (const ue of h) switch (ue.kind) {
        case "part": {
          if (s.instances && s.instances.length > 0) for (const G of s.instances) {
            if (ho(G) !== ue.id) continue;
            const te = G.mesh.positions, J = G.transform ?? {
              translation: {
                x: 0,
                y: 0,
                z: 0
              },
              scale: {
                x: 1,
                y: 1,
                z: 1
              }
            };
            for (let M = 0; M < te.length; M += 3) L.set(te[M] * J.scale.x + J.translation.x, te[M + 1] * J.scale.y + J.translation.y, te[M + 2] * J.scale.z + J.translation.z), I.expandByPoint(L), Y = true;
          }
          Xe.forEach((G, Z) => {
            const te = u[G];
            if (!te || !ae(te.id, G) || te.id !== ue.id) return;
            const J = s.parts[Z];
            if (!J) return;
            const M = J.mesh.positions;
            for (let z = 0; z < M.length; z += 3) L.set(M[z], M[z + 1], M[z + 2]), I.expandByPoint(L), Y = true;
          });
          break;
        }
        case "face": {
          const G = K(ue.partId);
          if (!G) break;
          const Z = Ro(G, ue.faceIndex);
          for (const te of Z) for (let J = 0; J < 3; J++) {
            const M = G.indices[te * 3 + J];
            L.set(G.positions[M * 3], G.positions[M * 3 + 1], G.positions[M * 3 + 2]), I.expandByPoint(L), Y = true;
          }
          break;
        }
        case "edge": {
          const G = K(ue.partId);
          if (!G) break;
          const { a: Z, b: te } = ko(G, ue.edgeId);
          I.expandByPoint(Z), I.expandByPoint(te), Y = true;
          break;
        }
        case "vertex": {
          const G = K(ue.partId);
          if (!G) break;
          const Z = zo(G, ue.vertexId);
          I.expandByPoint(Z), Y = true;
          break;
        }
      }
      if (!Y) return null;
      const ce = new E();
      I.getCenter(ce);
      const fe = new E();
      I.getSize(fe);
      const H = Math.max(fe.length() * 0.5, 1);
      return {
        center: new E(ce.x, ce.z, -ce.y),
        radius: H,
        mode: y ? "pan-only" : "fit"
      };
    }, [
      h,
      s,
      u,
      ae,
      Xe
    ]);
    c.useEffect(() => {
      if (U && !w) {
        if (Se.current.copy(U.center), U.mode === "fit") if (_ instanceof Qt) {
          const I = _.fov * Math.PI / 180, L = 2 * Math.atan(Math.tan(I / 2) * _.aspect), Y = Math.min(I, L), K = U.radius / Math.sin(Y / 2) * 1.2;
          ze.current = Math.max(_.near * 2, K);
        } else ze.current = U.radius * 3 * 1.2;
        else ze.current = null;
        me.current = true, r(true);
      }
    }, [
      U,
      w,
      _
    ]), Qe(() => {
      if (!me.current || !F.current) return;
      const y = F.current.target, I = Se.current, L = ze.current, Y = je.current, K = 0.1;
      if (y.lerp(I, K), Y !== null) _.position.lerp(Y, K), _.quaternion.slerp(Le.current, K), y.copy(I);
      else if (L !== null) {
        const Me = be.current.subVectors(_.position, y), Re = Me.length(), ue = Re + (L - Re) * K;
        Me.normalize().multiplyScalar(ue), _.position.copy(y).add(Me);
      }
      const ce = y.distanceTo(I) < 0.01, fe = L === null || Math.abs(be.current.subVectors(_.position, y).length() - L) < 0.1, H = Y === null || _.position.distanceTo(Y) < 0.1;
      ce && fe && H ? (y.copy(I), Y && (_.position.copy(Y), _.quaternion.copy(Le.current)), F.current && (F.current.enabled = true), me.current = false, ze.current = null, je.current = null, r(false)) : X();
    }), c.useEffect(() => {
      const y = () => {
        $.getState().followMode !== "free" && X();
      }, I = $.subscribe(y), L = zt.subscribe(y);
      return () => {
        I(), L();
      };
    }, [
      X
    ]), c.useEffect(() => {
      let y = 0, I = 0;
      const L = () => {
        X(), ++I < 36 && (y = requestAnimationFrame(L));
      };
      return L(), () => cancelAnimationFrame(y);
    }, [
      X
    ]), c.useEffect(() => {
      X();
    }, [
      X,
      s,
      l,
      a
    ]), c.useEffect(() => {
      const y = () => X(), I = () => {
        document.visibilityState === "visible" && X();
      }, L = oe.subscribe(y);
      return window.addEventListener("focus", y), window.addEventListener("pageshow", y), document.addEventListener("visibilitychange", I), () => {
        L(), window.removeEventListener("focus", y), window.removeEventListener("pageshow", y), document.removeEventListener("visibilitychange", I);
      };
    }, [
      X
    ]), Qe(() => {
      const { followMode: y, followingParticipantId: I } = $.getState();
      if (y === "free" || !I) return;
      const L = zt.getState().participants.get(I);
      if (!(L == null ? void 0 : L.camera)) return;
      const [Y, K, ce] = dt(L.camera.position), fe = Ja.set(Y, K, ce);
      if (y === "lock") {
        me.current && V();
        const [Me, Re, ue] = dt(L.camera.target), G = Qa.set(Me, Re, ue);
        _.position.copy(fe), F.current ? (F.current.target.copy(G), F.current.update()) : _.lookAt(G), X();
        return;
      }
      if (me.current) return;
      F.current ? (F.current.target.lerp(fe, 0.15), F.current.update(), F.current.target.distanceToSquared(fe) > 1e-4 && X()) : _.lookAt(fe);
    }), c.useEffect(() => {
      const y = F.current, I = y == null ? void 0 : y.domElement;
      if (!I) return;
      const L = 1, Y = 0;
      let K = false;
      const ce = () => {
        K || (K = true, requestAnimationFrame(() => {
          K = false, y.update(), Ee.current();
        }));
      }, fe = () => {
        if (!ie) {
          Ge.current = false, Fe.current.theta = 0, Fe.current.phi = 0;
          return;
        }
        const G = Fe.current;
        if (Math.abs(G.theta) < 1e-4 && Math.abs(G.phi) < 1e-4) {
          Ge.current = false, G.theta = 0, G.phi = 0;
          return;
        }
        const Z = y.target, te = be.current.subVectors(_.position, Z), J = de.current.setFromVector3(te);
        J.theta += G.theta * L, J.phi += G.phi * L, J.phi = Math.max(0.01, Math.min(Math.PI - 0.01, J.phi)), G.theta *= Y, G.phi *= Y, te.setFromSpherical(J), _.position.copy(Z).add(te), _.lookAt(Z), y.update(), Ee.current(), requestAnimationFrame(fe);
      }, H = (G, Z, te) => {
        const J = 2e-3 * B.sensitivity;
        let M = -(Math.abs(te) > Math.abs(Z) ? te : Z) * J;
        B.invertDirection && (M = -M);
        const z = y.target, T = be.current.subVectors(_.position, z), O = T.length(), q = Math.max(1, O * (1 + M));
        if (B.zoomTowardsCursor) {
          const ne = I.getBoundingClientRect();
          ee.current.x = (G.clientX - ne.left) / ne.width * 2 - 1, ee.current.y = -((G.clientY - ne.top) / ne.height) * 2 + 1, Ce.current.setFromCamera(ee.current, _);
          const pe = Oe.current;
          Ce.current.ray.at(O, pe);
          const ye = 1 - q / O;
          z.lerp(pe, ye * 0.5);
        }
        T.normalize().multiplyScalar(q), _.position.copy(z).add(T), ce();
      }, Me = (G, Z) => {
        const te = y.target, z = be.current.subVectors(_.position, te).length() * 2e-3, T = new E(), O = new E();
        _.matrix.extractBasis(T, O, new E());
        const q = T.multiplyScalar(G * z).add(O.multiplyScalar(-Z * z));
        _.position.add(q), te.add(q), ce();
      }, Re = (G, Z, te) => {
        const J = 2 * Math.PI / I.clientHeight;
        if (te && ie) Fe.current.theta += G * J, Fe.current.phi += Z * J, Ge.current || (Ge.current = true, requestAnimationFrame(fe));
        else {
          const M = y.target, z = be.current.subVectors(_.position, M), T = de.current.setFromVector3(z);
          T.theta += G * J, T.phi += Z * J, T.phi = Math.max(0.01, Math.min(Math.PI - 0.01, T.phi)), z.setFromSpherical(T), _.position.copy(M).add(z), _.lookAt(M), ce();
        }
      }, ue = (G) => {
        G.preventDefault(), G.stopPropagation(), V(), pn();
        let Z = G.deltaX, te = G.deltaY;
        G.deltaMode === 1 && (Z *= 16, te *= 16), G.deltaMode === 2 && (Z *= 100, te *= 100);
        const J = ea(G), M = ta(xe.scrollBindings, J, ge), z = xe.trackpadOrbitEnabled && ge === "trackpad";
        switch (M) {
          case "zoom":
            H(G, Z, te);
            break;
          case "pan":
            Me(Z, te);
            break;
          case "orbit":
            Re(Z, te, z);
            break;
        }
      };
      return I.addEventListener("wheel", ue, {
        passive: false
      }), () => I.removeEventListener("wheel", ue);
    }, [
      _,
      xe,
      ge,
      B,
      ie,
      V
    ]), c.useEffect(() => {
      const y = F.current;
      if (!y) return;
      const I = y.domElement, L = () => {
        S(true), r(true), pn();
      }, Y = () => {
        S(false), r(false);
      }, K = () => {
        V(), pn();
      };
      return y.addEventListener("start", L), y.addEventListener("end", Y), I == null ? void 0 : I.addEventListener("pointerdown", K), () => {
        y.removeEventListener("start", L), y.removeEventListener("end", Y), I == null ? void 0 : I.removeEventListener("pointerdown", K);
      };
    }, [
      S,
      V
    ]), c.useEffect(() => {
      var _a3;
      const I = (_a3 = F.current) == null ? void 0 : _a3.domElement;
      if (!I) return;
      const L = () => {
        $.getState().selectedPartIds.size > 0 || window.dispatchEvent(new CustomEvent("vcad:camera-fit"));
      };
      return I.addEventListener("dblclick", L), () => I.removeEventListener("dblclick", L);
    }, []), c.useEffect(() => {
      var _a3;
      const I = (_a3 = F.current) == null ? void 0 : _a3.domElement;
      if (!I) return;
      const L = new _s(new E(0, 1, 0), 0), Y = new _n(), K = new gn(), ce = new E();
      let fe = false, H = null;
      const Me = () => {
        fe = false;
        const G = H;
        if (!G) return;
        const Z = I.getBoundingClientRect();
        if (Y.x = (G.clientX - Z.left) / Z.width * 2 - 1, Y.y = -((G.clientY - Z.top) / Z.height) * 2 + 1, K.setFromCamera(Y, _), !K.ray.intersectPlane(L, ce)) {
          $.getState().setCursorWorld(null);
          return;
        }
        $.getState().setCursorWorld({
          x: ce.x,
          y: -ce.z,
          z: ce.y
        });
      }, Re = (G) => {
        H = G, !fe && (fe = true, requestAnimationFrame(Me));
      }, ue = () => {
        H = null, $.getState().setCursorWorld(null);
      };
      return I.addEventListener("pointermove", Re), I.addEventListener("pointerleave", ue), () => {
        I.removeEventListener("pointermove", Re), I.removeEventListener("pointerleave", ue), $.getState().setCursorWorld(null);
      };
    }, [
      _
    ]), c.useEffect(() => {
      const y = (I) => {
        const { normal: L, centroid: Y, vertices: K } = I.detail, ce = new E(L.x, L.z, -L.y).normalize(), fe = new E(Y.x, Y.z, -Y.y);
        let H = 60;
        if (K && K.length >= 3) {
          const Re = new E(0, 1, 0);
          Math.abs(ce.dot(Re)) > 0.95 && Re.set(1, 0, 0);
          const ue = new E().crossVectors(Re, ce).normalize(), G = new E().crossVectors(ce, ue).normalize();
          let Z = 1 / 0, te = -1 / 0, J = 1 / 0, M = -1 / 0;
          const z = new E();
          for (const ne of K) {
            const pe = new E(ne.x, ne.z, -ne.y);
            z.subVectors(pe, fe);
            const ye = z.dot(ue), ve = z.dot(G);
            ye < Z && (Z = ye), ye > te && (te = ye), ve < J && (J = ve), ve > M && (M = ve);
          }
          const T = Math.max(1, te - Z), O = Math.max(1, M - J), q = 1.2;
          if (_ instanceof Qt) {
            const ne = _.fov * Math.PI / 180, pe = 2 * Math.atan(Math.tan(ne / 2) * _.aspect), ye = O / 2 / Math.tan(ne / 2), ve = T / 2 / Math.tan(pe / 2);
            H = Math.max(ye, ve, 10) * q;
          } else H = Math.max(T, O, 10) * q;
        }
        const Me = new E(fe.x + ce.x * H, fe.y + ce.y * H, fe.z + ce.z * H);
        Se.current.copy(fe), je.current = Me, ze.current = H, Mt(Me, fe, Le.current), F.current && (F.current.enabled = false), me.current = true, r(true);
      };
      return window.addEventListener("vcad:face-selected", y), () => window.removeEventListener("vcad:face-selected", y);
    }, [
      _
    ]), c.useEffect(() => {
      const I = {
        front: [
          0,
          0,
          80
        ],
        back: [
          0,
          0,
          -80
        ],
        right: [
          80,
          0,
          0
        ],
        left: [
          -80,
          0,
          0
        ],
        top: [
          0,
          80,
          0
        ],
        bottom: [
          0,
          -80,
          0
        ],
        iso: [
          50,
          50,
          50
        ],
        hero: [
          60,
          45,
          60
        ]
      }, L = (Y) => {
        const K = Y.detail, ce = I[K];
        if (!ce) return;
        const fe = new E(ce[0], ce[1], ce[2]), H = new E(0, 0, 0);
        Se.current.copy(H), je.current = fe, ze.current = null, Mt(fe, H, Le.current), F.current && (F.current.enabled = false), me.current = true, r(true);
      };
      return window.addEventListener("vcad:snap-view", L), () => window.removeEventListener("vcad:snap-view", L);
    }, []);
    const we = Pe((y) => y.size.width / Math.max(1, y.size.height));
    c.useEffect(() => {
      const y = (I) => {
        const { planeNormal: L, planeCenter: Y, width: K, height: ce } = I.detail, [fe, H, Me] = dt([
          Y.x,
          Y.y,
          Y.z
        ]), [Re, ue, G] = dt([
          L.x,
          L.y,
          L.z
        ]), Z = Math.hypot(Re, ue, G) || 1, te = new E(Re / Z, ue / Z, G / Z), J = _, M = (J.isPerspectiveCamera ? J.fov : 50) * (Math.PI / 180), z = J.isPerspectiveCamera ? J.aspect : we, T = 1.2, O = Math.max(K, 1), ne = Math.max(ce, 1) / 2 / Math.tan(M / 2), pe = O / 2 / (z * Math.tan(M / 2)), ye = Math.max(ne, pe, 10) * T;
        Se.current.set(fe, H, Me);
        const ve = new E(fe + te.x * ye, H + te.y * ye, Me + te.z * ye);
        je.current = ve, ze.current = ye, Mt(ve, Se.current, Le.current), F.current && (F.current.enabled = false), me.current = true, r(true);
      };
      return window.addEventListener("vcad:fit-sketch", y), () => window.removeEventListener("vcad:fit-sketch", y);
    }, [
      _,
      we
    ]);
    const he = Pe((y) => y.gl), He = Pe((y) => y.scene), Ie = Pe((y) => y.size), Ze = Bi();
    c.useEffect(() => {
      Ze || X();
    }, [
      Ze,
      X
    ]), c.useEffect(() => {
      const y = (L) => {
        const Y = Math.max(1, Ie.width), K = Math.max(1, Ie.height), [ce, fe, H] = dt(L.position), [Me, Re, ue] = dt(L.target), G = new Qt(50, Y / K, 0.1, 1e4);
        G.up.set(0, 1, 0), G.position.set(ce, fe, H), G.lookAt(Me, Re, ue), G.updateMatrixWorld();
        const Z = new Fs(Y, K, {
          samples: 4,
          colorSpace: yn
        }), te = he.getRenderTarget(), J = he.toneMapping, M = he.toneMappingExposure, z = he.outputColorSpace;
        he.toneMapping = jo, he.toneMappingExposure = 1, he.outputColorSpace = yn, he.setRenderTarget(Z), he.clear(), he.render(He, G), he.setRenderTarget(te), he.toneMapping = J, he.toneMappingExposure = M, he.outputColorSpace = z;
        const T = new Uint8Array(Y * K * 4);
        he.readRenderTargetPixels(Z, 0, 0, Y, K, T), Z.dispose();
        const O = document.createElement("canvas");
        O.width = Y, O.height = K;
        const q = O.getContext("2d");
        if (!q) return null;
        const ne = q.createImageData(Y, K), pe = Y * 4;
        for (let ye = 0; ye < K; ye++) {
          const ve = (K - 1 - ye) * pe;
          ne.data.set(T.subarray(ve, ve + pe), ye * pe);
        }
        return q.putImageData(ne, 0, 0), O;
      }, I = window;
      return I.__vcadCaptureAiCamera = y, () => {
        I.__vcadCaptureAiCamera === y && delete I.__vcadCaptureAiCamera;
      };
    }, [
      he,
      He,
      Ie.width,
      Ie.height
    ]), c.useEffect(() => {
      const y = () => {
        const I = new E(60, -60, 45), L = new E(0, 0, 0);
        Se.current.copy(L), je.current = I, ze.current = null, Mt(I, L, Le.current), F.current && (F.current.enabled = false), me.current = true, r(true);
      };
      return window.addEventListener("vcad:hero-view", y), () => window.removeEventListener("vcad:hero-view", y);
    }, []), c.useEffect(() => {
      const y = (I) => {
        const { x: L, y: Y, z: K } = I.detail, [ce, fe, H] = dt([
          L,
          Y,
          K
        ]);
        Se.current.set(ce, fe, H), je.current = null, ze.current = null, F.current && (F.current.enabled = false), me.current = true, r(true);
      };
      return window.addEventListener("vcad:focus-point", y), () => window.removeEventListener("vcad:focus-point", y);
    }, []), c.useEffect(() => {
      const y = () => {
        var _a3;
        const I = De.getState().scene;
        if (!I || I.parts.length === 0) return;
        const L = new rt(), Y = new E();
        let K = false;
        for (const Z of I.parts) {
          const te = Z.mesh.positions;
          for (let J = 0; J < te.length; J += 3) Y.set(te[J] ?? 0, te[J + 1] ?? 0, te[J + 2] ?? 0), L.expandByPoint(Y), K = true;
        }
        if (!K) return;
        const ce = new E();
        L.getCenter(ce);
        const fe = new E();
        L.getSize(fe);
        const H = Math.max(fe.x, fe.y, fe.z, 50) * 2, Me = new E(ce.x, ce.z, -ce.y), Re = ((_a3 = F.current) == null ? void 0 : _a3.target) ?? new E(), ue = new E().copy(_.position).sub(Re);
        ue.lengthSq() < 1e-6 && ue.set(1, 1, 1), ue.normalize();
        const G = new E().copy(Me).addScaledVector(ue, H);
        Se.current.copy(Me), je.current = G, ze.current = H, Mt(G, Me, Le.current), F.current && (F.current.enabled = false), me.current = true, r(true);
      };
      return window.addEventListener("vcad:camera-fit", y), () => window.removeEventListener("vcad:camera-fit", y);
    }, [
      _
    ]);
    const Te = c.useMemo(() => nc(g, se), [
      g,
      se
    ]), qe = c.useMemo(() => {
      const y = Te.environment;
      return y.type === "None" ? null : y.type === "Preset" ? ec[y.preset] ?? "studio" : "studio";
    }, [
      Te.environment
    ]), k = c.useMemo(() => {
      const y = Te.environment;
      return y.type === "None" ? 0 : y.intensity ?? 1;
    }, [
      Te.environment
    ]);
    return i.jsxs(i.Fragment, {
      children: [
        Te.lights.map((y) => {
          if (y.enabled === false) return null;
          const I = new We(y.color[0], y.color[1], y.color[2]);
          if (y.kind.type === "Directional") {
            const L = oc(y.kind.direction);
            return y.castShadow ? i.jsx(ic, {
              direction: y.kind.direction ?? {
                x: 0.5,
                y: -0.8,
                z: 0.4
              },
              color: I,
              intensity: y.intensity,
              bounds: Q
            }, y.id) : i.jsx("directionalLight", {
              position: L,
              intensity: y.intensity,
              color: I
            }, y.id);
          }
          return y.kind.type === "Point" ? i.jsx("pointLight", {
            position: [
              y.kind.position.x,
              y.kind.position.y,
              y.kind.position.z
            ],
            intensity: y.intensity,
            color: I,
            distance: y.kind.distance
          }, y.id) : y.kind.type === "Spot" ? i.jsx("spotLight", {
            position: [
              y.kind.position.x,
              y.kind.position.y,
              y.kind.position.z
            ],
            intensity: y.intensity,
            color: I,
            angle: y.kind.angle ? y.kind.angle * Math.PI / 180 : void 0,
            penumbra: y.kind.penumbra ? y.kind.penumbra / 90 : void 0
          }, y.id) : null;
        }),
        !o && !n && i.jsx(Ho, {
          position: [
            0,
            -0.01,
            0
          ],
          opacity: se ? 0.4 : 0.3,
          scale: 200,
          blur: 2,
          far: 100,
          resolution: 512,
          color: se ? "#000000" : "#1a1a1a"
        }),
        !o && i.jsx(Qs, {}),
        i.jsx(Yo, {
          ref: F,
          makeDefault: true,
          enabled: !D,
          enableDamping: false,
          enableZoom: Za,
          touches: {
            ONE: Fn.ROTATE,
            TWO: Fn.DOLLY_PAN
          },
          mouseButtons: (() => {
            const y = na(xe, ge);
            return {
              LEFT: void 0,
              MIDDLE: y.MIDDLE,
              RIGHT: y.RIGHT
            };
          })()
        }),
        !o && !D && i.jsx(Xo, {
          alignment: "bottom-right",
          margin: [
            80,
            80
          ],
          children: i.jsx(Uo, {
            axisColors: [
              "#e06c75",
              "#61afef",
              "#98c379"
            ],
            labelColor: "#abb2bf",
            labels: [
              "X",
              "Z",
              "Y"
            ]
          })
        }),
        qe && i.jsx(c.Suspense, {
          fallback: null,
          children: i.jsx(zn, {
            preset: qe,
            environmentIntensity: k,
            background: Te.background.type === "Environment"
          })
        }),
        !qe && i.jsxs(zn, {
          resolution: 256,
          frames: 1,
          background: false,
          children: [
            i.jsx("color", {
              attach: "background",
              args: se ? [
                0.018,
                0.02,
                0.024
              ] : [
                0.62,
                0.6,
                0.58
              ]
            }),
            i.jsx(wt, {
              form: "rect",
              intensity: se ? 3.2 : 5.5,
              color: [
                1,
                0.99,
                0.97
              ],
              position: [
                3,
                9,
                3
              ],
              rotation: [
                -Math.PI / 2 + 0.25,
                0,
                0.2
              ],
              scale: [
                18,
                14,
                1
              ]
            }),
            i.jsx(wt, {
              form: "rect",
              intensity: se ? 1.3 : 2.2,
              color: [
                1,
                0.94,
                0.86
              ],
              position: [
                10,
                2,
                4
              ],
              rotation: [
                0,
                -Math.PI / 2,
                0.1
              ],
              scale: [
                12,
                8,
                1
              ]
            }),
            i.jsx(wt, {
              form: "rect",
              intensity: se ? 0.9 : 1.6,
              color: [
                0.96,
                0.98,
                1
              ],
              position: [
                -10,
                2,
                0
              ],
              rotation: [
                0,
                Math.PI / 2,
                -0.1
              ],
              scale: [
                12,
                8,
                1
              ]
            }),
            i.jsx(wt, {
              form: "rect",
              intensity: se ? 2.2 : 3.6,
              color: [
                0.98,
                1,
                1
              ],
              position: [
                0,
                4,
                -12
              ],
              rotation: [
                0,
                0,
                0
              ],
              scale: [
                14,
                5,
                1
              ]
            }),
            i.jsx(wt, {
              form: "rect",
              intensity: se ? 0.25 : 0.5,
              color: [
                0.92,
                0.94,
                0.96
              ],
              position: [
                0,
                -8,
                0
              ],
              rotation: [
                Math.PI / 2,
                0,
                0
              ],
              scale: [
                20,
                20,
                1
              ]
            })
          ]
        }),
        !o && ((_a2 = g == null ? void 0 : g.background) == null ? void 0 : _a2.type) === "Solid" && i.jsx("color", {
          attach: "background",
          args: [
            g.background.color[0],
            g.background.color[1],
            g.background.color[2]
          ]
        }),
        t && i.jsx("group", {
          rotation: [
            -Math.PI / 2,
            0,
            0
          ],
          children: i.jsx("group", {
            position: [
              (N == null ? void 0 : N.position.x) ?? 0,
              (N == null ? void 0 : N.position.y) ?? 0,
              (N == null ? void 0 : N.position.z) ?? 0
            ],
            rotation: [
              ((N == null ? void 0 : N.rotationDeg.x) ?? 0) * Math.PI / 180,
              ((N == null ? void 0 : N.rotationDeg.y) ?? 0) * Math.PI / 180,
              ((N == null ? void 0 : N.rotationDeg.z) ?? 0) * Math.PI / 180,
              "ZYX"
            ],
            scale: [
              (N == null ? void 0 : N.scale.x) ?? 1,
              (N == null ? void 0 : N.scale.y) ?? 1,
              (N == null ? void 0 : N.scale.z) ?? 1
            ],
            children: i.jsx(Ca, {
              showBoard: true
            })
          })
        }),
        !o && a && i.jsxs(i.Fragment, {
          children: [
            C === "raytrace" && j && i.jsx(xi, {}),
            i.jsx(Ia, {
              children: i.jsxs("group", {
                rotation: [
                  -Math.PI / 2,
                  0,
                  0
                ],
                children: [
                  i.jsx(Lr, {}),
                  i.jsx(ka, {
                    excludeNodeId: A
                  }),
                  i.jsxs(i.Fragment, {
                    children: [
                      (_b = s == null ? void 0 : s.instances) == null ? void 0 : _b.map((y) => {
                        const I = ho(y), L = {
                          id: I,
                          name: y.name ?? y.partDefId,
                          kind: "cube",
                          primitiveNodeId: 0,
                          scaleNodeId: 0,
                          rotateNodeId: 0,
                          translateNodeId: 0
                        };
                        return i.jsx($n, {
                          partInfo: L,
                          mesh: y.mesh,
                          materialKey: y.material,
                          selected: b.has(I),
                          transform: y.transform,
                          ghosted: t
                        }, y.instanceId);
                      }),
                      (!(s == null ? void 0 : s.instances) || s.instances.length === 0) && u.length === 0 && (s == null ? void 0 : s.parts.map((y, I) => i.jsx(fr, {
                        mesh: y.mesh,
                        materialKey: y.material
                      }, `imported-${I}`))),
                      (!(s == null ? void 0 : s.instances) || s.instances.length === 0) && u.length > 0 && (s == null ? void 0 : s.parts.map((y, I) => {
                        const L = Xe[I] ?? I, Y = u[L];
                        return !Y || Y.id === W ? null : i.jsx($n, {
                          partInfo: Y,
                          mesh: y.mesh,
                          materialKey: y.material,
                          selected: ae(Y.id, L),
                          ghosted: t && !En(Y)
                        }, Y.id);
                      }))
                    ]
                  }),
                  P && P.positions.length > 0 && i.jsx(vr, {
                    molecule: P,
                    representation: v
                  }),
                  i.jsx(sc, {}),
                  i.jsx(rc, {}),
                  s == null ? void 0 : s.clashes.map((y, I) => i.jsx(Er, {
                    mesh: y
                  }, `clash-${I}`)),
                  i.jsx(Pr, {}),
                  l && i.jsx(Cr, {
                    mesh: l
                  }),
                  i.jsx(kr, {}),
                  R && i.jsx(Tr, {}),
                  i.jsx(ni, {}),
                  i.jsx(ii, {}),
                  i.jsx(Ni, {}),
                  i.jsx(li, {}),
                  i.jsx(Ua, {})
                ]
              })
            }),
            i.jsx(Ga, {}),
            i.jsx(Vr, {
              orbitControls: F
            })
          ]
        }),
        a && !D && !Ze && (() => {
          var _a3, _b2, _c2, _d, _e2, _f, _g;
          const y = ((_a3 = Te.postProcessing.ambientOcclusion) == null ? void 0 : _a3.enabled) !== false, I = ((_b2 = Te.postProcessing.vignette) == null ? void 0 : _b2.enabled) !== false;
          if (!y && !I) return null;
          const L = (_c2 = he.getContext) == null ? void 0 : _c2.call(he);
          if (!L || typeof L.getContextAttributes != "function" || !L.getContextAttributes()) return null;
          const Y = [];
          return y && Y.push(i.jsx(Ns, {
            aoRadius: ((_d = Te.postProcessing.ambientOcclusion) == null ? void 0 : _d.radius) ?? 0.5,
            intensity: ((_e2 = Te.postProcessing.ambientOcclusion) == null ? void 0 : _e2.intensity) ?? (se ? 2 : 1.5),
            aoSamples: n ? 3 : 6,
            denoiseSamples: n ? 1 : 4
          }, "ao")), I && Y.push(i.jsx(Os, {
            offset: ((_f = Te.postProcessing.vignette) == null ? void 0 : _f.offset) ?? 0.3,
            darkness: ((_g = Te.postProcessing.vignette) == null ? void 0 : _g.darkness) ?? (se ? 0.5 : 0.3),
            eskil: false
          }, "vignette")), i.jsx(za, {
            children: i.jsx(Bs, {
              children: Y
            })
          });
        })()
      ]
    });
  }
  const vo = {
    light: {
      background: "#ffffff",
      edge: "#1a1a1a",
      hiddenEdge: "#999999",
      dimension: "#3b82f6",
      label: "#666666",
      selection: "#3b82f6",
      detailRegion: "#e11d48",
      detailRegionFill: "rgba(225, 29, 72, 0.05)",
      section: "#d97706",
      sheet: "#444444"
    },
    dark: {
      background: "#0a0a0a",
      edge: "#00d4aa",
      hiddenEdge: "#006655",
      dimension: "#ff6b35",
      label: "#888888",
      selection: "#00d4aa",
      detailRegion: "#f43f5e",
      detailRegionFill: "rgba(244, 63, 94, 0.08)",
      section: "#fbbf24",
      sheet: "#aaaaaa"
    }
  };
  function wo(e, t, o, n, r, a, s) {
    const l = (m) => t + m * n, u = (m) => o - m * n;
    return i.jsxs("g", {
      pointerEvents: "none",
      children: [
        e.rendered.lines.map(([m, x], d) => i.jsx("line", {
          x1: l(m.x),
          y1: u(m.y),
          x2: l(x.x),
          y2: u(x.y),
          stroke: r,
          strokeWidth: a
        }, `${s}-l-${d}`)),
        e.rendered.texts.map((m, x) => {
          const d = String(m.alignment), g = d.includes("Left") ? "start" : d.includes("Right") ? "end" : "middle", f = d.startsWith("Top") ? "hanging" : d.startsWith("Bottom") ? "auto" : "middle";
          return i.jsx("text", {
            x: l(m.position.x),
            y: u(m.position.y),
            fontSize: m.height * n,
            fill: r,
            textAnchor: g,
            dominantBaseline: f,
            fontFamily: "monospace",
            children: m.text
          }, `${s}-t-${x}`);
        })
      ]
    }, s);
  }
  function cc() {
    const { viewDirection: e, showHiddenLines: t, showDimensions: o, zoom: n, pan: r, adjustZoom: a, adjustPan: s, resetView: l, detailViews: u, addDetailView: m } = xn(), x = De((M) => M.scene), d = De((M) => M.engine), g = oe((M) => M.parts), f = oe((M) => M.document.drawing), p = oe((M) => M.setDrawingSettings), v = $((M) => M.selectedPartIds), P = $((M) => M.select), b = $((M) => M.clearSelection), { isDark: h } = at(), w = c.useRef(null), [S, C] = c.useState(false), [j, R] = c.useState({
      x: 0,
      y: 0
    }), A = c.useRef({
      x: 0,
      y: 0
    }), N = c.useRef(false), [W, D] = c.useState(false), [F, _] = c.useState(null), [X, se] = c.useState(null), [re, xe] = c.useState(false), [ge, B] = c.useState([]), [ie, Ce] = c.useState(null), ee = h ? vo.dark : vo.light, Ee = c.useMemo(() => !(x == null ? void 0 : x.parts) || !d ? [] : x.parts.map((M, z) => {
      const T = g[z];
      if (!T) return null;
      const O = d.projectMesh(M.mesh, e);
      return O ? {
        partId: T.id,
        view: O
      } : null;
    }).filter((M) => M !== null), [
      x,
      d,
      e,
      g
    ]), de = c.useMemo(() => {
      if (Ee.length === 0) return null;
      let M = 1 / 0, z = 1 / 0, T = -1 / 0, O = -1 / 0;
      for (const { view: q } of Ee) M = Math.min(M, q.bounds.min_x), z = Math.min(z, q.bounds.min_y), T = Math.max(T, q.bounds.max_x), O = Math.max(O, q.bounds.max_y);
      return {
        min_x: M,
        min_y: z,
        max_x: T,
        max_y: O
      };
    }, [
      Ee
    ]), be = c.useMemo(() => Ee.length === 0 ? null : {
      edges: Ee.flatMap((z) => z.view.edges),
      bounds: de,
      view_direction: e
    }, [
      Ee,
      de,
      e
    ]), Fe = c.useMemo(() => !be || !d || u.length === 0 ? [] : u.map((M) => {
      try {
        const z = d.createDetailView(be, M.centerX, M.centerY, M.scale, M.width, M.height, M.label);
        return {
          def: M,
          view: z
        };
      } catch {
        return null;
      }
    }).filter((M) => M !== null), [
      be,
      d,
      u
    ]), Ge = c.useMemo(() => {
      var _a2;
      if (!d || !((_a2 = x == null ? void 0 : x.parts) == null ? void 0 : _a2.length)) return [];
      const M = ((f == null ? void 0 : f.sections) ?? []).filter((T) => T.view === e);
      if (M.length === 0) return [];
      const z = ps();
      return z ? M.map((T) => {
        const O = ms(T.view, T.points);
        if (!O) return null;
        const q = d.offsetSectionMesh(z, O, {
          spacing: 3,
          angle: Math.PI / 4
        });
        return q ? {
          def: T,
          view: q
        } : null;
      }).filter((T) => T !== null) : [];
    }, [
      d,
      x,
      f,
      e
    ]), Oe = c.useMemo(() => {
      if (!d || !(f == null ? void 0 : f.titleBlock)) return null;
      try {
        return d.renderTitleBlock(hs(f.titleBlock, ""));
      } catch {
        return null;
      }
    }, [
      d,
      f
    ]), Se = c.useMemo(() => {
      if (!d || !(f == null ? void 0 : f.showBom) || g.length === 0) return null;
      try {
        const M = xs();
        return M.length > 0 ? d.renderBomTable(M) : null;
      } catch {
        return null;
      }
    }, [
      d,
      f,
      g
    ]), ze = c.useMemo(() => {
      if (!de || !o || !d) return [];
      try {
        const M = d.WasmAnnotationLayer, z = new M(), { min_x: T, min_y: O, max_x: q, max_y: ne } = de;
        z.addHorizontalDimension(T, O, q, O, -10), z.addVerticalDimension(q, O, q, ne, 10);
        const ve = z.renderAll();
        return z.free(), ve;
      } catch {
        return [];
      }
    }, [
      de,
      o,
      d
    ]), me = c.useCallback((M) => {
      if (M.preventDefault(), M.shiftKey) {
        const q = -M.deltaY * 2e-3;
        a(q);
        return;
      }
      let z = M.deltaX, T = M.deltaY;
      M.deltaMode === 1 && (z *= 16, T *= 16), M.deltaMode === 2 && (z *= 100, T *= 100);
      const O = 0.15 / n;
      if (A.current.x -= z * O, A.current.y -= T * O, !N.current) {
        N.current = true;
        const q = () => {
          const ne = A.current;
          if (Math.abs(ne.x) < 0.01 && Math.abs(ne.y) < 0.01) {
            N.current = false, ne.x = 0, ne.y = 0;
            return;
          }
          const pe = 0.15;
          s(ne.x * pe, ne.y * pe);
          const ye = 0.92;
          ne.x *= ye, ne.y *= ye, requestAnimationFrame(q);
        };
        requestAnimationFrame(q);
      }
    }, [
      a,
      s,
      n
    ]);
    c.useEffect(() => {
      const M = w.current;
      if (M) return M.addEventListener("wheel", me, {
        passive: false
      }), () => M.removeEventListener("wheel", me);
    }, [
      me
    ]);
    const je = c.useCallback((M) => {
      (M.button === 1 || M.button === 0 && M.altKey) && (C(true), R({
        x: M.clientX,
        y: M.clientY
      }), A.current = {
        x: 0,
        y: 0
      }, N.current = false, M.target.setPointerCapture(M.pointerId), M.preventDefault());
    }, []), Le = c.useCallback((M) => {
      if (!S) return;
      const z = M.clientX - j.x, T = M.clientY - j.y;
      R({
        x: M.clientX,
        y: M.clientY
      });
      const O = w.current;
      if (!O) return;
      const q = O.getBoundingClientRect(), pe = (de ? (de.max_x - de.min_x) * 1.6 : 100) / q.width / n, ye = z * pe, ve = -T * pe;
      s(ye, ve), A.current.x = ye, A.current.y = ve;
    }, [
      S,
      j,
      s,
      n,
      de
    ]), V = c.useCallback((M) => {
      if (S) {
        C(false), M.target.releasePointerCapture(M.pointerId);
        const z = A.current;
        if ((Math.abs(z.x) > 0.1 || Math.abs(z.y) > 0.1) && !N.current) {
          N.current = true;
          const T = () => {
            if (Math.abs(z.x) < 0.01 && Math.abs(z.y) < 0.01) {
              N.current = false, z.x = 0, z.y = 0;
              return;
            }
            const O = 0.15;
            xn.getState().adjustPan(z.x * O, z.y * O);
            const q = 0.92;
            z.x *= q, z.y *= q, requestAnimationFrame(T);
          };
          requestAnimationFrame(T);
        }
      }
    }, [
      S
    ]), Ne = c.useCallback((M, z) => {
      if (z.stopPropagation(), z.shiftKey) if (v.has(M)) {
        const T = new Set(v);
        T.delete(M), $.getState().selectMultiple(Array.from(T));
      } else $.getState().selectMultiple([
        ...Array.from(v),
        M
      ]);
      else P(M);
    }, [
      v,
      P
    ]), Xe = c.useCallback(() => {
      b();
    }, [
      b
    ]), ae = c.useCallback(() => {
      l();
    }, [
      l
    ]), Q = c.useCallback((M, z) => {
      const T = w.current;
      if (!T || !de) return null;
      const O = T.getBoundingClientRect(), q = de.max_x - de.min_x, ne = de.max_y - de.min_y, pe = Math.max(q, ne) * 0.3, ye = (q + 2 * pe) / n, ve = (ne + 2 * pe) / n, Be = de.min_x - pe + (q + 2 * pe - ye) / 2 - r.x, ct = -de.max_y - pe + (ne + 2 * pe - ve) / 2 - r.y, lt = Be + (M - O.left) / O.width * ye, Ve = ct + (z - O.top) / O.height * ve;
      return {
        x: lt,
        y: -Ve
      };
    }, [
      de,
      n,
      r
    ]), U = c.useCallback(() => {
      D(true), _(null), se(null);
    }, []), we = c.useCallback((M) => {
      if (!W) return;
      const z = Q(M.clientX, M.clientY);
      z && (_(z), se(z));
    }, [
      W,
      Q
    ]), he = c.useCallback((M) => {
      if (!W || !F) return;
      const z = Q(M.clientX, M.clientY);
      z && se(z);
    }, [
      W,
      F,
      Q
    ]), He = c.useCallback(() => {
      if (!W || !F || !X) return;
      const M = Math.min(F.x, X.x), z = Math.max(F.x, X.x), T = Math.min(F.y, X.y), O = Math.max(F.y, X.y), q = z - M, ne = O - T;
      if (q > 0.5 && ne > 0.5) {
        const pe = (M + z) / 2, ye = (T + O) / 2, ve = u.length, Be = String.fromCharCode(65 + ve % 26);
        m({
          centerX: pe,
          centerY: ye,
          scale: 2,
          width: q,
          height: ne,
          label: Be
        });
      }
      D(false), _(null), se(null);
    }, [
      W,
      F,
      X,
      u.length,
      m
    ]);
    c.useEffect(() => {
      const M = (z) => {
        z.key === "Escape" && W && (D(false), _(null), se(null));
      };
      return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
    }, [
      W
    ]), c.useEffect(() => {
      const M = () => {
        U();
      };
      return window.addEventListener("vcad:start-detail-view", M), () => window.removeEventListener("vcad:start-detail-view", M);
    }, [
      U
    ]), c.useEffect(() => {
      const M = () => {
        xe(true), B([]), Ce(null);
      };
      return window.addEventListener("vcad:start-section-view", M), () => window.removeEventListener("vcad:start-section-view", M);
    }, []);
    const Ie = c.useCallback(() => {
      if (ge.length >= 2) {
        const M = (f == null ? void 0 : f.sections) ?? [], z = String.fromCharCode(65 + M.length % 26);
        p({
          sections: [
            ...M,
            {
              id: `section-${z}-${Date.now()}`,
              view: e,
              label: z,
              points: ge
            }
          ]
        });
      }
      xe(false), B([]), Ce(null);
    }, [
      ge,
      f,
      p,
      e
    ]), Ze = c.useCallback((M) => {
      const z = Q(M.clientX, M.clientY);
      z && B((T) => [
        ...T,
        [
          z.x,
          z.y
        ]
      ]);
    }, [
      Q
    ]), Te = c.useCallback((M) => {
      const z = Q(M.clientX, M.clientY);
      z && Ce(z);
    }, [
      Q
    ]);
    if (c.useEffect(() => {
      if (!re) return;
      const M = (z) => {
        z.key === "Escape" ? (xe(false), B([]), Ce(null)) : z.key === "Enter" && Ie();
      };
      return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
    }, [
      re,
      Ie
    ]), !de || Ee.length === 0) return i.jsx("div", {
      className: "flex h-full w-full items-center justify-center",
      style: {
        backgroundColor: ee.background,
        color: ee.label
      },
      children: "No geometry to display"
    });
    const qe = de.max_x - de.min_x, k = de.max_y - de.min_y, y = Math.max(qe, k) * 0.3, I = (qe + 2 * y) / n, L = (k + 2 * y) / n, Y = de.min_x - y + (qe + 2 * y - I) / 2 - r.x, K = -de.max_y - y + (k + 2 * y - L) / 2 - r.y, ce = `${Y} ${K} ${I} ${L}`, H = Math.max(qe, k) * 5e-3 / Math.sqrt(n), Me = H * 0.6, Re = H * 0.4, ue = I * 0.015, G = Oe ? I * 0.3 / Oe.width : 0, Z = Oe ? Oe.height * G : 0, te = Oe ? Z + ue : 0, J = Se ? I * 0.3 / Se.width : 0;
    return i.jsxs("svg", {
      ref: w,
      className: "h-full w-full select-none",
      viewBox: ce,
      preserveAspectRatio: "xMidYMid meet",
      style: {
        backgroundColor: ee.background,
        cursor: W || re ? "crosshair" : S ? "grabbing" : "default"
      },
      onPointerDown: W || re ? void 0 : je,
      onPointerMove: W || re ? void 0 : Le,
      onPointerUp: W || re ? void 0 : V,
      onPointerLeave: W || re ? void 0 : V,
      onMouseDown: W ? we : void 0,
      onMouseMove: W ? he : re ? Te : void 0,
      onMouseUp: W ? He : void 0,
      onClick: W ? void 0 : re ? Ze : Xe,
      onDoubleClick: re ? Ie : ae,
      children: [
        h && i.jsx("defs", {
          children: i.jsx("pattern", {
            id: "grid",
            width: H * 20,
            height: H * 20,
            patternUnits: "userSpaceOnUse",
            children: i.jsx("path", {
              d: `M ${H * 20} 0 L 0 0 0 ${H * 20}`,
              fill: "none",
              stroke: "#1a1a1a",
              strokeWidth: H * 0.2
            })
          })
        }),
        h && i.jsx("rect", {
          x: Y,
          y: K,
          width: I,
          height: L,
          fill: "url(#grid)"
        }),
        Ee.map(({ partId: M, view: z }) => {
          const T = v.has(M);
          return i.jsxs("g", {
            onClick: (O) => Ne(M, O),
            style: {
              cursor: "pointer"
            },
            children: [
              T && i.jsx("g", {
                children: z.edges.filter((O) => O.visibility === "Visible").map((O, q) => i.jsx("line", {
                  x1: O.start.x,
                  y1: -O.start.y,
                  x2: O.end.x,
                  y2: -O.end.y,
                  stroke: ee.selection,
                  strokeWidth: H * 3,
                  strokeLinecap: "round",
                  opacity: 0.3
                }, `sel-${q}`))
              }),
              z.edges.filter((O) => O.visibility === "Visible").map((O, q) => i.jsx("line", {
                x1: O.start.x,
                y1: -O.start.y,
                x2: O.end.x,
                y2: -O.end.y,
                stroke: T ? ee.selection : ee.edge,
                strokeWidth: H,
                strokeLinecap: "round"
              }, `v-${q}`)),
              t && z.edges.filter((O) => O.visibility === "Hidden").map((O, q) => i.jsx("line", {
                x1: O.start.x,
                y1: -O.start.y,
                x2: O.end.x,
                y2: -O.end.y,
                stroke: T ? ee.selection : ee.hiddenEdge,
                strokeWidth: Me,
                strokeDasharray: `${H * 3},${H * 2}`,
                strokeLinecap: "round",
                opacity: T ? 0.7 : 1
              }, `h-${q}`))
            ]
          }, M);
        }),
        ze.map((M, z) => i.jsxs("g", {
          className: "dimension",
          pointerEvents: "none",
          children: [
            M.lines.map(([T, O], q) => i.jsx("line", {
              x1: T.x,
              y1: -T.y,
              x2: O.x,
              y2: -O.y,
              stroke: ee.dimension,
              strokeWidth: Re
            }, `l-${q}`)),
            M.arcs.map((T, O) => {
              const q = T.center.x + T.radius * Math.cos(T.start_angle), ne = -(T.center.y + T.radius * Math.sin(T.start_angle)), pe = T.center.x + T.radius * Math.cos(T.end_angle), ye = -(T.center.y + T.radius * Math.sin(T.end_angle)), ve = Math.abs(T.end_angle - T.start_angle) > Math.PI ? 1 : 0, Be = T.end_angle > T.start_angle ? 0 : 1;
              return i.jsx("path", {
                d: `M ${q} ${ne} A ${T.radius} ${T.radius} 0 ${ve} ${Be} ${pe} ${ye}`,
                fill: "none",
                stroke: ee.dimension,
                strokeWidth: Re
              }, `arc-${O}`);
            }),
            M.texts.map((T, O) => i.jsx("text", {
              x: T.position.x,
              y: -T.position.y,
              fontSize: T.height / Math.sqrt(n),
              fill: ee.dimension,
              textAnchor: "middle",
              dominantBaseline: "middle",
              fontFamily: "monospace",
              fontWeight: h ? "500" : "400",
              transform: `rotate(${-T.rotation * 180 / Math.PI}, ${T.position.x}, ${-T.position.y})`,
              children: T.text
            }, `t-${O}`)),
            M.arrows.map((T, O) => {
              const q = T.direction, ne = T.size / Math.sqrt(n), pe = T.tip.x, ye = -T.tip.y, ve = Math.PI / 6, Be = pe + ne * Math.cos(q + Math.PI - ve), ct = ye - ne * Math.sin(q + Math.PI - ve), lt = pe + ne * Math.cos(q + Math.PI + ve), Ve = ye - ne * Math.sin(q + Math.PI + ve);
              return i.jsx("polygon", {
                points: `${pe},${ye} ${Be},${ct} ${lt},${Ve}`,
                fill: ee.dimension
              }, `a-${O}`);
            })
          ]
        }, `dim-${z}`)),
        u.map((M) => {
          const z = M.width / 2, T = M.height / 2;
          return i.jsxs("g", {
            pointerEvents: "none",
            children: [
              i.jsx("circle", {
                cx: M.centerX,
                cy: -M.centerY,
                r: Math.max(z, T) * 1.2,
                fill: "none",
                stroke: ee.detailRegion,
                strokeWidth: H * 0.8,
                strokeDasharray: `${H * 2},${H}`
              }),
              i.jsx("text", {
                x: M.centerX,
                y: -M.centerY - Math.max(z, T) * 1.2 - H * 3,
                fontSize: H * 6,
                fill: ee.detailRegion,
                textAnchor: "middle",
                fontFamily: "monospace",
                fontWeight: "600",
                children: M.label
              })
            ]
          }, M.id);
        }),
        Ge.map(({ def: M }) => {
          const z = M.points;
          if (z.length < 2) return null;
          const T = z[0], O = z[z.length - 1];
          return i.jsxs("g", {
            pointerEvents: "none",
            children: [
              i.jsx("polyline", {
                points: z.map(([q, ne]) => `${q},${-ne}`).join(" "),
                fill: "none",
                stroke: ee.section,
                strokeWidth: H,
                strokeDasharray: `${H * 6},${H * 2},${H * 2},${H * 2}`
              }),
              [
                T,
                O
              ].map(([q, ne], pe) => i.jsx("text", {
                x: q,
                y: -ne - H * 4,
                fontSize: H * 6,
                fill: ee.section,
                textAnchor: "middle",
                fontFamily: "monospace",
                fontWeight: "600",
                children: M.label
              }, `cut-${M.id}-t-${pe}`))
            ]
          }, `cut-${M.id}`);
        }),
        re && ge.length > 0 && i.jsxs("g", {
          pointerEvents: "none",
          children: [
            i.jsx("polyline", {
              points: [
                ...ge,
                ...ie ? [
                  [
                    ie.x,
                    ie.y
                  ]
                ] : []
              ].map(([M, z]) => `${M},${-z}`).join(" "),
              fill: "none",
              stroke: ee.section,
              strokeWidth: H,
              strokeDasharray: `${H * 3},${H * 2}`
            }),
            ge.map(([M, z], T) => i.jsx("circle", {
              cx: M,
              cy: -z,
              r: H * 2,
              fill: ee.section
            }, `sp-${T}`))
          ]
        }),
        W && F && X && i.jsx("rect", {
          x: Math.min(F.x, X.x),
          y: -Math.max(F.y, X.y),
          width: Math.abs(X.x - F.x),
          height: Math.abs(X.y - F.y),
          fill: ee.detailRegionFill,
          stroke: ee.detailRegion,
          strokeWidth: H,
          strokeDasharray: `${H * 3},${H * 2}`,
          pointerEvents: "none"
        }),
        i.jsxs("text", {
          x: Y + 5 / n,
          y: K + 5 / n + H * 8,
          fontSize: H * 8,
          fill: ee.label,
          textAnchor: "start",
          dominantBaseline: "hanging",
          fontFamily: "monospace",
          fontWeight: "500",
          pointerEvents: "none",
          children: [
            e.toUpperCase(),
            " VIEW"
          ]
        }),
        i.jsxs("text", {
          x: Y + I - 5 / n,
          y: K + 5 / n + H * 8,
          fontSize: H * 6,
          fill: ee.label,
          textAnchor: "end",
          dominantBaseline: "hanging",
          fontFamily: "monospace",
          pointerEvents: "none",
          children: [
            Math.round(n * 100),
            "%"
          ]
        }),
        Fe.map(({ def: M, view: z }, T) => {
          const O = Math.min(I, L) * 0.25, q = O * 0.1, ne = Y + I - O - q, pe = K + L - O * (T + 1) - q * (T + 1) - te, ye = z.bounds.max_x - z.bounds.min_x, ve = z.bounds.max_y - z.bounds.min_y, Be = Math.min(O * 0.8 / (ye || 1), O * 0.8 / (ve || 1)), ct = ne + O / 2, lt = pe + O / 2;
          return i.jsxs("g", {
            children: [
              i.jsx("rect", {
                x: ne,
                y: pe,
                width: O,
                height: O,
                fill: ee.background,
                stroke: ee.detailRegion,
                strokeWidth: H
              }),
              i.jsxs("text", {
                x: ne + H * 2,
                y: pe + H * 5,
                fontSize: H * 5,
                fill: ee.detailRegion,
                fontFamily: "monospace",
                fontWeight: "600",
                pointerEvents: "none",
                children: [
                  "DETAIL ",
                  M.label,
                  " (",
                  M.scale,
                  ":1)"
                ]
              }),
              i.jsxs("g", {
                transform: `translate(${ct}, ${lt}) scale(${Be})`,
                children: [
                  z.edges.filter((Ve) => Ve.visibility === "Visible").map((Ve, vt) => i.jsx("line", {
                    x1: Ve.start.x,
                    y1: -Ve.start.y,
                    x2: Ve.end.x,
                    y2: -Ve.end.y,
                    stroke: ee.edge,
                    strokeWidth: H / Be,
                    strokeLinecap: "round"
                  }, `dv-${M.id}-v-${vt}`)),
                  t && z.edges.filter((Ve) => Ve.visibility === "Hidden").map((Ve, vt) => i.jsx("line", {
                    x1: Ve.start.x,
                    y1: -Ve.start.y,
                    x2: Ve.end.x,
                    y2: -Ve.end.y,
                    stroke: ee.hiddenEdge,
                    strokeWidth: Me / Be,
                    strokeDasharray: `${H * 3 / Be},${H * 2 / Be}`,
                    strokeLinecap: "round"
                  }, `dv-${M.id}-h-${vt}`))
                ]
              })
            ]
          }, M.id);
        }),
        Ge.map(({ def: M, view: z }, T) => {
          const O = Math.min(I, L) * 0.28, q = O * 0.1, ne = Y + q, pe = K + L - O * (T + 1) - q * (T + 1), ye = z.bounds.max_x - z.bounds.min_x, ve = z.bounds.max_y - z.bounds.min_y, Be = Math.min(O * 0.8 / (ye || 1), O * 0.8 / (ve || 1)), ct = (z.bounds.min_x + z.bounds.max_x) / 2, lt = (z.bounds.min_y + z.bounds.max_y) / 2, Ve = ne + O / 2, vt = pe + O / 2;
          return i.jsxs("g", {
            pointerEvents: "none",
            children: [
              i.jsx("rect", {
                x: ne,
                y: pe,
                width: O,
                height: O,
                fill: ee.background,
                stroke: ee.section,
                strokeWidth: H
              }),
              i.jsxs("text", {
                x: ne + H * 2,
                y: pe + H * 5,
                fontSize: H * 5,
                fill: ee.section,
                fontFamily: "monospace",
                fontWeight: "600",
                children: [
                  "SECTION ",
                  M.label,
                  "-",
                  M.label
                ]
              }),
              i.jsxs("g", {
                transform: `translate(${Ve - ct * Be}, ${vt + lt * Be}) scale(${Be})`,
                children: [
                  z.curves.map((ut, Ft) => i.jsx("polyline", {
                    points: [
                      ...ut.points,
                      ...ut.is_closed && ut.points.length > 0 ? [
                        ut.points[0]
                      ] : []
                    ].map((Lt) => `${Lt.x},${-Lt.y}`).join(" "),
                    fill: "none",
                    stroke: ee.edge,
                    strokeWidth: H * 1.2 / Be,
                    strokeLinecap: "round"
                  }, `sec-${M.id}-c-${Ft}`)),
                  z.hatch_lines.map(([ut, Ft], Lt) => i.jsx("line", {
                    x1: ut.x,
                    y1: -ut.y,
                    x2: Ft.x,
                    y2: -Ft.y,
                    stroke: ee.section,
                    strokeWidth: H * 0.5 / Be
                  }, `sec-${M.id}-h-${Lt}`))
                ]
              })
            ]
          }, `sec-${M.id}`);
        }),
        Oe && wo(Oe, Y + I - Oe.width * G - ue, K + L - ue, G, ee.sheet, H * 0.5, "titleblock"),
        Se && wo(Se, Y + I - Se.width * J - ue, K + L - te - ue * 2, J, ee.sheet, H * 0.5, "bom")
      ]
    });
  }
  function lc() {
    const e = $((l) => l.followMode), t = $((l) => l.setFollowMode), o = $((l) => l.setFollowingParticipant), n = zt((l) => l.participants), r = c.useCallback((l) => {
      t(l), o(l === "free" ? null : gs);
    }, [
      t,
      o
    ]), a = [];
    if (n.forEach((l) => {
      l.id !== Pn && a.push(l);
    }), a.length === 0) return null;
    const s = (l, u, m) => {
      const x = e === l;
      return i.jsx("button", {
        type: "button",
        onClick: () => r(l),
        title: m,
        className: Cn("px-2 py-0.5 text-[10px] font-medium rounded-sm transition-colors", x ? "bg-brand text-white" : "text-text-muted hover:text-text hover:bg-hover"),
        children: u
      });
    };
    return i.jsxs("div", {
      className: "pointer-events-auto flex items-center gap-2 rounded-md border border-border/40 bg-surface/90 px-2 py-1 shadow-sm backdrop-blur",
      children: [
        a.map((l) => i.jsxs("div", {
          className: "flex items-center gap-1.5",
          children: [
            i.jsx("span", {
              "aria-hidden": true,
              className: "inline-block h-2 w-2 rounded-full",
              style: {
                background: l.color
              }
            }),
            i.jsx("span", {
              className: "text-[10px] font-semibold text-text",
              children: l.name
            })
          ]
        }, l.id)),
        i.jsx("div", {
          className: "h-3 w-px bg-border/40",
          "aria-hidden": true
        }),
        i.jsxs("div", {
          className: "flex items-center gap-0.5",
          role: "group",
          "aria-label": "AI camera follow mode",
          children: [
            s("free", "Free", "Free: ignore the AI camera"),
            s("follow", "Follow", "Follow: aim your view at the AI's camera frustum"),
            s("lock", "Lock", "Lock: see through the AI's camera in realtime")
          ]
        })
      ]
    });
  }
  function uc() {
    const e = le((l) => l.active), t = oe((l) => l.document.schematic), o = Tt((l) => l.activeBoardNodeId), n = oe((l) => l.document), r = De((l) => l.scene), a = oe((l) => l.parts), s = o != null ? Rn(n, o) : null;
    c.useEffect(() => {
      if (!e || !t) return;
      const l = setTimeout(async () => {
        const u = await ys(t), m = le.getState();
        m.setNetlist(u);
        const x = new Set(t.components.map((g) => g.ref)), d = new Set(((s == null ? void 0 : s.footprints) ?? []).map((g) => g.ref));
        m.setOrphanFootprints([
          ...d
        ].filter((g) => !x.has(g))), m.setUnplacedComponents([
          ...x
        ].filter((g) => !d.has(g))), o != null && oe.getState().syncSchematicToPcb(o, u, {
          placeUnplaced: false
        });
      }, 200);
      return () => clearTimeout(l);
    }, [
      t,
      s,
      e,
      o
    ]), c.useEffect(() => {
      if (!e || !s) return;
      const l = setTimeout(async () => {
        const u = await Po(s);
        u.status === "ok" && le.getState().setDrcViolations(u.value);
      }, 300);
      return () => clearTimeout(l);
    }, [
      s,
      e
    ]), c.useEffect(() => {
      if (!e || !t) return;
      const l = setTimeout(async () => {
        const u = await vs(t);
        u.status === "ok" && le.getState().setErcViolations(u.value);
      }, 300);
      return () => clearTimeout(l);
    }, [
      t,
      e
    ]), c.useEffect(() => {
      if (!e || !s) {
        le.getState().setInterferingFootprints([]);
        return;
      }
      const l = setTimeout(async () => {
        const u = await ws(s);
        le.getState().setComponentBodies(u);
        const m = [];
        r == null ? void 0 : r.parts.forEach((g, f) => {
          var _a2;
          const p = a[f];
          if (p && En(p)) return;
          const v = Xs((_a2 = g.mesh) == null ? void 0 : _a2.positions);
          v && m.push(v);
        });
        const x = o != null ? hn(a, o) : null;
        let d;
        if (x) {
          const g = Eo(n, x), f = new At().compose(new E(g.position.x, g.position.y, g.position.z), new st().setFromEuler(new Zt(g.rotationDeg.x * Math.PI / 180, g.rotationDeg.y * Math.PI / 180, g.rotationDeg.z * Math.PI / 180, "ZYX")), new E(g.scale.x, g.scale.y, g.scale.z));
          if (!f.equals(new At())) {
            const v = new E();
            d = (P, b, h) => (v.set(P, b, h).applyMatrix4(f), [
              v.x,
              v.y,
              v.z
            ]);
          }
        }
        le.getState().setInterferingFootprints(Us(u, m, 0, d));
      }, 400);
      return () => clearTimeout(l);
    }, [
      s,
      e,
      r,
      a
    ]);
  }
  function dc() {
    const e = le((s) => s.active), t = oe((s) => s.document), o = Tt((s) => s.activeBoardNodeId), n = o != null ? Rn(t, o) : null, r = c.useRef(null), a = c.useRef(null);
    c.useEffect(() => {
      if (!e || !n) return;
      const s = String(o);
      let l = false;
      const u = setTimeout(async () => {
        const m = await Po(n);
        if (l || m.status !== "ok") return;
        const x = m.value, d = qs(x), g = le.getState();
        if (a.current !== s) {
          a.current = s, r.current = d, g.clearReceipt();
          return;
        }
        const f = r.current;
        if (r.current = d, !f) return;
        const p = g.consumePendingMutation(), v = Ks({
          tool: (p == null ? void 0 : p.tool) ?? "edit",
          args: (p == null ? void 0 : p.args) ?? {},
          before: f,
          after: d
        }, g.receiptEntries.length);
        v.verdict !== "no-op" && g.appendReceiptEntry(v);
      }, 350);
      return () => {
        l = true, clearTimeout(u);
      };
    }, [
      n,
      e,
      o
    ]);
  }
  const fc = 80;
  function pc() {
    const e = le((l) => l.active), t = le((l) => l.simulating), o = le((l) => l.netlist), n = oe((l) => {
      var _a2;
      return (_a2 = l.document.schematic) == null ? void 0 : _a2.components;
    }), r = c.useMemo(() => !t || !n || !o ? "" : JSON.stringify({
      c: n.map((l) => {
        var _a2;
        return [
          l.ref,
          l.value,
          (_a2 = l.properties) == null ? void 0 : _a2.symbolId
        ];
      }),
      n: o.nets.map((l) => [
        l.name,
        l.connections.length
      ])
    }), [
      t,
      n,
      o
    ]), a = c.useRef(null), s = c.useRef(null);
    c.useEffect(() => {
      var _a2;
      if (!e || !t || !r) return;
      const l = (_a2 = oe.getState().document.schematic) == null ? void 0 : _a2.components, u = le.getState().netlist;
      if (!l || !u) return;
      let m = false;
      const x = bs(l, u), d = le.getState();
      if (x.spec.devices.length === 0) {
        d.clearSim();
        return;
      }
      return d.setSimMaps(Object.fromEntries(x.netToNode), Object.fromEntries(x.refToDevice)), Ss(JSON.stringify(x.spec)).then((g) => {
        if (m || !g) return;
        a.current = g;
        const f = () => {
          if (!(m || !a.current)) {
            try {
              const p = a.current.step(fc);
              le.getState().setSimObservation(p.nodeVoltages, p.deviceCurrents, p.rotorAngles);
            } catch (p) {
              console.warn("[circuit-sim] step failed", p);
              return;
            }
            s.current = requestAnimationFrame(f);
          }
        };
        s.current = requestAnimationFrame(f);
      }), () => {
        if (m = true, s.current != null && cancelAnimationFrame(s.current), s.current = null, a.current) {
          try {
            a.current.free();
          } catch {
          }
          a.current = null;
        }
      };
    }, [
      e,
      t,
      r
    ]);
  }
  const mc = c.lazy(() => yt(() => import("./SchematicView-CIuazhQ2.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([5,1,2,3,0,4,6,7,8,9,10,11,12,13])).then((e) => ({
    default: e.SchematicView
  }))), hc = c.lazy(() => yt(() => import("./ElectronicsViewToggle-DtXbrpX7.js"), __vite__mapDeps([14,2,3,0,1,4])).then((e) => ({
    default: e.ElectronicsViewToggle
  }))), xc = c.lazy(() => yt(() => import("./LengthTunePanel-BozNNddX.js"), __vite__mapDeps([15,2,3,0,1,4])).then((e) => ({
    default: e.LengthTunePanel
  }))), gc = c.lazy(() => yt(() => import("./ReceiptPanel-CAeCYo-d.js"), __vite__mapDeps([16,2,3,0,1,4])).then((e) => ({
    default: e.ReceiptPanel
  }))), yc = c.lazy(() => yt(() => import("./PcbGettingStarted-CJuXtU15.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([17,1,2,3,0,4,6,7,8,9,10,11,12,13])).then((e) => ({
    default: e.PcbGettingStarted
  }))), vc = "transparent", wc = "transparent", Ht = 5;
  function bc({ containerRef: e }) {
    const { camera: t, size: o } = Pe(), n = De((r) => r.scene);
    return c.useEffect(() => {
      const r = e.current;
      if (!r) return;
      const a = r;
      let s = false, l = {
        x: 0,
        y: 0
      }, u = false, m = null;
      function x(f) {
        f.button === 0 && f.pointerType === "mouse" && (u = f.shiftKey, l = {
          x: f.clientX,
          y: f.clientY
        }, s = true, m = document.createElement("div"), m.className = "pointer-events-none absolute z-20 border-2 border-brand bg-brand/10", m.style.left = "0", m.style.top = "0", m.style.width = "0", m.style.height = "0", m.style.display = "none", a.appendChild(m));
      }
      function d(f) {
        if (!s || !m) return;
        const p = a.getBoundingClientRect(), v = Math.min(l.x, f.clientX) - p.left, P = Math.min(l.y, f.clientY) - p.top, b = Math.abs(f.clientX - l.x), h = Math.abs(f.clientY - l.y);
        (b >= Ht || h >= Ht) && (m.style.display = "block", m.style.left = `${v}px`, m.style.top = `${P}px`, m.style.width = `${b}px`, m.style.height = `${h}px`);
      }
      function g(f) {
        if (!s) return;
        s = false, m && (m.remove(), m = null);
        const p = Math.abs(f.clientX - l.x), v = Math.abs(f.clientY - l.y);
        if (p < Ht && v < Ht) return;
        const P = De.getState().scene;
        if (!P) return;
        const b = oe.getState().parts, h = $.getState().selectedPartIds, w = a.getBoundingClientRect(), S = Math.min(l.x, f.clientX) - w.left, C = Math.max(l.x, f.clientX) - w.left, j = Math.min(l.y, f.clientY) - w.top, R = Math.max(l.y, f.clientY) - w.top, A = [];
        if (b.forEach((N, W) => {
          const D = P.parts[W];
          if (!D) return;
          const F = D.mesh;
          if (!F.positions.length) return;
          const _ = new rt(), X = new E();
          for (let ie = 0; ie < F.positions.length; ie += 3) X.set(F.positions[ie], F.positions[ie + 1], F.positions[ie + 2]), _.expandByPoint(X);
          const se = [
            new E(_.min.x, _.min.y, _.min.z),
            new E(_.max.x, _.min.y, _.min.z),
            new E(_.min.x, _.max.y, _.min.z),
            new E(_.max.x, _.max.y, _.min.z),
            new E(_.min.x, _.min.y, _.max.z),
            new E(_.max.x, _.min.y, _.max.z),
            new E(_.min.x, _.max.y, _.max.z),
            new E(_.max.x, _.max.y, _.max.z)
          ];
          let re = 1 / 0, xe = -1 / 0, ge = 1 / 0, B = -1 / 0;
          for (const ie of se) {
            ie.project(t);
            const Ce = (ie.x + 1) / 2 * o.width, ee = (1 - ie.y) / 2 * o.height;
            re = Math.min(re, Ce), xe = Math.max(xe, Ce), ge = Math.min(ge, ee), B = Math.max(B, ee);
          }
          xe >= S && re <= C && B >= j && ge <= R && A.push(N.id);
        }), u) {
          const N = /* @__PURE__ */ new Set([
            ...h,
            ...A
          ]);
          $.getState().selectMultiple(Array.from(N));
        } else $.getState().selectMultiple(A);
      }
      return a.addEventListener("pointerdown", x), window.addEventListener("pointermove", d), window.addEventListener("pointerup", g), () => {
        a.removeEventListener("pointerdown", x), window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", g), m && m.remove();
      };
    }, [
      t,
      o,
      e,
      n
    ]), null;
  }
  function Sc() {
    const e = c.useRef(null), t = $((S) => S.clearSelection), o = gt((S) => S.selectIssue), n = $((S) => S.hoveredItem), r = $((S) => S.isGizmoHovered), a = $((S) => S.isDraggingGizmo), s = $((S) => S.renderMode), l = $((S) => S.raytraceAvailable), { isDark: u } = at(), m = xn((S) => S.viewMode), x = le((S) => S.active), d = le((S) => S.layout), g = Tt((S) => S.activeBoardNodeId) != null, f = _t(), [p, v] = c.useState(0), P = c.useRef(0), b = c.useRef(false), h = c.useCallback(() => {
      P.current >= 3 || (P.current += 1, b.current = false, v((S) => S + 1));
    }, []), w = c.useCallback(() => {
      b.current = true, performance.mark("canvas-ready");
    }, []);
    return c.useEffect(() => (window.addEventListener("vcad:gl-stuck-lost", h), () => window.removeEventListener("vcad:gl-stuck-lost", h)), [
      h
    ]), c.useEffect(() => {
      const S = setTimeout(() => {
        b.current || h();
      }, 2500), C = setTimeout(() => {
        P.current = 0;
      }, 12e3);
      return () => {
        clearTimeout(S), clearTimeout(C);
      };
    }, [
      p,
      h
    ]), uc(), dc(), pc(), c.useEffect(() => {
      const S = e.current;
      if (!S) return;
      const C = (N) => nr(N.clientX, N.clientY), j = (N) => or(N.clientX, N.clientY), R = () => sr(), A = (N) => {
        N.preventDefault();
      };
      return S.addEventListener("pointerdown", C), window.addEventListener("pointermove", j), window.addEventListener("pointerup", R), window.addEventListener("pointercancel", R), S.addEventListener("contextmenu", A), () => {
        S.removeEventListener("pointerdown", C), window.removeEventListener("pointermove", j), window.removeEventListener("pointerup", R), window.removeEventListener("pointercancel", R), S.removeEventListener("contextmenu", A);
      };
    }, []), c.useEffect(() => {
      const S = e.current;
      S && (S.style.cursor = n && !r && !a ? "pointer" : "");
    }, [
      n,
      r,
      a
    ]), m === "2d" ? i.jsx("div", {
      className: "absolute inset-0 overflow-hidden",
      style: {
        backgroundColor: u ? "#0a0a0a" : "#ffffff"
      },
      children: i.jsx(cc, {})
    }) : i.jsxs("div", {
      ref: e,
      "data-viewport-root": true,
      className: "absolute inset-0",
      style: {
        touchAction: "none",
        userSelect: "none",
        WebkitUserSelect: "none"
      },
      children: [
        i.jsx(qo, {
          frameloop: f ? "always" : "demand",
          camera: {
            position: [
              50,
              50,
              50
            ],
            fov: 50,
            near: 0.1,
            far: 1e4
          },
          onPointerMissed: (S) => {
            if (Jt()) return;
            const C = $.getState();
            C.isDraggingGizmo || C.isGizmoHovered || S.metaKey || S.shiftKey || (x || t(), o(null));
          },
          onCreated: w,
          shadows: "soft",
          gl: {
            alpha: true,
            antialias: true,
            logarithmicDepthBuffer: true,
            toneMapping: jo,
            toneMappingExposure: 1,
            outputColorSpace: yn,
            preserveDrawingBuffer: true
          },
          style: {
            background: "transparent"
          },
          children: i.jsxs(Ms, {
            store: Es,
            children: [
              i.jsx(ac, {
                mode: "3d",
                pcbEditFocus: g
              }),
              !x && i.jsx(bc, {
                containerRef: e
              })
            ]
          })
        }, p),
        x && i.jsxs(i.Fragment, {
          children: [
            d === "schematic" && i.jsx(c.Suspense, {
              fallback: null,
              children: i.jsx(mc, {})
            }),
            i.jsx(c.Suspense, {
              fallback: null,
              children: i.jsx(xc, {})
            }),
            i.jsx(c.Suspense, {
              fallback: null,
              children: i.jsx(gc, {})
            }),
            i.jsx(c.Suspense, {
              fallback: null,
              children: i.jsx(yc, {})
            }),
            i.jsx(c.Suspense, {
              fallback: null,
              children: i.jsx(hc, {})
            })
          ]
        }),
        !x && !f && s === "raytrace" && l && i.jsx(wi, {}),
        i.jsx(ar, {}),
        !x && i.jsx("div", {
          className: "pointer-events-none absolute top-3 right-3 z-10 flex items-center gap-2",
          children: i.jsx(lc, {})
        })
      ]
    });
  }
  _c = Object.freeze(Object.defineProperty({
    __proto__: null,
    BG_DARK: vc,
    BG_LIGHT: wc,
    Viewport: Sc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  _c as V,
  __tla,
  at as u
};
