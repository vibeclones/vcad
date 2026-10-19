const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BCvZCcjD.js","assets/three-drei-en0aG1CM.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-Dk70Q0wd.css","assets/SchematicView-aCXG3dBE.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-r_zjQeO8.js","assets/index-COhyxsGg.js","assets/camera-settings-store-BT-cypKx.js","assets/timeline-sample-CGUCnv8-.js","assets/xr-collab-h6sEmQvw.js","assets/pcb-interference-D-jt2V7v.js","assets/adapter-BA8pXygB.js","assets/ElectronicsViewToggle-BempfYr1.js","assets/LengthTunePanel-BFXMfnJH.js","assets/ReceiptPanel-CMptmk7h.js","assets/PcbGettingStarted-CQTFPTbB.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { G as vo, L as Ae, c as wo, a as pn, b as Oo, H as it, _ as yt, T as Bo, d as Vo, P as $o, C as Wo, O as Go, e as Ho, f as Yo, E as kn, g as wt } from "./three-drei-en0aG1CM.js";
import { b as c, k as r, d as Pe, f as Qe, C as Xo } from "./three-fiber-GW7QWJN8.js";
import { bc as $, b4 as oe, c3 as Uo, bb as ke, ev as kt, av as Mn, c6 as le, aB as qo, am as Ko, cH as Zo, eL as jt, dB as Jo, af as Qo, aV as es, ai as ts, b5 as De, b8 as It, d as En, aS as ns, aw as os, eM as gt, bl as Pn, aF as Ke, eN as Cn, eO as bo, ba as Ye, eP as In, eQ as ss, dE as Nt, b9 as tt, cr as rs, eR as is, b3 as Tt, ac as jn, ae as as, eS as _t, eT as Rt, b2 as cs, eU as ls, br as us, $ as mn, ad as So, aE as dt, ez as hn, eV as ds, eW as fs, eX as ps, eY as ms, A as hs, eZ as xs, e_ as Mo, e$ as gs, f0 as ys, f1 as vs, f2 as ws, f3 as bs, f4 as Ss, __tla as __tla_0 } from "./index-BCvZCcjD.js";
import { j as ft, k as $e, D as Ue, l as Ut, h as We, aj as Ms, E as Zt, a as E, a5 as rt, F as zt, v as Eo, a1 as Es, af as Ot, b5 as zn, x as Ps, q as Cs, s as js, M as At, Q as st, r as Rs, b6 as ks, b7 as Is, b8 as zs, b9 as An, R as xn, V as Dn, z as As, P as Qt, K as Ds, H as Tn, an as Ts, e as gn, A as Po } from "./three-tnxpQXqG.js";
import { p as _n, f as Co, b as _s, g as jo, a as Ro } from "./sub-feature-geometry-tgU-o6Qd.js";
import { a as Fs, q as Ls, d as Ns } from "./three-postprocessing-r_zjQeO8.js";
import { h as Os, g as Bs } from "./index-COhyxsGg.js";
import { u as Yt, a as Vs, g as $s } from "./camera-settings-store-BT-cypKx.js";
import { s as Ws } from "./timeline-sample-CGUCnv8-.js";
import { j as Gs } from "./xr-collab-h6sEmQvw.js";
import { a as Hs, i as Ys } from "./pcb-interference-D-jt2V7v.js";
import { s as Xs, b as Us } from "./adapter-BA8pXygB.js";
let Dc, at;
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
  at = function() {
    const e = $((s) => s.theme), t = $((s) => s.toggleTheme), o = c.useSyncExternalStore(qs, Ks, () => true);
    return {
      theme: e,
      toggleTheme: t,
      isDark: e === "system" ? o : e === "dark"
    };
  };
  function Zs() {
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
        r.jsx(vo, {
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
  const Js = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, Fn = Js ? 8 : 4, Qs = Fn * Fn, nt = {
    startX: 0,
    startY: 0,
    down: false,
    wasDrag: false
  };
  function er(e, t) {
    nt.startX = e, nt.startY = t, nt.down = true, nt.wasDrag = false;
  }
  function tr(e, t) {
    if (!nt.down || nt.wasDrag) return;
    const o = e - nt.startX, n = t - nt.startY;
    o * o + n * n > Qs && (nt.wasDrag = true);
  }
  function nr() {
    nt.down = false;
  }
  function Jt() {
    return nt.wasDrag;
  }
  const ot = wo((e) => ({
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
    const { positions: o, indices: n, faceKinds: s } = e;
    if (t < 0 || t * 3 + 2 >= n.length) return null;
    const a = n[t * 3], i = n[t * 3 + 1], l = n[t * 3 + 2], u = [
      o[a * 3],
      o[a * 3 + 1],
      o[a * 3 + 2]
    ], f = [
      o[i * 3],
      o[i * 3 + 1],
      o[i * 3 + 2]
    ], h = [
      o[l * 3],
      o[l * 3 + 1],
      o[l * 3 + 2]
    ], m = [
      (u[0] + f[0] + h[0]) / 3,
      (u[1] + f[1] + h[1]) / 3,
      (u[2] + f[2] + h[2]) / 3
    ], y = f[0] - u[0], d = f[1] - u[1], p = f[2] - u[2], w = h[0] - u[0], b = h[1] - u[1], S = h[2] - u[2];
    let x = d * S - p * b, v = p * w - y * S, P = y * b - d * w;
    const C = Math.sqrt(x * x + v * v + P * P);
    C > 0 && (x /= C, v /= C, P /= C);
    let R = 0, I = 0, A = 0;
    const V = o.length / 3;
    for (let xe = 0; xe < V; xe++) R += o[xe * 3], I += o[xe * 3 + 1], A += o[xe * 3 + 2];
    V > 0 && (R /= V, I /= V, A /= V);
    const W = m[0] - R, D = m[1] - I, F = m[2] - A, _ = Math.sqrt(W * W + D * D + F * F) || 1, X = (x * W + v * D + P * F) / _, se = (s == null ? void 0 : s[t]) ?? 0, re = or[se] ?? `kind(${se})`;
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
        f,
        h
      ],
      centroid: m,
      ccwNormal: [
        x,
        v,
        P
      ],
      outwardDot: X
    };
  }
  function rr() {
    const e = ot((i) => i.currentInspection), t = ot((i) => i.setCurrentInspection);
    if (!ot((i) => i.inspectTriangles) || !e) return null;
    const n = ko[e.faceKind] ?? "#888", { outwardDot: s } = e, a = s > 0.5 ? "outward \u2713" : s < -0.5 ? "INWARD \u2717" : "sideways";
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
  function ir() {
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
    const o = ko[e.faceKind] ?? "#ffffff";
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
  const Ln = new We(1, 0.45, 0.1), Nn = new We(0.62, 0.32, 0.1), ar = new We(54527), en = Math.PI / 180, Io = 0.01;
  function zo({ color: e, vertexColors: t, emissive: o, emissiveIntensity: n, metalness: s, roughness: a, envMapIntensity: i = 1, side: l = Ue, transmission: u, ior: f, thickness: h, attenuationDistance: m, attenuationColor: y, clearcoat: d, clearcoatRoughness: p, transparent: w, opacity: b, depthWrite: S }) {
    if (u !== void 0 && u > 0 || d !== void 0 && d > 0) {
      const v = y ? new We(y[0], y[1], y[2]) : void 0;
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
        ior: f ?? 1.5,
        thickness: h ?? 0.5,
        attenuationDistance: m ?? 1 / 0,
        attenuationColor: v,
        clearcoat: d ?? 0,
        clearcoatRoughness: p ?? 0,
        transparent: w || (u ?? 0) > 0,
        opacity: b ?? 1,
        depthWrite: S ?? true
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
      transparent: w,
      opacity: b ?? 1,
      depthWrite: S ?? true
    });
  }
  function cr(e, t) {
    const o = e.indices, n = e.positions, s = o[t * 3], a = o[t * 3 + 1], i = o[t * 3 + 2], l = new E(n[s * 3], n[s * 3 + 1], n[s * 3 + 2]), u = new E(n[a * 3], n[a * 3 + 1], n[a * 3 + 2]), f = new E(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]), h = u.clone().sub(l), m = f.clone().sub(l), y = h.cross(m).normalize(), d = [], p = o.length / 3;
    for (let w = 0; w < p; w++) {
      const b = o[w * 3], S = o[w * 3 + 1], x = o[w * 3 + 2], v = new E(n[b * 3], n[b * 3 + 1], n[b * 3 + 2]), P = new E(n[S * 3], n[S * 3 + 1], n[S * 3 + 2]), C = new E(n[x * 3], n[x * 3 + 1], n[x * 3 + 2]), R = P.clone().sub(v), I = C.clone().sub(v);
      R.cross(I).normalize().dot(y) > 1 - Io && d.push(w);
    }
    return d;
  }
  function lr(e, t) {
    const o = new ft(), n = [];
    for (const s of t) {
      const a = e.indices[s * 3], i = e.indices[s * 3 + 1], l = e.indices[s * 3 + 2];
      n.push(e.positions[a * 3], e.positions[a * 3 + 1], e.positions[a * 3 + 2], e.positions[i * 3], e.positions[i * 3 + 1], e.positions[i * 3 + 2], e.positions[l * 3], e.positions[l * 3 + 1], e.positions[l * 3 + 2]);
    }
    return o.setAttribute("position", new zt(n, 3)), o.computeVertexNormals(), o;
  }
  function On(e, t, o) {
    const n = e.indices[t * 3], s = e.indices[t * 3 + 1], a = e.indices[t * 3 + 2], i = new E(e.positions[n * 3], e.positions[n * 3 + 1], e.positions[n * 3 + 2]), l = new E(e.positions[s * 3], e.positions[s * 3 + 1], e.positions[s * 3 + 2]), u = new E(e.positions[a * 3], e.positions[a * 3 + 1], e.positions[a * 3 + 2]), f = l.clone().sub(i).cross(u.clone().sub(i)).normalize(), h = f.dot(i), m = 0.01, y = /* @__PURE__ */ new Map(), d = e.indices.length / 3;
    for (let P = 0; P < d; P++) {
      const C = e.indices[P * 3], R = e.indices[P * 3 + 1], I = e.indices[P * 3 + 2], A = new E(e.positions[C * 3], e.positions[C * 3 + 1], e.positions[C * 3 + 2]), V = new E(e.positions[R * 3], e.positions[R * 3 + 1], e.positions[R * 3 + 2]), W = new E(e.positions[I * 3], e.positions[I * 3 + 1], e.positions[I * 3 + 2]);
      if (!(V.clone().sub(A).cross(W.clone().sub(A)).normalize().dot(f) < 1 - Io) && !(Math.abs(f.dot(A) - h) > m)) for (const F of [
        A,
        V,
        W
      ]) {
        const _ = `${F.x.toFixed(4)},${F.y.toFixed(4)},${F.z.toFixed(4)}`;
        y.has(_) || y.set(_, {
          x: F.x,
          y: F.y,
          z: F.z
        });
      }
    }
    const p = Array.from(y.values());
    let w = 0, b = 0, S = 0;
    for (const P of p) w += P.x, b += P.y, S += P.z;
    const x = Math.max(p.length, 1), v = {
      x: w / x,
      y: b / x,
      z: S / x
    };
    return {
      partId: o,
      faceIndex: t,
      normal: {
        x: f.x,
        y: f.y,
        z: f.z
      },
      centroid: v,
      vertices: p
    };
  }
  function ur({ mesh: e, materialKey: t }) {
    const o = c.useRef(null), n = c.useRef(null), [s, a] = c.useState(false), i = $((d) => d.showWireframe), l = $((d) => d.isOrbiting), u = Pe((d) => d.invalidate), f = oe((d) => d.document.materials), h = c.useMemo(() => {
      if (f[t]) return f[t];
      const d = kt(t);
      return d ? {
        name: d.name,
        color: d.color,
        metallic: d.metallic,
        roughness: d.roughness,
        transmission: d.transmission,
        ior: d.ior,
        thickness: d.thickness,
        attenuationDistance: d.attenuationDistance,
        attenuationColor: d.attenuationColor,
        clearcoat: d.clearcoat,
        clearcoatRoughness: d.clearcoatRoughness
      } : null;
    }, [
      f,
      t
    ]), m = c.useMemo(() => h ? new We(h.color[0], h.color[1], h.color[2]) : new We(0.55, 0.55, 0.55), [
      h
    ]);
    c.useEffect(() => {
      a(false);
      const d = o.current;
      if (!d) return;
      let p = false;
      return (async () => {
        const { getKernelWasmSync: w } = await yt(async () => {
          const { getKernelWasmSync: R } = await import("./index-BCvZCcjD.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }).then((I) => I.fx);
          return {
            getKernelWasmSync: R
          };
        }, __vite__mapDeps([0,1,2,3,4])), b = w();
        if (p) return;
        const S = new Float32Array(e.positions), x = new Uint32Array(e.indices);
        let v, P, C;
        if (b == null ? void 0 : b.renderBakeMesh) {
          const R = JSON.parse(b.renderBakeMesh(JSON.stringify({
            positions: Array.from(S),
            indices: Array.from(x)
          })));
          v = new Float32Array(R.positions), P = new Uint32Array(R.indices), C = new Float32Array(R.normals);
        } else v = S, P = x, C = new Float32Array(0);
        d.setAttribute("position", new $e(v, 3)), d.setIndex(new $e(P, 1)), C.length === v.length ? d.setAttribute("normal", new $e(C, 3)) : d.computeVertexNormals(), d.computeBoundingSphere(), d.computeBoundingBox(), a(true), u();
      })(), () => {
        p = true, d.dispose();
      };
    }, [
      e,
      u
    ]);
    const y = c.useRef(null);
    return c.useEffect(() => {
      const d = n.current;
      d && (y.current || (y.current = d.raycast.bind(d)), l ? d.raycast = () => {
      } : d.raycast = y.current);
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
        r.jsx(zo, {
          color: m,
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
        i && s && r.jsx(pn, {
          threshold: 15,
          color: "#666"
        })
      ]
    });
  }
  const Bn = c.memo(function({ partInfo: t, mesh: o, materialKey: n, selected: s, transform: a, selectionId: i, ghosted: l = false }) {
    const u = c.useRef(null), f = c.useRef(null), [h, m] = c.useState(false), y = $((j) => j.select), d = $((j) => j.toggleSelect), p = $((j) => j.selectItem), w = $((j) => j.setHoveredItem), b = $((j) => j.selectionFilter), S = $((j) => j.showWireframe), x = $((j) => j.hoveredPartId), v = $((j) => j.setHoveredPartId), P = Pe((j) => j.camera), C = Pe((j) => j.size), R = Pe((j) => j.invalidate), I = oe((j) => j.document.materials), A = oe((j) => j.renamePart), V = Uo((j) => {
      var _a2;
      return ((_a2 = j.fieldOverlay) == null ? void 0 : _a2.partId) === t.id ? j.fieldOverlay.colors : null;
    }), W = ke((j) => j.faceSelectionMode), D = ke((j) => j.hoveredFace), F = ke((j) => j.setHoveredFace), _ = ke((j) => j.selectFace), X = $((j) => j.isOrbiting), se = $((j) => j.isDraggingGizmo), re = $((j) => j.isGizmoHovered), xe = $((j) => j.captureMode), ge = s && !xe, O = i ?? t.id, ie = $((j) => j.hoveredItem), Ce = x === O || ie != null && ie.kind !== "segment" && ie.kind !== "constraint" && (ie.kind === "part" ? ie.id === O : ie.partId === t.id), ee = W && (D == null ? void 0 : D.partId) === t.id, Ee = c.useMemo(() => {
      if (X || !ee || (D == null ? void 0 : D.faceIndex) == null) return null;
      const j = cr(o, D.faceIndex);
      return lr(o, j);
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
    const [de, be] = c.useState(false), [Fe, Ge] = c.useState(t.name), Oe = c.useRef(null), Se = $((j) => j.previewMaterial), Ie = c.useMemo(() => (Se == null ? void 0 : Se.partId) === t.id ? Se.materialKey : n, [
      Se,
      t.id,
      n
    ]), me = c.useMemo(() => {
      const j = (g) => g ? {
        name: g.name,
        color: g.color,
        metallic: g.metallic,
        roughness: g.roughness,
        transmission: g.transmission,
        ior: g.ior,
        thickness: g.thickness,
        attenuationDistance: g.attenuationDistance,
        attenuationColor: g.attenuationColor,
        clearcoat: g.clearcoat,
        clearcoatRoughness: g.clearcoatRoughness
      } : null;
      if ((Se == null ? void 0 : Se.partId) === t.id) {
        const g = Se.materialKey;
        if (I[g]) return I[g];
        const z = j(kt(g));
        if (z) return z;
      }
      return I[n] ? I[n] : j(kt(n));
    }, [
      I,
      n,
      Se,
      t.id
    ]), je = c.useMemo(() => Os(Ie) ? Bs(Ie) : null, [
      Ie
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
    const B = c.useMemo(() => me ? new We(me.color[0], me.color[1], me.color[2]) : new We(0.55, 0.55, 0.55), [
      me
    ]), Ne = !l && !xe && (ge || Ce && !W), Xe = c.useMemo(() => {
      var _a2;
      if (!h) return false;
      const j = u.current;
      if (!j) return false;
      const g = new Ms(j, 15), z = ((_a2 = g.attributes.position) == null ? void 0 : _a2.count) ?? 0;
      return g.dispose(), z === 0;
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
      m(false);
      const j = u.current;
      if (!j) return;
      const g = new Float32Array(o.positions), z = new Uint32Array(o.indices);
      if (j.setAttribute("position", new $e(g, 3)), j.setIndex(new $e(z, 1)), o.normals && o.normals.length === g.length) {
        const L = new Float32Array(o.normals);
        j.setAttribute("normal", new $e(L, 3));
      } else console.warn("[SceneMesh] kernel emitted mesh without normals \u2014 rebuild @vcad/kernel-wasm; falling back to computed normals"), j.computeVertexNormals();
      if (V && V.length === g.length) j.setAttribute("color", new $e(V, 3));
      else if (o.colors && o.colors.length === g.length) {
        const L = new Float32Array(o.colors);
        j.setAttribute("color", new $e(L, 3));
      } else j.deleteAttribute("color");
      return j.computeBoundingSphere(), j.computeBoundingBox(), m(true), R(), () => {
        j.dispose();
      };
    }, [
      o,
      t.name,
      R,
      V
    ]), c.useEffect(() => {
      const j = f.current;
      if (j) {
        if (a) {
          j.position.set(a.translation.x, a.translation.y, a.translation.z);
          const g = new Zt(a.rotation.x * en, a.rotation.y * en, a.rotation.z * en, "ZYX");
          j.quaternion.setFromEuler(g), j.scale.set(a.scale.x, a.scale.y, a.scale.z);
        } else j.position.set(0, 0, 0), j.quaternion.identity(), j.scale.set(1, 1, 1);
        R();
      }
    }, [
      a,
      R
    ]);
    const ae = c.useMemo(() => {
      if (!o.positions.length) return new E();
      const j = new rt(), g = new E();
      for (let L = 0; L < o.positions.length; L += 3) g.set(o.positions[L], o.positions[L + 1], o.positions[L + 2]), j.expandByPoint(g);
      const z = new E();
      return j.getCenter(z), z.z = j.max.z + 4, z;
    }, [
      o.positions
    ]), Q = c.useCallback(() => {
      const j = Fe.trim();
      j && j !== t.name && A(t.id, j), be(false);
    }, [
      Fe,
      t.id,
      t.name,
      A
    ]), U = c.useCallback(() => {
      Ge(t.name), be(false);
    }, [
      t.name
    ]), we = ot((j) => j.inspectTriangles), he = ot((j) => j.setCurrentInspection), He = c.useCallback((j) => {
      if (Jt() || se || re) return;
      if (j.stopPropagation(), we && j.faceIndex != null) {
        const z = sr(o, j.faceIndex);
        z && (he(z), console.log("[triangle-inspector]", z));
        return;
      }
      if (W && j.faceIndex != null) {
        const z = On(o, j.faceIndex, t.id);
        _(z);
        return;
      }
      if (j.nativeEvent.shiftKey || j.nativeEvent.metaKey) {
        d(O);
        return;
      }
      if (j.faceIndex != null) {
        const z = _n({
          triIndex: j.faceIndex,
          hitPoint: j.point,
          mesh: o,
          partId: t.id,
          filter: b,
          camera: P,
          viewport: C
        });
        if (z) {
          p(z);
          return;
        }
      }
      y(O);
    }, [
      O,
      se,
      re,
      W,
      o,
      t.id,
      _,
      d,
      y,
      p,
      b,
      P,
      C,
      we,
      he
    ]), ze = c.useCallback((j) => {
      if (!(X || se || re)) {
        if (W && j.faceIndex != null) {
          j.stopPropagation();
          const g = On(o, j.faceIndex, t.id);
          F(g);
          return;
        }
        if (j.faceIndex != null) {
          j.stopPropagation();
          const g = _n({
            triIndex: j.faceIndex,
            hitPoint: j.point,
            mesh: o,
            partId: t.id,
            filter: b,
            camera: P,
            viewport: C
          });
          w(g || {
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
      w,
      b,
      P,
      C
    ]), Ze = c.useCallback((j) => {
      X || se || re || (j.stopPropagation(), W || v(t.id));
    }, [
      X,
      se,
      re,
      W,
      t.id,
      v
    ]), Te = c.useCallback(() => {
      X || (W ? F(null) : v(null));
    }, [
      X,
      W,
      F,
      v
    ]), qe = c.useRef(null);
    return c.useEffect(() => {
      const j = f.current;
      j && (qe.current || (qe.current = j.raycast.bind(j)), X || l ? j.raycast = () => {
      } : j.raycast = qe.current);
    }, [
      X,
      l
    ]), r.jsxs("mesh", {
      ref: f,
      castShadow: true,
      receiveShadow: true,
      onClick: He,
      onPointerMove: ze,
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
        !Le && r.jsx(zo, {
          color: o.colors || V ? void 0 : B,
          vertexColors: !!o.colors || !!V,
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
        S && h && r.jsx(pn, {
          threshold: 15,
          color: "#666"
        }),
        Ne && h && !Xe && r.jsx(pn, {
          threshold: 15,
          color: ge ? Ln : Nn,
          lineWidth: ge ? 3 : 2,
          renderOrder: 1
        }),
        Ne && h && Xe && r.jsx(Oo, {
          color: ge ? Ln : Nn,
          thickness: ge ? 3 : 2,
          angle: Math.PI,
          renderOrder: 1
        }),
        Ee && r.jsx("mesh", {
          geometry: Ee,
          renderOrder: 1,
          children: r.jsx("meshBasicMaterial", {
            color: ar,
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
                onClick: (j) => j.stopPropagation(),
                onFocus: (j) => j.currentTarget.select(),
                onChange: (j) => Ge(j.target.value),
                onBlur: Q,
                onKeyDown: (j) => {
                  j.key === "Enter" && Q(), j.key === "Escape" && U();
                },
                className: "min-w-[80px] bg-transparent text-text outline-none",
                autoFocus: true
              }) : r.jsx("button", {
                type: "button",
                onClick: (j) => {
                  j.stopPropagation(), be(true);
                },
                className: "text-text",
                children: t.name
              }),
              !de && Mn(t) && r.jsx("button", {
                type: "button",
                onClick: (j) => {
                  j.stopPropagation(), le.getState().enter();
                },
                className: "px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors",
                children: "Edit"
              }),
              !de && (qo(t) || Ko(t)) && r.jsx("button", {
                type: "button",
                onClick: (j) => {
                  j.stopPropagation(), Zo.getState().openPanel();
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
    const n = e.species[e.speciesIdx[t]], s = (n == null ? void 0 : n.radius) ?? fr[(n == null ? void 0 : n.element) ?? "C"] ?? 0.75;
    return o === "space_filling" ? s * 1.8 : o === "wireframe" ? s * 0.2 : s * 0.42;
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
}`, xr = `
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
  function gr({ molecule: e, representation: t = "ball_and_stick" }) {
    const o = c.useRef(null), n = c.useRef(null), s = jt((S) => S.selectAtom), a = e.positions.length, i = e.bonds ?? [], l = t !== "space_filling", u = c.useMemo(() => {
      let S = 1e-3;
      for (const x of e.positions) S = Math.max(S, Math.hypot(x[0], x[1], x[2]));
      return 34 / S;
    }, [
      e
    ]), f = c.useMemo(() => {
      const S = new Eo(2, 2), x = new Es();
      x.index = S.index, x.attributes.position = S.attributes.position, x.attributes.uv = S.attributes.uv;
      const v = new Float32Array(a * 3), P = new Float32Array(a), C = new Float32Array(a * 3), R = new Float32Array(a);
      for (let I = 0; I < a; I++) {
        const A = e.positions[I];
        v[I * 3] = A[0] * u, v[I * 3 + 1] = A[1] * u, v[I * 3 + 2] = A[2] * u, P[I] = Vn(e, I, t) * u;
        const V = tn(e, I);
        C[I * 3] = V[0], C[I * 3 + 1] = V[1], C[I * 3 + 2] = V[2], R[I] = I;
      }
      return x.setAttribute("iCenter", new Ot(v, 3)), x.setAttribute("iRadius", new Ot(P, 1)), x.setAttribute("iColor", new Ot(C, 3)), x.setAttribute("iIndex", new Ot(R, 1)), x.instanceCount = a, S.dispose(), x;
    }, [
      e,
      a,
      t,
      u
    ]), h = c.useMemo(() => new Ut({
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
    }), []), m = c.useMemo(() => new Ps(1, 12, 8), []), y = c.useMemo(() => new Cs({
      colorWrite: false,
      depthWrite: false
    }), []), d = c.useMemo(() => new js(1, 1, 1, 12, 1), []), p = c.useMemo(() => new Ut({
      glslVersion: zn,
      uniforms: {
        logDepthBufFC: {
          value: 1
        }
      },
      vertexShader: hr,
      fragmentShader: xr
    }), []), w = l ? i.length * 2 : 0;
    c.useEffect(() => () => f.dispose(), [
      f
    ]), c.useEffect(() => () => {
      h.dispose(), m.dispose(), y.dispose(), d.dispose(), p.dispose();
    }, [
      h,
      m,
      y,
      d,
      p
    ]), c.useLayoutEffect(() => {
      const S = o.current;
      if (!S || !l) return;
      const x = (t === "wireframe" ? 0.05 : 0.11) * u, v = new At(), P = new E(), C = new E(), R = new st(), I = new E(0, 1, 0), A = new E(), V = new E(), W = new E(), D = new E(), F = new We();
      let _ = 0;
      for (const X of i) {
        const se = e.positions[X.a], re = e.positions[X.b];
        A.set(se[0] * u, se[1] * u, se[2] * u), V.set(re[0] * u, re[1] * u, re[2] * u), D.addVectors(A, V).multiplyScalar(0.5), W.subVectors(V, A);
        const xe = W.length();
        if (xe < 1e-6) {
          v.makeScale(0, 0, 0), S.setMatrixAt(_, v), S.setMatrixAt(_ + 1, v), _ += 2;
          continue;
        }
        W.normalize(), R.setFromUnitVectors(I, W), C.set(x, xe / 2, x), P.addVectors(A, D).multiplyScalar(0.5), v.compose(P, R, C), S.setMatrixAt(_, v);
        const ge = tn(e, X.a);
        F.setRGB(ge[0], ge[1], ge[2]), S.setColorAt(_, F), P.addVectors(D, V).multiplyScalar(0.5), v.compose(P, R, C), S.setMatrixAt(_ + 1, v);
        const O = tn(e, X.b);
        F.setRGB(O[0], O[1], O[2]), S.setColorAt(_ + 1, F), _ += 2;
      }
      S.count = w, S.instanceMatrix.needsUpdate = true, S.instanceColor && (S.instanceColor.needsUpdate = true);
    }, [
      e,
      i,
      l,
      t,
      w,
      u
    ]), c.useLayoutEffect(() => {
      const S = n.current;
      if (!S) return;
      const x = new At(), v = new E(), P = new E(), C = new st();
      for (let R = 0; R < a; R++) {
        const I = e.positions[R], A = Vn(e, R, t) * u;
        v.set(I[0] * u, I[1] * u, I[2] * u), P.set(A, A, A), x.compose(v, C, P), S.setMatrixAt(R, x);
      }
      S.count = a, S.instanceMatrix.needsUpdate = true;
    }, [
      e,
      a,
      t,
      u
    ]), Qe(({ camera: S }) => {
      const x = 2 / Math.log2(S.far + 1);
      h.uniforms.logDepthBufFC.value = x, p.uniforms.logDepthBufFC.value = x;
      const v = jt.getState().selectedAtomIndex;
      h.uniforms.uSelected.value = v ?? -1;
    });
    const b = (S) => {
      if (Jt()) return;
      S.stopPropagation();
      const x = S.instanceId;
      if (x === void 0) return;
      const v = jt.getState().selectedAtomIndex;
      s(v === x ? null : x);
    };
    return a === 0 ? null : r.jsxs("group", {
      children: [
        r.jsx("mesh", {
          geometry: f,
          material: h,
          frustumCulled: false
        }),
        r.jsx("instancedMesh", {
          ref: n,
          args: [
            m,
            y,
            a
          ],
          frustumCulled: false,
          onClick: b
        }, a),
        l && i.length > 0 && r.jsx("instancedMesh", {
          ref: o,
          args: [
            d,
            p,
            w
          ],
          frustumCulled: false
        })
      ]
    });
  }
  function yr(e, t) {
    const o = /* @__PURE__ */ new Map(), n = (i, l) => i < l ? `${i},${l}` : `${l},${i}`, s = t.length / 3;
    for (let i = 0; i < s; i++) {
      const l = t[3 * i], u = t[3 * i + 1], f = t[3 * i + 2];
      for (const [h, m] of [
        [
          l,
          u
        ],
        [
          u,
          f
        ],
        [
          f,
          l
        ]
      ]) {
        const y = n(h, m);
        o.set(y, (o.get(y) ?? 0) + 1);
      }
    }
    const a = [];
    for (const [i, l] of o) {
      if (l !== 1) continue;
      const [u, f] = i.split(","), h = parseInt(u, 10), m = parseInt(f, 10);
      a.push(e[3 * h], e[3 * h + 1], e[3 * h + 2], e[3 * m], e[3 * m + 1], e[3 * m + 2]);
    }
    return new Float32Array(a);
  }
  function vr({ positions: e, indices: t }) {
    const o = c.useMemo(() => {
      const n = yr(e, t), s = new ft();
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
  function Mr() {
    const e = $((f) => f.clearanceIndicator), t = $((f) => f.captureMode);
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
  function Er({ mesh: e }) {
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
  const Pr = "#ff4d4d", Cr = "#2fbf71";
  function $n({ mesh: e, color: t }) {
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
  function jr() {
    const e = Jo((t) => t.ghost);
    return e ? r.jsxs("group", {
      children: [
        e.removed.map((t, o) => r.jsx($n, {
          mesh: t,
          color: Pr
        }, `r${o}`)),
        e.added.map((t, o) => r.jsx($n, {
          mesh: t,
          color: Cr
        }, `a${o}`))
      ]
    }) : null;
  }
  const et = 10, Bt = 200, Rr = 5;
  function Je(e) {
    return new E(e.x, e.y, e.z);
  }
  function qt({ position: e, screenPx: t = 1, children: o }) {
    const n = c.useRef(null), { camera: s, size: a } = Pe(), i = c.useRef(new E());
    return Qe(() => {
      const l = n.current;
      if (!l) return;
      const u = Array.isArray(e) ? i.current.fromArray(e) : e, f = s, h = f.position.distanceTo(u), m = (f.fov ?? 50) * Math.PI / 180, y = 2 * h * Math.tan(m / 2) / a.height;
      l.scale.setScalar(Math.max(1e-4, t * y));
    }), r.jsx("group", {
      ref: n,
      position: e,
      children: o
    });
  }
  function _e(e, t, o, n) {
    return new E(t.x + e.x * o.x + e.y * n.x, t.y + e.x * o.y + e.y * n.y, t.z + e.x * o.z + e.y * n.z);
  }
  function Wn(e, t, o, n) {
    const s = e.x - t.x, a = e.y - t.y, i = e.z - t.z;
    return {
      x: s * o.x + a * o.y + i * o.z,
      y: s * n.x + a * n.y + i * n.z
    };
  }
  function kr({ origin: e, xDir: t, yDir: o, bounds: n }) {
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
      const h = [], m = Je(e), y = Je(t), d = Je(o), p = s ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
      for (let w = a.minV; w <= a.maxV; w += et) {
        if (w === 0) continue;
        const b = m.clone().add(y.clone().multiplyScalar(a.minU)).add(d.clone().multiplyScalar(w)), S = m.clone().add(y.clone().multiplyScalar(a.maxU)).add(d.clone().multiplyScalar(w));
        h.push({
          points: [
            [
              b.x,
              b.y,
              b.z
            ],
            [
              S.x,
              S.y,
              S.z
            ]
          ],
          color: p,
          width: 1
        });
      }
      for (let w = a.minU; w <= a.maxU; w += et) {
        if (w === 0) continue;
        const b = m.clone().add(d.clone().multiplyScalar(a.minV)).add(y.clone().multiplyScalar(w)), S = m.clone().add(d.clone().multiplyScalar(a.maxV)).add(y.clone().multiplyScalar(w));
        h.push({
          points: [
            [
              b.x,
              b.y,
              b.z
            ],
            [
              S.x,
              S.y,
              S.z
            ]
          ],
          color: p,
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
      const h = Je(e), m = Je(t), y = h.clone().add(m.clone().multiplyScalar(a.minU)), d = h.clone().add(m.clone().multiplyScalar(a.maxU));
      return [
        [
          y.x,
          y.y,
          y.z
        ],
        [
          d.x,
          d.y,
          d.z
        ]
      ];
    }, [
      e,
      t,
      a
    ]), u = c.useMemo(() => {
      const h = Je(e), m = Je(o), y = h.clone().add(m.clone().multiplyScalar(a.minV)), d = h.clone().add(m.clone().multiplyScalar(a.maxV));
      return [
        [
          y.x,
          y.y,
          y.z
        ],
        [
          d.x,
          d.y,
          d.z
        ]
      ];
    }, [
      e,
      o,
      a
    ]), f = c.useMemo(() => Je(e), [
      e
    ]);
    return r.jsxs("group", {
      children: [
        i.map((h, m) => r.jsx(Ae, {
          points: h.points,
          color: s ? "#404040" : "#888888",
          lineWidth: h.width,
          transparent: true,
          opacity: 0.3,
          depthWrite: false
        }, m)),
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
          position: f,
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
  function Ir({ segments: e, selectedSegments: t, constraints: o, pendingPoints: n, origin: s, xDir: a, yDir: i }) {
    const { isDark: l } = at(), u = c.useMemo(() => e.map((y, d) => {
      const p = t.includes(d), w = _e(y.start, s, a, i), b = _e(y.end, s, a, i);
      if (y.type === "Line") return {
        type: "line",
        points: [
          [
            w.x,
            w.y,
            w.z
          ],
          [
            b.x,
            b.y,
            b.z
          ]
        ],
        color: p ? "#f59e0b" : "#3b82f6",
        width: p ? 3 : 2,
        start: w,
        end: b
      };
      {
        const S = _e(y.center, s, a, i), x = w.distanceTo(S), v = Math.atan2(y.start.y - y.center.y, y.start.x - y.center.x), P = Math.atan2(y.end.y - y.center.y, y.end.x - y.center.x), C = [], R = 16;
        let I = P - v;
        y.ccw && I < 0 && (I += 2 * Math.PI), !y.ccw && I > 0 && (I -= 2 * Math.PI);
        for (let A = 0; A <= R; A++) {
          const V = A / R, W = v + I * V, D = {
            x: y.center.x + x * Math.cos(W),
            y: y.center.y + x * Math.sin(W)
          }, F = _e(D, s, a, i);
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
          start: w,
          end: b
        };
      }
    }), [
      e,
      t,
      s,
      a,
      i
    ]), f = c.useMemo(() => {
      const y = [], d = /* @__PURE__ */ new Set();
      for (const p of e) {
        const w = _e(p.start, s, a, i), b = _e(p.end, s, a, i), S = `${w.x.toFixed(2)},${w.y.toFixed(2)},${w.z.toFixed(2)}`, x = `${b.x.toFixed(2)},${b.y.toFixed(2)},${b.z.toFixed(2)}`;
        d.has(S) || (d.add(S), y.push(w)), d.has(x) || (d.add(x), y.push(b));
      }
      return y;
    }, [
      e,
      s,
      a,
      i
    ]), h = c.useMemo(() => n.map((y) => _e(y, s, a, i)), [
      n,
      s,
      a,
      i
    ]), m = c.useMemo(() => {
      const y = [];
      for (const d of o) if (d.type === "Horizontal") {
        const p = e[d.line];
        if ((p == null ? void 0 : p.type) === "Line") {
          const w = {
            x: (p.start.x + p.end.x) / 2,
            y: (p.start.y + p.end.y) / 2 + 3
          };
          y.push({
            position: _e(w, s, a, i),
            text: "H",
            color: "#22c55e"
          });
        }
      } else if (d.type === "Vertical") {
        const p = e[d.line];
        if ((p == null ? void 0 : p.type) === "Line") {
          const w = {
            x: (p.start.x + p.end.x) / 2 + 3,
            y: (p.start.y + p.end.y) / 2
          };
          y.push({
            position: _e(w, s, a, i),
            text: "V",
            color: "#22c55e"
          });
        }
      } else if (d.type === "Length") {
        const p = e[d.line];
        if ((p == null ? void 0 : p.type) === "Line") {
          const w = {
            x: (p.start.x + p.end.x) / 2,
            y: (p.start.y + p.end.y) / 2 - 3
          };
          y.push({
            position: _e(w, s, a, i),
            text: `${d.length}`,
            color: "#a855f7"
          });
        }
      } else if (d.type === "Parallel") {
        const p = e[d.lineA], w = e[d.lineB];
        if ((p == null ? void 0 : p.type) === "Line" && (w == null ? void 0 : w.type) === "Line") {
          const b = {
            x: (p.start.x + p.end.x) / 2,
            y: (p.start.y + p.end.y) / 2 + 3
          }, S = {
            x: (w.start.x + w.end.x) / 2,
            y: (w.start.y + w.end.y) / 2 + 3
          };
          y.push({
            position: _e(b, s, a, i),
            text: "//",
            color: "#06b6d4"
          }), y.push({
            position: _e(S, s, a, i),
            text: "//",
            color: "#06b6d4"
          });
        }
      } else if (d.type === "Perpendicular") {
        const p = e[d.lineA];
        if ((p == null ? void 0 : p.type) === "Line") {
          const w = {
            x: (p.start.x + p.end.x) / 2,
            y: (p.start.y + p.end.y) / 2 + 3
          };
          y.push({
            position: _e(w, s, a, i),
            text: "\u22A5",
            color: "#f43f5e"
          });
        }
      } else if (d.type === "EqualLength") {
        const p = e[d.lineA], w = e[d.lineB];
        if ((p == null ? void 0 : p.type) === "Line" && (w == null ? void 0 : w.type) === "Line") {
          const b = {
            x: (p.start.x + p.end.x) / 2,
            y: (p.start.y + p.end.y) / 2 + 3
          }, S = {
            x: (w.start.x + w.end.x) / 2,
            y: (w.start.y + w.end.y) / 2 + 3
          };
          y.push({
            position: _e(b, s, a, i),
            text: "=",
            color: "#eab308"
          }), y.push({
            position: _e(S, s, a, i),
            text: "=",
            color: "#eab308"
          });
        }
      }
      return y;
    }, [
      o,
      e,
      s,
      a,
      i
    ]);
    return r.jsxs("group", {
      children: [
        u.map((y, d) => r.jsx(Ae, {
          points: y.points,
          color: y.color,
          lineWidth: y.width,
          depthWrite: false
        }, d)),
        f.map((y, d) => r.jsx(qt, {
          position: y,
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
        }, d)),
        h.map((y, d) => r.jsx(qt, {
          position: y,
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
        }, `pending-${d}`)),
        m.map((y, d) => r.jsx(it, {
          position: y.position,
          center: true,
          children: r.jsx("div", {
            className: "pointer-events-none select-none whitespace-nowrap text-xs font-bold",
            style: {
              color: y.color
            },
            children: y.text
          })
        }, d))
      ]
    });
  }
  function zr({ cursorWorldPos: e, cursorSketchPos: t, snapTarget: o, gridSnap: n, previewLine: s, previewRect: a, previewCircle: i, origin: l, xDir: u, yDir: f }) {
    const h = c.useMemo(() => e ? Je(e) : null, [
      e
    ]), m = 14, y = c.useMemo(() => {
      const x = Je(u);
      return [
        [
          -x.x * m,
          -x.y * m,
          -x.z * m
        ],
        [
          x.x * m,
          x.y * m,
          x.z * m
        ]
      ];
    }, [
      u
    ]), d = c.useMemo(() => {
      const x = Je(f);
      return [
        [
          -x.x * m,
          -x.y * m,
          -x.z * m
        ],
        [
          x.x * m,
          x.y * m,
          x.z * m
        ]
      ];
    }, [
      f
    ]), p = c.useMemo(() => {
      if (!s) return null;
      const x = _e(s.start, l, u, f), v = _e(s.end, l, u, f);
      return [
        [
          x.x,
          x.y,
          x.z
        ],
        [
          v.x,
          v.y,
          v.z
        ]
      ];
    }, [
      s,
      l,
      u,
      f
    ]), w = c.useMemo(() => {
      if (!a) return null;
      const { p1: x, p2: v } = a, P = Math.min(x.x, v.x), C = Math.max(x.x, v.x), R = Math.min(x.y, v.y), I = Math.max(x.y, v.y);
      return [
        {
          x: P,
          y: R
        },
        {
          x: C,
          y: R
        },
        {
          x: C,
          y: I
        },
        {
          x: P,
          y: I
        },
        {
          x: P,
          y: R
        }
      ].map((V) => {
        const W = _e(V, l, u, f);
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
      f
    ]), b = c.useMemo(() => {
      if (!i || i.radius < 0.1) return null;
      const { center: x, radius: v } = i, P = 32, C = [];
      for (let R = 0; R <= P; R++) {
        const I = 2 * Math.PI * R / P, A = {
          x: x.x + v * Math.cos(I),
          y: x.y + v * Math.sin(I)
        }, V = _e(A, l, u, f);
        C.push([
          V.x,
          V.y,
          V.z
        ]);
      }
      return C;
    }, [
      i,
      l,
      u,
      f
    ]), S = c.useMemo(() => o ? _e(o, l, u, f) : null, [
      o,
      l,
      u,
      f
    ]);
    return !h || !t || !y || !d ? null : r.jsxs("group", {
      children: [
        r.jsxs(qt, {
          position: h,
          children: [
            r.jsx(Ae, {
              points: y,
              color: n && !o ? "#06b6d4" : "rgba(255,255,255,0.5)",
              lineWidth: n && !o ? 1.5 : 1,
              depthWrite: false
            }),
            r.jsx(Ae, {
              points: d,
              color: n && !o ? "#06b6d4" : "rgba(255,255,255,0.5)",
              lineWidth: n && !o ? 1.5 : 1,
              depthWrite: false
            })
          ]
        }),
        p && r.jsx(Ae, {
          points: p,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        w && r.jsx(Ae, {
          points: w,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        b && r.jsx(Ae, {
          points: b,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        S && r.jsxs(qt, {
          position: S,
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
  function Ar() {
    const { raycaster: e } = Pe(), t = ke((O) => O.active), o = ke((O) => O.plane), n = ke((O) => O.origin), s = ke((O) => O.segments), a = ke((O) => O.constraints), i = ke((O) => O.tool), l = ke((O) => O.constraintTool), u = ke((O) => O.points), f = ke((O) => O.selectedSegments), h = ke((O) => O.cursorWorldPos), m = ke((O) => O.cursorSketchPos), y = ke((O) => O.snapTarget), d = ke((O) => O.selectedFace), p = ke((O) => O.addPoint), w = ke((O) => O.finishShape), b = ke((O) => O.toggleSegmentSelection), S = ke((O) => O.setCursorPos), x = $((O) => O.gridSnap), v = $((O) => O.pointSnap), P = l !== "none", C = c.useMemo(() => ({
      ...Qo(o),
      origin: n
    }), [
      o,
      n
    ]), R = c.useMemo(() => {
      const O = d == null ? void 0 : d.vertices;
      if (!O || O.length === 0) return null;
      const ie = O.map((be) => Wn(Je(be), C.origin, C.xDir, C.yDir));
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
      d,
      C
    ]), I = c.useMemo(() => {
      if (!R || R.vertices.length === 0) return s;
      const O = R.vertices.map((ie) => ({
        type: "Line",
        start: ie,
        end: ie
      }));
      return [
        ...s,
        ...O
      ];
    }, [
      s,
      R
    ]), A = c.useCallback((O) => {
      const { snapped: ie, target: Ce } = es(I, O, {
        gridEnabled: x,
        gridSize: et,
        pointEnabled: v,
        pointTolerance: Rr
      });
      return {
        snapped: ie,
        target: Ce
      };
    }, [
      v,
      x,
      I
    ]), V = c.useRef(null), W = 5e4, D = c.useMemo(() => {
      const O = new Eo(W, W), ie = Je(C.normal), Ce = new E(0, 0, 1), ee = new st().setFromUnitVectors(Ce, ie);
      return O.applyQuaternion(ee), O.translate(C.origin.x, C.origin.y, C.origin.z), O;
    }, [
      C
    ]), F = c.useCallback(() => {
      if (!V.current) return;
      const O = e.intersectObject(V.current);
      if (O.length === 0) {
        S(null, null, null);
        return;
      }
      const ie = V.current.worldToLocal(O[0].point.clone()), Ce = Wn(ie, C.origin, C.xDir, C.yDir), { snapped: ee, target: Ee } = A(Ce), de = _e(ee, C.origin, C.xDir, C.yDir);
      S({
        x: de.x,
        y: de.y,
        z: de.z
      }, ee, Ee);
    }, [
      C,
      e,
      A,
      S
    ]), _ = c.useCallback((O) => {
      if (O.button === 0 && !Jt() && (O.stopPropagation(), !!m)) if (P) {
        const ie = ts(s, m, 2);
        ie !== null && b(ie);
      } else p(m);
    }, [
      m,
      P,
      s,
      p,
      b
    ]), X = c.useCallback((O) => {
      O.stopPropagation(), i === "line" && w();
    }, [
      i,
      w
    ]), se = c.useCallback(() => {
      S(null, null, null);
    }, [
      S
    ]), re = c.useMemo(() => i === "line" && u.length > 0 && m ? {
      start: u[u.length - 1],
      end: m
    } : null, [
      i,
      u,
      m
    ]), xe = c.useMemo(() => i === "rectangle" && u.length === 1 && m ? {
      p1: u[0],
      p2: m
    } : null, [
      i,
      u,
      m
    ]), ge = c.useMemo(() => {
      if (i === "circle" && u.length === 1 && m) {
        const O = u[0], ie = Math.sqrt((m.x - O.x) ** 2 + (m.y - O.y) ** 2);
        return {
          center: O,
          radius: ie
        };
      }
      return null;
    }, [
      i,
      u,
      m
    ]);
    return t ? r.jsxs("group", {
      children: [
        r.jsx("mesh", {
          ref: V,
          geometry: D,
          frustumCulled: false,
          onPointerMove: F,
          onClick: _,
          onDoubleClick: X,
          onPointerLeave: se,
          children: r.jsx("meshBasicMaterial", {
            visible: false,
            side: Ue
          })
        }),
        r.jsx(kr, {
          origin: C.origin,
          xDir: C.xDir,
          yDir: C.yDir,
          bounds: (R == null ? void 0 : R.bounds) ?? null
        }),
        r.jsx(Ir, {
          segments: s,
          selectedSegments: f,
          constraints: a,
          pendingPoints: u,
          origin: C.origin,
          xDir: C.xDir,
          yDir: C.yDir
        }),
        r.jsx(zr, {
          cursorWorldPos: h,
          cursorSketchPos: m,
          snapTarget: y,
          gridSnap: x,
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
  const vn = 5, Gn = 0.15, Dr = 0.35, Tr = {
    XY: "#61afef",
    XZ: "#98c379",
    YZ: "#e06c75"
  };
  function nn({ plane: e, rotation: t, position: o }) {
    const [n, s] = c.useState(false), a = c.useRef(null), i = ke((h) => h.enterSketchMode), l = ke((h) => h.active), { invalidate: u } = Pe(), f = (h) => {
      var _a2;
      if (h.stopPropagation(), l) return;
      let m = false;
      ((_a2 = h.face) == null ? void 0 : _a2.normal) && a.current && (m = h.face.normal.clone().transformDirection(a.current.matrixWorld).dot(h.ray.direction) > 0), i(e, void 0, m);
    };
    return Qe(() => {
      if (!a.current) return;
      const h = a.current.material, m = n ? Dr : Gn, y = m - h.opacity;
      if (Math.abs(y) < 0.01) {
        h.opacity = m;
        return;
      }
      h.opacity += y * 0.2, u();
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
      onClick: f,
      children: [
        r.jsx("planeGeometry", {
          args: [
            vn,
            vn
          ]
        }),
        r.jsx("meshBasicMaterial", {
          color: Tr[e],
          transparent: true,
          opacity: Gn,
          side: Ue,
          depthWrite: false,
          depthTest: false
        })
      ]
    });
  }
  function _r() {
    if (ke((o) => o.active)) return null;
    const t = vn / 2;
    return r.jsxs("group", {
      children: [
        r.jsx(nn, {
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
        r.jsx(nn, {
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
        r.jsx(nn, {
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
  const Fr = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, on = Math.PI / 180, sn = 180 / Math.PI, Lr = new st().setFromAxisAngle(new E(1, 0, 0), -Math.PI / 2), Nr = new st().setFromAxisAngle(new E(1, 0, 0), Math.PI / 2);
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
  const wn = new st(), Et = new Zt();
  function Or({ orbitControls: e }) {
    var _a2;
    const t = $((v) => v.selectedPartIds), o = $((v) => v.transformMode), n = $((v) => v.setDraggingGizmo), s = $((v) => v.setGizmoHovered), a = $((v) => v.gridSnap), i = $((v) => v.snapIncrement), l = oe((v) => v.parts), u = oe((v) => v.document), [f, h] = c.useState(null), m = c.useCallback((v) => {
      h(v);
    }, []), y = c.useRef(null), d = c.useRef(false), p = t.size === 1 ? Array.from(t)[0] : null, w = p ? l.find((v) => v.id === p) : null, b = p ? (_a2 = u.instances) == null ? void 0 : _a2.find((v) => v.id === p) : null, S = w !== null || b !== null;
    if (c.useEffect(() => {
      if (!(!f || !S) && !d.current) {
        if (w) {
          const v = u.nodes[String(w.translateNodeId)], P = u.nodes[String(w.rotateNodeId)], C = u.nodes[String(w.scaleNodeId)];
          (v == null ? void 0 : v.op.type) === "Translate" && f.position.set(...Hn(v.op.offset));
          const R = (P == null ? void 0 : P.op.type) === "Rotate" ? P.op.angles : {
            x: 0,
            y: 0,
            z: 0
          };
          if (Xn(R, f.quaternion), (C == null ? void 0 : C.op.type) === "Scale") {
            const { factor: I } = C.op;
            f.scale.set(I.x, I.y, I.z);
          }
        } else if (b) {
          const P = b.transform ?? {
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
          f.position.set(...Hn(P.translation)), Xn(P.rotation, f.quaternion), f.scale.set(P.scale.x, P.scale.y, P.scale.z);
        }
      }
    }, [
      f,
      w,
      b,
      S,
      u
    ]), c.useEffect(() => {
      const v = y.current;
      if (!v) return;
      const P = (R) => {
        const I = R.value;
        d.current = I, n(I), e.current && (e.current.enabled = !I), I && oe.getState().pushUndoSnapshot();
      }, C = (R) => {
        const I = R.value != null;
        s(I), I && $.getState().setHoveredItem(null);
      };
      return v.addEventListener("dragging-changed", P), v.addEventListener("axis-changed", C), () => {
        v.removeEventListener("dragging-changed", P), v.removeEventListener("axis-changed", C), s(false);
      };
    }, [
      f,
      e,
      n,
      s
    ]), c.useEffect(() => {
      const v = y.current;
      if (!v) return;
      const P = () => {
        if (!f || !p) return;
        const C = oe.getState();
        w ? o === "translate" ? C.setTranslation(p, Yn(f.position), true) : o === "rotate" ? C.setRotation(p, Un(f.quaternion), true) : o === "scale" && C.setScale(p, {
          x: f.scale.x,
          y: f.scale.y,
          z: f.scale.z
        }, true) : b && C.setInstanceTransform(p, {
          translation: Yn(f.position),
          rotation: Un(f.quaternion),
          scale: {
            x: f.scale.x,
            y: f.scale.y,
            z: f.scale.z
          }
        }, true);
      };
      return v.addEventListener("objectChange", P), () => {
        v.removeEventListener("objectChange", P);
      };
    }, [
      f,
      p,
      w,
      b,
      o
    ]), !S) return null;
    const x = a ? {
      translationSnap: i,
      rotationSnap: Math.PI / 180 * 15,
      scaleSnap: 0.1
    } : {};
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx("object3D", {
          ref: m
        }),
        f && r.jsx(Bo, {
          ref: y,
          object: f,
          mode: o,
          space: "local",
          size: Fr ? 1.8 : 0.8,
          ...x
        })
      ]
    });
  }
  const Br = 0.4, Vr = 0.85, $r = new We(54527), Wr = new We(16328306), Do = "#00d4ff", To = "#f92672", Gr = "#6b8fa3", Hr = "#4a7080";
  function _o({ box: e, color: t, opacity: o }) {
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
  function Fo(e) {
    const t = oe((n) => n.parts), o = De((n) => n.scene);
    return c.useMemo(() => {
      if (e.size === 0 || !o) return null;
      const n = new rt();
      let s = false;
      return e.forEach((a) => {
        const i = t.findIndex((m) => m.id === a);
        if (i === -1) return;
        const l = o.parts[i];
        if (!l) return;
        const u = l.mesh;
        if (!u.positions.length) return;
        const f = new rt(), h = new E();
        for (let m = 0; m < u.positions.length; m += 3) h.set(u.positions[m], u.positions[m + 1], u.positions[m + 2]), f.expandByPoint(h);
        n.union(f), s = true;
      }), s ? n : null;
    }, [
      e,
      t,
      o
    ]);
  }
  function Yr() {
    const e = $((s) => s.selectedPartIds), t = Fo(e), { isDark: o } = at();
    if (!t) return null;
    const n = o ? Gr : Hr;
    return r.jsx(_o, {
      box: t,
      color: n,
      opacity: 0.5
    });
  }
  function Xr() {
    const e = It((n) => n.participants);
    if ($((n) => n.followMode) === "free") return null;
    const o = [];
    return e.forEach((n) => {
      n.id !== En && n.selectedPartIds.size !== 0 && o.push(r.jsx(Ur, {
        ids: n.selectedPartIds,
        color: n.color
      }, n.id));
    }), r.jsx(r.Fragment, {
      children: o
    });
  }
  function Ur({ ids: e, color: t }) {
    const o = Fo(e);
    return o ? r.jsx(_o, {
      box: o,
      color: t,
      opacity: 0.7
    }) : null;
  }
  function qr() {
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
  function Rn(e) {
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
  function Kr({ item: e, variant: t }) {
    const o = Rn(e.partId), n = c.useMemo(() => {
      if (!o) return null;
      const i = Co(o, e.faceIndex);
      return i.length === 0 ? null : _s(o, i);
    }, [
      o,
      e.faceIndex
    ]);
    if (c.useEffect(() => () => {
      n == null ? void 0 : n.dispose();
    }, [
      n
    ]), !n) return null;
    const s = t === "selected" ? Wr : $r, a = t === "selected" ? Vr : Br;
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
  function Zr({ item: e, variant: t }) {
    const o = Rn(e.partId), n = c.useMemo(() => {
      if (!o) return null;
      const { a, b: i } = jo(o, e.edgeId);
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
    const s = t === "selected" ? To : Do;
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
  function Jr({ item: e, variant: t }) {
    const o = Rn(e.partId), n = c.useMemo(() => o ? Ro(o, e.vertexId) : null, [
      o,
      e.vertexId
    ]), s = c.useRef(null), { camera: a, size: i } = Pe();
    if (Qe(() => {
      if (!s.current || !n) return;
      const u = a, f = new E(n.x, n.z, -n.y), h = u.position.distanceTo(f), m = (u.fov ?? 50) * Math.PI / 180, y = 2 * h * Math.tan(m / 2) / i.height, d = t === "selected" ? 6 : 5;
      s.current.scale.setScalar(Math.max(1e-4, d * y));
    }), !n) return null;
    const l = t === "selected" ? To : Do;
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
  function qn({ item: e, variant: t }) {
    return e.kind === "face" ? r.jsx(Kr, {
      item: e,
      variant: t
    }) : e.kind === "edge" ? r.jsx(Zr, {
      item: e,
      variant: t
    }) : e.kind === "vertex" ? r.jsx(Jr, {
      item: e,
      variant: t
    }) : null;
  }
  function Qr() {
    const e = $((n) => n.selection), t = $((n) => n.hoveredItem), o = c.useMemo(() => !t || t.kind === "part" || e.some((n) => ns(n, t)) ? null : t, [
      t,
      e
    ]);
    return r.jsxs(r.Fragment, {
      children: [
        e.map((n, s) => r.jsx(qn, {
          item: n,
          variant: "selected"
        }, `sel-${s}`)),
        o && r.jsx(qn, {
          item: o,
          variant: "hover"
        })
      ]
    });
  }
  function ei() {
    const e = $((n) => n.isDraggingGizmo), t = $((n) => n.isOrbiting);
    return $((n) => n.captureMode) ? r.jsx(qr, {}) : t || e ? null : r.jsxs(r.Fragment, {
      children: [
        r.jsx(Yr, {}),
        r.jsx(Xr, {}),
        r.jsx(Qr, {})
      ]
    });
  }
  const rn = "#94a3b8";
  function ti(e, t, o) {
    const n = structuredClone(e);
    return n.type === "Cube" ? t === "size.x" ? n.size.x = o : t === "size.y" ? n.size.y = o : t === "size.z" && (n.size.z = o) : n.type === "Cylinder" ? t === "radius" ? n.radius = o : t === "height" && (n.height = o) : n.type === "Sphere" && t === "radius" && (n.radius = o), n;
  }
  function ni({ value: e, paramKey: t, partId: o, primitiveNodeId: n }) {
    const [s, a] = c.useState(false), [i, l] = c.useState(e.toFixed(1)), u = c.useRef(null), f = oe((S) => S.document), h = oe((S) => S.updatePrimitiveOp);
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
    const m = () => {
      const S = parseFloat(i);
      if (!isNaN(S) && S > 0) {
        const x = f.nodes[String(n)];
        if (x) {
          const v = ti(x.op, t, S);
          h(o, v);
        }
      } else l(e.toFixed(1));
      a(false);
    }, y = () => {
      l(e.toFixed(1)), a(false);
    }, d = (S) => {
      S.stopPropagation(), S.key === "Enter" ? m() : S.key === "Escape" && y();
    }, w = t === "radius" ? "r=" : "", b = " mm";
    return s ? r.jsxs("div", {
      className: "bg-surface border border-brand px-1 py-0.5 text-[10px] text-text whitespace-nowrap flex items-center rounded",
      onClick: (S) => S.stopPropagation(),
      onPointerDown: (S) => S.stopPropagation(),
      children: [
        w,
        r.jsx("input", {
          ref: u,
          type: "text",
          value: i,
          onChange: (S) => l(S.target.value),
          onBlur: m,
          onKeyDown: d,
          className: "w-12 bg-transparent outline-none text-[10px] text-text",
          onClick: (S) => S.stopPropagation(),
          onPointerDown: (S) => S.stopPropagation()
        }),
        b
      ]
    }) : r.jsxs("div", {
      className: "bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap cursor-pointer hover:border-brand hover:text-text transition-colors rounded",
      onClick: (S) => {
        S.stopPropagation(), a(true);
      },
      onPointerDown: (S) => S.stopPropagation(),
      children: [
        w,
        e.toFixed(1),
        b
      ]
    });
  }
  function oi({ start: e, end: t, label: o, offset: n = new E(), editable: s, value: a, paramKey: i, partId: l, primitiveNodeId: u }) {
    const f = new E().lerpVectors(e, t, 0.5).add(n), h = 1, m = new E().subVectors(t, e).normalize(), y = new E(0, 1, 0), d = new E().crossVectors(m, y).normalize();
    d.length() < 0.1 && d.set(1, 0, 0);
    const p = e.clone().add(d.clone().multiplyScalar(h)), w = e.clone().add(d.clone().multiplyScalar(-h)), b = t.clone().add(d.clone().multiplyScalar(h)), S = t.clone().add(d.clone().multiplyScalar(-h)), x = s && a !== void 0 && i && l && u !== void 0;
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx(Ae, {
          points: [
            e,
            t
          ],
          color: rn,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        r.jsx(Ae, {
          points: [
            p,
            w
          ],
          color: rn,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        r.jsx(Ae, {
          points: [
            b,
            S
          ],
          color: rn,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        r.jsx(it, {
          position: f,
          center: true,
          style: {
            pointerEvents: x ? "auto" : "none",
            zIndex: 10
          },
          children: x ? r.jsx(ni, {
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
  function si() {
    const e = $((f) => f.selectedPartIds), t = $((f) => f.isDraggingGizmo), o = oe((f) => f.parts), n = oe((f) => f.document), s = De((f) => f.scene), a = c.useMemo(() => {
      if (e.size !== 1) return null;
      const f = Array.from(e)[0], h = o.find((x) => x.id === f);
      if (!h || !os(h)) return null;
      const m = o.findIndex((x) => x.id === f);
      if (!(s == null ? void 0 : s.parts[m])) return null;
      const d = n.nodes[String(h.primitiveNodeId)];
      if (!d) return null;
      const p = n.nodes[String(h.translateNodeId)], w = (p == null ? void 0 : p.op.type) === "Translate" ? p.op.offset : {
        x: 0,
        y: 0,
        z: 0
      }, b = new E(w.x, w.y, w.z);
      let S = null;
      if (d.op.type === "Cube") {
        const { size: x } = d.op, v = x.x / 2, P = x.y / 2, C = x.z / 2;
        S = [
          {
            start: new E(b.x - v, b.y - P - 3, b.z + C),
            end: new E(b.x + v, b.y - P - 3, b.z + C),
            label: `${x.x.toFixed(1)} mm`,
            value: x.x,
            paramKey: "size.x"
          },
          {
            start: new E(b.x + v + 3, b.y - P, b.z + C),
            end: new E(b.x + v + 3, b.y + P, b.z + C),
            label: `${x.y.toFixed(1)} mm`,
            value: x.y,
            paramKey: "size.y"
          },
          {
            start: new E(b.x + v + 3, b.y - P - 3, b.z - C),
            end: new E(b.x + v + 3, b.y - P - 3, b.z + C),
            label: `${x.z.toFixed(1)} mm`,
            value: x.z,
            paramKey: "size.z"
          }
        ];
      }
      if (d.op.type === "Cylinder") {
        const { radius: x, height: v } = d.op, P = v / 2;
        S = [
          {
            start: new E(b.x, b.y - P - 3, b.z),
            end: new E(b.x + x, b.y - P - 3, b.z),
            label: `r=${x.toFixed(1)} mm`,
            value: x,
            paramKey: "radius"
          },
          {
            start: new E(b.x + x + 3, b.y - P, b.z),
            end: new E(b.x + x + 3, b.y + P, b.z),
            label: `${v.toFixed(1)} mm`,
            value: v,
            paramKey: "height"
          }
        ];
      }
      if (d.op.type === "Sphere") {
        const { radius: x } = d.op;
        S = [
          {
            start: new E(b.x, b.y, b.z),
            end: new E(b.x + x, b.y, b.z),
            label: `r=${x.toFixed(1)} mm`,
            value: x,
            paramKey: "radius"
          }
        ];
      }
      return S ? {
        dimensions: S,
        partId: f,
        primitiveNodeId: h.primitiveNodeId
      } : null;
    }, [
      e,
      o,
      n,
      s
    ]);
    if (!a || t) return null;
    const { dimensions: i, partId: l, primitiveNodeId: u } = a;
    return r.jsx(r.Fragment, {
      children: i.map((f, h) => r.jsx(oi, {
        start: f.start,
        end: f.end,
        label: f.label,
        editable: true,
        value: f.value,
        paramKey: f.paramKey,
        partId: l,
        primitiveNodeId: u
      }, h))
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
    const e = gt((l) => l.enabled), t = gt((l) => l.report), o = gt((l) => l.visibleSeverities), n = gt((l) => l.selectedIssueId), s = gt((l) => l.selectIssue), a = le((l) => l.active), i = c.useMemo(() => {
      if (!t) return [];
      const l = t.issues.filter((u) => o.has(u.severity));
      return fi(l);
    }, [
      t,
      o
    ]);
    return !e || i.length === 0 || a ? null : r.jsx("group", {
      children: i.map((l, u) => {
        const f = l[0];
        if (!f) return null;
        const h = [
          f.anchor[0],
          f.anchor[1],
          f.anchor[2]
        ], m = l.some((y) => y.id === n);
        return r.jsx(it, {
          position: h,
          center: true,
          zIndexRange: m ? [
            1e3,
            900
          ] : [
            100,
            0
          ],
          style: {
            pointerEvents: "none"
          },
          children: r.jsx(ci, {
            issues: l,
            selected: m,
            onSelect: (y) => s(y === n ? null : y)
          })
        }, `dfm-${u}`);
      })
    });
  }
  function ci({ issues: e, selected: t, onSelect: o }) {
    const n = di(e), s = e.find((u) => u.severity === n) ?? e[0];
    if (!s) return null;
    const a = ri[n], i = ii[n], l = e.length;
    return r.jsxs("div", {
      className: "flex items-start gap-2",
      children: [
        r.jsxs("button", {
          type: "button",
          onClick: (u) => {
            u.stopPropagation(), o(s.id);
          },
          className: Pn("pointer-events-auto relative flex h-6 w-6 items-center justify-center rounded-full font-bold text-xs ring-2 shadow-md transition-transform", a, t ? "scale-125" : "hover:scale-110"),
          title: s.message,
          children: [
            i,
            l > 1 && r.jsx("span", {
              className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-surface px-1 text-[10px] font-semibold text-text ring-1 ring-border",
              children: l
            })
          ]
        }),
        t && r.jsx(li, {
          issue: s,
          extras: l - 1
        })
      ]
    });
  }
  function li({ issue: e, extras: t }) {
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
              className: Pn("shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold capitalize", e.severity === "error" ? "bg-red-500/20 text-red-300" : e.severity === "warning" ? "bg-amber-500/20 text-amber-300" : "bg-sky-500/20 text-sky-300"),
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
                  children: Kn(e.measured)
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
                  children: Kn(e.limit)
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
              children: ui(e.suggested_fix)
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
      const n = `${an(o.anchor[0])}|${an(o.anchor[1])}|${an(o.anchor[2])}`, s = t.get(n);
      s ? s.push(o) : t.set(n, [
        o
      ]);
    }
    return Array.from(t.values());
  }
  function an(e) {
    return Math.round(e * 2);
  }
  let Pt = null, Kt = null, bn = null, Xt = null, Sn = null;
  function pi() {
    return Xt;
  }
  function Zn() {
    Sn == null ? void 0 : Sn();
  }
  function Jn(e) {
    Pt = e;
  }
  function mi() {
    const e = De((m) => m.scene), t = De((m) => m.engine), o = oe((m) => m.document), { camera: n, size: s, controls: a, invalidate: i } = Pe(), l = bo(), u = c.useRef(false), f = c.useRef({
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
      let m;
      try {
        m = t.evaluateWithSolids(o);
      } catch (v) {
        Ke.warn("gpu", `Ray-trace eval failed: ${v}`), u.current = false;
        return;
      }
      const y = (((_a2 = m.parts) == null ? void 0 : _a2.length) ?? 0) > 0, d = (((_b = m.instances) == null ? void 0 : _b.length) ?? 0) > 0;
      if (!y && !d) {
        u.current = false;
        return;
      }
      const p = l;
      (_c = p.clearScene) == null ? void 0 : _c.call(p);
      const w = (v) => {
        if (!v) return null;
        const C = o.materials[v] ?? kt(v);
        return C ? {
          color: C.color,
          metallic: C.metallic,
          roughness: C.roughness
        } : null;
      }, b = (v, P) => {
        const C = w(P);
        C && typeof p.uploadSolidWithMaterial == "function" ? p.uploadSolidWithMaterial(v, C.color[0], C.color[1], C.color[2], C.metallic, C.roughness) : p.uploadSolid(v);
      };
      let S = false, x;
      for (const v of m.parts ?? []) {
        const P = v.solid;
        if (P) {
          try {
            b(P, v.material);
          } catch (C) {
            Ke.debug("gpu", `uploadSolid failed: ${C}`);
          }
          x === void 0 && (x = v.material), S = true;
        }
      }
      if (d && ((_d = m.partDefs) == null ? void 0 : _d.length)) {
        const v = /* @__PURE__ */ new Map();
        for (const C of m.partDefs) {
          const R = C.solid;
          R && v.set(C.id, R);
        }
        const P = Cn(o);
        for (const C of m.instances ?? []) {
          const R = v.get(C.partDefId);
          if (!R) continue;
          const I = C.id ?? C.instanceId, A = (I ? P.get(I) : void 0) ?? C.transform, V = A ? R.scale(A.scale.x, A.scale.y, A.scale.z).rotate(A.rotation.x, A.rotation.y, A.rotation.z).translate(A.translation.x, A.translation.y, A.translation.z) : R;
          try {
            b(V, C.material);
          } catch (W) {
            Ke.debug("gpu", `uploadSolid (instance) failed: ${W}`);
          }
          x === void 0 && (x = C.material), S = true;
        }
      }
      if (S && x && typeof p.uploadSolidWithMaterial != "function") {
        const v = o.materials[x], P = v ? null : kt(x), C = v ?? P;
        if (C) try {
          let R = false;
          if (typeof p.setMaterialFromDef == "function") try {
            p.setMaterialFromDef(JSON.stringify(C), null), R = true;
          } catch (I) {
            Ke.debug("gpu", `setMaterialFromDef rejected the definition, falling back: ${I}`);
          }
          R || p.setMaterial(C.color[0], C.color[1], C.color[2], C.metallic, C.roughness);
        } catch (R) {
          Ke.debug("gpu", `Failed to set material: ${R}`);
        }
      }
      if (u.current = S, S) {
        h.current = true;
        const v = n, C = (a == null ? void 0 : a.target) ?? {
          x: 0,
          y: 0,
          z: 0
        }, R = {
          position: [
            v.position.x,
            v.position.y,
            v.position.z
          ],
          target: [
            C.x,
            C.y,
            C.z
          ],
          fov: v.fov,
          width: s.width,
          height: s.height
        };
        Kt = R, f.current = {
          x: v.position.x,
          y: v.position.y,
          z: v.position.z,
          tx: C.x,
          ty: C.y,
          tz: C.z
        }, Pt && (h.current = false, Pt(R)), i();
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
    ]), c.useEffect(() => (bn = i, () => {
      bn = null;
    }), [
      i
    ]), Qe(() => {
      if (!l || !u.current) return;
      const m = n, d = (a == null ? void 0 : a.target) ?? {
        x: 0,
        y: 0,
        z: 0
      }, p = f.current, w = 1e-3;
      if (!(Math.abs(m.position.x - p.x) > w || Math.abs(m.position.y - p.y) > w || Math.abs(m.position.z - p.z) > w || Math.abs(d.x - p.tx) > w || Math.abs(d.y - p.ty) > w || Math.abs(d.z - p.tz) > w) && !h.current) return;
      f.current = {
        x: m.position.x,
        y: m.position.y,
        z: m.position.z,
        tx: d.x,
        ty: d.y,
        tz: d.z
      };
      const S = {
        position: [
          m.position.x,
          m.position.y,
          m.position.z
        ],
        target: [
          d.x,
          d.y,
          d.z
        ],
        fov: m.fov,
        width: s.width,
        height: s.height
      };
      Kt = S, Pt && (h.current = false, Pt(S));
    }), null;
  }
  const hi = {
    off: 0,
    normals: 1,
    "face-id": 2,
    lighting: 3,
    orientation: 4
  }, xi = {
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
  }, gi = 6;
  function yi() {
    const e = c.useRef(null), t = $((D) => D.raytraceQuality), o = $((D) => D.raytraceDebugMode), n = $((D) => D.raytraceEdgesEnabled), s = $((D) => D.raytraceEdgeDepthThreshold), a = $((D) => D.raytraceEdgeNormalThreshold), i = $((D) => D.raytraceEdgeSilhouetteEnabled), l = $((D) => D.raytraceEdgeCreaseEnabled), u = $((D) => D.raytraceEdgeBoundaryEnabled), f = $((D) => D.raytraceEdgeSilhouetteWidth), h = $((D) => D.raytraceEdgeCreaseWidth), m = $((D) => D.raytraceEdgeBoundaryWidth), y = $((D) => D.raytraceEdgeSoftness), d = bo(), { isDark: p } = at(), w = c.useRef("off"), b = c.useRef({
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
    }), S = c.useRef({
      stylize: true
    }), x = c.useRef(false), v = c.useRef(null), P = c.useRef(null), C = c.useRef(t);
    c.useEffect(() => {
      C.current = t;
    }, [
      t
    ]);
    const R = c.useCallback((D, F, _, X, se, re) => {
      const xe = new ImageData(new Uint8ClampedArray(F), _, X);
      if (_ !== se || X !== re) {
        D.imageSmoothingEnabled = true, D.imageSmoothingQuality = "high";
        const ge = document.createElement("canvas");
        ge.width = _, ge.height = X;
        const O = ge.getContext("2d");
        O && (O.putImageData(xe, 0, 0), D.drawImage(ge, 0, 0, se, re));
      } else D.putImageData(xe, 0, 0);
    }, []), I = c.useCallback((D, F) => {
      if (!d || !e.current || x.current) return;
      const _ = e.current;
      if (!_.getContext("2d")) return;
      (_.width !== D.width || _.height !== D.height) && (_.width = D.width, _.height = D.height);
      const se = xi[F];
      let re = Math.floor(D.width * se.scale), xe = Math.floor(D.height * se.scale);
      const ge = re * xe;
      if (ge > se.maxPixels) {
        const me = Math.sqrt(se.maxPixels / ge);
        re = Math.floor(re * me), xe = Math.floor(xe * me);
      }
      x.current = true;
      const O = re, ie = xe, Ce = D.width, ee = D.height, [Ee, de, be] = D.position, [Fe, Ge, Oe] = D.target, Se = [
        Ee,
        -be,
        de
      ], Ie = [
        Fe,
        -Oe,
        Ge
      ];
      d.render(Se, Ie, [
        0,
        0,
        1
      ], re, xe, D.fov * Math.PI / 180).then((me) => {
        const je = e.current;
        if (je) {
          const B = je.getContext("2d");
          B && R(B, me, O, ie, Ce, ee);
        }
        x.current = false;
        const Le = $.getState();
        Le.raytraceError !== null && Le.setRaytraceError(null);
      }).catch((me) => {
        const je = (me == null ? void 0 : me.message) ?? String(me);
        Ke.warn("gpu", `Render failed: ${je}`), $.getState().setRaytraceError(je), x.current = false;
      });
    }, [
      d,
      R
    ]), A = c.useCallback(() => {
      P.current && (clearTimeout(P.current), P.current = null);
    }, []), W = c.useCallback((D) => {
      var _a2;
      if (A(), !d) return;
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
      const se = d;
      (_a2 = se.resetAccumulation) == null ? void 0 : _a2.call(se);
      let re = 0, xe = 0;
      const ge = () => {
        var _a3;
        if (re >= X.length) return;
        const O = X[re];
        if (xe >= O.frames) {
          if (re++, xe = 0, re >= X.length) return;
          (_a3 = se.resetAccumulation) == null ? void 0 : _a3.call(se), P.current = setTimeout(ge, X[re].gap);
          return;
        }
        I(D, O.tier), xe++;
        const ie = O.tier === "high" ? 60 : 30;
        P.current = setTimeout(ge, ie);
      };
      ge();
    }, [
      A,
      I,
      d
    ]);
    return c.useEffect(() => (Xt = e.current, () => {
      Xt === e.current && (Xt = null);
    }), []), c.useEffect(() => (Sn = () => {
      const D = v.current;
      D && I(D, "standard");
    }, () => {
      Sn = null;
    }), [
      I
    ]), c.useEffect(() => {
      const D = (F) => {
        v.current = F, W(F);
      };
      return Jn(D), Kt ? D(Kt) : bn == null ? void 0 : bn(), () => {
        Jn(null);
      };
    }, [
      W
    ]), c.useEffect(() => {
      v.current && W(v.current);
    }, [
      t,
      W
    ]), c.useEffect(() => {
      var _a2;
      if (!d) return;
      (_a2 = d.setTheme) == null ? void 0 : _a2.call(d, p ? 0 : 1), v.current && W(v.current);
    }, [
      p,
      d,
      W
    ]), c.useEffect(() => {
      if (!d || o === w.current) return;
      w.current = o;
      const D = hi[o] ?? 0, F = d;
      if (typeof F.setDebugMode != "function") {
        Ke.debug("gpu", "setDebugMode not available - WASM may need rebuild");
        return;
      }
      F.setDebugMode(D), v.current && W(v.current);
    }, [
      o,
      d,
      W
    ]), c.useEffect(() => {
      if (!d) return;
      const D = b.current;
      if (n === D.enabled && s === D.depth && a === D.normal && i === D.silhouette && l === D.crease && u === D.boundary && f === D.silhouetteWidth && h === D.creaseWidth && m === D.boundaryWidth && y === D.softness) return;
      b.current = {
        enabled: n,
        depth: s,
        normal: a,
        silhouette: i,
        crease: l,
        boundary: u,
        silhouetteWidth: f,
        creaseWidth: h,
        boundaryWidth: m,
        softness: y
      };
      const F = d;
      typeof F.setEdgeDetection == "function" && F.setEdgeDetection(n, s, a), typeof F.setEdgeStyle == "function" ? F.setEdgeStyle(i, l, u, 0.08, 0.08, 0.1, 1, 0.12, 0.12, 0.14, 1, 0.06, 0.06, 0.08, 1, f, h, m, y) : Ke.debug("gpu", "setEdgeStyle not available - WASM may need rebuild"), v.current && W(v.current);
    }, [
      n,
      s,
      a,
      i,
      l,
      u,
      f,
      h,
      m,
      y,
      d,
      W
    ]), c.useEffect(() => {
      if (!d) return;
      const D = S.current;
      if (n === D.stylize) return;
      S.current = {
        stylize: n
      };
      const F = d;
      if (typeof F.setPathTrace != "function") {
        Ke.debug("gpu", "setPathTrace not available - WASM may need rebuild");
        return;
      }
      F.setPathTrace(gi, n), v.current && W(v.current);
    }, [
      n,
      d,
      W
    ]), d ? r.jsx("canvas", {
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
  const vi = Math.PI / 7, wi = 0.25, bi = 6, Si = 40;
  function Mi(e, t, o, n) {
    o.copy(e);
    const s = Ei.copy(t).sub(e), a = s.length();
    a < 1e-6 ? s.set(0, -1, 0) : s.divideScalar(a);
    const i = Math.max(bi, Math.min(Si, a * wi)), l = Math.tan(vi) * i, u = Pi.set(0, 0, 1);
    Math.abs(s.dot(u)) > 0.98 && u.set(0, 1, 0);
    const f = Ci.crossVectors(s, u).normalize(), h = ji.crossVectors(f, s).normalize(), m = Ri.copy(e).addScaledVector(s, i), y = ki.copy(f).multiplyScalar(l), d = Ii.copy(h).multiplyScalar(l);
    n[0].copy(m).add(y).add(d), n[1].copy(m).sub(y).add(d), n[2].copy(m).sub(y).sub(d), n[3].copy(m).add(y).sub(d);
  }
  const Ei = new E(), Pi = new E(), Ci = new E(), ji = new E(), Ri = new E(), ki = new E(), Ii = new E(), zi = 8, Ai = zi * 2;
  function Di({ participant: e, goal: t }) {
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
      const h = new ft(), m = new Float32Array(Ai * 3);
      return h.setAttribute("position", new $e(m, 3)), h;
    }, []), u = c.useMemo(() => new Rs({
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
    const f = c.useRef(null);
    return Qe(() => {
      const h = Ti.set(t.position[0], t.position[1], t.position[2]), m = _i.set(t.target[0], t.target[1], t.target[2]), y = 0.15;
      n.current.lerp(h, y), s.current.lerp(m, y), Mi(n.current, s.current, a.current, i.current);
      const d = l.getAttribute("position"), p = a.current, w = i.current;
      for (let x = 0; x < 4; x++) {
        const v = w[x], P = w[(x + 1) % 4];
        d.setXYZ(x * 2, v.x, v.y, v.z), d.setXYZ(x * 2 + 1, P.x, P.y, P.z);
      }
      for (let x = 0; x < 4; x++) {
        d.setXYZ(8 + x * 2, p.x, p.y, p.z);
        const v = w[x];
        d.setXYZ(8 + x * 2 + 1, v.x, v.y, v.z);
      }
      d.needsUpdate = true, l.computeBoundingSphere(), f.current && f.current.position.copy(p);
      const b = n.current.distanceToSquared(h), S = s.current.distanceToSquared(m);
      (b > 1e-4 || S > 1e-4) && o();
    }), r.jsxs("group", {
      children: [
        r.jsx("lineSegments", {
          geometry: l,
          material: u
        }),
        r.jsx("group", {
          ref: f,
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
  const Ti = new E(), _i = new E();
  function Fi() {
    const e = It((s) => s.participants), t = $((s) => s.followMode), o = $((s) => s.followingParticipantId);
    if (t === "free") return null;
    const n = [];
    return e.forEach((s) => {
      s.id !== En && s.camera && (t === "lock" && o === s.id || n.push(r.jsx(Di, {
        participant: s,
        goal: s.camera
      }, s.id)));
    }), r.jsx(r.Fragment, {
      children: n
    });
  }
  function Li() {
    const e = Pe((n) => n.camera), t = Pe((n) => n.controls), o = c.useRef(null);
    c.useEffect(() => {
      function n() {
        const { selectedPartIds: d } = $.getState();
        if (d.size === 0) return;
        const p = De.getState().scene, w = oe.getState().parts;
        if (!p) return;
        const b = new rt();
        let S = false;
        for (const [I, A] of p.parts.entries()) {
          const V = w[I];
          if (!V || !d.has(V.id)) continue;
          const W = A.mesh.positions;
          for (let D = 0; D < W.length; D += 3) b.expandByPoint(new E(W[D], W[D + 1], W[D + 2]));
          S = true;
        }
        if (!S) return;
        const x = new E();
        b.getCenter(x);
        const v = new E();
        b.getSize(v);
        const C = Math.max(v.x, v.y, v.z, 1) * 2, R = new E().copy(e.position).sub(t && "target" in t && t.target ? t.target : new E(0, 0, 0)).normalize();
        e.position.copy(x).addScaledVector(R, C), t && "target" in t && t.target && t.target.copy(x);
      }
      function s() {
        const d = De.getState().scene;
        if (!d) return null;
        const p = new rt(), w = new E();
        if (d.instances && d.instances.length > 0) for (const b of d.instances) {
          const S = b.transform, x = b.mesh.positions;
          for (let v = 0; v < x.length; v += 3) {
            const P = x[v], C = x[v + 1], R = x[v + 2];
            S ? w.set(P * S.scale.x + S.translation.x, C * S.scale.y + S.translation.y, R * S.scale.z + S.translation.z) : w.set(P, C, R), p.expandByPoint(w);
          }
        }
        else {
          if (d.parts.length === 0) return null;
          for (const b of d.parts) {
            const S = b.mesh.positions;
            for (let x = 0; x < S.length; x += 3) p.expandByPoint(new E(S[x], S[x + 1], S[x + 2]));
          }
        }
        return p.isEmpty() ? null : p;
      }
      function a() {
        const d = s(), p = new E();
        let w = 150;
        if (d) {
          d.getCenter(p);
          const S = new E();
          d.getSize(S), w = Math.max(S.x, S.y, S.z, 50) * 2;
        }
        const b = w / Math.sqrt(3);
        e.position.set(p.x + b, p.y + b, p.z + b), t && "target" in t && t.target && t.target.copy(p);
      }
      function i() {
        const d = s(), p = new E();
        let w = 150;
        if (d) {
          d.getCenter(p);
          const v = new E();
          d.getSize(v), w = Math.max(v.x, v.y, v.z, 50) * 2;
        }
        const b = new E(p.x, p.z, -p.y), S = t && "target" in t && t.target ? t.target : new E(0, 0, 0), x = new E().copy(e.position).sub(S);
        x.lengthSq() < 1e-6 && x.set(1, 1, 1), x.normalize(), e.position.copy(b).addScaledVector(x, w), t && "target" in t && t.target && t.target.copy(b);
      }
      function l() {
        const d = s(), p = new E();
        let w = 150;
        if (d) {
          d.getCenter(p);
          const b = new E();
          d.getSize(b), w = Math.max(b.x, b.y, b.z, 50) * 2;
        }
        e.position.set(p.x, p.y, p.z + w), t && "target" in t && t.target && t.target.copy(p);
      }
      function u() {
        const d = s(), p = new E();
        let w = 150;
        if (d) {
          d.getCenter(p);
          const b = new E();
          d.getSize(b), w = Math.max(b.x, b.y, b.z, 50) * 2;
        }
        e.position.set(p.x, p.y - w, p.z), t && "target" in t && t.target && t.target.copy(p);
      }
      function f() {
        const d = s(), p = new E();
        let w = 150;
        if (d) {
          d.getCenter(p);
          const b = new E();
          d.getSize(b), w = Math.max(b.x, b.y, b.z, 50) * 2;
        }
        e.position.set(p.x + w, p.y, p.z), t && "target" in t && t.target && t.target.copy(p);
      }
      window.addEventListener("vcad:focus-selection", n), window.addEventListener("vcad:camera-isometric", a), window.addEventListener("vcad:camera-top", l), window.addEventListener("vcad:camera-front", u), window.addEventListener("vcad:camera-right", f);
      const h = () => {
        var _a2;
        if (!t || !("target" in t) || !t.target || typeof window < "u" && new URLSearchParams(window.location.search).has("at")) return;
        const d = oe.getState().documentId, p = De.getState().scene;
        !d || o.current === d || !(p && (p.parts.some((b) => b.mesh.indices.length > 0) || (((_a2 = p.instances) == null ? void 0 : _a2.some((b) => b.mesh.indices.length > 0)) ?? false))) || (o.current = d, i());
      };
      h();
      const m = oe.subscribe(h), y = De.subscribe(h);
      return () => {
        window.removeEventListener("vcad:focus-selection", n), window.removeEventListener("vcad:camera-isometric", a), window.removeEventListener("vcad:camera-top", l), window.removeEventListener("vcad:camera-front", u), window.removeEventListener("vcad:camera-right", f), m(), y();
      };
    }, [
      e,
      t
    ]);
  }
  function Ni() {
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
        const f = e.getContext();
        f && typeof f.isContextLost == "function" && f.isContextLost() && n(true);
      } catch {
        n(true);
      }
      const l = (f) => {
        f.preventDefault(), n(true), i();
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
  function Oi() {
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
        if (l.some((m) => m.deltaMode === 1)) {
          o("mouse");
          return;
        }
        if (l.filter((m) => m.hasHorizontal).length >= 2) {
          o("trackpad");
          return;
        }
        l.reduce((m, y) => m + y.deltaY, 0) / l.length < 20 ? o("trackpad") : o("mouse");
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
  function Bi() {
    var _a2;
    const e = c.useRef(null), t = c.useRef(0), o = c.useRef([]), n = oe((x) => x.document.joints), s = oe((x) => x.setJointState), a = (n == null ? void 0 : n.map((x) => x.id).join(",")) ?? "", i = Ye((x) => x.mode), l = Ye((x) => x.timestep), u = Ye((x) => x.playbackSpeed), f = Ye((x) => x.setPhysicsAvailable), h = Ye((x) => x.setJointStates), m = Ye((x) => x.setObservation), y = Ye((x) => x.setMode);
    c.useEffect(() => {
      In().then((x) => {
        console.log("[Physics] isPhysicsAvailable:", x), f(x);
      });
    }, [
      f
    ]), c.useEffect(() => {
      if (!n || n.length === 0) {
        e.current && (e.current.close(), e.current = null, o.current = []);
        return;
      }
      let x = true;
      async function v() {
        if (!(!await In() || !x)) try {
          const C = oe.getState().document, R = [], I = await ss.create(C, {
            endEffectorIds: R,
            dt: 1 / 240,
            substeps: 4
          });
          if (!x) {
            I.close();
            return;
          }
          e.current && e.current.close(), e.current = I;
          const A = oe.getState().document.joints ?? [];
          o.current = A.map((D) => D.id);
          const V = A.map((D) => ({
            id: D.id,
            name: D.name ?? D.id,
            position: D.state ?? 0,
            velocity: 0,
            torque: 0,
            targetVelocity: 0,
            limits: null
          }));
          h(V);
          const W = I.observe();
          m({
            jointPositions: W.joint_positions,
            jointVelocities: W.joint_velocities,
            endEffectorPoses: W.end_effector_poses
          }), console.log(`[Physics] Initialized with ${I.numJoints} joints, ${I.actionDim} action dim`);
        } catch (C) {
          console.error("[Physics] Failed to initialize:", C);
        }
      }
      return v(), () => {
        x = false;
      };
    }, [
      a,
      h,
      m
    ]), c.useEffect(() => () => {
      e.current && (e.current.close(), e.current = null);
    }, []);
    const d = c.useCallback(() => Ye.getState().jointStates.map((v) => v.position), []), p = c.useCallback(() => Ye.getState().jointStates.map((v) => v.torque), []), w = c.useCallback(() => Ye.getState().jointStates.map((v) => v.targetVelocity ?? 0), []), b = c.useCallback((x) => {
      m({
        jointPositions: x.joint_positions,
        jointVelocities: x.joint_velocities,
        endEffectorPoses: x.end_effector_poses
      });
      const P = Ye.getState().jointStates.map((A, V) => ({
        ...A,
        position: x.joint_positions[V] ?? A.position,
        velocity: x.joint_velocities[V] ?? A.velocity
      }));
      h(P);
      const C = oe.getState().document, R = structuredClone(C);
      o.current.forEach((A, V) => {
        var _a3;
        const W = (_a3 = R.joints) == null ? void 0 : _a3.find((D) => D.id === A);
        W && x.joint_positions[V] !== void 0 && (W.state = x.joint_positions[V]);
      });
      const I = Cn(R);
      De.getState().updateInstanceTransforms(I);
    }, [
      m,
      h
    ]), { invalidate: S } = Pe();
    return Qe((x, v) => {
      const P = e.current;
      if (P && !(i === "off" || i === "paused")) {
        if (i === "stepping") {
          const C = Ye.getState().actionType, R = C === "torque" ? p() : C === "velocity" ? w() : d(), I = P.step(C, R);
          b(I.observation), y("paused");
          return;
        }
        if (i === "running") {
          const C = v * u;
          t.current += C;
          const R = Ye.getState().actionType;
          for (; t.current >= l; ) {
            const I = R === "torque" ? p() : R === "velocity" ? w() : d(), A = P.step(R, I);
            Math.random() < 0.01 && console.log("[Physics] actionType:", R, "actions:", I, "positions:", A.observation.joint_positions), b(A.observation), t.current -= l;
          }
          S();
        }
      }
    }), c.useEffect(() => {
      if (i === "off" && e.current) {
        const x = Ye.getState().jointStates;
        o.current.forEach((P, C) => {
          var _a3;
          const R = (_a3 = x[C]) == null ? void 0 : _a3.position;
          R !== void 0 && s(P, R, true);
        });
        const v = e.current.reset();
        b(v), t.current = 0;
      }
    }, [
      i,
      b,
      s
    ]), {
      isInitialized: !!e.current,
      numJoints: ((_a2 = e.current) == null ? void 0 : _a2.numJoints) ?? 0
    };
  }
  function Vi() {
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
      const f = Ws(s, u);
      if (f.size === 0) return;
      const h = oe.getState().document, m = structuredClone(h);
      let y = false;
      for (const p of m.joints ?? []) {
        const w = f.get(p.id);
        w !== void 0 && (p.state = w, y = true);
      }
      if (!y) return;
      const d = Cn(m);
      De.getState().updateInstanceTransforms(d), t();
    });
  }
  const $i = [
    "video/mp4;codecs=avc1.640028",
    "video/mp4;codecs=avc1.42E01E",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm"
  ], Wi = 12e6, Gi = 60, Hi = 250;
  function Yi() {
    if (typeof MediaRecorder > "u") return null;
    for (const e of $i) if (MediaRecorder.isTypeSupported(e)) return e;
    return null;
  }
  function Xi(e) {
    return e.startsWith("video/mp4") ? "mp4" : e.startsWith("video/webm") ? "webm" : "bin";
  }
  function Ui(e) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "untitled";
  }
  function qi() {
    return (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
  }
  function Ki() {
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
        const l = Yi();
        if (!l) {
          a.setError("MediaRecorder is not supported in this browser.");
          return;
        }
        const u = pi(), f = o === "raytrace" && u !== null;
        o === "raytrace" && !f && Ke.warn("app", "Raytrace overlay not mounted at record start; falling back to WebGL canvas.");
        const m = f ? u : e.domElement;
        if (typeof m.captureStream != "function") {
          a.setError("Canvas.captureStream is not supported in this browser.");
          return;
        }
        const y = m.captureStream(Gi);
        let d;
        try {
          d = new MediaRecorder(y, {
            mimeType: l,
            videoBitsPerSecond: Wi
          });
        } catch (p) {
          a.setError(p instanceof Error ? p.message : "Failed to create MediaRecorder.");
          return;
        }
        i.chunks = [], i.recorder = d, i.mimeType = l, i.raytraceDriving = f, d.ondataavailable = (p) => {
          p.data && p.data.size > 0 && (i.chunks.push(p.data), tt.getState().addBytes(p.data.size));
        }, d.onerror = (p) => {
          var _a2;
          const b = ((_a2 = p.error) == null ? void 0 : _a2.message) ?? "MediaRecorder error";
          Ke.warn("app", `Recorder error: ${b}`), tt.getState().setError(b);
        }, d.onstop = () => {
          const p = i.chunks, w = i.mimeType ?? "video/webm";
          if (i.chunks = [], i.recorder = null, i.mimeType = null, i.raytraceDriving = false, i.rafId !== null && (cancelAnimationFrame(i.rafId), i.rafId = null), p.length === 0) {
            tt.getState().reset();
            return;
          }
          const b = new Blob(p, {
            type: w
          }), S = oe.getState().documentName ?? "untitled", x = `vcad-sim-${Ui(S)}-${qi()}.${Xi(w)}`;
          rs(b, x), tt.getState().reset();
        };
        try {
          d.start(Hi), tt.getState().setMimeType(l);
        } catch (p) {
          i.recorder = null, i.mimeType = null, i.raytraceDriving = false, a.setError(p instanceof Error ? p.message : "Failed to start recording.");
          return;
        }
        if (i.raytraceDriving) {
          const p = () => {
            s.current.raytraceDriving && (Zn(), s.current.rafId = requestAnimationFrame(p));
          };
          s.current.rafId = requestAnimationFrame(p);
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
            s.current.raytraceDriving && (Zn(), s.current.rafId = requestAnimationFrame(l));
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
  function Zi(e, t) {
    const o = e ?? {};
    return (o.shift ?? false) === (t.shift ?? false) && (o.ctrl ?? false) === (t.ctrl ?? false) && (o.meta ?? false) === (t.meta ?? false) && (o.alt ?? false) === (t.alt ?? false);
  }
  function Ji(e) {
    return {
      shift: e.shiftKey,
      ctrl: e.ctrlKey,
      meta: e.metaKey,
      alt: e.altKey
    };
  }
  function Qi(e, t, o) {
    const s = [
      ...e.filter((a) => !a.device || a.device === o)
    ].sort((a, i) => {
      const l = (u) => Object.values(u ?? {}).filter(Boolean).length;
      return l(i.modifiers) - l(a.modifiers);
    });
    for (const a of s) if (Zi(a.modifiers, t)) return a.action;
    return "none";
  }
  function ea(e, t) {
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
  const ta = {
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
    return (ta[e] ?? 0) * (1 + t * 4);
  }
  function pt(e, t, o = 0) {
    return t / 2 + Dt(e, o);
  }
  new E();
  new E();
  function Qn(e, t, o) {
    let n = e.x, s = e.y;
    return o && t > 0 && (n = Math.round(n / t) * t, s = Math.round(s / t) * t), {
      x: n,
      y: s
    };
  }
  function na(e, t) {
    var _a2;
    return ((_a2 = e.find((n) => n.layer === t)) == null ? void 0 : _a2.color) ?? "#888";
  }
  function Lo(e, t) {
    var _a2;
    return ((_a2 = e.find((n) => n.layer === t)) == null ? void 0 : _a2.visible) ?? false;
  }
  const oa = 120, eo = new We("#3b82f6"), sa = /* @__PURE__ */ new Set([
    "component",
    "silkscreen"
  ]), ra = /* @__PURE__ */ new Set([
    "laminate",
    "substrate",
    "mask"
  ]);
  function to(e, t) {
    if (!e || t <= 0) return 0;
    const o = e;
    return Dt(o, t) - Dt(o, 0);
  }
  function ia(e, t, o) {
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
  function aa({ pcb: e, layers: t, activeNet: o, hoveredNet: n, selection: s, explosion: a, showBoard: i }) {
    const { invalidate: l } = Pe(), [u, f] = c.useState([]), h = c.useRef(0);
    c.useEffect(() => {
      const p = ++h.current, w = setTimeout(() => {
        is(e).then((b) => {
          h.current === p && (f(b), l());
        }).catch((b) => console.error("[PcbKernelBoard] preview meshes failed:", b));
      }, oa);
      return () => clearTimeout(w);
    }, [
      e,
      l
    ]);
    const m = c.useMemo(() => u.filter((p) => !sa.has(p.role)).map((p, w) => {
      var _a2, _b, _c;
      const b = new ft();
      b.setAttribute("position", new zt(p.positions, 3)), p.normals.length === p.positions.length ? b.setAttribute("normal", new zt(p.normals, 3)) : b.computeVertexNormals(), b.setIndex(p.indices);
      const S = p.alpha ?? 1, x = new ks({
        color: new We(p.color[0], p.color[1], p.color[2]),
        metalness: p.metalness,
        roughness: p.roughness,
        envMapIntensity: 0.5,
        clearcoat: p.clearcoat ?? 0,
        clearcoatRoughness: p.clearcoat_roughness ?? 0,
        ...S < 1 ? {
          transparent: true,
          opacity: S,
          depthWrite: false,
          side: Ue
        } : {},
        ...(((_a2 = p.emissive) == null ? void 0 : _a2[0]) ?? 0) > 0 || (((_b = p.emissive) == null ? void 0 : _b[1]) ?? 0) > 0 || (((_c = p.emissive) == null ? void 0 : _c[2]) ?? 0) > 0 ? {
          emissive: new We(p.emissive[0], p.emissive[1], p.emissive[2]),
          emissiveIntensity: 1
        } : {}
      });
      return {
        key: `${p.role}-${p.layer ?? "all"}-${w}`,
        role: p.role,
        layer: p.layer,
        geometry: b,
        material: x,
        entities: p.entities ?? []
      };
    }), [
      u
    ]);
    c.useEffect(() => () => m.forEach((p) => {
      p.geometry.dispose(), p.material.dispose();
    }), [
      m
    ]);
    const y = c.useMemo(() => {
      const p = [];
      for (const w of m) {
        if (w.entities.length === 0) continue;
        const b = w.entities.filter((I) => o != null && I.net === o || n != null && I.net === n || ia(I, e, s));
        if (b.length === 0) continue;
        const S = w.geometry.getIndex();
        let x = 0;
        for (const I of b) x += I.count;
        const v = new Uint32Array(x);
        let P = 0;
        for (const I of b) for (let A = 0; A < I.count; A++) v[P++] = S.getX(I.start + A);
        const C = new ft();
        C.setAttribute("position", w.geometry.getAttribute("position"));
        const R = w.geometry.getAttribute("normal");
        R && C.setAttribute("normal", R), C.setIndex(new $e(v, 1)), p.push({
          key: `hl-${w.key}`,
          geometry: C
        });
      }
      return p;
    }, [
      m,
      e,
      o,
      n,
      s
    ]);
    c.useEffect(() => () => y.forEach((p) => p.geometry.dispose()), [
      y
    ]);
    const d = c.useMemo(() => {
      const p = /* @__PURE__ */ new Map();
      for (const w of m) p.set(`hl-${w.key}`, to(w.layer, a));
      return p;
    }, [
      m,
      a
    ]);
    return r.jsxs("group", {
      children: [
        m.map((p) => ra.has(p.role) && !i || p.layer && !Lo(t, p.layer) ? null : r.jsx("mesh", {
          geometry: p.geometry,
          material: p.material,
          position: [
            0,
            0,
            to(p.layer, a)
          ],
          renderOrder: p.role === "mask" ? 1 : 0
        }, p.key)),
        y.map((p) => r.jsx("mesh", {
          geometry: p.geometry,
          position: [
            0,
            0,
            d.get(p.key) ?? 0
          ],
          renderOrder: 2,
          children: r.jsx("meshStandardMaterial", {
            color: eo,
            emissive: eo,
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
  function ca(e, t, o, n, s, a) {
    const i = pt(e.layer, s, a), l = Math.cos(n), u = Math.sin(n), f = (h, m) => {
      const y = h * l - m * u + t, d = h * u + m * l + o;
      return new E(y, d, i);
    };
    switch (e.type) {
      case "Line":
        return {
          points: [
            f(e.start.x, e.start.y),
            f(e.end.x, e.end.y)
          ],
          color: "#FFEB3B",
          layer: e.layer
        };
      case "Rect": {
        const h = f(e.start.x, e.start.y), m = f(e.end.x, e.start.y), y = f(e.end.x, e.end.y), d = f(e.start.x, e.end.y);
        return {
          points: [
            h,
            m,
            y,
            d,
            h
          ],
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      case "Circle": {
        const m = [];
        for (let y = 0; y <= 24; y++) {
          const d = y / 24 * Math.PI * 2, p = e.center.x + Math.cos(d) * e.radius, w = e.center.y + Math.sin(d) * e.radius;
          m.push(f(p, w));
        }
        return {
          points: m,
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      case "Polygon": {
        const h = e.vertices.map((m) => f(m.x, m.y));
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
  function la({ footprint: e, layers: t, boardThickness: o, highlight: n, explosion: s, interfering: a }) {
    const i = (e.rotation ?? 0) * Math.PI / 180, l = c.useMemo(() => e.graphics ? e.graphics.map((f) => ca(f, e.position.x, e.position.y, i, o, s)).filter((f) => f !== null && Lo(t, f.layer)) : [], [
      e,
      t,
      o,
      i,
      s
    ]), u = pt(e.front !== false ? "FSilkS" : "BSilkS", o, s);
    return r.jsxs("group", {
      children: [
        l.map((f, h) => r.jsxs("line", {
          children: [
            r.jsx("bufferGeometry", {
              children: r.jsx("bufferAttribute", {
                attach: "attributes-position",
                args: [
                  new Float32Array(f.points.flatMap((m) => [
                    m.x,
                    m.y,
                    m.z
                  ])),
                  3
                ]
              })
            }),
            r.jsx("lineBasicMaterial", {
              color: a ? "#ef4444" : n ? "#3b82f6" : na(t, f.layer),
              linewidth: 1
            })
          ]
        }, h)),
        r.jsx(Vo, {
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
  const no = new We("#ef4444"), ua = new We(0, 0, 0);
  function da() {
    const e = le((a) => a.componentBodies), t = le((a) => a.showComponentBodies), o = le((a) => a.interferingFootprints), n = c.useMemo(() => new Set(o), [
      o
    ]), s = c.useMemo(() => e.map((a, i) => {
      const l = new ft();
      l.setAttribute("position", new zt(a.positions, 3)), a.normals.length === a.positions.length && l.setAttribute("normal", new zt(a.normals, 3)), l.setIndex(a.indices), a.normals.length !== a.positions.length && l.computeVertexNormals();
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
            color: i ? no : a.color,
            metalness: i ? 0.1 : a.metalness,
            roughness: i ? 0.45 : a.roughness,
            emissive: i ? no : a.emissiveOn ? a.emissive : ua,
            emissiveIntensity: i ? 0.45 : a.emissiveOn ? 2.5 : 0
          })
        }, a.key);
      })
    });
  }
  function fa(e, t, o) {
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
      const u = a.connections[l], f = a.connections[l + 1], h = s.get(`${u.component_ref}:${u.pin_number}`), m = s.get(`${f.component_ref}:${f.pin_number}`);
      h && m && n.push({
        net: a.name,
        from: h,
        to: m,
        fpRef: u.component_ref,
        padNum: u.pin_number
      });
    }
    return n;
  }
  const pa = "#3b82f6", ma = "#555555";
  function ha({ pcb: e, netlist: t, activeNet: o, hoveredNet: n, boardThickness: s, explosion: a, onStartRoute: i, onHoverNet: l }) {
    const u = c.useMemo(() => fa(e.footprints, t, e.traces), [
      e.footprints,
      t,
      e.traces
    ]), f = pt("FCu", s, a) + 0.1;
    return u.length === 0 ? null : r.jsx("group", {
      children: u.map((h, m) => {
        const d = h.net === o || h.net === n ? pa : ma, p = new Float32Array([
          h.from.x,
          h.from.y,
          f,
          h.to.x,
          h.to.y,
          f
        ]);
        return r.jsxs("line", {
          onClick: (w) => {
            w.stopPropagation(), i(h.fpRef, h.padNum, h.net);
          },
          onPointerEnter: () => l(h.net),
          onPointerLeave: () => l(null),
          children: [
            r.jsx("bufferGeometry", {
              children: r.jsx("bufferAttribute", {
                attach: "attributes-position",
                args: [
                  p,
                  3
                ]
              })
            }),
            r.jsx("lineDashedMaterial", {
              color: d,
              dashSize: 0.5,
              gapSize: 0.5,
              linewidth: 1
            })
          ]
        }, m);
      })
    });
  }
  const oo = "#3b82f6";
  function xa({ pcb: e, routeStartPad: t, routePreview: o, boardThickness: n, activeLayer: s, explosion: a }) {
    if (!t || o.length === 0) return null;
    const i = e.footprints.find((v) => v.ref === t.fpRef), l = i == null ? void 0 : i.pads.find((v) => v.number === t.padNum);
    if (!i || !l) return null;
    const u = {
      x: i.position.x + l.position.x,
      y: i.position.y + l.position.y
    }, f = o[o.length - 1], h = pt(s, n, a) + 0.02, m = e.rules.defaultRules.traceWidth, y = e.rules.defaultRules.clearance, d = f.x - u.x, p = f.y - u.y, w = Math.sqrt(d * d + p * p);
    if (w < 0.01) return null;
    const b = Math.atan2(p, d), S = (u.x + f.x) / 2, x = (u.y + f.y) / 2;
    return r.jsxs("group", {
      children: [
        r.jsxs("mesh", {
          position: [
            S,
            x,
            h - 0.01
          ],
          rotation: [
            0,
            0,
            b
          ],
          children: [
            r.jsx("boxGeometry", {
              args: [
                w,
                m + y * 2,
                0.02
              ]
            }),
            r.jsx("meshBasicMaterial", {
              color: oo,
              transparent: true,
              opacity: 0.15
            })
          ]
        }),
        r.jsxs("mesh", {
          position: [
            S,
            x,
            h
          ],
          rotation: [
            0,
            0,
            b
          ],
          children: [
            r.jsx("boxGeometry", {
              args: [
                w,
                m,
                0.035
              ]
            }),
            r.jsx("meshBasicMaterial", {
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
  function ya({ violations: e, boardThickness: t, explosion: o }) {
    if (e.length === 0) return null;
    const n = pt("FCu", t, o) + 0.15;
    return r.jsx("group", {
      children: e.map((s, a) => r.jsx(ga, {
        violation: s,
        z: n
      }, a))
    });
  }
  const va = {
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
  function wa(e, t, o) {
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
  function ba(e) {
    return Object.values(e).filter((t) => t != null && typeof t == "object" && "kind" in t);
  }
  function Sa(e) {
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
  function Ma({ pcb: e, nodeId: t, constraints: o, pickedTargets: n, boardThickness: s, explosion: a }) {
    const i = pt("FCu", s, a) + 0.12, l = c.useMemo(() => o.map((f) => {
      const m = ba(f.kind).map((w) => wa(e, t, w)).filter((w) => w !== null);
      if (m.length === 0) return null;
      const y = {
        x: m.reduce((w, b) => w + b.x, 0) / m.length,
        y: m.reduce((w, b) => w + b.y, 0) / m.length
      }, d = f.kind.type, p = f.kind.value;
      return {
        c: f,
        type: d,
        value: p,
        points: m,
        mid: y
      };
    }).filter((f) => f !== null), [
      o,
      e,
      t
    ]), u = c.useMemo(() => n.map((f) => {
      var _a2;
      return f.kind === "footprint" ? (_a2 = e.footprints.find((h) => h.ref === f.ref)) == null ? void 0 : _a2.position : e.outline.vertices[f.idx];
    }).filter((f) => f != null), [
      n,
      e
    ]);
    return l.length === 0 && u.length === 0 ? null : r.jsxs("group", {
      children: [
        l.map(({ c: f, type: h, value: m, points: y, mid: d }) => {
          const p = m !== void 0, w = f.driven === true;
          return r.jsxs("group", {
            children: [
              p && y.length === 2 && r.jsx(Ae, {
                points: [
                  [
                    y[0].x,
                    y[0].y,
                    i
                  ],
                  [
                    y[1].x,
                    y[1].y,
                    i
                  ]
                ],
                color: w ? "#9ca3af" : "#e5e7eb",
                lineWidth: 1,
                dashed: w,
                dashSize: 0.5,
                gapSize: 0.35,
                transparent: true,
                opacity: 0.75
              }),
              r.jsx(it, {
                position: [
                  d.x,
                  d.y,
                  i
                ],
                center: true,
                zIndexRange: [
                  20,
                  0
                ],
                children: r.jsx("div", {
                  style: Sa(w),
                  children: p ? `${typeof m == "number" ? m.toFixed(2) : String(m)}${h === "angle" || h === "rotation" ? "\xB0" : ""}${w ? " (ref)" : ""}` : va[h] ?? h
                })
              })
            ]
          }, f.id);
        }),
        u.map((f, h) => r.jsxs("mesh", {
          position: [
            f.x,
            f.y,
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
  function Ea({ showBoard: e = true } = {}) {
    const { invalidate: t } = Pe(), o = c.useRef(null), n = c.useRef(null), s = Tt((B) => B.activeBoardNodeId), a = oe((B) => B.document), i = s != null ? jn(a, s) : null, l = le((B) => B.selection), u = le((B) => B.hoveredNet), f = le((B) => B.netlist), h = le((B) => B.pcbLayers), m = le((B) => B.pcbGridSize), y = le((B) => B.pcbSnapToGrid), d = le((B) => B.pcbActiveLayer), p = le((B) => B.drcViolations), w = le((B) => B.routeActive), b = le((B) => B.routePreview), S = le((B) => B.routeStartPad), x = le((B) => B.pcbTool), v = le((B) => B.pcbDragging), P = le((B) => B.stackupExplosion), C = le((B) => B.interferingFootprints), R = le((B) => B.select), I = le((B) => B.setHoveredNet), A = le((B) => B.startRouteFromRatsnest), V = le((B) => B.updateRoutePreview), W = le((B) => B.startPcbDrag), D = le((B) => B.cancelPcbDrag), F = le((B) => B.pcbConstraintTargets), _ = le((B) => B.pushConstraintTarget), X = le((B) => B.setPcbSolveStatus), se = oe((B) => B.solveDesignConstraints), re = oe((B) => B.document.constraints), xe = oe((B) => B.moveFootprint), ge = oe((B) => B.removeTrace), O = oe((B) => B.removeVia), ie = c.useMemo(() => l.type === "net" ? l.netId : l.type === "trace" || l.type === "via" || l.type === "pad" ? l.net : null, [
      l
    ]), Ce = c.useMemo(() => l.type === "footprint" || l.type === "component" ? l.ref : null, [
      l
    ]), ee = c.useRef(null), Ee = c.useCallback((B) => {
      if (!i || B.button !== 0) return;
      B.stopPropagation();
      const Ne = B.point, Xe = n.current ? n.current.worldToLocal(Ne.clone()) : Ne, ae = Qn(Xe, m, y);
      if (x === "move") for (let Q = i.footprints.length - 1; Q >= 0; Q--) {
        const U = i.footprints[Q], we = 5, he = 5;
        if (ae.x >= U.position.x - we && ae.x <= U.position.x + we && ae.y >= U.position.y - he && ae.y <= U.position.y + he) {
          W(Q, U.position), ee.current = {
            fpIdx: Q,
            startWorld: ae
          };
          return;
        }
      }
      if (x === "constrain") {
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
      if (x === "select") {
        for (let Q = i.footprints.length - 1; Q >= 0; Q--) {
          const U = i.footprints[Q];
          for (const He of U.pads) {
            const ze = U.position.x + He.position.x, Ze = U.position.y + He.position.y;
            if (Math.sqrt((ae.x - ze) ** 2 + (ae.y - Ze) ** 2) < 1.5) {
              R({
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
            R({
              type: "footprint",
              ref: U.ref
            });
            return;
          }
        }
        for (let Q = 0; Q < i.traces.length; Q++) {
          const U = i.traces[Q], we = U.end.x - U.start.x, he = U.end.y - U.start.y, He = we * we + he * he;
          if (He < 1e-6) continue;
          let ze = ((ae.x - U.start.x) * we + (ae.y - U.start.y) * he) / He;
          ze = Math.max(0, Math.min(1, ze));
          const Ze = U.start.x + ze * we, Te = U.start.y + ze * he;
          if (Math.sqrt((ae.x - Ze) ** 2 + (ae.y - Te) ** 2) < U.width / 2 + 0.5) {
            R({
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
            R({
              type: "via",
              idx: Q,
              net: U.net
            });
            return;
          }
        }
        R({
          type: "none"
        });
      }
      if (x === "delete") {
        for (let Q = 0; Q < i.traces.length; Q++) {
          const U = i.traces[Q], we = U.end.x - U.start.x, he = U.end.y - U.start.y, He = we * we + he * he;
          if (He < 1e-6) continue;
          let ze = ((ae.x - U.start.x) * we + (ae.y - U.start.y) * he) / He;
          ze = Math.max(0, Math.min(1, ze));
          const Ze = U.start.x + ze * we, Te = U.start.y + ze * he;
          if (Math.sqrt((ae.x - Ze) ** 2 + (ae.y - Te) ** 2) < U.width / 2 + 0.5 && s != null) {
            ge(s, Q);
            return;
          }
        }
        for (let Q = 0; Q < i.vias.length; Q++) {
          const U = i.vias[Q];
          if (Math.sqrt((ae.x - U.position.x) ** 2 + (ae.y - U.position.y) ** 2) < U.diameter / 2 + 0.3 && s != null) {
            O(s, Q);
            return;
          }
        }
      }
      if (x === "route") for (const Q of i.footprints) for (const U of Q.pads) {
        const we = Q.position.x + U.position.x, he = Q.position.y + U.position.y;
        if (Math.sqrt((ae.x - we) ** 2 + (ae.y - he) ** 2) < 1.5) {
          le.getState().startRoute(Q.ref, U.number, U.net ?? "");
          return;
        }
      }
    }, [
      i,
      x,
      m,
      y,
      s,
      R,
      W,
      ge,
      O
    ]), de = c.useCallback((B) => {
      if (!i) return;
      const Ne = B.point, Xe = n.current ? n.current.worldToLocal(Ne.clone()) : Ne, ae = Qn(Xe, m, y);
      if (v && s != null) {
        xe(s, v.fpIdx, {
          x: ae.x,
          y: ae.y,
          z: 0
        }), t();
        return;
      }
      w && (V([
        ae
      ]), t());
    }, [
      i,
      v,
      w,
      m,
      y,
      s,
      xe,
      V,
      t
    ]), be = c.useCallback(() => {
      if (v) {
        if (s != null && ((re == null ? void 0 : re.length) ?? 0) > 0 && i) {
          const B = i.footprints[v.fpIdx];
          if (B) {
            const Ne = se({
              extraFixed: [
                {
                  node: Number(s),
                  ref: B.ref
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
      v,
      D,
      s,
      re,
      i,
      se,
      X
    ]);
    if (!i) return null;
    const Fe = i.outline.thickness;
    let Ge = 1 / 0, Oe = -1 / 0, Se = 1 / 0, Ie = -1 / 0;
    for (const B of i.outline.vertices) B.x < Ge && (Ge = B.x), B.x > Oe && (Oe = B.x), B.y < Se && (Se = B.y), B.y > Ie && (Ie = B.y);
    const me = isFinite(Ge) ? (Ge + Oe) / 2 : 0, je = isFinite(Se) ? (Se + Ie) / 2 : 0, Le = pt("FCu", Fe);
    return r.jsxs("group", {
      ref: n,
      children: [
        r.jsx(vo, {
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
          cellSize: m,
          cellColor: "#333333",
          sectionSize: m * 10,
          sectionColor: "#444444",
          fadeDistance: 100,
          infiniteGrid: true
        }),
        r.jsx($o, {
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
        r.jsx(aa, {
          pcb: i,
          layers: h,
          activeNet: ie,
          hoveredNet: u,
          selection: l,
          explosion: P,
          showBoard: e
        }),
        i.footprints.map((B, Ne) => r.jsx(la, {
          footprint: B,
          layers: h,
          boardThickness: Fe,
          highlight: Ce === B.ref,
          interfering: C.includes(B.ref),
          explosion: P
        }, `fp-${Ne}`)),
        r.jsx(da, {}),
        r.jsx(ha, {
          pcb: i,
          netlist: f,
          activeNet: ie,
          hoveredNet: u,
          boardThickness: Fe,
          explosion: P,
          onStartRoute: A,
          onHoverNet: I
        }),
        w && r.jsx(xa, {
          pcb: i,
          routeStartPad: S,
          routePreview: b,
          boardThickness: Fe,
          activeLayer: d,
          explosion: P
        }),
        s != null && r.jsx(Ma, {
          pcb: i,
          nodeId: Number(s),
          constraints: re ?? [],
          pickedTargets: F,
          boardThickness: Fe,
          explosion: P
        }),
        r.jsx(ya, {
          violations: p,
          boardThickness: Fe,
          explosion: P
        })
      ]
    });
  }
  const Pa = [
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
  function Ca({ pcb: e, explosion: t }) {
    const o = c.useMemo(() => {
      const i = e.outline.vertices;
      if (i.length < 3) return null;
      const l = new Is();
      l.moveTo(i[0].x, i[0].y);
      for (let u = 1; u < i.length; u++) l.lineTo(i[u].x, i[u].y);
      if (l.closePath(), e.outline.cutouts) for (const u of e.outline.cutouts) {
        if (u.length < 3) continue;
        const f = new zs();
        f.moveTo(u[0].x, u[0].y);
        for (let h = 1; h < u.length; h++) f.lineTo(u[h].x, u[h].y);
        f.closePath(), l.holes.push(f);
      }
      return l;
    }, [
      e.outline
    ]), n = e.outline.thickness, s = c.useMemo(() => o ? new An(o, {
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
    return s ? r.jsxs("group", {
      children: [
        r.jsx("mesh", {
          geometry: s,
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
        t > 0 && a && Pa.map((i) => {
          const l = Dt(i.top, t), u = Dt(i.bottom, t), f = (l + u) / 2;
          return r.jsx("mesh", {
            geometry: a,
            position: [
              0,
              0,
              f - 0.05
            ],
            children: r.jsx("meshStandardMaterial", {
              color: "#1a7a3a",
              roughness: 0.9,
              metalness: 0,
              transparent: true,
              opacity: 0.3,
              side: Ue
            })
          }, i.name);
        })
      ]
    }) : null;
  }
  function ja({ excludeNodeId: e }) {
    const t = oe((o) => o.document);
    return as(t).length > 0 ? null : t.pcb && e == null ? r.jsx(Ca, {
      pcb: t.pcb,
      explosion: 0
    }) : null;
  }
  class Ra extends c.Component {
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
  function ka({ children: e }) {
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
  function No() {
    if (typeof window > "u") return null;
    const e = window;
    return e.SpeechRecognition ?? e.webkitSpeechRecognition ?? null;
  }
  function Ia() {
    return No() != null;
  }
  function za(e) {
    var _a2, _b;
    const t = No();
    if (!t) return (_a2 = e.onError) == null ? void 0 : _a2.call(e, "Speech recognition not supported in this browser."), null;
    const o = new t();
    o.continuous = true, o.interimResults = true, o.lang = e.lang ?? "en-US";
    let n = false, s = "", a = "";
    o.onresult = (i) => {
      var _a3;
      let l = "", u = s;
      for (let f = i.resultIndex; f < i.results.length; f++) {
        const h = i.results[f];
        if (!h) continue;
        const m = ((_a3 = h[0]) == null ? void 0 : _a3.transcript) ?? "";
        h.isFinal ? u += m : l += m;
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
  const Aa = 0.025, Da = 0.04, Ta = 0.4, _a = 5e-3, Fa = 0.5, La = 1e3, so = 1e-4, ro = 10;
  function cn(e, t, o, n, s) {
    var _a2;
    const a = t.get(o);
    if (!a) return false;
    const i = (_a2 = e.getJointPose) == null ? void 0 : _a2.call(e, a, n);
    if (!i) return false;
    const l = i.transform.position;
    return s.set(l.x, l.y, l.z), true;
  }
  const ln = new E(), un = new E(), io = new E();
  function Na(e, t, o, n, s) {
    if (!cn(e, t, "thumb-tip", o, ln) || !cn(e, t, "index-finger-tip", o, un) || !cn(e, t, "wrist", o, io)) return false;
    const a = ln.distanceTo(un), i = n ? a < Da : a < Aa;
    return s.pinching = i, s.midpoint.copy(ln).add(un).multiplyScalar(0.5), s.reach.copy(s.midpoint).sub(io).normalize(), true;
  }
  function Oa(e) {
    var _a2;
    let t = e;
    for (; t; ) {
      const o = (_a2 = t.userData) == null ? void 0 : _a2.partId;
      if (typeof o == "string") return o;
      t = t.parent;
    }
    return null;
  }
  const dn = new xn(), ao = new E(), co = new E();
  function Ba(e, t, o) {
    ao.copy(t).addScaledVector(o, -0.02), co.copy(o), dn.set(ao, co), dn.far = Ta + 0.02;
    const n = dn.intersectObject(e, true);
    for (const s of n) {
      const a = Oa(s.object);
      if (a) return a;
    }
    return null;
  }
  const Va = 800, mt = new E(), ht = new E(), bt = new E(), Vt = new E();
  function $a() {
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
    }), l = c.useRef(null), u = c.useRef(null), f = c.useRef("");
    return c.useEffect(() => () => {
      var _a2;
      (_a2 = u.current) == null ? void 0 : _a2.stop(), u.current = null;
    }, []), Qe((h, m, y) => {
      if (!e) return;
      const d = y;
      if (!d) return;
      const p = t.xr.getSession(), w = t.xr.getReferenceSpace();
      if (!p || !w) return;
      for (const R of p.inputSources) {
        if (!R.hand) continue;
        const I = R.handedness === "left" ? n : s, A = i.current;
        if (Na(d, R.hand, w, I.current.pinching, A) && (I.current.pinching = A.pinching, I.current.midpoint.copy(A.midpoint), A.pinching && a.current == null)) {
          const V = Ba(o, A.midpoint, A.reach);
          V && (a.current = {
            kind: "fillet",
            partId: V
          });
        }
      }
      const b = n.current, S = s.current, x = b.pinching && S.pinching;
      if ((b.pinching && !S.pinching || !b.pinching && S.pinching) && a.current == null && Ia()) {
        const R = performance.now(), I = l.current;
        if (I == null) l.current = {
          startedAt: R
        };
        else if (u.current == null && R - I.startedAt >= Va) {
          f.current = "";
          const A = za({
            lang: "en-US",
            onTranscript: (V, W) => {
              W && (f.current = V);
            },
            onEnd: () => {
              const V = f.current.trim();
              if (u.current = null, f.current = "", !V) return;
              const W = Array.from($.getState().selectedPartIds), D = oe.getState().parts, F = W.map((_) => {
                const X = D.find((se) => se.id === _);
                return X ? {
                  partId: X.id,
                  partName: X.name ?? X.id,
                  geometryType: "part"
                } : null;
              }).filter((_) => _ != null);
              cs.getState().sendMessage(V, F, []);
            },
            onError: () => {
              u.current = null;
            }
          });
          A && (u.current = A);
        }
      } else if (l.current && (l.current = null), u.current) {
        const R = u.current;
        u.current = null, R.stop();
      }
      if (x && a.current == null) {
        mt.copy(b.midpoint), ht.copy(S.midpoint);
        const R = mt.distanceTo(ht);
        bt.copy(mt).add(ht).multiplyScalar(0.5);
        const I = Rt.getState().view, A = new E().copy(bt).sub(new E(...I.position)).divideScalar(I.scale);
        a.current = {
          kind: "scale",
          initialAnchor: bt.clone(),
          initialDistance: R,
          initialView: I,
          sceneAnchor: A
        };
      }
      const P = a.current;
      if (P && P.kind === "scale" && x) {
        mt.copy(b.midpoint), ht.copy(S.midpoint);
        const R = mt.distanceTo(ht);
        bt.copy(mt).add(ht).multiplyScalar(0.5);
        const I = P.initialDistance > 1e-6 ? R / P.initialDistance : 1;
        let A = P.initialView.scale * I;
        A < so && (A = so), A > ro && (A = ro), Vt.copy(P.sceneAnchor).multiplyScalar(A).multiplyScalar(-1).add(bt), Rt.getState().setView({
          scale: A,
          position: [
            Vt.x,
            Vt.y,
            Vt.z
          ]
        });
        return;
      }
      if (!(!P || !(!b.pinching || !S.pinching))) {
        if (P.kind === "fillet") {
          const R = b.midpoint.distanceTo(S.midpoint);
          if (a.current = null, R < _a || R > Fa) return;
          const I = Rt.getState().view, A = I.scale > 1e-9 ? 1e-3 / I.scale : 1, V = R * La * A;
          oe.getState().addFillet(P.partId, V);
          return;
        }
        if (P.kind === "scale") {
          a.current = null;
          return;
        }
      }
    }), null;
  }
  const Wa = 5e3, Ct = wo((e, t) => ({
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
      for (const [i, l] of n) o - l.ts > Wa && (a.delete(i), s = true);
      s && e({
        peers: a
      });
    },
    clear: () => e({
      peers: /* @__PURE__ */ new Map()
    })
  })), Ga = 100, Ha = 2e3, lo = new E(), St = new st(), $t = new E();
  function uo(e, t, o) {
    t.copy(e).sub(new E(o.position[0], o.position[1], o.position[2])).divideScalar(o.scale);
  }
  function Ya() {
    var _a2, _b;
    const e = _t(), { camera: t, gl: o } = Pe(), n = ls((u) => u.cloudId), a = (_b = (_a2 = us((u) => u.user)) == null ? void 0 : _a2.user_metadata) == null ? void 0 : _b.name, i = c.useRef(null), l = c.useRef(0);
    return c.useEffect(() => {
      if (!e || !n) return;
      const u = Ct.getState().ingest, f = Ct.getState().drop, h = Gs(n, u, f);
      return i.current = h, () => {
        h == null ? void 0 : h.leave(), i.current = null, Ct.getState().clear();
      };
    }, [
      e,
      n
    ]), c.useEffect(() => {
      if (!e) return;
      const u = window.setInterval(() => Ct.getState().pruneStale(), Ha);
      return () => window.clearInterval(u);
    }, [
      e
    ]), Qe((u, f, h) => {
      var _a3;
      if (!e || !i.current) return;
      const m = performance.now();
      if (m - l.current < Ga) return;
      l.current = m;
      const y = Rt.getState().view;
      t.getWorldPosition(lo), t.getWorldQuaternion(St), uo(lo, $t, y);
      let d, p;
      const w = h, b = o.xr.getSession(), S = o.xr.getReferenceSpace();
      if (w && b && S) for (const x of b.inputSources) {
        if (!x.hand) continue;
        const v = x.hand.get("wrist");
        if (!v) continue;
        const P = (_a3 = w.getJointPose) == null ? void 0 : _a3.call(w, v, S);
        if (!P) continue;
        const C = new E(P.transform.position.x, P.transform.position.y, P.transform.position.z), R = new E();
        uo(C, R, y);
        const I = [
          R.x,
          R.y,
          R.z
        ];
        x.handedness === "left" ? d = I : x.handedness === "right" && (p = I);
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
          leftHand: d,
          rightHand: p
        }
      });
    }), r.jsx(Xa, {});
  }
  function Xa() {
    const e = Ct((o) => o.peers), t = Array.from(e.values());
    return t.length === 0 ? null : r.jsx("group", {
      children: t.map((o) => r.jsx(Ua, {
        update: o
      }, o.userId))
    });
  }
  const fo = new st(), Wt = new Zt();
  function Ua({ update: e }) {
    const t = e.color ?? "#c084fc", o = e.pose.head;
    return fo.set(e.pose.headRot[0], e.pose.headRot[1], e.pose.headRot[2], e.pose.headRot[3]), Wt.setFromQuaternion(fo), r.jsxs("group", {
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
  const qa = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, Ka = new E(), Za = new E();
  function fn() {
    const e = $.getState();
    e.followMode === "lock" && (e.setFollowMode("free"), e.setFollowingParticipant(null));
  }
  const Ja = {
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
  function Qa(e) {
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
  function ec(e, t) {
    const o = Qa(t);
    return e ? {
      environment: e.environment ?? o.environment,
      lights: e.lights ?? o.lights,
      background: e.background ?? o.background,
      postProcessing: e.postProcessing ?? o.postProcessing
    } : o;
  }
  function tc(e, t = 100) {
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
  const mo = new At(), xt = new E(), Gt = new E(), ho = new E(), xo = new E();
  function Mt(e, t, o) {
    xt.subVectors(t, e).normalize();
    const n = new E(0, 1, 0);
    return Math.abs(xt.dot(n)) > 0.999 ? Gt.crossVectors(new E(0, 0, 1), xt).normalize() : Gt.crossVectors(xt, n).normalize(), ho.crossVectors(Gt, xt), xo.copy(xt).negate(), mo.makeBasis(Gt, ho, xo), o.setFromRotationMatrix(mo), o;
  }
  function nc() {
    const e = ot((n) => n.showBoundaryEdges), t = ot((n) => n.toggleBoundaryEdges), o = De((n) => n.scene);
    return c.useEffect(() => {
      const n = (s) => {
        s.ctrlKey && s.shiftKey && (s.key === "B" || s.key === "b") && (s.preventDefault(), t());
      };
      return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
    }, [
      t
    ]), !e || !o ? null : r.jsx(r.Fragment, {
      children: o.parts.map((n, s) => n.mesh.positions.length ? r.jsx(vr, {
        positions: n.mesh.positions,
        indices: n.mesh.indices
      }, `boundary-${s}`) : null)
    });
  }
  function oc() {
    const e = ot((o) => o.inspectTriangles), t = ot((o) => o.toggleInspectTriangles);
    return c.useEffect(() => {
      const o = (n) => {
        n.ctrlKey && n.shiftKey && (n.key === "T" || n.key === "t") && (n.preventDefault(), t());
      };
      return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
    }, [
      t
    ]), e ? r.jsx(ir, {}) : null;
  }
  function sc({ direction: e, color: t, intensity: o, bounds: n }) {
    const s = c.useRef(null), { center: a, radius: i } = n, l = Math.max(i, 10);
    return c.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const f = new E(e.x, e.y, e.z).normalize();
      u.position.set(a[0] - f.x * l * 2.5, a[1] - f.y * l * 2.5, a[2] - f.z * l * 2.5), u.target.position.set(a[0], a[1], a[2]), u.target.updateMatrixWorld();
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
  function rc({ mode: e = "3d", pcbEditFocus: t = false }) {
    var _a2, _b;
    Li(), Oi(), Bi(), Vi(), Ki();
    const o = e === "pcb", [n, s] = c.useState(false), a = De((g) => g.engineReady), i = De((g) => g.scene), l = De((g) => g.previewMesh), u = oe((g) => g.parts), f = oe((g) => g.document.instances), h = oe((g) => g.document.partDefs), m = oe((g) => g.document.roots), y = oe((g) => g.document.scene), d = oe((g) => g.document.molecule), p = jt((g) => g.molecule), w = jt((g) => g.representation), b = p ?? d ?? null, S = $((g) => g.selectedPartIds), x = $((g) => g.selection), v = $((g) => g.isDraggingGizmo), P = $((g) => g.setOrbiting), C = $((g) => g.renderMode), R = $((g) => g.raytraceAvailable), I = ke((g) => g.active), A = Tt((g) => g.activeBoardNodeId), V = c.useMemo(() => {
      if (!t || A == null) return null;
      const g = mn(u, A);
      return g ? So(oe.getState().document, g) : null;
    }, [
      t,
      A,
      u
    ]), W = c.useMemo(() => {
      var _a3;
      return !t || A == null ? null : ((_a3 = mn(u, A)) == null ? void 0 : _a3.id) ?? null;
    }, [
      t,
      A,
      u
    ]), D = _t(), F = c.useRef(null), { camera: _, invalidate: X } = Pe(), { isDark: se } = at(), re = Yt(), xe = Vs(re), ge = $s(re), { zoomBehavior: O, orbitMomentum: ie } = re, Ce = c.useRef(new xn()), ee = c.useRef(new Dn()), Ee = c.useRef(X);
    Ee.current = X;
    const de = c.useRef(new As()), be = c.useRef(new E()), Fe = c.useRef({
      theta: 0,
      phi: 0
    }), Ge = c.useRef(false), Oe = c.useRef(new E()), Se = c.useRef(new E()), Ie = c.useRef(null), me = c.useRef(false), je = c.useRef(null), Le = c.useRef(new st()), B = c.useCallback(() => {
      me.current && (me.current = false, Ie.current = null, je.current = null, F.current && (F.current.enabled = true), s(false));
    }, []), Ne = c.useMemo(() => {
      const g = /* @__PURE__ */ new Map();
      if (!f || !h) return g;
      const z = /* @__PURE__ */ new Map();
      m.forEach((L, Y) => {
        z.set(L.root, Y);
      });
      for (const L of f) {
        const Y = h[L.partDefId];
        if (!Y) continue;
        const K = z.get(Y.root);
        K !== void 0 && g.set(K, L.id);
      }
      return g;
    }, [
      f,
      h,
      m
    ]), Xe = c.useMemo(() => m.map((g, z) => g.visible !== false ? z : -1).filter((g) => g >= 0), [
      m
    ]), ae = c.useCallback((g, z) => {
      if (S.has(g)) return true;
      const L = Ne.get(z);
      return !!(L && S.has(L));
    }, [
      S,
      Ne
    ]), Q = c.useMemo(() => {
      const g = {
        center: [
          0,
          30,
          0
        ],
        radius: 120
      };
      if (!i) return g;
      let z = 1 / 0, L = 1 / 0, Y = 1 / 0, K = -1 / 0, ce = -1 / 0, fe = -1 / 0;
      const H = (G, Z, te) => {
        const J = G, M = te, k = -Z;
        J < z && (z = J), M < L && (L = M), k < Y && (Y = k), J > K && (K = J), M > ce && (ce = M), k > fe && (fe = k);
      }, Me = (G, Z) => {
        for (let J = 0; J + 2 < G.length; J += 48) {
          const M = G[J], k = G[J + 1], T = G[J + 2];
          Z ? H(M * Z.scale.x + Z.translation.x, k * Z.scale.y + Z.translation.y, T * Z.scale.z + Z.translation.z) : H(M, k, T);
        }
      };
      for (const G of i.parts ?? []) Me(G.mesh.positions);
      for (const G of i.instances ?? []) Me(G.mesh.positions, G.transform ?? null);
      if (!Number.isFinite(z)) return g;
      const Re = [
        (z + K) / 2,
        (L + ce) / 2,
        (Y + fe) / 2
      ], ue = Math.hypot(K - z, ce - L, fe - Y) / 2 || 60;
      return {
        center: Re,
        radius: ue
      };
    }, [
      i
    ]), U = c.useMemo(() => {
      if (x.length === 0 || !i) return null;
      const g = x.some((ue) => ue.kind === "face" || ue.kind === "edge" || ue.kind === "vertex"), z = new rt(), L = new E();
      let Y = false;
      const K = (ue) => {
        var _a3;
        const G = u.findIndex((te) => te.id === ue);
        if (G < 0) return null;
        const Z = Xe.indexOf(G);
        return Z < 0 ? null : ((_a3 = i.parts[Z]) == null ? void 0 : _a3.mesh) ?? null;
      };
      for (const ue of x) switch (ue.kind) {
        case "part": {
          if (i.instances && i.instances.length > 0) for (const G of i.instances) {
            if (po(G) !== ue.id) continue;
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
            for (let M = 0; M < te.length; M += 3) L.set(te[M] * J.scale.x + J.translation.x, te[M + 1] * J.scale.y + J.translation.y, te[M + 2] * J.scale.z + J.translation.z), z.expandByPoint(L), Y = true;
          }
          Xe.forEach((G, Z) => {
            const te = u[G];
            if (!te || !ae(te.id, G) || te.id !== ue.id) return;
            const J = i.parts[Z];
            if (!J) return;
            const M = J.mesh.positions;
            for (let k = 0; k < M.length; k += 3) L.set(M[k], M[k + 1], M[k + 2]), z.expandByPoint(L), Y = true;
          });
          break;
        }
        case "face": {
          const G = K(ue.partId);
          if (!G) break;
          const Z = Co(G, ue.faceIndex);
          for (const te of Z) for (let J = 0; J < 3; J++) {
            const M = G.indices[te * 3 + J];
            L.set(G.positions[M * 3], G.positions[M * 3 + 1], G.positions[M * 3 + 2]), z.expandByPoint(L), Y = true;
          }
          break;
        }
        case "edge": {
          const G = K(ue.partId);
          if (!G) break;
          const { a: Z, b: te } = jo(G, ue.edgeId);
          z.expandByPoint(Z), z.expandByPoint(te), Y = true;
          break;
        }
        case "vertex": {
          const G = K(ue.partId);
          if (!G) break;
          const Z = Ro(G, ue.vertexId);
          z.expandByPoint(Z), Y = true;
          break;
        }
      }
      if (!Y) return null;
      const ce = new E();
      z.getCenter(ce);
      const fe = new E();
      z.getSize(fe);
      const H = Math.max(fe.length() * 0.5, 1);
      return {
        center: new E(ce.x, ce.z, -ce.y),
        radius: H,
        mode: g ? "pan-only" : "fit"
      };
    }, [
      x,
      i,
      u,
      ae,
      Xe
    ]);
    c.useEffect(() => {
      if (U && !v) {
        if (Se.current.copy(U.center), U.mode === "fit") if (_ instanceof Qt) {
          const z = _.fov * Math.PI / 180, L = 2 * Math.atan(Math.tan(z / 2) * _.aspect), Y = Math.min(z, L), K = U.radius / Math.sin(Y / 2) * 1.2;
          Ie.current = Math.max(_.near * 2, K);
        } else Ie.current = U.radius * 3 * 1.2;
        else Ie.current = null;
        me.current = true, s(true);
      }
    }, [
      U,
      v,
      _
    ]), Qe(() => {
      if (!me.current || !F.current) return;
      const g = F.current.target, z = Se.current, L = Ie.current, Y = je.current, K = 0.1;
      if (g.lerp(z, K), Y !== null) _.position.lerp(Y, K), _.quaternion.slerp(Le.current, K), g.copy(z);
      else if (L !== null) {
        const Me = be.current.subVectors(_.position, g), Re = Me.length(), ue = Re + (L - Re) * K;
        Me.normalize().multiplyScalar(ue), _.position.copy(g).add(Me);
      }
      const ce = g.distanceTo(z) < 0.01, fe = L === null || Math.abs(be.current.subVectors(_.position, g).length() - L) < 0.1, H = Y === null || _.position.distanceTo(Y) < 0.1;
      ce && fe && H ? (g.copy(z), Y && (_.position.copy(Y), _.quaternion.copy(Le.current)), F.current && (F.current.enabled = true), me.current = false, Ie.current = null, je.current = null, s(false)) : X();
    }), c.useEffect(() => {
      const g = () => {
        $.getState().followMode !== "free" && X();
      }, z = $.subscribe(g), L = It.subscribe(g);
      return () => {
        z(), L();
      };
    }, [
      X
    ]), c.useEffect(() => {
      let g = 0, z = 0;
      const L = () => {
        X(), ++z < 36 && (g = requestAnimationFrame(L));
      };
      return L(), () => cancelAnimationFrame(g);
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
      const g = () => X(), z = () => {
        document.visibilityState === "visible" && X();
      }, L = oe.subscribe(g);
      return window.addEventListener("focus", g), window.addEventListener("pageshow", g), document.addEventListener("visibilitychange", z), () => {
        L(), window.removeEventListener("focus", g), window.removeEventListener("pageshow", g), document.removeEventListener("visibilitychange", z);
      };
    }, [
      X
    ]), Qe(() => {
      const { followMode: g, followingParticipantId: z } = $.getState();
      if (g === "free" || !z) return;
      const L = It.getState().participants.get(z);
      if (!(L == null ? void 0 : L.camera)) return;
      const [Y, K, ce] = dt(L.camera.position), fe = Ka.set(Y, K, ce);
      if (g === "lock") {
        me.current && B();
        const [Me, Re, ue] = dt(L.camera.target), G = Za.set(Me, Re, ue);
        _.position.copy(fe), F.current ? (F.current.target.copy(G), F.current.update()) : _.lookAt(G), X();
        return;
      }
      if (me.current) return;
      F.current ? (F.current.target.lerp(fe, 0.15), F.current.update(), F.current.target.distanceToSquared(fe) > 1e-4 && X()) : _.lookAt(fe);
    }), c.useEffect(() => {
      const g = F.current, z = g == null ? void 0 : g.domElement;
      if (!z) return;
      const L = 1, Y = 0;
      let K = false;
      const ce = () => {
        K || (K = true, requestAnimationFrame(() => {
          K = false, g.update(), Ee.current();
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
        const Z = g.target, te = be.current.subVectors(_.position, Z), J = de.current.setFromVector3(te);
        J.theta += G.theta * L, J.phi += G.phi * L, J.phi = Math.max(0.01, Math.min(Math.PI - 0.01, J.phi)), G.theta *= Y, G.phi *= Y, te.setFromSpherical(J), _.position.copy(Z).add(te), _.lookAt(Z), g.update(), Ee.current(), requestAnimationFrame(fe);
      }, H = (G, Z, te) => {
        const J = 2e-3 * O.sensitivity;
        let M = -(Math.abs(te) > Math.abs(Z) ? te : Z) * J;
        O.invertDirection && (M = -M);
        const k = g.target, T = be.current.subVectors(_.position, k), N = T.length(), q = Math.max(1, N * (1 + M));
        if (O.zoomTowardsCursor) {
          const ne = z.getBoundingClientRect();
          ee.current.x = (G.clientX - ne.left) / ne.width * 2 - 1, ee.current.y = -((G.clientY - ne.top) / ne.height) * 2 + 1, Ce.current.setFromCamera(ee.current, _);
          const pe = Oe.current;
          Ce.current.ray.at(N, pe);
          const ye = 1 - q / N;
          k.lerp(pe, ye * 0.5);
        }
        T.normalize().multiplyScalar(q), _.position.copy(k).add(T), ce();
      }, Me = (G, Z) => {
        const te = g.target, k = be.current.subVectors(_.position, te).length() * 2e-3, T = new E(), N = new E();
        _.matrix.extractBasis(T, N, new E());
        const q = T.multiplyScalar(G * k).add(N.multiplyScalar(-Z * k));
        _.position.add(q), te.add(q), ce();
      }, Re = (G, Z, te) => {
        const J = 2 * Math.PI / z.clientHeight;
        if (te && ie) Fe.current.theta += G * J, Fe.current.phi += Z * J, Ge.current || (Ge.current = true, requestAnimationFrame(fe));
        else {
          const M = g.target, k = be.current.subVectors(_.position, M), T = de.current.setFromVector3(k);
          T.theta += G * J, T.phi += Z * J, T.phi = Math.max(0.01, Math.min(Math.PI - 0.01, T.phi)), k.setFromSpherical(T), _.position.copy(M).add(k), _.lookAt(M), ce();
        }
      }, ue = (G) => {
        G.preventDefault(), G.stopPropagation(), B(), fn();
        let Z = G.deltaX, te = G.deltaY;
        G.deltaMode === 1 && (Z *= 16, te *= 16), G.deltaMode === 2 && (Z *= 100, te *= 100);
        const J = Ji(G), M = Qi(xe.scrollBindings, J, ge), k = xe.trackpadOrbitEnabled && ge === "trackpad";
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
      return z.addEventListener("wheel", ue, {
        passive: false
      }), () => z.removeEventListener("wheel", ue);
    }, [
      _,
      xe,
      ge,
      O,
      ie,
      B
    ]), c.useEffect(() => {
      const g = F.current;
      if (!g) return;
      const z = g.domElement, L = () => {
        P(true), s(true), fn();
      }, Y = () => {
        P(false), s(false);
      }, K = () => {
        B(), fn();
      };
      return g.addEventListener("start", L), g.addEventListener("end", Y), z == null ? void 0 : z.addEventListener("pointerdown", K), () => {
        g.removeEventListener("start", L), g.removeEventListener("end", Y), z == null ? void 0 : z.removeEventListener("pointerdown", K);
      };
    }, [
      P,
      B
    ]), c.useEffect(() => {
      var _a3;
      const z = (_a3 = F.current) == null ? void 0 : _a3.domElement;
      if (!z) return;
      const L = () => {
        $.getState().selectedPartIds.size > 0 || window.dispatchEvent(new CustomEvent("vcad:camera-fit"));
      };
      return z.addEventListener("dblclick", L), () => z.removeEventListener("dblclick", L);
    }, []), c.useEffect(() => {
      var _a3;
      const z = (_a3 = F.current) == null ? void 0 : _a3.domElement;
      if (!z) return;
      const L = new Ds(new E(0, 1, 0), 0), Y = new Dn(), K = new xn(), ce = new E();
      let fe = false, H = null;
      const Me = () => {
        fe = false;
        const G = H;
        if (!G) return;
        const Z = z.getBoundingClientRect();
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
      return z.addEventListener("pointermove", Re), z.addEventListener("pointerleave", ue), () => {
        z.removeEventListener("pointermove", Re), z.removeEventListener("pointerleave", ue), $.getState().setCursorWorld(null);
      };
    }, [
      _
    ]), c.useEffect(() => {
      const g = (z) => {
        const { normal: L, centroid: Y, vertices: K } = z.detail, ce = new E(L.x, L.z, -L.y).normalize(), fe = new E(Y.x, Y.z, -Y.y);
        let H = 60;
        if (K && K.length >= 3) {
          const Re = new E(0, 1, 0);
          Math.abs(ce.dot(Re)) > 0.95 && Re.set(1, 0, 0);
          const ue = new E().crossVectors(Re, ce).normalize(), G = new E().crossVectors(ce, ue).normalize();
          let Z = 1 / 0, te = -1 / 0, J = 1 / 0, M = -1 / 0;
          const k = new E();
          for (const ne of K) {
            const pe = new E(ne.x, ne.z, -ne.y);
            k.subVectors(pe, fe);
            const ye = k.dot(ue), ve = k.dot(G);
            ye < Z && (Z = ye), ye > te && (te = ye), ve < J && (J = ve), ve > M && (M = ve);
          }
          const T = Math.max(1, te - Z), N = Math.max(1, M - J), q = 1.2;
          if (_ instanceof Qt) {
            const ne = _.fov * Math.PI / 180, pe = 2 * Math.atan(Math.tan(ne / 2) * _.aspect), ye = N / 2 / Math.tan(ne / 2), ve = T / 2 / Math.tan(pe / 2);
            H = Math.max(ye, ve, 10) * q;
          } else H = Math.max(T, N, 10) * q;
        }
        const Me = new E(fe.x + ce.x * H, fe.y + ce.y * H, fe.z + ce.z * H);
        Se.current.copy(fe), je.current = Me, Ie.current = H, Mt(Me, fe, Le.current), F.current && (F.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:face-selected", g), () => window.removeEventListener("vcad:face-selected", g);
    }, [
      _
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
      }, L = (Y) => {
        const K = Y.detail, ce = z[K];
        if (!ce) return;
        const fe = new E(ce[0], ce[1], ce[2]), H = new E(0, 0, 0);
        Se.current.copy(H), je.current = fe, Ie.current = null, Mt(fe, H, Le.current), F.current && (F.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:snap-view", L), () => window.removeEventListener("vcad:snap-view", L);
    }, []);
    const we = Pe((g) => g.size.width / Math.max(1, g.size.height));
    c.useEffect(() => {
      const g = (z) => {
        const { planeNormal: L, planeCenter: Y, width: K, height: ce } = z.detail, [fe, H, Me] = dt([
          Y.x,
          Y.y,
          Y.z
        ]), [Re, ue, G] = dt([
          L.x,
          L.y,
          L.z
        ]), Z = Math.hypot(Re, ue, G) || 1, te = new E(Re / Z, ue / Z, G / Z), J = _, M = (J.isPerspectiveCamera ? J.fov : 50) * (Math.PI / 180), k = J.isPerspectiveCamera ? J.aspect : we, T = 1.2, N = Math.max(K, 1), ne = Math.max(ce, 1) / 2 / Math.tan(M / 2), pe = N / 2 / (k * Math.tan(M / 2)), ye = Math.max(ne, pe, 10) * T;
        Se.current.set(fe, H, Me);
        const ve = new E(fe + te.x * ye, H + te.y * ye, Me + te.z * ye);
        je.current = ve, Ie.current = ye, Mt(ve, Se.current, Le.current), F.current && (F.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:fit-sketch", g), () => window.removeEventListener("vcad:fit-sketch", g);
    }, [
      _,
      we
    ]);
    const he = Pe((g) => g.gl), He = Pe((g) => g.scene), ze = Pe((g) => g.size), Ze = Ni();
    c.useEffect(() => {
      Ze || X();
    }, [
      Ze,
      X
    ]), c.useEffect(() => {
      const g = (L) => {
        const Y = Math.max(1, ze.width), K = Math.max(1, ze.height), [ce, fe, H] = dt(L.position), [Me, Re, ue] = dt(L.target), G = new Qt(50, Y / K, 0.1, 1e4);
        G.up.set(0, 1, 0), G.position.set(ce, fe, H), G.lookAt(Me, Re, ue), G.updateMatrixWorld();
        const Z = new Ts(Y, K, {
          samples: 4,
          colorSpace: gn
        }), te = he.getRenderTarget(), J = he.toneMapping, M = he.toneMappingExposure, k = he.outputColorSpace;
        he.toneMapping = Po, he.toneMappingExposure = 1, he.outputColorSpace = gn, he.setRenderTarget(Z), he.clear(), he.render(He, G), he.setRenderTarget(te), he.toneMapping = J, he.toneMappingExposure = M, he.outputColorSpace = k;
        const T = new Uint8Array(Y * K * 4);
        he.readRenderTargetPixels(Z, 0, 0, Y, K, T), Z.dispose();
        const N = document.createElement("canvas");
        N.width = Y, N.height = K;
        const q = N.getContext("2d");
        if (!q) return null;
        const ne = q.createImageData(Y, K), pe = Y * 4;
        for (let ye = 0; ye < K; ye++) {
          const ve = (K - 1 - ye) * pe;
          ne.data.set(T.subarray(ve, ve + pe), ye * pe);
        }
        return q.putImageData(ne, 0, 0), N;
      }, z = window;
      return z.__vcadCaptureAiCamera = g, () => {
        z.__vcadCaptureAiCamera === g && delete z.__vcadCaptureAiCamera;
      };
    }, [
      he,
      He,
      ze.width,
      ze.height
    ]), c.useEffect(() => {
      const g = () => {
        const z = new E(60, -60, 45), L = new E(0, 0, 0);
        Se.current.copy(L), je.current = z, Ie.current = null, Mt(z, L, Le.current), F.current && (F.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:hero-view", g), () => window.removeEventListener("vcad:hero-view", g);
    }, []), c.useEffect(() => {
      const g = (z) => {
        const { x: L, y: Y, z: K } = z.detail, [ce, fe, H] = dt([
          L,
          Y,
          K
        ]);
        Se.current.set(ce, fe, H), je.current = null, Ie.current = null, F.current && (F.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:focus-point", g), () => window.removeEventListener("vcad:focus-point", g);
    }, []), c.useEffect(() => {
      const g = () => {
        var _a3;
        const z = De.getState().scene;
        if (!z || z.parts.length === 0) return;
        const L = new rt(), Y = new E();
        let K = false;
        for (const Z of z.parts) {
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
        Se.current.copy(Me), je.current = G, Ie.current = H, Mt(G, Me, Le.current), F.current && (F.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:camera-fit", g), () => window.removeEventListener("vcad:camera-fit", g);
    }, [
      _
    ]);
    const Te = c.useMemo(() => ec(y, se), [
      y,
      se
    ]), qe = c.useMemo(() => {
      const g = Te.environment;
      return g.type === "None" ? null : g.type === "Preset" ? Ja[g.preset] ?? "studio" : "studio";
    }, [
      Te.environment
    ]), j = c.useMemo(() => {
      const g = Te.environment;
      return g.type === "None" ? 0 : g.intensity ?? 1;
    }, [
      Te.environment
    ]);
    return r.jsxs(r.Fragment, {
      children: [
        Te.lights.map((g) => {
          if (g.enabled === false) return null;
          const z = new We(g.color[0], g.color[1], g.color[2]);
          if (g.kind.type === "Directional") {
            const L = tc(g.kind.direction);
            return g.castShadow ? r.jsx(sc, {
              direction: g.kind.direction ?? {
                x: 0.5,
                y: -0.8,
                z: 0.4
              },
              color: z,
              intensity: g.intensity,
              bounds: Q
            }, g.id) : r.jsx("directionalLight", {
              position: L,
              intensity: g.intensity,
              color: z
            }, g.id);
          }
          return g.kind.type === "Point" ? r.jsx("pointLight", {
            position: [
              g.kind.position.x,
              g.kind.position.y,
              g.kind.position.z
            ],
            intensity: g.intensity,
            color: z,
            distance: g.kind.distance
          }, g.id) : g.kind.type === "Spot" ? r.jsx("spotLight", {
            position: [
              g.kind.position.x,
              g.kind.position.y,
              g.kind.position.z
            ],
            intensity: g.intensity,
            color: z,
            angle: g.kind.angle ? g.kind.angle * Math.PI / 180 : void 0,
            penumbra: g.kind.penumbra ? g.kind.penumbra / 90 : void 0
          }, g.id) : null;
        }),
        !o && !n && r.jsx(Wo, {
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
        !o && r.jsx(Zs, {}),
        r.jsx(Go, {
          ref: F,
          makeDefault: true,
          enabled: !D,
          enableDamping: false,
          enableZoom: qa,
          touches: {
            ONE: Tn.ROTATE,
            TWO: Tn.DOLLY_PAN
          },
          mouseButtons: (() => {
            const g = ea(xe, ge);
            return {
              LEFT: void 0,
              MIDDLE: g.MIDDLE,
              RIGHT: g.RIGHT
            };
          })()
        }),
        !o && !D && r.jsx(Ho, {
          alignment: "bottom-right",
          margin: [
            80,
            80
          ],
          children: r.jsx(Yo, {
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
          children: r.jsx(kn, {
            preset: qe,
            environmentIntensity: j,
            background: Te.background.type === "Environment"
          })
        }),
        !qe && r.jsxs(kn, {
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
        !o && ((_a2 = y == null ? void 0 : y.background) == null ? void 0 : _a2.type) === "Solid" && r.jsx("color", {
          attach: "background",
          args: [
            y.background.color[0],
            y.background.color[1],
            y.background.color[2]
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
              (V == null ? void 0 : V.position.x) ?? 0,
              (V == null ? void 0 : V.position.y) ?? 0,
              (V == null ? void 0 : V.position.z) ?? 0
            ],
            rotation: [
              ((V == null ? void 0 : V.rotationDeg.x) ?? 0) * Math.PI / 180,
              ((V == null ? void 0 : V.rotationDeg.y) ?? 0) * Math.PI / 180,
              ((V == null ? void 0 : V.rotationDeg.z) ?? 0) * Math.PI / 180,
              "ZYX"
            ],
            scale: [
              (V == null ? void 0 : V.scale.x) ?? 1,
              (V == null ? void 0 : V.scale.y) ?? 1,
              (V == null ? void 0 : V.scale.z) ?? 1
            ],
            children: r.jsx(Ea, {
              showBoard: true
            })
          })
        }),
        !o && a && r.jsxs(r.Fragment, {
          children: [
            C === "raytrace" && R && r.jsx(mi, {}),
            r.jsx(ka, {
              children: r.jsxs("group", {
                rotation: [
                  -Math.PI / 2,
                  0,
                  0
                ],
                children: [
                  r.jsx(_r, {}),
                  r.jsx(ja, {
                    excludeNodeId: A
                  }),
                  r.jsxs(r.Fragment, {
                    children: [
                      (_b = i == null ? void 0 : i.instances) == null ? void 0 : _b.map((g) => {
                        const z = po(g), L = {
                          id: z,
                          name: g.name ?? g.partDefId,
                          kind: "cube",
                          primitiveNodeId: 0,
                          scaleNodeId: 0,
                          rotateNodeId: 0,
                          translateNodeId: 0
                        };
                        return r.jsx(Bn, {
                          partInfo: L,
                          mesh: g.mesh,
                          materialKey: g.material,
                          selected: S.has(z),
                          transform: g.transform,
                          ghosted: t
                        }, g.instanceId);
                      }),
                      (!(i == null ? void 0 : i.instances) || i.instances.length === 0) && u.length === 0 && (i == null ? void 0 : i.parts.map((g, z) => r.jsx(ur, {
                        mesh: g.mesh,
                        materialKey: g.material
                      }, `imported-${z}`))),
                      (!(i == null ? void 0 : i.instances) || i.instances.length === 0) && u.length > 0 && (i == null ? void 0 : i.parts.map((g, z) => {
                        const L = Xe[z] ?? z, Y = u[L];
                        return !Y || Y.id === W ? null : r.jsx(Bn, {
                          partInfo: Y,
                          mesh: g.mesh,
                          materialKey: g.material,
                          selected: ae(Y.id, L),
                          ghosted: t && !Mn(Y)
                        }, Y.id);
                      }))
                    ]
                  }),
                  b && b.positions.length > 0 && r.jsx(gr, {
                    molecule: b,
                    representation: w
                  }),
                  r.jsx(nc, {}),
                  r.jsx(oc, {}),
                  i == null ? void 0 : i.clashes.map((g, z) => r.jsx(Sr, {
                    mesh: g
                  }, `clash-${z}`)),
                  r.jsx(Mr, {}),
                  l && r.jsx(Er, {
                    mesh: l
                  }),
                  r.jsx(jr, {}),
                  I && r.jsx(Ar, {}),
                  r.jsx(ei, {}),
                  r.jsx(si, {}),
                  r.jsx(Fi, {}),
                  r.jsx(ai, {}),
                  r.jsx(Ya, {})
                ]
              })
            }),
            r.jsx($a, {}),
            r.jsx(Or, {
              orbitControls: F
            })
          ]
        }),
        a && !D && !Ze && (() => {
          var _a3, _b2, _c, _d, _e2, _f, _g;
          const g = ((_a3 = Te.postProcessing.ambientOcclusion) == null ? void 0 : _a3.enabled) !== false, z = ((_b2 = Te.postProcessing.vignette) == null ? void 0 : _b2.enabled) !== false;
          if (!g && !z) return null;
          const L = (_c = he.getContext) == null ? void 0 : _c.call(he);
          if (!L || typeof L.getContextAttributes != "function" || !L.getContextAttributes()) return null;
          const Y = [];
          return g && Y.push(r.jsx(Fs, {
            aoRadius: ((_d = Te.postProcessing.ambientOcclusion) == null ? void 0 : _d.radius) ?? 0.5,
            intensity: ((_e2 = Te.postProcessing.ambientOcclusion) == null ? void 0 : _e2.intensity) ?? (se ? 2 : 1.5),
            aoSamples: n ? 3 : 6,
            denoiseSamples: n ? 1 : 4
          }, "ao")), z && Y.push(r.jsx(Ls, {
            offset: ((_f = Te.postProcessing.vignette) == null ? void 0 : _f.offset) ?? 0.3,
            darkness: ((_g = Te.postProcessing.vignette) == null ? void 0 : _g.darkness) ?? (se ? 0.5 : 0.3),
            eskil: false
          }, "vignette")), r.jsx(Ra, {
            children: r.jsx(Ns, {
              children: Y
            })
          });
        })()
      ]
    });
  }
  const go = {
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
  function yo(e, t, o, n, s, a, i) {
    const l = (f) => t + f * n, u = (f) => o - f * n;
    return r.jsxs("g", {
      pointerEvents: "none",
      children: [
        e.rendered.lines.map(([f, h], m) => r.jsx("line", {
          x1: l(f.x),
          y1: u(f.y),
          x2: l(h.x),
          y2: u(h.y),
          stroke: s,
          strokeWidth: a
        }, `${i}-l-${m}`)),
        e.rendered.texts.map((f, h) => {
          const m = String(f.alignment), y = m.includes("Left") ? "start" : m.includes("Right") ? "end" : "middle", d = m.startsWith("Top") ? "hanging" : m.startsWith("Bottom") ? "auto" : "middle";
          return r.jsx("text", {
            x: l(f.position.x),
            y: u(f.position.y),
            fontSize: f.height * n,
            fill: s,
            textAnchor: y,
            dominantBaseline: d,
            fontFamily: "monospace",
            children: f.text
          }, `${i}-t-${h}`);
        })
      ]
    }, i);
  }
  function ic() {
    const { viewDirection: e, showHiddenLines: t, showDimensions: o, zoom: n, pan: s, adjustZoom: a, adjustPan: i, resetView: l, detailViews: u, addDetailView: f } = hn(), h = De((M) => M.scene), m = De((M) => M.engine), y = oe((M) => M.parts), d = oe((M) => M.document.drawing), p = oe((M) => M.setDrawingSettings), w = $((M) => M.selectedPartIds), b = $((M) => M.select), S = $((M) => M.clearSelection), { isDark: x } = at(), v = c.useRef(null), [P, C] = c.useState(false), [R, I] = c.useState({
      x: 0,
      y: 0
    }), A = c.useRef({
      x: 0,
      y: 0
    }), V = c.useRef(false), [W, D] = c.useState(false), [F, _] = c.useState(null), [X, se] = c.useState(null), [re, xe] = c.useState(false), [ge, O] = c.useState([]), [ie, Ce] = c.useState(null), ee = x ? go.dark : go.light, Ee = c.useMemo(() => !(h == null ? void 0 : h.parts) || !m ? [] : h.parts.map((M, k) => {
      const T = y[k];
      if (!T) return null;
      const N = m.projectMesh(M.mesh, e);
      return N ? {
        partId: T.id,
        view: N
      } : null;
    }).filter((M) => M !== null), [
      h,
      m,
      e,
      y
    ]), de = c.useMemo(() => {
      if (Ee.length === 0) return null;
      let M = 1 / 0, k = 1 / 0, T = -1 / 0, N = -1 / 0;
      for (const { view: q } of Ee) M = Math.min(M, q.bounds.min_x), k = Math.min(k, q.bounds.min_y), T = Math.max(T, q.bounds.max_x), N = Math.max(N, q.bounds.max_y);
      return {
        min_x: M,
        min_y: k,
        max_x: T,
        max_y: N
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
    ]), Fe = c.useMemo(() => !be || !m || u.length === 0 ? [] : u.map((M) => {
      try {
        const k = m.createDetailView(be, M.centerX, M.centerY, M.scale, M.width, M.height, M.label);
        return {
          def: M,
          view: k
        };
      } catch {
        return null;
      }
    }).filter((M) => M !== null), [
      be,
      m,
      u
    ]), Ge = c.useMemo(() => {
      var _a2;
      if (!m || !((_a2 = h == null ? void 0 : h.parts) == null ? void 0 : _a2.length)) return [];
      const M = ((d == null ? void 0 : d.sections) ?? []).filter((T) => T.view === e);
      if (M.length === 0) return [];
      const k = ds();
      return k ? M.map((T) => {
        const N = fs(T.view, T.points);
        if (!N) return null;
        const q = m.offsetSectionMesh(k, N, {
          spacing: 3,
          angle: Math.PI / 4
        });
        return q ? {
          def: T,
          view: q
        } : null;
      }).filter((T) => T !== null) : [];
    }, [
      m,
      h,
      d,
      e
    ]), Oe = c.useMemo(() => {
      if (!m || !(d == null ? void 0 : d.titleBlock)) return null;
      try {
        return m.renderTitleBlock(ps(d.titleBlock, ""));
      } catch {
        return null;
      }
    }, [
      m,
      d
    ]), Se = c.useMemo(() => {
      if (!m || !(d == null ? void 0 : d.showBom) || y.length === 0) return null;
      try {
        const M = ms();
        return M.length > 0 ? m.renderBomTable(M) : null;
      } catch {
        return null;
      }
    }, [
      m,
      d,
      y
    ]), Ie = c.useMemo(() => {
      if (!de || !o || !m) return [];
      try {
        const M = m.WasmAnnotationLayer, k = new M(), { min_x: T, min_y: N, max_x: q, max_y: ne } = de;
        k.addHorizontalDimension(T, N, q, N, -10), k.addVerticalDimension(q, N, q, ne, 10);
        const ve = k.renderAll();
        return k.free(), ve;
      } catch {
        return [];
      }
    }, [
      de,
      o,
      m
    ]), me = c.useCallback((M) => {
      if (M.preventDefault(), M.shiftKey) {
        const q = -M.deltaY * 2e-3;
        a(q);
        return;
      }
      let k = M.deltaX, T = M.deltaY;
      M.deltaMode === 1 && (k *= 16, T *= 16), M.deltaMode === 2 && (k *= 100, T *= 100);
      const N = 0.15 / n;
      if (A.current.x -= k * N, A.current.y -= T * N, !V.current) {
        V.current = true;
        const q = () => {
          const ne = A.current;
          if (Math.abs(ne.x) < 0.01 && Math.abs(ne.y) < 0.01) {
            V.current = false, ne.x = 0, ne.y = 0;
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
      const M = v.current;
      if (M) return M.addEventListener("wheel", me, {
        passive: false
      }), () => M.removeEventListener("wheel", me);
    }, [
      me
    ]);
    const je = c.useCallback((M) => {
      (M.button === 1 || M.button === 0 && M.altKey) && (C(true), I({
        x: M.clientX,
        y: M.clientY
      }), A.current = {
        x: 0,
        y: 0
      }, V.current = false, M.target.setPointerCapture(M.pointerId), M.preventDefault());
    }, []), Le = c.useCallback((M) => {
      if (!P) return;
      const k = M.clientX - R.x, T = M.clientY - R.y;
      I({
        x: M.clientX,
        y: M.clientY
      });
      const N = v.current;
      if (!N) return;
      const q = N.getBoundingClientRect(), pe = (de ? (de.max_x - de.min_x) * 1.6 : 100) / q.width / n, ye = k * pe, ve = -T * pe;
      i(ye, ve), A.current.x = ye, A.current.y = ve;
    }, [
      P,
      R,
      i,
      n,
      de
    ]), B = c.useCallback((M) => {
      if (P) {
        C(false), M.target.releasePointerCapture(M.pointerId);
        const k = A.current;
        if ((Math.abs(k.x) > 0.1 || Math.abs(k.y) > 0.1) && !V.current) {
          V.current = true;
          const T = () => {
            if (Math.abs(k.x) < 0.01 && Math.abs(k.y) < 0.01) {
              V.current = false, k.x = 0, k.y = 0;
              return;
            }
            const N = 0.15;
            hn.getState().adjustPan(k.x * N, k.y * N);
            const q = 0.92;
            k.x *= q, k.y *= q, requestAnimationFrame(T);
          };
          requestAnimationFrame(T);
        }
      }
    }, [
      P
    ]), Ne = c.useCallback((M, k) => {
      if (k.stopPropagation(), k.shiftKey) if (w.has(M)) {
        const T = new Set(w);
        T.delete(M), $.getState().selectMultiple(Array.from(T));
      } else $.getState().selectMultiple([
        ...Array.from(w),
        M
      ]);
      else b(M);
    }, [
      w,
      b
    ]), Xe = c.useCallback(() => {
      S();
    }, [
      S
    ]), ae = c.useCallback(() => {
      l();
    }, [
      l
    ]), Q = c.useCallback((M, k) => {
      const T = v.current;
      if (!T || !de) return null;
      const N = T.getBoundingClientRect(), q = de.max_x - de.min_x, ne = de.max_y - de.min_y, pe = Math.max(q, ne) * 0.3, ye = (q + 2 * pe) / n, ve = (ne + 2 * pe) / n, Be = de.min_x - pe + (q + 2 * pe - ye) / 2 - s.x, ct = -de.max_y - pe + (ne + 2 * pe - ve) / 2 - s.y, lt = Be + (M - N.left) / N.width * ye, Ve = ct + (k - N.top) / N.height * ve;
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
      if (!W || !F) return;
      const k = Q(M.clientX, M.clientY);
      k && se(k);
    }, [
      W,
      F,
      Q
    ]), He = c.useCallback(() => {
      if (!W || !F || !X) return;
      const M = Math.min(F.x, X.x), k = Math.max(F.x, X.x), T = Math.min(F.y, X.y), N = Math.max(F.y, X.y), q = k - M, ne = N - T;
      if (q > 0.5 && ne > 0.5) {
        const pe = (M + k) / 2, ye = (T + N) / 2, ve = u.length, Be = String.fromCharCode(65 + ve % 26);
        f({
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
      f
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
        xe(true), O([]), Ce(null);
      };
      return window.addEventListener("vcad:start-section-view", M), () => window.removeEventListener("vcad:start-section-view", M);
    }, []);
    const ze = c.useCallback(() => {
      if (ge.length >= 2) {
        const M = (d == null ? void 0 : d.sections) ?? [], k = String.fromCharCode(65 + M.length % 26);
        p({
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
      xe(false), O([]), Ce(null);
    }, [
      ge,
      d,
      p,
      e
    ]), Ze = c.useCallback((M) => {
      const k = Q(M.clientX, M.clientY);
      k && O((T) => [
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
      k && Ce(k);
    }, [
      Q
    ]);
    if (c.useEffect(() => {
      if (!re) return;
      const M = (k) => {
        k.key === "Escape" ? (xe(false), O([]), Ce(null)) : k.key === "Enter" && ze();
      };
      return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
    }, [
      re,
      ze
    ]), !de || Ee.length === 0) return r.jsx("div", {
      className: "flex h-full w-full items-center justify-center",
      style: {
        backgroundColor: ee.background,
        color: ee.label
      },
      children: "No geometry to display"
    });
    const qe = de.max_x - de.min_x, j = de.max_y - de.min_y, g = Math.max(qe, j) * 0.3, z = (qe + 2 * g) / n, L = (j + 2 * g) / n, Y = de.min_x - g + (qe + 2 * g - z) / 2 - s.x, K = -de.max_y - g + (j + 2 * g - L) / 2 - s.y, ce = `${Y} ${K} ${z} ${L}`, H = Math.max(qe, j) * 5e-3 / Math.sqrt(n), Me = H * 0.6, Re = H * 0.4, ue = z * 0.015, G = Oe ? z * 0.3 / Oe.width : 0, Z = Oe ? Oe.height * G : 0, te = Oe ? Z + ue : 0, J = Se ? z * 0.3 / Se.width : 0;
    return r.jsxs("svg", {
      ref: v,
      className: "h-full w-full select-none",
      viewBox: ce,
      preserveAspectRatio: "xMidYMid meet",
      style: {
        backgroundColor: ee.background,
        cursor: W || re ? "crosshair" : P ? "grabbing" : "default"
      },
      onPointerDown: W || re ? void 0 : je,
      onPointerMove: W || re ? void 0 : Le,
      onPointerUp: W || re ? void 0 : B,
      onPointerLeave: W || re ? void 0 : B,
      onMouseDown: W ? we : void 0,
      onMouseMove: W ? he : re ? Te : void 0,
      onMouseUp: W ? He : void 0,
      onClick: W ? void 0 : re ? Ze : Xe,
      onDoubleClick: re ? ze : ae,
      children: [
        x && r.jsx("defs", {
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
        x && r.jsx("rect", {
          x: Y,
          y: K,
          width: z,
          height: L,
          fill: "url(#grid)"
        }),
        Ee.map(({ partId: M, view: k }) => {
          const T = w.has(M);
          return r.jsxs("g", {
            onClick: (N) => Ne(M, N),
            style: {
              cursor: "pointer"
            },
            children: [
              T && r.jsx("g", {
                children: k.edges.filter((N) => N.visibility === "Visible").map((N, q) => r.jsx("line", {
                  x1: N.start.x,
                  y1: -N.start.y,
                  x2: N.end.x,
                  y2: -N.end.y,
                  stroke: ee.selection,
                  strokeWidth: H * 3,
                  strokeLinecap: "round",
                  opacity: 0.3
                }, `sel-${q}`))
              }),
              k.edges.filter((N) => N.visibility === "Visible").map((N, q) => r.jsx("line", {
                x1: N.start.x,
                y1: -N.start.y,
                x2: N.end.x,
                y2: -N.end.y,
                stroke: T ? ee.selection : ee.edge,
                strokeWidth: H,
                strokeLinecap: "round"
              }, `v-${q}`)),
              t && k.edges.filter((N) => N.visibility === "Hidden").map((N, q) => r.jsx("line", {
                x1: N.start.x,
                y1: -N.start.y,
                x2: N.end.x,
                y2: -N.end.y,
                stroke: T ? ee.selection : ee.hiddenEdge,
                strokeWidth: Me,
                strokeDasharray: `${H * 3},${H * 2}`,
                strokeLinecap: "round",
                opacity: T ? 0.7 : 1
              }, `h-${q}`))
            ]
          }, M);
        }),
        Ie.map((M, k) => r.jsxs("g", {
          className: "dimension",
          pointerEvents: "none",
          children: [
            M.lines.map(([T, N], q) => r.jsx("line", {
              x1: T.x,
              y1: -T.y,
              x2: N.x,
              y2: -N.y,
              stroke: ee.dimension,
              strokeWidth: Re
            }, `l-${q}`)),
            M.arcs.map((T, N) => {
              const q = T.center.x + T.radius * Math.cos(T.start_angle), ne = -(T.center.y + T.radius * Math.sin(T.start_angle)), pe = T.center.x + T.radius * Math.cos(T.end_angle), ye = -(T.center.y + T.radius * Math.sin(T.end_angle)), ve = Math.abs(T.end_angle - T.start_angle) > Math.PI ? 1 : 0, Be = T.end_angle > T.start_angle ? 0 : 1;
              return r.jsx("path", {
                d: `M ${q} ${ne} A ${T.radius} ${T.radius} 0 ${ve} ${Be} ${pe} ${ye}`,
                fill: "none",
                stroke: ee.dimension,
                strokeWidth: Re
              }, `arc-${N}`);
            }),
            M.texts.map((T, N) => r.jsx("text", {
              x: T.position.x,
              y: -T.position.y,
              fontSize: T.height / Math.sqrt(n),
              fill: ee.dimension,
              textAnchor: "middle",
              dominantBaseline: "middle",
              fontFamily: "monospace",
              fontWeight: x ? "500" : "400",
              transform: `rotate(${-T.rotation * 180 / Math.PI}, ${T.position.x}, ${-T.position.y})`,
              children: T.text
            }, `t-${N}`)),
            M.arrows.map((T, N) => {
              const q = T.direction, ne = T.size / Math.sqrt(n), pe = T.tip.x, ye = -T.tip.y, ve = Math.PI / 6, Be = pe + ne * Math.cos(q + Math.PI - ve), ct = ye - ne * Math.sin(q + Math.PI - ve), lt = pe + ne * Math.cos(q + Math.PI + ve), Ve = ye - ne * Math.sin(q + Math.PI + ve);
              return r.jsx("polygon", {
                points: `${pe},${ye} ${Be},${ct} ${lt},${Ve}`,
                fill: ee.dimension
              }, `a-${N}`);
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
          const T = k[0], N = k[k.length - 1];
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
                N
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
        W && F && X && r.jsx("rect", {
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
          x: Y + z - 5 / n,
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
          const N = Math.min(z, L) * 0.25, q = N * 0.1, ne = Y + z - N - q, pe = K + L - N * (T + 1) - q * (T + 1) - te, ye = k.bounds.max_x - k.bounds.min_x, ve = k.bounds.max_y - k.bounds.min_y, Be = Math.min(N * 0.8 / (ye || 1), N * 0.8 / (ve || 1)), ct = ne + N / 2, lt = pe + N / 2;
          return r.jsxs("g", {
            children: [
              r.jsx("rect", {
                x: ne,
                y: pe,
                width: N,
                height: N,
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
          const N = Math.min(z, L) * 0.28, q = N * 0.1, ne = Y + q, pe = K + L - N * (T + 1) - q * (T + 1), ye = k.bounds.max_x - k.bounds.min_x, ve = k.bounds.max_y - k.bounds.min_y, Be = Math.min(N * 0.8 / (ye || 1), N * 0.8 / (ve || 1)), ct = (k.bounds.min_x + k.bounds.max_x) / 2, lt = (k.bounds.min_y + k.bounds.max_y) / 2, Ve = ne + N / 2, vt = pe + N / 2;
          return r.jsxs("g", {
            pointerEvents: "none",
            children: [
              r.jsx("rect", {
                x: ne,
                y: pe,
                width: N,
                height: N,
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
        Oe && yo(Oe, Y + z - Oe.width * G - ue, K + L - ue, G, ee.sheet, H * 0.5, "titleblock"),
        Se && yo(Se, Y + z - Se.width * J - ue, K + L - te - ue * 2, J, ee.sheet, H * 0.5, "bom")
      ]
    });
  }
  function ac() {
    const e = $((l) => l.followMode), t = $((l) => l.setFollowMode), o = $((l) => l.setFollowingParticipant), n = It((l) => l.participants), s = c.useCallback((l) => {
      t(l), o(l === "free" ? null : hs);
    }, [
      t,
      o
    ]), a = [];
    if (n.forEach((l) => {
      l.id !== En && a.push(l);
    }), a.length === 0) return null;
    const i = (l, u, f) => {
      const h = e === l;
      return r.jsx("button", {
        type: "button",
        onClick: () => s(l),
        title: f,
        className: Pn("px-2 py-0.5 text-[10px] font-medium rounded-sm transition-colors", h ? "bg-brand text-white" : "text-text-muted hover:text-text hover:bg-hover"),
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
  function cc() {
    const e = le((l) => l.active), t = oe((l) => l.document.schematic), o = Tt((l) => l.activeBoardNodeId), n = oe((l) => l.document), s = De((l) => l.scene), a = oe((l) => l.parts), i = o != null ? jn(n, o) : null;
    c.useEffect(() => {
      if (!e || !t) return;
      const l = setTimeout(async () => {
        const u = await xs(t), f = le.getState();
        f.setNetlist(u);
        const h = new Set(t.components.map((y) => y.ref)), m = new Set(((i == null ? void 0 : i.footprints) ?? []).map((y) => y.ref));
        f.setOrphanFootprints([
          ...m
        ].filter((y) => !h.has(y))), f.setUnplacedComponents([
          ...h
        ].filter((y) => !m.has(y))), o != null && oe.getState().syncSchematicToPcb(o, u, {
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
        const u = await Mo(i);
        u.status === "ok" && le.getState().setDrcViolations(u.value);
      }, 300);
      return () => clearTimeout(l);
    }, [
      i,
      e
    ]), c.useEffect(() => {
      if (!e || !t) return;
      const l = setTimeout(async () => {
        const u = await gs(t);
        u.status === "ok" && le.getState().setErcViolations(u.value);
      }, 300);
      return () => clearTimeout(l);
    }, [
      t,
      e
    ]), c.useEffect(() => {
      if (!e || !i) {
        le.getState().setInterferingFootprints([]);
        return;
      }
      const l = setTimeout(async () => {
        const u = await ys(i);
        le.getState().setComponentBodies(u);
        const f = [];
        s == null ? void 0 : s.parts.forEach((y, d) => {
          var _a2;
          const p = a[d];
          if (p && Mn(p)) return;
          const w = Hs((_a2 = y.mesh) == null ? void 0 : _a2.positions);
          w && f.push(w);
        });
        const h = o != null ? mn(a, o) : null;
        let m;
        if (h) {
          const y = So(n, h), d = new At().compose(new E(y.position.x, y.position.y, y.position.z), new st().setFromEuler(new Zt(y.rotationDeg.x * Math.PI / 180, y.rotationDeg.y * Math.PI / 180, y.rotationDeg.z * Math.PI / 180, "ZYX")), new E(y.scale.x, y.scale.y, y.scale.z));
          if (!d.equals(new At())) {
            const w = new E();
            m = (b, S, x) => (w.set(b, S, x).applyMatrix4(d), [
              w.x,
              w.y,
              w.z
            ]);
          }
        }
        le.getState().setInterferingFootprints(Ys(u, f, 0, m));
      }, 400);
      return () => clearTimeout(l);
    }, [
      i,
      e,
      s,
      a
    ]);
  }
  function lc() {
    const e = le((i) => i.active), t = oe((i) => i.document), o = Tt((i) => i.activeBoardNodeId), n = o != null ? jn(t, o) : null, s = c.useRef(null), a = c.useRef(null);
    c.useEffect(() => {
      if (!e || !n) return;
      const i = String(o);
      let l = false;
      const u = setTimeout(async () => {
        const f = await Mo(n);
        if (l || f.status !== "ok") return;
        const h = f.value, m = Xs(h), y = le.getState();
        if (a.current !== i) {
          a.current = i, s.current = m, y.clearReceipt();
          return;
        }
        const d = s.current;
        if (s.current = m, !d) return;
        const p = y.consumePendingMutation(), w = Us({
          tool: (p == null ? void 0 : p.tool) ?? "edit",
          args: (p == null ? void 0 : p.args) ?? {},
          before: d,
          after: m
        }, y.receiptEntries.length);
        w.verdict !== "no-op" && y.appendReceiptEntry(w);
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
  const uc = 80;
  function dc() {
    const e = le((l) => l.active), t = le((l) => l.simulating), o = le((l) => l.netlist), n = oe((l) => {
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
      const l = (_a2 = oe.getState().document.schematic) == null ? void 0 : _a2.components, u = le.getState().netlist;
      if (!l || !u) return;
      let f = false;
      const h = vs(l, u), m = le.getState();
      if (h.spec.devices.length === 0) {
        m.clearSim();
        return;
      }
      return m.setSimMaps(Object.fromEntries(h.netToNode), Object.fromEntries(h.refToDevice)), ws(JSON.stringify(h.spec)).then((y) => {
        if (f || !y) return;
        a.current = y;
        const d = () => {
          if (!(f || !a.current)) {
            try {
              const p = a.current.step(uc);
              le.getState().setSimObservation(p.nodeVoltages, p.deviceCurrents, p.rotorAngles);
            } catch (p) {
              console.warn("[circuit-sim] step failed", p);
              return;
            }
            i.current = requestAnimationFrame(d);
          }
        };
        i.current = requestAnimationFrame(d);
      }), () => {
        if (f = true, i.current != null && cancelAnimationFrame(i.current), i.current = null, a.current) {
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
  const fc = c.lazy(() => yt(() => import("./SchematicView-aCXG3dBE.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([5,1,2,3,0,4,6,7,8,9,10,11,12,13])).then((e) => ({
    default: e.SchematicView
  }))), pc = c.lazy(() => yt(() => import("./ElectronicsViewToggle-BempfYr1.js"), __vite__mapDeps([14,2,3,0,1,4])).then((e) => ({
    default: e.ElectronicsViewToggle
  }))), mc = c.lazy(() => yt(() => import("./LengthTunePanel-BFXMfnJH.js"), __vite__mapDeps([15,2,3,0,1,4])).then((e) => ({
    default: e.LengthTunePanel
  }))), hc = c.lazy(() => yt(() => import("./ReceiptPanel-CMptmk7h.js"), __vite__mapDeps([16,2,3,0,1,4])).then((e) => ({
    default: e.ReceiptPanel
  }))), xc = c.lazy(() => yt(() => import("./PcbGettingStarted-CQTFPTbB.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([17,1,2,3,0,4,6,7,8,9,10,11,12,13])).then((e) => ({
    default: e.PcbGettingStarted
  }))), gc = "transparent", yc = "transparent", Ht = 5;
  function vc({ containerRef: e }) {
    const { camera: t, size: o } = Pe(), n = De((s) => s.scene);
    return c.useEffect(() => {
      const s = e.current;
      if (!s) return;
      const a = s;
      let i = false, l = {
        x: 0,
        y: 0
      }, u = false, f = null;
      function h(d) {
        d.button === 0 && d.pointerType === "mouse" && (u = d.shiftKey, l = {
          x: d.clientX,
          y: d.clientY
        }, i = true, f = document.createElement("div"), f.className = "pointer-events-none absolute z-20 border-2 border-brand bg-brand/10", f.style.left = "0", f.style.top = "0", f.style.width = "0", f.style.height = "0", f.style.display = "none", a.appendChild(f));
      }
      function m(d) {
        if (!i || !f) return;
        const p = a.getBoundingClientRect(), w = Math.min(l.x, d.clientX) - p.left, b = Math.min(l.y, d.clientY) - p.top, S = Math.abs(d.clientX - l.x), x = Math.abs(d.clientY - l.y);
        (S >= Ht || x >= Ht) && (f.style.display = "block", f.style.left = `${w}px`, f.style.top = `${b}px`, f.style.width = `${S}px`, f.style.height = `${x}px`);
      }
      function y(d) {
        if (!i) return;
        i = false, f && (f.remove(), f = null);
        const p = Math.abs(d.clientX - l.x), w = Math.abs(d.clientY - l.y);
        if (p < Ht && w < Ht) return;
        const b = De.getState().scene;
        if (!b) return;
        const S = oe.getState().parts, x = $.getState().selectedPartIds, v = a.getBoundingClientRect(), P = Math.min(l.x, d.clientX) - v.left, C = Math.max(l.x, d.clientX) - v.left, R = Math.min(l.y, d.clientY) - v.top, I = Math.max(l.y, d.clientY) - v.top, A = [];
        if (S.forEach((V, W) => {
          const D = b.parts[W];
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
          let re = 1 / 0, xe = -1 / 0, ge = 1 / 0, O = -1 / 0;
          for (const ie of se) {
            ie.project(t);
            const Ce = (ie.x + 1) / 2 * o.width, ee = (1 - ie.y) / 2 * o.height;
            re = Math.min(re, Ce), xe = Math.max(xe, Ce), ge = Math.min(ge, ee), O = Math.max(O, ee);
          }
          xe >= P && re <= C && O >= R && ge <= I && A.push(V.id);
        }), u) {
          const V = /* @__PURE__ */ new Set([
            ...x,
            ...A
          ]);
          $.getState().selectMultiple(Array.from(V));
        } else $.getState().selectMultiple(A);
      }
      return a.addEventListener("pointerdown", h), window.addEventListener("pointermove", m), window.addEventListener("pointerup", y), () => {
        a.removeEventListener("pointerdown", h), window.removeEventListener("pointermove", m), window.removeEventListener("pointerup", y), f && f.remove();
      };
    }, [
      t,
      o,
      e,
      n
    ]), null;
  }
  function wc() {
    const e = c.useRef(null), t = $((P) => P.clearSelection), o = gt((P) => P.selectIssue), n = $((P) => P.hoveredItem), s = $((P) => P.isGizmoHovered), a = $((P) => P.isDraggingGizmo), i = $((P) => P.renderMode), l = $((P) => P.raytraceAvailable), { isDark: u } = at(), f = hn((P) => P.viewMode), h = le((P) => P.active), m = le((P) => P.layout), y = Tt((P) => P.activeBoardNodeId) != null, d = _t(), [p, w] = c.useState(0), b = c.useRef(0), S = c.useRef(false), x = c.useCallback(() => {
      b.current >= 3 || (b.current += 1, S.current = false, w((P) => P + 1));
    }, []), v = c.useCallback(() => {
      S.current = true, performance.mark("canvas-ready");
    }, []);
    return c.useEffect(() => (window.addEventListener("vcad:gl-stuck-lost", x), () => window.removeEventListener("vcad:gl-stuck-lost", x)), [
      x
    ]), c.useEffect(() => {
      const P = setTimeout(() => {
        S.current || x();
      }, 2500), C = setTimeout(() => {
        b.current = 0;
      }, 12e3);
      return () => {
        clearTimeout(P), clearTimeout(C);
      };
    }, [
      p,
      x
    ]), cc(), lc(), dc(), c.useEffect(() => {
      const P = e.current;
      if (!P) return;
      const C = (V) => er(V.clientX, V.clientY), R = (V) => tr(V.clientX, V.clientY), I = () => nr(), A = (V) => {
        V.preventDefault();
      };
      return P.addEventListener("pointerdown", C), window.addEventListener("pointermove", R), window.addEventListener("pointerup", I), window.addEventListener("pointercancel", I), P.addEventListener("contextmenu", A), () => {
        P.removeEventListener("pointerdown", C), window.removeEventListener("pointermove", R), window.removeEventListener("pointerup", I), window.removeEventListener("pointercancel", I), P.removeEventListener("contextmenu", A);
      };
    }, []), c.useEffect(() => {
      const P = e.current;
      P && (P.style.cursor = n && !s && !a ? "pointer" : "");
    }, [
      n,
      s,
      a
    ]), f === "2d" ? r.jsx("div", {
      className: "absolute inset-0 overflow-hidden",
      style: {
        backgroundColor: u ? "#0a0a0a" : "#ffffff"
      },
      children: r.jsx(ic, {})
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
        r.jsx(Xo, {
          frameloop: d ? "always" : "demand",
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
          onPointerMissed: (P) => {
            if (Jt()) return;
            const C = $.getState();
            C.isDraggingGizmo || C.isGizmoHovered || P.metaKey || P.shiftKey || (h || t(), o(null));
          },
          onCreated: v,
          shadows: "soft",
          gl: {
            alpha: true,
            antialias: true,
            logarithmicDepthBuffer: true,
            toneMapping: Po,
            toneMappingExposure: 1,
            outputColorSpace: gn,
            preserveDrawingBuffer: true
          },
          style: {
            background: "transparent"
          },
          children: r.jsxs(bs, {
            store: Ss,
            children: [
              r.jsx(rc, {
                mode: "3d",
                pcbEditFocus: y
              }),
              !h && r.jsx(vc, {
                containerRef: e
              })
            ]
          })
        }, p),
        h && r.jsxs(r.Fragment, {
          children: [
            m === "schematic" && r.jsx(c.Suspense, {
              fallback: null,
              children: r.jsx(fc, {})
            }),
            r.jsx(c.Suspense, {
              fallback: null,
              children: r.jsx(mc, {})
            }),
            r.jsx(c.Suspense, {
              fallback: null,
              children: r.jsx(hc, {})
            }),
            r.jsx(c.Suspense, {
              fallback: null,
              children: r.jsx(xc, {})
            }),
            r.jsx(c.Suspense, {
              fallback: null,
              children: r.jsx(pc, {})
            })
          ]
        }),
        !h && !d && i === "raytrace" && l && r.jsx(yi, {}),
        r.jsx(rr, {}),
        !h && r.jsx("div", {
          className: "pointer-events-none absolute top-3 right-3 z-10 flex items-center gap-2",
          children: r.jsx(ac, {})
        })
      ]
    });
  }
  Dc = Object.freeze(Object.defineProperty({
    __proto__: null,
    BG_DARK: gc,
    BG_LIGHT: yc,
    Viewport: wc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Dc as V,
  __tla,
  at as u
};
