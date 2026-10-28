const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BkIlMx7Q.js","assets/three-drei-CTUAgrap.js","assets/three-tnxpQXqG.js","assets/three-fiber-DvYcInOp.js","assets/index-CaVsa28i.css","assets/SchematicView-DgleMBip.js","assets/sub-feature-geometry-tgU-o6Qd.js","assets/three-postprocessing-DulYNr-h.js","assets/index-ClRGfgpL.js","assets/camera-settings-store-Dvlp4GzI.js","assets/timeline-sample-Bp0BrK2T.js","assets/xr-collab-B0xsIXjx.js","assets/pcb-interference-D-jt2V7v.js","assets/ElectronicsViewToggle-0VByP-jR.js","assets/LengthTunePanel-CcyCfCUu.js","assets/ReceiptPanel-3F6s4lzY.js","assets/PcbGettingStarted-f2T0YXJW.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { G as Ro, L as Ae, a as xn, b as Ko, H as it, _ as yt, T as Zo, c as Jo, P as Qo, C as es, O as ts, d as ns, e as os, E as Fn, f as wt } from "./three-drei-CTUAgrap.js";
import { b as c, k as i, d as Pe, f as Qe, C as ss } from "./three-fiber-DvYcInOp.js";
import { i as $, h as oe, S as ko, _ as rs, j as ke, cN as kt, a7 as Rn, a3 as ue, d3 as is, d2 as as, aL as cs, dk as Ct, bL as ls, dl as us, dm as ds, dn as fs, V as De, dp as zt, dq as kn, dr as ps, bu as _n, cR as ms, ds as xt, c as zn, dt as Ke, du as In, dv as zo, d7 as Ye, dw as Ln, dx as hs, bO as Ot, dy as tt, ap as gs, dz as xs, dA as Io, dB as Ao, dC as An, dD as ys, dE as vs, a5 as Tt, a6 as Dn, a4 as ws, ah as bs, dF as Ft, dG as Rt, cc as Ss, dH as Ms, b as Es, a8 as yn, a9 as Do, dI as dt, dJ as Ps, d9 as vn, dK as js, dL as Cs, dM as Rs, dN as ks, dO as zs, dP as Is, dQ as To, dR as As, dS as Ds, dT as Ts, dU as Fs, dV as _s, dW as Ls, __tla as __tla_0 } from "./index-BkIlMx7Q.js";
import { j as ft, k as $e, D as Xe, l as Xt, h as We, aj as Os, E as Jt, a as E, a5 as rt, F as It, v as Fo, a1 as Ns, af as Nt, b5 as On, x as Bs, q as Vs, s as $s, M as At, Q as st, r as Ws, b6 as Gs, b7 as Hs, b8 as Ys, b9 as Nn, R as wn, V as Bn, z as Us, P as en, K as Xs, H as Vn, an as qs, e as bn, A as _o } from "./three-tnxpQXqG.js";
import { p as $n, f as Lo, b as Ks, g as Oo, a as No } from "./sub-feature-geometry-tgU-o6Qd.js";
import { a as Zs, q as Js, d as Qs } from "./three-postprocessing-DulYNr-h.js";
import { h as er, g as tr, r as tn } from "./index-ClRGfgpL.js";
import { u as Yt, a as nr, g as or } from "./camera-settings-store-Dvlp4GzI.js";
import { s as sr } from "./timeline-sample-Bp0BrK2T.js";
import { j as rr } from "./xr-collab-B0xsIXjx.js";
import { a as ir, i as ar } from "./pcb-interference-D-jt2V7v.js";
let tl, at;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function cr(e) {
    let t = 2166136261, o = 2654435769, n = 3735928559, s = 3405691582;
    for (let r = 0; r < e.length; r++) {
      const l = e.charCodeAt(r);
      t = Math.imul(t ^ l, 16777619), o = Math.imul(o ^ l, 2246822507), n = Math.imul(n ^ l, 3266489909), s = Math.imul(s ^ l, 668265263);
    }
    const a = (r) => (r >>> 0).toString(16).padStart(8, "0");
    return a(t) + a(o) + a(n) + a(s);
  }
  function lr(e) {
    return e.replace(/(:\s*)?-?[\d.]+\s*mm\b.*$/i, "").replace(/\bbelow minimum\b.*$/i, "").trim();
  }
  function ur(e) {
    const t = e.message;
    if (/^\s*Short\b/i.test(t) || /connected by copper/i.test(t)) return {
      cause: "routing"
    };
    if (/Unconnected net/i.test(t)) return {
      cause: "connectivity"
    };
    if (/Unstitched pad/i.test(t)) return {
      cause: "connectivity"
    };
    if (/Same-net bypass/i.test(t)) return {
      cause: "routing"
    };
    const o = [
      ...t.matchAll(/pad\s+([A-Za-z]+\d+)\.\w+/g)
    ].map((s) => s[1]);
    if (o.length >= 2) {
      const s = [
        o[0],
        o[1]
      ];
      return {
        cause: o[0] === o[1] ? "footprint" : "placement",
        refs: s
      };
    }
    const n = /\bon\s+([A-Za-z]+\d+)\b/.exec(t);
    return n && (/\bdrill\b/i.test(t) || /annular ring/i.test(t)) ? {
      cause: "footprint",
      refs: [
        n[1],
        n[1]
      ]
    } : /\btrace\b/i.test(t) ? {
      cause: "routing"
    } : /Hole-to-hole/i.test(t) ? {
      cause: "via"
    } : {
      cause: "unknown"
    };
  }
  const qt = (e, t = 2) => {
    const o = 10 ** t;
    return Math.round(e * o) / o;
  };
  function dr(e) {
    const t = e.position ? qt(e.position.x, 2) : "?", o = e.position ? qt(e.position.y, 2) : "?";
    return `${e.rule}|${t}|${o}|${lr(e.message)}`;
  }
  function fr(e, t) {
    return t === "fixed" ? "credit" : t === "introduced" ? "blame" : e === "connectivity" || e === "routing" ? "carried-over" : "pre-existing";
  }
  function Wn(e) {
    const t = /* @__PURE__ */ new Map();
    for (const o of e) {
      const n = dr(o), s = t.get(n);
      if (s) s.count++;
      else {
        const { cause: a, refs: r } = ur(o);
        t.set(n, {
          rep: o,
          cause: a,
          refs: r,
          count: 1
        });
      }
    }
    return t;
  }
  function nn(e, t, o) {
    const n = e.cause;
    return {
      rule: e.rep.rule,
      cause: n,
      status: t,
      blame: fr(n, t),
      count: o,
      message: e.rep.message,
      position: e.rep.position,
      refs: e.refs
    };
  }
  function Gn(e) {
    var _a2;
    return e.details && e.details.length === e.violations ? {
      list: e.details,
      full: true
    } : e.details ? {
      list: e.details,
      full: false
    } : {
      list: e.sample ?? [],
      full: (((_a2 = e.sample) == null ? void 0 : _a2.length) ?? 0) >= e.violations
    };
  }
  function pr(e, t) {
    const o = {};
    for (const n of /* @__PURE__ */ new Set([
      ...Object.keys(e),
      ...Object.keys(t)
    ])) {
      const s = (t[n] ?? 0) - (e[n] ?? 0);
      s !== 0 && (o[n] = s);
    }
    return o;
  }
  function Sn(e) {
    if (Array.isArray(e)) return e.map(Sn);
    if (e && typeof e == "object") {
      const t = {};
      for (const o of Object.keys(e).sort()) t[o] = Sn(e[o]);
      return t;
    }
    return e;
  }
  function mr(e) {
    const t = (e.details ?? e.sample ?? []).map((n) => {
      const s = n.position ? qt(n.position.x, 4) : "?", a = n.position ? qt(n.position.y, 4) : "?";
      return `${n.rule}|${n.severity}|${s}|${a}|${n.message}`;
    }).sort(), o = {
      violations: e.violations,
      errors: e.errors,
      warnings: e.warnings,
      byRule: e.byRule,
      items: t
    };
    return cr(JSON.stringify(Sn(o)));
  }
  function hr(e) {
    const t = Object.values(e).some((n) => n > 0), o = Object.values(e).some((n) => n < 0);
    return !t && !o ? "no-op" : t && o ? "improved-with-regressions" : t ? "regression" : "improved";
  }
  function gr(e, t) {
    const o = Gn(e.before), n = Gn(e.after), s = Wn(o.list), a = Wn(n.list), r = [], l = [], d = [], p = /* @__PURE__ */ new Set([
      ...s.keys(),
      ...a.keys()
    ]);
    for (const b of p) {
      const P = s.get(b), C = a.get(b), R = (P == null ? void 0 : P.count) ?? 0, I = (C == null ? void 0 : C.count) ?? 0, _ = Math.min(R, I);
      _ > 0 && d.push(nn(C ?? P, "persisted", _)), I > R && r.push(nn(C, "introduced", I - R)), R > I && l.push(nn(P, "fixed", R - I));
    }
    const g = (b, P) => b.filter(P).reduce((C, R) => C + R.count, 0), u = pr(e.before.byRule, e.after.byRule), x = e.after.violations - e.before.violations, f = l.reduce((b, P) => b + P.count, 0), y = r.reduce((b, P) => b + P.count, 0), h = g(d, (b) => b.blame === "pre-existing"), j = Math.max(0, u.Short ?? 0), S = hr(u), m = S === "regression" || S === "improved-with-regressions", w = (b) => (/^\s*Short\b/i.test(b.message) ? 0 : b.cause === "routing" ? 1 : 2) * 1e6 - b.count;
    return r.sort((b, P) => w(b) - w(P)), l.sort((b, P) => P.count - b.count), d.sort((b, P) => P.count - b.count), {
      index: t,
      tool: e.tool,
      args: e.args,
      before: {
        violations: e.before.violations,
        errors: e.before.errors,
        byRule: e.before.byRule
      },
      after: {
        violations: e.after.violations,
        errors: e.after.errors,
        byRule: e.after.byRule
      },
      deltaByRule: u,
      deltaTotal: x,
      introduced: r,
      fixed: l,
      persisted: d,
      tally: {
        credited: f,
        blamed: y,
        preExisting: h,
        shortsIntroduced: j
      },
      regression: m,
      verdict: S,
      coverage: o.full && n.full ? "full" : "partial",
      fingerprint: mr(e.after)
    };
  }
  function xr(e) {
    const t = {};
    let o = 0, n = 0;
    for (const s of e) t[s.rule] = (t[s.rule] ?? 0) + 1, s.severity === "Error" ? o++ : s.severity === "Warning" && n++;
    return {
      violations: e.length,
      errors: o,
      warnings: n,
      byRule: t,
      details: e,
      sample: e,
      sampleCapped: false
    };
  }
  const Mn = typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function yr(e) {
    return Mn == null ? void 0 : Mn.addEventListener("change", e), () => Mn == null ? void 0 : Mn.removeEventListener("change", e);
  }
  function vr() {
    return (Mn == null ? void 0 : Mn.matches) ?? true;
  }
  at = function() {
    const e = $((s) => s.theme), t = $((s) => s.toggleTheme), o = c.useSyncExternalStore(yr, vr, () => true);
    return {
      theme: e,
      toggleTheme: t,
      isDark: e === "system" ? o : e === "dark"
    };
  };
  function wr() {
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
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx(Ro, {
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
              points: s,
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
  const br = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, Hn = br ? 8 : 4, Sr = Hn * Hn, nt = {
    startX: 0,
    startY: 0,
    down: false,
    wasDrag: false
  };
  function Mr(e, t) {
    nt.startX = e, nt.startY = t, nt.down = true, nt.wasDrag = false;
  }
  function Er(e, t) {
    if (!nt.down || nt.wasDrag) return;
    const o = e - nt.startX, n = t - nt.startY;
    o * o + n * n > Sr && (nt.wasDrag = true);
  }
  function Pr() {
    nt.down = false;
  }
  function Qt() {
    return nt.wasDrag;
  }
  const ot = ko((e) => ({
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
  })), jr = [
    "Unknown",
    "Plane",
    "Cylinder",
    "Sphere",
    "Cone",
    "Bilinear",
    "Torus",
    "BSpline",
    "FanFill"
  ], Bo = [
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
  function Cr(e, t) {
    const { positions: o, indices: n, faceKinds: s } = e;
    if (t < 0 || t * 3 + 2 >= n.length) return null;
    const a = n[t * 3], r = n[t * 3 + 1], l = n[t * 3 + 2], d = [
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
    ], u = [
      (d[0] + p[0] + g[0]) / 3,
      (d[1] + p[1] + g[1]) / 3,
      (d[2] + p[2] + g[2]) / 3
    ], x = p[0] - d[0], f = p[1] - d[1], y = p[2] - d[2], h = g[0] - d[0], j = g[1] - d[1], S = g[2] - d[2];
    let m = f * S - y * j, w = y * h - x * S, b = x * j - f * h;
    const P = Math.sqrt(m * m + w * w + b * b);
    P > 0 && (m /= P, w /= P, b /= P);
    let C = 0, R = 0, I = 0;
    const _ = o.length / 3;
    for (let ge = 0; ge < _; ge++) C += o[ge * 3], R += o[ge * 3 + 1], I += o[ge * 3 + 2];
    _ > 0 && (C /= _, R /= _, I /= _);
    const W = u[0] - C, D = u[1] - R, L = u[2] - I, F = Math.sqrt(W * W + D * D + L * L) || 1, U = (m * W + w * D + b * L) / F, se = (s == null ? void 0 : s[t]) ?? 0, re = jr[se] ?? `kind(${se})`;
    return {
      triangleIndex: t,
      faceKind: se,
      faceKindName: re,
      vertexIds: [
        a,
        r,
        l
      ],
      positions: [
        d,
        p,
        g
      ],
      centroid: u,
      ccwNormal: [
        m,
        w,
        b
      ],
      outwardDot: U
    };
  }
  function Rr() {
    const e = ot((r) => r.currentInspection), t = ot((r) => r.setCurrentInspection);
    if (!ot((r) => r.inspectTriangles) || !e) return null;
    const n = Bo[e.faceKind] ?? "#888", { outwardDot: s } = e, a = s > 0.5 ? "outward \u2713" : s < -0.5 ? "INWARD \u2717" : "sideways";
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
            e.vertexIds.map((r) => `#${r}`).join("  ")
          ]
        }),
        e.positions.map((r, l) => i.jsxs("div", {
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
  function kr() {
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
    const o = Bo[e.faceKind] ?? "#ffffff";
    return i.jsx("mesh", {
      geometry: t,
      renderOrder: 999,
      children: i.jsx("meshBasicMaterial", {
        color: o,
        transparent: true,
        opacity: 0.5,
        depthTest: false,
        side: Xe
      })
    });
  }
  const Yn = new We(1, 0.45, 0.1), Un = new We(0.62, 0.32, 0.1), zr = new We(54527), on = Math.PI / 180, Vo = 0.01;
  function $o({ color: e, vertexColors: t, emissive: o, emissiveIntensity: n, metalness: s, roughness: a, envMapIntensity: r = 1, side: l = Xe, transmission: d, ior: p, thickness: g, attenuationDistance: u, attenuationColor: x, clearcoat: f, clearcoatRoughness: y, transparent: h, opacity: j, depthWrite: S }) {
    if (d !== void 0 && d > 0 || f !== void 0 && f > 0) {
      const w = x ? new We(x[0], x[1], x[2]) : void 0;
      return i.jsx("meshPhysicalMaterial", {
        color: e,
        vertexColors: t,
        emissive: o,
        emissiveIntensity: n,
        metalness: s,
        roughness: a,
        envMapIntensity: r,
        flatShading: false,
        side: l,
        transmission: d ?? 0,
        ior: p ?? 1.5,
        thickness: g ?? 0.5,
        attenuationDistance: u ?? 1 / 0,
        attenuationColor: w,
        clearcoat: f ?? 0,
        clearcoatRoughness: y ?? 0,
        transparent: h || (d ?? 0) > 0,
        opacity: j ?? 1,
        depthWrite: S ?? true
      });
    }
    return i.jsx("meshStandardMaterial", {
      color: e,
      vertexColors: t,
      emissive: o,
      emissiveIntensity: n,
      metalness: s,
      roughness: a,
      envMapIntensity: r,
      flatShading: false,
      side: l,
      transparent: h,
      opacity: j ?? 1,
      depthWrite: S ?? true
    });
  }
  function Ir(e, t) {
    const o = e.indices, n = e.positions, s = o[t * 3], a = o[t * 3 + 1], r = o[t * 3 + 2], l = new E(n[s * 3], n[s * 3 + 1], n[s * 3 + 2]), d = new E(n[a * 3], n[a * 3 + 1], n[a * 3 + 2]), p = new E(n[r * 3], n[r * 3 + 1], n[r * 3 + 2]), g = d.clone().sub(l), u = p.clone().sub(l), x = g.cross(u).normalize(), f = [], y = o.length / 3;
    for (let h = 0; h < y; h++) {
      const j = o[h * 3], S = o[h * 3 + 1], m = o[h * 3 + 2], w = new E(n[j * 3], n[j * 3 + 1], n[j * 3 + 2]), b = new E(n[S * 3], n[S * 3 + 1], n[S * 3 + 2]), P = new E(n[m * 3], n[m * 3 + 1], n[m * 3 + 2]), C = b.clone().sub(w), R = P.clone().sub(w);
      C.cross(R).normalize().dot(x) > 1 - Vo && f.push(h);
    }
    return f;
  }
  function Ar(e, t) {
    const o = new ft(), n = [];
    for (const s of t) {
      const a = e.indices[s * 3], r = e.indices[s * 3 + 1], l = e.indices[s * 3 + 2];
      n.push(e.positions[a * 3], e.positions[a * 3 + 1], e.positions[a * 3 + 2], e.positions[r * 3], e.positions[r * 3 + 1], e.positions[r * 3 + 2], e.positions[l * 3], e.positions[l * 3 + 1], e.positions[l * 3 + 2]);
    }
    return o.setAttribute("position", new It(n, 3)), o.computeVertexNormals(), o;
  }
  function Xn(e, t, o) {
    const n = e.indices[t * 3], s = e.indices[t * 3 + 1], a = e.indices[t * 3 + 2], r = new E(e.positions[n * 3], e.positions[n * 3 + 1], e.positions[n * 3 + 2]), l = new E(e.positions[s * 3], e.positions[s * 3 + 1], e.positions[s * 3 + 2]), d = new E(e.positions[a * 3], e.positions[a * 3 + 1], e.positions[a * 3 + 2]), p = l.clone().sub(r).cross(d.clone().sub(r)).normalize(), g = p.dot(r), u = 0.01, x = /* @__PURE__ */ new Map(), f = e.indices.length / 3;
    for (let b = 0; b < f; b++) {
      const P = e.indices[b * 3], C = e.indices[b * 3 + 1], R = e.indices[b * 3 + 2], I = new E(e.positions[P * 3], e.positions[P * 3 + 1], e.positions[P * 3 + 2]), _ = new E(e.positions[C * 3], e.positions[C * 3 + 1], e.positions[C * 3 + 2]), W = new E(e.positions[R * 3], e.positions[R * 3 + 1], e.positions[R * 3 + 2]);
      if (!(_.clone().sub(I).cross(W.clone().sub(I)).normalize().dot(p) < 1 - Vo) && !(Math.abs(p.dot(I) - g) > u)) for (const L of [
        I,
        _,
        W
      ]) {
        const F = `${L.x.toFixed(4)},${L.y.toFixed(4)},${L.z.toFixed(4)}`;
        x.has(F) || x.set(F, {
          x: L.x,
          y: L.y,
          z: L.z
        });
      }
    }
    const y = Array.from(x.values());
    let h = 0, j = 0, S = 0;
    for (const b of y) h += b.x, j += b.y, S += b.z;
    const m = Math.max(y.length, 1), w = {
      x: h / m,
      y: j / m,
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
      centroid: w,
      vertices: y
    };
  }
  function Dr({ mesh: e, materialKey: t }) {
    const o = c.useRef(null), n = c.useRef(null), [s, a] = c.useState(false), r = $((f) => f.showWireframe), l = $((f) => f.isOrbiting), d = Pe((f) => f.invalidate), p = oe((f) => f.document.materials), g = c.useMemo(() => {
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
    ]), u = c.useMemo(() => g ? new We(g.color[0], g.color[1], g.color[2]) : new We(0.55, 0.55, 0.55), [
      g
    ]);
    c.useEffect(() => {
      a(false);
      const f = o.current;
      if (!f) return;
      let y = false;
      return (async () => {
        const { getKernelWasmSync: h } = await yt(async () => {
          const { getKernelWasmSync: C } = await import("./index-BkIlMx7Q.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }).then((R) => R.eo);
          return {
            getKernelWasmSync: C
          };
        }, __vite__mapDeps([0,1,2,3,4])), j = h();
        if (y) return;
        const S = new Float32Array(e.positions), m = new Uint32Array(e.indices);
        let w, b, P;
        if (j == null ? void 0 : j.renderBakeMesh) {
          const C = JSON.parse(j.renderBakeMesh(JSON.stringify({
            positions: Array.from(S),
            indices: Array.from(m)
          })));
          w = new Float32Array(C.positions), b = new Uint32Array(C.indices), P = new Float32Array(C.normals);
        } else w = S, b = m, P = new Float32Array(0);
        f.setAttribute("position", new $e(w, 3)), f.setIndex(new $e(b, 1)), P.length === w.length ? f.setAttribute("normal", new $e(P, 3)) : f.computeVertexNormals(), f.computeBoundingSphere(), f.computeBoundingBox(), a(true), d();
      })(), () => {
        y = true, f.dispose();
      };
    }, [
      e,
      d
    ]);
    const x = c.useRef(null);
    return c.useEffect(() => {
      const f = n.current;
      f && (x.current || (x.current = f.raycast.bind(f)), l ? f.raycast = () => {
      } : f.raycast = x.current);
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
        i.jsx($o, {
          color: u,
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
        r && s && i.jsx(xn, {
          threshold: 15,
          color: "#666"
        })
      ]
    });
  }
  const qn = c.memo(function({ partInfo: t, mesh: o, materialKey: n, selected: s, transform: a, selectionId: r, ghosted: l = false }) {
    const d = c.useRef(null), p = c.useRef(null), [g, u] = c.useState(false), x = $((k) => k.select), f = $((k) => k.toggleSelect), y = $((k) => k.selectItem), h = $((k) => k.setHoveredItem), j = $((k) => k.selectionFilter), S = $((k) => k.showWireframe), m = $((k) => k.hoveredPartId), w = $((k) => k.setHoveredPartId), b = Pe((k) => k.camera), P = Pe((k) => k.size), C = Pe((k) => k.invalidate), R = oe((k) => k.document.materials), I = oe((k) => k.renamePart), _ = rs((k) => {
      var _a2;
      return ((_a2 = k.fieldOverlay) == null ? void 0 : _a2.partId) === t.id ? k.fieldOverlay.colors : null;
    }), W = ke((k) => k.faceSelectionMode), D = ke((k) => k.hoveredFace), L = ke((k) => k.setHoveredFace), F = ke((k) => k.selectFace), U = $((k) => k.isOrbiting), se = $((k) => k.isDraggingGizmo), re = $((k) => k.isGizmoHovered), ge = $((k) => k.captureMode), xe = s && !ge, B = r ?? t.id, ie = $((k) => k.hoveredItem), je = m === B || ie != null && ie.kind !== "segment" && ie.kind !== "constraint" && (ie.kind === "part" ? ie.id === B : ie.partId === t.id), ee = W && (D == null ? void 0 : D.partId) === t.id, Ee = c.useMemo(() => {
      if (U || !ee || (D == null ? void 0 : D.faceIndex) == null) return null;
      const k = Ir(o, D.faceIndex);
      return Ar(o, k);
    }, [
      U,
      ee,
      D == null ? void 0 : D.faceIndex,
      o
    ]);
    c.useEffect(() => () => {
      Ee == null ? void 0 : Ee.dispose();
    }, [
      Ee
    ]);
    const [de, be] = c.useState(false), [_e, Ge] = c.useState(t.name), Ne = c.useRef(null), Se = $((k) => k.previewMaterial), ze = c.useMemo(() => (Se == null ? void 0 : Se.partId) === t.id ? Se.materialKey : n, [
      Se,
      t.id,
      n
    ]), me = c.useMemo(() => {
      const k = (v) => v ? {
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
        if (R[v]) return R[v];
        const A = k(kt(v));
        if (A) return A;
      }
      return R[n] ? R[n] : k(kt(n));
    }, [
      R,
      n,
      Se,
      t.id
    ]), Ce = c.useMemo(() => er(ze) ? tr(ze) : null, [
      ze
    ]), Le = c.useMemo(() => Ce ? new Xt({
      vertexShader: Ce.vertexShader,
      fragmentShader: Ce.fragmentShader,
      uniforms: Ce.uniforms,
      side: Xe
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
    ]), Oe = !l && !ge && (xe || je && !W), Ue = c.useMemo(() => {
      var _a2;
      if (!g) return false;
      const k = d.current;
      if (!k) return false;
      const v = new Os(k, 15), A = ((_a2 = v.attributes.position) == null ? void 0 : _a2.count) ?? 0;
      return v.dispose(), A === 0;
    }, [
      g,
      o
    ]);
    c.useEffect(() => {
      Ge(t.name);
    }, [
      t.name,
      s
    ]), c.useEffect(() => {
      var _a2;
      de && ((_a2 = Ne.current) == null ? void 0 : _a2.select());
    }, [
      de
    ]), c.useEffect(() => {
      u(false);
      const k = d.current;
      if (!k) return;
      const v = new Float32Array(o.positions), A = new Uint32Array(o.indices);
      if (k.setAttribute("position", new $e(v, 3)), k.setIndex(new $e(A, 1)), o.normals && o.normals.length === v.length) {
        const O = new Float32Array(o.normals);
        k.setAttribute("normal", new $e(O, 3));
      } else console.warn("[SceneMesh] kernel emitted mesh without normals \u2014 rebuild @vcad/kernel-wasm; falling back to computed normals"), k.computeVertexNormals();
      if (_ && _.length === v.length) k.setAttribute("color", new $e(_, 3));
      else if (o.colors && o.colors.length === v.length) {
        const O = new Float32Array(o.colors);
        k.setAttribute("color", new $e(O, 3));
      } else k.deleteAttribute("color");
      return k.computeBoundingSphere(), k.computeBoundingBox(), u(true), C(), () => {
        k.dispose();
      };
    }, [
      o,
      t.name,
      C,
      _
    ]), c.useEffect(() => {
      const k = p.current;
      if (k) {
        if (a) {
          k.position.set(a.translation.x, a.translation.y, a.translation.z);
          const v = new Jt(a.rotation.x * on, a.rotation.y * on, a.rotation.z * on, "ZYX");
          k.quaternion.setFromEuler(v), k.scale.set(a.scale.x, a.scale.y, a.scale.z);
        } else k.position.set(0, 0, 0), k.quaternion.identity(), k.scale.set(1, 1, 1);
        C();
      }
    }, [
      a,
      C
    ]);
    const ae = c.useMemo(() => {
      if (!o.positions.length) return new E();
      const k = new rt(), v = new E();
      for (let O = 0; O < o.positions.length; O += 3) v.set(o.positions[O], o.positions[O + 1], o.positions[O + 2]), k.expandByPoint(v);
      const A = new E();
      return k.getCenter(A), A.z = k.max.z + 4, A;
    }, [
      o.positions
    ]), Q = c.useCallback(() => {
      const k = _e.trim();
      k && k !== t.name && I(t.id, k), be(false);
    }, [
      _e,
      t.id,
      t.name,
      I
    ]), X = c.useCallback(() => {
      Ge(t.name), be(false);
    }, [
      t.name
    ]), we = ot((k) => k.inspectTriangles), he = ot((k) => k.setCurrentInspection), He = c.useCallback((k) => {
      if (Qt() || se || re) return;
      if (k.stopPropagation(), we && k.faceIndex != null) {
        const A = Cr(o, k.faceIndex);
        A && (he(A), console.log("[triangle-inspector]", A));
        return;
      }
      if (W && k.faceIndex != null) {
        const A = Xn(o, k.faceIndex, t.id);
        F(A);
        return;
      }
      if (k.nativeEvent.shiftKey || k.nativeEvent.metaKey) {
        f(B);
        return;
      }
      if (k.faceIndex != null) {
        const A = $n({
          triIndex: k.faceIndex,
          hitPoint: k.point,
          mesh: o,
          partId: t.id,
          filter: j,
          camera: b,
          viewport: P
        });
        if (A) {
          y(A);
          return;
        }
      }
      x(B);
    }, [
      B,
      se,
      re,
      W,
      o,
      t.id,
      F,
      f,
      x,
      y,
      j,
      b,
      P,
      we,
      he
    ]), Ie = c.useCallback((k) => {
      if (!(U || se || re)) {
        if (W && k.faceIndex != null) {
          k.stopPropagation();
          const v = Xn(o, k.faceIndex, t.id);
          L(v);
          return;
        }
        if (k.faceIndex != null) {
          k.stopPropagation();
          const v = $n({
            triIndex: k.faceIndex,
            hitPoint: k.point,
            mesh: o,
            partId: t.id,
            filter: j,
            camera: b,
            viewport: P
          });
          h(v || {
            kind: "part",
            id: t.id
          });
        }
      }
    }, [
      U,
      se,
      re,
      W,
      o,
      t.id,
      L,
      h,
      j,
      b,
      P
    ]), Ze = c.useCallback((k) => {
      U || se || re || (k.stopPropagation(), W || w(t.id));
    }, [
      U,
      se,
      re,
      W,
      t.id,
      w
    ]), Te = c.useCallback(() => {
      U || (W ? L(null) : w(null));
    }, [
      U,
      W,
      L,
      w
    ]), qe = c.useRef(null);
    return c.useEffect(() => {
      const k = p.current;
      k && (qe.current || (qe.current = k.raycast.bind(k)), U || l ? k.raycast = () => {
      } : k.raycast = qe.current);
    }, [
      U,
      l
    ]), i.jsxs("mesh", {
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
        i.jsx("bufferGeometry", {
          ref: d
        }),
        !Le && i.jsx($o, {
          color: o.colors || _ ? void 0 : V,
          vertexColors: !!o.colors || !!_,
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
        S && g && i.jsx(xn, {
          threshold: 15,
          color: "#666"
        }),
        Oe && g && !Ue && i.jsx(xn, {
          threshold: 15,
          color: xe ? Yn : Un,
          lineWidth: xe ? 3 : 2,
          renderOrder: 1
        }),
        Oe && g && Ue && i.jsx(Ko, {
          color: xe ? Yn : Un,
          thickness: xe ? 3 : 2,
          angle: Math.PI,
          renderOrder: 1
        }),
        Ee && i.jsx("mesh", {
          geometry: Ee,
          renderOrder: 1,
          children: i.jsx("meshBasicMaterial", {
            color: zr,
            transparent: true,
            opacity: 0.4,
            depthTest: true,
            depthWrite: false,
            polygonOffset: true,
            polygonOffsetFactor: -4,
            polygonOffsetUnits: -4,
            side: Xe
          })
        }),
        s && !W && i.jsx(it, {
          position: ae,
          center: true,
          style: {
            pointerEvents: "auto"
          },
          children: i.jsxs("div", {
            className: "flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-text whitespace-nowrap bg-surface/90 backdrop-blur-sm border border-border rounded-md shadow-sm",
            children: [
              de ? i.jsx("input", {
                ref: Ne,
                type: "text",
                value: _e,
                onClick: (k) => k.stopPropagation(),
                onFocus: (k) => k.currentTarget.select(),
                onChange: (k) => Ge(k.target.value),
                onBlur: Q,
                onKeyDown: (k) => {
                  k.key === "Enter" && Q(), k.key === "Escape" && X();
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
              !de && Rn(t) && i.jsx("button", {
                type: "button",
                onClick: (k) => {
                  k.stopPropagation(), ue.getState().enter();
                },
                className: "px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors",
                children: "Edit"
              }),
              !de && (is(t) || as(t)) && i.jsx("button", {
                type: "button",
                onClick: (k) => {
                  k.stopPropagation(), cs.getState().openPanel();
                },
                className: "px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors",
                children: "Edit"
              })
            ]
          })
        })
      ]
    });
  }), Tr = {
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
  }, Fr = {
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
  function sn(e, t) {
    const o = e.species[e.speciesIdx[t]];
    return (o == null ? void 0 : o.color) ?? Tr[(o == null ? void 0 : o.element) ?? "C"] ?? [
      0.85,
      0.4,
      0.85
    ];
  }
  function Kn(e, t, o) {
    const n = e.species[e.speciesIdx[t]], s = (n == null ? void 0 : n.radius) ?? Fr[(n == null ? void 0 : n.element) ?? "C"] ?? 0.75;
    return o === "space_filling" ? s * 1.8 : o === "wireframe" ? s * 0.2 : s * 0.42;
  }
  const Wo = `
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
}`, _r = `
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
}`, Lr = `
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
${Wo}
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
}`, Or = `
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
}`, Nr = `
precision highp float;
uniform float logDepthBufFC;
uniform mat4 projectionMatrix; // three binds this built-in when declared in-stage
in vec3 vColor;
in vec3 vNormalV;
in vec3 vViewPos;
out vec4 fragColor;
${Wo}
void main(){
  vec3 N = normalize(vNormalV);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(-vViewPos);
  vec4 clip = projectionMatrix * vec4(vViewPos, 1.0);
  gl_FragDepth = log2(1.0 + clip.w) * logDepthBufFC * 0.5;
  fragColor = vec4(shadeMolecule(vColor, N, V), 1.0);
}`;
  function Br({ molecule: e, representation: t = "ball_and_stick" }) {
    const o = c.useRef(null), n = c.useRef(null), s = Ct((S) => S.selectAtom), a = e.positions.length, r = e.bonds ?? [], l = t !== "space_filling", d = c.useMemo(() => {
      let S = 1e-3;
      for (const m of e.positions) S = Math.max(S, Math.hypot(m[0], m[1], m[2]));
      return 34 / S;
    }, [
      e
    ]), p = c.useMemo(() => {
      const S = new Fo(2, 2), m = new Ns();
      m.index = S.index, m.attributes.position = S.attributes.position, m.attributes.uv = S.attributes.uv;
      const w = new Float32Array(a * 3), b = new Float32Array(a), P = new Float32Array(a * 3), C = new Float32Array(a);
      for (let R = 0; R < a; R++) {
        const I = e.positions[R];
        w[R * 3] = I[0] * d, w[R * 3 + 1] = I[1] * d, w[R * 3 + 2] = I[2] * d, b[R] = Kn(e, R, t) * d;
        const _ = sn(e, R);
        P[R * 3] = _[0], P[R * 3 + 1] = _[1], P[R * 3 + 2] = _[2], C[R] = R;
      }
      return m.setAttribute("iCenter", new Nt(w, 3)), m.setAttribute("iRadius", new Nt(b, 1)), m.setAttribute("iColor", new Nt(P, 3)), m.setAttribute("iIndex", new Nt(C, 1)), m.instanceCount = a, S.dispose(), m;
    }, [
      e,
      a,
      t,
      d
    ]), g = c.useMemo(() => new Xt({
      glslVersion: On,
      uniforms: {
        logDepthBufFC: {
          value: 1
        },
        uSelected: {
          value: -1
        }
      },
      vertexShader: _r,
      fragmentShader: Lr
    }), []), u = c.useMemo(() => new Bs(1, 12, 8), []), x = c.useMemo(() => new Vs({
      colorWrite: false,
      depthWrite: false
    }), []), f = c.useMemo(() => new $s(1, 1, 1, 12, 1), []), y = c.useMemo(() => new Xt({
      glslVersion: On,
      uniforms: {
        logDepthBufFC: {
          value: 1
        }
      },
      vertexShader: Or,
      fragmentShader: Nr
    }), []), h = l ? r.length * 2 : 0;
    c.useEffect(() => () => p.dispose(), [
      p
    ]), c.useEffect(() => () => {
      g.dispose(), u.dispose(), x.dispose(), f.dispose(), y.dispose();
    }, [
      g,
      u,
      x,
      f,
      y
    ]), c.useLayoutEffect(() => {
      const S = o.current;
      if (!S || !l) return;
      const m = (t === "wireframe" ? 0.05 : 0.11) * d, w = new At(), b = new E(), P = new E(), C = new st(), R = new E(0, 1, 0), I = new E(), _ = new E(), W = new E(), D = new E(), L = new We();
      let F = 0;
      for (const U of r) {
        const se = e.positions[U.a], re = e.positions[U.b];
        I.set(se[0] * d, se[1] * d, se[2] * d), _.set(re[0] * d, re[1] * d, re[2] * d), D.addVectors(I, _).multiplyScalar(0.5), W.subVectors(_, I);
        const ge = W.length();
        if (ge < 1e-6) {
          w.makeScale(0, 0, 0), S.setMatrixAt(F, w), S.setMatrixAt(F + 1, w), F += 2;
          continue;
        }
        W.normalize(), C.setFromUnitVectors(R, W), P.set(m, ge / 2, m), b.addVectors(I, D).multiplyScalar(0.5), w.compose(b, C, P), S.setMatrixAt(F, w);
        const xe = sn(e, U.a);
        L.setRGB(xe[0], xe[1], xe[2]), S.setColorAt(F, L), b.addVectors(D, _).multiplyScalar(0.5), w.compose(b, C, P), S.setMatrixAt(F + 1, w);
        const B = sn(e, U.b);
        L.setRGB(B[0], B[1], B[2]), S.setColorAt(F + 1, L), F += 2;
      }
      S.count = h, S.instanceMatrix.needsUpdate = true, S.instanceColor && (S.instanceColor.needsUpdate = true);
    }, [
      e,
      r,
      l,
      t,
      h,
      d
    ]), c.useLayoutEffect(() => {
      const S = n.current;
      if (!S) return;
      const m = new At(), w = new E(), b = new E(), P = new st();
      for (let C = 0; C < a; C++) {
        const R = e.positions[C], I = Kn(e, C, t) * d;
        w.set(R[0] * d, R[1] * d, R[2] * d), b.set(I, I, I), m.compose(w, P, b), S.setMatrixAt(C, m);
      }
      S.count = a, S.instanceMatrix.needsUpdate = true;
    }, [
      e,
      a,
      t,
      d
    ]), Qe(({ camera: S }) => {
      const m = 2 / Math.log2(S.far + 1);
      g.uniforms.logDepthBufFC.value = m, y.uniforms.logDepthBufFC.value = m;
      const w = Ct.getState().selectedAtomIndex;
      g.uniforms.uSelected.value = w ?? -1;
    });
    const j = (S) => {
      if (Qt()) return;
      S.stopPropagation();
      const m = S.instanceId;
      if (m === void 0) return;
      const w = Ct.getState().selectedAtomIndex;
      s(w === m ? null : m);
    };
    return a === 0 ? null : i.jsxs("group", {
      children: [
        i.jsx("mesh", {
          geometry: p,
          material: g,
          frustumCulled: false
        }),
        i.jsx("instancedMesh", {
          ref: n,
          args: [
            u,
            x,
            a
          ],
          frustumCulled: false,
          onClick: j
        }, a),
        l && r.length > 0 && i.jsx("instancedMesh", {
          ref: o,
          args: [
            f,
            y,
            h
          ],
          frustumCulled: false
        })
      ]
    });
  }
  function Vr(e, t) {
    const o = /* @__PURE__ */ new Map(), n = (r, l) => r < l ? `${r},${l}` : `${l},${r}`, s = t.length / 3;
    for (let r = 0; r < s; r++) {
      const l = t[3 * r], d = t[3 * r + 1], p = t[3 * r + 2];
      for (const [g, u] of [
        [
          l,
          d
        ],
        [
          d,
          p
        ],
        [
          p,
          l
        ]
      ]) {
        const x = n(g, u);
        o.set(x, (o.get(x) ?? 0) + 1);
      }
    }
    const a = [];
    for (const [r, l] of o) {
      if (l !== 1) continue;
      const [d, p] = r.split(","), g = parseInt(d, 10), u = parseInt(p, 10);
      a.push(e[3 * g], e[3 * g + 1], e[3 * g + 2], e[3 * u], e[3 * u + 1], e[3 * u + 2]);
    }
    return new Float32Array(a);
  }
  function $r({ positions: e, indices: t }) {
    const o = c.useMemo(() => {
      const n = Vr(e, t), s = new ft();
      return s.setAttribute("position", new $e(n, 3)), s;
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
  const Wr = `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`, Gr = `
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
  function Hr({ mesh: e }) {
    const t = c.useRef(null), o = c.useMemo(() => new Xt({
      vertexShader: Wr,
      fragmentShader: Gr,
      side: Xe
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
  function Yr() {
    const e = $((p) => p.clearanceIndicator), t = $((p) => p.captureMode);
    if (!e || t) return null;
    const { pointA: o, pointB: n, distanceMm: s, pass: a, label: r } = e, l = [
      (o[0] + n[0]) / 2,
      (o[1] + n[1]) / 2,
      (o[2] + n[2]) / 2
    ], d = a ? "#22c55e" : "#ef4444";
    return i.jsxs("group", {
      children: [
        i.jsx(Ae, {
          points: [
            o,
            n
          ],
          color: d,
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
              color: d
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
              color: d
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
              borderColor: d,
              color: d
            },
            children: [
              i.jsxs("span", {
                children: [
                  r ? `${r}: ` : "",
                  s.toFixed(2),
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
  function Ur({ mesh: e }) {
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
    ]), i.jsxs("mesh", {
      children: [
        i.jsx("bufferGeometry", {
          ref: t
        }),
        i.jsx("meshStandardMaterial", {
          color: "#00d4ff",
          transparent: true,
          opacity: 0.4,
          side: Xe,
          depthWrite: false
        })
      ]
    });
  }
  const Xr = "#ff4d4d", qr = "#2fbf71";
  function Zn({ mesh: e, color: t }) {
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
          side: Xe,
          depthWrite: false
        })
      ]
    });
  }
  function Kr() {
    const e = ls((t) => t.ghost);
    return e ? i.jsxs("group", {
      children: [
        e.removed.map((t, o) => i.jsx(Zn, {
          mesh: t,
          color: Xr
        }, `r${o}`)),
        e.added.map((t, o) => i.jsx(Zn, {
          mesh: t,
          color: qr
        }, `a${o}`))
      ]
    }) : null;
  }
  const et = 10, Bt = 200, Zr = 5;
  function Je(e) {
    return new E(e.x, e.y, e.z);
  }
  function Kt({ position: e, screenPx: t = 1, children: o }) {
    const n = c.useRef(null), { camera: s, size: a } = Pe(), r = c.useRef(new E());
    return Qe(() => {
      const l = n.current;
      if (!l) return;
      const d = Array.isArray(e) ? r.current.fromArray(e) : e, p = s, g = p.position.distanceTo(d), u = (p.fov ?? 50) * Math.PI / 180, x = 2 * g * Math.tan(u / 2) / a.height;
      l.scale.setScalar(Math.max(1e-4, t * x));
    }), i.jsx("group", {
      ref: n,
      position: e,
      children: o
    });
  }
  function Fe(e, t, o, n) {
    return new E(t.x + e.x * o.x + e.y * n.x, t.y + e.x * o.y + e.y * n.y, t.z + e.x * o.z + e.y * n.z);
  }
  function Jn(e, t, o, n) {
    const s = e.x - t.x, a = e.y - t.y, r = e.z - t.z;
    return {
      x: s * o.x + a * o.y + r * o.z,
      y: s * n.x + a * n.y + r * n.z
    };
  }
  function Jr({ origin: e, xDir: t, yDir: o, bounds: n }) {
    const { isDark: s } = at(), a = c.useMemo(() => {
      if (!n) return {
        minU: -Bt,
        maxU: Bt,
        minV: -Bt,
        maxV: Bt
      };
      const g = et;
      return {
        minU: Math.floor((n.minU - g) / et) * et,
        maxU: Math.ceil((n.maxU + g) / et) * et,
        minV: Math.floor((n.minV - g) / et) * et,
        maxV: Math.ceil((n.maxV + g) / et) * et
      };
    }, [
      n
    ]), r = c.useMemo(() => {
      const g = [], u = Je(e), x = Je(t), f = Je(o), y = s ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
      for (let h = a.minV; h <= a.maxV; h += et) {
        if (h === 0) continue;
        const j = u.clone().add(x.clone().multiplyScalar(a.minU)).add(f.clone().multiplyScalar(h)), S = u.clone().add(x.clone().multiplyScalar(a.maxU)).add(f.clone().multiplyScalar(h));
        g.push({
          points: [
            [
              j.x,
              j.y,
              j.z
            ],
            [
              S.x,
              S.y,
              S.z
            ]
          ],
          color: y,
          width: 1
        });
      }
      for (let h = a.minU; h <= a.maxU; h += et) {
        if (h === 0) continue;
        const j = u.clone().add(f.clone().multiplyScalar(a.minV)).add(x.clone().multiplyScalar(h)), S = u.clone().add(f.clone().multiplyScalar(a.maxV)).add(x.clone().multiplyScalar(h));
        g.push({
          points: [
            [
              j.x,
              j.y,
              j.z
            ],
            [
              S.x,
              S.y,
              S.z
            ]
          ],
          color: y,
          width: 1
        });
      }
      return g;
    }, [
      e,
      t,
      o,
      s,
      a
    ]), l = c.useMemo(() => {
      const g = Je(e), u = Je(t), x = g.clone().add(u.clone().multiplyScalar(a.minU)), f = g.clone().add(u.clone().multiplyScalar(a.maxU));
      return [
        [
          x.x,
          x.y,
          x.z
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
    ]), d = c.useMemo(() => {
      const g = Je(e), u = Je(o), x = g.clone().add(u.clone().multiplyScalar(a.minV)), f = g.clone().add(u.clone().multiplyScalar(a.maxV));
      return [
        [
          x.x,
          x.y,
          x.z
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
    return i.jsxs("group", {
      children: [
        r.map((g, u) => i.jsx(Ae, {
          points: g.points,
          color: s ? "#404040" : "#888888",
          lineWidth: g.width,
          transparent: true,
          opacity: 0.3,
          depthWrite: false
        }, u)),
        i.jsx(Ae, {
          points: l,
          color: "#ef4444",
          lineWidth: 2,
          transparent: true,
          opacity: 0.8,
          depthWrite: false
        }),
        i.jsx(Ae, {
          points: d,
          color: "#22c55e",
          lineWidth: 2,
          transparent: true,
          opacity: 0.8,
          depthWrite: false
        }),
        i.jsxs("mesh", {
          position: p,
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
  function Qr({ segments: e, selectedSegments: t, constraints: o, pendingPoints: n, origin: s, xDir: a, yDir: r }) {
    const { isDark: l } = at(), d = c.useMemo(() => e.map((x, f) => {
      const y = t.includes(f), h = Fe(x.start, s, a, r), j = Fe(x.end, s, a, r);
      if (x.type === "Line") return {
        type: "line",
        points: [
          [
            h.x,
            h.y,
            h.z
          ],
          [
            j.x,
            j.y,
            j.z
          ]
        ],
        color: y ? "#f59e0b" : "#3b82f6",
        width: y ? 3 : 2,
        start: h,
        end: j
      };
      {
        const S = Fe(x.center, s, a, r), m = h.distanceTo(S), w = Math.atan2(x.start.y - x.center.y, x.start.x - x.center.x), b = Math.atan2(x.end.y - x.center.y, x.end.x - x.center.x), P = [], C = 16;
        let R = b - w;
        x.ccw && R < 0 && (R += 2 * Math.PI), !x.ccw && R > 0 && (R -= 2 * Math.PI);
        for (let I = 0; I <= C; I++) {
          const _ = I / C, W = w + R * _, D = {
            x: x.center.x + m * Math.cos(W),
            y: x.center.y + m * Math.sin(W)
          }, L = Fe(D, s, a, r);
          P.push([
            L.x,
            L.y,
            L.z
          ]);
        }
        return {
          type: "arc",
          points: P,
          color: y ? "#f59e0b" : "#3b82f6",
          width: y ? 3 : 2,
          start: h,
          end: j
        };
      }
    }), [
      e,
      t,
      s,
      a,
      r
    ]), p = c.useMemo(() => {
      const x = [], f = /* @__PURE__ */ new Set();
      for (const y of e) {
        const h = Fe(y.start, s, a, r), j = Fe(y.end, s, a, r), S = `${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)}`, m = `${j.x.toFixed(2)},${j.y.toFixed(2)},${j.z.toFixed(2)}`;
        f.has(S) || (f.add(S), x.push(h)), f.has(m) || (f.add(m), x.push(j));
      }
      return x;
    }, [
      e,
      s,
      a,
      r
    ]), g = c.useMemo(() => n.map((x) => Fe(x, s, a, r)), [
      n,
      s,
      a,
      r
    ]), u = c.useMemo(() => {
      const x = [];
      for (const f of o) if (f.type === "Horizontal") {
        const y = e[f.line];
        if ((y == null ? void 0 : y.type) === "Line") {
          const h = {
            x: (y.start.x + y.end.x) / 2,
            y: (y.start.y + y.end.y) / 2 + 3
          };
          x.push({
            position: Fe(h, s, a, r),
            text: "H",
            color: "#22c55e"
          });
        }
      } else if (f.type === "Vertical") {
        const y = e[f.line];
        if ((y == null ? void 0 : y.type) === "Line") {
          const h = {
            x: (y.start.x + y.end.x) / 2 + 3,
            y: (y.start.y + y.end.y) / 2
          };
          x.push({
            position: Fe(h, s, a, r),
            text: "V",
            color: "#22c55e"
          });
        }
      } else if (f.type === "Length") {
        const y = e[f.line];
        if ((y == null ? void 0 : y.type) === "Line") {
          const h = {
            x: (y.start.x + y.end.x) / 2,
            y: (y.start.y + y.end.y) / 2 - 3
          };
          x.push({
            position: Fe(h, s, a, r),
            text: `${f.length}`,
            color: "#a855f7"
          });
        }
      } else if (f.type === "Parallel") {
        const y = e[f.lineA], h = e[f.lineB];
        if ((y == null ? void 0 : y.type) === "Line" && (h == null ? void 0 : h.type) === "Line") {
          const j = {
            x: (y.start.x + y.end.x) / 2,
            y: (y.start.y + y.end.y) / 2 + 3
          }, S = {
            x: (h.start.x + h.end.x) / 2,
            y: (h.start.y + h.end.y) / 2 + 3
          };
          x.push({
            position: Fe(j, s, a, r),
            text: "//",
            color: "#06b6d4"
          }), x.push({
            position: Fe(S, s, a, r),
            text: "//",
            color: "#06b6d4"
          });
        }
      } else if (f.type === "Perpendicular") {
        const y = e[f.lineA];
        if ((y == null ? void 0 : y.type) === "Line") {
          const h = {
            x: (y.start.x + y.end.x) / 2,
            y: (y.start.y + y.end.y) / 2 + 3
          };
          x.push({
            position: Fe(h, s, a, r),
            text: "\u22A5",
            color: "#f43f5e"
          });
        }
      } else if (f.type === "EqualLength") {
        const y = e[f.lineA], h = e[f.lineB];
        if ((y == null ? void 0 : y.type) === "Line" && (h == null ? void 0 : h.type) === "Line") {
          const j = {
            x: (y.start.x + y.end.x) / 2,
            y: (y.start.y + y.end.y) / 2 + 3
          }, S = {
            x: (h.start.x + h.end.x) / 2,
            y: (h.start.y + h.end.y) / 2 + 3
          };
          x.push({
            position: Fe(j, s, a, r),
            text: "=",
            color: "#eab308"
          }), x.push({
            position: Fe(S, s, a, r),
            text: "=",
            color: "#eab308"
          });
        }
      }
      return x;
    }, [
      o,
      e,
      s,
      a,
      r
    ]);
    return i.jsxs("group", {
      children: [
        d.map((x, f) => i.jsx(Ae, {
          points: x.points,
          color: x.color,
          lineWidth: x.width,
          depthWrite: false
        }, f)),
        p.map((x, f) => i.jsx(Kt, {
          position: x,
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
        g.map((x, f) => i.jsx(Kt, {
          position: x,
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
        u.map((x, f) => i.jsx(it, {
          position: x.position,
          center: true,
          children: i.jsx("div", {
            className: "pointer-events-none select-none whitespace-nowrap text-xs font-bold",
            style: {
              color: x.color
            },
            children: x.text
          })
        }, f))
      ]
    });
  }
  function ei({ cursorWorldPos: e, cursorSketchPos: t, snapTarget: o, gridSnap: n, previewLine: s, previewRect: a, previewCircle: r, origin: l, xDir: d, yDir: p }) {
    const g = c.useMemo(() => e ? Je(e) : null, [
      e
    ]), u = 14, x = c.useMemo(() => {
      const m = Je(d);
      return [
        [
          -m.x * u,
          -m.y * u,
          -m.z * u
        ],
        [
          m.x * u,
          m.y * u,
          m.z * u
        ]
      ];
    }, [
      d
    ]), f = c.useMemo(() => {
      const m = Je(p);
      return [
        [
          -m.x * u,
          -m.y * u,
          -m.z * u
        ],
        [
          m.x * u,
          m.y * u,
          m.z * u
        ]
      ];
    }, [
      p
    ]), y = c.useMemo(() => {
      if (!s) return null;
      const m = Fe(s.start, l, d, p), w = Fe(s.end, l, d, p);
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
      d,
      p
    ]), h = c.useMemo(() => {
      if (!a) return null;
      const { p1: m, p2: w } = a, b = Math.min(m.x, w.x), P = Math.max(m.x, w.x), C = Math.min(m.y, w.y), R = Math.max(m.y, w.y);
      return [
        {
          x: b,
          y: C
        },
        {
          x: P,
          y: C
        },
        {
          x: P,
          y: R
        },
        {
          x: b,
          y: R
        },
        {
          x: b,
          y: C
        }
      ].map((_) => {
        const W = Fe(_, l, d, p);
        return [
          W.x,
          W.y,
          W.z
        ];
      });
    }, [
      a,
      l,
      d,
      p
    ]), j = c.useMemo(() => {
      if (!r || r.radius < 0.1) return null;
      const { center: m, radius: w } = r, b = 32, P = [];
      for (let C = 0; C <= b; C++) {
        const R = 2 * Math.PI * C / b, I = {
          x: m.x + w * Math.cos(R),
          y: m.y + w * Math.sin(R)
        }, _ = Fe(I, l, d, p);
        P.push([
          _.x,
          _.y,
          _.z
        ]);
      }
      return P;
    }, [
      r,
      l,
      d,
      p
    ]), S = c.useMemo(() => o ? Fe(o, l, d, p) : null, [
      o,
      l,
      d,
      p
    ]);
    return !g || !t || !x || !f ? null : i.jsxs("group", {
      children: [
        i.jsxs(Kt, {
          position: g,
          children: [
            i.jsx(Ae, {
              points: x,
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
        y && i.jsx(Ae, {
          points: y,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        h && i.jsx(Ae, {
          points: h,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        j && i.jsx(Ae, {
          points: j,
          color: "rgba(59, 130, 246, 0.6)",
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        S && i.jsxs(Kt, {
          position: S,
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
                  side: Xe
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
          position: g,
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
  function ti() {
    const { raycaster: e } = Pe(), t = ke((B) => B.active), o = ke((B) => B.plane), n = ke((B) => B.origin), s = ke((B) => B.segments), a = ke((B) => B.constraints), r = ke((B) => B.tool), l = ke((B) => B.constraintTool), d = ke((B) => B.points), p = ke((B) => B.selectedSegments), g = ke((B) => B.cursorWorldPos), u = ke((B) => B.cursorSketchPos), x = ke((B) => B.snapTarget), f = ke((B) => B.selectedFace), y = ke((B) => B.addPoint), h = ke((B) => B.finishShape), j = ke((B) => B.toggleSegmentSelection), S = ke((B) => B.setCursorPos), m = $((B) => B.gridSnap), w = $((B) => B.pointSnap), b = l !== "none", P = c.useMemo(() => ({
      ...us(o),
      origin: n
    }), [
      o,
      n
    ]), C = c.useMemo(() => {
      const B = f == null ? void 0 : f.vertices;
      if (!B || B.length === 0) return null;
      const ie = B.map((be) => Jn(Je(be), P.origin, P.xDir, P.yDir));
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
      P
    ]), R = c.useMemo(() => {
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
    ]), I = c.useCallback((B) => {
      const { snapped: ie, target: je } = ds(R, B, {
        gridEnabled: m,
        gridSize: et,
        pointEnabled: w,
        pointTolerance: Zr
      });
      return {
        snapped: ie,
        target: je
      };
    }, [
      w,
      m,
      R
    ]), _ = c.useRef(null), W = 5e4, D = c.useMemo(() => {
      const B = new Fo(W, W), ie = Je(P.normal), je = new E(0, 0, 1), ee = new st().setFromUnitVectors(je, ie);
      return B.applyQuaternion(ee), B.translate(P.origin.x, P.origin.y, P.origin.z), B;
    }, [
      P
    ]), L = c.useCallback(() => {
      if (!_.current) return;
      const B = e.intersectObject(_.current);
      if (B.length === 0) {
        S(null, null, null);
        return;
      }
      const ie = _.current.worldToLocal(B[0].point.clone()), je = Jn(ie, P.origin, P.xDir, P.yDir), { snapped: ee, target: Ee } = I(je), de = Fe(ee, P.origin, P.xDir, P.yDir);
      S({
        x: de.x,
        y: de.y,
        z: de.z
      }, ee, Ee);
    }, [
      P,
      e,
      I,
      S
    ]), F = c.useCallback((B) => {
      if (B.button === 0 && !Qt() && (B.stopPropagation(), !!u)) if (b) {
        const ie = fs(s, u, 2);
        ie !== null && j(ie);
      } else y(u);
    }, [
      u,
      b,
      s,
      y,
      j
    ]), U = c.useCallback((B) => {
      B.stopPropagation(), r === "line" && h();
    }, [
      r,
      h
    ]), se = c.useCallback(() => {
      S(null, null, null);
    }, [
      S
    ]), re = c.useMemo(() => r === "line" && d.length > 0 && u ? {
      start: d[d.length - 1],
      end: u
    } : null, [
      r,
      d,
      u
    ]), ge = c.useMemo(() => r === "rectangle" && d.length === 1 && u ? {
      p1: d[0],
      p2: u
    } : null, [
      r,
      d,
      u
    ]), xe = c.useMemo(() => {
      if (r === "circle" && d.length === 1 && u) {
        const B = d[0], ie = Math.sqrt((u.x - B.x) ** 2 + (u.y - B.y) ** 2);
        return {
          center: B,
          radius: ie
        };
      }
      return null;
    }, [
      r,
      d,
      u
    ]);
    return t ? i.jsxs("group", {
      children: [
        i.jsx("mesh", {
          ref: _,
          geometry: D,
          frustumCulled: false,
          onPointerMove: L,
          onClick: F,
          onDoubleClick: U,
          onPointerLeave: se,
          children: i.jsx("meshBasicMaterial", {
            visible: false,
            side: Xe
          })
        }),
        i.jsx(Jr, {
          origin: P.origin,
          xDir: P.xDir,
          yDir: P.yDir,
          bounds: (C == null ? void 0 : C.bounds) ?? null
        }),
        i.jsx(Qr, {
          segments: s,
          selectedSegments: p,
          constraints: a,
          pendingPoints: d,
          origin: P.origin,
          xDir: P.xDir,
          yDir: P.yDir
        }),
        i.jsx(ei, {
          cursorWorldPos: g,
          cursorSketchPos: u,
          snapTarget: x,
          gridSnap: m,
          previewLine: re,
          previewRect: ge,
          previewCircle: xe,
          origin: P.origin,
          xDir: P.xDir,
          yDir: P.yDir
        })
      ]
    }) : null;
  }
  const En = 5, Qn = 0.15, ni = 0.35, oi = {
    XY: "#61afef",
    XZ: "#98c379",
    YZ: "#e06c75"
  };
  function rn({ plane: e, rotation: t, position: o }) {
    const [n, s] = c.useState(false), a = c.useRef(null), r = ke((g) => g.enterSketchMode), l = ke((g) => g.active), { invalidate: d } = Pe(), p = (g) => {
      var _a2;
      if (g.stopPropagation(), l) return;
      let u = false;
      ((_a2 = g.face) == null ? void 0 : _a2.normal) && a.current && (u = g.face.normal.clone().transformDirection(a.current.matrixWorld).dot(g.ray.direction) > 0), r(e, void 0, u);
    };
    return Qe(() => {
      if (!a.current) return;
      const g = a.current.material, u = n ? ni : Qn, x = u - g.opacity;
      if (Math.abs(x) < 0.01) {
        g.opacity = u;
        return;
      }
      g.opacity += x * 0.2, d();
    }), i.jsxs("mesh", {
      ref: a,
      position: o,
      rotation: t,
      onPointerEnter: (g) => {
        g.stopPropagation(), l || (s(true), document.body.style.cursor = "pointer");
      },
      onPointerLeave: () => {
        s(false), document.body.style.cursor = "auto";
      },
      onClick: p,
      children: [
        i.jsx("planeGeometry", {
          args: [
            En,
            En
          ]
        }),
        i.jsx("meshBasicMaterial", {
          color: oi[e],
          transparent: true,
          opacity: Qn,
          side: Xe,
          depthWrite: false,
          depthTest: false
        })
      ]
    });
  }
  function si() {
    if (ke((o) => o.active)) return null;
    const t = En / 2;
    return i.jsxs("group", {
      children: [
        i.jsx(rn, {
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
        i.jsx(rn, {
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
        i.jsx(rn, {
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
  const ri = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, an = Math.PI / 180, cn = 180 / Math.PI, ii = new st().setFromAxisAngle(new E(1, 0, 0), -Math.PI / 2), ai = new st().setFromAxisAngle(new E(1, 0, 0), Math.PI / 2);
  function eo(e) {
    return [
      e.x,
      e.z,
      -e.y
    ];
  }
  function to(e) {
    return {
      x: e.x,
      y: -e.z,
      z: e.y
    };
  }
  function no(e, t) {
    const o = Pn.setFromEuler(Et.set(e.x * an, e.y * an, e.z * an, "ZYX"));
    return t.copy(ii).multiply(o);
  }
  function oo(e) {
    return Pn.copy(ai).multiply(e), Et.setFromQuaternion(Pn, "ZYX"), {
      x: Et.x * cn,
      y: Et.y * cn,
      z: Et.z * cn
    };
  }
  const Pn = new st(), Et = new Jt();
  function ci({ orbitControls: e }) {
    var _a2;
    const t = $((w) => w.selectedPartIds), o = $((w) => w.transformMode), n = $((w) => w.setDraggingGizmo), s = $((w) => w.setGizmoHovered), a = $((w) => w.gridSnap), r = $((w) => w.snapIncrement), l = oe((w) => w.parts), d = oe((w) => w.document), [p, g] = c.useState(null), u = c.useCallback((w) => {
      g(w);
    }, []), x = c.useRef(null), f = c.useRef(false), y = t.size === 1 ? Array.from(t)[0] : null, h = y ? l.find((w) => w.id === y) : null, j = y ? (_a2 = d.instances) == null ? void 0 : _a2.find((w) => w.id === y) : null, S = h !== null || j !== null;
    if (c.useEffect(() => {
      if (!(!p || !S) && !f.current) {
        if (h) {
          const w = d.nodes[String(h.translateNodeId)], b = d.nodes[String(h.rotateNodeId)], P = d.nodes[String(h.scaleNodeId)];
          (w == null ? void 0 : w.op.type) === "Translate" && p.position.set(...eo(w.op.offset));
          const C = (b == null ? void 0 : b.op.type) === "Rotate" ? b.op.angles : {
            x: 0,
            y: 0,
            z: 0
          };
          if (no(C, p.quaternion), (P == null ? void 0 : P.op.type) === "Scale") {
            const { factor: R } = P.op;
            p.scale.set(R.x, R.y, R.z);
          }
        } else if (j) {
          const b = j.transform ?? {
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
          p.position.set(...eo(b.translation)), no(b.rotation, p.quaternion), p.scale.set(b.scale.x, b.scale.y, b.scale.z);
        }
      }
    }, [
      p,
      h,
      j,
      S,
      d
    ]), c.useEffect(() => {
      const w = x.current;
      if (!w) return;
      const b = (C) => {
        const R = C.value;
        f.current = R, n(R), e.current && (e.current.enabled = !R), R && oe.getState().pushUndoSnapshot();
      }, P = (C) => {
        const R = C.value != null;
        s(R), R && $.getState().setHoveredItem(null);
      };
      return w.addEventListener("dragging-changed", b), w.addEventListener("axis-changed", P), () => {
        w.removeEventListener("dragging-changed", b), w.removeEventListener("axis-changed", P), s(false);
      };
    }, [
      p,
      e,
      n,
      s
    ]), c.useEffect(() => {
      const w = x.current;
      if (!w) return;
      const b = () => {
        if (!p || !y) return;
        const P = oe.getState();
        h ? o === "translate" ? P.setTranslation(y, to(p.position), true) : o === "rotate" ? P.setRotation(y, oo(p.quaternion), true) : o === "scale" && P.setScale(y, {
          x: p.scale.x,
          y: p.scale.y,
          z: p.scale.z
        }, true) : j && P.setInstanceTransform(y, {
          translation: to(p.position),
          rotation: oo(p.quaternion),
          scale: {
            x: p.scale.x,
            y: p.scale.y,
            z: p.scale.z
          }
        }, true);
      };
      return w.addEventListener("objectChange", b), () => {
        w.removeEventListener("objectChange", b);
      };
    }, [
      p,
      y,
      h,
      j,
      o
    ]), !S) return null;
    const m = a ? {
      translationSnap: r,
      rotationSnap: Math.PI / 180 * 15,
      scaleSnap: 0.1
    } : {};
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx("object3D", {
          ref: u
        }),
        p && i.jsx(Zo, {
          ref: x,
          object: p,
          mode: o,
          space: "local",
          size: ri ? 1.8 : 0.8,
          ...m
        })
      ]
    });
  }
  const li = 0.4, ui = 0.85, di = new We(54527), fi = new We(16328306), Go = "#00d4ff", Ho = "#f92672", pi = "#6b8fa3", mi = "#4a7080";
  function Yo({ box: e, color: t, opacity: o }) {
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
    return i.jsx(i.Fragment, {
      children: a.map((r, l) => i.jsx(Ae, {
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
  function Uo(e) {
    const t = oe((n) => n.parts), o = De((n) => n.scene);
    return c.useMemo(() => {
      if (e.size === 0 || !o) return null;
      const n = new rt();
      let s = false;
      return e.forEach((a) => {
        const r = t.findIndex((u) => u.id === a);
        if (r === -1) return;
        const l = o.parts[r];
        if (!l) return;
        const d = l.mesh;
        if (!d.positions.length) return;
        const p = new rt(), g = new E();
        for (let u = 0; u < d.positions.length; u += 3) g.set(d.positions[u], d.positions[u + 1], d.positions[u + 2]), p.expandByPoint(g);
        n.union(p), s = true;
      }), s ? n : null;
    }, [
      e,
      t,
      o
    ]);
  }
  function hi() {
    const e = $((s) => s.selectedPartIds), t = Uo(e), { isDark: o } = at();
    if (!t) return null;
    const n = o ? pi : mi;
    return i.jsx(Yo, {
      box: t,
      color: n,
      opacity: 0.5
    });
  }
  function gi() {
    const e = zt((n) => n.participants);
    if ($((n) => n.followMode) === "free") return null;
    const o = [];
    return e.forEach((n) => {
      n.id !== kn && n.selectedPartIds.size !== 0 && o.push(i.jsx(xi, {
        ids: n.selectedPartIds,
        color: n.color
      }, n.id));
    }), i.jsx(i.Fragment, {
      children: o
    });
  }
  function xi({ ids: e, color: t }) {
    const o = Uo(e);
    return o ? i.jsx(Yo, {
      box: o,
      color: t,
      opacity: 0.7
    }) : null;
  }
  function yi() {
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
  function Tn(e) {
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
  function vi({ item: e, variant: t }) {
    const o = Tn(e.partId), n = c.useMemo(() => {
      if (!o) return null;
      const r = Lo(o, e.faceIndex);
      return r.length === 0 ? null : Ks(o, r);
    }, [
      o,
      e.faceIndex
    ]);
    if (c.useEffect(() => () => {
      n == null ? void 0 : n.dispose();
    }, [
      n
    ]), !n) return null;
    const s = t === "selected" ? fi : di, a = t === "selected" ? ui : li;
    return i.jsx("mesh", {
      geometry: n,
      renderOrder: 998,
      children: i.jsx("meshBasicMaterial", {
        color: s,
        transparent: true,
        opacity: a,
        depthWrite: false,
        depthTest: false,
        side: Xe
      })
    });
  }
  function wi({ item: e, variant: t }) {
    const o = Tn(e.partId), n = c.useMemo(() => {
      if (!o) return null;
      const { a, b: r } = Oo(o, e.edgeId);
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
    const s = t === "selected" ? Ho : Go;
    return i.jsx(Ae, {
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
  function bi({ item: e, variant: t }) {
    const o = Tn(e.partId), n = c.useMemo(() => o ? No(o, e.vertexId) : null, [
      o,
      e.vertexId
    ]), s = c.useRef(null), { camera: a, size: r } = Pe();
    if (Qe(() => {
      if (!s.current || !n) return;
      const d = a, p = new E(n.x, n.z, -n.y), g = d.position.distanceTo(p), u = (d.fov ?? 50) * Math.PI / 180, x = 2 * g * Math.tan(u / 2) / r.height, f = t === "selected" ? 6 : 5;
      s.current.scale.setScalar(Math.max(1e-4, f * x));
    }), !n) return null;
    const l = t === "selected" ? Ho : Go;
    return i.jsxs("mesh", {
      ref: s,
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
  function so({ item: e, variant: t }) {
    return e.kind === "face" ? i.jsx(vi, {
      item: e,
      variant: t
    }) : e.kind === "edge" ? i.jsx(wi, {
      item: e,
      variant: t
    }) : e.kind === "vertex" ? i.jsx(bi, {
      item: e,
      variant: t
    }) : null;
  }
  function Si() {
    const e = $((n) => n.selection), t = $((n) => n.hoveredItem), o = c.useMemo(() => !t || t.kind === "part" || e.some((n) => ps(n, t)) ? null : t, [
      t,
      e
    ]);
    return i.jsxs(i.Fragment, {
      children: [
        e.map((n, s) => i.jsx(so, {
          item: n,
          variant: "selected"
        }, `sel-${s}`)),
        o && i.jsx(so, {
          item: o,
          variant: "hover"
        })
      ]
    });
  }
  function Mi() {
    const e = $((n) => n.isDraggingGizmo), t = $((n) => n.isOrbiting);
    return $((n) => n.captureMode) ? i.jsx(yi, {}) : t || e ? null : i.jsxs(i.Fragment, {
      children: [
        i.jsx(hi, {}),
        i.jsx(gi, {}),
        i.jsx(Si, {})
      ]
    });
  }
  const ln = "#94a3b8";
  function Ei(e, t, o) {
    const n = structuredClone(e);
    return n.type === "Cube" ? t === "size.x" ? n.size.x = o : t === "size.y" ? n.size.y = o : t === "size.z" && (n.size.z = o) : n.type === "Cylinder" ? t === "radius" ? n.radius = o : t === "height" && (n.height = o) : n.type === "Sphere" && t === "radius" && (n.radius = o), n;
  }
  function Pi({ value: e, paramKey: t, partId: o, primitiveNodeId: n }) {
    const [s, a] = c.useState(false), [r, l] = c.useState(e.toFixed(1)), d = c.useRef(null), p = oe((S) => S.document), g = oe((S) => S.updatePrimitiveOp);
    c.useEffect(() => {
      s || l(e.toFixed(1));
    }, [
      e,
      s
    ]), c.useEffect(() => {
      s && d.current && (d.current.focus(), d.current.select());
    }, [
      s
    ]);
    const u = () => {
      const S = parseFloat(r);
      if (!isNaN(S) && S > 0) {
        const m = p.nodes[String(n)];
        if (m) {
          const w = Ei(m.op, t, S);
          g(o, w);
        }
      } else l(e.toFixed(1));
      a(false);
    }, x = () => {
      l(e.toFixed(1)), a(false);
    }, f = (S) => {
      S.stopPropagation(), S.key === "Enter" ? u() : S.key === "Escape" && x();
    }, h = t === "radius" ? "r=" : "", j = " mm";
    return s ? i.jsxs("div", {
      className: "bg-surface border border-brand px-1 py-0.5 text-[10px] text-text whitespace-nowrap flex items-center rounded",
      onClick: (S) => S.stopPropagation(),
      onPointerDown: (S) => S.stopPropagation(),
      children: [
        h,
        i.jsx("input", {
          ref: d,
          type: "text",
          value: r,
          onChange: (S) => l(S.target.value),
          onBlur: u,
          onKeyDown: f,
          className: "w-12 bg-transparent outline-none text-[10px] text-text",
          onClick: (S) => S.stopPropagation(),
          onPointerDown: (S) => S.stopPropagation()
        }),
        j
      ]
    }) : i.jsxs("div", {
      className: "bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap cursor-pointer hover:border-brand hover:text-text transition-colors rounded",
      onClick: (S) => {
        S.stopPropagation(), a(true);
      },
      onPointerDown: (S) => S.stopPropagation(),
      children: [
        h,
        e.toFixed(1),
        j
      ]
    });
  }
  function ji({ start: e, end: t, label: o, offset: n = new E(), editable: s, value: a, paramKey: r, partId: l, primitiveNodeId: d }) {
    const p = new E().lerpVectors(e, t, 0.5).add(n), g = 1, u = new E().subVectors(t, e).normalize(), x = new E(0, 1, 0), f = new E().crossVectors(u, x).normalize();
    f.length() < 0.1 && f.set(1, 0, 0);
    const y = e.clone().add(f.clone().multiplyScalar(g)), h = e.clone().add(f.clone().multiplyScalar(-g)), j = t.clone().add(f.clone().multiplyScalar(g)), S = t.clone().add(f.clone().multiplyScalar(-g)), m = s && a !== void 0 && r && l && d !== void 0;
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx(Ae, {
          points: [
            e,
            t
          ],
          color: ln,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        i.jsx(Ae, {
          points: [
            y,
            h
          ],
          color: ln,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        i.jsx(Ae, {
          points: [
            j,
            S
          ],
          color: ln,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        i.jsx(it, {
          position: p,
          center: true,
          style: {
            pointerEvents: m ? "auto" : "none",
            zIndex: 10
          },
          children: m ? i.jsx(Pi, {
            value: a,
            paramKey: r,
            partId: l,
            primitiveNodeId: d
          }) : i.jsx("div", {
            className: "bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap rounded",
            children: o
          })
        })
      ]
    });
  }
  function Ci() {
    const e = $((u) => u.selectedPartIds), t = $((u) => u.isDraggingGizmo), o = oe((u) => u.parts), n = oe((u) => u.document), s = De((u) => u.scene), a = _n((u) => u.parameters), r = _n((u) => u.bindings), l = c.useMemo(() => {
      if (e.size !== 1) return null;
      const u = Array.from(e)[0], x = o.find((b) => b.id === u);
      if (!x || !ms(x)) return null;
      const f = o.findIndex((b) => b.id === u);
      if (!(s == null ? void 0 : s.parts[f])) return null;
      const h = n.nodes[String(x.primitiveNodeId)];
      if (!h) return null;
      const j = n.nodes[String(x.translateNodeId)], S = (j == null ? void 0 : j.op.type) === "Translate" ? j.op.offset : {
        x: 0,
        y: 0,
        z: 0
      }, m = new E(S.x, S.y, S.z);
      let w = null;
      if (h.op.type === "Cube") {
        const b = h.op.size, P = tn(x.primitiveNodeId, {
          "size.x": b.x,
          "size.y": b.y,
          "size.z": b.z
        }, a, r), C = {
          x: P["size.x"],
          y: P["size.y"],
          z: P["size.z"]
        }, R = C.x / 2, I = C.y / 2, _ = C.z / 2;
        w = [
          {
            start: new E(m.x - R, m.y - I - 3, m.z + _),
            end: new E(m.x + R, m.y - I - 3, m.z + _),
            label: `${C.x.toFixed(1)} mm`,
            value: C.x,
            paramKey: "size.x"
          },
          {
            start: new E(m.x + R + 3, m.y - I, m.z + _),
            end: new E(m.x + R + 3, m.y + I, m.z + _),
            label: `${C.y.toFixed(1)} mm`,
            value: C.y,
            paramKey: "size.y"
          },
          {
            start: new E(m.x + R + 3, m.y - I - 3, m.z - _),
            end: new E(m.x + R + 3, m.y - I - 3, m.z + _),
            label: `${C.z.toFixed(1)} mm`,
            value: C.z,
            paramKey: "size.z"
          }
        ];
      }
      if (h.op.type === "Cylinder") {
        const { radius: b, height: P } = tn(x.primitiveNodeId, {
          radius: h.op.radius,
          height: h.op.height
        }, a, r), C = P / 2;
        w = [
          {
            start: new E(m.x, m.y - C - 3, m.z),
            end: new E(m.x + b, m.y - C - 3, m.z),
            label: `r=${b.toFixed(1)} mm`,
            value: b,
            paramKey: "radius"
          },
          {
            start: new E(m.x + b + 3, m.y - C, m.z),
            end: new E(m.x + b + 3, m.y + C, m.z),
            label: `${P.toFixed(1)} mm`,
            value: P,
            paramKey: "height"
          }
        ];
      }
      if (h.op.type === "Sphere") {
        const { radius: b } = tn(x.primitiveNodeId, {
          radius: h.op.radius
        }, a, r);
        w = [
          {
            start: new E(m.x, m.y, m.z),
            end: new E(m.x + b, m.y, m.z),
            label: `r=${b.toFixed(1)} mm`,
            value: b,
            paramKey: "radius"
          }
        ];
      }
      return w ? {
        dimensions: w,
        partId: u,
        primitiveNodeId: x.primitiveNodeId
      } : null;
    }, [
      e,
      o,
      n,
      s,
      a,
      r
    ]);
    if (!l || t) return null;
    const { dimensions: d, partId: p, primitiveNodeId: g } = l;
    return i.jsx(i.Fragment, {
      children: d.map((u, x) => i.jsx(ji, {
        start: u.start,
        end: u.end,
        label: u.label,
        editable: true,
        value: u.value,
        paramKey: u.paramKey,
        partId: p,
        primitiveNodeId: g
      }, x))
    });
  }
  const Ri = {
    error: "bg-red-500/90 text-white ring-red-300",
    warning: "bg-amber-500/90 text-white ring-amber-200",
    info: "bg-sky-500/90 text-white ring-sky-200"
  }, ki = {
    error: "!",
    warning: "!",
    info: "i"
  };
  function zi() {
    const e = xt((l) => l.enabled), t = xt((l) => l.report), o = xt((l) => l.visibleSeverities), n = xt((l) => l.selectedIssueId), s = xt((l) => l.selectIssue), a = ue((l) => l.active), r = c.useMemo(() => {
      if (!t) return [];
      const l = t.issues.filter((d) => o.has(d.severity));
      return Fi(l);
    }, [
      t,
      o
    ]);
    return !e || r.length === 0 || a ? null : i.jsx("group", {
      children: r.map((l, d) => {
        const p = l[0];
        if (!p) return null;
        const g = [
          p.anchor[0],
          p.anchor[1],
          p.anchor[2]
        ], u = l.some((x) => x.id === n);
        return i.jsx(it, {
          position: g,
          center: true,
          zIndexRange: u ? [
            1e3,
            900
          ] : [
            100,
            0
          ],
          style: {
            pointerEvents: "none"
          },
          children: i.jsx(Ii, {
            issues: l,
            selected: u,
            onSelect: (x) => s(x === n ? null : x)
          })
        }, `dfm-${d}`);
      })
    });
  }
  function Ii({ issues: e, selected: t, onSelect: o }) {
    const n = Ti(e), s = e.find((d) => d.severity === n) ?? e[0];
    if (!s) return null;
    const a = Ri[n], r = ki[n], l = e.length;
    return i.jsxs("div", {
      className: "flex items-start gap-2",
      children: [
        i.jsxs("button", {
          type: "button",
          onClick: (d) => {
            d.stopPropagation(), o(s.id);
          },
          className: zn("pointer-events-auto relative flex h-6 w-6 items-center justify-center rounded-full font-bold text-xs ring-2 shadow-md transition-transform", a, t ? "scale-125" : "hover:scale-110"),
          title: s.message,
          children: [
            r,
            l > 1 && i.jsx("span", {
              className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-surface px-1 text-[10px] font-semibold text-text ring-1 ring-border",
              children: l
            })
          ]
        }),
        t && i.jsx(Ai, {
          issue: s,
          extras: l - 1
        })
      ]
    });
  }
  function Ai({ issue: e, extras: t }) {
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
              className: zn("shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold capitalize", e.severity === "error" ? "bg-red-500/20 text-red-300" : e.severity === "warning" ? "bg-amber-500/20 text-amber-300" : "bg-sky-500/20 text-sky-300"),
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
                  children: ro(e.measured)
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
                  children: ro(e.limit)
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
              children: Di(e.suggested_fix)
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
  function ro(e) {
    return Math.abs(e) >= 100 ? e.toFixed(0) : Math.abs(e) >= 10 ? e.toFixed(1) : e.toFixed(2);
  }
  function Di(e) {
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
  function Ti(e) {
    return e.some((t) => t.severity === "error") ? "error" : e.some((t) => t.severity === "warning") ? "warning" : "info";
  }
  function Fi(e) {
    const t = /* @__PURE__ */ new Map();
    for (const o of e) {
      const n = `${un(o.anchor[0])}|${un(o.anchor[1])}|${un(o.anchor[2])}`, s = t.get(n);
      s ? s.push(o) : t.set(n, [
        o
      ]);
    }
    return Array.from(t.values());
  }
  function un(e) {
    return Math.round(e * 2);
  }
  let Pt = null, Zt = null, jn = null, Ut = null, Cn = null;
  function _i() {
    return Ut;
  }
  function io() {
    Cn == null ? void 0 : Cn();
  }
  function ao(e) {
    Pt = e;
  }
  function Li() {
    const e = De((u) => u.scene), t = De((u) => u.engine), o = oe((u) => u.document), { camera: n, size: s, controls: a, invalidate: r } = Pe(), l = zo(), d = c.useRef(false), p = c.useRef({
      x: 0,
      y: 0,
      z: 0,
      tx: 0,
      ty: 0,
      tz: 0
    }), g = c.useRef(false);
    return c.useEffect(() => {
      var _a2, _b, _c2, _d;
      if (!l || !t || !o) {
        d.current = false;
        return;
      }
      let u;
      try {
        u = t.evaluateWithSolids(o);
      } catch (w) {
        Ke.warn("gpu", `Ray-trace eval failed: ${w}`), d.current = false;
        return;
      }
      const x = (((_a2 = u.parts) == null ? void 0 : _a2.length) ?? 0) > 0, f = (((_b = u.instances) == null ? void 0 : _b.length) ?? 0) > 0;
      if (!x && !f) {
        d.current = false;
        return;
      }
      const y = l;
      (_c2 = y.clearScene) == null ? void 0 : _c2.call(y);
      const h = (w) => {
        if (!w) return null;
        const P = o.materials[w] ?? kt(w);
        return P ? {
          color: P.color,
          metallic: P.metallic,
          roughness: P.roughness
        } : null;
      }, j = (w, b) => {
        const P = h(b);
        P && typeof y.uploadSolidWithMaterial == "function" ? y.uploadSolidWithMaterial(w, P.color[0], P.color[1], P.color[2], P.metallic, P.roughness) : y.uploadSolid(w);
      };
      let S = false, m;
      for (const w of u.parts ?? []) {
        const b = w.solid;
        if (b) {
          try {
            j(b, w.material);
          } catch (P) {
            Ke.debug("gpu", `uploadSolid failed: ${P}`);
          }
          m === void 0 && (m = w.material), S = true;
        }
      }
      if (f && ((_d = u.partDefs) == null ? void 0 : _d.length)) {
        const w = /* @__PURE__ */ new Map();
        for (const P of u.partDefs) {
          const C = P.solid;
          C && w.set(P.id, C);
        }
        const b = In(o);
        for (const P of u.instances ?? []) {
          const C = w.get(P.partDefId);
          if (!C) continue;
          const R = P.id ?? P.instanceId, I = (R ? b.get(R) : void 0) ?? P.transform, _ = I ? C.scale(I.scale.x, I.scale.y, I.scale.z).rotate(I.rotation.x, I.rotation.y, I.rotation.z).translate(I.translation.x, I.translation.y, I.translation.z) : C;
          try {
            j(_, P.material);
          } catch (W) {
            Ke.debug("gpu", `uploadSolid (instance) failed: ${W}`);
          }
          m === void 0 && (m = P.material), S = true;
        }
      }
      if (S && m && typeof y.uploadSolidWithMaterial != "function") {
        const w = o.materials[m], b = w ? null : kt(m), P = w ?? b;
        if (P) try {
          let C = false;
          if (typeof y.setMaterialFromDef == "function") try {
            y.setMaterialFromDef(JSON.stringify(P), null), C = true;
          } catch (R) {
            Ke.debug("gpu", `setMaterialFromDef rejected the definition, falling back: ${R}`);
          }
          C || y.setMaterial(P.color[0], P.color[1], P.color[2], P.metallic, P.roughness);
        } catch (C) {
          Ke.debug("gpu", `Failed to set material: ${C}`);
        }
      }
      if (d.current = S, S) {
        g.current = true;
        const w = n, P = (a == null ? void 0 : a.target) ?? {
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
            P.x,
            P.y,
            P.z
          ],
          fov: w.fov,
          width: s.width,
          height: s.height
        };
        Zt = C, p.current = {
          x: w.position.x,
          y: w.position.y,
          z: w.position.z,
          tx: P.x,
          ty: P.y,
          tz: P.z
        }, Pt && (g.current = false, Pt(C)), r();
      }
    }, [
      e,
      l,
      t,
      o,
      n,
      a,
      s,
      r
    ]), c.useEffect(() => (jn = r, () => {
      jn = null;
    }), [
      r
    ]), Qe(() => {
      if (!l || !d.current) return;
      const u = n, f = (a == null ? void 0 : a.target) ?? {
        x: 0,
        y: 0,
        z: 0
      }, y = p.current, h = 1e-3;
      if (!(Math.abs(u.position.x - y.x) > h || Math.abs(u.position.y - y.y) > h || Math.abs(u.position.z - y.z) > h || Math.abs(f.x - y.tx) > h || Math.abs(f.y - y.ty) > h || Math.abs(f.z - y.tz) > h) && !g.current) return;
      p.current = {
        x: u.position.x,
        y: u.position.y,
        z: u.position.z,
        tx: f.x,
        ty: f.y,
        tz: f.z
      };
      const S = {
        position: [
          u.position.x,
          u.position.y,
          u.position.z
        ],
        target: [
          f.x,
          f.y,
          f.z
        ],
        fov: u.fov,
        width: s.width,
        height: s.height
      };
      Zt = S, Pt && (g.current = false, Pt(S));
    }), null;
  }
  const Oi = {
    off: 0,
    normals: 1,
    "face-id": 2,
    lighting: 3,
    orientation: 4
  }, Ni = {
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
  }, Bi = 6;
  function Vi() {
    const e = c.useRef(null), t = $((D) => D.raytraceQuality), o = $((D) => D.raytraceDebugMode), n = $((D) => D.raytraceEdgesEnabled), s = $((D) => D.raytraceEdgeDepthThreshold), a = $((D) => D.raytraceEdgeNormalThreshold), r = $((D) => D.raytraceEdgeSilhouetteEnabled), l = $((D) => D.raytraceEdgeCreaseEnabled), d = $((D) => D.raytraceEdgeBoundaryEnabled), p = $((D) => D.raytraceEdgeSilhouetteWidth), g = $((D) => D.raytraceEdgeCreaseWidth), u = $((D) => D.raytraceEdgeBoundaryWidth), x = $((D) => D.raytraceEdgeSoftness), f = zo(), { isDark: y } = at(), h = c.useRef("off"), j = c.useRef({
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
    }), m = c.useRef(false), w = c.useRef(null), b = c.useRef(null), P = c.useRef(t);
    c.useEffect(() => {
      P.current = t;
    }, [
      t
    ]);
    const C = c.useCallback((D, L, F, U, se, re) => {
      const ge = new ImageData(new Uint8ClampedArray(L), F, U);
      if (F !== se || U !== re) {
        D.imageSmoothingEnabled = true, D.imageSmoothingQuality = "high";
        const xe = document.createElement("canvas");
        xe.width = F, xe.height = U;
        const B = xe.getContext("2d");
        B && (B.putImageData(ge, 0, 0), D.drawImage(xe, 0, 0, se, re));
      } else D.putImageData(ge, 0, 0);
    }, []), R = c.useCallback((D, L) => {
      if (!f || !e.current || m.current) return;
      const F = e.current;
      if (!F.getContext("2d")) return;
      (F.width !== D.width || F.height !== D.height) && (F.width = D.width, F.height = D.height);
      const se = Ni[L];
      let re = Math.floor(D.width * se.scale), ge = Math.floor(D.height * se.scale);
      const xe = re * ge;
      if (xe > se.maxPixels) {
        const me = Math.sqrt(se.maxPixels / xe);
        re = Math.floor(re * me), ge = Math.floor(ge * me);
      }
      m.current = true;
      const B = re, ie = ge, je = D.width, ee = D.height, [Ee, de, be] = D.position, [_e, Ge, Ne] = D.target, Se = [
        Ee,
        -be,
        de
      ], ze = [
        _e,
        -Ne,
        Ge
      ];
      f.render(Se, ze, [
        0,
        0,
        1
      ], re, ge, D.fov * Math.PI / 180).then((me) => {
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
    ]), I = c.useCallback(() => {
      b.current && (clearTimeout(b.current), b.current = null);
    }, []), W = c.useCallback((D) => {
      var _a2;
      if (I(), !f) return;
      const F = [
        "draft",
        "standard",
        "high"
      ].indexOf(P.current), U = [
        {
          tier: "draft",
          frames: 1,
          gap: 0
        }
      ];
      F >= 1 && U.push({
        tier: "standard",
        frames: 4,
        gap: 80
      }), F >= 2 && U.push({
        tier: "high",
        frames: 24,
        gap: 80
      });
      const se = f;
      (_a2 = se.resetAccumulation) == null ? void 0 : _a2.call(se);
      let re = 0, ge = 0;
      const xe = () => {
        var _a3;
        if (re >= U.length) return;
        const B = U[re];
        if (ge >= B.frames) {
          if (re++, ge = 0, re >= U.length) return;
          (_a3 = se.resetAccumulation) == null ? void 0 : _a3.call(se), b.current = setTimeout(xe, U[re].gap);
          return;
        }
        R(D, B.tier), ge++;
        const ie = B.tier === "high" ? 60 : 30;
        b.current = setTimeout(xe, ie);
      };
      xe();
    }, [
      I,
      R,
      f
    ]);
    return c.useEffect(() => (Ut = e.current, () => {
      Ut === e.current && (Ut = null);
    }), []), c.useEffect(() => (Cn = () => {
      const D = w.current;
      D && R(D, "standard");
    }, () => {
      Cn = null;
    }), [
      R
    ]), c.useEffect(() => {
      const D = (L) => {
        w.current = L, W(L);
      };
      return ao(D), Zt ? D(Zt) : jn == null ? void 0 : jn(), () => {
        ao(null);
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
      if (!f || o === h.current) return;
      h.current = o;
      const D = Oi[o] ?? 0, L = f;
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
      const D = j.current;
      if (n === D.enabled && s === D.depth && a === D.normal && r === D.silhouette && l === D.crease && d === D.boundary && p === D.silhouetteWidth && g === D.creaseWidth && u === D.boundaryWidth && x === D.softness) return;
      j.current = {
        enabled: n,
        depth: s,
        normal: a,
        silhouette: r,
        crease: l,
        boundary: d,
        silhouetteWidth: p,
        creaseWidth: g,
        boundaryWidth: u,
        softness: x
      };
      const L = f;
      typeof L.setEdgeDetection == "function" && L.setEdgeDetection(n, s, a), typeof L.setEdgeStyle == "function" ? L.setEdgeStyle(r, l, d, 0.08, 0.08, 0.1, 1, 0.12, 0.12, 0.14, 1, 0.06, 0.06, 0.08, 1, p, g, u, x) : Ke.debug("gpu", "setEdgeStyle not available - WASM may need rebuild"), w.current && W(w.current);
    }, [
      n,
      s,
      a,
      r,
      l,
      d,
      p,
      g,
      u,
      x,
      f,
      W
    ]), c.useEffect(() => {
      if (!f) return;
      const D = S.current;
      if (n === D.stylize) return;
      S.current = {
        stylize: n
      };
      const L = f;
      if (typeof L.setPathTrace != "function") {
        Ke.debug("gpu", "setPathTrace not available - WASM may need rebuild");
        return;
      }
      L.setPathTrace(Bi, n), w.current && W(w.current);
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
  const $i = Math.PI / 7, Wi = 0.25, Gi = 6, Hi = 40;
  function Yi(e, t, o, n) {
    o.copy(e);
    const s = Ui.copy(t).sub(e), a = s.length();
    a < 1e-6 ? s.set(0, -1, 0) : s.divideScalar(a);
    const r = Math.max(Gi, Math.min(Hi, a * Wi)), l = Math.tan($i) * r, d = Xi.set(0, 0, 1);
    Math.abs(s.dot(d)) > 0.98 && d.set(0, 1, 0);
    const p = qi.crossVectors(s, d).normalize(), g = Ki.crossVectors(p, s).normalize(), u = Zi.copy(e).addScaledVector(s, r), x = Ji.copy(p).multiplyScalar(l), f = Qi.copy(g).multiplyScalar(l);
    n[0].copy(u).add(x).add(f), n[1].copy(u).sub(x).add(f), n[2].copy(u).sub(x).sub(f), n[3].copy(u).add(x).sub(f);
  }
  const Ui = new E(), Xi = new E(), qi = new E(), Ki = new E(), Zi = new E(), Ji = new E(), Qi = new E(), ea = 8, ta = ea * 2;
  function na({ participant: e, goal: t }) {
    const o = Pe((g) => g.invalidate), n = c.useRef(new E(...t.position)), s = c.useRef(new E(...t.target)), a = c.useRef(new E()), r = c.useRef([
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
      const g = new ft(), u = new Float32Array(ta * 3);
      return g.setAttribute("position", new $e(u, 3)), g;
    }, []), d = c.useMemo(() => new Ws({
      color: e.color,
      transparent: true,
      opacity: 0.85,
      depthTest: true
    }), [
      e.color
    ]);
    c.useEffect(() => () => {
      l.dispose(), d.dispose();
    }, [
      l,
      d
    ]);
    const p = c.useRef(null);
    return Qe(() => {
      const g = oa.set(t.position[0], t.position[1], t.position[2]), u = sa.set(t.target[0], t.target[1], t.target[2]), x = 0.15;
      n.current.lerp(g, x), s.current.lerp(u, x), Yi(n.current, s.current, a.current, r.current);
      const f = l.getAttribute("position"), y = a.current, h = r.current;
      for (let m = 0; m < 4; m++) {
        const w = h[m], b = h[(m + 1) % 4];
        f.setXYZ(m * 2, w.x, w.y, w.z), f.setXYZ(m * 2 + 1, b.x, b.y, b.z);
      }
      for (let m = 0; m < 4; m++) {
        f.setXYZ(8 + m * 2, y.x, y.y, y.z);
        const w = h[m];
        f.setXYZ(8 + m * 2 + 1, w.x, w.y, w.z);
      }
      f.needsUpdate = true, l.computeBoundingSphere(), p.current && p.current.position.copy(y);
      const j = n.current.distanceToSquared(g), S = s.current.distanceToSquared(u);
      (j > 1e-4 || S > 1e-4) && o();
    }), i.jsxs("group", {
      children: [
        i.jsx("lineSegments", {
          geometry: l,
          material: d
        }),
        i.jsx("group", {
          ref: p,
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
  const oa = new E(), sa = new E();
  function ra() {
    const e = zt((s) => s.participants), t = $((s) => s.followMode), o = $((s) => s.followingParticipantId);
    if (t === "free") return null;
    const n = [];
    return e.forEach((s) => {
      s.id !== kn && s.camera && (t === "lock" && o === s.id || n.push(i.jsx(na, {
        participant: s,
        goal: s.camera
      }, s.id)));
    }), i.jsx(i.Fragment, {
      children: n
    });
  }
  function ia() {
    const e = Pe((n) => n.camera), t = Pe((n) => n.controls), o = c.useRef(null);
    c.useEffect(() => {
      function n() {
        const { selectedPartIds: f } = $.getState();
        if (f.size === 0) return;
        const y = De.getState().scene, h = oe.getState().parts;
        if (!y) return;
        const j = new rt();
        let S = false;
        for (const [R, I] of y.parts.entries()) {
          const _ = h[R];
          if (!_ || !f.has(_.id)) continue;
          const W = I.mesh.positions;
          for (let D = 0; D < W.length; D += 3) j.expandByPoint(new E(W[D], W[D + 1], W[D + 2]));
          S = true;
        }
        if (!S) return;
        const m = new E();
        j.getCenter(m);
        const w = new E();
        j.getSize(w);
        const P = Math.max(w.x, w.y, w.z, 1) * 2, C = new E().copy(e.position).sub(t && "target" in t && t.target ? t.target : new E(0, 0, 0)).normalize();
        e.position.copy(m).addScaledVector(C, P), t && "target" in t && t.target && t.target.copy(m);
      }
      function s() {
        const f = De.getState().scene;
        if (!f) return null;
        const y = new rt(), h = new E();
        if (f.instances && f.instances.length > 0) for (const j of f.instances) {
          const S = j.transform, m = j.mesh.positions;
          for (let w = 0; w < m.length; w += 3) {
            const b = m[w], P = m[w + 1], C = m[w + 2];
            S ? h.set(b * S.scale.x + S.translation.x, P * S.scale.y + S.translation.y, C * S.scale.z + S.translation.z) : h.set(b, P, C), y.expandByPoint(h);
          }
        }
        else {
          if (f.parts.length === 0) return null;
          for (const j of f.parts) {
            const S = j.mesh.positions;
            for (let m = 0; m < S.length; m += 3) y.expandByPoint(new E(S[m], S[m + 1], S[m + 2]));
          }
        }
        return y.isEmpty() ? null : y;
      }
      function a() {
        const f = s(), y = new E();
        let h = 150;
        if (f) {
          f.getCenter(y);
          const S = new E();
          f.getSize(S), h = Math.max(S.x, S.y, S.z, 50) * 2;
        }
        const j = h / Math.sqrt(3);
        e.position.set(y.x + j, y.y + j, y.z + j), t && "target" in t && t.target && t.target.copy(y);
      }
      function r() {
        const f = s(), y = new E();
        let h = 150;
        if (f) {
          f.getCenter(y);
          const w = new E();
          f.getSize(w), h = Math.max(w.x, w.y, w.z, 50) * 2;
        }
        const j = new E(y.x, y.z, -y.y), S = t && "target" in t && t.target ? t.target : new E(0, 0, 0), m = new E().copy(e.position).sub(S);
        m.lengthSq() < 1e-6 && m.set(1, 1, 1), m.normalize(), e.position.copy(j).addScaledVector(m, h), t && "target" in t && t.target && t.target.copy(j);
      }
      function l() {
        const f = s(), y = new E();
        let h = 150;
        if (f) {
          f.getCenter(y);
          const j = new E();
          f.getSize(j), h = Math.max(j.x, j.y, j.z, 50) * 2;
        }
        e.position.set(y.x, y.y, y.z + h), t && "target" in t && t.target && t.target.copy(y);
      }
      function d() {
        const f = s(), y = new E();
        let h = 150;
        if (f) {
          f.getCenter(y);
          const j = new E();
          f.getSize(j), h = Math.max(j.x, j.y, j.z, 50) * 2;
        }
        e.position.set(y.x, y.y - h, y.z), t && "target" in t && t.target && t.target.copy(y);
      }
      function p() {
        const f = s(), y = new E();
        let h = 150;
        if (f) {
          f.getCenter(y);
          const j = new E();
          f.getSize(j), h = Math.max(j.x, j.y, j.z, 50) * 2;
        }
        e.position.set(y.x + h, y.y, y.z), t && "target" in t && t.target && t.target.copy(y);
      }
      window.addEventListener("vcad:focus-selection", n), window.addEventListener("vcad:camera-isometric", a), window.addEventListener("vcad:camera-top", l), window.addEventListener("vcad:camera-front", d), window.addEventListener("vcad:camera-right", p);
      const g = () => {
        var _a2;
        if (!t || !("target" in t) || !t.target || typeof window < "u" && new URLSearchParams(window.location.search).has("at")) return;
        const f = oe.getState().documentId, y = De.getState().scene;
        !f || o.current === f || !(y && (y.parts.some((j) => j.mesh.indices.length > 0) || (((_a2 = y.instances) == null ? void 0 : _a2.some((j) => j.mesh.indices.length > 0)) ?? false))) || (o.current = f, r());
      };
      g();
      const u = oe.subscribe(g), x = De.subscribe(g);
      return () => {
        window.removeEventListener("vcad:focus-selection", n), window.removeEventListener("vcad:camera-isometric", a), window.removeEventListener("vcad:camera-top", l), window.removeEventListener("vcad:camera-front", d), window.removeEventListener("vcad:camera-right", p), u(), x();
      };
    }, [
      e,
      t
    ]);
  }
  function aa() {
    const e = Pe((s) => s.gl), t = Pe((s) => s.invalidate), [o, n] = c.useState(false);
    return c.useEffect(() => {
      const s = e.domElement;
      if (!s) return;
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
      }, d = () => {
        clearTimeout(a), n(false);
      };
      return s.addEventListener("webglcontextlost", l, false), s.addEventListener("webglcontextrestored", d, false), () => {
        clearTimeout(a), s.removeEventListener("webglcontextlost", l, false), s.removeEventListener("webglcontextrestored", d, false);
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
  function ca() {
    const e = Yt((a) => a.inputDevice), t = Yt((a) => a.detectedDevice), o = Yt((a) => a.setDetectedDevice), n = c.useRef([]), s = c.useRef(false);
    c.useEffect(() => {
      if (e !== "auto" || t !== null) {
        s.current = true;
        return;
      }
      s.current = false, n.current = [];
      const a = (r) => {
        if (s.current || (n.current.push({
          deltaMode: r.deltaMode,
          hasHorizontal: Math.abs(r.deltaX) > 0.5,
          deltaY: Math.abs(r.deltaY)
        }), n.current.length < 5)) return;
        s.current = true;
        const l = n.current;
        if (l.some((u) => u.deltaMode === 1)) {
          o("mouse");
          return;
        }
        if (l.filter((u) => u.hasHorizontal).length >= 2) {
          o("trackpad");
          return;
        }
        l.reduce((u, x) => u + x.deltaY, 0) / l.length < 20 ? o("trackpad") : o("mouse");
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
  function la() {
    var _a2;
    const e = c.useRef(null), t = c.useRef(0), o = c.useRef([]), n = oe((m) => m.document.joints), s = oe((m) => m.setJointState), a = (n == null ? void 0 : n.map((m) => m.id).join(",")) ?? "", r = Ye((m) => m.mode), l = Ye((m) => m.timestep), d = Ye((m) => m.playbackSpeed), p = Ye((m) => m.setPhysicsAvailable), g = Ye((m) => m.setJointStates), u = Ye((m) => m.setObservation), x = Ye((m) => m.setMode);
    c.useEffect(() => {
      Ln().then((m) => {
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
        if (!(!await Ln() || !m)) try {
          const P = oe.getState().document, C = [], R = await hs.create(P, {
            endEffectorIds: C,
            dt: 1 / 240,
            substeps: 4
          });
          if (!m) {
            R.close();
            return;
          }
          e.current && e.current.close(), e.current = R;
          const I = oe.getState().document.joints ?? [];
          o.current = I.map((D) => D.id);
          const _ = I.map((D) => ({
            id: D.id,
            name: D.name ?? D.id,
            position: D.state ?? 0,
            velocity: 0,
            torque: 0,
            targetVelocity: 0,
            limits: null
          }));
          g(_);
          const W = R.observe();
          u({
            jointPositions: W.joint_positions,
            jointVelocities: W.joint_velocities,
            endEffectorPoses: W.end_effector_poses
          }), console.log(`[Physics] Initialized with ${R.numJoints} joints, ${R.actionDim} action dim`);
        } catch (P) {
          console.error("[Physics] Failed to initialize:", P);
        }
      }
      return w(), () => {
        m = false;
      };
    }, [
      a,
      g,
      u
    ]), c.useEffect(() => () => {
      e.current && (e.current.close(), e.current = null);
    }, []);
    const f = c.useCallback(() => Ye.getState().jointStates.map((w) => w.position), []), y = c.useCallback(() => Ye.getState().jointStates.map((w) => w.torque), []), h = c.useCallback(() => Ye.getState().jointStates.map((w) => w.targetVelocity ?? 0), []), j = c.useCallback((m) => {
      u({
        jointPositions: m.joint_positions,
        jointVelocities: m.joint_velocities,
        endEffectorPoses: m.end_effector_poses
      });
      const b = Ye.getState().jointStates.map((I, _) => ({
        ...I,
        position: m.joint_positions[_] ?? I.position,
        velocity: m.joint_velocities[_] ?? I.velocity
      }));
      g(b);
      const P = oe.getState().document, C = structuredClone(P);
      o.current.forEach((I, _) => {
        var _a3;
        const W = (_a3 = C.joints) == null ? void 0 : _a3.find((D) => D.id === I);
        W && m.joint_positions[_] !== void 0 && (W.state = m.joint_positions[_]);
      });
      const R = In(C);
      De.getState().updateInstanceTransforms(R);
    }, [
      u,
      g
    ]), { invalidate: S } = Pe();
    return Qe((m, w) => {
      const b = e.current;
      if (b && !(r === "off" || r === "paused")) {
        if (r === "stepping") {
          const P = Ye.getState().actionType, C = P === "torque" ? y() : P === "velocity" ? h() : f(), R = b.step(P, C);
          j(R.observation), x("paused");
          return;
        }
        if (r === "running") {
          const P = w * d;
          t.current += P;
          const C = Ye.getState().actionType;
          for (; t.current >= l; ) {
            const R = C === "torque" ? y() : C === "velocity" ? h() : f(), I = b.step(C, R);
            Math.random() < 0.01 && console.log("[Physics] actionType:", C, "actions:", R, "positions:", I.observation.joint_positions), j(I.observation), t.current -= l;
          }
          S();
        }
      }
    }), c.useEffect(() => {
      if (r === "off" && e.current) {
        const m = Ye.getState().jointStates;
        o.current.forEach((b, P) => {
          var _a3;
          const C = (_a3 = m[P]) == null ? void 0 : _a3.position;
          C !== void 0 && s(b, C, true);
        });
        const w = e.current.reset();
        j(w), t.current = 0;
      }
    }, [
      r,
      j,
      s
    ]), {
      isInitialized: !!e.current,
      numJoints: ((_a2 = e.current) == null ? void 0 : _a2.numJoints) ?? 0
    };
  }
  function ua() {
    const e = c.useRef(null), { invalidate: t } = Pe();
    c.useEffect(() => Ot.subscribe(() => {
      t();
    }), [
      t
    ]), Qe((o, n) => {
      const s = oe.getState().document.timeline;
      if (!s || s.tracks.length === 0) return;
      const a = Ot.getState();
      if (!a.visible) {
        e.current = null;
        return;
      }
      const r = Ye.getState().mode;
      if (r === "running" || r === "stepping") return;
      const l = Math.max(s.durationS, 1e-6);
      let d = a.timeS;
      if (a.playing ? (d += n * a.speed, d >= l && (a.loop ? d %= l : (d = l, Ot.setState({
        playing: false
      }))), Ot.setState({
        timeS: d
      })) : d = Math.min(Math.max(d, 0), l), e.current === d) return;
      e.current = d;
      const p = sr(s, d);
      if (p.size === 0) return;
      const g = oe.getState().document, u = structuredClone(g);
      let x = false;
      for (const y of u.joints ?? []) {
        const h = p.get(y.id);
        h !== void 0 && (y.state = h, x = true);
      }
      if (!x) return;
      const f = In(u);
      De.getState().updateInstanceTransforms(f), t();
    });
  }
  const da = [
    "video/mp4;codecs=avc1.640028",
    "video/mp4;codecs=avc1.42E01E",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm"
  ], fa = 12e6, pa = 60, ma = 250;
  function ha() {
    if (typeof MediaRecorder > "u") return null;
    for (const e of da) if (MediaRecorder.isTypeSupported(e)) return e;
    return null;
  }
  function ga(e) {
    return e.startsWith("video/mp4") ? "mp4" : e.startsWith("video/webm") ? "webm" : "bin";
  }
  function xa(e) {
    return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "untitled";
  }
  function ya() {
    return (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
  }
  function va() {
    const { gl: e } = Pe(), t = tt((a) => a.status), o = $((a) => a.renderMode), n = Ye((a) => a.mode), s = c.useRef({
      recorder: null,
      chunks: [],
      mimeType: null,
      rafId: null,
      raytraceDriving: false
    });
    c.useEffect(() => {
      const a = tt.getState(), r = s.current;
      if (t === "recording" && !r.recorder) {
        const l = ha();
        if (!l) {
          a.setError("MediaRecorder is not supported in this browser.");
          return;
        }
        const d = _i(), p = o === "raytrace" && d !== null;
        o === "raytrace" && !p && Ke.warn("app", "Raytrace overlay not mounted at record start; falling back to WebGL canvas.");
        const u = p ? d : e.domElement;
        if (typeof u.captureStream != "function") {
          a.setError("Canvas.captureStream is not supported in this browser.");
          return;
        }
        const x = u.captureStream(pa);
        let f;
        try {
          f = new MediaRecorder(x, {
            mimeType: l,
            videoBitsPerSecond: fa
          });
        } catch (y) {
          a.setError(y instanceof Error ? y.message : "Failed to create MediaRecorder.");
          return;
        }
        r.chunks = [], r.recorder = f, r.mimeType = l, r.raytraceDriving = p, f.ondataavailable = (y) => {
          y.data && y.data.size > 0 && (r.chunks.push(y.data), tt.getState().addBytes(y.data.size));
        }, f.onerror = (y) => {
          var _a2;
          const j = ((_a2 = y.error) == null ? void 0 : _a2.message) ?? "MediaRecorder error";
          Ke.warn("app", `Recorder error: ${j}`), tt.getState().setError(j);
        }, f.onstop = () => {
          const y = r.chunks, h = r.mimeType ?? "video/webm";
          if (r.chunks = [], r.recorder = null, r.mimeType = null, r.raytraceDriving = false, r.rafId !== null && (cancelAnimationFrame(r.rafId), r.rafId = null), y.length === 0) {
            tt.getState().reset();
            return;
          }
          const j = new Blob(y, {
            type: h
          }), S = oe.getState().documentName ?? "untitled", m = `vcad-sim-${xa(S)}-${ya()}.${ga(h)}`;
          gs(j, m), tt.getState().reset();
        };
        try {
          f.start(ma), tt.getState().setMimeType(l);
        } catch (y) {
          r.recorder = null, r.mimeType = null, r.raytraceDriving = false, a.setError(y instanceof Error ? y.message : "Failed to start recording.");
          return;
        }
        if (r.raytraceDriving) {
          const y = () => {
            s.current.raytraceDriving && (io(), s.current.rafId = requestAnimationFrame(y));
          };
          s.current.rafId = requestAnimationFrame(y);
        }
        return;
      }
      if (t === "saving" && r.recorder) {
        r.raytraceDriving = false, r.rafId !== null && (cancelAnimationFrame(r.rafId), r.rafId = null);
        try {
          r.recorder.state !== "inactive" && r.recorder.stop();
        } catch (l) {
          Ke.warn("app", `Recorder stop failed: ${l}`), tt.getState().reset();
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
      const a = s.current, r = a.recorder;
      if (r) if (n === "paused" && r.state === "recording") try {
        r.pause(), tt.getState().pause(), a.rafId !== null && (cancelAnimationFrame(a.rafId), a.rafId = null);
      } catch (l) {
        Ke.warn("app", `Recorder pause failed: ${l}`);
      }
      else if (n === "running" && r.state === "paused") try {
        if (r.resume(), tt.getState().resume(), a.raytraceDriving && a.rafId === null) {
          const l = () => {
            s.current.raytraceDriving && (io(), s.current.rafId = requestAnimationFrame(l));
          };
          a.rafId = requestAnimationFrame(l);
        }
      } catch (l) {
        Ke.warn("app", `Recorder resume failed: ${l}`);
      }
      else n === "off" && r.state !== "inactive" && tt.getState().stop();
    }, [
      n,
      t
    ]), c.useEffect(() => () => {
      const a = s.current;
      a.rafId !== null && (cancelAnimationFrame(a.rafId), a.rafId = null);
      const r = a.recorder;
      if (r && r.state !== "inactive") try {
        r.ondataavailable = null, r.onstop = null, r.onerror = null, r.stop();
      } catch {
      }
      a.recorder = null, a.chunks = [], a.mimeType = null, a.raytraceDriving = false;
    }, []);
  }
  function wa(e, t) {
    const o = e ?? {};
    return (o.shift ?? false) === (t.shift ?? false) && (o.ctrl ?? false) === (t.ctrl ?? false) && (o.meta ?? false) === (t.meta ?? false) && (o.alt ?? false) === (t.alt ?? false);
  }
  function ba(e) {
    return {
      shift: e.shiftKey,
      ctrl: e.ctrlKey,
      meta: e.metaKey,
      alt: e.altKey
    };
  }
  function Sa(e, t, o) {
    const s = [
      ...e.filter((a) => !a.device || a.device === o)
    ].sort((a, r) => {
      const l = (d) => Object.values(d ?? {}).filter(Boolean).length;
      return l(r.modifiers) - l(a.modifiers);
    });
    for (const a of s) if (wa(a.modifiers, t)) return a.action;
    return "none";
  }
  function Ma(e, t) {
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
    }, s = e.mouseBindings.filter((r) => !r.device || r.device === t), a = (r) => {
      var _a2;
      return ((_a2 = s.find((d) => {
        var _a3, _b, _c2, _d;
        return d.button === r && !((_a3 = d.modifiers) == null ? void 0 : _a3.shift) && !((_b = d.modifiers) == null ? void 0 : _b.ctrl) && !((_c2 = d.modifiers) == null ? void 0 : _c2.meta) && !((_d = d.modifiers) == null ? void 0 : _d.alt);
      })) == null ? void 0 : _a2.action) ?? "none";
    };
    return {
      LEFT: n(a("left")),
      MIDDLE: n(a("middle")),
      RIGHT: n(a("right"))
    };
  }
  const dn = 0.8;
  function Ea(e) {
    return Math.max(9, Ao(e) + 2);
  }
  function Pa(e, t) {
    if (t < 2) return dn;
    const o = e === "BCu" ? t - 1 : e === "FCu" ? 0 : Ao(e);
    return dn - 2 * dn * o / (t - 1);
  }
  const ja = {
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
    return (xs(e) ? Pa(e, o ?? Ea(e)) : ja[e] ?? 0) * (1 + t * 4);
  }
  function pt(e, t, o = 0, n) {
    return t / 2 + Dt(e, o, n);
  }
  new E();
  new E();
  function co(e, t, o) {
    let n = e.x, s = e.y;
    return o && t > 0 && (n = Math.round(n / t) * t, s = Math.round(s / t) * t), {
      x: n,
      y: s
    };
  }
  function Ca(e, t) {
    return Io(e, t).color;
  }
  function Xo(e, t) {
    return Io(e, t).visible;
  }
  const Ra = 120, lo = new We("#3b82f6"), ka = /* @__PURE__ */ new Set([
    "component",
    "silkscreen"
  ]), za = /* @__PURE__ */ new Set([
    "laminate",
    "substrate",
    "mask"
  ]);
  function uo(e, t, o) {
    if (!e || t <= 0) return 0;
    const n = e;
    return Dt(n, t, o) - Dt(n, 0, o);
  }
  function Ia(e, t, o) {
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
  function Aa({ pcb: e, layers: t, activeNet: o, hoveredNet: n, selection: s, explosion: a, showBoard: r }) {
    const { invalidate: l } = Pe(), [d, p] = c.useState([]), g = c.useRef(0), u = c.useMemo(() => An(e).length, [
      e
    ]);
    c.useEffect(() => {
      const h = ++g.current, j = setTimeout(() => {
        ys(e).then((S) => {
          g.current === h && (p(S), l());
        }).catch((S) => console.error("[PcbKernelBoard] preview meshes failed:", S));
      }, Ra);
      return () => clearTimeout(j);
    }, [
      e,
      l
    ]);
    const x = c.useMemo(() => d.filter((h) => !ka.has(h.role)).map((h, j) => {
      var _a2, _b, _c2;
      const S = new ft();
      S.setAttribute("position", new It(h.positions, 3)), h.normals.length === h.positions.length ? S.setAttribute("normal", new It(h.normals, 3)) : S.computeVertexNormals(), S.setIndex(h.indices);
      const m = h.alpha ?? 1, w = new Gs({
        color: new We(h.color[0], h.color[1], h.color[2]),
        metalness: h.metalness,
        roughness: h.roughness,
        envMapIntensity: 0.5,
        clearcoat: h.clearcoat ?? 0,
        clearcoatRoughness: h.clearcoat_roughness ?? 0,
        ...m < 1 ? {
          transparent: true,
          opacity: m,
          depthWrite: false,
          side: Xe
        } : {},
        ...(((_a2 = h.emissive) == null ? void 0 : _a2[0]) ?? 0) > 0 || (((_b = h.emissive) == null ? void 0 : _b[1]) ?? 0) > 0 || (((_c2 = h.emissive) == null ? void 0 : _c2[2]) ?? 0) > 0 ? {
          emissive: new We(h.emissive[0], h.emissive[1], h.emissive[2]),
          emissiveIntensity: 1
        } : {}
      });
      return {
        key: `${h.role}-${h.layer ?? "all"}-${j}`,
        role: h.role,
        layer: h.layer,
        geometry: S,
        material: w,
        entities: h.entities ?? []
      };
    }), [
      d
    ]);
    c.useEffect(() => () => x.forEach((h) => {
      h.geometry.dispose(), h.material.dispose();
    }), [
      x
    ]);
    const f = c.useMemo(() => {
      const h = [];
      for (const j of x) {
        if (j.entities.length === 0) continue;
        const S = j.entities.filter((I) => o != null && I.net === o || n != null && I.net === n || Ia(I, e, s));
        if (S.length === 0) continue;
        const m = j.geometry.getIndex();
        let w = 0;
        for (const I of S) w += I.count;
        const b = new Uint32Array(w);
        let P = 0;
        for (const I of S) for (let _ = 0; _ < I.count; _++) b[P++] = m.getX(I.start + _);
        const C = new ft();
        C.setAttribute("position", j.geometry.getAttribute("position"));
        const R = j.geometry.getAttribute("normal");
        R && C.setAttribute("normal", R), C.setIndex(new $e(b, 1)), h.push({
          key: `hl-${j.key}`,
          geometry: C
        });
      }
      return h;
    }, [
      x,
      e,
      o,
      n,
      s
    ]);
    c.useEffect(() => () => f.forEach((h) => h.geometry.dispose()), [
      f
    ]);
    const y = c.useMemo(() => {
      const h = /* @__PURE__ */ new Map();
      for (const j of x) h.set(`hl-${j.key}`, uo(j.layer, a, u));
      return h;
    }, [
      x,
      a,
      u
    ]);
    return i.jsxs("group", {
      children: [
        x.map((h) => za.has(h.role) && !r || h.layer && !Xo(t, h.layer) ? null : i.jsx("mesh", {
          geometry: h.geometry,
          material: h.material,
          position: [
            0,
            0,
            uo(h.layer, a, u)
          ],
          renderOrder: h.role === "mask" ? 1 : 0
        }, h.key)),
        f.map((h) => i.jsx("mesh", {
          geometry: h.geometry,
          position: [
            0,
            0,
            y.get(h.key) ?? 0
          ],
          renderOrder: 2,
          children: i.jsx("meshStandardMaterial", {
            color: lo,
            emissive: lo,
            emissiveIntensity: 0.55,
            roughness: 0.35,
            metalness: 0.2,
            polygonOffset: true,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -2
          })
        }, h.key))
      ]
    });
  }
  function Da(e, t, o, n, s, a) {
    const r = pt(e.layer, s, a), l = Math.cos(n), d = Math.sin(n), p = (g, u) => {
      const x = g * l - u * d + t, f = g * d + u * l + o;
      return new E(x, f, r);
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
        const g = p(e.start.x, e.start.y), u = p(e.end.x, e.start.y), x = p(e.end.x, e.end.y), f = p(e.start.x, e.end.y);
        return {
          points: [
            g,
            u,
            x,
            f,
            g
          ],
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      case "Circle": {
        const u = [];
        for (let x = 0; x <= 24; x++) {
          const f = x / 24 * Math.PI * 2, y = e.center.x + Math.cos(f) * e.radius, h = e.center.y + Math.sin(f) * e.radius;
          u.push(p(y, h));
        }
        return {
          points: u,
          color: "#FFEB3B",
          layer: e.layer
        };
      }
      case "Polygon": {
        const g = e.vertices.map((u) => p(u.x, u.y));
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
  function Ta({ footprint: e, layers: t, boardThickness: o, highlight: n, explosion: s, interfering: a }) {
    const r = (e.rotation ?? 0) * Math.PI / 180, l = c.useMemo(() => e.graphics ? e.graphics.map((p) => Da(p, e.position.x, e.position.y, r, o, s)).filter((p) => p !== null && Xo(t, p.layer)) : [], [
      e,
      t,
      o,
      r,
      s
    ]), d = pt(e.front !== false ? "FSilkS" : "BSilkS", o, s);
    return i.jsxs("group", {
      children: [
        l.map((p, g) => i.jsxs("line", {
          children: [
            i.jsx("bufferGeometry", {
              children: i.jsx("bufferAttribute", {
                attach: "attributes-position",
                args: [
                  new Float32Array(p.points.flatMap((u) => [
                    u.x,
                    u.y,
                    u.z
                  ])),
                  3
                ]
              })
            }),
            i.jsx("lineBasicMaterial", {
              color: a ? "#ef4444" : n ? "#3b82f6" : Ca(t, p.layer),
              linewidth: 1
            })
          ]
        }, g)),
        i.jsx(Jo, {
          position: [
            e.position.x,
            e.position.y,
            d + 0.05
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
  const fo = new We("#ef4444"), Fa = new We(0, 0, 0);
  function _a() {
    const e = ue((a) => a.componentBodies), t = ue((a) => a.showComponentBodies), o = ue((a) => a.interferingFootprints), n = c.useMemo(() => new Set(o), [
      o
    ]), s = c.useMemo(() => e.map((a, r) => {
      const l = new ft();
      l.setAttribute("position", new It(a.positions, 3)), a.normals.length === a.positions.length && l.setAttribute("normal", new It(a.normals, 3)), l.setIndex(a.indices), a.normals.length !== a.positions.length && l.computeVertexNormals();
      const d = a.emissive ?? [
        0,
        0,
        0
      ];
      return {
        key: `body-${r}`,
        geo: l,
        ref: a.footprint_ref,
        color: new We(a.color[0], a.color[1], a.color[2]),
        metalness: a.metalness,
        roughness: a.roughness ?? 0.45,
        emissive: new We(d[0], d[1], d[2]),
        emissiveOn: d[0] > 0 || d[1] > 0 || d[2] > 0
      };
    }), [
      e
    ]);
    return c.useEffect(() => () => s.forEach((a) => a.geo.dispose()), [
      s
    ]), !t || s.length === 0 ? null : i.jsx("group", {
      children: s.map((a) => {
        const r = n.has(a.ref);
        return i.jsx("mesh", {
          geometry: a.geo,
          castShadow: true,
          receiveShadow: true,
          children: i.jsx("meshStandardMaterial", {
            color: r ? fo : a.color,
            metalness: r ? 0.1 : a.metalness,
            roughness: r ? 0.45 : a.roughness,
            emissive: r ? fo : a.emissiveOn ? a.emissive : Fa,
            emissiveIntensity: r ? 0.45 : a.emissiveOn ? 2.5 : 0
          })
        }, a.key);
      })
    });
  }
  const La = "#3b82f6", Oa = "#555555";
  function Na({ pcb: e, netlist: t, activeNet: o, hoveredNet: n, boardThickness: s, explosion: a, onStartRoute: r, onHoverNet: l }) {
    const [d, p] = c.useState([]);
    c.useEffect(() => {
      if (!t) {
        p([]);
        return;
      }
      let u = false;
      return vs(e, t).then((x) => {
        u || p(x);
      }), () => {
        u = true;
      };
    }, [
      e,
      t
    ]);
    const g = pt("FCu", s, a) + 0.1;
    return d.length === 0 ? null : i.jsx("group", {
      children: d.map((u, x) => {
        const y = u.net === o || u.net === n ? La : Oa, h = new Float32Array([
          u.from.x,
          u.from.y,
          g,
          u.to.x,
          u.to.y,
          g
        ]);
        return i.jsxs("line", {
          onClick: (j) => {
            j.stopPropagation(), r(u.fp_ref, u.pad_num, u.net);
          },
          onPointerEnter: () => l(u.net),
          onPointerLeave: () => l(null),
          children: [
            i.jsx("bufferGeometry", {
              children: i.jsx("bufferAttribute", {
                attach: "attributes-position",
                args: [
                  h,
                  3
                ]
              })
            }),
            i.jsx("lineDashedMaterial", {
              color: y,
              dashSize: 0.5,
              gapSize: 0.5,
              linewidth: 1
            })
          ]
        }, x);
      })
    });
  }
  const po = "#3b82f6";
  function Ba({ pcb: e, routeStartPad: t, routePreview: o, boardThickness: n, activeLayer: s, explosion: a }) {
    if (!t || o.length === 0) return null;
    const r = e.footprints.find((w) => w.ref === t.fpRef), l = r == null ? void 0 : r.pads.find((w) => w.number === t.padNum);
    if (!r || !l) return null;
    const d = {
      x: r.position.x + l.position.x,
      y: r.position.y + l.position.y
    }, p = o[o.length - 1], g = pt(s, n, a, An(e).length) + 0.02, u = e.rules.defaultRules.traceWidth, x = e.rules.defaultRules.clearance, f = p.x - d.x, y = p.y - d.y, h = Math.sqrt(f * f + y * y);
    if (h < 0.01) return null;
    const j = Math.atan2(y, f), S = (d.x + p.x) / 2, m = (d.y + p.y) / 2;
    return i.jsxs("group", {
      children: [
        i.jsxs("mesh", {
          position: [
            S,
            m,
            g - 0.01
          ],
          rotation: [
            0,
            0,
            j
          ],
          children: [
            i.jsx("boxGeometry", {
              args: [
                h,
                u + x * 2,
                0.02
              ]
            }),
            i.jsx("meshBasicMaterial", {
              color: po,
              transparent: true,
              opacity: 0.15
            })
          ]
        }),
        i.jsxs("mesh", {
          position: [
            S,
            m,
            g
          ],
          rotation: [
            0,
            0,
            j
          ],
          children: [
            i.jsx("boxGeometry", {
              args: [
                h,
                u,
                0.035
              ]
            }),
            i.jsx("meshBasicMaterial", {
              color: po,
              transparent: true,
              opacity: 0.7
            })
          ]
        })
      ]
    });
  }
  function Va({ violation: e, z: t }) {
    const o = c.useRef(null);
    Qe(({ clock: s }) => {
      if (!o.current) return;
      const a = s.getElapsedTime(), r = 0.6 + 0.4 * Math.sin(a * 3);
      o.current.scale.set(r, r, 1);
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
          side: Xe
        })
      ]
    });
  }
  function $a({ violations: e, boardThickness: t, explosion: o }) {
    if (e.length === 0) return null;
    const n = pt("FCu", t, o) + 0.15;
    return i.jsx("group", {
      children: e.map((s, a) => i.jsx(Va, {
        violation: s,
        z: n
      }, a))
    });
  }
  const Wa = {
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
  function Ga(e, t, o) {
    if (Number(o.node) !== t) return null;
    if (o.kind === "pcbFootprint") {
      const n = e.footprints.find((s) => s.ref === o.ref);
      if (!n) return null;
      if (o.pad) {
        const s = n.pads.find((r) => r.number === o.pad);
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
  function Ha(e) {
    return Object.values(e).filter((t) => t != null && typeof t == "object" && "kind" in t);
  }
  function Ya(e) {
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
  function Ua({ pcb: e, nodeId: t, constraints: o, pickedTargets: n, boardThickness: s, explosion: a }) {
    const r = pt("FCu", s, a) + 0.12, l = c.useMemo(() => o.map((p) => {
      const u = Ha(p.kind).map((h) => Ga(e, t, h)).filter((h) => h !== null);
      if (u.length === 0) return null;
      const x = {
        x: u.reduce((h, j) => h + j.x, 0) / u.length,
        y: u.reduce((h, j) => h + j.y, 0) / u.length
      }, f = p.kind.type, y = p.kind.value;
      return {
        c: p,
        type: f,
        value: y,
        points: u,
        mid: x
      };
    }).filter((p) => p !== null), [
      o,
      e,
      t
    ]), d = c.useMemo(() => n.map((p) => {
      var _a2;
      return p.kind === "footprint" ? (_a2 = e.footprints.find((g) => g.ref === p.ref)) == null ? void 0 : _a2.position : e.outline.vertices[p.idx];
    }).filter((p) => p != null), [
      n,
      e
    ]);
    return l.length === 0 && d.length === 0 ? null : i.jsxs("group", {
      children: [
        l.map(({ c: p, type: g, value: u, points: x, mid: f }) => {
          const y = u !== void 0, h = p.driven === true;
          return i.jsxs("group", {
            children: [
              y && x.length === 2 && i.jsx(Ae, {
                points: [
                  [
                    x[0].x,
                    x[0].y,
                    r
                  ],
                  [
                    x[1].x,
                    x[1].y,
                    r
                  ]
                ],
                color: h ? "#9ca3af" : "#e5e7eb",
                lineWidth: 1,
                dashed: h,
                dashSize: 0.5,
                gapSize: 0.35,
                transparent: true,
                opacity: 0.75
              }),
              i.jsx(it, {
                position: [
                  f.x,
                  f.y,
                  r
                ],
                center: true,
                zIndexRange: [
                  20,
                  0
                ],
                children: i.jsx("div", {
                  style: Ya(h),
                  children: y ? `${typeof u == "number" ? u.toFixed(2) : String(u)}${g === "angle" || g === "rotation" ? "\xB0" : ""}${h ? " (ref)" : ""}` : Wa[g] ?? g
                })
              })
            ]
          }, p.id);
        }),
        d.map((p, g) => i.jsxs("mesh", {
          position: [
            p.x,
            p.y,
            r + 0.02
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
        }, `pick-${g}`))
      ]
    });
  }
  function Xa({ showBoard: e = true } = {}) {
    const { invalidate: t } = Pe(), o = c.useRef(null), n = c.useRef(null), s = Tt((V) => V.activeBoardNodeId), a = oe((V) => V.document), r = s != null ? Dn(a, s) : null, l = ue((V) => V.selection), d = ue((V) => V.hoveredNet), p = ue((V) => V.netlist), g = ws(), u = ue((V) => V.pcbGridSize), x = ue((V) => V.pcbSnapToGrid), f = ue((V) => V.pcbActiveLayer), y = ue((V) => V.drcViolations), h = ue((V) => V.routeActive), j = ue((V) => V.routePreview), S = ue((V) => V.routeStartPad), m = ue((V) => V.pcbTool), w = ue((V) => V.pcbDragging), b = ue((V) => V.stackupExplosion), P = ue((V) => V.interferingFootprints), C = ue((V) => V.select), R = ue((V) => V.setHoveredNet), I = ue((V) => V.startRouteFromRatsnest), _ = ue((V) => V.updateRoutePreview), W = ue((V) => V.startPcbDrag), D = ue((V) => V.cancelPcbDrag), L = ue((V) => V.pcbConstraintTargets), F = ue((V) => V.pushConstraintTarget), U = ue((V) => V.setPcbSolveStatus), se = oe((V) => V.solveDesignConstraints), re = oe((V) => V.document.constraints), ge = oe((V) => V.moveFootprint), xe = oe((V) => V.removeTrace), B = oe((V) => V.removeVia), ie = c.useMemo(() => l.type === "net" ? l.netId : l.type === "trace" || l.type === "via" || l.type === "pad" ? l.net : null, [
      l
    ]), je = c.useMemo(() => l.type === "footprint" || l.type === "component" ? l.ref : null, [
      l
    ]), ee = c.useRef(null), Ee = c.useCallback((V) => {
      if (!r || V.button !== 0) return;
      V.stopPropagation();
      const Oe = V.point, Ue = n.current ? n.current.worldToLocal(Oe.clone()) : Oe, ae = co(Ue, u, x);
      if (m === "move") for (let Q = r.footprints.length - 1; Q >= 0; Q--) {
        const X = r.footprints[Q], we = 5, he = 5;
        if (ae.x >= X.position.x - we && ae.x <= X.position.x + we && ae.y >= X.position.y - he && ae.y <= X.position.y + he) {
          W(Q, X.position), ee.current = {
            fpIdx: Q,
            startWorld: ae
          };
          return;
        }
      }
      if (m === "constrain") {
        for (let Q = r.footprints.length - 1; Q >= 0; Q--) {
          const X = r.footprints[Q], we = 5, he = 5;
          if (ae.x >= X.position.x - we && ae.x <= X.position.x + we && ae.y >= X.position.y - he && ae.y <= X.position.y + he) {
            F({
              kind: "footprint",
              ref: X.ref
            });
            return;
          }
        }
        for (let Q = 0; Q < r.outline.vertices.length; Q++) {
          const X = r.outline.vertices[Q];
          if (Math.hypot(ae.x - X.x, ae.y - X.y) < 1.5) {
            F({
              kind: "outlineVertex",
              idx: Q
            });
            return;
          }
        }
        return;
      }
      if (m === "select") {
        for (let Q = r.footprints.length - 1; Q >= 0; Q--) {
          const X = r.footprints[Q];
          for (const He of X.pads) {
            const Ie = X.position.x + He.position.x, Ze = X.position.y + He.position.y;
            if (Math.sqrt((ae.x - Ie) ** 2 + (ae.y - Ze) ** 2) < 1.5) {
              C({
                type: "pad",
                fpRef: X.ref,
                padNum: He.number,
                net: He.net ?? ""
              });
              return;
            }
          }
          const we = 5, he = 5;
          if (ae.x >= X.position.x - we && ae.x <= X.position.x + we && ae.y >= X.position.y - he && ae.y <= X.position.y + he) {
            C({
              type: "footprint",
              ref: X.ref
            });
            return;
          }
        }
        for (let Q = 0; Q < r.traces.length; Q++) {
          const X = r.traces[Q], we = X.end.x - X.start.x, he = X.end.y - X.start.y, He = we * we + he * he;
          if (He < 1e-6) continue;
          let Ie = ((ae.x - X.start.x) * we + (ae.y - X.start.y) * he) / He;
          Ie = Math.max(0, Math.min(1, Ie));
          const Ze = X.start.x + Ie * we, Te = X.start.y + Ie * he;
          if (Math.sqrt((ae.x - Ze) ** 2 + (ae.y - Te) ** 2) < X.width / 2 + 0.5) {
            C({
              type: "trace",
              idx: Q,
              net: X.net
            });
            return;
          }
        }
        for (let Q = 0; Q < r.vias.length; Q++) {
          const X = r.vias[Q];
          if (Math.sqrt((ae.x - X.position.x) ** 2 + (ae.y - X.position.y) ** 2) < X.diameter / 2 + 0.3) {
            C({
              type: "via",
              idx: Q,
              net: X.net
            });
            return;
          }
        }
        C({
          type: "none"
        });
      }
      if (m === "delete") {
        for (let Q = 0; Q < r.traces.length; Q++) {
          const X = r.traces[Q], we = X.end.x - X.start.x, he = X.end.y - X.start.y, He = we * we + he * he;
          if (He < 1e-6) continue;
          let Ie = ((ae.x - X.start.x) * we + (ae.y - X.start.y) * he) / He;
          Ie = Math.max(0, Math.min(1, Ie));
          const Ze = X.start.x + Ie * we, Te = X.start.y + Ie * he;
          if (Math.sqrt((ae.x - Ze) ** 2 + (ae.y - Te) ** 2) < X.width / 2 + 0.5 && s != null) {
            xe(s, Q);
            return;
          }
        }
        for (let Q = 0; Q < r.vias.length; Q++) {
          const X = r.vias[Q];
          if (Math.sqrt((ae.x - X.position.x) ** 2 + (ae.y - X.position.y) ** 2) < X.diameter / 2 + 0.3 && s != null) {
            B(s, Q);
            return;
          }
        }
      }
      if (m === "route") for (const Q of r.footprints) for (const X of Q.pads) {
        const we = Q.position.x + X.position.x, he = Q.position.y + X.position.y;
        if (Math.sqrt((ae.x - we) ** 2 + (ae.y - he) ** 2) < 1.5) {
          ue.getState().startRoute(Q.ref, X.number, X.net ?? "");
          return;
        }
      }
    }, [
      r,
      m,
      u,
      x,
      s,
      C,
      W,
      xe,
      B
    ]), de = c.useCallback((V) => {
      if (!r) return;
      const Oe = V.point, Ue = n.current ? n.current.worldToLocal(Oe.clone()) : Oe, ae = co(Ue, u, x);
      if (w && s != null) {
        ge(s, w.fpIdx, {
          x: ae.x,
          y: ae.y,
          z: 0
        }), t();
        return;
      }
      h && (_([
        ae
      ]), t());
    }, [
      r,
      w,
      h,
      u,
      x,
      s,
      ge,
      _,
      t
    ]), be = c.useCallback(() => {
      if (w) {
        if (s != null && ((re == null ? void 0 : re.length) ?? 0) > 0 && r) {
          const V = r.footprints[w.fpIdx];
          if (V) {
            const Oe = se({
              extraFixed: [
                {
                  node: Number(s),
                  ref: V.ref
                }
              ]
            });
            if (Oe) {
              const Ue = Oe.groups.reduce((ae, Q) => ae + Q.dof, 0);
              U({
                converged: Oe.converged,
                dof: Ue,
                overConstrained: Oe.groups.some((ae) => ae.dof < 0)
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
      r,
      se,
      U
    ]);
    if (!r) return null;
    const _e = r.outline.thickness;
    let Ge = 1 / 0, Ne = -1 / 0, Se = 1 / 0, ze = -1 / 0;
    for (const V of r.outline.vertices) V.x < Ge && (Ge = V.x), V.x > Ne && (Ne = V.x), V.y < Se && (Se = V.y), V.y > ze && (ze = V.y);
    const me = isFinite(Ge) ? (Ge + Ne) / 2 : 0, Ce = isFinite(Se) ? (Se + ze) / 2 : 0, Le = pt("FCu", _e);
    return i.jsxs("group", {
      ref: n,
      children: [
        i.jsx(Ro, {
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
          cellSize: u,
          cellColor: "#333333",
          sectionSize: u * 10,
          sectionColor: "#444444",
          fadeDistance: 100,
          infiniteGrid: true
        }),
        i.jsx(Qo, {
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
        i.jsx(Aa, {
          pcb: r,
          layers: g,
          activeNet: ie,
          hoveredNet: d,
          selection: l,
          explosion: b,
          showBoard: e
        }),
        r.footprints.map((V, Oe) => i.jsx(Ta, {
          footprint: V,
          layers: g,
          boardThickness: _e,
          highlight: je === V.ref,
          interfering: P.includes(V.ref),
          explosion: b
        }, `fp-${Oe}`)),
        i.jsx(_a, {}),
        i.jsx(Na, {
          pcb: r,
          netlist: p,
          activeNet: ie,
          hoveredNet: d,
          boardThickness: _e,
          explosion: b,
          onStartRoute: I,
          onHoverNet: R
        }),
        h && i.jsx(Ba, {
          pcb: r,
          routeStartPad: S,
          routePreview: j,
          boardThickness: _e,
          activeLayer: f,
          explosion: b
        }),
        s != null && i.jsx(Ua, {
          pcb: r,
          nodeId: Number(s),
          constraints: re ?? [],
          pickedTargets: L,
          boardThickness: _e,
          explosion: b
        }),
        i.jsx($a, {
          violations: y,
          boardThickness: _e,
          explosion: b
        })
      ]
    });
  }
  function qa({ pcb: e, explosion: t }) {
    const o = c.useMemo(() => {
      const d = e.outline.vertices;
      if (d.length < 3) return null;
      const p = new Hs();
      p.moveTo(d[0].x, d[0].y);
      for (let g = 1; g < d.length; g++) p.lineTo(d[g].x, d[g].y);
      if (p.closePath(), e.outline.cutouts) for (const g of e.outline.cutouts) {
        if (g.length < 3) continue;
        const u = new Ys();
        u.moveTo(g[0].x, g[0].y);
        for (let x = 1; x < g.length; x++) u.lineTo(g[x].x, g[x].y);
        u.closePath(), p.holes.push(u);
      }
      return p;
    }, [
      e.outline
    ]), n = e.outline.thickness, s = c.useMemo(() => An(e), [
      e
    ]), a = c.useMemo(() => s.slice(1).map((d, p) => ({
      name: `Dielectric ${p + 1}`,
      top: s[p],
      bottom: d
    })), [
      s
    ]), r = c.useMemo(() => o ? new Nn(o, {
      depth: n,
      bevelEnabled: false
    }) : null, [
      o,
      n
    ]), l = c.useMemo(() => !o || t <= 0 ? null : new Nn(o, {
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
            side: Xe
          })
        }),
        t > 0 && l && a.map((d) => {
          const p = Dt(d.top, t, s.length), g = Dt(d.bottom, t, s.length), u = (p + g) / 2;
          return i.jsx("mesh", {
            geometry: l,
            position: [
              0,
              0,
              u - 0.05
            ],
            children: i.jsx("meshStandardMaterial", {
              color: "#1a7a3a",
              roughness: 0.9,
              metalness: 0,
              transparent: true,
              opacity: 0.3,
              side: Xe
            })
          }, d.name);
        })
      ]
    }) : null;
  }
  function Ka({ excludeNodeId: e }) {
    const t = oe((o) => o.document);
    return bs(t).length > 0 ? null : t.pcb && e == null ? i.jsx(qa, {
      pcb: t.pcb,
      explosion: 0
    }) : null;
  }
  class Za extends c.Component {
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
  function Ja({ children: e }) {
    const t = Ft(), o = Rt((s) => s.view), n = c.useMemo(() => [
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
  function qo() {
    if (typeof window > "u") return null;
    const e = window;
    return e.SpeechRecognition ?? e.webkitSpeechRecognition ?? null;
  }
  function Qa() {
    return qo() != null;
  }
  function ec(e) {
    var _a2, _b;
    const t = qo();
    if (!t) return (_a2 = e.onError) == null ? void 0 : _a2.call(e, "Speech recognition not supported in this browser."), null;
    const o = new t();
    o.continuous = true, o.interimResults = true, o.lang = e.lang ?? "en-US";
    let n = false, s = "", a = "";
    o.onresult = (r) => {
      var _a3;
      let l = "", d = s;
      for (let p = r.resultIndex; p < r.results.length; p++) {
        const g = r.results[p];
        if (!g) continue;
        const u = ((_a3 = g[0]) == null ? void 0 : _a3.transcript) ?? "";
        g.isFinal ? d += u : l += u;
      }
      s = d, a = l, e.onTranscript((d + l).trim(), false);
    }, o.onerror = (r) => {
      var _a3;
      const l = r.error ?? "unknown";
      (_a3 = e.onError) == null ? void 0 : _a3.call(e, l);
    }, o.onend = () => {
      var _a3;
      if (n) return;
      n = true;
      const r = (s + a).trim();
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
  const tc = 0.025, nc = 0.04, oc = 0.4, sc = 5e-3, rc = 0.5, ic = 1e3, mo = 1e-4, ho = 10;
  function fn(e, t, o, n, s) {
    var _a2;
    const a = t.get(o);
    if (!a) return false;
    const r = (_a2 = e.getJointPose) == null ? void 0 : _a2.call(e, a, n);
    if (!r) return false;
    const l = r.transform.position;
    return s.set(l.x, l.y, l.z), true;
  }
  const pn = new E(), mn = new E(), go = new E();
  function ac(e, t, o, n, s) {
    if (!fn(e, t, "thumb-tip", o, pn) || !fn(e, t, "index-finger-tip", o, mn) || !fn(e, t, "wrist", o, go)) return false;
    const a = pn.distanceTo(mn), r = n ? a < nc : a < tc;
    return s.pinching = r, s.midpoint.copy(pn).add(mn).multiplyScalar(0.5), s.reach.copy(s.midpoint).sub(go).normalize(), true;
  }
  function cc(e) {
    var _a2;
    let t = e;
    for (; t; ) {
      const o = (_a2 = t.userData) == null ? void 0 : _a2.partId;
      if (typeof o == "string") return o;
      t = t.parent;
    }
    return null;
  }
  const hn = new wn(), xo = new E(), yo = new E();
  function lc(e, t, o) {
    xo.copy(t).addScaledVector(o, -0.02), yo.copy(o), hn.set(xo, yo), hn.far = oc + 0.02;
    const n = hn.intersectObject(e, true);
    for (const s of n) {
      const a = cc(s.object);
      if (a) return a;
    }
    return null;
  }
  const uc = 800, mt = new E(), ht = new E(), bt = new E(), Vt = new E();
  function dc() {
    const e = Ft(), { gl: t, scene: o } = Pe(), n = c.useRef({
      pinching: false,
      midpoint: new E()
    }), s = c.useRef({
      pinching: false,
      midpoint: new E()
    }), a = c.useRef(null), r = c.useRef({
      pinching: false,
      midpoint: new E(),
      reach: new E()
    }), l = c.useRef(null), d = c.useRef(null), p = c.useRef("");
    return c.useEffect(() => () => {
      var _a2;
      (_a2 = d.current) == null ? void 0 : _a2.stop(), d.current = null;
    }, []), Qe((g, u, x) => {
      if (!e) return;
      const f = x;
      if (!f) return;
      const y = t.xr.getSession(), h = t.xr.getReferenceSpace();
      if (!y || !h) return;
      for (const C of y.inputSources) {
        if (!C.hand) continue;
        const R = C.handedness === "left" ? n : s, I = r.current;
        if (ac(f, C.hand, h, R.current.pinching, I) && (R.current.pinching = I.pinching, R.current.midpoint.copy(I.midpoint), I.pinching && a.current == null)) {
          const _ = lc(o, I.midpoint, I.reach);
          _ && (a.current = {
            kind: "fillet",
            partId: _
          });
        }
      }
      const j = n.current, S = s.current, m = j.pinching && S.pinching;
      if ((j.pinching && !S.pinching || !j.pinching && S.pinching) && a.current == null && Qa()) {
        const C = performance.now(), R = l.current;
        if (R == null) l.current = {
          startedAt: C
        };
        else if (d.current == null && C - R.startedAt >= uc) {
          p.current = "";
          const I = ec({
            lang: "en-US",
            onTranscript: (_, W) => {
              W && (p.current = _);
            },
            onEnd: () => {
              const _ = p.current.trim();
              if (d.current = null, p.current = "", !_) return;
              const W = Array.from($.getState().selectedPartIds), D = oe.getState().parts, L = W.map((F) => {
                const U = D.find((se) => se.id === F);
                return U ? {
                  partId: U.id,
                  partName: U.name ?? U.id,
                  geometryType: "part"
                } : null;
              }).filter((F) => F != null);
              Ss.getState().sendMessage(_, L, []);
            },
            onError: () => {
              d.current = null;
            }
          });
          I && (d.current = I);
        }
      } else if (l.current && (l.current = null), d.current) {
        const C = d.current;
        d.current = null, C.stop();
      }
      if (m && a.current == null) {
        mt.copy(j.midpoint), ht.copy(S.midpoint);
        const C = mt.distanceTo(ht);
        bt.copy(mt).add(ht).multiplyScalar(0.5);
        const R = Rt.getState().view, I = new E().copy(bt).sub(new E(...R.position)).divideScalar(R.scale);
        a.current = {
          kind: "scale",
          initialAnchor: bt.clone(),
          initialDistance: C,
          initialView: R,
          sceneAnchor: I
        };
      }
      const b = a.current;
      if (b && b.kind === "scale" && m) {
        mt.copy(j.midpoint), ht.copy(S.midpoint);
        const C = mt.distanceTo(ht);
        bt.copy(mt).add(ht).multiplyScalar(0.5);
        const R = b.initialDistance > 1e-6 ? C / b.initialDistance : 1;
        let I = b.initialView.scale * R;
        I < mo && (I = mo), I > ho && (I = ho), Vt.copy(b.sceneAnchor).multiplyScalar(I).multiplyScalar(-1).add(bt), Rt.getState().setView({
          scale: I,
          position: [
            Vt.x,
            Vt.y,
            Vt.z
          ]
        });
        return;
      }
      if (!(!b || !(!j.pinching || !S.pinching))) {
        if (b.kind === "fillet") {
          const C = j.midpoint.distanceTo(S.midpoint);
          if (a.current = null, C < sc || C > rc) return;
          const R = Rt.getState().view, I = R.scale > 1e-9 ? 1e-3 / R.scale : 1, _ = C * ic * I;
          oe.getState().addFillet(b.partId, _);
          return;
        }
        if (b.kind === "scale") {
          a.current = null;
          return;
        }
      }
    }), null;
  }
  const fc = 5e3, jt = ko((e, t) => ({
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
      for (const [r, l] of n) o - l.ts > fc && (a.delete(r), s = true);
      s && e({
        peers: a
      });
    },
    clear: () => e({
      peers: /* @__PURE__ */ new Map()
    })
  })), pc = 100, mc = 2e3, vo = new E(), St = new st(), $t = new E();
  function wo(e, t, o) {
    t.copy(e).sub(new E(o.position[0], o.position[1], o.position[2])).divideScalar(o.scale);
  }
  function hc() {
    var _a2, _b;
    const e = Ft(), { camera: t, gl: o } = Pe(), n = Ms((d) => d.cloudId), a = (_b = (_a2 = Es((d) => d.user)) == null ? void 0 : _a2.user_metadata) == null ? void 0 : _b.name, r = c.useRef(null), l = c.useRef(0);
    return c.useEffect(() => {
      if (!e || !n) return;
      const d = jt.getState().ingest, p = jt.getState().drop, g = rr(n, d, p);
      return r.current = g, () => {
        g == null ? void 0 : g.leave(), r.current = null, jt.getState().clear();
      };
    }, [
      e,
      n
    ]), c.useEffect(() => {
      if (!e) return;
      const d = window.setInterval(() => jt.getState().pruneStale(), mc);
      return () => window.clearInterval(d);
    }, [
      e
    ]), Qe((d, p, g) => {
      var _a3;
      if (!e || !r.current) return;
      const u = performance.now();
      if (u - l.current < pc) return;
      l.current = u;
      const x = Rt.getState().view;
      t.getWorldPosition(vo), t.getWorldQuaternion(St), wo(vo, $t, x);
      let f, y;
      const h = g, j = o.xr.getSession(), S = o.xr.getReferenceSpace();
      if (h && j && S) for (const m of j.inputSources) {
        if (!m.hand) continue;
        const w = m.hand.get("wrist");
        if (!w) continue;
        const b = (_a3 = h.getJointPose) == null ? void 0 : _a3.call(h, w, S);
        if (!b) continue;
        const P = new E(b.transform.position.x, b.transform.position.y, b.transform.position.z), C = new E();
        wo(P, C, x);
        const R = [
          C.x,
          C.y,
          C.z
        ];
        m.handedness === "left" ? f = R : m.handedness === "right" && (y = R);
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
          rightHand: y
        }
      });
    }), i.jsx(gc, {});
  }
  function gc() {
    const e = jt((o) => o.peers), t = Array.from(e.values());
    return t.length === 0 ? null : i.jsx("group", {
      children: t.map((o) => i.jsx(xc, {
        update: o
      }, o.userId))
    });
  }
  const bo = new st(), Wt = new Jt();
  function xc({ update: e }) {
    const t = e.color ?? "#c084fc", o = e.pose.head;
    return bo.set(e.pose.headRot[0], e.pose.headRot[1], e.pose.headRot[2], e.pose.headRot[3]), Wt.setFromQuaternion(bo), i.jsxs("group", {
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
  const yc = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(pointer: coarse)").matches, vc = new E(), wc = new E();
  function gn() {
    const e = $.getState();
    e.followMode === "lock" && (e.setFollowMode("free"), e.setFollowingParticipant(null));
  }
  const bc = {
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
  function Sc(e) {
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
  function Mc(e, t) {
    const o = Sc(t);
    return e ? {
      environment: e.environment ?? o.environment,
      lights: e.lights ?? o.lights,
      background: e.background ?? o.background,
      postProcessing: e.postProcessing ?? o.postProcessing
    } : o;
  }
  function Ec(e, t = 100) {
    return [
      -e.x * t,
      -e.y * t,
      -e.z * t
    ];
  }
  function So(e) {
    const t = e;
    return t.id ?? t.instanceId ?? t.partDefId ?? "";
  }
  const Mo = new At(), gt = new E(), Gt = new E(), Eo = new E(), Po = new E();
  function Mt(e, t, o) {
    gt.subVectors(t, e).normalize();
    const n = new E(0, 1, 0);
    return Math.abs(gt.dot(n)) > 0.999 ? Gt.crossVectors(new E(0, 0, 1), gt).normalize() : Gt.crossVectors(gt, n).normalize(), Eo.crossVectors(Gt, gt), Po.copy(gt).negate(), Mo.makeBasis(Gt, Eo, Po), o.setFromRotationMatrix(Mo), o;
  }
  function Pc() {
    const e = ot((n) => n.showBoundaryEdges), t = ot((n) => n.toggleBoundaryEdges), o = De((n) => n.scene);
    return c.useEffect(() => {
      const n = (s) => {
        s.ctrlKey && s.shiftKey && (s.key === "B" || s.key === "b") && (s.preventDefault(), t());
      };
      return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
    }, [
      t
    ]), !e || !o ? null : i.jsx(i.Fragment, {
      children: o.parts.map((n, s) => n.mesh.positions.length ? i.jsx($r, {
        positions: n.mesh.positions,
        indices: n.mesh.indices
      }, `boundary-${s}`) : null)
    });
  }
  function jc() {
    const e = ot((o) => o.inspectTriangles), t = ot((o) => o.toggleInspectTriangles);
    return c.useEffect(() => {
      const o = (n) => {
        n.ctrlKey && n.shiftKey && (n.key === "T" || n.key === "t") && (n.preventDefault(), t());
      };
      return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
    }, [
      t
    ]), e ? i.jsx(kr, {}) : null;
  }
  function Cc({ direction: e, color: t, intensity: o, bounds: n }) {
    const s = c.useRef(null), { center: a, radius: r } = n, l = Math.max(r, 10);
    return c.useEffect(() => {
      const d = s.current;
      if (!d) return;
      const p = new E(e.x, e.y, e.z).normalize();
      d.position.set(a[0] - p.x * l * 2.5, a[1] - p.y * l * 2.5, a[2] - p.z * l * 2.5), d.target.position.set(a[0], a[1], a[2]), d.target.updateMatrixWorld();
      const g = d.shadow.camera;
      g.left = -l * 1.3, g.right = l * 1.3, g.top = l * 1.3, g.bottom = -l * 1.3, g.near = 0.1, g.far = l * 6, g.updateProjectionMatrix(), d.shadow.needsUpdate = true;
    }, [
      e.x,
      e.y,
      e.z,
      a,
      l
    ]), i.jsx("directionalLight", {
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
  function Rc({ mode: e = "3d", pcbEditFocus: t = false }) {
    var _a2, _b;
    ia(), ca(), la(), ua(), va();
    const o = e === "pcb", [n, s] = c.useState(false), a = De((v) => v.engineReady), r = De((v) => v.scene), l = De((v) => v.previewMesh), d = oe((v) => v.parts), p = oe((v) => v.document.instances), g = oe((v) => v.document.partDefs), u = oe((v) => v.document.roots), x = oe((v) => v.document.scene), f = oe((v) => v.document.molecule), y = Ct((v) => v.molecule), h = Ct((v) => v.representation), j = y ?? f ?? null, S = $((v) => v.selectedPartIds), m = $((v) => v.selection), w = $((v) => v.isDraggingGizmo), b = $((v) => v.setOrbiting), P = $((v) => v.renderMode), C = $((v) => v.raytraceAvailable), R = ke((v) => v.active), I = Tt((v) => v.activeBoardNodeId), _ = c.useMemo(() => {
      if (!t || I == null) return null;
      const v = yn(d, I);
      return v ? Do(oe.getState().document, v) : null;
    }, [
      t,
      I,
      d
    ]), W = c.useMemo(() => {
      var _a3;
      return !t || I == null ? null : ((_a3 = yn(d, I)) == null ? void 0 : _a3.id) ?? null;
    }, [
      t,
      I,
      d
    ]), D = Ft(), L = c.useRef(null), { camera: F, invalidate: U } = Pe(), { isDark: se } = at(), re = Yt(), ge = nr(re), xe = or(re), { zoomBehavior: B, orbitMomentum: ie } = re, je = c.useRef(new wn()), ee = c.useRef(new Bn()), Ee = c.useRef(U);
    Ee.current = U;
    const de = c.useRef(new Us()), be = c.useRef(new E()), _e = c.useRef({
      theta: 0,
      phi: 0
    }), Ge = c.useRef(false), Ne = c.useRef(new E()), Se = c.useRef(new E()), ze = c.useRef(null), me = c.useRef(false), Ce = c.useRef(null), Le = c.useRef(new st()), V = c.useCallback(() => {
      me.current && (me.current = false, ze.current = null, Ce.current = null, L.current && (L.current.enabled = true), s(false));
    }, []), Oe = c.useMemo(() => {
      const v = /* @__PURE__ */ new Map();
      if (!p || !g) return v;
      const A = /* @__PURE__ */ new Map();
      u.forEach((O, Y) => {
        A.set(O.root, Y);
      });
      for (const O of p) {
        const Y = g[O.partDefId];
        if (!Y) continue;
        const K = A.get(Y.root);
        K !== void 0 && v.set(K, O.id);
      }
      return v;
    }, [
      p,
      g,
      u
    ]), Ue = c.useMemo(() => u.map((v, A) => v.visible !== false ? A : -1).filter((v) => v >= 0), [
      u
    ]), ae = c.useCallback((v, A) => {
      if (S.has(v)) return true;
      const O = Oe.get(A);
      return !!(O && S.has(O));
    }, [
      S,
      Oe
    ]), Q = c.useMemo(() => {
      const v = {
        center: [
          0,
          30,
          0
        ],
        radius: 120
      };
      if (!r) return v;
      let A = 1 / 0, O = 1 / 0, Y = 1 / 0, K = -1 / 0, ce = -1 / 0, fe = -1 / 0;
      const H = (G, Z, te) => {
        const J = G, M = te, z = -Z;
        J < A && (A = J), M < O && (O = M), z < Y && (Y = z), J > K && (K = J), M > ce && (ce = M), z > fe && (fe = z);
      }, Me = (G, Z) => {
        for (let J = 0; J + 2 < G.length; J += 48) {
          const M = G[J], z = G[J + 1], T = G[J + 2];
          Z ? H(M * Z.scale.x + Z.translation.x, z * Z.scale.y + Z.translation.y, T * Z.scale.z + Z.translation.z) : H(M, z, T);
        }
      };
      for (const G of r.parts ?? []) Me(G.mesh.positions);
      for (const G of r.instances ?? []) Me(G.mesh.positions, G.transform ?? null);
      if (!Number.isFinite(A)) return v;
      const Re = [
        (A + K) / 2,
        (O + ce) / 2,
        (Y + fe) / 2
      ], le = Math.hypot(K - A, ce - O, fe - Y) / 2 || 60;
      return {
        center: Re,
        radius: le
      };
    }, [
      r
    ]), X = c.useMemo(() => {
      if (m.length === 0 || !r) return null;
      const v = m.some((le) => le.kind === "face" || le.kind === "edge" || le.kind === "vertex"), A = new rt(), O = new E();
      let Y = false;
      const K = (le) => {
        var _a3;
        const G = d.findIndex((te) => te.id === le);
        if (G < 0) return null;
        const Z = Ue.indexOf(G);
        return Z < 0 ? null : ((_a3 = r.parts[Z]) == null ? void 0 : _a3.mesh) ?? null;
      };
      for (const le of m) switch (le.kind) {
        case "part": {
          if (r.instances && r.instances.length > 0) for (const G of r.instances) {
            if (So(G) !== le.id) continue;
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
            for (let M = 0; M < te.length; M += 3) O.set(te[M] * J.scale.x + J.translation.x, te[M + 1] * J.scale.y + J.translation.y, te[M + 2] * J.scale.z + J.translation.z), A.expandByPoint(O), Y = true;
          }
          Ue.forEach((G, Z) => {
            const te = d[G];
            if (!te || !ae(te.id, G) || te.id !== le.id) return;
            const J = r.parts[Z];
            if (!J) return;
            const M = J.mesh.positions;
            for (let z = 0; z < M.length; z += 3) O.set(M[z], M[z + 1], M[z + 2]), A.expandByPoint(O), Y = true;
          });
          break;
        }
        case "face": {
          const G = K(le.partId);
          if (!G) break;
          const Z = Lo(G, le.faceIndex);
          for (const te of Z) for (let J = 0; J < 3; J++) {
            const M = G.indices[te * 3 + J];
            O.set(G.positions[M * 3], G.positions[M * 3 + 1], G.positions[M * 3 + 2]), A.expandByPoint(O), Y = true;
          }
          break;
        }
        case "edge": {
          const G = K(le.partId);
          if (!G) break;
          const { a: Z, b: te } = Oo(G, le.edgeId);
          A.expandByPoint(Z), A.expandByPoint(te), Y = true;
          break;
        }
        case "vertex": {
          const G = K(le.partId);
          if (!G) break;
          const Z = No(G, le.vertexId);
          A.expandByPoint(Z), Y = true;
          break;
        }
      }
      if (!Y) return null;
      const ce = new E();
      A.getCenter(ce);
      const fe = new E();
      A.getSize(fe);
      const H = Math.max(fe.length() * 0.5, 1);
      return {
        center: new E(ce.x, ce.z, -ce.y),
        radius: H,
        mode: v ? "pan-only" : "fit"
      };
    }, [
      m,
      r,
      d,
      ae,
      Ue
    ]);
    c.useEffect(() => {
      if (X && !w) {
        if (Se.current.copy(X.center), X.mode === "fit") if (F instanceof en) {
          const A = F.fov * Math.PI / 180, O = 2 * Math.atan(Math.tan(A / 2) * F.aspect), Y = Math.min(A, O), K = X.radius / Math.sin(Y / 2) * 1.2;
          ze.current = Math.max(F.near * 2, K);
        } else ze.current = X.radius * 3 * 1.2;
        else ze.current = null;
        me.current = true, s(true);
      }
    }, [
      X,
      w,
      F
    ]), Qe(() => {
      if (!me.current || !L.current) return;
      const v = L.current.target, A = Se.current, O = ze.current, Y = Ce.current, K = 0.1;
      if (v.lerp(A, K), Y !== null) F.position.lerp(Y, K), F.quaternion.slerp(Le.current, K), v.copy(A);
      else if (O !== null) {
        const Me = be.current.subVectors(F.position, v), Re = Me.length(), le = Re + (O - Re) * K;
        Me.normalize().multiplyScalar(le), F.position.copy(v).add(Me);
      }
      const ce = v.distanceTo(A) < 0.01, fe = O === null || Math.abs(be.current.subVectors(F.position, v).length() - O) < 0.1, H = Y === null || F.position.distanceTo(Y) < 0.1;
      ce && fe && H ? (v.copy(A), Y && (F.position.copy(Y), F.quaternion.copy(Le.current)), L.current && (L.current.enabled = true), me.current = false, ze.current = null, Ce.current = null, s(false)) : U();
    }), c.useEffect(() => {
      const v = () => {
        $.getState().followMode !== "free" && U();
      }, A = $.subscribe(v), O = zt.subscribe(v);
      return () => {
        A(), O();
      };
    }, [
      U
    ]), c.useEffect(() => {
      let v = 0, A = 0;
      const O = () => {
        U(), ++A < 36 && (v = requestAnimationFrame(O));
      };
      return O(), () => cancelAnimationFrame(v);
    }, [
      U
    ]), c.useEffect(() => {
      U();
    }, [
      U,
      r,
      l,
      a
    ]), c.useEffect(() => {
      const v = () => U(), A = () => {
        document.visibilityState === "visible" && U();
      }, O = oe.subscribe(v);
      return window.addEventListener("focus", v), window.addEventListener("pageshow", v), document.addEventListener("visibilitychange", A), () => {
        O(), window.removeEventListener("focus", v), window.removeEventListener("pageshow", v), document.removeEventListener("visibilitychange", A);
      };
    }, [
      U
    ]), Qe(() => {
      const { followMode: v, followingParticipantId: A } = $.getState();
      if (v === "free" || !A) return;
      const O = zt.getState().participants.get(A);
      if (!(O == null ? void 0 : O.camera)) return;
      const [Y, K, ce] = dt(O.camera.position), fe = vc.set(Y, K, ce);
      if (v === "lock") {
        me.current && V();
        const [Me, Re, le] = dt(O.camera.target), G = wc.set(Me, Re, le);
        F.position.copy(fe), L.current ? (L.current.target.copy(G), L.current.update()) : F.lookAt(G), U();
        return;
      }
      if (me.current) return;
      L.current ? (L.current.target.lerp(fe, 0.15), L.current.update(), L.current.target.distanceToSquared(fe) > 1e-4 && U()) : F.lookAt(fe);
    }), c.useEffect(() => {
      const v = L.current, A = v == null ? void 0 : v.domElement;
      if (!A) return;
      const O = 1, Y = 0;
      let K = false;
      const ce = () => {
        K || (K = true, requestAnimationFrame(() => {
          K = false, v.update(), Ee.current();
        }));
      }, fe = () => {
        if (!ie) {
          Ge.current = false, _e.current.theta = 0, _e.current.phi = 0;
          return;
        }
        const G = _e.current;
        if (Math.abs(G.theta) < 1e-4 && Math.abs(G.phi) < 1e-4) {
          Ge.current = false, G.theta = 0, G.phi = 0;
          return;
        }
        const Z = v.target, te = be.current.subVectors(F.position, Z), J = de.current.setFromVector3(te);
        J.theta += G.theta * O, J.phi += G.phi * O, J.phi = Math.max(0.01, Math.min(Math.PI - 0.01, J.phi)), G.theta *= Y, G.phi *= Y, te.setFromSpherical(J), F.position.copy(Z).add(te), F.lookAt(Z), v.update(), Ee.current(), requestAnimationFrame(fe);
      }, H = (G, Z, te) => {
        const J = 2e-3 * B.sensitivity;
        let M = -(Math.abs(te) > Math.abs(Z) ? te : Z) * J;
        B.invertDirection && (M = -M);
        const z = v.target, T = be.current.subVectors(F.position, z), N = T.length(), q = Math.max(1, N * (1 + M));
        if (B.zoomTowardsCursor) {
          const ne = A.getBoundingClientRect();
          ee.current.x = (G.clientX - ne.left) / ne.width * 2 - 1, ee.current.y = -((G.clientY - ne.top) / ne.height) * 2 + 1, je.current.setFromCamera(ee.current, F);
          const pe = Ne.current;
          je.current.ray.at(N, pe);
          const ye = 1 - q / N;
          z.lerp(pe, ye * 0.5);
        }
        T.normalize().multiplyScalar(q), F.position.copy(z).add(T), ce();
      }, Me = (G, Z) => {
        const te = v.target, z = be.current.subVectors(F.position, te).length() * 2e-3, T = new E(), N = new E();
        F.matrix.extractBasis(T, N, new E());
        const q = T.multiplyScalar(G * z).add(N.multiplyScalar(-Z * z));
        F.position.add(q), te.add(q), ce();
      }, Re = (G, Z, te) => {
        const J = 2 * Math.PI / A.clientHeight;
        if (te && ie) _e.current.theta += G * J, _e.current.phi += Z * J, Ge.current || (Ge.current = true, requestAnimationFrame(fe));
        else {
          const M = v.target, z = be.current.subVectors(F.position, M), T = de.current.setFromVector3(z);
          T.theta += G * J, T.phi += Z * J, T.phi = Math.max(0.01, Math.min(Math.PI - 0.01, T.phi)), z.setFromSpherical(T), F.position.copy(M).add(z), F.lookAt(M), ce();
        }
      }, le = (G) => {
        G.preventDefault(), G.stopPropagation(), V(), gn();
        let Z = G.deltaX, te = G.deltaY;
        G.deltaMode === 1 && (Z *= 16, te *= 16), G.deltaMode === 2 && (Z *= 100, te *= 100);
        const J = ba(G), M = Sa(ge.scrollBindings, J, xe), z = ge.trackpadOrbitEnabled && xe === "trackpad";
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
      return A.addEventListener("wheel", le, {
        passive: false
      }), () => A.removeEventListener("wheel", le);
    }, [
      F,
      ge,
      xe,
      B,
      ie,
      V
    ]), c.useEffect(() => {
      const v = L.current;
      if (!v) return;
      const A = v.domElement, O = () => {
        b(true), s(true), gn();
      }, Y = () => {
        b(false), s(false);
      }, K = () => {
        V(), gn();
      };
      return v.addEventListener("start", O), v.addEventListener("end", Y), A == null ? void 0 : A.addEventListener("pointerdown", K), () => {
        v.removeEventListener("start", O), v.removeEventListener("end", Y), A == null ? void 0 : A.removeEventListener("pointerdown", K);
      };
    }, [
      b,
      V
    ]), c.useEffect(() => {
      var _a3;
      const A = (_a3 = L.current) == null ? void 0 : _a3.domElement;
      if (!A) return;
      const O = () => {
        $.getState().selectedPartIds.size > 0 || window.dispatchEvent(new CustomEvent("vcad:camera-fit"));
      };
      return A.addEventListener("dblclick", O), () => A.removeEventListener("dblclick", O);
    }, []), c.useEffect(() => {
      var _a3;
      const A = (_a3 = L.current) == null ? void 0 : _a3.domElement;
      if (!A) return;
      const O = new Xs(new E(0, 1, 0), 0), Y = new Bn(), K = new wn(), ce = new E();
      let fe = false, H = null;
      const Me = () => {
        fe = false;
        const G = H;
        if (!G) return;
        const Z = A.getBoundingClientRect();
        if (Y.x = (G.clientX - Z.left) / Z.width * 2 - 1, Y.y = -((G.clientY - Z.top) / Z.height) * 2 + 1, K.setFromCamera(Y, F), !K.ray.intersectPlane(O, ce)) {
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
      return A.addEventListener("pointermove", Re), A.addEventListener("pointerleave", le), () => {
        A.removeEventListener("pointermove", Re), A.removeEventListener("pointerleave", le), $.getState().setCursorWorld(null);
      };
    }, [
      F
    ]), c.useEffect(() => {
      const v = (A) => {
        const { normal: O, centroid: Y, vertices: K } = A.detail, ce = new E(O.x, O.z, -O.y).normalize(), fe = new E(Y.x, Y.z, -Y.y);
        let H = 60;
        if (K && K.length >= 3) {
          const Re = new E(0, 1, 0);
          Math.abs(ce.dot(Re)) > 0.95 && Re.set(1, 0, 0);
          const le = new E().crossVectors(Re, ce).normalize(), G = new E().crossVectors(ce, le).normalize();
          let Z = 1 / 0, te = -1 / 0, J = 1 / 0, M = -1 / 0;
          const z = new E();
          for (const ne of K) {
            const pe = new E(ne.x, ne.z, -ne.y);
            z.subVectors(pe, fe);
            const ye = z.dot(le), ve = z.dot(G);
            ye < Z && (Z = ye), ye > te && (te = ye), ve < J && (J = ve), ve > M && (M = ve);
          }
          const T = Math.max(1, te - Z), N = Math.max(1, M - J), q = 1.2;
          if (F instanceof en) {
            const ne = F.fov * Math.PI / 180, pe = 2 * Math.atan(Math.tan(ne / 2) * F.aspect), ye = N / 2 / Math.tan(ne / 2), ve = T / 2 / Math.tan(pe / 2);
            H = Math.max(ye, ve, 10) * q;
          } else H = Math.max(T, N, 10) * q;
        }
        const Me = new E(fe.x + ce.x * H, fe.y + ce.y * H, fe.z + ce.z * H);
        Se.current.copy(fe), Ce.current = Me, ze.current = H, Mt(Me, fe, Le.current), L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:face-selected", v), () => window.removeEventListener("vcad:face-selected", v);
    }, [
      F
    ]), c.useEffect(() => {
      const A = {
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
      }, O = (Y) => {
        const K = Y.detail, ce = A[K];
        if (!ce) return;
        const fe = new E(ce[0], ce[1], ce[2]), H = new E(0, 0, 0);
        Se.current.copy(H), Ce.current = fe, ze.current = null, Mt(fe, H, Le.current), L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:snap-view", O), () => window.removeEventListener("vcad:snap-view", O);
    }, []);
    const we = Pe((v) => v.size.width / Math.max(1, v.size.height));
    c.useEffect(() => {
      const v = (A) => {
        const { planeNormal: O, planeCenter: Y, width: K, height: ce } = A.detail, [fe, H, Me] = dt([
          Y.x,
          Y.y,
          Y.z
        ]), [Re, le, G] = dt([
          O.x,
          O.y,
          O.z
        ]), Z = Math.hypot(Re, le, G) || 1, te = new E(Re / Z, le / Z, G / Z), J = F, M = (J.isPerspectiveCamera ? J.fov : 50) * (Math.PI / 180), z = J.isPerspectiveCamera ? J.aspect : we, T = 1.2, N = Math.max(K, 1), ne = Math.max(ce, 1) / 2 / Math.tan(M / 2), pe = N / 2 / (z * Math.tan(M / 2)), ye = Math.max(ne, pe, 10) * T;
        Se.current.set(fe, H, Me);
        const ve = new E(fe + te.x * ye, H + te.y * ye, Me + te.z * ye);
        Ce.current = ve, ze.current = ye, Mt(ve, Se.current, Le.current), L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:fit-sketch", v), () => window.removeEventListener("vcad:fit-sketch", v);
    }, [
      F,
      we
    ]);
    const he = Pe((v) => v.gl), He = Pe((v) => v.scene), Ie = Pe((v) => v.size), Ze = aa();
    c.useEffect(() => {
      Ze || U();
    }, [
      Ze,
      U
    ]), c.useEffect(() => {
      const v = (O) => {
        const Y = Math.max(1, Ie.width), K = Math.max(1, Ie.height), [ce, fe, H] = dt(O.position), [Me, Re, le] = dt(O.target), G = new en(50, Y / K, 0.1, 1e4);
        G.up.set(0, 1, 0), G.position.set(ce, fe, H), G.lookAt(Me, Re, le), G.updateMatrixWorld();
        const Z = new qs(Y, K, {
          samples: 4,
          colorSpace: bn
        }), te = he.getRenderTarget(), J = he.toneMapping, M = he.toneMappingExposure, z = he.outputColorSpace;
        he.toneMapping = _o, he.toneMappingExposure = 1, he.outputColorSpace = bn, he.setRenderTarget(Z), he.clear(), he.render(He, G), he.setRenderTarget(te), he.toneMapping = J, he.toneMappingExposure = M, he.outputColorSpace = z;
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
      }, A = window;
      return A.__vcadCaptureAiCamera = v, () => {
        A.__vcadCaptureAiCamera === v && delete A.__vcadCaptureAiCamera;
      };
    }, [
      he,
      He,
      Ie.width,
      Ie.height
    ]), c.useEffect(() => {
      const v = () => {
        const A = new E(60, -60, 45), O = new E(0, 0, 0);
        Se.current.copy(O), Ce.current = A, ze.current = null, Mt(A, O, Le.current), L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:hero-view", v), () => window.removeEventListener("vcad:hero-view", v);
    }, []), c.useEffect(() => {
      const v = (A) => {
        const { x: O, y: Y, z: K } = A.detail, [ce, fe, H] = dt([
          O,
          Y,
          K
        ]);
        Se.current.set(ce, fe, H), Ce.current = null, ze.current = null, L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:focus-point", v), () => window.removeEventListener("vcad:focus-point", v);
    }, []), c.useEffect(() => {
      const v = () => {
        var _a3;
        const A = De.getState().scene;
        if (!A || A.parts.length === 0) return;
        const O = new rt(), Y = new E();
        let K = false;
        for (const Z of A.parts) {
          const te = Z.mesh.positions;
          for (let J = 0; J < te.length; J += 3) Y.set(te[J] ?? 0, te[J + 1] ?? 0, te[J + 2] ?? 0), O.expandByPoint(Y), K = true;
        }
        if (!K) return;
        const ce = new E();
        O.getCenter(ce);
        const fe = new E();
        O.getSize(fe);
        const H = Math.max(fe.x, fe.y, fe.z, 50) * 2, Me = new E(ce.x, ce.z, -ce.y), Re = ((_a3 = L.current) == null ? void 0 : _a3.target) ?? new E(), le = new E().copy(F.position).sub(Re);
        le.lengthSq() < 1e-6 && le.set(1, 1, 1), le.normalize();
        const G = new E().copy(Me).addScaledVector(le, H);
        Se.current.copy(Me), Ce.current = G, ze.current = H, Mt(G, Me, Le.current), L.current && (L.current.enabled = false), me.current = true, s(true);
      };
      return window.addEventListener("vcad:camera-fit", v), () => window.removeEventListener("vcad:camera-fit", v);
    }, [
      F
    ]);
    const Te = c.useMemo(() => Mc(x, se), [
      x,
      se
    ]), qe = c.useMemo(() => {
      const v = Te.environment;
      return v.type === "None" ? null : v.type === "Preset" ? bc[v.preset] ?? "studio" : "studio";
    }, [
      Te.environment
    ]), k = c.useMemo(() => {
      const v = Te.environment;
      return v.type === "None" ? 0 : v.intensity ?? 1;
    }, [
      Te.environment
    ]);
    return i.jsxs(i.Fragment, {
      children: [
        Te.lights.map((v) => {
          if (v.enabled === false) return null;
          const A = new We(v.color[0], v.color[1], v.color[2]);
          if (v.kind.type === "Directional") {
            const O = Ec(v.kind.direction);
            return v.castShadow ? i.jsx(Cc, {
              direction: v.kind.direction ?? {
                x: 0.5,
                y: -0.8,
                z: 0.4
              },
              color: A,
              intensity: v.intensity,
              bounds: Q
            }, v.id) : i.jsx("directionalLight", {
              position: O,
              intensity: v.intensity,
              color: A
            }, v.id);
          }
          return v.kind.type === "Point" ? i.jsx("pointLight", {
            position: [
              v.kind.position.x,
              v.kind.position.y,
              v.kind.position.z
            ],
            intensity: v.intensity,
            color: A,
            distance: v.kind.distance
          }, v.id) : v.kind.type === "Spot" ? i.jsx("spotLight", {
            position: [
              v.kind.position.x,
              v.kind.position.y,
              v.kind.position.z
            ],
            intensity: v.intensity,
            color: A,
            angle: v.kind.angle ? v.kind.angle * Math.PI / 180 : void 0,
            penumbra: v.kind.penumbra ? v.kind.penumbra / 90 : void 0
          }, v.id) : null;
        }),
        !o && !n && i.jsx(es, {
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
        !o && i.jsx(wr, {}),
        i.jsx(ts, {
          ref: L,
          makeDefault: true,
          enabled: !D,
          enableDamping: false,
          enableZoom: yc,
          touches: {
            ONE: Vn.ROTATE,
            TWO: Vn.DOLLY_PAN
          },
          mouseButtons: (() => {
            const v = Ma(ge, xe);
            return {
              LEFT: void 0,
              MIDDLE: v.MIDDLE,
              RIGHT: v.RIGHT
            };
          })()
        }),
        !o && !D && i.jsx(ns, {
          alignment: "bottom-right",
          margin: [
            80,
            80
          ],
          children: i.jsx(os, {
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
          children: i.jsx(Fn, {
            preset: qe,
            environmentIntensity: k,
            background: Te.background.type === "Environment"
          })
        }),
        !qe && i.jsxs(Fn, {
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
        !o && ((_a2 = x == null ? void 0 : x.background) == null ? void 0 : _a2.type) === "Solid" && i.jsx("color", {
          attach: "background",
          args: [
            x.background.color[0],
            x.background.color[1],
            x.background.color[2]
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
              (_ == null ? void 0 : _.position.x) ?? 0,
              (_ == null ? void 0 : _.position.y) ?? 0,
              (_ == null ? void 0 : _.position.z) ?? 0
            ],
            rotation: [
              ((_ == null ? void 0 : _.rotationDeg.x) ?? 0) * Math.PI / 180,
              ((_ == null ? void 0 : _.rotationDeg.y) ?? 0) * Math.PI / 180,
              ((_ == null ? void 0 : _.rotationDeg.z) ?? 0) * Math.PI / 180,
              "ZYX"
            ],
            scale: [
              (_ == null ? void 0 : _.scale.x) ?? 1,
              (_ == null ? void 0 : _.scale.y) ?? 1,
              (_ == null ? void 0 : _.scale.z) ?? 1
            ],
            children: i.jsx(Xa, {
              showBoard: true
            })
          })
        }),
        !o && a && i.jsxs(i.Fragment, {
          children: [
            P === "raytrace" && C && i.jsx(Li, {}),
            i.jsx(Ja, {
              children: i.jsxs("group", {
                rotation: [
                  -Math.PI / 2,
                  0,
                  0
                ],
                children: [
                  i.jsx(si, {}),
                  i.jsx(Ka, {
                    excludeNodeId: I
                  }),
                  i.jsxs(i.Fragment, {
                    children: [
                      (_b = r == null ? void 0 : r.instances) == null ? void 0 : _b.map((v) => {
                        const A = So(v), O = {
                          id: A,
                          name: v.name ?? v.partDefId,
                          kind: "cube",
                          primitiveNodeId: 0,
                          scaleNodeId: 0,
                          rotateNodeId: 0,
                          translateNodeId: 0
                        };
                        return i.jsx(qn, {
                          partInfo: O,
                          mesh: v.mesh,
                          materialKey: v.material,
                          selected: S.has(A),
                          transform: v.transform,
                          ghosted: t
                        }, v.instanceId);
                      }),
                      (!(r == null ? void 0 : r.instances) || r.instances.length === 0) && d.length === 0 && (r == null ? void 0 : r.parts.map((v, A) => i.jsx(Dr, {
                        mesh: v.mesh,
                        materialKey: v.material
                      }, `imported-${A}`))),
                      (!(r == null ? void 0 : r.instances) || r.instances.length === 0) && d.length > 0 && (r == null ? void 0 : r.parts.map((v, A) => {
                        const O = Ue[A] ?? A, Y = d[O];
                        return !Y || Y.id === W ? null : i.jsx(qn, {
                          partInfo: Y,
                          mesh: v.mesh,
                          materialKey: v.material,
                          selected: ae(Y.id, O),
                          ghosted: t && !Rn(Y)
                        }, Y.id);
                      }))
                    ]
                  }),
                  j && j.positions.length > 0 && i.jsx(Br, {
                    molecule: j,
                    representation: h
                  }),
                  i.jsx(Pc, {}),
                  i.jsx(jc, {}),
                  r == null ? void 0 : r.clashes.map((v, A) => i.jsx(Hr, {
                    mesh: v
                  }, `clash-${A}`)),
                  i.jsx(Yr, {}),
                  l && i.jsx(Ur, {
                    mesh: l
                  }),
                  i.jsx(Kr, {}),
                  R && i.jsx(ti, {}),
                  i.jsx(Mi, {}),
                  i.jsx(Ci, {}),
                  i.jsx(ra, {}),
                  i.jsx(zi, {}),
                  i.jsx(Ps, {}),
                  i.jsx(hc, {})
                ]
              })
            }),
            i.jsx(dc, {}),
            i.jsx(ci, {
              orbitControls: L
            })
          ]
        }),
        a && !D && !Ze && (() => {
          var _a3, _b2, _c2, _d, _e2, _f, _g;
          const v = ((_a3 = Te.postProcessing.ambientOcclusion) == null ? void 0 : _a3.enabled) !== false, A = ((_b2 = Te.postProcessing.vignette) == null ? void 0 : _b2.enabled) !== false;
          if (!v && !A) return null;
          const O = (_c2 = he.getContext) == null ? void 0 : _c2.call(he);
          if (!O || typeof O.getContextAttributes != "function" || !O.getContextAttributes()) return null;
          const Y = [];
          return v && Y.push(i.jsx(Zs, {
            aoRadius: ((_d = Te.postProcessing.ambientOcclusion) == null ? void 0 : _d.radius) ?? 0.5,
            intensity: ((_e2 = Te.postProcessing.ambientOcclusion) == null ? void 0 : _e2.intensity) ?? (se ? 2 : 1.5),
            aoSamples: n ? 3 : 6,
            denoiseSamples: n ? 1 : 4
          }, "ao")), A && Y.push(i.jsx(Js, {
            offset: ((_f = Te.postProcessing.vignette) == null ? void 0 : _f.offset) ?? 0.3,
            darkness: ((_g = Te.postProcessing.vignette) == null ? void 0 : _g.darkness) ?? (se ? 0.5 : 0.3),
            eskil: false
          }, "vignette")), i.jsx(Za, {
            children: i.jsx(Qs, {
              children: Y
            })
          });
        })()
      ]
    });
  }
  const jo = {
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
  function Co(e, t, o, n, s, a, r) {
    const l = (p) => t + p * n, d = (p) => o - p * n;
    return i.jsxs("g", {
      pointerEvents: "none",
      children: [
        e.rendered.lines.map(([p, g], u) => i.jsx("line", {
          x1: l(p.x),
          y1: d(p.y),
          x2: l(g.x),
          y2: d(g.y),
          stroke: s,
          strokeWidth: a
        }, `${r}-l-${u}`)),
        e.rendered.texts.map((p, g) => {
          const u = String(p.alignment), x = u.includes("Left") ? "start" : u.includes("Right") ? "end" : "middle", f = u.startsWith("Top") ? "hanging" : u.startsWith("Bottom") ? "auto" : "middle";
          return i.jsx("text", {
            x: l(p.position.x),
            y: d(p.position.y),
            fontSize: p.height * n,
            fill: s,
            textAnchor: x,
            dominantBaseline: f,
            fontFamily: "monospace",
            children: p.text
          }, `${r}-t-${g}`);
        })
      ]
    }, r);
  }
  function kc() {
    const { viewDirection: e, showHiddenLines: t, showDimensions: o, zoom: n, pan: s, adjustZoom: a, adjustPan: r, resetView: l, detailViews: d, addDetailView: p } = vn(), g = De((M) => M.scene), u = De((M) => M.engine), x = oe((M) => M.parts), f = oe((M) => M.document.drawing), y = oe((M) => M.setDrawingSettings), h = $((M) => M.selectedPartIds), j = $((M) => M.select), S = $((M) => M.clearSelection), { isDark: m } = at(), w = c.useRef(null), [b, P] = c.useState(false), [C, R] = c.useState({
      x: 0,
      y: 0
    }), I = c.useRef({
      x: 0,
      y: 0
    }), _ = c.useRef(false), [W, D] = c.useState(false), [L, F] = c.useState(null), [U, se] = c.useState(null), [re, ge] = c.useState(false), [xe, B] = c.useState([]), [ie, je] = c.useState(null), ee = m ? jo.dark : jo.light, Ee = c.useMemo(() => !(g == null ? void 0 : g.parts) || !u ? [] : g.parts.map((M, z) => {
      const T = x[z];
      if (!T) return null;
      const N = u.projectMesh(M.mesh, e);
      return N ? {
        partId: T.id,
        view: N
      } : null;
    }).filter((M) => M !== null), [
      g,
      u,
      e,
      x
    ]), de = c.useMemo(() => {
      if (Ee.length === 0) return null;
      let M = 1 / 0, z = 1 / 0, T = -1 / 0, N = -1 / 0;
      for (const { view: q } of Ee) M = Math.min(M, q.bounds.min_x), z = Math.min(z, q.bounds.min_y), T = Math.max(T, q.bounds.max_x), N = Math.max(N, q.bounds.max_y);
      return {
        min_x: M,
        min_y: z,
        max_x: T,
        max_y: N
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
    ]), _e = c.useMemo(() => !be || !u || d.length === 0 ? [] : d.map((M) => {
      try {
        const z = u.createDetailView(be, M.centerX, M.centerY, M.scale, M.width, M.height, M.label);
        return {
          def: M,
          view: z
        };
      } catch {
        return null;
      }
    }).filter((M) => M !== null), [
      be,
      u,
      d
    ]), Ge = c.useMemo(() => {
      var _a2;
      if (!u || !((_a2 = g == null ? void 0 : g.parts) == null ? void 0 : _a2.length)) return [];
      const M = ((f == null ? void 0 : f.sections) ?? []).filter((T) => T.view === e);
      if (M.length === 0) return [];
      const z = js();
      return z ? M.map((T) => {
        const N = Cs(T.view, T.points);
        if (!N) return null;
        const q = u.offsetSectionMesh(z, N, {
          spacing: 3,
          angle: Math.PI / 4
        });
        return q ? {
          def: T,
          view: q
        } : null;
      }).filter((T) => T !== null) : [];
    }, [
      u,
      g,
      f,
      e
    ]), Ne = c.useMemo(() => {
      if (!u || !(f == null ? void 0 : f.titleBlock)) return null;
      try {
        return u.renderTitleBlock(Rs(f.titleBlock, ""));
      } catch {
        return null;
      }
    }, [
      u,
      f
    ]), Se = c.useMemo(() => {
      if (!u || !(f == null ? void 0 : f.showBom) || x.length === 0) return null;
      try {
        const M = ks();
        return M.length > 0 ? u.renderBomTable(M) : null;
      } catch {
        return null;
      }
    }, [
      u,
      f,
      x
    ]), ze = c.useMemo(() => {
      if (!de || !o || !u) return [];
      try {
        const M = u.WasmAnnotationLayer, z = new M(), { min_x: T, min_y: N, max_x: q, max_y: ne } = de;
        z.addHorizontalDimension(T, N, q, N, -10), z.addVerticalDimension(q, N, q, ne, 10);
        const ve = z.renderAll();
        return z.free(), ve;
      } catch {
        return [];
      }
    }, [
      de,
      o,
      u
    ]), me = c.useCallback((M) => {
      if (M.preventDefault(), M.shiftKey) {
        const q = -M.deltaY * 2e-3;
        a(q);
        return;
      }
      let z = M.deltaX, T = M.deltaY;
      M.deltaMode === 1 && (z *= 16, T *= 16), M.deltaMode === 2 && (z *= 100, T *= 100);
      const N = 0.15 / n;
      if (I.current.x -= z * N, I.current.y -= T * N, !_.current) {
        _.current = true;
        const q = () => {
          const ne = I.current;
          if (Math.abs(ne.x) < 0.01 && Math.abs(ne.y) < 0.01) {
            _.current = false, ne.x = 0, ne.y = 0;
            return;
          }
          const pe = 0.15;
          r(ne.x * pe, ne.y * pe);
          const ye = 0.92;
          ne.x *= ye, ne.y *= ye, requestAnimationFrame(q);
        };
        requestAnimationFrame(q);
      }
    }, [
      a,
      r,
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
      (M.button === 1 || M.button === 0 && M.altKey) && (P(true), R({
        x: M.clientX,
        y: M.clientY
      }), I.current = {
        x: 0,
        y: 0
      }, _.current = false, M.target.setPointerCapture(M.pointerId), M.preventDefault());
    }, []), Le = c.useCallback((M) => {
      if (!b) return;
      const z = M.clientX - C.x, T = M.clientY - C.y;
      R({
        x: M.clientX,
        y: M.clientY
      });
      const N = w.current;
      if (!N) return;
      const q = N.getBoundingClientRect(), pe = (de ? (de.max_x - de.min_x) * 1.6 : 100) / q.width / n, ye = z * pe, ve = -T * pe;
      r(ye, ve), I.current.x = ye, I.current.y = ve;
    }, [
      b,
      C,
      r,
      n,
      de
    ]), V = c.useCallback((M) => {
      if (b) {
        P(false), M.target.releasePointerCapture(M.pointerId);
        const z = I.current;
        if ((Math.abs(z.x) > 0.1 || Math.abs(z.y) > 0.1) && !_.current) {
          _.current = true;
          const T = () => {
            if (Math.abs(z.x) < 0.01 && Math.abs(z.y) < 0.01) {
              _.current = false, z.x = 0, z.y = 0;
              return;
            }
            const N = 0.15;
            vn.getState().adjustPan(z.x * N, z.y * N);
            const q = 0.92;
            z.x *= q, z.y *= q, requestAnimationFrame(T);
          };
          requestAnimationFrame(T);
        }
      }
    }, [
      b
    ]), Oe = c.useCallback((M, z) => {
      if (z.stopPropagation(), z.shiftKey) if (h.has(M)) {
        const T = new Set(h);
        T.delete(M), $.getState().selectMultiple(Array.from(T));
      } else $.getState().selectMultiple([
        ...Array.from(h),
        M
      ]);
      else j(M);
    }, [
      h,
      j
    ]), Ue = c.useCallback(() => {
      S();
    }, [
      S
    ]), ae = c.useCallback(() => {
      l();
    }, [
      l
    ]), Q = c.useCallback((M, z) => {
      const T = w.current;
      if (!T || !de) return null;
      const N = T.getBoundingClientRect(), q = de.max_x - de.min_x, ne = de.max_y - de.min_y, pe = Math.max(q, ne) * 0.3, ye = (q + 2 * pe) / n, ve = (ne + 2 * pe) / n, Be = de.min_x - pe + (q + 2 * pe - ye) / 2 - s.x, ct = -de.max_y - pe + (ne + 2 * pe - ve) / 2 - s.y, lt = Be + (M - N.left) / N.width * ye, Ve = ct + (z - N.top) / N.height * ve;
      return {
        x: lt,
        y: -Ve
      };
    }, [
      de,
      n,
      s
    ]), X = c.useCallback(() => {
      D(true), F(null), se(null);
    }, []), we = c.useCallback((M) => {
      if (!W) return;
      const z = Q(M.clientX, M.clientY);
      z && (F(z), se(z));
    }, [
      W,
      Q
    ]), he = c.useCallback((M) => {
      if (!W || !L) return;
      const z = Q(M.clientX, M.clientY);
      z && se(z);
    }, [
      W,
      L,
      Q
    ]), He = c.useCallback(() => {
      if (!W || !L || !U) return;
      const M = Math.min(L.x, U.x), z = Math.max(L.x, U.x), T = Math.min(L.y, U.y), N = Math.max(L.y, U.y), q = z - M, ne = N - T;
      if (q > 0.5 && ne > 0.5) {
        const pe = (M + z) / 2, ye = (T + N) / 2, ve = d.length, Be = String.fromCharCode(65 + ve % 26);
        p({
          centerX: pe,
          centerY: ye,
          scale: 2,
          width: q,
          height: ne,
          label: Be
        });
      }
      D(false), F(null), se(null);
    }, [
      W,
      L,
      U,
      d.length,
      p
    ]);
    c.useEffect(() => {
      const M = (z) => {
        z.key === "Escape" && W && (D(false), F(null), se(null));
      };
      return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
    }, [
      W
    ]), c.useEffect(() => {
      const M = () => {
        X();
      };
      return window.addEventListener("vcad:start-detail-view", M), () => window.removeEventListener("vcad:start-detail-view", M);
    }, [
      X
    ]), c.useEffect(() => {
      const M = () => {
        ge(true), B([]), je(null);
      };
      return window.addEventListener("vcad:start-section-view", M), () => window.removeEventListener("vcad:start-section-view", M);
    }, []);
    const Ie = c.useCallback(() => {
      if (xe.length >= 2) {
        const M = (f == null ? void 0 : f.sections) ?? [], z = String.fromCharCode(65 + M.length % 26);
        y({
          sections: [
            ...M,
            {
              id: `section-${z}-${Date.now()}`,
              view: e,
              label: z,
              points: xe
            }
          ]
        });
      }
      ge(false), B([]), je(null);
    }, [
      xe,
      f,
      y,
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
      z && je(z);
    }, [
      Q
    ]);
    if (c.useEffect(() => {
      if (!re) return;
      const M = (z) => {
        z.key === "Escape" ? (ge(false), B([]), je(null)) : z.key === "Enter" && Ie();
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
    const qe = de.max_x - de.min_x, k = de.max_y - de.min_y, v = Math.max(qe, k) * 0.3, A = (qe + 2 * v) / n, O = (k + 2 * v) / n, Y = de.min_x - v + (qe + 2 * v - A) / 2 - s.x, K = -de.max_y - v + (k + 2 * v - O) / 2 - s.y, ce = `${Y} ${K} ${A} ${O}`, H = Math.max(qe, k) * 5e-3 / Math.sqrt(n), Me = H * 0.6, Re = H * 0.4, le = A * 0.015, G = Ne ? A * 0.3 / Ne.width : 0, Z = Ne ? Ne.height * G : 0, te = Ne ? Z + le : 0, J = Se ? A * 0.3 / Se.width : 0;
    return i.jsxs("svg", {
      ref: w,
      className: "h-full w-full select-none",
      viewBox: ce,
      preserveAspectRatio: "xMidYMid meet",
      style: {
        backgroundColor: ee.background,
        cursor: W || re ? "crosshair" : b ? "grabbing" : "default"
      },
      onPointerDown: W || re ? void 0 : Ce,
      onPointerMove: W || re ? void 0 : Le,
      onPointerUp: W || re ? void 0 : V,
      onPointerLeave: W || re ? void 0 : V,
      onMouseDown: W ? we : void 0,
      onMouseMove: W ? he : re ? Te : void 0,
      onMouseUp: W ? He : void 0,
      onClick: W ? void 0 : re ? Ze : Ue,
      onDoubleClick: re ? Ie : ae,
      children: [
        m && i.jsx("defs", {
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
        m && i.jsx("rect", {
          x: Y,
          y: K,
          width: A,
          height: O,
          fill: "url(#grid)"
        }),
        Ee.map(({ partId: M, view: z }) => {
          const T = h.has(M);
          return i.jsxs("g", {
            onClick: (N) => Oe(M, N),
            style: {
              cursor: "pointer"
            },
            children: [
              T && i.jsx("g", {
                children: z.edges.filter((N) => N.visibility === "Visible").map((N, q) => i.jsx("line", {
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
              z.edges.filter((N) => N.visibility === "Visible").map((N, q) => i.jsx("line", {
                x1: N.start.x,
                y1: -N.start.y,
                x2: N.end.x,
                y2: -N.end.y,
                stroke: T ? ee.selection : ee.edge,
                strokeWidth: H,
                strokeLinecap: "round"
              }, `v-${q}`)),
              t && z.edges.filter((N) => N.visibility === "Hidden").map((N, q) => i.jsx("line", {
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
        ze.map((M, z) => i.jsxs("g", {
          className: "dimension",
          pointerEvents: "none",
          children: [
            M.lines.map(([T, N], q) => i.jsx("line", {
              x1: T.x,
              y1: -T.y,
              x2: N.x,
              y2: -N.y,
              stroke: ee.dimension,
              strokeWidth: Re
            }, `l-${q}`)),
            M.arcs.map((T, N) => {
              const q = T.center.x + T.radius * Math.cos(T.start_angle), ne = -(T.center.y + T.radius * Math.sin(T.start_angle)), pe = T.center.x + T.radius * Math.cos(T.end_angle), ye = -(T.center.y + T.radius * Math.sin(T.end_angle)), ve = Math.abs(T.end_angle - T.start_angle) > Math.PI ? 1 : 0, Be = T.end_angle > T.start_angle ? 0 : 1;
              return i.jsx("path", {
                d: `M ${q} ${ne} A ${T.radius} ${T.radius} 0 ${ve} ${Be} ${pe} ${ye}`,
                fill: "none",
                stroke: ee.dimension,
                strokeWidth: Re
              }, `arc-${N}`);
            }),
            M.texts.map((T, N) => i.jsx("text", {
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
            }, `t-${N}`)),
            M.arrows.map((T, N) => {
              const q = T.direction, ne = T.size / Math.sqrt(n), pe = T.tip.x, ye = -T.tip.y, ve = Math.PI / 6, Be = pe + ne * Math.cos(q + Math.PI - ve), ct = ye - ne * Math.sin(q + Math.PI - ve), lt = pe + ne * Math.cos(q + Math.PI + ve), Ve = ye - ne * Math.sin(q + Math.PI + ve);
              return i.jsx("polygon", {
                points: `${pe},${ye} ${Be},${ct} ${lt},${Ve}`,
                fill: ee.dimension
              }, `a-${N}`);
            })
          ]
        }, `dim-${z}`)),
        d.map((M) => {
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
          const T = z[0], N = z[z.length - 1];
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
                N
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
        re && xe.length > 0 && i.jsxs("g", {
          pointerEvents: "none",
          children: [
            i.jsx("polyline", {
              points: [
                ...xe,
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
            xe.map(([M, z], T) => i.jsx("circle", {
              cx: M,
              cy: -z,
              r: H * 2,
              fill: ee.section
            }, `sp-${T}`))
          ]
        }),
        W && L && U && i.jsx("rect", {
          x: Math.min(L.x, U.x),
          y: -Math.max(L.y, U.y),
          width: Math.abs(U.x - L.x),
          height: Math.abs(U.y - L.y),
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
          x: Y + A - 5 / n,
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
        _e.map(({ def: M, view: z }, T) => {
          const N = Math.min(A, O) * 0.25, q = N * 0.1, ne = Y + A - N - q, pe = K + O - N * (T + 1) - q * (T + 1) - te, ye = z.bounds.max_x - z.bounds.min_x, ve = z.bounds.max_y - z.bounds.min_y, Be = Math.min(N * 0.8 / (ye || 1), N * 0.8 / (ve || 1)), ct = ne + N / 2, lt = pe + N / 2;
          return i.jsxs("g", {
            children: [
              i.jsx("rect", {
                x: ne,
                y: pe,
                width: N,
                height: N,
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
          const N = Math.min(A, O) * 0.28, q = N * 0.1, ne = Y + q, pe = K + O - N * (T + 1) - q * (T + 1), ye = z.bounds.max_x - z.bounds.min_x, ve = z.bounds.max_y - z.bounds.min_y, Be = Math.min(N * 0.8 / (ye || 1), N * 0.8 / (ve || 1)), ct = (z.bounds.min_x + z.bounds.max_x) / 2, lt = (z.bounds.min_y + z.bounds.max_y) / 2, Ve = ne + N / 2, vt = pe + N / 2;
          return i.jsxs("g", {
            pointerEvents: "none",
            children: [
              i.jsx("rect", {
                x: ne,
                y: pe,
                width: N,
                height: N,
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
                  z.curves.map((ut, _t) => i.jsx("polyline", {
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
                  }, `sec-${M.id}-c-${_t}`)),
                  z.hatch_lines.map(([ut, _t], Lt) => i.jsx("line", {
                    x1: ut.x,
                    y1: -ut.y,
                    x2: _t.x,
                    y2: -_t.y,
                    stroke: ee.section,
                    strokeWidth: H * 0.5 / Be
                  }, `sec-${M.id}-h-${Lt}`))
                ]
              })
            ]
          }, `sec-${M.id}`);
        }),
        Ne && Co(Ne, Y + A - Ne.width * G - le, K + O - le, G, ee.sheet, H * 0.5, "titleblock"),
        Se && Co(Se, Y + A - Se.width * J - le, K + O - te - le * 2, J, ee.sheet, H * 0.5, "bom")
      ]
    });
  }
  function zc() {
    const e = $((l) => l.followMode), t = $((l) => l.setFollowMode), o = $((l) => l.setFollowingParticipant), n = zt((l) => l.participants), s = c.useCallback((l) => {
      t(l), o(l === "free" ? null : zs);
    }, [
      t,
      o
    ]), a = [];
    if (n.forEach((l) => {
      l.id !== kn && a.push(l);
    }), a.length === 0) return null;
    const r = (l, d, p) => {
      const g = e === l;
      return i.jsx("button", {
        type: "button",
        onClick: () => s(l),
        title: p,
        className: zn("px-2 py-0.5 text-[10px] font-medium rounded-sm transition-colors", g ? "bg-brand text-white" : "text-text-muted hover:text-text hover:bg-hover"),
        children: d
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
            r("free", "Free", "Free: ignore the AI camera"),
            r("follow", "Follow", "Follow: aim your view at the AI's camera frustum"),
            r("lock", "Lock", "Lock: see through the AI's camera in realtime")
          ]
        })
      ]
    });
  }
  function Ic() {
    const e = ue((l) => l.active), t = oe((l) => l.document.schematic), o = Tt((l) => l.activeBoardNodeId), n = oe((l) => l.document), s = De((l) => l.scene), a = oe((l) => l.parts), r = o != null ? Dn(n, o) : null;
    c.useEffect(() => {
      if (!e || !t) return;
      const l = setTimeout(async () => {
        const d = await Is(t), p = ue.getState();
        p.setNetlist(d);
        const g = new Set(t.components.map((x) => x.ref)), u = new Set(((r == null ? void 0 : r.footprints) ?? []).map((x) => x.ref));
        p.setOrphanFootprints([
          ...u
        ].filter((x) => !g.has(x))), p.setUnplacedComponents([
          ...g
        ].filter((x) => !u.has(x))), o != null && oe.getState().syncSchematicToPcb(o, d, {
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
        const d = await To(r);
        d.status === "ok" && ue.getState().setDrcViolations(d.value);
      }, 300);
      return () => clearTimeout(l);
    }, [
      r,
      e
    ]), c.useEffect(() => {
      if (!e || !t) return;
      const l = setTimeout(async () => {
        const d = await As(t);
        d.status === "ok" && ue.getState().setErcViolations(d.value);
      }, 300);
      return () => clearTimeout(l);
    }, [
      t,
      e
    ]), c.useEffect(() => {
      if (!e || !r) {
        ue.getState().setInterferingFootprints([]);
        return;
      }
      const l = setTimeout(async () => {
        const d = await Ds(r);
        ue.getState().setComponentBodies(d);
        const p = [];
        s == null ? void 0 : s.parts.forEach((x, f) => {
          var _a2;
          const y = a[f];
          if (y && Rn(y)) return;
          const h = ir((_a2 = x.mesh) == null ? void 0 : _a2.positions);
          h && p.push(h);
        });
        const g = o != null ? yn(a, o) : null;
        let u;
        if (g) {
          const x = Do(n, g), f = new At().compose(new E(x.position.x, x.position.y, x.position.z), new st().setFromEuler(new Jt(x.rotationDeg.x * Math.PI / 180, x.rotationDeg.y * Math.PI / 180, x.rotationDeg.z * Math.PI / 180, "ZYX")), new E(x.scale.x, x.scale.y, x.scale.z));
          if (!f.equals(new At())) {
            const h = new E();
            u = (j, S, m) => (h.set(j, S, m).applyMatrix4(f), [
              h.x,
              h.y,
              h.z
            ]);
          }
        }
        ue.getState().setInterferingFootprints(ar(d, p, 0, u));
      }, 400);
      return () => clearTimeout(l);
    }, [
      r,
      e,
      s,
      a
    ]);
  }
  function Ac() {
    const e = ue((r) => r.active), t = oe((r) => r.document), o = Tt((r) => r.activeBoardNodeId), n = o != null ? Dn(t, o) : null, s = c.useRef(null), a = c.useRef(null);
    c.useEffect(() => {
      if (!e || !n) return;
      const r = String(o);
      let l = false;
      const d = setTimeout(async () => {
        const p = await To(n);
        if (l || p.status !== "ok") return;
        const g = p.value, u = xr(g), x = ue.getState();
        if (a.current !== r) {
          a.current = r, s.current = u, x.clearReceipt();
          return;
        }
        const f = s.current;
        if (s.current = u, !f) return;
        const y = x.consumePendingMutation(), h = gr({
          tool: (y == null ? void 0 : y.tool) ?? "edit",
          args: (y == null ? void 0 : y.args) ?? {},
          before: f,
          after: u
        }, x.receiptEntries.length);
        h.verdict !== "no-op" && x.appendReceiptEntry(h);
      }, 350);
      return () => {
        l = true, clearTimeout(d);
      };
    }, [
      n,
      e,
      o
    ]);
  }
  const Dc = 80;
  function Tc() {
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
    ]), a = c.useRef(null), r = c.useRef(null);
    c.useEffect(() => {
      var _a2;
      if (!e || !t || !s) return;
      const l = (_a2 = oe.getState().document.schematic) == null ? void 0 : _a2.components, d = ue.getState().netlist;
      if (!l || !d) return;
      let p = false;
      const g = Ts(l, d), u = ue.getState();
      if (g.spec.devices.length === 0) {
        u.clearSim();
        return;
      }
      return u.setSimMaps(Object.fromEntries(g.netToNode), Object.fromEntries(g.refToDevice)), Fs(JSON.stringify(g.spec)).then((x) => {
        if (p || !x) return;
        a.current = x;
        const f = () => {
          if (!(p || !a.current)) {
            try {
              const y = a.current.step(Dc);
              ue.getState().setSimObservation(y.nodeVoltages, y.deviceCurrents, y.rotorAngles);
            } catch (y) {
              console.warn("[circuit-sim] step failed", y);
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
      s
    ]);
  }
  const Fc = c.lazy(() => yt(() => import("./SchematicView-DgleMBip.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([5,1,2,3,0,4,6,7,8,9,10,11,12])).then((e) => ({
    default: e.SchematicView
  }))), _c = c.lazy(() => yt(() => import("./ElectronicsViewToggle-0VByP-jR.js"), __vite__mapDeps([13,3,2,0,1,4])).then((e) => ({
    default: e.ElectronicsViewToggle
  }))), Lc = c.lazy(() => yt(() => import("./LengthTunePanel-CcyCfCUu.js"), __vite__mapDeps([14,3,2,0,1,4])).then((e) => ({
    default: e.LengthTunePanel
  }))), Oc = c.lazy(() => yt(() => import("./ReceiptPanel-3F6s4lzY.js"), __vite__mapDeps([15,3,2,0,1,4])).then((e) => ({
    default: e.ReceiptPanel
  }))), Nc = c.lazy(() => yt(() => import("./PcbGettingStarted-f2T0YXJW.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([16,1,2,3,0,4,6,7,8,9,10,11,12])).then((e) => ({
    default: e.PcbGettingStarted
  }))), Bc = "transparent", Vc = "transparent", Ht = 5;
  function $c({ containerRef: e }) {
    const { camera: t, size: o } = Pe(), n = De((s) => s.scene);
    return c.useEffect(() => {
      const s = e.current;
      if (!s) return;
      const a = s;
      let r = false, l = {
        x: 0,
        y: 0
      }, d = false, p = null;
      function g(f) {
        f.button === 0 && f.pointerType === "mouse" && (d = f.shiftKey, l = {
          x: f.clientX,
          y: f.clientY
        }, r = true, p = document.createElement("div"), p.className = "pointer-events-none absolute z-20 border-2 border-brand bg-brand/10", p.style.left = "0", p.style.top = "0", p.style.width = "0", p.style.height = "0", p.style.display = "none", a.appendChild(p));
      }
      function u(f) {
        if (!r || !p) return;
        const y = a.getBoundingClientRect(), h = Math.min(l.x, f.clientX) - y.left, j = Math.min(l.y, f.clientY) - y.top, S = Math.abs(f.clientX - l.x), m = Math.abs(f.clientY - l.y);
        (S >= Ht || m >= Ht) && (p.style.display = "block", p.style.left = `${h}px`, p.style.top = `${j}px`, p.style.width = `${S}px`, p.style.height = `${m}px`);
      }
      function x(f) {
        if (!r) return;
        r = false, p && (p.remove(), p = null);
        const y = Math.abs(f.clientX - l.x), h = Math.abs(f.clientY - l.y);
        if (y < Ht && h < Ht) return;
        const j = De.getState().scene;
        if (!j) return;
        const S = oe.getState().parts, m = $.getState().selectedPartIds, w = a.getBoundingClientRect(), b = Math.min(l.x, f.clientX) - w.left, P = Math.max(l.x, f.clientX) - w.left, C = Math.min(l.y, f.clientY) - w.top, R = Math.max(l.y, f.clientY) - w.top, I = [];
        if (S.forEach((_, W) => {
          const D = j.parts[W];
          if (!D) return;
          const L = D.mesh;
          if (!L.positions.length) return;
          const F = new rt(), U = new E();
          for (let ie = 0; ie < L.positions.length; ie += 3) U.set(L.positions[ie], L.positions[ie + 1], L.positions[ie + 2]), F.expandByPoint(U);
          const se = [
            new E(F.min.x, F.min.y, F.min.z),
            new E(F.max.x, F.min.y, F.min.z),
            new E(F.min.x, F.max.y, F.min.z),
            new E(F.max.x, F.max.y, F.min.z),
            new E(F.min.x, F.min.y, F.max.z),
            new E(F.max.x, F.min.y, F.max.z),
            new E(F.min.x, F.max.y, F.max.z),
            new E(F.max.x, F.max.y, F.max.z)
          ];
          let re = 1 / 0, ge = -1 / 0, xe = 1 / 0, B = -1 / 0;
          for (const ie of se) {
            ie.project(t);
            const je = (ie.x + 1) / 2 * o.width, ee = (1 - ie.y) / 2 * o.height;
            re = Math.min(re, je), ge = Math.max(ge, je), xe = Math.min(xe, ee), B = Math.max(B, ee);
          }
          ge >= b && re <= P && B >= C && xe <= R && I.push(_.id);
        }), d) {
          const _ = /* @__PURE__ */ new Set([
            ...m,
            ...I
          ]);
          $.getState().selectMultiple(Array.from(_));
        } else $.getState().selectMultiple(I);
      }
      return a.addEventListener("pointerdown", g), window.addEventListener("pointermove", u), window.addEventListener("pointerup", x), () => {
        a.removeEventListener("pointerdown", g), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", x), p && p.remove();
      };
    }, [
      t,
      o,
      e,
      n
    ]), null;
  }
  function Wc() {
    const e = c.useRef(null), t = $((b) => b.clearSelection), o = xt((b) => b.selectIssue), n = $((b) => b.hoveredItem), s = $((b) => b.isGizmoHovered), a = $((b) => b.isDraggingGizmo), r = $((b) => b.renderMode), l = $((b) => b.raytraceAvailable), { isDark: d } = at(), p = vn((b) => b.viewMode), g = ue((b) => b.active), u = ue((b) => b.layout), x = Tt((b) => b.activeBoardNodeId) != null, f = Ft(), [y, h] = c.useState(0), j = c.useRef(0), S = c.useRef(false), m = c.useCallback(() => {
      j.current >= 3 || (j.current += 1, S.current = false, h((b) => b + 1));
    }, []), w = c.useCallback(() => {
      S.current = true, performance.mark("canvas-ready");
    }, []);
    return c.useEffect(() => (window.addEventListener("vcad:gl-stuck-lost", m), () => window.removeEventListener("vcad:gl-stuck-lost", m)), [
      m
    ]), c.useEffect(() => {
      const b = setTimeout(() => {
        S.current || m();
      }, 2500), P = setTimeout(() => {
        j.current = 0;
      }, 12e3);
      return () => {
        clearTimeout(b), clearTimeout(P);
      };
    }, [
      y,
      m
    ]), Ic(), Ac(), Tc(), c.useEffect(() => {
      const b = e.current;
      if (!b) return;
      const P = (_) => Mr(_.clientX, _.clientY), C = (_) => Er(_.clientX, _.clientY), R = () => Pr(), I = (_) => {
        _.preventDefault();
      };
      return b.addEventListener("pointerdown", P), window.addEventListener("pointermove", C), window.addEventListener("pointerup", R), window.addEventListener("pointercancel", R), b.addEventListener("contextmenu", I), () => {
        b.removeEventListener("pointerdown", P), window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", R), window.removeEventListener("pointercancel", R), b.removeEventListener("contextmenu", I);
      };
    }, []), c.useEffect(() => {
      const b = e.current;
      b && (b.style.cursor = n && !s && !a ? "pointer" : "");
    }, [
      n,
      s,
      a
    ]), p === "2d" ? i.jsx("div", {
      className: "absolute inset-0 overflow-hidden",
      style: {
        backgroundColor: d ? "#0a0a0a" : "#ffffff"
      },
      children: i.jsx(kc, {})
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
        i.jsx(ss, {
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
          onPointerMissed: (b) => {
            if (Qt()) return;
            const P = $.getState();
            P.isDraggingGizmo || P.isGizmoHovered || b.metaKey || b.shiftKey || (g || t(), o(null));
          },
          onCreated: w,
          shadows: "soft",
          gl: {
            alpha: true,
            antialias: true,
            logarithmicDepthBuffer: true,
            toneMapping: _o,
            toneMappingExposure: 1,
            outputColorSpace: bn,
            preserveDrawingBuffer: true
          },
          style: {
            background: "transparent"
          },
          children: i.jsxs(_s, {
            store: Ls,
            children: [
              i.jsx(Rc, {
                mode: "3d",
                pcbEditFocus: x
              }),
              !g && i.jsx($c, {
                containerRef: e
              })
            ]
          })
        }, y),
        g && i.jsxs(i.Fragment, {
          children: [
            u === "schematic" && i.jsx(c.Suspense, {
              fallback: null,
              children: i.jsx(Fc, {})
            }),
            i.jsx(c.Suspense, {
              fallback: null,
              children: i.jsx(Lc, {})
            }),
            i.jsx(c.Suspense, {
              fallback: null,
              children: i.jsx(Oc, {})
            }),
            i.jsx(c.Suspense, {
              fallback: null,
              children: i.jsx(Nc, {})
            }),
            i.jsx(c.Suspense, {
              fallback: null,
              children: i.jsx(_c, {})
            })
          ]
        }),
        !g && !f && r === "raytrace" && l && i.jsx(Vi, {}),
        i.jsx(Rr, {}),
        !g && i.jsx("div", {
          className: "pointer-events-none absolute top-3 right-3 z-10 flex items-center gap-2",
          children: i.jsx(zc, {})
        })
      ]
    });
  }
  tl = Object.freeze(Object.defineProperty({
    __proto__: null,
    BG_DARK: Bc,
    BG_LIGHT: Vc,
    Viewport: Wc
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  tl as V,
  __tla,
  at as u
};
