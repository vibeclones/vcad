const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B2PsV3Ii.js","assets/three-drei-C9A0_-Vj.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-BYnp_IFw.css","assets/SchematicView-BXjiDnCY.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-r_zjQeO8.js","assets/index-COhyxsGg.js","assets/camera-settings-store-CtGgLqjZ.js","assets/timeline-sample-CGUCnv8-.js","assets/xr-collab-l_NFo89E.js","assets/pcb-interference-D-jt2V7v.js","assets/adapter-ChvXPDVA.js","assets/ElectronicsViewToggle-G1S7xB4a.js","assets/LengthTunePanel-Brr0IPBf.js","assets/ReceiptPanel-Bm1jF6UZ.js","assets/PcbGettingStarted-B_ZV-yic.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { G as vo, L as _e, c as wo, a as pn, b as Oo, H as dt, _ as xt, T as Bo, d as Vo, P as $o, C as Wo, O as Go, e as Ho, f as Yo, E as kn, g as wt } from "./three-drei-C9A0_-Vj.js";
import { b as c, k as s, d as Re, f as Ue, C as Xo } from "./three-fiber-GW7QWJN8.js";
import { bc as B, b4 as re, c3 as Uo, bb as Ie, ev as kt, ay as Mn, c6 as he, aE as qo, ap as Ko, cH as Zo, eL as Rt, dB as Qo, ah as Jo, aV as es, al as ts, b5 as Ae, b8 as It, e as En, aT as ns, az as os, eM as gt, bl as Cn, aI as Xe, eN as Pn, eO as bo, ba as Ge, eP as In, eQ as ss, dE as Nt, b9 as Qe, cr as rs, eR as is, b3 as _t, ae as Rn, ag as as, eS as Tt, eT as jt, b2 as cs, eU as ls, br as us, a1 as mn, af as So, aH as lt, ez as hn, eV as ds, eW as fs, eX as ps, eY as ms, A as hs, eZ as gs, e_ as Mo, e$ as xs, f0 as ys, f1 as vs, f2 as ws, f3 as bs, f4 as Ss, __tla as __tla_0 } from "./index-B2PsV3Ii.js";
import { j as ut, k as Ne, D as He, l as Ut, h as Oe, aj as Ms, E as Zt, a as E, a5 as ot, F as zt, v as Eo, a1 as Es, af as Ot, b5 as zn, x as Cs, q as Ps, s as Rs, M as At, Q as nt, r as js, b6 as ks, b7 as Is, b8 as zs, b9 as An, R as gn, V as Dn, z as As, P as Jt, K as Ds, H as _n, an as _s, e as xn, A as Co } from "./three-tnxpQXqG.js";
import { p as Tn, f as Po, b as Ts, g as Ro, a as jo } from "./sub-feature-geometry-tgU-o6Qd.js";
import { a as Fs, q as Ls, d as Ns } from "./three-postprocessing-r_zjQeO8.js";
import { h as Os, g as Bs } from "./index-COhyxsGg.js";
import { u as Yt, a as Vs, g as $s } from "./camera-settings-store-CtGgLqjZ.js";
import { s as Ws } from "./timeline-sample-CGUCnv8-.js";
import { j as Gs } from "./xr-collab-l_NFo89E.js";
import { a as Hs, i as Ys } from "./pcb-interference-D-jt2V7v.js";
import { s as Xs, b as Us } from "./adapter-ChvXPDVA.js";
let Rc, st;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const yn = typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function qs(e) {
    return yn == null ? void 0 : yn.addEventListener("change", e), () => yn == null ? void 0 : yn.removeEventListener("change", e);
  }
  function Ks() {
    return (yn == null ? void 0 : yn.matches) ?? true;
  }
  st = function() {
    const e = B((i) => i.theme), t = B((i) => i.toggleTheme), o = c.useSyncExternalStore(qs, Ks, () => true);
    return {
      theme: e,
      toggleTheme: t,
      isDark: e === "system" ? o : e === "dark"
    };
  };
  function Zs() {
    const { isDark: e } = st(), t = B((l) => l.isOrbiting), o = re((l) => l.parts.length > 0), n = t || !o, i = c.useMemo(() => [
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
    ], []), r = c.useMemo(() => [
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
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(vo, {
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
        n && s.jsxs(s.Fragment, {
          children: [
            s.jsx(_e, {
              points: i,
              color: e ? "#e06c75" : "#c94f4f",
              lineWidth: 1.5,
              transparent: true,
              opacity: 0.7,
              depthWrite: false,
              renderOrder: -1
            }),
            s.jsx(_e, {
              points: a,
              color: e ? "#98c379" : "#5a9a4a",
              lineWidth: 1.5,
              transparent: true,
              opacity: 0.7,
              depthWrite: false,
              renderOrder: -1
            }),
            s.jsx(_e, {
              points: r,
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
  const Qs = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, Fn = Qs ? 8 : 4, Js = Fn * Fn, Je = {
    startX: 0,
    startY: 0,
    down: false,
    wasDrag: false
  };
  function er(e, t) {
    Je.startX = e, Je.startY = t, Je.down = true, Je.wasDrag = false;
  }
  function tr(e, t) {
    if (!Je.down || Je.wasDrag) return;
    const o = e - Je.startX, n = t - Je.startY;
    o * o + n * n > Js && (Je.wasDrag = true);
  }
  function nr() {
    Je.down = false;
  }
  function Qt() {
    return Je.wasDrag;
  }
  const tt = wo((e) => ({
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
  })), or = [
    "Unknown",
    "Plane",
    "Cylinder",
    "Sphere",
    "Cone",
    "Bilinear",
    "Torus",
    "BSpline",
    "FanFill"
  ], ko = [
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
  function sr(e, t) {
    const { positions: o, indices: n, faceKinds: i } = e;
    if (t < 0 || t * 3 + 2 >= n.length) return null;
    const a = n[t * 3], r = n[t * 3 + 1], l = n[t * 3 + 2], u = [
      o[a * 3],
      o[a * 3 + 1],
      o[a * 3 + 2]
    ], p = [
      o[r * 3],
      o[r * 3 + 1],
      o[r * 3 + 2]
    ], g = [
      o[l * 3],
      o[l * 3 + 1],
      o[l * 3 + 2]
    ], h = [
      (u[0] + p[0] + g[0]) / 3,
      (u[1] + p[1] + g[1]) / 3,
      (u[2] + p[2] + g[2]) / 3
    ], y = p[0] - u[0], f = p[1] - u[1], d = p[2] - u[2], b = g[0] - u[0], w = g[1] - u[1], S = g[2] - u[2];
    let m = f * S - d * w, v = d * b - y * S, C = y * w - f * b;
    const P = Math.sqrt(m * m + v * v + C * C);
    P > 0 && (m /= P, v /= P, C /= P);
    let k = 0, I = 0, A = 0;
    const N = o.length / 3;
    for (let le = 0; le < N; le++) k += o[le * 3], I += o[le * 3 + 1], A += o[le * 3 + 2];
    N > 0 && (k /= N, I /= N, A /= N);
    const H = h[0] - k, ie = h[1] - I, $ = h[2] - A, O = Math.sqrt(H * H + ie * ie + $ * $) || 1, Z = (m * H + v * ie + C * $) / O, ee = (i == null ? void 0 : i[t]) ?? 0, D = or[ee] ?? `kind(${ee})`;
    return {
      triangleIndex: t,
      faceKind: ee,
      faceKindName: D,
      vertexIds: [
        a,
        r,
        l
      ],
      positions: [
        u,
        p,
        g
      ],
      centroid: h,
      ccwNormal: [
        m,
        v,
        C
      ],
      outwardDot: Z
    };
  }
  function rr() {
    const e = tt((r) => r.currentInspection), t = tt((r) => r.setCurrentInspection);
    if (!tt((r) => r.inspectTriangles) || !e) return null;
    const n = ko[e.faceKind] ?? "#888", { outwardDot: i } = e, a = i > 0.5 ? "outward \u2713" : i < -0.5 ? "INWARD \u2717" : "sideways";
    return s.jsxs("div", {
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
        s.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6
          },
          children: [
            s.jsxs("div", {
              children: [
                s.jsx("span", {
                  style: {
                    display: "inline-block",
                    width: 10,
                    height: 10,
                    background: n,
                    marginRight: 6,
                    verticalAlign: "middle"
                  }
                }),
                s.jsx("strong", {
                  children: e.faceKindName
                }),
                s.jsxs("span", {
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
            s.jsx("button", {
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
        s.jsxs("div", {
          style: {
            color: "#aaa"
          },
          children: [
            "verts: ",
            e.vertexIds.map((r) => `#${r}`).join("  ")
          ]
        }),
        e.positions.map((r, l) => s.jsxs("div", {
          style: {
            color: "#ccc"
          },
          children: [
            " ",
            "(",
            r[0].toFixed(3),
            ", ",
            r[1].toFixed(3),
            ", ",
            r[2].toFixed(3),
            ")"
          ]
        }, l)),
        s.jsxs("div", {
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
        s.jsxs("div", {
          style: {
            color: i < 0 ? "#ff6666" : "#66ff66"
          },
          children: [
            "outward dot: ",
            i.toFixed(3),
            " \u2014 ",
            a
          ]
        })
      ]
    });
  }
  function ir() {
    const e = tt((n) => n.currentInspection), t = c.useMemo(() => {
      if (!e) return null;
      const n = new ut(), i = new Float32Array([
        ...e.positions[0],
        ...e.positions[1],
        ...e.positions[2]
      ]);
      return n.setAttribute("position", new Ne(i, 3)), n.setIndex([
        0,
        1,
        2
      ]), n;
    }, [
      e
    ]);
    if (!e || !t) return null;
    const o = ko[e.faceKind] ?? "#ffffff";
    return s.jsx("mesh", {
      geometry: t,
      renderOrder: 999,
      children: s.jsx("meshBasicMaterial", {
        color: o,
        transparent: true,
        opacity: 0.5,
        depthTest: false,
        side: He
      })
    });
  }
  const Ln = new Oe(1, 0.45, 0.1), Nn = new Oe(0.62, 0.32, 0.1), ar = new Oe(54527), en = Math.PI / 180, Io = 0.01;
  function zo({ color: e, vertexColors: t, emissive: o, emissiveIntensity: n, metalness: i, roughness: a, envMapIntensity: r = 1, side: l = He, transmission: u, ior: p, thickness: g, attenuationDistance: h, attenuationColor: y, clearcoat: f, clearcoatRoughness: d, transparent: b, opacity: w, depthWrite: S }) {
    if (u !== void 0 && u > 0 || f !== void 0 && f > 0) {
      const v = y ? new Oe(y[0], y[1], y[2]) : void 0;
      return s.jsx("meshPhysicalMaterial", {
        color: e,
        vertexColors: t,
        emissive: o,
        emissiveIntensity: n,
        metalness: i,
        roughness: a,
        envMapIntensity: r,
        flatShading: false,
        side: l,
        transmission: u ?? 0,
        ior: p ?? 1.5,
        thickness: g ?? 0.5,
        attenuationDistance: h ?? 1 / 0,
        attenuationColor: v,
        clearcoat: f ?? 0,
        clearcoatRoughness: d ?? 0,
        transparent: b || (u ?? 0) > 0,
        opacity: w ?? 1,
        depthWrite: S ?? true
      });
    }
    return s.jsx("meshStandardMaterial", {
      color: e,
      vertexColors: t,
      emissive: o,
      emissiveIntensity: n,
      metalness: i,
      roughness: a,
      envMapIntensity: r,
      flatShading: false,
      side: l,
      transparent: b,
      opacity: w ?? 1,
      depthWrite: S ?? true
    });
  }
  function cr(e, t) {
    const o = e.indices, n = e.positions, i = o[t * 3], a = o[t * 3 + 1], r = o[t * 3 + 2], l = new E(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]), u = new E(n[a * 3], n[a * 3 + 1], n[a * 3 + 2]), p = new E(n[r * 3], n[r * 3 + 1], n[r * 3 + 2]), g = u.clone().sub(l), h = p.clone().sub(l), y = g.cross(h).normalize(), f = [], d = o.length / 3;
    for (let b = 0; b < d; b++) {
      const w = o[b * 3], S = o[b * 3 + 1], m = o[b * 3 + 2], v = new E(n[w * 3], n[w * 3 + 1], n[w * 3 + 2]), C = new E(n[S * 3], n[S * 3 + 1], n[S * 3 + 2]), P = new E(n[m * 3], n[m * 3 + 1], n[m * 3 + 2]), k = C.clone().sub(v), I = P.clone().sub(v);
      k.cross(I).normalize().dot(y) > 1 - Io && f.push(b);
    }
    return f;
  }
  function lr(e, t) {
    const o = new ut(), n = [];
    for (const i of t) {
      const a = e.indices[i * 3], r = e.indices[i * 3 + 1], l = e.indices[i * 3 + 2];
      n.push(e.positions[a * 3], e.positions[a * 3 + 1], e.positions[a * 3 + 2], e.positions[r * 3], e.positions[r * 3 + 1], e.positions[r * 3 + 2], e.positions[l * 3], e.positions[l * 3 + 1], e.positions[l * 3 + 2]);
    }
    return o.setAttribute("position", new zt(n, 3)), o.computeVertexNormals(), o;
  }
  function On(e, t, o) {
    const n = e.indices[t * 3], i = e.indices[t * 3 + 1], a = e.indices[t * 3 + 2], r = new E(e.positions[n * 3], e.positions[n * 3 + 1], e.positions[n * 3 + 2]), l = new E(e.positions[i * 3], e.positions[i * 3 + 1], e.positions[i * 3 + 2]), u = new E(e.positions[a * 3], e.positions[a * 3 + 1], e.positions[a * 3 + 2]), p = l.clone().sub(r).cross(u.clone().sub(r)).normalize(), g = p.dot(r), h = 0.01, y = /* @__PURE__ */ new Map(), f = e.indices.length / 3;
    for (let C = 0; C < f; C++) {
      const P = e.indices[C * 3], k = e.indices[C * 3 + 1], I = e.indices[C * 3 + 2], A = new E(e.positions[P * 3], e.positions[P * 3 + 1], e.positions[P * 3 + 2]), N = new E(e.positions[k * 3], e.positions[k * 3 + 1], e.positions[k * 3 + 2]), H = new E(e.positions[I * 3], e.positions[I * 3 + 1], e.positions[I * 3 + 2]);
      if (!(N.clone().sub(A).cross(H.clone().sub(A)).normalize().dot(p) < 1 - Io) && !(Math.abs(p.dot(A) - g) > h)) for (const $ of [
        A,
        N,
        H
      ]) {
        const O = `${$.x.toFixed(4)},${$.y.toFixed(4)},${$.z.toFixed(4)}`;
        y.has(O) || y.set(O, {
          x: $.x,
          y: $.y,
          z: $.z
        });
      }
    }
    const d = Array.from(y.values());
    let b = 0, w = 0, S = 0;
    for (const C of d) b += C.x, w += C.y, S += C.z;
    const m = Math.max(d.length, 1), v = {
      x: b / m,
      y: w / m,
      z: S / m
    };
    return {
      partId: o,
      faceIndex: t,
      normal: {
        x: p.x,
        y: p.y,
        z: p.z
      },
      centroid: v,
      vertices: d
    };
  }
  function ur({ mesh: e, materialKey: t }) {
    const o = c.useRef(null), n = c.useRef(null), [i, a] = c.useState(false), r = B((f) => f.showWireframe), l = B((f) => f.isOrbiting), u = Re((f) => f.invalidate), p = re((f) => f.document.materials), g = c.useMemo(() => {
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
    ]), h = c.useMemo(() => g ? new Oe(g.color[0], g.color[1], g.color[2]) : new Oe(0.55, 0.55, 0.55), [
      g
    ]);
    c.useEffect(() => {
      a(false);
      const f = o.current;
      if (!f) return;
      let d = false;
      return (async () => {
        const { getKernelWasmSync: b } = await xt(async () => {
          const { getKernelWasmSync: k } = await import("./index-B2PsV3Ii.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }).then((I) => I.fx);
          return {
            getKernelWasmSync: k
          };
        }, __vite__mapDeps([0,1,2,3,4])), w = b();
        if (d) return;
        const S = new Float32Array(e.positions), m = new Uint32Array(e.indices);
        let v, C, P;
        if (w == null ? void 0 : w.renderBakeMesh) {
          const k = JSON.parse(w.renderBakeMesh(JSON.stringify({
            positions: Array.from(S),
            indices: Array.from(m)
          })));
          v = new Float32Array(k.positions), C = new Uint32Array(k.indices), P = new Float32Array(k.normals);
        } else v = S, C = m, P = new Float32Array(0);
        f.setAttribute("position", new Ne(v, 3)), f.setIndex(new Ne(C, 1)), P.length === v.length ? f.setAttribute("normal", new Ne(P, 3)) : f.computeVertexNormals(), f.computeBoundingSphere(), f.computeBoundingBox(), a(true), u();
      })(), () => {
        d = true, f.dispose();
      };
    }, [
      e,
      u
    ]);
    const y = c.useRef(null);
    return c.useEffect(() => {
      const f = n.current;
      f && (y.current || (y.current = f.raycast.bind(f)), l ? f.raycast = () => {
      } : f.raycast = y.current);
    }, [
      l
    ]), s.jsxs("mesh", {
      ref: n,
      castShadow: true,
      receiveShadow: true,
      children: [
        s.jsx("bufferGeometry", {
          ref: o
        }),
        s.jsx(zo, {
          color: h,
          metalness: (g == null ? void 0 : g.metallic) ?? 0,
          roughness: (g == null ? void 0 : g.roughness) ?? 0.7,
          transmission: g == null ? void 0 : g.transmission,
          ior: g == null ? void 0 : g.ior,
          thickness: g == null ? void 0 : g.thickness,
          attenuationDistance: g == null ? void 0 : g.attenuationDistance,
          attenuationColor: g == null ? void 0 : g.attenuationColor,
          clearcoat: g == null ? void 0 : g.clearcoat,
          clearcoatRoughness: g == null ? void 0 : g.clearcoatRoughness
        }),
        r && i && s.jsx(pn, {
          threshold: 15,
          color: "#666"
        })
      ]
    });
  }
  const Bn = c.memo(function({ partInfo: t, mesh: o, materialKey: n, selected: i, transform: a, selectionId: r, ghosted: l = false }) {
    const u = c.useRef(null), p = c.useRef(null), [g, h] = c.useState(false), y = B((R) => R.select), f = B((R) => R.toggleSelect), d = B((R) => R.selectItem), b = B((R) => R.setHoveredItem), w = B((R) => R.selectionFilter), S = B((R) => R.showWireframe), m = B((R) => R.hoveredPartId), v = B((R) => R.setHoveredPartId), C = Re((R) => R.camera), P = Re((R) => R.size), k = Re((R) => R.invalidate), I = re((R) => R.document.materials), A = re((R) => R.renamePart), N = Uo((R) => {
      var _a2;
      return ((_a2 = R.fieldOverlay) == null ? void 0 : _a2.partId) === t.id ? R.fieldOverlay.colors : null;
    }), H = Ie((R) => R.faceSelectionMode), ie = Ie((R) => R.hoveredFace), $ = Ie((R) => R.setHoveredFace), O = Ie((R) => R.selectFace), Z = B((R) => R.isOrbiting), ee = B((R) => R.isDraggingGizmo), D = B((R) => R.isGizmoHovered), le = B((R) => R.captureMode), fe = i && !le, F = r ?? t.id, ne = B((R) => R.hoveredItem), ge = m === F || ne != null && ne.kind !== "segment" && ne.kind !== "constraint" && (ne.kind === "part" ? ne.id === F : ne.partId === t.id), X = H && (ie == null ? void 0 : ie.partId) === t.id, ye = c.useMemo(() => {
      if (Z || !X || (ie == null ? void 0 : ie.faceIndex) == null) return null;
      const R = cr(o, ie.faceIndex);
      return lr(o, R);
    }, [
      Z,
      X,
      ie == null ? void 0 : ie.faceIndex,
      o
    ]);
    c.useEffect(() => () => {
      ye == null ? void 0 : ye.dispose();
    }, [
      ye
    ]);
    const [te, be] = c.useState(false), [Ve, $e] = c.useState(t.name), Be = c.useRef(null), V = B((R) => R.previewMaterial), Ce = c.useMemo(() => (V == null ? void 0 : V.partId) === t.id ? V.materialKey : n, [
      V,
      t.id,
      n
    ]), ve = c.useMemo(() => {
      const R = (x) => x ? {
        name: x.name,
        color: x.color,
        metallic: x.metallic,
        roughness: x.roughness,
        transmission: x.transmission,
        ior: x.ior,
        thickness: x.thickness,
        attenuationDistance: x.attenuationDistance,
        attenuationColor: x.attenuationColor,
        clearcoat: x.clearcoat,
        clearcoatRoughness: x.clearcoatRoughness
      } : null;
      if ((V == null ? void 0 : V.partId) === t.id) {
        const x = V.materialKey;
        if (I[x]) return I[x];
        const z = R(kt(x));
        if (z) return z;
      }
      return I[n] ? I[n] : R(kt(n));
    }, [
      I,
      n,
      V,
      t.id
    ]), ce = c.useMemo(() => Os(Ce) ? Bs(Ce) : null, [
      Ce
    ]), ae = c.useMemo(() => ce ? new Ut({
      vertexShader: ce.vertexShader,
      fragmentShader: ce.fragmentShader,
      uniforms: ce.uniforms,
      side: He
    }) : null, [
      ce
    ]);
    c.useEffect(() => () => {
      ae == null ? void 0 : ae.dispose();
    }, [
      ae
    ]);
    const q = c.useMemo(() => ve ? new Oe(ve.color[0], ve.color[1], ve.color[2]) : new Oe(0.55, 0.55, 0.55), [
      ve
    ]), Me = !l && !le && (fe || ge && !H), we = c.useMemo(() => {
      var _a2;
      if (!g) return false;
      const R = u.current;
      if (!R) return false;
      const x = new Ms(R, 15), z = ((_a2 = x.attributes.position) == null ? void 0 : _a2.count) ?? 0;
      return x.dispose(), z === 0;
    }, [
      g,
      o
    ]);
    c.useEffect(() => {
      $e(t.name);
    }, [
      t.name,
      i
    ]), c.useEffect(() => {
      var _a2;
      te && ((_a2 = Be.current) == null ? void 0 : _a2.select());
    }, [
      te
    ]), c.useEffect(() => {
      h(false);
      const R = u.current;
      if (!R) return;
      const x = new Float32Array(o.positions), z = new Uint32Array(o.indices);
      if (R.setAttribute("position", new Ne(x, 3)), R.setIndex(new Ne(z, 1)), o.normals && o.normals.length === x.length) {
        const T = new Float32Array(o.normals);
        R.setAttribute("normal", new Ne(T, 3));
      } else console.warn("[SceneMesh] kernel emitted mesh without normals \u2014 rebuild @vcad/kernel-wasm; falling back to computed normals"), R.computeVertexNormals();
      if (N && N.length === x.length) R.setAttribute("color", new Ne(N, 3));
      else if (o.colors && o.colors.length === x.length) {
        const T = new Float32Array(o.colors);
        R.setAttribute("color", new Ne(T, 3));
      } else R.deleteAttribute("color");
      return R.computeBoundingSphere(), R.computeBoundingBox(), h(true), k(), () => {
        R.dispose();
      };
    }, [
      o,
      t.name,
      k,
      N
    ]), c.useEffect(() => {
      const R = p.current;
      if (R) {
        if (a) {
          R.position.set(a.translation.x, a.translation.y, a.translation.z);
          const x = new Zt(a.rotation.x * en, a.rotation.y * en, a.rotation.z * en, "ZYX");
          R.quaternion.setFromEuler(x), R.scale.set(a.scale.x, a.scale.y, a.scale.z);
        } else R.position.set(0, 0, 0), R.quaternion.identity(), R.scale.set(1, 1, 1);
        k();
      }
    }, [
      a,
      k
    ]);
    const ke = c.useMemo(() => {
      if (!o.positions.length) return new E();
      const R = new ot(), x = new E();
      for (let T = 0; T < o.positions.length; T += 3) x.set(o.positions[T], o.positions[T + 1], o.positions[T + 2]), R.expandByPoint(x);
      const z = new E();
      return R.getCenter(z), z.z = R.max.z + 4, z;
    }, [
      o.positions
    ]), Pe = c.useCallback(() => {
      const R = Ve.trim();
      R && R !== t.name && A(t.id, R), be(false);
    }, [
      Ve,
      t.id,
      t.name,
      A
    ]), Te = c.useCallback(() => {
      $e(t.name), be(false);
    }, [
      t.name
    ]), qe = tt((R) => R.inspectTriangles), ze = tt((R) => R.setCurrentInspection), ft = c.useCallback((R) => {
      if (Qt() || ee || D) return;
      if (R.stopPropagation(), qe && R.faceIndex != null) {
        const z = sr(o, R.faceIndex);
        z && (ze(z), console.log("[triangle-inspector]", z));
        return;
      }
      if (H && R.faceIndex != null) {
        const z = On(o, R.faceIndex, t.id);
        O(z);
        return;
      }
      if (R.nativeEvent.shiftKey || R.nativeEvent.metaKey) {
        f(F);
        return;
      }
      if (R.faceIndex != null) {
        const z = Tn({
          triIndex: R.faceIndex,
          hitPoint: R.point,
          mesh: o,
          partId: t.id,
          filter: w,
          camera: C,
          viewport: P
        });
        if (z) {
          d(z);
          return;
        }
      }
      y(F);
    }, [
      F,
      ee,
      D,
      H,
      o,
      t.id,
      O,
      f,
      y,
      d,
      w,
      C,
      P,
      qe,
      ze
    ]), et = c.useCallback((R) => {
      if (!(Z || ee || D)) {
        if (H && R.faceIndex != null) {
          R.stopPropagation();
          const x = On(o, R.faceIndex, t.id);
          $(x);
          return;
        }
        if (R.faceIndex != null) {
          R.stopPropagation();
          const x = Tn({
            triIndex: R.faceIndex,
            hitPoint: R.point,
            mesh: o,
            partId: t.id,
            filter: w,
            camera: C,
            viewport: P
          });
          b(x || {
            kind: "part",
            id: t.id
          });
        }
      }
    }, [
      Z,
      ee,
      D,
      H,
      o,
      t.id,
      $,
      b,
      w,
      C,
      P
    ]), rt = c.useCallback((R) => {
      Z || ee || D || (R.stopPropagation(), H || v(t.id));
    }, [
      Z,
      ee,
      D,
      H,
      t.id,
      v
    ]), We = c.useCallback(() => {
      Z || (H ? $(null) : v(null));
    }, [
      Z,
      H,
      $,
      v
    ]), Ke = c.useRef(null);
    return c.useEffect(() => {
      const R = p.current;
      R && (Ke.current || (Ke.current = R.raycast.bind(R)), Z || l ? R.raycast = () => {
      } : R.raycast = Ke.current);
    }, [
      Z,
      l
    ]), s.jsxs("mesh", {
      ref: p,
      castShadow: true,
      receiveShadow: true,
      onClick: ft,
      onPointerMove: et,
      onPointerOver: rt,
      onPointerOut: We,
      material: ae ?? void 0,
      userData: {
        partId: t.id
      },
      children: [
        s.jsx("bufferGeometry", {
          ref: u
        }),
        !ae && s.jsx(zo, {
          color: o.colors || N ? void 0 : q,
          vertexColors: !!o.colors || !!N,
          metalness: (ve == null ? void 0 : ve.metallic) ?? 0,
          roughness: (ve == null ? void 0 : ve.roughness) ?? 0.7,
          transmission: ve == null ? void 0 : ve.transmission,
          ior: ve == null ? void 0 : ve.ior,
          thickness: ve == null ? void 0 : ve.thickness,
          attenuationDistance: ve == null ? void 0 : ve.attenuationDistance,
          attenuationColor: ve == null ? void 0 : ve.attenuationColor,
          clearcoat: ve == null ? void 0 : ve.clearcoat,
          clearcoatRoughness: ve == null ? void 0 : ve.clearcoatRoughness,
          transparent: l || void 0,
          opacity: l ? 0.16 : void 0,
          depthWrite: l ? false : void 0
        }),
        S && g && s.jsx(pn, {
          threshold: 15,
          color: "#666"
        }),
        Me && g && !we && s.jsx(pn, {
          threshold: 15,
          color: fe ? Ln : Nn,
          lineWidth: fe ? 3 : 2,
          renderOrder: 1
        }),
        Me && g && we && s.jsx(Oo, {
          color: fe ? Ln : Nn,
          thickness: fe ? 3 : 2,
          angle: Math.PI,
          renderOrder: 1
        }),
        ye && s.jsx("mesh", {
          geometry: ye,
          renderOrder: 1,
          children: s.jsx("meshBasicMaterial", {
            color: ar,
            transparent: true,
            opacity: 0.4,
            depthTest: true,
            depthWrite: false,
            polygonOffset: true,
            polygonOffsetFactor: -4,
            polygonOffsetUnits: -4,
            side: He
          })
        }),
        i && !H && s.jsx(dt, {
          position: ke,
          center: true,
          style: {
            pointerEvents: "auto"
          },
          children: s.jsxs("div", {
            className: "flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-text whitespace-nowrap bg-surface/90 backdrop-blur-sm border border-border rounded-md shadow-sm",
            children: [
              te ? s.jsx("input", {
                ref: Be,
                type: "text",
                value: Ve,
                onClick: (R) => R.stopPropagation(),
                onFocus: (R) => R.currentTarget.select(),
                onChange: (R) => $e(R.target.value),
                onBlur: Pe,
                onKeyDown: (R) => {
                  R.key === "Enter" && Pe(), R.key === "Escape" && Te();
                },
                className: "min-w-[80px] bg-transparent text-text outline-none",
                autoFocus: true
              }) : s.jsx("button", {
                type: "button",
                onClick: (R) => {
                  R.stopPropagation(), be(true);
                },
                className: "text-text",
                children: t.name
              }),
              !te && Mn(t) && s.jsx("button", {
                type: "button",
                onClick: (R) => {
                  R.stopPropagation(), he.getState().enter();
                },
                className: "px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors",
                children: "Edit"
              }),
              !te && (qo(t) || Ko(t)) && s.jsx("button", {
                type: "button",
                onClick: (R) => {
                  R.stopPropagation(), Zo.getState().openPanel();
                },
                className: "px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors",
                children: "Edit"
              })
            ]
          })
        })
      ]
    });
  }), dr = {
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
  }, fr = {
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
  function tn(e, t) {
    const o = e.species[e.speciesIdx[t]];
    return (o == null ? void 0 : o.color) ?? dr[(o == null ? void 0 : o.element) ?? "C"] ?? [
      0.85,
      0.4,
      0.85
    ];
  }
  function Vn(e, t, o) {
    const n = e.species[e.speciesIdx[t]], i = (n == null ? void 0 : n.radius) ?? fr[(n == null ? void 0 : n.element) ?? "C"] ?? 0.75;
    return o === "space_filling" ? i * 1.8 : o === "wireframe" ? i * 0.2 : i * 0.42;
  }
  const Ao = `
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
}`, pr = `
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
}`, mr = `
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
${Ao}
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
}`, hr = `
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
}`, gr = `
precision highp float;
uniform float logDepthBufFC;
uniform mat4 projectionMatrix; // three binds this built-in when declared in-stage
in vec3 vColor;
in vec3 vNormalV;
in vec3 vViewPos;
out vec4 fragColor;
${Ao}
void main(){
  vec3 N = normalize(vNormalV);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(-vViewPos);
  vec4 clip = projectionMatrix * vec4(vViewPos, 1.0);
  gl_FragDepth = log2(1.0 + clip.w) * logDepthBufFC * 0.5;
  fragColor = vec4(shadeMolecule(vColor, N, V), 1.0);
}`;
  function xr({ molecule: e, representation: t = "ball_and_stick" }) {
    const o = c.useRef(null), n = c.useRef(null), i = Rt((S) => S.selectAtom), a = e.positions.length, r = e.bonds ?? [], l = t !== "space_filling", u = c.useMemo(() => {
      let S = 1e-3;
      for (const m of e.positions) S = Math.max(S, Math.hypot(m[0], m[1], m[2]));
      return 34 / S;
    }, [
      e
    ]), p = c.useMemo(() => {
      const S = new Eo(2, 2), m = new Es();
      m.index = S.index, m.attributes.position = S.attributes.position, m.attributes.uv = S.attributes.uv;
      const v = new Float32Array(a * 3), C = new Float32Array(a), P = new Float32Array(a * 3), k = new Float32Array(a);
      for (let I = 0; I < a; I++) {
        const A = e.positions[I];
        v[I * 3] = A[0] * u, v[I * 3 + 1] = A[1] * u, v[I * 3 + 2] = A[2] * u, C[I] = Vn(e, I, t) * u;
        const N = tn(e, I);
        P[I * 3] = N[0], P[I * 3 + 1] = N[1], P[I * 3 + 2] = N[2], k[I] = I;
      }
      return m.setAttribute("iCenter", new Ot(v, 3)), m.setAttribute("iRadius", new Ot(C, 1)), m.setAttribute("iColor", new Ot(P, 3)), m.setAttribute("iIndex", new Ot(k, 1)), m.instanceCount = a, S.dispose(), m;
    }, [
      e,
      a,
      t,
      u
    ]), g = c.useMemo(() => new Ut({
      glslVersion: zn,
      uniforms: {
        logDepthBufFC: {
          value: 1
        },
        uSelected: {
          value: -1
        }
      },
      vertexShader: pr,
      fragmentShader: mr
    }), []), h = c.useMemo(() => new Cs(1, 12, 8), []), y = c.useMemo(() => new Ps({
      colorWrite: false,
      depthWrite: false
    }), []), f = c.useMemo(() => new Rs(1, 1, 1, 12, 1), []), d = c.useMemo(() => new Ut({
      glslVersion: zn,
      uniforms: {
        logDepthBufFC: {
          value: 1
        }
      },
      vertexShader: hr,
      fragmentShader: gr
    }), []), b = l ? r.length * 2 : 0;
    c.useEffect(() => () => p.dispose(), [
      p
    ]), c.useEffect(() => () => {
      g.dispose(), h.dispose(), y.dispose(), f.dispose(), d.dispose();
    }, [
      g,
      h,
      y,
      f,
      d
    ]), c.useLayoutEffect(() => {
      const S = o.current;
      if (!S || !l) return;
      const m = (t === "wireframe" ? 0.05 : 0.11) * u, v = new At(), C = new E(), P = new E(), k = new nt(), I = new E(0, 1, 0), A = new E(), N = new E(), H = new E(), ie = new E(), $ = new Oe();
      let O = 0;
      for (const Z of r) {
        const ee = e.positions[Z.a], D = e.positions[Z.b];
        A.set(ee[0] * u, ee[1] * u, ee[2] * u), N.set(D[0] * u, D[1] * u, D[2] * u), ie.addVectors(A, N).multiplyScalar(0.5), H.subVectors(N, A);
        const le = H.length();
        if (le < 1e-6) {
          v.makeScale(0, 0, 0), S.setMatrixAt(O, v), S.setMatrixAt(O + 1, v), O += 2;
          continue;
        }
        H.normalize(), k.setFromUnitVectors(I, H), P.set(m, le / 2, m), C.addVectors(A, ie).multiplyScalar(0.5), v.compose(C, k, P), S.setMatrixAt(O, v);
        const fe = tn(e, Z.a);
        $.setRGB(fe[0], fe[1], fe[2]), S.setColorAt(O, $), C.addVectors(ie, N).multiplyScalar(0.5), v.compose(C, k, P), S.setMatrixAt(O + 1, v);
        const F = tn(e, Z.b);
        $.setRGB(F[0], F[1], F[2]), S.setColorAt(O + 1, $), O += 2;
      }
      S.count = b, S.instanceMatrix.needsUpdate = true, S.instanceColor && (S.instanceColor.needsUpdate = true);
    }, [
      e,
      r,
      l,
      t,
      b,
      u
    ]), c.useLayoutEffect(() => {
      const S = n.current;
      if (!S) return;
      const m = new At(), v = new E(), C = new E(), P = new nt();
      for (let k = 0; k < a; k++) {
        const I = e.positions[k], A = Vn(e, k, t) * u;
        v.set(I[0] * u, I[1] * u, I[2] * u), C.set(A, A, A), m.compose(v, P, C), S.setMatrixAt(k, m);
      }
      S.count = a, S.instanceMatrix.needsUpdate = true;
    }, [
      e,
      a,
      t,
      u
    ]), Ue(({ camera: S }) => {
      const m = 2 / Math.log2(S.far + 1);
      g.uniforms.logDepthBufFC.value = m, d.uniforms.logDepthBufFC.value = m;
      const v = Rt.getState().selectedAtomIndex;
      g.uniforms.uSelected.value = v ?? -1;
    });
    const w = (S) => {
      if (Qt()) return;
      S.stopPropagation();
      const m = S.instanceId;
      if (m === void 0) return;
      const v = Rt.getState().selectedAtomIndex;
      i(v === m ? null : m);
    };
    return a === 0 ? null : s.jsxs("group", {
      children: [
        s.jsx("mesh", {
          geometry: p,
          material: g,
          frustumCulled: false
        }),
        s.jsx("instancedMesh", {
          ref: n,
          args: [
            h,
            y,
            a
          ],
          frustumCulled: false,
          onClick: w
        }, a),
        l && r.length > 0 && s.jsx("instancedMesh", {
          ref: o,
          args: [
            f,
            d,
            b
          ],
          frustumCulled: false
        })
      ]
    });
  }
  function yr(e, t) {
    const o = /* @__PURE__ */ new Map(), n = (r, l) => r < l ? `${r},${l}` : `${l},${r}`, i = t.length / 3;
    for (let r = 0; r < i; r++) {
      const l = t[3 * r], u = t[3 * r + 1], p = t[3 * r + 2];
      for (const [g, h] of [
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
        const y = n(g, h);
        o.set(y, (o.get(y) ?? 0) + 1);
      }
    }
    const a = [];
    for (const [r, l] of o) {
      if (l !== 1) continue;
      const [u, p] = r.split(","), g = parseInt(u, 10), h = parseInt(p, 10);
      a.push(e[3 * g], e[3 * g + 1], e[3 * g + 2], e[3 * h], e[3 * h + 1], e[3 * h + 2]);
    }
    return new Float32Array(a);
  }
  function vr({ positions: e, indices: t }) {
    const o = c.useMemo(() => {
      const n = yr(e, t), i = new ut();
      return i.setAttribute("position", new Ne(n, 3)), i;
    }, [
      e,
      t
    ]);
    return s.jsx("lineSegments", {
      geometry: o,
      renderOrder: 999,
      children: s.jsx("lineBasicMaterial", {
        color: "#ff2040",
        linewidth: 2,
        depthTest: false,
        transparent: true
      })
    });
  }
  const wr = `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`, br = `
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
  function Sr({ mesh: e }) {
    const t = c.useRef(null), o = c.useMemo(() => new Ut({
      vertexShader: wr,
      fragmentShader: br,
      side: He
    }), []);
    return c.useEffect(() => {
      const n = t.current;
      if (n) return n.setAttribute("position", new Ne(e.positions, 3)), n.setIndex(new Ne(e.indices, 1)), e.normals && e.normals.length === e.positions.length ? n.setAttribute("normal", new Ne(e.normals, 3)) : n.computeVertexNormals(), () => {
        n.dispose();
      };
    }, [
      e
    ]), s.jsx("mesh", {
      material: o,
      renderOrder: 1,
      children: s.jsx("bufferGeometry", {
        ref: t
      })
    });
  }
  function Mr() {
    const e = B((p) => p.clearanceIndicator), t = B((p) => p.captureMode);
    if (!e || t) return null;
    const { pointA: o, pointB: n, distanceMm: i, pass: a, label: r } = e, l = [
      (o[0] + n[0]) / 2,
      (o[1] + n[1]) / 2,
      (o[2] + n[2]) / 2
    ], u = a ? "#22c55e" : "#ef4444";
    return s.jsxs("group", {
      children: [
        s.jsx(_e, {
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
        s.jsxs("mesh", {
          position: o,
          children: [
            s.jsx("sphereGeometry", {
              args: [
                0.8,
                12,
                12
              ]
            }),
            s.jsx("meshBasicMaterial", {
              color: u
            })
          ]
        }),
        s.jsxs("mesh", {
          position: n,
          children: [
            s.jsx("sphereGeometry", {
              args: [
                0.8,
                12,
                12
              ]
            }),
            s.jsx("meshBasicMaterial", {
              color: u
            })
          ]
        }),
        s.jsx(dt, {
          position: l,
          center: true,
          zIndexRange: [
            40,
            0
          ],
          children: s.jsxs("div", {
            className: "pointer-events-auto flex items-center gap-1.5 rounded border px-1.5 py-0.5 text-[10px] font-mono whitespace-nowrap shadow-sm",
            style: {
              background: "var(--color-bg, #fff)",
              borderColor: u,
              color: u
            },
            children: [
              s.jsxs("span", {
                children: [
                  r ? `${r}: ` : "",
                  i.toFixed(2),
                  " mm"
                ]
              }),
              s.jsx("span", {
                className: "font-sans",
                children: a ? "clear" : "violated"
              }),
              s.jsx("button", {
                "aria-label": "Dismiss clearance measurement",
                className: "ml-0.5 opacity-60 hover:opacity-100",
                onClick: () => B.getState().setClearanceIndicator(null),
                children: "\xD7"
              })
            ]
          })
        })
      ]
    });
  }
  function Er({ mesh: e }) {
    const t = c.useRef(null);
    return c.useEffect(() => {
      const o = t.current;
      if (!o) return;
      const n = new Float32Array(e.positions), i = new Uint32Array(e.indices);
      return o.setAttribute("position", new Ne(n, 3)), o.setIndex(new Ne(i, 1)), o.computeVertexNormals(), o.computeBoundingSphere(), () => {
        o.dispose();
      };
    }, [
      e
    ]), s.jsxs("mesh", {
      children: [
        s.jsx("bufferGeometry", {
          ref: t
        }),
        s.jsx("meshStandardMaterial", {
          color: "#00d4ff",
          transparent: true,
          opacity: 0.4,
          side: He,
          depthWrite: false
        })
      ]
    });
  }
  const Cr = "#ff4d4d", Pr = "#2fbf71";
  function $n({ mesh: e, color: t }) {
    const o = c.useRef(null);
    return c.useEffect(() => {
      const n = o.current;
      if (n) return n.setAttribute("position", new Ne(new Float32Array(e.positions), 3)), n.setIndex(new Ne(new Uint32Array(e.indices), 1)), n.computeVertexNormals(), n.computeBoundingSphere(), () => {
        n.dispose();
      };
    }, [
      e
    ]), s.jsxs("mesh", {
      renderOrder: 997,
      raycast: () => null,
      children: [
        s.jsx("bufferGeometry", {
          ref: o
        }),
        s.jsx("meshStandardMaterial", {
          color: t,
          transparent: true,
          opacity: 0.35,
          side: He,
          depthWrite: false
        })
      ]
    });
  }
  function Rr() {
    const e = Qo((t) => t.ghost);
    return e ? s.jsxs("group", {
      children: [
        e.removed.map((t, o) => s.jsx($n, {
          mesh: t,
          color: Cr
        }, `r${o}`)),
        e.added.map((t, o) => s.jsx($n, {
          mesh: t,
          color: Pr
        }, `a${o}`))
      ]
    }) : null;
  }
  const Ze = 10, Bt = 200, jr = 5;
  function Ye(e) {
    return new E(e.x, e.y, e.z);
  }
  function qt({ position: e, screenPx: t = 1, children: o }) {
    const n = c.useRef(null), { camera: i, size: a } = Re(), r = c.useRef(new E());
    return Ue(() => {
      const l = n.current;
      if (!l) return;
      const u = Array.isArray(e) ? r.current.fromArray(e) : e, p = i, g = p.position.distanceTo(u), h = (p.fov ?? 50) * Math.PI / 180, y = 2 * g * Math.tan(h / 2) / a.height;
      l.scale.setScalar(Math.max(1e-4, t * y));
    }), s.jsx("group", {
      ref: n,
      position: e,
      children: o
    });
  }
  function De(e, t, o, n) {
    return new E(t.x + e.x * o.x + e.y * n.x, t.y + e.x * o.y + e.y * n.y, t.z + e.x * o.z + e.y * n.z);
  }
  function Wn(e, t, o, n) {
    const i = e.x - t.x, a = e.y - t.y, r = e.z - t.z;
    return {
      x: i * o.x + a * o.y + r * o.z,
      y: i * n.x + a * n.y + r * n.z
    };
  }
  function kr({ origin: e, xDir: t, yDir: o, bounds: n }) {
    const { isDark: i } = st(), a = c.useMemo(() => {
      if (!n) return {
        minU: -Bt,
        maxU: Bt,
        minV: -Bt,
        maxV: Bt
      };
      const g = Ze;
      return {
        minU: Math.floor((n.minU - g) / Ze) * Ze,
        maxU: Math.ceil((n.maxU + g) / Ze) * Ze,
        minV: Math.floor((n.minV - g) / Ze) * Ze,
        maxV: Math.ceil((n.maxV + g) / Ze) * Ze
      };
    }, [
      n
    ]), r = c.useMemo(() => {
      const g = [], h = Ye(e), y = Ye(t), f = Ye(o), d = i ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
      for (let b = a.minV; b <= a.maxV; b += Ze) {
        if (b === 0) continue;
        const w = h.clone().add(y.clone().multiplyScalar(a.minU)).add(f.clone().multiplyScalar(b)), S = h.clone().add(y.clone().multiplyScalar(a.maxU)).add(f.clone().multiplyScalar(b));
        g.push({
          points: [
            [
              w.x,
              w.y,
              w.z
            ],
            [
              S.x,
              S.y,
              S.z
            ]
          ],
          color: d,
          width: 1
        });
      }
      for (let b = a.minU; b <= a.maxU; b += Ze) {
        if (b === 0) continue;
        const w = h.clone().add(f.clone().multiplyScalar(a.minV)).add(y.clone().multiplyScalar(b)), S = h.clone().add(f.clone().multiplyScalar(a.maxV)).add(y.clone().multiplyScalar(b));
        g.push({
          points: [
            [
              w.x,
              w.y,
              w.z
            ],
            [
              S.x,
              S.y,
              S.z
            ]
          ],
          color: d,
          width: 1
        });
      }
      return g;
    }, [
      e,
      t,
      o,
      i,
      a
    ]), l = c.useMemo(() => {
      const g = Ye(e), h = Ye(t), y = g.clone().add(h.clone().multiplyScalar(a.minU)), f = g.clone().add(h.clone().multiplyScalar(a.maxU));
      return [
        [
          y.x,
          y.y,
          y.z
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
      const g = Ye(e), h = Ye(o), y = g.clone().add(h.clone().multiplyScalar(a.minV)), f = g.clone().add(h.clone().multiplyScalar(a.maxV));
      return [
        [
          y.x,
          y.y,
          y.z
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
    ]), p = c.useMemo(() => Ye(e), [
      e
    ]);
    return s.jsxs("group", {
      children: [
        r.map((g, h) => s.jsx(_e, {
          points: g.points,
          color: i ? "#404040" : "#888888",
          lineWidth: g.width,
          transparent: true,
          opacity: 0.3,
          depthWrite: false
        }, h)),
        s.jsx(_e, {
          points: l,
          color: "#ef4444",
          lineWidth: 2,
          transparent: true,
          opacity: 0.8,
          depthWrite: false
        }),
        s.jsx(_e, {
          points: u,
          color: "#22c55e",
          lineWidth: 2,
          transparent: true,
          opacity: 0.8,
          depthWrite: false
        }),
        s.jsxs("mesh", {
          position: p,
          children: [
            s.jsx("sphereGeometry", {
              args: [
                1,
                16,
                16
              ]
            }),
            s.jsx("meshBasicMaterial", {
              color: "#ffffff"
            })
          ]
        })
      ]
    });
  }
  function Ir({ segments: e, selectedSegments: t, constraints: o, pendingPoints: n, origin: i, xDir: a, yDir: r }) {
    const { isDark: l } = st(), u = c.useMemo(() => e.map((y, f) => {
      const d = t.includes(f), b = De(y.start, i, a, r), w = De(y.end, i, a, r);
      if (y.type === "Line") return {
        type: "line",
        points: [
          [
            b.x,
            b.y,
            b.z
          ],
          [
            w.x,
            w.y,
            w.z
          ]
        ],
        color: d ? "#f59e0b" : "#3b82f6",
        width: d ? 3 : 2,
        start: b,
        end: w
      };
      {
        const S = De(y.center, i, a, r), m = b.distanceTo(S), v = Math.atan2(y.start.y - y.center.y, y.start.x - y.center.x), C = Math.atan2(y.end.y - y.center.y, y.end.x - y.center.x), P = [], k = 16;
        let I = C - v;
        y.ccw && I < 0 && (I += 2 * Math.PI), !y.ccw && I > 0 && (I -= 2 * Math.PI);
        for (let A = 0; A <= k; A++) {
          const N = A / k, H = v + I * N, ie = {
            x: y.center.x + m * Math.cos(H),
            y: y.center.y + m * Math.sin(H)
          }, $ = De(ie, i, a, r);
          P.push([
            $.x,
            $.y,
            $.z
          ]);
        }
        return {
          type: "arc",
          points: P,
          color: d ? "#f59e0b" : "#3b82f6",
          width: d ? 3 : 2,
          start: b,
          end: w
        };
      }
    }), [
      e,
      t,
      i,
      a,
      r
    ]), p = c.useMemo(() => {
      const y = [], f = /* @__PURE__ */ new Set();
      for (const d of e) {
        const b = De(d.start, i, a, r), w = De(d.end, i, a, r), S = `${b.x.toFixed(2)},${b.y.toFixed(2)},${b.z.toFixed(2)}`, m = `${w.x.toFixed(2)},${w.y.toFixed(2)},${w.z.toFixed(2)}`;
        f.has(S) || (f.add(S), y.push(b)), f.has(m) || (f.add(m), y.push(w));
      }
      return y;
    }, [
      e,
      i,
      a,
      r
    ]), g = c.useMemo(() => n.map((y) => De(y, i, a, r)), [
      n,
      i,
      a,
      r
    ]), h = c.useMemo(() => {
      const y = [];
      for (const f of o) if (f.type === "Horizontal") {
        const d = e[f.line];
        if ((d == null ? void 0 : d.type) === "Line") {
          const b = {
            x: (d.start.x + d.end.x) / 2,
            y: (d.start.y + d.end.y) / 2 + 3
          };
          y.push({
            position: De(b, i, a, r),
            text: "H",
            color: "#22c55e"
          });
        }
      } else if (f.type === "Vertical") {
        const d = e[f.line];
        if ((d == null ? void 0 : d.type) === "Line") {
          const b = {
            x: (d.start.x + d.end.x) / 2 + 3,
            y: (d.start.y + d.end.y) / 2
          };
          y.push({
            position: De(b, i, a, r),
            text: "V",
            color: "#22c55e"
          });
        }
      } else if (f.type === "Length") {
        const d = e[f.line];
        if ((d == null ? void 0 : d.type) === "Line") {
          const b = {
            x: (d.start.x + d.end.x) / 2,
            y: (d.start.y + d.end.y) / 2 - 3
          };
          y.push({
            position: De(b, i, a, r),
            text: `${f.length}`,
            color: "#a855f7"
          });
        }
      } else if (f.type === "Parallel") {
        const d = e[f.lineA], b = e[f.lineB];
        if ((d == null ? void 0 : d.type) === "Line" && (b == null ? void 0 : b.type) === "Line") {
          const w = {
            x: (d.start.x + d.end.x) / 2,
            y: (d.start.y + d.end.y) / 2 + 3
          }, S = {
            x: (b.start.x + b.end.x) / 2,
            y: (b.start.y + b.end.y) / 2 + 3
          };
          y.push({
            position: De(w, i, a, r),
            text: "//",
            color: "#06b6d4"
          }), y.push({
            position: De(S, i, a, r),
            text: "//",
            color: "#06b6d4"
          });
        }
      } else if (f.type === "Perpendicular") {
        const d = e[f.lineA];
        if ((d == null ? void 0 : d.type) === "Line") {
          const b = {
            x: (d.start.x + d.end.x) / 2,
            y: (d.start.y + d.end.y) / 2 + 3
          };
          y.push({
            position: De(b, i, a, r),
            text: "\u22A5",
            color: "#f43f5e"
          });
        }
      } else if (f.type === "EqualLength") {
        const d = e[f.lineA], b = e[f.lineB];
        if ((d == null ? void 0 : d.type) === "Line" && (b == null ? void 0 : b.type) === "Line") {
          const w = {
            x: (d.start.x + d.end.x) / 2,
            y: (d.start.y + d.end.y) / 2 + 3
          }, S = {
            x: (b.start.x + b.end.x) / 2,
            y: (b.start.y + b.end.y) / 2 + 3
          };
          y.push({
            position: De(w, i, a, r),
            text: "=",
            color: "#eab308"
          }), y.push({
            position: De(S, i, a, r),
            text: "=",
            color: "#eab308"
          });
        }
      }
      return y;
    }, [
      o,
      e,
      i,
      a,
      r
    ]);
    return s.jsxs("group", {
      children: [
        u.map((y, f) => s.jsx(_e, {
          points: y.points,
          color: y.color,
          lineWidth: y.width,
          depthWrite: false
        }, f)),
        p.map((y, f) => s.jsx(qt, {
          position: y,
          children: s.jsxs("mesh", {
            children: [
              s.jsx("sphereGeometry", {
                args: [
                  4,
                  12,
                  12
                ]
              }),
              s.jsx("meshBasicMaterial", {
                color: l ? "#00d4ff" : "#0891b2"
              })
            ]
          })
        }, f)),
        g.map((y, f) => s.jsx(qt, {
          position: y,
          children: s.jsxs("mesh", {
            children: [
              s.jsx("sphereGeometry", {
                args: [
                  5,
                  12,
                  12
                ]
              }),
              s.jsx("meshBasicMaterial", {
                color: "#f59e0b"
              })
            ]
          })
        }, `pending-${f}`)),
        h.map((y, f) => s.jsx(dt, {
          position: y.position,
          center: true,
          children: s.jsx("div", {
            className: "pointer-events-none select-none whitespace-nowrap text-xs font-bold",
            style: {
              color: y.color
            },
            children: y.text
          })
        }, f))
      ]
    });
  }
  function zr({ cursorWorldPos: e, cursorSketchPos: t, snapTarget: o, gridSnap: n, previewLine: i, previewRect: a, previewCircle: r, origin: l, xDir: u, yDir: p }) {
    const g = c.useMemo(() => e ? Ye(e) : null, [
      e
    ]), h = 14, y = c.useMemo(() => {
      const m = Ye(u);
      return [
        [
          -m.x * h,
          -m.y * h,
          -m.z * h
        ],
        [
          m.x * h,
          m.y * h,
          m.z * h
        ]
      ];
    }, [
      u
    ]), f = c.useMemo(() => {
      const m = Ye(p);
      return [
        [
          -m.x * h,
          -m.y * h,
          -m.z * h
        ],
        [
          m.x * h,
          m.y * h,
          m.z * h
        ]
      ];
    }, [
      p
    ]), d = c.useMemo(() => {
      if (!i) return null;
      const m = De(i.start, l, u, p), v = De(i.end, l, u, p);
      return [
        [
          m.x,
          m.y,
          m.z
        ],
        [
          v.x,
          v.y,
          v.z
        ]
      ];
    }, [
      i,
      l,
      u,
      p
    ]), b = c.useMemo(() => {
      if (!a) return null;
      const { p1: m, p2: v } = a, C = Math.min(m.x, v.x), P = Math.max(m.x, v.x), k = Math.min(m.y, v.y), I = Math.max(m.y, v.y);
      return [
        {
          x: C,
          y: k
        },
        {
          x: P,
          y: k
        },
        {
          x: P,
          y: I
        },
        {
          x: C,
          y: I
        },
        {
          x: C,
          y: k
        }
      ].map((N) => {
        const H = De(N, l, u, p);
        return [
          H.x,
          H.y,
          H.z
        ];
      });
    }, [
      a,
      l,
      u,
      p
    ]), w = c.useMemo(() => {
      if (!r || r.radius < 0.1) return null;
      const { center: m, radius: v } = r, C = 32, P = [];
      for (let k = 0; k <= C; k++) {
        const I = 2 * Math.PI * k / C, A = {
          x: m.x + v * Math.cos(I),
          y: m.y + v * Math.sin(I)
        }, N = De(A, l, u, p);
        P.push([
          N.x,
          N.y,
          N.z
        ]);
      }
      return P;
    }, [
      r,
      l,
      u,
      p
    ]), S = c.useMemo(() => o ? De(o, l, u, p) : null, [
      o,
      l,
      u,
      p
    ]);
    return !g || !t || !y || !f ? null : s.jsxs("group", {
      children: [
        s.jsxs(qt, {
          position: g,
          children: [
            s.jsx(_e, {
              points: y,
              color: n && !o ? "#06b6d4" : "rgba(255,255,255,0.5)",
              lineWidth: n && !o ? 1.5 : 1,
              depthWrite: false
            }),
            s.jsx(_e, {
              points: f,
              color: n && !o ? "#06b6d4" : "rgba(255,255,255,0.5)",
              lineWidth: n && !o ? 1.5 : 1,
              depthWrite: false
            })
          ]
        }),
        d && s.jsx(_e, {
          points: d,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        b && s.jsx(_e, {
          points: b,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        w && s.jsx(_e, {
          points: w,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        S && s.jsxs(qt, {
          position: S,
          children: [
            s.jsxs("mesh", {
              children: [
                s.jsx("ringGeometry", {
                  args: [
                    8,
                    10,
                    24
                  ]
                }),
                s.jsx("meshBasicMaterial", {
                  color: "#22c55e",
                  side: He
                })
              ]
            }),
            s.jsxs("mesh", {
              children: [
                s.jsx("sphereGeometry", {
                  args: [
                    3,
                    12,
                    12
                  ]
                }),
                s.jsx("meshBasicMaterial", {
                  color: "#22c55e"
                })
              ]
            })
          ]
        }),
        s.jsx(dt, {
          position: g,
          style: {
            pointerEvents: "none"
          },
          children: s.jsxs("div", {
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
  function Ar() {
    const { raycaster: e } = Re(), t = Ie((F) => F.active), o = Ie((F) => F.plane), n = Ie((F) => F.origin), i = Ie((F) => F.segments), a = Ie((F) => F.constraints), r = Ie((F) => F.tool), l = Ie((F) => F.constraintTool), u = Ie((F) => F.points), p = Ie((F) => F.selectedSegments), g = Ie((F) => F.cursorWorldPos), h = Ie((F) => F.cursorSketchPos), y = Ie((F) => F.snapTarget), f = Ie((F) => F.selectedFace), d = Ie((F) => F.addPoint), b = Ie((F) => F.finishShape), w = Ie((F) => F.toggleSegmentSelection), S = Ie((F) => F.setCursorPos), m = B((F) => F.gridSnap), v = B((F) => F.pointSnap), C = l !== "none", P = c.useMemo(() => ({
      ...Jo(o),
      origin: n
    }), [
      o,
      n
    ]), k = c.useMemo(() => {
      const F = f == null ? void 0 : f.vertices;
      if (!F || F.length === 0) return null;
      const ne = F.map((be) => Wn(Ye(be), P.origin, P.xDir, P.yDir));
      let ge = 1 / 0, X = -1 / 0, ye = 1 / 0, te = -1 / 0;
      for (const be of ne) be.x < ge && (ge = be.x), be.x > X && (X = be.x), be.y < ye && (ye = be.y), be.y > te && (te = be.y);
      return {
        vertices: ne,
        bounds: {
          minU: ge,
          maxU: X,
          minV: ye,
          maxV: te
        }
      };
    }, [
      f,
      P
    ]), I = c.useMemo(() => {
      if (!k || k.vertices.length === 0) return i;
      const F = k.vertices.map((ne) => ({
        type: "Line",
        start: ne,
        end: ne
      }));
      return [
        ...i,
        ...F
      ];
    }, [
      i,
      k
    ]), A = c.useCallback((F) => {
      const { snapped: ne, target: ge } = es(I, F, {
        gridEnabled: m,
        gridSize: Ze,
        pointEnabled: v,
        pointTolerance: jr
      });
      return {
        snapped: ne,
        target: ge
      };
    }, [
      v,
      m,
      I
    ]), N = c.useRef(null), H = 5e4, ie = c.useMemo(() => {
      const F = new Eo(H, H), ne = Ye(P.normal), ge = new E(0, 0, 1), X = new nt().setFromUnitVectors(ge, ne);
      return F.applyQuaternion(X), F.translate(P.origin.x, P.origin.y, P.origin.z), F;
    }, [
      P
    ]), $ = c.useCallback(() => {
      if (!N.current) return;
      const F = e.intersectObject(N.current);
      if (F.length === 0) {
        S(null, null, null);
        return;
      }
      const ne = N.current.worldToLocal(F[0].point.clone()), ge = Wn(ne, P.origin, P.xDir, P.yDir), { snapped: X, target: ye } = A(ge), te = De(X, P.origin, P.xDir, P.yDir);
      S({
        x: te.x,
        y: te.y,
        z: te.z
      }, X, ye);
    }, [
      P,
      e,
      A,
      S
    ]), O = c.useCallback((F) => {
      if (F.button === 0 && !Qt() && (F.stopPropagation(), !!h)) if (C) {
        const ne = ts(i, h, 2);
        ne !== null && w(ne);
      } else d(h);
    }, [
      h,
      C,
      i,
      d,
      w
    ]), Z = c.useCallback((F) => {
      F.stopPropagation(), r === "line" && b();
    }, [
      r,
      b
    ]), ee = c.useCallback(() => {
      S(null, null, null);
    }, [
      S
    ]), D = c.useMemo(() => r === "line" && u.length > 0 && h ? {
      start: u[u.length - 1],
      end: h
    } : null, [
      r,
      u,
      h
    ]), le = c.useMemo(() => r === "rectangle" && u.length === 1 && h ? {
      p1: u[0],
      p2: h
    } : null, [
      r,
      u,
      h
    ]), fe = c.useMemo(() => {
      if (r === "circle" && u.length === 1 && h) {
        const F = u[0], ne = Math.sqrt((h.x - F.x) ** 2 + (h.y - F.y) ** 2);
        return {
          center: F,
          radius: ne
        };
      }
      return null;
    }, [
      r,
      u,
      h
    ]);
    return t ? s.jsxs("group", {
      children: [
        s.jsx("mesh", {
          ref: N,
          geometry: ie,
          frustumCulled: false,
          onPointerMove: $,
          onClick: O,
          onDoubleClick: Z,
          onPointerLeave: ee,
          children: s.jsx("meshBasicMaterial", {
            visible: false,
            side: He
          })
        }),
        s.jsx(kr, {
          origin: P.origin,
          xDir: P.xDir,
          yDir: P.yDir,
          bounds: (k == null ? void 0 : k.bounds) ?? null
        }),
        s.jsx(Ir, {
          segments: i,
          selectedSegments: p,
          constraints: a,
          pendingPoints: u,
          origin: P.origin,
          xDir: P.xDir,
          yDir: P.yDir
        }),
        s.jsx(zr, {
          cursorWorldPos: g,
          cursorSketchPos: h,
          snapTarget: y,
          gridSnap: m,
          previewLine: D,
          previewRect: le,
          previewCircle: fe,
          origin: P.origin,
          xDir: P.xDir,
          yDir: P.yDir
        })
      ]
    }) : null;
  }
  const vn = 5, Gn = 0.15, Dr = 0.35, _r = {
    XY: "#61afef",
    XZ: "#98c379",
    YZ: "#e06c75"
  };
  function nn({ plane: e, rotation: t, position: o }) {
    const [n, i] = c.useState(false), a = c.useRef(null), r = Ie((g) => g.enterSketchMode), l = Ie((g) => g.active), { invalidate: u } = Re(), p = (g) => {
      var _a2;
      if (g.stopPropagation(), l) return;
      let h = false;
      ((_a2 = g.face) == null ? void 0 : _a2.normal) && a.current && (h = g.face.normal.clone().transformDirection(a.current.matrixWorld).dot(g.ray.direction) > 0), r(e, void 0, h);
    };
    return Ue(() => {
      if (!a.current) return;
      const g = a.current.material, h = n ? Dr : Gn, y = h - g.opacity;
      if (Math.abs(y) < 0.01) {
        g.opacity = h;
        return;
      }
      g.opacity += y * 0.2, u();
    }), s.jsxs("mesh", {
      ref: a,
      position: o,
      rotation: t,
      onPointerEnter: (g) => {
        g.stopPropagation(), l || (i(true), document.body.style.cursor = "pointer");
      },
      onPointerLeave: () => {
        i(false), document.body.style.cursor = "auto";
      },
      onClick: p,
      children: [
        s.jsx("planeGeometry", {
          args: [
            vn,
            vn
          ]
        }),
        s.jsx("meshBasicMaterial", {
          color: _r[e],
          transparent: true,
          opacity: Gn,
          side: He,
          depthWrite: false,
          depthTest: false
        })
      ]
    });
  }
  function Tr() {
    if (Ie((o) => o.active)) return null;
    const t = vn / 2;
    return s.jsxs("group", {
      children: [
        s.jsx(nn, {
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
        s.jsx(nn, {
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
        s.jsx(nn, {
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
  const Fr = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, on = Math.PI / 180, sn = 180 / Math.PI, Lr = new nt().setFromAxisAngle(new E(1, 0, 0), -Math.PI / 2), Nr = new nt().setFromAxisAngle(new E(1, 0, 0), Math.PI / 2);
  function Hn(e) {
    return [
      e.x,
      e.z,
      -e.y
    ];
  }
  function Yn(e) {
    return {
      x: e.x,
      y: -e.z,
      z: e.y
    };
  }
  function Xn(e, t) {
    const o = wn.setFromEuler(Et.set(e.x * on, e.y * on, e.z * on, "ZYX"));
    return t.copy(Lr).multiply(o);
  }
  function Un(e) {
    return wn.copy(Nr).multiply(e), Et.setFromQuaternion(wn, "ZYX"), {
      x: Et.x * sn,
      y: Et.y * sn,
      z: Et.z * sn
    };
  }
  const wn = new nt(), Et = new Zt();
  function Or({ orbitControls: e }) {
    var _a2;
    const t = B((v) => v.selectedPartIds), o = B((v) => v.transformMode), n = B((v) => v.setDraggingGizmo), i = B((v) => v.setGizmoHovered), a = B((v) => v.gridSnap), r = B((v) => v.snapIncrement), l = re((v) => v.parts), u = re((v) => v.document), [p, g] = c.useState(null), h = c.useCallback((v) => {
      g(v);
    }, []), y = c.useRef(null), f = c.useRef(false), d = t.size === 1 ? Array.from(t)[0] : null, b = d ? l.find((v) => v.id === d) : null, w = d ? (_a2 = u.instances) == null ? void 0 : _a2.find((v) => v.id === d) : null, S = b !== null || w !== null;
    if (c.useEffect(() => {
      if (!(!p || !S) && !f.current) {
        if (b) {
          const v = u.nodes[String(b.translateNodeId)], C = u.nodes[String(b.rotateNodeId)], P = u.nodes[String(b.scaleNodeId)];
          (v == null ? void 0 : v.op.type) === "Translate" && p.position.set(...Hn(v.op.offset));
          const k = (C == null ? void 0 : C.op.type) === "Rotate" ? C.op.angles : {
            x: 0,
            y: 0,
            z: 0
          };
          if (Xn(k, p.quaternion), (P == null ? void 0 : P.op.type) === "Scale") {
            const { factor: I } = P.op;
            p.scale.set(I.x, I.y, I.z);
          }
        } else if (w) {
          const C = w.transform ?? {
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
          p.position.set(...Hn(C.translation)), Xn(C.rotation, p.quaternion), p.scale.set(C.scale.x, C.scale.y, C.scale.z);
        }
      }
    }, [
      p,
      b,
      w,
      S,
      u
    ]), c.useEffect(() => {
      const v = y.current;
      if (!v) return;
      const C = (k) => {
        const I = k.value;
        f.current = I, n(I), e.current && (e.current.enabled = !I), I && re.getState().pushUndoSnapshot();
      }, P = (k) => {
        const I = k.value != null;
        i(I), I && B.getState().setHoveredItem(null);
      };
      return v.addEventListener("dragging-changed", C), v.addEventListener("axis-changed", P), () => {
        v.removeEventListener("dragging-changed", C), v.removeEventListener("axis-changed", P), i(false);
      };
    }, [
      p,
      e,
      n,
      i
    ]), c.useEffect(() => {
      const v = y.current;
      if (!v) return;
      const C = () => {
        if (!p || !d) return;
        const P = re.getState();
        b ? o === "translate" ? P.setTranslation(d, Yn(p.position), true) : o === "rotate" ? P.setRotation(d, Un(p.quaternion), true) : o === "scale" && P.setScale(d, {
          x: p.scale.x,
          y: p.scale.y,
          z: p.scale.z
        }, true) : w && P.setInstanceTransform(d, {
          translation: Yn(p.position),
          rotation: Un(p.quaternion),
          scale: {
            x: p.scale.x,
            y: p.scale.y,
            z: p.scale.z
          }
        }, true);
      };
      return v.addEventListener("objectChange", C), () => {
        v.removeEventListener("objectChange", C);
      };
    }, [
      p,
      d,
      b,
      w,
      o
    ]), !S) return null;
    const m = a ? {
      translationSnap: r,
      rotationSnap: Math.PI / 180 * 15,
      scaleSnap: 0.1
    } : {};
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx("object3D", {
          ref: h
        }),
        p && s.jsx(Bo, {
          ref: y,
          object: p,
          mode: o,
          space: "local",
          size: Fr ? 1.8 : 0.8,
          ...m
        })
      ]
    });
  }
  const Br = 0.4, Vr = 0.85, $r = new Oe(54527), Wr = new Oe(16328306), Do = "#00d4ff", _o = "#f92672", Gr = "#6b8fa3", Hr = "#4a7080";
  function To({ box: e, color: t, opacity: o }) {
    const n = e.min, i = e.max, a = [
      [
        new E(n.x, n.y, n.z),
        new E(i.x, n.y, n.z)
      ],
      [
        new E(i.x, n.y, n.z),
        new E(i.x, n.y, i.z)
      ],
      [
        new E(i.x, n.y, i.z),
        new E(n.x, n.y, i.z)
      ],
      [
        new E(n.x, n.y, i.z),
        new E(n.x, n.y, n.z)
      ],
      [
        new E(n.x, i.y, n.z),
        new E(i.x, i.y, n.z)
      ],
      [
        new E(i.x, i.y, n.z),
        new E(i.x, i.y, i.z)
      ],
      [
        new E(i.x, i.y, i.z),
        new E(n.x, i.y, i.z)
      ],
      [
        new E(n.x, i.y, i.z),
        new E(n.x, i.y, n.z)
      ],
      [
        new E(n.x, n.y, n.z),
        new E(n.x, i.y, n.z)
      ],
      [
        new E(i.x, n.y, n.z),
        new E(i.x, i.y, n.z)
      ],
      [
        new E(i.x, n.y, i.z),
        new E(i.x, i.y, i.z)
      ],
      [
        new E(n.x, n.y, i.z),
        new E(n.x, i.y, i.z)
      ]
    ];
    return s.jsx(s.Fragment, {
      children: a.map((r, l) => s.jsx(_e, {
        points: r,
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
  function Fo(e) {
    const t = re((n) => n.parts), o = Ae((n) => n.scene);
    return c.useMemo(() => {
      if (e.size === 0 || !o) return null;
      const n = new ot();
      let i = false;
      return e.forEach((a) => {
        const r = t.findIndex((h) => h.id === a);
        if (r === -1) return;
        const l = o.parts[r];
        if (!l) return;
        const u = l.mesh;
        if (!u.positions.length) return;
        const p = new ot(), g = new E();
        for (let h = 0; h < u.positions.length; h += 3) g.set(u.positions[h], u.positions[h + 1], u.positions[h + 2]), p.expandByPoint(g);
        n.union(p), i = true;
      }), i ? n : null;
    }, [
      e,
      t,
      o
    ]);
  }
  function Yr() {
    const e = B((i) => i.selectedPartIds), t = Fo(e), { isDark: o } = st();
    if (!t) return null;
    const n = o ? Gr : Hr;
    return s.jsx(To, {
      box: t,
      color: n,
      opacity: 0.5
    });
  }
  function Xr() {
    const e = It((n) => n.participants);
    if (B((n) => n.followMode) === "free") return null;
    const o = [];
    return e.forEach((n) => {
      n.id !== En && n.selectedPartIds.size !== 0 && o.push(s.jsx(Ur, {
        ids: n.selectedPartIds,
        color: n.color
      }, n.id));
    }), s.jsx(s.Fragment, {
      children: o
    });
  }
  function Ur({ ids: e, color: t }) {
    const o = Fo(e);
    return o ? s.jsx(To, {
      box: o,
      color: t,
      opacity: 0.7
    }) : null;
  }
  function qr() {
    const e = Ae((o) => o.scene), t = c.useMemo(() => {
      let o = 100;
      if (e == null ? void 0 : e.parts) for (const n of e.parts) {
        const i = n.mesh.positions;
        for (let a = 0; a < i.length; a += 3) o = Math.max(o, Math.abs(i[a]), Math.abs(i[a + 1]), Math.abs(i[a + 2]));
      }
      return o * 0.25;
    }, [
      e
    ]);
    return s.jsxs("group", {
      children: [
        s.jsx(_e, {
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
        s.jsx(_e, {
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
        s.jsx(_e, {
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
  function jn(e) {
    const t = Ae((n) => n.scene), o = re((n) => n.parts);
    return c.useMemo(() => {
      var _a2;
      if (!t) return null;
      const n = o.findIndex((i) => i.id === e);
      return n < 0 ? null : ((_a2 = t.parts[n]) == null ? void 0 : _a2.mesh) ?? null;
    }, [
      t,
      o,
      e
    ]);
  }
  function Kr({ item: e, variant: t }) {
    const o = jn(e.partId), n = c.useMemo(() => {
      if (!o) return null;
      const r = Po(o, e.faceIndex);
      return r.length === 0 ? null : Ts(o, r);
    }, [
      o,
      e.faceIndex
    ]);
    if (c.useEffect(() => () => {
      n == null ? void 0 : n.dispose();
    }, [
      n
    ]), !n) return null;
    const i = t === "selected" ? Wr : $r, a = t === "selected" ? Vr : Br;
    return s.jsx("mesh", {
      geometry: n,
      renderOrder: 998,
      children: s.jsx("meshBasicMaterial", {
        color: i,
        transparent: true,
        opacity: a,
        depthWrite: false,
        depthTest: false,
        side: He
      })
    });
  }
  function Zr({ item: e, variant: t }) {
    const o = jn(e.partId), n = c.useMemo(() => {
      if (!o) return null;
      const { a, b: r } = Ro(o, e.edgeId);
      return [
        [
          a.x,
          a.y,
          a.z
        ],
        [
          r.x,
          r.y,
          r.z
        ]
      ];
    }, [
      o,
      e.edgeId
    ]);
    if (!n) return null;
    const i = t === "selected" ? _o : Do;
    return s.jsx(_e, {
      points: n,
      color: i,
      lineWidth: t === "selected" ? 3 : 2,
      transparent: true,
      opacity: t === "selected" ? 1 : 0.7,
      depthWrite: false,
      depthTest: false,
      renderOrder: 998
    });
  }
  function Qr({ item: e, variant: t }) {
    const o = jn(e.partId), n = c.useMemo(() => o ? jo(o, e.vertexId) : null, [
      o,
      e.vertexId
    ]), i = c.useRef(null), { camera: a, size: r } = Re();
    if (Ue(() => {
      if (!i.current || !n) return;
      const u = a, p = new E(n.x, n.z, -n.y), g = u.position.distanceTo(p), h = (u.fov ?? 50) * Math.PI / 180, y = 2 * g * Math.tan(h / 2) / r.height, f = t === "selected" ? 6 : 5;
      i.current.scale.setScalar(Math.max(1e-4, f * y));
    }), !n) return null;
    const l = t === "selected" ? _o : Do;
    return s.jsxs("mesh", {
      ref: i,
      position: n,
      renderOrder: 999,
      children: [
        s.jsx("sphereGeometry", {
          args: [
            1,
            12,
            12
          ]
        }),
        s.jsx("meshBasicMaterial", {
          color: l,
          transparent: true,
          opacity: t === "selected" ? 1 : 0.85,
          depthWrite: false,
          depthTest: false
        })
      ]
    });
  }
  function qn({ item: e, variant: t }) {
    return e.kind === "face" ? s.jsx(Kr, {
      item: e,
      variant: t
    }) : e.kind === "edge" ? s.jsx(Zr, {
      item: e,
      variant: t
    }) : e.kind === "vertex" ? s.jsx(Qr, {
      item: e,
      variant: t
    }) : null;
  }
  function Jr() {
    const e = B((n) => n.selection), t = B((n) => n.hoveredItem), o = c.useMemo(() => !t || t.kind === "part" || e.some((n) => ns(n, t)) ? null : t, [
      t,
      e
    ]);
    return s.jsxs(s.Fragment, {
      children: [
        e.map((n, i) => s.jsx(qn, {
          item: n,
          variant: "selected"
        }, `sel-${i}`)),
        o && s.jsx(qn, {
          item: o,
          variant: "hover"
        })
      ]
    });
  }
  function ei() {
    const e = B((n) => n.isDraggingGizmo), t = B((n) => n.isOrbiting);
    return B((n) => n.captureMode) ? s.jsx(qr, {}) : t || e ? null : s.jsxs(s.Fragment, {
      children: [
        s.jsx(Yr, {}),
        s.jsx(Xr, {}),
        s.jsx(Jr, {})
      ]
    });
  }
  const rn = "#94a3b8";
  function ti(e, t, o) {
    const n = structuredClone(e);
    return n.type === "Cube" ? t === "size.x" ? n.size.x = o : t === "size.y" ? n.size.y = o : t === "size.z" && (n.size.z = o) : n.type === "Cylinder" ? t === "radius" ? n.radius = o : t === "height" && (n.height = o) : n.type === "Sphere" && t === "radius" && (n.radius = o), n;
  }
  function ni({ value: e, paramKey: t, partId: o, primitiveNodeId: n }) {
    const [i, a] = c.useState(false), [r, l] = c.useState(e.toFixed(1)), u = c.useRef(null), p = re((S) => S.document), g = re((S) => S.updatePrimitiveOp);
    c.useEffect(() => {
      i || l(e.toFixed(1));
    }, [
      e,
      i
    ]), c.useEffect(() => {
      i && u.current && (u.current.focus(), u.current.select());
    }, [
      i
    ]);
    const h = () => {
      const S = parseFloat(r);
      if (!isNaN(S) && S > 0) {
        const m = p.nodes[String(n)];
        if (m) {
          const v = ti(m.op, t, S);
          g(o, v);
        }
      } else l(e.toFixed(1));
      a(false);
    }, y = () => {
      l(e.toFixed(1)), a(false);
    }, f = (S) => {
      S.stopPropagation(), S.key === "Enter" ? h() : S.key === "Escape" && y();
    }, b = t === "radius" ? "r=" : "", w = " mm";
    return i ? s.jsxs("div", {
      className: "bg-surface border border-brand px-1 py-0.5 text-[10px] text-text whitespace-nowrap flex items-center rounded",
      onClick: (S) => S.stopPropagation(),
      onPointerDown: (S) => S.stopPropagation(),
      children: [
        b,
        s.jsx("input", {
          ref: u,
          type: "text",
          value: r,
          onChange: (S) => l(S.target.value),
          onBlur: h,
          onKeyDown: f,
          className: "w-12 bg-transparent outline-none text-[10px] text-text",
          onClick: (S) => S.stopPropagation(),
          onPointerDown: (S) => S.stopPropagation()
        }),
        w
      ]
    }) : s.jsxs("div", {
      className: "bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap cursor-pointer hover:border-brand hover:text-text transition-colors rounded",
      onClick: (S) => {
        S.stopPropagation(), a(true);
      },
      onPointerDown: (S) => S.stopPropagation(),
      children: [
        b,
        e.toFixed(1),
        w
      ]
    });
  }
  function oi({ start: e, end: t, label: o, offset: n = new E(), editable: i, value: a, paramKey: r, partId: l, primitiveNodeId: u }) {
    const p = new E().lerpVectors(e, t, 0.5).add(n), g = 1, h = new E().subVectors(t, e).normalize(), y = new E(0, 1, 0), f = new E().crossVectors(h, y).normalize();
    f.length() < 0.1 && f.set(1, 0, 0);
    const d = e.clone().add(f.clone().multiplyScalar(g)), b = e.clone().add(f.clone().multiplyScalar(-g)), w = t.clone().add(f.clone().multiplyScalar(g)), S = t.clone().add(f.clone().multiplyScalar(-g)), m = i && a !== void 0 && r && l && u !== void 0;
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(_e, {
          points: [
            e,
            t
          ],
          color: rn,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        s.jsx(_e, {
          points: [
            d,
            b
          ],
          color: rn,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        s.jsx(_e, {
          points: [
            w,
            S
          ],
          color: rn,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        s.jsx(dt, {
          position: p,
          center: true,
          style: {
            pointerEvents: m ? "auto" : "none",
            zIndex: 10
          },
          children: m ? s.jsx(ni, {
            value: a,
            paramKey: r,
            partId: l,
            primitiveNodeId: u
          }) : s.jsx("div", {
            className: "bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap rounded",
            children: o
          })
        })
      ]
    });
  }
  function si() {
    const e = B((p) => p.selectedPartIds), t = B((p) => p.isDraggingGizmo), o = re((p) => p.parts), n = re((p) => p.document), i = Ae((p) => p.scene), a = c.useMemo(() => {
      if (e.size !== 1) return null;
      const p = Array.from(e)[0], g = o.find((m) => m.id === p);
      if (!g || !os(g)) return null;
      const h = o.findIndex((m) => m.id === p);
      if (!(i == null ? void 0 : i.parts[h])) return null;
      const f = n.nodes[String(g.primitiveNodeId)];
      if (!f) return null;
      const d = n.nodes[String(g.translateNodeId)], b = (d == null ? void 0 : d.op.type) === "Translate" ? d.op.offset : {
        x: 0,
        y: 0,
        z: 0
      }, w = new E(b.x, b.y, b.z);
      let S = null;
      if (f.op.type === "Cube") {
        const { size: m } = f.op, v = m.x / 2, C = m.y / 2, P = m.z / 2;
        S = [
          {
            start: new E(w.x - v, w.y - C - 3, w.z + P),
            end: new E(w.x + v, w.y - C - 3, w.z + P),
            label: `${m.x.toFixed(1)} mm`,
            value: m.x,
            paramKey: "size.x"
          },
          {
            start: new E(w.x + v + 3, w.y - C, w.z + P),
            end: new E(w.x + v + 3, w.y + C, w.z + P),
            label: `${m.y.toFixed(1)} mm`,
            value: m.y,
            paramKey: "size.y"
          },
          {
            start: new E(w.x + v + 3, w.y - C - 3, w.z - P),
            end: new E(w.x + v + 3, w.y - C - 3, w.z + P),
            label: `${m.z.toFixed(1)} mm`,
            value: m.z,
            paramKey: "size.z"
          }
        ];
      }
      if (f.op.type === "Cylinder") {
        const { radius: m, height: v } = f.op, C = v / 2;
        S = [
          {
            start: new E(w.x, w.y - C - 3, w.z),
            end: new E(w.x + m, w.y - C - 3, w.z),
            label: `r=${m.toFixed(1)} mm`,
            value: m,
            paramKey: "radius"
          },
          {
            start: new E(w.x + m + 3, w.y - C, w.z),
            end: new E(w.x + m + 3, w.y + C, w.z),
            label: `${v.toFixed(1)} mm`,
            value: v,
            paramKey: "height"
          }
        ];
      }
      if (f.op.type === "Sphere") {
        const { radius: m } = f.op;
        S = [
          {
            start: new E(w.x, w.y, w.z),
            end: new E(w.x + m, w.y, w.z),
            label: `r=${m.toFixed(1)} mm`,
            value: m,
            paramKey: "radius"
          }
        ];
      }
      return S ? {
        dimensions: S,
        partId: p,
        primitiveNodeId: g.primitiveNodeId
      } : null;
    }, [
      e,
      o,
      n,
      i
    ]);
    if (!a || t) return null;
    const { dimensions: r, partId: l, primitiveNodeId: u } = a;
    return s.jsx(s.Fragment, {
      children: r.map((p, g) => s.jsx(oi, {
        start: p.start,
        end: p.end,
        label: p.label,
        editable: true,
        value: p.value,
        paramKey: p.paramKey,
        partId: l,
        primitiveNodeId: u
      }, g))
    });
  }
  const ri = {
    error: "bg-red-500/90 text-white ring-red-300",
    warning: "bg-amber-500/90 text-white ring-amber-200",
    info: "bg-sky-500/90 text-white ring-sky-200"
  }, ii = {
    error: "!",
    warning: "!",
    info: "i"
  };
  function ai() {
    const e = gt((l) => l.enabled), t = gt((l) => l.report), o = gt((l) => l.visibleSeverities), n = gt((l) => l.selectedIssueId), i = gt((l) => l.selectIssue), a = he((l) => l.active), r = c.useMemo(() => {
      if (!t) return [];
      const l = t.issues.filter((u) => o.has(u.severity));
      return fi(l);
    }, [
      t,
      o
    ]);
    return !e || r.length === 0 || a ? null : s.jsx("group", {
      children: r.map((l, u) => {
        const p = l[0];
        if (!p) return null;
        const g = [
          p.anchor[0],
          p.anchor[1],
          p.anchor[2]
        ], h = l.some((y) => y.id === n);
        return s.jsx(dt, {
          position: g,
          center: true,
          zIndexRange: h ? [
            1e3,
            900
          ] : [
            100,
            0
          ],
          style: {
            pointerEvents: "none"
          },
          children: s.jsx(ci, {
            issues: l,
            selected: h,
            onSelect: (y) => i(y === n ? null : y)
          })
        }, `dfm-${u}`);
      })
    });
  }
  function ci({ issues: e, selected: t, onSelect: o }) {
    const n = di(e), i = e.find((u) => u.severity === n) ?? e[0];
    if (!i) return null;
    const a = ri[n], r = ii[n], l = e.length;
    return s.jsxs("div", {
      className: "flex items-start gap-2",
      children: [
        s.jsxs("button", {
          type: "button",
          onClick: (u) => {
            u.stopPropagation(), o(i.id);
          },
          className: Cn("pointer-events-auto relative flex h-6 w-6 items-center justify-center rounded-full font-bold text-xs ring-2 shadow-md transition-transform", a, t ? "scale-125" : "hover:scale-110"),
          title: i.message,
          children: [
            r,
            l > 1 && s.jsx("span", {
              className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-surface px-1 text-[10px] font-semibold text-text ring-1 ring-border",
              children: l
            })
          ]
        }),
        t && s.jsx(li, {
          issue: i,
          extras: l - 1
        })
      ]
    });
  }
  function li({ issue: e, extras: t }) {
    return s.jsxs("div", {
      className: "w-72 rounded-md border border-border bg-surface/95 backdrop-blur-sm p-3 shadow-lg text-text text-xs space-y-2",
      children: [
        s.jsxs("div", {
          className: "flex items-center justify-between gap-2",
          children: [
            s.jsx("p", {
              className: "font-medium leading-snug",
              children: e.message
            }),
            s.jsx("span", {
              className: Cn("shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold capitalize", e.severity === "error" ? "bg-red-500/20 text-red-300" : e.severity === "warning" ? "bg-amber-500/20 text-amber-300" : "bg-sky-500/20 text-sky-300"),
              children: e.severity
            })
          ]
        }),
        e.explanation && s.jsx("p", {
          className: "leading-relaxed text-text-muted",
          children: e.explanation
        }),
        s.jsxs("div", {
          className: "flex gap-2 text-[11px] text-text-muted",
          children: [
            s.jsxs("span", {
              children: [
                "measured ",
                s.jsx("strong", {
                  className: "text-text",
                  children: Kn(e.measured)
                }),
                " ",
                e.units
              ]
            }),
            s.jsxs("span", {
              children: [
                "limit ",
                s.jsx("strong", {
                  className: "text-text",
                  children: Kn(e.limit)
                }),
                " ",
                e.units
              ]
            })
          ]
        }),
        e.suggested_fix && s.jsxs("div", {
          className: "mt-1 rounded bg-surface-2 px-2 py-1 text-[11px]",
          children: [
            s.jsx("div", {
              className: "font-semibold opacity-80",
              children: "Suggested fix"
            }),
            s.jsx("div", {
              className: "opacity-90",
              children: ui(e.suggested_fix)
            })
          ]
        }),
        t > 0 && s.jsxs("div", {
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
  function Kn(e) {
    return Math.abs(e) >= 100 ? e.toFixed(0) : Math.abs(e) >= 10 ? e.toFixed(1) : e.toFixed(2);
  }
  function ui(e) {
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
  function di(e) {
    return e.some((t) => t.severity === "error") ? "error" : e.some((t) => t.severity === "warning") ? "warning" : "info";
  }
  function fi(e) {
    const t = /* @__PURE__ */ new Map();
    for (const o of e) {
      const n = `${an(o.anchor[0])}|${an(o.anchor[1])}|${an(o.anchor[2])}`, i = t.get(n);
      i ? i.push(o) : t.set(n, [
        o
      ]);
    }
    return Array.from(t.values());
  }
  function an(e) {
    return Math.round(e * 2);
  }
  let Ct = null, Kt = null, bn = null, Xt = null, Sn = null;
  function pi() {
    return Xt;
  }
  function Zn() {
    Sn == null ? void 0 : Sn();
  }
  function Qn(e) {
    Ct = e;
  }
  function mi() {
    const e = Ae((h) => h.scene), t = Ae((h) => h.engine), o = re((h) => h.document), { camera: n, size: i, controls: a, invalidate: r } = Re(), l = bo(), u = c.useRef(false), p = c.useRef({
      x: 0,
      y: 0,
      z: 0,
      tx: 0,
      ty: 0,
      tz: 0
    }), g = c.useRef(false);
    return c.useEffect(() => {
      var _a2, _b, _c, _d;
      if (!l || !t || !o) {
        u.current = false;
        return;
      }
      let h;
      try {
        h = t.evaluateWithSolids(o);
      } catch (v) {
        Xe.warn("gpu", `Ray-trace eval failed: ${v}`), u.current = false;
        return;
      }
      const y = (((_a2 = h.parts) == null ? void 0 : _a2.length) ?? 0) > 0, f = (((_b = h.instances) == null ? void 0 : _b.length) ?? 0) > 0;
      if (!y && !f) {
        u.current = false;
        return;
      }
      const d = l;
      (_c = d.clearScene) == null ? void 0 : _c.call(d);
      const b = (v) => {
        if (!v) return null;
        const P = o.materials[v] ?? kt(v);
        return P ? {
          color: P.color,
          metallic: P.metallic,
          roughness: P.roughness
        } : null;
      }, w = (v, C) => {
        const P = b(C);
        P && typeof d.uploadSolidWithMaterial == "function" ? d.uploadSolidWithMaterial(v, P.color[0], P.color[1], P.color[2], P.metallic, P.roughness) : d.uploadSolid(v);
      };
      let S = false, m;
      for (const v of h.parts ?? []) {
        const C = v.solid;
        if (C) {
          try {
            w(C, v.material);
          } catch (P) {
            Xe.debug("gpu", `uploadSolid failed: ${P}`);
          }
          m === void 0 && (m = v.material), S = true;
        }
      }
      if (f && ((_d = h.partDefs) == null ? void 0 : _d.length)) {
        const v = /* @__PURE__ */ new Map();
        for (const P of h.partDefs) {
          const k = P.solid;
          k && v.set(P.id, k);
        }
        const C = Pn(o);
        for (const P of h.instances ?? []) {
          const k = v.get(P.partDefId);
          if (!k) continue;
          const I = P.id ?? P.instanceId, A = (I ? C.get(I) : void 0) ?? P.transform, N = A ? k.scale(A.scale.x, A.scale.y, A.scale.z).rotate(A.rotation.x, A.rotation.y, A.rotation.z).translate(A.translation.x, A.translation.y, A.translation.z) : k;
          try {
            w(N, P.material);
          } catch (H) {
            Xe.debug("gpu", `uploadSolid (instance) failed: ${H}`);
          }
          m === void 0 && (m = P.material), S = true;
        }
      }
      if (S && m && typeof d.uploadSolidWithMaterial != "function") {
        const v = o.materials[m], C = v ? null : kt(m), P = v ?? C;
        if (P) try {
          d.setMaterial(P.color[0], P.color[1], P.color[2], P.metallic, P.roughness);
        } catch (k) {
          Xe.debug("gpu", `Failed to set material: ${k}`);
        }
      }
      if (u.current = S, S) {
        g.current = true;
        const v = n, P = (a == null ? void 0 : a.target) ?? {
          x: 0,
          y: 0,
          z: 0
        }, k = {
          position: [
            v.position.x,
            v.position.y,
            v.position.z
          ],
          target: [
            P.x,
            P.y,
            P.z
          ],
          fov: v.fov,
          width: i.width,
          height: i.height
        };
        Kt = k, p.current = {
          x: v.position.x,
          y: v.position.y,
          z: v.position.z,
          tx: P.x,
          ty: P.y,
          tz: P.z
        }, Ct && (g.current = false, Ct(k)), r();
      }
    }, [
      e,
      l,
      t,
      o,
      n,
      a,
      i,
      r
    ]), c.useEffect(() => (bn = r, () => {
      bn = null;
    }), [
      r
    ]), Ue(() => {
      if (!l || !u.current) return;
      const h = n, f = (a == null ? void 0 : a.target) ?? {
        x: 0,
        y: 0,
        z: 0
      }, d = p.current, b = 1e-3;
      if (!(Math.abs(h.position.x - d.x) > b || Math.abs(h.position.y - d.y) > b || Math.abs(h.position.z - d.z) > b || Math.abs(f.x - d.tx) > b || Math.abs(f.y - d.ty) > b || Math.abs(f.z - d.tz) > b) && !g.current) return;
      p.current = {
        x: h.position.x,
        y: h.position.y,
        z: h.position.z,
        tx: f.x,
        ty: f.y,
        tz: f.z
      };
      const S = {
        position: [
          h.position.x,
          h.position.y,
          h.position.z
        ],
        target: [
          f.x,
          f.y,
          f.z
        ],
        fov: h.fov,
        width: i.width,
        height: i.height
      };
      Kt = S, Ct && (g.current = false, Ct(S));
    }), null;
  }
  const hi = {
    off: 0,
    normals: 1,
    "face-id": 2,
    lighting: 3,
    orientation: 4
  }, gi = {
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
  };
  function xi() {
    const e = c.useRef(null), t = B((D) => D.raytraceQuality), o = B((D) => D.raytraceDebugMode), n = B((D) => D.raytraceEdgesEnabled), i = B((D) => D.raytraceEdgeDepthThreshold), a = B((D) => D.raytraceEdgeNormalThreshold), r = B((D) => D.raytraceEdgeSilhouetteEnabled), l = B((D) => D.raytraceEdgeCreaseEnabled), u = B((D) => D.raytraceEdgeBoundaryEnabled), p = B((D) => D.raytraceEdgeSilhouetteWidth), g = B((D) => D.raytraceEdgeCreaseWidth), h = B((D) => D.raytraceEdgeBoundaryWidth), y = B((D) => D.raytraceEdgeSoftness), f = B((D) => D.raytraceAoEnabled), d = B((D) => D.raytraceAoRadius), b = B((D) => D.raytraceAoIntensity), w = B((D) => D.raytraceAoBias), S = B((D) => D.raytraceAoSampleCount), m = bo(), { isDark: v } = st(), C = c.useRef("off"), P = c.useRef({
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
    }), k = c.useRef({
      enabled: true,
      radius: 0.3,
      intensity: 1,
      bias: 1e-3,
      sampleCount: 16
    }), I = c.useRef(false), A = c.useRef(null), N = c.useRef(null), H = c.useRef(t);
    c.useEffect(() => {
      H.current = t;
    }, [
      t
    ]);
    const ie = c.useCallback((D, le, fe, F, ne, ge) => {
      const X = new ImageData(new Uint8ClampedArray(le), fe, F);
      if (fe !== ne || F !== ge) {
        D.imageSmoothingEnabled = true, D.imageSmoothingQuality = "high";
        const ye = document.createElement("canvas");
        ye.width = fe, ye.height = F;
        const te = ye.getContext("2d");
        te && (te.putImageData(X, 0, 0), D.drawImage(ye, 0, 0, ne, ge));
      } else D.putImageData(X, 0, 0);
    }, []), $ = c.useCallback((D, le) => {
      if (!m || !e.current || I.current) return;
      const fe = e.current;
      if (!fe.getContext("2d")) return;
      (fe.width !== D.width || fe.height !== D.height) && (fe.width = D.width, fe.height = D.height);
      const ne = gi[le];
      let ge = Math.floor(D.width * ne.scale), X = Math.floor(D.height * ne.scale);
      const ye = ge * X;
      if (ye > ne.maxPixels) {
        const we = Math.sqrt(ne.maxPixels / ye);
        ge = Math.floor(ge * we), X = Math.floor(X * we);
      }
      I.current = true;
      const te = ge, be = X, Ve = D.width, $e = D.height, [Be, V, Ce] = D.position, [ve, ce, ae] = D.target, q = [
        Be,
        -Ce,
        V
      ], Me = [
        ve,
        -ae,
        ce
      ];
      m.render(q, Me, [
        0,
        0,
        1
      ], ge, X, D.fov * Math.PI / 180).then((we) => {
        const ke = e.current;
        if (ke) {
          const Te = ke.getContext("2d");
          Te && ie(Te, we, te, be, Ve, $e);
        }
        I.current = false;
        const Pe = B.getState();
        Pe.raytraceError !== null && Pe.setRaytraceError(null);
      }).catch((we) => {
        const ke = (we == null ? void 0 : we.message) ?? String(we);
        Xe.warn("gpu", `Render failed: ${ke}`), B.getState().setRaytraceError(ke), I.current = false;
      });
    }, [
      m,
      ie
    ]), O = c.useCallback(() => {
      N.current && (clearTimeout(N.current), N.current = null);
    }, []), ee = c.useCallback((D) => {
      var _a2;
      if (O(), !m) return;
      const fe = [
        "draft",
        "standard",
        "high"
      ].indexOf(H.current), F = [
        {
          tier: "draft",
          frames: 1,
          gap: 0
        }
      ];
      fe >= 1 && F.push({
        tier: "standard",
        frames: 4,
        gap: 80
      }), fe >= 2 && F.push({
        tier: "high",
        frames: 24,
        gap: 80
      });
      const ne = m;
      (_a2 = ne.resetAccumulation) == null ? void 0 : _a2.call(ne);
      let ge = 0, X = 0;
      const ye = () => {
        var _a3;
        if (ge >= F.length) return;
        const te = F[ge];
        if (X >= te.frames) {
          if (ge++, X = 0, ge >= F.length) return;
          (_a3 = ne.resetAccumulation) == null ? void 0 : _a3.call(ne), N.current = setTimeout(ye, F[ge].gap);
          return;
        }
        $(D, te.tier), X++;
        const be = te.tier === "high" ? 60 : 30;
        N.current = setTimeout(ye, be);
      };
      ye();
    }, [
      O,
      $,
      m
    ]);
    return c.useEffect(() => (Xt = e.current, () => {
      Xt === e.current && (Xt = null);
    }), []), c.useEffect(() => (Sn = () => {
      const D = A.current;
      D && $(D, "standard");
    }, () => {
      Sn = null;
    }), [
      $
    ]), c.useEffect(() => {
      const D = (le) => {
        A.current = le, ee(le);
      };
      return Qn(D), Kt ? D(Kt) : bn == null ? void 0 : bn(), () => {
        Qn(null);
      };
    }, [
      ee
    ]), c.useEffect(() => {
      A.current && ee(A.current);
    }, [
      t,
      ee
    ]), c.useEffect(() => {
      var _a2;
      if (!m) return;
      (_a2 = m.setTheme) == null ? void 0 : _a2.call(m, v ? 0 : 1), A.current && ee(A.current);
    }, [
      v,
      m,
      ee
    ]), c.useEffect(() => {
      if (!m || o === C.current) return;
      C.current = o;
      const D = hi[o] ?? 0, le = m;
      if (typeof le.setDebugMode != "function") {
        Xe.debug("gpu", "setDebugMode not available - WASM may need rebuild");
        return;
      }
      le.setDebugMode(D), A.current && ee(A.current);
    }, [
      o,
      m,
      ee
    ]), c.useEffect(() => {
      if (!m) return;
      const D = P.current;
      if (n === D.enabled && i === D.depth && a === D.normal && r === D.silhouette && l === D.crease && u === D.boundary && p === D.silhouetteWidth && g === D.creaseWidth && h === D.boundaryWidth && y === D.softness) return;
      P.current = {
        enabled: n,
        depth: i,
        normal: a,
        silhouette: r,
        crease: l,
        boundary: u,
        silhouetteWidth: p,
        creaseWidth: g,
        boundaryWidth: h,
        softness: y
      };
      const le = m;
      typeof le.setEdgeDetection == "function" && le.setEdgeDetection(n, i, a), typeof le.setEdgeStyle == "function" ? le.setEdgeStyle(r, l, u, 0.08, 0.08, 0.1, 1, 0.12, 0.12, 0.14, 1, 0.06, 0.06, 0.08, 1, p, g, h, y) : Xe.debug("gpu", "setEdgeStyle not available - WASM may need rebuild"), A.current && ee(A.current);
    }, [
      n,
      i,
      a,
      r,
      l,
      u,
      p,
      g,
      h,
      y,
      m,
      ee
    ]), c.useEffect(() => {
      if (!m) return;
      const D = k.current;
      if (f === D.enabled && d === D.radius && b === D.intensity && w === D.bias && S === D.sampleCount) return;
      k.current = {
        enabled: f,
        radius: d,
        intensity: b,
        bias: w,
        sampleCount: S
      };
      const le = m;
      if (typeof le.setAO != "function") {
        Xe.debug("gpu", "setAO not available - WASM may need rebuild");
        return;
      }
      const fe = f ? b : 0;
      le.setAO(d, fe, w, S), A.current && ee(A.current);
    }, [
      f,
      d,
      b,
      w,
      S,
      m,
      ee
    ]), m ? s.jsx("canvas", {
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
  const yi = Math.PI / 7, vi = 0.25, wi = 6, bi = 40;
  function Si(e, t, o, n) {
    o.copy(e);
    const i = Mi.copy(t).sub(e), a = i.length();
    a < 1e-6 ? i.set(0, -1, 0) : i.divideScalar(a);
    const r = Math.max(wi, Math.min(bi, a * vi)), l = Math.tan(yi) * r, u = Ei.set(0, 0, 1);
    Math.abs(i.dot(u)) > 0.98 && u.set(0, 1, 0);
    const p = Ci.crossVectors(i, u).normalize(), g = Pi.crossVectors(p, i).normalize(), h = Ri.copy(e).addScaledVector(i, r), y = ji.copy(p).multiplyScalar(l), f = ki.copy(g).multiplyScalar(l);
    n[0].copy(h).add(y).add(f), n[1].copy(h).sub(y).add(f), n[2].copy(h).sub(y).sub(f), n[3].copy(h).add(y).sub(f);
  }
  const Mi = new E(), Ei = new E(), Ci = new E(), Pi = new E(), Ri = new E(), ji = new E(), ki = new E(), Ii = 8, zi = Ii * 2;
  function Ai({ participant: e, goal: t }) {
    const o = Re((g) => g.invalidate), n = c.useRef(new E(...t.position)), i = c.useRef(new E(...t.target)), a = c.useRef(new E()), r = c.useRef([
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
      const g = new ut(), h = new Float32Array(zi * 3);
      return g.setAttribute("position", new Ne(h, 3)), g;
    }, []), u = c.useMemo(() => new js({
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
    return Ue(() => {
      const g = Di.set(t.position[0], t.position[1], t.position[2]), h = _i.set(t.target[0], t.target[1], t.target[2]), y = 0.15;
      n.current.lerp(g, y), i.current.lerp(h, y), Si(n.current, i.current, a.current, r.current);
      const f = l.getAttribute("position"), d = a.current, b = r.current;
      for (let m = 0; m < 4; m++) {
        const v = b[m], C = b[(m + 1) % 4];
        f.setXYZ(m * 2, v.x, v.y, v.z), f.setXYZ(m * 2 + 1, C.x, C.y, C.z);
      }
      for (let m = 0; m < 4; m++) {
        f.setXYZ(8 + m * 2, d.x, d.y, d.z);
        const v = b[m];
        f.setXYZ(8 + m * 2 + 1, v.x, v.y, v.z);
      }
      f.needsUpdate = true, l.computeBoundingSphere(), p.current && p.current.position.copy(d);
      const w = n.current.distanceToSquared(g), S = i.current.distanceToSquared(h);
      (w > 1e-4 || S > 1e-4) && o();
    }), s.jsxs("group", {
      children: [
        s.jsx("lineSegments", {
          geometry: l,
          material: u
        }),
        s.jsx("group", {
          ref: p,
          children: s.jsx(dt, {
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
  const Di = new E(), _i = new E();
  function Ti() {
    const e = It((i) => i.participants), t = B((i) => i.followMode), o = B((i) => i.followingParticipantId);
    if (t === "free") return null;
    const n = [];
    return e.forEach((i) => {
      i.id !== En && i.camera && (t === "lock" && o === i.id || n.push(s.jsx(Ai, {
        participant: i,
        goal: i.camera
      }, i.id)));
    }), s.jsx(s.Fragment, {
      children: n
    });
  }
  function Fi() {
    const e = Re((n) => n.camera), t = Re((n) => n.controls), o = c.useRef(null);
    c.useEffect(() => {
      function n() {
        const { selectedPartIds: f } = B.getState();
        if (f.size === 0) return;
        const d = Ae.getState().scene, b = re.getState().parts;
        if (!d) return;
        const w = new ot();
        let S = false;
        for (const [I, A] of d.parts.entries()) {
          const N = b[I];
          if (!N || !f.has(N.id)) continue;
          const H = A.mesh.positions;
          for (let ie = 0; ie < H.length; ie += 3) w.expandByPoint(new E(H[ie], H[ie + 1], H[ie + 2]));
          S = true;
        }
        if (!S) return;
        const m = new E();
        w.getCenter(m);
        const v = new E();
        w.getSize(v);
        const P = Math.max(v.x, v.y, v.z, 1) * 2, k = new E().copy(e.position).sub(t && "target" in t && t.target ? t.target : new E(0, 0, 0)).normalize();
        e.position.copy(m).addScaledVector(k, P), t && "target" in t && t.target && t.target.copy(m);
      }
      function i() {
        const f = Ae.getState().scene;
        if (!f) return null;
        const d = new ot(), b = new E();
        if (f.instances && f.instances.length > 0) for (const w of f.instances) {
          const S = w.transform, m = w.mesh.positions;
          for (let v = 0; v < m.length; v += 3) {
            const C = m[v], P = m[v + 1], k = m[v + 2];
            S ? b.set(C * S.scale.x + S.translation.x, P * S.scale.y + S.translation.y, k * S.scale.z + S.translation.z) : b.set(C, P, k), d.expandByPoint(b);
          }
        }
        else {
          if (f.parts.length === 0) return null;
          for (const w of f.parts) {
            const S = w.mesh.positions;
            for (let m = 0; m < S.length; m += 3) d.expandByPoint(new E(S[m], S[m + 1], S[m + 2]));
          }
        }
        return d.isEmpty() ? null : d;
      }
      function a() {
        const f = i(), d = new E();
        let b = 150;
        if (f) {
          f.getCenter(d);
          const S = new E();
          f.getSize(S), b = Math.max(S.x, S.y, S.z, 50) * 2;
        }
        const w = b / Math.sqrt(3);
        e.position.set(d.x + w, d.y + w, d.z + w), t && "target" in t && t.target && t.target.copy(d);
      }
      function r() {
        const f = i(), d = new E();
        let b = 150;
        if (f) {
          f.getCenter(d);
          const v = new E();
          f.getSize(v), b = Math.max(v.x, v.y, v.z, 50) * 2;
        }
        const w = new E(d.x, d.z, -d.y), S = t && "target" in t && t.target ? t.target : new E(0, 0, 0), m = new E().copy(e.position).sub(S);
        m.lengthSq() < 1e-6 && m.set(1, 1, 1), m.normalize(), e.position.copy(w).addScaledVector(m, b), t && "target" in t && t.target && t.target.copy(w);
      }
      function l() {
        const f = i(), d = new E();
        let b = 150;
        if (f) {
          f.getCenter(d);
          const w = new E();
          f.getSize(w), b = Math.max(w.x, w.y, w.z, 50) * 2;
        }
        e.position.set(d.x, d.y, d.z + b), t && "target" in t && t.target && t.target.copy(d);
      }
      function u() {
        const f = i(), d = new E();
        let b = 150;
        if (f) {
          f.getCenter(d);
          const w = new E();
          f.getSize(w), b = Math.max(w.x, w.y, w.z, 50) * 2;
        }
        e.position.set(d.x, d.y - b, d.z), t && "target" in t && t.target && t.target.copy(d);
      }
      function p() {
        const f = i(), d = new E();
        let b = 150;
        if (f) {
          f.getCenter(d);
          const w = new E();
          f.getSize(w), b = Math.max(w.x, w.y, w.z, 50) * 2;
        }
        e.position.set(d.x + b, d.y, d.z), t && "target" in t && t.target && t.target.copy(d);
      }
      window.addEventListener("vcad:focus-selection", n), window.addEventListener("vcad:camera-isometric", a), window.addEventListener("vcad:camera-top", l), window.addEventListener("vcad:camera-front", u), window.addEventListener("vcad:camera-right", p);
      const g = () => {
        var _a2;
        if (!t || !("target" in t) || !t.target || typeof window < "u" && new URLSearchParams(window.location.search).has("at")) return;
        const f = re.getState().documentId, d = Ae.getState().scene;
        !f || o.current === f || !(d && (d.parts.some((w) => w.mesh.indices.length > 0) || (((_a2 = d.instances) == null ? void 0 : _a2.some((w) => w.mesh.indices.length > 0)) ?? false))) || (o.current = f, r());
      };
      g();
      const h = re.subscribe(g), y = Ae.subscribe(g);
      return () => {
        window.removeEventListener("vcad:focus-selection", n), window.removeEventListener("vcad:camera-isometric", a), window.removeEventListener("vcad:camera-top", l), window.removeEventListener("vcad:camera-front", u), window.removeEventListener("vcad:camera-right", p), h(), y();
      };
    }, [
      e,
      t
    ]);
  }
  function Li() {
    const e = Re((i) => i.gl), t = Re((i) => i.invalidate), [o, n] = c.useState(false);
    return c.useEffect(() => {
      const i = e.domElement;
      if (!i) return;
      let a;
      const r = () => {
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
        p.preventDefault(), n(true), r();
      }, u = () => {
        clearTimeout(a), n(false);
      };
      return i.addEventListener("webglcontextlost", l, false), i.addEventListener("webglcontextrestored", u, false), () => {
        clearTimeout(a), i.removeEventListener("webglcontextlost", l, false), i.removeEventListener("webglcontextrestored", u, false);
      };
    }, [
      e
    ]), c.useEffect(() => {
      if (o) return;
      t();
      const i = requestAnimationFrame(() => t());
      return () => cancelAnimationFrame(i);
    }, [
      o,
      t
    ]), o;
  }
  function Ni() {
    const e = Yt((a) => a.inputDevice), t = Yt((a) => a.detectedDevice), o = Yt((a) => a.setDetectedDevice), n = c.useRef([]), i = c.useRef(false);
    c.useEffect(() => {
      if (e !== "auto" || t !== null) {
        i.current = true;
        return;
      }
      i.current = false, n.current = [];
      const a = (r) => {
        if (i.current || (n.current.push({
          deltaMode: r.deltaMode,
          hasHorizontal: Math.abs(r.deltaX) > 0.5,
          deltaY: Math.abs(r.deltaY)
        }), n.current.length < 5)) return;
        i.current = true;
        const l = n.current;
        if (l.some((h) => h.deltaMode === 1)) {
          o("mouse");
          return;
        }
        if (l.filter((h) => h.hasHorizontal).length >= 2) {
          o("trackpad");
          return;
        }
        l.reduce((h, y) => h + y.deltaY, 0) / l.length < 20 ? o("trackpad") : o("mouse");
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
  function Oi() {
    var _a2;
    const e = c.useRef(null), t = c.useRef(0), o = c.useRef([]), n = re((m) => m.document.joints), i = re((m) => m.setJointState), a = (n == null ? void 0 : n.map((m) => m.id).join(",")) ?? "", r = Ge((m) => m.mode), l = Ge((m) => m.timestep), u = Ge((m) => m.playbackSpeed), p = Ge((m) => m.setPhysicsAvailable), g = Ge((m) => m.setJointStates), h = Ge((m) => m.setObservation), y = Ge((m) => m.setMode);
    c.useEffect(() => {
      In().then((m) => {
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
      async function v() {
        if (!(!await In() || !m)) try {
          const P = re.getState().document, k = [], I = await ss.create(P, {
            endEffectorIds: k,
            dt: 1 / 240,
            substeps: 4
          });
          if (!m) {
            I.close();
            return;
          }
          e.current && e.current.close(), e.current = I;
          const A = re.getState().document.joints ?? [];
          o.current = A.map((ie) => ie.id);
          const N = A.map((ie) => ({
            id: ie.id,
            name: ie.name ?? ie.id,
            position: ie.state ?? 0,
            velocity: 0,
            torque: 0,
            targetVelocity: 0,
            limits: null
          }));
          g(N);
          const H = I.observe();
          h({
            jointPositions: H.joint_positions,
            jointVelocities: H.joint_velocities,
            endEffectorPoses: H.end_effector_poses
          }), console.log(`[Physics] Initialized with ${I.numJoints} joints, ${I.actionDim} action dim`);
        } catch (P) {
          console.error("[Physics] Failed to initialize:", P);
        }
      }
      return v(), () => {
        m = false;
      };
    }, [
      a,
      g,
      h
    ]), c.useEffect(() => () => {
      e.current && (e.current.close(), e.current = null);
    }, []);
    const f = c.useCallback(() => Ge.getState().jointStates.map((v) => v.position), []), d = c.useCallback(() => Ge.getState().jointStates.map((v) => v.torque), []), b = c.useCallback(() => Ge.getState().jointStates.map((v) => v.targetVelocity ?? 0), []), w = c.useCallback((m) => {
      h({
        jointPositions: m.joint_positions,
        jointVelocities: m.joint_velocities,
        endEffectorPoses: m.end_effector_poses
      });
      const C = Ge.getState().jointStates.map((A, N) => ({
        ...A,
        position: m.joint_positions[N] ?? A.position,
        velocity: m.joint_velocities[N] ?? A.velocity
      }));
      g(C);
      const P = re.getState().document, k = structuredClone(P);
      o.current.forEach((A, N) => {
        var _a3;
        const H = (_a3 = k.joints) == null ? void 0 : _a3.find((ie) => ie.id === A);
        H && m.joint_positions[N] !== void 0 && (H.state = m.joint_positions[N]);
      });
      const I = Pn(k);
      Ae.getState().updateInstanceTransforms(I);
    }, [
      h,
      g
    ]), { invalidate: S } = Re();
    return Ue((m, v) => {
      const C = e.current;
      if (C && !(r === "off" || r === "paused")) {
        if (r === "stepping") {
          const P = Ge.getState().actionType, k = P === "torque" ? d() : P === "velocity" ? b() : f(), I = C.step(P, k);
          w(I.observation), y("paused");
          return;
        }
        if (r === "running") {
          const P = v * u;
          t.current += P;
          const k = Ge.getState().actionType;
          for (; t.current >= l; ) {
            const I = k === "torque" ? d() : k === "velocity" ? b() : f(), A = C.step(k, I);
            Math.random() < 0.01 && console.log("[Physics] actionType:", k, "actions:", I, "positions:", A.observation.joint_positions), w(A.observation), t.current -= l;
          }
          S();
        }
      }
    }), c.useEffect(() => {
      if (r === "off" && e.current) {
        const m = Ge.getState().jointStates;
        o.current.forEach((C, P) => {
          var _a3;
          const k = (_a3 = m[P]) == null ? void 0 : _a3.position;
          k !== void 0 && i(C, k, true);
        });
        const v = e.current.reset();
        w(v), t.current = 0;
      }
    }, [
      r,
      w,
      i
    ]), {
      isInitialized: !!e.current,
      numJoints: ((_a2 = e.current) == null ? void 0 : _a2.numJoints) ?? 0
    };
  }
  function Bi() {
    const e = c.useRef(null), { invalidate: t } = Re();
    c.useEffect(() => Nt.subscribe(() => {
      t();
    }), [
      t
    ]), Ue((o, n) => {
      const i = re.getState().document.timeline;
      if (!i || i.tracks.length === 0) return;
      const a = Nt.getState();
      if (!a.visible) {
        e.current = null;
        return;
      }
      const r = Ge.getState().mode;
      if (r === "running" || r === "stepping") return;
      const l = Math.max(i.durationS, 1e-6);
      let u = a.timeS;
      if (a.playing ? (u += n * a.speed, u >= l && (a.loop ? u %= l : (u = l, Nt.setState({
        playing: false
      }))), Nt.setState({
        timeS: u
      })) : u = Math.min(Math.max(u, 0), l), e.current === u) return;
      e.current = u;
      const p = Ws(i, u);
      if (p.size === 0) return;
      const g = re.getState().document, h = structuredClone(g);
      let y = false;
      for (const d of h.joints ?? []) {
        const b = p.get(d.id);
        b !== void 0 && (d.state = b, y = true);
      }
      if (!y) return;
      const f = Pn(h);
      Ae.getState().updateInstanceTransforms(f), t();
    });
  }
  const Vi = [
    "video/mp4;codecs=avc1.640028",
    "video/mp4;codecs=avc1.42E01E",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm"
  ], $i = 12e6, Wi = 60, Gi = 250;
  function Hi() {
    if (typeof MediaRecorder > "u") return null;
    for (const e of Vi) if (MediaRecorder.isTypeSupported(e)) return e;
    return null;
  }
  function Yi(e) {
    return e.startsWith("video/mp4") ? "mp4" : e.startsWith("video/webm") ? "webm" : "bin";
  }
  function Xi(e) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "untitled";
  }
  function Ui() {
    return (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
  }
  function qi() {
    const { gl: e } = Re(), t = Qe((a) => a.status), o = B((a) => a.renderMode), n = Ge((a) => a.mode), i = c.useRef({
      recorder: null,
      chunks: [],
      mimeType: null,
      rafId: null,
      raytraceDriving: false
    });
    c.useEffect(() => {
      const a = Qe.getState(), r = i.current;
      if (t === "recording" && !r.recorder) {
        const l = Hi();
        if (!l) {
          a.setError("MediaRecorder is not supported in this browser.");
          return;
        }
        const u = pi(), p = o === "raytrace" && u !== null;
        o === "raytrace" && !p && Xe.warn("app", "Raytrace overlay not mounted at record start; falling back to WebGL canvas.");
        const h = p ? u : e.domElement;
        if (typeof h.captureStream != "function") {
          a.setError("Canvas.captureStream is not supported in this browser.");
          return;
        }
        const y = h.captureStream(Wi);
        let f;
        try {
          f = new MediaRecorder(y, {
            mimeType: l,
            videoBitsPerSecond: $i
          });
        } catch (d) {
          a.setError(d instanceof Error ? d.message : "Failed to create MediaRecorder.");
          return;
        }
        r.chunks = [], r.recorder = f, r.mimeType = l, r.raytraceDriving = p, f.ondataavailable = (d) => {
          d.data && d.data.size > 0 && (r.chunks.push(d.data), Qe.getState().addBytes(d.data.size));
        }, f.onerror = (d) => {
          var _a2;
          const w = ((_a2 = d.error) == null ? void 0 : _a2.message) ?? "MediaRecorder error";
          Xe.warn("app", `Recorder error: ${w}`), Qe.getState().setError(w);
        }, f.onstop = () => {
          const d = r.chunks, b = r.mimeType ?? "video/webm";
          if (r.chunks = [], r.recorder = null, r.mimeType = null, r.raytraceDriving = false, r.rafId !== null && (cancelAnimationFrame(r.rafId), r.rafId = null), d.length === 0) {
            Qe.getState().reset();
            return;
          }
          const w = new Blob(d, {
            type: b
          }), S = re.getState().documentName ?? "untitled", m = `vcad-sim-${Xi(S)}-${Ui()}.${Yi(b)}`;
          rs(w, m), Qe.getState().reset();
        };
        try {
          f.start(Gi), Qe.getState().setMimeType(l);
        } catch (d) {
          r.recorder = null, r.mimeType = null, r.raytraceDriving = false, a.setError(d instanceof Error ? d.message : "Failed to start recording.");
          return;
        }
        if (r.raytraceDriving) {
          const d = () => {
            i.current.raytraceDriving && (Zn(), i.current.rafId = requestAnimationFrame(d));
          };
          i.current.rafId = requestAnimationFrame(d);
        }
        return;
      }
      if (t === "saving" && r.recorder) {
        r.raytraceDriving = false, r.rafId !== null && (cancelAnimationFrame(r.rafId), r.rafId = null);
        try {
          r.recorder.state !== "inactive" && r.recorder.stop();
        } catch (l) {
          Xe.warn("app", `Recorder stop failed: ${l}`), Qe.getState().reset();
        }
        return;
      }
      if (t === "idle" && r.recorder) {
        r.chunks = [];
        try {
          r.recorder.ondataavailable = null, r.recorder.onstop = null, r.recorder.onerror = null, r.recorder.state !== "inactive" && r.recorder.stop();
        } catch {
        }
        r.recorder = null, r.mimeType = null, r.raytraceDriving = false, r.rafId !== null && (cancelAnimationFrame(r.rafId), r.rafId = null);
      }
    }, [
      t,
      o,
      e
    ]), c.useEffect(() => {
      const a = i.current, r = a.recorder;
      if (r) if (n === "paused" && r.state === "recording") try {
        r.pause(), Qe.getState().pause(), a.rafId !== null && (cancelAnimationFrame(a.rafId), a.rafId = null);
      } catch (l) {
        Xe.warn("app", `Recorder pause failed: ${l}`);
      }
      else if (n === "running" && r.state === "paused") try {
        if (r.resume(), Qe.getState().resume(), a.raytraceDriving && a.rafId === null) {
          const l = () => {
            i.current.raytraceDriving && (Zn(), i.current.rafId = requestAnimationFrame(l));
          };
          a.rafId = requestAnimationFrame(l);
        }
      } catch (l) {
        Xe.warn("app", `Recorder resume failed: ${l}`);
      }
      else n === "off" && r.state !== "inactive" && Qe.getState().stop();
    }, [
      n,
      t
    ]), c.useEffect(() => () => {
      const a = i.current;
      a.rafId !== null && (cancelAnimationFrame(a.rafId), a.rafId = null);
      const r = a.recorder;
      if (r && r.state !== "inactive") try {
        r.ondataavailable = null, r.onstop = null, r.onerror = null, r.stop();
      } catch {
      }
      a.recorder = null, a.chunks = [], a.mimeType = null, a.raytraceDriving = false;
    }, []);
  }
  function Ki(e, t) {
    const o = e ?? {};
    return (o.shift ?? false) === (t.shift ?? false) && (o.ctrl ?? false) === (t.ctrl ?? false) && (o.meta ?? false) === (t.meta ?? false) && (o.alt ?? false) === (t.alt ?? false);
  }
  function Zi(e) {
    return {
      shift: e.shiftKey,
      ctrl: e.ctrlKey,
      meta: e.metaKey,
      alt: e.altKey
    };
  }
  function Qi(e, t, o) {
    const i = [
      ...e.filter((a) => !a.device || a.device === o)
    ].sort((a, r) => {
      const l = (u) => Object.values(u ?? {}).filter(Boolean).length;
      return l(r.modifiers) - l(a.modifiers);
    });
    for (const a of i) if (Ki(a.modifiers, t)) return a.action;
    return "none";
  }
  function Ji(e, t) {
    const o = {
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2
    }, n = (r) => {
      switch (r) {
        case "orbit":
          return o.ROTATE;
        case "zoom":
          return o.DOLLY;
        case "pan":
          return o.PAN;
        default:
          return;
      }
    }, i = e.mouseBindings.filter((r) => !r.device || r.device === t), a = (r) => {
      var _a2;
      return ((_a2 = i.find((u) => {
        var _a3, _b, _c, _d;
        return u.button === r && !((_a3 = u.modifiers) == null ? void 0 : _a3.shift) && !((_b = u.modifiers) == null ? void 0 : _b.ctrl) && !((_c = u.modifiers) == null ? void 0 : _c.meta) && !((_d = u.modifiers) == null ? void 0 : _d.alt);
      })) == null ? void 0 : _a2.action) ?? "none";
    };
    return {
      LEFT: n(a("left")),
      MIDDLE: n(a("middle")),
      RIGHT: n(a("right"))
    };
  }
  const ea = {
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
    return (ea[e] ?? 0) * (1 + t * 4);
  }
  function yt(e, t, o = 0) {
    return t / 2 + Dt(e, o);
  }
  new E();
  new E();
  function Jn(e, t, o) {
    let n = e.x, i = e.y;
    return o && t > 0 && (n = Math.round(n / t) * t, i = Math.round(i / t) * t), {
      x: n,
      y: i
    };
  }
  function ta(e, t) {
    var _a2;
    return ((_a2 = e.find((n) => n.layer === t)) == null ? void 0 : _a2.color) ?? "#888";
  }
  function Lo(e, t) {
    var _a2;
    return ((_a2 = e.find((n) => n.layer === t)) == null ? void 0 : _a2.visible) ?? false;
  }
  const na = 120, eo = new Oe("#3b82f6"), oa = /* @__PURE__ */ new Set([
    "component",
    "silkscreen"
  ]), sa = /* @__PURE__ */ new Set([
    "laminate",
    "substrate",
    "mask"
  ]);
  function to(e, t) {
    if (!e || t <= 0) return 0;
    const o = e;
    return Dt(o, t) - Dt(o, 0);
  }
  function ra(e, t, o) {
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
  function ia({ pcb: e, layers: t, activeNet: o, hoveredNet: n, selection: i, explosion: a, showBoard: r }) {
    const { invalidate: l } = Re(), [u, p] = c.useState([]), g = c.useRef(0);
    c.useEffect(() => {
      const d = ++g.current, b = setTimeout(() => {
        is(e).then((w) => {
          g.current === d && (p(w), l());
        }).catch((w) => console.error("[PcbKernelBoard] preview meshes failed:", w));
      }, na);
      return () => clearTimeout(b);
    }, [
      e,
      l
    ]);
    const h = c.useMemo(() => u.filter((d) => !oa.has(d.role)).map((d, b) => {
      var _a2, _b, _c;
      const w = new ut();
      w.setAttribute("position", new zt(d.positions, 3)), d.normals.length === d.positions.length ? w.setAttribute("normal", new zt(d.normals, 3)) : w.computeVertexNormals(), w.setIndex(d.indices);
      const S = d.alpha ?? 1, m = new ks({
        color: new Oe(d.color[0], d.color[1], d.color[2]),
        metalness: d.metalness,
        roughness: d.roughness,
        envMapIntensity: 0.5,
        clearcoat: d.clearcoat ?? 0,
        clearcoatRoughness: d.clearcoat_roughness ?? 0,
        ...S < 1 ? {
          transparent: true,
          opacity: S,
          depthWrite: false,
          side: He
        } : {},
        ...(((_a2 = d.emissive) == null ? void 0 : _a2[0]) ?? 0) > 0 || (((_b = d.emissive) == null ? void 0 : _b[1]) ?? 0) > 0 || (((_c = d.emissive) == null ? void 0 : _c[2]) ?? 0) > 0 ? {
          emissive: new Oe(d.emissive[0], d.emissive[1], d.emissive[2]),
          emissiveIntensity: 1
        } : {}
      });
      return {
        key: `${d.role}-${d.layer ?? "all"}-${b}`,
        role: d.role,
        layer: d.layer,
        geometry: w,
        material: m,
        entities: d.entities ?? []
      };
    }), [
      u
    ]);
    c.useEffect(() => () => h.forEach((d) => {
      d.geometry.dispose(), d.material.dispose();
    }), [
      h
    ]);
    const y = c.useMemo(() => {
      const d = [];
      for (const b of h) {
        if (b.entities.length === 0) continue;
        const w = b.entities.filter((I) => o != null && I.net === o || n != null && I.net === n || ra(I, e, i));
        if (w.length === 0) continue;
        const S = b.geometry.getIndex();
        let m = 0;
        for (const I of w) m += I.count;
        const v = new Uint32Array(m);
        let C = 0;
        for (const I of w) for (let A = 0; A < I.count; A++) v[C++] = S.getX(I.start + A);
        const P = new ut();
        P.setAttribute("position", b.geometry.getAttribute("position"));
        const k = b.geometry.getAttribute("normal");
        k && P.setAttribute("normal", k), P.setIndex(new Ne(v, 1)), d.push({
          key: `hl-${b.key}`,
          geometry: P
        });
      }
      return d;
    }, [
      h,
      e,
      o,
      n,
      i
    ]);
    c.useEffect(() => () => y.forEach((d) => d.geometry.dispose()), [
      y
    ]);
    const f = c.useMemo(() => {
      const d = /* @__PURE__ */ new Map();
      for (const b of h) d.set(`hl-${b.key}`, to(b.layer, a));
      return d;
    }, [
      h,
      a
    ]);
    return s.jsxs("group", {
      children: [
        h.map((d) => sa.has(d.role) && !r || d.layer && !Lo(t, d.layer) ? null : s.jsx("mesh", {
          geometry: d.geometry,
          material: d.material,
          position: [
            0,
            0,
            to(d.layer, a)
          ],
          renderOrder: d.role === "mask" ? 1 : 0
        }, d.key)),
        y.map((d) => s.jsx("mesh", {
          geometry: d.geometry,
          position: [
            0,
            0,
            f.get(d.key) ?? 0
          ],
          renderOrder: 2,
          children: s.jsx("meshStandardMaterial", {
            color: eo,
            emissive: eo,
            emissiveIntensity: 0.55,
            roughness: 0.35,
            metalness: 0.2,
            polygonOffset: true,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -2
          })
        }, d.key))
      ]
    });
  }
  function aa(e, t, o, n, i, a) {
    const r = yt(e.layer, i, a), l = Math.cos(n), u = Math.sin(n), p = (g, h) => {
      const y = g * l - h * u + t, f = g * u + h * l + o;
      return new E(y, f, r);
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
        const g = p(e.start.x, e.start.y), h = p(e.end.x, e.start.y), y = p(e.end.x, e.end.y), f = p(e.start.x, e.end.y);
        return {
          points: [
            g,
            h,
            y,
            f,
            g
          ],
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      case "Circle": {
        const h = [];
        for (let y = 0; y <= 24; y++) {
          const f = y / 24 * Math.PI * 2, d = e.center.x + Math.cos(f) * e.radius, b = e.center.y + Math.sin(f) * e.radius;
          h.push(p(d, b));
        }
        return {
          points: h,
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      case "Polygon": {
        const g = e.vertices.map((h) => p(h.x, h.y));
        return g.length > 0 && g.push(g[0]), {
          points: g,
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      default:
        return null;
    }
  }
  function ca({ footprint: e, layers: t, boardThickness: o, highlight: n, explosion: i, interfering: a }) {
    const r = (e.rotation ?? 0) * Math.PI / 180, l = c.useMemo(() => e.graphics ? e.graphics.map((p) => aa(p, e.position.x, e.position.y, r, o, i)).filter((p) => p !== null && Lo(t, p.layer)) : [], [
      e,
      t,
      o,
      r,
      i
    ]), u = yt(e.front !== false ? "FSilkS" : "BSilkS", o, i);
    return s.jsxs("group", {
      children: [
        l.map((p, g) => s.jsxs("line", {
          children: [
            s.jsx("bufferGeometry", {
              children: s.jsx("bufferAttribute", {
                attach: "attributes-position",
                args: [
                  new Float32Array(p.points.flatMap((h) => [
                    h.x,
                    h.y,
                    h.z
                  ])),
                  3
                ]
              })
            }),
            s.jsx("lineBasicMaterial", {
              color: a ? "#ef4444" : n ? "#3b82f6" : ta(t, p.layer),
              linewidth: 1
            })
          ]
        }, g)),
        s.jsx(Vo, {
          position: [
            e.position.x,
            e.position.y,
            u + 0.05
          ],
          rotation: [
            0,
            0,
            r
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
  const no = new Oe("#ef4444"), la = new Oe(0, 0, 0);
  function ua() {
    const e = he((a) => a.componentBodies), t = he((a) => a.showComponentBodies), o = he((a) => a.interferingFootprints), n = c.useMemo(() => new Set(o), [
      o
    ]), i = c.useMemo(() => e.map((a, r) => {
      const l = new ut();
      l.setAttribute("position", new zt(a.positions, 3)), a.normals.length === a.positions.length && l.setAttribute("normal", new zt(a.normals, 3)), l.setIndex(a.indices), a.normals.length !== a.positions.length && l.computeVertexNormals();
      const u = a.emissive ?? [
        0,
        0,
        0
      ];
      return {
        key: `body-${r}`,
        geo: l,
        ref: a.footprint_ref,
        color: new Oe(a.color[0], a.color[1], a.color[2]),
        metalness: a.metalness,
        roughness: a.roughness ?? 0.45,
        emissive: new Oe(u[0], u[1], u[2]),
        emissiveOn: u[0] > 0 || u[1] > 0 || u[2] > 0
      };
    }), [
      e
    ]);
    return c.useEffect(() => () => i.forEach((a) => a.geo.dispose()), [
      i
    ]), !t || i.length === 0 ? null : s.jsx("group", {
      children: i.map((a) => {
        const r = n.has(a.ref);
        return s.jsx("mesh", {
          geometry: a.geo,
          castShadow: true,
          receiveShadow: true,
          children: s.jsx("meshStandardMaterial", {
            color: r ? no : a.color,
            metalness: r ? 0.1 : a.metalness,
            roughness: r ? 0.45 : a.roughness,
            emissive: r ? no : a.emissiveOn ? a.emissive : la,
            emissiveIntensity: r ? 0.45 : a.emissiveOn ? 2.5 : 0
          })
        }, a.key);
      })
    });
  }
  function da(e, t, o) {
    if (!t) return [];
    const n = [], i = /* @__PURE__ */ new Map();
    for (const a of e) for (const r of a.pads) {
      const l = `${a.ref}:${r.number}`;
      i.set(l, {
        x: a.position.x + r.position.x,
        y: a.position.y + r.position.y
      });
    }
    for (const a of t.nets) if (!(a.connections.length < 2 || o.some((l) => l.net === a.name))) for (let l = 0; l < a.connections.length - 1; l++) {
      const u = a.connections[l], p = a.connections[l + 1], g = i.get(`${u.component_ref}:${u.pin_number}`), h = i.get(`${p.component_ref}:${p.pin_number}`);
      g && h && n.push({
        net: a.name,
        from: g,
        to: h,
        fpRef: u.component_ref,
        padNum: u.pin_number
      });
    }
    return n;
  }
  const fa = "#3b82f6", pa = "#555555";
  function ma({ pcb: e, netlist: t, activeNet: o, hoveredNet: n, boardThickness: i, explosion: a, onStartRoute: r, onHoverNet: l }) {
    const u = c.useMemo(() => da(e.footprints, t, e.traces), [
      e.footprints,
      t,
      e.traces
    ]), p = yt("FCu", i, a) + 0.1;
    return u.length === 0 ? null : s.jsx("group", {
      children: u.map((g, h) => {
        const f = g.net === o || g.net === n ? fa : pa, d = new Float32Array([
          g.from.x,
          g.from.y,
          p,
          g.to.x,
          g.to.y,
          p
        ]);
        return s.jsxs("line", {
          onClick: (b) => {
            b.stopPropagation(), r(g.fpRef, g.padNum, g.net);
          },
          onPointerEnter: () => l(g.net),
          onPointerLeave: () => l(null),
          children: [
            s.jsx("bufferGeometry", {
              children: s.jsx("bufferAttribute", {
                attach: "attributes-position",
                args: [
                  d,
                  3
                ]
              })
            }),
            s.jsx("lineDashedMaterial", {
              color: f,
              dashSize: 0.5,
              gapSize: 0.5,
              linewidth: 1
            })
          ]
        }, h);
      })
    });
  }
  const oo = "#3b82f6";
  function ha({ pcb: e, routeStartPad: t, routePreview: o, boardThickness: n, activeLayer: i, explosion: a }) {
    if (!t || o.length === 0) return null;
    const r = e.footprints.find((v) => v.ref === t.fpRef), l = r == null ? void 0 : r.pads.find((v) => v.number === t.padNum);
    if (!r || !l) return null;
    const u = {
      x: r.position.x + l.position.x,
      y: r.position.y + l.position.y
    }, p = o[o.length - 1], g = yt(i, n, a) + 0.02, h = e.rules.defaultRules.traceWidth, y = e.rules.defaultRules.clearance, f = p.x - u.x, d = p.y - u.y, b = Math.sqrt(f * f + d * d);
    if (b < 0.01) return null;
    const w = Math.atan2(d, f), S = (u.x + p.x) / 2, m = (u.y + p.y) / 2;
    return s.jsxs("group", {
      children: [
        s.jsxs("mesh", {
          position: [
            S,
            m,
            g - 0.01
          ],
          rotation: [
            0,
            0,
            w
          ],
          children: [
            s.jsx("boxGeometry", {
              args: [
                b,
                h + y * 2,
                0.02
              ]
            }),
            s.jsx("meshBasicMaterial", {
              color: oo,
              transparent: true,
              opacity: 0.15
            })
          ]
        }),
        s.jsxs("mesh", {
          position: [
            S,
            m,
            g
          ],
          rotation: [
            0,
            0,
            w
          ],
          children: [
            s.jsx("boxGeometry", {
              args: [
                b,
                h,
                0.035
              ]
            }),
            s.jsx("meshBasicMaterial", {
              color: oo,
              transparent: true,
              opacity: 0.7
            })
          ]
        })
      ]
    });
  }
  function ga({ violation: e, z: t }) {
    const o = c.useRef(null);
    Ue(({ clock: i }) => {
      if (!o.current) return;
      const a = i.getElapsedTime(), r = 0.6 + 0.4 * Math.sin(a * 3);
      o.current.scale.set(r, r, 1);
    });
    const n = e.severity === "Error" ? "#ef4444" : "#f59e0b";
    return s.jsxs("mesh", {
      ref: o,
      position: [
        e.position.x,
        e.position.y,
        t
      ],
      children: [
        s.jsx("ringGeometry", {
          args: [
            0.6,
            0.8,
            24
          ]
        }),
        s.jsx("meshBasicMaterial", {
          color: n,
          transparent: true,
          opacity: 0.8,
          side: He
        })
      ]
    });
  }
  function xa({ violations: e, boardThickness: t, explosion: o }) {
    if (e.length === 0) return null;
    const n = yt("FCu", t, o) + 0.15;
    return s.jsx("group", {
      children: e.map((i, a) => s.jsx(ga, {
        violation: i,
        z: n
      }, a))
    });
  }
  function ya({ showBoard: e = true } = {}) {
    const { invalidate: t } = Re(), o = c.useRef(null), n = c.useRef(null), i = _t((V) => V.activeBoardNodeId), a = re((V) => V.document), r = i != null ? Rn(a, i) : null, l = he((V) => V.selection), u = he((V) => V.hoveredNet), p = he((V) => V.netlist), g = he((V) => V.pcbLayers), h = he((V) => V.pcbGridSize), y = he((V) => V.pcbSnapToGrid), f = he((V) => V.pcbActiveLayer), d = he((V) => V.drcViolations), b = he((V) => V.routeActive), w = he((V) => V.routePreview), S = he((V) => V.routeStartPad), m = he((V) => V.pcbTool), v = he((V) => V.pcbDragging), C = he((V) => V.stackupExplosion), P = he((V) => V.interferingFootprints), k = he((V) => V.select), I = he((V) => V.setHoveredNet), A = he((V) => V.startRouteFromRatsnest), N = he((V) => V.updateRoutePreview), H = he((V) => V.startPcbDrag), ie = he((V) => V.cancelPcbDrag), $ = re((V) => V.moveFootprint), O = re((V) => V.removeTrace), Z = re((V) => V.removeVia), ee = c.useMemo(() => l.type === "net" ? l.netId : l.type === "trace" || l.type === "via" || l.type === "pad" ? l.net : null, [
      l
    ]), D = c.useMemo(() => l.type === "footprint" || l.type === "component" ? l.ref : null, [
      l
    ]), le = c.useRef(null), fe = c.useCallback((V) => {
      if (!r || V.button !== 0) return;
      V.stopPropagation();
      const Ce = V.point, ve = n.current ? n.current.worldToLocal(Ce.clone()) : Ce, ce = Jn(ve, h, y);
      if (m === "move") for (let ae = r.footprints.length - 1; ae >= 0; ae--) {
        const q = r.footprints[ae], Me = 5, we = 5;
        if (ce.x >= q.position.x - Me && ce.x <= q.position.x + Me && ce.y >= q.position.y - we && ce.y <= q.position.y + we) {
          H(ae, q.position), le.current = {
            fpIdx: ae,
            startWorld: ce
          };
          return;
        }
      }
      if (m === "select") {
        for (let ae = r.footprints.length - 1; ae >= 0; ae--) {
          const q = r.footprints[ae];
          for (const ke of q.pads) {
            const Pe = q.position.x + ke.position.x, Te = q.position.y + ke.position.y;
            if (Math.sqrt((ce.x - Pe) ** 2 + (ce.y - Te) ** 2) < 1.5) {
              k({
                type: "pad",
                fpRef: q.ref,
                padNum: ke.number,
                net: ke.net ?? ""
              });
              return;
            }
          }
          const Me = 5, we = 5;
          if (ce.x >= q.position.x - Me && ce.x <= q.position.x + Me && ce.y >= q.position.y - we && ce.y <= q.position.y + we) {
            k({
              type: "footprint",
              ref: q.ref
            });
            return;
          }
        }
        for (let ae = 0; ae < r.traces.length; ae++) {
          const q = r.traces[ae], Me = q.end.x - q.start.x, we = q.end.y - q.start.y, ke = Me * Me + we * we;
          if (ke < 1e-6) continue;
          let Pe = ((ce.x - q.start.x) * Me + (ce.y - q.start.y) * we) / ke;
          Pe = Math.max(0, Math.min(1, Pe));
          const Te = q.start.x + Pe * Me, qe = q.start.y + Pe * we;
          if (Math.sqrt((ce.x - Te) ** 2 + (ce.y - qe) ** 2) < q.width / 2 + 0.5) {
            k({
              type: "trace",
              idx: ae,
              net: q.net
            });
            return;
          }
        }
        for (let ae = 0; ae < r.vias.length; ae++) {
          const q = r.vias[ae];
          if (Math.sqrt((ce.x - q.position.x) ** 2 + (ce.y - q.position.y) ** 2) < q.diameter / 2 + 0.3) {
            k({
              type: "via",
              idx: ae,
              net: q.net
            });
            return;
          }
        }
        k({
          type: "none"
        });
      }
      if (m === "delete") {
        for (let ae = 0; ae < r.traces.length; ae++) {
          const q = r.traces[ae], Me = q.end.x - q.start.x, we = q.end.y - q.start.y, ke = Me * Me + we * we;
          if (ke < 1e-6) continue;
          let Pe = ((ce.x - q.start.x) * Me + (ce.y - q.start.y) * we) / ke;
          Pe = Math.max(0, Math.min(1, Pe));
          const Te = q.start.x + Pe * Me, qe = q.start.y + Pe * we;
          if (Math.sqrt((ce.x - Te) ** 2 + (ce.y - qe) ** 2) < q.width / 2 + 0.5 && i != null) {
            O(i, ae);
            return;
          }
        }
        for (let ae = 0; ae < r.vias.length; ae++) {
          const q = r.vias[ae];
          if (Math.sqrt((ce.x - q.position.x) ** 2 + (ce.y - q.position.y) ** 2) < q.diameter / 2 + 0.3 && i != null) {
            Z(i, ae);
            return;
          }
        }
      }
      if (m === "route") for (const ae of r.footprints) for (const q of ae.pads) {
        const Me = ae.position.x + q.position.x, we = ae.position.y + q.position.y;
        if (Math.sqrt((ce.x - Me) ** 2 + (ce.y - we) ** 2) < 1.5) {
          he.getState().startRoute(ae.ref, q.number, q.net ?? "");
          return;
        }
      }
    }, [
      r,
      m,
      h,
      y,
      i,
      k,
      H,
      O,
      Z
    ]), F = c.useCallback((V) => {
      if (!r) return;
      const Ce = V.point, ve = n.current ? n.current.worldToLocal(Ce.clone()) : Ce, ce = Jn(ve, h, y);
      if (v && i != null) {
        $(i, v.fpIdx, {
          x: ce.x,
          y: ce.y,
          z: 0
        }), t();
        return;
      }
      b && (N([
        ce
      ]), t());
    }, [
      r,
      v,
      b,
      h,
      y,
      i,
      $,
      N,
      t
    ]), ne = c.useCallback(() => {
      v && ie();
    }, [
      v,
      ie
    ]);
    if (!r) return null;
    const ge = r.outline.thickness;
    let X = 1 / 0, ye = -1 / 0, te = 1 / 0, be = -1 / 0;
    for (const V of r.outline.vertices) V.x < X && (X = V.x), V.x > ye && (ye = V.x), V.y < te && (te = V.y), V.y > be && (be = V.y);
    const Ve = isFinite(X) ? (X + ye) / 2 : 0, $e = isFinite(te) ? (te + be) / 2 : 0, Be = yt("FCu", ge);
    return s.jsxs("group", {
      ref: n,
      children: [
        s.jsx(vo, {
          position: [
            Ve,
            $e,
            Be - 0.05
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
          cellSize: h,
          cellColor: "#333333",
          sectionSize: h * 10,
          sectionColor: "#444444",
          fadeDistance: 100,
          infiniteGrid: true
        }),
        s.jsx($o, {
          ref: o,
          args: [
            500,
            500
          ],
          position: [
            Ve,
            $e,
            Be
          ],
          visible: false,
          onPointerDown: fe,
          onPointerMove: F,
          onPointerUp: ne
        }),
        s.jsx(ia, {
          pcb: r,
          layers: g,
          activeNet: ee,
          hoveredNet: u,
          selection: l,
          explosion: C,
          showBoard: e
        }),
        r.footprints.map((V, Ce) => s.jsx(ca, {
          footprint: V,
          layers: g,
          boardThickness: ge,
          highlight: D === V.ref,
          interfering: P.includes(V.ref),
          explosion: C
        }, `fp-${Ce}`)),
        s.jsx(ua, {}),
        s.jsx(ma, {
          pcb: r,
          netlist: p,
          activeNet: ee,
          hoveredNet: u,
          boardThickness: ge,
          explosion: C,
          onStartRoute: A,
          onHoverNet: I
        }),
        b && s.jsx(ha, {
          pcb: r,
          routeStartPad: S,
          routePreview: w,
          boardThickness: ge,
          activeLayer: f,
          explosion: C
        }),
        s.jsx(xa, {
          violations: d,
          boardThickness: ge,
          explosion: C
        })
      ]
    });
  }
  const va = [
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
  function wa({ pcb: e, explosion: t }) {
    const o = c.useMemo(() => {
      const r = e.outline.vertices;
      if (r.length < 3) return null;
      const l = new Is();
      l.moveTo(r[0].x, r[0].y);
      for (let u = 1; u < r.length; u++) l.lineTo(r[u].x, r[u].y);
      if (l.closePath(), e.outline.cutouts) for (const u of e.outline.cutouts) {
        if (u.length < 3) continue;
        const p = new zs();
        p.moveTo(u[0].x, u[0].y);
        for (let g = 1; g < u.length; g++) p.lineTo(u[g].x, u[g].y);
        p.closePath(), l.holes.push(p);
      }
      return l;
    }, [
      e.outline
    ]), n = e.outline.thickness, i = c.useMemo(() => o ? new An(o, {
      depth: n,
      bevelEnabled: false
    }) : null, [
      o,
      n
    ]), a = c.useMemo(() => !o || t <= 0 ? null : new An(o, {
      depth: 0.1,
      bevelEnabled: false
    }), [
      o,
      t
    ]);
    return i ? s.jsxs("group", {
      children: [
        s.jsx("mesh", {
          geometry: i,
          position: [
            0,
            0,
            -n / 2
          ],
          children: s.jsx("meshPhysicalMaterial", {
            color: "#0d5a2d",
            roughness: 0.5,
            metalness: 0,
            clearcoat: 1,
            clearcoatRoughness: 0.18,
            side: He
          })
        }),
        t > 0 && a && va.map((r) => {
          const l = Dt(r.top, t), u = Dt(r.bottom, t), p = (l + u) / 2;
          return s.jsx("mesh", {
            geometry: a,
            position: [
              0,
              0,
              p - 0.05
            ],
            children: s.jsx("meshStandardMaterial", {
              color: "#1a7a3a",
              roughness: 0.9,
              metalness: 0,
              transparent: true,
              opacity: 0.3,
              side: He
            })
          }, r.name);
        })
      ]
    }) : null;
  }
  function ba({ excludeNodeId: e }) {
    const t = re((o) => o.document);
    return as(t).length > 0 ? null : t.pcb && e == null ? s.jsx(wa, {
      pcb: t.pcb,
      explosion: 0
    }) : null;
  }
  class Sa extends c.Component {
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
  function Ma({ children: e }) {
    const t = Tt(), o = jt((i) => i.view), n = c.useMemo(() => [
      o.position[0],
      o.position[1],
      o.position[2]
    ], [
      o.position
    ]);
    return t ? s.jsx("group", {
      scale: o.scale,
      position: n,
      children: e
    }) : s.jsx(s.Fragment, {
      children: e
    });
  }
  function No() {
    if (typeof window > "u") return null;
    const e = window;
    return e.SpeechRecognition ?? e.webkitSpeechRecognition ?? null;
  }
  function Ea() {
    return No() != null;
  }
  function Ca(e) {
    var _a2, _b;
    const t = No();
    if (!t) return (_a2 = e.onError) == null ? void 0 : _a2.call(e, "Speech recognition not supported in this browser."), null;
    const o = new t();
    o.continuous = true, o.interimResults = true, o.lang = e.lang ?? "en-US";
    let n = false, i = "", a = "";
    o.onresult = (r) => {
      var _a3;
      let l = "", u = i;
      for (let p = r.resultIndex; p < r.results.length; p++) {
        const g = r.results[p];
        if (!g) continue;
        const h = ((_a3 = g[0]) == null ? void 0 : _a3.transcript) ?? "";
        g.isFinal ? u += h : l += h;
      }
      i = u, a = l, e.onTranscript((u + l).trim(), false);
    }, o.onerror = (r) => {
      var _a3;
      const l = r.error ?? "unknown";
      (_a3 = e.onError) == null ? void 0 : _a3.call(e, l);
    }, o.onend = () => {
      var _a3;
      if (n) return;
      n = true;
      const r = (i + a).trim();
      r && e.onTranscript(r, true), (_a3 = e.onEnd) == null ? void 0 : _a3.call(e);
    };
    try {
      o.start();
    } catch (r) {
      return (_b = e.onError) == null ? void 0 : _b.call(e, r.message), null;
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
  const Pa = 0.025, Ra = 0.04, ja = 0.4, ka = 5e-3, Ia = 0.5, za = 1e3, so = 1e-4, ro = 10;
  function cn(e, t, o, n, i) {
    var _a2;
    const a = t.get(o);
    if (!a) return false;
    const r = (_a2 = e.getJointPose) == null ? void 0 : _a2.call(e, a, n);
    if (!r) return false;
    const l = r.transform.position;
    return i.set(l.x, l.y, l.z), true;
  }
  const ln = new E(), un = new E(), io = new E();
  function Aa(e, t, o, n, i) {
    if (!cn(e, t, "thumb-tip", o, ln) || !cn(e, t, "index-finger-tip", o, un) || !cn(e, t, "wrist", o, io)) return false;
    const a = ln.distanceTo(un), r = n ? a < Ra : a < Pa;
    return i.pinching = r, i.midpoint.copy(ln).add(un).multiplyScalar(0.5), i.reach.copy(i.midpoint).sub(io).normalize(), true;
  }
  function Da(e) {
    var _a2;
    let t = e;
    for (; t; ) {
      const o = (_a2 = t.userData) == null ? void 0 : _a2.partId;
      if (typeof o == "string") return o;
      t = t.parent;
    }
    return null;
  }
  const dn = new gn(), ao = new E(), co = new E();
  function _a(e, t, o) {
    ao.copy(t).addScaledVector(o, -0.02), co.copy(o), dn.set(ao, co), dn.far = ja + 0.02;
    const n = dn.intersectObject(e, true);
    for (const i of n) {
      const a = Da(i.object);
      if (a) return a;
    }
    return null;
  }
  const Ta = 800, pt = new E(), mt = new E(), bt = new E(), Vt = new E();
  function Fa() {
    const e = Tt(), { gl: t, scene: o } = Re(), n = c.useRef({
      pinching: false,
      midpoint: new E()
    }), i = c.useRef({
      pinching: false,
      midpoint: new E()
    }), a = c.useRef(null), r = c.useRef({
      pinching: false,
      midpoint: new E(),
      reach: new E()
    }), l = c.useRef(null), u = c.useRef(null), p = c.useRef("");
    return c.useEffect(() => () => {
      var _a2;
      (_a2 = u.current) == null ? void 0 : _a2.stop(), u.current = null;
    }, []), Ue((g, h, y) => {
      if (!e) return;
      const f = y;
      if (!f) return;
      const d = t.xr.getSession(), b = t.xr.getReferenceSpace();
      if (!d || !b) return;
      for (const k of d.inputSources) {
        if (!k.hand) continue;
        const I = k.handedness === "left" ? n : i, A = r.current;
        if (Aa(f, k.hand, b, I.current.pinching, A) && (I.current.pinching = A.pinching, I.current.midpoint.copy(A.midpoint), A.pinching && a.current == null)) {
          const N = _a(o, A.midpoint, A.reach);
          N && (a.current = {
            kind: "fillet",
            partId: N
          });
        }
      }
      const w = n.current, S = i.current, m = w.pinching && S.pinching;
      if ((w.pinching && !S.pinching || !w.pinching && S.pinching) && a.current == null && Ea()) {
        const k = performance.now(), I = l.current;
        if (I == null) l.current = {
          startedAt: k
        };
        else if (u.current == null && k - I.startedAt >= Ta) {
          p.current = "";
          const A = Ca({
            lang: "en-US",
            onTranscript: (N, H) => {
              H && (p.current = N);
            },
            onEnd: () => {
              const N = p.current.trim();
              if (u.current = null, p.current = "", !N) return;
              const H = Array.from(B.getState().selectedPartIds), ie = re.getState().parts, $ = H.map((O) => {
                const Z = ie.find((ee) => ee.id === O);
                return Z ? {
                  partId: Z.id,
                  partName: Z.name ?? Z.id,
                  geometryType: "part"
                } : null;
              }).filter((O) => O != null);
              cs.getState().sendMessage(N, $, []);
            },
            onError: () => {
              u.current = null;
            }
          });
          A && (u.current = A);
        }
      } else if (l.current && (l.current = null), u.current) {
        const k = u.current;
        u.current = null, k.stop();
      }
      if (m && a.current == null) {
        pt.copy(w.midpoint), mt.copy(S.midpoint);
        const k = pt.distanceTo(mt);
        bt.copy(pt).add(mt).multiplyScalar(0.5);
        const I = jt.getState().view, A = new E().copy(bt).sub(new E(...I.position)).divideScalar(I.scale);
        a.current = {
          kind: "scale",
          initialAnchor: bt.clone(),
          initialDistance: k,
          initialView: I,
          sceneAnchor: A
        };
      }
      const C = a.current;
      if (C && C.kind === "scale" && m) {
        pt.copy(w.midpoint), mt.copy(S.midpoint);
        const k = pt.distanceTo(mt);
        bt.copy(pt).add(mt).multiplyScalar(0.5);
        const I = C.initialDistance > 1e-6 ? k / C.initialDistance : 1;
        let A = C.initialView.scale * I;
        A < so && (A = so), A > ro && (A = ro), Vt.copy(C.sceneAnchor).multiplyScalar(A).multiplyScalar(-1).add(bt), jt.getState().setView({
          scale: A,
          position: [
            Vt.x,
            Vt.y,
            Vt.z
          ]
        });
        return;
      }
      if (!(!C || !(!w.pinching || !S.pinching))) {
        if (C.kind === "fillet") {
          const k = w.midpoint.distanceTo(S.midpoint);
          if (a.current = null, k < ka || k > Ia) return;
          const I = jt.getState().view, A = I.scale > 1e-9 ? 1e-3 / I.scale : 1, N = k * za * A;
          re.getState().addFillet(C.partId, N);
          return;
        }
        if (C.kind === "scale") {
          a.current = null;
          return;
        }
      }
    }), null;
  }
  const La = 5e3, Pt = wo((e, t) => ({
    peers: /* @__PURE__ */ new Map(),
    ingest: (o) => e((n) => {
      const i = new Map(n.peers);
      return i.set(o.userId, o), {
        peers: i
      };
    }),
    drop: (o) => e((n) => {
      if (!n.peers.has(o)) return n;
      const i = new Map(n.peers);
      return i.delete(o), {
        peers: i
      };
    }),
    pruneStale: () => {
      const o = Date.now(), n = t().peers;
      let i = false;
      const a = new Map(n);
      for (const [r, l] of n) o - l.ts > La && (a.delete(r), i = true);
      i && e({
        peers: a
      });
    },
    clear: () => e({
      peers: /* @__PURE__ */ new Map()
    })
  })), Na = 100, Oa = 2e3, lo = new E(), St = new nt(), $t = new E();
  function uo(e, t, o) {
    t.copy(e).sub(new E(o.position[0], o.position[1], o.position[2])).divideScalar(o.scale);
  }
  function Ba() {
    var _a2, _b;
    const e = Tt(), { camera: t, gl: o } = Re(), n = ls((u) => u.cloudId), a = (_b = (_a2 = us((u) => u.user)) == null ? void 0 : _a2.user_metadata) == null ? void 0 : _b.name, r = c.useRef(null), l = c.useRef(0);
    return c.useEffect(() => {
      if (!e || !n) return;
      const u = Pt.getState().ingest, p = Pt.getState().drop, g = Gs(n, u, p);
      return r.current = g, () => {
        g == null ? void 0 : g.leave(), r.current = null, Pt.getState().clear();
      };
    }, [
      e,
      n
    ]), c.useEffect(() => {
      if (!e) return;
      const u = window.setInterval(() => Pt.getState().pruneStale(), Oa);
      return () => window.clearInterval(u);
    }, [
      e
    ]), Ue((u, p, g) => {
      var _a3;
      if (!e || !r.current) return;
      const h = performance.now();
      if (h - l.current < Na) return;
      l.current = h;
      const y = jt.getState().view;
      t.getWorldPosition(lo), t.getWorldQuaternion(St), uo(lo, $t, y);
      let f, d;
      const b = g, w = o.xr.getSession(), S = o.xr.getReferenceSpace();
      if (b && w && S) for (const m of w.inputSources) {
        if (!m.hand) continue;
        const v = m.hand.get("wrist");
        if (!v) continue;
        const C = (_a3 = b.getJointPose) == null ? void 0 : _a3.call(b, v, S);
        if (!C) continue;
        const P = new E(C.transform.position.x, C.transform.position.y, C.transform.position.z), k = new E();
        uo(P, k, y);
        const I = [
          k.x,
          k.y,
          k.z
        ];
        m.handedness === "left" ? f = I : m.handedness === "right" && (d = I);
      }
      r.current.broadcast({
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
          rightHand: d
        }
      });
    }), s.jsx(Va, {});
  }
  function Va() {
    const e = Pt((o) => o.peers), t = Array.from(e.values());
    return t.length === 0 ? null : s.jsx("group", {
      children: t.map((o) => s.jsx($a, {
        update: o
      }, o.userId))
    });
  }
  const fo = new nt(), Wt = new Zt();
  function $a({ update: e }) {
    const t = e.color ?? "#c084fc", o = e.pose.head;
    return fo.set(e.pose.headRot[0], e.pose.headRot[1], e.pose.headRot[2], e.pose.headRot[3]), Wt.setFromQuaternion(fo), s.jsxs("group", {
      children: [
        s.jsxs("mesh", {
          position: o,
          rotation: [
            Wt.x,
            Wt.y,
            Wt.z
          ],
          children: [
            s.jsx("boxGeometry", {
              args: [
                140,
                100,
                100
              ]
            }),
            s.jsx("meshStandardMaterial", {
              color: t,
              emissive: t,
              emissiveIntensity: 0.3
            })
          ]
        }),
        e.pose.leftHand && s.jsxs("mesh", {
          position: e.pose.leftHand,
          children: [
            s.jsx("sphereGeometry", {
              args: [
                40,
                12,
                12
              ]
            }),
            s.jsx("meshStandardMaterial", {
              color: t,
              emissive: t,
              emissiveIntensity: 0.25
            })
          ]
        }),
        e.pose.rightHand && s.jsxs("mesh", {
          position: e.pose.rightHand,
          children: [
            s.jsx("sphereGeometry", {
              args: [
                40,
                12,
                12
              ]
            }),
            s.jsx("meshStandardMaterial", {
              color: t,
              emissive: t,
              emissiveIntensity: 0.25
            })
          ]
        })
      ]
    });
  }
  const Wa = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, Ga = new E(), Ha = new E();
  function fn() {
    const e = B.getState();
    e.followMode === "lock" && (e.setFollowMode("free"), e.setFollowingParticipant(null));
  }
  const Ya = {
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
  function Xa(e) {
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
  function Ua(e, t) {
    const o = Xa(t);
    return e ? {
      environment: e.environment ?? o.environment,
      lights: e.lights ?? o.lights,
      background: e.background ?? o.background,
      postProcessing: e.postProcessing ?? o.postProcessing
    } : o;
  }
  function qa(e, t = 100) {
    return [
      -e.x * t,
      -e.y * t,
      -e.z * t
    ];
  }
  function po(e) {
    const t = e;
    return t.id ?? t.instanceId ?? t.partDefId ?? "";
  }
  const mo = new At(), ht = new E(), Gt = new E(), ho = new E(), go = new E();
  function Mt(e, t, o) {
    ht.subVectors(t, e).normalize();
    const n = new E(0, 1, 0);
    return Math.abs(ht.dot(n)) > 0.999 ? Gt.crossVectors(new E(0, 0, 1), ht).normalize() : Gt.crossVectors(ht, n).normalize(), ho.crossVectors(Gt, ht), go.copy(ht).negate(), mo.makeBasis(Gt, ho, go), o.setFromRotationMatrix(mo), o;
  }
  function Ka() {
    const e = tt((n) => n.showBoundaryEdges), t = tt((n) => n.toggleBoundaryEdges), o = Ae((n) => n.scene);
    return c.useEffect(() => {
      const n = (i) => {
        i.ctrlKey && i.shiftKey && (i.key === "B" || i.key === "b") && (i.preventDefault(), t());
      };
      return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
    }, [
      t
    ]), !e || !o ? null : s.jsx(s.Fragment, {
      children: o.parts.map((n, i) => n.mesh.positions.length ? s.jsx(vr, {
        positions: n.mesh.positions,
        indices: n.mesh.indices
      }, `boundary-${i}`) : null)
    });
  }
  function Za() {
    const e = tt((o) => o.inspectTriangles), t = tt((o) => o.toggleInspectTriangles);
    return c.useEffect(() => {
      const o = (n) => {
        n.ctrlKey && n.shiftKey && (n.key === "T" || n.key === "t") && (n.preventDefault(), t());
      };
      return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
    }, [
      t
    ]), e ? s.jsx(ir, {}) : null;
  }
  function Qa({ direction: e, color: t, intensity: o, bounds: n }) {
    const i = c.useRef(null), { center: a, radius: r } = n, l = Math.max(r, 10);
    return c.useEffect(() => {
      const u = i.current;
      if (!u) return;
      const p = new E(e.x, e.y, e.z).normalize();
      u.position.set(a[0] - p.x * l * 2.5, a[1] - p.y * l * 2.5, a[2] - p.z * l * 2.5), u.target.position.set(a[0], a[1], a[2]), u.target.updateMatrixWorld();
      const g = u.shadow.camera;
      g.left = -l * 1.3, g.right = l * 1.3, g.top = l * 1.3, g.bottom = -l * 1.3, g.near = 0.1, g.far = l * 6, g.updateProjectionMatrix(), u.shadow.needsUpdate = true;
    }, [
      e.x,
      e.y,
      e.z,
      a,
      l
    ]), s.jsx("directionalLight", {
      ref: i,
      intensity: o,
      color: t,
      castShadow: true,
      "shadow-mapSize-width": 2048,
      "shadow-mapSize-height": 2048,
      "shadow-bias": -1e-4,
      "shadow-normalBias": 0.02
    });
  }
  function Ja({ mode: e = "3d", pcbEditFocus: t = false }) {
    var _a2, _b;
    Fi(), Ni(), Oi(), Bi(), qi();
    const o = e === "pcb", [n, i] = c.useState(false), a = Ae((x) => x.engineReady), r = Ae((x) => x.scene), l = Ae((x) => x.previewMesh), u = re((x) => x.parts), p = re((x) => x.document.instances), g = re((x) => x.document.partDefs), h = re((x) => x.document.roots), y = re((x) => x.document.scene), f = re((x) => x.document.molecule), d = Rt((x) => x.molecule), b = Rt((x) => x.representation), w = d ?? f ?? null, S = B((x) => x.selectedPartIds), m = B((x) => x.selection), v = B((x) => x.isDraggingGizmo), C = B((x) => x.setOrbiting), P = B((x) => x.renderMode), k = B((x) => x.raytraceAvailable), I = Ie((x) => x.active), A = _t((x) => x.activeBoardNodeId), N = c.useMemo(() => {
      if (!t || A == null) return null;
      const x = mn(u, A);
      return x ? So(re.getState().document, x) : null;
    }, [
      t,
      A,
      u
    ]), H = c.useMemo(() => {
      var _a3;
      return !t || A == null ? null : ((_a3 = mn(u, A)) == null ? void 0 : _a3.id) ?? null;
    }, [
      t,
      A,
      u
    ]), ie = Tt(), $ = c.useRef(null), { camera: O, invalidate: Z } = Re(), { isDark: ee } = st(), D = Yt(), le = Vs(D), fe = $s(D), { zoomBehavior: F, orbitMomentum: ne } = D, ge = c.useRef(new gn()), X = c.useRef(new Dn()), ye = c.useRef(Z);
    ye.current = Z;
    const te = c.useRef(new As()), be = c.useRef(new E()), Ve = c.useRef({
      theta: 0,
      phi: 0
    }), $e = c.useRef(false), Be = c.useRef(new E()), V = c.useRef(new E()), Ce = c.useRef(null), ve = c.useRef(false), ce = c.useRef(null), ae = c.useRef(new nt()), q = c.useCallback(() => {
      ve.current && (ve.current = false, Ce.current = null, ce.current = null, $.current && ($.current.enabled = true), i(false));
    }, []), Me = c.useMemo(() => {
      const x = /* @__PURE__ */ new Map();
      if (!p || !g) return x;
      const z = /* @__PURE__ */ new Map();
      h.forEach((T, Y) => {
        z.set(T.root, Y);
      });
      for (const T of p) {
        const Y = g[T.partDefId];
        if (!Y) continue;
        const K = z.get(Y.root);
        K !== void 0 && x.set(K, T.id);
      }
      return x;
    }, [
      p,
      g,
      h
    ]), we = c.useMemo(() => h.map((x, z) => x.visible !== false ? z : -1).filter((x) => x >= 0), [
      h
    ]), ke = c.useCallback((x, z) => {
      if (S.has(x)) return true;
      const T = Me.get(z);
      return !!(T && S.has(T));
    }, [
      S,
      Me
    ]), Pe = c.useMemo(() => {
      const x = {
        center: [
          0,
          30,
          0
        ],
        radius: 120
      };
      if (!r) return x;
      let z = 1 / 0, T = 1 / 0, Y = 1 / 0, K = -1 / 0, ue = -1 / 0, pe = -1 / 0;
      const G = (W, Q, oe) => {
        const J = W, M = oe, j = -Q;
        J < z && (z = J), M < T && (T = M), j < Y && (Y = j), J > K && (K = J), M > ue && (ue = M), j > pe && (pe = j);
      }, Ee = (W, Q) => {
        for (let J = 0; J + 2 < W.length; J += 48) {
          const M = W[J], j = W[J + 1], _ = W[J + 2];
          Q ? G(M * Q.scale.x + Q.translation.x, j * Q.scale.y + Q.translation.y, _ * Q.scale.z + Q.translation.z) : G(M, j, _);
        }
      };
      for (const W of r.parts ?? []) Ee(W.mesh.positions);
      for (const W of r.instances ?? []) Ee(W.mesh.positions, W.transform ?? null);
      if (!Number.isFinite(z)) return x;
      const je = [
        (z + K) / 2,
        (T + ue) / 2,
        (Y + pe) / 2
      ], de = Math.hypot(K - z, ue - T, pe - Y) / 2 || 60;
      return {
        center: je,
        radius: de
      };
    }, [
      r
    ]), Te = c.useMemo(() => {
      if (m.length === 0 || !r) return null;
      const x = m.some((de) => de.kind === "face" || de.kind === "edge" || de.kind === "vertex"), z = new ot(), T = new E();
      let Y = false;
      const K = (de) => {
        var _a3;
        const W = u.findIndex((oe) => oe.id === de);
        if (W < 0) return null;
        const Q = we.indexOf(W);
        return Q < 0 ? null : ((_a3 = r.parts[Q]) == null ? void 0 : _a3.mesh) ?? null;
      };
      for (const de of m) switch (de.kind) {
        case "part": {
          if (r.instances && r.instances.length > 0) for (const W of r.instances) {
            if (po(W) !== de.id) continue;
            const oe = W.mesh.positions, J = W.transform ?? {
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
            for (let M = 0; M < oe.length; M += 3) T.set(oe[M] * J.scale.x + J.translation.x, oe[M + 1] * J.scale.y + J.translation.y, oe[M + 2] * J.scale.z + J.translation.z), z.expandByPoint(T), Y = true;
          }
          we.forEach((W, Q) => {
            const oe = u[W];
            if (!oe || !ke(oe.id, W) || oe.id !== de.id) return;
            const J = r.parts[Q];
            if (!J) return;
            const M = J.mesh.positions;
            for (let j = 0; j < M.length; j += 3) T.set(M[j], M[j + 1], M[j + 2]), z.expandByPoint(T), Y = true;
          });
          break;
        }
        case "face": {
          const W = K(de.partId);
          if (!W) break;
          const Q = Po(W, de.faceIndex);
          for (const oe of Q) for (let J = 0; J < 3; J++) {
            const M = W.indices[oe * 3 + J];
            T.set(W.positions[M * 3], W.positions[M * 3 + 1], W.positions[M * 3 + 2]), z.expandByPoint(T), Y = true;
          }
          break;
        }
        case "edge": {
          const W = K(de.partId);
          if (!W) break;
          const { a: Q, b: oe } = Ro(W, de.edgeId);
          z.expandByPoint(Q), z.expandByPoint(oe), Y = true;
          break;
        }
        case "vertex": {
          const W = K(de.partId);
          if (!W) break;
          const Q = jo(W, de.vertexId);
          z.expandByPoint(Q), Y = true;
          break;
        }
      }
      if (!Y) return null;
      const ue = new E();
      z.getCenter(ue);
      const pe = new E();
      z.getSize(pe);
      const G = Math.max(pe.length() * 0.5, 1);
      return {
        center: new E(ue.x, ue.z, -ue.y),
        radius: G,
        mode: x ? "pan-only" : "fit"
      };
    }, [
      m,
      r,
      u,
      ke,
      we
    ]);
    c.useEffect(() => {
      if (Te && !v) {
        if (V.current.copy(Te.center), Te.mode === "fit") if (O instanceof Jt) {
          const z = O.fov * Math.PI / 180, T = 2 * Math.atan(Math.tan(z / 2) * O.aspect), Y = Math.min(z, T), K = Te.radius / Math.sin(Y / 2) * 1.2;
          Ce.current = Math.max(O.near * 2, K);
        } else Ce.current = Te.radius * 3 * 1.2;
        else Ce.current = null;
        ve.current = true, i(true);
      }
    }, [
      Te,
      v,
      O
    ]), Ue(() => {
      if (!ve.current || !$.current) return;
      const x = $.current.target, z = V.current, T = Ce.current, Y = ce.current, K = 0.1;
      if (x.lerp(z, K), Y !== null) O.position.lerp(Y, K), O.quaternion.slerp(ae.current, K), x.copy(z);
      else if (T !== null) {
        const Ee = be.current.subVectors(O.position, x), je = Ee.length(), de = je + (T - je) * K;
        Ee.normalize().multiplyScalar(de), O.position.copy(x).add(Ee);
      }
      const ue = x.distanceTo(z) < 0.01, pe = T === null || Math.abs(be.current.subVectors(O.position, x).length() - T) < 0.1, G = Y === null || O.position.distanceTo(Y) < 0.1;
      ue && pe && G ? (x.copy(z), Y && (O.position.copy(Y), O.quaternion.copy(ae.current)), $.current && ($.current.enabled = true), ve.current = false, Ce.current = null, ce.current = null, i(false)) : Z();
    }), c.useEffect(() => {
      const x = () => {
        B.getState().followMode !== "free" && Z();
      }, z = B.subscribe(x), T = It.subscribe(x);
      return () => {
        z(), T();
      };
    }, [
      Z
    ]), c.useEffect(() => {
      let x = 0, z = 0;
      const T = () => {
        Z(), ++z < 36 && (x = requestAnimationFrame(T));
      };
      return T(), () => cancelAnimationFrame(x);
    }, [
      Z
    ]), c.useEffect(() => {
      Z();
    }, [
      Z,
      r,
      l,
      a
    ]), c.useEffect(() => {
      const x = () => Z(), z = () => {
        document.visibilityState === "visible" && Z();
      }, T = re.subscribe(x);
      return window.addEventListener("focus", x), window.addEventListener("pageshow", x), document.addEventListener("visibilitychange", z), () => {
        T(), window.removeEventListener("focus", x), window.removeEventListener("pageshow", x), document.removeEventListener("visibilitychange", z);
      };
    }, [
      Z
    ]), Ue(() => {
      const { followMode: x, followingParticipantId: z } = B.getState();
      if (x === "free" || !z) return;
      const T = It.getState().participants.get(z);
      if (!(T == null ? void 0 : T.camera)) return;
      const [Y, K, ue] = lt(T.camera.position), pe = Ga.set(Y, K, ue);
      if (x === "lock") {
        ve.current && q();
        const [Ee, je, de] = lt(T.camera.target), W = Ha.set(Ee, je, de);
        O.position.copy(pe), $.current ? ($.current.target.copy(W), $.current.update()) : O.lookAt(W), Z();
        return;
      }
      if (ve.current) return;
      $.current ? ($.current.target.lerp(pe, 0.15), $.current.update(), $.current.target.distanceToSquared(pe) > 1e-4 && Z()) : O.lookAt(pe);
    }), c.useEffect(() => {
      const x = $.current, z = x == null ? void 0 : x.domElement;
      if (!z) return;
      const T = 1, Y = 0;
      let K = false;
      const ue = () => {
        K || (K = true, requestAnimationFrame(() => {
          K = false, x.update(), ye.current();
        }));
      }, pe = () => {
        if (!ne) {
          $e.current = false, Ve.current.theta = 0, Ve.current.phi = 0;
          return;
        }
        const W = Ve.current;
        if (Math.abs(W.theta) < 1e-4 && Math.abs(W.phi) < 1e-4) {
          $e.current = false, W.theta = 0, W.phi = 0;
          return;
        }
        const Q = x.target, oe = be.current.subVectors(O.position, Q), J = te.current.setFromVector3(oe);
        J.theta += W.theta * T, J.phi += W.phi * T, J.phi = Math.max(0.01, Math.min(Math.PI - 0.01, J.phi)), W.theta *= Y, W.phi *= Y, oe.setFromSpherical(J), O.position.copy(Q).add(oe), O.lookAt(Q), x.update(), ye.current(), requestAnimationFrame(pe);
      }, G = (W, Q, oe) => {
        const J = 2e-3 * F.sensitivity;
        let M = -(Math.abs(oe) > Math.abs(Q) ? oe : Q) * J;
        F.invertDirection && (M = -M);
        const j = x.target, _ = be.current.subVectors(O.position, j), L = _.length(), U = Math.max(1, L * (1 + M));
        if (F.zoomTowardsCursor) {
          const se = z.getBoundingClientRect();
          X.current.x = (W.clientX - se.left) / se.width * 2 - 1, X.current.y = -((W.clientY - se.top) / se.height) * 2 + 1, ge.current.setFromCamera(X.current, O);
          const me = Be.current;
          ge.current.ray.at(L, me);
          const xe = 1 - U / L;
          j.lerp(me, xe * 0.5);
        }
        _.normalize().multiplyScalar(U), O.position.copy(j).add(_), ue();
      }, Ee = (W, Q) => {
        const oe = x.target, j = be.current.subVectors(O.position, oe).length() * 2e-3, _ = new E(), L = new E();
        O.matrix.extractBasis(_, L, new E());
        const U = _.multiplyScalar(W * j).add(L.multiplyScalar(-Q * j));
        O.position.add(U), oe.add(U), ue();
      }, je = (W, Q, oe) => {
        const J = 2 * Math.PI / z.clientHeight;
        if (oe && ne) Ve.current.theta += W * J, Ve.current.phi += Q * J, $e.current || ($e.current = true, requestAnimationFrame(pe));
        else {
          const M = x.target, j = be.current.subVectors(O.position, M), _ = te.current.setFromVector3(j);
          _.theta += W * J, _.phi += Q * J, _.phi = Math.max(0.01, Math.min(Math.PI - 0.01, _.phi)), j.setFromSpherical(_), O.position.copy(M).add(j), O.lookAt(M), ue();
        }
      }, de = (W) => {
        W.preventDefault(), W.stopPropagation(), q(), fn();
        let Q = W.deltaX, oe = W.deltaY;
        W.deltaMode === 1 && (Q *= 16, oe *= 16), W.deltaMode === 2 && (Q *= 100, oe *= 100);
        const J = Zi(W), M = Qi(le.scrollBindings, J, fe), j = le.trackpadOrbitEnabled && fe === "trackpad";
        switch (M) {
          case "zoom":
            G(W, Q, oe);
            break;
          case "pan":
            Ee(Q, oe);
            break;
          case "orbit":
            je(Q, oe, j);
            break;
        }
      };
      return z.addEventListener("wheel", de, {
        passive: false
      }), () => z.removeEventListener("wheel", de);
    }, [
      O,
      le,
      fe,
      F,
      ne,
      q
    ]), c.useEffect(() => {
      const x = $.current;
      if (!x) return;
      const z = x.domElement, T = () => {
        C(true), i(true), fn();
      }, Y = () => {
        C(false), i(false);
      }, K = () => {
        q(), fn();
      };
      return x.addEventListener("start", T), x.addEventListener("end", Y), z == null ? void 0 : z.addEventListener("pointerdown", K), () => {
        x.removeEventListener("start", T), x.removeEventListener("end", Y), z == null ? void 0 : z.removeEventListener("pointerdown", K);
      };
    }, [
      C,
      q
    ]), c.useEffect(() => {
      var _a3;
      const z = (_a3 = $.current) == null ? void 0 : _a3.domElement;
      if (!z) return;
      const T = () => {
        B.getState().selectedPartIds.size > 0 || window.dispatchEvent(new CustomEvent("vcad:camera-fit"));
      };
      return z.addEventListener("dblclick", T), () => z.removeEventListener("dblclick", T);
    }, []), c.useEffect(() => {
      var _a3;
      const z = (_a3 = $.current) == null ? void 0 : _a3.domElement;
      if (!z) return;
      const T = new Ds(new E(0, 1, 0), 0), Y = new Dn(), K = new gn(), ue = new E();
      let pe = false, G = null;
      const Ee = () => {
        pe = false;
        const W = G;
        if (!W) return;
        const Q = z.getBoundingClientRect();
        if (Y.x = (W.clientX - Q.left) / Q.width * 2 - 1, Y.y = -((W.clientY - Q.top) / Q.height) * 2 + 1, K.setFromCamera(Y, O), !K.ray.intersectPlane(T, ue)) {
          B.getState().setCursorWorld(null);
          return;
        }
        B.getState().setCursorWorld({
          x: ue.x,
          y: -ue.z,
          z: ue.y
        });
      }, je = (W) => {
        G = W, !pe && (pe = true, requestAnimationFrame(Ee));
      }, de = () => {
        G = null, B.getState().setCursorWorld(null);
      };
      return z.addEventListener("pointermove", je), z.addEventListener("pointerleave", de), () => {
        z.removeEventListener("pointermove", je), z.removeEventListener("pointerleave", de), B.getState().setCursorWorld(null);
      };
    }, [
      O
    ]), c.useEffect(() => {
      const x = (z) => {
        const { normal: T, centroid: Y, vertices: K } = z.detail, ue = new E(T.x, T.z, -T.y).normalize(), pe = new E(Y.x, Y.z, -Y.y);
        let G = 60;
        if (K && K.length >= 3) {
          const je = new E(0, 1, 0);
          Math.abs(ue.dot(je)) > 0.95 && je.set(1, 0, 0);
          const de = new E().crossVectors(je, ue).normalize(), W = new E().crossVectors(ue, de).normalize();
          let Q = 1 / 0, oe = -1 / 0, J = 1 / 0, M = -1 / 0;
          const j = new E();
          for (const se of K) {
            const me = new E(se.x, se.z, -se.y);
            j.subVectors(me, pe);
            const xe = j.dot(de), Se = j.dot(W);
            xe < Q && (Q = xe), xe > oe && (oe = xe), Se < J && (J = Se), Se > M && (M = Se);
          }
          const _ = Math.max(1, oe - Q), L = Math.max(1, M - J), U = 1.2;
          if (O instanceof Jt) {
            const se = O.fov * Math.PI / 180, me = 2 * Math.atan(Math.tan(se / 2) * O.aspect), xe = L / 2 / Math.tan(se / 2), Se = _ / 2 / Math.tan(me / 2);
            G = Math.max(xe, Se, 10) * U;
          } else G = Math.max(_, L, 10) * U;
        }
        const Ee = new E(pe.x + ue.x * G, pe.y + ue.y * G, pe.z + ue.z * G);
        V.current.copy(pe), ce.current = Ee, Ce.current = G, Mt(Ee, pe, ae.current), $.current && ($.current.enabled = false), ve.current = true, i(true);
      };
      return window.addEventListener("vcad:face-selected", x), () => window.removeEventListener("vcad:face-selected", x);
    }, [
      O
    ]), c.useEffect(() => {
      const z = {
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
      }, T = (Y) => {
        const K = Y.detail, ue = z[K];
        if (!ue) return;
        const pe = new E(ue[0], ue[1], ue[2]), G = new E(0, 0, 0);
        V.current.copy(G), ce.current = pe, Ce.current = null, Mt(pe, G, ae.current), $.current && ($.current.enabled = false), ve.current = true, i(true);
      };
      return window.addEventListener("vcad:snap-view", T), () => window.removeEventListener("vcad:snap-view", T);
    }, []);
    const qe = Re((x) => x.size.width / Math.max(1, x.size.height));
    c.useEffect(() => {
      const x = (z) => {
        const { planeNormal: T, planeCenter: Y, width: K, height: ue } = z.detail, [pe, G, Ee] = lt([
          Y.x,
          Y.y,
          Y.z
        ]), [je, de, W] = lt([
          T.x,
          T.y,
          T.z
        ]), Q = Math.hypot(je, de, W) || 1, oe = new E(je / Q, de / Q, W / Q), J = O, M = (J.isPerspectiveCamera ? J.fov : 50) * (Math.PI / 180), j = J.isPerspectiveCamera ? J.aspect : qe, _ = 1.2, L = Math.max(K, 1), se = Math.max(ue, 1) / 2 / Math.tan(M / 2), me = L / 2 / (j * Math.tan(M / 2)), xe = Math.max(se, me, 10) * _;
        V.current.set(pe, G, Ee);
        const Se = new E(pe + oe.x * xe, G + oe.y * xe, Ee + oe.z * xe);
        ce.current = Se, Ce.current = xe, Mt(Se, V.current, ae.current), $.current && ($.current.enabled = false), ve.current = true, i(true);
      };
      return window.addEventListener("vcad:fit-sketch", x), () => window.removeEventListener("vcad:fit-sketch", x);
    }, [
      O,
      qe
    ]);
    const ze = Re((x) => x.gl), ft = Re((x) => x.scene), et = Re((x) => x.size), rt = Li();
    c.useEffect(() => {
      rt || Z();
    }, [
      rt,
      Z
    ]), c.useEffect(() => {
      const x = (T) => {
        const Y = Math.max(1, et.width), K = Math.max(1, et.height), [ue, pe, G] = lt(T.position), [Ee, je, de] = lt(T.target), W = new Jt(50, Y / K, 0.1, 1e4);
        W.up.set(0, 1, 0), W.position.set(ue, pe, G), W.lookAt(Ee, je, de), W.updateMatrixWorld();
        const Q = new _s(Y, K, {
          samples: 4,
          colorSpace: xn
        }), oe = ze.getRenderTarget(), J = ze.toneMapping, M = ze.toneMappingExposure, j = ze.outputColorSpace;
        ze.toneMapping = Co, ze.toneMappingExposure = 1, ze.outputColorSpace = xn, ze.setRenderTarget(Q), ze.clear(), ze.render(ft, W), ze.setRenderTarget(oe), ze.toneMapping = J, ze.toneMappingExposure = M, ze.outputColorSpace = j;
        const _ = new Uint8Array(Y * K * 4);
        ze.readRenderTargetPixels(Q, 0, 0, Y, K, _), Q.dispose();
        const L = document.createElement("canvas");
        L.width = Y, L.height = K;
        const U = L.getContext("2d");
        if (!U) return null;
        const se = U.createImageData(Y, K), me = Y * 4;
        for (let xe = 0; xe < K; xe++) {
          const Se = (K - 1 - xe) * me;
          se.data.set(_.subarray(Se, Se + me), xe * me);
        }
        return U.putImageData(se, 0, 0), L;
      }, z = window;
      return z.__vcadCaptureAiCamera = x, () => {
        z.__vcadCaptureAiCamera === x && delete z.__vcadCaptureAiCamera;
      };
    }, [
      ze,
      ft,
      et.width,
      et.height
    ]), c.useEffect(() => {
      const x = () => {
        const z = new E(60, -60, 45), T = new E(0, 0, 0);
        V.current.copy(T), ce.current = z, Ce.current = null, Mt(z, T, ae.current), $.current && ($.current.enabled = false), ve.current = true, i(true);
      };
      return window.addEventListener("vcad:hero-view", x), () => window.removeEventListener("vcad:hero-view", x);
    }, []), c.useEffect(() => {
      const x = (z) => {
        const { x: T, y: Y, z: K } = z.detail, [ue, pe, G] = lt([
          T,
          Y,
          K
        ]);
        V.current.set(ue, pe, G), ce.current = null, Ce.current = null, $.current && ($.current.enabled = false), ve.current = true, i(true);
      };
      return window.addEventListener("vcad:focus-point", x), () => window.removeEventListener("vcad:focus-point", x);
    }, []), c.useEffect(() => {
      const x = () => {
        var _a3;
        const z = Ae.getState().scene;
        if (!z || z.parts.length === 0) return;
        const T = new ot(), Y = new E();
        let K = false;
        for (const Q of z.parts) {
          const oe = Q.mesh.positions;
          for (let J = 0; J < oe.length; J += 3) Y.set(oe[J] ?? 0, oe[J + 1] ?? 0, oe[J + 2] ?? 0), T.expandByPoint(Y), K = true;
        }
        if (!K) return;
        const ue = new E();
        T.getCenter(ue);
        const pe = new E();
        T.getSize(pe);
        const G = Math.max(pe.x, pe.y, pe.z, 50) * 2, Ee = new E(ue.x, ue.z, -ue.y), je = ((_a3 = $.current) == null ? void 0 : _a3.target) ?? new E(), de = new E().copy(O.position).sub(je);
        de.lengthSq() < 1e-6 && de.set(1, 1, 1), de.normalize();
        const W = new E().copy(Ee).addScaledVector(de, G);
        V.current.copy(Ee), ce.current = W, Ce.current = G, Mt(W, Ee, ae.current), $.current && ($.current.enabled = false), ve.current = true, i(true);
      };
      return window.addEventListener("vcad:camera-fit", x), () => window.removeEventListener("vcad:camera-fit", x);
    }, [
      O
    ]);
    const We = c.useMemo(() => Ua(y, ee), [
      y,
      ee
    ]), Ke = c.useMemo(() => {
      const x = We.environment;
      return x.type === "None" ? null : x.type === "Preset" ? Ya[x.preset] ?? "studio" : "studio";
    }, [
      We.environment
    ]), R = c.useMemo(() => {
      const x = We.environment;
      return x.type === "None" ? 0 : x.intensity ?? 1;
    }, [
      We.environment
    ]);
    return s.jsxs(s.Fragment, {
      children: [
        We.lights.map((x) => {
          if (x.enabled === false) return null;
          const z = new Oe(x.color[0], x.color[1], x.color[2]);
          if (x.kind.type === "Directional") {
            const T = qa(x.kind.direction);
            return x.castShadow ? s.jsx(Qa, {
              direction: x.kind.direction ?? {
                x: 0.5,
                y: -0.8,
                z: 0.4
              },
              color: z,
              intensity: x.intensity,
              bounds: Pe
            }, x.id) : s.jsx("directionalLight", {
              position: T,
              intensity: x.intensity,
              color: z
            }, x.id);
          }
          return x.kind.type === "Point" ? s.jsx("pointLight", {
            position: [
              x.kind.position.x,
              x.kind.position.y,
              x.kind.position.z
            ],
            intensity: x.intensity,
            color: z,
            distance: x.kind.distance
          }, x.id) : x.kind.type === "Spot" ? s.jsx("spotLight", {
            position: [
              x.kind.position.x,
              x.kind.position.y,
              x.kind.position.z
            ],
            intensity: x.intensity,
            color: z,
            angle: x.kind.angle ? x.kind.angle * Math.PI / 180 : void 0,
            penumbra: x.kind.penumbra ? x.kind.penumbra / 90 : void 0
          }, x.id) : null;
        }),
        !o && !n && s.jsx(Wo, {
          position: [
            0,
            -0.01,
            0
          ],
          opacity: ee ? 0.4 : 0.3,
          scale: 200,
          blur: 2,
          far: 100,
          resolution: 512,
          color: ee ? "#000000" : "#1a1a1a"
        }),
        !o && s.jsx(Zs, {}),
        s.jsx(Go, {
          ref: $,
          makeDefault: true,
          enabled: !ie,
          enableDamping: false,
          enableZoom: Wa,
          touches: {
            ONE: _n.ROTATE,
            TWO: _n.DOLLY_PAN
          },
          mouseButtons: (() => {
            const x = Ji(le, fe);
            return {
              LEFT: void 0,
              MIDDLE: x.MIDDLE,
              RIGHT: x.RIGHT
            };
          })()
        }),
        !o && !ie && s.jsx(Ho, {
          alignment: "bottom-right",
          margin: [
            80,
            80
          ],
          children: s.jsx(Yo, {
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
        Ke && s.jsx(c.Suspense, {
          fallback: null,
          children: s.jsx(kn, {
            preset: Ke,
            environmentIntensity: R,
            background: We.background.type === "Environment"
          })
        }),
        !Ke && s.jsxs(kn, {
          resolution: 256,
          frames: 1,
          background: false,
          children: [
            s.jsx("color", {
              attach: "background",
              args: ee ? [
                0.018,
                0.02,
                0.024
              ] : [
                0.62,
                0.6,
                0.58
              ]
            }),
            s.jsx(wt, {
              form: "rect",
              intensity: ee ? 3.2 : 5.5,
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
            s.jsx(wt, {
              form: "rect",
              intensity: ee ? 1.3 : 2.2,
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
            s.jsx(wt, {
              form: "rect",
              intensity: ee ? 0.9 : 1.6,
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
            s.jsx(wt, {
              form: "rect",
              intensity: ee ? 2.2 : 3.6,
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
            s.jsx(wt, {
              form: "rect",
              intensity: ee ? 0.25 : 0.5,
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
        !o && ((_a2 = y == null ? void 0 : y.background) == null ? void 0 : _a2.type) === "Solid" && s.jsx("color", {
          attach: "background",
          args: [
            y.background.color[0],
            y.background.color[1],
            y.background.color[2]
          ]
        }),
        t && s.jsx("group", {
          rotation: [
            -Math.PI / 2,
            0,
            0
          ],
          children: s.jsx("group", {
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
            children: s.jsx(ya, {
              showBoard: true
            })
          })
        }),
        !o && a && s.jsxs(s.Fragment, {
          children: [
            P === "raytrace" && k && s.jsx(mi, {}),
            s.jsx(Ma, {
              children: s.jsxs("group", {
                rotation: [
                  -Math.PI / 2,
                  0,
                  0
                ],
                children: [
                  s.jsx(Tr, {}),
                  s.jsx(ba, {
                    excludeNodeId: A
                  }),
                  s.jsxs(s.Fragment, {
                    children: [
                      (_b = r == null ? void 0 : r.instances) == null ? void 0 : _b.map((x) => {
                        const z = po(x), T = {
                          id: z,
                          name: x.name ?? x.partDefId,
                          kind: "cube",
                          primitiveNodeId: 0,
                          scaleNodeId: 0,
                          rotateNodeId: 0,
                          translateNodeId: 0
                        };
                        return s.jsx(Bn, {
                          partInfo: T,
                          mesh: x.mesh,
                          materialKey: x.material,
                          selected: S.has(z),
                          transform: x.transform,
                          ghosted: t
                        }, x.instanceId);
                      }),
                      (!(r == null ? void 0 : r.instances) || r.instances.length === 0) && u.length === 0 && (r == null ? void 0 : r.parts.map((x, z) => s.jsx(ur, {
                        mesh: x.mesh,
                        materialKey: x.material
                      }, `imported-${z}`))),
                      (!(r == null ? void 0 : r.instances) || r.instances.length === 0) && u.length > 0 && (r == null ? void 0 : r.parts.map((x, z) => {
                        const T = we[z] ?? z, Y = u[T];
                        return !Y || Y.id === H ? null : s.jsx(Bn, {
                          partInfo: Y,
                          mesh: x.mesh,
                          materialKey: x.material,
                          selected: ke(Y.id, T),
                          ghosted: t && !Mn(Y)
                        }, Y.id);
                      }))
                    ]
                  }),
                  w && w.positions.length > 0 && s.jsx(xr, {
                    molecule: w,
                    representation: b
                  }),
                  s.jsx(Ka, {}),
                  s.jsx(Za, {}),
                  r == null ? void 0 : r.clashes.map((x, z) => s.jsx(Sr, {
                    mesh: x
                  }, `clash-${z}`)),
                  s.jsx(Mr, {}),
                  l && s.jsx(Er, {
                    mesh: l
                  }),
                  s.jsx(Rr, {}),
                  I && s.jsx(Ar, {}),
                  s.jsx(ei, {}),
                  s.jsx(si, {}),
                  s.jsx(Ti, {}),
                  s.jsx(ai, {}),
                  s.jsx(Ba, {})
                ]
              })
            }),
            s.jsx(Fa, {}),
            s.jsx(Or, {
              orbitControls: $
            })
          ]
        }),
        a && !ie && !rt && (() => {
          var _a3, _b2, _c, _d, _e2, _f, _g;
          const x = ((_a3 = We.postProcessing.ambientOcclusion) == null ? void 0 : _a3.enabled) !== false, z = ((_b2 = We.postProcessing.vignette) == null ? void 0 : _b2.enabled) !== false;
          if (!x && !z) return null;
          const T = (_c = ze.getContext) == null ? void 0 : _c.call(ze);
          if (!T || typeof T.getContextAttributes != "function" || !T.getContextAttributes()) return null;
          const Y = [];
          return x && Y.push(s.jsx(Fs, {
            aoRadius: ((_d = We.postProcessing.ambientOcclusion) == null ? void 0 : _d.radius) ?? 0.5,
            intensity: ((_e2 = We.postProcessing.ambientOcclusion) == null ? void 0 : _e2.intensity) ?? (ee ? 2 : 1.5),
            aoSamples: n ? 3 : 6,
            denoiseSamples: n ? 1 : 4
          }, "ao")), z && Y.push(s.jsx(Ls, {
            offset: ((_f = We.postProcessing.vignette) == null ? void 0 : _f.offset) ?? 0.3,
            darkness: ((_g = We.postProcessing.vignette) == null ? void 0 : _g.darkness) ?? (ee ? 0.5 : 0.3),
            eskil: false
          }, "vignette")), s.jsx(Sa, {
            children: s.jsx(Ns, {
              children: Y
            })
          });
        })()
      ]
    });
  }
  const xo = {
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
  function yo(e, t, o, n, i, a, r) {
    const l = (p) => t + p * n, u = (p) => o - p * n;
    return s.jsxs("g", {
      pointerEvents: "none",
      children: [
        e.rendered.lines.map(([p, g], h) => s.jsx("line", {
          x1: l(p.x),
          y1: u(p.y),
          x2: l(g.x),
          y2: u(g.y),
          stroke: i,
          strokeWidth: a
        }, `${r}-l-${h}`)),
        e.rendered.texts.map((p, g) => {
          const h = String(p.alignment), y = h.includes("Left") ? "start" : h.includes("Right") ? "end" : "middle", f = h.startsWith("Top") ? "hanging" : h.startsWith("Bottom") ? "auto" : "middle";
          return s.jsx("text", {
            x: l(p.position.x),
            y: u(p.position.y),
            fontSize: p.height * n,
            fill: i,
            textAnchor: y,
            dominantBaseline: f,
            fontFamily: "monospace",
            children: p.text
          }, `${r}-t-${g}`);
        })
      ]
    }, r);
  }
  function ec() {
    const { viewDirection: e, showHiddenLines: t, showDimensions: o, zoom: n, pan: i, adjustZoom: a, adjustPan: r, resetView: l, detailViews: u, addDetailView: p } = hn(), g = Ae((M) => M.scene), h = Ae((M) => M.engine), y = re((M) => M.parts), f = re((M) => M.document.drawing), d = re((M) => M.setDrawingSettings), b = B((M) => M.selectedPartIds), w = B((M) => M.select), S = B((M) => M.clearSelection), { isDark: m } = st(), v = c.useRef(null), [C, P] = c.useState(false), [k, I] = c.useState({
      x: 0,
      y: 0
    }), A = c.useRef({
      x: 0,
      y: 0
    }), N = c.useRef(false), [H, ie] = c.useState(false), [$, O] = c.useState(null), [Z, ee] = c.useState(null), [D, le] = c.useState(false), [fe, F] = c.useState([]), [ne, ge] = c.useState(null), X = m ? xo.dark : xo.light, ye = c.useMemo(() => !(g == null ? void 0 : g.parts) || !h ? [] : g.parts.map((M, j) => {
      const _ = y[j];
      if (!_) return null;
      const L = h.projectMesh(M.mesh, e);
      return L ? {
        partId: _.id,
        view: L
      } : null;
    }).filter((M) => M !== null), [
      g,
      h,
      e,
      y
    ]), te = c.useMemo(() => {
      if (ye.length === 0) return null;
      let M = 1 / 0, j = 1 / 0, _ = -1 / 0, L = -1 / 0;
      for (const { view: U } of ye) M = Math.min(M, U.bounds.min_x), j = Math.min(j, U.bounds.min_y), _ = Math.max(_, U.bounds.max_x), L = Math.max(L, U.bounds.max_y);
      return {
        min_x: M,
        min_y: j,
        max_x: _,
        max_y: L
      };
    }, [
      ye
    ]), be = c.useMemo(() => ye.length === 0 ? null : {
      edges: ye.flatMap((j) => j.view.edges),
      bounds: te,
      view_direction: e
    }, [
      ye,
      te,
      e
    ]), Ve = c.useMemo(() => !be || !h || u.length === 0 ? [] : u.map((M) => {
      try {
        const j = h.createDetailView(be, M.centerX, M.centerY, M.scale, M.width, M.height, M.label);
        return {
          def: M,
          view: j
        };
      } catch {
        return null;
      }
    }).filter((M) => M !== null), [
      be,
      h,
      u
    ]), $e = c.useMemo(() => {
      var _a2;
      if (!h || !((_a2 = g == null ? void 0 : g.parts) == null ? void 0 : _a2.length)) return [];
      const M = ((f == null ? void 0 : f.sections) ?? []).filter((_) => _.view === e);
      if (M.length === 0) return [];
      const j = ds();
      return j ? M.map((_) => {
        const L = fs(_.view, _.points);
        if (!L) return null;
        const U = h.offsetSectionMesh(j, L, {
          spacing: 3,
          angle: Math.PI / 4
        });
        return U ? {
          def: _,
          view: U
        } : null;
      }).filter((_) => _ !== null) : [];
    }, [
      h,
      g,
      f,
      e
    ]), Be = c.useMemo(() => {
      if (!h || !(f == null ? void 0 : f.titleBlock)) return null;
      try {
        return h.renderTitleBlock(ps(f.titleBlock, ""));
      } catch {
        return null;
      }
    }, [
      h,
      f
    ]), V = c.useMemo(() => {
      if (!h || !(f == null ? void 0 : f.showBom) || y.length === 0) return null;
      try {
        const M = ms();
        return M.length > 0 ? h.renderBomTable(M) : null;
      } catch {
        return null;
      }
    }, [
      h,
      f,
      y
    ]), Ce = c.useMemo(() => {
      if (!te || !o || !h) return [];
      try {
        const M = h.WasmAnnotationLayer, j = new M(), { min_x: _, min_y: L, max_x: U, max_y: se } = te;
        j.addHorizontalDimension(_, L, U, L, -10), j.addVerticalDimension(U, L, U, se, 10);
        const Se = j.renderAll();
        return j.free(), Se;
      } catch {
        return [];
      }
    }, [
      te,
      o,
      h
    ]), ve = c.useCallback((M) => {
      if (M.preventDefault(), M.shiftKey) {
        const U = -M.deltaY * 2e-3;
        a(U);
        return;
      }
      let j = M.deltaX, _ = M.deltaY;
      M.deltaMode === 1 && (j *= 16, _ *= 16), M.deltaMode === 2 && (j *= 100, _ *= 100);
      const L = 0.15 / n;
      if (A.current.x -= j * L, A.current.y -= _ * L, !N.current) {
        N.current = true;
        const U = () => {
          const se = A.current;
          if (Math.abs(se.x) < 0.01 && Math.abs(se.y) < 0.01) {
            N.current = false, se.x = 0, se.y = 0;
            return;
          }
          const me = 0.15;
          r(se.x * me, se.y * me);
          const xe = 0.92;
          se.x *= xe, se.y *= xe, requestAnimationFrame(U);
        };
        requestAnimationFrame(U);
      }
    }, [
      a,
      r,
      n
    ]);
    c.useEffect(() => {
      const M = v.current;
      if (M) return M.addEventListener("wheel", ve, {
        passive: false
      }), () => M.removeEventListener("wheel", ve);
    }, [
      ve
    ]);
    const ce = c.useCallback((M) => {
      (M.button === 1 || M.button === 0 && M.altKey) && (P(true), I({
        x: M.clientX,
        y: M.clientY
      }), A.current = {
        x: 0,
        y: 0
      }, N.current = false, M.target.setPointerCapture(M.pointerId), M.preventDefault());
    }, []), ae = c.useCallback((M) => {
      if (!C) return;
      const j = M.clientX - k.x, _ = M.clientY - k.y;
      I({
        x: M.clientX,
        y: M.clientY
      });
      const L = v.current;
      if (!L) return;
      const U = L.getBoundingClientRect(), me = (te ? (te.max_x - te.min_x) * 1.6 : 100) / U.width / n, xe = j * me, Se = -_ * me;
      r(xe, Se), A.current.x = xe, A.current.y = Se;
    }, [
      C,
      k,
      r,
      n,
      te
    ]), q = c.useCallback((M) => {
      if (C) {
        P(false), M.target.releasePointerCapture(M.pointerId);
        const j = A.current;
        if ((Math.abs(j.x) > 0.1 || Math.abs(j.y) > 0.1) && !N.current) {
          N.current = true;
          const _ = () => {
            if (Math.abs(j.x) < 0.01 && Math.abs(j.y) < 0.01) {
              N.current = false, j.x = 0, j.y = 0;
              return;
            }
            const L = 0.15;
            hn.getState().adjustPan(j.x * L, j.y * L);
            const U = 0.92;
            j.x *= U, j.y *= U, requestAnimationFrame(_);
          };
          requestAnimationFrame(_);
        }
      }
    }, [
      C
    ]), Me = c.useCallback((M, j) => {
      if (j.stopPropagation(), j.shiftKey) if (b.has(M)) {
        const _ = new Set(b);
        _.delete(M), B.getState().selectMultiple(Array.from(_));
      } else B.getState().selectMultiple([
        ...Array.from(b),
        M
      ]);
      else w(M);
    }, [
      b,
      w
    ]), we = c.useCallback(() => {
      S();
    }, [
      S
    ]), ke = c.useCallback(() => {
      l();
    }, [
      l
    ]), Pe = c.useCallback((M, j) => {
      const _ = v.current;
      if (!_ || !te) return null;
      const L = _.getBoundingClientRect(), U = te.max_x - te.min_x, se = te.max_y - te.min_y, me = Math.max(U, se) * 0.3, xe = (U + 2 * me) / n, Se = (se + 2 * me) / n, Fe = te.min_x - me + (U + 2 * me - xe) / 2 - i.x, it = -te.max_y - me + (se + 2 * me - Se) / 2 - i.y, at = Fe + (M - L.left) / L.width * xe, Le = it + (j - L.top) / L.height * Se;
      return {
        x: at,
        y: -Le
      };
    }, [
      te,
      n,
      i
    ]), Te = c.useCallback(() => {
      ie(true), O(null), ee(null);
    }, []), qe = c.useCallback((M) => {
      if (!H) return;
      const j = Pe(M.clientX, M.clientY);
      j && (O(j), ee(j));
    }, [
      H,
      Pe
    ]), ze = c.useCallback((M) => {
      if (!H || !$) return;
      const j = Pe(M.clientX, M.clientY);
      j && ee(j);
    }, [
      H,
      $,
      Pe
    ]), ft = c.useCallback(() => {
      if (!H || !$ || !Z) return;
      const M = Math.min($.x, Z.x), j = Math.max($.x, Z.x), _ = Math.min($.y, Z.y), L = Math.max($.y, Z.y), U = j - M, se = L - _;
      if (U > 0.5 && se > 0.5) {
        const me = (M + j) / 2, xe = (_ + L) / 2, Se = u.length, Fe = String.fromCharCode(65 + Se % 26);
        p({
          centerX: me,
          centerY: xe,
          scale: 2,
          width: U,
          height: se,
          label: Fe
        });
      }
      ie(false), O(null), ee(null);
    }, [
      H,
      $,
      Z,
      u.length,
      p
    ]);
    c.useEffect(() => {
      const M = (j) => {
        j.key === "Escape" && H && (ie(false), O(null), ee(null));
      };
      return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
    }, [
      H
    ]), c.useEffect(() => {
      const M = () => {
        Te();
      };
      return window.addEventListener("vcad:start-detail-view", M), () => window.removeEventListener("vcad:start-detail-view", M);
    }, [
      Te
    ]), c.useEffect(() => {
      const M = () => {
        le(true), F([]), ge(null);
      };
      return window.addEventListener("vcad:start-section-view", M), () => window.removeEventListener("vcad:start-section-view", M);
    }, []);
    const et = c.useCallback(() => {
      if (fe.length >= 2) {
        const M = (f == null ? void 0 : f.sections) ?? [], j = String.fromCharCode(65 + M.length % 26);
        d({
          sections: [
            ...M,
            {
              id: `section-${j}-${Date.now()}`,
              view: e,
              label: j,
              points: fe
            }
          ]
        });
      }
      le(false), F([]), ge(null);
    }, [
      fe,
      f,
      d,
      e
    ]), rt = c.useCallback((M) => {
      const j = Pe(M.clientX, M.clientY);
      j && F((_) => [
        ..._,
        [
          j.x,
          j.y
        ]
      ]);
    }, [
      Pe
    ]), We = c.useCallback((M) => {
      const j = Pe(M.clientX, M.clientY);
      j && ge(j);
    }, [
      Pe
    ]);
    if (c.useEffect(() => {
      if (!D) return;
      const M = (j) => {
        j.key === "Escape" ? (le(false), F([]), ge(null)) : j.key === "Enter" && et();
      };
      return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
    }, [
      D,
      et
    ]), !te || ye.length === 0) return s.jsx("div", {
      className: "flex h-full w-full items-center justify-center",
      style: {
        backgroundColor: X.background,
        color: X.label
      },
      children: "No geometry to display"
    });
    const Ke = te.max_x - te.min_x, R = te.max_y - te.min_y, x = Math.max(Ke, R) * 0.3, z = (Ke + 2 * x) / n, T = (R + 2 * x) / n, Y = te.min_x - x + (Ke + 2 * x - z) / 2 - i.x, K = -te.max_y - x + (R + 2 * x - T) / 2 - i.y, ue = `${Y} ${K} ${z} ${T}`, G = Math.max(Ke, R) * 5e-3 / Math.sqrt(n), Ee = G * 0.6, je = G * 0.4, de = z * 0.015, W = Be ? z * 0.3 / Be.width : 0, Q = Be ? Be.height * W : 0, oe = Be ? Q + de : 0, J = V ? z * 0.3 / V.width : 0;
    return s.jsxs("svg", {
      ref: v,
      className: "h-full w-full select-none",
      viewBox: ue,
      preserveAspectRatio: "xMidYMid meet",
      style: {
        backgroundColor: X.background,
        cursor: H || D ? "crosshair" : C ? "grabbing" : "default"
      },
      onPointerDown: H || D ? void 0 : ce,
      onPointerMove: H || D ? void 0 : ae,
      onPointerUp: H || D ? void 0 : q,
      onPointerLeave: H || D ? void 0 : q,
      onMouseDown: H ? qe : void 0,
      onMouseMove: H ? ze : D ? We : void 0,
      onMouseUp: H ? ft : void 0,
      onClick: H ? void 0 : D ? rt : we,
      onDoubleClick: D ? et : ke,
      children: [
        m && s.jsx("defs", {
          children: s.jsx("pattern", {
            id: "grid",
            width: G * 20,
            height: G * 20,
            patternUnits: "userSpaceOnUse",
            children: s.jsx("path", {
              d: `M ${G * 20} 0 L 0 0 0 ${G * 20}`,
              fill: "none",
              stroke: "#1a1a1a",
              strokeWidth: G * 0.2
            })
          })
        }),
        m && s.jsx("rect", {
          x: Y,
          y: K,
          width: z,
          height: T,
          fill: "url(#grid)"
        }),
        ye.map(({ partId: M, view: j }) => {
          const _ = b.has(M);
          return s.jsxs("g", {
            onClick: (L) => Me(M, L),
            style: {
              cursor: "pointer"
            },
            children: [
              _ && s.jsx("g", {
                children: j.edges.filter((L) => L.visibility === "Visible").map((L, U) => s.jsx("line", {
                  x1: L.start.x,
                  y1: -L.start.y,
                  x2: L.end.x,
                  y2: -L.end.y,
                  stroke: X.selection,
                  strokeWidth: G * 3,
                  strokeLinecap: "round",
                  opacity: 0.3
                }, `sel-${U}`))
              }),
              j.edges.filter((L) => L.visibility === "Visible").map((L, U) => s.jsx("line", {
                x1: L.start.x,
                y1: -L.start.y,
                x2: L.end.x,
                y2: -L.end.y,
                stroke: _ ? X.selection : X.edge,
                strokeWidth: G,
                strokeLinecap: "round"
              }, `v-${U}`)),
              t && j.edges.filter((L) => L.visibility === "Hidden").map((L, U) => s.jsx("line", {
                x1: L.start.x,
                y1: -L.start.y,
                x2: L.end.x,
                y2: -L.end.y,
                stroke: _ ? X.selection : X.hiddenEdge,
                strokeWidth: Ee,
                strokeDasharray: `${G * 3},${G * 2}`,
                strokeLinecap: "round",
                opacity: _ ? 0.7 : 1
              }, `h-${U}`))
            ]
          }, M);
        }),
        Ce.map((M, j) => s.jsxs("g", {
          className: "dimension",
          pointerEvents: "none",
          children: [
            M.lines.map(([_, L], U) => s.jsx("line", {
              x1: _.x,
              y1: -_.y,
              x2: L.x,
              y2: -L.y,
              stroke: X.dimension,
              strokeWidth: je
            }, `l-${U}`)),
            M.arcs.map((_, L) => {
              const U = _.center.x + _.radius * Math.cos(_.start_angle), se = -(_.center.y + _.radius * Math.sin(_.start_angle)), me = _.center.x + _.radius * Math.cos(_.end_angle), xe = -(_.center.y + _.radius * Math.sin(_.end_angle)), Se = Math.abs(_.end_angle - _.start_angle) > Math.PI ? 1 : 0, Fe = _.end_angle > _.start_angle ? 0 : 1;
              return s.jsx("path", {
                d: `M ${U} ${se} A ${_.radius} ${_.radius} 0 ${Se} ${Fe} ${me} ${xe}`,
                fill: "none",
                stroke: X.dimension,
                strokeWidth: je
              }, `arc-${L}`);
            }),
            M.texts.map((_, L) => s.jsx("text", {
              x: _.position.x,
              y: -_.position.y,
              fontSize: _.height / Math.sqrt(n),
              fill: X.dimension,
              textAnchor: "middle",
              dominantBaseline: "middle",
              fontFamily: "monospace",
              fontWeight: m ? "500" : "400",
              transform: `rotate(${-_.rotation * 180 / Math.PI}, ${_.position.x}, ${-_.position.y})`,
              children: _.text
            }, `t-${L}`)),
            M.arrows.map((_, L) => {
              const U = _.direction, se = _.size / Math.sqrt(n), me = _.tip.x, xe = -_.tip.y, Se = Math.PI / 6, Fe = me + se * Math.cos(U + Math.PI - Se), it = xe - se * Math.sin(U + Math.PI - Se), at = me + se * Math.cos(U + Math.PI + Se), Le = xe - se * Math.sin(U + Math.PI + Se);
              return s.jsx("polygon", {
                points: `${me},${xe} ${Fe},${it} ${at},${Le}`,
                fill: X.dimension
              }, `a-${L}`);
            })
          ]
        }, `dim-${j}`)),
        u.map((M) => {
          const j = M.width / 2, _ = M.height / 2;
          return s.jsxs("g", {
            pointerEvents: "none",
            children: [
              s.jsx("circle", {
                cx: M.centerX,
                cy: -M.centerY,
                r: Math.max(j, _) * 1.2,
                fill: "none",
                stroke: X.detailRegion,
                strokeWidth: G * 0.8,
                strokeDasharray: `${G * 2},${G}`
              }),
              s.jsx("text", {
                x: M.centerX,
                y: -M.centerY - Math.max(j, _) * 1.2 - G * 3,
                fontSize: G * 6,
                fill: X.detailRegion,
                textAnchor: "middle",
                fontFamily: "monospace",
                fontWeight: "600",
                children: M.label
              })
            ]
          }, M.id);
        }),
        $e.map(({ def: M }) => {
          const j = M.points;
          if (j.length < 2) return null;
          const _ = j[0], L = j[j.length - 1];
          return s.jsxs("g", {
            pointerEvents: "none",
            children: [
              s.jsx("polyline", {
                points: j.map(([U, se]) => `${U},${-se}`).join(" "),
                fill: "none",
                stroke: X.section,
                strokeWidth: G,
                strokeDasharray: `${G * 6},${G * 2},${G * 2},${G * 2}`
              }),
              [
                _,
                L
              ].map(([U, se], me) => s.jsx("text", {
                x: U,
                y: -se - G * 4,
                fontSize: G * 6,
                fill: X.section,
                textAnchor: "middle",
                fontFamily: "monospace",
                fontWeight: "600",
                children: M.label
              }, `cut-${M.id}-t-${me}`))
            ]
          }, `cut-${M.id}`);
        }),
        D && fe.length > 0 && s.jsxs("g", {
          pointerEvents: "none",
          children: [
            s.jsx("polyline", {
              points: [
                ...fe,
                ...ne ? [
                  [
                    ne.x,
                    ne.y
                  ]
                ] : []
              ].map(([M, j]) => `${M},${-j}`).join(" "),
              fill: "none",
              stroke: X.section,
              strokeWidth: G,
              strokeDasharray: `${G * 3},${G * 2}`
            }),
            fe.map(([M, j], _) => s.jsx("circle", {
              cx: M,
              cy: -j,
              r: G * 2,
              fill: X.section
            }, `sp-${_}`))
          ]
        }),
        H && $ && Z && s.jsx("rect", {
          x: Math.min($.x, Z.x),
          y: -Math.max($.y, Z.y),
          width: Math.abs(Z.x - $.x),
          height: Math.abs(Z.y - $.y),
          fill: X.detailRegionFill,
          stroke: X.detailRegion,
          strokeWidth: G,
          strokeDasharray: `${G * 3},${G * 2}`,
          pointerEvents: "none"
        }),
        s.jsxs("text", {
          x: Y + 5 / n,
          y: K + 5 / n + G * 8,
          fontSize: G * 8,
          fill: X.label,
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
        s.jsxs("text", {
          x: Y + z - 5 / n,
          y: K + 5 / n + G * 8,
          fontSize: G * 6,
          fill: X.label,
          textAnchor: "end",
          dominantBaseline: "hanging",
          fontFamily: "monospace",
          pointerEvents: "none",
          children: [
            Math.round(n * 100),
            "%"
          ]
        }),
        Ve.map(({ def: M, view: j }, _) => {
          const L = Math.min(z, T) * 0.25, U = L * 0.1, se = Y + z - L - U, me = K + T - L * (_ + 1) - U * (_ + 1) - oe, xe = j.bounds.max_x - j.bounds.min_x, Se = j.bounds.max_y - j.bounds.min_y, Fe = Math.min(L * 0.8 / (xe || 1), L * 0.8 / (Se || 1)), it = se + L / 2, at = me + L / 2;
          return s.jsxs("g", {
            children: [
              s.jsx("rect", {
                x: se,
                y: me,
                width: L,
                height: L,
                fill: X.background,
                stroke: X.detailRegion,
                strokeWidth: G
              }),
              s.jsxs("text", {
                x: se + G * 2,
                y: me + G * 5,
                fontSize: G * 5,
                fill: X.detailRegion,
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
              s.jsxs("g", {
                transform: `translate(${it}, ${at}) scale(${Fe})`,
                children: [
                  j.edges.filter((Le) => Le.visibility === "Visible").map((Le, vt) => s.jsx("line", {
                    x1: Le.start.x,
                    y1: -Le.start.y,
                    x2: Le.end.x,
                    y2: -Le.end.y,
                    stroke: X.edge,
                    strokeWidth: G / Fe,
                    strokeLinecap: "round"
                  }, `dv-${M.id}-v-${vt}`)),
                  t && j.edges.filter((Le) => Le.visibility === "Hidden").map((Le, vt) => s.jsx("line", {
                    x1: Le.start.x,
                    y1: -Le.start.y,
                    x2: Le.end.x,
                    y2: -Le.end.y,
                    stroke: X.hiddenEdge,
                    strokeWidth: Ee / Fe,
                    strokeDasharray: `${G * 3 / Fe},${G * 2 / Fe}`,
                    strokeLinecap: "round"
                  }, `dv-${M.id}-h-${vt}`))
                ]
              })
            ]
          }, M.id);
        }),
        $e.map(({ def: M, view: j }, _) => {
          const L = Math.min(z, T) * 0.28, U = L * 0.1, se = Y + U, me = K + T - L * (_ + 1) - U * (_ + 1), xe = j.bounds.max_x - j.bounds.min_x, Se = j.bounds.max_y - j.bounds.min_y, Fe = Math.min(L * 0.8 / (xe || 1), L * 0.8 / (Se || 1)), it = (j.bounds.min_x + j.bounds.max_x) / 2, at = (j.bounds.min_y + j.bounds.max_y) / 2, Le = se + L / 2, vt = me + L / 2;
          return s.jsxs("g", {
            pointerEvents: "none",
            children: [
              s.jsx("rect", {
                x: se,
                y: me,
                width: L,
                height: L,
                fill: X.background,
                stroke: X.section,
                strokeWidth: G
              }),
              s.jsxs("text", {
                x: se + G * 2,
                y: me + G * 5,
                fontSize: G * 5,
                fill: X.section,
                fontFamily: "monospace",
                fontWeight: "600",
                children: [
                  "SECTION ",
                  M.label,
                  "-",
                  M.label
                ]
              }),
              s.jsxs("g", {
                transform: `translate(${Le - it * Fe}, ${vt + at * Fe}) scale(${Fe})`,
                children: [
                  j.curves.map((ct, Ft) => s.jsx("polyline", {
                    points: [
                      ...ct.points,
                      ...ct.is_closed && ct.points.length > 0 ? [
                        ct.points[0]
                      ] : []
                    ].map((Lt) => `${Lt.x},${-Lt.y}`).join(" "),
                    fill: "none",
                    stroke: X.edge,
                    strokeWidth: G * 1.2 / Fe,
                    strokeLinecap: "round"
                  }, `sec-${M.id}-c-${Ft}`)),
                  j.hatch_lines.map(([ct, Ft], Lt) => s.jsx("line", {
                    x1: ct.x,
                    y1: -ct.y,
                    x2: Ft.x,
                    y2: -Ft.y,
                    stroke: X.section,
                    strokeWidth: G * 0.5 / Fe
                  }, `sec-${M.id}-h-${Lt}`))
                ]
              })
            ]
          }, `sec-${M.id}`);
        }),
        Be && yo(Be, Y + z - Be.width * W - de, K + T - de, W, X.sheet, G * 0.5, "titleblock"),
        V && yo(V, Y + z - V.width * J - de, K + T - oe - de * 2, J, X.sheet, G * 0.5, "bom")
      ]
    });
  }
  function tc() {
    const e = B((l) => l.followMode), t = B((l) => l.setFollowMode), o = B((l) => l.setFollowingParticipant), n = It((l) => l.participants), i = c.useCallback((l) => {
      t(l), o(l === "free" ? null : hs);
    }, [
      t,
      o
    ]), a = [];
    if (n.forEach((l) => {
      l.id !== En && a.push(l);
    }), a.length === 0) return null;
    const r = (l, u, p) => {
      const g = e === l;
      return s.jsx("button", {
        type: "button",
        onClick: () => i(l),
        title: p,
        className: Cn("px-2 py-0.5 text-[10px] font-medium rounded-sm transition-colors", g ? "bg-brand text-white" : "text-text-muted hover:text-text hover:bg-hover"),
        children: u
      });
    };
    return s.jsxs("div", {
      className: "pointer-events-auto flex items-center gap-2 rounded-md border border-border/40 bg-surface/90 px-2 py-1 shadow-sm backdrop-blur",
      children: [
        a.map((l) => s.jsxs("div", {
          className: "flex items-center gap-1.5",
          children: [
            s.jsx("span", {
              "aria-hidden": true,
              className: "inline-block h-2 w-2 rounded-full",
              style: {
                background: l.color
              }
            }),
            s.jsx("span", {
              className: "text-[10px] font-semibold text-text",
              children: l.name
            })
          ]
        }, l.id)),
        s.jsx("div", {
          className: "h-3 w-px bg-border/40",
          "aria-hidden": true
        }),
        s.jsxs("div", {
          className: "flex items-center gap-0.5",
          role: "group",
          "aria-label": "AI camera follow mode",
          children: [
            r("free", "Free", "Free: ignore the AI camera"),
            r("follow", "Follow", "Follow: aim your view at the AI's camera frustum"),
            r("lock", "Lock", "Lock: see through the AI's camera in realtime")
          ]
        })
      ]
    });
  }
  function nc() {
    const e = he((l) => l.active), t = re((l) => l.document.schematic), o = _t((l) => l.activeBoardNodeId), n = re((l) => l.document), i = Ae((l) => l.scene), a = re((l) => l.parts), r = o != null ? Rn(n, o) : null;
    c.useEffect(() => {
      if (!e || !t) return;
      const l = setTimeout(async () => {
        const u = await gs(t), p = he.getState();
        p.setNetlist(u);
        const g = new Set(t.components.map((y) => y.ref)), h = new Set(((r == null ? void 0 : r.footprints) ?? []).map((y) => y.ref));
        p.setOrphanFootprints([
          ...h
        ].filter((y) => !g.has(y))), p.setUnplacedComponents([
          ...g
        ].filter((y) => !h.has(y))), o != null && re.getState().syncSchematicToPcb(o, u, {
          placeUnplaced: false
        });
      }, 200);
      return () => clearTimeout(l);
    }, [
      t,
      r,
      e,
      o
    ]), c.useEffect(() => {
      if (!e || !r) return;
      const l = setTimeout(async () => {
        const u = await Mo(r);
        u.status === "ok" && he.getState().setDrcViolations(u.value);
      }, 300);
      return () => clearTimeout(l);
    }, [
      r,
      e
    ]), c.useEffect(() => {
      if (!e || !t) return;
      const l = setTimeout(async () => {
        const u = await xs(t);
        u.status === "ok" && he.getState().setErcViolations(u.value);
      }, 300);
      return () => clearTimeout(l);
    }, [
      t,
      e
    ]), c.useEffect(() => {
      if (!e || !r) {
        he.getState().setInterferingFootprints([]);
        return;
      }
      const l = setTimeout(async () => {
        const u = await ys(r);
        he.getState().setComponentBodies(u);
        const p = [];
        i == null ? void 0 : i.parts.forEach((y, f) => {
          var _a2;
          const d = a[f];
          if (d && Mn(d)) return;
          const b = Hs((_a2 = y.mesh) == null ? void 0 : _a2.positions);
          b && p.push(b);
        });
        const g = o != null ? mn(a, o) : null;
        let h;
        if (g) {
          const y = So(n, g), f = new At().compose(new E(y.position.x, y.position.y, y.position.z), new nt().setFromEuler(new Zt(y.rotationDeg.x * Math.PI / 180, y.rotationDeg.y * Math.PI / 180, y.rotationDeg.z * Math.PI / 180, "ZYX")), new E(y.scale.x, y.scale.y, y.scale.z));
          if (!f.equals(new At())) {
            const b = new E();
            h = (w, S, m) => (b.set(w, S, m).applyMatrix4(f), [
              b.x,
              b.y,
              b.z
            ]);
          }
        }
        he.getState().setInterferingFootprints(Ys(u, p, 0, h));
      }, 400);
      return () => clearTimeout(l);
    }, [
      r,
      e,
      i,
      a
    ]);
  }
  function oc() {
    const e = he((r) => r.active), t = re((r) => r.document), o = _t((r) => r.activeBoardNodeId), n = o != null ? Rn(t, o) : null, i = c.useRef(null), a = c.useRef(null);
    c.useEffect(() => {
      if (!e || !n) return;
      const r = String(o);
      let l = false;
      const u = setTimeout(async () => {
        const p = await Mo(n);
        if (l || p.status !== "ok") return;
        const g = p.value, h = Xs(g), y = he.getState();
        if (a.current !== r) {
          a.current = r, i.current = h, y.clearReceipt();
          return;
        }
        const f = i.current;
        if (i.current = h, !f) return;
        const d = y.consumePendingMutation(), b = Us({
          tool: (d == null ? void 0 : d.tool) ?? "edit",
          args: (d == null ? void 0 : d.args) ?? {},
          before: f,
          after: h
        }, y.receiptEntries.length);
        b.verdict !== "no-op" && y.appendReceiptEntry(b);
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
  const sc = 80;
  function rc() {
    const e = he((l) => l.active), t = he((l) => l.simulating), o = he((l) => l.netlist), n = re((l) => {
      var _a2;
      return (_a2 = l.document.schematic) == null ? void 0 : _a2.components;
    }), i = c.useMemo(() => !t || !n || !o ? "" : JSON.stringify({
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
    ]), a = c.useRef(null), r = c.useRef(null);
    c.useEffect(() => {
      var _a2;
      if (!e || !t || !i) return;
      const l = (_a2 = re.getState().document.schematic) == null ? void 0 : _a2.components, u = he.getState().netlist;
      if (!l || !u) return;
      let p = false;
      const g = vs(l, u), h = he.getState();
      if (g.spec.devices.length === 0) {
        h.clearSim();
        return;
      }
      return h.setSimMaps(Object.fromEntries(g.netToNode), Object.fromEntries(g.refToDevice)), ws(JSON.stringify(g.spec)).then((y) => {
        if (p || !y) return;
        a.current = y;
        const f = () => {
          if (!(p || !a.current)) {
            try {
              const d = a.current.step(sc);
              he.getState().setSimObservation(d.nodeVoltages, d.deviceCurrents, d.rotorAngles);
            } catch (d) {
              console.warn("[circuit-sim] step failed", d);
              return;
            }
            r.current = requestAnimationFrame(f);
          }
        };
        r.current = requestAnimationFrame(f);
      }), () => {
        if (p = true, r.current != null && cancelAnimationFrame(r.current), r.current = null, a.current) {
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
      i
    ]);
  }
  const ic = c.lazy(() => xt(() => import("./SchematicView-BXjiDnCY.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([5,1,2,3,0,4,6,7,8,9,10,11,12,13])).then((e) => ({
    default: e.SchematicView
  }))), ac = c.lazy(() => xt(() => import("./ElectronicsViewToggle-G1S7xB4a.js"), __vite__mapDeps([14,2,3,0,1,4])).then((e) => ({
    default: e.ElectronicsViewToggle
  }))), cc = c.lazy(() => xt(() => import("./LengthTunePanel-Brr0IPBf.js"), __vite__mapDeps([15,2,3,0,1,4])).then((e) => ({
    default: e.LengthTunePanel
  }))), lc = c.lazy(() => xt(() => import("./ReceiptPanel-Bm1jF6UZ.js"), __vite__mapDeps([16,2,3,0,1,4])).then((e) => ({
    default: e.ReceiptPanel
  }))), uc = c.lazy(() => xt(() => import("./PcbGettingStarted-B_ZV-yic.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([17,1,2,3,0,4,6,7,8,9,10,11,12,13])).then((e) => ({
    default: e.PcbGettingStarted
  }))), dc = "transparent", fc = "transparent", Ht = 5;
  function pc({ containerRef: e }) {
    const { camera: t, size: o } = Re(), n = Ae((i) => i.scene);
    return c.useEffect(() => {
      const i = e.current;
      if (!i) return;
      const a = i;
      let r = false, l = {
        x: 0,
        y: 0
      }, u = false, p = null;
      function g(f) {
        f.button === 0 && f.pointerType === "mouse" && (u = f.shiftKey, l = {
          x: f.clientX,
          y: f.clientY
        }, r = true, p = document.createElement("div"), p.className = "pointer-events-none absolute z-20 border-2 border-brand bg-brand/10", p.style.left = "0", p.style.top = "0", p.style.width = "0", p.style.height = "0", p.style.display = "none", a.appendChild(p));
      }
      function h(f) {
        if (!r || !p) return;
        const d = a.getBoundingClientRect(), b = Math.min(l.x, f.clientX) - d.left, w = Math.min(l.y, f.clientY) - d.top, S = Math.abs(f.clientX - l.x), m = Math.abs(f.clientY - l.y);
        (S >= Ht || m >= Ht) && (p.style.display = "block", p.style.left = `${b}px`, p.style.top = `${w}px`, p.style.width = `${S}px`, p.style.height = `${m}px`);
      }
      function y(f) {
        if (!r) return;
        r = false, p && (p.remove(), p = null);
        const d = Math.abs(f.clientX - l.x), b = Math.abs(f.clientY - l.y);
        if (d < Ht && b < Ht) return;
        const w = Ae.getState().scene;
        if (!w) return;
        const S = re.getState().parts, m = B.getState().selectedPartIds, v = a.getBoundingClientRect(), C = Math.min(l.x, f.clientX) - v.left, P = Math.max(l.x, f.clientX) - v.left, k = Math.min(l.y, f.clientY) - v.top, I = Math.max(l.y, f.clientY) - v.top, A = [];
        if (S.forEach((N, H) => {
          const ie = w.parts[H];
          if (!ie) return;
          const $ = ie.mesh;
          if (!$.positions.length) return;
          const O = new ot(), Z = new E();
          for (let ne = 0; ne < $.positions.length; ne += 3) Z.set($.positions[ne], $.positions[ne + 1], $.positions[ne + 2]), O.expandByPoint(Z);
          const ee = [
            new E(O.min.x, O.min.y, O.min.z),
            new E(O.max.x, O.min.y, O.min.z),
            new E(O.min.x, O.max.y, O.min.z),
            new E(O.max.x, O.max.y, O.min.z),
            new E(O.min.x, O.min.y, O.max.z),
            new E(O.max.x, O.min.y, O.max.z),
            new E(O.min.x, O.max.y, O.max.z),
            new E(O.max.x, O.max.y, O.max.z)
          ];
          let D = 1 / 0, le = -1 / 0, fe = 1 / 0, F = -1 / 0;
          for (const ne of ee) {
            ne.project(t);
            const ge = (ne.x + 1) / 2 * o.width, X = (1 - ne.y) / 2 * o.height;
            D = Math.min(D, ge), le = Math.max(le, ge), fe = Math.min(fe, X), F = Math.max(F, X);
          }
          le >= C && D <= P && F >= k && fe <= I && A.push(N.id);
        }), u) {
          const N = /* @__PURE__ */ new Set([
            ...m,
            ...A
          ]);
          B.getState().selectMultiple(Array.from(N));
        } else B.getState().selectMultiple(A);
      }
      return a.addEventListener("pointerdown", g), window.addEventListener("pointermove", h), window.addEventListener("pointerup", y), () => {
        a.removeEventListener("pointerdown", g), window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", y), p && p.remove();
      };
    }, [
      t,
      o,
      e,
      n
    ]), null;
  }
  function mc() {
    const e = c.useRef(null), t = B((C) => C.clearSelection), o = gt((C) => C.selectIssue), n = B((C) => C.hoveredItem), i = B((C) => C.isGizmoHovered), a = B((C) => C.isDraggingGizmo), r = B((C) => C.renderMode), l = B((C) => C.raytraceAvailable), { isDark: u } = st(), p = hn((C) => C.viewMode), g = he((C) => C.active), h = he((C) => C.layout), y = _t((C) => C.activeBoardNodeId) != null, f = Tt(), [d, b] = c.useState(0), w = c.useRef(0), S = c.useRef(false), m = c.useCallback(() => {
      w.current >= 3 || (w.current += 1, S.current = false, b((C) => C + 1));
    }, []), v = c.useCallback(() => {
      S.current = true, performance.mark("canvas-ready");
    }, []);
    return c.useEffect(() => (window.addEventListener("vcad:gl-stuck-lost", m), () => window.removeEventListener("vcad:gl-stuck-lost", m)), [
      m
    ]), c.useEffect(() => {
      const C = setTimeout(() => {
        S.current || m();
      }, 2500), P = setTimeout(() => {
        w.current = 0;
      }, 12e3);
      return () => {
        clearTimeout(C), clearTimeout(P);
      };
    }, [
      d,
      m
    ]), nc(), oc(), rc(), c.useEffect(() => {
      const C = e.current;
      if (!C) return;
      const P = (N) => er(N.clientX, N.clientY), k = (N) => tr(N.clientX, N.clientY), I = () => nr(), A = (N) => {
        N.preventDefault();
      };
      return C.addEventListener("pointerdown", P), window.addEventListener("pointermove", k), window.addEventListener("pointerup", I), window.addEventListener("pointercancel", I), C.addEventListener("contextmenu", A), () => {
        C.removeEventListener("pointerdown", P), window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", I), window.removeEventListener("pointercancel", I), C.removeEventListener("contextmenu", A);
      };
    }, []), c.useEffect(() => {
      const C = e.current;
      C && (C.style.cursor = n && !i && !a ? "pointer" : "");
    }, [
      n,
      i,
      a
    ]), p === "2d" ? s.jsx("div", {
      className: "absolute inset-0 overflow-hidden",
      style: {
        backgroundColor: u ? "#0a0a0a" : "#ffffff"
      },
      children: s.jsx(ec, {})
    }) : s.jsxs("div", {
      ref: e,
      "data-viewport-root": true,
      className: "absolute inset-0",
      style: {
        touchAction: "none",
        userSelect: "none",
        WebkitUserSelect: "none"
      },
      children: [
        s.jsx(Xo, {
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
          onPointerMissed: (C) => {
            if (Qt()) return;
            const P = B.getState();
            P.isDraggingGizmo || P.isGizmoHovered || C.metaKey || C.shiftKey || (g || t(), o(null));
          },
          onCreated: v,
          shadows: "soft",
          gl: {
            alpha: true,
            antialias: true,
            logarithmicDepthBuffer: true,
            toneMapping: Co,
            toneMappingExposure: 1,
            outputColorSpace: xn,
            preserveDrawingBuffer: true
          },
          style: {
            background: "transparent"
          },
          children: s.jsxs(bs, {
            store: Ss,
            children: [
              s.jsx(Ja, {
                mode: "3d",
                pcbEditFocus: y
              }),
              !g && s.jsx(pc, {
                containerRef: e
              })
            ]
          })
        }, d),
        g && s.jsxs(s.Fragment, {
          children: [
            h === "schematic" && s.jsx(c.Suspense, {
              fallback: null,
              children: s.jsx(ic, {})
            }),
            s.jsx(c.Suspense, {
              fallback: null,
              children: s.jsx(cc, {})
            }),
            s.jsx(c.Suspense, {
              fallback: null,
              children: s.jsx(lc, {})
            }),
            s.jsx(c.Suspense, {
              fallback: null,
              children: s.jsx(uc, {})
            }),
            s.jsx(c.Suspense, {
              fallback: null,
              children: s.jsx(ac, {})
            })
          ]
        }),
        !g && !f && r === "raytrace" && l && s.jsx(xi, {}),
        s.jsx(rr, {}),
        !g && s.jsx("div", {
          className: "pointer-events-none absolute top-3 right-3 z-10 flex items-center gap-2",
          children: s.jsx(tc, {})
        })
      ]
    });
  }
  Rc = Object.freeze(Object.defineProperty({
    __proto__: null,
    BG_DARK: dc,
    BG_LIGHT: fc,
    Viewport: mc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Rc as V,
  __tla,
  st as u
};
