const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wasm-singleton-BCNhL8aW.js","assets/rolldown-runtime-COiEfhsA.js","assets/preload-helper-DoZ3lUKv.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { n as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n, __tla as __tla_0 } from "./wasm-singleton-BCNhL8aW.js";
import { t as r } from "./preload-helper-DoZ3lUKv.js";
let l, me, i, m, u, we, y, Pe, Re, De, We, ze, Ue, Ne, Ve, qe, f, d, Ke, Me, Ye, Ge, Fe, Je, X, Xe, Be, ke, pe, Te, je;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a;
  let a, o;
  i = class extends Error {
    constructor(e2, t2) {
      super(`parse error at offset ${t2}: ${e2}`);
      __publicField(this, "offset");
      this.name = `ParseError`, this.offset = t2;
    }
  };
  a = class extends Error {
    constructor(e2) {
      super(e2), this.name = `EvalError`;
    }
  };
  o = /^parse error at offset (\d+): (.*)$/s;
  function s(e2) {
    let t2 = e2 instanceof Error ? e2.message : String(e2), n2 = o.exec(t2);
    return n2 ? new i(n2[2], Number(n2[1])) : new a(t2);
  }
  function c(e2) {
    let n2 = t();
    if (!n2) throw Error(`${e2}: kernel WASM is not initialized \u2014 await getKernelWasm() (or Engine.init()) before using expression APIs`);
    if (typeof n2[e2] != `function`) throw Error(`${e2} is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
    return n2;
  }
  l = function(e2) {
    try {
      return c(`exprParse`).exprParse(e2);
    } catch (e3) {
      throw s(e3);
    }
  };
  u = function(e2, t2) {
    try {
      return c(`exprEvaluate`).exprEvaluate(e2, t2);
    } catch (e3) {
      throw s(e3);
    }
  };
  d = function(e2) {
    let t2 = [], n2 = (e3) => {
      switch (e3.kind) {
        case `num`:
          return;
        case `ident`:
          e3.name !== `pi` && e3.name !== `tau` && e3.name !== `e` && !t2.includes(e3.name) && t2.push(e3.name);
          return;
        case `binary`:
          n2(e3.lhs), n2(e3.rhs);
          return;
        case `unary`:
          n2(e3.arg);
          return;
        case `call`:
          e3.args.forEach(n2);
          return;
      }
    };
    return n2(e2), t2;
  };
  f = function(e2) {
    if (!e2 || Object.keys(e2).length === 0) return {};
    try {
      let t2 = c(`resolveParametersJson`).resolveParametersJson(JSON.stringify(e2));
      return JSON.parse(t2);
    } catch (e3) {
      throw s(e3);
    }
  };
  function p(e2) {
    let t2 = !!e2.parameters && Object.keys(e2.parameters).length > 0, n2 = !!e2.bindings && Object.keys(e2.bindings).length > 0;
    if (!t2 && !n2) return {
      doc: e2,
      env: {}
    };
    try {
      let t3 = c(`resolveDocumentJson`).resolveDocumentJson(JSON.stringify(e2));
      return JSON.parse(t3);
    } catch (e3) {
      throw s(e3);
    }
  }
  m = function(e2) {
    let n2 = t();
    if (!(n2 == null ? void 0 : n2.solveForwardKinematics)) return /* @__PURE__ */ new Map();
    try {
      let t2 = n2.solveForwardKinematics(JSON.stringify(e2));
      return t2 instanceof Map ? t2 : new Map(Object.entries(t2));
    } catch (e3) {
      return console.warn(`[ENGINE] WASM solveForwardKinematics failed:`, e3), /* @__PURE__ */ new Map();
    }
  };
  function h() {
    return {
      translate: {
        x: 0,
        y: 0,
        z: 0
      },
      rotate: {
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
  }
  function g(e2) {
    return e2.translate.x === 0 && e2.translate.y === 0 && e2.translate.z === 0 && e2.rotate.x === 0 && e2.rotate.y === 0 && e2.rotate.z === 0 && e2.scale.x === 1 && e2.scale.y === 1 && e2.scale.z === 1;
  }
  function _(e2, t2, n2) {
    let r2 = h(), i2 = e2;
    for (; ; ) {
      let e3 = t2[String(i2)];
      if (!e3) return null;
      let a2 = n2(e3.op);
      if (a2 !== null) return {
        value: a2,
        node: i2,
        transform: r2
      };
      let o2 = e3.op;
      if (o2.type === `Translate`) r2.translate = o2.offset, i2 = o2.child;
      else if (o2.type === `Rotate`) r2.rotate = o2.angles, i2 = o2.child;
      else if (o2.type === `Scale`) r2.scale = o2.factor, i2 = o2.child;
      else return null;
    }
  }
  function v(e2) {
    return e2.type === `SheetMetalBaseFlangeRect` || e2.type === `SheetMetalBaseFlangePolygon` || e2.type === `SheetMetalEdgeFlange` || e2.type === `SheetMetalHem` || e2.type === `SheetMetalJog` || e2.type === `SheetMetalBendRelief`;
  }
  y = {
    name: `Generic shop`,
    max_bend_length_mm: 3e3,
    min_bend_radius_ratio: 1,
    min_flange_height_mm: 5,
    min_hole_to_bend_mm: 3,
    min_distance_between_bends_mm: 6
  };
  function b(e2) {
    return !e2 || e2.length === 0 ? {} : {
      engravings: e2.map((e3) => e3.type === `Polyline` ? {
        type: `Polyline`,
        points: e3.points.map((e4) => [
          e4.x,
          e4.y
        ])
      } : {
        type: `Text`,
        text: e3.text,
        x: e3.x,
        y: e3.y,
        height: e3.height,
        angle: e3.angle
      })
    };
  }
  function x(e2, t2) {
    var _a2;
    let n2 = t2[String(e2)];
    if (!n2 || !v(n2.op)) return null;
    let r2 = [], i2 = null, a2 = n2;
    for (; a2; ) {
      let e3 = a2.op;
      if (e3.type === `SheetMetalBaseFlangeRect`) {
        r2.push({
          type: `BaseFlangeRect`,
          width: e3.width,
          depth: e3.depth,
          thickness: e3.thickness,
          material: e3.material,
          ...e3.shop_profile === void 0 ? {} : {
            shopProfile: e3.shop_profile
          },
          ...b(e3.engravings)
        }), i2 = e3.material;
        break;
      }
      if (e3.type === `SheetMetalBaseFlangePolygon`) {
        r2.push({
          type: `BaseFlangePolygon`,
          outline: e3.outline.map((e4) => [
            e4.x,
            e4.y
          ]),
          holes: (_a2 = e3.holes) == null ? void 0 : _a2.map((e4) => e4.map((e5) => [
            e5.x,
            e5.y
          ])),
          thickness: e3.thickness,
          material: e3.material,
          ...e3.shop_profile === void 0 ? {} : {
            shopProfile: e3.shop_profile
          },
          ...b(e3.engravings)
        }), i2 = e3.material;
        break;
      }
      if (e3.type === `SheetMetalEdgeFlange`) r2.push({
        type: `EdgeFlange`,
        panelId: e3.panel_id,
        edgeIndex: e3.edge_index,
        length: e3.length,
        angle: e3.angle,
        ...e3.radius === void 0 ? {} : {
          radius: e3.radius
        },
        direction: e3.direction,
        manualK: e3.manual_k
      }), a2 = t2[String(e3.parent)];
      else if (e3.type === `SheetMetalHem`) r2.push({
        type: `Hem`,
        panelId: e3.panel_id,
        edgeIndex: e3.edge_index,
        kind: e3.kind ?? `Closed`,
        length: e3.length,
        gap: e3.gap ?? 0,
        direction: e3.direction
      }), a2 = t2[String(e3.parent)];
      else if (e3.type === `SheetMetalJog`) r2.push({
        type: `Jog`,
        panelId: e3.panel_id,
        edgeIndex: e3.edge_index,
        offset: e3.offset,
        length: e3.length,
        ...e3.radius === void 0 ? {} : {
          radius: e3.radius
        },
        direction: e3.direction
      }), a2 = t2[String(e3.parent)];
      else if (e3.type === `SheetMetalBendRelief`) r2.push({
        type: `BendRelief`,
        ...e3.width === void 0 ? {} : {
          width: e3.width
        },
        ...e3.depth === void 0 ? {} : {
          depth: e3.depth
        }
      }), a2 = t2[String(e3.parent)];
      else return null;
    }
    return i2 === null ? null : r2.reverse();
  }
  function S(e2, t2) {
    let n2 = _(e2, t2, (e3) => v(e3) ? e3 : null);
    return n2 ? {
      root: n2.node,
      transform: n2.transform
    } : null;
  }
  function C(e2, t2) {
    if (!t2.evaluateSheetMetalChain) throw Error(`kernel.evaluateSheetMetalChain not available \u2014 rebuild @vcad/kernel-wasm`);
    let n2 = t2.evaluateSheetMetalChain(JSON.stringify(e2)), r2 = JSON.parse(n2);
    if (r2.error) throw Error(`sheet-metal eval: ${r2.error}`);
    return {
      mesh: {
        positions: new Float32Array(r2.mesh.positions),
        indices: new Uint32Array(r2.mesh.indices),
        normals: r2.mesh.normals.length > 0 ? new Float32Array(r2.mesh.normals) : void 0
      },
      sheetMetal: {
        flatPattern: r2.flat_pattern,
        model: r2.model,
        dxf: r2.dxf,
        violations: r2.violations
      }
    };
  }
  function w(e2, t2, n2) {
    if (!t2.checkSheetMetal) throw Error(`kernel.checkSheetMetal not available \u2014 rebuild @vcad/kernel-wasm`);
    let r2 = t2.checkSheetMetal(JSON.stringify(e2), n2 === void 0 ? `` : JSON.stringify(n2)), i2 = JSON.parse(r2);
    if (i2.error) throw Error(`sheet-metal check: ${i2.error}`);
    return {
      violations: i2.violations,
      shop: i2.shop ?? y
    };
  }
  function ee(e2) {
    if (!e2.getSheetMetalMaterials) return [];
    try {
      return JSON.parse(e2.getSheetMetalMaterials());
    } catch {
      return [];
    }
  }
  function te(e2, t2, n2) {
    if (!t2.nestSheetMetalParts) throw Error(`kernel.nestSheetMetalParts not available \u2014 rebuild @vcad/kernel-wasm`);
    let r2 = t2.nestSheetMetalParts(JSON.stringify(e2), n2 ? JSON.stringify(n2) : ``), i2 = JSON.parse(r2);
    if (i2.error || !i2.result) throw Error(`sheet-metal nest: ${i2.error ?? `empty result`}`);
    return i2.result;
  }
  function ne(e2, t2) {
    if (!t2.sheetMetalSequence) throw Error(`kernel.sheetMetalSequence not available \u2014 rebuild @vcad/kernel-wasm`);
    let n2 = t2.sheetMetalSequence(JSON.stringify(e2)), r2 = JSON.parse(n2);
    if (r2.error) throw Error(`sheet-metal sequence: ${r2.error}`);
    return r2.steps;
  }
  function T(e2) {
    if (!e2.getSheetMetalBendTable) return {
      id: ``,
      rows: []
    };
    try {
      return JSON.parse(e2.getSheetMetalBendTable());
    } catch {
      return {
        id: ``,
        rows: []
      };
    }
  }
  function re(e2, t2) {
    if (!e2.getSheetMetalShopCatalog) throw Error(`kernel.getSheetMetalShopCatalog not available \u2014 rebuild @vcad/kernel-wasm`);
    let n2 = JSON.parse(e2.getSheetMetalShopCatalog(t2));
    if (`error` in n2 && n2.error) throw Error(`sheet-metal shop catalog: ${n2.error}`);
    return n2;
  }
  function ie(e2, t2) {
    if (!t2.sheetMetalFoldedStep) throw Error(`kernel.sheetMetalFoldedStep not available \u2014 rebuild @vcad/kernel-wasm`);
    let n2 = JSON.parse(t2.sheetMetalFoldedStep(JSON.stringify(e2)));
    if (n2.error) throw Error(`sheet-metal folded STEP: ${n2.error}`);
    if (!n2.step) throw Error(`sheet-metal folded STEP: kernel returned empty file`);
    return n2.step;
  }
  function ae(e2, t2, n2, r2 = 1) {
    if (!t2.costSheetMetal) throw Error(`kernel.costSheetMetal not available \u2014 rebuild @vcad/kernel-wasm`);
    let i2 = t2.costSheetMetal(JSON.stringify(e2), n2 ? JSON.stringify(n2) : ``, Math.max(1, Math.floor(r2))), a2 = JSON.parse(i2);
    if (a2.error) throw Error(`sheet-metal cost: ${a2.error}`);
    if (!a2.breakdown || !a2.rates) throw Error(`sheet-metal cost: kernel returned empty breakdown`);
    return {
      breakdown: a2.breakdown,
      rates: a2.rates
    };
  }
  function oe(e2, t2, n2 = {}) {
    if (!t2.flattenSolidToSheetMetal) throw Error(`kernel.flattenSolidToSheetMetal not available \u2014 rebuild @vcad/kernel-wasm`);
    let r2 = {
      positions: Array.from(e2.positions),
      indices: Array.from(e2.indices),
      material: n2.material,
      manualK: n2.manualK,
      shopProfile: n2.shopProfile,
      volumeTolFrac: n2.volumeTolFrac,
      planeAngleTolDeg: n2.planeAngleTolDeg,
      planeOffsetTol: n2.planeOffsetTol
    }, i2 = JSON.parse(t2.flattenSolidToSheetMetal(JSON.stringify(r2)));
    if (i2.error) throw Error(i2.error);
    return {
      flatPattern: i2.flat_pattern,
      model: i2.model,
      dxf: i2.dxf,
      violations: i2.violations,
      thickness: i2.thickness,
      panels: i2.panels,
      bends: i2.bends,
      solidVolumeMm3: i2.solid_volume_mm3,
      recoveredVolumeMm3: i2.recovered_volume_mm3,
      volumeErrorFrac: i2.volume_error_frac,
      warnings: i2.warnings ?? []
    };
  }
  function E(e2) {
    return {
      positions: new Float32Array(e2.positions),
      indices: new Uint32Array(e2.indices),
      normals: e2.normals ? new Float32Array(e2.normals) : void 0,
      faceKinds: e2.faceKinds ? new Uint8Array(e2.faceKinds) : void 0
    };
  }
  function D(e2, t2, n2 = {}) {
    var _a2, _b;
    if (e2 = p(e2).doc, e2 = de(e2, t2), !t2.evaluateDocument) throw Error(`kernel WASM bundle is missing the evaluateDocument binding \u2014 rebuild @vcad/kernel-wasm (stale bundle); old bundles are unsupported`);
    try {
      let r2 = JSON.stringify(e2), i2 = t2.evaluateDocument(r2, n2.skipClashDetection ?? false), a2 = e2.roots.filter((e3) => e3.visible !== false), o2 = [], s2 = i2.parts.map((n3, r3) => {
        if (n3.mesh.positions.length === 0 && r3 < a2.length) {
          let i3 = j(a2[r3].root, e2.nodes);
          if (i3) return {
            mesh: P(N(i3.pattern, t2), i3.transform, t2),
            material: n3.material
          };
          try {
            let i4 = M(a2[r3].root, e2.nodes, t2);
            if (i4) return {
              ...i4,
              material: n3.material
            };
          } catch (e3) {
            let t3 = e3 instanceof Error ? e3.message : String(e3);
            return o2.push({
              scope: `root[${r3}]`,
              node_id: a2[r3].root,
              error: t3
            }), console.warn(`[ENGINE] sheet-metal eval failed at root[${r3}] (node ${a2[r3].root}): ${t3}`), {
              mesh: E(n3.mesh),
              material: n3.material
            };
          }
        }
        return {
          mesh: E(n3.mesh),
          material: n3.material
        };
      });
      if (i2.failures && i2.failures.length > 0) for (let e3 of i2.failures) console.warn(`[ENGINE] feature eval failed at ${e3.scope} (node ${e3.node_id}): ${e3.error}`);
      return {
        parts: s2,
        partDefs: (_a2 = i2.partDefs) == null ? void 0 : _a2.map((e3) => ({
          id: e3.id,
          mesh: E(e3.mesh)
        })),
        instances: (_b = i2.instances) == null ? void 0 : _b.map((e3) => ({
          instanceId: e3.instance_id,
          partDefId: e3.part_def_id,
          name: e3.name,
          mesh: E(e3.mesh),
          material: e3.material,
          transform: e3.transform
        })),
        clashes: i2.clashes.map(E),
        failures: o2.length > 0 ? [
          ...i2.failures ?? [],
          ...o2
        ] : i2.failures
      };
    } catch (e3) {
      console.warn(`[ENGINE] WASM evaluateDocument failed, falling back to TS:`, e3);
    }
    return F(e2, t2, n2);
  }
  function O(e2) {
    return e2.type === `Line` ? {
      type: `Line`,
      start: [
        e2.start.x,
        e2.start.y
      ],
      end: [
        e2.end.x,
        e2.end.y
      ]
    } : {
      type: `Arc`,
      start: [
        e2.start.x,
        e2.start.y
      ],
      end: [
        e2.end.x,
        e2.end.y
      ],
      center: [
        e2.center.x,
        e2.center.y
      ],
      ccw: e2.ccw
    };
  }
  function k(e2) {
    return {
      origin: [
        e2.origin.x,
        e2.origin.y,
        e2.origin.z
      ],
      x_dir: [
        e2.x_dir.x,
        e2.x_dir.y,
        e2.x_dir.z
      ],
      y_dir: [
        e2.y_dir.x,
        e2.y_dir.y,
        e2.y_dir.z
      ],
      segments: e2.segments.map(O),
      ...e2.holes && e2.holes.length > 0 ? {
        holes: e2.holes.map((e3) => e3.map(O))
      } : {}
    };
  }
  function A(e2) {
    let t2 = e2.getMesh();
    return {
      positions: new Float32Array(t2.positions),
      indices: new Uint32Array(t2.indices),
      normals: t2.normals ? new Float32Array(t2.normals) : void 0
    };
  }
  function se(e2, t2) {
    let n2 = _(e2, t2, (e3) => e3.type === `ImportedMesh` ? e3 : null);
    return n2 ? {
      mesh: n2.value,
      transform: n2.transform
    } : null;
  }
  function j(e2, t2) {
    let n2 = _(e2, t2, (e3) => e3.type === `EmbroideryPattern` ? e3 : null);
    return n2 ? {
      pattern: n2.value,
      transform: n2.transform
    } : null;
  }
  function M(e2, t2, n2) {
    let r2 = S(e2, t2);
    if (!r2) return null;
    let i2 = x(r2.root, t2);
    if (!i2) return null;
    let { mesh: a2, sheetMetal: o2 } = C(i2, n2);
    return {
      mesh: g(r2.transform) ? a2 : P(a2, r2.transform, n2),
      sheetMetal: o2
    };
  }
  function ce(e2) {
    let t2 = 0.15, n2 = [], r2 = [], i2 = [];
    for (let a2 of e2.design.stitch_groups) {
      let o2 = e2.design.threads[a2.thread_index], s2 = o2 ? o2.color[0] / 255 : 0.5, c2 = o2 ? o2.color[1] / 255 : 0.5, l2 = o2 ? o2.color[2] / 255 : 0.5, u2 = a2.stitches;
      for (let e3 = 0; e3 < u2.length - 1; e3++) {
        let [a3, o3] = u2[e3], [d2, f2] = u2[e3 + 1], p2 = -o3, m2 = -f2, h2 = d2 - a3, g2 = m2 - p2, _2 = Math.sqrt(h2 * h2 + g2 * g2);
        if (_2 < 1e-6) continue;
        let v2 = -g2 / _2 * t2, y2 = h2 / _2 * t2, b2 = n2.length / 3;
        n2.push(a3 + v2, p2 + y2, 0), n2.push(a3 - v2, p2 - y2, 0), n2.push(d2 - v2, m2 - y2, 0), n2.push(d2 + v2, m2 + y2, 0), i2.push(s2, c2, l2, s2, c2, l2, s2, c2, l2, s2, c2, l2), r2.push(b2, b2 + 1, b2 + 2), r2.push(b2, b2 + 2, b2 + 3);
      }
    }
    return {
      positions: new Float32Array(n2),
      indices: new Uint32Array(r2),
      colors: new Float32Array(i2)
    };
  }
  function N(e2, t2) {
    if (t2 == null ? void 0 : t2.embroideryDesignToMesh) try {
      let n2 = t2.embroideryDesignToMesh(JSON.stringify(e2.design));
      return {
        positions: new Float32Array(n2.positions),
        indices: new Uint32Array(n2.indices),
        colors: new Float32Array(n2.colors)
      };
    } catch (e3) {
      console.warn(`[ENGINE] kernel embroideryDesignToMesh failed, falling back to TS:`, e3);
    }
    return ce(e2);
  }
  function P(e2, t2, n2) {
    if (n2 == null ? void 0 : n2.transformMeshBuffers) try {
      let r2 = n2.transformMeshBuffers(e2.positions, e2.normals, JSON.stringify(t2));
      return {
        positions: new Float32Array(r2.positions),
        indices: e2.indices,
        normals: r2.normals ? new Float32Array(r2.normals) : void 0,
        colors: e2.colors
      };
    } catch (e3) {
      console.warn(`[ENGINE] kernel transformMeshBuffers failed, falling back to TS:`, e3);
    }
    return le(e2, t2);
  }
  function le(e2, t2) {
    let { translate: n2, rotate: r2, scale: i2 } = t2, a2 = new Float32Array(e2.positions.length), o2 = r2.x * Math.PI / 180, s2 = r2.y * Math.PI / 180, c2 = r2.z * Math.PI / 180, l2 = Math.cos(o2), u2 = Math.sin(o2), d2 = Math.cos(s2), f2 = Math.sin(s2), p2 = Math.cos(c2), m2 = Math.sin(c2), h2 = d2 * p2, g2 = u2 * f2 * p2 - l2 * m2, _2 = l2 * f2 * p2 + u2 * m2, v2 = d2 * m2, y2 = u2 * f2 * m2 + l2 * p2, b2 = l2 * f2 * m2 - u2 * p2, x2 = -f2, S2 = u2 * d2, C2 = l2 * d2;
    for (let t3 = 0; t3 < e2.positions.length; t3 += 3) {
      let r3 = e2.positions[t3] * i2.x, o3 = e2.positions[t3 + 1] * i2.y, s3 = e2.positions[t3 + 2] * i2.z, c3 = h2 * r3 + g2 * o3 + _2 * s3, l3 = v2 * r3 + y2 * o3 + b2 * s3, u3 = x2 * r3 + S2 * o3 + C2 * s3;
      a2[t3] = c3 + n2.x, a2[t3 + 1] = l3 + n2.y, a2[t3 + 2] = u3 + n2.z;
    }
    let w2 = e2.normals;
    if (e2.normals) {
      w2 = new Float32Array(e2.normals.length);
      for (let t3 = 0; t3 < e2.normals.length; t3 += 3) {
        let n3 = e2.normals[t3], r3 = e2.normals[t3 + 1], i3 = e2.normals[t3 + 2];
        w2[t3] = h2 * n3 + g2 * r3 + _2 * i3, w2[t3 + 1] = v2 * n3 + y2 * r3 + b2 * i3, w2[t3 + 2] = x2 * n3 + S2 * r3 + C2 * i3;
      }
    }
    return {
      positions: a2,
      indices: e2.indices,
      normals: w2,
      colors: e2.colors
    };
  }
  function F(e2, t2, n2 = {}) {
    let { Solid: r2 } = t2, i2 = /* @__PURE__ */ new Map(), a2 = e2.roots.filter((e3) => e3.visible !== false), o2 = [], s2 = [], c2 = () => ({
      positions: new Float32Array(),
      indices: new Uint32Array()
    }), l2 = a2.map((n3, a3) => {
      let l3 = j(n3.root, e2.nodes);
      if (l3) {
        let e3 = P(N(l3.pattern, t2), l3.transform, t2);
        return o2.push(r2.empty()), {
          mesh: e3,
          material: n3.material
        };
      }
      let u3 = se(n3.root, e2.nodes);
      if (u3) {
        let e3 = P({
          positions: new Float32Array(u3.mesh.positions),
          indices: new Uint32Array(u3.mesh.indices),
          normals: u3.mesh.normals ? new Float32Array(u3.mesh.normals) : void 0
        }, u3.transform, t2);
        return o2.push(r2.empty()), {
          mesh: e3,
          material: n3.material
        };
      }
      try {
        let i3 = M(n3.root, e2.nodes, t2);
        if (i3) return o2.push(r2.empty()), {
          ...i3,
          material: n3.material
        };
      } catch (e3) {
        let t3 = e3 instanceof Error ? e3.message : String(e3);
        return s2.push({
          scope: `root[${a3}]`,
          node_id: n3.root,
          error: t3
        }), console.warn(`[ENGINE] sheet-metal eval failed at root[${a3}] (node ${n3.root}): ${t3}`), o2.push(r2.empty()), {
          mesh: c2(),
          material: n3.material
        };
      }
      try {
        let t3 = I(n3.root, e2.nodes, r2, i2, 0), a4 = A(t3);
        return o2.push(t3), {
          mesh: a4,
          material: n3.material,
          solid: t3
        };
      } catch (e3) {
        let t3 = e3 instanceof Error ? e3.message : String(e3);
        return s2.push({
          scope: `root[${a3}]`,
          node_id: n3.root,
          error: t3
        }), console.warn(`[ENGINE] feature eval failed at root[${a3}] (node ${n3.root}): ${t3}`), o2.push(r2.empty()), {
          mesh: c2(),
          material: n3.material
        };
      }
    }), u2, d2;
    if (e2.partDefs && Object.keys(e2.partDefs).length > 0 && e2.instances && e2.instances.length > 0) {
      let t3 = m(e2), n3 = /* @__PURE__ */ new Map();
      u2 = [];
      for (let [t4, a3] of Object.entries(e2.partDefs)) try {
        let o3 = I(a3.root, e2.nodes, r2, i2, 0), s3 = A(o3);
        n3.set(t4, s3), u2.push({
          id: t4,
          mesh: s3,
          solid: o3
        });
      } catch (e3) {
        let r3 = e3 instanceof Error ? e3.message : String(e3);
        s2.push({
          scope: `partDef[${JSON.stringify(t4)}]`,
          node_id: a3.root,
          error: r3
        }), console.warn(`[ENGINE] partDef eval failed at ${t4} (node ${a3.root}): ${r3}`);
        let i3 = c2();
        n3.set(t4, i3), u2.push({
          id: t4,
          mesh: i3
        });
      }
      d2 = [];
      for (let r3 of e2.instances) {
        let i3 = n3.get(r3.partDefId);
        if (!i3) continue;
        let a3 = t3.get(r3.id) ?? r3.transform, o3 = e2.partDefs[r3.partDefId], s3 = r3.material ?? (o3 == null ? void 0 : o3.defaultMaterial) ?? `default`;
        d2.push({
          instanceId: r3.id,
          partDefId: r3.partDefId,
          name: r3.name,
          mesh: i3,
          material: s3,
          transform: a3
        });
      }
    }
    let f2 = [];
    if (!n2.skipClashDetection) for (let e3 = 0; e3 < o2.length; e3++) for (let t3 = e3 + 1; t3 < o2.length; t3++) {
      let n3 = o2[e3].intersection(o2[t3]);
      if (!n3.isEmpty()) {
        let e4 = n3.getMesh();
        e4.positions.length > 0 && f2.push({
          positions: new Float32Array(e4.positions),
          indices: new Uint32Array(e4.indices),
          normals: e4.normals ? new Float32Array(e4.normals) : void 0
        });
      }
    }
    return {
      parts: l2,
      partDefs: u2,
      instances: d2,
      clashes: f2,
      failures: s2.length > 0 ? s2 : void 0
    };
  }
  function I(e2, t2, n2, r2, i2 = 0) {
    let a2 = r2.get(e2);
    if (a2) return a2;
    let o2 = t2[String(e2)];
    if (!o2) throw Error(`Missing node: ${e2}`);
    let s2 = ue(o2.op, t2, n2, r2, i2);
    return r2.set(e2, s2), s2;
  }
  function ue(e2, t2, n2, r2, i2 = 0) {
    switch (e2.type) {
      case `Cube`:
        return n2.cube(e2.size.x, e2.size.y, e2.size.z);
      case `Cylinder`:
        return n2.cylinder(e2.radius, e2.height, e2.segments || void 0);
      case `Sphere`:
        return n2.sphere(e2.radius, e2.segments || void 0);
      case `Cone`:
        return n2.cone(e2.radius_bottom, e2.radius_top, e2.height, e2.segments || void 0);
      case `Torus`:
        return n2.torus(e2.major_radius, e2.minor_radius, e2.segments || void 0);
      case `Wedge`:
        return n2.wedge(e2.size.x, e2.size.y, e2.size.z);
      case `Prism`:
        return n2.prism(e2.sides, e2.radius, e2.height);
      case `SpurGear`: {
        let t3 = n2.spurGear;
        if (!t3) throw Error(`SpurGear needs a newer kernel WASM build`);
        return t3(e2.module, e2.teeth, e2.pressure_angle_deg, e2.face_width, e2.bore_diameter ?? 0, e2.backlash ?? 0);
      }
      case `Mirror`:
        return I(e2.child, t2, n2, r2, i2 + 1).mirror(e2.plane_origin.x, e2.plane_origin.y, e2.plane_origin.z, e2.plane_normal.x, e2.plane_normal.y, e2.plane_normal.z);
      case `Empty`:
        return n2.empty();
      case `Union`: {
        let a2 = I(e2.left, t2, n2, r2, i2 + 1), o2 = I(e2.right, t2, n2, r2, i2 + 1);
        return a2.union(o2);
      }
      case `Difference`: {
        let a2 = I(e2.left, t2, n2, r2, i2 + 1), o2 = I(e2.right, t2, n2, r2, i2 + 1);
        return a2.difference(o2);
      }
      case `Intersection`: {
        let a2 = I(e2.left, t2, n2, r2, i2 + 1), o2 = I(e2.right, t2, n2, r2, i2 + 1);
        return a2.intersection(o2);
      }
      case `Translate`:
        return I(e2.child, t2, n2, r2, i2 + 1).translate(e2.offset.x, e2.offset.y, e2.offset.z);
      case `Rotate`:
        return I(e2.child, t2, n2, r2, i2 + 1).rotate(e2.angles.x, e2.angles.y, e2.angles.z);
      case `Scale`:
        return I(e2.child, t2, n2, r2, i2 + 1).scale(e2.factor.x, e2.factor.y, e2.factor.z);
      case `Sketch2D`:
        return n2.empty();
      case `SketchOnFace`:
        return n2.empty();
      case `Extrude`: {
        let r3 = t2[String(e2.sketch)];
        if (!r3) throw Error(`Extrude references missing node: ${e2.sketch}`);
        let i3 = new Float64Array([
          e2.direction.x,
          e2.direction.y,
          e2.direction.z
        ]);
        if (r3.op.type === `Text2D`) {
          let e3 = r3.op, t3 = new Float64Array([
            e3.origin.x,
            e3.origin.y,
            e3.origin.z
          ]), a3 = new Float64Array([
            e3.x_dir.x,
            e3.x_dir.y,
            e3.x_dir.z
          ]), o3 = new Float64Array([
            e3.y_dir.x,
            e3.y_dir.y,
            e3.y_dir.z
          ]);
          return n2.textExtrude(e3.text, t3, a3, o3, i3, e3.height, e3.font || void 0, e3.alignment || void 0, e3.letter_spacing ?? void 0, e3.line_spacing ?? void 0);
        }
        if (r3.op.type !== `Sketch2D`) throw Error(`Extrude references invalid sketch node: ${e2.sketch} (type=${r3.op.type})`);
        let a2 = k(r3.op), o2 = JSON.stringify(a2), s2 = e2.twist_angle !== void 0 && Math.abs(e2.twist_angle) > 1e-12, c2 = e2.scale_end !== void 0 && Math.abs(e2.scale_end - 1) > 1e-12;
        return s2 || c2 ? n2.extrudeWithOptions(o2, i3, e2.twist_angle ?? 0, e2.scale_end ?? 1) : n2.extrude(o2, i3);
      }
      case `Revolve`: {
        let r3 = t2[String(e2.sketch)];
        if (!r3 || r3.op.type !== `Sketch2D`) throw Error(`Revolve references invalid sketch node: ${e2.sketch}`);
        let i3 = k(r3.op), a2 = JSON.stringify(i3), o2 = new Float64Array([
          e2.axis_origin.x,
          e2.axis_origin.y,
          e2.axis_origin.z
        ]), s2 = new Float64Array([
          e2.axis_dir.x,
          e2.axis_dir.y,
          e2.axis_dir.z
        ]);
        return n2.revolve(a2, o2, s2, e2.angle_deg);
      }
      case `LinearPattern`:
        return I(e2.child, t2, n2, r2, i2 + 1).linearPattern(e2.direction.x, e2.direction.y, e2.direction.z, e2.count, e2.spacing);
      case `CircularPattern`:
        return I(e2.child, t2, n2, r2, i2 + 1).circularPattern(e2.axis_origin.x, e2.axis_origin.y, e2.axis_origin.z, e2.axis_dir.x, e2.axis_dir.y, e2.axis_dir.z, e2.count, e2.angle_deg);
      case `SweepRotate`:
        return I(e2.child, t2, n2, r2, i2 + 1).sweepRotate(e2.axis_origin.x, e2.axis_origin.y, e2.axis_origin.z, e2.axis_dir.x, e2.axis_dir.y, e2.axis_dir.z, e2.angle_lo_deg, e2.angle_hi_deg, e2.step_deg ?? 0, e2.clearance ?? 0);
      case `Shell`: {
        let a2 = I(e2.child, t2, n2, r2, i2 + 1);
        if (e2.open_faces && e2.open_faces.length > 0) {
          let t3 = a2.shellOpen;
          if (typeof t3 != `function`) throw Error(`shell: this kernel build cannot open faces (rebuild kernel-wasm)`);
          return t3.call(a2, e2.thickness, JSON.stringify(e2.open_faces));
        }
        return a2.shell(e2.thickness);
      }
      case `Fillet`:
        return I(e2.child, t2, n2, r2, i2 + 1).fillet(e2.radius);
      case `Chamfer`:
        return I(e2.child, t2, n2, r2, i2 + 1).chamfer(e2.distance);
      case `EdgeBlend`:
        return I(e2.child, t2, n2, r2, i2 + 1).edgeBlend(JSON.stringify({
          edges: e2.edges,
          profile: e2.profile
        }));
      case `Sweep`: {
        let r3 = t2[String(e2.sketch)];
        if (!r3 || r3.op.type !== `Sketch2D`) throw Error(`Sweep references invalid sketch node: ${e2.sketch}`);
        let i3 = k(r3.op), a2 = JSON.stringify(i3);
        if (e2.path.type === `Line`) {
          let t3 = new Float64Array([
            e2.path.start.x,
            e2.path.start.y,
            e2.path.start.z
          ]), r4 = new Float64Array([
            e2.path.end.x,
            e2.path.end.y,
            e2.path.end.z
          ]);
          return n2.sweepLine(a2, t3, r4, e2.twist_angle, e2.scale_start, e2.scale_end, e2.orientation);
        }
        if (e2.path.type === `Helix`) return n2.sweepHelix(a2, e2.path.radius, e2.path.pitch, e2.path.height, e2.path.turns, e2.twist_angle, e2.scale_start, e2.scale_end, e2.path_segments, e2.arc_segments, e2.orientation);
        throw Error(`Cylindrical sweep paths are not yet supported in the web engine (use the native pipeline)`);
      }
      case `Loft`: {
        let r3 = e2.sketches.map((e3) => {
          let n3 = t2[String(e3)];
          if (!n3 || n3.op.type !== `Sketch2D`) throw Error(`Loft references invalid sketch node: ${e3}`);
          return k(n3.op);
        });
        return n2.loft(JSON.stringify(r3), e2.closed);
      }
      case `Hull`: {
        let a2 = n2, o2 = e2.children.map((e3) => I(e3, t2, n2, r2, i2 + 1)), s2 = e2.points;
        if (s2.length > 0) {
          if (typeof a2.hullPoints != `function`) throw Error(`Hull needs a kernel build with Solid.hullPoints \u2014 rebuild the WASM kernel`);
          o2.push(a2.hullPoints(new Float64Array(s2)));
        }
        if (o2.length === 0) throw Error(`Hull has no operands`);
        return o2.reduce((e3, t3) => {
          let n3 = e3.hullWith;
          if (typeof n3 != `function`) throw Error(`Hull needs a kernel build with Solid.hullWith \u2014 rebuild the WASM kernel`);
          return n3.call(e3, t3);
        });
      }
      case `ImportedMesh`:
        return n2.empty();
      case `step_import`: {
        let t3 = n2.fromRegisteredStep;
        if (typeof t3 != `function`) throw Error(`STEP import '${e2.path}' cannot be evaluated: this kernel build predates Solid.fromRegisteredStep \u2014 rebuild the WASM kernel`);
        return t3(e2.path, e2.solid_index);
      }
      case `mesh_import`:
        return n2.empty();
      case `Text2D`:
        return n2.empty();
      case `PcbBoard`: {
        let t3 = e2.board.outline, r3 = (t3 == null ? void 0 : t3.vertices) ?? [];
        if (r3.length < 3) return n2.empty();
        let i3 = t3.thickness, a2 = {
          origin: [
            0,
            0,
            0
          ],
          x_dir: [
            1,
            0,
            0
          ],
          y_dir: [
            0,
            1,
            0
          ],
          segments: r3.map((e3, t4) => {
            let n3 = r3[(t4 + 1) % r3.length];
            return {
              type: `Line`,
              start: [
                e3.x,
                e3.y
              ],
              end: [
                n3.x,
                n3.y
              ]
            };
          })
        };
        return n2.extrude(JSON.stringify(a2), new Float64Array([
          0,
          0,
          i3
        ])).translate(0, 0, -i3 / 2);
      }
      case `EmbroideryPattern`:
        return n2.empty();
      case `PartInstance`:
        return n2.empty();
      case `SheetMetalBaseFlangeRect`:
      case `SheetMetalBaseFlangePolygon`:
      case `SheetMetalEdgeFlange`:
      case `SheetMetalHem`:
      case `SheetMetalJog`:
      case `SheetMetalBendRelief`:
        return n2.empty();
    }
  }
  function de(e2, t2) {
    let n2 = t2.buildPart;
    if (typeof n2 != `function` || !Object.values(e2.nodes).some((e3) => e3.op.type === `PartInstance`)) return e2;
    let r2 = JSON.parse(JSON.stringify(e2)), i2 = Object.keys(r2.nodes).map(Number), a2 = (i2.length > 0 ? Math.max(...i2) : 0) + 1;
    for (let [e3, t3] of Object.entries(r2.nodes)) {
      if (t3.op.type !== `PartInstance`) continue;
      let e4 = t3.op, i3;
      try {
        i3 = n2(e4.path, JSON.stringify(e4.params ?? {}));
      } catch (n3) {
        console.warn(`[parts] failed to build ${e4.path}:`, n3), t3.op = {
          type: `Empty`
        };
        continue;
      }
      let o2;
      try {
        o2 = JSON.parse(i3);
      } catch (n3) {
        console.warn(`[parts] invalid sub-doc from ${e4.path}:`, n3), t3.op = {
          type: `Empty`
        };
        continue;
      }
      let s2 = o2.roots[0];
      if (!s2) {
        console.warn(`[parts] ${e4.path} produced no scene root`), t3.op = {
          type: `Empty`
        };
        continue;
      }
      let c2 = /* @__PURE__ */ new Map();
      for (let e5 of Object.keys(o2.nodes).map(Number)) c2.set(e5, a2++);
      for (let [e5, t4] of Object.entries(o2.nodes)) {
        let n3 = Number(e5), i4 = c2.get(n3), a3 = L(t4, c2);
        a3.id = i4, r2.nodes[String(i4)] = a3;
      }
      let l2 = c2.get(s2.root);
      l2 === void 0 ? (console.warn(`[parts] ${e4.path} root id not in remap table`), t3.op = {
        type: `Empty`
      }) : t3.op = {
        type: `Translate`,
        child: l2,
        offset: {
          x: 0,
          y: 0,
          z: 0
        }
      };
    }
    return r2;
  }
  function L(e2, t2) {
    let n2 = (e3) => t2.get(e3) ?? e3, r2 = e2.op, i2 = r2;
    switch (r2.type) {
      case `Union`:
      case `Difference`:
      case `Intersection`:
        i2 = {
          ...r2,
          left: n2(r2.left),
          right: n2(r2.right)
        };
        break;
      case `Translate`:
      case `Rotate`:
      case `Scale`:
      case `LinearPattern`:
      case `CircularPattern`:
      case `SweepRotate`:
      case `Shell`:
      case `Fillet`:
      case `Chamfer`:
      case `EdgeBlend`:
        i2 = {
          ...r2,
          child: n2(r2.child)
        };
        break;
      case `Extrude`:
      case `Revolve`:
      case `Sweep`:
        i2 = {
          ...r2,
          sketch: n2(r2.sketch)
        };
        break;
      case `Loft`:
        i2 = {
          ...r2,
          sketches: r2.sketches.map(n2)
        };
        break;
      case `Hull`:
        i2 = {
          ...r2,
          children: r2.children.map(n2)
        };
        break;
      default:
        i2 = r2;
    }
    return {
      ...e2,
      op: i2
    };
  }
  var R = class {
    constructor(e2 = 1e3) {
      __publicField(this, "cache", /* @__PURE__ */ new Map());
      __publicField(this, "maxSize");
      this.maxSize = e2;
    }
    get(e2, t2) {
      let n2 = this.cache.get(e2);
      return n2 ? n2.opHash === t2 ? n2.solid : (this.cache.delete(e2), null) : null;
    }
    set(e2, t2, n2) {
      if (this.cache.size >= this.maxSize) {
        let e3 = Array.from(this.cache.keys()).slice(0, this.maxSize / 4);
        for (let t3 of e3) this.cache.delete(t3);
      }
      this.cache.set(e2, {
        solid: t2,
        opHash: n2
      });
    }
    has(e2) {
      return this.cache.has(e2);
    }
    invalidate(e2) {
      for (let t2 of e2) this.cache.delete(t2);
    }
    clear() {
      this.cache.clear();
    }
    get size() {
      return this.cache.size;
    }
  };
  function z(e2) {
    return `${e2.solidId}:${e2.segments}`;
  }
  var B = class {
    constructor(e2 = 500) {
      __publicField(this, "cache", /* @__PURE__ */ new Map());
      __publicField(this, "maxSize");
      this.maxSize = e2;
    }
    get(e2, t2) {
      let n2 = z({
        solidId: e2,
        segments: t2
      });
      return this.cache.get(n2) ?? null;
    }
    set(e2, t2, n2) {
      let r2 = z({
        solidId: e2,
        segments: t2
      });
      if (this.cache.size >= this.maxSize) {
        let e3 = Array.from(this.cache.keys()).slice(0, this.maxSize / 4);
        for (let t3 of e3) this.cache.delete(t3);
      }
      this.cache.set(r2, n2);
    }
    has(e2, t2) {
      let n2 = z({
        solidId: e2,
        segments: t2
      });
      return this.cache.has(n2);
    }
    invalidateSolid(e2) {
      let t2 = `${e2}:`;
      for (let e3 of this.cache.keys()) e3.startsWith(t2) && this.cache.delete(e3);
    }
    clear() {
      this.cache.clear();
    }
    get size() {
      return this.cache.size;
    }
  };
  function V(e2) {
    switch (e2.type) {
      case `Cube`:
      case `Cylinder`:
      case `Sphere`:
      case `Cone`:
      case `Torus`:
      case `Wedge`:
      case `Prism`:
      case `Empty`:
      case `Sketch2D`:
      case `ImportedMesh`:
        return [];
      case `Translate`:
      case `Rotate`:
      case `Scale`:
      case `Mirror`:
      case `Fillet`:
      case `Chamfer`:
      case `Shell`:
      case `LinearPattern`:
      case `CircularPattern`:
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
        return [
          e2.sketch
        ];
      case `Sweep`:
        return [
          e2.sketch
        ];
      case `Loft`:
        return [
          ...e2.sketches
        ];
      default:
        return [];
    }
  }
  var H = class {
    constructor() {
      __publicField(this, "dependencies", /* @__PURE__ */ new Map());
      __publicField(this, "dependents", /* @__PURE__ */ new Map());
    }
    build(e2) {
      this.dependencies.clear(), this.dependents.clear();
      for (let [t2, n2] of Object.entries(e2.nodes)) {
        let e3 = Number(t2), r2 = V(n2.op);
        this.dependencies.set(e3, new Set(r2));
        for (let t3 of r2) {
          let n3 = this.dependents.get(t3);
          n3 || (n3 = /* @__PURE__ */ new Set(), this.dependents.set(t3, n3)), n3.add(e3);
        }
      }
    }
    getAffectedNodes(e2) {
      let t2 = /* @__PURE__ */ new Set(), n2 = Array.from(e2);
      for (; n2.length > 0; ) {
        let e3 = n2.pop();
        if (t2.has(e3)) continue;
        t2.add(e3);
        let r2 = this.dependents.get(e3);
        if (r2) for (let e4 of r2) t2.has(e4) || n2.push(e4);
      }
      return t2;
    }
    getDependencies(e2) {
      return this.dependencies.get(e2) ?? /* @__PURE__ */ new Set();
    }
    getDependents(e2) {
      return this.dependents.get(e2) ?? /* @__PURE__ */ new Set();
    }
    getEvaluationOrder(e2) {
      let t2 = /* @__PURE__ */ new Set(), n2 = [], r2 = (i2) => {
        if (t2.has(i2) || !e2.has(i2)) return;
        t2.add(i2);
        let a2 = this.dependencies.get(i2);
        if (a2) for (let e3 of a2) r2(e3);
        n2.push(i2);
      };
      for (let t3 of e2) r2(t3);
      return n2;
    }
    clear() {
      this.dependencies.clear(), this.dependents.clear();
    }
  };
  async function fe() {
    let e2 = await n();
    return {
      get_default_dfm_pack: e2.get_default_dfm_pack,
      estimate_cost_for_process: e2.estimate_cost_for_process
    };
  }
  pe = async function(e2, t2) {
    var _a2;
    let r2 = await n(), i2 = F(e2, r2), a2 = t2.rulePack ?? ``;
    !a2 && t2.ruleset && (a2 = r2.get_default_dfm_pack(t2.ruleset));
    let o2 = [], s2 = [], c2 = ``, l2 = `1`, u2 = e2.roots.filter((e3) => e3.visible !== false);
    for (let e3 = 0; e3 < i2.parts.length; e3++) {
      let n2 = i2.parts[e3];
      if (!n2) continue;
      let r3 = ((_a2 = u2[e3]) == null ? void 0 : _a2.root) ?? 0, d2 = n2.solid;
      if (!d2 || typeof d2.runDfm != `function`) continue;
      let f2 = d2.runDfm(t2.process, a2, BigInt(r3));
      if (!f2) continue;
      let p2 = JSON.parse(f2);
      c2 || (c2 = p2.rule_pack_name), l2 = p2.rule_pack_version || l2, o2.push(...p2.issues), p2.rule_results && s2.push(...p2.rule_results);
    }
    return {
      process: t2.process,
      rule_pack_name: c2,
      rule_pack_version: l2,
      issues: o2,
      cost_estimate: null,
      rule_results: s2
    };
  };
  me = async function(e2) {
    return (await fe()).estimate_cost_for_process(e2.process, e2.material, e2.partVolumeMm3, e2.stockVolumeMm3 ?? 0, e2.qty ?? 0, e2.featureCount ?? 0);
  };
  var U = class extends Error {
    constructor(e2) {
      super(e2.message);
      __publicField(this, "error");
      this.error = e2, this.name = `EngineRefusal`;
    }
  };
  function W(e2) {
    let t2 = typeof e2 == `string` ? JSON.parse(e2) : e2;
    if (!t2.ok || !t2.result) throw new U(t2.error);
    return {
      document: t2.result.document,
      parts: t2.result.parts
    };
  }
  function he(e2) {
    let t2 = typeof e2 == `string` ? JSON.parse(e2) : e2;
    if (!t2.ok || !t2.result) throw new U(t2.error);
    return t2.result;
  }
  function ge(e2, t2) {
    let n2 = {
      ...e2
    };
    for (let e3 of t2.removedFields) delete n2[e3];
    for (let [e3, r2] of Object.entries(t2.fields)) n2[e3] = r2;
    for (let [e3, r2] of Object.entries(t2.maps)) {
      let t3 = n2[e3], i2 = t3 && typeof t3 == `object` && !Array.isArray(t3) ? {
        ...t3
      } : {};
      for (let e4 of r2.remove) delete i2[e4];
      for (let [e4, t4] of Object.entries(r2.set)) i2[e4] = t4;
      n2[e3] = i2;
    }
    return n2;
  }
  function _e(e2, t2) {
    let n2 = t2.order ?? e2.map((e3) => e3.id), r2 = new Map(e2.map((e3) => [
      e3.id,
      e3
    ]));
    for (let e3 of [
      ...t2.added,
      ...t2.updated
    ]) r2.set(e3.id, e3);
    for (let e3 of t2.removed) r2.delete(e3);
    return n2.flatMap((e3) => {
      let t3 = r2.get(e3);
      return t3 ? [
        t3
      ] : [];
    });
  }
  function ve(e2, t2) {
    return {
      state: {
        document: ge(e2.document, t2.document),
        parts: _e(e2.parts, t2.parts)
      },
      changes: {
        rebuild: [
          ...t2.parts.added,
          ...t2.parts.updated
        ].map((e3) => e3.id),
        removed: [
          ...t2.parts.removed
        ]
      }
    };
  }
  function ye(e2) {
    var _a2, _b;
    let t2 = (e3) => ({
      positions: e3.positions instanceof Float32Array ? e3.positions : new Float32Array(e3.positions),
      indices: e3.indices instanceof Uint32Array ? e3.indices : new Uint32Array(e3.indices),
      normals: e3.normals ? e3.normals instanceof Float32Array ? e3.normals : new Float32Array(e3.normals) : void 0,
      faceKinds: e3.faceKinds ? e3.faceKinds instanceof Uint8Array ? e3.faceKinds : new Uint8Array(e3.faceKinds) : void 0
    });
    return {
      parts: e2.parts.map((e3) => ({
        mesh: t2(e3.mesh),
        material: e3.material
      })),
      partDefs: (_a2 = e2.partDefs) == null ? void 0 : _a2.map((e3) => ({
        id: e3.id,
        mesh: t2(e3.mesh)
      })),
      instances: (_b = e2.instances) == null ? void 0 : _b.map((e3) => ({
        instanceId: e3.instance_id,
        partDefId: e3.part_def_id,
        name: e3.name,
        mesh: t2(e3.mesh),
        material: e3.material,
        transform: e3.transform
      })),
      clashes: e2.clashes.map(t2),
      failures: e2.failures,
      timing: e2.timing
    };
  }
  function be(e2, t2, n2) {
    let r2 = t2.roots.filter((e3) => e3.visible !== false), i2 = false, a2 = e2.parts.map((e3, a3) => {
      if (e3.mesh.positions.length === 0 && a3 < r2.length) {
        let o2 = j(r2[a3].root, t2.nodes);
        if (o2) return i2 = true, {
          mesh: P(N(o2.pattern, n2), o2.transform, n2),
          material: e3.material
        };
      }
      return e3;
    });
    return i2 ? {
      ...e2,
      parts: a2
    } : e2;
  }
  function xe(e2, t2, n2) {
    let r2 = t2.roots.filter((e3) => e3.visible !== false), i2 = false, a2 = e2.parts.map((e3, a3) => {
      if (e3.mesh.positions.length === 0 && a3 < r2.length) try {
        let o2 = M(r2[a3].root, t2.nodes, n2);
        if (o2) return i2 = true, {
          ...o2,
          material: e3.material
        };
      } catch (e4) {
        console.warn(`[worker] sheet-metal eval failed at root[${a3}]:`, e4);
      }
      return e3;
    });
    return i2 ? {
      ...e2,
      parts: a2
    } : e2;
  }
  function Se(e2, t2, n2) {
    return xe(be(e2, t2, n2), t2, n2);
  }
  function G(e2) {
    var _a2, _b;
    (_b = (_a2 = e2.evaluator) == null ? void 0 : _a2.free) == null ? void 0 : _b.call(_a2), e2.evaluator = null;
  }
  function Ce(e2, t2) {
    var _a2, _b;
    try {
      let n2, r2, i2;
      switch (t2.op) {
        case `init`:
          G(e2), (_a2 = e2.engine) == null ? void 0 : _a2.free(), e2.engine = t2.replica !== void 0 && e2.Engine.withReplica ? e2.Engine.withReplica(t2.replica) : new e2.Engine(), n2 = e2.engine.stateEnvelope();
          break;
        case `load`:
          G(e2), (_b = e2.engine) == null ? void 0 : _b.free(), e2.engine = e2.Engine.load(t2.bytes), n2 = e2.engine.stateEnvelope();
          break;
        default: {
          let a3 = e2.engine;
          if (!a3) return {
            ok: false,
            message: `engine not initialized`
          };
          if ((t2.op === `apply` || t2.op === `applyTool`) && t2.expectHash !== void 0 && a3.stateHash() !== t2.expectHash) return {
            ok: true,
            stale: true,
            hash: a3.stateHash(),
            canUndo: a3.can_undo(),
            canRedo: a3.can_redo()
          };
          if (t2.op === `apply`) n2 = a3.applyDelta(JSON.stringify(t2.command));
          else if (t2.op === `applyTool`) n2 = a3.applyToolDelta(t2.tool, JSON.stringify(t2.args));
          else if (t2.op === `state`) n2 = a3.stateEnvelope();
          else if (t2.op === `evaluate`) {
            if (!a3.evaluateIncremental || !e2.Evaluator) return {
              ok: false,
              message: `engine host cannot evaluate (kernel too old)`
            };
            e2.evaluator ?? (e2.evaluator = new e2.Evaluator());
            let n3 = t2.overlay ?? {}, r3 = Object.keys(n3.parameters ?? {}).length > 0 || Object.keys(n3.bindings ?? {}).length > 0;
            i2 = ye(a3.evaluateIncremental(e2.evaluator, r3 ? JSON.stringify(n3) : ``, t2.skipClashDetection ?? false));
          } else r2 = a3.save();
        }
      }
      let a2 = e2.engine;
      return {
        ok: true,
        envelope: n2,
        bytes: r2,
        scene: i2,
        hash: a2.stateHash(),
        canUndo: a2.can_undo(),
        canRedo: a2.can_redo()
      };
    } catch (e3) {
      return {
        ok: false,
        message: e3 instanceof Error ? e3.message : String(e3)
      };
    }
  }
  we = function(e2, t2) {
    let n2 = {
      Engine: function() {
        throw Error(`shared engine: the owner constructs engines`);
      },
      engine: null,
      Evaluator: t2
    };
    return {
      request: async (t3) => {
        n2.engine = e2();
        let r2 = t3.op === `init` || t3.op === `load` ? {
          op: `state`
        } : t3;
        return Ce(n2, r2);
      },
      dispose: () => G(n2)
    };
  };
  let K;
  K = class extends Error {
    constructor(e2) {
      super(e2), this.name = `EngineHostError`;
    }
  };
  Te = class {
    constructor(e2) {
      __publicField(this, "transport");
      __publicField(this, "view", null);
      __publicField(this, "queue", Promise.resolve());
      __publicField(this, "flags", {
        hash: ``,
        canUndo: false,
        canRedo: false
      });
      this.transport = e2;
    }
    get state() {
      return this.view;
    }
    get stateHash() {
      return this.flags.hash;
    }
    get canUndo() {
      return this.flags.canUndo;
    }
    get canRedo() {
      return this.flags.canRedo;
    }
    init(e2) {
      return this.full({
        op: `init`,
        replica: e2
      });
    }
    load(e2) {
      return this.full({
        op: `load`,
        bytes: e2
      });
    }
    refresh() {
      return this.full({
        op: `state`
      });
    }
    apply(e2) {
      return this.delta({
        op: `apply`,
        command: e2
      });
    }
    applyTool(e2, t2) {
      return this.delta({
        op: `applyTool`,
        tool: e2,
        args: t2
      });
    }
    evaluate(e2 = {}) {
      return this.enqueue(async () => {
        let t2 = this.check(await this.transport.request({
          op: `evaluate`,
          overlay: e2.overlay,
          skipClashDetection: e2.skipClashDetection
        })).scene;
        return e2.kernel && this.view ? Se(t2, this.view.document, e2.kernel) : t2;
      });
    }
    save() {
      return this.enqueue(async () => this.check(await this.transport.request({
        op: `save`
      })).bytes ?? new Uint8Array());
    }
    dispose() {
      this.transport.dispose(), this.view = null;
    }
    full(e2) {
      return this.enqueue(async () => {
        let t2 = this.check(await this.transport.request(e2));
        return this.view = W(t2.envelope), this.view;
      });
    }
    delta(e2) {
      return this.enqueue(async () => {
        if (!this.view) throw new K(`engine not initialized`);
        let t2 = this.check(await this.transport.request({
          ...e2,
          expectHash: this.flags.hash
        }));
        if (t2.stale) {
          let n3 = this.check(await this.transport.request({
            op: `state`
          }));
          if (this.view = W(n3.envelope), t2 = this.check(await this.transport.request({
            ...e2,
            expectHash: this.flags.hash
          })), t2.stale) throw new K(`engine changed during resync`);
        }
        let n2 = this.view, r2 = he(t2.envelope), { state: i2, changes: a2 } = ve(n2, r2);
        return this.view = i2, {
          state: i2,
          changes: a2,
          createdFeatureId: r2.createdFeatureId,
          warnings: r2.warnings
        };
      });
    }
    check(e2) {
      if (!e2.ok) throw new K(e2.message);
      return this.flags = {
        hash: e2.hash,
        canUndo: e2.canUndo,
        canRedo: e2.canRedo
      }, e2;
    }
    enqueue(e2) {
      let t2 = this.queue.then(e2, e2);
      return this.queue = t2.catch(() => void 0), t2;
    }
  };
  function Ee() {
    let e2 = t();
    if (!e2 || typeof e2.sample_timeline_sequence != `function` || typeof e2.sample_timeline_track != `function`) throw Error(`kernel WASM not initialized (or too old for timeline sampling) \u2014 await getKernelWasm() before sampling sequences`);
    return e2;
  }
  De = function(e2, t2) {
    return Ee().sample_timeline_track(JSON.stringify(e2), t2);
  };
  var q = null;
  async function J() {
    if (q) return q;
    try {
      let e2 = await r(() => import("./vcad_kernel_wasm-DeOXXisY.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), []);
      return typeof e2.isEcadAvailable == `function` ? (q = e2, q) : null;
    } catch {
      return null;
    }
  }
  function Y(e2) {
    let t2 = /unknown variant `([^`]+)`/.exec(e2) ?? /unknown field `([^`]+)`/.exec(e2) ?? /missing field `([^`]+)`/.exec(e2);
    return t2 ? t2[1] : void 0;
  }
  async function Oe(e2, t2) {
    let n2 = await J();
    if (!n2) return {
      status: `errored`,
      reason: `${e2} unavailable: kernel WASM not loaded`
    };
    try {
      return {
        status: `ok`,
        value: t2(n2)
      };
    } catch (t3) {
      let n3 = t3 instanceof Error ? t3.message : String(t3);
      console.warn(`[ECAD] ${e2} failed:`, t3);
      let r2 = Y(n3);
      return r2 ? {
        status: `errored`,
        reason: n3,
        offending_field: r2
      } : {
        status: `errored`,
        reason: n3
      };
    }
  }
  ke = async function(e2) {
    return Oe(`DRC`, (t2) => t2.ecadCheckDrc(JSON.stringify(e2)));
  };
  async function Ae(e2) {
    let t2 = await J();
    if (!t2) return {
      status: `unavailable`
    };
    try {
      return {
        status: `ok`,
        violations: t2.ecadCheckErc(JSON.stringify(e2))
      };
    } catch (e3) {
      let t3 = e3 instanceof Error ? e3.message : String(e3);
      return console.warn(`[ECAD] ERC failed:`, e3), {
        status: `error`,
        message: t3
      };
    }
  }
  je = async function(e2) {
    let t2 = await Ae(e2);
    if (t2.status === `ok`) return {
      status: `ok`,
      value: t2.violations
    };
    let n2 = t2.status === `unavailable` ? `ERC unavailable: kernel WASM not loaded` : t2.message, r2 = t2.status === `error` ? Y(t2.message) : void 0;
    return r2 ? {
      status: `errored`,
      reason: n2,
      offending_field: r2
    } : {
      status: `errored`,
      reason: n2
    };
  };
  Me = async function(e2) {
    let t2 = await J();
    if (!t2) return {
      nets: []
    };
    try {
      return t2.ecadGenerateNetlist(JSON.stringify(e2));
    } catch (e3) {
      return console.warn(`[ECAD] Netlist generation failed:`, e3), {
        nets: []
      };
    }
  };
  Ne = async function(e2, t2, n2, r2, i2) {
    let a2 = await J(), o2 = {
      net: t2,
      segments: [],
      vias: [],
      success: false
    };
    if (!a2) return o2;
    try {
      return a2.ecadRouteNet(JSON.stringify(e2), t2, n2.x, n2.y, r2.x, r2.y, i2);
    } catch (e3) {
      return console.warn(`[ECAD] Routing failed:`, e3), o2;
    }
  };
  Pe = async function(e2, t2, n2, r2, i2) {
    let a2 = await J(), o2 = {
      net: t2,
      segments: [],
      vias: [],
      success: false
    };
    if (!a2) return o2;
    try {
      return a2.ecadRouteNetShove(JSON.stringify(e2), t2, n2.x, n2.y, r2.x, r2.y, i2);
    } catch (e3) {
      return console.warn(`[ECAD] Push-shove routing failed:`, e3), o2;
    }
  };
  Fe = async function(e2) {
    let t2 = await Ie(e2);
    return t2.ok ? t2.value : (t2.reason === `error` && console.warn(`[ECAD] Fab export failed:`, t2.message), null);
  };
  async function Ie(e2) {
    let t2 = await J();
    if (!t2) return {
      ok: false,
      reason: `unavailable`,
      message: `ECAD kernel WASM not loaded`
    };
    try {
      return {
        ok: true,
        value: t2.ecadExportFab(JSON.stringify(e2))
      };
    } catch (e3) {
      return {
        ok: false,
        reason: `error`,
        message: e3 instanceof Error ? e3.message : String(e3)
      };
    }
  }
  async function Le(e2) {
    let t2 = await J();
    if (!t2) return null;
    try {
      return t2.parseKicadPcb(e2);
    } catch (e3) {
      return console.warn(`[ECAD] KiCad PCB parse failed:`, e3), null;
    }
  }
  Re = async function() {
    let e2 = await J();
    if (!e2) return [];
    try {
      return e2.ecadBuiltinSymbols();
    } catch (e3) {
      return console.warn(`[ECAD] builtinSymbols failed:`, e3), [];
    }
  };
  ze = async function(e2, t2) {
    let n2 = await J();
    if (!n2) return [];
    try {
      return n2.ecadComputeRatsnest(JSON.stringify(e2), JSON.stringify(t2));
    } catch (e3) {
      return console.warn(`[ECAD] computeRatsnest failed:`, e3), [];
    }
  };
  Be = async function(e2) {
    let t2 = await J();
    if (!t2) return [];
    try {
      return t2.ecadComponentMeshes(JSON.stringify(e2));
    } catch (e3) {
      return console.warn(`[ECAD] componentMeshes failed:`, e3), [];
    }
  };
  Ve = async function(e2) {
    let t2 = await He(e2);
    return t2.ok ? t2.value : (t2.reason === `error` && console.warn(`[ECAD] pcbPreviewMeshes failed:`, t2.message), []);
  };
  async function He(e2) {
    let t2 = await J();
    if (!t2 || typeof t2.ecadPcbPreviewMeshes != `function`) return {
      ok: false,
      reason: `unavailable`,
      message: `PCB preview-mesh binding unavailable (kernel WASM missing or predates it)`
    };
    try {
      return {
        ok: true,
        value: t2.ecadPcbPreviewMeshes(JSON.stringify(e2))
      };
    } catch (e3) {
      return {
        ok: false,
        reason: `error`,
        message: e3 instanceof Error ? e3.message : String(e3)
      };
    }
  }
  Ue = async function(e2) {
    let t2 = await J();
    if (!t2 || typeof t2.CircuitSim != `function`) return null;
    try {
      return new t2.CircuitSim(e2);
    } catch (e3) {
      return console.warn(`[circuit-sim] build failed:`, e3), null;
    }
  };
  We = async function(e2, t2 = {}) {
    var _a2;
    let n2 = (_a2 = await J()) == null ? void 0 : _a2.circuitFromSchematic;
    return typeof n2 == `function` ? n2(JSON.stringify(e2), JSON.stringify(t2)) : null;
  };
  X = async function(e2) {
    var _a2;
    let t2 = (_a2 = await J()) == null ? void 0 : _a2.circuitDcOperatingPoint;
    return typeof t2 == `function` ? t2(JSON.stringify(e2)) : null;
  };
  Ge = async function(e2, t2, n2) {
    var _a2;
    let r2 = (_a2 = await J()) == null ? void 0 : _a2.circuitAcResponse;
    return typeof r2 == `function` ? r2(JSON.stringify(e2), t2, new Float64Array(n2)) : null;
  };
  Ke = async function(e2, t2) {
    var _a2;
    let n2 = (_a2 = await J()) == null ? void 0 : _a2.circuitTune;
    return typeof n2 == `function` ? n2(JSON.stringify(e2), JSON.stringify(t2)) : null;
  };
  function Z(e2) {
    if (e2 instanceof Map) {
      let t2 = {};
      for (let [n2, r2] of e2.entries()) t2[n2] = Z(r2);
      return t2;
    }
    return Array.isArray(e2) ? e2.map(Z) : e2;
  }
  async function Q() {
    let { getKernelWasm: e2 } = await r(async () => {
      let { getKernelWasm: e3 } = await import("./wasm-singleton-BCNhL8aW.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((e4) => e4.i);
      return {
        getKernelWasm: e3
      };
    }, __vite__mapDeps([0,1,2]));
    return e2();
  }
  qe = async function() {
    try {
      return (await Q()).isPhysicsAvailable();
    } catch {
      return false;
    }
  };
  let $;
  Je = class e2 {
    constructor(e3) {
      __publicField(this, "sim");
      __publicField(this, "_numJoints");
      __publicField(this, "_actionDim");
      __publicField(this, "_observationDim");
      __publicField(this, "_jointIds");
      __publicField(this, "_actuatedJointIds");
      __publicField(this, "_jointSlotCounts");
      this.sim = e3, this._numJoints = e3.numJoints(), this._actionDim = e3.actionDim(), this._observationDim = e3.observationDim();
      let t2 = e3.jointIds, n2 = typeof t2 == `function` ? t2.call(e3) : null;
      this._jointIds = Array.isArray(n2) ? n2 : null;
      let r2 = e3.actuatedJointIds, i2 = typeof r2 == `function` ? r2.call(e3) : null;
      this._actuatedJointIds = Array.isArray(i2) ? i2 : null;
      let a2 = e3.jointSlotCounts, o2 = typeof a2 == `function` ? a2.call(e3) : null, s2 = Array.isArray(o2) || ArrayBuffer.isView(o2) && !(o2 instanceof DataView) ? Array.from(o2) : null;
      this._jointSlotCounts = s2 && s2.every((e4) => typeof e4 == `number` && Number.isFinite(e4)) ? s2 : null;
    }
    static async create(t2, n2) {
      var _a2, _b, _c, _d;
      let r2 = await Q();
      if (!r2.isPhysicsAvailable()) throw Error(`Physics simulation not available. WASM must be compiled with --features physics`);
      let i2 = JSON.stringify(t2), a2 = n2.config ? JSON.stringify(n2.config) : null, o2 = r2.PhysicsSim, s2 = new o2(i2, n2.endEffectorIds, n2.dt ?? null, n2.substeps ?? null, a2, ((_a2 = n2.ground) == null ? void 0 : _a2.enabled) ?? null, ((_b = n2.ground) == null ? void 0 : _b.height) ?? null, ((_c = n2.ground) == null ? void 0 : _c.friction) ?? null, ((_d = n2.ground) == null ? void 0 : _d.restitution) ?? null);
      if (a2 && typeof s2.resetSeeded != `function`) throw Error("This kernel WASM build predates gym env config (domain randomization / observation noise / termination). Rebuild the kernel WASM or drop `config`.");
      if (n2.maxSteps && s2.setMaxSteps(n2.maxSteps), n2.jointGains && Object.keys(n2.jointGains).length > 0) {
        let e3 = s2.setJointGains;
        typeof e3 == `function` && e3.call(s2, JSON.stringify(n2.jointGains));
      }
      return new e2(s2);
    }
    get numJoints() {
      return this._numJoints;
    }
    get jointIds() {
      return this._jointIds;
    }
    get jointSlotCounts() {
      return this._jointSlotCounts;
    }
    get actuatedJointIds() {
      return this._actuatedJointIds;
    }
    get actionDim() {
      return this._actionDim;
    }
    get observationDim() {
      return this._observationDim;
    }
    reset(e3) {
      if (e3 !== void 0) {
        let t2 = this.sim.resetSeeded;
        if (typeof t2 != `function`) throw Error(`This kernel WASM build predates seeded resets. Rebuild the kernel WASM or call reset() without a seed.`);
        return Z(t2.call(this.sim, BigInt(e3)));
      }
      return Z(this.sim.reset());
    }
    step(e3, t2) {
      let n2 = new Float64Array(t2), r2;
      switch (e3) {
        case `torque`:
          r2 = this.sim.stepTorque(n2);
          break;
        case `position`:
          r2 = this.sim.stepPosition(n2);
          break;
        case `velocity`:
          r2 = this.sim.stepVelocity(n2);
      }
      return Z(r2);
    }
    observe() {
      return Z(this.sim.observe());
    }
    setSeed(e3) {
      this.sim.setSeed(e3);
    }
    setMaxSteps(e3) {
      this.sim.setMaxSteps(e3);
    }
    close() {
      this.sim.free();
    }
  };
  Ye = e({
    getKernelWasmSync: () => t,
    parseExpression: () => l,
    parseKicadPcb: () => Le
  });
  $ = 10;
  Xe = (_a = class {
    constructor(e2, t2) {
      __publicField(this, "kernel");
      __publicField(this, "solidCache");
      __publicField(this, "meshCache");
      __publicField(this, "dependencyGraph");
      __publicField(this, "lastDocHash", null);
      __publicField(this, "worker", null);
      __publicField(this, "workerReady", null);
      __publicField(this, "sceneCache", /* @__PURE__ */ new Map());
      __publicField(this, "solidSceneCache", /* @__PURE__ */ new Map());
      this.kernel = e2, this.solidCache = new R(), this.meshCache = new B(), this.dependencyGraph = new H(), this.initWorker(t2);
    }
    static logTiming(e2, t2) {
      let n2 = e2.nodes instanceof Map ? [
        ...e2.nodes.entries()
      ] : Object.entries(e2.nodes);
      n2.sort((e3, t3) => t3[1].eval_ms - e3[1].eval_ms);
      let r2 = [
        `total:${e2.total_ms.toFixed(0)}ms`,
        e2.parse_ms == null ? null : `parse:${e2.parse_ms.toFixed(0)}ms`,
        `tess:${e2.tessellate_ms.toFixed(0)}ms`,
        e2.serialize_ms == null ? null : `ser:${e2.serialize_ms.toFixed(0)}ms`,
        e2.clash_ms > 0.5 ? `clash:${e2.clash_ms.toFixed(0)}ms` : null,
        e2.assembly_ms > 0.5 ? `asm:${e2.assembly_ms.toFixed(0)}ms` : null,
        t2 == null ? null : `worker:${t2.toFixed(0)}ms`
      ].filter(Boolean).join(` `), i2 = n2.filter(([, e3]) => e3.eval_ms > 1).map(([e3, t3]) => `${t3.op}#${e3}:${t3.eval_ms.toFixed(0)}ms${t3.mesh_ms > 0.5 ? `(mesh:${t3.mesh_ms.toFixed(0)})` : ``}`).join(` > `);
      console.debug(`[ENGINE] ${r2}${i2 ? `
         ${i2}` : ``}`);
    }
    whenWorkerReady() {
      return this.workerReady ?? Promise.resolve();
    }
    initWorker(e2) {
      if (typeof Worker < `u`) try {
        let t2 = new Worker(new URL(`/vcad/v2026.11.12-7ae7e5c/assets/eval-worker-CicZz-eg.js`, `` + import.meta.url), {
          type: `module`
        });
        this.workerReady = new Promise((e3, n2) => {
          let r2 = (i2) => {
            i2.data.type === `ready` ? (t2.removeEventListener(`message`, r2), e3()) : i2.data.type === `error` && i2.data.id === null && (t2.removeEventListener(`message`, r2), console.warn(`[ENGINE] Worker WASM init failed:`, i2.data.message), this.worker = null, this.workerReady = null, n2(Error(i2.data.message)));
          };
          t2.addEventListener(`message`, r2);
        }), t2.postMessage({
          type: `init`,
          module: e2
        }), this.worker = t2;
      } catch (e3) {
        console.warn(`[ENGINE] Failed to create eval worker:`, e3);
      }
    }
    static async init(t2) {
      let { getKernelWasm: n2, primeKernelWasm: i2 } = await r(async () => {
        let { getKernelWasm: e2, primeKernelWasm: t3 } = await import("./wasm-singleton-BCNhL8aW.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then((e3) => e3.i);
        return {
          getKernelWasm: e2,
          primeKernelWasm: t3
        };
      }, __vite__mapDeps([0,1,2]));
      (t2 == null ? void 0 : t2.wasmInput) && i2(t2.wasmInput);
      let a2 = await n2(), o2 = a2.getCompiledModule, s2 = o2 == null ? void 0 : o2();
      return new _a({
        Solid: a2.Solid,
        WasmAnnotationLayer: a2.WasmAnnotationLayer,
        projectMesh: a2.projectMesh,
        importStepBuffer: a2.importStepBuffer,
        importStepBufferWithReport: a2.importStepBufferWithReport,
        documentToStepBuffer: a2.documentToStepBuffer,
        registerStepSource: a2.registerStepSource,
        stepImportDocument: a2.stepImportDocument,
        importStepMeshDocument: a2.importStepMeshDocument,
        stepSourceRegistered: a2.stepSourceRegistered,
        unregisterStepSource: a2.unregisterStepSource,
        inspectDocumentFaces: a2.inspectDocumentFaces,
        importUrdfBuffer: a2.importUrdfBuffer,
        importUrdfBufferWithOptions: a2.importUrdfBufferWithOptions,
        urdfCommentedFloatingJoint: a2.urdfCommentedFloatingJoint,
        buildSheetMetalDocument: a2.buildSheetMetalDocument,
        inlineMeshImports: a2.inlineMeshImports,
        exportProjectedViewToDxf: a2.exportProjectedViewToDxf,
        offsetSectionMesh: a2.offsetSectionMesh,
        renderTitleBlock: a2.renderTitleBlock,
        renderBomTable: a2.renderBomTable,
        drawingSheetToPdf: a2.drawingSheetToPdf,
        createDetailView: a2.createDetailView,
        evaluateDocument: a2.evaluateDocument,
        evalVcadSource: a2.evalVcadSource,
        evalVcadSourceWithModules: a2.evalVcadSourceWithModules,
        evalLoonDocument: a2.evalLoonDocument,
        evalVcadSourceParametric: a2.evalVcadSourceParametric,
        documentParameterGradient: a2.documentParameterGradient,
        documentSensitivities: a2.documentSensitivities,
        getPartsManifest: a2.getPartsManifest,
        buildPart: a2.buildPart,
        evaluateSheetMetalChain: a2.evaluateSheetMetalChain,
        checkSheetMetal: a2.checkSheetMetal,
        costSheetMetal: a2.costSheetMetal,
        sheetMetalSequence: a2.sheetMetalSequence,
        nestSheetMetalParts: a2.nestSheetMetalParts,
        getSheetMetalMaterials: a2.getSheetMetalMaterials,
        simulateStrikeKernel: a2.simulateStrikeKernel,
        noteToHz: a2.noteToHz,
        getSheetMetalBendTable: a2.getSheetMetalBendTable,
        getSheetMetalShopCatalog: a2.getSheetMetalShopCatalog,
        sheetMetalFoldedStep: a2.sheetMetalFoldedStep,
        flattenSolidToSheetMetal: a2.flattenSolidToSheetMetal,
        mesh_clearance: a2.mesh_clearance,
        topologyOptimizeBox: a2.topologyOptimizeBox,
        topologyOptimizeMesh: a2.topologyOptimizeMesh,
        particleSimulate: a2.particleSimulate,
        particleOptimize: a2.particleOptimize,
        toleranceAnalyze: a2.toleranceAnalyze,
        thermalSolve: a2.thermalSolve,
        thermalSolveTransient: a2.thermalSolveTransient,
        simulateFlow: a2.simulateFlow,
        documentDiff: a2.documentDiff,
        documentDiffApply: a2.documentDiffApply,
        documentMerge: a2.documentMerge,
        documentDiffHuman: a2.documentDiffHuman,
        circuitDcOperatingPoint: a2.circuitDcOperatingPoint,
        circuitAcResponse: a2.circuitAcResponse,
        circuitSensitivities: a2.circuitSensitivities,
        circuitTransient: a2.circuitTransient,
        circuitTune: a2.circuitTune,
        feaAnalyzeMesh: a2.feaAnalyzeMesh,
        feaCheckBeam: a2.feaCheckBeam,
        emSimulate: a2.emSimulate,
        antennaAnalyze: a2.antennaAnalyze,
        photonicsSimulate: a2.photonicsSimulate,
        neutronicsSimulate: a2.neutronicsSimulate,
        latticeGaugeSimulate: a2.latticeGaugeSimulate,
        analyzeStaticsBox: a2.analyzeStaticsBox,
        analyzeStaticsMesh: a2.analyzeStaticsMesh
      }, s2);
    }
    evaluate(e2, t2 = {}) {
      let n2 = `${Object.keys(e2.nodes).length}:${e2.roots.length}`;
      this.lastDocHash !== n2 && (this.dependencyGraph.build(e2), this.lastDocHash = n2);
      let r2 = this.sceneCacheKey(e2, t2), i2 = this.sceneCache.get(r2);
      if (i2) return i2;
      let a2 = D(e2, this.kernel, t2);
      return this.cacheScene(r2, a2), a2;
    }
    parameterGradient(e2, t2, n2 = {}) {
      let r2 = this.kernel.documentParameterGradient;
      if (typeof r2 != `function`) throw Error(`kernel WASM is missing documentParameterGradient \u2014 rebuild @vcad/kernel-wasm`);
      let i2 = n2.density ?? 1, a2 = n2.probeStep ?? 0;
      return r2(JSON.stringify(e2), t2, i2, a2);
    }
    documentSensitivities(e2, t2 = {}) {
      let n2 = this.kernel.documentSensitivities;
      if (typeof n2 != `function`) throw Error(`kernel WASM is missing documentSensitivities \u2014 rebuild @vcad/kernel-wasm`);
      return n2(JSON.stringify(e2), JSON.stringify(t2));
    }
    async evaluateAsync(e2, t2 = {}) {
      let n2 = `${Object.keys(e2.nodes).length}:${e2.roots.length}`;
      this.lastDocHash !== n2 && (this.dependencyGraph.build(e2), this.lastDocHash = n2);
      let r2 = this.sceneCacheKey(e2, t2), i2 = this.sceneCache.get(r2);
      if (i2) return i2;
      if (this.worker && this.workerReady) {
        try {
          await this.workerReady;
        } catch {
        }
        if (this.worker) try {
          let n3 = await this.evaluateInWorker(e2, t2);
          return this.cacheScene(r2, n3), n3;
        } catch (e3) {
          console.warn(`[ENGINE] Worker eval failed, falling back to sync:`, e3);
        }
      }
      let a2 = D(e2, this.kernel, t2);
      return this.cacheScene(r2, a2), a2;
    }
    evaluateWithSolids(e2, t2 = {}) {
      let n2 = `${Object.keys(e2.nodes).length}:${e2.roots.length}`;
      this.lastDocHash !== n2 && (this.dependencyGraph.build(e2), this.lastDocHash = n2);
      let r2 = this.sceneCacheKey(e2, t2), i2 = this.solidSceneCache.get(r2);
      if (i2) return i2;
      let a2 = F(e2, this.kernel, t2);
      if (this.solidSceneCache.set(r2, a2), this.solidSceneCache.size > $) {
        let e3 = this.solidSceneCache.keys().next().value;
        e3 !== void 0 && this.solidSceneCache.delete(e3);
      }
      return a2;
    }
    evaluateInWorker(t2, n2) {
      let r2 = this.worker, i2 = Math.random().toString(36).slice(2), a2 = n2.skipClashDetection ?? false;
      return new Promise((n3, o2) => {
        let s2 = (t3) => {
          if (t3.data.id === i2) {
            if (r2.removeEventListener(`message`, s2), t3.data.type === `result`) {
              let r3 = t3.data.scene;
              r3.timing && _a.DEV && _a.logTiming(r3.timing, t3.data.workerTotalMs), n3(r3);
            } else t3.data.type === `error` && o2(Error(t3.data.message));
          }
        };
        r2.addEventListener(`message`, s2), r2.postMessage({
          type: `evaluate`,
          id: i2,
          docJson: JSON.stringify(t2),
          skipClashDetection: a2
        });
      });
    }
    sceneCacheKey(e2, t2) {
      return `${t2.skipClashDetection ?? false}:${JSON.stringify(e2)}`;
    }
    cacheScene(e2, t2) {
      if (this.sceneCache.set(e2, t2), this.sceneCache.size > $) {
        let e3 = this.sceneCache.keys().next().value;
        e3 !== void 0 && this.sceneCache.delete(e3);
      }
    }
    invalidateNodes(e2) {
      let t2 = this.dependencyGraph.getAffectedNodes(e2);
      this.solidCache.invalidate(t2);
    }
    clearCaches() {
      this.solidCache.clear(), this.meshCache.clear(), this.sceneCache.clear(), this.solidSceneCache.clear();
    }
    get Solid() {
      return this.kernel.Solid;
    }
    get WasmAnnotationLayer() {
      return this.kernel.WasmAnnotationLayer;
    }
    get CpuRayTracer() {
      return this.kernel.CpuRayTracer;
    }
    projectMesh(e2, t2) {
      return this.kernel.projectMesh({
        positions: e2.positions,
        indices: e2.indices
      }, t2);
    }
    meshClearance(e2, t2) {
      if (typeof this.kernel.mesh_clearance != `function`) throw Error(`mesh_clearance is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return this.kernel.mesh_clearance(e2.positions, e2.indices, t2.positions, t2.indices);
    }
    particleSimulate(e2, t2, n2) {
      let r2 = this.kernel.particleSimulate;
      if (typeof r2 != `function`) throw Error(`particleSimulate is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return r2(e2, t2, n2);
    }
    particleOptimize(e2, t2, n2) {
      let r2 = this.kernel.particleOptimize;
      if (typeof r2 != `function`) throw Error(`particleOptimize is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return r2(e2, t2, n2);
    }
    toleranceAnalyze(e2, t2, n2) {
      let r2 = this.kernel.toleranceAnalyze;
      if (typeof r2 != `function`) throw Error(`toleranceAnalyze is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return r2(e2, t2, n2);
    }
    thermalSolve(e2, t2, n2) {
      let r2 = this.kernel.thermalSolve;
      if (typeof r2 != `function`) throw Error(`thermalSolve is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return r2(e2, t2, n2);
    }
    thermalSolveTransient(e2, t2, n2, r2) {
      let i2 = this.kernel.thermalSolveTransient;
      if (typeof i2 != `function`) throw Error(`thermalSolveTransient is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return i2(e2, t2, n2, r2);
    }
    simulateFlow(e2, t2, n2) {
      let r2 = this.kernel.simulateFlow;
      if (typeof r2 != `function`) throw Error(`simulateFlow is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return r2(e2, t2, n2);
    }
    circuitFn(e2) {
      let t2 = this.kernel[e2];
      if (typeof t2 != `function`) throw Error(`${String(e2)} is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return t2;
    }
    circuitDcOperatingPoint(e2) {
      return this.circuitFn(`circuitDcOperatingPoint`)(e2);
    }
    circuitAcResponse(e2, t2, n2) {
      return this.circuitFn(`circuitAcResponse`)(e2, t2, new Float64Array(n2));
    }
    circuitSensitivities(e2, t2, n2) {
      return this.circuitFn(`circuitSensitivities`)(e2, t2, n2);
    }
    circuitTransient(e2, t2, n2) {
      return this.circuitFn(`circuitTransient`)(e2, t2, n2);
    }
    circuitTune(e2, t2) {
      return this.circuitFn(`circuitTune`)(e2, t2);
    }
    feaAnalyzeMesh(e2, t2, n2, r2) {
      let i2 = this.kernel.feaAnalyzeMesh;
      if (typeof i2 != `function`) throw Error(`feaAnalyzeMesh is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return i2(e2, t2, n2, r2);
    }
    feaCheckBeam(e2) {
      let t2 = this.kernel.feaCheckBeam;
      if (typeof t2 != `function`) throw Error(`feaCheckBeam is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return t2(e2);
    }
    emSimulate(e2, t2, n2) {
      let r2 = this.kernel.emSimulate;
      if (typeof r2 != `function`) throw Error(`emSimulate is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return r2(e2, t2, n2);
    }
    antennaAnalyze(e2, t2, n2) {
      let r2 = this.kernel.antennaAnalyze;
      if (typeof r2 != `function`) throw Error(`antennaAnalyze is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return r2(e2, t2, n2);
    }
    photonicsSimulate(e2, t2) {
      let n2 = this.kernel.photonicsSimulate;
      if (typeof n2 != `function`) throw Error(`photonicsSimulate is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return n2(e2, t2);
    }
    neutronicsSimulate(e2, t2) {
      let n2 = this.kernel.neutronicsSimulate;
      if (typeof n2 != `function`) throw Error(`neutronicsSimulate is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return n2(e2, t2);
    }
    latticeGaugeSimulate(e2) {
      let t2 = this.kernel.latticeGaugeSimulate;
      if (typeof t2 != `function`) throw Error(`latticeGaugeSimulate is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return t2(e2);
    }
    topologyOptimizeBox(e2, t2, n2) {
      let r2 = this.kernel.topologyOptimizeBox;
      if (typeof r2 != `function`) throw Error(`topologyOptimizeBox is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return r2(JSON.stringify(n2), e2[0], e2[1], e2[2], t2[0], t2[1], t2[2]);
    }
    topologyOptimizeMesh(e2, t2) {
      let n2 = this.kernel.topologyOptimizeMesh;
      if (typeof n2 != `function`) throw Error(`topologyOptimizeMesh is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return n2(JSON.stringify(t2), e2.positions, e2.indices);
    }
    analyzeStaticsBox(e2, t2, n2) {
      let r2 = this.kernel.analyzeStaticsBox;
      if (typeof r2 != `function`) throw Error(`analyzeStaticsBox is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return r2(JSON.stringify(n2), e2[0], e2[1], e2[2], t2[0], t2[1], t2[2]);
    }
    analyzeStaticsMesh(e2, t2) {
      let n2 = this.kernel.analyzeStaticsMesh;
      if (typeof n2 != `function`) throw Error(`analyzeStaticsMesh is not exported by this kernel WASM build \u2014 rebuild packages/kernel-wasm`);
      return n2(JSON.stringify(t2), e2.positions, e2.indices);
    }
    importStep(e2) {
      let t2 = new Uint8Array(e2);
      return this.kernel.importStepBuffer(t2).map((e3) => ({
        positions: new Float32Array(e3.positions),
        indices: new Uint32Array(e3.indices)
      }));
    }
    importStepWithReport(e2) {
      let t2 = new Uint8Array(e2);
      if (typeof this.kernel.importStepBufferWithReport != `function`) return {
        meshes: this.importStep(e2),
        report: [],
        summary: null
      };
      let n2 = this.kernel.importStepBufferWithReport(t2);
      return {
        meshes: n2.meshes.map((e3) => ({
          positions: new Float32Array(e3.positions),
          indices: new Uint32Array(e3.indices)
        })),
        report: n2.report,
        summary: n2.summary
      };
    }
    stepImportDocument(e2, t2, n2, r2) {
      if (typeof this.kernel.stepImportDocument != `function`) throw Error(`stepImportDocument is not available - rebuild the kernel WASM`);
      return JSON.parse(this.kernel.stepImportDocument(e2, Uint32Array.from(t2), n2, r2));
    }
    importStepMeshDocument(e2, t2, n2, r2) {
      if (typeof this.kernel.importStepMeshDocument != `function`) throw Error(`importStepMeshDocument is not available - rebuild the kernel WASM`);
      let i2 = this.kernel.importStepMeshDocument(new Uint8Array(e2), t2, n2, r2);
      return {
        ...i2,
        document: JSON.parse(i2.document)
      };
    }
    registerStepSource(e2, t2) {
      if (typeof this.kernel.registerStepSource != `function`) throw Error(`registerStepSource is not available in this kernel build \u2014 rebuild the WASM kernel`);
      return this.kernel.registerStepSource(e2, new Uint8Array(t2));
    }
    bakeStepImports(e2) {
      let t2 = e2.nodes ?? {}, n2 = Object.entries(t2).filter(([, e3]) => {
        var _a2;
        return ((_a2 = e3.op) == null ? void 0 : _a2.type) === `step_import`;
      });
      if (n2.length === 0) return e2;
      let r2 = JSON.parse(JSON.stringify(e2));
      for (let [e3, t3] of n2) {
        let n3 = t3.op, i2 = this.kernel.Solid.fromRegisteredStep;
        if (typeof i2 != `function`) throw Error(`Solid.fromRegisteredStep is not available in this kernel build \u2014 rebuild the WASM kernel`);
        let a2 = i2(n3.path, n3.solid_index).getMesh();
        r2.nodes[e3] = {
          ...r2.nodes[e3],
          op: {
            type: `ImportedMesh`,
            positions: Array.from(a2.positions),
            indices: Array.from(a2.indices),
            normals: a2.normals ? Array.from(a2.normals) : void 0,
            source: n3.path
          }
        };
      }
      return r2;
    }
    stepSourceRegistered(e2) {
      var _a2, _b;
      return ((_b = (_a2 = this.kernel).stepSourceRegistered) == null ? void 0 : _b.call(_a2, e2)) ?? false;
    }
    unregisterStepSource(e2) {
      var _a2, _b;
      (_b = (_a2 = this.kernel).unregisterStepSource) == null ? void 0 : _b.call(_a2, e2);
    }
    importUrdf(e2, t2) {
      let n2 = new Uint8Array(e2);
      if (t2 == null ? void 0 : t2.floatingBase) {
        if (typeof this.kernel.importUrdfBufferWithOptions != `function`) throw Error(`floating-base URDF import not available \u2014 kernel WASM predates the importUrdfBufferWithOptions export; rebuild the kernel WASM`);
        return this.kernel.importUrdfBufferWithOptions(n2, true, t2.floatingBaseLink, t2.spawnHeightMm);
      }
      if (typeof this.kernel.importUrdfBuffer != `function`) throw Error(`URDF import not available \u2014 kernel WASM was built without urdf support`);
      return this.kernel.importUrdfBuffer(n2);
    }
    buildSheetMetalDocument(e2) {
      if (typeof this.kernel.buildSheetMetalDocument != `function`) throw Error(`sheet-metal document builder not available - rebuild the kernel WASM`);
      return JSON.parse(this.kernel.buildSheetMetalDocument(JSON.stringify(e2)));
    }
    inlineMeshImports(e2, t2) {
      if (t2.size === 0) return {
        inlined: 0,
        errors: []
      };
      if (typeof this.kernel.inlineMeshImports != `function`) throw Error(`mesh inlining not available - rebuild the kernel WASM`);
      let n2 = JSON.parse(this.kernel.inlineMeshImports(JSON.stringify(e2), [
        ...t2.keys()
      ], [
        ...t2.values()
      ]));
      return e2.nodes = n2.document.nodes, {
        inlined: n2.inlined,
        errors: n2.errors
      };
    }
    urdfCommentedFloatingJoint(e2) {
      if (typeof this.kernel.urdfCommentedFloatingJoint == `function`) return this.kernel.urdfCommentedFloatingJoint(new Uint8Array(e2));
    }
    exportDrawingToDxf(e2) {
      let t2 = JSON.stringify(e2);
      return this.kernel.exportProjectedViewToDxf(t2);
    }
    offsetSectionMesh(e2, t2, n2) {
      return this.kernel.offsetSectionMesh ? this.kernel.offsetSectionMesh(e2, JSON.stringify(t2), n2 ? JSON.stringify(n2) : void 0) : null;
    }
    renderTitleBlock(e2) {
      return this.kernel.renderTitleBlock ? this.kernel.renderTitleBlock(JSON.stringify(e2)) : null;
    }
    renderBomTable(e2) {
      return this.kernel.renderBomTable ? this.kernel.renderBomTable(JSON.stringify(e2)) : null;
    }
    drawingSheetToPdf(e2) {
      return this.kernel.drawingSheetToPdf ? this.kernel.drawingSheetToPdf(JSON.stringify(e2)) : null;
    }
    firstSheetMetalChain(e2) {
      for (let t2 of e2.roots) {
        if (t2.visible === false) continue;
        let n2 = S(t2.root, e2.nodes);
        if (!n2) continue;
        let r2 = x(n2.root, e2.nodes);
        if (r2) return r2;
      }
      return null;
    }
    costSheetMetal(e2, t2, n2 = 1) {
      let r2 = this.firstSheetMetalChain(e2);
      return r2 ? ae(r2, this.kernel, t2, n2) : null;
    }
    nestSheetMetalParts(e2, t2) {
      return te(e2, this.kernel, t2);
    }
    flattenSolidToSheetMetal(e2, t2) {
      return oe(e2, this.kernel, t2);
    }
    sheetMetalSequence(e2) {
      let t2 = this.firstSheetMetalChain(e2);
      return t2 ? ne(t2, this.kernel) : null;
    }
    simulateStrike(e2) {
      let t2 = this.kernel;
      if (!t2.simulateStrikeKernel) throw Error(`kernel WASM build lacks simulateStrikeKernel \u2014 rebuild @vcad/kernel-wasm`);
      return JSON.parse(t2.simulateStrikeKernel(JSON.stringify(e2)));
    }
    noteToHz(e2) {
      let t2 = this.kernel;
      if (!t2.noteToHz) throw Error(`kernel WASM build lacks noteToHz \u2014 rebuild @vcad/kernel-wasm`);
      return t2.noteToHz(e2);
    }
    getSheetMetalMaterials() {
      return ee(this.kernel);
    }
    getSheetMetalBendTable() {
      return T(this.kernel);
    }
    getSheetMetalShopCatalog(e2) {
      return re(this.kernel, e2);
    }
    checkSheetMetal(e2, t2) {
      let n2 = this.firstSheetMetalChain(e2);
      return n2 ? w(n2, this.kernel, t2) : null;
    }
    foldedSheetMetalStep(e2) {
      let t2 = this.firstSheetMetalChain(e2);
      return t2 ? ie(t2, this.kernel) : null;
    }
    documentStep(e2) {
      if (!this.kernel.documentToStepBuffer) throw Error(`documentToStepBuffer is not available in this kernel build \u2014 rebuild the WASM kernel`);
      return this.kernel.documentToStepBuffer(JSON.stringify(e2));
    }
    documentFaces(e2) {
      if (!this.kernel.inspectDocumentFaces) throw Error(`inspectDocumentFaces is not available in this kernel build \u2014 rebuild the WASM kernel`);
      return JSON.parse(this.kernel.inspectDocumentFaces(JSON.stringify(e2)));
    }
    createDetailView(e2, t2, n2, r2, i2, a2, o2) {
      let s2 = JSON.stringify(e2);
      return this.kernel.createDetailView(s2, t2, n2, r2, i2, a2, o2);
    }
    evalVcadSource(e2) {
      if (!this.kernel.evalVcadSource) return null;
      let t2 = this.kernel.evalVcadSource(e2);
      return JSON.parse(t2);
    }
    evalLoonDocument(e2, t2, n2 = {}) {
      var _a2, _b, _c;
      if (typeof this.kernel.evalLoonDocument != `function`) return null;
      let r2 = JSON.parse(this.kernel.evalLoonDocument(e2, JSON.stringify(t2), n2.baseDir, n2.path));
      return r2.source && ((_a2 = r2.source).diverged ?? (_a2.diverged = false), (_b = r2.source).diverged_by ?? (_b.diverged_by = []), (_c = r2.source).modules ?? (_c.modules = {})), r2;
    }
    evalVcadSourceWithModules(e2, t2) {
      if (!Object.keys(t2).length) return this.evalVcadSource(e2);
      if (!this.kernel.evalVcadSourceWithModules) return null;
      let n2 = this.kernel.evalVcadSourceWithModules(e2, JSON.stringify(t2));
      return JSON.parse(n2);
    }
    evalVcadSourceParametric(e2, t2 = {}) {
      if (!this.kernel.evalVcadSourceParametric) return null;
      let n2 = this.kernel.evalVcadSourceParametric(e2, Object.keys(t2).length ? JSON.stringify(t2) : void 0);
      return JSON.parse(n2);
    }
    evaluateExtrudePreview(e2, t2, n2, r2, i2) {
      if (r2.length === 0) return null;
      try {
        let a2 = {
          origin: [
            e2.x,
            e2.y,
            e2.z
          ],
          x_dir: [
            t2.x,
            t2.y,
            t2.z
          ],
          y_dir: [
            n2.x,
            n2.y,
            n2.z
          ],
          segments: r2.map(O)
        }, o2 = new Float64Array([
          i2.x,
          i2.y,
          i2.z
        ]), s2 = this.kernel.Solid.extrude(JSON.stringify(a2), o2).getMesh();
        return {
          positions: new Float32Array(s2.positions),
          indices: new Uint32Array(s2.indices)
        };
      } catch (e3) {
        return console.warn(`[engine] evaluateExtrudePreview failed:`, e3), null;
      }
    }
    evaluateRevolvePreview(e2, t2, n2, r2, i2, a2, o2) {
      if (r2.length === 0) return null;
      try {
        let s2 = {
          origin: [
            e2.x,
            e2.y,
            e2.z
          ],
          x_dir: [
            t2.x,
            t2.y,
            t2.z
          ],
          y_dir: [
            n2.x,
            n2.y,
            n2.z
          ],
          segments: r2.map(O)
        }, c2 = new Float64Array([
          i2.x,
          i2.y,
          i2.z
        ]), l2 = new Float64Array([
          a2.x,
          a2.y,
          a2.z
        ]), u2 = this.kernel.Solid.revolve(JSON.stringify(s2), c2, l2, o2).getMesh();
        return {
          positions: new Float32Array(u2.positions),
          indices: new Uint32Array(u2.indices)
        };
      } catch (e3) {
        return console.warn(`[engine] evaluateRevolvePreview failed:`, e3), null;
      }
    }
    evaluateSweepPreview(e2, t2, n2, r2, i2) {
      if (r2.length === 0) return null;
      try {
        let a2 = {
          origin: [
            e2.x,
            e2.y,
            e2.z
          ],
          x_dir: [
            t2.x,
            t2.y,
            t2.z
          ],
          y_dir: [
            n2.x,
            n2.y,
            n2.z
          ],
          segments: r2.map(O)
        }, o2 = JSON.stringify(a2), s2 = (i2.type === `Line` ? this.kernel.Solid.sweepLine(o2, new Float64Array([
          i2.start.x,
          i2.start.y,
          i2.start.z
        ]), new Float64Array([
          i2.end.x,
          i2.end.y,
          i2.end.z
        ])) : this.kernel.Solid.sweepHelix(o2, i2.radius, i2.pitch, i2.height, i2.turns)).getMesh();
        return {
          positions: new Float32Array(s2.positions),
          indices: new Uint32Array(s2.indices)
        };
      } catch (e3) {
        return console.warn(`[engine] evaluateSweepPreview failed:`, e3), null;
      }
    }
    evaluateLoftPreview(e2, t2) {
      if (e2.length < 2) return null;
      try {
        let n2 = e2.map((e3) => ({
          origin: [
            e3.origin.x,
            e3.origin.y,
            e3.origin.z
          ],
          x_dir: [
            e3.plane.x_dir.x,
            e3.plane.x_dir.y,
            e3.plane.x_dir.z
          ],
          y_dir: [
            e3.plane.y_dir.x,
            e3.plane.y_dir.y,
            e3.plane.y_dir.z
          ],
          segments: e3.segments.map((e4) => e4.type === `Line` ? {
            type: `Line`,
            start: [
              e4.start.x,
              e4.start.y
            ],
            end: [
              e4.end.x,
              e4.end.y
            ]
          } : {
            type: `Arc`,
            start: [
              e4.start.x,
              e4.start.y
            ],
            end: [
              e4.end.x,
              e4.end.y
            ],
            center: [
              e4.center.x,
              e4.center.y
            ],
            ccw: e4.ccw
          })
        })), r2 = this.kernel.Solid.loft(JSON.stringify(n2), t2 ?? false).getMesh();
        return {
          positions: new Float32Array(r2.positions),
          indices: new Uint32Array(r2.indices)
        };
      } catch (e3) {
        return console.warn(`[engine] evaluateLoftPreview failed:`, e3), null;
      }
    }
  }, __publicField(_a, "DEV", (() => {
    try {
      return false;
    } catch {
      return typeof process < `u` && false;
    }
  })()), _a);
});
export {
  l as A,
  me as C,
  i as D,
  m as E,
  u as O,
  we as S,
  y as T,
  Pe as _,
  __tla,
  Re as a,
  De as b,
  We as c,
  ze as d,
  Ue as f,
  Ne as g,
  Ve as h,
  qe as i,
  f as j,
  d as k,
  Ke as l,
  Me as m,
  Ye as n,
  Ge as o,
  Fe as p,
  Je as r,
  X as s,
  Xe as t,
  Be as u,
  ke as v,
  pe as w,
  Te as x,
  je as y
};
