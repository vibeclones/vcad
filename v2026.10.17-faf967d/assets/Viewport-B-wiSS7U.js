const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Dh9039MG.js","assets/three-drei-vHRsxLlW.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-CYzioFOm.css","assets/SchematicView-CfNI2c9p.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-r_zjQeO8.js","assets/index-C1SNz_Pz.js","assets/camera-settings-store-C_4_fmqd.js","assets/timeline-sample-CGUCnv8-.js","assets/xr-collab-DfFXwcSW.js","assets/pcb-interference-D-jt2V7v.js","assets/adapter-BA8pXygB.js","assets/ElectronicsViewToggle-D34sISGo.js","assets/LengthTunePanel-0qhdkvBP.js","assets/ReceiptPanel-TweAUwal.js","assets/PcbGettingStarted-BXWhGRdL.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { G as Mo, L as Ae, c as Eo, a as hn, b as Ho, H as it, _ as yt, T as Yo, d as Xo, P as Uo, C as qo, O as Ko, e as Zo, f as Jo, E as An, g as wt } from "./three-drei-vHRsxLlW.js";
import { b as c, k as r, d as Pe, f as Qe, C as Qo } from "./three-fiber-GW7QWJN8.js";
import { bk as $, bc as oe, c4 as es, bj as ke, eE as kt, aD as Pn, c8 as ue, aJ as ts, au as ns, cK as os, eU as Ct, dK as ss, ak as rs, b1 as is, an as as, bd as De, bg as zt, d as jn, a_ as cs, bf as Dn, aE as ls, eV as gt, bp as Cn, aN as Ke, eW as Rn, eX as Po, bi as Ye, eY as Tn, eZ as us, dN as Nt, bh as tt, cu as ds, at as fs, e_ as jo, ao as Co, l as kn, e$ as ps, bb as Tt, ah as zn, c9 as ms, aj as hs, f0 as _t, f1 as Rt, ba as xs, f2 as gs, br as ys, a4 as xn, ai as Ro, aM as dt, eI as gn, f3 as vs, f4 as ws, f5 as bs, f6 as Ss, A as Ms, f7 as Es, f8 as ko, f9 as Ps, fa as js, fb as Cs, fc as Rs, fd as ks, fe as zs, __tla as __tla_0 } from "./index-Dh9039MG.js";
import { j as ft, k as $e, D as Ue, l as Ut, h as We, aj as Is, E as Zt, a as E, a5 as rt, F as It, v as zo, a1 as As, af as Ot, b5 as _n, x as Ds, q as Ts, s as _s, M as At, Q as st, r as Fs, b6 as Ls, b7 as Ns, b8 as Os, b9 as Fn, R as yn, V as Ln, z as Bs, P as Qt, K as Vs, H as Nn, an as $s, e as vn, A as Io } from "./three-tnxpQXqG.js";
import { p as On, f as Ao, b as Ws, g as Do, a as To } from "./sub-feature-geometry-tgU-o6Qd.js";
import { a as Gs, q as Hs, d as Ys } from "./three-postprocessing-r_zjQeO8.js";
import { h as Xs, g as Us, r as en } from "./index-C1SNz_Pz.js";
import { u as Yt, a as qs, g as Ks } from "./camera-settings-store-C_4_fmqd.js";
import { s as Zs } from "./timeline-sample-CGUCnv8-.js";
import { j as Js } from "./xr-collab-DfFXwcSW.js";
import { a as Qs, i as er } from "./pcb-interference-D-jt2V7v.js";
import { s as tr, b as nr } from "./adapter-BA8pXygB.js";
let $c, at;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const wn = typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function or(e) {
    return wn == null ? void 0 : wn.addEventListener("change", e), () => wn == null ? void 0 : wn.removeEventListener("change", e);
  }
  function sr() {
    return (wn == null ? void 0 : wn.matches) ?? true;
  }
  at = function() {
    const e = $((s) => s.theme), t = $((s) => s.toggleTheme), o = c.useSyncExternalStore(or, sr, () => true);
    return {
      theme: e,
      toggleTheme: t,
      isDark: e === "system" ? o : e === "dark"
    };
  };
  function rr() {
    const { isDark: e } = at(), t = $((l) => l.isOrbiting), o = oe((l) => l.parts.length > 0), n = t || !o, s = c.useMemo(() => [
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
    ], []), i = c.useMemo(() => [
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
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx(Mo, {
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
        n && r.jsxs(r.Fragment, {
          children: [
            r.jsx(Ae, {
              points: s,
              color: e ? "#e06c75" : "#c94f4f",
              lineWidth: 1.5,
              transparent: true,
              opacity: 0.7,
              depthWrite: false,
              renderOrder: -1
            }),
            r.jsx(Ae, {
              points: a,
              color: e ? "#98c379" : "#5a9a4a",
              lineWidth: 1.5,
              transparent: true,
              opacity: 0.7,
              depthWrite: false,
              renderOrder: -1
            }),
            r.jsx(Ae, {
              points: i,
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
  const ir = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, Bn = ir ? 8 : 4, ar = Bn * Bn, nt = {
    startX: 0,
    startY: 0,
    down: false,
    wasDrag: false
  };
  function cr(e, t) {
    nt.startX = e, nt.startY = t, nt.down = true, nt.wasDrag = false;
  }
  function lr(e, t) {
    if (!nt.down || nt.wasDrag) return;
    const o = e - nt.startX, n = t - nt.startY;
    o * o + n * n > ar && (nt.wasDrag = true);
  }
  function ur() {
    nt.down = false;
  }
  function Jt() {
    return nt.wasDrag;
  }
  const ot = Eo((e) => ({
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
  })), dr = [
    "Unknown",
    "Plane",
    "Cylinder",
    "Sphere",
    "Cone",
    "Bilinear",
    "Torus",
    "BSpline",
    "FanFill"
  ], _o = [
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
  function fr(e, t) {
    const { positions: o, indices: n, faceKinds: s } = e;
    if (t < 0 || t * 3 + 2 >= n.length) return null;
    const a = n[t * 3], i = n[t * 3 + 1], l = n[t * 3 + 2], u = [
      o[a * 3],
      o[a * 3 + 1],
      o[a * 3 + 2]
    ], p = [
      o[i * 3],
      o[i * 3 + 1],
      o[i * 3 + 2]
    ], h = [
      o[l * 3],
      o[l * 3 + 1],
      o[l * 3 + 2]
    ], d = [
      (u[0] + p[0] + h[0]) / 3,
      (u[1] + p[1] + h[1]) / 3,
      (u[2] + p[2] + h[2]) / 3
    ], g = p[0] - u[0], f = p[1] - u[1], y = p[2] - u[2], x = h[0] - u[0], P = h[1] - u[1], b = h[2] - u[2];
    let m = f * b - y * P, w = y * x - g * b, S = g * P - f * x;
    const j = Math.sqrt(m * m + w * w + S * S);
    j > 0 && (m /= j, w /= j, S /= j);
    let C = 0, z = 0, A = 0;
    const F = o.length / 3;
    for (let xe = 0; xe < F; xe++) C += o[xe * 3], z += o[xe * 3 + 1], A += o[xe * 3 + 2];
    F > 0 && (C /= F, z /= F, A /= F);
    const W = d[0] - C, D = d[1] - z, L = d[2] - A, _ = Math.sqrt(W * W + D * D + L * L) || 1, X = (m * W + w * D + S * L) / _, se = (s == null ? void 0 : s[t]) ?? 0, re = dr[se] ?? `kind(${se})`;
    return {
      triangleIndex: t,
      faceKind: se,
      faceKindName: re,
      vertexIds: [
        a,
        i,
        l
      ],
      positions: [
        u,
        p,
        h
      ],
      centroid: d,
      ccwNormal: [
        m,
        w,
        S
      ],
      outwardDot: X
    };
  }
  function pr() {
    const e = ot((i) => i.currentInspection), t = ot((i) => i.setCurrentInspection);
    if (!ot((i) => i.inspectTriangles) || !e) return null;
    const n = _o[e.faceKind] ?? "#888", { outwardDot: s } = e, a = s > 0.5 ? "outward \u2713" : s < -0.5 ? "INWARD \u2717" : "sideways";
    return r.jsxs("div", {
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
        r.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6
          },
          children: [
            r.jsxs("div", {
              children: [
                r.jsx("span", {
                  style: {
                    display: "inline-block",
                    width: 10,
                    height: 10,
                    background: n,
                    marginRight: 6,
                    verticalAlign: "middle"
                  }
                }),
                r.jsx("strong", {
                  children: e.faceKindName
                }),
                r.jsxs("span", {
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
            r.jsx("button", {
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
        r.jsxs("div", {
          style: {
            color: "#aaa"
          },
          children: [
            "verts: ",
            e.vertexIds.map((i) => `#${i}`).join("  ")
          ]
        }),
        e.positions.map((i, l) => r.jsxs("div", {
          style: {
            color: "#ccc"
          },
          children: [
            " ",
            "(",
            i[0].toFixed(3),
            ", ",
            i[1].toFixed(3),
            ", ",
            i[2].toFixed(3),
            ")"
          ]
        }, l)),
        r.jsxs("div", {
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
        r.jsxs("div", {
          style: {
            color: s < 0 ? "#ff6666" : "#66ff66"
          },
          children: [
            "outward dot: ",
            s.toFixed(3),
            " \u2014 ",
            a
          ]
        })
      ]
    });
  }
  function mr() {
    const e = ot((n) => n.currentInspection), t = c.useMemo(() => {
      if (!e) return null;
      const n = new ft(), s = new Float32Array([
        ...e.positions[0],
        ...e.positions[1],
        ...e.positions[2]
      ]);
      return n.setAttribute("position", new $e(s, 3)), n.setIndex([
        0,
        1,
        2
      ]), n;
    }, [
      e
    ]);
    if (!e || !t) return null;
    const o = _o[e.faceKind] ?? "#ffffff";
    return r.jsx("mesh", {
      geometry: t,
      renderOrder: 999,
      children: r.jsx("meshBasicMaterial", {
        color: o,
        transparent: true,
        opacity: 0.5,
        depthTest: false,
        side: Ue
      })
    });
  }
  const Vn = new We(1, 0.45, 0.1), $n = new We(0.62, 0.32, 0.1), hr = new We(54527), tn = Math.PI / 180, Fo = 0.01;
  function Lo({ color: e, vertexColors: t, emissive: o, emissiveIntensity: n, metalness: s, roughness: a, envMapIntensity: i = 1, side: l = Ue, transmission: u, ior: p, thickness: h, attenuationDistance: d, attenuationColor: g, clearcoat: f, clearcoatRoughness: y, transparent: x, opacity: P, depthWrite: b }) {
    if (u !== void 0 && u > 0 || f !== void 0 && f > 0) {
      const w = g ? new We(g[0], g[1], g[2]) : void 0;
      return r.jsx("meshPhysicalMaterial", {
        color: e,
        vertexColors: t,
        emissive: o,
        emissiveIntensity: n,
        metalness: s,
        roughness: a,
        envMapIntensity: i,
        flatShading: false,
        side: l,
        transmission: u ?? 0,
        ior: p ?? 1.5,
        thickness: h ?? 0.5,
        attenuationDistance: d ?? 1 / 0,
        attenuationColor: w,
        clearcoat: f ?? 0,
        clearcoatRoughness: y ?? 0,
        transparent: x || (u ?? 0) > 0,
        opacity: P ?? 1,
        depthWrite: b ?? true
      });
    }
    return r.jsx("meshStandardMaterial", {
      color: e,
      vertexColors: t,
      emissive: o,
      emissiveIntensity: n,
      metalness: s,
      roughness: a,
      envMapIntensity: i,
      flatShading: false,
      side: l,
      transparent: x,
      opacity: P ?? 1,
      depthWrite: b ?? true
    });
  }
  function xr(e, t) {
    const o = e.indices, n = e.positions, s = o[t * 3], a = o[t * 3 + 1], i = o[t * 3 + 2], l = new E(n[s * 3], n[s * 3 + 1], n[s * 3 + 2]), u = new E(n[a * 3], n[a * 3 + 1], n[a * 3 + 2]), p = new E(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]), h = u.clone().sub(l), d = p.clone().sub(l), g = h.cross(d).normalize(), f = [], y = o.length / 3;
    for (let x = 0; x < y; x++) {
      const P = o[x * 3], b = o[x * 3 + 1], m = o[x * 3 + 2], w = new E(n[P * 3], n[P * 3 + 1], n[P * 3 + 2]), S = new E(n[b * 3], n[b * 3 + 1], n[b * 3 + 2]), j = new E(n[m * 3], n[m * 3 + 1], n[m * 3 + 2]), C = S.clone().sub(w), z = j.clone().sub(w);
      C.cross(z).normalize().dot(g) > 1 - Fo && f.push(x);
    }
    return f;
  }
  function gr(e, t) {
    const o = new ft(), n = [];
    for (const s of t) {
      const a = e.indices[s * 3], i = e.indices[s * 3 + 1], l = e.indices[s * 3 + 2];
      n.push(e.positions[a * 3], e.positions[a * 3 + 1], e.positions[a * 3 + 2], e.positions[i * 3], e.positions[i * 3 + 1], e.positions[i * 3 + 2], e.positions[l * 3], e.positions[l * 3 + 1], e.positions[l * 3 + 2]);
    }
    return o.setAttribute("position", new It(n, 3)), o.computeVertexNormals(), o;
  }
  function Wn(e, t, o) {
    const n = e.indices[t * 3], s = e.indices[t * 3 + 1], a = e.indices[t * 3 + 2], i = new E(e.positions[n * 3], e.positions[n * 3 + 1], e.positions[n * 3 + 2]), l = new E(e.positions[s * 3], e.positions[s * 3 + 1], e.positions[s * 3 + 2]), u = new E(e.positions[a * 3], e.positions[a * 3 + 1], e.positions[a * 3 + 2]), p = l.clone().sub(i).cross(u.clone().sub(i)).normalize(), h = p.dot(i), d = 0.01, g = /* @__PURE__ */ new Map(), f = e.indices.length / 3;
    for (let S = 0; S < f; S++) {
      const j = e.indices[S * 3], C = e.indices[S * 3 + 1], z = e.indices[S * 3 + 2], A = new E(e.positions[j * 3], e.positions[j * 3 + 1], e.positions[j * 3 + 2]), F = new E(e.positions[C * 3], e.positions[C * 3 + 1], e.positions[C * 3 + 2]), W = new E(e.positions[z * 3], e.positions[z * 3 + 1], e.positions[z * 3 + 2]);
      if (!(F.clone().sub(A).cross(W.clone().sub(A)).normalize().dot(p) < 1 - Fo) && !(Math.abs(p.dot(A) - h) > d)) for (const L of [
        A,
        F,
        W
      ]) {
        const _ = `${L.x.toFixed(4)},${L.y.toFixed(4)},${L.z.toFixed(4)}`;
        g.has(_) || g.set(_, {
          x: L.x,
          y: L.y,
          z: L.z
        });
      }
    }
    const y = Array.from(g.values());
    let x = 0, P = 0, b = 0;
    for (const S of y) x += S.x, P += S.y, b += S.z;
    const m = Math.max(y.length, 1), w = {
      x: x / m,
      y: P / m,
      z: b / m
    };
    return {
      partId: o,
      faceIndex: t,
      normal: {
        x: p.x,
        y: p.y,
        z: p.z
      },
      centroid: w,
      vertices: y
    };
  }
  function yr({ mesh: e, materialKey: t }) {
    const o = c.useRef(null), n = c.useRef(null), [s, a] = c.useState(false), i = $((f) => f.showWireframe), l = $((f) => f.isOrbiting), u = Pe((f) => f.invalidate), p = oe((f) => f.document.materials), h = c.useMemo(() => {
      if (p[t]) return p[t];
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
      p,
      t
    ]), d = c.useMemo(() => h ? new We(h.color[0], h.color[1], h.color[2]) : new We(0.55, 0.55, 0.55), [
      h
    ]);
    c.useEffect(() => {
      a(false);
      const f = o.current;
      if (!f) return;
      let y = false;
      return (async () => {
        const { getKernelWasmSync: x } = await yt(async () => {
          const { getKernelWasmSync: C } = await import("./index-Dh9039MG.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }).then((z) => z.fH);
          return {
            getKernelWasmSync: C
          };
        }, __vite__mapDeps([0,1,2,3,4])), P = x();
        if (y) return;
        const b = new Float32Array(e.positions), m = new Uint32Array(e.indices);
        let w, S, j;
        if (P == null ? void 0 : P.renderBakeMesh) {
          const C = JSON.parse(P.renderBakeMesh(JSON.stringify({
            positions: Array.from(b),
            indices: Array.from(m)
          })));
          w = new Float32Array(C.positions), S = new Uint32Array(C.indices), j = new Float32Array(C.normals);
        } else w = b, S = m, j = new Float32Array(0);
        f.setAttribute("position", new $e(w, 3)), f.setIndex(new $e(S, 1)), j.length === w.length ? f.setAttribute("normal", new $e(j, 3)) : f.computeVertexNormals(), f.computeBoundingSphere(), f.computeBoundingBox(), a(true), u();
      })(), () => {
        y = true, f.dispose();
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
    ]), r.jsxs("mesh", {
      ref: n,
      castShadow: true,
      receiveShadow: true,
      children: [
        r.jsx("bufferGeometry", {
          ref: o
        }),
        r.jsx(Lo, {
          color: d,
          metalness: (h == null ? void 0 : h.metallic) ?? 0,
          roughness: (h == null ? void 0 : h.roughness) ?? 0.7,
          transmission: h == null ? void 0 : h.transmission,
          ior: h == null ? void 0 : h.ior,
          thickness: h == null ? void 0 : h.thickness,
          attenuationDistance: h == null ? void 0 : h.attenuationDistance,
          attenuationColor: h == null ? void 0 : h.attenuationColor,
          clearcoat: h == null ? void 0 : h.clearcoat,
          clearcoatRoughness: h == null ? void 0 : h.clearcoatRoughness
        }),
        i && s && r.jsx(hn, {
          threshold: 15,
          color: "#666"
        })
      ]
    });
  }
  const Gn = c.memo(function({ partInfo: t, mesh: o, materialKey: n, selected: s, transform: a, selectionId: i, ghosted: l = false }) {
    const u = c.useRef(null), p = c.useRef(null), [h, d] = c.useState(false), g = $((R) => R.select), f = $((R) => R.toggleSelect), y = $((R) => R.selectItem), x = $((R) => R.setHoveredItem), P = $((R) => R.selectionFilter), b = $((R) => R.showWireframe), m = $((R) => R.hoveredPartId), w = $((R) => R.setHoveredPartId), S = Pe((R) => R.camera), j = Pe((R) => R.size), C = Pe((R) => R.invalidate), z = oe((R) => R.document.materials), A = oe((R) => R.renamePart), F = es((R) => {
      var _a2;
      return ((_a2 = R.fieldOverlay) == null ? void 0 : _a2.partId) === t.id ? R.fieldOverlay.colors : null;
    }), W = ke((R) => R.faceSelectionMode), D = ke((R) => R.hoveredFace), L = ke((R) => R.setHoveredFace), _ = ke((R) => R.selectFace), X = $((R) => R.isOrbiting), se = $((R) => R.isDraggingGizmo), re = $((R) => R.isGizmoHovered), xe = $((R) => R.captureMode), ge = s && !xe, B = i ?? t.id, ie = $((R) => R.hoveredItem), je = m === B || ie != null && ie.kind !== "segment" && ie.kind !== "constraint" && (ie.kind === "part" ? ie.id === B : ie.partId === t.id), ee = W && (D == null ? void 0 : D.partId) === t.id, Ee = c.useMemo(() => {
      if (X || !ee || (D == null ? void 0 : D.faceIndex) == null) return null;
      const R = xr(o, D.faceIndex);
      return gr(o, R);
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
    const [de, be] = c.useState(false), [Fe, Ge] = c.useState(t.name), Oe = c.useRef(null), Se = $((R) => R.previewMaterial), ze = c.useMemo(() => (Se == null ? void 0 : Se.partId) === t.id ? Se.materialKey : n, [
      Se,
      t.id,
      n
    ]), me = c.useMemo(() => {
      const R = (v) => v ? {
        name: v.name,
        color: v.color,
        metallic: v.metallic,
        roughness: v.roughness,
        transmission: v.transmission,
        ior: v.ior,
        thickness: v.thickness,
        attenuationDistance: v.attenuationDistance,
        attenuationColor: v.attenuationColor,
        clearcoat: v.clearcoat,
        clearcoatRoughness: v.clearcoatRoughness
      } : null;
      if ((Se == null ? void 0 : Se.partId) === t.id) {
        const v = Se.materialKey;
        if (z[v]) return z[v];
        const I = R(kt(v));
        if (I) return I;
      }
      return z[n] ? z[n] : R(kt(n));
    }, [
      z,
      n,
      Se,
      t.id
    ]), Ce = c.useMemo(() => Xs(ze) ? Us(ze) : null, [
      ze
    ]), Le = c.useMemo(() => Ce ? new Ut({
      vertexShader: Ce.vertexShader,
      fragmentShader: Ce.fragmentShader,
      uniforms: Ce.uniforms,
      side: Ue
    }) : null, [
      Ce
    ]);
    c.useEffect(() => () => {
      Le == null ? void 0 : Le.dispose();
    }, [
      Le
    ]);
    const V = c.useMemo(() => me ? new We(me.color[0], me.color[1], me.color[2]) : new We(0.55, 0.55, 0.55), [
      me
    ]), Ne = !l && !xe && (ge || je && !W), Xe = c.useMemo(() => {
      var _a2;
      if (!h) return false;
      const R = u.current;
      if (!R) return false;
      const v = new Is(R, 15), I = ((_a2 = v.attributes.position) == null ? void 0 : _a2.count) ?? 0;
      return v.dispose(), I === 0;
    }, [
      h,
      o
    ]);
    c.useEffect(() => {
      Ge(t.name);
    }, [
      t.name,
      s
    ]), c.useEffect(() => {
      var _a2;
      de && ((_a2 = Oe.current) == null ? void 0 : _a2.select());
    }, [
      de
    ]), c.useEffect(() => {
      d(false);
      const R = u.current;
      if (!R) return;
      const v = new Float32Array(o.positions), I = new Uint32Array(o.indices);
      if (R.setAttribute("position", new $e(v, 3)), R.setIndex(new $e(I, 1)), o.normals && o.normals.length === v.length) {
        const N = new Float32Array(o.normals);
        R.setAttribute("normal", new $e(N, 3));
      } else console.warn("[SceneMesh] kernel emitted mesh without normals \u2014 rebuild @vcad/kernel-wasm; falling back to computed normals"), R.computeVertexNormals();
      if (F && F.length === v.length) R.setAttribute("color", new $e(F, 3));
      else if (o.colors && o.colors.length === v.length) {
        const N = new Float32Array(o.colors);
        R.setAttribute("color", new $e(N, 3));
      } else R.deleteAttribute("color");
      return R.computeBoundingSphere(), R.computeBoundingBox(), d(true), C(), () => {
        R.dispose();
      };
    }, [
      o,
      t.name,
      C,
      F
    ]), c.useEffect(() => {
      const R = p.current;
      if (R) {
        if (a) {
          R.position.set(a.translation.x, a.translation.y, a.translation.z);
          const v = new Zt(a.rotation.x * tn, a.rotation.y * tn, a.rotation.z * tn, "ZYX");
          R.quaternion.setFromEuler(v), R.scale.set(a.scale.x, a.scale.y, a.scale.z);
        } else R.position.set(0, 0, 0), R.quaternion.identity(), R.scale.set(1, 1, 1);
        C();
      }
    }, [
      a,
      C
    ]);
    const ae = c.useMemo(() => {
      if (!o.positions.length) return new E();
      const R = new rt(), v = new E();
      for (let N = 0; N < o.positions.length; N += 3) v.set(o.positions[N], o.positions[N + 1], o.positions[N + 2]), R.expandByPoint(v);
      const I = new E();
      return R.getCenter(I), I.z = R.max.z + 4, I;
    }, [
      o.positions
    ]), Q = c.useCallback(() => {
      const R = Fe.trim();
      R && R !== t.name && A(t.id, R), be(false);
    }, [
      Fe,
      t.id,
      t.name,
      A
    ]), U = c.useCallback(() => {
      Ge(t.name), be(false);
    }, [
      t.name
    ]), we = ot((R) => R.inspectTriangles), he = ot((R) => R.setCurrentInspection), He = c.useCallback((R) => {
      if (Jt() || se || re) return;
      if (R.stopPropagation(), we && R.faceIndex != null) {
        const I = fr(o, R.faceIndex);
        I && (he(I), console.log("[triangle-inspector]", I));
        return;
      }
      if (W && R.faceIndex != null) {
        const I = Wn(o, R.faceIndex, t.id);
        _(I);
        return;
      }
      if (R.nativeEvent.shiftKey || R.nativeEvent.metaKey) {
        f(B);
        return;
      }
      if (R.faceIndex != null) {
        const I = On({
          triIndex: R.faceIndex,
          hitPoint: R.point,
          mesh: o,
          partId: t.id,
          filter: P,
          camera: S,
          viewport: j
        });
        if (I) {
          y(I);
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
      y,
      P,
      S,
      j,
      we,
      he
    ]), Ie = c.useCallback((R) => {
      if (!(X || se || re)) {
        if (W && R.faceIndex != null) {
          R.stopPropagation();
          const v = Wn(o, R.faceIndex, t.id);
          L(v);
          return;
        }
        if (R.faceIndex != null) {
          R.stopPropagation();
          const v = On({
            triIndex: R.faceIndex,
            hitPoint: R.point,
            mesh: o,
            partId: t.id,
            filter: P,
            camera: S,
            viewport: j
          });
          x(v || {
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
      L,
      x,
      P,
      S,
      j
    ]), Ze = c.useCallback((R) => {
      X || se || re || (R.stopPropagation(), W || w(t.id));
    }, [
      X,
      se,
      re,
      W,
      t.id,
      w
    ]), Te = c.useCallback(() => {
      X || (W ? L(null) : w(null));
    }, [
      X,
      W,
      L,
      w
    ]), qe = c.useRef(null);
    return c.useEffect(() => {
      const R = p.current;
      R && (qe.current || (qe.current = R.raycast.bind(R)), X || l ? R.raycast = () => {
      } : R.raycast = qe.current);
    }, [
      X,
      l
    ]), r.jsxs("mesh", {
      ref: p,
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
        r.jsx("bufferGeometry", {
          ref: u
        }),
        !Le && r.jsx(Lo, {
          color: o.colors || F ? void 0 : V,
          vertexColors: !!o.colors || !!F,
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
        b && h && r.jsx(hn, {
          threshold: 15,
          color: "#666"
        }),
        Ne && h && !Xe && r.jsx(hn, {
          threshold: 15,
          color: ge ? Vn : $n,
          lineWidth: ge ? 3 : 2,
          renderOrder: 1
        }),
        Ne && h && Xe && r.jsx(Ho, {
          color: ge ? Vn : $n,
          thickness: ge ? 3 : 2,
          angle: Math.PI,
          renderOrder: 1
        }),
        Ee && r.jsx("mesh", {
          geometry: Ee,
          renderOrder: 1,
          children: r.jsx("meshBasicMaterial", {
            color: hr,
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
        s && !W && r.jsx(it, {
          position: ae,
          center: true,
          style: {
            pointerEvents: "auto"
          },
          children: r.jsxs("div", {
            className: "flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-text whitespace-nowrap bg-surface/90 backdrop-blur-sm border border-border rounded-md shadow-sm",
            children: [
              de ? r.jsx("input", {
                ref: Oe,
                type: "text",
                value: Fe,
                onClick: (R) => R.stopPropagation(),
                onFocus: (R) => R.currentTarget.select(),
                onChange: (R) => Ge(R.target.value),
                onBlur: Q,
                onKeyDown: (R) => {
                  R.key === "Enter" && Q(), R.key === "Escape" && U();
                },
                className: "min-w-[80px] bg-transparent text-text outline-none",
                autoFocus: true
              }) : r.jsx("button", {
                type: "button",
                onClick: (R) => {
                  R.stopPropagation(), be(true);
                },
                className: "text-text",
                children: t.name
              }),
              !de && Pn(t) && r.jsx("button", {
                type: "button",
                onClick: (R) => {
                  R.stopPropagation(), ue.getState().enter();
                },
                className: "px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors",
                children: "Edit"
              }),
              !de && (ts(t) || ns(t)) && r.jsx("button", {
                type: "button",
                onClick: (R) => {
                  R.stopPropagation(), os.getState().openPanel();
                },
                className: "px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors",
                children: "Edit"
              })
            ]
          })
        })
      ]
    });
  }), vr = {
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
  }, wr = {
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
    return (o == null ? void 0 : o.color) ?? vr[(o == null ? void 0 : o.element) ?? "C"] ?? [
      0.85,
      0.4,
      0.85
    ];
  }
  function Hn(e, t, o) {
    const n = e.species[e.speciesIdx[t]], s = (n == null ? void 0 : n.radius) ?? wr[(n == null ? void 0 : n.element) ?? "C"] ?? 0.75;
    return o === "space_filling" ? s * 1.8 : o === "wireframe" ? s * 0.2 : s * 0.42;
  }
  const No = `
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
}`, br = `
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
}`, Sr = `
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
${No}
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
}`, Mr = `
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
}`, Er = `
precision highp float;
uniform float logDepthBufFC;
uniform mat4 projectionMatrix; // three binds this built-in when declared in-stage
in vec3 vColor;
in vec3 vNormalV;
in vec3 vViewPos;
out vec4 fragColor;
${No}
void main(){
  vec3 N = normalize(vNormalV);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(-vViewPos);
  vec4 clip = projectionMatrix * vec4(vViewPos, 1.0);
  gl_FragDepth = log2(1.0 + clip.w) * logDepthBufFC * 0.5;
  fragColor = vec4(shadeMolecule(vColor, N, V), 1.0);
}`;
  function Pr({ molecule: e, representation: t = "ball_and_stick" }) {
    const o = c.useRef(null), n = c.useRef(null), s = Ct((b) => b.selectAtom), a = e.positions.length, i = e.bonds ?? [], l = t !== "space_filling", u = c.useMemo(() => {
      let b = 1e-3;
      for (const m of e.positions) b = Math.max(b, Math.hypot(m[0], m[1], m[2]));
      return 34 / b;
    }, [
      e
    ]), p = c.useMemo(() => {
      const b = new zo(2, 2), m = new As();
      m.index = b.index, m.attributes.position = b.attributes.position, m.attributes.uv = b.attributes.uv;
      const w = new Float32Array(a * 3), S = new Float32Array(a), j = new Float32Array(a * 3), C = new Float32Array(a);
      for (let z = 0; z < a; z++) {
        const A = e.positions[z];
        w[z * 3] = A[0] * u, w[z * 3 + 1] = A[1] * u, w[z * 3 + 2] = A[2] * u, S[z] = Hn(e, z, t) * u;
        const F = nn(e, z);
        j[z * 3] = F[0], j[z * 3 + 1] = F[1], j[z * 3 + 2] = F[2], C[z] = z;
      }
      return m.setAttribute("iCenter", new Ot(w, 3)), m.setAttribute("iRadius", new Ot(S, 1)), m.setAttribute("iColor", new Ot(j, 3)), m.setAttribute("iIndex", new Ot(C, 1)), m.instanceCount = a, b.dispose(), m;
    }, [
      e,
      a,
      t,
      u
    ]), h = c.useMemo(() => new Ut({
      glslVersion: _n,
      uniforms: {
        logDepthBufFC: {
          value: 1
        },
        uSelected: {
          value: -1
        }
      },
      vertexShader: br,
      fragmentShader: Sr
    }), []), d = c.useMemo(() => new Ds(1, 12, 8), []), g = c.useMemo(() => new Ts({
      colorWrite: false,
      depthWrite: false
    }), []), f = c.useMemo(() => new _s(1, 1, 1, 12, 1), []), y = c.useMemo(() => new Ut({
      glslVersion: _n,
      uniforms: {
        logDepthBufFC: {
          value: 1
        }
      },
      vertexShader: Mr,
      fragmentShader: Er
    }), []), x = l ? i.length * 2 : 0;
    c.useEffect(() => () => p.dispose(), [
      p
    ]), c.useEffect(() => () => {
      h.dispose(), d.dispose(), g.dispose(), f.dispose(), y.dispose();
    }, [
      h,
      d,
      g,
      f,
      y
    ]), c.useLayoutEffect(() => {
      const b = o.current;
      if (!b || !l) return;
      const m = (t === "wireframe" ? 0.05 : 0.11) * u, w = new At(), S = new E(), j = new E(), C = new st(), z = new E(0, 1, 0), A = new E(), F = new E(), W = new E(), D = new E(), L = new We();
      let _ = 0;
      for (const X of i) {
        const se = e.positions[X.a], re = e.positions[X.b];
        A.set(se[0] * u, se[1] * u, se[2] * u), F.set(re[0] * u, re[1] * u, re[2] * u), D.addVectors(A, F).multiplyScalar(0.5), W.subVectors(F, A);
        const xe = W.length();
        if (xe < 1e-6) {
          w.makeScale(0, 0, 0), b.setMatrixAt(_, w), b.setMatrixAt(_ + 1, w), _ += 2;
          continue;
        }
        W.normalize(), C.setFromUnitVectors(z, W), j.set(m, xe / 2, m), S.addVectors(A, D).multiplyScalar(0.5), w.compose(S, C, j), b.setMatrixAt(_, w);
        const ge = nn(e, X.a);
        L.setRGB(ge[0], ge[1], ge[2]), b.setColorAt(_, L), S.addVectors(D, F).multiplyScalar(0.5), w.compose(S, C, j), b.setMatrixAt(_ + 1, w);
        const B = nn(e, X.b);
        L.setRGB(B[0], B[1], B[2]), b.setColorAt(_ + 1, L), _ += 2;
      }
      b.count = x, b.instanceMatrix.needsUpdate = true, b.instanceColor && (b.instanceColor.needsUpdate = true);
    }, [
      e,
      i,
      l,
      t,
      x,
      u
    ]), c.useLayoutEffect(() => {
      const b = n.current;
      if (!b) return;
      const m = new At(), w = new E(), S = new E(), j = new st();
      for (let C = 0; C < a; C++) {
        const z = e.positions[C], A = Hn(e, C, t) * u;
        w.set(z[0] * u, z[1] * u, z[2] * u), S.set(A, A, A), m.compose(w, j, S), b.setMatrixAt(C, m);
      }
      b.count = a, b.instanceMatrix.needsUpdate = true;
    }, [
      e,
      a,
      t,
      u
    ]), Qe(({ camera: b }) => {
      const m = 2 / Math.log2(b.far + 1);
      h.uniforms.logDepthBufFC.value = m, y.uniforms.logDepthBufFC.value = m;
      const w = Ct.getState().selectedAtomIndex;
      h.uniforms.uSelected.value = w ?? -1;
    });
    const P = (b) => {
      if (Jt()) return;
      b.stopPropagation();
      const m = b.instanceId;
      if (m === void 0) return;
      const w = Ct.getState().selectedAtomIndex;
      s(w === m ? null : m);
    };
    return a === 0 ? null : r.jsxs("group", {
      children: [
        r.jsx("mesh", {
          geometry: p,
          material: h,
          frustumCulled: false
        }),
        r.jsx("instancedMesh", {
          ref: n,
          args: [
            d,
            g,
            a
          ],
          frustumCulled: false,
          onClick: P
        }, a),
        l && i.length > 0 && r.jsx("instancedMesh", {
          ref: o,
          args: [
            f,
            y,
            x
          ],
          frustumCulled: false
        })
      ]
    });
  }
  function jr(e, t) {
    const o = /* @__PURE__ */ new Map(), n = (i, l) => i < l ? `${i},${l}` : `${l},${i}`, s = t.length / 3;
    for (let i = 0; i < s; i++) {
      const l = t[3 * i], u = t[3 * i + 1], p = t[3 * i + 2];
      for (const [h, d] of [
        [
          l,
          u
        ],
        [
          u,
          p
        ],
        [
          p,
          l
        ]
      ]) {
        const g = n(h, d);
        o.set(g, (o.get(g) ?? 0) + 1);
      }
    }
    const a = [];
    for (const [i, l] of o) {
      if (l !== 1) continue;
      const [u, p] = i.split(","), h = parseInt(u, 10), d = parseInt(p, 10);
      a.push(e[3 * h], e[3 * h + 1], e[3 * h + 2], e[3 * d], e[3 * d + 1], e[3 * d + 2]);
    }
    return new Float32Array(a);
  }
  function Cr({ positions: e, indices: t }) {
    const o = c.useMemo(() => {
      const n = jr(e, t), s = new ft();
      return s.setAttribute("position", new $e(n, 3)), s;
    }, [
      e,
      t
    ]);
    return r.jsx("lineSegments", {
      geometry: o,
      renderOrder: 999,
      children: r.jsx("lineBasicMaterial", {
        color: "#ff2040",
        linewidth: 2,
        depthTest: false,
        transparent: true
      })
    });
  }
  const Rr = `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`, kr = `
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
  function zr({ mesh: e }) {
    const t = c.useRef(null), o = c.useMemo(() => new Ut({
      vertexShader: Rr,
      fragmentShader: kr,
      side: Ue
    }), []);
    return c.useEffect(() => {
      const n = t.current;
      if (n) return n.setAttribute("position", new $e(e.positions, 3)), n.setIndex(new $e(e.indices, 1)), e.normals && e.normals.length === e.positions.length ? n.setAttribute("normal", new $e(e.normals, 3)) : n.computeVertexNormals(), () => {
        n.dispose();
      };
    }, [
      e
    ]), r.jsx("mesh", {
      material: o,
      renderOrder: 1,
      children: r.jsx("bufferGeometry", {
        ref: t
      })
    });
  }
  function Ir() {
    const e = $((p) => p.clearanceIndicator), t = $((p) => p.captureMode);
    if (!e || t) return null;
    const { pointA: o, pointB: n, distanceMm: s, pass: a, label: i } = e, l = [
      (o[0] + n[0]) / 2,
      (o[1] + n[1]) / 2,
      (o[2] + n[2]) / 2
    ], u = a ? "#22c55e" : "#ef4444";
    return r.jsxs("group", {
      children: [
        r.jsx(Ae, {
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
        r.jsxs("mesh", {
          position: o,
          children: [
            r.jsx("sphereGeometry", {
              args: [
                0.8,
                12,
                12
              ]
            }),
            r.jsx("meshBasicMaterial", {
              color: u
            })
          ]
        }),
        r.jsxs("mesh", {
          position: n,
          children: [
            r.jsx("sphereGeometry", {
              args: [
                0.8,
                12,
                12
              ]
            }),
            r.jsx("meshBasicMaterial", {
              color: u
            })
          ]
        }),
        r.jsx(it, {
          position: l,
          center: true,
          zIndexRange: [
            40,
            0
          ],
          children: r.jsxs("div", {
            className: "pointer-events-auto flex items-center gap-1.5 rounded border px-1.5 py-0.5 text-[10px] font-mono whitespace-nowrap shadow-sm",
            style: {
              background: "var(--color-bg, #fff)",
              borderColor: u,
              color: u
            },
            children: [
              r.jsxs("span", {
                children: [
                  i ? `${i}: ` : "",
                  s.toFixed(2),
                  " mm"
                ]
              }),
              r.jsx("span", {
                className: "font-sans",
                children: a ? "clear" : "violated"
              }),
              r.jsx("button", {
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
  function Ar({ mesh: e }) {
    const t = c.useRef(null);
    return c.useEffect(() => {
      const o = t.current;
      if (!o) return;
      const n = new Float32Array(e.positions), s = new Uint32Array(e.indices);
      return o.setAttribute("position", new $e(n, 3)), o.setIndex(new $e(s, 1)), o.computeVertexNormals(), o.computeBoundingSphere(), () => {
        o.dispose();
      };
    }, [
      e
    ]), r.jsxs("mesh", {
      children: [
        r.jsx("bufferGeometry", {
          ref: t
        }),
        r.jsx("meshStandardMaterial", {
          color: "#00d4ff",
          transparent: true,
          opacity: 0.4,
          side: Ue,
          depthWrite: false
        })
      ]
    });
  }
  const Dr = "#ff4d4d", Tr = "#2fbf71";
  function Yn({ mesh: e, color: t }) {
    const o = c.useRef(null);
    return c.useEffect(() => {
      const n = o.current;
      if (n) return n.setAttribute("position", new $e(new Float32Array(e.positions), 3)), n.setIndex(new $e(new Uint32Array(e.indices), 1)), n.computeVertexNormals(), n.computeBoundingSphere(), () => {
        n.dispose();
      };
    }, [
      e
    ]), r.jsxs("mesh", {
      renderOrder: 997,
      raycast: () => null,
      children: [
        r.jsx("bufferGeometry", {
          ref: o
        }),
        r.jsx("meshStandardMaterial", {
          color: t,
          transparent: true,
          opacity: 0.35,
          side: Ue,
          depthWrite: false
        })
      ]
    });
  }
  function _r() {
    const e = ss((t) => t.ghost);
    return e ? r.jsxs("group", {
      children: [
        e.removed.map((t, o) => r.jsx(Yn, {
          mesh: t,
          color: Dr
        }, `r${o}`)),
        e.added.map((t, o) => r.jsx(Yn, {
          mesh: t,
          color: Tr
        }, `a${o}`))
      ]
    }) : null;
  }
  const et = 10, Bt = 200, Fr = 5;
  function Je(e) {
    return new E(e.x, e.y, e.z);
  }
  function qt({ position: e, screenPx: t = 1, children: o }) {
    const n = c.useRef(null), { camera: s, size: a } = Pe(), i = c.useRef(new E());
    return Qe(() => {
      const l = n.current;
      if (!l) return;
      const u = Array.isArray(e) ? i.current.fromArray(e) : e, p = s, h = p.position.distanceTo(u), d = (p.fov ?? 50) * Math.PI / 180, g = 2 * h * Math.tan(d / 2) / a.height;
      l.scale.setScalar(Math.max(1e-4, t * g));
    }), r.jsx("group", {
      ref: n,
      position: e,
      children: o
    });
  }
  function _e(e, t, o, n) {
    return new E(t.x + e.x * o.x + e.y * n.x, t.y + e.x * o.y + e.y * n.y, t.z + e.x * o.z + e.y * n.z);
  }
  function Xn(e, t, o, n) {
    const s = e.x - t.x, a = e.y - t.y, i = e.z - t.z;
    return {
      x: s * o.x + a * o.y + i * o.z,
      y: s * n.x + a * n.y + i * n.z
    };
  }
  function Lr({ origin: e, xDir: t, yDir: o, bounds: n }) {
    const { isDark: s } = at(), a = c.useMemo(() => {
      if (!n) return {
        minU: -Bt,
        maxU: Bt,
        minV: -Bt,
        maxV: Bt
      };
      const h = et;
      return {
        minU: Math.floor((n.minU - h) / et) * et,
        maxU: Math.ceil((n.maxU + h) / et) * et,
        minV: Math.floor((n.minV - h) / et) * et,
        maxV: Math.ceil((n.maxV + h) / et) * et
      };
    }, [
      n
    ]), i = c.useMemo(() => {
      const h = [], d = Je(e), g = Je(t), f = Je(o), y = s ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
      for (let x = a.minV; x <= a.maxV; x += et) {
        if (x === 0) continue;
        const P = d.clone().add(g.clone().multiplyScalar(a.minU)).add(f.clone().multiplyScalar(x)), b = d.clone().add(g.clone().multiplyScalar(a.maxU)).add(f.clone().multiplyScalar(x));
        h.push({
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
          color: y,
          width: 1
        });
      }
      for (let x = a.minU; x <= a.maxU; x += et) {
        if (x === 0) continue;
        const P = d.clone().add(f.clone().multiplyScalar(a.minV)).add(g.clone().multiplyScalar(x)), b = d.clone().add(f.clone().multiplyScalar(a.maxV)).add(g.clone().multiplyScalar(x));
        h.push({
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
          color: y,
          width: 1
        });
      }
      return h;
    }, [
      e,
      t,
      o,
      s,
      a
    ]), l = c.useMemo(() => {
      const h = Je(e), d = Je(t), g = h.clone().add(d.clone().multiplyScalar(a.minU)), f = h.clone().add(d.clone().multiplyScalar(a.maxU));
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
      const h = Je(e), d = Je(o), g = h.clone().add(d.clone().multiplyScalar(a.minV)), f = h.clone().add(d.clone().multiplyScalar(a.maxV));
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
    ]), p = c.useMemo(() => Je(e), [
      e
    ]);
    return r.jsxs("group", {
      children: [
        i.map((h, d) => r.jsx(Ae, {
          points: h.points,
          color: s ? "#404040" : "#888888",
          lineWidth: h.width,
          transparent: true,
          opacity: 0.3,
          depthWrite: false
        }, d)),
        r.jsx(Ae, {
          points: l,
          color: "#ef4444",
          lineWidth: 2,
          transparent: true,
          opacity: 0.8,
          depthWrite: false
        }),
        r.jsx(Ae, {
          points: u,
          color: "#22c55e",
          lineWidth: 2,
          transparent: true,
          opacity: 0.8,
          depthWrite: false
        }),
        r.jsxs("mesh", {
          position: p,
          children: [
            r.jsx("sphereGeometry", {
              args: [
                1,
                16,
                16
              ]
            }),
            r.jsx("meshBasicMaterial", {
              color: "#ffffff"
            })
          ]
        })
      ]
    });
  }
  function Nr({ segments: e, selectedSegments: t, constraints: o, pendingPoints: n, origin: s, xDir: a, yDir: i }) {
    const { isDark: l } = at(), u = c.useMemo(() => e.map((g, f) => {
      const y = t.includes(f), x = _e(g.start, s, a, i), P = _e(g.end, s, a, i);
      if (g.type === "Line") return {
        type: "line",
        points: [
          [
            x.x,
            x.y,
            x.z
          ],
          [
            P.x,
            P.y,
            P.z
          ]
        ],
        color: y ? "#f59e0b" : "#3b82f6",
        width: y ? 3 : 2,
        start: x,
        end: P
      };
      {
        const b = _e(g.center, s, a, i), m = x.distanceTo(b), w = Math.atan2(g.start.y - g.center.y, g.start.x - g.center.x), S = Math.atan2(g.end.y - g.center.y, g.end.x - g.center.x), j = [], C = 16;
        let z = S - w;
        g.ccw && z < 0 && (z += 2 * Math.PI), !g.ccw && z > 0 && (z -= 2 * Math.PI);
        for (let A = 0; A <= C; A++) {
          const F = A / C, W = w + z * F, D = {
            x: g.center.x + m * Math.cos(W),
            y: g.center.y + m * Math.sin(W)
          }, L = _e(D, s, a, i);
          j.push([
            L.x,
            L.y,
            L.z
          ]);
        }
        return {
          type: "arc",
          points: j,
          color: y ? "#f59e0b" : "#3b82f6",
          width: y ? 3 : 2,
          start: x,
          end: P
        };
      }
    }), [
      e,
      t,
      s,
      a,
      i
    ]), p = c.useMemo(() => {
      const g = [], f = /* @__PURE__ */ new Set();
      for (const y of e) {
        const x = _e(y.start, s, a, i), P = _e(y.end, s, a, i), b = `${x.x.toFixed(2)},${x.y.toFixed(2)},${x.z.toFixed(2)}`, m = `${P.x.toFixed(2)},${P.y.toFixed(2)},${P.z.toFixed(2)}`;
        f.has(b) || (f.add(b), g.push(x)), f.has(m) || (f.add(m), g.push(P));
      }
      return g;
    }, [
      e,
      s,
      a,
      i
    ]), h = c.useMemo(() => n.map((g) => _e(g, s, a, i)), [
      n,
      s,
      a,
      i
    ]), d = c.useMemo(() => {
      const g = [];
      for (const f of o) if (f.type === "Horizontal") {
        const y = e[f.line];
        if ((y == null ? void 0 : y.type) === "Line") {
          const x = {
            x: (y.start.x + y.end.x) / 2,
            y: (y.start.y + y.end.y) / 2 + 3
          };
          g.push({
            position: _e(x, s, a, i),
            text: "H",
            color: "#22c55e"
          });
        }
      } else if (f.type === "Vertical") {
        const y = e[f.line];
        if ((y == null ? void 0 : y.type) === "Line") {
          const x = {
            x: (y.start.x + y.end.x) / 2 + 3,
            y: (y.start.y + y.end.y) / 2
          };
          g.push({
            position: _e(x, s, a, i),
            text: "V",
            color: "#22c55e"
          });
        }
      } else if (f.type === "Length") {
        const y = e[f.line];
        if ((y == null ? void 0 : y.type) === "Line") {
          const x = {
            x: (y.start.x + y.end.x) / 2,
            y: (y.start.y + y.end.y) / 2 - 3
          };
          g.push({
            position: _e(x, s, a, i),
            text: `${f.length}`,
            color: "#a855f7"
          });
        }
      } else if (f.type === "Parallel") {
        const y = e[f.lineA], x = e[f.lineB];
        if ((y == null ? void 0 : y.type) === "Line" && (x == null ? void 0 : x.type) === "Line") {
          const P = {
            x: (y.start.x + y.end.x) / 2,
            y: (y.start.y + y.end.y) / 2 + 3
          }, b = {
            x: (x.start.x + x.end.x) / 2,
            y: (x.start.y + x.end.y) / 2 + 3
          };
          g.push({
            position: _e(P, s, a, i),
            text: "//",
            color: "#06b6d4"
          }), g.push({
            position: _e(b, s, a, i),
            text: "//",
            color: "#06b6d4"
          });
        }
      } else if (f.type === "Perpendicular") {
        const y = e[f.lineA];
        if ((y == null ? void 0 : y.type) === "Line") {
          const x = {
            x: (y.start.x + y.end.x) / 2,
            y: (y.start.y + y.end.y) / 2 + 3
          };
          g.push({
            position: _e(x, s, a, i),
            text: "\u22A5",
            color: "#f43f5e"
          });
        }
      } else if (f.type === "EqualLength") {
        const y = e[f.lineA], x = e[f.lineB];
        if ((y == null ? void 0 : y.type) === "Line" && (x == null ? void 0 : x.type) === "Line") {
          const P = {
            x: (y.start.x + y.end.x) / 2,
            y: (y.start.y + y.end.y) / 2 + 3
          }, b = {
            x: (x.start.x + x.end.x) / 2,
            y: (x.start.y + x.end.y) / 2 + 3
          };
          g.push({
            position: _e(P, s, a, i),
            text: "=",
            color: "#eab308"
          }), g.push({
            position: _e(b, s, a, i),
            text: "=",
            color: "#eab308"
          });
        }
      }
      return g;
    }, [
      o,
      e,
      s,
      a,
      i
    ]);
    return r.jsxs("group", {
      children: [
        u.map((g, f) => r.jsx(Ae, {
          points: g.points,
          color: g.color,
          lineWidth: g.width,
          depthWrite: false
        }, f)),
        p.map((g, f) => r.jsx(qt, {
          position: g,
          children: r.jsxs("mesh", {
            children: [
              r.jsx("sphereGeometry", {
                args: [
                  4,
                  12,
                  12
                ]
              }),
              r.jsx("meshBasicMaterial", {
                color: l ? "#00d4ff" : "#0891b2"
              })
            ]
          })
        }, f)),
        h.map((g, f) => r.jsx(qt, {
          position: g,
          children: r.jsxs("mesh", {
            children: [
              r.jsx("sphereGeometry", {
                args: [
                  5,
                  12,
                  12
                ]
              }),
              r.jsx("meshBasicMaterial", {
                color: "#f59e0b"
              })
            ]
          })
        }, `pending-${f}`)),
        d.map((g, f) => r.jsx(it, {
          position: g.position,
          center: true,
          children: r.jsx("div", {
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
  function Or({ cursorWorldPos: e, cursorSketchPos: t, snapTarget: o, gridSnap: n, previewLine: s, previewRect: a, previewCircle: i, origin: l, xDir: u, yDir: p }) {
    const h = c.useMemo(() => e ? Je(e) : null, [
      e
    ]), d = 14, g = c.useMemo(() => {
      const m = Je(u);
      return [
        [
          -m.x * d,
          -m.y * d,
          -m.z * d
        ],
        [
          m.x * d,
          m.y * d,
          m.z * d
        ]
      ];
    }, [
      u
    ]), f = c.useMemo(() => {
      const m = Je(p);
      return [
        [
          -m.x * d,
          -m.y * d,
          -m.z * d
        ],
        [
          m.x * d,
          m.y * d,
          m.z * d
        ]
      ];
    }, [
      p
    ]), y = c.useMemo(() => {
      if (!s) return null;
      const m = _e(s.start, l, u, p), w = _e(s.end, l, u, p);
      return [
        [
          m.x,
          m.y,
          m.z
        ],
        [
          w.x,
          w.y,
          w.z
        ]
      ];
    }, [
      s,
      l,
      u,
      p
    ]), x = c.useMemo(() => {
      if (!a) return null;
      const { p1: m, p2: w } = a, S = Math.min(m.x, w.x), j = Math.max(m.x, w.x), C = Math.min(m.y, w.y), z = Math.max(m.y, w.y);
      return [
        {
          x: S,
          y: C
        },
        {
          x: j,
          y: C
        },
        {
          x: j,
          y: z
        },
        {
          x: S,
          y: z
        },
        {
          x: S,
          y: C
        }
      ].map((F) => {
        const W = _e(F, l, u, p);
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
      p
    ]), P = c.useMemo(() => {
      if (!i || i.radius < 0.1) return null;
      const { center: m, radius: w } = i, S = 32, j = [];
      for (let C = 0; C <= S; C++) {
        const z = 2 * Math.PI * C / S, A = {
          x: m.x + w * Math.cos(z),
          y: m.y + w * Math.sin(z)
        }, F = _e(A, l, u, p);
        j.push([
          F.x,
          F.y,
          F.z
        ]);
      }
      return j;
    }, [
      i,
      l,
      u,
      p
    ]), b = c.useMemo(() => o ? _e(o, l, u, p) : null, [
      o,
      l,
      u,
      p
    ]);
    return !h || !t || !g || !f ? null : r.jsxs("group", {
      children: [
        r.jsxs(qt, {
          position: h,
          children: [
            r.jsx(Ae, {
              points: g,
              color: n && !o ? "#06b6d4" : "rgba(255,255,255,0.5)",
              lineWidth: n && !o ? 1.5 : 1,
              depthWrite: false
            }),
            r.jsx(Ae, {
              points: f,
              color: n && !o ? "#06b6d4" : "rgba(255,255,255,0.5)",
              lineWidth: n && !o ? 1.5 : 1,
              depthWrite: false
            })
          ]
        }),
        y && r.jsx(Ae, {
          points: y,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        x && r.jsx(Ae, {
          points: x,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        P && r.jsx(Ae, {
          points: P,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        b && r.jsxs(qt, {
          position: b,
          children: [
            r.jsxs("mesh", {
              children: [
                r.jsx("ringGeometry", {
                  args: [
                    8,
                    10,
                    24
                  ]
                }),
                r.jsx("meshBasicMaterial", {
                  color: "#22c55e",
                  side: Ue
                })
              ]
            }),
            r.jsxs("mesh", {
              children: [
                r.jsx("sphereGeometry", {
                  args: [
                    3,
                    12,
                    12
                  ]
                }),
                r.jsx("meshBasicMaterial", {
                  color: "#22c55e"
                })
              ]
            })
          ]
        }),
        r.jsx(it, {
          position: h,
          style: {
            pointerEvents: "none"
          },
          children: r.jsxs("div", {
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
  function Br() {
    const { raycaster: e } = Pe(), t = ke((B) => B.active), o = ke((B) => B.plane), n = ke((B) => B.origin), s = ke((B) => B.segments), a = ke((B) => B.constraints), i = ke((B) => B.tool), l = ke((B) => B.constraintTool), u = ke((B) => B.points), p = ke((B) => B.selectedSegments), h = ke((B) => B.cursorWorldPos), d = ke((B) => B.cursorSketchPos), g = ke((B) => B.snapTarget), f = ke((B) => B.selectedFace), y = ke((B) => B.addPoint), x = ke((B) => B.finishShape), P = ke((B) => B.toggleSegmentSelection), b = ke((B) => B.setCursorPos), m = $((B) => B.gridSnap), w = $((B) => B.pointSnap), S = l !== "none", j = c.useMemo(() => ({
      ...rs(o),
      origin: n
    }), [
      o,
      n
    ]), C = c.useMemo(() => {
      const B = f == null ? void 0 : f.vertices;
      if (!B || B.length === 0) return null;
      const ie = B.map((be) => Xn(Je(be), j.origin, j.xDir, j.yDir));
      let je = 1 / 0, ee = -1 / 0, Ee = 1 / 0, de = -1 / 0;
      for (const be of ie) be.x < je && (je = be.x), be.x > ee && (ee = be.x), be.y < Ee && (Ee = be.y), be.y > de && (de = be.y);
      return {
        vertices: ie,
        bounds: {
          minU: je,
          maxU: ee,
          minV: Ee,
          maxV: de
        }
      };
    }, [
      f,
      j
    ]), z = c.useMemo(() => {
      if (!C || C.vertices.length === 0) return s;
      const B = C.vertices.map((ie) => ({
        type: "Line",
        start: ie,
        end: ie
      }));
      return [
        ...s,
        ...B
      ];
    }, [
      s,
      C
    ]), A = c.useCallback((B) => {
      const { snapped: ie, target: je } = is(z, B, {
        gridEnabled: m,
        gridSize: et,
        pointEnabled: w,
        pointTolerance: Fr
      });
      return {
        snapped: ie,
        target: je
      };
    }, [
      w,
      m,
      z
    ]), F = c.useRef(null), W = 5e4, D = c.useMemo(() => {
      const B = new zo(W, W), ie = Je(j.normal), je = new E(0, 0, 1), ee = new st().setFromUnitVectors(je, ie);
      return B.applyQuaternion(ee), B.translate(j.origin.x, j.origin.y, j.origin.z), B;
    }, [
      j
    ]), L = c.useCallback(() => {
      if (!F.current) return;
      const B = e.intersectObject(F.current);
      if (B.length === 0) {
        b(null, null, null);
        return;
      }
      const ie = F.current.worldToLocal(B[0].point.clone()), je = Xn(ie, j.origin, j.xDir, j.yDir), { snapped: ee, target: Ee } = A(je), de = _e(ee, j.origin, j.xDir, j.yDir);
      b({
        x: de.x,
        y: de.y,
        z: de.z
      }, ee, Ee);
    }, [
      j,
      e,
      A,
      b
    ]), _ = c.useCallback((B) => {
      if (B.button === 0 && !Jt() && (B.stopPropagation(), !!d)) if (S) {
        const ie = as(s, d, 2);
        ie !== null && P(ie);
      } else y(d);
    }, [
      d,
      S,
      s,
      y,
      P
    ]), X = c.useCallback((B) => {
      B.stopPropagation(), i === "line" && x();
    }, [
      i,
      x
    ]), se = c.useCallback(() => {
      b(null, null, null);
    }, [
      b
    ]), re = c.useMemo(() => i === "line" && u.length > 0 && d ? {
      start: u[u.length - 1],
      end: d
    } : null, [
      i,
      u,
      d
    ]), xe = c.useMemo(() => i === "rectangle" && u.length === 1 && d ? {
      p1: u[0],
      p2: d
    } : null, [
      i,
      u,
      d
    ]), ge = c.useMemo(() => {
      if (i === "circle" && u.length === 1 && d) {
        const B = u[0], ie = Math.sqrt((d.x - B.x) ** 2 + (d.y - B.y) ** 2);
        return {
          center: B,
          radius: ie
        };
      }
      return null;
    }, [
      i,
      u,
      d
    ]);
    return t ? r.jsxs("group", {
      children: [
        r.jsx("mesh", {
          ref: F,
          geometry: D,
          frustumCulled: false,
          onPointerMove: L,
          onClick: _,
          onDoubleClick: X,
          onPointerLeave: se,
          children: r.jsx("meshBasicMaterial", {
            visible: false,
            side: Ue
          })
        }),
        r.jsx(Lr, {
          origin: j.origin,
          xDir: j.xDir,
          yDir: j.yDir,
          bounds: (C == null ? void 0 : C.bounds) ?? null
        }),
        r.jsx(Nr, {
          segments: s,
          selectedSegments: p,
          constraints: a,
          pendingPoints: u,
          origin: j.origin,
          xDir: j.xDir,
          yDir: j.yDir
        }),
        r.jsx(Or, {
          cursorWorldPos: h,
          cursorSketchPos: d,
          snapTarget: g,
          gridSnap: m,
          previewLine: re,
          previewRect: xe,
          previewCircle: ge,
          origin: j.origin,
          xDir: j.xDir,
          yDir: j.yDir
        })
      ]
    }) : null;
  }
  const bn = 5, Un = 0.15, Vr = 0.35, $r = {
    XY: "#61afef",
    XZ: "#98c379",
    YZ: "#e06c75"
  };
  function on({ plane: e, rotation: t, position: o }) {
    const [n, s] = c.useState(false), a = c.useRef(null), i = ke((h) => h.enterSketchMode), l = ke((h) => h.active), { invalidate: u } = Pe(), p = (h) => {
      var _a2;
      if (h.stopPropagation(), l) return;
      let d = false;
      ((_a2 = h.face) == null ? void 0 : _a2.normal) && a.current && (d = h.face.normal.clone().transformDirection(a.current.matrixWorld).dot(h.ray.direction) > 0), i(e, void 0, d);
    };
    return Qe(() => {
      if (!a.current) return;
      const h = a.current.material, d = n ? Vr : Un, g = d - h.opacity;
      if (Math.abs(g) < 0.01) {
        h.opacity = d;
        return;
      }
      h.opacity += g * 0.2, u();
    }), r.jsxs("mesh", {
      ref: a,
      position: o,
      rotation: t,
      onPointerEnter: (h) => {
        h.stopPropagation(), l || (s(true), document.body.style.cursor = "pointer");
      },
      onPointerLeave: () => {
        s(false), document.body.style.cursor = "auto";
      },
      onClick: p,
      children: [
        r.jsx("planeGeometry", {
          args: [
            bn,
            bn
          ]
        }),
        r.jsx("meshBasicMaterial", {
          color: $r[e],
          transparent: true,
          opacity: Un,
          side: Ue,
          depthWrite: false,
          depthTest: false
        })
      ]
    });
  }
  function Wr() {
    if (ke((o) => o.active)) return null;
    const t = bn / 2;
    return r.jsxs("group", {
      children: [
        r.jsx(on, {
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
        r.jsx(on, {
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
        r.jsx(on, {
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
  const Gr = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, sn = Math.PI / 180, rn = 180 / Math.PI, Hr = new st().setFromAxisAngle(new E(1, 0, 0), -Math.PI / 2), Yr = new st().setFromAxisAngle(new E(1, 0, 0), Math.PI / 2);
  function qn(e) {
    return [
      e.x,
      e.z,
      -e.y
    ];
  }
  function Kn(e) {
    return {
      x: e.x,
      y: -e.z,
      z: e.y
    };
  }
  function Zn(e, t) {
    const o = Sn.setFromEuler(Et.set(e.x * sn, e.y * sn, e.z * sn, "ZYX"));
    return t.copy(Hr).multiply(o);
  }
  function Jn(e) {
    return Sn.copy(Yr).multiply(e), Et.setFromQuaternion(Sn, "ZYX"), {
      x: Et.x * rn,
      y: Et.y * rn,
      z: Et.z * rn
    };
  }
  const Sn = new st(), Et = new Zt();
  function Xr({ orbitControls: e }) {
    var _a2;
    const t = $((w) => w.selectedPartIds), o = $((w) => w.transformMode), n = $((w) => w.setDraggingGizmo), s = $((w) => w.setGizmoHovered), a = $((w) => w.gridSnap), i = $((w) => w.snapIncrement), l = oe((w) => w.parts), u = oe((w) => w.document), [p, h] = c.useState(null), d = c.useCallback((w) => {
      h(w);
    }, []), g = c.useRef(null), f = c.useRef(false), y = t.size === 1 ? Array.from(t)[0] : null, x = y ? l.find((w) => w.id === y) : null, P = y ? (_a2 = u.instances) == null ? void 0 : _a2.find((w) => w.id === y) : null, b = x !== null || P !== null;
    if (c.useEffect(() => {
      if (!(!p || !b) && !f.current) {
        if (x) {
          const w = u.nodes[String(x.translateNodeId)], S = u.nodes[String(x.rotateNodeId)], j = u.nodes[String(x.scaleNodeId)];
          (w == null ? void 0 : w.op.type) === "Translate" && p.position.set(...qn(w.op.offset));
          const C = (S == null ? void 0 : S.op.type) === "Rotate" ? S.op.angles : {
            x: 0,
            y: 0,
            z: 0
          };
          if (Zn(C, p.quaternion), (j == null ? void 0 : j.op.type) === "Scale") {
            const { factor: z } = j.op;
            p.scale.set(z.x, z.y, z.z);
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
          p.position.set(...qn(S.translation)), Zn(S.rotation, p.quaternion), p.scale.set(S.scale.x, S.scale.y, S.scale.z);
        }
      }
    }, [
      p,
      x,
      P,
      b,
      u
    ]), c.useEffect(() => {
      const w = g.current;
      if (!w) return;
      const S = (C) => {
        const z = C.value;
        f.current = z, n(z), e.current && (e.current.enabled = !z), z && oe.getState().pushUndoSnapshot();
      }, j = (C) => {
        const z = C.value != null;
        s(z), z && $.getState().setHoveredItem(null);
      };
      return w.addEventListener("dragging-changed", S), w.addEventListener("axis-changed", j), () => {
        w.removeEventListener("dragging-changed", S), w.removeEventListener("axis-changed", j), s(false);
      };
    }, [
      p,
      e,
      n,
      s
    ]), c.useEffect(() => {
      const w = g.current;
      if (!w) return;
      const S = () => {
        if (!p || !y) return;
        const j = oe.getState();
        x ? o === "translate" ? j.setTranslation(y, Kn(p.position), true) : o === "rotate" ? j.setRotation(y, Jn(p.quaternion), true) : o === "scale" && j.setScale(y, {
          x: p.scale.x,
          y: p.scale.y,
          z: p.scale.z
        }, true) : P && j.setInstanceTransform(y, {
          translation: Kn(p.position),
          rotation: Jn(p.quaternion),
          scale: {
            x: p.scale.x,
            y: p.scale.y,
            z: p.scale.z
          }
        }, true);
      };
      return w.addEventListener("objectChange", S), () => {
        w.removeEventListener("objectChange", S);
      };
    }, [
      p,
      y,
      x,
      P,
      o
    ]), !b) return null;
    const m = a ? {
      translationSnap: i,
      rotationSnap: Math.PI / 180 * 15,
      scaleSnap: 0.1
    } : {};
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx("object3D", {
          ref: d
        }),
        p && r.jsx(Yo, {
          ref: g,
          object: p,
          mode: o,
          space: "local",
          size: Gr ? 1.8 : 0.8,
          ...m
        })
      ]
    });
  }
  const Ur = 0.4, qr = 0.85, Kr = new We(54527), Zr = new We(16328306), Oo = "#00d4ff", Bo = "#f92672", Jr = "#6b8fa3", Qr = "#4a7080";
  function Vo({ box: e, color: t, opacity: o }) {
    const n = e.min, s = e.max, a = [
      [
        new E(n.x, n.y, n.z),
        new E(s.x, n.y, n.z)
      ],
      [
        new E(s.x, n.y, n.z),
        new E(s.x, n.y, s.z)
      ],
      [
        new E(s.x, n.y, s.z),
        new E(n.x, n.y, s.z)
      ],
      [
        new E(n.x, n.y, s.z),
        new E(n.x, n.y, n.z)
      ],
      [
        new E(n.x, s.y, n.z),
        new E(s.x, s.y, n.z)
      ],
      [
        new E(s.x, s.y, n.z),
        new E(s.x, s.y, s.z)
      ],
      [
        new E(s.x, s.y, s.z),
        new E(n.x, s.y, s.z)
      ],
      [
        new E(n.x, s.y, s.z),
        new E(n.x, s.y, n.z)
      ],
      [
        new E(n.x, n.y, n.z),
        new E(n.x, s.y, n.z)
      ],
      [
        new E(s.x, n.y, n.z),
        new E(s.x, s.y, n.z)
      ],
      [
        new E(s.x, n.y, s.z),
        new E(s.x, s.y, s.z)
      ],
      [
        new E(n.x, n.y, s.z),
        new E(n.x, s.y, s.z)
      ]
    ];
    return r.jsx(r.Fragment, {
      children: a.map((i, l) => r.jsx(Ae, {
        points: i,
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
  function $o(e) {
    const t = oe((n) => n.parts), o = De((n) => n.scene);
    return c.useMemo(() => {
      if (e.size === 0 || !o) return null;
      const n = new rt();
      let s = false;
      return e.forEach((a) => {
        const i = t.findIndex((d) => d.id === a);
        if (i === -1) return;
        const l = o.parts[i];
        if (!l) return;
        const u = l.mesh;
        if (!u.positions.length) return;
        const p = new rt(), h = new E();
        for (let d = 0; d < u.positions.length; d += 3) h.set(u.positions[d], u.positions[d + 1], u.positions[d + 2]), p.expandByPoint(h);
        n.union(p), s = true;
      }), s ? n : null;
    }, [
      e,
      t,
      o
    ]);
  }
  function ei() {
    const e = $((s) => s.selectedPartIds), t = $o(e), { isDark: o } = at();
    if (!t) return null;
    const n = o ? Jr : Qr;
    return r.jsx(Vo, {
      box: t,
      color: n,
      opacity: 0.5
    });
  }
  function ti() {
    const e = zt((n) => n.participants);
    if ($((n) => n.followMode) === "free") return null;
    const o = [];
    return e.forEach((n) => {
      n.id !== jn && n.selectedPartIds.size !== 0 && o.push(r.jsx(ni, {
        ids: n.selectedPartIds,
        color: n.color
      }, n.id));
    }), r.jsx(r.Fragment, {
      children: o
    });
  }
  function ni({ ids: e, color: t }) {
    const o = $o(e);
    return o ? r.jsx(Vo, {
      box: o,
      color: t,
      opacity: 0.7
    }) : null;
  }
  function oi() {
    const e = De((o) => o.scene), t = c.useMemo(() => {
      let o = 100;
      if (e == null ? void 0 : e.parts) for (const n of e.parts) {
        const s = n.mesh.positions;
        for (let a = 0; a < s.length; a += 3) o = Math.max(o, Math.abs(s[a]), Math.abs(s[a + 1]), Math.abs(s[a + 2]));
      }
      return o * 0.25;
    }, [
      e
    ]);
    return r.jsxs("group", {
      children: [
        r.jsx(Ae, {
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
        r.jsx(Ae, {
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
        r.jsx(Ae, {
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
  function In(e) {
    const t = De((n) => n.scene), o = oe((n) => n.parts);
    return c.useMemo(() => {
      var _a2;
      if (!t) return null;
      const n = o.findIndex((s) => s.id === e);
      return n < 0 ? null : ((_a2 = t.parts[n]) == null ? void 0 : _a2.mesh) ?? null;
    }, [
      t,
      o,
      e
    ]);
  }
  function si({ item: e, variant: t }) {
    const o = In(e.partId), n = c.useMemo(() => {
      if (!o) return null;
      const i = Ao(o, e.faceIndex);
      return i.length === 0 ? null : Ws(o, i);
    }, [
      o,
      e.faceIndex
    ]);
    if (c.useEffect(() => () => {
      n == null ? void 0 : n.dispose();
    }, [
      n
    ]), !n) return null;
    const s = t === "selected" ? Zr : Kr, a = t === "selected" ? qr : Ur;
    return r.jsx("mesh", {
      geometry: n,
      renderOrder: 998,
      children: r.jsx("meshBasicMaterial", {
        color: s,
        transparent: true,
        opacity: a,
        depthWrite: false,
        depthTest: false,
        side: Ue
      })
    });
  }
  function ri({ item: e, variant: t }) {
    const o = In(e.partId), n = c.useMemo(() => {
      if (!o) return null;
      const { a, b: i } = Do(o, e.edgeId);
      return [
        [
          a.x,
          a.y,
          a.z
        ],
        [
          i.x,
          i.y,
          i.z
        ]
      ];
    }, [
      o,
      e.edgeId
    ]);
    if (!n) return null;
    const s = t === "selected" ? Bo : Oo;
    return r.jsx(Ae, {
      points: n,
      color: s,
      lineWidth: t === "selected" ? 3 : 2,
      transparent: true,
      opacity: t === "selected" ? 1 : 0.7,
      depthWrite: false,
      depthTest: false,
      renderOrder: 998
    });
  }
  function ii({ item: e, variant: t }) {
    const o = In(e.partId), n = c.useMemo(() => o ? To(o, e.vertexId) : null, [
      o,
      e.vertexId
    ]), s = c.useRef(null), { camera: a, size: i } = Pe();
    if (Qe(() => {
      if (!s.current || !n) return;
      const u = a, p = new E(n.x, n.z, -n.y), h = u.position.distanceTo(p), d = (u.fov ?? 50) * Math.PI / 180, g = 2 * h * Math.tan(d / 2) / i.height, f = t === "selected" ? 6 : 5;
      s.current.scale.setScalar(Math.max(1e-4, f * g));
    }), !n) return null;
    const l = t === "selected" ? Bo : Oo;
    return r.jsxs("mesh", {
      ref: s,
      position: n,
      renderOrder: 999,
      children: [
        r.jsx("sphereGeometry", {
          args: [
            1,
            12,
            12
          ]
        }),
        r.jsx("meshBasicMaterial", {
          color: l,
          transparent: true,
          opacity: t === "selected" ? 1 : 0.85,
          depthWrite: false,
          depthTest: false
        })
      ]
    });
  }
  function Qn({ item: e, variant: t }) {
    return e.kind === "face" ? r.jsx(si, {
      item: e,
      variant: t
    }) : e.kind === "edge" ? r.jsx(ri, {
      item: e,
      variant: t
    }) : e.kind === "vertex" ? r.jsx(ii, {
      item: e,
      variant: t
    }) : null;
  }
  function ai() {
    const e = $((n) => n.selection), t = $((n) => n.hoveredItem), o = c.useMemo(() => !t || t.kind === "part" || e.some((n) => cs(n, t)) ? null : t, [
      t,
      e
    ]);
    return r.jsxs(r.Fragment, {
      children: [
        e.map((n, s) => r.jsx(Qn, {
          item: n,
          variant: "selected"
        }, `sel-${s}`)),
        o && r.jsx(Qn, {
          item: o,
          variant: "hover"
        })
      ]
    });
  }
  function ci() {
    const e = $((n) => n.isDraggingGizmo), t = $((n) => n.isOrbiting);
    return $((n) => n.captureMode) ? r.jsx(oi, {}) : t || e ? null : r.jsxs(r.Fragment, {
      children: [
        r.jsx(ei, {}),
        r.jsx(ti, {}),
        r.jsx(ai, {})
      ]
    });
  }
  const an = "#94a3b8";
  function li(e, t, o) {
    const n = structuredClone(e);
    return n.type === "Cube" ? t === "size.x" ? n.size.x = o : t === "size.y" ? n.size.y = o : t === "size.z" && (n.size.z = o) : n.type === "Cylinder" ? t === "radius" ? n.radius = o : t === "height" && (n.height = o) : n.type === "Sphere" && t === "radius" && (n.radius = o), n;
  }
  function ui({ value: e, paramKey: t, partId: o, primitiveNodeId: n }) {
    const [s, a] = c.useState(false), [i, l] = c.useState(e.toFixed(1)), u = c.useRef(null), p = oe((b) => b.document), h = oe((b) => b.updatePrimitiveOp);
    c.useEffect(() => {
      s || l(e.toFixed(1));
    }, [
      e,
      s
    ]), c.useEffect(() => {
      s && u.current && (u.current.focus(), u.current.select());
    }, [
      s
    ]);
    const d = () => {
      const b = parseFloat(i);
      if (!isNaN(b) && b > 0) {
        const m = p.nodes[String(n)];
        if (m) {
          const w = li(m.op, t, b);
          h(o, w);
        }
      } else l(e.toFixed(1));
      a(false);
    }, g = () => {
      l(e.toFixed(1)), a(false);
    }, f = (b) => {
      b.stopPropagation(), b.key === "Enter" ? d() : b.key === "Escape" && g();
    }, x = t === "radius" ? "r=" : "", P = " mm";
    return s ? r.jsxs("div", {
      className: "bg-surface border border-brand px-1 py-0.5 text-[10px] text-text whitespace-nowrap flex items-center rounded",
      onClick: (b) => b.stopPropagation(),
      onPointerDown: (b) => b.stopPropagation(),
      children: [
        x,
        r.jsx("input", {
          ref: u,
          type: "text",
          value: i,
          onChange: (b) => l(b.target.value),
          onBlur: d,
          onKeyDown: f,
          className: "w-12 bg-transparent outline-none text-[10px] text-text",
          onClick: (b) => b.stopPropagation(),
          onPointerDown: (b) => b.stopPropagation()
        }),
        P
      ]
    }) : r.jsxs("div", {
      className: "bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap cursor-pointer hover:border-brand hover:text-text transition-colors rounded",
      onClick: (b) => {
        b.stopPropagation(), a(true);
      },
      onPointerDown: (b) => b.stopPropagation(),
      children: [
        x,
        e.toFixed(1),
        P
      ]
    });
  }
  function di({ start: e, end: t, label: o, offset: n = new E(), editable: s, value: a, paramKey: i, partId: l, primitiveNodeId: u }) {
    const p = new E().lerpVectors(e, t, 0.5).add(n), h = 1, d = new E().subVectors(t, e).normalize(), g = new E(0, 1, 0), f = new E().crossVectors(d, g).normalize();
    f.length() < 0.1 && f.set(1, 0, 0);
    const y = e.clone().add(f.clone().multiplyScalar(h)), x = e.clone().add(f.clone().multiplyScalar(-h)), P = t.clone().add(f.clone().multiplyScalar(h)), b = t.clone().add(f.clone().multiplyScalar(-h)), m = s && a !== void 0 && i && l && u !== void 0;
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx(Ae, {
          points: [
            e,
            t
          ],
          color: an,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        r.jsx(Ae, {
          points: [
            y,
            x
          ],
          color: an,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        r.jsx(Ae, {
          points: [
            P,
            b
          ],
          color: an,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        r.jsx(it, {
          position: p,
          center: true,
          style: {
            pointerEvents: m ? "auto" : "none",
            zIndex: 10
          },
          children: m ? r.jsx(ui, {
            value: a,
            paramKey: i,
            partId: l,
            primitiveNodeId: u
          }) : r.jsx("div", {
            className: "bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap rounded",
            children: o
          })
        })
      ]
    });
  }
  function fi() {
    const e = $((d) => d.selectedPartIds), t = $((d) => d.isDraggingGizmo), o = oe((d) => d.parts), n = oe((d) => d.document), s = De((d) => d.scene), a = Dn((d) => d.parameters), i = Dn((d) => d.bindings), l = c.useMemo(() => {
      if (e.size !== 1) return null;
      const d = Array.from(e)[0], g = o.find((S) => S.id === d);
      if (!g || !ls(g)) return null;
      const f = o.findIndex((S) => S.id === d);
      if (!(s == null ? void 0 : s.parts[f])) return null;
      const x = n.nodes[String(g.primitiveNodeId)];
      if (!x) return null;
      const P = n.nodes[String(g.translateNodeId)], b = (P == null ? void 0 : P.op.type) === "Translate" ? P.op.offset : {
        x: 0,
        y: 0,
        z: 0
      }, m = new E(b.x, b.y, b.z);
      let w = null;
      if (x.op.type === "Cube") {
        const S = x.op.size, j = en(g.primitiveNodeId, {
          "size.x": S.x,
          "size.y": S.y,
          "size.z": S.z
        }, a, i), C = {
          x: j["size.x"],
          y: j["size.y"],
          z: j["size.z"]
        }, z = C.x / 2, A = C.y / 2, F = C.z / 2;
        w = [
          {
            start: new E(m.x - z, m.y - A - 3, m.z + F),
            end: new E(m.x + z, m.y - A - 3, m.z + F),
            label: `${C.x.toFixed(1)} mm`,
            value: C.x,
            paramKey: "size.x"
          },
          {
            start: new E(m.x + z + 3, m.y - A, m.z + F),
            end: new E(m.x + z + 3, m.y + A, m.z + F),
            label: `${C.y.toFixed(1)} mm`,
            value: C.y,
            paramKey: "size.y"
          },
          {
            start: new E(m.x + z + 3, m.y - A - 3, m.z - F),
            end: new E(m.x + z + 3, m.y - A - 3, m.z + F),
            label: `${C.z.toFixed(1)} mm`,
            value: C.z,
            paramKey: "size.z"
          }
        ];
      }
      if (x.op.type === "Cylinder") {
        const { radius: S, height: j } = en(g.primitiveNodeId, {
          radius: x.op.radius,
          height: x.op.height
        }, a, i), C = j / 2;
        w = [
          {
            start: new E(m.x, m.y - C - 3, m.z),
            end: new E(m.x + S, m.y - C - 3, m.z),
            label: `r=${S.toFixed(1)} mm`,
            value: S,
            paramKey: "radius"
          },
          {
            start: new E(m.x + S + 3, m.y - C, m.z),
            end: new E(m.x + S + 3, m.y + C, m.z),
            label: `${j.toFixed(1)} mm`,
            value: j,
            paramKey: "height"
          }
        ];
      }
      if (x.op.type === "Sphere") {
        const { radius: S } = en(g.primitiveNodeId, {
          radius: x.op.radius
        }, a, i);
        w = [
          {
            start: new E(m.x, m.y, m.z),
            end: new E(m.x + S, m.y, m.z),
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
      s,
      a,
      i
    ]);
    if (!l || t) return null;
    const { dimensions: u, partId: p, primitiveNodeId: h } = l;
    return r.jsx(r.Fragment, {
      children: u.map((d, g) => r.jsx(di, {
        start: d.start,
        end: d.end,
        label: d.label,
        editable: true,
        value: d.value,
        paramKey: d.paramKey,
        partId: p,
        primitiveNodeId: h
      }, g))
    });
  }
  const pi = {
    error: "bg-red-500/90 text-white ring-red-300",
    warning: "bg-amber-500/90 text-white ring-amber-200",
    info: "bg-sky-500/90 text-white ring-sky-200"
  }, mi = {
    error: "!",
    warning: "!",
    info: "i"
  };
  function hi() {
    const e = gt((l) => l.enabled), t = gt((l) => l.report), o = gt((l) => l.visibleSeverities), n = gt((l) => l.selectedIssueId), s = gt((l) => l.selectIssue), a = ue((l) => l.active), i = c.useMemo(() => {
      if (!t) return [];
      const l = t.issues.filter((u) => o.has(u.severity));
      return wi(l);
    }, [
      t,
      o
    ]);
    return !e || i.length === 0 || a ? null : r.jsx("group", {
      children: i.map((l, u) => {
        const p = l[0];
        if (!p) return null;
        const h = [
          p.anchor[0],
          p.anchor[1],
          p.anchor[2]
        ], d = l.some((g) => g.id === n);
        return r.jsx(it, {
          position: h,
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
          children: r.jsx(xi, {
            issues: l,
            selected: d,
            onSelect: (g) => s(g === n ? null : g)
          })
        }, `dfm-${u}`);
      })
    });
  }
  function xi({ issues: e, selected: t, onSelect: o }) {
    const n = vi(e), s = e.find((u) => u.severity === n) ?? e[0];
    if (!s) return null;
    const a = pi[n], i = mi[n], l = e.length;
    return r.jsxs("div", {
      className: "flex items-start gap-2",
      children: [
        r.jsxs("button", {
          type: "button",
          onClick: (u) => {
            u.stopPropagation(), o(s.id);
          },
          className: Cn("pointer-events-auto relative flex h-6 w-6 items-center justify-center rounded-full font-bold text-xs ring-2 shadow-md transition-transform", a, t ? "scale-125" : "hover:scale-110"),
          title: s.message,
          children: [
            i,
            l > 1 && r.jsx("span", {
              className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-surface px-1 text-[10px] font-semibold text-text ring-1 ring-border",
              children: l
            })
          ]
        }),
        t && r.jsx(gi, {
          issue: s,
          extras: l - 1
        })
      ]
    });
  }
  function gi({ issue: e, extras: t }) {
    return r.jsxs("div", {
      className: "w-72 rounded-md border border-border bg-surface/95 backdrop-blur-sm p-3 shadow-lg text-text text-xs space-y-2",
      children: [
        r.jsxs("div", {
          className: "flex items-center justify-between gap-2",
          children: [
            r.jsx("p", {
              className: "font-medium leading-snug",
              children: e.message
            }),
            r.jsx("span", {
              className: Cn("shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold capitalize", e.severity === "error" ? "bg-red-500/20 text-red-300" : e.severity === "warning" ? "bg-amber-500/20 text-amber-300" : "bg-sky-500/20 text-sky-300"),
              children: e.severity
            })
          ]
        }),
        e.explanation && r.jsx("p", {
          className: "leading-relaxed text-text-muted",
          children: e.explanation
        }),
        r.jsxs("div", {
          className: "flex gap-2 text-[11px] text-text-muted",
          children: [
            r.jsxs("span", {
              children: [
                "measured ",
                r.jsx("strong", {
                  className: "text-text",
                  children: eo(e.measured)
                }),
                " ",
                e.units
              ]
            }),
            r.jsxs("span", {
              children: [
                "limit ",
                r.jsx("strong", {
                  className: "text-text",
                  children: eo(e.limit)
                }),
                " ",
                e.units
              ]
            })
          ]
        }),
        e.suggested_fix && r.jsxs("div", {
          className: "mt-1 rounded bg-surface-2 px-2 py-1 text-[11px]",
          children: [
            r.jsx("div", {
              className: "font-semibold opacity-80",
              children: "Suggested fix"
            }),
            r.jsx("div", {
              className: "opacity-90",
              children: yi(e.suggested_fix)
            })
          ]
        }),
        t > 0 && r.jsxs("div", {
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
  function eo(e) {
    return Math.abs(e) >= 100 ? e.toFixed(0) : Math.abs(e) >= 10 ? e.toFixed(1) : e.toFixed(2);
  }
  function yi(e) {
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
  function vi(e) {
    return e.some((t) => t.severity === "error") ? "error" : e.some((t) => t.severity === "warning") ? "warning" : "info";
  }
  function wi(e) {
    const t = /* @__PURE__ */ new Map();
    for (const o of e) {
      const n = `${cn(o.anchor[0])}|${cn(o.anchor[1])}|${cn(o.anchor[2])}`, s = t.get(n);
      s ? s.push(o) : t.set(n, [
        o
      ]);
    }
    return Array.from(t.values());
  }
  function cn(e) {
    return Math.round(e * 2);
  }
  let Pt = null, Kt = null, Mn = null, Xt = null, En = null;
  function bi() {
    return Xt;
  }
  function to() {
    En == null ? void 0 : En();
  }
  function no(e) {
    Pt = e;
  }
  function Si() {
    const e = De((d) => d.scene), t = De((d) => d.engine), o = oe((d) => d.document), { camera: n, size: s, controls: a, invalidate: i } = Pe(), l = Po(), u = c.useRef(false), p = c.useRef({
      x: 0,
      y: 0,
      z: 0,
      tx: 0,
      ty: 0,
      tz: 0
    }), h = c.useRef(false);
    return c.useEffect(() => {
      var _a2, _b, _c, _d;
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
      const y = l;
      (_c = y.clearScene) == null ? void 0 : _c.call(y);
      const x = (w) => {
        if (!w) return null;
        const j = o.materials[w] ?? kt(w);
        return j ? {
          color: j.color,
          metallic: j.metallic,
          roughness: j.roughness
        } : null;
      }, P = (w, S) => {
        const j = x(S);
        j && typeof y.uploadSolidWithMaterial == "function" ? y.uploadSolidWithMaterial(w, j.color[0], j.color[1], j.color[2], j.metallic, j.roughness) : y.uploadSolid(w);
      };
      let b = false, m;
      for (const w of d.parts ?? []) {
        const S = w.solid;
        if (S) {
          try {
            P(S, w.material);
          } catch (j) {
            Ke.debug("gpu", `uploadSolid failed: ${j}`);
          }
          m === void 0 && (m = w.material), b = true;
        }
      }
      if (f && ((_d = d.partDefs) == null ? void 0 : _d.length)) {
        const w = /* @__PURE__ */ new Map();
        for (const j of d.partDefs) {
          const C = j.solid;
          C && w.set(j.id, C);
        }
        const S = Rn(o);
        for (const j of d.instances ?? []) {
          const C = w.get(j.partDefId);
          if (!C) continue;
          const z = j.id ?? j.instanceId, A = (z ? S.get(z) : void 0) ?? j.transform, F = A ? C.scale(A.scale.x, A.scale.y, A.scale.z).rotate(A.rotation.x, A.rotation.y, A.rotation.z).translate(A.translation.x, A.translation.y, A.translation.z) : C;
          try {
            P(F, j.material);
          } catch (W) {
            Ke.debug("gpu", `uploadSolid (instance) failed: ${W}`);
          }
          m === void 0 && (m = j.material), b = true;
        }
      }
      if (b && m && typeof y.uploadSolidWithMaterial != "function") {
        const w = o.materials[m], S = w ? null : kt(m), j = w ?? S;
        if (j) try {
          let C = false;
          if (typeof y.setMaterialFromDef == "function") try {
            y.setMaterialFromDef(JSON.stringify(j), null), C = true;
          } catch (z) {
            Ke.debug("gpu", `setMaterialFromDef rejected the definition, falling back: ${z}`);
          }
          C || y.setMaterial(j.color[0], j.color[1], j.color[2], j.metallic, j.roughness);
        } catch (C) {
          Ke.debug("gpu", `Failed to set material: ${C}`);
        }
      }
      if (u.current = b, b) {
        h.current = true;
        const w = n, j = (a == null ? void 0 : a.target) ?? {
          x: 0,
          y: 0,
          z: 0
        }, C = {
          position: [
            w.position.x,
            w.position.y,
            w.position.z
          ],
          target: [
            j.x,
            j.y,
            j.z
          ],
          fov: w.fov,
          width: s.width,
          height: s.height
        };
        Kt = C, p.current = {
          x: w.position.x,
          y: w.position.y,
          z: w.position.z,
          tx: j.x,
          ty: j.y,
          tz: j.z
        }, Pt && (h.current = false, Pt(C)), i();
      }
    }, [
      e,
      l,
      t,
      o,
      n,
      a,
      s,
      i
    ]), c.useEffect(() => (Mn = i, () => {
      Mn = null;
    }), [
      i
    ]), Qe(() => {
      if (!l || !u.current) return;
      const d = n, f = (a == null ? void 0 : a.target) ?? {
        x: 0,
        y: 0,
        z: 0
      }, y = p.current, x = 1e-3;
      if (!(Math.abs(d.position.x - y.x) > x || Math.abs(d.position.y - y.y) > x || Math.abs(d.position.z - y.z) > x || Math.abs(f.x - y.tx) > x || Math.abs(f.y - y.ty) > x || Math.abs(f.z - y.tz) > x) && !h.current) return;
      p.current = {
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
        width: s.width,
        height: s.height
      };
      Kt = b, Pt && (h.current = false, Pt(b));
    }), null;
  }
  const Mi = {
    off: 0,
    normals: 1,
    "face-id": 2,
    lighting: 3,
    orientation: 4
  }, Ei = {
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
  }, Pi = 6;
  function ji() {
    const e = c.useRef(null), t = $((D) => D.raytraceQuality), o = $((D) => D.raytraceDebugMode), n = $((D) => D.raytraceEdgesEnabled), s = $((D) => D.raytraceEdgeDepthThreshold), a = $((D) => D.raytraceEdgeNormalThreshold), i = $((D) => D.raytraceEdgeSilhouetteEnabled), l = $((D) => D.raytraceEdgeCreaseEnabled), u = $((D) => D.raytraceEdgeBoundaryEnabled), p = $((D) => D.raytraceEdgeSilhouetteWidth), h = $((D) => D.raytraceEdgeCreaseWidth), d = $((D) => D.raytraceEdgeBoundaryWidth), g = $((D) => D.raytraceEdgeSoftness), f = Po(), { isDark: y } = at(), x = c.useRef("off"), P = c.useRef({
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
    }), m = c.useRef(false), w = c.useRef(null), S = c.useRef(null), j = c.useRef(t);
    c.useEffect(() => {
      j.current = t;
    }, [
      t
    ]);
    const C = c.useCallback((D, L, _, X, se, re) => {
      const xe = new ImageData(new Uint8ClampedArray(L), _, X);
      if (_ !== se || X !== re) {
        D.imageSmoothingEnabled = true, D.imageSmoothingQuality = "high";
        const ge = document.createElement("canvas");
        ge.width = _, ge.height = X;
        const B = ge.getContext("2d");
        B && (B.putImageData(xe, 0, 0), D.drawImage(ge, 0, 0, se, re));
      } else D.putImageData(xe, 0, 0);
    }, []), z = c.useCallback((D, L) => {
      if (!f || !e.current || m.current) return;
      const _ = e.current;
      if (!_.getContext("2d")) return;
      (_.width !== D.width || _.height !== D.height) && (_.width = D.width, _.height = D.height);
      const se = Ei[L];
      let re = Math.floor(D.width * se.scale), xe = Math.floor(D.height * se.scale);
      const ge = re * xe;
      if (ge > se.maxPixels) {
        const me = Math.sqrt(se.maxPixels / ge);
        re = Math.floor(re * me), xe = Math.floor(xe * me);
      }
      m.current = true;
      const B = re, ie = xe, je = D.width, ee = D.height, [Ee, de, be] = D.position, [Fe, Ge, Oe] = D.target, Se = [
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
        const Ce = e.current;
        if (Ce) {
          const V = Ce.getContext("2d");
          V && C(V, me, B, ie, je, ee);
        }
        m.current = false;
        const Le = $.getState();
        Le.raytraceError !== null && Le.setRaytraceError(null);
      }).catch((me) => {
        const Ce = (me == null ? void 0 : me.message) ?? String(me);
        Ke.warn("gpu", `Render failed: ${Ce}`), $.getState().setRaytraceError(Ce), m.current = false;
      });
    }, [
      f,
      C
    ]), A = c.useCallback(() => {
      S.current && (clearTimeout(S.current), S.current = null);
    }, []), W = c.useCallback((D) => {
      var _a2;
      if (A(), !f) return;
      const _ = [
        "draft",
        "standard",
        "high"
      ].indexOf(j.current), X = [
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
        z(D, B.tier), xe++;
        const ie = B.tier === "high" ? 60 : 30;
        S.current = setTimeout(ge, ie);
      };
      ge();
    }, [
      A,
      z,
      f
    ]);
    return c.useEffect(() => (Xt = e.current, () => {
      Xt === e.current && (Xt = null);
    }), []), c.useEffect(() => (En = () => {
      const D = w.current;
      D && z(D, "standard");
    }, () => {
      En = null;
    }), [
      z
    ]), c.useEffect(() => {
      const D = (L) => {
        w.current = L, W(L);
      };
      return no(D), Kt ? D(Kt) : Mn == null ? void 0 : Mn(), () => {
        no(null);
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
      (_a2 = f.setTheme) == null ? void 0 : _a2.call(f, y ? 0 : 1), w.current && W(w.current);
    }, [
      y,
      f,
      W
    ]), c.useEffect(() => {
      if (!f || o === x.current) return;
      x.current = o;
      const D = Mi[o] ?? 0, L = f;
      if (typeof L.setDebugMode != "function") {
        Ke.debug("gpu", "setDebugMode not available - WASM may need rebuild");
        return;
      }
      L.setDebugMode(D), w.current && W(w.current);
    }, [
      o,
      f,
      W
    ]), c.useEffect(() => {
      if (!f) return;
      const D = P.current;
      if (n === D.enabled && s === D.depth && a === D.normal && i === D.silhouette && l === D.crease && u === D.boundary && p === D.silhouetteWidth && h === D.creaseWidth && d === D.boundaryWidth && g === D.softness) return;
      P.current = {
        enabled: n,
        depth: s,
        normal: a,
        silhouette: i,
        crease: l,
        boundary: u,
        silhouetteWidth: p,
        creaseWidth: h,
        boundaryWidth: d,
        softness: g
      };
      const L = f;
      typeof L.setEdgeDetection == "function" && L.setEdgeDetection(n, s, a), typeof L.setEdgeStyle == "function" ? L.setEdgeStyle(i, l, u, 0.08, 0.08, 0.1, 1, 0.12, 0.12, 0.14, 1, 0.06, 0.06, 0.08, 1, p, h, d, g) : Ke.debug("gpu", "setEdgeStyle not available - WASM may need rebuild"), w.current && W(w.current);
    }, [
      n,
      s,
      a,
      i,
      l,
      u,
      p,
      h,
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
      const L = f;
      if (typeof L.setPathTrace != "function") {
        Ke.debug("gpu", "setPathTrace not available - WASM may need rebuild");
        return;
      }
      L.setPathTrace(Pi, n), w.current && W(w.current);
    }, [
      n,
      f,
      W
    ]), f ? r.jsx("canvas", {
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
  const Ci = Math.PI / 7, Ri = 0.25, ki = 6, zi = 40;
  function Ii(e, t, o, n) {
    o.copy(e);
    const s = Ai.copy(t).sub(e), a = s.length();
    a < 1e-6 ? s.set(0, -1, 0) : s.divideScalar(a);
    const i = Math.max(ki, Math.min(zi, a * Ri)), l = Math.tan(Ci) * i, u = Di.set(0, 0, 1);
    Math.abs(s.dot(u)) > 0.98 && u.set(0, 1, 0);
    const p = Ti.crossVectors(s, u).normalize(), h = _i.crossVectors(p, s).normalize(), d = Fi.copy(e).addScaledVector(s, i), g = Li.copy(p).multiplyScalar(l), f = Ni.copy(h).multiplyScalar(l);
    n[0].copy(d).add(g).add(f), n[1].copy(d).sub(g).add(f), n[2].copy(d).sub(g).sub(f), n[3].copy(d).add(g).sub(f);
  }
  const Ai = new E(), Di = new E(), Ti = new E(), _i = new E(), Fi = new E(), Li = new E(), Ni = new E(), Oi = 8, Bi = Oi * 2;
  function Vi({ participant: e, goal: t }) {
    const o = Pe((h) => h.invalidate), n = c.useRef(new E(...t.position)), s = c.useRef(new E(...t.target)), a = c.useRef(new E()), i = c.useRef([
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
      const h = new ft(), d = new Float32Array(Bi * 3);
      return h.setAttribute("position", new $e(d, 3)), h;
    }, []), u = c.useMemo(() => new Fs({
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
    const p = c.useRef(null);
    return Qe(() => {
      const h = $i.set(t.position[0], t.position[1], t.position[2]), d = Wi.set(t.target[0], t.target[1], t.target[2]), g = 0.15;
      n.current.lerp(h, g), s.current.lerp(d, g), Ii(n.current, s.current, a.current, i.current);
      const f = l.getAttribute("position"), y = a.current, x = i.current;
      for (let m = 0; m < 4; m++) {
        const w = x[m], S = x[(m + 1) % 4];
        f.setXYZ(m * 2, w.x, w.y, w.z), f.setXYZ(m * 2 + 1, S.x, S.y, S.z);
      }
      for (let m = 0; m < 4; m++) {
        f.setXYZ(8 + m * 2, y.x, y.y, y.z);
        const w = x[m];
        f.setXYZ(8 + m * 2 + 1, w.x, w.y, w.z);
      }
      f.needsUpdate = true, l.computeBoundingSphere(), p.current && p.current.position.copy(y);
      const P = n.current.distanceToSquared(h), b = s.current.distanceToSquared(d);
      (P > 1e-4 || b > 1e-4) && o();
    }), r.jsxs("group", {
      children: [
        r.jsx("lineSegments", {
          geometry: l,
          material: u
        }),
        r.jsx("group", {
          ref: p,
          children: r.jsx(it, {
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
  const $i = new E(), Wi = new E();
  function Gi() {
    const e = zt((s) => s.participants), t = $((s) => s.followMode), o = $((s) => s.followingParticipantId);
    if (t === "free") return null;
    const n = [];
    return e.forEach((s) => {
      s.id !== jn && s.camera && (t === "lock" && o === s.id || n.push(r.jsx(Vi, {
        participant: s,
        goal: s.camera
      }, s.id)));
    }), r.jsx(r.Fragment, {
      children: n
    });
  }
  function Hi() {
    const e = Pe((n) => n.camera), t = Pe((n) => n.controls), o = c.useRef(null);
    c.useEffect(() => {
      function n() {
        const { selectedPartIds: f } = $.getState();
        if (f.size === 0) return;
        const y = De.getState().scene, x = oe.getState().parts;
        if (!y) return;
        const P = new rt();
        let b = false;
        for (const [z, A] of y.parts.entries()) {
          const F = x[z];
          if (!F || !f.has(F.id)) continue;
          const W = A.mesh.positions;
          for (let D = 0; D < W.length; D += 3) P.expandByPoint(new E(W[D], W[D + 1], W[D + 2]));
          b = true;
        }
        if (!b) return;
        const m = new E();
        P.getCenter(m);
        const w = new E();
        P.getSize(w);
        const j = Math.max(w.x, w.y, w.z, 1) * 2, C = new E().copy(e.position).sub(t && "target" in t && t.target ? t.target : new E(0, 0, 0)).normalize();
        e.position.copy(m).addScaledVector(C, j), t && "target" in t && t.target && t.target.copy(m);
      }
      function s() {
        const f = De.getState().scene;
        if (!f) return null;
        const y = new rt(), x = new E();
        if (f.instances && f.instances.length > 0) for (const P of f.instances) {
          const b = P.transform, m = P.mesh.positions;
          for (let w = 0; w < m.length; w += 3) {
            const S = m[w], j = m[w + 1], C = m[w + 2];
            b ? x.set(S * b.scale.x + b.translation.x, j * b.scale.y + b.translation.y, C * b.scale.z + b.translation.z) : x.set(S, j, C), y.expandByPoint(x);
          }
        }
        else {
          if (f.parts.length === 0) return null;
          for (const P of f.parts) {
            const b = P.mesh.positions;
            for (let m = 0; m < b.length; m += 3) y.expandByPoint(new E(b[m], b[m + 1], b[m + 2]));
          }
        }
        return y.isEmpty() ? null : y;
      }
      function a() {
        const f = s(), y = new E();
        let x = 150;
        if (f) {
          f.getCenter(y);
          const b = new E();
          f.getSize(b), x = Math.max(b.x, b.y, b.z, 50) * 2;
        }
        const P = x / Math.sqrt(3);
        e.position.set(y.x + P, y.y + P, y.z + P), t && "target" in t && t.target && t.target.copy(y);
      }
      function i() {
        const f = s(), y = new E();
        let x = 150;
        if (f) {
          f.getCenter(y);
          const w = new E();
          f.getSize(w), x = Math.max(w.x, w.y, w.z, 50) * 2;
        }
        const P = new E(y.x, y.z, -y.y), b = t && "target" in t && t.target ? t.target : new E(0, 0, 0), m = new E().copy(e.position).sub(b);
        m.lengthSq() < 1e-6 && m.set(1, 1, 1), m.normalize(), e.position.copy(P).addScaledVector(m, x), t && "target" in t && t.target && t.target.copy(P);
      }
      function l() {
        const f = s(), y = new E();
        let x = 150;
        if (f) {
          f.getCenter(y);
          const P = new E();
          f.getSize(P), x = Math.max(P.x, P.y, P.z, 50) * 2;
        }
        e.position.set(y.x, y.y, y.z + x), t && "target" in t && t.target && t.target.copy(y);
      }
      function u() {
        const f = s(), y = new E();
        let x = 150;
        if (f) {
          f.getCenter(y);
          const P = new E();
          f.getSize(P), x = Math.max(P.x, P.y, P.z, 50) * 2;
        }
        e.position.set(y.x, y.y - x, y.z), t && "target" in t && t.target && t.target.copy(y);
      }
      function p() {
        const f = s(), y = new E();
        let x = 150;
        if (f) {
          f.getCenter(y);
          const P = new E();
          f.getSize(P), x = Math.max(P.x, P.y, P.z, 50) * 2;
        }
        e.position.set(y.x + x, y.y, y.z), t && "target" in t && t.target && t.target.copy(y);
      }
      window.addEventListener("vcad:focus-selection", n), window.addEventListener("vcad:camera-isometric", a), window.addEventListener("vcad:camera-top", l), window.addEventListener("vcad:camera-front", u), window.addEventListener("vcad:camera-right", p);
      const h = () => {
        var _a2;
        if (!t || !("target" in t) || !t.target || typeof window < "u" && new URLSearchParams(window.location.search).has("at")) return;
        const f = oe.getState().documentId, y = De.getState().scene;
        !f || o.current === f || !(y && (y.parts.some((P) => P.mesh.indices.length > 0) || (((_a2 = y.instances) == null ? void 0 : _a2.some((P) => P.mesh.indices.length > 0)) ?? false))) || (o.current = f, i());
      };
      h();
      const d = oe.subscribe(h), g = De.subscribe(h);
      return () => {
        window.removeEventListener("vcad:focus-selection", n), window.removeEventListener("vcad:camera-isometric", a), window.removeEventListener("vcad:camera-top", l), window.removeEventListener("vcad:camera-front", u), window.removeEventListener("vcad:camera-right", p), d(), g();
      };
    }, [
      e,
      t
    ]);
  }
  function Yi() {
    const e = Pe((s) => s.gl), t = Pe((s) => s.invalidate), [o, n] = c.useState(false);
    return c.useEffect(() => {
      const s = e.domElement;
      if (!s) return;
      let a;
      const i = () => {
        clearTimeout(a), a = setTimeout(() => {
          window.dispatchEvent(new CustomEvent("vcad:gl-stuck-lost"));
        }, 1500);
      };
      try {
        const p = e.getContext();
        p && typeof p.isContextLost == "function" && p.isContextLost() && n(true);
      } catch {
        n(true);
      }
      const l = (p) => {
        p.preventDefault(), n(true), i();
      }, u = () => {
        clearTimeout(a), n(false);
      };
      return s.addEventListener("webglcontextlost", l, false), s.addEventListener("webglcontextrestored", u, false), () => {
        clearTimeout(a), s.removeEventListener("webglcontextlost", l, false), s.removeEventListener("webglcontextrestored", u, false);
      };
    }, [
      e
    ]), c.useEffect(() => {
      if (o) return;
      t();
      const s = requestAnimationFrame(() => t());
      return () => cancelAnimationFrame(s);
    }, [
      o,
      t
    ]), o;
  }
  function Xi() {
    const e = Yt((a) => a.inputDevice), t = Yt((a) => a.detectedDevice), o = Yt((a) => a.setDetectedDevice), n = c.useRef([]), s = c.useRef(false);
    c.useEffect(() => {
      if (e !== "auto" || t !== null) {
        s.current = true;
        return;
      }
      s.current = false, n.current = [];
      const a = (i) => {
        if (s.current || (n.current.push({
          deltaMode: i.deltaMode,
          hasHorizontal: Math.abs(i.deltaX) > 0.5,
          deltaY: Math.abs(i.deltaY)
        }), n.current.length < 5)) return;
        s.current = true;
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
  function Ui() {
    var _a2;
    const e = c.useRef(null), t = c.useRef(0), o = c.useRef([]), n = oe((m) => m.document.joints), s = oe((m) => m.setJointState), a = (n == null ? void 0 : n.map((m) => m.id).join(",")) ?? "", i = Ye((m) => m.mode), l = Ye((m) => m.timestep), u = Ye((m) => m.playbackSpeed), p = Ye((m) => m.setPhysicsAvailable), h = Ye((m) => m.setJointStates), d = Ye((m) => m.setObservation), g = Ye((m) => m.setMode);
    c.useEffect(() => {
      Tn().then((m) => {
        console.log("[Physics] isPhysicsAvailable:", m), p(m);
      });
    }, [
      p
    ]), c.useEffect(() => {
      if (!n || n.length === 0) {
        e.current && (e.current.close(), e.current = null, o.current = []);
        return;
      }
      let m = true;
      async function w() {
        if (!(!await Tn() || !m)) try {
          const j = oe.getState().document, C = [], z = await us.create(j, {
            endEffectorIds: C,
            dt: 1 / 240,
            substeps: 4
          });
          if (!m) {
            z.close();
            return;
          }
          e.current && e.current.close(), e.current = z;
          const A = oe.getState().document.joints ?? [];
          o.current = A.map((D) => D.id);
          const F = A.map((D) => ({
            id: D.id,
            name: D.name ?? D.id,
            position: D.state ?? 0,
            velocity: 0,
            torque: 0,
            targetVelocity: 0,
            limits: null
          }));
          h(F);
          const W = z.observe();
          d({
            jointPositions: W.joint_positions,
            jointVelocities: W.joint_velocities,
            endEffectorPoses: W.end_effector_poses
          }), console.log(`[Physics] Initialized with ${z.numJoints} joints, ${z.actionDim} action dim`);
        } catch (j) {
          console.error("[Physics] Failed to initialize:", j);
        }
      }
      return w(), () => {
        m = false;
      };
    }, [
      a,
      h,
      d
    ]), c.useEffect(() => () => {
      e.current && (e.current.close(), e.current = null);
    }, []);
    const f = c.useCallback(() => Ye.getState().jointStates.map((w) => w.position), []), y = c.useCallback(() => Ye.getState().jointStates.map((w) => w.torque), []), x = c.useCallback(() => Ye.getState().jointStates.map((w) => w.targetVelocity ?? 0), []), P = c.useCallback((m) => {
      d({
        jointPositions: m.joint_positions,
        jointVelocities: m.joint_velocities,
        endEffectorPoses: m.end_effector_poses
      });
      const S = Ye.getState().jointStates.map((A, F) => ({
        ...A,
        position: m.joint_positions[F] ?? A.position,
        velocity: m.joint_velocities[F] ?? A.velocity
      }));
      h(S);
      const j = oe.getState().document, C = structuredClone(j);
      o.current.forEach((A, F) => {
        var _a3;
        const W = (_a3 = C.joints) == null ? void 0 : _a3.find((D) => D.id === A);
        W && m.joint_positions[F] !== void 0 && (W.state = m.joint_positions[F]);
      });
      const z = Rn(C);
      De.getState().updateInstanceTransforms(z);
    }, [
      d,
      h
    ]), { invalidate: b } = Pe();
    return Qe((m, w) => {
      const S = e.current;
      if (S && !(i === "off" || i === "paused")) {
        if (i === "stepping") {
          const j = Ye.getState().actionType, C = j === "torque" ? y() : j === "velocity" ? x() : f(), z = S.step(j, C);
          P(z.observation), g("paused");
          return;
        }
        if (i === "running") {
          const j = w * u;
          t.current += j;
          const C = Ye.getState().actionType;
          for (; t.current >= l; ) {
            const z = C === "torque" ? y() : C === "velocity" ? x() : f(), A = S.step(C, z);
            Math.random() < 0.01 && console.log("[Physics] actionType:", C, "actions:", z, "positions:", A.observation.joint_positions), P(A.observation), t.current -= l;
          }
          b();
        }
      }
    }), c.useEffect(() => {
      if (i === "off" && e.current) {
        const m = Ye.getState().jointStates;
        o.current.forEach((S, j) => {
          var _a3;
          const C = (_a3 = m[j]) == null ? void 0 : _a3.position;
          C !== void 0 && s(S, C, true);
        });
        const w = e.current.reset();
        P(w), t.current = 0;
      }
    }, [
      i,
      P,
      s
    ]), {
      isInitialized: !!e.current,
      numJoints: ((_a2 = e.current) == null ? void 0 : _a2.numJoints) ?? 0
    };
  }
  function qi() {
    const e = c.useRef(null), { invalidate: t } = Pe();
    c.useEffect(() => Nt.subscribe(() => {
      t();
    }), [
      t
    ]), Qe((o, n) => {
      const s = oe.getState().document.timeline;
      if (!s || s.tracks.length === 0) return;
      const a = Nt.getState();
      if (!a.visible) {
        e.current = null;
        return;
      }
      const i = Ye.getState().mode;
      if (i === "running" || i === "stepping") return;
      const l = Math.max(s.durationS, 1e-6);
      let u = a.timeS;
      if (a.playing ? (u += n * a.speed, u >= l && (a.loop ? u %= l : (u = l, Nt.setState({
        playing: false
      }))), Nt.setState({
        timeS: u
      })) : u = Math.min(Math.max(u, 0), l), e.current === u) return;
      e.current = u;
      const p = Zs(s, u);
      if (p.size === 0) return;
      const h = oe.getState().document, d = structuredClone(h);
      let g = false;
      for (const y of d.joints ?? []) {
        const x = p.get(y.id);
        x !== void 0 && (y.state = x, g = true);
      }
      if (!g) return;
      const f = Rn(d);
      De.getState().updateInstanceTransforms(f), t();
    });
  }
  const Ki = [
    "video/mp4;codecs=avc1.640028",
    "video/mp4;codecs=avc1.42E01E",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm"
  ], Zi = 12e6, Ji = 60, Qi = 250;
  function ea() {
    if (typeof MediaRecorder > "u") return null;
    for (const e of Ki) if (MediaRecorder.isTypeSupported(e)) return e;
    return null;
  }
  function ta(e) {
    return e.startsWith("video/mp4") ? "mp4" : e.startsWith("video/webm") ? "webm" : "bin";
  }
  function na(e) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "untitled";
  }
  function oa() {
    return (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
  }
  function sa() {
    const { gl: e } = Pe(), t = tt((a) => a.status), o = $((a) => a.renderMode), n = Ye((a) => a.mode), s = c.useRef({
      recorder: null,
      chunks: [],
      mimeType: null,
      rafId: null,
      raytraceDriving: false
    });
    c.useEffect(() => {
      const a = tt.getState(), i = s.current;
      if (t === "recording" && !i.recorder) {
        const l = ea();
        if (!l) {
          a.setError("MediaRecorder is not supported in this browser.");
          return;
        }
        const u = bi(), p = o === "raytrace" && u !== null;
        o === "raytrace" && !p && Ke.warn("app", "Raytrace overlay not mounted at record start; falling back to WebGL canvas.");
        const d = p ? u : e.domElement;
        if (typeof d.captureStream != "function") {
          a.setError("Canvas.captureStream is not supported in this browser.");
          return;
        }
        const g = d.captureStream(Ji);
        let f;
        try {
          f = new MediaRecorder(g, {
            mimeType: l,
            videoBitsPerSecond: Zi
          });
        } catch (y) {
          a.setError(y instanceof Error ? y.message : "Failed to create MediaRecorder.");
          return;
        }
        i.chunks = [], i.recorder = f, i.mimeType = l, i.raytraceDriving = p, f.ondataavailable = (y) => {
          y.data && y.data.size > 0 && (i.chunks.push(y.data), tt.getState().addBytes(y.data.size));
        }, f.onerror = (y) => {
          var _a2;
          const P = ((_a2 = y.error) == null ? void 0 : _a2.message) ?? "MediaRecorder error";
          Ke.warn("app", `Recorder error: ${P}`), tt.getState().setError(P);
        }, f.onstop = () => {
          const y = i.chunks, x = i.mimeType ?? "video/webm";
          if (i.chunks = [], i.recorder = null, i.mimeType = null, i.raytraceDriving = false, i.rafId !== null && (cancelAnimationFrame(i.rafId), i.rafId = null), y.length === 0) {
            tt.getState().reset();
            return;
          }
          const P = new Blob(y, {
            type: x
          }), b = oe.getState().documentName ?? "untitled", m = `vcad-sim-${na(b)}-${oa()}.${ta(x)}`;
          ds(P, m), tt.getState().reset();
        };
        try {
          f.start(Qi), tt.getState().setMimeType(l);
        } catch (y) {
          i.recorder = null, i.mimeType = null, i.raytraceDriving = false, a.setError(y instanceof Error ? y.message : "Failed to start recording.");
          return;
        }
        if (i.raytraceDriving) {
          const y = () => {
            s.current.raytraceDriving && (to(), s.current.rafId = requestAnimationFrame(y));
          };
          s.current.rafId = requestAnimationFrame(y);
        }
        return;
      }
      if (t === "saving" && i.recorder) {
        i.raytraceDriving = false, i.rafId !== null && (cancelAnimationFrame(i.rafId), i.rafId = null);
        try {
          i.recorder.state !== "inactive" && i.recorder.stop();
        } catch (l) {
          Ke.warn("app", `Recorder stop failed: ${l}`), tt.getState().reset();
        }
        return;
      }
      if (t === "idle" && i.recorder) {
        i.chunks = [];
        try {
          i.recorder.ondataavailable = null, i.recorder.onstop = null, i.recorder.onerror = null, i.recorder.state !== "inactive" && i.recorder.stop();
        } catch {
        }
        i.recorder = null, i.mimeType = null, i.raytraceDriving = false, i.rafId !== null && (cancelAnimationFrame(i.rafId), i.rafId = null);
      }
    }, [
      t,
      o,
      e
    ]), c.useEffect(() => {
      const a = s.current, i = a.recorder;
      if (i) if (n === "paused" && i.state === "recording") try {
        i.pause(), tt.getState().pause(), a.rafId !== null && (cancelAnimationFrame(a.rafId), a.rafId = null);
      } catch (l) {
        Ke.warn("app", `Recorder pause failed: ${l}`);
      }
      else if (n === "running" && i.state === "paused") try {
        if (i.resume(), tt.getState().resume(), a.raytraceDriving && a.rafId === null) {
          const l = () => {
            s.current.raytraceDriving && (to(), s.current.rafId = requestAnimationFrame(l));
          };
          a.rafId = requestAnimationFrame(l);
        }
      } catch (l) {
        Ke.warn("app", `Recorder resume failed: ${l}`);
      }
      else n === "off" && i.state !== "inactive" && tt.getState().stop();
    }, [
      n,
      t
    ]), c.useEffect(() => () => {
      const a = s.current;
      a.rafId !== null && (cancelAnimationFrame(a.rafId), a.rafId = null);
      const i = a.recorder;
      if (i && i.state !== "inactive") try {
        i.ondataavailable = null, i.onstop = null, i.onerror = null, i.stop();
      } catch {
      }
      a.recorder = null, a.chunks = [], a.mimeType = null, a.raytraceDriving = false;
    }, []);
  }
  function ra(e, t) {
    const o = e ?? {};
    return (o.shift ?? false) === (t.shift ?? false) && (o.ctrl ?? false) === (t.ctrl ?? false) && (o.meta ?? false) === (t.meta ?? false) && (o.alt ?? false) === (t.alt ?? false);
  }
  function ia(e) {
    return {
      shift: e.shiftKey,
      ctrl: e.ctrlKey,
      meta: e.metaKey,
      alt: e.altKey
    };
  }
  function aa(e, t, o) {
    const s = [
      ...e.filter((a) => !a.device || a.device === o)
    ].sort((a, i) => {
      const l = (u) => Object.values(u ?? {}).filter(Boolean).length;
      return l(i.modifiers) - l(a.modifiers);
    });
    for (const a of s) if (ra(a.modifiers, t)) return a.action;
    return "none";
  }
  function ca(e, t) {
    const o = {
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2
    }, n = (i) => {
      switch (i) {
        case "orbit":
          return o.ROTATE;
        case "zoom":
          return o.DOLLY;
        case "pan":
          return o.PAN;
        default:
          return;
      }
    }, s = e.mouseBindings.filter((i) => !i.device || i.device === t), a = (i) => {
      var _a2;
      return ((_a2 = s.find((u) => {
        var _a3, _b, _c, _d;
        return u.button === i && !((_a3 = u.modifiers) == null ? void 0 : _a3.shift) && !((_b = u.modifiers) == null ? void 0 : _b.ctrl) && !((_c = u.modifiers) == null ? void 0 : _c.meta) && !((_d = u.modifiers) == null ? void 0 : _d.alt);
      })) == null ? void 0 : _a2.action) ?? "none";
    };
    return {
      LEFT: n(a("left")),
      MIDDLE: n(a("middle")),
      RIGHT: n(a("right"))
    };
  }
  const ln = 0.8;
  function la(e) {
    return Math.max(9, Co(e) + 2);
  }
  function ua(e, t) {
    if (t < 2) return ln;
    const o = e === "BCu" ? t - 1 : e === "FCu" ? 0 : Co(e);
    return ln - 2 * ln * o / (t - 1);
  }
  const da = {
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
  function Dt(e, t = 0, o) {
    return (fs(e) ? ua(e, o ?? la(e)) : da[e] ?? 0) * (1 + t * 4);
  }
  function pt(e, t, o = 0, n) {
    return t / 2 + Dt(e, o, n);
  }
  new E();
  new E();
  function oo(e, t, o) {
    let n = e.x, s = e.y;
    return o && t > 0 && (n = Math.round(n / t) * t, s = Math.round(s / t) * t), {
      x: n,
      y: s
    };
  }
  function fa(e, t) {
    return jo(e, t).color;
  }
  function Wo(e, t) {
    return jo(e, t).visible;
  }
  const pa = 120, so = new We("#3b82f6"), ma = /* @__PURE__ */ new Set([
    "component",
    "silkscreen"
  ]), ha = /* @__PURE__ */ new Set([
    "laminate",
    "substrate",
    "mask"
  ]);
  function ro(e, t, o) {
    if (!e || t <= 0) return 0;
    const n = e;
    return Dt(n, t, o) - Dt(n, 0, o);
  }
  function xa(e, t, o) {
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
  function ga({ pcb: e, layers: t, activeNet: o, hoveredNet: n, selection: s, explosion: a, showBoard: i }) {
    const { invalidate: l } = Pe(), [u, p] = c.useState([]), h = c.useRef(0), d = c.useMemo(() => kn(e).length, [
      e
    ]);
    c.useEffect(() => {
      const x = ++h.current, P = setTimeout(() => {
        ps(e).then((b) => {
          h.current === x && (p(b), l());
        }).catch((b) => console.error("[PcbKernelBoard] preview meshes failed:", b));
      }, pa);
      return () => clearTimeout(P);
    }, [
      e,
      l
    ]);
    const g = c.useMemo(() => u.filter((x) => !ma.has(x.role)).map((x, P) => {
      var _a2, _b, _c;
      const b = new ft();
      b.setAttribute("position", new It(x.positions, 3)), x.normals.length === x.positions.length ? b.setAttribute("normal", new It(x.normals, 3)) : b.computeVertexNormals(), b.setIndex(x.indices);
      const m = x.alpha ?? 1, w = new Ls({
        color: new We(x.color[0], x.color[1], x.color[2]),
        metalness: x.metalness,
        roughness: x.roughness,
        envMapIntensity: 0.5,
        clearcoat: x.clearcoat ?? 0,
        clearcoatRoughness: x.clearcoat_roughness ?? 0,
        ...m < 1 ? {
          transparent: true,
          opacity: m,
          depthWrite: false,
          side: Ue
        } : {},
        ...(((_a2 = x.emissive) == null ? void 0 : _a2[0]) ?? 0) > 0 || (((_b = x.emissive) == null ? void 0 : _b[1]) ?? 0) > 0 || (((_c = x.emissive) == null ? void 0 : _c[2]) ?? 0) > 0 ? {
          emissive: new We(x.emissive[0], x.emissive[1], x.emissive[2]),
          emissiveIntensity: 1
        } : {}
      });
      return {
        key: `${x.role}-${x.layer ?? "all"}-${P}`,
        role: x.role,
        layer: x.layer,
        geometry: b,
        material: w,
        entities: x.entities ?? []
      };
    }), [
      u
    ]);
    c.useEffect(() => () => g.forEach((x) => {
      x.geometry.dispose(), x.material.dispose();
    }), [
      g
    ]);
    const f = c.useMemo(() => {
      const x = [];
      for (const P of g) {
        if (P.entities.length === 0) continue;
        const b = P.entities.filter((A) => o != null && A.net === o || n != null && A.net === n || xa(A, e, s));
        if (b.length === 0) continue;
        const m = P.geometry.getIndex();
        let w = 0;
        for (const A of b) w += A.count;
        const S = new Uint32Array(w);
        let j = 0;
        for (const A of b) for (let F = 0; F < A.count; F++) S[j++] = m.getX(A.start + F);
        const C = new ft();
        C.setAttribute("position", P.geometry.getAttribute("position"));
        const z = P.geometry.getAttribute("normal");
        z && C.setAttribute("normal", z), C.setIndex(new $e(S, 1)), x.push({
          key: `hl-${P.key}`,
          geometry: C
        });
      }
      return x;
    }, [
      g,
      e,
      o,
      n,
      s
    ]);
    c.useEffect(() => () => f.forEach((x) => x.geometry.dispose()), [
      f
    ]);
    const y = c.useMemo(() => {
      const x = /* @__PURE__ */ new Map();
      for (const P of g) x.set(`hl-${P.key}`, ro(P.layer, a, d));
      return x;
    }, [
      g,
      a,
      d
    ]);
    return r.jsxs("group", {
      children: [
        g.map((x) => ha.has(x.role) && !i || x.layer && !Wo(t, x.layer) ? null : r.jsx("mesh", {
          geometry: x.geometry,
          material: x.material,
          position: [
            0,
            0,
            ro(x.layer, a, d)
          ],
          renderOrder: x.role === "mask" ? 1 : 0
        }, x.key)),
        f.map((x) => r.jsx("mesh", {
          geometry: x.geometry,
          position: [
            0,
            0,
            y.get(x.key) ?? 0
          ],
          renderOrder: 2,
          children: r.jsx("meshStandardMaterial", {
            color: so,
            emissive: so,
            emissiveIntensity: 0.55,
            roughness: 0.35,
            metalness: 0.2,
            polygonOffset: true,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -2
          })
        }, x.key))
      ]
    });
  }
  function ya(e, t, o, n, s, a) {
    const i = pt(e.layer, s, a), l = Math.cos(n), u = Math.sin(n), p = (h, d) => {
      const g = h * l - d * u + t, f = h * u + d * l + o;
      return new E(g, f, i);
    };
    switch (e.type) {
      case "Line":
        return {
          points: [
            p(e.start.x, e.start.y),
            p(e.end.x, e.end.y)
          ],
          color: "#FFEB3B",
          layer: e.layer
        };
      case "Rect": {
        const h = p(e.start.x, e.start.y), d = p(e.end.x, e.start.y), g = p(e.end.x, e.end.y), f = p(e.start.x, e.end.y);
        return {
          points: [
            h,
            d,
            g,
            f,
            h
          ],
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      case "Circle": {
        const d = [];
        for (let g = 0; g <= 24; g++) {
          const f = g / 24 * Math.PI * 2, y = e.center.x + Math.cos(f) * e.radius, x = e.center.y + Math.sin(f) * e.radius;
          d.push(p(y, x));
        }
        return {
          points: d,
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      case "Polygon": {
        const h = e.vertices.map((d) => p(d.x, d.y));
        return h.length > 0 && h.push(h[0]), {
          points: h,
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      default:
        return null;
    }
  }
  function va({ footprint: e, layers: t, boardThickness: o, highlight: n, explosion: s, interfering: a }) {
    const i = (e.rotation ?? 0) * Math.PI / 180, l = c.useMemo(() => e.graphics ? e.graphics.map((p) => ya(p, e.position.x, e.position.y, i, o, s)).filter((p) => p !== null && Wo(t, p.layer)) : [], [
      e,
      t,
      o,
      i,
      s
    ]), u = pt(e.front !== false ? "FSilkS" : "BSilkS", o, s);
    return r.jsxs("group", {
      children: [
        l.map((p, h) => r.jsxs("line", {
          children: [
            r.jsx("bufferGeometry", {
              children: r.jsx("bufferAttribute", {
                attach: "attributes-position",
                args: [
                  new Float32Array(p.points.flatMap((d) => [
                    d.x,
                    d.y,
                    d.z
                  ])),
                  3
                ]
              })
            }),
            r.jsx("lineBasicMaterial", {
              color: a ? "#ef4444" : n ? "#3b82f6" : fa(t, p.layer),
              linewidth: 1
            })
          ]
        }, h)),
        r.jsx(Xo, {
          position: [
            e.position.x,
            e.position.y,
            u + 0.05
          ],
          rotation: [
            0,
            0,
            i
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
  const io = new We("#ef4444"), wa = new We(0, 0, 0);
  function ba() {
    const e = ue((a) => a.componentBodies), t = ue((a) => a.showComponentBodies), o = ue((a) => a.interferingFootprints), n = c.useMemo(() => new Set(o), [
      o
    ]), s = c.useMemo(() => e.map((a, i) => {
      const l = new ft();
      l.setAttribute("position", new It(a.positions, 3)), a.normals.length === a.positions.length && l.setAttribute("normal", new It(a.normals, 3)), l.setIndex(a.indices), a.normals.length !== a.positions.length && l.computeVertexNormals();
      const u = a.emissive ?? [
        0,
        0,
        0
      ];
      return {
        key: `body-${i}`,
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
    return c.useEffect(() => () => s.forEach((a) => a.geo.dispose()), [
      s
    ]), !t || s.length === 0 ? null : r.jsx("group", {
      children: s.map((a) => {
        const i = n.has(a.ref);
        return r.jsx("mesh", {
          geometry: a.geo,
          castShadow: true,
          receiveShadow: true,
          children: r.jsx("meshStandardMaterial", {
            color: i ? io : a.color,
            metalness: i ? 0.1 : a.metalness,
            roughness: i ? 0.45 : a.roughness,
            emissive: i ? io : a.emissiveOn ? a.emissive : wa,
            emissiveIntensity: i ? 0.45 : a.emissiveOn ? 2.5 : 0
          })
        }, a.key);
      })
    });
  }
  function Sa(e, t, o) {
    if (!t) return [];
    const n = [], s = /* @__PURE__ */ new Map();
    for (const a of e) for (const i of a.pads) {
      const l = `${a.ref}:${i.number}`;
      s.set(l, {
        x: a.position.x + i.position.x,
        y: a.position.y + i.position.y
      });
    }
    for (const a of t.nets) if (!(a.connections.length < 2 || o.some((l) => l.net === a.name))) for (let l = 0; l < a.connections.length - 1; l++) {
      const u = a.connections[l], p = a.connections[l + 1], h = s.get(`${u.component_ref}:${u.pin_number}`), d = s.get(`${p.component_ref}:${p.pin_number}`);
      h && d && n.push({
        net: a.name,
        from: h,
        to: d,
        fpRef: u.component_ref,
        padNum: u.pin_number
      });
    }
    return n;
  }
  const Ma = "#3b82f6", Ea = "#555555";
  function Pa({ pcb: e, netlist: t, activeNet: o, hoveredNet: n, boardThickness: s, explosion: a, onStartRoute: i, onHoverNet: l }) {
    const u = c.useMemo(() => Sa(e.footprints, t, e.traces), [
      e.footprints,
      t,
      e.traces
    ]), p = pt("FCu", s, a) + 0.1;
    return u.length === 0 ? null : r.jsx("group", {
      children: u.map((h, d) => {
        const f = h.net === o || h.net === n ? Ma : Ea, y = new Float32Array([
          h.from.x,
          h.from.y,
          p,
          h.to.x,
          h.to.y,
          p
        ]);
        return r.jsxs("line", {
          onClick: (x) => {
            x.stopPropagation(), i(h.fpRef, h.padNum, h.net);
          },
          onPointerEnter: () => l(h.net),
          onPointerLeave: () => l(null),
          children: [
            r.jsx("bufferGeometry", {
              children: r.jsx("bufferAttribute", {
                attach: "attributes-position",
                args: [
                  y,
                  3
                ]
              })
            }),
            r.jsx("lineDashedMaterial", {
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
  const ao = "#3b82f6";
  function ja({ pcb: e, routeStartPad: t, routePreview: o, boardThickness: n, activeLayer: s, explosion: a }) {
    if (!t || o.length === 0) return null;
    const i = e.footprints.find((w) => w.ref === t.fpRef), l = i == null ? void 0 : i.pads.find((w) => w.number === t.padNum);
    if (!i || !l) return null;
    const u = {
      x: i.position.x + l.position.x,
      y: i.position.y + l.position.y
    }, p = o[o.length - 1], h = pt(s, n, a, kn(e).length) + 0.02, d = e.rules.defaultRules.traceWidth, g = e.rules.defaultRules.clearance, f = p.x - u.x, y = p.y - u.y, x = Math.sqrt(f * f + y * y);
    if (x < 0.01) return null;
    const P = Math.atan2(y, f), b = (u.x + p.x) / 2, m = (u.y + p.y) / 2;
    return r.jsxs("group", {
      children: [
        r.jsxs("mesh", {
          position: [
            b,
            m,
            h - 0.01
          ],
          rotation: [
            0,
            0,
            P
          ],
          children: [
            r.jsx("boxGeometry", {
              args: [
                x,
                d + g * 2,
                0.02
              ]
            }),
            r.jsx("meshBasicMaterial", {
              color: ao,
              transparent: true,
              opacity: 0.15
            })
          ]
        }),
        r.jsxs("mesh", {
          position: [
            b,
            m,
            h
          ],
          rotation: [
            0,
            0,
            P
          ],
          children: [
            r.jsx("boxGeometry", {
              args: [
                x,
                d,
                0.035
              ]
            }),
            r.jsx("meshBasicMaterial", {
              color: ao,
              transparent: true,
              opacity: 0.7
            })
          ]
        })
      ]
    });
  }
  function Ca({ violation: e, z: t }) {
    const o = c.useRef(null);
    Qe(({ clock: s }) => {
      if (!o.current) return;
      const a = s.getElapsedTime(), i = 0.6 + 0.4 * Math.sin(a * 3);
      o.current.scale.set(i, i, 1);
    });
    const n = e.severity === "Error" ? "#ef4444" : "#f59e0b";
    return r.jsxs("mesh", {
      ref: o,
      position: [
        e.position.x,
        e.position.y,
        t
      ],
      children: [
        r.jsx("ringGeometry", {
          args: [
            0.6,
            0.8,
            24
          ]
        }),
        r.jsx("meshBasicMaterial", {
          color: n,
          transparent: true,
          opacity: 0.8,
          side: Ue
        })
      ]
    });
  }
  function Ra({ violations: e, boardThickness: t, explosion: o }) {
    if (e.length === 0) return null;
    const n = pt("FCu", t, o) + 0.15;
    return r.jsx("group", {
      children: e.map((s, a) => r.jsx(Ca, {
        violation: s,
        z: n
      }, a))
    });
  }
  const ka = {
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
  function za(e, t, o) {
    if (Number(o.node) !== t) return null;
    if (o.kind === "pcbFootprint") {
      const n = e.footprints.find((s) => s.ref === o.ref);
      if (!n) return null;
      if (o.pad) {
        const s = n.pads.find((i) => i.number === o.pad);
        if (!s) return null;
        const a = (n.rotation ?? 0) * Math.PI / 180;
        return {
          x: n.position.x + s.position.x * Math.cos(a) - s.position.y * Math.sin(a),
          y: n.position.y + s.position.x * Math.sin(a) + s.position.y * Math.cos(a)
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
      const n = e.outline.vertices.length, s = e.outline.vertices[o.index], a = e.outline.vertices[(o.index + 1) % n];
      return s && a ? {
        x: (s.x + a.x) / 2,
        y: (s.y + a.y) / 2
      } : null;
    }
    return null;
  }
  function Ia(e) {
    return Object.values(e).filter((t) => t != null && typeof t == "object" && "kind" in t);
  }
  function Aa(e) {
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
  function Da({ pcb: e, nodeId: t, constraints: o, pickedTargets: n, boardThickness: s, explosion: a }) {
    const i = pt("FCu", s, a) + 0.12, l = c.useMemo(() => o.map((p) => {
      const d = Ia(p.kind).map((x) => za(e, t, x)).filter((x) => x !== null);
      if (d.length === 0) return null;
      const g = {
        x: d.reduce((x, P) => x + P.x, 0) / d.length,
        y: d.reduce((x, P) => x + P.y, 0) / d.length
      }, f = p.kind.type, y = p.kind.value;
      return {
        c: p,
        type: f,
        value: y,
        points: d,
        mid: g
      };
    }).filter((p) => p !== null), [
      o,
      e,
      t
    ]), u = c.useMemo(() => n.map((p) => {
      var _a2;
      return p.kind === "footprint" ? (_a2 = e.footprints.find((h) => h.ref === p.ref)) == null ? void 0 : _a2.position : e.outline.vertices[p.idx];
    }).filter((p) => p != null), [
      n,
      e
    ]);
    return l.length === 0 && u.length === 0 ? null : r.jsxs("group", {
      children: [
        l.map(({ c: p, type: h, value: d, points: g, mid: f }) => {
          const y = d !== void 0, x = p.driven === true;
          return r.jsxs("group", {
            children: [
              y && g.length === 2 && r.jsx(Ae, {
                points: [
                  [
                    g[0].x,
                    g[0].y,
                    i
                  ],
                  [
                    g[1].x,
                    g[1].y,
                    i
                  ]
                ],
                color: x ? "#9ca3af" : "#e5e7eb",
                lineWidth: 1,
                dashed: x,
                dashSize: 0.5,
                gapSize: 0.35,
                transparent: true,
                opacity: 0.75
              }),
              r.jsx(it, {
                position: [
                  f.x,
                  f.y,
                  i
                ],
                center: true,
                zIndexRange: [
                  20,
                  0
                ],
                children: r.jsx("div", {
                  style: Aa(x),
                  children: y ? `${typeof d == "number" ? d.toFixed(2) : String(d)}${h === "angle" || h === "rotation" ? "\xB0" : ""}${x ? " (ref)" : ""}` : ka[h] ?? h
                })
              })
            ]
          }, p.id);
        }),
        u.map((p, h) => r.jsxs("mesh", {
          position: [
            p.x,
            p.y,
            i + 0.02
          ],
          children: [
            r.jsx("ringGeometry", {
              args: [
                1,
                1.25,
                24
              ]
            }),
            r.jsx("meshBasicMaterial", {
              color: "#f97316",
              transparent: true,
              opacity: 0.9
            })
          ]
        }, `pick-${h}`))
      ]
    });
  }
  function Ta({ showBoard: e = true } = {}) {
    const { invalidate: t } = Pe(), o = c.useRef(null), n = c.useRef(null), s = Tt((V) => V.activeBoardNodeId), a = oe((V) => V.document), i = s != null ? zn(a, s) : null, l = ue((V) => V.selection), u = ue((V) => V.hoveredNet), p = ue((V) => V.netlist), h = ms(), d = ue((V) => V.pcbGridSize), g = ue((V) => V.pcbSnapToGrid), f = ue((V) => V.pcbActiveLayer), y = ue((V) => V.drcViolations), x = ue((V) => V.routeActive), P = ue((V) => V.routePreview), b = ue((V) => V.routeStartPad), m = ue((V) => V.pcbTool), w = ue((V) => V.pcbDragging), S = ue((V) => V.stackupExplosion), j = ue((V) => V.interferingFootprints), C = ue((V) => V.select), z = ue((V) => V.setHoveredNet), A = ue((V) => V.startRouteFromRatsnest), F = ue((V) => V.updateRoutePreview), W = ue((V) => V.startPcbDrag), D = ue((V) => V.cancelPcbDrag), L = ue((V) => V.pcbConstraintTargets), _ = ue((V) => V.pushConstraintTarget), X = ue((V) => V.setPcbSolveStatus), se = oe((V) => V.solveDesignConstraints), re = oe((V) => V.document.constraints), xe = oe((V) => V.moveFootprint), ge = oe((V) => V.removeTrace), B = oe((V) => V.removeVia), ie = c.useMemo(() => l.type === "net" ? l.netId : l.type === "trace" || l.type === "via" || l.type === "pad" ? l.net : null, [
      l
    ]), je = c.useMemo(() => l.type === "footprint" || l.type === "component" ? l.ref : null, [
      l
    ]), ee = c.useRef(null), Ee = c.useCallback((V) => {
      if (!i || V.button !== 0) return;
      V.stopPropagation();
      const Ne = V.point, Xe = n.current ? n.current.worldToLocal(Ne.clone()) : Ne, ae = oo(Xe, d, g);
      if (m === "move") for (let Q = i.footprints.length - 1; Q >= 0; Q--) {
        const U = i.footprints[Q], we = 5, he = 5;
        if (ae.x >= U.position.x - we && ae.x <= U.position.x + we && ae.y >= U.position.y - he && ae.y <= U.position.y + he) {
          W(Q, U.position), ee.current = {
            fpIdx: Q,
            startWorld: ae
          };
          return;
        }
      }
      if (m === "constrain") {
        for (let Q = i.footprints.length - 1; Q >= 0; Q--) {
          const U = i.footprints[Q], we = 5, he = 5;
          if (ae.x >= U.position.x - we && ae.x <= U.position.x + we && ae.y >= U.position.y - he && ae.y <= U.position.y + he) {
            _({
              kind: "footprint",
              ref: U.ref
            });
            return;
          }
        }
        for (let Q = 0; Q < i.outline.vertices.length; Q++) {
          const U = i.outline.vertices[Q];
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
      if (m === "select") {
        for (let Q = i.footprints.length - 1; Q >= 0; Q--) {
          const U = i.footprints[Q];
          for (const He of U.pads) {
            const Ie = U.position.x + He.position.x, Ze = U.position.y + He.position.y;
            if (Math.sqrt((ae.x - Ie) ** 2 + (ae.y - Ze) ** 2) < 1.5) {
              C({
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
            C({
              type: "footprint",
              ref: U.ref
            });
            return;
          }
        }
        for (let Q = 0; Q < i.traces.length; Q++) {
          const U = i.traces[Q], we = U.end.x - U.start.x, he = U.end.y - U.start.y, He = we * we + he * he;
          if (He < 1e-6) continue;
          let Ie = ((ae.x - U.start.x) * we + (ae.y - U.start.y) * he) / He;
          Ie = Math.max(0, Math.min(1, Ie));
          const Ze = U.start.x + Ie * we, Te = U.start.y + Ie * he;
          if (Math.sqrt((ae.x - Ze) ** 2 + (ae.y - Te) ** 2) < U.width / 2 + 0.5) {
            C({
              type: "trace",
              idx: Q,
              net: U.net
            });
            return;
          }
        }
        for (let Q = 0; Q < i.vias.length; Q++) {
          const U = i.vias[Q];
          if (Math.sqrt((ae.x - U.position.x) ** 2 + (ae.y - U.position.y) ** 2) < U.diameter / 2 + 0.3) {
            C({
              type: "via",
              idx: Q,
              net: U.net
            });
            return;
          }
        }
        C({
          type: "none"
        });
      }
      if (m === "delete") {
        for (let Q = 0; Q < i.traces.length; Q++) {
          const U = i.traces[Q], we = U.end.x - U.start.x, he = U.end.y - U.start.y, He = we * we + he * he;
          if (He < 1e-6) continue;
          let Ie = ((ae.x - U.start.x) * we + (ae.y - U.start.y) * he) / He;
          Ie = Math.max(0, Math.min(1, Ie));
          const Ze = U.start.x + Ie * we, Te = U.start.y + Ie * he;
          if (Math.sqrt((ae.x - Ze) ** 2 + (ae.y - Te) ** 2) < U.width / 2 + 0.5 && s != null) {
            ge(s, Q);
            return;
          }
        }
        for (let Q = 0; Q < i.vias.length; Q++) {
          const U = i.vias[Q];
          if (Math.sqrt((ae.x - U.position.x) ** 2 + (ae.y - U.position.y) ** 2) < U.diameter / 2 + 0.3 && s != null) {
            B(s, Q);
            return;
          }
        }
      }
      if (m === "route") for (const Q of i.footprints) for (const U of Q.pads) {
        const we = Q.position.x + U.position.x, he = Q.position.y + U.position.y;
        if (Math.sqrt((ae.x - we) ** 2 + (ae.y - he) ** 2) < 1.5) {
          ue.getState().startRoute(Q.ref, U.number, U.net ?? "");
          return;
        }
      }
    }, [
      i,
      m,
      d,
      g,
      s,
      C,
      W,
      ge,
      B
    ]), de = c.useCallback((V) => {
      if (!i) return;
      const Ne = V.point, Xe = n.current ? n.current.worldToLocal(Ne.clone()) : Ne, ae = oo(Xe, d, g);
      if (w && s != null) {
        xe(s, w.fpIdx, {
          x: ae.x,
          y: ae.y,
          z: 0
        }), t();
        return;
      }
      x && (F([
        ae
      ]), t());
    }, [
      i,
      w,
      x,
      d,
      g,
      s,
      xe,
      F,
      t
    ]), be = c.useCallback(() => {
      if (w) {
        if (s != null && ((re == null ? void 0 : re.length) ?? 0) > 0 && i) {
          const V = i.footprints[w.fpIdx];
          if (V) {
            const Ne = se({
              extraFixed: [
                {
                  node: Number(s),
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
      s,
      re,
      i,
      se,
      X
    ]);
    if (!i) return null;
    const Fe = i.outline.thickness;
    let Ge = 1 / 0, Oe = -1 / 0, Se = 1 / 0, ze = -1 / 0;
    for (const V of i.outline.vertices) V.x < Ge && (Ge = V.x), V.x > Oe && (Oe = V.x), V.y < Se && (Se = V.y), V.y > ze && (ze = V.y);
    const me = isFinite(Ge) ? (Ge + Oe) / 2 : 0, Ce = isFinite(Se) ? (Se + ze) / 2 : 0, Le = pt("FCu", Fe);
    return r.jsxs("group", {
      ref: n,
      children: [
        r.jsx(Mo, {
          position: [
            me,
            Ce,
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
        r.jsx(Uo, {
          ref: o,
          args: [
            500,
            500
          ],
          position: [
            me,
            Ce,
            Le
          ],
          visible: false,
          onPointerDown: Ee,
          onPointerMove: de,
          onPointerUp: be
        }),
        r.jsx(ga, {
          pcb: i,
          layers: h,
          activeNet: ie,
          hoveredNet: u,
          selection: l,
          explosion: S,
          showBoard: e
        }),
        i.footprints.map((V, Ne) => r.jsx(va, {
          footprint: V,
          layers: h,
          boardThickness: Fe,
          highlight: je === V.ref,
          interfering: j.includes(V.ref),
          explosion: S
        }, `fp-${Ne}`)),
        r.jsx(ba, {}),
        r.jsx(Pa, {
          pcb: i,
          netlist: p,
          activeNet: ie,
          hoveredNet: u,
          boardThickness: Fe,
          explosion: S,
          onStartRoute: A,
          onHoverNet: z
        }),
        x && r.jsx(ja, {
          pcb: i,
          routeStartPad: b,
          routePreview: P,
          boardThickness: Fe,
          activeLayer: f,
          explosion: S
        }),
        s != null && r.jsx(Da, {
          pcb: i,
          nodeId: Number(s),
          constraints: re ?? [],
          pickedTargets: L,
          boardThickness: Fe,
          explosion: S
        }),
        r.jsx(Ra, {
          violations: y,
          boardThickness: Fe,
          explosion: S
        })
      ]
    });
  }
  function _a({ pcb: e, explosion: t }) {
    const o = c.useMemo(() => {
      const u = e.outline.vertices;
      if (u.length < 3) return null;
      const p = new Ns();
      p.moveTo(u[0].x, u[0].y);
      for (let h = 1; h < u.length; h++) p.lineTo(u[h].x, u[h].y);
      if (p.closePath(), e.outline.cutouts) for (const h of e.outline.cutouts) {
        if (h.length < 3) continue;
        const d = new Os();
        d.moveTo(h[0].x, h[0].y);
        for (let g = 1; g < h.length; g++) d.lineTo(h[g].x, h[g].y);
        d.closePath(), p.holes.push(d);
      }
      return p;
    }, [
      e.outline
    ]), n = e.outline.thickness, s = c.useMemo(() => kn(e), [
      e
    ]), a = c.useMemo(() => s.slice(1).map((u, p) => ({
      name: `Dielectric ${p + 1}`,
      top: s[p],
      bottom: u
    })), [
      s
    ]), i = c.useMemo(() => o ? new Fn(o, {
      depth: n,
      bevelEnabled: false
    }) : null, [
      o,
      n
    ]), l = c.useMemo(() => !o || t <= 0 ? null : new Fn(o, {
      depth: 0.1,
      bevelEnabled: false
    }), [
      o,
      t
    ]);
    return i ? r.jsxs("group", {
      children: [
        r.jsx("mesh", {
          geometry: i,
          position: [
            0,
            0,
            -n / 2
          ],
          children: r.jsx("meshPhysicalMaterial", {
            color: "#0d5a2d",
            roughness: 0.5,
            metalness: 0,
            clearcoat: 1,
            clearcoatRoughness: 0.18,
            side: Ue
          })
        }),
        t > 0 && l && a.map((u) => {
          const p = Dt(u.top, t, s.length), h = Dt(u.bottom, t, s.length), d = (p + h) / 2;
          return r.jsx("mesh", {
            geometry: l,
            position: [
              0,
              0,
              d - 0.05
            ],
            children: r.jsx("meshStandardMaterial", {
              color: "#1a7a3a",
              roughness: 0.9,
              metalness: 0,
              transparent: true,
              opacity: 0.3,
              side: Ue
            })
          }, u.name);
        })
      ]
    }) : null;
  }
  function Fa({ excludeNodeId: e }) {
    const t = oe((o) => o.document);
    return hs(t).length > 0 ? null : t.pcb && e == null ? r.jsx(_a, {
      pcb: t.pcb,
      explosion: 0
    }) : null;
  }
  class La extends c.Component {
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
  function Na({ children: e }) {
    const t = _t(), o = Rt((s) => s.view), n = c.useMemo(() => [
      o.position[0],
      o.position[1],
      o.position[2]
    ], [
      o.position
    ]);
    return t ? r.jsx("group", {
      scale: o.scale,
      position: n,
      children: e
    }) : r.jsx(r.Fragment, {
      children: e
    });
  }
  function Go() {
    if (typeof window > "u") return null;
    const e = window;
    return e.SpeechRecognition ?? e.webkitSpeechRecognition ?? null;
  }
  function Oa() {
    return Go() != null;
  }
  function Ba(e) {
    var _a2, _b;
    const t = Go();
    if (!t) return (_a2 = e.onError) == null ? void 0 : _a2.call(e, "Speech recognition not supported in this browser."), null;
    const o = new t();
    o.continuous = true, o.interimResults = true, o.lang = e.lang ?? "en-US";
    let n = false, s = "", a = "";
    o.onresult = (i) => {
      var _a3;
      let l = "", u = s;
      for (let p = i.resultIndex; p < i.results.length; p++) {
        const h = i.results[p];
        if (!h) continue;
        const d = ((_a3 = h[0]) == null ? void 0 : _a3.transcript) ?? "";
        h.isFinal ? u += d : l += d;
      }
      s = u, a = l, e.onTranscript((u + l).trim(), false);
    }, o.onerror = (i) => {
      var _a3;
      const l = i.error ?? "unknown";
      (_a3 = e.onError) == null ? void 0 : _a3.call(e, l);
    }, o.onend = () => {
      var _a3;
      if (n) return;
      n = true;
      const i = (s + a).trim();
      i && e.onTranscript(i, true), (_a3 = e.onEnd) == null ? void 0 : _a3.call(e);
    };
    try {
      o.start();
    } catch (i) {
      return (_b = e.onError) == null ? void 0 : _b.call(e, i.message), null;
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
  const Va = 0.025, $a = 0.04, Wa = 0.4, Ga = 5e-3, Ha = 0.5, Ya = 1e3, co = 1e-4, lo = 10;
  function un(e, t, o, n, s) {
    var _a2;
    const a = t.get(o);
    if (!a) return false;
    const i = (_a2 = e.getJointPose) == null ? void 0 : _a2.call(e, a, n);
    if (!i) return false;
    const l = i.transform.position;
    return s.set(l.x, l.y, l.z), true;
  }
  const dn = new E(), fn = new E(), uo = new E();
  function Xa(e, t, o, n, s) {
    if (!un(e, t, "thumb-tip", o, dn) || !un(e, t, "index-finger-tip", o, fn) || !un(e, t, "wrist", o, uo)) return false;
    const a = dn.distanceTo(fn), i = n ? a < $a : a < Va;
    return s.pinching = i, s.midpoint.copy(dn).add(fn).multiplyScalar(0.5), s.reach.copy(s.midpoint).sub(uo).normalize(), true;
  }
  function Ua(e) {
    var _a2;
    let t = e;
    for (; t; ) {
      const o = (_a2 = t.userData) == null ? void 0 : _a2.partId;
      if (typeof o == "string") return o;
      t = t.parent;
    }
    return null;
  }
  const pn = new yn(), fo = new E(), po = new E();
  function qa(e, t, o) {
    fo.copy(t).addScaledVector(o, -0.02), po.copy(o), pn.set(fo, po), pn.far = Wa + 0.02;
    const n = pn.intersectObject(e, true);
    for (const s of n) {
      const a = Ua(s.object);
      if (a) return a;
    }
    return null;
  }
  const Ka = 800, mt = new E(), ht = new E(), bt = new E(), Vt = new E();
  function Za() {
    const e = _t(), { gl: t, scene: o } = Pe(), n = c.useRef({
      pinching: false,
      midpoint: new E()
    }), s = c.useRef({
      pinching: false,
      midpoint: new E()
    }), a = c.useRef(null), i = c.useRef({
      pinching: false,
      midpoint: new E(),
      reach: new E()
    }), l = c.useRef(null), u = c.useRef(null), p = c.useRef("");
    return c.useEffect(() => () => {
      var _a2;
      (_a2 = u.current) == null ? void 0 : _a2.stop(), u.current = null;
    }, []), Qe((h, d, g) => {
      if (!e) return;
      const f = g;
      if (!f) return;
      const y = t.xr.getSession(), x = t.xr.getReferenceSpace();
      if (!y || !x) return;
      for (const C of y.inputSources) {
        if (!C.hand) continue;
        const z = C.handedness === "left" ? n : s, A = i.current;
        if (Xa(f, C.hand, x, z.current.pinching, A) && (z.current.pinching = A.pinching, z.current.midpoint.copy(A.midpoint), A.pinching && a.current == null)) {
          const F = qa(o, A.midpoint, A.reach);
          F && (a.current = {
            kind: "fillet",
            partId: F
          });
        }
      }
      const P = n.current, b = s.current, m = P.pinching && b.pinching;
      if ((P.pinching && !b.pinching || !P.pinching && b.pinching) && a.current == null && Oa()) {
        const C = performance.now(), z = l.current;
        if (z == null) l.current = {
          startedAt: C
        };
        else if (u.current == null && C - z.startedAt >= Ka) {
          p.current = "";
          const A = Ba({
            lang: "en-US",
            onTranscript: (F, W) => {
              W && (p.current = F);
            },
            onEnd: () => {
              const F = p.current.trim();
              if (u.current = null, p.current = "", !F) return;
              const W = Array.from($.getState().selectedPartIds), D = oe.getState().parts, L = W.map((_) => {
                const X = D.find((se) => se.id === _);
                return X ? {
                  partId: X.id,
                  partName: X.name ?? X.id,
                  geometryType: "part"
                } : null;
              }).filter((_) => _ != null);
              xs.getState().sendMessage(F, L, []);
            },
            onError: () => {
              u.current = null;
            }
          });
          A && (u.current = A);
        }
      } else if (l.current && (l.current = null), u.current) {
        const C = u.current;
        u.current = null, C.stop();
      }
      if (m && a.current == null) {
        mt.copy(P.midpoint), ht.copy(b.midpoint);
        const C = mt.distanceTo(ht);
        bt.copy(mt).add(ht).multiplyScalar(0.5);
        const z = Rt.getState().view, A = new E().copy(bt).sub(new E(...z.position)).divideScalar(z.scale);
        a.current = {
          kind: "scale",
          initialAnchor: bt.clone(),
          initialDistance: C,
          initialView: z,
          sceneAnchor: A
        };
      }
      const S = a.current;
      if (S && S.kind === "scale" && m) {
        mt.copy(P.midpoint), ht.copy(b.midpoint);
        const C = mt.distanceTo(ht);
        bt.copy(mt).add(ht).multiplyScalar(0.5);
        const z = S.initialDistance > 1e-6 ? C / S.initialDistance : 1;
        let A = S.initialView.scale * z;
        A < co && (A = co), A > lo && (A = lo), Vt.copy(S.sceneAnchor).multiplyScalar(A).multiplyScalar(-1).add(bt), Rt.getState().setView({
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
          const C = P.midpoint.distanceTo(b.midpoint);
          if (a.current = null, C < Ga || C > Ha) return;
          const z = Rt.getState().view, A = z.scale > 1e-9 ? 1e-3 / z.scale : 1, F = C * Ya * A;
          oe.getState().addFillet(S.partId, F);
          return;
        }
        if (S.kind === "scale") {
          a.current = null;
          return;
        }
      }
    }), null;
  }
  const Ja = 5e3, jt = Eo((e, t) => ({
    peers: /* @__PURE__ */ new Map(),
    ingest: (o) => e((n) => {
      const s = new Map(n.peers);
      return s.set(o.userId, o), {
        peers: s
      };
    }),
    drop: (o) => e((n) => {
      if (!n.peers.has(o)) return n;
      const s = new Map(n.peers);
      return s.delete(o), {
        peers: s
      };
    }),
    pruneStale: () => {
      const o = Date.now(), n = t().peers;
      let s = false;
      const a = new Map(n);
      for (const [i, l] of n) o - l.ts > Ja && (a.delete(i), s = true);
      s && e({
        peers: a
      });
    },
    clear: () => e({
      peers: /* @__PURE__ */ new Map()
    })
  })), Qa = 100, ec = 2e3, mo = new E(), St = new st(), $t = new E();
  function ho(e, t, o) {
    t.copy(e).sub(new E(o.position[0], o.position[1], o.position[2])).divideScalar(o.scale);
  }
  function tc() {
    var _a2, _b;
    const e = _t(), { camera: t, gl: o } = Pe(), n = gs((u) => u.cloudId), a = (_b = (_a2 = ys((u) => u.user)) == null ? void 0 : _a2.user_metadata) == null ? void 0 : _b.name, i = c.useRef(null), l = c.useRef(0);
    return c.useEffect(() => {
      if (!e || !n) return;
      const u = jt.getState().ingest, p = jt.getState().drop, h = Js(n, u, p);
      return i.current = h, () => {
        h == null ? void 0 : h.leave(), i.current = null, jt.getState().clear();
      };
    }, [
      e,
      n
    ]), c.useEffect(() => {
      if (!e) return;
      const u = window.setInterval(() => jt.getState().pruneStale(), ec);
      return () => window.clearInterval(u);
    }, [
      e
    ]), Qe((u, p, h) => {
      var _a3;
      if (!e || !i.current) return;
      const d = performance.now();
      if (d - l.current < Qa) return;
      l.current = d;
      const g = Rt.getState().view;
      t.getWorldPosition(mo), t.getWorldQuaternion(St), ho(mo, $t, g);
      let f, y;
      const x = h, P = o.xr.getSession(), b = o.xr.getReferenceSpace();
      if (x && P && b) for (const m of P.inputSources) {
        if (!m.hand) continue;
        const w = m.hand.get("wrist");
        if (!w) continue;
        const S = (_a3 = x.getJointPose) == null ? void 0 : _a3.call(x, w, b);
        if (!S) continue;
        const j = new E(S.transform.position.x, S.transform.position.y, S.transform.position.z), C = new E();
        ho(j, C, g);
        const z = [
          C.x,
          C.y,
          C.z
        ];
        m.handedness === "left" ? f = z : m.handedness === "right" && (y = z);
      }
      i.current.broadcast({
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
          rightHand: y
        }
      });
    }), r.jsx(nc, {});
  }
  function nc() {
    const e = jt((o) => o.peers), t = Array.from(e.values());
    return t.length === 0 ? null : r.jsx("group", {
      children: t.map((o) => r.jsx(oc, {
        update: o
      }, o.userId))
    });
  }
  const xo = new st(), Wt = new Zt();
  function oc({ update: e }) {
    const t = e.color ?? "#c084fc", o = e.pose.head;
    return xo.set(e.pose.headRot[0], e.pose.headRot[1], e.pose.headRot[2], e.pose.headRot[3]), Wt.setFromQuaternion(xo), r.jsxs("group", {
      children: [
        r.jsxs("mesh", {
          position: o,
          rotation: [
            Wt.x,
            Wt.y,
            Wt.z
          ],
          children: [
            r.jsx("boxGeometry", {
              args: [
                140,
                100,
                100
              ]
            }),
            r.jsx("meshStandardMaterial", {
              color: t,
              emissive: t,
              emissiveIntensity: 0.3
            })
          ]
        }),
        e.pose.leftHand && r.jsxs("mesh", {
          position: e.pose.leftHand,
          children: [
            r.jsx("sphereGeometry", {
              args: [
                40,
                12,
                12
              ]
            }),
            r.jsx("meshStandardMaterial", {
              color: t,
              emissive: t,
              emissiveIntensity: 0.25
            })
          ]
        }),
        e.pose.rightHand && r.jsxs("mesh", {
          position: e.pose.rightHand,
          children: [
            r.jsx("sphereGeometry", {
              args: [
                40,
                12,
                12
              ]
            }),
            r.jsx("meshStandardMaterial", {
              color: t,
              emissive: t,
              emissiveIntensity: 0.25
            })
          ]
        })
      ]
    });
  }
  const sc = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, rc = new E(), ic = new E();
  function mn() {
    const e = $.getState();
    e.followMode === "lock" && (e.setFollowMode("free"), e.setFollowingParticipant(null));
  }
  const ac = {
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
  function cc(e) {
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
  function lc(e, t) {
    const o = cc(t);
    return e ? {
      environment: e.environment ?? o.environment,
      lights: e.lights ?? o.lights,
      background: e.background ?? o.background,
      postProcessing: e.postProcessing ?? o.postProcessing
    } : o;
  }
  function uc(e, t = 100) {
    return [
      -e.x * t,
      -e.y * t,
      -e.z * t
    ];
  }
  function go(e) {
    const t = e;
    return t.id ?? t.instanceId ?? t.partDefId ?? "";
  }
  const yo = new At(), xt = new E(), Gt = new E(), vo = new E(), wo = new E();
  function Mt(e, t, o) {
    xt.subVectors(t, e).normalize();
    const n = new E(0, 1, 0);
    return Math.abs(xt.dot(n)) > 0.999 ? Gt.crossVectors(new E(0, 0, 1), xt).normalize() : Gt.crossVectors(xt, n).normalize(), vo.crossVectors(Gt, xt), wo.copy(xt).negate(), yo.makeBasis(Gt, vo, wo), o.setFromRotationMatrix(yo), o;
  }
  function dc() {
    const e = ot((n) => n.showBoundaryEdges), t = ot((n) => n.toggleBoundaryEdges), o = De((n) => n.scene);
    return c.useEffect(() => {
      const n = (s) => {
        s.ctrlKey && s.shiftKey && (s.key === "B" || s.key === "b") && (s.preventDefault(), t());
      };
      return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
    }, [
      t
    ]), !e || !o ? null : r.jsx(r.Fragment, {
      children: o.parts.map((n, s) => n.mesh.positions.length ? r.jsx(Cr, {
        positions: n.mesh.positions,
        indices: n.mesh.indices
      }, `boundary-${s}`) : null)
    });
  }
  function fc() {
    const e = ot((o) => o.inspectTriangles), t = ot((o) => o.toggleInspectTriangles);
    return c.useEffect(() => {
      const o = (n) => {
        n.ctrlKey && n.shiftKey && (n.key === "T" || n.key === "t") && (n.preventDefault(), t());
      };
      return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
    }, [
      t
    ]), e ? r.jsx(mr, {}) : null;
  }
  function pc({ direction: e, color: t, intensity: o, bounds: n }) {
    const s = c.useRef(null), { center: a, radius: i } = n, l = Math.max(i, 10);
    return c.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const p = new E(e.x, e.y, e.z).normalize();
      u.position.set(a[0] - p.x * l * 2.5, a[1] - p.y * l * 2.5, a[2] - p.z * l * 2.5), u.target.position.set(a[0], a[1], a[2]), u.target.updateMatrixWorld();
      const h = u.shadow.camera;
      h.left = -l * 1.3, h.right = l * 1.3, h.top = l * 1.3, h.bottom = -l * 1.3, h.near = 0.1, h.far = l * 6, h.updateProjectionMatrix(), u.shadow.needsUpdate = true;
    }, [
      e.x,
      e.y,
      e.z,
      a,
      l
    ]), r.jsx("directionalLight", {
      ref: s,
      intensity: o,
      color: t,
      castShadow: true,
      "shadow-mapSize-width": 2048,
      "shadow-mapSize-height": 2048,
      "shadow-bias": -1e-4,
      "shadow-normalBias": 0.02
    });
  }
  function mc({ mode: e = "3d", pcbEditFocus: t = false }) {
    var _a2, _b;
    Hi(), Xi(), Ui(), qi(), sa();
    const o = e === "pcb", [n, s] = c.useState(false), a = De((v) => v.engineReady), i = De((v) => v.scene), l = De((v) => v.previewMesh), u = oe((v) => v.parts), p = oe((v) => v.document.instances), h = oe((v) => v.document.partDefs), d = oe((v) => v.document.roots), g = oe((v) => v.document.scene), f = oe((v) => v.document.molecule), y = Ct((v) => v.molecule), x = Ct((v) => v.representation), P = y ?? f ?? null, b = $((v) => v.selectedPartIds), m = $((v) => v.selection), w = $((v) => v.isDraggingGizmo), S = $((v) => v.setOrbiting), j = $((v) => v.renderMode), C = $((v) => v.raytraceAvailable), z = ke((v) => v.active), A = Tt((v) => v.activeBoardNodeId), F = c.useMemo(() => {
      if (!t || A == null) return null;
      const v = xn(u, A);
      return v ? Ro(oe.getState().document, v) : null;
    }, [
      t,
      A,
      u
    ]), W = c.useMemo(() => {
      var _a3;
      return !t || A == null ? null : ((_a3 = xn(u, A)) == null ? void 0 : _a3.id) ?? null;
    }, [
      t,
      A,
      u
    ]), D = _t(), L = c.useRef(null), { camera: _, invalidate: X } = Pe(), { isDark: se } = at(), re = Yt(), xe = qs(re), ge = Ks(re), { zoomBehavior: B, orbitMomentum: ie } = re, je = c.useRef(new yn()), ee = c.useRef(new Ln()), Ee = c.useRef(X);
    Ee.current = X;
    const de = c.useRef(new Bs()), be = c.useRef(new E()), Fe = c.useRef({
      theta: 0,
      phi: 0
    }), Ge = c.useRef(false), Oe = c.useRef(new E()), Se = c.useRef(new E()), ze = c.useRef(null), me = c.useRef(false), Ce = c.useRef(null), Le = c.useRef(new st()), V = c.useCallback(() => {
      me.current && (me.current = false, ze.current = null, Ce.current = null, L.current && (L.current.enabled = true), s(false));
    }, []), Ne = c.useMemo(() => {
      const v = /* @__PURE__ */ new Map();
      if (!p || !h) return v;
      const I = /* @__PURE__ */ new Map();
      d.forEach((N, Y) => {
        I.set(N.root, Y);
      });
      for (const N of p) {
        const Y = h[N.partDefId];
        if (!Y) continue;
        const K = I.get(Y.root);
        K !== void 0 && v.set(K, N.id);
      }
      return v;
    }, [
      p,
      h,
      d
    ]), Xe = c.useMemo(() => d.map((v, I) => v.visible !== false ? I : -1).filter((v) => v >= 0), [
      d
    ]), ae = c.useCallback((v, I) => {
      if (b.has(v)) return true;
      const N = Ne.get(I);
      return !!(N && b.has(N));
    }, [
      b,
      Ne
    ]), Q = c.useMemo(() => {
      const v = {
        center: [
          0,
          30,
          0
        ],
        radius: 120
      };
      if (!i) return v;
      let I = 1 / 0, N = 1 / 0, Y = 1 / 0, K = -1 / 0, ce = -1 / 0, fe = -1 / 0;
      const H = (G, Z, te) => {
        const J = G, M = te, k = -Z;
        J < I && (I = J), M < N && (N = M), k < Y && (Y = k), J > K && (K = J), M > ce && (ce = M), k > fe && (fe = k);
      }, Me = (G, Z) => {
        for (let J = 0; J + 2 < G.length; J += 48) {
          const M = G[J], k = G[J + 1], T = G[J + 2];
          Z ? H(M * Z.scale.x + Z.translation.x, k * Z.scale.y + Z.translation.y, T * Z.scale.z + Z.translation.z) : H(M, k, T);
        }
      };
      for (const G of i.parts ?? []) Me(G.mesh.positions);
      for (const G of i.instances ?? []) Me(G.mesh.positions, G.transform ?? null);
      if (!Number.isFinite(I)) return v;
      const Re = [
        (I + K) / 2,
        (N + ce) / 2,
        (Y + fe) / 2
      ], le = Math.hypot(K - I, ce - N, fe - Y) / 2 || 60;
      return {
        center: Re,
        radius: le
      };
    }, [
      i
    ]), U = c.useMemo(() => {
      if (m.length === 0 || !i) return null;
      const v = m.some((le) => le.kind === "face" || le.kind === "edge" || le.kind === "vertex"), I = new rt(), N = new E();
      let Y = false;
      const K = (le) => {
        var _a3;
        const G = u.findIndex((te) => te.id === le);
        if (G < 0) return null;
        const Z = Xe.indexOf(G);
        return Z < 0 ? null : ((_a3 = i.parts[Z]) == null ? void 0 : _a3.mesh) ?? null;
      };
      for (const le of m) switch (le.kind) {
        case "part": {
          if (i.instances && i.instances.length > 0) for (const G of i.instances) {
            if (go(G) !== le.id) continue;
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
            for (let M = 0; M < te.length; M += 3) N.set(te[M] * J.scale.x + J.translation.x, te[M + 1] * J.scale.y + J.translation.y, te[M + 2] * J.scale.z + J.translation.z), I.expandByPoint(N), Y = true;
          }
          Xe.forEach((G, Z) => {
            const te = u[G];
            if (!te || !ae(te.id, G) || te.id !== le.id) return;
            const J = i.parts[Z];
            if (!J) return;
            const M = J.mesh.positions;
            for (let k = 0; k < M.length; k += 3) N.set(M[k], M[k + 1], M[k + 2]), I.expandByPoint(N), Y = true;
          });
          break;
        }
        case "face": {
          const G = K(le.partId);
          if (!G) break;
          const Z = Ao(G, le.faceIndex);
          for (const te of Z) for (let J = 0; J < 3; J++) {
            const M = G.indices[te * 3 + J];
            N.set(G.positions[M * 3], G.positions[M * 3 + 1], G.positions[M * 3 + 2]), I.expandByPoint(N), Y = true;
          }
          break;
        }
        case "edge": {
          const G = K(le.partId);
          if (!G) break;
          const { a: Z, b: te } = Do(G, le.edgeId);
          I.expandByPoint(Z), I.expandByPoint(te), Y = true;
          break;
        }
        case "vertex": {
          const G = K(le.partId);
          if (!G) break;
          const Z = To(G, le.vertexId);
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
        mode: v ? "pan-only" : "fit"
      };
    }, [
      m,
      i,
      u,
      ae,
      Xe
    ]);
    c.useEffect(() => {
      if (U && !w) {
        if (Se.current.copy(U.center), U.mode === "fit") if (_ instanceof Qt) {
          const I = _.fov * Math.PI / 180, N = 2 * Math.atan(Math.tan(I / 2) * _.aspect), Y = Math.min(I, N), K = U.radius / Math.sin(Y / 2) * 1.2;
          ze.current = Math.max(_.near * 2, K);
        } else ze.current = U.radius * 3 * 1.2;
        else ze.current = null;
        me.current = true, s(true);
      }
    }, [
      U,
      w,
      _
    ]), Qe(() => {
      if (!me.current || !L.current) return;
      const v = L.current.target, I = Se.current, N = ze.current, Y = Ce.current, K = 0.1;
      if (v.lerp(I, K), Y !== null) _.position.lerp(Y, K), _.quaternion.slerp(Le.current, K), v.copy(I);
      else if (N !== null) {
        const Me = be.current.subVectors(_.position, v), Re = Me.length(), le = Re + (N - Re) * K;
        Me.normalize().multiplyScalar(le), _.position.copy(v).add(Me);
      }
      const ce = v.distanceTo(I) < 0.01, fe = N === null || Math.abs(be.current.subVectors(_.position, v).length() - N) < 0.1, H = Y === null || _.position.distanceTo(Y) < 0.1;
      ce && fe && H ? (v.copy(I), Y && (_.position.copy(Y), _.quaternion.copy(Le.current)), L.current && (L.current.enabled = true), me.current = false, ze.current = null, Ce.current = null, s(false)) : X();
    }), c.useEffect(() => {
      const v = () => {
        $.getState().followMode !== "free" && X();
      }, I = $.subscribe(v), N = zt.subscribe(v);
      return () => {
        I(), N();
      };
    }, [
      X
    ]), c.useEffect(() => {
      let v = 0, I = 0;
      const N = () => {
        X(), ++I < 36 && (v = requestAnimationFrame(N));
      };
      return N(), () => cancelAnimationFrame(v);
    }, [
      X
    ]), c.useEffect(() => {
      X();
    }, [
      X,
      i,
      l,
      a
    ]), c.useEffect(() => {
      const v = () => X(), I = () => {
        document.visibilityState === "visible" && X();
      }, N = oe.subscribe(v);
      return window.addEventListener("focus", v), window.addEventListener("pageshow", v), document.addEventListener("visibilitychange", I), () => {
        N(), window.removeEventListener("focus", v), window.removeEventListener("pageshow", v), document.removeEventListener("visibilitychange", I);
      };
    }, [
      X
    ]), Qe(() => {
      const { followMode: v, followingParticipantId: I } = $.getState();
      if (v === "free" || !I) return;
      const N = zt.getState().participants.get(I);
      if (!(N == null ? void 0 : N.camera)) return;
      const [Y, K, ce] = dt(N.camera.position), fe = rc.set(Y, K, ce);
      if (v === "lock") {
        me.current && V();
        const [Me, Re, le] = dt(N.camera.target), G = ic.set(Me, Re, le);
        _.position.copy(fe), L.current ? (L.current.target.copy(G), L.current.update()) : _.lookAt(G), X();
        return;
      }
      if (me.current) return;
      L.current ? (L.current.target.lerp(fe, 0.15), L.current.update(), L.current.target.distanceToSquared(fe) > 1e-4 && X()) : _.lookAt(fe);
    }), c.useEffect(() => {
      const v = L.current, I = v == null ? void 0 : v.domElement;
      if (!I) return;
      const N = 1, Y = 0;
      let K = false;
      const ce = () => {
        K || (K = true, requestAnimationFrame(() => {
          K = false, v.update(), Ee.current();
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
        const Z = v.target, te = be.current.subVectors(_.position, Z), J = de.current.setFromVector3(te);
        J.theta += G.theta * N, J.phi += G.phi * N, J.phi = Math.max(0.01, Math.min(Math.PI - 0.01, J.phi)), G.theta *= Y, G.phi *= Y, te.setFromSpherical(J), _.position.copy(Z).add(te), _.lookAt(Z), v.update(), Ee.current(), requestAnimationFrame(fe);
      }, H = (G, Z, te) => {
        const J = 2e-3 * B.sensitivity;
        let M = -(Math.abs(te) > Math.abs(Z) ? te : Z) * J;
        B.invertDirection && (M = -M);
        const k = v.target, T = be.current.subVectors(_.position, k), O = T.length(), q = Math.max(1, O * (1 + M));
        if (B.zoomTowardsCursor) {
          const ne = I.getBoundingClientRect();
          ee.current.x = (G.clientX - ne.left) / ne.width * 2 - 1, ee.current.y = -((G.clientY - ne.top) / ne.height) * 2 + 1, je.current.setFromCamera(ee.current, _);
          const pe = Oe.current;
          je.current.ray.at(O, pe);
          const ye = 1 - q / O;
          k.lerp(pe, ye * 0.5);
        }
        T.normalize().multiplyScalar(q), _.position.copy(k).add(T), ce();
      }, Me = (G, Z) => {
        const te = v.target, k = be.current.subVectors(_.position, te).length() * 2e-3, T = new E(), O = new E();
        _.matrix.extractBasis(T, O, new E());
        const q = T.multiplyScalar(G * k).add(O.multiplyScalar(-Z * k));
        _.position.add(q), te.add(q), ce();
      }, Re = (G, Z, te) => {
        const J = 2 * Math.PI / I.clientHeight;
        if (te && ie) Fe.current.theta += G * J, Fe.current.phi += Z * J, Ge.current || (Ge.current = true, requestAnimationFrame(fe));
        else {
          const M = v.target, k = be.current.subVectors(_.position, M), T = de.current.setFromVector3(k);
          T.theta += G * J, T.phi += Z * J, T.phi = Math.max(0.01, Math.min(Math.PI - 0.01, T.phi)), k.setFromSpherical(T), _.position.copy(M).add(k), _.lookAt(M), ce();
        }
      }, le = (G) => {
        G.preventDefault(), G.stopPropagation(), V(), mn();
        let Z = G.deltaX, te = G.deltaY;
        G.deltaMode === 1 && (Z *= 16, te *= 16), G.deltaMode === 2 && (Z *= 100, te *= 100);
        const J = ia(G), M = aa(xe.scrollBindings, J, ge), k = xe.trackpadOrbitEnabled && ge === "trackpad";
        switch (M) {
          case "zoom":
            H(G, Z, te);
            break;
          case "pan":
            Me(Z, te);
            break;
          case "orbit":
            Re(Z, te, k);
            break;
        }
      };
      return I.addEventListener("wheel", le, {
        passive: false
      }), () => I.removeEventListener("wheel", le);
    }, [
      _,
      xe,
      ge,
      B,
      ie,
      V
    ]), c.useEffect(() => {
      const v = L.current;
      if (!v) return;
      const I = v.domElement, N = () => {
        S(true), s(true), mn();
      }, Y = () => {
        S(false), s(false);
      }, K = () => {
        V(), mn();
      };
      return v.addEventListener("start", N), v.addEventListener("end", Y), I == null ? void 0 : I.addEventListener("pointerdown", K), () => {
        v.removeEventListener("start", N), v.removeEventListener("end", Y), I == null ? void 0 : I.removeEventListener("pointerdown", K);
      };
    }, [
      S,
      V
    ]), c.useEffect(() => {
      var _a3;
      const I = (_a3 = L.current) == null ? void 0 : _a3.domElement;
      if (!I) return;
      const N = () => {
        $.getState().selectedPartIds.size > 0 || window.dispatchEvent(new CustomEvent("vcad:camera-fit"));
      };
      return I.addEventListener("dblclick", N), () => I.removeEventListener("dblclick", N);
    }, []), c.useEffect(() => {
      var _a3;
      const I = (_a3 = L.current) == null ? void 0 : _a3.domElement;
      if (!I) return;
      const N = new Vs(new E(0, 1, 0), 0), Y = new Ln(), K = new yn(), ce = new E();
      let fe = false, H = null;
      const Me = () => {
        fe = false;
        const G = H;
        if (!G) return;
        const Z = I.getBoundingClientRect();
        if (Y.x = (G.clientX - Z.left) / Z.width * 2 - 1, Y.y = -((G.clientY - Z.top) / Z.height) * 2 + 1, K.setFromCamera(Y, _), !K.ray.intersectPlane(N, ce)) {
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
      }, le = () => {
        H = null, $.getState().setCursorWorld(null);
      };
      return I.addEventListener("pointermove", Re), I.addEventListener("pointerleave", le), () => {
        I.removeEventListener("pointermove", Re), I.removeEventListener("pointerleave", le), $.getState().setCursorWorld(null);
      };
    }, [
      _
    ]), c.useEffect(() => {
      const v = (I) => {
        const { normal: N, centroid: Y, vertices: K } = I.detail, ce = new E(N.x, N.z, -N.y).normalize(), fe = new E(Y.x, Y.z, -Y.y);
        let H = 60;
        if (K && K.length >= 3) {
          const Re = new E(0, 1, 0);
          Math.abs(ce.dot(Re)) > 0.95 && Re.set(1, 0, 0);
          const le = new E().crossVectors(Re, ce).normalize(), G = new E().crossVectors(ce, le).normalize();
          let Z = 1 / 0, te = -1 / 0, J = 1 / 0, M = -1 / 0;
          const k = new E();
          for (const ne of K) {
            const pe = new E(ne.x, ne.z, -ne.y);
            k.subVectors(pe, fe);
            const ye = k.dot(le), ve = k.dot(G);
            ye < Z && (Z = ye), ye > te && (te = ye), ve < J && (J = ve), ve > M && (M = ve);
          }
          const T = Math.max(1, te - Z), O = Math.max(1, M - J), q = 1.2;
          if (_ instanceof Qt) {
            const ne = _.fov * Math.PI / 180, pe = 2 * Math.atan(Math.tan(ne / 2) * _.aspect), ye = O / 2 / Math.tan(ne / 2), ve = T / 2 / Math.tan(pe / 2);
            H = Math.max(ye, ve, 10) * q;
          } else H = Math.max(T, O, 10) * q;
        }
        const Me = new E(fe.x + ce.x * H, fe.y + ce.y * H, fe.z + ce.z * H);
        Se.current.copy(fe), Ce.current = Me, ze.current = H, Mt(Me, fe, Le.current), L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:face-selected", v), () => window.removeEventListener("vcad:face-selected", v);
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
      }, N = (Y) => {
        const K = Y.detail, ce = I[K];
        if (!ce) return;
        const fe = new E(ce[0], ce[1], ce[2]), H = new E(0, 0, 0);
        Se.current.copy(H), Ce.current = fe, ze.current = null, Mt(fe, H, Le.current), L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:snap-view", N), () => window.removeEventListener("vcad:snap-view", N);
    }, []);
    const we = Pe((v) => v.size.width / Math.max(1, v.size.height));
    c.useEffect(() => {
      const v = (I) => {
        const { planeNormal: N, planeCenter: Y, width: K, height: ce } = I.detail, [fe, H, Me] = dt([
          Y.x,
          Y.y,
          Y.z
        ]), [Re, le, G] = dt([
          N.x,
          N.y,
          N.z
        ]), Z = Math.hypot(Re, le, G) || 1, te = new E(Re / Z, le / Z, G / Z), J = _, M = (J.isPerspectiveCamera ? J.fov : 50) * (Math.PI / 180), k = J.isPerspectiveCamera ? J.aspect : we, T = 1.2, O = Math.max(K, 1), ne = Math.max(ce, 1) / 2 / Math.tan(M / 2), pe = O / 2 / (k * Math.tan(M / 2)), ye = Math.max(ne, pe, 10) * T;
        Se.current.set(fe, H, Me);
        const ve = new E(fe + te.x * ye, H + te.y * ye, Me + te.z * ye);
        Ce.current = ve, ze.current = ye, Mt(ve, Se.current, Le.current), L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:fit-sketch", v), () => window.removeEventListener("vcad:fit-sketch", v);
    }, [
      _,
      we
    ]);
    const he = Pe((v) => v.gl), He = Pe((v) => v.scene), Ie = Pe((v) => v.size), Ze = Yi();
    c.useEffect(() => {
      Ze || X();
    }, [
      Ze,
      X
    ]), c.useEffect(() => {
      const v = (N) => {
        const Y = Math.max(1, Ie.width), K = Math.max(1, Ie.height), [ce, fe, H] = dt(N.position), [Me, Re, le] = dt(N.target), G = new Qt(50, Y / K, 0.1, 1e4);
        G.up.set(0, 1, 0), G.position.set(ce, fe, H), G.lookAt(Me, Re, le), G.updateMatrixWorld();
        const Z = new $s(Y, K, {
          samples: 4,
          colorSpace: vn
        }), te = he.getRenderTarget(), J = he.toneMapping, M = he.toneMappingExposure, k = he.outputColorSpace;
        he.toneMapping = Io, he.toneMappingExposure = 1, he.outputColorSpace = vn, he.setRenderTarget(Z), he.clear(), he.render(He, G), he.setRenderTarget(te), he.toneMapping = J, he.toneMappingExposure = M, he.outputColorSpace = k;
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
      return I.__vcadCaptureAiCamera = v, () => {
        I.__vcadCaptureAiCamera === v && delete I.__vcadCaptureAiCamera;
      };
    }, [
      he,
      He,
      Ie.width,
      Ie.height
    ]), c.useEffect(() => {
      const v = () => {
        const I = new E(60, -60, 45), N = new E(0, 0, 0);
        Se.current.copy(N), Ce.current = I, ze.current = null, Mt(I, N, Le.current), L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:hero-view", v), () => window.removeEventListener("vcad:hero-view", v);
    }, []), c.useEffect(() => {
      const v = (I) => {
        const { x: N, y: Y, z: K } = I.detail, [ce, fe, H] = dt([
          N,
          Y,
          K
        ]);
        Se.current.set(ce, fe, H), Ce.current = null, ze.current = null, L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:focus-point", v), () => window.removeEventListener("vcad:focus-point", v);
    }, []), c.useEffect(() => {
      const v = () => {
        var _a3;
        const I = De.getState().scene;
        if (!I || I.parts.length === 0) return;
        const N = new rt(), Y = new E();
        let K = false;
        for (const Z of I.parts) {
          const te = Z.mesh.positions;
          for (let J = 0; J < te.length; J += 3) Y.set(te[J] ?? 0, te[J + 1] ?? 0, te[J + 2] ?? 0), N.expandByPoint(Y), K = true;
        }
        if (!K) return;
        const ce = new E();
        N.getCenter(ce);
        const fe = new E();
        N.getSize(fe);
        const H = Math.max(fe.x, fe.y, fe.z, 50) * 2, Me = new E(ce.x, ce.z, -ce.y), Re = ((_a3 = L.current) == null ? void 0 : _a3.target) ?? new E(), le = new E().copy(_.position).sub(Re);
        le.lengthSq() < 1e-6 && le.set(1, 1, 1), le.normalize();
        const G = new E().copy(Me).addScaledVector(le, H);
        Se.current.copy(Me), Ce.current = G, ze.current = H, Mt(G, Me, Le.current), L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:camera-fit", v), () => window.removeEventListener("vcad:camera-fit", v);
    }, [
      _
    ]);
    const Te = c.useMemo(() => lc(g, se), [
      g,
      se
    ]), qe = c.useMemo(() => {
      const v = Te.environment;
      return v.type === "None" ? null : v.type === "Preset" ? ac[v.preset] ?? "studio" : "studio";
    }, [
      Te.environment
    ]), R = c.useMemo(() => {
      const v = Te.environment;
      return v.type === "None" ? 0 : v.intensity ?? 1;
    }, [
      Te.environment
    ]);
    return r.jsxs(r.Fragment, {
      children: [
        Te.lights.map((v) => {
          if (v.enabled === false) return null;
          const I = new We(v.color[0], v.color[1], v.color[2]);
          if (v.kind.type === "Directional") {
            const N = uc(v.kind.direction);
            return v.castShadow ? r.jsx(pc, {
              direction: v.kind.direction ?? {
                x: 0.5,
                y: -0.8,
                z: 0.4
              },
              color: I,
              intensity: v.intensity,
              bounds: Q
            }, v.id) : r.jsx("directionalLight", {
              position: N,
              intensity: v.intensity,
              color: I
            }, v.id);
          }
          return v.kind.type === "Point" ? r.jsx("pointLight", {
            position: [
              v.kind.position.x,
              v.kind.position.y,
              v.kind.position.z
            ],
            intensity: v.intensity,
            color: I,
            distance: v.kind.distance
          }, v.id) : v.kind.type === "Spot" ? r.jsx("spotLight", {
            position: [
              v.kind.position.x,
              v.kind.position.y,
              v.kind.position.z
            ],
            intensity: v.intensity,
            color: I,
            angle: v.kind.angle ? v.kind.angle * Math.PI / 180 : void 0,
            penumbra: v.kind.penumbra ? v.kind.penumbra / 90 : void 0
          }, v.id) : null;
        }),
        !o && !n && r.jsx(qo, {
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
        !o && r.jsx(rr, {}),
        r.jsx(Ko, {
          ref: L,
          makeDefault: true,
          enabled: !D,
          enableDamping: false,
          enableZoom: sc,
          touches: {
            ONE: Nn.ROTATE,
            TWO: Nn.DOLLY_PAN
          },
          mouseButtons: (() => {
            const v = ca(xe, ge);
            return {
              LEFT: void 0,
              MIDDLE: v.MIDDLE,
              RIGHT: v.RIGHT
            };
          })()
        }),
        !o && !D && r.jsx(Zo, {
          alignment: "bottom-right",
          margin: [
            80,
            80
          ],
          children: r.jsx(Jo, {
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
        qe && r.jsx(c.Suspense, {
          fallback: null,
          children: r.jsx(An, {
            preset: qe,
            environmentIntensity: R,
            background: Te.background.type === "Environment"
          })
        }),
        !qe && r.jsxs(An, {
          resolution: 256,
          frames: 1,
          background: false,
          children: [
            r.jsx("color", {
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
            r.jsx(wt, {
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
            r.jsx(wt, {
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
            r.jsx(wt, {
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
            r.jsx(wt, {
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
            r.jsx(wt, {
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
        !o && ((_a2 = g == null ? void 0 : g.background) == null ? void 0 : _a2.type) === "Solid" && r.jsx("color", {
          attach: "background",
          args: [
            g.background.color[0],
            g.background.color[1],
            g.background.color[2]
          ]
        }),
        t && r.jsx("group", {
          rotation: [
            -Math.PI / 2,
            0,
            0
          ],
          children: r.jsx("group", {
            position: [
              (F == null ? void 0 : F.position.x) ?? 0,
              (F == null ? void 0 : F.position.y) ?? 0,
              (F == null ? void 0 : F.position.z) ?? 0
            ],
            rotation: [
              ((F == null ? void 0 : F.rotationDeg.x) ?? 0) * Math.PI / 180,
              ((F == null ? void 0 : F.rotationDeg.y) ?? 0) * Math.PI / 180,
              ((F == null ? void 0 : F.rotationDeg.z) ?? 0) * Math.PI / 180,
              "ZYX"
            ],
            scale: [
              (F == null ? void 0 : F.scale.x) ?? 1,
              (F == null ? void 0 : F.scale.y) ?? 1,
              (F == null ? void 0 : F.scale.z) ?? 1
            ],
            children: r.jsx(Ta, {
              showBoard: true
            })
          })
        }),
        !o && a && r.jsxs(r.Fragment, {
          children: [
            j === "raytrace" && C && r.jsx(Si, {}),
            r.jsx(Na, {
              children: r.jsxs("group", {
                rotation: [
                  -Math.PI / 2,
                  0,
                  0
                ],
                children: [
                  r.jsx(Wr, {}),
                  r.jsx(Fa, {
                    excludeNodeId: A
                  }),
                  r.jsxs(r.Fragment, {
                    children: [
                      (_b = i == null ? void 0 : i.instances) == null ? void 0 : _b.map((v) => {
                        const I = go(v), N = {
                          id: I,
                          name: v.name ?? v.partDefId,
                          kind: "cube",
                          primitiveNodeId: 0,
                          scaleNodeId: 0,
                          rotateNodeId: 0,
                          translateNodeId: 0
                        };
                        return r.jsx(Gn, {
                          partInfo: N,
                          mesh: v.mesh,
                          materialKey: v.material,
                          selected: b.has(I),
                          transform: v.transform,
                          ghosted: t
                        }, v.instanceId);
                      }),
                      (!(i == null ? void 0 : i.instances) || i.instances.length === 0) && u.length === 0 && (i == null ? void 0 : i.parts.map((v, I) => r.jsx(yr, {
                        mesh: v.mesh,
                        materialKey: v.material
                      }, `imported-${I}`))),
                      (!(i == null ? void 0 : i.instances) || i.instances.length === 0) && u.length > 0 && (i == null ? void 0 : i.parts.map((v, I) => {
                        const N = Xe[I] ?? I, Y = u[N];
                        return !Y || Y.id === W ? null : r.jsx(Gn, {
                          partInfo: Y,
                          mesh: v.mesh,
                          materialKey: v.material,
                          selected: ae(Y.id, N),
                          ghosted: t && !Pn(Y)
                        }, Y.id);
                      }))
                    ]
                  }),
                  P && P.positions.length > 0 && r.jsx(Pr, {
                    molecule: P,
                    representation: x
                  }),
                  r.jsx(dc, {}),
                  r.jsx(fc, {}),
                  i == null ? void 0 : i.clashes.map((v, I) => r.jsx(zr, {
                    mesh: v
                  }, `clash-${I}`)),
                  r.jsx(Ir, {}),
                  l && r.jsx(Ar, {
                    mesh: l
                  }),
                  r.jsx(_r, {}),
                  z && r.jsx(Br, {}),
                  r.jsx(ci, {}),
                  r.jsx(fi, {}),
                  r.jsx(Gi, {}),
                  r.jsx(hi, {}),
                  r.jsx(tc, {})
                ]
              })
            }),
            r.jsx(Za, {}),
            r.jsx(Xr, {
              orbitControls: L
            })
          ]
        }),
        a && !D && !Ze && (() => {
          var _a3, _b2, _c, _d, _e2, _f, _g;
          const v = ((_a3 = Te.postProcessing.ambientOcclusion) == null ? void 0 : _a3.enabled) !== false, I = ((_b2 = Te.postProcessing.vignette) == null ? void 0 : _b2.enabled) !== false;
          if (!v && !I) return null;
          const N = (_c = he.getContext) == null ? void 0 : _c.call(he);
          if (!N || typeof N.getContextAttributes != "function" || !N.getContextAttributes()) return null;
          const Y = [];
          return v && Y.push(r.jsx(Gs, {
            aoRadius: ((_d = Te.postProcessing.ambientOcclusion) == null ? void 0 : _d.radius) ?? 0.5,
            intensity: ((_e2 = Te.postProcessing.ambientOcclusion) == null ? void 0 : _e2.intensity) ?? (se ? 2 : 1.5),
            aoSamples: n ? 3 : 6,
            denoiseSamples: n ? 1 : 4
          }, "ao")), I && Y.push(r.jsx(Hs, {
            offset: ((_f = Te.postProcessing.vignette) == null ? void 0 : _f.offset) ?? 0.3,
            darkness: ((_g = Te.postProcessing.vignette) == null ? void 0 : _g.darkness) ?? (se ? 0.5 : 0.3),
            eskil: false
          }, "vignette")), r.jsx(La, {
            children: r.jsx(Ys, {
              children: Y
            })
          });
        })()
      ]
    });
  }
  const bo = {
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
  function So(e, t, o, n, s, a, i) {
    const l = (p) => t + p * n, u = (p) => o - p * n;
    return r.jsxs("g", {
      pointerEvents: "none",
      children: [
        e.rendered.lines.map(([p, h], d) => r.jsx("line", {
          x1: l(p.x),
          y1: u(p.y),
          x2: l(h.x),
          y2: u(h.y),
          stroke: s,
          strokeWidth: a
        }, `${i}-l-${d}`)),
        e.rendered.texts.map((p, h) => {
          const d = String(p.alignment), g = d.includes("Left") ? "start" : d.includes("Right") ? "end" : "middle", f = d.startsWith("Top") ? "hanging" : d.startsWith("Bottom") ? "auto" : "middle";
          return r.jsx("text", {
            x: l(p.position.x),
            y: u(p.position.y),
            fontSize: p.height * n,
            fill: s,
            textAnchor: g,
            dominantBaseline: f,
            fontFamily: "monospace",
            children: p.text
          }, `${i}-t-${h}`);
        })
      ]
    }, i);
  }
  function hc() {
    const { viewDirection: e, showHiddenLines: t, showDimensions: o, zoom: n, pan: s, adjustZoom: a, adjustPan: i, resetView: l, detailViews: u, addDetailView: p } = gn(), h = De((M) => M.scene), d = De((M) => M.engine), g = oe((M) => M.parts), f = oe((M) => M.document.drawing), y = oe((M) => M.setDrawingSettings), x = $((M) => M.selectedPartIds), P = $((M) => M.select), b = $((M) => M.clearSelection), { isDark: m } = at(), w = c.useRef(null), [S, j] = c.useState(false), [C, z] = c.useState({
      x: 0,
      y: 0
    }), A = c.useRef({
      x: 0,
      y: 0
    }), F = c.useRef(false), [W, D] = c.useState(false), [L, _] = c.useState(null), [X, se] = c.useState(null), [re, xe] = c.useState(false), [ge, B] = c.useState([]), [ie, je] = c.useState(null), ee = m ? bo.dark : bo.light, Ee = c.useMemo(() => !(h == null ? void 0 : h.parts) || !d ? [] : h.parts.map((M, k) => {
      const T = g[k];
      if (!T) return null;
      const O = d.projectMesh(M.mesh, e);
      return O ? {
        partId: T.id,
        view: O
      } : null;
    }).filter((M) => M !== null), [
      h,
      d,
      e,
      g
    ]), de = c.useMemo(() => {
      if (Ee.length === 0) return null;
      let M = 1 / 0, k = 1 / 0, T = -1 / 0, O = -1 / 0;
      for (const { view: q } of Ee) M = Math.min(M, q.bounds.min_x), k = Math.min(k, q.bounds.min_y), T = Math.max(T, q.bounds.max_x), O = Math.max(O, q.bounds.max_y);
      return {
        min_x: M,
        min_y: k,
        max_x: T,
        max_y: O
      };
    }, [
      Ee
    ]), be = c.useMemo(() => Ee.length === 0 ? null : {
      edges: Ee.flatMap((k) => k.view.edges),
      bounds: de,
      view_direction: e
    }, [
      Ee,
      de,
      e
    ]), Fe = c.useMemo(() => !be || !d || u.length === 0 ? [] : u.map((M) => {
      try {
        const k = d.createDetailView(be, M.centerX, M.centerY, M.scale, M.width, M.height, M.label);
        return {
          def: M,
          view: k
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
      if (!d || !((_a2 = h == null ? void 0 : h.parts) == null ? void 0 : _a2.length)) return [];
      const M = ((f == null ? void 0 : f.sections) ?? []).filter((T) => T.view === e);
      if (M.length === 0) return [];
      const k = vs();
      return k ? M.map((T) => {
        const O = ws(T.view, T.points);
        if (!O) return null;
        const q = d.offsetSectionMesh(k, O, {
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
      h,
      f,
      e
    ]), Oe = c.useMemo(() => {
      if (!d || !(f == null ? void 0 : f.titleBlock)) return null;
      try {
        return d.renderTitleBlock(bs(f.titleBlock, ""));
      } catch {
        return null;
      }
    }, [
      d,
      f
    ]), Se = c.useMemo(() => {
      if (!d || !(f == null ? void 0 : f.showBom) || g.length === 0) return null;
      try {
        const M = Ss();
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
        const M = d.WasmAnnotationLayer, k = new M(), { min_x: T, min_y: O, max_x: q, max_y: ne } = de;
        k.addHorizontalDimension(T, O, q, O, -10), k.addVerticalDimension(q, O, q, ne, 10);
        const ve = k.renderAll();
        return k.free(), ve;
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
      let k = M.deltaX, T = M.deltaY;
      M.deltaMode === 1 && (k *= 16, T *= 16), M.deltaMode === 2 && (k *= 100, T *= 100);
      const O = 0.15 / n;
      if (A.current.x -= k * O, A.current.y -= T * O, !F.current) {
        F.current = true;
        const q = () => {
          const ne = A.current;
          if (Math.abs(ne.x) < 0.01 && Math.abs(ne.y) < 0.01) {
            F.current = false, ne.x = 0, ne.y = 0;
            return;
          }
          const pe = 0.15;
          i(ne.x * pe, ne.y * pe);
          const ye = 0.92;
          ne.x *= ye, ne.y *= ye, requestAnimationFrame(q);
        };
        requestAnimationFrame(q);
      }
    }, [
      a,
      i,
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
    const Ce = c.useCallback((M) => {
      (M.button === 1 || M.button === 0 && M.altKey) && (j(true), z({
        x: M.clientX,
        y: M.clientY
      }), A.current = {
        x: 0,
        y: 0
      }, F.current = false, M.target.setPointerCapture(M.pointerId), M.preventDefault());
    }, []), Le = c.useCallback((M) => {
      if (!S) return;
      const k = M.clientX - C.x, T = M.clientY - C.y;
      z({
        x: M.clientX,
        y: M.clientY
      });
      const O = w.current;
      if (!O) return;
      const q = O.getBoundingClientRect(), pe = (de ? (de.max_x - de.min_x) * 1.6 : 100) / q.width / n, ye = k * pe, ve = -T * pe;
      i(ye, ve), A.current.x = ye, A.current.y = ve;
    }, [
      S,
      C,
      i,
      n,
      de
    ]), V = c.useCallback((M) => {
      if (S) {
        j(false), M.target.releasePointerCapture(M.pointerId);
        const k = A.current;
        if ((Math.abs(k.x) > 0.1 || Math.abs(k.y) > 0.1) && !F.current) {
          F.current = true;
          const T = () => {
            if (Math.abs(k.x) < 0.01 && Math.abs(k.y) < 0.01) {
              F.current = false, k.x = 0, k.y = 0;
              return;
            }
            const O = 0.15;
            gn.getState().adjustPan(k.x * O, k.y * O);
            const q = 0.92;
            k.x *= q, k.y *= q, requestAnimationFrame(T);
          };
          requestAnimationFrame(T);
        }
      }
    }, [
      S
    ]), Ne = c.useCallback((M, k) => {
      if (k.stopPropagation(), k.shiftKey) if (x.has(M)) {
        const T = new Set(x);
        T.delete(M), $.getState().selectMultiple(Array.from(T));
      } else $.getState().selectMultiple([
        ...Array.from(x),
        M
      ]);
      else P(M);
    }, [
      x,
      P
    ]), Xe = c.useCallback(() => {
      b();
    }, [
      b
    ]), ae = c.useCallback(() => {
      l();
    }, [
      l
    ]), Q = c.useCallback((M, k) => {
      const T = w.current;
      if (!T || !de) return null;
      const O = T.getBoundingClientRect(), q = de.max_x - de.min_x, ne = de.max_y - de.min_y, pe = Math.max(q, ne) * 0.3, ye = (q + 2 * pe) / n, ve = (ne + 2 * pe) / n, Be = de.min_x - pe + (q + 2 * pe - ye) / 2 - s.x, ct = -de.max_y - pe + (ne + 2 * pe - ve) / 2 - s.y, lt = Be + (M - O.left) / O.width * ye, Ve = ct + (k - O.top) / O.height * ve;
      return {
        x: lt,
        y: -Ve
      };
    }, [
      de,
      n,
      s
    ]), U = c.useCallback(() => {
      D(true), _(null), se(null);
    }, []), we = c.useCallback((M) => {
      if (!W) return;
      const k = Q(M.clientX, M.clientY);
      k && (_(k), se(k));
    }, [
      W,
      Q
    ]), he = c.useCallback((M) => {
      if (!W || !L) return;
      const k = Q(M.clientX, M.clientY);
      k && se(k);
    }, [
      W,
      L,
      Q
    ]), He = c.useCallback(() => {
      if (!W || !L || !X) return;
      const M = Math.min(L.x, X.x), k = Math.max(L.x, X.x), T = Math.min(L.y, X.y), O = Math.max(L.y, X.y), q = k - M, ne = O - T;
      if (q > 0.5 && ne > 0.5) {
        const pe = (M + k) / 2, ye = (T + O) / 2, ve = u.length, Be = String.fromCharCode(65 + ve % 26);
        p({
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
      L,
      X,
      u.length,
      p
    ]);
    c.useEffect(() => {
      const M = (k) => {
        k.key === "Escape" && W && (D(false), _(null), se(null));
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
        xe(true), B([]), je(null);
      };
      return window.addEventListener("vcad:start-section-view", M), () => window.removeEventListener("vcad:start-section-view", M);
    }, []);
    const Ie = c.useCallback(() => {
      if (ge.length >= 2) {
        const M = (f == null ? void 0 : f.sections) ?? [], k = String.fromCharCode(65 + M.length % 26);
        y({
          sections: [
            ...M,
            {
              id: `section-${k}-${Date.now()}`,
              view: e,
              label: k,
              points: ge
            }
          ]
        });
      }
      xe(false), B([]), je(null);
    }, [
      ge,
      f,
      y,
      e
    ]), Ze = c.useCallback((M) => {
      const k = Q(M.clientX, M.clientY);
      k && B((T) => [
        ...T,
        [
          k.x,
          k.y
        ]
      ]);
    }, [
      Q
    ]), Te = c.useCallback((M) => {
      const k = Q(M.clientX, M.clientY);
      k && je(k);
    }, [
      Q
    ]);
    if (c.useEffect(() => {
      if (!re) return;
      const M = (k) => {
        k.key === "Escape" ? (xe(false), B([]), je(null)) : k.key === "Enter" && Ie();
      };
      return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
    }, [
      re,
      Ie
    ]), !de || Ee.length === 0) return r.jsx("div", {
      className: "flex h-full w-full items-center justify-center",
      style: {
        backgroundColor: ee.background,
        color: ee.label
      },
      children: "No geometry to display"
    });
    const qe = de.max_x - de.min_x, R = de.max_y - de.min_y, v = Math.max(qe, R) * 0.3, I = (qe + 2 * v) / n, N = (R + 2 * v) / n, Y = de.min_x - v + (qe + 2 * v - I) / 2 - s.x, K = -de.max_y - v + (R + 2 * v - N) / 2 - s.y, ce = `${Y} ${K} ${I} ${N}`, H = Math.max(qe, R) * 5e-3 / Math.sqrt(n), Me = H * 0.6, Re = H * 0.4, le = I * 0.015, G = Oe ? I * 0.3 / Oe.width : 0, Z = Oe ? Oe.height * G : 0, te = Oe ? Z + le : 0, J = Se ? I * 0.3 / Se.width : 0;
    return r.jsxs("svg", {
      ref: w,
      className: "h-full w-full select-none",
      viewBox: ce,
      preserveAspectRatio: "xMidYMid meet",
      style: {
        backgroundColor: ee.background,
        cursor: W || re ? "crosshair" : S ? "grabbing" : "default"
      },
      onPointerDown: W || re ? void 0 : Ce,
      onPointerMove: W || re ? void 0 : Le,
      onPointerUp: W || re ? void 0 : V,
      onPointerLeave: W || re ? void 0 : V,
      onMouseDown: W ? we : void 0,
      onMouseMove: W ? he : re ? Te : void 0,
      onMouseUp: W ? He : void 0,
      onClick: W ? void 0 : re ? Ze : Xe,
      onDoubleClick: re ? Ie : ae,
      children: [
        m && r.jsx("defs", {
          children: r.jsx("pattern", {
            id: "grid",
            width: H * 20,
            height: H * 20,
            patternUnits: "userSpaceOnUse",
            children: r.jsx("path", {
              d: `M ${H * 20} 0 L 0 0 0 ${H * 20}`,
              fill: "none",
              stroke: "#1a1a1a",
              strokeWidth: H * 0.2
            })
          })
        }),
        m && r.jsx("rect", {
          x: Y,
          y: K,
          width: I,
          height: N,
          fill: "url(#grid)"
        }),
        Ee.map(({ partId: M, view: k }) => {
          const T = x.has(M);
          return r.jsxs("g", {
            onClick: (O) => Ne(M, O),
            style: {
              cursor: "pointer"
            },
            children: [
              T && r.jsx("g", {
                children: k.edges.filter((O) => O.visibility === "Visible").map((O, q) => r.jsx("line", {
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
              k.edges.filter((O) => O.visibility === "Visible").map((O, q) => r.jsx("line", {
                x1: O.start.x,
                y1: -O.start.y,
                x2: O.end.x,
                y2: -O.end.y,
                stroke: T ? ee.selection : ee.edge,
                strokeWidth: H,
                strokeLinecap: "round"
              }, `v-${q}`)),
              t && k.edges.filter((O) => O.visibility === "Hidden").map((O, q) => r.jsx("line", {
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
        ze.map((M, k) => r.jsxs("g", {
          className: "dimension",
          pointerEvents: "none",
          children: [
            M.lines.map(([T, O], q) => r.jsx("line", {
              x1: T.x,
              y1: -T.y,
              x2: O.x,
              y2: -O.y,
              stroke: ee.dimension,
              strokeWidth: Re
            }, `l-${q}`)),
            M.arcs.map((T, O) => {
              const q = T.center.x + T.radius * Math.cos(T.start_angle), ne = -(T.center.y + T.radius * Math.sin(T.start_angle)), pe = T.center.x + T.radius * Math.cos(T.end_angle), ye = -(T.center.y + T.radius * Math.sin(T.end_angle)), ve = Math.abs(T.end_angle - T.start_angle) > Math.PI ? 1 : 0, Be = T.end_angle > T.start_angle ? 0 : 1;
              return r.jsx("path", {
                d: `M ${q} ${ne} A ${T.radius} ${T.radius} 0 ${ve} ${Be} ${pe} ${ye}`,
                fill: "none",
                stroke: ee.dimension,
                strokeWidth: Re
              }, `arc-${O}`);
            }),
            M.texts.map((T, O) => r.jsx("text", {
              x: T.position.x,
              y: -T.position.y,
              fontSize: T.height / Math.sqrt(n),
              fill: ee.dimension,
              textAnchor: "middle",
              dominantBaseline: "middle",
              fontFamily: "monospace",
              fontWeight: m ? "500" : "400",
              transform: `rotate(${-T.rotation * 180 / Math.PI}, ${T.position.x}, ${-T.position.y})`,
              children: T.text
            }, `t-${O}`)),
            M.arrows.map((T, O) => {
              const q = T.direction, ne = T.size / Math.sqrt(n), pe = T.tip.x, ye = -T.tip.y, ve = Math.PI / 6, Be = pe + ne * Math.cos(q + Math.PI - ve), ct = ye - ne * Math.sin(q + Math.PI - ve), lt = pe + ne * Math.cos(q + Math.PI + ve), Ve = ye - ne * Math.sin(q + Math.PI + ve);
              return r.jsx("polygon", {
                points: `${pe},${ye} ${Be},${ct} ${lt},${Ve}`,
                fill: ee.dimension
              }, `a-${O}`);
            })
          ]
        }, `dim-${k}`)),
        u.map((M) => {
          const k = M.width / 2, T = M.height / 2;
          return r.jsxs("g", {
            pointerEvents: "none",
            children: [
              r.jsx("circle", {
                cx: M.centerX,
                cy: -M.centerY,
                r: Math.max(k, T) * 1.2,
                fill: "none",
                stroke: ee.detailRegion,
                strokeWidth: H * 0.8,
                strokeDasharray: `${H * 2},${H}`
              }),
              r.jsx("text", {
                x: M.centerX,
                y: -M.centerY - Math.max(k, T) * 1.2 - H * 3,
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
          const k = M.points;
          if (k.length < 2) return null;
          const T = k[0], O = k[k.length - 1];
          return r.jsxs("g", {
            pointerEvents: "none",
            children: [
              r.jsx("polyline", {
                points: k.map(([q, ne]) => `${q},${-ne}`).join(" "),
                fill: "none",
                stroke: ee.section,
                strokeWidth: H,
                strokeDasharray: `${H * 6},${H * 2},${H * 2},${H * 2}`
              }),
              [
                T,
                O
              ].map(([q, ne], pe) => r.jsx("text", {
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
        re && ge.length > 0 && r.jsxs("g", {
          pointerEvents: "none",
          children: [
            r.jsx("polyline", {
              points: [
                ...ge,
                ...ie ? [
                  [
                    ie.x,
                    ie.y
                  ]
                ] : []
              ].map(([M, k]) => `${M},${-k}`).join(" "),
              fill: "none",
              stroke: ee.section,
              strokeWidth: H,
              strokeDasharray: `${H * 3},${H * 2}`
            }),
            ge.map(([M, k], T) => r.jsx("circle", {
              cx: M,
              cy: -k,
              r: H * 2,
              fill: ee.section
            }, `sp-${T}`))
          ]
        }),
        W && L && X && r.jsx("rect", {
          x: Math.min(L.x, X.x),
          y: -Math.max(L.y, X.y),
          width: Math.abs(X.x - L.x),
          height: Math.abs(X.y - L.y),
          fill: ee.detailRegionFill,
          stroke: ee.detailRegion,
          strokeWidth: H,
          strokeDasharray: `${H * 3},${H * 2}`,
          pointerEvents: "none"
        }),
        r.jsxs("text", {
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
        r.jsxs("text", {
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
        Fe.map(({ def: M, view: k }, T) => {
          const O = Math.min(I, N) * 0.25, q = O * 0.1, ne = Y + I - O - q, pe = K + N - O * (T + 1) - q * (T + 1) - te, ye = k.bounds.max_x - k.bounds.min_x, ve = k.bounds.max_y - k.bounds.min_y, Be = Math.min(O * 0.8 / (ye || 1), O * 0.8 / (ve || 1)), ct = ne + O / 2, lt = pe + O / 2;
          return r.jsxs("g", {
            children: [
              r.jsx("rect", {
                x: ne,
                y: pe,
                width: O,
                height: O,
                fill: ee.background,
                stroke: ee.detailRegion,
                strokeWidth: H
              }),
              r.jsxs("text", {
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
              r.jsxs("g", {
                transform: `translate(${ct}, ${lt}) scale(${Be})`,
                children: [
                  k.edges.filter((Ve) => Ve.visibility === "Visible").map((Ve, vt) => r.jsx("line", {
                    x1: Ve.start.x,
                    y1: -Ve.start.y,
                    x2: Ve.end.x,
                    y2: -Ve.end.y,
                    stroke: ee.edge,
                    strokeWidth: H / Be,
                    strokeLinecap: "round"
                  }, `dv-${M.id}-v-${vt}`)),
                  t && k.edges.filter((Ve) => Ve.visibility === "Hidden").map((Ve, vt) => r.jsx("line", {
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
        Ge.map(({ def: M, view: k }, T) => {
          const O = Math.min(I, N) * 0.28, q = O * 0.1, ne = Y + q, pe = K + N - O * (T + 1) - q * (T + 1), ye = k.bounds.max_x - k.bounds.min_x, ve = k.bounds.max_y - k.bounds.min_y, Be = Math.min(O * 0.8 / (ye || 1), O * 0.8 / (ve || 1)), ct = (k.bounds.min_x + k.bounds.max_x) / 2, lt = (k.bounds.min_y + k.bounds.max_y) / 2, Ve = ne + O / 2, vt = pe + O / 2;
          return r.jsxs("g", {
            pointerEvents: "none",
            children: [
              r.jsx("rect", {
                x: ne,
                y: pe,
                width: O,
                height: O,
                fill: ee.background,
                stroke: ee.section,
                strokeWidth: H
              }),
              r.jsxs("text", {
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
              r.jsxs("g", {
                transform: `translate(${Ve - ct * Be}, ${vt + lt * Be}) scale(${Be})`,
                children: [
                  k.curves.map((ut, Ft) => r.jsx("polyline", {
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
                  k.hatch_lines.map(([ut, Ft], Lt) => r.jsx("line", {
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
        Oe && So(Oe, Y + I - Oe.width * G - le, K + N - le, G, ee.sheet, H * 0.5, "titleblock"),
        Se && So(Se, Y + I - Se.width * J - le, K + N - te - le * 2, J, ee.sheet, H * 0.5, "bom")
      ]
    });
  }
  function xc() {
    const e = $((l) => l.followMode), t = $((l) => l.setFollowMode), o = $((l) => l.setFollowingParticipant), n = zt((l) => l.participants), s = c.useCallback((l) => {
      t(l), o(l === "free" ? null : Ms);
    }, [
      t,
      o
    ]), a = [];
    if (n.forEach((l) => {
      l.id !== jn && a.push(l);
    }), a.length === 0) return null;
    const i = (l, u, p) => {
      const h = e === l;
      return r.jsx("button", {
        type: "button",
        onClick: () => s(l),
        title: p,
        className: Cn("px-2 py-0.5 text-[10px] font-medium rounded-sm transition-colors", h ? "bg-brand text-white" : "text-text-muted hover:text-text hover:bg-hover"),
        children: u
      });
    };
    return r.jsxs("div", {
      className: "pointer-events-auto flex items-center gap-2 rounded-md border border-border/40 bg-surface/90 px-2 py-1 shadow-sm backdrop-blur",
      children: [
        a.map((l) => r.jsxs("div", {
          className: "flex items-center gap-1.5",
          children: [
            r.jsx("span", {
              "aria-hidden": true,
              className: "inline-block h-2 w-2 rounded-full",
              style: {
                background: l.color
              }
            }),
            r.jsx("span", {
              className: "text-[10px] font-semibold text-text",
              children: l.name
            })
          ]
        }, l.id)),
        r.jsx("div", {
          className: "h-3 w-px bg-border/40",
          "aria-hidden": true
        }),
        r.jsxs("div", {
          className: "flex items-center gap-0.5",
          role: "group",
          "aria-label": "AI camera follow mode",
          children: [
            i("free", "Free", "Free: ignore the AI camera"),
            i("follow", "Follow", "Follow: aim your view at the AI's camera frustum"),
            i("lock", "Lock", "Lock: see through the AI's camera in realtime")
          ]
        })
      ]
    });
  }
  function gc() {
    const e = ue((l) => l.active), t = oe((l) => l.document.schematic), o = Tt((l) => l.activeBoardNodeId), n = oe((l) => l.document), s = De((l) => l.scene), a = oe((l) => l.parts), i = o != null ? zn(n, o) : null;
    c.useEffect(() => {
      if (!e || !t) return;
      const l = setTimeout(async () => {
        const u = await Es(t), p = ue.getState();
        p.setNetlist(u);
        const h = new Set(t.components.map((g) => g.ref)), d = new Set(((i == null ? void 0 : i.footprints) ?? []).map((g) => g.ref));
        p.setOrphanFootprints([
          ...d
        ].filter((g) => !h.has(g))), p.setUnplacedComponents([
          ...h
        ].filter((g) => !d.has(g))), o != null && oe.getState().syncSchematicToPcb(o, u, {
          placeUnplaced: false
        });
      }, 200);
      return () => clearTimeout(l);
    }, [
      t,
      i,
      e,
      o
    ]), c.useEffect(() => {
      if (!e || !i) return;
      const l = setTimeout(async () => {
        const u = await ko(i);
        u.status === "ok" && ue.getState().setDrcViolations(u.value);
      }, 300);
      return () => clearTimeout(l);
    }, [
      i,
      e
    ]), c.useEffect(() => {
      if (!e || !t) return;
      const l = setTimeout(async () => {
        const u = await Ps(t);
        u.status === "ok" && ue.getState().setErcViolations(u.value);
      }, 300);
      return () => clearTimeout(l);
    }, [
      t,
      e
    ]), c.useEffect(() => {
      if (!e || !i) {
        ue.getState().setInterferingFootprints([]);
        return;
      }
      const l = setTimeout(async () => {
        const u = await js(i);
        ue.getState().setComponentBodies(u);
        const p = [];
        s == null ? void 0 : s.parts.forEach((g, f) => {
          var _a2;
          const y = a[f];
          if (y && Pn(y)) return;
          const x = Qs((_a2 = g.mesh) == null ? void 0 : _a2.positions);
          x && p.push(x);
        });
        const h = o != null ? xn(a, o) : null;
        let d;
        if (h) {
          const g = Ro(n, h), f = new At().compose(new E(g.position.x, g.position.y, g.position.z), new st().setFromEuler(new Zt(g.rotationDeg.x * Math.PI / 180, g.rotationDeg.y * Math.PI / 180, g.rotationDeg.z * Math.PI / 180, "ZYX")), new E(g.scale.x, g.scale.y, g.scale.z));
          if (!f.equals(new At())) {
            const x = new E();
            d = (P, b, m) => (x.set(P, b, m).applyMatrix4(f), [
              x.x,
              x.y,
              x.z
            ]);
          }
        }
        ue.getState().setInterferingFootprints(er(u, p, 0, d));
      }, 400);
      return () => clearTimeout(l);
    }, [
      i,
      e,
      s,
      a
    ]);
  }
  function yc() {
    const e = ue((i) => i.active), t = oe((i) => i.document), o = Tt((i) => i.activeBoardNodeId), n = o != null ? zn(t, o) : null, s = c.useRef(null), a = c.useRef(null);
    c.useEffect(() => {
      if (!e || !n) return;
      const i = String(o);
      let l = false;
      const u = setTimeout(async () => {
        const p = await ko(n);
        if (l || p.status !== "ok") return;
        const h = p.value, d = tr(h), g = ue.getState();
        if (a.current !== i) {
          a.current = i, s.current = d, g.clearReceipt();
          return;
        }
        const f = s.current;
        if (s.current = d, !f) return;
        const y = g.consumePendingMutation(), x = nr({
          tool: (y == null ? void 0 : y.tool) ?? "edit",
          args: (y == null ? void 0 : y.args) ?? {},
          before: f,
          after: d
        }, g.receiptEntries.length);
        x.verdict !== "no-op" && g.appendReceiptEntry(x);
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
  const vc = 80;
  function wc() {
    const e = ue((l) => l.active), t = ue((l) => l.simulating), o = ue((l) => l.netlist), n = oe((l) => {
      var _a2;
      return (_a2 = l.document.schematic) == null ? void 0 : _a2.components;
    }), s = c.useMemo(() => !t || !n || !o ? "" : JSON.stringify({
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
    ]), a = c.useRef(null), i = c.useRef(null);
    c.useEffect(() => {
      var _a2;
      if (!e || !t || !s) return;
      const l = (_a2 = oe.getState().document.schematic) == null ? void 0 : _a2.components, u = ue.getState().netlist;
      if (!l || !u) return;
      let p = false;
      const h = Cs(l, u), d = ue.getState();
      if (h.spec.devices.length === 0) {
        d.clearSim();
        return;
      }
      return d.setSimMaps(Object.fromEntries(h.netToNode), Object.fromEntries(h.refToDevice)), Rs(JSON.stringify(h.spec)).then((g) => {
        if (p || !g) return;
        a.current = g;
        const f = () => {
          if (!(p || !a.current)) {
            try {
              const y = a.current.step(vc);
              ue.getState().setSimObservation(y.nodeVoltages, y.deviceCurrents, y.rotorAngles);
            } catch (y) {
              console.warn("[circuit-sim] step failed", y);
              return;
            }
            i.current = requestAnimationFrame(f);
          }
        };
        i.current = requestAnimationFrame(f);
      }), () => {
        if (p = true, i.current != null && cancelAnimationFrame(i.current), i.current = null, a.current) {
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
      s
    ]);
  }
  const bc = c.lazy(() => yt(() => import("./SchematicView-CfNI2c9p.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([5,1,2,3,0,4,6,7,8,9,10,11,12,13])).then((e) => ({
    default: e.SchematicView
  }))), Sc = c.lazy(() => yt(() => import("./ElectronicsViewToggle-D34sISGo.js"), __vite__mapDeps([14,2,3,0,1,4])).then((e) => ({
    default: e.ElectronicsViewToggle
  }))), Mc = c.lazy(() => yt(() => import("./LengthTunePanel-0qhdkvBP.js"), __vite__mapDeps([15,2,3,0,1,4])).then((e) => ({
    default: e.LengthTunePanel
  }))), Ec = c.lazy(() => yt(() => import("./ReceiptPanel-TweAUwal.js"), __vite__mapDeps([16,2,3,0,1,4])).then((e) => ({
    default: e.ReceiptPanel
  }))), Pc = c.lazy(() => yt(() => import("./PcbGettingStarted-BXWhGRdL.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([17,1,2,3,0,4,6,7,8,9,10,11,12,13])).then((e) => ({
    default: e.PcbGettingStarted
  }))), jc = "transparent", Cc = "transparent", Ht = 5;
  function Rc({ containerRef: e }) {
    const { camera: t, size: o } = Pe(), n = De((s) => s.scene);
    return c.useEffect(() => {
      const s = e.current;
      if (!s) return;
      const a = s;
      let i = false, l = {
        x: 0,
        y: 0
      }, u = false, p = null;
      function h(f) {
        f.button === 0 && f.pointerType === "mouse" && (u = f.shiftKey, l = {
          x: f.clientX,
          y: f.clientY
        }, i = true, p = document.createElement("div"), p.className = "pointer-events-none absolute z-20 border-2 border-brand bg-brand/10", p.style.left = "0", p.style.top = "0", p.style.width = "0", p.style.height = "0", p.style.display = "none", a.appendChild(p));
      }
      function d(f) {
        if (!i || !p) return;
        const y = a.getBoundingClientRect(), x = Math.min(l.x, f.clientX) - y.left, P = Math.min(l.y, f.clientY) - y.top, b = Math.abs(f.clientX - l.x), m = Math.abs(f.clientY - l.y);
        (b >= Ht || m >= Ht) && (p.style.display = "block", p.style.left = `${x}px`, p.style.top = `${P}px`, p.style.width = `${b}px`, p.style.height = `${m}px`);
      }
      function g(f) {
        if (!i) return;
        i = false, p && (p.remove(), p = null);
        const y = Math.abs(f.clientX - l.x), x = Math.abs(f.clientY - l.y);
        if (y < Ht && x < Ht) return;
        const P = De.getState().scene;
        if (!P) return;
        const b = oe.getState().parts, m = $.getState().selectedPartIds, w = a.getBoundingClientRect(), S = Math.min(l.x, f.clientX) - w.left, j = Math.max(l.x, f.clientX) - w.left, C = Math.min(l.y, f.clientY) - w.top, z = Math.max(l.y, f.clientY) - w.top, A = [];
        if (b.forEach((F, W) => {
          const D = P.parts[W];
          if (!D) return;
          const L = D.mesh;
          if (!L.positions.length) return;
          const _ = new rt(), X = new E();
          for (let ie = 0; ie < L.positions.length; ie += 3) X.set(L.positions[ie], L.positions[ie + 1], L.positions[ie + 2]), _.expandByPoint(X);
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
            const je = (ie.x + 1) / 2 * o.width, ee = (1 - ie.y) / 2 * o.height;
            re = Math.min(re, je), xe = Math.max(xe, je), ge = Math.min(ge, ee), B = Math.max(B, ee);
          }
          xe >= S && re <= j && B >= C && ge <= z && A.push(F.id);
        }), u) {
          const F = /* @__PURE__ */ new Set([
            ...m,
            ...A
          ]);
          $.getState().selectMultiple(Array.from(F));
        } else $.getState().selectMultiple(A);
      }
      return a.addEventListener("pointerdown", h), window.addEventListener("pointermove", d), window.addEventListener("pointerup", g), () => {
        a.removeEventListener("pointerdown", h), window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", g), p && p.remove();
      };
    }, [
      t,
      o,
      e,
      n
    ]), null;
  }
  function kc() {
    const e = c.useRef(null), t = $((S) => S.clearSelection), o = gt((S) => S.selectIssue), n = $((S) => S.hoveredItem), s = $((S) => S.isGizmoHovered), a = $((S) => S.isDraggingGizmo), i = $((S) => S.renderMode), l = $((S) => S.raytraceAvailable), { isDark: u } = at(), p = gn((S) => S.viewMode), h = ue((S) => S.active), d = ue((S) => S.layout), g = Tt((S) => S.activeBoardNodeId) != null, f = _t(), [y, x] = c.useState(0), P = c.useRef(0), b = c.useRef(false), m = c.useCallback(() => {
      P.current >= 3 || (P.current += 1, b.current = false, x((S) => S + 1));
    }, []), w = c.useCallback(() => {
      b.current = true, performance.mark("canvas-ready");
    }, []);
    return c.useEffect(() => (window.addEventListener("vcad:gl-stuck-lost", m), () => window.removeEventListener("vcad:gl-stuck-lost", m)), [
      m
    ]), c.useEffect(() => {
      const S = setTimeout(() => {
        b.current || m();
      }, 2500), j = setTimeout(() => {
        P.current = 0;
      }, 12e3);
      return () => {
        clearTimeout(S), clearTimeout(j);
      };
    }, [
      y,
      m
    ]), gc(), yc(), wc(), c.useEffect(() => {
      const S = e.current;
      if (!S) return;
      const j = (F) => cr(F.clientX, F.clientY), C = (F) => lr(F.clientX, F.clientY), z = () => ur(), A = (F) => {
        F.preventDefault();
      };
      return S.addEventListener("pointerdown", j), window.addEventListener("pointermove", C), window.addEventListener("pointerup", z), window.addEventListener("pointercancel", z), S.addEventListener("contextmenu", A), () => {
        S.removeEventListener("pointerdown", j), window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", z), window.removeEventListener("pointercancel", z), S.removeEventListener("contextmenu", A);
      };
    }, []), c.useEffect(() => {
      const S = e.current;
      S && (S.style.cursor = n && !s && !a ? "pointer" : "");
    }, [
      n,
      s,
      a
    ]), p === "2d" ? r.jsx("div", {
      className: "absolute inset-0 overflow-hidden",
      style: {
        backgroundColor: u ? "#0a0a0a" : "#ffffff"
      },
      children: r.jsx(hc, {})
    }) : r.jsxs("div", {
      ref: e,
      "data-viewport-root": true,
      className: "absolute inset-0",
      style: {
        touchAction: "none",
        userSelect: "none",
        WebkitUserSelect: "none"
      },
      children: [
        r.jsx(Qo, {
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
            const j = $.getState();
            j.isDraggingGizmo || j.isGizmoHovered || S.metaKey || S.shiftKey || (h || t(), o(null));
          },
          onCreated: w,
          shadows: "soft",
          gl: {
            alpha: true,
            antialias: true,
            logarithmicDepthBuffer: true,
            toneMapping: Io,
            toneMappingExposure: 1,
            outputColorSpace: vn,
            preserveDrawingBuffer: true
          },
          style: {
            background: "transparent"
          },
          children: r.jsxs(ks, {
            store: zs,
            children: [
              r.jsx(mc, {
                mode: "3d",
                pcbEditFocus: g
              }),
              !h && r.jsx(Rc, {
                containerRef: e
              })
            ]
          })
        }, y),
        h && r.jsxs(r.Fragment, {
          children: [
            d === "schematic" && r.jsx(c.Suspense, {
              fallback: null,
              children: r.jsx(bc, {})
            }),
            r.jsx(c.Suspense, {
              fallback: null,
              children: r.jsx(Mc, {})
            }),
            r.jsx(c.Suspense, {
              fallback: null,
              children: r.jsx(Ec, {})
            }),
            r.jsx(c.Suspense, {
              fallback: null,
              children: r.jsx(Pc, {})
            }),
            r.jsx(c.Suspense, {
              fallback: null,
              children: r.jsx(Sc, {})
            })
          ]
        }),
        !h && !f && i === "raytrace" && l && r.jsx(ji, {}),
        r.jsx(pr, {}),
        !h && r.jsx("div", {
          className: "pointer-events-none absolute top-3 right-3 z-10 flex items-center gap-2",
          children: r.jsx(xc, {})
        })
      ]
    });
  }
  $c = Object.freeze(Object.defineProperty({
    __proto__: null,
    BG_DARK: jc,
    BG_LIGHT: Cc,
    Viewport: kc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  $c as V,
  __tla,
  at as u
};
