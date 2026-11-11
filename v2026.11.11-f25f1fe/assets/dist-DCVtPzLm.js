const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dist-CG_6leuq.js","assets/rolldown-runtime-COiEfhsA.js","assets/wasm-singleton-BebcX_Il.js","assets/preload-helper-H3bccnwO.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { S as e, x as t, __tla as __tla_0 } from "./dist-CG_6leuq.js";
import { t as n } from "./react-Cf1qM0wN.js";
import { n as r, t as i, __tla as __tla_1 } from "./wasm-singleton-BebcX_Il.js";
import { t as a } from "./preload-helper-H3bccnwO.js";
let et, on, Et, un, Ue, ln, u, K, p, Kt, ht, Ot, Wt, wt, gt, Ut, Yt, Jt, sn, qt, Ye, Ht, hn, Pe, dn, d, _t, At, O, T, dt, C, _n, we, nr, Se, pn, Le, Zn, Ie, Bn, De, Qe, kn, je, bn, xe, Sn, Fe, $n, Ve, rn, U, Dn, Ce, Tn, Ne, rr, He, Xn, ke, On, Ee, vt, Qn, ze, qn, Me, ir, ye, Gn, Oe, gn, Ae, cn, be, fn, Te, mn, Re, Pt;
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
  })()
]).then(async () => {
  var _a;
  function o(e2, t2) {
    return {
      x: e2.x * t2,
      y: e2.y * t2,
      z: e2.z * t2
    };
  }
  function s(e2, t2) {
    return {
      x: e2.y * t2.z - e2.z * t2.y,
      y: e2.z * t2.x - e2.x * t2.z,
      z: e2.x * t2.y - e2.y * t2.x
    };
  }
  function c(e2) {
    return Math.sqrt(e2.x * e2.x + e2.y * e2.y + e2.z * e2.z);
  }
  function l(e2) {
    let t2 = c(e2);
    return t2 < 1e-10 ? {
      x: 0,
      y: 0,
      z: 1
    } : o(e2, 1 / t2);
  }
  u = function() {
    return {
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
  };
  d = {
    fill_type: `manual`,
    angle_deg: 0,
    density_mm: 0.4,
    underlay: false,
    max_stitch_length_mm: 7
  };
  function f() {
    return {
      version: `0.1`,
      nodes: {},
      materials: {},
      part_materials: {},
      roots: [],
      mates: []
    };
  }
  p = function(e2) {
    let t2 = f(), n2 = e2.split(`
`), r2 = 0, i2 = 0;
    for (; r2 < n2.length; ) {
      let e3 = n2[r2].trim();
      if (!e3 || e3.startsWith(`#`)) {
        r2++;
        continue;
      }
      let a2 = ee(e3);
      if (a2.length === 0) {
        r2++;
        continue;
      }
      let o2 = a2[0];
      switch (o2) {
        case `M`:
          ne(t2, a2, r2);
          break;
        case `ROOT`:
          re(t2, a2, r2);
          break;
        case `PDEF`:
          ie(t2, a2, r2);
          break;
        case `INST`:
          ae(t2, a2, r2);
          break;
        case `JFIX`:
        case `JREV`:
        case `JSLD`:
        case `JCYL`:
        case `JBAL`:
        case `JFRE`:
          oe(t2, o2, a2, r2);
          break;
        case `GROUND`:
          if (a2.length !== 2) throw new _(r2, `GROUND requires 1 arg, got ${a2.length - 1}`);
          t2.groundInstanceId = m(a2[1]);
          break;
        case `ENV`:
          se(t2, a2, r2);
          break;
        case `BG`:
          ce(t2, a2, r2);
          break;
        case `LDIR`:
        case `LPNT`:
        case `LSPT`:
        case `LAREA`:
          le(t2, o2, a2, r2);
          break;
        case `AO`:
          ue(t2, a2, r2);
          break;
        case `BLOOM`:
          de(t2, a2, r2);
          break;
        case `VIG`:
          fe(t2, a2, r2);
          break;
        case `TONE`:
          pe(t2, a2, r2);
          break;
        case `EXP`:
          me(t2, a2, r2);
          break;
        case `CAM`:
          he(t2, a2, r2);
          break;
        default: {
          let a3 = i2, [o3, s2, c2] = ge(e3, r2, n2);
          t2.nodes[a3.toString()] = {
            id: a3,
            name: s2 ?? null,
            op: o3
          }, i2++, r2 = c2;
        }
      }
      r2++;
    }
    if (t2.roots.length === 0 && Object.keys(t2.nodes).length > 0) {
      let e3 = /* @__PURE__ */ new Set();
      for (let n4 of Object.values(t2.nodes)) for (let t3 of te(n4.op)) e3.add(t3);
      let n3 = Object.keys(t2.nodes).map(Number).filter((t3) => !e3.has(t3)).reduce((e4, t3) => Math.max(e4, t3), 0);
      Object.keys(t2.materials).length === 0 && (t2.materials.default = {
        name: `default`,
        color: [
          0.8,
          0.8,
          0.8
        ],
        metallic: 0,
        roughness: 0.5
      }), t2.roots.push({
        root: n3,
        material: Object.keys(t2.materials)[0] ?? `default`
      });
    }
    return t2;
  };
  function ee(e2) {
    let t2 = [], n2 = ``, r2 = false;
    for (let i2 = 0; i2 < e2.length; i2++) {
      let a2 = e2[i2];
      a2 === `"` && (i2 === 0 || e2[i2 - 1] !== `\\`) ? r2 ? (n2 += a2, t2.push(n2), n2 = ``, r2 = false) : (n2.trim() && t2.push(...n2.trim().split(/\s+/)), n2 = a2, r2 = true) : r2 ? n2 += a2 : /\s/.test(a2) ? (n2.trim() && t2.push(n2.trim()), n2 = ``) : n2 += a2;
    }
    return n2.trim() && t2.push(n2.trim()), t2;
  }
  function m(e2) {
    return e2.startsWith(`"`) && e2.endsWith(`"`) && e2.length >= 2 ? e2.slice(1, -1).replace(/\\"/g, `"`).replace(/\\\\/g, `\\`) : e2;
  }
  function h(e2, t2, n2) {
    let r2 = parseInt(e2, 10);
    if (!Number.isFinite(r2)) throw new _(t2, `expected integer${n2 ? ` for ${n2}` : ``}, got ${JSON.stringify(e2)}`);
    return r2;
  }
  function g(e2, t2, n2) {
    let r2 = parseFloat(e2);
    if (!Number.isFinite(r2)) throw new _(t2, `expected finite number${n2 ? ` for ${n2}` : ``}, got ${JSON.stringify(e2)}`);
    return r2;
  }
  function te(e2) {
    switch (e2.type) {
      case `Union`:
      case `Difference`:
      case `Intersection`:
        return [
          e2.left,
          e2.right
        ];
      case `Translate`:
      case `Rotate`:
      case `Scale`:
      case `LinearPattern`:
      case `CircularPattern`:
      case `Shell`:
      case `Fillet`:
      case `Chamfer`:
        return [
          e2.child
        ];
      case `Extrude`:
      case `Revolve`:
      case `Sweep`:
        return [
          e2.sketch
        ];
      case `Loft`:
        return e2.sketches;
      case `PcbBoard`:
        return [];
      case `EmbroideryPattern`:
        return [];
      default:
        return [];
    }
  }
  function ne(e2, t2, n2) {
    if (t2.length < 7) throw new _(n2, `M requires at least 6 args, got ${t2.length - 1}`);
    let r2 = m(t2[1]), i2 = [
      g(t2[2], n2, `color.r`),
      g(t2[3], n2, `color.g`),
      g(t2[4], n2, `color.b`)
    ], a2 = g(t2[5], n2, `metallic`), o2 = g(t2[6], n2, `roughness`), s2 = t2[7] ? g(t2[7], n2, `density`) : void 0, c2 = t2[8] ? g(t2[8], n2, `friction`) : void 0;
    e2.materials[r2] = {
      name: r2,
      color: i2,
      metallic: a2,
      roughness: o2,
      density: s2,
      friction: c2
    };
  }
  function re(e2, t2, n2) {
    if (t2.length < 3) throw new _(n2, `ROOT requires at least 2 args, got ${t2.length - 1}`);
    let r2 = h(t2[1], n2, `root`), i2 = m(t2[2]), a2 = t2[3] !== `hidden` && void 0;
    e2.roots.push({
      root: r2,
      material: i2,
      visible: a2
    });
  }
  function ie(e2, t2, n2) {
    if (t2.length < 4) throw new _(n2, `PDEF requires at least 3 args, got ${t2.length - 1}`);
    let r2 = m(t2[1]), i2 = m(t2[2]), a2 = h(t2[3], n2, `root`), o2 = t2[4] ? m(t2[4]) : void 0;
    e2.partDefs || (e2.partDefs = {}), e2.partDefs[r2] = {
      id: r2,
      name: i2,
      root: a2,
      defaultMaterial: o2
    };
  }
  function ae(e2, t2, n2) {
    if (t2.length < 13) throw new _(n2, `INST requires at least 12 args, got ${t2.length - 1}`);
    let r2 = m(t2[1]), i2 = m(t2[2]), a2 = m(t2[3]), o2 = {
      translation: {
        x: parseFloat(t2[4]),
        y: parseFloat(t2[5]),
        z: parseFloat(t2[6])
      },
      rotation: {
        x: parseFloat(t2[7]),
        y: parseFloat(t2[8]),
        z: parseFloat(t2[9])
      },
      scale: {
        x: parseFloat(t2[10]),
        y: parseFloat(t2[11]),
        z: parseFloat(t2[12])
      }
    }, s2 = t2[13] ? m(t2[13]) : void 0;
    e2.instances || (e2.instances = []), e2.instances.push({
      id: r2,
      partDefId: i2,
      name: a2,
      transform: o2,
      material: s2
    });
  }
  function oe(e2, t2, n2, r2) {
    e2.joints || (e2.joints = []);
    let i2 = (e3) => e3 === `_` ? null : m(e3);
    switch (t2) {
      case `JFIX`:
        if (n2.length < 10) throw new _(r2, `JFIX requires 9 args, got ${n2.length - 1}`);
        e2.joints.push({
          id: m(n2[1]),
          parentInstanceId: i2(n2[2]),
          childInstanceId: m(n2[3]),
          parentAnchor: {
            x: parseFloat(n2[4]),
            y: parseFloat(n2[5]),
            z: parseFloat(n2[6])
          },
          childAnchor: {
            x: parseFloat(n2[7]),
            y: parseFloat(n2[8]),
            z: parseFloat(n2[9])
          },
          kind: {
            type: `Fixed`
          },
          state: 0
        });
        break;
      case `JREV`: {
        if (n2.length < 13) throw new _(r2, `JREV requires at least 12 args, got ${n2.length - 1}`);
        let t3 = n2.length >= 15 ? [
          parseFloat(n2[13]),
          parseFloat(n2[14])
        ] : void 0;
        e2.joints.push({
          id: m(n2[1]),
          parentInstanceId: i2(n2[2]),
          childInstanceId: m(n2[3]),
          parentAnchor: {
            x: parseFloat(n2[4]),
            y: parseFloat(n2[5]),
            z: parseFloat(n2[6])
          },
          childAnchor: {
            x: parseFloat(n2[7]),
            y: parseFloat(n2[8]),
            z: parseFloat(n2[9])
          },
          kind: {
            type: `Revolute`,
            axis: {
              x: parseFloat(n2[10]),
              y: parseFloat(n2[11]),
              z: parseFloat(n2[12])
            },
            limits: t3
          },
          state: 0
        });
        break;
      }
      case `JSLD`: {
        if (n2.length < 13) throw new _(r2, `JSLD requires at least 12 args, got ${n2.length - 1}`);
        let t3 = n2.length >= 15 ? [
          parseFloat(n2[13]),
          parseFloat(n2[14])
        ] : void 0;
        e2.joints.push({
          id: m(n2[1]),
          parentInstanceId: i2(n2[2]),
          childInstanceId: m(n2[3]),
          parentAnchor: {
            x: parseFloat(n2[4]),
            y: parseFloat(n2[5]),
            z: parseFloat(n2[6])
          },
          childAnchor: {
            x: parseFloat(n2[7]),
            y: parseFloat(n2[8]),
            z: parseFloat(n2[9])
          },
          kind: {
            type: `Slider`,
            axis: {
              x: parseFloat(n2[10]),
              y: parseFloat(n2[11]),
              z: parseFloat(n2[12])
            },
            limits: t3
          },
          state: 0
        });
        break;
      }
      case `JCYL`:
        if (n2.length < 13) throw new _(r2, `JCYL requires 12 args, got ${n2.length - 1}`);
        e2.joints.push({
          id: m(n2[1]),
          parentInstanceId: i2(n2[2]),
          childInstanceId: m(n2[3]),
          parentAnchor: {
            x: parseFloat(n2[4]),
            y: parseFloat(n2[5]),
            z: parseFloat(n2[6])
          },
          childAnchor: {
            x: parseFloat(n2[7]),
            y: parseFloat(n2[8]),
            z: parseFloat(n2[9])
          },
          kind: {
            type: `Cylindrical`,
            axis: {
              x: parseFloat(n2[10]),
              y: parseFloat(n2[11]),
              z: parseFloat(n2[12])
            }
          },
          state: 0
        });
        break;
      case `JBAL`:
        if (n2.length < 10) throw new _(r2, `JBAL requires 9 args, got ${n2.length - 1}`);
        e2.joints.push({
          id: m(n2[1]),
          parentInstanceId: i2(n2[2]),
          childInstanceId: m(n2[3]),
          parentAnchor: {
            x: parseFloat(n2[4]),
            y: parseFloat(n2[5]),
            z: parseFloat(n2[6])
          },
          childAnchor: {
            x: parseFloat(n2[7]),
            y: parseFloat(n2[8]),
            z: parseFloat(n2[9])
          },
          kind: {
            type: `Ball`
          },
          state: 0
        });
        break;
      case `JFRE`:
        if (n2.length < 10) throw new _(r2, `JFRE requires 9 args, got ${n2.length - 1}`);
        e2.joints.push({
          id: m(n2[1]),
          parentInstanceId: i2(n2[2]),
          childInstanceId: m(n2[3]),
          parentAnchor: {
            x: parseFloat(n2[4]),
            y: parseFloat(n2[5]),
            z: parseFloat(n2[6])
          },
          childAnchor: {
            x: parseFloat(n2[7]),
            y: parseFloat(n2[8]),
            z: parseFloat(n2[9])
          },
          kind: {
            type: `Free`
          },
          state: 0
        });
    }
  }
  function se(e2, t2, n2) {
    if (t2.length < 2) throw new _(n2, `ENV requires at least 1 arg, got ${t2.length - 1}`);
    e2.scene || (e2.scene = {});
    let r2 = m(t2[1]);
    if (r2 === `none`) {
      e2.scene.environment = {
        type: `None`
      };
      return;
    }
    if (t2.length < 3) throw new _(n2, `ENV requires 2 args, got ${t2.length - 1}`);
    let i2 = parseFloat(t2[2]);
    [
      `studio`,
      `warehouse`,
      `apartment`,
      `park`,
      `city`,
      `dawn`,
      `night`,
      `sunset`,
      `forest`,
      `neutral`
    ].includes(r2) ? e2.scene.environment = {
      type: `Preset`,
      preset: r2,
      intensity: i2
    } : e2.scene.environment = {
      type: `Custom`,
      url: r2,
      intensity: i2
    };
  }
  function ce(e2, t2, n2) {
    if (t2.length < 2) throw new _(n2, `BG requires at least 1 arg`);
    switch (e2.scene || (e2.scene = {}), t2[1]) {
      case `solid`:
        if (t2.length < 5) throw new _(n2, `BG solid requires 3 color values`);
        e2.scene.background = {
          type: `Solid`,
          color: [
            parseFloat(t2[2]),
            parseFloat(t2[3]),
            parseFloat(t2[4])
          ]
        };
        break;
      case `gradient`:
        if (t2.length < 8) throw new _(n2, `BG gradient requires 6 color values`);
        e2.scene.background = {
          type: `Gradient`,
          top: [
            parseFloat(t2[2]),
            parseFloat(t2[3]),
            parseFloat(t2[4])
          ],
          bottom: [
            parseFloat(t2[5]),
            parseFloat(t2[6]),
            parseFloat(t2[7])
          ]
        };
        break;
      case `env`:
        e2.scene.background = {
          type: `Environment`
        };
        break;
      case `transparent`:
        e2.scene.background = {
          type: `Transparent`
        };
        break;
      default:
        throw new _(n2, `Unknown BG type: ${t2[1]}`);
    }
  }
  function le(e2, t2, n2, r2) {
    switch (e2.scene || (e2.scene = {}), e2.scene.lights || (e2.scene.lights = []), t2) {
      case `LDIR`: {
        if (n2.length < 9) throw new _(r2, `LDIR requires at least 8 args, got ${n2.length - 1}`);
        let t3 = n2[9] === `shadow`;
        e2.scene.lights.push({
          id: m(n2[1]),
          color: [
            parseFloat(n2[2]),
            parseFloat(n2[3]),
            parseFloat(n2[4])
          ],
          intensity: parseFloat(n2[5]),
          kind: {
            type: `Directional`,
            direction: {
              x: parseFloat(n2[6]),
              y: parseFloat(n2[7]),
              z: parseFloat(n2[8])
            }
          },
          enabled: true,
          castShadow: t3 || void 0
        });
        break;
      }
      case `LPNT`: {
        if (n2.length < 9) throw new _(r2, `LPNT requires at least 8 args, got ${n2.length - 1}`);
        let t3 = n2[9] ? parseFloat(n2[9]) : void 0;
        e2.scene.lights.push({
          id: m(n2[1]),
          color: [
            parseFloat(n2[2]),
            parseFloat(n2[3]),
            parseFloat(n2[4])
          ],
          intensity: parseFloat(n2[5]),
          kind: {
            type: `Point`,
            position: {
              x: parseFloat(n2[6]),
              y: parseFloat(n2[7]),
              z: parseFloat(n2[8])
            },
            distance: t3
          },
          enabled: true
        });
        break;
      }
      case `LSPT`: {
        if (n2.length < 12) throw new _(r2, `LSPT requires at least 11 args, got ${n2.length - 1}`);
        let t3 = n2[12] ? parseFloat(n2[12]) : void 0, i2 = n2[13] ? parseFloat(n2[13]) : void 0;
        e2.scene.lights.push({
          id: m(n2[1]),
          color: [
            parseFloat(n2[2]),
            parseFloat(n2[3]),
            parseFloat(n2[4])
          ],
          intensity: parseFloat(n2[5]),
          kind: {
            type: `Spot`,
            position: {
              x: parseFloat(n2[6]),
              y: parseFloat(n2[7]),
              z: parseFloat(n2[8])
            },
            direction: {
              x: parseFloat(n2[9]),
              y: parseFloat(n2[10]),
              z: parseFloat(n2[11])
            },
            angle: t3,
            penumbra: i2
          },
          enabled: true
        });
        break;
      }
      case `LAREA`:
        if (n2.length < 14) throw new _(r2, `LAREA requires 13 args, got ${n2.length - 1}`);
        e2.scene.lights.push({
          id: m(n2[1]),
          color: [
            parseFloat(n2[2]),
            parseFloat(n2[3]),
            parseFloat(n2[4])
          ],
          intensity: parseFloat(n2[5]),
          kind: {
            type: `Area`,
            position: {
              x: parseFloat(n2[6]),
              y: parseFloat(n2[7]),
              z: parseFloat(n2[8])
            },
            direction: {
              x: parseFloat(n2[9]),
              y: parseFloat(n2[10]),
              z: parseFloat(n2[11])
            },
            width: parseFloat(n2[12]),
            height: parseFloat(n2[13])
          },
          enabled: true
        });
    }
  }
  function ue(e2, t2, n2) {
    if (t2.length < 4) throw new _(n2, `AO requires 3 args, got ${t2.length - 1}`);
    e2.scene || (e2.scene = {}), e2.scene.postProcessing || (e2.scene.postProcessing = {}), e2.scene.postProcessing.ambientOcclusion = {
      enabled: parseInt(t2[1], 10) !== 0,
      intensity: parseFloat(t2[2]),
      radius: parseFloat(t2[3])
    };
  }
  function de(e2, t2, n2) {
    if (t2.length < 4) throw new _(n2, `BLOOM requires 3 args, got ${t2.length - 1}`);
    e2.scene || (e2.scene = {}), e2.scene.postProcessing || (e2.scene.postProcessing = {}), e2.scene.postProcessing.bloom = {
      enabled: parseInt(t2[1], 10) !== 0,
      intensity: parseFloat(t2[2]),
      threshold: parseFloat(t2[3])
    };
  }
  function fe(e2, t2, n2) {
    if (t2.length < 4) throw new _(n2, `VIG requires 3 args, got ${t2.length - 1}`);
    e2.scene || (e2.scene = {}), e2.scene.postProcessing || (e2.scene.postProcessing = {}), e2.scene.postProcessing.vignette = {
      enabled: parseInt(t2[1], 10) !== 0,
      offset: parseFloat(t2[2]),
      darkness: parseFloat(t2[3])
    };
  }
  function pe(e2, t2, n2) {
    if (t2.length < 2) throw new _(n2, `TONE requires 1 arg`);
    if (e2.scene || (e2.scene = {}), e2.scene.postProcessing || (e2.scene.postProcessing = {}), ![
      `none`,
      `reinhard`,
      `cineon`,
      `acesFilmic`,
      `agX`,
      `neutral`
    ].includes(t2[1])) throw new _(n2, `Unknown tone mapping: ${t2[1]}`);
    e2.scene.postProcessing.toneMapping = t2[1];
  }
  function me(e2, t2, n2) {
    if (t2.length < 2) throw new _(n2, `EXP requires 1 arg`);
    e2.scene || (e2.scene = {}), e2.scene.postProcessing || (e2.scene.postProcessing = {}), e2.scene.postProcessing.exposure = parseFloat(t2[1]);
  }
  function he(e2, t2, n2) {
    if (t2.length < 8) throw new _(n2, `CAM requires at least 7 args, got ${t2.length - 1}`);
    e2.scene || (e2.scene = {}), e2.scene.cameraPresets || (e2.scene.cameraPresets = []);
    let r2 = t2[8] ? parseFloat(t2[8]) : void 0, i2 = t2[9] ? m(t2[9]) : void 0;
    e2.scene.cameraPresets.push({
      id: m(t2[1]),
      position: {
        x: parseFloat(t2[2]),
        y: parseFloat(t2[3]),
        z: parseFloat(t2[4])
      },
      target: {
        x: parseFloat(t2[5]),
        y: parseFloat(t2[6]),
        z: parseFloat(t2[7])
      },
      fov: r2,
      name: i2
    });
  }
  function ge(e2, t2, n2) {
    let r2 = ee(e2);
    if (r2.length === 0) throw new _(t2, `empty line`);
    let i2 = r2[0], a2, o2 = r2, s2 = r2[r2.length - 1];
    s2.startsWith(`"`) && s2.endsWith(`"`) && (a2 = m(s2), o2 = r2.slice(0, -1));
    let c2 = ve(i2, o2, t2, n2), l2 = i2 === `SK` ? _e(t2, n2) : t2;
    return [
      c2,
      a2,
      l2
    ];
  }
  function _e(e2, t2) {
    for (let n2 = e2 + 1; n2 < t2.length; n2++) if (t2[n2].trim() === `END`) return n2;
    return e2;
  }
  function ve(e2, t2, n2, r2) {
    switch (e2) {
      case `C`:
        if (t2.length !== 4) throw new _(n2, `C requires 3 args, got ${t2.length - 1}`);
        return {
          type: `Cube`,
          size: {
            x: parseFloat(t2[1]),
            y: parseFloat(t2[2]),
            z: parseFloat(t2[3])
          }
        };
      case `Y`:
        if (t2.length !== 3) throw new _(n2, `Y requires 2 args, got ${t2.length - 1}`);
        return {
          type: `Cylinder`,
          radius: parseFloat(t2[1]),
          height: parseFloat(t2[2]),
          segments: 0
        };
      case `S`:
        if (t2.length !== 2) throw new _(n2, `S requires 1 arg, got ${t2.length - 1}`);
        return {
          type: `Sphere`,
          radius: parseFloat(t2[1]),
          segments: 0
        };
      case `K`:
        if (t2.length !== 4) throw new _(n2, `K requires 3 args, got ${t2.length - 1}`);
        return {
          type: `Cone`,
          radius_bottom: parseFloat(t2[1]),
          radius_top: parseFloat(t2[2]),
          height: parseFloat(t2[3]),
          segments: 0
        };
      case `TO`:
        if (t2.length !== 3) throw new _(n2, `TO requires 2 args, got ${t2.length - 1}`);
        return {
          type: `Torus`,
          major_radius: g(t2[1], n2, `major_radius`),
          minor_radius: g(t2[2], n2, `minor_radius`),
          segments: 0
        };
      case `W`:
        if (t2.length !== 4) throw new _(n2, `W requires 3 args, got ${t2.length - 1}`);
        return {
          type: `Wedge`,
          size: {
            x: g(t2[1], n2, `sx`),
            y: g(t2[2], n2, `sy`),
            z: g(t2[3], n2, `sz`)
          }
        };
      case `PR`:
        if (t2.length !== 4) throw new _(n2, `PR requires 3 args, got ${t2.length - 1}`);
        return {
          type: `Prism`,
          sides: h(t2[1], n2, `sides`),
          radius: g(t2[2], n2, `radius`),
          height: g(t2[3], n2, `height`)
        };
      case `MI`:
        if (t2.length !== 8) throw new _(n2, `MI requires 7 args, got ${t2.length - 1}`);
        return {
          type: `Mirror`,
          child: h(t2[1], n2, `child`),
          plane_origin: {
            x: g(t2[2], n2, `ox`),
            y: g(t2[3], n2, `oy`),
            z: g(t2[4], n2, `oz`)
          },
          plane_normal: {
            x: g(t2[5], n2, `nx`),
            y: g(t2[6], n2, `ny`),
            z: g(t2[7], n2, `nz`)
          }
        };
      case `U`:
        if (t2.length !== 3) throw new _(n2, `U requires 2 args, got ${t2.length - 1}`);
        return {
          type: `Union`,
          left: parseInt(t2[1], 10),
          right: parseInt(t2[2], 10)
        };
      case `D`:
        if (t2.length !== 3) throw new _(n2, `D requires 2 args, got ${t2.length - 1}`);
        return {
          type: `Difference`,
          left: parseInt(t2[1], 10),
          right: parseInt(t2[2], 10)
        };
      case `I`:
        if (t2.length !== 3) throw new _(n2, `I requires 2 args, got ${t2.length - 1}`);
        return {
          type: `Intersection`,
          left: parseInt(t2[1], 10),
          right: parseInt(t2[2], 10)
        };
      case `T`:
        if (t2.length !== 5) throw new _(n2, `T requires 4 args, got ${t2.length - 1}`);
        return {
          type: `Translate`,
          child: parseInt(t2[1], 10),
          offset: {
            x: parseFloat(t2[2]),
            y: parseFloat(t2[3]),
            z: parseFloat(t2[4])
          }
        };
      case `R`:
        if (t2.length !== 5) throw new _(n2, `R requires 4 args, got ${t2.length - 1}`);
        return {
          type: `Rotate`,
          child: parseInt(t2[1], 10),
          angles: {
            x: parseFloat(t2[2]),
            y: parseFloat(t2[3]),
            z: parseFloat(t2[4])
          }
        };
      case `X`:
        if (t2.length !== 5) throw new _(n2, `X requires 4 args, got ${t2.length - 1}`);
        return {
          type: `Scale`,
          child: parseInt(t2[1], 10),
          factor: {
            x: parseFloat(t2[2]),
            y: parseFloat(t2[3]),
            z: parseFloat(t2[4])
          }
        };
      case `LP`:
        if (t2.length !== 7) throw new _(n2, `LP requires 6 args, got ${t2.length - 1}`);
        return {
          type: `LinearPattern`,
          child: parseInt(t2[1], 10),
          direction: {
            x: parseFloat(t2[2]),
            y: parseFloat(t2[3]),
            z: parseFloat(t2[4])
          },
          count: parseInt(t2[5], 10),
          spacing: parseFloat(t2[6])
        };
      case `CP`:
        if (t2.length !== 10) throw new _(n2, `CP requires 9 args, got ${t2.length - 1}`);
        return {
          type: `CircularPattern`,
          child: parseInt(t2[1], 10),
          axis_origin: {
            x: parseFloat(t2[2]),
            y: parseFloat(t2[3]),
            z: parseFloat(t2[4])
          },
          axis_dir: {
            x: parseFloat(t2[5]),
            y: parseFloat(t2[6]),
            z: parseFloat(t2[7])
          },
          count: parseInt(t2[8], 10),
          angle_deg: parseFloat(t2[9])
        };
      case `SH`:
        if (t2.length !== 3) throw new _(n2, `SH requires 2 args, got ${t2.length - 1}`);
        return {
          type: `Shell`,
          child: parseInt(t2[1], 10),
          thickness: parseFloat(t2[2])
        };
      case `FI`:
        if (t2.length !== 3) throw new _(n2, `FI requires 2 args, got ${t2.length - 1}`);
        return {
          type: `Fillet`,
          child: parseInt(t2[1], 10),
          radius: parseFloat(t2[2])
        };
      case `CH`:
        if (t2.length !== 3) throw new _(n2, `CH requires 2 args, got ${t2.length - 1}`);
        return {
          type: `Chamfer`,
          child: parseInt(t2[1], 10),
          distance: parseFloat(t2[2])
        };
      case `SK`: {
        if (t2.length !== 10) throw new _(n2, `SK requires 9 args, got ${t2.length - 1}`);
        let e3 = {
          x: parseFloat(t2[1]),
          y: parseFloat(t2[2]),
          z: parseFloat(t2[3])
        }, i2 = {
          x: parseFloat(t2[4]),
          y: parseFloat(t2[5]),
          z: parseFloat(t2[6])
        }, a2 = {
          x: parseFloat(t2[7]),
          y: parseFloat(t2[8]),
          z: parseFloat(t2[9])
        }, o2 = [];
        for (let e4 = n2 + 1; e4 < r2.length; e4++) {
          let t3 = r2[e4].trim();
          if (t3 === `END`) break;
          if (!t3 || t3.startsWith(`#`)) continue;
          let n3 = t3.split(/\s+/);
          if (n3[0] === `L`) {
            if (n3.length !== 5) throw new _(e4, `L requires 4 args, got ${n3.length - 1}`);
            o2.push({
              type: `Line`,
              start: {
                x: parseFloat(n3[1]),
                y: parseFloat(n3[2])
              },
              end: {
                x: parseFloat(n3[3]),
                y: parseFloat(n3[4])
              }
            });
          } else if (n3[0] === `A`) {
            if (n3.length !== 8) throw new _(e4, `A requires 7 args, got ${n3.length - 1}`);
            o2.push({
              type: `Arc`,
              start: {
                x: parseFloat(n3[1]),
                y: parseFloat(n3[2])
              },
              end: {
                x: parseFloat(n3[3]),
                y: parseFloat(n3[4])
              },
              center: {
                x: parseFloat(n3[5]),
                y: parseFloat(n3[6])
              },
              ccw: parseInt(n3[7]) !== 0
            });
          } else throw new _(e4, `Unknown sketch segment opcode: ${n3[0]}`);
        }
        return {
          type: `Sketch2D`,
          origin: e3,
          x_dir: i2,
          y_dir: a2,
          segments: o2
        };
      }
      case `E`:
        if (t2.length !== 5) throw new _(n2, `E requires 4 args, got ${t2.length - 1}`);
        return {
          type: `Extrude`,
          sketch: parseInt(t2[1], 10),
          direction: {
            x: parseFloat(t2[2]),
            y: parseFloat(t2[3]),
            z: parseFloat(t2[4])
          }
        };
      case `V`:
        if (t2.length !== 9) throw new _(n2, `V requires 8 args, got ${t2.length - 1}`);
        return {
          type: `Revolve`,
          sketch: parseInt(t2[1], 10),
          axis_origin: {
            x: parseFloat(t2[2]),
            y: parseFloat(t2[3]),
            z: parseFloat(t2[4])
          },
          axis_dir: {
            x: parseFloat(t2[5]),
            y: parseFloat(t2[6]),
            z: parseFloat(t2[7])
          },
          angle_deg: parseFloat(t2[8])
        };
      default:
        throw new _(n2, `Unknown opcode: ${e2}`);
    }
  }
  let _;
  _ = class extends Error {
    constructor(e2, t2) {
      super(`line ${e2}: ${t2}`);
      __publicField(this, "line");
      this.name = `VCodeParseError`, this.line = e2;
    }
  };
  ye = [
    {
      value: `auto`,
      label: `Auto`,
      hint: `Pick whatever's most specific under the cursor`,
      hotkey: `A`
    },
    {
      value: `body`,
      label: `Body`,
      hint: `Always select the whole part`,
      hotkey: `B`
    },
    {
      value: `face`,
      label: `Face`,
      hint: `Snap selection to the nearest face`,
      hotkey: null
    },
    {
      value: `edge`,
      label: `Edge`,
      hint: `Snap selection to the nearest edge`,
      hotkey: `E`
    },
    {
      value: `vertex`,
      label: `Vertex`,
      hint: `Snap selection to the nearest vertex`,
      hotkey: `V`
    }
  ];
  be = function(e2, t2) {
    if (e2.kind !== t2.kind) return false;
    switch (e2.kind) {
      case `part`:
        return e2.id === t2.id;
      case `face`:
        return e2.partId === t2.partId && e2.faceIndex === t2.faceIndex;
      case `edge`:
        return e2.partId === t2.partId && e2.edgeId === t2.edgeId;
      case `vertex`:
        return e2.partId === t2.partId && e2.vertexId === t2.vertexId;
      case `segment`:
      case `constraint`:
        return e2.sketchId === t2.sketchId && e2.index === t2.index;
    }
  };
  xe = function(e2) {
    return e2.kind === `cube` || e2.kind === `cylinder` || e2.kind === `sphere`;
  };
  Se = function(e2) {
    return e2.kind === `boolean`;
  };
  Ce = function(e2) {
    return e2.kind === `extrude`;
  };
  we = function(e2) {
    return e2.kind === `revolve`;
  };
  Te = function(e2) {
    return e2.kind === `sweep`;
  };
  Ee = function(e2) {
    return e2.kind === `loft`;
  };
  De = function(e2) {
    return e2.kind === `imported-mesh`;
  };
  Oe = function(e2) {
    return e2.kind === `fillet`;
  };
  ke = function(e2) {
    return e2.kind === `chamfer`;
  };
  Ae = function(e2) {
    return e2.kind === `shell`;
  };
  je = function(e2) {
    return e2.kind === `linear-pattern`;
  };
  Me = function(e2) {
    return e2.kind === `circular-pattern`;
  };
  Ne = function(e2) {
    return e2.kind === `mirror`;
  };
  Pe = function(e2) {
    return e2.kind === `text`;
  };
  Fe = function(e2) {
    return e2.kind === `pcb-board`;
  };
  Ie = function(e2) {
    return e2.kind === `embroidery-pattern`;
  };
  Le = function(e2) {
    return e2.kind === `stitch`;
  };
  Re = function(e2) {
    return e2.kind === `text` || e2.kind === `extrude` || e2.kind === `revolve` || e2.kind === `sweep` || e2.kind === `loft`;
  };
  ze = function(e2) {
    if (typeof e2 == `string`) switch (e2) {
      case `XY`:
        return {
          x_dir: {
            x: 1,
            y: 0,
            z: 0
          },
          y_dir: {
            x: 0,
            y: 1,
            z: 0
          },
          normal: {
            x: 0,
            y: 0,
            z: 1
          }
        };
      case `XZ`:
        return {
          x_dir: {
            x: 1,
            y: 0,
            z: 0
          },
          y_dir: {
            x: 0,
            y: 0,
            z: -1
          },
          normal: {
            x: 0,
            y: 1,
            z: 0
          }
        };
      case `YZ`:
        return {
          x_dir: {
            x: 0,
            y: 1,
            z: 0
          },
          y_dir: {
            x: 0,
            y: 0,
            z: 1
          },
          normal: {
            x: 1,
            y: 0,
            z: 0
          }
        };
    }
    return {
      x_dir: e2.xDir,
      y_dir: e2.yDir,
      normal: e2.normal
    };
  };
  function Be(e2) {
    let t2 = l(e2.normal), n2 = l(s(Math.abs(t2.z) < 0.9 ? {
      x: 0,
      y: 0,
      z: 1
    } : {
      x: 1,
      y: 0,
      z: 0
    }, t2)), r2 = s(t2, n2);
    return {
      type: `face`,
      origin: e2.centroid,
      xDir: n2,
      yDir: r2,
      normal: t2
    };
  }
  Ve = function(e2) {
    return typeof e2 == `string` ? e2 : `Face`;
  };
  He = function(e2) {
    return Math.abs(e2.x) > 0.9 ? e2.x > 0 ? `+X` : `-X` : Math.abs(e2.y) > 0.9 ? e2.y > 0 ? `+Y` : `-Y` : Math.abs(e2.z) > 0.9 ? e2.z > 0 ? `+Z` : `-Z` : `custom`;
  };
  Ue = function(e2) {
    return e2.startsWith(`+`) ? `-` + e2.slice(1) : e2.startsWith(`-`) ? `+` + e2.slice(1) : e2;
  };
  var We = class extends Error {
    constructor(e2, t2) {
      super(`${e2.type}: ${t2.message}`);
      __publicField(this, "command");
      __publicField(this, "error");
      this.command = e2, this.error = t2, this.name = `DocCommandError`;
    }
  };
  function v(e2, t2) {
    let n2 = JSON.parse(e2.apply(JSON.stringify(t2)));
    if (!n2.ok) throw new We(t2, n2.error);
    for (let e3 of n2.result.warnings ?? []) console.warn(`[vcad] ${e3}`);
    return n2.result;
  }
  function Ge(e2, t2, n2) {
    let r2 = JSON.parse(e2.apply_tool(t2, JSON.stringify(n2)));
    if (r2.ok) for (let e3 of r2.result.warnings ?? []) console.warn(`[vcad] ${e3}`);
    return r2;
  }
  function y(e2, t2) {
    let n2 = t2.index;
    switch (t2.type) {
      case `LineStart`:
      case `ArcStart`:
      case `Point`:
        return {
          kind: `sketchPoint`,
          node: Number(e2),
          segment: n2,
          point: `start`
        };
      case `LineEnd`:
      case `ArcEnd`:
        return {
          kind: `sketchPoint`,
          node: Number(e2),
          segment: n2,
          point: `end`
        };
      case `Center`:
        return {
          kind: `sketchPoint`,
          node: Number(e2),
          segment: n2,
          point: `center`
        };
      default:
        return null;
    }
  }
  function b(e2, t2) {
    return {
      kind: `sketchSegment`,
      node: Number(e2),
      segment: t2
    };
  }
  function Ke(e2, t2) {
    switch (t2.type) {
      case `Coincident`: {
        let n2 = y(e2, t2.pointA), r2 = y(e2, t2.pointB);
        return n2 && r2 ? {
          type: `coincident`,
          a: n2,
          b: r2
        } : null;
      }
      case `Horizontal`:
        return {
          type: `horizontal`,
          a: b(e2, t2.line),
          b: b(e2, t2.line)
        };
      case `Vertical`:
        return {
          type: `vertical`,
          a: b(e2, t2.line),
          b: b(e2, t2.line)
        };
      case `Parallel`:
        return {
          type: `parallel`,
          a: b(e2, t2.lineA),
          b: b(e2, t2.lineB)
        };
      case `Perpendicular`:
        return {
          type: `perpendicular`,
          a: b(e2, t2.lineA),
          b: b(e2, t2.lineB)
        };
      case `Fixed`: {
        let n2 = y(e2, t2.point);
        return n2 ? {
          type: `fixed`,
          a: n2
        } : null;
      }
      case `Distance`: {
        let n2 = y(e2, t2.pointA), r2 = y(e2, t2.pointB);
        return n2 && r2 ? {
          type: `distance`,
          a: n2,
          b: r2,
          value: t2.distance
        } : null;
      }
      case `Length`:
        return {
          type: `length`,
          a: b(e2, t2.line),
          value: t2.length
        };
      case `EqualLength`:
        return {
          type: `equalLength`,
          a: b(e2, t2.lineA),
          b: b(e2, t2.lineB)
        };
      case `Angle`:
        return {
          type: `angle`,
          a: b(e2, t2.lineA),
          b: b(e2, t2.lineB),
          value: t2.angleDeg
        };
      case `Radius`:
        return null;
      default:
        return null;
    }
  }
  function qe(e2, t2) {
    return Object.values(e2.kind).some((e3) => {
      let n2 = e3;
      return typeof n2 == `object` && !!n2 && (n2.kind === `sketchPoint` || n2.kind === `sketchSegment`) && Number(n2.node) === Number(t2);
    });
  }
  function Je(e2, t2, n2) {
    let r2 = e2.filter((e3) => !qe(e3, t2)), i2 = 0;
    for (let e3 of r2) {
      let t3 = /^c(\d+)$/.exec(e3.id);
      t3 && (i2 = Math.max(i2, Number(t3[1])));
    }
    let a2 = [];
    for (let e3 of n2) {
      let n3 = Ke(t2, e3);
      n3 && a2.push({
        id: `c${++i2}`,
        kind: n3,
        driven: false
      });
    }
    return [
      ...r2,
      ...a2
    ];
  }
  let x, Xe;
  x = [
    `mm`,
    `cm`,
    `in`
  ];
  Ye = {
    mm: `mm`,
    cm: `cm`,
    in: `in`
  };
  Xe = {
    mm: 1,
    cm: 10,
    in: 25.4
  };
  function Ze(e2, t2) {
    return e2 / Xe[t2];
  }
  Qe = function(e2, t2) {
    return e2 * Xe[t2];
  };
  function $e(e2) {
    return x[(x.indexOf(e2) + 1) % x.length] ?? `mm`;
  }
  et = function(e2, t2, n2) {
    let r2 = (n2 == null ? void 0 : n2.decimals) ?? (t2 === `in` ? 2 : 1);
    return Ze(e2, t2).toFixed(r2);
  };
  function S(e2) {
    let t2 = /* @__PURE__ */ new Set();
    for (let n2 of e2) n2.kind === `part` && t2.add(n2.id);
    return t2;
  }
  function tt(e2) {
    return e2 && e2.kind === `part` ? e2.id : null;
  }
  function nt() {
    if (typeof window > `u`) return {
      recent: [],
      favorites: []
    };
    try {
      let e2 = JSON.parse(localStorage.getItem(`vcad:recentMaterials`) ?? `[]`), t2 = JSON.parse(localStorage.getItem(`vcad:favoriteMaterials`) ?? `[]`);
      return {
        recent: Array.isArray(e2) ? e2 : [],
        favorites: Array.isArray(t2) ? t2 : []
      };
    } catch {
      return {
        recent: [],
        favorites: []
      };
    }
  }
  function rt() {
    if (typeof window > `u`) return true;
    try {
      let e2 = localStorage.getItem(`vcad:toolbarExpanded`);
      return e2 === null || e2 === `true`;
    } catch {
      return true;
    }
  }
  function it() {
    if (typeof window > `u`) return `mm`;
    try {
      let e2 = localStorage.getItem(`vcad:lengthUnit`);
      if (e2 && x.includes(e2)) return e2;
    } catch {
    }
    return `mm`;
  }
  let at, ot, st;
  at = nt();
  ot = rt();
  st = it();
  C = n((e2) => ({
    selectedPartIds: /* @__PURE__ */ new Set(),
    hoveredPartId: null,
    commandPaletteOpen: false,
    toolMode: `select`,
    transformMode: `translate`,
    featureTreeOpen: true,
    theme: `system`,
    isDraggingGizmo: false,
    isGizmoHovered: false,
    isOrbiting: false,
    captureMode: false,
    clearanceIndicator: null,
    showWireframe: false,
    gridSnap: true,
    pointSnap: true,
    snapIncrement: 5,
    clipboard: [],
    deleteConfirmParts: null,
    previewMaterial: null,
    recentMaterials: at.recent,
    favoriteMaterials: at.favorites,
    renderMode: `standard`,
    raytraceQuality: `draft`,
    raytraceDebugMode: `off`,
    raytraceAvailable: false,
    raytraceError: null,
    raytraceEdgesEnabled: true,
    raytraceEdgeDepthThreshold: 0.1,
    raytraceEdgeNormalThreshold: 30,
    raytraceEdgeSilhouetteEnabled: true,
    raytraceEdgeCreaseEnabled: true,
    raytraceEdgeBoundaryEnabled: true,
    raytraceEdgeSilhouetteWidth: 1,
    raytraceEdgeCreaseWidth: 0.75,
    raytraceEdgeBoundaryWidth: 1.25,
    raytraceEdgeSoftness: 1.5,
    toolbarExpanded: ot,
    toolbarTab: `create`,
    sidebarPane: `tree`,
    inspectorTarget: null,
    statusBarVisible: true,
    cursorWorld: null,
    lengthUnit: st,
    readOnlyShare: null,
    followMode: `free`,
    followingParticipantId: null,
    focusZone: `viewport`,
    treeFocusedPartId: null,
    selection: [],
    hoveredItem: null,
    selectionFilter: `auto`,
    select: (t2) => {
      let n2 = t2 ? [
        {
          kind: `part`,
          id: t2
        }
      ] : [];
      e2({
        selection: n2,
        selectedPartIds: S(n2)
      });
    },
    toggleSelect: (t2) => e2((e3) => {
      let n2 = e3.selection.findIndex((e4) => e4.kind === `part` && e4.id === t2), r2 = n2 >= 0 ? e3.selection.filter((e4, t3) => t3 !== n2) : [
        ...e3.selection,
        {
          kind: `part`,
          id: t2
        }
      ];
      return {
        selection: r2,
        selectedPartIds: S(r2)
      };
    }),
    selectMultiple: (t2) => {
      let n2 = t2.map((e3) => ({
        kind: `part`,
        id: e3
      }));
      e2({
        selection: n2,
        selectedPartIds: S(n2)
      });
    },
    clearSelection: () => e2({
      selection: [],
      selectedPartIds: /* @__PURE__ */ new Set()
    }),
    setHoveredPartId: (t2) => {
      e2({
        hoveredItem: t2 ? {
          kind: `part`,
          id: t2
        } : null,
        hoveredPartId: t2
      });
    },
    selectItem: (t2) => {
      let n2 = t2 ? [
        t2
      ] : [];
      e2({
        selection: n2,
        selectedPartIds: S(n2)
      });
    },
    toggleItem: (t2) => e2((e3) => {
      let n2 = e3.selection.findIndex((e4) => be(e4, t2)), r2 = n2 >= 0 ? e3.selection.filter((e4, t3) => t3 !== n2) : [
        ...e3.selection,
        t2
      ];
      return {
        selection: r2,
        selectedPartIds: S(r2)
      };
    }),
    selectItems: (t2) => e2({
      selection: [
        ...t2
      ],
      selectedPartIds: S(t2)
    }),
    setHoveredItem: (t2) => e2({
      hoveredItem: t2,
      hoveredPartId: tt(t2)
    }),
    setSelectionFilter: (t2) => e2({
      selectionFilter: t2
    }),
    toggleCommandPalette: () => e2((e3) => ({
      commandPaletteOpen: !e3.commandPaletteOpen
    })),
    setCommandPaletteOpen: (t2) => e2({
      commandPaletteOpen: t2
    }),
    setToolMode: (t2) => e2({
      toolMode: t2
    }),
    setTransformMode: (t2) => e2({
      transformMode: t2
    }),
    toggleFeatureTree: () => e2((e3) => ({
      featureTreeOpen: !e3.featureTreeOpen
    })),
    setFeatureTreeOpen: (t2) => e2({
      featureTreeOpen: t2
    }),
    setTheme: (t2) => e2({
      theme: t2
    }),
    toggleTheme: () => e2((e3) => ({
      theme: e3.theme === `system` ? `light` : e3.theme === `light` ? `dark` : `system`
    })),
    toggleWireframe: () => e2((e3) => ({
      showWireframe: !e3.showWireframe
    })),
    toggleGridSnap: () => e2((e3) => ({
      gridSnap: !e3.gridSnap
    })),
    togglePointSnap: () => e2((e3) => ({
      pointSnap: !e3.pointSnap
    })),
    setSnapIncrement: (t2) => e2({
      snapIncrement: t2,
      gridSnap: true
    }),
    setDraggingGizmo: (t2) => e2({
      isDraggingGizmo: t2
    }),
    setGizmoHovered: (t2) => e2({
      isGizmoHovered: t2
    }),
    setOrbiting: (t2) => e2({
      isOrbiting: t2
    }),
    setCaptureMode: (t2) => e2({
      captureMode: t2
    }),
    setClearanceIndicator: (t2) => e2({
      clearanceIndicator: t2
    }),
    copyToClipboard: (t2) => e2({
      clipboard: t2
    }),
    showDeleteConfirm: (t2) => e2({
      deleteConfirmParts: t2
    }),
    hideDeleteConfirm: () => e2({
      deleteConfirmParts: null
    }),
    setPreviewMaterial: (t2) => e2({
      previewMaterial: t2
    }),
    addRecentMaterial: (t2) => e2((e3) => {
      let n2 = [
        t2,
        ...e3.recentMaterials.filter((e4) => e4 !== t2)
      ].slice(0, 6);
      try {
        localStorage.setItem(`vcad:recentMaterials`, JSON.stringify(n2));
      } catch {
      }
      return {
        recentMaterials: n2
      };
    }),
    toggleFavoriteMaterial: (t2) => e2((e3) => {
      let n2 = e3.favoriteMaterials.includes(t2) ? e3.favoriteMaterials.filter((e4) => e4 !== t2) : [
        ...e3.favoriteMaterials,
        t2
      ];
      try {
        localStorage.setItem(`vcad:favoriteMaterials`, JSON.stringify(n2));
      } catch {
      }
      return {
        favoriteMaterials: n2
      };
    }),
    setRenderMode: (t2) => e2({
      renderMode: t2
    }),
    toggleRenderMode: () => e2((e3) => ({
      renderMode: e3.renderMode === `standard` ? `raytrace` : `standard`
    })),
    setRaytraceQuality: (t2) => e2({
      raytraceQuality: t2
    }),
    setRaytraceDebugMode: (t2) => e2({
      raytraceDebugMode: t2
    }),
    setRaytraceAvailable: (t2) => e2({
      raytraceAvailable: t2
    }),
    setRaytraceError: (t2) => e2({
      raytraceError: t2
    }),
    setRaytraceEdgesEnabled: (t2) => e2({
      raytraceEdgesEnabled: t2
    }),
    setRaytraceEdgeDepthThreshold: (t2) => e2({
      raytraceEdgeDepthThreshold: t2
    }),
    setRaytraceEdgeNormalThreshold: (t2) => e2({
      raytraceEdgeNormalThreshold: t2
    }),
    setRaytraceEdgeSilhouetteEnabled: (t2) => e2({
      raytraceEdgeSilhouetteEnabled: t2
    }),
    setRaytraceEdgeCreaseEnabled: (t2) => e2({
      raytraceEdgeCreaseEnabled: t2
    }),
    setRaytraceEdgeBoundaryEnabled: (t2) => e2({
      raytraceEdgeBoundaryEnabled: t2
    }),
    setRaytraceEdgeSilhouetteWidth: (t2) => e2({
      raytraceEdgeSilhouetteWidth: t2
    }),
    setRaytraceEdgeCreaseWidth: (t2) => e2({
      raytraceEdgeCreaseWidth: t2
    }),
    setRaytraceEdgeBoundaryWidth: (t2) => e2({
      raytraceEdgeBoundaryWidth: t2
    }),
    setRaytraceEdgeSoftness: (t2) => e2({
      raytraceEdgeSoftness: t2
    }),
    setToolbarExpanded: (t2) => {
      try {
        localStorage.setItem(`vcad:toolbarExpanded`, String(t2));
      } catch {
      }
      e2({
        toolbarExpanded: t2
      });
    },
    toggleToolbarExpanded: () => e2((e3) => {
      let t2 = !e3.toolbarExpanded;
      try {
        localStorage.setItem(`vcad:toolbarExpanded`, String(t2));
      } catch {
      }
      return {
        toolbarExpanded: t2
      };
    }),
    setToolbarTab: (t2) => e2({
      toolbarTab: t2
    }),
    setSidebarPane: (t2) => e2({
      sidebarPane: t2
    }),
    setInspectorTarget: (t2) => e2({
      inspectorTarget: t2
    }),
    toggleStatusBar: () => e2((e3) => ({
      statusBarVisible: !e3.statusBarVisible
    })),
    setCursorWorld: (t2) => e2({
      cursorWorld: t2
    }),
    setReadOnlyShare: (t2) => e2({
      readOnlyShare: t2
    }),
    setFollowMode: (t2) => e2({
      followMode: t2
    }),
    setFollowingParticipant: (t2) => e2({
      followingParticipantId: t2
    }),
    setFocusZone: (t2) => e2({
      focusZone: t2
    }),
    setTreeFocusedPartId: (t2) => e2({
      treeFocusedPartId: t2
    }),
    setLengthUnit: (t2) => {
      try {
        typeof window < `u` && localStorage.setItem(`vcad:lengthUnit`, t2);
      } catch {
      }
      e2({
        lengthUnit: t2
      });
    },
    cycleLengthUnit: () => e2((e3) => {
      let t2 = $e(e3.lengthUnit);
      try {
        typeof window < `u` && localStorage.setItem(`vcad:lengthUnit`, t2);
      } catch {
      }
      return {
        lengthUnit: t2
      };
    })
  }));
  function ct(e2, t2) {
    return `${e2}:${t2}`;
  }
  async function lt(e2, t2, n2) {
    if (t2 === n2) return e2;
    let { parseExpression: r2 } = await a(async () => {
      let { parseExpression: e3 } = await import("./dist-CG_6leuq.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((e4) => e4.n);
      return {
        parseExpression: e3
      };
    }, __vite__mapDeps([0,1,2,3])), i2 = {};
    for (let [a2, o2] of Object.entries(e2)) if (typeof o2 == `number`) i2[a2] = o2;
    else try {
      i2[a2] = w(r2(o2), t2, n2);
    } catch {
      i2[a2] = o2;
    }
    return i2;
  }
  function w(e2, t2, n2) {
    switch (e2.kind) {
      case `num`:
        return ut(e2.value);
      case `ident`:
        return e2.name === t2 ? n2 : e2.name;
      case `unary`:
        return `(${e2.op}${w(e2.arg, t2, n2)})`;
      case `binary`:
        return `(${w(e2.lhs, t2, n2)} ${e2.op} ${w(e2.rhs, t2, n2)})`;
      case `call`:
        return `${e2.name}(${e2.args.map((e3) => w(e3, t2, n2)).join(`, `)})`;
    }
  }
  function ut(e2) {
    return String(e2);
  }
  T = n((e2, t2) => ({
    parameters: {},
    bindings: {},
    setParameter: (t3, n2) => {
      e2((e3) => ({
        parameters: {
          ...e3.parameters,
          [t3]: n2
        }
      }));
    },
    updateParameterValue: (t3, n2) => {
      e2((e3) => {
        let r2 = e3.parameters[t3] ?? {
          value: n2
        };
        return {
          parameters: {
            ...e3.parameters,
            [t3]: {
              ...r2,
              value: n2
            }
          }
        };
      });
    },
    renameParameter: (n2, r2) => {
      let i2 = t2();
      if (n2 === r2 || !(n2 in i2.parameters)) return;
      if (r2 in i2.parameters) {
        console.warn(`[parameters] ${r2} already exists; rename aborted`);
        return;
      }
      let a2 = {};
      for (let [e3, t3] of Object.entries(i2.parameters)) a2[e3 === n2 ? r2 : e3] = t3;
      e2({
        parameters: a2
      }), lt(i2.bindings, n2, r2).then((t3) => e2({
        bindings: t3
      }));
    },
    removeParameter: (t3) => {
      e2((e3) => {
        let { [t3]: n2, ...r2 } = e3.parameters;
        return {
          parameters: r2
        };
      });
    },
    setBinding: (t3, n2, r2) => {
      e2((e3) => ({
        bindings: {
          ...e3.bindings,
          [ct(t3, n2)]: r2
        }
      }));
    },
    removeBinding: (t3, n2) => {
      e2((e3) => {
        let r2 = ct(t3, n2), { [r2]: i2, ...a2 } = e3.bindings;
        return {
          bindings: a2
        };
      });
    },
    reset: (t3) => {
      e2({
        parameters: (t3 == null ? void 0 : t3.parameters) ?? {},
        bindings: (t3 == null ? void 0 : t3.bindings) ?? {}
      });
    }
  }));
  dt = function(e2, t2, n2) {
    let r2 = Object.keys(t2).length > 0, i2 = Object.keys(n2).length > 0;
    return !r2 && !i2 ? e2 : {
      ...e2,
      parameters: r2 ? t2 : e2.parameters,
      bindings: i2 ? n2 : e2.bindings
    };
  };
  function E(e2) {
    return {
      F64: e2
    };
  }
  function ft(e2) {
    return {
      Bool: e2
    };
  }
  function D(e2) {
    return {
      String: e2
    };
  }
  function pt(e2) {
    return {
      FeatureRef: e2
    };
  }
  function mt(e2) {
    let t2 = /* @__PURE__ */ new Map();
    for (let n2 of e2) t2.set(n2.id, n2);
    return t2;
  }
  ht = function(e2, t2) {
    let n2 = e2.nodes[String(t2)];
    return (n2 == null ? void 0 : n2.op.type) === `PcbBoard` ? n2.op.board : e2.pcb ? e2.pcb : null;
  };
  gt = function(e2, t2) {
    let n2 = (t3) => {
      var _a2;
      return (_a2 = e2.nodes[String(t3)]) == null ? void 0 : _a2.op;
    }, r2 = n2(t2.translateNodeId), i2 = n2(t2.rotateNodeId), a2 = n2(t2.scaleNodeId);
    return {
      position: (r2 == null ? void 0 : r2.type) === `Translate` ? r2.offset : {
        x: 0,
        y: 0,
        z: 0
      },
      rotationDeg: (i2 == null ? void 0 : i2.type) === `Rotate` ? i2.angles : {
        x: 0,
        y: 0,
        z: 0
      },
      scale: (a2 == null ? void 0 : a2.type) === `Scale` ? a2.factor : {
        x: 1,
        y: 1,
        z: 1
      }
    };
  };
  _t = function(e2, t2) {
    for (let n2 of e2) if (n2.kind === `pcb-board` && n2.boardNodeId === t2) return n2;
    return null;
  };
  O = function(e2, t2) {
    let n2 = e2.nodes[String(t2)];
    return (n2 == null ? void 0 : n2.op.type) === `EmbroideryPattern` ? n2.op.design : null;
  };
  vt = function(e2) {
    let t2 = [];
    for (let [, n2] of Object.entries(e2.nodes)) n2.op.type === `PcbBoard` && t2.push(n2.id);
    return t2;
  };
  function k(e2, t2, n2) {
    let { x_dir: r2, y_dir: i2 } = ze(t2);
    return JSON.stringify({
      type: `Sketch2D`,
      origin: n2,
      x_dir: r2,
      y_dir: i2,
      segments: e2
    });
  }
  function yt(e2) {
    let t2 = 0;
    for (let n2 of Object.keys(e2.nodes)) {
      let e3 = Number(n2);
      e3 > t2 && (t2 = e3);
    }
    return t2 + 1;
  }
  function A(e2) {
    let t2 = mt(e2.parts), n2 = {};
    for (let r2 of e2.consumedPartIds) {
      let e3 = t2.get(r2);
      e3 && (n2[r2] = e3);
    }
    return {
      document: e2.document,
      parts: e2.parts,
      partIndex: t2,
      consumedParts: n2,
      nextNodeId: yt(e2.document),
      isDirty: true
    };
  }
  function j(e2) {
    let t2 = mt(e2.parts), n2 = {};
    for (let r2 of e2.parts) {
      if (`sourcePartIds` in r2 && Array.isArray(r2.sourcePartIds)) for (let e3 of r2.sourcePartIds) {
        let r3 = t2.get(e3);
        r3 && (n2[e3] = r3);
      }
      if (`sourcePartId` in r2 && typeof r2.sourcePartId == `string`) {
        let e3 = t2.get(r2.sourcePartId);
        e3 && (n2[r2.sourcePartId] = e3);
      }
    }
    return {
      document: e2.document,
      parts: e2.parts,
      partIndex: t2,
      consumedParts: n2,
      nextNodeId: yt(e2.document),
      isDirty: true
    };
  }
  var M = null, N = null, P = null;
  function bt(e2) {
    let t2 = e2._crdtEngine;
    if (P) return P;
    let n2 = t2.get_ordered_features_json(), r2 = JSON.parse(n2).find((e3) => e3.kind === `analysis-studies`);
    if (r2) return P = r2.id, r2.id;
    let i2 = v(t2, {
      type: `create_feature`,
      kind: `analysis-studies`
    });
    return i2.createdFeatureId ? (P = i2.createdFeatureId, i2.createdFeatureId) : ``;
  }
  function F(e2) {
    let t2 = e2._crdtEngine;
    if (M) return M;
    let n2 = t2.get_ordered_features_json(), r2 = JSON.parse(n2).find((e3) => e3.kind === `scene-settings`);
    if (r2) return M = r2.id, r2.id;
    let i2 = v(t2, {
      type: `create_feature`,
      kind: `scene-settings`
    });
    return i2.createdFeatureId ? (M = i2.createdFeatureId, i2.createdFeatureId) : ``;
  }
  var I = null;
  function xt(e2) {
    let t2 = e2._crdtEngine;
    if (I) return I;
    let n2 = t2.get_ordered_features_json(), r2 = JSON.parse(n2).find((e3) => e3.kind === `drawing-settings`);
    if (r2) return I = r2.id, r2.id;
    let i2 = v(t2, {
      type: `create_feature`,
      kind: `drawing-settings`
    });
    return i2.createdFeatureId ? (I = i2.createdFeatureId, i2.createdFeatureId) : ``;
  }
  function St(e2) {
    let t2 = e2._crdtEngine;
    if (N) return N;
    let n2 = t2.get_ordered_features_json(), r2 = JSON.parse(n2).find((e3) => e3.kind === `schematic`);
    if (r2) return N = r2.id, r2.id;
    let i2 = v(t2, {
      type: `create_feature`,
      kind: `schematic`
    });
    return i2.createdFeatureId ? (N = i2.createdFeatureId, i2.createdFeatureId) : ``;
  }
  function L(e2, t2, n2, r2) {
    let i2 = e2()._crdtEngine;
    if (!i2) return false;
    let a2 = Ge(i2, n2, r2);
    return a2.ok ? (t2(A(a2.result)), true) : (console.warn(`[document-store] ${n2}: ${a2.error.message}`), false);
  }
  function Ct(e2, t2, n2, r2) {
    var _a2;
    let i2 = e2()._crdtEngine;
    if (!i2) return console.error(`[PCB] Cannot create board: CRDT engine not initialized`), 0;
    let a2 = Ge(i2, n2, r2);
    if (!a2.ok) throw Error(a2.error.message);
    return t2(A(a2.result)), ((_a2 = a2.result.parts.find((e3) => e3.id === a2.result.createdFeatureId) ?? a2.result.parts.find((e3) => e3.kind === `pcb-board`)) == null ? void 0 : _a2.boardNodeId) ?? 0;
  }
  wt = n((n2, i2) => ({
    document: f(),
    parts: [],
    partIndex: /* @__PURE__ */ new Map(),
    consumedParts: {},
    nextNodeId: 1,
    isDirty: false,
    documentId: null,
    documentName: `Untitled`,
    lastSavedAt: null,
    isParameterDragging: false,
    isTransientEval: false,
    loonSource: null,
    _crdtEngine: null,
    _crdtEngineClass: null,
    _engineClient: new t(e(() => i2()._crdtEngine)),
    dispatch: async (e2) => {
      let t2 = C.getState().readOnlyShare;
      if (t2) {
        typeof window < `u` && window.dispatchEvent(new CustomEvent(`vcad:fork-prompt`, {
          detail: t2
        }));
        return;
      }
      let r2 = i2()._engineClient;
      r2.state || await r2.init();
      let a2 = await r2.apply(e2);
      for (let e3 of a2.warnings) console.warn(`[vcad] ${e3}`);
      return n2(j({
        document: a2.state.document,
        parts: a2.state.parts
      })), a2.createdFeatureId;
    },
    _initCrdt: (e2) => {
      let t2 = i2()._crdtEngine, r2 = i2()._crdtEngineClass;
      if (!(t2 && r2 === e2)) {
        if (t2) try {
          t2.free();
        } catch {
        }
        M = null, N = null, P = null, I = null, n2({
          _crdtEngine: new e2(),
          _crdtEngineClass: e2
        });
      }
    },
    saveCrdt: () => {
      let e2 = i2()._crdtEngine;
      return e2 ? e2.save() : null;
    },
    loadCrdt: (e2, t2) => {
      let r2 = t2.load(e2);
      n2({
        ...j({
          document: JSON.parse(r2.get_document_json()),
          parts: JSON.parse(r2.get_parts_json())
        }),
        _crdtEngine: r2,
        _crdtEngineClass: t2,
        isDirty: false
      });
    },
    pushUndoSnapshot: () => {
    },
    mergeRemoteOps: (e2) => {
      let t2 = i2()._crdtEngine;
      if (!t2) return false;
      let r2 = t2.merge_remote(e2);
      if (r2) {
        let e3 = j(r2);
        return delete e3.isDirty, n2(e3), true;
      }
      return false;
    },
    getSyncClock: () => {
      let e2 = i2()._crdtEngine;
      return e2 ? e2.get_sync_clock() : `{}`;
    },
    getOpsSince: (e2) => {
      let t2 = i2()._crdtEngine;
      return t2 ? t2.get_ops_since(e2) : `[]`;
    },
    addPrimitive: (e2) => {
      let t2 = i2()._crdtEngine;
      if (!t2 || t2.__wbg_ptr === 0) return console.warn(`[document-store] addPrimitive: engine is null/freed`), ``;
      let r2 = {
        cube: {
          type: `Cube`,
          size_x: 20,
          size_y: 20,
          size_z: 20
        },
        cylinder: {
          type: `Cylinder`,
          radius: 10,
          height: 20,
          segments: 32
        },
        sphere: {
          type: `Sphere`,
          radius: 10,
          segments: 32
        }
      };
      try {
        let i3 = v(t2, {
          type: `add_feature`,
          feature: r2[e2]
        });
        return n2(A(i3)), i3.createdFeatureId ?? ``;
      } catch (e3) {
        return console.error(`[document-store] addPrimitive crashed:`, e3), ``;
      }
    },
    addPartInstance: (e2, t2, r2) => {
      let a2 = i2()._crdtEngine;
      if (!a2 || a2.__wbg_ptr === 0) return console.warn(`[document-store] addPartInstance: engine is null/freed`), ``;
      try {
        let i3 = v(a2, {
          type: `add_feature`,
          feature: {
            type: `PartInstance`,
            path: e2,
            version: t2,
            params_json: JSON.stringify(r2)
          }
        });
        return n2(A(i3)), i3.createdFeatureId ?? ``;
      } catch (e3) {
        return console.error(`[document-store] addPartInstance crashed:`, e3), ``;
      }
    },
    removePart: async (e2) => {
      await i2().dispatch({
        type: `delete_feature`,
        id: e2
      });
    },
    setTranslation: (e2, t2) => {
      let r2 = i2()._crdtEngine;
      n2(A(v(r2, {
        type: `set_translation`,
        id: e2,
        offset: [
          t2.x,
          t2.y,
          t2.z
        ]
      })));
    },
    setRotation: (e2, t2) => {
      let r2 = i2()._crdtEngine;
      n2(A(v(r2, {
        type: `set_rotation`,
        id: e2,
        angles: [
          t2.x,
          t2.y,
          t2.z
        ]
      })));
    },
    setScale: (e2, t2) => {
      let r2 = i2()._crdtEngine;
      n2(A(v(r2, {
        type: `set_scale`,
        id: e2,
        factor: [
          t2.x,
          t2.y,
          t2.z
        ]
      })));
    },
    updatePrimitiveOp: (e2, t2) => {
      let r2 = i2()._crdtEngine;
      if (!r2 || r2.__wbg_ptr === 0 || !e2) {
        console.warn(`[document-store] updatePrimitiveOp: engine null/freed or empty partId`);
        return;
      }
      let a2 = t2, o2;
      if (a2.type === `Cube` && `size` in a2) {
        let t3 = a2.size;
        v(r2, {
          type: `set_param`,
          id: e2,
          key: `size_x`,
          value: E(t3.x)
        }), v(r2, {
          type: `set_param`,
          id: e2,
          key: `size_y`,
          value: E(t3.y)
        }), o2 = v(r2, {
          type: `set_param`,
          id: e2,
          key: `size_z`,
          value: E(t3.z)
        });
      } else a2.type === `Cylinder` && `radius` in a2 ? (v(r2, {
        type: `set_param`,
        id: e2,
        key: `radius`,
        value: E(a2.radius)
      }), v(r2, {
        type: `set_param`,
        id: e2,
        key: `height`,
        value: E(a2.height)
      }), o2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `segments`,
        value: E(a2.segments)
      })) : a2.type === `Sphere` && `radius` in a2 ? (v(r2, {
        type: `set_param`,
        id: e2,
        key: `radius`,
        value: E(a2.radius)
      }), o2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `segments`,
        value: E(a2.segments)
      })) : a2.type === `Cone` && `radius_bottom` in a2 ? (v(r2, {
        type: `set_param`,
        id: e2,
        key: `radius_bottom`,
        value: E(a2.radius_bottom)
      }), v(r2, {
        type: `set_param`,
        id: e2,
        key: `radius_top`,
        value: E(a2.radius_top)
      }), v(r2, {
        type: `set_param`,
        id: e2,
        key: `height`,
        value: E(a2.height)
      }), o2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `segments`,
        value: E(a2.segments)
      })) : a2.type === `Torus` && `major_radius` in a2 && (v(r2, {
        type: `set_param`,
        id: e2,
        key: `major_radius`,
        value: E(a2.major_radius)
      }), v(r2, {
        type: `set_param`,
        id: e2,
        key: `minor_radius`,
        value: E(a2.minor_radius)
      }), o2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `segments`,
        value: E(a2.segments)
      }));
      o2 && n2(j(o2));
    },
    updateSweepOp: (e2, t2) => {
      let r2 = i2()._crdtEngine, a2;
      t2.twist_angle !== void 0 && (a2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `twist_angle`,
        value: E(t2.twist_angle)
      })), t2.scale_start !== void 0 && (a2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `scale_start`,
        value: E(t2.scale_start)
      })), t2.scale_end !== void 0 && (a2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `scale_end`,
        value: E(t2.scale_end)
      })), t2.path !== void 0 && (a2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `path`,
        value: D(JSON.stringify(t2.path))
      })), t2.orientation !== void 0 && (a2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `orientation`,
        value: E(t2.orientation)
      })), t2.path_segments !== void 0 && (a2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `path_segments`,
        value: E(t2.path_segments)
      })), t2.arc_segments !== void 0 && (a2 = v(r2, {
        type: `set_param`,
        id: e2,
        key: `arc_segments`,
        value: E(t2.arc_segments)
      })), a2 && n2(j(a2));
    },
    setFeatureParam: (e2, t2, r2) => {
      let a2 = i2()._crdtEngine;
      n2(j(v(a2, {
        type: `set_param`,
        id: e2,
        key: t2,
        value: r2
      })));
    },
    updateBooleanType: async (e2, t2) => {
      await i2().dispatch({
        type: `set_param`,
        id: e2,
        key: `boolean_type`,
        value: D(t2)
      });
    },
    applyBoolean: (e2, t2, r2) => {
      let a2 = i2()._crdtEngine, o2 = v(a2, {
        type: `add_feature`,
        feature: {
          type: `Boolean`,
          boolean_type: e2,
          input_a: t2,
          input_b: r2
        }
      });
      return n2(A(o2)), o2.createdFeatureId ?? null;
    },
    duplicateParts: (e2) => {
      let t2 = i2()._crdtEngine, r2 = t2.get_ordered_features_json(), a2 = JSON.parse(r2), o2 = [], s2;
      for (let n3 of e2) {
        let e3 = a2.find((e4) => e4.id === n3);
        if (!e3) continue;
        let r3 = {
          ...e3.params
        }, i3 = r3.offset;
        r3.offset = i3 && `Vec3` in i3 ? {
          Vec3: [
            i3.Vec3[0] + 10,
            i3.Vec3[1],
            i3.Vec3[2]
          ]
        } : {
          Vec3: [
            10,
            0,
            0
          ]
        };
        let c2 = r3.name;
        c2 && `String` in c2 && (r3.name = {
          String: c2.String + ` copy`
        }), s2 = v(t2, {
          type: `create_feature`,
          kind: e3.kind,
          params: r3
        }), s2.createdFeatureId && o2.push(s2.createdFeatureId);
      }
      return s2 && n2(j(s2)), o2;
    },
    loadDocument: (e2) => {
      var _a2, _b;
      let t2 = i2(), r2 = t2._crdtEngineClass;
      if (!r2) return;
      let a2 = null, o2 = null, s2 = null;
      try {
        switch (e2.kind) {
          case `crdt`:
            a2 = r2.load(e2.crdtBytes);
            break;
          case `loon`:
          case `legacy`:
            a2 = r2.from_v1_json(JSON.stringify(e2.document));
        }
        o2 = j({
          document: JSON.parse(a2.get_document_json()),
          parts: JSON.parse(a2.get_parts_json())
        }), s2 = e2.kind === `loon` ? e2.loonSource : null;
      } catch (e3) {
        if (console.error(`[document-store] loadDocument failed:`, e3), a2) try {
          a2.free();
        } catch {
        }
        return;
      }
      let c2 = t2._crdtEngine;
      if (n2({
        ...o2,
        _crdtEngine: a2,
        isDirty: false,
        loonSource: s2
      }), c2) try {
        c2.free();
      } catch (e3) {
        console.warn(`Failed to free previous engine (leaked):`, e3);
      }
      try {
        let t3 = e2.kind === `crdt` ? o2 == null ? void 0 : o2.document : e2.document, n3 = (t3 == null ? void 0 : t3.bindings) ?? {}, r3 = n3;
        if (Object.keys(n3).length > 0) try {
          let e3 = (_a2 = a2.remapBindings) == null ? void 0 : _a2.call(a2, JSON.stringify(n3));
          r3 = (e3 == null ? void 0 : e3.bindings) ?? n3, ((_b = e3 == null ? void 0 : e3.dropped) == null ? void 0 : _b.length) && console.warn(`[document-store] dropped ${e3.dropped.length} binding(s) that did not survive migration:`, e3.dropped);
        } catch (e3) {
          console.warn(`[document-store] binding remap unavailable:`, e3);
        }
        T.getState().reset({
          parameters: (t3 == null ? void 0 : t3.parameters) ?? {},
          bindings: r3
        });
      } catch {
        T.getState().reset();
      }
    },
    addFromIR: (e2, t2) => {
      let r2 = i2()._crdtEngine;
      if (t2 && e2.roots.length > 0) {
        let n3 = e2.roots[0], r3 = e2.nodes[String(n3.root)];
        r3 && (r3.name = t2);
      }
      let a2 = JSON.stringify(e2);
      if (n2({
        ...j(v(r2, {
          type: `import_ir`,
          document: JSON.parse(a2)
        })),
        isDirty: true
      }), e2.parameters || e2.bindings) {
        let t3 = T.getState();
        for (let [n3, r3] of Object.entries(e2.parameters ?? {})) t3.setParameter(n3, r3);
        for (let [n3, r3] of Object.entries(e2.bindings ?? {})) {
          let e3 = n3.indexOf(`:`);
          e3 > 0 && t3.setBinding(n3.slice(0, e3), n3.slice(e3 + 1), r3);
        }
      }
      return null;
    },
    addExtrude: (e2, t2, r2, a2, o2) => {
      if (r2.length === 0) return null;
      let s2 = i2()._crdtEngine;
      if (!s2 || s2.__wbg_ptr === 0) return console.warn(`[document-store] addExtrude: engine is null/freed`), null;
      let c2 = Math.sqrt(a2.x ** 2 + a2.y ** 2 + a2.z ** 2), l2 = c2 > 0 ? {
        x: a2.x / c2,
        y: a2.y / c2,
        z: a2.z / c2
      } : {
        x: 0,
        y: 0,
        z: 1
      }, u2 = {
        type: `Extrude`,
        sketch: k(r2, e2, t2),
        depth: c2,
        direction: [
          l2.x,
          l2.y,
          l2.z
        ]
      };
      (o2 == null ? void 0 : o2.twist_angle) != null && (u2.twist_angle = o2.twist_angle), (o2 == null ? void 0 : o2.scale_end) != null && (u2.scale_end = o2.scale_end);
      try {
        let e3 = v(s2, {
          type: `add_feature`,
          feature: u2
        });
        return n2(A(e3)), e3.createdFeatureId ?? null;
      } catch (e3) {
        return console.error(`[document-store] addExtrude crashed:`, e3), null;
      }
    },
    addRevolve: (e2, t2, r2, a2, o2, s2) => {
      if (r2.length === 0) return null;
      let c2 = i2()._crdtEngine, l2 = v(c2, {
        type: `add_feature`,
        feature: {
          type: `Revolve`,
          sketch: k(r2, e2, t2),
          axis_origin: [
            a2.x,
            a2.y,
            a2.z
          ],
          axis_dir: [
            o2.x,
            o2.y,
            o2.z
          ],
          angle_deg: s2
        }
      });
      return n2(A(l2)), l2.createdFeatureId ?? null;
    },
    addSweep: (e2, t2, r2, a2, o2 = {}) => {
      if (r2.length === 0) return null;
      let s2 = i2()._crdtEngine, c2 = {
        type: `Sweep`,
        sketch: k(r2, e2, t2),
        path: JSON.stringify(a2)
      };
      o2.twist_angle != null && (c2.twist_angle = o2.twist_angle), o2.scale_start != null && (c2.scale_start = o2.scale_start), o2.scale_end != null && (c2.scale_end = o2.scale_end);
      let l2 = v(s2, {
        type: `add_feature`,
        feature: c2
      });
      return n2(A(l2)), l2.createdFeatureId ?? null;
    },
    addLoft: (e2, t2 = {}) => {
      if (e2.length < 2) return null;
      let r2 = i2()._crdtEngine, a2 = {
        type: `Loft`,
        profiles: e2.map((e3) => k(e3.segments, e3.plane, e3.origin))
      };
      t2.closed != null && (a2.closed = t2.closed);
      let o2 = v(r2, {
        type: `add_feature`,
        feature: a2
      });
      return n2(A(o2)), o2.createdFeatureId ?? null;
    },
    addImportedMesh: (e2, t2, r2, a2) => {
      let o2 = i2()._crdtEngine, s2 = {
        type: `ImportedMesh`,
        positions_json: JSON.stringify(Array.from(e2)),
        indices_json: JSON.stringify(Array.from(t2))
      };
      r2 && (s2.normals_json = JSON.stringify(Array.from(r2))), a2 && (s2.source = a2);
      let c2 = v(o2, {
        type: `add_feature`,
        feature: s2
      });
      return n2(A(c2)), c2.createdFeatureId ?? ``;
    },
    addEmbroideryPattern: (e2, t2) => {
      var _a2;
      let r2 = i2()._crdtEngine, a2 = ((_a2 = t2 == null ? void 0 : t2.split(/[/\\]/).pop()) == null ? void 0 : _a2.replace(/\.(pes|dst)$/i, ``)) ?? `Embroidery`, o2 = {
        design: D(JSON.stringify(e2)),
        name: D(a2)
      };
      t2 && (o2.source = D(t2));
      let s2 = v(r2, {
        type: `create_feature`,
        kind: `embroidery-pattern`,
        params: o2
      });
      return n2(j(s2)), s2.createdFeatureId ?? ``;
    },
    addTextEmbroidery: async (e2) => {
      try {
        let t2 = await a(() => import("./vcad_kernel_wasm-CZ4lc4bq.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), []), n3 = JSON.stringify({
          stitch_type: e2.stitchType ?? `running`,
          color: e2.color ?? [
            0,
            0,
            0
          ],
          stitch_length: e2.stitchLength ?? 2.5,
          density: e2.density ?? 4,
          satin_width: e2.satinWidth ?? 3,
          fill_angle: e2.fillAngle ?? 0,
          letter_spacing: e2.letterSpacing ?? 1,
          line_spacing: e2.lineSpacing ?? 1.2,
          alignment: e2.alignment ?? `left`
        }), r2 = t2.digitizeText(e2.text, e2.height, n3), o2 = JSON.parse(r2), s2 = {
          threads: o2.threads,
          stitch_groups: o2.stitchPaths.map((e3) => ({
            thread_index: e3.threadIndex,
            stitches: e3.points
          })),
          hoop_width: o2.stats.width,
          hoop_height: o2.stats.height
        };
        return {
          partId: i2().addEmbroideryPattern(s2, `Text Embroidery`),
          result: o2
        };
      } catch (e3) {
        return console.error(`Failed to digitize text:`, e3), null;
      }
    },
    setThreadColor: async (e2, t2, n3) => {
      let r2 = i2(), a2 = r2.parts.find((t3) => t3.kind === `embroidery-pattern` && t3.patternNodeId === e2);
      if (!a2) return;
      let o2 = O(r2.document, e2);
      if (!o2) return;
      let s2 = structuredClone(o2);
      s2.threads[t2] && (s2.threads[t2].color = n3), await i2().dispatch({
        type: `set_param`,
        id: a2.id,
        key: `design`,
        value: D(JSON.stringify(s2))
      });
    },
    setThreadName: async (e2, t2, n3) => {
      let r2 = i2(), a2 = r2.parts.find((t3) => t3.kind === `embroidery-pattern` && t3.patternNodeId === e2);
      if (!a2) return;
      let o2 = O(r2.document, e2);
      if (!o2) return;
      let s2 = structuredClone(o2);
      s2.threads[t2] && (s2.threads[t2].name = n3), await i2().dispatch({
        type: `set_param`,
        id: a2.id,
        key: `design`,
        value: D(JSON.stringify(s2))
      });
    },
    setStitchGroupFillParams: (e2, t2, r2) => {
      let a2 = i2(), o2 = a2._crdtEngine, s2 = a2.parts.find((t3) => t3.kind === `embroidery-pattern` && t3.patternNodeId === e2);
      if (!s2) return;
      let c2 = O(a2.document, e2);
      if (!c2) return;
      let l2 = structuredClone(c2);
      if (l2.stitch_groups[t2]) {
        let e3 = l2.stitch_groups[t2];
        e3.fill_params = {
          ...e3.fill_params ?? d,
          ...r2
        };
      }
      n2(j(v(o2, {
        type: `set_param`,
        id: s2.id,
        key: `design`,
        value: D(JSON.stringify(l2))
      })));
    },
    optimizeJumpStitches: (e2) => {
      let t2 = i2(), r2 = t2._crdtEngine, a2 = t2.parts.find((t3) => t3.kind === `embroidery-pattern` && t3.patternNodeId === e2);
      if (!a2) return;
      let o2 = O(t2.document, e2);
      if (!o2 || o2.stitch_groups.length <= 1) return;
      let s2 = structuredClone(o2), c2 = s2.stitch_groups, l2 = /* @__PURE__ */ new Set(), u2 = [], d2 = (e3) => {
        let t3 = e3.stitches;
        return t3.length > 0 ? t3[t3.length - 1] : [
          0,
          0
        ];
      }, f2 = (e3) => {
        let t3 = e3.stitches;
        return t3.length > 0 ? t3[0] : [
          0,
          0
        ];
      };
      u2.push(c2[0]), l2.add(0);
      for (let e3 = 1; e3 < c2.length; e3++) {
        let [e4, t3] = d2(u2[u2.length - 1]), n3 = -1, r3 = 1 / 0;
        for (let i3 = 0; i3 < c2.length; i3++) {
          if (l2.has(i3)) continue;
          let [a3, o3] = f2(c2[i3]), s3 = (a3 - e4) ** 2 + (o3 - t3) ** 2;
          s3 < r3 && (r3 = s3, n3 = i3);
        }
        n3 >= 0 && (u2.push(c2[n3]), l2.add(n3));
      }
      s2.stitch_groups = u2, n2(j(v(r2, {
        type: `set_param`,
        id: a2.id,
        key: `design`,
        value: D(JSON.stringify(s2))
      })));
    },
    addFillet: (e2, t2) => {
      let r2 = i2()._crdtEngine, a2 = v(r2, {
        type: `add_feature`,
        feature: {
          type: `Fillet`,
          input: e2,
          radius: t2
        }
      });
      return n2(A(a2)), a2.createdFeatureId ?? null;
    },
    addChamfer: (e2, t2) => {
      let r2 = i2()._crdtEngine, a2 = v(r2, {
        type: `add_feature`,
        feature: {
          type: `Chamfer`,
          input: e2,
          distance: t2
        }
      });
      return n2(A(a2)), a2.createdFeatureId ?? null;
    },
    addShell: (e2, t2) => {
      let r2 = i2()._crdtEngine, a2 = v(r2, {
        type: `add_feature`,
        feature: {
          type: `Shell`,
          input: e2,
          thickness: t2
        }
      });
      return n2(A(a2)), a2.createdFeatureId ?? null;
    },
    addStitch: async (e2, t2) => {
      let r2 = i2(), o2 = r2.partIndex.get(e2);
      if (!o2 || !Re(o2)) return null;
      try {
        let s2 = await a(() => import("./vcad_kernel_wasm-CZ4lc4bq.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), []), c2;
        if (Pe(o2)) {
          let e3 = r2.document.nodes[String(o2.textNodeId)];
          if (!e3 || e3.op.type !== `Text2D`) return null;
          let n3 = e3.op, i3 = JSON.stringify({
            stitch_type: t2.stitchType ?? `running`,
            color: t2.color ?? [
              0,
              0,
              0
            ],
            stitch_length: t2.stitchLength ?? 2.5,
            density: t2.density ?? 4,
            satin_width: t2.satinWidth ?? 3,
            fill_angle: t2.fillAngle ?? 0,
            letter_spacing: n3.letter_spacing ?? 1,
            line_spacing: n3.line_spacing ?? 1.2,
            alignment: n3.alignment ?? `left`
          });
          c2 = s2.digitizeText(n3.text, n3.height, i3);
        } else {
          let e3;
          if (Ce(o2)) {
            let t3 = r2.document.nodes[String(o2.extrudeNodeId)];
            (t3 == null ? void 0 : t3.op.type) === `Extrude` && (e3 = t3.op.sketch);
          } else if (we(o2)) {
            let t3 = r2.document.nodes[String(o2.revolveNodeId)];
            (t3 == null ? void 0 : t3.op.type) === `Revolve` && (e3 = t3.op.sketch);
          } else if (Te(o2)) {
            let t3 = r2.document.nodes[String(o2.sweepNodeId)];
            (t3 == null ? void 0 : t3.op.type) === `Sweep` && (e3 = t3.op.sketch);
          } else Ee(o2) && (e3 = o2.sketchNodeIds[0]);
          if (e3 == null) return null;
          let n3 = r2.document.nodes[String(e3)];
          if (!n3 || n3.op.type !== `Sketch2D`) return null;
          let i3 = JSON.stringify(n3.op.segments), a2 = JSON.stringify({
            stitch_type: t2.stitchType ?? `running`,
            color: t2.color ?? [
              0,
              0,
              0
            ],
            stitch_length: t2.stitchLength ?? 2.5,
            density: t2.density ?? 4,
            satin_width: t2.satinWidth ?? 3,
            fill_angle: t2.fillAngle ?? 0
          });
          c2 = s2.digitizeSketch(i3, a2);
        }
        let l2 = JSON.parse(c2), u2 = {
          threads: l2.threads,
          stitch_groups: l2.stitchPaths.map((e3) => ({
            thread_index: e3.threadIndex,
            stitches: e3.points
          })),
          hoop_width: l2.stats.width,
          hoop_height: l2.stats.height
        }, d2 = i2()._crdtEngine, f2 = {
          design: D(JSON.stringify(u2)),
          name: D(`Stitch`)
        };
        f2.input = pt(e2);
        let p2 = d2.create_feature(`embroidery-pattern`, JSON.stringify(f2));
        return d2.delete_feature(e2), n2({
          ...j(p2),
          isDirty: true
        }), p2.createdFeatureId ?? null;
      } catch (e3) {
        return console.error(`Failed to create stitch:`, e3), null;
      }
    },
    addLinearPattern: (e2, t2, r2, a2) => {
      let o2 = i2()._crdtEngine, s2 = v(o2, {
        type: `add_feature`,
        feature: {
          type: `LinearPattern`,
          input: e2,
          direction: [
            t2.x,
            t2.y,
            t2.z
          ],
          count: r2,
          spacing: a2
        }
      });
      return n2(A(s2)), s2.createdFeatureId ?? null;
    },
    addCircularPattern: (e2, t2, r2, a2, o2) => {
      let s2 = i2()._crdtEngine, c2 = v(s2, {
        type: `add_feature`,
        feature: {
          type: `CircularPattern`,
          input: e2,
          axis_origin: [
            t2.x,
            t2.y,
            t2.z
          ],
          axis_dir: [
            r2.x,
            r2.y,
            r2.z
          ],
          count: a2,
          angle_deg: o2
        }
      });
      return n2(A(c2)), c2.createdFeatureId ?? null;
    },
    addMirror: (e2, t2) => {
      let r2 = i2()._crdtEngine, a2 = v(r2, {
        type: `add_feature`,
        feature: {
          type: `Mirror`,
          input: e2,
          plane: t2
        }
      });
      return n2(A(a2)), a2.createdFeatureId ?? null;
    },
    addText: (e2) => {
      let { text: t2, height: r2, depth: a2, alignment: o2, letterSpacing: s2, lineSpacing: c2 } = e2;
      if (!t2.trim()) return null;
      let l2 = i2()._crdtEngine, u2 = {
        type: `Text`,
        text: t2,
        height: r2,
        depth: a2
      };
      o2 && (u2.alignment = o2), s2 !== void 0 && (u2.letter_spacing = s2), c2 !== void 0 && (u2.line_spacing = c2);
      let d2 = v(l2, {
        type: `add_feature`,
        feature: u2
      });
      return n2(A(d2)), d2.createdFeatureId ?? null;
    },
    setPartMaterial: async (e2, t2) => {
      await i2().dispatch({
        type: `set_material`,
        id: e2,
        material: t2
      });
    },
    renamePart: async (e2, t2) => {
      await i2().dispatch({
        type: `rename`,
        id: e2,
        name: t2
      });
    },
    undo: () => {
      let e2 = i2()._crdtEngine;
      e2.can_undo() && n2(j(v(e2, {
        type: `undo`
      })));
    },
    redo: () => {
      let e2 = i2()._crdtEngine;
      e2.can_redo() && n2(j(v(e2, {
        type: `redo`
      })));
    },
    canUndo: () => {
      let e2 = i2()._crdtEngine;
      return e2 ? e2.can_undo() : false;
    },
    canRedo: () => {
      let e2 = i2()._crdtEngine;
      return e2 ? e2.can_redo() : false;
    },
    markSaved: () => {
      n2({
        isDirty: false,
        lastSavedAt: Date.now()
      });
    },
    setInstanceTransform: (e2, t2) => {
      let r2 = i2()._crdtEngine;
      n2(j(v(r2, {
        type: `set_param`,
        id: e2,
        key: `transform`,
        value: D(JSON.stringify(t2))
      })));
    },
    setInstanceMaterial: async (e2, t2) => {
      await i2().dispatch({
        type: `set_param`,
        id: e2,
        key: `material`,
        value: D(t2)
      });
    },
    setJointState: (e2, t2) => {
      let r2 = i2()._crdtEngine;
      n2(A(v(r2, {
        type: `set_joint_state`,
        id: e2,
        state: t2
      })));
    },
    createPartDef: (e2, t2) => {
      let r2 = i2()._crdtEngine, a2 = {
        type: `PartDef`,
        source_feature: e2
      };
      t2 && (a2.name = t2);
      let o2 = v(r2, {
        type: `add_feature`,
        feature: a2
      });
      return n2(A(o2)), o2.createdFeatureId ?? null;
    },
    createInstance: (e2, t2, r2) => {
      let a2 = i2()._crdtEngine, o2 = {
        type: `Instance`,
        part_def: e2
      };
      t2 && (o2.name = t2), r2 && (o2.transform = JSON.stringify(r2));
      let s2 = v(a2, {
        type: `add_feature`,
        feature: o2
      });
      return n2(A(s2)), s2.createdFeatureId ?? ``;
    },
    addJoint: (e2) => {
      let t2 = i2()._crdtEngine, r2 = e2.kind, a2 = {
        type: `Joint`,
        kind: typeof e2.kind == `string` ? e2.kind : e2.kind.type,
        child_instance: e2.childInstanceId,
        anchor_a: [
          e2.parentAnchor.x,
          e2.parentAnchor.y,
          e2.parentAnchor.z
        ],
        anchor_b: [
          e2.childAnchor.x,
          e2.childAnchor.y,
          e2.childAnchor.z
        ]
      };
      if (e2.parentInstanceId && (a2.parent_instance = e2.parentInstanceId), e2.name && (a2.name = e2.name), r2.axis) {
        let e3 = r2.axis;
        a2.axis = [
          e3.x,
          e3.y,
          e3.z
        ];
      }
      let o2 = v(t2, {
        type: `add_feature`,
        feature: a2
      });
      return n2(A(o2)), o2.createdFeatureId ?? ``;
    },
    deleteInstance: (e2) => {
      let t2 = i2()._crdtEngine, r2 = t2.get_ordered_features_json(), a2 = JSON.parse(r2);
      for (let n3 of a2) if (n3.kind === `joint`) {
        let r3 = n3.params.parent_instance, i3 = n3.params.child_instance;
        (r3 && r3.FeatureRef === e2 || i3 && i3.FeatureRef === e2) && v(t2, {
          type: `delete_feature`,
          id: n3.id
        });
      }
      n2(A(v(t2, {
        type: `delete_feature`,
        id: e2
      })));
    },
    deleteJoint: async (e2) => {
      await i2().dispatch({
        type: `delete_feature`,
        id: e2
      });
    },
    setGroundInstance: (e2) => {
      let t2 = i2(), r2 = t2._crdtEngine;
      if (t2.document.groundInstanceId) {
        let t3 = r2.get_ordered_features_json(), n3 = JSON.parse(t3).find((t4) => t4.kind === `instance` && t4.id !== e2);
        n3 && v(r2, {
          type: `set_param`,
          id: n3.id,
          key: `is_ground`,
          value: ft(false)
        });
      }
      n2(j(v(r2, {
        type: `set_param`,
        id: e2,
        key: `is_ground`,
        value: ft(true)
      })));
    },
    renameInstance: async (e2, t2) => {
      await i2().dispatch({
        type: `set_param`,
        id: e2,
        key: `name`,
        value: D(t2)
      });
    },
    setDocumentMeta: (e2, t2) => {
      n2({
        documentId: e2,
        documentName: t2
      });
    },
    setDocumentName: (e2) => {
      n2({
        documentName: e2,
        isDirty: true
      });
    },
    newDocument: (e2, t2) => {
      let r2 = i2(), a2 = r2._crdtEngine, o2 = {
        document: f(),
        parts: [],
        partIndex: /* @__PURE__ */ new Map(),
        consumedParts: {},
        nextNodeId: 1
      };
      r2._crdtEngineClass && (M = null, N = null, P = null, I = null, a2 = new r2._crdtEngineClass(), o2 = j({
        document: JSON.parse(a2.get_document_json()),
        parts: JSON.parse(a2.get_parts_json())
      })), n2({
        ...o2,
        isDirty: false,
        documentId: e2,
        documentName: t2,
        lastSavedAt: null,
        isParameterDragging: false,
        isTransientEval: false,
        loonSource: null,
        _crdtEngine: a2
      });
    },
    clearDirtyNodes: () => /* @__PURE__ */ new Set(),
    setParameterDragging: (e2) => {
      n2({
        isParameterDragging: e2
      });
    },
    setTransientEval: (e2) => {
      n2({
        isTransientEval: e2
      });
    },
    applyTool: (e2, t2) => {
      let r2 = i2()._crdtEngine;
      if (!r2) return null;
      let a2 = Ge(r2, e2, t2);
      return (a2 == null ? void 0 : a2.ok) && n2(A(a2.result)), a2;
    },
    setPartVisible: async (e2, t2) => {
      await i2().dispatch({
        type: `set_visible`,
        id: e2,
        visible: t2
      });
    },
    reorderPart: (e2, t2) => {
      let r2 = i2(), a2 = r2._crdtEngine;
      if (!r2.partIndex.get(e2)) return;
      let o2 = r2.parts.findIndex((t3) => t3.id === e2);
      o2 !== -1 && o2 !== t2 && n2(j(v(a2, {
        type: `reorder`,
        id: e2,
        index: t2
      })));
    },
    setAnalysisStudies: (e2) => {
      let t2 = i2(), r2 = t2._crdtEngine;
      v(r2, {
        type: `set_param`,
        id: bt(t2),
        key: `studies`,
        value: D(JSON.stringify(e2))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    setSceneSettings: (e2) => {
      let t2 = i2(), r2 = t2._crdtEngine, a2 = F(t2);
      e2.environment && v(r2, {
        type: `set_param`,
        id: a2,
        key: `environment`,
        value: D(JSON.stringify(e2.environment))
      }), e2.lights && v(r2, {
        type: `set_param`,
        id: a2,
        key: `lights`,
        value: D(JSON.stringify(e2.lights))
      }), e2.background && v(r2, {
        type: `set_param`,
        id: a2,
        key: `background`,
        value: D(JSON.stringify(e2.background))
      }), e2.postProcessing && v(r2, {
        type: `set_param`,
        id: a2,
        key: `post_processing`,
        value: D(JSON.stringify(e2.postProcessing))
      }), e2.cameraPresets && v(r2, {
        type: `set_param`,
        id: a2,
        key: `camera_presets`,
        value: D(JSON.stringify(e2.cameraPresets))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    setDrawingSettings: (e2) => {
      let t2 = i2(), r2 = t2._crdtEngine, a2 = xt(t2);
      e2.titleBlock && v(r2, {
        type: `set_param`,
        id: a2,
        key: `title_block`,
        value: D(JSON.stringify(e2.titleBlock))
      }), e2.sections && v(r2, {
        type: `set_param`,
        id: a2,
        key: `sections`,
        value: D(JSON.stringify(e2.sections))
      }), e2.showBom !== void 0 && v(r2, {
        type: `set_param`,
        id: a2,
        key: `show_bom`,
        value: D(JSON.stringify(e2.showBom))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    updateEnvironment: (e2) => {
      let t2 = i2(), r2 = t2._crdtEngine;
      v(r2, {
        type: `set_param`,
        id: F(t2),
        key: `environment`,
        value: D(JSON.stringify(e2))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    updateLights: (e2) => {
      let t2 = i2(), r2 = t2._crdtEngine;
      v(r2, {
        type: `set_param`,
        id: F(t2),
        key: `lights`,
        value: D(JSON.stringify(e2))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    addLight: (e2) => {
      var _a2;
      let t2 = i2(), r2 = t2._crdtEngine, a2 = [
        ...((_a2 = t2.document.scene) == null ? void 0 : _a2.lights) ?? [],
        e2
      ];
      v(r2, {
        type: `set_param`,
        id: F(t2),
        key: `lights`,
        value: D(JSON.stringify(a2))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    removeLight: (e2) => {
      var _a2;
      let t2 = i2(), r2 = t2._crdtEngine, a2 = (((_a2 = t2.document.scene) == null ? void 0 : _a2.lights) ?? []).filter((t3) => t3.id !== e2);
      v(r2, {
        type: `set_param`,
        id: F(t2),
        key: `lights`,
        value: D(JSON.stringify(a2))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    updateLight: (e2, t2) => {
      var _a2;
      let r2 = i2(), a2 = r2._crdtEngine, o2 = (((_a2 = r2.document.scene) == null ? void 0 : _a2.lights) ?? []).map((n3) => n3.id === e2 ? {
        ...n3,
        ...t2
      } : n3);
      v(a2, {
        type: `set_param`,
        id: F(r2),
        key: `lights`,
        value: D(JSON.stringify(o2))
      }), n2({
        document: JSON.parse(a2.get_document_json()),
        isDirty: true
      });
    },
    updateBackground: (e2) => {
      let t2 = i2(), r2 = t2._crdtEngine;
      v(r2, {
        type: `set_param`,
        id: F(t2),
        key: `background`,
        value: D(JSON.stringify(e2))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    updatePostProcessing: (e2) => {
      let t2 = i2(), r2 = t2._crdtEngine;
      v(r2, {
        type: `set_param`,
        id: F(t2),
        key: `post_processing`,
        value: D(JSON.stringify(e2))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    addCameraPreset: (e2) => {
      var _a2;
      let t2 = i2(), r2 = t2._crdtEngine, a2 = [
        ...((_a2 = t2.document.scene) == null ? void 0 : _a2.cameraPresets) ?? [],
        e2
      ];
      v(r2, {
        type: `set_param`,
        id: F(t2),
        key: `camera_presets`,
        value: D(JSON.stringify(a2))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    removeCameraPreset: (e2) => {
      var _a2;
      let t2 = i2(), r2 = t2._crdtEngine, a2 = (((_a2 = t2.document.scene) == null ? void 0 : _a2.cameraPresets) ?? []).filter((t3) => t3.id !== e2);
      v(r2, {
        type: `set_param`,
        id: F(t2),
        key: `camera_presets`,
        value: D(JSON.stringify(a2))
      }), n2({
        document: JSON.parse(r2.get_document_json()),
        isDirty: true
      });
    },
    initSchematic: (e2) => {
      let t2 = i2(), r2 = St(t2), a2 = {
        title: e2 ?? `Sheet 1`,
        components: [],
        wires: [],
        junctions: [],
        labels: []
      };
      n2(j(v(t2._crdtEngine, {
        type: `set_param`,
        id: r2,
        key: `sheet`,
        value: D(JSON.stringify(a2))
      })));
    },
    initPcb: (e2) => Ct(i2, n2, `pcb_init`, {
      width: e2 == null ? void 0 : e2.width,
      height: e2 == null ? void 0 : e2.height,
      layers: e2 == null ? void 0 : e2.layers,
      thickness: e2 == null ? void 0 : e2.thickness,
      trace_width: e2 == null ? void 0 : e2.traceWidth,
      clearance: e2 == null ? void 0 : e2.clearance,
      name: e2 == null ? void 0 : e2.name
    }),
    importPcb: (e2, t2) => Ct(i2, n2, `pcb_import`, {
      board: e2,
      name: t2 ?? `Imported PCB`
    }),
    syncSchematicToPcb: (e2, t2, r2) => {
      let { pcb: a2, schematic: o2 } = i2().document;
      a2 && o2 && L(i2, n2, `pcb_sync_schematic`, {
        netlist: t2,
        place_unplaced: r2 == null ? void 0 : r2.placeUnplaced
      });
    },
    moveSchematicComponent: (e2, t2) => {
      L(i2, n2, `sch_move_component`, {
        index: e2,
        position: {
          x: t2.x,
          y: t2.y
        }
      });
    },
    moveSchematicComponentWithWires: (e2, t2, r2) => {
      L(i2, n2, `sch_move_component`, {
        index: e2,
        position: {
          x: t2.x,
          y: t2.y
        },
        wire_updates: r2.map((e3) => ({
          wire_index: e3.wireIdx,
          endpoint: e3.endpoint,
          position: {
            x: e3.pos.x,
            y: e3.pos.y
          }
        }))
      });
    },
    moveFootprint: (e2, t2, r2) => {
      L(i2, n2, `pcb_move_footprint`, {
        index: t2,
        position: {
          x: r2.x,
          y: r2.y
        }
      });
    },
    rotateFootprint: (e2, t2, r2) => {
      L(i2, n2, `pcb_rotate_footprint`, {
        index: t2,
        angle: r2
      });
    },
    flipFootprint: (e2, t2) => {
      L(i2, n2, `pcb_flip_footprint`, {
        index: t2
      });
    },
    addTrace: (e2, t2) => {
      L(i2, n2, `pcb_add_trace`, {
        trace: {
          start: {
            x: t2.start.x,
            y: t2.start.y
          },
          end: {
            x: t2.end.x,
            y: t2.end.y
          },
          width: t2.width,
          layer: t2.layer,
          net: t2.net
        }
      });
    },
    removeTrace: (e2, t2) => {
      L(i2, n2, `pcb_remove_trace`, {
        index: t2
      });
    },
    addVia: (e2, t2) => {
      L(i2, n2, `pcb_add_via`, {
        via: {
          position: {
            x: t2.position.x,
            y: t2.position.y
          },
          diameter: t2.diameter,
          drill: t2.drill,
          startLayer: t2.startLayer,
          endLayer: t2.endLayer,
          net: t2.net
        }
      });
    },
    removeVia: (e2, t2) => {
      L(i2, n2, `pcb_remove_via`, {
        index: t2
      });
    },
    addSchematicComponent: (e2, t2) => {
      L(i2, n2, `sch_add_component`, {
        component: e2
      });
    },
    removeSchematicComponent: (e2, t2) => {
      L(i2, n2, `sch_remove_component`, {
        index: e2
      });
    },
    updateSchematicComponent: (e2, t2, r2) => {
      L(i2, n2, `sch_update_component`, {
        index: e2,
        updates: t2
      });
    },
    addSchematicWire: (e2) => {
      L(i2, n2, `sch_add_wire`, {
        wire: {
          start: {
            ...e2.start
          },
          end: {
            ...e2.end
          }
        }
      });
    },
    removeSchematicWire: (e2) => {
      L(i2, n2, `sch_remove_wire`, {
        index: e2
      });
    },
    addSchematicLabel: (e2) => {
      L(i2, n2, `sch_add_label`, {
        label: e2
      });
    },
    removeSchematicLabel: (e2) => {
      L(i2, n2, `sch_remove_label`, {
        index: e2
      });
    },
    addSchematicJunction: (e2) => {
      L(i2, n2, `sch_add_junction`, {
        junction: {
          position: {
            ...e2.position
          }
        }
      });
    },
    addFootprint: (e2, t2) => {
      L(i2, n2, `pcb_add_footprint`, {
        footprint: t2
      });
    },
    removeFootprint: (e2, t2) => {
      L(i2, n2, `pcb_remove_footprint`, {
        index: t2
      });
    },
    setBoardOutline: (e2) => {
      L(i2, n2, `pcb_set_outline`, {
        outline: e2
      });
    },
    resizeBoard: (e2, t2) => {
      L(i2, n2, `pcb_resize`, {
        width: e2,
        height: t2
      });
    },
    persistSketchConstraints: (e2, t2) => {
      var _a2;
      let r2 = i2(), a2 = (_a2 = r2.partIndex.get(e2)) == null ? void 0 : _a2.sketchNodeId;
      if (a2 == null) return;
      let o2 = Je(r2.document.constraints ?? [], a2, t2);
      (o2.length !== 0 || (r2.document.constraints ?? []).length !== 0) && L(i2, n2, `set_design_constraints`, {
        constraints: o2
      });
    },
    addDesignConstraint: (e2) => L(i2, n2, `add_design_constraint`, {
      constraint: e2
    }) ? i2().solveDesignConstraints() : null,
    removeDesignConstraint: (e2) => {
      L(i2, n2, `remove_design_constraint`, {
        id: e2
      });
    },
    updateDesignConstraint: (e2, t2) => L(i2, n2, `update_design_constraint`, {
      id: e2,
      value: t2.value,
      driven: t2.driven
    }) ? i2().solveDesignConstraints() : null,
    solveDesignConstraints: (e2) => {
      let t2 = i2();
      if ((t2.document.constraints ?? []).length === 0) return null;
      let a2 = r();
      if (!a2 || typeof a2.solveDesignConstraints != `function`) return null;
      try {
        let r2 = a2.solveDesignConstraints(JSON.stringify(t2.document), JSON.stringify((e2 == null ? void 0 : e2.extraFixed) ? {
          extraFixed: e2.extraFixed
        } : {})), o2 = JSON.parse(r2), { report: s2 } = o2;
        return L(i2, n2, `apply_design_solve`, {
          document: o2.document,
          report: s2
        }), s2;
      } catch (e3) {
        return console.warn(`[document-store] solveDesignConstraints failed:`, e3), null;
      }
    }
  }));
  function R() {
    return r();
  }
  function Tt(e2) {
    return JSON.stringify(typeof e2 == `string` ? e2 : {
      origin: [
        e2.origin.x,
        e2.origin.y,
        e2.origin.z
      ],
      xDir: [
        e2.xDir.x,
        e2.xDir.y,
        e2.xDir.z
      ],
      yDir: [
        e2.yDir.x,
        e2.yDir.y,
        e2.yDir.z
      ]
    });
  }
  Et = function(e2) {
    let t2 = R();
    if (t2 == null ? void 0 : t2.sketchPlaneBasis) {
      let n2 = t2.sketchPlaneBasis(Tt(e2)), r2 = JSON.parse(n2);
      return {
        origin: {
          x: r2.origin[0],
          y: r2.origin[1],
          z: r2.origin[2]
        },
        xDir: {
          x: r2.xDir[0],
          y: r2.xDir[1],
          z: r2.xDir[2]
        },
        yDir: {
          x: r2.yDir[0],
          y: r2.yDir[1],
          z: r2.yDir[2]
        },
        normal: {
          x: r2.normal[0],
          y: r2.normal[1],
          z: r2.normal[2]
        }
      };
    }
    return Dt(e2);
  };
  function Dt(e2) {
    if (typeof e2 == `string`) switch (e2) {
      case `XY`:
        return {
          origin: {
            x: 0,
            y: 0,
            z: 0
          },
          xDir: {
            x: 1,
            y: 0,
            z: 0
          },
          yDir: {
            x: 0,
            y: 1,
            z: 0
          },
          normal: {
            x: 0,
            y: 0,
            z: 1
          }
        };
      case `XZ`:
        return {
          origin: {
            x: 0,
            y: 0,
            z: 0
          },
          xDir: {
            x: 1,
            y: 0,
            z: 0
          },
          yDir: {
            x: 0,
            y: 0,
            z: 1
          },
          normal: {
            x: 0,
            y: -1,
            z: 0
          }
        };
      case `YZ`:
        return {
          origin: {
            x: 0,
            y: 0,
            z: 0
          },
          xDir: {
            x: 0,
            y: 1,
            z: 0
          },
          yDir: {
            x: 0,
            y: 0,
            z: 1
          },
          normal: {
            x: 1,
            y: 0,
            z: 0
          }
        };
    }
    return {
      origin: e2.origin,
      xDir: e2.xDir,
      yDir: e2.yDir,
      normal: e2.normal
    };
  }
  Ot = function(e2, t2, n2) {
    let r2 = R();
    if (r2 == null ? void 0 : r2.sketchSnap) {
      let i2 = r2.sketchSnap(JSON.stringify(e2), t2.x, t2.y, n2.gridEnabled, n2.gridSize, n2.pointEnabled, n2.pointTolerance), a2 = JSON.parse(i2);
      return {
        snapped: {
          x: a2.x,
          y: a2.y
        },
        target: a2.snapTarget ? {
          x: a2.snapTarget[0],
          y: a2.snapTarget[1]
        } : null
      };
    }
    return kt(e2, t2, n2);
  };
  function kt(e2, t2, n2) {
    if (n2.pointEnabled) {
      let r2 = n2.pointTolerance, i2 = r2 * r2;
      for (let n3 of e2) for (let e3 of [
        n3.start,
        n3.end
      ]) {
        let n4 = t2.x - e3.x, r3 = t2.y - e3.y;
        if (n4 * n4 + r3 * r3 < i2) return {
          snapped: {
            x: e3.x,
            y: e3.y
          },
          target: {
            x: e3.x,
            y: e3.y
          }
        };
      }
    }
    if (n2.gridEnabled && n2.gridSize > 0) {
      let e3 = n2.gridSize;
      return {
        snapped: {
          x: Math.round(t2.x / e3) * e3,
          y: Math.round(t2.y / e3) * e3
        },
        target: null
      };
    }
    return {
      snapped: t2,
      target: null
    };
  }
  At = function(e2, t2, n2) {
    let r2 = R();
    if (r2 == null ? void 0 : r2.sketchHitTest) {
      let i2 = r2.sketchHitTest(JSON.stringify(e2), t2.x, t2.y, n2);
      return i2 < 0 ? null : i2;
    }
    return jt(e2, t2, n2);
  };
  function jt(e2, t2, n2) {
    let r2 = null;
    for (let i2 = 0; i2 < e2.length; i2++) {
      let a2 = e2[i2], o2;
      if (a2.type === `Line`) o2 = Mt(t2, a2.start, a2.end);
      else {
        let e3 = Math.hypot(a2.start.x - a2.center.x, a2.start.y - a2.center.y);
        o2 = Math.abs(Math.hypot(t2.x - a2.center.x, t2.y - a2.center.y) - e3);
      }
      o2 < n2 && (r2 === null || o2 < r2.dist) && (r2 = {
        idx: i2,
        dist: o2
      });
    }
    return r2 ? r2.idx : null;
  }
  function Mt(e2, t2, n2) {
    let r2 = n2.x - t2.x, i2 = n2.y - t2.y, a2 = r2 * r2 + i2 * i2;
    if (a2 < 1e-8) return Math.hypot(e2.x - t2.x, e2.y - t2.y);
    let o2 = Math.max(0, Math.min(1, ((e2.x - t2.x) * r2 + (e2.y - t2.y) * i2) / a2));
    return Math.hypot(e2.x - (t2.x + o2 * r2), e2.y - (t2.y + o2 * i2));
  }
  function Nt(e2, t2) {
    let n2 = R();
    if (n2 == null ? void 0 : n2.sketchRectangleSegments) {
      let r3 = n2.sketchRectangleSegments(e2.x, e2.y, t2.x, t2.y);
      return JSON.parse(r3);
    }
    let r2 = Math.min(e2.x, t2.x), i2 = Math.max(e2.x, t2.x), a2 = Math.min(e2.y, t2.y), o2 = Math.max(e2.y, t2.y);
    return [
      {
        type: `Line`,
        start: {
          x: r2,
          y: a2
        },
        end: {
          x: i2,
          y: a2
        }
      },
      {
        type: `Line`,
        start: {
          x: i2,
          y: a2
        },
        end: {
          x: i2,
          y: o2
        }
      },
      {
        type: `Line`,
        start: {
          x: i2,
          y: o2
        },
        end: {
          x: r2,
          y: o2
        }
      },
      {
        type: `Line`,
        start: {
          x: r2,
          y: o2
        },
        end: {
          x: r2,
          y: a2
        }
      }
    ];
  }
  Pt = function(e2) {
    if (e2.length === 0) return null;
    let t2 = 1 / 0, n2 = -1 / 0, r2 = 1 / 0, i2 = -1 / 0, a2 = (e3, a3) => {
      e3 < t2 && (t2 = e3), e3 > n2 && (n2 = e3), a3 < r2 && (r2 = a3), a3 > i2 && (i2 = a3);
    };
    for (let t3 of e2) if (a2(t3.start.x, t3.start.y), a2(t3.end.x, t3.end.y), t3.type === `Arc`) {
      let e3 = Math.hypot(t3.start.x - t3.center.x, t3.start.y - t3.center.y), n3 = Math.atan2(t3.start.y - t3.center.y, t3.start.x - t3.center.x), r3 = Math.atan2(t3.end.y - t3.center.y, t3.end.x - t3.center.x) - n3;
      t3.ccw && r3 < 0 && (r3 += 2 * Math.PI), !t3.ccw && r3 > 0 && (r3 -= 2 * Math.PI);
      let i3 = [
        0,
        Math.PI / 2,
        Math.PI,
        -Math.PI / 2
      ];
      for (let o2 of i3) {
        let i4 = o2 - n3;
        if (t3.ccw) {
          for (; i4 < 0; ) i4 += 2 * Math.PI;
          for (; i4 > 2 * Math.PI; ) i4 -= 2 * Math.PI;
          i4 <= r3 && a2(t3.center.x + e3 * Math.cos(o2), t3.center.y + e3 * Math.sin(o2));
        } else {
          for (; i4 > 0; ) i4 -= 2 * Math.PI;
          for (; i4 < -2 * Math.PI; ) i4 += 2 * Math.PI;
          i4 >= r3 && a2(t3.center.x + e3 * Math.cos(o2), t3.center.y + e3 * Math.sin(o2));
        }
      }
    }
    return !isFinite(t2) || !isFinite(n2) || !isFinite(r2) || !isFinite(i2) ? null : {
      minU: t2,
      maxU: n2,
      minV: r2,
      maxV: i2
    };
  };
  function Ft(e2, t2, n2 = 32) {
    let r2 = R();
    if (r2 == null ? void 0 : r2.sketchCircleSegments) {
      let i3 = r2.sketchCircleSegments(e2.x, e2.y, t2, n2);
      return JSON.parse(i3);
    }
    let i2 = Math.max(3, n2), a2 = [];
    for (let n3 = 0; n3 < i2; n3++) {
      let r3 = 2 * Math.PI * n3 / i2, o2 = 2 * Math.PI * (n3 + 1) / i2;
      a2.push({
        type: `Arc`,
        start: {
          x: e2.x + t2 * Math.cos(r3),
          y: e2.y + t2 * Math.sin(r3)
        },
        end: {
          x: e2.x + t2 * Math.cos(o2),
          y: e2.y + t2 * Math.sin(o2)
        },
        center: e2,
        ccw: true
      });
    }
    return a2;
  }
  var It = 100, Lt = {
    extrude: {
      kind: `extrude`,
      depth: 20,
      flip: false,
      twistDeg: 0,
      scaleEnd: 1
    },
    revolve: {
      kind: `revolve`,
      angleDeg: 360,
      flip: false
    },
    sweep: {
      kind: `sweep`,
      pathType: `line`,
      height: 20,
      radius: 10,
      turns: 2
    },
    loft: {
      kind: `loft`,
      closed: false
    }
  }, Rt = (e2, t2) => Nt(e2, t2), zt = (e2, t2, n2 = 32) => Ft(e2, t2, n2), Bt = 0;
  function Vt(e2, t2, n2) {
    return !e2 || t2.length === 0 ? `under` : n2 ? `solved` : `error`;
  }
  function z(e2) {
    return {
      segments: [
        ...e2.segments
      ],
      constraints: [
        ...e2.constraints
      ],
      points: [
        ...e2.points
      ],
      selectedSegments: [
        ...e2.selectedSegments
      ],
      solved: e2.solved,
      constraintStatus: e2.constraintStatus
    };
  }
  Ht = n((e2, t2) => {
    function n2() {
      let n3 = t2(), r2 = [
        ...n3.history,
        z(n3)
      ];
      r2.length > It && r2.shift(), e2({
        history: r2,
        future: []
      });
    }
    return {
      active: false,
      plane: `XY`,
      origin: {
        x: 0,
        y: 0,
        z: 0
      },
      segments: [],
      constraints: [],
      tool: `rectangle`,
      constraintTool: `none`,
      points: [],
      selectedSegments: [],
      solved: true,
      constraintStatus: `under`,
      loftMode: false,
      profiles: [],
      pendingExit: false,
      history: [],
      future: [],
      faceSelectionMode: false,
      hoveredFace: null,
      selectedFace: null,
      cursorWorldPos: null,
      cursorSketchPos: null,
      snapTarget: null,
      selectedConstraintIndex: null,
      pendingOperation: null,
      undoSketch: () => {
        let n3 = t2();
        if (n3.history.length === 0) return;
        let r2 = n3.history[n3.history.length - 1], i2 = n3.history.slice(0, -1), a2 = [
          ...n3.future,
          z(n3)
        ];
        e2({
          segments: r2.segments,
          constraints: r2.constraints,
          points: r2.points,
          selectedSegments: r2.selectedSegments,
          solved: r2.solved,
          constraintStatus: r2.constraintStatus,
          history: i2,
          future: a2
        });
      },
      redoSketch: () => {
        let n3 = t2();
        if (n3.future.length === 0) return;
        let r2 = n3.future[n3.future.length - 1], i2 = n3.future.slice(0, -1), a2 = [
          ...n3.history,
          z(n3)
        ];
        e2({
          segments: r2.segments,
          constraints: r2.constraints,
          points: r2.points,
          selectedSegments: r2.selectedSegments,
          solved: r2.solved,
          constraintStatus: r2.constraintStatus,
          history: a2,
          future: i2
        });
      },
      validateState: () => {
        let n3 = t2(), r2 = false;
        return n3.active && n3.faceSelectionMode && (e2({
          faceSelectionMode: false,
          hoveredFace: null
        }), r2 = true), n3.pendingExit && !n3.active && (e2({
          pendingExit: false
        }), r2 = true), n3.loftMode && !n3.active && (e2({
          loftMode: false,
          profiles: []
        }), r2 = true), r2;
      },
      enterFaceSelectionMode: () => {
        e2({
          faceSelectionMode: true,
          hoveredFace: null,
          selectedFace: null
        });
      },
      setHoveredFace: (t3) => {
        e2({
          hoveredFace: t3
        });
      },
      selectFace: (t3) => {
        let n3 = Be(t3);
        e2({
          faceSelectionMode: false,
          selectedFace: t3,
          hoveredFace: null,
          active: true,
          plane: n3,
          origin: n3.origin,
          segments: [],
          constraints: [],
          tool: `rectangle`,
          constraintTool: `none`,
          points: [],
          selectedSegments: [],
          solved: true,
          constraintStatus: `under`,
          loftMode: false,
          profiles: [],
          pendingExit: false,
          history: [],
          future: []
        }), typeof window < `u` && window.dispatchEvent(new CustomEvent(`vcad:face-selected`, {
          detail: {
            normal: t3.normal,
            centroid: t3.centroid,
            vertices: t3.vertices
          }
        }));
      },
      cancelFaceSelection: () => {
        e2({
          faceSelectionMode: false,
          hoveredFace: null,
          selectedFace: null
        });
      },
      enterSketchMode: (t3, n3, r2) => {
        let i2 = n3 ?? (typeof t3 == `string` ? {
          x: 0,
          y: 0,
          z: 0
        } : t3.origin);
        if (e2({
          active: true,
          plane: t3,
          origin: i2,
          segments: [],
          constraints: [],
          tool: `rectangle`,
          constraintTool: `none`,
          points: [],
          selectedSegments: [],
          solved: true,
          constraintStatus: `under`,
          loftMode: false,
          profiles: [],
          pendingExit: false,
          history: [],
          future: [],
          faceSelectionMode: false,
          hoveredFace: null,
          selectedFace: null,
          selectedConstraintIndex: null
        }), typeof window < `u`) {
          let { normal: e3 } = ze(t3), n4 = r2 ? {
            x: -e3.x,
            y: -e3.y,
            z: -e3.z
          } : e3;
          window.dispatchEvent(new CustomEvent(`vcad:face-selected`, {
            detail: {
              normal: n4,
              centroid: i2
            }
          }));
        }
      },
      exitSketchMode: () => {
        let n3 = t2().segments.length > 0;
        return e2({
          active: false,
          points: [],
          loftMode: false,
          profiles: [],
          pendingExit: false,
          history: [],
          future: [],
          faceSelectionMode: false,
          hoveredFace: null,
          selectedFace: null,
          selectedConstraintIndex: null,
          pendingOperation: null
        }), n3 ? `has_segments` : `empty`;
      },
      requestExit: () => t2().segments.length === 0 ? (t2().exitSketchMode(), true) : (e2({
        pendingExit: true
      }), false),
      confirmExit: () => (e2({
        pendingExit: false
      }), t2().exitSketchMode()),
      cancelExit: () => {
        e2({
          pendingExit: false
        });
      },
      setTool: (t3) => {
        e2({
          tool: t3,
          points: []
        });
      },
      addPoint: (r2) => {
        let i2 = t2(), a2 = [
          ...i2.points,
          r2
        ];
        if (i2.tool === `line`) {
          if (a2.length >= 2) {
            let t3 = a2[a2.length - 2], r3 = a2[a2.length - 1];
            n2(), e2((e3) => ({
              segments: [
                ...e3.segments,
                {
                  type: `Line`,
                  start: t3,
                  end: r3
                }
              ],
              points: [
                r3
              ]
            }));
          } else e2({
            points: a2
          });
        } else if (i2.tool === `rectangle`) {
          if (a2.length >= 2) {
            let t3 = a2[0], r3 = a2[1], i3 = Rt(t3, r3);
            n2(), e2((e3) => ({
              segments: [
                ...e3.segments,
                ...i3
              ],
              points: []
            }));
          } else e2({
            points: a2
          });
        } else if (i2.tool === `circle`) {
          if (a2.length >= 2) {
            let t3 = a2[0], r3 = a2[1], i3 = Math.sqrt((r3.x - t3.x) ** 2 + (r3.y - t3.y) ** 2);
            if (i3 > 0.1) {
              let r4 = zt(t3, i3);
              n2(), e2((e3) => ({
                segments: [
                  ...e3.segments,
                  ...r4
                ],
                points: []
              }));
            } else e2({
              points: []
            });
          } else e2({
            points: a2
          });
        }
      },
      finishShape: () => {
        let r2 = t2();
        if (r2.tool === `line` && r2.points.length > 0 && r2.segments.length > 0) {
          let t3 = r2.segments[0];
          if ((t3 == null ? void 0 : t3.type) === `Line`) {
            let i2 = r2.points[0], a2 = t3.start;
            n2(), e2((e3) => ({
              segments: [
                ...e3.segments,
                {
                  type: `Line`,
                  start: i2,
                  end: a2
                }
              ],
              points: []
            }));
            return;
          }
        }
        e2({
          points: []
        });
      },
      clearSketch: () => {
        t2().segments.length !== 0 && (n2(), e2({
          segments: [],
          points: [],
          constraints: [],
          selectedSegments: []
        }));
      },
      addRectangle: (t3, r2) => {
        let i2 = Rt(t3, r2);
        n2(), e2((e3) => ({
          segments: [
            ...e3.segments,
            ...i2
          ]
        }));
      },
      addCircle: (t3, r2, i2 = 32) => {
        let a2 = zt(t3, r2, i2);
        n2(), e2((e3) => ({
          segments: [
            ...e3.segments,
            ...a2
          ]
        }));
      },
      setConstraintTool: (t3) => {
        e2({
          constraintTool: t3,
          selectedSegments: []
        });
      },
      toggleSegmentSelection: (t3) => {
        e2((e3) => ({
          selectedSegments: e3.selectedSegments.includes(t3) ? e3.selectedSegments.filter((e4) => e4 !== t3) : [
            ...e3.selectedSegments,
            t3
          ]
        }));
      },
      clearSelection: () => {
        e2({
          selectedSegments: [],
          constraintTool: `none`
        });
      },
      addConstraint: (t3) => {
        n2(), e2((e3) => {
          let n3 = [
            ...e3.constraints,
            t3
          ];
          return {
            constraints: n3,
            solved: false,
            constraintStatus: Vt(e3.segments.length > 0, n3, false)
          };
        });
      },
      removeConstraint: (t3) => {
        n2(), e2((e3) => {
          let n3 = e3.constraints.filter((e4, n4) => n4 !== t3);
          return {
            constraints: n3,
            solved: false,
            constraintStatus: Vt(e3.segments.length > 0, n3, false)
          };
        });
      },
      solveSketch: () => {
        let a2 = t2();
        if (a2.constraints.length === 0) {
          e2({
            solved: true,
            constraintStatus: `under`
          });
          return;
        }
        let o2 = r();
        if (!o2 || typeof o2.solveSketchSegments != `function`) e2({
          solved: false,
          constraintStatus: `pending`
        }), i().then(() => {
          let n3 = t2();
          if (n3.active && n3.constraintStatus === `pending`) try {
            n3.solveSketch();
          } catch (t3) {
            console.warn(`[sketch] solver error after hydration:`, t3), e2({
              solved: false,
              constraintStatus: `error`
            });
          }
        }).catch(() => {
        });
        else try {
          let t3 = o2.solveSketchSegments(JSON.stringify(a2.segments), JSON.stringify(a2.constraints)), r2 = JSON.parse(t3);
          n2(), e2({
            segments: r2.segments,
            solved: r2.converged,
            constraintStatus: r2.converged ? `solved` : `error`
          });
        } catch (t3) {
          console.warn(`[sketch] solver error:`, t3), e2({
            solved: false,
            constraintStatus: `error`
          });
        }
      },
      applyHorizontal: () => {
        var _a2;
        let n3 = t2();
        if (n3.selectedSegments.length !== 1) return;
        let r2 = n3.selectedSegments[0];
        ((_a2 = n3.segments[r2]) == null ? void 0 : _a2.type) === `Line` && (t2().addConstraint({
          type: `Horizontal`,
          line: r2
        }), e2({
          selectedSegments: [],
          constraintTool: `none`
        }));
      },
      applyVertical: () => {
        var _a2;
        let n3 = t2();
        if (n3.selectedSegments.length !== 1) return;
        let r2 = n3.selectedSegments[0];
        ((_a2 = n3.segments[r2]) == null ? void 0 : _a2.type) === `Line` && (t2().addConstraint({
          type: `Vertical`,
          line: r2
        }), e2({
          selectedSegments: [],
          constraintTool: `none`
        }));
      },
      applyDistance: (n3) => {
        let r2 = t2();
        if (r2.selectedSegments.length !== 2) return;
        let [i2, a2] = r2.selectedSegments;
        t2().addConstraint({
          type: `Distance`,
          pointA: {
            type: `LineStart`,
            index: i2
          },
          pointB: {
            type: `LineStart`,
            index: a2
          },
          distance: n3
        }), e2({
          selectedSegments: [],
          constraintTool: `none`
        });
      },
      applyLength: (n3) => {
        let r2 = t2();
        if (r2.selectedSegments.length !== 1) return;
        let i2 = r2.selectedSegments[0];
        t2().addConstraint({
          type: `Length`,
          line: i2,
          length: n3
        }), e2({
          selectedSegments: [],
          constraintTool: `none`
        });
      },
      applyParallel: () => {
        let n3 = t2();
        if (n3.selectedSegments.length !== 2) return;
        let [r2, i2] = n3.selectedSegments;
        t2().addConstraint({
          type: `Parallel`,
          lineA: r2,
          lineB: i2
        }), e2({
          selectedSegments: [],
          constraintTool: `none`
        });
      },
      applyPerpendicular: () => {
        let n3 = t2();
        if (n3.selectedSegments.length !== 2) return;
        let [r2, i2] = n3.selectedSegments;
        t2().addConstraint({
          type: `Perpendicular`,
          lineA: r2,
          lineB: i2
        }), e2({
          selectedSegments: [],
          constraintTool: `none`
        });
      },
      applyEqual: () => {
        let n3 = t2();
        if (n3.selectedSegments.length !== 2) return;
        let [r2, i2] = n3.selectedSegments;
        t2().addConstraint({
          type: `EqualLength`,
          lineA: r2,
          lineB: i2
        }), e2({
          selectedSegments: [],
          constraintTool: `none`
        });
      },
      enterLoftMode: (t3) => {
        e2({
          active: true,
          plane: t3,
          origin: {
            x: 0,
            y: 0,
            z: 0
          },
          segments: [],
          constraints: [],
          tool: `rectangle`,
          constraintTool: `none`,
          points: [],
          selectedSegments: [],
          solved: true,
          constraintStatus: `under`,
          loftMode: true,
          profiles: []
        });
      },
      saveProfile: () => {
        let n3 = t2();
        if (n3.segments.length === 0) return;
        let r2 = {
          id: `profile-${++Bt}`,
          plane: n3.plane,
          origin: n3.origin,
          segments: [
            ...n3.segments
          ]
        };
        e2({
          profiles: [
            ...n3.profiles,
            r2
          ]
        });
      },
      clearForNextProfile: (t3) => {
        e2({
          segments: [],
          constraints: [],
          points: [],
          selectedSegments: [],
          solved: true,
          constraintStatus: `under`,
          origin: t3
        });
      },
      exitLoftMode: () => {
        let n3 = t2();
        if (!n3.loftMode) return null;
        let r2 = [
          ...n3.profiles
        ];
        return n3.segments.length > 0 && r2.push({
          id: `profile-${++Bt}`,
          plane: n3.plane,
          origin: n3.origin,
          segments: [
            ...n3.segments
          ]
        }), e2({
          active: false,
          loftMode: false,
          profiles: [],
          segments: [],
          points: []
        }), r2.length >= 2 ? r2 : null;
      },
      setCursorPos: (t3, n3, r2) => {
        e2({
          cursorWorldPos: t3,
          cursorSketchPos: n3,
          snapTarget: r2
        });
      },
      setSelectedConstraint: (t3) => {
        e2({
          selectedConstraintIndex: t3
        });
      },
      beginOperation: (t3) => {
        e2({
          pendingOperation: t3
        });
      },
      updateOperation: (n3) => {
        let r2 = t2().pendingOperation;
        r2 && (`kind` in n3 && n3.kind !== r2.kind || e2({
          pendingOperation: {
            ...r2,
            ...n3
          }
        }));
      },
      clearOperation: () => {
        e2({
          pendingOperation: null
        });
      }
    };
  });
  Ut = function(e2) {
    return Lt[e2];
  };
  let Gt;
  Wt = n((e2) => ({
    engine: null,
    scene: null,
    previewMesh: null,
    engineReady: false,
    loading: false,
    error: null,
    setEngine: (t2) => e2({
      engine: t2
    }),
    setScene: (t2) => e2({
      scene: t2,
      error: null
    }),
    setPreviewMesh: (t2) => e2({
      previewMesh: t2
    }),
    setEngineReady: (t2) => e2({
      engineReady: t2
    }),
    setLoading: (t2) => e2({
      loading: t2
    }),
    setError: (t2) => e2({
      error: t2,
      loading: false
    }),
    updateInstanceTransforms: (t2) => e2((e3) => {
      var _a2;
      if (!((_a2 = e3.scene) == null ? void 0 : _a2.instances)) return e3;
      let n2 = e3.scene.instances.map((e4) => {
        let n3 = t2.get(e4.instanceId);
        return n3 ? {
          ...e4,
          transform: n3
        } : e4;
      });
      return {
        scene: {
          ...e3.scene,
          instances: n2
        }
      };
    })
  }));
  Gt = 1;
  Kt = n((e2, t2) => ({
    jobs: [],
    startJob: ({ id: t3, verb: n2, progress: r2 = null, cancellable: i2 = false }) => {
      let a2 = t3 ?? `job-${Gt++}`, o2 = {
        id: a2,
        verb: n2,
        progress: r2,
        cancellable: i2,
        cancelRequested: false,
        startedAt: performance.now()
      };
      return e2((e3) => ({
        jobs: [
          ...e3.jobs.filter((e4) => e4.id !== a2),
          o2
        ]
      })), a2;
    },
    updateJob: (t3, n2) => e2((e3) => ({
      jobs: e3.jobs.map((e4) => e4.id === t3 ? {
        ...e4,
        ...n2
      } : e4)
    })),
    finishJob: (t3) => e2((e3) => ({
      jobs: e3.jobs.filter((e4) => e4.id !== t3)
    })),
    requestCancel: (t3) => e2((e3) => ({
      jobs: e3.jobs.map((e4) => e4.id === t3 ? {
        ...e4,
        cancelRequested: true
      } : e4)
    })),
    isCancelRequested: (e3) => {
      var _a2;
      return ((_a2 = t2().jobs.find((t3) => t3.id === e3)) == null ? void 0 : _a2.cancelRequested) ?? false;
    }
  }));
  qt = async function(e2, t2) {
    let { startJob: n2, finishJob: r2 } = Kt.getState(), i2 = n2(e2);
    try {
      return await new Promise((e3) => {
        typeof requestAnimationFrame < `u` ? requestAnimationFrame(() => e3()) : e3();
      }), await t2();
    } finally {
      r2(i2);
    }
  };
  let Xt, B, V;
  Jt = n((e2) => ({
    mode: `off`,
    timestep: 1 / 60,
    playbackSpeed: 1,
    physicsAvailable: false,
    stepCount: 0,
    jointStates: [],
    selectedJointId: null,
    actionType: `torque`,
    endEffectorIds: [],
    lastObservation: null,
    setMode: (t2) => e2({
      mode: t2
    }),
    play: () => e2((e3) => ({
      mode: e3.physicsAvailable ? `running` : `off`
    })),
    pause: () => e2((e3) => ({
      mode: e3.mode === `running` ? `paused` : e3.mode
    })),
    stop: () => e2({
      mode: `off`,
      stepCount: 0,
      lastObservation: null
    }),
    step: () => e2((e3) => ({
      mode: `stepping`,
      stepCount: e3.stepCount + 1
    })),
    setTimestep: (t2) => e2({
      timestep: t2
    }),
    setPlaybackSpeed: (t2) => e2({
      playbackSpeed: t2
    }),
    setPhysicsAvailable: (t2) => e2({
      physicsAvailable: t2
    }),
    setJointStates: (t2) => e2({
      jointStates: t2
    }),
    updateJointState: (t2, n2, r2) => e2((e3) => ({
      jointStates: e3.jointStates.map((e4) => e4.id === t2 ? {
        ...e4,
        position: n2,
        velocity: r2
      } : e4)
    })),
    setJointTargetVelocity: (t2, n2) => e2((e3) => ({
      jointStates: e3.jointStates.map((e4) => e4.id === t2 ? {
        ...e4,
        targetVelocity: n2
      } : e4),
      actionType: `velocity`
    })),
    selectJoint: (t2) => e2({
      selectedJointId: t2
    }),
    setActionType: (t2) => e2({
      actionType: t2
    }),
    setEndEffectorIds: (t2) => e2({
      endEffectorIds: t2
    }),
    setObservation: (t2) => e2((e3) => ({
      lastObservation: t2,
      stepCount: e3.stepCount + 1
    })),
    reset: () => e2({
      mode: `off`,
      stepCount: 0,
      jointStates: [],
      selectedJointId: null,
      lastObservation: null
    })
  }));
  Yt = n((e2) => ({
    status: `idle`,
    startedAt: null,
    mimeType: null,
    bytesRecorded: 0,
    error: null,
    start: () => e2((e3) => e3.status === `idle` ? {
      status: `recording`,
      startedAt: Date.now(),
      mimeType: null,
      bytesRecorded: 0,
      error: null
    } : e3),
    stop: () => e2((e3) => e3.status === `recording` || e3.status === `paused` ? {
      status: `saving`
    } : e3),
    pause: () => e2((e3) => e3.status === `recording` ? {
      status: `paused`
    } : e3),
    resume: () => e2((e3) => e3.status === `paused` ? {
      status: `recording`
    } : e3),
    setMimeType: (t2) => e2({
      mimeType: t2
    }),
    addBytes: (t2) => e2((e3) => ({
      bytesRecorded: e3.bytesRecorded + t2
    })),
    reset: () => e2({
      status: `idle`,
      startedAt: null,
      mimeType: null,
      bytesRecorded: 0
    }),
    setError: (t2) => e2({
      status: `idle`,
      startedAt: null,
      mimeType: null,
      error: t2
    })
  }));
  Xt = {
    anon: {
      id: `anon`,
      name: `Anonymous`,
      tagline: `Try vcad without signing in.`,
      priceMonthlyUsd: null,
      monthlyTokenLimit: 0,
      anonDailyTokenLimit: 1e4,
      perks: [
        `10,000 free chat tokens per day`,
        `No account required`
      ]
    },
    free: {
      id: `free`,
      name: `Free`,
      tagline: `For hobbyists and evaluation.`,
      priceMonthlyUsd: 0,
      monthlyTokenLimit: 5e5,
      perks: [
        `500,000 chat tokens per month`,
        `All CAD tools & formats`,
        `Cloud sync & version history`
      ]
    },
    pro: {
      id: `pro`,
      name: `Pro`,
      tagline: `For serious makers and consultants.`,
      priceMonthlyUsd: 20,
      monthlyTokenLimit: 5e6,
      stripeLookupKey: `vcad_pro_monthly`,
      perks: [
        `5,000,000 chat tokens per month`,
        `Priority model access`,
        `Everything in Free`
      ]
    },
    max: {
      id: `max`,
      name: `Max`,
      tagline: `For studios and power users.`,
      priceMonthlyUsd: 100,
      monthlyTokenLimit: 3e7,
      stripeLookupKey: `vcad_max_monthly`,
      perks: [
        `30,000,000 chat tokens per month`,
        `Early access to new features`,
        `Everything in Pro`
      ]
    }
  };
  B = `vcad:chat-anon-tokens`;
  V = Xt.anon.anonDailyTokenLimit ?? 1e4;
  function Zt() {
    if (typeof localStorage > `u`) return {
      used: 0,
      limit: V
    };
    try {
      let e2 = localStorage.getItem(B);
      if (!e2) return {
        used: 0,
        limit: V
      };
      let t2 = JSON.parse(e2);
      return Date.now() - (t2.firstAt ?? 0) > 864e5 ? {
        used: 0,
        limit: V
      } : {
        used: t2.used ?? 0,
        limit: V
      };
    } catch {
      return {
        used: 0,
        limit: V
      };
    }
  }
  function Qt(e2) {
    if (typeof localStorage < `u`) try {
      let t2 = localStorage.getItem(B), n2 = t2 ? JSON.parse(t2).firstAt ?? Date.now() : Date.now();
      localStorage.setItem(B, JSON.stringify({
        used: e2,
        firstAt: n2
      }));
    } catch {
    }
  }
  var $t = `vcad:chat:open`;
  function en() {
    if (typeof localStorage > `u`) return true;
    try {
      let e2 = localStorage.getItem($t);
      return e2 === null || e2 === `true`;
    } catch {
      return true;
    }
  }
  function tn(e2) {
    if (typeof localStorage < `u`) try {
      localStorage.setItem($t, e2 ? `true` : `false`);
    } catch {
    }
  }
  function nn() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  let H;
  H = {
    id: `welcome`,
    role: `assistant`,
    content: `Hi! I'm your vcad assistant. I can create and modify parts, answer questions about CAD, and help you design. Try asking me to add a shape, or select something in the viewport and ask me about it.`,
    status: `complete`,
    timestamp: Date.now()
  };
  rn = n((e2, t2) => ({
    threadId: null,
    hydrating: false,
    messages: [
      H
    ],
    open: en(),
    streaming: false,
    error: null,
    cancelRequested: false,
    anonUsage: Zt(),
    usageError: null,
    _sendHandler: null,
    _hydrateHandler: null,
    _abortController: null,
    locallyStreamingIds: /* @__PURE__ */ new Set(),
    pendingAttachments: [],
    setOpen: (t3) => {
      tn(t3), e2({
        open: t3
      });
    },
    toggleOpen: () => e2((e3) => {
      let t3 = !e3.open;
      return tn(t3), {
        open: t3
      };
    }),
    setThreadId: (t3) => e2({
      threadId: t3
    }),
    hydrate: async (n2) => {
      let r2 = t2()._hydrateHandler;
      if (!r2) e2({
        threadId: null,
        messages: [
          {
            ...H,
            timestamp: Date.now()
          }
        ],
        hydrating: false
      });
      else {
        e2({
          hydrating: true
        });
        try {
          await r2(n2);
        } finally {
          e2({
            hydrating: false
          });
        }
      }
    },
    setHydrateHandler: (t3) => e2({
      _hydrateHandler: t3
    }),
    setHydrating: (t3) => e2({
      hydrating: t3
    }),
    setMessages: (t3) => e2({
      messages: t3
    }),
    upsertMessage: (t3) => e2((e3) => {
      let n2 = e3.messages.findIndex((e4) => e4.id === t3.id);
      if (n2 === -1) return {
        messages: [
          ...e3.messages,
          t3
        ]
      };
      let r2 = [
        ...e3.messages
      ];
      return r2[n2] = t3, {
        messages: r2
      };
    }),
    addUserMessage: (t3, n2, r2, i2) => e2((e3) => ({
      messages: [
        ...e3.messages,
        {
          id: i2 ?? nn(),
          role: `user`,
          content: t3,
          context: n2,
          attachments: r2 && r2.length > 0 ? r2 : void 0,
          status: `complete`,
          timestamp: Date.now()
        }
      ]
    })),
    addAssistantMessage: (t3, n2, r2) => e2((e3) => ({
      messages: [
        ...e3.messages,
        {
          id: r2 ?? nn(),
          role: `assistant`,
          content: t3,
          toolCalls: n2,
          status: `streaming`,
          timestamp: Date.now()
        }
      ]
    })),
    updateLastAssistant: (t3, n2, r2, i2) => e2((e3) => {
      let a2 = e3.messages[e3.messages.length - 1];
      if (!a2 || a2.role !== `assistant`) return e3;
      let o2 = {
        ...a2,
        content: t3
      };
      return n2 !== void 0 && (o2.toolCalls = n2), r2 !== void 0 && (o2.parts = r2), i2 !== void 0 && (o2.status = i2), {
        messages: [
          ...e3.messages.slice(0, -1),
          o2
        ]
      };
    }),
    sendMessage: (e3, n2, r2) => {
      let i2 = t2()._sendHandler;
      i2 ? i2(e3, n2, r2) : console.warn(`[chat-store] sendMessage called before handler registered`);
    },
    setSendHandler: (t3) => e2({
      _sendHandler: t3
    }),
    setStreaming: (t3) => e2({
      streaming: t3
    }),
    setError: (t3) => e2({
      error: t3
    }),
    requestCancel: () => {
      var _a2;
      (_a2 = t2()._abortController) == null ? void 0 : _a2.abort(), e2({
        cancelRequested: true
      });
    },
    clearCancel: () => e2({
      cancelRequested: false
    }),
    setAbortController: (t3) => e2({
      _abortController: t3
    }),
    markLocallyStreaming: (t3) => e2((e3) => {
      let n2 = new Set(e3.locallyStreamingIds);
      return n2.add(t3), {
        locallyStreamingIds: n2
      };
    }),
    unmarkLocallyStreaming: (t3) => e2((e3) => {
      if (!e3.locallyStreamingIds.has(t3)) return e3;
      let n2 = new Set(e3.locallyStreamingIds);
      return n2.delete(t3), {
        locallyStreamingIds: n2
      };
    }),
    queuePendingAttachments: (t3) => e2((e3) => ({
      pendingAttachments: [
        ...e3.pendingAttachments,
        ...t3
      ]
    })),
    consumePendingAttachments: () => {
      let n2 = t2().pendingAttachments;
      return n2.length > 0 && e2({
        pendingAttachments: []
      }), n2;
    },
    addAnonTokens: (t3) => e2((e3) => {
      if (!Number.isFinite(t3) || t3 <= 0) return e3;
      let n2 = e3.anonUsage.used + Math.round(t3);
      return Qt(n2), {
        anonUsage: {
          used: n2,
          limit: e3.anonUsage.limit
        }
      };
    }),
    setAnonUsage: (t3, n2) => e2((e3) => {
      let r2 = Number.isFinite(t3) && t3 >= 0 ? Math.round(t3) : e3.anonUsage.used, i2 = n2 && n2 > 0 ? n2 : e3.anonUsage.limit;
      return Qt(r2), {
        anonUsage: {
          used: r2,
          limit: i2
        }
      };
    }),
    setUsageError: (t3) => e2({
      usageError: t3
    }),
    clearThread: () => e2({
      messages: [
        {
          ...H,
          timestamp: Date.now()
        }
      ],
      streaming: false,
      error: null,
      cancelRequested: false,
      usageError: null
    }),
    reset: () => e2({
      threadId: null,
      messages: [
        {
          ...H,
          timestamp: Date.now()
        }
      ],
      open: true,
      streaming: false,
      error: null,
      cancelRequested: false,
      usageError: null,
      pendingAttachments: []
    })
  }));
  U = `local`;
  function an() {
    return {
      id: U,
      kind: `local`,
      name: `You`,
      color: `#4f9cff`,
      camera: null,
      selectedPartIds: /* @__PURE__ */ new Set()
    };
  }
  on = n((e2) => ({
    participants: /* @__PURE__ */ new Map([
      [
        U,
        an()
      ]
    ]),
    upsert: (t2) => e2((e3) => {
      let n2 = new Map(e3.participants);
      return n2.set(t2.id, t2), {
        participants: n2
      };
    }),
    remove: (t2) => e2((e3) => {
      if (t2 === `local` || !e3.participants.has(t2)) return e3;
      let n2 = new Map(e3.participants);
      return n2.delete(t2), {
        participants: n2
      };
    }),
    setCamera: (t2, n2) => e2((e3) => {
      let r2 = e3.participants.get(t2);
      if (!r2) return e3;
      let i2 = new Map(e3.participants);
      return i2.set(t2, {
        ...r2,
        camera: n2
      }), {
        participants: i2
      };
    }),
    setSelection: (t2, n2) => e2((e3) => {
      let r2 = e3.participants.get(t2);
      if (!r2) return e3;
      let i2 = new Map(e3.participants);
      return i2.set(t2, {
        ...r2,
        selectedPartIds: new Set(n2)
      }), {
        participants: i2
      };
    }),
    addSelection: (t2, n2) => e2((e3) => {
      let r2 = e3.participants.get(t2);
      if (!r2) return e3;
      let i2 = new Set(r2.selectedPartIds);
      i2.add(n2);
      let a2 = new Map(e3.participants);
      return a2.set(t2, {
        ...r2,
        selectedPartIds: i2
      }), {
        participants: a2
      };
    }),
    clearSelection: (t2) => e2((e3) => {
      let n2 = e3.participants.get(t2);
      if (!n2) return e3;
      let r2 = new Map(e3.participants);
      return r2.set(t2, {
        ...n2,
        selectedPartIds: /* @__PURE__ */ new Set()
      }), {
        participants: r2
      };
    })
  }));
  n((e2) => ({
    snapshot: null,
    loading: false,
    error: null,
    setSnapshot: (t2) => e2({
      snapshot: t2,
      error: null
    }),
    setLoading: (t2) => e2({
      loading: t2
    }),
    setError: (t2) => e2({
      error: t2
    }),
    reset: () => e2({
      snapshot: null,
      loading: false,
      error: null
    })
  }));
  let W, G;
  sn = n((e2) => ({
    activeBoardNodeId: null,
    active: false,
    selection: {
      type: `none`
    },
    pcbTool: `select`,
    schTool: `select`,
    pcbActiveLayer: `FCu`,
    enter: (t2) => e2({
      active: true,
      activeBoardNodeId: t2
    }),
    exit: () => e2({
      active: false,
      activeBoardNodeId: null,
      selection: {
        type: `none`
      }
    }),
    select: (t2) => e2({
      selection: t2
    }),
    setPcbTool: (t2) => e2({
      pcbTool: t2
    }),
    setSchTool: (t2) => e2({
      schTool: t2
    }),
    setPcbActiveLayer: (t2) => e2({
      pcbActiveLayer: t2
    })
  }));
  W = {
    cs: {
      "cmd.add_box.label": `P\u0159idat kv\xE1dr`,
      "cmd.cube.label": `P\u0159idat krychli`,
      "cmd.cylinder.label": `P\u0159idat v\xE1lec`,
      "cmd.sphere.label": `P\u0159idat kouli`,
      "cmd.cone.label": `P\u0159idat ku\u017Eel`,
      "cmd.translate.label": `P\u0159esunout`,
      "cmd.rotate.label": `Oto\u010Dit`,
      "cmd.scale.label": `M\u011B\u0159\xEDtko`,
      "cmd.move_mode.label": `Re\u017Eim p\u0159esunu`,
      "cmd.rotate_mode.label": `Re\u017Eim ot\xE1\u010Den\xED`,
      "cmd.scale_mode.label": `Re\u017Eim m\u011B\u0159\xEDtka`,
      "cmd.mirror.label": `Zrcadlit`,
      "cmd.union.label": `Sjednocen\xED`,
      "cmd.difference.label": `Rozd\xEDl`,
      "cmd.intersection.label": `Pr\u016Fnik`,
      "cmd.fillet.label": `Zaoblen\xED`,
      "cmd.chamfer.label": `Zkosen\xED`,
      "cmd.shell.label": `Sko\u0159epina`,
      "cmd.stitch.label": `Se\u0161\xEDt`,
      "cmd.linear_pattern.label": `Line\xE1rn\xED pole`,
      "cmd.circular_pattern.label": `Kruhov\xE9 pole`,
      "cmd.delete.label": `Smazat`,
      "cmd.delete_selected.label": `Smazat vybran\xE9`,
      "cmd.undo.label": `Zp\u011Bt`,
      "cmd.redo.label": `Znovu`,
      "cmd.copy.label": `Kop\xEDrovat`,
      "cmd.paste.label": `Vlo\u017Eit`,
      "cmd.duplicate.label": `Duplikovat`,
      "cmd.select_all.label": `Vybrat v\u0161e`,
      "cmd.deselect.label": `Zru\u0161it v\xFDb\u011Br`,
      "cmd.deselect_all.label": `Zru\u0161it ve\u0161ker\xFD v\xFDb\u011Br`,
      "cmd.new.label": `Nov\xFD dokument`,
      "cmd.new_short.label": `Nov\xFD`,
      "cmd.open.label": `Otev\u0159\xEDt`,
      "cmd.open_dots.label": `Otev\u0159\xEDt\u2026`,
      "cmd.open_cloud.label": `Otev\u0159\xEDt z cloudu\u2026`,
      "cmd.save.label": `Ulo\u017Eit`,
      "cmd.export_stl.label": `Exportovat STL`,
      "cmd.export_glb.label": `Exportovat GLB`,
      "cmd.export_step.label": `Exportovat STEP`,
      "cmd.quit.label": `Ukon\u010Dit`,
      "cmd.toggle_sidebar.label": `P\u0159epnout bo\u010Dn\xED panel`,
      "cmd.toggle_feature_tree.label": `P\u0159epnout strom prvk\u016F`,
      "cmd.toggle_chat.label": `P\u0159epnout chat`,
      "cmd.toggle_status_bar.label": `P\u0159epnout stavov\xFD \u0159\xE1dek`,
      "cmd.toggle_devtools.label": `P\u0159epnout v\xFDvoj\xE1\u0159sk\xE9 n\xE1stroje`,
      "cmd.toggle_wireframe.label": `P\u0159epnout dr\xE1t\u011Bn\xFD model`,
      "cmd.toggle_grid_snap.label": `P\u0159epnout p\u0159ichycen\xED k m\u0159\xED\u017Ece`,
      "cmd.cycle_theme.label": `Zm\u011Bnit motiv`,
      "cmd.camera_iso.label": `Izometrick\xFD pohled`,
      "cmd.camera_top.label": `Pohled shora`,
      "cmd.camera_front.label": `Pohled zep\u0159edu`,
      "cmd.camera_right.label": `Pohled zprava`,
      "cmd.camera_fit.label": `P\u0159izp\u016Fsobit obrazovce`,
      "cmd.fit_to_view.label": `P\u0159izp\u016Fsobit pohledu`,
      "cmd.palette.label": `Paleta p\u0159\xEDkaz\u016F`,
      "cmd.palette_dots.label": `Paleta p\u0159\xEDkaz\u016F\u2026`,
      "cmd.sketch.label": `Nov\xE1 skica`,
      "cmd.sketch_dots.label": `Nov\xE1 skica\u2026`,
      "cmd.slicer.label": `Tisk (Slicer)\u2026`,
      "cmd.cam.label": `CAM (Dr\xE1ha n\xE1stroje)\u2026`,
      "cmd.about.label": `O vcad`,
      "cmd.whats_new.label": `Co je nov\xE9ho`,
      "cmd.open_docs.label": `Otev\u0159\xEDt dokumentaci`,
      "cmd.documentation.label": `Dokumentace`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `Vytvo\u0159it definici d\xEDlu`,
      "cmd.insert_instance.label": `Vlo\u017Eit instanci`,
      "cmd.add_fixed_joint.label": `P\u0159idat pevnou vazbu`,
      "cmd.add_revolute_joint.label": `P\u0159idat rota\u010Dn\xED kloub`,
      "cmd.add_slider_joint.label": `P\u0159idat posuvn\xFD kloub`,
      "cmd.set_ground.label": `Nastavit jako z\xE1klad`,
      "cmd.enter_electronics.label": `Otev\u0159\xEDt elektroniku`,
      "cmd.exit_electronics.label": `Zav\u0159\xEDt elektroniku`,
      "menu.file": `Soubor`,
      "menu.edit": `\xDApravy`,
      "menu.view": `Zobrazen\xED`,
      "menu.tools": `N\xE1stroje`,
      "menu.help": `N\xE1pov\u011Bda`,
      "menu.file.new": `Nov\xFD`,
      "menu.file.open": `Otev\u0159\xEDt\u2026`,
      "menu.file.save": `Ulo\u017Eit`,
      "menu.file.share_link": `Sd\xEDlet odkaz\u2026`,
      "menu.file.version_history": `Historie verz\xED\u2026`,
      "menu.file.export": `Exportovat`,
      "menu.file.export_stl": `Exportovat STL`,
      "menu.file.export_glb": `Exportovat GLB`,
      "menu.file.export_step": `Exportovat STEP`,
      "menu.file.examples": `P\u0159\xEDklady`,
      "menu.file.quit": `Ukon\u010Dit`,
      "menu.edit.undo": `Zp\u011Bt`,
      "menu.edit.redo": `Znovu`,
      "menu.edit.delete": `Smazat`,
      "menu.edit.duplicate": `Duplikovat`,
      "menu.edit.select_all": `Vybrat v\u0161e`,
      "menu.edit.deselect": `Zru\u0161it v\xFDb\u011Br`,
      "menu.view.toggle_sidebar": `P\u0159epnout bo\u010Dn\xED panel`,
      "menu.view.toggle_chat": `P\u0159epnout chat`,
      "menu.view.camera_iso": `Izometrick\xFD pohled`,
      "menu.view.camera_top": `Pohled shora`,
      "menu.view.camera_front": `Pohled zep\u0159edu`,
      "menu.view.camera_right": `Pohled zprava`,
      "menu.view.camera_fit": `P\u0159izp\u016Fsobit obrazovce`,
      "menu.view.wireframe": `Dr\xE1t\u011Bn\xFD model`,
      "menu.view.cycle_theme": `Zm\u011Bnit motiv`,
      "menu.view.input_preferences": `Nastaven\xED vstupu\u2026`,
      "menu.view.ray_tracing": `Sledov\xE1n\xED paprsk\u016F`,
      "menu.view.ray_tracing.off": `Vypnuto`,
      "menu.view.ray_tracing.draft": `N\xE1hled`,
      "menu.view.ray_tracing.standard": `Standardn\xED`,
      "menu.view.ray_tracing.high": `Vysok\xE1`,
      "menu.view.ray_tracing.edges_on": `Hrany zapnuty`,
      "menu.view.ray_tracing.edges_off": `Hrany vypnuty`,
      "menu.tools.palette": `Paleta p\u0159\xEDkaz\u016F\u2026`,
      "menu.tools.sketch": `Nov\xE1 skica`,
      "menu.help.about": `O vcad`,
      "menu.help.docs": `Otev\u0159\xEDt dokumentaci`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `Vytvo\u0159it`,
      "toolbar.tab.sketch": `Skica`,
      "toolbar.tab.transform": `Transformace`,
      "toolbar.tab.combine": `Kombinovat`,
      "toolbar.tab.modify": `Upravit`,
      "toolbar.tab.assembly": `Sestava`,
      "toolbar.tab.simulate": `Simulovat`,
      "toolbar.tab.export": `Exportovat`,
      "toolbar.tool.box": `Kv\xE1dr`,
      "toolbar.tool.cyl": `V\xE1lec`,
      "toolbar.tool.sph": `Koule`,
      "toolbar.tool.cone": `Ku\u017Eel`,
      "toolbar.tool.sketch": `Skica`,
      "toolbar.tool.move": `P\u0159esunout`,
      "toolbar.tool.rotate": `Oto\u010Dit`,
      "toolbar.tool.scale": `M\u011B\u0159\xEDtko`,
      "toolbar.tool.union": `Sjedn.`,
      "toolbar.tool.diff": `Rozd\xEDl`,
      "toolbar.tool.isect": `Pr\u016Fnik`,
      "toolbar.tool.fillet": `Zaoblen\xED`,
      "toolbar.tool.chamfer": `Zkosen\xED`,
      "toolbar.tool.shell": `Sko\u0159epina`,
      "toolbar.tool.pattern": `Pole`,
      "toolbar.tool.mirror": `Zrcadlit`,
      "toolbar.tool.part": `D\xEDl`,
      "toolbar.tool.instance": `Instance`,
      "toolbar.tool.joint": `Vazba`,
      "toolbar.tool.play": `P\u0159ehr\xE1t`,
      "toolbar.tool.pause": `Pozastavit`,
      "toolbar.tool.step": `Krok`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `Ulo\u017Eit`,
      "toolbar.hint.numeric": `\u2190\u2192:zm\u011Bna  Enter:pou\u017E\xEDt  Esc:zru\u0161it`,
      "toolbar.hint.text": `Enter:pou\u017E\xEDt  Esc:zru\u0161it`,
      "status.modified": `zm\u011Bn\u011Bno`,
      "status.saved": `ulo\u017Eeno`,
      "status.part": `{count} d\xEDl`,
      "status.parts": `{count} d\xEDl\u016F`,
      "status.sel": `{count} vyb.`,
      "status.console_empty": `konzole pr\xE1zdn\xE1`,
      "status.ago.now": `nyn\xED`,
      "status.ago.seconds": `{count}s`,
      "status.ago.minutes": `{count}m`,
      "status.ago.hours": `{count}h`,
      "welcome.tagline": `bezplatn\xFD parametrick\xFD cad pro ka\u017Ed\xE9ho`,
      "welcome.new_project": `Nov\xFD projekt`,
      "welcome.blank_project": `Pr\xE1zdn\xFD projekt`,
      "welcome.open_file": `Otev\u0159\xEDt soubor`,
      "welcome.hint.new": `veden\xFD tutori\xE1l`,
      "welcome.hint.blank": `pr\xE1zdn\xE9 pl\xE1tno`,
      "welcome.hint.open": `:otev\u0159\xEDt`,
      "welcome.footer": `\u2191\u2193 navigace  enter v\xFDb\u011Br  esc zav\u0159\xEDt`,
      "tree.header": `D\xCDLY`,
      "tree.empty": `\u017D\xE1dn\xE9 d\xEDly`,
      "desktop.menu.open_recent": `Otev\u0159\xEDt ned\xE1vn\xE9\u2026`,
      "desktop.menu.open_cloud": `Otev\u0159\xEDt z cloudu\u2026`,
      "desktop.menu.toggle_status_bar": `P\u0159epnout stavov\xFD \u0159\xE1dek`,
      "desktop.menu.camera_iso": `Izometrick\xFD`,
      "desktop.menu.camera_fit": `P\u0159izp\u016Fsobit v\xFDb\u011Bru`,
      "desktop.menu.toggle_grid_snap": `P\u0159epnout p\u0159ichycen\xED k m\u0159\xED\u017Ece`,
      "desktop.menu.slicer": `Slicer`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `Zkontrolovat aktualizace\u2026`,
      "desktop.menu.whats_new": `Co je nov\xE9ho`,
      "desktop.menu.documentation": `Dokumentace`,
      "desktop.menu.camera_top": `Shora`,
      "desktop.menu.camera_front": `Zep\u0159edu`,
      "desktop.menu.camera_right": `Zprava`,
      "modal.about.tagline": `Parametrick\xFD CAD pro ka\u017Ed\xE9ho`,
      "modal.about.action.shape": `P\u0159idat tvar`,
      "modal.about.action.shape_desc": `Kv\xE1dr, v\xE1lec, koule`,
      "modal.about.action.sketch": `Za\u010D\xEDt skicu`,
      "modal.about.action.sketch_desc": `Nakreslit 2D \u2192 vysunout do 3D`,
      "modal.about.action.open": `Otev\u0159\xEDt soubor`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `Rychl\xFD tutori\xE1l`,
      "modal.about.action.tutorial_desc": `Nau\u010Dte se z\xE1klady`,
      "modal.about.keyhint.palette": `Chat a p\u0159\xEDkazy`,
      "modal.about.keyhint.tabs": `P\u0159ep\xEDnat karty panelu`,
      "modal.about.keyhint.transform": `P\u0159esunout, Oto\u010Dit, M\u011B\u0159\xEDtko`,
      "modal.about.keyhint.boolean": `Booleovsk\xE9 operace (2 vybran\xE9)`,
      "modal.about.docs": `Dokumentace`,
      "modal.about.whats_new": `Co je nov\xE9ho`,
      "footer.privacy": `Soukrom\xED`,
      "footer.terms": `Podm\xEDnky`,
      "footer.security": `Zabezpe\u010Den\xED`,
      "tutorial.add_cube.instruction": `Otev\u0159ete Vytvo\u0159it \u2192 klikn\u011Bte na Kv\xE1dr`,
      "tutorial.add_cube.detail": `P\u0159idejte do sc\xE9ny sv\u016Fj prvn\xED tvar`,
      "tutorial.add_cylinder.instruction": `Otev\u0159ete Vytvo\u0159it \u2192 p\u0159idejte V\xE1lec`,
      "tutorial.add_cylinder.detail": `Tento v\xE1lec ode\u010Dteme od krychle`,
      "tutorial.position_cylinder.instruction": `Posu\u0148te v\xE1lec nahoru`,
      "tutorial.position_cylinder.detail": `P\u0159et\xE1hn\u011Bte zelenou \u0161ipku na manipul\xE1toru`,
      "tutorial.subtract.instruction": `Otev\u0159ete Kombinovat \u2192 klikn\u011Bte na Rozd\xEDl`,
      "tutorial.subtract.detail": `Nejprve vyberte oba d\xEDly (\u2318-klik nebo ta\u017Een\xED)`,
      "tutorial.celebrate.instruction": `Vytvo\u0159ili jste sv\u016Fj prvn\xED d\xEDl!`,
      "tutorial.celebrate.detail": `Nau\u010Dili jste se postup CSG`,
      "tutorial.skip": `P\u0159esko\u010Dit tutori\xE1l`,
      "tutorial.start_building": `Za\u010D\xEDt tvo\u0159it`,
      "tutorial.skip_short": `p\u0159esko\u010Dit tutori\xE1l`,
      "error.boundary.title": `n\u011Bco se pokazilo`,
      "error.boundary.unexpected": `Do\u0161lo k neo\u010Dek\xE1van\xE9 chyb\u011B`,
      "error.boundary.reload": `Znovu na\u010D\xEDst aplikaci`,
      "error.boundary.cache_hint": `Pokud probl\xE9m p\u0159etrv\xE1v\xE1, zkuste vymazat mezipam\u011B\u0165 prohl\xED\u017Ee\u010De.`,
      "error.engine": `chyba enginu`,
      "status.offline": `Offline`,
      "status.console_open": `Otev\u0159\xEDt konzoli (~)`,
      "status.console_empty_title": `Konzole (pr\xE1zdn\xE1)`,
      "status.cursor_pos": `Pozice kurzoru na z\xE1kladov\xE9 rovin\u011B (mm)`,
      "status.language": `Jazyk`,
      "banner.readonly.viewing": `Prohl\xED\u017E\xEDte {name} (jen pro \u010Dten\xED)`,
      "banner.readonly.fork": `P\u0159ihlaste se k vytvo\u0159en\xED kopie`,
      "modal.fork.title": `Tento dokument je jen pro \u010Dten\xED`,
      "modal.fork.description": `P\u0159ihlaste se a vytvo\u0159te si vlastn\xED upravitelnou kopii. Va\u0161e \xFApravy se nedotknou origin\xE1lu \u2014 z\xEDsk\xE1te \u010Derstvou kopii ve sv\xE9m \xFA\u010Dtu.`,
      "modal.fork.keep_viewing": `Pokra\u010Dovat v prohl\xED\u017Een\xED`,
      "modal.fork.signin": `P\u0159ihl\xE1sit se a vytvo\u0159it kopii`,
      "palette.placeholder": `Zadejte p\u0159\xEDkaz nebo popi\u0161te, co vytvo\u0159it...`,
      "palette.title": `Paleta p\u0159\xEDkaz\u016F`,
      "palette.generating": `Generov\xE1n\xED...`,
      "palette.section.get_started": `Za\u010D\xEDn\xE1me`,
      "palette.section.examples": `P\u0159\xEDklady`,
      "palette.section.ask_ai_inline": `Nebo popi\u0161te, co vytvo\u0159it`,
      "palette.section.ask_ai": `Zeptat se AI`,
      "palette.action.new_project": `Nov\xFD projekt`,
      "palette.action.new_project_hint": `veden\xFD tutori\xE1l`,
      "palette.action.blank_project": `Pr\xE1zdn\xFD projekt`,
      "palette.action.blank_project_hint": `p\u0159esko\u010Dit tutori\xE1l`,
      "palette.action.open_file": `Otev\u0159\xEDt soubor`,
      "palette.generate_label": `Generovat:`,
      "palette.kbd_server": `server`,
      "palette.empty": `Nenalezeny \u017E\xE1dn\xE9 p\u0159\xEDkazy`,
      "palette.failed_to_load": `Nepoda\u0159ilo se na\u010D\xEDst soubor`,
      "panel.section.material": `Materi\xE1l`,
      "panel.section.position": `Pozice`,
      "panel.section.rotation": `Oto\u010Den\xED`,
      "panel.section.scale": `M\u011B\u0159\xEDtko`,
      "panel.section.dimensions": `Rozm\u011Bry`,
      "panel.section.operation": `Operace`,
      "panel.section.profile": `Profil`,
      "panel.section.path": `Trajektorie`,
      "panel.section.depth": `Hloubka`,
      "panel.section.angle": `\xDAhel`,
      "panel.section.axis": `Osa`,
      "panel.section.radius": `Polom\u011Br`,
      "panel.section.distance": `Vzd\xE1lenost`,
      "panel.section.thickness": `Tlou\u0161\u0165ka`,
      "panel.section.direction": `Sm\u011Br`,
      "panel.section.count": `Po\u010Det`,
      "panel.section.spacing": `Rozestup`,
      "panel.section.profiles": `Profily`,
      "panel.section.closed": `Uzav\u0159en\xFD`,
      "panel.section.text": `Text`,
      "panel.section.size": `Velikost`,
      "panel.section.font": `P\xEDsmo`,
      "panel.section.taper": `Z\xFA\u017Een\xED`,
      "panel.section.twist": `Zkroucen\xED`,
      "panel.section.orientation": `Orientace`,
      "panel.section.helix": `\u0160roubovicov\xE1 trajektorie`,
      "panel.section.quality": `Kvalita`,
      "panel.section.axis_origin": `Po\u010D\xE1tek osy`,
      "panel.section.axis_dir": `Sm\u011Br osy`,
      "panel.section.part_def": `Definice d\xEDlu`,
      "panel.section.connection": `Spojen\xED`,
      "panel.section.state": `Stav`,
      "panel.section.type": `Typ`,
      "panel.section.mirror": `Zrcadlen\xED`,
      "panel.tooltip.material": `P\u0159i\u0159adit materi\xE1l tomuto d\xEDlu`,
      "panel.tooltip.material_instance": `P\u0159i\u0159adit materi\xE1l t\xE9to instanci`,
      "panel.tooltip.position": `Posun pozice od po\u010D\xE1tku (mm)`,
      "panel.tooltip.position_world": `Pozice ve sv\u011Btov\xFDch sou\u0159adnic\xEDch (mm)`,
      "panel.tooltip.rotation": `\xDAhly oto\u010Den\xED kolem ka\u017Ed\xE9 osy (stupn\u011B)`,
      "panel.tooltip.rotation_world": `\xDAhly oto\u010Den\xED ve sv\u011Btov\xFDch sou\u0159adnic\xEDch (stupn\u011B)`,
      "panel.tooltip.scale": `Faktor m\u011B\u0159\xEDtka pro ka\u017Edou osu`,
      "panel.tooltip.dimensions_box": `\u0160\xED\u0159ka, v\xFD\u0161ka a hloubka kv\xE1dru (mm)`,
      "panel.tooltip.dimensions_cylinder": `Polom\u011Br a v\xFD\u0161ka v\xE1lce (mm)`,
      "panel.tooltip.dimensions_sphere": `Polom\u011Br koule (mm)`,
      "panel.tooltip.fillet_radius": `Polom\u011Br zaoblen\xED (mm)`,
      "panel.tooltip.chamfer_distance": `Vzd\xE1lenost zkosen\xED (mm)`,
      "panel.tooltip.shell_thickness": `Tlou\u0161\u0165ka st\u011Bny (mm)`,
      "panel.tooltip.mirror_readonly": `\xDApravy zat\xEDm nejsou podporov\xE1ny`,
      "panel.back_to_tree": `Zp\u011Bt na strom`,
      "panel.parts_selected": `{count} d\xEDl\u016F vybr\xE1no`,
      "panel.select_single": `Vyberte jeden d\xEDl pro \xFApravu vlastnost\xED`,
      "panel.edit_circuit": `Upravit obvod`,
      "panel.open_embroidery": `Otev\u0159\xEDt panel v\xFD\u0161ivky`,
      "panel.parent": `Rodi\u010D:`,
      "panel.child": `Potomek:`,
      "panel.ground": `Z\xE1klad`,
      "panel.mirror_readonly": `Parametry roviny zrcadlen\xED jsou jen pro \u010Dten\xED`,
      "bool.union": `Sjednocen\xED`,
      "bool.difference": `Rozd\xEDl`,
      "bool.intersection": `Pr\u016Fnik`,
      "joint.fixed": `Pevn\xE1`,
      "joint.revolute": `Rota\u010Dn\xED`,
      "joint.slider": `Posuvn\xFD`,
      "joint.cylindrical": `V\xE1lcov\xFD`,
      "joint.ball": `Kulov\xFD`,
      "joint.free": `Voln\xFD`,
      "joint.suffix": `kloub`,
      "tree.scene": `Sc\xE9na`,
      "tree.parameters": `Parametry`,
      "tree.scene_tooltip": `Prohl\xE9dnout sc\xE9nu (pozad\xED, prost\u0159ed\xED, sv\u011Btla)`,
      "tree.parameters_tooltip": `Upravit parametry dokumentu (\u0159\xEDdit v\xE1zan\xE1 pole pomoc\xED v\xFDraz\u016F)`,
      "tree.sketch.label": `Skica`,
      "tree.sketch.discard_title": `Zahodit skicu?`,
      "tree.sketch.discard_msg": `M\xE1te neulo\u017Eenou geometrii.`,
      "tree.sketch.discard": `Zahodit`,
      "tree.sketch.keep_editing": `Pokra\u010Dovat v \xFAprav\xE1ch`,
      "tree.sketch.cancelled": `Skica zru\u0161ena`,
      "tree.sketch.discarded": `Skica zahozena`,
      "tree.sketch.entities": `Entity ({count})`,
      "tree.sketch.constraints": `Vazby ({count})`,
      "tree.sketch.profiles": `Profily ({count})`,
      "tree.sketch.profile": `Profil {n}`,
      "tree.sketch.finish": `Dokon\u010Dit`,
      "tree.sketch.finish_tooltip": `Dokon\u010Dit skicu`,
      "tree.sketch.apply_tooltip": `Pou\u017E\xEDt {label}`,
      "tree.sketch.cancel_tooltip": `Zru\u0161it skicu (Esc)`,
      "tree.sketch.delete_constraint": `Smazat vazbu`
    },
    de: {
      "cmd.add_box.label": `Quader hinzuf\xFCgen`,
      "cmd.cube.label": `W\xFCrfel hinzuf\xFCgen`,
      "cmd.cylinder.label": `Zylinder hinzuf\xFCgen`,
      "cmd.sphere.label": `Kugel hinzuf\xFCgen`,
      "cmd.cone.label": `Kegel hinzuf\xFCgen`,
      "cmd.translate.label": `Verschieben`,
      "cmd.rotate.label": `Drehen`,
      "cmd.scale.label": `Skalieren`,
      "cmd.move_mode.label": `Verschiebemodus`,
      "cmd.rotate_mode.label": `Drehmodus`,
      "cmd.scale_mode.label": `Skaliermodus`,
      "cmd.mirror.label": `Spiegeln`,
      "cmd.union.label": `Vereinigung`,
      "cmd.difference.label": `Differenz`,
      "cmd.intersection.label": `Verschneidung`,
      "cmd.fillet.label": `Verrundung`,
      "cmd.chamfer.label": `Fase`,
      "cmd.shell.label": `Wandung`,
      "cmd.stitch.label": `Heften`,
      "cmd.linear_pattern.label": `Lineares Muster`,
      "cmd.circular_pattern.label": `Kreismuster`,
      "cmd.delete.label": `L\xF6schen`,
      "cmd.delete_selected.label": `Auswahl l\xF6schen`,
      "cmd.undo.label": `R\xFCckg\xE4ngig`,
      "cmd.redo.label": `Wiederherstellen`,
      "cmd.copy.label": `Kopieren`,
      "cmd.paste.label": `Einf\xFCgen`,
      "cmd.duplicate.label": `Duplizieren`,
      "cmd.select_all.label": `Alles ausw\xE4hlen`,
      "cmd.deselect.label": `Auswahl aufheben`,
      "cmd.deselect_all.label": `Gesamte Auswahl aufheben`,
      "cmd.new.label": `Neues Dokument`,
      "cmd.new_short.label": `Neu`,
      "cmd.open.label": `\xD6ffnen`,
      "cmd.open_dots.label": `\xD6ffnen\u2026`,
      "cmd.open_cloud.label": `Aus der Cloud \xF6ffnen\u2026`,
      "cmd.save.label": `Speichern`,
      "cmd.export_stl.label": `STL exportieren`,
      "cmd.export_glb.label": `GLB exportieren`,
      "cmd.export_step.label": `STEP exportieren`,
      "cmd.quit.label": `Beenden`,
      "cmd.toggle_sidebar.label": `Seitenleiste umschalten`,
      "cmd.toggle_feature_tree.label": `Feature-Baum umschalten`,
      "cmd.toggle_chat.label": `Chat umschalten`,
      "cmd.toggle_status_bar.label": `Statusleiste umschalten`,
      "cmd.toggle_devtools.label": `Entwicklerwerkzeuge umschalten`,
      "cmd.toggle_wireframe.label": `Drahtgitter umschalten`,
      "cmd.toggle_grid_snap.label": `Rasterfang umschalten`,
      "cmd.cycle_theme.label": `Design wechseln`,
      "cmd.camera_iso.label": `Isometrische Ansicht`,
      "cmd.camera_top.label": `Draufsicht`,
      "cmd.camera_front.label": `Vorderansicht`,
      "cmd.camera_right.label": `Seitenansicht rechts`,
      "cmd.camera_fit.label": `An Bildschirm anpassen`,
      "cmd.fit_to_view.label": `An Ansicht anpassen`,
      "cmd.palette.label": `Befehlspalette`,
      "cmd.palette_dots.label": `Befehlspalette\u2026`,
      "cmd.sketch.label": `Neue Skizze`,
      "cmd.sketch_dots.label": `Neue Skizze\u2026`,
      "cmd.slicer.label": `Drucken (Slicer)\u2026`,
      "cmd.cam.label": `CAM (Werkzeugbahn)\u2026`,
      "cmd.about.label": `\xDCber vcad`,
      "cmd.whats_new.label": `Neuigkeiten`,
      "cmd.open_docs.label": `Dokumentation \xF6ffnen`,
      "cmd.documentation.label": `Dokumentation`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `Teildefinition erstellen`,
      "cmd.insert_instance.label": `Komponente einf\xFCgen`,
      "cmd.add_fixed_joint.label": `Feste Verbindung hinzuf\xFCgen`,
      "cmd.add_revolute_joint.label": `Drehgelenk hinzuf\xFCgen`,
      "cmd.add_slider_joint.label": `Schiebegelenk hinzuf\xFCgen`,
      "cmd.set_ground.label": `Als Basis festlegen`,
      "cmd.enter_electronics.label": `Elektronik \xF6ffnen`,
      "cmd.exit_electronics.label": `Elektronik schlie\xDFen`,
      "menu.file": `Datei`,
      "menu.edit": `Bearbeiten`,
      "menu.view": `Ansicht`,
      "menu.tools": `Werkzeuge`,
      "menu.help": `Hilfe`,
      "menu.file.new": `Neu`,
      "menu.file.open": `\xD6ffnen\u2026`,
      "menu.file.save": `Speichern`,
      "menu.file.share_link": `Link teilen\u2026`,
      "menu.file.version_history": `Versionsverlauf\u2026`,
      "menu.file.export": `Exportieren`,
      "menu.file.export_stl": `STL exportieren`,
      "menu.file.export_glb": `GLB exportieren`,
      "menu.file.export_step": `STEP exportieren`,
      "menu.file.examples": `Beispiele`,
      "menu.file.quit": `Beenden`,
      "menu.edit.undo": `R\xFCckg\xE4ngig`,
      "menu.edit.redo": `Wiederherstellen`,
      "menu.edit.delete": `L\xF6schen`,
      "menu.edit.duplicate": `Duplizieren`,
      "menu.edit.select_all": `Alles ausw\xE4hlen`,
      "menu.edit.deselect": `Auswahl aufheben`,
      "menu.view.toggle_sidebar": `Seitenleiste umschalten`,
      "menu.view.toggle_chat": `Chat umschalten`,
      "menu.view.camera_iso": `Isometrische Ansicht`,
      "menu.view.camera_top": `Draufsicht`,
      "menu.view.camera_front": `Vorderansicht`,
      "menu.view.camera_right": `Seitenansicht rechts`,
      "menu.view.camera_fit": `An Bildschirm anpassen`,
      "menu.view.wireframe": `Drahtgitter`,
      "menu.view.cycle_theme": `Design wechseln`,
      "menu.view.input_preferences": `Eingabeeinstellungen\u2026`,
      "menu.view.ray_tracing": `Raytracing`,
      "menu.view.ray_tracing.off": `Aus`,
      "menu.view.ray_tracing.draft": `Entwurf`,
      "menu.view.ray_tracing.standard": `Standard`,
      "menu.view.ray_tracing.high": `Hoch`,
      "menu.view.ray_tracing.edges_on": `Kanten an`,
      "menu.view.ray_tracing.edges_off": `Kanten aus`,
      "menu.tools.palette": `Befehlspalette\u2026`,
      "menu.tools.sketch": `Neue Skizze`,
      "menu.help.about": `\xDCber vcad`,
      "menu.help.docs": `Dokumentation \xF6ffnen`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `Erstellen`,
      "toolbar.tab.sketch": `Skizze`,
      "toolbar.tab.transform": `Transformieren`,
      "toolbar.tab.combine": `Kombinieren`,
      "toolbar.tab.modify": `\xC4ndern`,
      "toolbar.tab.assembly": `Baugruppe`,
      "toolbar.tab.simulate": `Simulieren`,
      "toolbar.tab.export": `Exportieren`,
      "toolbar.tool.box": `Quader`,
      "toolbar.tool.cyl": `Zyl`,
      "toolbar.tool.sph": `Kugel`,
      "toolbar.tool.cone": `Kegel`,
      "toolbar.tool.sketch": `Skizze`,
      "toolbar.tool.move": `Verschieben`,
      "toolbar.tool.rotate": `Drehen`,
      "toolbar.tool.scale": `Skalieren`,
      "toolbar.tool.union": `Vereinigung`,
      "toolbar.tool.diff": `Diff`,
      "toolbar.tool.isect": `Schnitt`,
      "toolbar.tool.fillet": `Verrundung`,
      "toolbar.tool.chamfer": `Fase`,
      "toolbar.tool.shell": `Wandung`,
      "toolbar.tool.pattern": `Muster`,
      "toolbar.tool.mirror": `Spiegeln`,
      "toolbar.tool.part": `Teil`,
      "toolbar.tool.instance": `Komponente`,
      "toolbar.tool.joint": `Verbindung`,
      "toolbar.tool.play": `Abspielen`,
      "toolbar.tool.pause": `Pause`,
      "toolbar.tool.step": `Schritt`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `Speichern`,
      "toolbar.hint.numeric": `\u2190\u2192:scrubben  Enter:\xFCbernehmen  Esc:abbrechen`,
      "toolbar.hint.text": `Enter:\xFCbernehmen  Esc:abbrechen`,
      "status.modified": `ge\xE4ndert`,
      "status.saved": `gespeichert`,
      "status.part": `{count} Teil`,
      "status.parts": `{count} Teile`,
      "status.sel": `{count} ausg.`,
      "status.console_empty": `Konsole leer`,
      "status.ago.now": `jetzt`,
      "status.ago.seconds": `{count}s`,
      "status.ago.minutes": `{count}m`,
      "status.ago.hours": `{count}h`,
      "welcome.tagline": `freies parametrisches CAD f\xFCr alle`,
      "welcome.new_project": `Neues Projekt`,
      "welcome.blank_project": `Leeres Projekt`,
      "welcome.open_file": `Datei \xF6ffnen`,
      "welcome.hint.new": `gef\xFChrtes Tutorial`,
      "welcome.hint.blank": `leere Arbeitsfl\xE4che`,
      "welcome.hint.open": `:\xF6ffnen`,
      "welcome.footer": `\u2191\u2193 navigieren  enter ausw\xE4hlen  esc verwerfen`,
      "tree.header": `TEILE`,
      "tree.empty": `Keine Teile`,
      "desktop.menu.open_recent": `Zuletzt verwendet \xF6ffnen\u2026`,
      "desktop.menu.open_cloud": `Aus der Cloud \xF6ffnen\u2026`,
      "desktop.menu.toggle_status_bar": `Statusleiste umschalten`,
      "desktop.menu.camera_iso": `Isometrisch`,
      "desktop.menu.camera_fit": `An Auswahl anpassen`,
      "desktop.menu.toggle_grid_snap": `Rasterfang umschalten`,
      "desktop.menu.slicer": `Slicer`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `Nach Updates suchen\u2026`,
      "desktop.menu.whats_new": `Neuigkeiten`,
      "desktop.menu.documentation": `Dokumentation`,
      "desktop.menu.camera_top": `Oben`,
      "desktop.menu.camera_front": `Vorne`,
      "desktop.menu.camera_right": `Rechts`,
      "modal.about.tagline": `Parametrisches CAD f\xFCr alle`,
      "modal.about.action.shape": `Form hinzuf\xFCgen`,
      "modal.about.action.shape_desc": `Quader, Zylinder, Kugel`,
      "modal.about.action.sketch": `Skizze beginnen`,
      "modal.about.action.sketch_desc": `2D zeichnen \u2192 zu 3D extrudieren`,
      "modal.about.action.open": `Datei \xF6ffnen`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `Schnelltutorial`,
      "modal.about.action.tutorial_desc": `Grundlagen lernen`,
      "modal.about.keyhint.palette": `Chat & Befehle`,
      "modal.about.keyhint.tabs": `Symbolleisten-Tabs wechseln`,
      "modal.about.keyhint.transform": `Verschieben, Drehen, Skalieren`,
      "modal.about.keyhint.boolean": `Boolesche Operationen (2 ausgew\xE4hlt)`,
      "modal.about.docs": `Doku`,
      "modal.about.whats_new": `Neuigkeiten`,
      "footer.privacy": `Datenschutz`,
      "footer.terms": `Nutzungsbedingungen`,
      "footer.security": `Sicherheit`,
      "tutorial.add_cube.instruction": `Erstellen \xF6ffnen \u2192 auf Quader klicken`,
      "tutorial.add_cube.detail": `F\xFCge deine erste Form zur Szene hinzu`,
      "tutorial.add_cylinder.instruction": `Erstellen \xF6ffnen \u2192 einen Zylinder hinzuf\xFCgen`,
      "tutorial.add_cylinder.detail": `Wir ziehen ihn vom W\xFCrfel ab`,
      "tutorial.position_cylinder.instruction": `Verschiebe den Zylinder nach oben`,
      "tutorial.position_cylinder.detail": `Ziehe den gr\xFCnen Pfeil am Gizmo`,
      "tutorial.subtract.instruction": `Kombinieren \xF6ffnen \u2192 auf Differenz klicken`,
      "tutorial.subtract.detail": `W\xE4hle zuerst beide Teile aus (\u2318-Klick oder Ziehen)`,
      "tutorial.celebrate.instruction": `Du hast dein erstes Teil erstellt!`,
      "tutorial.celebrate.detail": `Du hast den CSG-Workflow gelernt`,
      "tutorial.skip": `Tutorial \xFCberspringen`,
      "tutorial.start_building": `Loslegen`,
      "tutorial.skip_short": `Tutorial \xFCberspringen`,
      "error.boundary.title": `etwas ist schiefgelaufen`,
      "error.boundary.unexpected": `Ein unerwarteter Fehler ist aufgetreten`,
      "error.boundary.reload": `App neu laden`,
      "error.boundary.cache_hint": `Falls dies weiterhin auftritt, leere den Browser-Cache.`,
      "error.engine": `Engine-Fehler`,
      "status.offline": `Offline`,
      "status.console_open": `Konsole \xF6ffnen (~)`,
      "status.console_empty_title": `Konsole (leer)`,
      "status.cursor_pos": `Cursorposition auf Grundebene (mm)`,
      "status.language": `Sprache`,
      "banner.readonly.viewing": `Ansicht von {name} (schreibgesch\xFCtzt)`,
      "banner.readonly.fork": `Anmelden zum Forken`,
      "modal.fork.title": `Dieses Dokument ist schreibgesch\xFCtzt`,
      "modal.fork.description": `Melde dich an, um eine eigene bearbeitbare Kopie zu erstellen. Deine \xC4nderungen wirken sich nicht auf das Original aus \u2014 du erh\xE4ltst einen neuen Fork in deinem Konto.`,
      "modal.fork.keep_viewing": `Weiter ansehen`,
      "modal.fork.signin": `Anmelden zum Forken`,
      "palette.placeholder": `Befehl eingeben oder beschreiben, was erstellt werden soll...`,
      "palette.title": `Befehlspalette`,
      "palette.generating": `Wird generiert...`,
      "palette.section.get_started": `Erste Schritte`,
      "palette.section.examples": `Beispiele`,
      "palette.section.ask_ai_inline": `Oder beschreiben, was erstellt werden soll`,
      "palette.section.ask_ai": `KI fragen`,
      "palette.action.new_project": `Neues Projekt`,
      "palette.action.new_project_hint": `gef\xFChrtes Tutorial`,
      "palette.action.blank_project": `Leeres Projekt`,
      "palette.action.blank_project_hint": `Tutorial \xFCberspringen`,
      "palette.action.open_file": `Datei \xF6ffnen`,
      "palette.generate_label": `Generieren:`,
      "palette.kbd_server": `Server`,
      "palette.empty": `Keine Befehle gefunden`,
      "palette.failed_to_load": `Datei konnte nicht geladen werden`,
      "panel.section.material": `Material`,
      "panel.section.position": `Position`,
      "panel.section.rotation": `Drehung`,
      "panel.section.scale": `Skalierung`,
      "panel.section.dimensions": `Abmessungen`,
      "panel.section.operation": `Operation`,
      "panel.section.profile": `Profil`,
      "panel.section.path": `Pfad`,
      "panel.section.depth": `Tiefe`,
      "panel.section.angle": `Winkel`,
      "panel.section.axis": `Achse`,
      "panel.section.radius": `Radius`,
      "panel.section.distance": `Abstand`,
      "panel.section.thickness": `Wandst\xE4rke`,
      "panel.section.direction": `Richtung`,
      "panel.section.count": `Anzahl`,
      "panel.section.spacing": `Abstand`,
      "panel.section.profiles": `Profile`,
      "panel.section.closed": `Geschlossen`,
      "panel.section.text": `Text`,
      "panel.section.size": `Gr\xF6\xDFe`,
      "panel.section.font": `Schriftart`,
      "panel.section.taper": `Verj\xFCngung`,
      "panel.section.twist": `Verdrehung`,
      "panel.section.orientation": `Ausrichtung`,
      "panel.section.helix": `Helixpfad`,
      "panel.section.quality": `Qualit\xE4t`,
      "panel.section.axis_origin": `Achsenursprung`,
      "panel.section.axis_dir": `Achsenrichtung`,
      "panel.section.part_def": `Teildefinition`,
      "panel.section.connection": `Verbindung`,
      "panel.section.state": `Zustand`,
      "panel.section.type": `Typ`,
      "panel.section.mirror": `Spiegelung`,
      "panel.tooltip.material": `Diesem Teil ein Material zuweisen`,
      "panel.tooltip.material_instance": `Dieser Komponente ein Material zuweisen`,
      "panel.tooltip.position": `Positionsversatz vom Ursprung (mm)`,
      "panel.tooltip.position_world": `Position im Weltkoordinatensystem (mm)`,
      "panel.tooltip.rotation": `Drehwinkel um jede Achse (Grad)`,
      "panel.tooltip.rotation_world": `Drehwinkel im Weltkoordinatensystem (Grad)`,
      "panel.tooltip.scale": `Skalierungsfaktor entlang jeder Achse`,
      "panel.tooltip.dimensions_box": `Breite, H\xF6he und Tiefe des Quaders (mm)`,
      "panel.tooltip.dimensions_cylinder": `Radius und H\xF6he des Zylinders (mm)`,
      "panel.tooltip.dimensions_sphere": `Radius der Kugel (mm)`,
      "panel.tooltip.fillet_radius": `Verrundungsradius (mm)`,
      "panel.tooltip.chamfer_distance": `Fasenabstand (mm)`,
      "panel.tooltip.shell_thickness": `Wandst\xE4rke (mm)`,
      "panel.tooltip.mirror_readonly": `Bearbeitung noch nicht unterst\xFCtzt`,
      "panel.back_to_tree": `Zur\xFCck zum Baum`,
      "panel.parts_selected": `{count} Teile ausgew\xE4hlt`,
      "panel.select_single": `W\xE4hle ein einzelnes Teil aus, um die Eigenschaften zu bearbeiten`,
      "panel.edit_circuit": `Schaltkreis bearbeiten`,
      "panel.open_embroidery": `Stickpanel \xF6ffnen`,
      "panel.parent": `\xDCbergeordnet:`,
      "panel.child": `Untergeordnet:`,
      "panel.ground": `Basis`,
      "panel.mirror_readonly": `Parameter der Spiegelebene sind schreibgesch\xFCtzt`,
      "bool.union": `Vereinigung`,
      "bool.difference": `Differenz`,
      "bool.intersection": `Verschneidung`,
      "joint.fixed": `Fest`,
      "joint.revolute": `Drehgelenk`,
      "joint.slider": `Schiebegelenk`,
      "joint.cylindrical": `Zylindergelenk`,
      "joint.ball": `Kugelgelenk`,
      "joint.free": `Frei`,
      "joint.suffix": `Verbindung`,
      "tree.scene": `Szene`,
      "tree.parameters": `Parameter`,
      "tree.scene_tooltip": `Szene inspizieren (Hintergrund, Umgebung, Lichter)`,
      "tree.parameters_tooltip": `Dokumentparameter bearbeiten (steuert verkn\xFCpfte Felder \xFCber Ausdr\xFCcke)`,
      "tree.sketch.label": `Skizze`,
      "tree.sketch.discard_title": `Skizze verwerfen?`,
      "tree.sketch.discard_msg": `Du hast ungespeicherte Geometrie.`,
      "tree.sketch.discard": `Verwerfen`,
      "tree.sketch.keep_editing": `Weiter bearbeiten`,
      "tree.sketch.cancelled": `Skizze abgebrochen`,
      "tree.sketch.discarded": `Skizze verworfen`,
      "tree.sketch.entities": `Entit\xE4ten ({count})`,
      "tree.sketch.constraints": `Beziehungen ({count})`,
      "tree.sketch.profiles": `Profile ({count})`,
      "tree.sketch.profile": `Profil {n}`,
      "tree.sketch.finish": `Fertigstellen`,
      "tree.sketch.finish_tooltip": `Skizze fertigstellen`,
      "tree.sketch.apply_tooltip": `{label} anwenden`,
      "tree.sketch.cancel_tooltip": `Skizze abbrechen (Esc)`,
      "tree.sketch.delete_constraint": `Beziehung l\xF6schen`
    },
    en: {
      "cmd.add_box.label": `Add Box`,
      "cmd.cube.label": `Add Cube`,
      "cmd.cylinder.label": `Add Cylinder`,
      "cmd.sphere.label": `Add Sphere`,
      "cmd.cone.label": `Add Cone`,
      "cmd.translate.label": `Move`,
      "cmd.rotate.label": `Rotate`,
      "cmd.scale.label": `Scale`,
      "cmd.move_mode.label": `Move Mode`,
      "cmd.rotate_mode.label": `Rotate Mode`,
      "cmd.scale_mode.label": `Scale Mode`,
      "cmd.mirror.label": `Mirror`,
      "cmd.union.label": `Union`,
      "cmd.difference.label": `Difference`,
      "cmd.intersection.label": `Intersection`,
      "cmd.fillet.label": `Fillet`,
      "cmd.chamfer.label": `Chamfer`,
      "cmd.shell.label": `Shell`,
      "cmd.stitch.label": `Stitch`,
      "cmd.linear_pattern.label": `Linear Pattern`,
      "cmd.circular_pattern.label": `Circular Pattern`,
      "cmd.delete.label": `Delete`,
      "cmd.delete_selected.label": `Delete Selected`,
      "cmd.undo.label": `Undo`,
      "cmd.redo.label": `Redo`,
      "cmd.copy.label": `Copy`,
      "cmd.paste.label": `Paste`,
      "cmd.duplicate.label": `Duplicate`,
      "cmd.select_all.label": `Select All`,
      "cmd.deselect.label": `Deselect`,
      "cmd.deselect_all.label": `Deselect All`,
      "cmd.new.label": `New Document`,
      "cmd.new_short.label": `New`,
      "cmd.open.label": `Open`,
      "cmd.open_dots.label": `Open\u2026`,
      "cmd.open_cloud.label": `Open from Cloud\u2026`,
      "cmd.save.label": `Save`,
      "cmd.export_stl.label": `Export STL`,
      "cmd.export_glb.label": `Export GLB`,
      "cmd.export_step.label": `Export STEP`,
      "cmd.export_drawing_pdf.label": `Export Drawing PDF`,
      "cmd.quit.label": `Quit`,
      "cmd.toggle_sidebar.label": `Toggle Sidebar`,
      "cmd.toggle_feature_tree.label": `Toggle Feature Tree`,
      "cmd.toggle_chat.label": `Toggle Chat`,
      "cmd.toggle_status_bar.label": `Toggle Status Bar`,
      "cmd.toggle_devtools.label": `Toggle DevTools`,
      "cmd.toggle_wireframe.label": `Toggle Wireframe`,
      "cmd.toggle_grid_snap.label": `Toggle Grid Snap`,
      "cmd.cycle_theme.label": `Cycle Theme`,
      "cmd.camera_iso.label": `Isometric View`,
      "cmd.camera_top.label": `Top View`,
      "cmd.camera_front.label": `Front View`,
      "cmd.camera_right.label": `Right View`,
      "cmd.camera_fit.label": `Fit to Screen`,
      "cmd.fit_to_view.label": `Fit to View`,
      "cmd.palette.label": `Command Palette`,
      "cmd.palette_dots.label": `Command Palette\u2026`,
      "cmd.sketch.label": `New Sketch`,
      "cmd.sketch_dots.label": `New Sketch\u2026`,
      "cmd.slicer.label": `Print (Slicer)\u2026`,
      "cmd.cam.label": `CAM (Toolpath)\u2026`,
      "cmd.about.label": `About vcad`,
      "cmd.whats_new.label": `What's New`,
      "cmd.open_docs.label": `Open Docs`,
      "cmd.documentation.label": `Documentation`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `Create Part Definition`,
      "cmd.insert_instance.label": `Insert Instance`,
      "cmd.add_fixed_joint.label": `Add Fixed Joint`,
      "cmd.add_revolute_joint.label": `Add Revolute Joint`,
      "cmd.add_slider_joint.label": `Add Slider Joint`,
      "cmd.set_ground.label": `Set as Ground`,
      "cmd.enter_electronics.label": `Open Electronics`,
      "cmd.exit_electronics.label": `Close Electronics`,
      "menu.file": `File`,
      "menu.edit": `Edit`,
      "menu.view": `View`,
      "menu.tools": `Tools`,
      "menu.help": `Help`,
      "menu.file.new": `New`,
      "menu.file.open": `Open\u2026`,
      "menu.file.save": `Save`,
      "menu.file.share_link": `Share link\u2026`,
      "menu.file.continue_in_claude": `Continue in Claude\u2026`,
      "menu.file.version_history": `Version history\u2026`,
      "menu.file.export": `Export`,
      "menu.file.export_stl": `Export STL`,
      "menu.file.export_glb": `Export GLB`,
      "menu.file.export_step": `Export STEP`,
      "menu.file.examples": `Examples`,
      "menu.file.quit": `Quit`,
      "menu.edit.undo": `Undo`,
      "menu.edit.redo": `Redo`,
      "menu.edit.delete": `Delete`,
      "menu.edit.duplicate": `Duplicate`,
      "menu.edit.select_all": `Select All`,
      "menu.edit.deselect": `Deselect`,
      "menu.view.toggle_sidebar": `Toggle Sidebar`,
      "menu.view.toggle_chat": `Toggle Chat`,
      "menu.view.camera_iso": `Isometric View`,
      "menu.view.camera_top": `Top View`,
      "menu.view.camera_front": `Front View`,
      "menu.view.camera_right": `Right View`,
      "menu.view.camera_fit": `Fit to Screen`,
      "menu.view.wireframe": `Wireframe`,
      "menu.view.cycle_theme": `Cycle Theme`,
      "menu.view.input_preferences": `Input Preferences\u2026`,
      "menu.view.ray_tracing": `Ray Tracing`,
      "menu.view.ray_tracing.off": `Off`,
      "menu.view.ray_tracing.draft": `Draft`,
      "menu.view.ray_tracing.standard": `Standard`,
      "menu.view.ray_tracing.high": `High`,
      "menu.view.ray_tracing.edges_on": `Edges On`,
      "menu.view.ray_tracing.edges_off": `Edges Off`,
      "menu.tools.palette": `Command Palette\u2026`,
      "menu.tools.sketch": `New Sketch`,
      "menu.help.about": `About vcad`,
      "menu.help.docs": `Open Docs`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `Create`,
      "toolbar.tab.sketch": `Sketch`,
      "toolbar.tab.transform": `Transform`,
      "toolbar.tab.combine": `Combine`,
      "toolbar.tab.modify": `Modify`,
      "toolbar.tab.assembly": `Assembly`,
      "toolbar.tab.simulate": `Simulate`,
      "toolbar.tab.export": `Export`,
      "toolbar.tool.box": `Box`,
      "toolbar.tool.cyl": `Cyl`,
      "toolbar.tool.sph": `Sph`,
      "toolbar.tool.cone": `Cone`,
      "toolbar.tool.sketch": `Sketch`,
      "toolbar.tool.move": `Move`,
      "toolbar.tool.rotate": `Rotate`,
      "toolbar.tool.scale": `Scale`,
      "toolbar.tool.union": `Union`,
      "toolbar.tool.diff": `Diff`,
      "toolbar.tool.isect": `Isect`,
      "toolbar.tool.fillet": `Fillet`,
      "toolbar.tool.chamfer": `Chamfer`,
      "toolbar.tool.shell": `Shell`,
      "toolbar.tool.pattern": `Pattern`,
      "toolbar.tool.mirror": `Mirror`,
      "toolbar.tool.part": `Part`,
      "toolbar.tool.instance": `Instance`,
      "toolbar.tool.joint": `Joint`,
      "toolbar.tool.play": `Play`,
      "toolbar.tool.pause": `Pause`,
      "toolbar.tool.step": `Step`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `Save`,
      "toolbar.hint.numeric": `\u2190\u2192:scrub  Enter:apply  Esc:cancel`,
      "toolbar.hint.text": `Enter:apply  Esc:cancel`,
      "status.modified": `modified`,
      "status.saved": `saved`,
      "status.part": `{count} part`,
      "status.parts": `{count} parts`,
      "status.sel": `{count} sel`,
      "status.console_empty": `console empty`,
      "status.ago.now": `now`,
      "status.ago.seconds": `{count}s`,
      "status.ago.minutes": `{count}m`,
      "status.ago.hours": `{count}h`,
      "welcome.tagline": `free parametric cad for everyone`,
      "welcome.new_project": `New Project`,
      "welcome.blank_project": `Blank Project`,
      "welcome.open_file": `Open File`,
      "welcome.hint.new": `guided tutorial`,
      "welcome.hint.blank": `empty canvas`,
      "welcome.hint.open": `:open`,
      "welcome.footer": `\u2191\u2193 navigate  enter select  esc dismiss`,
      "tree.header": `PARTS`,
      "tree.empty": `No parts`,
      "desktop.menu.open_recent": `Open Recent\u2026`,
      "desktop.menu.open_cloud": `Open from Cloud\u2026`,
      "desktop.menu.toggle_status_bar": `Toggle Status Bar`,
      "desktop.menu.camera_iso": `Isometric`,
      "desktop.menu.camera_fit": `Fit to Selection`,
      "desktop.menu.toggle_grid_snap": `Toggle Grid Snap`,
      "desktop.menu.slicer": `Slicer`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `Check for Updates\u2026`,
      "desktop.menu.whats_new": `What's New`,
      "desktop.menu.documentation": `Documentation`,
      "desktop.menu.camera_top": `Top`,
      "desktop.menu.camera_front": `Front`,
      "desktop.menu.camera_right": `Right`,
      "modal.about.tagline": `Parametric CAD for everyone`,
      "modal.about.action.shape": `Add a shape`,
      "modal.about.action.shape_desc": `Box, cylinder, sphere`,
      "modal.about.action.sketch": `Start a sketch`,
      "modal.about.action.sketch_desc": `Draw 2D \u2192 extrude to 3D`,
      "modal.about.action.open": `Open file`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `Quick tutorial`,
      "modal.about.action.tutorial_desc": `Learn the basics`,
      "modal.about.keyhint.palette": `Chat & commands`,
      "modal.about.keyhint.tabs": `Switch toolbar tabs`,
      "modal.about.keyhint.transform": `Move, Rotate, Scale`,
      "modal.about.keyhint.boolean": `Boolean ops (2 selected)`,
      "modal.about.docs": `Docs`,
      "modal.about.whats_new": `What's new`,
      "footer.privacy": `Privacy`,
      "footer.terms": `Terms`,
      "footer.security": `Security`,
      "tutorial.add_cube.instruction": `Open Create \u2192 click Box`,
      "tutorial.add_cube.detail": `Add your first shape to the scene`,
      "tutorial.add_cylinder.instruction": `Open Create \u2192 add a Cylinder`,
      "tutorial.add_cylinder.detail": `We'll subtract this from the cube`,
      "tutorial.position_cylinder.instruction": `Move the cylinder up`,
      "tutorial.position_cylinder.detail": `Drag the green arrow on the gizmo`,
      "tutorial.subtract.instruction": `Open Combine \u2192 click Difference`,
      "tutorial.subtract.detail": `Select both parts first (\u2318-click or drag)`,
      "tutorial.celebrate.instruction": `You made your first part!`,
      "tutorial.celebrate.detail": `You've learned the CSG workflow`,
      "tutorial.skip": `Skip tutorial`,
      "tutorial.start_building": `Start Building`,
      "tutorial.skip_short": `skip tutorial`,
      "error.boundary.title": `something went wrong`,
      "error.boundary.unexpected": `An unexpected error occurred`,
      "error.boundary.reload": `Reload App`,
      "error.boundary.cache_hint": `If this keeps happening, try clearing your browser cache.`,
      "error.engine": `engine error`,
      "status.offline": `Offline`,
      "status.console_open": `Open console (~)`,
      "status.console_empty_title": `Console (empty)`,
      "status.cursor_pos": `Cursor position on ground plane (mm)`,
      "status.language": `Language`,
      "banner.readonly.viewing": `Viewing {name} (read-only)`,
      "banner.readonly.fork": `Sign in to fork`,
      "modal.fork.title": `This document is read-only`,
      "modal.fork.description": `Sign in to create your own editable copy. Your edits won't touch the original \u2014 you'll get a fresh fork in your account.`,
      "modal.fork.keep_viewing": `Keep viewing`,
      "modal.fork.signin": `Sign in to fork`,
      "palette.placeholder": `Type a command or describe what to create...`,
      "palette.title": `Command Palette`,
      "palette.generating": `Generating...`,
      "palette.section.get_started": `Get Started`,
      "palette.section.examples": `Examples`,
      "palette.section.ask_ai_inline": `Or describe what to create`,
      "palette.section.ask_ai": `Ask AI`,
      "palette.action.new_project": `New Project`,
      "palette.action.new_project_hint": `guided tutorial`,
      "palette.action.blank_project": `Blank Project`,
      "palette.action.blank_project_hint": `skip tutorial`,
      "palette.action.open_file": `Open File`,
      "palette.generate_label": `Generate:`,
      "palette.kbd_server": `server`,
      "palette.empty": `No commands found`,
      "palette.failed_to_load": `Failed to load file`,
      "panel.section.material": `Material`,
      "panel.section.position": `Position`,
      "panel.section.rotation": `Rotation`,
      "panel.section.scale": `Scale`,
      "panel.section.dimensions": `Dimensions`,
      "panel.section.operation": `Operation`,
      "panel.section.profile": `Profile`,
      "panel.section.path": `Path`,
      "panel.section.depth": `Depth`,
      "panel.section.angle": `Angle`,
      "panel.section.axis": `Axis`,
      "panel.section.radius": `Radius`,
      "panel.section.distance": `Distance`,
      "panel.section.thickness": `Thickness`,
      "panel.section.direction": `Direction`,
      "panel.section.count": `Count`,
      "panel.section.spacing": `Spacing`,
      "panel.section.profiles": `Profiles`,
      "panel.section.closed": `Closed`,
      "panel.section.text": `Text`,
      "panel.section.size": `Size`,
      "panel.section.font": `Font`,
      "panel.section.taper": `Taper`,
      "panel.section.twist": `Twist`,
      "panel.section.orientation": `Orientation`,
      "panel.section.helix": `Helix Path`,
      "panel.section.quality": `Quality`,
      "panel.section.axis_origin": `Axis Origin`,
      "panel.section.axis_dir": `Axis Direction`,
      "panel.section.part_def": `Part Definition`,
      "panel.section.connection": `Connection`,
      "panel.section.state": `State`,
      "panel.section.type": `Type`,
      "panel.section.mirror": `Mirror`,
      "panel.tooltip.material": `Assign a material to this part`,
      "panel.tooltip.material_instance": `Assign a material to this instance`,
      "panel.tooltip.position": `Position offset from origin (mm)`,
      "panel.tooltip.position_world": `Position in world space (mm)`,
      "panel.tooltip.rotation": `Rotation angles around each axis (degrees)`,
      "panel.tooltip.rotation_world": `Rotation angles in world space (degrees)`,
      "panel.tooltip.scale": `Scale factor along each axis`,
      "panel.tooltip.dimensions_box": `Width, height, and depth of the box (mm)`,
      "panel.tooltip.dimensions_cylinder": `Radius and height of the cylinder (mm)`,
      "panel.tooltip.dimensions_sphere": `Radius of the sphere (mm)`,
      "panel.tooltip.fillet_radius": `Fillet radius (mm)`,
      "panel.tooltip.chamfer_distance": `Chamfer distance (mm)`,
      "panel.tooltip.shell_thickness": `Wall thickness (mm)`,
      "panel.tooltip.mirror_readonly": `Editing not yet supported`,
      "panel.back_to_tree": `Back to tree`,
      "panel.parts_selected": `{count} parts selected`,
      "panel.select_single": `Select a single part to edit properties`,
      "panel.edit_circuit": `Edit Circuit`,
      "panel.open_embroidery": `Open Embroidery Panel`,
      "panel.parent": `Parent:`,
      "panel.child": `Child:`,
      "panel.ground": `Ground`,
      "panel.mirror_readonly": `Mirror plane parameters are read-only`,
      "bool.union": `Union`,
      "bool.difference": `Difference`,
      "bool.intersection": `Intersection`,
      "joint.fixed": `Fixed`,
      "joint.revolute": `Revolute`,
      "joint.slider": `Slider`,
      "joint.cylindrical": `Cylindrical`,
      "joint.ball": `Ball`,
      "joint.free": `Free`,
      "joint.suffix": `Joint`,
      "tree.scene": `Scene`,
      "tree.parameters": `Parameters`,
      "tree.scene_tooltip": `Inspect scene (background, environment, lights)`,
      "tree.parameters_tooltip": `Edit document parameters (drive bound fields via expressions)`,
      "tree.sketch.label": `Sketch`,
      "tree.sketch.discard_title": `Discard sketch?`,
      "tree.sketch.discard_msg": `You have unsaved geometry.`,
      "tree.sketch.discard": `Discard`,
      "tree.sketch.keep_editing": `Keep editing`,
      "tree.sketch.cancelled": `Sketch cancelled`,
      "tree.sketch.discarded": `Sketch discarded`,
      "tree.sketch.entities": `Entities ({count})`,
      "tree.sketch.constraints": `Constraints ({count})`,
      "tree.sketch.profiles": `Profiles ({count})`,
      "tree.sketch.profile": `Profile {n}`,
      "tree.sketch.finish": `Finish`,
      "tree.sketch.finish_tooltip": `Finish sketch`,
      "tree.sketch.apply_tooltip": `Apply {label}`,
      "tree.sketch.cancel_tooltip": `Cancel sketch (Esc)`,
      "tree.sketch.delete_constraint": `Delete constraint`
    },
    es: {
      "cmd.add_box.label": `Agregar Caja`,
      "cmd.cube.label": `Agregar Cubo`,
      "cmd.cylinder.label": `Agregar Cilindro`,
      "cmd.sphere.label": `Agregar Esfera`,
      "cmd.cone.label": `Agregar Cono`,
      "cmd.translate.label": `Mover`,
      "cmd.rotate.label": `Rotar`,
      "cmd.scale.label": `Escalar`,
      "cmd.move_mode.label": `Modo Mover`,
      "cmd.rotate_mode.label": `Modo Rotar`,
      "cmd.scale_mode.label": `Modo Escalar`,
      "cmd.mirror.label": `Espejo`,
      "cmd.union.label": `Uni\xF3n`,
      "cmd.difference.label": `Diferencia`,
      "cmd.intersection.label": `Intersecci\xF3n`,
      "cmd.fillet.label": `Redondeo`,
      "cmd.chamfer.label": `Chafl\xE1n`,
      "cmd.shell.label": `Vaciado`,
      "cmd.stitch.label": `Coser`,
      "cmd.linear_pattern.label": `Patr\xF3n Lineal`,
      "cmd.circular_pattern.label": `Patr\xF3n Circular`,
      "cmd.delete.label": `Eliminar`,
      "cmd.delete_selected.label": `Eliminar Selecci\xF3n`,
      "cmd.undo.label": `Deshacer`,
      "cmd.redo.label": `Rehacer`,
      "cmd.copy.label": `Copiar`,
      "cmd.paste.label": `Pegar`,
      "cmd.duplicate.label": `Duplicar`,
      "cmd.select_all.label": `Seleccionar Todo`,
      "cmd.deselect.label": `Deseleccionar`,
      "cmd.deselect_all.label": `Deseleccionar Todo`,
      "cmd.new.label": `Nuevo Documento`,
      "cmd.new_short.label": `Nuevo`,
      "cmd.open.label": `Abrir`,
      "cmd.open_dots.label": `Abrir\u2026`,
      "cmd.open_cloud.label": `Abrir desde la Nube\u2026`,
      "cmd.save.label": `Guardar`,
      "cmd.export_stl.label": `Exportar STL`,
      "cmd.export_glb.label": `Exportar GLB`,
      "cmd.export_step.label": `Exportar STEP`,
      "cmd.quit.label": `Salir`,
      "cmd.toggle_sidebar.label": `Alternar Barra Lateral`,
      "cmd.toggle_feature_tree.label": `Alternar \xC1rbol de Funciones`,
      "cmd.toggle_chat.label": `Alternar Chat`,
      "cmd.toggle_status_bar.label": `Alternar Barra de Estado`,
      "cmd.toggle_devtools.label": `Alternar Herramientas de Desarrollo`,
      "cmd.toggle_wireframe.label": `Alternar Estructura Al\xE1mbrica`,
      "cmd.toggle_grid_snap.label": `Alternar Ajuste a Cuadr\xEDcula`,
      "cmd.cycle_theme.label": `Cambiar Tema`,
      "cmd.camera_iso.label": `Vista Isom\xE9trica`,
      "cmd.camera_top.label": `Vista Superior`,
      "cmd.camera_front.label": `Vista Frontal`,
      "cmd.camera_right.label": `Vista Derecha`,
      "cmd.camera_fit.label": `Ajustar a Pantalla`,
      "cmd.fit_to_view.label": `Ajustar a Vista`,
      "cmd.palette.label": `Paleta de Comandos`,
      "cmd.palette_dots.label": `Paleta de Comandos\u2026`,
      "cmd.sketch.label": `Nuevo Croquis`,
      "cmd.sketch_dots.label": `Nuevo Croquis\u2026`,
      "cmd.slicer.label": `Imprimir (Laminador)\u2026`,
      "cmd.cam.label": `CAM (Trayectoria)\u2026`,
      "cmd.about.label": `Acerca de vcad`,
      "cmd.whats_new.label": `Novedades`,
      "cmd.open_docs.label": `Abrir Documentaci\xF3n`,
      "cmd.documentation.label": `Documentaci\xF3n`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `Crear Definici\xF3n de Pieza`,
      "cmd.insert_instance.label": `Insertar Instancia`,
      "cmd.add_fixed_joint.label": `Agregar Uni\xF3n Fija`,
      "cmd.add_revolute_joint.label": `Agregar Uni\xF3n Giratoria`,
      "cmd.add_slider_joint.label": `Agregar Uni\xF3n Deslizante`,
      "cmd.set_ground.label": `Fijar como Base`,
      "cmd.enter_electronics.label": `Abrir Electr\xF3nica`,
      "cmd.exit_electronics.label": `Cerrar Electr\xF3nica`,
      "menu.file": `Archivo`,
      "menu.edit": `Editar`,
      "menu.view": `Vista`,
      "menu.tools": `Herramientas`,
      "menu.help": `Ayuda`,
      "menu.file.new": `Nuevo`,
      "menu.file.open": `Abrir\u2026`,
      "menu.file.save": `Guardar`,
      "menu.file.share_link": `Compartir enlace\u2026`,
      "menu.file.version_history": `Historial de versiones\u2026`,
      "menu.file.export": `Exportar`,
      "menu.file.export_stl": `Exportar STL`,
      "menu.file.export_glb": `Exportar GLB`,
      "menu.file.export_step": `Exportar STEP`,
      "menu.file.examples": `Ejemplos`,
      "menu.file.quit": `Salir`,
      "menu.edit.undo": `Deshacer`,
      "menu.edit.redo": `Rehacer`,
      "menu.edit.delete": `Eliminar`,
      "menu.edit.duplicate": `Duplicar`,
      "menu.edit.select_all": `Seleccionar Todo`,
      "menu.edit.deselect": `Deseleccionar`,
      "menu.view.toggle_sidebar": `Alternar Barra Lateral`,
      "menu.view.toggle_chat": `Alternar Chat`,
      "menu.view.camera_iso": `Vista Isom\xE9trica`,
      "menu.view.camera_top": `Vista Superior`,
      "menu.view.camera_front": `Vista Frontal`,
      "menu.view.camera_right": `Vista Derecha`,
      "menu.view.camera_fit": `Ajustar a Pantalla`,
      "menu.view.wireframe": `Estructura Al\xE1mbrica`,
      "menu.view.cycle_theme": `Cambiar Tema`,
      "menu.view.input_preferences": `Preferencias de Entrada\u2026`,
      "menu.view.ray_tracing": `Trazado de Rayos`,
      "menu.view.ray_tracing.off": `Apagado`,
      "menu.view.ray_tracing.draft": `Borrador`,
      "menu.view.ray_tracing.standard": `Est\xE1ndar`,
      "menu.view.ray_tracing.high": `Alta`,
      "menu.view.ray_tracing.edges_on": `Bordes Activados`,
      "menu.view.ray_tracing.edges_off": `Bordes Desactivados`,
      "menu.tools.palette": `Paleta de Comandos\u2026`,
      "menu.tools.sketch": `Nuevo Croquis`,
      "menu.help.about": `Acerca de vcad`,
      "menu.help.docs": `Abrir Documentaci\xF3n`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `Crear`,
      "toolbar.tab.sketch": `Croquis`,
      "toolbar.tab.transform": `Transformar`,
      "toolbar.tab.combine": `Combinar`,
      "toolbar.tab.modify": `Modificar`,
      "toolbar.tab.assembly": `Ensamblaje`,
      "toolbar.tab.simulate": `Simular`,
      "toolbar.tab.export": `Exportar`,
      "toolbar.tool.box": `Caja`,
      "toolbar.tool.cyl": `Cil`,
      "toolbar.tool.sph": `Esf`,
      "toolbar.tool.cone": `Cono`,
      "toolbar.tool.sketch": `Croquis`,
      "toolbar.tool.move": `Mover`,
      "toolbar.tool.rotate": `Rotar`,
      "toolbar.tool.scale": `Escalar`,
      "toolbar.tool.union": `Uni\xF3n`,
      "toolbar.tool.diff": `Dif`,
      "toolbar.tool.isect": `Inter`,
      "toolbar.tool.fillet": `Redondeo`,
      "toolbar.tool.chamfer": `Chafl\xE1n`,
      "toolbar.tool.shell": `Vaciado`,
      "toolbar.tool.pattern": `Patr\xF3n`,
      "toolbar.tool.mirror": `Espejo`,
      "toolbar.tool.part": `Pieza`,
      "toolbar.tool.instance": `Instancia`,
      "toolbar.tool.joint": `Uni\xF3n`,
      "toolbar.tool.play": `Reproducir`,
      "toolbar.tool.pause": `Pausar`,
      "toolbar.tool.step": `Paso`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `Guardar`,
      "toolbar.hint.numeric": `\u2190\u2192:ajustar  Enter:aplicar  Esc:cancelar`,
      "toolbar.hint.text": `Enter:aplicar  Esc:cancelar`,
      "status.modified": `modificado`,
      "status.saved": `guardado`,
      "status.part": `{count} pieza`,
      "status.parts": `{count} piezas`,
      "status.sel": `{count} sel`,
      "status.console_empty": `consola vac\xEDa`,
      "status.ago.now": `ahora`,
      "status.ago.seconds": `{count}s`,
      "status.ago.minutes": `{count}m`,
      "status.ago.hours": `{count}h`,
      "welcome.tagline": `CAD param\xE9trico libre para todos`,
      "welcome.new_project": `Nuevo Proyecto`,
      "welcome.blank_project": `Proyecto en Blanco`,
      "welcome.open_file": `Abrir Archivo`,
      "welcome.hint.new": `tutorial guiado`,
      "welcome.hint.blank": `lienzo vac\xEDo`,
      "welcome.hint.open": `:abrir`,
      "welcome.footer": `\u2191\u2193 navegar  enter seleccionar  esc descartar`,
      "tree.header": `PIEZAS`,
      "tree.empty": `Sin piezas`,
      "desktop.menu.open_recent": `Abrir Reciente\u2026`,
      "desktop.menu.open_cloud": `Abrir desde la Nube\u2026`,
      "desktop.menu.toggle_status_bar": `Alternar Barra de Estado`,
      "desktop.menu.camera_iso": `Isom\xE9trica`,
      "desktop.menu.camera_fit": `Ajustar a Selecci\xF3n`,
      "desktop.menu.toggle_grid_snap": `Alternar Ajuste a Cuadr\xEDcula`,
      "desktop.menu.slicer": `Laminador`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `Buscar Actualizaciones\u2026`,
      "desktop.menu.whats_new": `Novedades`,
      "desktop.menu.documentation": `Documentaci\xF3n`,
      "desktop.menu.camera_top": `Superior`,
      "desktop.menu.camera_front": `Frontal`,
      "desktop.menu.camera_right": `Derecha`,
      "modal.about.tagline": `CAD param\xE9trico para todos`,
      "modal.about.action.shape": `A\xF1adir una forma`,
      "modal.about.action.shape_desc": `Caja, cilindro, esfera`,
      "modal.about.action.sketch": `Iniciar un croquis`,
      "modal.about.action.sketch_desc": `Dibujar 2D \u2192 extruir a 3D`,
      "modal.about.action.open": `Abrir archivo`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `Tutorial r\xE1pido`,
      "modal.about.action.tutorial_desc": `Aprende lo b\xE1sico`,
      "modal.about.keyhint.palette": `Chat y comandos`,
      "modal.about.keyhint.tabs": `Cambiar pesta\xF1as de barra`,
      "modal.about.keyhint.transform": `Mover, Rotar, Escalar`,
      "modal.about.keyhint.boolean": `Ops booleanas (2 seleccionados)`,
      "modal.about.docs": `Docs`,
      "modal.about.whats_new": `Novedades`,
      "footer.privacy": `Privacidad`,
      "footer.terms": `T\xE9rminos`,
      "footer.security": `Seguridad`,
      "tutorial.add_cube.instruction": `Abrir Crear \u2192 clic en Caja`,
      "tutorial.add_cube.detail": `A\xF1ade tu primera forma a la escena`,
      "tutorial.add_cylinder.instruction": `Abrir Crear \u2192 a\xF1adir un Cilindro`,
      "tutorial.add_cylinder.detail": `Lo restaremos del cubo`,
      "tutorial.position_cylinder.instruction": `Mueve el cilindro hacia arriba`,
      "tutorial.position_cylinder.detail": `Arrastra la flecha verde del gizmo`,
      "tutorial.subtract.instruction": `Abrir Combinar \u2192 clic en Diferencia`,
      "tutorial.subtract.detail": `Selecciona primero las dos piezas (\u2318-clic o arrastrar)`,
      "tutorial.celebrate.instruction": `\xA1Has creado tu primera pieza!`,
      "tutorial.celebrate.detail": `Has aprendido el flujo CSG`,
      "tutorial.skip": `Saltar tutorial`,
      "tutorial.start_building": `Empezar a construir`,
      "tutorial.skip_short": `saltar tutorial`,
      "error.boundary.title": `algo sali\xF3 mal`,
      "error.boundary.unexpected": `Ocurri\xF3 un error inesperado`,
      "error.boundary.reload": `Recargar app`,
      "error.boundary.cache_hint": `Si esto sigue ocurriendo, prueba a borrar la cach\xE9 del navegador.`,
      "error.engine": `error del motor`,
      "status.offline": `Sin conexi\xF3n`,
      "status.console_open": `Abrir consola (~)`,
      "status.console_empty_title": `Consola (vac\xEDa)`,
      "status.cursor_pos": `Posici\xF3n del cursor en el plano (mm)`,
      "status.language": `Idioma`,
      "banner.readonly.viewing": `Viendo {name} (solo lectura)`,
      "banner.readonly.fork": `Inicia sesi\xF3n para bifurcar`,
      "modal.fork.title": `Este documento es de solo lectura`,
      "modal.fork.description": `Inicia sesi\xF3n para crear tu propia copia editable. Tus cambios no afectar\xE1n al original \u2014 obtendr\xE1s una bifurcaci\xF3n nueva en tu cuenta.`,
      "modal.fork.keep_viewing": `Seguir viendo`,
      "modal.fork.signin": `Inicia sesi\xF3n para bifurcar`,
      "palette.placeholder": `Escribe un comando o describe qu\xE9 crear...`,
      "palette.title": `Paleta de comandos`,
      "palette.generating": `Generando...`,
      "palette.section.get_started": `Empezar`,
      "palette.section.examples": `Ejemplos`,
      "palette.section.ask_ai_inline": `O describe qu\xE9 crear`,
      "palette.section.ask_ai": `Preguntar a la IA`,
      "palette.action.new_project": `Nuevo proyecto`,
      "palette.action.new_project_hint": `tutorial guiado`,
      "palette.action.blank_project": `Proyecto en blanco`,
      "palette.action.blank_project_hint": `saltar tutorial`,
      "palette.action.open_file": `Abrir archivo`,
      "palette.generate_label": `Generar:`,
      "palette.kbd_server": `servidor`,
      "palette.empty": `No se encontraron comandos`,
      "palette.failed_to_load": `No se pudo cargar el archivo`,
      "panel.section.material": `Material`,
      "panel.section.position": `Posici\xF3n`,
      "panel.section.rotation": `Rotaci\xF3n`,
      "panel.section.scale": `Escala`,
      "panel.section.dimensions": `Dimensiones`,
      "panel.section.operation": `Operaci\xF3n`,
      "panel.section.profile": `Perfil`,
      "panel.section.path": `Trayectoria`,
      "panel.section.depth": `Profundidad`,
      "panel.section.angle": `\xC1ngulo`,
      "panel.section.axis": `Eje`,
      "panel.section.radius": `Radio`,
      "panel.section.distance": `Distancia`,
      "panel.section.thickness": `Grosor`,
      "panel.section.direction": `Direcci\xF3n`,
      "panel.section.count": `Cantidad`,
      "panel.section.spacing": `Espaciado`,
      "panel.section.profiles": `Perfiles`,
      "panel.section.closed": `Cerrado`,
      "panel.section.text": `Texto`,
      "panel.section.size": `Tama\xF1o`,
      "panel.section.font": `Fuente`,
      "panel.section.taper": `C\xF3nico`,
      "panel.section.twist": `Torsi\xF3n`,
      "panel.section.orientation": `Orientaci\xF3n`,
      "panel.section.helix": `Trayectoria helicoidal`,
      "panel.section.quality": `Calidad`,
      "panel.section.axis_origin": `Origen del eje`,
      "panel.section.axis_dir": `Direcci\xF3n del eje`,
      "panel.section.part_def": `Definici\xF3n de pieza`,
      "panel.section.connection": `Conexi\xF3n`,
      "panel.section.state": `Estado`,
      "panel.section.type": `Tipo`,
      "panel.section.mirror": `Espejo`,
      "panel.tooltip.material": `Asignar un material a esta pieza`,
      "panel.tooltip.material_instance": `Asignar un material a esta instancia`,
      "panel.tooltip.position": `Desplazamiento desde el origen (mm)`,
      "panel.tooltip.position_world": `Posici\xF3n en el espacio mundial (mm)`,
      "panel.tooltip.rotation": `\xC1ngulos de rotaci\xF3n alrededor de cada eje (grados)`,
      "panel.tooltip.rotation_world": `\xC1ngulos de rotaci\xF3n en el espacio mundial (grados)`,
      "panel.tooltip.scale": `Factor de escala a lo largo de cada eje`,
      "panel.tooltip.dimensions_box": `Ancho, alto y profundidad de la caja (mm)`,
      "panel.tooltip.dimensions_cylinder": `Radio y altura del cilindro (mm)`,
      "panel.tooltip.dimensions_sphere": `Radio de la esfera (mm)`,
      "panel.tooltip.fillet_radius": `Radio de redondeo (mm)`,
      "panel.tooltip.chamfer_distance": `Distancia de chafl\xE1n (mm)`,
      "panel.tooltip.shell_thickness": `Grosor de pared (mm)`,
      "panel.tooltip.mirror_readonly": `Edici\xF3n a\xFAn no soportada`,
      "panel.back_to_tree": `Volver al \xE1rbol`,
      "panel.parts_selected": `{count} piezas seleccionadas`,
      "panel.select_single": `Selecciona una sola pieza para editar propiedades`,
      "panel.edit_circuit": `Editar circuito`,
      "panel.open_embroidery": `Abrir panel de bordado`,
      "panel.parent": `Padre:`,
      "panel.child": `Hijo:`,
      "panel.ground": `Base`,
      "panel.mirror_readonly": `Los par\xE1metros del plano de simetr\xEDa son de solo lectura`,
      "bool.union": `Uni\xF3n`,
      "bool.difference": `Diferencia`,
      "bool.intersection": `Intersecci\xF3n`,
      "joint.fixed": `Fija`,
      "joint.revolute": `Giratoria`,
      "joint.slider": `Deslizante`,
      "joint.cylindrical": `Cil\xEDndrica`,
      "joint.ball": `Esf\xE9rica`,
      "joint.free": `Libre`,
      "joint.suffix": `Uni\xF3n`,
      "tree.scene": `Escena`,
      "tree.parameters": `Par\xE1metros`,
      "tree.scene_tooltip": `Inspeccionar escena (fondo, entorno, luces)`,
      "tree.parameters_tooltip": `Editar par\xE1metros del documento (controla campos vinculados con expresiones)`,
      "tree.sketch.label": `Croquis`,
      "tree.sketch.discard_title": `\xBFDescartar croquis?`,
      "tree.sketch.discard_msg": `Tienes geometr\xEDa sin guardar.`,
      "tree.sketch.discard": `Descartar`,
      "tree.sketch.keep_editing": `Seguir editando`,
      "tree.sketch.cancelled": `Croquis cancelado`,
      "tree.sketch.discarded": `Croquis descartado`,
      "tree.sketch.entities": `Entidades ({count})`,
      "tree.sketch.constraints": `Restricciones ({count})`,
      "tree.sketch.profiles": `Perfiles ({count})`,
      "tree.sketch.profile": `Perfil {n}`,
      "tree.sketch.finish": `Terminar`,
      "tree.sketch.finish_tooltip": `Terminar croquis`,
      "tree.sketch.apply_tooltip": `Aplicar {label}`,
      "tree.sketch.cancel_tooltip": `Cancelar croquis (Esc)`,
      "tree.sketch.delete_constraint": `Eliminar restricci\xF3n`
    },
    fr: {
      "cmd.add_box.label": `Ajouter une bo\xEEte`,
      "cmd.cube.label": `Ajouter un cube`,
      "cmd.cylinder.label": `Ajouter un cylindre`,
      "cmd.sphere.label": `Ajouter une sph\xE8re`,
      "cmd.cone.label": `Ajouter un c\xF4ne`,
      "cmd.translate.label": `D\xE9placer`,
      "cmd.rotate.label": `Pivoter`,
      "cmd.scale.label": `Mettre \xE0 l'\xE9chelle`,
      "cmd.move_mode.label": `Mode d\xE9placement`,
      "cmd.rotate_mode.label": `Mode rotation`,
      "cmd.scale_mode.label": `Mode \xE9chelle`,
      "cmd.mirror.label": `Sym\xE9trie`,
      "cmd.union.label": `Union`,
      "cmd.difference.label": `Diff\xE9rence`,
      "cmd.intersection.label": `Intersection`,
      "cmd.fillet.label": `Cong\xE9`,
      "cmd.chamfer.label": `Chanfrein`,
      "cmd.shell.label": `Coque`,
      "cmd.stitch.label": `Coudre`,
      "cmd.linear_pattern.label": `R\xE9p\xE9tition lin\xE9aire`,
      "cmd.circular_pattern.label": `R\xE9p\xE9tition circulaire`,
      "cmd.delete.label": `Supprimer`,
      "cmd.delete_selected.label": `Supprimer la s\xE9lection`,
      "cmd.undo.label": `Annuler`,
      "cmd.redo.label": `R\xE9tablir`,
      "cmd.copy.label": `Copier`,
      "cmd.paste.label": `Coller`,
      "cmd.duplicate.label": `Dupliquer`,
      "cmd.select_all.label": `Tout s\xE9lectionner`,
      "cmd.deselect.label": `D\xE9s\xE9lectionner`,
      "cmd.deselect_all.label": `Tout d\xE9s\xE9lectionner`,
      "cmd.new.label": `Nouveau document`,
      "cmd.new_short.label": `Nouveau`,
      "cmd.open.label": `Ouvrir`,
      "cmd.open_dots.label": `Ouvrir\u2026`,
      "cmd.open_cloud.label": `Ouvrir depuis le cloud\u2026`,
      "cmd.save.label": `Enregistrer`,
      "cmd.export_stl.label": `Exporter en STL`,
      "cmd.export_glb.label": `Exporter en GLB`,
      "cmd.export_step.label": `Exporter en STEP`,
      "cmd.quit.label": `Quitter`,
      "cmd.toggle_sidebar.label": `Basculer la barre lat\xE9rale`,
      "cmd.toggle_feature_tree.label": `Basculer l'arbre des fonctions`,
      "cmd.toggle_chat.label": `Basculer le chat`,
      "cmd.toggle_status_bar.label": `Basculer la barre d'\xE9tat`,
      "cmd.toggle_devtools.label": `Basculer les outils de d\xE9veloppement`,
      "cmd.toggle_wireframe.label": `Basculer le filaire`,
      "cmd.toggle_grid_snap.label": `Basculer l'aimantation \xE0 la grille`,
      "cmd.cycle_theme.label": `Changer de th\xE8me`,
      "cmd.camera_iso.label": `Vue isom\xE9trique`,
      "cmd.camera_top.label": `Vue de dessus`,
      "cmd.camera_front.label": `Vue de face`,
      "cmd.camera_right.label": `Vue de droite`,
      "cmd.camera_fit.label": `Ajuster \xE0 l'\xE9cran`,
      "cmd.fit_to_view.label": `Ajuster \xE0 la vue`,
      "cmd.palette.label": `Palette de commandes`,
      "cmd.palette_dots.label": `Palette de commandes\u2026`,
      "cmd.sketch.label": `Nouvelle esquisse`,
      "cmd.sketch_dots.label": `Nouvelle esquisse\u2026`,
      "cmd.slicer.label": `Imprimer (Trancheur)\u2026`,
      "cmd.cam.label": `FAO (Trajectoire)\u2026`,
      "cmd.about.label": `\xC0 propos de vcad`,
      "cmd.whats_new.label": `Nouveaut\xE9s`,
      "cmd.open_docs.label": `Ouvrir la documentation`,
      "cmd.documentation.label": `Documentation`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `Cr\xE9er une d\xE9finition de pi\xE8ce`,
      "cmd.insert_instance.label": `Ins\xE9rer une instance`,
      "cmd.add_fixed_joint.label": `Ajouter une liaison fixe`,
      "cmd.add_revolute_joint.label": `Ajouter une liaison pivot`,
      "cmd.add_slider_joint.label": `Ajouter une liaison glissi\xE8re`,
      "cmd.set_ground.label": `D\xE9finir comme b\xE2ti`,
      "cmd.enter_electronics.label": `Ouvrir l'\xE9lectronique`,
      "cmd.exit_electronics.label": `Fermer l'\xE9lectronique`,
      "menu.file": `Fichier`,
      "menu.edit": `\xC9dition`,
      "menu.view": `Affichage`,
      "menu.tools": `Outils`,
      "menu.help": `Aide`,
      "menu.file.new": `Nouveau`,
      "menu.file.open": `Ouvrir\u2026`,
      "menu.file.save": `Enregistrer`,
      "menu.file.share_link": `Partager le lien\u2026`,
      "menu.file.version_history": `Historique des versions\u2026`,
      "menu.file.export": `Exporter`,
      "menu.file.export_stl": `Exporter en STL`,
      "menu.file.export_glb": `Exporter en GLB`,
      "menu.file.export_step": `Exporter en STEP`,
      "menu.file.examples": `Exemples`,
      "menu.file.quit": `Quitter`,
      "menu.edit.undo": `Annuler`,
      "menu.edit.redo": `R\xE9tablir`,
      "menu.edit.delete": `Supprimer`,
      "menu.edit.duplicate": `Dupliquer`,
      "menu.edit.select_all": `Tout s\xE9lectionner`,
      "menu.edit.deselect": `D\xE9s\xE9lectionner`,
      "menu.view.toggle_sidebar": `Basculer la barre lat\xE9rale`,
      "menu.view.toggle_chat": `Basculer le chat`,
      "menu.view.camera_iso": `Vue isom\xE9trique`,
      "menu.view.camera_top": `Vue de dessus`,
      "menu.view.camera_front": `Vue de face`,
      "menu.view.camera_right": `Vue de droite`,
      "menu.view.camera_fit": `Ajuster \xE0 l'\xE9cran`,
      "menu.view.wireframe": `Filaire`,
      "menu.view.cycle_theme": `Changer de th\xE8me`,
      "menu.view.input_preferences": `Pr\xE9f\xE9rences de saisie\u2026`,
      "menu.view.ray_tracing": `Lancer de rayons`,
      "menu.view.ray_tracing.off": `D\xE9sactiv\xE9`,
      "menu.view.ray_tracing.draft": `Brouillon`,
      "menu.view.ray_tracing.standard": `Standard`,
      "menu.view.ray_tracing.high": `\xC9lev\xE9`,
      "menu.view.ray_tracing.edges_on": `Ar\xEAtes activ\xE9es`,
      "menu.view.ray_tracing.edges_off": `Ar\xEAtes d\xE9sactiv\xE9es`,
      "menu.tools.palette": `Palette de commandes\u2026`,
      "menu.tools.sketch": `Nouvelle esquisse`,
      "menu.help.about": `\xC0 propos de vcad`,
      "menu.help.docs": `Ouvrir la documentation`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `Cr\xE9er`,
      "toolbar.tab.sketch": `Esquisse`,
      "toolbar.tab.transform": `Transformer`,
      "toolbar.tab.combine": `Combiner`,
      "toolbar.tab.modify": `Modifier`,
      "toolbar.tab.assembly": `Assemblage`,
      "toolbar.tab.simulate": `Simuler`,
      "toolbar.tab.export": `Exporter`,
      "toolbar.tool.box": `Bo\xEEte`,
      "toolbar.tool.cyl": `Cyl`,
      "toolbar.tool.sph": `Sph`,
      "toolbar.tool.cone": `C\xF4ne`,
      "toolbar.tool.sketch": `Esquisse`,
      "toolbar.tool.move": `D\xE9placer`,
      "toolbar.tool.rotate": `Pivoter`,
      "toolbar.tool.scale": `\xC9chelle`,
      "toolbar.tool.union": `Union`,
      "toolbar.tool.diff": `Diff`,
      "toolbar.tool.isect": `Inter`,
      "toolbar.tool.fillet": `Cong\xE9`,
      "toolbar.tool.chamfer": `Chanfrein`,
      "toolbar.tool.shell": `Coque`,
      "toolbar.tool.pattern": `R\xE9p\xE9tition`,
      "toolbar.tool.mirror": `Sym\xE9trie`,
      "toolbar.tool.part": `Pi\xE8ce`,
      "toolbar.tool.instance": `Instance`,
      "toolbar.tool.joint": `Liaison`,
      "toolbar.tool.play": `Lecture`,
      "toolbar.tool.pause": `Pause`,
      "toolbar.tool.step": `Pas`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `Enregistrer`,
      "toolbar.hint.numeric": `\u2190\u2192:ajuster  Entr\xE9e:appliquer  \xC9chap:annuler`,
      "toolbar.hint.text": `Entr\xE9e:appliquer  \xC9chap:annuler`,
      "status.modified": `modifi\xE9`,
      "status.saved": `enregistr\xE9`,
      "status.part": `{count} pi\xE8ce`,
      "status.parts": `{count} pi\xE8ces`,
      "status.sel": `{count} s\xE9l`,
      "status.console_empty": `console vide`,
      "status.ago.now": `\xE0 l'instant`,
      "status.ago.seconds": `{count}s`,
      "status.ago.minutes": `{count}min`,
      "status.ago.hours": `{count}h`,
      "welcome.tagline": `CAO param\xE9trique libre pour tous`,
      "welcome.new_project": `Nouveau projet`,
      "welcome.blank_project": `Projet vierge`,
      "welcome.open_file": `Ouvrir un fichier`,
      "welcome.hint.new": `tutoriel guid\xE9`,
      "welcome.hint.blank": `toile vierge`,
      "welcome.hint.open": `:ouvrir`,
      "welcome.footer": `\u2191\u2193 naviguer  entr\xE9e s\xE9lectionner  \xE9chap fermer`,
      "tree.header": `PI\xC8CES`,
      "tree.empty": `Aucune pi\xE8ce`,
      "desktop.menu.open_recent": `Ouvrir un r\xE9cent\u2026`,
      "desktop.menu.open_cloud": `Ouvrir depuis le cloud\u2026`,
      "desktop.menu.toggle_status_bar": `Basculer la barre d'\xE9tat`,
      "desktop.menu.camera_iso": `Isom\xE9trique`,
      "desktop.menu.camera_fit": `Ajuster \xE0 la s\xE9lection`,
      "desktop.menu.toggle_grid_snap": `Basculer l'aimantation \xE0 la grille`,
      "desktop.menu.slicer": `Trancheur`,
      "desktop.menu.cam": `FAO`,
      "desktop.menu.check_for_updates": `Rechercher des mises \xE0 jour\u2026`,
      "desktop.menu.whats_new": `Nouveaut\xE9s`,
      "desktop.menu.documentation": `Documentation`,
      "desktop.menu.camera_top": `Dessus`,
      "desktop.menu.camera_front": `Face`,
      "desktop.menu.camera_right": `Droite`,
      "modal.about.tagline": `CAO param\xE9trique pour tous`,
      "modal.about.action.shape": `Ajouter une forme`,
      "modal.about.action.shape_desc": `Bo\xEEte, cylindre, sph\xE8re`,
      "modal.about.action.sketch": `D\xE9marrer une esquisse`,
      "modal.about.action.sketch_desc": `Dessiner en 2D \u2192 extruder en 3D`,
      "modal.about.action.open": `Ouvrir un fichier`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `Tutoriel rapide`,
      "modal.about.action.tutorial_desc": `Apprendre les bases`,
      "modal.about.keyhint.palette": `Chat et commandes`,
      "modal.about.keyhint.tabs": `Changer d'onglet`,
      "modal.about.keyhint.transform": `D\xE9placer, Pivoter, \xC9chelle`,
      "modal.about.keyhint.boolean": `Op\xE9rations bool\xE9ennes (2 s\xE9lectionn\xE9s)`,
      "modal.about.docs": `Docs`,
      "modal.about.whats_new": `Nouveaut\xE9s`,
      "footer.privacy": `Confidentialit\xE9`,
      "footer.terms": `Conditions`,
      "footer.security": `S\xE9curit\xE9`,
      "tutorial.add_cube.instruction": `Ouvrir Cr\xE9er \u2192 cliquer sur Bo\xEEte`,
      "tutorial.add_cube.detail": `Ajoutez votre premi\xE8re forme \xE0 la sc\xE8ne`,
      "tutorial.add_cylinder.instruction": `Ouvrir Cr\xE9er \u2192 ajouter un Cylindre`,
      "tutorial.add_cylinder.detail": `Nous allons le soustraire du cube`,
      "tutorial.position_cylinder.instruction": `D\xE9placer le cylindre vers le haut`,
      "tutorial.position_cylinder.detail": `Faites glisser la fl\xE8che verte du gizmo`,
      "tutorial.subtract.instruction": `Ouvrir Combiner \u2192 cliquer sur Diff\xE9rence`,
      "tutorial.subtract.detail": `S\xE9lectionnez d'abord les deux pi\xE8ces (\u2318-clic ou glisser)`,
      "tutorial.celebrate.instruction": `Vous avez cr\xE9\xE9 votre premi\xE8re pi\xE8ce !`,
      "tutorial.celebrate.detail": `Vous avez appris le flux CSG`,
      "tutorial.skip": `Passer le tutoriel`,
      "tutorial.start_building": `Commencer \xE0 cr\xE9er`,
      "tutorial.skip_short": `passer le tutoriel`,
      "error.boundary.title": `une erreur s'est produite`,
      "error.boundary.unexpected": `Une erreur inattendue s'est produite`,
      "error.boundary.reload": `Recharger l'application`,
      "error.boundary.cache_hint": `Si cela persiste, essayez de vider le cache du navigateur.`,
      "error.engine": `erreur du moteur`,
      "status.offline": `Hors ligne`,
      "status.console_open": `Ouvrir la console (~)`,
      "status.console_empty_title": `Console (vide)`,
      "status.cursor_pos": `Position du curseur sur le plan (mm)`,
      "status.language": `Langue`,
      "banner.readonly.viewing": `Affichage de {name} (lecture seule)`,
      "banner.readonly.fork": `Se connecter pour bifurquer`,
      "modal.fork.title": `Ce document est en lecture seule`,
      "modal.fork.description": `Connectez-vous pour cr\xE9er votre propre copie modifiable. Vos modifications n'affecteront pas l'original \u2014 vous obtiendrez une nouvelle bifurcation dans votre compte.`,
      "modal.fork.keep_viewing": `Continuer \xE0 voir`,
      "modal.fork.signin": `Se connecter pour bifurquer`,
      "palette.placeholder": `Tapez une commande ou d\xE9crivez ce que vous voulez cr\xE9er...`,
      "palette.title": `Palette de commandes`,
      "palette.generating": `G\xE9n\xE9ration en cours...`,
      "palette.section.get_started": `Commencer`,
      "palette.section.examples": `Exemples`,
      "palette.section.ask_ai_inline": `Ou d\xE9crivez ce que vous voulez cr\xE9er`,
      "palette.section.ask_ai": `Demander \xE0 l'IA`,
      "palette.action.new_project": `Nouveau projet`,
      "palette.action.new_project_hint": `tutoriel guid\xE9`,
      "palette.action.blank_project": `Projet vierge`,
      "palette.action.blank_project_hint": `passer le tutoriel`,
      "palette.action.open_file": `Ouvrir un fichier`,
      "palette.generate_label": `G\xE9n\xE9rer :`,
      "palette.kbd_server": `serveur`,
      "palette.empty": `Aucune commande trouv\xE9e`,
      "palette.failed_to_load": `Impossible de charger le fichier`,
      "panel.section.material": `Mat\xE9riau`,
      "panel.section.position": `Position`,
      "panel.section.rotation": `Rotation`,
      "panel.section.scale": `\xC9chelle`,
      "panel.section.dimensions": `Dimensions`,
      "panel.section.operation": `Op\xE9ration`,
      "panel.section.profile": `Profil`,
      "panel.section.path": `Chemin`,
      "panel.section.depth": `Profondeur`,
      "panel.section.angle": `Angle`,
      "panel.section.axis": `Axe`,
      "panel.section.radius": `Rayon`,
      "panel.section.distance": `Distance`,
      "panel.section.thickness": `\xC9paisseur`,
      "panel.section.direction": `Direction`,
      "panel.section.count": `Nombre`,
      "panel.section.spacing": `Espacement`,
      "panel.section.profiles": `Profils`,
      "panel.section.closed": `Ferm\xE9`,
      "panel.section.text": `Texte`,
      "panel.section.size": `Taille`,
      "panel.section.font": `Police`,
      "panel.section.taper": `Conique`,
      "panel.section.twist": `Torsion`,
      "panel.section.orientation": `Orientation`,
      "panel.section.helix": `Chemin h\xE9lico\xEFdal`,
      "panel.section.quality": `Qualit\xE9`,
      "panel.section.axis_origin": `Origine de l'axe`,
      "panel.section.axis_dir": `Direction de l'axe`,
      "panel.section.part_def": `D\xE9finition de pi\xE8ce`,
      "panel.section.connection": `Connexion`,
      "panel.section.state": `\xC9tat`,
      "panel.section.type": `Type`,
      "panel.section.mirror": `Sym\xE9trie`,
      "panel.tooltip.material": `Assigner un mat\xE9riau \xE0 cette pi\xE8ce`,
      "panel.tooltip.material_instance": `Assigner un mat\xE9riau \xE0 cette instance`,
      "panel.tooltip.position": `D\xE9calage par rapport \xE0 l'origine (mm)`,
      "panel.tooltip.position_world": `Position dans l'espace global (mm)`,
      "panel.tooltip.rotation": `Angles de rotation autour de chaque axe (degr\xE9s)`,
      "panel.tooltip.rotation_world": `Angles de rotation dans l'espace global (degr\xE9s)`,
      "panel.tooltip.scale": `Facteur d'\xE9chelle le long de chaque axe`,
      "panel.tooltip.dimensions_box": `Largeur, hauteur et profondeur de la bo\xEEte (mm)`,
      "panel.tooltip.dimensions_cylinder": `Rayon et hauteur du cylindre (mm)`,
      "panel.tooltip.dimensions_sphere": `Rayon de la sph\xE8re (mm)`,
      "panel.tooltip.fillet_radius": `Rayon du cong\xE9 (mm)`,
      "panel.tooltip.chamfer_distance": `Distance du chanfrein (mm)`,
      "panel.tooltip.shell_thickness": `\xC9paisseur de paroi (mm)`,
      "panel.tooltip.mirror_readonly": `Modification non encore prise en charge`,
      "panel.back_to_tree": `Retour \xE0 l'arbre`,
      "panel.parts_selected": `{count} pi\xE8ces s\xE9lectionn\xE9es`,
      "panel.select_single": `S\xE9lectionnez une seule pi\xE8ce pour modifier les propri\xE9t\xE9s`,
      "panel.edit_circuit": `Modifier le circuit`,
      "panel.open_embroidery": `Ouvrir le panneau de broderie`,
      "panel.parent": `Parent :`,
      "panel.child": `Enfant :`,
      "panel.ground": `B\xE2ti`,
      "panel.mirror_readonly": `Les param\xE8tres du plan de sym\xE9trie sont en lecture seule`,
      "bool.union": `Union`,
      "bool.difference": `Diff\xE9rence`,
      "bool.intersection": `Intersection`,
      "joint.fixed": `Fixe`,
      "joint.revolute": `Pivot`,
      "joint.slider": `Glissi\xE8re`,
      "joint.cylindrical": `Cylindrique`,
      "joint.ball": `Rotule`,
      "joint.free": `Libre`,
      "joint.suffix": `Liaison`,
      "tree.scene": `Sc\xE8ne`,
      "tree.parameters": `Param\xE8tres`,
      "tree.scene_tooltip": `Inspecter la sc\xE8ne (arri\xE8re-plan, environnement, lumi\xE8res)`,
      "tree.parameters_tooltip": `Modifier les param\xE8tres du document (piloter les champs li\xE9s via des expressions)`,
      "tree.sketch.label": `Esquisse`,
      "tree.sketch.discard_title": `Annuler l'esquisse ?`,
      "tree.sketch.discard_msg": `Vous avez des \xE9l\xE9ments g\xE9om\xE9triques non enregistr\xE9s.`,
      "tree.sketch.discard": `Annuler`,
      "tree.sketch.keep_editing": `Continuer \xE0 modifier`,
      "tree.sketch.cancelled": `Esquisse annul\xE9e`,
      "tree.sketch.discarded": `Esquisse abandonn\xE9e`,
      "tree.sketch.entities": `Entit\xE9s ({count})`,
      "tree.sketch.constraints": `Contraintes ({count})`,
      "tree.sketch.profiles": `Profils ({count})`,
      "tree.sketch.profile": `Profil {n}`,
      "tree.sketch.finish": `Terminer`,
      "tree.sketch.finish_tooltip": `Terminer l'esquisse`,
      "tree.sketch.apply_tooltip": `Appliquer {label}`,
      "tree.sketch.cancel_tooltip": `Annuler l'esquisse (\xC9chap)`,
      "tree.sketch.delete_constraint": `Supprimer la contrainte`
    },
    it: {
      "cmd.add_box.label": `Aggiungi Parallelepipedo`,
      "cmd.cube.label": `Aggiungi Cubo`,
      "cmd.cylinder.label": `Aggiungi Cilindro`,
      "cmd.sphere.label": `Aggiungi Sfera`,
      "cmd.cone.label": `Aggiungi Cono`,
      "cmd.translate.label": `Sposta`,
      "cmd.rotate.label": `Ruota`,
      "cmd.scale.label": `Scala`,
      "cmd.move_mode.label": `Modalit\xE0 Sposta`,
      "cmd.rotate_mode.label": `Modalit\xE0 Ruota`,
      "cmd.scale_mode.label": `Modalit\xE0 Scala`,
      "cmd.mirror.label": `Specchia`,
      "cmd.union.label": `Unione`,
      "cmd.difference.label": `Differenza`,
      "cmd.intersection.label": `Intersezione`,
      "cmd.fillet.label": `Raccordo`,
      "cmd.chamfer.label": `Smusso`,
      "cmd.shell.label": `Svuotamento`,
      "cmd.stitch.label": `Cuci`,
      "cmd.linear_pattern.label": `Serie Lineare`,
      "cmd.circular_pattern.label": `Serie Circolare`,
      "cmd.delete.label": `Elimina`,
      "cmd.delete_selected.label": `Elimina Selezionati`,
      "cmd.undo.label": `Annulla`,
      "cmd.redo.label": `Ripeti`,
      "cmd.copy.label": `Copia`,
      "cmd.paste.label": `Incolla`,
      "cmd.duplicate.label": `Duplica`,
      "cmd.select_all.label": `Seleziona Tutto`,
      "cmd.deselect.label": `Deseleziona`,
      "cmd.deselect_all.label": `Deseleziona Tutto`,
      "cmd.new.label": `Nuovo Documento`,
      "cmd.new_short.label": `Nuovo`,
      "cmd.open.label": `Apri`,
      "cmd.open_dots.label": `Apri\u2026`,
      "cmd.open_cloud.label": `Apri dal Cloud\u2026`,
      "cmd.save.label": `Salva`,
      "cmd.export_stl.label": `Esporta STL`,
      "cmd.export_glb.label": `Esporta GLB`,
      "cmd.export_step.label": `Esporta STEP`,
      "cmd.quit.label": `Esci`,
      "cmd.toggle_sidebar.label": `Mostra/Nascondi Barra Laterale`,
      "cmd.toggle_feature_tree.label": `Mostra/Nascondi Albero delle Funzioni`,
      "cmd.toggle_chat.label": `Mostra/Nascondi Chat`,
      "cmd.toggle_status_bar.label": `Mostra/Nascondi Barra di Stato`,
      "cmd.toggle_devtools.label": `Mostra/Nascondi Strumenti Sviluppatore`,
      "cmd.toggle_wireframe.label": `Mostra/Nascondi Wireframe`,
      "cmd.toggle_grid_snap.label": `Attiva/Disattiva Snap alla Griglia`,
      "cmd.cycle_theme.label": `Cambia Tema`,
      "cmd.camera_iso.label": `Vista Isometrica`,
      "cmd.camera_top.label": `Vista Dall'alto`,
      "cmd.camera_front.label": `Vista Frontale`,
      "cmd.camera_right.label": `Vista Destra`,
      "cmd.camera_fit.label": `Adatta allo Schermo`,
      "cmd.fit_to_view.label": `Adatta alla Vista`,
      "cmd.palette.label": `Tavolozza Comandi`,
      "cmd.palette_dots.label": `Tavolozza Comandi\u2026`,
      "cmd.sketch.label": `Nuovo Schizzo`,
      "cmd.sketch_dots.label": `Nuovo Schizzo\u2026`,
      "cmd.slicer.label": `Stampa (Slicer)\u2026`,
      "cmd.cam.label": `CAM (Percorso Utensile)\u2026`,
      "cmd.about.label": `Informazioni su vcad`,
      "cmd.whats_new.label": `Novit\xE0`,
      "cmd.open_docs.label": `Apri Documentazione`,
      "cmd.documentation.label": `Documentazione`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `Crea Definizione Parte`,
      "cmd.insert_instance.label": `Inserisci Istanza`,
      "cmd.add_fixed_joint.label": `Aggiungi Giunto Fisso`,
      "cmd.add_revolute_joint.label": `Aggiungi Giunto Rotoidale`,
      "cmd.add_slider_joint.label": `Aggiungi Giunto Prismatico`,
      "cmd.set_ground.label": `Imposta come Base`,
      "cmd.enter_electronics.label": `Apri Elettronica`,
      "cmd.exit_electronics.label": `Chiudi Elettronica`,
      "menu.file": `File`,
      "menu.edit": `Modifica`,
      "menu.view": `Visualizza`,
      "menu.tools": `Strumenti`,
      "menu.help": `Aiuto`,
      "menu.file.new": `Nuovo`,
      "menu.file.open": `Apri\u2026`,
      "menu.file.save": `Salva`,
      "menu.file.share_link": `Condividi link\u2026`,
      "menu.file.version_history": `Cronologia versioni\u2026`,
      "menu.file.export": `Esporta`,
      "menu.file.export_stl": `Esporta STL`,
      "menu.file.export_glb": `Esporta GLB`,
      "menu.file.export_step": `Esporta STEP`,
      "menu.file.examples": `Esempi`,
      "menu.file.quit": `Esci`,
      "menu.edit.undo": `Annulla`,
      "menu.edit.redo": `Ripeti`,
      "menu.edit.delete": `Elimina`,
      "menu.edit.duplicate": `Duplica`,
      "menu.edit.select_all": `Seleziona Tutto`,
      "menu.edit.deselect": `Deseleziona`,
      "menu.view.toggle_sidebar": `Mostra/Nascondi Barra Laterale`,
      "menu.view.toggle_chat": `Mostra/Nascondi Chat`,
      "menu.view.camera_iso": `Vista Isometrica`,
      "menu.view.camera_top": `Vista Dall'alto`,
      "menu.view.camera_front": `Vista Frontale`,
      "menu.view.camera_right": `Vista Destra`,
      "menu.view.camera_fit": `Adatta allo Schermo`,
      "menu.view.wireframe": `Wireframe`,
      "menu.view.cycle_theme": `Cambia Tema`,
      "menu.view.input_preferences": `Preferenze di Input\u2026`,
      "menu.view.ray_tracing": `Ray Tracing`,
      "menu.view.ray_tracing.off": `Disattivato`,
      "menu.view.ray_tracing.draft": `Bozza`,
      "menu.view.ray_tracing.standard": `Standard`,
      "menu.view.ray_tracing.high": `Alto`,
      "menu.view.ray_tracing.edges_on": `Spigoli Attivi`,
      "menu.view.ray_tracing.edges_off": `Spigoli Disattivi`,
      "menu.tools.palette": `Tavolozza Comandi\u2026`,
      "menu.tools.sketch": `Nuovo Schizzo`,
      "menu.help.about": `Informazioni su vcad`,
      "menu.help.docs": `Apri Documentazione`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `Crea`,
      "toolbar.tab.sketch": `Schizzo`,
      "toolbar.tab.transform": `Trasforma`,
      "toolbar.tab.combine": `Combina`,
      "toolbar.tab.modify": `Modifica`,
      "toolbar.tab.assembly": `Assieme`,
      "toolbar.tab.simulate": `Simula`,
      "toolbar.tab.export": `Esporta`,
      "toolbar.tool.box": `Parall.`,
      "toolbar.tool.cyl": `Cil`,
      "toolbar.tool.sph": `Sfera`,
      "toolbar.tool.cone": `Cono`,
      "toolbar.tool.sketch": `Schizzo`,
      "toolbar.tool.move": `Sposta`,
      "toolbar.tool.rotate": `Ruota`,
      "toolbar.tool.scale": `Scala`,
      "toolbar.tool.union": `Unione`,
      "toolbar.tool.diff": `Diff`,
      "toolbar.tool.isect": `Inters`,
      "toolbar.tool.fillet": `Raccordo`,
      "toolbar.tool.chamfer": `Smusso`,
      "toolbar.tool.shell": `Svuota`,
      "toolbar.tool.pattern": `Serie`,
      "toolbar.tool.mirror": `Specchia`,
      "toolbar.tool.part": `Parte`,
      "toolbar.tool.instance": `Istanza`,
      "toolbar.tool.joint": `Giunto`,
      "toolbar.tool.play": `Avvia`,
      "toolbar.tool.pause": `Pausa`,
      "toolbar.tool.step": `Passo`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `Salva`,
      "toolbar.hint.numeric": `\u2190\u2192:scorri  Invio:applica  Esc:annulla`,
      "toolbar.hint.text": `Invio:applica  Esc:annulla`,
      "status.modified": `modificato`,
      "status.saved": `salvato`,
      "status.part": `{count} parte`,
      "status.parts": `{count} parti`,
      "status.sel": `{count} sel`,
      "status.console_empty": `console vuota`,
      "status.ago.now": `ora`,
      "status.ago.seconds": `{count}s`,
      "status.ago.minutes": `{count}m`,
      "status.ago.hours": `{count}h`,
      "welcome.tagline": `cad parametrico gratuito per tutti`,
      "welcome.new_project": `Nuovo Progetto`,
      "welcome.blank_project": `Progetto Vuoto`,
      "welcome.open_file": `Apri File`,
      "welcome.hint.new": `tutorial guidato`,
      "welcome.hint.blank": `tela vuota`,
      "welcome.hint.open": `:apri`,
      "welcome.footer": `\u2191\u2193 naviga  invio seleziona  esc chiudi`,
      "tree.header": `PARTI`,
      "tree.empty": `Nessuna parte`,
      "desktop.menu.open_recent": `Apri Recenti\u2026`,
      "desktop.menu.open_cloud": `Apri dal Cloud\u2026`,
      "desktop.menu.toggle_status_bar": `Mostra/Nascondi Barra di Stato`,
      "desktop.menu.camera_iso": `Isometrica`,
      "desktop.menu.camera_fit": `Adatta alla Selezione`,
      "desktop.menu.toggle_grid_snap": `Attiva/Disattiva Snap alla Griglia`,
      "desktop.menu.slicer": `Slicer`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `Verifica Aggiornamenti\u2026`,
      "desktop.menu.whats_new": `Novit\xE0`,
      "desktop.menu.documentation": `Documentazione`,
      "desktop.menu.camera_top": `Alto`,
      "desktop.menu.camera_front": `Fronte`,
      "desktop.menu.camera_right": `Destra`,
      "modal.about.tagline": `CAD parametrico per tutti`,
      "modal.about.action.shape": `Aggiungi una forma`,
      "modal.about.action.shape_desc": `Parallelepipedo, cilindro, sfera`,
      "modal.about.action.sketch": `Inizia uno schizzo`,
      "modal.about.action.sketch_desc": `Disegna 2D \u2192 estrudi in 3D`,
      "modal.about.action.open": `Apri file`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `Tutorial rapido`,
      "modal.about.action.tutorial_desc": `Impara le basi`,
      "modal.about.keyhint.palette": `Chat e comandi`,
      "modal.about.keyhint.tabs": `Cambia schede della barra`,
      "modal.about.keyhint.transform": `Sposta, Ruota, Scala`,
      "modal.about.keyhint.boolean": `Operazioni booleane (2 selezionati)`,
      "modal.about.docs": `Documentazione`,
      "modal.about.whats_new": `Novit\xE0`,
      "footer.privacy": `Privacy`,
      "footer.terms": `Termini`,
      "footer.security": `Sicurezza`,
      "tutorial.add_cube.instruction": `Apri Crea \u2192 fai clic su Parallelepipedo`,
      "tutorial.add_cube.detail": `Aggiungi la tua prima forma alla scena`,
      "tutorial.add_cylinder.instruction": `Apri Crea \u2192 aggiungi un Cilindro`,
      "tutorial.add_cylinder.detail": `Lo sottrarremo dal cubo`,
      "tutorial.position_cylinder.instruction": `Sposta il cilindro verso l'alto`,
      "tutorial.position_cylinder.detail": `Trascina la freccia verde sul gizmo`,
      "tutorial.subtract.instruction": `Apri Combina \u2192 fai clic su Differenza`,
      "tutorial.subtract.detail": `Seleziona prima entrambe le parti (\u2318-clic o trascina)`,
      "tutorial.celebrate.instruction": `Hai creato la tua prima parte!`,
      "tutorial.celebrate.detail": `Hai imparato il flusso di lavoro CSG`,
      "tutorial.skip": `Salta tutorial`,
      "tutorial.start_building": `Inizia a Costruire`,
      "tutorial.skip_short": `salta tutorial`,
      "error.boundary.title": `qualcosa \xE8 andato storto`,
      "error.boundary.unexpected": `Si \xE8 verificato un errore imprevisto`,
      "error.boundary.reload": `Ricarica App`,
      "error.boundary.cache_hint": `Se il problema persiste, prova a svuotare la cache del browser.`,
      "error.engine": `errore del motore`,
      "status.offline": `Offline`,
      "status.console_open": `Apri console (~)`,
      "status.console_empty_title": `Console (vuota)`,
      "status.cursor_pos": `Posizione cursore sul piano di terra (mm)`,
      "status.language": `Lingua`,
      "banner.readonly.viewing": `Visualizzazione di {name} (sola lettura)`,
      "banner.readonly.fork": `Accedi per duplicare`,
      "modal.fork.title": `Questo documento \xE8 in sola lettura`,
      "modal.fork.description": `Accedi per creare la tua copia modificabile. Le tue modifiche non toccheranno l'originale \u2014 otterrai un nuovo fork nel tuo account.`,
      "modal.fork.keep_viewing": `Continua a visualizzare`,
      "modal.fork.signin": `Accedi per duplicare`,
      "palette.placeholder": `Digita un comando o descrivi cosa creare...`,
      "palette.title": `Tavolozza Comandi`,
      "palette.generating": `Generazione in corso...`,
      "palette.section.get_started": `Inizia`,
      "palette.section.examples": `Esempi`,
      "palette.section.ask_ai_inline": `Oppure descrivi cosa creare`,
      "palette.section.ask_ai": `Chiedi all'IA`,
      "palette.action.new_project": `Nuovo Progetto`,
      "palette.action.new_project_hint": `tutorial guidato`,
      "palette.action.blank_project": `Progetto Vuoto`,
      "palette.action.blank_project_hint": `salta tutorial`,
      "palette.action.open_file": `Apri File`,
      "palette.generate_label": `Genera:`,
      "palette.kbd_server": `server`,
      "palette.empty": `Nessun comando trovato`,
      "palette.failed_to_load": `Impossibile caricare il file`,
      "panel.section.material": `Materiale`,
      "panel.section.position": `Posizione`,
      "panel.section.rotation": `Rotazione`,
      "panel.section.scale": `Scala`,
      "panel.section.dimensions": `Dimensioni`,
      "panel.section.operation": `Operazione`,
      "panel.section.profile": `Profilo`,
      "panel.section.path": `Percorso`,
      "panel.section.depth": `Profondit\xE0`,
      "panel.section.angle": `Angolo`,
      "panel.section.axis": `Asse`,
      "panel.section.radius": `Raggio`,
      "panel.section.distance": `Distanza`,
      "panel.section.thickness": `Spessore`,
      "panel.section.direction": `Direzione`,
      "panel.section.count": `Quantit\xE0`,
      "panel.section.spacing": `Spaziatura`,
      "panel.section.profiles": `Profili`,
      "panel.section.closed": `Chiuso`,
      "panel.section.text": `Testo`,
      "panel.section.size": `Dimensione`,
      "panel.section.font": `Carattere`,
      "panel.section.taper": `Rastremazione`,
      "panel.section.twist": `Torsione`,
      "panel.section.orientation": `Orientamento`,
      "panel.section.helix": `Percorso Elicoidale`,
      "panel.section.quality": `Qualit\xE0`,
      "panel.section.axis_origin": `Origine Asse`,
      "panel.section.axis_dir": `Direzione Asse`,
      "panel.section.part_def": `Definizione Parte`,
      "panel.section.connection": `Connessione`,
      "panel.section.state": `Stato`,
      "panel.section.type": `Tipo`,
      "panel.section.mirror": `Specchio`,
      "panel.tooltip.material": `Assegna un materiale a questa parte`,
      "panel.tooltip.material_instance": `Assegna un materiale a questa istanza`,
      "panel.tooltip.position": `Offset di posizione dall'origine (mm)`,
      "panel.tooltip.position_world": `Posizione nello spazio globale (mm)`,
      "panel.tooltip.rotation": `Angoli di rotazione attorno a ciascun asse (gradi)`,
      "panel.tooltip.rotation_world": `Angoli di rotazione nello spazio globale (gradi)`,
      "panel.tooltip.scale": `Fattore di scala lungo ciascun asse`,
      "panel.tooltip.dimensions_box": `Larghezza, altezza e profondit\xE0 del parallelepipedo (mm)`,
      "panel.tooltip.dimensions_cylinder": `Raggio e altezza del cilindro (mm)`,
      "panel.tooltip.dimensions_sphere": `Raggio della sfera (mm)`,
      "panel.tooltip.fillet_radius": `Raggio del raccordo (mm)`,
      "panel.tooltip.chamfer_distance": `Distanza dello smusso (mm)`,
      "panel.tooltip.shell_thickness": `Spessore della parete (mm)`,
      "panel.tooltip.mirror_readonly": `Modifica non ancora supportata`,
      "panel.back_to_tree": `Torna all'albero`,
      "panel.parts_selected": `{count} parti selezionate`,
      "panel.select_single": `Seleziona una singola parte per modificarne le propriet\xE0`,
      "panel.edit_circuit": `Modifica Circuito`,
      "panel.open_embroidery": `Apri Pannello Ricamo`,
      "panel.parent": `Genitore:`,
      "panel.child": `Figlio:`,
      "panel.ground": `Base`,
      "panel.mirror_readonly": `I parametri del piano di simmetria sono in sola lettura`,
      "bool.union": `Unione`,
      "bool.difference": `Differenza`,
      "bool.intersection": `Intersezione`,
      "joint.fixed": `Fisso`,
      "joint.revolute": `Rotoidale`,
      "joint.slider": `Prismatico`,
      "joint.cylindrical": `Cilindrico`,
      "joint.ball": `Sferico`,
      "joint.free": `Libero`,
      "joint.suffix": `Giunto`,
      "tree.scene": `Scena`,
      "tree.parameters": `Parametri`,
      "tree.scene_tooltip": `Ispeziona scena (sfondo, ambiente, luci)`,
      "tree.parameters_tooltip": `Modifica parametri del documento (controlla campi associati tramite espressioni)`,
      "tree.sketch.label": `Schizzo`,
      "tree.sketch.discard_title": `Scartare lo schizzo?`,
      "tree.sketch.discard_msg": `Hai geometria non salvata.`,
      "tree.sketch.discard": `Scarta`,
      "tree.sketch.keep_editing": `Continua a modificare`,
      "tree.sketch.cancelled": `Schizzo annullato`,
      "tree.sketch.discarded": `Schizzo scartato`,
      "tree.sketch.entities": `Entit\xE0 ({count})`,
      "tree.sketch.constraints": `Vincoli ({count})`,
      "tree.sketch.profiles": `Profili ({count})`,
      "tree.sketch.profile": `Profilo {n}`,
      "tree.sketch.finish": `Termina`,
      "tree.sketch.finish_tooltip": `Termina schizzo`,
      "tree.sketch.apply_tooltip": `Applica {label}`,
      "tree.sketch.cancel_tooltip": `Annulla schizzo (Esc)`,
      "tree.sketch.delete_constraint": `Elimina vincolo`
    },
    ja: {
      "cmd.add_box.label": `\u30DC\u30C3\u30AF\u30B9\u3092\u8FFD\u52A0`,
      "cmd.cube.label": `\u30AD\u30E5\u30FC\u30D6\u3092\u8FFD\u52A0`,
      "cmd.cylinder.label": `\u5186\u67F1\u3092\u8FFD\u52A0`,
      "cmd.sphere.label": `\u7403\u3092\u8FFD\u52A0`,
      "cmd.cone.label": `\u5186\u9310\u3092\u8FFD\u52A0`,
      "cmd.translate.label": `\u79FB\u52D5`,
      "cmd.rotate.label": `\u56DE\u8EE2`,
      "cmd.scale.label": `\u62E1\u5927\u7E2E\u5C0F`,
      "cmd.move_mode.label": `\u79FB\u52D5\u30E2\u30FC\u30C9`,
      "cmd.rotate_mode.label": `\u56DE\u8EE2\u30E2\u30FC\u30C9`,
      "cmd.scale_mode.label": `\u62E1\u5927\u7E2E\u5C0F\u30E2\u30FC\u30C9`,
      "cmd.mirror.label": `\u30DF\u30E9\u30FC`,
      "cmd.union.label": `\u548C`,
      "cmd.difference.label": `\u5DEE`,
      "cmd.intersection.label": `\u7A4D`,
      "cmd.fillet.label": `\u30D5\u30A3\u30EC\u30C3\u30C8`,
      "cmd.chamfer.label": `\u9762\u53D6\u308A`,
      "cmd.shell.label": `\u30B7\u30A7\u30EB`,
      "cmd.stitch.label": `\u30B9\u30C6\u30C3\u30C1`,
      "cmd.linear_pattern.label": `\u76F4\u7DDA\u30D1\u30BF\u30FC\u30F3`,
      "cmd.circular_pattern.label": `\u5186\u5F62\u30D1\u30BF\u30FC\u30F3`,
      "cmd.delete.label": `\u524A\u9664`,
      "cmd.delete_selected.label": `\u9078\u629E\u3092\u524A\u9664`,
      "cmd.undo.label": `\u5143\u306B\u623B\u3059`,
      "cmd.redo.label": `\u3084\u308A\u76F4\u3057`,
      "cmd.copy.label": `\u30B3\u30D4\u30FC`,
      "cmd.paste.label": `\u8CBC\u308A\u4ED8\u3051`,
      "cmd.duplicate.label": `\u8907\u88FD`,
      "cmd.select_all.label": `\u3059\u3079\u3066\u9078\u629E`,
      "cmd.deselect.label": `\u9078\u629E\u89E3\u9664`,
      "cmd.deselect_all.label": `\u3059\u3079\u3066\u9078\u629E\u89E3\u9664`,
      "cmd.new.label": `\u65B0\u898F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8`,
      "cmd.new_short.label": `\u65B0\u898F`,
      "cmd.open.label": `\u958B\u304F`,
      "cmd.open_dots.label": `\u958B\u304F\u2026`,
      "cmd.open_cloud.label": `\u30AF\u30E9\u30A6\u30C9\u304B\u3089\u958B\u304F\u2026`,
      "cmd.save.label": `\u4FDD\u5B58`,
      "cmd.export_stl.label": `STL\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8`,
      "cmd.export_glb.label": `GLB\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8`,
      "cmd.export_step.label": `STEP\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8`,
      "cmd.quit.label": `\u7D42\u4E86`,
      "cmd.toggle_sidebar.label": `\u30B5\u30A4\u30C9\u30D0\u30FC\u5207\u66FF`,
      "cmd.toggle_feature_tree.label": `\u30D5\u30A3\u30FC\u30C1\u30E3\u30FC\u30C4\u30EA\u30FC\u5207\u66FF`,
      "cmd.toggle_chat.label": `\u30C1\u30E3\u30C3\u30C8\u5207\u66FF`,
      "cmd.toggle_status_bar.label": `\u30B9\u30C6\u30FC\u30BF\u30B9\u30D0\u30FC\u5207\u66FF`,
      "cmd.toggle_devtools.label": `\u958B\u767A\u8005\u30C4\u30FC\u30EB\u5207\u66FF`,
      "cmd.toggle_wireframe.label": `\u30EF\u30A4\u30E4\u30FC\u30D5\u30EC\u30FC\u30E0\u5207\u66FF`,
      "cmd.toggle_grid_snap.label": `\u30B0\u30EA\u30C3\u30C9\u30B9\u30CA\u30C3\u30D7\u5207\u66FF`,
      "cmd.cycle_theme.label": `\u30C6\u30FC\u30DE\u5207\u66FF`,
      "cmd.camera_iso.label": `\u30A2\u30A4\u30BD\u30E1\u30C8\u30EA\u30C3\u30AF\u30D3\u30E5\u30FC`,
      "cmd.camera_top.label": `\u4E0A\u9762\u30D3\u30E5\u30FC`,
      "cmd.camera_front.label": `\u6B63\u9762\u30D3\u30E5\u30FC`,
      "cmd.camera_right.label": `\u53F3\u9762\u30D3\u30E5\u30FC`,
      "cmd.camera_fit.label": `\u753B\u9762\u306B\u5408\u308F\u305B\u308B`,
      "cmd.fit_to_view.label": `\u30D3\u30E5\u30FC\u306B\u5408\u308F\u305B\u308B`,
      "cmd.palette.label": `\u30B3\u30DE\u30F3\u30C9\u30D1\u30EC\u30C3\u30C8`,
      "cmd.palette_dots.label": `\u30B3\u30DE\u30F3\u30C9\u30D1\u30EC\u30C3\u30C8\u2026`,
      "cmd.sketch.label": `\u65B0\u898F\u30B9\u30B1\u30C3\u30C1`,
      "cmd.sketch_dots.label": `\u65B0\u898F\u30B9\u30B1\u30C3\u30C1\u2026`,
      "cmd.slicer.label": `\u5370\u5237 (\u30B9\u30E9\u30A4\u30B5\u30FC)\u2026`,
      "cmd.cam.label": `CAM (\u30C4\u30FC\u30EB\u30D1\u30B9)\u2026`,
      "cmd.about.label": `vcad \u306B\u3064\u3044\u3066`,
      "cmd.whats_new.label": `\u65B0\u7740\u60C5\u5831`,
      "cmd.open_docs.label": `\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u304F`,
      "cmd.documentation.label": `\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `\u30D1\u30FC\u30C4\u5B9A\u7FA9\u3092\u4F5C\u6210`,
      "cmd.insert_instance.label": `\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u633F\u5165`,
      "cmd.add_fixed_joint.label": `\u56FA\u5B9A\u30B8\u30E7\u30A4\u30F3\u30C8\u3092\u8FFD\u52A0`,
      "cmd.add_revolute_joint.label": `\u56DE\u8EE2\u30B8\u30E7\u30A4\u30F3\u30C8\u3092\u8FFD\u52A0`,
      "cmd.add_slider_joint.label": `\u30B9\u30E9\u30A4\u30C0\u30FC\u30B8\u30E7\u30A4\u30F3\u30C8\u3092\u8FFD\u52A0`,
      "cmd.set_ground.label": `\u30B0\u30E9\u30A6\u30F3\u30C9\u306B\u8A2D\u5B9A`,
      "cmd.enter_electronics.label": `\u30A8\u30EC\u30AF\u30C8\u30ED\u30CB\u30AF\u30B9\u3092\u958B\u304F`,
      "cmd.exit_electronics.label": `\u30A8\u30EC\u30AF\u30C8\u30ED\u30CB\u30AF\u30B9\u3092\u9589\u3058\u308B`,
      "menu.file": `\u30D5\u30A1\u30A4\u30EB`,
      "menu.edit": `\u7DE8\u96C6`,
      "menu.view": `\u8868\u793A`,
      "menu.tools": `\u30C4\u30FC\u30EB`,
      "menu.help": `\u30D8\u30EB\u30D7`,
      "menu.file.new": `\u65B0\u898F`,
      "menu.file.open": `\u958B\u304F\u2026`,
      "menu.file.save": `\u4FDD\u5B58`,
      "menu.file.share_link": `\u30EA\u30F3\u30AF\u3092\u5171\u6709\u2026`,
      "menu.file.version_history": `\u30D0\u30FC\u30B8\u30E7\u30F3\u5C65\u6B74\u2026`,
      "menu.file.export": `\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8`,
      "menu.file.export_stl": `STL\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8`,
      "menu.file.export_glb": `GLB\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8`,
      "menu.file.export_step": `STEP\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8`,
      "menu.file.examples": `\u30B5\u30F3\u30D7\u30EB`,
      "menu.file.quit": `\u7D42\u4E86`,
      "menu.edit.undo": `\u5143\u306B\u623B\u3059`,
      "menu.edit.redo": `\u3084\u308A\u76F4\u3057`,
      "menu.edit.delete": `\u524A\u9664`,
      "menu.edit.duplicate": `\u8907\u88FD`,
      "menu.edit.select_all": `\u3059\u3079\u3066\u9078\u629E`,
      "menu.edit.deselect": `\u9078\u629E\u89E3\u9664`,
      "menu.view.toggle_sidebar": `\u30B5\u30A4\u30C9\u30D0\u30FC\u5207\u66FF`,
      "menu.view.toggle_chat": `\u30C1\u30E3\u30C3\u30C8\u5207\u66FF`,
      "menu.view.camera_iso": `\u30A2\u30A4\u30BD\u30E1\u30C8\u30EA\u30C3\u30AF\u30D3\u30E5\u30FC`,
      "menu.view.camera_top": `\u4E0A\u9762\u30D3\u30E5\u30FC`,
      "menu.view.camera_front": `\u6B63\u9762\u30D3\u30E5\u30FC`,
      "menu.view.camera_right": `\u53F3\u9762\u30D3\u30E5\u30FC`,
      "menu.view.camera_fit": `\u753B\u9762\u306B\u5408\u308F\u305B\u308B`,
      "menu.view.wireframe": `\u30EF\u30A4\u30E4\u30FC\u30D5\u30EC\u30FC\u30E0`,
      "menu.view.cycle_theme": `\u30C6\u30FC\u30DE\u5207\u66FF`,
      "menu.view.input_preferences": `\u5165\u529B\u8A2D\u5B9A\u2026`,
      "menu.view.ray_tracing": `\u30EC\u30A4\u30C8\u30EC\u30FC\u30B7\u30F3\u30B0`,
      "menu.view.ray_tracing.off": `\u30AA\u30D5`,
      "menu.view.ray_tracing.draft": `\u30C9\u30E9\u30D5\u30C8`,
      "menu.view.ray_tracing.standard": `\u6A19\u6E96`,
      "menu.view.ray_tracing.high": `\u9AD8\u54C1\u8CEA`,
      "menu.view.ray_tracing.edges_on": `\u30A8\u30C3\u30B8\u8868\u793A`,
      "menu.view.ray_tracing.edges_off": `\u30A8\u30C3\u30B8\u975E\u8868\u793A`,
      "menu.tools.palette": `\u30B3\u30DE\u30F3\u30C9\u30D1\u30EC\u30C3\u30C8\u2026`,
      "menu.tools.sketch": `\u65B0\u898F\u30B9\u30B1\u30C3\u30C1`,
      "menu.help.about": `vcad \u306B\u3064\u3044\u3066`,
      "menu.help.docs": `\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u304F`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `\u4F5C\u6210`,
      "toolbar.tab.sketch": `\u30B9\u30B1\u30C3\u30C1`,
      "toolbar.tab.transform": `\u5909\u63DB`,
      "toolbar.tab.combine": `\u7D50\u5408`,
      "toolbar.tab.modify": `\u7DE8\u96C6`,
      "toolbar.tab.assembly": `\u30A2\u30BB\u30F3\u30D6\u30EA`,
      "toolbar.tab.simulate": `\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3`,
      "toolbar.tab.export": `\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8`,
      "toolbar.tool.box": `\u30DC\u30C3\u30AF\u30B9`,
      "toolbar.tool.cyl": `\u5186\u67F1`,
      "toolbar.tool.sph": `\u7403`,
      "toolbar.tool.cone": `\u5186\u9310`,
      "toolbar.tool.sketch": `\u30B9\u30B1\u30C3\u30C1`,
      "toolbar.tool.move": `\u79FB\u52D5`,
      "toolbar.tool.rotate": `\u56DE\u8EE2`,
      "toolbar.tool.scale": `\u30B9\u30B1\u30FC\u30EB`,
      "toolbar.tool.union": `\u548C`,
      "toolbar.tool.diff": `\u5DEE`,
      "toolbar.tool.isect": `\u7A4D`,
      "toolbar.tool.fillet": `\u30D5\u30A3\u30EC\u30C3\u30C8`,
      "toolbar.tool.chamfer": `\u9762\u53D6\u308A`,
      "toolbar.tool.shell": `\u30B7\u30A7\u30EB`,
      "toolbar.tool.pattern": `\u30D1\u30BF\u30FC\u30F3`,
      "toolbar.tool.mirror": `\u30DF\u30E9\u30FC`,
      "toolbar.tool.part": `\u30D1\u30FC\u30C4`,
      "toolbar.tool.instance": `\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9`,
      "toolbar.tool.joint": `\u30B8\u30E7\u30A4\u30F3\u30C8`,
      "toolbar.tool.play": `\u518D\u751F`,
      "toolbar.tool.pause": `\u4E00\u6642\u505C\u6B62`,
      "toolbar.tool.step": `\u30B9\u30C6\u30C3\u30D7`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `\u4FDD\u5B58`,
      "toolbar.hint.numeric": `\u2190\u2192:\u5FAE\u8ABF\u6574  Enter:\u9069\u7528  Esc:\u30AD\u30E3\u30F3\u30BB\u30EB`,
      "toolbar.hint.text": `Enter:\u9069\u7528  Esc:\u30AD\u30E3\u30F3\u30BB\u30EB`,
      "status.modified": `\u5909\u66F4\u3042\u308A`,
      "status.saved": `\u4FDD\u5B58\u6E08\u307F`,
      "status.part": `{count} \u30D1\u30FC\u30C4`,
      "status.parts": `{count} \u30D1\u30FC\u30C4`,
      "status.sel": `{count} \u9078\u629E`,
      "status.console_empty": `\u30B3\u30F3\u30BD\u30FC\u30EB\u306F\u7A7A\u3067\u3059`,
      "status.ago.now": `\u4ECA`,
      "status.ago.seconds": `{count}\u79D2`,
      "status.ago.minutes": `{count}\u5206`,
      "status.ago.hours": `{count}\u6642\u9593`,
      "welcome.tagline": `\u307F\u3093\u306A\u306E\u305F\u3081\u306E\u7121\u6599\u30D1\u30E9\u30E1\u30C8\u30EA\u30C3\u30AFCAD`,
      "welcome.new_project": `\u65B0\u898F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8`,
      "welcome.blank_project": `\u7A7A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8`,
      "welcome.open_file": `\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F`,
      "welcome.hint.new": `\u30AC\u30A4\u30C9\u4ED8\u304D\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB`,
      "welcome.hint.blank": `\u7A7A\u306E\u30AD\u30E3\u30F3\u30D0\u30B9`,
      "welcome.hint.open": `:\u958B\u304F`,
      "welcome.footer": `\u2191\u2193 \u79FB\u52D5  enter \u9078\u629E  esc \u9589\u3058\u308B`,
      "tree.header": `\u30D1\u30FC\u30C4`,
      "tree.empty": `\u30D1\u30FC\u30C4\u306A\u3057`,
      "desktop.menu.open_recent": `\u6700\u8FD1\u306E\u9805\u76EE\u3092\u958B\u304F\u2026`,
      "desktop.menu.open_cloud": `\u30AF\u30E9\u30A6\u30C9\u304B\u3089\u958B\u304F\u2026`,
      "desktop.menu.toggle_status_bar": `\u30B9\u30C6\u30FC\u30BF\u30B9\u30D0\u30FC\u5207\u66FF`,
      "desktop.menu.camera_iso": `\u30A2\u30A4\u30BD\u30E1\u30C8\u30EA\u30C3\u30AF`,
      "desktop.menu.camera_fit": `\u9078\u629E\u306B\u5408\u308F\u305B\u308B`,
      "desktop.menu.toggle_grid_snap": `\u30B0\u30EA\u30C3\u30C9\u30B9\u30CA\u30C3\u30D7\u5207\u66FF`,
      "desktop.menu.slicer": `\u30B9\u30E9\u30A4\u30B5\u30FC`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u78BA\u8A8D\u2026`,
      "desktop.menu.whats_new": `\u65B0\u7740\u60C5\u5831`,
      "desktop.menu.documentation": `\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8`,
      "desktop.menu.camera_top": `\u4E0A\u9762`,
      "desktop.menu.camera_front": `\u6B63\u9762`,
      "desktop.menu.camera_right": `\u53F3\u9762`,
      "modal.about.tagline": `\u307F\u3093\u306A\u306E\u305F\u3081\u306E\u30D1\u30E9\u30E1\u30C8\u30EA\u30C3\u30AFCAD`,
      "modal.about.action.shape": `\u5F62\u72B6\u3092\u8FFD\u52A0`,
      "modal.about.action.shape_desc": `\u30DC\u30C3\u30AF\u30B9\u3001\u5186\u67F1\u3001\u7403`,
      "modal.about.action.sketch": `\u30B9\u30B1\u30C3\u30C1\u3092\u958B\u59CB`,
      "modal.about.action.sketch_desc": `2D \u3067\u63CF\u753B \u2192 3D \u306B\u62BC\u3057\u51FA\u3057`,
      "modal.about.action.open": `\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F`,
      "modal.about.action.open_desc": `.vcad\u3001.step\u3001.stl`,
      "modal.about.action.tutorial": `\u30AF\u30A4\u30C3\u30AF\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB`,
      "modal.about.action.tutorial_desc": `\u57FA\u672C\u3092\u5B66\u3076`,
      "modal.about.keyhint.palette": `\u30C1\u30E3\u30C3\u30C8\u3068\u30B3\u30DE\u30F3\u30C9`,
      "modal.about.keyhint.tabs": `\u30C4\u30FC\u30EB\u30D0\u30FC\u30BF\u30D6\u3092\u5207\u66FF`,
      "modal.about.keyhint.transform": `\u79FB\u52D5\u3001\u56DE\u8EE2\u3001\u62E1\u5927\u7E2E\u5C0F`,
      "modal.about.keyhint.boolean": `\u30D6\u30FC\u30EA\u30A2\u30F3\u6F14\u7B97 (2 \u500B\u9078\u629E)`,
      "modal.about.docs": `\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8`,
      "modal.about.whats_new": `\u65B0\u7740\u60C5\u5831`,
      "footer.privacy": `\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC`,
      "footer.terms": `\u5229\u7528\u898F\u7D04`,
      "footer.security": `\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3`,
      "tutorial.add_cube.instruction": `\u4F5C\u6210 \u2192 \u30DC\u30C3\u30AF\u30B9\u3092\u30AF\u30EA\u30C3\u30AF`,
      "tutorial.add_cube.detail": `\u6700\u521D\u306E\u5F62\u72B6\u3092\u30B7\u30FC\u30F3\u306B\u8FFD\u52A0\u3057\u307E\u3059`,
      "tutorial.add_cylinder.instruction": `\u4F5C\u6210 \u2192 \u5186\u67F1\u3092\u8FFD\u52A0`,
      "tutorial.add_cylinder.detail": `\u3053\u308C\u3092\u30AD\u30E5\u30FC\u30D6\u304B\u3089\u5DEE\u3057\u5F15\u304D\u307E\u3059`,
      "tutorial.position_cylinder.instruction": `\u5186\u67F1\u3092\u4E0A\u306B\u79FB\u52D5`,
      "tutorial.position_cylinder.detail": `\u30AE\u30BA\u30E2\u306E\u7DD1\u306E\u77E2\u5370\u3092\u30C9\u30E9\u30C3\u30B0`,
      "tutorial.subtract.instruction": `\u7D50\u5408 \u2192 \u5DEE\u3092\u30AF\u30EA\u30C3\u30AF`,
      "tutorial.subtract.detail": `\u5148\u306B\u4E21\u65B9\u306E\u30D1\u30FC\u30C4\u3092\u9078\u629E (\u2318\u30AF\u30EA\u30C3\u30AF\u307E\u305F\u306F\u30C9\u30E9\u30C3\u30B0)`,
      "tutorial.celebrate.instruction": `\u6700\u521D\u306E\u30D1\u30FC\u30C4\u304C\u5B8C\u6210\u3057\u307E\u3057\u305F!`,
      "tutorial.celebrate.detail": `CSG \u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u5B66\u3073\u307E\u3057\u305F`,
      "tutorial.skip": `\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u30B9\u30AD\u30C3\u30D7`,
      "tutorial.start_building": `\u4F5C\u6210\u3092\u958B\u59CB`,
      "tutorial.skip_short": `\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u30B9\u30AD\u30C3\u30D7`,
      "error.boundary.title": `\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F`,
      "error.boundary.unexpected": `\u4E88\u671F\u3057\u306A\u3044\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F`,
      "error.boundary.reload": `\u30A2\u30D7\u30EA\u3092\u518D\u8AAD\u307F\u8FBC\u307F`,
      "error.boundary.cache_hint": `\u554F\u984C\u304C\u7D9A\u304F\u5834\u5408\u306F\u3001\u30D6\u30E9\u30A6\u30B6\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u30AF\u30EA\u30A2\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002`,
      "error.engine": `\u30A8\u30F3\u30B8\u30F3\u30A8\u30E9\u30FC`,
      "status.offline": `\u30AA\u30D5\u30E9\u30A4\u30F3`,
      "status.console_open": `\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u958B\u304F (~)`,
      "status.console_empty_title": `\u30B3\u30F3\u30BD\u30FC\u30EB (\u7A7A)`,
      "status.cursor_pos": `\u30B0\u30E9\u30A6\u30F3\u30C9\u5E73\u9762\u4E0A\u306E\u30AB\u30FC\u30BD\u30EB\u4F4D\u7F6E (mm)`,
      "status.language": `\u8A00\u8A9E`,
      "banner.readonly.viewing": `{name} \u3092\u8868\u793A\u4E2D (\u8AAD\u307F\u53D6\u308A\u5C02\u7528)`,
      "banner.readonly.fork": `\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u3066\u30D5\u30A9\u30FC\u30AF`,
      "modal.fork.title": `\u3053\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u3067\u3059`,
      "modal.fork.description": `\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u3066\u7DE8\u96C6\u53EF\u80FD\u306A\u30B3\u30D4\u30FC\u3092\u4F5C\u6210\u3057\u307E\u3057\u3087\u3046\u3002\u7DE8\u96C6\u5185\u5BB9\u306F\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093 \u2014 \u304A\u4F7F\u3044\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u65B0\u3057\u3044\u30D5\u30A9\u30FC\u30AF\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002`,
      "modal.fork.keep_viewing": `\u8868\u793A\u3092\u7D9A\u3051\u308B`,
      "modal.fork.signin": `\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u3066\u30D5\u30A9\u30FC\u30AF`,
      "palette.placeholder": `\u30B3\u30DE\u30F3\u30C9\u3092\u5165\u529B\u3059\u308B\u304B\u3001\u4F5C\u6210\u3059\u308B\u5185\u5BB9\u3092\u8A18\u8FF0...`,
      "palette.title": `\u30B3\u30DE\u30F3\u30C9\u30D1\u30EC\u30C3\u30C8`,
      "palette.generating": `\u751F\u6210\u4E2D...`,
      "palette.section.get_started": `\u306F\u3058\u3081\u306B`,
      "palette.section.examples": `\u30B5\u30F3\u30D7\u30EB`,
      "palette.section.ask_ai_inline": `\u307E\u305F\u306F\u4F5C\u6210\u3059\u308B\u5185\u5BB9\u3092\u8A18\u8FF0`,
      "palette.section.ask_ai": `AI \u306B\u8CEA\u554F`,
      "palette.action.new_project": `\u65B0\u898F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8`,
      "palette.action.new_project_hint": `\u30AC\u30A4\u30C9\u4ED8\u304D\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB`,
      "palette.action.blank_project": `\u7A7A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8`,
      "palette.action.blank_project_hint": `\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u30B9\u30AD\u30C3\u30D7`,
      "palette.action.open_file": `\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F`,
      "palette.generate_label": `\u751F\u6210:`,
      "palette.kbd_server": `\u30B5\u30FC\u30D0\u30FC`,
      "palette.empty": `\u30B3\u30DE\u30F3\u30C9\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093`,
      "palette.failed_to_load": `\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F`,
      "panel.section.material": `\u30DE\u30C6\u30EA\u30A2\u30EB`,
      "panel.section.position": `\u4F4D\u7F6E`,
      "panel.section.rotation": `\u56DE\u8EE2`,
      "panel.section.scale": `\u30B9\u30B1\u30FC\u30EB`,
      "panel.section.dimensions": `\u5BF8\u6CD5`,
      "panel.section.operation": `\u64CD\u4F5C`,
      "panel.section.profile": `\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB`,
      "panel.section.path": `\u30D1\u30B9`,
      "panel.section.depth": `\u6DF1\u3055`,
      "panel.section.angle": `\u89D2\u5EA6`,
      "panel.section.axis": `\u8EF8`,
      "panel.section.radius": `\u534A\u5F84`,
      "panel.section.distance": `\u8DDD\u96E2`,
      "panel.section.thickness": `\u539A\u3055`,
      "panel.section.direction": `\u65B9\u5411`,
      "panel.section.count": `\u500B\u6570`,
      "panel.section.spacing": `\u9593\u9694`,
      "panel.section.profiles": `\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB`,
      "panel.section.closed": `\u9589\u3058\u308B`,
      "panel.section.text": `\u30C6\u30AD\u30B9\u30C8`,
      "panel.section.size": `\u30B5\u30A4\u30BA`,
      "panel.section.font": `\u30D5\u30A9\u30F3\u30C8`,
      "panel.section.taper": `\u30C6\u30FC\u30D1\u30FC`,
      "panel.section.twist": `\u306D\u3058\u308A`,
      "panel.section.orientation": `\u5411\u304D`,
      "panel.section.helix": `\u30D8\u30EA\u30C3\u30AF\u30B9\u30D1\u30B9`,
      "panel.section.quality": `\u54C1\u8CEA`,
      "panel.section.axis_origin": `\u8EF8\u539F\u70B9`,
      "panel.section.axis_dir": `\u8EF8\u65B9\u5411`,
      "panel.section.part_def": `\u30D1\u30FC\u30C4\u5B9A\u7FA9`,
      "panel.section.connection": `\u63A5\u7D9A`,
      "panel.section.state": `\u72B6\u614B`,
      "panel.section.type": `\u7A2E\u985E`,
      "panel.section.mirror": `\u30DF\u30E9\u30FC`,
      "panel.tooltip.material": `\u3053\u306E\u30D1\u30FC\u30C4\u306B\u30DE\u30C6\u30EA\u30A2\u30EB\u3092\u5272\u308A\u5F53\u3066`,
      "panel.tooltip.material_instance": `\u3053\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u30DE\u30C6\u30EA\u30A2\u30EB\u3092\u5272\u308A\u5F53\u3066`,
      "panel.tooltip.position": `\u539F\u70B9\u304B\u3089\u306E\u4F4D\u7F6E\u30AA\u30D5\u30BB\u30C3\u30C8 (mm)`,
      "panel.tooltip.position_world": `\u30EF\u30FC\u30EB\u30C9\u7A7A\u9593\u3067\u306E\u4F4D\u7F6E (mm)`,
      "panel.tooltip.rotation": `\u5404\u8EF8\u307E\u308F\u308A\u306E\u56DE\u8EE2\u89D2\u5EA6 (\u5EA6)`,
      "panel.tooltip.rotation_world": `\u30EF\u30FC\u30EB\u30C9\u7A7A\u9593\u3067\u306E\u56DE\u8EE2\u89D2\u5EA6 (\u5EA6)`,
      "panel.tooltip.scale": `\u5404\u8EF8\u65B9\u5411\u306E\u30B9\u30B1\u30FC\u30EB\u4FC2\u6570`,
      "panel.tooltip.dimensions_box": `\u30DC\u30C3\u30AF\u30B9\u306E\u5E45\u3001\u9AD8\u3055\u3001\u5965\u884C\u304D (mm)`,
      "panel.tooltip.dimensions_cylinder": `\u5186\u67F1\u306E\u534A\u5F84\u3068\u9AD8\u3055 (mm)`,
      "panel.tooltip.dimensions_sphere": `\u7403\u306E\u534A\u5F84 (mm)`,
      "panel.tooltip.fillet_radius": `\u30D5\u30A3\u30EC\u30C3\u30C8\u534A\u5F84 (mm)`,
      "panel.tooltip.chamfer_distance": `\u9762\u53D6\u308A\u8DDD\u96E2 (mm)`,
      "panel.tooltip.shell_thickness": `\u58C1\u306E\u539A\u3055 (mm)`,
      "panel.tooltip.mirror_readonly": `\u7DE8\u96C6\u306F\u307E\u3060\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093`,
      "panel.back_to_tree": `\u30C4\u30EA\u30FC\u306B\u623B\u308B`,
      "panel.parts_selected": `{count} \u500B\u306E\u30D1\u30FC\u30C4\u3092\u9078\u629E\u4E2D`,
      "panel.select_single": `\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7DE8\u96C6\u3059\u308B\u306B\u306F\u30D1\u30FC\u30C4\u3092 1 \u3064\u3060\u3051\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044`,
      "panel.edit_circuit": `\u56DE\u8DEF\u3092\u7DE8\u96C6`,
      "panel.open_embroidery": `\u523A\u7E4D\u30D1\u30CD\u30EB\u3092\u958B\u304F`,
      "panel.parent": `\u89AA:`,
      "panel.child": `\u5B50:`,
      "panel.ground": `\u30B0\u30E9\u30A6\u30F3\u30C9`,
      "panel.mirror_readonly": `\u30DF\u30E9\u30FC\u5E73\u9762\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u3067\u3059`,
      "bool.union": `\u548C`,
      "bool.difference": `\u5DEE`,
      "bool.intersection": `\u7A4D`,
      "joint.fixed": `\u56FA\u5B9A`,
      "joint.revolute": `\u56DE\u8EE2`,
      "joint.slider": `\u30B9\u30E9\u30A4\u30C0\u30FC`,
      "joint.cylindrical": `\u5186\u7B52`,
      "joint.ball": `\u30DC\u30FC\u30EB`,
      "joint.free": `\u30D5\u30EA\u30FC`,
      "joint.suffix": `\u30B8\u30E7\u30A4\u30F3\u30C8`,
      "tree.scene": `\u30B7\u30FC\u30F3`,
      "tree.parameters": `\u30D1\u30E9\u30E1\u30FC\u30BF`,
      "tree.scene_tooltip": `\u30B7\u30FC\u30F3\u3092\u691C\u67FB (\u80CC\u666F\u3001\u74B0\u5883\u3001\u30E9\u30A4\u30C8)`,
      "tree.parameters_tooltip": `\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u7DE8\u96C6 (\u30D0\u30A4\u30F3\u30C9\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u5F0F\u3067\u5236\u5FA1)`,
      "tree.sketch.label": `\u30B9\u30B1\u30C3\u30C1`,
      "tree.sketch.discard_title": `\u30B9\u30B1\u30C3\u30C1\u3092\u7834\u68C4\u3057\u307E\u3059\u304B?`,
      "tree.sketch.discard_msg": `\u672A\u4FDD\u5B58\u306E\u30B8\u30AA\u30E1\u30C8\u30EA\u304C\u3042\u308A\u307E\u3059\u3002`,
      "tree.sketch.discard": `\u7834\u68C4`,
      "tree.sketch.keep_editing": `\u7DE8\u96C6\u3092\u7D9A\u3051\u308B`,
      "tree.sketch.cancelled": `\u30B9\u30B1\u30C3\u30C1\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F`,
      "tree.sketch.discarded": `\u30B9\u30B1\u30C3\u30C1\u3092\u7834\u68C4\u3057\u307E\u3057\u305F`,
      "tree.sketch.entities": `\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3 ({count})`,
      "tree.sketch.constraints": `\u62D8\u675F ({count})`,
      "tree.sketch.profiles": `\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB ({count})`,
      "tree.sketch.profile": `\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB {n}`,
      "tree.sketch.finish": `\u5B8C\u4E86`,
      "tree.sketch.finish_tooltip": `\u30B9\u30B1\u30C3\u30C1\u3092\u5B8C\u4E86`,
      "tree.sketch.apply_tooltip": `{label} \u3092\u9069\u7528`,
      "tree.sketch.cancel_tooltip": `\u30B9\u30B1\u30C3\u30C1\u3092\u30AD\u30E3\u30F3\u30BB\u30EB (Esc)`,
      "tree.sketch.delete_constraint": `\u62D8\u675F\u3092\u524A\u9664`
    },
    ko: {
      "cmd.add_box.label": `\uBC15\uC2A4 \uCD94\uAC00`,
      "cmd.cube.label": `\uD050\uBE0C \uCD94\uAC00`,
      "cmd.cylinder.label": `\uC2E4\uB9B0\uB354 \uCD94\uAC00`,
      "cmd.sphere.label": `\uAD6C \uCD94\uAC00`,
      "cmd.cone.label": `\uC6D0\uBFD4 \uCD94\uAC00`,
      "cmd.translate.label": `\uC774\uB3D9`,
      "cmd.rotate.label": `\uD68C\uC804`,
      "cmd.scale.label": `\uD06C\uAE30 \uC870\uC815`,
      "cmd.move_mode.label": `\uC774\uB3D9 \uBAA8\uB4DC`,
      "cmd.rotate_mode.label": `\uD68C\uC804 \uBAA8\uB4DC`,
      "cmd.scale_mode.label": `\uD06C\uAE30 \uC870\uC815 \uBAA8\uB4DC`,
      "cmd.mirror.label": `\uBBF8\uB7EC`,
      "cmd.union.label": `\uD569\uC9D1\uD569`,
      "cmd.difference.label": `\uCC28\uC9D1\uD569`,
      "cmd.intersection.label": `\uAD50\uC9D1\uD569`,
      "cmd.fillet.label": `\uD544\uB81B`,
      "cmd.chamfer.label": `\uBAA8\uB530\uAE30`,
      "cmd.shell.label": `\uC258`,
      "cmd.stitch.label": `\uC2A4\uD2F0\uCE58`,
      "cmd.linear_pattern.label": `\uC120\uD615 \uD328\uD134`,
      "cmd.circular_pattern.label": `\uC6D0\uD615 \uD328\uD134`,
      "cmd.delete.label": `\uC0AD\uC81C`,
      "cmd.delete_selected.label": `\uC120\uD0DD \uD56D\uBAA9 \uC0AD\uC81C`,
      "cmd.undo.label": `\uC2E4\uD589 \uCDE8\uC18C`,
      "cmd.redo.label": `\uB2E4\uC2DC \uC2E4\uD589`,
      "cmd.copy.label": `\uBCF5\uC0AC`,
      "cmd.paste.label": `\uBD99\uC5EC\uB123\uAE30`,
      "cmd.duplicate.label": `\uBCF5\uC81C`,
      "cmd.select_all.label": `\uC804\uCCB4 \uC120\uD0DD`,
      "cmd.deselect.label": `\uC120\uD0DD \uD574\uC81C`,
      "cmd.deselect_all.label": `\uC804\uCCB4 \uC120\uD0DD \uD574\uC81C`,
      "cmd.new.label": `\uC0C8 \uBB38\uC11C`,
      "cmd.new_short.label": `\uC0C8\uB85C \uB9CC\uB4E4\uAE30`,
      "cmd.open.label": `\uC5F4\uAE30`,
      "cmd.open_dots.label": `\uC5F4\uAE30\u2026`,
      "cmd.open_cloud.label": `\uD074\uB77C\uC6B0\uB4DC\uC5D0\uC11C \uC5F4\uAE30\u2026`,
      "cmd.save.label": `\uC800\uC7A5`,
      "cmd.export_stl.label": `STL \uB0B4\uBCF4\uB0B4\uAE30`,
      "cmd.export_glb.label": `GLB \uB0B4\uBCF4\uB0B4\uAE30`,
      "cmd.export_step.label": `STEP \uB0B4\uBCF4\uB0B4\uAE30`,
      "cmd.quit.label": `\uC885\uB8CC`,
      "cmd.toggle_sidebar.label": `\uC0AC\uC774\uB4DC\uBC14 \uD1A0\uAE00`,
      "cmd.toggle_feature_tree.label": `\uD53C\uCC98 \uD2B8\uB9AC \uD1A0\uAE00`,
      "cmd.toggle_chat.label": `\uCC44\uD305 \uD1A0\uAE00`,
      "cmd.toggle_status_bar.label": `\uC0C1\uD0DC \uD45C\uC2DC\uC904 \uD1A0\uAE00`,
      "cmd.toggle_devtools.label": `\uAC1C\uBC1C\uC790 \uB3C4\uAD6C \uD1A0\uAE00`,
      "cmd.toggle_wireframe.label": `\uC640\uC774\uC5B4\uD504\uB808\uC784 \uD1A0\uAE00`,
      "cmd.toggle_grid_snap.label": `\uADF8\uB9AC\uB4DC \uC2A4\uB0C5 \uD1A0\uAE00`,
      "cmd.cycle_theme.label": `\uD14C\uB9C8 \uC804\uD658`,
      "cmd.camera_iso.label": `\uB4F1\uAC01 \uBDF0`,
      "cmd.camera_top.label": `\uC704\uC5D0\uC11C \uBCF4\uAE30`,
      "cmd.camera_front.label": `\uC55E\uC5D0\uC11C \uBCF4\uAE30`,
      "cmd.camera_right.label": `\uC624\uB978\uCABD\uC5D0\uC11C \uBCF4\uAE30`,
      "cmd.camera_fit.label": `\uD654\uBA74\uC5D0 \uB9DE\uCD94\uAE30`,
      "cmd.fit_to_view.label": `\uBDF0\uC5D0 \uB9DE\uCD94\uAE30`,
      "cmd.palette.label": `\uBA85\uB839 \uD314\uB808\uD2B8`,
      "cmd.palette_dots.label": `\uBA85\uB839 \uD314\uB808\uD2B8\u2026`,
      "cmd.sketch.label": `\uC0C8 \uC2A4\uCF00\uCE58`,
      "cmd.sketch_dots.label": `\uC0C8 \uC2A4\uCF00\uCE58\u2026`,
      "cmd.slicer.label": `\uCD9C\uB825 (\uC2AC\uB77C\uC774\uC11C)\u2026`,
      "cmd.cam.label": `CAM (\uD234\uD328\uC2A4)\u2026`,
      "cmd.about.label": `vcad \uC815\uBCF4`,
      "cmd.whats_new.label": `\uC0C8\uB85C\uC6B4 \uAE30\uB2A5`,
      "cmd.open_docs.label": `\uBB38\uC11C \uC5F4\uAE30`,
      "cmd.documentation.label": `\uBB38\uC11C`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `\uD30C\uD2B8 \uC815\uC758 \uB9CC\uB4E4\uAE30`,
      "cmd.insert_instance.label": `\uC778\uC2A4\uD134\uC2A4 \uC0BD\uC785`,
      "cmd.add_fixed_joint.label": `\uACE0\uC815 \uC870\uC778\uD2B8 \uCD94\uAC00`,
      "cmd.add_revolute_joint.label": `\uD68C\uC804 \uC870\uC778\uD2B8 \uCD94\uAC00`,
      "cmd.add_slider_joint.label": `\uC2AC\uB77C\uC774\uB354 \uC870\uC778\uD2B8 \uCD94\uAC00`,
      "cmd.set_ground.label": `\uC9C0\uBA74\uC73C\uB85C \uC124\uC815`,
      "cmd.enter_electronics.label": `\uC804\uC790 \uD68C\uB85C \uC5F4\uAE30`,
      "cmd.exit_electronics.label": `\uC804\uC790 \uD68C\uB85C \uB2EB\uAE30`,
      "menu.file": `\uD30C\uC77C`,
      "menu.edit": `\uD3B8\uC9D1`,
      "menu.view": `\uBCF4\uAE30`,
      "menu.tools": `\uB3C4\uAD6C`,
      "menu.help": `\uB3C4\uC6C0\uB9D0`,
      "menu.file.new": `\uC0C8\uB85C \uB9CC\uB4E4\uAE30`,
      "menu.file.open": `\uC5F4\uAE30\u2026`,
      "menu.file.save": `\uC800\uC7A5`,
      "menu.file.share_link": `\uB9C1\uD06C \uACF5\uC720\u2026`,
      "menu.file.version_history": `\uBC84\uC804 \uAE30\uB85D\u2026`,
      "menu.file.export": `\uB0B4\uBCF4\uB0B4\uAE30`,
      "menu.file.export_stl": `STL \uB0B4\uBCF4\uB0B4\uAE30`,
      "menu.file.export_glb": `GLB \uB0B4\uBCF4\uB0B4\uAE30`,
      "menu.file.export_step": `STEP \uB0B4\uBCF4\uB0B4\uAE30`,
      "menu.file.examples": `\uC608\uC81C`,
      "menu.file.quit": `\uC885\uB8CC`,
      "menu.edit.undo": `\uC2E4\uD589 \uCDE8\uC18C`,
      "menu.edit.redo": `\uB2E4\uC2DC \uC2E4\uD589`,
      "menu.edit.delete": `\uC0AD\uC81C`,
      "menu.edit.duplicate": `\uBCF5\uC81C`,
      "menu.edit.select_all": `\uC804\uCCB4 \uC120\uD0DD`,
      "menu.edit.deselect": `\uC120\uD0DD \uD574\uC81C`,
      "menu.view.toggle_sidebar": `\uC0AC\uC774\uB4DC\uBC14 \uD1A0\uAE00`,
      "menu.view.toggle_chat": `\uCC44\uD305 \uD1A0\uAE00`,
      "menu.view.camera_iso": `\uB4F1\uAC01 \uBDF0`,
      "menu.view.camera_top": `\uC704\uC5D0\uC11C \uBCF4\uAE30`,
      "menu.view.camera_front": `\uC55E\uC5D0\uC11C \uBCF4\uAE30`,
      "menu.view.camera_right": `\uC624\uB978\uCABD\uC5D0\uC11C \uBCF4\uAE30`,
      "menu.view.camera_fit": `\uD654\uBA74\uC5D0 \uB9DE\uCD94\uAE30`,
      "menu.view.wireframe": `\uC640\uC774\uC5B4\uD504\uB808\uC784`,
      "menu.view.cycle_theme": `\uD14C\uB9C8 \uC804\uD658`,
      "menu.view.input_preferences": `\uC785\uB825 \uD658\uACBD\uC124\uC815\u2026`,
      "menu.view.ray_tracing": `\uB808\uC774 \uD2B8\uB808\uC774\uC2F1`,
      "menu.view.ray_tracing.off": `\uB054`,
      "menu.view.ray_tracing.draft": `\uCD08\uC548`,
      "menu.view.ray_tracing.standard": `\uD45C\uC900`,
      "menu.view.ray_tracing.high": `\uB192\uC74C`,
      "menu.view.ray_tracing.edges_on": `\uBAA8\uC11C\uB9AC \uCF2C`,
      "menu.view.ray_tracing.edges_off": `\uBAA8\uC11C\uB9AC \uB054`,
      "menu.tools.palette": `\uBA85\uB839 \uD314\uB808\uD2B8\u2026`,
      "menu.tools.sketch": `\uC0C8 \uC2A4\uCF00\uCE58`,
      "menu.help.about": `vcad \uC815\uBCF4`,
      "menu.help.docs": `\uBB38\uC11C \uC5F4\uAE30`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `\uC0DD\uC131`,
      "toolbar.tab.sketch": `\uC2A4\uCF00\uCE58`,
      "toolbar.tab.transform": `\uBCC0\uD658`,
      "toolbar.tab.combine": `\uACB0\uD569`,
      "toolbar.tab.modify": `\uC218\uC815`,
      "toolbar.tab.assembly": `\uC5B4\uC148\uBE14\uB9AC`,
      "toolbar.tab.simulate": `\uC2DC\uBBAC\uB808\uC774\uC158`,
      "toolbar.tab.export": `\uB0B4\uBCF4\uB0B4\uAE30`,
      "toolbar.tool.box": `\uBC15\uC2A4`,
      "toolbar.tool.cyl": `\uC2E4\uB9B0\uB354`,
      "toolbar.tool.sph": `\uAD6C`,
      "toolbar.tool.cone": `\uC6D0\uBFD4`,
      "toolbar.tool.sketch": `\uC2A4\uCF00\uCE58`,
      "toolbar.tool.move": `\uC774\uB3D9`,
      "toolbar.tool.rotate": `\uD68C\uC804`,
      "toolbar.tool.scale": `\uD06C\uAE30 \uC870\uC815`,
      "toolbar.tool.union": `\uD569\uC9D1\uD569`,
      "toolbar.tool.diff": `\uCC28\uC9D1\uD569`,
      "toolbar.tool.isect": `\uAD50\uC9D1\uD569`,
      "toolbar.tool.fillet": `\uD544\uB81B`,
      "toolbar.tool.chamfer": `\uBAA8\uB530\uAE30`,
      "toolbar.tool.shell": `\uC258`,
      "toolbar.tool.pattern": `\uD328\uD134`,
      "toolbar.tool.mirror": `\uBBF8\uB7EC`,
      "toolbar.tool.part": `\uD30C\uD2B8`,
      "toolbar.tool.instance": `\uC778\uC2A4\uD134\uC2A4`,
      "toolbar.tool.joint": `\uC870\uC778\uD2B8`,
      "toolbar.tool.play": `\uC7AC\uC0DD`,
      "toolbar.tool.pause": `\uC77C\uC2DC\uC815\uC9C0`,
      "toolbar.tool.step": `\uC2A4\uD15D`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `\uC800\uC7A5`,
      "toolbar.hint.numeric": `\u2190\u2192:\uC2A4\uD06C\uB7FD  Enter:\uC801\uC6A9  Esc:\uCDE8\uC18C`,
      "toolbar.hint.text": `Enter:\uC801\uC6A9  Esc:\uCDE8\uC18C`,
      "status.modified": `\uC218\uC815\uB428`,
      "status.saved": `\uC800\uC7A5\uB428`,
      "status.part": `\uD30C\uD2B8 {count}\uAC1C`,
      "status.parts": `\uD30C\uD2B8 {count}\uAC1C`,
      "status.sel": `{count}\uAC1C \uC120\uD0DD`,
      "status.console_empty": `\uCF58\uC194 \uBE44\uC5B4 \uC788\uC74C`,
      "status.ago.now": `\uBC29\uAE08`,
      "status.ago.seconds": `{count}\uCD08`,
      "status.ago.minutes": `{count}\uBD84`,
      "status.ago.hours": `{count}\uC2DC\uAC04`,
      "welcome.tagline": `\uBAA8\uB450\uB97C \uC704\uD55C \uBB34\uB8CC \uD30C\uB77C\uBA54\uD2B8\uB9AD CAD`,
      "welcome.new_project": `\uC0C8 \uD504\uB85C\uC81D\uD2B8`,
      "welcome.blank_project": `\uBE48 \uD504\uB85C\uC81D\uD2B8`,
      "welcome.open_file": `\uD30C\uC77C \uC5F4\uAE30`,
      "welcome.hint.new": `\uAC00\uC774\uB4DC \uD29C\uD1A0\uB9AC\uC5BC`,
      "welcome.hint.blank": `\uBE48 \uCE94\uBC84\uC2A4`,
      "welcome.hint.open": `:\uC5F4\uAE30`,
      "welcome.footer": `\u2191\u2193 \uD0D0\uC0C9  enter \uC120\uD0DD  esc \uB2EB\uAE30`,
      "tree.header": `\uD30C\uD2B8`,
      "tree.empty": `\uD30C\uD2B8 \uC5C6\uC74C`,
      "desktop.menu.open_recent": `\uCD5C\uADFC \uD56D\uBAA9 \uC5F4\uAE30\u2026`,
      "desktop.menu.open_cloud": `\uD074\uB77C\uC6B0\uB4DC\uC5D0\uC11C \uC5F4\uAE30\u2026`,
      "desktop.menu.toggle_status_bar": `\uC0C1\uD0DC \uD45C\uC2DC\uC904 \uD1A0\uAE00`,
      "desktop.menu.camera_iso": `\uB4F1\uAC01`,
      "desktop.menu.camera_fit": `\uC120\uD0DD \uD56D\uBAA9\uC5D0 \uB9DE\uCD94\uAE30`,
      "desktop.menu.toggle_grid_snap": `\uADF8\uB9AC\uB4DC \uC2A4\uB0C5 \uD1A0\uAE00`,
      "desktop.menu.slicer": `\uC2AC\uB77C\uC774\uC11C`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `\uC5C5\uB370\uC774\uD2B8 \uD655\uC778\u2026`,
      "desktop.menu.whats_new": `\uC0C8\uB85C\uC6B4 \uAE30\uB2A5`,
      "desktop.menu.documentation": `\uBB38\uC11C`,
      "desktop.menu.camera_top": `\uC704`,
      "desktop.menu.camera_front": `\uC55E`,
      "desktop.menu.camera_right": `\uC624\uB978\uCABD`,
      "modal.about.tagline": `\uBAA8\uB450\uB97C \uC704\uD55C \uD30C\uB77C\uBA54\uD2B8\uB9AD CAD`,
      "modal.about.action.shape": `\uB3C4\uD615 \uCD94\uAC00`,
      "modal.about.action.shape_desc": `\uBC15\uC2A4, \uC2E4\uB9B0\uB354, \uAD6C`,
      "modal.about.action.sketch": `\uC2A4\uCF00\uCE58 \uC2DC\uC791`,
      "modal.about.action.sketch_desc": `2D \uADF8\uB9AC\uAE30 \u2192 3D\uB85C \uB3CC\uCD9C`,
      "modal.about.action.open": `\uD30C\uC77C \uC5F4\uAE30`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `\uBE60\uB978 \uD29C\uD1A0\uB9AC\uC5BC`,
      "modal.about.action.tutorial_desc": `\uAE30\uBCF8 \uC0AC\uC6A9\uBC95 \uC775\uD788\uAE30`,
      "modal.about.keyhint.palette": `\uCC44\uD305 \uBC0F \uBA85\uB839`,
      "modal.about.keyhint.tabs": `\uB3C4\uAD6C \uBAA8\uC74C \uD0ED \uC804\uD658`,
      "modal.about.keyhint.transform": `\uC774\uB3D9, \uD68C\uC804, \uD06C\uAE30 \uC870\uC815`,
      "modal.about.keyhint.boolean": `\uBD80\uC6B8 \uC5F0\uC0B0 (2\uAC1C \uC120\uD0DD)`,
      "modal.about.docs": `\uBB38\uC11C`,
      "modal.about.whats_new": `\uC0C8\uB85C\uC6B4 \uAE30\uB2A5`,
      "footer.privacy": `\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68`,
      "footer.terms": `\uC774\uC6A9\uC57D\uAD00`,
      "footer.security": `\uBCF4\uC548`,
      "tutorial.add_cube.instruction": `\uC0DD\uC131 \uC5F4\uAE30 \u2192 \uBC15\uC2A4 \uD074\uB9AD`,
      "tutorial.add_cube.detail": `\uC7A5\uBA74\uC5D0 \uCCAB \uBC88\uC9F8 \uB3C4\uD615\uC744 \uCD94\uAC00\uD558\uC138\uC694`,
      "tutorial.add_cylinder.instruction": `\uC0DD\uC131 \uC5F4\uAE30 \u2192 \uC2E4\uB9B0\uB354 \uCD94\uAC00`,
      "tutorial.add_cylinder.detail": `\uC774\uAC83\uC744 \uD050\uBE0C\uC5D0\uC11C \uBE7C\uB0BC \uAC83\uC785\uB2C8\uB2E4`,
      "tutorial.position_cylinder.instruction": `\uC2E4\uB9B0\uB354\uB97C \uC704\uB85C \uC774\uB3D9`,
      "tutorial.position_cylinder.detail": `\uAE30\uC988\uBAA8\uC758 \uB179\uC0C9 \uD654\uC0B4\uD45C\uB97C \uB4DC\uB798\uADF8\uD558\uC138\uC694`,
      "tutorial.subtract.instruction": `\uACB0\uD569 \uC5F4\uAE30 \u2192 \uCC28\uC9D1\uD569 \uD074\uB9AD`,
      "tutorial.subtract.detail": `\uBA3C\uC800 \uB450 \uD30C\uD2B8\uB97C \uBAA8\uB450 \uC120\uD0DD\uD558\uC138\uC694 (\u2318-\uD074\uB9AD \uB610\uB294 \uB4DC\uB798\uADF8)`,
      "tutorial.celebrate.instruction": `\uCCAB \uBC88\uC9F8 \uD30C\uD2B8\uB97C \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4!`,
      "tutorial.celebrate.detail": `CSG \uC6CC\uD06C\uD50C\uB85C\uB97C \uC775\uD614\uC2B5\uB2C8\uB2E4`,
      "tutorial.skip": `\uD29C\uD1A0\uB9AC\uC5BC \uAC74\uB108\uB6F0\uAE30`,
      "tutorial.start_building": `\uB9CC\uB4E4\uAE30 \uC2DC\uC791`,
      "tutorial.skip_short": `\uD29C\uD1A0\uB9AC\uC5BC \uAC74\uB108\uB6F0\uAE30`,
      "error.boundary.title": `\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4`,
      "error.boundary.unexpected": `\uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4`,
      "error.boundary.reload": `\uC571 \uB2E4\uC2DC \uB85C\uB4DC`,
      "error.boundary.cache_hint": `\uC774 \uBB38\uC81C\uAC00 \uACC4\uC18D \uBC1C\uC0DD\uD558\uBA74 \uBE0C\uB77C\uC6B0\uC800 \uCE90\uC2DC\uB97C \uC9C0\uC6CC\uBCF4\uC138\uC694.`,
      "error.engine": `\uC5D4\uC9C4 \uC624\uB958`,
      "status.offline": `\uC624\uD504\uB77C\uC778`,
      "status.console_open": `\uCF58\uC194 \uC5F4\uAE30 (~)`,
      "status.console_empty_title": `\uCF58\uC194 (\uBE44\uC5B4 \uC788\uC74C)`,
      "status.cursor_pos": `\uC9C0\uBA74 \uD3C9\uBA74\uC758 \uCEE4\uC11C \uC704\uCE58 (mm)`,
      "status.language": `\uC5B8\uC5B4`,
      "banner.readonly.viewing": `{name} \uBCF4\uAE30 (\uC77D\uAE30 \uC804\uC6A9)`,
      "banner.readonly.fork": `\uD3EC\uD06C\uD558\uB824\uBA74 \uB85C\uADF8\uC778\uD558\uC138\uC694`,
      "modal.fork.title": `\uC774 \uBB38\uC11C\uB294 \uC77D\uAE30 \uC804\uC6A9\uC785\uB2C8\uB2E4`,
      "modal.fork.description": `\uB85C\uADF8\uC778\uD558\uC5EC \uD3B8\uC9D1 \uAC00\uB2A5\uD55C \uC0AC\uBCF8\uC744 \uB9CC\uB4DC\uC138\uC694. \uD3B8\uC9D1 \uB0B4\uC6A9\uC740 \uC6D0\uBCF8\uC5D0 \uC601\uD5A5\uC744 \uC8FC\uC9C0 \uC54A\uC73C\uBA70, \uACC4\uC815\uC5D0 \uC0C8 \uD3EC\uD06C\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.`,
      "modal.fork.keep_viewing": `\uACC4\uC18D \uBCF4\uAE30`,
      "modal.fork.signin": `\uD3EC\uD06C\uD558\uB824\uBA74 \uB85C\uADF8\uC778`,
      "palette.placeholder": `\uBA85\uB839\uC744 \uC785\uB825\uD558\uAC70\uB098 \uB9CC\uB4E4 \uB0B4\uC6A9\uC744 \uC124\uBA85\uD558\uC138\uC694...`,
      "palette.title": `\uBA85\uB839 \uD314\uB808\uD2B8`,
      "palette.generating": `\uC0DD\uC131 \uC911...`,
      "palette.section.get_started": `\uC2DC\uC791\uD558\uAE30`,
      "palette.section.examples": `\uC608\uC81C`,
      "palette.section.ask_ai_inline": `\uB610\uB294 \uB9CC\uB4E4 \uB0B4\uC6A9\uC744 \uC124\uBA85\uD558\uC138\uC694`,
      "palette.section.ask_ai": `AI\uC5D0\uAC8C \uBB3B\uAE30`,
      "palette.action.new_project": `\uC0C8 \uD504\uB85C\uC81D\uD2B8`,
      "palette.action.new_project_hint": `\uAC00\uC774\uB4DC \uD29C\uD1A0\uB9AC\uC5BC`,
      "palette.action.blank_project": `\uBE48 \uD504\uB85C\uC81D\uD2B8`,
      "palette.action.blank_project_hint": `\uD29C\uD1A0\uB9AC\uC5BC \uAC74\uB108\uB6F0\uAE30`,
      "palette.action.open_file": `\uD30C\uC77C \uC5F4\uAE30`,
      "palette.generate_label": `\uC0DD\uC131:`,
      "palette.kbd_server": `\uC11C\uBC84`,
      "palette.empty": `\uBA85\uB839\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC74C`,
      "palette.failed_to_load": `\uD30C\uC77C\uC744 \uB85C\uB4DC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4`,
      "panel.section.material": `\uC7AC\uC9C8`,
      "panel.section.position": `\uC704\uCE58`,
      "panel.section.rotation": `\uD68C\uC804`,
      "panel.section.scale": `\uD06C\uAE30`,
      "panel.section.dimensions": `\uCE58\uC218`,
      "panel.section.operation": `\uC5F0\uC0B0`,
      "panel.section.profile": `\uD504\uB85C\uD30C\uC77C`,
      "panel.section.path": `\uACBD\uB85C`,
      "panel.section.depth": `\uAE4A\uC774`,
      "panel.section.angle": `\uAC01\uB3C4`,
      "panel.section.axis": `\uCD95`,
      "panel.section.radius": `\uBC18\uACBD`,
      "panel.section.distance": `\uAC70\uB9AC`,
      "panel.section.thickness": `\uB450\uAED8`,
      "panel.section.direction": `\uBC29\uD5A5`,
      "panel.section.count": `\uAC1C\uC218`,
      "panel.section.spacing": `\uAC04\uACA9`,
      "panel.section.profiles": `\uD504\uB85C\uD30C\uC77C`,
      "panel.section.closed": `\uB2EB\uD798`,
      "panel.section.text": `\uD14D\uC2A4\uD2B8`,
      "panel.section.size": `\uD06C\uAE30`,
      "panel.section.font": `\uAE00\uAF34`,
      "panel.section.taper": `\uD14C\uC774\uD37C`,
      "panel.section.twist": `\uBE44\uD2C0\uAE30`,
      "panel.section.orientation": `\uBC29\uD5A5`,
      "panel.section.helix": `\uD5EC\uB9AD\uC2A4 \uACBD\uB85C`,
      "panel.section.quality": `\uD488\uC9C8`,
      "panel.section.axis_origin": `\uCD95 \uC6D0\uC810`,
      "panel.section.axis_dir": `\uCD95 \uBC29\uD5A5`,
      "panel.section.part_def": `\uD30C\uD2B8 \uC815\uC758`,
      "panel.section.connection": `\uC5F0\uACB0`,
      "panel.section.state": `\uC0C1\uD0DC`,
      "panel.section.type": `\uC720\uD615`,
      "panel.section.mirror": `\uBBF8\uB7EC`,
      "panel.tooltip.material": `\uC774 \uD30C\uD2B8\uC5D0 \uC7AC\uC9C8\uC744 \uD560\uB2F9\uD569\uB2C8\uB2E4`,
      "panel.tooltip.material_instance": `\uC774 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC7AC\uC9C8\uC744 \uD560\uB2F9\uD569\uB2C8\uB2E4`,
      "panel.tooltip.position": `\uC6D0\uC810\uC73C\uB85C\uBD80\uD130\uC758 \uC704\uCE58 \uC624\uD504\uC14B (mm)`,
      "panel.tooltip.position_world": `\uC6D4\uB4DC \uACF5\uAC04\uC5D0\uC11C\uC758 \uC704\uCE58 (mm)`,
      "panel.tooltip.rotation": `\uAC01 \uCD95 \uC8FC\uC704\uC758 \uD68C\uC804 \uAC01\uB3C4 (\uB3C4)`,
      "panel.tooltip.rotation_world": `\uC6D4\uB4DC \uACF5\uAC04\uC5D0\uC11C\uC758 \uD68C\uC804 \uAC01\uB3C4 (\uB3C4)`,
      "panel.tooltip.scale": `\uAC01 \uCD95\uC5D0 \uB530\uB978 \uBC30\uC728`,
      "panel.tooltip.dimensions_box": `\uBC15\uC2A4\uC758 \uB108\uBE44, \uB192\uC774, \uAE4A\uC774 (mm)`,
      "panel.tooltip.dimensions_cylinder": `\uC2E4\uB9B0\uB354\uC758 \uBC18\uACBD\uACFC \uB192\uC774 (mm)`,
      "panel.tooltip.dimensions_sphere": `\uAD6C\uC758 \uBC18\uACBD (mm)`,
      "panel.tooltip.fillet_radius": `\uD544\uB81B \uBC18\uACBD (mm)`,
      "panel.tooltip.chamfer_distance": `\uBAA8\uB530\uAE30 \uAC70\uB9AC (mm)`,
      "panel.tooltip.shell_thickness": `\uBCBD \uB450\uAED8 (mm)`,
      "panel.tooltip.mirror_readonly": `\uD3B8\uC9D1\uC740 \uC544\uC9C1 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4`,
      "panel.back_to_tree": `\uD2B8\uB9AC\uB85C \uB3CC\uC544\uAC00\uAE30`,
      "panel.parts_selected": `{count}\uAC1C \uD30C\uD2B8 \uC120\uD0DD\uB428`,
      "panel.select_single": `\uC18D\uC131\uC744 \uD3B8\uC9D1\uD558\uB824\uBA74 \uB2E8\uC77C \uD30C\uD2B8\uB97C \uC120\uD0DD\uD558\uC138\uC694`,
      "panel.edit_circuit": `\uD68C\uB85C \uD3B8\uC9D1`,
      "panel.open_embroidery": `\uC790\uC218 \uD328\uB110 \uC5F4\uAE30`,
      "panel.parent": `\uBD80\uBAA8:`,
      "panel.child": `\uC790\uC2DD:`,
      "panel.ground": `\uC9C0\uBA74`,
      "panel.mirror_readonly": `\uBBF8\uB7EC \uD3C9\uBA74 \uB9E4\uAC1C\uBCC0\uC218\uB294 \uC77D\uAE30 \uC804\uC6A9\uC785\uB2C8\uB2E4`,
      "bool.union": `\uD569\uC9D1\uD569`,
      "bool.difference": `\uCC28\uC9D1\uD569`,
      "bool.intersection": `\uAD50\uC9D1\uD569`,
      "joint.fixed": `\uACE0\uC815`,
      "joint.revolute": `\uD68C\uC804`,
      "joint.slider": `\uC2AC\uB77C\uC774\uB354`,
      "joint.cylindrical": `\uC6D0\uD1B5`,
      "joint.ball": `\uBCFC`,
      "joint.free": `\uC790\uC720`,
      "joint.suffix": `\uC870\uC778\uD2B8`,
      "tree.scene": `\uC7A5\uBA74`,
      "tree.parameters": `\uB9E4\uAC1C\uBCC0\uC218`,
      "tree.scene_tooltip": `\uC7A5\uBA74 \uAC80\uC0AC (\uBC30\uACBD, \uD658\uACBD, \uC870\uBA85)`,
      "tree.parameters_tooltip": `\uBB38\uC11C \uB9E4\uAC1C\uBCC0\uC218 \uD3B8\uC9D1 (\uC2DD\uC744 \uD1B5\uD574 \uBC14\uC778\uB529\uB41C \uD544\uB4DC \uC81C\uC5B4)`,
      "tree.sketch.label": `\uC2A4\uCF00\uCE58`,
      "tree.sketch.discard_title": `\uC2A4\uCF00\uCE58\uB97C \uD3D0\uAE30\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,
      "tree.sketch.discard_msg": `\uC800\uC7A5\uB418\uC9C0 \uC54A\uC740 \uD615\uC0C1\uC774 \uC788\uC2B5\uB2C8\uB2E4.`,
      "tree.sketch.discard": `\uD3D0\uAE30`,
      "tree.sketch.keep_editing": `\uACC4\uC18D \uD3B8\uC9D1`,
      "tree.sketch.cancelled": `\uC2A4\uCF00\uCE58 \uCDE8\uC18C\uB428`,
      "tree.sketch.discarded": `\uC2A4\uCF00\uCE58 \uD3D0\uAE30\uB428`,
      "tree.sketch.entities": `\uC5D4\uD2F0\uD2F0 ({count})`,
      "tree.sketch.constraints": `\uAD6C\uC18D\uC870\uAC74 ({count})`,
      "tree.sketch.profiles": `\uD504\uB85C\uD30C\uC77C ({count})`,
      "tree.sketch.profile": `\uD504\uB85C\uD30C\uC77C {n}`,
      "tree.sketch.finish": `\uC644\uB8CC`,
      "tree.sketch.finish_tooltip": `\uC2A4\uCF00\uCE58 \uC644\uB8CC`,
      "tree.sketch.apply_tooltip": `{label} \uC801\uC6A9`,
      "tree.sketch.cancel_tooltip": `\uC2A4\uCF00\uCE58 \uCDE8\uC18C (Esc)`,
      "tree.sketch.delete_constraint": `\uAD6C\uC18D\uC870\uAC74 \uC0AD\uC81C`
    },
    nl: {
      "cmd.add_box.label": `Doos toevoegen`,
      "cmd.cube.label": `Kubus toevoegen`,
      "cmd.cylinder.label": `Cilinder toevoegen`,
      "cmd.sphere.label": `Bol toevoegen`,
      "cmd.cone.label": `Kegel toevoegen`,
      "cmd.translate.label": `Verplaatsen`,
      "cmd.rotate.label": `Roteren`,
      "cmd.scale.label": `Schalen`,
      "cmd.move_mode.label": `Verplaatsmodus`,
      "cmd.rotate_mode.label": `Rotatiemodus`,
      "cmd.scale_mode.label": `Schaalmodus`,
      "cmd.mirror.label": `Spiegelen`,
      "cmd.union.label": `Vereniging`,
      "cmd.difference.label": `Verschil`,
      "cmd.intersection.label": `Doorsnede`,
      "cmd.fillet.label": `Afronding`,
      "cmd.chamfer.label": `Afkanting`,
      "cmd.shell.label": `Schaal`,
      "cmd.stitch.label": `Hechten`,
      "cmd.linear_pattern.label": `Lineair Patroon`,
      "cmd.circular_pattern.label": `Cirkelpatroon`,
      "cmd.delete.label": `Verwijderen`,
      "cmd.delete_selected.label": `Selectie verwijderen`,
      "cmd.undo.label": `Ongedaan maken`,
      "cmd.redo.label": `Opnieuw`,
      "cmd.copy.label": `Kopi\xEBren`,
      "cmd.paste.label": `Plakken`,
      "cmd.duplicate.label": `Dupliceren`,
      "cmd.select_all.label": `Alles selecteren`,
      "cmd.deselect.label": `Deselecteren`,
      "cmd.deselect_all.label": `Alles deselecteren`,
      "cmd.new.label": `Nieuw document`,
      "cmd.new_short.label": `Nieuw`,
      "cmd.open.label": `Openen`,
      "cmd.open_dots.label": `Openen\u2026`,
      "cmd.open_cloud.label": `Openen vanuit Cloud\u2026`,
      "cmd.save.label": `Opslaan`,
      "cmd.export_stl.label": `STL exporteren`,
      "cmd.export_glb.label": `GLB exporteren`,
      "cmd.export_step.label": `STEP exporteren`,
      "cmd.quit.label": `Afsluiten`,
      "cmd.toggle_sidebar.label": `Zijbalk in-/uitschakelen`,
      "cmd.toggle_feature_tree.label": `Featureboom in-/uitschakelen`,
      "cmd.toggle_chat.label": `Chat in-/uitschakelen`,
      "cmd.toggle_status_bar.label": `Statusbalk in-/uitschakelen`,
      "cmd.toggle_devtools.label": `DevTools in-/uitschakelen`,
      "cmd.toggle_wireframe.label": `Draadmodel in-/uitschakelen`,
      "cmd.toggle_grid_snap.label": `Rasteruitlijning in-/uitschakelen`,
      "cmd.cycle_theme.label": `Thema wisselen`,
      "cmd.camera_iso.label": `Isometrisch aanzicht`,
      "cmd.camera_top.label": `Bovenaanzicht`,
      "cmd.camera_front.label": `Vooraanzicht`,
      "cmd.camera_right.label": `Rechteraanzicht`,
      "cmd.camera_fit.label": `Aanpassen aan scherm`,
      "cmd.fit_to_view.label": `Aanpassen aan beeld`,
      "cmd.palette.label": `Opdrachtenpalet`,
      "cmd.palette_dots.label": `Opdrachtenpalet\u2026`,
      "cmd.sketch.label": `Nieuwe schets`,
      "cmd.sketch_dots.label": `Nieuwe schets\u2026`,
      "cmd.slicer.label": `Afdrukken (Slicer)\u2026`,
      "cmd.cam.label": `CAM (Gereedschapsbaan)\u2026`,
      "cmd.about.label": `Info over vcad`,
      "cmd.whats_new.label": `Wat is er nieuw`,
      "cmd.open_docs.label": `Documentatie openen`,
      "cmd.documentation.label": `Documentatie`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `Onderdeeldefinitie maken`,
      "cmd.insert_instance.label": `Instantie invoegen`,
      "cmd.add_fixed_joint.label": `Vaste verbinding toevoegen`,
      "cmd.add_revolute_joint.label": `Scharnierverbinding toevoegen`,
      "cmd.add_slider_joint.label": `Schuifverbinding toevoegen`,
      "cmd.set_ground.label": `Instellen als grond`,
      "cmd.enter_electronics.label": `Elektronica openen`,
      "cmd.exit_electronics.label": `Elektronica sluiten`,
      "menu.file": `Bestand`,
      "menu.edit": `Bewerken`,
      "menu.view": `Beeld`,
      "menu.tools": `Hulpmiddelen`,
      "menu.help": `Help`,
      "menu.file.new": `Nieuw`,
      "menu.file.open": `Openen\u2026`,
      "menu.file.save": `Opslaan`,
      "menu.file.share_link": `Link delen\u2026`,
      "menu.file.version_history": `Versiegeschiedenis\u2026`,
      "menu.file.export": `Exporteren`,
      "menu.file.export_stl": `STL exporteren`,
      "menu.file.export_glb": `GLB exporteren`,
      "menu.file.export_step": `STEP exporteren`,
      "menu.file.examples": `Voorbeelden`,
      "menu.file.quit": `Afsluiten`,
      "menu.edit.undo": `Ongedaan maken`,
      "menu.edit.redo": `Opnieuw`,
      "menu.edit.delete": `Verwijderen`,
      "menu.edit.duplicate": `Dupliceren`,
      "menu.edit.select_all": `Alles selecteren`,
      "menu.edit.deselect": `Deselecteren`,
      "menu.view.toggle_sidebar": `Zijbalk in-/uitschakelen`,
      "menu.view.toggle_chat": `Chat in-/uitschakelen`,
      "menu.view.camera_iso": `Isometrisch aanzicht`,
      "menu.view.camera_top": `Bovenaanzicht`,
      "menu.view.camera_front": `Vooraanzicht`,
      "menu.view.camera_right": `Rechteraanzicht`,
      "menu.view.camera_fit": `Aanpassen aan scherm`,
      "menu.view.wireframe": `Draadmodel`,
      "menu.view.cycle_theme": `Thema wisselen`,
      "menu.view.input_preferences": `Invoervoorkeuren\u2026`,
      "menu.view.ray_tracing": `Ray tracing`,
      "menu.view.ray_tracing.off": `Uit`,
      "menu.view.ray_tracing.draft": `Concept`,
      "menu.view.ray_tracing.standard": `Standaard`,
      "menu.view.ray_tracing.high": `Hoog`,
      "menu.view.ray_tracing.edges_on": `Randen aan`,
      "menu.view.ray_tracing.edges_off": `Randen uit`,
      "menu.tools.palette": `Opdrachtenpalet\u2026`,
      "menu.tools.sketch": `Nieuwe schets`,
      "menu.help.about": `Info over vcad`,
      "menu.help.docs": `Documentatie openen`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `Maken`,
      "toolbar.tab.sketch": `Schets`,
      "toolbar.tab.transform": `Transformeren`,
      "toolbar.tab.combine": `Combineren`,
      "toolbar.tab.modify": `Wijzigen`,
      "toolbar.tab.assembly": `Samenstelling`,
      "toolbar.tab.simulate": `Simuleren`,
      "toolbar.tab.export": `Exporteren`,
      "toolbar.tool.box": `Doos`,
      "toolbar.tool.cyl": `Cil`,
      "toolbar.tool.sph": `Bol`,
      "toolbar.tool.cone": `Kegel`,
      "toolbar.tool.sketch": `Schets`,
      "toolbar.tool.move": `Verplaatsen`,
      "toolbar.tool.rotate": `Roteren`,
      "toolbar.tool.scale": `Schalen`,
      "toolbar.tool.union": `Vereniging`,
      "toolbar.tool.diff": `Versch`,
      "toolbar.tool.isect": `Doorsn`,
      "toolbar.tool.fillet": `Afronding`,
      "toolbar.tool.chamfer": `Afkanting`,
      "toolbar.tool.shell": `Schaal`,
      "toolbar.tool.pattern": `Patroon`,
      "toolbar.tool.mirror": `Spiegelen`,
      "toolbar.tool.part": `Onderdeel`,
      "toolbar.tool.instance": `Instantie`,
      "toolbar.tool.joint": `Verbinding`,
      "toolbar.tool.play": `Afspelen`,
      "toolbar.tool.pause": `Pauzeren`,
      "toolbar.tool.step": `Stap`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `Opslaan`,
      "toolbar.hint.numeric": `\u2190\u2192:aanpassen  Enter:toepassen  Esc:annuleren`,
      "toolbar.hint.text": `Enter:toepassen  Esc:annuleren`,
      "status.modified": `gewijzigd`,
      "status.saved": `opgeslagen`,
      "status.part": `{count} onderdeel`,
      "status.parts": `{count} onderdelen`,
      "status.sel": `{count} sel`,
      "status.console_empty": `console leeg`,
      "status.ago.now": `nu`,
      "status.ago.seconds": `{count}s`,
      "status.ago.minutes": `{count}m`,
      "status.ago.hours": `{count}u`,
      "welcome.tagline": `gratis parametrische cad voor iedereen`,
      "welcome.new_project": `Nieuw project`,
      "welcome.blank_project": `Leeg project`,
      "welcome.open_file": `Bestand openen`,
      "welcome.hint.new": `begeleide tutorial`,
      "welcome.hint.blank": `leeg canvas`,
      "welcome.hint.open": `:openen`,
      "welcome.footer": `\u2191\u2193 navigeren  enter selecteren  esc sluiten`,
      "tree.header": `ONDERDELEN`,
      "tree.empty": `Geen onderdelen`,
      "desktop.menu.open_recent": `Recent openen\u2026`,
      "desktop.menu.open_cloud": `Openen vanuit Cloud\u2026`,
      "desktop.menu.toggle_status_bar": `Statusbalk in-/uitschakelen`,
      "desktop.menu.camera_iso": `Isometrisch`,
      "desktop.menu.camera_fit": `Aanpassen aan selectie`,
      "desktop.menu.toggle_grid_snap": `Rasteruitlijning in-/uitschakelen`,
      "desktop.menu.slicer": `Slicer`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `Controleren op updates\u2026`,
      "desktop.menu.whats_new": `Wat is er nieuw`,
      "desktop.menu.documentation": `Documentatie`,
      "desktop.menu.camera_top": `Boven`,
      "desktop.menu.camera_front": `Voor`,
      "desktop.menu.camera_right": `Rechts`,
      "modal.about.tagline": `Parametrische CAD voor iedereen`,
      "modal.about.action.shape": `Vorm toevoegen`,
      "modal.about.action.shape_desc": `Doos, cilinder, bol`,
      "modal.about.action.sketch": `Schets starten`,
      "modal.about.action.sketch_desc": `2D tekenen \u2192 extruderen naar 3D`,
      "modal.about.action.open": `Bestand openen`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `Snelle tutorial`,
      "modal.about.action.tutorial_desc": `Leer de basis`,
      "modal.about.keyhint.palette": `Chat & opdrachten`,
      "modal.about.keyhint.tabs": `Werkbalktabbladen wisselen`,
      "modal.about.keyhint.transform": `Verplaatsen, Roteren, Schalen`,
      "modal.about.keyhint.boolean": `Booleaanse bewerkingen (2 geselecteerd)`,
      "modal.about.docs": `Docs`,
      "modal.about.whats_new": `Wat is er nieuw`,
      "footer.privacy": `Privacy`,
      "footer.terms": `Voorwaarden`,
      "footer.security": `Beveiliging`,
      "tutorial.add_cube.instruction": `Open Maken \u2192 klik op Doos`,
      "tutorial.add_cube.detail": `Voeg je eerste vorm toe aan de sc\xE8ne`,
      "tutorial.add_cylinder.instruction": `Open Maken \u2192 voeg een cilinder toe`,
      "tutorial.add_cylinder.detail": `We trekken deze van de kubus af`,
      "tutorial.position_cylinder.instruction": `Beweeg de cilinder omhoog`,
      "tutorial.position_cylinder.detail": `Sleep de groene pijl op de gizmo`,
      "tutorial.subtract.instruction": `Open Combineren \u2192 klik op Verschil`,
      "tutorial.subtract.detail": `Selecteer eerst beide onderdelen (\u2318-klik of slepen)`,
      "tutorial.celebrate.instruction": `Je hebt je eerste onderdeel gemaakt!`,
      "tutorial.celebrate.detail": `Je hebt de CSG-workflow geleerd`,
      "tutorial.skip": `Tutorial overslaan`,
      "tutorial.start_building": `Beginnen met bouwen`,
      "tutorial.skip_short": `tutorial overslaan`,
      "error.boundary.title": `er is iets misgegaan`,
      "error.boundary.unexpected": `Er is een onverwachte fout opgetreden`,
      "error.boundary.reload": `App herladen`,
      "error.boundary.cache_hint": `Als dit blijft gebeuren, probeer dan je browsercache te wissen.`,
      "error.engine": `engine-fout`,
      "status.offline": `Offline`,
      "status.console_open": `Console openen (~)`,
      "status.console_empty_title": `Console (leeg)`,
      "status.cursor_pos": `Cursorpositie op grondvlak (mm)`,
      "status.language": `Taal`,
      "banner.readonly.viewing": `Bekijken van {name} (alleen-lezen)`,
      "banner.readonly.fork": `Meld je aan om te forken`,
      "modal.fork.title": `Dit document is alleen-lezen`,
      "modal.fork.description": `Meld je aan om je eigen bewerkbare kopie te maken. Je wijzigingen raken het origineel niet \u2014 je krijgt een nieuwe fork in je account.`,
      "modal.fork.keep_viewing": `Blijven bekijken`,
      "modal.fork.signin": `Meld je aan om te forken`,
      "palette.placeholder": `Typ een opdracht of beschrijf wat je wilt maken...`,
      "palette.title": `Opdrachtenpalet`,
      "palette.generating": `Bezig met genereren...`,
      "palette.section.get_started": `Aan de slag`,
      "palette.section.examples": `Voorbeelden`,
      "palette.section.ask_ai_inline": `Of beschrijf wat je wilt maken`,
      "palette.section.ask_ai": `Vraag de AI`,
      "palette.action.new_project": `Nieuw project`,
      "palette.action.new_project_hint": `begeleide tutorial`,
      "palette.action.blank_project": `Leeg project`,
      "palette.action.blank_project_hint": `tutorial overslaan`,
      "palette.action.open_file": `Bestand openen`,
      "palette.generate_label": `Genereren:`,
      "palette.kbd_server": `server`,
      "palette.empty": `Geen opdrachten gevonden`,
      "palette.failed_to_load": `Kon bestand niet laden`,
      "panel.section.material": `Materiaal`,
      "panel.section.position": `Positie`,
      "panel.section.rotation": `Rotatie`,
      "panel.section.scale": `Schaal`,
      "panel.section.dimensions": `Afmetingen`,
      "panel.section.operation": `Bewerking`,
      "panel.section.profile": `Profiel`,
      "panel.section.path": `Pad`,
      "panel.section.depth": `Diepte`,
      "panel.section.angle": `Hoek`,
      "panel.section.axis": `As`,
      "panel.section.radius": `Straal`,
      "panel.section.distance": `Afstand`,
      "panel.section.thickness": `Dikte`,
      "panel.section.direction": `Richting`,
      "panel.section.count": `Aantal`,
      "panel.section.spacing": `Tussenruimte`,
      "panel.section.profiles": `Profielen`,
      "panel.section.closed": `Gesloten`,
      "panel.section.text": `Tekst`,
      "panel.section.size": `Grootte`,
      "panel.section.font": `Lettertype`,
      "panel.section.taper": `Taps`,
      "panel.section.twist": `Torsie`,
      "panel.section.orientation": `Ori\xEBntatie`,
      "panel.section.helix": `Helixpad`,
      "panel.section.quality": `Kwaliteit`,
      "panel.section.axis_origin": `Asoorsprong`,
      "panel.section.axis_dir": `Asrichting`,
      "panel.section.part_def": `Onderdeeldefinitie`,
      "panel.section.connection": `Verbinding`,
      "panel.section.state": `Status`,
      "panel.section.type": `Type`,
      "panel.section.mirror": `Spiegelen`,
      "panel.tooltip.material": `Een materiaal aan dit onderdeel toewijzen`,
      "panel.tooltip.material_instance": `Een materiaal aan deze instantie toewijzen`,
      "panel.tooltip.position": `Positieverplaatsing vanaf oorsprong (mm)`,
      "panel.tooltip.position_world": `Positie in wereldruimte (mm)`,
      "panel.tooltip.rotation": `Rotatiehoeken om elke as (graden)`,
      "panel.tooltip.rotation_world": `Rotatiehoeken in wereldruimte (graden)`,
      "panel.tooltip.scale": `Schaalfactor langs elke as`,
      "panel.tooltip.dimensions_box": `Breedte, hoogte en diepte van de doos (mm)`,
      "panel.tooltip.dimensions_cylinder": `Straal en hoogte van de cilinder (mm)`,
      "panel.tooltip.dimensions_sphere": `Straal van de bol (mm)`,
      "panel.tooltip.fillet_radius": `Afrondingsstraal (mm)`,
      "panel.tooltip.chamfer_distance": `Afkantingsafstand (mm)`,
      "panel.tooltip.shell_thickness": `Wanddikte (mm)`,
      "panel.tooltip.mirror_readonly": `Bewerken nog niet ondersteund`,
      "panel.back_to_tree": `Terug naar boom`,
      "panel.parts_selected": `{count} onderdelen geselecteerd`,
      "panel.select_single": `Selecteer \xE9\xE9n onderdeel om eigenschappen te bewerken`,
      "panel.edit_circuit": `Circuit bewerken`,
      "panel.open_embroidery": `Borduurpaneel openen`,
      "panel.parent": `Ouder:`,
      "panel.child": `Kind:`,
      "panel.ground": `Grond`,
      "panel.mirror_readonly": `Parameters van het spiegelvlak zijn alleen-lezen`,
      "bool.union": `Vereniging`,
      "bool.difference": `Verschil`,
      "bool.intersection": `Doorsnede`,
      "joint.fixed": `Vast`,
      "joint.revolute": `Scharnier`,
      "joint.slider": `Schuif`,
      "joint.cylindrical": `Cilindrisch`,
      "joint.ball": `Kogel`,
      "joint.free": `Vrij`,
      "joint.suffix": `Verbinding`,
      "tree.scene": `Sc\xE8ne`,
      "tree.parameters": `Parameters`,
      "tree.scene_tooltip": `Sc\xE8ne inspecteren (achtergrond, omgeving, lichten)`,
      "tree.parameters_tooltip": `Documentparameters bewerken (gekoppelde velden aansturen via expressies)`,
      "tree.sketch.label": `Schets`,
      "tree.sketch.discard_title": `Schets verwijderen?`,
      "tree.sketch.discard_msg": `Je hebt niet-opgeslagen geometrie.`,
      "tree.sketch.discard": `Verwijderen`,
      "tree.sketch.keep_editing": `Blijven bewerken`,
      "tree.sketch.cancelled": `Schets geannuleerd`,
      "tree.sketch.discarded": `Schets verwijderd`,
      "tree.sketch.entities": `Entiteiten ({count})`,
      "tree.sketch.constraints": `Beperkingen ({count})`,
      "tree.sketch.profiles": `Profielen ({count})`,
      "tree.sketch.profile": `Profiel {n}`,
      "tree.sketch.finish": `Voltooien`,
      "tree.sketch.finish_tooltip": `Schets voltooien`,
      "tree.sketch.apply_tooltip": `{label} toepassen`,
      "tree.sketch.cancel_tooltip": `Schets annuleren (Esc)`,
      "tree.sketch.delete_constraint": `Beperking verwijderen`
    },
    pl: {
      "cmd.add_box.label": `Dodaj prostopad\u0142o\u015Bcian`,
      "cmd.cube.label": `Dodaj sze\u015Bcian`,
      "cmd.cylinder.label": `Dodaj walec`,
      "cmd.sphere.label": `Dodaj kul\u0119`,
      "cmd.cone.label": `Dodaj sto\u017Cek`,
      "cmd.translate.label": `Przesu\u0144`,
      "cmd.rotate.label": `Obr\xF3\u0107`,
      "cmd.scale.label": `Skaluj`,
      "cmd.move_mode.label": `Tryb przesuwania`,
      "cmd.rotate_mode.label": `Tryb obracania`,
      "cmd.scale_mode.label": `Tryb skalowania`,
      "cmd.mirror.label": `Lustrzane odbicie`,
      "cmd.union.label": `Suma`,
      "cmd.difference.label": `R\xF3\u017Cnica`,
      "cmd.intersection.label": `Cz\u0119\u015B\u0107 wsp\xF3lna`,
      "cmd.fillet.label": `Zaokr\u0105glenie`,
      "cmd.chamfer.label": `Fazowanie`,
      "cmd.shell.label": `Skorupa`,
      "cmd.stitch.label": `Zszyj`,
      "cmd.linear_pattern.label": `Szyk liniowy`,
      "cmd.circular_pattern.label": `Szyk ko\u0142owy`,
      "cmd.delete.label": `Usu\u0144`,
      "cmd.delete_selected.label": `Usu\u0144 zaznaczone`,
      "cmd.undo.label": `Cofnij`,
      "cmd.redo.label": `Pon\xF3w`,
      "cmd.copy.label": `Kopiuj`,
      "cmd.paste.label": `Wklej`,
      "cmd.duplicate.label": `Duplikuj`,
      "cmd.select_all.label": `Zaznacz wszystko`,
      "cmd.deselect.label": `Odznacz`,
      "cmd.deselect_all.label": `Odznacz wszystko`,
      "cmd.new.label": `Nowy dokument`,
      "cmd.new_short.label": `Nowy`,
      "cmd.open.label": `Otw\xF3rz`,
      "cmd.open_dots.label": `Otw\xF3rz\u2026`,
      "cmd.open_cloud.label": `Otw\xF3rz z chmury\u2026`,
      "cmd.save.label": `Zapisz`,
      "cmd.export_stl.label": `Eksportuj STL`,
      "cmd.export_glb.label": `Eksportuj GLB`,
      "cmd.export_step.label": `Eksportuj STEP`,
      "cmd.quit.label": `Zako\u0144cz`,
      "cmd.toggle_sidebar.label": `Prze\u0142\u0105cz panel boczny`,
      "cmd.toggle_feature_tree.label": `Prze\u0142\u0105cz drzewo operacji`,
      "cmd.toggle_chat.label": `Prze\u0142\u0105cz czat`,
      "cmd.toggle_status_bar.label": `Prze\u0142\u0105cz pasek stanu`,
      "cmd.toggle_devtools.label": `Prze\u0142\u0105cz narz\u0119dzia deweloperskie`,
      "cmd.toggle_wireframe.label": `Prze\u0142\u0105cz widok kraw\u0119dziowy`,
      "cmd.toggle_grid_snap.label": `Prze\u0142\u0105cz przyci\u0105ganie do siatki`,
      "cmd.cycle_theme.label": `Zmie\u0144 motyw`,
      "cmd.camera_iso.label": `Widok izometryczny`,
      "cmd.camera_top.label": `Widok z g\xF3ry`,
      "cmd.camera_front.label": `Widok z przodu`,
      "cmd.camera_right.label": `Widok z prawej`,
      "cmd.camera_fit.label": `Dopasuj do ekranu`,
      "cmd.fit_to_view.label": `Dopasuj do widoku`,
      "cmd.palette.label": `Paleta polece\u0144`,
      "cmd.palette_dots.label": `Paleta polece\u0144\u2026`,
      "cmd.sketch.label": `Nowy szkic`,
      "cmd.sketch_dots.label": `Nowy szkic\u2026`,
      "cmd.slicer.label": `Drukuj (Slicer)\u2026`,
      "cmd.cam.label": `CAM (\u015Acie\u017Cka narz\u0119dzia)\u2026`,
      "cmd.about.label": `Informacje o vcad`,
      "cmd.whats_new.label": `Co nowego`,
      "cmd.open_docs.label": `Otw\xF3rz dokumentacj\u0119`,
      "cmd.documentation.label": `Dokumentacja`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `Utw\xF3rz definicj\u0119 cz\u0119\u015Bci`,
      "cmd.insert_instance.label": `Wstaw instancj\u0119`,
      "cmd.add_fixed_joint.label": `Dodaj po\u0142\u0105czenie sta\u0142e`,
      "cmd.add_revolute_joint.label": `Dodaj po\u0142\u0105czenie obrotowe`,
      "cmd.add_slider_joint.label": `Dodaj po\u0142\u0105czenie przesuwne`,
      "cmd.set_ground.label": `Ustaw jako podstaw\u0119`,
      "cmd.enter_electronics.label": `Otw\xF3rz elektronik\u0119`,
      "cmd.exit_electronics.label": `Zamknij elektronik\u0119`,
      "menu.file": `Plik`,
      "menu.edit": `Edycja`,
      "menu.view": `Widok`,
      "menu.tools": `Narz\u0119dzia`,
      "menu.help": `Pomoc`,
      "menu.file.new": `Nowy`,
      "menu.file.open": `Otw\xF3rz\u2026`,
      "menu.file.save": `Zapisz`,
      "menu.file.share_link": `Udost\u0119pnij link\u2026`,
      "menu.file.version_history": `Historia wersji\u2026`,
      "menu.file.export": `Eksportuj`,
      "menu.file.export_stl": `Eksportuj STL`,
      "menu.file.export_glb": `Eksportuj GLB`,
      "menu.file.export_step": `Eksportuj STEP`,
      "menu.file.examples": `Przyk\u0142ady`,
      "menu.file.quit": `Zako\u0144cz`,
      "menu.edit.undo": `Cofnij`,
      "menu.edit.redo": `Pon\xF3w`,
      "menu.edit.delete": `Usu\u0144`,
      "menu.edit.duplicate": `Duplikuj`,
      "menu.edit.select_all": `Zaznacz wszystko`,
      "menu.edit.deselect": `Odznacz`,
      "menu.view.toggle_sidebar": `Prze\u0142\u0105cz panel boczny`,
      "menu.view.toggle_chat": `Prze\u0142\u0105cz czat`,
      "menu.view.camera_iso": `Widok izometryczny`,
      "menu.view.camera_top": `Widok z g\xF3ry`,
      "menu.view.camera_front": `Widok z przodu`,
      "menu.view.camera_right": `Widok z prawej`,
      "menu.view.camera_fit": `Dopasuj do ekranu`,
      "menu.view.wireframe": `Widok kraw\u0119dziowy`,
      "menu.view.cycle_theme": `Zmie\u0144 motyw`,
      "menu.view.input_preferences": `Preferencje wprowadzania\u2026`,
      "menu.view.ray_tracing": `\u015Aledzenie promieni`,
      "menu.view.ray_tracing.off": `Wy\u0142\u0105czone`,
      "menu.view.ray_tracing.draft": `Szkic`,
      "menu.view.ray_tracing.standard": `Standardowe`,
      "menu.view.ray_tracing.high": `Wysokie`,
      "menu.view.ray_tracing.edges_on": `Kraw\u0119dzie w\u0142\u0105czone`,
      "menu.view.ray_tracing.edges_off": `Kraw\u0119dzie wy\u0142\u0105czone`,
      "menu.tools.palette": `Paleta polece\u0144\u2026`,
      "menu.tools.sketch": `Nowy szkic`,
      "menu.help.about": `Informacje o vcad`,
      "menu.help.docs": `Otw\xF3rz dokumentacj\u0119`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `Utw\xF3rz`,
      "toolbar.tab.sketch": `Szkic`,
      "toolbar.tab.transform": `Przekszta\u0142\u0107`,
      "toolbar.tab.combine": `Po\u0142\u0105cz`,
      "toolbar.tab.modify": `Modyfikuj`,
      "toolbar.tab.assembly": `Z\u0142o\u017Cenie`,
      "toolbar.tab.simulate": `Symuluj`,
      "toolbar.tab.export": `Eksportuj`,
      "toolbar.tool.box": `Pros.`,
      "toolbar.tool.cyl": `Wal.`,
      "toolbar.tool.sph": `Kula`,
      "toolbar.tool.cone": `Sto\u017C.`,
      "toolbar.tool.sketch": `Szkic`,
      "toolbar.tool.move": `Przesu\u0144`,
      "toolbar.tool.rotate": `Obr\xF3\u0107`,
      "toolbar.tool.scale": `Skaluj`,
      "toolbar.tool.union": `Suma`,
      "toolbar.tool.diff": `R\xF3\u017Cn.`,
      "toolbar.tool.isect": `Cz. wsp.`,
      "toolbar.tool.fillet": `Zaokr\u0105gl.`,
      "toolbar.tool.chamfer": `Faza`,
      "toolbar.tool.shell": `Skorupa`,
      "toolbar.tool.pattern": `Szyk`,
      "toolbar.tool.mirror": `Lustro`,
      "toolbar.tool.part": `Cz\u0119\u015B\u0107`,
      "toolbar.tool.instance": `Instancja`,
      "toolbar.tool.joint": `Po\u0142\u0105cz.`,
      "toolbar.tool.play": `Odtw\xF3rz`,
      "toolbar.tool.pause": `Pauza`,
      "toolbar.tool.step": `Krok`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `Zapisz`,
      "toolbar.hint.numeric": `\u2190\u2192:zmie\u0144  Enter:zastosuj  Esc:anuluj`,
      "toolbar.hint.text": `Enter:zastosuj  Esc:anuluj`,
      "status.modified": `zmodyfikowano`,
      "status.saved": `zapisano`,
      "status.part": `{count} cz\u0119\u015B\u0107`,
      "status.parts": `{count} cz\u0119\u015Bci`,
      "status.sel": `{count} zazn.`,
      "status.console_empty": `konsola pusta`,
      "status.ago.now": `teraz`,
      "status.ago.seconds": `{count}s`,
      "status.ago.minutes": `{count}m`,
      "status.ago.hours": `{count}h`,
      "welcome.tagline": `darmowy parametryczny CAD dla ka\u017Cdego`,
      "welcome.new_project": `Nowy projekt`,
      "welcome.blank_project": `Pusty projekt`,
      "welcome.open_file": `Otw\xF3rz plik`,
      "welcome.hint.new": `samouczek z przewodnikiem`,
      "welcome.hint.blank": `puste p\u0142\xF3tno`,
      "welcome.hint.open": `:otw\xF3rz`,
      "welcome.footer": `\u2191\u2193 nawiguj  enter wybierz  esc zamknij`,
      "tree.header": `CZ\u0118\u015ACI`,
      "tree.empty": `Brak cz\u0119\u015Bci`,
      "desktop.menu.open_recent": `Otw\xF3rz ostatnie\u2026`,
      "desktop.menu.open_cloud": `Otw\xF3rz z chmury\u2026`,
      "desktop.menu.toggle_status_bar": `Prze\u0142\u0105cz pasek stanu`,
      "desktop.menu.camera_iso": `Izometryczny`,
      "desktop.menu.camera_fit": `Dopasuj do zaznaczenia`,
      "desktop.menu.toggle_grid_snap": `Prze\u0142\u0105cz przyci\u0105ganie do siatki`,
      "desktop.menu.slicer": `Slicer`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `Sprawd\u017A aktualizacje\u2026`,
      "desktop.menu.whats_new": `Co nowego`,
      "desktop.menu.documentation": `Dokumentacja`,
      "desktop.menu.camera_top": `G\xF3ra`,
      "desktop.menu.camera_front": `Prz\xF3d`,
      "desktop.menu.camera_right": `Prawa`,
      "modal.about.tagline": `Parametryczny CAD dla ka\u017Cdego`,
      "modal.about.action.shape": `Dodaj kszta\u0142t`,
      "modal.about.action.shape_desc": `Prostopad\u0142o\u015Bcian, walec, kula`,
      "modal.about.action.sketch": `Rozpocznij szkic`,
      "modal.about.action.sketch_desc": `Narysuj 2D \u2192 wyci\u0105gnij do 3D`,
      "modal.about.action.open": `Otw\xF3rz plik`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `Szybki samouczek`,
      "modal.about.action.tutorial_desc": `Naucz si\u0119 podstaw`,
      "modal.about.keyhint.palette": `Czat i polecenia`,
      "modal.about.keyhint.tabs": `Prze\u0142\u0105czaj zak\u0142adki paska narz\u0119dzi`,
      "modal.about.keyhint.transform": `Przesu\u0144, Obr\xF3\u0107, Skaluj`,
      "modal.about.keyhint.boolean": `Operacje logiczne (2 zaznaczone)`,
      "modal.about.docs": `Dokumentacja`,
      "modal.about.whats_new": `Co nowego`,
      "footer.privacy": `Prywatno\u015B\u0107`,
      "footer.terms": `Warunki`,
      "footer.security": `Bezpiecze\u0144stwo`,
      "tutorial.add_cube.instruction": `Otw\xF3rz Utw\xF3rz \u2192 kliknij Prostopad\u0142o\u015Bcian`,
      "tutorial.add_cube.detail": `Dodaj sw\xF3j pierwszy kszta\u0142t do sceny`,
      "tutorial.add_cylinder.instruction": `Otw\xF3rz Utw\xF3rz \u2192 dodaj walec`,
      "tutorial.add_cylinder.detail": `Odejmiemy go od sze\u015Bcianu`,
      "tutorial.position_cylinder.instruction": `Przesu\u0144 walec w g\xF3r\u0119`,
      "tutorial.position_cylinder.detail": `Przeci\u0105gnij zielon\u0105 strza\u0142k\u0119 manipulatora`,
      "tutorial.subtract.instruction": `Otw\xF3rz Po\u0142\u0105cz \u2192 kliknij R\xF3\u017Cnica`,
      "tutorial.subtract.detail": `Najpierw zaznacz obie cz\u0119\u015Bci (\u2318-klik lub przeci\u0105gnij)`,
      "tutorial.celebrate.instruction": `Stworzy\u0142e\u015B swoj\u0105 pierwsz\u0105 cz\u0119\u015B\u0107!`,
      "tutorial.celebrate.detail": `Pozna\u0142e\u015B przep\u0142yw pracy CSG`,
      "tutorial.skip": `Pomi\u0144 samouczek`,
      "tutorial.start_building": `Zacznij budowa\u0107`,
      "tutorial.skip_short": `pomi\u0144 samouczek`,
      "error.boundary.title": `co\u015B posz\u0142o nie tak`,
      "error.boundary.unexpected": `Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d`,
      "error.boundary.reload": `Za\u0142aduj ponownie`,
      "error.boundary.cache_hint": `Je\u015Bli problem si\u0119 powtarza, spr\xF3buj wyczy\u015Bci\u0107 pami\u0119\u0107 podr\u0119czn\u0105 przegl\u0105darki.`,
      "error.engine": `b\u0142\u0105d silnika`,
      "status.offline": `Offline`,
      "status.console_open": `Otw\xF3rz konsol\u0119 (~)`,
      "status.console_empty_title": `Konsola (pusta)`,
      "status.cursor_pos": `Pozycja kursora na p\u0142aszczy\u017Anie podstawy (mm)`,
      "status.language": `J\u0119zyk`,
      "banner.readonly.viewing": `Wy\u015Bwietlanie {name} (tylko do odczytu)`,
      "banner.readonly.fork": `Zaloguj si\u0119, aby utworzy\u0107 kopi\u0119`,
      "modal.fork.title": `Ten dokument jest tylko do odczytu`,
      "modal.fork.description": `Zaloguj si\u0119, aby utworzy\u0107 w\u0142asn\u0105 edytowaln\u0105 kopi\u0119. Twoje zmiany nie wp\u0142yn\u0105 na orygina\u0142 \u2014 otrzymasz \u015Bwie\u017C\u0105 kopi\u0119 na swoim koncie.`,
      "modal.fork.keep_viewing": `Kontynuuj przegl\u0105danie`,
      "modal.fork.signin": `Zaloguj si\u0119, aby utworzy\u0107 kopi\u0119`,
      "palette.placeholder": `Wpisz polecenie lub opisz, co utworzy\u0107...`,
      "palette.title": `Paleta polece\u0144`,
      "palette.generating": `Generowanie...`,
      "palette.section.get_started": `Pierwsze kroki`,
      "palette.section.examples": `Przyk\u0142ady`,
      "palette.section.ask_ai_inline": `Lub opisz, co utworzy\u0107`,
      "palette.section.ask_ai": `Zapytaj AI`,
      "palette.action.new_project": `Nowy projekt`,
      "palette.action.new_project_hint": `samouczek z przewodnikiem`,
      "palette.action.blank_project": `Pusty projekt`,
      "palette.action.blank_project_hint": `pomi\u0144 samouczek`,
      "palette.action.open_file": `Otw\xF3rz plik`,
      "palette.generate_label": `Generuj:`,
      "palette.kbd_server": `serwer`,
      "palette.empty": `Nie znaleziono polece\u0144`,
      "palette.failed_to_load": `Nie uda\u0142o si\u0119 za\u0142adowa\u0107 pliku`,
      "panel.section.material": `Materia\u0142`,
      "panel.section.position": `Pozycja`,
      "panel.section.rotation": `Obr\xF3t`,
      "panel.section.scale": `Skala`,
      "panel.section.dimensions": `Wymiary`,
      "panel.section.operation": `Operacja`,
      "panel.section.profile": `Profil`,
      "panel.section.path": `\u015Acie\u017Cka`,
      "panel.section.depth": `G\u0142\u0119boko\u015B\u0107`,
      "panel.section.angle": `K\u0105t`,
      "panel.section.axis": `O\u015B`,
      "panel.section.radius": `Promie\u0144`,
      "panel.section.distance": `Odleg\u0142o\u015B\u0107`,
      "panel.section.thickness": `Grubo\u015B\u0107`,
      "panel.section.direction": `Kierunek`,
      "panel.section.count": `Liczba`,
      "panel.section.spacing": `Odst\u0119p`,
      "panel.section.profiles": `Profile`,
      "panel.section.closed": `Zamkni\u0119ty`,
      "panel.section.text": `Tekst`,
      "panel.section.size": `Rozmiar`,
      "panel.section.font": `Czcionka`,
      "panel.section.taper": `Zw\u0119\u017Cenie`,
      "panel.section.twist": `Skr\u0119cenie`,
      "panel.section.orientation": `Orientacja`,
      "panel.section.helix": `\u015Acie\u017Cka helisy`,
      "panel.section.quality": `Jako\u015B\u0107`,
      "panel.section.axis_origin": `Pocz\u0105tek osi`,
      "panel.section.axis_dir": `Kierunek osi`,
      "panel.section.part_def": `Definicja cz\u0119\u015Bci`,
      "panel.section.connection": `Po\u0142\u0105czenie`,
      "panel.section.state": `Stan`,
      "panel.section.type": `Typ`,
      "panel.section.mirror": `Lustrzane odbicie`,
      "panel.tooltip.material": `Przypisz materia\u0142 do tej cz\u0119\u015Bci`,
      "panel.tooltip.material_instance": `Przypisz materia\u0142 do tej instancji`,
      "panel.tooltip.position": `Przesuni\u0119cie pozycji od pocz\u0105tku uk\u0142adu (mm)`,
      "panel.tooltip.position_world": `Pozycja w przestrzeni globalnej (mm)`,
      "panel.tooltip.rotation": `K\u0105ty obrotu wok\xF3\u0142 ka\u017Cdej osi (stopnie)`,
      "panel.tooltip.rotation_world": `K\u0105ty obrotu w przestrzeni globalnej (stopnie)`,
      "panel.tooltip.scale": `Wsp\xF3\u0142czynnik skali wzd\u0142u\u017C ka\u017Cdej osi`,
      "panel.tooltip.dimensions_box": `Szeroko\u015B\u0107, wysoko\u015B\u0107 i g\u0142\u0119boko\u015B\u0107 prostopad\u0142o\u015Bcianu (mm)`,
      "panel.tooltip.dimensions_cylinder": `Promie\u0144 i wysoko\u015B\u0107 walca (mm)`,
      "panel.tooltip.dimensions_sphere": `Promie\u0144 kuli (mm)`,
      "panel.tooltip.fillet_radius": `Promie\u0144 zaokr\u0105glenia (mm)`,
      "panel.tooltip.chamfer_distance": `Odleg\u0142o\u015B\u0107 fazowania (mm)`,
      "panel.tooltip.shell_thickness": `Grubo\u015B\u0107 \u015Bcianki (mm)`,
      "panel.tooltip.mirror_readonly": `Edycja nie jest jeszcze obs\u0142ugiwana`,
      "panel.back_to_tree": `Powr\xF3t do drzewa`,
      "panel.parts_selected": `Zaznaczono {count} cz\u0119\u015Bci`,
      "panel.select_single": `Zaznacz pojedyncz\u0105 cz\u0119\u015B\u0107, aby edytowa\u0107 w\u0142a\u015Bciwo\u015Bci`,
      "panel.edit_circuit": `Edytuj obw\xF3d`,
      "panel.open_embroidery": `Otw\xF3rz panel haftu`,
      "panel.parent": `Rodzic:`,
      "panel.child": `Dziecko:`,
      "panel.ground": `Podstawa`,
      "panel.mirror_readonly": `Parametry p\u0142aszczyzny lustra s\u0105 tylko do odczytu`,
      "bool.union": `Suma`,
      "bool.difference": `R\xF3\u017Cnica`,
      "bool.intersection": `Cz\u0119\u015B\u0107 wsp\xF3lna`,
      "joint.fixed": `Sta\u0142e`,
      "joint.revolute": `Obrotowe`,
      "joint.slider": `Przesuwne`,
      "joint.cylindrical": `Cylindryczne`,
      "joint.ball": `Kuliste`,
      "joint.free": `Swobodny`,
      "joint.suffix": `Po\u0142\u0105czenie`,
      "tree.scene": `Scena`,
      "tree.parameters": `Parametry`,
      "tree.scene_tooltip": `Sprawd\u017A scen\u0119 (t\u0142o, \u015Brodowisko, \u015Bwiat\u0142a)`,
      "tree.parameters_tooltip": `Edytuj parametry dokumentu (steruj powi\u0105zanymi polami za pomoc\u0105 wyra\u017Ce\u0144)`,
      "tree.sketch.label": `Szkic`,
      "tree.sketch.discard_title": `Odrzuci\u0107 szkic?`,
      "tree.sketch.discard_msg": `Masz niezapisan\u0105 geometri\u0119.`,
      "tree.sketch.discard": `Odrzu\u0107`,
      "tree.sketch.keep_editing": `Kontynuuj edycj\u0119`,
      "tree.sketch.cancelled": `Szkic anulowany`,
      "tree.sketch.discarded": `Szkic odrzucony`,
      "tree.sketch.entities": `Obiekty ({count})`,
      "tree.sketch.constraints": `Wi\u0105zania ({count})`,
      "tree.sketch.profiles": `Profile ({count})`,
      "tree.sketch.profile": `Profil {n}`,
      "tree.sketch.finish": `Zako\u0144cz`,
      "tree.sketch.finish_tooltip": `Zako\u0144cz szkic`,
      "tree.sketch.apply_tooltip": `Zastosuj {label}`,
      "tree.sketch.cancel_tooltip": `Anuluj szkic (Esc)`,
      "tree.sketch.delete_constraint": `Usu\u0144 wi\u0105zanie`
    },
    pt: {
      "cmd.add_box.label": `Adicionar Caixa`,
      "cmd.cube.label": `Adicionar Cubo`,
      "cmd.cylinder.label": `Adicionar Cilindro`,
      "cmd.sphere.label": `Adicionar Esfera`,
      "cmd.cone.label": `Adicionar Cone`,
      "cmd.translate.label": `Mover`,
      "cmd.rotate.label": `Girar`,
      "cmd.scale.label": `Escalar`,
      "cmd.move_mode.label": `Modo Mover`,
      "cmd.rotate_mode.label": `Modo Girar`,
      "cmd.scale_mode.label": `Modo Escalar`,
      "cmd.mirror.label": `Espelhar`,
      "cmd.union.label": `Uni\xE3o`,
      "cmd.difference.label": `Diferen\xE7a`,
      "cmd.intersection.label": `Interse\xE7\xE3o`,
      "cmd.fillet.label": `Arredondamento`,
      "cmd.chamfer.label": `Chanfro`,
      "cmd.shell.label": `Casca`,
      "cmd.stitch.label": `Costurar`,
      "cmd.linear_pattern.label": `Padr\xE3o Linear`,
      "cmd.circular_pattern.label": `Padr\xE3o Circular`,
      "cmd.delete.label": `Excluir`,
      "cmd.delete_selected.label": `Excluir Sele\xE7\xE3o`,
      "cmd.undo.label": `Desfazer`,
      "cmd.redo.label": `Refazer`,
      "cmd.copy.label": `Copiar`,
      "cmd.paste.label": `Colar`,
      "cmd.duplicate.label": `Duplicar`,
      "cmd.select_all.label": `Selecionar Tudo`,
      "cmd.deselect.label": `Desselecionar`,
      "cmd.deselect_all.label": `Desselecionar Tudo`,
      "cmd.new.label": `Novo Documento`,
      "cmd.new_short.label": `Novo`,
      "cmd.open.label": `Abrir`,
      "cmd.open_dots.label": `Abrir\u2026`,
      "cmd.open_cloud.label": `Abrir da Nuvem\u2026`,
      "cmd.save.label": `Salvar`,
      "cmd.export_stl.label": `Exportar STL`,
      "cmd.export_glb.label": `Exportar GLB`,
      "cmd.export_step.label": `Exportar STEP`,
      "cmd.quit.label": `Sair`,
      "cmd.toggle_sidebar.label": `Alternar Barra Lateral`,
      "cmd.toggle_feature_tree.label": `Alternar \xC1rvore de Recursos`,
      "cmd.toggle_chat.label": `Alternar Chat`,
      "cmd.toggle_status_bar.label": `Alternar Barra de Status`,
      "cmd.toggle_devtools.label": `Alternar Ferramentas de Desenvolvedor`,
      "cmd.toggle_wireframe.label": `Alternar Aramado`,
      "cmd.toggle_grid_snap.label": `Alternar Encaixe na Grade`,
      "cmd.cycle_theme.label": `Alternar Tema`,
      "cmd.camera_iso.label": `Vista Isom\xE9trica`,
      "cmd.camera_top.label": `Vista Superior`,
      "cmd.camera_front.label": `Vista Frontal`,
      "cmd.camera_right.label": `Vista Direita`,
      "cmd.camera_fit.label": `Ajustar \xE0 Tela`,
      "cmd.fit_to_view.label": `Ajustar \xE0 Vista`,
      "cmd.palette.label": `Paleta de Comandos`,
      "cmd.palette_dots.label": `Paleta de Comandos\u2026`,
      "cmd.sketch.label": `Novo Esbo\xE7o`,
      "cmd.sketch_dots.label": `Novo Esbo\xE7o\u2026`,
      "cmd.slicer.label": `Imprimir (Fatiador)\u2026`,
      "cmd.cam.label": `CAM (Trajet\xF3ria)\u2026`,
      "cmd.about.label": `Sobre o vcad`,
      "cmd.whats_new.label": `Novidades`,
      "cmd.open_docs.label": `Abrir Documenta\xE7\xE3o`,
      "cmd.documentation.label": `Documenta\xE7\xE3o`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `Criar Defini\xE7\xE3o de Pe\xE7a`,
      "cmd.insert_instance.label": `Inserir Inst\xE2ncia`,
      "cmd.add_fixed_joint.label": `Adicionar Junta Fixa`,
      "cmd.add_revolute_joint.label": `Adicionar Junta de Revolu\xE7\xE3o`,
      "cmd.add_slider_joint.label": `Adicionar Junta Deslizante`,
      "cmd.set_ground.label": `Definir como Base`,
      "cmd.enter_electronics.label": `Abrir Eletr\xF4nica`,
      "cmd.exit_electronics.label": `Fechar Eletr\xF4nica`,
      "menu.file": `Arquivo`,
      "menu.edit": `Editar`,
      "menu.view": `Visualizar`,
      "menu.tools": `Ferramentas`,
      "menu.help": `Ajuda`,
      "menu.file.new": `Novo`,
      "menu.file.open": `Abrir\u2026`,
      "menu.file.save": `Salvar`,
      "menu.file.share_link": `Compartilhar link\u2026`,
      "menu.file.version_history": `Hist\xF3rico de vers\xF5es\u2026`,
      "menu.file.export": `Exportar`,
      "menu.file.export_stl": `Exportar STL`,
      "menu.file.export_glb": `Exportar GLB`,
      "menu.file.export_step": `Exportar STEP`,
      "menu.file.examples": `Exemplos`,
      "menu.file.quit": `Sair`,
      "menu.edit.undo": `Desfazer`,
      "menu.edit.redo": `Refazer`,
      "menu.edit.delete": `Excluir`,
      "menu.edit.duplicate": `Duplicar`,
      "menu.edit.select_all": `Selecionar Tudo`,
      "menu.edit.deselect": `Desselecionar`,
      "menu.view.toggle_sidebar": `Alternar Barra Lateral`,
      "menu.view.toggle_chat": `Alternar Chat`,
      "menu.view.camera_iso": `Vista Isom\xE9trica`,
      "menu.view.camera_top": `Vista Superior`,
      "menu.view.camera_front": `Vista Frontal`,
      "menu.view.camera_right": `Vista Direita`,
      "menu.view.camera_fit": `Ajustar \xE0 Tela`,
      "menu.view.wireframe": `Aramado`,
      "menu.view.cycle_theme": `Alternar Tema`,
      "menu.view.input_preferences": `Prefer\xEAncias de Entrada\u2026`,
      "menu.view.ray_tracing": `Tra\xE7ado de Raios`,
      "menu.view.ray_tracing.off": `Desligado`,
      "menu.view.ray_tracing.draft": `Rascunho`,
      "menu.view.ray_tracing.standard": `Padr\xE3o`,
      "menu.view.ray_tracing.high": `Alto`,
      "menu.view.ray_tracing.edges_on": `Arestas Ativadas`,
      "menu.view.ray_tracing.edges_off": `Arestas Desativadas`,
      "menu.tools.palette": `Paleta de Comandos\u2026`,
      "menu.tools.sketch": `Novo Esbo\xE7o`,
      "menu.help.about": `Sobre o vcad`,
      "menu.help.docs": `Abrir Documenta\xE7\xE3o`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `Criar`,
      "toolbar.tab.sketch": `Esbo\xE7o`,
      "toolbar.tab.transform": `Transformar`,
      "toolbar.tab.combine": `Combinar`,
      "toolbar.tab.modify": `Modificar`,
      "toolbar.tab.assembly": `Montagem`,
      "toolbar.tab.simulate": `Simular`,
      "toolbar.tab.export": `Exportar`,
      "toolbar.tool.box": `Caixa`,
      "toolbar.tool.cyl": `Cil`,
      "toolbar.tool.sph": `Esf`,
      "toolbar.tool.cone": `Cone`,
      "toolbar.tool.sketch": `Esbo\xE7o`,
      "toolbar.tool.move": `Mover`,
      "toolbar.tool.rotate": `Girar`,
      "toolbar.tool.scale": `Escalar`,
      "toolbar.tool.union": `Uni\xE3o`,
      "toolbar.tool.diff": `Dif`,
      "toolbar.tool.isect": `Inter`,
      "toolbar.tool.fillet": `Arredondar`,
      "toolbar.tool.chamfer": `Chanfro`,
      "toolbar.tool.shell": `Casca`,
      "toolbar.tool.pattern": `Padr\xE3o`,
      "toolbar.tool.mirror": `Espelhar`,
      "toolbar.tool.part": `Pe\xE7a`,
      "toolbar.tool.instance": `Inst\xE2ncia`,
      "toolbar.tool.joint": `Junta`,
      "toolbar.tool.play": `Reproduzir`,
      "toolbar.tool.pause": `Pausar`,
      "toolbar.tool.step": `Passo`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `Salvar`,
      "toolbar.hint.numeric": `\u2190\u2192:ajustar  Enter:aplicar  Esc:cancelar`,
      "toolbar.hint.text": `Enter:aplicar  Esc:cancelar`,
      "status.modified": `modificado`,
      "status.saved": `salvo`,
      "status.part": `{count} pe\xE7a`,
      "status.parts": `{count} pe\xE7as`,
      "status.sel": `{count} sel`,
      "status.console_empty": `console vazio`,
      "status.ago.now": `agora`,
      "status.ago.seconds": `{count}s`,
      "status.ago.minutes": `{count}m`,
      "status.ago.hours": `{count}h`,
      "welcome.tagline": `cad param\xE9trico gratuito para todos`,
      "welcome.new_project": `Novo Projeto`,
      "welcome.blank_project": `Projeto em Branco`,
      "welcome.open_file": `Abrir Arquivo`,
      "welcome.hint.new": `tutorial guiado`,
      "welcome.hint.blank": `tela em branco`,
      "welcome.hint.open": `:abrir`,
      "welcome.footer": `\u2191\u2193 navegar  enter selecionar  esc dispensar`,
      "tree.header": `PE\xC7AS`,
      "tree.empty": `Nenhuma pe\xE7a`,
      "desktop.menu.open_recent": `Abrir Recente\u2026`,
      "desktop.menu.open_cloud": `Abrir da Nuvem\u2026`,
      "desktop.menu.toggle_status_bar": `Alternar Barra de Status`,
      "desktop.menu.camera_iso": `Isom\xE9trica`,
      "desktop.menu.camera_fit": `Ajustar \xE0 Sele\xE7\xE3o`,
      "desktop.menu.toggle_grid_snap": `Alternar Encaixe na Grade`,
      "desktop.menu.slicer": `Fatiador`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `Verificar Atualiza\xE7\xF5es\u2026`,
      "desktop.menu.whats_new": `Novidades`,
      "desktop.menu.documentation": `Documenta\xE7\xE3o`,
      "desktop.menu.camera_top": `Superior`,
      "desktop.menu.camera_front": `Frontal`,
      "desktop.menu.camera_right": `Direita`,
      "modal.about.tagline": `CAD param\xE9trico para todos`,
      "modal.about.action.shape": `Adicionar uma forma`,
      "modal.about.action.shape_desc": `Caixa, cilindro, esfera`,
      "modal.about.action.sketch": `Iniciar um esbo\xE7o`,
      "modal.about.action.sketch_desc": `Desenhar 2D \u2192 extrudar para 3D`,
      "modal.about.action.open": `Abrir arquivo`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `Tutorial r\xE1pido`,
      "modal.about.action.tutorial_desc": `Aprenda o b\xE1sico`,
      "modal.about.keyhint.palette": `Chat e comandos`,
      "modal.about.keyhint.tabs": `Alternar abas da barra`,
      "modal.about.keyhint.transform": `Mover, Girar, Escalar`,
      "modal.about.keyhint.boolean": `Ops booleanas (2 selecionados)`,
      "modal.about.docs": `Docs`,
      "modal.about.whats_new": `Novidades`,
      "footer.privacy": `Privacidade`,
      "footer.terms": `Termos`,
      "footer.security": `Seguran\xE7a`,
      "tutorial.add_cube.instruction": `Abra Criar \u2192 clique em Caixa`,
      "tutorial.add_cube.detail": `Adicione sua primeira forma \xE0 cena`,
      "tutorial.add_cylinder.instruction": `Abra Criar \u2192 adicione um Cilindro`,
      "tutorial.add_cylinder.detail": `Vamos subtra\xED-lo do cubo`,
      "tutorial.position_cylinder.instruction": `Mova o cilindro para cima`,
      "tutorial.position_cylinder.detail": `Arraste a seta verde do gizmo`,
      "tutorial.subtract.instruction": `Abra Combinar \u2192 clique em Diferen\xE7a`,
      "tutorial.subtract.detail": `Selecione as duas pe\xE7as primeiro (\u2318-clique ou arrastar)`,
      "tutorial.celebrate.instruction": `Voc\xEA criou sua primeira pe\xE7a!`,
      "tutorial.celebrate.detail": `Voc\xEA aprendeu o fluxo CSG`,
      "tutorial.skip": `Pular tutorial`,
      "tutorial.start_building": `Come\xE7ar a construir`,
      "tutorial.skip_short": `pular tutorial`,
      "error.boundary.title": `algo deu errado`,
      "error.boundary.unexpected": `Ocorreu um erro inesperado`,
      "error.boundary.reload": `Recarregar App`,
      "error.boundary.cache_hint": `Se isso continuar acontecendo, tente limpar o cache do navegador.`,
      "error.engine": `erro do mecanismo`,
      "status.offline": `Offline`,
      "status.console_open": `Abrir console (~)`,
      "status.console_empty_title": `Console (vazio)`,
      "status.cursor_pos": `Posi\xE7\xE3o do cursor no plano do ch\xE3o (mm)`,
      "status.language": `Idioma`,
      "banner.readonly.viewing": `Visualizando {name} (somente leitura)`,
      "banner.readonly.fork": `Entre para bifurcar`,
      "modal.fork.title": `Este documento \xE9 somente leitura`,
      "modal.fork.description": `Entre para criar sua pr\xF3pria c\xF3pia edit\xE1vel. Suas edi\xE7\xF5es n\xE3o afetar\xE3o o original \u2014 voc\xEA ter\xE1 uma nova bifurca\xE7\xE3o em sua conta.`,
      "modal.fork.keep_viewing": `Continuar visualizando`,
      "modal.fork.signin": `Entre para bifurcar`,
      "palette.placeholder": `Digite um comando ou descreva o que criar...`,
      "palette.title": `Paleta de Comandos`,
      "palette.generating": `Gerando...`,
      "palette.section.get_started": `Come\xE7ar`,
      "palette.section.examples": `Exemplos`,
      "palette.section.ask_ai_inline": `Ou descreva o que criar`,
      "palette.section.ask_ai": `Perguntar \xE0 IA`,
      "palette.action.new_project": `Novo Projeto`,
      "palette.action.new_project_hint": `tutorial guiado`,
      "palette.action.blank_project": `Projeto em Branco`,
      "palette.action.blank_project_hint": `pular tutorial`,
      "palette.action.open_file": `Abrir Arquivo`,
      "palette.generate_label": `Gerar:`,
      "palette.kbd_server": `servidor`,
      "palette.empty": `Nenhum comando encontrado`,
      "palette.failed_to_load": `Falha ao carregar arquivo`,
      "panel.section.material": `Material`,
      "panel.section.position": `Posi\xE7\xE3o`,
      "panel.section.rotation": `Rota\xE7\xE3o`,
      "panel.section.scale": `Escala`,
      "panel.section.dimensions": `Dimens\xF5es`,
      "panel.section.operation": `Opera\xE7\xE3o`,
      "panel.section.profile": `Perfil`,
      "panel.section.path": `Caminho`,
      "panel.section.depth": `Profundidade`,
      "panel.section.angle": `\xC2ngulo`,
      "panel.section.axis": `Eixo`,
      "panel.section.radius": `Raio`,
      "panel.section.distance": `Dist\xE2ncia`,
      "panel.section.thickness": `Espessura`,
      "panel.section.direction": `Dire\xE7\xE3o`,
      "panel.section.count": `Quantidade`,
      "panel.section.spacing": `Espa\xE7amento`,
      "panel.section.profiles": `Perfis`,
      "panel.section.closed": `Fechado`,
      "panel.section.text": `Texto`,
      "panel.section.size": `Tamanho`,
      "panel.section.font": `Fonte`,
      "panel.section.taper": `C\xF4nico`,
      "panel.section.twist": `Tor\xE7\xE3o`,
      "panel.section.orientation": `Orienta\xE7\xE3o`,
      "panel.section.helix": `Caminho Helicoidal`,
      "panel.section.quality": `Qualidade`,
      "panel.section.axis_origin": `Origem do Eixo`,
      "panel.section.axis_dir": `Dire\xE7\xE3o do Eixo`,
      "panel.section.part_def": `Defini\xE7\xE3o de Pe\xE7a`,
      "panel.section.connection": `Conex\xE3o`,
      "panel.section.state": `Estado`,
      "panel.section.type": `Tipo`,
      "panel.section.mirror": `Espelhamento`,
      "panel.tooltip.material": `Atribuir um material a esta pe\xE7a`,
      "panel.tooltip.material_instance": `Atribuir um material a esta inst\xE2ncia`,
      "panel.tooltip.position": `Deslocamento da posi\xE7\xE3o em rela\xE7\xE3o \xE0 origem (mm)`,
      "panel.tooltip.position_world": `Posi\xE7\xE3o no espa\xE7o do mundo (mm)`,
      "panel.tooltip.rotation": `\xC2ngulos de rota\xE7\xE3o em torno de cada eixo (graus)`,
      "panel.tooltip.rotation_world": `\xC2ngulos de rota\xE7\xE3o no espa\xE7o do mundo (graus)`,
      "panel.tooltip.scale": `Fator de escala ao longo de cada eixo`,
      "panel.tooltip.dimensions_box": `Largura, altura e profundidade da caixa (mm)`,
      "panel.tooltip.dimensions_cylinder": `Raio e altura do cilindro (mm)`,
      "panel.tooltip.dimensions_sphere": `Raio da esfera (mm)`,
      "panel.tooltip.fillet_radius": `Raio do arredondamento (mm)`,
      "panel.tooltip.chamfer_distance": `Dist\xE2ncia do chanfro (mm)`,
      "panel.tooltip.shell_thickness": `Espessura da parede (mm)`,
      "panel.tooltip.mirror_readonly": `Edi\xE7\xE3o ainda n\xE3o suportada`,
      "panel.back_to_tree": `Voltar \xE0 \xE1rvore`,
      "panel.parts_selected": `{count} pe\xE7as selecionadas`,
      "panel.select_single": `Selecione uma \xFAnica pe\xE7a para editar propriedades`,
      "panel.edit_circuit": `Editar Circuito`,
      "panel.open_embroidery": `Abrir Painel de Bordado`,
      "panel.parent": `Pai:`,
      "panel.child": `Filho:`,
      "panel.ground": `Base`,
      "panel.mirror_readonly": `Os par\xE2metros do plano de espelhamento s\xE3o somente leitura`,
      "bool.union": `Uni\xE3o`,
      "bool.difference": `Diferen\xE7a`,
      "bool.intersection": `Interse\xE7\xE3o`,
      "joint.fixed": `Fixa`,
      "joint.revolute": `Revolu\xE7\xE3o`,
      "joint.slider": `Deslizante`,
      "joint.cylindrical": `Cil\xEDndrica`,
      "joint.ball": `Esf\xE9rica`,
      "joint.free": `Livre`,
      "joint.suffix": `Junta`,
      "tree.scene": `Cena`,
      "tree.parameters": `Par\xE2metros`,
      "tree.scene_tooltip": `Inspecionar cena (fundo, ambiente, luzes)`,
      "tree.parameters_tooltip": `Editar par\xE2metros do documento (controla campos vinculados via express\xF5es)`,
      "tree.sketch.label": `Esbo\xE7o`,
      "tree.sketch.discard_title": `Descartar esbo\xE7o?`,
      "tree.sketch.discard_msg": `Voc\xEA tem geometria n\xE3o salva.`,
      "tree.sketch.discard": `Descartar`,
      "tree.sketch.keep_editing": `Continuar editando`,
      "tree.sketch.cancelled": `Esbo\xE7o cancelado`,
      "tree.sketch.discarded": `Esbo\xE7o descartado`,
      "tree.sketch.entities": `Entidades ({count})`,
      "tree.sketch.constraints": `Restri\xE7\xF5es ({count})`,
      "tree.sketch.profiles": `Perfis ({count})`,
      "tree.sketch.profile": `Perfil {n}`,
      "tree.sketch.finish": `Concluir`,
      "tree.sketch.finish_tooltip": `Concluir esbo\xE7o`,
      "tree.sketch.apply_tooltip": `Aplicar {label}`,
      "tree.sketch.cancel_tooltip": `Cancelar esbo\xE7o (Esc)`,
      "tree.sketch.delete_constraint": `Excluir restri\xE7\xE3o`
    },
    ru: {
      "cmd.add_box.label": `\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u0435\u043F\u0438\u043F\u0435\u0434`,
      "cmd.cube.label": `\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0443\u0431`,
      "cmd.cylinder.label": `\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0446\u0438\u043B\u0438\u043D\u0434\u0440`,
      "cmd.sphere.label": `\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0444\u0435\u0440\u0443`,
      "cmd.cone.label": `\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0443\u0441`,
      "cmd.translate.label": `\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C`,
      "cmd.rotate.label": `\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C`,
      "cmd.scale.label": `\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C`,
      "cmd.move_mode.label": `\u0420\u0435\u0436\u0438\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F`,
      "cmd.rotate_mode.label": `\u0420\u0435\u0436\u0438\u043C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430`,
      "cmd.scale_mode.label": `\u0420\u0435\u0436\u0438\u043C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F`,
      "cmd.mirror.label": `\u0417\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u0438\u0435`,
      "cmd.union.label": `\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435`,
      "cmd.difference.label": `\u0412\u044B\u0447\u0438\u0442\u0430\u043D\u0438\u0435`,
      "cmd.intersection.label": `\u041F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435`,
      "cmd.fillet.label": `\u0421\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435`,
      "cmd.chamfer.label": `\u0424\u0430\u0441\u043A\u0430`,
      "cmd.shell.label": `\u041E\u0431\u043E\u043B\u043E\u0447\u043A\u0430`,
      "cmd.stitch.label": `\u0421\u0448\u0438\u0432\u0430\u043D\u0438\u0435`,
      "cmd.linear_pattern.label": `\u041B\u0438\u043D\u0435\u0439\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432`,
      "cmd.circular_pattern.label": `\u041A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0441\u0441\u0438\u0432`,
      "cmd.delete.label": `\u0423\u0434\u0430\u043B\u0438\u0442\u044C`,
      "cmd.delete_selected.label": `\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435`,
      "cmd.undo.label": `\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C`,
      "cmd.redo.label": `\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C`,
      "cmd.copy.label": `\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C`,
      "cmd.paste.label": `\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C`,
      "cmd.duplicate.label": `\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C`,
      "cmd.select_all.label": `\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0441\u0451`,
      "cmd.deselect.label": `\u0421\u043D\u044F\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435`,
      "cmd.deselect_all.label": `\u0421\u043D\u044F\u0442\u044C \u0432\u0441\u0451 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435`,
      "cmd.new.label": `\u041D\u043E\u0432\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442`,
      "cmd.new_short.label": `\u0421\u043E\u0437\u0434\u0430\u0442\u044C`,
      "cmd.open.label": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C`,
      "cmd.open_dots.label": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C\u2026`,
      "cmd.open_cloud.label": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u0437 \u043E\u0431\u043B\u0430\u043A\u0430\u2026`,
      "cmd.save.label": `\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`,
      "cmd.export_stl.label": `\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0432 STL`,
      "cmd.export_glb.label": `\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0432 GLB`,
      "cmd.export_step.label": `\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0432 STEP`,
      "cmd.quit.label": `\u0412\u044B\u0439\u0442\u0438`,
      "cmd.toggle_sidebar.label": `\u0411\u043E\u043A\u043E\u0432\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C`,
      "cmd.toggle_feature_tree.label": `\u0414\u0435\u0440\u0435\u0432\u043E \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F`,
      "cmd.toggle_chat.label": `\u0427\u0430\u0442`,
      "cmd.toggle_status_bar.label": `\u0421\u0442\u0440\u043E\u043A\u0430 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F`,
      "cmd.toggle_devtools.label": `\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430`,
      "cmd.toggle_wireframe.label": `\u041A\u0430\u0440\u043A\u0430\u0441\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C`,
      "cmd.toggle_grid_snap.label": `\u041F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 \u043A \u0441\u0435\u0442\u043A\u0435`,
      "cmd.cycle_theme.label": `\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043C\u0443`,
      "cmd.camera_iso.label": `\u0418\u0437\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0432\u0438\u0434`,
      "cmd.camera_top.label": `\u0412\u0438\u0434 \u0441\u0432\u0435\u0440\u0445\u0443`,
      "cmd.camera_front.label": `\u0412\u0438\u0434 \u0441\u043F\u0435\u0440\u0435\u0434\u0438`,
      "cmd.camera_right.label": `\u0412\u0438\u0434 \u0441\u043F\u0440\u0430\u0432\u0430`,
      "cmd.camera_fit.label": `\u041F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u044D\u043A\u0440\u0430\u043D\u0430`,
      "cmd.fit_to_view.label": `\u041F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u0432\u0438\u0434\u0430`,
      "cmd.palette.label": `\u041F\u0430\u043B\u0438\u0442\u0440\u0430 \u043A\u043E\u043C\u0430\u043D\u0434`,
      "cmd.palette_dots.label": `\u041F\u0430\u043B\u0438\u0442\u0440\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u2026`,
      "cmd.sketch.label": `\u041D\u043E\u0432\u044B\u0439 \u044D\u0441\u043A\u0438\u0437`,
      "cmd.sketch_dots.label": `\u041D\u043E\u0432\u044B\u0439 \u044D\u0441\u043A\u0438\u0437\u2026`,
      "cmd.slicer.label": `\u041F\u0435\u0447\u0430\u0442\u044C (\u0441\u043B\u0430\u0439\u0441\u0435\u0440)\u2026`,
      "cmd.cam.label": `CAM (\u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430)\u2026`,
      "cmd.about.label": `\u041E vcad`,
      "cmd.whats_new.label": `\u0427\u0442\u043E \u043D\u043E\u0432\u043E\u0433\u043E`,
      "cmd.open_docs.label": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E`,
      "cmd.documentation.label": `\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u0442\u0430\u043B\u0438`,
      "cmd.insert_instance.label": `\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440`,
      "cmd.add_fixed_joint.label": `\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0436\u0451\u0441\u0442\u043A\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435`,
      "cmd.add_revolute_joint.label": `\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0440\u0430\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435`,
      "cmd.add_slider_joint.label": `\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435`,
      "cmd.set_ground.label": `\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0435\u043F\u043E\u0434\u0432\u0438\u0436\u043D\u044B\u043C`,
      "cmd.enter_electronics.label": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0443`,
      "cmd.exit_electronics.label": `\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0443`,
      "menu.file": `\u0424\u0430\u0439\u043B`,
      "menu.edit": `\u041F\u0440\u0430\u0432\u043A\u0430`,
      "menu.view": `\u0412\u0438\u0434`,
      "menu.tools": `\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B`,
      "menu.help": `\u0421\u043F\u0440\u0430\u0432\u043A\u0430`,
      "menu.file.new": `\u0421\u043E\u0437\u0434\u0430\u0442\u044C`,
      "menu.file.open": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C\u2026`,
      "menu.file.save": `\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`,
      "menu.file.share_link": `\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u0441\u044B\u043B\u043A\u043E\u0439\u2026`,
      "menu.file.version_history": `\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0435\u0440\u0441\u0438\u0439\u2026`,
      "menu.file.export": `\u042D\u043A\u0441\u043F\u043E\u0440\u0442`,
      "menu.file.export_stl": `\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0432 STL`,
      "menu.file.export_glb": `\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0432 GLB`,
      "menu.file.export_step": `\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0432 STEP`,
      "menu.file.examples": `\u041F\u0440\u0438\u043C\u0435\u0440\u044B`,
      "menu.file.quit": `\u0412\u044B\u0439\u0442\u0438`,
      "menu.edit.undo": `\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C`,
      "menu.edit.redo": `\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C`,
      "menu.edit.delete": `\u0423\u0434\u0430\u043B\u0438\u0442\u044C`,
      "menu.edit.duplicate": `\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C`,
      "menu.edit.select_all": `\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0441\u0451`,
      "menu.edit.deselect": `\u0421\u043D\u044F\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435`,
      "menu.view.toggle_sidebar": `\u0411\u043E\u043A\u043E\u0432\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C`,
      "menu.view.toggle_chat": `\u0427\u0430\u0442`,
      "menu.view.camera_iso": `\u0418\u0437\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0432\u0438\u0434`,
      "menu.view.camera_top": `\u0412\u0438\u0434 \u0441\u0432\u0435\u0440\u0445\u0443`,
      "menu.view.camera_front": `\u0412\u0438\u0434 \u0441\u043F\u0435\u0440\u0435\u0434\u0438`,
      "menu.view.camera_right": `\u0412\u0438\u0434 \u0441\u043F\u0440\u0430\u0432\u0430`,
      "menu.view.camera_fit": `\u041F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u044D\u043A\u0440\u0430\u043D\u0430`,
      "menu.view.wireframe": `\u041A\u0430\u0440\u043A\u0430\u0441\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C`,
      "menu.view.cycle_theme": `\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043C\u0443`,
      "menu.view.input_preferences": `\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432\u0432\u043E\u0434\u0430\u2026`,
      "menu.view.ray_tracing": `\u0422\u0440\u0430\u0441\u0441\u0438\u0440\u043E\u0432\u043A\u0430 \u043B\u0443\u0447\u0435\u0439`,
      "menu.view.ray_tracing.off": `\u0412\u044B\u043A\u043B.`,
      "menu.view.ray_tracing.draft": `\u0427\u0435\u0440\u043D\u043E\u0432\u043E\u0435`,
      "menu.view.ray_tracing.standard": `\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435`,
      "menu.view.ray_tracing.high": `\u0412\u044B\u0441\u043E\u043A\u043E\u0435`,
      "menu.view.ray_tracing.edges_on": `\u0420\u0451\u0431\u0440\u0430 \u0432\u043A\u043B.`,
      "menu.view.ray_tracing.edges_off": `\u0420\u0451\u0431\u0440\u0430 \u0432\u044B\u043A\u043B.`,
      "menu.tools.palette": `\u041F\u0430\u043B\u0438\u0442\u0440\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u2026`,
      "menu.tools.sketch": `\u041D\u043E\u0432\u044B\u0439 \u044D\u0441\u043A\u0438\u0437`,
      "menu.help.about": `\u041E vcad`,
      "menu.help.docs": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `\u0421\u043E\u0437\u0434\u0430\u0442\u044C`,
      "toolbar.tab.sketch": `\u042D\u0441\u043A\u0438\u0437`,
      "toolbar.tab.transform": `\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435`,
      "toolbar.tab.combine": `\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u044C`,
      "toolbar.tab.modify": `\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C`,
      "toolbar.tab.assembly": `\u0421\u0431\u043E\u0440\u043A\u0430`,
      "toolbar.tab.simulate": `\u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044F`,
      "toolbar.tab.export": `\u042D\u043A\u0441\u043F\u043E\u0440\u0442`,
      "toolbar.tool.box": `\u041F\u0430\u0440\u0430\u043B.`,
      "toolbar.tool.cyl": `\u0426\u0438\u043B.`,
      "toolbar.tool.sph": `\u0421\u0444\u0435\u0440\u0430`,
      "toolbar.tool.cone": `\u041A\u043E\u043D\u0443\u0441`,
      "toolbar.tool.sketch": `\u042D\u0441\u043A\u0438\u0437`,
      "toolbar.tool.move": `\u041F\u0435\u0440\u0435\u043C.`,
      "toolbar.tool.rotate": `\u041F\u043E\u0432\u043E\u0440\u043E\u0442`,
      "toolbar.tool.scale": `\u041C\u0430\u0441\u0448\u0442.`,
      "toolbar.tool.union": `\u041E\u0431\u044A\u0435\u0434.`,
      "toolbar.tool.diff": `\u0412\u044B\u0447.`,
      "toolbar.tool.isect": `\u041F\u0435\u0440\u0435\u0441.`,
      "toolbar.tool.fillet": `\u0421\u043A\u0440\u0443\u0433\u043B.`,
      "toolbar.tool.chamfer": `\u0424\u0430\u0441\u043A\u0430`,
      "toolbar.tool.shell": `\u041E\u0431\u043E\u043B\u043E\u0447\u043A\u0430`,
      "toolbar.tool.pattern": `\u041C\u0430\u0441\u0441\u0438\u0432`,
      "toolbar.tool.mirror": `\u0417\u0435\u0440\u043A\u0430\u043B\u043E`,
      "toolbar.tool.part": `\u0414\u0435\u0442\u0430\u043B\u044C`,
      "toolbar.tool.instance": `\u042D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440`,
      "toolbar.tool.joint": `\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435`,
      "toolbar.tool.play": `\u041F\u0443\u0441\u043A`,
      "toolbar.tool.pause": `\u041F\u0430\u0443\u0437\u0430`,
      "toolbar.tool.step": `\u0428\u0430\u0433`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `\u0421\u043E\u0445\u0440.`,
      "toolbar.hint.numeric": `\u2190\u2192:\u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C  Enter:\u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C  Esc:\u043E\u0442\u043C\u0435\u043D\u0430`,
      "toolbar.hint.text": `Enter:\u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C  Esc:\u043E\u0442\u043C\u0435\u043D\u0430`,
      "status.modified": `\u0438\u0437\u043C\u0435\u043D\u0451\u043D`,
      "status.saved": `\u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D`,
      "status.part": `{count} \u0434\u0435\u0442\u0430\u043B\u044C`,
      "status.parts": `{count} \u0434\u0435\u0442\u0430\u043B\u0435\u0439`,
      "status.sel": `\u0432\u044B\u0431\u0440\u0430\u043D\u043E {count}`,
      "status.console_empty": `\u043A\u043E\u043D\u0441\u043E\u043B\u044C \u043F\u0443\u0441\u0442\u0430`,
      "status.ago.now": `\u0441\u0435\u0439\u0447\u0430\u0441`,
      "status.ago.seconds": `{count}\u0441`,
      "status.ago.minutes": `{count}\u043C`,
      "status.ago.hours": `{count}\u0447`,
      "welcome.tagline": `\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 cad \u0434\u043B\u044F \u0432\u0441\u0435\u0445`,
      "welcome.new_project": `\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442`,
      "welcome.blank_project": `\u041F\u0443\u0441\u0442\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442`,
      "welcome.open_file": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u0430\u0439\u043B`,
      "welcome.hint.new": `\u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0435\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E`,
      "welcome.hint.blank": `\u043F\u0443\u0441\u0442\u043E\u0439 \u0445\u043E\u043B\u0441\u0442`,
      "welcome.hint.open": `:\u043E\u0442\u043A\u0440\u044B\u0442\u044C`,
      "welcome.footer": `\u2191\u2193 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F  enter \u0432\u044B\u0431\u043E\u0440  esc \u0437\u0430\u043A\u0440\u044B\u0442\u044C`,
      "tree.header": `\u0414\u0415\u0422\u0410\u041B\u0418`,
      "tree.empty": `\u041D\u0435\u0442 \u0434\u0435\u0442\u0430\u043B\u0435\u0439`,
      "desktop.menu.open_recent": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0435\u0434\u0430\u0432\u043D\u0438\u0435\u2026`,
      "desktop.menu.open_cloud": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u0437 \u043E\u0431\u043B\u0430\u043A\u0430\u2026`,
      "desktop.menu.toggle_status_bar": `\u0421\u0442\u0440\u043E\u043A\u0430 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F`,
      "desktop.menu.camera_iso": `\u0418\u0437\u043E\u043C\u0435\u0442\u0440\u0438\u044F`,
      "desktop.menu.camera_fit": `\u041F\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044E`,
      "desktop.menu.toggle_grid_snap": `\u041F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 \u043A \u0441\u0435\u0442\u043A\u0435`,
      "desktop.menu.slicer": `\u0421\u043B\u0430\u0439\u0441\u0435\u0440`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F\u2026`,
      "desktop.menu.whats_new": `\u0427\u0442\u043E \u043D\u043E\u0432\u043E\u0433\u043E`,
      "desktop.menu.documentation": `\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F`,
      "desktop.menu.camera_top": `\u0421\u0432\u0435\u0440\u0445\u0443`,
      "desktop.menu.camera_front": `\u0421\u043F\u0435\u0440\u0435\u0434\u0438`,
      "desktop.menu.camera_right": `\u0421\u043F\u0440\u0430\u0432\u0430`,
      "modal.about.tagline": `\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 CAD \u0434\u043B\u044F \u0432\u0441\u0435\u0445`,
      "modal.about.action.shape": `\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u0438\u0433\u0443\u0440\u0443`,
      "modal.about.action.shape_desc": `\u041F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u0435\u043F\u0438\u043F\u0435\u0434, \u0446\u0438\u043B\u0438\u043D\u0434\u0440, \u0441\u0444\u0435\u0440\u0430`,
      "modal.about.action.sketch": `\u041D\u0430\u0447\u0430\u0442\u044C \u044D\u0441\u043A\u0438\u0437`,
      "modal.about.action.sketch_desc": `\u041D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C 2D \u2192 \u0432\u044B\u0434\u0430\u0432\u0438\u0442\u044C \u0432 3D`,
      "modal.about.action.open": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u0430\u0439\u043B`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E`,
      "modal.about.action.tutorial_desc": `\u0418\u0437\u0443\u0447\u0438\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u044B`,
      "modal.about.keyhint.palette": `\u0427\u0430\u0442 \u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u044B`,
      "modal.about.keyhint.tabs": `\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u043A\u043B\u0430\u0434\u043E\u043A \u043F\u0430\u043D\u0435\u043B\u0438`,
      "modal.about.keyhint.transform": `\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435, \u043F\u043E\u0432\u043E\u0440\u043E\u0442, \u043C\u0430\u0441\u0448\u0442\u0430\u0431`,
      "modal.about.keyhint.boolean": `\u0411\u0443\u043B\u0435\u0432\u044B \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 (\u0432\u044B\u0431\u0440\u0430\u043D\u043E 2)`,
      "modal.about.docs": `\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F`,
      "modal.about.whats_new": `\u0427\u0442\u043E \u043D\u043E\u0432\u043E\u0433\u043E`,
      "footer.privacy": `\u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C`,
      "footer.terms": `\u0423\u0441\u043B\u043E\u0432\u0438\u044F`,
      "footer.security": `\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C`,
      "tutorial.add_cube.instruction": `\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \xAB\u0421\u043E\u0437\u0434\u0430\u0442\u044C\xBB \u2192 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u041F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u0435\u043F\u0438\u043F\u0435\u0434\xBB`,
      "tutorial.add_cube.detail": `\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0444\u0438\u0433\u0443\u0440\u0443 \u0432 \u0441\u0446\u0435\u043D\u0443`,
      "tutorial.add_cylinder.instruction": `\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \xAB\u0421\u043E\u0437\u0434\u0430\u0442\u044C\xBB \u2192 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0446\u0438\u043B\u0438\u043D\u0434\u0440`,
      "tutorial.add_cylinder.detail": `\u041C\u044B \u0432\u044B\u0447\u0442\u0435\u043C \u0435\u0433\u043E \u0438\u0437 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u0435\u043F\u0438\u043F\u0435\u0434\u0430`,
      "tutorial.position_cylinder.instruction": `\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0446\u0438\u043B\u0438\u043D\u0434\u0440 \u0432\u0432\u0435\u0440\u0445`,
      "tutorial.position_cylinder.detail": `\u041F\u043E\u0442\u044F\u043D\u0438\u0442\u0435 \u0437\u0430 \u0437\u0435\u043B\u0451\u043D\u0443\u044E \u0441\u0442\u0440\u0435\u043B\u043A\u0443 \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440\u0430`,
      "tutorial.subtract.instruction": `\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \xAB\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u044C\xBB \u2192 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0412\u044B\u0447\u0438\u0442\u0430\u043D\u0438\u0435\xBB`,
      "tutorial.subtract.detail": `\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u043E\u0431\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 (\u2318-\u043A\u043B\u0438\u043A \u0438\u043B\u0438 \u0440\u0430\u043C\u043A\u043E\u0439)`,
      "tutorial.celebrate.instruction": `\u0412\u044B \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u0441\u0432\u043E\u044E \u043F\u0435\u0440\u0432\u0443\u044E \u0434\u0435\u0442\u0430\u043B\u044C!`,
      "tutorial.celebrate.detail": `\u0412\u044B \u043E\u0441\u0432\u043E\u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 CSG`,
      "tutorial.skip": `\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E`,
      "tutorial.start_building": `\u041D\u0430\u0447\u0430\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C`,
      "tutorial.skip_short": `\u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E`,
      "error.boundary.title": `\u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A`,
      "error.boundary.unexpected": `\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430`,
      "error.boundary.reload": `\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435`,
      "error.boundary.cache_hint": `\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u044D\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.`,
      "error.engine": `\u043E\u0448\u0438\u0431\u043A\u0430 \u0434\u0432\u0438\u0436\u043A\u0430`,
      "status.offline": `\u041D\u0435 \u0432 \u0441\u0435\u0442\u0438`,
      "status.console_open": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u043E\u043D\u0441\u043E\u043B\u044C (~)`,
      "status.console_empty_title": `\u041A\u043E\u043D\u0441\u043E\u043B\u044C (\u043F\u0443\u0441\u0442\u043E)`,
      "status.cursor_pos": `\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u043E\u0440\u0430 \u043D\u0430 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438 \u0437\u0435\u043C\u043B\u0438 (\u043C\u043C)`,
      "status.language": `\u042F\u0437\u044B\u043A`,
      "banner.readonly.viewing": `\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 {name} (\u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F)`,
      "banner.readonly.fork": `\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043F\u0438\u044E`,
      "modal.fork.title": `\u042D\u0442\u043E\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F`,
      "modal.fork.description": `\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u043C\u0443\u044E \u043A\u043E\u043F\u0438\u044E. \u0412\u0430\u0448\u0438 \u043F\u0440\u0430\u0432\u043A\u0438 \u043D\u0435 \u0437\u0430\u0442\u0440\u043E\u043D\u0443\u0442 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B \u2014 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043D\u043E\u0432\u0443\u044E \u043A\u043E\u043F\u0438\u044E \u0432 \u0441\u0432\u043E\u0451\u043C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0435.`,
      "modal.fork.keep_viewing": `\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440`,
      "modal.fork.signin": `\u0412\u043E\u0439\u0442\u0438 \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043F\u0438\u044E`,
      "palette.placeholder": `\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0438\u043B\u0438 \u043E\u043F\u0438\u0448\u0438\u0442\u0435, \u0447\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C...`,
      "palette.title": `\u041F\u0430\u043B\u0438\u0442\u0440\u0430 \u043A\u043E\u043C\u0430\u043D\u0434`,
      "palette.generating": `\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F...`,
      "palette.section.get_started": `\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0430\u0431\u043E\u0442\u044B`,
      "palette.section.examples": `\u041F\u0440\u0438\u043C\u0435\u0440\u044B`,
      "palette.section.ask_ai_inline": `\u0418\u043B\u0438 \u043E\u043F\u0438\u0448\u0438\u0442\u0435, \u0447\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C`,
      "palette.section.ask_ai": `\u0421\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0418\u0418`,
      "palette.action.new_project": `\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442`,
      "palette.action.new_project_hint": `\u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0435\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E`,
      "palette.action.blank_project": `\u041F\u0443\u0441\u0442\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442`,
      "palette.action.blank_project_hint": `\u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E`,
      "palette.action.open_file": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u0430\u0439\u043B`,
      "palette.generate_label": `\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C:`,
      "palette.kbd_server": `\u0441\u0435\u0440\u0432\u0435\u0440`,
      "palette.empty": `\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B`,
      "palette.failed_to_load": `\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B`,
      "panel.section.material": `\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B`,
      "panel.section.position": `\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435`,
      "panel.section.rotation": `\u041F\u043E\u0432\u043E\u0440\u043E\u0442`,
      "panel.section.scale": `\u041C\u0430\u0441\u0448\u0442\u0430\u0431`,
      "panel.section.dimensions": `\u0420\u0430\u0437\u043C\u0435\u0440\u044B`,
      "panel.section.operation": `\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F`,
      "panel.section.profile": `\u041F\u0440\u043E\u0444\u0438\u043B\u044C`,
      "panel.section.path": `\u0422\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u044F`,
      "panel.section.depth": `\u0413\u043B\u0443\u0431\u0438\u043D\u0430`,
      "panel.section.angle": `\u0423\u0433\u043E\u043B`,
      "panel.section.axis": `\u041E\u0441\u044C`,
      "panel.section.radius": `\u0420\u0430\u0434\u0438\u0443\u0441`,
      "panel.section.distance": `\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435`,
      "panel.section.thickness": `\u0422\u043E\u043B\u0449\u0438\u043D\u0430`,
      "panel.section.direction": `\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435`,
      "panel.section.count": `\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E`,
      "panel.section.spacing": `\u0428\u0430\u0433`,
      "panel.section.profiles": `\u041F\u0440\u043E\u0444\u0438\u043B\u0438`,
      "panel.section.closed": `\u0417\u0430\u043C\u043A\u043D\u0443\u0442\u044B\u0439`,
      "panel.section.text": `\u0422\u0435\u043A\u0441\u0442`,
      "panel.section.size": `\u0420\u0430\u0437\u043C\u0435\u0440`,
      "panel.section.font": `\u0428\u0440\u0438\u0444\u0442`,
      "panel.section.taper": `\u0423\u043A\u043B\u043E\u043D`,
      "panel.section.twist": `\u0417\u0430\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u043D\u0438\u0435`,
      "panel.section.orientation": `\u041E\u0440\u0438\u0435\u043D\u0442\u0430\u0446\u0438\u044F`,
      "panel.section.helix": `\u0421\u043F\u0438\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u044F`,
      "panel.section.quality": `\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E`,
      "panel.section.axis_origin": `\u041D\u0430\u0447\u0430\u043B\u043E \u043E\u0441\u0438`,
      "panel.section.axis_dir": `\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0441\u0438`,
      "panel.section.part_def": `\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u0442\u0430\u043B\u0438`,
      "panel.section.connection": `\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435`,
      "panel.section.state": `\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435`,
      "panel.section.type": `\u0422\u0438\u043F`,
      "panel.section.mirror": `\u0417\u0435\u0440\u043A\u0430\u043B\u043E`,
      "panel.tooltip.material": `\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u044D\u0442\u043E\u0439 \u0434\u0435\u0442\u0430\u043B\u0438`,
      "panel.tooltip.material_instance": `\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u044D\u0442\u043E\u043C\u0443 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0443`,
      "panel.tooltip.position": `\u0421\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043E\u0442 \u043D\u0430\u0447\u0430\u043B\u0430 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 (\u043C\u043C)`,
      "panel.tooltip.position_world": `\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 (\u043C\u043C)`,
      "panel.tooltip.rotation": `\u0423\u0433\u043B\u044B \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u043A\u0430\u0436\u0434\u043E\u0439 \u043E\u0441\u0438 (\u0433\u0440\u0430\u0434\u0443\u0441\u044B)`,
      "panel.tooltip.rotation_world": `\u0423\u0433\u043B\u044B \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u0432 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 (\u0433\u0440\u0430\u0434\u0443\u0441\u044B)`,
      "panel.tooltip.scale": `\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u0439 \u043E\u0441\u0438`,
      "panel.tooltip.dimensions_box": `\u0428\u0438\u0440\u0438\u043D\u0430, \u0432\u044B\u0441\u043E\u0442\u0430 \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u0430 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u0435\u043F\u0438\u043F\u0435\u0434\u0430 (\u043C\u043C)`,
      "panel.tooltip.dimensions_cylinder": `\u0420\u0430\u0434\u0438\u0443\u0441 \u0438 \u0432\u044B\u0441\u043E\u0442\u0430 \u0446\u0438\u043B\u0438\u043D\u0434\u0440\u0430 (\u043C\u043C)`,
      "panel.tooltip.dimensions_sphere": `\u0420\u0430\u0434\u0438\u0443\u0441 \u0441\u0444\u0435\u0440\u044B (\u043C\u043C)`,
      "panel.tooltip.fillet_radius": `\u0420\u0430\u0434\u0438\u0443\u0441 \u0441\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u044F (\u043C\u043C)`,
      "panel.tooltip.chamfer_distance": `\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0444\u0430\u0441\u043A\u0438 (\u043C\u043C)`,
      "panel.tooltip.shell_thickness": `\u0422\u043E\u043B\u0449\u0438\u043D\u0430 \u0441\u0442\u0435\u043D\u043A\u0438 (\u043C\u043C)`,
      "panel.tooltip.mirror_readonly": `\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F`,
      "panel.back_to_tree": `\u041D\u0430\u0437\u0430\u0434 \u043A \u0434\u0435\u0440\u0435\u0432\u0443`,
      "panel.parts_selected": `\u0432\u044B\u0431\u0440\u0430\u043D\u043E \u0434\u0435\u0442\u0430\u043B\u0435\u0439: {count}`,
      "panel.select_single": `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u043D\u0443 \u0434\u0435\u0442\u0430\u043B\u044C \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432`,
      "panel.edit_circuit": `\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0445\u0435\u043C\u0443`,
      "panel.open_embroidery": `\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C \u0432\u044B\u0448\u0438\u0432\u043A\u0438`,
      "panel.parent": `\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C:`,
      "panel.child": `\u041F\u043E\u0442\u043E\u043C\u043E\u043A:`,
      "panel.ground": `\u041D\u0435\u043F\u043E\u0434\u0432\u0438\u0436\u043D\u043E\u0435`,
      "panel.mirror_readonly": `\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438 \u0437\u0435\u0440\u043A\u0430\u043B\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F`,
      "bool.union": `\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435`,
      "bool.difference": `\u0412\u044B\u0447\u0438\u0442\u0430\u043D\u0438\u0435`,
      "bool.intersection": `\u041F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435`,
      "joint.fixed": `\u0416\u0451\u0441\u0442\u043A\u043E\u0435`,
      "joint.revolute": `\u0412\u0440\u0430\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435`,
      "joint.slider": `\u041F\u043E\u0441\u0442\u0443\u043F\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435`,
      "joint.cylindrical": `\u0426\u0438\u043B\u0438\u043D\u0434\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0435`,
      "joint.ball": `\u0421\u0444\u0435\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0435`,
      "joint.free": `\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435`,
      "joint.suffix": `\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435`,
      "tree.scene": `\u0421\u0446\u0435\u043D\u0430`,
      "tree.parameters": `\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B`,
      "tree.scene_tooltip": `\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0441\u0446\u0435\u043D\u044B (\u0444\u043E\u043D, \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435, \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435)`,
      "tree.parameters_tooltip": `\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 (\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u043F\u043E\u043B\u044F\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F)`,
      "tree.sketch.label": `\u042D\u0441\u043A\u0438\u0437`,
      "tree.sketch.discard_title": `\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437?`,
      "tree.sketch.discard_msg": `\u0418\u043C\u0435\u0435\u0442\u0441\u044F \u043D\u0435\u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u0430\u044F \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u044F.`,
      "tree.sketch.discard": `\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C`,
      "tree.sketch.keep_editing": `\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435`,
      "tree.sketch.cancelled": `\u042D\u0441\u043A\u0438\u0437 \u043E\u0442\u043C\u0435\u043D\u0451\u043D`,
      "tree.sketch.discarded": `\u042D\u0441\u043A\u0438\u0437 \u043E\u0442\u043C\u0435\u043D\u0451\u043D`,
      "tree.sketch.entities": `\u041E\u0431\u044A\u0435\u043A\u0442\u044B ({count})`,
      "tree.sketch.constraints": `\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F ({count})`,
      "tree.sketch.profiles": `\u041F\u0440\u043E\u0444\u0438\u043B\u0438 ({count})`,
      "tree.sketch.profile": `\u041F\u0440\u043E\u0444\u0438\u043B\u044C {n}`,
      "tree.sketch.finish": `\u0413\u043E\u0442\u043E\u0432\u043E`,
      "tree.sketch.finish_tooltip": `\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437`,
      "tree.sketch.apply_tooltip": `\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C {label}`,
      "tree.sketch.cancel_tooltip": `\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437 (Esc)`,
      "tree.sketch.delete_constraint": `\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435`
    },
    tr: {
      "cmd.add_box.label": `Kutu Ekle`,
      "cmd.cube.label": `K\xFCp Ekle`,
      "cmd.cylinder.label": `Silindir Ekle`,
      "cmd.sphere.label": `K\xFCre Ekle`,
      "cmd.cone.label": `Koni Ekle`,
      "cmd.translate.label": `Ta\u015F\u0131`,
      "cmd.rotate.label": `D\xF6nd\xFCr`,
      "cmd.scale.label": `\xD6l\xE7eklendir`,
      "cmd.move_mode.label": `Ta\u015F\u0131ma Modu`,
      "cmd.rotate_mode.label": `D\xF6nd\xFCrme Modu`,
      "cmd.scale_mode.label": `\xD6l\xE7eklendirme Modu`,
      "cmd.mirror.label": `Aynala`,
      "cmd.union.label": `Birle\u015Fim`,
      "cmd.difference.label": `Fark`,
      "cmd.intersection.label": `Kesi\u015Fim`,
      "cmd.fillet.label": `Yuvarlatma`,
      "cmd.chamfer.label": `Pah`,
      "cmd.shell.label": `Kabuk`,
      "cmd.stitch.label": `Dik`,
      "cmd.linear_pattern.label": `Do\u011Frusal Patern`,
      "cmd.circular_pattern.label": `Dairesel Patern`,
      "cmd.delete.label": `Sil`,
      "cmd.delete_selected.label": `Se\xE7ileni Sil`,
      "cmd.undo.label": `Geri Al`,
      "cmd.redo.label": `Yinele`,
      "cmd.copy.label": `Kopyala`,
      "cmd.paste.label": `Yap\u0131\u015Ft\u0131r`,
      "cmd.duplicate.label": `\xC7o\u011Falt`,
      "cmd.select_all.label": `T\xFCm\xFCn\xFC Se\xE7`,
      "cmd.deselect.label": `Se\xE7imi Kald\u0131r`,
      "cmd.deselect_all.label": `T\xFCm Se\xE7imi Kald\u0131r`,
      "cmd.new.label": `Yeni Belge`,
      "cmd.new_short.label": `Yeni`,
      "cmd.open.label": `A\xE7`,
      "cmd.open_dots.label": `A\xE7\u2026`,
      "cmd.open_cloud.label": `Buluttan A\xE7\u2026`,
      "cmd.save.label": `Kaydet`,
      "cmd.export_stl.label": `STL Olarak D\u0131\u015Fa Aktar`,
      "cmd.export_glb.label": `GLB Olarak D\u0131\u015Fa Aktar`,
      "cmd.export_step.label": `STEP Olarak D\u0131\u015Fa Aktar`,
      "cmd.quit.label": `\xC7\u0131k\u0131\u015F`,
      "cmd.toggle_sidebar.label": `Kenar \xC7ubu\u011Funu A\xE7/Kapat`,
      "cmd.toggle_feature_tree.label": `\xD6zellik A\u011Fac\u0131n\u0131 A\xE7/Kapat`,
      "cmd.toggle_chat.label": `Sohbeti A\xE7/Kapat`,
      "cmd.toggle_status_bar.label": `Durum \xC7ubu\u011Funu A\xE7/Kapat`,
      "cmd.toggle_devtools.label": `Geli\u015Ftirici Ara\xE7lar\u0131n\u0131 A\xE7/Kapat`,
      "cmd.toggle_wireframe.label": `Tel Kafesi A\xE7/Kapat`,
      "cmd.toggle_grid_snap.label": `Izgara Yap\u0131\u015Fmas\u0131n\u0131 A\xE7/Kapat`,
      "cmd.cycle_theme.label": `Temay\u0131 De\u011Fi\u015Ftir`,
      "cmd.camera_iso.label": `\u0130zometrik G\xF6r\xFCn\xFCm`,
      "cmd.camera_top.label": `\xDCst G\xF6r\xFCn\xFCm`,
      "cmd.camera_front.label": `\xD6n G\xF6r\xFCn\xFCm`,
      "cmd.camera_right.label": `Sa\u011F G\xF6r\xFCn\xFCm`,
      "cmd.camera_fit.label": `Ekrana S\u0131\u011Fd\u0131r`,
      "cmd.fit_to_view.label": `G\xF6r\xFCn\xFCme S\u0131\u011Fd\u0131r`,
      "cmd.palette.label": `Komut Paleti`,
      "cmd.palette_dots.label": `Komut Paleti\u2026`,
      "cmd.sketch.label": `Yeni \xC7izim`,
      "cmd.sketch_dots.label": `Yeni \xC7izim\u2026`,
      "cmd.slicer.label": `Yazd\u0131r (Dilimleyici)\u2026`,
      "cmd.cam.label": `CAM (Tak\u0131m Yolu)\u2026`,
      "cmd.about.label": `vcad Hakk\u0131nda`,
      "cmd.whats_new.label": `Yenilikler`,
      "cmd.open_docs.label": `Belgeleri A\xE7`,
      "cmd.documentation.label": `Belgeler`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `Par\xE7a Tan\u0131m\u0131 Olu\u015Ftur`,
      "cmd.insert_instance.label": `Bile\u015Fen Ekle`,
      "cmd.add_fixed_joint.label": `Sabit Eklem Ekle`,
      "cmd.add_revolute_joint.label": `D\xF6ner Eklem Ekle`,
      "cmd.add_slider_joint.label": `Kayar Eklem Ekle`,
      "cmd.set_ground.label": `Zemin Olarak Ayarla`,
      "cmd.enter_electronics.label": `Elektroni\u011Fi A\xE7`,
      "cmd.exit_electronics.label": `Elektroni\u011Fi Kapat`,
      "menu.file": `Dosya`,
      "menu.edit": `D\xFCzen`,
      "menu.view": `G\xF6r\xFCn\xFCm`,
      "menu.tools": `Ara\xE7lar`,
      "menu.help": `Yard\u0131m`,
      "menu.file.new": `Yeni`,
      "menu.file.open": `A\xE7\u2026`,
      "menu.file.save": `Kaydet`,
      "menu.file.share_link": `Ba\u011Flant\u0131y\u0131 payla\u015F\u2026`,
      "menu.file.version_history": `S\xFCr\xFCm ge\xE7mi\u015Fi\u2026`,
      "menu.file.export": `D\u0131\u015Fa Aktar`,
      "menu.file.export_stl": `STL Olarak D\u0131\u015Fa Aktar`,
      "menu.file.export_glb": `GLB Olarak D\u0131\u015Fa Aktar`,
      "menu.file.export_step": `STEP Olarak D\u0131\u015Fa Aktar`,
      "menu.file.examples": `\xD6rnekler`,
      "menu.file.quit": `\xC7\u0131k\u0131\u015F`,
      "menu.edit.undo": `Geri Al`,
      "menu.edit.redo": `Yinele`,
      "menu.edit.delete": `Sil`,
      "menu.edit.duplicate": `\xC7o\u011Falt`,
      "menu.edit.select_all": `T\xFCm\xFCn\xFC Se\xE7`,
      "menu.edit.deselect": `Se\xE7imi Kald\u0131r`,
      "menu.view.toggle_sidebar": `Kenar \xC7ubu\u011Funu A\xE7/Kapat`,
      "menu.view.toggle_chat": `Sohbeti A\xE7/Kapat`,
      "menu.view.camera_iso": `\u0130zometrik G\xF6r\xFCn\xFCm`,
      "menu.view.camera_top": `\xDCst G\xF6r\xFCn\xFCm`,
      "menu.view.camera_front": `\xD6n G\xF6r\xFCn\xFCm`,
      "menu.view.camera_right": `Sa\u011F G\xF6r\xFCn\xFCm`,
      "menu.view.camera_fit": `Ekrana S\u0131\u011Fd\u0131r`,
      "menu.view.wireframe": `Tel Kafes`,
      "menu.view.cycle_theme": `Temay\u0131 De\u011Fi\u015Ftir`,
      "menu.view.input_preferences": `Girdi Tercihleri\u2026`,
      "menu.view.ray_tracing": `I\u015F\u0131n \u0130zleme`,
      "menu.view.ray_tracing.off": `Kapal\u0131`,
      "menu.view.ray_tracing.draft": `Taslak`,
      "menu.view.ray_tracing.standard": `Standart`,
      "menu.view.ray_tracing.high": `Y\xFCksek`,
      "menu.view.ray_tracing.edges_on": `Kenarlar A\xE7\u0131k`,
      "menu.view.ray_tracing.edges_off": `Kenarlar Kapal\u0131`,
      "menu.tools.palette": `Komut Paleti\u2026`,
      "menu.tools.sketch": `Yeni \xC7izim`,
      "menu.help.about": `vcad Hakk\u0131nda`,
      "menu.help.docs": `Belgeleri A\xE7`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `Olu\u015Ftur`,
      "toolbar.tab.sketch": `\xC7izim`,
      "toolbar.tab.transform": `D\xF6n\xFC\u015Ft\xFCr`,
      "toolbar.tab.combine": `Birle\u015Ftir`,
      "toolbar.tab.modify": `De\u011Fi\u015Ftir`,
      "toolbar.tab.assembly": `Montaj`,
      "toolbar.tab.simulate": `Sim\xFCle Et`,
      "toolbar.tab.export": `D\u0131\u015Fa Aktar`,
      "toolbar.tool.box": `Kutu`,
      "toolbar.tool.cyl": `Sil`,
      "toolbar.tool.sph": `K\xFCre`,
      "toolbar.tool.cone": `Koni`,
      "toolbar.tool.sketch": `\xC7izim`,
      "toolbar.tool.move": `Ta\u015F\u0131`,
      "toolbar.tool.rotate": `D\xF6nd\xFCr`,
      "toolbar.tool.scale": `\xD6l\xE7ek`,
      "toolbar.tool.union": `Birle\u015Fim`,
      "toolbar.tool.diff": `Fark`,
      "toolbar.tool.isect": `Kesi\u015Fim`,
      "toolbar.tool.fillet": `Yuvarlatma`,
      "toolbar.tool.chamfer": `Pah`,
      "toolbar.tool.shell": `Kabuk`,
      "toolbar.tool.pattern": `Patern`,
      "toolbar.tool.mirror": `Aynala`,
      "toolbar.tool.part": `Par\xE7a`,
      "toolbar.tool.instance": `Bile\u015Fen`,
      "toolbar.tool.joint": `Eklem`,
      "toolbar.tool.play": `Oynat`,
      "toolbar.tool.pause": `Duraklat`,
      "toolbar.tool.step": `Ad\u0131m`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `Kaydet`,
      "toolbar.hint.numeric": `\u2190\u2192:kayd\u0131r  Enter:uygula  Esc:iptal`,
      "toolbar.hint.text": `Enter:uygula  Esc:iptal`,
      "status.modified": `de\u011Fi\u015Ftirildi`,
      "status.saved": `kaydedildi`,
      "status.part": `{count} par\xE7a`,
      "status.parts": `{count} par\xE7a`,
      "status.sel": `{count} se\xE7ili`,
      "status.console_empty": `konsol bo\u015F`,
      "status.ago.now": `\u015Fimdi`,
      "status.ago.seconds": `{count}sn`,
      "status.ago.minutes": `{count}dk`,
      "status.ago.hours": `{count}sa`,
      "welcome.tagline": `herkes i\xE7in \xFCcretsiz parametrik cad`,
      "welcome.new_project": `Yeni Proje`,
      "welcome.blank_project": `Bo\u015F Proje`,
      "welcome.open_file": `Dosya A\xE7`,
      "welcome.hint.new": `rehberli e\u011Fitim`,
      "welcome.hint.blank": `bo\u015F tuval`,
      "welcome.hint.open": `:a\xE7`,
      "welcome.footer": `\u2191\u2193 gezin  enter se\xE7  esc kapat`,
      "tree.header": `PAR\xC7ALAR`,
      "tree.empty": `Par\xE7a yok`,
      "desktop.menu.open_recent": `Son Kullan\u0131lanlardan A\xE7\u2026`,
      "desktop.menu.open_cloud": `Buluttan A\xE7\u2026`,
      "desktop.menu.toggle_status_bar": `Durum \xC7ubu\u011Funu A\xE7/Kapat`,
      "desktop.menu.camera_iso": `\u0130zometrik`,
      "desktop.menu.camera_fit": `Se\xE7ime S\u0131\u011Fd\u0131r`,
      "desktop.menu.toggle_grid_snap": `Izgara Yap\u0131\u015Fmas\u0131n\u0131 A\xE7/Kapat`,
      "desktop.menu.slicer": `Dilimleyici`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `G\xFCncellemeleri Kontrol Et\u2026`,
      "desktop.menu.whats_new": `Yenilikler`,
      "desktop.menu.documentation": `Belgeler`,
      "desktop.menu.camera_top": `\xDCst`,
      "desktop.menu.camera_front": `\xD6n`,
      "desktop.menu.camera_right": `Sa\u011F`,
      "modal.about.tagline": `Herkes i\xE7in Parametrik CAD`,
      "modal.about.action.shape": `\u015Eekil ekle`,
      "modal.about.action.shape_desc": `Kutu, silindir, k\xFCre`,
      "modal.about.action.sketch": `\xC7izime ba\u015Fla`,
      "modal.about.action.sketch_desc": `2D \xE7iz \u2192 3B'ye d\xF6n\xFC\u015Ft\xFCr`,
      "modal.about.action.open": `Dosya a\xE7`,
      "modal.about.action.open_desc": `.vcad, .step, .stl`,
      "modal.about.action.tutorial": `H\u0131zl\u0131 e\u011Fitim`,
      "modal.about.action.tutorial_desc": `Temelleri \xF6\u011Fren`,
      "modal.about.keyhint.palette": `Sohbet ve komutlar`,
      "modal.about.keyhint.tabs": `Ara\xE7 \xE7ubu\u011Fu sekmelerini de\u011Fi\u015Ftir`,
      "modal.about.keyhint.transform": `Ta\u015F\u0131, D\xF6nd\xFCr, \xD6l\xE7eklendir`,
      "modal.about.keyhint.boolean": `Boolean i\u015Flemleri (2 se\xE7ili)`,
      "modal.about.docs": `Belgeler`,
      "modal.about.whats_new": `Yenilikler`,
      "footer.privacy": `Gizlilik`,
      "footer.terms": `\u015Eartlar`,
      "footer.security": `G\xFCvenlik`,
      "tutorial.add_cube.instruction": `Olu\u015Ftur'u a\xE7 \u2192 Kutu'ya t\u0131kla`,
      "tutorial.add_cube.detail": `Sahneye ilk \u015Feklini ekle`,
      "tutorial.add_cylinder.instruction": `Olu\u015Ftur'u a\xE7 \u2192 bir Silindir ekle`,
      "tutorial.add_cylinder.detail": `Bunu k\xFCpten \xE7\u0131karaca\u011F\u0131z`,
      "tutorial.position_cylinder.instruction": `Silindiri yukar\u0131 ta\u015F\u0131`,
      "tutorial.position_cylinder.detail": `Gizmodaki ye\u015Fil oku s\xFCr\xFCkle`,
      "tutorial.subtract.instruction": `Birle\u015Ftir'i a\xE7 \u2192 Fark'a t\u0131kla`,
      "tutorial.subtract.detail": `\xD6nce her iki par\xE7ay\u0131 da se\xE7 (\u2318-t\u0131kla veya s\xFCr\xFCkle)`,
      "tutorial.celebrate.instruction": `\u0130lk par\xE7an\u0131 yapt\u0131n!`,
      "tutorial.celebrate.detail": `CSG i\u015F ak\u0131\u015F\u0131n\u0131 \xF6\u011Frendin`,
      "tutorial.skip": `E\u011Fitimi atla`,
      "tutorial.start_building": `\u0130n\u015Fa Etmeye Ba\u015Fla`,
      "tutorial.skip_short": `e\u011Fitimi atla`,
      "error.boundary.title": `bir \u015Feyler ters gitti`,
      "error.boundary.unexpected": `Beklenmeyen bir hata olu\u015Ftu`,
      "error.boundary.reload": `Uygulamay\u0131 Yeniden Y\xFCkle`,
      "error.boundary.cache_hint": `Bu sorun devam ederse, taray\u0131c\u0131 \xF6nbelle\u011Fini temizlemeyi deneyin.`,
      "error.engine": `motor hatas\u0131`,
      "status.offline": `\xC7evrimd\u0131\u015F\u0131`,
      "status.console_open": `Konsolu a\xE7 (~)`,
      "status.console_empty_title": `Konsol (bo\u015F)`,
      "status.cursor_pos": `Zemin d\xFCzlemi \xFCzerinde imle\xE7 konumu (mm)`,
      "status.language": `Dil`,
      "banner.readonly.viewing": `{name} g\xF6r\xFCnt\xFCleniyor (salt okunur)`,
      "banner.readonly.fork": `\xC7atallamak i\xE7in giri\u015F yap\u0131n`,
      "modal.fork.title": `Bu belge salt okunur`,
      "modal.fork.description": `Kendi d\xFCzenlenebilir kopyan\u0131z\u0131 olu\u015Fturmak i\xE7in giri\u015F yap\u0131n. D\xFCzenlemeleriniz orijinali etkilemeyecek \u2014 hesab\u0131n\u0131zda yeni bir \xE7atal alacaks\u0131n\u0131z.`,
      "modal.fork.keep_viewing": `G\xF6r\xFCnt\xFClemeye devam et`,
      "modal.fork.signin": `\xC7atallamak i\xE7in giri\u015F yap`,
      "palette.placeholder": `Bir komut yaz\u0131n veya ne olu\u015Fturmak istedi\u011Finizi tan\u0131mlay\u0131n...`,
      "palette.title": `Komut Paleti`,
      "palette.generating": `Olu\u015Fturuluyor...`,
      "palette.section.get_started": `Ba\u015Flarken`,
      "palette.section.examples": `\xD6rnekler`,
      "palette.section.ask_ai_inline": `Veya ne olu\u015Fturulaca\u011F\u0131n\u0131 tan\u0131mlay\u0131n`,
      "palette.section.ask_ai": `Yapay Zekaya Sor`,
      "palette.action.new_project": `Yeni Proje`,
      "palette.action.new_project_hint": `rehberli e\u011Fitim`,
      "palette.action.blank_project": `Bo\u015F Proje`,
      "palette.action.blank_project_hint": `e\u011Fitimi atla`,
      "palette.action.open_file": `Dosya A\xE7`,
      "palette.generate_label": `Olu\u015Ftur:`,
      "palette.kbd_server": `sunucu`,
      "palette.empty": `Komut bulunamad\u0131`,
      "palette.failed_to_load": `Dosya y\xFCklenemedi`,
      "panel.section.material": `Malzeme`,
      "panel.section.position": `Konum`,
      "panel.section.rotation": `D\xF6nd\xFCrme`,
      "panel.section.scale": `\xD6l\xE7ek`,
      "panel.section.dimensions": `Boyutlar`,
      "panel.section.operation": `\u0130\u015Flem`,
      "panel.section.profile": `Profil`,
      "panel.section.path": `Yol`,
      "panel.section.depth": `Derinlik`,
      "panel.section.angle": `A\xE7\u0131`,
      "panel.section.axis": `Eksen`,
      "panel.section.radius": `Yar\u0131\xE7ap`,
      "panel.section.distance": `Mesafe`,
      "panel.section.thickness": `Kal\u0131nl\u0131k`,
      "panel.section.direction": `Y\xF6n`,
      "panel.section.count": `Say\u0131`,
      "panel.section.spacing": `Aral\u0131k`,
      "panel.section.profiles": `Profiller`,
      "panel.section.closed": `Kapal\u0131`,
      "panel.section.text": `Metin`,
      "panel.section.size": `Boyut`,
      "panel.section.font": `Yaz\u0131 Tipi`,
      "panel.section.taper": `Konikle\u015Ftirme`,
      "panel.section.twist": `B\xFCk\xFClme`,
      "panel.section.orientation": `Y\xF6nelim`,
      "panel.section.helix": `Helis Yolu`,
      "panel.section.quality": `Kalite`,
      "panel.section.axis_origin": `Eksen Orijini`,
      "panel.section.axis_dir": `Eksen Y\xF6n\xFC`,
      "panel.section.part_def": `Par\xE7a Tan\u0131m\u0131`,
      "panel.section.connection": `Ba\u011Flant\u0131`,
      "panel.section.state": `Durum`,
      "panel.section.type": `T\xFCr`,
      "panel.section.mirror": `Aynalama`,
      "panel.tooltip.material": `Bu par\xE7aya bir malzeme ata`,
      "panel.tooltip.material_instance": `Bu bile\u015Fene bir malzeme ata`,
      "panel.tooltip.position": `Orijinden konum ofseti (mm)`,
      "panel.tooltip.position_world": `D\xFCnya uzay\u0131nda konum (mm)`,
      "panel.tooltip.rotation": `Her eksen etraf\u0131nda d\xF6nd\xFCrme a\xE7\u0131lar\u0131 (derece)`,
      "panel.tooltip.rotation_world": `D\xFCnya uzay\u0131nda d\xF6nd\xFCrme a\xE7\u0131lar\u0131 (derece)`,
      "panel.tooltip.scale": `Her eksen boyunca \xF6l\xE7ek fakt\xF6r\xFC`,
      "panel.tooltip.dimensions_box": `Kutunun geni\u015Fli\u011Fi, y\xFCksekli\u011Fi ve derinli\u011Fi (mm)`,
      "panel.tooltip.dimensions_cylinder": `Silindirin yar\u0131\xE7ap\u0131 ve y\xFCksekli\u011Fi (mm)`,
      "panel.tooltip.dimensions_sphere": `K\xFCrenin yar\u0131\xE7ap\u0131 (mm)`,
      "panel.tooltip.fillet_radius": `Yuvarlatma yar\u0131\xE7ap\u0131 (mm)`,
      "panel.tooltip.chamfer_distance": `Pah mesafesi (mm)`,
      "panel.tooltip.shell_thickness": `Duvar kal\u0131nl\u0131\u011F\u0131 (mm)`,
      "panel.tooltip.mirror_readonly": `D\xFCzenleme hen\xFCz desteklenmiyor`,
      "panel.back_to_tree": `A\u011Faca d\xF6n`,
      "panel.parts_selected": `{count} par\xE7a se\xE7ili`,
      "panel.select_single": `\xD6zellikleri d\xFCzenlemek i\xE7in tek bir par\xE7a se\xE7in`,
      "panel.edit_circuit": `Devreyi D\xFCzenle`,
      "panel.open_embroidery": `Nak\u0131\u015F Panelini A\xE7`,
      "panel.parent": `Ebeveyn:`,
      "panel.child": `\xC7ocuk:`,
      "panel.ground": `Zemin`,
      "panel.mirror_readonly": `Aynalama d\xFCzlemi parametreleri salt okunurdur`,
      "bool.union": `Birle\u015Fim`,
      "bool.difference": `Fark`,
      "bool.intersection": `Kesi\u015Fim`,
      "joint.fixed": `Sabit`,
      "joint.revolute": `D\xF6ner`,
      "joint.slider": `Kayar`,
      "joint.cylindrical": `Silindirik`,
      "joint.ball": `Bilye`,
      "joint.free": `Serbest`,
      "joint.suffix": `Eklem`,
      "tree.scene": `Sahne`,
      "tree.parameters": `Parametreler`,
      "tree.scene_tooltip": `Sahneyi inceleyin (arka plan, ortam, \u0131\u015F\u0131klar)`,
      "tree.parameters_tooltip": `Belge parametrelerini d\xFCzenleyin (ba\u011Fl\u0131 alanlar\u0131 ifadeler arac\u0131l\u0131\u011F\u0131yla y\xF6nlendirin)`,
      "tree.sketch.label": `\xC7izim`,
      "tree.sketch.discard_title": `\xC7izim at\u0131ls\u0131n m\u0131?`,
      "tree.sketch.discard_msg": `Kaydedilmemi\u015F geometriniz var.`,
      "tree.sketch.discard": `At`,
      "tree.sketch.keep_editing": `D\xFCzenlemeye devam et`,
      "tree.sketch.cancelled": `\xC7izim iptal edildi`,
      "tree.sketch.discarded": `\xC7izim at\u0131ld\u0131`,
      "tree.sketch.entities": `Varl\u0131klar ({count})`,
      "tree.sketch.constraints": `K\u0131s\u0131tlamalar ({count})`,
      "tree.sketch.profiles": `Profiller ({count})`,
      "tree.sketch.profile": `Profil {n}`,
      "tree.sketch.finish": `Bitir`,
      "tree.sketch.finish_tooltip": `\xC7izimi bitir`,
      "tree.sketch.apply_tooltip": `{label} uygula`,
      "tree.sketch.cancel_tooltip": `\xC7izimi iptal et (Esc)`,
      "tree.sketch.delete_constraint": `K\u0131s\u0131tlamay\u0131 sil`
    },
    zh: {
      "cmd.add_box.label": `\u6DFB\u52A0\u957F\u65B9\u4F53`,
      "cmd.cube.label": `\u6DFB\u52A0\u7ACB\u65B9\u4F53`,
      "cmd.cylinder.label": `\u6DFB\u52A0\u5706\u67F1\u4F53`,
      "cmd.sphere.label": `\u6DFB\u52A0\u7403\u4F53`,
      "cmd.cone.label": `\u6DFB\u52A0\u5706\u9525\u4F53`,
      "cmd.translate.label": `\u79FB\u52A8`,
      "cmd.rotate.label": `\u65CB\u8F6C`,
      "cmd.scale.label": `\u7F29\u653E`,
      "cmd.move_mode.label": `\u79FB\u52A8\u6A21\u5F0F`,
      "cmd.rotate_mode.label": `\u65CB\u8F6C\u6A21\u5F0F`,
      "cmd.scale_mode.label": `\u7F29\u653E\u6A21\u5F0F`,
      "cmd.mirror.label": `\u955C\u50CF`,
      "cmd.union.label": `\u5E76\u96C6`,
      "cmd.difference.label": `\u5DEE\u96C6`,
      "cmd.intersection.label": `\u4EA4\u96C6`,
      "cmd.fillet.label": `\u5706\u89D2`,
      "cmd.chamfer.label": `\u5012\u89D2`,
      "cmd.shell.label": `\u62BD\u58F3`,
      "cmd.stitch.label": `\u7F1D\u5408`,
      "cmd.linear_pattern.label": `\u7EBF\u6027\u9635\u5217`,
      "cmd.circular_pattern.label": `\u73AF\u5F62\u9635\u5217`,
      "cmd.delete.label": `\u5220\u9664`,
      "cmd.delete_selected.label": `\u5220\u9664\u6240\u9009`,
      "cmd.undo.label": `\u64A4\u9500`,
      "cmd.redo.label": `\u91CD\u505A`,
      "cmd.copy.label": `\u590D\u5236`,
      "cmd.paste.label": `\u7C98\u8D34`,
      "cmd.duplicate.label": `\u518D\u5236`,
      "cmd.select_all.label": `\u5168\u9009`,
      "cmd.deselect.label": `\u53D6\u6D88\u9009\u62E9`,
      "cmd.deselect_all.label": `\u53D6\u6D88\u5168\u90E8\u9009\u62E9`,
      "cmd.new.label": `\u65B0\u5EFA\u6587\u6863`,
      "cmd.new_short.label": `\u65B0\u5EFA`,
      "cmd.open.label": `\u6253\u5F00`,
      "cmd.open_dots.label": `\u6253\u5F00\u2026`,
      "cmd.open_cloud.label": `\u4ECE\u4E91\u7AEF\u6253\u5F00\u2026`,
      "cmd.save.label": `\u4FDD\u5B58`,
      "cmd.export_stl.label": `\u5BFC\u51FA STL`,
      "cmd.export_glb.label": `\u5BFC\u51FA GLB`,
      "cmd.export_step.label": `\u5BFC\u51FA STEP`,
      "cmd.quit.label": `\u9000\u51FA`,
      "cmd.toggle_sidebar.label": `\u5207\u6362\u4FA7\u8FB9\u680F`,
      "cmd.toggle_feature_tree.label": `\u5207\u6362\u7279\u5F81\u6811`,
      "cmd.toggle_chat.label": `\u5207\u6362\u804A\u5929`,
      "cmd.toggle_status_bar.label": `\u5207\u6362\u72B6\u6001\u680F`,
      "cmd.toggle_devtools.label": `\u5207\u6362\u5F00\u53D1\u8005\u5DE5\u5177`,
      "cmd.toggle_wireframe.label": `\u5207\u6362\u7EBF\u6846\u6A21\u5F0F`,
      "cmd.toggle_grid_snap.label": `\u5207\u6362\u7F51\u683C\u6355\u6349`,
      "cmd.cycle_theme.label": `\u5207\u6362\u4E3B\u9898`,
      "cmd.camera_iso.label": `\u7B49\u8F74\u6D4B\u89C6\u56FE`,
      "cmd.camera_top.label": `\u9876\u89C6\u56FE`,
      "cmd.camera_front.label": `\u524D\u89C6\u56FE`,
      "cmd.camera_right.label": `\u53F3\u89C6\u56FE`,
      "cmd.camera_fit.label": `\u9002\u5E94\u5C4F\u5E55`,
      "cmd.fit_to_view.label": `\u9002\u5E94\u89C6\u56FE`,
      "cmd.palette.label": `\u547D\u4EE4\u9762\u677F`,
      "cmd.palette_dots.label": `\u547D\u4EE4\u9762\u677F\u2026`,
      "cmd.sketch.label": `\u65B0\u5EFA\u8349\u56FE`,
      "cmd.sketch_dots.label": `\u65B0\u5EFA\u8349\u56FE\u2026`,
      "cmd.slicer.label": `\u6253\u5370\uFF08\u5207\u7247\u5668\uFF09\u2026`,
      "cmd.cam.label": `CAM\uFF08\u5200\u5177\u8DEF\u5F84\uFF09\u2026`,
      "cmd.about.label": `\u5173\u4E8E vcad`,
      "cmd.whats_new.label": `\u65B0\u529F\u80FD`,
      "cmd.open_docs.label": `\u6253\u5F00\u6587\u6863`,
      "cmd.documentation.label": `\u6587\u6863`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `\u521B\u5EFA\u96F6\u4EF6\u5B9A\u4E49`,
      "cmd.insert_instance.label": `\u63D2\u5165\u5B9E\u4F8B`,
      "cmd.add_fixed_joint.label": `\u6DFB\u52A0\u56FA\u5B9A\u63A5\u5934`,
      "cmd.add_revolute_joint.label": `\u6DFB\u52A0\u65CB\u8F6C\u63A5\u5934`,
      "cmd.add_slider_joint.label": `\u6DFB\u52A0\u6ED1\u52A8\u63A5\u5934`,
      "cmd.set_ground.label": `\u8BBE\u4E3A\u57FA\u5EA7`,
      "cmd.enter_electronics.label": `\u6253\u5F00\u7535\u5B50\u8BBE\u8BA1`,
      "cmd.exit_electronics.label": `\u5173\u95ED\u7535\u5B50\u8BBE\u8BA1`,
      "menu.file": `\u6587\u4EF6`,
      "menu.edit": `\u7F16\u8F91`,
      "menu.view": `\u89C6\u56FE`,
      "menu.tools": `\u5DE5\u5177`,
      "menu.help": `\u5E2E\u52A9`,
      "menu.file.new": `\u65B0\u5EFA`,
      "menu.file.open": `\u6253\u5F00\u2026`,
      "menu.file.save": `\u4FDD\u5B58`,
      "menu.file.share_link": `\u5206\u4EAB\u94FE\u63A5\u2026`,
      "menu.file.version_history": `\u7248\u672C\u5386\u53F2\u2026`,
      "menu.file.export": `\u5BFC\u51FA`,
      "menu.file.export_stl": `\u5BFC\u51FA STL`,
      "menu.file.export_glb": `\u5BFC\u51FA GLB`,
      "menu.file.export_step": `\u5BFC\u51FA STEP`,
      "menu.file.examples": `\u793A\u4F8B`,
      "menu.file.quit": `\u9000\u51FA`,
      "menu.edit.undo": `\u64A4\u9500`,
      "menu.edit.redo": `\u91CD\u505A`,
      "menu.edit.delete": `\u5220\u9664`,
      "menu.edit.duplicate": `\u518D\u5236`,
      "menu.edit.select_all": `\u5168\u9009`,
      "menu.edit.deselect": `\u53D6\u6D88\u9009\u62E9`,
      "menu.view.toggle_sidebar": `\u5207\u6362\u4FA7\u8FB9\u680F`,
      "menu.view.toggle_chat": `\u5207\u6362\u804A\u5929`,
      "menu.view.camera_iso": `\u7B49\u8F74\u6D4B\u89C6\u56FE`,
      "menu.view.camera_top": `\u9876\u89C6\u56FE`,
      "menu.view.camera_front": `\u524D\u89C6\u56FE`,
      "menu.view.camera_right": `\u53F3\u89C6\u56FE`,
      "menu.view.camera_fit": `\u9002\u5E94\u5C4F\u5E55`,
      "menu.view.wireframe": `\u7EBF\u6846\u6A21\u5F0F`,
      "menu.view.cycle_theme": `\u5207\u6362\u4E3B\u9898`,
      "menu.view.input_preferences": `\u8F93\u5165\u504F\u597D\u8BBE\u7F6E\u2026`,
      "menu.view.ray_tracing": `\u5149\u7EBF\u8FFD\u8E2A`,
      "menu.view.ray_tracing.off": `\u5173\u95ED`,
      "menu.view.ray_tracing.draft": `\u8349\u56FE\u8D28\u91CF`,
      "menu.view.ray_tracing.standard": `\u6807\u51C6\u8D28\u91CF`,
      "menu.view.ray_tracing.high": `\u9AD8\u8D28\u91CF`,
      "menu.view.ray_tracing.edges_on": `\u663E\u793A\u8FB9\u7EBF`,
      "menu.view.ray_tracing.edges_off": `\u9690\u85CF\u8FB9\u7EBF`,
      "menu.tools.palette": `\u547D\u4EE4\u9762\u677F\u2026`,
      "menu.tools.sketch": `\u65B0\u5EFA\u8349\u56FE`,
      "menu.help.about": `\u5173\u4E8E vcad`,
      "menu.help.docs": `\u6253\u5F00\u6587\u6863`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `\u521B\u5EFA`,
      "toolbar.tab.sketch": `\u8349\u56FE`,
      "toolbar.tab.transform": `\u53D8\u6362`,
      "toolbar.tab.combine": `\u7EC4\u5408`,
      "toolbar.tab.modify": `\u4FEE\u6539`,
      "toolbar.tab.assembly": `\u88C5\u914D`,
      "toolbar.tab.simulate": `\u4EFF\u771F`,
      "toolbar.tab.export": `\u5BFC\u51FA`,
      "toolbar.tool.box": `\u957F\u65B9\u4F53`,
      "toolbar.tool.cyl": `\u5706\u67F1`,
      "toolbar.tool.sph": `\u7403\u4F53`,
      "toolbar.tool.cone": `\u5706\u9525`,
      "toolbar.tool.sketch": `\u8349\u56FE`,
      "toolbar.tool.move": `\u79FB\u52A8`,
      "toolbar.tool.rotate": `\u65CB\u8F6C`,
      "toolbar.tool.scale": `\u7F29\u653E`,
      "toolbar.tool.union": `\u5E76\u96C6`,
      "toolbar.tool.diff": `\u5DEE\u96C6`,
      "toolbar.tool.isect": `\u4EA4\u96C6`,
      "toolbar.tool.fillet": `\u5706\u89D2`,
      "toolbar.tool.chamfer": `\u5012\u89D2`,
      "toolbar.tool.shell": `\u62BD\u58F3`,
      "toolbar.tool.pattern": `\u9635\u5217`,
      "toolbar.tool.mirror": `\u955C\u50CF`,
      "toolbar.tool.part": `\u96F6\u4EF6`,
      "toolbar.tool.instance": `\u5B9E\u4F8B`,
      "toolbar.tool.joint": `\u63A5\u5934`,
      "toolbar.tool.play": `\u64AD\u653E`,
      "toolbar.tool.pause": `\u6682\u505C`,
      "toolbar.tool.step": `\u5355\u6B65`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `\u4FDD\u5B58`,
      "toolbar.hint.numeric": `\u2190\u2192\uFF1A\u62D6\u52A8\u8C03\u6574  Enter\uFF1A\u5E94\u7528  Esc\uFF1A\u53D6\u6D88`,
      "toolbar.hint.text": `Enter\uFF1A\u5E94\u7528  Esc\uFF1A\u53D6\u6D88`,
      "status.modified": `\u5DF2\u4FEE\u6539`,
      "status.saved": `\u5DF2\u4FDD\u5B58`,
      "status.part": `{count} \u4E2A\u96F6\u4EF6`,
      "status.parts": `{count} \u4E2A\u96F6\u4EF6`,
      "status.sel": `\u5DF2\u9009 {count}`,
      "status.console_empty": `\u63A7\u5236\u53F0\u4E3A\u7A7A`,
      "status.ago.now": `\u521A\u521A`,
      "status.ago.seconds": `{count} \u79D2\u524D`,
      "status.ago.minutes": `{count} \u5206\u949F\u524D`,
      "status.ago.hours": `{count} \u5C0F\u65F6\u524D`,
      "welcome.tagline": `\u9762\u5411\u6240\u6709\u4EBA\u7684\u514D\u8D39\u53C2\u6570\u5316 CAD`,
      "welcome.new_project": `\u65B0\u5EFA\u9879\u76EE`,
      "welcome.blank_project": `\u7A7A\u767D\u9879\u76EE`,
      "welcome.open_file": `\u6253\u5F00\u6587\u4EF6`,
      "welcome.hint.new": `\u5F15\u5BFC\u5F0F\u6559\u7A0B`,
      "welcome.hint.blank": `\u7A7A\u767D\u753B\u5E03`,
      "welcome.hint.open": `\uFF1A\u6253\u5F00`,
      "welcome.footer": `\u2191\u2193 \u5BFC\u822A  enter \u9009\u62E9  esc \u5173\u95ED`,
      "tree.header": `\u96F6\u4EF6`,
      "tree.empty": `\u65E0\u96F6\u4EF6`,
      "desktop.menu.open_recent": `\u6253\u5F00\u6700\u8FD1\u7684\u6587\u4EF6\u2026`,
      "desktop.menu.open_cloud": `\u4ECE\u4E91\u7AEF\u6253\u5F00\u2026`,
      "desktop.menu.toggle_status_bar": `\u5207\u6362\u72B6\u6001\u680F`,
      "desktop.menu.camera_iso": `\u7B49\u8F74\u6D4B`,
      "desktop.menu.camera_fit": `\u9002\u5E94\u6240\u9009`,
      "desktop.menu.toggle_grid_snap": `\u5207\u6362\u7F51\u683C\u6355\u6349`,
      "desktop.menu.slicer": `\u5207\u7247\u5668`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `\u68C0\u67E5\u66F4\u65B0\u2026`,
      "desktop.menu.whats_new": `\u65B0\u529F\u80FD`,
      "desktop.menu.documentation": `\u6587\u6863`,
      "desktop.menu.camera_top": `\u9876\u89C6\u56FE`,
      "desktop.menu.camera_front": `\u524D\u89C6\u56FE`,
      "desktop.menu.camera_right": `\u53F3\u89C6\u56FE`,
      "modal.about.tagline": `\u9762\u5411\u6240\u6709\u4EBA\u7684\u53C2\u6570\u5316 CAD`,
      "modal.about.action.shape": `\u6DFB\u52A0\u5F62\u72B6`,
      "modal.about.action.shape_desc": `\u957F\u65B9\u4F53\u3001\u5706\u67F1\u4F53\u3001\u7403\u4F53`,
      "modal.about.action.sketch": `\u5F00\u59CB\u7ED8\u5236\u8349\u56FE`,
      "modal.about.action.sketch_desc": `\u7ED8\u5236 2D \u2192 \u62C9\u4F38\u4E3A 3D`,
      "modal.about.action.open": `\u6253\u5F00\u6587\u4EF6`,
      "modal.about.action.open_desc": `.vcad\u3001.step\u3001.stl`,
      "modal.about.action.tutorial": `\u5FEB\u901F\u6559\u7A0B`,
      "modal.about.action.tutorial_desc": `\u5B66\u4E60\u57FA\u7840\u77E5\u8BC6`,
      "modal.about.keyhint.palette": `\u804A\u5929\u4E0E\u547D\u4EE4`,
      "modal.about.keyhint.tabs": `\u5207\u6362\u5DE5\u5177\u680F\u6807\u7B7E\u9875`,
      "modal.about.keyhint.transform": `\u79FB\u52A8\u3001\u65CB\u8F6C\u3001\u7F29\u653E`,
      "modal.about.keyhint.boolean": `\u5E03\u5C14\u8FD0\u7B97\uFF08\u5DF2\u9009\u4E2D 2 \u4E2A\uFF09`,
      "modal.about.docs": `\u6587\u6863`,
      "modal.about.whats_new": `\u65B0\u529F\u80FD`,
      "footer.privacy": `\u9690\u79C1`,
      "footer.terms": `\u6761\u6B3E`,
      "footer.security": `\u5B89\u5168`,
      "tutorial.add_cube.instruction": `\u6253\u5F00\u201C\u521B\u5EFA\u201D \u2192 \u70B9\u51FB\u957F\u65B9\u4F53`,
      "tutorial.add_cube.detail": `\u5728\u573A\u666F\u4E2D\u6DFB\u52A0\u4F60\u7684\u7B2C\u4E00\u4E2A\u5F62\u72B6`,
      "tutorial.add_cylinder.instruction": `\u6253\u5F00\u201C\u521B\u5EFA\u201D \u2192 \u6DFB\u52A0\u4E00\u4E2A\u5706\u67F1\u4F53`,
      "tutorial.add_cylinder.detail": `\u6211\u4EEC\u5C06\u4ECE\u7ACB\u65B9\u4F53\u4E2D\u51CF\u53BB\u5B83`,
      "tutorial.position_cylinder.instruction": `\u5411\u4E0A\u79FB\u52A8\u5706\u67F1\u4F53`,
      "tutorial.position_cylinder.detail": `\u62D6\u52A8\u64CD\u63A7\u5668\u4E0A\u7684\u7EFF\u8272\u7BAD\u5934`,
      "tutorial.subtract.instruction": `\u6253\u5F00\u201C\u7EC4\u5408\u201D \u2192 \u70B9\u51FB\u5DEE\u96C6`,
      "tutorial.subtract.detail": `\u5148\u9009\u4E2D\u4E24\u4E2A\u96F6\u4EF6\uFF08\u2318\u70B9\u51FB\u6216\u6846\u9009\uFF09`,
      "tutorial.celebrate.instruction": `\u4F60\u5B8C\u6210\u4E86\u7B2C\u4E00\u4E2A\u96F6\u4EF6\uFF01`,
      "tutorial.celebrate.detail": `\u4F60\u5DF2\u7ECF\u638C\u63E1\u4E86 CSG \u5DE5\u4F5C\u6D41\u7A0B`,
      "tutorial.skip": `\u8DF3\u8FC7\u6559\u7A0B`,
      "tutorial.start_building": `\u5F00\u59CB\u5EFA\u6A21`,
      "tutorial.skip_short": `\u8DF3\u8FC7\u6559\u7A0B`,
      "error.boundary.title": `\u51FA\u9519\u4E86`,
      "error.boundary.unexpected": `\u53D1\u751F\u4E86\u610F\u5916\u9519\u8BEF`,
      "error.boundary.reload": `\u91CD\u65B0\u52A0\u8F7D\u5E94\u7528`,
      "error.boundary.cache_hint": `\u5982\u679C\u95EE\u9898\u6301\u7EED\u5B58\u5728\uFF0C\u8BF7\u5C1D\u8BD5\u6E05\u9664\u6D4F\u89C8\u5668\u7F13\u5B58\u3002`,
      "error.engine": `\u5F15\u64CE\u9519\u8BEF`,
      "status.offline": `\u79BB\u7EBF`,
      "status.console_open": `\u6253\u5F00\u63A7\u5236\u53F0\uFF08~\uFF09`,
      "status.console_empty_title": `\u63A7\u5236\u53F0\uFF08\u7A7A\uFF09`,
      "status.cursor_pos": `\u5149\u6807\u5728\u5730\u9762\u4E0A\u7684\u4F4D\u7F6E\uFF08\u6BEB\u7C73\uFF09`,
      "status.language": `\u8BED\u8A00`,
      "banner.readonly.viewing": `\u6B63\u5728\u67E5\u770B {name}\uFF08\u53EA\u8BFB\uFF09`,
      "banner.readonly.fork": `\u767B\u5F55\u4EE5\u521B\u5EFA\u526F\u672C`,
      "modal.fork.title": `\u6B64\u6587\u6863\u4E3A\u53EA\u8BFB`,
      "modal.fork.description": `\u767B\u5F55\u4EE5\u521B\u5EFA\u4F60\u81EA\u5DF1\u7684\u53EF\u7F16\u8F91\u526F\u672C\u3002\u4F60\u7684\u4FEE\u6539\u4E0D\u4F1A\u5F71\u54CD\u539F\u6587\u6863\u2014\u2014\u4F60\u5C06\u5728\u81EA\u5DF1\u7684\u8D26\u6237\u4E2D\u83B7\u5F97\u4E00\u4EFD\u65B0\u7684\u526F\u672C\u3002`,
      "modal.fork.keep_viewing": `\u7EE7\u7EED\u67E5\u770B`,
      "modal.fork.signin": `\u767B\u5F55\u4EE5\u521B\u5EFA\u526F\u672C`,
      "palette.placeholder": `\u8F93\u5165\u547D\u4EE4\u6216\u63CF\u8FF0\u8981\u521B\u5EFA\u7684\u5185\u5BB9...`,
      "palette.title": `\u547D\u4EE4\u9762\u677F`,
      "palette.generating": `\u6B63\u5728\u751F\u6210...`,
      "palette.section.get_started": `\u5F00\u59CB\u4F7F\u7528`,
      "palette.section.examples": `\u793A\u4F8B`,
      "palette.section.ask_ai_inline": `\u6216\u63CF\u8FF0\u4F60\u60F3\u521B\u5EFA\u7684\u5185\u5BB9`,
      "palette.section.ask_ai": `\u8BE2\u95EE AI`,
      "palette.action.new_project": `\u65B0\u5EFA\u9879\u76EE`,
      "palette.action.new_project_hint": `\u5F15\u5BFC\u5F0F\u6559\u7A0B`,
      "palette.action.blank_project": `\u7A7A\u767D\u9879\u76EE`,
      "palette.action.blank_project_hint": `\u8DF3\u8FC7\u6559\u7A0B`,
      "palette.action.open_file": `\u6253\u5F00\u6587\u4EF6`,
      "palette.generate_label": `\u751F\u6210\uFF1A`,
      "palette.kbd_server": `\u670D\u52A1\u5668`,
      "palette.empty": `\u672A\u627E\u5230\u547D\u4EE4`,
      "palette.failed_to_load": `\u52A0\u8F7D\u6587\u4EF6\u5931\u8D25`,
      "panel.section.material": `\u6750\u8D28`,
      "panel.section.position": `\u4F4D\u7F6E`,
      "panel.section.rotation": `\u65CB\u8F6C`,
      "panel.section.scale": `\u7F29\u653E`,
      "panel.section.dimensions": `\u5C3A\u5BF8`,
      "panel.section.operation": `\u64CD\u4F5C`,
      "panel.section.profile": `\u8F6E\u5ED3`,
      "panel.section.path": `\u8DEF\u5F84`,
      "panel.section.depth": `\u6DF1\u5EA6`,
      "panel.section.angle": `\u89D2\u5EA6`,
      "panel.section.axis": `\u8F74`,
      "panel.section.radius": `\u534A\u5F84`,
      "panel.section.distance": `\u8DDD\u79BB`,
      "panel.section.thickness": `\u539A\u5EA6`,
      "panel.section.direction": `\u65B9\u5411`,
      "panel.section.count": `\u6570\u91CF`,
      "panel.section.spacing": `\u95F4\u8DDD`,
      "panel.section.profiles": `\u8F6E\u5ED3`,
      "panel.section.closed": `\u95ED\u5408`,
      "panel.section.text": `\u6587\u672C`,
      "panel.section.size": `\u5927\u5C0F`,
      "panel.section.font": `\u5B57\u4F53`,
      "panel.section.taper": `\u62D4\u6A21`,
      "panel.section.twist": `\u626D\u66F2`,
      "panel.section.orientation": `\u65B9\u5411`,
      "panel.section.helix": `\u87BA\u65CB\u8DEF\u5F84`,
      "panel.section.quality": `\u8D28\u91CF`,
      "panel.section.axis_origin": `\u8F74\u539F\u70B9`,
      "panel.section.axis_dir": `\u8F74\u65B9\u5411`,
      "panel.section.part_def": `\u96F6\u4EF6\u5B9A\u4E49`,
      "panel.section.connection": `\u8FDE\u63A5`,
      "panel.section.state": `\u72B6\u6001`,
      "panel.section.type": `\u7C7B\u578B`,
      "panel.section.mirror": `\u955C\u50CF`,
      "panel.tooltip.material": `\u4E3A\u6B64\u96F6\u4EF6\u6307\u5B9A\u6750\u8D28`,
      "panel.tooltip.material_instance": `\u4E3A\u6B64\u5B9E\u4F8B\u6307\u5B9A\u6750\u8D28`,
      "panel.tooltip.position": `\u76F8\u5BF9\u539F\u70B9\u7684\u4F4D\u7F6E\u504F\u79FB\uFF08\u6BEB\u7C73\uFF09`,
      "panel.tooltip.position_world": `\u4E16\u754C\u7A7A\u95F4\u4E2D\u7684\u4F4D\u7F6E\uFF08\u6BEB\u7C73\uFF09`,
      "panel.tooltip.rotation": `\u7ED5\u5404\u8F74\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF08\u5EA6\uFF09`,
      "panel.tooltip.rotation_world": `\u4E16\u754C\u7A7A\u95F4\u4E2D\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF08\u5EA6\uFF09`,
      "panel.tooltip.scale": `\u6CBF\u5404\u8F74\u7684\u7F29\u653E\u7CFB\u6570`,
      "panel.tooltip.dimensions_box": `\u957F\u65B9\u4F53\u7684\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u548C\u6DF1\u5EA6\uFF08\u6BEB\u7C73\uFF09`,
      "panel.tooltip.dimensions_cylinder": `\u5706\u67F1\u4F53\u7684\u534A\u5F84\u548C\u9AD8\u5EA6\uFF08\u6BEB\u7C73\uFF09`,
      "panel.tooltip.dimensions_sphere": `\u7403\u4F53\u7684\u534A\u5F84\uFF08\u6BEB\u7C73\uFF09`,
      "panel.tooltip.fillet_radius": `\u5706\u89D2\u534A\u5F84\uFF08\u6BEB\u7C73\uFF09`,
      "panel.tooltip.chamfer_distance": `\u5012\u89D2\u8DDD\u79BB\uFF08\u6BEB\u7C73\uFF09`,
      "panel.tooltip.shell_thickness": `\u58C1\u539A\uFF08\u6BEB\u7C73\uFF09`,
      "panel.tooltip.mirror_readonly": `\u6682\u4E0D\u652F\u6301\u7F16\u8F91`,
      "panel.back_to_tree": `\u8FD4\u56DE\u7279\u5F81\u6811`,
      "panel.parts_selected": `\u5DF2\u9009\u4E2D {count} \u4E2A\u96F6\u4EF6`,
      "panel.select_single": `\u9009\u62E9\u5355\u4E2A\u96F6\u4EF6\u4EE5\u7F16\u8F91\u5C5E\u6027`,
      "panel.edit_circuit": `\u7F16\u8F91\u7535\u8DEF`,
      "panel.open_embroidery": `\u6253\u5F00\u523A\u7EE3\u9762\u677F`,
      "panel.parent": `\u7236\u7EA7\uFF1A`,
      "panel.child": `\u5B50\u7EA7\uFF1A`,
      "panel.ground": `\u57FA\u5EA7`,
      "panel.mirror_readonly": `\u955C\u50CF\u5E73\u9762\u53C2\u6570\u4E3A\u53EA\u8BFB`,
      "bool.union": `\u5E76\u96C6`,
      "bool.difference": `\u5DEE\u96C6`,
      "bool.intersection": `\u4EA4\u96C6`,
      "joint.fixed": `\u56FA\u5B9A`,
      "joint.revolute": `\u65CB\u8F6C`,
      "joint.slider": `\u6ED1\u52A8`,
      "joint.cylindrical": `\u5706\u67F1`,
      "joint.ball": `\u7403`,
      "joint.free": `\u81EA\u7531`,
      "joint.suffix": `\u63A5\u5934`,
      "tree.scene": `\u573A\u666F`,
      "tree.parameters": `\u53C2\u6570`,
      "tree.scene_tooltip": `\u68C0\u67E5\u573A\u666F\uFF08\u80CC\u666F\u3001\u73AF\u5883\u3001\u706F\u5149\uFF09`,
      "tree.parameters_tooltip": `\u7F16\u8F91\u6587\u6863\u53C2\u6570\uFF08\u901A\u8FC7\u8868\u8FBE\u5F0F\u9A71\u52A8\u7ED1\u5B9A\u5B57\u6BB5\uFF09`,
      "tree.sketch.label": `\u8349\u56FE`,
      "tree.sketch.discard_title": `\u653E\u5F03\u8349\u56FE\uFF1F`,
      "tree.sketch.discard_msg": `\u4F60\u6709\u672A\u4FDD\u5B58\u7684\u51E0\u4F55\u56FE\u5F62\u3002`,
      "tree.sketch.discard": `\u653E\u5F03`,
      "tree.sketch.keep_editing": `\u7EE7\u7EED\u7F16\u8F91`,
      "tree.sketch.cancelled": `\u8349\u56FE\u5DF2\u53D6\u6D88`,
      "tree.sketch.discarded": `\u8349\u56FE\u5DF2\u653E\u5F03`,
      "tree.sketch.entities": `\u5B9E\u4F53 ({count})`,
      "tree.sketch.constraints": `\u7EA6\u675F ({count})`,
      "tree.sketch.profiles": `\u8F6E\u5ED3 ({count})`,
      "tree.sketch.profile": `\u8F6E\u5ED3 {n}`,
      "tree.sketch.finish": `\u5B8C\u6210`,
      "tree.sketch.finish_tooltip": `\u5B8C\u6210\u8349\u56FE`,
      "tree.sketch.apply_tooltip": `\u5E94\u7528 {label}`,
      "tree.sketch.cancel_tooltip": `\u53D6\u6D88\u8349\u56FE\uFF08Esc\uFF09`,
      "tree.sketch.delete_constraint": `\u5220\u9664\u7EA6\u675F`
    },
    "zh-tw": {
      "cmd.add_box.label": `\u65B0\u589E\u65B9\u584A`,
      "cmd.cube.label": `\u65B0\u589E\u7ACB\u65B9\u9AD4`,
      "cmd.cylinder.label": `\u65B0\u589E\u5713\u67F1\u9AD4`,
      "cmd.sphere.label": `\u65B0\u589E\u7403\u9AD4`,
      "cmd.cone.label": `\u65B0\u589E\u5713\u9310\u9AD4`,
      "cmd.translate.label": `\u79FB\u52D5`,
      "cmd.rotate.label": `\u65CB\u8F49`,
      "cmd.scale.label": `\u7E2E\u653E`,
      "cmd.move_mode.label": `\u79FB\u52D5\u6A21\u5F0F`,
      "cmd.rotate_mode.label": `\u65CB\u8F49\u6A21\u5F0F`,
      "cmd.scale_mode.label": `\u7E2E\u653E\u6A21\u5F0F`,
      "cmd.mirror.label": `\u93E1\u5C04`,
      "cmd.union.label": `\u806F\u96C6`,
      "cmd.difference.label": `\u5DEE\u96C6`,
      "cmd.intersection.label": `\u4EA4\u96C6`,
      "cmd.fillet.label": `\u5713\u89D2`,
      "cmd.chamfer.label": `\u5012\u89D2`,
      "cmd.shell.label": `\u8584\u6BBC`,
      "cmd.stitch.label": `\u7E2B\u5408`,
      "cmd.linear_pattern.label": `\u7DDA\u6027\u9663\u5217`,
      "cmd.circular_pattern.label": `\u74B0\u72C0\u9663\u5217`,
      "cmd.delete.label": `\u522A\u9664`,
      "cmd.delete_selected.label": `\u522A\u9664\u9078\u53D6\u9805\u76EE`,
      "cmd.undo.label": `\u5FA9\u539F`,
      "cmd.redo.label": `\u91CD\u505A`,
      "cmd.copy.label": `\u8907\u88FD`,
      "cmd.paste.label": `\u8CBC\u4E0A`,
      "cmd.duplicate.label": `\u518D\u88FD`,
      "cmd.select_all.label": `\u5168\u9078`,
      "cmd.deselect.label": `\u53D6\u6D88\u9078\u53D6`,
      "cmd.deselect_all.label": `\u53D6\u6D88\u5168\u90E8\u9078\u53D6`,
      "cmd.new.label": `\u65B0\u589E\u6587\u4EF6`,
      "cmd.new_short.label": `\u65B0\u589E`,
      "cmd.open.label": `\u958B\u555F`,
      "cmd.open_dots.label": `\u958B\u555F\u2026`,
      "cmd.open_cloud.label": `\u5F9E\u96F2\u7AEF\u958B\u555F\u2026`,
      "cmd.save.label": `\u5132\u5B58`,
      "cmd.export_stl.label": `\u532F\u51FA STL`,
      "cmd.export_glb.label": `\u532F\u51FA GLB`,
      "cmd.export_step.label": `\u532F\u51FA STEP`,
      "cmd.quit.label": `\u7D50\u675F`,
      "cmd.toggle_sidebar.label": `\u5207\u63DB\u5074\u908A\u6B04`,
      "cmd.toggle_feature_tree.label": `\u5207\u63DB\u7279\u5FB5\u6A39`,
      "cmd.toggle_chat.label": `\u5207\u63DB\u804A\u5929`,
      "cmd.toggle_status_bar.label": `\u5207\u63DB\u72C0\u614B\u5217`,
      "cmd.toggle_devtools.label": `\u5207\u63DB\u958B\u767C\u8005\u5DE5\u5177`,
      "cmd.toggle_wireframe.label": `\u5207\u63DB\u7DDA\u6846\u6A21\u5F0F`,
      "cmd.toggle_grid_snap.label": `\u5207\u63DB\u683C\u9EDE\u5438\u9644`,
      "cmd.cycle_theme.label": `\u5FAA\u74B0\u5207\u63DB\u4F48\u666F\u4E3B\u984C`,
      "cmd.camera_iso.label": `\u7B49\u89D2\u8996\u5716`,
      "cmd.camera_top.label": `\u4E0A\u8996\u5716`,
      "cmd.camera_front.label": `\u524D\u8996\u5716`,
      "cmd.camera_right.label": `\u53F3\u8996\u5716`,
      "cmd.camera_fit.label": `\u7E2E\u653E\u81F3\u5168\u87A2\u5E55`,
      "cmd.fit_to_view.label": `\u7E2E\u653E\u81F3\u8996\u5716`,
      "cmd.palette.label": `\u547D\u4EE4\u9762\u677F`,
      "cmd.palette_dots.label": `\u547D\u4EE4\u9762\u677F\u2026`,
      "cmd.sketch.label": `\u65B0\u589E\u8349\u5716`,
      "cmd.sketch_dots.label": `\u65B0\u589E\u8349\u5716\u2026`,
      "cmd.slicer.label": `\u5217\u5370\uFF08\u5207\u7247\u5668\uFF09\u2026`,
      "cmd.cam.label": `CAM\uFF08\u5200\u5177\u8DEF\u5F91\uFF09\u2026`,
      "cmd.about.label": `\u95DC\u65BC vcad`,
      "cmd.whats_new.label": `\u65B0\u529F\u80FD`,
      "cmd.open_docs.label": `\u958B\u555F\u6587\u4EF6`,
      "cmd.documentation.label": `\u8AAA\u660E\u6587\u4EF6`,
      "cmd.open_github.label": `GitHub`,
      "cmd.open_discord.label": `Discord`,
      "cmd.create_part_def.label": `\u5EFA\u7ACB\u96F6\u4EF6\u5B9A\u7FA9`,
      "cmd.insert_instance.label": `\u63D2\u5165\u5BE6\u4F8B`,
      "cmd.add_fixed_joint.label": `\u65B0\u589E\u56FA\u5B9A\u63A5\u982D`,
      "cmd.add_revolute_joint.label": `\u65B0\u589E\u65CB\u8F49\u63A5\u982D`,
      "cmd.add_slider_joint.label": `\u65B0\u589E\u6ED1\u52D5\u63A5\u982D`,
      "cmd.set_ground.label": `\u8A2D\u70BA\u5730\u9762`,
      "cmd.enter_electronics.label": `\u958B\u555F\u96FB\u8DEF`,
      "cmd.exit_electronics.label": `\u95DC\u9589\u96FB\u8DEF`,
      "menu.file": `\u6A94\u6848`,
      "menu.edit": `\u7DE8\u8F2F`,
      "menu.view": `\u6AA2\u8996`,
      "menu.tools": `\u5DE5\u5177`,
      "menu.help": `\u8AAA\u660E`,
      "menu.file.new": `\u65B0\u589E`,
      "menu.file.open": `\u958B\u555F\u2026`,
      "menu.file.save": `\u5132\u5B58`,
      "menu.file.share_link": `\u5206\u4EAB\u9023\u7D50\u2026`,
      "menu.file.version_history": `\u7248\u672C\u6B77\u53F2\u2026`,
      "menu.file.export": `\u532F\u51FA`,
      "menu.file.export_stl": `\u532F\u51FA STL`,
      "menu.file.export_glb": `\u532F\u51FA GLB`,
      "menu.file.export_step": `\u532F\u51FA STEP`,
      "menu.file.examples": `\u7BC4\u4F8B`,
      "menu.file.quit": `\u7D50\u675F`,
      "menu.edit.undo": `\u5FA9\u539F`,
      "menu.edit.redo": `\u91CD\u505A`,
      "menu.edit.delete": `\u522A\u9664`,
      "menu.edit.duplicate": `\u518D\u88FD`,
      "menu.edit.select_all": `\u5168\u9078`,
      "menu.edit.deselect": `\u53D6\u6D88\u9078\u53D6`,
      "menu.view.toggle_sidebar": `\u5207\u63DB\u5074\u908A\u6B04`,
      "menu.view.toggle_chat": `\u5207\u63DB\u804A\u5929`,
      "menu.view.camera_iso": `\u7B49\u89D2\u8996\u5716`,
      "menu.view.camera_top": `\u4E0A\u8996\u5716`,
      "menu.view.camera_front": `\u524D\u8996\u5716`,
      "menu.view.camera_right": `\u53F3\u8996\u5716`,
      "menu.view.camera_fit": `\u7E2E\u653E\u81F3\u5168\u87A2\u5E55`,
      "menu.view.wireframe": `\u7DDA\u6846\u6A21\u5F0F`,
      "menu.view.cycle_theme": `\u5FAA\u74B0\u5207\u63DB\u4F48\u666F\u4E3B\u984C`,
      "menu.view.input_preferences": `\u8F38\u5165\u504F\u597D\u8A2D\u5B9A\u2026`,
      "menu.view.ray_tracing": `\u5149\u7DDA\u8FFD\u8E64`,
      "menu.view.ray_tracing.off": `\u95DC\u9589`,
      "menu.view.ray_tracing.draft": `\u8349\u7A3F`,
      "menu.view.ray_tracing.standard": `\u6A19\u6E96`,
      "menu.view.ray_tracing.high": `\u9AD8`,
      "menu.view.ray_tracing.edges_on": `\u986F\u793A\u908A\u7DE3`,
      "menu.view.ray_tracing.edges_off": `\u96B1\u85CF\u908A\u7DE3`,
      "menu.tools.palette": `\u547D\u4EE4\u9762\u677F\u2026`,
      "menu.tools.sketch": `\u65B0\u589E\u8349\u5716`,
      "menu.help.about": `\u95DC\u65BC vcad`,
      "menu.help.docs": `\u958B\u555F\u6587\u4EF6`,
      "menu.help.github": `GitHub`,
      "menu.help.discord": `Discord`,
      "menu.help.vcad_pro": `vcad Pro`,
      "toolbar.tab.create": `\u5EFA\u7ACB`,
      "toolbar.tab.sketch": `\u8349\u5716`,
      "toolbar.tab.transform": `\u8B8A\u63DB`,
      "toolbar.tab.combine": `\u7D44\u5408`,
      "toolbar.tab.modify": `\u4FEE\u6539`,
      "toolbar.tab.assembly": `\u7D44\u5408\u4EF6`,
      "toolbar.tab.simulate": `\u6A21\u64EC`,
      "toolbar.tab.export": `\u532F\u51FA`,
      "toolbar.tool.box": `\u65B9\u584A`,
      "toolbar.tool.cyl": `\u5713\u67F1`,
      "toolbar.tool.sph": `\u7403\u9AD4`,
      "toolbar.tool.cone": `\u5713\u9310`,
      "toolbar.tool.sketch": `\u8349\u5716`,
      "toolbar.tool.move": `\u79FB\u52D5`,
      "toolbar.tool.rotate": `\u65CB\u8F49`,
      "toolbar.tool.scale": `\u7E2E\u653E`,
      "toolbar.tool.union": `\u806F\u96C6`,
      "toolbar.tool.diff": `\u5DEE\u96C6`,
      "toolbar.tool.isect": `\u4EA4\u96C6`,
      "toolbar.tool.fillet": `\u5713\u89D2`,
      "toolbar.tool.chamfer": `\u5012\u89D2`,
      "toolbar.tool.shell": `\u8584\u6BBC`,
      "toolbar.tool.pattern": `\u9663\u5217`,
      "toolbar.tool.mirror": `\u93E1\u5C04`,
      "toolbar.tool.part": `\u96F6\u4EF6`,
      "toolbar.tool.instance": `\u5BE6\u4F8B`,
      "toolbar.tool.joint": `\u63A5\u982D`,
      "toolbar.tool.play": `\u64AD\u653E`,
      "toolbar.tool.pause": `\u66AB\u505C`,
      "toolbar.tool.step": `\u55AE\u6B65`,
      "toolbar.tool.stl": `STL`,
      "toolbar.tool.step_export": `STEP`,
      "toolbar.tool.save": `\u5132\u5B58`,
      "toolbar.hint.numeric": `\u2190\u2192\uFF1A\u62D6\u66F3\u8ABF\u6574  Enter\uFF1A\u5957\u7528  Esc\uFF1A\u53D6\u6D88`,
      "toolbar.hint.text": `Enter\uFF1A\u5957\u7528  Esc\uFF1A\u53D6\u6D88`,
      "status.modified": `\u5DF2\u4FEE\u6539`,
      "status.saved": `\u5DF2\u5132\u5B58`,
      "status.part": `{count} \u500B\u96F6\u4EF6`,
      "status.parts": `{count} \u500B\u96F6\u4EF6`,
      "status.sel": `\u5DF2\u9078 {count} \u500B`,
      "status.console_empty": `\u4E3B\u63A7\u53F0\u70BA\u7A7A`,
      "status.ago.now": `\u525B\u525B`,
      "status.ago.seconds": `{count} \u79D2`,
      "status.ago.minutes": `{count} \u5206`,
      "status.ago.hours": `{count} \u5C0F\u6642`,
      "welcome.tagline": `\u4EBA\u4EBA\u7686\u53EF\u4F7F\u7528\u7684\u514D\u8CBB\u53C3\u6578\u5F0F CAD`,
      "welcome.new_project": `\u65B0\u589E\u5C08\u6848`,
      "welcome.blank_project": `\u7A7A\u767D\u5C08\u6848`,
      "welcome.open_file": `\u958B\u555F\u6A94\u6848`,
      "welcome.hint.new": `\u5F15\u5C0E\u5F0F\u6559\u5B78`,
      "welcome.hint.blank": `\u7A7A\u767D\u756B\u5E03`,
      "welcome.hint.open": `\uFF1A\u958B\u555F`,
      "welcome.footer": `\u2191\u2193 \u700F\u89BD  enter \u9078\u53D6  esc \u95DC\u9589`,
      "tree.header": `\u96F6\u4EF6`,
      "tree.empty": `\u7121\u96F6\u4EF6`,
      "desktop.menu.open_recent": `\u958B\u555F\u6700\u8FD1\u4F7F\u7528\u2026`,
      "desktop.menu.open_cloud": `\u5F9E\u96F2\u7AEF\u958B\u555F\u2026`,
      "desktop.menu.toggle_status_bar": `\u5207\u63DB\u72C0\u614B\u5217`,
      "desktop.menu.camera_iso": `\u7B49\u89D2`,
      "desktop.menu.camera_fit": `\u7E2E\u653E\u81F3\u9078\u53D6\u9805\u76EE`,
      "desktop.menu.toggle_grid_snap": `\u5207\u63DB\u683C\u9EDE\u5438\u9644`,
      "desktop.menu.slicer": `\u5207\u7247\u5668`,
      "desktop.menu.cam": `CAM`,
      "desktop.menu.check_for_updates": `\u6AA2\u67E5\u66F4\u65B0\u2026`,
      "desktop.menu.whats_new": `\u65B0\u529F\u80FD`,
      "desktop.menu.documentation": `\u8AAA\u660E\u6587\u4EF6`,
      "desktop.menu.camera_top": `\u4E0A`,
      "desktop.menu.camera_front": `\u524D`,
      "desktop.menu.camera_right": `\u53F3`,
      "modal.about.tagline": `\u4EBA\u4EBA\u7686\u53EF\u4F7F\u7528\u7684\u53C3\u6578\u5F0F CAD`,
      "modal.about.action.shape": `\u65B0\u589E\u5F62\u72C0`,
      "modal.about.action.shape_desc": `\u65B9\u584A\u3001\u5713\u67F1\u3001\u7403\u9AD4`,
      "modal.about.action.sketch": `\u958B\u59CB\u8349\u5716`,
      "modal.about.action.sketch_desc": `\u7E6A\u88FD 2D \u2192 \u4F38\u9577\u70BA 3D`,
      "modal.about.action.open": `\u958B\u555F\u6A94\u6848`,
      "modal.about.action.open_desc": `.vcad\u3001.step\u3001.stl`,
      "modal.about.action.tutorial": `\u5FEB\u901F\u6559\u5B78`,
      "modal.about.action.tutorial_desc": `\u5B78\u7FD2\u57FA\u790E\u64CD\u4F5C`,
      "modal.about.keyhint.palette": `\u804A\u5929\u8207\u547D\u4EE4`,
      "modal.about.keyhint.tabs": `\u5207\u63DB\u5DE5\u5177\u5217\u5206\u9801`,
      "modal.about.keyhint.transform": `\u79FB\u52D5\u3001\u65CB\u8F49\u3001\u7E2E\u653E`,
      "modal.about.keyhint.boolean": `\u5E03\u6797\u904B\u7B97\uFF08\u9078\u53D6 2 \u9805\uFF09`,
      "modal.about.docs": `\u6587\u4EF6`,
      "modal.about.whats_new": `\u65B0\u529F\u80FD`,
      "footer.privacy": `\u96B1\u79C1\u6B0A`,
      "footer.terms": `\u670D\u52D9\u689D\u6B3E`,
      "footer.security": `\u5B89\u5168\u6027`,
      "tutorial.add_cube.instruction": `\u958B\u555F\u300C\u5EFA\u7ACB\u300D\u2192 \u9EDE\u64CA\u300C\u65B9\u584A\u300D`,
      "tutorial.add_cube.detail": `\u5728\u5834\u666F\u4E2D\u52A0\u5165\u7B2C\u4E00\u500B\u5F62\u72C0`,
      "tutorial.add_cylinder.instruction": `\u958B\u555F\u300C\u5EFA\u7ACB\u300D\u2192 \u52A0\u5165\u5713\u67F1\u9AD4`,
      "tutorial.add_cylinder.detail": `\u6211\u5011\u5C07\u5F9E\u7ACB\u65B9\u9AD4\u4E2D\u6E1B\u53BB\u9019\u500B\u5713\u67F1`,
      "tutorial.position_cylinder.instruction": `\u5C07\u5713\u67F1\u5F80\u4E0A\u79FB\u52D5`,
      "tutorial.position_cylinder.detail": `\u62D6\u66F3\u64CD\u63A7\u5668\u4E0A\u7684\u7DA0\u8272\u7BAD\u982D`,
      "tutorial.subtract.instruction": `\u958B\u555F\u300C\u7D44\u5408\u300D\u2192 \u9EDE\u64CA\u300C\u5DEE\u96C6\u300D`,
      "tutorial.subtract.detail": `\u8ACB\u5148\u9078\u53D6\u5169\u500B\u96F6\u4EF6\uFF08\u2318-\u9EDE\u64CA\u6216\u62D6\u66F3\uFF09`,
      "tutorial.celebrate.instruction": `\u60A8\u5B8C\u6210\u4E86\u7B2C\u4E00\u500B\u96F6\u4EF6\uFF01`,
      "tutorial.celebrate.detail": `\u60A8\u5DF2\u5B78\u6703 CSG \u5DE5\u4F5C\u6D41\u7A0B`,
      "tutorial.skip": `\u7565\u904E\u6559\u5B78`,
      "tutorial.start_building": `\u958B\u59CB\u5EFA\u6A21`,
      "tutorial.skip_short": `\u7565\u904E\u6559\u5B78`,
      "error.boundary.title": `\u767C\u751F\u932F\u8AA4`,
      "error.boundary.unexpected": `\u767C\u751F\u672A\u9810\u671F\u7684\u932F\u8AA4`,
      "error.boundary.reload": `\u91CD\u65B0\u8F09\u5165\u61C9\u7528\u7A0B\u5F0F`,
      "error.boundary.cache_hint": `\u82E5\u554F\u984C\u6301\u7E8C\u767C\u751F\uFF0C\u8ACB\u5617\u8A66\u6E05\u9664\u700F\u89BD\u5668\u5FEB\u53D6\u3002`,
      "error.engine": `\u5F15\u64CE\u932F\u8AA4`,
      "status.offline": `\u96E2\u7DDA`,
      "status.console_open": `\u958B\u555F\u4E3B\u63A7\u53F0 (~)`,
      "status.console_empty_title": `\u4E3B\u63A7\u53F0\uFF08\u7A7A\u767D\uFF09`,
      "status.cursor_pos": `\u6E38\u6A19\u65BC\u5730\u9762\u5E73\u9762\u7684\u4F4D\u7F6E\uFF08\u516C\u91D0\uFF09`,
      "status.language": `\u8A9E\u8A00`,
      "banner.readonly.viewing": `\u6B63\u5728\u6AA2\u8996 {name}\uFF08\u552F\u8B80\uFF09`,
      "banner.readonly.fork": `\u767B\u5165\u4EE5\u8907\u88FD\u5206\u652F`,
      "modal.fork.title": `\u6B64\u6587\u4EF6\u70BA\u552F\u8B80`,
      "modal.fork.description": `\u767B\u5165\u4EE5\u5EFA\u7ACB\u60A8\u81EA\u5DF1\u7684\u53EF\u7DE8\u8F2F\u526F\u672C\u3002\u60A8\u7684\u7DE8\u8F2F\u4E0D\u6703\u5F71\u97FF\u539F\u59CB\u6587\u4EF6\uFF0C\u60A8\u5C07\u5728\u5E33\u6236\u4E2D\u53D6\u5F97\u5168\u65B0\u7684\u5206\u652F\u526F\u672C\u3002`,
      "modal.fork.keep_viewing": `\u7E7C\u7E8C\u6AA2\u8996`,
      "modal.fork.signin": `\u767B\u5165\u4EE5\u8907\u88FD\u5206\u652F`,
      "palette.placeholder": `\u8F38\u5165\u547D\u4EE4\u6216\u63CF\u8FF0\u8981\u5EFA\u7ACB\u7684\u5167\u5BB9\u2026`,
      "palette.title": `\u547D\u4EE4\u9762\u677F`,
      "palette.generating": `\u7522\u751F\u4E2D\u2026`,
      "palette.section.get_started": `\u958B\u59CB\u4F7F\u7528`,
      "palette.section.examples": `\u7BC4\u4F8B`,
      "palette.section.ask_ai_inline": `\u6216\u63CF\u8FF0\u8981\u5EFA\u7ACB\u7684\u5167\u5BB9`,
      "palette.section.ask_ai": `\u8A62\u554F AI`,
      "palette.action.new_project": `\u65B0\u589E\u5C08\u6848`,
      "palette.action.new_project_hint": `\u5F15\u5C0E\u5F0F\u6559\u5B78`,
      "palette.action.blank_project": `\u7A7A\u767D\u5C08\u6848`,
      "palette.action.blank_project_hint": `\u7565\u904E\u6559\u5B78`,
      "palette.action.open_file": `\u958B\u555F\u6A94\u6848`,
      "palette.generate_label": `\u7522\u751F\uFF1A`,
      "palette.kbd_server": `\u4F3A\u670D\u5668`,
      "palette.empty": `\u627E\u4E0D\u5230\u547D\u4EE4`,
      "palette.failed_to_load": `\u8F09\u5165\u6A94\u6848\u5931\u6557`,
      "panel.section.material": `\u6750\u8CEA`,
      "panel.section.position": `\u4F4D\u7F6E`,
      "panel.section.rotation": `\u65CB\u8F49`,
      "panel.section.scale": `\u7E2E\u653E`,
      "panel.section.dimensions": `\u5C3A\u5BF8`,
      "panel.section.operation": `\u64CD\u4F5C`,
      "panel.section.profile": `\u8F2A\u5ED3`,
      "panel.section.path": `\u8DEF\u5F91`,
      "panel.section.depth": `\u6DF1\u5EA6`,
      "panel.section.angle": `\u89D2\u5EA6`,
      "panel.section.axis": `\u8EF8`,
      "panel.section.radius": `\u534A\u5F91`,
      "panel.section.distance": `\u8DDD\u96E2`,
      "panel.section.thickness": `\u539A\u5EA6`,
      "panel.section.direction": `\u65B9\u5411`,
      "panel.section.count": `\u6578\u91CF`,
      "panel.section.spacing": `\u9593\u8DDD`,
      "panel.section.profiles": `\u8F2A\u5ED3`,
      "panel.section.closed": `\u5C01\u9589`,
      "panel.section.text": `\u6587\u5B57`,
      "panel.section.size": `\u5927\u5C0F`,
      "panel.section.font": `\u5B57\u578B`,
      "panel.section.taper": `\u62D4\u6A21`,
      "panel.section.twist": `\u626D\u8F49`,
      "panel.section.orientation": `\u65B9\u4F4D`,
      "panel.section.helix": `\u87BA\u65CB\u8DEF\u5F91`,
      "panel.section.quality": `\u54C1\u8CEA`,
      "panel.section.axis_origin": `\u8EF8\u539F\u9EDE`,
      "panel.section.axis_dir": `\u8EF8\u65B9\u5411`,
      "panel.section.part_def": `\u96F6\u4EF6\u5B9A\u7FA9`,
      "panel.section.connection": `\u9023\u63A5`,
      "panel.section.state": `\u72C0\u614B`,
      "panel.section.type": `\u985E\u578B`,
      "panel.section.mirror": `\u93E1\u5C04`,
      "panel.tooltip.material": `\u70BA\u6B64\u96F6\u4EF6\u6307\u5B9A\u6750\u8CEA`,
      "panel.tooltip.material_instance": `\u70BA\u6B64\u5BE6\u4F8B\u6307\u5B9A\u6750\u8CEA`,
      "panel.tooltip.position": `\u76F8\u5C0D\u65BC\u539F\u9EDE\u7684\u4F4D\u7F6E\u504F\u79FB\uFF08\u516C\u91D0\uFF09`,
      "panel.tooltip.position_world": `\u5728\u4E16\u754C\u5EA7\u6A19\u4E2D\u7684\u4F4D\u7F6E\uFF08\u516C\u91D0\uFF09`,
      "panel.tooltip.rotation": `\u7E5E\u5404\u8EF8\u7684\u65CB\u8F49\u89D2\u5EA6\uFF08\u5EA6\uFF09`,
      "panel.tooltip.rotation_world": `\u5728\u4E16\u754C\u5EA7\u6A19\u4E2D\u7684\u65CB\u8F49\u89D2\u5EA6\uFF08\u5EA6\uFF09`,
      "panel.tooltip.scale": `\u6CBF\u5404\u8EF8\u7684\u7E2E\u653E\u4FC2\u6578`,
      "panel.tooltip.dimensions_box": `\u65B9\u584A\u7684\u5BEC\u5EA6\u3001\u9AD8\u5EA6\u8207\u6DF1\u5EA6\uFF08\u516C\u91D0\uFF09`,
      "panel.tooltip.dimensions_cylinder": `\u5713\u67F1\u7684\u534A\u5F91\u8207\u9AD8\u5EA6\uFF08\u516C\u91D0\uFF09`,
      "panel.tooltip.dimensions_sphere": `\u7403\u9AD4\u7684\u534A\u5F91\uFF08\u516C\u91D0\uFF09`,
      "panel.tooltip.fillet_radius": `\u5713\u89D2\u534A\u5F91\uFF08\u516C\u91D0\uFF09`,
      "panel.tooltip.chamfer_distance": `\u5012\u89D2\u8DDD\u96E2\uFF08\u516C\u91D0\uFF09`,
      "panel.tooltip.shell_thickness": `\u58C1\u539A\uFF08\u516C\u91D0\uFF09`,
      "panel.tooltip.mirror_readonly": `\u5C1A\u672A\u652F\u63F4\u7DE8\u8F2F`,
      "panel.back_to_tree": `\u8FD4\u56DE\u6A39\u72C0\u7D50\u69CB`,
      "panel.parts_selected": `\u5DF2\u9078\u53D6 {count} \u500B\u96F6\u4EF6`,
      "panel.select_single": `\u8ACB\u9078\u53D6\u55AE\u4E00\u96F6\u4EF6\u4EE5\u7DE8\u8F2F\u5C6C\u6027`,
      "panel.edit_circuit": `\u7DE8\u8F2F\u96FB\u8DEF`,
      "panel.open_embroidery": `\u958B\u555F\u523A\u7E61\u9762\u677F`,
      "panel.parent": `\u7236\u9805\uFF1A`,
      "panel.child": `\u5B50\u9805\uFF1A`,
      "panel.ground": `\u5730\u9762`,
      "panel.mirror_readonly": `\u93E1\u5C04\u5E73\u9762\u53C3\u6578\u70BA\u552F\u8B80`,
      "bool.union": `\u806F\u96C6`,
      "bool.difference": `\u5DEE\u96C6`,
      "bool.intersection": `\u4EA4\u96C6`,
      "joint.fixed": `\u56FA\u5B9A`,
      "joint.revolute": `\u65CB\u8F49`,
      "joint.slider": `\u6ED1\u52D5`,
      "joint.cylindrical": `\u5713\u67F1`,
      "joint.ball": `\u7403`,
      "joint.free": `\u81EA\u7531`,
      "joint.suffix": `\u63A5\u982D`,
      "tree.scene": `\u5834\u666F`,
      "tree.parameters": `\u53C3\u6578`,
      "tree.scene_tooltip": `\u6AA2\u8996\u5834\u666F\uFF08\u80CC\u666F\u3001\u74B0\u5883\u3001\u71C8\u5149\uFF09`,
      "tree.parameters_tooltip": `\u7DE8\u8F2F\u6587\u4EF6\u53C3\u6578\uFF08\u900F\u904E\u904B\u7B97\u5F0F\u9A45\u52D5\u7E6B\u7D50\u6B04\u4F4D\uFF09`,
      "tree.sketch.label": `\u8349\u5716`,
      "tree.sketch.discard_title": `\u6368\u68C4\u8349\u5716\uFF1F`,
      "tree.sketch.discard_msg": `\u60A8\u6709\u672A\u5132\u5B58\u7684\u5E7E\u4F55\u8CC7\u6599\u3002`,
      "tree.sketch.discard": `\u6368\u68C4`,
      "tree.sketch.keep_editing": `\u7E7C\u7E8C\u7DE8\u8F2F`,
      "tree.sketch.cancelled": `\u5DF2\u53D6\u6D88\u8349\u5716`,
      "tree.sketch.discarded": `\u5DF2\u6368\u68C4\u8349\u5716`,
      "tree.sketch.entities": `\u5BE6\u9AD4\uFF08{count}\uFF09`,
      "tree.sketch.constraints": `\u9650\u5236\u689D\u4EF6\uFF08{count}\uFF09`,
      "tree.sketch.profiles": `\u8F2A\u5ED3\uFF08{count}\uFF09`,
      "tree.sketch.profile": `\u8F2A\u5ED3 {n}`,
      "tree.sketch.finish": `\u5B8C\u6210`,
      "tree.sketch.finish_tooltip": `\u5B8C\u6210\u8349\u5716`,
      "tree.sketch.apply_tooltip": `\u5957\u7528 {label}`,
      "tree.sketch.cancel_tooltip": `\u53D6\u6D88\u8349\u5716\uFF08Esc\uFF09`,
      "tree.sketch.delete_constraint": `\u522A\u9664\u9650\u5236\u689D\u4EF6`
    }
  };
  G = {
    ...W.en
  };
  cn = function(e2) {
    G = {
      ...W.en,
      ...W[e2]
    };
  };
  K = function(e2) {
    return G[e2] ?? e2;
  };
  ln = function(e2, t2) {
    let n2 = G[e2] ?? e2;
    for (let [e3, r2] of Object.entries(t2)) n2 = n2.replaceAll(`{${e3}}`, r2);
    return n2;
  };
  un = function() {
    if (typeof navigator > `u`) return `en`;
    let e2 = navigator.language.toLowerCase();
    if (e2 in W) return e2;
    let t2 = e2.split(`-`)[0];
    return t2 && t2 in W ? t2 : `en`;
  };
  dn = function() {
    return Object.keys(W);
  };
  let q;
  fn = [
    `file`,
    `edit`,
    `create`,
    `modify`,
    `assembly`,
    `view`,
    `tools`,
    `help`
  ];
  pn = {
    file: `File`,
    edit: `Edit`,
    create: `Create`,
    modify: `Modify`,
    assembly: `Assembly`,
    view: `View`,
    tools: `Tools`,
    help: `Help`
  };
  mn = {
    file: `text-sky-400`,
    edit: `text-orange-400`,
    create: `text-cyan-400`,
    modify: `text-green-400`,
    assembly: `text-purple-400`,
    view: `text-yellow-400`,
    tools: `text-brand`,
    help: `text-text-muted`
  };
  q = () => false;
  hn = function(e2) {
    let t2 = [
      {
        id: `add-box`,
        label: K(`cmd.add_box.label`),
        icon: `Cube`,
        keywords: [
          `box`,
          `cube`,
          `primitive`,
          `create`,
          `add`
        ],
        action: () => e2.addPrimitive(`cube`),
        category: `create`
      },
      {
        id: `add-cylinder`,
        label: K(`cmd.cylinder.label`),
        icon: `Cylinder`,
        keywords: [
          `cylinder`,
          `primitive`,
          `create`,
          `add`,
          `tube`
        ],
        action: () => e2.addPrimitive(`cylinder`),
        category: `create`
      },
      {
        id: `add-sphere`,
        label: K(`cmd.sphere.label`),
        icon: `Globe`,
        keywords: [
          `sphere`,
          `ball`,
          `primitive`,
          `create`,
          `add`
        ],
        action: () => e2.addPrimitive(`sphere`),
        category: `create`
      },
      {
        id: `boolean-union`,
        label: K(`cmd.union.label`),
        icon: `Unite`,
        keywords: [
          `union`,
          `combine`,
          `add`,
          `boolean`,
          `merge`
        ],
        shortcut: `Ctrl+Shift+U`,
        action: () => e2.applyBoolean(`union`),
        enabled: e2.hasTwoSelected,
        category: `modify`
      },
      {
        id: `boolean-difference`,
        label: K(`cmd.difference.label`),
        icon: `Subtract`,
        keywords: [
          `difference`,
          `subtract`,
          `cut`,
          `boolean`,
          `minus`
        ],
        shortcut: `Ctrl+Shift+D`,
        action: () => e2.applyBoolean(`difference`),
        enabled: e2.hasTwoSelected,
        category: `modify`
      },
      {
        id: `boolean-intersection`,
        label: K(`cmd.intersection.label`),
        icon: `Intersect`,
        keywords: [
          `intersection`,
          `intersect`,
          `boolean`,
          `and`
        ],
        shortcut: `Ctrl+Shift+I`,
        action: () => e2.applyBoolean(`intersection`),
        enabled: e2.hasTwoSelected,
        category: `modify`
      },
      {
        id: `mode-move`,
        label: K(`cmd.move_mode.label`),
        icon: `ArrowsOutCardinal`,
        keywords: [
          `move`,
          `translate`,
          `position`,
          `transform`
        ],
        shortcut: `M`,
        action: () => e2.setTransformMode(`translate`),
        category: `edit`
      },
      {
        id: `mode-rotate`,
        label: K(`cmd.rotate_mode.label`),
        icon: `ArrowClockwise`,
        keywords: [
          `rotate`,
          `spin`,
          `turn`,
          `transform`
        ],
        shortcut: `R`,
        action: () => e2.setTransformMode(`rotate`),
        category: `edit`
      },
      {
        id: `mode-scale`,
        label: K(`cmd.scale_mode.label`),
        icon: `ArrowsOut`,
        keywords: [
          `scale`,
          `resize`,
          `size`,
          `transform`
        ],
        shortcut: `Shift+S`,
        action: () => e2.setTransformMode(`scale`),
        category: `edit`
      },
      {
        id: `undo`,
        label: K(`cmd.undo.label`),
        icon: `ArrowCounterClockwise`,
        keywords: [
          `undo`,
          `back`,
          `revert`
        ],
        shortcut: `Ctrl+Z`,
        action: e2.undo,
        enabled: e2.canUndo,
        category: `edit`
      },
      {
        id: `redo`,
        label: K(`cmd.redo.label`),
        icon: `ArrowClockwise`,
        keywords: [
          `redo`,
          `forward`
        ],
        shortcut: `Ctrl+Shift+Z`,
        action: e2.redo,
        enabled: e2.canRedo,
        category: `edit`
      },
      {
        id: `delete`,
        label: K(`cmd.delete_selected.label`),
        icon: `Trash`,
        keywords: [
          `delete`,
          `remove`,
          `trash`
        ],
        shortcut: `Backspace`,
        action: e2.deleteSelected,
        enabled: e2.hasSelection,
        category: `edit`
      },
      {
        id: `duplicate`,
        label: K(`cmd.duplicate.label`),
        icon: `Copy`,
        keywords: [
          `duplicate`,
          `copy`,
          `clone`
        ],
        shortcut: `Ctrl+D`,
        action: e2.duplicateSelected,
        enabled: e2.hasSelection,
        category: `edit`
      },
      {
        id: `deselect`,
        label: K(`cmd.deselect_all.label`),
        icon: `X`,
        keywords: [
          `deselect`,
          `clear`,
          `none`
        ],
        shortcut: `Esc`,
        action: e2.deselectAll,
        category: `edit`
      },
      {
        id: `toggle-wireframe`,
        label: K(`cmd.toggle_wireframe.label`),
        icon: `CubeTransparent`,
        keywords: [
          `wireframe`,
          `edges`,
          `view`
        ],
        shortcut: `X`,
        action: e2.toggleWireframe,
        category: `view`,
        dynamicLabel: e2.getWireframeLabel
      },
      {
        id: `toggle-grid-snap`,
        label: K(`cmd.toggle_grid_snap.label`),
        icon: `GridFour`,
        keywords: [
          `snap`,
          `grid`,
          `align`
        ],
        shortcut: `G`,
        action: e2.toggleGridSnap,
        category: `view`,
        dynamicLabel: e2.getGridSnapLabel
      },
      {
        id: `toggle-sidebar`,
        label: K(`cmd.toggle_feature_tree.label`),
        icon: `SidebarSimple`,
        keywords: [
          `sidebar`,
          `panel`,
          `tree`,
          `features`
        ],
        action: e2.toggleFeatureTree,
        category: `view`
      },
      {
        id: `save`,
        label: K(`cmd.save.label`),
        icon: `FloppyDisk`,
        keywords: [
          `save`,
          `export`,
          `file`
        ],
        shortcut: `Ctrl+S`,
        action: e2.save,
        category: `file`
      },
      {
        id: `open`,
        label: K(`cmd.open.label`),
        icon: `FolderOpen`,
        keywords: [
          `open`,
          `load`,
          `file`,
          `import`
        ],
        shortcut: `Ctrl+O`,
        action: e2.open,
        category: `file`
      },
      {
        id: `export-stl`,
        label: K(`cmd.export_stl.label`),
        icon: `Export`,
        keywords: [
          `export`,
          `stl`,
          `mesh`,
          `3d print`
        ],
        action: e2.exportStl,
        enabled: e2.hasParts,
        category: `file`
      },
      {
        id: `export-glb`,
        label: K(`cmd.export_glb.label`),
        icon: `Export`,
        keywords: [
          `export`,
          `glb`,
          `gltf`,
          `mesh`
        ],
        action: e2.exportGlb,
        enabled: e2.hasParts,
        category: `file`
      },
      {
        id: `about`,
        label: K(`cmd.about.label`),
        icon: `Info`,
        keywords: [
          `about`,
          `help`,
          `info`,
          `version`
        ],
        action: e2.openAbout,
        category: `help`
      }
    ];
    if (e2.newDocument && t2.push({
      id: `new-document`,
      label: K(`cmd.new_short.label`),
      icon: `FilePlus`,
      keywords: [
        `new`,
        `document`,
        `blank`,
        `fresh`
      ],
      shortcut: `Ctrl+N`,
      action: e2.newDocument,
      category: `file`
    }), e2.openFromCloud && t2.push({
      id: `open-cloud`,
      label: K(`cmd.open_cloud.label`),
      icon: `CloudArrowDown`,
      keywords: [
        `open`,
        `cloud`,
        `load`,
        `sync`,
        `remote`
      ],
      shortcut: `Ctrl+Shift+O`,
      action: e2.openFromCloud,
      category: `file`
    }), e2.exportDrawingPdf && t2.push({
      id: `export-drawing-pdf`,
      label: K(`cmd.export_drawing_pdf.label`),
      icon: `Export`,
      keywords: [
        `export`,
        `pdf`,
        `drawing`,
        `sheet`,
        `print`,
        `drafting`
      ],
      action: e2.exportDrawingPdf,
      enabled: e2.hasParts,
      category: `file`
    }), e2.exportStep && t2.push({
      id: `export-step`,
      label: K(`cmd.export_step.label`),
      icon: `Export`,
      keywords: [
        `export`,
        `step`,
        `cad`,
        `solidworks`,
        `fusion`
      ],
      action: e2.exportStep,
      enabled: e2.hasParts,
      category: `file`
    }), e2.copy && t2.push({
      id: `copy`,
      label: K(`cmd.copy.label`),
      icon: `Copy`,
      keywords: [
        `copy`,
        `clipboard`
      ],
      shortcut: `Ctrl+C`,
      action: e2.copy,
      enabled: e2.hasSelection,
      category: `edit`
    }), e2.paste && t2.push({
      id: `paste`,
      label: K(`cmd.paste.label`),
      icon: `ClipboardText`,
      keywords: [
        `paste`,
        `clipboard`
      ],
      shortcut: `Ctrl+V`,
      action: e2.paste,
      category: `edit`
    }), e2.selectAll && t2.push({
      id: `select-all`,
      label: K(`cmd.select_all.label`),
      icon: `Selection`,
      keywords: [
        `select`,
        `all`,
        `everything`
      ],
      shortcut: `Ctrl+A`,
      action: e2.selectAll,
      category: `edit`
    }), e2.cameraFit && t2.push({
      id: `camera-fit`,
      label: K(`cmd.fit_to_view.label`),
      icon: `ArrowsOutCardinal`,
      keywords: [
        `fit`,
        `zoom`,
        `frame`,
        `view`,
        `camera`
      ],
      shortcut: `F`,
      action: e2.cameraFit,
      category: `view`
    }), e2.cameraPreset) {
      let n3 = e2.cameraPreset;
      t2.push({
        id: `camera-isometric`,
        label: K(`cmd.camera_iso.label`),
        icon: `Cube`,
        keywords: [
          `isometric`,
          `iso`,
          `view`,
          `camera`,
          `angle`
        ],
        action: () => n3(`isometric`),
        category: `view`
      }, {
        id: `camera-top`,
        label: K(`cmd.camera_top.label`),
        icon: `ArrowUp`,
        keywords: [
          `top`,
          `view`,
          `camera`,
          `angle`,
          `plan`
        ],
        action: () => n3(`top`),
        category: `view`
      }, {
        id: `camera-front`,
        label: K(`cmd.camera_front.label`),
        icon: `ArrowRight`,
        keywords: [
          `front`,
          `view`,
          `camera`,
          `angle`
        ],
        action: () => n3(`front`),
        category: `view`
      }, {
        id: `camera-right`,
        label: K(`cmd.camera_right.label`),
        icon: `ArrowRight`,
        keywords: [
          `right`,
          `side`,
          `view`,
          `camera`,
          `angle`
        ],
        action: () => n3(`right`),
        category: `view`
      });
    }
    if (e2.toggleChatSidebar && t2.push({
      id: `toggle-chat`,
      label: K(`cmd.toggle_chat.label`),
      icon: `ChatDots`,
      keywords: [
        `chat`,
        `sidebar`,
        `ai`,
        `assistant`
      ],
      shortcut: `F6`,
      action: e2.toggleChatSidebar,
      category: `view`
    }), e2.toggleStatusBar && t2.push({
      id: `toggle-status-bar`,
      label: K(`cmd.toggle_status_bar.label`),
      icon: `Terminal`,
      keywords: [
        `status`,
        `bar`,
        `toggle`,
        `view`
      ],
      action: e2.toggleStatusBar,
      category: `view`
    }), e2.toggleDevTools && t2.push({
      id: `toggle-devtools`,
      label: K(`cmd.toggle_devtools.label`),
      icon: `Terminal`,
      keywords: [
        `devtools`,
        `console`,
        `log`,
        `debug`
      ],
      shortcut: "`",
      action: e2.toggleDevTools,
      category: `view`
    }), e2.cycleTheme && t2.push({
      id: `cycle-theme`,
      label: K(`cmd.cycle_theme.label`),
      icon: `Sun`,
      keywords: [
        `theme`,
        `dark`,
        `light`,
        `system`,
        `mode`
      ],
      action: e2.cycleTheme,
      category: `view`,
      dynamicLabel: e2.getThemeLabel,
      dynamicIcon: e2.getThemeIcon
    }), e2.openCommandPalette && t2.push({
      id: `command-palette`,
      label: K(`cmd.palette_dots.label`),
      icon: `Command`,
      keywords: [
        `command`,
        `palette`,
        `search`,
        `go`
      ],
      shortcut: `Ctrl+K`,
      action: e2.openCommandPalette,
      category: `tools`
    }), e2.newSketch && t2.push({
      id: `new-sketch`,
      label: K(`cmd.sketch_dots.label`),
      icon: `Pencil`,
      keywords: [
        `sketch`,
        `2d`,
        `draw`,
        `profile`
      ],
      action: e2.newSketch,
      category: `tools`
    }), e2.openSlicer && t2.push({
      id: `open-slicer`,
      label: K(`cmd.slicer.label`),
      icon: `Printer`,
      keywords: [
        `print`,
        `slicer`,
        `3d`,
        `gcode`
      ],
      action: e2.openSlicer,
      enabled: e2.hasParts,
      category: `tools`
    }), e2.openCam && t2.push({
      id: `open-cam`,
      label: K(`cmd.cam.label`),
      icon: `Wrench`,
      keywords: [
        `cam`,
        `toolpath`,
        `mill`,
        `cnc`
      ],
      action: e2.openCam,
      enabled: e2.hasParts,
      category: `tools`
    }), e2.openWhatsNew && t2.push({
      id: `whats-new`,
      label: K(`cmd.whats_new.label`),
      icon: `Rocket`,
      keywords: [
        `changelog`,
        `whats`,
        `new`,
        `release`,
        `updates`
      ],
      action: e2.openWhatsNew,
      category: `help`
    }), e2.openDocs && t2.push({
      id: `open-docs`,
      label: K(`cmd.documentation.label`),
      icon: `BookOpen`,
      keywords: [
        `docs`,
        `documentation`,
        `help`,
        `manual`,
        `guide`
      ],
      action: e2.openDocs,
      category: `help`
    }), e2.openGithub && t2.push({
      id: `open-github`,
      label: K(`cmd.open_github.label`),
      icon: `GithubLogo`,
      keywords: [
        `github`,
        `source`,
        `code`,
        `repo`
      ],
      action: e2.openGithub,
      category: `help`
    }), e2.openDiscord && t2.push({
      id: `open-discord`,
      label: K(`cmd.open_discord.label`),
      icon: `DiscordLogo`,
      keywords: [
        `discord`,
        `chat`,
        `community`
      ],
      action: e2.openDiscord,
      category: `help`
    }), e2.createPartDef && t2.push({
      id: `create-part-def`,
      label: K(`cmd.create_part_def.label`),
      icon: `Package`,
      keywords: [
        `part`,
        `definition`,
        `assembly`,
        `create`,
        `convert`
      ],
      action: e2.createPartDef,
      enabled: e2.hasOnePartSelected ?? q,
      category: `assembly`
    }), e2.insertInstance && t2.push({
      id: `insert-instance`,
      label: K(`cmd.insert_instance.label`),
      icon: `PlusSquare`,
      keywords: [
        `insert`,
        `instance`,
        `assembly`,
        `add`,
        `part`
      ],
      action: e2.insertInstance,
      enabled: e2.hasPartDefs ?? q,
      category: `assembly`
    }), e2.addJoint) {
      let n3 = e2.addJoint, r2 = e2.hasTwoInstancesSelected ?? q;
      t2.push({
        id: `add-fixed-joint`,
        label: K(`cmd.add_fixed_joint.label`),
        icon: `Anchor`,
        keywords: [
          `joint`,
          `fixed`,
          `assembly`,
          `connect`,
          `weld`
        ],
        action: () => n3({
          type: `Fixed`
        }),
        enabled: r2,
        category: `assembly`
      }, {
        id: `add-revolute-joint`,
        label: K(`cmd.add_revolute_joint.label`),
        icon: `ArrowsClockwise`,
        keywords: [
          `joint`,
          `revolute`,
          `hinge`,
          `assembly`,
          `rotate`
        ],
        action: () => n3({
          type: `Revolute`,
          axis: {
            x: 0,
            y: 0,
            z: 1
          }
        }),
        enabled: r2,
        category: `assembly`
      }, {
        id: `add-slider-joint`,
        label: K(`cmd.add_slider_joint.label`),
        icon: `ArrowsHorizontal`,
        keywords: [
          `joint`,
          `slider`,
          `prismatic`,
          `assembly`,
          `slide`
        ],
        action: () => n3({
          type: `Slider`,
          axis: {
            x: 0,
            y: 0,
            z: 1
          }
        }),
        enabled: r2,
        category: `assembly`
      });
    }
    e2.setGroundInstance && t2.push({
      id: `set-ground`,
      label: K(`cmd.set_ground.label`),
      icon: `Anchor`,
      keywords: [
        `ground`,
        `fix`,
        `base`,
        `assembly`,
        `anchor`
      ],
      action: e2.setGroundInstance,
      enabled: e2.hasOneInstanceSelected ?? q,
      category: `assembly`
    });
    let n2 = e2.hasOnePartSelected ?? q;
    return e2.applyFillet && t2.push({
      id: `apply-fillet`,
      label: K(`cmd.fillet.label`),
      icon: `Circle`,
      keywords: [
        `fillet`,
        `round`,
        `radius`,
        `edge`
      ],
      action: e2.applyFillet,
      enabled: n2,
      category: `modify`
    }), e2.applyChamfer && t2.push({
      id: `apply-chamfer`,
      label: K(`cmd.chamfer.label`),
      icon: `Octagon`,
      keywords: [
        `chamfer`,
        `bevel`,
        `edge`,
        `corner`
      ],
      action: e2.applyChamfer,
      enabled: n2,
      category: `modify`
    }), e2.applyShell && t2.push({
      id: `apply-shell`,
      label: K(`cmd.shell.label`),
      icon: `Cube`,
      keywords: [
        `shell`,
        `hollow`,
        `thickness`,
        `wall`
      ],
      action: e2.applyShell,
      enabled: n2,
      category: `modify`
    }), e2.applyLinearPattern && t2.push({
      id: `apply-linear-pattern`,
      label: K(`cmd.linear_pattern.label`),
      icon: `DotsThree`,
      keywords: [
        `pattern`,
        `linear`,
        `array`,
        `repeat`,
        `copy`
      ],
      action: e2.applyLinearPattern,
      enabled: n2,
      category: `modify`
    }), e2.applyCircularPattern && t2.push({
      id: `apply-circular-pattern`,
      label: K(`cmd.circular_pattern.label`),
      icon: `CircleNotch`,
      keywords: [
        `pattern`,
        `circular`,
        `radial`,
        `array`,
        `repeat`
      ],
      action: e2.applyCircularPattern,
      enabled: n2,
      category: `modify`
    }), e2.applyMirror && t2.push({
      id: `apply-mirror`,
      label: K(`cmd.mirror.label`),
      icon: `ArrowsHorizontal`,
      keywords: [
        `mirror`,
        `reflect`,
        `flip`,
        `symmetry`
      ],
      action: e2.applyMirror,
      enabled: n2,
      category: `modify`
    }), e2.applyStitch && t2.push({
      id: `apply-stitch`,
      label: K(`cmd.stitch.label`),
      icon: `Scissors`,
      keywords: [
        `stitch`,
        `embroidery`,
        `sew`,
        `embroider`
      ],
      action: e2.applyStitch,
      enabled: n2,
      category: `modify`
    }), e2.enterElectronics && t2.push({
      id: `enter-electronics`,
      label: K(`cmd.enter_electronics.label`),
      icon: `CircuitBoard`,
      keywords: [
        `electronics`,
        `pcb`,
        `schematic`,
        `board`,
        `ecad`
      ],
      action: e2.enterElectronics,
      enabled: e2.hasPcb ?? q,
      category: `tools`
    }), e2.exitElectronics && t2.push({
      id: `exit-electronics`,
      label: K(`cmd.exit_electronics.label`),
      icon: `X`,
      keywords: [
        `electronics`,
        `close`,
        `exit`,
        `pcb`
      ],
      action: e2.exitElectronics,
      category: `tools`
    }), t2;
  };
  gn = function(e2) {
    let t2 = () => wt.getState(), n2 = () => C.getState();
    return {
      addPrimitive: (r2) => {
        let i2 = t2().addPrimitive(r2);
        n2().select(i2), e2();
      },
      applyBoolean: (r2) => {
        let i2 = Array.from(n2().selectedPartIds);
        if (i2.length === 2) {
          let e3 = t2().applyBoolean(r2, i2[0], i2[1]);
          e3 && n2().select(e3);
        }
        e2();
      },
      setTransformMode: (t3) => {
        n2().setTransformMode(t3), e2();
      },
      undo: () => {
        t2().undo(), e2();
      },
      redo: () => {
        t2().redo(), e2();
      },
      toggleWireframe: () => {
        n2().toggleWireframe(), e2();
      },
      toggleGridSnap: () => {
        n2().toggleGridSnap(), e2();
      },
      toggleFeatureTree: () => {
        n2().toggleFeatureTree(), e2();
      },
      save: () => e2(),
      open: () => e2(),
      exportStl: () => e2(),
      exportGlb: () => e2(),
      openAbout: () => e2(),
      deleteSelected: () => {
        let r2 = n2();
        for (let e3 of r2.selectedPartIds) t2().removePart(e3);
        r2.clearSelection(), e2();
      },
      duplicateSelected: () => {
        let r2 = n2();
        if (r2.selectedPartIds.size > 0) {
          let e3 = Array.from(r2.selectedPartIds), n3 = t2().duplicateParts(e3);
          r2.selectMultiple(n3);
        }
        e2();
      },
      deselectAll: () => {
        n2().clearSelection(), e2();
      },
      hasTwoSelected: () => n2().selectedPartIds.size === 2,
      hasSelection: () => n2().selectedPartIds.size > 0,
      hasParts: () => t2().parts.length > 0,
      canUndo: () => {
        var _a2;
        try {
          return ((_a2 = t2()._crdtEngine) == null ? void 0 : _a2.can_undo()) ?? false;
        } catch {
          return false;
        }
      },
      canRedo: () => {
        var _a2;
        try {
          return ((_a2 = t2()._crdtEngine) == null ? void 0 : _a2.can_redo()) ?? false;
        } catch {
          return false;
        }
      }
    };
  };
  var J = null;
  _n = async function() {
    if (J) return J;
    let e2 = (await i()).WasmKeybindings;
    if (!e2) throw Error(`WasmKeybindings not found in kernel-wasm module`);
    return J = new vn(new e2()), J;
  };
  let vn, yn;
  vn = class {
    constructor(e2) {
      __publicField(this, "inner");
      __publicField(this, "cachedCommands", null);
      this.inner = e2;
    }
    resolve(e2, t2, n2) {
      let r2 = JSON.stringify(e2);
      return this.inner.resolve(r2, t2, n2) ?? null;
    }
    commands() {
      return this.cachedCommands || (this.cachedCommands = JSON.parse(this.inner.commandsJson())), this.cachedCommands;
    }
    chordFor(e2) {
      let t2 = this.inner.chordFor(e2);
      return t2 ? JSON.parse(t2) : null;
    }
    setBinding(e2, t2) {
      this.inner.setBinding(e2, t2 ? JSON.stringify(t2) : void 0), this.cachedCommands = null;
    }
    resetAll() {
      this.inner.resetAll(), this.cachedCommands = null;
    }
    saveOverrides() {
      return this.inner.saveOverrides();
    }
    loadOverrides(e2) {
      let t2 = this.inner.loadOverrides(e2);
      return this.cachedCommands = null, t2;
    }
    conflicts(e2) {
      return JSON.parse(this.inner.conflictsJson(e2));
    }
    invalidate() {
      this.cachedCommands = null;
    }
  };
  yn = [
    {
      name: `cube`,
      description: `Axis-aligned box centered at origin.`,
      category: `primitive`,
      ai_hint: `Use for rectangular/box shapes. Size is width(x), depth(y), height(z).`,
      input_schema: {
        properties: {
          size: {
            description: `Size along each axis.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          }
        },
        required: [
          `size`
        ],
        type: `object`
      }
    },
    {
      name: `cylinder`,
      description: `Cylinder along the Z axis, centered at origin.`,
      category: `primitive`,
      ai_hint: `Axis along Z. Use for round shapes, pins, holes.`,
      input_schema: {
        properties: {
          height: {
            description: `Height of the cylinder.`,
            type: `number`
          },
          radius: {
            description: `Radius of the cylinder.`,
            type: `number`
          },
          segments: {
            description: `Number of circular segments (0 = auto).`,
            type: `integer`
          }
        },
        required: [
          `radius`,
          `height`,
          `segments`
        ],
        type: `object`
      }
    },
    {
      name: `sphere`,
      description: `Sphere centered at origin.`,
      category: `primitive`,
      input_schema: {
        properties: {
          radius: {
            description: `Radius of the sphere.`,
            type: `number`
          },
          segments: {
            description: `Number of circular segments (0 = auto).`,
            type: `integer`
          }
        },
        required: [
          `radius`,
          `segments`
        ],
        type: `object`
      }
    },
    {
      name: `cone`,
      description: `Cone along the Z axis, centered at origin.`,
      category: `primitive`,
      input_schema: {
        properties: {
          height: {
            description: `Height of the cone.`,
            type: `number`
          },
          radius_bottom: {
            description: `Bottom radius.`,
            type: `number`
          },
          radius_top: {
            description: `Top radius (0 for a point).`,
            type: `number`
          },
          segments: {
            description: `Number of circular segments (0 = auto).`,
            type: `integer`
          }
        },
        required: [
          `radius_bottom`,
          `radius_top`,
          `height`,
          `segments`
        ],
        type: `object`
      }
    },
    {
      name: `torus`,
      description: `Torus centered at origin with axis along Z.`,
      category: `primitive`,
      ai_hint: `Axis along Z. Use for rings, donuts, O-rings, gaskets, fillets-as-primitives.`,
      input_schema: {
        properties: {
          major_radius: {
            description: `Major radius \u2014 distance from the central axis to the tube center.`,
            type: `number`
          },
          minor_radius: {
            description: `Minor radius \u2014 radius of the tube cross-section.`,
            type: `number`
          },
          segments: {
            description: `Number of circular segments per ring (0 = auto).`,
            type: `integer`
          }
        },
        required: [
          `major_radius`,
          `minor_radius`,
          `segments`
        ],
        type: `object`
      }
    },
    {
      name: `wedge`,
      description: `Right-triangular-prism wedge with corner at origin.`,
      category: `primitive`,
      ai_hint: `Right-triangular-prism wedge. Corner at origin, legs along +X and +Z, extruded along +Y.`,
      input_schema: {
        properties: {
          size: {
            description: `Wedge size: leg along +X, extrusion length along +Y, leg along +Z.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          }
        },
        required: [
          `size`
        ],
        type: `object`
      }
    },
    {
      name: `prism`,
      description: `Regular n-gonal right prism centered on Z.`,
      category: `primitive`,
      ai_hint: `Regular n-gonal right prism on Z. Use for hex nuts (sides=6), triangular bars, etc.`,
      input_schema: {
        properties: {
          height: {
            description: `Extrusion height along +Z.`,
            type: `number`
          },
          radius: {
            description: `Polygon circumradius (distance from center to each vertex).`,
            type: `number`
          },
          sides: {
            description: `Number of polygon sides (>= 3).`,
            type: `integer`
          }
        },
        required: [
          `sides`,
          `radius`,
          `height`
        ],
        type: `object`
      }
    },
    {
      name: `union`,
      description: `Boolean union of two geometries.`,
      category: `boolean`,
      input_schema: {
        properties: {
          left: {
            description: `Left operand.`,
            type: `string`
          },
          right: {
            description: `Right operand.`,
            type: `string`
          }
        },
        required: [
          `left`,
          `right`
        ],
        type: `object`
      }
    },
    {
      name: `difference`,
      description: `Boolean difference (left minus right).`,
      category: `boolean`,
      input_schema: {
        properties: {
          left: {
            description: `Left operand (base).`,
            type: `string`
          },
          right: {
            description: `Right operand (subtracted).`,
            type: `string`
          }
        },
        required: [
          `left`,
          `right`
        ],
        type: `object`
      }
    },
    {
      name: `intersection`,
      description: `Boolean intersection of two geometries.`,
      category: `boolean`,
      input_schema: {
        properties: {
          left: {
            description: `Left operand.`,
            type: `string`
          },
          right: {
            description: `Right operand.`,
            type: `string`
          }
        },
        required: [
          `left`,
          `right`
        ],
        type: `object`
      }
    },
    {
      name: `translate`,
      description: `Translation by an offset vector.`,
      category: `transform`,
      input_schema: {
        properties: {
          child: {
            description: `Child node to translate.`,
            type: `string`
          },
          offset: {
            description: `Translation offset.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          }
        },
        required: [
          `child`,
          `offset`
        ],
        type: `object`
      }
    },
    {
      name: `rotate`,
      description: `Rotation by Euler angles in degrees (applied as X, then Y, then Z).`,
      category: `transform`,
      input_schema: {
        properties: {
          angles: {
            description: `Rotation angles in degrees.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          child: {
            description: `Child node to rotate.`,
            type: `string`
          }
        },
        required: [
          `child`,
          `angles`
        ],
        type: `object`
      }
    },
    {
      name: `scale`,
      description: `Non-uniform scale.`,
      category: `transform`,
      input_schema: {
        properties: {
          child: {
            description: `Child node to scale.`,
            type: `string`
          },
          factor: {
            description: `Scale factors per axis.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          }
        },
        required: [
          `child`,
          `factor`
        ],
        type: `object`
      }
    },
    {
      name: `mirror`,
      description: `Reflection of the child across a plane.`,
      category: `transform`,
      ai_hint: `Reflect across a plane. plane_origin is any point on the plane; plane_normal points outward.`,
      input_schema: {
        properties: {
          child: {
            description: `Child node to mirror.`,
            type: `string`
          },
          plane_normal: {
            description: `Normal vector of the mirror plane (need not be unit).`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          plane_origin: {
            description: `A point on the mirror plane.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          }
        },
        required: [
          `child`,
          `plane_origin`,
          `plane_normal`
        ],
        type: `object`
      }
    },
    {
      name: `sketch_2_d`,
      description: "A 2D sketch profile on a plane.  The sketch defines a closed profile in a local 2D coordinate system. Use with [`CsgOp::Extrude`] or [`CsgOp::Revolve`] to create 3D geometry.",
      category: `sketch_op`,
      ai_hint: `Defines a closed 2D profile. Segments are Line{start,end} or Arc{start,end,center,ccw}. Usually used inline with extrude/revolve \u2014 prefer creating extrude directly with inline sketch.`,
      input_schema: {
        properties: {
          holes: {
            description: `Optional interior hole loops. Each entry is a closed loop of segments in the same sketch coordinate system, lying strictly inside the outer profile and disjoint from the other holes. Extrude turns each loop into an interior wall directly \u2014 no boolean Difference pass. Loop winding may be CW or CCW.`,
            items: {
              items: {
                type: `object`
              },
              type: `array`
            },
            type: `array`
          },
          origin: {
            description: `Origin point of the sketch plane in 3D.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          segments: {
            description: `The segments forming the closed profile.`,
            items: {
              oneOf: [
                {
                  description: `Straight line segment from start to end.`,
                  properties: {
                    end: {
                      properties: {
                        x: {
                          type: `number`
                        },
                        y: {
                          type: `number`
                        }
                      },
                      required: [
                        `x`,
                        `y`
                      ],
                      type: `object`
                    },
                    start: {
                      properties: {
                        x: {
                          type: `number`
                        },
                        y: {
                          type: `number`
                        }
                      },
                      required: [
                        `x`,
                        `y`
                      ],
                      type: `object`
                    },
                    type: {
                      const: `Line`
                    }
                  },
                  required: [
                    `type`,
                    `start`,
                    `end`
                  ],
                  type: `object`
                },
                {
                  description: `Circular arc. Radius is implied \u2014 distance(start,center) must equal distance(end,center).`,
                  properties: {
                    ccw: {
                      description: `True = counter-clockwise from start to end.`,
                      type: `boolean`
                    },
                    center: {
                      properties: {
                        x: {
                          type: `number`
                        },
                        y: {
                          type: `number`
                        }
                      },
                      required: [
                        `x`,
                        `y`
                      ],
                      type: `object`
                    },
                    end: {
                      properties: {
                        x: {
                          type: `number`
                        },
                        y: {
                          type: `number`
                        }
                      },
                      required: [
                        `x`,
                        `y`
                      ],
                      type: `object`
                    },
                    start: {
                      properties: {
                        x: {
                          type: `number`
                        },
                        y: {
                          type: `number`
                        }
                      },
                      required: [
                        `x`,
                        `y`
                      ],
                      type: `object`
                    },
                    type: {
                      const: `Arc`
                    }
                  },
                  required: [
                    `type`,
                    `start`,
                    `end`,
                    `center`,
                    `ccw`
                  ],
                  type: `object`
                }
              ]
            },
            type: `array`
          },
          x_dir: {
            description: `Unit vector along the local X axis.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          y_dir: {
            description: `Unit vector along the local Y axis.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          }
        },
        required: [
          `origin`,
          `x_dir`,
          `y_dir`,
          `segments`
        ],
        type: `object`
      }
    },
    {
      name: `extrude`,
      description: `Extrude a sketch profile along a direction vector.`,
      category: `sketch_op`,
      ai_hint: `PREFERRED for custom shapes. Pass sketch as inline object with origin, x_dir, y_dir, segments. Example: {sketch: {origin:{x:0,y:0,z:0}, x_dir:{x:1,y:0,z:0}, y_dir:{x:0,y:1,z:0}, segments:[{type:'Line',start:{x:0,y:0},end:{x:20,y:0}},{type:'Line',start:{x:20,y:0},end:{x:20,y:15}},{type:'Line',start:{x:20,y:15},end:{x:0,y:15}},{type:'Line',start:{x:0,y:15},end:{x:0,y:0}}]}, direction:{x:0,y:0,z:10}}`,
      input_schema: {
        properties: {
          direction: {
            description: `Extrusion direction and distance (length of vector = extrusion depth).`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          scale_end: {
            description: `Optional scale factor at end of extrusion (1.0 = no taper).`,
            type: `number`
          },
          sketch: {
            description: `The sketch node to extrude.`,
            type: `string`
          },
          twist_angle: {
            description: `Optional twist angle in radians (rotation around extrusion axis).`,
            type: `number`
          }
        },
        required: [
          `sketch`,
          `direction`
        ],
        type: `object`
      }
    },
    {
      name: `revolve`,
      description: `Revolve a sketch profile around an axis.`,
      category: `sketch_op`,
      input_schema: {
        properties: {
          angle_deg: {
            description: `Revolution angle in degrees (360 for full revolution).`,
            type: `number`
          },
          axis_dir: {
            description: `Direction of the revolution axis.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          axis_origin: {
            description: `A point on the revolution axis.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          sketch: {
            description: `The sketch node to revolve.`,
            type: `string`
          }
        },
        required: [
          `sketch`,
          `axis_origin`,
          `axis_dir`,
          `angle_deg`
        ],
        type: `object`
      }
    },
    {
      name: `linear_pattern`,
      description: `Linear pattern \u2014 repeat geometry along a direction.`,
      category: `pattern`,
      input_schema: {
        properties: {
          child: {
            description: `Child node to pattern.`,
            type: `string`
          },
          count: {
            description: `Number of copies (including original).`,
            type: `integer`
          },
          direction: {
            description: `Direction vector (will be normalized).`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          spacing: {
            description: `Spacing between copies along direction.`,
            type: `number`
          }
        },
        required: [
          `child`,
          `direction`,
          `count`,
          `spacing`
        ],
        type: `object`
      }
    },
    {
      name: `circular_pattern`,
      description: `Circular pattern \u2014 repeat geometry around an axis.`,
      category: `pattern`,
      input_schema: {
        properties: {
          angle_deg: {
            description: `Total angle span in degrees.`,
            type: `number`
          },
          axis_dir: {
            description: `Direction of the rotation axis.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          axis_origin: {
            description: `A point on the rotation axis.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          child: {
            description: `Child node to pattern.`,
            type: `string`
          },
          count: {
            description: `Number of copies (including original).`,
            type: `integer`
          }
        },
        required: [
          `child`,
          `axis_origin`,
          `axis_dir`,
          `count`,
          `angle_deg`
        ],
        type: `object`
      }
    },
    {
      name: `shell`,
      description: `Shell \u2014 hollow out a solid by offsetting faces.`,
      category: `modifier`,
      ai_hint: `Hollow out a solid. Use parent_part_id. Great for enclosures, cups, containers.`,
      input_schema: {
        properties: {
          child: {
            description: `Child node to shell.`,
            type: `string`
          },
          thickness: {
            description: `Wall thickness (inward offset).`,
            type: `number`
          }
        },
        required: [
          `child`,
          `thickness`
        ],
        type: `object`
      }
    },
    {
      name: `fillet`,
      description: `Fillet \u2014 round edges of a solid.`,
      category: `modifier`,
      ai_hint: `Apply after creating geometry. Use parent_part_id to target a part. Typical radius: 1-5mm for small features, 5-20mm for large.`,
      input_schema: {
        properties: {
          child: {
            description: `Child node to fillet.`,
            type: `string`
          },
          radius: {
            description: `Fillet radius.`,
            type: `number`
          }
        },
        required: [
          `child`,
          `radius`
        ],
        type: `object`
      }
    },
    {
      name: `chamfer`,
      description: `Chamfer \u2014 bevel edges of a solid.`,
      category: `modifier`,
      ai_hint: `Bevel edges. Apply after creating geometry. Use parent_part_id to target a part.`,
      input_schema: {
        properties: {
          child: {
            description: `Child node to chamfer.`,
            type: `string`
          },
          distance: {
            description: `Chamfer distance.`,
            type: `number`
          }
        },
        required: [
          `child`,
          `distance`
        ],
        type: `object`
      }
    },
    {
      name: `edge_blend`,
      description: "Edge blend \u2014 chamfer/fillet/variable blend on query-selected edges.  `edges` resolves against the child's topology at evaluation time, so selections survive upstream parameter changes. The profile is either constant or keyed along each edge: `shape` interpolates a flat chamfer (`0`) into a round fillet (`1`), and `size` is the tangent setback (chamfer leg = fillet radius). Edges sharing a vertex with an already-blended edge are skipped (miter corners are a planned follow-up).",
      category: `modifier`,
      ai_hint: `Per-edge blend with a declarative selector: pick edges by query (Near a point / Direction / All plane-plane edges), then apply a Constant or Keyed profile. shape 0 = chamfer, 1 = fillet; size = chamfer leg / fillet radius in mm. Keyed profiles morph along the edge \u2014 e.g. chamfer lofting into a fillet.`,
      input_schema: {
        properties: {
          child: {
            description: `Child node to blend.`,
            type: `string`
          },
          edges: {
            description: `Which edges to blend.`,
            type: `object`
          },
          profile: {
            description: `Cross-section profile along each selected edge.`,
            type: `object`
          }
        },
        required: [
          `child`,
          `edges`,
          `profile`
        ],
        type: `object`
      }
    },
    {
      name: `text_2_d`,
      description: `2D text that can be extruded into 3D geometry.  Creates sketch profiles from text glyphs, which can then be extruded and used in boolean operations for embossing/engraving.`,
      category: `sketch_op`,
      input_schema: {
        properties: {
          alignment: {
            description: `Text alignment.`,
            type: `object`
          },
          font: {
            description: `Font name (e.g., "sans-serif", "monospace", or custom registered font).`,
            type: `string`
          },
          height: {
            description: `Text height in mm.`,
            type: `number`
          },
          letter_spacing: {
            description: `Letter spacing multiplier (1.0 = normal).`,
            type: `number`
          },
          line_spacing: {
            description: `Line spacing multiplier for multi-line text (1.0 = normal).`,
            type: `number`
          },
          origin: {
            description: `Origin point of the text plane in 3D.`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          text: {
            description: `The text string to render.`,
            type: `string`
          },
          x_dir: {
            description: `X direction of the text plane (text flows along this axis).`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          },
          y_dir: {
            description: `Y direction of the text plane (text height along this axis).`,
            properties: {
              x: {
                type: `number`
              },
              y: {
                type: `number`
              },
              z: {
                type: `number`
              }
            },
            required: [
              `x`,
              `y`,
              `z`
            ],
            type: `object`
          }
        },
        required: [
          `origin`,
          `x_dir`,
          `y_dir`,
          `text`,
          `font`,
          `height`,
          `alignment`
        ],
        type: `object`
      }
    },
    {
      name: `sweep`,
      description: `Sweep a profile along a path curve.`,
      category: `sketch_op`,
      ai_hint: "Sweep a 2D sketch profile along a 3D path. The `path` field is a tagged object \u2014 one of: `{type:'Line', start:{x,y,z}, end:{x,y,z}}` for a straight sweep, or `{type:'Helix', radius, pitch, height, turns}` for a coil/spring (radius = helix radius in mm, pitch = vertical rise per turn in mm, height = total Z height, turns = total turn count \u2248 height/pitch). USE HELIX for springs, coils, screw threads, spiral ramps \u2014 do NOT try to approximate a helix with Line segments; a Line path only produces a straight sweep. Example spring: sketch a small circle profile, then sweep with path:{type:'Helix', radius:10, pitch:8, height:50, turns:6.25}.",
      input_schema: {
        properties: {
          arc_segments: {
            description: `Segments per arc in profile (default 8).`,
            type: `integer`
          },
          orientation: {
            description: `Initial profile rotation around path tangent (radians, default 0).`,
            type: `number`
          },
          path: {
            description: `The path curve to sweep along.`,
            oneOf: [
              {
                description: `Straight line path. Use for linear extrudes-along-a-path.`,
                properties: {
                  end: {
                    properties: {
                      x: {
                        type: `number`
                      },
                      y: {
                        type: `number`
                      },
                      z: {
                        type: `number`
                      }
                    },
                    required: [
                      `x`,
                      `y`,
                      `z`
                    ],
                    type: `object`
                  },
                  start: {
                    properties: {
                      x: {
                        type: `number`
                      },
                      y: {
                        type: `number`
                      },
                      z: {
                        type: `number`
                      }
                    },
                    required: [
                      `x`,
                      `y`,
                      `z`
                    ],
                    type: `object`
                  },
                  type: {
                    const: `Line`
                  }
                },
                required: [
                  `type`,
                  `start`,
                  `end`
                ],
                type: `object`
              },
              {
                description: `Helical path. Use for springs, coils, screw threads, spiral ramps.`,
                properties: {
                  height: {
                    description: `Total Z height of the helix in mm.`,
                    type: `number`
                  },
                  pitch: {
                    description: `Vertical rise per full turn in mm.`,
                    type: `number`
                  },
                  radius: {
                    description: `Helix radius in mm.`,
                    type: `number`
                  },
                  turns: {
                    description: `Total turn count. Normally \u2248 height / pitch.`,
                    type: `number`
                  },
                  type: {
                    const: `Helix`
                  }
                },
                required: [
                  `type`,
                  `radius`,
                  `pitch`,
                  `height`,
                  `turns`
                ],
                type: `object`
              }
            ]
          },
          path_segments: {
            description: `Segments along path (0 = auto).`,
            type: `integer`
          },
          scale_end: {
            description: `Scale at end (default 1.0).`,
            type: `number`
          },
          scale_start: {
            description: `Scale at start (default 1.0).`,
            type: `number`
          },
          sketch: {
            description: `The sketch node to sweep.`,
            type: `string`
          },
          twist_angle: {
            description: `Total twist in radians (default 0).`,
            type: `number`
          }
        },
        required: [
          `sketch`,
          `path`
        ],
        type: `object`
      }
    },
    {
      name: `loft`,
      description: `Loft between multiple profiles.`,
      category: `sketch_op`,
      input_schema: {
        properties: {
          closed: {
            description: `Connect last profile to first (creates tube).`,
            type: `boolean`
          },
          sketches: {
            description: `Array of Sketch2D node references (>= 2).`,
            items: {
              description: `Node ID reference`,
              type: `string`
            },
            type: `array`
          }
        },
        required: [
          `sketches`
        ],
        type: `object`
      }
    }
  ];
  bn = new class {
    constructor() {
      __publicField(this, "schemas", yn);
      __publicField(this, "typeCatalogCache", null);
      __publicField(this, "wasm", null);
    }
    loadSchemas(e2) {
      this.schemas = JSON.parse(e2), this.typeCatalogCache = null;
    }
    setWasm(e2) {
      this.wasm = e2;
    }
    getSchemas() {
      return this.schemas;
    }
    getTypeEnum() {
      return this.schemas.map((e2) => e2.name);
    }
    toAnthropicTools() {
      if (this.wasm) try {
        let e2 = JSON.parse(this.wasm.get_anthropic_tools_json()), t2 = new Set(e2.map((e3) => e3.name)), n2 = this.tsFallbackTools().filter((e3) => !t2.has(e3.name));
        return n2.length > 0 ? [
          ...e2,
          ...n2
        ] : e2;
      } catch {
      }
      return this.tsFallbackTools();
    }
    tsFallbackTools() {
      return [
        {
          name: `create`,
          description: `Create a new CAD feature. Use 'type' to specify the kind and 'params' for its parameters. See the type catalog in the system prompt for available types and their parameters.`,
          input_schema: {
            type: `object`,
            properties: {
              type: {
                type: `string`,
                enum: this.getTypeEnum(),
                description: `The CsgOp type to create.`
              },
              params: {
                type: `object`,
                description: `Parameters for the specified type. See type catalog in system prompt.`
              },
              parent_part_id: {
                type: `string`,
                description: `If provided, appends the feature to this existing part instead of creating a new one.`
              },
              name: {
                type: `string`,
                description: `Optional human-readable name for this feature (e.g. 'Front Wheel', 'Top Tube', 'Seat Post'). Strongly recommended \u2014 makes the feature tree readable. Keep short (1-3 words).`
              }
            },
            required: [
              `type`,
              `params`
            ]
          }
        },
        {
          name: `read`,
          description: `Inspect the current document. Without part_id, lists all parts. With part_id, returns full feature tree and parameters for that part.`,
          input_schema: {
            type: `object`,
            properties: {
              part_id: {
                type: `string`,
                description: `Part ID to inspect. Omit to list all parts.`
              }
            }
          }
        },
        {
          name: `update`,
          description: `Update parameters on an existing node. Pass only the fields you want to change.`,
          input_schema: {
            type: `object`,
            properties: {
              node_id: {
                type: `string`,
                description: `The node ID to update.`
              },
              params: {
                type: `object`,
                description: `Partial parameter object. Only provided fields are changed.`
              }
            },
            required: [
              `node_id`,
              `params`
            ]
          }
        },
        {
          name: `delete`,
          description: `Delete a part from the document.`,
          input_schema: {
            type: `object`,
            properties: {
              part_id: {
                type: `string`,
                description: `The part ID to delete.`
              }
            },
            required: [
              `part_id`
            ]
          }
        },
        {
          name: `set_material`,
          description: "Set the material/color of one OR MANY parts in a single call. Provide ONE of: `part_id` (single), `part_ids` (explicit array), or `selector` (match by kind/name). Prefer the bulk forms \u2014 assigning the same material to 18 parts via 18 calls is wasteful when one selector call would do it.",
          input_schema: {
            type: `object`,
            properties: {
              part_id: {
                type: `string`,
                description: `Single part ID to set the material on.`
              },
              part_ids: {
                type: `array`,
                items: {
                  type: `string`
                },
                description: `Array of part IDs \u2014 applies the material to each.`
              },
              selector: {
                type: `object`,
                description: "Match many parts at once. `by` is one of: 'kind' | 'name_prefix' | 'name_contains' | 'name_equals'. `value` is matched case-insensitively. Example: { by: 'name_prefix', value: 'Spoke' }.",
                properties: {
                  by: {
                    type: `string`,
                    enum: [
                      `kind`,
                      `name_prefix`,
                      `name_contains`,
                      `name_equals`
                    ]
                  },
                  value: {
                    type: `string`
                  }
                },
                required: [
                  `by`,
                  `value`
                ]
              },
              material: {
                type: `string`,
                description: `Material preset key (e.g. 'aluminum', 'gold', 'oak', 'abs-red').`
              }
            },
            required: [
              `material`
            ]
          }
        },
        {
          name: `focus_part`,
          description: `Point your camera at a part so the user can see what you're working on. Also highlights the part in your participant color as an attention cue. Use this after creating or modifying something you want the user to notice.`,
          input_schema: {
            type: `object`,
            properties: {
              part_id: {
                type: `string`,
                description: `The part ID to focus on.`
              }
            },
            required: [
              `part_id`
            ]
          }
        },
        {
          name: `frame_all`,
          description: `Frame the entire scene in your camera view. Useful for taking a step back to show the user the whole model at once.`,
          input_schema: {
            type: `object`,
            properties: {}
          }
        },
        {
          name: `set_view`,
          description: `Snap your camera to a preset viewing angle: iso, hero, top, bottom, front, back, left, or right. Frames the current scene bounding box from the chosen direction.`,
          input_schema: {
            type: `object`,
            properties: {
              name: {
                type: `string`,
                enum: [
                  `iso`,
                  `hero`,
                  `top`,
                  `bottom`,
                  `front`,
                  `back`,
                  `left`,
                  `right`
                ],
                description: `The snap view to use.`
              }
            },
            required: [
              `name`
            ]
          }
        },
        {
          name: `tube`,
          description: `Create a cylindrical pipe/tube between two world-space points. One call, no trigonometry: pass start and end and radius, and the tube is created with correct orientation, length, and cross-section. Strongly preferred over manually building an extrude with perpendicular-basis vectors \u2014 this is the right tool for frame tubes, pipes, handlebars, axles, spindles, and similar segments.`,
          input_schema: {
            type: `object`,
            properties: {
              start: {
                type: `object`,
                properties: {
                  x: {
                    type: `number`
                  },
                  y: {
                    type: `number`
                  },
                  z: {
                    type: `number`
                  }
                },
                description: `World-space start point of the tube centerline.`,
                required: [
                  `x`,
                  `y`,
                  `z`
                ]
              },
              end: {
                type: `object`,
                properties: {
                  x: {
                    type: `number`
                  },
                  y: {
                    type: `number`
                  },
                  z: {
                    type: `number`
                  }
                },
                description: `World-space end point of the tube centerline.`,
                required: [
                  `x`,
                  `y`,
                  `z`
                ]
              },
              radius: {
                type: `number`,
                description: `Tube radius in mm (default 5).`
              },
              arc_segments: {
                type: `integer`,
                description: `Circumferential resolution (default 16).`
              },
              name: {
                type: `string`,
                description: `Short descriptive name for the tube.`
              }
            },
            required: [
              `start`,
              `end`
            ]
          }
        },
        {
          name: `polyline_tube`,
          description: `Create a chain of tubes through a sequence of world-space points. Each consecutive pair of points becomes one tube segment (a separate part \u2014 not unioned). Perfect for bike frames, piping, cable runs, and any multi-segment pipe run where the joints are points rather than vectors.`,
          input_schema: {
            type: `object`,
            properties: {
              points: {
                type: `array`,
                description: `Ordered list of world-space points the tube passes through. Must have \u22652 entries.`,
                items: {
                  type: `object`,
                  properties: {
                    x: {
                      type: `number`
                    },
                    y: {
                      type: `number`
                    },
                    z: {
                      type: `number`
                    }
                  },
                  required: [
                    `x`,
                    `y`,
                    `z`
                  ]
                }
              },
              radius: {
                type: `number`,
                description: `Tube radius in mm (default 5).`
              },
              arc_segments: {
                type: `integer`,
                description: `Circumferential resolution (default 16).`
              },
              name: {
                type: `string`,
                description: `Base name (segments named 'Base 1', 'Base 2', ...).`
              }
            },
            required: [
              `points`
            ]
          }
        },
        {
          name: `inspect_part`,
          description: "Read a part's current world-space geometry: bounding box, size, center, translate, rotation, material, and the set of named anchors (center/min/max/top/bottom/front/back/left/right) you can pass to `place`. Use this to verify what the scene looks like after a tool call without spending tokens on a screenshot \u2014 it's much cheaper than screenshot_viewport. Result is JSON.",
          input_schema: {
            type: `object`,
            properties: {
              part_id: {
                type: `string`,
                description: `The part ID to inspect.`
              }
            },
            required: [
              `part_id`
            ]
          }
        },
        {
          name: `place`,
          description: "Position a part by anchor: moves the part so that its `from` anchor lands on the `to` anchor. Both anchors can be either a named anchor on this or another part (center/min/max/top/bottom/front/back/left/right), or an explicit world-space {x,y,z} point. Prefer this over manual translate/rotate when you're aligning to another part \u2014 it remains correct when upstream dimensions change.",
          input_schema: {
            type: `object`,
            properties: {
              part_id: {
                type: `string`,
                description: `The part to move.`
              },
              from: {
                description: `The anchor on this part to place. Either a named anchor string, a {x,y,z} point, or {part, anchor}. Defaults to 'center'.`
              },
              to: {
                description: `The destination. Either a named anchor string (resolved on this part), a {x,y,z} world point, or {part, anchor}.`
              }
            },
            required: [
              `part_id`,
              `to`
            ]
          }
        },
        {
          name: `describe_scene`,
          description: "One-call snapshot of the whole scene (or a subset of parts): each part's world-space bbox, center, translate, rotate, and material as JSON. Use this INSTEAD of a chain of `inspect_part` calls when you need positions for several parts at once \u2014 one turn, no round-trips. Also use it after a batch of edits to verify where everything ended up.",
          input_schema: {
            type: `object`,
            properties: {
              part_ids: {
                type: `array`,
                items: {
                  type: `string`
                },
                description: `Optional list of part IDs to describe. Omit to describe every part.`
              },
              limit: {
                type: `integer`,
                description: `Cap the number of parts returned when no part_ids are provided (default 100).`
              }
            }
          }
        },
        {
          name: `search_parts`,
          description: "Search the stdlib parts library (fasteners, bearings, \u2026) for parts matching a query. Free-text matches across name, category, synonyms, and catalog part numbers (McMaster / ISO / DIN). Returns an array of {id, name, category, params, xrefs} \u2014 use the `id` with `place_part`. Part numbers like `91290A320` or `ISO 4762` match directly.",
          input_schema: {
            type: `object`,
            properties: {
              query: {
                type: `string`,
                description: `Free-text search query (part name, McMaster number, ISO/DIN reference, synonym, or category).`
              },
              category: {
                type: `string`,
                description: `Optional category filter (e.g. 'Fasteners', 'Bearings').`
              },
              limit: {
                type: `integer`,
                description: `Maximum number of results (default 10).`
              }
            }
          }
        },
        {
          name: `place_part`,
          description: "Insert a stdlib part into the document, returning its new part id. The part remains parametric \u2014 users can edit its params from the feature tree. Use `search_parts` first to discover the `path` and valid `params`. Applies an optional position to the part after insertion.",
          input_schema: {
            type: `object`,
            properties: {
              path: {
                type: `string`,
                description: "Part source path from `search_parts.id`, e.g. 'std:fastener.bolt.socket-head'."
              },
              params: {
                type: `object`,
                description: `Parameter name \u2192 value map. Missing params take the part's declared defaults.`,
                additionalProperties: true
              },
              position: {
                type: `object`,
                description: `Optional world-space position {x, y, z} to place the part. Defaults to origin.`,
                properties: {
                  x: {
                    type: `number`
                  },
                  y: {
                    type: `number`
                  },
                  z: {
                    type: `number`
                  }
                }
              },
              name: {
                type: `string`,
                description: `Optional display name override for the feature tree.`
              }
            },
            required: [
              `path`
            ]
          }
        }
      ];
    }
    getTypeCatalog() {
      if (this.typeCatalogCache) return this.typeCatalogCache;
      let e2 = [
        `## Type Catalog`,
        ``
      ];
      for (let t2 of this.schemas) {
        e2.push(`### ${t2.name} (${t2.category})`), e2.push(t2.description), t2.ai_hint && e2.push(t2.ai_hint);
        let n2 = t2.input_schema.properties;
        if (n2 && Object.keys(n2).length > 0) {
          e2.push(`Parameters:`);
          for (let [t3, r2] of Object.entries(n2)) {
            let n3 = r2.type || `object`, i2 = r2.description || ``;
            e2.push(`- ${t3}: ${n3}${i2 ? ` \u2014 ` + i2 : ``}`);
          }
        }
        e2.push(``);
      }
      return this.typeCatalogCache = e2.join(`
`), this.typeCatalogCache;
    }
    buildSystemPrompt(e2, t2) {
      if (this.wasm) try {
        return this.wasm.build_chat_system_prompt(JSON.stringify(e2), JSON.stringify(t2 ?? []));
      } catch {
      }
      let n2 = [
        `You are vcad's AI assistant \u2014 a parametric CAD copilot.
Coordinate system: Z-up (X right, Y forward, Z up). Units: millimeters.
You have four tools: create, read, update, delete.

## Workflow Guide

**Creating shapes:** Use create with type and params. For custom profiles, use extrude with an inline sketch.
**Modifying:** Use update with a node_id and the params to change. Use read to find node IDs.
**Modifiers:** Fillet, chamfer, shell \u2014 pass parent_part_id to apply to an existing part.
**Booleans:** Union, difference, intersection \u2014 pass left and right part IDs, or let the user select 2 parts.
**Patterns:** Linear and circular patterns repeat geometry. Pass child (part ID), count, spacing/angle.
**Transforms:** Translate, rotate, scale \u2014 pass child (part ID) and the transform values.

## Design Patterns

1. **Simple shapes:** create cube/cylinder/sphere with size/radius params
2. **Custom profiles:** create extrude with inline sketch (Line and Arc segments forming a closed loop)
3. **Refinement:** create fillet/chamfer with parent_part_id after creating base geometry
4. **Hollowing:** create shell with parent_part_id for containers/enclosures
5. **Combining:** create difference to cut holes, union to join, intersection to keep overlap
6. **Repetition:** create linear_pattern or circular_pattern for bolt holes, fins, etc.
7. **Assemblies:** Create multiple parts, position with translate/rotate

## Available Materials

Use set_material(part_id, material) to color parts. Preset keys:
- **Metals**: aluminum, steel, brass, copper, titanium, chrome, gold, silver
- **Plastics**: abs-white, abs-black, abs-red, abs-blue, pla, petg, nylon, resin, acrylic, rubber
- **Organic**: oak, walnut, leather, cork, bamboo
- **Glass**: glass, glass-tinted
- **Composite**: carbon-fiber, fiberglass, kevlar
- **Other**: concrete, ceramic, foam

For the Sun, use gold. For Mars, copper. For Earth, glass-tinted. For gold/silver metallic parts use gold/silver. There's no pure "color" system \u2014 you pick the closest preset.

## Orientation Notes

- **Cylinder**: axis along Z. Height is along Z, circular face is in XY plane. To make a wheel (round face visible from the side), use extrude with a circular sketch in the XZ plane (set y_dir to (0,0,1)) and direction along Y for thickness \u2014 this is more reliable than rotating a cylinder.
- **Box/Cube**: size.x is width, size.y is depth, size.z is height.
- The grid lies in the XY plane. Z is up. X is right, Y is forward.

## How translate/rotate/scale work (IMPORTANT)

When you call create with type translate/rotate/scale, it WRAPS the existing part in place. The returned id is the SAME as the input child id \u2014 it does NOT create a new part with a new id. So:
- create(type:translate, params:{child:abc, offset:...}) \u2192 part abc still exists, now translated. Use abc for follow-ups.
- The DAG node behind the part gets a new wrapping node, but you reference parts by their stable part id, not by node id.

## Key Rules

- Take as many tool calls as you need \u2014 there's no fixed cap. The user can click Stop to interrupt. Plan efficiently and stop naturally when the request is fulfilled; don't keep making changes for the sake of it.
- **CRITICAL \u2014 part IDs**: Every create tool returns a part id in the result (e.g. "Created cylinder with id: 1775951370705:0"). You MUST use the EXACT id string from the result in follow-up operations. NEVER invent ids like "part_1" or "part_2" \u2014 those will fail validation.
- **ALWAYS name features** with a short descriptive name param on every create call. Good names: "Front Wheel", "Top Tube", "Seat Post", "Left Eye". Bad names: (empty), "part1", "thing". Names make the feature tree readable and chat summaries meaningful.
- **CRITICAL \u2014 closed sketches**: Sketch segments MUST form a CLOSED loop where each segment's end point matches the next segment's start point, and the last segment's end matches the first segment's start. A single arc is NOT a closed loop. For a crescent/smile shape, use TWO arcs (outer + inner curve) connected by lines at the endpoints.
- Vec3 params are {x, y, z} objects. Angles are in degrees. Units are mm.
- Be concise \u2014 briefly confirm what you did after tool calls.
- When the user says "this" or "it", use the selected geometry context.
- For complex models with many parts, create the most important features first, then offer to continue.
- NEVER use emojis unless the user explicitly requests them.

## Closed Sketch Example (for reference)

A rectangle (20\xD715 mm) as a closed loop:
~~~
segments: [
  {type:"Line", start:{x:0,y:0},   end:{x:20,y:0}},
  {type:"Line", start:{x:20,y:0},  end:{x:20,y:15}},
  {type:"Line", start:{x:20,y:15}, end:{x:0,y:15}},
  {type:"Line", start:{x:0,y:15},  end:{x:0,y:0}}
]
~~~

A crescent (smile) as a closed loop with two arcs:
~~~
segments: [
  {type:"Arc", start:{x:-25,y:0}, end:{x:25,y:0}, center:{x:0,y:-30}, ccw:false},
  {type:"Arc", start:{x:25,y:0},  end:{x:-25,y:0}, center:{x:0,y:-20}, ccw:true}
]
~~~

A full circle of radius R using two half-arcs:
~~~
segments: [
  {type:"Arc", start:{x:R,y:0},  end:{x:-R,y:0}, center:{x:0,y:0}, ccw:false},
  {type:"Arc", start:{x:-R,y:0}, end:{x:R,y:0},  center:{x:0,y:0}, ccw:false}
]
~~~

## Sketch rules \u2014 READ CAREFULLY

- Sketches MUST have at least 2 segments forming a closed loop.
- Each segment's end must EXACTLY match the next segment's start.
- The LAST segment's end must match the FIRST segment's start.
- **Arcs**: start, end, center and ccw. The radius = distance(start, center) must equal distance(end, center) \u2014 if they don't match, the arc is invalid. For a full circle use TWO half-arcs (e.g. start=(r,0), end=(-r,0), center=(0,0), ccw=false, then start=(-r,0), end=(r,0), center=(0,0), ccw=false).
- To cut a shape OUT of a part, create the shape as a separate extrude, then use difference(left: mainPartId, right: cutPartId).
- Don't use single arcs \u2014 they aren't closed profiles.`,
        ``,
        this.getTypeCatalog()
      ];
      if (e2.length > 0) {
        n2.push(`## Current Document`), n2.push(`Parts:`);
        for (let t3 of e2) if (n2.push(`- ${t3.id} "${t3.name}" [${t3.kind}]`), t3.nodes) for (let e3 of t3.nodes) {
          let t4 = Object.entries(e3.params).map(([e4, t5]) => `${e4}: ${JSON.stringify(t5)}`).join(`, `);
          n2.push(`  \u2514\u2500 ${e3.nodeId} [${e3.type}] ${t4}`);
        }
        n2.push(``);
      }
      if (t2 == null ? void 0 : t2.length) {
        let e3 = t2.map((e4) => {
          var _a2, _b;
          let t3 = `${e4.partName} (${e4.geometryType}, id: ${e4.partId})`;
          return e4.geometryType === `face` && e4.faceIndex !== void 0 ? t3 = `${e4.partName} face #${e4.faceIndex} (id: ${e4.partId})` : e4.geometryType === `edge` && ((_a2 = e4.dimensions) == null ? void 0 : _a2.edgeId) !== void 0 ? t3 = `${e4.partName} edge #${e4.dimensions.edgeId} (id: ${e4.partId})` : e4.geometryType === `vertex` && ((_b = e4.dimensions) == null ? void 0 : _b.vertexId) !== void 0 && (t3 = `${e4.partName} vertex #${e4.dimensions.vertexId} (id: ${e4.partId})`), `- ${t3}`;
        }).join(`
`);
        n2.push(`Selected:
${e3}`);
      }
      return n2.join(`
`);
    }
  }();
  function xn(e2) {
    let t2 = r();
    if (!t2) throw Error(`kernel WASM not initialized \u2014 await getKernelWasm() before exporting`);
    let n2 = t2, i2 = 0, a2 = 0;
    for (let t3 of e2.parts) i2 += t3.mesh.positions.length, a2 += t3.mesh.indices.length;
    let o2 = new Float32Array(i2), s2 = new Uint32Array(a2), c2 = 0, l2 = 0, u2 = e2.parts.map((e3) => {
      o2.set(e3.mesh.positions, c2), s2.set(e3.mesh.indices, l2);
      let t3 = {
        positions: [
          c2,
          e3.mesh.positions.length
        ],
        indices: [
          l2,
          e3.mesh.indices.length
        ]
      };
      return c2 += e3.mesh.positions.length, l2 += e3.mesh.indices.length, t3;
    }), d2 = n2.buildStlBytes(JSON.stringify({
      name: `vcad binary STL export`,
      meshes: u2
    }), o2, s2);
    return d2.buffer.slice(d2.byteOffset, d2.byteOffset + d2.byteLength);
  }
  Sn = function(e2) {
    let t2 = xn(e2);
    return new Blob([
      t2
    ], {
      type: `application/octet-stream`
    });
  };
  function Cn(e2) {
    let t2 = wn(), n2 = 0, r2 = 0;
    for (let t3 of e2.parts) n2 += t3.mesh.positions.length, r2 += t3.mesh.indices.length;
    let i2 = new Float32Array(n2), a2 = new Uint32Array(r2), o2 = 0, s2 = 0, c2 = e2.parts.map((e3, t3) => {
      i2.set(e3.mesh.positions, o2), a2.set(e3.mesh.indices, s2);
      let n3 = {
        name: `part_${t3}`,
        positions: [
          o2,
          e3.mesh.positions.length
        ],
        indices: [
          s2,
          e3.mesh.indices.length
        ],
        color: [
          0.8,
          0.8,
          0.8
        ],
        metallic: 0.1,
        roughness: 0.5
      };
      return o2 += e3.mesh.positions.length, s2 += e3.mesh.indices.length, n3;
    }), l2 = t2.buildGlbBytes(JSON.stringify({
      name: `vcad`,
      meshes: c2
    }), i2, a2);
    return l2.buffer.slice(l2.byteOffset, l2.byteOffset + l2.byteLength);
  }
  function wn() {
    let e2 = r();
    if (!e2) throw Error(`kernel WASM not initialized \u2014 await getKernelWasm() before exporting`);
    return e2;
  }
  Tn = function(e2) {
    let t2 = Cn(e2);
    return new Blob([
      t2
    ], {
      type: `model/gltf-binary`
    });
  };
  var Y = null;
  async function En() {
    if (Y) return Y;
    try {
      return Y = await a(() => import("./vcad_kernel_wasm-CZ4lc4bq.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []), Y;
    } catch {
      return null;
    }
  }
  En();
  Dn = function(e2) {
    return e2.loonSource ? {
      kind: `loon`,
      version: `0.3`,
      loonSource: e2.loonSource,
      document: e2.document ?? f(),
      parts: e2.parts ?? [],
      nextNodeId: e2.nextNodeId ?? 1
    } : e2._crdtEngine ? {
      kind: `crdt`,
      version: `0.4`,
      crdtBytes: e2._crdtEngine.save()
    } : null;
  };
  On = function(e2) {
    var _a2;
    if (e2.loonSource) return e2.loonSource;
    let t2 = e2.crdtBytes && e2.crdtBytes.byteLength > 0 ? e2.crdtBytes : (_a2 = e2._crdtEngine) == null ? void 0 : _a2.save();
    if (t2 && t2.byteLength > 0) return new TextDecoder().decode(t2);
    throw Error(`serializeDocument: no CRDT bytes or loon source to serialize \u2014 engine not initialized?`);
  };
  kn = function(e2, t2) {
    let n2 = e2.trim();
    if (An(n2)) return In(n2);
    if (Y == null ? void 0 : Y.parseVcadFile) try {
      return jn(Y.parseVcadFile(n2));
    } catch (e3) {
      console.warn(`[CORE] WASM parseVcadFile failed, using TS fallback:`, e3);
    }
    return Mn(n2, t2);
  };
  function An(e2) {
    return e2.startsWith(`{`) ? e2.includes(`"replica_id"`) && e2.includes(`"ops"`) : false;
  }
  function X(e2) {
    if (e2 instanceof Map) {
      let t2 = {};
      for (let [n2, r2] of e2) t2[String(n2)] = X(r2);
      return t2;
    }
    if (Array.isArray(e2)) return e2.map(X);
    if (e2 && typeof e2 == `object`) {
      let t2 = {};
      for (let [n2, r2] of Object.entries(e2)) t2[n2] = X(r2);
      return t2;
    }
    return e2;
  }
  function jn(e2) {
    if (!e2 || typeof e2 != `object`) throw Error(`Invalid .vcad file: WASM parser returned non-object`);
    let t2 = X(e2), n2 = typeof t2.loonSource == `string` ? t2.loonSource : null, r2 = t2.document, i2 = t2.parts ?? [], a2 = typeof t2.nextNodeId == `number` ? t2.nextNodeId : 0, o2 = typeof t2.nextPartNum == `number` ? t2.nextPartNum : void 0, s2 = t2.consumedParts ?? {}, c2 = typeof t2.version == `string` ? t2.version : `0.1`;
    return n2 ? {
      kind: `loon`,
      version: `0.3`,
      loonSource: n2,
      document: r2,
      parts: i2,
      nextNodeId: a2,
      nextPartNum: o2
    } : {
      kind: `legacy`,
      version: c2 === `0.2` ? `0.2` : `0.1`,
      document: r2,
      parts: i2,
      consumedParts: s2,
      nextNodeId: a2,
      nextPartNum: o2
    };
  }
  function Mn(e2, t2) {
    let n2 = e2.trim();
    return n2.startsWith(`{`) ? Ln(n2) : n2.startsWith(`[`) || n2.startsWith(`;`) ? Rn(n2, t2) : zn(n2);
  }
  var Nn = 67108864, Pn = 5e5, Fn = 5e4;
  function Z(e2, t2) {
    return Object.prototype.hasOwnProperty.call(e2, t2);
  }
  function In(e2) {
    if (e2.length > Nn) throw Error(`Invalid .vcad file: exceeds size limit`);
    try {
      JSON.parse(e2);
    } catch (e3) {
      throw Error(`Invalid v0.4 .vcad file: ${e3.message}`);
    }
    return {
      kind: `crdt`,
      version: `0.4`,
      crdtBytes: new TextEncoder().encode(e2)
    };
  }
  function Ln(e2) {
    if (e2.length > Nn) throw Error(`Invalid .vcad file: exceeds size limit`);
    let t2 = JSON.parse(e2);
    if (!t2 || typeof t2 != `object` || Array.isArray(t2)) throw Error(`Invalid .vcad file: expected an object`);
    let n2 = t2;
    if (Z(n2, `__proto__`) || Z(n2, `constructor`) || Z(n2, `prototype`)) throw Error(`Invalid .vcad file: forbidden key in root`);
    let r2 = n2.document;
    if (!r2 || typeof r2 != `object` || Array.isArray(r2)) throw Error(`Invalid .vcad file: missing or malformed document`);
    let i2 = r2, a2 = i2.nodes;
    if (!a2 || typeof a2 != `object` || Array.isArray(a2)) throw Error(`Invalid .vcad file: document.nodes must be an object`);
    let o2 = a2;
    if (Z(o2, `__proto__`) || Z(o2, `constructor`)) throw Error(`Invalid .vcad file: forbidden key in document.nodes`);
    if (Object.keys(o2).length > Pn) throw Error(`Invalid .vcad file: too many nodes`);
    if (!Array.isArray(i2.roots)) throw Error(`Invalid .vcad file: document.roots must be an array`);
    let s2 = n2.parts;
    if (!Array.isArray(s2)) throw Error(`Invalid .vcad file: parts must be an array`);
    if (s2.length > Fn) throw Error(`Invalid .vcad file: too many parts`);
    let c2 = n2.nextNodeId;
    if (typeof c2 != `number` || !Number.isFinite(c2)) throw Error(`Invalid .vcad file: missing or invalid nextNodeId`);
    return {
      kind: `legacy`,
      version: `0.1`,
      document: r2,
      parts: s2,
      consumedParts: n2.consumedParts ?? {},
      nextNodeId: c2,
      nextPartNum: typeof n2.nextPartNum == `number` ? n2.nextPartNum : void 0
    };
  }
  function Rn(e2, t2) {
    if (!t2) throw Error(`Loon format detected but no evaluator provided. Engine may not be ready.`);
    let n2 = t2(e2), r2 = JSON.parse(n2), i2 = Bn(r2), { nextNodeId: a2, nextPartNum: o2 } = Gn(r2, i2);
    return {
      kind: `loon`,
      version: `0.3`,
      loonSource: e2,
      document: r2,
      parts: i2,
      nextNodeId: a2,
      nextPartNum: o2
    };
  }
  function zn(e2) {
    let t2 = p(e2), n2 = Bn(t2), { nextNodeId: r2, nextPartNum: i2 } = Gn(t2, n2);
    return {
      kind: `legacy`,
      version: `0.2`,
      document: t2,
      parts: n2,
      consumedParts: {},
      nextNodeId: r2,
      nextPartNum: i2
    };
  }
  Bn = function(e2) {
    if (Y == null ? void 0 : Y.deriveParts) try {
      return Y.deriveParts(JSON.stringify(e2));
    } catch (e3) {
      console.warn(`[CORE] WASM deriveParts failed, using TS fallback:`, e3);
    }
    return Vn(e2);
  };
  function Vn(e2) {
    let t2 = [], n2 = 1, r2 = /* @__PURE__ */ new Set();
    for (let t3 of Object.keys(e2.nodes)) {
      let n3 = e2.nodes[t3];
      if (!n3) continue;
      let i2 = Wn(n3.op);
      for (let e3 of i2) r2.add(e3);
    }
    for (let r3 of e2.roots) {
      if (!e2.nodes[String(r3.root)]) continue;
      let i2 = Hn(e2, r3.root, n2);
      i2 && (t2.push(i2), n2++);
    }
    return t2;
  }
  function Hn(e2, t2, n2) {
    var _a2;
    let r2 = Un(e2, t2);
    if (!r2) return null;
    let { translateNodeId: i2, rotateNodeId: a2, scaleNodeId: o2, coreNodeId: s2, coreOp: c2 } = r2, l2 = ((_a2 = e2.nodes[String(i2)]) == null ? void 0 : _a2.name) ?? `Part ${n2}`, u2 = `part-${n2}`, d2 = c2.type;
    switch (d2) {
      case `Cube`:
      case `Cylinder`:
      case `Sphere`:
        return {
          id: u2,
          name: l2,
          kind: d2.toLowerCase(),
          primitiveNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `Union`:
      case `Difference`:
      case `Intersection`:
        return {
          id: u2,
          name: l2,
          kind: `boolean`,
          booleanType: d2.toLowerCase(),
          booleanNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2,
          sourcePartIds: [
            `unknown`,
            `unknown`
          ]
        };
      case `Extrude`:
        return {
          id: u2,
          name: l2,
          kind: `extrude`,
          sketchNodeId: c2.sketch,
          extrudeNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `Revolve`:
        return {
          id: u2,
          name: l2,
          kind: `revolve`,
          sketchNodeId: c2.sketch,
          revolveNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `Sweep`:
        return {
          id: u2,
          name: l2,
          kind: `sweep`,
          sketchNodeId: c2.sketch,
          sweepNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `Loft`:
        return {
          id: u2,
          name: l2,
          kind: `loft`,
          sketchNodeIds: c2.sketches,
          loftNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `ImportedMesh`:
        return {
          id: u2,
          name: l2,
          kind: `imported-mesh`,
          meshNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `Fillet`:
        return {
          id: u2,
          name: l2,
          kind: `fillet`,
          sourcePartId: `unknown`,
          filletNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `Chamfer`:
        return {
          id: u2,
          name: l2,
          kind: `chamfer`,
          sourcePartId: `unknown`,
          chamferNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `Shell`:
        return {
          id: u2,
          name: l2,
          kind: `shell`,
          sourcePartId: `unknown`,
          shellNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `LinearPattern`:
        return {
          id: u2,
          name: l2,
          kind: `linear-pattern`,
          sourcePartId: `unknown`,
          patternNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `CircularPattern`:
        return {
          id: u2,
          name: l2,
          kind: `circular-pattern`,
          sourcePartId: `unknown`,
          patternNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `PcbBoard`:
        return {
          id: u2,
          name: l2,
          kind: `pcb-board`,
          boardNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      case `EmbroideryPattern`:
        return {
          id: u2,
          name: l2,
          kind: `embroidery-pattern`,
          patternNodeId: s2,
          scaleNodeId: o2,
          rotateNodeId: a2,
          translateNodeId: i2
        };
      default:
        return null;
    }
  }
  function Un(e2, t2) {
    let n2 = e2.nodes[String(t2)];
    if (!n2) return null;
    let r2 = t2, i2 = t2, a2 = t2, o2 = n2, s2 = t2, c2 = n2.op, l2 = false, u2 = false;
    for (; o2.op.type === `Translate` || o2.op.type === `Rotate` || o2.op.type === `Scale`; ) {
      o2.op.type === `Rotate` && !l2 && (i2 = o2.id, l2 = true), o2.op.type === `Scale` && !u2 && (a2 = o2.id, u2 = true);
      let t3 = e2.nodes[String(o2.op.child)];
      if (!t3) return s2 = o2.id, c2 = o2.op, {
        translateNodeId: r2,
        rotateNodeId: i2,
        scaleNodeId: a2,
        coreNodeId: s2,
        coreOp: c2
      };
      o2 = t3, s2 = o2.id, c2 = o2.op;
    }
    return {
      translateNodeId: r2,
      rotateNodeId: i2,
      scaleNodeId: a2,
      coreNodeId: s2,
      coreOp: c2
    };
  }
  function Wn(e2) {
    switch (e2.type) {
      case `Translate`:
      case `Rotate`:
      case `Scale`:
      case `LinearPattern`:
      case `CircularPattern`:
      case `Fillet`:
      case `Chamfer`:
      case `EdgeBlend`:
      case `Shell`:
        return [
          e2.child
        ];
      case `Union`:
      case `Difference`:
      case `Intersection`:
        return [
          e2.left,
          e2.right
        ];
      case `Extrude`:
      case `Revolve`:
      case `Sweep`:
        return [
          e2.sketch
        ];
      case `Loft`:
        return e2.sketches;
      default:
        return [];
    }
  }
  Gn = function(e2, t2) {
    let n2 = 0;
    for (let t3 of Object.keys(e2.nodes)) {
      let e3 = parseInt(t3, 10);
      !isNaN(e3) && e3 > n2 && (n2 = e3);
    }
    let r2 = 0;
    for (let e3 of t2) {
      let t3 = e3.id.match(/^part-(\d+)$/);
      if (t3 && t3[1]) {
        let e4 = parseInt(t3[1], 10);
        e4 > r2 && (r2 = e4);
      }
    }
    return {
      nextNodeId: n2 + 1,
      nextPartNum: r2 + 1
    };
  };
  var Q = null;
  async function Kn() {
    if (Q) return Q;
    try {
      return Q = await a(() => import("./vcad_kernel_wasm-CZ4lc4bq.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []), Q;
    } catch {
      return null;
    }
  }
  Kn();
  qn = function(e2) {
    if (Q == null ? void 0 : Q.computeMeshVolume) try {
      return Q.computeMeshVolume(e2.positions, e2.indices);
    } catch {
    }
    return Jn(e2);
  };
  function Jn(e2) {
    let t2 = e2.indices.length / 3, n2 = 0;
    for (let r2 = 0; r2 < t2; r2++) {
      let t3 = e2.indices[r2 * 3], i2 = e2.indices[r2 * 3 + 1], a2 = e2.indices[r2 * 3 + 2], o2 = $(e2, t3), s2 = $(e2, i2), c2 = $(e2, a2);
      n2 += Yn(o2, s2, c2);
    }
    return Math.abs(n2);
  }
  function Yn(e2, t2, n2) {
    return (e2[0] * (t2[1] * n2[2] - n2[1] * t2[2]) - t2[0] * (e2[1] * n2[2] - n2[1] * e2[2]) + n2[0] * (e2[1] * t2[2] - t2[1] * e2[2])) / 6;
  }
  function $(e2, t2) {
    let n2 = t2 * 3;
    return [
      e2.positions[n2],
      e2.positions[n2 + 1],
      e2.positions[n2 + 2]
    ];
  }
  Xn = function(e2, t2) {
    return e2 / 1e9 * t2;
  };
  Zn = function(e2) {
    return e2 < 1e-3 ? `${(e2 * 1e6).toFixed(1)} mg` : e2 < 1 ? `${(e2 * 1e3).toFixed(1)} g` : `${e2.toFixed(2)} kg`;
  };
  let er, tr;
  Qn = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3
  };
  $n = {
    KERNEL: `kernel`,
    ENGINE: `engine`,
    APP: `app`,
    GPU: `gpu`,
    STEP: `step`,
    MESH: `mesh`,
    WASM: `wasm`
  };
  er = {
    "[WASM]": `kernel`,
    "[KERNEL]": `kernel`,
    "[ENGINE]": `engine`,
    "[APP]": `app`,
    "[GPU]": `gpu`,
    "[STEP]": `step`,
    "[MESH]": `mesh`
  };
  tr = /^\[(WASM|KERNEL|ENGINE|APP|GPU|STEP|MESH)\]\s*/i;
  nr = new class {
    constructor() {
      __publicField(this, "entries", []);
      __publicField(this, "maxEntries", 1e3);
      __publicField(this, "nextId", 1);
      __publicField(this, "subscribers", /* @__PURE__ */ new Set());
      __publicField(this, "intercepted", false);
      __publicField(this, "originalConsole", {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
        debug: console.debug.bind(console)
      });
      typeof window < `u` && this.interceptConsole();
    }
    interceptConsole() {
      if (this.intercepted) return;
      this.intercepted = true;
      let e2 = this, t2 = (t3, n2) => function(...r2) {
        if (t3(...r2), r2.length > 0 && typeof r2[0] == `string`) {
          let t4 = r2[0].match(tr);
          if (t4) {
            let i2 = er[`[${t4[1].toUpperCase()}]`];
            if (i2) {
              let t5 = r2.map((e3, t6) => t6 === 0 ? String(e3).replace(tr, ``) : String(e3)).join(` `);
              e2.addEntry(n2, i2, t5);
            }
          }
        }
      };
      console.log = t2(this.originalConsole.log, `INFO`), console.info = t2(this.originalConsole.info, `INFO`), console.warn = t2(this.originalConsole.warn, `WARN`), console.error = t2(this.originalConsole.error, `ERROR`), console.debug = t2(this.originalConsole.debug, `DEBUG`);
    }
    addEntry(e2, t2, n2) {
      let r2 = {
        id: this.nextId++,
        timestamp: Date.now(),
        level: e2,
        source: t2,
        message: n2
      };
      this.entries.push(r2), this.entries.length > this.maxEntries && (this.entries = this.entries.slice(-this.maxEntries));
      for (let e3 of this.subscribers) try {
        e3(r2);
      } catch {
      }
    }
    log(e2, t2, n2) {
      let r2 = `[${t2.toUpperCase()}]`;
      (e2 === `ERROR` ? this.originalConsole.error : e2 === `WARN` ? this.originalConsole.warn : e2 === `DEBUG` ? this.originalConsole.debug : this.originalConsole.log)(`${r2} ${n2}`), this.addEntry(e2, t2, n2);
    }
    debug(e2, t2) {
      this.log(`DEBUG`, e2, t2);
    }
    info(e2, t2) {
      this.log(`INFO`, e2, t2);
    }
    warn(e2, t2) {
      this.log(`WARN`, e2, t2);
    }
    error(e2, t2) {
      this.log(`ERROR`, e2, t2);
    }
    getEntries() {
      return [
        ...this.entries
      ];
    }
    clear() {
      this.entries = [];
    }
    subscribe(e2) {
      return this.subscribers.add(e2), () => this.subscribers.delete(e2);
    }
  }();
  rr = {
    $schema: `./changelog.schema.json`,
    entries: [
      {
        id: `2026-11-10-window-drag-no-orbit`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Dragging the window no longer orbits the camera`,
        summary: `The Mac app's top row now moves the window across its full height and never feeds the viewport's orbit; drags in the viewport never move the window.`,
        features: [
          `native`,
          `mac`,
          `window`,
          `viewport`
        ]
      },
      {
        id: `2026-11-10-update-edits-inner-node`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `update edits the inner node it is given`,
        summary: `update on a cutter's Translate or Cube inside a loon part now edits that cutter instead of moving the whole part; size uses the create shape, and undo reports changed parts.`,
        features: [
          `mcp`,
          `editing`,
          `undo`
        ],
        mcpTools: [
          `update`,
          `undo`
        ]
      },
      {
        id: `2026-11-10-undo-phantom-board-changes`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `update and undo report only real changes`,
        summary: `Editing a CAD node next to a board no longer lists the board as modified, and undo no longer reports untouched zones as removed.`,
        features: [
          `mcp`,
          `editing`,
          `undo`,
          `pcb`
        ],
        mcpTools: [
          `update`,
          `undo`
        ]
      },
      {
        id: `2026-11-10-step-bspline-import`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `STEP files with B-spline surfaces import whole`,
        summary: `Rational and non-square B-spline faces no longer drop out of STEP imports, curved faces are trimmed to their edges, and opening such a file no longer shows the sample cube while it solves.`,
        features: [
          `step`,
          `import`,
          `tessellation`,
          `native`,
          `mac`
        ]
      },
      {
        id: `2026-11-10-spur-gear-tool`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `feat`,
        title: `Spur Gear tool with mesh-with-selected-gear`,
        summary: `New parametric SpurGear op: exact involute teeth, module, tooth count, pressure angle, face width and bore. The Mac app places a second gear at m(z1+z2)/2, phased tooth into gap.`,
        features: [
          `gears`,
          `involute`,
          `primitives`,
          `native-app`,
          `loon`
        ]
      },
      {
        id: `2026-11-10-sketch-sweep-helix-fields`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Mac sketch sweep: Turns/Radius/Length, on-path profile`,
        summary: `Sketch Sweep gets labeled Turns, Radius and Length fields; the profile's centroid now rides the helix, and profiles that would self-intersect are refused with a plain message.`,
        features: [
          `native-app`,
          `sketch`,
          `sweep`
        ]
      },
      {
        id: `2026-11-10-sketch-ring-profiles`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Mac sketch: ring profiles finish as holes`,
        summary: `A loop inside another now extrudes or cuts as a hole (a lip ring works); a disabled Finish says why, and toolbar number fields take focus on click.`,
        features: [
          `sketch`,
          `native-app`
        ]
      },
      {
        id: `2026-11-10-sketch-friction`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Mac app: sketch-scoped undo, clean rectangles, stable plane`,
        summary: `Cmd-Z in a sketch undoes sketch edits and never removes a document feature; zero-width rectangles wait for a valid corner; armed-tool clicks draw instead of moving the sketch.`,
        features: [
          `sketch`,
          `undo`,
          `native-app`
        ]
      },
      {
        id: `2026-11-10-sketch-dimension-picking`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Mac sketch Dimension picks edges and never fixes points`,
        summary: `Dimension picks lines in screen space at any zoom, clicking two points dimensions their distance instead of fixing one, Return returns focus to the canvas, and conflicting constraints are flagged and deletable.`,
        features: [
          `sketch`,
          `constraints`,
          `native-app`
        ]
      },
      {
        id: `2026-11-10-shell-lofted-solids`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Shell works on lofted solids`,
        summary: `Shelling a loft (open top, closed, or both ends open) no longer evaluates to nothing; sloped walls now offset to exactly the wall thickness.`,
        features: [
          `shell`,
          `loft`,
          `kernel`
        ]
      },
      {
        id: `2026-11-10-receipt-enclosure-selection`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `build_receipt finds the same enclosure as fit checks`,
        summary: `build_receipt and check_enclosure_fit share enclosure selection: enclosure_part_id is accepted, and without it the biggest solid with a cavity wins, not the densest mesh.`,
        features: [
          `ecad`,
          `enclosure`,
          `receipt`
        ],
        mcpTools: [
          `build_receipt`,
          `check_enclosure_fit`
        ]
      },
      {
        id: `2026-11-10-open-progress-card`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `feat`,
        title: `Import and first-solve progress card in the Mac app`,
        summary: `Opening a STEP, .vcad or loon file shows a glass card with real progress (faces built, parts meshed), elapsed time and Cancel, then folds to a pill as parts land.`,
        features: [
          `native`,
          `mac`,
          `step`,
          `import`,
          `viewport`
        ]
      },
      {
        id: `2026-11-10-native-sketch-bar`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `feat`,
        title: `Mac sketch: the dock becomes the sketch bar`,
        summary: `Sketching swaps the dock for one glass sketch bar: plane chip, tool icons with shortcuts, a feature popover and Done. Hints and DOF move to the status field; a blocked Done says why.`,
        features: [
          `sketch`,
          `native-app`
        ]
      },
      {
        id: `2026-11-10-native-quiet-grid`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `feat`,
        title: `Mac app: quiet viewport grid and sketch-plane grid`,
        summary: `Hairline metric grid that adapts to zoom and fades out, red/green X/Y axes, soft contact shadow; sketches get their own grid at the snap size. View > Show Grid / Show Sketch Grid.`,
        features: [
          `native`,
          `viewport`,
          `grid`,
          `sketch`
        ]
      },
      {
        id: `2026-11-10-native-cam-panel-stale-results`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Mac CAM panel: Return commits, stale results marked`,
        summary: `CAM job number fields commit on Return and Generate uses the typed value; edited jobs dim the old result as out of date. The empty Drawing view no longer shows a blank status pill.`,
        features: [
          `native`,
          `cam`,
          `drawing`
        ]
      },
      {
        id: `2026-11-10-native-agent-undo-sketch`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Mac app: agent undo refuses while a sketch is open`,
        summary: `An agent's undo over the app bridge no longer eats the user's sketch strokes: while a sketch is open it refuses with a clear message and changes nothing.`,
        features: [
          `native`,
          `undo`,
          `sketch`,
          `agent`
        ],
        mcpTools: [
          `undo`
        ]
      },
      {
        id: `2026-11-10-kicad-import-phantom-nets`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Clean imported KiCad boards pass build_receipt`,
        summary: `import_kicad no longer keeps KiCad net numbers as phantom nets, and power integrity keys nets by name, so a routed DRC-clean board no longer fails its receipt on nets like "23".`,
        features: [
          `ecad`,
          `pcb`,
          `receipt`,
          `import`
        ],
        mcpTools: [
          `import_kicad`,
          `build_receipt`
        ]
      },
      {
        id: `2026-11-10-inspect-inside-out`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `inspect_cad flags inside-out solids`,
        summary: `inspect_cad lists parts whose faces point inward (negative signed volume, e.g. a reversed-winding mesh import) in inside_out_parts with a warning, not a silent positive volume.`,
        features: [
          `mcp`,
          `inspection`,
          `kernel`
        ],
        mcpTools: [
          `inspect_cad`
        ]
      },
      {
        id: `2026-11-10-gym-step-angle-units`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `gym_step accepts radians and flags radian-looking targets`,
        summary: `gym_step takes angle_units:'rad' for revolute position/velocity targets, and warns on the first step when degree targets look like radians.`,
        features: [
          `mcp`,
          `physics`,
          `gym`
        ],
        mcpTools: [
          `gym_step`
        ]
      },
      {
        id: `2026-11-10-fusion-nav-contact-shadow`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `feat`,
        title: `Fusion 360 mouse controls; grounded contact shadow`,
        summary: `The Mac app defaults to Fusion 360 navigation (middle-drag pan, Shift orbit, zoom at cursor; classic in Settings), and parts cast a footprint-shaped contact shadow.`,
        features: [
          `native`,
          `mac`,
          `viewport`,
          `navigation`
        ]
      },
      {
        id: `2026-11-10-first-delete-reuses-evaluations`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `perf`,
        title: `First edit after loon authoring no longer re-solves`,
        summary: `The first delete or edit after create_cad_loon re-evaluated every untouched part (7-9 s with a boolean stator); it now reuses the authoring evaluation.`,
        features: [
          `mcp`,
          `performance`
        ],
        mcpTools: [
          `delete`,
          `create_cad_loon`
        ]
      },
      {
        id: `2026-11-10-extrude-cw-profile-winding`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Clockwise sketch profiles no longer extrude inside out`,
        summary: `Extruding a clockwise-drawn profile (e.g. a rectangle dragged top-left to bottom-right) produced an inside-out solid that culled faces and broke Shell. Profiles are now normalized.`,
        features: [
          `extrude`,
          `sketch`,
          `shell`
        ]
      },
      {
        id: `2026-11-10-drop-hosted-services`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `breaking`,
        title: `Hosted web app and MCP shut down; /export stays`,
        summary: `Hosted MCP, web editor, sync, sharing, billing and ordering are gone; MCP is local-only (npx @vcad/mcp). Sign in at vcad.io/export to download your cloud documents.`,
        features: [
          `mcp`,
          `cloud-sync`,
          `accounts`,
          `sharing`,
          `cli`
        ],
        mcpTools: [
          `open_in_browser`,
          `share_session`,
          `unshare_session`,
          `place_order`,
          `authorize_spend`,
          `get_order_status`,
          `list_orders`,
          `get_order_feed`,
          `continue_document`
        ]
      },
      {
        id: `2026-11-10-drawing-section-upright`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Section views drawn upright at the clicked cut`,
        summary: `Mac app drawing sections are viewed normal to the cut and keep the parent view's up, and cut at the clicked position instead of its mirror image.`,
        features: [
          `drawing`,
          `drafting`,
          `native`
        ],
        mcpTools: []
      },
      {
        id: `2026-11-10-drawing-letters-and-workspace-picker`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Drawing letters skip datums; workspace picker opens up`,
        summary: `Section, detail and datum letters share one alphabet without I, O, Q, so no letter names two things; the dock's workspace picker now opens upward above the bottom dock.`,
        features: [
          `drawing`,
          `native`,
          `gdt`
        ],
        mcpTools: []
      },
      {
        id: `2026-11-10-drawing-hidden-lines-no-diagonals`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Drawings no longer show tessellation diagonals`,
        summary: `Visible and hidden lines in drawing views come from welded feature edges: per-face vertex copies and T-junctions inside flat faces no longer draw every triangle edge.`,
        features: [
          `drawing`,
          `drafting`
        ],
        mcpTools: []
      },
      {
        id: `2026-11-10-drawing-gdt-placement`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `GD&T symbols placed clear of dimensions and geometry`,
        summary: `Datum feature symbols and feature control frames dropped onto the part or a dimension slide to the nearest clear spot with a leader back to the click.`,
        features: [
          `drawing`,
          `drafting`,
          `gdt`
        ],
        mcpTools: []
      },
      {
        id: `2026-11-10-assembly-bench-fixes`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `Mac app: part names, click placement, interference button`,
        summary: `Parts are listed by name (not Part N) in Insert Instance and clearance; clearance checks posed assembly instances; clicked primitives land where you click; the assembly dock's check runs interference.`,
        features: [
          `native-app`,
          `assembly`,
          `analysis`,
          `primitives`
        ]
      },
      {
        id: `2026-11-10-assemble-readable-default-names`,
        version: `0.11.0`,
        date: `2026-11-10`,
        category: `fix`,
        title: `assemble names instances and joints after parts`,
        summary: `Unnamed instances take their part's name and unnamed joints read "parent \u2192 child", so the Pose panel no longer shows engine ids like 0:29.`,
        features: [
          `mcp`,
          `assembly`
        ],
        mcpTools: [
          `assemble`
        ]
      },
      {
        id: `2026-11-09-wasm-chained-cuts-no-panic`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `perf`,
        title: `Chained cuts no longer panic the WASM evaluator`,
        summary: `Documents with chained boolean cuts evaluate in the kernel instead of crashing into the slower TypeScript fallback.`,
        features: [
          `kernel`,
          `performance`
        ],
        mcpTools: [
          `describe_scene`,
          `delete`
        ]
      },
      {
        id: `2026-11-09-undo-skips-no-op-steps`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `fix`,
        title: `undo rewinds the step that changed the document`,
        summary: `Tools that leave a document unchanged no longer use up an undo step, and undo reports the instances, joints and nodes it changed.`,
        features: [
          `mcp`,
          `undo`
        ],
        mcpTools: [
          `undo`
        ]
      },
      {
        id: `2026-11-09-toothed-ring-union-watertight`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `fix`,
        title: `Toothed ring unions export watertight`,
        summary: `Unioning flat-walled teeth into a curved ring no longer leaves open mesh edges on the ring's outer rim.`,
        features: [
          `booleans`,
          `kernel`
        ]
      },
      {
        id: `2026-11-09-status-field-and-bottom-dock`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `feat`,
        title: `Status field up top, tool dock at the bottom`,
        summary: `The Mac app's document name and search share one centered field that reports edits and solves, and every tool moved to one dock along the bottom.`,
        features: [
          `app`,
          `ui`
        ]
      },
      {
        id: `2026-11-09-sequential-polygon-cutouts`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `fix`,
        title: `Sequential polygon cutouts stay watertight`,
        summary: `Cutting flat-walled holes one after another through a solid no longer leaves open mesh edges or shatters its faces.`,
        features: [
          `booleans`,
          `kernel`
        ]
      },
      {
        id: `2026-11-09-route-nets-imported-copper`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `fix`,
        title: `route_nets leaves imported routed nets alone`,
        summary: `An unscoped route_nets keeps finished imported copper, and a route that makes DRC worse restores the board and reports before and after counts.`,
        features: [
          `ecad`,
          `routing`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-11-09-primitives-and-ops-first-class`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `feat`,
        title: `Every kernel op in the Mac app, click to place`,
        summary: `Torus, wedge, prism and hull are editable features. All primitives place by click; rotational sweep, edge blend, jog, hem and bend relief join the tools.`,
        features: [
          `native-app`,
          `primitives`,
          `sheet-metal`
        ]
      },
      {
        id: `2026-11-09-more-primitives-in-the-app`,
        version: `undefined`,
        date: `2026-11-09`,
        category: `feat`,
        title: `Sphere, cone, torus, wedge, prism and convex hull`,
        summary: `The Mac app's Design toolbar now offers every kernel primitive, adds convex hull, and no longer loses torus, wedge or prism parts when opening a document.`,
        features: [
          `native-app`,
          `primitives`
        ]
      },
      {
        id: `2026-11-09-mcp-agent-run-defects`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `fix`,
        title: `MCP fixes: closed cases, big renders, faster board edits`,
        summary: `Closed cases fit-check, dense documents render and name what they omit, board writes drop from seconds to ms, fab gates agree on blind vias, receipts bind to document state.`,
        features: [
          `mcp`,
          `pcb`,
          `receipts`,
          `enclosure`
        ],
        mcpTools: [
          `check_enclosure_fit`,
          `render_view`,
          `export_gerber`,
          `validate_for_fab`,
          `verify_receipt`,
          `save_document`,
          `get_document`
        ]
      },
      {
        id: `2026-11-09-mac-app-live-link-fixes`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `fix`,
        title: `Mac app live link keeps its window and its last pose`,
        summary: `Simulation runs always land their final pose, tool-minted sessions can't take a window another agent is using, and assemblies no longer gain stray roots.`,
        features: [
          `native-app`,
          `mcp`,
          `assembly`,
          `simulation`
        ],
        mcpTools: [
          `show_in_app`,
          `gym_step`,
          `attach_app_document`
        ]
      },
      {
        id: `2026-11-09-enclosure-sealed-wall-openings`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `fix`,
        title: `check_enclosure_fit finds cutouts in closed cases`,
        summary: `Wall openings in a sealed case are now detected and matched to connectors. A connector that hits a solid wall is still reported.`,
        features: [
          `ecad`,
          `enclosure`
        ],
        mcpTools: [
          `check_enclosure_fit`
        ]
      },
      {
        id: `2026-11-09-agent-run-blockers-3`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `fix`,
        title: `Agent CAD runs: cavities, boards, deletes, clearance`,
        summary: `Cases with cutouts are measured, boards join existing documents, parts move and delete cleanly, and clearance sees real components.`,
        features: [
          `mcp`,
          `enclosure`,
          `pcb`,
          `assembly`,
          `topology-optimization`,
          `native`
        ],
        mcpTools: [
          `check_enclosure_fit`,
          `board_from_solid`,
          `create_schematic`,
          `import_kicad`,
          `update`,
          `delete`,
          `topology_optimize`,
          `check_clearance`,
          `build_receipt`,
          `analyze_structure`,
          `create_cad_loon`
        ]
      },
      {
        id: `2026-11-09-agent-actuator-run-fixes`,
        version: `0.11.0`,
        date: `2026-11-09`,
        category: `fix`,
        title: `Agents keep boards, assemble in place, and stop waiting`,
        summary: `Boards survive loon and assembly edits, the new assemble tool adds joints in place, edits re-solve only changed parts, and render_view returns a PNG out of the box.`,
        features: [
          `mcp`,
          `assembly`,
          `electronics`,
          `app-link`
        ],
        mcpTools: [
          `assemble`,
          `create_cad_loon`,
          `render_view`,
          `topology_optimize`,
          `fab_prep`,
          `check_enclosure_fit`,
          `board_from_solid`
        ]
      },
      {
        id: `2026-11-08-smooth-curves-in-viewport`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `fix`,
        title: `Large curved parts draw smooth in the Mac app`,
        summary: `The viewport meshes curved faces to a 0.02 mm chord tolerance instead of a fixed 32 segments, so big cylinders and fillets no longer show facets.`,
        features: [
          `native-app`,
          `tessellation`,
          `viewport`
        ]
      },
      {
        id: `2026-11-08-sketch-blank-parts`,
        version: `undefined`,
        date: `2026-11-08`,
        category: `feat`,
        title: `Polygon and slot sketch tools, blank parts`,
        summary: `Sketch adds polygon and slot tools, Esc backs out one step instead of discarding the sketch, new sketches start on a blank part, and the first click can pick a face.`,
        features: [
          `native-app`,
          `sketch`
        ]
      },
      {
        id: `2026-11-08-shell-open-faces`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `feat`,
        title: `Shell with open faces`,
        summary: `Shell can now remove picked faces to leave an opening, the open-top box every enclosure starts as. Works on boxes, rounded/filleted boxes and cylinders; fails closed if the wall consumes the solid.`,
        features: [
          `shell`,
          `kernel`,
          `native`,
          `enclosure`
        ],
        mcpTools: [
          `create`
        ]
      },
      {
        id: `2026-11-08-pcb-tools-report-what-drc-measures`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `fix`,
        title: `PCB tools report what DRC measures`,
        summary: `route_nets routability and fab_prep counts now come from DRC, auto pours can't strand a net, fix_drc closes nets around hand copper, and board_from_solid returns an enclosure's cavity.`,
        features: [
          `pcb`,
          `routing`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `fab_prep`,
          `fix_drc`,
          `board_from_solid`
        ]
      },
      {
        id: `2026-11-08-native-ux-niceties`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `feat`,
        title: `Mac app: tool shortcuts, non-modal commands, undo toasts`,
        summary: `Single-key tool shortcuts in every workspace with a ? cheat sheet, feature commands as non-modal panels that keep the viewport live, a Spotlight-style palette, and undo/redo toasts.`,
        features: [
          `native`,
          `ux`,
          `shortcuts`
        ],
        mcpTools: [
          `press_key`
        ]
      },
      {
        id: `2026-11-08-native-hole-bolt-circle`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `feat`,
        title: `Hole tool with counterbore and bolt circle`,
        summary: `The Mac app can cut clearance, tapped, counterbored and bolt-circle holes on a flat face as one undo step.`,
        features: [
          `native`,
          `holes`
        ]
      },
      {
        id: `2026-11-08-native-dogfood-usability`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `fix`,
        title: `Mac app: model from a fresh window, usable schematics`,
        summary: `Modeling tools work on a new window, Subtract is click-to-pick, failed features are refused not committed, large loon boards open, and the schematic view draws real symbols.`,
        features: [
          `native`,
          `electronics`,
          `modeling`
        ]
      },
      {
        id: `2026-11-08-mixed-outline-cuts`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `fix`,
        title: `Slot-shaped cuts remove their full outline`,
        summary: `Cuts whose walls mix straight and curved faces, like slots, now cut their real outline instead of leaving skins across the middle or the wrong volume.`,
        features: [
          `booleans`,
          `sketch`
        ]
      },
      {
        id: `2026-11-08-mcp-live-app-link`,
        version: `undefined`,
        date: `2026-11-08`,
        category: `feat`,
        title: `Any MCP agent can work live in the vcad app`,
        summary: `Local @vcad/mcp sessions now appear in the running Mac app, with each edit as one undo step, and your own edits in the app win over stale agent calls.`,
        features: [
          `native-app`,
          `mcp`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-11-08-mcp-agent-run-fixes`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `fix`,
        title: `MCP: boards survive loon, tools see assembly parts`,
        summary: `create_cad_loon keeps a session's board and schematic; document tools find assembly parts; set_parameters rebuilds from loon; export_gerber only reports success for files on disk.`,
        features: [
          `mcp`,
          `assembly`,
          `pcb`,
          `parameters`
        ],
        mcpTools: [
          `create_cad_loon`,
          `board_from_solid`,
          `check_enclosure_fit`,
          `analyze_structure`,
          `read`,
          `set_parameters`,
          `load_document`,
          `create_robot_env`,
          `create_schematic`,
          `export_gerber`,
          `verify_receipt`
        ]
      },
      {
        id: `2026-11-08-mac-app-live-link-fixes`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `fix`,
        title: `Live agent link to the Mac app holds up across sessions`,
        summary: `New sessions take over agent-only windows, poses survive Solving, meshes added to assemblies draw, relative mesh paths resolve, and attach_app_document links the open document.`,
        features: [
          `native-app`,
          `mcp`,
          `live-link`
        ],
        mcpTools: [
          `attach_app_document`
        ]
      },
      {
        id: `2026-11-08-loaded-documents-keep-bindings`,
        version: `undefined`,
        date: `2026-11-08`,
        category: `fix`,
        title: `Opened documents keep parameters and joint limits`,
        summary: `The native app no longer drops parameter bindings or actuator limits when it opens a document, and measurements now reflect current parameter values.`,
        features: [
          `native-app`,
          `parameters`
        ],
        mcpTools: [
          `set_parameters`,
          `inspect_cad`
        ]
      },
      {
        id: `2026-11-08-honest-analysis-verdicts`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `fix`,
        title: `More accurate analysis verdicts and via meshes`,
        summary: `Predictions now report Provisional instead of Pass, FEA meshes true section depth, topology optimization flags unconverged runs, and PCB vias are closed.`,
        features: [
          `fea`,
          `receipts`,
          `topology-optimization`,
          `pcb`
        ],
        mcpTools: [
          `analyze_structure`,
          `simulate_em`,
          `predict_physics`,
          `topology_optimize`
        ]
      },
      {
        id: `2026-11-08-full-revolve-booleans`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `fix`,
        title: `Booleans on 360-degree revolves keep their walls`,
        summary: `Cutting into a full revolve no longer loses its curved walls and returns the wrong volume.`,
        features: [
          `kernel`,
          `booleans`,
          `revolve`
        ]
      },
      {
        id: `2026-11-08-ecad-workspace`,
        version: `0.11.0`,
        date: `2026-11-08`,
        category: `feat`,
        title: `Electronics workspace: real board and schematic editing`,
        summary: `Mac app gains a true PCB canvas, interactive router with shove, stronger Autoroute, zones, footprint library, and a schematic editor with wires, labels and ERC.`,
        features: [
          `native-app`,
          `electronics`,
          `routing`,
          `schematic`
        ]
      },
      {
        id: `2026-11-08-ecad-libraries-sheets-pairs`,
        version: `undefined`,
        date: `2026-11-08`,
        category: `feat`,
        title: `Libraries, sheets, net classes, stitching`,
        summary: `Place KiCad symbols, save footprints, open child sheets, route pairs around obstacles, edit net classes, stitch zones, annotate refs, and see teardrops.`,
        features: [
          `electronics`,
          `native-app`
        ]
      },
      {
        id: `2026-11-07-router-island-terminals`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `fix`,
        title: `Router starts from any copper joined to a pad`,
        summary: `fab-prep routes island-to-island: a connection can start on fan-out stubs, vias or earlier traces already joined to its pad, so a walled-in fine-pitch pad with hand-placed fan-out now routes.`,
        features: [
          `pcb`,
          `fab-prep`,
          `autoroute`
        ],
        mcpTools: [
          `fab_prep`
        ]
      },
      {
        id: `2026-11-07-native-liquid-glass-shell`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `feat`,
        title: `Mac app: Liquid Glass shell, edit bar, history, agent pill`,
        summary: `Floating glass sidebar/inspector, one centered dock across five workspaces, a Keynote-style edit bar with live feedback, a history filmstrip, and agent suggestion pills.`,
        features: [
          `native`,
          `ui`,
          `agent`
        ],
        mcpTools: [
          `suggest_edit`,
          `history_seek`,
          `set_workspace`,
          `select_feature`,
          `app_screenshot`
        ]
      },
      {
        id: `2026-11-07-native-fabrication`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `feat`,
        title: `Sheet metal, 3D print and multi-tool CAM in the Mac app`,
        summary: `Fabricate panel: flat pattern from any sheet solid (volume-checked DXF), bend table, cost, nesting; slicing with print prediction and 3MF/G-code; stock-sim verified multi-tool CAM.`,
        features: [
          `native-app`,
          `sheet-metal`,
          `3d-print`,
          `cam`
        ]
      },
      {
        id: `2026-11-07-native-electronics-codesign`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `feat`,
        title: `Electronics co-design in the Mac app`,
        summary: `Import KiCad/Eagle boards, autoroute, DRC + Fix DRC, length tuning, layer stack, gated Gerber export, enclosure fit checks and circuit simulation in the native app.`,
        features: [
          `electronics`,
          `pcb`,
          `native-app`,
          `enclosure`,
          `simulation`
        ]
      },
      {
        id: `2026-11-07-native-assembly-authoring`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `feat`,
        title: `Mac app: assembly, joint, mate and keyframe authoring`,
        summary: `Insert instances, add and edit all five joint kinds with picked anchors, check mates, drag joints via FK, and author keyframes with a timeline that exports video.`,
        features: [
          `assembly`,
          `joints`,
          `mates`,
          `animation`,
          `native-app`
        ]
      },
      {
        id: `2026-11-07-native-agent-fuzz-fixes`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `fix`,
        title: `Mac app: list_parts works, cleaner feature tree`,
        summary: `Agent list_parts returns part ids in part documents, the feature tree shows features instead of identity transforms, and the retired cloud intent bar is hidden.`,
        features: [
          `native`,
          `mcp`,
          `feature-tree`
        ],
        mcpTools: [
          `list_parts`
        ]
      },
      {
        id: `2026-11-07-mac-sample-gallery`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `feat`,
        title: `Mac app: 13-sample gallery that opens instantly`,
        summary: `File \u25B8 Open Sample adds the K1 humanoid, PCB motor and stator, an FPGA board, FEA and CAM parts; bundled meshes open the PCB motor in 0.06 s instead of 10+ s.`,
        features: [
          `desktop`,
          `samples`,
          `performance`
        ]
      },
      {
        id: `2026-11-07-loon-language-fixes`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `fix`,
        title: `Loon: variadic booleans, dimension checks, clearer errors`,
        summary: `union/intersection/difference take any number of solids; primitives reject zero/negative sizes; type errors name the function, argument and line; linear_pattern/circular_pattern aliases.`,
        features: [
          `loon`,
          `language`
        ],
        mcpTools: [
          `create_cad_loon`
        ]
      },
      {
        id: `2026-11-07-kernel-fuzz-silent-failures`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `fix`,
        title: `Overlarge shell/fillet and empty results now say so`,
        summary: `A shell thicker than the solid is refused instead of growing it, an impossible fillet/chamfer reports the kernel's reason to the agent, and empty results say "empty (no volume)".`,
        features: [
          `shell`,
          `fillet`,
          `chamfer`,
          `booleans`,
          `agent`
        ],
        mcpTools: [
          `create_cad_loon`,
          `inspect_cad`,
          `describe_scene`
        ]
      },
      {
        id: `2026-11-07-fillet-edges-of-boolean-results`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `fix`,
        title: `Fillet/chamfer a picked edge of a boolean result`,
        summary: `Picked-edge blends on boolean results no longer fail with 'edge reference lost' or refuse parts with holes; picks carry a geometric hint and split faces resolve by lineage.`,
        features: [
          `fillet`,
          `chamfer`,
          `topological-naming`,
          `native`
        ]
      },
      {
        id: `2026-11-07-fillet-circular-edges`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `fix`,
        title: `Fillet and chamfer cylinder and cup rims`,
        summary: `Circular edges (cylinder rims, cup rims made by booleans) now fillet as exact torus bands and chamfer as cone bands; an oversized blend names the face it cannot fit.`,
        features: [
          `fillet`,
          `chamfer`,
          `kernel`
        ],
        mcpTools: []
      },
      {
        id: `2026-11-07-fab-prep-fail-closed-incomplete`,
        version: `0.11.0`,
        date: `2026-11-07`,
        category: `fix`,
        title: `fab-prep fails closed on open nets; pinned, through-only routing`,
        summary: `fab-prep no longer ships boards with unconnected nets (opt in with --allow-incomplete), pins traces to pad layers, emits through vias by default, and autoroute reports true open nets.`,
        features: [
          `pcb`,
          `fab-prep`,
          `autoroute`,
          `drc`,
          `native-app`
        ],
        mcpTools: [
          `fab_prep`
        ]
      },
      {
        id: `2026-11-07-drawing-feature-edges`,
        version: `undefined`,
        date: `2026-11-07`,
        category: `fix`,
        title: `Drawings show feature edges, not the triangle mesh`,
        summary: `2D drawing views and DXF export now draw creases, outlines and silhouettes merged into single lines, instead of thousands of tessellation edges and diagonals.`,
        features: [
          `drafting`,
          `dxf`
        ]
      },
      {
        id: `2026-11-06-native-drawings-workspace`,
        version: `0.11.0`,
        date: `2026-11-06`,
        category: `feat`,
        title: `Drawings workspace in the native Mac app`,
        summary: `Shop drawings natively: orthographic, section and detail views, dimensions, GD&T frames, title block and BOM, with DXF and PDF export matching the web.`,
        features: [
          `drawings`,
          `drafting`,
          `native-app`,
          `dxf`,
          `pdf`
        ]
      },
      {
        id: `2026-11-06-native-dfm-fea-clearance`,
        version: `0.11.0`,
        date: `2026-11-06`,
        category: `feat`,
        title: `DFM, stress and clearance in the Mac app`,
        summary: `New Analyze panel in the native app: DFM with one-click undoable fixes, in-process FEA on picked faces with stress overlays, and part interference volumes \u2014 also exposed to agents over the app's MCP server.`,
        features: [
          `dfm`,
          `fea`,
          `clearance`,
          `native-app`,
          `vcad-2`
        ],
        mcpTools: [
          `dfm_check`,
          `dfm_apply_fix`,
          `analyze_structure`,
          `check_interference`,
          `inspect_faces`
        ]
      },
      {
        id: `2026-11-06-export-all-documents`,
        version: `0.11.0`,
        date: `2026-11-06`,
        category: `feat`,
        title: `Export all your documents as a zip`,
        summary: `New /export page downloads every cloud document (and this browser's local ones) as .vcad files in one zip, ahead of the move to the vcad 2 Mac app.`,
        features: [
          `export`,
          `cloud-sync`,
          `vcad-2`
        ],
        mcpTools: [
          `open_in_app`,
          `open_in_browser`
        ]
      },
      {
        id: `2026-10-28-render-timings-perf`,
        version: `0.11.0`,
        date: `2026-10-28`,
        category: `perf`,
        title: `Faster assembly renders, plus a --timings breakdown`,
        summary: `Assembly renders evaluate parts in parallel, never evaluate a part twice, and serve warm re-renders straight from the cache (rose full body 613 s -> 55 s cold, 330 s -> 6 s warm); --timings shows where time goes.`,
        features: [
          `render`,
          `performance`,
          `cli`
        ],
        mcpTools: []
      },
      {
        id: `2026-10-27-sphere-cube-seams`,
        version: `0.11.0`,
        date: `2026-10-27`,
        category: `fix`,
        title: `Clean sphere/box boolean seams at every resolution`,
        summary: `Sphere-box unions, differences and intersections no longer grow jagged seams, slivers or lose volume depending on segment count; sphere patches are split and tessellated exactly.`,
        features: [
          `booleans`,
          `tessellation`
        ],
        mcpTools: []
      },
      {
        id: `2026-10-27-section-hatch-all-loops`,
        version: `0.11.0`,
        date: `2026-10-27`,
        category: `fix`,
        title: `Section views hatch every cut region`,
        summary: `Sections through multi-boolean parts left a region unhatched: an in-plane mesh edge or a sliver segment forked the outline chain. Endpoints are now welded and such segments dropped.`,
        features: [
          `drafting`,
          `section-view`
        ],
        mcpTools: []
      },
      {
        id: `2026-10-27-onshape-step-import`,
        version: `0.11.0`,
        date: `2026-10-27`,
        category: `fix`,
        title: `STEP import: Onshape files import and render solid`,
        summary: `Reads BREP_WITH_VOIDS, honours metre units, walks same_sense=.F. edges the right way, and meshes seamless cylinder/cone walls, drill tips and reversed planes facing outward.`,
        features: [
          `step-import`,
          `tessellation`,
          `render`
        ]
      },
      {
        id: `2026-10-27-exact-render-step-curved-faces`,
        version: `0.11.0`,
        date: `2026-10-27`,
        category: `fix`,
        title: `Exact render shows curved faces of imported STEP parts`,
        summary: `vcad-render --photoreal --exact no longer drops the cylinder, cone, sphere and torus faces of Onshape STEP imports, and frames them like the mesh render.`,
        features: [
          `render`,
          `raytrace`,
          `step-import`
        ]
      },
      {
        id: `2026-10-27-cargo-install-vcad-cli`,
        version: `0.11.0`,
        date: `2026-10-27`,
        category: `breaking`,
        title: `Install with cargo install vcad`,
        summary: "The vcad crate (kernel library + `vcad` CLI) and its crate tree are publishable to crates.io, so `cargo install vcad` installs the command. The legacy manifold CSG library is gone.",
        features: [
          `cli`,
          `distribution`
        ]
      },
      {
        id: `2026-10-26-emissive-materials`,
        version: `0.10.0`,
        date: `2026-10-26`,
        category: `feat`,
        title: `Emissive materials in loon and photoreal renders`,
        summary: "Materials can emit light: `emissive` + `emissive_strength` in the IR and `[material-emissive ...]` in loon; the photoreal path tracer draws them. Image-mapped emission is recorded but refused until the renderer supports it.",
        features: [
          `materials`,
          `loon`,
          `photoreal`
        ]
      },
      {
        id: `2026-10-21-vcad-printer-cli`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `vcad printer: LAN control of a Bambu P1S`,
        summary: "New `vcad printer` CLI: discover, status, camera snapshot and upload test over LAN; printing refuses without --confirm-print and a passing printcheck and file/printer match.",
        features: [
          `printing`,
          `bambu`,
          `cli`
        ]
      },
      {
        id: `2026-10-21-slicer-first-layer-z`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `fix`,
        title: `Slicer: layers print at full height, not half`,
        summary: `Sliced G-code sent the nozzle to each layer's mid-plane, so the first layer was squashed to half height into the plate. Layers now print at their top.`,
        features: [
          `printing`,
          `slicer`
        ]
      },
      {
        id: `2026-10-21-planar-cap-normals`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `fix`,
        title: `Flat faces keep exact normals in photoreal renders`,
        summary: `The crease bake no longer smooths across flat loft caps: planar faces shade with their exact plane normal, so glass and polished caps render without streaks.`,
        features: [
          `photoreal`,
          `tessellation`,
          `render`
        ]
      },
      {
        id: `2026-10-21-photoreal-warm-studio`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Warm studio lighting preset for photoreal renders`,
        summary: `--lighting warm-studio adds a camera-relative warm key, cool fill and rim rig, with every light kept outside the frame.`,
        features: [
          `photoreal`,
          `render`,
          `lighting`
        ]
      },
      {
        id: `2026-10-21-photoreal-look-textures`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Material looks and wood/fabric textures in photoreal`,
        summary: `--look applies render-time material overrides by material or part (colours, roughness, emission) plus procedural oak, fabric and triplanar image textures.`,
        features: [
          `photoreal`,
          `render`,
          `materials`
        ]
      },
      {
        id: `2026-10-21-photoreal-focus-dist`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Depth of field controls for photoreal renders`,
        summary: `--focus-dist sets the thin-lens plane of focus in vcad-render; vcad render --photoreal gains --aperture, --focus-dist and --focus-part.`,
        features: [
          `photoreal`,
          `render`,
          `cli`
        ]
      },
      {
        id: `2026-10-21-photoreal-cyclorama`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Seamless cyclorama backdrop for photoreal renders`,
        summary: `--backdrop cyclorama (vcad render --cyclorama) puts the subject on a matte floor that curves into a back wall, with no horizon line or edge in frame.`,
        features: [
          `photoreal`,
          `render`
        ]
      },
      {
        id: `2026-10-21-mac-welcome`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Mac app welcome window with samples and a loon tutorial`,
        summary: `First launch opens a welcome window with four sample projects bundled in the app and a short tutorial, \u201Cyour first part in loon\u201D. Help \u25B8 Welcome to vcad reopens it.`,
        features: [
          `desktop`,
          `mac`,
          `onboarding`,
          `loon`
        ]
      },
      {
        id: `2026-10-21-mac-sim-teardown-race`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `fix`,
        title: `Stopping a simulation no longer leaves a stale frame`,
        summary: `In the Mac app, a physics frame already in flight when the simulation was torn down could repopulate its state; such frames are now dropped.`,
        features: [
          `simulation`,
          `mac`
        ]
      },
      {
        id: `2026-10-21-mac-sensitivity-panel`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Parameter sensitivity in the Mac inspector`,
        summary: `The Mac app's inspector shows how volume, mass and center of mass change per unit of each named parameter, using exact kernel derivatives.`,
        features: [
          `desktop`,
          `parameters`,
          `differentiable`
        ]
      },
      {
        id: `2026-10-21-mac-open-vcode`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `fix`,
        title: `Mac app opens compact-format .vcad files`,
        summary: `The native Mac app now opens .vcad files in the compact text and loon formats, not just JSON, including the Sensor Mast example.`,
        features: [
          `desktop`,
          `file-io`
        ]
      },
      {
        id: `2026-10-21-mac-loon-loop`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Mac app: loon errors inline, last good model kept`,
        summary: `Open a .loon file or project folder and every save rebuilds; a broken edit shows file:line with Go to Line and keeps the last good model on screen. Module edits rebuild too.`,
        features: [
          `desktop`,
          `mac`,
          `loon`
        ]
      },
      {
        id: `2026-10-21-mac-labs-toggle`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Labs toggle for in-development Mac workspaces`,
        summary: `Electronics, Manufacture (CNC Studio) and simulation in the Mac app now sit behind Settings \u25B8 Labs, off by default, so the default app is Design plus Agent.`,
        features: [
          `desktop`,
          `settings`
        ]
      },
      {
        id: `2026-10-21-mac-exports-photoreal`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Mac app exports STEP and GLB, renders photoreal`,
        summary: `File \u25B8 Export now writes STL, STEP and GLB with the CLI's writers, and File \u25B8 Render Photoreal\u2026 path-traces the current view with progress and cancel, no external binary.`,
        features: [
          `desktop`,
          `mac`,
          `export`,
          `photoreal`
        ]
      },
      {
        id: `2026-10-21-mac-app-updates`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Mac app checks for updates`,
        summary: `The native Mac app checks for signed updates automatically and adds Check for Updates\u2026 to the app menu, ready for Developer ID\u2013signed, notarized releases.`,
        features: [
          `desktop`,
          `mac`,
          `updates`
        ]
      },
      {
        id: `2026-10-21-loon-relative-mesh-paths`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `fix`,
        title: `Relative .loon paths no longer drop imported meshes`,
        summary: `vcad commands given a .loon by relative path resolved import-mesh paths twice, so every STL part silently went missing from exports and renders.`,
        features: [
          `loon`,
          `mesh-import`,
          `cli`
        ]
      },
      {
        id: `2026-10-21-incremental-eval-hosts`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `perf`,
        title: `Parameter scrubs re-evaluate only what changed`,
        summary: `The Mac app and web eval worker keep an incremental evaluation session per document, so scrubbing a parameter rebuilds only the features downstream of it.`,
        features: [
          `engine`,
          `evaluation`,
          `performance`
        ]
      },
      {
        id: `2026-10-21-gpu-photoreal-limits`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `fix`,
        title: `GPU photoreal handles big meshes and driver failures`,
        summary: `The GPU path tracer no longer refuses meshes over 1M triangles (the device's buffer limit applies instead), and a driver that loses the device now gives a clear error, with vcad render falling back to the CPU.`,
        features: [
          `photoreal`,
          `gpu`,
          `render`
        ]
      },
      {
        id: `2026-10-21-desktop-agent-blank-canvas`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Agent works from a blank canvas, defaults to frog api`,
        summary: `The Mac app's Agent can start from an empty Untitled document, renders the views it asks for, and connects to frog api by default with the model picked from the endpoint.`,
        features: [
          `desktop`,
          `agent`,
          `ai`
        ]
      },
      {
        id: `2026-10-21-desktop-agent`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `feat`,
        title: `Built-in Agent edits documents in the Mac app`,
        summary: `A chat panel in the native Mac app where an agent edits the open document through engine tools: edits show live, each turn is one undo step, and tool errors go back to the model.`,
        features: [
          `desktop`,
          `agent`,
          `ai`
        ]
      },
      {
        id: `2026-10-21-agent-nested-create`,
        version: `0.10.0`,
        date: `2026-10-21`,
        category: `fix`,
        title: `Agent accepts nested create calls`,
        summary: `The Agent's create tool now accepts the nested argument shape models naturally emit, and repeat requests reuse the endpoint's prompt cache.`,
        features: [
          `desktop`,
          `agent`
        ]
      },
      {
        id: `2026-10-20-vendor-verified-power-imu-footprints`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `feat`,
        title: `Vendor-verified power, IMU and XT/LCB footprints`,
        summary: `BMI088, ICM-42688-P, TO-277A, XT90PW, XT60PB and AMASS LCB footprints added; TOLL, TDSON/TSDSON, XT30/XT60 and Micro-Fit lands corrected to vendor drawings.`,
        features: [
          `pcb`,
          `footprints`
        ],
        mcpTools: [
          `search_footprints`,
          `get_footprint`
        ]
      },
      {
        id: `2026-10-20-update-params-apply`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `fix`,
        title: `AI updates to part dimensions actually apply`,
        summary: `An update like resizing a cube via size {x,y,z} reported success but changed nothing; nested params now map onto the part's real fields, and unknown params are refused.`,
        features: [
          `engine`,
          `ai`
        ],
        mcpTools: [
          `update`
        ]
      },
      {
        id: `2026-10-20-stale-photoreal-renderer`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `fix`,
        title: `Photoreal refuses a stale vcad-render that facets lofts`,
        summary: `The Mac app's photoreal button now detects a pre-mesh-mode vcad-render (which traced polyline lofts as flat strips) and asks for a rebuild instead of rendering jagged rounds.`,
        features: [
          `photoreal`,
          `render`,
          `loft`
        ]
      },
      {
        id: `2026-10-20-schematic-power-flags`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `feat`,
        title: `Schematic power flags (PWR_FLAG)`,
        summary: `Mark a net as driven when it is fed through a ferrite, FET or connector. ERC treats it as powered, flags never reach the BOM, and KiCad PWR_FLAG symbols import as flags.`,
        features: [
          `schematic`,
          `ecad`,
          `erc`
        ],
        mcpTools: [
          `create_schematic`,
          `update_schematic`,
          `run_erc`
        ]
      },
      {
        id: `2026-10-20-remove-tauri-desktop`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `breaking`,
        title: `Tauri desktop app removed`,
        summary: `The Tauri desktop app (.dmg/.msi/.AppImage) is discontinued. Use vcad.io in the browser, or the native SwiftUI Mac app in apple/VcadApp on macOS.`,
        features: [
          `desktop`,
          `app`
        ],
        breaking: {
          description: `No more desktop installers or auto-updates. Desktop-only features are gone: native menus, context menus, file dialogs and recent files, OS notifications, the vcad:// deep links and desktop magic-link sign-in, and the built-in Bambu printer bridge.`,
          migration: `Use https://vcad.io (printing works through the local relay at 127.0.0.1:7878) or build apple/VcadApp with build-ffi.sh and bundle.sh.`
        }
      },
      {
        id: `2026-10-20-reduced-order-thermal-stress`,
        version: `undefined`,
        date: `2026-10-20`,
        category: `perf`,
        title: `10x faster thermal-stress sweeps via superposition`,
        summary: `Voxel FEA now exposes per-element stress tensors; a POD reduced-order sweep solves 61 transient thermal-stress frames with 6 solves (2e-4 MPa vs full).`,
        features: [
          `fea`,
          `thermal`,
          `simulation`,
          `animation`
        ]
      },
      {
        id: `2026-10-20-pcb3d-kernel-ratsnest`,
        version: `undefined`,
        date: `2026-10-20`,
        category: `fix`,
        title: `3D PCB ratsnest matches the 2D view and autorouter`,
        summary: `The 3D board view now draws the kernel's minimum-spanning-tree ratsnest instead of a TS approximation that hid a whole net once any trace on it existed.`,
        features: [
          `electronics`,
          `pcb`
        ]
      },
      {
        id: `2026-10-20-multiphysics-field-stack`,
        version: `undefined`,
        date: `2026-10-20`,
        category: `feat`,
        title: `Multiphysics field stacks on the part`,
        summary: `View thermal, stress, displacement and EM fields on one part, compressed 70x with per-layer error bounds; surface, slice and probe views in web and macOS.`,
        features: [
          `viewport`,
          `simulation`,
          `thermal`,
          `fea`,
          `em`,
          `compression`,
          `native`
        ]
      },
      {
        id: `2026-10-20-mcp-tube-tools-engine`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `feat`,
        title: `MCP tube and polyline_tube tools on the engine`,
        summary: `tube and polyline_tube are now available over MCP, lowered by the Rust document engine; place_part also inserts through the engine.`,
        features: [
          `mcp`,
          `engine`
        ],
        mcpTools: [
          `tube`,
          `polyline_tube`,
          `place_part`
        ]
      },
      {
        id: `2026-10-20-mcp-stable-part-ids`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `breaking`,
        title: `MCP part_id is now a stable engine id`,
        summary: `MCP part_id is now a stable "replica:seq" id (e.g. "0:7") that does not shift when other parts are deleted. Legacy digit ids and part names are still accepted.`,
        features: [
          `mcp`,
          `part-ids`
        ],
        mcpTools: [
          `read`,
          `delete`,
          `set_material`,
          `measure`,
          `check_clearance`,
          `render_view`,
          `apply_edits`
        ]
      },
      {
        id: `2026-10-20-mcp-place-engine`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `feat`,
        title: `MCP place tool runs on the Rust engine`,
        summary: "Anchor-based `place` is now available over MCP, lowered by the Rust document engine; chat place and place_part also apply through the engine.",
        features: [
          `mcp`,
          `engine`,
          `place`
        ],
        mcpTools: [
          `place`
        ]
      },
      {
        id: `2026-10-20-mcp-apply-edits-engine`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `fix`,
        title: `apply_edits runs on the document engine`,
        summary: `MCP apply_edits now applies every op through the Rust document engine, like the single-op tools; "@N" resolves to op N's stable part id. The legacy planner fallback is gone.`,
        features: [
          `mcp`,
          `engine`,
          `batch-edit`
        ],
        mcpTools: [
          `apply_edits`,
          `create`,
          `update`,
          `delete`,
          `set_material`
        ]
      },
      {
        id: `2026-10-20-mac-new-part-materials`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `fix`,
        title: `Mac app keeps materials on new parts and saves`,
        summary: `New parts in the Mac editor take the document's first material again (combines and fillets keep the base part's), and a picked preset's definition is saved into the file's materials.`,
        features: [
          `mac`,
          `materials`,
          `engine`
        ],
        mcpTools: []
      },
      {
        id: `2026-10-20-mac-editor-engine`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `feat`,
        title: `Mac app edits documents through the shared engine`,
        summary: `The native Mac editor now sends add, delete, combine, material, rename, transform and undo/redo through the Rust document engine, the same one the web app uses.`,
        features: [
          `native-app`,
          `document-engine`,
          `undo`
        ]
      },
      {
        id: `2026-10-20-lossless-import`,
        version: `undefined`,
        date: `2026-10-20`,
        category: `fix`,
        title: `Opening older documents keeps everything`,
        summary: `Opening an older .vcad file no longer drops PCB boards, schematics, parameters, imported meshes, part inertials and colliders, or operations the editor has no tool for.`,
        features: [
          `documents`,
          `import`,
          `electronics`,
          `assembly`
        ]
      },
      {
        id: `2026-10-20-live-part-stock-check`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `feat`,
        title: `Orderable parts DB + live LCSC/JLCPCB stock check`,
        summary: `Curated MPN DB with verified LCSC numbers and footprint mapping; check_part_stock and bom_check_stock fetch live stock, price breaks and basic/extended status, and flag missing parts.`,
        features: [
          `parts`,
          `bom`,
          `ecad`,
          `sourcing`
        ],
        mcpTools: [
          `check_part_stock`,
          `bom_check_stock`,
          `search_electronic_parts`,
          `resolve_part`,
          `find_alternatives`
        ]
      },
      {
        id: `2026-10-20-import-keeps-materials`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `fix`,
        title: `Imported parts keep their material and visibility`,
        summary: `Opening a document through the engine reset every part's material to default and showed hidden parts; both now survive import and every later edit.`,
        features: [
          `engine`,
          `import`,
          `materials`
        ]
      },
      {
        id: `2026-10-20-hierarchical-schematic-sheets`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `feat`,
        title: `Hierarchical schematic sheets`,
        summary: `Schematics can hold reusable child sheets placed many times (CAN x6), with ports, per-instance refs and local nets, global nets, and flattening for ERC, BOM, board and KiCad.`,
        features: [
          `schematic`,
          `ecad`,
          `erc`
        ],
        mcpTools: [
          `create_schematic`,
          `update_schematic`,
          `inspect_schematic`,
          `run_erc`,
          `place_components`,
          `export_kicad`
        ]
      },
      {
        id: `2026-10-20-engine-import-ids`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `fix`,
        title: `Imported and collaborator parts are editable by id`,
        summary: `Parts arriving through IR import or a collaborator's edits could not be addressed by id in the browser engine, so edits to them failed as unknown parts.`,
        features: [
          `engine`,
          `collaboration`,
          `import`
        ]
      },
      {
        id: `2026-10-20-dgx-sot563-cp-elec-footprints`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `feat`,
        title: `TI DGX, SOT-563, CP_Elec and power-inductor footprints`,
        summary: `VSSOP-19 TI DGX (TPS4811x), SOT-563, CP_Elec cans, 1008, SRR1260, FXL1365 and right-angle XT30PW(2+2) generate real land patterns; MSOP/SOIC -1EP packages keep their exposed pad.`,
        features: [
          `pcb`,
          `footprints`
        ],
        mcpTools: [
          `search_footprints`,
          `get_footprint`
        ]
      },
      {
        id: `2026-10-20-coupled-multiphysics-bracket`,
        version: `undefined`,
        date: `2026-10-20`,
        category: `feat`,
        title: `Thermal-expansion stress in voxel FEA`,
        summary: `analyze_fields_thermal adds \u03B1\xB7\u0394T initial strain to static voxel FEA; the bracket demo now chains busbar Joule heat \u2192 temperature \u2192 thermal + load stress.`,
        features: [
          `fea`,
          `thermal`,
          `em`,
          `simulation`
        ]
      },
      {
        id: `2026-10-20-compressed-field-viewer`,
        version: `undefined`,
        date: `2026-10-20`,
        category: `feat`,
        title: `View error-bounded compressed solver fields`,
        summary: `Load a tang-compress field (?field=...), decode it in-browser on WebGPU or WASM, and view a colormapped slice with its max-error bound and native hash check.`,
        features: [
          `viewport`,
          `simulation`,
          `thermal`,
          `compression`
        ]
      },
      {
        id: `2026-10-20-collab-order-and-exact-floats`,
        version: `undefined`,
        date: `2026-10-20`,
        category: `fix`,
        title: `Collaborators see the same part order; exact reloads`,
        summary: `Parts added at the same moment by two collaborators now order identically for both; one edit is one undo step; reloading a document no longer nudges dimensions by a rounding bit.`,
        features: [
          `collaboration`,
          `undo`,
          `documents`
        ]
      },
      {
        id: `2026-10-20-cli-photoreal-render`,
        version: `0.10.0`,
        date: `2026-10-20`,
        category: `feat`,
        title: `Headless photoreal rendering in the vcad CLI`,
        summary: `vcad render --photoreal path-traces .loon/.vcad files on a headless GPU with the app's materials, lighting and tonemap; presets, --camera, --size, --samples, --cpu fallback.`,
        features: [
          `render`,
          `photoreal`,
          `cli`,
          `path-tracing`
        ]
      },
      {
        id: `2026-10-20-ai-update-targets-owner`,
        version: `undefined`,
        date: `2026-10-20`,
        category: `fix`,
        title: `AI edits change the part you asked for`,
        summary: `AI update calls now change the part that owns the given node instead of the first part in the document, and bulk material changes refuse unknown parts instead of half-applying.`,
        features: [
          `ai`,
          `chat`
        ]
      },
      {
        id: `2026-10-19-plane-stub-drc-exemption`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `fix`,
        title: `Plane stubs exempt from dangling-copper DRC`,
        summary: `Short plane-connection stubs from pads to a plane via no longer report as dangling or unconnected copper.`,
        features: [
          `pcb`,
          `drc`
        ],
        mcpTools: [
          `run_drc`
        ]
      },
      {
        id: `2026-10-19-per-span-via-sizing`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `fix`,
        title: `Vias sized per span \u2014 no undersized vias`,
        summary: `Every via site now sizes its drill/annulus for the layer span it actually covers, so routed boards no longer emit undersized drilled vias.`,
        features: [
          `pcb`,
          `routing`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `fab_prep`
        ]
      },
      {
        id: `2026-10-19-microvia-stack-rule`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `feat`,
        title: `MicroviaStack DRC rule + stacked microvia inference`,
        summary: `New MicroviaStack DRC rule and allowStackedMicrovias design-rule field, inferred from imported boards, flag stacked microvias the fab can't build.`,
        features: [
          `pcb`,
          `drc`,
          `routing`
        ],
        mcpTools: [
          `run_drc`,
          `set_design_rules`
        ]
      },
      {
        id: `2026-10-19-mcp-loon-files`,
        version: `undefined`,
        date: `2026-10-19`,
        category: `fix`,
        title: `create_cad_loon resolves STL/STEP imports`,
        summary: `Loon projects with import-mesh/import-step now load over MCP: pass bytes as base64 in a new files map (hosted), or read them from base_dir on a local server. Missing modules get an actionable error.`,
        features: [
          `mcp`,
          `loon`,
          `import`
        ],
        mcpTools: [
          `create_cad_loon`,
          `load_document`
        ]
      },
      {
        id: `2026-10-19-loon-sweep-rotate`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `feat`,
        title: `Swept-rotation clearance cuts (sweep-rotate)`,
        summary: `New SweepRotate op and loon sweep-rotate forms: the volume a part sweeps rotating about an axis, with optional dilation, for native knee/elbow/hip relief cuts.`,
        features: [
          `loon`,
          `ir`,
          `kernel`,
          `booleans`
        ],
        mcpTools: [
          `create_cad_loon`
        ]
      },
      {
        id: `2026-10-19-loon-polygon-holes`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `feat`,
        title: `loon [polygon] sketch segment with holes`,
        summary: `Author a plate outline plus bolt holes as one [polygon #[pts] #[holes]] in a sketch; holes (point loops or #[cx cy r] circles) are cut by extrude directly, no boolean cutters.`,
        features: [
          `loon`,
          `sketch`,
          `extrude`
        ],
        mcpTools: [
          `create_cad_loon`
        ]
      },
      {
        id: `2026-10-19-loon-convex-hull`,
        version: `undefined`,
        date: `2026-10-19`,
        category: `feat`,
        title: `Convex hull op: [hull ...] and [hull-points ...]`,
        summary: `New Hull IR op with loon forms [hull s1 s2 ...] and [hull-points #[x y z ...]]: quickhull over tessellated vertices, emitted as a planar B-rep that booleans cut.`,
        features: [
          `loon`,
          `kernel`,
          `hull`
        ],
        mcpTools: [
          `create_cad_loon`
        ]
      },
      {
        id: `2026-10-19-joint-pose-and-range-sweep`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `feat`,
        title: `Pose renders with --pose; sweep joint range of motion`,
        summary: `vcad-render --pose/--pose-file poses a jointed assembly for any still style; vcad check-joint-range and check_joint_range sweep each revolute joint and report where it first collides.`,
        features: [
          `assembly`,
          `joints`,
          `render`,
          `clearance`
        ],
        mcpTools: [
          `check_joint_range`
        ]
      },
      {
        id: `2026-10-19-inferred-pin-field-rule-areas`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `feat`,
        title: `Inferred dense-pin-field rule areas`,
        summary: `Dense pin fields (BGAs) get inferred rule areas (new DesignRules.ruleAreas) with locally relaxed width/clearance, matching how the original board was designed.`,
        features: [
          `pcb`,
          `routing`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `run_drc`
        ]
      },
      {
        id: `2026-10-19-inferred-neck-width`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `feat`,
        title: `Inferred neck-down width`,
        summary: `The router infers the board's neck-down trace width from existing copper instead of a fixed default when entering tight pads.`,
        features: [
          `pcb`,
          `routing`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-10-19-import-mesh-units`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `feat`,
        title: `import-mesh :units option + size warning`,
        summary: `[import-mesh "x.stl" :units "mm"] imports millimetre STLs at true size; the loader warns when an import lands over 10 m or under 1 mm.`,
        features: [
          `loon`,
          `import`,
          `stl`
        ],
        mcpTools: [
          `create_cad_loon`
        ]
      },
      {
        id: `2026-10-19-flow-core-router`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `feat`,
        title: `Experimental flow-core router (VCAD_FLOW=1)`,
        summary: `Opt-in plan-first router: CDT capacity graph, multicommodity flow, embedding and funnel realization. Near DRC-clean but connects fewer nets than the default yet.`,
        features: [
          `pcb`,
          `routing`,
          `experimental`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-10-19-dense-loft-boolean-perf`,
        version: `undefined`,
        date: `2026-10-19`,
        category: `perf`,
        title: `Booleans against dense lofts take seconds, not minutes`,
        summary: `Booleans with a dense faceted operand (e.g. a loft of 50-segment polyline sections) skip the B-rep face-pair stages and use the mesh boolean directly.`,
        features: [
          `loft`,
          `booleans`
        ]
      },
      {
        id: `2026-10-19-cli-loon-assembly-render`,
        version: `0.10.0`,
        date: `2026-10-19`,
        category: `feat`,
        title: `vcad CLI renders and exports .loon assemblies`,
        summary: "`vcad render` and `vcad export` (.stl/.glb) place assembly instances by joint FK and take --pose/--pose-file; `vcad export x.loon x.vcad` writes the evaluated document.",
        features: [
          `cli`,
          `assembly`,
          `loon`,
          `render`
        ]
      },
      {
        id: `2026-10-17-tessellate-bspline-bilinear-dispatch`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `fix`,
        title: `B-spline and bilinear faces no longer tessellate flat`,
        summary: `Both solid tessellation entry points sent B-spline and bilinear faces to the planar fan, flattening curved faces to their boundary polygon; they now use the true-surface tessellators.`,
        features: [
          `tessellation`,
          `nurbs`,
          `kernel`
        ]
      },
      {
        id: `2026-10-17-stackup-layer-roles`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `feat`,
        title: `Stackup layer roles inferred from pours`,
        summary: `Plane, split-plane and signal roles are inferred from copper pours; DRC reports signals routed on plane layers (enforcement opt-in).`,
        features: [
          `pcb`,
          `electronics`,
          `routing`
        ],
        mcpTools: [
          `run_drc`,
          `set_stackup`
        ]
      },
      {
        id: `2026-10-17-pcb-layer-coverage`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `fix`,
        title: `Inner copper beyond In2Cu renders on 6\u201310 layer boards`,
        summary: `Layer colours, toggles, dielectric slabs and copper Z now derive from the board stackup, so In3Cu\u2013In8Cu draw and toggle; new boards up to 10 layers get valid layer names; MCP accepts In7/In8.`,
        features: [
          `pcb`,
          `electronics`,
          `layers`
        ],
        mcpTools: [
          `get_copper`,
          `render_stackup`
        ]
      },
      {
        id: `2026-10-17-pcb-32-copper-layers`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `fix`,
        title: `PCB: all 32 KiCad copper layers (In1..In30)`,
        summary: `The PCB IR now carries In1Cu..In30Cu; DRC/DFM layer masks widened to 32 bits so copper on layers past In8 is no longer an unconnected island.`,
        features: [
          `pcb`,
          `ecad`,
          `drc`,
          `ir`
        ]
      },
      {
        id: `2026-10-17-pair-router-coupled-legs`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `fix`,
        title: `Pair router keeps coupled legs together`,
        summary: `The router no longer rips or shoves one leg of a coupled pair or routes a twin twice; diff-pair gap checks use coupled segments only, matching KiCad.`,
        features: [
          `pcb`,
          `electronics`,
          `routing`
        ],
        mcpTools: [
          `route_nets`,
          `route_diff_pair`,
          `run_drc`
        ]
      },
      {
        id: `2026-10-17-neckdown-and-via-floors`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `feat`,
        title: `Per-class neck-down and inferred via floors`,
        summary: `Net classes get a neck-down minimum width; via size floors are inferred from the board with provenance reported.`,
        features: [
          `pcb`,
          `electronics`,
          `routing`
        ],
        mcpTools: [
          `route_nets`,
          `set_design_rules`
        ]
      },
      {
        id: `2026-10-17-microvias`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `feat`,
        title: `Microvias as a via type`,
        summary: `Microvias are a first-class via type with KiCad semantics (adjacent-layer span, own size rules), imported and exported faithfully.`,
        features: [
          `pcb`,
          `electronics`,
          `routing`
        ],
        mcpTools: [
          `add_via`,
          `import_kicad`,
          `export_kicad`
        ]
      },
      {
        id: `2026-10-17-kicad-import-wildcard-layers`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `fix`,
        title: `KiCad import: THT pads, multi-layer zones, arcs`,
        summary: `KiCad import expands *.Cu / F&B.Cu / *.Mask against the board's stack (THT pads were importing with no copper), splits multi-layer zones, imports arc tracks and In9-In30, and warns instead of dropping.`,
        features: [
          `pcb`,
          `ecad`,
          `kicad`,
          `import`,
          `drc`
        ],
        mcpTools: [
          `import_kicad`
        ]
      },
      {
        id: `2026-10-17-gerber-filefunction-stack-numbering`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `fix`,
        title: `Gerber: number copper layers by real stack position`,
        summary: `Gerber .FileFunction now numbers copper L1 (top) to Ln (bottom) for the board's layer count; B.Cu on a 4-layer board was tagged L2, colliding with In1.Cu.`,
        features: [
          `pcb`,
          `gerber`,
          `export`
        ],
        mcpTools: [
          `export_gerber`
        ]
      },
      {
        id: `2026-10-17-drc-inner-layers-in7-in8`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `fix`,
        title: `DRC sees In7/In8 copper on 10-layer boards`,
        summary: `The DRC copper stack skipped In7Cu/In8Cu, reporting thousands of false disjoint-net fragments on 10-layer boards.`,
        features: [
          `pcb`,
          `electronics`,
          `routing`
        ],
        mcpTools: [
          `run_drc`
        ]
      },
      {
        id: `2026-10-17-diff-pair-si-polish`,
        version: `0.10.0`,
        date: `2026-10-17`,
        category: `feat`,
        title: `Differentiable diff-pair SI polish`,
        summary: `Routed diff pairs are tuned by a tang-based claim compiler with SCO/SQP solvers and mined cuts, improving coupling and skew without breaking connectivity.`,
        features: [
          `pcb`,
          `electronics`,
          `routing`
        ],
        mcpTools: [
          `route_nets`,
          `route_diff_pair`
        ]
      },
      {
        id: `2026-10-16-root-cache-rigid-placement`,
        version: `0.10.0`,
        date: `2026-10-16`,
        category: `perf`,
        title: `Root mesh cache keys on shape, not placement`,
        summary: `With the on-disk root cache on, a root whose top is a chain of Translate/Rotate nodes is cached under the shape beneath the chain and the rigid placement is applied to the mesh afterwards. A posed assembly re-rendered in a new pose (an arm animation) is all hits: a 242-root two-arm frame goes from ~100 s per frame to 0.3 s after the first.`,
        features: [
          `render`,
          `cache`
        ]
      },
      {
        id: `2026-10-14-vcad-render-dark-theme`,
        version: `0.10.0`,
        date: `2026-10-14`,
        category: `feat`,
        title: `vcad-render: --theme dark`,
        summary: `vcad-render gains a native dark theme: light linework over a dark blue-tinted tonal ramp on a near-black ground, across SVG, JPEG, PNG, raytrace, sheets and overlays.`,
        features: [
          `render`,
          `vcad-render`,
          `theme`
        ]
      },
      {
        id: `2026-10-13-render-hole-callouts-and-tinted-style`,
        version: `0.10.0`,
        date: `2026-10-13`,
        category: `feat`,
        title: `vcad-render: hole/PCD callouts and material tints`,
        summary: `--callouts annotates holes and bosses with \xD8 leaders and collapses equal-pitch bolt circles to one 'n\xD7 \xD8d on \xD8pcd PCD' callout; --style tinted keeps the drafting look but tints fills by material so steel, aluminium and black parts read apart.`,
        features: [
          `render`,
          `drafting`,
          `manufacture`
        ]
      },
      {
        id: `2026-09-17-native-instant-open-contour-cam`,
        version: `0.10.0`,
        date: `2026-09-17`,
        category: `feat`,
        title: `Native app: background solve, cached opens, contour CAM`,
        summary: `The Mac app solves documents off the main thread with live progress, reuses the on-disk mesh cache and a shipped .vcadmesh bundle for instant reopen, and machines DXF outlines as contour cuts with tabs.`,
        details: `Opening a slow document no longer beachballs: the kernel runs on its own thread, the viewport shows 'Solving\u2026 n of N' and draws parts as they land, and every document is evaluated once instead of twice. The app now consults the content-addressed root-mesh cache that the CLI already used, so anything a vcad tool has solved opens without a kernel walk, and Save writes a .vcadmesh bundle beside the document that Open imports first. In the kernel, unions of prismatic parts that share their top and bottom planes now come out right: a face split was being silently refused once a neighbouring split had imprinted vertices on its edge, the mesh boolean classified fragments with a single ray that any cracked operand could fool, a fillet tangent to a bore stopped the bore from cutting the fillet's caps, and a union outside its volume bound (or visibly cracked and contradicted by the mesh boolean) is re-cut instead of returned as a silently wrong analytic solid. Face-name propagation no longer dominates chained mesh booleans (it was ~100% of their cost). A 50-stage motor stator that did not finish in 40 minutes and then solved to 84% of its volume now solves in about a minute within 0.3%. Manufacture gains contour operations \u2014 outside or inside along a closed polyline, with holding tabs \u2014 fed by a DXF outline import, a right-rail inspector that follows the job outline, and a single machine bar with an optional Terminal/G-code/Macros drawer in place of the old dock. Loon programs open directly, a DXF dropped on the app lands in Manufacture, launching by opening a file no longer spawns a second instance, and switching workspaces no longer resizes the window. The app also opts out of AppKit window restoration, which after a crash could block the next launch behind a system prompt or crash it outright.`,
        features: [
          `app`,
          `native`,
          `cam`,
          `kernel`,
          `performance`
        ]
      },
      {
        id: `2026-09-17-coplanar-cap-unions-stay-analytic`,
        version: `0.10.0`,
        date: `2026-09-17`,
        category: `fix`,
        title: `Unions of flush prismatic parts stay analytic`,
        summary: `Posts, tabs and bosses unioned into a body with shared top and bottom faces no longer double or drop the caps over their overlap; operand order no longer changes the result.`,
        details: "A small coplanar face lying inside a larger one was judged coincident from one side only, so `post \u222A ring` kept both copies of the overlap while `ring \u222A post` was exact; the larger face now wins. Planar faces are no longer cut by full-width chords from faces that merely end flush on them, which scrambled classification once two such chords crossed (twelve posts into a ring lost 9% of their volume). A line crossing a notched face in several spans now cuts the span it was recorded on rather than always the first. The rana-60 stator goes from 105k triangles of mesh fallback to 11.7k analytic triangles at +0.06% of its reference volume, in under half the time.",
        features: [
          `kernel`,
          `booleans`
        ]
      },
      {
        id: `2026-09-17-contour-cam-side-and-tabs`,
        version: `0.10.0`,
        date: `2026-09-17`,
        category: `fix`,
        title: `Inside contours cut inside; holding tabs hold`,
        summary: `Inside contour toolpaths were offset outward, into the part. Tabs now survive every pass at their stated width, avoid notches and corners, and cut depth follows stock thickness.`,
        features: [
          `cam`,
          `native-app`,
          `manufacture`
        ]
      },
      {
        id: `2026-09-16-native-app-hig-polish`,
        version: `0.10.0`,
        date: `2026-09-16`,
        category: `feat`,
        title: `Native Mac app: one design system, a real document app`,
        summary: `The native app now has one panel surface, semantic type, named undo, a full menu bar with Settings, a declared .vcad document type, a reference grid and orientation triad, and remembers its layout.`,
        details: `Three generations of shell code collapsed into one: every floating panel, eyebrow, key/value row, numeric field and selection highlight comes from a single design system that follows light and dark appearance, and roughly a dozen never-instantiated views are gone. The app behaves like a Mac document app: the bundle declares the .vcad type with an app and document icon, Save is atomic, Save As keeps the undo history, closing offers to save, and recents reach the Dock menu. Undo is named (Undo Extrude, Undo Move Part), the Edit menu has Select All, Delete, Rename, Hide and Isolate, the View menu has the workspace switcher and panel toggles, a Camera menu holds the standard views with \u23181\u20134 and Frame All on \u23180, and Settings (\u2318,) covers presentation, grid, sounds and haptics. No bare-letter shortcuts remain and \u21E7\u2318W no longer shadows Close All. The windowed viewport gains a millimetre reference grid and contact shadow plus an always-on orientation triad; workspace switches keep each workspace's camera; panel state and the active workspace persist across launches. Scrub fields accept locale decimal separators and \u2325/\u21E7 fine/coarse scrubbing. The intent bar can be undone as a whole instead of throwing the document away.`,
        features: [
          `app`,
          `native`,
          `ux`
        ]
      },
      {
        id: `2026-09-09-release-0-10-0`,
        version: `0.10.0`,
        date: `2026-09-09`,
        category: `feat`,
        title: `0.10.0: wgpu 30, kosm-render, a publishable closure`,
        summary: `The GPU stack moves to wgpu 30, the ray tracer's renderer moves out to kosm-render, and the whole crate closure vcad and kosm consume is publishable on crates.io.`,
        details: `Three changes make up 0.10.0. The GPU crates are on wgpu 30, so vcad-kernel-gpu and vcad-kernel-raytrace share one wgpu with the rest of the stack. The renderer itself left vcad: vcad-kernel-raytrace now consumes kosm-render (tag kosm-render-v0.2.0, version 0.2), with vcad a client of it rather than its home. And the 56-crate dependency closure that vcad and kosm consume is publishable \u2014 nine crates that were publish = false (vcad-eval, vcad-render, vcad-gdsii, vcad-kernel-cost, vcad-kernel-dfm, vcad-ecad-{package,pcb,schematic,sim}) now carry readme, keywords, categories and include lists, sibling deps carry a version alongside their interim git source, and the committed path [patch] tables are gone. vcad-loon stays unpublished until loon ships. scripts/publish.sh walks the topological order in docs/publishing.md.`,
        features: [
          `kernel`,
          `render`,
          `gpu`
        ]
      },
      {
        id: `2026-09-06-dfm-hobby-3axis-mill`,
        version: `0.9.4`,
        date: `2026-09-06`,
        category: `feat`,
        title: `dfm: hobby 3-axis mill ruleset, pass/fail per rule with affordances`,
        summary: `A named DFM ruleset for a small bench mill \u2014 seven rules (corner radius, \xB1Z reachability, reamer/tap bores, plate stock, min wall, envelope, threads/gear teeth) judged on the exported mesh, each reported pass/fail with located examples and a suggested fix.`,
        details: "lib/dfm/hobby-3axis-mill.toml (ruleset = hobby_3axis_mill, process cnc_3axis) parameterises a 2 mm minimum end mill, a 3/4/5/6 reamer set, metric tap drills, plate stock thicknesses, \xB10.05 tolerance and a 300x200x80 envelope. Unlike the per-process packs it runs in the mesh domain: BReps are tessellated, STLs are taken as-is, and loose-union exports (every additive body its own shell) are unioned first \u2014 buried faces dropped, section loops unioned in 2D with T-junction splitting, slits under 0.05 mm bridged, zero-width profile spikes collapsed. R1 fits radii to concave arcs in horizontal sections; R2 casts \xB1Z rays through an XY grid and separates 'flip the part' from true undercuts; R3 fits circles to internal loops and names the nearest reamer / tap drill ('bore \xD83.80 \u2192 ream \xD84 H7'); R7 finds helices by the section centroid orbiting the axis and gear teeth by the dominant angular harmonic. `vcad dfm <stl> --ruleset hobby-3axis-mill`, dfm_check's new `ruleset` argument, and get_default_dfm_pack all select it by name; DfmReport gains rule_results.",
        features: [
          `dfm`,
          `cli`,
          `mcp`
        ],
        mcpTools: [
          `dfm_check`
        ]
      },
      {
        id: `2026-09-01-solid-query-probe-suites`,
        version: `0.9.4`,
        date: `2026-09-01`,
        category: `feat`,
        title: `Solid query API and probe suites`,
        summary: "Classify points against posed assemblies, measure part-to-part clearance, and run JSON probe suites with `vcad probe` (nonzero exit on failure).",
        features: [
          `query`,
          `probe`,
          `clearance`,
          `assembly`,
          `cli`
        ]
      },
      {
        id: `2026-09-01-helix-path-and-sweep`,
        version: `0.9.4`,
        date: `2026-09-01`,
        category: `feat`,
        title: `loon: helix / cam-path paths and a sweep that takes them`,
        summary: `Cam tracks, bayonet and J-slots, lead-in ramps and threads are now a primitive: a path dimensioned as rise-per-degree, swept as a closed polyline profile.`,
        details: `[helix r rate-mm-per-deg start-deg arc-deg] is a first-class Path, and [cam-path r #[deg z ...]] is the general form whose extra knots express a rise-plateau-drop detent or a flat pocket directly. [sweep path profile] carries a closed polyline section along it, holding the cross-section in the radial/axial plane so floor(theta) = path z(theta) + min(profile y) exactly. Knots always land on path samples, the facet step is 0.5 deg by default and settable per path, and the solid is capped at both ends so it is watertight standing alone and can be subtracted through a wall.`,
        features: [
          `loon`,
          `primitives`,
          `sweep`
        ],
        mcpTools: []
      },
      {
        id: `2026-09-01-assembly-mates-and-interference`,
        version: `0.9.4`,
        date: `2026-09-01`,
        category: `feat`,
        title: `Assembly mates, posed transforms, interference`,
        summary: `Instances carry full poses and exploded offsets, and coaxial / planar-offset / pattern-phase mates plus a mesh interference check verify the assembly at model time.`,
        features: [
          `assembly`,
          `loon`,
          `mates`,
          `interference`
        ],
        mcpTools: []
      },
      {
        id: `2026-08-28-multitool-difference-manifold`,
        version: `0.9.4`,
        date: `2026-08-28`,
        category: `fix`,
        title: `Manifold exports for multi-tool differences`,
        summary: `Subtracting a multi-stage union tool (bore + groove + patterned slots) no longer exports slit or doubled surface; broken analytic results now swap to a repaired mesh boolean.`,
        features: [
          `booleans`,
          `export`,
          `stl`,
          `printing`
        ],
        mcpTools: []
      },
      {
        id: `2026-08-28-manifold-nested-ring-unions`,
        version: `0.9.4`,
        date: `2026-08-28`,
        category: `fix`,
        title: `Manifold STLs for unions of stacked rings`,
        summary: `A union whose operands are differences (stacked annular rings) no longer exports doubled surface a slicer reports as non-manifold and auto-repairs by filling the bore.`,
        features: [
          `booleans`,
          `export`,
          `stl`,
          `printing`
        ],
        mcpTools: []
      },
      {
        id: `2026-08-28-hex-prism-and-segment-hint`,
        version: `0.9.4`,
        date: `2026-08-28`,
        category: `fix`,
        title: `loon: hex-prism, and cylinder-n stops lying`,
        summary: `The -n primitive forms refuse segment counts under 8 (they are a fidelity hint, not a face count) and point at prism / polygon-prism / hex-prism for real facets.`,
        features: [
          `loon`,
          `primitives`
        ],
        mcpTools: []
      },
      {
        id: `2026-08-25-measure-joint-sweep`,
        version: `0.9.4`,
        date: `2026-08-25`,
        category: `feat`,
        title: `measure sweeps a mechanism's range of motion`,
        summary: `measure now takes joint_state and sweep: the worst distance across a joint's travel plus the full per-pose margin curve; check_clearance gains include_samples and out-of-limits warnings.`,
        features: [
          `measure`,
          `clearance`,
          `assembly`,
          `joints`,
          `kinematics`
        ],
        mcpTools: [
          `measure`,
          `check_clearance`
        ]
      },
      {
        id: `2026-08-25-export-web-glb`,
        version: `0.9.4`,
        date: `2026-08-25`,
        category: `feat`,
        title: `vcad-render: web export (named-node GLB + JSON)`,
        summary: `--export-web writes a Y-up GLB with one named, materialed glTF node per part; --export-web-js writes a primitive scene graph for web consumers.`,
        features: [
          `render`,
          `export`,
          `glb`,
          `web`
        ],
        mcpTools: []
      },
      {
        id: `2026-08-25-animate-drafting-style`,
        version: `0.9.4`,
        date: `2026-08-25`,
        category: `feat`,
        title: `Animate in any style, not just photoreal`,
        summary: `vcad-render --animate now works without --photoreal: drafting line art by default, --raytrace as a middle tier, with one camera pinned across the whole sequence.`,
        details: `--animate used to require --photoreal, so the cheapest and most legible style \u2014 the default drafting line art \u2014 could not be animated at all, and a sequence meant tens of seconds a frame. It is now a style-agnostic path: the front half (resolve the timeline, evaluate the document exactly once, sample the sequence, bake one pose vector per frame) is shared, and three back ends turn a pose into pixels \u2014 drafting (default), --raytrace, and --photoreal. The drafting tier tessellates each part once and only re-poses the cached meshes per frame, which puts a 37-part machine at ~0.35 s a frame instead of minutes. Every tier now frames its camera once, on the union of all posed bounds, and hands that same framing to every frame, so all PNGs share one canvas size and scale and the assembly no longer swims about; --auto-aspect resolves once against that union. --trim is refused with --animate (a per-frame crop is per-frame sizing, the drift the shared camera prevents) and names the flag to drop.`,
        features: [
          `rendering`,
          `animation`,
          `assemblies`,
          `joints`,
          `cli`
        ]
      },
      {
        id: `2026-08-19-photoreal-animation`,
        version: `0.9.4`,
        date: `2026-08-19`,
        category: `perf`,
        title: `Photoreal animation evaluates geometry once`,
        summary: `vcad-render --photoreal --animate poses a jointed assembly over a timeline, evaluating the document once for the whole sequence instead of once per frame.`,
        details: `A joint-animated assembly is the same parts in different places, so the expensive half of a photoreal render \u2014 evaluating the parametric DAG into BReps and building a BVH over each part \u2014 belongs outside the frame loop. --animate puts it there: evaluate once, build one BLAS per part, then per frame solve forward kinematics (the same vcad-eval solver the app's assembly mode and the MCP timeline use), hand each object its new object\u2192world transform, and rebuild only the top-level acceleration structure before tracing. Poses come from the document's own timeline, or from a keyframe file with a joint-track shorthand; joints resolve by id or by authored name and a name that matches nothing fails with the list that does. The camera is framed on the union of every pose, so the subject never swims or clips. Frames land as frame_NNNN.png in the -o directory and are muxed to H.264 when ffmpeg is on PATH. On a 35-part machine at 640px/16spp the once-only evaluation was 215s against ~85s of tracing per frame \u2014 previously repaid in full on every frame.`,
        features: [
          `rendering`,
          `photoreal`,
          `animation`,
          `assemblies`,
          `joints`,
          `cli`
        ]
      },
      {
        id: `2026-08-19-loon-modules-and-root-cache`,
        version: `0.9.4`,
        date: `2026-08-19`,
        category: `feat`,
        title: `Loon lib path and a content-addressed evaluation cache`,
        summary: `[use] modules resolve next to the file then on $VCAD_LOON_PATH, identically in vcad, vcad-render and MCP; evaluated root meshes are cached on disk keyed by expression + kernel build.`,
        features: [
          `loon`,
          `modules`,
          `cache`,
          `cli`,
          `render`
        ],
        mcpTools: [
          `load_document`,
          `create_cad_loon`
        ]
      },
      {
        id: `2026-08-19-builtin-material-library`,
        version: `0.9.4`,
        date: `2026-08-19`,
        category: `feat`,
        title: `Renders know the standard material names`,
        summary: `A part named "aluminum" or "copper" with no [material] block rendered as clay grey; named materials now resolve to a built-in PBR library.`,
        details: `Hand-written .loon documents name a material rather than define one \u2014 [root frame-rails "aluminum"] and nothing else \u2014 so the document's materials table stayed empty and every part fell through to the path tracer's default clay. The renderer now resolves an undeclared name against a built-in library of ~40 well-known materials (metals with measured F0 reflectance, plastics, composites, organics), case- and separator-insensitive so abs-black and abs_black are one material. Document-declared materials always win. Both the photoreal and drafting paths resolve through the same table, so their hues agree.`,
        features: [
          `rendering`,
          `photoreal`,
          `materials`,
          `loon`
        ]
      },
      {
        id: `2026-08-17-altium-pcb-import`,
        version: `0.9.4`,
        date: `2026-08-17`,
        category: `feat`,
        title: `Altium and Eagle PCB import`,
        summary: `Import Altium .PcbDoc boards (native binary or ASCII) and .PcbLib libraries, plus Eagle .brd boards, straight into a live session.`,
        features: [
          `pcb`,
          `import`,
          `ecad`,
          `altium`,
          `eagle`
        ],
        mcpTools: [
          `import_altium`,
          `import_altium_library`,
          `import_eagle`
        ]
      },
      {
        id: `2026-08-16-render-z-up`,
        version: `0.9.4`,
        date: `2026-08-16`,
        category: `fix`,
        title: `vcad render is Z-up, matching the kernel`,
        summary: `The CLI renderer and TUI viewport used a Y-up camera and grid, so every Z-up model rendered lying on its side; --up y opts back in.`,
        features: [
          `cli`,
          `rendering`
        ]
      },
      {
        id: `2026-08-16-render-hidden-lines`,
        version: `0.9.4`,
        date: `2026-08-16`,
        category: `fix`,
        title: `SVG renders draw complete, actually-dashed hidden lines`,
        summary: `Hidden edges on curved features were mostly deleted and the survivors drew solid, leaving a stray line across the part; they now run the full occluded length as proper dashes.`,
        features: [
          `rendering`,
          `drafting`
        ]
      },
      {
        id: `2026-08-16-render-annotation-scaling`,
        version: `0.9.4`,
        date: `2026-08-16`,
        category: `fix`,
        title: `Render overlays stay readable at any size`,
        summary: `The axes gizmo, part labels and dimensions now scale with the canvas instead of staying 1024px-sized, dimension lines clear round parts, and labels no longer land on the geometry they name.`,
        features: [
          `rendering`,
          `drafting`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-08-16-render-aa-and-depth-cue`,
        version: `0.9.4`,
        date: `2026-08-16`,
        category: `fix`,
        title: `Smoother renders: anti-aliasing and a per-pixel depth cue`,
        summary: `Isometric renders anti-alias their silhouettes and linework, flat faces no longer break into hard tonal wedges at triangle boundaries, and edge strokes sit on their geometry instead of half a stroke off.`,
        features: [
          `rendering`,
          `tessellation`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-08-16-loon-sheet-metal-bindings`,
        version: `0.9.4`,
        date: `2026-08-16`,
        category: `feat`,
        title: `Loon can author sheet metal, faceting and imports`,
        summary: `Sheet-metal chains, pinned segment counts and vendor STEP/STL imports are now expressible in loon, so a bent part carries its bends and unfolds exactly instead of having them inferred back out of the solid.`,
        features: [
          `loon`,
          `sheet-metal`,
          `import`,
          `tessellation`
        ],
        mcpTools: [
          `create_cad_loon`,
          `sheet_metal_unfold`,
          `flat_pattern_from_solid`
        ]
      },
      {
        id: `2026-08-16-cli-sheet-metal-fold`,
        version: `0.9.4`,
        date: `2026-08-16`,
        category: `fix`,
        title: `Sheet-metal parts export from the CLI again`,
        summary: `vcad info/export and vcad-render now fold sheet-metal chains \u2014 including jogs and bend relief \u2014 instead of reporting zero triangles, and a root that fails to evaluate says why.`,
        features: [
          `sheet-metal`,
          `cli`,
          `loon`,
          `export`
        ]
      },
      {
        id: `2026-08-16-cli-loon-input-everywhere`,
        version: `0.9.4`,
        date: `2026-08-16`,
        category: `fix`,
        title: `CLI accepts .loon input on every subcommand`,
        summary: `render, slice, simulate, boolean and transform now evaluate .loon source like info and export already did, instead of failing in the JSON parser.`,
        features: [
          `cli`,
          `loon`
        ]
      },
      {
        id: `2026-08-15-torus-tessellation`,
        version: `0.9.4`,
        date: `2026-08-15`,
        category: `fix`,
        title: `Toruses render, and fillet blends are round`,
        summary: `Torus faces reached the planar tessellator, so toruses had zero volume, booleans against them silently did nothing, and fillet blends drew as flat chamfers.`,
        features: [
          `booleans`,
          `tessellation`,
          `fillets`,
          `primitives`
        ]
      },
      {
        id: `2026-08-15-mcp-step-import-brep`,
        version: `0.9.4`,
        date: `2026-08-15`,
        category: `feat`,
        title: `MCP STEP import keeps B-rep`,
        summary: `import_step now emits lazy step_import nodes instead of baked meshes, so imported parts keep analytic faces and can be re-exported as STEP. Pass as_mesh for the old behavior.`,
        features: [
          `step`,
          `import`,
          `brep`
        ],
        mcpTools: [
          `import_step`,
          `export_cad`
        ]
      },
      {
        id: `2026-08-15-hole-bolt-pattern-recognition`,
        version: `0.9.4`,
        date: `2026-08-15`,
        category: `feat`,
        title: "Read a vendor part's bolt pattern with `vcad features`",
        summary: `Recognises holes, bolt circles, and linear patterns in an imported STEP: bolt-circle diameter, count, hole size, angles relative to the pattern, and a body OD taken from the largest coaxial cylinder instead of the bounding box.`,
        features: [
          `kernel`,
          `step`,
          `cli`,
          `feature-recognition`
        ]
      },
      {
        id: `2026-08-15-fillet-failure-is-reported`,
        version: `0.9.4`,
        date: `2026-08-15`,
        category: `breaking`,
        title: `Fillet, chamfer, blend and shell now report failure`,
        summary: `A fillet that can't be applied is an error naming the cause instead of a silently unfilleted solid, multi-edge blends report per edge, and best-effort behavior moved to explicit *_lenient variants.`,
        features: [
          `fillet`,
          `chamfer`,
          `shell`,
          `kernel`,
          `validation`
        ]
      },
      {
        id: `2026-08-15-face-level-brep-queries`,
        version: `0.9.4`,
        date: `2026-08-15`,
        category: `feat`,
        title: `Face-level B-rep queries for agents`,
        summary: `New inspect_faces and measure_outer_diameter MCP tools read the kernel's faces directly \u2014 exact bore diameters, shaft axes and mounting-face normals, instead of tessellation-bound bounding boxes.`,
        features: [
          `mcp`,
          `kernel`,
          `inspection`,
          `brep`
        ],
        mcpTools: [
          `inspect_faces`,
          `measure_outer_diameter`
        ]
      },
      {
        id: `2026-08-11-cone-boolean-rulings`,
        version: `0.9.4`,
        date: `2026-08-11`,
        category: `fix`,
        title: `Cone booleans: apex-plane rulings and frozen rims`,
        summary: `Booleans against cones no longer drop the lateral wall when a face plane passes through the cone axis; cone rims now freeze onto the canonical grid like cylinders.`,
        features: [
          `booleans`,
          `kernel`
        ]
      },
      {
        id: `2026-08-11-bore-breakout-faces`,
        version: `0.9.4`,
        date: `2026-08-11`,
        category: `fix`,
        title: `Bores that break out through a face now cut correctly`,
        summary: `A cylinder cut whose opening crosses a side face or an angled face is no longer silently skipped or left short, and its rim exports watertight; Difference now fails closed when it removes nothing from a tool it overlaps.`,
        features: [
          `booleans`,
          `kernel`,
          `tessellation`,
          `validation`
        ]
      },
      {
        id: `2026-08-11-boolean-curved-face-validity`,
        version: `0.9.4`,
        date: `2026-08-11`,
        category: `fix`,
        title: `Booleans against curved faces can no longer fail silently`,
        summary: `Cuts through spherical pockets, sphere\xD7cylinder and unequal cylinder\xD7cylinder booleans now return the correct solid: a validity oracle checks every result against the operation's set semantics and reroutes unsound ones to a mesh-CSG fallback.`,
        features: [
          `booleans`,
          `kernel`,
          `validation`
        ]
      },
      {
        id: `2026-08-08-xlerobot-sim`,
        version: `0.9.4`,
        date: `2026-08-08`,
        category: `feat`,
        title: `Simulate XLeRobot, the dual-arm mobile manipulator`,
        summary: `XLeRobot ships as a sample: 17 actuated DOF at ~20k steps/s, with closed-loop arm control. Importing it fixed URDF links whose collision and visual geometry interleave, and meshes that sit under a transform.`,
        features: [
          `simulation`,
          `physics`,
          `urdf`,
          `robotics`,
          `import`
        ]
      },
      {
        id: `2026-08-08-urdf-collision-decomposition`,
        version: `0.9.4`,
        date: `2026-08-08`,
        category: `fix`,
        title: `URDF import keeps each link's collision decomposition`,
        summary: `Imported robots now collide with every <collision> shape a link declares instead of one mesh taken from <visual>, so a link built as a convex decomposition gets its real contact surface.`,
        features: [
          `urdf`,
          `physics`,
          `simulation`,
          `import`
        ]
      },
      {
        id: `2026-08-01-native-sim-dojo`,
        version: `0.9.4`,
        date: `2026-08-01`,
        category: `feat`,
        title: `Physics simulation and RL training in the native app`,
        summary: `The macOS/visionOS app can simulate an assembly, drive it with a trained policy, and train one in-process \u2014 in both studio and released-to-desktop modes, with the Booster K1 shipped as a sample.`,
        features: [
          `simulation`,
          `rl`,
          `physics`,
          `native-app`,
          `training`
        ]
      },
      {
        id: `2026-08-01-boolean-band-cyclic-parse`,
        version: `0.9.4`,
        date: `2026-08-01`,
        category: `fix`,
        title: `Booleans: parse cylindrical bands independent of loop start`,
        summary: `Booleans over many-instance patterns no longer fragment faces or drop geometry when a face loop's starting edge sits mid-chain.`,
        features: [
          `booleans`,
          `patterns`
        ]
      },
      {
        id: `2026-08-01-ars-step-decay-failclosed-base`,
        version: `0.9.4`,
        date: `2026-08-01`,
        category: `feat`,
        title: `ARS step-size decay + fail-closed base termination`,
        summary: `The RL trainer gains an optional cosine step-size schedule, and robot envs now refuse base-pose termination conditions that could never fire (fixed-base or mistyped base instance).`,
        features: [
          `simulation`,
          `rl`,
          `physics`
        ]
      },
      {
        id: `2026-07-31-urdf-floating-base`,
        version: `0.9.4`,
        date: `2026-07-31`,
        category: `feat`,
        title: `URDF import can synthesize a floating base`,
        summary: `Humanoid URDFs ship the world link and floating joint commented out; import_urdf's floating_base option injects them so the robot can fall and walk instead of being welded to the world.`,
        features: [
          `urdf`,
          `physics`,
          `simulation`
        ],
        mcpTools: [
          `import_urdf`
        ]
      },
      {
        id: `2026-07-31-import-urdf-mcp-tool`,
        version: `0.9.4`,
        date: `2026-07-31`,
        category: `feat`,
        title: `import_urdf MCP tool`,
        summary: `Agents can import a URDF robot (links, joints, FK-placed instances, STL meshes) straight into a session document, ready for create_robot_env.`,
        features: [
          `urdf`,
          `robotics`,
          `physics`,
          `import`
        ],
        mcpTools: [
          `import_urdf`
        ]
      },
      {
        id: `2026-07-31-gym-sim2real-randomization`,
        version: `0.9.4`,
        date: `2026-07-31`,
        category: `feat`,
        title: `Sim2real gym: domain randomization and richer step results`,
        summary: `Robot gym envs gain seeded domain randomization (mass, friction, PD gains, actuator latency, initial state), gaussian observation noise, configurable termination, base pose/velocity observations, a per-step info map, and seeded gym_reset.`,
        features: [
          `physics`,
          `simulation`,
          `rl`
        ],
        mcpTools: [
          `create_robot_env`,
          `gym_step`,
          `gym_reset`
        ]
      },
      {
        id: `2026-07-31-gym-ground-contact`,
        version: `0.9.4`,
        date: `2026-07-31`,
        category: `feat`,
        title: `Gym physics gets ground contact`,
        summary: `Robot simulation now has a configurable ground plane with friction \u2014 dropped bodies land and rest instead of falling forever, enabling legged locomotion training.`,
        features: [
          `physics`,
          `simulation`,
          `rl`
        ],
        mcpTools: [
          `create_robot_env`,
          `batch_create_envs`
        ]
      },
      {
        id: `2026-07-31-gym-foot-contact-observation`,
        version: `0.9.4`,
        date: `2026-07-31`,
        category: `feat`,
        title: `Foot contact reaches the gym observation`,
        summary: `Every end effector now reports an in-contact flag, normal force, and center of pressure \u2014 the foot-force channel a locomotion policy needs to tell a loaded foot from a swinging one.`,
        features: [
          `physics`,
          `simulation`,
          `rl`
        ],
        mcpTools: [
          `gym_observe`,
          `gym_step`,
          `gym_reset`,
          `create_robot_env`
        ]
      },
      {
        id: `2026-07-31-free-joint-floating-base`,
        version: `0.9.4`,
        date: `2026-07-31`,
        category: `feat`,
        title: `Free (6-DOF) joints \u2014 URDF floating bases can fall`,
        summary: `New Free joint kind with full 6-DOF physics: URDF floating joints (e.g. a humanoid's floating base) now import as Free instead of Ball, so the base can translate, fall, and walk instead of being pinned in space.`,
        features: [
          `assembly`,
          `physics`,
          `urdf-import`
        ],
        mcpTools: [
          `create_robot_env`,
          `gym_step`,
          `gym_observe`
        ]
      },
      {
        id: `2026-07-31-floating-base-rl`,
        version: `0.9.4`,
        date: `2026-07-31`,
        category: `feat`,
        title: `Train locomotion policies on imported humanoids`,
        summary: `ARS policy training over the physics gym, plus floating-base PD and contact-scan fixes that make a 22-DOF humanoid simulate at ~9k steps/s.`,
        features: [
          `physics`,
          `urdf`,
          `reinforcement-learning`,
          `humanoid`
        ],
        mcpTools: [
          `create_robot_env`,
          `gym_step`,
          `import_urdf`
        ]
      },
      {
        id: `2026-07-31-floating-base-pd-fix`,
        version: `0.9.4`,
        date: `2026-07-31`,
        category: `fix`,
        title: `Floating-base robots no longer tumble under PD control`,
        summary: `Gravity-compensation feedforward assumed a bolted-down root, injecting the base support wrench into the joints; it is now skipped for floating-base models.`,
        features: [
          `physics`,
          `humanoid`
        ],
        mcpTools: [
          `create_robot_env`,
          `gym_step`
        ]
      },
      {
        id: `2026-07-31-ars-policy-trait-curriculum`,
        version: `0.9.4`,
        date: `2026-07-31`,
        category: `feat`,
        title: `RL trainer: K1 standing task solved (10/10 seeds)`,
        summary: `ARS no longer walks out of the solutions it finds (step size 0.03 -> 0.005), gains a randomization curriculum and a tanh MLP policy, and selects iterates on held-out seeds. The Booster K1 randomized standing task goes from 0/10 to 10/10 full episodes.`,
        features: [
          `physics`,
          `simulation`,
          `rl`
        ]
      },
      {
        id: `2026-07-31-actuator-limits-gains`,
        version: `0.9.4`,
        date: `2026-07-31`,
        category: `feat`,
        title: `Actuator effort/velocity limits and per-joint PD gains`,
        summary: `URDF effort/velocity limits now import, saturate simulated torques and velocity targets, and create_robot_env accepts per-joint PD gains.`,
        features: [
          `physics`,
          `urdf`,
          `simulation`,
          `robotics`
        ],
        mcpTools: [
          `create_robot_env`
        ]
      },
      {
        id: `2026-07-30-urdf-mesh-robots-render`,
        version: `0.9.4`,
        date: `2026-07-30`,
        category: `fix`,
        title: `Mesh-based URDF robots render and export correctly`,
        summary: `URDF imports with STL meshes (Booster K1, Unitree G1) now render FK-placed instead of vanishing or piling at the origin; whitespace-padded URDF numbers parse.`,
        features: [
          `urdf`,
          `render`,
          `assembly`
        ]
      },
      {
        id: `2026-07-30-step-import-skipped-face-report`,
        version: `0.9.4`,
        date: `2026-07-30`,
        category: `fix`,
        title: `STEP import reports skipped faces`,
        summary: `STEP import now reports faces skipped for unsupported surface types (entity id + surface type) instead of silently dropping them \u2014 surfaced in the CLI, the app's import toast, and the import_step MCP tool.`,
        features: [
          `step-import`
        ],
        mcpTools: [
          `import_step`
        ]
      },
      {
        id: `2026-07-30-sketch-solve-pending-status`,
        version: `0.9.4`,
        date: `2026-07-30`,
        category: `fix`,
        title: `Honest sketch solve status before kernel loads`,
        summary: `Solving a sketch before the kernel WASM finishes loading now shows a dimmed 'pending' badge and re-solves automatically once it loads, instead of falsely showing 'solved'.`,
        features: [
          `sketch`,
          `constraints`
        ]
      },
      {
        id: `2026-07-30-fillet-boolean-conformity`,
        version: `0.9.4`,
        date: `2026-07-30`,
        category: `fix`,
        title: `Booleans on filleted solids are watertight`,
        summary: `Cuts that slice fillet blends now trim planar faces along the true arc (multi-crossing, inscribed, and tangent cases), so differences against filleted parts come out watertight with correct volume and outward windings.`,
        features: [
          `fillet`,
          `booleans`
        ],
        mcpTools: []
      },
      {
        id: `2026-07-30-drafting-views-unmirrored`,
        version: `0.9.4`,
        date: `2026-07-30`,
        category: `fix`,
        title: `Drafting views are no longer mirrored`,
        summary: `All six orthographic views (and isometric) in 2D drawings drew a mirror image from the opposite side of the part; they now follow third-angle convention, so shop drawings match the part.`,
        features: [
          `drafting`,
          `drawings`
        ],
        mcpTools: []
      },
      {
        id: `2026-07-30-cli-tui-glb-step-export`,
        version: `0.9.4`,
        date: `2026-07-30`,
        category: `feat`,
        title: `CLI and TUI GLB/STEP export`,
        summary: `vcad export now writes .glb files, and the TUI's Export GLB/STEP menu actions work, sharing the CLI's kernel-backed writers.`,
        features: [
          `cli`,
          `tui`,
          `export`,
          `glb`,
          `step`
        ]
      },
      {
        id: `2026-07-30-boolean-trim-overshoot-fix`,
        version: `0.9.4`,
        date: `2026-07-30`,
        category: `fix`,
        title: `Boolean trim overshoot on curved trim boundaries`,
        summary: `Booleans that trim parts against cylindrical boundaries (e.g. pattern blades cut to a radius) no longer over- or under-trim: split boundaries land on the true intersection and thin slivers classify reliably.`,
        features: [
          `kernel`,
          `booleans`
        ],
        mcpTools: []
      },
      {
        id: `2026-07-29-revolute-physics-mass-properties`,
        version: `0.9.4`,
        date: `2026-07-29`,
        category: `fix`,
        title: `Physics sim: real geometry, real dynamics`,
        summary: `Composed parts no longer collapse to a placeholder cube (inverted gravity); ball/free joints conserve energy; free bodies fall; position servos reach their target via gravity feedforward.`,
        features: [
          `physics`,
          `simulation`,
          `assembly`
        ],
        mcpTools: [
          `create_robot_env`,
          `gym_step`,
          `gym_observe`,
          `record_simulation`
        ]
      },
      {
        id: `2026-07-29-fk-render-pivot`,
        version: `0.9.4`,
        date: `2026-07-29`,
        category: `fix`,
        title: `Jointed parts pivot at their anchor when rendered`,
        summary: `Kinematic playback rotated a jointed child about the world origin instead of its joint anchor; renders at nonzero joint angles are now correct.`,
        features: [
          `assembly`,
          `kinematics`,
          `animation`,
          `rendering`
        ],
        mcpTools: [
          `export_video`,
          `render_sequence`,
          `animate`,
          `render_view`
        ]
      },
      {
        id: `2026-07-28-mcp-2026-07-28-protocol`,
        version: `0.9.4`,
        date: `2026-07-28`,
        category: `feat`,
        title: `MCP 2026-07-28 protocol support`,
        summary: `The vcad MCP server now fully speaks the stateless 2026-07-28 revision \u2014 server/discover, MRTR, the Tasks extension, subscriptions/listen, and streamed progress \u2014 alongside every earlier revision.`,
        features: [
          `mcp`
        ],
        mcpTools: []
      },
      {
        id: `2026-07-26-viewport-path-tracer`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `The raytrace viewport is a real path tracer`,
        summary: `The viewport now shades with the same BSDF, materials and lighting as --photoreal: multi-bounce global illumination, MIS area lights, clearcoat and brushed-metal anisotropy, so a part looks the same in the app as in a render.`,
        features: [
          `rendering`,
          `raytracing`,
          `viewport`,
          `materials`
        ]
      },
      {
        id: `2026-07-26-swept-and-all-pairs-clearance`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `check_clearance sweeps the range of motion`,
        summary: "Pass `sweep` to drive joints through their travel and get the worst pose, or omit both groups to audit every part pair in the document for interference.",
        features: [
          `clearance`,
          `assembly`,
          `kinematics`,
          `mcp`
        ],
        mcpTools: [
          `check_clearance`,
          `build_receipt`,
          `verify_receipt`
        ]
      },
      {
        id: `2026-07-26-step-export-product-anchor`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `fix`,
        title: `STEP exports now open in external CAD`,
        summary: `Exported STEP files carry the AP214 product/representation anchor and mm units, so Shapr3D, SolidWorks, and Fusion no longer reject them as containing no 3D geometry.`,
        features: [
          `step-export`,
          `interop`
        ],
        mcpTools: [
          `export_cad`
        ]
      },
      {
        id: `2026-07-26-step-export-booleans`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `STEP export works on real parts, booleans included`,
        summary: `STEP AP214 export now serializes the evaluated BRep \u2014 booleans, transforms, fillets, and sweeps keep analytic faces \u2014 with one named body per part; mesh-only parts are refused by name.`,
        features: [
          `step`,
          `export`,
          `booleans`,
          `cnc`
        ],
        mcpTools: [
          `export_cad`
        ]
      },
      {
        id: `2026-07-26-step-analytic-circle-edges`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `fix`,
        title: `STEP export: curved faces survive third-party import`,
        summary: `Circular edges now export as analytic CIRCLEs instead of chord polylines, so importers like Shapr3D keep cylinder walls and annular faces at the spec 1e-6 accuracy.`,
        features: [
          `step`,
          `export`,
          `kernel`
        ]
      },
      {
        id: `2026-07-26-render-loon-directly`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `Render and export .loon source directly`,
        summary: `vcad-render and the vcad CLI's export/info now take .loon files anywhere a .vcad goes, evaluating source on the way in with [use ...] imports resolved.`,
        features: [
          `loon`,
          `cli`,
          `rendering`
        ]
      },
      {
        id: `2026-07-26-raytrace-tlas`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `perf`,
        title: `Ray tracing scales to many-part assemblies`,
        summary: `A two-level acceleration structure culls whole parts per ray and shares one hierarchy across repeated instances: 6.2x faster on a 216-part assembly.`,
        features: [
          `raytrace`,
          `render`,
          `assembly`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-07-26-raytrace-mesh-parts`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `fix`,
        title: `Ray-traced renders no longer drop mesh parts`,
        summary: `Mesh-backed parts (frozen topology-optimization results, imported STL/GLB) now ray trace as smooth-shaded triangles instead of being silently omitted from the image.`,
        features: [
          `rendering`,
          `raytrace`,
          `mesh`
        ]
      },
      {
        id: `2026-07-26-photoreal-path-tracer`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `Photorealistic rendering with --photoreal`,
        summary: `vcad-render gains a physically-based path tracer: GGX materials with clearcoat, studio softbox lighting, global illumination, and a real camera lens with depth of field.`,
        features: [
          `rendering`,
          `raytracing`,
          `cli`,
          `materials`
        ]
      },
      {
        id: `2026-07-26-photoreal-denoiser`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `perf`,
        title: `Edge-aware denoising for --photoreal`,
        summary: `Photoreal renders are now denoised by default, reaching near-reference quality from ~32 samples per pixel instead of ~1024. Pass --no-denoise for ground-truth renders.`,
        features: [
          `rendering`,
          `raytracing`,
          `cli`
        ]
      },
      {
        id: `2026-07-26-parametric-loon-datums`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `Named parameters, datums and stacks in loon`,
        summary: `Values named with [defparam] survive into the document and are settable with set_parameters; [datum-plane]/[stack] make shared planes and packing clearances named entities instead of repeated literals.`,
        features: [
          `loon`,
          `parameters`,
          `datums`,
          `assemblies`
        ],
        mcpTools: [
          `create_cad_loon`,
          `list_parameters`,
          `set_parameters`,
          `parameter_gradient`
        ]
      },
      {
        id: `2026-07-26-loon-mirror-symmetry`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `Mirror sugar and symmetric patterns in loon`,
        summary: `[mirror-x/y/z], [mirror-pattern nx ny nz s] and [quad-pattern s] make left/right and 4-fold symmetry one expression; mirror is now documented in create_cad_loon.`,
        features: [
          `loon`,
          `transforms`,
          `patterns`
        ],
        mcpTools: [
          `create_cad_loon`
        ]
      },
      {
        id: `2026-07-26-joint-state-pose`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `Pose assemblies with joint_state`,
        summary: `render_view, inspect_cad, inspect_part, describe_scene, check_clearance and export_cad now take an optional joint_state map, so a jointed assembly is no longer stuck in its zero pose.`,
        features: [
          `assembly`,
          `kinematics`,
          `render`,
          `export`
        ],
        mcpTools: [
          `render_view`,
          `inspect_cad`,
          `inspect_part`,
          `describe_scene`,
          `check_clearance`,
          `export_cad`
        ]
      },
      {
        id: `2026-07-26-isometric-handedness`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `fix`,
        title: `Isometric renders are no longer mirrored`,
        summary: `The default isometric view used a left-handed screen basis, so every static render was a mirror image of the app viewport; it now matches.`,
        features: [
          `rendering`,
          `drafting`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-07-26-hdri-environment-lighting`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `HDRI environment lighting for photoreal renders`,
        summary: `vcad-render --photoreal gains --env (three built-in studio HDRIs or any lat-long .hdr file) and --env-rotation, importance-sampled as a third MIS strategy.`,
        features: [
          `render`,
          `photoreal`,
          `lighting`
        ]
      },
      {
        id: `2026-07-26-flat-pattern-from-solid`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `Flat patterns from parts you already modelled`,
        summary: `flat_pattern_from_solid turns any constant-thickness solid into a fab-ready DXF plus a bend table \u2014 no sheet-metal re-authoring \u2014 batching a whole assembly into unique patterns x quantity.`,
        features: [
          `sheet-metal`,
          `manufacturing`,
          `mcp`
        ],
        mcpTools: [
          `flat_pattern_from_solid`,
          `sheet_metal_nest`,
          `sheet_metal_cost`
        ]
      },
      {
        id: `2026-07-26-fillet-corner-raytrace-hole`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `fix`,
        title: `Fix holes at fillet corners in ray-traced renders`,
        summary: `Ray-traced filleted parts showed a crescent-shaped hole at every rounded corner; the spherical corner blend's trim boundary collapsed at the sphere's pole and cut away half the patch.`,
        features: [
          `fillet`,
          `rendering`,
          `raytrace`
        ]
      },
      {
        id: `2026-07-26-fastener-forms`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `Fasteners are a first-class form`,
        summary: `bolt, bolt-circle, clearance-hole and tapped-hole: catalog-backed hardware oriented by its own axis, with real countersunk heads, length checks, and BOM lines counted off the geometry.`,
        features: [
          `loon`,
          `fasteners`,
          `bom`,
          `assembly`
        ],
        mcpTools: [
          `create_cad_loon`,
          `bom_create`,
          `search_mechanical_parts`
        ]
      },
      {
        id: `2026-07-26-document-source-provenance`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `Documents remember the loon source that made them`,
        summary: `create_cad_loon stores its source on the document, save_document writes the .loon alongside the .vcad, load_document opens a file path, and sessions report source_stale when they drift.`,
        features: [
          `loon`,
          `documents`,
          `mcp`
        ],
        mcpTools: [
          `create_cad_loon`,
          `get_document`,
          `save_document`,
          `load_document`
        ]
      },
      {
        id: `2026-07-26-beam-check-thin-walled-fea`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `beam_check: audited structural answer for thin walls`,
        summary: `Sheet-metal and tube-frame members had no audited FEA answer at any resolution; beam_check prices them in closed form (Bredt torsion, beam bending, Euler buckling), and analyze_structure now measures the wall and refuses with the cell arithmetic instead of a bare Unverifiable.`,
        features: [
          `fea`,
          `sheet-metal`,
          `receipts`
        ],
        mcpTools: [
          `beam_check`,
          `analyze_structure`
        ]
      },
      {
        id: `2026-07-26-backwards-extrude-inverted-winding`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `fix`,
        title: `Extruding against the sketch normal no longer inverts the solid`,
        summary: `Extrude and loft silently built inside-out solids (negative volume, renders normally, corrupts every downstream boolean) when the direction opposed the sketch normal; integrity warnings now name the offending root.`,
        features: [
          `kernel`,
          `sketch`,
          `mcp`
        ],
        mcpTools: [
          `create_cad_loon`,
          `create`,
          `update`
        ]
      },
      {
        id: `2026-07-26-assembly-mirror-groups`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `Assembly symmetry: mirror-group in loon`,
        summary: `[mirror-group-x/y/z suffix asm] mirrors parts, instance placements, joint anchors and joint axes together, so one authored side drives both symmetrically.`,
        features: [
          `loon`,
          `assemblies`,
          `joints`
        ],
        mcpTools: [
          `create_cad_loon`
        ]
      },
      {
        id: `2026-07-26-anisotropic-roughness`,
        version: `0.9.4`,
        date: `2026-07-26`,
        category: `feat`,
        title: `Brushed and turned finishes render correctly`,
        summary: `Materials gain an anisotropy value, and the photoreal path tracer orients the stretched highlight by the BRep's own surface parameterisation, so turned shafts and bored holes get the circumferential grain they have in life.`,
        features: [
          `rendering`,
          `raytracing`,
          `materials`
        ]
      },
      {
        id: `2026-07-25-via-layer-spans-in-fab-export`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Fab export honors blind and buried via spans`,
        summary: `Gerber, Excellon and KiCad exports flashed and drilled every via on every copper layer, shorting any board with blind or buried vias.`,
        features: [
          `pcb`,
          `fabrication`,
          `gerber`,
          `excellon`,
          `kicad`
        ],
        mcpTools: [
          `export_gerber`,
          `export_kicad`,
          `fab_prep`,
          `validate_for_fab`
        ]
      },
      {
        id: `2026-07-25-structured-content-superset`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `MCP results no longer drop a tool's deliverable`,
        summary: `structuredContent was only the {document_id, document_version} preview handle, so hosts that render it hid real payloads \u2014 sheet_metal_unfold's flat pattern and DXF among them.`,
        features: [
          `mcp`,
          `sheet-metal`
        ],
        mcpTools: [
          `sheet_metal_unfold`,
          `sheet_metal_create`
        ]
      },
      {
        id: `2026-07-25-shell-and-booleans-on-filleted-solids`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Shelling and cutting a filleted solid no longer leaks`,
        summary: `Hollowing a filleted part scattered its cavity and a pocket cut collapsed the neighboring blends flat; both are now exact and watertight, and the kernel is reproducible run to run.`,
        features: [
          `kernel`,
          `fillet`,
          `shell`,
          `booleans`,
          `tessellation`
        ],
        mcpTools: [
          `create_cad_loon`,
          `inspect_cad`,
          `export_cad`
        ]
      },
      {
        id: `2026-07-25-router-window-repair-commit-parity`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Autoroute keeps window-repaired connections it used to drop`,
        summary: `The last-resort window repair now searches at the widest net-class width, merges stacked via barrels, and probes real drills, so routings it finds survive the commit.`,
        features: [
          `pcb`,
          `routing`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `run_drc`
        ]
      },
      {
        id: `2026-07-25-router-pair-connector-vias`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Autoroute no longer routes traces through diff-pair vias`,
        summary: `Differential-pair breakout vias were written onto the board but never registered with the router's clearance oracle, so later nets were routed straight through the barrel.`,
        features: [
          `pcb`,
          `routing`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `route_diff_pair`,
          `run_drc`
        ]
      },
      {
        id: `2026-07-25-router-diff-pair-si`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Differential pairs route coupled and length-matched`,
        summary: `Coupled pairs can now escape a BGA on an inner layer instead of failing outright, USB DP/DM pairs are recognized, and a finishing pass re-couples, descends and phase-compensates each pair so intra-pair skew lands inside the signal-integrity receipt's bounds.`,
        features: [
          `pcb`,
          `autorouter`,
          `diff-pairs`,
          `signal-integrity`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `route_diff_pair`,
          `run_drc`,
          `build_receipt`
        ]
      },
      {
        id: `2026-07-25-router-clears-same-net-bypasses`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Autorouter clears every same-net bypass it creates`,
        summary: `Post-route legalization repaired at most four violations per run and judged the board before dead copper was pruned; a path's own vias were never checked against each other.`,
        features: [
          `pcb`,
          `routing`,
          `drc`,
          `fab`
        ],
        mcpTools: [
          `route_nets`,
          `fab_prep`,
          `run_drc`
        ]
      },
      {
        id: `2026-07-25-render-canvas-aspect-and-trim`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `feat`,
        title: `vcad-render: non-square canvases, auto-aspect and trim`,
        summary: `--size now takes WxH, --auto-aspect fits the canvas to the projection, and --trim crops to the drawn content, so parts with a strong aspect ratio no longer waste most of the frame.`,
        features: [
          `rendering`,
          `cli`
        ]
      },
      {
        id: `2026-07-25-preview-payload-budget`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Large models preview instead of failing`,
        summary: `The inline 3D viewer now fits oversized preview geometry to a shared payload budget, so big assemblies render at reduced detail instead of showing "preview unavailable".`,
        features: [
          `viewer`,
          `mcp`
        ],
        mcpTools: [
          `get_preview_glb`
        ]
      },
      {
        id: `2026-07-25-physics-joint-axis-frame-leak`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Fix compounding pose error on non-Z joint axes`,
        summary: `Serial chains with X/Y revolute axes reported wrong link poses at zero angle; the axis-alignment rotation leaked into each child body frame and compounded with depth.`,
        features: [
          `physics`,
          `assembly`,
          `simulation`
        ],
        mcpTools: [
          `create_robot_env`,
          `gym_reset`,
          `gym_observe`,
          `gym_step`
        ]
      },
      {
        id: `2026-07-25-mcp-session-restart-visibility`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `MCP sessions survive restarts, and announce it when they can't`,
        summary: `Local MCP sessions now persist to disk, a lost session says so instead of looking like a typo or a broken renderer, and every result carries a restart signal.`,
        features: [
          `mcp`,
          `sessions`,
          `durability`,
          `preview`
        ],
        mcpTools: [
          `open_document`,
          `server_info`,
          `get_preview_glb`,
          `checkpoint_document`
        ]
      },
      {
        id: `2026-07-25-loon-modules-everywhere`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `feat`,
        title: `Multi-file loon projects, everywhere loon runs`,
        summary: `[use ...] now resolves in the browser and over MCP, not just on disk: pass modules by value or point create_cad_loon at a base_dir, and pub, aliasing and selective imports all work.`,
        features: [
          `loon`,
          `mcp`,
          `modules`
        ],
        mcpTools: [
          `create_cad_loon`
        ]
      },
      {
        id: `2026-07-25-kicad-export-design-rules`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `KiCad export carries the board's design rules`,
        summary: `Exported .kicad_pcb files now declare their own design constraints and net classes, so KiCad checks a board against the rules it was DRC'd under instead of its factory defaults \u2014 no more thousands of spurious annular-ring, drill and clearance violations.`,
        features: [
          `pcb`,
          `kicad`,
          `drc`,
          `fabrication`
        ],
        mcpTools: [
          `export_kicad`,
          `fab_prep`
        ]
      },
      {
        id: `2026-07-25-impedance-geometry-per-layer`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `feat`,
        title: `Controlled-impedance geometry solved per layer`,
        summary: `A net class can declare a target impedance and vcad derives the trace and diff-pair width per layer from the board stackup \u2014 microstrip on the outers, stripline on the inners \u2014 with the router preferring layers where the geometry is impedance-correct.`,
        features: [
          `pcb`,
          `autorouter`,
          `diff-pairs`,
          `signal-integrity`,
          `stackup`
        ],
        mcpTools: [
          `route_nets`,
          `set_design_rules`,
          `set_stackup`,
          `calc_impedance`,
          `build_receipt`
        ]
      },
      {
        id: `2026-07-25-gym-session-first`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `feat`,
        title: `Sim from a session id, not a re-sent document`,
        summary: `create_robot_env and batch_create_envs now take document_id, binding the env to the live session instead of a re-sent IR copy, and observations come back keyed by joint / instance id.`,
        features: [
          `physics`,
          `simulation`,
          `mcp`
        ],
        mcpTools: [
          `create_robot_env`,
          `batch_create_envs`,
          `gym_reset`,
          `gym_observe`,
          `gym_step`,
          `batch_reset`,
          `batch_step`
        ]
      },
      {
        id: `2026-07-25-gerber-pad-rotation`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Gerber export honours pad rotation`,
        summary: `Pads on rotated footprints are exported with the correct orientation; previously every non-square pad was flashed axis-aligned, shorting fine-pitch packages.`,
        features: [
          `pcb`,
          `gerber`,
          `fabrication`
        ],
        mcpTools: [
          `export_gerber`,
          `fab_prep`
        ]
      },
      {
        id: `2026-07-25-gerber-custom-pad-regions`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Custom polygon pads reach the Gerbers as real copper`,
        summary: `Custom-shaped pads were exported as a 0.1mm circle placeholder, silently shrinking thermal tabs, shielding paddles and stub antennas to a dot on the fabricated board.`,
        features: [
          `pcb`,
          `gerber`,
          `fabrication`
        ],
        mcpTools: [
          `export_gerber`,
          `validate_for_fab`
        ]
      },
      {
        id: `2026-07-25-fabprep-via-commit-parity`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `fab-prep no longer commits vias its oracle never saw`,
        summary: `The fab-prep router committed via barrels unprobed and unindexed, landing inner-layer shorts and hole-to-hole violations; every barrel is now probed and committed on all layers it spans, drill included.`,
        features: [
          `pcb`,
          `routing`,
          `drc`,
          `fab`
        ],
        mcpTools: [
          `fab_prep`,
          `run_drc`
        ]
      },
      {
        id: `2026-07-25-export-assemblies`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `export_cad exports assemblies`,
        summary: `Assembly documents (partDefs + instances) now export to STL and GLB \u2014 STL bakes world transforms, GLB keeps one named node per instance.`,
        features: [
          `assembly`,
          `export`
        ],
        mcpTools: [
          `export_cad`,
          `quote_manufacturing`
        ]
      },
      {
        id: `2026-07-25-em-saturated-picard`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `simulate_em solves strongly saturating magnetostatics`,
        summary: `Saturated motor cross-sections no longer fail with an unfixable 'Picard not converged': the nonlinear loop's cap, tolerance and relaxation are now caller-settable, and the default cap was raised.`,
        features: [
          `em`,
          `magnetostatics`,
          `motors`
        ],
        mcpTools: [
          `simulate_em`
        ]
      },
      {
        id: `2026-07-25-curved-trim-seams-weld`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `Bores and cut curved faces close their seams`,
        summary: `A through-hole left the shell open along the bore wall \u2014 visible as hairline cracks and unusable for 3D print or STL export; bores, holed plates and cut fillet corners now come out watertight.`,
        features: [
          `kernel`,
          `booleans`,
          `tessellation`,
          `export`
        ],
        mcpTools: [
          `create_cad_loon`,
          `inspect_cad`,
          `export_cad`
        ]
      },
      {
        id: `2026-07-25-calc-motor-tooth-saturation`,
        version: `0.9.4`,
        date: `2026-07-25`,
        category: `fix`,
        title: `calc_motor sees saturating stator teeth`,
        summary: `calc_motor's MEC model treated iron as linear and silently over-predicted Kt on machines whose teeth saturate; it now reports tooth flux, warns past the knee, and can solve the saturating network.`,
        features: [
          `motor`,
          `magnetics`,
          `simulation`
        ],
        mcpTools: [
          `calc_motor`
        ]
      },
      {
        id: `2026-07-24-visionos-app`,
        version: `0.9.4`,
        date: `2026-07-24`,
        category: `feat`,
        title: `vcad for Apple Vision Pro`,
        summary: `The full native editor ported to visionOS: documents float in a volume with the feature tree, inspector, tool palette, and AI composer around them.`,
        features: [
          `native`,
          `visionos`,
          `assembly`,
          `patterns`
        ]
      },
      {
        id: `2026-07-24-router-via-hole-to-hole`,
        version: `0.9.4`,
        date: `2026-07-24`,
        category: `fix`,
        title: `Autorouter enforces via hole-to-hole spacing`,
        summary: `route_nets' legality oracle now indexes drilled holes independently of copper, so two vias whose layer spans don't overlap can no longer be placed with colliding drills \u2014 the hole-to-hole rule is enforced at probe time, not found by a later DRC.`,
        features: [
          `pcb`,
          `autorouter`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `run_drc`,
          `validate_for_fab`
        ]
      },
      {
        id: `2026-07-24-router-prune-dangling-copper`,
        version: `0.9.4`,
        date: `2026-07-24`,
        category: `fix`,
        title: `Autorouter no longer leaves dead copper behind`,
        summary: `route_nets now prunes its own dangling copper before returning \u2014 traces and vias whose island reaches no pad and no pour, left over from rip-up \u2014 cutting the CM5 40-net route from 1292 to 789 segments with routability unchanged.`,
        features: [
          `pcb`,
          `autorouter`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `run_drc`
        ]
      },
      {
        id: `2026-07-24-router-negotiation-first-ordering`,
        version: `0.9.4`,
        date: `2026-07-24`,
        category: `perf`,
        title: `Autorouter routes large boards in minutes, not hours`,
        summary: `On layer-rich boards the GPU negotiator now takes the unrouted tail before the sequential CPU rescue arsenal, which fires once over its leftovers; the rip-up rounds it replaced are skipped and speculative rounds are budgeted against the baseline.`,
        features: [
          `pcb`,
          `autorouter`,
          `gpu`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-07-24-router-keepout-edge-clearance`,
        version: `0.9.4`,
        date: `2026-07-24`,
        category: `fix`,
        title: `Autorouter respects keepouts and board-edge clearance`,
        summary: `route_nets' legality oracle now indexes no-tracks keepouts and the board outline (incl. cutouts), so routes never cross keepouts or hug the edge inside edge_clearance; multi-round negotiation can no longer finish below the single-round baseline.`,
        features: [
          `pcb`,
          `autorouter`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `run_drc`,
          `validate_for_fab`
        ]
      },
      {
        id: `2026-07-24-router-drill-aware-vias-pad-layer-stubs`,
        version: `0.9.4`,
        date: `2026-07-24`,
        category: `fix`,
        title: `Router vias clear drills; stubs leave pads on the pad's layer`,
        summary: `The routing oracle now checks hole-to-hole spacing across layer spans (two vias on disjoint spans no longer collide in the drill file), probes a via barrel on every layer it spans, and can pin a connection's terminals so stubs leave a pad on a layer the pad is actually on instead of floating on an inner layer.`,
        features: [
          `pcb`,
          `autorouter`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `run_drc`,
          `validate_for_fab`
        ]
      },
      {
        id: `2026-07-24-router-copper-pour-synthesis`,
        version: `0.9.4`,
        date: `2026-07-24`,
        category: `feat`,
        title: `Autorouter pours planes for high-current nets`,
        summary: `route_nets now synthesizes copper pours for power nets instead of routing them as thin traces: it sizes current with the same IPC-2221 model as size_trace_for_current, floods a layer, and stitches every pad to the plane.`,
        features: [
          `pcb`,
          `autorouter`,
          `copper-pour`,
          `power-integrity`
        ],
        mcpTools: [
          `route_nets`,
          `size_trace_for_current`,
          `run_drc`,
          `validate_for_fab`
        ]
      },
      {
        id: `2026-07-24-lattice-gauge-mcp`,
        version: `0.9.4`,
        date: `2026-07-24`,
        category: `feat`,
        title: `Lattice gauge theory simulation`,
        summary: `New simulate_lattice_gauge tool: quenched SU(2)/SU(3) Monte Carlo \u2014 confinement, string tension, deconfinement, flux tubes and instantons, with jackknife error bars on every number.`,
        features: [
          `simulation`,
          `physics`
        ],
        mcpTools: [
          `simulate_lattice_gauge`
        ]
      },
      {
        id: `2026-07-24-flow-cfd-lbm`,
        version: `0.9.4`,
        date: `2026-07-24`,
        category: `feat`,
        title: `Laminar CFD: lattice-Boltzmann flow solver`,
        summary: `New simulate_flow tool: steady laminar D3Q19 LBM on a voxel grid with pressure drop, flow rates, mass audit, thermal pickup, and predicted vcad.flow-claims/1 receipts.`,
        features: [
          `flow`,
          `cfd`,
          `simulation`
        ],
        mcpTools: [
          `simulate_flow`
        ]
      },
      {
        id: `2026-07-24-fab-prep-drc-delta-receipt`,
        version: `0.9.4`,
        date: `2026-07-24`,
        category: `feat`,
        title: `One-command fab prep with a DRC-delta receipt`,
        summary: `vcad fab-prep (and the fab_prep MCP tool) takes a routed board to a complete Gerber package in one call: opt-in logged rule calibration, verdict ladder, strip-and-re-route fix loop, dangling-copper prune, and a receipt that separates route-attributable violations from the board's own baseline.`,
        features: [
          `pcb`,
          `drc`,
          `autorouter`,
          `fabrication`,
          `cli`
        ],
        mcpTools: [
          `fab_prep`,
          `validate_for_fab`,
          `export_gerber`
        ]
      },
      {
        id: `2026-07-23-router-post-route-legalization`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `fix`,
        title: `Autorouter no longer emits duplicate vias or self-shorts`,
        summary: `route_nets now legalizes its own output before returning: overlapping same-net vias are merged, redundant same-net bypass copper is pruned, and hole-to-hole legality is enforced fail-closed.`,
        features: [
          `pcb`,
          `autorouter`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `run_drc`
        ]
      },
      {
        id: `2026-07-23-router-pad-entry-neckdown`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `fix`,
        title: `Autorouter necks wide net classes into fine-pitch pads`,
        summary: `A net class wider than its target pad now necks down for the final pad approach instead of being silently unroutable, and a net that still fails names the pad-landing cause in its diagnostic.`,
        features: [
          `ecad`,
          `autorouter`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-07-23-route-nets-connectivity-guard`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `fix`,
        title: `route_nets connectivity guard + receipt no longer dropped`,
        summary: `route_nets now detects, retries/rolls back, and reports nets its re-route left in more disjoint copper groups; receipt:true survives large-board result slimming.`,
        features: [
          `pcb`,
          `autorouter`,
          `receipts`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-07-23-render-view-triangle-guard`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `fix`,
        title: `render_view refuses over-dense documents instead of crashing`,
        summary: `Documents tessellating past 120k triangles (e.g. large sphere patterns) now get an actionable error from render_view instead of OOM-killing the server with a >100 MB per-triangle SVG.`,
        features: [
          `render`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-07-23-plane-stitch-maze-rescue`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `fix`,
        title: `Plane stitching escapes boxed-in fine-pitch pads`,
        summary: `route_nets now maze-routes a bent escape to the plane when a fine-pitch pad can't take an at-pad or straight dog-bone stitching via, instead of reporting UnstitchedPad.`,
        features: [
          `pcb`,
          `autorouter`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `run_drc`
        ]
      },
      {
        id: `2026-07-23-placement-drc-always-returned`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `fix`,
        title: `place_components never drops its placement_drc verdict`,
        summary: `Slimmed inline-UI results now preserve placement_drc, warnings, and conflicts, and a dirty floorplan's next_actions say to fix placement before routing.`,
        features: [
          `pcb`,
          `ecad`
        ],
        mcpTools: [
          `place_components`,
          `set_placement`
        ]
      },
      {
        id: `2026-07-23-pcb-mutation-inline-preview`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `fix`,
        title: `Inline board preview after every PCB mutation`,
        summary: `route_nets, add_zone, and other copper mutations now attach the layered board GLB, so the inline widget no longer shows 'no geometry to preview' on board-only sessions.`,
        features: [
          `pcb`,
          `mcp-apps`,
          `preview`
        ],
        mcpTools: [
          `route_nets`,
          `add_zone`,
          `set_placement`,
          `set_board_outline`,
          `add_net_tie`,
          `delete_net_tie`,
          `add_via_array`,
          `route_diff_pair`,
          `length_match_traces`
        ]
      },
      {
        id: `2026-07-23-fix-drc-tool`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `feat`,
        title: `fix_drc: auto-apply the safe subset of DRC fixes`,
        summary: `One call runs DRC and applies only mechanically-safe fixes (stitching vias, via dedupe, edge nudges, per-net reroute), each delta-verified and reverted if it introduces anything new.`,
        features: [
          `pcb`,
          `drc`,
          `verification`
        ],
        mcpTools: [
          `fix_drc`
        ]
      },
      {
        id: `2026-07-23-ee-layout-lint`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `feat`,
        title: `Heuristic EE layout lint on placement`,
        summary: `placement_drc.layout_lint warns on crystals far from oscillator pins, distant decoupling caps, buried connectors, and high-current pads crowding USB/analog \u2014 with refs and distances.`,
        features: [
          `pcb`,
          `ecad`
        ],
        mcpTools: [
          `place_components`,
          `set_placement`
        ]
      },
      {
        id: `2026-07-23-design-constraints`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `feat`,
        title: `Design constraints: solver-enforced geometry, everywhere`,
        summary: `Document-level geometric constraints across PCB layout, sketches, and part edges \u2014 formula dimensions, driven measurements, receipt-verified, with a Constrain tool in the board editor.`,
        features: [
          `constraints`,
          `pcb`,
          `sketch`,
          `parametric`,
          `receipts`
        ],
        mcpTools: [
          `add_constraint`,
          `delete_constraint`,
          `list_constraints`,
          `solve_constraints`
        ]
      },
      {
        id: `2026-07-23-crystal-usb-htssop-footprints`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `feat`,
        title: `Crystal, USB micro-B, and HTSSOP PowerPad footprints`,
        summary: `The parametric footprint engine now resolves SMD crystals (5032/6035 2-pad, 3225/2520 4-pad), USB micro-B receptacles, and HTSSOP/TSSOP-EP packages with their exposed thermal pad.`,
        features: [
          `pcb`,
          `footprints`,
          `crystal`,
          `usb`,
          `htssop`
        ],
        mcpTools: [
          `search_footprints`,
          `list_footprints`,
          `create_schematic`,
          `place_components`
        ]
      },
      {
        id: `2026-07-23-artifact-url-404`,
        version: `0.9.4`,
        date: `2026-07-23`,
        category: `fix`,
        title: `Artifact links no longer 404`,
        summary: `mcp.vcad.io artifact URLs (render PNGs, fab bundles) now survive across serverless instances, and a local MCP server no longer mints absolute hosted URLs it cannot serve.`,
        features: [
          `mcp`,
          `artifacts`
        ],
        mcpTools: [
          `render_pcb`,
          `render_view`,
          `export_gerber`,
          `export_cad`
        ]
      },
      {
        id: `2026-07-22-pcb-widget-inline-preview`,
        version: `0.9.4`,
        date: `2026-07-22`,
        category: `fix`,
        title: `PCB widget shows the placed board in every host`,
        summary: `place_components and other mount tools now always carry an inline preview GLB, so the viewer widget renders the board instead of 'no geometry to preview' in hosts like Claude Code.`,
        features: [
          `mcp-viewer`,
          `pcb`
        ],
        mcpTools: [
          `place_components`,
          `get_preview_glb`
        ]
      },
      {
        id: `2026-07-22-kicad-symbol-artwork`,
        version: `0.9.4`,
        date: `2026-07-22`,
        category: `feat`,
        title: `Exported schematics draw real symbol artwork`,
        summary: `export_kicad now emits proper KiCad symbols for resistors, capacitors (incl. polarized), diodes, LEDs, inductors, and transistors instead of a generic rectangle for every part.`,
        features: [
          `kicad`,
          `schematic`,
          `pcb`
        ],
        mcpTools: [
          `export_kicad`
        ]
      },
      {
        id: `2026-07-22-kicad-sch-on-grid`,
        version: `0.9.4`,
        date: `2026-07-22`,
        category: `fix`,
        title: `Exported schematic pins land on KiCad's wiring grid`,
        summary: `Synthesized .kicad_sch sheets now snap component positions to the 1.27 mm connection grid, so pins can be wired by hand in KiCad instead of tripping its off-grid endpoint warning.`,
        features: [
          `ecad`,
          `kicad-export`
        ],
        mcpTools: [
          `export_kicad`
        ]
      },
      {
        id: `2026-07-22-kicad-sch-export-netlist`,
        version: `0.9.4`,
        date: `2026-07-22`,
        category: `fix`,
        title: `KiCad schematic export carries the netlist`,
        summary: `Schematics authored via create_schematic now export with usable symbol bodies and wire-plus-global-label connectivity, so KiCad 9 sees the nets instead of an empty sheet.`,
        features: [
          `pcb`,
          `kicad`,
          `export`
        ],
        mcpTools: [
          `export_kicad`,
          `create_schematic`
        ]
      },
      {
        id: `2026-07-22-kicad-sch-auto-layout`,
        version: `0.9.4`,
        date: `2026-07-22`,
        category: `feat`,
        title: `Readable KiCad schematic export layout`,
        summary: `Exported .kicad_sch sheets whose components were dropped on a naive grid now get a deterministic signal-flow layout with on-grid, non-overlapping symbols and net-label stubs on every declared pin.`,
        features: [
          `ecad`,
          `pcb`,
          `kicad`
        ],
        mcpTools: [
          `export_kicad`,
          `create_schematic`
        ]
      },
      {
        id: `2026-07-22-kicad-project-bundle`,
        version: `0.9.4`,
        date: `2026-07-22`,
        category: `feat`,
        title: `Linked KiCad project bundle export`,
        summary: `export_kicad with a .kicad_pro filename (or bare name) now emits a linked project \u2014 .kicad_pro + .kicad_sch + .kicad_pcb with cross-probe symbol\u2194footprint paths.`,
        features: [
          `pcb`,
          `export`,
          `kicad`
        ],
        mcpTools: [
          `export_kicad`
        ]
      },
      {
        id: `2026-07-20-release-to-desktop`,
        version: `0.9.4`,
        date: `2026-07-20`,
        category: `feat`,
        title: `Release to Desktop mode in the macOS app`,
        summary: `Parts float directly over the desktop with studio-parity floating tool windows: palette, object inspector, feature tree, click-to-select, zebra analysis.`,
        features: [
          `native`,
          `macos`,
          `viewport`
        ]
      },
      {
        id: `2026-07-20-mcp-session-first-fixes`,
        version: `0.9.4`,
        date: `2026-07-20`,
        category: `fix`,
        title: `MCP session-first workflow fixes`,
        summary: `create_cad_loon and open_in_browser now accept document_id, save_document rejects empty names, and the CoM-vs-pattern-axis warning no longer fires on multi-part assemblies.`,
        features: [
          `mcp`,
          `sessions`,
          `integrity`
        ],
        mcpTools: [
          `create_cad_loon`,
          `open_in_browser`,
          `save_document`
        ]
      },
      {
        id: `2026-07-20-edge-selection-highlight`,
        version: `0.9.4`,
        date: `2026-07-20`,
        category: `feat`,
        title: `Selection reads as orange feature-edge highlighting`,
        summary: `Selected and hovered parts now light up with brand-orange feature-edge lines (silhouettes, hole rims, ribs) instead of a material tint, in both the web viewport and the native macOS app.`,
        features: [
          `viewport`,
          `selection`,
          `native`
        ]
      },
      {
        id: `2026-07-19-viewport-picking-parity`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `fix`,
        title: `Viewport picking parity with the native app`,
        summary: `Brand-orange hover/selection accents, \u2318-click part multi-select, gizmo-protected clicks, pointer cursor, and correct picking when parts are hidden.`,
        features: [
          `viewport`,
          `selection`,
          `picking`
        ]
      },
      {
        id: `2026-07-19-transient-thermal`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `feat`,
        title: `Transient thermal solves with drive schedules`,
        summary: `solve_thermal gains a transient mode: backward-Euler time stepping over piecewise-constant schedules (RTP ramp/soak/cool, ambient steps), returning T_max time series and a run-integrated energy audit.`,
        features: [
          `thermal`,
          `simulation`,
          `receipts`
        ],
        mcpTools: [
          `solve_thermal`
        ]
      },
      {
        id: `2026-07-19-robot-sim-stability`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `fix`,
        title: `Stable position/velocity control in physics sim`,
        summary: `gym_step position/velocity actions no longer explode on mm-scale assemblies \u2014 servo gains now scale to each joint's measured inertia; sim viewer shows the articulated rest pose and record_simulation returns partial GIFs instead of timing out.`,
        features: [
          `physics`,
          `simulation`,
          `gym`
        ],
        mcpTools: [
          `gym_step`,
          `create_robot_env`,
          `record_simulation`
        ]
      },
      {
        id: `2026-07-19-raytrace-disc-caps`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `fix`,
        title: `Ray-traced disc caps no longer vanish`,
        summary: `Cylinder/cone cap faces (planes bounded by a single full-circle edge) rendered as a thin crescent rim in raytrace mode; the circular trim boundary is now reconstructed on both GPU and CPU paths.`,
        features: [
          `raytrace`,
          `kernel`
        ]
      },
      {
        id: `2026-07-19-raytrace-cylinder-wall-clamp`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `fix`,
        title: `Ray-traced cylinder walls no longer render elongated`,
        summary: `Full cylinder/cone walls (e.g. rotated discs like a flywheel) traced as infinite tubes in raytrace mode; their height is now clamped correctly on both GPU and CPU paths.`,
        features: [
          `raytrace`,
          `kernel`
        ]
      },
      {
        id: `2026-07-19-raytrace-assemblies`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `fix`,
        title: `Ray-traced mode poses assemblies and keeps per-part materials`,
        summary: `Assembly instances are now FK-posed in ray-traced rendering (they piled up unposed at the origin) and each part keeps its own material instead of the whole scene inheriting the first part's.`,
        features: [
          `raytracing`,
          `assemblies`,
          `materials`
        ]
      },
      {
        id: `2026-07-19-native-usdz-export`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `feat`,
        title: `Native macOS app: USDZ export`,
        summary: `File > Export USDZ in the native app \u2014 per-part colors/materials at physical millimeter scale, Quick Look and AR ready.`,
        features: [
          `native-app`,
          `export`,
          `usdz`
        ]
      },
      {
        id: `2026-07-19-native-pattern-instancing`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `perf`,
        title: `Native app renders patterns as shared-mesh instances`,
        summary: `Linear/circular pattern parts in the macOS app now tessellate the seed once and render N transformed instances, instead of N unioned tessellations.`,
        features: [
          `native-app`,
          `patterns`,
          `viewport`
        ]
      },
      {
        id: `2026-07-19-kinematic-joint-playback`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `feat`,
        title: `Kinematic joint playback: keyframes without physics`,
        summary: `animate/render_sequence/export_video accept time-major joint keyframes \u2014 servo-style commanded motion posed exactly, no gravity; export_video gains render_view's azimuth/elevation camera.`,
        features: [
          `animation`,
          `assembly`,
          `joints`
        ],
        mcpTools: [
          `animate`,
          `render_sequence`,
          `export_video`
        ]
      },
      {
        id: `2026-07-19-joint-motor-drive`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `feat`,
        title: `Motor drive for joints in Simulate mode`,
        summary: `Set a target velocity on any joint in the property panel and press Play \u2014 the physics sim drives the motor, so cranks and flywheels actually spin.`,
        features: [
          `physics`,
          `simulation`,
          `joints`
        ]
      },
      {
        id: `2026-07-19-joint-limits-shadows`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `fix`,
        title: `Joint limits enforced in sim; scene-fit soft shadows`,
        summary: `Unactuated joints no longer free-fall through their stops (a piston could end up 400m below the floor); shadow cameras now fit the scene instead of a fixed 100mm box, with soft shadows on.`,
        features: [
          `physics`,
          `simulation`,
          `rendering`
        ]
      },
      {
        id: `2026-07-19-joint-fk-contract`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `fix`,
        title: `Joints fully place their children \u2014 no more double-offset`,
        summary: `A jointed instance with its own transform set to the joint-anchor location was placed twice as far away; joints now fully determine child poses across render, engine, and physics.`,
        features: [
          `assemblies`,
          `joints`,
          `kinematics`
        ]
      },
      {
        id: `2026-07-19-fixed-joint-sim-trap`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `fix`,
        title: `Fixed joints no longer crash physics simulation`,
        summary: `create_robot_env/record_simulation trapped on documents with Fixed joints; they now weld child to parent and are excluded from action_dim.`,
        features: [
          `physics`,
          `assembly`,
          `joints`
        ],
        mcpTools: [
          `create_robot_env`,
          `record_simulation`,
          `gym_step`
        ]
      },
      {
        id: `2026-07-19-animation-timeline-player`,
        version: `0.9.4`,
        date: `2026-07-19`,
        category: `feat`,
        title: `Animation timeline playback in the app`,
        summary: `Documents with an animation timeline get a transport bar \u2014 play/scrub/loop/speed drive joint tracks through FK (Space toggles play); timelines now survive the CRDT round-trip and deep links.`,
        features: [
          `animation`,
          `timeline`,
          `assemblies`
        ],
        mcpTools: [
          `animate`
        ]
      },
      {
        id: `2026-07-18-version-timeline`,
        version: `0.9.4`,
        date: `2026-07-18`,
        category: `feat`,
        title: `Version timeline with semantic diff & merge`,
        summary: `History sidebar shows feature-level diffs per version, red/green before-after ghosting, restore with undo, and branch + three-way merge-back with conflict resolution.`,
        features: [
          `version-history`,
          `semantic-diff`,
          `merge`,
          `collaboration`
        ]
      },
      {
        id: `2026-07-18-typst-plugin`,
        version: `0.9.4`,
        date: `2026-07-18`,
        category: `feat`,
        title: `Typst plugin: CAD rendered and measured in documents`,
        summary: `New Typst WASM plugin renders .vcad/loon models to drafting views and sheets, and exposes exact measurements and compile-time assertions inside Typst documents.`,
        features: [
          `typst`,
          `render`,
          `drafting`,
          `loon`,
          `verification`
        ]
      },
      {
        id: `2026-07-18-shop-ready-drawings`,
        version: `0.9.4`,
        date: `2026-07-18`,
        category: `feat`,
        title: `Shop-ready drawings: sections, title block, BOM, PDF`,
        summary: `Drawing mode gains offset section views, a title block editor, BOM table placement, and kernel-rendered PDF export from the toolbar, File menu, and command palette.`,
        features: [
          `drafting`,
          `drawing`,
          `pdf`,
          `sections`,
          `bom`
        ],
        mcpTools: []
      },
      {
        id: `2026-07-18-shaded-render-style`,
        version: `0.9.4`,
        date: `2026-07-18`,
        category: `feat`,
        title: `Shaded render style with full material colors`,
        summary: `render_view accepts style: 'shaded' to render parts in their full assigned material colors instead of the navy drafting look; unknown styles and unknown tool arguments now error instead of being silently ignored.`,
        features: [
          `render`,
          `materials`,
          `mcp`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-07-18-schematic-circuit-analysis`,
        version: `0.9.4`,
        date: `2026-07-18`,
        category: `feat`,
        title: `Circuit analysis in the schematic editor`,
        summary: `Analyze runs DC operating point + Bode sweep on your schematic; right-click a component to tune it to a cutoff/Q or DC target, with fail-closed blocker reporting.`,
        features: [
          `electronics`,
          `schematic`,
          `simulation`,
          `differentiable`
        ],
        mcpTools: []
      },
      {
        id: `2026-07-18-clearance-touching-verdict`,
        version: `0.9.4`,
        date: `2026-07-18`,
        category: `feat`,
        title: `check_clearance touching verdict and allowed contact`,
        summary: `check_clearance reports a clear/touching/intersecting verdict and accepts allow_contact for parts designed to touch (e.g. bolted flush); allowed contact persists on labeled specs and is honored by receipt verification.`,
        features: [
          `clearance`,
          `receipts`,
          `mcp`
        ],
        mcpTools: [
          `check_clearance`
        ]
      },
      {
        id: `2026-07-18-clearance-boolean-getdoc-ir`,
        version: `0.9.4`,
        date: `2026-07-18`,
        category: `fix`,
        title: `check_clearance allow_contact and get_document IR reliability`,
        summary: `check_clearance now honors allow_contact (and render_view's axes/labels/dims/highlight_changed) even when a client serializes booleans as strings, and get_document returns the full IR in structuredContent so clients that surface it no longer see only a {document_id} stub.`,
        features: [
          `clearance`,
          `render`,
          `mcp`
        ],
        mcpTools: [
          `check_clearance`,
          `render_view`,
          `get_document`
        ]
      },
      {
        id: `2026-07-18-chat-mcp-tool-parity`,
        version: `0.9.4`,
        date: `2026-07-18`,
        category: `feat`,
        title: `Chat assistant gains the MCP solver tool surface`,
        summary: `In-app chat can now run inspect_cad, measure, check_clearance, dfm_check, analyze_structure, topology_optimize and more \u2014 with receipt chips, a viewport min-distance line, and undoable results.`,
        features: [
          `chat`,
          `mcp`,
          `verification`,
          `topology-optimization`
        ],
        mcpTools: [
          `inspect_cad`,
          `measure`,
          `check_clearance`,
          `dfm_check`,
          `analyze_structure`,
          `topology_optimize`,
          `analyze_tolerance_stackup`,
          `solve_thermal`,
          `predict_print`,
          `predict_physics`
        ]
      },
      {
        id: `2026-07-18-assembly-measure-integrity`,
        version: `0.9.4`,
        date: `2026-07-18`,
        category: `fix`,
        title: `Assemblies are first-class in measure and mutation stats`,
        summary: `measure, inspect_part, and describe_scene now resolve assembly instances (matching check_clearance), and mutation integrity reports include instance geometry \u2014 a 44-instance assembly no longer reports parts: 0, volume: 0.`,
        features: [
          `assembly`,
          `measure`,
          `mcp`
        ],
        mcpTools: [
          `measure`,
          `inspect_part`,
          `describe_scene`,
          `create_cad_loon`
        ]
      },
      {
        id: `2026-07-18-analyze-mode`,
        version: `0.9.4`,
        date: `2026-07-18`,
        category: `feat`,
        title: `Unified Analyze mode: FEA + tolerance studies`,
        summary: `New Analyze panel runs structural FEA and tolerance stackup studies in a worker, paints stress/displacement on the mesh, and shows a mandatory receipt claim status on every result.`,
        features: [
          `analyze`,
          `fea`,
          `tolerance`,
          `receipts`
        ]
      },
      {
        id: `2026-07-17-transient-adjoint`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Circuit sim: transient adjoint gradients`,
        summary: `d(time-domain objective)/d(R, L, C, sources) by reverse sweep over the transient \u2014 step-response shaping and waveform tracking are now differentiable (linear circuits, both integrators).`,
        features: [
          `circuit`,
          `adjoint`,
          `differentiable`
        ]
      },
      {
        id: `2026-07-17-topological-naming`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Persistent topological naming for edge references`,
        summary: `Fillets can reference edges by stable face names (EdgeQuery Named) that survive upstream parameter changes; unresolvable references fail closed instead of guessing.`,
        features: [
          `kernel`,
          `brep`,
          `fillet`,
          `parametric`
        ]
      },
      {
        id: `2026-07-17-tolerance-stackup`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Tolerance stackups: WC/RSS/MC with exact sensitivities`,
        summary: `New vcad-kernel-tolerance crate: worst-case, RSS, seeded Monte Carlo stack analysis with closed-form sensitivities, GD&T gauged fits, min-cost allocation, and predicted-basis vcad.tolerance-claims/1.`,
        features: [
          `tolerance`,
          `stackup`,
          `gdt`,
          `monte-carlo`,
          `receipts`
        ]
      },
      {
        id: `2026-07-17-thermal-conduction`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Thermal analysis: voxel heat conduction with adjoint`,
        summary: `New vcad-kernel-thermal crate: steady + transient voxel conduction (FV + PCG), one-extra-solve adjoint gradients, fail-closed vcad.thermal-claims/1. Conduction only; convection is a supplied film h.`,
        features: [
          `thermal`,
          `fea`,
          `adjoint`,
          `receipts`
        ]
      },
      {
        id: `2026-07-17-structural-fea`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Structural FEA with convergence-gated claims`,
        summary: `analyze_structure runs static FEA on a part's real geometry \u2014 max stress, displacement, and safety factor, fail-closed Unverifiable unless the mesh study converges.`,
        features: [
          `fea`,
          `simulation`,
          `receipts`
        ],
        mcpTools: [
          `analyze_structure`
        ]
      },
      {
        id: `2026-07-17-solver-mcp-wave-2`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Six physics solvers land as MCP tools`,
        summary: `EM, photonics, antenna, thermal, neutronics, and tolerance-stackup solvers are now callable by AI agents over MCP, each returning predicted claim sets that roll up Provisional on the unified receipt.`,
        features: [
          `em`,
          `photonics`,
          `antenna`,
          `thermal`,
          `neutronics`,
          `tolerance`,
          `receipts`,
          `mcp`
        ],
        mcpTools: [
          `simulate_em`,
          `simulate_photonics`,
          `analyze_antenna`,
          `solve_thermal`,
          `simulate_neutron_shield`,
          `analyze_tolerance_stackup`
        ]
      },
      {
        id: `2026-07-17-semantic-diff-merge`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Semantic diff and merge for .vcad files`,
        summary: `vcad diff and vcad merge compare documents at the feature level (id-matched nodes, parameters, joints) and three-way merge with fail-closed conflict reports \u2014 git for CAD.`,
        features: [
          `cli`,
          `diff`,
          `merge`,
          `version-control`
        ]
      },
      {
        id: `2026-07-17-photonics-inverse-design`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Photonics inverse design: 2D FDTD + adjoint to fab-ready GDS`,
        summary: `New vcad-kernel-photonics crate: validated 2D FDTD with discrete-adjoint topology optimization; the flagship inverse-designed 1x2 splitter hits 3.01 dB/arm and exports as GDS with receipt claims.`,
        features: [
          `photonics`,
          `fdtd`,
          `adjoint`,
          `inverse-design`,
          `gds`,
          `receipts`
        ]
      },
      {
        id: `2026-07-17-particle-optics`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Charged-particle optics: IEC fusor sim with adjoint`,
        summary: `New vcad-kernel-particle crate: axisym Poisson + ring-coil B + Boris tracing + Bosch-Hale D-D yield, discrete adjoint FD-validated 0.1-0.8%; vcad.particle-claims/1 rolls up Provisional until measured.`,
        features: [
          `particle`,
          `iec-fusion`,
          `adjoint`,
          `receipts`
        ]
      },
      {
        id: `2026-07-17-particle-mcp-tools`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `MCP: simulate_charged_particles, optimize_electrodes`,
        summary: `Charged-particle optics via MCP: simulate_charged_particles traces deuteron ensembles and emits predicted-basis claims inline; optimize_electrodes runs a multi-start yield search over electrode specs.`,
        features: [
          `particle`,
          `mcp`,
          `receipts`
        ],
        mcpTools: [
          `simulate_charged_particles`,
          `optimize_electrodes`
        ]
      },
      {
        id: `2026-07-17-neutronics-shielding`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Neutronics: Monte Carlo shielding and dose`,
        summary: `New vcad-kernel-neutronics crate: 5-group analog MC neutron transport, exact elastic kinematics, H*(10) dose, adjoint-diffusion gradients, fail-closed vcad.neutronics-claims/1. No fission, ever.`,
        features: [
          `neutronics`,
          `monte-carlo`,
          `shielding`,
          `dose`,
          `receipts`
        ]
      },
      {
        id: `2026-07-17-fillet-hardening`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `fix`,
        title: `Fillet hardening: correct non-orthogonal blends, no bad output`,
        summary: `Fillets on wedges, prisms, and chamfered solids are now watertight; infeasible radii and cracked rebuilds fail soft instead of emitting broken geometry.`,
        features: [
          `fillet`,
          `chamfer`,
          `kernel`
        ]
      },
      {
        id: `2026-07-17-em-field-solver`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `EM field solver: magnetostatics + electrostatics`,
        summary: `New vcad-kernel-em crate: axisymmetric/planar magnetostatics and electrostatics on one finite-volume core, every QoI computed by two routes with the gap reported, discrete adjoint, vcad.em-claims/1.`,
        features: [
          `em`,
          `magnetostatics`,
          `electrostatics`,
          `adjoint`,
          `receipts`
        ]
      },
      {
        id: `2026-07-17-drafting-shop-ready`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Shop-ready 2D drawings: sections, title blocks, PDF`,
        summary: `Offset section views with hatching and cutting-plane callouts, detail bubbles with scale, title block/revision table/BOM entities, ANSI line weights, and deterministic PDF + DXF sheet export.`,
        features: [
          `drafting`,
          `sections`,
          `pdf-export`,
          `dxf-export`,
          `bom`
        ]
      },
      {
        id: `2026-07-17-differentiable-circuit-sim`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Differentiable circuit simulation (DC, AC, adjoints)`,
        summary: `Circuit sim gains DC operating point, trapezoidal accuracy, AC analysis, and exact adjoint sensitivities d(output)/d(every component) with fail-closed receipts.`,
        features: [
          `circuit`,
          `simulation`,
          `adjoint`,
          `receipts`
        ]
      },
      {
        id: `2026-07-17-circuit-transistors`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Transistors in the circuit simulator`,
        summary: `Level-1 MOSFET (Shichman-Hodges) and Ebers-Moll BJT models, both polarities, in transient, DC, AC, and adjoint-sensitivity analyses; the AC diode sensitivity placeholder is now computed.`,
        features: [
          `circuit-sim`,
          `mosfet`,
          `bjt`,
          `adjoint`,
          `ecad`
        ]
      },
      {
        id: `2026-07-17-circuit-tolerance-yield`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Circuit tolerance-yield bridge`,
        summary: `Component-tolerance yield of a circuit: adjoint-linearized WC/RSS via the stackup engine, solver-in-the-loop Monte Carlo check, and min-cost tolerance allocation.`,
        features: [
          `circuit`,
          `simulation`,
          `tolerance`,
          `yield`
        ]
      },
      {
        id: `2026-07-17-circuit-netlist-seam`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Schematics simulate directly: netlist-to-circuit seam`,
        summary: `Schematics from create_schematic convert to simulatable circuits (DC/AC/adjoint) with SI value parsing and fail-closed errors for unmappable components.`,
        features: [
          `circuit-simulation`,
          `ecad`,
          `schematic`
        ]
      },
      {
        id: `2026-07-17-circuit-mcp-tools`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Circuit simulation and adjoint tuning over MCP`,
        summary: `Agents can now run SPICE-style DC/AC/transient analyses on netlists-as-data and tune component values toward filter or DC targets with adjoint gradients, with vcad.spice-claims/1 receipts and the power-balance residual as the honesty signal.`,
        features: [
          `circuit`,
          `spice`,
          `adjoint`,
          `receipts`,
          `mcp`
        ],
        mcpTools: [
          `simulate_circuit`,
          `tune_circuit`
        ]
      },
      {
        id: `2026-07-17-circuit-adaptive-dt`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Adaptive timestep control for circuit simulation`,
        summary: `Opt-in LTE-based adaptive stepping: stiff circuits solve in ~1000x fewer steps at equal accuracy, with Newton-failure rescue; fixed-step default unchanged.`,
        features: [
          `circuit`,
          `simulation`,
          `ecad`
        ]
      },
      {
        id: `2026-07-17-antenna-mom`,
        version: `0.9.4`,
        date: `2026-07-17`,
        category: `feat`,
        title: `Antenna solver: thin-wire MoM Z_in, S11, and gain`,
        summary: `New vcad-kernel-antenna crate: thin-wire EFIE MoM within 4% of NEC-2 references, fail-closed outside the thin-wire regime, adjoint impedance gradients, NanoVNA measurement pack, vcad.antenna-claims/1.`,
        features: [
          `antenna`,
          `mom`,
          `rf`,
          `adjoint`,
          `receipts`
        ]
      },
      {
        id: `2026-07-15-vcad-render-raytrace`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `Ray-traced renders in vcad-render`,
        summary: `vcad-render gains --raytrace (plus --png output): pixel-perfect direct BRep ray tracing with exact curved silhouettes, in the same views and vcad-Blue style as the tessellated path.`,
        features: [
          `render`,
          `raytrace`,
          `cli`
        ]
      },
      {
        id: `2026-07-15-vcad-render-cli-batch`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `vcad-render CLI: -o output, batch mode, --help`,
        summary: `The vcad-render CLI gains -o with extension-driven format, batch rendering of multiple files or a directory with --out-dir/--format, and proper --help.`,
        features: [
          `render`,
          `cli`
        ]
      },
      {
        id: `2026-07-15-section-views`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `Section (cutaway) views in vcad-render`,
        summary: `vcad-render --section x=N|y=N|z=N cuts the document by an axis-aligned plane and cross-hatches the exposed faces drafting-style; also available via render_view's new section param.`,
        features: [
          `rendering`,
          `section-views`,
          `drafting`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-07-15-render-view-highlight`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `Changed-part highlighting in render_view`,
        summary: `render_view can spotlight parts: highlight_changed renders the parts touched by the last edit with full color and a brand-orange accent outline while unchanged parts are ghosted; explicit ids via highlight.`,
        features: [
          `rendering`,
          `agent-loop`,
          `highlight`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-07-15-render-png-alpha`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `PNG output with transparent background in vcad-render`,
        summary: `vcad-render can now emit RGBA PNGs with a fully transparent background (-o out.png or --format png), defaulting to 4096px with resolution-scaled line weight and finer curve tessellation.`,
        features: [
          `render`,
          `png`,
          `cli`
        ]
      },
      {
        id: `2026-07-15-render-orbit-camera`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `Arbitrary orbit camera and part focus for renders`,
        summary: `render_view (and the vcad-render CLI) now accept azimuth/elevation angles for any orthographic orbit view, plus a focus parameter that frames the render on a named part's bounding box.`,
        features: [
          `rendering`,
          `agent-eyes`,
          `camera`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-07-15-render-exact-edges`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `BRep-exact SVG linework in vcad-render`,
        summary: `New --exact-edges flag renders circular edges (cylinder/cone rims, drilled holes) and sphere outlines as mathematically exact SVG elliptical arcs instead of tessellated polylines \u2014 no faceting at any zoom.`,
        features: [
          `render`,
          `svg`,
          `brep`,
          `exact-edges`
        ]
      },
      {
        id: `2026-07-15-render-drawing-sheet`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `Multi-view drawing sheets in vcad-render`,
        summary: `vcad-render --sheet lays out front, side, top, and isometric views in third-angle arrangement at one shared scale, with captions and a title block, as SVG or JPEG.`,
        features: [
          `render`,
          `drafting`,
          `drawing-sheet`
        ]
      },
      {
        id: `2026-07-15-render-annotations`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `Annotated renders: axes, part labels, dimensions`,
        summary: `render_view and the vcad-render CLI can overlay an X/Y/Z origin gizmo, part-name labels, and overall W\xD7D\xD7H mm dimensions on SVG and JPEG renders.`,
        features: [
          `render`,
          `annotations`,
          `agent-eyes`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-07-15-nlayer-autorouter`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `N-layer autorouting with in-search vias`,
        summary: `route_nets now searches all copper layers at once \u2014 the 3D A* places vias mid-route where they help, honors up to 10-layer stackups (In7/In8 added), and takes an effort knob to scale iteration budgets on congested boards.`,
        features: [
          `ecad`,
          `routing`,
          `multilayer`,
          `autorouter`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-07-15-drc-large-board-scaling`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `fix`,
        title: `DRC and describe_pcb scale to large imported boards`,
        summary: `run_drc/describe_pcb on dense imported KiCad boards (10 layers, 100+ zones) now finish in seconds instead of crashing the MCP server after ~17 minutes.`,
        features: [
          `pcb`,
          `drc`,
          `import`
        ],
        mcpTools: [
          `run_drc`,
          `describe_pcb`,
          `import_kicad`,
          `export_gerber`
        ]
      },
      {
        id: `2026-07-15-animation-timeline-video`,
        version: `0.9.4`,
        date: `2026-07-15`,
        category: `feat`,
        title: `Animation timeline + verified video rendering`,
        summary: `Documents carry a keyframed timeline (params, joints, visibility, camera shots); animate/render_sequence/export_video emit animated GLB and GIF/MP4 with per-frame clearance verification.`,
        features: [
          `animation`,
          `timeline`,
          `video`,
          `verification`,
          `assembly`
        ],
        mcpTools: [
          `animate`,
          `timeline_from_simulation`,
          `render_sequence`,
          `export_video`
        ]
      },
      {
        id: `2026-07-13-length-match-traces`,
        version: `0.9.4`,
        date: `2026-07-13`,
        category: `feat`,
        title: `Length matching for PCB traces`,
        summary: `New length_match_traces tool grows shorter nets in a match group with clearance-checked trombone/sawtooth meanders until they match the longest net (or a target) within tolerance.`,
        features: [
          `ecad`,
          `routing`,
          `length-matching`
        ],
        mcpTools: [
          `length_match_traces`
        ]
      },
      {
        id: `2026-07-13-kernel-features-page`,
        version: `0.9.4`,
        date: `2026-07-13`,
        category: `docs`,
        title: `Kernel features catalog on the docs site`,
        summary: `New architecture page cataloging every kernel capability, illustrated with renders generated by the kernel itself.`,
        features: [
          `docs`,
          `kernel`
        ]
      },
      {
        id: `2026-07-12-assembly-see-measure`,
        version: `0.9.4`,
        date: `2026-07-12`,
        category: `fix`,
        title: `Assemblies render, preview, and inspect`,
        summary: `Assembly-only documents (partDefs + instances) now work across render_view, the inline 3D preview, and inspect_cad instead of reporting no geometry.`,
        features: [
          `assembly`,
          `render`,
          `mcp`
        ],
        mcpTools: [
          `render_view`,
          `inspect_cad`,
          `create_cad_loon`
        ]
      },
      {
        id: `2026-07-11-receipt-claim-basis`,
        version: `0.9.4`,
        date: `2026-07-11`,
        category: `feat`,
        title: `Receipts distinguish predicted, verified, and measured claims`,
        summary: `Claims now carry a basis (predicted/verified/measured); receipts passing only on surrogate predictions roll up as provisional, never pass.`,
        features: [
          `receipt`,
          `verification`
        ],
        mcpTools: [
          `build_receipt`,
          `verify_receipt`,
          `verify_spec`
        ]
      },
      {
        id: `2026-07-11-predict-physics`,
        version: `0.9.4`,
        date: `2026-07-11`,
        category: `feat`,
        title: `predict_physics: two-tier static FEA with honest receipts`,
        summary: `Fast voxel FEA (displacement, von Mises stress, compliance) in ~100ms; predict-tier claims are basis=predicted and roll up provisional, verify-tier certifies with the same solver.`,
        features: [
          `physics`,
          `verification`,
          `receipt`
        ],
        mcpTools: [
          `predict_physics`
        ]
      },
      {
        id: `2026-07-11-native-document-parameters`,
        version: `0.9.4`,
        date: `2026-07-11`,
        category: `feat`,
        title: `Native app: live document-parameter scrubbing`,
        summary: `The Mac app's inspector now lists any .vcad's named parameters as scrub fields \u2014 dragging one re-solves every bound node live, generalizing the parametric scrub beyond the gripper demo.`,
        features: [
          `native-app`,
          `parameters`,
          `inspector`
        ]
      },
      {
        id: `2026-07-11-loon-macro-library`,
        version: `0.9.4`,
        date: `2026-07-11`,
        category: `feat`,
        title: `Agent macro library: define_loon / call_loon / use_loons`,
        summary: `Agents can define reusable parametric loon macros (smoke-tested at definition time), instantiate them with call_loon, and compose them inside any create_cad_loon program.`,
        features: [
          `loon`,
          `macros`,
          `agents`
        ],
        mcpTools: [
          `define_loon`,
          `call_loon`,
          `list_loons`,
          `create_cad_loon`
        ]
      },
      {
        id: `2026-07-11-commerce-trust-boundary`,
        version: `0.9.4`,
        date: `2026-07-11`,
        category: `feat`,
        title: `Injection-confined ordering: commerce trust boundary`,
        summary: `Ordering tools now mechanically refuse free-text ids, external artifact URLs, and URL-bearing ship-to fields, so untrusted content can never steer an order.`,
        features: [
          `fabricate`,
          `security`
        ],
        mcpTools: [
          `quote_manufacturing`,
          `authorize_spend`,
          `place_order`
        ]
      },
      {
        id: `2026-07-09-topology-optimization`,
        version: `0.9.4`,
        date: `2026-07-09`,
        category: `feat`,
        title: `Topology optimization`,
        summary: `SIMP topology optimization in the kernel: grow the stiffest organic structure for given loads and supports inside a box envelope or an existing part's volume.`,
        features: [
          `kernel`,
          `topology-optimization`,
          `simulation`,
          `mcp`
        ],
        mcpTools: [
          `topology_optimize`
        ]
      },
      {
        id: `2026-07-09-shell-cavity-volume`,
        version: `0.9.4`,
        date: `2026-07-09`,
        category: `fix`,
        title: `Shelled solids no longer report cavity as solid volume`,
        summary: `shell() wound the inner cavity outward, so volume/mass of hollow parts reported outer + cavity \u2014 a thinner wall showed a heavier part. Volume, mass properties, and downstream booleans are now correct.`,
        features: [
          `kernel`,
          `shell`,
          `inspect`
        ]
      },
      {
        id: `2026-07-09-edge-blend-loft`,
        version: `0.9.4`,
        date: `2026-07-09`,
        category: `feat`,
        title: `Edge blends: queries + chamfer-into-fillet lofts`,
        summary: `New EdgeBlend op: select edges declaratively (near a point, by direction, all) and apply constant or keyframed profiles that morph a chamfer into a fillet along each edge.`,
        features: [
          `kernel`,
          `fillet`,
          `chamfer`,
          `modeling`,
          `edge-queries`
        ]
      },
      {
        id: `2026-07-08-unified-pcb-renderer`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `App 3D board view unified with the kernel renderer`,
        summary: `The app's PCB 3D view now renders the kernel's preview meshes \u2014 same translucent soldermask, copper, and ENIG pads as the MCP viewer \u2014 with selection, net highlight, layer toggles, and explosion intact.`,
        features: [
          `pcb`,
          `app`,
          `viewer`
        ]
      },
      {
        id: `2026-07-08-translucent-soldermask-preview`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `Copper ghosts through a translucent soldermask in 3D`,
        summary: `PCB previews now layer real copper foil under a translucent green mask shell \u2014 routing reads through the mask like a photographed board, with pads and via rings punched out as ENIG gold.`,
        features: [
          `pcb`,
          `viewer`,
          `mcp`
        ],
        mcpTools: [
          `validate_for_fab`,
          `render_view`
        ]
      },
      {
        id: `2026-07-08-sticky-viewer-ux`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `Sticky live viewer in MCP chats`,
        summary: `The 3D viewer now re-mounts at milestones (apply_edits, validate_for_fab), auto-docks as pip when the host supports it, and open_document points agents at persistent live-view links.`,
        features: [
          `mcp-apps`,
          `viewer`
        ],
        mcpTools: [
          `apply_edits`,
          `validate_for_fab`,
          `open_document`
        ]
      },
      {
        id: `2026-07-08-spend-approval-receipt-gates`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `Protocol-native spend approval + receipt-gated ordering`,
        summary: `authorize_spend carries the approval page to the human via MCP URL elicitation, and place_order fail-closed gates money on doc-hash match and re-verified clearance receipt claims.`,
        features: [
          `mcp`,
          `fabricate`,
          `elicitation`,
          `receipts`
        ],
        mcpTools: [
          `authorize_spend`,
          `place_order`
        ]
      },
      {
        id: `2026-07-08-sheet-metal-quote-alignment`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `fix`,
        title: `quote_manufacturing sheet metal no longer ~3x high`,
        summary: `Sheet-metal quotes now price via the same laser cost model as sheet_metal_cost (setup amortized, single explicit margin, domestic shipping), landing within ~25% of the calibrated shop price.`,
        features: [
          `mcp`,
          `fabricate`,
          `sheet-metal`
        ],
        mcpTools: [
          `quote_manufacturing`,
          `sheet_metal_cost`
        ]
      },
      {
        id: `2026-07-08-sheet-metal-hole-tessellation`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `fix`,
        title: `Sheet-metal flanges with holes tessellate watertight`,
        summary: `Panel meshes now cut hole loops into the caps, wall each bore, and wind outward \u2014 inspect_cad/verify_spec volume and watertightness match the solid instead of reporting garbage.`,
        features: [
          `sheet-metal`,
          `mesh`,
          `verification`
        ],
        mcpTools: [
          `sheet_metal_create`,
          `inspect_cad`,
          `verify_spec`
        ]
      },
      {
        id: `2026-07-08-sheet-metal-engraving`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `Sheet-metal laser engraving with single-stroke text`,
        summary: `sheet_metal_create accepts engravings (text via a built-in single-stroke font, or polylines) surface-marked on the base flange \u2014 DXF ENGRAVE layer, exempt from min-feature DFM.`,
        features: [
          `sheet-metal`,
          `engraving`,
          `dxf`,
          `manufacturing`
        ],
        mcpTools: [
          `sheet_metal_create`,
          `sheet_metal_unfold`
        ]
      },
      {
        id: `2026-07-08-render-assets-inline`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `Render tools return transcript-ready image artifacts`,
        summary: `PNG render tools now keep their MCP image blocks, store renders as artifacts, and return asset metadata plus suggested Markdown for inline final-answer galleries.`,
        features: [
          `mcp`,
          `artifacts`,
          `rendering`,
          `atoms`,
          `ecad`
        ],
        mcpTools: [
          `render_view`,
          `render_molecule`,
          `render_pcb`,
          `render_ratsnest`,
          `render_stackup`
        ]
      },
      {
        id: `2026-07-08-physics-replay-inline-viewer`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `Physics replay in the inline viewer`,
        summary: `create_robot_env mounts the chat viewer with a transport bar: play/pause/scrub/speed a gym rollout with kernel-FK-accurate poses, plus live-follow while the agent is still stepping.`,
        features: [
          `mcp`,
          `physics`,
          `viewer`,
          `mcp-apps`
        ],
        mcpTools: [
          `create_robot_env`,
          `get_sim_replay`,
          `get_sim_version`,
          `get_preview_glb`
        ]
      },
      {
        id: `2026-07-08-physics-joint-order`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `fix`,
        title: `Deterministic joint ordering in physics observations`,
        summary: `Observation vectors now index joints in document order, create_robot_env reports joint_ids, and record_simulation maps poses by joint id \u2014 multi-joint replays can no longer permute.`,
        features: [
          `physics`,
          `simulation`,
          `assembly`
        ],
        mcpTools: [
          `create_robot_env`,
          `record_simulation`,
          `gym_observe`
        ]
      },
      {
        id: `2026-07-08-pcb-trace-3d-rendering`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `fix`,
        title: `PCB traces render as continuous copper in 3D preview`,
        summary: `Trace meshes were inside-out (backface-culled to a broken dashed look), arc traces were missing entirely, and the viewer orbited the origin instead of the part.`,
        features: [
          `pcb`,
          `viewer`,
          `mcp`
        ],
        mcpTools: [
          `validate_for_fab`,
          `render_view`
        ]
      },
      {
        id: `2026-07-08-order-dock-kerf-quotes`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `Order dock + live SendCutSend quotes via kerf`,
        summary: `The viewer grows an order dock rendering the fused vcad+kerf order lifecycle with approval deep-links, and sheet-metal quotes can carry the fab's own displayed price (pricing_basis "quoted").`,
        features: [
          `mcp`,
          `fabricate`,
          `viewer`,
          `kerf`,
          `sheet-metal`
        ],
        mcpTools: [
          `quote_manufacturing`,
          `get_order_feed`
        ]
      },
      {
        id: `2026-07-08-mcp-tool-annotations`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `MCP tools declare titles, annotations, and output schemas`,
        summary: `Every MCP tool now advertises a human-readable title and truthful annotations (readOnly/destructive/openWorld hints); tools that always return structured content declare a matching outputSchema.`,
        features: [
          `mcp`,
          `tooling`
        ],
        mcpTools: []
      },
      {
        id: `2026-07-08-mcp-root-consumption-symbolic-refs`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `fix`,
        title: `MCP creates consume child parts; @N refs in apply_edits`,
        summary: `Booleans/transforms via MCP no longer leave consumed intermediates as ghost parts that double-count volume; child refs accept string ids, and apply_edits ops reference earlier ops as "@N".`,
        features: [
          `mcp`,
          `editing`
        ],
        mcpTools: [
          `apply_edits`,
          `create`,
          `inspect_cad`
        ]
      },
      {
        id: `2026-07-08-instant-viewer-first-paint`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `perf`,
        title: `MCP viewer paints geometry instantly on mount`,
        summary: `Mount results now carry a ready-to-render GLB in host-only _meta and previews are cached by content hash, removing the fetch round trip and repeat re-tessellation behind 'fetching geometry\u2026'.`,
        features: [
          `mcp-apps`,
          `viewer`,
          `performance`
        ],
        mcpTools: [
          `create_cad_loon`,
          `get_preview_glb`
        ]
      },
      {
        id: `2026-07-08-fk-map-result`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `fix`,
        title: `Forward kinematics results no longer silently dropped`,
        summary: `The engine wrapper misread the WASM FK solver's Map result as a plain object, so assembly instances were never posed by joints; joint state now applies correctly.`,
        features: [
          `assembly`,
          `joints`,
          `kinematics`
        ]
      },
      {
        id: `2026-07-08-dfm-clearance-nettie-aware`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `fix`,
        title: `dfm_check min_clearance honors netTies and reports positions`,
        summary: `PCB DFM min_clearance no longer flags deliberate net-tie junctions (e.g. a wye winding's star point) as 0mm spacing defects \u2014 it reuses DRC's region-scoped NetTie exemption \u2014 and each violation now carries its board position and net pair for triage.`,
        features: [
          `ecad`,
          `pcb`,
          `dfm`
        ],
        mcpTools: [
          `dfm_check`
        ]
      },
      {
        id: `2026-07-08-authorize-approval-page`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `Spend authorization approval page`,
        summary: `vcad.io/authorize/<id> now lets you approve or decline an agent's proposed fabrication spend \u2014 the human side of authorize_spend, with cap, fab allowlist, and expiry shown before you decide.`,
        features: [
          `fabricate`,
          `orders`
        ],
        mcpTools: [
          `authorize_spend`,
          `place_order`
        ]
      },
      {
        id: `2026-07-08-artifact-store-durable`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `fix`,
        title: `Artifact URLs actually resolve: /artifacts routed + durable store`,
        summary: `export_gerber/export_cad artifact handles now work: the /artifacts route is wired into the serverless deployment (it was missing, so every download 403'd at the platform), and artifacts persist to a durable mcp_artifacts table so a handle minted on one instance resolves on any other \u2014 quote_manufacturing no longer rejects a fab_artifact_id minted minutes earlier as "Unknown or expired".`,
        features: [
          `mcp`,
          `fabricate`,
          `artifacts`
        ],
        mcpTools: [
          `export_gerber`,
          `export_cad`,
          `get_document`,
          `quote_manufacturing`,
          `place_order`
        ]
      },
      {
        id: `2026-07-08-apply-edits-mcp-tool`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `feat`,
        title: `apply_edits MCP tool: atomic batch editing`,
        summary: `Apply an ordered list of create/update/delete/set_material ops to a session atomically, with one changed diff, one integrity certificate, and a dry_run mode.`,
        features: [
          `mcp`,
          `editing`
        ],
        mcpTools: [
          `apply_edits`
        ]
      },
      {
        id: `2026-07-08-app-euler-order-zyx`,
        version: `0.9.4`,
        date: `2026-07-08`,
        category: `fix`,
        title: `App renders multi-axis rotations with kernel euler order`,
        summary: `The viewport now composes instance and board rotations as extrinsic X\u2192Y\u2192Z (ZYX) to match the kernel, so multi-axis rotations render identically in app, tessellation, and raytrace.`,
        features: [
          `assembly`,
          `viewport`,
          `pcb`
        ]
      },
      {
        id: `2026-07-07-verify-spec`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `verify_spec: spec-first verification receipts (TDD for CAD)`,
        summary: `New MCP tool grades an open document against a declared spec \u2014 bbox, volume range, watertightness, part count, center of mass \u2014 returning a fail-closed vcad.receipt/1 receipt with measured vs expected per claim.`,
        features: [
          `receipt`,
          `verification`,
          `mechanical`
        ],
        mcpTools: [
          `verify_spec`
        ]
      },
      {
        id: `2026-07-07-unified-design-receipt`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Unified fail-closed DesignReceipt across domains`,
        summary: `One versioned receipt schema (vcad.receipt/1): claims with oracle id+version, predicted vs measured values with units, and pass/fail/unverifiable verdicts \u2014 build_receipt now emits it.`,
        features: [
          `receipt`,
          `verification`,
          `pcb`,
          `sheet-metal`,
          `mechanical`
        ],
        mcpTools: [
          `build_receipt`,
          `verify_receipt`
        ]
      },
      {
        id: `2026-07-07-step-swept-offset-surfaces`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `STEP import: revolution, extrusion, offset surfaces`,
        summary: `SURFACE_OF_REVOLUTION, SURFACE_OF_LINEAR_EXTRUSION, and OFFSET_SURFACE now import \u2014 analytic when exact, NURBS otherwise \u2014 so SolidWorks/Fusion/Catia exports stop losing faces.`,
        features: [
          `step-import`,
          `brep-kernel`,
          `nurbs`
        ]
      },
      {
        id: `2026-07-07-solid-from-board`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `solid_from_board: PCB to solid CAD part`,
        summary: `The inverse of board_from_solid: extrudes the board outline with its cutouts intact, adds component keep-out volumes, and carries a homogenized FR4+copper mass so inspect/physics see the real board.`,
        features: [
          `ecad`,
          `pcb`,
          `solid`,
          `mass-properties`,
          `round-trip`,
          `mcp`
        ],
        mcpTools: [
          `solid_from_board`,
          `board_from_solid`,
          `check_enclosure_fit`,
          `inspect_cad`
        ]
      },
      {
        id: `2026-07-07-simulate-strike-audio`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Hear a part before it's cut: simulate_strike`,
        summary: `New MCP tool strikes a flat bar in simulation \u2014 hole-aware FEM modal analysis, mallet-excited synthesis to WAV, and an FFT pitch verdict in cents \u2014 so tuned parts are verified by ear before ordering.`,
        features: [
          `sheet-metal`,
          `acoustics`,
          `verification`
        ],
        mcpTools: [
          `simulate_strike`
        ]
      },
      {
        id: `2026-07-07-save-document-durable`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `save_document works on the hosted MCP server`,
        summary: `save_document/load_document now persist durably on mcp.vcad.io: signed-in saves land in your vcad.io account under the given name; anonymous saves return a private reopen key. Previously every hosted save failed.`,
        features: [
          `mcp`,
          `sessions`,
          `durability`
        ],
        mcpTools: [
          `save_document`,
          `load_document`
        ]
      },
      {
        id: `2026-07-07-same-net-bypass-drc`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `DRC warns on same-net bypass contacts`,
        summary: `New SameNetBypass rule flags copper touching its own net far from any intended junction (e.g. a star trace over a coil's inner via) \u2014 the same-net contact that silently short-circuits spiral coils, shunts, and sense traces.`,
        features: [
          `pcb`,
          `drc`,
          `coil`
        ],
        mcpTools: [
          `run_drc`,
          `describe_pcb`,
          `validate_for_fab`
        ]
      },
      {
        id: `2026-07-07-runtime-tool-packs`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Switch MCP tool packs at runtime`,
        summary: `Agents can enable/disable tool packs mid-session via list_tool_packs / set_tool_packs, with live notifications/tools/list_changed on stdio.`,
        features: [
          `mcp`,
          `tool-packs`
        ],
        mcpTools: [
          `list_tool_packs`,
          `set_tool_packs`
        ]
      },
      {
        id: `2026-07-07-route-nets-idempotent`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `route_nets is idempotent and respects hand-placed copper`,
        summary: `Re-running route_nets rips up only its own prior copper (traces/vias now carry provenance), so a re-route replaces the route instead of stacking shorts \u2014 and add_trace/add_via/coil copper survives.`,
        features: [
          `pcb`,
          `autorouter`,
          `drc`
        ],
        mcpTools: [
          `route_nets`,
          `add_trace`,
          `add_via`
        ]
      },
      {
        id: `2026-07-07-rotated-pad-drc`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `DRC judges rotated footprint pads at their true positions`,
        summary: `Pad copper on rotated footprints was checked at unrotated phantom positions, so traces routed to reported pad coordinates failed DRC as false shorts/clearance; DRC, DFM, and connectivity now use the rotated transform.`,
        features: [
          `pcb`,
          `drc`,
          `dfm`,
          `routing`
        ],
        mcpTools: [
          `run_drc`,
          `dfm_check`,
          `get_pad_positions`,
          `add_trace`
        ]
      },
      {
        id: `2026-07-07-revolve-partial-sweep`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `Revolve produces real swept geometry`,
        summary: `Partial revolves (e.g. 180\xB0) no longer collapse to zero volume, and full revolves of washer-style profiles get exact annular faces and correctly oriented bore walls.`,
        features: [
          `kernel`,
          `revolve`,
          `sketch`
        ]
      },
      {
        id: `2026-07-07-project-bom-tools`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Project BOM tools + mechanical COTS catalog`,
        summary: `bom_create/bom_add_line/bom_export build a project bill of materials (quote-linked manufactured parts + COTS lines) with landed-cost totals and markdown/CSV/JSON export; search_mechanical_parts spec-searches a curated bearings/shafts/standoffs/screws/magnets catalog.`,
        features: [
          `bom`,
          `fabricate`,
          `parts`,
          `cots`,
          `receipt`
        ],
        mcpTools: [
          `bom_create`,
          `bom_add_line`,
          `bom_export`,
          `search_mechanical_parts`
        ]
      },
      {
        id: `2026-07-07-pcb-verify-on-write-drc-delta`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `PCB copper mutators verify-on-write with drc_delta`,
        summary: `Every copper-mutating PCB tool now returns a drc_delta (violations it introduced, categorized, with clean to branch on), incrementally scoped on big boards.`,
        features: [
          `pcb`,
          `drc`,
          `verification`,
          `mcp`
        ],
        mcpTools: [
          `add_trace`,
          `add_via`,
          `add_via_array`,
          `add_coil`,
          `add_coil_array`,
          `add_motor_winding`,
          `delete_trace`,
          `delete_via`,
          `delete_zone`,
          `set_board_outline`,
          `set_stackup`,
          `add_net_tie`,
          `delete_net_tie`
        ]
      },
      {
        id: `2026-07-07-parameter-gradient-mcp`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Parametric gradients over MCP: list/set/differentiate parameters`,
        summary: `New MCP tools list_parameters, set_parameters (undoable, persisted), and parameter_gradient \u2014 d(volume/mass/centroid/bbox)/d\u03B8 for a named parameter via the differentiable seam.`,
        features: [
          `parametric`,
          `differentiable`,
          `mechanical`
        ],
        mcpTools: [
          `list_parameters`,
          `set_parameters`,
          `parameter_gradient`
        ]
      },
      {
        id: `2026-07-07-mutation-integrity`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Integrity metrics on every mutation`,
        summary: `CAD mutations now return volume, bbox, center of mass, watertightness, and CoM-vs-pattern-axis distance plus warnings, so corrupt geometry is visible at edit time.`,
        features: [
          `mcp`,
          `integrity`,
          `verification`
        ],
        mcpTools: [
          `create_cad_loon`,
          `create`,
          `update`,
          `delete`
        ]
      },
      {
        id: `2026-07-07-motor-winding-planar-interconnect`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `add_motor_winding: planar interconnect, no silent bypasses`,
        summary: `Motor winding interconnect is now planar staggered-radius arcs (no crossing shorts), the wye star lands on real board material with a scoped net-tie DRC honors, and phase feeds route to pads.`,
        features: [
          `pcb`,
          `motor`,
          `drc`
        ],
        mcpTools: [
          `add_motor_winding`,
          `run_drc`
        ]
      },
      {
        id: `2026-07-07-motor-induction-selfstart`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Induction motors, fringing derate, and will-it-spin check`,
        summary: `calc_motor gains a thin-sheet induction mode (drag-cup / PCB rotors) and a Carter-like fringing derate for PM flux; new check_self_start gates starting torque against bearing friction.`,
        features: [
          `electromagnetics`,
          `motor`,
          `receipt`,
          `verification`
        ],
        mcpTools: [
          `calc_motor`,
          `check_self_start`
        ]
      },
      {
        id: `2026-07-07-mcp-measurement-tools`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `MCP measurement tools: inspect_part, describe_scene, measure`,
        summary: `MCP agents can now inspect a single part's bbox/volume/center of mass, snapshot every part at once, and measure the min distance (or overlap) between two parts \u2014 closing the per-part modeling-loop gap left by aggregate-only inspect_cad.`,
        features: [
          `mcp`,
          `measurement`,
          `mechanical`
        ],
        mcpTools: [
          `inspect_part`,
          `describe_scene`,
          `measure`
        ]
      },
      {
        id: `2026-07-07-mcp-error-and-render-defects`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `MCP gym errors flag isError; render_molecule returns a PNG`,
        summary: `Gym tool errors now set isError so hosts stop reading failures as successes and get recovery hints, and render_molecule rasterizes to a PNG image block (SVG-text fallback) like render_view.`,
        features: [
          `mcp`,
          `physics`,
          `atoms`
        ],
        mcpTools: [
          `create_robot_env`,
          `gym_step`,
          `gym_reset`,
          `gym_observe`,
          `gym_close`,
          `render_molecule`
        ]
      },
      {
        id: `2026-07-07-isoperimetric-integrity-warning`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Isoperimetric impossibility check in integrity + inspect`,
        summary: `Mutation integrity reports and inspect_cad now flag volume/area pairs that violate A\xB3 \u2265 36\u03C0V\xB2 \u2014 no real solid can produce them, so corrupt volume integrals are warned about instead of returned silently.`,
        features: [
          `mcp`,
          `integrity`
        ],
        mcpTools: [
          `inspect_cad`
        ]
      },
      {
        id: `2026-07-07-get-document-ir-body`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `get_document returns the full IR body`,
        summary: `The MCP get_document tool now reliably returns the full IR Document JSON; oversized documents offload to the artifact store with a sha256 manifest instead of being stubbed.`,
        features: [
          `mcp`
        ],
        mcpTools: [
          `get_document`
        ]
      },
      {
        id: `2026-07-07-first-run-template-gallery`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `First visit opens the template gallery`,
        summary: `First-time visitors now land on the example gallery instead of a blank canvas \u2014 one click opens a real, editable part. Returning users with documents go straight to their work.`,
        features: [
          `onboarding`,
          `examples`,
          `app`
        ]
      },
      {
        id: `2026-07-07-export-gerber-blocked-verdict`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `export_gerber DRC block reports as a verdict, not an error`,
        summary: `When the clean-DRC gate blocks a dirty board, export_gerber now returns the structured blocked verdict (reason, DRC summary, escape hatches) as a normal result instead of a tool error, matching validate_for_fab.`,
        features: [
          `mcp`,
          `pcb`,
          `gerber`,
          `drc`
        ],
        mcpTools: [
          `export_gerber`
        ]
      },
      {
        id: `2026-07-07-em-domain-claims`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Electromagnetics named as a domain, calculators emit claims`,
        summary: `Every EM calculator (coil, impedance, PDN, RF, winding, motor) now returns structured receipt claims \u2014 quantity, predicted value, unit, method, inputs \u2014 and the domain is documented end to end.`,
        features: [
          `electromagnetics`,
          `pcb`,
          `receipt`,
          `verification`
        ],
        mcpTools: [
          `calc_coil`,
          `size_coil`,
          `calc_impedance`,
          `size_impedance`,
          `size_pdn`,
          `calc_rf`,
          `winding_layout`,
          `calc_motor`
        ]
      },
      {
        id: `2026-07-07-diff-stripline-model-fix`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `diff_stripline impedance now uses the stripline model`,
        summary: `calc_impedance computed differential-stripline Z0 with the microstrip formula and microstrip coupling constants, disagreeing with size_impedance; both now share the stripline model per the Rust reference.`,
        features: [
          `electromagnetics`,
          `pcb`,
          `impedance`
        ],
        mcpTools: [
          `calc_impedance`,
          `size_impedance`
        ]
      },
      {
        id: `2026-07-07-dfm-inline-serverless-safe`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `DFM follow-ups survive serverless instance flips`,
        summary: `dfm_explain/dfm_suggest_fix/dfm_apply_fix now accept the report inline, and inspect_cad/render_view/export_cad/dfm_check accept an inline document \u2014 so a cold instance no longer breaks the DFM loop.`,
        features: [
          `mcp`,
          `dfm`,
          `durability`
        ],
        mcpTools: [
          `dfm_check`,
          `dfm_explain`,
          `dfm_suggest_fix`,
          `dfm_apply_fix`,
          `inspect_cad`,
          `render_view`,
          `export_cad`
        ]
      },
      {
        id: `2026-07-07-copper-query-and-net-ties`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Query board copper and author net ties from MCP`,
        summary: `New get_copper lists traces/vias/zones with delete-compatible indices, and add_net_tie/delete_net_tie declare intentional net junctions (wye neutrals, split grounds, shunt taps) without offline JSON surgery.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `get_copper`,
          `add_net_tie`,
          `delete_net_tie`
        ]
      },
      {
        id: `2026-07-07-clearance-assertions`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `Named clearance/clash assertions with receipt re-verification`,
        summary: `check_clearance measures the minimum distance (or penetration depth) between part groups; labeled assertions persist on the document and re-verify as Holds/Stale/Violated via build_receipt/verify_receipt.`,
        features: [
          `clearance`,
          `verification`,
          `receipt`,
          `assembly`,
          `mechanical`
        ],
        mcpTools: [
          `check_clearance`,
          `build_receipt`,
          `verify_receipt`
        ]
      },
      {
        id: `2026-07-07-boolean-ssi-error`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `Boolean SSI failures no longer crash the app`,
        summary: `Surface-surface intersection failures in booleans now propagate as typed errors instead of panicking, so the browser surfaces a catchable error rather than a dead WASM kernel.`,
        features: [
          `booleans`,
          `stability`,
          `wasm`
        ]
      },
      {
        id: `2026-07-07-boolean-phantom-membrane`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `Booleans no longer seal bores with phantom membranes`,
        summary: `Circle-splitting an annular cap face now moves its hole to the new disk sub-face, so union trees of coaxial parts stop growing phantom volume in later intersections.`,
        features: [
          `booleans`,
          `kernel`
        ]
      },
      {
        id: `2026-07-07-boolean-oblique-robustness`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `Booleans: oblique cuts, patterns, and touching walls`,
        summary: `Oblique plane-cylinder cuts now split correctly: near-containment intersections, pattern-child trims, chained differences, and shared-wall unions no longer silently corrupt geometry.`,
        features: [
          `kernel`,
          `booleans`,
          `patterns`
        ]
      },
      {
        id: `2026-07-07-boolean-coaxial-volume-corruption`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `fix`,
        title: `Booleans: coaxial stack volume corruption fixed`,
        summary: `Coaxial cylinder/annulus booleans (press-fit rings, bores through pockets, tangent bosses) no longer inflate or lose volume \u2014 split sub-faces now sample, wind, and keep their holes correctly.`,
        features: [
          `brep-kernel`,
          `booleans`
        ]
      },
      {
        id: `2026-07-07-3dp-print-then-measure`,
        version: `0.9.4`,
        date: `2026-07-07`,
        category: `feat`,
        title: `3D-print calibration loop: predict, print, measure`,
        summary: `predict_print snapshots a design's measurables (bbox, mass, feature dims); record_measurement joins caliper/scale readings into a delta report with axis scales, hole undersize, and printer-profile suggestions.`,
        features: [
          `3d-printing`,
          `calibration`,
          `verification`,
          `mcp`
        ],
        mcpTools: [
          `predict_print`,
          `record_measurement`
        ]
      },
      {
        id: `2026-07-03-process-sim`,
        version: `0.9.4`,
        date: `2026-07-03`,
        category: `feat`,
        title: `Planar semiconductor process simulation`,
        summary: `New vcad-process crate turns GDS masks plus a serializable process recipe (deposit, pattern etch, oxide growth, implant, CMP) into 3D film stacks and textbook process cross-sections.`,
        features: [
          `process-sim`,
          `gdsii`,
          `chip-layout`,
          `cross-section`
        ]
      },
      {
        id: `2026-07-03-process-litho`,
        version: `0.9.4`,
        date: `2026-07-03`,
        category: `feat`,
        title: `Photolithography steps in the process simulator`,
        summary: `vcad-process recipes gain SpinResist, Expose, Develop, EtchThroughResist, and Strip: a physically honest resist loop that lands on the same geometry as the idealized PatternEtch.`,
        features: [
          `process-sim`,
          `photolithography`,
          `resist`,
          `cross-section`
        ]
      },
      {
        id: `2026-07-03-molecule-ui`,
        version: `0.9.4`,
        date: `2026-07-03`,
        category: `feat`,
        title: `Selectable atoms + molecular feature tree`,
        summary: `Molecule demos moved into the New dialog, atoms are now clickable in the viewport, and the molecular structure appears in the feature tree.`,
        features: [
          `atoms`,
          `selection`,
          `feature-tree`,
          `onboarding`
        ]
      },
      {
        id: `2026-07-02-single-edge-fillet`,
        version: `0.9.4`,
        date: `2026-07-02`,
        category: `fix`,
        title: `Per-edge fillets produce a correct solid`,
        summary: `Filleting a subset of edges no longer insets every face of the body; single and non-adjacent edge fillets are now watertight with correct volume.`,
        features: [
          `fillet`,
          `kernel`
        ]
      },
      {
        id: `2026-07-02-molecule-rendering`,
        version: `0.9.4`,
        date: `2026-07-02`,
        category: `feat`,
        title: `World-class atomic rendering + demos`,
        summary: `GPU impostor-sphere molecular rendering, a demo picker with seven structures, a spinning buckyball on the boot splash, and .vcad molecule persistence.`,
        features: [
          `atoms`,
          `rendering`,
          `impostor-spheres`,
          `viewport`,
          `splash`
        ]
      },
      {
        id: `2026-07-02-homogenize-bridge`,
        version: `0.9.4`,
        date: `2026-07-02`,
        category: `feat`,
        title: `Homogenize bridge: atoms to bulk material properties`,
        summary: `Homogenize a crystal into density and elastic moduli (MaterialCard), and differentiate part-scale physics objectives through it \u2014 dJ/d(lattice constant), end to end.`,
        features: [
          `atoms`,
          `simulation`,
          `differentiable`,
          `materials`,
          `mcp`
        ],
        mcpTools: [
          `homogenize_material`
        ]
      },
      {
        id: `2026-07-02-gdsii-import`,
        version: `0.9.4`,
        date: `2026-07-02`,
        category: `feat`,
        title: `GDSII chip-layout import foundation`,
        summary: `New vcad-gdsii crate reads and writes GDSII streams, flattens cell hierarchies to per-layer polygons, and extrudes them into vcad parts via a layer stack.`,
        features: [
          `gdsii`,
          `import`,
          `chip-layout`
        ]
      },
      {
        id: `2026-07-02-fillet-adjacent-edges`,
        version: `0.9.4`,
        date: `2026-07-02`,
        category: `fix`,
        title: `Filleting adjacent edges meets in clean miter corners`,
        summary: `Selecting edges that share a corner now produces a watertight miter joint between the blends instead of falling back to a whole-body inset that malformed the part.`,
        features: [
          `fillet`,
          `kernel`
        ]
      },
      {
        id: `2026-07-02-atomic-simulation`,
        version: `0.9.4`,
        date: `2026-07-02`,
        category: `feat`,
        title: `Atomic & molecular design and simulation`,
        summary: `Import, simulate (MD + energy minimization), inverse-design, and render atomic structures \u2014 via the app viewport and new MCP tools.`,
        features: [
          `atoms`,
          `simulation`,
          `molecular-dynamics`,
          `rendering`,
          `mcp`
        ],
        mcpTools: [
          `load_structure`,
          `inspect_molecule`,
          `minimize_energy`,
          `md_run`,
          `design_material`,
          `render_molecule`
        ]
      },
      {
        id: `2026-07-01-sheet-metal-fab-handoff`,
        version: `0.9.4`,
        date: `2026-07-01`,
        category: `feat`,
        title: `Fab-ready handoff for sheet-metal quotes`,
        summary: `quote_manufacturing for sheet metal now returns a fab_handoff: curated instant-quote shops, the exact DXF/STEP file recipe, and what to enter at upload \u2014 finish the order on the fab's site today.`,
        features: [
          `fabricate`,
          `sheet-metal`,
          `ordering`
        ],
        mcpTools: [
          `quote_manufacturing`
        ]
      },
      {
        id: `2026-06-26-validate-for-fab`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `validate_for_fab readiness gate + clean-DRC export guard`,
        summary: `New validate_for_fab tool returns one fail-closed verdict (DRC, renderability, Gerber serialization, unsupported features, blockers, fixes), and export_gerber now blocks a dirty or unverifiable board by default.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `validate_for_fab`,
          `export_gerber`
        ]
      },
      {
        id: `2026-06-26-tht-drill-and-drc-provenance`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `fix`,
        title: `Fab-correct THT drills + provenance-tagged DRC`,
        summary: `Through-hole drills now size to lead + ~0.2mm (no more oversized headers/connectors firing phantom hole-to-hole violations), and every DRC violation is tagged provenance (intra_footprint / inter_component / routing) + generated, so run_drc reports realViolations apart from footprint artifacts.`,
        features: [
          `pcb`,
          `ecad`,
          `footprints`,
          `drc`,
          `drill`
        ],
        mcpTools: [
          `run_drc`,
          `place_components`
        ]
      },
      {
        id: `2026-06-26-structured-pcb-errors`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `fix`,
        title: `Structured PCB tool errors instead of generic retry hint`,
        summary: `PCB tools (render_pcb, export_gerber, run_drc, build_receipt) now return the failing subsystem, field path, offending value, and accepted values instead of the generic 'Inspect the current state' hint. DRC, render, and export share one validation gate so a malformed board can no longer pass DRC clean while failing export.`,
        features: [
          `pcb`,
          `mcp`,
          `error-handling`
        ],
        mcpTools: [
          `render_pcb`,
          `render_stackup`,
          `export_gerber`,
          `run_drc`,
          `build_receipt`
        ]
      },
      {
        id: `2026-06-26-route-nets-receipt-fix`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `fix`,
        title: `route_nets receipt always populated when requested`,
        summary: `Fix receipt:true returning only {document_id} \u2014 robust boolean coercion + enrich receipt with nets routed/unrouted, trace/via counts, plane-stitched nets, and short net pairs.`,
        features: [
          `pcb`,
          `mcp`,
          `receipt`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-26-place-components-extent-clamp`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `fix`,
        title: `Auto-placement keeps large edge parts fully on-board`,
        summary: `force_directed placement now clamps each component's full courtyard inside the board (not just its center), so big edge parts like an LQFP-64 no longer hang half off the board and overlap neighbors.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `place_components`
        ]
      },
      {
        id: `2026-06-26-pdn-impedance-realized-copper-gate`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `fix`,
        title: `PDN / impedance verdicts gated on realized copper`,
        summary: `size_pdn and calc_impedance now refuse to certify a PASS when the referenced net's copper is a split or absent plane/trace, reporting coverage %, stitching-via count, and the worst island; build_receipt records per-net plane continuity.`,
        features: [
          `ecad`,
          `pcb`,
          `power-integrity`,
          `signal-integrity`
        ],
        mcpTools: [
          `size_pdn`,
          `calc_impedance`,
          `build_receipt`
        ]
      },
      {
        id: `2026-06-26-pcb-preview-eval-fallback`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `fix`,
        title: `PCB preview never shows an empty viewport`,
        summary: `The inline 3D viewer now renders the board from PCB data (outline, footprints, pads) independent of the BRep solid, so a placed board always previews even when its canonical solid fails to evaluate.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `place_components`
        ]
      },
      {
        id: `2026-06-26-pcb-plane-stitching-drc`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `Auto-stitch SMD pads to power planes + Unstitched-Pad DRC`,
        summary: `route_nets now drops a stitching via from every SMD pad to its same-net copper plane \u2014 escaping into a dog-bone fan-out on sub-0.65mm-pitch pads \u2014 and a new Unstitched-Pad DRC rule flags any plane-net pad with no galvanic path.`,
        features: [
          `ecad`,
          `pcb`,
          `drc`,
          `autorouter`
        ],
        mcpTools: [
          `route_nets`,
          `run_drc`
        ]
      },
      {
        id: `2026-06-26-pcb-negotiated-congestion`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `Negotiated-congestion autorouter closes more nets`,
        summary: `The whole-board router now layers PathFinder-style negotiated congestion over its rip-up \u2014 persistently-contested regions accrue history cost and stuck nets get routing priority \u2014 so dense boards close more nets, and unrouted nets come back with diagnostics (blocking nets, congested region, suggested layer/via) plus a 0-1 routability score.`,
        features: [
          `ecad`,
          `pcb`,
          `autorouter`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-26-pcb-layer-name-validation`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `fix`,
        title: `PCB tools reject malformed copper-layer names`,
        summary: `Every PCB write tool now validates layer names against the real enum, rejecting dotted KiCad forms like 'In1.Cu' with a did-you-mean instead of storing them and silently corrupting render_pcb/export_gerber.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `add_trace`,
          `add_via`,
          `add_via_array`,
          `add_zone`,
          `add_coil`,
          `add_motor_winding`,
          `set_stackup`
        ]
      },
      {
        id: `2026-06-26-pcb-happy-path-next-actions`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `PCB tools suggest the next step on success`,
        summary: `MCP tool results now carry happy-path next_actions on success (create_schematic \u2192 place_components/run_erc, place_components \u2192 set_design_rules, route_nets \u2192 run_drc/render_pcb), and set_design_rules buffers rules set before the board exists instead of dead-ending.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `create_schematic`,
          `place_components`,
          `set_design_rules`,
          `route_nets`
        ]
      },
      {
        id: `2026-06-26-pcb-dfm-fab-profiles`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `PCB DFM checks against fab-house profiles`,
        summary: `dfm_check now grades PCB documents against JLCPCB, PCBWay, and generic 2/4-layer fab profiles \u2014 min annular ring, drill, trace/space by copper weight, copper-to-edge, soldermask dam/sliver, silk-over-pad, acid traps, and via-in-pad \u2014 returning a per-rule pass/fail naming the profile.`,
        features: [
          `ecad`,
          `pcb`,
          `dfm`
        ],
        mcpTools: [
          `dfm_check`
        ]
      },
      {
        id: `2026-06-26-net-islands-drc`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `DRC flags nets realized as disjoint copper islands`,
        summary: `run_drc now reconciles each net against the realized copper graph and reports NetIslands when a net has stranded copper (e.g. a power plane stitched to nothing), with the island count and the pads per island.`,
        features: [
          `ecad`,
          `pcb`,
          `drc`
        ],
        mcpTools: [
          `run_drc`
        ]
      },
      {
        id: `2026-06-26-get-footprint-tool`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `get_footprint: introspect a land pattern's pads + courtyard`,
        summary: `New MCP tool returns a footprint's origin, courtyard AABB, and every pad in both footprint-local and board frames (with the explicit CCW rotation convention), for a placed ref or a resolved id pre-placement \u2014 so connector/IC pad locations are known exactly instead of render-and-guessed.`,
        features: [
          `pcb`,
          `ecad`,
          `footprints`,
          `introspection`
        ],
        mcpTools: [
          `get_footprint`
        ]
      },
      {
        id: `2026-06-26-export-kicad-native`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `Export native, editable KiCad files`,
        summary: `New export_kicad MCP tool writes a session as a native KiCad 9 .kicad_pcb board or .kicad_sch schematic, so a human can open the agent's design in KiCad to finish routing and re-import \u2014 closing the round trip.`,
        features: [
          `ecad`,
          `pcb`,
          `schematic`,
          `kicad`,
          `export`
        ],
        mcpTools: [
          `export_kicad`
        ]
      },
      {
        id: `2026-06-26-export-artifact-offload`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `fix`,
        title: `Large fab/CAD exports offload to a URL instead of overflowing`,
        summary: `export_gerber, export_cad, and import_step now write oversized results to an artifact store and return { artifact_url, manifest } instead of an inline blob that blew the tool-output limit; quote_manufacturing and place_order accept the handle so fab files never transit model context.`,
        features: [
          `ecad`,
          `pcb`,
          `fabricate`
        ],
        mcpTools: [
          `export_gerber`,
          `export_cad`,
          `import_step`,
          `quote_manufacturing`,
          `place_order`
        ]
      },
      {
        id: `2026-06-26-erc-pin-type-power-rules`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `fix`,
        title: `run_erc now checks pin-type conflicts and floating power`,
        summary: `ERC invokes the kernel rules, so two outputs on one net flag a conflict and an undriven power input flags floating power; it fails closed (kernel unavailable or a parse error reports unverified, never clean).`,
        features: [
          `ecad`,
          `pcb`,
          `erc`
        ],
        mcpTools: [
          `run_erc`,
          `create_schematic`
        ]
      },
      {
        id: `2026-06-26-enclosure-fit`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `Cross-domain check: does the board fit its case?`,
        summary: `New check_enclosure_fit tool co-verifies a PCB against the enclosure it ships in \u2014 board fits with clearance, components clear the lid, mounting holes land on standoffs, connectors align to wall cutouts \u2014 surfaced in build_receipt and shown end-to-end by the F405 flight-controller showcase.`,
        features: [
          `ecad`,
          `pcb`,
          `cad`,
          `verification`
        ],
        mcpTools: [
          `check_enclosure_fit`,
          `build_receipt`
        ]
      },
      {
        id: `2026-06-26-drc-unverifiable-not-clean`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `fix`,
        title: `DRC/ERC report 'unverifiable' instead of false-clean`,
        summary: `When the kernel can't parse a board or schematic (e.g. a malformed layer name like 'In1.Cu'), run_drc, run_erc, and critique_route now return an errored 'unverifiable' result with the offending field \u2014 instead of a dangerous '0 violations / clean' a user could ship on.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `run_drc`,
          `run_erc`,
          `critique_route`
        ]
      },
      {
        id: `2026-06-26-describe-pcb-tool`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `describe_pcb: inspect a PCB session as structured data`,
        summary: `New describe_pcb MCP tool returns a compact, structured snapshot of the session board \u2014 size + outline, stackup, net classes / design rules, zones, trace & via counts by net and layer, component count, DRC status, and an export/render probe that surfaces the 'DRC-clean but unexportable' state get_document/read can't see.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `describe_pcb`
        ]
      },
      {
        id: `2026-06-26-delete-zone-and-undo`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `Remove copper pours/traces/vias and undo PCB edits`,
        summary: `New delete_zone, delete_trace, and delete_via remove routed copper by index or net, and a new undo rewinds the last session mutation \u2014 no more full rebuild after a bad add_zone.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `delete_zone`,
          `delete_trace`,
          `delete_via`,
          `undo`
        ]
      },
      {
        id: `2026-06-26-checkpoint-branch`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `Checkpoint & branch MCP design sessions`,
        summary: `Agents can snapshot a known-good state (post-schematic, post-place, post-route) with checkpoint_document and rewind with branch_from \u2014 fork into a new session or restore in place \u2014 instead of rebuilding the netlist.`,
        features: [
          `mcp`,
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `checkpoint_document`,
          `branch_from`
        ]
      },
      {
        id: `2026-06-26-add-zone-overlap-guard`,
        version: `0.9.4`,
        date: `2026-06-26`,
        category: `feat`,
        title: `add_zone rejects shorting copper pours at author time`,
        summary: `add_zone now fails fast when a pour overlaps an existing different-net pour on the same layer (a copper short), naming the conflicting net and overlap bbox in a zone_drc preview \u2014 instead of surfacing it only at post-route run_drc. Pass allow_overlap:true to override.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `add_zone`
        ]
      },
      {
        id: `2026-06-25-unconnected-pin-app-notes`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `Unconnected pins carry datasheet app-notes`,
        summary: `create_schematic now reports each unconnected pin with its name, a severity, and the datasheet application notes that reference it (e.g. NE555 CTRL bypass) for parts in the database.`,
        features: [
          `schematic`,
          `ecad`,
          `parts-database`,
          `pcb`
        ],
        mcpTools: [
          `create_schematic`
        ]
      },
      {
        id: `2026-06-25-set-board-outline`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `set_board_outline resizes the board in place`,
        summary: `New set_board_outline changes the board outline (rectangle, circle, or polygon) without re-placing components; footprints that end up off the board are reported in off_board.`,
        features: [
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `set_board_outline`
        ]
      },
      {
        id: `2026-06-25-route-nets-strategy`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `route_nets accepts an ordering strategy`,
        summary: `route_nets gains a strategy hint (power_first, fanout_desc, fanout_asc) that routes nets in priority tiers, each seeing prior tiers' copper as obstacles; default 'auto' is unchanged.`,
        features: [
          `ecad`,
          `pcb`,
          `routing`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-25-route-nets-plane-stitched`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `route_nets reports plane-stitched nets`,
        summary: `Nets connected through a copper-pour plane (stitched pad-to-plane with vias instead of traced) are now surfaced as plane_stitched in the route_nets result.`,
        features: [
          `ecad`,
          `pcb`,
          `routing`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-25-route-nets-locked-nets`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `route_nets can lock nets from rip-up`,
        summary: `route_nets accepts locked_nets: hand-routed traces/vias on those nets are never ripped up or re-routed, so manual via bridges survive subsequent autorouter passes.`,
        features: [
          `ecad`,
          `pcb`,
          `routing`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-25-render-stackup`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `render_stackup renders layers individually`,
        summary: `New render_stackup renders each copper layer of a multilayer board to its own framed image, so inner planes are legible instead of buried under an all-layers composite.`,
        features: [
          `ecad`,
          `pcb`,
          `render`
        ],
        mcpTools: [
          `render_stackup`
        ]
      },
      {
        id: `2026-06-25-render-ratsnest`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `render_ratsnest shows pre-route airwires`,
        summary: `New render_ratsnest overlays the unrouted-connection ratsnest (per-net MST airwires) as dashed lines over the board, so placement and crossing density can be judged before routing.`,
        features: [
          `ecad`,
          `pcb`,
          `render`,
          `routing`
        ],
        mcpTools: [
          `render_ratsnest`
        ]
      },
      {
        id: `2026-06-25-pin-type-validation`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `fix`,
        title: `create_schematic validates pin types up front`,
        summary: `An invalid pin electrical type (e.g. 'BiDirectional') is now rejected at create_schematic time with a 'did you mean' suggestion, instead of failing later in render_view or route_nets.`,
        features: [
          `schematic`,
          `ecad`,
          `pcb`
        ],
        mcpTools: [
          `create_schematic`
        ]
      },
      {
        id: `2026-06-25-physics-sim-video-export`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `Record physics simulations to video`,
        summary: "New Record button on the simulate toolbar captures the viewport to MP4 (or WebM where MP4 isn't supported) while the sim runs, including in raytraced mode. AI agents can request the same via the new `record_simulation` MCP tool, which returns an animated GIF of any active physics env.",
        features: [
          `physics`,
          `simulation`,
          `recording`,
          `raytrace`
        ],
        mcpTools: [
          `record_simulation`
        ]
      },
      {
        id: `2026-06-25-pcb-studio-graphite-render`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `World-class dark PCB render (Studio Graphite)`,
        summary: `render_pcb now defaults to a dark, high-contrast editor view: copper-as-accent palette, drilled-hole halos, haloed reference designators + value labels, a recessive ratsnest for unrouted nets, and a brand-pink net/ref highlight (e.g. highlight:{nets:['GND']}).`,
        features: [
          `pcb`,
          `ecad`,
          `render`,
          `agent-eyes`
        ],
        mcpTools: [
          `render_pcb`
        ]
      },
      {
        id: `2026-06-25-live-viewport-single-canvas`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `perf`,
        title: `One live 3D viewport instead of one per tool call`,
        summary: `The inline 3D viewer now mounts once per session and self-refreshes as the model edits, so long conversations stay light instead of stacking a heavy iframe on every mutation.`,
        features: [
          `mcp`,
          `viewer`,
          `performance`,
          `mcp-apps`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-06-25-import-kicad`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `Import existing KiCad boards via MCP`,
        summary: `New import_kicad parses a .kicad_pcb (outline, footprints, pads, nets, traces/vias/zones) into a session ready for render_pcb, run_drc, route_nets, and export_gerber; import_eagle is a stub.`,
        features: [
          `ecad`,
          `pcb`,
          `import`
        ],
        mcpTools: [
          `import_kicad`,
          `import_eagle`
        ]
      },
      {
        id: `2026-06-25-get-pad-positions`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `get_pad_positions returns exact pad coordinates`,
        summary: `New read-only tool returns every pad's absolute board-frame (x, y), copper layer, and net, so manual add_trace/add_via routing lands on pads instead of guessing from component centers.`,
        features: [
          `ecad`,
          `pcb`,
          `routing`
        ],
        mcpTools: [
          `get_pad_positions`
        ]
      },
      {
        id: `2026-06-25-footprint-discovery`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `Discover footprints with list/search_footprints`,
        summary: `Two MCP tools enumerate and fuzzy-search the parametric footprint families (each with a canonical example id), so agents stop guessing id spellings like SOIC8 vs SOIC-8.`,
        features: [
          `ecad`,
          `pcb`,
          `footprints`,
          `discovery`
        ],
        mcpTools: [
          `list_footprints`,
          `search_footprints`
        ]
      },
      {
        id: `2026-06-25-fc-parts`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `feat`,
        title: `Flight-controller parts added to the catalog`,
        summary: `Adds datasheet-verified CAN parts (SN65HVD230, TCAN1042, MCP2515), a buck regulator (TPS562200), and MCUs (STM32G431 LQFP-48, RP2040) with full pinouts, pin types, and app-notes.`,
        features: [
          `ecad`,
          `pcb`,
          `parts-database`
        ],
        mcpTools: [
          `create_schematic`,
          `search_electronic_parts`,
          `resolve_part`
        ]
      },
      {
        id: `2026-06-25-drc-via-plane-shorts`,
        version: `0.9.4`,
        date: `2026-06-25`,
        category: `fix`,
        title: `DRC no longer false-shorts vias through planes`,
        summary: `A foreign-net via or trace crossing an inner-layer copper pour is no longer flagged as a short (fabrication always anti-pads it), removing the cascade of spurious shorts on 4-layer boards.`,
        features: [
          `ecad`,
          `pcb`,
          `drc`
        ],
        mcpTools: [
          `run_drc`,
          `route_nets`,
          `place_components`
        ]
      },
      {
        id: `2026-06-24-route-nets-stale-copper`,
        version: `0.9.4`,
        date: `2026-06-24`,
        category: `fix`,
        title: `route_nets rips up stale copper after a part moves`,
        summary: `Re-routing after set_placement now detects nets whose pads moved out from under their copper, rips up the orphaned traces, and re-routes them \u2014 even nets you didn't list \u2014 and reports traces_removed / vias_removed / stale_nets_cleared so the cleanup is visible.`,
        features: [
          `pcb`,
          `routing`,
          `drc`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-24-positioned-sheet-metal`,
        version: `0.9.4`,
        date: `2026-06-24`,
        category: `fix`,
        title: `Positioned sheet-metal parts render their unfold + DFM`,
        summary: `A sheet-metal part wrapped in a Translate/Rotate/Scale (the common case, including the Sheet metal U-channel example) is now recognized as sheet metal, so its folded body is placed in world space and its unfold view, bend table, DXF, and DFM checks appear.`,
        features: [
          `sheet-metal`,
          `unfold`,
          `dfm`
        ]
      },
      {
        id: `2026-06-24-placer-cross-net-clearance`,
        version: `0.9.4`,
        date: `2026-06-24`,
        category: `fix`,
        title: `Force-directed placement no longer bakes in cross-net shorts`,
        summary: `place_components with strategy:force_directed now legalizes different-net pad overlaps to clearance instead of settling components on top of each other, and reports placement_conflicts with success:false when a board is too tight to separate them.`,
        features: [
          `pcb`,
          `placement`,
          `drc`
        ],
        mcpTools: [
          `place_components`
        ]
      },
      {
        id: `2026-06-24-placement-drc`,
        version: `0.9.4`,
        date: `2026-06-24`,
        category: `feat`,
        title: `place_components surfaces a pre-routing DRC`,
        summary: `place_components now returns placement_drc \u2014 shorts (with the offending nets and refs), pad clearance, courtyard overlaps, and off-board parts \u2014 so an agent can fix the floorplan with set_placement before routing on top of a fault instead of only discovering it at run_drc.`,
        features: [
          `pcb`,
          `drc`,
          `placer`
        ],
        mcpTools: [
          `place_components`
        ]
      },
      {
        id: `2026-06-24-place-components-utilization`,
        version: `0.9.4`,
        date: `2026-06-24`,
        category: `feat`,
        title: `place_components reports board utilization`,
        summary: `place_components now returns a utilization report \u2014 board vs occupied area, % used, component bounding box, and an advisory right-sized outline \u2014 so over-large boards can be tightened in one step.`,
        features: [
          `mcp`,
          `ecad`,
          `agents`
        ],
        mcpTools: [
          `place_components`
        ]
      },
      {
        id: `2026-06-24-parts-database-pin-resolution`,
        version: `0.9.4`,
        date: `2026-06-24`,
        category: `feat`,
        title: `Parts database: pins from part name + footprint`,
        summary: "create_schematic accepts a `part` name (NE555, LM358, ATmega328P, ...) and auto-populates pin definitions from a curated jellybean database; resolve_part returns them too.",
        features: [
          `schematic`,
          `ecad`,
          `parts-database`,
          `pcb`
        ],
        mcpTools: [
          `create_schematic`,
          `resolve_part`
        ]
      },
      {
        id: `2026-06-24-connector-footprints`,
        version: `0.9.4`,
        date: `2026-06-24`,
        category: `feat`,
        title: `Connector footprints (JST, Molex, Tag-Connect, USB-C)`,
        summary: `The parametric footprint engine now synthesizes real land patterns for JST PH/XH/EH/SH/GH, Molex Pico-Blade, Tag-Connect TC2030/TC2050, and a simplified USB-C receptacle instead of substituting a wrong 0805 placeholder.`,
        features: [
          `pcb`,
          `ecad`,
          `footprints`,
          `connectors`,
          `drc`
        ],
        mcpTools: [
          `place_components`,
          `create_schematic`,
          `run_drc`
        ]
      },
      {
        id: `2026-06-23-pcb-3d-render`,
        version: `0.9.4`,
        date: `2026-06-23`,
        category: `feat`,
        title: `Photoreal PCB 3D rendering`,
        summary: `Populated boards render like a real PCB: deep-green satin soldermask over the copper, exposed ENIG gold pads, matte ICs, tin joints, a tan FR4 edge, and emissive LEDs.`,
        features: [
          `pcb`,
          `rendering`,
          `3d-viewer`
        ],
        mcpTools: [
          `render_pcb`,
          `get_preview_glb`
        ]
      },
      {
        id: `2026-06-23-mcp-receipt-ledger`,
        version: `0.9.4`,
        date: `2026-06-23`,
        category: `feat`,
        title: `PCB verification receipt as a re-runnable ledger`,
        summary: `build_receipt now renders in the inline viewer as a docked audit ledger \u2014 verdict badge, board-hash fingerprint, DRC counts, and per-part provenance \u2014 with a Re-run button (new verify_receipt tool) that re-verifies the live board as Holds / Stale / Violated. Clicking a violation flies the camera to it; sourcing is shown but never gates the verdict.`,
        features: [
          `mcp`,
          `pcb`,
          `ecad`,
          `verification`
        ],
        mcpTools: [
          `build_receipt`,
          `verify_receipt`
        ]
      },
      {
        id: `2026-06-23-mcp-living-viewport`,
        version: `0.9.4`,
        date: `2026-06-23`,
        category: `feat`,
        title: `Inline 3D viewer updates in place as you edit`,
        summary: `The MCP viewer is now idempotent per document: across a multi-turn session the geometry accretes in one viewport \u2014 camera held, the parts each edit touched flashing brand-pink \u2014 instead of stacking stale snapshots. The change diff now rides in structuredContent so the flash works on ChatGPT too.`,
        features: [
          `mcp`,
          `viewer`,
          `3d`
        ],
        mcpTools: [
          `create`,
          `update`,
          `delete`
        ]
      },
      {
        id: `2026-06-23-mcp-live-window`,
        version: `0.9.4`,
        date: `2026-06-23`,
        category: `feat`,
        title: `Live review window \u2014 watch a session build`,
        summary: `Share an MCP session as a live link: anyone with it watches the geometry update in real time and can drop annotation pins. Private by default; share is explicit and revocable.`,
        features: [
          `mcp`,
          `live`,
          `collaboration`
        ],
        mcpTools: [
          `share_session`,
          `unshare_session`
        ]
      },
      {
        id: `2026-06-23-continue-in-claude`,
        version: `0.9.4`,
        date: `2026-06-23`,
        category: `feat`,
        title: `Continue in Claude`,
        summary: `Hand the part you're looking at to Claude, ChatGPT, or your editor in one click \u2014 it loads your exact geometry and picks up where you left off.`,
        details: `## What's New

- **One-click handoff** - A "Continue in Claude\u2026" item in the File menu opens an AI host with your current part already loaded \u2014 no blank slate, no copy-paste.
- **Host matrix** - Claude Desktop and ChatGPT open with the part prefilled; Cursor and VS Code get one-click connector install; Claude Code gets a copyable command. Remembers your last-used host.
- **Token-based, not geometry-in-URL** - The link carries only a short share token; the new \`continue_document\` MCP tool resolves it server-side and materializes the geometry, so even large parts hand off cleanly.`,
        features: [
          `mcp`,
          `ai`,
          `handoff`,
          `sharing`
        ],
        mcpTools: [
          `continue_document`
        ]
      },
      {
        id: `2026-06-22-mcp-next-actions`,
        version: `0.9.4`,
        date: `2026-06-22`,
        category: `feat`,
        title: `MCP tool errors now carry recovery steps`,
        summary: `Every failed MCP tool call returns structured next_actions \u2014 concrete recovery steps (and the tool to call) so an agent can recover in one turn instead of guessing.`,
        features: [
          `mcp`,
          `agents`
        ],
        mcpTools: []
      },
      {
        id: `2026-06-19-anon-session-durability`,
        version: `0.9.4`,
        date: `2026-06-19`,
        category: `fix`,
        title: `Durable MCP sessions for anonymous callers`,
        summary: `Anonymous MCP sessions now persist to a capability-keyed mcp_sessions table, so open_document \u2192 later calls survive serverless cold starts and cross-instance routing instead of failing with "Unknown document_id". Signed-in users were already durable.`,
        features: [
          `mcp`,
          `sessions`,
          `serverless`
        ]
      },
      {
        id: `2026-06-18-quote-inline-ir`,
        version: `0.9.4`,
        date: `2026-06-18`,
        category: `feat`,
        title: `Stateless manufacturing quotes via inline IR`,
        summary: "quote_manufacturing now accepts an inline `ir` Document as an alternative to document_id \u2014 no open_document needed, no session held, immune to serverless cold-start/cross-instance session loss, and safe to call in parallel.",
        features: [
          `fabricate`,
          `ordering`,
          `manufacturing`,
          `mcp`
        ],
        mcpTools: [
          `quote_manufacturing`
        ]
      },
      {
        id: `2026-06-18-fabricate-quote-manufacturing`,
        version: `0.9.4`,
        date: `2026-06-18`,
        category: `feat`,
        title: `Quote custom manufacturing from a design via MCP`,
        summary: `New quote_manufacturing / get_order_status / list_orders MCP tools quote a part (PCB, CNC, 3D-print, sheet-metal, cast-metal) from a live session through a fab broker (JLCPCB, Digital Metal) and persist a quote + order. Quote-only for now \u2014 no payment.`,
        features: [
          `fabricate`,
          `ordering`,
          `manufacturing`,
          `jlcpcb`,
          `digital-metal`
        ],
        mcpTools: [
          `quote_manufacturing`,
          `get_order_status`,
          `list_orders`
        ]
      },
      {
        id: `2026-06-18-fabricate-fallback-fix`,
        version: `0.9.4`,
        date: `2026-06-18`,
        category: `fix`,
        title: `Manufacturing quotes prefer real fabs over the estimate`,
        summary: `quote_manufacturing no longer lets the generic 'no contracted fab' estimate duplicate or out-rank a real fab (e.g. undercutting JLCPCB on a 4-layer board); the estimate now appears only for processes with no contracted fab yet.`,
        features: [
          `fabricate`,
          `ordering`,
          `manufacturing`
        ],
        mcpTools: [
          `quote_manufacturing`
        ]
      },
      {
        id: `2026-06-17-loon-let-body`,
        version: `0.9.4`,
        date: `2026-06-17`,
        category: `fix`,
        title: `Loon let-bound parts no longer drop their cuts`,
        summary: `[let name value body] in create_cad_loon now evaluates and returns the body; previously the trailing body was silently dropped, so a let-bound base solid rendered un-cut with every boolean lost.`,
        features: [
          `loon`,
          `create_cad_loon`,
          `booleans`
        ],
        mcpTools: [
          `create_cad_loon`
        ]
      },
      {
        id: `2026-06-17-chained-curved-boolean-resurface-fix`,
        version: `0.9.4`,
        date: `2026-06-17`,
        category: `fix`,
        title: `Chained curved booleans no longer resurface cut geometry`,
        summary: `Subtracting a curved tool from a solid that already has a concave curved face (e.g. a dimpled body) no longer makes the earlier subtracted shape reappear as solid geometry.`,
        features: [
          `kernel`,
          `booleans`
        ]
      },
      {
        id: `2026-06-16-router-fanout-plane-stitch`,
        version: `0.9.4`,
        date: `2026-06-16`,
        category: `feat`,
        title: `Router fan-out vias + pad-to-plane stitching`,
        summary: `route_nets now escapes fine-pitch pads it can't route on-layer with dog-bone fan-out vias, and stitches power/ground pads down to inner copper planes instead of starring traces across a signal layer \u2014 every emitted via probed clearance-legal.`,
        features: [
          `pcb`,
          `ecad`,
          `routing`,
          `vias`,
          `planes`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-16-render-cylinder-disc-trap-recovery`,
        version: `0.9.4`,
        date: `2026-06-16`,
        category: `fix`,
        title: `Fix all-cylinder boolean crash + kernel trap isolation`,
        summary: `Differencing a solid built only from cylinders (e.g. a bored disc with patterned holes) no longer crashes the kernel, and a kernel panic in one document can no longer break rendering for every other session.`,
        features: [
          `kernel`,
          `booleans`,
          `render`,
          `mcp`,
          `reliability`
        ],
        mcpTools: [
          `render_view`,
          `render_pcb`
        ]
      },
      {
        id: `2026-06-16-pcb-placement-routing-drc`,
        version: `0.9.4`,
        date: `2026-06-16`,
        category: `feat`,
        title: `Smarter PCB placement, routing feedback, and DRC categories`,
        summary: `force_directed placement is now size-aware (component courtyards no longer overlap), route_nets reports realized per-net track widths and documents automatic net-class widths, and run_drc splits counts into connectivity vs clearance/manufacturing.`,
        features: [
          `pcb`,
          `ecad`,
          `placement`,
          `routing`,
          `drc`
        ],
        mcpTools: [
          `place_components`,
          `route_nets`,
          `run_drc`
        ]
      },
      {
        id: `2026-06-16-parametric-footprint-engine`,
        version: `0.9.4`,
        date: `2026-06-16`,
        category: `feat`,
        title: `Parametric footprint engine for PCB components`,
        summary: `place_components now synthesizes real IPC-style land patterns (QFN/DFN, QFP, SOIC/SSOP/TSSOP, SOT, DPAK, SOD, chips, headers, terminals) from the footprint id, reports any unresolved footprints, and accepts inline pad geometry.`,
        features: [
          `pcb`,
          `ecad`,
          `footprints`,
          `drc`
        ],
        mcpTools: [
          `place_components`,
          `create_schematic`,
          `run_drc`
        ]
      },
      {
        id: `2026-06-16-native-parts-engine`,
        version: `0.9.4`,
        date: `2026-06-16`,
        category: `feat`,
        title: `Native generative parts engine with verified substitution`,
        summary: `Resolve real parts from a spec ('10k 0603 1%') into a generated footprint + symbol + 3D body, find spec-compatible alternatives, prove a swap drops in by re-running DRC, and build a re-runnable verification receipt \u2014 all offline.`,
        features: [
          `pcb`,
          `ecad`,
          `parts`,
          `footprints`,
          `drc`,
          `verification`
        ],
        mcpTools: [
          `search_electronic_parts`,
          `resolve_part`,
          `find_alternatives`,
          `verify_substitution`,
          `build_receipt`
        ]
      },
      {
        id: `2026-06-15-teardrops`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `Teardrop fillets at trace-to-pad/via junctions`,
        summary: `Traces landing on a same-net pad or via now get a teardrop copper fillet in the Gerber and the render, so a small drill or registration error can't break the trace out of its land.`,
        features: [
          `pcb`,
          `teardrops`,
          `gerber`,
          `render`
        ],
        mcpTools: [
          `export_gerber`,
          `render_pcb`
        ]
      },
      {
        id: `2026-06-15-route-nets-two-layer`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `Autorouter falls back to the back layer with vias`,
        summary: `When a connection can't route on the front copper, route_nets now routes it on the back layer with transition vias at the endpoints, so congested boards route fully clean instead of leaving nets unrouted.`,
        features: [
          `pcb`,
          `autorouter`,
          `routing`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-15-route-nets-idempotent`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `fix`,
        title: `route_nets is idempotent \u2014 re-routing no longer shorts`,
        summary: `Re-running route_nets rips up the target nets' copper before routing, so a second pass replaces the route instead of stacking duplicate traces that crossed nets and created shorts.`,
        features: [
          `pcb`,
          `routing`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-15-route-nets-honest-failure`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `fix`,
        title: `route_nets leaves hard nets unrouted instead of shorting`,
        summary: `When no router can find a clearance-legal path for a connection, route_nets now leaves it as an unrouted air-wire and reports it in unrouted_nets, instead of dropping a direct segment that shorts other copper.`,
        features: [
          `pcb`,
          `autorouter`,
          `routing`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-15-route-nets-avoidance`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `Autorouter avoids all copper, not just trace boxes`,
        summary: `route_nets now routes each net with an A* maze router that clears every trace, pad, and via on the layer via the exact clearance oracle, producing DRC-clean boards instead of grazing other-net pads.`,
        features: [
          `pcb`,
          `autorouter`,
          `routing`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-15-render-occlusion-quality`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `Drafting-plate renders: HLR, smooth shading, AO, materials`,
        summary: `render_view is now a measured-ink drafting plate: hidden-line removal with dashed occluded edges, Gouraud smooth shading, baked ambient occlusion in cavities and concave seams, material-tinted ramps, studio rim light on a vellum ground with contact shadow, and a fix for cones rendering inside-out.`,
        features: [
          `render`,
          `visualization`,
          `materials`
        ],
        mcpTools: [
          `render_view`
        ]
      },
      {
        id: `2026-06-15-receipt-ledger`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `Live Receipt ledger in the electronics workspace`,
        summary: `Each board edit now logs an attributed entry \u2014 what it fixed, what it introduced (incl. shorts), and footprint-vs-routing blame \u2014 with a verdict badge.`,
        features: [
          `electronics`,
          `pcb`,
          `drc`,
          `receipt`
        ]
      },
      {
        id: `2026-06-15-power-net-width`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `Autorouter widens power/ground nets to their class width`,
        summary: `route_nets routes each net at its net-class trace width (wider for power/ground rails), with per-net-pair clearance so a wide net pushes thin signals away by the larger of the two rules.`,
        features: [
          `pcb`,
          `autorouter`,
          `routing`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-15-pour-connectivity`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `fix`,
        title: `DRC and render see poured planes, not solid floods`,
        summary: `Connectivity DRC and the PCB renderer now use the filled copper pour (outline minus clearance voids) instead of the raw zone outline, so a ground plane no longer reads as shorting every net it overlaps and renders with its real cut-outs and thermal relief.`,
        features: [
          `pcb`,
          `drc`,
          `copper-pour`,
          `render`
        ],
        mcpTools: [
          `run_drc`,
          `render_pcb`
        ]
      },
      {
        id: `2026-06-15-pcb-preview-layers`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `PCBs render as real boards in the 3D preview`,
        summary: `The inline 3D viewer now shows PCBs as layered boards \u2014 green FR4, gold copper traces and pads, real 3D component bodies, and white silkscreen \u2014 instead of one flat gray slab. GLB previews/exports also carry vertex normals for proper shading.`,
        features: [
          `pcb`,
          `render`,
          `preview`,
          `glb`
        ],
        mcpTools: [
          `get_preview_glb`,
          `export_cad`
        ]
      },
      {
        id: `2026-06-15-pcb-floorplan-pour-rules-tools`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `PCB floorplan, copper pours, rules & ampacity MCP tools`,
        summary: `Five new ECAD tools: set_placement (explicit per-component floorplan), add_zone (ground/power-plane copper pours), set_design_rules (configurable DRC + net classes), size_trace_for_current (IPC-2221 ampacity), and add_via_array (thermal/stitching via grids).`,
        features: [
          `mcp`,
          `pcb`,
          `ecad`
        ],
        mcpTools: [
          `set_placement`,
          `add_zone`,
          `set_design_rules`,
          `size_trace_for_current`,
          `add_via_array`
        ]
      },
      {
        id: `2026-06-15-mcp-sessions-persist-to-account`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `fix`,
        title: `MCP agent work persists to your vcad account`,
        summary: `Signed-in MCP sessions now save to your vcad.io account and survive across requests, fixing mid-build "Unknown document_id" errors on the hosted server.`,
        features: [
          `mcp`,
          `sync`,
          `sessions`
        ],
        mcpTools: [
          `open_document`,
          `create_cad_loon`,
          `import_step`,
          `create_schematic`,
          `route_nets`,
          `close_document`
        ]
      },
      {
        id: `2026-06-15-mcp-oauth`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `Sign-in for the hosted MCP server`,
        summary: `mcp.vcad.io now supports OAuth 2.1 with dynamic client registration, so Claude and other MCP clients can register and sign in via Google or GitHub instead of erroring.`,
        features: [
          `mcp`,
          `oauth`,
          `auth`
        ]
      },
      {
        id: `2026-06-15-loon-source-dropped-nodes`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `fix`,
        title: `Loon source view stops silently dropping nodes`,
        summary: `The .loon source view now records STEP/mesh imports and sheet-metal nodes as flagged placeholders instead of silently omitting them, matching the Rust serializer.`,
        features: [
          `loon`,
          `import`,
          `sheet-metal`
        ]
      },
      {
        id: `2026-06-15-get-document-full-ir`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `fix`,
        title: `get_document returns the full IR again`,
        summary: `On inline-viewer clients, get_document no longer collapses a large board's IR to a {document_id} stub, so callers can capture, serialize, and re-feed full session state.`,
        features: [
          `mcp`,
          `pcb`
        ],
        mcpTools: [
          `get_document`
        ]
      },
      {
        id: `2026-06-15-diff-pair`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `Differential pair routing + DRC awareness`,
        summary: `New route_diff_pair MCP tool routes a declared P/N pair coupled and length-matched; DRC now reads each diff-pair class's gap so a pair's intentional close coupling is checked against its gap instead of false-flagging as a short.`,
        features: [
          `pcb`,
          `routing`,
          `drc`,
          `diff-pair`
        ],
        mcpTools: [
          `route_diff_pair`,
          `run_drc`
        ]
      },
      {
        id: `2026-06-15-critique-route`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `critique_route \u2014 read-only per-net route audit`,
        summary: `New MCP tool that audits one net's routing without mutating it: total length, via/layer-change count, the closest approach to other-net copper, and any clearance/short/unconnected DRC issues it's involved in.`,
        features: [
          `pcb`,
          `routing`
        ],
        mcpTools: [
          `critique_route`
        ]
      },
      {
        id: `2026-06-15-copper-pour-fab`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `fix`,
        title: `Copper pours knock out clearances in fab output`,
        summary: `Ground/power pours now subtract real clearance voids around other-net copper and form thermal-relief spokes on same-net pads, and Gerber export emits the poured geometry instead of a solid flood that would short the plane.`,
        features: [
          `pcb`,
          `copper-pour`,
          `gerber`
        ],
        mcpTools: [
          `export_gerber`
        ]
      },
      {
        id: `2026-06-15-chatgpt-apps-serverless`,
        version: `0.9.4`,
        date: `2026-06-15`,
        category: `feat`,
        title: `vcad 3D viewer in ChatGPT + serverless-safe exports`,
        summary: `The inline 3D viewer now renders inside ChatGPT via the OpenAI Apps SDK, and export_cad / import_step / export_gerber return inline base64 on the hosted server instead of writing to its read-only disk.`,
        features: [
          `mcp`,
          `chatgpt`,
          `apps-sdk`,
          `viewer`,
          `serverless`
        ],
        mcpTools: [
          `export_cad`,
          `import_step`,
          `export_gerber`,
          `get_preview_glb`,
          `get_document`
        ]
      },
      {
        id: `2026-06-14-session-persistence-serverinfo`,
        version: `0.9.4`,
        date: `2026-06-14`,
        category: `feat`,
        title: `Session persistence + server_info build probe`,
        summary: `save_document/load_document persist a session to disk and reopen it by name; a new server_info tool plus a real (package-derived) server version and startup self-check make stale/skewed deploys detectable.`,
        features: [
          `mcp`,
          `sessions`,
          `devex`
        ],
        mcpTools: [
          `save_document`,
          `load_document`,
          `server_info`
        ]
      },
      {
        id: `2026-06-14-routing-motor-tools`,
        version: `0.9.4`,
        date: `2026-06-14`,
        category: `feat`,
        title: `Routing primitives + one-shot motor winding & evaluation`,
        summary: `New add_trace/add_via routing primitives, an add_motor_winding realizer that turns a slots/poles plan into coils + series interconnect + wye/delta tie, and calc_motor for Kt/Ke/speed/torque from a computed air-gap field.`,
        features: [
          `pcb`,
          `routing`,
          `motor`,
          `winding`,
          `magnetics`
        ],
        mcpTools: [
          `add_trace`,
          `add_via`,
          `add_motor_winding`,
          `calc_motor`,
          `set_stackup`
        ]
      },
      {
        id: `2026-06-14-render-pcb-views`,
        version: `0.9.4`,
        date: `2026-06-14`,
        category: `feat`,
        title: `Per-layer 2D PCB render + orthographic CAD views`,
        summary: `New render_pcb gives a flat, top-down, per-layer board image (copper/silk/drills/outline); render_view gains top/front/side orthographic views alongside isometric.`,
        features: [
          `pcb`,
          `render`,
          `visualization`
        ],
        mcpTools: [
          `render_pcb`,
          `render_view`
        ]
      },
      {
        id: `2026-06-14-mcp-discord-alerts`,
        version: `0.9.4`,
        date: `2026-06-14`,
        category: `feat`,
        title: `MCP: Discord activity rollups`,
        summary: `Set a Discord webhook in notifyConfig to post a periodic summary of MCP tool usage (e.g. '23 tool calls across 4 sessions' every 15 min) \u2014 disabled by default, fire-and-forget, quiet when idle, and payload-safe (counts only, never arg values or IR).`,
        features: [
          `mcp`,
          `observability`
        ],
        mcpTools: []
      },
      {
        id: `2026-06-14-gerber-cutouts-silk`,
        version: `0.9.4`,
        date: `2026-06-14`,
        category: `fix`,
        title: `Gerber export: board cutouts + silkscreen shapes/text`,
        summary: `Edge_Cuts now routes interior cutouts (center bores, keyed/D holes) and silkscreen renders Circle/Arc/Polygon/Text \u2014 all previously dropped from fab output.`,
        features: [
          `pcb`,
          `gerber`,
          `export`,
          `fabrication`
        ],
        mcpTools: [
          `export_gerber`
        ]
      },
      {
        id: `2026-06-14-drc-overhaul`,
        version: `0.9.4`,
        date: `2026-06-14`,
        category: `feat`,
        title: `PCB DRC: true-geometry clearance, keepouts, shorts, net-ties`,
        summary: `DRC now measures real segment/polygon clearance (fewer false positives), enforces keepouts, flood-fills connectivity to catch shorts and unrouted nets, and honors intentional net-ties.`,
        features: [
          `pcb`,
          `drc`,
          `design-rules`,
          `net-tie`
        ],
        mcpTools: [
          `run_drc`
        ]
      },
      {
        id: `2026-06-13-winding-layout-coil-array`,
        version: `0.9.4`,
        date: `2026-06-13`,
        category: `feat`,
        title: `winding_layout planner + add_coil_array, summary-first DRC`,
        summary: `winding_layout derives correct per-coil phase, polarity, and winding factor from slots+poles as data; add_coil_array fans add_coil over a ring in one call; run_drc now returns an aggregated summary by default (detail:'full' for the raw list).`,
        features: [
          `ecad`,
          `pcb`,
          `motor`,
          `winding`,
          `drc`,
          `mcp`
        ],
        mcpTools: [
          `winding_layout`,
          `add_coil_array`,
          `run_drc`,
          `add_coil`
        ]
      },
      {
        id: `2026-06-13-wasm-engine`,
        version: `0.9.4`,
        date: `2026-06-13`,
        category: `feat`,
        title: `WASM: route size_pdn into the Rust differentiable engine`,
        summary: `The Rust kernel solvers (PDN implicit-function adjoint sizing, differentiable co-design) now compile to WASM; size_pdn gains engine:'exact' to route coupled/mesh problems into the real engine, falling back to the JS solver when the artifact is absent.`,
        features: [
          `ecad`,
          `pcb`,
          `pdn`,
          `wasm`,
          `kernel`,
          `mcp`
        ],
        mcpTools: [
          `size_pdn`
        ]
      },
      {
        id: `2026-06-13-size-pdn`,
        version: `0.9.4`,
        date: `2026-06-13`,
        category: `feat`,
        title: `size_pdn: gradient sizing of a power-distribution mesh`,
        summary: `New MCP tool sizes copper-segment widths across a PDN resistor mesh so each load node's IR-drop meets its budget with minimal copper, solving G\xB7V=I and driving drop\u2192budget; reports any node it can't meet within the width bounds.`,
        features: [
          `ecad`,
          `pcb`,
          `pdn`,
          `power-integrity`,
          `optimization`,
          `mcp`
        ],
        mcpTools: [
          `size_pdn`
        ]
      },
      {
        id: `2026-06-13-size-impedance-tuner`,
        version: `0.9.4`,
        date: `2026-06-13`,
        category: `feat`,
        title: `size_impedance: solve trace geometry for a target impedance`,
        summary: `Inverse of calc_impedance \u2014 given a target Z0 (and diff Z0) plus stackup, solves trace width/spacing via a bounded Gauss-Newton/LM, snaps to the fab grid, and re-verifies against the same model; reports binding DFM bounds instead of silent misses.`,
        features: [
          `ecad`,
          `pcb`,
          `signal-integrity`,
          `impedance`,
          `optimization`,
          `mcp`
        ],
        mcpTools: [
          `size_impedance`,
          `calc_impedance`
        ]
      },
      {
        id: `2026-06-13-coil-magnetics`,
        version: `0.9.4`,
        date: `2026-06-13`,
        category: `feat`,
        title: `calc_coil / size_coil: planar-magnetics analyzer + sizer`,
        summary: `Extends the parametric-design surface to planar magnetics: calc_coil reports a spiral's inductance (modified Wheeler), DC resistance, and L/R; size_coil solves the turn count for a target inductance and flags fit-limited annuli.`,
        features: [
          `ecad`,
          `pcb`,
          `magnetics`,
          `inductor`,
          `motor`,
          `mcp`
        ],
        mcpTools: [
          `calc_coil`,
          `size_coil`
        ]
      },
      {
        id: `2026-06-13-calc-rf`,
        version: `0.9.4`,
        date: `2026-06-13`,
        category: `feat`,
        title: `calc_rf: RF/AC frequency-domain resonator analysis`,
        summary: `New MCP tool sweeps an RLC resonator's complex impedance over frequency and reports |Z|, phase, S11/return-loss vs a reference Z0, plus resonance, Q, and the best match in the band \u2014 the RF/AC analyzer the surface was missing.`,
        features: [
          `ecad`,
          `pcb`,
          `rf`,
          `frequency-domain`,
          `s-parameters`,
          `mcp`
        ],
        mcpTools: [
          `calc_rf`
        ]
      },
      {
        id: `2026-06-12-vcad-render-ortho-jpeg`,
        version: `0.9.4`,
        date: `2026-06-12`,
        category: `feat`,
        title: `vcad-render: orthographic views and JPEG output`,
        summary: `The vcad-render CLI gains front/side/top orthographic views and z-buffered raster JPEG output with hidden-line edge overlay, alongside the existing isometric SVG.`,
        features: [
          `render`,
          `cli`,
          `mecheval`
        ]
      },
      {
        id: `2026-06-12-pcb-session-tools`,
        version: `0.9.4`,
        date: `2026-06-12`,
        category: `feat`,
        title: `Session-based PCB tools with netlist-as-data`,
        summary: `PCB tools now take a document_id and mutate server-side state; create_schematic accepts an explicit nets map, merges global labels by name, and supports circular/polygon board outlines with radial placement.`,
        features: [
          `ecad`,
          `pcb`,
          `schematic`,
          `netlist`,
          `mcp`
        ],
        mcpTools: [
          `create_schematic`,
          `place_components`,
          `route_nets`,
          `run_drc`,
          `run_erc`,
          `export_gerber`
        ]
      },
      {
        id: `2026-06-12-loon-multi-root`,
        version: `0.9.4`,
        date: `2026-06-12`,
        category: `fix`,
        title: `Loon: multiple top-level [root] statements all survive`,
        summary: `Programs with several top-level value forms previously kept only the last one; all top-level roots, solids, and materials now merge into the document.`,
        features: [
          `loon`,
          `parser`
        ],
        mcpTools: [
          `create_cad_loon`
        ]
      },
      {
        id: `2026-06-12-create-param-defaults`,
        version: `0.9.4`,
        date: `2026-06-12`,
        category: `fix`,
        title: `create: segment defaults and schema hints in errors`,
        summary: `Cylinder/sphere/cone get default tessellation segments, and planner parse errors now append the expected parameter shape for the requested type instead of bare serde messages.`,
        features: [
          `mcp`,
          `dx`
        ],
        mcpTools: [
          `create`,
          `update`
        ]
      },
      {
        id: `2026-06-12-board-from-solid`,
        version: `0.9.4`,
        date: `2026-06-12`,
        category: `feat`,
        title: `board_from_solid: solid model to PCB outline`,
        summary: `New MCP tool projects a solid part onto the XY plane and traces its outline polygon including interior cutouts (e.g. a stator bore), ready to feed into place_components.`,
        features: [
          `ecad`,
          `pcb`,
          `outline`,
          `round-trip`,
          `mcp`
        ],
        mcpTools: [
          `board_from_solid`,
          `place_components`
        ]
      },
      {
        id: `2026-06-12-add-coil`,
        version: `0.9.4`,
        date: `2026-06-12`,
        category: `feat`,
        title: `add_coil: spiral trace primitive for PCB motors`,
        summary: `New MCP tool generates Archimedean spiral copper on any layer with net assignment, turn-to-turn clearance validation, optional inner via, and copper length + DC resistance estimates.`,
        features: [
          `ecad`,
          `pcb`,
          `coil`,
          `pcb-motor`,
          `mcp`
        ],
        mcpTools: [
          `add_coil`
        ]
      },
      {
        id: `2026-06-11-verified-loop-hardening`,
        version: `0.9.4`,
        date: `2026-06-11`,
        category: `fix`,
        title: `Harden render_view and verify_part`,
        summary: `render_view now reports honest rasterizer failures, refuses runaway documents, and poisons the kernel after a WASM trap; verify_part no longer blocks the server; benchmark agents receive real images.`,
        features: [
          `mcp`,
          `agents`,
          `mecheval`
        ],
        mcpTools: [
          `render_view`,
          `verify_part`
        ]
      },
      {
        id: `2026-06-11-vcad-branded-mcp-viewer`,
        version: `0.9.4`,
        date: `2026-06-11`,
        category: `feat`,
        title: `vcad-branded MCP viewer and tool packs`,
        summary: `The inline MCP Apps viewer now wears official vcad chrome and renders with the app's exact rig (studio IBL, grid, contact shadow); VCAD_MCP_PACKS trims the tool surface to core + chosen domain packs.`,
        features: [
          `mcp`,
          `viewer`,
          `agents`
        ],
        mcpTools: [
          `open_document`,
          `get_preview_glb`,
          `create_cad_loon`
        ]
      },
      {
        id: `2026-06-11-mcp-viewer-pointing`,
        version: `0.9.4`,
        date: `2026-06-11`,
        category: `feat`,
        title: `Click-to-select parts in the MCP viewer \u2014 "make this taller"`,
        summary: `Select a part in the inline viewer and the agent knows what "this" means via ui/update-model-context; an Ask button sends part-grounded messages into the chat via ui/message.`,
        features: [
          `mcp`,
          `viewer`,
          `agents`,
          `selection`
        ],
        mcpTools: [
          `get_preview_glb`
        ]
      },
      {
        id: `2026-06-11-mcp-agent-loop`,
        version: `0.9.4`,
        date: `2026-06-11`,
        category: `feat`,
        title: `Tighter MCP agent loop: diffs, instructions, flat patterns`,
        summary: `Mutations report a compact changed diff; the kernel's type catalog, materials, and orientation rules ship as MCP server instructions; sheet_metal_unfold renders its flat pattern in the inline viewer.`,
        features: [
          `mcp`,
          `agents`,
          `sheet-metal`,
          `viewer`
        ],
        mcpTools: [
          `create`,
          `update`,
          `delete`,
          `set_material`,
          `create_cad_loon`,
          `sheet_metal_unfold`
        ]
      },
      {
        id: `2026-06-11-inspect-com-bbox-guard`,
        version: `0.9.4`,
        date: `2026-06-11`,
        category: `fix`,
        title: `inspect_cad center of mass stays inside the bounding box`,
        summary: `Center-of-mass integration now falls back to the surface centroid when the signed-volume integral is unreliable (open meshes, e.g. sheet-metal bodies), instead of reporting a COM outside the bbox.`,
        features: [
          `mcp`,
          `inspect`,
          `sheet-metal`,
          `kernel`
        ],
        mcpTools: [
          `inspect_cad`
        ]
      },
      {
        id: `2026-06-10-verified-agent-loop`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `feat`,
        title: `Verified agent loop: render_view + verify_part MCP tools`,
        summary: `AI agents can now SEE the parts they build (render_view returns an isometric PNG) and grade them against mecheval benchmark tasks (verify_part runs the official deterministic graders), closing the verify-and-iterate loop.`,
        details: `render_view renders an open session document through the same drafting-style isometric pipeline as the vcad-render CLI (now a reusable library exposed via the kernel WASM render_svg binding) and rasterizes to PNG via resvg, returning an MCP image block the model can inspect. verify_part writes the session document to a scratch file and shells out to the mecheval-grade binary \u2014 the exact grader the leaderboard uses, so there is one source of grading truth \u2014 relaying per-check pass/fail with measured-vs-expected details; list_eval_tasks browses the 64-task suite. The benchmark harness excludes the oracle tools during scored runs to keep the leaderboard honest. create_cad_loon's tool description now documents the full loon vocabulary (patterns, sketches, extrude/revolve/sweep/loft, assemblies) so agents stop living in primitives and booleans.`,
        features: [
          `mcp`,
          `ai-agents`,
          `rendering`,
          `benchmark`
        ],
        mcpTools: [
          `render_view`,
          `verify_part`,
          `list_eval_tasks`,
          `create_cad_loon`
        ]
      },
      {
        id: `2026-06-10-sheet-metal-folded-step`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `feat`,
        title: `Folded sheet-metal STEP export with real bend cylinders`,
        summary: `Sheet-metal chains now export the folded 3D body as STEP AP214 with analytic cylindrical bend faces, so fab pipelines like SendCutSend auto-detect bend radii, angles, and directions.`,
        details: `New kernel builder folded_sheet_solid turns a sheet-metal model into a single watertight B-rep: full-size panel slabs joined by true annular bend sectors tangent to both panels, consistent with the exported flat pattern. Exposed to the web app via the sheetMetalFoldedStep WASM binding, which takes the same chain JSON as evaluateSheetMetalChain and returns the full STEP file text.`,
        features: [
          `sheet-metal`,
          `step`,
          `manufacturing`
        ],
        mcpTools: [
          `sheet_metal_create`,
          `export_cad`
        ]
      },
      {
        id: `2026-06-10-share-pcb-docs`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `fix`,
        title: `open_in_browser works for PCB documents`,
        summary: `open_in_browser no longer crashes on PCB documents: it falls back to compressed JSON when VCode can't represent the document, and place_components writes a valid board material.`,
        features: [
          `pcb`,
          `ecad`,
          `sharing`
        ],
        mcpTools: [
          `open_in_browser`,
          `place_components`
        ]
      },
      {
        id: `2026-06-10-sendcutsend-sheet-metal`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `feat`,
        title: `SendCutSend-ready sheet metal: merged DXF, bend relief`,
        summary: `Flat patterns export as a merged single-silhouette DXF with dashed bend centerlines, bends get parametric relief notches, and the sendcutsend shop profile locks radii/K to SCS tooling.`,
        details: `sheet_metal_unfold now emits a fab-ready merged DXF: one closed exterior polyline plus holes on CUT and DASHED bend centerlines on the allowance midline. New bend_relief option cuts relief notches at bend ends (3D, flat, and DXF). shop_profile: "sendcutsend" resolves every bend's radius and K-factor from SCS's published bending calculator \u2014 custom radii are rejected, omitted radii resolve automatically \u2014 and sheet_metal_bend_table can return the full catalog. For zero data entry, export the folded body as STEP via export_cad and let the shop auto-detect bends.`,
        features: [
          `sheet-metal`,
          `dxf`,
          `manufacturing`,
          `dfm`
        ],
        mcpTools: [
          `sheet_metal_unfold`,
          `sheet_metal_check`,
          `sheet_metal_create`,
          `sheet_metal_suggest_fix`,
          `sheet_metal_bend_table`,
          `export_cad`
        ]
      },
      {
        id: `2026-06-10-route-nets-autorouter`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `fix`,
        title: `route_nets uses the obstacle-avoiding kernel router`,
        summary: `route_nets now routes ratsnest connections with the push-and-shove router (grid router fallback) instead of drawing straight pad-to-pad lines through other copper.`,
        features: [
          `pcb`,
          `ecad`
        ],
        mcpTools: [
          `route_nets`
        ]
      },
      {
        id: `2026-06-10-placement-fits-board`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `fix`,
        title: `place_components fits the board and honors strategy`,
        summary: `Grid placement now sizes cells to the board outline so footprints never land off-board, and the force_directed strategy actually runs a net-attraction refinement pass.`,
        features: [
          `pcb`,
          `ecad`
        ],
        mcpTools: [
          `place_components`
        ]
      },
      {
        id: `2026-06-10-place-components-pad-nets`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `fix`,
        title: `place_components now assigns pad nets`,
        summary: `MCP place_components assigns nets to footprint pads from schematic pin names, so route_nets can route without manual net patching.`,
        features: [
          `pcb`,
          `ecad`
        ],
        mcpTools: [
          `place_components`,
          `route_nets`
        ]
      },
      {
        id: `2026-06-10-parametric-footprints`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `fix`,
        title: `place_components generates real multi-pin footprints`,
        summary: `Footprint names now resolve to parametric kernel footprints (SOIC, DIP, QFP, SOT-23/223, pin headers, chip sizes) instead of stacking every pad past pin 2 on one spot.`,
        features: [
          `pcb`,
          `ecad`
        ],
        mcpTools: [
          `place_components`
        ]
      },
      {
        id: `2026-06-10-netlist-from-wires`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `fix`,
        title: `place_components derives nets from wire connectivity`,
        summary: `MCP place_components now runs the kernel netlist extractor (wires, junctions, labels) instead of treating pin names as nets; pin names remain a fallback for wireless schematics.`,
        features: [
          `pcb`,
          `ecad`
        ],
        mcpTools: [
          `place_components`
        ]
      },
      {
        id: `2026-06-10-mcp-cursor-inline-viewer-fix`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `fix`,
        title: `MCP inline viewer works in Cursor`,
        summary: `Cursor MCP Apps now render the 3D viewer: CSP allows blob URLs for Three.js GLB loading, and geometry tool results stay small so hosts do not suppress the inline UI.`,
        features: [
          `mcp`,
          `viewer`
        ],
        mcpTools: [
          `create_cad_loon`,
          `get_preview_glb`
        ]
      },
      {
        id: `2026-06-10-mcp-apps-viewer-v2`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `perf`,
        title: `Self-contained MCP viewer, lean geometry results`,
        summary: `Geometry tool results shrink from ~200 KB to under 1 KB: the inline viewer now fetches GLB previews on demand via an app-only tool, is bundled offline-capable, and follows the host theme.`,
        features: [
          `mcp`,
          `viewer`
        ],
        mcpTools: [
          `get_preview_glb`
        ]
      },
      {
        id: `2026-06-10-mcp-apps-inline-viewer`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `feat`,
        title: `Inline 3D viewer in MCP hosts (MCP Apps)`,
        summary: `Geometry tools now render an interactive 3D viewport inline in MCP Apps hosts like Cursor and Claude, using the official SEP-1865 handshake.`,
        features: [
          `mcp`,
          `viewer`
        ],
        mcpTools: [
          `create_cad_loon`,
          `import_step`,
          `sheet_metal_create`,
          `place_part`,
          `create`,
          `update`,
          `delete`,
          `set_material`,
          `dfm_apply_fix`,
          `open_document`,
          `get_document`
        ]
      },
      {
        id: `2026-06-10-hosted-mcp-sheet-metal-fix`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `fix`,
        title: `Hosted MCP: sheet metal and parts tools work again`,
        summary: `The mcp.vcad.io entry point now passes the full kernel module to the Engine, restoring sheet_metal_*, search_parts, place_part, and URDF import on the hosted server.`,
        features: [
          `sheet-metal`,
          `mcp`
        ],
        mcpTools: [
          `sheet_metal_create`,
          `sheet_metal_unfold`,
          `sheet_metal_check`,
          `sheet_metal_materials`,
          `search_parts`,
          `place_part`
        ]
      },
      {
        id: `2026-06-10-gerber-inline-fallback`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `fix`,
        title: `export_gerber falls back to inline files`,
        summary: `When output_dir can't be written (hosted/sandboxed MCP servers), export_gerber now returns file contents inline instead of failing, and the schema documents that paths resolve server-side.`,
        features: [
          `pcb`,
          `ecad`,
          `export`
        ],
        mcpTools: [
          `export_gerber`
        ]
      },
      {
        id: `2026-06-10-gerber-export`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `feat`,
        title: `Gerber fabrication export`,
        summary: `Export Gerber RS-274X layers, Excellon drill, pick-and-place, and BOM from the Export tab as a zip, and for real via the export_gerber MCP tool.`,
        features: [
          `ecad`,
          `pcb`,
          `export`,
          `gerber`
        ],
        mcpTools: [
          `export_gerber`
        ]
      },
      {
        id: `2026-06-10-drc-copper-shorts`,
        version: `0.9.4`,
        date: `2026-06-10`,
        category: `fix`,
        title: `run_drc detects copper shorts`,
        summary: `run_drc now runs the kernel DRC (copper clearance, pad-to-pad shorts, hole-to-hole) instead of scalar-only checks that missed crossing traces and overlapping pads.`,
        features: [
          `pcb`,
          `ecad`
        ],
        mcpTools: [
          `run_drc`
        ]
      },
      {
        id: `2026-06-05-schematic-wire-escape-cancel`,
        version: `0.9.4`,
        date: `2026-06-05`,
        category: `fix`,
        title: `Press Escape to cancel an in-progress schematic wire`,
        summary: `Drawing a wire and want out? Escape now drops it \u2014 the universal EDA reflex, complementing right-click cancel and double-click finish.`,
        features: [
          `electronics`,
          `schematic`,
          `ux`
        ]
      },
      {
        id: `2026-06-05-schematic-pcb-net-sync`,
        version: `0.9.4`,
        date: `2026-06-05`,
        category: `feat`,
        title: `Update PCB from schematic maps nets onto pads`,
        summary: `Placing unplaced components from the schematic now assigns each pad's net from the netlist and registers the nets on the board, and parts without a footprint template get pin-derived pads so they're routable.`,
        features: [
          `electronics`,
          `pcb`,
          `schematic`
        ]
      },
      {
        id: `2026-06-05-pcb-board-resize-fit`,
        version: `0.9.4`,
        date: `2026-06-05`,
        category: `feat`,
        title: `Editable PCB board size + fit to enclosure`,
        summary: `Resize the board inline from the Circuit panel, or fit it to the surrounding mechanical parts with one click.`,
        features: [
          `pcb`,
          `ecad`,
          `co-design`
        ],
        mcpTools: []
      },
      {
        id: `2026-06-05-circuit-simulation`,
        version: `0.9.4`,
        date: `2026-06-05`,
        category: `feat`,
        title: `Live circuit simulation \u2014 circuits come alive`,
        summary: `Hit Simulate and the schematic comes alive: wires colour by voltage, LEDs glow, and a DC motor's rotor spins \u2014 a transient MNA solver stepping every frame.`,
        features: [
          `electronics`,
          `simulation`,
          `circuit`
        ]
      },
      {
        id: `2026-06-04-unified-ecad-inspector`,
        version: `0.9.4`,
        date: `2026-06-04`,
        category: `feat`,
        title: `Unified ECAD inspector in the property panel`,
        summary: `Selecting a footprint, net, trace, via, or pad now opens its inspector in the main contextual panel, with the floating overlay reduced to an always-on board summary.`,
        features: [
          `electronics`,
          `pcb`,
          `property-panel`
        ]
      },
      {
        id: `2026-06-04-push-shove-router`,
        version: `0.9.4`,
        date: `2026-06-04`,
        category: `feat`,
        title: `Push-and-shove autorouting`,
        summary: `Autoroute now uses the continuous-space push-and-shove router, detouring around existing copper for cleaner paths, with a grid-router fallback.`,
        features: [
          `electronics`,
          `pcb`,
          `routing`
        ]
      },
      {
        id: `2026-06-04-fix-white-screen-context-restore`,
        version: `0.9.4`,
        date: `2026-06-04`,
        category: `fix`,
        title: `Fix intermittent white viewport`,
        summary: `The on-demand viewport now reliably paints the current scene on load, after edits, and on tab refocus, and recovers a lost or failed WebGL context by remounting \u2014 instead of leaving a blank white canvas until the next interaction.`,
        features: [
          `viewport`
        ]
      },
      {
        id: `2026-06-04-electronics-view-toggle`,
        version: `0.9.4`,
        date: `2026-06-04`,
        category: `feat`,
        title: `Single-view Schematic/Board toggle for PCBs`,
        summary: `The electronics workspace now shows one view at a time \u2014 a full-canvas schematic or the 3D board \u2014 with a prominent toggle (and Tab), replacing the floating overlay layered over the 3D scene.`,
        features: [
          `electronics`,
          `pcb`
        ]
      },
      {
        id: `2026-06-03-pcb-on-canvas`,
        version: `0.9.4`,
        date: `2026-06-03`,
        category: `feat`,
        title: `Edit PCBs in the main 3D scene`,
        summary: `PCB editing now happens in the main canvas alongside the mechanical assembly (ghosted), instead of a separate full-screen electronics mode that hid the rest of the app.`,
        features: [
          `pcb`,
          `ecad`,
          `electronics`,
          `viewport`
        ]
      },
      {
        id: `2026-06-03-pcb-modeless-phase234`,
        version: `0.9.4`,
        date: `2026-06-03`,
        category: `feat`,
        title: `PCB: live interference, auto-route, draggable traces`,
        summary: `On-canvas PCB editing now flags components that clash with the enclosure in red, rubber-bands connected traces when you drag a footprint, adds one-click ratsnest auto-route, and a schematic overlay toggle.`,
        features: [
          `pcb`,
          `ecad`,
          `electronics`,
          `routing`,
          `interference`
        ]
      },
      {
        id: `2026-06-03-pcb-board-transform`,
        version: `0.9.4`,
        date: `2026-06-03`,
        category: `feat`,
        title: `Move and rotate PCB boards`,
        summary: `PCB boards can now be moved, rotated, and scaled as parts, and in-canvas editing (copper, footprints, picking, and the camera) tracks the board's actual placement instead of assuming the origin.`,
        features: [
          `pcb`,
          `ecad`,
          `electronics`,
          `viewport`
        ]
      },
      {
        id: `2026-06-03-pcb-board-solid`,
        version: `0.9.4`,
        date: `2026-06-03`,
        category: `feat`,
        title: `PCB boards are real FR4 solids`,
        summary: `A PCB board now evaluates to a genuine FR4 slab in the live app \u2014 a green body visible outside edit focus, STEP-exportable and ray-traceable \u2014 instead of a data-only placeholder.`,
        features: [
          `pcb`,
          `ecad`,
          `electronics`,
          `kernel`
        ]
      },
      {
        id: `2026-06-01-webgl-context-loss`,
        version: `0.9.4`,
        date: `2026-06-01`,
        category: `fix`,
        title: `Recover from WebGL context loss`,
        summary: `Fixed a viewport crash when the browser dropped the WebGL context (common on Safari); post-processing now tears down and the scene repaints on restore.`,
        features: [
          `viewport`,
          `rendering`,
          `safari`
        ]
      },
      {
        id: `2026-05-18-sheet-metal-suggest-fix`,
        version: `0.9.4`,
        date: `2026-05-18`,
        category: `feat`,
        title: `Sheet-metal self-heal: sheet_metal_suggest_fix`,
        summary: `Closes the AI self-heal loop \u2014 for each manufacturability violation, return the concrete parameter change that resolves it (radius up, flange longer, bends spread, hole moved).`,
        details: "## What's New\n\n- **`sheet_metal_suggest_fix` MCP tool**: takes a session document (and optional shop profile), runs the check, and translates each structured `Violation` into a typed `Fix` an agent can act on \u2014 `increase_radius`, `increase_flange_length`, `shorten_or_split_bend`, `move_hole_or_clearance`, `separate_bends`. Each carries the new numeric target plus a human-readable description.\n- Pass `violation_index` to target one, or omit to get a fix for every open violation.\n\nWith create \u2192 check \u2192 suggest_fix \u2192 re-create \u2192 re-check, an LLM agent can iterate to a manufacturable part with no human in the loop \u2014 the spec's headline AI bet.",
        features: [
          `sheet-metal`,
          `dfm`,
          `mcp`,
          `ai`
        ],
        mcpTools: [
          `sheet_metal_suggest_fix`
        ]
      },
      {
        id: `2026-05-18-sheet-metal-shop-profile`,
        version: `0.9.4`,
        date: `2026-05-18`,
        category: `feat`,
        title: `Tunable sheet-metal shop profile`,
        summary: `The DFM inspector now checks against your own brake/die/grain limits via an editable, persisted shop profile instead of fixed generic defaults.`,
        details: `## What's New

- **Shop Profile editor** in the sheet-metal panel: max bend length, min bend radius (R/t), min flange height, hole\u2192bend, and bend\u2192bend clearances, plus a shop name. Persisted to localStorage and shared across documents.
- The Manufacturability inspector re-runs against the active profile (kernel \`checkSheetMetal\` query) and shows which shop it checked against; "Reset to generic" restores defaults.
- Saved profiles are field-tolerant \u2014 a profile stored before a capability existed still loads, falling back to the generic value for missing keys.

## Fixes

- Wired the sheet-metal kernel bindings onto the engine kernel object and added worker-path post-processing, so sheet-metal parts (flat pattern, bend list, DFM) actually render via the default async eval path \u2014 previously they only appeared on the synchronous fallback.`,
        features: [
          `sheet-metal`,
          `manufacturing`,
          `dfm`,
          `shop-profile`
        ]
      },
      {
        id: `2026-05-18-sheet-metal-polygon-base`,
        version: `0.9.4`,
        date: `2026-05-18`,
        category: `feat`,
        title: `Sheet-metal base flange from arbitrary polygons`,
        summary: `Base flanges are no longer rectangle-only \u2014 pass any CCW outline (with optional CW hole loops) and the rest of the pipeline (unfold, DXF, DFM, cost, hems, jogs) just works.`,
        details: "## What's New\n\n- **`SheetMetalBaseFlangePolygon` IR op** (Rust + TS): outline + holes + thickness + material.\n- **`base_flange_polygon_with_holes` kernel function** exported from `vcad-kernel-sheet`; the existing `base_flange_rect` is now a thin wrapper.\n- **`sheet_metal_create` MCP tool** accepts `outline` (array of `{x,y}` or `[x,y]` points) and `holes`; takes precedence over `width`/`depth`. Holes appear in the flat pattern and on the CUT layer of the layered DXF.\n- Flanges, hems, jogs, DFM, cost, and the AI self-heal loop all keep working because every downstream system reads the panel outline/holes directly.",
        features: [
          `sheet-metal`,
          `manufacturing`
        ]
      },
      {
        id: `2026-05-18-sheet-metal-nesting`,
        version: `0.9.4`,
        date: `2026-05-18`,
        category: `feat`,
        title: `Sheet-metal multi-part nesting`,
        summary: `Pack multiple sheet-metal parts on stock sheets with bottom-left-fill decreasing \u2014 driver for multi-part DXF and real quote-able sheet counts.`,
        details: "## What's New\n\n- **`vcad-kernel-sheet::nesting::nest_rectangles`**: BLFD packer with configurable stock size, spacing, edge margin, and 0\xB0/90\xB0 rotation. Sorts instances by max-dim descending, places each at the lowest-then-leftmost feasible position, starts a new sheet when none fits. Reports per-sheet utilization and flags oversize parts as unplaceable.\n- **`nestSheetMetalParts` WASM binding** + engine helper + `Engine.nestSheetMetalParts(parts, params?)` method.\n- **`sheet_metal_nest` MCP tool**: each part is either an explicit footprint or a session `document_id` (footprint inferred from the flat bbox). Returns placements + sheets used + utilization + summary line.\n\nThis is the spec's Tier-7 nesting capability arriving early. NFP-based true-shape nesting lands in a later tier; rectangular BLFD covers the bulk of laser-cut parts today.",
        features: [
          `sheet-metal`,
          `nesting`,
          `manufacturing`,
          `mcp`
        ],
        mcpTools: [
          `sheet_metal_nest`
        ]
      },
      {
        id: `2026-05-18-sheet-metal-nested-dxf`,
        version: `0.9.4`,
        date: `2026-05-18`,
        category: `feat`,
        title: `Multi-part DXF from nested sheet-metal parts`,
        summary: `Layered DXF, one per stock sheet, with every nested part placed and oriented \u2014 closes the loop from nesting to shop-ready manufacturing artifact.`,
        details: "## What's New\n\n- **`nested_dxf(placements)`** in `vcad-kernel-sheet::dxf`: takes a slice of `NestedPlacement { flat, sheet, dx_mm, dy_mm, rotated }` and emits one DXF string per stock sheet. Same `CUT` / `BEND_UP` / `BEND_DOWN` layer convention as the single-part exporter so shop post-processors don't have to learn a new dialect.\n- **`nestedSheetMetalDxf` WASM binding** accepting `[{chain, sheet, dx_mm, dy_mm, rotated}]` JSON \u2014 each part's chain is independently evaluated, translated, optionally rotated 90\xB0, and written into its sheet's DXF.\n\nWith `sheet_metal_nest` returning placements and this binding turning them into per-sheet DXF, a nested job is one tool call away from a quote-able artifact.",
        features: [
          `sheet-metal`,
          `nesting`,
          `dxf`,
          `manufacturing`
        ]
      },
      {
        id: `2026-05-18-sheet-metal-mcp-tools`,
        version: `0.9.4`,
        date: `2026-05-18`,
        category: `feat`,
        title: `Sheet-metal MCP tools`,
        summary: `AI agents can now create sheet-metal parts, unfold them to a layered DXF, and check manufacturability against a shop profile \u2014 closing the create\u2192check\u2192fix loop.`,
        details: "## What's New\n\n- **`sheet_metal_create`** \u2014 build a rectangular base flange plus an ordered chain of edge flanges; returns a session `document_id` (reusable with inspect_cad / export_cad / open_in_browser), the panel/bend model, flat bbox + area, and generic-shop DFM.\n- **`sheet_metal_unfold`** \u2014 flat pattern (outlines, holes, creases, area, bbox) plus the layered DXF (CUT / BEND_UP / BEND_DOWN, mm).\n- **`sheet_metal_check`** \u2014 manufacturability vs. a field-tolerant shop profile; structured violations an agent can act on, then re-check.\n\nThis is the AI-native leg of the sheet-metal bet: an LLM can iterate to a manufacturable part without a human in the loop. `cost` and `suggest_fix` are deferred until the process-cost model and IR-edit primitives land.",
        features: [
          `sheet-metal`,
          `manufacturing`,
          `mcp`,
          `ai`
        ],
        mcpTools: [
          `sheet_metal_create`,
          `sheet_metal_unfold`,
          `sheet_metal_check`
        ]
      },
      {
        id: `2026-05-18-sheet-metal-jog`,
        version: `0.9.4`,
        date: `2026-05-18`,
        category: `feat`,
        title: `Sheet-metal jog operation`,
        summary: `Z-shaped offsets are now a first-class sheet-metal feature, plumbed all the way from IR through kernel, engine, and MCP.`,
        details: "## What's New\n\n- **`SheetMetalJog` IR op** (Rust + TS): offset, length, radius, direction.\n- **`add_jog` kernel function** in `vcad-kernel-sheet::jog`: two equal-and-opposite 90\xB0 bends. Tail panel ends up parallel to the parent and `offset` mm above. Bends are tagged `;jog:a` / `;jog:b` so the UI labels them as jog members rather than generic flanges.\n- **`sheet_metal_create` MCP tool** gained a `jogs` array alongside `flanges` and `hems` \u2014 the three core sheet-metal moves now compose in one call.\n- Reuses every downstream system: lossless unfold, layered DXF, DFM check, cost, springback, suggest_fix \u2014 jogs flow through unchanged.",
        features: [
          `sheet-metal`,
          `jog`,
          `manufacturing`
        ]
      },
      {
        id: `2026-05-18-sheet-metal-hem`,
        version: `0.9.4`,
        date: `2026-05-18`,
        category: `feat`,
        title: `Sheet-metal hem operation`,
        summary: `First-class hem support \u2014 180\xB0 folds at the edge of a flange for stiffening and burr removal \u2014 wired all the way through IR, kernel, engine, and MCP.`,
        details: "## What's New\n\n- **`SheetMetalHem` IR op** (Rust + TS) with `kind` (Closed | Open), `length`, `gap`, `direction`. A hem is a half-turn around a tight radius producing a small back-flange parallel to the parent \u2014 the most common sheet-metal feature after edge flanges.\n- **`add_hem` kernel function** in `vcad-kernel-sheet::hem`: closed hems pack tight (R = t/2); open hems honour the user-specified gap (R = gap/2). Same lossless unfold, DXF, DFM, and cost machinery picks it up for free \u2014 every hem is a regular bend with `angle = \u03C0` plus a `;hem:closed|open` provenance tag.\n- **`sheet_metal_create` MCP tool** gained a `hems` array alongside `flanges` so an agent can author a hemmed bracket in one call.\n- Engine's `buildSheetMetalChain` walks SheetMetalHem nodes; worker + sync paths both render hems.",
        features: [
          `sheet-metal`,
          `hem`,
          `manufacturing`
        ]
      },
      {
        id: `2026-05-18-sheet-metal-cost`,
        version: `0.9.4`,
        date: `2026-05-18`,
        category: `feat`,
        title: `Sheet-metal cost as a derivative of the model`,
        summary: `Live, line-itemed manufacturing cost for sheet-metal parts \u2014 material/cut/pierce/bend/setup with shop markup, in the panel and as an MCP tool. No more send-to-shop-wait-three-days for a quote.`,
        details: "## What's New\n\n- **Cost badge** in the sheet-metal panel: per-unit total + expandable breakdown (material kg, cut length, pierces, bends, setup, markup) that recomputes live on every edit. Editable quantity for setup amortization.\n- **`sheet_metal_cost` MCP tool**: agents see which line dominates and which design changes lower the price.\n- Kernel `vcad-kernel-sheet::cost`: pure function of `(model, flat, qty, rates)`. Mass comes from the flat area \xD7 thickness \xD7 material density (lookups via the materials registry, so swapping alloy updates cost). Generic low-volume laser-cut defaults work out of the box; rates are field-tolerant for shop overrides.",
        features: [
          `sheet-metal`,
          `cost`,
          `manufacturing`,
          `mcp`
        ],
        mcpTools: [
          `sheet_metal_cost`
        ]
      },
      {
        id: `2026-05-18-sheet-metal-bend-sequence`,
        version: `0.9.4`,
        date: `2026-05-18`,
        category: `feat`,
        title: `Sheet-metal bend sequence optimization`,
        summary: `Return a feasible press-brake bend order \u2014 outermost first, springback-compensated, with a one-line rationale per step.`,
        details: "## What's New\n\n- **`vcad-kernel-sheet::sequence::bend_sequence`** kernel function: outside-in BFS over the bend tree, ties broken by id for determinism. Each step carries angle, radius, hinge length, the brake-compensated angle (target + springback) and a one-line rationale (hem first, jog members together, root-adjacent last).\n- **`sheetMetalSequence` WASM binding** + engine helper + `Engine.sheetMetalSequence(doc)` method.\n- **`sheet_metal_sequence` MCP tool**: agents and shop UIs get the form order directly.",
        features: [
          `sheet-metal`,
          `manufacturing`,
          `mcp`
        ],
        mcpTools: [
          `sheet_metal_sequence`
        ]
      },
      {
        id: `2026-05-16-sheet-metal-manufacturability`,
        version: `0.9.4`,
        date: `2026-05-16`,
        category: `feat`,
        title: `Sheet-metal manufacturability checks`,
        summary: `Typed DFM query over the sheet-metal model against a shop profile \u2014 surfaced live in the sheet-metal panel as a Problems-style inspector.`,
        details: "## What's New\n\n- **`check_manufacturability(model, shop)`** in `vcad-kernel-sheet`: a pure function returning structured `Violation`s \u2014 `BendRadiusBelowMinimum`, `BendExceedsBrakeCapacity`, `FlangeBelowMinHeight`, `HoleTooCloseToBend`, `BendsTooClose` \u2014 each with the ids and measured-vs-required numbers a fix needs.\n- **`ShopProfile`** type with a sensible `generic()` default (3 m brake, R/t \u2265 1, 5 mm min flange, hole/bend clearances) so the inspector is useful before a shop is configured.\n- Threaded through the WASM binding and engine glue alongside the flat pattern.\n- **DFM inspector** in the sheet-metal panel: a `0 errors \xB7 1 warning` chip that reads \"Shop-ready\" when clean, with severity-dotted rows.\n\nThis is the first leg of the spec's DFM-as-typed-query \u2014 the same data will back the `sheet_metal.check` MCP tool.",
        features: [
          `sheet-metal`,
          `manufacturing`,
          `dfm`
        ]
      },
      {
        id: `2026-05-16-sheet-metal-dxf-export`,
        version: `0.9.4`,
        date: `2026-05-16`,
        category: `feat`,
        title: `Sheet-metal flat-pattern DXF export`,
        summary: `Export a sheet-metal part's flat pattern as a layered DXF (CUT / BEND_UP / BEND_DOWN, in millimetres) ready to send to a laser bureau.`,
        details: "## What's New\n\n- **`flat_pattern_to_dxf`** in `vcad-kernel-sheet`: serialises a `FlatPattern` to DXF R12 with the manufacturing layer convention from the design spec \u2014 `CUT` (red) for panel outlines + holes, `BEND_UP` (blue) and `BEND_DOWN` (cyan) for creases. Units are millimetres so geometry imports true-scale.\n- Threaded through the WASM binding and engine glue: the DXF rides along with the flat pattern in a single boundary call (no extra round-trip).\n- **Download DXF** button in the sheet-metal panel.\n\nThis closes the last gap in the sheet-metal foundation tier.",
        features: [
          `sheet-metal`,
          `manufacturing`,
          `dxf`,
          `export`
        ]
      },
      {
        id: `2026-05-11-dfm-tools`,
        version: `0.9.4`,
        date: `2026-05-11`,
        category: `feat`,
        title: `Design-for-Manufacturing analysis`,
        summary: `Structured DFM checks across CNC, FDM/SLA, injection, sheet metal, and sand/investment casting, with agent-native MCP tools and a shared cost model.`,
        details: "## What's New\n\n- **`vcad-kernel-dfm`** crate: per-process rule packs (TOML), structured `DfmIssue` payloads with face references and suggested fixes, and a `Process` enum covering CNC 3-axis, FDM, SLA, injection molding, sheet metal, sand casting, and investment casting.\n- **`vcad-kernel-cost`** crate: shared `Material` catalog + `CostEstimate` shape consumed by both the slicer and the DFM cost section, so QuotePanel / DFM / slicer numbers agree.\n- **4 new MCP tools**: `dfm_check`, `dfm_explain`, `dfm_suggest_fix`, `dfm_apply_fix` \u2014 close the agent loop (paste a part, get a manufacturable revision back). `dfm_apply_fix` v1 supports `set_param` patches (raise a fillet, thicken a wall).\n- **Forkable rule packs** at `lib/dfm/*.toml` so shops can tune thresholds for their tool library / supplier without recompiling.\n- **Two new WASM bindings**: `Solid.runDfm()` for in-place DFM on an evaluated part, and `estimate_cost_for_process()` for per-process cost.\n\n## Refactor\n\n- Renamed the top-level `cad-lib/` directory to `lib/` so it can host the loon stdlib alongside the DFM rule packs.",
        features: [
          `dfm`,
          `manufacturing`,
          `cost`
        ],
        mcpTools: [
          `dfm_check`,
          `dfm_explain`,
          `dfm_suggest_fix`,
          `dfm_apply_fix`
        ]
      },
      {
        id: `2026-05-10-urdf-primitive-centering`,
        version: `0.9.4`,
        date: `2026-05-10`,
        category: `feat`,
        title: `Unitree G1 + Go2 examples render with real meshes`,
        summary: `Replace hand-authored primitive URDFs with the official Unitree G1 (STL) and Go2 (Collada/DAE) descriptors; vendor the meshes and inline them through three.js loaders so links render at full fidelity instead of placeholder cubes. Includes a URDF primitive-centering fix so cube/cylinder geometry sits on the link frame origin.`,
        features: [
          `urdf`,
          `robotics`,
          `import`,
          `humanoid`,
          `quadruped`
        ]
      },
      {
        id: `2026-05-07-unitree-robot-sim`,
        version: `0.9.4`,
        date: `2026-05-07`,
        category: `feat`,
        title: `Unitree G1 humanoid and Go2 quadruped demo URDFs`,
        summary: `Ship primitive-geometry URDFs for the Unitree G1 humanoid (23 DOF) and Go2 quadruped (12 DOF) plus a 'vcad simulate' CLI command that runs them through the physics kernel.`,
        features: [
          `robotics`,
          `physics`,
          `urdf`,
          `cli`
        ]
      },
      {
        id: `2026-05-05-translucent-materials`,
        version: `0.9.4`,
        date: `2026-05-05`,
        category: `feat`,
        title: `Translucent and glass materials in the viewport`,
        summary: `Material presets now support transmission, IOR, thickness, and clearcoat so glass enclosures and acrylic housings render with realistic refraction.`,
        features: [
          `rendering`,
          `materials`,
          `glass`
        ]
      },
      {
        id: `2026-05-05-silhouette-outline`,
        version: `0.9.4`,
        date: `2026-05-05`,
        category: `feat`,
        title: `Subtle dark silhouette around every part`,
        summary: `A screen-space outline post-process draws a thin dark contour around every rendered part, the same touch polished CAD viewers use to keep parts legible against busy backgrounds.`,
        features: [
          `rendering`,
          `outline`
        ]
      },
      {
        id: `2026-05-03-xr-voice`,
        version: `0.9.4`,
        date: `2026-05-03`,
        category: `feat`,
        title: `Voice in XR \u2014 talk to the assistant in headset`,
        summary: `Hold a single pinch in empty space for a moment to start voice push-to-talk. Release to ship the transcript to the AI assistant with your current selection as context.`,
        details: `## What's New

- **Push-to-talk** \u2014 hold a pinch in empty space (no part captured, other hand open) for ~0.8 s, voice recognition starts; release ends it
- The transcript is sent through the existing chat handler with the user's current selection as \`SelectionContext\`, so phrases like "make this 20% smaller" reference the right part
- The AI's tool-call results land in the document just like a typed chat message \u2014 full undo, full feature tree integration
- Falls back gracefully on browsers without \`webkitSpeechRecognition\`

Vision Pro Safari supports the WebSpeech API, so this works hands-free on AVP. The 3-variant ghost UI will land in a follow-up.`,
        features: [
          `vr`,
          `ar`,
          `webxr`,
          `voice`,
          `ai`
        ]
      },
      {
        id: `2026-05-03-xr-shared-table`,
        version: `0.9.4`,
        date: `2026-05-03`,
        category: `feat`,
        title: `Shared table \u2014 see your collaborators in XR`,
        summary: `Two engineers in the same cloud document now see each other's headset and hands in their VR/AR session, anchored to the same point on the same model.`,
        details: `## What's New

- New per-document realtime channel for XR pose updates, sibling to the existing collab op channel
- Headset + left/right wrist poses broadcast at ~10 Hz
- Poses are exchanged in scene-local coordinates, so two users with different desks still see each other at the same point on the same model \u2014 no shared spatial anchor required
- Stale peers are pruned automatically after 5 s if their session crashes
- Floating head + hand avatars rendered for each remote participant

This is the foundation for true co-presence design review in XR. Spatial annotations and Personas integration land in follow-ups.`,
        features: [
          `vr`,
          `ar`,
          `webxr`,
          `collab`,
          `presence`
        ]
      },
      {
        id: `2026-05-03-xr-scale-teleport`,
        version: `0.9.4`,
        date: `2026-05-03`,
        category: `feat`,
        title: `Scale teleport \u2014 step inside your model`,
        summary: `Bimanual pinch in empty space grabs the world. Spread your hands to scale the model up; pull them together to shrink it back down. The point under your hands stays under your hands.`,
        details: `## What's New

- **Bimanual pinch** in empty space (no part picked) enters scale-teleport mode
- **Spread hands** \u2192 scale up; **pull together** \u2192 scale down
- **Translate both hands** \u2192 pan the scene
- The grabbed anchor point stays pinned to the bimanual midpoint, so scaling feels physical
- Fillet still triggers when one hand grabs a part \u2014 gestures don't fight each other
- View transform persists between sessions, so re-entering picks up where you left off

Walk around your robot at 1:1, sit inside your chair, dial back out to dial in fillets.`,
        features: [
          `vr`,
          `ar`,
          `webxr`,
          `scale-teleport`,
          `bimanual`
        ]
      },
      {
        id: `2026-05-03-xr-bimanual-fillet`,
        version: `0.9.4`,
        date: `2026-05-03`,
        category: `feat`,
        title: `Bimanual fillet \u2014 round edges with your hands`,
        summary: `In WebXR, pinch a part with both hands and the distance between your hands becomes the fillet radius. Release to commit a real parametric Fillet to the document.`,
        details: `## What's New

- Pinch a part with one hand to capture it as the fillet target
- Pinch with the other hand to enter bimanual mode
- Distance between pinch midpoints maps to fillet radius (1 m = 1000 mm at desktop scale)
- Release either hand to commit \`Fillet\` op \u2014 single undo entry, fully scrubbable
- Scene auto-scales to desktop scale (1 mm = 1 mm physical) on entering XR

This is the trailer-clip gesture for vcad in space \u2014 the first parametric CAD fillet you can dial in with your hands.`,
        features: [
          `vr`,
          `ar`,
          `webxr`,
          `fillet`,
          `bimanual`
        ]
      },
      {
        id: `2026-05-03-webxr-foundation`,
        version: `0.9.4`,
        date: `2026-05-03`,
        category: `feat`,
        title: `WebXR \u2014 view your models in VR/AR`,
        summary: `Enter VR or AR from the viewport to see your CAD model in 3D space. Works on Apple Vision Pro Safari, Meta Quest Browser, and any WebXR-capable headset.`,
        details: `## What's New

- **Enter XR button** appears top-right when a WebXR-capable runtime is detected (Vision Pro, Quest, etc.)
- **VR mode** \u2014 fully immersive view of your scene
- **AR mode** \u2014 passthrough so the model floats in your room
- **Hand tracking** is enabled by default; controllers also supported
- Ray tracing falls back to the standard tessellated renderer while in XR

This is the foundation for in-headset editing \u2014 bimanual gestures and voice-driven AI design land in upcoming releases.`,
        features: [
          `vr`,
          `ar`,
          `webxr`,
          `vision-pro`
        ]
      },
      {
        id: `2026-04-30-cylinder-cylinder-steinmetz-union`,
        version: `0.9.4`,
        date: `2026-04-30`,
        category: `fix`,
        title: `Cylinder \u222A Cylinder no longer double-counts the Steinmetz overlap`,
        summary: "Two perpendicular intersecting cylinders of equal radius (the cross-shaft / `+` topology) used to come out of `boolean_op` with both lateral walls intact, so the divergence-theorem volume integral summed both closed surfaces and missed the Steinmetz subtraction (\u2248 26% over-count). `ssi::intersect_surfaces` now has an analytic perpendicular-cylinder handler that emits the two Steinmetz ellipses as a new `IntersectionCurve::TwoSampled` variant, and `boolean_op` routes simple cylinder \xD7 cylinder pairs to a specialized mesh emitter that tessellates each wall with vertices on the SSI samples and drops the inside-other strip \u2014 giving a watertight result whose volume is correct to within polygonal-approximation error.",
        features: [
          `kernel`,
          `boolean`
        ]
      },
      {
        id: `2026-04-29-sphere-intersection-cube`,
        version: `0.9.4`,
        date: `2026-04-29`,
        category: `fix`,
        title: `Sphere \u2229 Cube no longer returns an empty mesh`,
        summary: `Boolean Intersection of a sphere with a cube/half-space (used for hemispheres, lenses, spherical caps) used to produce an empty mesh because the sphere was split into one face-with-hole plus a planar disk and the lone sphere face was always classified on the wrong side. The sphere now splits into two cap faces \u2014 each classified independently via the loop's solid-angle direction \u2014 so dome and lens constructions work.`,
        features: [
          `kernel`,
          `boolean`
        ]
      },
      {
        id: `2026-04-29-difference-tangent-cyl-union`,
        version: `0.9.4`,
        date: `2026-04-29`,
        category: `fix`,
        title: `Difference cutter with tangent Union'd cylinder no longer under-subtracts`,
        summary: `When a Difference uses a Union of primitives whose lateral surfaces share a tangent boundary as the cutter (e.g. a slot built from a rect plus tangent cylinders), the cylinder's full SSI circle on the target face fell entirely inside the polygon, tangent to two edges. The arc-based splitter saw both circle halves as 'inside' and arbitrarily picked one \u2014 leaving ~66% of the cylinder's external lobe un-subtracted. The polygon is now split along the chord between the two tangent points first, so each sub-polygon contains exactly one arc and the inside check resolves unambiguously.`,
        features: [
          `kernel`,
          `boolean`
        ]
      },
      {
        id: `2026-04-28-v0-9-4`,
        version: `0.9.4`,
        date: `2026-04-28`,
        category: `feat`,
        title: `v0.9.4`,
        summary: `12 new UI languages plus French; one-click LAN print to Bambu P1S/X1/A1; in-app feedback button; Inter typography; full keyboard navigation; ray tracer SSAO + adaptive supersampling; cube-fillet rendering rebuild; STEP export through boolean Difference; Loon export warnings.`,
        features: [
          `i18n`,
          `printing`,
          `raytrace`,
          `fillet`,
          `step`,
          `loon`,
          `typography`,
          `keyboard`
        ]
      },
      {
        id: `2026-04-28-step-export-after-difference`,
        version: `0.9.4`,
        date: `2026-04-28`,
        category: `fix`,
        title: `STEP export survives boolean Difference output`,
        summary: "The writer used to error with `Invalid topology: half-edge has no parent edge` on every BRep that came out of a Difference (cube-minus-cylinder, plates with through-holes, stepped shafts) because boolean sewing leaves orphan half-edges where a curved face meets a polygonal hole. The writer now synthesizes a line edge for each orphan half-edge so the loop emits cleanly.",
        features: [
          `step`,
          `kernel`
        ]
      },
      {
        id: `2026-04-28-ssao`,
        version: `0.9.4`,
        date: `2026-04-28`,
        category: `feat`,
        title: `Screen-space ambient occlusion (SSAO)`,
        summary: `Adds a screen-space AO pass to the ray tracer, darkening concavities and tight corners for crisper part definition.`,
        features: [
          `raytrace`,
          `rendering`
        ],
        mcpTools: []
      },
      {
        id: `2026-04-28-loon-export-unsupported-warnings`,
        version: `0.9.4`,
        date: `2026-04-28`,
        category: `fix`,
        title: `Loon export warns on unsupported variants`,
        summary: `Exporting a document with Text2D, ImportedMesh, PcbBoard, EmbroideryPattern, or PartInstance now surfaces a clear warning instead of silently dropping the content.`,
        features: [
          `loon`,
          `export`
        ]
      },
      {
        id: `2026-04-28-chat-screenshot-preview-persists`,
        version: `0.9.4`,
        date: `2026-04-28`,
        category: `fix`,
        title: `AI chat screenshot previews stay rendered after the next turn`,
        summary: `When the AI used screenshot_viewport, the inline preview vanished as soon as the next turn started \u2014 the DB roundtrip for the JPEG data URL races the next reproject, and Supabase Realtime can drop the large row. Hydration now preserves any client-captured imageDataUrl across re-projections so the screenshot stays in the chat.`,
        features: [
          `chat`,
          `ai`
        ],
        mcpTools: []
      },
      {
        id: `2026-04-28-adaptive-supersampling`,
        version: `0.9.4`,
        date: `2026-04-28`,
        category: `feat`,
        title: `Adaptive supersampling at silhouettes`,
        summary: `Ray tracer fires extra stratified rays only on edge pixels, giving clean silhouettes on the first frame with minimal cost overhead.`,
        features: [
          `raytrace`,
          `antialiasing`
        ],
        mcpTools: []
      },
      {
        id: `2026-04-27-fillet-cylinder-center-fix`,
        version: `0.9.4`,
        date: `2026-04-27`,
        category: `fix`,
        title: `Fillet corners on cubes render smoothly end-to-end`,
        summary: `End-to-end rebuild of cube-fillet rendering: cylinder centers now sit inside the solid (was sign-flipped, producing exploded panels), corners use spherical octants with boundary-shaped rings (was flat triangles + 3-tri fans), and sphere/cylinder boundaries weld at matching great-circle samples so creased_normals smooths the tangent edge cleanly.`,
        features: [
          `fillet`,
          `kernel`,
          `tessellation`
        ]
      },
      {
        id: `2026-04-26-part-clone`,
        version: `0.9.4`,
        date: `2026-04-26`,
        category: `feat`,
        title: `Part and PartMesh now implement Clone`,
        summary: `Added Clone derivation to Part and PartMesh, enabling copy-free duplication of parts in Rust modeling scripts.`,
        features: [
          `api`,
          `modeling`
        ]
      },
      {
        id: `2026-04-26-keyboard-focus-zones`,
        version: `0.9.4`,
        date: `2026-04-26`,
        category: `feat`,
        title: `Fully keyboardable CAD: focus zones and tree nav`,
        summary: `Tab cycles focus between viewport, tree, and property panel; j/k navigate the part tree; R/H/W/D prime the matching property input from the keyboard.`,
        features: [
          `keyboard`,
          `accessibility`,
          `feature-tree`,
          `property-panel`
        ]
      },
      {
        id: `2026-04-26-inter-typography`,
        version: `0.9.4`,
        date: `2026-04-26`,
        category: `feat`,
        title: `Inter typography for native desktop feel`,
        summary: `The UI now reads as Inter (self-hosted, variable). Berkeley Mono is reserved for code-shaped surfaces \u2014 formulas, coordinates, hex values, kbd shortcuts, logs \u2014 so panels and dialogs feel like a real desktop app instead of a code editor.`,
        features: [
          `typography`,
          `design`
        ]
      },
      {
        id: `2026-04-25-macos-first-launch-docs`,
        version: `0.9.3`,
        date: `2026-04-25`,
        category: `docs`,
        title: `macOS first-launch bypass instructions`,
        summary: "Until releases are Apple-notarized, opening the macOS .dmg trips a Gatekeeper warning. README and every GitHub release page now spell out the three ways past it: System Settings \u2192 Privacy & Security \u2192 Open Anyway, right-click \u2192 Open, or `xattr -d com.apple.quarantine /Applications/vcad.app`.",
        features: [
          `desktop`,
          `docs`
        ]
      },
      {
        id: `2026-04-25-i18n-coverage-expansion`,
        version: `0.9.4`,
        date: `2026-04-25`,
        category: `feat`,
        title: `Expanded i18n coverage across modals, panels, and tutorials`,
        summary: `About modal, guided tutorial, error screens, offline indicator, fork prompt, recent files, command palette, property panel, and feature tree now route through i18n. English, Spanish, and French translations were added for all newly-covered strings.`,
        features: [
          `i18n`,
          `spanish`,
          `french`
        ]
      },
      {
        id: `2026-04-25-french-ui-translation`,
        version: `0.9.4`,
        date: `2026-04-25`,
        category: `feat`,
        title: `French UI translation`,
        summary: `Added French (fr) to the i18n bundle. Menus, command palette, toolbar, status bar, and welcome screen now render in French when selected from the locale picker or detected from the browser language.`,
        features: [
          `i18n`,
          `french`
        ]
      },
      {
        id: `2026-04-25-feedback-button`,
        version: `0.9.4`,
        date: `2026-04-25`,
        category: `feat`,
        title: `Header feedback button`,
        summary: `A megaphone button in the header's top-right opens a quick feedback dialog. Submitting opens a prefilled GitHub issue so you can tell us what's working and what isn't.`,
        features: [
          `header`,
          `feedback`
        ]
      },
      {
        id: `2026-04-25-desktop-magic-link-signin`,
        version: `0.9.3`,
        date: `2026-04-25`,
        category: `feat`,
        title: `Desktop magic-link sign-in`,
        summary: `Sign in to vcad from the Tauri desktop app. Magic-link clicks now route through https://vcad.io/auth/desktop and back to the app via the vcad:// custom scheme, completing the Supabase session in-process. Password-recovery and email-change links use the same bridge.`,
        features: [
          `auth`,
          `desktop`
        ]
      },
      {
        id: `2026-04-25-bambu-printer-support`,
        version: `0.9.4`,
        date: `2026-04-25`,
        category: `feat`,
        title: `One-click print to Bambu P1S over LAN`,
        summary: `Print directly from vcad to a Bambu P1S/X1/A1 over the local network. Discover the printer, enter its access code (cached locally per serial), then Slice and Print to send a sliced .gcode.3mf the printer can run as-is. Live status polled every 2.5s.`,
        features: [
          `printing`,
          `bambu`,
          `slicer`,
          `3mf`
        ]
      },
      {
        id: `2026-04-25-12-language-translations`,
        version: `0.9.4`,
        date: `2026-04-25`,
        category: `feat`,
        title: `12 new UI languages`,
        summary: `Added German, Japanese, Simplified Chinese, Traditional Chinese, Korean, Brazilian Portuguese, Italian, Russian, Polish, Turkish, Dutch, and Czech translations using industry-standard CAD terminology (e.g. Verrundung, \u30D5\u30A3\u30EC\u30C3\u30C8, \u5706\u89D2, Raccordo).`,
        features: [
          `i18n`,
          `de`,
          `ja`,
          `zh`,
          `zh-tw`,
          `ko`,
          `pt`,
          `it`,
          `ru`,
          `pl`,
          `tr`,
          `nl`,
          `cs`
        ]
      },
      {
        id: `2026-04-24-v0-9-2-desktop-release-fixes`,
        version: `0.9.2`,
        date: `2026-04-24`,
        category: `fix`,
        title: `Desktop release pipeline fixes (Windows + macOS)`,
        summary: "Cross-platform Node wrapper for @vcad/kernel-wasm build so Windows no longer chokes on bash-only script syntax. macOS codesign step now skips cleanly when Apple secrets aren't configured instead of piping empty data into `security import`.",
        features: [
          `desktop`,
          `ci`
        ]
      },
      {
        id: `2026-04-24-v0-9-1`,
        version: `0.9.1`,
        date: `2026-04-24`,
        category: `feat`,
        title: `v0.9.1`,
        summary: `Unified lighting: studio IBL + ACES tonemapping through a canonical render_bake shading path. Sketch mode now lives inside the Builder shell. Short /~<id> doc URLs via nanoid.`,
        features: [
          `lighting`,
          `sketch`,
          `app`
        ]
      },
      {
        id: `2026-04-24-spanish-ui-translation`,
        version: `0.9.2`,
        date: `2026-04-24`,
        category: `fix`,
        title: `Spanish UI translation now applies across menus and commands`,
        summary: `Wired command registry, header menu bar, ray-tracing submenu, and status bar through the i18n system. Filled in missing Spanish translations so menus, command palette entries, and status text render in Spanish when the browser locale is set to es.`,
        features: [
          `i18n`,
          `spanish`
        ]
      },
      {
        id: `2026-04-24-parametric-bike-models`,
        version: `0.9.1`,
        date: `2026-04-24`,
        category: `feat`,
        title: `Parametric documents \u2014 named parameters and expression bindings`,
        summary: `Documents can now declare named parameters (wheelbase, headAngle...) and bind op fields to expressions via a sidecar. AI-generated models come back parametric \u2014 scrub a parameter, the whole bike updates. Powered by a new tang-expr string parser shared by the Rust kernel and the TS engine.`,
        features: [
          `parameters`,
          `expressions`,
          `ai`,
          `mcp`
        ],
        mcpTools: [
          `create_cad_document`
        ]
      },
      {
        id: `2026-04-24-chat-image-drop`,
        version: `0.9.1`,
        date: `2026-04-24`,
        category: `feat`,
        title: `Drop images into the AI chat`,
        summary: `Dragging an image onto the chat sidebar attaches it to the composer, and dropping an image on the viewport now opens the chat and attaches it there instead of failing. Ask the AI to build CAD from the picture.`,
        features: [
          `chat`,
          `ai`
        ]
      },
      {
        id: `2026-04-23-v0-9-0`,
        version: `0.9.0`,
        date: `2026-04-23`,
        category: `feat`,
        title: `v0.9.0`,
        summary: `Boolean robustness (coplanar-coincident face detection, arc-split dedup) with an expanded degenerate-case test suite. Desktop updater banner now waits for tagged releases instead of every push. PWA precache cap raised to 12 MiB so large WASM assets ship to offline installs.`,
        features: [
          `booleans`,
          `desktop`,
          `pwa`
        ]
      },
      {
        id: `2026-04-23-stdlib-parts-library`,
        version: `0.9.1`,
        date: `2026-04-23`,
        category: `feat`,
        title: `Stdlib parts library (fasteners + bearings)`,
        summary: "New parametric parts library: bolts (M2\u2013M12 ISO 4762), hex nuts, flat washers, 608 skate bearings. Parts remain editable after insertion and round-trip through save/load. McMaster, ISO, and DIN catalog numbers cross-referenced on every part. New chat + MCP tools `search_parts` and `place_part`.",
        features: [
          `parts`,
          `fasteners`,
          `bearings`,
          `chat`,
          `mcp`
        ],
        mcpTools: [
          `search_parts`,
          `place_part`
        ]
      },
      {
        id: `2026-04-23-launch-prep-legal`,
        version: `0.8.0`,
        date: `2026-04-23`,
        category: `feat`,
        title: `Privacy, terms, and a proper license`,
        summary: `Privacy policy, terms of service, and security pages are live at /privacy, /terms, and /security, linked from the account menu. New users see a brief acceptance prompt on first load. vcad is now licensed under Apache 2.0 with Municipal Robotics Corporation as the copyright holder.`,
        features: [
          `legal`,
          `onboarding`,
          `licensing`
        ]
      },
      {
        id: `2026-04-23-fix-chat-free-limit-when-signed-in`,
        version: `0.8.0`,
        date: `2026-04-23`,
        category: `fix`,
        title: `Stop showing 'Free chat limit reached' to signed-in users`,
        summary: `Signed-in users with credits no longer see the anon free-tier banner when their access token momentarily fails to validate \u2014 the chat client now refreshes the Supabase session and retries, and the banner is gated to truly anonymous sessions.`,
        features: [
          `chat`,
          `auth`
        ]
      },
      {
        id: `2026-04-23-auto-zoom-sketch-viewport`,
        version: `0.9.1`,
        date: `2026-04-23`,
        category: `feat`,
        title: `Auto-zoom viewport to fit populated sketches on open`,
        summary: `Opening a document that lands in sketch mode with existing segments now frames the sketch automatically instead of defaulting to a fixed 60 mm distance. Skipped when a share URL carries a ?at= viewer-state hint.`,
        features: [
          `sketch`,
          `viewport`,
          `camera`
        ]
      },
      {
        id: `2026-04-23-ai-chat-higher-level-tools`,
        version: `0.8.0`,
        date: `2026-04-23`,
        category: `feat`,
        title: `Higher-level tools for the AI chat`,
        summary: `Added tube, polyline_tube, inspect_part, and place tools plus a pivot option on rotate (defaults to the part's bbox center) and a quad option on screenshot_viewport. Captures now suppress selection highlights and draw an XYZ axes gnomon so material colors and orientation read cleanly.`,
        features: [
          `chat`,
          `ai`,
          `viewport`
        ],
        mcpTools: [
          `tube`,
          `polyline_tube`,
          `inspect_part`,
          `place`
        ]
      },
      {
        id: `2026-04-16-billing-upgrade-flow`,
        version: `0.8.0`,
        date: `2026-04-16`,
        category: `feat`,
        title: `Pro and Max plans are live`,
        summary: `If you're hitting the limits of the free tier, you can now upgrade to Pro or Max through Stripe. There's a usage meter in the sidebar so you can see how much you've burned through, and yes, there is confetti when you subscribe. Free tier's still got 500k tokens a month \u2014 no change there.`,
        features: [
          `billing`,
          `chat`,
          `stripe`,
          `ux`
        ]
      },
      {
        id: `2026-04-16-ai-as-participant`,
        version: `0.8.0`,
        date: `2026-04-16`,
        category: `feat`,
        title: `The AI is in the room with you`,
        summary: `The chat AI now shows up in your viewport as its own little camera \u2014 you can see where it's looking and what it's selecting, same as if it were another person on the call. Pick whether your view follows along, locks to it, or does its own thing. Also: no more getting yanked back to the AI's camera mid-drag.`,
        features: [
          `chat`,
          `viewport`,
          `collab`,
          `ux`
        ],
        mcpTools: [
          `focus_part`,
          `frame_all`,
          `set_view`
        ]
      },
      {
        id: `2026-04-15-splash-screen-unified-boot`,
        version: `0.8.0`,
        date: `2026-04-15`,
        category: `feat`,
        title: `A real splash screen, finally`,
        summary: `Boot used to flicker on fast connections and leave you staring at nothing on slow ones. Now there's a proper splash: you can watch the kernel download byte-by-byte, catch a rotating tip while you wait, and we quietly check for service worker updates in the background.`,
        features: [
          `app`,
          `ux`,
          `boot`,
          `pwa`
        ]
      },
      {
        id: `2026-04-15-sketch-session-kernel`,
        version: `0.8.0`,
        date: `2026-04-15`,
        category: `feat`,
        title: `Unified sketch session in kernel`,
        summary: `New SketchSession in vcad-kernel-constraints owns tool state, snapping, hit-testing, undo/redo and the LM solver; web app and TUI share it via WASM.`,
        features: [
          `sketch`,
          `kernel`,
          `constraints`,
          `tui`,
          `wasm`
        ]
      },
      {
        id: `2026-04-15-sketch-math-web-migration`,
        version: `0.8.0`,
        date: `2026-04-15`,
        category: `feat`,
        title: `Web sketch math routed through kernel`,
        summary: `Plane projection, snap, hit-test, and rectangle/circle builders now come from @vcad/core/sketch-math, a kernel-backed WASM wrapper \u2014 SketchPlane3D.tsx and sketch-store.ts no longer own duplicate copies.`,
        features: [
          `sketch`,
          `kernel`,
          `wasm`,
          `web`
        ]
      },
      {
        id: `2026-04-15-mobile-tool-palette-parity`,
        version: `0.8.0`,
        date: `2026-04-15`,
        category: `feat`,
        title: `Mobile tool palette reaches desktop parity`,
        summary: `Mobile bottom bar is now a 7-tab tool palette (Create, Transform, Combine, Modify, Assembly, Simulate, Export) sharing a useToolDefinitions hook with desktop \u2014 every operation is reachable on phones.`,
        features: [
          `mobile`,
          `ux`,
          `toolbar`
        ]
      },
      {
        id: `2026-04-12-rich-tool-chips`,
        version: `0.8.0`,
        date: `2026-04-12`,
        category: `feat`,
        title: `Rich AI chat tool call chips`,
        summary: `Tool call chips now show action sentences with clickable part links, human-readable field lists, and per-message operation summaries.`,
        features: [
          `ai`,
          `chat`,
          `ux`
        ]
      },
      {
        id: `2026-04-11-crud-tool-registry`,
        version: `0.8.0`,
        date: `2026-04-11`,
        category: `feat`,
        title: `CRUD tool registry for AI chat`,
        summary: `Replaced 8 hand-wired chat tools with kernel-driven CRUD registry. AI can now create, read, update, and delete any CAD feature with full document awareness.`,
        features: [
          `ai`,
          `chat`,
          `tools`,
          `registry`
        ],
        mcpTools: [
          `create`,
          `read`,
          `update`,
          `delete`
        ]
      },
      {
        id: `2026-03-27-mcp-apps-viewer`,
        version: `0.8.0`,
        date: `2026-03-27`,
        category: `feat`,
        title: `MCP Apps: Inline 3D Viewer`,
        summary: `Geometry tools now return an interactive 3D viewport via MCP Apps, rendering models inline in Claude Desktop, ChatGPT, and other MCP clients.`,
        features: [
          `mcp`,
          `viewer`,
          `mcp-apps`
        ],
        mcpTools: [
          `create_cad_document`,
          `create_cad_loon`,
          `import_step`
        ]
      },
      {
        id: `2026-02-25-boolean-cap-fix`,
        version: `0.8.0`,
        date: `2026-02-25`,
        category: `fix`,
        title: `Fix missing faces on cylinder cap booleans`,
        summary: `Four fixes to the boolean pipeline that restore missing annular faces on flanged hubs, bolt patterns, and similar cylinder cap operations.`,
        features: [
          `booleans`,
          `tessellation`,
          `cylinder`
        ]
      },
      {
        id: `2026-02-19-pcb-ecad-support`,
        version: `0.8.0`,
        date: `2026-02-19`,
        category: `feat`,
        title: `PCB & ECAD Support`,
        summary: `Full PCB design pipeline: schematic capture, routing, DRC, Gerber export, and signal integrity simulation.`,
        features: [
          `pcb`,
          `ecad`,
          `schematic`,
          `routing`,
          `drc`,
          `gerber`,
          `simulation`
        ],
        mcpTools: [
          `create_schematic`,
          `place_components`,
          `route_nets`,
          `run_drc`,
          `run_erc`,
          `export_gerber`,
          `calc_impedance`
        ]
      },
      {
        id: `2026-02-03-twist-taper-extrude`,
        version: `0.8.0`,
        date: `2026-02-03`,
        category: `feat`,
        title: `Twist & Taper Extrude`,
        summary: `Add twist angle and taper draft to extrusions for more expressive geometry.`,
        details: `## What's New

- **Twist angle** - Rotate the profile as it extrudes for helical shapes
- **Taper draft** - Add draft angle for molding and casting
- **Combined effects** - Use both twist and taper together
- **Live preview** - See changes in real-time as you adjust parameters`,
        features: [
          `extrude`,
          `modeling`,
          `parametric`
        ]
      },
      {
        id: `2026-02-02-whats-new-panel`,
        version: `0.8.0`,
        date: `2026-02-02`,
        category: `feat`,
        title: `What's New Panel`,
        summary: `Stay up to date with new features via the changelog panel.`,
        details: `## What's New

- **Auto-notification** - Badge appears when new features ship
- **Simple list** - See all updates at a glance
- **Detailed descriptions** - Learn what changed and why`,
        features: [
          `changelog`,
          `onboarding`,
          `ux`
        ]
      },
      {
        id: `2026-02-02-cam-toolpaths`,
        version: `0.8.0`,
        date: `2026-02-02`,
        category: `feat`,
        title: `CAM Toolpath Generation`,
        summary: `Generate CNC toolpaths for milling. Supports 2D contouring, 3D roughing, and stock simulation.`,
        details: `## What's New

- **2D contouring** - Profile and pocket operations
- **3D roughing** - Adaptive clearing with waterline passes
- **Stock simulation** - Visualize material removal in real-time
- **Tool library** - Flat, ball, and bull endmills with custom parameters
- **G-code export** - Ready for your CNC machine`,
        features: [
          `cam`,
          `cnc`,
          `manufacturing`
        ]
      },
      {
        id: `2026-02-02-ai-text-to-cad`,
        version: `0.8.0`,
        date: `2026-02-02`,
        category: `feat`,
        title: `AI Text-to-CAD`,
        summary: `Describe what you want to build in plain English. Generate 3D models with cad0.`,
        details: `## What's New

- **Chat interface** - Describe parts in natural language
- **Browser inference** - Run cad0-mini locally for privacy
- **Server fallback** - Use cloud inference for complex requests
- **Iterative refinement** - Add to existing models with follow-up prompts
- **Rating feedback** - Help improve the model with thumbs up/down`,
        features: [
          `ai`,
          `chat`,
          `generation`
        ]
      },
      {
        id: `2026-02-01-url-sharing`,
        version: `0.8.0`,
        date: `2026-02-01`,
        category: `feat`,
        title: `URL Sharing`,
        summary: `Share models instantly via URL. VCode encoding fits entire designs in a link.`,
        details: `## What's New

- **?ir= parameter** - Entire model encoded in URL
- **Gzip compression** - Keeps URLs reasonably short
- **One-click sharing** - Copy link from share menu
- **No account required** - Recipients can view without signing in`,
        features: [
          `sharing`,
          `collaboration`,
          `export`
        ]
      },
      {
        id: `2026-02-01-ui-redesign`,
        version: `0.8.0`,
        date: `2026-02-01`,
        category: `feat`,
        title: `Redesigned Interface`,
        summary: `New floating toolbar and inline feature tree. Drag to reorder operations.`,
        details: `## What's New

- **Floating toolbar** - Tab-based UI with hover-to-open dropdowns
- **Inline feature tree** - See your model history at a glance
- **Drag to reorder** - Reorganize operations by dragging
- **Mobile improvements** - Better touch targets and responsive layout
- **Adaptive colors** - UI adjusts to background for readability`,
        features: [
          `ui`,
          `ux`,
          `toolbar`
        ]
      },
      {
        id: `2026-02-01-print-slicing`,
        version: `0.8.0`,
        date: `2026-02-01`,
        category: `feat`,
        title: `3D Print Slicing`,
        summary: `Slice models for 3D printing directly in the browser with integrated WASM slicer.`,
        details: `## What's New

- **Browser-based slicing** - No external software needed
- **Layer preview** - Visualize toolpaths before printing
- **Print settings** - Layer height, infill, supports
- **G-code export** - Download ready-to-print files`,
        features: [
          `printing`,
          `slicer`,
          `manufacturing`
        ]
      },
      {
        id: `2026-02-01-physics-simulation`,
        version: `0.8.0`,
        date: `2026-02-01`,
        category: `feat`,
        title: `Physics Simulation`,
        summary: `Simulate assemblies with Rapier3D physics. Train RL agents via gym-style MCP interface.`,
        details: `## What's New

- **Rigid body dynamics** - Parts become physical objects with mass and inertia
- **Joint support** - Revolute, prismatic, cylindrical, ball, and fixed joints
- **Gym-style RL interface** - \`reset()\`, \`step(action)\`, \`observe()\` for training
- **Three action types** - Torque, position targets, velocity targets
- **MCP integration** - Full programmatic control via MCP tools`,
        features: [
          `physics`,
          `assembly`,
          `mcp`,
          `simulation`
        ],
        mcpTools: [
          `create_robot_env`,
          `gym_step`,
          `gym_reset`,
          `gym_observe`,
          `gym_close`
        ]
      },
      {
        id: `2026-02-01-mcp-enhancements`,
        version: `0.8.0`,
        date: `2026-02-01`,
        category: `feat`,
        title: `MCP Tool Enhancements`,
        summary: `New MCP tools for sketches, assemblies, STEP import, and browser sharing.`,
        details: `## What's New

- **Sketch operations** - Create sketch-based features via MCP
- **Assembly support** - Build multi-part assemblies programmatically
- **STEP import** - Import existing CAD files via MCP
- **open_in_browser** - Share models directly to vcad.io
- **VCode** - Efficient serialization format option`,
        features: [
          `mcp`,
          `api`,
          `automation`
        ],
        mcpTools: [
          `create_cad_document`,
          `open_in_browser`,
          `import_step`
        ]
      },
      {
        id: `2026-01-28-ray-tracing`,
        version: `0.7.4`,
        date: `2026-01-28`,
        category: `feat`,
        title: `Direct BRep Ray Tracing`,
        summary: `Pixel-perfect rendering without tessellation. Toggle between standard and ray-traced modes.`,
        details: `## What's New

- **Analytic ray-surface intersection** for all surface types
- **WebGPU compute shader pipeline** for real-time performance
- **BVH acceleration** with SAH construction
- **Trimmed surface handling** for complex geometry
- **Debug modes** - View normals, face IDs, lighting`,
        features: [
          `rendering`,
          `raytrace`,
          `gpu`
        ]
      },
      {
        id: `2026-01-25-step-import`,
        version: `0.7.3`,
        date: `2026-01-25`,
        category: `feat`,
        title: `STEP File Import`,
        summary: `Import AP203/AP214 STEP files from Fusion 360, SolidWorks, Onshape, and more.`,
        details: `## What's New

- **Drag-and-drop import** - Drop .step or .stp files onto the canvas
- **File picker support** - Use Open dialog or Cmd+O
- **Multi-solid support** - Import assemblies with multiple parts
- **GPU mesh processing** - Fast normal computation with creased edges`,
        features: [
          `import`,
          `step`,
          `interop`
        ],
        mcpTools: [
          `import_step`
        ]
      },
      {
        id: `2026-01-20-sketch-constraints`,
        version: `0.7.2`,
        date: `2026-01-20`,
        category: `feat`,
        title: `Sketch Constraints`,
        summary: `Full parametric sketching with geometric constraints and automatic solving.`,
        details: `## What's New

- **12 constraint types** - Coincident, horizontal, vertical, parallel, perpendicular, tangent, distance, length, radius, angle, equal length, fixed
- **Levenberg-Marquardt solver** with adaptive damping
- **Visual feedback** - Green when fully constrained, yellow when under-constrained
- **Dimension editing** - Click constraints to modify values`,
        features: [
          `sketch`,
          `constraints`,
          `parametric`
        ]
      },
      {
        id: `2026-01-15-assembly-joints`,
        version: `0.7.1`,
        date: `2026-01-15`,
        category: `feat`,
        title: `Assembly Mode with Joints`,
        summary: `Create assemblies with instances and kinematic joints for motion simulation.`,
        details: `## What's New

- **Part instances** - Reference parts multiple times with different transforms
- **Joint types** - Revolute, prismatic, cylindrical, ball, fixed
- **Forward kinematics** - Scrub joint values to preview motion
- **Feature tree integration** - Hierarchical view of parts, instances, joints`,
        features: [
          `assembly`,
          `joints`,
          `kinematics`
        ]
      },
      {
        id: `2026-01-10-sweeps-lofts`,
        version: `0.7.0`,
        date: `2026-01-10`,
        category: `feat`,
        title: `Sweep and Loft Operations`,
        summary: `Create complex geometry by sweeping sketches along paths or interpolating between profiles.`,
        details: `## What's New

- **Sweep** - Extrude sketches along line or helix paths
- **Loft** - Interpolate between multiple sketch profiles
- **Path control** - Define custom sweep trajectories
- **Profile alignment** - Automatic orientation along paths`,
        features: [
          `sweep`,
          `loft`,
          `modeling`
        ]
      }
    ]
  };
  ir = ((_a = rr.entries[0]) == null ? void 0 : _a.version) ?? `0.0.0`;
});
export {
  et as $,
  on as A,
  Et as B,
  un as C,
  Ue as Ct,
  ln as D,
  u as Dt,
  K as E,
  p as Et,
  Kt as F,
  ht as G,
  Ot as H,
  Wt as I,
  wt as J,
  gt as K,
  Ut as L,
  Yt as M,
  Jt as N,
  sn as O,
  qt as P,
  Ye as Q,
  Ht as R,
  hn as S,
  Pe as St,
  dn as T,
  d as Tt,
  _t as U,
  At as V,
  O as W,
  T as X,
  dt as Y,
  C as Z,
  _n as _,
  __tla,
  we as _t,
  nr as a,
  Se as at,
  pn as b,
  Le as bt,
  Zn as c,
  Ie as ct,
  Bn as d,
  De as dt,
  Qe as et,
  kn as f,
  je as ft,
  bn as g,
  xe as gt,
  Sn as h,
  Fe as ht,
  $n as i,
  Ve as it,
  rn as j,
  U as k,
  Dn as l,
  Ce as lt,
  Tn as m,
  Ne as mt,
  rr as n,
  He as nt,
  Xn as o,
  ke as ot,
  On as p,
  Ee as pt,
  vt as q,
  Qn as r,
  ze as rt,
  qn as s,
  Me as st,
  ir as t,
  ye as tt,
  Gn as u,
  Oe as ut,
  gn as v,
  Ae as vt,
  cn as w,
  be as wt,
  fn as x,
  Te as xt,
  mn as y,
  Re as yt,
  Pt as z
};
