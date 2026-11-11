const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/emulate-DxFOYMNx.js","assets/rolldown-runtime-COiEfhsA.js","assets/three-drei-_EcrAYRL.js","assets/three-Dweqhmle.js","assets/react-Cf1qM0wN.js","assets/preload-helper-H3bccnwO.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { A as t, C as n, D as r, E as i, M as a, O as o, S as s, T as c, g as l, v as u, w as d, x as f, y as p } from "./three-drei-_EcrAYRL.js";
import { n as m, t as h } from "./react-Cf1qM0wN.js";
import { t as g } from "./preload-helper-H3bccnwO.js";
import { w as _, __tla as __tla_0 } from "./dist-CG_6leuq.js";
import { $ as v, $t as y, B as b, Cn as x, Ct as S, Dn as C, En as ee, Et as w, F as te, Ft as T, Gt as ne, H as re, Ht as ie, It as E, Jt as ae, Lt as oe, M as se, Mt as ce, N as le, Q as ue, Tn as de, U as D, Ut as fe, W as O, Xt as pe, Y as me, Yt as he, Zt as k, _n as ge, an as _e, at as ve, cn as ye, dn as be, en as xe, fn as Se, hn as Ce, in as we, kn as Te, lt as Ee, on as De, pt as Oe, qt as ke, rt as Ae, sn as je, tn as Me, vt as Ne, wn as A } from "./three-Dweqhmle.js";
let _o, Ke, Ve, Be, yo, He, Bo, Ia, bo, qe, Uo, ze;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a2;
  var j = null, Pe = false, Fe = null, Ie = false, Le = null, Re = null;
  ze = async function() {
    return Pe ? true : Fe || (Fe = (async () => {
      try {
        return j || (j = await g(() => import("./vcad_kernel_wasm-CZ4lc4bq.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [])), Pe = typeof j.initGpu == `function` && await j.initGpu(), Pe;
      } catch {
        return false;
      }
    })(), Fe);
  };
  Be = function(e2) {
    let t2 = 0, n2 = 0;
    for (let r3 of e2) t2 += r3.positions.length, n2 += r3.indices.length;
    let r2 = new Float32Array(t2), i2 = new Uint32Array(n2), a2 = 0, o2 = 0, s2 = 0;
    for (let t3 of e2) {
      r2.set(t3.positions, a2);
      for (let e3 = 0; e3 < t3.indices.length; e3++) i2[o2 + e3] = t3.indices[e3] + s2;
      a2 += t3.positions.length, o2 += t3.indices.length, s2 += t3.positions.length / 3;
    }
    return {
      positions: r2,
      indices: i2
    };
  };
  Ve = async function() {
    return Ie ? true : Le || (Pe ? (Le = (async () => {
      var _a3;
      try {
        return j || (j = await g(() => import("./vcad_kernel_wasm-CZ4lc4bq.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [])), typeof ((_a3 = j.RayTracer) == null ? void 0 : _a3.create) == `function` ? (Re = j.RayTracer.create(), Ie = true, console.log(`[RayTracer] Ray tracer initialized successfully`)) : (console.log(`[RayTracer] Ray tracing feature not compiled into WASM module`), Ie = false), Ie;
      } catch (e2) {
        return console.warn(`[RayTracer] Init failed:`, e2), false;
      }
    })(), Le) : (console.log(`[RayTracer] GPU not available, skipping ray tracer init`), false));
  };
  He = function() {
    return Re;
  };
  let Ue, We, Ge;
  Ue = 250;
  We = null;
  Ge = null;
  Ke = h((e2, t2) => ({
    report: null,
    process: `fdm`,
    running: false,
    error: null,
    selectedIssueId: null,
    visibleSeverities: /* @__PURE__ */ new Set([
      `error`,
      `warning`,
      `info`
    ]),
    enabled: true,
    drawerOpen: false,
    setProcess: (n2) => {
      e2({
        process: n2
      }), Ge && t2().scheduleRun(Ge);
    },
    setEnabled: (t3) => e2({
      enabled: t3
    }),
    setDrawerOpen: (t3) => e2({
      drawerOpen: t3
    }),
    toggleDrawer: () => e2({
      drawerOpen: !t2().drawerOpen
    }),
    toggleSeverity: (n2) => {
      let r2 = new Set(t2().visibleSeverities);
      r2.has(n2) ? r2.delete(n2) : r2.add(n2), e2({
        visibleSeverities: r2
      });
    },
    selectIssue: (t3) => e2({
      selectedIssueId: t3
    }),
    scheduleRun: (n2) => {
      t2().enabled && (Ge = n2, We && clearTimeout(We), We = setTimeout(async () => {
        We = null;
        let n3 = Ge;
        if (n3) {
          e2({
            running: true,
            error: null
          });
          try {
            e2({
              report: await _(n3, {
                process: t2().process
              }),
              running: false
            });
          } catch (t3) {
            e2({
              running: false,
              error: t3 instanceof Error ? t3.message : String(t3)
            });
          }
        }
      }, Ue));
    }
  }));
  qe = function(e2) {
    let t2 = {
      error: 0,
      warning: 0,
      info: 0
    };
    if (!e2) return t2;
    for (let n2 of e2.issues) t2[n2.severity] += 1;
    return t2;
  };
  var M = o(), Je = 0.05, Ye = 0.1;
  function Xe(e2, t2, n2) {
    let r2 = t2.gamepad;
    if (r2 == null) return;
    let i2 = n2.components;
    for (let t3 in i2) {
      let n3 = e2[t3];
      n3 ?? (e2[t3] = n3 = {});
      let { gamepadIndices: a2 } = i2[t3], o2 = false, s2 = false;
      if (a2.button != null && a2.button < r2.buttons.length) {
        let e3 = r2.buttons[a2.button];
        n3.button = Te(e3.value, 0, 1), o2 || (o2 = e3.pressed || n3.button === 1), s2 || (s2 = e3.touched || n3.button > Je);
      }
      a2.xAxis != null && a2.xAxis < r2.axes.length && (n3.xAxis = Te(r2.axes[a2.xAxis], -1, 1), s2 || (s2 = Math.abs(n3.xAxis) > Ye)), a2.yAxis != null && a2.yAxis < r2.axes.length && (n3.yAxis = Te(r2.axes[a2.yAxis], -1, 1), s2 || (s2 = Math.abs(n3.yAxis) > Ye)), n3.state = o2 ? `pressed` : s2 ? `touched` : `default`;
    }
  }
  function Ze(e2) {
    return {
      data: new Float32Array(e2.size * 16)
    };
  }
  function Qe(e2, t2, n2, r2, i2) {
    let a2 = r2.getReferenceSpace();
    a2 != null && t2 != null && t2.session.visibilityState !== `visible-blurred` && t2.session.visibilityState !== `hidden` && tt(t2, a2, n2, e2.data);
  }
  var $e = new T(), et = new T();
  function tt(e2, t2, n2, r2) {
    if (!e2.fillPoses(n2.values(), t2, r2)) return false;
    $e.fromArray(r2, 0), $e.invert();
    for (let e3 = 0; e3 < r2.length; e3 += 16) et.fromArray(r2, e3), et.premultiply($e), et.toArray(r2, e3);
    return true;
  }
  var nt = `generic-hand`;
  function rt(e2, t2) {
    let n2 = (t2 == null ? void 0 : t2.baseAssetPath) ?? `https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/`, r2 = (t2 == null ? void 0 : t2.defaultXRHandProfileId) ?? nt;
    return new URL(`${r2}/${e2}.glb`, n2).href;
  }
  function it({ scene: e2 }) {
    let t2 = le(e2), n2 = t2.getObjectByProperty(`type`, `SkinnedMesh`);
    if (n2 == null) throw Error(`missing SkinnedMesh in loaded XRHand model`);
    return n2.frustumCulled = false, t2;
  }
  function at(e2, t2) {
    e2.renderOrder = (t2 == null ? void 0 : t2.renderOrder) ?? 0, e2.traverse((e3) => {
      e3 instanceof E && e3.material instanceof ce && (e3.material.colorWrite = (t2 == null ? void 0 : t2.colorWrite) ?? true);
    });
  }
  function ot(e2, t2, n2, r2, i2) {
    return {
      id: e2,
      isPrimary: i2,
      type: `hand`,
      inputSource: t2,
      pose: Ze(t2.hand),
      assetPath: rt(t2.handedness, n2),
      events: r2
    };
  }
  function st({ inputSource: e2, pose: t2 }, n2, r2) {
    Qe(t2, n2, e2.hand, r2, e2.handedness);
  }
  var ct = [
    `wrist`,
    `thumb-metacarpal`,
    `thumb-phalanx-proximal`,
    `thumb-phalanx-distal`,
    `thumb-tip`,
    `index-finger-metacarpal`,
    `index-finger-phalanx-proximal`,
    `index-finger-phalanx-intermediate`,
    `index-finger-phalanx-distal`,
    `index-finger-tip`,
    `middle-finger-metacarpal`,
    `middle-finger-phalanx-proximal`,
    `middle-finger-phalanx-intermediate`,
    `middle-finger-phalanx-distal`,
    `middle-finger-tip`,
    `ring-finger-metacarpal`,
    `ring-finger-phalanx-proximal`,
    `ring-finger-phalanx-intermediate`,
    `ring-finger-phalanx-distal`,
    `ring-finger-tip`,
    `pinky-finger-metacarpal`,
    `pinky-finger-phalanx-proximal`,
    `pinky-finger-phalanx-intermediate`,
    `pinky-finger-phalanx-distal`,
    `pinky-finger-tip`
  ];
  function lt(e2, t2, n2) {
    let r2 = new Float32Array(e2.size * 16), i2 = ct.map((e3) => {
      let n3 = t2.getObjectByName(e3);
      if (n3 == null) throw Error(`missing joint "${e3}" in hand model`);
      return n3.matrixAutoUpdate = false, n3;
    });
    return (t3) => {
      let a2 = typeof n2 == `function` ? n2() : n2;
      if (t3 == null || a2 == null) return;
      t3.fillPoses(e2.values(), a2, r2);
      let o2 = i2.length;
      for (let e3 = 0; e3 < o2; e3++) i2[e3].matrix.fromArray(r2, e3 * 16);
    };
  }
  function ut(e2) {
    return typeof e2 == `object` && !!e2 && `inputSource` in e2;
  }
  function dt(e2, t2) {
    let n2 = (e3) => t2.push(e3);
    return e2.addEventListener(`selectstart`, n2), e2.addEventListener(`selectend`, n2), e2.addEventListener(`select`, n2), e2.addEventListener(`squeeze`, n2), e2.addEventListener(`squeezestart`, n2), e2.addEventListener(`squeezeend`, n2), () => {
      e2.removeEventListener(`selectstart`, n2), e2.removeEventListener(`selectend`, n2), e2.removeEventListener(`select`, n2), e2.removeEventListener(`squeeze`, n2), e2.removeEventListener(`squeezestart`, n2), e2.removeEventListener(`squeezeend`, n2);
    };
  }
  var ft = 0;
  function pt(e2, t2) {
    let n2 = /* @__PURE__ */ new Map(), r2 = new Pi(t2), i2 = /* @__PURE__ */ new Map();
    return (a2, o2, s2) => {
      var _a3;
      if (s2 === `remove-all`) {
        for (let e3 of n2.values()) e3();
        return o2;
      }
      let c2 = [
        ...o2
      ];
      for (let { added: o3, isPrimary: l2, removed: u2 } of s2) {
        if (u2 != null) for (let e3 of u2) {
          let t3 = c2.findIndex(({ inputSource: t4, isPrimary: n3 }) => n3 === l2 && t4 === e3);
          t3 !== -1 && (c2.splice(t3, 1), (_a3 = n2.get(e3)) == null ? void 0 : _a3(), n2.delete(e3));
        }
        if (o3 != null) for (let s3 of o3) {
          let o4 = [], u3 = dt(a2, o4), d2 = `${s3.handedness}-${s3.hand ? `hand` : `nohand`}-${s3.targetRayMode}-${s3.profiles.join(`,`)}`, f2;
          if ((f2 = i2.get(d2)) ?? i2.set(d2, f2 = `${ft++}`), s3.hand != null) c2.push(ot(f2, s3, t2, o4, l2));
          else switch (s3.targetRayMode) {
            case `gaze`:
              c2.push({
                id: f2,
                isPrimary: l2,
                type: `gaze`,
                inputSource: s3,
                events: o4
              });
              break;
            case `screen`:
              c2.push({
                id: f2,
                isPrimary: l2,
                type: `screenInput`,
                inputSource: s3,
                events: o4
              });
              break;
            case `transient-pointer`:
              c2.push({
                id: f2,
                isPrimary: l2,
                type: `transientPointer`,
                inputSource: s3,
                events: o4
              });
              break;
            case `tracked-pointer`:
              let t3 = false, n3 = u3;
              u3 = () => {
                n3(), t3 = true;
              };
              let i3 = Ii(f2, s3, r2, o4, l2);
              i3 instanceof Promise ? i3.then((n4) => !t3 && e2(n4)).catch(console.error) : c2.push(i3);
          }
          n2.set(s3, u3);
        }
      }
      return c2;
    };
  }
  function mt(e2, t2) {
    let n2 = (e3, n3) => {
      (n3 == null || e3.visibilityState !== n3.visibilityState) && t2(e3.visibilityState === `visible`);
    };
    return n2(e2.getState()), e2.subscribe(n2);
  }
  var ht = class extends oe {
    constructor() {
      super({
        transparent: true,
        toneMapped: false,
        depthWrite: false
      });
    }
    onBeforeCompile(e2, t2) {
      super.onBeforeCompile(e2, t2), e2.vertexShader = `varying vec2 vLocalPosition;
` + e2.vertexShader, e2.vertexShader = e2.vertexShader.replace(`#include <color_vertex>`, `#include <color_vertex>
        vLocalPosition = position.xy * 2.0;`), e2.fragmentShader = `varying vec2 vLocalPosition;
` + e2.fragmentShader, e2.fragmentShader = e2.fragmentShader.replace(`#include <color_fragment>`, `#include <color_fragment>
          float value = max(0.0, 1.0 - sqrt(dot(vLocalPosition, vLocalPosition)));
          diffuseColor.a = diffuseColor.a * value * value;`);
    }
  }, gt = new A(0, 0, 1), _t = new k(), vt = new A();
  function yt(e2, t2, n2, r2, i2) {
    var _a3;
    let a2 = r2.getIntersection();
    if (a2 == null || !r2.getEnabled() || a2.object.isVoidObject === true || !bt(e2)) {
      t2.visible = false;
      return;
    }
    t2.visible = true;
    let o2 = typeof i2.color == `function` ? i2.color(r2) : i2.color;
    Array.isArray(o2) ? n2.color.set(...o2) : n2.color.set(o2 ?? `white`), n2.opacity = typeof i2.opacity == `function` ? i2.opacity(r2) : i2.opacity ?? 0.4, t2.position.copy(a2.pointOnFace), t2.scale.setScalar(i2.size ?? 0.1);
    let s2 = a2.normal ?? ((_a3 = a2.face) == null ? void 0 : _a3.normal);
    s2 != null && (_t.setFromUnitVectors(gt, s2), a2.object.getWorldQuaternion(t2.quaternion), t2.quaternion.multiply(_t), vt.set(0, 0, i2.cursorOffset ?? 0.01), vt.applyQuaternion(t2.quaternion), t2.position.add(vt)), t2.updateMatrix();
  }
  function bt({ visible: e2, parent: t2 }) {
    return e2 ? t2 == null || bt(t2) : false;
  }
  var xt = class extends oe {
    constructor() {
      super({
        transparent: true,
        toneMapped: false
      });
    }
    onBeforeCompile(e2, t2) {
      super.onBeforeCompile(e2, t2), e2.vertexShader = `varying float vFade;
` + e2.vertexShader, e2.vertexShader = e2.vertexShader.replace(`#include <color_vertex>`, `#include <color_vertex>
            vFade = position.z + 0.5;`), e2.fragmentShader = `varying float vFade;
` + e2.fragmentShader, e2.fragmentShader = e2.fragmentShader.replace(`#include <color_fragment>`, `#include <color_fragment>
              diffuseColor.a *= vFade;`);
    }
  };
  function St(e2, t2, n2, r2) {
    let i2 = n2.getIntersection();
    if (!n2.getEnabled() || i2 == null) {
      e2.visible = false;
      return;
    }
    e2.visible = true;
    let a2 = typeof r2.color == `function` ? r2.color(n2) : r2.color;
    Array.isArray(a2) ? t2.color.set(...a2) : t2.color.set(a2 ?? `white`), t2.opacity = typeof r2.opacity == `function` ? r2.opacity(n2) : r2.opacity ?? 0.4;
    let o2 = Math.min(r2.maxLength ?? 1, i2.distance);
    e2.position.z = -o2 / 2;
    let s2 = r2.size ?? 5e-3;
    e2.scale.set(s2, s2, o2), e2.updateMatrix();
  }
  function Ct(e2, t2, n2, r2, i2, a2 = {}) {
    let o2 = (t3) => {
      t3.inputSource === n2 && e2.down(Object.assign(t3, {
        button: a2.button ?? 0
      }));
    }, s2 = (t3) => {
      t3.inputSource === n2 && e2.up(Object.assign(t3, {
        button: a2.button ?? 0
      }));
    }, c2 = `${r2}start`, l2 = `${r2}end`, u2 = i2.length;
    for (let e3 = 0; e3 < u2; e3++) {
      let t3 = i2[e3];
      switch (t3.type) {
        case c2:
          o2(t3);
          break;
        case l2:
          s2(t3);
      }
    }
    return t2.addEventListener(c2, o2), t2.addEventListener(l2, s2), () => {
      t2.removeEventListener(c2, o2), t2.removeEventListener(l2, s2);
    };
  }
  function wt(e2) {
    var _a3;
    return e2.getButtonsDown().size > 0 ? 0.6 : Dt(((_a3 = e2.getIntersection()) == null ? void 0 : _a3.distance) ?? 1 / 0, 0.07, 0, 0.2, 0.4);
  }
  function Tt(e2) {
    return e2.getButtonsDown().size > 0 ? 0.6 : 0.4;
  }
  function Et(e2) {
    var _a3;
    return Dt(((_a3 = e2.getIntersection()) == null ? void 0 : _a3.distance) ?? 1 / 0, 0.1, 0.03, 0.2, 0.6);
  }
  function Dt(e2, t2, n2, r2, i2) {
    return r2 + Math.max(0, Math.min(1, (e2 - t2) / (n2 - t2))) * (i2 - r2);
  }
  function Ot(e2, t2) {
    return (n2, r2) => {
      if (e2 === t2) return n2.identity(), true;
      let i2 = typeof t2 == `function` ? t2() : t2;
      if (i2 == null) return false;
      let a2 = r2 == null ? void 0 : r2.getPose(e2, i2);
      return a2 != null && (n2.fromArray(a2.transform.matrix), true);
    };
  }
  function kt(e2, t2, n2, r2) {
    return e2.updateWorldMatrix(true, false), r2 == null ? void 0 : r2.copy(e2.matrix), jt(e2.parent, e2, r2) ?? (r2 != null && At(e2, t2, r2), n2);
  }
  function At(e2, t2, n2) {
    e2.updateWorldMatrix(true, false), t2 == null ? n2.copy(e2.matrixWorld) : (t2.updateWorldMatrix(true, false), n2.copy(t2.matrixWorld).invert().multiply(e2.matrixWorld));
  }
  function jt(e2, t2, n2) {
    if (e2 != null) return e2.xrSpace == null ? jt(e2.parent, t2, n2) : (n2 == null ? void 0 : n2.copy(e2.matrixWorld).invert().multiply(t2.matrixWorld), e2.xrSpace);
  }
  var Mt = class {
    constructor(e2) {
      __publicField(this, "nativeEvent");
      __publicField(this, "NONE", 0);
      __publicField(this, "CAPTURING_PHASE", 1);
      __publicField(this, "AT_TARGET", 2);
      __publicField(this, "BUBBLING_PHASE", 3);
      __publicField(this, "relatedTarget", null);
      this.nativeEvent = e2;
    }
    get altKey() {
      return this.getFromNative(`altKey`, false);
    }
    get button() {
      return this.getFromNative(`button`, 0);
    }
    get buttons() {
      return this.getFromNative(`buttons`, 0);
    }
    get clientX() {
      return this.getFromNative(`clientX`, 0);
    }
    get clientY() {
      return this.getFromNative(`clientY`, 0);
    }
    get ctrlKey() {
      return this.getFromNative(`ctrlKey`, false);
    }
    get layerX() {
      return this.getFromNative(`layerX`, 0);
    }
    get layerY() {
      return this.getFromNative(`layerY`, 0);
    }
    get metaKey() {
      return this.getFromNative(`metaKey`, false);
    }
    get movementX() {
      return this.getFromNative(`movementX`, 0);
    }
    get movementY() {
      return this.getFromNative(`movementY`, 0);
    }
    get offsetX() {
      return this.getFromNative(`offsetX`, 0);
    }
    get offsetY() {
      return this.getFromNative(`offsetY`, 0);
    }
    get pageX() {
      return this.getFromNative(`pageX`, 0);
    }
    get pageY() {
      return this.getFromNative(`pageY`, 0);
    }
    get screenX() {
      return this.getFromNative(`screenX`, 0);
    }
    get screenY() {
      return this.getFromNative(`screenY`, 0);
    }
    get shiftKey() {
      return this.getFromNative(`shiftKey`, false);
    }
    get x() {
      return this.getFromNative(`x`, 0);
    }
    get y() {
      return this.getFromNative(`y`, 0);
    }
    get detail() {
      return this.getFromNative(`detail`, 0);
    }
    get view() {
      return this.getFromNative(`view`, null);
    }
    get which() {
      return this.getFromNative(`which`, 0);
    }
    get cancelBubble() {
      return this.getFromNative(`cancelBubble`, false);
    }
    get composed() {
      return this.getFromNative(`composed`, false);
    }
    get eventPhase() {
      return this.getFromNative(`eventPhase`, 0);
    }
    get isTrusted() {
      return this.getFromNative(`isTrusted`, false);
    }
    get returnValue() {
      return this.getFromNative(`returnValue`, false);
    }
    get timeStamp() {
      return this.getFromNative(`timeStamp`, 0);
    }
    get cancelable() {
      return this.getFromNative(`cancelable`, false);
    }
    get defaultPrevented() {
      return this.getFromNative(`defaultPrevented`, false);
    }
    getFromNative(e2, t2) {
      return e2 in this.nativeEvent ? this.nativeEvent[e2] : t2;
    }
  }, Nt = new A(), N = class e2 extends Mt {
    constructor(e3, t2, n2, r2, i2, a2, o2 = i2.object, s2 = o2, c2 = {
      stopped: !t2,
      stoppedImmediate: false
    }) {
      super(n2);
      __publicField(this, "type");
      __publicField(this, "bubbles");
      __publicField(this, "internalPointer");
      __publicField(this, "intersection");
      __publicField(this, "camera");
      __publicField(this, "currentObject");
      __publicField(this, "object");
      __publicField(this, "propagationState");
      __publicField(this, "_pointer");
      __publicField(this, "_ray");
      __publicField(this, "_intersections", []);
      __publicField(this, "_unprojectedPoint");
      this.type = e3, this.bubbles = t2, this.internalPointer = r2, this.intersection = i2, this.camera = a2, this.currentObject = o2, this.object = s2, this.propagationState = c2;
    }
    get pointerId() {
      return this.internalPointer.id;
    }
    get pointerType() {
      return this.internalPointer.type;
    }
    get pointerState() {
      return this.internalPointer.state;
    }
    get distance() {
      return this.intersection.distance;
    }
    get distanceToRay() {
      return this.intersection.distanceToRay;
    }
    get point() {
      return this.intersection.point;
    }
    get index() {
      return this.intersection.index;
    }
    get face() {
      return this.intersection.face;
    }
    get faceIndex() {
      return this.intersection.faceIndex;
    }
    get uv() {
      return this.intersection.uv;
    }
    get uv1() {
      return this.intersection.uv1;
    }
    get normal() {
      return this.intersection.normal;
    }
    get instanceId() {
      return this.intersection.instanceId;
    }
    get pointOnLine() {
      return this.intersection.pointOnLine;
    }
    get batchId() {
      return this.intersection.batchId;
    }
    get pointerPosition() {
      return this.intersection.pointerPosition;
    }
    get pointerQuaternion() {
      return this.intersection.pointerQuaternion;
    }
    get pointOnFace() {
      return this.intersection.pointOnFace;
    }
    get localPoint() {
      return this.intersection.localPoint;
    }
    get details() {
      return this.intersection.details;
    }
    get target() {
      return this.object;
    }
    get currentTarget() {
      return this.currentObject;
    }
    get eventObject() {
      return this.currentObject;
    }
    get srcElement() {
      return this.currentObject;
    }
    get pointer() {
      return this._pointer ?? (this._pointer = (Nt.copy(this.intersection.point).project(this.camera), new x(Nt.x, Nt.y))), this._pointer;
    }
    get ray() {
      if (this._ray != null) return this._ray;
      switch (this.intersection.details.type) {
        case `screen-ray`:
        case `ray`:
        case `sphere`:
          return this._ray = new xe(this.intersection.pointerPosition, new A(0, 0, -1).applyQuaternion(this.intersection.pointerQuaternion));
        case `lines`:
          return this._ray = new xe(this.intersection.details.line.start, this.intersection.details.line.end.clone().sub(this.intersection.details.line.start).normalize());
      }
    }
    get intersections() {
      return this._intersections ?? (this._intersections = [
        {
          ...this.intersection,
          eventObject: this.currentObject
        }
      ]), this._intersections;
    }
    get unprojectedPoint() {
      if (this._unprojectedPoint == null) {
        let e3 = this.pointer;
        this._unprojectedPoint = new A(e3.x, e3.y, 0).unproject(this.camera);
      }
      return this._unprojectedPoint;
    }
    get stopped() {
      return this.propagationState.stoppedImmediate || this.propagationState.stopped;
    }
    get stoppedImmediate() {
      return this.propagationState.stoppedImmediate;
    }
    get delta() {
      throw Error(`not supported`);
    }
    stopPropagation() {
      this.propagationState.stopped = true;
    }
    stopImmediatePropagation() {
      this.propagationState.stoppedImmediate = true;
    }
    retarget(t2) {
      return new e2(this.type, this.bubbles, this.nativeEvent, this.internalPointer, this.intersection, this.camera, t2, this.target, this.propagationState);
    }
  }, Pt = class e2 extends N {
    get deltaX() {
      return this.nativeEvent.deltaX;
    }
    get deltaY() {
      return this.nativeEvent.deltaY;
    }
    get deltaZ() {
      return this.nativeEvent.deltaZ;
    }
    constructor(e3, t2, n2, r2, i2, a2) {
      super(`wheel`, true, e3, t2, n2, r2, i2, a2);
    }
    retarget(t2) {
      return new e2(this.nativeEvent, this.internalPointer, this.intersection, this.camera, t2, this.target);
    }
  };
  function P(e2) {
    Ft(e2, e2.currentObject);
  }
  function Ft(e2, t2) {
    if (t2 == null) return;
    let n2 = Rt(t2, e2.type);
    if (n2 != null && n2.length > 0) {
      let r2 = e2.retarget(t2), i2 = n2.length;
      for (let e3 = 0; e3 < i2 && !r2.stoppedImmediate; e3++) n2[e3](r2);
    }
    e2.stopped || Ft(e2, t2.parent);
  }
  var It = {
    click: `onClick`,
    contextmenu: `onContextMenu`,
    dblclick: `onDoubleClick`,
    pointercancel: `onPointerCancel`,
    pointerdown: `onPointerDown`,
    pointerenter: `onPointerEnter`,
    pointerleave: `onPointerLeave`,
    pointermove: `onPointerMove`,
    pointerout: `onPointerOut`,
    pointerover: `onPointerOver`,
    pointerup: `onPointerUp`,
    wheel: `onWheel`
  }, Lt = Object.keys(It);
  function Rt(e2, t2) {
    var _a3;
    if (e2._listeners != null && t2 in e2._listeners) return e2._listeners[t2];
    let n2;
    if (e2.isVoidObject && t2 === `click` && ((_a3 = e2.parent) == null ? void 0 : _a3.__r3f) != null && (n2 = e2.parent.__r3f.root.getState().onPointerMissed), e2.__r3f != null && (n2 = e2.__r3f.handlers[It[t2]]), n2 != null) return [
      n2
    ];
  }
  var zt = new Se(1e10), Bt = /* @__PURE__ */ new Map();
  function Vt(e2) {
    let t2 = Bt.get(e2);
    return t2 ?? (t2 = new E(zt), t2.isVoidObject = true, t2.parent = e2, t2.pointerEventsOrder = -1 / 0, Bt.set(e2, t2)), t2;
  }
  function Ht(e2, t2, n2) {
    var _a3;
    let r2 = t2.normal ?? ((_a3 = t2.face) == null ? void 0 : _a3.normal);
    return r2 != null && (e2.setFromNormalAndCoplanarPoint(r2, t2.localPoint), e2.applyMatrix4(n2), true);
  }
  function Ut(e2, t2, n2) {
    if (t2 === `none` || t2 === `listener` && !e2) return false;
    if (n2 === `all`) return true;
    if (typeof n2 == `function`) return ({ id: e3, type: t3, state: r3 }) => n2(e3, t3, r3);
    let r2, i2;
    return `deny` in n2 ? (i2 = true, r2 = n2.deny) : (i2 = false, r2 = n2.allow), Array.isArray(r2) ? (e3) => Wt(r2.includes(e3.type), i2) : (e3) => Wt(r2 === e3.type, i2);
  }
  function Wt(e2, t2) {
    return t2 ? !e2 : e2;
  }
  function Gt(e2, t2, n2, r2 = false, i2, a2, o2) {
    let s2 = r2 || Kt(e2, t2), c2 = t2.pointerEvents ?? i2, l2 = c2 ?? t2.defaultPointerEvents ?? `listener`, u2 = t2.pointerEventsType ?? a2 ?? `all`, d2 = t2.pointerEventsOrder ?? o2 ?? 0, f2 = Ut(s2, l2, u2), p2 = n2.length;
    if (p2 === 1) (f2 === true || typeof f2 == `function` && f2(n2[0])) && qt(n2[0], t2, l2, u2, d2);
    else if (f2 === true) for (let e3 = 0; e3 < p2; e3++) qt(n2[e3], t2, l2, u2, d2);
    else if (typeof f2 == `function`) for (let e3 = 0; e3 < p2; e3++) {
      let r3 = n2[e3];
      f2(r3) && qt(r3, t2, l2, u2, d2);
    }
    if (t2.children.length === 0 || t2.intersectChildren === false) return;
    let m2 = t2.interactableDescendants ?? t2.children, h2 = m2.length;
    for (let t3 = 0; t3 < h2; t3++) Gt(e2, m2[t3], n2, s2, c2, u2, d2);
  }
  function Kt(e2, t2) {
    var _a3;
    if (t2.ancestorsHaveListeners || e2 === `pointer` && t2.ancestorsHavePointerListeners || e2 === `wheel` && t2.ancestorsHaveWheelListeners || t2.__r3f != null && ((_a3 = t2.__r3f) == null ? void 0 : _a3.eventCount) > 0 && (e2 === `wheel` && t2.__r3f.handlers.onWheel != null || e2 === `pointer` && Object.keys(t2.__r3f.handlers).some((e3) => e3 != `onWheel`))) return true;
    if (t2._listeners == null) return false;
    if (e2 === `wheel`) {
      let e3 = t2._listeners.wheel;
      return e3 != null && e3.length > 0;
    }
    let n2 = Object.entries(t2._listeners), r2 = n2.length;
    for (let e3 = 0; e3 < r2; e3++) {
      let t3 = n2[e3];
      if (t3[0] !== `wheel` && Lt.includes(t3[0]) && t3[1] != null && t3[1].length > 0) return true;
    }
    return false;
  }
  function qt({ intersector: e2, options: t2 }, n2, r2, i2, a2) {
    var _a3;
    ((_a3 = t2.filter) == null ? void 0 : _a3.call(t2, n2, r2, i2, a2)) !== false && e2.executeIntersection(n2, a2);
  }
  function Jt(e2, t2, { customSort: n2 = Yt } = {}, r2) {
    let i2, a2, o2, s2 = e2.length;
    for (let c2 = 0; c2 < s2; c2++) {
      let s3 = e2[c2];
      if ((r2 == null ? void 0 : r2(s3)) === false) continue;
      let l2 = t2 == null ? void 0 : t2[c2];
      (i2 == null || n2(s3, l2, i2, a2) < 0) && (o2 = c2, i2 = s3, a2 = l2);
    }
    return o2;
  }
  function Yt(e2, t2 = 0, n2, r2 = 0) {
    return t2 == r2 ? e2.distance - n2.distance : r2 - t2;
  }
  var Xt = 1e7;
  function Zt(e2, t2, n2, r2, i2, a2 = 0) {
    let o2 = t2.direction.clone().multiplyScalar(Xt), s2 = Xt;
    return {
      distance: s2 + a2,
      object: Vt(e2),
      point: o2,
      normal: t2.origin.clone().sub(o2).normalize(),
      details: n2(o2, s2),
      pointerPosition: r2,
      pointerQuaternion: i2,
      pointOnFace: o2,
      localPoint: o2
    };
  }
  function Qt(e2, t2, n2) {
    for (; n2 > 0; ) e2.push(t2), --n2;
  }
  var $t = Symbol(`buttonsDownTime`), en = Symbol(`buttonsClickTime`);
  globalThis.pointerEventspointerMap ?? (globalThis.pointerEventspointerMap = /* @__PURE__ */ new Map()), fe.prototype.setPointerCapture = function(e2) {
    var _a3;
    (_a3 = tn(e2)) == null ? void 0 : _a3.setCapture(this);
  }, fe.prototype.releasePointerCapture = function(e2) {
    let t2 = tn(e2);
    t2 != null && t2.hasCaptured(this) && t2.setCapture(void 0);
  }, fe.prototype.hasPointerCapture = function(e2) {
    var _a3;
    return ((_a3 = tn(e2)) == null ? void 0 : _a3.hasCaptured(this)) ?? false;
  };
  function tn(e2) {
    var _a3;
    return (_a3 = globalThis.pointerEventspointerMap) == null ? void 0 : _a3.get(e2);
  }
  var F = class {
    constructor(e2, t2, n2, r2, i2, a2, o2, s2, c2 = {}) {
      __publicField(this, "id");
      __publicField(this, "type");
      __publicField(this, "state");
      __publicField(this, "intersector");
      __publicField(this, "getCamera");
      __publicField(this, "onMoveCommited");
      __publicField(this, "parentSetPointerCapture");
      __publicField(this, "parentReleasePointerCapture");
      __publicField(this, "options");
      __publicField(this, "prevIntersection");
      __publicField(this, "intersection");
      __publicField(this, "prevEnabled", true);
      __publicField(this, "enabled", true);
      __publicField(this, "wheelIntersection");
      __publicField(this, "pointerEntered", []);
      __publicField(this, "pointerEnteredHelper", []);
      __publicField(this, "pointerCapture");
      __publicField(this, "buttonsDownTime", /* @__PURE__ */ new Map());
      __publicField(this, "buttonsDown", /* @__PURE__ */ new Set());
      __publicField(this, "wasMoved", false);
      __publicField(this, "onFirstMove", []);
      var _a3;
      this.id = e2, this.type = t2, this.state = n2, this.intersector = r2, this.getCamera = i2, this.onMoveCommited = a2, this.parentSetPointerCapture = o2, this.parentReleasePointerCapture = s2, this.options = c2, (_a3 = globalThis.pointerEventspointerMap) == null ? void 0 : _a3.set(e2, this);
    }
    getPointerCapture() {
      return this.pointerCapture;
    }
    hasCaptured(e2) {
      var _a3;
      return ((_a3 = this.pointerCapture) == null ? void 0 : _a3.object) === e2;
    }
    setCapture(e2) {
      var _a3, _b;
      ((_a3 = this.pointerCapture) == null ? void 0 : _a3.object) !== e2 && (this.clearPointerCapture(), e2 != null && this.intersection != null && (this.pointerCapture = {
        object: e2,
        intersection: this.intersection
      }, (_b = this.parentSetPointerCapture) == null ? void 0 : _b.call(this)));
    }
    getButtonsDown() {
      return this.buttonsDown;
    }
    getIntersection() {
      return this.intersection;
    }
    getEnabled() {
      return this.enabled;
    }
    setEnabled(e2, t2, n2 = true) {
      this.enabled !== e2 && (!e2 && this.pointerCapture != null && this.clearPointerCapture(), this.enabled = e2, n2 && this.commit(t2, false));
    }
    computeIntersection(e2, t2, n2) {
      return this.pointerCapture == null ? (this.intersector.startIntersection(n2), Gt(e2, t2, [
        this
      ]), this.intersector.finalizeIntersection(t2)) : this.intersector.intersectPointerCapture(this.pointerCapture, n2);
    }
    setIntersection(e2) {
      this.intersection = e2;
    }
    commit(e2, t2) {
      var _a3;
      let n2 = this.getCamera(), r2 = this.prevEnabled ? this.prevIntersection : void 0, i2 = this.enabled ? this.intersection : void 0;
      r2 != null && r2.object != (i2 == null ? void 0 : i2.object) && P(new N(`pointerout`, true, e2, this, r2, n2));
      let a2 = this.pointerEntered;
      this.pointerEntered = [], this.pointerEnteredHelper.length = 0, nn(i2 == null ? void 0 : i2.object, this.pointerEntered, a2, this.pointerEnteredHelper);
      let o2 = a2.length;
      for (let t3 = 0; t3 < o2; t3++) {
        let i3 = a2[t3];
        P(new N(`pointerleave`, false, e2, this, r2, n2, i3));
      }
      i2 != null && (r2 == null ? void 0 : r2.object) != i2.object && P(new N(`pointerover`, true, e2, this, i2, n2));
      for (let t3 = this.pointerEnteredHelper.length - 1; t3 >= 0; t3--) {
        let r3 = this.pointerEnteredHelper[t3];
        P(new N(`pointerenter`, false, e2, this, i2, n2, r3));
      }
      if (t2 && i2 != null && P(new N(`pointermove`, true, e2, this, i2, n2)), this.prevIntersection = this.intersection, this.prevEnabled = this.enabled, !this.wasMoved && this.intersector.isReady()) {
        this.wasMoved = true;
        let e3 = this.onFirstMove.length;
        for (let t3 = 0; t3 < e3; t3++) this.onFirstMove[t3](n2);
        this.onFirstMove.length = 0;
      }
      (_a3 = this.onMoveCommited) == null ? void 0 : _a3.call(this, this);
    }
    move(e2, t2) {
      this.intersection = this.computeIntersection(`pointer`, e2, t2), this.commit(t2, true);
    }
    over(e2, t2) {
      this.wasMoved || (this.intersection = this.computeIntersection(`pointer`, e2, t2), this.commit(t2, false));
    }
    emitMove(e2) {
      this.intersection != null && P(new N(`pointermove`, true, e2, this, this.intersection, this.getCamera()));
    }
    down(e2) {
      if (this.buttonsDown.add(e2.button), !this.enabled) return;
      if (!this.wasMoved) {
        this.onFirstMove.push(this.down.bind(this, e2));
        return;
      }
      if (this.intersection == null) return;
      P(new N(`pointerdown`, true, e2, this, this.intersection, this.getCamera()));
      let { object: t2 } = this.intersection;
      t2[$t] ?? (t2[$t] = /* @__PURE__ */ new Map()), t2[$t].set(e2.button, e2.timeStamp), this.buttonsDownTime.set(e2.button, e2.timeStamp);
    }
    up(e2) {
      if (this.buttonsDown.delete(e2.button), !this.enabled) return;
      if (!this.wasMoved) {
        this.onFirstMove.push(this.up.bind(this, e2));
        return;
      }
      if (this.intersection == null) return;
      let { clickThesholdMs: t2, contextMenuButton: n2 = 2, dblClickThresholdMs: r2 = 500, clickThresholdMs: i2 = t2 ?? 300 } = this.options;
      this.clearPointerCapture();
      let a2 = rn(this.buttonsDownTime, this.intersection.object[$t], e2.button, e2.timeStamp, i2), o2 = this.getCamera();
      if (a2 && e2.button === n2 && P(new N(`contextmenu`, true, e2, this, this.intersection, o2)), P(new N(`pointerup`, true, e2, this, this.intersection, o2)), !a2 || e2.button === n2) return;
      P(new N(`click`, true, e2, this, this.intersection, o2));
      let { object: s2 } = this.intersection, c2 = s2[en] ?? (s2[en] = /* @__PURE__ */ new Map()), l2 = c2.get(e2.button);
      l2 == null || e2.timeStamp - l2 > r2 ? c2.set(e2.button, e2.timeStamp) : (P(new N(`dblclick`, true, e2, this, this.intersection, o2)), c2.delete(e2.button));
    }
    cancel(e2) {
      this.buttonsDown.clear(), this.buttonsDownTime.clear(), this.clearPointerCapture(), this.onFirstMove.length = 0, this.enabled && this.wasMoved && this.intersection != null && P(new N(`pointercancel`, true, e2, this, this.intersection, this.getCamera()));
    }
    wheel(e2, t2, n2 = false) {
      if (!this.enabled) return;
      if (!this.wasMoved && n2) {
        this.onFirstMove.push(this.wheel.bind(this, e2, t2, n2));
        return;
      }
      n2 || (this.wheelIntersection = this.computeIntersection(`wheel`, e2, t2));
      let r2 = n2 ? this.intersection : this.wheelIntersection;
      r2 != null && P(new Pt(t2, this, r2, this.getCamera()));
    }
    emitWheel(e2, t2 = false) {
      if (!this.enabled) return;
      if (!this.wasMoved && t2) {
        this.onFirstMove.push(this.emitWheel.bind(this, e2, t2));
        return;
      }
      let n2 = t2 ? this.intersection : this.wheelIntersection;
      n2 != null && P(new Pt(e2, this, n2, this.getCamera()));
    }
    exit(e2) {
      (this.buttonsDown.size > 0 || this.pointerCapture != null) && this.cancel(e2), this.wasMoved && (this.intersection = void 0, this.commit(e2, false)), this.onFirstMove.length = 0, this.wasMoved = false;
    }
    clearPointerCapture() {
      var _a3;
      this.pointerCapture != null && ((_a3 = this.parentReleasePointerCapture) == null ? void 0 : _a3.call(this), this.pointerCapture = void 0);
    }
  };
  function nn(e2, t2, n2, r2) {
    if (e2 == null) return;
    let i2 = n2.indexOf(e2);
    i2 == -1 ? r2.push(e2) : n2.splice(i2, 1), t2.push(e2), nn(e2.parent, t2, n2, r2);
  }
  function rn(e2, t2, n2, r2, i2) {
    if (t2 == null) return false;
    let a2 = t2.get(n2);
    return !(a2 == null || r2 - a2 > i2 || a2 != e2.get(n2));
  }
  function an(e2) {
    return e2.transformReady === false ? false : e2.parent == null ? (e2.matrixWorld.copy(e2.matrix), true) : an(e2.parent) ? (e2.matrixWorld.multiplyMatrices(e2.parent.matrixWorld, e2.matrix), true) : false;
  }
  var I = new ge(), on = new ge(), sn = new x(), cn = new x(), ln = new x(), un = new A(), dn = new T(), fn = new A();
  function L(e2, t2, n2) {
    fn.copy(t2).applyMatrix4(dn.copy(n2.matrixWorld).invert());
    let r2 = n2.geometry.attributes.uv;
    if (r2 == null || !(r2 instanceof D)) return false;
    let i2;
    return pn(n2, (e3, t3, a2) => {
      n2.getVertexPosition(e3, I.a), n2.getVertexPosition(t3, I.b), n2.getVertexPosition(a2, I.c);
      let o2 = I.closestPointToPoint(fn, un).distanceTo(fn);
      i2 != null && o2 >= i2 || (i2 = o2, on.copy(I), sn.fromBufferAttribute(r2, e3), cn.fromBufferAttribute(r2, t3), ln.fromBufferAttribute(r2, a2));
    }), i2 != null && (on.closestPointToPoint(fn, un), on.getInterpolation(un, sn, cn, ln, e2), true);
  }
  function pn(e2, t2) {
    let n2 = e2.geometry.drawRange;
    if (e2.geometry.index != null) {
      let r3 = e2.geometry.index, i3 = Math.max(0, n2.start), a3 = Math.min(r3.count, n2.start + n2.count);
      for (let e3 = i3; e3 < a3; e3 += 3) t2(r3.getX(e3), r3.getX(e3 + 1), r3.getX(e3 + 2));
      return;
    }
    let r2 = e2.geometry.attributes.position;
    if (r2 == null) return;
    let i2 = Math.max(0, n2.start), a2 = Math.min(r2.count, n2.start + n2.count);
    for (let e3 = i2; e3 < a2; e3 += 3) t2(e3, e3 + 1, e3 + 2);
  }
  var mn = new T(), hn = new S(), gn = new A(), _n = new ae(), vn = new xe(), yn = new x(), bn = [
    new A(0, 0, 0),
    new A(0, 0, 1)
  ], xn = class {
    constructor(e2, t2) {
      __publicField(this, "space");
      __publicField(this, "options");
      __publicField(this, "raycasters", []);
      __publicField(this, "fromMatrixWorld", new T());
      __publicField(this, "ready");
      __publicField(this, "intersects", []);
      __publicField(this, "pointerEventsOrders", []);
      __publicField(this, "raycasterIndices", []);
      this.space = e2, this.options = t2;
    }
    isReady() {
      return this.ready ?? this.prepareTransformation();
    }
    prepareTransformation() {
      let e2 = this.space.current;
      return e2 == null ? this.ready = false : (this.ready = an(e2), this.ready ? (this.fromMatrixWorld.copy(e2.matrixWorld), true) : false);
    }
    intersectPointerCapture({ intersection: e2, object: t2 }) {
      let n2 = e2.details;
      if (n2.type != `lines`) throw Error(`unable to process a pointer capture of type "${e2.details.type}" with a lines intersector`);
      if (!this.prepareTransformation()) return e2;
      let r2 = this.options.linePoints ?? bn;
      hn.set(r2[n2.lineIndex], r2[n2.lineIndex + 1]).applyMatrix4(this.fromMatrixWorld);
      let i2 = hn.at(n2.distanceOnLine / hn.distance(), new A());
      e2.object.updateWorldMatrix(true, false), Ht(_n, e2, e2.object.matrixWorld);
      let a2 = vn.intersectPlane(_n, new A()) ?? i2, o2 = new A(), s2 = new k();
      this.fromMatrixWorld.decompose(o2, s2, gn);
      let c2 = e2.uv;
      return e2.object instanceof E && L(yn, i2, e2.object) && (c2 = yn.clone()), {
        ...e2,
        object: t2,
        uv: c2,
        pointOnFace: a2,
        point: i2,
        pointerPosition: o2,
        pointerQuaternion: s2
      };
    }
    startIntersection() {
      if (!this.prepareTransformation()) return;
      let e2 = this.options.linePoints ?? bn, t2 = e2.length - 1;
      for (let n2 = 0; n2 < t2; n2++) {
        let t3 = e2[n2], r2 = e2[n2 + 1], i2 = this.raycasters[n2] ?? (this.raycasters[n2] = new Me());
        i2.ray.origin.copy(t3).applyMatrix4(this.fromMatrixWorld), i2.ray.direction.copy(r2).applyMatrix4(this.fromMatrixWorld), i2.ray.direction.sub(i2.ray.origin);
        let a2 = i2.ray.direction.length();
        i2.ray.direction.divideScalar(a2), i2.far = a2;
      }
      this.raycasters.length = t2;
    }
    executeIntersection(e2, t2) {
      if (!this.isReady()) return;
      let n2 = this.intersects.length, r2 = this.raycasters.length;
      for (let t3 = 0; t3 < r2; t3++) {
        let n3 = this.raycasters[t3], r3 = this.intersects.length;
        e2.raycast(n3, this.intersects), Qt(this.raycasterIndices, t3, this.intersects.length - r3);
      }
      Qt(this.pointerEventsOrders, t2, this.intersects.length - n2);
    }
    finalizeIntersection(e2) {
      let t2 = new A().setFromMatrixPosition(this.fromMatrixWorld), n2 = new k().setFromRotationMatrix(this.fromMatrixWorld), r2 = Jt(this.intersects, this.pointerEventsOrders, this.options), i2 = r2 == null ? void 0 : this.intersects[r2], a2 = r2 == null ? void 0 : this.raycasterIndices[r2];
      if (this.intersects.length = 0, this.raycasterIndices.length = 0, this.pointerEventsOrders.length = 0, i2 == null || a2 == null) {
        let r3 = this.raycasters.length - 1, i3 = this.raycasters.reduce((e3, t3, n3) => n3 === r3 ? e3 : e3 + t3.far, 0), a3 = this.raycasters[r3];
        return Zt(e2, a3.ray, (e3, t3) => ({
          line: new S(a3.ray.origin.clone(), e3),
          lineIndex: this.raycasters.length - 1,
          distanceOnLine: t3,
          type: `lines`
        }), t2, n2, i3);
      }
      let o2 = i2.distance;
      for (let e3 = 0; e3 < a2; e3++) o2 += this.raycasters[e3].far;
      i2.object.updateWorldMatrix(true, false);
      let s2 = this.raycasters[a2];
      return Object.assign(i2, {
        details: {
          lineIndex: a2,
          distanceOnLine: i2.distance,
          type: `lines`,
          line: new S(s2.ray.origin.clone(), s2.ray.direction.clone().multiplyScalar(s2.far).add(s2.ray.origin))
        },
        distance: o2,
        pointerPosition: t2,
        pointerQuaternion: n2,
        pointOnFace: i2.point,
        localPoint: i2.point.clone().applyMatrix4(mn.copy(i2.object.matrixWorld).invert())
      });
    }
  }, Sn = new T(), Cn = new A(), wn = new A(0, 0, -1), Tn = new ae(), En = new x(), Dn = class {
    constructor(e2, t2) {
      __publicField(this, "space");
      __publicField(this, "options");
      __publicField(this, "raycaster", new Me());
      __publicField(this, "raycasterQuaternion", new k());
      __publicField(this, "worldScale", 0);
      __publicField(this, "ready");
      __publicField(this, "intersects", []);
      __publicField(this, "pointerEventsOrders", []);
      this.space = e2, this.options = t2;
    }
    isReady() {
      return this.ready ?? this.prepareTransformation();
    }
    prepareTransformation() {
      var _a3;
      let e2 = this.space.current;
      return e2 == null ? this.ready = false : (this.ready = an(e2), this.ready ? (e2.matrixWorld.decompose(this.raycaster.ray.origin, this.raycasterQuaternion, Cn), this.worldScale = Cn.x, this.raycaster.ray.direction.copy(((_a3 = this.options) == null ? void 0 : _a3.direction) ?? wn).applyQuaternion(this.raycasterQuaternion), true) : false);
    }
    intersectPointerCapture({ intersection: e2, object: t2 }) {
      if (e2.details.type != `ray`) throw Error(`unable to process a pointer capture of type "${e2.details.type}" with a ray intersector`);
      if (!this.prepareTransformation()) return e2;
      e2.object.updateWorldMatrix(true, false), Ht(Tn, e2, e2.object.matrixWorld);
      let { ray: n2 } = this.raycaster, r2 = n2.intersectPlane(Tn, new A()) ?? e2.point, i2 = n2.direction.clone().multiplyScalar(e2.pointerPosition.distanceTo(e2.point)).add(n2.origin), a2 = e2.uv;
      return e2.object instanceof E && L(En, i2, e2.object) && (a2 = En.clone()), {
        ...e2,
        uv: a2,
        object: t2,
        pointOnFace: r2,
        point: i2,
        pointerPosition: n2.origin.clone(),
        pointerQuaternion: this.raycasterQuaternion.clone()
      };
    }
    startIntersection() {
      this.prepareTransformation();
    }
    executeIntersection(e2, t2) {
      if (!this.isReady()) return;
      let n2 = this.intersects.length;
      e2.raycast(this.raycaster, this.intersects), Qt(this.pointerEventsOrders, t2, this.intersects.length - n2);
    }
    finalizeIntersection(e2) {
      let t2 = this.raycaster.ray.origin.clone(), n2 = this.raycasterQuaternion.clone(), r2;
      if (this.options.minDistance != null) {
        let e3 = this.options.minDistance / this.worldScale;
        r2 = (t3) => t3.distance >= e3;
      }
      let i2 = Jt(this.intersects, this.pointerEventsOrders, this.options, r2), a2 = i2 == null ? void 0 : this.intersects[i2];
      return this.intersects.length = 0, this.pointerEventsOrders.length = 0, a2 == null ? Zt(e2, this.raycaster.ray, () => ({
        type: `ray`
      }), t2, n2) : (a2.object.updateWorldMatrix(true, false), Object.assign(a2, {
        details: {
          type: `ray`
        },
        pointerPosition: t2,
        pointerQuaternion: n2,
        pointOnFace: a2.point,
        localPoint: a2.point.clone().applyMatrix4(Sn.copy(a2.object.matrixWorld).invert())
      }));
    }
  }, On = new A(), kn = class {
    constructor(e2, t2) {
      __publicField(this, "prepareTransformation");
      __publicField(this, "options");
      __publicField(this, "raycaster", new Me());
      __publicField(this, "cameraQuaternion", new k());
      __publicField(this, "fromPosition", new A());
      __publicField(this, "fromQuaternion", new k());
      __publicField(this, "coords", new x());
      __publicField(this, "viewPlane", new ae());
      __publicField(this, "intersects", []);
      __publicField(this, "pointerEventsOrders", []);
      this.prepareTransformation = e2, this.options = t2;
    }
    isReady() {
      return true;
    }
    intersectPointerCapture({ intersection: e2, object: t2 }, n2) {
      let r2 = e2.details;
      if (r2.type != `screen-ray`) throw Error(`unable to process a pointer capture of type "${e2.details.type}" with a camera ray intersector`);
      if (!this.startIntersection(n2)) return e2;
      this.viewPlane.constant -= r2.distanceViewPlane;
      let i2 = this.raycaster.ray.intersectPlane(this.viewPlane, new A());
      if (i2 == null) return e2;
      e2.object.updateWorldMatrix(true, false), Ht(this.viewPlane, e2, e2.object.matrixWorld);
      let a2 = e2.uv;
      return e2.object instanceof E && L(En, i2, e2.object) && (a2 = En.clone()), {
        ...e2,
        details: {
          ...r2,
          direction: this.raycaster.ray.direction.clone(),
          screenPoint: this.coords.clone()
        },
        uv: a2,
        object: t2,
        point: i2,
        pointOnFace: i2,
        pointerPosition: this.raycaster.ray.origin.clone(),
        pointerQuaternion: this.cameraQuaternion.clone()
      };
    }
    startIntersection(e2) {
      let t2 = this.prepareTransformation(e2, this.coords);
      return t2 != null && (t2.updateWorldMatrix(true, false), t2.matrixWorld.decompose(this.fromPosition, this.fromQuaternion, Cn), this.raycaster.setFromCamera(this.coords, t2), this.viewPlane.setFromNormalAndCoplanarPoint(t2.getWorldDirection(On), this.raycaster.ray.origin), true);
    }
    executeIntersection(e2, t2) {
      let n2 = this.intersects.length;
      e2.raycast(this.raycaster, this.intersects), Qt(this.pointerEventsOrders, t2, this.intersects.length - n2);
    }
    finalizeIntersection(e2) {
      let t2 = this.fromPosition.clone(), n2 = this.cameraQuaternion.clone(), r2 = this.raycaster.ray.direction.clone(), i2 = Jt(this.intersects, this.pointerEventsOrders, this.options), a2 = i2 == null ? void 0 : this.intersects[i2];
      return this.intersects.length = 0, this.pointerEventsOrders.length = 0, a2 == null ? Zt(e2, this.raycaster.ray, (e3, t3) => ({
        type: `screen-ray`,
        distanceViewPlane: t3,
        screenPoint: this.coords.clone(),
        direction: r2
      }), t2, n2) : (a2.object.updateWorldMatrix(true, false), Sn.copy(a2.object.matrixWorld).invert(), Object.assign(a2, {
        details: {
          type: `screen-ray`,
          distanceViewPlane: this.viewPlane.distanceToPoint(a2.point),
          screenPoint: this.coords.clone(),
          direction: r2
        },
        pointOnFace: a2.point,
        pointerPosition: t2,
        pointerQuaternion: n2,
        localPoint: a2.point.clone().applyMatrix4(Sn)
      }));
    }
  }, An = new A(), jn = new x(), Mn = class {
    constructor(e2, t2, n2) {
      __publicField(this, "space");
      __publicField(this, "getSphereRadius");
      __publicField(this, "options");
      __publicField(this, "fromPosition", new A());
      __publicField(this, "fromQuaternion", new k());
      __publicField(this, "collisionSphere", new be());
      __publicField(this, "ready");
      __publicField(this, "intersects", []);
      this.space = e2, this.getSphereRadius = t2, this.options = n2;
    }
    isReady() {
      return this.ready ?? this.prepareTransformation();
    }
    prepareTransformation() {
      let e2 = this.space.current;
      return e2 == null ? this.ready = false : (this.ready = an(e2), this.ready ? (e2.matrixWorld.decompose(this.fromPosition, this.fromQuaternion, An), true) : false);
    }
    intersectPointerCapture({ intersection: e2, object: t2 }) {
      if (e2.details.type != `sphere`) throw Error(`unable to process a pointer capture of type "${e2.details.type}" with a sphere intersector`);
      if (!this.prepareTransformation()) return e2;
      Fn.copy(e2.point).sub(e2.pointerPosition), In.copy(e2.pointerQuaternion).invert().multiply(this.fromQuaternion);
      let n2 = Fn.clone().applyQuaternion(In).add(this.fromPosition);
      e2.object.updateWorldMatrix(true, false), Ht(Ln, e2, e2.object.matrixWorld);
      let r2 = Ln.projectPoint(this.fromPosition, new A()), i2 = e2.uv;
      return e2.object instanceof E && L(jn, n2, e2.object) && (i2 = jn.clone()), {
        details: {
          type: `sphere`
        },
        uv: i2,
        distance: n2.distanceTo(r2),
        pointerPosition: this.fromPosition.clone(),
        pointerQuaternion: this.fromQuaternion.clone(),
        object: t2,
        point: n2,
        pointOnFace: r2,
        face: e2.face,
        localPoint: e2.localPoint
      };
    }
    startIntersection() {
      this.prepareTransformation() && (this.collisionSphere.center.copy(this.fromPosition), this.collisionSphere.radius = this.getSphereRadius());
    }
    executeIntersection(e2) {
      this.isReady() && Pn(this.collisionSphere, e2, this.intersects);
    }
    finalizeIntersection(e2) {
      let t2 = this.fromPosition.clone(), n2 = this.fromQuaternion.clone(), r2 = Jt(this.intersects, void 0, this.options), i2 = r2 == null ? void 0 : this.intersects[r2];
      return this.intersects.length = 0, i2 == null ? {
        details: {
          type: `sphere`
        },
        distance: 0,
        point: t2,
        object: Vt(e2),
        pointerPosition: t2,
        pointerQuaternion: n2,
        pointOnFace: t2,
        localPoint: t2
      } : (i2.object.updateWorldMatrix(true, false), Object.assign(i2, {
        details: {
          type: `sphere`
        },
        pointOnFace: i2.point,
        pointerPosition: this.fromPosition.clone(),
        pointerQuaternion: this.fromQuaternion.clone(),
        localPoint: i2.point.clone().applyMatrix4(Un.copy(i2.object.matrixWorld).invert())
      }));
    }
  }, Nn = new T();
  function Pn(e2, t2, n2) {
    if (t2.updateWorldMatrix(true, false), t2.spherecast != null) {
      t2.spherecast(e2, n2);
      return;
    }
    if (t2 instanceof Ne) {
      t2.geometry.boundingSphere ?? t2.geometry.computeBoundingSphere(), t2.geometry.boundingBox ?? t2.geometry.computeBoundingBox();
      for (let r3 = 0; r3 < t2.count; r3++) {
        if (t2.getMatrixAt(r3, Nn), Nn.premultiply(t2.matrixWorld), !Rn(e2, t2, Nn)) continue;
        let i2 = Wn(e2, t2, Nn, r3);
        i2 != null && n2.push(i2);
      }
    }
    if (!(t2 instanceof E) || !Rn(e2, t2, t2.matrixWorld)) return;
    Un.copy(t2.matrixWorld).invert();
    let r2 = Wn(e2, t2, t2.matrixWorld);
    r2 != null && n2.push(r2);
  }
  var Fn = new A(), In = new k(), Ln = new ae(), R = new be();
  function Rn(e2, { geometry: t2 }, n2) {
    return t2.boundingSphere ?? t2.computeBoundingSphere(), R.copy(t2.boundingSphere).applyMatrix4(n2), R.center.distanceToSquared(e2.center) < (e2.radius + R.radius) ** 2;
  }
  var zn = new A(), Bn = new A(), Vn = new A(), Hn = new A(1e-4, 1e-4, 1e-4), Un = new T();
  function Wn(e2, t2, n2, r2) {
    Un.copy(n2).invert(), R.copy(e2).applyMatrix4(Un);
    let { geometry: i2 } = t2;
    i2.boundingBox ?? i2.computeBoundingBox(), i2.boundingBox.getSize(Bn), i2.boundingBox.getCenter(Vn), i2.boundingBox.clampPoint(R.center, zn), zn.applyMatrix4(n2);
    let a2 = zn.distanceToSquared(e2.center);
    if (a2 > e2.radius * e2.radius) return;
    Bn.max(Hn);
    let o2 = R.center.clone().sub(Vn);
    o2.divide(Bn), Gn(o2);
    let s2 = zn.clone(), c2;
    return L(jn, s2, t2) && (c2 = jn.clone()), {
      distance: Math.sqrt(a2),
      face: {
        a: 0,
        b: 0,
        c: 0,
        materialIndex: 0,
        normal: o2
      },
      uv: c2,
      normal: o2,
      point: s2,
      instanceId: r2,
      object: t2
    };
  }
  function Gn(e2) {
    let t2 = Math.abs(e2.x), n2 = Math.abs(e2.y), r2 = Math.abs(e2.z);
    t2 >= n2 && t2 >= r2 ? e2.set(e2.x < 0 ? -1 : 1, 0, 0) : n2 >= t2 && n2 >= r2 ? e2.set(0, e2.y < 0 ? -1 : 1, 0) : e2.set(0, 0, e2.z < 0 ? -1 : 1);
  }
  function Kn(e2, t2, n2, r2 = {}, i2 = `grab`) {
    return new F($n(), i2, n2, new Mn(t2, () => r2.radius ?? 0.07, r2), e2, void 0, void 0, void 0, r2);
  }
  function qn(e2, t2, n2, r2 = {}, i2 = `ray`) {
    return new F($n(), i2, n2, new Dn(t2, r2), e2, void 0, void 0, void 0, r2);
  }
  function Jn(e2, t2, n2, r2 = {}, i2 = `lines`) {
    return new F($n(), i2, n2, new xn(t2, r2), e2, void 0, void 0, void 0, r2);
  }
  function Yn(e2, t2, n2, r2 = {}, i2 = `touch`) {
    return new F($n(), i2, n2, new Mn(t2, () => r2.hoverRadius ?? 0.1, r2), e2, Xn(r2), void 0, void 0, r2);
  }
  function Xn(e2) {
    let t2 = false;
    return (n2) => {
      if (!n2.getEnabled()) return;
      let r2 = Zn(n2.getIntersection(), e2.downRadius ?? 0.03);
      if (r2 === t2) return;
      let i2 = {
        timeStamp: performance.now(),
        button: e2.button ?? 0
      };
      r2 ? n2.down(i2) : n2.up(i2), t2 = r2;
    };
  }
  function Zn(e2, t2) {
    return e2 != null && e2.distance <= t2;
  }
  var Qn = 23412;
  function $n() {
    return Qn++;
  }
  function er(e2, t2) {
    return !(e2 instanceof N) || e2.uv == null ? t2.set(0, 0) : t2.copy(e2.uv).multiplyScalar(2).addScalar(-1);
  }
  function tr(e2, t2, n2, r2) {
    return nr(e2, t2, n2, er, e2.setPointerCapture.bind(e2), e2.releasePointerCapture.bind(e2), r2);
  }
  function nr(e2, t2, n2, r2, i2, a2, o2 = {}) {
    let s2 = (o2 == null ? void 0 : o2.forwardPointerCapture) ?? true, c2 = /* @__PURE__ */ new Map(), l2 = o2.pointerTypePrefix ?? `forward-`, u2 = (e3, u3) => {
      let d3 = c2.get(e3.pointerId);
      return d3 ?? (d3 = new F($n(), `${l2}${e3.pointerType}`, e3.pointerState, new kn((e4, n3) => (r2(e4, n3), t2()), o2), t2, void 0, s2 ? i2.bind(null, e3.pointerId) : void 0, s2 ? a2.bind(null, e3.pointerId) : void 0, o2), u3 != `move` && u3 != `wheel` && (d3.setIntersection(d3.computeIntersection(`pointer`, n2, e3)), d3.commit(e3, false)), c2.set(e3.pointerId, d3)), d3;
    }, d2 = /* @__PURE__ */ new Map(), f2 = /* @__PURE__ */ new Map(), p2 = [], m2 = [], h2 = (e3, t3, r3) => {
      switch (e3) {
        case `move`:
          r3.move(n2, t3);
          return;
        case `over`:
          r3.move(n2, t3);
          return;
        case `wheel`:
          r3.wheel(n2, t3);
          return;
        case `cancel`:
          r3.cancel(t3);
          return;
        case `down`:
          if (!rr(t3)) return;
          r3.down(t3);
          return;
        case `up`:
          if (!rr(t3)) return;
          r3.up(t3);
          return;
        case `exit`:
          f2.delete(r3), d2.delete(r3), r3.exit(t3);
          return;
      }
    }, g2 = (e3, t3) => {
      let n3 = u2(t3, e3);
      e3 === `move` && f2.set(n3, t3), e3 === `wheel` && d2.set(n3, t3), o2.batchEvents ?? true ? m2.push({
        type: e3,
        event: t3
      }) : h2(e3, t3, n3);
    }, _2 = g2.bind(null, `move`), v2 = g2.bind(null, `over`), y2 = g2.bind(null, `cancel`), b2 = g2.bind(null, `down`), x2 = g2.bind(null, `up`), S2 = g2.bind(null, `wheel`), C2 = g2.bind(null, `exit`);
    return e2.addEventListener(`pointermove`, _2), e2.addEventListener(`pointerover`, v2), e2.addEventListener(`pointercancel`, y2), e2.addEventListener(`pointerdown`, b2), e2.addEventListener(`pointerup`, x2), e2.addEventListener(`wheel`, S2), e2.addEventListener(`pointerleave`, C2), {
      destroy() {
        e2.removeEventListener(`pointermove`, _2), e2.removeEventListener(`pointerover`, v2), e2.removeEventListener(`pointercancel`, y2), e2.removeEventListener(`pointerdown`, b2), e2.removeEventListener(`pointerup`, x2), e2.removeEventListener(`wheel`, S2), e2.removeEventListener(`pointerleave`, C2), f2.clear(), d2.clear();
      },
      update() {
        let e3 = m2.length;
        for (let t3 = 0; t3 < e3; t3++) {
          let { type: e4, event: n3 } = m2[t3], r3 = u2(n3, e4);
          e4 === `move` && (p2.push(r3), f2.get(r3) != n3) ? r3.emitMove(n3) : e4 === `wheel` && d2.get(r3) != n3 ? r3.emitWheel(n3) : h2(e4, n3, r3);
        }
        if (m2.length = 0, o2.intersectEveryFrame ?? false) for (let [e4, t3] of f2.entries()) p2.includes(e4) || e4.move(n2, t3);
        p2.length = 0;
      }
    };
  }
  function rr(e2) {
    return e2.button != null;
  }
  var ir = class e2 {
    constructor(e3) {
      __publicField(this, "enableMultiplePointers");
      __publicField(this, "pointers", []);
      __publicField(this, "isDefaults", []);
      __publicField(this, "enabled", true);
      __publicField(this, "activePointer");
      __publicField(this, "nonCapturedPointers", []);
      this.enableMultiplePointers = e3;
    }
    register(e3, t2 = false) {
      return this.pointers.push(e3), this.isDefaults.push(t2), this.unregister.bind(this, e3);
    }
    unregister(e3) {
      let t2 = this.pointers.indexOf(e3);
      t2 !== -1 && (this.isDefaults.splice(t2, 1), this.pointers.splice(t2, 1));
    }
    startIntersection(t2, n2) {
      let r2 = this.pointers.length, i2 = false;
      for (let a2 = 0; a2 < r2; a2++) {
        let r3 = this.pointers[a2];
        if (r3 instanceof e2) {
          r3.startIntersection(t2, n2);
          continue;
        }
        let o2 = r3.getPointerCapture();
        o2 == null ? (t2.push(r3), r3.intersector.startIntersection(n2)) : (i2 = true, r3.setIntersection(r3.intersector.intersectPointerCapture(o2, n2)));
      }
      return i2;
    }
    getIntersection() {
      var _a3;
      return (_a3 = this.activePointer) == null ? void 0 : _a3.getIntersection();
    }
    getPointerCapture() {
      var _a3;
      return (_a3 = this.activePointer) == null ? void 0 : _a3.getPointerCapture();
    }
    computeActivePointer() {
      let t2;
      this.activePointer = void 0;
      let n2 = this.pointers.length;
      for (let r2 = 0; r2 < n2; r2++) {
        let n3 = this.pointers[r2];
        n3 instanceof e2 && n3.computeActivePointer();
        let i2 = n3.getIntersection(), a2 = n3.getPointerCapture() == null ? (i2 == null ? void 0 : i2.object.isVoidObject) ? 1 / 0 : (i2 == null ? void 0 : i2.distance) ?? 1 / 0 : -1 / 0, o2 = this.isDefaults[r2];
        (t2 == null || o2 && a2 === t2 || a2 < t2) && (this.activePointer = n3, t2 = a2);
      }
    }
    commit(e3, t2, n2 = true) {
      if (this.enableMultiplePointers) {
        let n3 = this.pointers.length;
        for (let r3 = 0; r3 < n3; r3++) this.pointers[r3].commit(e3, t2);
        return;
      }
      n2 && this.computeActivePointer();
      let r2 = this.pointers.length;
      for (let n3 = 0; n3 < r2; n3++) {
        let r3 = this.pointers[n3];
        r3.setEnabled(r3 === this.activePointer, e3, false), r3.commit(e3, t2, false);
      }
    }
    move(e3, t2) {
      if (this.enabled) {
        if (this.nonCapturedPointers.length = 0, !this.startIntersection(this.nonCapturedPointers, t2) || this.enableMultiplePointers) {
          Gt(`pointer`, e3, this.nonCapturedPointers);
          let t3 = this.nonCapturedPointers.length;
          for (let n2 = 0; n2 < t3; n2++) {
            let t4 = this.nonCapturedPointers[n2];
            t4.setIntersection(t4.intersector.finalizeIntersection(e3));
          }
        }
        this.commit(t2, true);
      }
    }
    setEnabled(e3, t2) {
      this.enabled = e3;
      let n2 = this.pointers.length;
      for (let r2 = 0; r2 < n2; r2++) {
        let n3 = this.pointers[r2];
        n3.setEnabled(e3 && (this.enableMultiplePointers || n3 == this.activePointer), t2);
      }
    }
  }, ar = (e2) => {
    let t2, n2 = /* @__PURE__ */ new Set(), r2 = (e3, r3) => {
      let i3 = typeof e3 == `function` ? e3(t2) : e3;
      if (!Object.is(i3, t2)) {
        let e4 = t2;
        t2 = r3 ?? (typeof i3 != `object` || !i3) ? i3 : Object.assign({}, t2, i3), n2.forEach((n3) => n3(t2, e4));
      }
    }, i2 = () => t2, a2 = {
      setState: r2,
      getState: i2,
      getInitialState: () => o2,
      subscribe: (e3) => (n2.add(e3), () => n2.delete(e3)),
      destroy: () => {
        n2.clear();
      }
    }, o2 = t2 = e2(r2, i2, a2);
    return a2;
  }, or = (e2) => e2 ? ar(e2) : ar;
  new A(), new A(), new A(), new k();
  function sr() {
    return navigator.userAgent.includes(`Macintosh`) && navigator.xr != null;
  }
  function cr(e2, t2, { anchors: n2 = true, handTracking: r2 = !sr(), layers: i2 = true, meshDetection: a2 = true, planeDetection: o2 = true, customSessionInit: s2, depthSensing: c2 = false, hitTest: l2 = true, domOverlay: u2 = true, bodyTracking: d2 = false, bounded: f2 } = {}) {
    if (s2 != null) return s2;
    let p2 = f2 == null ? [
      `local-floor`
    ] : f2 ? [
      `bounded-floor`
    ] : [
      `unbounded`,
      `local-floor`
    ], m2 = [];
    u2 instanceof Element && (u2 = true), z(n2, `anchors`, p2, m2), z(r2, `hand-tracking`, p2, m2), z(i2, `layers`, p2, m2), z(a2, `mesh-detection`, p2, m2), z(o2, `plane-detection`, p2, m2), z(c2, `depth-sensing`, p2, m2), z(u2, `dom-overlay`, p2, m2), z(l2, `hit-test`, p2, m2), z(d2, `body-tracking`, p2, m2);
    let h2 = {
      requiredFeatures: p2,
      optionalFeatures: m2
    };
    return t2 != null && (h2.domOverlay = {
      root: t2
    }), c2 && Object.assign(h2, {
      depthSensing: {
        usagePreference: [
          `gpu-optimized`
        ],
        dataFormatPreference: []
      }
    }), h2;
  }
  function z(e2, t2, n2, r2) {
    e2 !== false && (e2 === true ? r2.push(t2) : n2.push(t2));
  }
  function B(e2, t2, n2) {
    return typeof e2 == `function` ? e2 : (typeof e2 == `object` && (t2 != null && lr(e2, t2) ? e2 = e2[t2] : `default` in e2 && (e2 = e2.default)), e2 === false ? false : e2 === true ? n2 : e2 ?? n2);
  }
  function lr(e2, t2) {
    return t2 in e2;
  }
  var ur = {
    session: void 0,
    mediaBinding: void 0,
    originReferenceSpace: void 0,
    visibilityState: void 0,
    mode: null,
    frameRate: void 0,
    inputSourceStates: [],
    detectedMeshes: [],
    detectedPlanes: [],
    layerEntries: []
  };
  async function dr(e2, t2, n2) {
    var _a3, _b;
    if (typeof navigator > `u`) return false;
    let [r2, i2] = await Promise.all([
      (_a3 = navigator.xr) == null ? void 0 : _a3.isSessionSupported(`immersive-vr`).catch((e3) => (console.error(e3), false)),
      (_b = navigator.xr) == null ? void 0 : _b.isSessionSupported(`immersive-ar`).catch((e3) => (console.error(e3), false))
    ]);
    if (i2 || r2) return false;
    let { emulate: a2 } = await g(async () => {
      let { emulate: e3 } = await import("./emulate-DxFOYMNx.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      });
      return {
        emulate: e3
      };
    }, __vite__mapDeps([0,1,2,3,4,5]));
    return n2 && window.alert(`emulator started`), e2.setState({
      emulator: a2(t2 === true ? `metaQuest3` : t2)
    }), true;
  }
  var fr = new A(), pr = new A();
  function mr(e2) {
    let t2 = typeof HTMLElement > `u` ? void 0 : (e2 == null ? void 0 : e2.domOverlay) instanceof HTMLElement ? e2.domOverlay : document.createElement(`div`), n2 = or(() => ({
      ...ur,
      controller: e2 == null ? void 0 : e2.controller,
      hand: e2 == null ? void 0 : e2.hand,
      gaze: e2 == null ? void 0 : e2.gaze,
      screenInput: e2 == null ? void 0 : e2.screenInput,
      transientPointer: e2 == null ? void 0 : e2.transientPointer,
      domOverlayRoot: t2
    })), r2 = n2.subscribe(({ session: n3 }, { session: r3 }) => {
      r3 != null && n3 == null && u2 != null && hr(u2, e2, t2).catch(console.error);
    }), i2 = (e2 == null ? void 0 : e2.emulate) ?? `metaQuest3`, a2;
    if (typeof window < `u` && i2 != 0) {
      let r3 = (typeof i2 == `object` ? i2.inject : void 0) ?? {
        hostname: `localhost`
      };
      (r3 === true || typeof r3 != `boolean` && window.location.hostname === r3.hostname) && dr(n2, i2, false).then((n3) => {
        n3 && u2 != null && hr(u2, e2, t2);
      });
      let o3 = (r4) => {
        r4.altKey && r4.metaKey && r4.code === `KeyE` && dr(n2, i2, true).then((n3) => {
          n3 && u2 != null && hr(u2, e2, t2);
        });
      };
      window.addEventListener(`keydown`, o3), a2 = () => window.removeEventListener(`keydown`, o3);
    }
    let o2;
    if (t2 != null) {
      if (t2.parentNode == null) {
        let e3 = (e4) => {
          t2.style.display = e4.session == null ? `none` : `block`;
        }, r3 = n2.subscribe(e3);
        e3(n2.getState()), document.body.appendChild(t2), o2 = () => {
          t2.remove(), r3();
        };
      }
      document.body.append(t2);
    }
    let s2 = Sr(n2, pt((e3) => n2.setState({
      inputSourceStates: [
        ...n2.getState().inputSourceStates,
        e3
      ]
    }), e2), (e2 == null ? void 0 : e2.secondaryInputSources) ?? false), c2 = xr(e2 == null ? void 0 : e2.enterGrantedSession, (n3) => _r(t2, n3, e2, u2)), l2 = [], u2, d2 = () => {
      n2.setState(s2(u2.getSession()));
    };
    return Object.assign(n2, {
      addLayerEntry(e3) {
        n2.getState().session != null && n2.setState({
          layerEntries: [
            ...n2.getState().layerEntries,
            e3
          ]
        });
      },
      removeLayerEntry(e3) {
        n2.getState().session != null && n2.setState({
          layerEntries: n2.getState().layerEntries.filter((t3) => t3 != e3)
        });
      },
      requestFrame() {
        return new Promise((e3) => l2.push(e3));
      },
      setWebXRManager(n3) {
        if (u2 === n3) return;
        u2 == null ? void 0 : u2.removeEventListener(`sessionstart`, d2), u2 = n3, u2.addEventListener(`sessionstart`, d2);
        let { foveation: r3, bounded: i3 } = e2 ?? {};
        u2.setReferenceSpaceType(i3 ? `bounded-floor` : `local-floor`), r3 != null && u2.setFoveation(r3), hr(u2, e2, t2).catch(console.error);
      },
      setFrameRate(e3) {
        let { session: t3 } = n2.getState();
        t3 != null && gr(t3, e3);
      },
      setHand(e3, t3) {
        if (t3 == null) {
          n2.setState({
            hand: e3
          });
          return;
        }
        let r3 = n2.getState().hand, i3 = {};
        typeof r3 == `object` && Object.assign(i3, r3), Object.assign(i3, {
          default: B(r3, void 0, {}),
          [t3]: e3
        }), n2.setState({
          hand: i3
        });
      },
      setController(e3, t3) {
        if (t3 == null) {
          n2.setState({
            controller: e3
          });
          return;
        }
        let r3 = n2.getState().controller, i3 = {};
        typeof r3 == `object` && Object.assign(i3, r3), Object.assign(i3, {
          default: B(r3, void 0, {}),
          [t3]: e3
        }), n2.setState({
          controller: i3
        });
      },
      setTransientPointer(e3, t3) {
        if (t3 == null) {
          n2.setState({
            transientPointer: e3
          });
          return;
        }
        let r3 = n2.getState().transientPointer, i3 = {};
        typeof r3 == `object` && Object.assign(i3, r3), Object.assign(i3, {
          default: B(r3, void 0, {}),
          [t3]: e3
        }), n2.setState({
          transientPointer: i3
        });
      },
      setGaze(e3) {
        n2.setState({
          gaze: e3
        });
      },
      setScreenInput(e3) {
        n2.setState({
          screenInput: e3
        });
      },
      destroy() {
        u2 == null ? void 0 : u2.removeEventListener(`sessionstart`, d2), a2 == null ? void 0 : a2(), o2 == null ? void 0 : o2(), c2 == null ? void 0 : c2(), r2(), s2(void 0);
      },
      enterXR: (n3) => _r(t2, n3, e2, u2),
      enterAR: () => _r(t2, `immersive-ar`, e2, u2),
      enterVR: () => _r(t2, `immersive-vr`, e2, u2),
      onSessionEnd(e3) {
        return n2.subscribe((t3, n3) => {
          n3.session != null && t3.session == null && e3();
        });
      },
      onBeforeFrame(e3, t3, r3) {
        let i3, a3 = (u2 == null ? void 0 : u2.isPresenting) ? u2.getReferenceSpace() ?? void 0 : void 0, o3 = n2.getState(), s3 = t3.parent ?? e3;
        if (o3.origin != s3 && (i3 ?? (i3 = {}), i3.origin = s3), a3 != o3.originReferenceSpace && (i3 ?? (i3 = {}), i3.originReferenceSpace = a3), s3.xrSpace = a3, o3.origin != s3 && o3.origin != null && (o3.origin.xrSpace = void 0), r3 != null && (u2 != null && Cr(n2, r3, u2), o3.body != r3.body && (i3 ?? (i3 = {}), i3.body = r3.body)), i3 != null && n2.setState(i3), r3 != null) {
          let e4 = l2.length;
          for (let t4 = 0; t4 < e4; t4++) l2[t4](r3);
          l2.length = 0;
        }
      },
      onBeforeRender() {
        let { session: e3, layerEntries: t3 } = n2.getState();
        if (e3 == null || u2 == null) return;
        let r3 = u2.getCamera();
        r3.aspect = r3.projectionMatrix.elements[5] / r3.projectionMatrix.elements[0];
        let i3 = e3 == null ? void 0 : e3.renderState.layers;
        if (i3 == null) return;
        r3.getWorldPosition(fr), t3.sort((e4, t4) => {
          let n3 = e4.renderOrder - t4.renderOrder;
          if (n3 !== 0) return n3;
          e4.object3D.getWorldPosition(pr);
          let r4 = pr.distanceToSquared(fr);
          return t4.object3D.getWorldPosition(pr), pr.distanceToSquared(fr) - r4;
        });
        let a3 = false, o3 = t3.map(({ layer: e4 }, t4) => (e4 != i3[t4] && (a3 = true), e4));
        a3 && (o3.push(u2.getBaseLayer()), e3.updateRenderState({
          layers: o3
        }));
      }
    });
  }
  async function hr(e2, t2, n2) {
    var _a3;
    let r2 = (t2 == null ? void 0 : t2.offerSession) ?? true;
    if (((_a3 = navigator.xr) == null ? void 0 : _a3.offerSession) == null || r2 === false) return;
    let i2;
    i2 = r2 === true ? await navigator.xr.isSessionSupported(`immersive-ar`) ?? false ? `immersive-ar` : `immersive-vr` : r2, vr(await navigator.xr.offerSession(i2, cr(i2, n2, t2)), e2, t2);
  }
  async function gr(e2, t2) {
    if (t2 === false) return;
    let { supportedFrameRates: n2 } = e2;
    if (n2 == null || n2.length === 0) return;
    if (typeof t2 == `function`) {
      let r3 = t2(n2);
      if (r3 === false) return;
      await e2.updateTargetFrameRate(r3);
      return;
    }
    let r2 = t2 === `high` ? 1 : t2 === `mid` ? 0.5 : 0;
    await e2.updateTargetFrameRate(n2[Math.ceil((n2.length - 1) * r2)]);
  }
  async function _r(e2, t2, n2, r2) {
    if (typeof navigator > `u` || navigator.xr == null) return Promise.reject(Error(`WebXR not supported`));
    if (r2 == null) return Promise.reject(Error(`not connected to three.js. You either might be missing the <XR> component or the canvas is not yet loaded?`));
    let i2 = await navigator.xr.requestSession(t2, cr(t2, e2, n2));
    return await vr(i2, r2, n2), i2;
  }
  async function vr(e2, t2, n2) {
    await Promise.all([
      gr(e2, (n2 == null ? void 0 : n2.frameRate) ?? `high`),
      yr(t2, e2, n2)
    ]);
  }
  async function yr(e2, t2, n2) {
    if (e2 == null) return;
    let r2 = XRWebGLLayer.getNativeFramebufferScaleFactor(t2), i2 = n2 == null ? void 0 : n2.frameBufferScaling;
    typeof i2 == `function` && (i2 = i2(r2)), typeof i2 == `string` && (i2 = i2 === `high` ? r2 : i2 === `mid` ? 1 : 0.5), i2 != null && (e2 == null ? void 0 : e2.setFramebufferScaleFactor(i2)), await (e2 == null ? void 0 : e2.setSession(t2));
  }
  var br = [
    `immersive-ar`,
    `immersive-vr`,
    `inline`
  ];
  function xr(e2 = br, t2) {
    var _a3;
    if (typeof navigator > `u` || e2 === false) return;
    e2 === true && (e2 = br);
    let n2 = async () => {
      var _a4;
      for (let n3 of e2) await ((_a4 = navigator.xr) == null ? void 0 : _a4.isSessionSupported(n3)) && t2(n3);
    };
    return (_a3 = navigator.xr) == null ? void 0 : _a3.addEventListener(`sessiongranted`, n2), () => {
      var _a4;
      return (_a4 = navigator.xr) == null ? void 0 : _a4.removeEventListener(`sessiongranted`, n2);
    };
  }
  function Sr(e2, t2, n2) {
    let r2;
    return (i2) => {
      if (r2 == null ? void 0 : r2(), i2 == null) return {};
      let a2 = [], o2, s2 = () => {
        o2 = void 0, e2.setState({
          inputSourceStates: t2(i2, e2.getState().inputSourceStates, a2)
        }), a2.length = 0;
      }, c2 = (e3, t3) => {
        a2.push({
          isPrimary: e3,
          added: t3.added,
          removed: t3.removed
        }), o2 ?? (n2 ? o2 = setTimeout(s2, 100) : s2());
      }, l2 = c2.bind(null, true);
      i2.addEventListener(`inputsourceschange`, l2);
      let u2;
      if (n2) {
        let e3 = c2.bind(null, false);
        i2.addEventListener(`trackedsourceschange`, e3), u2 = () => i2.removeEventListener(`trackedsourceschange`, e3);
      }
      let d2 = () => e2.setState({
        frameRate: i2.frameRate,
        visibilityState: i2.visibilityState
      });
      i2.addEventListener(`frameratechange`, d2), i2.addEventListener(`visibilitychange`, d2);
      let f2 = () => {
        r2 == null ? void 0 : r2(), r2 = void 0, e2.setState({
          emulator: e2.getState().emulator,
          ...ur
        });
      };
      i2.addEventListener(`end`, f2);
      let p2 = [
        {
          isPrimary: true,
          added: i2.inputSources
        }
      ];
      n2 && p2.push({
        isPrimary: false,
        added: i2.trackedSources
      });
      let m2 = t2(i2, [], p2);
      return r2 = () => {
        u2 == null ? void 0 : u2(), clearTimeout(o2), t2(i2, e2.getState().inputSourceStates, `remove-all`), i2.removeEventListener(`end`, f2), i2.removeEventListener(`frameratechange`, d2), i2.removeEventListener(`visibilitychange`, d2), i2.removeEventListener(`inputsourceschange`, l2);
      }, {
        inputSourceStates: m2,
        frameRate: i2.frameRate,
        visibilityState: i2.visibilityState,
        detectedMeshes: [],
        detectedPlanes: [],
        mode: i2.environmentBlendMode === `opaque` ? `immersive-vr` : `immersive-ar`,
        session: i2,
        mediaBinding: typeof XRMediaBinding > `u` ? void 0 : new XRMediaBinding(i2)
      };
    };
  }
  function Cr(e2, t2, n2) {
    let r2 = n2.getReferenceSpace(), { detectedMeshes: i2, detectedPlanes: a2, session: o2, inputSourceStates: s2 } = e2.getState();
    if (r2 == null || o2 == null) return;
    let c2 = Tr(a2, t2.detectedPlanes), l2 = Tr(i2, t2.detectedMeshes);
    (a2 != c2 || i2 != l2) && e2.setState({
      detectedPlanes: c2,
      detectedMeshes: l2
    });
    let u2 = s2.length;
    for (let e3 = 0; e3 < u2; e3++) {
      let r3 = s2[e3];
      switch (r3.type) {
        case `controller`:
          Li(r3);
          break;
        case `hand`:
          st(r3, t2, n2);
      }
    }
  }
  var wr = [];
  function Tr(e2, t2) {
    return t2 == null ? wr : e2 != null && Er(t2, e2) ? e2 : Array.from(t2);
  }
  function Er(e2, t2) {
    if (e2.size != t2.length) return false;
    for (let n2 of t2) if (!e2.has(n2)) return false;
    return true;
  }
  new re(), new he();
  async function Dr(e2, t2 = ji) {
    let { scene: n2 } = await t2.loadAsync(e2.assetPath);
    return n2.clone(true);
  }
  function Or(e2, t2) {
    e2.renderOrder = (t2 == null ? void 0 : t2.renderOrder) ?? 0, e2.traverse((e3) => {
      e3 instanceof E && e3.material instanceof ce && (e3.material.colorWrite = (t2 == null ? void 0 : t2.colorWrite) ?? true);
    });
  }
  function kr(e2, t2, n2) {
    let r2 = [];
    for (let i2 in t2.components) {
      let a2 = t2.components[i2], o2 = n2[i2];
      o2 ?? (n2[i2] = o2 = {
        state: `default`
      }), r2.push(...Object.values(a2.visualResponses).map((t3) => Ar(e2, o2, t3)));
    }
    return () => {
      let e3 = r2.length;
      for (let t3 = 0; t3 < e3; t3++) r2[t3]();
    };
  }
  function Ar(e2, t2, n2) {
    let r2 = e2.getObjectByName(n2.valueNodeName);
    if (t2.object = r2, r2 == null) return () => {
    };
    if (n2.valueNodeProperty === `visibility`) return () => r2.visible = n2.states.includes(t2.state);
    let i2 = e2.getObjectByName(n2.minNodeName), a2 = e2.getObjectByName(n2.maxNodeName);
    return i2 == null || a2 == null ? () => {
    } : () => {
      let e3 = jr(t2, n2);
      r2.quaternion.slerpQuaternions(i2.quaternion, a2.quaternion, e3), r2.position.lerpVectors(i2.position, a2.position, e3), r2.updateMatrix();
    };
  }
  function jr(e2, { componentProperty: t2, states: n2 }) {
    let r2 = n2.includes(e2.state);
    switch (t2) {
      case `xAxis`:
        return r2 ? Nr(e2).x : 0.5;
      case `yAxis`:
        return r2 ? Nr(e2).y : 0.5;
      case `button`:
        return r2 ? e2.button ?? 0 : 0;
      case `state`:
        return +!!r2;
    }
  }
  var Mr = new x();
  function Nr({ xAxis: e2 = 0, yAxis: t2 = 0 }) {
    if (Mr.lengthSq() > 1) {
      let n2 = Math.atan2(t2, e2);
      Mr.set(Math.cos(n2), Math.sin(n2));
    } else Mr.set(e2, t2);
    return Mr.multiplyScalar(0.5).addScalar(0.5), Mr;
  }
  function Pr(e2, t2) {
    if (t2 != null && t2.createdAt != null && t2.createdAt >= e2.lastChangedTime) return t2;
    let n2 = new O();
    return n2.setIndex(new D(e2.indices, 1)), n2.setAttribute(`position`, new D(e2.vertices, 3)), Object.assign(n2, {
      creationTime: e2.lastChangedTime
    });
  }
  function Fr(e2, t2) {
    return t2 != null && t2.createdAt != null && t2.createdAt >= e2.lastChangedTime ? t2 : Object.assign(Rr(e2.polygon), {
      createdAt: e2.lastChangedTime
    });
  }
  var Ir = new b(), Lr = new x();
  function Rr(e2) {
    if (e2.length === 0) return new O();
    let t2 = new je(), n2 = e2.map(({ x: e3, z: t3 }) => new x(e3, t3));
    Ir.setFromPoints(n2), Ir.getSize(Lr);
    for (let e3 of n2) e3.sub(Ir.min), e3.divide(Lr);
    t2.setFromPoints(n2);
    let r2 = new ye(t2);
    return r2.scale(Lr.x, Lr.y, 1), r2.translate(Ir.min.x, Ir.min.y, 0), r2.rotateX(Math.PI / 2), r2;
  }
  function zr(e2, t2 = 1) {
    if (e2 != null) return {
      x: V(e2.x),
      y: V(e2.y),
      z: V(e2.z),
      w: `w` in e2 ? V(e2.w, t2) : t2
    };
  }
  function V(e2, t2 = 0) {
    return isNaN(e2) ? t2 : e2;
  }
  var Br = 60 / 180 * Math.PI, Vr = 60 / 180 * Math.PI, Hr = -30 / 180 * Math.PI, Ur = 30 / 180 * Math.PI;
  function Wr(e2, t2, n2, r2, i2, a2, o2) {
    return e2 instanceof HTMLVideoElement ? Gr(e2, t2, n2, i2, a2, o2) : Kr(e2, t2.origin, n2, r2, i2, a2, o2);
  }
  function Gr(e2, t2, n2, r2, { invertStereo: i2, layout: a2, shape: o2 = `quad` }, s2 = {}) {
    var _a3;
    let c2 = {
      invertStereo: i2,
      layout: a2,
      space: kt(r2, t2.origin, n2, H),
      transform: Yr(H, U)
    };
    si(o2, c2, s2.centralAngle, U);
    let l2 = `create${ei(o2)}Layer`, u2 = (_a3 = t2.mediaBinding) == null ? void 0 : _a3[l2](e2, c2);
    if (u2 != null) return ti(u2, s2), u2;
  }
  function Kr(e2, t2, n2, r2, i2, { shape: a2 = `quad`, ...o2 }, s2 = {}) {
    var _a3;
    let c2 = kt(i2, t2, n2, H), l2 = Yr(H, U), u2 = {
      ...o2,
      isStatic: !(e2 instanceof C),
      textureType: `texture`,
      viewPixelWidth: o2.layout === `stereo-left-right` ? e2.width / 2 : e2.width,
      viewPixelHeight: o2.layout === `stereo-top-bottom` ? e2.height / 2 : e2.height,
      space: c2,
      transform: l2
    };
    si(a2, u2, s2.centralAngle, U);
    let d2 = `create${ei(a2)}Layer`, f2 = (_a3 = r2.getBinding()) == null ? void 0 : _a3[d2](u2);
    if (f2 != null) return ti(f2, s2), f2;
  }
  var H = new T(), qr = new A(), Jr = new k(), U = new A();
  function Yr(e2, t2 = U) {
    return e2.decompose(qr, Jr, t2), t2.x = V(t2.x), t2.y = V(t2.y), t2.z = V(t2.z), new XRRigidTransform(zr(qr), zr(Jr));
  }
  var Xr = 64 / Math.PI;
  function Zr(e2) {
    return Math.ceil(e2 * Xr);
  }
  function Qr(e2, t2, n2, r2) {
    if (n2 != null && r2 != null) {
      let i2 = e2.xr.getBinding().getSubImage(n2.layer, r2);
      e2.setRenderTargetTextures(t2, i2.colorTexture);
    }
    e2.setRenderTarget(t2);
  }
  function $r(e2, t2) {
    switch (e2) {
      case `cylinder`:
        let e3 = t2.centralAngle ?? Br;
        return new ue(1, 1, 1, Zr(e3), 1, true, Math.PI - e3 / 2, e3).scale(-1, 1, 1);
      case `equirect`: {
        let e4 = t2.centralHorizontalAngle ?? Vr, n2 = t2.upperVerticalAngle ?? Ur, r2 = n2 - (t2.lowerVerticalAngle ?? Hr);
        return new Se(1, Zr(e4), Zr(r2), -Math.PI / 2 - e4 / 2, e4, Math.PI / 2 - n2, r2).scale(-1, 1, 1);
      }
      case `quad`:
        return new he();
    }
  }
  function ei(e2) {
    return `${e2[0].toUpperCase()}${e2.slice(1)}`;
  }
  function ti(e2, t2 = {}) {
    e2.chromaticAberrationCorrection = t2.chromaticAberrationCorrection, e2.quality = t2.quality ?? `default`, e2.blendTextureSourceAlpha = t2.blendTextureSourceAlpha ?? false, e2 instanceof XRCylinderLayer ? e2.centralAngle = (t2 == null ? void 0 : t2.centralAngle) ?? Br : e2 instanceof XREquirectLayer && (e2.centralHorizontalAngle = (t2 == null ? void 0 : t2.centralHorizontalAngle) ?? Vr, e2.lowerVerticalAngle = (t2 == null ? void 0 : t2.lowerVerticalAngle) ?? Hr, e2.upperVerticalAngle = (t2 == null ? void 0 : t2.upperVerticalAngle) ?? Ur);
  }
  function ni(e2, t2, n2, r2) {
    let i2 = false, a2 = async () => {
      let a3 = await t2.requestFrame();
      i2 || ai(e2, n2, a3, r2);
    };
    return n2.addEventListener(`redraw`, a2), a2(), () => {
      i2 = true, n2.removeEventListener(`redraw`, a2);
    };
  }
  async function ri(e2) {
    if (e2 instanceof HTMLImageElement && !e2.complete && await new Promise((t2) => {
      let n2 = () => {
        t2(), e2.removeEventListener(`load`, n2);
      };
      e2.addEventListener(`load`, n2);
    }), e2 instanceof HTMLVideoElement && e2.readyState < 1) return new Promise((t2) => {
      let n2 = () => {
        t2(), e2.removeEventListener(`loadedmetadata`, n2);
      };
      e2.addEventListener(`loadedmetadata`, n2);
    });
  }
  function ii(e2) {
    if (e2 instanceof C) return e2.texture;
    let t2 = e2 instanceof HTMLVideoElement ? new ee(e2) : new Ce(e2);
    return t2.colorSpace = we, t2.needsUpdate = true, t2;
  }
  function ai(e2, t2, n2, r2) {
    let i2 = e2.getContext(), a2 = e2.xr.getBinding().getSubImage(t2, n2);
    e2.state.bindTexture(i2.TEXTURE_2D, a2.colorTexture), i2.pixelStorei(i2.UNPACK_FLIP_Y_WEBGL, true), i2.texSubImage2D(i2.TEXTURE_2D, 0, 0, 0, r2.width, r2.height, i2.RGBA, i2.UNSIGNED_BYTE, r2);
  }
  function oi(e2, t2, n2, r2) {
    e2.originReferenceSpace != null && (t2.space = kt(r2, e2.origin, e2.originReferenceSpace, H), t2.transform = Yr(H, U), si(ci(t2), t2, n2, U));
  }
  function si(e2, t2, n2, r2) {
    if (e2 === `cylinder`) {
      let e3 = (r2.x + r2.z) / 2, i2 = e3 * (n2 ?? Br);
      t2.radius = e3, t2.aspectRatio = r2.y === 0 ? 1 : i2 / r2.y;
    } else e2 === `quad` ? (t2.width = r2.x / 2, t2.height = r2.y / 2) : t2.radius = (r2.x + r2.y + r2.z) / 3;
  }
  function ci(e2) {
    return e2 instanceof XRCylinderLayer ? `cylinder` : e2 instanceof XREquirectLayer ? `equirect` : `quad`;
  }
  function li(e2, t2, n2) {
    return new C(e2 * n2, t2 * n2, {
      minFilter: w,
      magFilter: w,
      type: Oe,
      depthTexture: new Ae(e2, t2)
    });
  }
  var ui = Object.defineProperty, di = (e2, t2, n2) => t2 in e2 ? ui(e2, t2, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n2
  }) : e2[t2] = n2, W = (e2, t2, n2) => (di(e2, typeof t2 == `symbol` ? t2 : t2 + ``, n2), n2);
  function fi(e2, t2, n2, r2, i2) {
    let a2;
    if (e2 = e2.subarray || e2.slice ? e2 : e2.buffer, n2 = n2.subarray || n2.slice ? n2 : n2.buffer, e2 = t2 ? e2.subarray ? e2.subarray(t2, i2 && t2 + i2) : e2.slice(t2, i2 && t2 + i2) : e2, n2.set) n2.set(e2, r2);
    else for (a2 = 0; a2 < e2.length; a2++) n2[a2 + r2] = e2[a2];
    return n2;
  }
  function pi(e2) {
    return e2 instanceof Float32Array ? e2 : e2 instanceof O ? e2.getAttribute(`position`).array : e2.map((e3) => {
      let t2 = Array.isArray(e3);
      return e3 instanceof A ? [
        e3.x,
        e3.y,
        e3.z
      ] : e3 instanceof x ? [
        e3.x,
        e3.y,
        0
      ] : t2 && e3.length === 3 ? [
        e3[0],
        e3[1],
        e3[2]
      ] : t2 && e3.length === 2 ? [
        e3[0],
        e3[1],
        0
      ] : e3;
    }).flat();
  }
  var mi = class extends O {
    constructor() {
      super(), W(this, `type`, `MeshLine`), W(this, `isMeshLine`, true), W(this, `positions`, []), W(this, `previous`, []), W(this, `next`, []), W(this, `side`, []), W(this, `width`, []), W(this, `indices_array`, []), W(this, `uvs`, []), W(this, `counters`, []), W(this, `widthCallback`, null), W(this, `_attributes`), W(this, `_points`, []), W(this, `points`), W(this, `matrixWorld`, new T()), Object.defineProperties(this, {
        points: {
          enumerable: true,
          get() {
            return this._points;
          },
          set(e2) {
            this.setPoints(e2, this.widthCallback);
          }
        }
      });
    }
    setMatrixWorld(e2) {
      this.matrixWorld = e2;
    }
    setPoints(e2, t2) {
      if (e2 = pi(e2), this._points = e2, this.widthCallback = t2 ?? null, this.positions = [], this.counters = [], e2.length && e2[0] instanceof A) for (let t3 = 0; t3 < e2.length; t3++) {
        let n2 = e2[t3], r2 = t3 / (e2.length - 1);
        this.positions.push(n2.x, n2.y, n2.z), this.positions.push(n2.x, n2.y, n2.z), this.counters.push(r2), this.counters.push(r2);
      }
      else for (let t3 = 0; t3 < e2.length; t3 += 3) {
        let n2 = t3 / (e2.length - 1);
        this.positions.push(e2[t3], e2[t3 + 1], e2[t3 + 2]), this.positions.push(e2[t3], e2[t3 + 1], e2[t3 + 2]), this.counters.push(n2), this.counters.push(n2);
      }
      this.process();
    }
    compareV3(e2, t2) {
      let n2 = e2 * 6, r2 = t2 * 6;
      return this.positions[n2] === this.positions[r2] && this.positions[n2 + 1] === this.positions[r2 + 1] && this.positions[n2 + 2] === this.positions[r2 + 2];
    }
    copyV3(e2) {
      let t2 = e2 * 6;
      return [
        this.positions[t2],
        this.positions[t2 + 1],
        this.positions[t2 + 2]
      ];
    }
    process() {
      let e2 = this.positions.length / 6;
      this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [];
      let t2, n2;
      n2 = this.compareV3(0, e2 - 1) ? this.copyV3(e2 - 2) : this.copyV3(0), this.previous.push(n2[0], n2[1], n2[2]), this.previous.push(n2[0], n2[1], n2[2]);
      for (let r2 = 0; r2 < e2; r2++) {
        if (this.side.push(1), this.side.push(-1), t2 = this.widthCallback ? this.widthCallback(r2 / (e2 - 1)) : 1, this.width.push(t2), this.width.push(t2), this.uvs.push(r2 / (e2 - 1), 0), this.uvs.push(r2 / (e2 - 1), 1), r2 < e2 - 1) {
          n2 = this.copyV3(r2), this.previous.push(n2[0], n2[1], n2[2]), this.previous.push(n2[0], n2[1], n2[2]);
          let e3 = r2 * 2;
          this.indices_array.push(e3, e3 + 1, e3 + 2), this.indices_array.push(e3 + 2, e3 + 1, e3 + 3);
        }
        r2 > 0 && (n2 = this.copyV3(r2), this.next.push(n2[0], n2[1], n2[2]), this.next.push(n2[0], n2[1], n2[2]));
      }
      n2 = this.compareV3(e2 - 1, 0) ? this.copyV3(1) : this.copyV3(e2 - 1), this.next.push(n2[0], n2[1], n2[2]), this.next.push(n2[0], n2[1], n2[2]), !this._attributes || this._attributes.position.count !== this.counters.length ? this._attributes = {
        position: new D(new Float32Array(this.positions), 3),
        previous: new D(new Float32Array(this.previous), 3),
        next: new D(new Float32Array(this.next), 3),
        side: new D(new Float32Array(this.side), 1),
        width: new D(new Float32Array(this.width), 1),
        uv: new D(new Float32Array(this.uvs), 2),
        index: new D(new Uint16Array(this.indices_array), 1),
        counters: new D(new Float32Array(this.counters), 1)
      } : (this._attributes.position.copyArray(new Float32Array(this.positions)), this._attributes.position.needsUpdate = true, this._attributes.previous.copyArray(new Float32Array(this.previous)), this._attributes.previous.needsUpdate = true, this._attributes.next.copyArray(new Float32Array(this.next)), this._attributes.next.needsUpdate = true, this._attributes.side.copyArray(new Float32Array(this.side)), this._attributes.side.needsUpdate = true, this._attributes.width.copyArray(new Float32Array(this.width)), this._attributes.width.needsUpdate = true, this._attributes.uv.copyArray(new Float32Array(this.uvs)), this._attributes.uv.needsUpdate = true, this._attributes.index.copyArray(new Uint16Array(this.indices_array)), this._attributes.index.needsUpdate = true), this.setAttribute(`position`, this._attributes.position), this.setAttribute(`previous`, this._attributes.previous), this.setAttribute(`next`, this._attributes.next), this.setAttribute(`side`, this._attributes.side), this.setAttribute(`width`, this._attributes.width), this.setAttribute(`uv`, this._attributes.uv), this.setAttribute(`counters`, this._attributes.counters), this.setAttribute(`position`, this._attributes.position), this.setAttribute(`previous`, this._attributes.previous), this.setAttribute(`next`, this._attributes.next), this.setAttribute(`side`, this._attributes.side), this.setAttribute(`width`, this._attributes.width), this.setAttribute(`uv`, this._attributes.uv), this.setAttribute(`counters`, this._attributes.counters), this.setIndex(this._attributes.index), this.computeBoundingSphere(), this.computeBoundingBox();
    }
    advance({ x: e2, y: t2, z: n2 }) {
      let r2 = this._attributes.position.array, i2 = this._attributes.previous.array, a2 = this._attributes.next.array, o2 = r2.length;
      fi(r2, 0, i2, 0, o2), fi(r2, 6, r2, 0, o2 - 6), r2[o2 - 6] = e2, r2[o2 - 5] = t2, r2[o2 - 4] = n2, r2[o2 - 3] = e2, r2[o2 - 2] = t2, r2[o2 - 1] = n2, fi(r2, 6, a2, 0, o2 - 6), a2[o2 - 6] = e2, a2[o2 - 5] = t2, a2[o2 - 4] = n2, a2[o2 - 3] = e2, a2[o2 - 2] = t2, a2[o2 - 1] = n2, this._attributes.position.needsUpdate = true, this._attributes.previous.needsUpdate = true, this._attributes.next.needsUpdate = true;
    }
  }, hi = `
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <fog_pars_vertex>
  #include <clipping_planes_pars_vertex>

  attribute vec3 previous;
  attribute vec3 next;
  attribute float side;
  attribute float width;
  attribute float counters;
  
  uniform vec2 resolution;
  uniform float lineWidth;
  uniform vec3 color;
  uniform float opacity;
  uniform float sizeAttenuation;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
  }
  
  void main() {
    float aspect = resolution.x / resolution.y;
    vColor = vec4(color, opacity);
    vUV = uv;
    vCounters = counters;
  
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(position, 1.0) * aspect;
    vec4 prevPos = m * vec4(previous, 1.0);
    vec4 nextPos = m * vec4(next, 1.0);
  
    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(prevPos, aspect);
    vec2 nextP = fix(nextPos, aspect);
  
    float w = lineWidth * width;
  
    vec2 dir;
    if (nextP == currentP) dir = normalize(currentP - prevP);
    else if (prevP == currentP) dir = normalize(nextP - currentP);
    else {
      vec2 dir1 = normalize(currentP - prevP);
      vec2 dir2 = normalize(nextP - currentP);
      dir = normalize(dir1 + dir2);
  
      vec2 perp = vec2(-dir1.y, dir1.x);
      vec2 miter = vec2(-dir.y, dir.x);
      //w = clamp(w / dot(miter, perp), 0., 4. * lineWidth * width);
    }
  
    //vec2 normal = (cross(vec3(dir, 0.), vec3(0., 0., 1.))).xy;
    vec4 normal = vec4(-dir.y, dir.x, 0., 1.);
    normal.xy *= .5 * w;
    //normal *= projectionMatrix;
    if (sizeAttenuation == 0.) {
      normal.xy *= finalPosition.w;
      normal.xy /= (vec4(resolution, 0., 1.) * projectionMatrix).xy * aspect;
    }
  
    finalPosition.xy += normal.xy * side;
    gl_Position = finalPosition;
    #include <logdepthbuf_vertex>
    #include <fog_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    #include <clipping_planes_vertex>
    #include <fog_vertex>
  }
`, gi = `
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  
  uniform sampler2D map;
  uniform sampler2D alphaMap;
  uniform float useGradient;
  uniform float useMap;
  uniform float useAlphaMap;
  uniform float useDash;
  uniform float dashArray;
  uniform float dashOffset;
  uniform float dashRatio;
  uniform float visibility;
  uniform float alphaTest;
  uniform vec2 repeat;
  uniform vec3 gradient[2];
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  void main() {
    #include <logdepthbuf_fragment>
    vec4 diffuseColor = vColor;
    if (useGradient == 1.) diffuseColor = vec4(mix(gradient[0], gradient[1], vCounters), 1.0);
    if (useMap == 1.) diffuseColor *= texture2D(map, vUV * repeat);
    if (useAlphaMap == 1.) diffuseColor.a *= texture2D(alphaMap, vUV * repeat).a;
    if (diffuseColor.a < alphaTest) discard;
    if (useDash == 1.) diffuseColor.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
    diffuseColor.a *= step(vCounters, visibility);
    #include <clipping_planes_fragment>
    gl_FragColor = diffuseColor;     
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <${parseInt(`187`.replace(/\D+/g, ``)) >= 154 ? `colorspace_fragment` : `encodings_fragment`}>
  }
`, _i = class extends De {
    constructor(e2) {
      super({
        uniforms: {
          ...te.fog,
          lineWidth: {
            value: 1
          },
          map: {
            value: null
          },
          useMap: {
            value: 0
          },
          alphaMap: {
            value: null
          },
          useAlphaMap: {
            value: 0
          },
          color: {
            value: new me(16777215)
          },
          gradient: {
            value: [
              new me(16711680),
              new me(65280)
            ]
          },
          opacity: {
            value: 1
          },
          resolution: {
            value: new x(1, 1)
          },
          sizeAttenuation: {
            value: 1
          },
          dashArray: {
            value: 0
          },
          dashOffset: {
            value: 0
          },
          dashRatio: {
            value: 0.5
          },
          useDash: {
            value: 0
          },
          useGradient: {
            value: 0
          },
          visibility: {
            value: 1
          },
          alphaTest: {
            value: 0
          },
          repeat: {
            value: new x(1, 1)
          }
        },
        vertexShader: hi,
        fragmentShader: gi
      }), W(this, `lineWidth`), W(this, `map`), W(this, `useMap`), W(this, `alphaMap`), W(this, `useAlphaMap`), W(this, `color`), W(this, `gradient`), W(this, `resolution`), W(this, `sizeAttenuation`), W(this, `dashArray`), W(this, `dashOffset`), W(this, `dashRatio`), W(this, `useDash`), W(this, `useGradient`), W(this, `visibility`), W(this, `repeat`), this.type = `MeshLineMaterial`, Object.defineProperties(this, {
        lineWidth: {
          enumerable: true,
          get() {
            return this.uniforms.lineWidth.value;
          },
          set(e3) {
            this.uniforms.lineWidth.value = e3;
          }
        },
        map: {
          enumerable: true,
          get() {
            return this.uniforms.map.value;
          },
          set(e3) {
            this.uniforms.map.value = e3;
          }
        },
        useMap: {
          enumerable: true,
          get() {
            return this.uniforms.useMap.value;
          },
          set(e3) {
            this.uniforms.useMap.value = e3;
          }
        },
        alphaMap: {
          enumerable: true,
          get() {
            return this.uniforms.alphaMap.value;
          },
          set(e3) {
            this.uniforms.alphaMap.value = e3;
          }
        },
        useAlphaMap: {
          enumerable: true,
          get() {
            return this.uniforms.useAlphaMap.value;
          },
          set(e3) {
            this.uniforms.useAlphaMap.value = e3;
          }
        },
        color: {
          enumerable: true,
          get() {
            return this.uniforms.color.value;
          },
          set(e3) {
            this.uniforms.color.value = e3;
          }
        },
        gradient: {
          enumerable: true,
          get() {
            return this.uniforms.gradient.value;
          },
          set(e3) {
            this.uniforms.gradient.value = e3;
          }
        },
        opacity: {
          enumerable: true,
          get() {
            return this.uniforms.opacity.value;
          },
          set(e3) {
            this.uniforms.opacity.value = e3;
          }
        },
        resolution: {
          enumerable: true,
          get() {
            return this.uniforms.resolution.value;
          },
          set(e3) {
            this.uniforms.resolution.value.copy(e3);
          }
        },
        sizeAttenuation: {
          enumerable: true,
          get() {
            return this.uniforms.sizeAttenuation.value;
          },
          set(e3) {
            this.uniforms.sizeAttenuation.value = e3;
          }
        },
        dashArray: {
          enumerable: true,
          get() {
            return this.uniforms.dashArray.value;
          },
          set(e3) {
            this.uniforms.dashArray.value = e3, this.useDash = e3 === 0 ? 0 : 1;
          }
        },
        dashOffset: {
          enumerable: true,
          get() {
            return this.uniforms.dashOffset.value;
          },
          set(e3) {
            this.uniforms.dashOffset.value = e3;
          }
        },
        dashRatio: {
          enumerable: true,
          get() {
            return this.uniforms.dashRatio.value;
          },
          set(e3) {
            this.uniforms.dashRatio.value = e3;
          }
        },
        useDash: {
          enumerable: true,
          get() {
            return this.uniforms.useDash.value;
          },
          set(e3) {
            this.uniforms.useDash.value = e3;
          }
        },
        useGradient: {
          enumerable: true,
          get() {
            return this.uniforms.useGradient.value;
          },
          set(e3) {
            this.uniforms.useGradient.value = e3;
          }
        },
        visibility: {
          enumerable: true,
          get() {
            return this.uniforms.visibility.value;
          },
          set(e3) {
            this.uniforms.visibility.value = e3;
          }
        },
        alphaTest: {
          enumerable: true,
          get() {
            return this.uniforms.alphaTest.value;
          },
          set(e3) {
            this.uniforms.alphaTest.value = e3;
          }
        },
        repeat: {
          enumerable: true,
          get() {
            return this.uniforms.repeat.value;
          },
          set(e3) {
            this.uniforms.repeat.value.copy(e3);
          }
        }
      }), this.setValues(e2);
    }
    copy(e2) {
      return super.copy(e2), this.lineWidth = e2.lineWidth, this.map = e2.map, this.useMap = e2.useMap, this.alphaMap = e2.alphaMap, this.useAlphaMap = e2.useAlphaMap, this.color.copy(e2.color), this.gradient = e2.gradient, this.opacity = e2.opacity, this.resolution.copy(e2.resolution), this.sizeAttenuation = e2.sizeAttenuation, this.dashArray = e2.dashArray, this.dashOffset = e2.dashOffset, this.dashRatio = e2.dashRatio, this.useDash = e2.useDash, this.useGradient = e2.useGradient, this.visibility = e2.visibility, this.alphaTest = e2.alphaTest, this.repeat.copy(e2.repeat), this;
    }
  }, vi = new ve(0, 0, 0, `YXZ`), yi = new k();
  function bi(e2, t2, n2) {
    e2.updateWorldMatrix(true, false), e2.matrixWorld.decompose(t2.position, yi, t2.scale), vi.setFromQuaternion(yi), vi.z = 0, vi.x = Te(vi.x - 10 * Math.PI / 180, -Math.PI / 2, 1.1 * Math.PI / 4), yi.setFromEuler(vi), t2.quaternion.slerp(yi, n2 / 100);
  }
  function xi(e2) {
    return e2.userData.teleportTarget === true;
  }
  function Si(e2 = {}) {
    return (t2, n2, r2, i2) => !(!xi(t2) || e2.filter != null && !e2.filter(t2, n2, r2, i2));
  }
  function Ci() {
    return new pe(new A(0, 0, 0), new A(0, 0, -8), new A(0, -20, -15)).getPoints(20);
  }
  var wi = class extends E {
    constructor(e2) {
      let t2 = new mi(), n2 = new Float32Array(e2.length * 3);
      for (let t3 = 0; t3 < e2.length; t3++) e2[t3].toArray(n2, t3 * 3);
      t2.setPoints(n2);
      let r2 = (e2.length * 3 - 3) / (e2.length * 3 - 1), i2 = new _i({
        lineWidth: 0.1,
        resolution: void 0,
        visibility: r2
      });
      super(t2, i2);
      __publicField(this, "multiplier");
      __publicField(this, "lineLengths");
      __publicField(this, "options", {});
      this.material.transparent = true, this.multiplier = r2, this.material = i2, this.lineLengths = e2.slice(0, -1).map((t3, n3) => t3.distanceTo(e2[n3 + 1]));
    }
    update(e2) {
      let t2 = e2.getEnabled(), n2 = e2.getIntersection();
      if (!t2 || e2.getButtonsDown().size === 0 || n2 == null) {
        this.visible = false;
        return;
      }
      if (this.visible = true, n2.details.type != `lines`) {
        this.material.visibility = this.multiplier;
        return;
      }
      let { distanceOnLine: r2, lineIndex: i2 } = n2.details, a2 = this.lineLengths[i2];
      this.material.visibility = this.multiplier * (i2 + r2 / a2) / this.lineLengths.length;
      let { color: o2 = `white`, opacity: s2 = 0.4, size: c2 = 0.01 } = this.options;
      this.material.lineWidth = c2, this.material.opacity = typeof s2 == `function` ? s2(e2) : s2;
      let l2 = typeof o2 == `function` ? o2(e2) : o2;
      Array.isArray(l2) ? this.material.color.set(...l2) : this.material.color.set(l2);
    }
  }, Ti = new T(), Ei = new A(), Di = new A(), Oi = new k();
  async function ki(e2, t2, n2, r2 = [
    `point`,
    `plane`,
    `mesh`
  ]) {
    var _a3;
    typeof n2 == `string` && (n2 = await t2.requestReferenceSpace(n2));
    let i2 = Array.isArray(r2) ? r2 : [
      r2
    ], a2, o2, s2, c2, l2 = e2.getState();
    if (n2 instanceof XRSpace) a2 = {
      space: n2,
      entityTypes: i2
    }, s2 = l2.origin;
    else {
      let e3 = kt(n2, l2.origin, l2.originReferenceSpace, Ti);
      if (e3 == null) return;
      Ti.decompose(Ei, Oi, Di);
      let t3 = zr(Ei);
      Ei.set(0, 0, -1).applyQuaternion(Oi);
      let r3 = new XRRay(t3, zr(Ei, 0));
      s2 = n2, c2 = Ti.clone().invert(), a2 = {
        space: e3,
        offsetRay: r3,
        entityTypes: i2
      }, o2 = e3;
    }
    let u2 = await ((_a3 = t2 == null ? void 0 : t2.requestHitTestSource) == null ? void 0 : _a3.call(t2, a2));
    if (u2 != null) return {
      source: u2,
      getWorldMatrix: Ai.bind(null, e2, o2, s2, c2)
    };
  }
  function Ai(e2, t2, n2, r2, i2, a2) {
    if (t2 ?? (t2 = e2.getState().originReferenceSpace), t2 == null) return false;
    let o2 = a2.getPose(t2);
    return o2 != null && (i2.fromArray(o2.transform.matrix), r2 != null && i2.premultiply(r2), n2 != null && (n2.updateWorldMatrix(true, false), i2.premultiply(n2.matrixWorld)), true);
  }
  new A(1, 1, 1), new A(0, 0, 0), new k(), new T(), new T(), new k(), new A(), new A(), new A(), new k(), new ve(), new A(), new A();
  var ji = new se();
  function Mi(e2, ...t2) {
    let n2 = e2();
    for (let e3 of t2) n2 = n2 instanceof Promise ? n2.then(e3) : e3(n2);
    return n2;
  }
  var Ni = `generic-trigger`, Pi = class {
    constructor(e2) {
      __publicField(this, "baseAssetPath");
      __publicField(this, "defaultProfileId");
      __publicField(this, "profilesListCache");
      __publicField(this, "profileCacheMap", /* @__PURE__ */ new Map());
      __publicField(this, "loadAsync", this.load);
      this.baseAssetPath = (e2 == null ? void 0 : e2.baseAssetPath) ?? `https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/`, this.defaultProfileId = (e2 == null ? void 0 : e2.defaultControllerProfileId) ?? Ni;
    }
    load(e2, t2) {
      return Mi(() => this.loadProfile(e2), (e3) => {
        for (let n2 in e3.layouts) if (n2.includes(t2)) return e3.layouts[n2];
        throw Error(`No matching layout for "${t2}", in profile ${e3.profileId} with layouts ${Object.keys(e3.layouts).join(`, `)}.`);
      });
    }
    loadProfile(e2) {
      return Mi(() => this.profilesListCache ?? Fi(new URL(`profilesList.json`, this.baseAssetPath).href).then((e3) => this.profilesListCache = e3), (t2) => {
        let n2 = e2.length, r2;
        for (let i2 = 0; i2 < n2 && (r2 = t2[e2[i2]], r2 == null); i2++) ;
        if (r2 ?? (r2 = t2[this.defaultProfileId]), r2 == null) throw Error(`no matching profile found for profiles "${e2.join(`, `)}" in profile list ${JSON.stringify(t2)}`);
        return this.loadProfileFromPath(r2.path);
      });
    }
    loadProfileFromPath(e2) {
      let t2 = this.profileCacheMap.get(e2);
      if (t2 != null) return t2;
      let n2 = new URL(e2, this.baseAssetPath).href;
      return Fi(n2).then((t3) => {
        for (let e3 in t3.layouts) {
          let r2 = t3.layouts[e3];
          r2 != null && (r2.assetPath = new URL(r2.assetPath, n2).href);
        }
        return this.profileCacheMap.set(e2, t3), t3;
      });
    }
  };
  async function Fi(e2) {
    let t2 = await fetch(e2);
    return t2.ok ? t2.json() : Promise.reject(Error(t2.statusText));
  }
  function Ii(e2, t2, n2, r2, i2) {
    return Mi(() => n2.load(t2.profiles, t2.handedness), (n3) => {
      let a2 = {};
      return Xe(a2, t2, n3), {
        id: e2,
        isPrimary: i2,
        events: r2,
        type: `controller`,
        inputSource: t2,
        gamepad: a2,
        layout: n3
      };
    });
  }
  function Li({ gamepad: e2, inputSource: t2, layout: n2 }) {
    Xe(e2, t2, n2);
  }
  var G = e(a(), 1), Ri = (0, G.createContext)(void 0), K = (0, G.createContext)(void 0), zi = (0, G.createContext)(void 0), Bi = (0, G.createContext)(void 0), Vi = (e2) => {
    let t2, n2 = /* @__PURE__ */ new Set(), r2 = (e3, r3) => {
      let i3 = typeof e3 == `function` ? e3(t2) : e3;
      if (!Object.is(i3, t2)) {
        let e4 = t2;
        t2 = r3 ?? (typeof i3 != `object` || !i3) ? i3 : Object.assign({}, t2, i3), n2.forEach((n3) => n3(t2, e4));
      }
    }, i2 = () => t2, a2 = {
      setState: r2,
      getState: i2,
      getInitialState: () => o2,
      subscribe: (e3) => (n2.add(e3), () => n2.delete(e3)),
      destroy: () => {
        n2.clear();
      }
    }, o2 = t2 = e2(r2, i2, a2);
    return a2;
  }, Hi = (e2) => e2 ? Vi(e2) : Vi, Ui = e(r(), 1), { useDebugValue: Wi } = G.default, { useSyncExternalStoreWithSelector: Gi } = Ui.default, Ki = (e2) => e2;
  function qi(e2, t2 = Ki, n2) {
    let r2 = Gi(e2.subscribe, e2.getState, e2.getServerState || e2.getInitialState, t2, n2);
    return Wi(r2), r2;
  }
  var Ji = (e2) => {
    let t2 = typeof e2 == `function` ? Hi(e2) : e2, n2 = (e3, n3) => qi(t2, e3, n3);
    return Object.assign(n2, t2), n2;
  }, Yi = (e2) => e2 ? Ji(e2) : Ji;
  function Xi(e2, t2) {
    if (Object.is(e2, t2)) return true;
    if (typeof e2 != `object` || !e2 || typeof t2 != `object` || !t2) return false;
    if (e2 instanceof Map && t2 instanceof Map) {
      if (e2.size !== t2.size) return false;
      for (let [n3, r2] of e2) if (!Object.is(r2, t2.get(n3))) return false;
      return true;
    }
    if (e2 instanceof Set && t2 instanceof Set) {
      if (e2.size !== t2.size) return false;
      for (let n3 of e2) if (!t2.has(n3)) return false;
      return true;
    }
    let n2 = Object.keys(e2);
    if (n2.length !== Object.keys(t2).length) return false;
    for (let r2 of n2) if (!Object.prototype.hasOwnProperty.call(t2, r2) || !Object.is(e2[r2], t2[r2])) return false;
    return true;
  }
  (0, G.forwardRef)(({ id: e2, children: t2, onPress: n2, onRelease: r2 }, i2) => {
    let a2 = X(`controller`), [o2, c2] = (0, G.useState)(void 0);
    if ((0, G.useImperativeHandle)(i2, () => o2, [
      o2
    ]), Zi(a2, e2, (e3) => e3 === `pressed` ? n2 == null ? void 0 : n2() : r2 == null ? void 0 : r2()), s(() => {
      var _a3;
      return c2((_a3 = a2.gamepad[e2]) == null ? void 0 : _a3.object);
    }), o2 != null) return p(t2, o2);
  });
  function Zi(e2, t2, n2) {
    let r2 = (0, G.useRef)(void 0);
    s(() => {
      var _a3;
      let i2 = (_a3 = e2 == null ? void 0 : e2.gamepad[t2]) == null ? void 0 : _a3.state;
      i2 != null && i2 != r2.current && n2(i2), r2.current = i2;
    });
  }
  var Qi = Symbol(`loadXRControllerModel`), $i = (0, G.forwardRef)((e2, t2) => {
    let n2 = X(`controller`), r2 = i(Dr, [
      n2.layout,
      void 0,
      Qi
    ]);
    Or(r2, e2), n2.object = r2, (0, G.useImperativeHandle)(t2, () => r2, [
      r2
    ]);
    let a2 = (0, G.useMemo)(() => kr(r2, n2.layout, n2.gamepad), [
      r2,
      n2.layout,
      n2.gamepad
    ]);
    return s(a2), (0, M.jsx)(Z, {
      space: `grip-space`,
      children: (0, M.jsx)(`primitive`, {
        object: r2
      })
    });
  }), ea = (0, G.forwardRef)((e2, t2) => {
    let r2 = X(`hand`), i2 = n(se, r2.assetPath), a2 = (0, G.useMemo)(() => it(i2), [
      i2
    ]);
    at(a2, e2), r2.object = a2, (0, G.useImperativeHandle)(t2, () => a2, [
      a2
    ]);
    let o2 = za(), c2 = (0, G.useMemo)(() => lt(r2.inputSource.hand, a2, o2), [
      r2.inputSource,
      a2,
      o2
    ]);
    return s((e3, t3, n2) => c2(n2)), (0, M.jsx)(`primitive`, {
      object: a2
    });
  });
  (0, G.forwardRef)(({ joint: e2, children: t2 }, n2) => (0, M.jsx)(Z, {
    ref: n2,
    space: e2,
    children: t2
  }));
  function ta({ children: e2 }) {
    let t2 = (0, G.useMemo)(() => new ir(false), []);
    return ua(t2), (0, M.jsx)(Bi.Provider, {
      value: t2,
      children: e2
    });
  }
  function na(e2) {
    for (let t2 of Object.keys(e2)) delete e2[t2];
  }
  function ra(e2, t2, n2, r2) {
    let i2 = (0, G.useMemo)(() => ({}), []);
    na(i2), Object.assign(i2, n2);
    let a2 = d(), o2 = (0, G.useMemo)(() => Kn(() => a2.getState().camera, e2, t2, i2, r2), [
      a2,
      e2,
      t2,
      i2,
      r2
    ]);
    return ua(o2, n2 == null ? void 0 : n2.makeDefault), o2;
  }
  function ia(e2, t2, n2, r2) {
    let i2 = (0, G.useMemo)(() => ({}), []);
    na(i2), Object.assign(i2, n2);
    let a2 = d(), o2 = (0, G.useMemo)(() => qn(() => a2.getState().camera, e2, t2, i2, r2), [
      a2,
      e2,
      t2,
      i2,
      r2
    ]);
    return ua(o2, n2 == null ? void 0 : n2.makeDefault), o2;
  }
  function aa(e2, t2, n2, r2) {
    let i2 = (0, G.useMemo)(() => ({}), []);
    na(i2), Object.assign(i2, n2);
    let a2 = d(), o2 = (0, G.useMemo)(() => Jn(() => a2.getState().camera, e2, t2, i2, r2), [
      a2,
      e2,
      t2,
      i2,
      r2
    ]);
    return ua(o2, n2 == null ? void 0 : n2.makeDefault), o2;
  }
  function oa(e2, t2, n2, r2) {
    let i2 = (0, G.useMemo)(() => ({}), []);
    na(i2), Object.assign(i2, n2);
    let a2 = d(), o2 = (0, G.useMemo)(() => Yn(() => a2.getState().camera, e2, t2, i2, r2), [
      a2,
      e2,
      t2,
      i2,
      r2
    ]);
    return ua(o2, n2 == null ? void 0 : n2.makeDefault), o2;
  }
  var sa = (0, G.forwardRef)((e2, t2) => {
    let n2 = (0, G.useMemo)(() => new (e2.materialClass ?? xt)(), [
      e2.materialClass
    ]), r2 = (0, G.useRef)(null);
    return (0, G.useImperativeHandle)(t2, () => r2.current, []), s(() => r2.current != null && St(r2.current, n2, e2.pointer, e2)), (0, M.jsx)(`mesh`, {
      matrixAutoUpdate: false,
      renderOrder: e2.renderOrder ?? 2,
      ref: r2,
      material: n2,
      children: (0, M.jsx)(`boxGeometry`, {})
    });
  }), ca = (0, G.forwardRef)((e2, t2) => {
    let n2 = (0, G.useMemo)(() => new (e2.materialClass ?? ht)(), [
      e2.materialClass
    ]), r2 = (0, G.useRef)(null), i2 = (0, G.useRef)(null);
    (0, G.useImperativeHandle)(t2, () => r2.current, []), s(() => r2.current != null && i2.current != null && yt(i2.current, r2.current, n2, e2.pointer, e2));
    let a2 = c((e3) => e3.scene);
    return (0, M.jsxs)(M.Fragment, {
      children: [
        (0, M.jsx)(`group`, {
          ref: i2
        }),
        p((0, M.jsx)(`mesh`, {
          renderOrder: e2.renderOrder ?? 1,
          ref: r2,
          matrixAutoUpdate: false,
          material: n2,
          children: (0, M.jsx)(`planeGeometry`, {})
        }), a2)
      ]
    });
  });
  function la(e2, t2, n2, r2) {
    let i2 = Y((e3) => e3.session);
    (0, G.useEffect)(() => {
      if (i2 != null) return Ct(e2, i2, t2, n2, r2);
    }, [
      n2,
      t2,
      e2,
      i2,
      r2
    ]);
  }
  function ua(e2, t2 = false) {
    let n2 = (0, G.useContext)(Bi);
    if (n2 == null) throw Error(`xr pointers can only be used inside the XR component`);
    (0, G.useEffect)(() => {
      let r2 = n2.register(e2, t2);
      return () => {
        r2();
      };
    }, [
      n2,
      e2,
      t2
    ]), (0, G.useEffect)(() => {
      if (e2 instanceof F) return () => e2.exit({
        timeStamp: performance.now()
      });
    }, [
      e2
    ]);
  }
  var da = (0, G.forwardRef)(({ pointer: e2, linePoints: t2, ...n2 }, r2) => {
    let i2 = (0, G.useMemo)(() => new wi(t2), [
      t2
    ]);
    return (0, G.useImperativeHandle)(r2, () => i2, [
      i2
    ]), i2.options = n2, s(() => i2.update(e2)), (0, M.jsx)(`primitive`, {
      object: i2
    });
  });
  function fa(e2, t2, n2) {
    let r2 = (0, G.useContext)(K);
    if (r2 == null) throw Error(`DefaultXRInputSourceGrabPointer can only be used inside a XRInputSource`);
    let i2 = (0, G.useRef)(null), a2 = ra(i2, r2, n2);
    la(a2, r2.inputSource, e2, r2.events);
    let o2 = n2.cursorModel;
    return (0, M.jsx)(Z, {
      ref: i2,
      space: t2,
      children: o2 !== false && (0, M.jsx)(ca, {
        pointer: a2,
        opacity: wt,
        ...J(o2)
      })
    });
  }
  var pa = fa.bind(null, `select`, `index-finger-tip`), ma = fa.bind(null, `squeeze`, `grip-space`);
  function q(e2) {
    let t2 = X(), n2 = (0, G.useRef)(null), r2 = ia(n2, t2, e2);
    la(r2, t2.inputSource, `select`, t2.events);
    let i2 = e2.rayModel, a2 = e2.cursorModel;
    return (0, M.jsxs)(Z, {
      ref: n2,
      space: `target-ray-space`,
      children: [
        i2 !== false && (0, M.jsx)(sa, {
          pointer: r2,
          opacity: Tt,
          ...J(i2)
        }),
        a2 !== false && (0, M.jsx)(ca, {
          pointer: r2,
          opacity: Tt,
          ...J(a2)
        })
      ]
    });
  }
  function ha(e2) {
    let t2 = X(`hand`), n2 = (0, G.useRef)(null), r2 = oa(n2, t2, e2), i2 = e2.cursorModel;
    return (0, M.jsx)(Z, {
      ref: n2,
      space: t2.inputSource.hand.get(`index-finger-tip`),
      children: i2 !== false && (0, M.jsx)(ca, {
        pointer: r2,
        opacity: Et,
        ...J(i2)
      })
    });
  }
  function ga(e2) {
    let t2 = e2.model, n2 = e2.grabPointer, r2 = e2.rayPointer, i2 = e2.teleportPointer ?? false;
    return (0, M.jsxs)(M.Fragment, {
      children: [
        t2 !== false && (0, M.jsx)(G.Suspense, {
          children: (0, M.jsx)($i, {
            ...J(t2)
          })
        }),
        (0, M.jsxs)(ta, {
          children: [
            n2 !== false && (0, M.jsx)(ma, {
              ...J(n2)
            }),
            r2 !== false && (0, M.jsx)(q, {
              makeDefault: true,
              minDistance: 0.2,
              ...J(r2)
            }),
            i2 !== false && (0, M.jsx)(xa, {
              ...J(i2)
            })
          ]
        })
      ]
    });
  }
  function _a(e2) {
    var _a3;
    let t2 = e2.model, n2 = e2.grabPointer, r2 = e2.rayPointer, i2 = e2.touchPointer, a2 = e2.teleportPointer ?? false, o2 = r2 !== false && ((_a3 = J(r2)) == null ? void 0 : _a3.rayModel);
    return (0, M.jsxs)(M.Fragment, {
      children: [
        t2 !== false && (0, M.jsx)(G.Suspense, {
          children: (0, M.jsx)(ea, {
            ...J(t2)
          })
        }),
        (0, M.jsxs)(ta, {
          children: [
            n2 !== false && (0, M.jsx)(pa, {
              ...J(n2)
            }),
            i2 !== false && (0, M.jsx)(ha, {
              ...J(i2)
            }),
            r2 !== false && (0, M.jsx)(q, {
              makeDefault: true,
              minDistance: 0.2,
              ...J(r2),
              rayModel: o2 !== false && {
                maxLength: 0.2,
                ...J(o2)
              }
            }),
            a2 !== false && (0, M.jsx)(xa, {
              ...J(a2)
            })
          ]
        })
      ]
    });
  }
  function va(e2) {
    return (0, M.jsx)(q, {
      ...e2,
      rayModel: false
    });
  }
  function ya(e2) {
    return (0, M.jsx)(q, {
      ...e2,
      rayModel: false
    });
  }
  function ba(e2) {
    return (0, M.jsx)(q, {
      ...e2,
      cursorModel: false,
      rayModel: false
    });
  }
  function xa(e2) {
    let t2 = (0, G.useContext)(K);
    if (t2 == null) throw Error(`DefaultXRInputSourceRayPointer can only be used inside a XRInputSource`);
    let n2 = (0, G.useRef)(null), r2 = (0, G.useRef)(null), i2 = (0, G.useMemo)(() => Ci(), []), a2 = aa(r2, t2, {
      ...e2,
      linePoints: i2,
      filter: Si(e2)
    }, `teleport`);
    la(a2, t2.inputSource, `select`, t2.events);
    let o2 = e2.rayModel, l2 = e2.cursorModel, u2 = c((e3) => e3.scene), d2 = (0, G.useRef)(null);
    return s((e3, t3) => {
      d2.current != null && (d2.current.visible = a2.getEnabled() && a2.getButtonsDown().size > 0);
      let i3 = r2.current, o3 = n2.current;
      i3 != null && o3 != null && bi(o3, i3, t3 * 1e3);
    }), (0, M.jsxs)(M.Fragment, {
      children: [
        (0, M.jsx)(Z, {
          ref: n2,
          space: `target-ray-space`
        }),
        p((0, M.jsxs)(`group`, {
          ref: r2,
          children: [
            o2 !== false && (0, M.jsx)(da, {
              linePoints: i2,
              pointer: a2,
              opacity: Tt,
              ...J(o2)
            }),
            l2 !== false && (0, M.jsx)(ca, {
              ref: d2,
              pointer: a2,
              opacity: Tt,
              ...J(l2)
            })
          ]
        }), u2)
      ]
    });
  }
  function J(e2) {
    if (e2 !== true) return e2;
  }
  function Sa() {
    return Y((e2) => e2.visibilityState);
  }
  function Ca(e2, t2) {
    let n2 = (0, G.useRef)(t2);
    n2.current = t2;
    let [r2, i2] = (0, G.useMemo)(() => {
      let t3;
      return [
        (r3) => {
          let i3 = false;
          return typeof navigator > `u` || navigator.xr == null ? (t3 = false, () => {
          }) : (navigator.xr.isSessionSupported(e2).then((e3) => {
            t3 = e3, i3 || r3();
          }).catch((e3) => {
            var _a3;
            i3 || ((_a3 = n2.current) == null ? void 0 : _a3.call(n2, e3));
          }), () => i3 = true);
        },
        () => t3
      ];
    }, [
      e2
    ]);
    return (0, G.useSyncExternalStore)(r2, i2);
  }
  function wa(e2) {
    return Y(({ session: t2 }) => {
      var _a3;
      return ((_a3 = t2 == null ? void 0 : t2.enabledFeatures) == null ? void 0 : _a3.includes(e2)) ?? false;
    });
  }
  var Ta = 0, Ea = /* @__PURE__ */ new Map();
  function Da(e2) {
    let t2 = Ea.get(e2);
    return t2 ?? Ea.set(e2, t2 = Ta++), t2;
  }
  function Oa({ children: e2 }) {
    let t2 = Y((e3) => e3.originReferenceSpace), n2 = Y((e3) => e3.origin), r2 = Sa() === `visible`, i2 = d(), a2 = (0, G.useMemo)(() => Object.assign({}, i2, {
      getState() {
        return {
          ...i2.getState(),
          scene: n2
        };
      }
    }), [
      n2,
      i2
    ]);
    return n2 == null || t2 == null ? null : (0, M.jsx)(M.Fragment, {
      children: f.createPortal((0, M.jsx)(u.Provider, {
        value: i2,
        children: (0, M.jsxs)(zi.Provider, {
          value: t2,
          children: [
            (0, M.jsxs)(`group`, {
              matrixAutoUpdate: false,
              visible: r2,
              children: [
                (0, M.jsx)(ka, {}),
                (0, M.jsx)(Aa, {}),
                (0, M.jsx)(ja, {}),
                (0, M.jsx)(Ma, {}),
                (0, M.jsx)(Na, {})
              ]
            }),
            e2
          ]
        })
      }), a2, null)
    });
  }
  function ka() {
    let e2 = Y((e3) => e3.inputSourceStates.filter((e4) => e4.type === `controller`), Xi), t2 = Y((e3) => e3.controller);
    return t2 === false ? null : (0, M.jsx)(M.Fragment, {
      children: e2.map((e3) => {
        let n2 = B(t2, e3.inputSource.handedness, {});
        return n2 === false ? null : (0, M.jsx)(K.Provider, {
          value: e3,
          children: (0, M.jsx)(Z, {
            space: `target-ray-space`,
            children: (0, M.jsx)(G.Suspense, {
              children: typeof n2 == `function` ? (0, M.jsx)(n2, {}) : (0, M.jsx)(ga, {
                ...n2
              })
            })
          })
        }, e3.id);
      })
    });
  }
  function Aa() {
    let e2 = Y((e3) => e3.inputSourceStates.filter((e4) => e4.type === `hand`), Xi), t2 = Y((e3) => e3.hand);
    return t2 === false ? null : (0, M.jsx)(M.Fragment, {
      children: e2.map((e3) => {
        let n2 = B(t2, e3.inputSource.handedness, {});
        return n2 === false ? null : (0, M.jsx)(K.Provider, {
          value: e3,
          children: (0, M.jsx)(Z, {
            space: `target-ray-space`,
            children: (0, M.jsx)(G.Suspense, {
              children: typeof n2 == `function` ? (0, M.jsx)(n2, {}) : (0, M.jsx)(_a, {
                ...n2
              })
            })
          })
        }, Da(e3));
      })
    });
  }
  function ja() {
    let e2 = Y((e3) => e3.inputSourceStates.filter((e4) => e4.type === `transientPointer`), Xi), t2 = Y((e3) => e3.transientPointer);
    return t2 === false ? null : (0, M.jsx)(M.Fragment, {
      children: e2.map((e3) => {
        let n2 = B(t2, e3.inputSource.handedness, {});
        return n2 === false ? null : (0, M.jsx)(K.Provider, {
          value: e3,
          children: (0, M.jsx)(Z, {
            space: `target-ray-space`,
            children: (0, M.jsx)(G.Suspense, {
              children: typeof n2 == `function` ? (0, M.jsx)(n2, {}) : (0, M.jsx)(va, {
                ...n2
              })
            })
          })
        }, Da(e3));
      })
    });
  }
  function Ma() {
    let e2 = Y((e3) => e3.inputSourceStates.filter((e4) => e4.type === `gaze`), Xi), t2 = Y((e3) => e3.gaze);
    return t2 === false ? null : (0, M.jsx)(M.Fragment, {
      children: e2.map((e3) => (0, M.jsx)(K.Provider, {
        value: e3,
        children: (0, M.jsx)(Z, {
          space: `target-ray-space`,
          children: (0, M.jsx)(G.Suspense, {
            children: typeof t2 == `function` ? (0, M.jsx)(t2, {}) : (0, M.jsx)(ya, {
              ...Pa(t2)
            })
          })
        })
      }, Da(e3)))
    });
  }
  function Na() {
    let e2 = Y((e3) => e3.inputSourceStates.filter((e4) => e4.type === `screenInput`), Xi), t2 = Y((e3) => e3.screenInput);
    return t2 === false ? null : (0, M.jsx)(M.Fragment, {
      children: e2.map((e3) => (0, M.jsx)(K.Provider, {
        value: e3,
        children: (0, M.jsx)(Z, {
          space: `target-ray-space`,
          children: (0, M.jsx)(G.Suspense, {
            children: typeof t2 == `function` ? (0, M.jsx)(t2, {}) : (0, M.jsx)(ba, {
              ...Pa(t2)
            })
          })
        })
      }, Da(e3)))
    });
  }
  function Pa(e2) {
    if (e2 !== true) return e2;
  }
  function Fa(e2) {
    return mr(e2);
  }
  Ia = function({ children: e2, store: t2 }) {
    t2.setWebXRManager(c((e3) => e3.gl.xr));
    let n2 = d();
    return (0, G.useEffect)(() => {
      let e3;
      return t2.subscribe((t3, r2) => {
        if (t3.session !== r2.session) {
          if (t3.session != null) {
            let { camera: t4, gl: r3 } = n2.getState();
            e3 = t4, n2.setState({
              camera: r3.xr.getCamera()
            });
          } else e3 != null && n2.setState({
            camera: e3
          });
        }
      });
    }, [
      n2,
      t2
    ]), s((e3, n3, r2) => t2.onBeforeFrame(e3.scene, e3.camera, r2), -1e3), s(() => t2.onBeforeRender()), (0, M.jsx)(Ri.Provider, {
      value: t2,
      children: (0, M.jsxs)(La, {
        children: [
          (0, M.jsx)(Oa, {}),
          e2
        ]
      })
    });
  };
  function La({ children: e2 }) {
    let t2 = Ra(), n2 = (0, G.useMemo)(() => new ir(true), []);
    return (0, G.useEffect)(() => mt(t2, (e3) => n2.setEnabled(e3, {
      timeStamp: performance.now()
    })), [
      t2,
      n2
    ]), s((e3) => n2.move(e3.scene, {
      timeStamp: performance.now()
    }), -50), (0, M.jsx)(Bi.Provider, {
      value: n2,
      children: e2
    });
  }
  function Ra() {
    let e2 = (0, G.useContext)(Ri);
    if (e2 == null) throw Error(`XR features can only be used inside the <XR> component`);
    return e2;
  }
  function Y(e2 = (e3) => e3, t2) {
    return qi(Ra(), e2, t2);
  }
  function X(e2) {
    let t2 = (0, G.useContext)(K);
    if (t2 == null) throw Error(`useXRInputSourceStateContext() can only be used inside the xr store config`);
    if (e2 != null && t2.type != e2) throw Error(`useXRInputSourceStateContext(${e2}) can not be used inside a component for input type "${t2.type}"`);
    return t2;
  }
  var Z = (0, G.forwardRef)(({ space: e2, children: t2 }, n2) => {
    let r2 = (0, G.useRef)(null), i2 = typeof e2 == `string` ? za(e2) : e2;
    (0, G.useImperativeHandle)(n2, () => r2.current, []), Va(r2, i2);
    let a2 = (0, G.useCallback)((e3) => {
      e3 != null && (e3.transformReady = false, e3.visible = false), r2.current = e3;
    }, []);
    return (0, M.jsx)(`group`, {
      userData: {
        xrSpace: e2
      },
      xrSpace: i2,
      matrixAutoUpdate: false,
      ref: a2,
      children: i2 && (0, M.jsx)(zi.Provider, {
        value: i2,
        children: t2
      })
    });
  });
  function za(e2) {
    var _a3;
    switch (e2) {
      case `grip-space`:
        return X().inputSource.gripSpace;
      case `target-ray-space`:
        return X().inputSource.targetRaySpace;
      case `wrist`:
      case `thumb-metacarpal`:
      case `thumb-phalanx-proximal`:
      case `thumb-phalanx-distal`:
      case `thumb-tip`:
      case `index-finger-metacarpal`:
      case `index-finger-phalanx-proximal`:
      case `index-finger-phalanx-intermediate`:
      case `index-finger-phalanx-distal`:
      case `index-finger-tip`:
      case `middle-finger-metacarpal`:
      case `middle-finger-phalanx-proximal`:
      case `middle-finger-phalanx-intermediate`:
      case `middle-finger-phalanx-distal`:
      case `middle-finger-tip`:
      case `ring-finger-metacarpal`:
      case `ring-finger-phalanx-proximal`:
      case `ring-finger-phalanx-intermediate`:
      case `ring-finger-phalanx-distal`:
      case `ring-finger-tip`:
      case `pinky-finger-metacarpal`:
      case `pinky-finger-phalanx-proximal`:
      case `pinky-finger-phalanx-intermediate`:
      case `pinky-finger-phalanx-distal`:
      case `pinky-finger-tip`:
        return X(`hand`).inputSource.hand.get(e2);
      case `root`:
      case `hips`:
      case `spine-lower`:
      case `spine-middle`:
      case `spine-upper`:
      case `chest`:
      case `neck`:
      case `head`:
      case `left-shoulder`:
      case `left-scapula`:
      case `left-arm-upper`:
      case `left-arm-lower`:
      case `left-hand-wrist-twist`:
      case `right-shoulder`:
      case `right-scapula`:
      case `right-arm-upper`:
      case `right-arm-lower`:
      case `right-hand-wrist-twist`:
      case `left-hand-palm`:
      case `left-hand-wrist`:
      case `left-hand-thumb-metacarpal`:
      case `left-hand-thumb-phalanx-proximal`:
      case `left-hand-thumb-phalanx-distal`:
      case `left-hand-thumb-tip`:
      case `left-hand-index-metacarpal`:
      case `left-hand-index-phalanx-proximal`:
      case `left-hand-index-phalanx-intermediate`:
      case `left-hand-index-phalanx-distal`:
      case `left-hand-index-tip`:
      case `left-hand-middle-metacarpal`:
      case `left-hand-middle-phalanx-proximal`:
      case `left-hand-middle-phalanx-intermediate`:
      case `left-hand-middle-phalanx-distal`:
      case `left-hand-middle-tip`:
      case `left-hand-ring-metacarpal`:
      case `left-hand-ring-phalanx-proximal`:
      case `left-hand-ring-phalanx-intermediate`:
      case `left-hand-ring-phalanx-distal`:
      case `left-hand-ring-tip`:
      case `left-hand-little-metacarpal`:
      case `left-hand-little-phalanx-proximal`:
      case `left-hand-little-phalanx-intermediate`:
      case `left-hand-little-phalanx-distal`:
      case `left-hand-little-tip`:
      case `right-hand-palm`:
      case `right-hand-wrist`:
      case `right-hand-thumb-metacarpal`:
      case `right-hand-thumb-phalanx-proximal`:
      case `right-hand-thumb-phalanx-distal`:
      case `right-hand-thumb-tip`:
      case `right-hand-index-metacarpal`:
      case `right-hand-index-phalanx-proximal`:
      case `right-hand-index-phalanx-intermediate`:
      case `right-hand-index-phalanx-distal`:
      case `right-hand-index-tip`:
      case `right-hand-middle-metacarpal`:
      case `right-hand-middle-phalanx-proximal`:
      case `right-hand-middle-phalanx-intermediate`:
      case `right-hand-middle-phalanx-distal`:
      case `right-hand-middle-tip`:
      case `right-hand-ring-metacarpal`:
      case `right-hand-ring-phalanx-proximal`:
      case `right-hand-ring-phalanx-intermediate`:
      case `right-hand-ring-phalanx-distal`:
      case `right-hand-ring-tip`:
      case `right-hand-little-metacarpal`:
      case `right-hand-little-phalanx-proximal`:
      case `right-hand-little-phalanx-intermediate`:
      case `right-hand-little-phalanx-distal`:
      case `right-hand-little-tip`:
      case `left-upper-leg`:
      case `left-lower-leg`:
      case `left-foot-ankle-twist`:
      case `left-foot-ankle`:
      case `left-foot-subtalar`:
      case `left-foot-transverse`:
      case `left-foot-ball`:
      case `right-upper-leg`:
      case `right-lower-leg`:
      case `right-foot-ankle-twist`:
      case `right-foot-ankle`:
      case `right-foot-subtalar`:
      case `right-foot-transverse`:
      case `right-foot-ball`:
        return (_a3 = Y((e3) => e3.body)) == null ? void 0 : _a3.get(e2);
    }
    if (e2 == null) {
      let e3 = (0, G.useContext)(zi);
      if (e3 == null) throw Error(`XR objects must be placed inside the XROrigin`);
      return e3;
    }
    let [t2, n2] = (0, G.useState)(void 0), r2 = Y((e3) => e3.session);
    return (0, G.useEffect)(() => {
      if (r2 == null) return;
      let t3 = false;
      return r2.requestReferenceSpace(e2).then((e3) => {
        t3 || n2(e3);
      }), () => {
        t3 = true, n2(void 0);
      };
    }, [
      r2,
      e2
    ]), t2;
  }
  function Ba(e2) {
    let t2 = (0, G.useContext)(zi), n2 = Y((e3) => t2 ?? e3.originReferenceSpace);
    return (0, G.useMemo)(() => e2 == null || n2 == null ? void 0 : Ot(e2, n2), [
      e2,
      n2
    ]);
  }
  function Va(e2, t2, n2) {
    let r2 = Ba(t2);
    s((t3, i2, a2) => {
      e2.current != null && (e2.current.visible = e2.current.transformReady = (r2 == null ? void 0 : r2(e2.current.matrix, a2)) ?? false), n2 == null ? void 0 : n2(t3, i2, a2);
    }, -100);
  }
  (0, G.forwardRef)(({ mesh: e2, ...t2 }, n2) => {
    let r2 = Ha(e2);
    return (0, M.jsx)(`mesh`, {
      ref: n2,
      geometry: r2,
      ...t2
    });
  });
  function Ha(e2, t2 = true) {
    let [n2, r2] = (0, G.useState)(Pr(e2, void 0));
    return s(() => r2((t3) => Pr(e2, t3))), (0, G.useEffect)(() => {
      if (t2) return () => n2.dispose();
    }, [
      n2
    ]), n2;
  }
  (0, G.forwardRef)(({ plane: e2, ...t2 }, n2) => {
    let r2 = Ua(e2);
    return (0, M.jsx)(`mesh`, {
      ref: n2,
      geometry: r2,
      ...t2
    });
  });
  function Ua(e2, t2 = true) {
    let [n2, r2] = (0, G.useState)(Fr(e2, void 0));
    return s(() => r2((t3) => Fr(e2, t3))), (0, G.useEffect)(() => {
      if (t2) return () => n2.dispose();
    }, [
      n2
    ]), n2;
  }
  (0, G.forwardRef)(({ children: e2, disabled: t2, ...n2 }, r2) => {
    let i2 = c((e3) => e3.gl.xr.getCamera()), a2 = (0, G.useRef)(null), o2 = Y((e3) => e3.originReferenceSpace);
    return (0, G.useImperativeHandle)(r2, () => a2.current, []), (0, G.useEffect)(() => {
      let e3 = a2.current;
      if (!(e3 == null || t2)) return e3.add(i2), () => void e3.remove(i2);
    }, [
      t2,
      i2
    ]), (0, M.jsx)(`group`, {
      ref: a2,
      ...n2,
      children: (0, M.jsx)(zi.Provider, {
        value: o2,
        children: e2
      })
    });
  });
  function Wa(e2, t2, n2) {
    let r2 = (0, G.useRef)(void 0);
    Ga(t2, n2, (0, G.useCallback)((e3) => r2.current = e3, [])), s((t3, n3, i2) => {
      e2 != null && i2 != null && r2.current != null && e2(i2.getHitTestResults(r2.current.source), r2.current.getWorldMatrix);
    });
  }
  function Ga(e2, t2, n2) {
    let r2 = Ra(), i2 = qi(r2, (e3) => e3.session), a2 = Array.isArray(t2) ? t2.join(`,`) : t2;
    (0, G.useEffect)(() => {
      if (i2 == null) return;
      let a3, o2 = false, s2 = e2 instanceof XRSpace || typeof e2 == `string` ? e2 : e2 == null ? void 0 : e2.current;
      if (s2 != null) return ki(r2, i2, s2, t2).then((e3) => {
        o2 ? e3 == null ? void 0 : e3.source.cancel() : (a3 = e3, n2(e3));
      }).catch(console.error), () => {
        n2(void 0), o2 = true, a3 == null ? void 0 : a3.source.cancel();
      };
    }, [
      i2,
      r2,
      e2,
      a2,
      n2
    ]);
  }
  (0, G.forwardRef)(({ trackableType: e2, onResults: t2, space: n2, ...r2 }, i2) => {
    let a2 = (0, G.useRef)(null);
    return (0, G.useImperativeHandle)(i2, () => a2.current), Wa(t2, n2 ?? a2, e2), (0, M.jsx)(`group`, {
      ...r2,
      ref: a2
    });
  });
  var Ka = e(t(), 1), qa = (e2) => {
    let t2, n2 = /* @__PURE__ */ new Set(), r2 = (e3, r3) => {
      let i3 = typeof e3 == `function` ? e3(t2) : e3;
      if (!Object.is(i3, t2)) {
        let e4 = t2;
        t2 = r3 ?? (typeof i3 != `object` || !i3) ? i3 : Object.assign({}, t2, i3), n2.forEach((n3) => n3(t2, e4));
      }
    }, i2 = () => t2, a2 = {
      setState: r2,
      getState: i2,
      getInitialState: () => o2,
      subscribe: (e3) => (n2.add(e3), () => n2.delete(e3)),
      destroy: () => {
        n2.clear();
      }
    }, o2 = t2 = e2(r2, i2, a2);
    return a2;
  }, Ja = (e2) => e2 ? qa(e2) : qa, { useDebugValue: Ya } = G.default, { useSyncExternalStoreWithSelector: Xa } = Ui.default, Za = (e2) => e2;
  function Qa(e2, t2 = Za, n2) {
    let r2 = Xa(e2.subscribe, e2.getState, e2.getServerState || e2.getInitialState, t2, n2);
    return Ya(r2), r2;
  }
  var $a = (e2) => {
    let t2 = typeof e2 == `function` ? Ja(e2) : e2, n2 = (e3, n3) => Qa(t2, e3, n3);
    return Object.assign(n2, t2), n2;
  }, eo = (e2) => e2 ? $a(e2) : $a, to, no = typeof window < `u` && ((to = window.document) != null && to.createElement || ((_a2 = window.navigator) == null ? void 0 : _a2.product) === `ReactNative`) ? G.useLayoutEffect : G.useEffect;
  function ro() {
    let e2 = eo((e3) => ({
      current: [],
      version: 0,
      set: e3
    }));
    return {
      In: ({ children: t2 }) => {
        let n2 = e2((e3) => e3.set), r2 = e2((e3) => e3.version);
        return no(() => {
          n2((e3) => ({
            version: e3.version + 1
          }));
        }, []), no(() => (n2(({ current: e3 }) => ({
          current: [
            ...e3,
            t2
          ]
        })), () => n2(({ current: e3 }) => ({
          current: e3.filter((e4) => e4 !== t2)
        }))), [
          t2,
          r2
        ]), null;
      },
      Out: () => {
        let t2 = e2((e3) => e3.current);
        return G.createElement(G.Fragment, null, t2);
      }
    };
  }
  (0, G.forwardRef)((e2, t2) => {
    let n2 = Y((e3) => e3.domOverlayRoot), { In: r2, Out: i2 } = (0, G.useMemo)(ro, []);
    return (0, G.useEffect)(() => {
      if (n2 == null) return;
      let e3 = (0, Ka.createRoot)(n2);
      return e3.render((0, M.jsx)(i2, {})), () => e3.unmount();
    }, [
      n2,
      i2
    ]), (0, M.jsx)(r2, {
      children: (0, M.jsx)(`div`, {
        ...e2,
        ref: t2
      })
    });
  }), (0, G.forwardRef)(function({ src: e2, pixelWidth: t2 = 1024, pixelHeight: n2 = 1024, dpr: r2 = 1, renderPriority: i2 = 0, children: a2, customRender: o2, ...s2 }, c2) {
    let [l2, u2] = (0, G.useState)(false), d2 = (0, G.useRef)(null), f2 = (0, G.useRef)(void 0), p2 = (0, G.useRef)(void 0);
    (0, G.useEffect)(() => {
      u2(false);
      let t3 = false;
      return ri(e2).then(() => !t3 && u2(true)), () => void (t3 = true);
    }, [
      e2
    ]);
    let m2 = wa(`layers`), h2 = (0, G.useMemo)(() => $r(s2.shape ?? `quad`, {
      centralAngle: s2.centralAngle,
      centralHorizontalAngle: s2.centralHorizontalAngle,
      lowerVerticalAngle: s2.lowerVerticalAngle,
      upperVerticalAngle: s2.upperVerticalAngle
    }), [
      s2.centralAngle,
      s2.centralHorizontalAngle,
      s2.lowerVerticalAngle,
      s2.shape,
      s2.upperVerticalAngle
    ]), g2 = co(t2, n2, r2);
    return oo(g2, d2, [
      l2,
      m2
    ]), (0, G.useImperativeHandle)(c2, () => d2.current, [
      l2,
      m2
    ]), l2 ? (0, M.jsxs)(M.Fragment, {
      children: [
        e2 == null && (0, M.jsx)(po, {
          customRender: o2,
          store: g2,
          renderPriority: i2,
          renderTargetRef: f2,
          layerEntryRef: m2 ? p2 : void 0,
          children: a2
        }),
        m2 ? (0, M.jsx)(io, {
          renderTargetRef: f2,
          layerEntryRef: p2,
          pixelWidth: t2,
          pixelHeight: n2,
          dpr: r2,
          ref: d2,
          ...s2,
          src: e2,
          geometry: h2
        }) : (0, M.jsx)(ao, {
          renderTargetRef: f2,
          ref: d2,
          ...s2,
          src: e2,
          pixelWidth: t2,
          pixelHeight: n2,
          dpr: r2,
          geometry: h2
        })
      ]
    }) : null;
  });
  var io = (0, G.forwardRef)(({ src: e2, shape: t2, colorFormat: n2, depthFormat: r2, layout: i2, mipLevels: a2, renderOrder: o2 = 0, blendTextureSourceAlpha: l2, centralAngle: u2, centralHorizontalAngle: d2, chromaticAberrationCorrection: f2, lowerVerticalAngle: p2, quality: m2, upperVerticalAngle: h2, invertStereo: g2, pixelWidth: _2, pixelHeight: v2, dpr: y2, renderTargetRef: b2, layerEntryRef: x2, ...S2 }, ee2) => {
    let w2 = (0, G.useRef)(null), te2 = c((e3) => e3.gl), T2 = Ra(), ne2 = {
      blendTextureSourceAlpha: l2,
      centralAngle: u2,
      centralHorizontalAngle: d2,
      chromaticAberrationCorrection: f2,
      lowerVerticalAngle: p2,
      quality: m2,
      upperVerticalAngle: h2
    }, re2 = (0, G.useRef)(ne2);
    re2.current = ne2;
    let ie2 = (0, G.useRef)(o2);
    ie2.current = o2;
    let E2 = Y((e3) => e3.originReferenceSpace);
    return (0, G.useEffect)(() => {
      if (w2.current == null || E2 == null) return;
      let o3 = e2 ?? (b2.current = li(_2, v2, y2)), s2 = Wr(o3, T2.getState(), E2, te2.xr, w2.current, {
        colorFormat: n2,
        depthFormat: r2,
        invertStereo: g2,
        layout: i2,
        mipLevels: a2,
        shape: t2
      }, re2.current);
      if (s2 == null) return;
      let c2 = x2.current = {
        layer: s2,
        renderOrder: ie2.current,
        object3D: w2.current
      };
      if (T2.addLayerEntry(c2), o3 instanceof HTMLVideoElement || o3 instanceof C) return () => {
        T2.removeLayerEntry(c2), T2.getState().session != null && s2.destroy();
      };
      let l3 = ni(te2, T2, s2, o3);
      return () => {
        T2.removeLayerEntry(c2), l3(), T2.getState().session != null && s2.destroy();
      };
    }, [
      E2,
      n2,
      r2,
      g2,
      x2,
      i2,
      a2,
      v2,
      _2,
      y2,
      b2,
      te2,
      t2,
      e2,
      T2
    ]), (0, G.useEffect)(() => T2.subscribe((e3, t3) => {
      t3.session != null && e3.session == null && x2.current != null && (T2.removeLayerEntry(x2.current), x2.current = void 0);
    }), [
      T2,
      x2
    ]), x2.current != null && (x2.current.renderOrder = o2), x2.current != null && ti(x2.current.layer, re2.current), s(() => {
      x2.current != null && w2.current != null && oi(T2.getState(), x2.current.layer, re2.current.centralAngle, w2.current);
    }), (0, G.useImperativeHandle)(ee2, () => w2.current, []), (0, M.jsx)(`mesh`, {
      ...S2,
      renderOrder: -1 / 0,
      ref: w2,
      children: (0, M.jsx)(`meshBasicMaterial`, {
        colorWrite: false
      })
    });
  }), ao = (0, G.forwardRef)(({ src: e2, renderTargetRef: t2, dpr: n2, renderOrder: r2, pixelWidth: i2, pixelHeight: a2, ...o2 }, s2) => {
    let c2 = (0, G.useRef)(null);
    return (0, G.useEffect)(() => {
      if (c2.current == null) return;
      let r3 = e2 ?? (t2.current = li(i2, a2, n2)), o3 = ii(r3);
      return c2.current.map = o3, c2.current.needsUpdate = true, () => {
        r3 instanceof C ? r3.dispose() : o3.dispose();
      };
    }, [
      e2,
      i2,
      a2,
      n2,
      t2
    ]), (0, M.jsx)(`mesh`, {
      ref: s2,
      ...o2,
      children: (0, M.jsx)(`meshBasicMaterial`, {
        ref: c2,
        toneMapped: false
      })
    });
  });
  function oo(e2, t2, n2) {
    (0, G.useEffect)(() => {
      let { current: n3 } = t2;
      if (n3 == null) return;
      let r2, i2 = (e3, t3) => {
        if (e3.camera === (t3 == null ? void 0 : t3.camera) && e3.scene === t3.scene) return;
        r2 == null ? void 0 : r2();
        let { destroy: i3, update: a3 } = tr(n3, () => e3.camera, e3.scene), o2 = l(a3);
        r2 = () => {
          i3(), o2();
        };
      };
      i2(e2.getState());
      let a2 = e2.subscribe(i2);
      return () => {
        a2(), r2 == null ? void 0 : r2();
      };
    }, [
      e2,
      t2,
      ...n2
    ]);
  }
  var so = [
    `set`,
    `get`,
    `setSize`,
    `setFrameloop`,
    `setDpr`,
    `events`,
    `invalidate`,
    `advance`,
    `size`,
    `viewport`
  ];
  function co(e2, t2, n2) {
    let r2 = d(), i2 = (0, G.useMemo)(() => {
      let e3 = r2.getState(), t3 = new ke(50, 1, 0.1, 1e3);
      t3.position.set(0, 0, 5);
      let n3 = new x(), i3 = {
        events: {
          enabled: false,
          priority: 0
        },
        size: {
          width: 1,
          height: 1,
          left: 0,
          top: 0
        },
        camera: t3,
        scene: new _e(),
        raycaster: new Me(),
        pointer: n3,
        mouse: n3,
        previousRoot: r2
      }, a2 = Yi((n4, r3) => {
        let a3 = () => {
          let n5 = {};
          for (let t4 in e3) so.includes(t4) || (n5[t4] = e3[t4]);
          return Object.assign(n5, i3, {
            events: {
              ...e3.events,
              ...i3.events
            },
            viewport: Object.assign({}, e3.viewport, e3.viewport.getCurrentViewport(t3, new A(), i3.size))
          });
        }, o2 = () => n4(a3());
        return {
          ...e3,
          set(e4) {
            typeof e4 == `function` && (e4 = e4(r3())), Object.assign(i3, e4), o2();
          },
          setPreviousState(t4) {
            e3 = t4, o2();
          },
          get: r3,
          setEvents() {
          },
          ...a3()
        };
      });
      return Object.assign(a2, {
        setState(e4) {
          a2.getState().set(e4);
        }
      });
    }, [
      r2
    ]);
    return (0, G.useEffect)(() => r2.subscribe(i2.getState().setPreviousState), [
      r2,
      i2
    ]), (0, G.useEffect)(() => {
      let r3 = {
        factor: 1,
        distance: 0,
        dpr: n2,
        initialDpr: n2,
        left: 0,
        top: 0,
        getCurrentViewport: () => r3,
        width: e2,
        height: t2,
        aspect: e2 / t2
      };
      i2.setState({
        size: {
          width: e2,
          height: t2,
          top: 0,
          left: 0
        },
        viewport: r3
      });
    }, [
      e2,
      t2,
      n2,
      i2,
      r2
    ]), i2;
  }
  var lo = new de();
  function uo(e2) {
    return this.getViewport(lo), e2.x = lo.z - lo.x, e2.y = lo.w - lo.y, e2;
  }
  var fo = new de();
  function po({ renderPriority: e2, children: t2, layerEntryRef: n2, renderTargetRef: r2, store: i2, customRender: a2 }) {
    (0, G.useEffect)(() => {
      let e3 = (e4, t3) => {
        let { size: n3, camera: r3 } = e4;
        r3 instanceof ne ? (r3.left = n3.width / -2, r3.right = n3.width / 2, r3.top = n3.height / 2, r3.bottom = n3.height / -2) : r3.aspect = n3.width / n3.height, (n3 !== (t3 == null ? void 0 : t3.size) || r3 !== t3.camera) && (r3.updateProjectionMatrix(), r3.updateMatrixWorld());
      };
      return e3(i2.getState()), i2.subscribe(e3);
    }, [
      i2
    ]);
    let o2, c2, l2, d2, p2, m2;
    return s((e3, t3, s2) => {
      if (r2.current == null || n2 != null && (n2.current == null || s2 == null)) return;
      let u2 = i2.getState(), { gl: f2, scene: h2, camera: g2 } = u2;
      o2 = f2.autoClear, c2 = f2.xr.enabled, l2 = f2.xr.isPresenting, d2 = f2.getRenderTarget(), m2 = f2.getSize, p2 = f2.getDrawingBufferSize, f2.getViewport(fo), f2.autoClear = true, f2.xr.enabled = false, f2.xr.isPresenting = false;
      let _2 = r2.current;
      f2.setViewport(0, 0, _2.width, _2.height), f2.getSize = uo, f2.getDrawingBufferSize = uo, Qr(f2, _2, n2 == null ? void 0 : n2.current, s2), a2 == null ? f2.render(h2, g2) : a2(_2, u2, t3, s2), f2.setRenderTarget(d2), f2.setViewport(fo), f2.autoClear = o2, f2.xr.enabled = c2, f2.xr.isPresenting = l2, f2.getSize = m2, f2.getDrawingBufferSize = p2;
    }, e2), (0, M.jsx)(M.Fragment, {
      children: f.createPortal((0, M.jsx)(u.Provider, {
        value: i2,
        children: t2
      }), i2, null)
    });
  }
  var mo = (0, G.forwardRef)(({ store: e2, mode: t2, onError: n2, children: r2, ...i2 }, a2) => {
    let o2 = qi(e2, (e3) => e3.session), s2 = Ca(t2, n2);
    return (0, M.jsx)(`button`, {
      ref: a2,
      ...i2,
      onClick: () => o2 == null ? e2.enterXR(t2).catch(n2) : o2.end(),
      children: typeof r2 == `function` ? r2(s2 ? o2 == null ? `exited` : `entered` : `unsupported`) : r2
    });
  });
  (0, G.forwardRef)((e2, t2) => (0, M.jsx)(mo, {
    ref: t2,
    mode: `immersive-ar`,
    ...e2
  })), (0, G.forwardRef)((e2, t2) => (0, M.jsx)(mo, {
    ref: t2,
    mode: `immersive-vr`,
    ...e2
  }));
  var ho = {
    onBlur: `pointerleave`,
    onHover: `pointerenter`,
    onMove: `pointermove`,
    onSelect: {
      type: `click`,
      filter: (e2) => e2.pointerType === `ray`
    },
    onSelectEnd: {
      type: `pointerup`,
      filter: (e2) => e2.pointerType === `ray`
    },
    onSelectStart: {
      type: `pointerdown`,
      filter: (e2) => e2.pointerType === `ray`
    },
    onSqueeze: {
      type: `click`,
      filter: (e2) => e2.pointerType === `grab`
    },
    onSqueezeEnd: {
      type: `pointerup`,
      filter: (e2) => e2.pointerType === `grab`
    },
    onSqueezeStart: {
      type: `pointerdown`,
      filter: (e2) => e2.pointerType === `grab`
    }
  };
  function Q(e2, t2, n2) {
    let r2 = (0, G.useRef)(n2);
    r2.current = n2, (0, G.useEffect)(() => {
      let { current: n3 } = e2;
      if (n3 == null) return;
      let i2 = ho[t2], a2 = typeof i2 == `string` ? (e3) => {
        var _a3;
        return (_a3 = r2.current) == null ? void 0 : _a3.call(r2, {
          intersection: e3,
          intersections: [
            e3
          ],
          target: e3.pointerState
        });
      } : (e3) => {
        var _a3;
        e3 instanceof N && !i2.filter(e3) || ((_a3 = r2.current) == null ? void 0 : _a3.call(r2, {
          intersection: e3,
          intersections: [
            e3
          ],
          target: e3.pointerState
        }));
      }, o2 = typeof i2 == `string` ? i2 : i2.type;
      return n3.addEventListener(o2, a2), () => n3.removeEventListener(o2, a2);
    }, [
      e2,
      t2
    ]);
  }
  var go = (0, G.forwardRef)(({ onHover: e2, onBlur: t2, onSelectStart: n2, onSelectEnd: r2, onSelect: i2, onSqueezeStart: a2, onSqueezeEnd: o2, onSqueeze: s2, onMove: c2, children: l2 }, u2) => {
    let d2 = (0, G.useRef)(null);
    return (0, G.useImperativeHandle)(u2, () => d2.current), Q(d2, `onHover`, e2), Q(d2, `onBlur`, t2), Q(d2, `onSelectStart`, n2), Q(d2, `onSelectEnd`, r2), Q(d2, `onSelect`, i2), Q(d2, `onSqueezeStart`, a2), Q(d2, `onSqueezeEnd`, o2), Q(d2, `onSqueeze`, s2), Q(d2, `onMove`, c2), (0, M.jsx)(`group`, {
      ref: d2,
      children: l2
    });
  });
  (0, G.forwardRef)(function({ onSelectStart: e2, onSelectEnd: t2, children: n2, ...r2 }, i2) {
    let a2 = (0, G.useRef)(void 0), o2 = (0, G.useRef)(null), c2 = (0, G.useMemo)(() => new T(), []);
    return (0, G.useImperativeHandle)(i2, () => o2.current), s(() => {
      let e3 = a2.current, t3 = o2.current;
      t3 && e3 && (t3.applyMatrix4(c2), e3.updateWorldMatrix(true, false), t3.applyMatrix4(e3.matrixWorld), t3.updateMatrixWorld(), c2.copy(e3.matrixWorld).invert());
    }), (0, M.jsx)(go, {
      ref: o2,
      onSelectStart: (t3) => {
        ut(t3.target) && (t3.target.type === `controller` || t3.target.type === `hand`) && t3.target.object != null && (a2.current = t3.target.object, t3.target.object.updateWorldMatrix(true, false), c2.copy(t3.target.object.matrixWorld).invert(), e2 == null ? void 0 : e2(t3));
      },
      onSelectEnd: (e3) => {
        e3.target.controller === a2.current && (a2.current = void 0), t2 == null ? void 0 : t2(e3);
      },
      ...r2,
      children: n2
    });
  });
  let vo;
  _o = Fa({
    hand: true,
    controller: true,
    foveation: 0,
    emulate: false
  });
  vo = {
    scale: 1e-3,
    position: [
      0,
      1,
      -0.7
    ]
  };
  yo = h((e2) => ({
    vr: false,
    ar: false,
    checked: false,
    view: vo,
    setView: (t2) => e2({
      view: t2
    }),
    resetView: () => e2({
      view: vo
    }),
    refresh: async () => {
      let t2 = navigator.xr;
      if (!t2) e2({
        vr: false,
        ar: false,
        checked: true
      });
      else try {
        let [n2, r2] = await Promise.all([
          t2.isSessionSupported(`immersive-vr`).catch(() => false),
          t2.isSessionSupported(`immersive-ar`).catch(() => false)
        ]);
        e2({
          vr: n2,
          ar: r2,
          checked: true
        });
      } catch {
        e2({
          vr: false,
          ar: false,
          checked: true
        });
      }
    }
  }));
  typeof navigator < `u` && yo.getState().refresh();
  bo = function() {
    return m(_o, (e2) => e2.mode != null);
  };
  var xo = null, So = null;
  function Co() {
    if (!xo) {
      let e2 = new URL(`/vcad/v2026.11.11-f25f1fe/tc-wasm/`, window.location.href);
      xo = fetch(new URL(`tang_compress_wasm.js`, e2)).then((e3) => {
        if (!e3.ok) throw Error(`tc-wasm missing (run scripts/build-tc-wasm.sh): ${e3.status}`);
        return e3.text();
      }).then(async (t2) => {
        let n2 = URL.createObjectURL(new Blob([
          t2
        ], {
          type: `text/javascript`
        })), r2 = await import(n2).then(async (m2) => {
          await m2.__tla;
          return m2;
        });
        return URL.revokeObjectURL(n2), await r2.default({
          module_or_path: new URL(`tang_compress_wasm_bg.wasm`, e2)
        }), r2;
      });
    }
    return xo;
  }
  function wo(e2) {
    return So || (So = (`gpu` in navigator ? e2.TcGpu.create() : Promise.reject(Error(`no navigator.gpu`))).catch((e3) => (console.warn(`[compressed-field] WebGPU unavailable, using WASM CPU decode:`, e3), null))), So;
  }
  async function To(e2, t2 = {}) {
    let n2 = performance.now(), [r2, i2] = await Promise.all([
      fetch(`${e2}.tc`).then((t3) => {
        if (!t3.ok) throw Error(`fetch ${e2}.tc: ${t3.status}`);
        return t3.arrayBuffer();
      }),
      fetch(`${e2}.json`).then((t3) => {
        if (!t3.ok) throw Error(`fetch ${e2}.json: ${t3.status}`);
        return t3.json();
      })
    ]), a2 = performance.now(), o2 = await Co(), s2 = i2.dims_zyx.reduce((e3, t3) => e3 * t3, 1), c2 = t2.forceGpu || !t2.forceCpu && s2 >= 1 << 22 ? await wo(o2) : null, l2 = performance.now(), u2 = new Uint8Array(r2), d2, f2;
    c2 ? (d2 = await c2.decode(u2), f2 = JSON.parse(c2.lastTimes())) : d2 = o2.decodeCpu(u2);
    let p2 = performance.now(), [m2, h2, g2] = i2.dims_zyx;
    if (d2.length !== m2 * h2 * g2) throw Error(`decoded ${d2.length} cells, expected ${m2 * h2 * g2}`);
    let _2 = o2.fnv1a(d2), v2 = {
      name: e2.split(`/`).pop() ?? e2,
      meta: i2,
      data: d2,
      backend: c2 ? `webgpu` : `cpu`,
      streamBytes: u2.byteLength,
      hash: _2,
      hashMatch: i2.native_fnv1a ? _2 === i2.native_fnv1a : null,
      timings: {
        fetchMs: a2 - n2,
        initMs: l2 - a2,
        decodeMs: p2 - l2,
        totalMs: p2 - n2,
        gpu: f2
      }
    };
    if (t2.referenceUrl) {
      let e3 = await fetch(t2.referenceUrl);
      if (e3.ok) {
        let t3 = new Float32Array(await e3.arrayBuffer()), n3 = 0;
        for (let e4 = 0; e4 < t3.length; e4++) n3 = Math.max(n3, Math.abs(t3[e4] - d2[e4]));
        v2.measuredMaxAbs = n3;
      }
    }
    return v2;
  }
  function Eo(e2) {
    let t2 = Math.min(1, Math.max(0, e2)), n2 = 0.1357 + t2 * (4.5974 - t2 * (42.3277 - t2 * (130.5887 - t2 * (150.5666 - t2 * 58.1375)))), r2 = 0.0914 + t2 * (2.1856 + t2 * (4.8052 - t2 * (14.0195 - t2 * (4.2109 + t2 * 2.7747)))), i2 = 0.1067 + t2 * (12.5925 - t2 * (60.1097 - t2 * (109.0745 - t2 * (88.5066 - t2 * 26.8183)))), a2 = (e3) => Math.round(255 * Math.min(1, Math.max(0, e3)));
    return [
      a2(n2),
      a2(r2),
      a2(i2)
    ];
  }
  async function Do(e2, t2 = {}) {
    let n2 = performance.now(), r2 = await fetch(`${e2}/stack.json`);
    if (!r2.ok) throw Error(`fetch ${e2}/stack.json: ${r2.status}`);
    let i2 = await r2.json(), a2 = [];
    for (let n3 of i2.layers) {
      let r3 = `${e2}/${n3.file}`, o2 = await To(r3, {
        ...t2,
        referenceUrl: `${r3}.ref.f32`
      }), s2 = [
        o2.meta.min,
        o2.meta.max
      ];
      if (i2.geometry && !o2.meta.plane) {
        let e3 = ko(o2.meta, i2.geometry.boxes), [t3, n4] = [
          1 / 0,
          -1 / 0
        ];
        for (let r4 = 0; r4 < e3.length; r4++) e3[r4] && (t3 = Math.min(t3, o2.data[r4]), n4 = Math.max(n4, o2.data[r4]));
        t3 < n4 && (s2 = [
          t3,
          n4
        ]);
      }
      a2.push({
        id: n3.id,
        label: n3.label,
        field: o2,
        range: s2
      });
    }
    return {
      stack: i2,
      layers: a2,
      totalMs: performance.now() - n2
    };
  }
  var Oo = (e2) => !!e2.plane;
  function ko(e2, t2) {
    let [n2, r2, i2] = e2.dims_zyx, [a2, o2, s2] = e2.origin_mm, [c2, l2, u2] = e2.voxel_mm, d2 = new Uint8Array(i2 * r2 * n2);
    for (let e3 = 0; e3 < n2; e3++) for (let n3 = 0; n3 < r2; n3++) for (let f2 = 0; f2 < i2; f2++) {
      let p2 = [
        a2 + (f2 + 0.5) * c2,
        o2 + (n3 + 0.5) * l2,
        s2 + (e3 + 0.5) * u2
      ];
      t2.some((e4) => p2.every((t3, n4) => t3 >= e4.min[n4] && t3 <= e4.max[n4])) && (d2[(e3 * r2 + n3) * i2 + f2] = 1);
    }
    return d2;
  }
  function Ao(e2, t2) {
    let [n2, r2, i2] = e2.dims_zyx, [a2, o2, s2] = e2.origin_mm, [c2, l2, u2] = e2.voxel_mm, d2 = (e3, a3, o3) => e3 >= 0 && a3 >= 0 && o3 >= 0 && e3 < i2 && a3 < r2 && o3 < n2 && t2[(o3 * r2 + a3) * i2 + e3] === 1, f2 = [], p2 = [], m2 = [
      [
        [
          -1,
          0,
          0
        ],
        [
          [
            0,
            0,
            0
          ],
          [
            0,
            0,
            1
          ],
          [
            0,
            1,
            1
          ],
          [
            0,
            1,
            0
          ]
        ]
      ],
      [
        [
          1,
          0,
          0
        ],
        [
          [
            1,
            0,
            0
          ],
          [
            1,
            1,
            0
          ],
          [
            1,
            1,
            1
          ],
          [
            1,
            0,
            1
          ]
        ]
      ],
      [
        [
          0,
          -1,
          0
        ],
        [
          [
            0,
            0,
            0
          ],
          [
            1,
            0,
            0
          ],
          [
            1,
            0,
            1
          ],
          [
            0,
            0,
            1
          ]
        ]
      ],
      [
        [
          0,
          1,
          0
        ],
        [
          [
            0,
            1,
            0
          ],
          [
            0,
            1,
            1
          ],
          [
            1,
            1,
            1
          ],
          [
            1,
            1,
            0
          ]
        ]
      ],
      [
        [
          0,
          0,
          -1
        ],
        [
          [
            0,
            0,
            0
          ],
          [
            0,
            1,
            0
          ],
          [
            1,
            1,
            0
          ],
          [
            1,
            0,
            0
          ]
        ]
      ],
      [
        [
          0,
          0,
          1
        ],
        [
          [
            0,
            0,
            1
          ],
          [
            1,
            0,
            1
          ],
          [
            1,
            1,
            1
          ],
          [
            0,
            1,
            1
          ]
        ]
      ]
    ];
    for (let e3 = 0; e3 < n2; e3++) for (let t3 = 0; t3 < r2; t3++) for (let n3 = 0; n3 < i2; n3++) if (d2(n3, t3, e3)) {
      for (let [h3, g3] of m2) if (!d2(n3 + h3[0], t3 + h3[1], e3 + h3[2])) {
        for (let r3 of g3) f2.push(a2 + (n3 + r3[0]) * c2, o2 + (t3 + r3[1]) * l2, s2 + (e3 + r3[2]) * u2);
        p2.push((e3 * r2 + t3) * i2 + n3);
      }
    }
    let h2 = p2.length, g2 = new Uint32Array(h2 * 6);
    for (let e3 = 0; e3 < h2; e3++) g2.set([
      4 * e3,
      4 * e3 + 1,
      4 * e3 + 2,
      4 * e3,
      4 * e3 + 2,
      4 * e3 + 3
    ], 6 * e3);
    return {
      positions: new Float32Array(f2),
      index: g2,
      cell: new Uint32Array(p2)
    };
  }
  var jo = (e2, t2) => {
    if (!e2) return 1;
    let [n2, r2, i2] = e2.field.meta.dims_zyx;
    return t2 === `x` ? i2 : t2 === `y` ? r2 : n2;
  }, Mo = (e2) => e2.layers.find((t2) => t2.id === e2.active);
  function No(e2, t2) {
    let n2 = e2.map((e3) => ({
      id: e3.id,
      backend: e3.field.backend,
      hash: e3.field.hash,
      native: e3.field.meta.native_fnv1a,
      hashMatch: e3.field.hashMatch,
      measuredMaxAbs: e3.field.measuredMaxAbs,
      bound: e3.field.meta.bound.value,
      decodeMs: e3.field.timings.decodeMs
    }));
    console.info(`[compressed-field]`, {
      totalMs: t2,
      layers: n2
    }), window.__vcadField = {
      totalMs: t2,
      layers: n2
    };
  }
  var $ = h((e2, t2) => ({
    stack: null,
    layers: [],
    active: null,
    mode: `skin`,
    axis: `z`,
    slice: 0,
    probe: null,
    totalMs: 0,
    loading: false,
    error: null,
    loadStack: async (t3, n2) => {
      var _a3;
      e2({
        loading: true,
        error: null
      });
      try {
        let { stack: r2, layers: i2, totalMs: a2 } = await Do(t3, n2);
        e2({
          stack: r2,
          layers: i2,
          active: ((_a3 = i2[0]) == null ? void 0 : _a3.id) ?? null,
          mode: r2.geometry ? `skin` : `slice`,
          axis: `z`,
          slice: Math.floor(jo(i2[0], `z`) / 2),
          probe: null,
          totalMs: a2,
          loading: false
        }), No(i2, a2);
      } catch (t4) {
        e2({
          loading: false,
          error: t4 instanceof Error ? t4.message : String(t4)
        });
      }
    },
    load: async (t3, n2) => {
      e2({
        loading: true,
        error: null
      });
      try {
        let r2 = performance.now(), i2 = await To(t3, {
          ...n2,
          referenceUrl: `${t3}.ref.f32`
        }), a2 = {
          id: i2.name,
          label: i2.meta.field,
          field: i2,
          range: [
            i2.meta.min,
            i2.meta.max
          ]
        }, [o2, s2, c2] = i2.meta.dims_zyx, l2 = 0, u2 = -1 / 0;
        for (let e3 = 0; e3 < o2 * s2 * c2; e3++) i2.data[e3] > u2 && (u2 = i2.data[e3], l2 = Math.floor(e3 / (c2 * s2)));
        let d2 = performance.now() - r2;
        e2({
          stack: {
            name: i2.name,
            title: i2.name,
            layers: [
              {
                id: a2.id,
                label: a2.label,
                file: i2.name
              }
            ]
          },
          layers: [
            a2
          ],
          active: a2.id,
          mode: `slice`,
          axis: `z`,
          slice: l2,
          probe: null,
          totalMs: d2,
          loading: false
        }), No([
          a2
        ], d2);
      } catch (t4) {
        e2({
          loading: false,
          error: t4 instanceof Error ? t4.message : String(t4)
        });
      }
    },
    setActive: (n2) => {
      let r2 = t2(), i2 = r2.layers.find((e3) => e3.id === n2);
      e2({
        active: n2,
        probe: null,
        slice: Math.min(r2.slice, jo(i2, r2.axis) - 1)
      });
    },
    setMode: (t3) => e2({
      mode: t3
    }),
    setAxis: (n2) => e2({
      axis: n2,
      slice: Math.floor(jo(Mo(t2()), n2) / 2)
    }),
    setSlice: (t3) => e2({
      slice: t3
    }),
    setProbe: (t3) => e2({
      probe: t3
    }),
    clear: () => e2({
      stack: null,
      layers: [],
      active: null,
      probe: null,
      error: null
    })
  }));
  if (typeof window < `u`) {
    window.useFieldOverlayStore = $;
    let e2 = new URLSearchParams(window.location.search), t2 = {
      forceCpu: e2.has(`fieldcpu`),
      forceGpu: e2.has(`fieldgpu`)
    }, n2 = e2.get(`fields`), r2 = e2.get(`field`);
    n2 ? $.getState().loadStack(n2, t2) : r2 && $.getState().load(r2, t2);
  }
  function Po(e2, t2, n2) {
    let [r2, i2, a2] = e2.meta.dims_zyx, [o2, s2, c2] = e2.meta.origin_mm, [l2, u2, d2] = e2.meta.voxel_mm, [f2, p2, m2] = [
      o2 + a2 * l2,
      s2 + i2 * u2,
      c2 + r2 * d2
    ];
    if (e2.meta.plane) {
      let t3 = e2.meta.plane === `yz` ? o2 : e2.meta.plane === `xz` ? s2 : c2, [n3, r3, f3, p3] = e2.meta.plane === `yz` ? [
        s2,
        c2,
        u2,
        d2
      ] : e2.meta.plane === `xz` ? [
        o2,
        c2,
        l2,
        d2
      ] : [
        o2,
        s2,
        l2,
        u2
      ], [m3, h3] = [
        n3 + a2 * f3,
        r3 + i2 * p3
      ], g2 = (n4, r4) => e2.meta.plane === `yz` ? [
        t3,
        n4,
        r4
      ] : e2.meta.plane === `xz` ? [
        n4,
        t3,
        r4
      ] : [
        n4,
        r4,
        t3
      ];
      return {
        w: a2,
        h: i2,
        cell: (e3, t4) => t4 * a2 + e3,
        corners: [
          g2(n3, r3),
          g2(m3, r3),
          g2(m3, h3),
          g2(n3, h3)
        ]
      };
    }
    if (t2 === `z`) {
      let e3 = c2 + (n2 + 0.5) * d2;
      return {
        w: a2,
        h: i2,
        cell: (e4, t3) => (n2 * i2 + t3) * a2 + e4,
        corners: [
          [
            o2,
            s2,
            e3
          ],
          [
            f2,
            s2,
            e3
          ],
          [
            f2,
            p2,
            e3
          ],
          [
            o2,
            p2,
            e3
          ]
        ]
      };
    }
    if (t2 === `y`) {
      let e3 = s2 + (n2 + 0.5) * u2;
      return {
        w: a2,
        h: r2,
        cell: (e4, t3) => (t3 * i2 + n2) * a2 + e4,
        corners: [
          [
            o2,
            e3,
            c2
          ],
          [
            f2,
            e3,
            c2
          ],
          [
            f2,
            e3,
            m2
          ],
          [
            o2,
            e3,
            m2
          ]
        ]
      };
    }
    let h2 = o2 + (n2 + 0.5) * l2;
    return {
      w: i2,
      h: r2,
      cell: (e3, t3) => (t3 * i2 + e3) * a2 + n2,
      corners: [
        [
          h2,
          s2,
          c2
        ],
        [
          h2,
          p2,
          c2
        ],
        [
          h2,
          p2,
          m2
        ],
        [
          h2,
          s2,
          m2
        ]
      ]
    };
  }
  var Fo = (e2, t2) => (t2 - e2[0]) / (e2[1] - e2[0] || 1);
  function Io(e2, t2) {
    let [, n2, r2] = e2.meta.dims_zyx, [i2, a2, o2] = [
      t2 % r2,
      Math.floor(t2 / r2) % n2,
      Math.floor(t2 / (r2 * n2))
    ], s2 = e2.meta.origin_mm, c2 = e2.meta.voxel_mm;
    return e2.meta.plane === `yz` ? [
      s2[0],
      s2[1] + (i2 + 0.5) * c2[1],
      s2[2] + (a2 + 0.5) * c2[2]
    ] : [
      s2[0] + (i2 + 0.5) * c2[0],
      s2[1] + (a2 + 0.5) * c2[1],
      s2[2] + (o2 + 0.5) * c2[2]
    ];
  }
  function Lo({ field: e2, range: t2, img: n2, layerId: r2, mask: i2 }) {
    let a2 = $((e3) => e3.setProbe), { texture: o2, geometry: s2 } = (0, G.useMemo)(() => {
      let r3 = new Uint8Array(n2.w * n2.h * 4);
      for (let a4 = 0; a4 < n2.h; a4++) for (let o4 = 0; o4 < n2.w; o4++) {
        let s3 = n2.cell(o4, a4), [c2, l2, u2] = Eo(Fo(t2, e2.data[s3]));
        r3.set([
          c2,
          l2,
          u2,
          !i2 || i2[s3] ? 255 : 0
        ], (a4 * n2.w + o4) * 4);
      }
      let a3 = new v(r3, n2.w, n2.h, y);
      a3.magFilter = ie, a3.colorSpace = we, a3.needsUpdate = true;
      let o3 = new O();
      return o3.setAttribute(`position`, new Ee(n2.corners.flat(), 3)), o3.setAttribute(`uv`, new Ee([
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1
      ], 2)), o3.setIndex([
        0,
        1,
        2,
        0,
        2,
        3
      ]), {
        texture: a3,
        geometry: o3
      };
    }, [
      e2,
      t2,
      n2,
      i2
    ]);
    return (0, G.useEffect)(() => () => (o2.dispose(), s2.dispose()), [
      o2,
      s2
    ]), (0, M.jsx)(`mesh`, {
      geometry: s2,
      renderOrder: 10,
      onPointerMove: (t3) => {
        if (!t3.uv) return;
        t3.stopPropagation();
        let o3 = Math.min(n2.w - 1, Math.floor(t3.uv.x * n2.w)), s3 = Math.min(n2.h - 1, Math.floor(t3.uv.y * n2.h)), c2 = n2.cell(o3, s3);
        if (i2 && !i2[c2]) return a2(null);
        a2({
          layerId: r2,
          cell: c2,
          value: e2.data[c2],
          pos: Io(e2, c2)
        });
      },
      onPointerOut: () => a2(null),
      children: (0, M.jsx)(`meshBasicMaterial`, {
        map: o2,
        side: 2,
        toneMapped: false,
        alphaTest: 0.5
      })
    });
  }
  function Ro({ field: e2, range: t2, ghost: n2, layerId: r2 }) {
    let i2 = $((e3) => {
      var _a3, _b;
      return (_b = (_a3 = e3.stack) == null ? void 0 : _a3.geometry) == null ? void 0 : _b.boxes;
    }), a2 = $((e3) => e3.setProbe), o2 = (0, G.useMemo)(() => i2 ? Ao(e2.meta, ko(e2.meta, i2)) : null, [
      e2.meta,
      i2
    ]), s2 = (0, G.useMemo)(() => {
      if (!o2) return null;
      let n3 = new O();
      n3.setAttribute(`position`, new D(o2.positions, 3)), n3.setIndex(new D(o2.index, 1)), n3.computeVertexNormals();
      let r3 = new Float32Array(o2.positions.length), i3 = new me();
      return o2.cell.forEach((n4, a3) => {
        let [o3, s3, c2] = Eo(Fo(t2, e2.data[n4]));
        i3.setRGB(o3 / 255, s3 / 255, c2 / 255, we);
        for (let e3 = 0; e3 < 4; e3++) r3.set([
          i3.r,
          i3.g,
          i3.b
        ], (4 * a3 + e3) * 3);
      }), n3.setAttribute(`color`, new D(r3, 3)), n3;
    }, [
      o2,
      e2,
      t2
    ]);
    return (0, G.useEffect)(() => () => s2 == null ? void 0 : s2.dispose(), [
      s2
    ]), !o2 || !s2 ? null : n2 ? (0, M.jsx)(`mesh`, {
      geometry: s2,
      renderOrder: 5,
      children: (0, M.jsx)(`meshBasicMaterial`, {
        color: `#9aa4b2`,
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
        side: 2
      })
    }) : (0, M.jsx)(`mesh`, {
      geometry: s2,
      onPointerMove: (t3) => {
        if (t3.faceIndex == null) return;
        t3.stopPropagation();
        let n3 = o2.cell[Math.floor(t3.faceIndex / 2)];
        a2({
          layerId: r2,
          cell: n3,
          value: e2.data[n3],
          pos: Io(e2, n3)
        });
      },
      onPointerOut: () => a2(null),
      children: (0, M.jsx)(`meshLambertMaterial`, {
        vertexColors: true
      })
    });
  }
  function zo() {
    let e2 = $((e3) => e3.stack), t2 = $((e3) => e3.layers[0]), n2 = c((e3) => e3.camera), r2 = c((e3) => e3.controls);
    (0, G.useEffect)(() => {
      var _a3;
      if (!e2 || !t2 || !r2) return;
      let i2 = t2.field.meta, [a2, o2, s2] = i2.dims_zyx, c2 = i2.origin_mm, l2 = [
        c2[0] + s2 * i2.voxel_mm[0],
        c2[1] + o2 * i2.voxel_mm[1],
        c2[2] + a2 * i2.voxel_mm[2]
      ], u2 = (_a3 = e2.geometry) == null ? void 0 : _a3.boxes, d2 = u2 ? [
        0,
        1,
        2
      ].map((e3) => Math.min(...u2.map((t3) => t3.min[e3]))) : c2, f2 = u2 ? [
        0,
        1,
        2
      ].map((e3) => Math.max(...u2.map((t3) => t3.max[e3]))) : l2, p2 = [
        0,
        1,
        2
      ].map((e3) => (d2[e3] + f2[e3]) / 2), m2 = Math.hypot(...[
        0,
        1,
        2
      ].map((e3) => f2[e3] - d2[e3])) / 2, h2 = new A(p2[0], p2[2], -p2[1]), g2 = new A(0.9, 0.75, 1.1).normalize();
      n2.position.copy(h2).addScaledVector(g2, m2 * 2.6), r2.target.copy(h2), n2.lookAt(h2), r2.update();
    }, [
      e2,
      r2
    ]);
  }
  Bo = function() {
    zo();
    let e2 = $(Mo), t2 = $((e3) => {
      var _a3;
      return !!((_a3 = e3.stack) == null ? void 0 : _a3.geometry);
    }), n2 = $((e3) => e3.mode), r2 = $((e3) => e3.axis), i2 = $((e3) => e3.slice), a2 = $((e3) => e3.layers.find((e4) => !Oo(e4.field.meta))), o2 = $((e3) => {
      var _a3, _b;
      return (_b = (_a3 = e3.stack) == null ? void 0 : _a3.geometry) == null ? void 0 : _b.boxes;
    }), s2 = (0, G.useMemo)(() => e2 ? Po(e2.field, r2, i2) : null, [
      e2,
      r2,
      i2
    ]), c2 = e2 == null ? void 0 : e2.field.meta, l2 = (0, G.useMemo)(() => c2 && o2 && !c2.plane ? ko(c2, o2) : void 0, [
      c2,
      o2
    ]);
    if (!e2 || !s2) return null;
    let u2 = Oo(e2.field.meta), d2 = t2 && !u2 && n2 === `skin`;
    return (0, M.jsxs)(`group`, {
      children: [
        t2 && a2 && (0, M.jsx)(Ro, {
          field: d2 ? e2.field : a2.field,
          range: d2 ? e2.range : a2.range,
          ghost: !d2,
          layerId: e2.id
        }),
        !d2 && (0, M.jsx)(Lo, {
          field: e2.field,
          range: e2.range,
          img: s2,
          layerId: e2.id,
          mask: l2
        })
      ]
    });
  };
  var Vo = (e2) => `${e2.toFixed(1)} ms`, Ho = (e2) => Math.abs(e2) >= 100 ? e2.toFixed(1) : Math.abs(e2) >= 1 ? e2.toFixed(3) : e2.toPrecision(4);
  Uo = function() {
    var _a3, _b, _c;
    let e2 = $(), t2 = Mo(e2);
    if (!t2 && !e2.loading && !e2.error) return null;
    if (!t2) return (0, M.jsx)(`div`, {
      className: `fixed bottom-10 left-4 z-50 bg-surface/95 border border-border px-3 py-2 text-xs font-mono`,
      children: e2.loading ? `decoding fields\u2026` : `field error: ${e2.error}`
    });
    let { meta: n2 } = t2.field, r2 = n2.units ?? n2.bound.units, i2 = Oo(n2), [a2, o2, s2] = n2.dims_zyx, c2 = e2.axis === `x` ? s2 : e2.axis === `y` ? o2 : a2, l2 = Array.from({
      length: 11
    }, (e3, t3) => `rgb(${Eo(t3 / 10).join(`,`)})`).join(`,`), u2 = e2.layers.reduce((e3, t3) => e3 + t3.field.streamBytes, 0), d2 = e2.layers.reduce((e3, t3) => e3 + t3.field.data.length * 4, 0), f2 = (e3) => `px-1.5 py-0.5 border ${e3 ? `bg-text/15 border-text/50 text-text` : `border-border opacity-70 hover:opacity-100`}`;
    return (0, M.jsxs)(`div`, {
      className: `fixed bottom-10 left-4 z-50 w-96 bg-surface/95 border border-border px-3 py-2 text-xs font-mono space-y-1.5`,
      "data-testid": `compressed-field-hud`,
      children: [
        (0, M.jsxs)(`div`, {
          className: `flex justify-between`,
          children: [
            (0, M.jsx)(`span`, {
              className: `font-semibold`,
              children: (_a3 = e2.stack) == null ? void 0 : _a3.title
            }),
            (0, M.jsx)(`button`, {
              onClick: e2.clear,
              className: `opacity-60 hover:opacity-100`,
              children: `\xD7`
            })
          ]
        }),
        ((_b = e2.stack) == null ? void 0 : _b.notes) && (0, M.jsx)(`div`, {
          className: `opacity-60`,
          children: e2.stack.notes
        }),
        e2.layers.length > 1 && (0, M.jsx)(`div`, {
          className: `flex flex-wrap gap-1`,
          children: e2.layers.map((t3) => (0, M.jsx)(`button`, {
            className: f2(t3.id === e2.active),
            onClick: () => e2.setActive(t3.id),
            children: t3.label
          }, t3.id))
        }),
        (0, M.jsx)(`div`, {
          className: `h-3 w-full`,
          style: {
            background: `linear-gradient(to right, ${l2})`
          }
        }),
        (0, M.jsxs)(`div`, {
          className: `flex justify-between`,
          children: [
            (0, M.jsx)(`span`, {
              children: Ho(t2.range[0])
            }),
            (0, M.jsxs)(`span`, {
              children: [
                Ho(t2.range[1]),
                ` `,
                r2
              ]
            })
          ]
        }),
        !i2 && (0, M.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            ((_c = e2.stack) == null ? void 0 : _c.geometry) && (0, M.jsxs)(M.Fragment, {
              children: [
                (0, M.jsx)(`button`, {
                  className: f2(e2.mode === `skin`),
                  onClick: () => e2.setMode(`skin`),
                  children: `surface`
                }),
                (0, M.jsx)(`button`, {
                  className: f2(e2.mode === `slice`),
                  onClick: () => e2.setMode(`slice`),
                  children: `slice`
                })
              ]
            }),
            e2.mode === `slice` && (0, M.jsxs)(M.Fragment, {
              children: [
                [
                  `x`,
                  `y`,
                  `z`
                ].map((t3) => (0, M.jsx)(`button`, {
                  className: f2(e2.axis === t3),
                  onClick: () => e2.setAxis(t3),
                  children: t3
                }, t3)),
                (0, M.jsx)(`input`, {
                  type: `range`,
                  min: 0,
                  max: c2 - 1,
                  value: e2.slice,
                  onChange: (t3) => e2.setSlice(Number(t3.target.value)),
                  className: `flex-1`
                })
              ]
            })
          ]
        }),
        i2 && (0, M.jsxs)(`div`, {
          className: `opacity-70`,
          children: [
            `2D field on the `,
            n2.plane,
            ` plane`
          ]
        }),
        (0, M.jsx)(`div`, {
          className: `min-h-4`,
          children: e2.probe && e2.probe.layerId === t2.id ? (0, M.jsxs)(M.Fragment, {
            children: [
              Ho(e2.probe.value),
              ` \xB1 `,
              n2.bound.value.toExponential(1),
              ` `,
              r2,
              ` @ (`,
              e2.probe.pos.map((e3) => e3.toFixed(1)).join(`, `),
              `) mm`
            ]
          }) : (0, M.jsx)(`span`, {
            className: `opacity-50`,
            children: `hover the part to probe`
          })
        }),
        (0, M.jsx)(`table`, {
          className: `w-full`,
          children: (0, M.jsx)(`tbody`, {
            children: e2.layers.map((t3) => (0, M.jsxs)(`tr`, {
              className: t3.id === e2.active ? `` : `opacity-60`,
              children: [
                (0, M.jsx)(`td`, {
                  children: t3.id
                }),
                (0, M.jsxs)(`td`, {
                  children: [
                    (t3.field.streamBytes / 1024).toFixed(1),
                    `K`
                  ]
                }),
                (0, M.jsx)(`td`, {
                  title: `hash ${t3.field.hash}`,
                  children: t3.field.hashMatch ? `hash \u2713` : t3.field.hashMatch === null ? `hash ?` : `hash \u2717`
                }),
                (0, M.jsxs)(`td`, {
                  children: [
                    `|\u0394|\u2264`,
                    t3.field.meta.bound.value.toExponential(1),
                    t3.field.measuredMaxAbs !== void 0 && (t3.field.measuredMaxAbs <= t3.field.meta.bound.value ? ` \u2713` : ` \u2717`)
                  ]
                }),
                (0, M.jsx)(`td`, {
                  children: Vo(t3.field.timings.decodeMs)
                })
              ]
            }, t3.id))
          })
        }),
        (0, M.jsxs)(`div`, {
          className: `opacity-70`,
          children: [
            (u2 / 1024).toFixed(1),
            ` KB of `,
            (d2 / 1024).toFixed(0),
            ` KB (`,
            (d2 / u2).toFixed(0),
            `\xD7) \xB7`,
            ` `,
            t2.field.backend,
            ` \xB7 `,
            n2.format ?? `tc`,
            ` \xB7 load `,
            Vo(e2.totalMs)
          ]
        })
      ]
    });
  };
});
export {
  __tla,
  _o as a,
  Ke as c,
  Ve as d,
  Be as f,
  yo as i,
  He as l,
  Bo as n,
  Ia as o,
  bo as r,
  qe as s,
  Uo as t,
  ze as u
};
