const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dist-CG_6leuq.js","assets/rolldown-runtime-COiEfhsA.js","assets/wasm-singleton-BebcX_Il.js","assets/preload-helper-H3bccnwO.js","assets/SchematicView-14l96NRE.js","assets/three-drei-_EcrAYRL.js","assets/three-Dweqhmle.js","assets/useTheme-sFWh-b6j.js","assets/dist-DCVtPzLm.js","assets/react-Cf1qM0wN.js","assets/ElectronicsViewToggle-CsgxNpAy.js","assets/PencilSimple.es-iSn-py_w.js","assets/SSRBase.es-DslTvOt6.js","assets/Cpu.es-BG-PBmuk.js","assets/electronics-store-a7AjZfyv.js","assets/utils-D0T3A-kS.js","assets/LengthTunePanel-COybTS_Y.js","assets/ReceiptPanel-DcVjNsQl.js","assets/PcbGettingStarted-Ct5fYMtj.js","assets/X.es-eqQvie4c.js","assets/notification-store-BYW1uPuc.js","assets/symbol-library-CES5qBO-.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n, S as r, T as i, a, c as o, d as s, f as c, h as l, i as u, l as d, m as f, n as p, o as m, p as h, r as g, s as _, t as v, u as y } from "./three-drei-_EcrAYRL.js";
import { a as b, c as x, i as S, l as C, n as w, o as T, r as E, __tla as __tla_0 } from "./CompressedFieldOverlay-DeoE29kO.js";
import { Cn as ee, Dn as D, Ft as O, Jt as k, Kt as te, Lt as ne, Q as A, U as j, V as re, Vt as ie, W as M, Y as N, Yt as P, Zt as F, at as ae, dt as oe, fn as se, gt as I, ht as L, in as ce, it as R, lt as z, mn as le, on as ue, pn as de, qt as fe, sn as pe, st as B, tn as me, wn as V, wt as he } from "./three-Dweqhmle.js";
import { a as ge, i as _e, n as ve, r as ye, t as be } from "./sub-feature-geometry-DGED74Qo.js";
import { n as xe, r as Se, t as Ce } from "./three-postprocessing-HtSYfuWz.js";
import { t as we } from "./useTheme-sFWh-b6j.js";
import { A as Te, B as Ee, G as De, H as Oe, I as H, J as U, K as W, M as G, N as K, O as ke, R as q, U as Ae, V as je, X as Me, Z as J, a as Y, bt as Ne, ct as Pe, gt as Fe, ht as Ie, j as Le, q as Re, wt as ze, __tla as __tla_1 } from "./dist-DCVtPzLm.js";
import { a as Be, i as Ve, n as He, o as Ue, t as X } from "./electronics-store-a7AjZfyv.js";
import { n as We } from "./embroidery-store-88XXKNEp.js";
import { r as Ge } from "./materials-CddkfdE3.js";
import { n as Ke, r as qe, t as Je } from "./shaders-Dfl1kGdy.js";
import { t as Ye } from "./react-Cf1qM0wN.js";
import { r as Xe } from "./analyze-store-DzNumdE1.js";
import { t as Ze } from "./preload-helper-H3bccnwO.js";
import { n as Qe } from "./molecule-store-D3Ttt0bs.js";
import { t as $e } from "./utils-D0T3A-kS.js";
import { E as et, d as tt, f as nt, h as rt, i as it, m as at, r as ot, u as st, v as ct, y as lt, __tla as __tla_2 } from "./dist-CG_6leuq.js";
import { n as ut, r as dt, t as ft } from "./camera-settings-store-BkvGzrn_.js";
import { t as pt } from "./animation-store-DNZpU05T.js";
import { n as mt } from "./timeline-sample-CRhlrAxA.js";
import { t as ht } from "./download-D9QwX44N.js";
import { t as gt } from "./usePcbLayerConfigs-C73xVCLR.js";
import { t as _t } from "./drawing-store-CPLN4kMr.js";
import { a as vt, i as yt, n as bt, t as xt } from "./drawing-sheet-sOt6RjuO.js";
import { n as St, t as Ct } from "./pcb-interference-CAJIuJB9.js";
import { t as wt } from "./circuit-build-JZPuzV3I.js";
let Co;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  function Tt(e2) {
    let t2 = 2166136261, n2 = 2654435769, r2 = 3735928559, i2 = 3405691582;
    for (let a3 = 0; a3 < e2.length; a3++) {
      let o2 = e2.charCodeAt(a3);
      t2 = Math.imul(t2 ^ o2, 16777619), n2 = Math.imul(n2 ^ o2, 2246822507), r2 = Math.imul(r2 ^ o2, 3266489909), i2 = Math.imul(i2 ^ o2, 668265263);
    }
    let a2 = (e3) => (e3 >>> 0).toString(16).padStart(8, `0`);
    return a2(t2) + a2(n2) + a2(r2) + a2(i2);
  }
  function Et(e2) {
    return e2.replace(/(:\s*)?-?[\d.]+\s*mm\b.*$/i, ``).replace(/\bbelow minimum\b.*$/i, ``).trim();
  }
  function Dt(e2) {
    let t2 = e2.message;
    if (/^\s*Short\b/i.test(t2) || /connected by copper/i.test(t2)) return {
      cause: `routing`
    };
    if (/Unconnected net/i.test(t2) || /Unstitched pad/i.test(t2)) return {
      cause: `connectivity`
    };
    if (/Same-net bypass/i.test(t2)) return {
      cause: `routing`
    };
    let n2 = [
      ...t2.matchAll(/pad\s+([A-Za-z]+\d+)\.\w+/g)
    ].map((e3) => e3[1]);
    if (n2.length >= 2) {
      let e3 = [
        n2[0],
        n2[1]
      ];
      return {
        cause: n2[0] === n2[1] ? `footprint` : `placement`,
        refs: e3
      };
    }
    let r2 = /\bon\s+([A-Za-z]+\d+)\b/.exec(t2);
    return r2 && (/\bdrill\b/i.test(t2) || /annular ring/i.test(t2)) ? {
      cause: `footprint`,
      refs: [
        r2[1],
        r2[1]
      ]
    } : /\btrace\b/i.test(t2) ? {
      cause: `routing`
    } : /Hole-to-hole/i.test(t2) ? {
      cause: `via`
    } : {
      cause: `unknown`
    };
  }
  var Ot = (e2, t2 = 2) => {
    let n2 = 10 ** t2;
    return Math.round(e2 * n2) / n2;
  };
  function kt(e2) {
    let t2 = e2.position ? Ot(e2.position.x, 2) : `?`, n2 = e2.position ? Ot(e2.position.y, 2) : `?`;
    return `${e2.rule}|${t2}|${n2}|${Et(e2.message)}`;
  }
  function At(e2, t2) {
    return t2 === `fixed` ? `credit` : t2 === `introduced` ? `blame` : e2 === `connectivity` || e2 === `routing` ? `carried-over` : `pre-existing`;
  }
  function jt(e2) {
    let t2 = /* @__PURE__ */ new Map();
    for (let n2 of e2) {
      let e3 = kt(n2), r2 = t2.get(e3);
      if (r2) r2.count++;
      else {
        let { cause: r3, refs: i2 } = Dt(n2);
        t2.set(e3, {
          rep: n2,
          cause: r3,
          refs: i2,
          count: 1
        });
      }
    }
    return t2;
  }
  function Mt(e2, t2, n2) {
    let r2 = e2.cause;
    return {
      rule: e2.rep.rule,
      cause: r2,
      status: t2,
      blame: At(r2, t2),
      count: n2,
      message: e2.rep.message,
      position: e2.rep.position,
      refs: e2.refs
    };
  }
  function Nt(e2) {
    var _a2;
    return e2.details && e2.details.length === e2.violations ? {
      list: e2.details,
      full: true
    } : e2.details ? {
      list: e2.details,
      full: false
    } : {
      list: e2.sample ?? [],
      full: (((_a2 = e2.sample) == null ? void 0 : _a2.length) ?? 0) >= e2.violations
    };
  }
  function Pt(e2, t2) {
    let n2 = {};
    for (let r2 of /* @__PURE__ */ new Set([
      ...Object.keys(e2),
      ...Object.keys(t2)
    ])) {
      let i2 = (t2[r2] ?? 0) - (e2[r2] ?? 0);
      i2 !== 0 && (n2[r2] = i2);
    }
    return n2;
  }
  function Ft(e2) {
    if (Array.isArray(e2)) return e2.map(Ft);
    if (e2 && typeof e2 == `object`) {
      let t2 = {};
      for (let n2 of Object.keys(e2).sort()) t2[n2] = Ft(e2[n2]);
      return t2;
    }
    return e2;
  }
  function It(e2) {
    let t2 = (e2.details ?? e2.sample ?? []).map((e3) => {
      let t3 = e3.position ? Ot(e3.position.x, 4) : `?`, n3 = e3.position ? Ot(e3.position.y, 4) : `?`;
      return `${e3.rule}|${e3.severity}|${t3}|${n3}|${e3.message}`;
    }).sort(), n2 = {
      violations: e2.violations,
      errors: e2.errors,
      warnings: e2.warnings,
      byRule: e2.byRule,
      items: t2
    };
    return Tt(JSON.stringify(Ft(n2)));
  }
  function Lt(e2) {
    let t2 = Object.values(e2).some((e3) => e3 > 0), n2 = Object.values(e2).some((e3) => e3 < 0);
    return !t2 && !n2 ? `no-op` : t2 && n2 ? `improved-with-regressions` : t2 ? `regression` : `improved`;
  }
  function Rt(e2, t2) {
    let n2 = Nt(e2.before), r2 = Nt(e2.after), i2 = jt(n2.list), a2 = jt(r2.list), o2 = [], s2 = [], c2 = [], l2 = /* @__PURE__ */ new Set([
      ...i2.keys(),
      ...a2.keys()
    ]);
    for (let e3 of l2) {
      let t3 = i2.get(e3), n3 = a2.get(e3), r3 = (t3 == null ? void 0 : t3.count) ?? 0, l3 = (n3 == null ? void 0 : n3.count) ?? 0, u3 = Math.min(r3, l3);
      u3 > 0 && c2.push(Mt(n3 ?? t3, `persisted`, u3)), l3 > r3 && o2.push(Mt(n3, `introduced`, l3 - r3)), r3 > l3 && s2.push(Mt(t3, `fixed`, r3 - l3));
    }
    let u2 = (e3, t3) => e3.filter(t3).reduce((e4, t4) => e4 + t4.count, 0), d2 = Pt(e2.before.byRule, e2.after.byRule), f2 = e2.after.violations - e2.before.violations, p2 = s2.reduce((e3, t3) => e3 + t3.count, 0), m2 = o2.reduce((e3, t3) => e3 + t3.count, 0), h2 = u2(c2, (e3) => e3.blame === `pre-existing`), g2 = Math.max(0, d2.Short ?? 0), _2 = Lt(d2), v2 = _2 === `regression` || _2 === `improved-with-regressions`, y2 = (e3) => (/^\s*Short\b/i.test(e3.message) ? 0 : e3.cause === `routing` ? 1 : 2) * 1e6 - e3.count;
    return o2.sort((e3, t3) => y2(e3) - y2(t3)), s2.sort((e3, t3) => t3.count - e3.count), c2.sort((e3, t3) => t3.count - e3.count), {
      index: t2,
      tool: e2.tool,
      args: e2.args,
      before: {
        violations: e2.before.violations,
        errors: e2.before.errors,
        byRule: e2.before.byRule
      },
      after: {
        violations: e2.after.violations,
        errors: e2.after.errors,
        byRule: e2.after.byRule
      },
      deltaByRule: d2,
      deltaTotal: f2,
      introduced: o2,
      fixed: s2,
      persisted: c2,
      tally: {
        credited: p2,
        blamed: m2,
        preExisting: h2,
        shortsIntroduced: g2
      },
      regression: v2,
      verdict: _2,
      coverage: n2.full && r2.full ? `full` : `partial`,
      fingerprint: It(e2.after)
    };
  }
  function zt(e2) {
    let t2 = {}, n2 = 0, r2 = 0;
    for (let i2 of e2) t2[i2.rule] = (t2[i2.rule] ?? 0) + 1, i2.severity === `Error` ? n2++ : i2.severity === `Warning` && r2++;
    return {
      violations: e2.length,
      errors: n2,
      warnings: r2,
      byRule: t2,
      details: e2,
      sample: e2,
      sampleCapped: false
    };
  }
  function Bt([e2, t2, n2]) {
    return [
      e2,
      n2,
      -t2
    ];
  }
  var Z = e(t(), 1), Q = n();
  function Vt() {
    let { isDark: e2 } = we(), t2 = J((e3) => e3.isOrbiting), n2 = U((e3) => e3.parts.length > 0), r2 = t2 || !n2, i2 = (0, Z.useMemo)(() => [
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
    ], []), o2 = (0, Z.useMemo)(() => [
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
    ], []), s2 = (0, Z.useMemo)(() => [
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
    return (0, Q.jsxs)(Q.Fragment, {
      children: [
        (0, Q.jsx)(a, {
          args: [
            1e3,
            1e3
          ],
          cellSize: 10,
          cellThickness: 0.5,
          cellColor: e2 ? `#2a2a2a` : `#555555`,
          sectionSize: 100,
          sectionThickness: 1,
          sectionColor: e2 ? `#3a3a3a` : `#333333`,
          fadeDistance: 500,
          fadeStrength: 1,
          infiniteGrid: true
        }),
        r2 && (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(h, {
              points: i2,
              color: e2 ? `#e06c75` : `#c94f4f`,
              lineWidth: 1.5,
              transparent: true,
              opacity: 0.7,
              depthWrite: false,
              renderOrder: -1
            }),
            (0, Q.jsx)(h, {
              points: o2,
              color: e2 ? `#98c379` : `#5a9a4a`,
              lineWidth: 1.5,
              transparent: true,
              opacity: 0.7,
              depthWrite: false,
              renderOrder: -1
            }),
            (0, Q.jsx)(h, {
              points: s2,
              color: e2 ? `#61afef` : `#4a7dc9`,
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
  var Ht = typeof window < `u` && typeof window.matchMedia == `function` && window.matchMedia(`(pointer: coarse)`).matches ? 8 : 4, Ut = Ht * Ht, Wt = {
    startX: 0,
    startY: 0,
    down: false,
    wasDrag: false
  };
  function Gt(e2, t2) {
    Wt.startX = e2, Wt.startY = t2, Wt.down = true, Wt.wasDrag = false;
  }
  function Kt(e2, t2) {
    if (!Wt.down || Wt.wasDrag) return;
    let n2 = e2 - Wt.startX, r2 = t2 - Wt.startY;
    n2 * n2 + r2 * r2 > Ut && (Wt.wasDrag = true);
  }
  function qt() {
    Wt.down = false;
  }
  function Jt() {
    return Wt.wasDrag;
  }
  var Yt = Ye((e2) => ({
    showBoundaryEdges: false,
    setShowBoundaryEdges: (t2) => e2({
      showBoundaryEdges: t2
    }),
    toggleBoundaryEdges: () => e2((e3) => ({
      showBoundaryEdges: !e3.showBoundaryEdges
    })),
    inspectTriangles: false,
    setInspectTriangles: (t2) => e2({
      inspectTriangles: t2,
      currentInspection: null
    }),
    toggleInspectTriangles: () => e2((e3) => ({
      inspectTriangles: !e3.inspectTriangles,
      currentInspection: null
    })),
    currentInspection: null,
    setCurrentInspection: (t2) => e2({
      currentInspection: t2
    })
  })), Xt = [
    `Unknown`,
    `Plane`,
    `Cylinder`,
    `Sphere`,
    `Cone`,
    `Bilinear`,
    `Torus`,
    `BSpline`,
    `FanFill`
  ], Zt = [
    `#888888`,
    `#ffcc00`,
    `#66cc66`,
    `#ff66ff`,
    `#ff8800`,
    `#88ccff`,
    `#00ccff`,
    `#aa66ff`,
    `#ff3366`
  ];
  function Qt(e2, t2) {
    let { positions: n2, indices: r2, faceKinds: i2 } = e2;
    if (t2 < 0 || t2 * 3 + 2 >= r2.length) return null;
    let a2 = r2[t2 * 3], o2 = r2[t2 * 3 + 1], s2 = r2[t2 * 3 + 2], c2 = [
      n2[a2 * 3],
      n2[a2 * 3 + 1],
      n2[a2 * 3 + 2]
    ], l2 = [
      n2[o2 * 3],
      n2[o2 * 3 + 1],
      n2[o2 * 3 + 2]
    ], u2 = [
      n2[s2 * 3],
      n2[s2 * 3 + 1],
      n2[s2 * 3 + 2]
    ], d2 = [
      (c2[0] + l2[0] + u2[0]) / 3,
      (c2[1] + l2[1] + u2[1]) / 3,
      (c2[2] + l2[2] + u2[2]) / 3
    ], f2 = l2[0] - c2[0], p2 = l2[1] - c2[1], m2 = l2[2] - c2[2], h2 = u2[0] - c2[0], g2 = u2[1] - c2[1], _2 = u2[2] - c2[2], v2 = p2 * _2 - m2 * g2, y2 = m2 * h2 - f2 * _2, b2 = f2 * g2 - p2 * h2, x2 = Math.sqrt(v2 * v2 + y2 * y2 + b2 * b2);
    x2 > 0 && (v2 /= x2, y2 /= x2, b2 /= x2);
    let S2 = 0, C2 = 0, w2 = 0, T2 = n2.length / 3;
    for (let e3 = 0; e3 < T2; e3++) S2 += n2[e3 * 3], C2 += n2[e3 * 3 + 1], w2 += n2[e3 * 3 + 2];
    T2 > 0 && (S2 /= T2, C2 /= T2, w2 /= T2);
    let E2 = d2[0] - S2, ee2 = d2[1] - C2, D2 = d2[2] - w2, O2 = Math.sqrt(E2 * E2 + ee2 * ee2 + D2 * D2) || 1, k2 = (v2 * E2 + y2 * ee2 + b2 * D2) / O2, te2 = (i2 == null ? void 0 : i2[t2]) ?? 0;
    return {
      triangleIndex: t2,
      faceKind: te2,
      faceKindName: Xt[te2] ?? `kind(${te2})`,
      vertexIds: [
        a2,
        o2,
        s2
      ],
      positions: [
        c2,
        l2,
        u2
      ],
      centroid: d2,
      ccwNormal: [
        v2,
        y2,
        b2
      ],
      outwardDot: k2
    };
  }
  function $t() {
    let e2 = Yt((e3) => e3.currentInspection), t2 = Yt((e3) => e3.setCurrentInspection);
    if (!Yt((e3) => e3.inspectTriangles) || !e2) return null;
    let n2 = Zt[e2.faceKind] ?? `#888`, { outwardDot: r2 } = e2, i2 = r2 > 0.5 ? `outward \u2713` : r2 < -0.5 ? `INWARD \u2717` : `sideways`;
    return (0, Q.jsxs)(`div`, {
      style: {
        position: `absolute`,
        top: 60,
        left: 12,
        background: `rgba(20,20,24,0.92)`,
        color: `#eee`,
        fontFamily: `monospace`,
        fontSize: 12,
        padding: `10px 14px`,
        border: `1px solid ${n2}`,
        borderRadius: 4,
        zIndex: 50,
        maxWidth: 360,
        lineHeight: 1.5,
        pointerEvents: `auto`
      },
      children: [
        (0, Q.jsxs)(`div`, {
          style: {
            display: `flex`,
            justifyContent: `space-between`,
            marginBottom: 6
          },
          children: [
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsx)(`span`, {
                  style: {
                    display: `inline-block`,
                    width: 10,
                    height: 10,
                    background: n2,
                    marginRight: 6,
                    verticalAlign: `middle`
                  }
                }),
                (0, Q.jsx)(`strong`, {
                  children: e2.faceKindName
                }),
                (0, Q.jsxs)(`span`, {
                  style: {
                    color: `#888`,
                    marginLeft: 8
                  },
                  children: [
                    `tri #`,
                    e2.triangleIndex
                  ]
                })
              ]
            }),
            (0, Q.jsx)(`button`, {
              onClick: () => t2(null),
              style: {
                background: `none`,
                border: `none`,
                color: `#888`,
                cursor: `pointer`,
                fontSize: 12
              },
              children: `\u2715`
            })
          ]
        }),
        (0, Q.jsxs)(`div`, {
          style: {
            color: `#aaa`
          },
          children: [
            `verts: `,
            e2.vertexIds.map((e3) => `#${e3}`).join(`  `)
          ]
        }),
        e2.positions.map((e3, t3) => (0, Q.jsxs)(`div`, {
          style: {
            color: `#ccc`
          },
          children: [
            ` `,
            `(`,
            e3[0].toFixed(3),
            `, `,
            e3[1].toFixed(3),
            `, `,
            e3[2].toFixed(3),
            `)`
          ]
        }, t3)),
        (0, Q.jsxs)(`div`, {
          style: {
            marginTop: 6,
            color: `#aaa`
          },
          children: [
            `CCW normal: (`,
            e2.ccwNormal[0].toFixed(3),
            `, `,
            e2.ccwNormal[1].toFixed(3),
            `, `,
            e2.ccwNormal[2].toFixed(3),
            `)`
          ]
        }),
        (0, Q.jsxs)(`div`, {
          style: {
            color: r2 < 0 ? `#ff6666` : `#66ff66`
          },
          children: [
            `outward dot: `,
            r2.toFixed(3),
            ` \u2014 `,
            i2
          ]
        })
      ]
    });
  }
  function en() {
    let e2 = Yt((e3) => e3.currentInspection), t2 = (0, Z.useMemo)(() => {
      if (!e2) return null;
      let t3 = new M(), n3 = new Float32Array([
        ...e2.positions[0],
        ...e2.positions[1],
        ...e2.positions[2]
      ]);
      return t3.setAttribute(`position`, new j(n3, 3)), t3.setIndex([
        0,
        1,
        2
      ]), t3;
    }, [
      e2
    ]);
    if (!e2 || !t2) return null;
    let n2 = Zt[e2.faceKind] ?? `#ffffff`;
    return (0, Q.jsx)(`mesh`, {
      geometry: t2,
      renderOrder: 999,
      children: (0, Q.jsx)(`meshBasicMaterial`, {
        color: n2,
        transparent: true,
        opacity: 0.5,
        depthTest: false,
        side: 2
      })
    });
  }
  var tn = new N(1, 0.45, 0.1), nn = new N(0.62, 0.32, 0.1), rn = new N(54527), an = Math.PI / 180;
  function on({ color: e2, vertexColors: t2, emissive: n2, emissiveIntensity: r2, metalness: i2, roughness: a2, envMapIntensity: o2 = 1, side: s2 = 2, transmission: c2, ior: l2, thickness: u2, attenuationDistance: d2, attenuationColor: f2, clearcoat: p2, clearcoatRoughness: m2, transparent: h2, opacity: g2, depthWrite: _2 }) {
    if (c2 !== void 0 && c2 > 0 || p2 !== void 0 && p2 > 0) {
      let v2 = f2 ? new N(f2[0], f2[1], f2[2]) : void 0;
      return (0, Q.jsx)(`meshPhysicalMaterial`, {
        color: e2,
        vertexColors: t2,
        emissive: n2,
        emissiveIntensity: r2,
        metalness: i2,
        roughness: a2,
        envMapIntensity: o2,
        flatShading: false,
        side: s2,
        transmission: c2 ?? 0,
        ior: l2 ?? 1.5,
        thickness: u2 ?? 0.5,
        attenuationDistance: d2 ?? 1 / 0,
        attenuationColor: v2,
        clearcoat: p2 ?? 0,
        clearcoatRoughness: m2 ?? 0,
        transparent: h2 || (c2 ?? 0) > 0,
        opacity: g2 ?? 1,
        depthWrite: _2 ?? true
      });
    }
    return (0, Q.jsx)(`meshStandardMaterial`, {
      color: e2,
      vertexColors: t2,
      emissive: n2,
      emissiveIntensity: r2,
      metalness: i2,
      roughness: a2,
      envMapIntensity: o2,
      flatShading: false,
      side: s2,
      transparent: h2,
      opacity: g2 ?? 1,
      depthWrite: _2 ?? true
    });
  }
  function sn(e2, t2) {
    let n2 = e2.indices, r2 = e2.positions, i2 = n2[t2 * 3], a2 = n2[t2 * 3 + 1], o2 = n2[t2 * 3 + 2], s2 = new V(r2[i2 * 3], r2[i2 * 3 + 1], r2[i2 * 3 + 2]), c2 = new V(r2[a2 * 3], r2[a2 * 3 + 1], r2[a2 * 3 + 2]), l2 = new V(r2[o2 * 3], r2[o2 * 3 + 1], r2[o2 * 3 + 2]), u2 = c2.clone().sub(s2), d2 = l2.clone().sub(s2), f2 = u2.cross(d2).normalize(), p2 = [], m2 = n2.length / 3;
    for (let e3 = 0; e3 < m2; e3++) {
      let t3 = n2[e3 * 3], i3 = n2[e3 * 3 + 1], a3 = n2[e3 * 3 + 2], o3 = new V(r2[t3 * 3], r2[t3 * 3 + 1], r2[t3 * 3 + 2]), s3 = new V(r2[i3 * 3], r2[i3 * 3 + 1], r2[i3 * 3 + 2]), c3 = new V(r2[a3 * 3], r2[a3 * 3 + 1], r2[a3 * 3 + 2]), l3 = s3.clone().sub(o3), u3 = c3.clone().sub(o3);
      l3.cross(u3).normalize().dot(f2) > 0.99 && p2.push(e3);
    }
    return p2;
  }
  function cn(e2, t2) {
    let n2 = new M(), r2 = [];
    for (let n3 of t2) {
      let t3 = e2.indices[n3 * 3], i2 = e2.indices[n3 * 3 + 1], a2 = e2.indices[n3 * 3 + 2];
      r2.push(e2.positions[t3 * 3], e2.positions[t3 * 3 + 1], e2.positions[t3 * 3 + 2], e2.positions[i2 * 3], e2.positions[i2 * 3 + 1], e2.positions[i2 * 3 + 2], e2.positions[a2 * 3], e2.positions[a2 * 3 + 1], e2.positions[a2 * 3 + 2]);
    }
    return n2.setAttribute(`position`, new z(r2, 3)), n2.computeVertexNormals(), n2;
  }
  function ln(e2, t2, n2) {
    let r2 = e2.indices[t2 * 3], i2 = e2.indices[t2 * 3 + 1], a2 = e2.indices[t2 * 3 + 2], o2 = new V(e2.positions[r2 * 3], e2.positions[r2 * 3 + 1], e2.positions[r2 * 3 + 2]), s2 = new V(e2.positions[i2 * 3], e2.positions[i2 * 3 + 1], e2.positions[i2 * 3 + 2]), c2 = new V(e2.positions[a2 * 3], e2.positions[a2 * 3 + 1], e2.positions[a2 * 3 + 2]), l2 = s2.clone().sub(o2).cross(c2.clone().sub(o2)).normalize(), u2 = l2.dot(o2), d2 = /* @__PURE__ */ new Map(), f2 = e2.indices.length / 3;
    for (let t3 = 0; t3 < f2; t3++) {
      let n3 = e2.indices[t3 * 3], r3 = e2.indices[t3 * 3 + 1], i3 = e2.indices[t3 * 3 + 2], a3 = new V(e2.positions[n3 * 3], e2.positions[n3 * 3 + 1], e2.positions[n3 * 3 + 2]), o3 = new V(e2.positions[r3 * 3], e2.positions[r3 * 3 + 1], e2.positions[r3 * 3 + 2]), s3 = new V(e2.positions[i3 * 3], e2.positions[i3 * 3 + 1], e2.positions[i3 * 3 + 2]);
      if (!(o3.clone().sub(a3).cross(s3.clone().sub(a3)).normalize().dot(l2) < 0.99) && !(Math.abs(l2.dot(a3) - u2) > 0.01)) for (let e3 of [
        a3,
        o3,
        s3
      ]) {
        let t4 = `${e3.x.toFixed(4)},${e3.y.toFixed(4)},${e3.z.toFixed(4)}`;
        d2.has(t4) || d2.set(t4, {
          x: e3.x,
          y: e3.y,
          z: e3.z
        });
      }
    }
    let p2 = Array.from(d2.values()), m2 = 0, h2 = 0, g2 = 0;
    for (let e3 of p2) m2 += e3.x, h2 += e3.y, g2 += e3.z;
    let _2 = Math.max(p2.length, 1), v2 = {
      x: m2 / _2,
      y: h2 / _2,
      z: g2 / _2
    };
    return {
      partId: n2,
      faceIndex: t2,
      normal: {
        x: l2.x,
        y: l2.y,
        z: l2.z
      },
      centroid: v2,
      vertices: p2
    };
  }
  function un({ mesh: e2, materialKey: t2 }) {
    let n2 = (0, Z.useRef)(null), r2 = (0, Z.useRef)(null), [a2, o2] = (0, Z.useState)(false), c2 = J((e3) => e3.showWireframe), l2 = J((e3) => e3.isOrbiting), u2 = i((e3) => e3.invalidate), d2 = U((e3) => e3.document.materials), f2 = (0, Z.useMemo)(() => {
      if (d2[t2]) return d2[t2];
      let e3 = Ge(t2);
      return e3 ? {
        name: e3.name,
        color: e3.color,
        metallic: e3.metallic,
        roughness: e3.roughness,
        transmission: e3.transmission,
        ior: e3.ior,
        thickness: e3.thickness,
        attenuationDistance: e3.attenuationDistance,
        attenuationColor: e3.attenuationColor,
        clearcoat: e3.clearcoat,
        clearcoatRoughness: e3.clearcoatRoughness
      } : null;
    }, [
      d2,
      t2
    ]), p2 = (0, Z.useMemo)(() => f2 ? new N(f2.color[0], f2.color[1], f2.color[2]) : new N(0.55, 0.55, 0.55), [
      f2
    ]);
    (0, Z.useEffect)(() => {
      o2(false);
      let t3 = n2.current;
      if (!t3) return;
      let r3 = false;
      return (async () => {
        let { getKernelWasmSync: n3 } = await Ze(async () => {
          let { getKernelWasmSync: e3 } = await import("./dist-CG_6leuq.js").then(async (m3) => {
            await m3.__tla;
            return m3;
          }).then((e4) => e4.n);
          return {
            getKernelWasmSync: e3
          };
        }, __vite__mapDeps([0,1,2,3])), i2 = n3();
        if (r3) return;
        let a3 = new Float32Array(e2.positions), s2 = new Uint32Array(e2.indices), c3, l3, d3;
        if (i2 == null ? void 0 : i2.renderBakeMesh) {
          let e3 = JSON.parse(i2.renderBakeMesh(JSON.stringify({
            positions: Array.from(a3),
            indices: Array.from(s2)
          })));
          c3 = new Float32Array(e3.positions), l3 = new Uint32Array(e3.indices), d3 = new Float32Array(e3.normals);
        } else c3 = a3, l3 = s2, d3 = new Float32Array();
        t3.setAttribute(`position`, new j(c3, 3)), t3.setIndex(new j(l3, 1)), d3.length === c3.length ? t3.setAttribute(`normal`, new j(d3, 3)) : t3.computeVertexNormals(), t3.computeBoundingSphere(), t3.computeBoundingBox(), o2(true), u2();
      })(), () => {
        r3 = true, t3.dispose();
      };
    }, [
      e2,
      u2
    ]);
    let m2 = (0, Z.useRef)(null);
    return (0, Z.useEffect)(() => {
      let e3 = r2.current;
      e3 && (m2.current || (m2.current = e3.raycast.bind(e3)), e3.raycast = l2 ? () => {
      } : m2.current);
    }, [
      l2
    ]), (0, Q.jsxs)(`mesh`, {
      ref: r2,
      castShadow: true,
      receiveShadow: true,
      children: [
        (0, Q.jsx)(`bufferGeometry`, {
          ref: n2
        }),
        (0, Q.jsx)(on, {
          color: p2,
          metalness: (f2 == null ? void 0 : f2.metallic) ?? 0,
          roughness: (f2 == null ? void 0 : f2.roughness) ?? 0.7,
          transmission: f2 == null ? void 0 : f2.transmission,
          ior: f2 == null ? void 0 : f2.ior,
          thickness: f2 == null ? void 0 : f2.thickness,
          attenuationDistance: f2 == null ? void 0 : f2.attenuationDistance,
          attenuationColor: f2 == null ? void 0 : f2.attenuationColor,
          clearcoat: f2 == null ? void 0 : f2.clearcoat,
          clearcoatRoughness: f2 == null ? void 0 : f2.clearcoatRoughness
        }),
        c2 && a2 && (0, Q.jsx)(s, {
          threshold: 15,
          color: `#666`
        })
      ]
    });
  }
  var dn = (0, Z.memo)(function({ partInfo: e2, mesh: t2, materialKey: n2, selected: r2, transform: a2, selectionId: o2, ghosted: c2 = false }) {
    let l2 = (0, Z.useRef)(null), u2 = (0, Z.useRef)(null), [d2, p2] = (0, Z.useState)(false), m2 = J((e3) => e3.select), h2 = J((e3) => e3.toggleSelect), g2 = J((e3) => e3.selectItem), _2 = J((e3) => e3.setHoveredItem), v2 = J((e3) => e3.selectionFilter), b2 = J((e3) => e3.showWireframe), x2 = J((e3) => e3.hoveredPartId), S2 = J((e3) => e3.setHoveredPartId), C2 = i((e3) => e3.camera), w2 = i((e3) => e3.size), T2 = i((e3) => e3.invalidate), E2 = U((e3) => e3.document.materials), ee2 = U((e3) => e3.renamePart), D2 = Xe((t3) => {
      var _a2;
      return ((_a2 = t3.fieldOverlay) == null ? void 0 : _a2.partId) === e2.id ? t3.fieldOverlay.colors : null;
    }), O2 = q((e3) => e3.faceSelectionMode), k2 = q((e3) => e3.hoveredFace), te2 = q((e3) => e3.setHoveredFace), ne2 = q((e3) => e3.selectFace), A2 = J((e3) => e3.isOrbiting), ie2 = J((e3) => e3.isDraggingGizmo), M2 = J((e3) => e3.isGizmoHovered), P2 = J((e3) => e3.captureMode), F2 = r2 && !P2, oe2 = o2 ?? e2.id, se2 = J((e3) => e3.hoveredItem), I2 = x2 === oe2 || se2 != null && se2.kind !== `segment` && se2.kind !== `constraint` && (se2.kind === `part` ? se2.id === oe2 : se2.partId === e2.id), L2 = O2 && (k2 == null ? void 0 : k2.partId) === e2.id, ce2 = (0, Z.useMemo)(() => A2 || !L2 || (k2 == null ? void 0 : k2.faceIndex) == null ? null : cn(t2, sn(t2, k2.faceIndex)), [
      A2,
      L2,
      k2 == null ? void 0 : k2.faceIndex,
      t2
    ]);
    (0, Z.useEffect)(() => () => {
      ce2 == null ? void 0 : ce2.dispose();
    }, [
      ce2
    ]);
    let [z2, le2] = (0, Z.useState)(false), [de2, fe2] = (0, Z.useState)(e2.name), pe2 = (0, Z.useRef)(null), B2 = J((e3) => e3.previewMaterial), me2 = (0, Z.useMemo)(() => (B2 == null ? void 0 : B2.partId) === e2.id ? B2.materialKey : n2, [
      B2,
      e2.id,
      n2
    ]), he2 = (0, Z.useMemo)(() => {
      let t3 = (e3) => e3 ? {
        name: e3.name,
        color: e3.color,
        metallic: e3.metallic,
        roughness: e3.roughness,
        transmission: e3.transmission,
        ior: e3.ior,
        thickness: e3.thickness,
        attenuationDistance: e3.attenuationDistance,
        attenuationColor: e3.attenuationColor,
        clearcoat: e3.clearcoat,
        clearcoatRoughness: e3.clearcoatRoughness
      } : null;
      if ((B2 == null ? void 0 : B2.partId) === e2.id) {
        let e3 = B2.materialKey;
        if (E2[e3]) return E2[e3];
        let n3 = t3(Ge(e3));
        if (n3) return n3;
      }
      return E2[n2] ? E2[n2] : t3(Ge(n2));
    }, [
      E2,
      n2,
      B2,
      e2.id
    ]), _e2 = (0, Z.useMemo)(() => Ke(me2) ? Je(me2) : null, [
      me2
    ]), ve2 = (0, Z.useMemo)(() => _e2 ? new ue({
      vertexShader: _e2.vertexShader,
      fragmentShader: _e2.fragmentShader,
      uniforms: _e2.uniforms,
      side: 2
    }) : null, [
      _e2
    ]);
    (0, Z.useEffect)(() => () => {
      ve2 == null ? void 0 : ve2.dispose();
    }, [
      ve2
    ]);
    let ye2 = (0, Z.useMemo)(() => he2 ? new N(he2.color[0], he2.color[1], he2.color[2]) : new N(0.55, 0.55, 0.55), [
      he2
    ]), be2 = !c2 && !P2 && (F2 || I2 && !O2), xe2 = (0, Z.useMemo)(() => {
      var _a2;
      if (!d2) return false;
      let e3 = l2.current;
      if (!e3) return false;
      let t3 = new R(e3, 15), n3 = ((_a2 = t3.attributes.position) == null ? void 0 : _a2.count) ?? 0;
      return t3.dispose(), n3 === 0;
    }, [
      d2,
      t2
    ]);
    (0, Z.useEffect)(() => {
      fe2(e2.name);
    }, [
      e2.name,
      r2
    ]), (0, Z.useEffect)(() => {
      var _a2;
      z2 && ((_a2 = pe2.current) == null ? void 0 : _a2.select());
    }, [
      z2
    ]), (0, Z.useEffect)(() => {
      p2(false);
      let e3 = l2.current;
      if (!e3) return;
      let n3 = new Float32Array(t2.positions), r3 = new Uint32Array(t2.indices);
      if (e3.setAttribute(`position`, new j(n3, 3)), e3.setIndex(new j(r3, 1)), t2.normals && t2.normals.length === n3.length) {
        let n4 = new Float32Array(t2.normals);
        e3.setAttribute(`normal`, new j(n4, 3));
      } else console.warn(`[SceneMesh] kernel emitted mesh without normals \u2014 rebuild @vcad/kernel-wasm; falling back to computed normals`), e3.computeVertexNormals();
      if (D2 && D2.length === n3.length) e3.setAttribute(`color`, new j(D2, 3));
      else if (t2.colors && t2.colors.length === n3.length) {
        let n4 = new Float32Array(t2.colors);
        e3.setAttribute(`color`, new j(n4, 3));
      } else e3.deleteAttribute(`color`);
      return e3.computeBoundingSphere(), e3.computeBoundingBox(), p2(true), T2(), () => {
        e3.dispose();
      };
    }, [
      t2,
      e2.name,
      T2,
      D2
    ]), (0, Z.useEffect)(() => {
      let e3 = u2.current;
      if (e3) {
        if (a2) {
          e3.position.set(a2.translation.x, a2.translation.y, a2.translation.z);
          let t3 = new ae(a2.rotation.x * an, a2.rotation.y * an, a2.rotation.z * an, `ZYX`);
          e3.quaternion.setFromEuler(t3), e3.scale.set(a2.scale.x, a2.scale.y, a2.scale.z);
        } else e3.position.set(0, 0, 0), e3.quaternion.identity(), e3.scale.set(1, 1, 1);
        T2();
      }
    }, [
      a2,
      T2
    ]);
    let Se2 = (0, Z.useMemo)(() => {
      if (!t2.positions.length) return new V();
      let e3 = new re(), n3 = new V();
      for (let r4 = 0; r4 < t2.positions.length; r4 += 3) n3.set(t2.positions[r4], t2.positions[r4 + 1], t2.positions[r4 + 2]), e3.expandByPoint(n3);
      let r3 = new V();
      return e3.getCenter(r3), r3.z = e3.max.z + 4, r3;
    }, [
      t2.positions
    ]), Ce2 = (0, Z.useCallback)(() => {
      let t3 = de2.trim();
      t3 && t3 !== e2.name && ee2(e2.id, t3), le2(false);
    }, [
      de2,
      e2.id,
      e2.name,
      ee2
    ]), we2 = (0, Z.useCallback)(() => {
      fe2(e2.name), le2(false);
    }, [
      e2.name
    ]), Te2 = Yt((e3) => e3.inspectTriangles), Ee2 = Yt((e3) => e3.setCurrentInspection), De2 = (0, Z.useCallback)((n3) => {
      if (!Jt() && !(ie2 || M2)) {
        if (n3.stopPropagation(), Te2 && n3.faceIndex != null) {
          let e3 = Qt(t2, n3.faceIndex);
          e3 && (Ee2(e3), console.log(`[triangle-inspector]`, e3));
        } else if (O2 && n3.faceIndex != null) {
          let r3 = ln(t2, n3.faceIndex, e2.id);
          ne2(r3);
        } else if (n3.nativeEvent.shiftKey || n3.nativeEvent.metaKey) h2(oe2);
        else {
          if (n3.faceIndex != null) {
            let r3 = ge({
              triIndex: n3.faceIndex,
              hitPoint: n3.point,
              mesh: t2,
              partId: e2.id,
              filter: v2,
              camera: C2,
              viewport: w2
            });
            if (r3) {
              g2(r3);
              return;
            }
          }
          m2(oe2);
        }
      }
    }, [
      oe2,
      ie2,
      M2,
      O2,
      t2,
      e2.id,
      ne2,
      h2,
      m2,
      g2,
      v2,
      C2,
      w2,
      Te2,
      Ee2
    ]), Oe2 = (0, Z.useCallback)((n3) => {
      if (!(A2 || ie2 || M2)) {
        if (O2 && n3.faceIndex != null) {
          n3.stopPropagation();
          let r3 = ln(t2, n3.faceIndex, e2.id);
          te2(r3);
        } else if (n3.faceIndex != null) {
          n3.stopPropagation();
          let r3 = ge({
            triIndex: n3.faceIndex,
            hitPoint: n3.point,
            mesh: t2,
            partId: e2.id,
            filter: v2,
            camera: C2,
            viewport: w2
          });
          _2(r3 || {
            kind: `part`,
            id: e2.id
          });
        }
      }
    }, [
      A2,
      ie2,
      M2,
      O2,
      t2,
      e2.id,
      te2,
      _2,
      v2,
      C2,
      w2
    ]), H2 = (0, Z.useCallback)((t3) => {
      A2 || ie2 || M2 || (t3.stopPropagation(), O2 || S2(e2.id));
    }, [
      A2,
      ie2,
      M2,
      O2,
      e2.id,
      S2
    ]), W2 = (0, Z.useCallback)(() => {
      A2 || (O2 ? te2(null) : S2(null));
    }, [
      A2,
      O2,
      te2,
      S2
    ]), G2 = (0, Z.useRef)(null);
    return (0, Z.useEffect)(() => {
      let e3 = u2.current;
      e3 && (G2.current || (G2.current = e3.raycast.bind(e3)), e3.raycast = A2 || c2 ? () => {
      } : G2.current);
    }, [
      A2,
      c2
    ]), (0, Q.jsxs)(`mesh`, {
      ref: u2,
      castShadow: true,
      receiveShadow: true,
      onClick: De2,
      onPointerMove: Oe2,
      onPointerOver: H2,
      onPointerOut: W2,
      material: ve2 ?? void 0,
      userData: {
        partId: e2.id
      },
      children: [
        (0, Q.jsx)(`bufferGeometry`, {
          ref: l2
        }),
        !ve2 && (0, Q.jsx)(on, {
          color: t2.colors || D2 ? void 0 : ye2,
          vertexColors: !!t2.colors || !!D2,
          metalness: (he2 == null ? void 0 : he2.metallic) ?? 0,
          roughness: (he2 == null ? void 0 : he2.roughness) ?? 0.7,
          transmission: he2 == null ? void 0 : he2.transmission,
          ior: he2 == null ? void 0 : he2.ior,
          thickness: he2 == null ? void 0 : he2.thickness,
          attenuationDistance: he2 == null ? void 0 : he2.attenuationDistance,
          attenuationColor: he2 == null ? void 0 : he2.attenuationColor,
          clearcoat: he2 == null ? void 0 : he2.clearcoat,
          clearcoatRoughness: he2 == null ? void 0 : he2.clearcoatRoughness,
          transparent: c2 || void 0,
          opacity: c2 ? 0.16 : void 0,
          depthWrite: !c2 && void 0
        }),
        b2 && d2 && (0, Q.jsx)(s, {
          threshold: 15,
          color: `#666`
        }),
        be2 && d2 && !xe2 && (0, Q.jsx)(s, {
          threshold: 15,
          color: F2 ? tn : nn,
          lineWidth: F2 ? 3 : 2,
          renderOrder: 1
        }),
        be2 && d2 && xe2 && (0, Q.jsx)(y, {
          color: F2 ? tn : nn,
          thickness: F2 ? 3 : 2,
          angle: Math.PI,
          renderOrder: 1
        }),
        ce2 && (0, Q.jsx)(`mesh`, {
          geometry: ce2,
          renderOrder: 1,
          children: (0, Q.jsx)(`meshBasicMaterial`, {
            color: rn,
            transparent: true,
            opacity: 0.4,
            depthTest: true,
            depthWrite: false,
            polygonOffset: true,
            polygonOffsetFactor: -4,
            polygonOffsetUnits: -4,
            side: 2
          })
        }),
        r2 && !O2 && (0, Q.jsx)(f, {
          position: Se2,
          center: true,
          style: {
            pointerEvents: `auto`
          },
          children: (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-text whitespace-nowrap bg-surface/90 backdrop-blur-sm border border-border rounded-md shadow-sm`,
            children: [
              z2 ? (0, Q.jsx)(`input`, {
                ref: pe2,
                type: `text`,
                value: de2,
                onClick: (e3) => e3.stopPropagation(),
                onFocus: (e3) => e3.currentTarget.select(),
                onChange: (e3) => fe2(e3.target.value),
                onBlur: Ce2,
                onKeyDown: (e3) => {
                  e3.key === `Enter` && Ce2(), e3.key === `Escape` && we2();
                },
                className: `min-w-[80px] bg-transparent text-text outline-none`,
                autoFocus: true
              }) : (0, Q.jsx)(`button`, {
                type: `button`,
                onClick: (e3) => {
                  e3.stopPropagation(), le2(true);
                },
                className: `text-text`,
                children: e2.name
              }),
              !z2 && Ie(e2) && (0, Q.jsx)(`button`, {
                type: `button`,
                onClick: (e3) => {
                  e3.stopPropagation(), X.getState().enter();
                },
                className: `px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors`,
                children: `Edit`
              }),
              !z2 && (Ne(e2) || Pe(e2)) && (0, Q.jsx)(`button`, {
                type: `button`,
                onClick: (e3) => {
                  e3.stopPropagation(), We.getState().openPanel();
                },
                className: `px-1.5 py-0.5 text-[10px] rounded bg-brand/15 text-brand hover:bg-brand/25 transition-colors`,
                children: `Edit`
              })
            ]
          })
        })
      ]
    });
  }), fn = {
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
  }, pn = {
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
  function mn(e2, t2) {
    let n2 = e2.species[e2.speciesIdx[t2]];
    return (n2 == null ? void 0 : n2.color) ?? fn[(n2 == null ? void 0 : n2.element) ?? `C`] ?? [
      0.85,
      0.4,
      0.85
    ];
  }
  function hn(e2, t2, n2) {
    let r2 = e2.species[e2.speciesIdx[t2]], i2 = (r2 == null ? void 0 : r2.radius) ?? pn[(r2 == null ? void 0 : r2.element) ?? `C`] ?? 0.75;
    return n2 === `space_filling` ? i2 * 1.8 : n2 === `wireframe` ? i2 * 0.2 : i2 * 0.42;
  }
  var gn = `
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
}`, _n = `
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
}`, vn = `
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
${gn}
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
}`, yn = `
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
}`, bn = `
precision highp float;
uniform float logDepthBufFC;
uniform mat4 projectionMatrix; // three binds this built-in when declared in-stage
in vec3 vColor;
in vec3 vNormalV;
in vec3 vViewPos;
out vec4 fragColor;
${gn}
void main(){
  vec3 N = normalize(vNormalV);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(-vViewPos);
  vec4 clip = projectionMatrix * vec4(vViewPos, 1.0);
  gl_FragDepth = log2(1.0 + clip.w) * logDepthBufFC * 0.5;
  fragColor = vec4(shadeMolecule(vColor, N, V), 1.0);
}`;
  function xn({ molecule: e2, representation: t2 = `ball_and_stick` }) {
    let n2 = (0, Z.useRef)(null), i2 = (0, Z.useRef)(null), a2 = Qe((e3) => e3.selectAtom), o2 = e2.positions.length, s2 = e2.bonds ?? [], c2 = t2 !== `space_filling`, l2 = (0, Z.useMemo)(() => {
      let t3 = 1e-3;
      for (let n3 of e2.positions) t3 = Math.max(t3, Math.hypot(n3[0], n3[1], n3[2]));
      return 34 / t3;
    }, [
      e2
    ]), u2 = (0, Z.useMemo)(() => {
      let n3 = new P(2, 2), r2 = new I();
      r2.index = n3.index, r2.attributes.position = n3.attributes.position, r2.attributes.uv = n3.attributes.uv;
      let i3 = new Float32Array(o2 * 3), a3 = new Float32Array(o2), s3 = new Float32Array(o2 * 3), c3 = new Float32Array(o2);
      for (let n4 = 0; n4 < o2; n4++) {
        let r3 = e2.positions[n4];
        i3[n4 * 3] = r3[0] * l2, i3[n4 * 3 + 1] = r3[1] * l2, i3[n4 * 3 + 2] = r3[2] * l2, a3[n4] = hn(e2, n4, t2) * l2;
        let o3 = mn(e2, n4);
        s3[n4 * 3] = o3[0], s3[n4 * 3 + 1] = o3[1], s3[n4 * 3 + 2] = o3[2], c3[n4] = n4;
      }
      return r2.setAttribute(`iCenter`, new L(i3, 3)), r2.setAttribute(`iRadius`, new L(a3, 1)), r2.setAttribute(`iColor`, new L(s3, 3)), r2.setAttribute(`iIndex`, new L(c3, 1)), r2.instanceCount = o2, n3.dispose(), r2;
    }, [
      e2,
      o2,
      t2,
      l2
    ]), d2 = (0, Z.useMemo)(() => new ue({
      glslVersion: oe,
      uniforms: {
        logDepthBufFC: {
          value: 1
        },
        uSelected: {
          value: -1
        }
      },
      vertexShader: _n,
      fragmentShader: vn
    }), []), f2 = (0, Z.useMemo)(() => new se(1, 12, 8), []), p2 = (0, Z.useMemo)(() => new ne({
      colorWrite: false,
      depthWrite: false
    }), []), m2 = (0, Z.useMemo)(() => new A(1, 1, 1, 12, 1), []), h2 = (0, Z.useMemo)(() => new ue({
      glslVersion: oe,
      uniforms: {
        logDepthBufFC: {
          value: 1
        }
      },
      vertexShader: yn,
      fragmentShader: bn
    }), []), g2 = c2 ? s2.length * 2 : 0;
    return (0, Z.useEffect)(() => () => u2.dispose(), [
      u2
    ]), (0, Z.useEffect)(() => () => {
      d2.dispose(), f2.dispose(), p2.dispose(), m2.dispose(), h2.dispose();
    }, [
      d2,
      f2,
      p2,
      m2,
      h2
    ]), (0, Z.useLayoutEffect)(() => {
      let r2 = n2.current;
      if (!r2 || !c2) return;
      let i3 = (t2 === `wireframe` ? 0.05 : 0.11) * l2, a3 = new O(), o3 = new V(), u3 = new V(), d3 = new F(), f3 = new V(0, 1, 0), p3 = new V(), m3 = new V(), h3 = new V(), _2 = new V(), v2 = new N(), y2 = 0;
      for (let t3 of s2) {
        let n3 = e2.positions[t3.a], s3 = e2.positions[t3.b];
        p3.set(n3[0] * l2, n3[1] * l2, n3[2] * l2), m3.set(s3[0] * l2, s3[1] * l2, s3[2] * l2), _2.addVectors(p3, m3).multiplyScalar(0.5), h3.subVectors(m3, p3);
        let c3 = h3.length();
        if (c3 < 1e-6) {
          a3.makeScale(0, 0, 0), r2.setMatrixAt(y2, a3), r2.setMatrixAt(y2 + 1, a3), y2 += 2;
          continue;
        }
        h3.normalize(), d3.setFromUnitVectors(f3, h3), u3.set(i3, c3 / 2, i3), o3.addVectors(p3, _2).multiplyScalar(0.5), a3.compose(o3, d3, u3), r2.setMatrixAt(y2, a3);
        let g3 = mn(e2, t3.a);
        v2.setRGB(g3[0], g3[1], g3[2]), r2.setColorAt(y2, v2), o3.addVectors(_2, m3).multiplyScalar(0.5), a3.compose(o3, d3, u3), r2.setMatrixAt(y2 + 1, a3);
        let b2 = mn(e2, t3.b);
        v2.setRGB(b2[0], b2[1], b2[2]), r2.setColorAt(y2 + 1, v2), y2 += 2;
      }
      r2.count = g2, r2.instanceMatrix.needsUpdate = true, r2.instanceColor && (r2.instanceColor.needsUpdate = true);
    }, [
      e2,
      s2,
      c2,
      t2,
      g2,
      l2
    ]), (0, Z.useLayoutEffect)(() => {
      let n3 = i2.current;
      if (!n3) return;
      let r2 = new O(), a3 = new V(), s3 = new V(), c3 = new F();
      for (let i3 = 0; i3 < o2; i3++) {
        let o3 = e2.positions[i3], u3 = hn(e2, i3, t2) * l2;
        a3.set(o3[0] * l2, o3[1] * l2, o3[2] * l2), s3.set(u3, u3, u3), r2.compose(a3, c3, s3), n3.setMatrixAt(i3, r2);
      }
      n3.count = o2, n3.instanceMatrix.needsUpdate = true;
    }, [
      e2,
      o2,
      t2,
      l2
    ]), r(({ camera: e3 }) => {
      let t3 = 2 / Math.log2(e3.far + 1);
      d2.uniforms.logDepthBufFC.value = t3, h2.uniforms.logDepthBufFC.value = t3;
      let n3 = Qe.getState().selectedAtomIndex;
      d2.uniforms.uSelected.value = n3 ?? -1;
    }), o2 === 0 ? null : (0, Q.jsxs)(`group`, {
      children: [
        (0, Q.jsx)(`mesh`, {
          geometry: u2,
          material: d2,
          frustumCulled: false
        }),
        (0, Q.jsx)(`instancedMesh`, {
          ref: i2,
          args: [
            f2,
            p2,
            o2
          ],
          frustumCulled: false,
          onClick: (e3) => {
            if (Jt()) return;
            e3.stopPropagation();
            let t3 = e3.instanceId;
            if (t3 === void 0) return;
            let n3 = Qe.getState().selectedAtomIndex;
            a2(n3 === t3 ? null : t3);
          }
        }, o2),
        c2 && s2.length > 0 && (0, Q.jsx)(`instancedMesh`, {
          ref: n2,
          args: [
            m2,
            h2,
            g2
          ],
          frustumCulled: false
        })
      ]
    });
  }
  function Sn(e2, t2) {
    let n2 = /* @__PURE__ */ new Map(), r2 = (e3, t3) => e3 < t3 ? `${e3},${t3}` : `${t3},${e3}`, i2 = t2.length / 3;
    for (let e3 = 0; e3 < i2; e3++) {
      let i3 = t2[3 * e3], a3 = t2[3 * e3 + 1], o2 = t2[3 * e3 + 2];
      for (let [e4, t3] of [
        [
          i3,
          a3
        ],
        [
          a3,
          o2
        ],
        [
          o2,
          i3
        ]
      ]) {
        let i4 = r2(e4, t3);
        n2.set(i4, (n2.get(i4) ?? 0) + 1);
      }
    }
    let a2 = [];
    for (let [t3, r3] of n2) {
      if (r3 !== 1) continue;
      let [n3, i3] = t3.split(`,`), o2 = parseInt(n3, 10), s2 = parseInt(i3, 10);
      a2.push(e2[3 * o2], e2[3 * o2 + 1], e2[3 * o2 + 2], e2[3 * s2], e2[3 * s2 + 1], e2[3 * s2 + 2]);
    }
    return new Float32Array(a2);
  }
  function Cn({ positions: e2, indices: t2 }) {
    let n2 = (0, Z.useMemo)(() => {
      let n3 = Sn(e2, t2), r2 = new M();
      return r2.setAttribute(`position`, new j(n3, 3)), r2;
    }, [
      e2,
      t2
    ]);
    return (0, Q.jsx)(`lineSegments`, {
      geometry: n2,
      renderOrder: 999,
      children: (0, Q.jsx)(`lineBasicMaterial`, {
        color: `#ff2040`,
        linewidth: 2,
        depthTest: false,
        transparent: true
      })
    });
  }
  var wn = `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`, Tn = `
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
  function En({ mesh: e2 }) {
    let t2 = (0, Z.useRef)(null), n2 = (0, Z.useMemo)(() => new ue({
      vertexShader: wn,
      fragmentShader: Tn,
      side: 2
    }), []);
    return (0, Z.useEffect)(() => {
      let n3 = t2.current;
      if (n3) return n3.setAttribute(`position`, new j(e2.positions, 3)), n3.setIndex(new j(e2.indices, 1)), e2.normals && e2.normals.length === e2.positions.length ? n3.setAttribute(`normal`, new j(e2.normals, 3)) : n3.computeVertexNormals(), () => {
        n3.dispose();
      };
    }, [
      e2
    ]), (0, Q.jsx)(`mesh`, {
      material: n2,
      renderOrder: 1,
      children: (0, Q.jsx)(`bufferGeometry`, {
        ref: t2
      })
    });
  }
  function Dn() {
    let e2 = J((e3) => e3.clearanceIndicator), t2 = J((e3) => e3.captureMode);
    if (!e2 || t2) return null;
    let { pointA: n2, pointB: r2, distanceMm: i2, pass: a2, label: o2 } = e2, s2 = [
      (n2[0] + r2[0]) / 2,
      (n2[1] + r2[1]) / 2,
      (n2[2] + r2[2]) / 2
    ], c2 = a2 ? `#22c55e` : `#ef4444`;
    return (0, Q.jsxs)(`group`, {
      children: [
        (0, Q.jsx)(h, {
          points: [
            n2,
            r2
          ],
          color: c2,
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 1.2
        }),
        (0, Q.jsxs)(`mesh`, {
          position: n2,
          children: [
            (0, Q.jsx)(`sphereGeometry`, {
              args: [
                0.8,
                12,
                12
              ]
            }),
            (0, Q.jsx)(`meshBasicMaterial`, {
              color: c2
            })
          ]
        }),
        (0, Q.jsxs)(`mesh`, {
          position: r2,
          children: [
            (0, Q.jsx)(`sphereGeometry`, {
              args: [
                0.8,
                12,
                12
              ]
            }),
            (0, Q.jsx)(`meshBasicMaterial`, {
              color: c2
            })
          ]
        }),
        (0, Q.jsx)(f, {
          position: s2,
          center: true,
          zIndexRange: [
            40,
            0
          ],
          children: (0, Q.jsxs)(`div`, {
            className: `pointer-events-auto flex items-center gap-1.5 rounded border px-1.5 py-0.5 text-[10px] font-mono whitespace-nowrap shadow-sm`,
            style: {
              background: `var(--color-bg, #fff)`,
              borderColor: c2,
              color: c2
            },
            children: [
              (0, Q.jsxs)(`span`, {
                children: [
                  o2 ? `${o2}: ` : ``,
                  i2.toFixed(2),
                  ` mm`
                ]
              }),
              (0, Q.jsx)(`span`, {
                className: `font-sans`,
                children: a2 ? `clear` : `violated`
              }),
              (0, Q.jsx)(`button`, {
                "aria-label": `Dismiss clearance measurement`,
                className: `ml-0.5 opacity-60 hover:opacity-100`,
                onClick: () => J.getState().setClearanceIndicator(null),
                children: `\xD7`
              })
            ]
          })
        })
      ]
    });
  }
  function On({ mesh: e2 }) {
    let t2 = (0, Z.useRef)(null);
    return (0, Z.useEffect)(() => {
      let n2 = t2.current;
      if (!n2) return;
      let r2 = new Float32Array(e2.positions), i2 = new Uint32Array(e2.indices);
      return n2.setAttribute(`position`, new j(r2, 3)), n2.setIndex(new j(i2, 1)), n2.computeVertexNormals(), n2.computeBoundingSphere(), () => {
        n2.dispose();
      };
    }, [
      e2
    ]), (0, Q.jsxs)(`mesh`, {
      children: [
        (0, Q.jsx)(`bufferGeometry`, {
          ref: t2
        }),
        (0, Q.jsx)(`meshStandardMaterial`, {
          color: `#00d4ff`,
          transparent: true,
          opacity: 0.4,
          side: 2,
          depthWrite: false
        })
      ]
    });
  }
  var kn = 10, An = 200, jn = 5;
  function Mn(e2) {
    return new V(e2.x, e2.y, e2.z);
  }
  function Nn({ position: e2, screenPx: t2 = 1, children: n2 }) {
    let a2 = (0, Z.useRef)(null), { camera: o2, size: s2 } = i(), c2 = (0, Z.useRef)(new V());
    return r(() => {
      let n3 = a2.current;
      if (!n3) return;
      let r2 = Array.isArray(e2) ? c2.current.fromArray(e2) : e2, i2 = o2, l2 = i2.position.distanceTo(r2), u2 = (i2.fov ?? 50) * Math.PI / 180, d2 = 2 * l2 * Math.tan(u2 / 2) / s2.height;
      n3.scale.setScalar(Math.max(1e-4, t2 * d2));
    }), (0, Q.jsx)(`group`, {
      ref: a2,
      position: e2,
      children: n2
    });
  }
  function $(e2, t2, n2, r2) {
    return new V(t2.x + e2.x * n2.x + e2.y * r2.x, t2.y + e2.x * n2.y + e2.y * r2.y, t2.z + e2.x * n2.z + e2.y * r2.z);
  }
  function Pn(e2, t2, n2, r2) {
    let i2 = e2.x - t2.x, a2 = e2.y - t2.y, o2 = e2.z - t2.z;
    return {
      x: i2 * n2.x + a2 * n2.y + o2 * n2.z,
      y: i2 * r2.x + a2 * r2.y + o2 * r2.z
    };
  }
  function Fn({ origin: e2, xDir: t2, yDir: n2, bounds: r2 }) {
    let { isDark: i2 } = we(), a2 = (0, Z.useMemo)(() => {
      if (!r2) return {
        minU: -200,
        maxU: An,
        minV: -200,
        maxV: An
      };
      let e3 = kn;
      return {
        minU: Math.floor((r2.minU - e3) / kn) * kn,
        maxU: Math.ceil((r2.maxU + e3) / kn) * kn,
        minV: Math.floor((r2.minV - e3) / kn) * kn,
        maxV: Math.ceil((r2.maxV + e3) / kn) * kn
      };
    }, [
      r2
    ]), o2 = (0, Z.useMemo)(() => {
      let r3 = [], o3 = Mn(e2), s3 = Mn(t2), c3 = Mn(n2), l3 = i2 ? `rgba(255,255,255,0.1)` : `rgba(0,0,0,0.1)`;
      for (let e3 = a2.minV; e3 <= a2.maxV; e3 += kn) {
        if (e3 === 0) continue;
        let t3 = o3.clone().add(s3.clone().multiplyScalar(a2.minU)).add(c3.clone().multiplyScalar(e3)), n3 = o3.clone().add(s3.clone().multiplyScalar(a2.maxU)).add(c3.clone().multiplyScalar(e3));
        r3.push({
          points: [
            [
              t3.x,
              t3.y,
              t3.z
            ],
            [
              n3.x,
              n3.y,
              n3.z
            ]
          ],
          color: l3,
          width: 1
        });
      }
      for (let e3 = a2.minU; e3 <= a2.maxU; e3 += kn) {
        if (e3 === 0) continue;
        let t3 = o3.clone().add(c3.clone().multiplyScalar(a2.minV)).add(s3.clone().multiplyScalar(e3)), n3 = o3.clone().add(c3.clone().multiplyScalar(a2.maxV)).add(s3.clone().multiplyScalar(e3));
        r3.push({
          points: [
            [
              t3.x,
              t3.y,
              t3.z
            ],
            [
              n3.x,
              n3.y,
              n3.z
            ]
          ],
          color: l3,
          width: 1
        });
      }
      return r3;
    }, [
      e2,
      t2,
      n2,
      i2,
      a2
    ]), s2 = (0, Z.useMemo)(() => {
      let n3 = Mn(e2), r3 = Mn(t2), i3 = n3.clone().add(r3.clone().multiplyScalar(a2.minU)), o3 = n3.clone().add(r3.clone().multiplyScalar(a2.maxU));
      return [
        [
          i3.x,
          i3.y,
          i3.z
        ],
        [
          o3.x,
          o3.y,
          o3.z
        ]
      ];
    }, [
      e2,
      t2,
      a2
    ]), c2 = (0, Z.useMemo)(() => {
      let t3 = Mn(e2), r3 = Mn(n2), i3 = t3.clone().add(r3.clone().multiplyScalar(a2.minV)), o3 = t3.clone().add(r3.clone().multiplyScalar(a2.maxV));
      return [
        [
          i3.x,
          i3.y,
          i3.z
        ],
        [
          o3.x,
          o3.y,
          o3.z
        ]
      ];
    }, [
      e2,
      n2,
      a2
    ]), l2 = (0, Z.useMemo)(() => Mn(e2), [
      e2
    ]);
    return (0, Q.jsxs)(`group`, {
      children: [
        o2.map((e3, t3) => (0, Q.jsx)(h, {
          points: e3.points,
          color: i2 ? `#404040` : `#888888`,
          lineWidth: e3.width,
          transparent: true,
          opacity: 0.3,
          depthWrite: false
        }, t3)),
        (0, Q.jsx)(h, {
          points: s2,
          color: `#ef4444`,
          lineWidth: 2,
          transparent: true,
          opacity: 0.8,
          depthWrite: false
        }),
        (0, Q.jsx)(h, {
          points: c2,
          color: `#22c55e`,
          lineWidth: 2,
          transparent: true,
          opacity: 0.8,
          depthWrite: false
        }),
        (0, Q.jsxs)(`mesh`, {
          position: l2,
          children: [
            (0, Q.jsx)(`sphereGeometry`, {
              args: [
                1,
                16,
                16
              ]
            }),
            (0, Q.jsx)(`meshBasicMaterial`, {
              color: `#ffffff`
            })
          ]
        })
      ]
    });
  }
  function In({ segments: e2, selectedSegments: t2, constraints: n2, pendingPoints: r2, origin: i2, xDir: a2, yDir: o2 }) {
    let { isDark: s2 } = we(), c2 = (0, Z.useMemo)(() => e2.map((e3, n3) => {
      let r3 = t2.includes(n3), s3 = $(e3.start, i2, a2, o2), c3 = $(e3.end, i2, a2, o2);
      if (e3.type === `Line`) return {
        type: `line`,
        points: [
          [
            s3.x,
            s3.y,
            s3.z
          ],
          [
            c3.x,
            c3.y,
            c3.z
          ]
        ],
        color: r3 ? `#f59e0b` : `#3b82f6`,
        width: r3 ? 3 : 2,
        start: s3,
        end: c3
      };
      {
        let t3 = $(e3.center, i2, a2, o2), n4 = s3.distanceTo(t3), l3 = Math.atan2(e3.start.y - e3.center.y, e3.start.x - e3.center.x), u3 = Math.atan2(e3.end.y - e3.center.y, e3.end.x - e3.center.x), d3 = [], f2 = u3 - l3;
        e3.ccw && f2 < 0 && (f2 += 2 * Math.PI), !e3.ccw && f2 > 0 && (f2 -= 2 * Math.PI);
        for (let t4 = 0; t4 <= 16; t4++) {
          let r4 = t4 / 16, s4 = l3 + f2 * r4, c4 = $({
            x: e3.center.x + n4 * Math.cos(s4),
            y: e3.center.y + n4 * Math.sin(s4)
          }, i2, a2, o2);
          d3.push([
            c4.x,
            c4.y,
            c4.z
          ]);
        }
        return {
          type: `arc`,
          points: d3,
          color: r3 ? `#f59e0b` : `#3b82f6`,
          width: r3 ? 3 : 2,
          start: s3,
          end: c3
        };
      }
    }), [
      e2,
      t2,
      i2,
      a2,
      o2
    ]), l2 = (0, Z.useMemo)(() => {
      let t3 = [], n3 = /* @__PURE__ */ new Set();
      for (let r3 of e2) {
        let e3 = $(r3.start, i2, a2, o2), s3 = $(r3.end, i2, a2, o2), c3 = `${e3.x.toFixed(2)},${e3.y.toFixed(2)},${e3.z.toFixed(2)}`, l3 = `${s3.x.toFixed(2)},${s3.y.toFixed(2)},${s3.z.toFixed(2)}`;
        n3.has(c3) || (n3.add(c3), t3.push(e3)), n3.has(l3) || (n3.add(l3), t3.push(s3));
      }
      return t3;
    }, [
      e2,
      i2,
      a2,
      o2
    ]), u2 = (0, Z.useMemo)(() => r2.map((e3) => $(e3, i2, a2, o2)), [
      r2,
      i2,
      a2,
      o2
    ]), d2 = (0, Z.useMemo)(() => {
      let t3 = [];
      for (let r3 of n2) if (r3.type === `Horizontal`) {
        let n3 = e2[r3.line];
        if ((n3 == null ? void 0 : n3.type) === `Line`) {
          let e3 = {
            x: (n3.start.x + n3.end.x) / 2,
            y: (n3.start.y + n3.end.y) / 2 + 3
          };
          t3.push({
            position: $(e3, i2, a2, o2),
            text: `H`,
            color: `#22c55e`
          });
        }
      } else if (r3.type === `Vertical`) {
        let n3 = e2[r3.line];
        if ((n3 == null ? void 0 : n3.type) === `Line`) {
          let e3 = {
            x: (n3.start.x + n3.end.x) / 2 + 3,
            y: (n3.start.y + n3.end.y) / 2
          };
          t3.push({
            position: $(e3, i2, a2, o2),
            text: `V`,
            color: `#22c55e`
          });
        }
      } else if (r3.type === `Length`) {
        let n3 = e2[r3.line];
        if ((n3 == null ? void 0 : n3.type) === `Line`) {
          let e3 = {
            x: (n3.start.x + n3.end.x) / 2,
            y: (n3.start.y + n3.end.y) / 2 - 3
          };
          t3.push({
            position: $(e3, i2, a2, o2),
            text: `${r3.length}`,
            color: `#a855f7`
          });
        }
      } else if (r3.type === `Parallel`) {
        let n3 = e2[r3.lineA], s3 = e2[r3.lineB];
        if ((n3 == null ? void 0 : n3.type) === `Line` && (s3 == null ? void 0 : s3.type) === `Line`) {
          let e3 = {
            x: (n3.start.x + n3.end.x) / 2,
            y: (n3.start.y + n3.end.y) / 2 + 3
          }, r4 = {
            x: (s3.start.x + s3.end.x) / 2,
            y: (s3.start.y + s3.end.y) / 2 + 3
          };
          t3.push({
            position: $(e3, i2, a2, o2),
            text: `//`,
            color: `#06b6d4`
          }), t3.push({
            position: $(r4, i2, a2, o2),
            text: `//`,
            color: `#06b6d4`
          });
        }
      } else if (r3.type === `Perpendicular`) {
        let n3 = e2[r3.lineA];
        if ((n3 == null ? void 0 : n3.type) === `Line`) {
          let e3 = {
            x: (n3.start.x + n3.end.x) / 2,
            y: (n3.start.y + n3.end.y) / 2 + 3
          };
          t3.push({
            position: $(e3, i2, a2, o2),
            text: `\u22A5`,
            color: `#f43f5e`
          });
        }
      } else if (r3.type === `EqualLength`) {
        let n3 = e2[r3.lineA], s3 = e2[r3.lineB];
        if ((n3 == null ? void 0 : n3.type) === `Line` && (s3 == null ? void 0 : s3.type) === `Line`) {
          let e3 = {
            x: (n3.start.x + n3.end.x) / 2,
            y: (n3.start.y + n3.end.y) / 2 + 3
          }, r4 = {
            x: (s3.start.x + s3.end.x) / 2,
            y: (s3.start.y + s3.end.y) / 2 + 3
          };
          t3.push({
            position: $(e3, i2, a2, o2),
            text: `=`,
            color: `#eab308`
          }), t3.push({
            position: $(r4, i2, a2, o2),
            text: `=`,
            color: `#eab308`
          });
        }
      }
      return t3;
    }, [
      n2,
      e2,
      i2,
      a2,
      o2
    ]);
    return (0, Q.jsxs)(`group`, {
      children: [
        c2.map((e3, t3) => (0, Q.jsx)(h, {
          points: e3.points,
          color: e3.color,
          lineWidth: e3.width,
          depthWrite: false
        }, t3)),
        l2.map((e3, t3) => (0, Q.jsx)(Nn, {
          position: e3,
          children: (0, Q.jsxs)(`mesh`, {
            children: [
              (0, Q.jsx)(`sphereGeometry`, {
                args: [
                  4,
                  12,
                  12
                ]
              }),
              (0, Q.jsx)(`meshBasicMaterial`, {
                color: s2 ? `#00d4ff` : `#0891b2`
              })
            ]
          })
        }, t3)),
        u2.map((e3, t3) => (0, Q.jsx)(Nn, {
          position: e3,
          children: (0, Q.jsxs)(`mesh`, {
            children: [
              (0, Q.jsx)(`sphereGeometry`, {
                args: [
                  5,
                  12,
                  12
                ]
              }),
              (0, Q.jsx)(`meshBasicMaterial`, {
                color: `#f59e0b`
              })
            ]
          })
        }, `pending-${t3}`)),
        d2.map((e3, t3) => (0, Q.jsx)(f, {
          position: e3.position,
          center: true,
          children: (0, Q.jsx)(`div`, {
            className: `pointer-events-none select-none whitespace-nowrap text-xs font-bold`,
            style: {
              color: e3.color
            },
            children: e3.text
          })
        }, t3))
      ]
    });
  }
  function Ln({ cursorWorldPos: e2, cursorSketchPos: t2, snapTarget: n2, gridSnap: r2, previewLine: i2, previewRect: a2, previewCircle: o2, origin: s2, xDir: c2, yDir: l2 }) {
    let u2 = (0, Z.useMemo)(() => e2 ? Mn(e2) : null, [
      e2
    ]), d2 = (0, Z.useMemo)(() => {
      let e3 = Mn(c2);
      return [
        [
          -e3.x * 14,
          -e3.y * 14,
          -e3.z * 14
        ],
        [
          e3.x * 14,
          e3.y * 14,
          e3.z * 14
        ]
      ];
    }, [
      c2
    ]), p2 = (0, Z.useMemo)(() => {
      let e3 = Mn(l2);
      return [
        [
          -e3.x * 14,
          -e3.y * 14,
          -e3.z * 14
        ],
        [
          e3.x * 14,
          e3.y * 14,
          e3.z * 14
        ]
      ];
    }, [
      l2
    ]), m2 = (0, Z.useMemo)(() => {
      if (!i2) return null;
      let e3 = $(i2.start, s2, c2, l2), t3 = $(i2.end, s2, c2, l2);
      return [
        [
          e3.x,
          e3.y,
          e3.z
        ],
        [
          t3.x,
          t3.y,
          t3.z
        ]
      ];
    }, [
      i2,
      s2,
      c2,
      l2
    ]), g2 = (0, Z.useMemo)(() => {
      if (!a2) return null;
      let { p1: e3, p2: t3 } = a2, n3 = Math.min(e3.x, t3.x), r3 = Math.max(e3.x, t3.x), i3 = Math.min(e3.y, t3.y), o3 = Math.max(e3.y, t3.y);
      return [
        {
          x: n3,
          y: i3
        },
        {
          x: r3,
          y: i3
        },
        {
          x: r3,
          y: o3
        },
        {
          x: n3,
          y: o3
        },
        {
          x: n3,
          y: i3
        }
      ].map((e4) => {
        let t4 = $(e4, s2, c2, l2);
        return [
          t4.x,
          t4.y,
          t4.z
        ];
      });
    }, [
      a2,
      s2,
      c2,
      l2
    ]), _2 = (0, Z.useMemo)(() => {
      if (!o2 || o2.radius < 0.1) return null;
      let { center: e3, radius: t3 } = o2, n3 = [];
      for (let r3 = 0; r3 <= 32; r3++) {
        let i3 = 2 * Math.PI * r3 / 32, a3 = $({
          x: e3.x + t3 * Math.cos(i3),
          y: e3.y + t3 * Math.sin(i3)
        }, s2, c2, l2);
        n3.push([
          a3.x,
          a3.y,
          a3.z
        ]);
      }
      return n3;
    }, [
      o2,
      s2,
      c2,
      l2
    ]), v2 = (0, Z.useMemo)(() => n2 ? $(n2, s2, c2, l2) : null, [
      n2,
      s2,
      c2,
      l2
    ]);
    return !u2 || !t2 || !d2 || !p2 ? null : (0, Q.jsxs)(`group`, {
      children: [
        (0, Q.jsxs)(Nn, {
          position: u2,
          children: [
            (0, Q.jsx)(h, {
              points: d2,
              color: r2 && !n2 ? `#06b6d4` : `rgba(255,255,255,0.5)`,
              lineWidth: r2 && !n2 ? 1.5 : 1,
              depthWrite: false
            }),
            (0, Q.jsx)(h, {
              points: p2,
              color: r2 && !n2 ? `#06b6d4` : `rgba(255,255,255,0.5)`,
              lineWidth: r2 && !n2 ? 1.5 : 1,
              depthWrite: false
            })
          ]
        }),
        m2 && (0, Q.jsx)(h, {
          points: m2,
          color: `rgba(59, 130, 246, 0.6)`,
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        g2 && (0, Q.jsx)(h, {
          points: g2,
          color: `rgba(59, 130, 246, 0.6)`,
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        _2 && (0, Q.jsx)(h, {
          points: _2,
          color: `rgba(59, 130, 246, 0.6)`,
          lineWidth: 2,
          dashed: true,
          dashSize: 2,
          gapSize: 2,
          depthWrite: false
        }),
        v2 && (0, Q.jsxs)(Nn, {
          position: v2,
          children: [
            (0, Q.jsxs)(`mesh`, {
              children: [
                (0, Q.jsx)(`ringGeometry`, {
                  args: [
                    8,
                    10,
                    24
                  ]
                }),
                (0, Q.jsx)(`meshBasicMaterial`, {
                  color: `#22c55e`,
                  side: 2
                })
              ]
            }),
            (0, Q.jsxs)(`mesh`, {
              children: [
                (0, Q.jsx)(`sphereGeometry`, {
                  args: [
                    3,
                    12,
                    12
                  ]
                }),
                (0, Q.jsx)(`meshBasicMaterial`, {
                  color: `#22c55e`
                })
              ]
            })
          ]
        }),
        (0, Q.jsx)(f, {
          position: u2,
          style: {
            pointerEvents: `none`
          },
          children: (0, Q.jsxs)(`div`, {
            className: `ml-4 -mt-2 whitespace-nowrap rounded bg-black/70 px-1.5 py-0.5 text-xs text-white`,
            children: [
              t2.x.toFixed(1),
              `, `,
              t2.y.toFixed(1)
            ]
          })
        })
      ]
    });
  }
  function Rn() {
    let { raycaster: e2 } = i(), t2 = q((e3) => e3.active), n2 = q((e3) => e3.plane), r2 = q((e3) => e3.origin), a2 = q((e3) => e3.segments), o2 = q((e3) => e3.constraints), s2 = q((e3) => e3.tool), c2 = q((e3) => e3.constraintTool), l2 = q((e3) => e3.points), u2 = q((e3) => e3.selectedSegments), d2 = q((e3) => e3.cursorWorldPos), f2 = q((e3) => e3.cursorSketchPos), p2 = q((e3) => e3.snapTarget), m2 = q((e3) => e3.selectedFace), h2 = q((e3) => e3.addPoint), g2 = q((e3) => e3.finishShape), _2 = q((e3) => e3.toggleSegmentSelection), v2 = q((e3) => e3.setCursorPos), y2 = J((e3) => e3.gridSnap), b2 = J((e3) => e3.pointSnap), x2 = c2 !== `none`, S2 = (0, Z.useMemo)(() => ({
      ...Ee(n2),
      origin: r2
    }), [
      n2,
      r2
    ]), C2 = (0, Z.useMemo)(() => {
      let e3 = m2 == null ? void 0 : m2.vertices;
      if (!e3 || e3.length === 0) return null;
      let t3 = e3.map((e4) => Pn(Mn(e4), S2.origin, S2.xDir, S2.yDir)), n3 = 1 / 0, r3 = -1 / 0, i2 = 1 / 0, a3 = -1 / 0;
      for (let e4 of t3) e4.x < n3 && (n3 = e4.x), e4.x > r3 && (r3 = e4.x), e4.y < i2 && (i2 = e4.y), e4.y > a3 && (a3 = e4.y);
      return {
        vertices: t3,
        bounds: {
          minU: n3,
          maxU: r3,
          minV: i2,
          maxV: a3
        }
      };
    }, [
      m2,
      S2
    ]), w2 = (0, Z.useMemo)(() => {
      if (!C2 || C2.vertices.length === 0) return a2;
      let e3 = C2.vertices.map((e4) => ({
        type: `Line`,
        start: e4,
        end: e4
      }));
      return [
        ...a2,
        ...e3
      ];
    }, [
      a2,
      C2
    ]), T2 = (0, Z.useCallback)((e3) => {
      let { snapped: t3, target: n3 } = Oe(w2, e3, {
        gridEnabled: y2,
        gridSize: kn,
        pointEnabled: b2,
        pointTolerance: jn
      });
      return {
        snapped: t3,
        target: n3
      };
    }, [
      b2,
      y2,
      w2
    ]), E2 = (0, Z.useRef)(null), ee2 = 5e4, D2 = (0, Z.useMemo)(() => {
      let e3 = new P(ee2, ee2), t3 = Mn(S2.normal), n3 = new V(0, 0, 1), r3 = new F().setFromUnitVectors(n3, t3);
      return e3.applyQuaternion(r3), e3.translate(S2.origin.x, S2.origin.y, S2.origin.z), e3;
    }, [
      S2
    ]), O2 = (0, Z.useCallback)(() => {
      if (!E2.current) return;
      let t3 = e2.intersectObject(E2.current);
      if (t3.length === 0) {
        v2(null, null, null);
        return;
      }
      let n3 = Pn(E2.current.worldToLocal(t3[0].point.clone()), S2.origin, S2.xDir, S2.yDir), { snapped: r3, target: i2 } = T2(n3), a3 = $(r3, S2.origin, S2.xDir, S2.yDir);
      v2({
        x: a3.x,
        y: a3.y,
        z: a3.z
      }, r3, i2);
    }, [
      S2,
      e2,
      T2,
      v2
    ]), k2 = (0, Z.useCallback)((e3) => {
      if (e3.button === 0 && !Jt() && (e3.stopPropagation(), f2)) {
        if (x2) {
          let e4 = je(a2, f2, 2);
          e4 !== null && _2(e4);
        } else h2(f2);
      }
    }, [
      f2,
      x2,
      a2,
      h2,
      _2
    ]), te2 = (0, Z.useCallback)((e3) => {
      e3.stopPropagation(), s2 === `line` && g2();
    }, [
      s2,
      g2
    ]), ne2 = (0, Z.useCallback)(() => {
      v2(null, null, null);
    }, [
      v2
    ]), A2 = (0, Z.useMemo)(() => s2 === `line` && l2.length > 0 && f2 ? {
      start: l2[l2.length - 1],
      end: f2
    } : null, [
      s2,
      l2,
      f2
    ]), j2 = (0, Z.useMemo)(() => s2 === `rectangle` && l2.length === 1 && f2 ? {
      p1: l2[0],
      p2: f2
    } : null, [
      s2,
      l2,
      f2
    ]), re2 = (0, Z.useMemo)(() => {
      if (s2 === `circle` && l2.length === 1 && f2) {
        let e3 = l2[0];
        return {
          center: e3,
          radius: Math.sqrt((f2.x - e3.x) ** 2 + (f2.y - e3.y) ** 2)
        };
      }
      return null;
    }, [
      s2,
      l2,
      f2
    ]);
    return t2 ? (0, Q.jsxs)(`group`, {
      children: [
        (0, Q.jsx)(`mesh`, {
          ref: E2,
          geometry: D2,
          frustumCulled: false,
          onPointerMove: O2,
          onClick: k2,
          onDoubleClick: te2,
          onPointerLeave: ne2,
          children: (0, Q.jsx)(`meshBasicMaterial`, {
            visible: false,
            side: 2
          })
        }),
        (0, Q.jsx)(Fn, {
          origin: S2.origin,
          xDir: S2.xDir,
          yDir: S2.yDir,
          bounds: (C2 == null ? void 0 : C2.bounds) ?? null
        }),
        (0, Q.jsx)(In, {
          segments: a2,
          selectedSegments: u2,
          constraints: o2,
          pendingPoints: l2,
          origin: S2.origin,
          xDir: S2.xDir,
          yDir: S2.yDir
        }),
        (0, Q.jsx)(Ln, {
          cursorWorldPos: d2,
          cursorSketchPos: f2,
          snapTarget: p2,
          gridSnap: y2,
          previewLine: A2,
          previewRect: j2,
          previewCircle: re2,
          origin: S2.origin,
          xDir: S2.xDir,
          yDir: S2.yDir
        })
      ]
    }) : null;
  }
  var zn = 5, Bn = 0.15, Vn = 0.35, Hn = {
    XY: `#61afef`,
    XZ: `#98c379`,
    YZ: `#e06c75`
  };
  function Un({ plane: e2, rotation: t2, position: n2 }) {
    let [a2, o2] = (0, Z.useState)(false), s2 = (0, Z.useRef)(null), c2 = q((e3) => e3.enterSketchMode), l2 = q((e3) => e3.active), { invalidate: u2 } = i();
    return r(() => {
      if (!s2.current) return;
      let e3 = s2.current.material, t3 = a2 ? Vn : Bn, n3 = t3 - e3.opacity;
      Math.abs(n3) < 0.01 ? e3.opacity = t3 : (e3.opacity += n3 * 0.2, u2());
    }), (0, Q.jsxs)(`mesh`, {
      ref: s2,
      position: n2,
      rotation: t2,
      onPointerEnter: (e3) => {
        e3.stopPropagation(), l2 || (o2(true), document.body.style.cursor = `pointer`);
      },
      onPointerLeave: () => {
        o2(false), document.body.style.cursor = `auto`;
      },
      onClick: (t3) => {
        var _a2;
        if (t3.stopPropagation(), l2) return;
        let n3 = false;
        ((_a2 = t3.face) == null ? void 0 : _a2.normal) && s2.current && (n3 = t3.face.normal.clone().transformDirection(s2.current.matrixWorld).dot(t3.ray.direction) > 0), c2(e2, void 0, n3);
      },
      children: [
        (0, Q.jsx)(`planeGeometry`, {
          args: [
            zn,
            zn
          ]
        }),
        (0, Q.jsx)(`meshBasicMaterial`, {
          color: Hn[e2],
          transparent: true,
          opacity: Bn,
          side: 2,
          depthWrite: false,
          depthTest: false
        })
      ]
    });
  }
  function Wn() {
    if (q((e3) => e3.active)) return null;
    let e2 = zn / 2;
    return (0, Q.jsxs)(`group`, {
      children: [
        (0, Q.jsx)(Un, {
          plane: `XY`,
          rotation: [
            0,
            0,
            0
          ],
          position: [
            e2,
            e2,
            0
          ]
        }),
        (0, Q.jsx)(Un, {
          plane: `XZ`,
          rotation: [
            -Math.PI / 2,
            0,
            0
          ],
          position: [
            e2,
            0,
            e2
          ]
        }),
        (0, Q.jsx)(Un, {
          plane: `YZ`,
          rotation: [
            0,
            Math.PI / 2,
            0
          ],
          position: [
            0,
            e2,
            e2
          ]
        })
      ]
    });
  }
  var Gn = typeof window < `u` && typeof window.matchMedia == `function` && window.matchMedia(`(pointer: coarse)`).matches, Kn = Math.PI / 180, qn = 180 / Math.PI, Jn = new F().setFromAxisAngle(new V(1, 0, 0), -Math.PI / 2), Yn = new F().setFromAxisAngle(new V(1, 0, 0), Math.PI / 2);
  function Xn(e2) {
    return [
      e2.x,
      e2.z,
      -e2.y
    ];
  }
  function Zn(e2) {
    return {
      x: e2.x,
      y: -e2.z,
      z: e2.y
    };
  }
  function Qn(e2, t2) {
    let n2 = er.setFromEuler(tr.set(e2.x * Kn, e2.y * Kn, e2.z * Kn, `ZYX`));
    return t2.copy(Jn).multiply(n2);
  }
  function $n(e2) {
    return er.copy(Yn).multiply(e2), tr.setFromQuaternion(er, `ZYX`), {
      x: tr.x * qn,
      y: tr.y * qn,
      z: tr.z * qn
    };
  }
  var er = new F(), tr = new ae();
  function nr({ orbitControls: e2 }) {
    var _a2;
    let t2 = J((e3) => e3.selectedPartIds), n2 = J((e3) => e3.transformMode), r2 = J((e3) => e3.setDraggingGizmo), i2 = J((e3) => e3.setGizmoHovered), a2 = J((e3) => e3.gridSnap), s2 = J((e3) => e3.snapIncrement), c2 = U((e3) => e3.parts), l2 = U((e3) => e3.document), [u2, d2] = (0, Z.useState)(null), f2 = (0, Z.useCallback)((e3) => {
      d2(e3);
    }, []), p2 = (0, Z.useRef)(null), m2 = (0, Z.useRef)(false), h2 = t2.size === 1 ? Array.from(t2)[0] : null, g2 = h2 ? c2.find((e3) => e3.id === h2) : null, _2 = h2 ? (_a2 = l2.instances) == null ? void 0 : _a2.find((e3) => e3.id === h2) : null, v2 = g2 !== null || _2 !== null;
    return (0, Z.useEffect)(() => {
      if (u2 && v2 && !m2.current) {
        if (g2) {
          let e3 = l2.nodes[String(g2.translateNodeId)], t3 = l2.nodes[String(g2.rotateNodeId)], n3 = l2.nodes[String(g2.scaleNodeId)];
          if ((e3 == null ? void 0 : e3.op.type) === `Translate` && u2.position.set(...Xn(e3.op.offset)), Qn((t3 == null ? void 0 : t3.op.type) === `Rotate` ? t3.op.angles : {
            x: 0,
            y: 0,
            z: 0
          }, u2.quaternion), (n3 == null ? void 0 : n3.op.type) === `Scale`) {
            let { factor: e4 } = n3.op;
            u2.scale.set(e4.x, e4.y, e4.z);
          }
        } else if (_2) {
          let e3 = _2.transform ?? {
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
          u2.position.set(...Xn(e3.translation)), Qn(e3.rotation, u2.quaternion), u2.scale.set(e3.scale.x, e3.scale.y, e3.scale.z);
        }
      }
    }, [
      u2,
      g2,
      _2,
      v2,
      l2
    ]), (0, Z.useEffect)(() => {
      let t3 = p2.current;
      if (!t3) return;
      let n3 = (t4) => {
        let n4 = t4.value;
        m2.current = n4, r2(n4), e2.current && (e2.current.enabled = !n4), n4 && U.getState().pushUndoSnapshot();
      }, a3 = (e3) => {
        let t4 = e3.value != null;
        i2(t4), t4 && J.getState().setHoveredItem(null);
      };
      return t3.addEventListener(`dragging-changed`, n3), t3.addEventListener(`axis-changed`, a3), () => {
        t3.removeEventListener(`dragging-changed`, n3), t3.removeEventListener(`axis-changed`, a3), i2(false);
      };
    }, [
      u2,
      e2,
      r2,
      i2
    ]), (0, Z.useEffect)(() => {
      let e3 = p2.current;
      if (!e3) return;
      let t3 = () => {
        if (!u2 || !h2) return;
        let e4 = U.getState();
        g2 ? n2 === `translate` ? e4.setTranslation(h2, Zn(u2.position), true) : n2 === `rotate` ? e4.setRotation(h2, $n(u2.quaternion), true) : n2 === `scale` && e4.setScale(h2, {
          x: u2.scale.x,
          y: u2.scale.y,
          z: u2.scale.z
        }, true) : _2 && e4.setInstanceTransform(h2, {
          translation: Zn(u2.position),
          rotation: $n(u2.quaternion),
          scale: {
            x: u2.scale.x,
            y: u2.scale.y,
            z: u2.scale.z
          }
        }, true);
      };
      return e3.addEventListener(`objectChange`, t3), () => {
        e3.removeEventListener(`objectChange`, t3);
      };
    }, [
      u2,
      h2,
      g2,
      _2,
      n2
    ]), v2 ? (0, Q.jsxs)(Q.Fragment, {
      children: [
        (0, Q.jsx)(`object3D`, {
          ref: f2
        }),
        u2 && (0, Q.jsx)(o, {
          ref: p2,
          object: u2,
          mode: n2,
          space: `local`,
          size: Gn ? 1.8 : 0.8,
          ...a2 ? {
            translationSnap: s2,
            rotationSnap: Math.PI / 180 * 15,
            scaleSnap: 0.1
          } : {}
        })
      ]
    }) : null;
  }
  var rr = 0.4, ir = 0.85, ar = new N(54527), or = new N(16328306), sr = `#00d4ff`, cr = `#f92672`, lr = `#6b8fa3`, ur = `#4a7080`;
  function dr({ box: e2, color: t2, opacity: n2 }) {
    let r2 = e2.min, i2 = e2.max, a2 = [
      [
        new V(r2.x, r2.y, r2.z),
        new V(i2.x, r2.y, r2.z)
      ],
      [
        new V(i2.x, r2.y, r2.z),
        new V(i2.x, r2.y, i2.z)
      ],
      [
        new V(i2.x, r2.y, i2.z),
        new V(r2.x, r2.y, i2.z)
      ],
      [
        new V(r2.x, r2.y, i2.z),
        new V(r2.x, r2.y, r2.z)
      ],
      [
        new V(r2.x, i2.y, r2.z),
        new V(i2.x, i2.y, r2.z)
      ],
      [
        new V(i2.x, i2.y, r2.z),
        new V(i2.x, i2.y, i2.z)
      ],
      [
        new V(i2.x, i2.y, i2.z),
        new V(r2.x, i2.y, i2.z)
      ],
      [
        new V(r2.x, i2.y, i2.z),
        new V(r2.x, i2.y, r2.z)
      ],
      [
        new V(r2.x, r2.y, r2.z),
        new V(r2.x, i2.y, r2.z)
      ],
      [
        new V(i2.x, r2.y, r2.z),
        new V(i2.x, i2.y, r2.z)
      ],
      [
        new V(i2.x, r2.y, i2.z),
        new V(i2.x, i2.y, i2.z)
      ],
      [
        new V(r2.x, r2.y, i2.z),
        new V(r2.x, i2.y, i2.z)
      ]
    ];
    return (0, Q.jsx)(Q.Fragment, {
      children: a2.map((e3, r3) => (0, Q.jsx)(h, {
        points: e3,
        color: t2,
        lineWidth: 1,
        dashed: true,
        dashSize: 1,
        gapSize: 0.8,
        transparent: true,
        opacity: n2
      }, r3))
    });
  }
  function fr(e2) {
    let t2 = U((e3) => e3.parts), n2 = H((e3) => e3.scene);
    return (0, Z.useMemo)(() => {
      if (e2.size === 0 || !n2) return null;
      let r2 = new re(), i2 = false;
      return e2.forEach((e3) => {
        let a2 = t2.findIndex((t3) => t3.id === e3);
        if (a2 === -1) return;
        let o2 = n2.parts[a2];
        if (!o2) return;
        let s2 = o2.mesh;
        if (!s2.positions.length) return;
        let c2 = new re(), l2 = new V();
        for (let e4 = 0; e4 < s2.positions.length; e4 += 3) l2.set(s2.positions[e4], s2.positions[e4 + 1], s2.positions[e4 + 2]), c2.expandByPoint(l2);
        r2.union(c2), i2 = true;
      }), i2 ? r2 : null;
    }, [
      e2,
      t2,
      n2
    ]);
  }
  function pr() {
    let e2 = fr(J((e3) => e3.selectedPartIds)), { isDark: t2 } = we();
    return e2 ? (0, Q.jsx)(dr, {
      box: e2,
      color: t2 ? lr : ur,
      opacity: 0.5
    }) : null;
  }
  function mr() {
    let e2 = Te((e3) => e3.participants);
    if (J((e3) => e3.followMode) === `free`) return null;
    let t2 = [];
    return e2.forEach((e3) => {
      e3.id !== `local` && e3.selectedPartIds.size !== 0 && t2.push((0, Q.jsx)(hr, {
        ids: e3.selectedPartIds,
        color: e3.color
      }, e3.id));
    }), (0, Q.jsx)(Q.Fragment, {
      children: t2
    });
  }
  function hr({ ids: e2, color: t2 }) {
    let n2 = fr(e2);
    return n2 ? (0, Q.jsx)(dr, {
      box: n2,
      color: t2,
      opacity: 0.7
    }) : null;
  }
  function gr() {
    let e2 = H((e3) => e3.scene), t2 = (0, Z.useMemo)(() => {
      let t3 = 100;
      if (e2 == null ? void 0 : e2.parts) for (let n2 of e2.parts) {
        let e3 = n2.mesh.positions;
        for (let n3 = 0; n3 < e3.length; n3 += 3) t3 = Math.max(t3, Math.abs(e3[n3]), Math.abs(e3[n3 + 1]), Math.abs(e3[n3 + 2]));
      }
      return t3 * 0.25;
    }, [
      e2
    ]);
    return (0, Q.jsxs)(`group`, {
      children: [
        (0, Q.jsx)(h, {
          points: [
            [
              0,
              0,
              0
            ],
            [
              t2,
              0,
              0
            ]
          ],
          color: `#ff3b30`,
          lineWidth: 3
        }),
        (0, Q.jsx)(h, {
          points: [
            [
              0,
              0,
              0
            ],
            [
              0,
              t2,
              0
            ]
          ],
          color: `#34c759`,
          lineWidth: 3
        }),
        (0, Q.jsx)(h, {
          points: [
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              t2
            ]
          ],
          color: `#0a84ff`,
          lineWidth: 3
        })
      ]
    });
  }
  function _r(e2) {
    let t2 = H((e3) => e3.scene), n2 = U((e3) => e3.parts);
    return (0, Z.useMemo)(() => {
      var _a2;
      if (!t2) return null;
      let r2 = n2.findIndex((t3) => t3.id === e2);
      return r2 < 0 ? null : ((_a2 = t2.parts[r2]) == null ? void 0 : _a2.mesh) ?? null;
    }, [
      t2,
      n2,
      e2
    ]);
  }
  function vr({ item: e2, variant: t2 }) {
    let n2 = _r(e2.partId), r2 = (0, Z.useMemo)(() => {
      if (!n2) return null;
      let t3 = ve(n2, e2.faceIndex);
      return t3.length === 0 ? null : be(n2, t3);
    }, [
      n2,
      e2.faceIndex
    ]);
    return (0, Z.useEffect)(() => () => {
      r2 == null ? void 0 : r2.dispose();
    }, [
      r2
    ]), r2 ? (0, Q.jsx)(`mesh`, {
      geometry: r2,
      renderOrder: 998,
      children: (0, Q.jsx)(`meshBasicMaterial`, {
        color: t2 === `selected` ? or : ar,
        transparent: true,
        opacity: t2 === `selected` ? ir : rr,
        depthWrite: false,
        depthTest: false,
        side: 2
      })
    }) : null;
  }
  function yr({ item: e2, variant: t2 }) {
    let n2 = _r(e2.partId), r2 = (0, Z.useMemo)(() => {
      if (!n2) return null;
      let { a: t3, b: r3 } = ye(n2, e2.edgeId);
      return [
        [
          t3.x,
          t3.y,
          t3.z
        ],
        [
          r3.x,
          r3.y,
          r3.z
        ]
      ];
    }, [
      n2,
      e2.edgeId
    ]);
    return r2 ? (0, Q.jsx)(h, {
      points: r2,
      color: t2 === `selected` ? cr : sr,
      lineWidth: t2 === `selected` ? 3 : 2,
      transparent: true,
      opacity: t2 === `selected` ? 1 : 0.7,
      depthWrite: false,
      depthTest: false,
      renderOrder: 998
    }) : null;
  }
  function br({ item: e2, variant: t2 }) {
    let n2 = _r(e2.partId), a2 = (0, Z.useMemo)(() => n2 ? _e(n2, e2.vertexId) : null, [
      n2,
      e2.vertexId
    ]), o2 = (0, Z.useRef)(null), { camera: s2, size: c2 } = i();
    return r(() => {
      if (!o2.current || !a2) return;
      let e3 = s2, n3 = new V(a2.x, a2.z, -a2.y), r2 = e3.position.distanceTo(n3), i2 = (e3.fov ?? 50) * Math.PI / 180, l2 = 2 * r2 * Math.tan(i2 / 2) / c2.height, u2 = t2 === `selected` ? 6 : 5;
      o2.current.scale.setScalar(Math.max(1e-4, u2 * l2));
    }), a2 ? (0, Q.jsxs)(`mesh`, {
      ref: o2,
      position: a2,
      renderOrder: 999,
      children: [
        (0, Q.jsx)(`sphereGeometry`, {
          args: [
            1,
            12,
            12
          ]
        }),
        (0, Q.jsx)(`meshBasicMaterial`, {
          color: t2 === `selected` ? cr : sr,
          transparent: true,
          opacity: t2 === `selected` ? 1 : 0.85,
          depthWrite: false,
          depthTest: false
        })
      ]
    }) : null;
  }
  function xr({ item: e2, variant: t2 }) {
    return e2.kind === `face` ? (0, Q.jsx)(vr, {
      item: e2,
      variant: t2
    }) : e2.kind === `edge` ? (0, Q.jsx)(yr, {
      item: e2,
      variant: t2
    }) : e2.kind === `vertex` ? (0, Q.jsx)(br, {
      item: e2,
      variant: t2
    }) : null;
  }
  function Sr() {
    let e2 = J((e3) => e3.selection), t2 = J((e3) => e3.hoveredItem), n2 = (0, Z.useMemo)(() => !t2 || t2.kind === `part` || e2.some((e3) => ze(e3, t2)) ? null : t2, [
      t2,
      e2
    ]);
    return (0, Q.jsxs)(Q.Fragment, {
      children: [
        e2.map((e3, t3) => (0, Q.jsx)(xr, {
          item: e3,
          variant: `selected`
        }, `sel-${t3}`)),
        n2 && (0, Q.jsx)(xr, {
          item: n2,
          variant: `hover`
        })
      ]
    });
  }
  function Cr() {
    let e2 = J((e3) => e3.isDraggingGizmo), t2 = J((e3) => e3.isOrbiting);
    return J((e3) => e3.captureMode) ? (0, Q.jsx)(gr, {}) : t2 || e2 ? null : (0, Q.jsxs)(Q.Fragment, {
      children: [
        (0, Q.jsx)(pr, {}),
        (0, Q.jsx)(mr, {}),
        (0, Q.jsx)(Sr, {})
      ]
    });
  }
  var wr = `#94a3b8`;
  function Tr(e2, t2, n2) {
    let r2 = structuredClone(e2);
    return r2.type === `Cube` ? t2 === `size.x` ? r2.size.x = n2 : t2 === `size.y` ? r2.size.y = n2 : t2 === `size.z` && (r2.size.z = n2) : r2.type === `Cylinder` ? t2 === `radius` ? r2.radius = n2 : t2 === `height` && (r2.height = n2) : r2.type === `Sphere` && t2 === `radius` && (r2.radius = n2), r2;
  }
  function Er({ value: e2, paramKey: t2, partId: n2, primitiveNodeId: r2 }) {
    let [i2, a2] = (0, Z.useState)(false), [o2, s2] = (0, Z.useState)(e2.toFixed(1)), c2 = (0, Z.useRef)(null), l2 = U((e3) => e3.document), u2 = U((e3) => e3.updatePrimitiveOp);
    (0, Z.useEffect)(() => {
      i2 || s2(e2.toFixed(1));
    }, [
      e2,
      i2
    ]), (0, Z.useEffect)(() => {
      i2 && c2.current && (c2.current.focus(), c2.current.select());
    }, [
      i2
    ]);
    let d2 = () => {
      let i3 = parseFloat(o2);
      if (!isNaN(i3) && i3 > 0) {
        let e3 = l2.nodes[String(r2)];
        if (e3) {
          let r3 = Tr(e3.op, t2, i3);
          u2(n2, r3);
        }
      } else s2(e2.toFixed(1));
      a2(false);
    }, f2 = () => {
      s2(e2.toFixed(1)), a2(false);
    }, p2 = (e3) => {
      e3.stopPropagation(), e3.key === `Enter` ? d2() : e3.key === `Escape` && f2();
    }, m2 = t2 === `radius` ? `r=` : ``;
    return i2 ? (0, Q.jsxs)(`div`, {
      className: `bg-surface border border-brand px-1 py-0.5 text-[10px] text-text whitespace-nowrap flex items-center rounded`,
      onClick: (e3) => e3.stopPropagation(),
      onPointerDown: (e3) => e3.stopPropagation(),
      children: [
        m2,
        (0, Q.jsx)(`input`, {
          ref: c2,
          type: `text`,
          value: o2,
          onChange: (e3) => s2(e3.target.value),
          onBlur: d2,
          onKeyDown: p2,
          className: `w-12 bg-transparent outline-none text-[10px] text-text`,
          onClick: (e3) => e3.stopPropagation(),
          onPointerDown: (e3) => e3.stopPropagation()
        }),
        ` mm`
      ]
    }) : (0, Q.jsxs)(`div`, {
      className: `bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap cursor-pointer hover:border-brand hover:text-text transition-colors rounded`,
      onClick: (e3) => {
        e3.stopPropagation(), a2(true);
      },
      onPointerDown: (e3) => e3.stopPropagation(),
      children: [
        m2,
        e2.toFixed(1),
        ` mm`
      ]
    });
  }
  function Dr({ start: e2, end: t2, label: n2, offset: r2 = new V(), editable: i2, value: a2, paramKey: o2, partId: s2, primitiveNodeId: c2 }) {
    let l2 = new V().lerpVectors(e2, t2, 0.5).add(r2), u2 = new V().subVectors(t2, e2).normalize(), d2 = new V(0, 1, 0), p2 = new V().crossVectors(u2, d2).normalize();
    p2.length() < 0.1 && p2.set(1, 0, 0);
    let m2 = e2.clone().add(p2.clone().multiplyScalar(1)), g2 = e2.clone().add(p2.clone().multiplyScalar(-1)), _2 = t2.clone().add(p2.clone().multiplyScalar(1)), v2 = t2.clone().add(p2.clone().multiplyScalar(-1)), y2 = i2 && a2 !== void 0 && o2 && s2 && c2 !== void 0;
    return (0, Q.jsxs)(Q.Fragment, {
      children: [
        (0, Q.jsx)(h, {
          points: [
            e2,
            t2
          ],
          color: wr,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        (0, Q.jsx)(h, {
          points: [
            m2,
            g2
          ],
          color: wr,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        (0, Q.jsx)(h, {
          points: [
            _2,
            v2
          ],
          color: wr,
          lineWidth: 1,
          transparent: true,
          opacity: 0.5
        }),
        (0, Q.jsx)(f, {
          position: l2,
          center: true,
          style: {
            pointerEvents: y2 ? `auto` : `none`,
            zIndex: 10
          },
          children: y2 ? (0, Q.jsx)(Er, {
            value: a2,
            paramKey: o2,
            partId: s2,
            primitiveNodeId: c2
          }) : (0, Q.jsx)(`div`, {
            className: `bg-surface border border-border px-1 py-0.5 text-[10px] text-text-muted whitespace-nowrap rounded`,
            children: n2
          })
        })
      ]
    });
  }
  function Or() {
    let e2 = J((e3) => e3.selectedPartIds), t2 = J((e3) => e3.isDraggingGizmo), n2 = U((e3) => e3.parts), r2 = U((e3) => e3.document), i2 = H((e3) => e3.scene), a2 = Me((e3) => e3.parameters), o2 = Me((e3) => e3.bindings), s2 = (0, Z.useMemo)(() => {
      if (e2.size !== 1) return null;
      let t3 = Array.from(e2)[0], s3 = n2.find((e3) => e3.id === t3);
      if (!s3 || !Fe(s3)) return null;
      let c3 = n2.findIndex((e3) => e3.id === t3);
      if (!(i2 == null ? void 0 : i2.parts[c3])) return null;
      let l3 = r2.nodes[String(s3.primitiveNodeId)];
      if (!l3) return null;
      let u3 = r2.nodes[String(s3.translateNodeId)], d2 = (u3 == null ? void 0 : u3.op.type) === `Translate` ? u3.op.offset : {
        x: 0,
        y: 0,
        z: 0
      }, f2 = new V(d2.x, d2.y, d2.z), p2 = null;
      if (l3.op.type === `Cube`) {
        let e3 = l3.op.size, t4 = qe(s3.primitiveNodeId, {
          "size.x": e3.x,
          "size.y": e3.y,
          "size.z": e3.z
        }, a2, o2), n3 = {
          x: t4[`size.x`],
          y: t4[`size.y`],
          z: t4[`size.z`]
        }, r3 = n3.x / 2, i3 = n3.y / 2, c4 = n3.z / 2;
        p2 = [
          {
            start: new V(f2.x - r3, f2.y - i3 - 3, f2.z + c4),
            end: new V(f2.x + r3, f2.y - i3 - 3, f2.z + c4),
            label: `${n3.x.toFixed(1)} mm`,
            value: n3.x,
            paramKey: `size.x`
          },
          {
            start: new V(f2.x + r3 + 3, f2.y - i3, f2.z + c4),
            end: new V(f2.x + r3 + 3, f2.y + i3, f2.z + c4),
            label: `${n3.y.toFixed(1)} mm`,
            value: n3.y,
            paramKey: `size.y`
          },
          {
            start: new V(f2.x + r3 + 3, f2.y - i3 - 3, f2.z - c4),
            end: new V(f2.x + r3 + 3, f2.y - i3 - 3, f2.z + c4),
            label: `${n3.z.toFixed(1)} mm`,
            value: n3.z,
            paramKey: `size.z`
          }
        ];
      }
      if (l3.op.type === `Cylinder`) {
        let { radius: e3, height: t4 } = qe(s3.primitiveNodeId, {
          radius: l3.op.radius,
          height: l3.op.height
        }, a2, o2), n3 = t4 / 2;
        p2 = [
          {
            start: new V(f2.x, f2.y - n3 - 3, f2.z),
            end: new V(f2.x + e3, f2.y - n3 - 3, f2.z),
            label: `r=${e3.toFixed(1)} mm`,
            value: e3,
            paramKey: `radius`
          },
          {
            start: new V(f2.x + e3 + 3, f2.y - n3, f2.z),
            end: new V(f2.x + e3 + 3, f2.y + n3, f2.z),
            label: `${t4.toFixed(1)} mm`,
            value: t4,
            paramKey: `height`
          }
        ];
      }
      if (l3.op.type === `Sphere`) {
        let { radius: e3 } = qe(s3.primitiveNodeId, {
          radius: l3.op.radius
        }, a2, o2);
        p2 = [
          {
            start: new V(f2.x, f2.y, f2.z),
            end: new V(f2.x + e3, f2.y, f2.z),
            label: `r=${e3.toFixed(1)} mm`,
            value: e3,
            paramKey: `radius`
          }
        ];
      }
      return p2 ? {
        dimensions: p2,
        partId: t3,
        primitiveNodeId: s3.primitiveNodeId
      } : null;
    }, [
      e2,
      n2,
      r2,
      i2,
      a2,
      o2
    ]);
    if (!s2 || t2) return null;
    let { dimensions: c2, partId: l2, primitiveNodeId: u2 } = s2;
    return (0, Q.jsx)(Q.Fragment, {
      children: c2.map((e3, t3) => (0, Q.jsx)(Dr, {
        start: e3.start,
        end: e3.end,
        label: e3.label,
        editable: true,
        value: e3.value,
        paramKey: e3.paramKey,
        partId: l2,
        primitiveNodeId: u2
      }, t3))
    });
  }
  var kr = {
    error: `bg-red-500/90 text-white ring-red-300`,
    warning: `bg-amber-500/90 text-white ring-amber-200`,
    info: `bg-sky-500/90 text-white ring-sky-200`
  }, Ar = {
    error: `!`,
    warning: `!`,
    info: `i`
  };
  function jr() {
    let e2 = x((e3) => e3.enabled), t2 = x((e3) => e3.report), n2 = x((e3) => e3.visibleSeverities), r2 = x((e3) => e3.selectedIssueId), i2 = x((e3) => e3.selectIssue), a2 = X((e3) => e3.active), o2 = (0, Z.useMemo)(() => t2 ? Lr(t2.issues.filter((e3) => n2.has(e3.severity))) : [], [
      t2,
      n2
    ]);
    return !e2 || o2.length === 0 || a2 ? null : (0, Q.jsx)(`group`, {
      children: o2.map((e3, t3) => {
        let n3 = e3[0];
        if (!n3) return null;
        let a3 = [
          n3.anchor[0],
          n3.anchor[1],
          n3.anchor[2]
        ], o3 = e3.some((e4) => e4.id === r2);
        return (0, Q.jsx)(f, {
          position: a3,
          center: true,
          zIndexRange: o3 ? [
            1e3,
            900
          ] : [
            100,
            0
          ],
          style: {
            pointerEvents: `none`
          },
          children: (0, Q.jsx)(Mr, {
            issues: e3,
            selected: o3,
            onSelect: (e4) => i2(e4 === r2 ? null : e4)
          })
        }, `dfm-${t3}`);
      })
    });
  }
  function Mr({ issues: e2, selected: t2, onSelect: n2 }) {
    let r2 = Ir(e2), i2 = e2.find((e3) => e3.severity === r2) ?? e2[0];
    if (!i2) return null;
    let a2 = kr[r2], o2 = Ar[r2], s2 = e2.length;
    return (0, Q.jsxs)(`div`, {
      className: `flex items-start gap-2`,
      children: [
        (0, Q.jsxs)(`button`, {
          type: `button`,
          onClick: (e3) => {
            e3.stopPropagation(), n2(i2.id);
          },
          className: $e(`pointer-events-auto relative flex h-6 w-6 items-center justify-center rounded-full font-bold text-xs ring-2 shadow-md transition-transform`, a2, t2 ? `scale-125` : `hover:scale-110`),
          title: i2.message,
          children: [
            o2,
            s2 > 1 && (0, Q.jsx)(`span`, {
              className: `absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-surface px-1 text-[10px] font-semibold text-text ring-1 ring-border`,
              children: s2
            })
          ]
        }),
        t2 && (0, Q.jsx)(Nr, {
          issue: i2,
          extras: s2 - 1
        })
      ]
    });
  }
  function Nr({ issue: e2, extras: t2 }) {
    return (0, Q.jsxs)(`div`, {
      className: `w-72 rounded-md border border-border bg-surface/95 backdrop-blur-sm p-3 shadow-lg text-text text-xs space-y-2`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `flex items-center justify-between gap-2`,
          children: [
            (0, Q.jsx)(`p`, {
              className: `font-medium leading-snug`,
              children: e2.message
            }),
            (0, Q.jsx)(`span`, {
              className: $e(`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold capitalize`, e2.severity === `error` ? `bg-red-500/20 text-red-300` : e2.severity === `warning` ? `bg-amber-500/20 text-amber-300` : `bg-sky-500/20 text-sky-300`),
              children: e2.severity
            })
          ]
        }),
        e2.explanation && (0, Q.jsx)(`p`, {
          className: `leading-relaxed text-text-muted`,
          children: e2.explanation
        }),
        (0, Q.jsxs)(`div`, {
          className: `flex gap-2 text-[11px] text-text-muted`,
          children: [
            (0, Q.jsxs)(`span`, {
              children: [
                `measured `,
                (0, Q.jsx)(`strong`, {
                  className: `text-text`,
                  children: Pr(e2.measured)
                }),
                ` `,
                e2.units
              ]
            }),
            (0, Q.jsxs)(`span`, {
              children: [
                `limit `,
                (0, Q.jsx)(`strong`, {
                  className: `text-text`,
                  children: Pr(e2.limit)
                }),
                ` `,
                e2.units
              ]
            })
          ]
        }),
        e2.suggested_fix && (0, Q.jsxs)(`div`, {
          className: `mt-1 rounded bg-surface-2 px-2 py-1 text-[11px]`,
          children: [
            (0, Q.jsx)(`div`, {
              className: `font-semibold opacity-80`,
              children: `Suggested fix`
            }),
            (0, Q.jsx)(`div`, {
              className: `opacity-90`,
              children: Fr(e2.suggested_fix)
            })
          ]
        }),
        t2 > 0 && (0, Q.jsxs)(`div`, {
          className: `text-[10px] text-text-muted italic`,
          children: [
            `+`,
            t2,
            ` more issue`,
            t2 > 1 ? `s` : ``,
            ` at this location`
          ]
        })
      ]
    });
  }
  function Pr(e2) {
    return Math.abs(e2) >= 100 ? e2.toFixed(0) : Math.abs(e2) >= 10 ? e2.toFixed(1) : e2.toFixed(2);
  }
  function Fr(e2) {
    if (!e2) return ``;
    switch (e2.type) {
      case `set_param`:
        return `Set ${e2.path} = ${JSON.stringify(e2.value)} on node ${e2.node}`;
      case `wrap_op`:
        return `Wrap node ${e2.node} with a new op`;
      case `replace_op`:
        return `Replace node ${e2.node}`;
      case `manual`:
        return e2.description;
    }
  }
  function Ir(e2) {
    return e2.some((e3) => e3.severity === `error`) ? `error` : e2.some((e3) => e3.severity === `warning`) ? `warning` : `info`;
  }
  function Lr(e2) {
    let t2 = /* @__PURE__ */ new Map();
    for (let n2 of e2) {
      let e3 = `${Rr(n2.anchor[0])}|${Rr(n2.anchor[1])}|${Rr(n2.anchor[2])}`, r2 = t2.get(e3);
      r2 ? r2.push(n2) : t2.set(e3, [
        n2
      ]);
    }
    return Array.from(t2.values());
  }
  function Rr(e2) {
    return Math.round(e2 * 2);
  }
  var zr = null, Br = null, Vr = null, Hr = null, Ur = null;
  function Wr() {
    return Hr;
  }
  function Gr() {
    Ur == null ? void 0 : Ur();
  }
  function Kr(e2) {
    zr = e2;
  }
  function qr() {
    let e2 = H((e3) => e3.scene), t2 = H((e3) => e3.engine), n2 = U((e3) => e3.document), { camera: a2, size: o2, controls: s2, invalidate: c2 } = i(), l2 = C(), u2 = (0, Z.useRef)(false), d2 = (0, Z.useRef)({
      x: 0,
      y: 0,
      z: 0,
      tx: 0,
      ty: 0,
      tz: 0
    }), f2 = (0, Z.useRef)(false);
    return (0, Z.useEffect)(() => {
      var _a2, _b, _c, _d;
      if (!l2 || !t2 || !n2) {
        u2.current = false;
        return;
      }
      let e3;
      try {
        e3 = t2.evaluateWithSolids(n2);
      } catch (e4) {
        Y.warn(`gpu`, `Ray-trace eval failed: ${e4}`), u2.current = false;
        return;
      }
      let r2 = (((_a2 = e3.parts) == null ? void 0 : _a2.length) ?? 0) > 0, i2 = (((_b = e3.instances) == null ? void 0 : _b.length) ?? 0) > 0;
      if (!r2 && !i2) {
        u2.current = false;
        return;
      }
      let p2 = l2;
      (_c = p2.clearScene) == null ? void 0 : _c.call(p2);
      let m2 = (e4) => {
        if (!e4) return null;
        let t3 = n2.materials[e4] ?? Ge(e4);
        return t3 ? {
          color: t3.color,
          metallic: t3.metallic,
          roughness: t3.roughness
        } : null;
      }, h2 = (e4, t3) => {
        let n3 = m2(t3);
        n3 && typeof p2.uploadSolidWithMaterial == `function` ? p2.uploadSolidWithMaterial(e4, n3.color[0], n3.color[1], n3.color[2], n3.metallic, n3.roughness) : p2.uploadSolid(e4);
      }, g2 = false, _2;
      for (let t3 of e3.parts ?? []) {
        let e4 = t3.solid;
        if (e4) {
          try {
            h2(e4, t3.material);
          } catch (e5) {
            Y.debug(`gpu`, `uploadSolid failed: ${e5}`);
          }
          _2 === void 0 && (_2 = t3.material), g2 = true;
        }
      }
      if (i2 && ((_d = e3.partDefs) == null ? void 0 : _d.length)) {
        let t3 = /* @__PURE__ */ new Map();
        for (let n3 of e3.partDefs) {
          let e4 = n3.solid;
          e4 && t3.set(n3.id, e4);
        }
        let r3 = et(n2);
        for (let n3 of e3.instances ?? []) {
          let e4 = t3.get(n3.partDefId);
          if (!e4) continue;
          let i3 = n3.id ?? n3.instanceId, a3 = (i3 ? r3.get(i3) : void 0) ?? n3.transform, o3 = a3 ? e4.scale(a3.scale.x, a3.scale.y, a3.scale.z).rotate(a3.rotation.x, a3.rotation.y, a3.rotation.z).translate(a3.translation.x, a3.translation.y, a3.translation.z) : e4;
          try {
            h2(o3, n3.material);
          } catch (e5) {
            Y.debug(`gpu`, `uploadSolid (instance) failed: ${e5}`);
          }
          _2 === void 0 && (_2 = n3.material), g2 = true;
        }
      }
      if (g2 && _2 && typeof p2.uploadSolidWithMaterial != `function`) {
        let e4 = n2.materials[_2], t3 = e4 ? null : Ge(_2), r3 = e4 ?? t3;
        if (r3) try {
          let e5 = false;
          if (typeof p2.setMaterialFromDef == `function`) try {
            p2.setMaterialFromDef(JSON.stringify(r3), null), e5 = true;
          } catch (e6) {
            Y.debug(`gpu`, `setMaterialFromDef rejected the definition, falling back: ${e6}`);
          }
          e5 || p2.setMaterial(r3.color[0], r3.color[1], r3.color[2], r3.metallic, r3.roughness);
        } catch (e5) {
          Y.debug(`gpu`, `Failed to set material: ${e5}`);
        }
      }
      if (u2.current = g2, g2) {
        f2.current = true;
        let e4 = a2, t3 = (s2 == null ? void 0 : s2.target) ?? {
          x: 0,
          y: 0,
          z: 0
        }, n3 = {
          position: [
            e4.position.x,
            e4.position.y,
            e4.position.z
          ],
          target: [
            t3.x,
            t3.y,
            t3.z
          ],
          fov: e4.fov,
          width: o2.width,
          height: o2.height
        };
        Br = n3, d2.current = {
          x: e4.position.x,
          y: e4.position.y,
          z: e4.position.z,
          tx: t3.x,
          ty: t3.y,
          tz: t3.z
        }, zr && (f2.current = false, zr(n3)), c2();
      }
    }, [
      e2,
      l2,
      t2,
      n2,
      a2,
      s2,
      o2,
      c2
    ]), (0, Z.useEffect)(() => (Vr = c2, () => {
      Vr = null;
    }), [
      c2
    ]), r(() => {
      if (!l2 || !u2.current) return;
      let e3 = a2, t3 = (s2 == null ? void 0 : s2.target) ?? {
        x: 0,
        y: 0,
        z: 0
      }, n3 = d2.current, r2 = 1e-3;
      if (!(Math.abs(e3.position.x - n3.x) > r2 || Math.abs(e3.position.y - n3.y) > r2 || Math.abs(e3.position.z - n3.z) > r2 || Math.abs(t3.x - n3.tx) > r2 || Math.abs(t3.y - n3.ty) > r2 || Math.abs(t3.z - n3.tz) > r2) && !f2.current) return;
      d2.current = {
        x: e3.position.x,
        y: e3.position.y,
        z: e3.position.z,
        tx: t3.x,
        ty: t3.y,
        tz: t3.z
      };
      let i2 = {
        position: [
          e3.position.x,
          e3.position.y,
          e3.position.z
        ],
        target: [
          t3.x,
          t3.y,
          t3.z
        ],
        fov: e3.fov,
        width: o2.width,
        height: o2.height
      };
      Br = i2, zr && (f2.current = false, zr(i2));
    }), null;
  }
  var Jr = {
    off: 0,
    normals: 1,
    "face-id": 2,
    lighting: 3,
    orientation: 4
  }, Yr = {
    draft: {
      scale: 0.5,
      maxPixels: 307200
    },
    standard: {
      scale: 1,
      maxPixels: 921600
    },
    high: {
      scale: 2,
      maxPixels: 2073600
    }
  }, Xr = 6;
  function Zr() {
    let e2 = (0, Z.useRef)(null), t2 = J((e3) => e3.raytraceQuality), n2 = J((e3) => e3.raytraceDebugMode), r2 = J((e3) => e3.raytraceEdgesEnabled), i2 = J((e3) => e3.raytraceEdgeDepthThreshold), a2 = J((e3) => e3.raytraceEdgeNormalThreshold), o2 = J((e3) => e3.raytraceEdgeSilhouetteEnabled), s2 = J((e3) => e3.raytraceEdgeCreaseEnabled), c2 = J((e3) => e3.raytraceEdgeBoundaryEnabled), l2 = J((e3) => e3.raytraceEdgeSilhouetteWidth), u2 = J((e3) => e3.raytraceEdgeCreaseWidth), d2 = J((e3) => e3.raytraceEdgeBoundaryWidth), f2 = J((e3) => e3.raytraceEdgeSoftness), p2 = C(), { isDark: m2 } = we(), h2 = (0, Z.useRef)(`off`), g2 = (0, Z.useRef)({
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
    }), _2 = (0, Z.useRef)({
      stylize: true
    }), v2 = (0, Z.useRef)(false), y2 = (0, Z.useRef)(null), b2 = (0, Z.useRef)(null), x2 = (0, Z.useRef)(t2);
    (0, Z.useEffect)(() => {
      x2.current = t2;
    }, [
      t2
    ]);
    let S2 = (0, Z.useCallback)((e3, t3, n3, r3, i3, a3) => {
      let o3 = new ImageData(new Uint8ClampedArray(t3), n3, r3);
      if (n3 !== i3 || r3 !== a3) {
        e3.imageSmoothingEnabled = true, e3.imageSmoothingQuality = `high`;
        let t4 = document.createElement(`canvas`);
        t4.width = n3, t4.height = r3;
        let s3 = t4.getContext(`2d`);
        s3 && (s3.putImageData(o3, 0, 0), e3.drawImage(t4, 0, 0, i3, a3));
      } else e3.putImageData(o3, 0, 0);
    }, []), w2 = (0, Z.useCallback)((t3, n3) => {
      if (!p2 || !e2.current || v2.current) return;
      let r3 = e2.current;
      if (!r3.getContext(`2d`)) return;
      (r3.width !== t3.width || r3.height !== t3.height) && (r3.width = t3.width, r3.height = t3.height);
      let i3 = Yr[n3], a3 = Math.floor(t3.width * i3.scale), o3 = Math.floor(t3.height * i3.scale), s3 = a3 * o3;
      if (s3 > i3.maxPixels) {
        let e3 = Math.sqrt(i3.maxPixels / s3);
        a3 = Math.floor(a3 * e3), o3 = Math.floor(o3 * e3);
      }
      v2.current = true;
      let c3 = a3, l3 = o3, u3 = t3.width, d3 = t3.height, [f3, m3, h3] = t3.position, [g3, _3, y3] = t3.target, b3 = [
        f3,
        -h3,
        m3
      ], x3 = [
        g3,
        -y3,
        _3
      ];
      p2.render(b3, x3, [
        0,
        0,
        1
      ], a3, o3, t3.fov * Math.PI / 180).then((t4) => {
        let n4 = e2.current;
        if (n4) {
          let e3 = n4.getContext(`2d`);
          e3 && S2(e3, t4, c3, l3, u3, d3);
        }
        v2.current = false;
        let r4 = J.getState();
        r4.raytraceError !== null && r4.setRaytraceError(null);
      }).catch((e3) => {
        let t4 = (e3 == null ? void 0 : e3.message) ?? String(e3);
        Y.warn(`gpu`, `Render failed: ${t4}`), J.getState().setRaytraceError(t4), v2.current = false;
      });
    }, [
      p2,
      S2
    ]), T2 = (0, Z.useCallback)(() => {
      b2.current && (b2.current = (clearTimeout(b2.current), null));
    }, []), E2 = (0, Z.useCallback)((e3) => {
      var _a2;
      if (T2(), !p2) return;
      let t3 = [
        `draft`,
        `standard`,
        `high`
      ].indexOf(x2.current), n3 = [
        {
          tier: `draft`,
          frames: 1,
          gap: 0
        }
      ];
      t3 >= 1 && n3.push({
        tier: `standard`,
        frames: 4,
        gap: 80
      }), t3 >= 2 && n3.push({
        tier: `high`,
        frames: 24,
        gap: 80
      });
      let r3 = p2;
      (_a2 = r3.resetAccumulation) == null ? void 0 : _a2.call(r3);
      let i3 = 0, a3 = 0, o3 = () => {
        var _a3;
        if (i3 >= n3.length) return;
        let t4 = n3[i3];
        if (a3 >= t4.frames) {
          if (i3++, a3 = 0, i3 >= n3.length) return;
          (_a3 = r3.resetAccumulation) == null ? void 0 : _a3.call(r3), b2.current = setTimeout(o3, n3[i3].gap);
          return;
        }
        w2(e3, t4.tier), a3++;
        let s3 = t4.tier === `high` ? 60 : 30;
        b2.current = setTimeout(o3, s3);
      };
      o3();
    }, [
      T2,
      w2,
      p2
    ]);
    return (0, Z.useEffect)(() => (Hr = e2.current, () => {
      Hr === e2.current && (Hr = null);
    }), []), (0, Z.useEffect)(() => (Ur = () => {
      let e3 = y2.current;
      e3 && w2(e3, `standard`);
    }, () => {
      Ur = null;
    }), [
      w2
    ]), (0, Z.useEffect)(() => {
      let e3 = (e4) => {
        y2.current = e4, E2(e4);
      };
      return Kr(e3), Br ? e3(Br) : Vr == null ? void 0 : Vr(), () => {
        Kr(null);
      };
    }, [
      E2
    ]), (0, Z.useEffect)(() => {
      y2.current && E2(y2.current);
    }, [
      t2,
      E2
    ]), (0, Z.useEffect)(() => {
      var _a2;
      p2 && ((_a2 = p2.setTheme) == null ? void 0 : _a2.call(p2, +!m2), y2.current && E2(y2.current));
    }, [
      m2,
      p2,
      E2
    ]), (0, Z.useEffect)(() => {
      if (!p2 || n2 === h2.current) return;
      h2.current = n2;
      let e3 = Jr[n2] ?? 0, t3 = p2;
      typeof t3.setDebugMode == `function` ? (t3.setDebugMode(e3), y2.current && E2(y2.current)) : Y.debug(`gpu`, `setDebugMode not available - WASM may need rebuild`);
    }, [
      n2,
      p2,
      E2
    ]), (0, Z.useEffect)(() => {
      if (!p2) return;
      let e3 = g2.current;
      if (r2 === e3.enabled && i2 === e3.depth && a2 === e3.normal && o2 === e3.silhouette && s2 === e3.crease && c2 === e3.boundary && l2 === e3.silhouetteWidth && u2 === e3.creaseWidth && d2 === e3.boundaryWidth && f2 === e3.softness) return;
      g2.current = {
        enabled: r2,
        depth: i2,
        normal: a2,
        silhouette: o2,
        crease: s2,
        boundary: c2,
        silhouetteWidth: l2,
        creaseWidth: u2,
        boundaryWidth: d2,
        softness: f2
      };
      let t3 = p2;
      typeof t3.setEdgeDetection == `function` && t3.setEdgeDetection(r2, i2, a2), typeof t3.setEdgeStyle == `function` ? t3.setEdgeStyle(o2, s2, c2, 0.08, 0.08, 0.1, 1, 0.12, 0.12, 0.14, 1, 0.06, 0.06, 0.08, 1, l2, u2, d2, f2) : Y.debug(`gpu`, `setEdgeStyle not available - WASM may need rebuild`), y2.current && E2(y2.current);
    }, [
      r2,
      i2,
      a2,
      o2,
      s2,
      c2,
      l2,
      u2,
      d2,
      f2,
      p2,
      E2
    ]), (0, Z.useEffect)(() => {
      if (!p2) return;
      let e3 = _2.current;
      if (r2 === e3.stylize) return;
      _2.current = {
        stylize: r2
      };
      let t3 = p2;
      typeof t3.setPathTrace == `function` ? (t3.setPathTrace(Xr, r2), y2.current && E2(y2.current)) : Y.debug(`gpu`, `setPathTrace not available - WASM may need rebuild`);
    }, [
      r2,
      p2,
      E2
    ]), p2 ? (0, Q.jsx)(`canvas`, {
      ref: e2,
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
        pointerEvents: `none`
      }
    }) : null;
  }
  var Qr = Math.PI / 7, $r = 0.25, ei = 6, ti = 40;
  function ni(e2, t2, n2, r2) {
    n2.copy(e2);
    let i2 = ri.copy(t2).sub(e2), a2 = i2.length();
    a2 < 1e-6 ? i2.set(0, -1, 0) : i2.divideScalar(a2);
    let o2 = Math.max(ei, Math.min(ti, a2 * $r)), s2 = Math.tan(Qr) * o2, c2 = ii.set(0, 0, 1);
    Math.abs(i2.dot(c2)) > 0.98 && c2.set(0, 1, 0);
    let l2 = ai.crossVectors(i2, c2).normalize(), u2 = oi.crossVectors(l2, i2).normalize(), d2 = si.copy(e2).addScaledVector(i2, o2), f2 = ci.copy(l2).multiplyScalar(s2), p2 = li.copy(u2).multiplyScalar(s2);
    r2[0].copy(d2).add(f2).add(p2), r2[1].copy(d2).sub(f2).add(p2), r2[2].copy(d2).sub(f2).sub(p2), r2[3].copy(d2).add(f2).sub(p2);
  }
  var ri = new V(), ii = new V(), ai = new V(), oi = new V(), si = new V(), ci = new V(), li = new V();
  function ui({ participant: e2, goal: t2 }) {
    let n2 = i((e3) => e3.invalidate), a2 = (0, Z.useRef)(new V(...t2.position)), o2 = (0, Z.useRef)(new V(...t2.target)), s2 = (0, Z.useRef)(new V()), c2 = (0, Z.useRef)([
      new V(),
      new V(),
      new V(),
      new V()
    ]);
    (0, Z.useEffect)(() => {
      n2();
    }, [
      t2.position[0],
      t2.position[1],
      t2.position[2],
      t2.target[0],
      t2.target[1],
      t2.target[2],
      n2
    ]);
    let l2 = (0, Z.useMemo)(() => {
      let e3 = new M(), t3 = new Float32Array(48);
      return e3.setAttribute(`position`, new j(t3, 3)), e3;
    }, []), u2 = (0, Z.useMemo)(() => new he({
      color: e2.color,
      transparent: true,
      opacity: 0.85,
      depthTest: true
    }), [
      e2.color
    ]);
    (0, Z.useEffect)(() => () => {
      l2.dispose(), u2.dispose();
    }, [
      l2,
      u2
    ]);
    let d2 = (0, Z.useRef)(null);
    return r(() => {
      let e3 = di.set(t2.position[0], t2.position[1], t2.position[2]), r2 = fi.set(t2.target[0], t2.target[1], t2.target[2]), i2 = 0.15;
      a2.current.lerp(e3, i2), o2.current.lerp(r2, i2), ni(a2.current, o2.current, s2.current, c2.current);
      let u3 = l2.getAttribute(`position`), f2 = s2.current, p2 = c2.current;
      for (let e4 = 0; e4 < 4; e4++) {
        let t3 = p2[e4], n3 = p2[(e4 + 1) % 4];
        u3.setXYZ(e4 * 2, t3.x, t3.y, t3.z), u3.setXYZ(e4 * 2 + 1, n3.x, n3.y, n3.z);
      }
      for (let e4 = 0; e4 < 4; e4++) {
        u3.setXYZ(8 + e4 * 2, f2.x, f2.y, f2.z);
        let t3 = p2[e4];
        u3.setXYZ(8 + e4 * 2 + 1, t3.x, t3.y, t3.z);
      }
      u3.needsUpdate = true, l2.computeBoundingSphere(), d2.current && d2.current.position.copy(f2);
      let m2 = a2.current.distanceToSquared(e3), h2 = o2.current.distanceToSquared(r2);
      (m2 > 1e-4 || h2 > 1e-4) && n2();
    }), (0, Q.jsxs)(`group`, {
      children: [
        (0, Q.jsx)(`lineSegments`, {
          geometry: l2,
          material: u2
        }),
        (0, Q.jsx)(`group`, {
          ref: d2,
          children: (0, Q.jsx)(f, {
            center: true,
            distanceFactor: 40,
            style: {
              pointerEvents: `none`,
              transform: `translate(0, -18px)`,
              whiteSpace: `nowrap`,
              fontSize: `11px`,
              fontWeight: 600,
              padding: `2px 6px`,
              borderRadius: `4px`,
              color: `white`,
              background: e2.color,
              boxShadow: `0 1px 3px rgba(0,0,0,0.3)`
            },
            children: e2.name
          })
        })
      ]
    });
  }
  var di = new V(), fi = new V();
  function pi() {
    let e2 = Te((e3) => e3.participants), t2 = J((e3) => e3.followMode), n2 = J((e3) => e3.followingParticipantId);
    if (t2 === `free`) return null;
    let r2 = [];
    return e2.forEach((e3) => {
      e3.id !== `local` && e3.camera && (t2 !== `lock` || n2 !== e3.id) && r2.push((0, Q.jsx)(ui, {
        participant: e3,
        goal: e3.camera
      }, e3.id));
    }), (0, Q.jsx)(Q.Fragment, {
      children: r2
    });
  }
  function mi() {
    let e2 = i((e3) => e3.camera), t2 = i((e3) => e3.controls), n2 = (0, Z.useRef)(null);
    (0, Z.useEffect)(() => {
      function r2() {
        let { selectedPartIds: n3 } = J.getState();
        if (n3.size === 0) return;
        let r3 = H.getState().scene, i3 = U.getState().parts;
        if (!r3) return;
        let a3 = new re(), o3 = false;
        for (let [e3, t3] of r3.parts.entries()) {
          let r4 = i3[e3];
          if (!r4 || !n3.has(r4.id)) continue;
          let s4 = t3.mesh.positions;
          for (let e4 = 0; e4 < s4.length; e4 += 3) a3.expandByPoint(new V(s4[e4], s4[e4 + 1], s4[e4 + 2]));
          o3 = true;
        }
        if (!o3) return;
        let s3 = new V();
        a3.getCenter(s3);
        let c3 = new V();
        a3.getSize(c3);
        let l3 = Math.max(c3.x, c3.y, c3.z, 1) * 2, u3 = new V().copy(e2.position).sub(t2 && `target` in t2 && t2.target ? t2.target : new V(0, 0, 0)).normalize();
        e2.position.copy(s3).addScaledVector(u3, l3), t2 && `target` in t2 && t2.target && t2.target.copy(s3);
      }
      function i2() {
        let e3 = H.getState().scene;
        if (!e3) return null;
        let t3 = new re(), n3 = new V();
        if (e3.instances && e3.instances.length > 0) for (let r3 of e3.instances) {
          let e4 = r3.transform, i3 = r3.mesh.positions;
          for (let r4 = 0; r4 < i3.length; r4 += 3) {
            let a3 = i3[r4], o3 = i3[r4 + 1], s3 = i3[r4 + 2];
            e4 ? n3.set(a3 * e4.scale.x + e4.translation.x, o3 * e4.scale.y + e4.translation.y, s3 * e4.scale.z + e4.translation.z) : n3.set(a3, o3, s3), t3.expandByPoint(n3);
          }
        }
        else {
          if (e3.parts.length === 0) return null;
          for (let n4 of e3.parts) {
            let e4 = n4.mesh.positions;
            for (let n5 = 0; n5 < e4.length; n5 += 3) t3.expandByPoint(new V(e4[n5], e4[n5 + 1], e4[n5 + 2]));
          }
        }
        return t3.isEmpty() ? null : t3;
      }
      function a2() {
        let n3 = i2(), r3 = new V(), a3 = 150;
        if (n3) {
          n3.getCenter(r3);
          let e3 = new V();
          n3.getSize(e3), a3 = Math.max(e3.x, e3.y, e3.z, 50) * 2;
        }
        let o3 = a3 / Math.sqrt(3);
        e2.position.set(r3.x + o3, r3.y + o3, r3.z + o3), t2 && `target` in t2 && t2.target && t2.target.copy(r3);
      }
      function o2() {
        let n3 = i2(), r3 = new V(), a3 = 150;
        if (n3) {
          n3.getCenter(r3);
          let e3 = new V();
          n3.getSize(e3), a3 = Math.max(e3.x, e3.y, e3.z, 50) * 2;
        }
        let o3 = new V(r3.x, r3.z, -r3.y), s3 = t2 && `target` in t2 && t2.target ? t2.target : new V(0, 0, 0), c3 = new V().copy(e2.position).sub(s3);
        c3.lengthSq() < 1e-6 && c3.set(1, 1, 1), c3.normalize(), e2.position.copy(o3).addScaledVector(c3, a3), t2 && `target` in t2 && t2.target && t2.target.copy(o3);
      }
      function s2() {
        let n3 = i2(), r3 = new V(), a3 = 150;
        if (n3) {
          n3.getCenter(r3);
          let e3 = new V();
          n3.getSize(e3), a3 = Math.max(e3.x, e3.y, e3.z, 50) * 2;
        }
        e2.position.set(r3.x, r3.y, r3.z + a3), t2 && `target` in t2 && t2.target && t2.target.copy(r3);
      }
      function c2() {
        let n3 = i2(), r3 = new V(), a3 = 150;
        if (n3) {
          n3.getCenter(r3);
          let e3 = new V();
          n3.getSize(e3), a3 = Math.max(e3.x, e3.y, e3.z, 50) * 2;
        }
        e2.position.set(r3.x, r3.y - a3, r3.z), t2 && `target` in t2 && t2.target && t2.target.copy(r3);
      }
      function l2() {
        let n3 = i2(), r3 = new V(), a3 = 150;
        if (n3) {
          n3.getCenter(r3);
          let e3 = new V();
          n3.getSize(e3), a3 = Math.max(e3.x, e3.y, e3.z, 50) * 2;
        }
        e2.position.set(r3.x + a3, r3.y, r3.z), t2 && `target` in t2 && t2.target && t2.target.copy(r3);
      }
      window.addEventListener(`vcad:focus-selection`, r2), window.addEventListener(`vcad:camera-isometric`, a2), window.addEventListener(`vcad:camera-top`, s2), window.addEventListener(`vcad:camera-front`, c2), window.addEventListener(`vcad:camera-right`, l2);
      let u2 = () => {
        var _a2;
        if (!t2 || !(`target` in t2) || !t2.target || typeof window < `u` && new URLSearchParams(window.location.search).has(`at`)) return;
        let e3 = U.getState().documentId, r3 = H.getState().scene;
        e3 && n2.current !== e3 && r3 && (r3.parts.some((e4) => e4.mesh.indices.length > 0) || (((_a2 = r3.instances) == null ? void 0 : _a2.some((e4) => e4.mesh.indices.length > 0)) ?? false)) && (n2.current = e3, o2());
      };
      u2();
      let d2 = U.subscribe(u2), f2 = H.subscribe(u2);
      return () => {
        window.removeEventListener(`vcad:focus-selection`, r2), window.removeEventListener(`vcad:camera-isometric`, a2), window.removeEventListener(`vcad:camera-top`, s2), window.removeEventListener(`vcad:camera-front`, c2), window.removeEventListener(`vcad:camera-right`, l2), d2(), f2();
      };
    }, [
      e2,
      t2
    ]);
  }
  function hi() {
    let e2 = i((e3) => e3.gl), t2 = i((e3) => e3.invalidate), [n2, r2] = (0, Z.useState)(false);
    return (0, Z.useEffect)(() => {
      let t3 = e2.domElement;
      if (!t3) return;
      let n3, i2 = () => {
        clearTimeout(n3), n3 = setTimeout(() => {
          window.dispatchEvent(new CustomEvent(`vcad:gl-stuck-lost`));
        }, 1500);
      };
      try {
        let t4 = e2.getContext();
        t4 && typeof t4.isContextLost == `function` && t4.isContextLost() && r2(true);
      } catch {
        r2(true);
      }
      let a2 = (e3) => {
        e3.preventDefault(), r2(true), i2();
      }, o2 = () => {
        clearTimeout(n3), r2(false);
      };
      return t3.addEventListener(`webglcontextlost`, a2, false), t3.addEventListener(`webglcontextrestored`, o2, false), () => {
        clearTimeout(n3), t3.removeEventListener(`webglcontextlost`, a2, false), t3.removeEventListener(`webglcontextrestored`, o2, false);
      };
    }, [
      e2
    ]), (0, Z.useEffect)(() => {
      if (n2) return;
      t2();
      let e3 = requestAnimationFrame(() => t2());
      return () => cancelAnimationFrame(e3);
    }, [
      n2,
      t2
    ]), n2;
  }
  function gi() {
    let e2 = dt((e3) => e3.inputDevice), t2 = dt((e3) => e3.detectedDevice), n2 = dt((e3) => e3.setDetectedDevice), r2 = (0, Z.useRef)([]), i2 = (0, Z.useRef)(false);
    (0, Z.useEffect)(() => {
      if (e2 !== `auto` || t2 !== null) {
        i2.current = true;
        return;
      }
      i2.current = false, r2.current = [];
      let a2 = (e3) => {
        if (i2.current || (r2.current.push({
          deltaMode: e3.deltaMode,
          hasHorizontal: Math.abs(e3.deltaX) > 0.5,
          deltaY: Math.abs(e3.deltaY)
        }), r2.current.length < 5)) return;
        i2.current = true;
        let t3 = r2.current;
        t3.some((e4) => e4.deltaMode === 1) ? n2(`mouse`) : t3.filter((e4) => e4.hasHorizontal).length >= 2 || t3.reduce((e4, t4) => e4 + t4.deltaY, 0) / t3.length < 20 ? n2(`trackpad`) : n2(`mouse`);
      };
      return window.addEventListener(`wheel`, a2, {
        passive: true
      }), () => window.removeEventListener(`wheel`, a2);
    }, [
      e2,
      t2,
      n2
    ]);
  }
  function _i() {
    var _a2;
    let e2 = (0, Z.useRef)(null), t2 = (0, Z.useRef)(0), n2 = (0, Z.useRef)([]), a2 = U((e3) => e3.document.joints), o2 = U((e3) => e3.setJointState), s2 = (a2 == null ? void 0 : a2.map((e3) => e3.id).join(`,`)) ?? ``, c2 = K((e3) => e3.mode), l2 = K((e3) => e3.timestep), u2 = K((e3) => e3.playbackSpeed), d2 = K((e3) => e3.setPhysicsAvailable), f2 = K((e3) => e3.setJointStates), p2 = K((e3) => e3.setObservation), m2 = K((e3) => e3.setMode);
    (0, Z.useEffect)(() => {
      it().then((e3) => {
        console.log(`[Physics] isPhysicsAvailable:`, e3), d2(e3);
      });
    }, [
      d2
    ]), (0, Z.useEffect)(() => {
      if (!a2 || a2.length === 0) {
        e2.current && (e2.current.close(), e2.current = null, n2.current = []);
        return;
      }
      let t3 = true;
      async function r2() {
        if (await it() && t3) try {
          let r3 = U.getState().document, i2 = await ot.create(r3, {
            endEffectorIds: [],
            dt: 1 / 240,
            substeps: 4
          });
          if (!t3) {
            i2.close();
            return;
          }
          e2.current && e2.current.close(), e2.current = i2;
          let a3 = U.getState().document.joints ?? [];
          n2.current = a3.map((e3) => e3.id);
          let o3 = a3.map((e3) => ({
            id: e3.id,
            name: e3.name ?? e3.id,
            position: e3.state ?? 0,
            velocity: 0,
            torque: 0,
            targetVelocity: 0,
            limits: null
          }));
          f2(o3);
          let s3 = i2.observe();
          p2({
            jointPositions: s3.joint_positions,
            jointVelocities: s3.joint_velocities,
            endEffectorPoses: s3.end_effector_poses
          }), console.log(`[Physics] Initialized with ${i2.numJoints} joints, ${i2.actionDim} action dim`);
        } catch (e3) {
          console.error(`[Physics] Failed to initialize:`, e3);
        }
      }
      return r2(), () => {
        t3 = false;
      };
    }, [
      s2,
      f2,
      p2
    ]), (0, Z.useEffect)(() => () => {
      e2.current && (e2.current = (e2.current.close(), null));
    }, []);
    let h2 = (0, Z.useCallback)(() => K.getState().jointStates.map((e3) => e3.position), []), g2 = (0, Z.useCallback)(() => K.getState().jointStates.map((e3) => e3.torque), []), _2 = (0, Z.useCallback)(() => K.getState().jointStates.map((e3) => e3.targetVelocity ?? 0), []), v2 = (0, Z.useCallback)((e3) => {
      p2({
        jointPositions: e3.joint_positions,
        jointVelocities: e3.joint_velocities,
        endEffectorPoses: e3.end_effector_poses
      });
      let t3 = K.getState().jointStates.map((t4, n3) => ({
        ...t4,
        position: e3.joint_positions[n3] ?? t4.position,
        velocity: e3.joint_velocities[n3] ?? t4.velocity
      }));
      f2(t3);
      let r2 = U.getState().document, i2 = structuredClone(r2);
      n2.current.forEach((t4, n3) => {
        var _a3;
        let r3 = (_a3 = i2.joints) == null ? void 0 : _a3.find((e4) => e4.id === t4);
        r3 && e3.joint_positions[n3] !== void 0 && (r3.state = e3.joint_positions[n3]);
      });
      let a3 = et(i2);
      H.getState().updateInstanceTransforms(a3);
    }, [
      p2,
      f2
    ]), { invalidate: y2 } = i();
    return r((n3, r2) => {
      let i2 = e2.current;
      if (i2 && c2 !== `off` && c2 !== `paused`) {
        if (c2 === `stepping`) {
          let e3 = K.getState().actionType, t3 = e3 === `torque` ? g2() : e3 === `velocity` ? _2() : h2(), n4 = i2.step(e3, t3);
          v2(n4.observation), m2(`paused`);
        } else if (c2 === `running`) {
          let e3 = r2 * u2;
          t2.current += e3;
          let n4 = K.getState().actionType;
          for (; t2.current >= l2; ) {
            let e4 = n4 === `torque` ? g2() : n4 === `velocity` ? _2() : h2(), r3 = i2.step(n4, e4);
            Math.random() < 0.01 && console.log(`[Physics] actionType:`, n4, `actions:`, e4, `positions:`, r3.observation.joint_positions), v2(r3.observation), t2.current -= l2;
          }
          y2();
        }
      }
    }), (0, Z.useEffect)(() => {
      if (c2 === `off` && e2.current) {
        let r2 = K.getState().jointStates;
        n2.current.forEach((e3, t3) => {
          var _a3;
          let n3 = (_a3 = r2[t3]) == null ? void 0 : _a3.position;
          n3 !== void 0 && o2(e3, n3, true);
        });
        let i2 = e2.current.reset();
        v2(i2), t2.current = 0;
      }
    }, [
      c2,
      v2,
      o2
    ]), {
      isInitialized: !!e2.current,
      numJoints: ((_a2 = e2.current) == null ? void 0 : _a2.numJoints) ?? 0
    };
  }
  function vi() {
    let e2 = (0, Z.useRef)(null), { invalidate: t2 } = i();
    (0, Z.useEffect)(() => pt.subscribe(() => {
      t2();
    }), [
      t2
    ]), r((n2, r2) => {
      let i2 = U.getState().document.timeline;
      if (!i2 || i2.tracks.length === 0) return;
      let a2 = pt.getState();
      if (!a2.visible) {
        e2.current = null;
        return;
      }
      let o2 = K.getState().mode;
      if (o2 === `running` || o2 === `stepping`) return;
      let s2 = Math.max(i2.durationS, 1e-6), c2 = a2.timeS;
      if (a2.playing ? (c2 += r2 * a2.speed, c2 >= s2 && (a2.loop ? c2 %= s2 : (c2 = s2, pt.setState({
        playing: false
      }))), pt.setState({
        timeS: c2
      })) : c2 = Math.min(Math.max(c2, 0), s2), e2.current === c2) return;
      e2.current = c2;
      let l2 = mt(i2, c2);
      if (l2.size === 0) return;
      let u2 = U.getState().document, d2 = structuredClone(u2), f2 = false;
      for (let e3 of d2.joints ?? []) {
        let t3 = l2.get(e3.id);
        t3 !== void 0 && (e3.state = t3, f2 = true);
      }
      if (!f2) return;
      let p2 = et(d2);
      H.getState().updateInstanceTransforms(p2), t2();
    });
  }
  var yi = [
    `video/mp4;codecs=avc1.640028`,
    `video/mp4;codecs=avc1.42E01E`,
    `video/mp4`,
    `video/webm;codecs=vp9`,
    `video/webm;codecs=vp8`,
    `video/webm`
  ], bi = 12e6, xi = 60, Si = 250;
  function Ci() {
    if (typeof MediaRecorder > `u`) return null;
    for (let e2 of yi) if (MediaRecorder.isTypeSupported(e2)) return e2;
    return null;
  }
  function wi(e2) {
    return e2.startsWith(`video/mp4`) ? `mp4` : e2.startsWith(`video/webm`) ? `webm` : `bin`;
  }
  function Ti(e2) {
    return e2.toLowerCase().replace(/[^a-z0-9]+/g, `-`).replace(/^-+|-+$/g, ``).slice(0, 60) || `untitled`;
  }
  function Ei() {
    return (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, `-`).slice(0, 19);
  }
  function Di() {
    let { gl: e2 } = i(), t2 = G((e3) => e3.status), n2 = J((e3) => e3.renderMode), r2 = K((e3) => e3.mode), a2 = (0, Z.useRef)({
      recorder: null,
      chunks: [],
      mimeType: null,
      rafId: null,
      raytraceDriving: false
    });
    (0, Z.useEffect)(() => {
      let r3 = G.getState(), i2 = a2.current;
      if (t2 === `recording` && !i2.recorder) {
        let t3 = Ci();
        if (!t3) {
          r3.setError(`MediaRecorder is not supported in this browser.`);
          return;
        }
        let o2 = Wr(), s2 = n2 === `raytrace` && o2 !== null;
        n2 === `raytrace` && !s2 && Y.warn(`app`, `Raytrace overlay not mounted at record start; falling back to WebGL canvas.`);
        let c2 = s2 ? o2 : e2.domElement;
        if (typeof c2.captureStream != `function`) {
          r3.setError(`Canvas.captureStream is not supported in this browser.`);
          return;
        }
        let l2 = c2.captureStream(xi), u2;
        try {
          u2 = new MediaRecorder(l2, {
            mimeType: t3,
            videoBitsPerSecond: bi
          });
        } catch (e3) {
          r3.setError(e3 instanceof Error ? e3.message : `Failed to create MediaRecorder.`);
          return;
        }
        i2.chunks = [], i2.recorder = u2, i2.mimeType = t3, i2.raytraceDriving = s2, u2.ondataavailable = (e3) => {
          e3.data && e3.data.size > 0 && (i2.chunks.push(e3.data), G.getState().addBytes(e3.data.size));
        }, u2.onerror = (e3) => {
          var _a2;
          let t4 = ((_a2 = e3.error) == null ? void 0 : _a2.message) ?? `MediaRecorder error`;
          Y.warn(`app`, `Recorder error: ${t4}`), G.getState().setError(t4);
        }, u2.onstop = () => {
          let e3 = i2.chunks, t4 = i2.mimeType ?? `video/webm`;
          if (i2.chunks = [], i2.recorder = null, i2.mimeType = null, i2.raytraceDriving = false, i2.rafId !== null && (cancelAnimationFrame(i2.rafId), i2.rafId = null), e3.length === 0) {
            G.getState().reset();
            return;
          }
          let n3 = new Blob(e3, {
            type: t4
          }), r4 = `vcad-sim-${Ti(U.getState().documentName ?? `untitled`)}-${Ei()}.${wi(t4)}`;
          ht(n3, r4), G.getState().reset();
        };
        try {
          u2.start(Si), G.getState().setMimeType(t3);
        } catch (e3) {
          i2.recorder = null, i2.mimeType = null, i2.raytraceDriving = false, r3.setError(e3 instanceof Error ? e3.message : `Failed to start recording.`);
          return;
        }
        if (i2.raytraceDriving) {
          let e3 = () => {
            a2.current.raytraceDriving && (Gr(), a2.current.rafId = requestAnimationFrame(e3));
          };
          a2.current.rafId = requestAnimationFrame(e3);
        }
      } else if (t2 === `saving` && i2.recorder) {
        i2.raytraceDriving = false, i2.rafId !== null && (cancelAnimationFrame(i2.rafId), i2.rafId = null);
        try {
          i2.recorder.state !== `inactive` && i2.recorder.stop();
        } catch (e3) {
          Y.warn(`app`, `Recorder stop failed: ${e3}`), G.getState().reset();
        }
      } else if (t2 === `idle` && i2.recorder) {
        i2.chunks = [];
        try {
          i2.recorder.ondataavailable = null, i2.recorder.onstop = null, i2.recorder.onerror = null, i2.recorder.state !== `inactive` && i2.recorder.stop();
        } catch {
        }
        i2.recorder = null, i2.mimeType = null, i2.raytraceDriving = false, i2.rafId !== null && (cancelAnimationFrame(i2.rafId), i2.rafId = null);
      }
    }, [
      t2,
      n2,
      e2
    ]), (0, Z.useEffect)(() => {
      let e3 = a2.current, t3 = e3.recorder;
      if (t3) {
        if (r2 === `paused` && t3.state === `recording`) try {
          t3.pause(), G.getState().pause(), e3.rafId !== null && (cancelAnimationFrame(e3.rafId), e3.rafId = null);
        } catch (e4) {
          Y.warn(`app`, `Recorder pause failed: ${e4}`);
        }
        else if (r2 === `running` && t3.state === `paused`) try {
          if (t3.resume(), G.getState().resume(), e3.raytraceDriving && e3.rafId === null) {
            let t4 = () => {
              a2.current.raytraceDriving && (Gr(), a2.current.rafId = requestAnimationFrame(t4));
            };
            e3.rafId = requestAnimationFrame(t4);
          }
        } catch (e4) {
          Y.warn(`app`, `Recorder resume failed: ${e4}`);
        }
        else r2 === `off` && t3.state !== `inactive` && G.getState().stop();
      }
    }, [
      r2,
      t2
    ]), (0, Z.useEffect)(() => () => {
      let e3 = a2.current;
      e3.rafId !== null && (cancelAnimationFrame(e3.rafId), e3.rafId = null);
      let t3 = e3.recorder;
      if (t3 && t3.state !== `inactive`) try {
        t3.ondataavailable = null, t3.onstop = null, t3.onerror = null, t3.stop();
      } catch {
      }
      e3.recorder = null, e3.chunks = [], e3.mimeType = null, e3.raytraceDriving = false;
    }, []);
  }
  function Oi(e2, t2) {
    let n2 = e2 ?? {};
    return (n2.shift ?? false) === (t2.shift ?? false) && (n2.ctrl ?? false) === (t2.ctrl ?? false) && (n2.meta ?? false) === (t2.meta ?? false) && (n2.alt ?? false) === (t2.alt ?? false);
  }
  function ki(e2) {
    return {
      shift: e2.shiftKey,
      ctrl: e2.ctrlKey,
      meta: e2.metaKey,
      alt: e2.altKey
    };
  }
  function Ai(e2, t2, n2) {
    let r2 = [
      ...e2.filter((e3) => !e3.device || e3.device === n2)
    ].sort((e3, t3) => {
      let n3 = (e4) => Object.values(e4 ?? {}).filter(Boolean).length;
      return n3(t3.modifiers) - n3(e3.modifiers);
    });
    for (let e3 of r2) if (Oi(e3.modifiers, t2)) return e3.action;
    return `none`;
  }
  function ji(e2, t2) {
    let n2 = {
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2
    }, r2 = (e3) => {
      switch (e3) {
        case `orbit`:
          return n2.ROTATE;
        case `zoom`:
          return n2.DOLLY;
        case `pan`:
          return n2.PAN;
        default:
          return;
      }
    }, i2 = e2.mouseBindings.filter((e3) => !e3.device || e3.device === t2), a2 = (e3) => {
      var _a2;
      return ((_a2 = i2.find((t3) => {
        var _a3, _b, _c, _d;
        return t3.button === e3 && !((_a3 = t3.modifiers) == null ? void 0 : _a3.shift) && !((_b = t3.modifiers) == null ? void 0 : _b.ctrl) && !((_c = t3.modifiers) == null ? void 0 : _c.meta) && !((_d = t3.modifiers) == null ? void 0 : _d.alt);
      })) == null ? void 0 : _a2.action) ?? `none`;
    };
    return {
      LEFT: r2(a2(`left`)),
      MIDDLE: r2(a2(`middle`)),
      RIGHT: r2(a2(`right`))
    };
  }
  var Mi = 0.8;
  function Ni(e2) {
    return Math.max(9, Be(e2) + 2);
  }
  function Pi(e2, t2) {
    if (t2 < 2) return Mi;
    let n2 = e2 === `BCu` ? t2 - 1 : e2 === `FCu` ? 0 : Be(e2);
    return Mi - 2 * Mi * n2 / (t2 - 1);
  }
  var Fi = {
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
  function Ii(e2, t2 = 0, n2) {
    return (Ue(e2) ? Pi(e2, n2 ?? Ni(e2)) : Fi[e2] ?? 0) * (1 + t2 * 4);
  }
  function Li(e2, t2, n2 = 0, r2) {
    return t2 / 2 + Ii(e2, n2, r2);
  }
  new V(), new V(), new F();
  function Ri(e2, t2, n2) {
    let r2 = e2.x, i2 = e2.y;
    return n2 && t2 > 0 && (r2 = Math.round(r2 / t2) * t2, i2 = Math.round(i2 / t2) * t2), {
      x: r2,
      y: i2
    };
  }
  function zi(e2, t2) {
    return He(e2, t2).color;
  }
  function Bi(e2, t2) {
    return He(e2, t2).visible;
  }
  var Vi = 120, Hi = new N(`#3b82f6`), Ui = /* @__PURE__ */ new Set([
    `component`,
    `silkscreen`
  ]), Wi = /* @__PURE__ */ new Set([
    `laminate`,
    `substrate`,
    `mask`
  ]);
  function Gi(e2, t2, n2) {
    if (!e2 || t2 <= 0) return 0;
    let r2 = e2;
    return Ii(r2, t2, n2) - Ii(r2, 0, n2);
  }
  function Ki(e2, t2, n2) {
    var _a2, _b;
    switch (n2.type) {
      case `trace`:
        return e2.kind === `trace` && e2.index === n2.idx;
      case `via`:
        return e2.kind === `via` && e2.index === n2.idx;
      case `pad`: {
        if (e2.kind !== `pad` || e2.footprint === void 0) return false;
        let r2 = t2.footprints[e2.footprint];
        return (r2 == null ? void 0 : r2.ref) === n2.fpRef && ((_a2 = r2 == null ? void 0 : r2.pads[e2.index]) == null ? void 0 : _a2.number) === n2.padNum;
      }
      case `footprint`:
      case `component`:
        return e2.kind === `pad` && e2.footprint !== void 0 && ((_b = t2.footprints[e2.footprint]) == null ? void 0 : _b.ref) === n2.ref;
      default:
        return false;
    }
  }
  function qi({ pcb: e2, layers: t2, activeNet: n2, hoveredNet: r2, selection: a2, explosion: o2, showBoard: s2 }) {
    let { invalidate: c2 } = i(), [l2, u2] = (0, Z.useState)([]), d2 = (0, Z.useRef)(0), f2 = (0, Z.useMemo)(() => Ve(e2).length, [
      e2
    ]);
    (0, Z.useEffect)(() => {
      let t3 = ++d2.current, n3 = setTimeout(() => {
        rt(e2).then((e3) => {
          d2.current === t3 && (u2(e3), c2());
        }).catch((e3) => console.error(`[PcbKernelBoard] preview meshes failed:`, e3));
      }, Vi);
      return () => clearTimeout(n3);
    }, [
      e2,
      c2
    ]);
    let p2 = (0, Z.useMemo)(() => l2.filter((e3) => !Ui.has(e3.role)).map((e3, t3) => {
      var _a2, _b, _c;
      let n3 = new M();
      n3.setAttribute(`position`, new z(e3.positions, 3)), e3.normals.length === e3.positions.length ? n3.setAttribute(`normal`, new z(e3.normals, 3)) : n3.computeVertexNormals(), n3.setIndex(e3.indices);
      let r3 = e3.alpha ?? 1, i2 = new ie({
        color: new N(e3.color[0], e3.color[1], e3.color[2]),
        metalness: e3.metalness,
        roughness: e3.roughness,
        envMapIntensity: 0.5,
        clearcoat: e3.clearcoat ?? 0,
        clearcoatRoughness: e3.clearcoat_roughness ?? 0,
        ...r3 < 1 ? {
          transparent: true,
          opacity: r3,
          depthWrite: false,
          side: 2
        } : {},
        ...(((_a2 = e3.emissive) == null ? void 0 : _a2[0]) ?? 0) > 0 || (((_b = e3.emissive) == null ? void 0 : _b[1]) ?? 0) > 0 || (((_c = e3.emissive) == null ? void 0 : _c[2]) ?? 0) > 0 ? {
          emissive: new N(e3.emissive[0], e3.emissive[1], e3.emissive[2]),
          emissiveIntensity: 1
        } : {}
      });
      return {
        key: `${e3.role}-${e3.layer ?? `all`}-${t3}`,
        role: e3.role,
        layer: e3.layer,
        geometry: n3,
        material: i2,
        entities: e3.entities ?? []
      };
    }), [
      l2
    ]);
    (0, Z.useEffect)(() => () => p2.forEach((e3) => {
      e3.geometry.dispose(), e3.material.dispose();
    }), [
      p2
    ]);
    let m2 = (0, Z.useMemo)(() => {
      let t3 = [];
      for (let i2 of p2) {
        if (i2.entities.length === 0) continue;
        let o3 = i2.entities.filter((t4) => n2 != null && t4.net === n2 || r2 != null && t4.net === r2 || Ki(t4, e2, a2));
        if (o3.length === 0) continue;
        let s3 = i2.geometry.getIndex(), c3 = 0;
        for (let e3 of o3) c3 += e3.count;
        let l3 = new Uint32Array(c3), u3 = 0;
        for (let e3 of o3) for (let t4 = 0; t4 < e3.count; t4++) l3[u3++] = s3.getX(e3.start + t4);
        let d3 = new M();
        d3.setAttribute(`position`, i2.geometry.getAttribute(`position`));
        let f3 = i2.geometry.getAttribute(`normal`);
        f3 && d3.setAttribute(`normal`, f3), d3.setIndex(new j(l3, 1)), t3.push({
          key: `hl-${i2.key}`,
          geometry: d3
        });
      }
      return t3;
    }, [
      p2,
      e2,
      n2,
      r2,
      a2
    ]);
    (0, Z.useEffect)(() => () => m2.forEach((e3) => e3.geometry.dispose()), [
      m2
    ]);
    let h2 = (0, Z.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Map();
      for (let t3 of p2) e3.set(`hl-${t3.key}`, Gi(t3.layer, o2, f2));
      return e3;
    }, [
      p2,
      o2,
      f2
    ]);
    return (0, Q.jsxs)(`group`, {
      children: [
        p2.map((e3) => Wi.has(e3.role) && !s2 || e3.layer && !Bi(t2, e3.layer) ? null : (0, Q.jsx)(`mesh`, {
          geometry: e3.geometry,
          material: e3.material,
          position: [
            0,
            0,
            Gi(e3.layer, o2, f2)
          ],
          renderOrder: +(e3.role === `mask`)
        }, e3.key)),
        m2.map((e3) => (0, Q.jsx)(`mesh`, {
          geometry: e3.geometry,
          position: [
            0,
            0,
            h2.get(e3.key) ?? 0
          ],
          renderOrder: 2,
          children: (0, Q.jsx)(`meshStandardMaterial`, {
            color: Hi,
            emissive: Hi,
            emissiveIntensity: 0.55,
            roughness: 0.35,
            metalness: 0.2,
            polygonOffset: true,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -2
          })
        }, e3.key))
      ]
    });
  }
  function Ji(e2, t2, n2, r2, i2, a2) {
    let o2 = Li(e2.layer, i2, a2), s2 = Math.cos(r2), c2 = Math.sin(r2), l2 = (e3, r3) => {
      let i3 = e3 * s2 - r3 * c2 + t2, a3 = e3 * c2 + r3 * s2 + n2;
      return new V(i3, a3, o2);
    };
    switch (e2.type) {
      case `Line`:
        return {
          points: [
            l2(e2.start.x, e2.start.y),
            l2(e2.end.x, e2.end.y)
          ],
          color: `#FFEB3B`,
          layer: e2.layer
        };
      case `Rect`: {
        let t3 = l2(e2.start.x, e2.start.y);
        return {
          points: [
            t3,
            l2(e2.end.x, e2.start.y),
            l2(e2.end.x, e2.end.y),
            l2(e2.start.x, e2.end.y),
            t3
          ],
          color: `#FFEB3B`,
          layer: e2.layer
        };
      }
      case `Circle`: {
        let t3 = [];
        for (let n3 = 0; n3 <= 24; n3++) {
          let r3 = n3 / 24 * Math.PI * 2, i3 = e2.center.x + Math.cos(r3) * e2.radius, a3 = e2.center.y + Math.sin(r3) * e2.radius;
          t3.push(l2(i3, a3));
        }
        return {
          points: t3,
          color: `#FFEB3B`,
          layer: e2.layer
        };
      }
      case `Polygon`: {
        let t3 = e2.vertices.map((e3) => l2(e3.x, e3.y));
        return t3.length > 0 && t3.push(t3[0]), {
          points: t3,
          color: `#FFEB3B`,
          layer: e2.layer
        };
      }
      default:
        return null;
    }
  }
  function Yi({ footprint: e2, layers: t2, boardThickness: n2, highlight: r2, explosion: i2, interfering: a2 }) {
    let o2 = (e2.rotation ?? 0) * Math.PI / 180, s2 = (0, Z.useMemo)(() => e2.graphics ? e2.graphics.map((t3) => Ji(t3, e2.position.x, e2.position.y, o2, n2, i2)).filter((e3) => e3 !== null && Bi(t2, e3.layer)) : [], [
      e2,
      t2,
      n2,
      o2,
      i2
    ]), l2 = Li(e2.front === false ? `BSilkS` : `FSilkS`, n2, i2);
    return (0, Q.jsxs)(`group`, {
      children: [
        s2.map((e3, n3) => (0, Q.jsxs)(`line`, {
          children: [
            (0, Q.jsx)(`bufferGeometry`, {
              children: (0, Q.jsx)(`bufferAttribute`, {
                attach: `attributes-position`,
                args: [
                  new Float32Array(e3.points.flatMap((e4) => [
                    e4.x,
                    e4.y,
                    e4.z
                  ])),
                  3
                ]
              })
            }),
            (0, Q.jsx)(`lineBasicMaterial`, {
              color: a2 ? `#ef4444` : r2 ? `#3b82f6` : zi(t2, e3.layer),
              linewidth: 1
            })
          ]
        }, n3)),
        (0, Q.jsx)(c, {
          position: [
            e2.position.x,
            e2.position.y,
            l2 + 0.05
          ],
          rotation: [
            0,
            0,
            o2
          ],
          fontSize: 0.8,
          color: a2 ? `#ef4444` : r2 ? `#3b82f6` : `#FFEB3B`,
          anchorX: `center`,
          anchorY: `middle`,
          outlineWidth: 0.05,
          outlineColor: `#000000`,
          children: e2.ref
        })
      ]
    });
  }
  var Xi = new N(`#ef4444`), Zi = new N(0, 0, 0);
  function Qi() {
    let e2 = X((e3) => e3.componentBodies), t2 = X((e3) => e3.showComponentBodies), n2 = X((e3) => e3.interferingFootprints), r2 = (0, Z.useMemo)(() => new Set(n2), [
      n2
    ]), i2 = (0, Z.useMemo)(() => e2.map((e3, t3) => {
      let n3 = new M();
      n3.setAttribute(`position`, new z(e3.positions, 3)), e3.normals.length === e3.positions.length && n3.setAttribute(`normal`, new z(e3.normals, 3)), n3.setIndex(e3.indices), e3.normals.length !== e3.positions.length && n3.computeVertexNormals();
      let r3 = e3.emissive ?? [
        0,
        0,
        0
      ];
      return {
        key: `body-${t3}`,
        geo: n3,
        ref: e3.footprint_ref,
        color: new N(e3.color[0], e3.color[1], e3.color[2]),
        metalness: e3.metalness,
        roughness: e3.roughness ?? 0.45,
        emissive: new N(r3[0], r3[1], r3[2]),
        emissiveOn: r3[0] > 0 || r3[1] > 0 || r3[2] > 0
      };
    }), [
      e2
    ]);
    return (0, Z.useEffect)(() => () => i2.forEach((e3) => e3.geo.dispose()), [
      i2
    ]), !t2 || i2.length === 0 ? null : (0, Q.jsx)(`group`, {
      children: i2.map((e3) => {
        let t3 = r2.has(e3.ref);
        return (0, Q.jsx)(`mesh`, {
          geometry: e3.geo,
          castShadow: true,
          receiveShadow: true,
          children: (0, Q.jsx)(`meshStandardMaterial`, {
            color: t3 ? Xi : e3.color,
            metalness: t3 ? 0.1 : e3.metalness,
            roughness: t3 ? 0.45 : e3.roughness,
            emissive: t3 ? Xi : e3.emissiveOn ? e3.emissive : Zi,
            emissiveIntensity: t3 ? 0.45 : e3.emissiveOn ? 2.5 : 0
          })
        }, e3.key);
      })
    });
  }
  var $i = `#3b82f6`, ea = `#555555`;
  function ta({ pcb: e2, netlist: t2, activeNet: n2, hoveredNet: r2, boardThickness: i2, explosion: a2, onStartRoute: o2, onHoverNet: s2 }) {
    let [c2, l2] = (0, Z.useState)([]);
    (0, Z.useEffect)(() => {
      if (!t2) {
        l2([]);
        return;
      }
      let n3 = false;
      return tt(e2, t2).then((e3) => {
        n3 || l2(e3);
      }), () => {
        n3 = true;
      };
    }, [
      e2,
      t2
    ]);
    let u2 = Li(`FCu`, i2, a2) + 0.1;
    return c2.length === 0 ? null : (0, Q.jsx)(`group`, {
      children: c2.map((e3, t3) => {
        let i3 = e3.net === n2 || e3.net === r2 ? $i : ea, a3 = new Float32Array([
          e3.from.x,
          e3.from.y,
          u2,
          e3.to.x,
          e3.to.y,
          u2
        ]);
        return (0, Q.jsxs)(`line`, {
          onClick: (t4) => {
            t4.stopPropagation(), o2(e3.fp_ref, e3.pad_num, e3.net);
          },
          onPointerEnter: () => s2(e3.net),
          onPointerLeave: () => s2(null),
          children: [
            (0, Q.jsx)(`bufferGeometry`, {
              children: (0, Q.jsx)(`bufferAttribute`, {
                attach: `attributes-position`,
                args: [
                  a3,
                  3
                ]
              })
            }),
            (0, Q.jsx)(`lineDashedMaterial`, {
              color: i3,
              dashSize: 0.5,
              gapSize: 0.5,
              linewidth: 1
            })
          ]
        }, t3);
      })
    });
  }
  var na = `#3b82f6`;
  function ra({ pcb: e2, routeStartPad: t2, routePreview: n2, boardThickness: r2, activeLayer: i2, explosion: a2 }) {
    if (!t2 || n2.length === 0) return null;
    let o2 = e2.footprints.find((e3) => e3.ref === t2.fpRef), s2 = o2 == null ? void 0 : o2.pads.find((e3) => e3.number === t2.padNum);
    if (!o2 || !s2) return null;
    let c2 = {
      x: o2.position.x + s2.position.x,
      y: o2.position.y + s2.position.y
    }, l2 = n2[n2.length - 1], u2 = Li(i2, r2, a2, Ve(e2).length) + 0.02, d2 = e2.rules.defaultRules.traceWidth, f2 = e2.rules.defaultRules.clearance, p2 = l2.x - c2.x, m2 = l2.y - c2.y, h2 = Math.sqrt(p2 * p2 + m2 * m2);
    if (h2 < 0.01) return null;
    let g2 = Math.atan2(m2, p2), _2 = (c2.x + l2.x) / 2, v2 = (c2.y + l2.y) / 2;
    return (0, Q.jsxs)(`group`, {
      children: [
        (0, Q.jsxs)(`mesh`, {
          position: [
            _2,
            v2,
            u2 - 0.01
          ],
          rotation: [
            0,
            0,
            g2
          ],
          children: [
            (0, Q.jsx)(`boxGeometry`, {
              args: [
                h2,
                d2 + f2 * 2,
                0.02
              ]
            }),
            (0, Q.jsx)(`meshBasicMaterial`, {
              color: na,
              transparent: true,
              opacity: 0.15
            })
          ]
        }),
        (0, Q.jsxs)(`mesh`, {
          position: [
            _2,
            v2,
            u2
          ],
          rotation: [
            0,
            0,
            g2
          ],
          children: [
            (0, Q.jsx)(`boxGeometry`, {
              args: [
                h2,
                d2,
                0.035
              ]
            }),
            (0, Q.jsx)(`meshBasicMaterial`, {
              color: na,
              transparent: true,
              opacity: 0.7
            })
          ]
        })
      ]
    });
  }
  function ia({ violation: e2, z: t2 }) {
    let n2 = (0, Z.useRef)(null);
    r(({ clock: e3 }) => {
      if (!n2.current) return;
      let t3 = e3.getElapsedTime(), r2 = 0.6 + 0.4 * Math.sin(t3 * 3);
      n2.current.scale.set(r2, r2, 1);
    });
    let i2 = e2.severity === `Error` ? `#ef4444` : `#f59e0b`;
    return (0, Q.jsxs)(`mesh`, {
      ref: n2,
      position: [
        e2.position.x,
        e2.position.y,
        t2
      ],
      children: [
        (0, Q.jsx)(`ringGeometry`, {
          args: [
            0.6,
            0.8,
            24
          ]
        }),
        (0, Q.jsx)(`meshBasicMaterial`, {
          color: i2,
          transparent: true,
          opacity: 0.8,
          side: 2
        })
      ]
    });
  }
  function aa({ violations: e2, boardThickness: t2, explosion: n2 }) {
    if (e2.length === 0) return null;
    let r2 = Li(`FCu`, t2, n2) + 0.15;
    return (0, Q.jsx)(`group`, {
      children: e2.map((e3, t3) => (0, Q.jsx)(ia, {
        violation: e3,
        z: r2
      }, t3))
    });
  }
  var oa = {
    coincident: `\u2316`,
    concentric: `\u25CE`,
    horizontal: `\u2014`,
    vertical: `|`,
    parallel: `\u2225`,
    perpendicular: `\u22A5`,
    equalLength: `=`,
    fixed: `\u2693`,
    symmetric: `\u22C8`,
    pointOnEdge: `\u2310`
  };
  function sa(e2, t2, n2) {
    if (Number(n2.node) !== t2) return null;
    if (n2.kind === `pcbFootprint`) {
      let t3 = e2.footprints.find((e3) => e3.ref === n2.ref);
      if (!t3) return null;
      if (n2.pad) {
        let e3 = t3.pads.find((e4) => e4.number === n2.pad);
        if (!e3) return null;
        let r2 = (t3.rotation ?? 0) * Math.PI / 180;
        return {
          x: t3.position.x + e3.position.x * Math.cos(r2) - e3.position.y * Math.sin(r2),
          y: t3.position.y + e3.position.x * Math.sin(r2) + e3.position.y * Math.cos(r2)
        };
      }
      return {
        x: t3.position.x,
        y: t3.position.y
      };
    }
    if (n2.kind === `pcbOutlineVertex`) {
      let t3 = e2.outline.vertices[n2.index];
      return t3 ? {
        x: t3.x,
        y: t3.y
      } : null;
    }
    if (n2.kind === `pcbOutlineEdge`) {
      let t3 = e2.outline.vertices.length, r2 = e2.outline.vertices[n2.index], i2 = e2.outline.vertices[(n2.index + 1) % t3];
      return r2 && i2 ? {
        x: (r2.x + i2.x) / 2,
        y: (r2.y + i2.y) / 2
      } : null;
    }
    return null;
  }
  function ca(e2) {
    return Object.values(e2).filter((e3) => typeof e3 == `object` && !!e3 && `kind` in e3);
  }
  function la(e2) {
    return {
      pointerEvents: `none`,
      fontSize: `10px`,
      fontFamily: `JetBrains Mono, monospace`,
      whiteSpace: `nowrap`,
      color: e2 ? `var(--text-muted, #9ca3af)` : `var(--text, #e5e7eb)`,
      fontStyle: e2 ? `italic` : `normal`,
      background: `rgba(0,0,0,0.55)`,
      padding: `1px 4px`,
      borderRadius: `3px`
    };
  }
  function ua({ pcb: e2, nodeId: t2, constraints: n2, pickedTargets: r2, boardThickness: i2, explosion: a2 }) {
    let o2 = Li(`FCu`, i2, a2) + 0.12, s2 = (0, Z.useMemo)(() => n2.map((n3) => {
      let r3 = ca(n3.kind).map((n4) => sa(e2, t2, n4)).filter((e3) => e3 !== null);
      if (r3.length === 0) return null;
      let i3 = {
        x: r3.reduce((e3, t3) => e3 + t3.x, 0) / r3.length,
        y: r3.reduce((e3, t3) => e3 + t3.y, 0) / r3.length
      };
      return {
        c: n3,
        type: n3.kind.type,
        value: n3.kind.value,
        points: r3,
        mid: i3
      };
    }).filter((e3) => e3 !== null), [
      n2,
      e2,
      t2
    ]), c2 = (0, Z.useMemo)(() => r2.map((t3) => {
      var _a2;
      return t3.kind === `footprint` ? (_a2 = e2.footprints.find((e3) => e3.ref === t3.ref)) == null ? void 0 : _a2.position : e2.outline.vertices[t3.idx];
    }).filter((e3) => e3 != null), [
      r2,
      e2
    ]);
    return s2.length === 0 && c2.length === 0 ? null : (0, Q.jsxs)(`group`, {
      children: [
        s2.map(({ c: e3, type: t3, value: n3, points: r3, mid: i3 }) => {
          let a3 = n3 !== void 0, s3 = e3.driven === true;
          return (0, Q.jsxs)(`group`, {
            children: [
              a3 && r3.length === 2 && (0, Q.jsx)(h, {
                points: [
                  [
                    r3[0].x,
                    r3[0].y,
                    o2
                  ],
                  [
                    r3[1].x,
                    r3[1].y,
                    o2
                  ]
                ],
                color: s3 ? `#9ca3af` : `#e5e7eb`,
                lineWidth: 1,
                dashed: s3,
                dashSize: 0.5,
                gapSize: 0.35,
                transparent: true,
                opacity: 0.75
              }),
              (0, Q.jsx)(f, {
                position: [
                  i3.x,
                  i3.y,
                  o2
                ],
                center: true,
                zIndexRange: [
                  20,
                  0
                ],
                children: (0, Q.jsx)(`div`, {
                  style: la(s3),
                  children: a3 ? `${typeof n3 == `number` ? n3.toFixed(2) : String(n3)}${t3 === `angle` || t3 === `rotation` ? `\xB0` : ``}${s3 ? ` (ref)` : ``}` : oa[t3] ?? t3
                })
              })
            ]
          }, e3.id);
        }),
        c2.map((e3, t3) => (0, Q.jsxs)(`mesh`, {
          position: [
            e3.x,
            e3.y,
            o2 + 0.02
          ],
          children: [
            (0, Q.jsx)(`ringGeometry`, {
              args: [
                1,
                1.25,
                24
              ]
            }),
            (0, Q.jsx)(`meshBasicMaterial`, {
              color: `#f97316`,
              transparent: true,
              opacity: 0.9
            })
          ]
        }, `pick-${t3}`))
      ]
    });
  }
  function da({ showBoard: e2 = true } = {}) {
    let { invalidate: t2 } = i(), n2 = (0, Z.useRef)(null), r2 = (0, Z.useRef)(null), o2 = ke((e3) => e3.activeBoardNodeId), s2 = U((e3) => e3.document), c2 = o2 == null ? null : De(s2, o2), l2 = X((e3) => e3.selection), d2 = X((e3) => e3.hoveredNet), f2 = X((e3) => e3.netlist), p2 = gt(), m2 = X((e3) => e3.pcbGridSize), h2 = X((e3) => e3.pcbSnapToGrid), g2 = X((e3) => e3.pcbActiveLayer), _2 = X((e3) => e3.drcViolations), v2 = X((e3) => e3.routeActive), y2 = X((e3) => e3.routePreview), b2 = X((e3) => e3.routeStartPad), x2 = X((e3) => e3.pcbTool), S2 = X((e3) => e3.pcbDragging), C2 = X((e3) => e3.stackupExplosion), w2 = X((e3) => e3.interferingFootprints), T2 = X((e3) => e3.select), E2 = X((e3) => e3.setHoveredNet), ee2 = X((e3) => e3.startRouteFromRatsnest), D2 = X((e3) => e3.updateRoutePreview), O2 = X((e3) => e3.startPcbDrag), k2 = X((e3) => e3.cancelPcbDrag), te2 = X((e3) => e3.pcbConstraintTargets), ne2 = X((e3) => e3.pushConstraintTarget), A2 = X((e3) => e3.setPcbSolveStatus), j2 = U((e3) => e3.solveDesignConstraints), re2 = U((e3) => e3.document.constraints), ie2 = U((e3) => e3.moveFootprint), M2 = U((e3) => e3.removeTrace), N2 = U((e3) => e3.removeVia), P2 = (0, Z.useMemo)(() => l2.type === `net` ? l2.netId : l2.type === `trace` || l2.type === `via` || l2.type === `pad` ? l2.net : null, [
      l2
    ]), F2 = (0, Z.useMemo)(() => l2.type === `footprint` || l2.type === `component` ? l2.ref : null, [
      l2
    ]), ae2 = (0, Z.useRef)(null), oe2 = (0, Z.useCallback)((e3) => {
      if (!c2 || e3.button !== 0) return;
      e3.stopPropagation();
      let t3 = e3.point, n3 = Ri(r2.current ? r2.current.worldToLocal(t3.clone()) : t3, m2, h2);
      if (x2 === `move`) for (let e4 = c2.footprints.length - 1; e4 >= 0; e4--) {
        let t4 = c2.footprints[e4];
        if (n3.x >= t4.position.x - 5 && n3.x <= t4.position.x + 5 && n3.y >= t4.position.y - 5 && n3.y <= t4.position.y + 5) {
          O2(e4, t4.position), ae2.current = {
            fpIdx: e4,
            startWorld: n3
          };
          return;
        }
      }
      if (x2 === `constrain`) {
        for (let e4 = c2.footprints.length - 1; e4 >= 0; e4--) {
          let t4 = c2.footprints[e4];
          if (n3.x >= t4.position.x - 5 && n3.x <= t4.position.x + 5 && n3.y >= t4.position.y - 5 && n3.y <= t4.position.y + 5) {
            ne2({
              kind: `footprint`,
              ref: t4.ref
            });
            return;
          }
        }
        for (let e4 = 0; e4 < c2.outline.vertices.length; e4++) {
          let t4 = c2.outline.vertices[e4];
          if (Math.hypot(n3.x - t4.x, n3.y - t4.y) < 1.5) {
            ne2({
              kind: `outlineVertex`,
              idx: e4
            });
            return;
          }
        }
      } else {
        if (x2 === `select`) {
          for (let e4 = c2.footprints.length - 1; e4 >= 0; e4--) {
            let t4 = c2.footprints[e4];
            for (let e5 of t4.pads) {
              let r3 = t4.position.x + e5.position.x, i2 = t4.position.y + e5.position.y;
              if (Math.sqrt((n3.x - r3) ** 2 + (n3.y - i2) ** 2) < 1.5) {
                T2({
                  type: `pad`,
                  fpRef: t4.ref,
                  padNum: e5.number,
                  net: e5.net ?? ``
                });
                return;
              }
            }
            if (n3.x >= t4.position.x - 5 && n3.x <= t4.position.x + 5 && n3.y >= t4.position.y - 5 && n3.y <= t4.position.y + 5) {
              T2({
                type: `footprint`,
                ref: t4.ref
              });
              return;
            }
          }
          for (let e4 = 0; e4 < c2.traces.length; e4++) {
            let t4 = c2.traces[e4], r3 = t4.end.x - t4.start.x, i2 = t4.end.y - t4.start.y, a2 = r3 * r3 + i2 * i2;
            if (a2 < 1e-6) continue;
            let o3 = ((n3.x - t4.start.x) * r3 + (n3.y - t4.start.y) * i2) / a2;
            o3 = Math.max(0, Math.min(1, o3));
            let s3 = t4.start.x + o3 * r3, l3 = t4.start.y + o3 * i2;
            if (Math.sqrt((n3.x - s3) ** 2 + (n3.y - l3) ** 2) < t4.width / 2 + 0.5) {
              T2({
                type: `trace`,
                idx: e4,
                net: t4.net
              });
              return;
            }
          }
          for (let e4 = 0; e4 < c2.vias.length; e4++) {
            let t4 = c2.vias[e4];
            if (Math.sqrt((n3.x - t4.position.x) ** 2 + (n3.y - t4.position.y) ** 2) < t4.diameter / 2 + 0.3) {
              T2({
                type: `via`,
                idx: e4,
                net: t4.net
              });
              return;
            }
          }
          T2({
            type: `none`
          });
        }
        if (x2 === `delete`) {
          for (let e4 = 0; e4 < c2.traces.length; e4++) {
            let t4 = c2.traces[e4], r3 = t4.end.x - t4.start.x, i2 = t4.end.y - t4.start.y, a2 = r3 * r3 + i2 * i2;
            if (a2 < 1e-6) continue;
            let s3 = ((n3.x - t4.start.x) * r3 + (n3.y - t4.start.y) * i2) / a2;
            s3 = Math.max(0, Math.min(1, s3));
            let l3 = t4.start.x + s3 * r3, u2 = t4.start.y + s3 * i2;
            if (Math.sqrt((n3.x - l3) ** 2 + (n3.y - u2) ** 2) < t4.width / 2 + 0.5 && o2 != null) {
              M2(o2, e4);
              return;
            }
          }
          for (let e4 = 0; e4 < c2.vias.length; e4++) {
            let t4 = c2.vias[e4];
            if (Math.sqrt((n3.x - t4.position.x) ** 2 + (n3.y - t4.position.y) ** 2) < t4.diameter / 2 + 0.3 && o2 != null) {
              N2(o2, e4);
              return;
            }
          }
        }
        if (x2 === `route`) for (let e4 of c2.footprints) for (let t4 of e4.pads) {
          let r3 = e4.position.x + t4.position.x, i2 = e4.position.y + t4.position.y;
          if (Math.sqrt((n3.x - r3) ** 2 + (n3.y - i2) ** 2) < 1.5) {
            X.getState().startRoute(e4.ref, t4.number, t4.net ?? ``);
            return;
          }
        }
      }
    }, [
      c2,
      x2,
      m2,
      h2,
      o2,
      T2,
      O2,
      M2,
      N2
    ]), se2 = (0, Z.useCallback)((e3) => {
      if (!c2) return;
      let n3 = e3.point, i2 = Ri(r2.current ? r2.current.worldToLocal(n3.clone()) : n3, m2, h2);
      S2 && o2 != null ? (ie2(o2, S2.fpIdx, {
        x: i2.x,
        y: i2.y,
        z: 0
      }), t2()) : v2 && (D2([
        i2
      ]), t2());
    }, [
      c2,
      S2,
      v2,
      m2,
      h2,
      o2,
      ie2,
      D2,
      t2
    ]), I2 = (0, Z.useCallback)(() => {
      if (S2) {
        if (o2 != null && ((re2 == null ? void 0 : re2.length) ?? 0) > 0 && c2) {
          let e3 = c2.footprints[S2.fpIdx];
          if (e3) {
            let t3 = j2({
              extraFixed: [
                {
                  node: Number(o2),
                  ref: e3.ref
                }
              ]
            });
            if (t3) {
              let e4 = t3.groups.reduce((e5, t4) => e5 + t4.dof, 0);
              A2({
                converged: t3.converged,
                dof: e4,
                overConstrained: t3.groups.some((e5) => e5.dof < 0)
              });
            }
          }
        }
        k2();
      }
    }, [
      S2,
      k2,
      o2,
      re2,
      c2,
      j2,
      A2
    ]);
    if (!c2) return null;
    let L2 = c2.outline.thickness, ce2 = 1 / 0, R2 = -1 / 0, z2 = 1 / 0, le2 = -1 / 0;
    for (let e3 of c2.outline.vertices) e3.x < ce2 && (ce2 = e3.x), e3.x > R2 && (R2 = e3.x), e3.y < z2 && (z2 = e3.y), e3.y > le2 && (le2 = e3.y);
    let ue2 = isFinite(ce2) ? (ce2 + R2) / 2 : 0, de2 = isFinite(z2) ? (z2 + le2) / 2 : 0, fe2 = Li(`FCu`, L2);
    return (0, Q.jsxs)(`group`, {
      ref: r2,
      children: [
        (0, Q.jsx)(a, {
          position: [
            ue2,
            de2,
            fe2 - 0.05
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
          cellSize: m2,
          cellColor: `#333333`,
          sectionSize: m2 * 10,
          sectionColor: `#444444`,
          fadeDistance: 100,
          infiniteGrid: true
        }),
        (0, Q.jsx)(u, {
          ref: n2,
          args: [
            500,
            500
          ],
          position: [
            ue2,
            de2,
            fe2
          ],
          visible: false,
          onPointerDown: oe2,
          onPointerMove: se2,
          onPointerUp: I2
        }),
        (0, Q.jsx)(qi, {
          pcb: c2,
          layers: p2,
          activeNet: P2,
          hoveredNet: d2,
          selection: l2,
          explosion: C2,
          showBoard: e2
        }),
        c2.footprints.map((e3, t3) => (0, Q.jsx)(Yi, {
          footprint: e3,
          layers: p2,
          boardThickness: L2,
          highlight: F2 === e3.ref,
          interfering: w2.includes(e3.ref),
          explosion: C2
        }, `fp-${t3}`)),
        (0, Q.jsx)(Qi, {}),
        (0, Q.jsx)(ta, {
          pcb: c2,
          netlist: f2,
          activeNet: P2,
          hoveredNet: d2,
          boardThickness: L2,
          explosion: C2,
          onStartRoute: ee2,
          onHoverNet: E2
        }),
        v2 && (0, Q.jsx)(ra, {
          pcb: c2,
          routeStartPad: b2,
          routePreview: y2,
          boardThickness: L2,
          activeLayer: g2,
          explosion: C2
        }),
        o2 != null && (0, Q.jsx)(ua, {
          pcb: c2,
          nodeId: Number(o2),
          constraints: re2 ?? [],
          pickedTargets: te2,
          boardThickness: L2,
          explosion: C2
        }),
        (0, Q.jsx)(aa, {
          violations: _2,
          boardThickness: L2,
          explosion: C2
        })
      ]
    });
  }
  function fa({ pcb: e2, explosion: t2 }) {
    let n2 = (0, Z.useMemo)(() => {
      let t3 = e2.outline.vertices;
      if (t3.length < 3) return null;
      let n3 = new pe();
      n3.moveTo(t3[0].x, t3[0].y);
      for (let e3 = 1; e3 < t3.length; e3++) n3.lineTo(t3[e3].x, t3[e3].y);
      if (n3.closePath(), e2.outline.cutouts) for (let t4 of e2.outline.cutouts) {
        if (t4.length < 3) continue;
        let e3 = new te();
        e3.moveTo(t4[0].x, t4[0].y);
        for (let n4 = 1; n4 < t4.length; n4++) e3.lineTo(t4[n4].x, t4[n4].y);
        e3.closePath(), n3.holes.push(e3);
      }
      return n3;
    }, [
      e2.outline
    ]), r2 = e2.outline.thickness, i2 = (0, Z.useMemo)(() => Ve(e2), [
      e2
    ]), a2 = (0, Z.useMemo)(() => i2.slice(1).map((e3, t3) => ({
      name: `Dielectric ${t3 + 1}`,
      top: i2[t3],
      bottom: e3
    })), [
      i2
    ]), o2 = (0, Z.useMemo)(() => n2 ? new B(n2, {
      depth: r2,
      bevelEnabled: false
    }) : null, [
      n2,
      r2
    ]), s2 = (0, Z.useMemo)(() => !n2 || t2 <= 0 ? null : new B(n2, {
      depth: 0.1,
      bevelEnabled: false
    }), [
      n2,
      t2
    ]);
    return o2 ? (0, Q.jsxs)(`group`, {
      children: [
        (0, Q.jsx)(`mesh`, {
          geometry: o2,
          position: [
            0,
            0,
            -r2 / 2
          ],
          children: (0, Q.jsx)(`meshPhysicalMaterial`, {
            color: `#0d5a2d`,
            roughness: 0.5,
            metalness: 0,
            clearcoat: 1,
            clearcoatRoughness: 0.18,
            side: 2
          })
        }),
        t2 > 0 && s2 && a2.map((e3) => {
          let n3 = (Ii(e3.top, t2, i2.length) + Ii(e3.bottom, t2, i2.length)) / 2;
          return (0, Q.jsx)(`mesh`, {
            geometry: s2,
            position: [
              0,
              0,
              n3 - 0.05
            ],
            children: (0, Q.jsx)(`meshStandardMaterial`, {
              color: `#1a7a3a`,
              roughness: 0.9,
              metalness: 0,
              transparent: true,
              opacity: 0.3,
              side: 2
            })
          }, e3.name);
        })
      ]
    }) : null;
  }
  function pa({ excludeNodeId: e2 }) {
    let t2 = U((e3) => e3.document);
    return Re(t2).length > 0 ? null : t2.pcb && e2 == null ? (0, Q.jsx)(fa, {
      pcb: t2.pcb,
      explosion: 0
    }) : null;
  }
  var ma = class extends Z.Component {
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
    componentDidCatch(e2) {
      console.warn(`[viewport] post-processing disabled after EffectComposer error:`, e2 == null ? void 0 : e2.message);
    }
    render() {
      return this.state.failed ? null : this.props.children;
    }
  };
  function ha({ children: e2 }) {
    let t2 = E(), n2 = S((e3) => e3.view), r2 = (0, Z.useMemo)(() => [
      n2.position[0],
      n2.position[1],
      n2.position[2]
    ], [
      n2.position
    ]);
    return t2 ? (0, Q.jsx)(`group`, {
      scale: n2.scale,
      position: r2,
      children: e2
    }) : (0, Q.jsx)(Q.Fragment, {
      children: e2
    });
  }
  function ga() {
    if (typeof window > `u`) return null;
    let e2 = window;
    return e2.SpeechRecognition ?? e2.webkitSpeechRecognition ?? null;
  }
  function _a() {
    return ga() != null;
  }
  function va(e2) {
    var _a2, _b;
    let t2 = ga();
    if (!t2) return (_a2 = e2.onError) == null ? void 0 : _a2.call(e2, `Speech recognition not supported in this browser.`), null;
    let n2 = new t2();
    n2.continuous = true, n2.interimResults = true, n2.lang = e2.lang ?? `en-US`;
    let r2 = false, i2 = ``, a2 = ``;
    n2.onresult = (t3) => {
      var _a3;
      let n3 = ``, r3 = i2;
      for (let e3 = t3.resultIndex; e3 < t3.results.length; e3++) {
        let i3 = t3.results[e3];
        if (!i3) continue;
        let a3 = ((_a3 = i3[0]) == null ? void 0 : _a3.transcript) ?? ``;
        i3.isFinal ? r3 += a3 : n3 += a3;
      }
      i2 = r3, a2 = n3, e2.onTranscript((r3 + n3).trim(), false);
    }, n2.onerror = (t3) => {
      var _a3;
      let n3 = t3.error ?? `unknown`;
      (_a3 = e2.onError) == null ? void 0 : _a3.call(e2, n3);
    }, n2.onend = () => {
      var _a3;
      if (r2) return;
      r2 = true;
      let t3 = (i2 + a2).trim();
      t3 && e2.onTranscript(t3, true), (_a3 = e2.onEnd) == null ? void 0 : _a3.call(e2);
    };
    try {
      n2.start();
    } catch (t3) {
      return (_b = e2.onError) == null ? void 0 : _b.call(e2, t3.message), null;
    }
    return {
      stop() {
        if (!r2) try {
          n2.stop();
        } catch {
        }
      }
    };
  }
  var ya = 0.025, ba = 0.04, xa = 5e-3, Sa = 0.5, Ca = 1e3, wa = 1e-4, Ta = 10;
  function Ea(e2, t2, n2, r2, i2) {
    var _a2;
    let a2 = t2.get(n2);
    if (!a2) return false;
    let o2 = (_a2 = e2.getJointPose) == null ? void 0 : _a2.call(e2, a2, r2);
    if (!o2) return false;
    let s2 = o2.transform.position;
    return i2.set(s2.x, s2.y, s2.z), true;
  }
  var Da = new V(), Oa = new V(), ka = new V();
  function Aa(e2, t2, n2, r2, i2) {
    if (!Ea(e2, t2, `thumb-tip`, n2, Da) || !Ea(e2, t2, `index-finger-tip`, n2, Oa) || !Ea(e2, t2, `wrist`, n2, ka)) return false;
    let a2 = Da.distanceTo(Oa);
    return i2.pinching = r2 ? a2 < ba : a2 < ya, i2.midpoint.copy(Da).add(Oa).multiplyScalar(0.5), i2.reach.copy(i2.midpoint).sub(ka).normalize(), true;
  }
  function ja(e2) {
    var _a2;
    let t2 = e2;
    for (; t2; ) {
      let e3 = (_a2 = t2.userData) == null ? void 0 : _a2.partId;
      if (typeof e3 == `string`) return e3;
      t2 = t2.parent;
    }
    return null;
  }
  var Ma = new me(), Na = new V(), Pa = new V();
  function Fa(e2, t2, n2) {
    Na.copy(t2).addScaledVector(n2, -0.02), Pa.copy(n2), Ma.set(Na, Pa), Ma.far = 0.42000000000000004;
    let r2 = Ma.intersectObject(e2, true);
    for (let e3 of r2) {
      let t3 = ja(e3.object);
      if (t3) return t3;
    }
    return null;
  }
  var Ia = 800, La = new V(), Ra = new V(), za = new V(), Ba = new V();
  function Va() {
    let e2 = E(), { gl: t2, scene: n2 } = i(), a2 = (0, Z.useRef)({
      pinching: false,
      midpoint: new V()
    }), o2 = (0, Z.useRef)({
      pinching: false,
      midpoint: new V()
    }), s2 = (0, Z.useRef)(null), c2 = (0, Z.useRef)({
      pinching: false,
      midpoint: new V(),
      reach: new V()
    }), l2 = (0, Z.useRef)(null), u2 = (0, Z.useRef)(null), d2 = (0, Z.useRef)(``);
    return (0, Z.useEffect)(() => () => {
      var _a2;
      (_a2 = u2.current) == null ? void 0 : _a2.stop(), u2.current = null;
    }, []), r((r2, i2, f2) => {
      if (!e2) return;
      let p2 = f2;
      if (!p2) return;
      let m2 = t2.xr.getSession(), h2 = t2.xr.getReferenceSpace();
      if (!m2 || !h2) return;
      for (let e3 of m2.inputSources) {
        if (!e3.hand) continue;
        let t3 = e3.handedness === `left` ? a2 : o2, r3 = c2.current;
        if (Aa(p2, e3.hand, h2, t3.current.pinching, r3) && (t3.current.pinching = r3.pinching, t3.current.midpoint.copy(r3.midpoint), r3.pinching && s2.current == null)) {
          let e4 = Fa(n2, r3.midpoint, r3.reach);
          e4 && (s2.current = {
            kind: `fillet`,
            partId: e4
          });
        }
      }
      let g2 = a2.current, _2 = o2.current, v2 = g2.pinching && _2.pinching;
      if ((g2.pinching && !_2.pinching || !g2.pinching && _2.pinching) && s2.current == null && _a()) {
        let e3 = performance.now(), t3 = l2.current;
        if (t3 == null) l2.current = {
          startedAt: e3
        };
        else if (u2.current == null && e3 - t3.startedAt >= Ia) {
          d2.current = ``;
          let e4 = va({
            lang: `en-US`,
            onTranscript: (e5, t4) => {
              t4 && (d2.current = e5);
            },
            onEnd: () => {
              let e5 = d2.current.trim();
              if (u2.current = null, d2.current = ``, !e5) return;
              let t4 = Array.from(J.getState().selectedPartIds), n3 = U.getState().parts, r3 = t4.map((e6) => {
                let t5 = n3.find((t6) => t6.id === e6);
                return t5 ? {
                  partId: t5.id,
                  partName: t5.name ?? t5.id,
                  geometryType: `part`
                } : null;
              }).filter((e6) => e6 != null);
              Le.getState().sendMessage(e5, r3, []);
            },
            onError: () => {
              u2.current = null;
            }
          });
          e4 && (u2.current = e4);
        }
      } else if (l2.current && (l2.current = null), u2.current) {
        let e3 = u2.current;
        u2.current = null, e3.stop();
      }
      if (v2 && s2.current == null) {
        La.copy(g2.midpoint), Ra.copy(_2.midpoint);
        let e3 = La.distanceTo(Ra);
        za.copy(La).add(Ra).multiplyScalar(0.5);
        let t3 = S.getState().view, n3 = new V().copy(za).sub(new V(...t3.position)).divideScalar(t3.scale);
        s2.current = {
          kind: `scale`,
          initialAnchor: za.clone(),
          initialDistance: e3,
          initialView: t3,
          sceneAnchor: n3
        };
      }
      let y2 = s2.current;
      if (y2 && y2.kind === `scale` && v2) {
        La.copy(g2.midpoint), Ra.copy(_2.midpoint);
        let e3 = La.distanceTo(Ra);
        za.copy(La).add(Ra).multiplyScalar(0.5);
        let t3 = y2.initialDistance > 1e-6 ? e3 / y2.initialDistance : 1, n3 = y2.initialView.scale * t3;
        n3 < wa && (n3 = wa), n3 > Ta && (n3 = Ta), Ba.copy(y2.sceneAnchor).multiplyScalar(n3).multiplyScalar(-1).add(za), S.getState().setView({
          scale: n3,
          position: [
            Ba.x,
            Ba.y,
            Ba.z
          ]
        });
      } else if (y2 && !(g2.pinching && _2.pinching)) {
        if (y2.kind === `fillet`) {
          let e3 = g2.midpoint.distanceTo(_2.midpoint);
          if (s2.current = null, e3 < xa || e3 > Sa) return;
          let t3 = S.getState().view, n3 = t3.scale > 1e-9 ? 1e-3 / t3.scale : 1, r3 = e3 * Ca * n3;
          U.getState().addFillet(y2.partId, r3);
        } else y2.kind === `scale` && (s2.current = null);
      }
    }), null;
  }
  var Ha = typeof window < `u` && typeof window.matchMedia == `function` && window.matchMedia(`(pointer: coarse)`).matches, Ua = new V(), Wa = new V();
  function Ga() {
    let e2 = J.getState();
    e2.followMode === `lock` && (e2.setFollowMode(`free`), e2.setFollowingParticipant(null));
  }
  var Ka = {
    studio: `studio`,
    warehouse: `warehouse`,
    apartment: `apartment`,
    park: `park`,
    city: `city`,
    dawn: `dawn`,
    night: `night`,
    sunset: `sunset`,
    forest: `forest`,
    neutral: `studio`
  };
  function qa(e2) {
    return {
      environment: {
        type: `None`
      },
      lights: [
        {
          id: `key`,
          kind: {
            type: `Directional`,
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
          intensity: e2 ? 1.4 : 1.2,
          castShadow: true
        },
        {
          id: `fill`,
          kind: {
            type: `Directional`,
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
          intensity: e2 ? 0.5 : 0.4
        },
        {
          id: `rim`,
          kind: {
            type: `Directional`,
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
          intensity: e2 ? 0.35 : 0.2
        }
      ],
      background: {
        type: `Solid`,
        color: [
          0,
          0,
          0
        ]
      },
      postProcessing: e2 ? {
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
  function Ja(e2, t2) {
    let n2 = qa(t2);
    return e2 ? {
      environment: e2.environment ?? n2.environment,
      lights: e2.lights ?? n2.lights,
      background: e2.background ?? n2.background,
      postProcessing: e2.postProcessing ?? n2.postProcessing
    } : n2;
  }
  function Ya(e2, t2 = 100) {
    return [
      -e2.x * t2,
      -e2.y * t2,
      -e2.z * t2
    ];
  }
  function Xa(e2) {
    let t2 = e2;
    return t2.id ?? t2.instanceId ?? t2.partDefId ?? ``;
  }
  var Za = new O(), Qa = new V(), $a = new V(), eo = new V(), to = new V();
  function no(e2, t2, n2) {
    Qa.subVectors(t2, e2).normalize();
    let r2 = new V(0, 1, 0);
    return Math.abs(Qa.dot(r2)) > 0.999 ? $a.crossVectors(new V(0, 0, 1), Qa).normalize() : $a.crossVectors(Qa, r2).normalize(), eo.crossVectors($a, Qa), to.copy(Qa).negate(), Za.makeBasis($a, eo, to), n2.setFromRotationMatrix(Za), n2;
  }
  function ro() {
    let e2 = Yt((e3) => e3.showBoundaryEdges), t2 = Yt((e3) => e3.toggleBoundaryEdges), n2 = H((e3) => e3.scene);
    return (0, Z.useEffect)(() => {
      let e3 = (e4) => {
        e4.ctrlKey && e4.shiftKey && (e4.key === `B` || e4.key === `b`) && (e4.preventDefault(), t2());
      };
      return window.addEventListener(`keydown`, e3), () => window.removeEventListener(`keydown`, e3);
    }, [
      t2
    ]), !e2 || !n2 ? null : (0, Q.jsx)(Q.Fragment, {
      children: n2.parts.map((e3, t3) => e3.mesh.positions.length ? (0, Q.jsx)(Cn, {
        positions: e3.mesh.positions,
        indices: e3.mesh.indices
      }, `boundary-${t3}`) : null)
    });
  }
  function io() {
    let e2 = Yt((e3) => e3.inspectTriangles), t2 = Yt((e3) => e3.toggleInspectTriangles);
    return (0, Z.useEffect)(() => {
      let e3 = (e4) => {
        e4.ctrlKey && e4.shiftKey && (e4.key === `T` || e4.key === `t`) && (e4.preventDefault(), t2());
      };
      return window.addEventListener(`keydown`, e3), () => window.removeEventListener(`keydown`, e3);
    }, [
      t2
    ]), e2 ? (0, Q.jsx)(en, {}) : null;
  }
  function ao({ direction: e2, color: t2, intensity: n2, bounds: r2 }) {
    let i2 = (0, Z.useRef)(null), { center: a2, radius: o2 } = r2, s2 = Math.max(o2, 10);
    return (0, Z.useEffect)(() => {
      let t3 = i2.current;
      if (!t3) return;
      let n3 = new V(e2.x, e2.y, e2.z).normalize();
      t3.position.set(a2[0] - n3.x * s2 * 2.5, a2[1] - n3.y * s2 * 2.5, a2[2] - n3.z * s2 * 2.5), t3.target.position.set(a2[0], a2[1], a2[2]), t3.target.updateMatrixWorld();
      let r3 = t3.shadow.camera;
      r3.left = -s2 * 1.3, r3.right = s2 * 1.3, r3.top = s2 * 1.3, r3.bottom = -s2 * 1.3, r3.near = 0.1, r3.far = s2 * 6, r3.updateProjectionMatrix(), t3.shadow.needsUpdate = true;
    }, [
      e2.x,
      e2.y,
      e2.z,
      a2,
      s2
    ]), (0, Q.jsx)(`directionalLight`, {
      ref: i2,
      intensity: n2,
      color: t2,
      castShadow: true,
      "shadow-mapSize-width": 2048,
      "shadow-mapSize-height": 2048,
      "shadow-bias": -1e-4,
      "shadow-normalBias": 0.02
    });
  }
  function oo({ mode: e2 = `3d`, pcbEditFocus: t2 = false }) {
    var _a2, _b;
    mi(), gi(), _i(), vi(), Di();
    let n2 = e2 === `pcb`, [a2, o2] = (0, Z.useState)(false), s2 = H((e3) => e3.engineReady), c2 = H((e3) => e3.scene), l2 = H((e3) => e3.previewMesh), u2 = U((e3) => e3.parts), f2 = U((e3) => e3.document.instances), h2 = U((e3) => e3.document.partDefs), y2 = U((e3) => e3.document.roots), b2 = U((e3) => e3.document.scene), x2 = U((e3) => e3.document.molecule), S2 = Qe((e3) => e3.molecule), C2 = Qe((e3) => e3.representation), T2 = S2 ?? x2 ?? null, O2 = J((e3) => e3.selectedPartIds), te2 = J((e3) => e3.selection), ne2 = J((e3) => e3.isDraggingGizmo), A2 = J((e3) => e3.setOrbiting), j2 = J((e3) => e3.renderMode), ie2 = J((e3) => e3.raytraceAvailable), M2 = q((e3) => e3.active), P2 = ke((e3) => e3.activeBoardNodeId), ae2 = (0, Z.useMemo)(() => {
      if (!t2 || P2 == null) return null;
      let e3 = Ae(u2, P2);
      return e3 ? W(U.getState().document, e3) : null;
    }, [
      t2,
      P2,
      u2
    ]), oe2 = (0, Z.useMemo)(() => {
      var _a3;
      return !t2 || P2 == null ? null : ((_a3 = Ae(u2, P2)) == null ? void 0 : _a3.id) ?? null;
    }, [
      t2,
      P2,
      u2
    ]), se2 = E(), I2 = (0, Z.useRef)(null), { camera: L2, invalidate: R2 } = i(), { isDark: z2 } = we(), ue2 = dt(), pe2 = ft(ue2), B2 = ut(ue2), { zoomBehavior: he2, orbitMomentum: ge2 } = ue2, be2 = (0, Z.useRef)(new me()), Ee2 = (0, Z.useRef)(new ee()), De2 = (0, Z.useRef)(R2);
    De2.current = R2;
    let Oe2 = (0, Z.useRef)(new de()), G2 = (0, Z.useRef)(new V()), K2 = (0, Z.useRef)({
      theta: 0,
      phi: 0
    }), je2 = (0, Z.useRef)(false), Me2 = (0, Z.useRef)(new V()), Y2 = (0, Z.useRef)(new V()), Ne2 = (0, Z.useRef)(null), Pe2 = (0, Z.useRef)(false), Fe2 = (0, Z.useRef)(null), Le2 = (0, Z.useRef)(new F()), Re2 = (0, Z.useCallback)(() => {
      Pe2.current && (Pe2.current = false, Ne2.current = null, Fe2.current = null, I2.current && (I2.current.enabled = true), o2(false));
    }, []), ze2 = (0, Z.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Map();
      if (!f2 || !h2) return e3;
      let t3 = /* @__PURE__ */ new Map();
      y2.forEach((e4, n3) => {
        t3.set(e4.root, n3);
      });
      for (let n3 of f2) {
        let r2 = h2[n3.partDefId];
        if (!r2) continue;
        let i2 = t3.get(r2.root);
        i2 !== void 0 && e3.set(i2, n3.id);
      }
      return e3;
    }, [
      f2,
      h2,
      y2
    ]), Be2 = (0, Z.useMemo)(() => y2.map((e3, t3) => e3.visible === false ? -1 : t3).filter((e3) => e3 >= 0), [
      y2
    ]), Ve2 = (0, Z.useCallback)((e3, t3) => {
      if (O2.has(e3)) return true;
      let n3 = ze2.get(t3);
      return !!(n3 && O2.has(n3));
    }, [
      O2,
      ze2
    ]), He2 = (0, Z.useMemo)(() => {
      let e3 = {
        center: [
          0,
          30,
          0
        ],
        radius: 120
      };
      if (!c2) return e3;
      let t3 = 1 / 0, n3 = 1 / 0, r2 = 1 / 0, i2 = -1 / 0, a3 = -1 / 0, o3 = -1 / 0, s3 = (e4, s4, c3) => {
        let l4 = e4, u3 = c3, d2 = -s4;
        l4 < t3 && (t3 = l4), u3 < n3 && (n3 = u3), d2 < r2 && (r2 = d2), l4 > i2 && (i2 = l4), u3 > a3 && (a3 = u3), d2 > o3 && (o3 = d2);
      }, l3 = (e4, t4) => {
        for (let n4 = 0; n4 + 2 < e4.length; n4 += 48) {
          let r3 = e4[n4], i3 = e4[n4 + 1], a4 = e4[n4 + 2];
          t4 ? s3(r3 * t4.scale.x + t4.translation.x, i3 * t4.scale.y + t4.translation.y, a4 * t4.scale.z + t4.translation.z) : s3(r3, i3, a4);
        }
      };
      for (let e4 of c2.parts ?? []) l3(e4.mesh.positions);
      for (let e4 of c2.instances ?? []) l3(e4.mesh.positions, e4.transform ?? null);
      return Number.isFinite(t3) ? {
        center: [
          (t3 + i2) / 2,
          (n3 + a3) / 2,
          (r2 + o3) / 2
        ],
        radius: Math.hypot(i2 - t3, a3 - n3, o3 - r2) / 2 || 60
      } : e3;
    }, [
      c2
    ]), Ue2 = (0, Z.useMemo)(() => {
      if (te2.length === 0 || !c2) return null;
      let e3 = te2.some((e4) => e4.kind === `face` || e4.kind === `edge` || e4.kind === `vertex`), t3 = new re(), n3 = new V(), r2 = false, i2 = (e4) => {
        var _a3;
        let t4 = u2.findIndex((t5) => t5.id === e4);
        if (t4 < 0) return null;
        let n4 = Be2.indexOf(t4);
        return n4 < 0 ? null : ((_a3 = c2.parts[n4]) == null ? void 0 : _a3.mesh) ?? null;
      };
      for (let e4 of te2) switch (e4.kind) {
        case `part`:
          if (c2.instances && c2.instances.length > 0) for (let i3 of c2.instances) {
            if (Xa(i3) !== e4.id) continue;
            let a4 = i3.mesh.positions, o4 = i3.transform ?? {
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
            for (let e5 = 0; e5 < a4.length; e5 += 3) n3.set(a4[e5] * o4.scale.x + o4.translation.x, a4[e5 + 1] * o4.scale.y + o4.translation.y, a4[e5 + 2] * o4.scale.z + o4.translation.z), t3.expandByPoint(n3), r2 = true;
          }
          Be2.forEach((i3, a4) => {
            let o4 = u2[i3];
            if (!o4 || !Ve2(o4.id, i3) || o4.id !== e4.id) return;
            let s4 = c2.parts[a4];
            if (!s4) return;
            let l3 = s4.mesh.positions;
            for (let e5 = 0; e5 < l3.length; e5 += 3) n3.set(l3[e5], l3[e5 + 1], l3[e5 + 2]), t3.expandByPoint(n3), r2 = true;
          });
          break;
        case `face`: {
          let a4 = i2(e4.partId);
          if (!a4) break;
          let o4 = ve(a4, e4.faceIndex);
          for (let e5 of o4) for (let i3 = 0; i3 < 3; i3++) {
            let o5 = a4.indices[e5 * 3 + i3];
            n3.set(a4.positions[o5 * 3], a4.positions[o5 * 3 + 1], a4.positions[o5 * 3 + 2]), t3.expandByPoint(n3), r2 = true;
          }
          break;
        }
        case `edge`: {
          let n4 = i2(e4.partId);
          if (!n4) break;
          let { a: a4, b: o4 } = ye(n4, e4.edgeId);
          t3.expandByPoint(a4), t3.expandByPoint(o4), r2 = true;
          break;
        }
        case `vertex`: {
          let n4 = i2(e4.partId);
          if (!n4) break;
          let a4 = _e(n4, e4.vertexId);
          t3.expandByPoint(a4), r2 = true;
          break;
        }
      }
      if (!r2) return null;
      let a3 = new V();
      t3.getCenter(a3);
      let o3 = new V();
      t3.getSize(o3);
      let s3 = Math.max(o3.length() * 0.5, 1);
      return {
        center: new V(a3.x, a3.z, -a3.y),
        radius: s3,
        mode: e3 ? `pan-only` : `fit`
      };
    }, [
      te2,
      c2,
      u2,
      Ve2,
      Be2
    ]);
    (0, Z.useEffect)(() => {
      if (Ue2 && !ne2) {
        if (Y2.current.copy(Ue2.center), Ue2.mode === `fit`) {
          let e3 = 1.2;
          if (L2 instanceof fe) {
            let t3 = L2.fov * Math.PI / 180, n3 = 2 * Math.atan(Math.tan(t3 / 2) * L2.aspect), r2 = Math.min(t3, n3), i2 = Ue2.radius / Math.sin(r2 / 2) * e3;
            Ne2.current = Math.max(L2.near * 2, i2);
          } else Ne2.current = Ue2.radius * 3 * e3;
        } else Ne2.current = null;
        Pe2.current = true, o2(true);
      }
    }, [
      Ue2,
      ne2,
      L2
    ]), r(() => {
      if (!Pe2.current || !I2.current) return;
      let e3 = I2.current.target, t3 = Y2.current, n3 = Ne2.current, r2 = Fe2.current, i2 = 0.1;
      if (e3.lerp(t3, i2), r2 !== null) L2.position.lerp(r2, i2), L2.quaternion.slerp(Le2.current, i2), e3.copy(t3);
      else if (n3 !== null) {
        let t4 = G2.current.subVectors(L2.position, e3), r3 = t4.length(), a4 = r3 + (n3 - r3) * i2;
        t4.normalize().multiplyScalar(a4), L2.position.copy(e3).add(t4);
      }
      let a3 = e3.distanceTo(t3) < 0.01, s3 = n3 === null || Math.abs(G2.current.subVectors(L2.position, e3).length() - n3) < 0.1, c3 = r2 === null || L2.position.distanceTo(r2) < 0.1;
      a3 && s3 && c3 ? (e3.copy(t3), r2 && (L2.position.copy(r2), L2.quaternion.copy(Le2.current)), I2.current && (I2.current.enabled = true), Pe2.current = false, Ne2.current = null, Fe2.current = null, o2(false)) : R2();
    }), (0, Z.useEffect)(() => {
      let e3 = () => {
        J.getState().followMode !== `free` && R2();
      }, t3 = J.subscribe(e3), n3 = Te.subscribe(e3);
      return () => {
        t3(), n3();
      };
    }, [
      R2
    ]), (0, Z.useEffect)(() => {
      let e3 = 0, t3 = 0, n3 = () => {
        R2(), ++t3 < 36 && (e3 = requestAnimationFrame(n3));
      };
      return n3(), () => cancelAnimationFrame(e3);
    }, [
      R2
    ]), (0, Z.useEffect)(() => {
      R2();
    }, [
      R2,
      c2,
      l2,
      s2
    ]), (0, Z.useEffect)(() => {
      let e3 = () => R2(), t3 = () => {
        document.visibilityState === `visible` && R2();
      }, n3 = U.subscribe(e3);
      return window.addEventListener(`focus`, e3), window.addEventListener(`pageshow`, e3), document.addEventListener(`visibilitychange`, t3), () => {
        n3(), window.removeEventListener(`focus`, e3), window.removeEventListener(`pageshow`, e3), document.removeEventListener(`visibilitychange`, t3);
      };
    }, [
      R2
    ]), r(() => {
      let { followMode: e3, followingParticipantId: t3 } = J.getState();
      if (e3 === `free` || !t3) return;
      let n3 = Te.getState().participants.get(t3);
      if (!(n3 == null ? void 0 : n3.camera)) return;
      let [r2, i2, a3] = Bt(n3.camera.position), o3 = Ua.set(r2, i2, a3);
      if (e3 === `lock`) {
        Pe2.current && Re2();
        let [e4, t4, r3] = Bt(n3.camera.target), i3 = Wa.set(e4, t4, r3);
        L2.position.copy(o3), I2.current ? (I2.current.target.copy(i3), I2.current.update()) : L2.lookAt(i3), R2();
      } else Pe2.current || (I2.current ? (I2.current.target.lerp(o3, 0.15), I2.current.update(), I2.current.target.distanceToSquared(o3) > 1e-4 && R2()) : L2.lookAt(o3));
    }), (0, Z.useEffect)(() => {
      let e3 = I2.current, t3 = e3 == null ? void 0 : e3.domElement;
      if (!t3) return;
      let n3 = false, r2 = () => {
        n3 || (n3 = true, requestAnimationFrame(() => {
          n3 = false, e3.update(), De2.current();
        }));
      }, i2 = () => {
        if (!ge2) {
          je2.current = false, K2.current.theta = 0, K2.current.phi = 0;
          return;
        }
        let t4 = K2.current;
        if (Math.abs(t4.theta) < 1e-4 && Math.abs(t4.phi) < 1e-4) {
          je2.current = false, t4.theta = 0, t4.phi = 0;
          return;
        }
        let n4 = e3.target, r3 = G2.current.subVectors(L2.position, n4), a4 = Oe2.current.setFromVector3(r3);
        a4.theta += t4.theta * 1, a4.phi += t4.phi * 1, a4.phi = Math.max(0.01, Math.min(Math.PI - 0.01, a4.phi)), t4.theta *= 0, t4.phi *= 0, r3.setFromSpherical(a4), L2.position.copy(n4).add(r3), L2.lookAt(n4), e3.update(), De2.current(), requestAnimationFrame(i2);
      }, a3 = (n4, i3, a4) => {
        let o4 = 2e-3 * he2.sensitivity, s4 = -(Math.abs(a4) > Math.abs(i3) ? a4 : i3) * o4;
        he2.invertDirection && (s4 = -s4);
        let c4 = e3.target, l3 = G2.current.subVectors(L2.position, c4), u3 = l3.length(), d2 = Math.max(1, u3 * (1 + s4));
        if (he2.zoomTowardsCursor) {
          let e4 = t3.getBoundingClientRect();
          Ee2.current.x = (n4.clientX - e4.left) / e4.width * 2 - 1, Ee2.current.y = -((n4.clientY - e4.top) / e4.height) * 2 + 1, be2.current.setFromCamera(Ee2.current, L2);
          let r3 = Me2.current;
          be2.current.ray.at(u3, r3);
          let i4 = 1 - d2 / u3;
          c4.lerp(r3, i4 * 0.5);
        }
        l3.normalize().multiplyScalar(d2), L2.position.copy(c4).add(l3), r2();
      }, o3 = (t4, n4) => {
        let i3 = e3.target, a4 = G2.current.subVectors(L2.position, i3).length() * 2e-3, o4 = new V(), s4 = new V();
        L2.matrix.extractBasis(o4, s4, new V());
        let c4 = o4.multiplyScalar(t4 * a4).add(s4.multiplyScalar(-n4 * a4));
        L2.position.add(c4), i3.add(c4), r2();
      }, s3 = (n4, a4, o4) => {
        let s4 = 2 * Math.PI / t3.clientHeight;
        if (o4 && ge2) K2.current.theta += n4 * s4, K2.current.phi += a4 * s4, je2.current || (je2.current = true, requestAnimationFrame(i2));
        else {
          let t4 = e3.target, i3 = G2.current.subVectors(L2.position, t4), o5 = Oe2.current.setFromVector3(i3);
          o5.theta += n4 * s4, o5.phi += a4 * s4, o5.phi = Math.max(0.01, Math.min(Math.PI - 0.01, o5.phi)), i3.setFromSpherical(o5), L2.position.copy(t4).add(i3), L2.lookAt(t4), r2();
        }
      }, c3 = (e4) => {
        e4.preventDefault(), e4.stopPropagation(), Re2(), Ga();
        let t4 = e4.deltaX, n4 = e4.deltaY;
        e4.deltaMode === 1 && (t4 *= 16, n4 *= 16), e4.deltaMode === 2 && (t4 *= 100, n4 *= 100);
        let r3 = ki(e4), i3 = Ai(pe2.scrollBindings, r3, B2), c4 = pe2.trackpadOrbitEnabled && B2 === `trackpad`;
        switch (i3) {
          case `zoom`:
            a3(e4, t4, n4);
            break;
          case `pan`:
            o3(t4, n4);
            break;
          case `orbit`:
            s3(t4, n4, c4);
        }
      };
      return t3.addEventListener(`wheel`, c3, {
        passive: false
      }), () => t3.removeEventListener(`wheel`, c3);
    }, [
      L2,
      pe2,
      B2,
      he2,
      ge2,
      Re2
    ]), (0, Z.useEffect)(() => {
      let e3 = I2.current;
      if (!e3) return;
      let t3 = e3.domElement, n3 = () => {
        A2(true), o2(true), Ga();
      }, r2 = () => {
        A2(false), o2(false);
      }, i2 = () => {
        Re2(), Ga();
      };
      return e3.addEventListener(`start`, n3), e3.addEventListener(`end`, r2), t3 == null ? void 0 : t3.addEventListener(`pointerdown`, i2), () => {
        e3.removeEventListener(`start`, n3), e3.removeEventListener(`end`, r2), t3 == null ? void 0 : t3.removeEventListener(`pointerdown`, i2);
      };
    }, [
      A2,
      Re2
    ]), (0, Z.useEffect)(() => {
      var _a3;
      let e3 = (_a3 = I2.current) == null ? void 0 : _a3.domElement;
      if (!e3) return;
      let t3 = () => {
        J.getState().selectedPartIds.size > 0 || window.dispatchEvent(new CustomEvent(`vcad:camera-fit`));
      };
      return e3.addEventListener(`dblclick`, t3), () => e3.removeEventListener(`dblclick`, t3);
    }, []), (0, Z.useEffect)(() => {
      var _a3;
      let e3 = (_a3 = I2.current) == null ? void 0 : _a3.domElement;
      if (!e3) return;
      let t3 = new k(new V(0, 1, 0), 0), n3 = new ee(), r2 = new me(), i2 = new V(), a3 = false, o3 = null, s3 = () => {
        a3 = false;
        let s4 = o3;
        if (!s4) return;
        let c4 = e3.getBoundingClientRect();
        n3.x = (s4.clientX - c4.left) / c4.width * 2 - 1, n3.y = -((s4.clientY - c4.top) / c4.height) * 2 + 1, r2.setFromCamera(n3, L2), r2.ray.intersectPlane(t3, i2) ? J.getState().setCursorWorld({
          x: i2.x,
          y: -i2.z,
          z: i2.y
        }) : J.getState().setCursorWorld(null);
      }, c3 = (e4) => {
        o3 = e4, a3 || (a3 = true, requestAnimationFrame(s3));
      }, l3 = () => {
        o3 = null, J.getState().setCursorWorld(null);
      };
      return e3.addEventListener(`pointermove`, c3), e3.addEventListener(`pointerleave`, l3), () => {
        e3.removeEventListener(`pointermove`, c3), e3.removeEventListener(`pointerleave`, l3), J.getState().setCursorWorld(null);
      };
    }, [
      L2
    ]), (0, Z.useEffect)(() => {
      let e3 = (e4) => {
        let { normal: t3, centroid: n3, vertices: r2 } = e4.detail, i2 = new V(t3.x, t3.z, -t3.y).normalize(), a3 = new V(n3.x, n3.z, -n3.y), s3 = 60;
        if (r2 && r2.length >= 3) {
          let e5 = new V(0, 1, 0);
          Math.abs(i2.dot(e5)) > 0.95 && e5.set(1, 0, 0);
          let t4 = new V().crossVectors(e5, i2).normalize(), n4 = new V().crossVectors(i2, t4).normalize(), o3 = 1 / 0, c4 = -1 / 0, l3 = 1 / 0, u3 = -1 / 0, d2 = new V();
          for (let e6 of r2) {
            let r3 = new V(e6.x, e6.z, -e6.y);
            d2.subVectors(r3, a3);
            let i3 = d2.dot(t4), s4 = d2.dot(n4);
            i3 < o3 && (o3 = i3), i3 > c4 && (c4 = i3), s4 < l3 && (l3 = s4), s4 > u3 && (u3 = s4);
          }
          let f3 = Math.max(1, c4 - o3), p2 = Math.max(1, u3 - l3), m2 = 1.2;
          if (L2 instanceof fe) {
            let e6 = L2.fov * Math.PI / 180, t5 = 2 * Math.atan(Math.tan(e6 / 2) * L2.aspect), n5 = p2 / 2 / Math.tan(e6 / 2), r3 = f3 / 2 / Math.tan(t5 / 2);
            s3 = Math.max(n5, r3, 10) * m2;
          } else s3 = Math.max(f3, p2, 10) * m2;
        }
        let c3 = new V(a3.x + i2.x * s3, a3.y + i2.y * s3, a3.z + i2.z * s3);
        Y2.current.copy(a3), Fe2.current = c3, Ne2.current = s3, no(c3, a3, Le2.current), I2.current && (I2.current.enabled = false), Pe2.current = true, o2(true);
      };
      return window.addEventListener(`vcad:face-selected`, e3), () => window.removeEventListener(`vcad:face-selected`, e3);
    }, [
      L2
    ]), (0, Z.useEffect)(() => {
      let e3 = {
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
      }, t3 = (t4) => {
        let n3 = t4.detail, r2 = e3[n3];
        if (!r2) return;
        let i2 = new V(r2[0], r2[1], r2[2]), a3 = new V(0, 0, 0);
        Y2.current.copy(a3), Fe2.current = i2, Ne2.current = null, no(i2, a3, Le2.current), I2.current && (I2.current.enabled = false), Pe2.current = true, o2(true);
      };
      return window.addEventListener(`vcad:snap-view`, t3), () => window.removeEventListener(`vcad:snap-view`, t3);
    }, []);
    let X2 = i((e3) => e3.size.width / Math.max(1, e3.size.height));
    (0, Z.useEffect)(() => {
      let e3 = (e4) => {
        let { planeNormal: t3, planeCenter: n3, width: r2, height: i2 } = e4.detail, [a3, s3, c3] = Bt([
          n3.x,
          n3.y,
          n3.z
        ]), [l3, u3, d2] = Bt([
          t3.x,
          t3.y,
          t3.z
        ]), f3 = Math.hypot(l3, u3, d2) || 1, p2 = new V(l3 / f3, u3 / f3, d2 / f3), m2 = L2, h3 = (m2.isPerspectiveCamera ? m2.fov : 50) * (Math.PI / 180), g2 = m2.isPerspectiveCamera ? m2.aspect : X2, _2 = Math.max(r2, 1), v2 = Math.max(i2, 1) / 2 / Math.tan(h3 / 2), y3 = _2 / 2 / (g2 * Math.tan(h3 / 2)), b3 = Math.max(v2, y3, 10) * 1.2;
        Y2.current.set(a3, s3, c3);
        let x3 = new V(a3 + p2.x * b3, s3 + p2.y * b3, c3 + p2.z * b3);
        Fe2.current = x3, Ne2.current = b3, no(x3, Y2.current, Le2.current), I2.current && (I2.current.enabled = false), Pe2.current = true, o2(true);
      };
      return window.addEventListener(`vcad:fit-sketch`, e3), () => window.removeEventListener(`vcad:fit-sketch`, e3);
    }, [
      L2,
      X2
    ]);
    let We2 = i((e3) => e3.gl), Ge2 = i((e3) => e3.scene), Ke2 = i((e3) => e3.size), qe2 = hi();
    (0, Z.useEffect)(() => {
      qe2 || R2();
    }, [
      qe2,
      R2
    ]), (0, Z.useEffect)(() => {
      let e3 = (e4) => {
        let t4 = Math.max(1, Ke2.width), n3 = Math.max(1, Ke2.height), [r2, i2, a3] = Bt(e4.position), [o3, s3, c3] = Bt(e4.target), l3 = new fe(50, t4 / n3, 0.1, 1e4);
        l3.up.set(0, 1, 0), l3.position.set(r2, i2, a3), l3.lookAt(o3, s3, c3), l3.updateMatrixWorld();
        let u3 = new D(t4, n3, {
          samples: 4,
          colorSpace: ce
        }), d2 = We2.getRenderTarget(), f3 = We2.toneMapping, p2 = We2.toneMappingExposure, m2 = We2.outputColorSpace;
        We2.toneMapping = 4, We2.toneMappingExposure = 1, We2.outputColorSpace = ce, We2.setRenderTarget(u3), We2.clear(), We2.render(Ge2, l3), We2.setRenderTarget(d2), We2.toneMapping = f3, We2.toneMappingExposure = p2, We2.outputColorSpace = m2;
        let h3 = new Uint8Array(t4 * n3 * 4);
        We2.readRenderTargetPixels(u3, 0, 0, t4, n3, h3), u3.dispose();
        let g2 = document.createElement(`canvas`);
        g2.width = t4, g2.height = n3;
        let _2 = g2.getContext(`2d`);
        if (!_2) return null;
        let v2 = _2.createImageData(t4, n3), y3 = t4 * 4;
        for (let e5 = 0; e5 < n3; e5++) {
          let t5 = (n3 - 1 - e5) * y3;
          v2.data.set(h3.subarray(t5, t5 + y3), e5 * y3);
        }
        return _2.putImageData(v2, 0, 0), g2;
      }, t3 = window;
      return t3.__vcadCaptureAiCamera = e3, () => {
        t3.__vcadCaptureAiCamera === e3 && delete t3.__vcadCaptureAiCamera;
      };
    }, [
      We2,
      Ge2,
      Ke2.width,
      Ke2.height
    ]), (0, Z.useEffect)(() => {
      let e3 = () => {
        let e4 = new V(60, -60, 45), t3 = new V(0, 0, 0);
        Y2.current.copy(t3), Fe2.current = e4, Ne2.current = null, no(e4, t3, Le2.current), I2.current && (I2.current.enabled = false), Pe2.current = true, o2(true);
      };
      return window.addEventListener(`vcad:hero-view`, e3), () => window.removeEventListener(`vcad:hero-view`, e3);
    }, []), (0, Z.useEffect)(() => {
      let e3 = (e4) => {
        let { x: t3, y: n3, z: r2 } = e4.detail, [i2, a3, s3] = Bt([
          t3,
          n3,
          r2
        ]);
        Y2.current.set(i2, a3, s3), Fe2.current = null, Ne2.current = null, I2.current && (I2.current.enabled = false), Pe2.current = true, o2(true);
      };
      return window.addEventListener(`vcad:focus-point`, e3), () => window.removeEventListener(`vcad:focus-point`, e3);
    }, []), (0, Z.useEffect)(() => {
      let e3 = () => {
        var _a3;
        let e4 = H.getState().scene;
        if (!e4 || e4.parts.length === 0) return;
        let t3 = new re(), n3 = new V(), r2 = false;
        for (let i3 of e4.parts) {
          let e5 = i3.mesh.positions;
          for (let i4 = 0; i4 < e5.length; i4 += 3) n3.set(e5[i4] ?? 0, e5[i4 + 1] ?? 0, e5[i4 + 2] ?? 0), t3.expandByPoint(n3), r2 = true;
        }
        if (!r2) return;
        let i2 = new V();
        t3.getCenter(i2);
        let a3 = new V();
        t3.getSize(a3);
        let s3 = Math.max(a3.x, a3.y, a3.z, 50) * 2, c3 = new V(i2.x, i2.z, -i2.y), l3 = ((_a3 = I2.current) == null ? void 0 : _a3.target) ?? new V(), u3 = new V().copy(L2.position).sub(l3);
        u3.lengthSq() < 1e-6 && u3.set(1, 1, 1), u3.normalize();
        let d2 = new V().copy(c3).addScaledVector(u3, s3);
        Y2.current.copy(c3), Fe2.current = d2, Ne2.current = s3, no(d2, c3, Le2.current), I2.current && (I2.current.enabled = false), Pe2.current = true, o2(true);
      };
      return window.addEventListener(`vcad:camera-fit`, e3), () => window.removeEventListener(`vcad:camera-fit`, e3);
    }, [
      L2
    ]);
    let Je2 = (0, Z.useMemo)(() => Ja(b2, z2), [
      b2,
      z2
    ]), Ye2 = (0, Z.useMemo)(() => {
      let e3 = Je2.environment;
      return e3.type === `None` ? null : e3.type === `Preset` ? Ka[e3.preset] ?? `studio` : `studio`;
    }, [
      Je2.environment
    ]), Xe2 = (0, Z.useMemo)(() => {
      let e3 = Je2.environment;
      return e3.type === `None` ? 0 : e3.intensity ?? 1;
    }, [
      Je2.environment
    ]);
    return (0, Q.jsxs)(Q.Fragment, {
      children: [
        Je2.lights.map((e3) => {
          if (e3.enabled === false) return null;
          let t3 = new N(e3.color[0], e3.color[1], e3.color[2]);
          if (e3.kind.type === `Directional`) {
            let n3 = Ya(e3.kind.direction);
            return e3.castShadow ? (0, Q.jsx)(ao, {
              direction: e3.kind.direction ?? {
                x: 0.5,
                y: -0.8,
                z: 0.4
              },
              color: t3,
              intensity: e3.intensity,
              bounds: He2
            }, e3.id) : (0, Q.jsx)(`directionalLight`, {
              position: n3,
              intensity: e3.intensity,
              color: t3
            }, e3.id);
          }
          return e3.kind.type === `Point` ? (0, Q.jsx)(`pointLight`, {
            position: [
              e3.kind.position.x,
              e3.kind.position.y,
              e3.kind.position.z
            ],
            intensity: e3.intensity,
            color: t3,
            distance: e3.kind.distance
          }, e3.id) : e3.kind.type === `Spot` ? (0, Q.jsx)(`spotLight`, {
            position: [
              e3.kind.position.x,
              e3.kind.position.y,
              e3.kind.position.z
            ],
            intensity: e3.intensity,
            color: t3,
            angle: e3.kind.angle ? e3.kind.angle * Math.PI / 180 : void 0,
            penumbra: e3.kind.penumbra ? e3.kind.penumbra / 90 : void 0
          }, e3.id) : null;
        }),
        !n2 && !a2 && (0, Q.jsx)(p, {
          position: [
            0,
            -0.01,
            0
          ],
          opacity: z2 ? 0.4 : 0.3,
          scale: 200,
          blur: 2,
          far: 100,
          resolution: 512,
          color: z2 ? `#000000` : `#1a1a1a`
        }),
        !n2 && (0, Q.jsx)(Vt, {}),
        (0, Q.jsx)(d, {
          ref: I2,
          makeDefault: true,
          enabled: !se2,
          enableDamping: false,
          enableZoom: Ha,
          touches: {
            ONE: le.ROTATE,
            TWO: le.DOLLY_PAN
          },
          mouseButtons: (() => {
            let e3 = ji(pe2, B2);
            return {
              LEFT: void 0,
              MIDDLE: e3.MIDDLE,
              RIGHT: e3.RIGHT
            };
          })()
        }),
        !n2 && !se2 && (0, Q.jsx)(_, {
          alignment: `bottom-right`,
          margin: [
            80,
            80
          ],
          children: (0, Q.jsx)(m, {
            axisColors: [
              `#e06c75`,
              `#61afef`,
              `#98c379`
            ],
            labelColor: `#abb2bf`,
            labels: [
              `X`,
              `Z`,
              `Y`
            ]
          })
        }),
        Ye2 && (0, Q.jsx)(Z.Suspense, {
          fallback: null,
          children: (0, Q.jsx)(g, {
            preset: Ye2,
            environmentIntensity: Xe2,
            background: Je2.background.type === `Environment`
          })
        }),
        !Ye2 && (0, Q.jsxs)(g, {
          resolution: 256,
          frames: 1,
          background: false,
          children: [
            (0, Q.jsx)(`color`, {
              attach: `background`,
              args: z2 ? [
                0.018,
                0.02,
                0.024
              ] : [
                0.62,
                0.6,
                0.58
              ]
            }),
            (0, Q.jsx)(v, {
              form: `rect`,
              intensity: z2 ? 3.2 : 5.5,
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
            (0, Q.jsx)(v, {
              form: `rect`,
              intensity: z2 ? 1.3 : 2.2,
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
            (0, Q.jsx)(v, {
              form: `rect`,
              intensity: z2 ? 0.9 : 1.6,
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
            (0, Q.jsx)(v, {
              form: `rect`,
              intensity: z2 ? 2.2 : 3.6,
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
            (0, Q.jsx)(v, {
              form: `rect`,
              intensity: z2 ? 0.25 : 0.5,
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
        !n2 && ((_a2 = b2 == null ? void 0 : b2.background) == null ? void 0 : _a2.type) === `Solid` && (0, Q.jsx)(`color`, {
          attach: `background`,
          args: [
            b2.background.color[0],
            b2.background.color[1],
            b2.background.color[2]
          ]
        }),
        t2 && (0, Q.jsx)(`group`, {
          rotation: [
            -Math.PI / 2,
            0,
            0
          ],
          children: (0, Q.jsx)(`group`, {
            position: [
              (ae2 == null ? void 0 : ae2.position.x) ?? 0,
              (ae2 == null ? void 0 : ae2.position.y) ?? 0,
              (ae2 == null ? void 0 : ae2.position.z) ?? 0
            ],
            rotation: [
              ((ae2 == null ? void 0 : ae2.rotationDeg.x) ?? 0) * Math.PI / 180,
              ((ae2 == null ? void 0 : ae2.rotationDeg.y) ?? 0) * Math.PI / 180,
              ((ae2 == null ? void 0 : ae2.rotationDeg.z) ?? 0) * Math.PI / 180,
              `ZYX`
            ],
            scale: [
              (ae2 == null ? void 0 : ae2.scale.x) ?? 1,
              (ae2 == null ? void 0 : ae2.scale.y) ?? 1,
              (ae2 == null ? void 0 : ae2.scale.z) ?? 1
            ],
            children: (0, Q.jsx)(da, {
              showBoard: true
            })
          })
        }),
        !n2 && s2 && (0, Q.jsxs)(Q.Fragment, {
          children: [
            j2 === `raytrace` && ie2 && (0, Q.jsx)(qr, {}),
            (0, Q.jsx)(ha, {
              children: (0, Q.jsxs)(`group`, {
                rotation: [
                  -Math.PI / 2,
                  0,
                  0
                ],
                children: [
                  (0, Q.jsx)(Wn, {}),
                  (0, Q.jsx)(pa, {
                    excludeNodeId: P2
                  }),
                  (0, Q.jsxs)(Q.Fragment, {
                    children: [
                      (_b = c2 == null ? void 0 : c2.instances) == null ? void 0 : _b.map((e3) => {
                        let n3 = Xa(e3), r2 = {
                          id: n3,
                          name: e3.name ?? e3.partDefId,
                          kind: `cube`,
                          primitiveNodeId: 0,
                          scaleNodeId: 0,
                          rotateNodeId: 0,
                          translateNodeId: 0
                        };
                        return (0, Q.jsx)(dn, {
                          partInfo: r2,
                          mesh: e3.mesh,
                          materialKey: e3.material,
                          selected: O2.has(n3),
                          transform: e3.transform,
                          ghosted: t2
                        }, e3.instanceId);
                      }),
                      (!(c2 == null ? void 0 : c2.instances) || c2.instances.length === 0) && u2.length === 0 && (c2 == null ? void 0 : c2.parts.map((e3, t3) => (0, Q.jsx)(un, {
                        mesh: e3.mesh,
                        materialKey: e3.material
                      }, `imported-${t3}`))),
                      (!(c2 == null ? void 0 : c2.instances) || c2.instances.length === 0) && u2.length > 0 && (c2 == null ? void 0 : c2.parts.map((e3, n3) => {
                        let r2 = Be2[n3] ?? n3, i2 = u2[r2];
                        return !i2 || i2.id === oe2 ? null : (0, Q.jsx)(dn, {
                          partInfo: i2,
                          mesh: e3.mesh,
                          materialKey: e3.material,
                          selected: Ve2(i2.id, r2),
                          ghosted: t2 && !Ie(i2)
                        }, i2.id);
                      }))
                    ]
                  }),
                  T2 && T2.positions.length > 0 && (0, Q.jsx)(xn, {
                    molecule: T2,
                    representation: C2
                  }),
                  (0, Q.jsx)(ro, {}),
                  (0, Q.jsx)(io, {}),
                  c2 == null ? void 0 : c2.clashes.map((e3, t3) => (0, Q.jsx)(En, {
                    mesh: e3
                  }, `clash-${t3}`)),
                  (0, Q.jsx)(Dn, {}),
                  l2 && (0, Q.jsx)(On, {
                    mesh: l2
                  }),
                  M2 && (0, Q.jsx)(Rn, {}),
                  (0, Q.jsx)(Cr, {}),
                  (0, Q.jsx)(Or, {}),
                  (0, Q.jsx)(pi, {}),
                  (0, Q.jsx)(jr, {}),
                  (0, Q.jsx)(w, {})
                ]
              })
            }),
            (0, Q.jsx)(Va, {}),
            (0, Q.jsx)(nr, {
              orbitControls: I2
            })
          ]
        }),
        s2 && !se2 && !qe2 && (() => {
          var _a3, _b2, _c, _d, _e2, _f, _g;
          let e3 = ((_a3 = Je2.postProcessing.ambientOcclusion) == null ? void 0 : _a3.enabled) !== false, t3 = ((_b2 = Je2.postProcessing.vignette) == null ? void 0 : _b2.enabled) !== false;
          if (!e3 && !t3) return null;
          let n3 = (_c = We2.getContext) == null ? void 0 : _c.call(We2);
          if (!n3 || typeof n3.getContextAttributes != `function` || !n3.getContextAttributes()) return null;
          let r2 = [];
          return e3 && r2.push((0, Q.jsx)(xe, {
            aoRadius: ((_d = Je2.postProcessing.ambientOcclusion) == null ? void 0 : _d.radius) ?? 0.5,
            intensity: ((_e2 = Je2.postProcessing.ambientOcclusion) == null ? void 0 : _e2.intensity) ?? (z2 ? 2 : 1.5),
            aoSamples: a2 ? 3 : 6,
            denoiseSamples: a2 ? 1 : 4
          }, `ao`)), t3 && r2.push((0, Q.jsx)(Se, {
            offset: ((_f = Je2.postProcessing.vignette) == null ? void 0 : _f.offset) ?? 0.3,
            darkness: ((_g = Je2.postProcessing.vignette) == null ? void 0 : _g.darkness) ?? (z2 ? 0.5 : 0.3),
            eskil: false
          }, `vignette`)), (0, Q.jsx)(ma, {
            children: (0, Q.jsx)(Ce, {
              children: r2
            })
          });
        })()
      ]
    });
  }
  var so = {
    light: {
      background: `#ffffff`,
      edge: `#1a1a1a`,
      hiddenEdge: `#999999`,
      dimension: `#3b82f6`,
      label: `#666666`,
      selection: `#3b82f6`,
      selectionFill: `rgba(59, 130, 246, 0.1)`,
      detailRegion: `#e11d48`,
      detailRegionFill: `rgba(225, 29, 72, 0.05)`,
      section: `#d97706`,
      sheet: `#444444`
    },
    dark: {
      background: `#0a0a0a`,
      edge: `#00d4aa`,
      hiddenEdge: `#006655`,
      dimension: `#ff6b35`,
      label: `#888888`,
      selection: `#00d4aa`,
      selectionFill: `rgba(0, 212, 170, 0.1)`,
      detailRegion: `#f43f5e`,
      detailRegionFill: `rgba(244, 63, 94, 0.08)`,
      section: `#fbbf24`,
      sheet: `#aaaaaa`
    }
  };
  function co(e2, t2, n2, r2, i2, a2, o2) {
    let s2 = (e3) => t2 + e3 * r2, c2 = (e3) => n2 - e3 * r2;
    return (0, Q.jsxs)(`g`, {
      pointerEvents: `none`,
      children: [
        e2.rendered.lines.map(([e3, t3], n3) => (0, Q.jsx)(`line`, {
          x1: s2(e3.x),
          y1: c2(e3.y),
          x2: s2(t3.x),
          y2: c2(t3.y),
          stroke: i2,
          strokeWidth: a2
        }, `${o2}-l-${n3}`)),
        e2.rendered.texts.map((e3, t3) => {
          let n3 = String(e3.alignment), a3 = n3.includes(`Left`) ? `start` : n3.includes(`Right`) ? `end` : `middle`, l2 = n3.startsWith(`Top`) ? `hanging` : n3.startsWith(`Bottom`) ? `auto` : `middle`;
          return (0, Q.jsx)(`text`, {
            x: s2(e3.position.x),
            y: c2(e3.position.y),
            fontSize: e3.height * r2,
            fill: i2,
            textAnchor: a3,
            dominantBaseline: l2,
            fontFamily: `monospace`,
            children: e3.text
          }, `${o2}-t-${t3}`);
        })
      ]
    }, o2);
  }
  function lo() {
    let { viewDirection: e2, showHiddenLines: t2, showDimensions: n2, zoom: r2, pan: i2, adjustZoom: a2, adjustPan: o2, resetView: s2, detailViews: c2, addDetailView: l2 } = _t(), u2 = H((e3) => e3.scene), d2 = H((e3) => e3.engine), f2 = U((e3) => e3.parts), p2 = U((e3) => e3.document.drawing), m2 = U((e3) => e3.setDrawingSettings), h2 = J((e3) => e3.selectedPartIds), g2 = J((e3) => e3.select), _2 = J((e3) => e3.clearSelection), { isDark: v2 } = we(), y2 = (0, Z.useRef)(null), [b2, x2] = (0, Z.useState)(false), [S2, C2] = (0, Z.useState)({
      x: 0,
      y: 0
    }), w2 = (0, Z.useRef)({
      x: 0,
      y: 0
    }), T2 = (0, Z.useRef)(false), [E2, ee2] = (0, Z.useState)(false), [D2, O2] = (0, Z.useState)(null), [k2, te2] = (0, Z.useState)(null), [ne2, A2] = (0, Z.useState)(false), [j2, re2] = (0, Z.useState)([]), [ie2, M2] = (0, Z.useState)(null), N2 = v2 ? so.dark : so.light, P2 = (0, Z.useMemo)(() => !(u2 == null ? void 0 : u2.parts) || !d2 ? [] : u2.parts.map((t3, n3) => {
      let r3 = f2[n3];
      if (!r3) return null;
      let i3 = d2.projectMesh(t3.mesh, e2);
      return i3 ? {
        partId: r3.id,
        view: i3
      } : null;
    }).filter((e3) => e3 !== null), [
      u2,
      d2,
      e2,
      f2
    ]), F2 = (0, Z.useMemo)(() => {
      if (P2.length === 0) return null;
      let e3 = 1 / 0, t3 = 1 / 0, n3 = -1 / 0, r3 = -1 / 0;
      for (let { view: i3 } of P2) e3 = Math.min(e3, i3.bounds.min_x), t3 = Math.min(t3, i3.bounds.min_y), n3 = Math.max(n3, i3.bounds.max_x), r3 = Math.max(r3, i3.bounds.max_y);
      return {
        min_x: e3,
        min_y: t3,
        max_x: n3,
        max_y: r3
      };
    }, [
      P2
    ]), ae2 = (0, Z.useMemo)(() => P2.length === 0 ? null : {
      edges: P2.flatMap((e3) => e3.view.edges),
      bounds: F2,
      view_direction: e2
    }, [
      P2,
      F2,
      e2
    ]), oe2 = (0, Z.useMemo)(() => !ae2 || !d2 || c2.length === 0 ? [] : c2.map((e3) => {
      try {
        return {
          def: e3,
          view: d2.createDetailView(ae2, e3.centerX, e3.centerY, e3.scale, e3.width, e3.height, e3.label)
        };
      } catch {
        return null;
      }
    }).filter((e3) => e3 !== null), [
      ae2,
      d2,
      c2
    ]), se2 = (0, Z.useMemo)(() => {
      var _a2;
      if (!d2 || !((_a2 = u2 == null ? void 0 : u2.parts) == null ? void 0 : _a2.length)) return [];
      let t3 = ((p2 == null ? void 0 : p2.sections) ?? []).filter((t4) => t4.view === e2);
      if (t3.length === 0) return [];
      let n3 = bt();
      return n3 ? t3.map((e3) => {
        let t4 = yt(e3.view, e3.points);
        if (!t4) return null;
        let r3 = d2.offsetSectionMesh(n3, t4, {
          spacing: 3,
          angle: Math.PI / 4
        });
        return r3 ? {
          def: e3,
          view: r3
        } : null;
      }).filter((e3) => e3 !== null) : [];
    }, [
      d2,
      u2,
      p2,
      e2
    ]), I2 = (0, Z.useMemo)(() => {
      if (!d2 || !(p2 == null ? void 0 : p2.titleBlock)) return null;
      try {
        return d2.renderTitleBlock(vt(p2.titleBlock, ``));
      } catch {
        return null;
      }
    }, [
      d2,
      p2
    ]), L2 = (0, Z.useMemo)(() => {
      if (!d2 || !(p2 == null ? void 0 : p2.showBom) || f2.length === 0) return null;
      try {
        let e3 = xt();
        return e3.length > 0 ? d2.renderBomTable(e3) : null;
      } catch {
        return null;
      }
    }, [
      d2,
      p2,
      f2
    ]), ce2 = (0, Z.useMemo)(() => {
      if (!F2 || !n2 || !d2) return [];
      try {
        let e3 = d2.WasmAnnotationLayer, t3 = new e3(), { min_x: n3, min_y: r3, max_x: i3, max_y: a3 } = F2;
        t3.addHorizontalDimension(n3, r3, i3, r3, -10), t3.addVerticalDimension(i3, r3, i3, a3, 10);
        let o3 = t3.renderAll();
        return t3.free(), o3;
      } catch {
        return [];
      }
    }, [
      F2,
      n2,
      d2
    ]), R2 = (0, Z.useCallback)((e3) => {
      if (e3.preventDefault(), e3.shiftKey) {
        let t4 = -e3.deltaY * 2e-3;
        a2(t4);
        return;
      }
      let t3 = e3.deltaX, n3 = e3.deltaY;
      e3.deltaMode === 1 && (t3 *= 16, n3 *= 16), e3.deltaMode === 2 && (t3 *= 100, n3 *= 100);
      let i3 = 0.15 / r2;
      if (w2.current.x -= t3 * i3, w2.current.y -= n3 * i3, !T2.current) {
        T2.current = true;
        let e4 = () => {
          let t4 = w2.current;
          if (Math.abs(t4.x) < 0.01 && Math.abs(t4.y) < 0.01) {
            T2.current = false, t4.x = 0, t4.y = 0;
            return;
          }
          let n4 = 0.15;
          o2(t4.x * n4, t4.y * n4);
          let r3 = 0.92;
          t4.x *= r3, t4.y *= r3, requestAnimationFrame(e4);
        };
        requestAnimationFrame(e4);
      }
    }, [
      a2,
      o2,
      r2
    ]);
    (0, Z.useEffect)(() => {
      let e3 = y2.current;
      if (e3) return e3.addEventListener(`wheel`, R2, {
        passive: false
      }), () => e3.removeEventListener(`wheel`, R2);
    }, [
      R2
    ]);
    let z2 = (0, Z.useCallback)((e3) => {
      (e3.button === 1 || e3.button === 0 && e3.altKey) && (x2(true), C2({
        x: e3.clientX,
        y: e3.clientY
      }), w2.current = {
        x: 0,
        y: 0
      }, T2.current = false, e3.target.setPointerCapture(e3.pointerId), e3.preventDefault());
    }, []), le2 = (0, Z.useCallback)((e3) => {
      if (!b2) return;
      let t3 = e3.clientX - S2.x, n3 = e3.clientY - S2.y;
      C2({
        x: e3.clientX,
        y: e3.clientY
      });
      let i3 = y2.current;
      if (!i3) return;
      let a3 = i3.getBoundingClientRect(), s3 = (F2 ? (F2.max_x - F2.min_x) * 1.6 : 100) / a3.width / r2, c3 = t3 * s3, l3 = -n3 * s3;
      o2(c3, l3), w2.current.x = c3, w2.current.y = l3;
    }, [
      b2,
      S2,
      o2,
      r2,
      F2
    ]), ue2 = (0, Z.useCallback)((e3) => {
      if (b2) {
        x2(false), e3.target.releasePointerCapture(e3.pointerId);
        let t3 = w2.current;
        if ((Math.abs(t3.x) > 0.1 || Math.abs(t3.y) > 0.1) && !T2.current) {
          T2.current = true;
          let e4 = () => {
            if (Math.abs(t3.x) < 0.01 && Math.abs(t3.y) < 0.01) {
              T2.current = false, t3.x = 0, t3.y = 0;
              return;
            }
            let n3 = 0.15;
            _t.getState().adjustPan(t3.x * n3, t3.y * n3);
            let r3 = 0.92;
            t3.x *= r3, t3.y *= r3, requestAnimationFrame(e4);
          };
          requestAnimationFrame(e4);
        }
      }
    }, [
      b2
    ]), de2 = (0, Z.useCallback)((e3, t3) => {
      if (t3.stopPropagation(), t3.shiftKey) {
        if (h2.has(e3)) {
          let t4 = new Set(h2);
          t4.delete(e3), J.getState().selectMultiple(Array.from(t4));
        } else J.getState().selectMultiple([
          ...Array.from(h2),
          e3
        ]);
      } else g2(e3);
    }, [
      h2,
      g2
    ]), fe2 = (0, Z.useCallback)(() => {
      _2();
    }, [
      _2
    ]), pe2 = (0, Z.useCallback)(() => {
      s2();
    }, [
      s2
    ]), B2 = (0, Z.useCallback)((e3, t3) => {
      let n3 = y2.current;
      if (!n3 || !F2) return null;
      let a3 = n3.getBoundingClientRect(), o3 = F2.max_x - F2.min_x, s3 = F2.max_y - F2.min_y, c3 = Math.max(o3, s3) * 0.3, l3 = (o3 + 2 * c3) / r2, u3 = (s3 + 2 * c3) / r2, d3 = F2.min_x - c3 + (o3 + 2 * c3 - l3) / 2 - i2.x, f3 = -F2.max_y - c3 + (s3 + 2 * c3 - u3) / 2 - i2.y;
      return {
        x: d3 + (e3 - a3.left) / a3.width * l3,
        y: -(f3 + (t3 - a3.top) / a3.height * u3)
      };
    }, [
      F2,
      r2,
      i2
    ]), me2 = (0, Z.useCallback)(() => {
      ee2(true), O2(null), te2(null);
    }, []), V2 = (0, Z.useCallback)((e3) => {
      if (!E2) return;
      let t3 = B2(e3.clientX, e3.clientY);
      t3 && (O2(t3), te2(t3));
    }, [
      E2,
      B2
    ]), he2 = (0, Z.useCallback)((e3) => {
      if (!E2 || !D2) return;
      let t3 = B2(e3.clientX, e3.clientY);
      t3 && te2(t3);
    }, [
      E2,
      D2,
      B2
    ]), ge2 = (0, Z.useCallback)(() => {
      if (!E2 || !D2 || !k2) return;
      let e3 = Math.min(D2.x, k2.x), t3 = Math.max(D2.x, k2.x), n3 = Math.min(D2.y, k2.y), r3 = Math.max(D2.y, k2.y), i3 = t3 - e3, a3 = r3 - n3;
      if (i3 > 0.5 && a3 > 0.5) {
        let o3 = (e3 + t3) / 2, s3 = (n3 + r3) / 2, u3 = c2.length, d3 = String.fromCharCode(65 + u3 % 26);
        l2({
          centerX: o3,
          centerY: s3,
          scale: 2,
          width: i3,
          height: a3,
          label: d3
        });
      }
      ee2(false), O2(null), te2(null);
    }, [
      E2,
      D2,
      k2,
      c2.length,
      l2
    ]);
    (0, Z.useEffect)(() => {
      let e3 = (e4) => {
        e4.key === `Escape` && E2 && (ee2(false), O2(null), te2(null));
      };
      return window.addEventListener(`keydown`, e3), () => window.removeEventListener(`keydown`, e3);
    }, [
      E2
    ]), (0, Z.useEffect)(() => {
      let e3 = () => {
        me2();
      };
      return window.addEventListener(`vcad:start-detail-view`, e3), () => window.removeEventListener(`vcad:start-detail-view`, e3);
    }, [
      me2
    ]), (0, Z.useEffect)(() => {
      let e3 = () => {
        A2(true), re2([]), M2(null);
      };
      return window.addEventListener(`vcad:start-section-view`, e3), () => window.removeEventListener(`vcad:start-section-view`, e3);
    }, []);
    let _e2 = (0, Z.useCallback)(() => {
      if (j2.length >= 2) {
        let t3 = (p2 == null ? void 0 : p2.sections) ?? [], n3 = String.fromCharCode(65 + t3.length % 26);
        m2({
          sections: [
            ...t3,
            {
              id: `section-${n3}-${Date.now()}`,
              view: e2,
              label: n3,
              points: j2
            }
          ]
        });
      }
      A2(false), re2([]), M2(null);
    }, [
      j2,
      p2,
      m2,
      e2
    ]), ve2 = (0, Z.useCallback)((e3) => {
      let t3 = B2(e3.clientX, e3.clientY);
      t3 && re2((e4) => [
        ...e4,
        [
          t3.x,
          t3.y
        ]
      ]);
    }, [
      B2
    ]), ye2 = (0, Z.useCallback)((e3) => {
      let t3 = B2(e3.clientX, e3.clientY);
      t3 && M2(t3);
    }, [
      B2
    ]);
    if ((0, Z.useEffect)(() => {
      if (!ne2) return;
      let e3 = (e4) => {
        e4.key === `Escape` ? (A2(false), re2([]), M2(null)) : e4.key === `Enter` && _e2();
      };
      return window.addEventListener(`keydown`, e3), () => window.removeEventListener(`keydown`, e3);
    }, [
      ne2,
      _e2
    ]), !F2 || P2.length === 0) return (0, Q.jsx)(`div`, {
      className: `flex h-full w-full items-center justify-center`,
      style: {
        backgroundColor: N2.background,
        color: N2.label
      },
      children: `No geometry to display`
    });
    let be2 = F2.max_x - F2.min_x, xe2 = F2.max_y - F2.min_y, Se2 = Math.max(be2, xe2) * 0.3, Ce2 = (be2 + 2 * Se2) / r2, Te2 = (xe2 + 2 * Se2) / r2, Ee2 = F2.min_x - Se2 + (be2 + 2 * Se2 - Ce2) / 2 - i2.x, De2 = -F2.max_y - Se2 + (xe2 + 2 * Se2 - Te2) / 2 - i2.y, Oe2 = `${Ee2} ${De2} ${Ce2} ${Te2}`, W2 = Math.max(be2, xe2) * 5e-3 / Math.sqrt(r2), G2 = W2 * 0.6, K2 = W2 * 0.4, ke2 = Ce2 * 0.015, q2 = I2 ? Ce2 * 0.3 / I2.width : 0, Ae2 = I2 ? I2.height * q2 : 0, je2 = I2 ? Ae2 + ke2 : 0, Me2 = L2 ? Ce2 * 0.3 / L2.width : 0;
    return (0, Q.jsxs)(`svg`, {
      ref: y2,
      className: `h-full w-full select-none`,
      viewBox: Oe2,
      preserveAspectRatio: `xMidYMid meet`,
      style: {
        backgroundColor: N2.background,
        cursor: E2 || ne2 ? `crosshair` : b2 ? `grabbing` : `default`
      },
      onPointerDown: E2 || ne2 ? void 0 : z2,
      onPointerMove: E2 || ne2 ? void 0 : le2,
      onPointerUp: E2 || ne2 ? void 0 : ue2,
      onPointerLeave: E2 || ne2 ? void 0 : ue2,
      onMouseDown: E2 ? V2 : void 0,
      onMouseMove: E2 ? he2 : ne2 ? ye2 : void 0,
      onMouseUp: E2 ? ge2 : void 0,
      onClick: E2 ? void 0 : ne2 ? ve2 : fe2,
      onDoubleClick: ne2 ? _e2 : pe2,
      children: [
        v2 && (0, Q.jsx)(`defs`, {
          children: (0, Q.jsx)(`pattern`, {
            id: `grid`,
            width: W2 * 20,
            height: W2 * 20,
            patternUnits: `userSpaceOnUse`,
            children: (0, Q.jsx)(`path`, {
              d: `M ${W2 * 20} 0 L 0 0 0 ${W2 * 20}`,
              fill: `none`,
              stroke: `#1a1a1a`,
              strokeWidth: W2 * 0.2
            })
          })
        }),
        v2 && (0, Q.jsx)(`rect`, {
          x: Ee2,
          y: De2,
          width: Ce2,
          height: Te2,
          fill: `url(#grid)`
        }),
        P2.map(({ partId: e3, view: n3 }) => {
          let r3 = h2.has(e3);
          return (0, Q.jsxs)(`g`, {
            onClick: (t3) => de2(e3, t3),
            style: {
              cursor: `pointer`
            },
            children: [
              r3 && (0, Q.jsx)(`g`, {
                children: n3.edges.filter((e4) => e4.visibility === `Visible`).map((e4, t3) => (0, Q.jsx)(`line`, {
                  x1: e4.start.x,
                  y1: -e4.start.y,
                  x2: e4.end.x,
                  y2: -e4.end.y,
                  stroke: N2.selection,
                  strokeWidth: W2 * 3,
                  strokeLinecap: `round`,
                  opacity: 0.3
                }, `sel-${t3}`))
              }),
              n3.edges.filter((e4) => e4.visibility === `Visible`).map((e4, t3) => (0, Q.jsx)(`line`, {
                x1: e4.start.x,
                y1: -e4.start.y,
                x2: e4.end.x,
                y2: -e4.end.y,
                stroke: r3 ? N2.selection : N2.edge,
                strokeWidth: W2,
                strokeLinecap: `round`
              }, `v-${t3}`)),
              t2 && n3.edges.filter((e4) => e4.visibility === `Hidden`).map((e4, t3) => (0, Q.jsx)(`line`, {
                x1: e4.start.x,
                y1: -e4.start.y,
                x2: e4.end.x,
                y2: -e4.end.y,
                stroke: r3 ? N2.selection : N2.hiddenEdge,
                strokeWidth: G2,
                strokeDasharray: `${W2 * 3},${W2 * 2}`,
                strokeLinecap: `round`,
                opacity: r3 ? 0.7 : 1
              }, `h-${t3}`))
            ]
          }, e3);
        }),
        ce2.map((e3, t3) => (0, Q.jsxs)(`g`, {
          className: `dimension`,
          pointerEvents: `none`,
          children: [
            e3.lines.map(([e4, t4], n3) => (0, Q.jsx)(`line`, {
              x1: e4.x,
              y1: -e4.y,
              x2: t4.x,
              y2: -t4.y,
              stroke: N2.dimension,
              strokeWidth: K2
            }, `l-${n3}`)),
            e3.arcs.map((e4, t4) => {
              let n3 = e4.center.x + e4.radius * Math.cos(e4.start_angle), r3 = -(e4.center.y + e4.radius * Math.sin(e4.start_angle)), i3 = e4.center.x + e4.radius * Math.cos(e4.end_angle), a3 = -(e4.center.y + e4.radius * Math.sin(e4.end_angle)), o3 = +(Math.abs(e4.end_angle - e4.start_angle) > Math.PI), s3 = e4.end_angle > e4.start_angle ? 0 : 1;
              return (0, Q.jsx)(`path`, {
                d: `M ${n3} ${r3} A ${e4.radius} ${e4.radius} 0 ${o3} ${s3} ${i3} ${a3}`,
                fill: `none`,
                stroke: N2.dimension,
                strokeWidth: K2
              }, `arc-${t4}`);
            }),
            e3.texts.map((e4, t4) => (0, Q.jsx)(`text`, {
              x: e4.position.x,
              y: -e4.position.y,
              fontSize: e4.height / Math.sqrt(r2),
              fill: N2.dimension,
              textAnchor: `middle`,
              dominantBaseline: `middle`,
              fontFamily: `monospace`,
              fontWeight: v2 ? `500` : `400`,
              transform: `rotate(${-e4.rotation * 180 / Math.PI}, ${e4.position.x}, ${-e4.position.y})`,
              children: e4.text
            }, `t-${t4}`)),
            e3.arrows.map((e4, t4) => {
              let n3 = e4.direction, i3 = e4.size / Math.sqrt(r2), a3 = e4.tip.x, o3 = -e4.tip.y, s3 = Math.PI / 6, c3 = a3 + i3 * Math.cos(n3 + Math.PI - s3), l3 = o3 - i3 * Math.sin(n3 + Math.PI - s3), u3 = a3 + i3 * Math.cos(n3 + Math.PI + s3), d3 = o3 - i3 * Math.sin(n3 + Math.PI + s3);
              return (0, Q.jsx)(`polygon`, {
                points: `${a3},${o3} ${c3},${l3} ${u3},${d3}`,
                fill: N2.dimension
              }, `a-${t4}`);
            })
          ]
        }, `dim-${t3}`)),
        c2.map((e3) => {
          let t3 = e3.width / 2, n3 = e3.height / 2;
          return (0, Q.jsxs)(`g`, {
            pointerEvents: `none`,
            children: [
              (0, Q.jsx)(`circle`, {
                cx: e3.centerX,
                cy: -e3.centerY,
                r: Math.max(t3, n3) * 1.2,
                fill: `none`,
                stroke: N2.detailRegion,
                strokeWidth: W2 * 0.8,
                strokeDasharray: `${W2 * 2},${W2}`
              }),
              (0, Q.jsx)(`text`, {
                x: e3.centerX,
                y: -e3.centerY - Math.max(t3, n3) * 1.2 - W2 * 3,
                fontSize: W2 * 6,
                fill: N2.detailRegion,
                textAnchor: `middle`,
                fontFamily: `monospace`,
                fontWeight: `600`,
                children: e3.label
              })
            ]
          }, e3.id);
        }),
        se2.map(({ def: e3 }) => {
          let t3 = e3.points;
          if (t3.length < 2) return null;
          let n3 = t3[0], r3 = t3[t3.length - 1];
          return (0, Q.jsxs)(`g`, {
            pointerEvents: `none`,
            children: [
              (0, Q.jsx)(`polyline`, {
                points: t3.map(([e4, t4]) => `${e4},${-t4}`).join(` `),
                fill: `none`,
                stroke: N2.section,
                strokeWidth: W2,
                strokeDasharray: `${W2 * 6},${W2 * 2},${W2 * 2},${W2 * 2}`
              }),
              [
                n3,
                r3
              ].map(([t4, n4], r4) => (0, Q.jsx)(`text`, {
                x: t4,
                y: -n4 - W2 * 4,
                fontSize: W2 * 6,
                fill: N2.section,
                textAnchor: `middle`,
                fontFamily: `monospace`,
                fontWeight: `600`,
                children: e3.label
              }, `cut-${e3.id}-t-${r4}`))
            ]
          }, `cut-${e3.id}`);
        }),
        ne2 && j2.length > 0 && (0, Q.jsxs)(`g`, {
          pointerEvents: `none`,
          children: [
            (0, Q.jsx)(`polyline`, {
              points: [
                ...j2,
                ...ie2 ? [
                  [
                    ie2.x,
                    ie2.y
                  ]
                ] : []
              ].map(([e3, t3]) => `${e3},${-t3}`).join(` `),
              fill: `none`,
              stroke: N2.section,
              strokeWidth: W2,
              strokeDasharray: `${W2 * 3},${W2 * 2}`
            }),
            j2.map(([e3, t3], n3) => (0, Q.jsx)(`circle`, {
              cx: e3,
              cy: -t3,
              r: W2 * 2,
              fill: N2.section
            }, `sp-${n3}`))
          ]
        }),
        E2 && D2 && k2 && (0, Q.jsx)(`rect`, {
          x: Math.min(D2.x, k2.x),
          y: -Math.max(D2.y, k2.y),
          width: Math.abs(k2.x - D2.x),
          height: Math.abs(k2.y - D2.y),
          fill: N2.detailRegionFill,
          stroke: N2.detailRegion,
          strokeWidth: W2,
          strokeDasharray: `${W2 * 3},${W2 * 2}`,
          pointerEvents: `none`
        }),
        (0, Q.jsxs)(`text`, {
          x: Ee2 + 5 / r2,
          y: De2 + 5 / r2 + W2 * 8,
          fontSize: W2 * 8,
          fill: N2.label,
          textAnchor: `start`,
          dominantBaseline: `hanging`,
          fontFamily: `monospace`,
          fontWeight: `500`,
          pointerEvents: `none`,
          children: [
            e2.toUpperCase(),
            ` VIEW`
          ]
        }),
        (0, Q.jsxs)(`text`, {
          x: Ee2 + Ce2 - 5 / r2,
          y: De2 + 5 / r2 + W2 * 8,
          fontSize: W2 * 6,
          fill: N2.label,
          textAnchor: `end`,
          dominantBaseline: `hanging`,
          fontFamily: `monospace`,
          pointerEvents: `none`,
          children: [
            Math.round(r2 * 100),
            `%`
          ]
        }),
        oe2.map(({ def: e3, view: n3 }, r3) => {
          let i3 = Math.min(Ce2, Te2) * 0.25, a3 = i3 * 0.1, o3 = Ee2 + Ce2 - i3 - a3, s3 = De2 + Te2 - i3 * (r3 + 1) - a3 * (r3 + 1) - je2, c3 = n3.bounds.max_x - n3.bounds.min_x, l3 = n3.bounds.max_y - n3.bounds.min_y, u3 = Math.min(i3 * 0.8 / (c3 || 1), i3 * 0.8 / (l3 || 1)), d3 = o3 + i3 / 2, f3 = s3 + i3 / 2;
          return (0, Q.jsxs)(`g`, {
            children: [
              (0, Q.jsx)(`rect`, {
                x: o3,
                y: s3,
                width: i3,
                height: i3,
                fill: N2.background,
                stroke: N2.detailRegion,
                strokeWidth: W2
              }),
              (0, Q.jsxs)(`text`, {
                x: o3 + W2 * 2,
                y: s3 + W2 * 5,
                fontSize: W2 * 5,
                fill: N2.detailRegion,
                fontFamily: `monospace`,
                fontWeight: `600`,
                pointerEvents: `none`,
                children: [
                  `DETAIL `,
                  e3.label,
                  ` (`,
                  e3.scale,
                  `:1)`
                ]
              }),
              (0, Q.jsxs)(`g`, {
                transform: `translate(${d3}, ${f3}) scale(${u3})`,
                children: [
                  n3.edges.filter((e4) => e4.visibility === `Visible`).map((t3, n4) => (0, Q.jsx)(`line`, {
                    x1: t3.start.x,
                    y1: -t3.start.y,
                    x2: t3.end.x,
                    y2: -t3.end.y,
                    stroke: N2.edge,
                    strokeWidth: W2 / u3,
                    strokeLinecap: `round`
                  }, `dv-${e3.id}-v-${n4}`)),
                  t2 && n3.edges.filter((e4) => e4.visibility === `Hidden`).map((t3, n4) => (0, Q.jsx)(`line`, {
                    x1: t3.start.x,
                    y1: -t3.start.y,
                    x2: t3.end.x,
                    y2: -t3.end.y,
                    stroke: N2.hiddenEdge,
                    strokeWidth: G2 / u3,
                    strokeDasharray: `${W2 * 3 / u3},${W2 * 2 / u3}`,
                    strokeLinecap: `round`
                  }, `dv-${e3.id}-h-${n4}`))
                ]
              })
            ]
          }, e3.id);
        }),
        se2.map(({ def: e3, view: t3 }, n3) => {
          let r3 = Math.min(Ce2, Te2) * 0.28, i3 = r3 * 0.1, a3 = Ee2 + i3, o3 = De2 + Te2 - r3 * (n3 + 1) - i3 * (n3 + 1), s3 = t3.bounds.max_x - t3.bounds.min_x, c3 = t3.bounds.max_y - t3.bounds.min_y, l3 = Math.min(r3 * 0.8 / (s3 || 1), r3 * 0.8 / (c3 || 1)), u3 = (t3.bounds.min_x + t3.bounds.max_x) / 2, d3 = (t3.bounds.min_y + t3.bounds.max_y) / 2, f3 = a3 + r3 / 2, p3 = o3 + r3 / 2;
          return (0, Q.jsxs)(`g`, {
            pointerEvents: `none`,
            children: [
              (0, Q.jsx)(`rect`, {
                x: a3,
                y: o3,
                width: r3,
                height: r3,
                fill: N2.background,
                stroke: N2.section,
                strokeWidth: W2
              }),
              (0, Q.jsxs)(`text`, {
                x: a3 + W2 * 2,
                y: o3 + W2 * 5,
                fontSize: W2 * 5,
                fill: N2.section,
                fontFamily: `monospace`,
                fontWeight: `600`,
                children: [
                  `SECTION `,
                  e3.label,
                  `-`,
                  e3.label
                ]
              }),
              (0, Q.jsxs)(`g`, {
                transform: `translate(${f3 - u3 * l3}, ${p3 + d3 * l3}) scale(${l3})`,
                children: [
                  t3.curves.map((t4, n4) => (0, Q.jsx)(`polyline`, {
                    points: [
                      ...t4.points,
                      ...t4.is_closed && t4.points.length > 0 ? [
                        t4.points[0]
                      ] : []
                    ].map((e4) => `${e4.x},${-e4.y}`).join(` `),
                    fill: `none`,
                    stroke: N2.edge,
                    strokeWidth: W2 * 1.2 / l3,
                    strokeLinecap: `round`
                  }, `sec-${e3.id}-c-${n4}`)),
                  t3.hatch_lines.map(([t4, n4], r4) => (0, Q.jsx)(`line`, {
                    x1: t4.x,
                    y1: -t4.y,
                    x2: n4.x,
                    y2: -n4.y,
                    stroke: N2.section,
                    strokeWidth: W2 * 0.5 / l3
                  }, `sec-${e3.id}-h-${r4}`))
                ]
              })
            ]
          }, `sec-${e3.id}`);
        }),
        I2 && co(I2, Ee2 + Ce2 - I2.width * q2 - ke2, De2 + Te2 - ke2, q2, N2.sheet, W2 * 0.5, `titleblock`),
        L2 && co(L2, Ee2 + Ce2 - L2.width * Me2 - ke2, De2 + Te2 - je2 - ke2 * 2, Me2, N2.sheet, W2 * 0.5, `bom`)
      ]
    });
  }
  function uo() {
    let e2 = J((e3) => e3.followMode), t2 = J((e3) => e3.setFollowMode), n2 = J((e3) => e3.setFollowingParticipant), r2 = Te((e3) => e3.participants), i2 = (0, Z.useCallback)((e3) => {
      t2(e3), n2(e3 === `free` ? null : `ai`);
    }, [
      t2,
      n2
    ]), a2 = [];
    if (r2.forEach((e3) => {
      e3.id !== `local` && a2.push(e3);
    }), a2.length === 0) return null;
    let o2 = (t3, n3, r3) => (0, Q.jsx)(`button`, {
      type: `button`,
      onClick: () => i2(t3),
      title: r3,
      className: $e(`px-2 py-0.5 text-[10px] font-medium rounded-sm transition-colors`, e2 === t3 ? `bg-brand text-white` : `text-text-muted hover:text-text hover:bg-hover`),
      children: n3
    });
    return (0, Q.jsxs)(`div`, {
      className: `pointer-events-auto flex items-center gap-2 rounded-md border border-border/40 bg-surface/90 px-2 py-1 shadow-sm backdrop-blur`,
      children: [
        a2.map((e3) => (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, Q.jsx)(`span`, {
              "aria-hidden": true,
              className: `inline-block h-2 w-2 rounded-full`,
              style: {
                background: e3.color
              }
            }),
            (0, Q.jsx)(`span`, {
              className: `text-[10px] font-semibold text-text`,
              children: e3.name
            })
          ]
        }, e3.id)),
        (0, Q.jsx)(`div`, {
          className: `h-3 w-px bg-border/40`,
          "aria-hidden": true
        }),
        (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-0.5`,
          role: `group`,
          "aria-label": `AI camera follow mode`,
          children: [
            o2(`free`, `Free`, `Free: ignore the AI camera`),
            o2(`follow`, `Follow`, `Follow: aim your view at the AI's camera frustum`),
            o2(`lock`, `Lock`, `Lock: see through the AI's camera in realtime`)
          ]
        })
      ]
    });
  }
  function fo() {
    let e2 = X((e3) => e3.active), t2 = U((e3) => e3.document.schematic), n2 = ke((e3) => e3.activeBoardNodeId), r2 = U((e3) => e3.document), i2 = H((e3) => e3.scene), a2 = U((e3) => e3.parts), o2 = n2 == null ? null : De(r2, n2);
    (0, Z.useEffect)(() => {
      if (!e2 || !t2) return;
      let r3 = setTimeout(async () => {
        let e3 = await at(t2), r4 = X.getState();
        r4.setNetlist(e3);
        let i3 = new Set(t2.components.map((e4) => e4.ref)), a3 = new Set(((o2 == null ? void 0 : o2.footprints) ?? []).map((e4) => e4.ref));
        r4.setOrphanFootprints([
          ...a3
        ].filter((e4) => !i3.has(e4))), r4.setUnplacedComponents([
          ...i3
        ].filter((e4) => !a3.has(e4))), n2 != null && U.getState().syncSchematicToPcb(n2, e3, {
          placeUnplaced: false
        });
      }, 200);
      return () => clearTimeout(r3);
    }, [
      t2,
      o2,
      e2,
      n2
    ]), (0, Z.useEffect)(() => {
      if (!e2 || !o2) return;
      let t3 = setTimeout(async () => {
        let e3 = await ct(o2);
        e3.status === `ok` && X.getState().setDrcViolations(e3.value);
      }, 300);
      return () => clearTimeout(t3);
    }, [
      o2,
      e2
    ]), (0, Z.useEffect)(() => {
      if (!e2 || !t2) return;
      let n3 = setTimeout(async () => {
        let e3 = await lt(t2);
        e3.status === `ok` && X.getState().setErcViolations(e3.value);
      }, 300);
      return () => clearTimeout(n3);
    }, [
      t2,
      e2
    ]), (0, Z.useEffect)(() => {
      if (!e2 || !o2) {
        X.getState().setInterferingFootprints([]);
        return;
      }
      let t3 = setTimeout(async () => {
        let e3 = await st(o2);
        X.getState().setComponentBodies(e3);
        let t4 = [];
        i2 == null ? void 0 : i2.parts.forEach((e4, n3) => {
          var _a2;
          let r3 = a2[n3];
          if (r3 && Ie(r3)) return;
          let i3 = Ct((_a2 = e4.mesh) == null ? void 0 : _a2.positions);
          i3 && t4.push(i3);
        });
        let s2 = n2 == null ? null : Ae(a2, n2), c2;
        if (s2) {
          let e4 = W(r2, s2), t5 = new O().compose(new V(e4.position.x, e4.position.y, e4.position.z), new F().setFromEuler(new ae(e4.rotationDeg.x * Math.PI / 180, e4.rotationDeg.y * Math.PI / 180, e4.rotationDeg.z * Math.PI / 180, `ZYX`)), new V(e4.scale.x, e4.scale.y, e4.scale.z));
          if (!t5.equals(new O())) {
            let e5 = new V();
            c2 = (n3, r3, i3) => (e5.set(n3, r3, i3).applyMatrix4(t5), [
              e5.x,
              e5.y,
              e5.z
            ]);
          }
        }
        X.getState().setInterferingFootprints(St(e3, t4, 0, c2));
      }, 400);
      return () => clearTimeout(t3);
    }, [
      o2,
      e2,
      i2,
      a2
    ]);
  }
  function po() {
    let e2 = X((e3) => e3.active), t2 = U((e3) => e3.document), n2 = ke((e3) => e3.activeBoardNodeId), r2 = n2 == null ? null : De(t2, n2), i2 = (0, Z.useRef)(null), a2 = (0, Z.useRef)(null);
    (0, Z.useEffect)(() => {
      if (!e2 || !r2) return;
      let t3 = String(n2), o2 = false, s2 = setTimeout(async () => {
        let e3 = await ct(r2);
        if (o2 || e3.status !== `ok`) return;
        let n3 = e3.value, s3 = zt(n3), c2 = X.getState();
        if (a2.current !== t3) {
          a2.current = t3, i2.current = s3, c2.clearReceipt();
          return;
        }
        let l2 = i2.current;
        if (i2.current = s3, !l2) return;
        let u2 = c2.consumePendingMutation(), d2 = Rt({
          tool: (u2 == null ? void 0 : u2.tool) ?? `edit`,
          args: (u2 == null ? void 0 : u2.args) ?? {},
          before: l2,
          after: s3
        }, c2.receiptEntries.length);
        d2.verdict !== `no-op` && c2.appendReceiptEntry(d2);
      }, 350);
      return () => {
        o2 = true, clearTimeout(s2);
      };
    }, [
      r2,
      e2,
      n2
    ]);
  }
  var mo = 80;
  function ho() {
    let e2 = X((e3) => e3.active), t2 = X((e3) => e3.simulating), n2 = X((e3) => e3.netlist), r2 = U((e3) => {
      var _a2;
      return (_a2 = e3.document.schematic) == null ? void 0 : _a2.components;
    }), i2 = (0, Z.useMemo)(() => !t2 || !r2 || !n2 ? `` : JSON.stringify({
      c: r2.map((e3) => {
        var _a2;
        return [
          e3.ref,
          e3.value,
          (_a2 = e3.properties) == null ? void 0 : _a2.symbolId
        ];
      }),
      n: n2.nets.map((e3) => [
        e3.name,
        e3.connections.length
      ])
    }), [
      t2,
      r2,
      n2
    ]), a2 = (0, Z.useRef)(null), o2 = (0, Z.useRef)(null);
    (0, Z.useEffect)(() => {
      var _a2;
      if (!e2 || !t2 || !i2) return;
      let n3 = (_a2 = U.getState().document.schematic) == null ? void 0 : _a2.components, r3 = X.getState().netlist;
      if (!n3 || !r3) return;
      let s2 = false, c2 = wt(n3, r3), l2 = X.getState();
      if (c2.spec.devices.length === 0) l2.clearSim();
      else return l2.setSimMaps(Object.fromEntries(c2.netToNode), Object.fromEntries(c2.refToDevice)), nt(JSON.stringify(c2.spec)).then((e3) => {
        if (s2 || !e3) return;
        a2.current = e3;
        let t3 = () => {
          if (!s2 && a2.current) {
            try {
              let e4 = a2.current.step(mo);
              X.getState().setSimObservation(e4.nodeVoltages, e4.deviceCurrents, e4.rotorAngles);
            } catch (e4) {
              console.warn(`[circuit-sim] step failed`, e4);
              return;
            }
            o2.current = requestAnimationFrame(t3);
          }
        };
        o2.current = requestAnimationFrame(t3);
      }), () => {
        if (s2 = true, o2.current != null && cancelAnimationFrame(o2.current), o2.current = null, a2.current) {
          try {
            a2.current.free();
          } catch {
          }
          a2.current = null;
        }
      };
    }, [
      e2,
      t2,
      i2
    ]);
  }
  var go = (0, Z.lazy)(() => Ze(() => import("./SchematicView-14l96NRE.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }).then((e2) => ({
    default: e2.SchematicView
  })), __vite__mapDeps([4,1,5,6,7,8,0,2,3,9]))), _o = (0, Z.lazy)(() => Ze(() => import("./ElectronicsViewToggle-CsgxNpAy.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }).then((e2) => ({
    default: e2.ElectronicsViewToggle
  })), __vite__mapDeps([10,11,1,5,6,12,13,14,9,8,0,2,3,15]))), vo = (0, Z.lazy)(() => Ze(() => import("./LengthTunePanel-COybTS_Y.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }).then((e2) => ({
    default: e2.LengthTunePanel
  })), __vite__mapDeps([16,14,9,1,5,6,8,0,2,3]))), yo = (0, Z.lazy)(() => Ze(() => import("./ReceiptPanel-DcVjNsQl.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }).then((e2) => ({
    default: e2.ReceiptPanel
  })), __vite__mapDeps([17,14,9,1,5,6,8,0,2,3]))), bo = (0, Z.lazy)(() => Ze(() => import("./PcbGettingStarted-Ct5fYMtj.js").then(async (m2) => {
    await m2.__tla;
    return m2;
  }).then((e2) => ({
    default: e2.PcbGettingStarted
  })), __vite__mapDeps([18,1,5,6,12,19,8,0,2,3,9,14,20,7,21]))), xo = 5;
  function So({ containerRef: e2 }) {
    let { camera: t2, size: n2 } = i(), r2 = H((e3) => e3.scene);
    return (0, Z.useEffect)(() => {
      let r3 = e2.current;
      if (!r3) return;
      let i2 = r3, a2 = false, o2 = {
        x: 0,
        y: 0
      }, s2 = false, c2 = null;
      function l2(e3) {
        e3.button === 0 && e3.pointerType === `mouse` && (s2 = e3.shiftKey, o2 = {
          x: e3.clientX,
          y: e3.clientY
        }, a2 = true, c2 = document.createElement(`div`), c2.className = `pointer-events-none absolute z-20 border-2 border-brand bg-brand/10`, c2.style.left = `0`, c2.style.top = `0`, c2.style.width = `0`, c2.style.height = `0`, c2.style.display = `none`, i2.appendChild(c2));
      }
      function u2(e3) {
        if (!a2 || !c2) return;
        let t3 = i2.getBoundingClientRect(), n3 = Math.min(o2.x, e3.clientX) - t3.left, r4 = Math.min(o2.y, e3.clientY) - t3.top, s3 = Math.abs(e3.clientX - o2.x), l3 = Math.abs(e3.clientY - o2.y);
        (s3 >= xo || l3 >= xo) && (c2.style.display = `block`, c2.style.left = `${n3}px`, c2.style.top = `${r4}px`, c2.style.width = `${s3}px`, c2.style.height = `${l3}px`);
      }
      function d2(e3) {
        if (!a2) return;
        a2 = false, c2 && (c2 = (c2.remove(), null));
        let r4 = Math.abs(e3.clientX - o2.x), l3 = Math.abs(e3.clientY - o2.y);
        if (r4 < xo && l3 < xo) return;
        let u3 = H.getState().scene;
        if (!u3) return;
        let d3 = U.getState().parts, f2 = J.getState().selectedPartIds, p2 = i2.getBoundingClientRect(), m2 = Math.min(o2.x, e3.clientX) - p2.left, h2 = Math.max(o2.x, e3.clientX) - p2.left, g2 = Math.min(o2.y, e3.clientY) - p2.top, _2 = Math.max(o2.y, e3.clientY) - p2.top, v2 = [];
        if (d3.forEach((e4, r5) => {
          let i3 = u3.parts[r5];
          if (!i3) return;
          let a3 = i3.mesh;
          if (!a3.positions.length) return;
          let o3 = new re(), s3 = new V();
          for (let e5 = 0; e5 < a3.positions.length; e5 += 3) s3.set(a3.positions[e5], a3.positions[e5 + 1], a3.positions[e5 + 2]), o3.expandByPoint(s3);
          let c3 = [
            new V(o3.min.x, o3.min.y, o3.min.z),
            new V(o3.max.x, o3.min.y, o3.min.z),
            new V(o3.min.x, o3.max.y, o3.min.z),
            new V(o3.max.x, o3.max.y, o3.min.z),
            new V(o3.min.x, o3.min.y, o3.max.z),
            new V(o3.max.x, o3.min.y, o3.max.z),
            new V(o3.min.x, o3.max.y, o3.max.z),
            new V(o3.max.x, o3.max.y, o3.max.z)
          ], l4 = 1 / 0, d4 = -1 / 0, f3 = 1 / 0, p3 = -1 / 0;
          for (let e5 of c3) {
            e5.project(t2);
            let r6 = (e5.x + 1) / 2 * n2.width, i4 = (1 - e5.y) / 2 * n2.height;
            l4 = Math.min(l4, r6), d4 = Math.max(d4, r6), f3 = Math.min(f3, i4), p3 = Math.max(p3, i4);
          }
          d4 >= m2 && l4 <= h2 && p3 >= g2 && f3 <= _2 && v2.push(e4.id);
        }), s2) {
          let e4 = /* @__PURE__ */ new Set([
            ...f2,
            ...v2
          ]);
          J.getState().selectMultiple(Array.from(e4));
        } else J.getState().selectMultiple(v2);
      }
      return i2.addEventListener(`pointerdown`, l2), window.addEventListener(`pointermove`, u2), window.addEventListener(`pointerup`, d2), () => {
        i2.removeEventListener(`pointerdown`, l2), window.removeEventListener(`pointermove`, u2), window.removeEventListener(`pointerup`, d2), c2 && c2.remove();
      };
    }, [
      t2,
      n2,
      e2,
      r2
    ]), null;
  }
  Co = function() {
    let e2 = (0, Z.useRef)(null), t2 = J((e3) => e3.clearSelection), n2 = x((e3) => e3.selectIssue), r2 = J((e3) => e3.hoveredItem), i2 = J((e3) => e3.isGizmoHovered), a2 = J((e3) => e3.isDraggingGizmo), o2 = J((e3) => e3.renderMode), s2 = J((e3) => e3.raytraceAvailable), { isDark: c2 } = we(), u2 = _t((e3) => e3.viewMode), d2 = X((e3) => e3.active), f2 = X((e3) => e3.layout), p2 = ke((e3) => e3.activeBoardNodeId) != null, m2 = E(), [h2, g2] = (0, Z.useState)(0), _2 = (0, Z.useRef)(0), v2 = (0, Z.useRef)(false), y2 = (0, Z.useCallback)(() => {
      _2.current >= 3 || (_2.current += 1, v2.current = false, g2((e3) => e3 + 1));
    }, []), S2 = (0, Z.useCallback)(() => {
      v2.current = true, performance.mark(`canvas-ready`);
    }, []);
    return (0, Z.useEffect)(() => (window.addEventListener(`vcad:gl-stuck-lost`, y2), () => window.removeEventListener(`vcad:gl-stuck-lost`, y2)), [
      y2
    ]), (0, Z.useEffect)(() => {
      let e3 = setTimeout(() => {
        v2.current || y2();
      }, 2500), t3 = setTimeout(() => {
        _2.current = 0;
      }, 12e3);
      return () => {
        clearTimeout(e3), clearTimeout(t3);
      };
    }, [
      h2,
      y2
    ]), fo(), po(), ho(), (0, Z.useEffect)(() => {
      let t3 = e2.current;
      if (!t3) return;
      let n3 = (e3) => Gt(e3.clientX, e3.clientY), r3 = (e3) => Kt(e3.clientX, e3.clientY), i3 = () => qt(), a3 = (e3) => {
        e3.preventDefault();
      };
      return t3.addEventListener(`pointerdown`, n3), window.addEventListener(`pointermove`, r3), window.addEventListener(`pointerup`, i3), window.addEventListener(`pointercancel`, i3), t3.addEventListener(`contextmenu`, a3), () => {
        t3.removeEventListener(`pointerdown`, n3), window.removeEventListener(`pointermove`, r3), window.removeEventListener(`pointerup`, i3), window.removeEventListener(`pointercancel`, i3), t3.removeEventListener(`contextmenu`, a3);
      };
    }, []), (0, Z.useEffect)(() => {
      let t3 = e2.current;
      t3 && (t3.style.cursor = r2 && !i2 && !a2 ? `pointer` : ``);
    }, [
      r2,
      i2,
      a2
    ]), u2 === `2d` ? (0, Q.jsx)(`div`, {
      className: `absolute inset-0 overflow-hidden`,
      style: {
        backgroundColor: c2 ? `#0a0a0a` : `#ffffff`
      },
      children: (0, Q.jsx)(lo, {})
    }) : (0, Q.jsxs)(`div`, {
      ref: e2,
      "data-viewport-root": true,
      className: `absolute inset-0`,
      style: {
        touchAction: `none`,
        userSelect: `none`,
        WebkitUserSelect: `none`
      },
      children: [
        (0, Q.jsx)(l, {
          frameloop: m2 ? `always` : `demand`,
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
          onPointerMissed: (e3) => {
            if (Jt()) return;
            let r3 = J.getState();
            r3.isDraggingGizmo || r3.isGizmoHovered || e3.metaKey || e3.shiftKey || (d2 || t2(), n2(null));
          },
          onCreated: S2,
          shadows: `soft`,
          gl: {
            alpha: true,
            antialias: true,
            logarithmicDepthBuffer: true,
            toneMapping: 4,
            toneMappingExposure: 1,
            outputColorSpace: ce,
            preserveDrawingBuffer: true
          },
          style: {
            background: `transparent`
          },
          children: (0, Q.jsxs)(T, {
            store: b,
            children: [
              (0, Q.jsx)(oo, {
                mode: `3d`,
                pcbEditFocus: p2
              }),
              !d2 && (0, Q.jsx)(So, {
                containerRef: e2
              })
            ]
          })
        }, h2),
        d2 && (0, Q.jsxs)(Q.Fragment, {
          children: [
            f2 === `schematic` && (0, Q.jsx)(Z.Suspense, {
              fallback: null,
              children: (0, Q.jsx)(go, {})
            }),
            (0, Q.jsx)(Z.Suspense, {
              fallback: null,
              children: (0, Q.jsx)(vo, {})
            }),
            (0, Q.jsx)(Z.Suspense, {
              fallback: null,
              children: (0, Q.jsx)(yo, {})
            }),
            (0, Q.jsx)(Z.Suspense, {
              fallback: null,
              children: (0, Q.jsx)(bo, {})
            }),
            (0, Q.jsx)(Z.Suspense, {
              fallback: null,
              children: (0, Q.jsx)(_o, {})
            })
          ]
        }),
        !d2 && !m2 && o2 === `raytrace` && s2 && (0, Q.jsx)(Zr, {}),
        (0, Q.jsx)($t, {}),
        !d2 && (0, Q.jsx)(`div`, {
          className: `pointer-events-none absolute top-3 right-3 z-10 flex items-center gap-2`,
          children: (0, Q.jsx)(uo, {})
        })
      ]
    });
  };
});
export {
  Co as Viewport,
  __tla
};
