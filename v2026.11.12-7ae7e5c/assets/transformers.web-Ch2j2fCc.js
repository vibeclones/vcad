var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { n as e, r as t } from "./rolldown-runtime-COiEfhsA.js";
let N, dj;
let __tla = (async () => {
  var _a2, _b2, _e2, _c2, _e3, _t2, _d2, _e4, _f2, _g2, _h2, _i2, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t3, _u2, _v2, _w2, _x2, _y2, _z, _A2, _B, _C2, _D2, _E2, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O2, _P, _Q, _R, _S2, _T2, _U, _V, _W, _X, _Y, _Z, __2, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa;
  var n = e({
    InferenceSession: () => De,
    TRACE: () => ve,
    TRACE_EVENT_BEGIN: () => Se,
    TRACE_EVENT_END: () => Ce,
    TRACE_FUNC_BEGIN: () => be,
    TRACE_FUNC_END: () => xe,
    Tensor: () => ge,
    default: () => ir,
    env: () => w,
    registerBackend: () => m
  }), r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.prototype.hasOwnProperty, s = ((e2) => typeof t < `u` ? t : typeof Proxy < `u` ? new Proxy(e2, {
    get: (e3, n2) => (typeof t < `u` ? t : e3)[n2]
  }) : e2)(function(e2) {
    if (typeof t < `u`) return t.apply(this, arguments);
    throw Error(`Dynamic require of "` + e2 + `" is not supported`);
  }), c = (e2, t2, n2) => () => {
    if (n2) throw n2[0];
    try {
      return e2 && (t2 = e2(e2 = 0)), t2;
    } catch (e3) {
      throw n2 = [
        e3
      ], e3;
    }
  }, l = (e2, t2) => {
    for (var n2 in t2) r(e2, n2, {
      get: t2[n2],
      enumerable: true
    });
  }, u = (e2, t2, n2, s2) => {
    if (t2 && typeof t2 == `object` || typeof t2 == `function`) for (let c2 of a(t2)) !o.call(e2, c2) && c2 !== n2 && r(e2, c2, {
      get: () => t2[c2],
      enumerable: !(s2 = i(t2, c2)) || s2.enumerable
    });
    return e2;
  }, d = (e2) => u(r({}, `__esModule`, {
    value: true
  }), e2), f, p, m, h, g, _ = c(() => {
    f = /* @__PURE__ */ new Map(), p = [], m = (e2, t2, n2) => {
      if (t2 && typeof t2.init == `function` && typeof t2.createInferenceSessionHandler == `function`) {
        let r2 = f.get(e2);
        if (r2 === void 0) f.set(e2, {
          backend: t2,
          priority: n2
        });
        else {
          if (r2.priority > n2) return;
          if (r2.priority === n2 && r2.backend !== t2) throw Error(`cannot register backend "${e2}" using priority ${n2}`);
        }
        if (n2 >= 0) {
          let t3 = p.indexOf(e2);
          t3 !== -1 && p.splice(t3, 1);
          for (let t4 = 0; t4 < p.length; t4++) if (f.get(p[t4]).priority <= n2) {
            p.splice(t4, 0, e2);
            return;
          }
          p.push(e2);
        }
      } else throw TypeError(`not a valid backend`);
    }, h = async (e2) => {
      let t2 = f.get(e2);
      if (!t2) return `backend not found.`;
      if (t2.initialized) return t2.backend;
      if (t2.aborted) return t2.error;
      {
        let n2 = !!t2.initPromise;
        try {
          return n2 || (t2.initPromise = t2.backend.init(e2)), await t2.initPromise, t2.initialized = true, t2.backend;
        } catch (e3) {
          return n2 || (t2.error = `${e3}`, t2.aborted = true), t2.error;
        } finally {
          delete t2.initPromise;
        }
      }
    }, g = async (e2) => {
      let t2 = e2.executionProviders || [], n2 = t2.map((e3) => typeof e3 == `string` ? e3 : e3.name), r2 = n2.length === 0 ? p : n2, i2, a2 = [], o2 = /* @__PURE__ */ new Set();
      for (let e3 of r2) {
        let t3 = await h(e3);
        typeof t3 == `string` ? a2.push({
          name: e3,
          err: t3
        }) : (i2 || (i2 = t3), i2 === t3 && o2.add(e3));
      }
      if (!i2) throw Error(`no available backend found. ERR: ${a2.map((e3) => `[${e3.name}] ${e3.err}`).join(`, `)}`);
      for (let { name: e3, err: t3 } of a2) n2.includes(e3) && console.warn(`removing requested execution provider "${e3}" from session options because it is not available: ${t3}`);
      let s2 = t2.filter((e3) => o2.has(typeof e3 == `string` ? e3 : e3.name));
      return [
        i2,
        new Proxy(e2, {
          get: (e3, t3) => t3 === `executionProviders` ? s2 : Reflect.get(e3, t3)
        })
      ];
    };
  }), v = c(() => {
    _();
  }), y, b = c(() => {
    y = `1.31.0-dev.20260911-2a43ec07e`;
  }), x, S, C = c(() => {
    b(), x = `warning`, S = {
      wasm: {},
      webgl: {},
      webgpu: {},
      versions: {
        common: y
      },
      set logLevel(e2) {
        if (e2 !== void 0) {
          if (typeof e2 != `string` || [
            `verbose`,
            `info`,
            `warning`,
            `error`,
            `fatal`
          ].indexOf(e2) === -1) throw Error(`Unsupported logging level: ${e2}`);
          x = e2;
        }
      },
      get logLevel() {
        return x;
      }
    }, Object.defineProperty(S, "logLevel", {
      enumerable: true
    });
  }), w, T = c(() => {
    C(), w = S;
  }), E, ee, te = c(() => {
    E = (e2, t2) => {
      let n2 = typeof document < `u` ? document.createElement(`canvas`) : new OffscreenCanvas(1, 1);
      n2.width = e2.dims[3], n2.height = e2.dims[2];
      let r2 = n2.getContext(`2d`);
      if (r2 != null) {
        let i2, a2;
        (t2 == null ? void 0 : t2.tensorLayout) !== void 0 && t2.tensorLayout === `NHWC` ? (i2 = e2.dims[2], a2 = e2.dims[3]) : (i2 = e2.dims[3], a2 = e2.dims[2]);
        let o2 = (t2 == null ? void 0 : t2.format) === void 0 ? `RGB` : t2.format, s2 = t2 == null ? void 0 : t2.norm, c2, l2;
        s2 === void 0 || s2.mean === void 0 ? c2 = [
          255,
          255,
          255,
          255
        ] : typeof s2.mean == `number` ? c2 = [
          s2.mean,
          s2.mean,
          s2.mean,
          s2.mean
        ] : (c2 = [
          s2.mean[0],
          s2.mean[1],
          s2.mean[2],
          0
        ], s2.mean[3] !== void 0 && (c2[3] = s2.mean[3])), s2 === void 0 || s2.bias === void 0 ? l2 = [
          0,
          0,
          0,
          0
        ] : typeof s2.bias == `number` ? l2 = [
          s2.bias,
          s2.bias,
          s2.bias,
          s2.bias
        ] : (l2 = [
          s2.bias[0],
          s2.bias[1],
          s2.bias[2],
          0
        ], s2.bias[3] !== void 0 && (l2[3] = s2.bias[3]));
        let u2 = a2 * i2, d2 = 0, f2 = u2, p2 = u2 * 2, m2 = -1;
        o2 === `RGBA` ? (d2 = 0, f2 = u2, p2 = u2 * 2, m2 = u2 * 3) : o2 === `RGB` ? (d2 = 0, f2 = u2, p2 = u2 * 2) : o2 === `RBG` && (d2 = 0, p2 = u2, f2 = u2 * 2);
        for (let t3 = 0; t3 < a2; t3++) for (let n3 = 0; n3 < i2; n3++) {
          let i3 = (e2.data[d2++] - l2[0]) * c2[0], a3 = (e2.data[f2++] - l2[1]) * c2[1], o3 = (e2.data[p2++] - l2[2]) * c2[2], s3 = m2 === -1 ? 255 : (e2.data[m2++] - l2[3]) * c2[3];
          r2.fillStyle = `rgba(` + i3 + `,` + a3 + `,` + o3 + `,` + s3 + `)`, r2.fillRect(n3, t3, 1, 1);
        }
        if (`toDataURL` in n2) return n2.toDataURL();
        throw Error(`toDataURL is not supported`);
      }
      throw Error(`Can not access image data`);
    }, ee = (e2, t2) => {
      let n2 = typeof document < `u` ? document.createElement(`canvas`).getContext(`2d`) : new OffscreenCanvas(1, 1).getContext(`2d`), r2;
      if (n2 != null) {
        let i2, a2, o2;
        (t2 == null ? void 0 : t2.tensorLayout) !== void 0 && t2.tensorLayout === `NHWC` ? (i2 = e2.dims[2], a2 = e2.dims[1], o2 = e2.dims[3]) : (i2 = e2.dims[3], a2 = e2.dims[2], o2 = e2.dims[1]);
        let s2 = t2 !== void 0 && t2.format !== void 0 ? t2.format : `RGB`, c2 = t2 == null ? void 0 : t2.norm, l2, u2;
        c2 === void 0 || c2.mean === void 0 ? l2 = [
          255,
          255,
          255,
          255
        ] : typeof c2.mean == `number` ? l2 = [
          c2.mean,
          c2.mean,
          c2.mean,
          c2.mean
        ] : (l2 = [
          c2.mean[0],
          c2.mean[1],
          c2.mean[2],
          255
        ], c2.mean[3] !== void 0 && (l2[3] = c2.mean[3])), c2 === void 0 || c2.bias === void 0 ? u2 = [
          0,
          0,
          0,
          0
        ] : typeof c2.bias == `number` ? u2 = [
          c2.bias,
          c2.bias,
          c2.bias,
          c2.bias
        ] : (u2 = [
          c2.bias[0],
          c2.bias[1],
          c2.bias[2],
          0
        ], c2.bias[3] !== void 0 && (u2[3] = c2.bias[3]));
        let d2 = a2 * i2;
        if (t2 !== void 0 && (t2.format !== void 0 && o2 === 4 && t2.format !== `RGBA` || o2 === 3 && t2.format !== `RGB` && t2.format !== `BGR`)) throw Error(`Tensor format doesn't match input tensor dims`);
        let f2 = 0, p2 = 1, m2 = 2, h2 = 3, g2 = 0, _2 = d2, v2 = d2 * 2, y2 = -1;
        s2 === `RGBA` ? (g2 = 0, _2 = d2, v2 = d2 * 2, y2 = d2 * 3) : s2 === `RGB` ? (g2 = 0, _2 = d2, v2 = d2 * 2) : s2 === `RBG` && (g2 = 0, v2 = d2, _2 = d2 * 2), r2 = n2.createImageData(i2, a2);
        for (let t3 = 0; t3 < a2 * i2; f2 += 4, p2 += 4, m2 += 4, h2 += 4, t3++) r2.data[f2] = (e2.data[g2++] - u2[0]) * l2[0], r2.data[p2] = (e2.data[_2++] - u2[1]) * l2[1], r2.data[m2] = (e2.data[v2++] - u2[2]) * l2[2], r2.data[h2] = y2 === -1 ? 255 : (e2.data[y2++] - u2[3]) * l2[3];
      } else throw Error(`Can not access image data`);
      return r2;
    };
  }), D, O, ne, re, ie, ae, oe = c(() => {
    he(), D = (e2, t2) => {
      if (e2 === void 0) throw Error(`Image buffer must be defined`);
      if (t2.height === void 0 || t2.width === void 0) throw Error(`Image height and width must be defined`);
      if (t2.tensorLayout === `NHWC`) throw Error(`NHWC Tensor layout is not supported yet`);
      let { height: n2, width: r2 } = t2, i2 = t2.norm ?? {
        mean: 255,
        bias: 0
      }, a2, o2;
      a2 = typeof i2.mean == `number` ? [
        i2.mean,
        i2.mean,
        i2.mean,
        i2.mean
      ] : [
        i2.mean[0],
        i2.mean[1],
        i2.mean[2],
        i2.mean[3] ?? 255
      ], o2 = typeof i2.bias == `number` ? [
        i2.bias,
        i2.bias,
        i2.bias,
        i2.bias
      ] : [
        i2.bias[0],
        i2.bias[1],
        i2.bias[2],
        i2.bias[3] ?? 0
      ];
      let s2 = t2.format === void 0 ? `RGBA` : t2.format, c2 = t2.tensorFormat !== void 0 && t2.tensorFormat !== void 0 ? t2.tensorFormat : `RGB`, l2 = n2 * r2, u2 = c2 === `RGBA` ? new Float32Array(l2 * 4) : new Float32Array(l2 * 3), d2 = 4, f2 = 0, p2 = 1, m2 = 2, h2 = 3, g2 = 0, _2 = l2, v2 = l2 * 2, y2 = -1;
      s2 === `RGB` && (d2 = 3, f2 = 0, p2 = 1, m2 = 2, h2 = -1), c2 === `RGBA` ? y2 = l2 * 3 : c2 === `RBG` ? (g2 = 0, v2 = l2, _2 = l2 * 2) : c2 === `BGR` && (v2 = 0, _2 = l2, g2 = l2 * 2);
      for (let t3 = 0; t3 < l2; t3++, f2 += d2, m2 += d2, p2 += d2, h2 += d2) u2[g2++] = (e2[f2] + o2[0]) / a2[0], u2[_2++] = (e2[p2] + o2[1]) / a2[1], u2[v2++] = (e2[m2] + o2[2]) / a2[2], y2 !== -1 && h2 !== -1 && (u2[y2++] = (e2[h2] + o2[3]) / a2[3]);
      return c2 === `RGBA` ? new me(`float32`, u2, [
        1,
        4,
        n2,
        r2
      ]) : new me(`float32`, u2, [
        1,
        3,
        n2,
        r2
      ]);
    }, O = async (e2, t2) => {
      let n2 = typeof HTMLImageElement < `u` && e2 instanceof HTMLImageElement, r2 = typeof ImageData < `u` && e2 instanceof ImageData, i2 = typeof ImageBitmap < `u` && e2 instanceof ImageBitmap, a2 = typeof e2 == `string`, o2, s2 = t2 ?? {}, c2 = () => {
        if (typeof document < `u`) return document.createElement(`canvas`);
        if (typeof OffscreenCanvas < `u`) return new OffscreenCanvas(1, 1);
        throw Error(`Canvas is not supported`);
      }, l2 = (e3) => typeof HTMLCanvasElement < `u` && e3 instanceof HTMLCanvasElement || e3 instanceof OffscreenCanvas ? e3.getContext(`2d`) : null;
      if (n2) {
        let n3 = c2();
        n3.width = e2.width, n3.height = e2.height;
        let r3 = l2(n3);
        if (r3 != null) {
          let n4 = e2.height, i3 = e2.width;
          if (t2 !== void 0 && t2.resizedHeight !== void 0 && t2.resizedWidth !== void 0 && (n4 = t2.resizedHeight, i3 = t2.resizedWidth), t2 !== void 0) {
            if (s2 = t2, t2.tensorFormat !== void 0) throw Error(`Image input config format must be RGBA for HTMLImageElement`);
            s2.tensorFormat = `RGBA`, s2.height = n4, s2.width = i3;
          } else s2.tensorFormat = `RGBA`, s2.height = n4, s2.width = i3;
          r3.drawImage(e2, 0, 0), o2 = r3.getImageData(0, 0, i3, n4).data;
        } else throw Error(`Can not access image data`);
      } else if (r2) {
        let n3, r3;
        if (t2 !== void 0 && t2.resizedWidth !== void 0 && t2.resizedHeight !== void 0 ? (n3 = t2.resizedHeight, r3 = t2.resizedWidth) : (n3 = e2.height, r3 = e2.width), t2 !== void 0 && (s2 = t2), s2.format = `RGBA`, s2.height = n3, s2.width = r3, t2 !== void 0) {
          let t3 = c2();
          t3.width = r3, t3.height = n3;
          let i3 = l2(t3);
          if (i3 != null) i3.putImageData(e2, 0, 0), o2 = i3.getImageData(0, 0, r3, n3).data;
          else throw Error(`Can not access image data`);
        } else o2 = e2.data;
      } else if (i2) {
        if (t2 === void 0) throw Error(`Please provide image config with format for Imagebitmap`);
        let n3 = c2();
        n3.width = e2.width, n3.height = e2.height;
        let r3 = l2(n3);
        if (r3 != null) {
          let t3 = e2.height, n4 = e2.width;
          return r3.drawImage(e2, 0, 0, n4, t3), o2 = r3.getImageData(0, 0, n4, t3).data, s2.height = t3, s2.width = n4, D(o2, s2);
        }
        throw Error(`Can not access image data`);
      } else {
        if (a2) return new Promise((t3, n3) => {
          let r3 = c2(), i3 = l2(r3);
          if (!e2 || !i3) return n3();
          let a3 = new Image();
          a3.crossOrigin = `Anonymous`, a3.src = e2, a3.onload = () => {
            r3.width = a3.width, r3.height = a3.height, i3.drawImage(a3, 0, 0, r3.width, r3.height);
            let e3 = i3.getImageData(0, 0, r3.width, r3.height);
            s2.height = r3.height, s2.width = r3.width, t3(D(e3.data, s2));
          };
        });
        throw Error(`Input data provided is not supported - aborted tensor creation`);
      }
      if (o2 !== void 0) return D(o2, s2);
      throw Error(`Input data provided is not supported - aborted tensor creation`);
    }, ne = (e2, t2) => {
      let { width: n2, height: r2, download: i2, dispose: a2 } = t2;
      return new me({
        location: `texture`,
        type: `float32`,
        texture: e2,
        dims: [
          1,
          r2,
          n2,
          4
        ],
        download: i2,
        dispose: a2
      });
    }, re = (e2, t2) => {
      let { dataType: n2, dims: r2, download: i2, dispose: a2 } = t2;
      return new me({
        location: `gpu-buffer`,
        type: n2 ?? `float32`,
        gpuBuffer: e2,
        dims: r2,
        download: i2,
        dispose: a2
      });
    }, ie = (e2, t2) => {
      let { dataType: n2, dims: r2, download: i2, dispose: a2 } = t2;
      return new me({
        location: `ml-tensor`,
        type: n2 ?? `float32`,
        mlTensor: e2,
        dims: r2,
        download: i2,
        dispose: a2
      });
    }, ae = (e2, t2, n2) => new me({
      location: `cpu-pinned`,
      type: e2,
      data: t2,
      dims: n2 ?? [
        t2.length
      ]
    });
  }), k, se, ce, le, ue = c(() => {
    k = /* @__PURE__ */ new Map([
      [
        `float32`,
        Float32Array
      ],
      [
        `uint8`,
        Uint8Array
      ],
      [
        `int8`,
        Int8Array
      ],
      [
        `uint16`,
        Uint16Array
      ],
      [
        `int16`,
        Int16Array
      ],
      [
        `int32`,
        Int32Array
      ],
      [
        `bool`,
        Uint8Array
      ],
      [
        `float64`,
        Float64Array
      ],
      [
        `uint32`,
        Uint32Array
      ],
      [
        `int4`,
        Uint8Array
      ],
      [
        `uint4`,
        Uint8Array
      ]
    ]), se = /* @__PURE__ */ new Map([
      [
        Float32Array,
        `float32`
      ],
      [
        Uint8Array,
        `uint8`
      ],
      [
        Int8Array,
        `int8`
      ],
      [
        Uint16Array,
        `uint16`
      ],
      [
        Int16Array,
        `int16`
      ],
      [
        Int32Array,
        `int32`
      ],
      [
        Float64Array,
        `float64`
      ],
      [
        Uint32Array,
        `uint32`
      ]
    ]), ce = false, le = () => {
      if (!ce) {
        ce = true;
        let e2 = typeof BigInt64Array < `u` && BigInt64Array.from, t2 = typeof BigUint64Array < `u` && BigUint64Array.from, n2 = globalThis.Float16Array, r2 = typeof n2 < `u` && n2.from;
        e2 && (k.set(`int64`, BigInt64Array), se.set(BigInt64Array, `int64`)), t2 && (k.set(`uint64`, BigUint64Array), se.set(BigUint64Array, `uint64`)), r2 ? (k.set(`float16`, n2), se.set(n2, `float16`)) : k.set(`float16`, Uint16Array);
      }
    };
  }), de, fe, pe = c(() => {
    he(), de = (e2) => {
      let t2 = 1;
      for (let n2 = 0; n2 < e2.length; n2++) {
        let r2 = e2[n2];
        if (typeof r2 != `number` || !Number.isSafeInteger(r2)) throw TypeError(`dims[${n2}] must be an integer, got: ${r2}`);
        if (r2 < 0) throw RangeError(`dims[${n2}] must be a non-negative integer, got: ${r2}`);
        t2 *= r2;
      }
      return t2;
    }, fe = (e2, t2) => {
      switch (e2.location) {
        case `cpu`:
          return new me(e2.type, e2.data, t2);
        case `cpu-pinned`:
          return new me({
            location: `cpu-pinned`,
            data: e2.data,
            type: e2.type,
            dims: t2
          });
        case `texture`:
          return new me({
            location: `texture`,
            texture: e2.texture,
            type: e2.type,
            dims: t2
          });
        case `gpu-buffer`:
          return new me({
            location: `gpu-buffer`,
            gpuBuffer: e2.gpuBuffer,
            type: e2.type,
            dims: t2
          });
        case `ml-tensor`:
          return new me({
            location: `ml-tensor`,
            mlTensor: e2.mlTensor,
            type: e2.type,
            dims: t2
          });
        default:
          throw Error(`tensorReshape: tensor location ${e2.location} is not supported`);
      }
    };
  }), me, he = c(() => {
    te(), oe(), ue(), pe(), me = class {
      constructor(e2, t2, n2) {
        le();
        let r2, i2;
        if (typeof e2 == `object` && `location` in e2) switch (this.dataLocation = e2.location, r2 = e2.type, i2 = e2.dims, e2.location) {
          case `cpu-pinned`: {
            let t3 = k.get(r2);
            if (!t3) throw TypeError(`unsupported type "${r2}" to create tensor from pinned buffer`);
            if (!(e2.data instanceof t3)) throw TypeError(`buffer should be of type ${t3.name}`);
            this.cpuData = e2.data;
            break;
          }
          case `texture`:
            if (r2 !== `float32`) throw TypeError(`unsupported type "${r2}" to create tensor from texture`);
            this.gpuTextureData = e2.texture, this.downloader = e2.download, this.disposer = e2.dispose;
            break;
          case `gpu-buffer`:
            if (r2 !== `float32` && r2 !== `float16` && r2 !== `int32` && r2 !== `int64` && r2 !== `uint32` && r2 !== `uint8` && r2 !== `bool` && r2 !== `uint4` && r2 !== `int4`) throw TypeError(`unsupported type "${r2}" to create tensor from gpu buffer`);
            this.gpuBufferData = e2.gpuBuffer, this.downloader = e2.download, this.disposer = e2.dispose;
            break;
          case `ml-tensor`:
            if (r2 !== `float32` && r2 !== `float16` && r2 !== `int32` && r2 !== `int64` && r2 !== `uint32` && r2 !== `uint64` && r2 !== `int8` && r2 !== `uint8` && r2 !== `bool` && r2 !== `uint4` && r2 !== `int4`) throw TypeError(`unsupported type "${r2}" to create tensor from MLTensor`);
            this.mlTensorData = e2.mlTensor, this.downloader = e2.download, this.disposer = e2.dispose;
            break;
          default:
            throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`);
        }
        else {
          let a3, o2;
          if (typeof e2 == `string`) {
            if (r2 = e2, o2 = n2, e2 === `string`) {
              if (!Array.isArray(t2)) throw TypeError(`A string tensor's data must be a string array.`);
              a3 = t2;
            } else {
              let n3 = k.get(e2);
              if (n3 === void 0) throw TypeError(`Unsupported tensor type: ${e2}.`);
              if (Array.isArray(t2)) {
                if (e2 === `float16` && n3 === Uint16Array || e2 === `uint4` || e2 === `int4`) throw TypeError(`Creating a ${e2} tensor from number array is not supported. Please use ${n3.name} as data.`);
                a3 = e2 === `uint64` || e2 === `int64` ? n3.from(t2, BigInt) : n3.from(t2);
              } else if (t2 instanceof n3) a3 = t2;
              else if (t2 instanceof Uint8ClampedArray) {
                if (e2 === `uint8`) a3 = Uint8Array.from(t2);
                else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);
              } else if (e2 === `float16` && t2 instanceof Uint16Array && n3 !== Uint16Array) a3 = new globalThis.Float16Array(t2.buffer, t2.byteOffset, t2.length);
              else throw TypeError(`A ${r2} tensor's data must be type of ${n3}`);
            }
          } else if (o2 = t2, Array.isArray(e2)) {
            if (e2.length === 0) throw TypeError(`Tensor type cannot be inferred from an empty array.`);
            let t3 = typeof e2[0];
            if (t3 === `string`) r2 = `string`, a3 = e2;
            else if (t3 === `boolean`) r2 = `bool`, a3 = Uint8Array.from(e2);
            else throw TypeError(`Invalid element type of data array: ${t3}.`);
          } else if (e2 instanceof Uint8ClampedArray) r2 = `uint8`, a3 = Uint8Array.from(e2);
          else {
            let t3 = se.get(e2.constructor);
            if (t3 === void 0) throw TypeError(`Unsupported type for tensor data: ${e2.constructor}.`);
            r2 = t3, a3 = e2;
          }
          if (o2 === void 0) o2 = [
            a3.length
          ];
          else if (!Array.isArray(o2)) throw TypeError(`A tensor's dims must be a number array`);
          i2 = o2, this.cpuData = a3, this.dataLocation = `cpu`;
        }
        let a2 = de(i2);
        if (this.cpuData && a2 !== this.cpuData.length && (r2 !== `uint4` && r2 !== `int4` || Math.ceil(a2 / 2) !== this.cpuData.length)) throw Error(`Tensor's size(${a2}) does not match data length(${this.cpuData.length}).`);
        this.type = r2, this.dims = i2, this.size = a2;
      }
      static async fromImage(e2, t2) {
        return O(e2, t2);
      }
      static fromTexture(e2, t2) {
        return ne(e2, t2);
      }
      static fromGpuBuffer(e2, t2) {
        return re(e2, t2);
      }
      static fromMLTensor(e2, t2) {
        return ie(e2, t2);
      }
      static fromPinnedBuffer(e2, t2, n2) {
        return ae(e2, t2, n2);
      }
      toDataURL(e2) {
        return E(this, e2);
      }
      toImageData(e2) {
        return ee(this, e2);
      }
      get data() {
        if (this.ensureValid(), !this.cpuData) throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");
        return this.cpuData;
      }
      get location() {
        return this.dataLocation;
      }
      get texture() {
        if (this.ensureValid(), !this.gpuTextureData) throw Error(`The data is not stored as a WebGL texture.`);
        return this.gpuTextureData;
      }
      get gpuBuffer() {
        if (this.ensureValid(), !this.gpuBufferData) throw Error(`The data is not stored as a WebGPU buffer.`);
        return this.gpuBufferData;
      }
      get mlTensor() {
        if (this.ensureValid(), !this.mlTensorData) throw Error(`The data is not stored as a WebNN MLTensor.`);
        return this.mlTensorData;
      }
      async getData(e2) {
        switch (this.ensureValid(), this.dataLocation) {
          case `cpu`:
          case `cpu-pinned`:
            return this.data;
          case `texture`:
          case `gpu-buffer`:
          case `ml-tensor`:
            if (!this.downloader) throw Error(`The current tensor is not created with a specified data downloader.`);
            if (this.isDownloading) throw Error(`The current tensor is being downloaded.`);
            try {
              this.isDownloading = true;
              let t2 = await this.downloader();
              return this.downloader = void 0, this.dataLocation = `cpu`, this.cpuData = t2, e2 && this.disposer && (this.disposer(), this.disposer = void 0), t2;
            } finally {
              this.isDownloading = false;
            }
          default:
            throw Error(`cannot get data from location: ${this.dataLocation}`);
        }
      }
      dispose() {
        if (this.isDownloading) throw Error(`The current tensor is being downloaded.`);
        this.disposer && (this.disposer = (this.disposer(), void 0)), this.cpuData = void 0, this.gpuTextureData = void 0, this.gpuBufferData = void 0, this.mlTensorData = void 0, this.downloader = void 0, this.isDownloading = void 0, this.dataLocation = `none`;
      }
      ensureValid() {
        if (this.dataLocation === `none`) throw Error(`The tensor is disposed.`);
      }
      reshape(e2) {
        if (this.ensureValid(), this.downloader || this.disposer) throw Error(`Cannot reshape a tensor that owns GPU resource.`);
        return fe(this, e2);
      }
    };
  }), ge, _e = c(() => {
    he(), ge = me;
  }), ve, ye, be, xe, Se, Ce, we = c(() => {
    C(), ve = (e2, t2) => {
      (typeof S.trace > `u` ? !S.wasm.trace : !S.trace) || console.timeStamp(`${e2}::ORT::${t2}`);
    }, ye = (e2, t2) => {
      var _a3;
      let n2 = ((_a3 = Error().stack) == null ? void 0 : _a3.split(/\r\n|\r|\n/g)) || [], r2 = false;
      for (let i2 = 0; i2 < n2.length; i2++) {
        if (r2 && !n2[i2].includes(`TRACE_FUNC`)) {
          let r3 = `FUNC_${e2}::${n2[i2].trim().split(` `)[1]}`;
          t2 && (r3 += `::${t2}`), ve(`CPU`, r3);
          return;
        }
        n2[i2].includes(`TRACE_FUNC`) && (r2 = true);
      }
    }, be = (e2) => {
      (typeof S.trace > `u` ? !S.wasm.trace : !S.trace) || ye(`BEGIN`, e2);
    }, xe = (e2) => {
      (typeof S.trace > `u` ? !S.wasm.trace : !S.trace) || ye(`END`, e2);
    }, Se = (e2) => {
      (typeof S.trace > `u` ? !S.wasm.trace : !S.trace) || console.time(`ORT::${e2}`);
    }, Ce = (e2) => {
      (typeof S.trace > `u` ? !S.wasm.trace : !S.trace) || console.timeEnd(`ORT::${e2}`);
    };
  }), Te, Ee = c(() => {
    _(), _e(), we(), Te = class e2 {
      constructor(e3) {
        this.handler = e3;
      }
      async run(e3, t2, n2) {
        be(), Se(`InferenceSession.run`);
        let r2 = {}, i2 = {};
        if (typeof e3 != `object` || !e3 || e3 instanceof ge || Array.isArray(e3)) throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);
        let a2 = true;
        if (typeof t2 == `object`) {
          if (t2 === null) throw TypeError(`Unexpected argument[1]: cannot be null.`);
          if (t2 instanceof ge) throw TypeError(`'fetches' cannot be a Tensor`);
          if (Array.isArray(t2)) {
            if (t2.length === 0) throw TypeError(`'fetches' cannot be an empty array.`);
            a2 = false;
            for (let e4 of t2) {
              if (typeof e4 != `string`) throw TypeError(`'fetches' must be a string array or an object.`);
              if (this.outputNames.indexOf(e4) === -1) throw RangeError(`'fetches' contains invalid output name: ${e4}.`);
              r2[e4] = null;
            }
            if (typeof n2 == `object` && n2) i2 = n2;
            else if (typeof n2 < `u`) throw TypeError(`'options' must be an object.`);
          } else {
            let e4 = false, o3 = Object.getOwnPropertyNames(t2);
            for (let n3 of this.outputNames) if (o3.indexOf(n3) !== -1) {
              let i3 = t2[n3];
              (i3 === null || i3 instanceof ge) && (e4 = true, a2 = false, r2[n3] = i3);
            }
            if (e4) {
              if (typeof n2 == `object` && n2) i2 = n2;
              else if (typeof n2 < `u`) throw TypeError(`'options' must be an object.`);
            } else i2 = t2;
          }
        } else if (typeof t2 < `u`) throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);
        for (let t3 of this.inputNames) if (typeof e3[t3] > `u`) throw Error(`input '${t3}' is missing in 'feeds'.`);
        if (a2) for (let e4 of this.outputNames) r2[e4] = null;
        let o2 = await this.handler.run(e3, r2, i2), s2 = {};
        for (let e4 in o2) if (Object.hasOwnProperty.call(o2, e4)) {
          let t3 = o2[e4];
          s2[e4] = t3 instanceof ge ? t3 : new ge(t3.type, t3.data, t3.dims);
        }
        return Ce(`InferenceSession.run`), xe(), s2;
      }
      async release() {
        return this.handler.dispose();
      }
      static async create(t2, n2, r2, i2) {
        be(), Se(`InferenceSession.create`);
        let a2, o2 = {};
        if (typeof t2 == `string`) {
          if (a2 = t2, typeof n2 == `object` && n2) o2 = n2;
          else if (typeof n2 < `u`) throw TypeError(`'options' must be an object.`);
        } else if (t2 instanceof Uint8Array) {
          if (a2 = t2, typeof n2 == `object` && n2) o2 = n2;
          else if (typeof n2 < `u`) throw TypeError(`'options' must be an object.`);
        } else if (t2 instanceof ArrayBuffer || typeof SharedArrayBuffer < `u` && t2 instanceof SharedArrayBuffer) {
          let e3 = t2, s3 = 0, c3 = t2.byteLength;
          if (typeof n2 == `object` && n2) o2 = n2;
          else if (typeof n2 == `number`) {
            if (s3 = n2, !Number.isSafeInteger(s3)) throw RangeError(`'byteOffset' must be an integer.`);
            if (s3 < 0 || s3 >= e3.byteLength) throw RangeError(`'byteOffset' is out of range [0, ${e3.byteLength}).`);
            if (c3 = t2.byteLength - s3, typeof r2 == `number`) {
              if (c3 = r2, !Number.isSafeInteger(c3)) throw RangeError(`'byteLength' must be an integer.`);
              if (c3 <= 0 || s3 + c3 > e3.byteLength) throw RangeError(`'byteLength' is out of range (0, ${e3.byteLength - s3}].`);
              if (typeof i2 == `object` && i2) o2 = i2;
              else if (typeof i2 < `u`) throw TypeError(`'options' must be an object.`);
            } else if (typeof r2 < `u`) throw TypeError(`'byteLength' must be a number.`);
          } else if (typeof n2 < `u`) throw TypeError(`'options' must be an object.`);
          a2 = new Uint8Array(e3, s3, c3);
        } else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);
        let [s2, c2] = await g(o2), l2 = await s2.createInferenceSessionHandler(a2, c2);
        return Ce(`InferenceSession.create`), xe(), new e2(l2);
      }
      startProfiling() {
        this.handler.startProfiling();
      }
      endProfiling() {
        this.handler.endProfiling();
      }
      get inputNames() {
        return this.handler.inputNames;
      }
      get outputNames() {
        return this.handler.outputNames;
      }
      get inputMetadata() {
        return this.handler.inputMetadata;
      }
      get outputMetadata() {
        return this.handler.outputMetadata;
      }
    };
  }), De, Oe = c(() => {
    Ee(), De = Te;
  }), ke = c(() => {
  }), Ae = c(() => {
  }), je = c(() => {
  }), Me = c(() => {
  }), Ne = {};
  l(Ne, {
    InferenceSession: () => De,
    TRACE: () => ve,
    TRACE_EVENT_BEGIN: () => Se,
    TRACE_EVENT_END: () => Ce,
    TRACE_FUNC_BEGIN: () => be,
    TRACE_FUNC_END: () => xe,
    Tensor: () => ge,
    env: () => w,
    registerBackend: () => m
  });
  var Pe = c(() => {
    v(), T(), Oe(), _e(), ke(), Ae(), we(), je(), Me();
  }), Fe = c(() => {
  }), Ie = {};
  l(Ie, {
    default: () => ze
  });
  var Le, Re, ze, Be = c(() => {
    var _a3;
    On(), gt(), ot(), Le = `ort-wasm-proxy-worker`, Re = ((_a3 = globalThis.self) == null ? void 0 : _a3.name) === Le, Re && (self.onmessage = (e2) => {
      let { type: t2, in: n2 } = e2.data;
      try {
        switch (t2) {
          case `init-wasm`:
            mt(n2.wasm).then(() => {
              gn(n2).then(() => {
                postMessage({
                  type: t2
                });
              }, (e3) => {
                postMessage({
                  type: t2,
                  err: e3
                });
              });
            }, (e3) => {
              postMessage({
                type: t2,
                err: e3
              });
            });
            break;
          case `init-ep`: {
            let { epName: e3, env: r2 } = n2;
            _n(r2, e3).then(() => {
              postMessage({
                type: t2
              });
            }, (e4) => {
              postMessage({
                type: t2,
                err: e4
              });
            });
            break;
          }
          case `copy-from`: {
            let { buffer: e3 } = n2, r2 = xn(e3);
            postMessage({
              type: t2,
              out: r2
            });
            break;
          }
          case `create`: {
            let { model: e3, options: r2 } = n2;
            Sn(e3, r2).then((e4) => {
              postMessage({
                type: t2,
                out: e4
              });
            }, (e4) => {
              postMessage({
                type: t2,
                err: e4
              });
            });
            break;
          }
          case `release`:
            Cn(n2), postMessage({
              type: t2
            });
            break;
          case `run`: {
            let { sessionId: e3, inputIndices: r2, inputs: i2, outputIndices: a2, options: o2 } = n2;
            Tn(e3, r2, i2, a2, Array(a2.length).fill(null), o2).then((e4) => {
              e4.some((e5) => e5[3] !== `cpu`) ? postMessage({
                type: t2,
                err: `Proxy does not support non-cpu tensor location.`
              }) : postMessage({
                type: t2,
                out: e4
              }, Dn([
                ...i2,
                ...e4
              ]));
            }, (e4) => {
              postMessage({
                type: t2,
                err: e4
              });
            });
            break;
          }
          case `end-profiling`:
            En(n2), postMessage({
              type: t2
            });
        }
      } catch (e3) {
        postMessage({
          type: t2,
          err: e3
        });
      }
    }), ze = Re ? null : (e2) => new Worker(e2 ?? Ye, {
      type: `module`,
      name: Le
    });
  }), Ve = {};
  l(Ve, {
    default: () => Ue
  });
  async function He(e2 = {}) {
    var _a4, _b3;
    var t2 = e2, n2 = !!globalThis.window, r2 = !!globalThis.WorkerGlobalScope, i2 = r2 && ((_a4 = self.name) == null ? void 0 : _a4.startsWith(`em-pthread`));
    t2.mountExternalData = (e3, n3) => {
      e3.startsWith(`./`) && (e3 = e3.substring(2)), (t2.ed || (t2.ed = /* @__PURE__ */ new Map())).set(e3, n3);
    }, t2.unmountExternalData = () => {
      delete t2.ed, delete t2.Te, delete t2.Se, delete t2.Ue;
    }, globalThis.SharedArrayBuffer ?? new WebAssembly.Memory({
      initial: 0,
      maximum: 0,
      shared: true
    }).buffer.constructor;
    let a2 = () => {
      let e3 = (e4) => (...t3) => {
        let n3 = ln2;
        return t3 = e4(...t3), ln2 == n3 ? t3 : new Promise((e5, t4) => {
          gn2 = {
            resolve: e5,
            reject: t4
          };
        });
      };
      (() => {
        for (let n3 of [
          `_OrtAppendExecutionProvider`,
          `_OrtCreateSession`,
          `_OrtRun`,
          `_OrtRunWithBinding`,
          `_OrtBindInput`
        ]) t2[n3] = e3(t2[n3]);
      })(), typeof jsepRunAsync < `u` && (t2._OrtRun = jsepRunAsync(t2._OrtRun), t2._OrtRunWithBinding = jsepRunAsync(t2._OrtRunWithBinding)), a2 = void 0;
    };
    t2.asyncInit = () => {
      a2 == null ? void 0 : a2();
    };
    var o2, s2, c2 = (e3, t3) => {
      throw t3;
    }, l2 = import.meta.url, u2 = ``;
    if (n2 || r2) {
      try {
        u2 = new URL(`.`, l2).href;
      } catch {
      }
      r2 && (s2 = (e3) => {
        var t3 = new XMLHttpRequest();
        return t3.open(`GET`, e3, false), t3.responseType = `arraybuffer`, t3.send(null), new Uint8Array(t3.response);
      }), o2 = async (e3) => {
        if (S2(e3)) return new Promise((t4, n3) => {
          var r3 = new XMLHttpRequest();
          r3.open(`GET`, e3, true), r3.responseType = `arraybuffer`, r3.onload = () => {
            r3.status == 200 || r3.status == 0 && r3.response ? t4(r3.response) : n3(r3.status);
          }, r3.onerror = n3, r3.send(null);
        });
        var t3 = await fetch(e3, {
          credentials: `same-origin`
        });
        if (t3.ok) return t3.arrayBuffer();
        throw Error(t3.status + ` : ` + t3.url);
      };
    }
    var d2, f2, p2, m2, h2, g2, _2 = console.log.bind(console), v2 = console.error.bind(console), y2 = _2, b2 = v2, x2 = false, S2 = (e3) => e3.startsWith(`file://`);
    function C2() {
      je2.buffer != T2.buffer && se2();
    }
    if (i2) {
      let e3 = function(n3) {
        try {
          var r3 = n3.data, i3 = r3.$c;
          if (i3 === `load`) {
            let n4 = [];
            self.onmessage = (e4) => n4.push(e4), g2 = () => {
              postMessage({
                $c: `loaded`
              });
              for (let t3 of n4) e3(t3);
              self.onmessage = e3;
            };
            for (let e4 of r3.ue) t2[e4] && !t2[e4].proxy || (t2[e4] = (...t3) => {
              postMessage({
                $c: `callHandler`,
                te: e4,
                args: t3
              });
            }, e4 == `print` && (y2 = t2[e4]), e4 == `printErr` && (b2 = t2[e4]));
            je2 = r3.Me, se2(), f2 = r3.Ne, de2(), os2();
          } else if (i3 === `run`) {
            (function(e4) {
              var t3 = (C2(), O2)[e4 + 52 >>> 2 >>> 0];
              e4 = (C2(), O2)[e4 + 56 >>> 2 >>> 0], Sa2(t3, t3 - e4), I2(t3);
            })(r3.Xc), pa2(r3.Xc, 0, 0, 1, 0, 0), Oe2(), Zt2(r3.Xc), w2 || (w2 = (Ui2(), true));
            try {
              Me2(r3.ze, r3.kd);
            } catch (e4) {
              if (e4 != `unwind`) throw e4;
            }
          } else r3.target !== `setimmediate` && (i3 === `checkMailbox` ? w2 && Qt2() : i3 && (b2(`worker: received unknown command ${i3}`), b2(r3)));
        } catch (e4) {
          throw ma2(), e4;
        }
      };
      var w2 = false;
      self.onunhandledrejection = (e4) => {
        throw e4.reason || e4;
      }, self.onmessage = e3;
    }
    var T2, E2, ee2, te2, D2, O2, ne2, re2, ie2, ae2, oe2, k2 = false;
    function se2() {
      var e3 = je2.buffer;
      t2.HEAP8 = T2 = new Int8Array(e3), ee2 = new Int16Array(e3), t2.HEAPU8 = E2 = new Uint8Array(e3), te2 = new Uint16Array(e3), t2.HEAP32 = D2 = new Int32Array(e3), t2.HEAPU32 = O2 = new Uint32Array(e3), ne2 = new Float32Array(e3), re2 = new Float64Array(e3), ie2 = new BigInt64Array(e3), ae2 = new BigUint64Array(e3);
    }
    function ce2() {
      k2 = true, i2 ? g2() : vo2.hc();
    }
    function le2(e3) {
      throw b2(e3 = `Aborted(` + e3 + `)`), x2 = true, e3 = new WebAssembly.RuntimeError(e3 + `. Build with -sASSERTIONS for more info.`), h2 == null ? void 0 : h2(e3), e3;
    }
    function ue2() {
      return {
        a: {
          qa: xo2,
          f: Ie2,
          K: Re2,
          k: Ue2,
          p: We2,
          l: Ge2,
          fa: Ke2,
          b: qe2,
          da: Je2,
          gc: Xe2,
          q: Ze2,
          ea: nt2,
          Ua: rt2,
          cc: it2,
          ec: at2,
          Va: ot2,
          Sa: st2,
          La: ct2,
          Ra: lt2,
          oa: ut2,
          dc: dt2,
          ac: ft2,
          Ta: pt2,
          bc: mt2,
          _a: ht2,
          Ba: St2,
          Xb: Ct2,
          Vb: jt2,
          Aa: Nt2,
          O: Pt2,
          J: Ft2,
          Wb: Rt2,
          ka: Kt2,
          Yb: qt2,
          Oa: Jt2,
          _b: $t2,
          Ea: tn2,
          Tb: nn2,
          Ca: rn2,
          Na: Zt2,
          Xa: an2,
          U: yn2,
          n: En2,
          c: Et2,
          qb: Dn2,
          w: On2,
          N: kn2,
          A: An2,
          j: jn2,
          o: Mn2,
          rb: Nn2,
          H: Pn2,
          T: Fn2,
          g: In2,
          u: Ln2,
          m: Rn2,
          i: zn2,
          Ia: Bn2,
          Ja: Wn2,
          Ka: Gn2,
          Ga: Kn2,
          Ha: qn2,
          Ub: Xn2,
          ab: Zn2,
          Za: er2,
          Z: rr2,
          pb: ir2,
          Da: ar2,
          Ya: Qn2,
          X: or2,
          Wa: sr2,
          $b: cr2,
          G: Yn2,
          db: lr2,
          _: ur2,
          pa: gr2,
          Zb: _r3,
          cb: hr2,
          bb: vr2,
          lb: Gr2,
          z: Kr2,
          sa: qr2,
          ra: Jr2,
          nb: Yr2,
          Y: Xr2,
          v: Zr2,
          kb: Qr2,
          jb: N2,
          ib: $r2,
          mb: ei2,
          gb: ti2,
          fb: ni2,
          eb: ri2,
          Pa: si2,
          Qa: ci2,
          fc: Se2,
          W: li2,
          Fa: ui2,
          ma: P2,
          Ma: di2,
          la: pi2,
          Fb: is2,
          va: Qo2,
          Gb: rs2,
          wa: Zo2,
          E: Ro2,
          e: To2,
          r: Co2,
          x: So2,
          C: Po2,
          Ib: Jo2,
          ca: qo2,
          D: Oo2,
          xa: Yo2,
          aa: $o2,
          ha: Ko2,
          Jb: Go2,
          Kb: Wo2,
          za: Bo2,
          Lb: Ho2,
          ya: Uo2,
          Mb: Vo2,
          ua: ns2,
          ba: Xo2,
          d: wo2,
          B: Do2,
          s: Eo2,
          Eb: as2,
          t: ko2,
          y: Io2,
          F: R2,
          I: Ao2,
          L: Lo2,
          Nb: zo2,
          R: es2,
          ia: No2,
          $: ts2,
          Pb: Mo2,
          Rb: jo2,
          Ob: Fo2,
          h: mi2,
          a: je2,
          $a: be2,
          Hb: hi2,
          V: gi2,
          M: _i3,
          na: vi2,
          Db: yi2,
          ja: bi2,
          S: xi2,
          Ab: Si2,
          Bb: Ci2,
          vb: wi2,
          wb: Ti2,
          P: Ei2,
          xb: Di2,
          yb: Oi2,
          ta: ki2,
          Sb: Ai2,
          ob: ji2,
          Q: Mi2,
          hb: Ni2,
          Cb: Pi2,
          sb: Fi2,
          tb: Li2,
          ub: Ri2,
          ga: zi2,
          zb: Bi2,
          Qb: Vi2
        }
      };
    }
    async function de2() {
      function e3(e4, n4) {
        var r4 = vo2 = e4.exports;
        e4 = {};
        for (let [t3, n5] of Object.entries(r4)) typeof n5 == `function` ? (r4 = sn2(n5), e4[t3] = r4) : e4[t3] = n5;
        return vo2 = e4, vo2 = (function() {
          var e5 = vo2, t3 = (e6) => (t4) => e6(t4) >>> 0, n5 = (e6) => () => e6() >>> 0;
          return (e5 = Object.assign({}, e5)).ic = t3(e5.ic), e5.Nc = n5(e5.Nc), e5.Pc = t3(e5.Pc), e5.Bd = /* @__PURE__ */ ((e6) => (t4, n6) => e6(t4, n6) >>> 0)(e5.Bd), e5.Gd = t3(e5.Gd), e5.Hd = n5(e5.Hd), e5.Ld = t3(e5.Ld), e5;
        })(), Te2.push(vo2.sd), Hi2 = (e4 = vo2).ic, Ui2 = e4.jc, t2._OrtInit = e4.kc, t2._OrtGetLastError = e4.lc, t2._OrtCreateSessionOptions = e4.mc, t2._OrtAppendExecutionProvider = e4.nc, t2._OrtAddFreeDimensionOverride = e4.oc, t2._OrtAddSessionConfigEntry = e4.pc, t2._OrtReleaseSessionOptions = e4.qc, t2._OrtCreateSession = e4.rc, t2._OrtReleaseSession = e4.sc, t2._OrtGetInputOutputCount = e4.tc, t2._OrtGetInputOutputMetadata = e4.uc, t2._OrtFree = e4.vc, t2._OrtCreateTensor = e4.wc, t2._OrtGetTensorData = e4.xc, t2._OrtReleaseTensor = e4.yc, t2._OrtCreateRunOptions = e4.zc, t2._OrtAddRunConfigEntry = e4.Ac, t2._OrtReleaseRunOptions = e4.Bc, t2._OrtCreateBinding = e4.Cc, t2._OrtBindInput = e4.Dc, t2._OrtBindOutput = e4.Ec, t2._OrtClearBoundOutputs = e4.Fc, t2._OrtReleaseBinding = e4.Gc, t2._OrtRunWithBinding = e4.Hc, t2._OrtRun = e4.Ic, t2._OrtEndProfiling = e4.Jc, Wi2 = t2._OrtCreateWebGpuInstance = e4.Kc, t2._wgpuCreateInstance = e4.Lc, Gi2 = t2._OrtGetWebGpuDevice = e4.Mc, Ki2 = e4.Nc, qi2 = t2._free = e4.Oc, Ji2 = t2._malloc = e4.Pc, Yi2 = t2._wgpuBufferRelease = e4.Qc, Xi2 = e4.Rc, Zi2 = e4.Sc, Qi2 = e4.Tc, $i2 = e4.Uc, ea2 = e4.Vc, ta2 = e4.Yc, na2 = e4.Zc, ra2 = e4.hd, ia2 = e4.id, aa2 = e4.jd, oa2 = e4.ld, sa2 = e4.md, ca2 = e4.nd, la2 = e4.od, ua2 = e4.pd, da2 = e4.qd, fa2 = e4.rd, pa2 = e4.ud, ma2 = e4.vd, ha2 = e4.wd, ga2 = e4.xd, _a3 = e4.yd, va2 = e4.zd, ya2 = e4.Ad, ba2 = e4.Bd, F2 = e4.Cd, xa2 = e4.Dd, Sa2 = e4.Ed, I2 = e4.Fd, Ca2 = e4.Gd, L2 = e4.Hd, wa2 = e4.Id, Ta2 = e4.Jd, Ea2 = e4.Kd, Da2 = e4.Ld, Oa2 = e4.Md, ka2 = e4.Nd, Aa2 = e4.Od, ja2 = e4.Pd, Ma2 = e4.Qd, Na2 = e4.Rd, Pa2 = e4.Sd, Fa2 = e4.Td, Ia2 = e4.Ud, La2 = e4.Vd, Ra2 = e4.Wd, za2 = e4.Xd, Ba2 = e4.Yd, Va2 = e4.Zd, Ha2 = e4._d, Ua2 = e4.$d, Wa2 = e4.ae, Ga2 = e4.be, Ka2 = e4.ce, qa2 = e4.de, Ja2 = e4.fe, Ya2 = e4.ge, Xa2 = e4.he, Za2 = e4.ie, Qa2 = e4.je, $a2 = e4.ke, eo2 = e4.le, to2 = e4.me, no2 = e4.Ae, ro2 = e4.Be, io2 = e4.Ce, ao2 = e4.De, oo2 = e4.Ee, so2 = e4.Fe, co2 = e4.Ge, lo2 = e4.He, uo2 = e4.Ie, fo2 = e4.Je, po2 = e4.Ke, mo2 = e4.nf, ho2 = e4.of, go2 = e4.pf, _o3 = e4.qf, f2 = n4, vo2;
      }
      var n3, r3 = ue2();
      return t2.instantiateWasm ? new Promise((n4) => {
        t2.instantiateWasm(r3, (t3, r4) => {
          n4(e3(t3, r4));
        });
      }) : i2 ? e3(new WebAssembly.Instance(f2, ue2()), f2) : (oe2 ?? (oe2 = t2.locateFile ? t2.locateFile ? t2.locateFile(`ort-wasm-simd-threaded.asyncify.wasm`, u2) : u2 + `ort-wasm-simd-threaded.asyncify.wasm` : new URL(`/vcad/v2026.11.12-7ae7e5c/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, `` + import.meta.url).href), n3 = await (async function(e4) {
        var t3 = oe2;
        if (!d2 && !S2(t3)) try {
          var n4 = fetch(t3, {
            credentials: `same-origin`
          });
          return await WebAssembly.instantiateStreaming(n4, e4);
        } catch (e5) {
          b2(`wasm streaming compile failed: ${e5}`), b2(`falling back to ArrayBuffer instantiation`);
        }
        return (async function(e5, t4) {
          try {
            var n5 = await (async function(e6) {
              if (!d2) try {
                var t5 = await o2(e6);
                return new Uint8Array(t5);
              } catch {
              }
              if (e6 == oe2 && d2) e6 = new Uint8Array(d2);
              else {
                if (!s2) throw `both async and sync fetching of the wasm failed`;
                e6 = s2(e6);
              }
              return e6;
            })(e5);
            return await WebAssembly.instantiate(n5, t4);
          } catch (e6) {
            b2(`failed to asynchronously prepare wasm: ${e6}`), le2(e6);
          }
        })(t3, e4);
      })(r3), e3(n3.instance, n3.module));
    }
    class fe2 {
      constructor(e3) {
        __publicField(this, "name", `ExitStatus`);
        this.message = `Program terminated with exit(${e3})`, this.status = e3;
      }
    }
    var pe2 = (e3) => {
      e3.terminate(), e3.onmessage = () => {
      };
    }, me2 = [], he2 = 0, ge2 = null, _e5 = (e3) => {
      Ce2.length == 0 && (Ae2(), ke2(Ce2[0]));
      var t3 = Ce2.pop();
      if (!t3) return 6;
      we2.push(t3), Ee2[e3.Xc] = t3, t3.Xc = e3.Xc;
      var n3 = {
        $c: `run`,
        ze: e3.ye,
        kd: e3.kd,
        Xc: e3.Xc
      };
      return t3.postMessage(n3, e3.oe), 0;
    }, ve2 = 0, ye2 = (e3, t3, ...n3) => {
      var r3, i3 = 16 * n3.length, a3 = L2(), o3 = Ca2(i3), s3 = o3 >>> 3;
      for (r3 of n3) typeof r3 == `bigint` ? ((C2(), ie2)[s3++ >>> 0] = 1n, (C2(), ie2)[s3++ >>> 0] = r3) : ((C2(), ie2)[s3++ >>> 0] = 0n, (C2(), re2)[s3++ >>> 0] = r3);
      return e3 = ha2(e3, 0, i3, o3, t3), I2(a3), e3;
    };
    function be2(e3) {
      if (i2) return ye2(0, 1, e3);
      if (p2 = e3, !(0 < ve2)) {
        for (var t3 of we2) pe2(t3);
        for (t3 of Ce2) pe2(t3);
        Ce2 = [], we2 = [], Ee2 = {}, x2 = true;
      }
      c2(0, new fe2(e3));
    }
    function xe2(e3) {
      if (i2) return ye2(1, 0, e3);
      Se2(e3);
    }
    var Se2 = (e3) => {
      if (p2 = e3, i2) throw xe2(e3), `unwind`;
      be2(e3);
    }, Ce2 = [], we2 = [], Te2 = [], Ee2 = {}, De2 = (e3) => {
      var t3 = e3.Xc;
      delete Ee2[t3], Ce2.push(e3), we2.splice(we2.indexOf(e3), 1), e3.Xc = 0, ga2(t3);
    };
    function Oe2() {
      Te2.forEach((e3) => e3());
    }
    var ke2 = (e3) => new Promise((n3) => {
      e3.onmessage = (r4) => {
        var i4 = r4.data;
        if (r4 = i4.$c, i4.gd && i4.gd != Ki2()) {
          var a3 = Ee2[i4.gd];
          a3 ? a3.postMessage(i4, i4.oe) : b2(`Internal error! Worker sent a message "${r4}" to target pthread ${i4.gd}, but that thread no longer exists!`);
        } else r4 === `checkMailbox` ? Qt2() : r4 === `spawnThread` ? _e5(i4) : r4 === `cleanupThread` ? Yt2(() => {
          De2(Ee2[i4.Le]);
        }) : r4 === `loaded` ? (e3.loaded = true, n3(e3)) : i4.target === `setimmediate` ? e3.postMessage(i4) : r4 === `uncaughtException` ? e3.onerror(i4.error) : r4 === `callHandler` ? t2[i4.te](...i4.args) : r4 && b2(`worker sent an unknown command ${r4}`);
      }, e3.onerror = (e4) => {
        throw b2(`worker sent an error! ${e4.filename}:${e4.lineno}: ${e4.message}`), e4;
      };
      var r3, i3 = [];
      for (r3 of []) t2.propertyIsEnumerable(r3) && i3.push(r3);
      e3.postMessage({
        $c: `load`,
        ue: i3,
        Me: je2,
        Ne: f2
      });
    });
    function Ae2() {
      var e3 = new Worker((() => {
        let e4 = URL;
        return import.meta.url > `file:` && import.meta.url < `file;` ? new e4(`ort.webgpu.bundle.min.mjs`, import.meta.url) : new URL(import.meta.url);
      })(), {
        type: `module`,
        workerData: `em-pthread`,
        name: `em-pthread`
      });
      Ce2.push(e3);
    }
    var je2, Me2 = (e3, t3) => {
      ve2 = 0, e3 = ka2(e3, t3), 0 < ve2 ? p2 = e3 : _a3(e3);
    }, Ne2 = [], Pe2 = 0, Fe2 = (e3) => -9007199254740992 > e3 || 9007199254740992 < e3 ? NaN : Number(e3);
    function Ie2(e3) {
      var t3 = new Ve2(e3 >>>= 0);
      return (C2(), T2)[t3.ad + 12 >>> 0] == 0 && (ze2(t3, true), Pe2--), Be2(t3, false), Ne2.push(t3), Da2(e3);
    }
    var Le2 = 0, Re2 = () => {
      F2(0, 0);
      var e3 = Ne2.pop();
      wa2(e3.td), Le2 = 0;
    };
    function ze2(e3, t3) {
      t3 = +!!t3, (C2(), T2)[e3.ad + 12 >>> 0] = t3;
    }
    function Be2(e3, t3) {
      t3 = +!!t3, (C2(), T2)[e3.ad + 13 >>> 0] = t3;
    }
    class Ve2 {
      constructor(e3) {
        this.td = e3, this.ad = e3 - 24;
      }
    }
    var He2 = (e3) => {
      var t3 = Le2;
      if (!t3) return xa2(0), 0;
      var n3 = new Ve2(t3);
      (C2(), O2)[n3.ad + 16 >>> 2 >>> 0] = t3;
      var r3 = (C2(), O2)[n3.ad + 4 >>> 2 >>> 0];
      if (!r3) return xa2(0), t3;
      for (var i3 of e3) {
        if (i3 === 0 || i3 === r3) break;
        if (Ea2(i3, r3, n3.ad + 16)) return xa2(i3), t3;
      }
      return xa2(r3), t3;
    };
    function Ue2() {
      return He2([]);
    }
    function We2(e3) {
      return He2([
        e3 >>> 0
      ]);
    }
    function Ge2(e3, t3, n3, r3) {
      return He2([
        e3 >>> 0,
        t3 >>> 0,
        n3 >>> 0,
        r3 >>> 0
      ]);
    }
    var Ke2 = () => {
      var e3 = Ne2.pop();
      e3 || le2(`no exception to throw`);
      var t3 = e3.td;
      throw (C2(), T2)[e3.ad + 13 >>> 0] == 0 && (Ne2.push(e3), Be2(e3, true), ze2(e3, false), Pe2++), Ta2(t3), Le2 = t3;
    };
    function qe2(e3, t3, n3) {
      var r3 = new Ve2(e3 >>>= 0);
      throw t3 >>>= 0, n3 >>>= 0, (C2(), O2)[r3.ad + 16 >>> 2 >>> 0] = 0, (C2(), O2)[r3.ad + 4 >>> 2 >>> 0] = t3, (C2(), O2)[r3.ad + 8 >>> 2 >>> 0] = n3, Ta2(e3), Pe2++, Le2 = e3;
    }
    var Je2 = () => Pe2;
    function Ye2(e3, t3, n3, r3) {
      return i2 ? ye2(2, 1, e3, t3, n3, r3) : Xe2(e3, t3, n3, r3);
    }
    function Xe2(e3, t3, n3, r3) {
      if (e3 >>>= 0, t3 >>>= 0, n3 >>>= 0, r3 >>>= 0, !globalThis.SharedArrayBuffer) return 6;
      var a3 = [];
      return i2 && a3.length === 0 ? Ye2(e3, t3, n3, r3) : (e3 = {
        ye: n3,
        Xc: e3,
        kd: r3,
        oe: a3
      }, i2 ? (e3.$c = `spawnThread`, postMessage(e3, a3), 0) : _e5(e3));
    }
    function Ze2(e3) {
      throw Le2 || (Le2 = e3 >>> 0), Le2;
    }
    var Qe2 = globalThis.TextDecoder && new TextDecoder(), $e2 = (e3, t3, n3, r3) => {
      if (n3 = t3 + n3, r3) return n3;
      for (; e3[t3] && !(t3 >= n3); ) ++t3;
      return t3;
    }, et2 = (e3, t3 = 0, n3, r3) => {
      if (16 < (n3 = $e2(e3, t3 >>>= 0, n3, r3)) - t3 && e3.buffer && Qe2) return Qe2.decode(e3.buffer instanceof ArrayBuffer ? e3.subarray(t3, n3) : e3.slice(t3, n3));
      for (r3 = ``; t3 < n3; ) {
        var i3 = e3[t3++];
        if (128 & i3) {
          var a3 = 63 & e3[t3++];
          if ((224 & i3) == 192) r3 += String.fromCharCode((31 & i3) << 6 | a3);
          else {
            var o3 = 63 & e3[t3++];
            65536 > (i3 = (240 & i3) == 224 ? (15 & i3) << 12 | a3 << 6 | o3 : (7 & i3) << 18 | a3 << 12 | o3 << 6 | 63 & e3[t3++]) ? r3 += String.fromCharCode(i3) : (i3 -= 65536, r3 += String.fromCharCode(55296 | i3 >> 10, 56320 | 1023 & i3));
          }
        } else r3 += String.fromCharCode(i3);
      }
      return r3;
    }, tt2 = (e3, t3, n3) => (e3 >>>= 0) ? et2((C2(), E2), e3, t3, n3) : ``;
    function nt2(e3, t3, n3) {
      return i2 ? ye2(3, 1, e3, t3, n3) : 0;
    }
    function rt2(e3, t3) {
      if (i2) return ye2(4, 1, e3, t3);
    }
    function it2(e3, t3) {
      if (i2) return ye2(5, 1, e3, t3);
    }
    function at2(e3, t3, n3) {
      if (i2) return ye2(6, 1, e3, t3, n3);
    }
    function ot2(e3, t3, n3) {
      return i2 ? ye2(7, 1, e3, t3, n3) : 0;
    }
    function st2(e3, t3) {
      if (i2) return ye2(8, 1, e3, t3);
    }
    function ct2(e3, t3, n3) {
      if (i2) return ye2(9, 1, e3, t3, n3);
    }
    function lt2(e3, t3, n3, r3) {
      if (i2) return ye2(10, 1, e3, t3, n3, r3);
    }
    function ut2(e3, t3, n3, r3) {
      if (i2) return ye2(11, 1, e3, t3, n3, r3);
    }
    function dt2(e3, t3, n3, r3) {
      if (i2) return ye2(12, 1, e3, t3, n3, r3);
    }
    function ft2(e3) {
      if (i2) return ye2(13, 1, e3);
    }
    function pt2(e3, t3) {
      if (i2) return ye2(14, 1, e3, t3);
    }
    function mt2(e3, t3, n3) {
      if (i2) return ye2(15, 1, e3, t3, n3);
    }
    var ht2 = () => le2(``), gt2 = (e3) => {
      e3 >>>= 0;
      for (var t3 = ``; ; ) {
        var n3 = (C2(), E2)[e3++ >>> 0];
        if (!n3) return t3;
        t3 += String.fromCharCode(n3);
      }
    }, _t4 = {}, vt2 = {}, A2 = {}, yt2 = class extends Error {
      constructor(e3) {
        super(e3), this.name = `BindingError`;
      }
    };
    function bt2(e3, t3, n3 = {}) {
      return (function(e4, t4, n4 = {}) {
        var r3 = t4.name;
        if (!e4) throw new yt2(`type "${r3}" must have a positive integer typeid pointer`);
        if (vt2.hasOwnProperty(e4)) {
          if (n4.ve) return;
          throw new yt2(`Cannot register type '${r3}' twice`);
        }
        vt2[e4] = t4, delete A2[e4], _t4.hasOwnProperty(e4) && (t4 = _t4[e4], delete _t4[e4], t4.forEach((e5) => e5()));
      })(e3, t3, n3);
    }
    var xt2 = (e3, t3, n3) => {
      switch (t3) {
        case 1:
          return n3 ? (e4) => (C2(), T2)[e4 >>> 0] : (e4) => (C2(), E2)[e4 >>> 0];
        case 2:
          return n3 ? (e4) => (C2(), ee2)[e4 >>> 1 >>> 0] : (e4) => (C2(), te2)[e4 >>> 1 >>> 0];
        case 4:
          return n3 ? (e4) => (C2(), D2)[e4 >>> 2 >>> 0] : (e4) => (C2(), O2)[e4 >>> 2 >>> 0];
        case 8:
          return n3 ? (e4) => (C2(), ie2)[e4 >>> 3 >>> 0] : (e4) => (C2(), ae2)[e4 >>> 3 >>> 0];
        default:
          throw TypeError(`invalid integer width (${t3}): ${e3}`);
      }
    };
    function St2(e3, t3, n3, r3, i3) {
      e3 >>>= 0, n3 >>>= 0, t3 = gt2(t3 >>> 0);
      let a3 = (e4) => e4;
      if (r3 = r3 === 0n) {
        let e4 = 8 * n3;
        a3 = (t4) => BigInt.asUintN(e4, t4), i3 = a3(i3);
      }
      bt2(e3, {
        name: t3,
        Wc: a3,
        cd: (e4, t4) => (typeof t4 == `number` && (t4 = BigInt(t4)), t4),
        bd: xt2(t3, n3, !r3),
        dd: null
      });
    }
    function Ct2(e3, t3, n3, r3) {
      bt2(e3 >>>= 0, {
        name: t3 = gt2(t3 >>> 0),
        Wc: function(e4) {
          return !!e4;
        },
        cd: function(e4, t4) {
          return t4 ? n3 : r3;
        },
        bd: function(e4) {
          return this.Wc((C2(), E2)[e4 >>> 0]);
        },
        dd: null
      });
    }
    var wt2 = [], Tt2 = [
      0,
      1,
      ,
      1,
      null,
      1,
      true,
      1,
      false,
      1
    ];
    function Et2(e3) {
      9 < (e3 >>>= 0) && --Tt2[e3 + 1] === 0 && (Tt2[e3] = void 0, wt2.push(e3));
    }
    var Dt2 = (e3) => {
      if (!e3) throw new yt2(`Cannot use deleted val. handle = ${e3}`);
      return Tt2[e3];
    }, Ot2 = (e3) => {
      switch (e3) {
        case void 0:
          return 2;
        case null:
          return 4;
        case true:
          return 6;
        case false:
          return 8;
        default:
          let t3 = wt2.pop() || Tt2.length;
          return Tt2[t3] = e3, Tt2[t3 + 1] = 1, t3;
      }
    };
    function kt2(e3) {
      return this.Wc((C2(), O2)[e3 >>> 2 >>> 0]);
    }
    var At2 = {
      name: `emscripten::val`,
      Wc: (e3) => {
        var t3 = Dt2(e3);
        return Et2(e3), t3;
      },
      cd: (e3, t3) => Ot2(t3),
      bd: kt2,
      dd: null
    };
    function jt2(e3) {
      return bt2(e3 >>> 0, At2);
    }
    var Mt2 = (e3, t3) => {
      switch (t3) {
        case 4:
          return function(e4) {
            return this.Wc((C2(), ne2)[e4 >>> 2 >>> 0]);
          };
        case 8:
          return function(e4) {
            return this.Wc((C2(), re2)[e4 >>> 3 >>> 0]);
          };
        default:
          throw TypeError(`invalid float width (${t3}): ${e3}`);
      }
    };
    function Nt2(e3, t3, n3) {
      n3 >>>= 0, bt2(e3 >>>= 0, {
        name: t3 = gt2(t3 >>> 0),
        Wc: (e4) => e4,
        cd: (e4, t4) => t4,
        bd: Mt2(t3, n3),
        dd: null
      });
    }
    function Pt2(e3, t3, n3, r3, i3) {
      e3 >>>= 0, n3 >>>= 0, t3 = gt2(t3 >>> 0);
      let a3 = (e4) => e4;
      if (r3 === 0) {
        var o3 = 32 - 8 * n3;
        a3 = (e4) => e4 << o3 >>> o3, i3 = a3(i3);
      }
      bt2(e3, {
        name: t3,
        Wc: a3,
        cd: (e4, t4) => t4,
        bd: xt2(t3, n3, r3 !== 0),
        dd: null
      });
    }
    function Ft2(e3, t3, n3) {
      function r3(e4) {
        var t4 = (C2(), O2)[e4 >>> 2 >>> 0];
        return e4 = (C2(), O2)[e4 + 4 >>> 2 >>> 0], new i3((C2(), T2).buffer, e4, t4);
      }
      var i3 = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
        BigInt64Array,
        BigUint64Array
      ][t3];
      bt2(e3 >>>= 0, {
        name: n3 = gt2(n3 >>> 0),
        Wc: r3,
        bd: r3
      }, {
        ve: true
      });
    }
    var It2 = (e3, t3, n3) => {
      var r3 = (C2(), E2);
      if (t3 >>>= 0, 0 < n3) {
        var i3 = t3;
        n3 = t3 + n3 - 1;
        for (var a3 = 0; a3 < e3.length; ++a3) {
          var o3 = e3.codePointAt(a3);
          if (127 >= o3) {
            if (t3 >= n3) break;
            r3[t3++ >>> 0] = o3;
          } else if (2047 >= o3) {
            if (t3 + 1 >= n3) break;
            r3[t3++ >>> 0] = 192 | o3 >> 6, r3[t3++ >>> 0] = 128 | 63 & o3;
          } else if (65535 >= o3) {
            if (t3 + 2 >= n3) break;
            r3[t3++ >>> 0] = 224 | o3 >> 12, r3[t3++ >>> 0] = 128 | o3 >> 6 & 63, r3[t3++ >>> 0] = 128 | 63 & o3;
          } else {
            if (t3 + 3 >= n3) break;
            r3[t3++ >>> 0] = 240 | o3 >> 18, r3[t3++ >>> 0] = 128 | o3 >> 12 & 63, r3[t3++ >>> 0] = 128 | o3 >> 6 & 63, r3[t3++ >>> 0] = 128 | 63 & o3, a3++;
          }
        }
        r3[t3 >>> 0] = 0, e3 = t3 - i3;
      } else e3 = 0;
      return e3;
    }, Lt2 = (e3) => {
      for (var t3 = 0, n3 = 0; n3 < e3.length; ++n3) {
        var r3 = e3.charCodeAt(n3);
        127 >= r3 ? t3++ : 2047 >= r3 ? t3 += 2 : 55296 <= r3 && 57343 >= r3 ? (t3 += 4, ++n3) : t3 += 3;
      }
      return t3;
    };
    function Rt2(e3, t3) {
      bt2(e3 >>>= 0, {
        name: t3 = gt2(t3 >>> 0),
        Wc(e4) {
          var t4 = (C2(), O2)[e4 >>> 2 >>> 0];
          return t4 = tt2(e4 + 4, t4, true), qi2(e4), t4;
        },
        cd(e4, t4) {
          t4 instanceof ArrayBuffer && (t4 = new Uint8Array(t4));
          var n3 = typeof t4 == `string`;
          if (!(n3 || ArrayBuffer.isView(t4) && t4.BYTES_PER_ELEMENT == 1)) throw new yt2(`Cannot pass non-string to std::string`);
          var r3 = n3 ? Lt2(t4) : t4.length, i3 = Ji2(4 + r3 + 1), a3 = i3 + 4;
          return (C2(), O2)[i3 >>> 2 >>> 0] = r3, n3 ? It2(t4, a3, r3 + 1) : (C2(), E2).set(t4, a3 >>> 0), e4 !== null && e4.push(qi2, i3), i3;
        },
        bd: kt2,
        dd(e4) {
          qi2(e4);
        }
      });
    }
    var zt2 = globalThis.TextDecoder ? new TextDecoder(`utf-16le`) : void 0, Bt2 = (e3, t3, n3) => {
      if (e3 >>>= 1, 16 < (t3 = $e2((C2(), te2), e3, t3 / 2, n3)) - e3 && zt2) return zt2.decode((C2(), te2).slice(e3, t3));
      for (n3 = ``; e3 < t3; ++e3) {
        var r3 = (C2(), te2)[e3 >>> 0];
        n3 += String.fromCharCode(r3);
      }
      return n3;
    }, Vt2 = (e3, t3, n3) => {
      if (n3 ?? (n3 = 2147483647), 2 > n3) return 0;
      var r3 = t3;
      n3 = (n3 -= 2) < 2 * e3.length ? n3 / 2 : e3.length;
      for (var i3 = 0; i3 < n3; ++i3) {
        var a3 = e3.charCodeAt(i3);
        (C2(), ee2)[t3 >>> 1 >>> 0] = a3, t3 += 2;
      }
      return (C2(), ee2)[t3 >>> 1 >>> 0] = 0, t3 - r3;
    }, Ht2 = (e3) => 2 * e3.length, Ut2 = (e3, t3, n3) => {
      var r3 = ``;
      e3 >>>= 2;
      for (var i3 = 0; !(i3 >= t3 / 4); i3++) {
        var a3 = (C2(), O2)[e3 + i3 >>> 0];
        if (!a3 && !n3) break;
        r3 += String.fromCodePoint(a3);
      }
      return r3;
    }, Wt2 = (e3, t3, n3) => {
      if (t3 >>>= 0, n3 ?? (n3 = 2147483647), 4 > n3) return 0;
      var r3 = t3;
      n3 = r3 + n3 - 4;
      for (var i3 = 0; i3 < e3.length; ++i3) {
        var a3 = e3.codePointAt(i3);
        if (65535 < a3 && i3++, (C2(), D2)[t3 >>> 2 >>> 0] = a3, (t3 += 4) + 4 > n3) break;
      }
      return (C2(), D2)[t3 >>> 2 >>> 0] = 0, t3 - r3;
    }, Gt2 = (e3) => {
      for (var t3 = 0, n3 = 0; n3 < e3.length; ++n3) 65535 < e3.codePointAt(n3) && n3++, t3 += 4;
      return t3;
    };
    function Kt2(e3, t3, n3) {
      if (e3 >>>= 0, t3 >>>= 0, n3 = gt2(n3 >>>= 0), t3 === 2) var r3 = Bt2, i3 = Vt2, a3 = Ht2;
      else r3 = Ut2, i3 = Wt2, a3 = Gt2;
      bt2(e3, {
        name: n3,
        Wc: (e4) => {
          var n4 = (C2(), O2)[e4 >>> 2 >>> 0];
          return n4 = r3(e4 + 4, n4 * t3, true), qi2(e4), n4;
        },
        cd: (e4, r4) => {
          if (typeof r4 != `string`) throw new yt2(`Cannot pass non-string to C++ string type ${n3}`);
          var o3 = a3(r4), s3 = Ji2(4 + o3 + t3);
          return (C2(), O2)[s3 >>> 2 >>> 0] = o3 / t3, i3(r4, s3 + 4, o3 + t3), e4 !== null && e4.push(qi2, s3), s3;
        },
        bd: kt2,
        dd(e4) {
          qi2(e4);
        }
      });
    }
    function qt2(e3, t3) {
      bt2(e3 >>>= 0, {
        we: true,
        name: t3 = gt2(t3 >>> 0),
        Wc: () => {
        },
        cd: () => {
        }
      });
    }
    function Jt2(e3) {
      pa2(e3 >>> 0, !r2, 1, !n2, 131072, false), Oe2();
    }
    var Yt2 = (e3) => {
      if (!x2) try {
        if (e3(), !(0 < ve2)) try {
          i2 ? Ki2() && _a3(p2) : Se2(p2);
        } catch (e4) {
          e4 instanceof fe2 || e4 == `unwind` || c2(0, e4);
        }
      } catch (e4) {
        e4 instanceof fe2 || e4 == `unwind` || c2(0, e4);
      }
    }, Xt2 = !Atomics.waitAsync || ((_b3 = globalThis.navigator) == null ? void 0 : _b3.userAgent) && 91 > Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./) || [])[2]);
    function Zt2(e3) {
      e3 >>>= 0, Xt2 || (Atomics.waitAsync((C2(), D2), e3 >>> 2, e3).value.then(Qt2), e3 += 128, Atomics.store((C2(), D2), e3 >>> 2, 1));
    }
    var Qt2 = () => Yt2(() => {
      var e3 = Ki2();
      e3 && (Zt2(e3), ya2());
    });
    function $t2(e3, t3) {
      (e3 >>>= 0) == t3 >>> 0 ? setTimeout(Qt2) : i2 ? postMessage({
        gd: e3,
        $c: `checkMailbox`
      }) : (e3 = Ee2[e3]) && e3.postMessage({
        $c: `checkMailbox`
      });
    }
    var en2 = [];
    function tn2(e3, t3, n3, r3, i3) {
      for (t3 >>>= 0, i3 >>>= 0, en2.length = 0, n3 = i3 >>> 3, r3 = i3 + r3 >>> 3; n3 < r3; ) {
        var a3 = (C2(), ie2)[n3++ >>> 0] ? (C2(), ie2)[n3++ >>> 0] : (C2(), re2)[n3++ >>> 0];
        en2.push(a3);
      }
      return (t3 ? bo2[t3] : yo2[e3])(...en2);
    }
    var nn2 = () => {
      ve2 = 0;
    };
    function rn2(e3) {
      e3 >>>= 0, i2 ? postMessage({
        $c: `cleanupThread`,
        Le: e3
      }) : De2(Ee2[e3]);
    }
    function an2(e3) {
    }
    var on2 = (e3) => {
      try {
        e3();
      } catch (e4) {
        le2(e4);
      }
    };
    function sn2(e3) {
      var t3 = (...t4) => {
        dn2.push(e3);
        try {
          return e3(...t4);
        } finally {
          x2 || (dn2.pop(), ln2 && cn2 === 1 && dn2.length === 0 && (cn2 = 0, ve2 += 1, on2(ho2), typeof Fibers < `u` && Fibers.We()));
        }
      };
      return mn2.set(e3, t3), t3;
    }
    var cn2 = 0, ln2 = null, un2 = 0, dn2 = [], fn2 = /* @__PURE__ */ new Map(), pn2 = /* @__PURE__ */ new Map(), mn2 = /* @__PURE__ */ new Map(), hn2 = 0, gn2 = null, _n3 = [], vn2 = (e3) => (function(e4) {
      if (!x2) {
        if (cn2 === 0) {
          var t3 = false, n3 = false;
          e4((e5 = 0) => {
            if (!x2 && (un2 = e5, t3 = true, n3)) {
              cn2 = 2, on2(() => go2(ln2)), typeof MainLoop < `u` && MainLoop.se && MainLoop.resume(), e5 = false;
              try {
                var r3 = (function() {
                  var e6 = (C2(), D2)[ln2 + 8 >>> 2 >>> 0];
                  return e6 = pn2.get(e6), e6 = mn2.get(e6), --ve2, e6();
                })();
              } catch (t4) {
                r3 = t4, e5 = true;
              }
              var i3 = false;
              if (!ln2) {
                var a3 = gn2;
                a3 && (gn2 = null, (e5 ? a3.reject : a3.resolve)(r3), i3 = true);
              }
              if (e5 && !i3) throw r3;
            }
          }), n3 = true, t3 || (cn2 = 1, ln2 = (function() {
            var e5 = Ji2(65548), t4 = e5 + 12;
            if ((C2(), O2)[e5 >>> 2 >>> 0] = t4, (C2(), O2)[e5 + 4 >>> 2 >>> 0] = t4 + 65536, t4 = dn2[0], !fn2.has(t4)) {
              var n4 = hn2++;
              fn2.set(t4, n4), pn2.set(n4, t4);
            }
            return t4 = fn2.get(t4), (C2(), D2)[e5 + 8 >>> 2 >>> 0] = t4, e5;
          })(), typeof MainLoop < `u` && MainLoop.se && MainLoop.pause(), on2(() => mo2(ln2)));
        } else cn2 === 2 ? (cn2 = 0, on2(_o3), qi2(ln2), ln2 = null, _n3.forEach(Yt2)) : le2(`invalid state: ${cn2}`);
        return un2;
      }
    })((t3) => {
      e3().then(t3);
    });
    function yn2(e3) {
      return e3 >>>= 0, vn2(async () => Ot2(await Dt2(e3)));
    }
    var bn2 = [], xn2 = (e3) => {
      var t3 = bn2.length;
      return bn2.push(e3), t3;
    }, Sn2 = (e3, t3) => {
      for (var n3 = Array(e3), r3 = 0; r3 < e3; ++r3) {
        var i3 = r3, a3 = (C2(), O2)[t3 + 4 * r3 >>> 2 >>> 0], o3 = vt2[a3];
        if (o3 === void 0) throw e3 = `parameter ${r3}`, a3 = Hi2(a3), t3 = gt2(a3), qi2(a3), new yt2(`${e3} has unknown type ${t3}`);
        n3[i3] = o3;
      }
      return n3;
    }, Cn2 = (e3, t3, n3) => {
      var r3 = [];
      return e3 = e3(r3, n3), r3.length && ((C2(), O2)[t3 >>> 2 >>> 0] = Ot2(r3)), e3;
    }, wn2 = {}, Tn2 = (e3) => {
      var t3 = wn2[e3];
      return t3 === void 0 ? gt2(e3) : t3;
    };
    function En2(e3, t3, n3) {
      var [r3, ...i3] = Sn2(e3, t3 >>> 0);
      t3 = r3.cd.bind(r3);
      var a3 = i3.map((e4) => e4.bd.bind(e4));
      e3--;
      var o3 = {
        toValue: Dt2
      };
      switch (e3 = a3.map((e4, t4) => {
        var n4 = `argFromPtr${t4}`;
        return o3[n4] = e4, `${n4}(args${t4 ? `+` + 8 * t4 : ``})`;
      }), n3) {
        case 0:
          var s3 = `toValue(handle)`;
          break;
        case 2:
          s3 = `new (toValue(handle))`;
          break;
        case 3:
          s3 = ``;
          break;
        case 1:
          o3.getStringOrSymbol = Tn2, s3 = `toValue(handle)[getStringOrSymbol(methodName)]`;
      }
      return s3 += `(${e3})`, r3.we || (o3.toReturnWire = t3, o3.emval_returnValue = Cn2, s3 = `return emval_returnValue(toReturnWire, destructorsRef, ${s3})`), s3 = `return function (handle, methodName, destructorsRef, args) {
  ${s3}
  }`, n3 = Function(Object.keys(o3), s3)(...Object.values(o3)), s3 = `methodCaller<(${i3.map((e4) => e4.name)}) => ${r3.name}>`, xn2(Object.defineProperty(n3, "name", {
        value: s3
      }));
    }
    function Dn2(e3, t3) {
      return t3 >>>= 0, (e3 = Dt2(e3 >>> 0)) == Dt2(t3);
    }
    function On2(e3) {
      return (e3 >>>= 0) ? (e3 = Tn2(e3), Ot2(globalThis[e3])) : Ot2(globalThis);
    }
    function kn2(e3) {
      return e3 = Tn2(e3 >>> 0), Ot2(t2[e3]);
    }
    function An2(e3, t3) {
      return t3 >>>= 0, e3 = Dt2(e3 >>> 0), t3 = Dt2(t3), Ot2(e3[t3]);
    }
    function jn2(e3) {
      9 < (e3 >>>= 0) && (Tt2[e3 + 1] += 1);
    }
    function Mn2(e3, t3, n3, r3, i3) {
      return bn2[e3 >>> 0](t3 >>> 0, n3 >>> 0, r3 >>> 0, i3 >>> 0);
    }
    function Nn2(e3, t3, n3, r3, i3) {
      return Mn2(e3 >>> 0, t3 >>> 0, n3 >>> 0, r3 >>> 0, i3 >>> 0);
    }
    function Pn2() {
      return Ot2([]);
    }
    function Fn2(e3) {
      e3 = Dt2(e3 >>> 0);
      for (var t3 = Array(e3.length), n3 = 0; n3 < e3.length; n3++) t3[n3] = e3[n3];
      return Ot2(t3);
    }
    function In2(e3) {
      return Ot2(Tn2(e3 >>> 0));
    }
    function Ln2() {
      return Ot2({});
    }
    function Rn2(e3) {
      for (var t3 = Dt2(e3 >>>= 0); t3.length; ) {
        var n3 = t3.pop();
        t3.pop()(n3);
      }
      Et2(e3);
    }
    function zn2(e3, t3, n3) {
      t3 >>>= 0, n3 >>>= 0, e3 = Dt2(e3 >>> 0), t3 = Dt2(t3), n3 = Dt2(n3), e3[t3] = n3;
    }
    function Bn2(e3, t3) {
      e3 = Fe2(e3), t3 >>>= 0, e3 = new Date(1e3 * e3), (C2(), D2)[t3 >>> 2 >>> 0] = e3.getUTCSeconds(), (C2(), D2)[t3 + 4 >>> 2 >>> 0] = e3.getUTCMinutes(), (C2(), D2)[t3 + 8 >>> 2 >>> 0] = e3.getUTCHours(), (C2(), D2)[t3 + 12 >>> 2 >>> 0] = e3.getUTCDate(), (C2(), D2)[t3 + 16 >>> 2 >>> 0] = e3.getUTCMonth(), (C2(), D2)[t3 + 20 >>> 2 >>> 0] = e3.getUTCFullYear() - 1900, (C2(), D2)[t3 + 24 >>> 2 >>> 0] = e3.getUTCDay(), e3 = (e3.getTime() - Date.UTC(e3.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0, (C2(), D2)[t3 + 28 >>> 2 >>> 0] = e3;
    }
    var Vn2 = (e3) => e3 % 4 == 0 && (e3 % 100 != 0 || e3 % 400 == 0), Hn2 = [
      0,
      31,
      60,
      91,
      121,
      152,
      182,
      213,
      244,
      274,
      305,
      335
    ], Un2 = [
      0,
      31,
      59,
      90,
      120,
      151,
      181,
      212,
      243,
      273,
      304,
      334
    ];
    function Wn2(e3, t3) {
      e3 = Fe2(e3), t3 >>>= 0, e3 = new Date(1e3 * e3), (C2(), D2)[t3 >>> 2 >>> 0] = e3.getSeconds(), (C2(), D2)[t3 + 4 >>> 2 >>> 0] = e3.getMinutes(), (C2(), D2)[t3 + 8 >>> 2 >>> 0] = e3.getHours(), (C2(), D2)[t3 + 12 >>> 2 >>> 0] = e3.getDate(), (C2(), D2)[t3 + 16 >>> 2 >>> 0] = e3.getMonth(), (C2(), D2)[t3 + 20 >>> 2 >>> 0] = e3.getFullYear() - 1900, (C2(), D2)[t3 + 24 >>> 2 >>> 0] = e3.getDay();
      var n3 = (Vn2(e3.getFullYear()) ? Hn2 : Un2)[e3.getMonth()] + e3.getDate() - 1 | 0;
      (C2(), D2)[t3 + 28 >>> 2 >>> 0] = n3, (C2(), D2)[t3 + 36 >>> 2 >>> 0] = -60 * e3.getTimezoneOffset(), n3 = new Date(e3.getFullYear(), 6, 1).getTimezoneOffset();
      var r3 = new Date(e3.getFullYear(), 0, 1).getTimezoneOffset();
      e3 = 0 | (n3 != r3 && e3.getTimezoneOffset() == Math.min(r3, n3)), (C2(), D2)[t3 + 32 >>> 2 >>> 0] = e3;
    }
    function Gn2(e3) {
      e3 >>>= 0;
      var t3 = new Date((C2(), D2)[e3 + 20 >>> 2 >>> 0] + 1900, (C2(), D2)[e3 + 16 >>> 2 >>> 0], (C2(), D2)[e3 + 12 >>> 2 >>> 0], (C2(), D2)[e3 + 8 >>> 2 >>> 0], (C2(), D2)[e3 + 4 >>> 2 >>> 0], (C2(), D2)[e3 >>> 2 >>> 0], 0), n3 = (C2(), D2)[e3 + 32 >>> 2 >>> 0], r3 = t3.getTimezoneOffset(), i3 = new Date(t3.getFullYear(), 6, 1).getTimezoneOffset(), a3 = new Date(t3.getFullYear(), 0, 1).getTimezoneOffset(), o3 = Math.min(a3, i3);
      return 0 > n3 ? (C2(), D2)[e3 + 32 >>> 2 >>> 0] = +(i3 != a3 && o3 == r3) : 0 < n3 != (o3 == r3) && (i3 = Math.max(a3, i3), t3.setTime(t3.getTime() + 6e4 * ((0 < n3 ? o3 : i3) - r3))), (C2(), D2)[e3 + 24 >>> 2 >>> 0] = t3.getDay(), n3 = (Vn2(t3.getFullYear()) ? Hn2 : Un2)[t3.getMonth()] + t3.getDate() - 1 | 0, (C2(), D2)[e3 + 28 >>> 2 >>> 0] = n3, (C2(), D2)[e3 >>> 2 >>> 0] = t3.getSeconds(), (C2(), D2)[e3 + 4 >>> 2 >>> 0] = t3.getMinutes(), (C2(), D2)[e3 + 8 >>> 2 >>> 0] = t3.getHours(), (C2(), D2)[e3 + 12 >>> 2 >>> 0] = t3.getDate(), (C2(), D2)[e3 + 16 >>> 2 >>> 0] = t3.getMonth(), (C2(), D2)[e3 + 20 >>> 2 >>> 0] = t3.getYear(), e3 = t3.getTime(), BigInt(isNaN(e3) ? -1 : e3 / 1e3);
    }
    function Kn2(e3, t3, n3, r3, a3, o3, s3) {
      return i2 ? ye2(16, 1, e3, t3, n3, r3, a3, o3, s3) : -52;
    }
    function qn2(e3, t3, n3, r3, a3, o3) {
      if (i2) return ye2(17, 1, e3, t3, n3, r3, a3, o3);
    }
    var Jn2 = {}, Yn2 = () => performance.timeOrigin + performance.now();
    function Xn2(e3, t3) {
      return i2 ? ye2(18, 1, e3, t3) : (Jn2[e3] && (clearTimeout(Jn2[e3].id), delete Jn2[e3]), t3 && (Jn2[e3] = {
        id: setTimeout(() => {
          delete Jn2[e3], Yt2(() => va2(e3, performance.timeOrigin + performance.now()));
        }, t3),
        Ve: t3
      }), 0);
    }
    function Zn2(e3, t3, n3, r3) {
      e3 >>>= 0, t3 >>>= 0, n3 >>>= 0, r3 >>>= 0;
      var i3 = (/* @__PURE__ */ new Date()).getFullYear(), a3 = new Date(i3, 0, 1).getTimezoneOffset();
      i3 = new Date(i3, 6, 1).getTimezoneOffset();
      var o3 = Math.max(a3, i3);
      (C2(), O2)[e3 >>> 2 >>> 0] = 60 * o3, (C2(), D2)[t3 >>> 2 >>> 0] = +(a3 != i3), e3 = (t3 = (e4) => {
        var t4 = Math.abs(e4);
        return `UTC${0 <= e4 ? `-` : `+`}${String(Math.floor(t4 / 60)).padStart(2, `0`)}${String(t4 % 60).padStart(2, `0`)}`;
      })(a3), t3 = t3(i3), i3 < a3 ? (It2(e3, n3, 17), It2(t3, r3, 17)) : (It2(e3, r3, 17), It2(t3, n3, 17));
    }
    var Qn2 = () => Date.now(), $n2 = 1;
    function er2(e3, t3, n3) {
      if (n3 >>>= 0, !(0 <= e3 && 3 >= e3)) return 28;
      if (e3 === 0) e3 = Date.now();
      else {
        if (!$n2) return 52;
        e3 = performance.timeOrigin + performance.now();
      }
      return e3 = Math.round(1e6 * e3), (C2(), ie2)[n3 >>> 3 >>> 0] = BigInt(e3), 0;
    }
    var tr2 = [], nr2 = (e3, t3) => {
      tr2.length = 0;
      for (var n3; n3 = (C2(), E2)[e3++ >>> 0]; ) {
        var r3 = n3 != 105;
        t3 += (r3 &= n3 != 112) && t3 % 8 ? 4 : 0, tr2.push(n3 == 112 ? (C2(), O2)[t3 >>> 2 >>> 0] : n3 == 106 ? (C2(), ie2)[t3 >>> 3 >>> 0] : n3 == 105 ? (C2(), D2)[t3 >>> 2 >>> 0] : (C2(), re2)[t3 >>> 3 >>> 0]), t3 += r3 ? 8 : 4;
      }
      return tr2;
    };
    function rr2(e3, t3, n3) {
      return e3 >>>= 0, t3 = nr2(t3 >>> 0, n3 >>> 0), bo2[e3](...t3);
    }
    function ir2(e3, t3, n3) {
      return e3 >>>= 0, t3 = nr2(t3 >>> 0, n3 >>> 0), bo2[e3](...t3);
    }
    var ar2 = () => {
    };
    function or2(e3, t3) {
      return b2(tt2(e3 >>> 0, t3 >>> 0));
    }
    var sr2 = () => {
      throw ve2 += 1, `unwind`;
    };
    function cr2() {
      return 4294901760;
    }
    var lr2 = () => 1, ur2 = () => navigator.hardwareConcurrency, dr2 = {}, fr2 = (e3) => {
      var t3 = Lt2(e3) + 1, n3 = Ji2(t3);
      return n3 && It2(e3, n3, t3), n3;
    }, pr2 = (e3) => {
      var t3;
      return (t3 = /\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(e3)) ? +t3[1] : (t3 = /:(\d+):\d+(?:\)|$)/.exec(e3)) ? 2147483648 | t3[1] : 0;
    }, mr2 = (e3) => {
      for (var t3 of e3) (e3 = pr2(t3)) && (dr2[e3] = t3);
    };
    function hr2() {
      var e3 = Error().stack.toString().split(`
`);
      return e3[0] == `Error` && e3.shift(), mr2(e3), dr2.ee = pr2(e3[3]), dr2.xe = e3, dr2.ee;
    }
    function gr2(e3) {
      if (!(e3 = dr2[e3 >>> 0])) return 0;
      var t3;
      if (t3 = /^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(e3)) e3 = t3[1];
      else if (t3 = /^\s+at (.*) \(.*\)$/.exec(e3)) e3 = t3[1];
      else {
        if (!(t3 = /^(.+?)@/.exec(e3))) return 0;
        e3 = t3[1];
      }
      return qi2(gr2.ne ?? 0), gr2.ne = fr2(e3), gr2.ne;
    }
    function _r3(e3) {
      e3 >>>= 0;
      var t3 = (C2(), E2).length;
      if (e3 <= t3 || 4294901760 < e3) return false;
      for (var n3 = 1; 4 >= n3; n3 *= 2) {
        var r3 = t3 * (1 + 0.2 / n3);
        r3 = Math.min(r3, e3 + 100663296);
        e: {
          r3 = (Math.min(4294901760, 65536 * Math.ceil(Math.max(e3, r3) / 65536)) - je2.buffer.byteLength + 65535) / 65536 | 0;
          try {
            je2.grow(r3), se2();
            var i3 = 1;
            break e;
          } catch {
          }
          i3 = void 0;
        }
        if (i3) return true;
      }
      return false;
    }
    function vr2(e3, t3, n3) {
      if (e3 >>>= 0, t3 >>>= 0, dr2.ee == e3) var r3 = dr2.xe;
      else (r3 = Error().stack.toString().split(`
`))[0] == `Error` && r3.shift(), mr2(r3);
      for (var i3 = 3; r3[i3] && pr2(r3[i3]) != e3; ) ++i3;
      for (e3 = 0; e3 < n3 && r3[e3 + i3]; ++e3) (C2(), D2)[t3 + 4 * e3 >>> 2 >>> 0] = pr2(r3[e3 + i3]);
      return e3;
    }
    var yr2 = (e3) => {
      var t3 = Lt2(e3) + 1, n3 = Ca2(t3);
      return It2(e3, n3, t3), n3;
    }, br2 = (e3) => (C2(), O2)[e3 >>> 2 >>> 0] + 4294967296 * (C2(), D2)[e3 + 4 >>> 2 >>> 0], xr2 = [], Sr2 = (e3, t3) => {
      xr2[e3 >>> 0] = t3;
    }, Cr2 = [], wr2 = [], Tr2 = (e3, t3) => {
      wr2[e3] = new Promise((n3) => t3.finally(() => n3(e3)));
    }, j2 = (e3) => {
      if (e3) return xr2[e3 >>> 0];
    }, Er2 = (e3, t3) => {
      for (e3 = (C2(), O2)[e3 >>> 2 >>> 0]; e3; e3 = (C2(), O2)[e3 >>> 2 >>> 0]) t3[(C2(), D2)[e3 + 4 >>> 2 >>> 0]](e3);
    }, Dr2 = (e3, t3, n3) => {
      (C2(), O2)[e3 >>> 2 >>> 0] = t3, (C2(), O2)[e3 + 4 >>> 2 >>> 0] = n3;
    }, Or2 = (e3) => {
      var t3 = (C2(), O2)[e3 >>> 2 >>> 0];
      return e3 = (C2(), O2)[e3 + 4 >>> 2 >>> 0], tt2(t3, e3);
    }, kr2 = (e3) => {
      var t3 = (C2(), O2)[e3 >>> 2 >>> 0];
      return e3 = (C2(), O2)[e3 + 4 >>> 2 >>> 0], t3 ? tt2(t3, e3) : e3 === 0 ? `` : void 0;
    }, Ar2 = (e3) => {
      var t3 = kr2(e3 + 4), n3 = (n3 = (C2(), O2)[e3 + 12 >>> 2 >>> 0]) ? j2(n3) : `auto`;
      if (e3 += 16) {
        var r3 = j2((C2(), O2)[e3 + 4 >>> 2 >>> 0]), i3 = (C2(), O2)[e3 + 16 >>> 2 >>> 0], a3 = (C2(), O2)[e3 + 20 >>> 2 >>> 0];
        if (i3) {
          for (var o3 = {}, s3 = 0; s3 < i3; ++s3) {
            var c3 = a3 + 24 * s3;
            o3[Or2(c3 + 4)] = (C2(), re2)[c3 + 16 >>> 3 >>> 0];
          }
          i3 = o3;
        } else i3 = void 0;
        e3 = {
          module: r3,
          constants: i3,
          entryPoint: kr2(e3 + 8)
        };
      } else e3 = void 0;
      return {
        label: t3,
        layout: n3,
        compute: e3
      };
    }, jr2 = (e3, t3) => {
      function n3(t4, n4, r4, i4 = 0) {
        t4 = e3[t4] ?? i4, (C2(), O2)[n4 + r4 >>> 2 >>> 0] = t4;
      }
      function r3(t4, n4, r4, i4 = 0) {
        n4 += r4, t4 = e3[t4] ?? i4, (C2(), O2)[n4 >>> 2 >>> 0] = t4, i4 = (C2(), O2)[n4 >>> 2 >>> 0], (C2(), O2)[n4 + 4 >>> 2 >>> 0] = (t4 - i4) / 4294967296;
      }
      var i3 = (C2(), O2)[t3 >>> 2 >>> 0];
      n3(`maxTextureDimension1D`, t3, 4), n3(`maxTextureDimension2D`, t3, 8), n3(`maxTextureDimension3D`, t3, 12), n3(`maxTextureArrayLayers`, t3, 16), n3(`maxBindGroups`, t3, 20), n3(`maxBindGroupsPlusVertexBuffers`, t3, 24), n3(`maxBindingsPerBindGroup`, t3, 28), n3(`maxDynamicUniformBuffersPerPipelineLayout`, t3, 32), n3(`maxDynamicStorageBuffersPerPipelineLayout`, t3, 36), n3(`maxSampledTexturesPerShaderStage`, t3, 40), n3(`maxSamplersPerShaderStage`, t3, 44), n3(`maxStorageBuffersPerShaderStage`, t3, 48), n3(`maxStorageTexturesPerShaderStage`, t3, 52), n3(`maxUniformBuffersPerShaderStage`, t3, 56), n3(`minUniformBufferOffsetAlignment`, t3, 80), n3(`minStorageBufferOffsetAlignment`, t3, 84), r3(`maxUniformBufferBindingSize`, t3, 64), r3(`maxStorageBufferBindingSize`, t3, 72), n3(`maxVertexBuffers`, t3, 88), r3(`maxBufferSize`, t3, 96), n3(`maxVertexAttributes`, t3, 104), n3(`maxVertexBufferArrayStride`, t3, 108), n3(`maxInterStageShaderVariables`, t3, 112), n3(`maxColorAttachments`, t3, 116), n3(`maxColorAttachmentBytesPerSample`, t3, 120), n3(`maxComputeWorkgroupStorageSize`, t3, 124), n3(`maxComputeInvocationsPerWorkgroup`, t3, 128), n3(`maxComputeWorkgroupSizeX`, t3, 132), n3(`maxComputeWorkgroupSizeY`, t3, 136), n3(`maxComputeWorkgroupSizeZ`, t3, 140), n3(`maxComputeWorkgroupsPerDimension`, t3, 144), n3(`maxImmediateSize`, t3, 148), i3 !== 0 && (C2(), n3(`maxStorageBuffersInVertexStage`, i3, 8, e3.maxStorageBuffersPerShaderStage), n3(`maxStorageBuffersInFragmentStage`, i3, 16, e3.maxStorageBuffersPerShaderStage), n3(`maxStorageTexturesInVertexStage`, i3, 12, e3.maxStorageTexturesPerShaderStage), n3(`maxStorageTexturesInFragmentStage`, i3, 20, e3.maxStorageTexturesPerShaderStage));
    }, Mr2 = (e3, t3) => {
      (C2(), O2)[t3 + 52 >>> 2 >>> 0] = e3.subgroupMinSize, (C2(), O2)[t3 + 56 >>> 2 >>> 0] = e3.subgroupMaxSize;
      var n3 = fr2(e3.vendor + e3.architecture + e3.device + e3.description), r3 = Lt2(e3.vendor);
      Dr2(t3 + 4, n3, r3), n3 += r3, r3 = Lt2(e3.architecture), Dr2(t3 + 12, n3, r3), n3 += r3, r3 = Lt2(e3.device), Dr2(t3 + 20, n3, r3), n3 += r3, r3 = Lt2(e3.description), Dr2(t3 + 28, n3, r3), n3 += r3, (C2(), D2)[t3 + 36 >>> 2 >>> 0] = 2, n3 = e3.isFallbackAdapter ? 3 : 4, (C2(), D2)[t3 + 40 >>> 2 >>> 0] = n3, (C2(), O2)[t3 + 44 >>> 2 >>> 0] = 0, (C2(), O2)[t3 + 48 >>> 2 >>> 0] = 0, Er2(t3, {
        327739: (t4) => {
          let n4 = 0, r4 = 0;
          if (e3.subgroupMatrixConfigs) {
            n4 = e3.subgroupMatrixConfigs.length, r4 = Ji2(20 * n4);
            for (let [t5, n5] of e3.subgroupMatrixConfigs.entries()) {
              let e4 = r4 + 20 * t5, i3 = Vr2.indexOf(n5.componentType), a3 = Vr2.indexOf(n5.resultComponentType);
              (C2(), D2)[e4 >>> 2 >>> 0] = i3, (C2(), D2)[e4 + 4 >>> 2 >>> 0] = a3, (C2(), O2)[e4 + 8 >>> 2 >>> 0] = n5.M, (C2(), O2)[e4 + 12 >>> 2 >>> 0] = n5.N, (C2(), O2)[e4 + 16 >>> 2 >>> 0] = n5.K;
            }
          }
          (C2(), O2)[t4 + 12 >>> 2 >>> 0] = r4, (C2(), O2)[t4 + 8 >>> 2 >>> 0] = n4;
        }
      });
    }, Nr2 = [
      ,
      ,
      `uniform`,
      `storage`,
      `read-only-storage`
    ], Pr2 = [
      ,
      `validation`,
      `out-of-memory`,
      `internal`
    ], Fr2 = [
      ,
      `compatibility`,
      `core`
    ], Ir2 = {
      1: `core-features-and-limits`,
      2: `depth-clip-control`,
      3: `depth32float-stencil8`,
      4: `texture-compression-bc`,
      5: `texture-compression-bc-sliced-3d`,
      6: `texture-compression-etc2`,
      7: `texture-compression-astc`,
      8: `texture-compression-astc-sliced-3d`,
      9: `timestamp-query`,
      10: `indirect-first-instance`,
      11: `shader-f16`,
      12: `rg11b10ufloat-renderable`,
      13: `bgra8unorm-storage`,
      14: `float32-filterable`,
      15: `float32-blendable`,
      16: `clip-distances`,
      17: `dual-source-blending`,
      18: `subgroups`,
      19: `texture-formats-tier1`,
      20: `texture-formats-tier2`,
      21: `primitive-index`,
      22: `texture-component-swizzle`,
      23: `subgroup-size-control`,
      327692: `chromium-experimental-unorm16-texture-formats`,
      327729: `chromium-experimental-multi-draw-indirect`,
      327732: `chromium-experimental-subgroup-matrix`
    }, Lr2 = [
      ,
      `low-power`,
      `high-performance`
    ], Rr2 = [
      ,
      `occlusion`,
      `timestamp`
    ], zr2 = [
      ,
      ,
      `filtering`,
      `non-filtering`,
      `comparison`
    ], Br2 = [
      ,
      ,
      `write-only`,
      `read-only`,
      `read-write`
    ], Vr2 = [
      ,
      `f32`,
      `f16`,
      `u32`,
      `i32`,
      `u8`,
      `i8`
    ], Hr2 = [
      ,
      `r8unorm`,
      `r8snorm`,
      `r8uint`,
      `r8sint`,
      `r16unorm`,
      `r16snorm`,
      `r16uint`,
      `r16sint`,
      `r16float`,
      `rg8unorm`,
      `rg8snorm`,
      `rg8uint`,
      `rg8sint`,
      `r32float`,
      `r32uint`,
      `r32sint`,
      `rg16unorm`,
      `rg16snorm`,
      `rg16uint`,
      `rg16sint`,
      `rg16float`,
      `rgba8unorm`,
      `rgba8unorm-srgb`,
      `rgba8snorm`,
      `rgba8uint`,
      `rgba8sint`,
      `bgra8unorm`,
      `bgra8unorm-srgb`,
      `rgb10a2uint`,
      `rgb10a2unorm`,
      `rg11b10ufloat`,
      `rgb9e5ufloat`,
      `rg32float`,
      `rg32uint`,
      `rg32sint`,
      `rgba16unorm`,
      `rgba16snorm`,
      `rgba16uint`,
      `rgba16sint`,
      `rgba16float`,
      `rgba32float`,
      `rgba32uint`,
      `rgba32sint`,
      `stencil8`,
      `depth16unorm`,
      `depth24plus`,
      `depth24plus-stencil8`,
      `depth32float`,
      `depth32float-stencil8`,
      `bc1-rgba-unorm`,
      `bc1-rgba-unorm-srgb`,
      `bc2-rgba-unorm`,
      `bc2-rgba-unorm-srgb`,
      `bc3-rgba-unorm`,
      `bc3-rgba-unorm-srgb`,
      `bc4-r-unorm`,
      `bc4-r-snorm`,
      `bc5-rg-unorm`,
      `bc5-rg-snorm`,
      `bc6h-rgb-ufloat`,
      `bc6h-rgb-float`,
      `bc7-rgba-unorm`,
      `bc7-rgba-unorm-srgb`,
      `etc2-rgb8unorm`,
      `etc2-rgb8unorm-srgb`,
      `etc2-rgb8a1unorm`,
      `etc2-rgb8a1unorm-srgb`,
      `etc2-rgba8unorm`,
      `etc2-rgba8unorm-srgb`,
      `eac-r11unorm`,
      `eac-r11snorm`,
      `eac-rg11unorm`,
      `eac-rg11snorm`,
      `astc-4x4-unorm`,
      `astc-4x4-unorm-srgb`,
      `astc-5x4-unorm`,
      `astc-5x4-unorm-srgb`,
      `astc-5x5-unorm`,
      `astc-5x5-unorm-srgb`,
      `astc-6x5-unorm`,
      `astc-6x5-unorm-srgb`,
      `astc-6x6-unorm`,
      `astc-6x6-unorm-srgb`,
      `astc-8x5-unorm`,
      `astc-8x5-unorm-srgb`,
      `astc-8x6-unorm`,
      `astc-8x6-unorm-srgb`,
      `astc-8x8-unorm`,
      `astc-8x8-unorm-srgb`,
      `astc-10x5-unorm`,
      `astc-10x5-unorm-srgb`,
      `astc-10x6-unorm`,
      `astc-10x6-unorm-srgb`,
      `astc-10x8-unorm`,
      `astc-10x8-unorm-srgb`,
      `astc-10x10-unorm`,
      `astc-10x10-unorm-srgb`,
      `astc-12x10-unorm`,
      `astc-12x10-unorm-srgb`,
      `astc-12x12-unorm`,
      `astc-12x12-unorm-srgb`
    ], Ur2 = [
      ,
      ,
      `float`,
      `unfilterable-float`,
      `depth`,
      `sint`,
      `uint`
    ], Wr2 = [
      ,
      `1d`,
      `2d`,
      `2d-array`,
      `cube`,
      `cube-array`,
      `3d`
    ], M2 = {
      undefined: 1,
      unknown: 1,
      destroyed: 2
    };
    function Gr2(e3, t3, n3, r3, i3, a3) {
      t3 = Fe2(t3), n3 = Fe2(n3), r3 >>>= 0, i3 >>>= 0, a3 >>>= 0;
      var o3 = j2(e3 >>> 0);
      if (e3 = {}, a3) {
        var s3 = (C2(), O2)[a3 + 12 >>> 2 >>> 0];
        if (s3) {
          var c3 = (C2(), O2)[a3 + 16 >>> 2 >>> 0];
          e3.requiredFeatures = Array.from((C2(), O2).subarray(c3 >>> 2 >>> 0, c3 + 4 * s3 >>> 2 >>> 0), (e4) => Ir2[e4]);
        }
        if (s3 = (C2(), O2)[a3 + 20 >>> 2 >>> 0]) {
          let t4 = function(e4, t5, n5, r4 = false) {
            t5 += n5, (t5 = (C2(), O2)[t5 >>> 2 >>> 0]) == 4294967295 || r4 && t5 == 0 || (l3[e4] = t5);
          }, n4 = function(e4, t5, n5) {
            t5 += n5, n5 = (C2(), O2)[t5 >>> 2 >>> 0];
            var r4 = (C2(), O2)[t5 + 4 >>> 2 >>> 0];
            n5 == 4294967295 && r4 == 4294967295 || (l3[e4] = br2(t5));
          };
          c3 = (C2(), O2)[s3 >>> 2 >>> 0];
          var l3 = {};
          t4(`maxTextureDimension1D`, s3, 4), t4(`maxTextureDimension2D`, s3, 8), t4(`maxTextureDimension3D`, s3, 12), t4(`maxTextureArrayLayers`, s3, 16), t4(`maxBindGroups`, s3, 20), t4(`maxBindGroupsPlusVertexBuffers`, s3, 24), t4(`maxBindingsPerBindGroup`, s3, 28), t4(`maxDynamicUniformBuffersPerPipelineLayout`, s3, 32), t4(`maxDynamicStorageBuffersPerPipelineLayout`, s3, 36), t4(`maxSampledTexturesPerShaderStage`, s3, 40), t4(`maxSamplersPerShaderStage`, s3, 44), t4(`maxStorageBuffersPerShaderStage`, s3, 48), t4(`maxStorageTexturesPerShaderStage`, s3, 52), t4(`maxUniformBuffersPerShaderStage`, s3, 56), t4(`minUniformBufferOffsetAlignment`, s3, 80), t4(`minStorageBufferOffsetAlignment`, s3, 84), n4(`maxUniformBufferBindingSize`, s3, 64), n4(`maxStorageBufferBindingSize`, s3, 72), t4(`maxVertexBuffers`, s3, 88), n4(`maxBufferSize`, s3, 96), t4(`maxVertexAttributes`, s3, 104), t4(`maxVertexBufferArrayStride`, s3, 108), t4(`maxInterStageShaderVariables`, s3, 112), t4(`maxColorAttachments`, s3, 116), t4(`maxColorAttachmentBytesPerSample`, s3, 120), t4(`maxComputeWorkgroupStorageSize`, s3, 124), t4(`maxComputeInvocationsPerWorkgroup`, s3, 128), t4(`maxComputeWorkgroupSizeX`, s3, 132), t4(`maxComputeWorkgroupSizeY`, s3, 136), t4(`maxComputeWorkgroupSizeZ`, s3, 140), t4(`maxComputeWorkgroupsPerDimension`, s3, 144), t4(`maxImmediateSize`, s3, 148, true), c3 !== 0 && (C2(), `maxStorageBuffersInVertexStage` in GPUSupportedLimits.prototype && (t4(`maxStorageBuffersInVertexStage`, c3, 8), t4(`maxStorageTexturesInVertexStage`, c3, 12), t4(`maxStorageBuffersInFragmentStage`, c3, 16), t4(`maxStorageTexturesInFragmentStage`, c3, 20))), e3.requiredLimits = l3;
        }
        (s3 = (C2(), O2)[a3 + 24 >>> 2 >>> 0]) && (s3 = {
          label: kr2(s3 + 4)
        }, e3.defaultQueue = s3), e3.label = kr2(a3 + 4);
      }
      ve2 += 1, Tr2(t3, o3.requestDevice(e3).then((e4) => {
        --ve2, Yt2(() => {
          xr2[i3 >>> 0] = e4.queue, xr2[r3 >>> 0] = e4, ve2 += 1, Tr2(n3, e4.lost.then((t4) => {
            Yt2(() => {
              e4.onuncapturederror = () => {
              };
              var r4 = L2(), i4 = yr2(t4.message);
              sa2(n3, M2[t4.reason], i4), I2(r4);
            }), --ve2;
          })), e4.onuncapturederror = (e5) => {
            var t4 = 5;
            e5.error instanceof GPUValidationError ? t4 = 2 : e5.error instanceof GPUOutOfMemoryError ? t4 = 3 : e5.error instanceof GPUInternalError && (t4 = 4);
            var n4 = L2();
            e5 = yr2(e5.error.message), fa2(r3, t4, e5), I2(n4);
          }, `adapterInfo` in e4 || (e4.adapterInfo = o3.info), da2(t3, 1, r3, 0);
        });
      }, (e4) => {
        --ve2, Yt2(() => {
          var i4 = L2(), a4 = yr2(e4.message);
          da2(t3, 3, r3, a4), n3 && sa2(n3, 4, a4), I2(i4);
        });
      }));
    }
    function Kr2(e3) {
      var t3 = j2(e3 >>>= 0), n3 = Cr2[e3];
      if (n3) {
        for (var r3 = 0; r3 < n3.length; ++r3) n3[r3]();
        delete Cr2[e3];
      }
      t3.destroy();
    }
    function qr2(e3, t3, n3) {
      n3 >>>= 0;
      var r3 = j2(e3 >>>= 0);
      n3 == 4294967295 && (n3 = void 0);
      try {
        var i3 = r3.getMappedRange(t3 >>> 0, n3);
      } catch {
        return 0;
      }
      var a3 = ba2(16, i3.byteLength);
      return (C2(), E2).set(new Uint8Array(i3), a3 >>> 0), Cr2[e3].push(() => qi2(a3)), a3;
    }
    function Jr2(e3, t3, n3) {
      n3 >>>= 0;
      var r3 = j2(e3 >>>= 0);
      n3 == 4294967295 && (n3 = void 0);
      try {
        var i3 = r3.getMappedRange(t3 >>> 0, n3);
      } catch {
        return 0;
      }
      var a3 = ba2(16, i3.byteLength);
      return (C2(), E2).fill(0, a3, i3.byteLength), Cr2[e3].push(() => {
        new Uint8Array(i3).set((C2(), E2).subarray(a3 >>> 0, a3 + i3.byteLength >>> 0)), qi2(a3);
      }), a3;
    }
    function Yr2(e3, t3, n3, r3, i3) {
      e3 >>>= 0, t3 = Fe2(t3), n3 = Fe2(n3), i3 >>>= 0;
      var a3 = j2(e3);
      Cr2[e3] = [], i3 == 4294967295 && (i3 = void 0), ve2 += 1, Tr2(t3, a3.mapAsync(n3, r3 >>> 0, i3).then(() => {
        --ve2, Yt2(() => {
          ca2(t3, 1, 0);
        });
      }, (n4) => {
        --ve2, Yt2(() => {
          L2();
          var r4 = yr2(n4.message);
          ca2(t3, n4.name === `AbortError` ? 4 : n4.name === `OperationError` ? 3 : 0, r4), delete Cr2[e3];
        });
      }));
    }
    function Xr2(e3) {
      var t3 = j2(e3 >>>= 0), n3 = Cr2[e3];
      if (n3) {
        for (var r3 = 0; r3 < n3.length; ++r3) n3[r3]();
        delete Cr2[e3], t3.unmap();
      }
    }
    function Zr2(e3) {
      delete xr2[e3 >>> 0];
    }
    function Qr2(e3, t3, n3) {
      e3 >>>= 0, t3 >>>= 0, n3 >>>= 0;
      var r3 = !!(C2(), O2)[t3 + 32 >>> 2 >>> 0];
      t3 = {
        label: kr2(t3 + 4),
        usage: (C2(), O2)[t3 + 16 >>> 2 >>> 0],
        size: br2(t3 + 24),
        mappedAtCreation: r3
      }, e3 = j2(e3);
      try {
        var i3 = e3.createBuffer(t3);
      } catch {
        return false;
      }
      return xr2[n3 >>> 0] = i3, r3 && (Cr2[n3] = []), true;
    }
    function N2(e3, t3, n3, r3) {
      e3 >>>= 0, t3 = Fe2(t3), r3 >>>= 0, n3 = Ar2(n3 >>> 0), e3 = j2(e3), ve2 += 1, Tr2(t3, e3.createComputePipelineAsync(n3).then((e4) => {
        --ve2, Yt2(() => {
          xr2[r3 >>> 0] = e4, oa2(t3, 1, r3, 0);
        });
      }, (e4) => {
        --ve2, Yt2(() => {
          var n4 = L2(), i3 = yr2(e4.message);
          oa2(t3, e4.reason === `validation` ? 3 : e4.reason === `internal` ? 4 : 0, r3, i3), I2(n4);
        });
      }));
    }
    function $r2(e3, t3, n3) {
      e3 >>>= 0, t3 >>>= 0, n3 >>>= 0;
      var r3 = (C2(), O2)[t3 >>> 2 >>> 0], i3 = (C2(), D2)[r3 + 4 >>> 2 >>> 0];
      t3 = {
        label: kr2(t3 + 4),
        code: ``
      }, i3 === 2 && (t3.code = Or2(r3 + 8)), e3 = j2(e3).createShaderModule(t3), xr2[n3 >>> 0] = e3;
    }
    var ei2 = (e3) => {
      (e3 = j2(e3)).onuncapturederror = null, e3.destroy();
    };
    function ti2(e3, t3) {
      t3 = Fe2(t3), e3 = j2(e3 >>> 0), ve2 += 1, Tr2(t3, e3.popErrorScope().then((e4) => {
        --ve2, Yt2(() => {
          var n3 = 5;
          e4 ? e4 instanceof GPUValidationError ? n3 = 2 : e4 instanceof GPUOutOfMemoryError ? n3 = 3 : e4 instanceof GPUInternalError && (n3 = 4) : n3 = 1;
          var r3 = L2(), i3 = e4 ? yr2(e4.message) : 0;
          la2(t3, 1, n3, i3), I2(r3);
        });
      }, (e4) => {
        --ve2, Yt2(() => {
          var n3 = L2(), r3 = yr2(e4.message);
          la2(t3, 1, 5, r3), I2(n3);
        });
      }));
    }
    function ni2(e3, t3, n3, r3) {
      if (t3 = Fe2(t3), r3 >>>= 0, n3 >>>= 0) {
        var i3 = {
          featureLevel: Fr2[(C2(), D2)[n3 + 4 >>> 2 >>> 0]],
          powerPreference: Lr2[(C2(), D2)[n3 + 8 >>> 2 >>> 0]],
          forceFallbackAdapter: !!(C2(), O2)[n3 + 12 >>> 2 >>> 0]
        };
        (e3 = (C2(), O2)[n3 >>> 2 >>> 0]) !== 0 && (C2(), i3.Ye = !!(C2(), O2)[e3 + 8 >>> 2 >>> 0]);
      }
      `gpu` in navigator ? (ve2 += 1, Tr2(t3, navigator.gpu.requestAdapter(i3).then((e4) => {
        --ve2, Yt2(() => {
          if (e4) xr2[r3 >>> 0] = e4, ua2(t3, 1, r3, 0);
          else {
            var n4 = L2(), i4 = yr2(`WebGPU not available on this browser (requestAdapter returned null)`);
            ua2(t3, 3, r3, i4), I2(n4);
          }
        });
      }, (e4) => {
        --ve2, Yt2(() => {
          var n4 = L2(), i4 = yr2(e4.message);
          ua2(t3, 4, r3, i4), I2(n4);
        });
      }))) : (i3 = L2(), e3 = yr2(`WebGPU not available on this browser (navigator.gpu is not available)`), ua2(t3, 3, r3, e3), I2(i3));
    }
    function ri2(e3, t3, n3) {
      return e3 >>>= 0, t3 >>>= 0, n3 >>>= 0, vn2(async () => {
        var r3 = [];
        if (n3) {
          var i3 = (C2(), D2)[n3 >>> 2 >>> 0];
          r3.length = t3 + 1, r3[t3] = new Promise((e4) => setTimeout(e4, i3, 0));
        } else r3.length = t3;
        for (var a3 = 0; a3 < t3; ++a3) {
          var o3 = br2(e3 + 8 * a3);
          if (!(o3 in wr2)) return o3;
          r3[a3] = wr2[o3];
        }
        return r3 = await Promise.race(r3), delete wr2[r3], r3;
      });
    }
    var ii2, ai2 = {}, oi2 = () => {
      var _a5;
      if (!ii2) {
        var e3, t3 = {
          USER: `web_user`,
          LOGNAME: `web_user`,
          PATH: `/`,
          PWD: `/`,
          HOME: `/home/web_user`,
          LANG: (((_a5 = globalThis.navigator) == null ? void 0 : _a5.language) ?? `C`).replace(`-`, `_`) + `.UTF-8`,
          _: `./this.program`
        };
        for (e3 in ai2) ai2[e3] === void 0 ? delete t3[e3] : t3[e3] = ai2[e3];
        var n3 = [];
        for (e3 in t3) n3.push(`${e3}=${t3[e3]}`);
        ii2 = n3;
      }
      return ii2;
    };
    function si2(e3, t3) {
      if (i2) return ye2(19, 1, e3, t3);
      e3 >>>= 0, t3 >>>= 0;
      var n3, r3 = 0, a3 = 0;
      for (n3 of oi2()) {
        var o3 = t3 + r3;
        (C2(), O2)[e3 + a3 >>> 2 >>> 0] = o3, r3 += It2(n3, o3, 1 / 0) + 1, a3 += 4;
      }
      return 0;
    }
    function ci2(e3, t3) {
      if (i2) return ye2(20, 1, e3, t3);
      e3 >>>= 0, t3 >>>= 0;
      var n3 = oi2();
      for (var r3 of ((C2(), O2)[e3 >>> 2 >>> 0] = n3.length, e3 = 0, n3)) e3 += Lt2(r3) + 1;
      return (C2(), O2)[t3 >>> 2 >>> 0] = e3, 0;
    }
    function li2(e3) {
      return i2 ? ye2(21, 1, e3) : 52;
    }
    function ui2(e3, t3, n3, r3, a3) {
      return i2 ? ye2(22, 1, e3, t3, n3, r3, a3) : 52;
    }
    function P2(e3, t3, n3, r3) {
      return i2 ? ye2(23, 1, e3, t3, n3, r3) : 52;
    }
    function di2(e3, t3, n3, r3) {
      return i2 ? ye2(24, 1, e3, t3, n3, r3) : 70;
    }
    var fi2 = [
      null,
      [],
      []
    ];
    function pi2(e3, t3, n3, r3) {
      if (i2) return ye2(25, 1, e3, t3, n3, r3);
      t3 >>>= 0, n3 >>>= 0, r3 >>>= 0;
      for (var a3 = 0, o3 = 0; o3 < n3; o3++) {
        var s3 = (C2(), O2)[t3 >>> 2 >>> 0], c3 = (C2(), O2)[t3 + 4 >>> 2 >>> 0];
        t3 += 8;
        for (var l3 = 0; l3 < c3; l3++) {
          var u3 = e3, d3 = (C2(), E2)[s3 + l3 >>> 0], f3 = fi2[u3];
          d3 === 0 || d3 === 10 ? ((u3 === 1 ? y2 : b2)(et2(f3)), f3.length = 0) : f3.push(d3);
        }
        a3 += c3;
      }
      return (C2(), O2)[r3 >>> 2 >>> 0] = a3, 0;
    }
    function mi2(e3) {
      return e3 >>> 0;
    }
    function hi2(e3, t3) {
      return jr2(j2(e3 >>> 0).limits, t3 >>> 0), 1;
    }
    function gi2(e3, t3) {
      return j2(e3 >>> 0).features.has(Ir2[t3]);
    }
    function _i3(e3) {
      return BigInt(j2(e3 >>> 0).size);
    }
    function vi2(e3) {
      return BigInt(j2(e3 >>> 0).usage);
    }
    function yi2(e3, t3) {
      if (e3 >>>= 0, t3 >>>= 0) {
        var n3 = kr2(t3 + 4);
        n3 = {
          label: n3,
          timestampWrites: t3 = (t3 = (C2(), O2)[t3 + 12 >>> 2 >>> 0]) === 0 ? void 0 : {
            querySet: j2((C2(), O2)[t3 + 4 >>> 2 >>> 0]),
            beginningOfPassWriteIndex: (C2(), O2)[t3 + 8 >>> 2 >>> 0],
            endOfPassWriteIndex: (C2(), O2)[t3 + 12 >>> 2 >>> 0]
          }
        };
      }
      return t3 = j2(e3), e3 = ea2(0), n3 = t3.beginComputePass(n3), xr2[e3 >>> 0] = n3, e3;
    }
    function bi2(e3, t3, n3, r3) {
      n3 = Fe2(n3), (r3 = Fe2(r3)) == -1 && (r3 = void 0), (e3 = j2(e3 >>> 0)).clearBuffer(j2(t3 >>> 0), n3, r3);
    }
    function xi2(e3, t3, n3, r3, i3, a3) {
      n3 = Fe2(n3), i3 = Fe2(i3), a3 = Fe2(a3), j2(e3 >>> 0).copyBufferToBuffer(j2(t3 >>> 0), n3, j2(r3 >>> 0), i3, a3);
    }
    function Si2(e3) {
      var t3 = j2(e3 >>> 0);
      return e3 = Qi2(0), t3 = t3.finish(), xr2[e3 >>> 0] = t3, e3;
    }
    function Ci2(e3, t3, n3, r3, i3, a3) {
      a3 = Fe2(a3), j2(e3 >>> 0).resolveQuerySet(j2(t3 >>> 0), n3, r3, j2(i3 >>> 0), a3);
    }
    function wi2(e3, t3, n3, r3) {
      j2(e3 >>> 0).dispatchWorkgroups(t3, n3, r3);
    }
    function Ti2(e3, t3, n3) {
      n3 = Fe2(n3), j2(e3 >>> 0).dispatchWorkgroupsIndirect(j2(t3 >>> 0), n3);
    }
    function Ei2(e3) {
      j2(e3 >>> 0).end();
    }
    function Di2(e3, t3, n3, r3, i3) {
      r3 >>>= 0, i3 >>>= 0, e3 = j2(e3 >>> 0), n3 = j2(n3 >>> 0), r3 == 0 ? e3.setBindGroup(t3, n3) : e3.setBindGroup(t3, n3, (C2(), O2), i3 >>> 2, r3);
    }
    function Oi2(e3, t3) {
      j2(e3 >>> 0).setPipeline(j2(t3 >>> 0));
    }
    function ki2(e3, t3, n3) {
      j2(e3 >>> 0).Xe(j2(t3 >>> 0), n3);
    }
    function Ai2(e3, t3) {
      function n3(e4) {
        var t4 = (C2(), O2)[e4 + 8 >>> 2 >>> 0], n4 = (C2(), O2)[e4 + 32 >>> 2 >>> 0], r4 = (C2(), O2)[e4 + 36 >>> 2 >>> 0], i3 = 0;
        return Er2(e4, {
          14: (e5) => {
            i3 = (C2(), O2)[e5 + 8 >>> 2 >>> 0];
          }
        }), t4 ? ((n4 = br2(e4 + 24)) == -1 && (n4 = void 0), t4 = {
          buffer: j2(t4),
          offset: br2(e4 + 16),
          size: n4
        }) : t4 = j2(n4 || r4 || i3), {
          binding: (C2(), O2)[e4 + 4 >>> 2 >>> 0],
          resource: t4
        };
      }
      e3 >>>= 0, t3 = {
        label: kr2((t3 >>>= 0) + 4),
        layout: j2((C2(), O2)[t3 + 12 >>> 2 >>> 0]),
        entries: (function(e4, t4) {
          for (var r4 = [], i3 = 0; i3 < e4; ++i3) r4.push(n3(t4 + 40 * i3));
          return r4;
        })((C2(), O2)[t3 + 16 >>> 2 >>> 0], (C2(), O2)[t3 + 20 >>> 2 >>> 0])
      }, e3 = j2(e3);
      var r3 = Xi2(0);
      return Sr2(r3, e3.createBindGroup(t3)), r3;
    }
    function ji2(e3, t3) {
      function n3(e4) {
        var t4 = (C2(), O2)[e4 + 4 >>> 2 >>> 0];
        if (t4) return {
          type: Nr2[t4],
          hasDynamicOffset: !!(C2(), O2)[e4 + 8 >>> 2 >>> 0],
          minBindingSize: br2(e4 + 16)
        };
      }
      function r3(e4) {
        if (e4 = (C2(), O2)[e4 + 4 >>> 2 >>> 0]) return {
          type: zr2[e4]
        };
      }
      function i3(e4) {
        var t4 = (C2(), O2)[e4 + 4 >>> 2 >>> 0];
        if (t4) return {
          sampleType: Ur2[t4],
          viewDimension: Wr2[(C2(), D2)[e4 + 8 >>> 2 >>> 0]],
          multisampled: !!(C2(), O2)[e4 + 12 >>> 2 >>> 0]
        };
      }
      function a3(e4) {
        var t4 = (C2(), O2)[e4 + 4 >>> 2 >>> 0];
        if (t4) return {
          access: Br2[t4],
          format: Hr2[(C2(), D2)[e4 + 8 >>> 2 >>> 0]],
          viewDimension: Wr2[(C2(), D2)[e4 + 12 >>> 2 >>> 0]]
        };
      }
      function o3(e4) {
        var t4 = {
          binding: (C2(), O2)[e4 + 4 >>> 2 >>> 0],
          visibility: (C2(), O2)[e4 + 8 >>> 2 >>> 0],
          buffer: n3(e4 + 24),
          sampler: r3(e4 + 48),
          texture: i3(e4 + 56),
          storageTexture: a3(e4 + 72)
        };
        return Er2(e4, {
          13: () => {
            t4.externalTexture = {};
          }
        }), t4;
      }
      e3 >>>= 0, t3 = {
        label: kr2((t3 >>>= 0) + 4),
        entries: (function(e4, t4) {
          for (var n4 = [], r4 = 0; r4 < e4; ++r4) n4.push(o3(t4 + 88 * r4));
          return n4;
        })((C2(), O2)[t3 + 12 >>> 2 >>> 0], (C2(), O2)[t3 + 16 >>> 2 >>> 0])
      }, e3 = j2(e3);
      var s3 = Zi2(0);
      return Sr2(s3, e3.createBindGroupLayout(t3)), s3;
    }
    function Mi2(e3, t3) {
      var n3;
      return e3 >>>= 0, (t3 >>>= 0) && (n3 = {
        label: kr2(t3 + 4)
      }), t3 = j2(e3), e3 = $i2(0), n3 = t3.createCommandEncoder(n3), xr2[e3 >>> 0] = n3, e3;
    }
    function Ni2(e3, t3) {
      e3 >>>= 0, t3 >>>= 0;
      for (var n3 = (C2(), O2)[t3 + 12 >>> 2 >>> 0], r3 = (C2(), O2)[t3 + 16 >>> 2 >>> 0], i3 = [], a3 = 0; a3 < n3; ++a3) i3.push(j2((C2(), O2)[r3 + 4 * a3 >>> 2 >>> 0]));
      return t3 = {
        label: kr2(t3 + 4),
        bindGroupLayouts: i3,
        immediateSize: (C2(), O2)[t3 + 20 >>> 2 >>> 0]
      }, n3 = j2(e3), e3 = ta2(0), t3 = n3.createPipelineLayout(t3), xr2[e3 >>> 0] = t3, e3;
    }
    function Pi2(e3, t3) {
      e3 >>>= 0, t3 >>>= 0, t3 = {
        type: Rr2[(C2(), D2)[t3 + 12 >>> 2 >>> 0]],
        count: (C2(), O2)[t3 + 16 >>> 2 >>> 0]
      };
      var n3 = j2(e3);
      return e3 = na2(0), t3 = n3.createQuerySet(t3), xr2[e3 >>> 0] = t3, e3;
    }
    function Fi2(e3, t3) {
      return Mr2(j2(e3 >>> 0).adapterInfo, t3 >>> 0), 1;
    }
    var Ii2 = {
      "core-features-and-limits": 1,
      "depth-clip-control": 2,
      "depth32float-stencil8": 3,
      "texture-compression-bc": 4,
      "texture-compression-bc-sliced-3d": 5,
      "texture-compression-etc2": 6,
      "texture-compression-astc": 7,
      "texture-compression-astc-sliced-3d": 8,
      "timestamp-query": 9,
      "indirect-first-instance": 10,
      "shader-f16": 11,
      "rg11b10ufloat-renderable": 12,
      "bgra8unorm-storage": 13,
      "float32-filterable": 14,
      "float32-blendable": 15,
      "clip-distances": 16,
      "dual-source-blending": 17,
      subgroups: 18,
      "texture-formats-tier1": 19,
      "texture-formats-tier2": 20,
      "primitive-index": 21,
      "texture-component-swizzle": 22,
      "subgroup-size-control": 23,
      "chromium-experimental-unorm16-texture-formats": 327692,
      "chromium-experimental-multi-draw-indirect": 327729,
      "chromium-experimental-subgroup-matrix": 327732
    };
    function Li2(e3, t3) {
      t3 >>>= 0;
      var n3 = j2(e3 >>> 0);
      e3 = Ji2(4 * n3.features.size);
      var r3 = 0, i3 = 0;
      for (let t4 of n3.features) 0 <= (n3 = Ii2[t4]) && ((C2(), D2)[e3 + r3 >>> 2 >>> 0] = n3, r3 += 4, i3++);
      (C2(), O2)[t3 + 4 >>> 2 >>> 0] = e3, (C2(), O2)[t3 >>> 2 >>> 0] = i3;
    }
    function Ri2(e3, t3) {
      return jr2(j2(e3 >>> 0).limits, t3 >>> 0), 1;
    }
    function zi2(e3, t3) {
      j2(e3 >>> 0).pushErrorScope(Pr2[t3]);
    }
    function Bi2(e3, t3, n3) {
      t3 >>>= 0, n3 >>>= 0, e3 = j2(e3 >>> 0), t3 = Array.from((C2(), D2).subarray(n3 >>> 2 >>> 0, n3 + 4 * t3 >>> 2 >>> 0), (e4) => j2(e4)), e3.submit(t3);
    }
    function Vi2(e3, t3, n3, r3, i3) {
      n3 = Fe2(n3), r3 >>>= 0, i3 >>>= 0, e3 = j2(e3 >>> 0), t3 = j2(t3 >>> 0), r3 = (C2(), E2).subarray(r3 >>> 0, r3 + i3 >>> 0), e3.writeBuffer(t3, n3, r3, 0, i3);
    }
    i2 || (function() {
      for (var e3 = t2.numThreads - 1; e3--; ) Ae2();
      me2.push(async () => {
        var e4 = (async function() {
          if (!i2) return Promise.all(Ce2.map(ke2));
        })();
        he2++, await e4, --he2 == 0 && ge2 && (e4 = ge2, ge2 = null, e4());
      });
    })(), i2 || (je2 = new WebAssembly.Memory({
      initial: 256,
      maximum: 65536,
      shared: true
    }), se2()), t2.wasmBinary && (d2 = t2.wasmBinary), t2.stackSave = () => L2(), t2.stackRestore = (e3) => I2(e3), t2.stackAlloc = (e3) => Ca2(e3), t2.setValue = function(e3, t3, n3 = `i8`) {
      switch (n3.endsWith(`*`) && (n3 = `*`), n3) {
        case `i1`:
        case `i8`:
          (C2(), T2)[e3 >>> 0] = t3;
          break;
        case `i16`:
          (C2(), ee2)[e3 >>> 1 >>> 0] = t3;
          break;
        case `i32`:
          (C2(), D2)[e3 >>> 2 >>> 0] = t3;
          break;
        case `i64`:
          (C2(), ie2)[e3 >>> 3 >>> 0] = BigInt(t3);
          break;
        case `float`:
          (C2(), ne2)[e3 >>> 2 >>> 0] = t3;
          break;
        case `double`:
          (C2(), re2)[e3 >>> 3 >>> 0] = t3;
          break;
        case `*`:
          (C2(), O2)[e3 >>> 2 >>> 0] = t3;
          break;
        default:
          le2(`invalid type for setValue: ${n3}`);
      }
    }, t2.getValue = function(e3, t3 = `i8`) {
      switch (t3.endsWith(`*`) && (t3 = `*`), t3) {
        case `i1`:
        case `i8`:
          return (C2(), T2)[e3 >>> 0];
        case `i16`:
          return (C2(), ee2)[e3 >>> 1 >>> 0];
        case `i32`:
          return (C2(), D2)[e3 >>> 2 >>> 0];
        case `i64`:
          return (C2(), ie2)[e3 >>> 3 >>> 0];
        case `float`:
          return (C2(), ne2)[e3 >>> 2 >>> 0];
        case `double`:
          return (C2(), re2)[e3 >>> 3 >>> 0];
        case `*`:
          return (C2(), O2)[e3 >>> 2 >>> 0];
        default:
          le2(`invalid type for getValue: ${t3}`);
      }
    }, t2.UTF8ToString = tt2, t2.stringToUTF8 = It2, t2.lengthBytesUTF8 = Lt2;
    var Hi2, Ui2, Wi2, Gi2, Ki2, qi2, Ji2, Yi2, Xi2, Zi2, Qi2, $i2, ea2, ta2, na2, ra2, ia2, aa2, oa2, sa2, ca2, la2, ua2, da2, fa2, pa2, ma2, ha2, ga2, _a3, va2, ya2, ba2, F2, xa2, Sa2, I2, Ca2, L2, wa2, Ta2, Ea2, Da2, Oa2, ka2, Aa2, ja2, Ma2, Na2, Pa2, Fa2, Ia2, La2, Ra2, za2, Ba2, Va2, Ha2, Ua2, Wa2, Ga2, Ka2, qa2, Ja2, Ya2, Xa2, Za2, Qa2, $a2, eo2, to2, no2, ro2, io2, ao2, oo2, so2, co2, lo2, uo2, fo2, po2, mo2, ho2, go2, _o3, vo2, yo2 = [
      be2,
      xe2,
      Ye2,
      nt2,
      rt2,
      it2,
      at2,
      ot2,
      st2,
      ct2,
      lt2,
      ut2,
      dt2,
      ft2,
      pt2,
      mt2,
      Kn2,
      qn2,
      Xn2,
      si2,
      ci2,
      li2,
      ui2,
      P2,
      di2,
      pi2
    ], bo2 = {
      1280444: (e3, n3, r3, i3, a3) => {
        if (t2 === void 0 || !t2.ed) return 1;
        if ((e3 = tt2(Number(e3 >>> 0))).startsWith(`./`) && (e3 = e3.substring(2)), !(e3 = t2.ed.get(e3))) return 2;
        if (n3 = Number(n3 >>> 0), r3 = Number(r3 >>> 0), i3 = Number(i3 >>> 0), n3 + r3 > e3.byteLength) return 3;
        try {
          let o3 = e3.subarray(n3, n3 + r3);
          switch (a3) {
            case 0:
              (C2(), E2).set(o3, i3 >>> 0);
              break;
            case 1:
              t2.pe ? t2.pe(i3, o3) : t2.Re(i3, o3);
              break;
            default:
              return 4;
          }
          return 0;
        } catch {
          return 4;
        }
      },
      1281268: (e3, n3, r3) => {
        t2.re(e3, (C2(), E2).subarray(n3 >>> 0, n3 + r3 >>> 0));
      },
      1281332: () => t2.Pe(),
      1281374: (e3) => {
        t2.qe(e3);
      },
      1281411: () => typeof wasmOffsetConverter < `u`
    };
    function xo2() {
      return typeof wasmOffsetConverter < `u`;
    }
    function So2(e3, t3, n3, r3) {
      var i3 = L2();
      try {
        return La2(e3, t3, n3, r3);
      } catch (e4) {
        if (I2(i3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Co2(e3, t3, n3) {
      var r3 = L2();
      try {
        return Pa2(e3, t3, n3);
      } catch (e4) {
        if (I2(r3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function wo2(e3) {
      var t3 = L2();
      try {
        Aa2(e3);
      } catch (e4) {
        if (I2(t3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function To2(e3, t3) {
      var n3 = L2();
      try {
        return ka2(e3, t3);
      } catch (e4) {
        if (I2(n3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Eo2(e3, t3, n3) {
      var r3 = L2();
      try {
        Oa2(e3, t3, n3);
      } catch (e4) {
        if (I2(r3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Do2(e3, t3) {
      var n3 = L2();
      try {
        Ra2(e3, t3);
      } catch (e4) {
        if (I2(n3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Oo2(e3, t3, n3, r3, i3, a3, o3) {
      var s3 = L2();
      try {
        return Na2(e3, t3, n3, r3, i3, a3, o3);
      } catch (e4) {
        if (I2(s3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function R2(e3, t3, n3, r3, i3, a3) {
      var o3 = L2();
      try {
        ja2(e3, t3, n3, r3, i3, a3);
      } catch (e4) {
        if (I2(o3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function ko2(e3, t3, n3, r3) {
      var i3 = L2();
      try {
        Ia2(e3, t3, n3, r3);
      } catch (e4) {
        if (I2(i3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Ao2(e3, t3, n3, r3, i3, a3, o3) {
      var s3 = L2();
      try {
        Ba2(e3, t3, n3, r3, i3, a3, o3);
      } catch (e4) {
        if (I2(s3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function jo2(e3, t3, n3, r3, i3, a3, o3) {
      var s3 = L2();
      try {
        Va2(e3, t3, n3, r3, i3, a3, o3);
      } catch (e4) {
        if (I2(s3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Mo2(e3, t3, n3, r3, i3, a3, o3, s3) {
      var c3 = L2();
      try {
        Za2(e3, t3, n3, r3, i3, a3, o3, s3);
      } catch (e4) {
        if (I2(c3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function No2(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3) {
      var f3 = L2();
      try {
        Ha2(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3);
      } catch (e4) {
        if (I2(f3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Po2(e3, t3, n3, r3, i3) {
      var a3 = L2();
      try {
        return za2(e3, t3, n3, r3, i3);
      } catch (e4) {
        if (I2(a3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Fo2(e3, t3, n3, r3, i3, a3) {
      var o3 = L2();
      try {
        Qa2(e3, t3, n3, r3, i3, a3);
      } catch (e4) {
        if (I2(o3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Io2(e3, t3, n3, r3, i3) {
      var a3 = L2();
      try {
        Ma2(e3, t3, n3, r3, i3);
      } catch (e4) {
        if (I2(a3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Lo2(e3, t3, n3, r3, i3, a3, o3, s3) {
      var c3 = L2();
      try {
        Fa2(e3, t3, n3, r3, i3, a3, o3, s3);
      } catch (e4) {
        if (I2(c3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Ro2(e3) {
      var t3 = L2();
      try {
        return $a2(e3);
      } catch (e4) {
        if (I2(t3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function zo2(e3, t3, n3, r3, i3, a3, o3, s3, c3) {
      var l3 = L2();
      try {
        Wa2(e3, t3, n3, r3, i3, a3, o3, s3, c3);
      } catch (e4) {
        if (I2(l3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Bo2(e3, t3, n3) {
      var r3 = L2();
      try {
        return eo2(e3, t3, n3);
      } catch (e4) {
        if (I2(r3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Vo2(e3, t3) {
      var n3 = L2();
      try {
        return po2(e3, t3);
      } catch (e4) {
        if (I2(n3), e4 !== e4 + 0) throw e4;
        return F2(1, 0), 0n;
      }
    }
    function Ho2(e3, t3, n3, r3) {
      var i3 = L2();
      try {
        return to2(e3, t3, n3, r3);
      } catch (e4) {
        if (I2(i3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Uo2(e3) {
      var t3 = L2();
      try {
        return Ua2(e3);
      } catch (e4) {
        if (I2(t3), e4 !== e4 + 0) throw e4;
        return F2(1, 0), 0n;
      }
    }
    function Wo2(e3, t3, n3, r3) {
      var i3 = L2();
      try {
        return no2(e3, t3, n3, r3);
      } catch (e4) {
        if (I2(i3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Go2(e3, t3, n3, r3, i3) {
      var a3 = L2();
      try {
        return ro2(e3, t3, n3, r3, i3);
      } catch (e4) {
        if (I2(a3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Ko2(e3, t3, n3, r3, i3, a3) {
      var o3 = L2();
      try {
        return io2(e3, t3, n3, r3, i3, a3);
      } catch (e4) {
        if (I2(o3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function qo2(e3, t3, n3, r3, i3, a3) {
      var o3 = L2();
      try {
        return Ya2(e3, t3, n3, r3, i3, a3);
      } catch (e4) {
        if (I2(o3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Jo2(e3, t3, n3, r3, i3, a3) {
      var o3 = L2();
      try {
        return ao2(e3, t3, n3, r3, i3, a3);
      } catch (e4) {
        if (I2(o3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Yo2(e3, t3, n3, r3, i3, a3, o3, s3) {
      var c3 = L2();
      try {
        return Xa2(e3, t3, n3, r3, i3, a3, o3, s3);
      } catch (e4) {
        if (I2(c3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Xo2(e3, t3, n3, r3, i3) {
      var a3 = L2();
      try {
        return oo2(e3, t3, n3, r3, i3);
      } catch (e4) {
        if (I2(a3), e4 !== e4 + 0) throw e4;
        return F2(1, 0), 0n;
      }
    }
    function Zo2(e3, t3, n3, r3) {
      var i3 = L2();
      try {
        return so2(e3, t3, n3, r3);
      } catch (e4) {
        if (I2(i3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function Qo2(e3, t3, n3, r3) {
      var i3 = L2();
      try {
        return co2(e3, t3, n3, r3);
      } catch (e4) {
        if (I2(i3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function $o2(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3) {
      var f3 = L2();
      try {
        return lo2(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3);
      } catch (e4) {
        if (I2(f3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function es2(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3) {
      var d3 = L2();
      try {
        uo2(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3);
      } catch (e4) {
        if (I2(d3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function ts2(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3) {
      var g3 = L2();
      try {
        fo2(e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3);
      } catch (e4) {
        if (I2(g3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function ns2(e3, t3, n3) {
      var r3 = L2();
      try {
        return Ka2(e3, t3, n3);
      } catch (e4) {
        if (I2(r3), e4 !== e4 + 0) throw e4;
        return F2(1, 0), 0n;
      }
    }
    function rs2(e3, t3, n3) {
      var r3 = L2();
      try {
        return Ga2(e3, t3, n3);
      } catch (e4) {
        if (I2(r3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function is2(e3, t3, n3) {
      var r3 = L2();
      try {
        return qa2(e3, t3, n3);
      } catch (e4) {
        if (I2(r3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function as2(e3, t3, n3, r3) {
      var i3 = L2();
      try {
        Ja2(e3, t3, n3, r3);
      } catch (e4) {
        if (I2(i3), e4 !== e4 + 0) throw e4;
        F2(1, 0);
      }
    }
    function os2() {
      if (0 < he2) ge2 = os2;
      else if (i2) m2 == null ? void 0 : m2(t2), ce2();
      else {
        for (var e3 = me2; 0 < e3.length; ) e3.shift()(t2);
        0 < he2 ? ge2 = os2 : (t2.calledRun = true, x2 || (ce2(), m2 == null ? void 0 : m2(t2)));
      }
    }
    return i2 || (vo2 = await de2(), os2()), t2.PTR_SIZE = 4, t2.webgpuInit = (e3) => {
      let n3 = /* @__PURE__ */ new WeakMap(), r3, i3, a3 = 1;
      t2.webgpuRegisterDevice = (e4) => {
        if (i3 !== void 0) throw Error(`another WebGPU EP inference session is being created.`);
        if (e4) {
          var t3 = n3.get(e4);
          if (!t3) {
            let r4 = ((e5, t4 = 0) => {
              var n4 = aa2(t4);
              return t4 = ia2(t4, n4), xr2[n4 >>> 0] = e5.queue, xr2[t4 >>> 0] = e5, t4;
            })(e4, t3 = Wi2());
            t3 = [
              a3++,
              t3,
              r4
            ], n3.set(e4, t3);
          }
          return r3 = e4, i3 = t3[0], t3;
        }
        r3 = void 0, i3 = 0;
      };
      let o3 = /* @__PURE__ */ new Map();
      t2.webgpuOnCreateSession = (t3) => {
        if (i3 !== void 0) {
          var n4 = i3;
          if (i3 = void 0, t3) {
            let i4 = Gi2(n4);
            o3.set(t3, i4), n4 === 0 && e3(r3 ?? j2(i4));
          }
          r3 = void 0;
        }
      }, t2.webgpuOnReleaseSession = (e4) => {
        o3.delete(e4);
      };
      let s3 = Symbol(`gpuBufferMetadata`);
      t2.webgpuRegisterBuffer = (e4, t3, n4) => {
        if (n4) return e4[s3] = [
          n4,
          NaN
        ], n4;
        if (n4 = e4[s3]) return n4[1]++, n4[0];
        if ((t3 = o3.get(t3)) === void 0) throw Error(`Invalid session handle passed to webgpuRegisterBuffer`);
        return t3 = ((e5, t4 = 0) => (e5.mapState === `unmapped` || le2(), t4 = ra2(t4), xr2[t4 >>> 0] = e5, t4))(e4, t3), e4[s3] = [
          t3,
          1
        ], t3;
      }, t2.webgpuUnregisterBuffer = (e4) => {
        let t3 = e4[s3];
        if (!t3) throw Error(`Buffer is not registered`);
        t3[1]--, t3[1] === 0 && (Yi2(t3[0]), delete e4[s3]);
      }, t2.webgpuGetBuffer = (e4) => j2(e4), t2.webgpuCreateDownloader = (e4, t3, n4) => {
        if ((n4 = o3.get(n4)) === void 0) throw Error(`Invalid session handle passed to webgpuRegisterBuffer`);
        let r4 = j2(n4), i4 = 16 * Math.ceil(Number(t3) / 16);
        return async () => {
          let n5 = r4.createBuffer({
            size: i4,
            usage: 9
          });
          try {
            let a4 = r4.createCommandEncoder();
            return a4.copyBufferToBuffer(e4, 0, n5, 0, i4), r4.queue.submit([
              a4.finish()
            ]), await n5.mapAsync(GPUMapMode.READ), n5.getMappedRange().slice(0, t3);
          } finally {
            n5.destroy();
          }
        };
      }, t2.pe = (e4, t3) => {
        var n4 = t3.buffer;
        let a4 = t3.byteOffset, o4 = t3.byteLength;
        if (t3 = 16 * Math.ceil(Number(o4) / 16), e4 = j2(e4), !r3) {
          var s4 = Gi2(i3);
          r3 = j2(s4);
        }
        let c3 = (s4 = r3.createBuffer({
          mappedAtCreation: true,
          size: t3,
          usage: 6
        })).getMappedRange();
        new Uint8Array(c3).set(new Uint8Array(n4, a4, o4)), s4.unmap(), (n4 = r3.createCommandEncoder()).copyBufferToBuffer(s4, 0, e4, 0, t3), r3.queue.submit([
          n4.finish()
        ]), s4.destroy();
      };
    }, t2.webnnInit = (e3) => {
      let n3 = e3[0];
      [t2.Pe, t2.qe, t2.webnnEnsureTensor, t2.re, t2.webnnDownloadTensor, t2.Oe, t2.webnnEnableTraceEvent] = e3.slice(1), t2.webnnReleaseTensorId = t2.qe, t2.webnnUploadTensor = t2.re, t2.webnnRegisterMLContext = t2.Oe, t2.webnnOnRunStart = (e4) => n3.onRunStart(e4), t2.webnnOnRunEnd = n3.onRunEnd.bind(n3), t2.webnnOnReleaseSession = (e4) => {
        n3.onReleaseSession(e4);
      }, t2.webnnCreateMLTensorDownloader = (e4, t3) => n3.createMLTensorDownloader(e4, t3), t2.webnnRegisterMLTensor = (e4, t3, r3, i3) => n3.registerMLTensor(e4, t3, r3, i3), t2.webnnCreateMLContext = (e4) => n3.createMLContext(e4), t2.webnnRegisterGraphInput = n3.registerGraphInput.bind(n3), t2.webnnIsGraphInput = n3.isGraphInput.bind(n3), t2.webnnRegisterGraphOutput = n3.registerGraphOutput.bind(n3), t2.webnnIsGraphOutput = n3.isGraphOutput.bind(n3), t2.webnnCreateTemporaryTensor = n3.createTemporaryTensor.bind(n3), t2.webnnIsGraphInputOutputTypeSupported = n3.isGraphInputOutputTypeSupported.bind(n3);
    }, k2 ? t2 : new Promise((e3, t3) => {
      m2 = e3, h2 = t3;
    });
  }
  var Ue, We, Ge = c(() => {
    var _a3, _b3;
    Ue = He, We = (_b3 = (_a3 = globalThis.self) == null ? void 0 : _a3.name) == null ? void 0 : _b3.startsWith(`em-pthread`), We && He();
  }), Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot = c(() => {
    Fe(), Ke = typeof location > `u` ? void 0 : location.origin, qe = import.meta.url > `file:` && import.meta.url < `file;`, Je = () => qe ? new URL(new URL(`ort.webgpu.bundle.min.mjs`, import.meta.url).href, Ke).href : import.meta.url, Ye = Je(), Xe = () => {
      if (Ye && !Ye.startsWith(`blob:`)) return Ye.substring(0, Ye.lastIndexOf(`/`) + 1);
    }, Ze = (e2, t2) => {
      try {
        let n2 = t2 ?? Ye;
        return (n2 ? new URL(e2, n2) : new URL(e2)).origin === Ke;
      } catch {
        return false;
      }
    }, Qe = (e2, t2) => {
      let n2 = t2 ?? Ye;
      try {
        return (n2 ? new URL(e2, n2) : new URL(e2)).href;
      } catch {
        return;
      }
    }, $e = (e2, t2) => `${t2 ?? `./`}${e2}`, et = async (e2) => {
      let t2 = await (await fetch(e2, {
        credentials: `same-origin`
      })).blob();
      return URL.createObjectURL(t2);
    }, tt = async (e2) => (await import(e2).then(async (m2) => {
      await m2.__tla;
      return m2;
    })).default, nt = (Be(), d(Ie)).default, rt = async () => {
      if (!Ye) throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);
      if (Ze(Ye)) return [
        void 0,
        nt()
      ];
      let e2 = await et(Ye);
      return [
        e2,
        nt(e2)
      ];
    }, it = (Ge(), d(Ve)).default, at = async (e2, t2, n2, r2) => {
      let i2 = it && !(e2 || t2);
      if (i2) {
        if (Ye) i2 = Ze(Ye) || r2 && !n2;
        else if (r2 && !n2) i2 = true;
        else throw Error(`cannot determine the script source URL.`);
      }
      if (i2) return [
        void 0,
        it
      ];
      {
        let r3 = `ort-wasm-simd-threaded.asyncify.mjs`, i3 = e2 ?? Qe(r3, t2), a2 = n2 && i3 && !Ze(i3, t2), o2 = a2 ? await et(i3) : i3 ?? $e(r3, t2);
        return [
          a2 ? o2 : void 0,
          await tt(o2)
        ];
      }
    };
  }), st, ct, lt, ut, dt, ft, pt, mt, ht, gt = c(() => {
    ot(), ct = false, lt = false, ut = false, dt = () => {
      if (typeof SharedArrayBuffer > `u`) return false;
      try {
        return typeof MessageChannel < `u` && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(new Uint8Array([
          0,
          97,
          115,
          109,
          1,
          0,
          0,
          0,
          1,
          4,
          1,
          96,
          0,
          0,
          3,
          2,
          1,
          0,
          5,
          4,
          1,
          3,
          1,
          1,
          10,
          11,
          1,
          9,
          0,
          65,
          0,
          254,
          16,
          2,
          0,
          26,
          11
        ]));
      } catch {
        return false;
      }
    }, ft = () => {
      try {
        return WebAssembly.validate(new Uint8Array([
          0,
          97,
          115,
          109,
          1,
          0,
          0,
          0,
          1,
          4,
          1,
          96,
          0,
          0,
          3,
          2,
          1,
          0,
          10,
          30,
          1,
          28,
          0,
          65,
          0,
          253,
          15,
          253,
          12,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          253,
          186,
          1,
          26,
          11
        ]));
      } catch {
        return false;
      }
    }, pt = () => {
      try {
        return WebAssembly.validate(new Uint8Array([
          0,
          97,
          115,
          109,
          1,
          0,
          0,
          0,
          1,
          5,
          1,
          96,
          0,
          1,
          123,
          3,
          2,
          1,
          0,
          10,
          19,
          1,
          17,
          0,
          65,
          1,
          253,
          15,
          65,
          2,
          253,
          15,
          65,
          3,
          253,
          15,
          253,
          147,
          2,
          11
        ]));
      } catch {
        return false;
      }
    }, mt = async (e2) => {
      if (ct) return Promise.resolve();
      if (lt) throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);
      if (ut) throw Error(`previous call to 'initializeWebAssembly()' failed.`);
      lt = true;
      let t2 = e2.initTimeout, n2 = e2.numThreads;
      if (e2.simd !== false) {
        if (e2.simd === `relaxed`) {
          if (!pt()) throw Error(`Relaxed WebAssembly SIMD is not supported in the current environment.`);
        } else if (!ft()) throw Error(`WebAssembly SIMD is not supported in the current environment.`);
      }
      let r2 = dt();
      n2 > 1 && !r2 && (typeof self < `u` && !self.crossOriginIsolated && console.warn(`env.wasm.numThreads is set to ` + n2 + `, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`), console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`), e2.numThreads = n2 = 1);
      let i2 = e2.wasmPaths, a2 = typeof i2 == `string` ? i2 : void 0, o2 = i2 == null ? void 0 : i2.mjs, s2 = (o2 == null ? void 0 : o2.href) ?? o2, c2 = i2 == null ? void 0 : i2.wasm, l2 = (c2 == null ? void 0 : c2.href) ?? c2, u2 = e2.wasmBinary, [d2, f2] = await at(s2, a2, n2 > 1, !!u2 || !!l2), p2 = false, m2 = [];
      if (t2 > 0 && m2.push(new Promise((e3) => {
        setTimeout(() => {
          p2 = true, e3();
        }, t2);
      })), m2.push(new Promise((e3, t3) => {
        let r3 = {
          numThreads: n2
        };
        if (u2) r3.wasmBinary = u2, r3.locateFile = (e4) => e4;
        else if (l2 || a2) r3.locateFile = (e4) => l2 ?? a2 + e4;
        else if (s2 && s2.indexOf(`blob:`) !== 0) r3.locateFile = (e4) => new URL(e4, s2).href;
        else if (d2) {
          let e4 = Xe();
          e4 && (r3.locateFile = (t4) => e4 + t4);
        }
        f2(r3).then((t4) => {
          lt = false, ct = true, st = t4, e3(), d2 && URL.revokeObjectURL(d2);
        }, (e4) => {
          lt = false, ut = true, t3(e4);
        });
      })), await Promise.race(m2), p2) throw Error(`WebAssembly backend initializing failed due to timeout: ${t2}ms`);
    }, ht = () => {
      if (ct && st) return st;
      throw Error(`WebAssembly is not initialized yet.`);
    };
  }), _t, vt, A, yt = c(() => {
    gt(), _t = (e2, t2) => {
      let n2 = ht(), r2 = n2.lengthBytesUTF8(e2) + 1, i2 = n2._malloc(r2);
      return n2.stringToUTF8(e2, i2, r2), t2.push(i2), i2;
    }, vt = (e2, t2, n2, r2) => {
      if (typeof e2 == `object` && e2) {
        if (n2.has(e2)) throw Error(`Circular reference in options`);
        n2.add(e2);
      }
      Object.entries(e2).forEach(([e3, i2]) => {
        let a2 = t2 ? t2 + e3 : e3;
        if (typeof i2 == `object`) vt(i2, a2 + `.`, n2, r2);
        else if (typeof i2 == `string` || typeof i2 == `number`) r2(a2, i2.toString());
        else if (typeof i2 == `boolean`) r2(a2, i2 ? `1` : `0`);
        else throw Error(`Can't handle extra config type: ${typeof i2}`);
      });
    }, A = (e2) => {
      let t2 = ht(), n2 = t2.stackSave();
      try {
        let n3 = t2.PTR_SIZE, r2 = t2.stackAlloc(2 * n3);
        t2._OrtGetLastError(r2, r2 + n3);
        let i2 = Number(t2.getValue(r2, n3 === 4 ? `i32` : `i64`)), a2 = t2.getValue(r2 + n3, `*`), o2 = a2 ? t2.UTF8ToString(a2) : ``;
        throw Error(`${e2} ERROR_CODE: ${i2}, ERROR_MESSAGE: ${o2}`);
      } finally {
        t2.stackRestore(n2);
      }
    };
  }), bt, xt = c(() => {
    gt(), yt(), bt = (e2) => {
      let t2 = ht(), n2 = 0, r2 = [], i2 = e2 || {};
      try {
        if ((e2 == null ? void 0 : e2.logSeverityLevel) === void 0) i2.logSeverityLevel = 2;
        else if (typeof e2.logSeverityLevel != `number` || !Number.isInteger(e2.logSeverityLevel) || e2.logSeverityLevel < 0 || e2.logSeverityLevel > 4) throw Error(`log severity level is not valid: ${e2.logSeverityLevel}`);
        if ((e2 == null ? void 0 : e2.logVerbosityLevel) === void 0) i2.logVerbosityLevel = 0;
        else if (typeof e2.logVerbosityLevel != `number` || !Number.isInteger(e2.logVerbosityLevel)) throw Error(`log verbosity level is not valid: ${e2.logVerbosityLevel}`);
        (e2 == null ? void 0 : e2.terminate) === void 0 && (i2.terminate = false);
        let a2 = 0;
        return (e2 == null ? void 0 : e2.tag) !== void 0 && (a2 = _t(e2.tag, r2)), n2 = t2._OrtCreateRunOptions(i2.logSeverityLevel, i2.logVerbosityLevel, !!i2.terminate, a2), n2 === 0 && A(`Can't create run options.`), (e2 == null ? void 0 : e2.extra) !== void 0 && vt(e2.extra, ``, /* @__PURE__ */ new WeakSet(), (e3, i3) => {
          let a3 = _t(e3, r2), o2 = _t(i3, r2);
          t2._OrtAddRunConfigEntry(n2, a3, o2) !== 0 && A(`Can't set a run config entry: ${e3} - ${i3}.`);
        }), [
          n2,
          r2
        ];
      } catch (e3) {
        throw n2 !== 0 && t2._OrtReleaseRunOptions(n2), r2.forEach((e4) => t2._free(e4)), e3;
      }
    };
  }), St, Ct, wt, Tt, Et, Dt, Ot, kt = c(() => {
    gt(), yt(), St = (e2) => {
      switch (e2) {
        case `disabled`:
          return 0;
        case `basic`:
          return 1;
        case `extended`:
          return 2;
        case `layout`:
          return 3;
        case `all`:
          return 99;
        default:
          throw Error(`unsupported graph optimization level: ${e2}`);
      }
    }, Ct = (e2) => {
      switch (e2) {
        case `sequential`:
          return 0;
        case `parallel`:
          return 1;
        default:
          throw Error(`unsupported execution mode: ${e2}`);
      }
    }, wt = (e2) => {
      e2.extra || (e2.extra = {}), e2.extra.session || (e2.extra.session = {});
      let t2 = e2.extra.session;
      t2.use_ort_model_bytes_directly || (t2.use_ort_model_bytes_directly = `1`), e2.executionProviders && e2.executionProviders.some((e3) => (typeof e3 == `string` ? e3 : e3.name) === `webgpu`) && (e2.enableMemPattern = false);
    }, Tt = (e2, t2, n2, r2) => {
      let i2 = _t(t2, r2), a2 = _t(n2, r2);
      ht()._OrtAddSessionConfigEntry(e2, i2, a2) !== 0 && A(`Can't set a session config entry: ${t2} - ${n2}.`);
    }, Et = (e2, t2, n2, r2) => {
      let i2 = _t(t2, r2), a2 = _t(n2, r2);
      e2.push([
        i2,
        a2
      ]);
    }, Dt = async (e2, t2, n2) => {
      let r2 = t2.executionProviders;
      for (let i2 of r2) {
        let r3 = typeof i2 == `string` ? i2 : i2.name, a2 = [];
        switch (r3) {
          case `webnn`:
            if (r3 = `WEBNN`, Tt(e2, `session.disable_quant_qdq`, `1`, n2), Tt(e2, `session.disable_qdq_constant_folding`, `1`, n2), typeof i2 != `string`) {
              let t3 = i2 == null ? void 0 : i2.deviceType;
              t3 && Tt(e2, `deviceType`, t3, n2);
            }
            break;
          case `webgpu`:
            {
              r3 = `WebGPU`;
              let e3;
              if (typeof i2 != `string`) {
                let r4 = i2;
                if (r4.device) {
                  if (typeof GPUDevice < `u` && r4.device instanceof GPUDevice) e3 = r4.device;
                  else throw Error(`Invalid GPU device set in WebGPU EP options.`);
                }
                let { enableGraphCapture: o4 } = t2;
                if (typeof o4 == `boolean` && o4 && Et(a2, `enableGraphCapture`, `1`, n2), typeof r4.preferredLayout == `string` && Et(a2, `preferredLayout`, r4.preferredLayout, n2), r4.forceCpuNodeNames) {
                  let e4 = Array.isArray(r4.forceCpuNodeNames) ? r4.forceCpuNodeNames : [
                    r4.forceCpuNodeNames
                  ];
                  Et(a2, `forceCpuNodeNames`, e4.join(`
`), n2);
                }
                r4.validationMode && Et(a2, `validationMode`, r4.validationMode, n2), typeof r4.enableMatmulFp32Accumulation == `boolean` && Et(a2, `enableMatmulFp32Accumulation`, r4.enableMatmulFp32Accumulation ? `1` : `0`, n2);
                for (let e4 of [
                  `storageBufferCacheMode`,
                  `uniformBufferCacheMode`,
                  `queryResolveBufferCacheMode`,
                  `defaultBufferCacheMode`
                ]) {
                  let t3 = r4[e4];
                  if (t3) {
                    if (t3 !== `disabled` && t3 !== `lazyRelease` && t3 !== `simple` && t3 !== `bucket`) throw Error(`${e4} must be one of 'disabled', 'lazyRelease', 'simple' or 'bucket': ${t3}`);
                    Et(a2, e4, t3, n2);
                  }
                }
              }
              let o3 = ht().webgpuRegisterDevice(e3);
              if (o3) {
                let [e4, t3, r4] = o3;
                Et(a2, `deviceId`, e4.toString(), n2), Et(a2, `webgpuInstance`, t3.toString(), n2), Et(a2, `webgpuDevice`, r4.toString(), n2);
              }
            }
            break;
          case `wasm`:
          case `cpu`:
            continue;
          default:
            throw Error(`not supported execution provider: ${r3}`);
        }
        let o2 = _t(r3, n2), s2 = a2.length, c2 = 0, l2 = 0;
        if (s2 > 0) {
          c2 = ht()._malloc(s2 * ht().PTR_SIZE), n2.push(c2), l2 = ht()._malloc(s2 * ht().PTR_SIZE), n2.push(l2);
          for (let e3 = 0; e3 < s2; e3++) ht().setValue(c2 + e3 * ht().PTR_SIZE, a2[e3][0], `*`), ht().setValue(l2 + e3 * ht().PTR_SIZE, a2[e3][1], `*`);
        }
        await ht()._OrtAppendExecutionProvider(e2, o2, c2, l2, s2) !== 0 && A(`Can't append execution provider: ${r3}.`);
      }
    }, Ot = async (e2) => {
      let t2 = ht(), n2 = 0, r2 = [], i2 = e2 || {};
      wt(i2);
      try {
        let e3 = St(i2.graphOptimizationLevel ?? `all`), a2 = Ct(i2.executionMode ?? `sequential`), o2 = typeof i2.logId == `string` ? _t(i2.logId, r2) : 0, s2 = i2.logSeverityLevel ?? 2;
        if (!Number.isInteger(s2) || s2 < 0 || s2 > 4) throw Error(`log severity level is not valid: ${s2}`);
        let c2 = i2.logVerbosityLevel ?? 0;
        if (!Number.isInteger(c2) || c2 < 0 || c2 > 4) throw Error(`log verbosity level is not valid: ${c2}`);
        let l2 = typeof i2.optimizedModelFilePath == `string` ? _t(i2.optimizedModelFilePath, r2) : 0;
        if (n2 = t2._OrtCreateSessionOptions(e3, !!i2.enableCpuMemArena, !!i2.enableMemPattern, a2, !!i2.enableProfiling, 0, o2, s2, c2, l2), n2 === 0 && A(`Can't create session options.`), i2.executionProviders && await Dt(n2, i2, r2), i2.enableGraphCapture !== void 0) {
          if (typeof i2.enableGraphCapture != `boolean`) throw Error(`enableGraphCapture must be a boolean value: ${i2.enableGraphCapture}`);
          Tt(n2, `enableGraphCapture`, i2.enableGraphCapture.toString(), r2);
        }
        if (i2.freeDimensionOverrides) for (let [e4, a3] of Object.entries(i2.freeDimensionOverrides)) {
          if (typeof e4 != `string`) throw Error(`free dimension override name must be a string: ${e4}`);
          if (typeof a3 != `number` || !Number.isInteger(a3) || a3 < 0) throw Error(`free dimension override value must be a non-negative integer: ${a3}`);
          let i3 = _t(e4, r2);
          t2._OrtAddFreeDimensionOverride(n2, i3, a3) !== 0 && A(`Can't set a free dimension override: ${e4} - ${a3}.`);
        }
        return i2.extra !== void 0 && vt(i2.extra, ``, /* @__PURE__ */ new WeakSet(), (e4, t3) => {
          Tt(n2, e4, t3, r2);
        }), [
          n2,
          r2
        ];
      } catch (e3) {
        throw n2 !== 0 && t2._OrtReleaseSessionOptions(n2) !== 0 && A(`Can't release session options.`), r2.forEach((e4) => t2._free(e4)), e3;
      }
    };
  }), At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt = c(() => {
    At = (e2) => {
      switch (e2) {
        case `int8`:
          return 3;
        case `uint8`:
          return 2;
        case `bool`:
          return 9;
        case `int16`:
          return 5;
        case `uint16`:
          return 4;
        case `int32`:
          return 6;
        case `uint32`:
          return 12;
        case `float16`:
          return 10;
        case `float32`:
          return 1;
        case `float64`:
          return 11;
        case `string`:
          return 8;
        case `int64`:
          return 7;
        case `uint64`:
          return 13;
        case `int4`:
          return 22;
        case `uint4`:
          return 21;
        default:
          throw Error(`unsupported data type: ${e2}`);
      }
    }, jt = (e2) => {
      switch (e2) {
        case 3:
          return `int8`;
        case 2:
          return `uint8`;
        case 9:
          return `bool`;
        case 5:
          return `int16`;
        case 4:
          return `uint16`;
        case 6:
          return `int32`;
        case 12:
          return `uint32`;
        case 10:
          return `float16`;
        case 1:
          return `float32`;
        case 11:
          return `float64`;
        case 8:
          return `string`;
        case 7:
          return `int64`;
        case 13:
          return `uint64`;
        case 22:
          return `int4`;
        case 21:
          return `uint4`;
        default:
          throw Error(`unsupported data type: ${e2}`);
      }
    }, Mt = (e2, t2) => {
      let n2 = [
        -1,
        4,
        1,
        1,
        2,
        2,
        4,
        8,
        -1,
        1,
        2,
        8,
        4,
        8,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        0.5,
        0.5
      ][e2], r2 = typeof t2 == `number` ? t2 : t2.reduce((e3, t3) => e3 * t3, 1);
      return n2 > 0 ? Math.ceil(r2 * n2) : void 0;
    }, Nt = (e2) => {
      switch (e2) {
        case `float16`:
          return typeof Float16Array < `u` ? Float16Array : Uint16Array;
        case `float32`:
          return Float32Array;
        case `uint8`:
          return Uint8Array;
        case `int8`:
          return Int8Array;
        case `uint16`:
          return Uint16Array;
        case `int16`:
          return Int16Array;
        case `int32`:
          return Int32Array;
        case `bool`:
          return Uint8Array;
        case `float64`:
          return Float64Array;
        case `uint32`:
          return Uint32Array;
        case `int64`:
          return BigInt64Array;
        case `uint64`:
          return BigUint64Array;
        default:
          throw Error(`unsupported type: ${e2}`);
      }
    }, Pt = (e2) => {
      switch (e2) {
        case `verbose`:
          return 0;
        case `info`:
          return 1;
        case `warning`:
          return 2;
        case `error`:
          return 3;
        case `fatal`:
          return 4;
        default:
          throw Error(`unsupported logging level: ${e2}`);
      }
    }, Ft = (e2) => e2 === `float32` || e2 === `float16` || e2 === `int32` || e2 === `int64` || e2 === `uint32` || e2 === `uint8` || e2 === `bool` || e2 === `uint4` || e2 === `int4`, It = (e2) => e2 === `float32` || e2 === `float16` || e2 === `int32` || e2 === `int64` || e2 === `uint32` || e2 === `uint64` || e2 === `int8` || e2 === `uint8` || e2 === `bool` || e2 === `uint4` || e2 === `int4`, Lt = (e2) => {
      switch (e2) {
        case `none`:
          return 0;
        case `cpu`:
          return 1;
        case `cpu-pinned`:
          return 2;
        case `texture`:
          return 3;
        case `gpu-buffer`:
          return 4;
        case `ml-tensor`:
          return 5;
        default:
          throw Error(`unsupported data location: ${e2}`);
      }
    };
  }), zt, Bt = c(() => {
    Fe(), zt = async (e2) => {
      if (typeof e2 == `string`) {
        let t2 = await fetch(e2);
        if (!t2.ok) throw Error(`failed to load external data file: ${e2}`);
        let n2 = t2.headers.get(`Content-Length`), r2 = n2 ? parseInt(n2, 10) : 0;
        if (r2 < 1073741824) return new Uint8Array(await t2.arrayBuffer());
        {
          if (!t2.body) throw Error(`failed to load external data file: ${e2}, no response body.`);
          let n3 = t2.body.getReader(), i2;
          try {
            i2 = new ArrayBuffer(r2);
          } catch (e3) {
            if (e3 instanceof RangeError) {
              let e4 = Math.ceil(r2 / 65536);
              i2 = new WebAssembly.Memory({
                initial: e4,
                maximum: e4
              }).buffer;
            } else throw e3;
          }
          let a2 = 0;
          for (; ; ) {
            let { done: e3, value: t3 } = await n3.read();
            if (e3) break;
            let r3 = t3.byteLength;
            new Uint8Array(i2, a2, r3).set(t3), a2 += r3;
          }
          return new Uint8Array(i2, 0, r2);
        }
      }
      return e2 instanceof Blob ? new Uint8Array(await e2.arrayBuffer()) : e2 instanceof Uint8Array ? e2 : new Uint8Array(e2);
    };
  }), Vt, Ht = c(() => {
    Rt(), Vt = (e2, t2) => new (Nt(t2))(e2);
  }), Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt = c(() => {
    Rt(), Ut = [
      `V`,
      `I`,
      `W`,
      `E`,
      `F`
    ], Wt = (e2, t2) => {
      console.log(`[${Ut[e2]},${(/* @__PURE__ */ new Date()).toISOString()}]${t2}`);
    }, qt = (e2, t2) => {
      Gt = e2, Kt = t2;
    }, Jt = (e2, t2) => {
      let n2 = Pt(e2);
      n2 >= Pt(Gt) && Wt(n2, typeof t2 == `function` ? t2() : t2);
    }, Yt = (...e2) => {
      Kt && Jt(...e2);
    };
  }), Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln = c(() => {
    Rt(), Xt(), Zt = /* @__PURE__ */ new Map([
      [
        `float32`,
        32
      ],
      [
        `float16`,
        16
      ],
      [
        `int32`,
        32
      ],
      [
        `uint32`,
        32
      ],
      [
        `int64`,
        64
      ],
      [
        `uint64`,
        64
      ],
      [
        `int8`,
        8
      ],
      [
        `uint8`,
        8
      ],
      [
        `int4`,
        4
      ],
      [
        `uint4`,
        4
      ]
    ]), Qt = (e2, t2) => {
      if (t2 === `int32`) return e2;
      let n2 = Zt.get(t2);
      if (!n2) throw Error(`WebNN backend does not support data type: ${t2}`);
      let r2 = n2 / 8;
      if (e2.byteLength % r2 !== 0) throw Error(`Invalid Uint8Array length - must be a multiple of ${r2}.`);
      let i2 = e2.byteLength / r2, a2 = new (Nt(t2))(e2.buffer, e2.byteOffset, i2);
      switch (t2) {
        case `int64`:
        case `uint64`: {
          let e3 = new Int32Array(i2);
          for (let t3 = 0; t3 < i2; t3++) {
            let n3 = a2[t3];
            if (n3 > 2147483647n || n3 < -2147483648n) throw Error(`Can not convert int64 data to int32 - value out of range.`);
            e3[t3] = Number(n3);
          }
          return new Uint8Array(e3.buffer);
        }
        case `int8`:
        case `uint8`:
        case `uint32`: {
          if (t2 === `uint32` && a2.some((e4) => e4 > 2147483647)) throw Error(`Can not convert uint32 data to int32 - value out of range.`);
          let e3 = Int32Array.from(a2, Number);
          return new Uint8Array(e3.buffer);
        }
        default:
          throw Error(`Unsupported data conversion from ${t2} to 'int32'`);
      }
    }, $t = (e2, t2) => {
      if (t2 === `int32`) return e2;
      if (e2.byteLength % 4 != 0) throw Error(`Invalid Uint8Array length - must be a multiple of 4 (int32).`);
      let n2 = e2.byteLength / 4, r2 = new Int32Array(e2.buffer, e2.byteOffset, n2);
      switch (t2) {
        case `int64`: {
          let e3 = BigInt64Array.from(r2, BigInt);
          return new Uint8Array(e3.buffer);
        }
        case `uint64`: {
          if (r2.some((e4) => e4 < 0)) throw Error(`Can not convert int32 data to uin64 - negative value found.`);
          let e3 = BigUint64Array.from(r2, BigInt);
          return new Uint8Array(e3.buffer);
        }
        case `int8`: {
          if (r2.some((e4) => e4 < -128 || e4 > 127)) throw Error(`Can not convert int32 data to int8 - value out of range.`);
          let e3 = Int8Array.from(r2, Number);
          return new Uint8Array(e3.buffer);
        }
        case `uint8`:
          if (r2.some((e3) => e3 < 0 || e3 > 255)) throw Error(`Can not convert int32 data to uint8 - value out of range.`);
          return Uint8Array.from(r2, Number);
        case `uint32`: {
          if (r2.some((e4) => e4 < 0)) throw Error(`Can not convert int32 data to uint32 - negative value found.`);
          let e3 = Uint32Array.from(r2, Number);
          return new Uint8Array(e3.buffer);
        }
        default:
          throw Error(`Unsupported data conversion from 'int32' to ${t2}`);
      }
    }, en = 1, tn = () => en++, nn = /* @__PURE__ */ new Map([
      [
        `int8`,
        `int32`
      ],
      [
        `uint8`,
        `int32`
      ],
      [
        `uint32`,
        `int32`
      ],
      [
        `int64`,
        `int32`
      ]
    ]), rn = (e2, t2) => {
      let n2 = Zt.get(e2);
      if (!n2) throw Error(`WebNN backend does not support data type: ${e2}`);
      return t2.length > 0 ? Math.ceil(t2.reduce((e3, t3) => e3 * t3) * n2 / 8) : 0;
    }, an = class {
      constructor(e2) {
        this.isDataConverted = false;
        let { sessionId: t2, context: n2, tensor: r2, dataType: i2, shape: a2, fallbackDataType: o2 } = e2;
        this.sessionId = t2, this.mlContext = n2, this.mlTensor = r2, this.dataType = i2, this.tensorShape = a2, this.fallbackDataType = o2;
      }
      get tensor() {
        return this.mlTensor;
      }
      get type() {
        return this.dataType;
      }
      get fallbackType() {
        return this.fallbackDataType;
      }
      get shape() {
        return this.tensorShape;
      }
      get byteLength() {
        return rn(this.dataType, this.tensorShape);
      }
      destroy() {
        Yt(`verbose`, () => `[WebNN] TensorWrapper.destroy`), this.mlTensor.destroy();
      }
      write(e2) {
        this.mlContext.writeTensor(this.mlTensor, e2);
      }
      async read(e2) {
        if (this.fallbackDataType) {
          let t2 = await this.mlContext.readTensor(this.mlTensor), n2 = $t(new Uint8Array(t2), this.dataType);
          if (e2) {
            (e2 instanceof ArrayBuffer ? new Uint8Array(e2) : new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength)).set(n2);
            return;
          }
          return new Uint8Array(n2).buffer;
        }
        return e2 ? this.mlContext.readTensor(this.mlTensor, e2) : this.mlContext.readTensor(this.mlTensor);
      }
      canReuseTensor(e2, t2, n2) {
        return this.mlContext === e2 && this.dataType === t2 && this.tensorShape.length === n2.length && this.tensorShape.every((e3, t3) => e3 === n2[t3]);
      }
      setIsDataConverted(e2) {
        this.isDataConverted = e2;
      }
    }, on = class {
      constructor(e2, t2) {
        this.tensorManager = e2, this.wrapper = t2;
      }
      get tensorWrapper() {
        return this.wrapper;
      }
      releaseTensor() {
        this.tensorWrapper && (this.tensorManager.releaseTensor(this.tensorWrapper), this.wrapper = void 0);
      }
      async ensureTensor(e2, t2, n2, r2) {
        let i2 = this.tensorManager.getMLContext(e2), a2 = this.tensorManager.getMLOpSupportLimits(e2), o2;
        if (!(a2 == null ? void 0 : a2.input.dataTypes.includes(t2))) {
          if (o2 = nn.get(t2), !o2 || !(a2 == null ? void 0 : a2.input.dataTypes.includes(o2))) throw Error(`WebNN backend does not support data type: ${t2}`);
          Yt(`verbose`, () => `[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t2} to ${o2}`);
        }
        if (this.wrapper) {
          if (this.wrapper.canReuseTensor(i2, t2, n2)) return this.wrapper.tensor;
          if (r2) {
            if (this.wrapper.byteLength !== rn(t2, n2)) throw Error(`Unable to copy data to tensor with different size.`);
            this.activeUpload = new Uint8Array(await this.wrapper.read());
          }
          this.tensorManager.releaseTensor(this.wrapper);
        }
        let s2 = typeof MLTensorUsage > `u` ? void 0 : MLTensorUsage.READ | MLTensorUsage.WRITE;
        return this.wrapper = await this.tensorManager.getCachedTensor(e2, t2, n2, s2, true, true, o2), r2 && this.activeUpload && (this.wrapper.write(this.activeUpload), this.activeUpload = void 0), this.wrapper.tensor;
      }
      upload(e2) {
        let t2 = e2;
        if (this.wrapper) {
          if (this.wrapper.fallbackType) {
            if (this.wrapper.fallbackType === `int32`) t2 = Qt(e2, this.wrapper.type), this.wrapper.setIsDataConverted(true);
            else throw Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);
          }
          if (e2.byteLength === this.wrapper.byteLength) {
            this.wrapper.write(t2);
            return;
          }
          Yt(`verbose`, () => `Data size does not match tensor size. Releasing tensor.`), this.releaseTensor();
        }
        this.activeUpload ? this.activeUpload.set(t2) : this.activeUpload = new Uint8Array(t2);
      }
      async download(e2) {
        var _a3, _b3;
        if (this.activeUpload) {
          let t2 = ((_a3 = this.wrapper) == null ? void 0 : _a3.isDataConverted) ? $t(this.activeUpload, (_b3 = this.wrapper) == null ? void 0 : _b3.type) : this.activeUpload;
          if (e2) {
            e2 instanceof ArrayBuffer ? new Uint8Array(e2).set(t2) : new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength).set(t2);
            return;
          }
          return t2.buffer;
        }
        if (!this.wrapper) throw Error(`Tensor has not been created.`);
        return e2 ? this.wrapper.read(e2) : this.wrapper.read();
      }
    }, sn = class {
      constructor(e2) {
        this.backend = e2, this.tensorTrackersById = /* @__PURE__ */ new Map(), this.freeTensors = [], this.externalTensors = /* @__PURE__ */ new Set();
      }
      getMLContext(e2) {
        let t2 = this.backend.getMLContext(e2);
        if (!t2) throw Error(`MLContext not found for session.`);
        return t2;
      }
      getMLOpSupportLimits(e2) {
        return this.backend.getMLOpSupportLimits(e2);
      }
      reserveTensorId() {
        let e2 = tn();
        return this.tensorTrackersById.set(e2, new on(this)), e2;
      }
      releaseTensorId(e2) {
        let t2 = this.tensorTrackersById.get(e2);
        t2 && (this.tensorTrackersById.delete(e2), t2.tensorWrapper && this.releaseTensor(t2.tensorWrapper));
      }
      async ensureTensor(e2, t2, n2, r2, i2) {
        Yt(`verbose`, () => `[WebNN] TensorManager.ensureTensor {tensorId: ${t2}, dataType: ${n2}, shape: ${r2}, copyOld: ${i2}}`);
        let a2 = this.tensorTrackersById.get(t2);
        if (!a2) throw Error(`Tensor not found.`);
        return a2.ensureTensor(e2, n2, r2, i2);
      }
      upload(e2, t2) {
        let n2 = this.tensorTrackersById.get(e2);
        if (!n2) throw Error(`Tensor not found.`);
        n2.upload(t2);
      }
      async download(e2, t2) {
        Yt(`verbose`, () => `[WebNN] TensorManager.download {tensorId: ${e2}, dstBuffer: ${t2 == null ? void 0 : t2.byteLength}}`);
        let n2 = this.tensorTrackersById.get(e2);
        if (!n2) throw Error(`Tensor not found.`);
        return n2.download(t2);
      }
      releaseTensorsForSession(e2) {
        for (let t2 of this.freeTensors) t2.sessionId === e2 && t2.destroy();
        this.freeTensors = this.freeTensors.filter((t2) => t2.sessionId !== e2);
      }
      registerTensor(e2, t2, n2, r2) {
        let i2 = this.getMLContext(e2), a2 = tn(), o2 = new an({
          sessionId: e2,
          context: i2,
          tensor: t2,
          dataType: n2,
          shape: r2
        });
        return this.tensorTrackersById.set(a2, new on(this, o2)), this.externalTensors.add(o2), a2;
      }
      async getCachedTensor(e2, t2, n2, r2, i2, a2, o2) {
        let s2 = this.getMLContext(e2);
        for (let [r3, i3] of this.freeTensors.entries()) if (i3.canReuseTensor(s2, t2, n2)) {
          Yt(`verbose`, () => `[WebNN] Reusing tensor {dataType: ${t2}, ${o2 ? `fallbackDataType: ${o2},` : ``} shape: ${n2}`);
          let i4 = this.freeTensors.splice(r3, 1)[0];
          return i4.sessionId = e2, i4;
        }
        Yt(`verbose`, () => `[WebNN] MLContext.createTensor {dataType: ${t2}, ${o2 ? `fallbackDataType: ${o2},` : ``} shape: ${n2}}`);
        let c2 = await s2.createTensor({
          dataType: o2 ?? t2,
          shape: n2,
          dimensions: n2,
          usage: r2,
          writable: i2,
          readable: a2
        });
        return new an({
          sessionId: e2,
          context: s2,
          tensor: c2,
          dataType: t2,
          shape: n2,
          fallbackDataType: o2
        });
      }
      releaseTensor(e2) {
        this.externalTensors.has(e2) && this.externalTensors.delete(e2), this.freeTensors.push(e2);
      }
    }, cn = (...e2) => new sn(...e2);
  }), un = {};
  l(un, {
    WebNNBackend: () => pn
  });
  var dn, fn, pn, mn = c(() => {
    Rt(), gt(), Ht(), ln(), Xt(), dn = /* @__PURE__ */ new Map([
      [
        1,
        `float32`
      ],
      [
        10,
        `float16`
      ],
      [
        6,
        `int32`
      ],
      [
        12,
        `uint32`
      ],
      [
        7,
        `int64`
      ],
      [
        13,
        `uint64`
      ],
      [
        22,
        `int4`
      ],
      [
        21,
        `uint4`
      ],
      [
        3,
        `int8`
      ],
      [
        2,
        `uint8`
      ],
      [
        9,
        `uint8`
      ]
    ]), fn = (e2, t2) => {
      if (e2 === t2) return true;
      if (e2 === void 0 || t2 === void 0) return false;
      let n2 = Object.keys(e2).sort(), r2 = Object.keys(t2).sort();
      return n2.length === r2.length && n2.every((n3, i2) => n3 === r2[i2] && e2[n3] === t2[n3]);
    }, pn = class {
      constructor(e2) {
        this.tensorManager = cn(this), this.mlContextBySessionId = /* @__PURE__ */ new Map(), this.sessionIdsByMLContext = /* @__PURE__ */ new Map(), this.mlContextCache = [], this.sessionGraphInputs = /* @__PURE__ */ new Map(), this.sessionGraphOutputs = /* @__PURE__ */ new Map(), this.temporaryGraphInputs = [], this.temporaryGraphOutputs = [], this.temporarySessionTensorIds = /* @__PURE__ */ new Map(), this.mlOpSupportLimitsBySessionId = /* @__PURE__ */ new Map(), qt(e2.logLevel, !!e2.debug);
      }
      get currentSessionId() {
        if (this.activeSessionId === void 0) throw Error(`No active session`);
        return this.activeSessionId;
      }
      onRunStart(e2) {
        Yt(`verbose`, () => `[WebNN] onRunStart {sessionId: ${e2}}`), this.activeSessionId = e2;
      }
      onRunEnd(e2) {
        Yt(`verbose`, () => `[WebNN] onRunEnd {sessionId: ${e2}}`);
        let t2 = this.temporarySessionTensorIds.get(e2);
        if (t2) {
          for (let e3 of t2) Yt(`verbose`, () => `[WebNN] releasing temporary tensor {tensorId: ${e3}}`), this.tensorManager.releaseTensorId(e3);
          this.temporarySessionTensorIds.delete(e2), this.activeSessionId = void 0;
        }
      }
      async createMLContext(e2) {
        if (e2 instanceof GPUDevice) {
          let t3 = this.mlContextCache.findIndex((t4) => t4.gpuDevice === e2);
          if (t3 !== -1) return this.mlContextCache[t3].mlContext;
          {
            let t4 = await navigator.ml.createContext(e2);
            return this.mlContextCache.push({
              gpuDevice: e2,
              mlContext: t4
            }), t4;
          }
        }
        if (e2 === void 0) {
          let e3 = this.mlContextCache.findIndex((e4) => e4.options === void 0 && e4.gpuDevice === void 0);
          if (e3 !== -1) return this.mlContextCache[e3].mlContext;
          {
            let e4 = await navigator.ml.createContext();
            return this.mlContextCache.push({
              mlContext: e4
            }), e4;
          }
        }
        let t2 = this.mlContextCache.findIndex((t3) => fn(t3.options, e2));
        if (t2 !== -1) return this.mlContextCache[t2].mlContext;
        {
          let t3 = await navigator.ml.createContext(e2);
          return this.mlContextCache.push({
            options: e2,
            mlContext: t3
          }), t3;
        }
      }
      registerMLContext(e2, t2) {
        this.mlContextBySessionId.set(e2, t2);
        let n2 = this.sessionIdsByMLContext.get(t2);
        n2 || (n2 = /* @__PURE__ */ new Set(), this.sessionIdsByMLContext.set(t2, n2)), n2.add(e2), this.mlOpSupportLimitsBySessionId.has(e2) || this.mlOpSupportLimitsBySessionId.set(e2, t2.opSupportLimits()), this.temporaryGraphInputs.length > 0 && (this.sessionGraphInputs.set(e2, this.temporaryGraphInputs), this.temporaryGraphInputs = []), this.temporaryGraphOutputs.length > 0 && (this.sessionGraphOutputs.set(e2, this.temporaryGraphOutputs), this.temporaryGraphOutputs = []);
      }
      onReleaseSession(e2) {
        this.sessionGraphInputs.delete(e2), this.sessionGraphOutputs.delete(e2);
        let t2 = this.mlContextBySessionId.get(e2);
        if (!t2) return;
        this.tensorManager.releaseTensorsForSession(e2), this.mlContextBySessionId.delete(e2), this.mlOpSupportLimitsBySessionId.delete(e2);
        let n2 = this.sessionIdsByMLContext.get(t2);
        if (n2.delete(e2), n2.size === 0) {
          this.sessionIdsByMLContext.delete(t2);
          let e3 = this.mlContextCache.findIndex((e4) => e4.mlContext === t2);
          e3 !== -1 && this.mlContextCache.splice(e3, 1);
        }
      }
      getMLContext(e2) {
        return this.mlContextBySessionId.get(e2);
      }
      getMLOpSupportLimits(e2) {
        return this.mlOpSupportLimitsBySessionId.get(e2);
      }
      reserveTensorId() {
        return this.tensorManager.reserveTensorId();
      }
      releaseTensorId(e2) {
        Yt(`verbose`, () => `[WebNN] releaseTensorId {tensorId: ${e2}}`), this.tensorManager.releaseTensorId(e2);
      }
      async ensureTensor(e2, t2, n2, r2, i2) {
        let a2 = dn.get(n2);
        if (!a2) throw Error(`Unsupported ONNX data type: ${n2}`);
        return this.tensorManager.ensureTensor(e2 ?? this.currentSessionId, t2, a2, r2, i2);
      }
      async createTemporaryTensor(e2, t2, n2) {
        Yt(`verbose`, () => `[WebNN] createTemporaryTensor {onnxDataType: ${t2}, shape: ${n2}}`);
        let r2 = dn.get(t2);
        if (!r2) throw Error(`Unsupported ONNX data type: ${t2}`);
        let i2 = this.tensorManager.reserveTensorId();
        await this.tensorManager.ensureTensor(e2, i2, r2, n2, false);
        let a2 = this.temporarySessionTensorIds.get(e2);
        return a2 ? a2.push(i2) : this.temporarySessionTensorIds.set(e2, [
          i2
        ]), i2;
      }
      uploadTensor(e2, t2) {
        if (!ht().shouldTransferToMLTensor) throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);
        Yt(`verbose`, () => `[WebNN] uploadTensor {tensorId: ${e2}, data: ${t2.byteLength}}`), this.tensorManager.upload(e2, t2);
      }
      async downloadTensor(e2, t2) {
        return this.tensorManager.download(e2, t2);
      }
      createMLTensorDownloader(e2, t2) {
        return async () => {
          let n2 = await this.tensorManager.download(e2);
          return Vt(n2, t2);
        };
      }
      registerMLTensor(e2, t2, n2, r2) {
        let i2 = dn.get(n2);
        if (!i2) throw Error(`Unsupported ONNX data type: ${n2}`);
        let a2 = this.tensorManager.registerTensor(e2, t2, i2, r2);
        return Yt(`verbose`, () => `[WebNN] registerMLTensor {tensor: ${t2}, dataType: ${i2}, dimensions: ${r2}} -> {tensorId: ${a2}}`), a2;
      }
      registerGraphInput(e2) {
        this.temporaryGraphInputs.push(e2);
      }
      registerGraphOutput(e2) {
        this.temporaryGraphOutputs.push(e2);
      }
      isGraphInput(e2, t2) {
        let n2 = this.sessionGraphInputs.get(e2);
        return n2 ? n2.includes(t2) : false;
      }
      isGraphOutput(e2, t2) {
        let n2 = this.sessionGraphOutputs.get(e2);
        return n2 ? n2.includes(t2) : false;
      }
      isGraphInputOutputTypeSupported(e2, t2, n2 = true) {
        let r2 = dn.get(At(t2)), i2 = this.mlOpSupportLimitsBySessionId.get(e2);
        return typeof r2 > `u` ? false : n2 ? !!(i2 == null ? void 0 : i2.input.dataTypes.includes(r2)) : !!(i2 == null ? void 0 : i2.output.dataTypes.includes(r2));
      }
      flush() {
      }
    };
  }), hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On = c(() => {
    Pe(), xt(), kt(), Rt(), gt(), yt(), Bt(), hn = (e2, t2) => {
      ht()._OrtInit(e2, t2) !== 0 && A(`Can't initialize onnxruntime.`);
    }, gn = async (e2) => {
      hn(e2.wasm.numThreads, Pt(e2.logLevel));
    }, _n = async (e2, t2) => {
      var _a3, _b3;
      (_b3 = (_a3 = ht()).asyncInit) == null ? void 0 : _b3.call(_a3);
      let n2 = e2.webgpu.adapter;
      if (t2 === `webgpu`) {
        if (typeof navigator > `u` || !navigator.gpu) throw Error(`WebGPU is not supported in current environment`);
        if (n2) {
          if (typeof n2.limits != `object` || typeof n2.features != `object` || typeof n2.requestDevice != `function`) throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.");
        } else {
          let t3 = e2.webgpu.powerPreference;
          if (t3 !== void 0 && t3 !== `low-power` && t3 !== `high-performance`) throw Error(`Invalid powerPreference setting: "${t3}"`);
          let r2 = e2.webgpu.forceFallbackAdapter;
          if (r2 !== void 0 && typeof r2 != `boolean`) throw Error(`Invalid forceFallbackAdapter setting: "${r2}"`);
          if (n2 = await navigator.gpu.requestAdapter({
            powerPreference: t3,
            forceFallbackAdapter: r2
          }), !n2) throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`);
        }
      }
      if (t2 === `webnn` && (typeof navigator > `u` || !navigator.ml)) throw Error(`WebNN is not supported in current environment`);
      if (t2 === `webgpu` && ht().webgpuInit((t3) => {
        e2.webgpu.device = t3;
      }), t2 === `webnn`) {
        let t3 = new (mn(), d(un)).WebNNBackend(e2);
        ht().webnnInit([
          t3,
          () => t3.reserveTensorId(),
          (e3) => t3.releaseTensorId(e3),
          async (e3, n3, r2, i2, a2) => t3.ensureTensor(e3, n3, r2, i2, a2),
          (e3, n3) => {
            t3.uploadTensor(e3, n3);
          },
          async (e3, n3) => t3.downloadTensor(e3, n3),
          (e3, n3) => t3.registerMLContext(e3, n3),
          !!e2.trace
        ]);
      }
    }, vn = /* @__PURE__ */ new Map(), yn = (e2) => {
      let t2 = ht(), n2 = t2.stackSave();
      try {
        let n3 = t2.PTR_SIZE, r2 = t2.stackAlloc(2 * n3);
        t2._OrtGetInputOutputCount(e2, r2, r2 + n3) !== 0 && A(`Can't get session input/output count.`);
        let i2 = n3 === 4 ? `i32` : `i64`;
        return [
          Number(t2.getValue(r2, i2)),
          Number(t2.getValue(r2 + n3, i2))
        ];
      } finally {
        t2.stackRestore(n2);
      }
    }, bn = (e2, t2) => {
      let n2 = ht(), r2 = n2.stackSave(), i2 = 0;
      try {
        let r3 = n2.PTR_SIZE, a2 = n2.stackAlloc(2 * r3);
        n2._OrtGetInputOutputMetadata(e2, t2, a2, a2 + r3) !== 0 && A(`Can't get session input/output metadata.`);
        let o2 = Number(n2.getValue(a2, `*`));
        i2 = Number(n2.getValue(a2 + r3, `*`));
        let s2 = n2.HEAP32[i2 / 4];
        if (s2 === 0) return [
          o2,
          0
        ];
        let c2 = n2.HEAPU32[i2 / 4 + 1], l2 = [];
        for (let e3 = 0; e3 < c2; e3++) {
          let t3 = Number(n2.getValue(i2 + 8 + e3 * r3, `*`));
          l2.push(t3 === 0 ? Number(n2.getValue(i2 + 8 + (e3 + c2) * r3, `*`)) : n2.UTF8ToString(t3));
        }
        return [
          o2,
          s2,
          l2
        ];
      } finally {
        n2.stackRestore(r2), i2 !== 0 && n2._OrtFree(i2);
      }
    }, xn = (e2) => {
      let t2 = ht(), n2 = t2._malloc(e2.byteLength);
      if (n2 === 0) throw Error(`Can't create a session. failed to allocate a buffer of size ${e2.byteLength}.`);
      return t2.HEAPU8.set(e2, n2), [
        n2,
        e2.byteLength
      ];
    }, Sn = async (e2, t2) => {
      var _a3, _b3, _c3, _d3;
      let n2, r2, i2 = ht();
      Array.isArray(e2) ? [n2, r2] = e2 : e2.buffer === i2.HEAPU8.buffer ? [n2, r2] = [
        e2.byteOffset,
        e2.byteLength
      ] : [n2, r2] = xn(e2);
      let a2 = 0, o2 = 0, s2 = 0, c2 = [], l2 = [], u2 = [];
      try {
        if ([o2, c2] = await Ot(t2), (t2 == null ? void 0 : t2.externalData) && i2.mountExternalData) {
          let e4 = [];
          for (let n3 of t2.externalData) {
            let t3 = typeof n3 == `string` ? n3 : n3.path, r3 = typeof n3 == `string` ? n3 : n3.data;
            e4.push(zt(r3).then((e5) => {
              i2.mountExternalData(t3, e5);
            }));
          }
          await Promise.all(e4);
        }
        for (let e4 of (t2 == null ? void 0 : t2.executionProviders) ?? []) if ((typeof e4 == `string` ? e4 : e4.name) === `webnn`) {
          if (i2.shouldTransferToMLTensor = false, typeof e4 != `string`) {
            let t3 = e4, n3 = t3 == null ? void 0 : t3.context, r3 = t3 == null ? void 0 : t3.gpuDevice, a3 = t3 == null ? void 0 : t3.deviceType, o3 = t3 == null ? void 0 : t3.powerPreference;
            i2.currentContext = n3 || (r3 ? await i2.webnnCreateMLContext(r3) : await i2.webnnCreateMLContext({
              deviceType: a3,
              powerPreference: o3
            }));
          } else i2.currentContext = await i2.webnnCreateMLContext();
          break;
        }
        a2 = await i2._OrtCreateSession(n2, r2, o2), (_a3 = i2.webgpuOnCreateSession) == null ? void 0 : _a3.call(i2, a2), a2 === 0 && A(`Can't create a session.`), (_b3 = i2.jsepOnCreateSession) == null ? void 0 : _b3.call(i2), i2.currentContext && (i2.webnnRegisterMLContext(a2, i2.currentContext), i2.currentContext = void 0, i2.shouldTransferToMLTensor = true);
        let [e3, d2] = yn(a2), f2 = !!(t2 == null ? void 0 : t2.enableGraphCapture), p2 = [], m2 = [], h2 = [], g2 = [], _2 = [];
        for (let t3 = 0; t3 < e3; t3++) {
          let [e4, n3, r3] = bn(a2, t3);
          e4 === 0 && A(`Can't get an input name.`), l2.push(e4);
          let o3 = i2.UTF8ToString(e4);
          p2.push(o3), h2.push(n3 === 0 ? {
            name: o3,
            isTensor: false
          } : {
            name: o3,
            isTensor: true,
            type: jt(n3),
            shape: r3
          });
        }
        for (let n3 = 0; n3 < d2; n3++) {
          let [r3, o3, s3] = bn(a2, n3 + e3);
          r3 === 0 && A(`Can't get an output name.`), u2.push(r3);
          let c3 = i2.UTF8ToString(r3);
          m2.push(c3), g2.push(o3 === 0 ? {
            name: c3,
            isTensor: false
          } : {
            name: c3,
            isTensor: true,
            type: jt(o3),
            shape: s3
          });
          {
            if (f2 && (t2 == null ? void 0 : t2.preferredOutputLocation) === void 0) {
              _2.push(`gpu-buffer`);
              continue;
            }
            let e4 = typeof (t2 == null ? void 0 : t2.preferredOutputLocation) == `string` ? t2.preferredOutputLocation : ((_c3 = t2 == null ? void 0 : t2.preferredOutputLocation) == null ? void 0 : _c3[c3]) ?? `cpu`, n4 = i2.webnnIsGraphOutput;
            if (e4 === `cpu` && n4 && n4(a2, c3)) {
              _2.push(`ml-tensor-cpu-output`);
              continue;
            }
            if (e4 !== `cpu` && e4 !== `cpu-pinned` && e4 !== `gpu-buffer` && e4 !== `ml-tensor`) throw Error(`Not supported preferred output location: ${e4}.`);
            if (f2 && e4 !== `gpu-buffer`) throw Error(`Not supported preferred output location: ${e4}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);
            _2.push(e4);
          }
        }
        let v2 = null;
        return _2.some((e4) => e4 === `gpu-buffer` || e4 === `ml-tensor` || e4 === `ml-tensor-cpu-output`) && (s2 = i2._OrtCreateBinding(a2), s2 === 0 && A(`Can't create IO binding.`), v2 = {
          handle: s2,
          outputPreferredLocations: _2,
          outputPreferredLocationsEncoded: _2.map((e4) => e4 === `ml-tensor-cpu-output` ? `ml-tensor` : e4).map((e4) => Lt(e4))
        }), vn.set(a2, [
          a2,
          l2,
          u2,
          v2,
          f2,
          false
        ]), [
          a2,
          p2,
          m2,
          h2,
          g2
        ];
      } catch (e3) {
        throw l2.forEach((e4) => i2._OrtFree(e4)), u2.forEach((e4) => i2._OrtFree(e4)), s2 !== 0 && i2._OrtReleaseBinding(s2) !== 0 && A(`Can't release IO binding.`), a2 !== 0 && i2._OrtReleaseSession(a2) !== 0 && A(`Can't release session.`), e3;
      } finally {
        i2._free(n2), o2 !== 0 && i2._OrtReleaseSessionOptions(o2) !== 0 && A(`Can't release session options.`), c2.forEach((e3) => i2._free(e3)), (_d3 = i2.unmountExternalData) == null ? void 0 : _d3.call(i2);
      }
    }, Cn = (e2) => {
      var _a3, _b3, _c3;
      let t2 = ht(), n2 = vn.get(e2);
      if (!n2) throw Error(`cannot release session. invalid session id: ${e2}`);
      let [r2, i2, a2, o2, s2] = n2;
      o2 && (s2 && t2._OrtClearBoundOutputs(o2.handle) !== 0 && A(`Can't clear bound outputs.`), t2._OrtReleaseBinding(o2.handle) !== 0 && A(`Can't release IO binding.`)), (_a3 = t2.jsepOnReleaseSession) == null ? void 0 : _a3.call(t2, e2), (_b3 = t2.webnnOnReleaseSession) == null ? void 0 : _b3.call(t2, e2), (_c3 = t2.webgpuOnReleaseSession) == null ? void 0 : _c3.call(t2, e2), i2.forEach((e3) => t2._OrtFree(e3)), a2.forEach((e3) => t2._OrtFree(e3)), t2._OrtReleaseSession(r2) !== 0 && A(`Can't release session.`), vn.delete(e2);
    }, wn = async (e2, t2, n2, r2, i2, a2, o2 = false) => {
      if (!e2) {
        t2.push(0);
        return;
      }
      let s2 = ht(), c2 = s2.PTR_SIZE, l2 = e2[0], u2 = e2[1], d2 = e2[3], f2 = d2, p2, m2;
      if (l2 === `string` && (d2 === `gpu-buffer` || d2 === `ml-tensor`)) throw Error(`String tensor is not supported on GPU.`);
      if (o2 && d2 !== `gpu-buffer`) throw Error(`External buffer must be provided for input/output index ${a2} when enableGraphCapture is true.`);
      if (d2 === `gpu-buffer`) {
        let t3 = e2[2].gpuBuffer;
        m2 = Mt(At(l2), u2);
        {
          let e3 = s2.webgpuRegisterBuffer;
          if (!e3) throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);
          p2 = e3(t3, r2);
        }
      } else if (d2 === `ml-tensor`) {
        let t3 = e2[2].mlTensor;
        m2 = Mt(At(l2), u2);
        let n3 = s2.webnnRegisterMLTensor;
        if (!n3) throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);
        p2 = n3(r2, t3, At(l2), u2);
      } else {
        let t3 = e2[2];
        if (Array.isArray(t3)) {
          m2 = c2 * t3.length, p2 = s2._malloc(m2), n2.push(p2);
          for (let e3 = 0; e3 < t3.length; e3++) {
            if (typeof t3[e3] != `string`) throw TypeError(`tensor data at index ${e3} is not a string`);
            s2.setValue(p2 + e3 * c2, _t(t3[e3], n2), `*`);
          }
        } else {
          let e3 = s2.webnnIsGraphInput, a3 = s2.webnnIsGraphOutput;
          if (l2 !== `string` && e3 && a3) {
            let o3 = s2.UTF8ToString(i2);
            if (e3(r2, o3) || a3(r2, o3)) {
              let e4 = At(l2);
              m2 = Mt(e4, u2), f2 = `ml-tensor`;
              let n3 = s2.webnnCreateTemporaryTensor, i3 = s2.webnnUploadTensor;
              if (!n3 || !i3) throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);
              let a4 = await n3(r2, e4, u2);
              i3(a4, new Uint8Array(t3.buffer, t3.byteOffset, t3.byteLength)), p2 = a4;
            } else m2 = t3.byteLength, p2 = s2._malloc(m2), n2.push(p2), s2.HEAPU8.set(new Uint8Array(t3.buffer, t3.byteOffset, m2), p2);
          } else m2 = t3.byteLength, p2 = s2._malloc(m2), n2.push(p2), s2.HEAPU8.set(new Uint8Array(t3.buffer, t3.byteOffset, m2), p2);
        }
      }
      let h2 = s2.stackSave(), g2 = s2.stackAlloc(4 * u2.length);
      try {
        u2.forEach((e4, t3) => s2.setValue(g2 + t3 * c2, e4, c2 === 4 ? `i32` : `i64`));
        let e3 = s2._OrtCreateTensor(At(l2), p2, m2, g2, u2.length, Lt(f2));
        e3 === 0 && A(`Can't create tensor for input/output. session=${r2}, index=${a2}.`), t2.push(e3);
      } finally {
        s2.stackRestore(h2);
      }
    }, Tn = async (e2, t2, n2, r2, i2, a2) => {
      var _a3, _b3, _c3, _d3;
      let o2 = ht(), s2 = o2.PTR_SIZE, c2 = vn.get(e2);
      if (!c2) throw Error(`cannot run inference. invalid session id: ${e2}`);
      let l2 = c2[0], u2 = c2[1], d2 = c2[2], f2 = c2[3], p2 = c2[4], m2 = c2[5], h2 = t2.length, g2 = r2.length, _2 = 0, v2 = [], y2 = [], b2 = [], x2 = [], S2 = [], C2 = o2.stackSave(), w2 = o2.stackAlloc(h2 * s2), T2 = o2.stackAlloc(h2 * s2), E2 = o2.stackAlloc(g2 * s2), ee2 = o2.stackAlloc(g2 * s2);
      try {
        [_2, v2] = bt(a2), Se(`wasm prepareInputOutputTensor`);
        for (let r3 = 0; r3 < h2; r3++) await wn(n2[r3], y2, x2, e2, u2[t2[r3]], t2[r3], p2);
        for (let t3 = 0; t3 < g2; t3++) await wn(i2[t3], b2, x2, e2, d2[r2[t3]], h2 + r2[t3], p2);
        Ce(`wasm prepareInputOutputTensor`);
        for (let e3 = 0; e3 < h2; e3++) o2.setValue(w2 + e3 * s2, y2[e3], `*`), o2.setValue(T2 + e3 * s2, u2[t2[e3]], `*`);
        for (let e3 = 0; e3 < g2; e3++) o2.setValue(E2 + e3 * s2, b2[e3], `*`), o2.setValue(ee2 + e3 * s2, d2[r2[e3]], `*`);
        if (f2 && !m2) {
          let { handle: n3, outputPreferredLocations: a3, outputPreferredLocationsEncoded: s3 } = f2;
          if (u2.length !== h2) throw Error(`input count from feeds (${h2}) is expected to be always equal to model's input count (${u2.length}).`);
          Se(`wasm bindInputsOutputs`);
          for (let r3 = 0; r3 < h2; r3++) {
            let i3 = t2[r3];
            await o2._OrtBindInput(n3, u2[i3], y2[r3]) !== 0 && A(`Can't bind input[${r3}] for session=${e2}.`);
          }
          for (let t3 = 0; t3 < g2; t3++) {
            let c4 = r2[t3];
            ((_a3 = i2[t3]) == null ? void 0 : _a3[3]) ? (S2.push(b2[t3]), o2._OrtBindOutput(n3, d2[c4], b2[t3], 0) !== 0 && A(`Can't bind pre-allocated output[${t3}] for session=${e2}.`)) : o2._OrtBindOutput(n3, d2[c4], 0, s3[c4]) !== 0 && A(`Can't bind output[${t3}] to ${a3[t3]} for session=${e2}.`);
          }
          Ce(`wasm bindInputsOutputs`), vn.set(e2, [
            l2,
            u2,
            d2,
            f2,
            p2,
            true
          ]);
        }
        (_b3 = o2.jsepOnRunStart) == null ? void 0 : _b3.call(o2, l2), (_c3 = o2.webnnOnRunStart) == null ? void 0 : _c3.call(o2, l2);
        let c3;
        c3 = f2 ? await o2._OrtRunWithBinding(l2, f2.handle, g2, E2, _2) : await o2._OrtRun(l2, T2, w2, h2, ee2, g2, E2, _2), c3 !== 0 && A(`failed to call OrtRun().`);
        let C3 = [], te2 = [];
        Se(`wasm ProcessOutputTensor`);
        for (let t3 = 0; t3 < g2; t3++) {
          let n3 = Number(o2.getValue(E2 + t3 * s2, `*`));
          if (n3 === b2[t3] || S2.includes(b2[t3])) {
            C3.push(i2[t3]), n3 !== b2[t3] && o2._OrtReleaseTensor(n3) !== 0 && A(`Can't release tensor.`);
            continue;
          }
          let a3 = o2.stackSave(), c4 = o2.stackAlloc(4 * s2), l3 = false, u3, d3 = 0;
          try {
            o2._OrtGetTensorData(n3, c4, c4 + s2, c4 + 2 * s2, c4 + 3 * s2) !== 0 && A(`Can't access output tensor data on index ${t3}.`);
            let i3 = s2 === 4 ? `i32` : `i64`, a4 = Number(o2.getValue(c4, i3));
            d3 = o2.getValue(c4 + s2, `*`);
            let p3 = o2.getValue(c4 + s2 * 2, `*`), m3 = Number(o2.getValue(c4 + s2 * 3, i3)), h3 = [];
            for (let e3 = 0; e3 < m3; e3++) h3.push(Number(o2.getValue(p3 + e3 * s2, i3)));
            o2._OrtFree(p3) !== 0 && A(`Can't free memory for tensor dims.`);
            let g3 = h3.reduce((e3, t4) => e3 * t4, 1);
            u3 = jt(a4);
            let _3 = f2 == null ? void 0 : f2.outputPreferredLocations[r2[t3]];
            if (u3 === `string`) {
              if (_3 === `gpu-buffer` || _3 === `ml-tensor`) throw Error(`String tensor is not supported on GPU.`);
              let e3 = [];
              for (let t4 = 0; t4 < g3; t4++) {
                let n4 = o2.getValue(d3 + t4 * s2, `*`), r3 = o2.getValue(d3 + (t4 + 1) * s2, `*`), i4 = t4 === g3 - 1 ? void 0 : r3 - n4;
                e3.push(o2.UTF8ToString(n4, i4));
              }
              C3.push([
                u3,
                h3,
                e3,
                `cpu`
              ]);
            } else if (_3 === `gpu-buffer` && g3 > 0) {
              let t4 = o2.webgpuGetBuffer;
              if (!t4) throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);
              let r3 = t4(d3), i4 = Mt(a4, g3);
              if (i4 === void 0 || !Ft(u3)) throw Error(`Unsupported data type: ${u3}`);
              l3 = true;
              {
                o2.webgpuRegisterBuffer(r3, e2, d3);
                let t5 = o2.webgpuCreateDownloader(r3, i4, e2);
                C3.push([
                  u3,
                  h3,
                  {
                    gpuBuffer: r3,
                    download: async () => {
                      let e3 = await t5();
                      return new (Nt(u3))(e3);
                    },
                    dispose: () => {
                      o2._OrtReleaseTensor(n3) !== 0 && A(`Can't release tensor.`);
                    }
                  },
                  `gpu-buffer`
                ]);
              }
            } else if (_3 === `ml-tensor` && g3 > 0) {
              let t4 = o2.webnnEnsureTensor, r3 = o2.webnnIsGraphInputOutputTypeSupported;
              if (!t4 || !r3) throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);
              if (Mt(a4, g3) === void 0 || !It(u3)) throw Error(`Unsupported data type: ${u3}`);
              if (!r3(e2, u3, false)) throw Error(`preferredLocation "ml-tensor" for ${u3} output is not supported by current WebNN Context.`);
              let i4 = await t4(e2, d3, a4, h3, false);
              l3 = true, C3.push([
                u3,
                h3,
                {
                  mlTensor: i4,
                  download: o2.webnnCreateMLTensorDownloader(d3, u3),
                  dispose: () => {
                    o2.webnnReleaseTensorId(d3), o2._OrtReleaseTensor(n3);
                  }
                },
                `ml-tensor`
              ]);
            } else if (_3 === `ml-tensor-cpu-output` && g3 > 0) {
              let e3 = o2.webnnCreateMLTensorDownloader(d3, u3)(), t4 = C3.length;
              l3 = true, te2.push((async () => {
                let r3 = [
                  t4,
                  await e3
                ];
                return o2.webnnReleaseTensorId(d3), o2._OrtReleaseTensor(n3), r3;
              })()), C3.push([
                u3,
                h3,
                [],
                `cpu`
              ]);
            } else {
              let e3 = new (Nt(u3))(g3);
              new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength).set(o2.HEAPU8.subarray(d3, d3 + e3.byteLength)), C3.push([
                u3,
                h3,
                e3,
                `cpu`
              ]);
            }
          } finally {
            o2.stackRestore(a3), u3 === `string` && d3 && o2._free(d3), l3 || o2._OrtReleaseTensor(n3);
          }
        }
        f2 && !p2 && (o2._OrtClearBoundOutputs(f2.handle) !== 0 && A(`Can't clear bound outputs.`), vn.set(e2, [
          l2,
          u2,
          d2,
          f2,
          p2,
          false
        ]));
        for (let [e3, t3] of await Promise.all(te2)) C3[e3][2] = t3;
        return Ce(`wasm ProcessOutputTensor`), C3;
      } finally {
        (_d3 = o2.webnnOnRunEnd) == null ? void 0 : _d3.call(o2, l2), o2.stackRestore(C2), n2.forEach((e3) => {
          e3 && e3[3] === `gpu-buffer` && o2.webgpuUnregisterBuffer(e3[2].gpuBuffer);
        }), i2.forEach((e3) => {
          e3 && e3[3] === `gpu-buffer` && o2.webgpuUnregisterBuffer(e3[2].gpuBuffer);
        }), y2.forEach((e3) => o2._OrtReleaseTensor(e3)), b2.forEach((e3) => o2._OrtReleaseTensor(e3)), x2.forEach((e3) => o2._free(e3)), _2 !== 0 && o2._OrtReleaseRunOptions(_2), v2.forEach((e3) => o2._free(e3));
      }
    }, En = (e2) => {
      let t2 = ht(), n2 = vn.get(e2);
      if (!n2) throw Error(`invalid session id`);
      let r2 = n2[0], i2 = t2._OrtEndProfiling(r2);
      i2 === 0 && A(`Can't get an profile file name.`), t2._OrtFree(i2);
    }, Dn = (e2) => {
      let t2 = [];
      for (let n2 of e2) {
        let e3 = n2[2];
        !Array.isArray(e3) && `buffer` in e3 && t2.push(e3.buffer);
      }
      return t2;
    };
  }), kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn = c(() => {
    Pe(), On(), gt(), ot(), kn = () => !!w.wasm.proxy && typeof document < `u`, jn = false, Mn = false, Nn = false, In = /* @__PURE__ */ new Map(), Ln = (e2, t2) => {
      let n2 = In.get(e2);
      n2 ? n2.push(t2) : In.set(e2, [
        t2
      ]);
    }, Rn = () => {
      if (jn || !Mn || Nn || !An) throw Error(`worker not ready`);
    }, zn = (e2) => {
      switch (e2.data.type) {
        case `init-wasm`:
          jn = false, e2.data.err ? (Nn = true, Fn[1](e2.data.err)) : (Mn = true, Fn[0]()), Pn && (Pn = (URL.revokeObjectURL(Pn), void 0));
          break;
        case `init-ep`:
        case `copy-from`:
        case `create`:
        case `release`:
        case `run`:
        case `end-profiling`: {
          let t2 = In.get(e2.data.type);
          e2.data.err ? t2.shift()[1](e2.data.err) : t2.shift()[0](e2.data.out);
          break;
        }
      }
    }, Bn = async () => {
      if (!Mn) {
        if (jn) throw Error(`multiple calls to 'initWasm()' detected.`);
        if (Nn) throw Error(`previous call to 'initWasm()' failed.`);
        if (jn = true, kn()) return new Promise((e2, t2) => {
          An == null ? void 0 : An.terminate(), rt().then(([n2, r2]) => {
            try {
              An = r2, An.onerror = (e3) => t2(e3), An.onmessage = zn, Fn = [
                e2,
                t2
              ];
              let i2 = {
                type: `init-wasm`,
                in: w
              };
              !i2.in.wasm.wasmPaths && (n2 || qe) && (i2.in.wasm.wasmPaths = {
                wasm: new URL(`/vcad/v2026.11.12-7ae7e5c/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, `` + import.meta.url).href
              }), An.postMessage(i2), Pn = n2;
            } catch (e3) {
              t2(e3);
            }
          }, t2);
        });
        try {
          await mt(w.wasm), await gn(w), Mn = true;
        } catch (e2) {
          throw Nn = true, e2;
        } finally {
          jn = false;
        }
      }
    }, Vn = async (e2) => {
      if (kn()) return Rn(), new Promise((t2, n2) => {
        Ln(`init-ep`, [
          t2,
          n2
        ]);
        let r2 = {
          type: `init-ep`,
          in: {
            epName: e2,
            env: w
          }
        };
        An.postMessage(r2);
      });
      await _n(w, e2);
    }, Hn = async (e2) => kn() ? (Rn(), new Promise((t2, n2) => {
      Ln(`copy-from`, [
        t2,
        n2
      ]);
      let r2 = {
        type: `copy-from`,
        in: {
          buffer: e2
        }
      };
      An.postMessage(r2, [
        e2.buffer
      ]);
    })) : xn(e2), Un = async (e2, t2) => {
      if (kn()) {
        if (t2 == null ? void 0 : t2.preferredOutputLocation) throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);
        return Rn(), new Promise((n2, r2) => {
          Ln(`create`, [
            n2,
            r2
          ]);
          let i2 = {
            type: `create`,
            in: {
              model: e2,
              options: {
                ...t2
              }
            }
          }, a2 = [];
          e2 instanceof Uint8Array && a2.push(e2.buffer), An.postMessage(i2, a2);
        });
      }
      return Sn(e2, t2);
    }, Wn = async (e2) => {
      if (kn()) return Rn(), new Promise((t2, n2) => {
        Ln(`release`, [
          t2,
          n2
        ]);
        let r2 = {
          type: `release`,
          in: e2
        };
        An.postMessage(r2);
      });
      Cn(e2);
    }, Gn = async (e2, t2, n2, r2, i2, a2) => {
      if (kn()) {
        if (n2.some((e3) => e3[3] !== `cpu`)) throw Error(`input tensor on GPU is not supported for proxy.`);
        if (i2.some((e3) => e3)) throw Error(`pre-allocated output tensor is not supported for proxy.`);
        return Rn(), new Promise((i3, o2) => {
          Ln(`run`, [
            i3,
            o2
          ]);
          let s2 = n2, c2 = {
            type: `run`,
            in: {
              sessionId: e2,
              inputIndices: t2,
              inputs: s2,
              outputIndices: r2,
              options: a2
            }
          };
          An.postMessage(c2, Dn(s2));
        });
      }
      return Tn(e2, t2, n2, r2, i2, a2);
    }, Kn = async (e2) => {
      if (kn()) return Rn(), new Promise((t2, n2) => {
        Ln(`end-profiling`, [
          t2,
          n2
        ]);
        let r2 = {
          type: `end-profiling`,
          in: e2
        };
        An.postMessage(r2);
      });
      En(e2);
    };
  }), Jn, Yn, Xn, Zn = c(() => {
    Pe(), qn(), Rt(), Fe(), Bt(), Jn = (e2, t2) => {
      switch (e2.location) {
        case `cpu`:
          return [
            e2.type,
            e2.dims,
            e2.data,
            `cpu`
          ];
        case `gpu-buffer`:
          return [
            e2.type,
            e2.dims,
            {
              gpuBuffer: e2.gpuBuffer
            },
            `gpu-buffer`
          ];
        case `ml-tensor`:
          return [
            e2.type,
            e2.dims,
            {
              mlTensor: e2.mlTensor
            },
            `ml-tensor`
          ];
        default:
          throw Error(`invalid data location: ${e2.location} for ${t2()}`);
      }
    }, Yn = (e2) => {
      switch (e2[3]) {
        case `cpu`:
          return new ge(e2[0], e2[2], e2[1]);
        case `gpu-buffer`: {
          let t2 = e2[0];
          if (!Ft(t2)) throw Error(`not supported data type: ${t2} for deserializing GPU tensor`);
          let { gpuBuffer: n2, download: r2, dispose: i2 } = e2[2];
          return ge.fromGpuBuffer(n2, {
            dataType: t2,
            dims: e2[1],
            download: r2,
            dispose: i2
          });
        }
        case `ml-tensor`: {
          let t2 = e2[0];
          if (!It(t2)) throw Error(`not supported data type: ${t2} for deserializing MLTensor tensor`);
          let { mlTensor: n2, download: r2, dispose: i2 } = e2[2];
          return ge.fromMLTensor(n2, {
            dataType: t2,
            dims: e2[1],
            download: r2,
            dispose: i2
          });
        }
        default:
          throw Error(`invalid data location: ${e2[3]}`);
      }
    }, Xn = class {
      async fetchModelAndCopyToWasmMemory(e2) {
        return Hn(await zt(e2));
      }
      async loadModel(e2, t2) {
        be();
        let n2;
        n2 = typeof e2 == `string` ? await this.fetchModelAndCopyToWasmMemory(e2) : e2, [this.sessionId, this.inputNames, this.outputNames, this.inputMetadata, this.outputMetadata] = await Un(n2, t2), xe();
      }
      async dispose() {
        return Wn(this.sessionId);
      }
      async run(e2, t2, n2) {
        be();
        let r2 = [], i2 = [];
        Object.entries(e2).forEach((e3) => {
          let t3 = e3[0], n3 = e3[1], a3 = this.inputNames.indexOf(t3);
          if (a3 === -1) throw Error(`invalid input '${t3}'`);
          r2.push(n3), i2.push(a3);
        });
        let a2 = [], o2 = [];
        Object.entries(t2).forEach((e3) => {
          let t3 = e3[0], n3 = e3[1], r3 = this.outputNames.indexOf(t3);
          if (r3 === -1) throw Error(`invalid output '${t3}'`);
          a2.push(n3), o2.push(r3);
        });
        let s2 = r2.map((e3, t3) => Jn(e3, () => `input "${this.inputNames[i2[t3]]}"`)), c2 = a2.map((e3, t3) => e3 ? Jn(e3, () => `output "${this.outputNames[o2[t3]]}"`) : null), l2 = await Gn(this.sessionId, i2, s2, o2, c2, n2), u2 = {};
        for (let e3 = 0; e3 < l2.length; e3++) u2[this.outputNames[o2[e3]]] = a2[e3] ?? Yn(l2[e3]);
        return xe(), u2;
      }
      startProfiling() {
      }
      endProfiling() {
        Kn(this.sessionId);
      }
    };
  }), Qn = {};
  l(Qn, {
    OnnxruntimeWebAssemblyBackend: () => er,
    initializeFlags: () => $n,
    wasmBackend: () => tr
  });
  var $n, er, tr, nr = c(() => {
    Pe(), qn(), Zn(), $n = () => {
      (typeof w.wasm.initTimeout != `number` || w.wasm.initTimeout < 0) && (w.wasm.initTimeout = 0);
      let e2 = w.wasm.simd;
      if (typeof e2 != `boolean` && e2 !== void 0 && e2 !== `fixed` && e2 !== `relaxed` && (console.warn(`Property "env.wasm.simd" is set to unknown value "${e2}". Reset it to \`false\` and ignore SIMD feature checking.`), w.wasm.simd = false), typeof w.wasm.proxy != `boolean` && (w.wasm.proxy = false), typeof w.wasm.trace != `boolean` && (w.wasm.trace = false), typeof w.wasm.numThreads != `number` || !Number.isInteger(w.wasm.numThreads) || w.wasm.numThreads <= 0) {
        if (typeof self < `u` && !self.crossOriginIsolated) w.wasm.numThreads = 1;
        else {
          let e3 = typeof navigator > `u` ? s(`node:os`).cpus().length : navigator.hardwareConcurrency;
          w.wasm.numThreads = Math.min(4, Math.ceil((e3 || 1) / 2));
        }
      }
    }, er = class {
      async init(e2) {
        $n(), await Bn(), await Vn(e2);
      }
      async createInferenceSessionHandler(e2, t2) {
        let n2 = new Xn();
        return await n2.loadModel(e2, t2), n2;
      }
    }, tr = new er();
  });
  Pe(), Pe(), Pe();
  var rr = `1.31.0-dev.20260914-8d85527a0`, ir = Ne;
  {
    let e2 = (nr(), d(Qn)).wasmBackend;
    m(`webgpu`, e2, 5), m(`webnn`, e2, 5), m(`cpu`, e2, 10), m(`wasm`, e2, 10);
  }
  Object.defineProperty(w.versions, "web", {
    value: rr,
    enumerable: true
  });
  var ar = `1.30.0`, or = `warning`;
  Object.defineProperty({
    wasm: {},
    webgl: {},
    webgpu: {},
    versions: {
      common: ar
    },
    set logLevel(e2) {
      if (e2 !== void 0) {
        if (typeof e2 != `string` || [
          `verbose`,
          `info`,
          `warning`,
          `error`,
          `fatal`
        ].indexOf(e2) === -1) throw Error(`Unsupported logging level: ${e2}`);
        or = e2;
      }
    },
    get logLevel() {
      return or;
    }
  }, "logLevel", {
    enumerable: true
  });
  var sr = (e2, t2) => {
    let n2 = typeof document < `u` ? document.createElement(`canvas`) : new OffscreenCanvas(1, 1);
    n2.width = e2.dims[3], n2.height = e2.dims[2];
    let r2 = n2.getContext(`2d`);
    if (r2 != null) {
      let i2, a2;
      (t2 == null ? void 0 : t2.tensorLayout) !== void 0 && t2.tensorLayout === `NHWC` ? (i2 = e2.dims[2], a2 = e2.dims[3]) : (i2 = e2.dims[3], a2 = e2.dims[2]);
      let o2 = (t2 == null ? void 0 : t2.format) === void 0 ? `RGB` : t2.format, s2 = t2 == null ? void 0 : t2.norm, c2, l2;
      s2 === void 0 || s2.mean === void 0 ? c2 = [
        255,
        255,
        255,
        255
      ] : typeof s2.mean == `number` ? c2 = [
        s2.mean,
        s2.mean,
        s2.mean,
        s2.mean
      ] : (c2 = [
        s2.mean[0],
        s2.mean[1],
        s2.mean[2],
        0
      ], s2.mean[3] !== void 0 && (c2[3] = s2.mean[3])), s2 === void 0 || s2.bias === void 0 ? l2 = [
        0,
        0,
        0,
        0
      ] : typeof s2.bias == `number` ? l2 = [
        s2.bias,
        s2.bias,
        s2.bias,
        s2.bias
      ] : (l2 = [
        s2.bias[0],
        s2.bias[1],
        s2.bias[2],
        0
      ], s2.bias[3] !== void 0 && (l2[3] = s2.bias[3]));
      let u2 = a2 * i2, d2 = 0, f2 = u2, p2 = u2 * 2, m2 = -1;
      o2 === `RGBA` ? (d2 = 0, f2 = u2, p2 = u2 * 2, m2 = u2 * 3) : o2 === `RGB` ? (d2 = 0, f2 = u2, p2 = u2 * 2) : o2 === `RBG` && (d2 = 0, p2 = u2, f2 = u2 * 2);
      for (let t3 = 0; t3 < a2; t3++) for (let n3 = 0; n3 < i2; n3++) {
        let i3 = (e2.data[d2++] - l2[0]) * c2[0], a3 = (e2.data[f2++] - l2[1]) * c2[1], o3 = (e2.data[p2++] - l2[2]) * c2[2], s3 = m2 === -1 ? 255 : (e2.data[m2++] - l2[3]) * c2[3];
        r2.fillStyle = `rgba(` + i3 + `,` + a3 + `,` + o3 + `,` + s3 + `)`, r2.fillRect(n3, t3, 1, 1);
      }
      if (`toDataURL` in n2) return n2.toDataURL();
      throw Error(`toDataURL is not supported`);
    }
    throw Error(`Can not access image data`);
  }, cr = (e2, t2) => {
    let n2 = typeof document < `u` ? document.createElement(`canvas`).getContext(`2d`) : new OffscreenCanvas(1, 1).getContext(`2d`), r2;
    if (n2 != null) {
      let i2, a2, o2;
      (t2 == null ? void 0 : t2.tensorLayout) !== void 0 && t2.tensorLayout === `NHWC` ? (i2 = e2.dims[2], a2 = e2.dims[1], o2 = e2.dims[3]) : (i2 = e2.dims[3], a2 = e2.dims[2], o2 = e2.dims[1]);
      let s2 = t2 === void 0 || t2.format === void 0 ? `RGB` : t2.format, c2 = t2 == null ? void 0 : t2.norm, l2, u2;
      c2 === void 0 || c2.mean === void 0 ? l2 = [
        255,
        255,
        255,
        255
      ] : typeof c2.mean == `number` ? l2 = [
        c2.mean,
        c2.mean,
        c2.mean,
        c2.mean
      ] : (l2 = [
        c2.mean[0],
        c2.mean[1],
        c2.mean[2],
        255
      ], c2.mean[3] !== void 0 && (l2[3] = c2.mean[3])), c2 === void 0 || c2.bias === void 0 ? u2 = [
        0,
        0,
        0,
        0
      ] : typeof c2.bias == `number` ? u2 = [
        c2.bias,
        c2.bias,
        c2.bias,
        c2.bias
      ] : (u2 = [
        c2.bias[0],
        c2.bias[1],
        c2.bias[2],
        0
      ], c2.bias[3] !== void 0 && (u2[3] = c2.bias[3]));
      let d2 = a2 * i2;
      if (t2 !== void 0 && (t2.format !== void 0 && o2 === 4 && t2.format !== `RGBA` || o2 === 3 && t2.format !== `RGB` && t2.format !== `BGR`)) throw Error(`Tensor format doesn't match input tensor dims`);
      let f2 = 0, p2 = 1, m2 = 2, h2 = 3, g2 = 0, _2 = d2, v2 = d2 * 2, y2 = -1;
      s2 === `RGBA` ? (g2 = 0, _2 = d2, v2 = d2 * 2, y2 = d2 * 3) : s2 === `RGB` ? (g2 = 0, _2 = d2, v2 = d2 * 2) : s2 === `RBG` && (g2 = 0, v2 = d2, _2 = d2 * 2), r2 = n2.createImageData(i2, a2);
      for (let t3 = 0; t3 < a2 * i2; f2 += 4, p2 += 4, m2 += 4, h2 += 4, t3++) r2.data[f2] = (e2.data[g2++] - u2[0]) * l2[0], r2.data[p2] = (e2.data[_2++] - u2[1]) * l2[1], r2.data[m2] = (e2.data[v2++] - u2[2]) * l2[2], r2.data[h2] = y2 === -1 ? 255 : (e2.data[y2++] - u2[3]) * l2[3];
    } else throw Error(`Can not access image data`);
    return r2;
  }, lr = (e2, t2) => {
    if (e2 === void 0) throw Error(`Image buffer must be defined`);
    if (t2.height === void 0 || t2.width === void 0) throw Error(`Image height and width must be defined`);
    if (t2.tensorLayout === `NHWC`) throw Error(`NHWC Tensor layout is not supported yet`);
    let { height: n2, width: r2 } = t2, i2 = t2.norm ?? {
      mean: 255,
      bias: 0
    }, a2, o2;
    a2 = typeof i2.mean == `number` ? [
      i2.mean,
      i2.mean,
      i2.mean,
      i2.mean
    ] : [
      i2.mean[0],
      i2.mean[1],
      i2.mean[2],
      i2.mean[3] ?? 255
    ], o2 = typeof i2.bias == `number` ? [
      i2.bias,
      i2.bias,
      i2.bias,
      i2.bias
    ] : [
      i2.bias[0],
      i2.bias[1],
      i2.bias[2],
      i2.bias[3] ?? 0
    ];
    let s2 = t2.format === void 0 ? `RGBA` : t2.format, c2 = t2.tensorFormat === void 0 || t2.tensorFormat === void 0 ? `RGB` : t2.tensorFormat, l2 = n2 * r2, u2 = c2 === `RGBA` ? new Float32Array(l2 * 4) : new Float32Array(l2 * 3), d2 = 4, f2 = 0, p2 = 1, m2 = 2, h2 = 3, g2 = 0, _2 = l2, v2 = l2 * 2, y2 = -1;
    s2 === `RGB` && (d2 = 3, f2 = 0, p2 = 1, m2 = 2, h2 = -1), c2 === `RGBA` ? y2 = l2 * 3 : c2 === `RBG` ? (g2 = 0, v2 = l2, _2 = l2 * 2) : c2 === `BGR` && (v2 = 0, _2 = l2, g2 = l2 * 2);
    for (let t3 = 0; t3 < l2; t3++, f2 += d2, m2 += d2, p2 += d2, h2 += d2) u2[g2++] = (e2[f2] + o2[0]) / a2[0], u2[_2++] = (e2[p2] + o2[1]) / a2[1], u2[v2++] = (e2[m2] + o2[2]) / a2[2], y2 !== -1 && h2 !== -1 && (u2[y2++] = (e2[h2] + o2[3]) / a2[3]);
    return c2 === `RGBA` ? new xr(`float32`, u2, [
      1,
      4,
      n2,
      r2
    ]) : new xr(`float32`, u2, [
      1,
      3,
      n2,
      r2
    ]);
  }, ur = async (e2, t2) => {
    let n2 = typeof HTMLImageElement < `u` && e2 instanceof HTMLImageElement, r2 = typeof ImageData < `u` && e2 instanceof ImageData, i2 = typeof ImageBitmap < `u` && e2 instanceof ImageBitmap, a2 = typeof e2 == `string`, o2, s2 = t2 ?? {}, c2 = () => {
      if (typeof document < `u`) return document.createElement(`canvas`);
      if (typeof OffscreenCanvas < `u`) return new OffscreenCanvas(1, 1);
      throw Error(`Canvas is not supported`);
    }, l2 = (e3) => typeof HTMLCanvasElement < `u` && e3 instanceof HTMLCanvasElement || e3 instanceof OffscreenCanvas ? e3.getContext(`2d`) : null;
    if (n2) {
      let n3 = c2();
      n3.width = e2.width, n3.height = e2.height;
      let r3 = l2(n3);
      if (r3 != null) {
        let n4 = e2.height, i3 = e2.width;
        if (t2 !== void 0 && t2.resizedHeight !== void 0 && t2.resizedWidth !== void 0 && (n4 = t2.resizedHeight, i3 = t2.resizedWidth), t2 !== void 0) {
          if (s2 = t2, t2.tensorFormat !== void 0) throw Error(`Image input config format must be RGBA for HTMLImageElement`);
          s2.tensorFormat = `RGBA`, s2.height = n4, s2.width = i3;
        } else s2.tensorFormat = `RGBA`, s2.height = n4, s2.width = i3;
        r3.drawImage(e2, 0, 0), o2 = r3.getImageData(0, 0, i3, n4).data;
      } else throw Error(`Can not access image data`);
    } else if (r2) {
      let n3, r3;
      if (t2 !== void 0 && t2.resizedWidth !== void 0 && t2.resizedHeight !== void 0 ? (n3 = t2.resizedHeight, r3 = t2.resizedWidth) : (n3 = e2.height, r3 = e2.width), t2 !== void 0 && (s2 = t2), s2.format = `RGBA`, s2.height = n3, s2.width = r3, t2 !== void 0) {
        let t3 = c2();
        t3.width = r3, t3.height = n3;
        let i3 = l2(t3);
        if (i3 != null) i3.putImageData(e2, 0, 0), o2 = i3.getImageData(0, 0, r3, n3).data;
        else throw Error(`Can not access image data`);
      } else o2 = e2.data;
    } else if (i2) {
      if (t2 === void 0) throw Error(`Please provide image config with format for Imagebitmap`);
      let n3 = c2();
      n3.width = e2.width, n3.height = e2.height;
      let r3 = l2(n3);
      if (r3 != null) {
        let t3 = e2.height, n4 = e2.width;
        return r3.drawImage(e2, 0, 0, n4, t3), o2 = r3.getImageData(0, 0, n4, t3).data, s2.height = t3, s2.width = n4, lr(o2, s2);
      }
      throw Error(`Can not access image data`);
    } else if (a2) return new Promise((t3, n3) => {
      let r3 = c2(), i3 = l2(r3);
      if (!e2 || !i3) return n3();
      let a3 = new Image();
      a3.crossOrigin = `Anonymous`, a3.src = e2, a3.onload = () => {
        r3.width = a3.width, r3.height = a3.height, i3.drawImage(a3, 0, 0, r3.width, r3.height);
        let e3 = i3.getImageData(0, 0, r3.width, r3.height);
        s2.height = r3.height, s2.width = r3.width, t3(lr(e3.data, s2));
      };
    });
    else throw Error(`Input data provided is not supported - aborted tensor creation`);
    if (o2 !== void 0) return lr(o2, s2);
    throw Error(`Input data provided is not supported - aborted tensor creation`);
  }, dr = (e2, t2) => {
    let { width: n2, height: r2, download: i2, dispose: a2 } = t2;
    return new xr({
      location: `texture`,
      type: `float32`,
      texture: e2,
      dims: [
        1,
        r2,
        n2,
        4
      ],
      download: i2,
      dispose: a2
    });
  }, fr = (e2, t2) => {
    let { dataType: n2, dims: r2, download: i2, dispose: a2 } = t2;
    return new xr({
      location: `gpu-buffer`,
      type: n2 ?? `float32`,
      gpuBuffer: e2,
      dims: r2,
      download: i2,
      dispose: a2
    });
  }, pr = (e2, t2) => {
    let { dataType: n2, dims: r2, download: i2, dispose: a2 } = t2;
    return new xr({
      location: `ml-tensor`,
      type: n2 ?? `float32`,
      mlTensor: e2,
      dims: r2,
      download: i2,
      dispose: a2
    });
  }, mr = (e2, t2, n2) => new xr({
    location: `cpu-pinned`,
    type: e2,
    data: t2,
    dims: n2 ?? [
      t2.length
    ]
  }), hr = /* @__PURE__ */ new Map([
    [
      `float32`,
      Float32Array
    ],
    [
      `uint8`,
      Uint8Array
    ],
    [
      `int8`,
      Int8Array
    ],
    [
      `uint16`,
      Uint16Array
    ],
    [
      `int16`,
      Int16Array
    ],
    [
      `int32`,
      Int32Array
    ],
    [
      `bool`,
      Uint8Array
    ],
    [
      `float64`,
      Float64Array
    ],
    [
      `uint32`,
      Uint32Array
    ],
    [
      `int4`,
      Uint8Array
    ],
    [
      `uint4`,
      Uint8Array
    ]
  ]), gr = /* @__PURE__ */ new Map([
    [
      Float32Array,
      `float32`
    ],
    [
      Uint8Array,
      `uint8`
    ],
    [
      Int8Array,
      `int8`
    ],
    [
      Uint16Array,
      `uint16`
    ],
    [
      Int16Array,
      `int16`
    ],
    [
      Int32Array,
      `int32`
    ],
    [
      Float64Array,
      `float64`
    ],
    [
      Uint32Array,
      `uint32`
    ]
  ]), _r = false, vr = () => {
    if (!_r) {
      _r = true;
      let e2 = typeof BigInt64Array < `u` && BigInt64Array.from, t2 = typeof BigUint64Array < `u` && BigUint64Array.from, n2 = globalThis.Float16Array, r2 = n2 !== void 0 && n2.from;
      e2 && (hr.set(`int64`, BigInt64Array), gr.set(BigInt64Array, `int64`)), t2 && (hr.set(`uint64`, BigUint64Array), gr.set(BigUint64Array, `uint64`)), r2 ? (hr.set(`float16`, n2), gr.set(n2, `float16`)) : hr.set(`float16`, Uint16Array);
    }
  }, yr = (e2) => {
    let t2 = 1;
    for (let n2 = 0; n2 < e2.length; n2++) {
      let r2 = e2[n2];
      if (typeof r2 != `number` || !Number.isSafeInteger(r2)) throw TypeError(`dims[${n2}] must be an integer, got: ${r2}`);
      if (r2 < 0) throw RangeError(`dims[${n2}] must be a non-negative integer, got: ${r2}`);
      t2 *= r2;
    }
    return t2;
  }, br = (e2, t2) => {
    switch (e2.location) {
      case `cpu`:
        return new xr(e2.type, e2.data, t2);
      case `cpu-pinned`:
        return new xr({
          location: `cpu-pinned`,
          data: e2.data,
          type: e2.type,
          dims: t2
        });
      case `texture`:
        return new xr({
          location: `texture`,
          texture: e2.texture,
          type: e2.type,
          dims: t2
        });
      case `gpu-buffer`:
        return new xr({
          location: `gpu-buffer`,
          gpuBuffer: e2.gpuBuffer,
          type: e2.type,
          dims: t2
        });
      case `ml-tensor`:
        return new xr({
          location: `ml-tensor`,
          mlTensor: e2.mlTensor,
          type: e2.type,
          dims: t2
        });
      default:
        throw Error(`tensorReshape: tensor location ${e2.location} is not supported`);
    }
  }, xr = class {
    constructor(e2, t2, n2) {
      vr();
      let r2, i2;
      if (typeof e2 == `object` && `location` in e2) switch (this.dataLocation = e2.location, r2 = e2.type, i2 = e2.dims, e2.location) {
        case `cpu-pinned`: {
          let t3 = hr.get(r2);
          if (!t3) throw TypeError(`unsupported type "${r2}" to create tensor from pinned buffer`);
          if (!(e2.data instanceof t3)) throw TypeError(`buffer should be of type ${t3.name}`);
          this.cpuData = e2.data;
          break;
        }
        case `texture`:
          if (r2 !== `float32`) throw TypeError(`unsupported type "${r2}" to create tensor from texture`);
          this.gpuTextureData = e2.texture, this.downloader = e2.download, this.disposer = e2.dispose;
          break;
        case `gpu-buffer`:
          if (r2 !== `float32` && r2 !== `float16` && r2 !== `int32` && r2 !== `int64` && r2 !== `uint32` && r2 !== `uint8` && r2 !== `bool` && r2 !== `uint4` && r2 !== `int4`) throw TypeError(`unsupported type "${r2}" to create tensor from gpu buffer`);
          this.gpuBufferData = e2.gpuBuffer, this.downloader = e2.download, this.disposer = e2.dispose;
          break;
        case `ml-tensor`:
          if (r2 !== `float32` && r2 !== `float16` && r2 !== `int32` && r2 !== `int64` && r2 !== `uint32` && r2 !== `uint64` && r2 !== `int8` && r2 !== `uint8` && r2 !== `bool` && r2 !== `uint4` && r2 !== `int4`) throw TypeError(`unsupported type "${r2}" to create tensor from MLTensor`);
          this.mlTensorData = e2.mlTensor, this.downloader = e2.download, this.disposer = e2.dispose;
          break;
        default:
          throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`);
      }
      else {
        let a3, o2;
        if (typeof e2 == `string`) {
          if (r2 = e2, o2 = n2, e2 === `string`) {
            if (!Array.isArray(t2)) throw TypeError(`A string tensor's data must be a string array.`);
            a3 = t2;
          } else {
            let n3 = hr.get(e2);
            if (n3 === void 0) throw TypeError(`Unsupported tensor type: ${e2}.`);
            if (Array.isArray(t2)) {
              if (e2 === `float16` && n3 === Uint16Array || e2 === `uint4` || e2 === `int4`) throw TypeError(`Creating a ${e2} tensor from number array is not supported. Please use ${n3.name} as data.`);
              a3 = e2 === `uint64` || e2 === `int64` ? n3.from(t2, BigInt) : n3.from(t2);
            } else if (t2 instanceof n3) a3 = t2;
            else if (t2 instanceof Uint8ClampedArray) {
              if (e2 === `uint8`) a3 = Uint8Array.from(t2);
              else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);
            } else if (e2 === `float16` && t2 instanceof Uint16Array && n3 !== Uint16Array) a3 = new globalThis.Float16Array(t2.buffer, t2.byteOffset, t2.length);
            else throw TypeError(`A ${r2} tensor's data must be type of ${n3}`);
          }
        } else if (o2 = t2, Array.isArray(e2)) {
          if (e2.length === 0) throw TypeError(`Tensor type cannot be inferred from an empty array.`);
          let t3 = typeof e2[0];
          if (t3 === `string`) r2 = `string`, a3 = e2;
          else if (t3 === `boolean`) r2 = `bool`, a3 = Uint8Array.from(e2);
          else throw TypeError(`Invalid element type of data array: ${t3}.`);
        } else if (e2 instanceof Uint8ClampedArray) r2 = `uint8`, a3 = Uint8Array.from(e2);
        else {
          let t3 = gr.get(e2.constructor);
          if (t3 === void 0) throw TypeError(`Unsupported type for tensor data: ${e2.constructor}.`);
          r2 = t3, a3 = e2;
        }
        if (o2 === void 0) o2 = [
          a3.length
        ];
        else if (!Array.isArray(o2)) throw TypeError(`A tensor's dims must be a number array`);
        i2 = o2, this.cpuData = a3, this.dataLocation = `cpu`;
      }
      let a2 = yr(i2);
      if (this.cpuData && a2 !== this.cpuData.length && (r2 !== `uint4` && r2 !== `int4` || Math.ceil(a2 / 2) !== this.cpuData.length)) throw Error(`Tensor's size(${a2}) does not match data length(${this.cpuData.length}).`);
      this.type = r2, this.dims = i2, this.size = a2;
    }
    static async fromImage(e2, t2) {
      return ur(e2, t2);
    }
    static fromTexture(e2, t2) {
      return dr(e2, t2);
    }
    static fromGpuBuffer(e2, t2) {
      return fr(e2, t2);
    }
    static fromMLTensor(e2, t2) {
      return pr(e2, t2);
    }
    static fromPinnedBuffer(e2, t2, n2) {
      return mr(e2, t2, n2);
    }
    toDataURL(e2) {
      return sr(this, e2);
    }
    toImageData(e2) {
      return cr(this, e2);
    }
    get data() {
      if (this.ensureValid(), !this.cpuData) throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");
      return this.cpuData;
    }
    get location() {
      return this.dataLocation;
    }
    get texture() {
      if (this.ensureValid(), !this.gpuTextureData) throw Error(`The data is not stored as a WebGL texture.`);
      return this.gpuTextureData;
    }
    get gpuBuffer() {
      if (this.ensureValid(), !this.gpuBufferData) throw Error(`The data is not stored as a WebGPU buffer.`);
      return this.gpuBufferData;
    }
    get mlTensor() {
      if (this.ensureValid(), !this.mlTensorData) throw Error(`The data is not stored as a WebNN MLTensor.`);
      return this.mlTensorData;
    }
    async getData(e2) {
      switch (this.ensureValid(), this.dataLocation) {
        case `cpu`:
        case `cpu-pinned`:
          return this.data;
        case `texture`:
        case `gpu-buffer`:
        case `ml-tensor`:
          if (!this.downloader) throw Error(`The current tensor is not created with a specified data downloader.`);
          if (this.isDownloading) throw Error(`The current tensor is being downloaded.`);
          try {
            this.isDownloading = true;
            let t2 = await this.downloader();
            return this.downloader = void 0, this.dataLocation = `cpu`, this.cpuData = t2, e2 && this.disposer && (this.disposer(), this.disposer = void 0), t2;
          } finally {
            this.isDownloading = false;
          }
        default:
          throw Error(`cannot get data from location: ${this.dataLocation}`);
      }
    }
    dispose() {
      if (this.isDownloading) throw Error(`The current tensor is being downloaded.`);
      this.disposer && (this.disposer = (this.disposer(), void 0)), this.cpuData = void 0, this.gpuTextureData = void 0, this.gpuBufferData = void 0, this.mlTensorData = void 0, this.downloader = void 0, this.isDownloading = void 0, this.dataLocation = `none`;
    }
    ensureValid() {
      if (this.dataLocation === `none`) throw Error(`The tensor is disposed.`);
    }
    reshape(e2) {
      if (this.ensureValid(), this.downloader || this.disposer) throw Error(`Cannot reshape a tensor that owns GPU resource.`);
      return br(this, e2);
    }
  }, Sr = xr, Cr = Object.defineProperty, wr = (e2, t2) => {
    for (var n2 in t2) Cr(e2, n2, {
      get: t2[n2],
      enumerable: true
    });
  }, Tr = {}, j = {}, Er = {}, Dr = `4.3.2`, Or = typeof self < `u`, kr = !$r(Tr), Ar = !$r(j), jr = Or && `caches` in self, Mr = globalThis.Deno !== void 0;
  globalThis.Bun;
  var Nr = Mr && jr && !kr, Pr = typeof process < `u`, Fr = Pr && ((_a2 = process == null ? void 0 : process.release) == null ? void 0 : _a2.name) === `node` && !Nr, Ir = typeof window < `u` && window.document !== void 0, Lr = Or && [
    `DedicatedWorkerGlobalScope`,
    `ServiceWorkerGlobalScope`,
    `SharedWorkerGlobalScope`
  ].includes((_b2 = self.constructor) == null ? void 0 : _b2.name), Rr = Ir || Lr || Nr, zr = Fr || typeof navigator < `u` && `gpu` in navigator, Br = typeof navigator < `u` && `ml` in navigator, Vr = typeof crypto < `u` && typeof crypto.getRandomValues == `function`, Hr = typeof chrome < `u` && chrome.runtime !== void 0 && typeof chrome.runtime.id == `string`, Ur = typeof ServiceWorkerGlobalScope < `u` && Or && self instanceof ServiceWorkerGlobalScope, Wr = (() => {
    if (typeof navigator > `u`) return false;
    let e2 = navigator.userAgent;
    if (!((navigator.vendor || ``).indexOf(`Apple`) > -1 && !e2.match(/CriOS|FxiOS|EdgiOS|OPiOS|mercury|brave/i) && !e2.includes(`Chrome`) && !e2.includes(`Android`))) return false;
    let t2 = e2.match(/Version\/(\d+)/);
    return t2 ? parseInt(t2[1], 10) < 26 : false;
  })(), M = Object.freeze({
    IS_BROWSER_ENV: Ir,
    IS_WEBWORKER_ENV: Lr,
    IS_WEB_ENV: Rr,
    IS_SERVICE_WORKER_ENV: Ur,
    IS_DENO_WEB_RUNTIME: Nr,
    IS_WEB_CACHE_AVAILABLE: jr,
    IS_WEBGPU_AVAILABLE: zr,
    IS_WEBNN_AVAILABLE: Br,
    IS_SAFARI_BELOW_26: Wr,
    IS_PROCESS_AVAILABLE: Pr,
    IS_NODE_ENV: Fr,
    IS_FS_AVAILABLE: kr,
    IS_PATH_AVAILABLE: Ar,
    IS_CRYPTO_AVAILABLE: Vr,
    IS_CHROME_AVAILABLE: Hr
  }), Gr = kr && Ar, Kr = `./`;
  if (Gr) {
    let e2 = import.meta.url;
    e2 ? Kr = j.dirname(j.dirname(Er.fileURLToPath(e2))) : typeof __dirname < `u` && (Kr = j.dirname(__dirname));
  }
  let qr, Jr, Yr, Xr, Zr, Qr;
  qr = Gr ? j.join(Kr, `/.cache/`) : null;
  Jr = `/models/`;
  Yr = Gr ? j.join(Kr, Jr) : Jr;
  Xr = typeof globalThis.fetch == `function` ? globalThis.fetch.bind(globalThis) : void 0;
  Zr = Object.freeze({
    DEBUG: 10,
    INFO: 20,
    WARNING: 30,
    ERROR: 40,
    NONE: 50
  });
  Qr = Zr.WARNING;
  N = {
    version: Dr,
    backends: {
      onnx: {}
    },
    get logLevel() {
      return Qr;
    },
    set logLevel(e2) {
      var _a3, _b3;
      Qr = e2, (_b3 = (_a3 = N.backends.onnx) == null ? void 0 : _a3.setLogLevel) == null ? void 0 : _b3.call(_a3, e2);
    },
    allowRemoteModels: true,
    remoteHost: `https://huggingface.co/`,
    remotePathTemplate: `{model}/resolve/{revision}/`,
    allowLocalModels: !(Ir || Lr || Nr),
    localModelPath: Yr,
    useFS: kr,
    useBrowserCache: jr,
    useFSCache: kr,
    cacheDir: qr,
    useCustomCache: false,
    customCache: null,
    useWasmCache: jr || kr,
    cacheKey: `transformers-cache`,
    experimental_useCrossOriginStorage: false,
    fetch: Xr
  };
  function $r(e2) {
    return Object.keys(e2).length === 0;
  }
  var ei = class {
    constructor() {
      let e2 = function(...t2) {
        return e2._call(...t2);
      };
      return Object.setPrototypeOf(e2, new.target.prototype);
    }
    _call(...e2) {
      throw Error(`Must implement _call method in subclass`);
    }
  };
  function ti(e2, t2) {
    e2 && e2(t2);
  }
  var ni = class extends ei {
    constructor(e2, t2) {
      super(), this.callback = e2, this.files_loading = t2, this.loads = /* @__PURE__ */ new Map();
    }
    _call(e2) {
      if (e2.status === `progress`) {
        this.files_loading[e2.file] = {
          loaded: e2.loaded,
          total: e2.total
        };
        let t2 = Object.values(this.files_loading).reduce((e3, t3) => e3 + t3.loaded, 0), n2 = Object.values(this.files_loading).reduce((e3, t3) => e3 + t3.total, 0), r2 = n2 > 0 ? t2 / n2 * 100 : 0;
        this.callback({
          status: `progress_total`,
          name: e2.name,
          progress: r2,
          loaded: t2,
          total: n2,
          files: structuredClone(this.files_loading)
        });
      }
      this.callback(e2);
    }
  };
  function ri(e2) {
    return Number.isInteger(e2) || typeof e2 == `bigint`;
  }
  function ii(e2) {
    return e2 == null || e2 === -1;
  }
  function ai(e2) {
    let t2 = [], n2 = e2;
    for (; Array.isArray(n2); ) t2.push(n2.length), n2 = n2[0];
    return t2;
  }
  function oi(...e2) {
    return Array.prototype.concat.apply([], e2);
  }
  function si(...e2) {
    return e2.reduce((e3, t2) => e3.flatMap((e4) => t2.map((t3) => [
      e4,
      t3
    ])));
  }
  function ci(e2, t2) {
    return Math.abs((e2 + t2) % (2 * t2) - t2);
  }
  function li(e2, t2) {
    return Object.assign({}, ...t2.map((t3) => {
      if (e2[t3] !== void 0) return {
        [t3]: e2[t3]
      };
    }));
  }
  function ui(e2, t2) {
    let n2 = 0;
    for (let r2 of e2) r2 === t2 && ++n2;
    return n2;
  }
  var P = {
    error(...e2) {
      N.logLevel <= Zr.ERROR && console.error(...e2);
    },
    warn(...e2) {
      N.logLevel <= Zr.WARNING && console.warn(...e2);
    },
    info(...e2) {
      N.logLevel <= Zr.INFO && console.log(...e2);
    },
    debug(...e2) {
      N.logLevel <= Zr.DEBUG && console.log(...e2);
    },
    log(...e2) {
      this.info(...e2);
    }
  }, di = class {
    constructor(e2) {
      this.trie = this._build_trie(e2);
    }
    _build_trie(e2) {
      let t2 = /* @__PURE__ */ Object.create(null);
      for (let n2 of e2) {
        let e3 = t2;
        for (let t3 = 0; t3 < n2.length; ++t3) {
          let r2 = n2[t3];
          e3 = e3[r2] ?? (e3[r2] = /* @__PURE__ */ Object.create(null));
        }
        e3.end = n2;
      }
      return t2;
    }
    split(e2) {
      let t2 = [], n2 = e2.length, r2 = 0, i2 = 0;
      for (; i2 < n2; ) {
        let a2 = this.trie, o2 = null, s2 = i2;
        for (; s2 < n2 && (a2 = a2[e2[s2]]); ) a2.end && (o2 = a2.end), ++s2;
        o2 ? (i2 > r2 && t2.push(e2.slice(r2, i2)), t2.push(o2), i2 += o2.length, r2 = i2) : ++i2;
      }
      return r2 < n2 && t2.push(e2.slice(r2)), t2;
    }
  }, fi = class {
    constructor(e2) {
      this.content = e2.content, this.id = e2.id, this.single_word = e2.single_word ?? false, this.lstrip = e2.lstrip ?? false, this.rstrip = e2.rstrip ?? false, this.special = e2.special ?? false, this.normalized = e2.normalized ?? !this.special;
    }
  }, pi = (e2, t2) => {
    try {
      return new RegExp(e2, t2);
    } catch (n2) {
      if (!(n2 instanceof SyntaxError)) throw n2;
      let r2 = /* @__PURE__ */ new Map(), i2 = e2.replace(/(\\[pP])\{([^}=]+)\}/g, (t3, n3, i3, a2) => {
        let o2 = 0;
        for (let t4 = a2 - 1; t4 >= 0 && e2[t4] === `\\`; --t4) ++o2;
        if (o2 % 2 == 1) return t3;
        let s2 = r2.get(i3);
        if (s2 === void 0) {
          try {
            RegExp(`\\p{${i3}}`, `u`), s2 = i3;
          } catch {
            s2 = `Script=${i3}`;
          }
          r2.set(i3, s2);
        }
        return `${n3}{${s2}}`;
      });
      if (i2 === e2) throw n2;
      try {
        return new RegExp(i2, t2);
      } catch {
        throw n2;
      }
    }
  }, mi = (e2) => e2.replace(/ \./g, `.`).replace(/ \?/g, `?`).replace(/ \!/g, `!`).replace(/ ,/g, `,`).replace(/ \' /g, `'`).replace(/ n't/g, `n't`).replace(/ 'm/g, `'m`).replace(/ 's/g, `'s`).replace(/ 've/g, `'ve`).replace(/ 're/g, `'re`), hi = (e2, t2 = true) => {
    if (e2.Regex !== void 0) return pi($i(Vi(e2.Regex)), `gu`);
    if (e2.String !== void 0) {
      let n2 = ea(e2.String);
      return new RegExp(t2 ? n2 : `(${n2})`, `gu`);
    }
    return console.warn(`Unknown pattern type:`, e2), null;
  }, gi = `\\p{Alphabetic}\\p{M}\\p{Nd}\\p{Pc}`, _i = `${gi}\\u00B2\\u00B3\\u00B9\\u00BC-\\u00BE`, vi = `[${_i}]`, yi = `[^${_i}]`, bi = `(?:(?<!${vi})(?=${vi})|(?<=${vi})(?!${vi}))`, xi = `(?:(?<!${vi})(?!${vi})|(?<=${vi})(?=${vi}))`, Si = `(?:(?<![\\s\\S])|(?<=\\n))`, Ci = `(?:(?=\\n)|(?![\\s\\S]))`, wi = `0-9A-Fa-f`, Ti = /* @__PURE__ */ new Map([
    [
      `A`,
      `(?<![\\s\\S])`
    ],
    [
      `z`,
      `(?![\\s\\S])`
    ],
    [
      `Z`,
      `(?=\\n?(?![\\s\\S]))`
    ],
    [
      `h`,
      `[${wi}]`
    ],
    [
      `H`,
      `[^${wi}]`
    ],
    [
      `w`,
      vi
    ],
    [
      `W`,
      yi
    ],
    [
      `d`,
      `\\p{Nd}`
    ],
    [
      `D`,
      `\\P{Nd}`
    ],
    [
      `s`,
      `\\p{White_Space}`
    ],
    [
      `S`,
      `\\P{White_Space}`
    ],
    [
      `b`,
      bi
    ],
    [
      `B`,
      xi
    ],
    [
      `a`,
      `\\x07`
    ],
    [
      `e`,
      `\\x1B`
    ]
  ]), Ei = /* @__PURE__ */ new Map([
    [
      `h`,
      wi
    ],
    [
      `w`,
      gi
    ],
    [
      `d`,
      `\\p{Nd}`
    ],
    [
      `D`,
      `\\P{Nd}`
    ],
    [
      `s`,
      `\\p{White_Space}`
    ],
    [
      `S`,
      `\\P{White_Space}`
    ],
    [
      `a`,
      `\\x07`
    ],
    [
      `e`,
      `\\x1B`
    ]
  ]), Di = /* @__PURE__ */ new Map([
    [
      `W`,
      `[^${gi}]`
    ],
    [
      `H`,
      `[^${wi}]`
    ]
  ]), Oi = /* @__PURE__ */ new Map([
    [
      `
`,
      `\\n`
    ],
    [
      `\r`,
      `\\r`
    ],
    [
      `	`,
      `\\t`
    ],
    [
      `\f`,
      `\\f`
    ],
    [
      `\v`,
      `\\v`
    ]
  ]), ki = /* @__PURE__ */ new Map([
    [
      `alpha`,
      `\\p{Alphabetic}`
    ],
    [
      `alnum`,
      `\\p{Alphabetic}\\p{Nd}`
    ],
    [
      `digit`,
      `\\p{Nd}`
    ],
    [
      `lower`,
      `\\p{Lowercase}`
    ],
    [
      `upper`,
      `\\p{Uppercase}`
    ],
    [
      `space`,
      `\\p{White_Space}`
    ],
    [
      `blank`,
      `\\t\\p{Zs}`
    ],
    [
      `punct`,
      `\\p{P}\\p{S}`
    ],
    [
      `cntrl`,
      `\\p{Cc}`
    ],
    [
      `word`,
      gi
    ],
    [
      `xdigit`,
      wi
    ]
  ]), Ai = `^$\\.*+?()[]{}|/`, ji = /^\(\?(?:<[=!]|<[A-Za-z_][A-Za-z0-9_]*>|[:=!>])/, Mi = /^\\([pPxu])\{([^}]*)\}/, Ni = /^\{(\d+(?:,\d*)?|,\d+)\}/, Pi = new RegExp("^\\[:(\\^?)(\\p{Alphabetic}+):\\]", "u"), Fi = /^\[:\^:\]/, Ii = /^\[(?:\.[^\]]*\.\]|=[^\]]*=\])/, Li = /^(?:\\x[0-9A-Fa-f]{2}|\\u[0-9A-Fa-f]{4}|\\c[A-Za-z])/, Ri = (e2) => e2 >= `A` && e2 <= `Z` || e2 >= `a` && e2 <= `z`, zi = (e2, t2) => String.fromCodePoint(e2.codePointAt(t2)), Bi = (e2) => {
    if (!/^[0-9A-Fa-f]{1,8}$/.test(e2)) return null;
    let t2 = Number.parseInt(e2, 16);
    if (t2 > 127) return null;
    let n2 = String.fromCharCode(t2);
    return Ri(n2) ? `[${n2.toLowerCase()}${n2.toUpperCase()}]` : null;
  }, Vi = (e2) => e2.replace(/\[\^\(\\s\|\[([^\]]+)\]\)\]/g, `[^()|\\s$1]`), Hi = `[\\s\\S]`, Ui = 256, Wi = () => ({
    fragment: ``,
    alternatives: [],
    tail: null,
    contains_complex_set: false
  }), Gi = (e2) => {
    throw SyntaxError(`Unsupported range with a set-valued character-class operand at index ${e2}`);
  }, Ki = (e2, t2, n2, r2 = true) => {
    e2.tail === `range` && Gi(n2), e2.alternatives.push(t2), e2.tail = `set`, e2.contains_complex_set = e2.contains_complex_set || r2;
  }, qi = (e2, t2, n2 = false, r2 = -1) => {
    n2 && e2.tail === `range` && Gi(r2), e2.tail === `range` ? (e2.fragment += t2, e2.tail = `complete_range`) : (e2.fragment += t2, e2.tail = n2 ? `set` : `scalar`, e2.contains_complex_set = e2.contains_complex_set || n2);
  }, Ji = (e2, t2, n2) => {
    let r2 = Mi.exec(e2.slice(t2));
    if (r2) {
      let [e3, i3, a3] = r2;
      return i3 === `P` && a3 === `Word` ? Ki(n2, `[^${gi}]`, t2) : qi(n2, i3 === `x` ? `\\u{${a3}}` : i3 === `p` && a3 === `Word` ? gi : e3, i3 === `p` || i3 === `P`, t2), t2 + e3.length;
    }
    let i2 = Li.exec(e2.slice(t2));
    if (i2) return qi(n2, i2[0]), t2 + i2[0].length;
    if (t2 + 1 >= e2.length) throw SyntaxError(`Unterminated escape in character class at index ${t2}`);
    let a2 = zi(e2, t2 + 1), o2 = t2 + 1 + a2.length, s2 = Oi.get(a2);
    if (s2 !== void 0) return qi(n2, s2), o2;
    let c2 = Di.get(a2);
    if (c2 !== void 0) return Ki(n2, c2, t2), o2;
    let l2 = Ei.get(a2), u2, d2 = false;
    return l2 === void 0 ? u2 = /[A-Za-z0-9]/.test(a2) || Ai.includes(a2) || a2 === `-` ? `\\${a2}` : a2 : (u2 = l2, d2 = a2 !== `a` && a2 !== `e`), qi(n2, u2, d2, t2), o2;
  }, Yi = (e2) => e2.length === 1 ? e2[0] : `(?:(?=(?:${e2.join(`|`)}))${Hi})`, Xi = (e2) => Yi(e2.fragment.length === 0 ? e2.alternatives : [
    `[${e2.fragment}]`,
    ...e2.alternatives
  ]), Zi = (e2) => {
    let t2 = pi(`^(?:${e2})$`, `u`), n2 = ``;
    for (let e3 = 0; e3 < 26; ++e3) {
      let r2 = String.fromCharCode(65 + e3), i2 = String.fromCharCode(97 + e3), a2 = t2.test(r2);
      a2 !== t2.test(i2) && (n2 += a2 ? i2 : r2);
    }
    return n2;
  }, Qi = (e2, t2, n2, r2 = true, i2 = 1) => {
    if (i2 > Ui) throw SyntaxError(`Maximum character-class nesting depth of ${Ui} exceeded at index ${t2}`);
    let a2 = t2 + 1, o2 = e2[a2] === `^`;
    o2 && ++a2;
    let s2 = a2, c2 = [
      Wi()
    ], l2 = c2[0], u2 = false;
    for (; a2 < e2.length; ) {
      let d2 = zi(e2, a2);
      if (d2 === `\\`) a2 = Ji(e2, a2, l2);
      else {
        if (d2 === `]`) {
          if (a2 === s2) {
            qi(l2, `\\]`), ++a2;
            continue;
          }
          if (l2.tail === null) throw c2.length > 1 ? SyntaxError(`Malformed character-class intersection with an empty operand at index ${a2}`) : SyntaxError(`Empty character class at index ${t2}`);
          let e3 = c2.some((e4) => e4.contains_complex_set);
          if (o2 && c2.length > 1 && u2) throw SyntaxError(`Unsupported outer-negated character-class intersection with a nested negated class containing a Unicode property, POSIX class, or shorthand at index ${t2}`);
          let i3 = Xi(c2[0]), d3 = i3;
          if (c2.length > 1) {
            let e4 = ``;
            for (let t3 = 1; t3 < c2.length; ++t3) e4 += `(?=${Xi(c2[t3])})`;
            d3 = `(?:${e4}${i3})`;
          }
          let f2 = c2.length === 1 && l2.alternatives.length === 0, p2 = l2.fragment;
          if (n2 && r2) {
            let e4 = Zi(d3);
            e4.length > 0 && (f2 ? (p2 += e4, d3 = `[${p2}]`) : d3 = Yi([
              d3,
              `[${e4}]`
            ]));
          }
          return {
            atom: o2 ? f2 ? `[^${p2}]` : `(?:(?!${d3})${Hi})` : d3,
            end: a2 + 1,
            negated: o2,
            contains_complex_set: e3,
            contains_nested_negated_complex_set: u2
          };
        }
        if (e2.startsWith(`&&`, a2)) {
          if (l2.tail === null) throw SyntaxError(`Malformed character-class intersection with an empty operand at index ${a2}`);
          l2 = Wi(), c2.push(l2), a2 += 2;
        } else if (d2 === `[`) {
          let t3 = e2.slice(a2);
          if (Fi.test(t3)) throw SyntaxError(`Malformed empty negated POSIX character class at index ${a2}`);
          let r3 = Pi.exec(t3);
          if (r3) {
            let [, e3, t4] = r3, i3 = ki.get(t4);
            if (i3 === void 0) throw SyntaxError(`Unsupported POSIX character class "${t4}" at index ${a2}`);
            if (n2 && e3 && (t4 === `lower` || t4 === `upper`)) throw SyntaxError(`Unsupported negated POSIX ${t4} class inside an inline case-insensitive group`);
            e3 ? Ki(l2, `[^${i3}]`, a2) : qi(l2, i3, true, a2), a2 += r3[0].length;
            continue;
          }
          if (Ii.test(t3)) throw SyntaxError(`Unsupported POSIX collating or equivalence bracket expression at index ${a2}`);
          let o3 = Qi(e2, a2, n2, false, i2 + 1);
          Ki(l2, o3.atom, a2, o3.contains_complex_set), u2 || (u2 = o3.contains_nested_negated_complex_set || o3.negated && o3.contains_complex_set), a2 = o3.end;
        } else if (d2 === `-`) {
          let t3 = e2[a2 + 1] === `]` || e2.startsWith(`&&`, a2 + 1);
          l2.tail === `set` && !t3 && Gi(a2), l2.tail === null || l2.tail === `range` || l2.tail === `complete_range` || t3 ? qi(l2, `\\-`) : (l2.fragment += `-`, l2.tail = `range`), ++a2;
        } else qi(l2, d2 === `^` && l2.fragment.length === 0 ? `\\^` : d2), a2 += d2.length;
      }
    }
    throw SyntaxError(`${c2.length > 1 ? `Unterminated character-class intersection` : `Unterminated character class`} at index ${t2}`);
  }, $i = (e2) => {
    var _a3;
    let t2 = ``, n2 = -1, r2 = false, i2 = false, a2 = [], o2 = (e3) => {
      n2 = t2.length, t2 += e3, r2 = false;
    };
    for (let s2 = 0; s2 < e2.length; ) {
      let c2 = zi(e2, s2);
      if (c2 === `\\`) {
        let n3 = Mi.exec(e2.slice(s2));
        if (n3) {
          let [e3, t3, r4] = n3, a4 = e3;
          if (t3 === `x`) {
            let e4 = `\\u{${r4}}`;
            a4 = i2 ? Bi(r4) ?? e4 : e4;
          } else r4 === `Word` && (a4 = t3 === `p` ? vi : yi);
          o2(a4), s2 += e3.length;
          continue;
        }
        let r3 = Li.exec(e2.slice(s2));
        if (r3) {
          let e3 = r3[0];
          o2(i2 && e3[1] !== `c` ? Bi(e3.slice(2)) ?? e3 : e3), s2 += e3.length;
          continue;
        }
        if (s2 + 1 >= e2.length) {
          t2 += c2;
          break;
        }
        let a3 = zi(e2, s2 + 1);
        if (s2 += 1 + a3.length, a3 === `G`) continue;
        let l2 = Oi.get(a3);
        if (l2 !== void 0) {
          o2(l2);
          continue;
        }
        let u2 = Ti.get(a3), d2;
        d2 = u2 === void 0 ? /[A-Za-z0-9]/.test(a3) || Ai.includes(a3) ? `\\${a3}` : a3 : u2, o2(d2);
      } else switch (c2) {
        case `[`: {
          let t3 = Qi(e2, s2, i2);
          o2(t3.atom), s2 = t3.end;
          continue;
        }
        case `]`:
          o2(`\\]`), ++s2;
          continue;
        case `.`:
          o2(`[^\\n]`), ++s2;
          continue;
        case `^`:
          o2(Si), ++s2;
          continue;
        case `$`:
          o2(Ci), ++s2;
          continue;
        case `(`: {
          let n3 = e2.startsWith(`(?i:`, s2), o3 = n3 ? `(?i:` : ((_a3 = ji.exec(e2.slice(s2))) == null ? void 0 : _a3[0]) ?? `(`, c3 = n3 || o3 === `(?>` ? `(?:` : o3;
          a2.push([
            t2.length,
            i2
          ]), n3 && (i2 = true), t2 += c3, r2 = false, s2 += o3.length;
          continue;
        }
        case `)`:
          t2 += c2, [n2, i2] = a2.pop() ?? [
            -1,
            false
          ], r2 = false, ++s2;
          continue;
        case `|`:
          t2 += c2, n2 = -1, r2 = false, ++s2;
          continue;
        case `{`: {
          let i3 = Ni.exec(e2.slice(s2));
          if (!i3 || n2 < 0) {
            o2(`\\{`), ++s2;
            continue;
          }
          let a3 = i3[1].startsWith(`,`) ? `0${i3[1]}` : i3[1];
          s2 += i3[0].length;
          let c3 = e2[s2];
          c3 === `+` || c3 === `*` ? (t2 = `${t2.slice(0, n2)}(?:${t2.slice(n2)}{${a3}})${c3}`, ++s2) : t2 += `{${a3}}`, r2 = true;
          continue;
        }
        case `}`:
          o2(`\\}`), ++s2;
          continue;
        case `+`:
          if (r2) {
            ++s2;
            continue;
          }
          t2 += c2, r2 = true, ++s2;
          continue;
        case `*`:
        case `?`:
          t2 += c2, r2 = true, ++s2;
          continue;
        default:
          o2(i2 && Ri(c2) ? `[${c2.toLowerCase()}${c2.toUpperCase()}]` : c2), s2 += c2.length;
          continue;
      }
    }
    return t2;
  }, ea = (e2) => e2.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`), ta = (e2, t2, n2) => {
    let r2 = [], i2 = 0;
    for (; i2 < e2.length; ) if (r2.push(e2[i2]), (t2.get(e2[i2]) ?? n2) !== n2) ++i2;
    else for (; ++i2 < e2.length && (t2.get(e2[i2]) ?? n2) === n2; ) t2.get(r2.at(-1)) !== n2 && (r2[r2.length - 1] += e2[i2]);
    return r2;
  }, na = (e2) => e2 >= 19968 && e2 <= 40959 || e2 >= 13312 && e2 <= 19903 || e2 >= 131072 && e2 <= 173791 || e2 >= 173824 && e2 <= 177983 || e2 >= 177984 && e2 <= 178207 || e2 >= 178208 && e2 <= 183983 || e2 >= 63744 && e2 <= 64255 || e2 >= 194560 && e2 <= 195103, ra = (e2) => Number.isInteger(e2) || typeof e2 == `bigint`, ia = (e2) => {
    let t2 = 0;
    for (let n2 of e2) ++t2;
    return t2;
  }, aa = (e2) => la(e2.toLowerCase()), oa = (...e2) => Array.prototype.concat.apply([], e2), sa = (e2) => new Map(Object.entries(e2)), ca = (e2, t2) => {
    let n2 = [], r2 = 0;
    for (let i2 of e2.matchAll(t2)) {
      let t3 = i2[0];
      r2 < i2.index && n2.push(e2.slice(r2, i2.index)), t3.length > 0 && n2.push(t3), r2 = i2.index + t3.length;
    }
    return r2 < e2.length && n2.push(e2.slice(r2)), n2;
  }, la = (e2) => e2.replace(new RegExp("\\p{M}", "gu"), ``), ua = (e2, t2, n2 = []) => {
    if (!e2 || Array.isArray(e2) || typeof e2 != `object`) return `${t2} must be a valid object`;
    for (let r2 of n2) if (!(r2 in e2)) return `${t2} must contain a "${r2}" property`;
    return null;
  }, da = (e2) => e2.match(/\S+/g) || [], fa = class {
    constructor() {
      let e2 = function(...t2) {
        return e2._call(...t2);
      };
      return Object.setPrototypeOf(e2, new.target.prototype);
    }
  }, pa = class extends fa {
    constructor(e2) {
      super(), this.config = e2;
    }
    _call(e2) {
      return this.normalize(e2);
    }
  }, ma = class extends pa {
    tokenize_chinese_chars(e2) {
      let t2 = [];
      for (let n2 = 0; n2 < e2.length; ++n2) {
        let r2 = e2[n2];
        na(r2.charCodeAt(0)) ? (t2.push(` `), t2.push(r2), t2.push(` `)) : t2.push(r2);
      }
      return t2.join(``);
    }
    strip_accents(e2) {
      return e2.normalize(`NFD`).replace(new RegExp("\\p{Mn}", "gu"), ``);
    }
    is_control(e2) {
      switch (e2) {
        case `	`:
        case `
`:
        case `\r`:
          return false;
        default:
          return new RegExp("^\\p{Cc}|\\p{Cf}|\\p{Co}|\\p{Cs}$", "u").test(e2);
      }
    }
    clean_text(e2) {
      let t2 = [];
      for (let n2 of e2) {
        let e3 = n2.charCodeAt(0);
        e3 === 0 || e3 === 65533 || this.is_control(n2) || (/^\s$/.test(n2) ? t2.push(` `) : t2.push(n2));
      }
      return t2.join(``);
    }
    normalize(e2) {
      return this.config.clean_text && (e2 = this.clean_text(e2)), this.config.handle_chinese_chars && (e2 = this.tokenize_chinese_chars(e2)), this.config.lowercase ? (e2 = e2.toLowerCase(), this.config.strip_accents !== false && (e2 = this.strip_accents(e2))) : this.config.strip_accents && (e2 = this.strip_accents(e2)), e2;
    }
  }, ha = class extends pa {
    constructor(e2) {
      super(e2), this.charsmap = e2.precompiled_charsmap ?? null;
    }
    normalize(e2) {
      return e2 = e2.replace(/[\u0001-\u0008\u000B\u000E-\u001F\u007F\u008F\u009F]/gm, ``), e2 = e2.replace(/[\u0009\u000A\u000C\u000D\u00A0\u1680\u2000-\u200F\u2028\u2029\u202F\u205F\u2581\u3000\uFEFF\uFFFD]/gm, ` `), e2 = e2.includes(`\uFF5E`) ? e2.split(`\uFF5E`).map((e3) => e3.normalize(`NFKC`)).join(`\uFF5E`) : e2.normalize(`NFKC`), e2;
    }
  }, ga = class extends pa {
    constructor(e2) {
      super(e2), this.normalizers = (e2.normalizers ?? []).map((e3) => Ta(e3));
    }
    normalize(e2) {
      return this.normalizers.reduce((e3, t2) => t2 ? t2.normalize(e3) : e3, e2);
    }
  }, _a = class extends pa {
    constructor(e2) {
      super(e2), this.pattern = hi(this.config.pattern ?? {});
    }
    normalize(e2) {
      return this.pattern === null ? e2 : e2.replaceAll(this.pattern, this.config.content ?? ``);
    }
  }, va = class extends pa {
    constructor() {
      super(...arguments), this.form = `NFC`;
    }
    normalize(e2) {
      return e2 = e2.normalize(this.form), e2;
    }
  }, ya = class extends va {
    constructor() {
      super(...arguments), this.form = `NFC`;
    }
  }, ba = class extends va {
    constructor() {
      super(...arguments), this.form = `NFD`;
    }
  }, F = class extends va {
    constructor() {
      super(...arguments), this.form = `NFKC`;
    }
  }, xa = class extends va {
    constructor() {
      super(...arguments), this.form = `NFKD`;
    }
  }, Sa = class extends pa {
    normalize(e2) {
      return this.config.strip_left && this.config.strip_right ? e2 = e2.trim() : (this.config.strip_left && (e2 = e2.trimStart()), this.config.strip_right && (e2 = e2.trimEnd())), e2;
    }
  }, I = class extends pa {
    normalize(e2) {
      return la(e2);
    }
  }, Ca = class extends pa {
    normalize(e2) {
      return e2.toLowerCase();
    }
  }, L = class extends pa {
    normalize(e2) {
      return e2 = this.config.prepend + e2, e2;
    }
  };
  function wa(e2) {
    if (e2 === null) return null;
    switch (e2.type) {
      case `BertNormalizer`:
        return new ma(e2);
      case `Precompiled`:
        return new ha(e2);
      case `Sequence`:
        return new ga(e2);
      case `Replace`:
        return new _a(e2);
      case `NFC`:
        return new ya(e2);
      case `NFD`:
        return new ba(e2);
      case `NFKC`:
        return new F(e2);
      case `NFKD`:
        return new xa(e2);
      case `Strip`:
        return new Sa(e2);
      case `StripAccents`:
        return new I(e2);
      case `Lowercase`:
        return new Ca(e2);
      case `Prepend`:
        return new L(e2);
      default:
        throw Error(`Unknown Normalizer type: ${e2.type}`);
    }
  }
  var Ta = wa, Ea = class extends fa {
    pre_tokenize(e2, t2) {
      return (Array.isArray(e2) ? e2.map((e3) => this.pre_tokenize_text(e3, t2)) : this.pre_tokenize_text(e2, t2)).flat();
    }
    _call(e2, t2) {
      return this.pre_tokenize(e2, t2);
    }
  }, Da = (() => {
    let e2 = [
      ...Array.from({
        length: 94
      }, (e3, t3) => t3 + 33),
      ...Array.from({
        length: 12
      }, (e3, t3) => t3 + 161),
      ...Array.from({
        length: 82
      }, (e3, t3) => t3 + 174)
    ], t2 = e2.slice(), n2 = 0;
    for (let r3 = 0; r3 < 256; ++r3) e2.includes(r3) || (e2.push(r3), t2.push(256 + n2), n2 += 1);
    let r2 = t2.map((e3) => String.fromCharCode(e3));
    return Object.fromEntries(e2.map((e3, t3) => [
      e3,
      r2[t3]
    ]));
  })(), Oa = ((e2) => Object.fromEntries(Object.entries(e2).map(([e3, t2]) => [
    t2,
    e3
  ])))(Da), ka = `\\p{P}\\u0021-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E`, Aa = class extends Ea {
    constructor(e2) {
      super(), this.config = e2, this.add_prefix_space = this.config.add_prefix_space ?? false, this.trim_offsets = this.config.trim_offsets ?? false, this.use_regex = this.config.use_regex ?? true, this.pattern = new RegExp("'s|'t|'re|'ve|'m|'ll|'d| ?\\p{L}+| ?\\p{N}+| ?[^\\s\\p{L}\\p{N}]+|\\s+(?!\\S)|\\s+", "gu"), this.byte_encoder = Da, this.text_encoder = new TextEncoder();
    }
    pre_tokenize_text(e2, t2) {
      return this.add_prefix_space && !e2.startsWith(` `) && (e2 = ` ` + e2), (this.use_regex ? e2.match(this.pattern) || [] : [
        e2
      ]).map((e3) => Array.from(this.text_encoder.encode(e3), (e4) => this.byte_encoder[e4]).join(``));
    }
  }, ja = class extends Ea {
    pre_tokenize_text(e2, t2) {
      return e2.match(/\w+|[^\w\s]+/g) || [];
    }
  }, Ma = class extends Ea {
    constructor(e2) {
      super(), this.replacement = e2.replacement ?? `\u2581`, this.str_rep = e2.str_rep || this.replacement, this.prepend_scheme = e2.prepend_scheme ?? `always`;
    }
    pre_tokenize_text(e2, t2) {
      let { section_index: n2 = void 0 } = t2 ?? {}, r2 = e2.replaceAll(` `, this.str_rep);
      return !r2.startsWith(this.replacement) && (this.prepend_scheme === `always` || this.prepend_scheme === `first` && n2 === 0) && (r2 = this.str_rep + r2), [
        r2
      ];
    }
  }, Na = class extends Ea {
    constructor(e2) {
      super(), this.config = e2, this.pattern = hi(this.config.pattern ?? {}, this.config.invert ?? true);
    }
    pre_tokenize_text(e2) {
      var _a3;
      return this.pattern === null ? [] : this.config.invert ? (e2.match(this.pattern) || []).filter((e3) => e3) : ((_a3 = this.config.behavior) == null ? void 0 : _a3.toLowerCase()) === `removed` ? e2.split(this.pattern).filter((e3) => e3) : ca(e2, this.pattern);
    }
  }, Pa = class extends Ea {
    constructor(e2) {
      super(), this.config = e2, this.pattern = RegExp(`[^${ka}]+|[${ka}]+`, `gu`);
    }
    pre_tokenize_text(e2) {
      return e2.match(this.pattern) || [];
    }
  }, Fa = class extends Ea {
    constructor(e2) {
      super(), this.config = e2;
      let t2 = `[^\\d]+|\\d${this.config.individual_digits ? `` : `+`}`;
      this.pattern = new RegExp(t2, `gu`);
    }
    pre_tokenize_text(e2) {
      return e2.match(this.pattern) || [];
    }
  }, Ia = class extends Ea {
    constructor() {
      super(), this.pattern = RegExp(`[^\\s${ka}]+|[${ka}]`, `gu`);
    }
    pre_tokenize_text(e2, t2) {
      return e2.trim().match(this.pattern) || [];
    }
  }, La = class extends Ea {
    constructor(e2) {
      super(), this.config = e2, this.pattern = hi(this.config.pattern ?? {}), this.content = this.config.content ?? ``;
    }
    pre_tokenize_text(e2) {
      return this.pattern === null ? [
        e2
      ] : [
        e2.replaceAll(this.pattern, this.config.content ?? ``)
      ];
    }
  }, Ra = class extends Ea {
    constructor(e2) {
      super(), this.tokenizers = (e2.pretokenizers ?? []).map((e3) => Ha(e3));
    }
    pre_tokenize_text(e2, t2) {
      return this.tokenizers.reduce((e3, n2) => n2 ? n2.pre_tokenize(e3, t2) : e3, [
        e2
      ]);
    }
  }, za = class extends Ea {
    pre_tokenize_text(e2) {
      return da(e2);
    }
  }, Ba = class extends Ea {
    constructor(e2) {
      super(), this.config = e2, this._length = e2.length;
    }
    pre_tokenize_text(e2) {
      let t2 = [];
      for (let n2 = 0; n2 < e2.length; n2 += this._length) t2.push(e2.slice(n2, n2 + this._length));
      return t2;
    }
  };
  function Va(e2) {
    if (e2 === null) return null;
    switch (e2.type) {
      case `BertPreTokenizer`:
        return new Ia();
      case `Sequence`:
        return new Ra(e2);
      case `Whitespace`:
        return new ja();
      case `WhitespaceSplit`:
        return new za();
      case `Metaspace`:
        return new Ma(e2);
      case `ByteLevel`:
        return new Aa(e2);
      case `Split`:
        return new Na(e2);
      case `Punctuation`:
        return new Pa(e2);
      case `Digits`:
        return new Fa(e2);
      case `Replace`:
        return new La(e2);
      case `FixedLength`:
        return new Ba(e2);
      default:
        throw Error(`Unknown PreTokenizer type: ${e2.type}`);
    }
  }
  var Ha = Va, Ua = class extends fa {
    constructor(e2) {
      super(), this.config = e2, this.vocab = [], this.tokens_to_ids = /* @__PURE__ */ new Map(), this.unk_token_id = void 0, this.unk_token = void 0, this.end_of_word_suffix = void 0, this.fuse_unk = this.config.fuse_unk ?? false;
    }
    _call(e2) {
      let t2 = this.encode(e2);
      return this.fuse_unk && (t2 = ta(t2, this.tokens_to_ids, this.unk_token_id)), t2;
    }
  }, Wa = class extends Ua {
    constructor(e2) {
      super(e2), this.max_input_chars_per_word = 100, this.tokens_to_ids = sa(e2.vocab), this.unk_token_id = this.tokens_to_ids.get(e2.unk_token), this.unk_token = e2.unk_token, this.max_input_chars_per_word = e2.max_input_chars_per_word ?? 100, this.vocab = Array(this.tokens_to_ids.size);
      for (let [e3, t2] of this.tokens_to_ids) this.vocab[t2] = e3;
    }
    encode(e2) {
      let t2 = [];
      for (let n2 of e2) {
        let e3 = [
          ...n2
        ];
        if (e3.length > this.max_input_chars_per_word) {
          t2.push(this.unk_token);
          continue;
        }
        let r2 = false, i2 = 0, a2 = [];
        for (; i2 < e3.length; ) {
          let t3 = e3.length, n3 = null;
          for (; i2 < t3; ) {
            let r3 = e3.slice(i2, t3).join(``);
            if (i2 > 0 && (r3 = this.config.continuing_subword_prefix + r3), this.tokens_to_ids.has(r3)) {
              n3 = r3;
              break;
            }
            --t3;
          }
          if (n3 === null) {
            r2 = true;
            break;
          }
          a2.push(n3), i2 = t3;
        }
        r2 ? t2.push(this.unk_token) : t2.push(...a2);
      }
      return t2;
    }
  }, Ga = class e2 {
    constructor(e3, t2) {
      this.is_leaf = e3, this.children = t2;
    }
    static default() {
      return new e2(false, /* @__PURE__ */ new Map());
    }
  }, Ka = class {
    constructor() {
      this.root = Ga.default();
    }
    extend(e2) {
      for (let t2 of e2) this.push(t2);
    }
    push(e2) {
      let t2 = this.root;
      for (let n2 of e2) {
        let e3 = t2.children.get(n2);
        e3 === void 0 && (e3 = Ga.default(), t2.children.set(n2, e3)), t2 = e3;
      }
      t2.is_leaf = true;
    }
    *common_prefix_search(e2, t2 = 0) {
      let n2 = this.root;
      if (n2 === void 0) return;
      let r2 = ``;
      for (let i2 = t2; i2 < e2.length; ++i2) {
        let t3 = e2[i2];
        if (r2 += t3, n2 = n2.children.get(t3), n2 === void 0) return;
        n2.is_leaf && (yield r2);
      }
    }
  }, qa = class e2 {
    constructor(e3, t2, n2, r2, i2) {
      this.token_id = e3, this.node_id = t2, this.pos = n2, this.length = r2, this.score = i2, this.prev = null, this.backtrace_score = 0;
    }
    clone() {
      let t2 = new e2(this.token_id, this.node_id, this.pos, this.length, this.score);
      return t2.prev = this.prev, t2.backtrace_score = this.backtrace_score, t2;
    }
  }, Ja = class {
    constructor(e2, t2, n2) {
      this.chars = Array.from(e2), this.len = this.chars.length, this.bos_token_id = t2, this.eos_token_id = n2, this.nodes = [], this.begin_nodes = Array.from({
        length: this.len + 1
      }, () => []), this.end_nodes = Array.from({
        length: this.len + 1
      }, () => []);
      let r2 = new qa(this.bos_token_id ?? 0, 0, 0, 0, 0), i2 = new qa(this.eos_token_id ?? 0, 1, this.len, 0, 0);
      this.nodes.push(r2.clone()), this.nodes.push(i2.clone()), this.begin_nodes[this.len].push(i2), this.end_nodes[0].push(r2);
    }
    insert(e2, t2, n2, r2) {
      let i2 = this.nodes.length, a2 = new qa(r2, i2, e2, t2, n2);
      this.begin_nodes[e2].push(a2), this.end_nodes[e2 + t2].push(a2), this.nodes.push(a2);
    }
    viterbi() {
      let e2 = this.len, t2 = 0;
      for (; t2 <= e2; ) {
        if (this.begin_nodes[t2].length == 0) return [];
        for (let e3 of this.begin_nodes[t2]) {
          e3.prev = null;
          let n3 = 0, r3 = null;
          for (let i3 of this.end_nodes[t2]) {
            let t3 = i3.backtrace_score + e3.score;
            (r3 === null || t3 > n3) && (r3 = i3.clone(), n3 = t3);
          }
          if (r3 !== null) e3.prev = r3, e3.backtrace_score = n3;
          else return [];
        }
        ++t2;
      }
      let n2 = [], r2 = this.begin_nodes[e2][0].prev;
      if (r2 === null) return [];
      let i2 = r2.clone();
      for (; i2.prev !== null; ) n2.push(i2.clone()), i2 = i2.clone().prev.clone();
      return n2.reverse(), n2;
    }
    piece(e2) {
      return this.chars.slice(e2.pos, e2.pos + e2.length).join(``);
    }
    tokens() {
      return this.viterbi().map((e2) => this.piece(e2));
    }
    token_ids() {
      return this.viterbi().map((e2) => e2.token_id);
    }
  };
  function Ya(e2) {
    if (e2.length === 0) throw Error(`Array must not be empty`);
    let t2 = e2[0], n2 = 0;
    for (let r2 = 1; r2 < e2.length; ++r2) e2[r2] < t2 && (t2 = e2[r2], n2 = r2);
    return [
      t2,
      n2
    ];
  }
  var Xa = class extends Ua {
    constructor(e2, t2) {
      super(e2);
      let n2 = e2.vocab.length;
      this.vocab = Array(n2), this.scores = Array(n2);
      for (let t3 = 0; t3 < n2; ++t3) [this.vocab[t3], this.scores[t3]] = e2.vocab[t3];
      this.unk_token_id = e2.unk_id, this.unk_token = this.vocab[e2.unk_id], this.tokens_to_ids = new Map(this.vocab.map((e3, t3) => [
        e3,
        t3
      ])), this.bos_token = ` `, this.bos_token_id = this.tokens_to_ids.get(this.bos_token), this.eos_token = t2, this.eos_token_id = this.tokens_to_ids.get(this.eos_token), this.unk_token = this.vocab[this.unk_token_id], this.min_score = Ya(this.scores)[0], this.unk_score = this.min_score - 10, this.scores[this.unk_token_id] = this.unk_score, this.trie = new Ka(), this.trie.extend(this.vocab), this.fuse_unk = true;
    }
    populate_nodes(e2) {
      let t2 = e2.chars, n2 = 0;
      for (; n2 < t2.length; ) {
        let r2 = false, i2 = this.trie.common_prefix_search(t2, n2);
        for (let t3 of i2) {
          let i3 = this.tokens_to_ids.get(t3), a2 = this.scores[i3], o2 = ia(t3);
          e2.insert(n2, o2, a2, i3), !r2 && o2 === 1 && (r2 = true);
        }
        r2 || e2.insert(n2, 1, this.unk_score, this.unk_token_id), n2 += 1;
      }
    }
    tokenize(e2) {
      let t2 = new Ja(e2, this.bos_token_id, this.eos_token_id);
      return this.populate_nodes(t2), t2.tokens();
    }
    encode(e2) {
      let t2 = [];
      for (let n2 of e2) {
        let e3 = this.tokenize(n2);
        t2.push(...e3);
      }
      return t2;
    }
  }, Za = class {
    constructor(e2 = (e3, t3) => e3 > t3, t2 = 1 / 0) {
      this._heap = [], this._comparator = e2, this._max_size = t2;
    }
    get size() {
      return this._heap.length;
    }
    is_empty() {
      return this.size === 0;
    }
    peek() {
      return this._heap[0];
    }
    push(...e2) {
      return this.extend(e2);
    }
    extend(e2) {
      for (let t2 of e2) if (this.size < this._max_size) this._heap.push(t2), this._sift_up();
      else {
        let e3 = this._smallest();
        this._comparator(t2, this._heap[e3]) && (this._heap[e3] = t2, this._sift_up_from(e3));
      }
      return this.size;
    }
    pop() {
      let e2 = this.peek(), t2 = this.size - 1;
      return t2 > 0 && this._swap(0, t2), this._heap.pop(), this._sift_down(), e2;
    }
    replace(e2) {
      let t2 = this.peek();
      return this._heap[0] = e2, this._sift_down(), t2;
    }
    _parent(e2) {
      return (e2 + 1 >>> 1) - 1;
    }
    _left(e2) {
      return (e2 << 1) + 1;
    }
    _right(e2) {
      return e2 + 1 << 1;
    }
    _greater(e2, t2) {
      return this._comparator(this._heap[e2], this._heap[t2]);
    }
    _swap(e2, t2) {
      let n2 = this._heap[e2];
      this._heap[e2] = this._heap[t2], this._heap[t2] = n2;
    }
    _sift_up() {
      this._sift_up_from(this.size - 1);
    }
    _sift_up_from(e2) {
      for (; e2 > 0 && this._greater(e2, this._parent(e2)); ) this._swap(e2, this._parent(e2)), e2 = this._parent(e2);
    }
    _sift_down() {
      let e2 = 0;
      for (; this._left(e2) < this.size && this._greater(this._left(e2), e2) || this._right(e2) < this.size && this._greater(this._right(e2), e2); ) {
        let t2 = this._right(e2) < this.size && this._greater(this._right(e2), this._left(e2)) ? this._right(e2) : this._left(e2);
        this._swap(e2, t2), e2 = t2;
      }
    }
    _smallest() {
      return 2 ** Math.floor(Math.log2(this.size)) - 1;
    }
  }, Qa = class {
    constructor(e2) {
      this.capacity = e2, this.cache = /* @__PURE__ */ new Map();
    }
    get(e2) {
      if (!this.cache.has(e2)) return;
      let t2 = this.cache.get(e2);
      return this.cache.delete(e2), this.cache.set(e2, t2), t2;
    }
    put(e2, t2) {
      this.cache.has(e2) && this.cache.delete(e2), this.cache.set(e2, t2), this.cache.size > this.capacity && this.cache.delete(this.cache.keys().next().value);
    }
    clear() {
      this.cache.clear();
    }
  }, $a = class extends Ua {
    constructor(e2) {
      super(e2), this.tokens_to_ids = sa(e2.vocab), this.unk_token_id = this.tokens_to_ids.get(e2.unk_token), this.unk_token = e2.unk_token, this.vocab = Array(this.tokens_to_ids.size);
      for (let [e3, t3] of this.tokens_to_ids) this.vocab[t3] = e3;
      let t2 = Array.isArray(e2.merges[0]);
      this.merges = t2 ? e2.merges : e2.merges.map((e3) => e3.split(` `, 2)), this.bpe_ranks = new Map(this.merges.map((e3, t3) => [
        JSON.stringify(e3),
        t3
      ])), this.end_of_word_suffix = e2.end_of_word_suffix, this.continuing_subword_suffix = e2.continuing_subword_suffix ?? null, this.byte_fallback = this.config.byte_fallback ?? false, this.byte_fallback && (this.text_encoder = new TextEncoder()), this.ignore_merges = this.config.ignore_merges ?? false, this.max_length_to_cache = 256, this.cache_capacity = 1e4, this.cache = new Qa(this.cache_capacity);
    }
    clear_cache() {
      this.cache.clear();
    }
    bpe(e2) {
      if (e2.length === 0) return [];
      let t2 = this.cache.get(e2);
      if (t2 !== void 0) return t2;
      let n2 = Array.from(e2);
      this.end_of_word_suffix && (n2[n2.length - 1] += this.end_of_word_suffix);
      let r2 = [];
      if (n2.length > 1) {
        let e3 = new Za((e4, t4) => e4.score < t4.score), t3 = {
          token: n2[0],
          bias: 0,
          prev: null,
          next: null
        }, i2 = t3;
        for (let t4 = 1; t4 < n2.length; ++t4) {
          let r3 = {
            bias: t4 / n2.length,
            token: n2[t4],
            prev: i2,
            next: null
          };
          i2.next = r3, this.add_node(e3, i2), i2 = r3;
        }
        for (; !e3.is_empty(); ) {
          let n3 = e3.pop();
          if (n3.deleted || !n3.next || n3.next.deleted) continue;
          if (n3.deleted = true, n3.next.deleted = true, n3.prev) {
            let e4 = {
              ...n3.prev
            };
            n3.prev.deleted = true, n3.prev = e4, e4.prev ? e4.prev.next = e4 : t3 = e4;
          }
          let r3 = {
            token: n3.token + n3.next.token,
            bias: n3.bias,
            prev: n3.prev,
            next: n3.next.next
          };
          r3.prev ? (r3.prev.next = r3, this.add_node(e3, r3.prev)) : t3 = r3, r3.next && (r3.next.prev = r3, this.add_node(e3, r3));
        }
        for (let e4 = t3; e4 !== null; e4 = e4.next) r2.push(e4.token);
      } else r2 = n2;
      if (this.continuing_subword_suffix) for (let e3 = 0; e3 < r2.length - 1; ++e3) r2[e3] += this.continuing_subword_suffix;
      return e2.length < this.max_length_to_cache && this.cache.put(e2, r2), r2;
    }
    add_node(e2, t2) {
      let n2 = this.bpe_ranks.get(JSON.stringify([
        t2.token,
        t2.next.token
      ]));
      n2 !== void 0 && (t2.score = n2 + t2.bias, e2.push(t2));
    }
    encode(e2) {
      let t2 = [];
      for (let n2 of e2) {
        if (this.ignore_merges && this.tokens_to_ids.has(n2)) {
          t2.push(n2);
          continue;
        }
        let e3 = this.bpe(n2);
        for (let n3 of e3) if (this.tokens_to_ids.has(n3)) t2.push(n3);
        else if (this.byte_fallback) {
          let e4 = Array.from(this.text_encoder.encode(n3)).map((e5) => `<0x${e5.toString(16).toUpperCase().padStart(2, `0`)}>`);
          e4.every((e5) => this.tokens_to_ids.has(e5)) ? t2.push(...e4) : this.unk_token != null && t2.push(this.unk_token);
        } else this.unk_token != null && t2.push(this.unk_token);
      }
      return t2;
    }
  }, eo = class extends Ua {
    constructor(e2, t2) {
      super(e2);
      let n2 = e2.vocab;
      this.tokens_to_ids = sa(t2.target_lang ? n2[t2.target_lang] : n2), this.bos_token = t2.bos_token, this.bos_token_id = this.tokens_to_ids.get(this.bos_token), this.eos_token = t2.eos_token, this.eos_token_id = this.tokens_to_ids.get(this.eos_token), this.pad_token = t2.pad_token, this.pad_token_id = this.tokens_to_ids.get(this.pad_token), this.unk_token = t2.unk_token, this.unk_token_id = this.tokens_to_ids.get(this.unk_token), this.vocab = Array(this.tokens_to_ids.size);
      for (let [e3, t3] of this.tokens_to_ids) this.vocab[t3] = e3;
    }
    encode(e2) {
      return e2;
    }
  };
  function to(e2, t2) {
    switch (e2.type) {
      case `WordPiece`:
        return new Wa(e2);
      case `Unigram`:
        return new Xa(e2, t2.eos_token);
      case `BPE`:
        return new $a(e2);
      default:
        if (e2.vocab) return Array.isArray(e2.vocab) ? new Xa(e2, t2.eos_token) : Object.hasOwn(e2, `continuing_subword_prefix`) && Object.hasOwn(e2, `unk_token`) ? Object.hasOwn(e2, `merges`) ? new $a(e2) : new Wa(e2) : new eo(e2, {
          target_lang: t2.target_lang,
          bos_token: t2.bos_token,
          eos_token: t2.eos_token,
          pad_token: t2.pad_token,
          unk_token: t2.unk_token
        });
        throw Error(`Unknown TokenizerModel type: ${e2 == null ? void 0 : e2.type}`);
    }
  }
  var no = to, ro = class extends fa {
    constructor(e2) {
      super(), this.config = e2;
    }
    _call(e2, ...t2) {
      return this.post_process(e2, ...t2);
    }
  }, io = class extends ro {
    post_process(e2, t2 = null, n2 = true) {
      let r2 = t2 === null ? this.config.single : this.config.pair, i2 = [], a2 = [];
      for (let o2 of r2) `SpecialToken` in o2 ? n2 && (i2.push(o2.SpecialToken.id), a2.push(o2.SpecialToken.type_id)) : `Sequence` in o2 && (o2.Sequence.id === `A` ? (i2 = oa(i2, e2), a2 = oa(a2, Array(e2.length).fill(o2.Sequence.type_id))) : o2.Sequence.id === `B` && (i2 = oa(i2, t2), a2 = oa(a2, Array(t2.length).fill(o2.Sequence.type_id))));
      return {
        tokens: i2,
        token_type_ids: a2
      };
    }
  }, ao = class extends ro {
    post_process(e2, t2 = null) {
      return {
        tokens: e2,
        tokens_pair: t2
      };
    }
  }, oo = class extends ro {
    constructor(e2) {
      super(e2), this.sep = e2.sep, this.cls = e2.cls;
    }
    post_process(e2, t2 = null, n2 = true) {
      n2 && (e2 = oa([
        this.cls[0]
      ], e2, [
        this.sep[0]
      ]));
      let r2 = Array(e2.length).fill(0);
      if (t2) {
        let i2 = [], a2 = n2 ? [
          this.sep[0]
        ] : [];
        e2 = oa(e2, i2, t2, a2), r2 = oa(r2, Array(t2.length + i2.length + a2.length).fill(1));
      }
      return {
        tokens: e2,
        token_type_ids: r2
      };
    }
  }, so = class extends ro {
    constructor(e2) {
      super(e2), this.sep = e2.sep, this.cls = e2.cls;
    }
    post_process(e2, t2, n2 = true) {
      n2 && (e2 = oa([
        this.cls[0]
      ], e2, [
        this.sep[0]
      ]));
      let r2 = Array(e2.length).fill(0);
      if (t2) {
        let i2 = n2 ? [
          this.sep[0]
        ] : [], a2 = n2 ? [
          this.sep[0]
        ] : [];
        e2 = oa(e2, i2, t2, a2), r2 = oa(r2, Array(t2.length + i2.length + a2.length).fill(1));
      }
      return {
        tokens: e2,
        token_type_ids: r2
      };
    }
  }, co = class extends ro {
    constructor(e2) {
      super(e2), this.processors = (e2.processors ?? []).map((e3) => uo(e3));
    }
    post_process(e2, t2 = null, n2 = true) {
      let r2 = {
        tokens: e2,
        tokens_pair: t2
      };
      for (let e3 of this.processors) r2 = e3.post_process(r2.tokens, r2.tokens_pair, n2);
      return r2;
    }
  };
  function lo(e2) {
    if (e2 === null) return null;
    switch (e2.type) {
      case `TemplateProcessing`:
        return new io(e2);
      case `ByteLevel`:
        return new ao(e2);
      case `BertProcessing`:
        return new oo(e2);
      case `RobertaProcessing`:
        return new so(e2);
      case `Sequence`:
        return new co(e2);
      default:
        throw Error(`Unknown PostProcessor type: ${e2.type}`);
    }
  }
  var uo = lo, fo = class extends fa {
    constructor(e2) {
      super(), this.config = e2, this.added_tokens = [], this.end_of_word_suffix = null, this.trim_offsets = `trim_offsets` in e2 && e2.trim_offsets;
    }
    _call(e2) {
      return this.decode(e2);
    }
    decode(e2) {
      return this.decode_chain(e2).join(``);
    }
  }, po = class extends fo {
    constructor(e2) {
      super(e2), this.byte_decoder = Oa, this.text_decoder = new TextDecoder(`utf-8`, {
        fatal: false,
        ignoreBOM: true
      }), this.end_of_word_suffix = null;
    }
    convert_tokens_to_string(e2) {
      let t2 = e2.join(``), n2 = new Uint8Array([
        ...t2
      ].map((e3) => this.byte_decoder[e3]));
      return this.text_decoder.decode(n2);
    }
    decode_chain(e2) {
      let t2 = [], n2 = [];
      for (let r2 of e2) this.added_tokens.find((e3) => e3.content === r2) === void 0 ? n2.push(r2) : (n2.length > 0 && (t2.push(this.convert_tokens_to_string(n2)), n2 = []), t2.push(r2));
      return n2.length > 0 && t2.push(this.convert_tokens_to_string(n2)), t2;
    }
  }, mo = class extends fo {
    constructor(e2) {
      super(e2), this.cleanup = e2.cleanup;
    }
    decode_chain(e2) {
      return e2.map((e3, t2) => {
        if (t2 !== 0) {
          let t3 = this.config.prefix;
          e3 = t3 && e3.startsWith(t3) ? e3.replace(t3, ``) : ` ` + e3;
        }
        return this.cleanup && (e3 = mi(e3)), e3;
      });
    }
  }, ho = class extends fo {
    constructor(e2) {
      super(e2), this.replacement = e2.replacement ?? `\u2581`;
    }
    decode_chain(e2) {
      let t2 = [];
      for (let n2 = 0; n2 < e2.length; ++n2) {
        let r2 = e2[n2].replaceAll(this.replacement, ` `);
        n2 == 0 && r2.startsWith(` `) && (r2 = r2.substring(1)), t2.push(r2);
      }
      return t2;
    }
  }, go = class extends fo {
    constructor(e2) {
      super(e2), this.suffix = e2.suffix ?? ``;
    }
    decode_chain(e2) {
      return e2.map((t2, n2) => t2.replaceAll(this.suffix, n2 === e2.length - 1 ? `` : ` `));
    }
  }, _o = class extends fo {
    constructor(e2) {
      super(e2), this.pad_token = e2.pad_token ?? ``, this.word_delimiter_token = e2.word_delimiter_token ?? ``, this.cleanup = e2.cleanup;
    }
    convert_tokens_to_string(e2) {
      if (e2.length === 0) return ``;
      let t2 = [
        e2[0]
      ];
      for (let n3 = 1; n3 < e2.length; ++n3) e2[n3] !== t2.at(-1) && t2.push(e2[n3]);
      let n2 = t2.filter((e3) => e3 !== this.pad_token).join(``);
      return this.cleanup && (n2 = mi(n2).replaceAll(this.word_delimiter_token, ` `).trim()), n2;
    }
    decode_chain(e2) {
      return [
        this.convert_tokens_to_string(e2)
      ];
    }
  }, vo = class extends fo {
    constructor(e2) {
      super(e2), this.decoders = (e2.decoders ?? []).map((e3) => wo(e3));
    }
    decode_chain(e2) {
      return this.decoders.reduce((e3, t2) => t2.decode_chain(e3), e2);
    }
  }, yo = class extends fo {
    constructor(e2) {
      super(e2), this.pattern = hi(this.config.pattern);
    }
    decode_chain(e2) {
      let t2 = this.config.content ?? ``, n2 = this.pattern;
      return n2 === null ? e2 : e2.map((e3) => e3.replaceAll(n2, t2));
    }
  }, bo = class extends fo {
    decode_chain(e2) {
      return [
        e2.join(``)
      ];
    }
  }, xo = class extends fo {
    constructor(e2) {
      super(e2), this.content = e2.content ?? ``, this.start = e2.start ?? 0, this.stop = e2.stop ?? 0;
    }
    decode_chain(e2) {
      return e2.map((e3) => {
        let t2 = 0;
        for (let n3 = 0; n3 < this.start && e3[n3] === this.content; ++n3) t2 = n3 + 1;
        let n2 = e3.length;
        for (let t3 = 0; t3 < this.stop; ++t3) {
          let r2 = e3.length - t3 - 1;
          if (e3[r2] === this.content) n2 = r2;
          else break;
        }
        return e3.slice(t2, n2);
      });
    }
  }, So = class extends fo {
    constructor(e2) {
      super(e2), this.text_decoder = new TextDecoder();
    }
    decode_chain(e2) {
      let t2 = [], n2 = [];
      for (let r2 of e2) {
        let e3 = null;
        if (r2.length === 6 && r2.startsWith(`<0x`) && r2.endsWith(`>`)) {
          let t3 = parseInt(r2.slice(3, 5), 16);
          isNaN(t3) || (e3 = t3);
        }
        if (e3 !== null) n2.push(e3);
        else {
          if (n2.length > 0) {
            let e4 = this.text_decoder.decode(Uint8Array.from(n2));
            t2.push(e4), n2 = [];
          }
          t2.push(r2);
        }
      }
      if (n2.length > 0) {
        let e3 = this.text_decoder.decode(Uint8Array.from(n2));
        t2.push(e3), n2 = [];
      }
      return t2;
    }
  };
  function Co(e2) {
    if (e2 === null) return null;
    switch (e2.type) {
      case `ByteLevel`:
        return new po(e2);
      case `WordPiece`:
        return new mo(e2);
      case `Metaspace`:
        return new ho(e2);
      case `BPEDecoder`:
        return new go(e2);
      case `CTC`:
        return new _o(e2);
      case `Sequence`:
        return new vo(e2);
      case `Replace`:
        return new yo(e2);
      case `Fuse`:
        return new bo(e2);
      case `Strip`:
        return new xo(e2);
      case `ByteFallback`:
        return new So(e2);
      default:
        throw Error(`Unknown Decoder type: ${e2.type}`);
    }
  }
  var wo = Co, To = class {
    constructor(e2, t2) {
      let n2 = ua(e2, `Tokenizer`, [
        `model`,
        `decoder`,
        `post_processor`,
        `pre_tokenizer`,
        `normalizer`
      ]);
      if (n2) throw Error(n2);
      let r2 = ua(t2, `Config`);
      if (r2) throw Error(r2);
      this.tokenizer = e2, this.config = t2, this.normalizer = Ta(this.tokenizer.normalizer), this.pre_tokenizer = Ha(this.tokenizer.pre_tokenizer), this.model = no(this.tokenizer.model, this.config), this.post_processor = uo(this.tokenizer.post_processor), this.decoder = wo(this.tokenizer.decoder), this.special_tokens = [], this.all_special_ids = [], this.added_tokens = [];
      let i2 = [], a2 = [];
      this.added_tokens_map = /* @__PURE__ */ new Map();
      for (let e3 of this.tokenizer.added_tokens) {
        let t3 = new fi(e3);
        if (this.added_tokens.push(t3), this.model.tokens_to_ids.set(t3.content, t3.id), this.model.vocab[t3.id] = t3.content, t3.special && (this.special_tokens.push(t3.content), this.all_special_ids.push(t3.id)), this.added_tokens_map.set(t3.content, t3), t3.normalized && this.normalizer !== null) {
          let e4 = this.normalizer(t3.content);
          a2.push(e4), this.added_tokens_map.set(e4, t3);
        } else i2.push(t3.content);
      }
      (this.config.additional_special_tokens ?? []).forEach((e3) => {
        this.special_tokens.includes(e3) || this.special_tokens.push(e3);
      }), this.decoder && (this.decoder.added_tokens = this.added_tokens, this.decoder.end_of_word_suffix = this.model.end_of_word_suffix), this.splitter_unnormalized = new di(i2), this.splitter_normalized = new di(a2), this.remove_space = this.config.remove_space, this.clean_up_tokenization_spaces = this.config.clean_up_tokenization_spaces ?? true, this.do_lowercase_and_remove_accent = this.config.do_lowercase_and_remove_accent ?? false;
    }
    encode(e2, { text_pair: t2 = null, add_special_tokens: n2 = true, return_token_type_ids: r2 = null } = {}) {
      let { tokens: i2, token_type_ids: a2 } = this.tokenize_helper(e2, {
        text_pair: t2,
        add_special_tokens: n2
      }), o2 = i2.map((e3) => {
        var _a3;
        return ((_a3 = this.added_tokens_map.get(e3)) == null ? void 0 : _a3.id) ?? this.model.tokens_to_ids.get(e3) ?? this.model.unk_token_id;
      }), s2 = {
        ids: o2,
        tokens: i2,
        attention_mask: Array(o2.length).fill(1)
      };
      return r2 && a2 && (s2.token_type_ids = a2), s2;
    }
    decode(e2, t2 = {}) {
      if (!Array.isArray(e2) || e2.length === 0 || !ra(e2[0])) throw Error(`token_ids must be a non-empty array of integers.`);
      let n2 = e2.map((e3) => this.model.vocab[Number(e3)] ?? this.model.unk_token);
      t2.skip_special_tokens && (n2 = n2.filter((e3) => !this.special_tokens.includes(e3)));
      let r2 = this.decoder ? this.decoder(n2) : n2.join(` `);
      return this.decoder && this.decoder.end_of_word_suffix && (r2 = r2.replaceAll(this.decoder.end_of_word_suffix, ` `), t2.skip_special_tokens && (r2 = r2.trim())), (t2.clean_up_tokenization_spaces ?? this.clean_up_tokenization_spaces) && (r2 = mi(r2)), r2;
    }
    tokenize(e2, { text_pair: t2 = null, add_special_tokens: n2 = false } = {}) {
      return this.tokenize_helper(e2, {
        text_pair: t2,
        add_special_tokens: n2
      }).tokens;
    }
    encode_text(e2) {
      if (e2 === null) return null;
      let t2 = this.splitter_unnormalized.split(e2);
      return t2.forEach((e3, n2) => {
        let r2 = this.added_tokens_map.get(e3);
        r2 && (r2.lstrip && n2 > 0 && (t2[n2 - 1] = t2[n2 - 1].trimEnd()), r2.rstrip && n2 < t2.length - 1 && (t2[n2 + 1] = t2[n2 + 1].trimStart()));
      }), t2.flatMap((e3, t3) => {
        if (e3.length === 0) return [];
        if (this.added_tokens_map.has(e3)) return [
          e3
        ];
        if (this.remove_space === true && (e3 = e3.trim().split(/\s+/).join(` `)), this.do_lowercase_and_remove_accent && (e3 = aa(e3)), this.normalizer !== null && (e3 = this.normalizer(e3)), e3.length === 0) return [];
        let n2 = this.splitter_normalized.split(e3);
        return n2.forEach((e4, t4) => {
          let r2 = this.added_tokens_map.get(e4);
          r2 && (r2.lstrip && t4 > 0 && (n2[t4 - 1] = n2[t4 - 1].trimEnd()), r2.rstrip && t4 < n2.length - 1 && (n2[t4 + 1] = n2[t4 + 1].trimStart()));
        }), n2.flatMap((e4) => {
          if (e4.length === 0) return [];
          if (this.added_tokens_map.has(e4)) return [
            e4
          ];
          let n3 = this.pre_tokenizer === null ? [
            e4
          ] : this.pre_tokenizer(e4, {
            section_index: t3
          });
          return this.model(n3);
        });
      });
    }
    tokenize_helper(e2, { text_pair: t2 = null, add_special_tokens: n2 = true }) {
      let r2 = this.encode_text(e2), i2 = this.encode_text(t2 || null);
      return this.post_processor ? this.post_processor(r2, i2, n2) : {
        tokens: oa(r2 ?? [], i2 ?? [])
      };
    }
    token_to_id(e2) {
      return this.model.tokens_to_ids.get(e2);
    }
    id_to_token(e2) {
      return this.model.vocab[e2];
    }
    get_added_tokens_decoder() {
      let e2 = /* @__PURE__ */ new Map();
      for (let t2 of this.added_tokens) e2.set(t2.id, t2);
      return e2;
    }
    get_vocab(e2 = true) {
      let t2 = /* @__PURE__ */ new Map();
      for (let n2 = 0; n2 < this.model.vocab.length; ++n2) {
        let r2 = this.model.vocab[n2];
        (e2 || !this.added_tokens_map.has(r2)) && t2.set(r2, n2);
      }
      return t2;
    }
  }, Eo = Object.defineProperty, Do = (e2, t2, n2) => t2 in e2 ? Eo(e2, t2, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n2
  }) : e2[t2] = n2, Oo = (e2, t2, n2) => (Do(e2, typeof t2 == `symbol` ? t2 : t2 + ``, n2), n2), R = Object.freeze({
    Text: `Text`,
    NumericLiteral: `NumericLiteral`,
    StringLiteral: `StringLiteral`,
    Identifier: `Identifier`,
    Equals: `Equals`,
    OpenParen: `OpenParen`,
    CloseParen: `CloseParen`,
    OpenStatement: `OpenStatement`,
    CloseStatement: `CloseStatement`,
    OpenExpression: `OpenExpression`,
    CloseExpression: `CloseExpression`,
    OpenSquareBracket: `OpenSquareBracket`,
    CloseSquareBracket: `CloseSquareBracket`,
    OpenCurlyBracket: `OpenCurlyBracket`,
    CloseCurlyBracket: `CloseCurlyBracket`,
    Comma: `Comma`,
    Dot: `Dot`,
    Colon: `Colon`,
    Pipe: `Pipe`,
    CallOperator: `CallOperator`,
    AdditiveBinaryOperator: `AdditiveBinaryOperator`,
    MultiplicativeBinaryOperator: `MultiplicativeBinaryOperator`,
    ExponentiationBinaryOperator: `ExponentiationBinaryOperator`,
    ComparisonBinaryOperator: `ComparisonBinaryOperator`,
    UnaryOperator: `UnaryOperator`,
    Comment: `Comment`
  }), ko = class {
    constructor(e2, t2) {
      this.value = e2, this.type = t2;
    }
  };
  function Ao(e2) {
    return /\w/.test(e2);
  }
  function jo(e2) {
    return /[0-9]/.test(e2);
  }
  function Mo(e2) {
    return /\s/.test(e2);
  }
  var No = [
    [
      `{%`,
      R.OpenStatement
    ],
    [
      `%}`,
      R.CloseStatement
    ],
    [
      `{{`,
      R.OpenExpression
    ],
    [
      `}}`,
      R.CloseExpression
    ],
    [
      `(`,
      R.OpenParen
    ],
    [
      `)`,
      R.CloseParen
    ],
    [
      `{`,
      R.OpenCurlyBracket
    ],
    [
      `}`,
      R.CloseCurlyBracket
    ],
    [
      `[`,
      R.OpenSquareBracket
    ],
    [
      `]`,
      R.CloseSquareBracket
    ],
    [
      `,`,
      R.Comma
    ],
    [
      `.`,
      R.Dot
    ],
    [
      `:`,
      R.Colon
    ],
    [
      `|`,
      R.Pipe
    ],
    [
      `<=`,
      R.ComparisonBinaryOperator
    ],
    [
      `>=`,
      R.ComparisonBinaryOperator
    ],
    [
      `==`,
      R.ComparisonBinaryOperator
    ],
    [
      `!=`,
      R.ComparisonBinaryOperator
    ],
    [
      `<`,
      R.ComparisonBinaryOperator
    ],
    [
      `>`,
      R.ComparisonBinaryOperator
    ],
    [
      `+`,
      R.AdditiveBinaryOperator
    ],
    [
      `-`,
      R.AdditiveBinaryOperator
    ],
    [
      `~`,
      R.AdditiveBinaryOperator
    ],
    [
      `**`,
      R.ExponentiationBinaryOperator
    ],
    [
      `*`,
      R.MultiplicativeBinaryOperator
    ],
    [
      `//`,
      R.MultiplicativeBinaryOperator
    ],
    [
      `/`,
      R.MultiplicativeBinaryOperator
    ],
    [
      `%`,
      R.MultiplicativeBinaryOperator
    ],
    [
      `=`,
      R.Equals
    ]
  ], Po = /* @__PURE__ */ new Map([
    [
      `n`,
      `
`
    ],
    [
      `t`,
      `	`
    ],
    [
      `r`,
      `\r`
    ],
    [
      `b`,
      `\b`
    ],
    [
      `f`,
      `\f`
    ],
    [
      `v`,
      `\v`
    ],
    [
      `'`,
      `'`
    ],
    [
      `"`,
      `"`
    ],
    [
      `\\`,
      `\\`
    ]
  ]);
  function Fo(e2, t2 = {}) {
    return e2.endsWith(`
`) && (e2 = e2.slice(0, -1)), t2.lstrip_blocks && (e2 = e2.replace(/^[ \t]*({[#%-])/gm, `$1`)), t2.trim_blocks && (e2 = e2.replace(/([#%-]})\n/g, `$1`)), e2.replace(/(\s*){%(-?)\s*(?:end)?generation\s*(-?)%}(\s*)/gs, (e3, t3, n2, r2, i2) => (n2 ? `` : t3) + (r2 ? `` : i2));
  }
  function Io(e2, t2 = {}) {
    var _a3, _b3, _c3;
    let n2 = [], r2 = Fo(e2, t2), i2 = 0, a2 = 0, o2 = (e3) => {
      let t3 = ``;
      for (; e3(r2[i2]); ) if (r2[i2] === `\\`) {
        if (++i2, i2 >= r2.length) throw SyntaxError(`Unexpected end of input`);
        let e4 = r2[i2++], n3 = Po.get(e4);
        if (n3 === void 0) throw SyntaxError(`Unexpected escaped character: ${e4}`);
        t3 += n3;
      } else if (t3 += r2[i2++], i2 >= r2.length) throw SyntaxError(`Unexpected end of input`);
      return t3;
    }, s2 = () => {
      let e3 = n2.at(-1);
      e3 && e3.type === R.Text && (e3.value = e3.value.trimEnd(), e3.value === `` && n2.pop());
    }, c2 = () => {
      for (; i2 < r2.length && Mo(r2[i2]); ) ++i2;
    };
    main: for (; i2 < r2.length; ) {
      let e3 = (_a3 = n2.at(-1)) == null ? void 0 : _a3.type;
      if (e3 === void 0 || e3 === R.CloseStatement || e3 === R.CloseExpression || e3 === R.Comment) {
        let e4 = ``;
        for (; i2 < r2.length && (r2[i2] !== `{` || r2[i2 + 1] !== `%` && r2[i2 + 1] !== `{` && r2[i2 + 1] !== `#`); ) e4 += r2[i2++];
        if (e4.length > 0) {
          n2.push(new ko(e4, R.Text));
          continue;
        }
      }
      if (r2[i2] === `{` && r2[i2 + 1] === `#`) {
        i2 += 2;
        let e4 = r2[i2] === `-`;
        e4 && ++i2;
        let t4 = ``;
        for (; r2[i2] !== `#` || r2[i2 + 1] !== `}`; ) {
          if (i2 + 2 >= r2.length) throw SyntaxError(`Missing end of comment tag`);
          t4 += r2[i2++];
        }
        let a3 = t4.endsWith(`-`);
        a3 && (t4 = t4.slice(0, -1)), e4 && s2(), n2.push(new ko(t4, R.Comment)), i2 += 2, a3 && c2();
        continue;
      }
      if (r2.slice(i2, i2 + 3) === `{%-`) {
        s2(), n2.push(new ko(`{%`, R.OpenStatement)), i2 += 3;
        continue;
      }
      if (r2.slice(i2, i2 + 3) === `{{-`) {
        s2(), n2.push(new ko(`{{`, R.OpenExpression)), a2 = 0, i2 += 3;
        continue;
      }
      if (o2(Mo), r2.slice(i2, i2 + 3) === `-%}`) {
        n2.push(new ko(`%}`, R.CloseStatement)), i2 += 3, c2();
        continue;
      }
      if (r2.slice(i2, i2 + 3) === `-}}`) {
        n2.push(new ko(`}}`, R.CloseExpression)), i2 += 3, c2();
        continue;
      }
      let t3 = r2[i2];
      if (t3 === `-` || t3 === `+`) {
        let e4 = (_b3 = n2.at(-1)) == null ? void 0 : _b3.type;
        if (e4 === R.Text || e4 === void 0) throw SyntaxError(`Unexpected character: ${t3}`);
        switch (e4) {
          case R.Identifier:
          case R.NumericLiteral:
          case R.StringLiteral:
          case R.CloseParen:
          case R.CloseSquareBracket:
            break;
          default: {
            ++i2;
            let e5 = o2(jo);
            if (e5.length > 0 && r2[i2] === `.` && jo(r2[i2 + 1])) {
              ++i2;
              let t4 = o2(jo);
              e5 = `${e5}.${t4}`;
            }
            n2.push(new ko(`${t3}${e5}`, e5.length > 0 ? R.NumericLiteral : R.UnaryOperator));
            continue;
          }
        }
      }
      for (let [e4, t4] of No) if (!(e4 === `}}` && a2 > 0) && r2.slice(i2, i2 + e4.length) === e4) {
        n2.push(new ko(e4, t4)), t4 === R.OpenExpression ? a2 = 0 : t4 === R.OpenCurlyBracket ? ++a2 : t4 === R.CloseCurlyBracket && --a2, i2 += e4.length;
        continue main;
      }
      if (t3 === `'` || t3 === `"`) {
        ++i2;
        let e4 = o2((e5) => e5 !== t3);
        n2.push(new ko(e4, R.StringLiteral)), ++i2;
      } else if (jo(t3)) {
        let e4 = o2(jo);
        if (((_c3 = n2.at(-1)) == null ? void 0 : _c3.type) !== R.Dot && r2[i2] === `.` && jo(r2[i2 + 1])) {
          ++i2;
          let t4 = o2(jo);
          e4 = `${e4}.${t4}`;
        }
        n2.push(new ko(e4, R.NumericLiteral));
      } else if (Ao(t3)) {
        let e4 = o2(Ao);
        n2.push(new ko(e4, R.Identifier));
      } else throw SyntaxError(`Unexpected character: ${t3}`);
    }
    return n2;
  }
  var Lo = class {
    constructor() {
      __publicField(this, "type", `Statement`);
    }
  }, Ro = class extends Lo {
    constructor(e2) {
      super();
      __publicField(this, "type", `Program`);
      this.body = e2;
    }
  }, zo = class extends Lo {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "type", `If`);
      this.test = e2, this.body = t2, this.alternate = n2;
    }
  }, Bo = class extends Lo {
    constructor(e2, t2, n2, r2) {
      super();
      __publicField(this, "type", `For`);
      this.loopvar = e2, this.iterable = t2, this.body = n2, this.defaultBlock = r2;
    }
  }, Vo = class extends Lo {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `Break`);
    }
  }, Ho = class extends Lo {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `Continue`);
    }
  }, Uo = class extends Lo {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "type", `Set`);
      this.assignee = e2, this.value = t2, this.body = n2;
    }
  }, Wo = class extends Lo {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "type", `Macro`);
      this.name = e2, this.args = t2, this.body = n2;
    }
  }, Go = class extends Lo {
    constructor(e2) {
      super();
      __publicField(this, "type", `Comment`);
      this.value = e2;
    }
  }, Ko = class extends Lo {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `Expression`);
    }
  }, qo = class extends Ko {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "type", `MemberExpression`);
      this.object = e2, this.property = t2, this.computed = n2;
    }
  }, Jo = class extends Ko {
    constructor(e2, t2) {
      super();
      __publicField(this, "type", `CallExpression`);
      this.callee = e2, this.args = t2;
    }
  }, Yo = class extends Ko {
    constructor(e2) {
      super();
      __publicField(this, "type", `Identifier`);
      this.value = e2;
    }
  }, Xo = class extends Ko {
    constructor(e2) {
      super();
      __publicField(this, "type", `Literal`);
      this.value = e2;
    }
  }, Zo = class extends Xo {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `IntegerLiteral`);
    }
  }, Qo = class extends Xo {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `FloatLiteral`);
    }
  }, $o = class extends Xo {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `StringLiteral`);
    }
  }, es = class extends Xo {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `ArrayLiteral`);
    }
  }, ts = class extends Xo {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `TupleLiteral`);
    }
  }, ns = class extends Xo {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `ObjectLiteral`);
    }
  }, rs = class extends Ko {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "type", `BinaryExpression`);
      this.operator = e2, this.left = t2, this.right = n2;
    }
  }, is = class extends Ko {
    constructor(e2, t2) {
      super();
      __publicField(this, "type", `FilterExpression`);
      this.operand = e2, this.filter = t2;
    }
  }, as = class extends Lo {
    constructor(e2, t2) {
      super();
      __publicField(this, "type", `FilterStatement`);
      this.filter = e2, this.body = t2;
    }
  }, os = class extends Ko {
    constructor(e2, t2) {
      super();
      __publicField(this, "type", `SelectExpression`);
      this.lhs = e2, this.test = t2;
    }
  }, ss = class extends Ko {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "type", `TestExpression`);
      this.operand = e2, this.negate = t2, this.test = n2;
    }
  }, cs = class extends Ko {
    constructor(e2, t2) {
      super();
      __publicField(this, "type", `UnaryExpression`);
      this.operator = e2, this.argument = t2;
    }
  }, ls = class extends Ko {
    constructor(e2 = void 0, t2 = void 0, n2 = void 0) {
      super();
      __publicField(this, "type", `SliceExpression`);
      this.start = e2, this.stop = t2, this.step = n2;
    }
  }, us = class extends Ko {
    constructor(e2, t2) {
      super();
      __publicField(this, "type", `KeywordArgumentExpression`);
      this.key = e2, this.value = t2;
    }
  }, ds = class extends Ko {
    constructor(e2) {
      super();
      __publicField(this, "type", `SpreadExpression`);
      this.argument = e2;
    }
  }, fs = class extends Ko {
    constructor(e2) {
      super();
      __publicField(this, "type", `KeywordSpreadExpression`);
      this.argument = e2;
    }
  }, ps = class extends Lo {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "type", `CallStatement`);
      this.call = e2, this.callerArgs = t2, this.body = n2;
    }
  }, ms = class extends Ko {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "type", `Ternary`);
      this.condition = e2, this.trueExpr = t2, this.falseExpr = n2;
    }
  };
  function hs(e2) {
    let t2 = new Ro([]), n2 = 0;
    function r2(t3, r3) {
      let i3 = e2[n2++];
      if (!i3 || i3.type !== t3) throw Error(`Parser Error: ${r3}. ${i3.type} !== ${t3}.`);
      return i3;
    }
    function i2(e3) {
      if (!c2(e3)) throw SyntaxError(`Expected ${e3}`);
      ++n2;
    }
    function a2() {
      switch (e2[n2].type) {
        case R.Comment:
          return new Go(e2[n2++].value);
        case R.Text:
          return l2();
        case R.OpenStatement:
          return u2();
        case R.OpenExpression:
          return d2();
        default:
          throw SyntaxError(`Unexpected token type: ${e2[n2].type}`);
      }
    }
    function o2(...t3) {
      return n2 + t3.length <= e2.length && t3.every((t4, r3) => t4 === e2[n2 + r3].type);
    }
    function s2(...t3) {
      var _a3, _b3, _c3;
      return ((_a3 = e2[n2]) == null ? void 0 : _a3.type) === R.OpenStatement && ((_b3 = e2[n2 + 1]) == null ? void 0 : _b3.type) === R.Identifier && t3.includes((_c3 = e2[n2 + 1]) == null ? void 0 : _c3.value);
    }
    function c2(...t3) {
      return n2 + t3.length <= e2.length && t3.every((t4, r3) => e2[n2 + r3].type === `Identifier` && t4 === e2[n2 + r3].value);
    }
    function l2() {
      return new $o(r2(R.Text, `Expected text token`).value);
    }
    function u2() {
      if (r2(R.OpenStatement, `Expected opening statement token`), e2[n2].type !== R.Identifier) throw SyntaxError(`Unknown statement, got ${e2[n2].type}`);
      let t3 = e2[n2].value, c3;
      switch (t3) {
        case `set`:
          ++n2, c3 = f2();
          break;
        case `if`:
          ++n2, c3 = p2(), r2(R.OpenStatement, `Expected {% token`), i2(`endif`), r2(R.CloseStatement, `Expected %} token`);
          break;
        case `macro`:
          ++n2, c3 = m2(), r2(R.OpenStatement, `Expected {% token`), i2(`endmacro`), r2(R.CloseStatement, `Expected %} token`);
          break;
        case `for`:
          ++n2, c3 = g2(), r2(R.OpenStatement, `Expected {% token`), i2(`endfor`), r2(R.CloseStatement, `Expected %} token`);
          break;
        case `call`: {
          ++n2;
          let e3 = null;
          o2(R.OpenParen) && (e3 = E2(`parameters`));
          let t4 = oe2();
          if (t4.type !== `Identifier`) throw SyntaxError(`Expected identifier following call statement`);
          let l3 = E2(`call`);
          r2(R.CloseStatement, `Expected closing statement token`);
          let u3 = [];
          for (; !s2(`endcall`); ) u3.push(a2());
          r2(R.OpenStatement, `Expected '{%'`), i2(`endcall`), r2(R.CloseStatement, `Expected closing statement token`), c3 = new ps(new Jo(t4, l3), e3, u3);
          break;
        }
        case `break`:
          ++n2, r2(R.CloseStatement, `Expected closing statement token`), c3 = new Vo();
          break;
        case `continue`:
          ++n2, r2(R.CloseStatement, `Expected closing statement token`), c3 = new Ho();
          break;
        case `filter`: {
          ++n2;
          let e3 = oe2();
          e3 instanceof Yo && o2(R.OpenParen) && (e3 = T2(e3)), r2(R.CloseStatement, `Expected closing statement token`);
          let t4 = [];
          for (; !s2(`endfilter`); ) t4.push(a2());
          r2(R.OpenStatement, `Expected '{%'`), i2(`endfilter`), r2(R.CloseStatement, `Expected '%}'`), c3 = new as(e3, t4);
          break;
        }
        default:
          throw SyntaxError(`Unknown statement type: ${t3}`);
      }
      return c3;
    }
    function d2() {
      r2(R.OpenExpression, `Expected opening expression token`);
      let e3 = _2();
      return r2(R.CloseExpression, `Expected closing expression token`), e3;
    }
    function f2() {
      let e3 = h2(), t3 = null, c3 = [];
      if (o2(R.Equals)) ++n2, t3 = h2();
      else {
        for (r2(R.CloseStatement, `Expected %} token`); !s2(`endset`); ) c3.push(a2());
        r2(R.OpenStatement, `Expected {% token`), i2(`endset`);
      }
      return r2(R.CloseStatement, `Expected closing statement token`), new Uo(e3, t3, c3);
    }
    function p2() {
      let e3 = _2();
      r2(R.CloseStatement, `Expected closing statement token`);
      let t3 = [], i3 = [];
      for (; !s2(`elif`, `else`, `endif`); ) t3.push(a2());
      if (s2(`elif`)) {
        ++n2, ++n2;
        let e4 = p2();
        i3.push(e4);
      } else if (s2(`else`)) for (++n2, ++n2, r2(R.CloseStatement, `Expected closing statement token`); !s2(`endif`); ) i3.push(a2());
      return new zo(e3, t3, i3);
    }
    function m2() {
      let e3 = oe2();
      if (e3.type !== `Identifier`) throw SyntaxError(`Expected identifier following macro statement`);
      let t3 = E2(`parameters`);
      r2(R.CloseStatement, `Expected closing statement token`);
      let n3 = [];
      for (; !s2(`endmacro`); ) n3.push(a2());
      return new Wo(e3, t3, n3);
    }
    function h2(e3 = false) {
      let t3 = e3 ? oe2 : _2, r3 = [
        t3()
      ], i3 = o2(R.Comma);
      for (; i3 && (++n2, r3.push(t3()), o2(R.Comma)); ) ;
      return i3 ? new ts(r3) : r3[0];
    }
    function g2() {
      let e3 = h2(true);
      if (!(e3 instanceof Yo || e3 instanceof ts)) throw SyntaxError(`Expected identifier/tuple for the loop variable, got ${e3.type} instead`);
      if (!c2(`in`)) throw SyntaxError("Expected `in` keyword following loop variable");
      ++n2;
      let t3 = _2();
      r2(R.CloseStatement, `Expected closing statement token`);
      let i3 = [];
      for (; !s2(`endfor`, `else`); ) i3.push(a2());
      let o3 = [];
      if (s2(`else`)) for (++n2, ++n2, r2(R.CloseStatement, `Expected closing statement token`); !s2(`endfor`); ) o3.push(a2());
      return new Bo(e3, t3, i3, o3);
    }
    function _2() {
      return v2();
    }
    function v2() {
      let e3 = y2();
      if (c2(`if`)) {
        ++n2;
        let t3 = y2();
        return c2(`else`) ? (++n2, new ms(t3, e3, v2())) : new os(e3, t3);
      }
      return e3;
    }
    function y2() {
      let t3 = b2();
      for (; c2(`or`); ) {
        let r3 = e2[n2];
        ++n2;
        let i3 = b2();
        t3 = new rs(r3, t3, i3);
      }
      return t3;
    }
    function b2() {
      let t3 = x2();
      for (; c2(`and`); ) {
        let r3 = e2[n2];
        ++n2;
        let i3 = x2();
        t3 = new rs(r3, t3, i3);
      }
      return t3;
    }
    function x2() {
      let t3;
      for (; c2(`not`); ) {
        let r3 = e2[n2];
        ++n2, t3 = new cs(r3, x2());
      }
      return t3 ?? S2();
    }
    function S2() {
      let t3 = C2();
      for (; ; ) {
        let r3;
        if (c2(`not`, `in`)) r3 = new ko(`not in`, R.Identifier), n2 += 2;
        else if (c2(`in`)) r3 = e2[n2++];
        else if (o2(R.ComparisonBinaryOperator)) r3 = e2[n2++];
        else break;
        let i3 = C2();
        t3 = new rs(r3, t3, i3);
      }
      return t3;
    }
    function C2() {
      let t3 = O2();
      for (; o2(R.AdditiveBinaryOperator); ) {
        let r3 = e2[n2];
        ++n2;
        let i3 = O2();
        t3 = new rs(r3, t3, i3);
      }
      return t3;
    }
    function w2() {
      let e3 = D2(oe2());
      return o2(R.OpenParen) ? T2(e3) : e3;
    }
    function T2(e3) {
      let t3 = new Jo(e3, E2(`call`));
      return t3 = D2(t3), o2(R.OpenParen) && (t3 = T2(t3)), t3;
    }
    function E2(e3) {
      r2(R.OpenParen, `Expected opening parenthesis for arguments list`);
      let t3 = ee2(e3);
      return r2(R.CloseParen, `Expected closing parenthesis for arguments list`), t3;
    }
    function ee2(t3) {
      let r3 = [], i3 = /* @__PURE__ */ new Set(), a3 = false, s3 = false;
      for (; !o2(R.CloseParen); ) {
        let c3 = o2(R.ExponentiationBinaryOperator), l3 = o2(R.MultiplicativeBinaryOperator) && e2[n2].value === `*`;
        if (t3 === `parameters` && (c3 || l3)) throw SyntaxError(`Argument unpacking is not allowed in parameter declarations`);
        if (c3) {
          if (++n2, r3.push(new fs(_2())), o2(R.Comma) && ++n2, !o2(R.CloseParen)) throw SyntaxError("Expected closing parenthesis: `**` must be applied to the final argument");
          break;
        }
        let u3;
        if (l3) {
          if (s3) throw SyntaxError("Only one `*` argument unpacking is allowed");
          s3 = true, ++n2, u3 = new ds(_2());
        } else {
          if (u3 = _2(), o2(R.Equals)) {
            if (++n2, !(u3 instanceof Yo)) throw SyntaxError(t3 === `parameters` ? `Expected identifier for parameter declaration` : `Expected identifier for keyword argument`);
            let e3 = _2();
            u3 = new us(u3, e3);
          }
          if (t3 === `parameters`) {
            if (!(u3 instanceof Yo || u3 instanceof us)) throw SyntaxError(`Expected identifier for parameter declaration`);
            let e3 = u3 instanceof Yo ? u3.value : u3.key.value;
            if (i3.has(e3)) throw SyntaxError(`Duplicate parameter name: ${e3}`);
            i3.add(e3);
          }
          if (u3 instanceof us) a3 = true;
          else if (a3) throw SyntaxError(t3 === `call` ? `Positional arguments must come before keyword arguments` : `Non-default argument follows default argument`);
          else if (s3) throw SyntaxError("Positional arguments must not follow `*` argument unpacking");
        }
        r3.push(u3), o2(R.Comma) && ++n2;
      }
      return r3;
    }
    function te2() {
      let e3 = [], t3 = false;
      for (; !o2(R.CloseSquareBracket); ) o2(R.Colon) ? (e3.push(void 0), ++n2, t3 = true) : (e3.push(_2()), o2(R.Colon) && (++n2, t3 = true));
      if (e3.length === 0) throw SyntaxError(`Expected at least one argument for member/slice expression`);
      if (t3) {
        if (e3.length > 3) throw SyntaxError(`Expected 0-3 arguments for slice expression`);
        return new ls(...e3);
      }
      return e3[0];
    }
    function D2(t3) {
      for (; o2(R.Dot) || o2(R.OpenSquareBracket); ) {
        let i3 = e2[n2];
        ++n2;
        let a3, o3 = i3.type === R.OpenSquareBracket;
        if (o3) a3 = te2(), r2(R.CloseSquareBracket, `Expected closing square bracket`);
        else if (a3 = oe2(), a3.type !== `Identifier` && a3.type !== `IntegerLiteral`) throw SyntaxError(`Expected identifier or integer following dot operator`);
        t3 = new qo(t3, a3, o3);
      }
      return t3;
    }
    function O2() {
      let t3 = ne2();
      for (; o2(R.MultiplicativeBinaryOperator); ) {
        let r3 = e2[n2++], i3 = ne2();
        t3 = new rs(r3, t3, i3);
      }
      return t3;
    }
    function ne2() {
      let t3 = re2();
      for (; o2(R.ExponentiationBinaryOperator); ) {
        let r3 = e2[n2++], i3 = re2();
        t3 = new rs(r3, t3, i3);
      }
      return t3;
    }
    function re2() {
      let e3 = ie2();
      for (; c2(`is`); ) {
        ++n2;
        let t3 = c2(`not`);
        t3 && ++n2;
        let r3 = oe2();
        if (!(r3 instanceof Yo)) throw SyntaxError(`Expected identifier for the test`);
        e3 = new ss(e3, t3, r3);
      }
      return e3;
    }
    function ie2() {
      let e3 = ae2();
      for (; o2(R.Pipe); ) {
        ++n2;
        let t3 = oe2();
        if (!(t3 instanceof Yo)) throw SyntaxError(`Expected identifier for the filter`);
        o2(R.OpenParen) && (t3 = T2(t3)), e3 = new is(e3, t3);
      }
      return e3;
    }
    function ae2() {
      let t3 = e2[n2];
      if (t3 && (t3.type === R.UnaryOperator || t3.type === R.AdditiveBinaryOperator) && (t3.value === `-` || t3.value === `+`)) {
        let t4 = e2[n2++];
        return new cs(t4, ae2());
      }
      return w2();
    }
    function oe2() {
      let t3 = e2[n2++];
      switch (t3.type) {
        case R.NumericLiteral: {
          let e3 = t3.value;
          return e3.includes(`.`) ? new Qo(Number(e3)) : new Zo(Number(e3));
        }
        case R.StringLiteral: {
          let r3 = t3.value;
          for (; o2(R.StringLiteral); ) r3 += e2[n2++].value;
          return new $o(r3);
        }
        case R.Identifier:
          return new Yo(t3.value);
        case R.OpenParen: {
          let e3 = h2();
          return r2(R.CloseParen, "Expected closing parenthesis, got ${tokens[current].type} instead."), e3;
        }
        case R.OpenSquareBracket: {
          let e3 = [];
          for (; !o2(R.CloseSquareBracket); ) e3.push(_2()), o2(R.Comma) && ++n2;
          return ++n2, new es(e3);
        }
        case R.OpenCurlyBracket: {
          let e3 = /* @__PURE__ */ new Map();
          for (; !o2(R.CloseCurlyBracket); ) {
            let t4 = _2();
            r2(R.Colon, `Expected colon between key and value in object literal`);
            let i3 = _2();
            e3.set(t4, i3), o2(R.Comma) && ++n2;
          }
          return ++n2, new ns(e3);
        }
        default:
          throw SyntaxError(`Unexpected token: ${t3.type}`);
      }
    }
    for (; n2 < e2.length; ) t2.body.push(a2());
    return t2;
  }
  function gs(e2, t2, n2 = 1) {
    if (t2 === void 0 && (t2 = e2, e2 = 0), n2 === 0) throw Error(`range() step must not be zero`);
    let r2 = [];
    if (n2 > 0) for (let i2 = e2; i2 < t2; i2 += n2) r2.push(i2);
    else for (let i2 = e2; i2 > t2; i2 += n2) r2.push(i2);
    return r2;
  }
  function _s(e2, t2, n2, r2 = 1) {
    let i2 = Math.sign(r2);
    i2 >= 0 ? (t2 = (t2 ?? (t2 = 0)) < 0 ? Math.max(e2.length + t2, 0) : Math.min(t2, e2.length), n2 = (n2 ?? (n2 = e2.length)) < 0 ? Math.max(e2.length + n2, 0) : Math.min(n2, e2.length)) : (t2 = (t2 ?? (t2 = e2.length - 1)) < 0 ? Math.max(e2.length + t2, -1) : Math.min(t2, e2.length - 1), n2 = (n2 ?? (n2 = -1)) < -1 ? Math.max(e2.length + n2, -1) : Math.min(n2, e2.length - 1));
    let a2 = [];
    for (let o2 = t2; i2 * o2 < i2 * n2; o2 += r2) a2.push(e2[o2]);
    return a2;
  }
  function vs(e2) {
    return e2.replace(/\b\w/g, (e3) => e3.toUpperCase());
  }
  function ys(e2) {
    return bs(/* @__PURE__ */ new Date(), e2);
  }
  function bs(e2, t2) {
    let n2 = new Intl.DateTimeFormat(void 0, {
      month: `long`
    }), r2 = new Intl.DateTimeFormat(void 0, {
      month: `short`
    }), i2 = (e3) => e3 < 10 ? `0` + e3 : e3.toString();
    return t2.replace(/%[YmdbBHM%]/g, (t3) => {
      switch (t3) {
        case `%Y`:
          return e2.getFullYear().toString();
        case `%m`:
          return i2(e2.getMonth() + 1);
        case `%d`:
          return i2(e2.getDate());
        case `%b`:
          return r2.format(e2);
        case `%B`:
          return n2.format(e2);
        case `%H`:
          return i2(e2.getHours());
        case `%M`:
          return i2(e2.getMinutes());
        case `%%`:
          return `%`;
        default:
          return t3;
      }
    });
  }
  function xs(e2) {
    return e2.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
  }
  function Ss(e2, t2, n2, r2) {
    if (r2 === 0) return e2;
    let i2 = r2 == null || r2 < 0 ? 1 / 0 : r2, a2 = t2.length === 0 ? RegExp(`(?=)`, `gu`) : new RegExp(xs(t2), `gu`);
    return e2.replaceAll(a2, (e3) => i2 > 0 ? (--i2, n2) : e3);
  }
  var Cs = class extends Error {
  }, ws = class extends Error {
  }, Ts = /* @__PURE__ */ new Map(), Es = class {
    constructor(e2 = void 0) {
      __publicField(this, "type", `RuntimeValue`);
      __publicField(this, "value");
      this.value = e2;
    }
    get builtins() {
      return Ts;
    }
    __bool__() {
      return new H(!!this.value);
    }
    toString() {
      return String(this.value);
    }
  }, z = class extends Es {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `IntegerValue`);
    }
  }, B = class extends Es {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `FloatValue`);
    }
    toString() {
      return Object.is(this.value, -0) ? `-0.0` : this.value % 1 == 0 ? this.value.toFixed(1) : this.value.toString();
    }
  }, V = class extends Es {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `StringValue`);
      __publicField(this, "_builtins");
    }
    get builtins() {
      return this._builtins ?? (this._builtins = /* @__PURE__ */ new Map([
        [
          `upper`,
          new Ps(() => new V(this.value.toUpperCase()))
        ],
        [
          `lower`,
          new Ps(() => new V(this.value.toLowerCase()))
        ],
        [
          `strip`,
          new Ps(() => new V(this.value.trim()))
        ],
        [
          `title`,
          new Ps(() => new V(vs(this.value)))
        ],
        [
          `capitalize`,
          new Ps(() => new V(this.value.charAt(0).toUpperCase() + this.value.slice(1)))
        ],
        [
          `length`,
          new z(this.value.length)
        ],
        [
          `rstrip`,
          new Ps(() => new V(this.value.trimEnd()))
        ],
        [
          `lstrip`,
          new Ps(() => new V(this.value.trimStart()))
        ],
        [
          `startswith`,
          new Ps((e2) => {
            if (e2.length === 0) throw Error(`startswith() requires at least one argument`);
            let t2 = e2[0];
            if (t2 instanceof V) return new H(this.value.startsWith(t2.value));
            if (t2 instanceof U) {
              for (let e3 of t2.value) {
                if (!(e3 instanceof V)) throw Error(`startswith() tuple elements must be strings`);
                if (this.value.startsWith(e3.value)) return new H(true);
              }
              return new H(false);
            }
            throw Error(`startswith() argument must be a string or tuple of strings`);
          })
        ],
        [
          `endswith`,
          new Ps((e2) => {
            if (e2.length === 0) throw Error(`endswith() requires at least one argument`);
            let t2 = e2[0];
            if (t2 instanceof V) return new H(this.value.endsWith(t2.value));
            if (t2 instanceof U) {
              for (let e3 of t2.value) {
                if (!(e3 instanceof V)) throw Error(`endswith() tuple elements must be strings`);
                if (this.value.endsWith(e3.value)) return new H(true);
              }
              return new H(false);
            }
            throw Error(`endswith() argument must be a string or tuple of strings`);
          })
        ],
        [
          `split`,
          new Ps((e2) => {
            let t2 = e2[0] ?? new Fs();
            if (!(t2 instanceof V || t2 instanceof Fs)) throw Error(`sep argument must be a string or null`);
            let n2 = e2[1] ?? new z(-1);
            if (!(n2 instanceof z)) throw Error(`maxsplit argument must be a number`);
            let r2 = [];
            if (t2 instanceof Fs) {
              let e3 = this.value.trimStart();
              for (let { 0: t3, index: i2 } of e3.matchAll(/\S+/g)) {
                if (n2.value !== -1 && r2.length >= n2.value && i2 !== void 0) {
                  r2.push(t3 + e3.slice(i2 + t3.length));
                  break;
                }
                r2.push(t3);
              }
            } else {
              if (t2.value === ``) throw Error(`empty separator`);
              r2 = this.value.split(t2.value), n2.value !== -1 && r2.length > n2.value && r2.push(r2.splice(n2.value).join(t2.value));
            }
            return new U(r2.map((e3) => new V(e3)));
          })
        ],
        [
          `replace`,
          new Ps((e2) => {
            if (e2.length < 2) throw Error(`replace() requires at least two arguments`);
            let t2 = e2[0], n2 = e2[1];
            if (!(t2 instanceof V && n2 instanceof V)) throw Error(`replace() arguments must be strings`);
            let r2;
            if (r2 = e2.length > 2 ? e2[2].type === `KeywordArgumentsValue` ? e2[2].value.get(`count`) ?? new Fs() : e2[2] : new Fs(), !(r2 instanceof z || r2 instanceof Fs)) throw Error(`replace() count argument must be a number or null`);
            return new V(Ss(this.value, t2.value, n2.value, r2.value));
          })
        ]
      ]));
    }
  }, H = class extends Es {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `BooleanValue`);
    }
  }, Ds = /[\x7f-\uffff]/g;
  function Os(e2) {
    return e2.replace(Ds, (e3) => `\\u` + e3.charCodeAt(0).toString(16).padStart(4, `0`));
  }
  function ks(e2, t2 = {}, n2 = 0, r2 = true) {
    let { indent: i2 = null, ensureAscii: a2 = false, separators: o2 = null, sortKeys: s2 = false } = t2, c2, l2;
    switch (o2 ? [c2, l2] = o2 : i2 ? (c2 = `,`, l2 = `: `) : (c2 = `, `, l2 = `: `), e2.type) {
      case `NullValue`:
        return `null`;
      case `UndefinedValue`:
        return r2 ? `null` : `undefined`;
      case `IntegerValue`:
      case `FloatValue`:
      case `BooleanValue`:
        return JSON.stringify(e2.value);
      case `StringValue`: {
        let t3 = JSON.stringify(e2.value);
        return a2 && (t3 = Os(t3)), t3;
      }
      case `ArrayValue`:
      case `NamespaceValue`:
      case `ObjectValue`: {
        let o3 = i2 ? ` `.repeat(i2) : ``, u2 = `
` + o3.repeat(n2), d2 = u2 + o3;
        if (e2.type === `ArrayValue`) {
          let a3 = e2.value.map((e3) => ks(e3, t2, n2 + 1, r2));
          return i2 ? `[${d2}${a3.join(`${c2}${d2}`)}${u2}]` : `[${a3.join(c2)}]`;
        }
        {
          let o4 = Array.from(e2.value.entries());
          s2 && (o4 = o4.sort(([e3], [t3]) => e3.localeCompare(t3)));
          let f2 = o4.map(([e3, o5]) => {
            let s3 = JSON.stringify(e3);
            a2 && (s3 = Os(s3));
            let c3 = `${s3}${l2}${ks(o5, t2, n2 + 1, r2)}`;
            return i2 ? `${d2}${c3}` : c3;
          });
          return i2 ? `{${f2.join(c2)}${u2}}` : `{${f2.join(c2)}}`;
        }
      }
      default:
        throw Error(`Cannot convert to JSON: ${e2.type}`);
    }
  }
  var As = class extends Es {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `ObjectValue`);
      __publicField(this, "_builtins");
    }
    __bool__() {
      return new H(this.value.size > 0);
    }
    get builtins() {
      return this._builtins ?? (this._builtins = /* @__PURE__ */ new Map([
        [
          `get`,
          new Ps(([e2, t2]) => {
            if (!(e2 instanceof V)) throw Error(`Object key must be a string: got ${e2.type}`);
            return this.value.get(e2.value) ?? t2 ?? new Fs();
          })
        ],
        [
          `items`,
          new Ps(() => this.items())
        ],
        [
          `keys`,
          new Ps(() => this.keys())
        ],
        [
          `values`,
          new Ps(() => this.values())
        ],
        [
          `dictsort`,
          new Ps((e2) => {
            let t2 = /* @__PURE__ */ new Map(), n2 = e2.filter((e3) => e3 instanceof js ? (t2 = e3.value, false) : true), r2 = n2.at(0) ?? t2.get(`case_sensitive`) ?? new H(false);
            if (!(r2 instanceof H)) throw Error(`case_sensitive must be a boolean`);
            let i2 = n2.at(1) ?? t2.get(`by`) ?? new V(`key`);
            if (!(i2 instanceof V)) throw Error(`by must be a string`);
            if (![
              `key`,
              `value`
            ].includes(i2.value)) throw Error(`by must be either 'key' or 'value'`);
            let a2 = n2.at(2) ?? t2.get(`reverse`) ?? new H(false);
            if (!(a2 instanceof H)) throw Error(`reverse must be a boolean`);
            return new U(Array.from(this.value.entries()).map(([e3, t3]) => new U([
              new V(e3),
              t3
            ])).sort((e3, t3) => {
              let n3 = i2.value === `key` ? 0 : 1, o2 = e3.value[n3], s2 = t3.value[n3], c2 = Gs(o2, s2, r2.value);
              return a2.value ? -c2 : c2;
            }));
          })
        ]
      ]));
    }
    items() {
      return new U(Array.from(this.value.entries()).map(([e2, t2]) => new U([
        new V(e2),
        t2
      ])));
    }
    keys() {
      return new U(Array.from(this.value.keys()).map((e2) => new V(e2)));
    }
    values() {
      return new U(Array.from(this.value.values()));
    }
    toString() {
      return ks(this, {}, 0, false);
    }
  }, js = class extends As {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `KeywordArgumentsValue`);
    }
  }, Ms = class extends Es {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `NamespaceValue`);
    }
    toString() {
      return ks(this, {}, 0, false);
    }
  }, U = class extends Es {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `ArrayValue`);
      __publicField(this, "_builtins");
    }
    get builtins() {
      return this._builtins ?? (this._builtins = /* @__PURE__ */ new Map([
        [
          `length`,
          new z(this.value.length)
        ]
      ]));
    }
    __bool__() {
      return new H(this.value.length > 0);
    }
    toString() {
      return ks(this, {}, 0, false);
    }
  }, Ns = class extends U {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `TupleValue`);
    }
  }, Ps = class extends Es {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `FunctionValue`);
    }
  }, Fs = class extends Es {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `NullValue`);
    }
  }, Is = class extends Es {
    constructor() {
      super(...arguments);
      __publicField(this, "type", `UndefinedValue`);
    }
  };
  function Ls(e2) {
    let t2;
    if (e2 instanceof U ? t2 = e2.value : e2 instanceof V && (t2 = Array.from(e2.value, (e3) => new V(e3))), !t2 || t2.length !== 2) throw Error(`namespace expected an object or an iterable of [key, value] pairs`);
    let [n2, r2] = t2;
    if (!(n2 instanceof V)) throw Error(`namespace keys must be strings`);
    return [
      n2,
      r2
    ];
  }
  var Rs = class {
    constructor(e2) {
      __publicField(this, "variables", /* @__PURE__ */ new Map([
        [
          `namespace`,
          new Ps((e2) => {
            let t2 = e2.slice(), n2;
            if (t2.at(-1) instanceof js && (n2 = t2.pop()), t2.length > 1) throw Error(`namespace expected at most 1 argument, got ${t2.length}`);
            let r2 = /* @__PURE__ */ new Map();
            if (t2.length === 1) {
              let e3 = t2[0];
              if (e3 instanceof As) for (let [t3, n3] of e3.value) r2.set(t3, n3);
              else if (e3 instanceof U) for (let t3 of e3.value) {
                let [e4, n3] = Ls(t3);
                r2.set(e4.value, n3);
              }
              else throw Error(`'${e3.type}' object is not iterable`);
            }
            if (n2) for (let [e3, t3] of n2.value) r2.set(e3, t3);
            return new Ms(r2);
          })
        ]
      ]));
      __publicField(this, "tests", Rs.TESTS);
      this.parent = e2;
    }
    set(e2, t2) {
      return this.declareVariable(e2, Xs(t2));
    }
    declareVariable(e2, t2) {
      if (this.variables.has(e2)) throw SyntaxError(`Variable already declared: ${e2}`);
      return this.variables.set(e2, t2), t2;
    }
    setVariable(e2, t2) {
      return this.variables.set(e2, t2), t2;
    }
    resolve(e2) {
      if (this.variables.has(e2)) return this;
      if (this.parent) return this.parent.resolve(e2);
      throw Error(`Unknown variable: ${e2}`);
    }
    lookupVariable(e2) {
      try {
        return this.resolve(e2).variables.get(e2) ?? new Is();
      } catch {
        return new Is();
      }
    }
  }, zs = Rs;
  Oo(zs, `TESTS`, /* @__PURE__ */ new Map([
    [
      `boolean`,
      (e2) => e2.type === `BooleanValue`
    ],
    [
      `callable`,
      (e2) => e2 instanceof Ps
    ],
    [
      `odd`,
      (e2) => {
        if (!(e2 instanceof z)) throw Error(`cannot odd on ${e2.type}`);
        return e2.value % 2 != 0;
      }
    ],
    [
      `even`,
      (e2) => {
        if (!(e2 instanceof z)) throw Error(`cannot even on ${e2.type}`);
        return e2.value % 2 == 0;
      }
    ],
    [
      `false`,
      (e2) => e2.type === `BooleanValue` && !e2.value
    ],
    [
      `true`,
      (e2) => e2.type === `BooleanValue` && e2.value
    ],
    [
      `none`,
      (e2) => e2.type === `NullValue`
    ],
    [
      `string`,
      (e2) => e2.type === `StringValue`
    ],
    [
      `number`,
      (e2) => e2 instanceof z || e2 instanceof B
    ],
    [
      `integer`,
      (e2) => e2 instanceof z
    ],
    [
      `iterable`,
      (e2) => e2.type === `ArrayValue` || e2.type === `StringValue`
    ],
    [
      `mapping`,
      (e2) => e2 instanceof As
    ],
    [
      `sequence`,
      (e2) => e2 instanceof U || e2 instanceof As || e2 instanceof V
    ],
    [
      `lower`,
      (e2) => {
        let t2 = e2.value;
        return e2.type === `StringValue` && t2 === t2.toLowerCase();
      }
    ],
    [
      `upper`,
      (e2) => {
        let t2 = e2.value;
        return e2.type === `StringValue` && t2 === t2.toUpperCase();
      }
    ],
    [
      `none`,
      (e2) => e2.type === `NullValue`
    ],
    [
      `defined`,
      (e2) => e2.type !== `UndefinedValue`
    ],
    [
      `undefined`,
      (e2) => e2.type === `UndefinedValue`
    ],
    [
      `equalto`,
      (e2, t2) => e2.value === t2.value
    ],
    [
      `eq`,
      (e2, t2) => e2.value === t2.value
    ]
  ]));
  function Bs(e2) {
    e2.set(`false`, false), e2.set(`true`, true), e2.set(`none`, null), e2.set(`raise_exception`, (e3) => {
      throw Error(e3);
    }), e2.set(`range`, gs), e2.set(`strftime_now`, ys), e2.set(`True`, true), e2.set(`False`, false), e2.set(`None`, null);
  }
  function Vs(e2) {
    return e2 instanceof As || e2 instanceof Ms;
  }
  function Hs(e2) {
    return e2 instanceof z || e2 instanceof B || e2 instanceof H;
  }
  function Us(e2) {
    return e2 instanceof H ? Number(e2.value) : e2.value;
  }
  function Ws(e2, t2) {
    let n2 = t2.split(`.`), r2 = e2;
    for (let e3 of n2) if (Vs(r2)) r2 = r2.value.get(e3) ?? new Is();
    else if (r2 instanceof U) {
      let t3 = parseInt(e3, 10);
      if (!isNaN(t3) && t3 >= 0 && t3 < r2.value.length) r2 = r2.value[t3];
      else return new Is();
    } else return new Is();
    return r2;
  }
  function Gs(e2, t2, n2 = false) {
    if (e2 instanceof Fs && t2 instanceof Fs) return 0;
    if (e2 instanceof Fs || t2 instanceof Fs) throw Error(`Cannot compare ${e2.type} with ${t2.type}`);
    if (e2 instanceof Is && t2 instanceof Is) return 0;
    if (e2 instanceof Is || t2 instanceof Is) throw Error(`Cannot compare ${e2.type} with ${t2.type}`);
    if (Hs(e2) && Hs(t2)) {
      let n3 = Us(e2), r2 = Us(t2);
      return n3 < r2 ? -1 : +(n3 > r2);
    }
    if (e2.type !== t2.type) throw Error(`Cannot compare different types: ${e2.type} and ${t2.type}`);
    switch (e2.type) {
      case `StringValue`: {
        let r2 = e2.value, i2 = t2.value;
        return n2 || (r2 = r2.toLowerCase(), i2 = i2.toLowerCase()), r2 < i2 ? -1 : +(r2 > i2);
      }
      default:
        throw Error(`Cannot compare type: ${e2.type}`);
    }
  }
  function Ks(e2) {
    if (e2.type === `Identifier`) return {
      name: e2.value
    };
    let t2 = e2;
    return {
      name: t2.key.value,
      defaultValue: t2.value
    };
  }
  function qs(e2) {
    return e2 === `kwargs` || e2 === `varargs`;
  }
  function Js(e2, t2) {
    let n2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set(), i2 = (e3) => {
      qs(e3) && n2.add(e3);
    }, a2 = (e3) => {
      if (e3.type === `Identifier`) i2(e3.value);
      else if (e3.type === `TupleLiteral`) for (let t3 of e3.value) a2(t3);
    }, o2 = (e3) => {
      i2(Ks(e3).name);
    }, s2 = (e3) => {
      for (let t3 of e3) {
        let e4 = Ks(t3);
        e4.defaultValue && l2(e4.defaultValue);
      }
    }, c2 = (e3) => {
      e3.type === `CallExpression` && l2(e3.args);
    }, l2 = (e3) => {
      if (Array.isArray(e3)) for (let t3 of e3) l2(t3);
      else if (e3 instanceof Map) for (let [t3, n3] of e3) l2(t3), l2(n3);
      else if (e3 instanceof Lo) switch (e3.type) {
        case `For`: {
          let t3 = e3;
          if (a2(t3.loopvar), t3.iterable.type === `SelectExpression`) {
            let e4 = t3.iterable;
            l2(e4.lhs), l2(t3.body), l2(t3.defaultBlock), l2(e4.test);
            return;
          }
          l2(t3.iterable), l2(t3.body), l2(t3.defaultBlock);
          return;
        }
        case `Set`: {
          let t3 = e3;
          a2(t3.assignee), l2(t3.value), l2(t3.body);
          return;
        }
        case `Macro`: {
          let t3 = e3;
          for (let e4 of t3.args) o2(e4);
          s2(t3.args), l2(t3.body);
          return;
        }
        case `CallStatement`: {
          let t3 = e3;
          l2(t3.call);
          for (let e4 of t3.callerArgs ?? []) o2(e4);
          s2(t3.callerArgs ?? []), l2(t3.body);
          return;
        }
        case `FilterStatement`: {
          let t3 = e3;
          l2(t3.body), c2(t3.filter);
          return;
        }
        case `Identifier`: {
          let t3 = e3.value;
          qs(t3) && !n2.has(t3) && r2.add(t3);
          return;
        }
        case `MemberExpression`: {
          let t3 = e3;
          l2(t3.object), t3.computed && l2(t3.property);
          return;
        }
        case `FilterExpression`: {
          let t3 = e3;
          l2(t3.operand), c2(t3.filter);
          return;
        }
        case `TestExpression`:
          l2(e3.operand);
          return;
        case `SelectExpression`: {
          let t3 = e3;
          l2(t3.test), l2(t3.lhs);
          return;
        }
        case `KeywordArgumentExpression`:
          l2(e3.value);
          return;
        default:
          for (let t3 of Object.values(e3)) l2(t3);
      }
    };
    for (let t3 of e2) o2(t3);
    return l2(t2), r2;
  }
  var Ys = class {
    constructor(e2) {
      __publicField(this, "global");
      this.global = e2 ?? new zs();
    }
    run(e2) {
      return this.evaluate(e2, this.global);
    }
    evaluateBinaryExpression(e2, t2) {
      let n2 = this.evaluate(e2.left, t2);
      switch (e2.operator.value) {
        case `and`:
          return n2.__bool__().value ? this.evaluate(e2.right, t2) : n2;
        case `or`:
          return n2.__bool__().value ? n2 : this.evaluate(e2.right, t2);
      }
      let r2 = this.evaluate(e2.right, t2);
      switch (e2.operator.value) {
        case `==`:
          return new H(n2.value == r2.value);
        case `!=`:
          return new H(n2.value != r2.value);
      }
      if (n2 instanceof Is || r2 instanceof Is) {
        if (r2 instanceof Is && [
          `in`,
          `not in`
        ].includes(e2.operator.value)) return new H(e2.operator.value === `not in`);
        throw Error(`Cannot perform operation ${e2.operator.value} on undefined values`);
      }
      if (n2 instanceof Fs || r2 instanceof Fs) throw Error(`Cannot perform operation on null values`);
      if (e2.operator.value === `~`) return new V(n2.value.toString() + r2.value.toString());
      if (e2.operator.value === `**` && Hs(n2) && Hs(r2)) {
        let e3 = Us(n2), t3 = Us(r2);
        if (e3 === 0 && t3 < 0) throw Error(`0.0 cannot be raised to a negative power`);
        let i2 = e3 ** t3;
        if (!Number.isFinite(i2)) throw Error(`Exponentiation result is not a finite real number`);
        return n2 instanceof B || r2 instanceof B || t3 < 0 ? new B(i2) : new z(i2);
      }
      if ((n2 instanceof z || n2 instanceof B) && (r2 instanceof z || r2 instanceof B)) {
        let t3 = n2.value, i2 = r2.value;
        switch (e2.operator.value) {
          case `+`:
          case `-`:
          case `*`: {
            let a2 = e2.operator.value === `+` ? t3 + i2 : e2.operator.value === `-` ? t3 - i2 : t3 * i2;
            return n2 instanceof B || r2 instanceof B ? new B(a2) : new z(a2);
          }
          case `/`:
            return new B(t3 / i2);
          case `//`: {
            let e3 = Math.floor(t3 / i2);
            return n2 instanceof B || r2 instanceof B ? new B(e3) : new z(e3);
          }
          case `%`: {
            let e3 = t3 % i2;
            return n2 instanceof B || r2 instanceof B ? new B(e3) : new z(e3);
          }
          case `<`:
            return new H(t3 < i2);
          case `>`:
            return new H(t3 > i2);
          case `>=`:
            return new H(t3 >= i2);
          case `<=`:
            return new H(t3 <= i2);
        }
      } else if (n2 instanceof U && r2 instanceof U) switch (e2.operator.value) {
        case `+`:
          return new U(n2.value.concat(r2.value));
      }
      else if (r2 instanceof U) {
        let t3 = r2.value.find((e3) => e3.value === n2.value) !== void 0;
        switch (e2.operator.value) {
          case `in`:
            return new H(t3);
          case `not in`:
            return new H(!t3);
        }
      }
      if (n2 instanceof V || r2 instanceof V) switch (e2.operator.value) {
        case `+`:
          return new V(n2.value.toString() + r2.value.toString());
      }
      if (n2 instanceof V && r2 instanceof V) switch (e2.operator.value) {
        case `in`:
          return new H(r2.value.includes(n2.value));
        case `not in`:
          return new H(!r2.value.includes(n2.value));
      }
      if (n2 instanceof V && r2 instanceof As) switch (e2.operator.value) {
        case `in`:
          return new H(r2.value.has(n2.value));
        case `not in`:
          return new H(!r2.value.has(n2.value));
      }
      throw SyntaxError(`Unknown operator "${e2.operator.value}" between ${n2.type} and ${r2.type}`);
    }
    evaluateArguments(e2, t2) {
      let n2 = [], r2 = /* @__PURE__ */ new Map(), i2 = (e3, t3) => {
        if (r2.has(e3)) throw Error(`Got multiple values for keyword argument '${e3}'`);
        r2.set(e3, t3);
      };
      for (let r3 of e2) if (r3.type === `SpreadExpression`) {
        let e3 = r3, i3 = this.evaluate(e3.argument, t2);
        if (!(i3 instanceof U)) throw Error(`Cannot unpack non-iterable type: ${i3.type}`);
        for (let e4 of i3.value) n2.push(e4);
      } else r3.type !== `KeywordArgumentExpression` && r3.type !== `KeywordSpreadExpression` && n2.push(this.evaluate(r3, t2));
      for (let n3 of e2) if (n3.type === `KeywordArgumentExpression`) {
        let e3 = n3;
        i2(e3.key.value, this.evaluate(e3.value, t2));
      } else if (n3.type === `KeywordSpreadExpression`) {
        let e3 = n3, r3 = this.evaluate(e3.argument, t2);
        if (!(r3 instanceof As)) throw Error(`Argument after ** must be a mapping, not ${r3.type}`);
        for (let [e4, t3] of r3.value) i2(e4, t3);
      }
      return [
        n2,
        r2
      ];
    }
    applyFilter(e2, t2, n2) {
      if (t2.type === `Identifier`) {
        let r2 = t2;
        if (r2.value === `safe`) return e2;
        if (r2.value === `tojson`) return new V(ks(e2, {}));
        if (e2 instanceof U) switch (r2.value) {
          case `list`:
            return e2;
          case `first`:
            return e2.value[0];
          case `last`:
            return e2.value[e2.value.length - 1];
          case `length`:
            return new z(e2.value.length);
          case `reverse`:
            return new U(e2.value.slice().reverse());
          case `sort`:
            return new U(e2.value.slice().sort((e3, t3) => Gs(e3, t3, false)));
          case `join`:
            return new V(e2.value.map((e3) => e3.value).join(``));
          case `string`:
            return new V(ks(e2, {}, 0, false));
          case `unique`: {
            let t3 = /* @__PURE__ */ new Set(), n3 = [];
            for (let r3 of e2.value) t3.has(r3.value) || (t3.add(r3.value), n3.push(r3));
            return new U(n3);
          }
          default:
            throw Error(`Unknown ArrayValue filter: ${r2.value}`);
        }
        else if (e2 instanceof V) switch (r2.value) {
          case `length`:
          case `upper`:
          case `lower`:
          case `title`:
          case `capitalize`: {
            let t3 = e2.builtins.get(r2.value);
            if (t3 instanceof Ps) return t3.value([], n2);
            if (t3 instanceof z) return t3;
            throw Error(`Unknown StringValue filter: ${r2.value}`);
          }
          case `trim`:
            return new V(e2.value.trim());
          case `indent`:
            return new V(e2.value.split(`
`).map((e3, t3) => t3 === 0 || e3.length === 0 ? e3 : `    ` + e3).join(`
`));
          case `join`:
          case `string`:
            return e2;
          case `int`: {
            let t3 = parseInt(e2.value, 10);
            return new z(isNaN(t3) ? 0 : t3);
          }
          case `float`: {
            let t3 = parseFloat(e2.value);
            return new B(isNaN(t3) ? 0 : t3);
          }
          default:
            throw Error(`Unknown StringValue filter: ${r2.value}`);
        }
        else if (e2 instanceof z || e2 instanceof B) switch (r2.value) {
          case `abs`:
            return e2 instanceof z ? new z(Math.abs(e2.value)) : new B(Math.abs(e2.value));
          case `int`:
            return new z(Math.floor(e2.value));
          case `float`:
            return new B(e2.value);
          case `string`:
            return new V(e2.toString());
          default:
            throw Error(`Unknown NumericValue filter: ${r2.value}`);
        }
        else if (e2 instanceof As) switch (r2.value) {
          case `items`:
            return new U(Array.from(e2.value.entries()).map(([e3, t3]) => new U([
              new V(e3),
              t3
            ])));
          case `length`:
            return new z(e2.value.size);
          default: {
            let t3 = e2.builtins.get(r2.value);
            if (t3) return t3 instanceof Ps ? t3.value([], n2) : t3;
            throw Error(`Unknown ObjectValue filter: ${r2.value}`);
          }
        }
        else if (e2 instanceof H) switch (r2.value) {
          case `bool`:
            return new H(e2.value);
          case `int`:
            return new z(+!!e2.value);
          case `float`:
            return new B(+!!e2.value);
          case `string`:
            return new V(e2.value ? `true` : `false`);
          default:
            throw Error(`Unknown BooleanValue filter: ${r2.value}`);
        }
        throw Error(`Cannot apply filter "${r2.value}" to type: ${e2.type}`);
      }
      if (t2.type === `CallExpression`) {
        let r2 = t2;
        if (r2.callee.type !== `Identifier`) throw Error(`Unknown filter: ${r2.callee.type}`);
        let i2 = r2.callee.value;
        if (i2 === `tojson`) {
          let [, t3] = this.evaluateArguments(r2.args, n2), i3 = t3.get(`indent`) ?? new Fs();
          if (!(i3 instanceof z || i3 instanceof Fs)) throw Error(`If set, indent must be a number`);
          let a2 = t3.get(`ensure_ascii`) ?? new H(false);
          if (!(a2 instanceof H)) throw Error(`If set, ensure_ascii must be a boolean`);
          let o2 = t3.get(`sort_keys`) ?? new H(false);
          if (!(o2 instanceof H)) throw Error(`If set, sort_keys must be a boolean`);
          let s2 = t3.get(`separators`) ?? new Fs(), c2 = null;
          if (s2 instanceof U || s2 instanceof Ns) {
            if (s2.value.length !== 2) throw Error(`separators must be a tuple of two strings`);
            let [e3, t4] = s2.value;
            if (!(e3 instanceof V) || !(t4 instanceof V)) throw Error(`separators must be a tuple of two strings`);
            c2 = [
              e3.value,
              t4.value
            ];
          } else if (!(s2 instanceof Fs)) throw Error(`If set, separators must be a tuple of two strings`);
          return new V(ks(e2, {
            indent: i3.value,
            ensureAscii: a2.value,
            sortKeys: o2.value,
            separators: c2
          }));
        }
        if (i2 === `join`) {
          let t3;
          if (e2 instanceof V) t3 = Array.from(e2.value);
          else if (e2 instanceof U) t3 = e2.value.map((e3) => e3.value);
          else throw Error(`Cannot apply filter "${i2}" to type: ${e2.type}`);
          let [a2, o2] = this.evaluateArguments(r2.args, n2), s2 = a2.at(0) ?? o2.get(`separator`) ?? new V(``);
          if (!(s2 instanceof V)) throw Error(`separator must be a string`);
          return new V(t3.join(s2.value));
        }
        if (i2 === `int` || i2 === `float`) {
          let [t3, a2] = this.evaluateArguments(r2.args, n2), o2 = t3.at(0) ?? a2.get(`default`) ?? (i2 === `int` ? new z(0) : new B(0));
          if (e2 instanceof V) {
            let t4 = i2 === `int` ? parseInt(e2.value, 10) : parseFloat(e2.value);
            return isNaN(t4) ? o2 : i2 === `int` ? new z(t4) : new B(t4);
          }
          if (e2 instanceof z || e2 instanceof B) return e2;
          if (e2 instanceof H) return i2 === `int` ? new z(+!!e2.value) : new B(+!!e2.value);
          throw Error(`Cannot apply filter "${i2}" to type: ${e2.type}`);
        }
        if (i2 === "default") {
          let [t3, i3] = this.evaluateArguments(r2.args, n2), a2 = t3[0] ?? new V(``), o2 = t3[1] ?? i3.get(`boolean`) ?? new H(false);
          if (!(o2 instanceof H)) throw Error("`default` filter flag must be a boolean");
          return e2 instanceof Is || o2.value && !e2.__bool__().value ? a2 : e2;
        }
        if (e2 instanceof U) {
          switch (i2) {
            case `sort`: {
              let [t3, i3] = this.evaluateArguments(r2.args, n2), a2 = t3.at(0) ?? i3.get(`reverse`) ?? new H(false);
              if (!(a2 instanceof H)) throw Error(`reverse must be a boolean`);
              let o2 = t3.at(1) ?? i3.get(`case_sensitive`) ?? new H(false);
              if (!(o2 instanceof H)) throw Error(`case_sensitive must be a boolean`);
              let s2 = t3.at(2) ?? i3.get(`attribute`) ?? new Fs();
              if (!(s2 instanceof V || s2 instanceof z || s2 instanceof Fs)) throw Error(`attribute must be a string, integer, or null`);
              let c2 = (e3) => s2 instanceof Fs ? e3 : Ws(e3, s2 instanceof z ? String(s2.value) : s2.value);
              return new U(e2.value.slice().sort((e3, t4) => {
                let n3 = Gs(c2(e3), c2(t4), o2.value);
                return a2.value ? -n3 : n3;
              }));
            }
            case `selectattr`:
            case `rejectattr`: {
              let t3 = i2 === `selectattr`;
              if (e2.value.some((e3) => !Vs(e3))) throw Error(`\`${i2}\` can only be applied to array of objects`);
              if (r2.args.some((e3) => e3.type !== `StringLiteral`)) throw Error(`arguments of \`${i2}\` must be strings`);
              let [a2, o2, s2] = r2.args.map((e3) => this.evaluate(e3, n2)), c2;
              if (o2) {
                let e3 = n2.tests.get(o2.value);
                if (!e3) throw Error(`Unknown test: ${o2.value}`);
                c2 = e3;
              } else c2 = (...e3) => e3[0].__bool__().value;
              return new U(e2.value.filter((e3) => {
                let n3 = e3.value.get(a2.value), r3 = n3 ? c2(n3, s2) : false;
                return t3 ? r3 : !r3;
              }));
            }
            case `map`: {
              let [, t3] = this.evaluateArguments(r2.args, n2);
              if (t3.has(`attribute`)) {
                let n3 = t3.get(`attribute`);
                if (!(n3 instanceof V)) throw Error(`attribute must be a string`);
                let r3 = t3.get(`default`);
                return new U(e2.value.map((e3) => {
                  if (!Vs(e3)) throw Error(`items in map must be an object`);
                  let t4 = Ws(e3, n3.value);
                  return t4 instanceof Is ? r3 ?? new Is() : t4;
                }));
              }
              throw Error("`map` expressions without `attribute` set are not currently supported.");
            }
          }
          throw Error(`Unknown ArrayValue filter: ${i2}`);
        }
        if (e2 instanceof V) {
          switch (i2) {
            case `indent`: {
              let [t3, i3] = this.evaluateArguments(r2.args, n2), a2 = t3.at(0) ?? i3.get(`width`) ?? new z(4);
              if (!(a2 instanceof z)) throw Error(`width must be a number`);
              let o2 = t3.at(1) ?? i3.get(`first`) ?? new H(false), s2 = t3.at(2) ?? i3.get(`blank`) ?? new H(false), c2 = e2.value.split(`
`), l2 = ` `.repeat(a2.value);
              return new V(c2.map((e3, t4) => !o2.value && t4 === 0 || !s2.value && e3.length === 0 ? e3 : l2 + e3).join(`
`));
            }
            case `replace`: {
              let t3 = e2.builtins.get(`replace`);
              if (!(t3 instanceof Ps)) throw Error(`replace filter not available`);
              let [i3, a2] = this.evaluateArguments(r2.args, n2);
              return t3.value([
                ...i3,
                new js(a2)
              ], n2);
            }
          }
          throw Error(`Unknown StringValue filter: ${i2}`);
        }
        if (e2 instanceof As) {
          let t3 = e2.builtins.get(i2);
          if (t3 && t3 instanceof Ps) {
            let [e3, i3] = this.evaluateArguments(r2.args, n2);
            return i3.size > 0 && e3.push(new js(i3)), t3.value(e3, n2);
          }
          throw Error(`Unknown ObjectValue filter: ${i2}`);
        }
        throw Error(`Cannot apply filter "${i2}" to type: ${e2.type}`);
      }
      throw Error(`Unknown filter: ${t2.type}`);
    }
    evaluateFilterExpression(e2, t2) {
      let n2 = this.evaluate(e2.operand, t2);
      return this.applyFilter(n2, e2.filter, t2);
    }
    evaluateTestExpression(e2, t2) {
      let n2 = this.evaluate(e2.operand, t2), r2 = t2.tests.get(e2.test.value);
      if (!r2) throw Error(`Unknown test: ${e2.test.value}`);
      let i2 = r2(n2);
      return new H(e2.negate ? !i2 : i2);
    }
    evaluateSelectExpression(e2, t2) {
      return this.evaluate(e2.test, t2).__bool__().value ? this.evaluate(e2.lhs, t2) : new Is();
    }
    evaluateUnaryExpression(e2, t2) {
      let n2 = this.evaluate(e2.argument, t2);
      switch (e2.operator.value) {
        case `not`:
          return new H(!n2.value);
        case `+`:
        case `-`: {
          let t3 = e2.operator.value === `-` ? -1 : 1;
          if (n2 instanceof z || n2 instanceof B || n2 instanceof H) {
            let e3 = t3 * (n2 instanceof H ? +!!n2.value : n2.value);
            return n2 instanceof B ? new B(e3) : new z(e3);
          }
          throw SyntaxError(`Unknown operator "${e2.operator.value}" for ${n2.type}`);
        }
        default:
          throw SyntaxError(`Unknown operator: ${e2.operator.value}`);
      }
    }
    evaluateTernaryExpression(e2, t2) {
      return this.evaluate(e2.condition, t2).__bool__().value ? this.evaluate(e2.trueExpr, t2) : this.evaluate(e2.falseExpr, t2);
    }
    evalProgram(e2, t2) {
      return this.evaluateBlock(e2.body, t2);
    }
    evaluateBlock(e2, t2) {
      let n2 = ``;
      for (let r2 of e2) {
        let e3 = this.evaluate(r2, t2);
        e3.type !== `NullValue` && e3.type !== `UndefinedValue` && (n2 += e3.toString());
      }
      return new V(n2);
    }
    evaluateIdentifier(e2, t2) {
      return t2.lookupVariable(e2.value);
    }
    evaluateCallExpression(e2, t2) {
      let [n2, r2] = this.evaluateArguments(e2.args, t2);
      r2.size > 0 && n2.push(new js(r2));
      let i2 = this.evaluate(e2.callee, t2);
      if (i2.type !== `FunctionValue`) throw Error(`Cannot call something that is not a function: got ${i2.type}`);
      return i2.value(n2, t2);
    }
    evaluateSliceExpression(e2, t2, n2) {
      if (!(e2 instanceof U || e2 instanceof V)) throw Error(`Slice object must be an array or string`);
      let r2 = this.evaluate(t2.start, n2), i2 = this.evaluate(t2.stop, n2), a2 = this.evaluate(t2.step, n2);
      if (!(r2 instanceof z || r2 instanceof Is)) throw Error(`Slice start must be numeric or undefined`);
      if (!(i2 instanceof z || i2 instanceof Is)) throw Error(`Slice stop must be numeric or undefined`);
      if (!(a2 instanceof z || a2 instanceof Is)) throw Error(`Slice step must be numeric or undefined`);
      return e2 instanceof U ? new U(_s(e2.value, r2.value, i2.value, a2.value)) : new V(_s(Array.from(e2.value), r2.value, i2.value, a2.value).join(``));
    }
    evaluateMemberExpression(e2, t2) {
      let n2 = this.evaluate(e2.object, t2), r2;
      if (e2.computed) {
        if (e2.property.type === `SliceExpression`) return this.evaluateSliceExpression(n2, e2.property, t2);
        r2 = this.evaluate(e2.property, t2);
      } else r2 = e2.property.type === `IntegerLiteral` ? new z(e2.property.value) : new V(e2.property.value);
      let i2;
      if (Vs(n2)) {
        if (!(r2 instanceof V)) throw Error(`Cannot access property with non-string: got ${r2.type}`);
        i2 = n2.value.get(r2.value) ?? (n2 instanceof As ? n2.builtins.get(r2.value) : void 0);
      } else if (n2 instanceof U || n2 instanceof V) {
        if (r2 instanceof z) i2 = n2.value.at(r2.value), n2 instanceof V && (i2 = new V(n2.value.at(r2.value)));
        else if (r2 instanceof V) i2 = n2.builtins.get(r2.value);
        else throw Error(`Cannot access property with non-string/non-number: got ${r2.type}`);
      } else {
        if (!(r2 instanceof V)) throw Error(`Cannot access property with non-string: got ${r2.type}`);
        i2 = n2.builtins.get(r2.value);
      }
      return i2 instanceof Es ? i2 : new Is();
    }
    evaluateSet(e2, t2) {
      let n2 = e2.value ? this.evaluate(e2.value, t2) : this.evaluateBlock(e2.body, t2);
      if (e2.assignee.type === `Identifier`) {
        let r2 = e2.assignee.value;
        t2.setVariable(r2, n2);
      } else if (e2.assignee.type === `TupleLiteral`) {
        let r2 = e2.assignee;
        if (!(n2 instanceof U)) throw Error(`Cannot unpack non-iterable type in set: ${n2.type}`);
        let i2 = n2.value;
        if (i2.length !== r2.value.length) throw Error(`Too ${r2.value.length > i2.length ? `few` : `many`} items to unpack in set`);
        for (let e3 = 0; e3 < r2.value.length; ++e3) {
          let n3 = r2.value[e3];
          if (n3.type !== `Identifier`) throw Error(`Cannot unpack to non-identifier in set: ${n3.type}`);
          t2.setVariable(n3.value, i2[e3]);
        }
      } else if (e2.assignee.type === `MemberExpression`) {
        let r2 = e2.assignee, i2 = this.evaluate(r2.object, t2);
        if (!(i2 instanceof Ms)) throw Error(`cannot assign attribute on non-namespace object`);
        if (r2.property.type !== `Identifier`) throw Error(`Cannot assign to member with non-identifier property`);
        i2.value.set(r2.property.value, n2);
      } else throw Error(`Invalid LHS inside assignment expression: ${JSON.stringify(e2.assignee)}`);
      return new Fs();
    }
    evaluateIf(e2, t2) {
      let n2 = this.evaluate(e2.test, t2);
      return this.evaluateBlock(n2.__bool__().value ? e2.body : e2.alternate, t2);
    }
    evaluateFor(e2, t2) {
      let n2 = new zs(t2), r2, i2;
      if (e2.iterable.type === `SelectExpression`) {
        let t3 = e2.iterable;
        i2 = this.evaluate(t3.lhs, n2), r2 = t3.test;
      } else i2 = this.evaluate(e2.iterable, n2);
      if (!(i2 instanceof U || i2 instanceof As)) throw Error(`Expected iterable or object type in for loop: got ${i2.type}`);
      i2 instanceof As && (i2 = i2.keys());
      let a2 = [], o2 = [];
      for (let t3 = 0; t3 < i2.value.length; ++t3) {
        let s3 = new zs(n2), c3 = i2.value[t3], l2;
        if (e2.loopvar.type === `Identifier`) l2 = (t4) => t4.setVariable(e2.loopvar.value, c3);
        else if (e2.loopvar.type === `TupleLiteral`) {
          let t4 = e2.loopvar;
          if (c3.type !== `ArrayValue`) throw Error(`Cannot unpack non-iterable type: ${c3.type}`);
          let n3 = c3;
          if (t4.value.length !== n3.value.length) throw Error(`Too ${t4.value.length > n3.value.length ? `few` : `many`} items to unpack`);
          l2 = (e3) => {
            for (let r3 = 0; r3 < t4.value.length; ++r3) {
              if (t4.value[r3].type !== `Identifier`) throw Error(`Cannot unpack non-identifier type: ${t4.value[r3].type}`);
              e3.setVariable(t4.value[r3].value, n3.value[r3]);
            }
          };
        } else throw Error(`Invalid loop variable(s): ${e2.loopvar.type}`);
        r2 && (l2(s3), !this.evaluate(r2, s3).__bool__().value) || (a2.push(c3), o2.push(l2));
      }
      let s2 = ``, c2 = true;
      for (let t3 = 0; t3 < a2.length; ++t3) {
        let r3 = /* @__PURE__ */ new Map([
          [
            `index`,
            new z(t3 + 1)
          ],
          [
            `index0`,
            new z(t3)
          ],
          [
            `revindex`,
            new z(a2.length - t3)
          ],
          [
            `revindex0`,
            new z(a2.length - t3 - 1)
          ],
          [
            `first`,
            new H(t3 === 0)
          ],
          [
            `last`,
            new H(t3 === a2.length - 1)
          ],
          [
            `length`,
            new z(a2.length)
          ],
          [
            `previtem`,
            t3 > 0 ? a2[t3 - 1] : new Is()
          ],
          [
            `nextitem`,
            t3 < a2.length - 1 ? a2[t3 + 1] : new Is()
          ]
        ]);
        n2.setVariable(`loop`, new As(r3)), o2[t3](n2);
        try {
          let t4 = this.evaluateBlock(e2.body, n2);
          s2 += t4.value;
        } catch (e3) {
          if (e3 instanceof ws) continue;
          if (e3 instanceof Cs) break;
          throw e3;
        }
        c2 = false;
      }
      if (c2) {
        let t3 = this.evaluateBlock(e2.defaultBlock, n2);
        s2 += t3.value;
      }
      return new V(s2);
    }
    bindMacroArguments(e2, t2, n2, r2, i2) {
      let a2 = r2.slice(), o2 = /* @__PURE__ */ new Map();
      a2.at(-1) instanceof js && (o2 = new Map(a2.pop().value));
      let s2 = [];
      for (let e3 = 0; e3 < t2.length; ++e3) {
        let { name: n3, defaultValue: r3 } = Ks(t2[e3]), c2 = a2[e3];
        c2 === void 0 && o2.has(n3) && (c2 = o2.get(n3), o2.delete(n3)), c2 === void 0 && r3 !== void 0 && s2.push([
          n3,
          r3
        ]), i2.setVariable(n3, c2 ?? new Is());
      }
      if (n2.has(`kwargs`)) i2.setVariable(`kwargs`, new As(o2));
      else if (o2.size > 0) throw Error(`macro ${e2} takes no keyword argument '${o2.keys().next().value}'`);
      if (n2.has(`varargs`)) i2.setVariable(`varargs`, new U(a2.slice(t2.length)));
      else if (a2.length > t2.length) throw Error(`macro ${e2} takes not more than ${t2.length} argument(s)`);
      for (let [e3, t3] of s2) i2.setVariable(e3, this.evaluate(t3, i2));
    }
    evaluateMacro(e2, t2) {
      let n2 = Js(e2.args, e2.body);
      return t2.setVariable(e2.name.value, new Ps((t3, r2) => {
        let i2 = new zs(r2);
        return this.bindMacroArguments(`'${e2.name.value}'`, e2.args, n2, t3, i2), this.evaluateBlock(e2.body, i2);
      })), new Fs();
    }
    evaluateCallStatement(e2, t2) {
      let n2 = e2.callerArgs ?? [], r2 = Js(n2, e2.body), i2 = new Ps((i3) => {
        let a3 = new zs(t2);
        return this.bindMacroArguments(`None`, n2, r2, i3, a3), this.evaluateBlock(e2.body, a3);
      }), [a2, o2] = this.evaluateArguments(e2.call.args, t2);
      a2.push(new js(o2));
      let s2 = this.evaluate(e2.call.callee, t2);
      if (s2.type !== `FunctionValue`) throw Error(`Cannot call something that is not a function: got ${s2.type}`);
      let c2 = new zs(t2);
      return c2.setVariable(`caller`, i2), s2.value(a2, c2);
    }
    evaluateFilterStatement(e2, t2) {
      let n2 = this.evaluateBlock(e2.body, t2);
      return this.applyFilter(n2, e2.filter, t2);
    }
    evaluate(e2, t2) {
      if (!e2) return new Is();
      switch (e2.type) {
        case `Program`:
          return this.evalProgram(e2, t2);
        case `Set`:
          return this.evaluateSet(e2, t2);
        case `If`:
          return this.evaluateIf(e2, t2);
        case `For`:
          return this.evaluateFor(e2, t2);
        case `Macro`:
          return this.evaluateMacro(e2, t2);
        case `CallStatement`:
          return this.evaluateCallStatement(e2, t2);
        case `Break`:
          throw new Cs();
        case `Continue`:
          throw new ws();
        case `IntegerLiteral`:
          return new z(e2.value);
        case `FloatLiteral`:
          return new B(e2.value);
        case `StringLiteral`:
          return new V(e2.value);
        case `ArrayLiteral`:
          return new U(e2.value.map((e3) => this.evaluate(e3, t2)));
        case `TupleLiteral`:
          return new Ns(e2.value.map((e3) => this.evaluate(e3, t2)));
        case `ObjectLiteral`: {
          let n2 = /* @__PURE__ */ new Map();
          for (let [r2, i2] of e2.value) {
            let e3 = this.evaluate(r2, t2);
            if (!(e3 instanceof V)) throw Error(`Object keys must be strings: got ${e3.type}`);
            n2.set(e3.value, this.evaluate(i2, t2));
          }
          return new As(n2);
        }
        case `Identifier`:
          return this.evaluateIdentifier(e2, t2);
        case `CallExpression`:
          return this.evaluateCallExpression(e2, t2);
        case `MemberExpression`:
          return this.evaluateMemberExpression(e2, t2);
        case `UnaryExpression`:
          return this.evaluateUnaryExpression(e2, t2);
        case `BinaryExpression`:
          return this.evaluateBinaryExpression(e2, t2);
        case `FilterExpression`:
          return this.evaluateFilterExpression(e2, t2);
        case `FilterStatement`:
          return this.evaluateFilterStatement(e2, t2);
        case `TestExpression`:
          return this.evaluateTestExpression(e2, t2);
        case `SelectExpression`:
          return this.evaluateSelectExpression(e2, t2);
        case `Ternary`:
          return this.evaluateTernaryExpression(e2, t2);
        case `Comment`:
          return new Fs();
        default:
          throw SyntaxError(`Unknown node type: ${e2.type}`);
      }
    }
  };
  function Xs(e2) {
    switch (typeof e2) {
      case `number`:
        return Number.isInteger(e2) ? new z(e2) : new B(e2);
      case `string`:
        return new V(e2);
      case `boolean`:
        return new H(e2);
      case `undefined`:
        return new Is();
      case `object`:
        return e2 === null ? new Fs() : Array.isArray(e2) ? new U(e2.map(Xs)) : new As(new Map(Object.entries(e2).map(([e3, t2]) => [
          e3,
          Xs(t2)
        ])));
      case `function`:
        return new Ps((t2, n2) => Xs(e2(...t2.map((e3) => e3.value)) ?? null));
      default:
        throw Error(`Cannot convert to runtime value: ${e2}`);
    }
  }
  var Zs = `
`, Qs = `{%- `, $s = ` -%}`, ec = Object.freeze({
    CONDITIONAL: 0,
    LOGICAL_OR: 1,
    LOGICAL_AND: 2,
    LOGICAL_NOT: 3,
    COMPARISON: 4,
    ADDITIVE: 5,
    MULTIPLICATIVE: 6,
    EXPONENTIATION: 7,
    TEST: 8,
    FILTER: 9,
    UNARY_SIGN: 10,
    ATOM: 11
  });
  function tc(e2) {
    switch (e2.operator.type) {
      case `ExponentiationBinaryOperator`:
        return ec.EXPONENTIATION;
      case `MultiplicativeBinaryOperator`:
        return ec.MULTIPLICATIVE;
      case `AdditiveBinaryOperator`:
        return ec.ADDITIVE;
      case `ComparisonBinaryOperator`:
        return ec.COMPARISON;
      case `Identifier`:
        return e2.operator.value === `and` ? ec.LOGICAL_AND : e2.operator.value === `in` || e2.operator.value === `not in` ? ec.COMPARISON : ec.LOGICAL_OR;
    }
    return ec.LOGICAL_OR;
  }
  function nc(e2) {
    switch (e2.type) {
      case `SelectExpression`:
      case `Ternary`:
        return ec.CONDITIONAL;
      case `BinaryExpression`:
        return tc(e2);
      case `UnaryExpression`:
        return e2.operator.value === `not` ? ec.LOGICAL_NOT : ec.UNARY_SIGN;
      case `TestExpression`:
        return ec.TEST;
      case `FilterExpression`:
        return ec.FILTER;
      default:
        return ec.ATOM;
    }
  }
  function rc(e2, t2) {
    let n2 = hc(e2);
    return nc(e2) < t2 ? `(${n2})` : n2;
  }
  function ic(e2, t2 = `	`) {
    let n2 = typeof t2 == `number` ? ` `.repeat(t2) : t2;
    return oc(e2.body, 0, n2).replace(/\n$/, ``);
  }
  function ac(...e2) {
    return Qs + e2.join(` `) + $s;
  }
  function oc(e2, t2, n2) {
    return e2.map((e3) => cc(e3, t2, n2)).join(Zs);
  }
  function sc(e2) {
    return e2.map((e3) => hc(e3)).join(`, `);
  }
  function cc(e2, t2, n2) {
    let r2 = n2.repeat(t2);
    switch (e2.type) {
      case `Program`:
        return oc(e2.body, t2, n2);
      case `If`:
        return lc(e2, t2, n2);
      case `For`:
        return uc(e2, t2, n2);
      case `Set`:
        return dc(e2, t2, n2);
      case `Macro`:
        return fc(e2, t2, n2);
      case `Break`:
        return r2 + ac(`break`);
      case `Continue`:
        return r2 + ac(`continue`);
      case `CallStatement`:
        return pc(e2, t2, n2);
      case `FilterStatement`:
        return mc(e2, t2, n2);
      case `Comment`:
        return r2 + `{# ` + e2.value + ` #}`;
      default:
        return r2 + `{{- ` + hc(e2) + ` -}}`;
    }
  }
  function lc(e2, t2, n2) {
    let r2 = n2.repeat(t2), i2 = [], a2 = e2;
    for (; a2 && (i2.push({
      test: a2.test,
      body: a2.body
    }), a2.alternate.length === 1 && a2.alternate[0].type === `If`); ) a2 = a2.alternate[0];
    let o2 = r2 + ac(`if`, hc(i2[0].test)) + Zs + oc(i2[0].body, t2 + 1, n2);
    for (let e3 = 1; e3 < i2.length; ++e3) o2 += Zs + r2 + ac(`elif`, hc(i2[e3].test)) + Zs + oc(i2[e3].body, t2 + 1, n2);
    return a2 && a2.alternate.length > 0 && (o2 += Zs + r2 + ac(`else`) + Zs + oc(a2.alternate, t2 + 1, n2)), o2 += Zs + r2 + ac(`endif`), o2;
  }
  function uc(e2, t2, n2) {
    let r2 = n2.repeat(t2), i2 = ``;
    if (e2.iterable.type === `SelectExpression`) {
      let t3 = e2.iterable;
      i2 = `${hc(t3.lhs)} if ${hc(t3.test)}`;
    } else i2 = hc(e2.iterable);
    let a2 = r2 + ac(`for`, hc(e2.loopvar), `in`, i2) + Zs + oc(e2.body, t2 + 1, n2);
    return e2.defaultBlock.length > 0 && (a2 += Zs + r2 + ac(`else`) + Zs + oc(e2.defaultBlock, t2 + 1, n2)), a2 += Zs + r2 + ac(`endfor`), a2;
  }
  function dc(e2, t2, n2) {
    let r2 = n2.repeat(t2), i2 = hc(e2.assignee), a2 = e2.value ? hc(e2.value) : ``, o2 = r2 + ac(`set`, `${i2}${e2.value ? ` = ` + a2 : ``}`);
    return e2.body.length === 0 ? o2 : o2 + Zs + oc(e2.body, t2 + 1, n2) + Zs + r2 + ac(`endset`);
  }
  function fc(e2, t2, n2) {
    let r2 = n2.repeat(t2), i2 = sc(e2.args);
    return r2 + ac(`macro`, `${e2.name.value}(${i2})`) + Zs + oc(e2.body, t2 + 1, n2) + Zs + r2 + ac(`endmacro`);
  }
  function pc(e2, t2, n2) {
    let r2 = n2.repeat(t2), i2 = e2.callerArgs && e2.callerArgs.length > 0 ? `(${sc(e2.callerArgs)})` : ``, a2 = hc(e2.call), o2 = r2 + ac(`call${i2}`, a2) + Zs;
    return o2 += oc(e2.body, t2 + 1, n2) + Zs, o2 += r2 + ac(`endcall`), o2;
  }
  function mc(e2, t2, n2) {
    let r2 = n2.repeat(t2), i2 = r2 + ac(`filter`, e2.filter.type === `Identifier` ? e2.filter.value : hc(e2.filter)) + Zs;
    return i2 += oc(e2.body, t2 + 1, n2) + Zs, i2 += r2 + ac(`endfilter`), i2;
  }
  function hc(e2) {
    switch (e2.type) {
      case `SpreadExpression`:
        return `*${hc(e2.argument)}`;
      case `KeywordSpreadExpression`:
        return `**${hc(e2.argument)}`;
      case `Identifier`:
        return e2.value;
      case `IntegerLiteral`:
        return `${e2.value}`;
      case `FloatLiteral`: {
        let t2 = e2.value;
        return Object.is(t2, -0) ? `-0.0` : t2 % 1 == 0 ? t2.toFixed(1) : t2.toString();
      }
      case `StringLiteral`:
        return JSON.stringify(e2.value);
      case `BinaryExpression`: {
        let t2 = e2, n2 = tc(t2), r2 = rc(t2.left, n2), i2 = rc(t2.right, n2 + 1);
        return `${r2} ${t2.operator.value} ${i2}`;
      }
      case `UnaryExpression`: {
        let t2 = e2, n2 = t2.argument.type === `UnaryExpression` ? nc(t2) : ec.ATOM;
        return t2.operator.value + (t2.operator.value === `not` ? ` ` : ``) + rc(t2.argument, n2);
      }
      case `CallExpression`: {
        let t2 = e2, n2 = sc(t2.args);
        return `${hc(t2.callee)}(${n2})`;
      }
      case `MemberExpression`: {
        let t2 = e2, n2 = rc(t2.object, ec.ATOM), r2 = hc(t2.property);
        return !t2.computed && t2.property.type !== `Identifier` && t2.property.type !== `IntegerLiteral` && (r2 = `(${r2})`), t2.computed ? `${n2}[${r2}]` : `${n2}.${r2}`;
      }
      case `FilterExpression`: {
        let t2 = e2, n2 = rc(t2.operand, ec.FILTER);
        return t2.filter.type === `CallExpression` ? `${n2} | ${hc(t2.filter)}` : `${n2} | ${t2.filter.value}`;
      }
      case `SelectExpression`: {
        let t2 = e2;
        return `${rc(t2.lhs, ec.LOGICAL_OR)} if ${rc(t2.test, ec.LOGICAL_OR)}`;
      }
      case `TestExpression`: {
        let t2 = e2;
        return `${rc(t2.operand, ec.TEST)} is${t2.negate ? ` not` : ``} ${t2.test.value}`;
      }
      case `ArrayLiteral`:
      case `TupleLiteral`: {
        let t2 = sc(e2.value), n2 = e2.type === `ArrayLiteral` ? `[]` : `()`;
        return `${n2[0]}${t2}${n2[1]}`;
      }
      case `ObjectLiteral`:
        return `{${Array.from(e2.value.entries()).map(([e3, t2]) => `${hc(e3)}: ${hc(t2)}`).join(`, `)}}`;
      case `SliceExpression`: {
        let t2 = e2;
        return `${t2.start ? hc(t2.start) : ``}:${t2.stop ? hc(t2.stop) : ``}${t2.step ? `:${hc(t2.step)}` : ``}`;
      }
      case `KeywordArgumentExpression`: {
        let t2 = e2;
        return `${t2.key.value}=${hc(t2.value)}`;
      }
      case `Ternary`: {
        let t2 = e2;
        return `${rc(t2.trueExpr, ec.LOGICAL_OR)} if ${rc(t2.condition, ec.LOGICAL_OR)} else ${rc(t2.falseExpr, ec.CONDITIONAL)}`;
      }
      default:
        throw Error(`Unknown expression type: ${e2.type}`);
    }
  }
  var gc = class {
    constructor(e2) {
      __publicField(this, "parsed");
      let t2 = Io(e2, {
        lstrip_blocks: true,
        trim_blocks: true
      });
      this.parsed = hs(t2);
    }
    render(e2) {
      let t2 = new zs();
      if (Bs(t2), e2) for (let [n2, r2] of Object.entries(e2)) t2.set(n2, r2);
      return new Ys(t2).run(this.parsed).value;
    }
    format(e2) {
      return ic(this.parsed, (e2 == null ? void 0 : e2.indent) || `	`);
    }
  }, _c = {
    txt: `text/plain`,
    html: `text/html`,
    css: `text/css`,
    js: `text/javascript`,
    json: `application/json`,
    png: `image/png`,
    jpg: `image/jpeg`,
    jpeg: `image/jpeg`,
    gif: `image/gif`
  }, vc = class e2 {
    constructor(e3) {
      if (this.filePath = e3, this.headers = new Headers(), this.exists = Tr.existsSync(e3), this.exists) {
        this.status = 200, this.statusText = `OK`;
        let t2 = Tr.statSync(e3);
        this.headers.set(`content-length`, t2.size.toString()), this.updateContentType();
        let n2 = Tr.createReadStream(e3);
        this.body = new ReadableStream({
          start(e4) {
            n2.on(`data`, (t3) => e4.enqueue(t3)), n2.on(`end`, () => e4.close()), n2.on(`error`, (t3) => e4.error(t3));
          },
          cancel() {
            n2.destroy();
          }
        });
      } else this.status = 404, this.statusText = `Not Found`, this.body = null;
    }
    updateContentType() {
      let e3 = this.filePath.toString().split(`.`).pop().toLowerCase();
      this.headers.set(`content-type`, _c[e3] ?? `application/octet-stream`);
    }
    clone() {
      let t2 = new e2(this.filePath);
      return t2.exists = this.exists, t2.status = this.status, t2.statusText = this.statusText, t2.headers = new Headers(this.headers), t2;
    }
    async arrayBuffer() {
      return (await Tr.promises.readFile(this.filePath)).buffer;
    }
    async blob() {
      let e3 = await Tr.promises.readFile(this.filePath);
      return new Blob([
        e3
      ], {
        type: this.headers.get(`content-type`)
      });
    }
    async text() {
      return await Tr.promises.readFile(this.filePath, `utf8`);
    }
    async json() {
      return JSON.parse(await this.text());
    }
  }, yc = class {
    constructor(e2) {
      this._mt = new Uint32Array(624), this._idx = 625, this._gauss_next = null, this._random_fn = this.random.bind(this), this.seed(e2);
    }
    seed(e2) {
      if (e2 == null) {
        if (M.IS_CRYPTO_AVAILABLE) {
          let t3 = new Uint32Array(1);
          crypto.getRandomValues(t3), e2 = t3[0];
        } else e2 = Date.now() >>> 0;
      }
      Number.isSafeInteger(e2) && (e2 = Math.abs(e2));
      let t2 = this._mt, n2 = (e3, t3) => Math.imul(e3, t3) >>> 0, r2 = [];
      for (let t3 = e2 || 0; t3 > 0; t3 = Math.floor(t3 / 4294967296)) r2.push(t3 | 0);
      r2.length || r2.push(0), t2[0] = 19650218;
      for (let e3 = 1; e3 < 624; ++e3) t2[e3] = n2(1812433253, t2[e3 - 1] ^ t2[e3 - 1] >>> 30) + e3 >>> 0;
      let i2 = 1, a2 = 0;
      for (let e3 = Math.max(624, r2.length); e3 > 0; --e3, ++i2, ++a2) i2 >= 624 && (t2[0] = t2[623], i2 = 1), a2 >= r2.length && (a2 = 0), t2[i2] = (t2[i2] ^ n2(t2[i2 - 1] ^ t2[i2 - 1] >>> 30, 1664525)) + r2[a2] + a2 >>> 0;
      for (let e3 = 623; e3 > 0; --e3, ++i2) i2 >= 624 && (t2[0] = t2[623], i2 = 1), t2[i2] = (t2[i2] ^ n2(t2[i2 - 1] ^ t2[i2 - 1] >>> 30, 1566083941)) - i2 >>> 0;
      t2[0] = 2147483648, this._idx = 624, this._gauss_next = null;
    }
    _int32() {
      let e2 = this._mt;
      if (this._idx >= 624) {
        for (let t3 = 0; t3 < 624; ++t3) {
          let n2 = e2[t3] & 2147483648 | e2[(t3 + 1) % 624] & 2147483647;
          e2[t3] = (e2[(t3 + 397) % 624] ^ n2 >>> 1 ^ (n2 & 1 ? 2567483615 : 0)) >>> 0;
        }
        this._idx = 0;
      }
      let t2 = e2[this._idx++];
      return t2 ^= t2 >>> 11, t2 ^= t2 << 7 & 2636928640, t2 ^= t2 << 15 & 4022730752, t2 ^= t2 >>> 18, t2 >>> 0;
    }
    random() {
      return ((this._int32() >>> 5) * 67108864 + (this._int32() >>> 6)) / 9007199254740992;
    }
    gauss(e2 = 0, t2 = 1) {
      let n2 = this._gauss_next;
      if (this._gauss_next = null, n2 === null) {
        let e3 = this.random() * 2 * Math.PI, t3 = Math.sqrt(-2 * Math.log(1 - this.random()));
        n2 = Math.cos(e3) * t3, this._gauss_next = Math.sin(e3) * t3;
      }
      return e2 + n2 * t2;
    }
    shuffle(e2) {
      for (let t2 = e2.length - 1; t2 > 0; --t2) {
        let n2 = 32 - Math.clz32(t2 + 1), r2 = this._int32() >>> 32 - n2;
        for (; r2 > t2; ) r2 = this._int32() >>> 32 - n2;
        let i2 = e2[t2];
        e2[t2] = e2[r2], e2[r2] = i2;
      }
    }
    choices(e2, t2) {
      return e2[bc(this._random_fn, t2)];
    }
  };
  function bc(e2, t2) {
    let n2 = 0;
    for (let e3 = 0; e3 < t2.length; ++e3) n2 += t2[e3];
    let r2 = e2() * n2;
    for (let e3 = 0; e3 < t2.length; ++e3) if (r2 -= t2[e3], r2 < 0) return e3;
    return t2.length - 1;
  }
  var xc = new yc(), Sc = Object.freeze({
    Random: yc,
    seed: xc.seed.bind(xc),
    random: xc.random.bind(xc),
    gauss: xc.gauss.bind(xc),
    shuffle: xc.shuffle.bind(xc),
    choices: xc.choices.bind(xc)
  }), Cc = (e2) => bc(Sc.random, e2), wc = new yc(), Tc = class {
    constructor(e2) {
      this.path = e2;
    }
    async match(e2) {
      let t2 = new vc(j.join(this.path, e2));
      if (t2.exists) return t2;
    }
    async put(e2, t2, n2 = void 0) {
      let r2 = j.join(this.path, e2), i2 = r2 + `.tmp.${M.IS_PROCESS_AVAILABLE ? process.pid : Date.now()}.${wc._int32().toString(36)}`;
      try {
        let e3 = t2.headers.get(`Content-Length`), a2 = parseInt(e3 ?? `0`), o2 = 0;
        await Tr.promises.mkdir(j.dirname(r2), {
          recursive: true
        });
        let s2 = Tr.createWriteStream(i2), c2 = t2.body.getReader();
        for (; ; ) {
          let { done: e4, value: t3 } = await c2.read();
          if (e4) break;
          await new Promise((e5, n3) => {
            s2.write(t3, (t4) => {
              t4 ? n3(t4) : e5();
            });
          }), o2 += t3.length;
          let r3 = a2 ? o2 / a2 * 100 : 0;
          n2 == null ? void 0 : n2({
            progress: r3,
            loaded: o2,
            total: a2
          });
        }
        await new Promise((e4, t3) => {
          s2.close((n3) => n3 ? t3(n3) : e4());
        }), await Tr.promises.rename(i2, r2);
      } catch (e3) {
        try {
          await Tr.promises.unlink(i2);
        } catch {
        }
        throw e3;
      }
    }
    async delete(e2) {
      let t2 = j.join(this.path, e2);
      try {
        return await Tr.promises.unlink(t2), true;
      } catch {
        return false;
      }
    }
  }, Ec = {
    400: `Bad request error occurred while trying to load file`,
    401: `Unauthorized access to file`,
    403: `Forbidden access to file`,
    404: `Could not locate file`,
    408: `Request timeout error occurred while trying to load file`,
    500: `Internal server error error occurred while trying to load file`,
    502: `Bad gateway error occurred while trying to load file`,
    503: `Service unavailable error occurred while trying to load file`,
    504: `Gateway timeout error occurred while trying to load file`
  }, Dc = 100, Oc = /^(\b[\w\-.]+\b\/)?\b[\w\-.]{1,96}\b$/;
  function kc(...e2) {
    return e2 = e2.map((t2, n2) => (n2 && (t2 = t2.replace(RegExp(`^/`), ``)), n2 !== e2.length - 1 && (t2 = t2.replace(RegExp(`/$`), ``)), t2)), e2.join(`/`);
  }
  function Ac(e2, t2 = null, n2 = null) {
    let r2;
    try {
      r2 = new URL(e2);
    } catch {
      return false;
    }
    return !(t2 && !t2.includes(r2.protocol) || n2 && !n2.includes(r2.hostname));
  }
  function jc(e2) {
    return !(!Oc.test(e2) || e2.includes(`..`) || e2.includes(`--`) || e2.endsWith(`.git`) || e2.endsWith(`.ipynb`));
  }
  function Mc(e2, t2 = {}, ...n2) {
    return JSON.stringify([
      e2,
      t2.revision ?? `main`,
      t2.cache_dir ?? null,
      t2.local_files_only ?? false,
      ...n2
    ]);
  }
  var Nc = class extends Error {
    constructor(e2, { status: t2 = null } = {}) {
      super(e2), this.name = `ModelFileNotFoundError`, this.status = t2;
    }
  }, Pc = /* @__PURE__ */ new Set([
    401,
    403,
    404
  ]);
  function Fc(e2, t2, n2) {
    if (!n2) return null;
    let r2 = `${Ec[e2] ?? `Error (${e2}) occurred while trying to load file`}: "${t2}".`;
    throw Pc.has(e2) ? new Nc(r2, {
      status: e2
    }) : Error(r2);
  }
  async function Ic(e2, t2, n2) {
    let r2 = e2.headers.get(`Content-Length`), i2 = r2 ? parseInt(r2, 10) : n2 ?? 0;
    r2 === null && !n2 && P.warn(`Unable to determine content-length from response headers. Will expand buffer when needed.`);
    let a2 = new Uint8Array(i2), o2 = 0, s2 = e2.body.getReader();
    async function c2() {
      let { done: e3, value: n3 } = await s2.read();
      if (e3) return;
      let r3 = o2 + n3.length;
      if (r3 > i2) {
        i2 = r3;
        let e4 = new Uint8Array(i2);
        e4.set(a2), a2 = e4;
      }
      return a2.set(n3, o2), o2 = r3, t2({
        progress: o2 / i2 * 100,
        loaded: o2,
        total: i2
      }), c2();
    }
    return await c2(), a2;
  }
  function Lc(e2) {
    return Ac(e2, [
      `blob:`
    ]);
  }
  function Rc(e2, { allowUnresolved: t2 = false } = {}) {
    let n2;
    if (typeof location < `u` && location.href) n2 = location.href;
    else if (import.meta.url) n2 = import.meta.url;
    else return e2;
    try {
      return new URL(e2, n2).href;
    } catch (n3) {
      if (!t2) throw n3;
      return e2;
    }
  }
  var zc = `SHA-256`, Bc = `experimental_transformers-hash-cache`, Vc = (e2) => ({
    algorithm: zc,
    value: e2
  }), Hc = (_c2 = class {
    constructor() {
      __privateAdd(this, _e2, null);
      __publicField(this, "_getHashCache", () => (__privateGet(this, _e2) ?? __privateSet(this, _e2, caches.open(Bc)), __privateGet(this, _e2)));
      __publicField(this, "match", async (e2) => {
        let t2 = await this._getFileHash(e2);
        if (t2) try {
          let e3 = await (await navigator.crossOriginStorage.requestFileHandle(Vc(t2))).getFile();
          return new Response(e3, {
            headers: {
              "Content-Length": String(e3.size)
            }
          });
        } catch {
          return;
        }
      });
      __publicField(this, "put", async (e2, t2) => {
        let n2 = await this._getFileHash(e2);
        if (n2) {
          let e3 = await t2.blob();
          await this._storeBlobInCOS(e3, n2);
        } else this._processAndStore(e2, t2.body);
      });
      __publicField(this, "_storeBlobInCOS", async (e2, t2) => {
        let n2 = await (await navigator.crossOriginStorage.requestFileHandle(Vc(t2), {
          create: true,
          origins: `*`
        })).createWritable();
        await n2.write(e2), await n2.close();
      });
      __publicField(this, "_processAndStore", async (e2, t2) => {
        try {
          let n2 = [];
          for await (let e3 of t2) n2.push(e3);
          let r2 = new Blob(n2), i2 = await this._getBlobHash(r2);
          await this._storeBlobInCOS(r2, i2);
          try {
            await (await this._getHashCache()).put(e2, new Response(i2));
          } catch {
          }
        } catch {
        }
      });
      __publicField(this, "delete", async (e2) => {
        try {
          return await (await this._getHashCache()).delete(e2);
        } catch {
          return false;
        }
      });
      __publicField(this, "_getFileHash", async (e2) => {
        try {
          let t2 = await this._getHashCache(), n2 = await t2.match(e2);
          if (n2) return n2.text();
          let r2 = await this._getLfsFileHash(e2);
          return r2 ? (await t2.put(e2, new Response(r2)), r2) : null;
        } catch {
          return null;
        }
      });
      __publicField(this, "_getLfsFileHash", async (e2) => {
        if (!e2.includes(`/resolve/`)) return null;
        let t2 = e2.replace(`/resolve/`, `/raw/`);
        try {
          let e3 = (await fetch(t2).then((e4) => e4.text())).match(/^oid sha256:([0-9a-f]+)$/m);
          return e3 ? e3[1] : null;
        } catch {
          return null;
        }
      });
      __publicField(this, "_getBlobHash", async (e2) => {
        let t2 = await e2.arrayBuffer(), n2 = await crypto.subtle.digest(zc, t2);
        return Array.from(new Uint8Array(n2)).map((e3) => e3.toString(16).padStart(2, `0`)).join(``);
      });
    }
  }, _e2 = new WeakMap(), __publicField(_c2, "isAvailable", () => typeof navigator < `u` && `crossOriginStorage` in navigator), _c2);
  async function Uc(e2 = null) {
    let t2 = null;
    if (N.useCustomCache) {
      if (!N.customCache) throw Error("`env.useCustomCache=true`, but `env.customCache` is not defined.");
      if (!N.customCache.match || !N.customCache.put) throw Error("`env.customCache` must be an object which implements the `match` and `put` functions of the Web Cache API. For more information, see https://developer.mozilla.org/en-US/docs/Web/API/Cache");
      t2 = N.customCache;
    }
    if (!t2 && N.experimental_useCrossOriginStorage && Hc.isAvailable() && (t2 = new Hc()), !t2 && N.useBrowserCache) {
      if (typeof caches > `u`) throw Error(`Browser cache is not available in this environment.`);
      try {
        t2 = await caches.open(N.cacheKey);
      } catch (e3) {
        P.warn(`An error occurred while opening the browser cache:`, e3);
      }
    }
    if (!t2 && N.useFSCache) {
      if (!M.IS_FS_AVAILABLE) throw Error(`File System Cache is not available in this environment.`);
      t2 = new Tc(e2 ?? N.cacheDir);
    }
    return t2;
  }
  async function Wc(e2, ...t2) {
    for (let n2 of t2) try {
      let t3 = await e2.match(n2);
      if (t3) return t3;
    } catch {
      continue;
    }
  }
  var Gc = new (_d2 = class {
    constructor(e2) {
      __privateAdd(this, _e3);
      __privateAdd(this, _t2);
      __privateSet(this, _e3, e2), __privateSet(this, _t2, /* @__PURE__ */ new Map());
    }
    get(e2) {
      if (!__privateGet(this, _t2).has(e2)) return;
      let t2 = __privateGet(this, _t2).get(e2);
      return __privateGet(this, _t2).delete(e2), __privateGet(this, _t2).set(e2, t2), t2;
    }
    put(e2, t2) {
      __privateGet(this, _t2).has(e2) && __privateGet(this, _t2).delete(e2), __privateGet(this, _t2).set(e2, t2), __privateGet(this, _t2).size > __privateGet(this, _e3) && __privateGet(this, _t2).delete(__privateGet(this, _t2).keys().next().value);
    }
    delete(e2) {
      return __privateGet(this, _t2).delete(e2);
    }
    clear() {
      __privateGet(this, _t2).clear();
    }
  }, _e3 = new WeakMap(), _t2 = new WeakMap(), _d2)(100);
  function Kc(e2, t2) {
    let n2 = Gc.get(e2);
    if (n2 !== void 0) return n2;
    let r2 = t2().then((e3) => e3, (t3) => (Gc.delete(e2), Promise.reject(t3)));
    return Gc.put(e2, r2), r2;
  }
  async function qc(e2) {
    if (!Ac(e2, [
      `http:`,
      `https:`
    ])) return null;
    let t2 = Zc(e2);
    return t2.set(`Range`, `bytes=0-0`), N.fetch(e2, {
      method: `GET`,
      headers: t2,
      cache: `no-store`
    });
  }
  function Jc(e2, t2, n2 = {}) {
    return Kc(Mc(e2, n2, t2), () => Yc(e2, t2, n2));
  }
  async function Yc(e2, t2, n2) {
    var _a3;
    let r2 = await Uc(n2 == null ? void 0 : n2.cache_dir), { localPath: i2, remoteURL: a2, proposedCacheKey: o2, validModelId: s2 } = Qc(e2, t2, n2, r2), c2 = await $c(r2, i2, o2);
    if (c2 !== void 0 && typeof c2 != `string`) {
      let e3 = c2.headers.get(`content-length`), t3 = c2.headers.get(`content-type`);
      return {
        exists: true,
        size: e3 ? parseInt(e3, 10) : void 0,
        contentType: t3 || void 0,
        fromCache: true
      };
    }
    if (N.allowLocalModels && !Ac(i2, [
      `http:`,
      `https:`
    ])) try {
      let e3 = await Xc(i2);
      if (typeof e3 != `string` && e3.status !== 404) {
        let t3 = e3.headers.get(`content-length`), n3 = e3.headers.get(`content-type`);
        return {
          exists: true,
          size: t3 ? parseInt(t3, 10) : void 0,
          contentType: n3 || void 0,
          fromCache: false
        };
      }
    } catch {
    }
    if (N.allowRemoteModels && !n2.local_files_only && s2) {
      let e3 = await qc(a2);
      if (e3 && e3.status >= 200 && e3.status < 300) {
        let t3, n3 = e3.headers.get(`content-type`);
        if (e3.status === 206) {
          let n4 = e3.headers.get(`content-range`);
          if (n4) {
            let e4 = n4.match(/bytes \d+-\d+\/(\d+)/);
            e4 && (t3 = parseInt(e4[1], 10));
          }
        } else if (e3.status === 200) try {
          await ((_a3 = e3.body) == null ? void 0 : _a3.cancel());
        } catch {
        }
        if (t3 === void 0) {
          let n4 = e3.headers.get(`content-length`);
          t3 = n4 ? parseInt(n4, 10) : void 0;
        }
        return {
          exists: true,
          size: t3,
          contentType: n3 || void 0,
          fromCache: false
        };
      }
      e3 && e3.status !== 404 && e3.status !== 416 && Fc(e3.status, a2, true);
    }
    return {
      exists: false,
      fromCache: false
    };
  }
  async function Xc(e2) {
    return N.useFS && !Ac(e2, [
      `http:`,
      `https:`,
      `blob:`
    ]) ? new vc(e2 instanceof URL ? e2.protocol === `file:` ? e2.pathname : e2.toString() : e2) : N.fetch(e2, {
      headers: Zc(e2)
    });
  }
  function Zc(e2) {
    var _a3;
    let t2 = typeof process < `u` && ((_a3 = process == null ? void 0 : process.release) == null ? void 0 : _a3.name) === `node`, n2 = new Headers();
    if (t2) {
      let t3 = !!{}.TESTING_REMOTELY, r2 = N.version;
      if (n2.set(`User-Agent`, `transformers.js/${r2}; is_ci/${t3};`), Ac(e2, [
        `http:`,
        `https:`
      ], [
        `huggingface.co`,
        `hf.co`
      ])) {
        let e3 = {}.HF_TOKEN ?? {}.HF_ACCESS_TOKEN;
        e3 && n2.set(`Authorization`, `Bearer ${e3}`);
      }
    }
    return n2;
  }
  function Qc(e2, t2, n2 = {}, r2 = null) {
    let i2 = n2.revision ?? `main`, a2 = kc(e2, t2), o2 = jc(e2), s2 = o2 ? kc(N.localModelPath, a2) : a2, c2 = kc(N.remoteHost, N.remotePathTemplate.replaceAll(`{model}`, e2).replaceAll(`{revision}`, encodeURIComponent(i2)), t2);
    return {
      requestURL: a2,
      localPath: s2,
      remoteURL: c2,
      proposedCacheKey: r2 instanceof Tc ? i2 === `main` ? a2 : kc(e2, i2, t2) : c2,
      validModelId: o2
    };
  }
  async function $c(e2, t2, n2) {
    if (e2) return await Wc(e2, t2, n2);
  }
  async function el(e2, t2, n2, r2, i2, a2, o2 = {}) {
    if (await n2.match(r2) === void 0 && !(typeof Cache < `u` && n2 instanceof Cache && !Ac(Rc(r2, {
      allowUnresolved: true
    }), [
      `http:`,
      `https:`
    ]))) {
      if (!a2) {
        let a3 = o2.progress_callback ? (n3) => ti(o2.progress_callback, {
          status: `progress`,
          name: e2,
          file: t2,
          ...n3
        }) : void 0;
        await n2.put(r2, i2, a3);
      } else if (typeof i2 != `string`) {
        let e3 = new Headers(i2.headers);
        e3.set(`content-length`, a2.byteLength.toString()), await n2.put(r2, new Response(a2, {
          headers: e3
        })).catch((e4) => {
          P.warn(`Unable to add response to browser cache: ${e4}.`);
        });
      }
    }
  }
  async function tl(e2, t2, n2 = true, r2 = {}, i2 = false, a2 = null) {
    let { requestURL: o2, localPath: s2, remoteURL: c2, proposedCacheKey: l2, validModelId: u2 } = Qc(e2, t2, r2, a2), d2, f2 = false, p2;
    p2 = await $c(a2, s2, l2);
    let m2 = p2 !== void 0;
    if (m2) d2 = l2;
    else {
      if (N.allowLocalModels) {
        if (!Ac(o2, [
          `http:`,
          `https:`
        ])) try {
          p2 = await Xc(s2), d2 = s2;
        } catch (e3) {
          P.warn(`Unable to load from local path "${s2}": "${e3}"`);
        }
        else if (r2.local_files_only) throw Error(`\`local_files_only=true\`, but attempted to load a remote file from: ${o2}.`);
        else if (!N.allowRemoteModels) throw Error(`\`env.allowRemoteModels=false\`, but attempted to load a remote file from: ${o2}.`);
      }
      if (p2 === void 0 || typeof p2 != `string` && p2.status === 404) {
        if (r2.local_files_only || !N.allowRemoteModels) {
          if (n2) throw new Nc(`\`local_files_only=true\` or \`env.allowRemoteModels=false\` and file was not found locally at "${s2}".`);
          return null;
        }
        if (!u2) throw new Nc(`Local file missing at "${s2}" and download aborted due to invalid model ID "${e2}".`);
        if (p2 = await Xc(c2), p2.status !== 200) return Fc(p2.status, c2, n2);
        d2 = l2;
      }
      f2 = a2 && typeof Response < `u` && p2 instanceof Response && p2.status === 200;
    }
    ti(r2.progress_callback, {
      status: `download`,
      name: e2,
      file: t2
    });
    let h2;
    if (!(M.IS_NODE_ENV && i2)) {
      let n3;
      if (typeof p2 != `string`) {
        if (!r2.progress_callback) n3 = new Uint8Array(await p2.arrayBuffer());
        else if (m2 && typeof navigator < `u` && /firefox/i.test(navigator.userAgent)) n3 = new Uint8Array(await p2.arrayBuffer()), ti(r2.progress_callback, {
          status: `progress`,
          name: e2,
          file: t2,
          progress: 100,
          loaded: n3.length,
          total: n3.length
        });
        else {
          let i3, a3 = p2.headers.get(`content-length`);
          if (a3) i3 = parseInt(a3, 10);
          else try {
            let n4 = await Jc(e2, t2, r2);
            n4.size && (i3 = n4.size);
          } catch {
          }
          n3 = await Ic(p2, (n4) => {
            ti(r2.progress_callback, {
              status: `progress`,
              name: e2,
              file: t2,
              ...n4
            });
          }, i3);
        }
      }
      h2 = n3;
    }
    if (f2 && d2 && typeof p2 != `string` && await el(e2, t2, a2, d2, p2, h2, r2), M.IS_NODE_ENV && i2 && r2.progress_callback && typeof p2 != `string`) {
      let n3 = parseInt(p2.headers.get(`content-length`), 10) || 0;
      ti(r2.progress_callback, {
        status: `progress`,
        name: e2,
        file: t2,
        progress: 100,
        loaded: n3,
        total: n3
      });
    }
    if (ti(r2.progress_callback, {
      status: `done`,
      name: e2,
      file: t2
    }), h2) {
      if (!M.IS_NODE_ENV && i2) throw Error(`Cannot return path in a browser environment.`);
      return h2;
    }
    if (p2 instanceof vc) return p2.filePath;
    let g2 = await (a2 == null ? void 0 : a2.match(d2));
    if (g2 instanceof vc) return g2.filePath;
    if (g2 instanceof Response) return new Uint8Array(await g2.arrayBuffer());
    if (typeof g2 == `string`) return g2;
    throw Error(`Unable to get model file path or buffer.`);
  }
  var nl = /* @__PURE__ */ new Map();
  async function rl(e2, t2, n2 = true, r2 = {}, i2 = false) {
    if (!N.allowLocalModels) {
      if (r2.local_files_only) throw Error("Invalid configuration detected: local models are disabled (`env.allowLocalModels=false`) but you have requested to only use local models (`local_files_only=true`).");
      if (!N.allowRemoteModels) throw Error("Invalid configuration detected: both local and remote models are disabled. Fix by setting `env.allowLocalModels` or `env.allowRemoteModels` to `true`.");
    }
    let a2 = Mc(e2, r2, t2, n2, i2), { progress_callback: o2 } = r2, s2 = o2 instanceof ni ? o2.loads : nl, c2 = s2.get(a2);
    return c2 || (ti(o2, {
      status: `initiate`,
      name: e2,
      file: t2
    }), c2 = Uc(r2.cache_dir).then((a3) => tl(e2, t2, n2, r2, i2, a3)), s2 === nl && (c2 = c2.finally(() => nl.delete(a2))), s2.set(a2, c2)), await c2;
  }
  async function il(e2, t2, n2 = true, r2 = {}) {
    let i2 = await rl(e2, t2, n2, r2, false);
    return i2 === null ? null : new TextDecoder(`utf-8`).decode(i2);
  }
  async function al(e2, t2, n2 = true, r2 = {}) {
    let i2 = await il(e2, t2, n2, r2);
    return i2 === null ? {} : JSON.parse(i2);
  }
  function ol(e2, [t2, n2, r2], [i2, a2], o2 = `bilinear`, s2 = false) {
    let c2 = a2 / r2, l2 = i2 / n2, u2 = new e2.constructor(i2 * a2 * t2), d2 = n2 * r2, f2 = i2 * a2;
    for (let o3 = 0; o3 < i2; ++o3) for (let i3 = 0; i3 < a2; ++i3) {
      let s3 = o3 * a2 + i3, p2 = (i3 + 0.5) / c2 - 0.5, m2 = (o3 + 0.5) / l2 - 0.5, h2 = Math.floor(p2), g2 = Math.floor(m2), _2 = Math.min(h2 + 1, r2 - 1), v2 = Math.min(g2 + 1, n2 - 1);
      h2 = Math.max(h2, 0), g2 = Math.max(g2, 0);
      let y2 = p2 - h2, b2 = m2 - g2, x2 = (1 - y2) * (1 - b2), S2 = y2 * (1 - b2), C2 = (1 - y2) * b2, w2 = y2 * b2, T2 = g2 * r2, E2 = v2 * r2, ee2 = T2 + h2, te2 = T2 + _2, D2 = E2 + h2, O2 = E2 + _2;
      for (let n3 = 0; n3 < t2; ++n3) {
        let t3 = n3 * d2;
        u2[n3 * f2 + s3] = x2 * e2[t3 + ee2] + S2 * e2[t3 + te2] + C2 * e2[t3 + D2] + w2 * e2[t3 + O2];
      }
    }
    return u2;
  }
  function sl(e2, t2, n2) {
    let r2 = Array(n2.length), i2 = Array(n2.length);
    for (let e3 = n2.length - 1, a3 = 1; e3 >= 0; --e3) i2[e3] = a3, r2[e3] = t2[n2[e3]], a3 *= r2[e3];
    let a2 = n2.map((e3, t3) => i2[n2.indexOf(t3)]), o2 = new e2.constructor(e2.length);
    for (let n3 = 0; n3 < e2.length; ++n3) {
      let r3 = 0;
      for (let e3 = t2.length - 1, i3 = n3; e3 >= 0; --e3) r3 += i3 % t2[e3] * a2[e3], i3 = Math.floor(i3 / t2[e3]);
      o2[r3] = e2[n3];
    }
    return [
      o2,
      r2
    ];
  }
  function cl(e2) {
    let t2 = dl(e2)[0], n2 = e2.map((e3) => Math.exp(e3 - t2)), r2 = n2.reduce((e3, t3) => e3 + t3, 0);
    return n2.map((e3) => e3 / r2);
  }
  function ll(e2) {
    let t2 = dl(e2)[0], n2 = 0;
    for (let r3 = 0; r3 < e2.length; ++r3) n2 += Math.exp(e2[r3] - t2);
    let r2 = Math.log(n2);
    return e2.map((e3) => e3 - t2 - r2);
  }
  function ul(e2) {
    if (e2.length === 0) throw Error(`Array must not be empty`);
    let t2 = e2[0], n2 = 0;
    for (let r2 = 1; r2 < e2.length; ++r2) e2[r2] < t2 && (t2 = e2[r2], n2 = r2);
    return [
      t2,
      n2
    ];
  }
  function dl(e2) {
    if (e2.length === 0) throw Error(`Array must not be empty`);
    let t2 = e2[0], n2 = 0;
    for (let r2 = 1; r2 < e2.length; ++r2) e2[r2] > t2 && (t2 = e2[r2], n2 = r2);
    return [
      t2,
      n2
    ];
  }
  function fl(e2) {
    return e2 > 0 && !(e2 & e2 - 1);
  }
  var pl = class {
    constructor(e2) {
      if (this.size = e2 | 0, this.size <= 1 || !fl(this.size)) throw Error(`FFT size must be a power of two larger than 1`);
      this._csize = e2 << 1, this.table = new Float64Array(this.size * 2);
      for (let e3 = 0; e3 < this.table.length; e3 += 2) {
        let t3 = Math.PI * e3 / this.size;
        this.table[e3] = Math.cos(t3), this.table[e3 + 1] = -Math.sin(t3);
      }
      let t2 = 0;
      for (let e3 = 1; this.size > e3; e3 <<= 1) ++t2;
      this._width = t2 % 2 == 0 ? t2 - 1 : t2, this._bitrev = new Int32Array(1 << this._width);
      for (let e3 = 0; e3 < this._bitrev.length; ++e3) {
        this._bitrev[e3] = 0;
        for (let t3 = 0; t3 < this._width; t3 += 2) {
          let n2 = this._width - t3 - 2;
          this._bitrev[e3] |= (e3 >>> t3 & 3) << n2;
        }
      }
    }
    createComplexArray() {
      return new Float64Array(this._csize);
    }
    fromComplexArray(e2, t2) {
      let n2 = t2 || Array(e2.length >>> 1);
      for (let t3 = 0; t3 < e2.length; t3 += 2) n2[t3 >>> 1] = e2[t3];
      return n2;
    }
    toComplexArray(e2, t2) {
      let n2 = t2 || this.createComplexArray();
      for (let t3 = 0; t3 < n2.length; t3 += 2) n2[t3] = e2[t3 >>> 1], n2[t3 + 1] = 0;
      return n2;
    }
    transform(e2, t2) {
      if (e2 === t2) throw Error(`Input and output buffers must be different`);
      this._transform4(e2, t2, 1);
    }
    realTransform(e2, t2) {
      if (e2 === t2) throw Error(`Input and output buffers must be different`);
      this._realTransform4(e2, t2, 1);
    }
    inverseTransform(e2, t2) {
      if (e2 === t2) throw Error(`Input and output buffers must be different`);
      this._transform4(e2, t2, -1);
      for (let t3 = 0; t3 < e2.length; ++t3) e2[t3] /= this.size;
    }
    _transform4(e2, t2, n2) {
      let r2 = this._csize, i2 = 1 << this._width, a2 = r2 / i2 << 1, o2, s2, c2 = this._bitrev;
      if (a2 === 4) for (o2 = 0, s2 = 0; o2 < r2; o2 += a2, ++s2) {
        let n3 = c2[s2];
        this._singleTransform2(t2, e2, o2, n3, i2);
      }
      else for (o2 = 0, s2 = 0; o2 < r2; o2 += a2, ++s2) {
        let r3 = c2[s2];
        this._singleTransform4(t2, e2, o2, r3, i2, n2);
      }
      let l2 = this.table;
      for (i2 >>= 2; i2 >= 2; i2 >>= 2) {
        a2 = r2 / i2 << 1;
        let t3 = a2 >>> 2;
        for (o2 = 0; o2 < r2; o2 += a2) {
          let r3 = o2 + t3 - 1;
          for (let a3 = o2, s3 = 0; a3 < r3; a3 += 2, s3 += i2) {
            let r4 = a3, i3 = r4 + t3, o3 = i3 + t3, c3 = o3 + t3, u2 = e2[r4], d2 = e2[r4 + 1], f2 = e2[i3], p2 = e2[i3 + 1], m2 = e2[o3], h2 = e2[o3 + 1], g2 = e2[c3], _2 = e2[c3 + 1], v2 = l2[s3], y2 = n2 * l2[s3 + 1], b2 = f2 * v2 - p2 * y2, x2 = f2 * y2 + p2 * v2, S2 = l2[2 * s3], C2 = n2 * l2[2 * s3 + 1], w2 = m2 * S2 - h2 * C2, T2 = m2 * C2 + h2 * S2, E2 = l2[3 * s3], ee2 = n2 * l2[3 * s3 + 1], te2 = g2 * E2 - _2 * ee2, D2 = g2 * ee2 + _2 * E2, O2 = u2 + w2, ne2 = d2 + T2, re2 = u2 - w2, ie2 = d2 - T2, ae2 = b2 + te2, oe2 = x2 + D2, k2 = n2 * (b2 - te2), se2 = n2 * (x2 - D2);
            e2[r4] = O2 + ae2, e2[r4 + 1] = ne2 + oe2, e2[i3] = re2 + se2, e2[i3 + 1] = ie2 - k2, e2[o3] = O2 - ae2, e2[o3 + 1] = ne2 - oe2, e2[c3] = re2 - se2, e2[c3 + 1] = ie2 + k2;
          }
        }
      }
    }
    _singleTransform2(e2, t2, n2, r2, i2) {
      let a2 = e2[r2], o2 = e2[r2 + 1], s2 = e2[r2 + i2], c2 = e2[r2 + i2 + 1];
      t2[n2] = a2 + s2, t2[n2 + 1] = o2 + c2, t2[n2 + 2] = a2 - s2, t2[n2 + 3] = o2 - c2;
    }
    _singleTransform4(e2, t2, n2, r2, i2, a2) {
      let o2 = i2 * 2, s2 = i2 * 3, c2 = e2[r2], l2 = e2[r2 + 1], u2 = e2[r2 + i2], d2 = e2[r2 + i2 + 1], f2 = e2[r2 + o2], p2 = e2[r2 + o2 + 1], m2 = e2[r2 + s2], h2 = e2[r2 + s2 + 1], g2 = c2 + f2, _2 = l2 + p2, v2 = c2 - f2, y2 = l2 - p2, b2 = u2 + m2, x2 = d2 + h2, S2 = a2 * (u2 - m2), C2 = a2 * (d2 - h2);
      t2[n2] = g2 + b2, t2[n2 + 1] = _2 + x2, t2[n2 + 2] = v2 + C2, t2[n2 + 3] = y2 - S2, t2[n2 + 4] = g2 - b2, t2[n2 + 5] = _2 - x2, t2[n2 + 6] = v2 - C2, t2[n2 + 7] = y2 + S2;
    }
    _realTransform4(e2, t2, n2) {
      let r2 = this._csize, i2 = 1 << this._width, a2 = r2 / i2 << 1, o2, s2, c2 = this._bitrev;
      if (a2 === 4) for (o2 = 0, s2 = 0; o2 < r2; o2 += a2, ++s2) {
        let n3 = c2[s2];
        this._singleRealTransform2(t2, e2, o2, n3 >>> 1, i2 >>> 1);
      }
      else for (o2 = 0, s2 = 0; o2 < r2; o2 += a2, ++s2) {
        let r3 = c2[s2];
        this._singleRealTransform4(t2, e2, o2, r3 >>> 1, i2 >>> 1, n2);
      }
      let l2 = this.table;
      for (i2 >>= 2; i2 >= 2; i2 >>= 2) {
        a2 = r2 / i2 << 1;
        let t3 = a2 >>> 1, s3 = t3 >>> 1, c3 = s3 >>> 1;
        for (o2 = 0; o2 < r2; o2 += a2) for (let r3 = 0, a3 = 0; r3 <= c3; r3 += 2, a3 += i2) {
          let i3 = o2 + r3, u3 = i3 + s3, d2 = u3 + s3, f2 = d2 + s3, p2 = e2[i3], m2 = e2[i3 + 1], h2 = e2[u3], g2 = e2[u3 + 1], _2 = e2[d2], v2 = e2[d2 + 1], y2 = e2[f2], b2 = e2[f2 + 1], x2 = p2, S2 = m2, C2 = l2[a3], w2 = n2 * l2[a3 + 1], T2 = h2 * C2 - g2 * w2, E2 = h2 * w2 + g2 * C2, ee2 = l2[2 * a3], te2 = n2 * l2[2 * a3 + 1], D2 = _2 * ee2 - v2 * te2, O2 = _2 * te2 + v2 * ee2, ne2 = l2[3 * a3], re2 = n2 * l2[3 * a3 + 1], ie2 = y2 * ne2 - b2 * re2, ae2 = y2 * re2 + b2 * ne2, oe2 = x2 + D2, k2 = S2 + O2, se2 = x2 - D2, ce2 = S2 - O2, le2 = T2 + ie2, ue2 = E2 + ae2, de2 = n2 * (T2 - ie2), fe2 = n2 * (E2 - ae2);
          if (e2[i3] = oe2 + le2, e2[i3 + 1] = k2 + ue2, e2[u3] = se2 + fe2, e2[u3 + 1] = ce2 - de2, r3 === 0) {
            e2[d2] = oe2 - le2, e2[d2 + 1] = k2 - ue2;
            continue;
          }
          if (r3 === c3) continue;
          let pe2 = o2 + s3 - r3, me2 = o2 + t3 - r3;
          e2[pe2] = se2 - n2 * fe2, e2[pe2 + 1] = -ce2 - n2 * de2, e2[me2] = oe2 - n2 * le2, e2[me2 + 1] = -k2 + n2 * ue2;
        }
      }
      let u2 = r2 >>> 1;
      for (let t3 = 2; t3 < u2; t3 += 2) e2[r2 - t3] = e2[t3], e2[r2 - t3 + 1] = -e2[t3 + 1];
    }
    _singleRealTransform2(e2, t2, n2, r2, i2) {
      let a2 = e2[r2], o2 = e2[r2 + i2];
      t2[n2] = a2 + o2, t2[n2 + 1] = 0, t2[n2 + 2] = a2 - o2, t2[n2 + 3] = 0;
    }
    _singleRealTransform4(e2, t2, n2, r2, i2, a2) {
      let o2 = i2 * 2, s2 = i2 * 3, c2 = e2[r2], l2 = e2[r2 + i2], u2 = e2[r2 + o2], d2 = e2[r2 + s2], f2 = c2 + u2, p2 = c2 - u2, m2 = l2 + d2, h2 = a2 * (l2 - d2);
      t2[n2] = f2 + m2, t2[n2 + 1] = 0, t2[n2 + 2] = p2, t2[n2 + 3] = -h2, t2[n2 + 4] = f2 - m2, t2[n2 + 5] = 0, t2[n2 + 6] = p2, t2[n2 + 7] = h2;
    }
  }, ml = class {
    constructor(e2) {
      let t2 = 2 * (e2 - 1), n2 = 2 * (2 * e2 - 1), r2 = 2 ** Math.ceil(Math.log2(n2));
      this.bufferSize = r2, this._a = t2;
      let i2 = new Float64Array(n2), a2 = new Float64Array(r2);
      this._chirpBuffer = new Float64Array(r2), this._buffer1 = new Float64Array(r2), this._buffer2 = new Float64Array(r2), this._outBuffer1 = new Float64Array(r2), this._outBuffer2 = new Float64Array(r2);
      let o2 = -2 * Math.PI / e2, s2 = Math.cos(o2), c2 = Math.sin(o2);
      for (let t3 = 0; t3 < n2 >> 1; ++t3) {
        let n3 = (t3 + 1 - e2) ** 2 / 2, r3 = Math.sqrt(s2 ** 2 + c2 ** 2) ** n3, o3 = n3 * Math.atan2(c2, s2), l2 = 2 * t3;
        i2[l2] = r3 * Math.cos(o3), i2[l2 + 1] = r3 * Math.sin(o3), a2[l2] = i2[l2], a2[l2 + 1] = -i2[l2 + 1];
      }
      this._slicedChirpBuffer = i2.subarray(t2, n2), this._f = new pl(r2 >> 1), this._f.transform(this._chirpBuffer, a2);
    }
    _transform(e2, t2, n2) {
      let r2 = this._buffer1, i2 = this._buffer2, a2 = this._outBuffer1, o2 = this._outBuffer2, s2 = this._chirpBuffer, c2 = this._slicedChirpBuffer, l2 = this._a;
      if (n2) for (let e3 = 0; e3 < c2.length; e3 += 2) {
        let n3 = e3 + 1, i3 = t2[e3 >> 1];
        r2[e3] = i3 * c2[e3], r2[n3] = i3 * c2[n3];
      }
      else for (let e3 = 0; e3 < c2.length; e3 += 2) {
        let n3 = e3 + 1;
        r2[e3] = t2[e3] * c2[e3] - t2[n3] * c2[n3], r2[n3] = t2[e3] * c2[n3] + t2[n3] * c2[e3];
      }
      this._f.transform(a2, r2);
      for (let e3 = 0; e3 < s2.length; e3 += 2) {
        let t3 = e3 + 1;
        i2[e3] = a2[e3] * s2[e3] - a2[t3] * s2[t3], i2[t3] = a2[e3] * s2[t3] + a2[t3] * s2[e3];
      }
      this._f.inverseTransform(o2, i2);
      for (let t3 = 0; t3 < o2.length; t3 += 2) {
        let n3 = o2[t3 + l2], r3 = o2[t3 + l2 + 1], i3 = c2[t3], a3 = c2[t3 + 1];
        e2[t3] = n3 * i3 - r3 * a3, e2[t3 + 1] = n3 * a3 + r3 * i3;
      }
    }
    transform(e2, t2) {
      this._transform(e2, t2, false);
    }
    realTransform(e2, t2) {
      this._transform(e2, t2, true);
    }
  }, hl = class {
    constructor(e2) {
      this.fft_length = e2, this.isPowerOfTwo = fl(e2), this.isPowerOfTwo ? (this.fft = new pl(e2), this.outputBufferSize = 2 * e2) : (this.fft = new ml(e2), this.outputBufferSize = this.fft.bufferSize);
    }
    realTransform(e2, t2) {
      this.fft.realTransform(e2, t2);
    }
    transform(e2, t2) {
      this.fft.transform(e2, t2);
    }
  };
  function gl(e2, t2) {
    if (t2 % 2 == 0 || t2 <= 0) throw Error(`Window size must be a positive odd number`);
    let n2 = new e2.constructor(e2.length), r2 = new e2.constructor(t2), i2 = Math.floor(t2 / 2);
    for (let t3 = 0; t3 < e2.length; ++t3) {
      let a2 = 0;
      for (let n3 = -i2; n3 <= i2; ++n3) {
        let i3 = t3 + n3;
        i3 < 0 ? i3 = Math.abs(i3) : i3 >= e2.length && (i3 = 2 * (e2.length - 1) - i3), r2[a2++] = e2[i3];
      }
      r2.sort(), n2[t3] = r2[i2];
    }
    return n2;
  }
  function _l(e2, t2) {
    let n2 = 10 ** t2;
    return Math.round(e2 * n2) / n2;
  }
  function vl(e2) {
    let t2 = Math.round(e2);
    return Math.abs(e2) % 1 == 0.5 ? t2 % 2 == 0 ? t2 : t2 - 1 : t2;
  }
  function yl(e2) {
    let t2 = e2.length, n2 = e2[0].length, r2 = [
      t2 + 1,
      n2 + 1
    ], i2 = Array.from({
      length: r2[0]
    }, () => Array(r2[1]).fill(1 / 0));
    i2[0][0] = 0;
    let a2 = Array.from({
      length: r2[0]
    }, () => Array(r2[1]).fill(-1));
    for (let t3 = 1; t3 < r2[1]; ++t3) for (let n3 = 1; n3 < r2[0]; ++n3) {
      let r3 = i2[n3 - 1][t3 - 1], o3 = i2[n3 - 1][t3], s3 = i2[n3][t3 - 1], c3, l3;
      r3 < o3 && r3 < s3 ? (c3 = r3, l3 = 0) : o3 < r3 && o3 < s3 ? (c3 = o3, l3 = 1) : (c3 = s3, l3 = 2), i2[n3][t3] = e2[n3 - 1][t3 - 1] + c3, a2[n3][t3] = l3;
    }
    for (let e3 = 0; e3 < r2[1]; ++e3) a2[0][e3] = 2;
    for (let e3 = 0; e3 < r2[0]; ++e3) a2[e3][0] = 1;
    let o2 = t2, s2 = n2, c2 = [], l2 = [];
    for (; o2 > 0 || s2 > 0; ) switch (c2.push(o2 - 1), l2.push(s2 - 1), a2[o2][s2]) {
      case 0:
        --o2, --s2;
        break;
      case 1:
        --o2;
        break;
      case 2:
        --s2;
        break;
      default:
        throw Error(`Internal error in dynamic time warping. Unexpected trace[${o2}, ${s2}]. Please file a bug report.`);
    }
    return c2.reverse(), l2.reverse(), [
      c2,
      l2
    ];
  }
  var bl = /* @__PURE__ */ (function() {
    let e2 = null;
    return function(t2) {
      if (!e2) {
        e2 = new Float32Array(65536);
        let t3 = new ArrayBuffer(4), n3 = new Uint32Array(t3), r3 = new Float32Array(t3);
        for (let t4 = 0; t4 < e2.length; ++t4) {
          let i3 = 0, a2 = (t4 & 32768) << 16, o2 = (t4 & 31744) >> 10, s2 = t4 & 1023;
          if (o2 === 31) i3 = a2 | 2139095040 | s2 << 13;
          else if (o2 === 0) {
            if (s2 === 0) i3 = a2;
            else {
              let e3 = 113;
              for (; !(s2 & 1024); ) s2 <<= 1, --e3;
              s2 &= -1025, i3 = a2 | e3 << 23 | s2 << 13;
            }
          } else i3 = a2 | o2 + 112 << 23 | s2 << 13;
          n3[0] = i3, e2[t4] = r3[0];
        }
      }
      let n2 = t2.length, r2 = e2, i2 = new Float32Array(n2);
      for (let e3 = 0; e3 < n2; ++e3) i2[e3] = r2[t2[e3]];
      return i2;
    };
  })(), xl = {};
  async function Sl(e2) {
    let t2 = e2.split(`/`).pop(), n2;
    try {
      if (n2 = await Uc(), n2) {
        let t3 = await n2.match(e2);
        if (t3) return t3;
      }
    } catch (e3) {
      P.warn(`Failed to load ${t2} from cache:`, e3);
    }
    let r2 = await N.fetch(e2);
    if (!r2.ok) throw Error(`Failed to fetch ${t2}: ${r2.status} ${r2.statusText}`);
    if (n2) try {
      await n2.put(e2, r2.clone());
    } catch (e3) {
      P.warn(`Failed to cache ${t2}:`, e3);
    }
    return r2;
  }
  async function Cl(e2) {
    let t2 = await Sl(e2);
    if (!t2 || typeof t2 == `string`) return null;
    try {
      return await t2.arrayBuffer();
    } catch (e3) {
      return P.warn(`Failed to read WASM binary:`, e3), null;
    }
  }
  async function wl(e2) {
    if (M.IS_SERVICE_WORKER_ENV || M.IS_CHROME_AVAILABLE) return e2;
    let t2 = await Sl(e2);
    if (!t2 || typeof t2 == `string`) return null;
    try {
      let e3 = await t2.text();
      e3 = e3.replaceAll(`globalThis.process?.versions?.node`, `false`);
      let n2 = new Blob([
        e3
      ], {
        type: `text/javascript`
      });
      return URL.createObjectURL(n2);
    } catch (e3) {
      return P.warn(`Failed to read WASM factory:`, e3), null;
    }
  }
  var Tl = Object.freeze({
    auto: null,
    gpu: null,
    cpu: `cpu`,
    wasm: `wasm`,
    webgpu: `webgpu`,
    cuda: `cuda`,
    dml: `dml`,
    coreml: `coreml`,
    webnn: {
      name: `webnn`,
      deviceType: `cpu`
    },
    "webnn-npu": {
      name: `webnn`,
      deviceType: `npu`
    },
    "webnn-gpu": {
      name: `webnn`,
      deviceType: `gpu`
    },
    "webnn-cpu": {
      name: `webnn`,
      deviceType: `cpu`
    }
  });
  function El(e2) {
    return e2 <= Zr.DEBUG ? 0 : e2 <= Zr.INFO ? 2 : e2 <= Zr.WARNING || e2 <= Zr.ERROR ? 3 : 4;
  }
  var Dl = {
    0: `verbose`,
    1: `info`,
    2: `warning`,
    3: `error`,
    4: `fatal`
  }, Ol = [], kl, Al, jl = Symbol.for(`onnxruntime`);
  if (jl in globalThis) Al = globalThis[jl];
  else if (M.IS_NODE_ENV) {
    switch (Al = xl, process.platform) {
      case `win32`:
        Ol.push(`dml`);
        break;
      case `linux`:
        process.arch === `x64` && Ol.push(`cuda`);
        break;
      case `darwin`:
        Ol.push(`coreml`);
    }
    Ol.push(`webgpu`), Ol.push(`cpu`), kl = [
      `cpu`
    ];
  } else Al = n, M.IS_WEBNN_AVAILABLE && Ol.push(`webnn-npu`, `webnn-gpu`, `webnn-cpu`, `webnn`), M.IS_WEBGPU_AVAILABLE && Ol.push(`webgpu`), Ol.push(`wasm`), kl = [
    `wasm`
  ];
  function Ml() {
    return [
      ...Ol
    ];
  }
  var Nl = Al.InferenceSession;
  function Pl(e2 = null) {
    if (!e2) return kl;
    switch (e2) {
      case `auto`:
        return Ol;
      case `gpu`:
        return Ol.filter((e3) => [
          `webgpu`,
          `cuda`,
          `dml`,
          `webnn-gpu`
        ].includes(e3));
    }
    if (Ol.includes(e2)) return [
      Tl[e2] ?? e2
    ];
    throw Error(`Unsupported device: "${e2}". Should be one of: ${Ol.join(`, `)}.`);
  }
  var Fl = Promise.resolve(), Il = null;
  async function Ll() {
    var _a3, _b3, _c3, _d3, _e5;
    if (Il) return Il;
    if (!(N.useWasmCache && typeof ((_a3 = Hl == null ? void 0 : Hl.wasm) == null ? void 0 : _a3.wasmPaths) == `object` && ((_c3 = (_b3 = Hl == null ? void 0 : Hl.wasm) == null ? void 0 : _b3.wasmPaths) == null ? void 0 : _c3.wasm) && ((_e5 = (_d3 = Hl == null ? void 0 : Hl.wasm) == null ? void 0 : _d3.wasmPaths) == null ? void 0 : _e5.mjs))) {
      if (M.IS_DENO_WEB_RUNTIME) throw Error(`env.useWasmCache=false is not supported in Deno's web runtime. Remove the useWasmCache override.`);
      return Il = Promise.resolve(), Il;
    }
    return Il = (async () => {
      let e2 = Hl.wasm.wasmPaths, t2 = false;
      await Promise.all([
        e2.wasm && !Lc(e2.wasm) ? (async () => {
          try {
            let n2 = await Cl(Rc(e2.wasm));
            n2 && (Hl.wasm.wasmBinary = n2, t2 = true);
          } catch (e3) {
            P.warn(`Failed to pre-load WASM binary:`, e3);
          }
        })() : Promise.resolve(),
        e2.mjs && !Lc(e2.mjs) ? (async () => {
          try {
            let t3 = await wl(Rc(e2.mjs));
            t3 && (Hl.wasm.wasmPaths.mjs = t3);
          } catch (e3) {
            P.warn(`Failed to pre-load WASM factory:`, e3);
          }
        })() : Promise.resolve()
      ]), t2 || (Hl.wasm.wasmPaths.mjs = e2.mjs);
    })(), Il;
  }
  async function Rl(e2, t2, n2) {
    await Ll();
    let r2 = El(N.logLevel ?? Zr.WARNING), i2 = () => Nl.create(e2, {
      logSeverityLevel: r2,
      ...t2
    }), a2 = await (M.IS_WEB_ENV ? Fl = Fl.then(i2) : i2());
    return a2.config = n2, a2;
  }
  var zl = Promise.resolve();
  async function Bl(e2, t2) {
    let n2 = () => e2.run(t2);
    return M.IS_WEB_ENV ? zl = zl.then(n2) : n2();
  }
  function Vl(e2) {
    return e2 instanceof Al.Tensor;
  }
  var Hl = Al == null ? void 0 : Al.env;
  function Ul() {
    var _a3;
    return (_a3 = Hl == null ? void 0 : Hl.wasm) == null ? void 0 : _a3.proxy;
  }
  if (Hl) {
    let e2 = function(e3) {
      Hl.logLevel = Dl[El(e3)];
    };
    if (Hl.wasm) {
      if (!(typeof ServiceWorkerGlobalScope < `u` && self instanceof ServiceWorkerGlobalScope) && ((_e4 = Hl.versions) == null ? void 0 : _e4.web) && !Hl.wasm.wasmPaths) {
        let e3 = `https://cdn.jsdelivr.net/npm/onnxruntime-web@${Hl.versions.web}/dist/`, t2 = `.asyncify`;
        M.IS_SAFARI_BELOW_26 && !M.IS_WEBGPU_AVAILABLE && (t2 = ``), Hl.wasm.wasmPaths = {
          mjs: `${e3}ort-wasm-simd-threaded${t2}.mjs`,
          wasm: `${e3}ort-wasm-simd-threaded${t2}.wasm`
        };
      }
      Hl.wasm.proxy = false;
    }
    Hl.webgpu && (Hl.webgpu.powerPreference = `high-performance`), e2(N.logLevel ?? Zr.WARNING), N.backends.onnx = {
      ...Hl,
      setLogLevel: e2,
      getSupportedDevices: Ml
    };
  }
  var Wl = async (e2, t2, n2) => {
    let r2 = await Rl(new Uint8Array(e2), t2);
    return (async (e3) => {
      let t3 = Ul(), i2 = Object.fromEntries(Object.entries(e3).map(([e4, n3]) => [
        e4,
        (t3 ? n3.clone() : n3).ort_tensor
      ])), a2 = await Bl(r2, i2);
      return Array.isArray(n2) ? n2.map((e4) => new W(a2[e4])) : new W(a2[n2]);
    });
  }, Gl = (_f2 = class {
    static get nearest_interpolate_4d() {
      return this._nearest_interpolate_4d || (this._nearest_interpolate_4d = Wl([
        8,
        10,
        18,
        0,
        58,
        129,
        1,
        10,
        41,
        10,
        1,
        120,
        10,
        0,
        10,
        0,
        10,
        1,
        115,
        18,
        1,
        121,
        34,
        6,
        82,
        101,
        115,
        105,
        122,
        101,
        42,
        18,
        10,
        4,
        109,
        111,
        100,
        101,
        34,
        7,
        110,
        101,
        97,
        114,
        101,
        115,
        116,
        160,
        1,
        3,
        18,
        1,
        114,
        90,
        31,
        10,
        1,
        120,
        18,
        26,
        10,
        24,
        8,
        1,
        18,
        20,
        10,
        3,
        18,
        1,
        98,
        10,
        3,
        18,
        1,
        99,
        10,
        3,
        18,
        1,
        104,
        10,
        3,
        18,
        1,
        119,
        90,
        15,
        10,
        1,
        115,
        18,
        10,
        10,
        8,
        8,
        7,
        18,
        4,
        10,
        2,
        8,
        4,
        98,
        31,
        10,
        1,
        121,
        18,
        26,
        10,
        24,
        8,
        1,
        18,
        20,
        10,
        3,
        18,
        1,
        98,
        10,
        3,
        18,
        1,
        99,
        10,
        3,
        18,
        1,
        104,
        10,
        3,
        18,
        1,
        119,
        66,
        2,
        16,
        21
      ], this.session_options, `y`)), this._nearest_interpolate_4d;
    }
    static get bilinear_interpolate_4d() {
      return this._bilinear_interpolate_4d || (this._bilinear_interpolate_4d = Wl([
        8,
        9,
        18,
        0,
        58,
        128,
        1,
        10,
        40,
        10,
        1,
        120,
        10,
        0,
        10,
        0,
        10,
        1,
        115,
        18,
        1,
        121,
        34,
        6,
        82,
        101,
        115,
        105,
        122,
        101,
        42,
        17,
        10,
        4,
        109,
        111,
        100,
        101,
        34,
        6,
        108,
        105,
        110,
        101,
        97,
        114,
        160,
        1,
        3,
        18,
        1,
        114,
        90,
        31,
        10,
        1,
        120,
        18,
        26,
        10,
        24,
        8,
        1,
        18,
        20,
        10,
        3,
        18,
        1,
        98,
        10,
        3,
        18,
        1,
        99,
        10,
        3,
        18,
        1,
        104,
        10,
        3,
        18,
        1,
        119,
        90,
        15,
        10,
        1,
        115,
        18,
        10,
        10,
        8,
        8,
        7,
        18,
        4,
        10,
        2,
        8,
        4,
        98,
        31,
        10,
        1,
        121,
        18,
        26,
        10,
        24,
        8,
        1,
        18,
        20,
        10,
        3,
        18,
        1,
        98,
        10,
        3,
        18,
        1,
        99,
        10,
        3,
        18,
        1,
        104,
        10,
        3,
        18,
        1,
        119,
        66,
        2,
        16,
        20
      ], this.session_options, `y`)), this._bilinear_interpolate_4d;
    }
    static get bicubic_interpolate_4d() {
      return this._bicubic_interpolate_4d || (this._bicubic_interpolate_4d = Wl([
        8,
        9,
        18,
        0,
        58,
        127,
        10,
        39,
        10,
        1,
        120,
        10,
        0,
        10,
        0,
        10,
        1,
        115,
        18,
        1,
        121,
        34,
        6,
        82,
        101,
        115,
        105,
        122,
        101,
        42,
        16,
        10,
        4,
        109,
        111,
        100,
        101,
        34,
        5,
        99,
        117,
        98,
        105,
        99,
        160,
        1,
        3,
        18,
        1,
        114,
        90,
        31,
        10,
        1,
        120,
        18,
        26,
        10,
        24,
        8,
        1,
        18,
        20,
        10,
        3,
        18,
        1,
        98,
        10,
        3,
        18,
        1,
        99,
        10,
        3,
        18,
        1,
        104,
        10,
        3,
        18,
        1,
        119,
        90,
        15,
        10,
        1,
        115,
        18,
        10,
        10,
        8,
        8,
        7,
        18,
        4,
        10,
        2,
        8,
        4,
        98,
        31,
        10,
        1,
        121,
        18,
        26,
        10,
        24,
        8,
        1,
        18,
        20,
        10,
        3,
        18,
        1,
        98,
        10,
        3,
        18,
        1,
        99,
        10,
        3,
        18,
        1,
        104,
        10,
        3,
        18,
        1,
        119,
        66,
        2,
        16,
        20
      ], this.session_options, `y`)), this._bicubic_interpolate_4d;
    }
    static get matmul() {
      return this._matmul || (this._matmul = Wl([
        8,
        9,
        18,
        0,
        58,
        55,
        10,
        17,
        10,
        1,
        97,
        10,
        1,
        98,
        18,
        1,
        99,
        34,
        6,
        77,
        97,
        116,
        77,
        117,
        108,
        18,
        1,
        114,
        90,
        9,
        10,
        1,
        97,
        18,
        4,
        10,
        2,
        8,
        1,
        90,
        9,
        10,
        1,
        98,
        18,
        4,
        10,
        2,
        8,
        1,
        98,
        9,
        10,
        1,
        99,
        18,
        4,
        10,
        2,
        8,
        1,
        66,
        2,
        16,
        20
      ], this.session_options, `c`)), this._matmul;
    }
    static get stft() {
      return this._stft || (this._stft = Wl([
        8,
        7,
        18,
        0,
        58,
        148,
        1,
        10,
        38,
        10,
        1,
        115,
        10,
        1,
        106,
        10,
        1,
        119,
        10,
        1,
        108,
        18,
        1,
        111,
        34,
        4,
        83,
        84,
        70,
        84,
        42,
        15,
        10,
        8,
        111,
        110,
        101,
        115,
        105,
        100,
        101,
        100,
        24,
        1,
        160,
        1,
        2,
        18,
        1,
        115,
        90,
        26,
        10,
        1,
        115,
        18,
        21,
        10,
        19,
        8,
        1,
        18,
        15,
        10,
        3,
        18,
        1,
        98,
        10,
        3,
        18,
        1,
        115,
        10,
        3,
        18,
        1,
        99,
        90,
        11,
        10,
        1,
        106,
        18,
        6,
        10,
        4,
        8,
        7,
        18,
        0,
        90,
        16,
        10,
        1,
        119,
        18,
        11,
        10,
        9,
        8,
        1,
        18,
        5,
        10,
        3,
        18,
        1,
        119,
        90,
        11,
        10,
        1,
        108,
        18,
        6,
        10,
        4,
        8,
        7,
        18,
        0,
        98,
        31,
        10,
        1,
        111,
        18,
        26,
        10,
        24,
        8,
        1,
        18,
        20,
        10,
        3,
        18,
        1,
        98,
        10,
        3,
        18,
        1,
        102,
        10,
        3,
        18,
        1,
        100,
        10,
        3,
        18,
        1,
        99,
        66,
        2,
        16,
        17
      ], this.session_options, `o`)), this._stft;
    }
    static get rfft() {
      return this._rfft || (this._rfft = Wl([
        8,
        9,
        58,
        93,
        10,
        33,
        10,
        1,
        120,
        10,
        0,
        10,
        1,
        97,
        18,
        1,
        121,
        34,
        3,
        68,
        70,
        84,
        42,
        15,
        10,
        8,
        111,
        110,
        101,
        115,
        105,
        100,
        101,
        100,
        24,
        1,
        160,
        1,
        2,
        18,
        1,
        100,
        90,
        19,
        10,
        1,
        120,
        18,
        14,
        10,
        12,
        8,
        1,
        18,
        8,
        10,
        0,
        10,
        0,
        10,
        2,
        8,
        1,
        90,
        11,
        10,
        1,
        97,
        18,
        6,
        10,
        4,
        8,
        7,
        18,
        0,
        98,
        19,
        10,
        1,
        121,
        18,
        14,
        10,
        12,
        8,
        1,
        18,
        8,
        10,
        0,
        10,
        0,
        10,
        2,
        8,
        2,
        66,
        2,
        16,
        20
      ], this.session_options, `y`)), this._rfft;
    }
    static get top_k() {
      return this._top_k || (this._top_k = Wl([
        8,
        10,
        18,
        0,
        58,
        73,
        10,
        18,
        10,
        1,
        120,
        10,
        1,
        107,
        18,
        1,
        118,
        18,
        1,
        105,
        34,
        4,
        84,
        111,
        112,
        75,
        18,
        1,
        116,
        90,
        9,
        10,
        1,
        120,
        18,
        4,
        10,
        2,
        8,
        1,
        90,
        15,
        10,
        1,
        107,
        18,
        10,
        10,
        8,
        8,
        7,
        18,
        4,
        10,
        2,
        8,
        1,
        98,
        9,
        10,
        1,
        118,
        18,
        4,
        10,
        2,
        8,
        1,
        98,
        9,
        10,
        1,
        105,
        18,
        4,
        10,
        2,
        8,
        7,
        66,
        2,
        16,
        21
      ], this.session_options, [
        `v`,
        `i`
      ])), this._top_k;
    }
    static get slice() {
      return this._slice || (this._slice = Wl([
        8,
        7,
        18,
        0,
        58,
        96,
        10,
        25,
        10,
        1,
        120,
        10,
        1,
        115,
        10,
        1,
        101,
        10,
        1,
        97,
        10,
        1,
        116,
        18,
        1,
        121,
        34,
        5,
        83,
        108,
        105,
        99,
        101,
        18,
        1,
        114,
        90,
        9,
        10,
        1,
        120,
        18,
        4,
        10,
        2,
        8,
        1,
        90,
        9,
        10,
        1,
        115,
        18,
        4,
        10,
        2,
        8,
        7,
        90,
        9,
        10,
        1,
        101,
        18,
        4,
        10,
        2,
        8,
        7,
        90,
        9,
        10,
        1,
        97,
        18,
        4,
        10,
        2,
        8,
        7,
        90,
        9,
        10,
        1,
        116,
        18,
        4,
        10,
        2,
        8,
        7,
        98,
        9,
        10,
        1,
        121,
        18,
        4,
        10,
        2,
        8,
        1,
        66,
        2,
        16,
        13
      ], this.session_options, `y`)), this._slice;
    }
  }, __publicField(_f2, "session_options", {}), _f2), Kl = Object.freeze({
    auto: `auto`,
    gpu: `gpu`,
    cpu: `cpu`,
    wasm: `wasm`,
    webgpu: `webgpu`,
    cuda: `cuda`,
    dml: `dml`,
    coreml: `coreml`,
    webnn: `webnn`,
    "webnn-npu": `webnn-npu`,
    "webnn-gpu": `webnn-gpu`,
    "webnn-cpu": `webnn-cpu`
  }), ql = M.IS_NODE_ENV ? `cpu` : `wasm`;
  function Jl(e2, t2, { warn: n2 } = {}) {
    return e2 ? typeof e2 == `string` ? e2 : e2.hasOwnProperty(t2) ? e2[t2] : (n2 && n2(`device not specified for "${t2}". Using the default device (${ql}).`), ql) : ql;
  }
  var Yl = /* @__PURE__ */ (function() {
    let e2;
    return async function() {
      if (e2 === void 0) {
        if (!M.IS_WEBGPU_AVAILABLE) e2 = false;
        else try {
          e2 = (await navigator.gpu.requestAdapter()).features.has(`shader-f16`);
        } catch {
          e2 = false;
        }
      }
      return e2;
    };
  })(), Xl = Object.freeze({
    auto: `auto`,
    fp32: `fp32`,
    fp16: `fp16`,
    q8: `q8`,
    int8: `int8`,
    uint8: `uint8`,
    q4: `q4`,
    bnb4: `bnb4`,
    q4f16: `q4f16`,
    q2: `q2`,
    q2f16: `q2f16`,
    q1: `q1`,
    q1f16: `q1f16`
  }), Zl = Xl.fp32, Ql = Object.freeze({
    [Kl.wasm]: Xl.q8
  }), $l = Object.freeze({
    [Xl.fp32]: ``,
    [Xl.fp16]: `_fp16`,
    [Xl.int8]: `_int8`,
    [Xl.uint8]: `_uint8`,
    [Xl.q8]: `_quantized`,
    [Xl.q4]: `_q4`,
    [Xl.q2]: `_q2`,
    [Xl.q1]: `_q1`,
    [Xl.q4f16]: `_q4f16`,
    [Xl.q2f16]: `_q2f16`,
    [Xl.q1f16]: `_q1f16`,
    [Xl.bnb4]: `_bnb4`
  });
  function eu(e2, t2, n2, { configDtype: r2 = null, warn: i2 } = {}) {
    let a2, o2 = false;
    e2 && typeof e2 != `string` ? e2.hasOwnProperty(t2) ? a2 = e2[t2] : (a2 = null, o2 = true) : a2 = e2;
    let s2;
    if (a2 === Xl.auto) {
      if (r2) {
        let e3 = typeof r2 == `string` ? r2 : r2 == null ? void 0 : r2[t2];
        if (e3 && e3 !== Xl.auto && Xl.hasOwnProperty(e3)) return e3;
      }
      s2 = Ql[n2] ?? Zl;
    } else s2 = a2 && Xl.hasOwnProperty(a2) ? a2 : Ql[n2] ?? Zl;
    return o2 && i2 && i2(`dtype not specified for "${t2}". Using the default dtype (${s2}) for this device (${n2}).`), s2;
  }
  var tu = Object.freeze({
    float32: Float32Array,
    float16: typeof Float16Array < `u` ? Float16Array : Uint16Array,
    float64: Float64Array,
    string: Array,
    int8: Int8Array,
    uint8: Uint8Array,
    int16: Int16Array,
    uint16: Uint16Array,
    int32: Int32Array,
    uint32: Uint32Array,
    int64: BigInt64Array,
    uint64: BigUint64Array,
    bool: Uint8Array,
    uint4: Uint8Array,
    int4: Int8Array
  }), W = class e2 {
    constructor(...e3) {
      __publicField(this, "ort_tensor");
      return this.ort_tensor = Vl(e3[0]) ? e3[0] : new Sr(e3[0], e3[1], e3[2]), new Proxy(this, {
        get: (e4, t2) => {
          if (typeof t2 == `string`) {
            let n2 = Number(t2);
            if (Number.isInteger(n2)) return e4._getitem(n2);
          }
          return e4[t2];
        },
        set: (e4, t2, n2) => e4[t2] = n2
      });
    }
    get dims() {
      return this.ort_tensor.dims;
    }
    set dims(e3) {
      this.ort_tensor.dims = e3;
    }
    get type() {
      return this.ort_tensor.type;
    }
    get data() {
      return this.ort_tensor.data;
    }
    get size() {
      return this.ort_tensor.size;
    }
    get location() {
      return this.ort_tensor.location;
    }
    dispose() {
      this.ort_tensor.dispose();
    }
    *[Symbol.iterator]() {
      let [e3, ...t2] = this.dims;
      if (t2.length > 0) {
        let n2 = t2.reduce((e4, t3) => e4 * t3);
        for (let r2 = 0; r2 < e3; ++r2) yield this._subarray(r2, n2, t2);
      } else yield* this.data;
    }
    _getitem(t2) {
      let [n2, ...r2] = this.dims;
      if (t2 = pu(t2, n2), r2.length > 0) {
        let e3 = r2.reduce((e4, t3) => e4 * t3);
        return this._subarray(t2, e3, r2);
      }
      return new e2(this.type, [
        this.data[t2]
      ], r2);
    }
    _subarray(t2, n2, r2) {
      let i2 = t2 * n2, a2 = (t2 + 1) * n2, o2 = `subarray` in this.data ? this.data.subarray(i2, a2) : this.data.slice(i2, a2);
      return new e2(this.type, o2, r2);
    }
    item() {
      let e3 = this.data;
      if (e3.length !== 1) throw Error(`a Tensor with ${e3.length} elements cannot be converted to Scalar`);
      return e3[0];
    }
    tolist() {
      return nu(this.data, this.dims);
    }
    sigmoid() {
      return this.clone().sigmoid_();
    }
    sigmoid_() {
      let e3 = this.data;
      for (let t2 = 0; t2 < e3.length; ++t2) e3[t2] = 1 / (1 + Math.exp(-e3[t2]));
      return this;
    }
    map(e3) {
      return this.clone().map_(e3);
    }
    map_(e3) {
      let t2 = this.data;
      for (let n2 = 0; n2 < t2.length; ++n2) t2[n2] = e3(t2[n2], n2, t2);
      return this;
    }
    mul(e3) {
      return this.clone().mul_(e3);
    }
    mul_(e3) {
      let t2 = this.data;
      for (let n2 = 0; n2 < t2.length; ++n2) t2[n2] *= e3;
      return this;
    }
    div(e3) {
      return this.clone().div_(e3);
    }
    div_(e3) {
      let t2 = this.data;
      for (let n2 = 0; n2 < t2.length; ++n2) t2[n2] /= e3;
      return this;
    }
    add(e3) {
      return this.clone().add_(e3);
    }
    add_(e3) {
      let t2 = this.data;
      for (let n2 = 0; n2 < t2.length; ++n2) t2[n2] += e3;
      return this;
    }
    sub(e3) {
      return this.clone().sub_(e3);
    }
    sub_(e3) {
      let t2 = this.data;
      for (let n2 = 0; n2 < t2.length; ++n2) t2[n2] -= e3;
      return this;
    }
    remainder(e3) {
      return this.clone().remainder_(e3);
    }
    remainder_(e3) {
      let t2 = this.data, n2 = t2 instanceof BigInt64Array || t2 instanceof BigUint64Array ? BigInt(e3) : Number(e3);
      if ((n2 === 0 || n2 === 0n) && (this.type.includes(`int`) || this.type === `bool`)) throw RangeError(`Division by zero`);
      if (n2 < 0 && (this.type.startsWith(`uint`) || this.type === `bool`)) throw RangeError(`Negative divisors are not supported for unsigned or boolean tensors`);
      for (let e4 = 0; e4 < t2.length; ++e4) {
        let r2 = t2[e4] % n2;
        t2[e4] = r2 < 0 && n2 > 0 || r2 > 0 && n2 < 0 ? r2 + n2 : r2;
      }
      return this;
    }
    clone() {
      return new e2(this.type, this.data.slice(), this.dims.slice());
    }
    slice(...t2) {
      let n2 = [], r2 = [];
      for (let e3 = 0; e3 < this.dims.length; ++e3) {
        let i3 = t2[e3];
        if (i3 == null) r2.push([
          0,
          this.dims[e3]
        ]), n2.push(this.dims[e3]);
        else if (typeof i3 == `number`) i3 = pu(i3, this.dims[e3], e3), r2.push([
          i3,
          i3 + 1
        ]);
        else if (Array.isArray(i3) && i3.length === 2) {
          let [t3, a3] = i3;
          if (t3 = t3 === null ? 0 : pu(t3, this.dims[e3], e3, false), a3 = a3 === null ? this.dims[e3] : pu(a3, this.dims[e3], e3, false), t3 > a3) throw Error(`Invalid slice: ${i3}`);
          let o3 = [
            Math.max(t3, 0),
            Math.min(a3, this.dims[e3])
          ];
          r2.push(o3), n2.push(o3[1] - o3[0]);
        } else throw Error(`Invalid slice: ${i3}`);
      }
      let i2 = r2.map(([e3, t3]) => t3 - e3), a2 = i2.reduce((e3, t3) => e3 * t3), o2 = this.data, s2 = new o2.constructor(a2), c2 = this.stride(), l2 = true;
      for (let e3 = 1; e3 < i2.length; ++e3) if (r2[e3][0] !== 0 || r2[e3][1] !== this.dims[e3]) {
        l2 = false;
        break;
      }
      if (l2) {
        let e3 = r2[0][0] * c2[0], t3 = r2[0][1] * c2[0];
        if (ArrayBuffer.isView(o2)) s2.set(o2.subarray(e3, t3));
        else if (Array.isArray(o2)) {
          let n3 = o2.slice(e3, t3);
          for (let e4 = 0; e4 < n3.length; ++e4) s2[e4] = n3[e4];
        } else throw Error(`Unsupported data type for slicing`);
      } else for (let e3 = 0; e3 < a2; ++e3) {
        let t3 = 0;
        for (let n3 = i2.length - 1, a3 = e3; n3 >= 0; --n3) {
          let e4 = i2[n3];
          t3 += (a3 % e4 + r2[n3][0]) * c2[n3], a3 = Math.floor(a3 / e4);
        }
        s2[e3] = o2[t3];
      }
      return new e2(this.type, s2, n2);
    }
    permute(...e3) {
      return ru(this, e3);
    }
    transpose(...e3) {
      return this.permute(...e3);
    }
    sum(e3 = null, t2 = false) {
      return this.norm(1, e3, t2);
    }
    norm(t2 = `fro`, n2 = null, r2 = false) {
      if (t2 === `fro`) t2 = 2;
      else if (typeof t2 == `string`) throw Error(`Unsupported norm: ${t2}`);
      let i2 = this.data, a2 = i2 instanceof BigInt64Array || i2 instanceof BigUint64Array;
      if (a2 && t2 !== 1) throw Error(`Expected a floating point tensor as input. Got ${this.type}`);
      let o2, s2;
      if (a2 ? (o2 = (e3, t3) => e3 + t3, s2 = 0n) : (o2 = (e3, n3) => e3 + n3 ** t2, s2 = 0), n2 === null) {
        let n3 = i2.reduce(o2, s2);
        return t2 !== 1 && (n3 **= 1 / t2), new e2(this.type, [
          n3
        ], []);
      }
      let [c2, l2, u2] = gu(o2, this, n2, r2);
      if (t2 !== 1) for (let e3 = 0; e3 < l2.length; ++e3) l2[e3] = l2[e3] ** (1 / t2);
      return new e2(c2, l2, u2);
    }
    normalize_(e3 = 2, t2 = 1) {
      t2 = pu(t2, this.dims.length);
      let n2 = this.norm(e3, t2, true), r2 = this.data, i2 = n2.data;
      for (let e4 = 0; e4 < r2.length; ++e4) {
        let n3 = 0;
        for (let r3 = this.dims.length - 1, i3 = e4, a2 = 1; r3 >= 0; --r3) {
          let e5 = this.dims[r3];
          if (r3 !== t2) {
            let t3 = i3 % e5;
            n3 += t3 * a2, a2 *= this.dims[r3];
          }
          i3 = Math.floor(i3 / e5);
        }
        r2[e4] /= i2[n3];
      }
      return this;
    }
    normalize(e3 = 2, t2 = 1) {
      return this.clone().normalize_(e3, t2);
    }
    stride() {
      return yu(this.dims);
    }
    squeeze(t2 = null) {
      return new e2(this.type, this.data, du(this.dims, t2));
    }
    squeeze_(e3 = null) {
      return this.dims = du(this.dims, e3), this;
    }
    unsqueeze(t2) {
      return new e2(this.type, this.data, fu(this.dims, t2));
    }
    unsqueeze_(e3) {
      return this.dims = fu(this.dims, e3), this;
    }
    flatten_(e3 = 0, t2 = -1) {
      t2 = (t2 + this.dims.length) % this.dims.length;
      let n2 = this.dims.slice(0, e3), r2 = this.dims.slice(e3, t2 + 1), i2 = this.dims.slice(t2 + 1);
      return this.dims = [
        ...n2,
        r2.reduce((e4, t3) => e4 * t3, 1),
        ...i2
      ], this;
    }
    flatten(e3 = 0, t2 = -1) {
      return this.clone().flatten_(e3, t2);
    }
    view(...t2) {
      let n2 = -1;
      for (let e3 = 0; e3 < t2.length; ++e3) if (t2[e3] === -1) {
        if (n2 !== -1) throw Error(`Only one dimension can be inferred`);
        n2 = e3;
      }
      let r2 = this.data;
      if (n2 !== -1) {
        let e3 = t2.reduce((e4, t3, r3) => r3 === n2 ? e4 : e4 * t3, 1);
        t2[n2] = r2.length / e3;
      }
      return new e2(this.type, r2, t2);
    }
    neg_() {
      let e3 = this.data;
      for (let t2 = 0; t2 < e3.length; ++t2) e3[t2] = -e3[t2];
      return this;
    }
    neg() {
      return this.clone().neg_();
    }
    gt(t2) {
      let n2 = new Uint8Array(this.data.length), r2 = this.data;
      for (let e3 = 0; e3 < r2.length; ++e3) n2[e3] = +(r2[e3] > t2);
      return new e2(`bool`, n2, this.dims);
    }
    lt(t2) {
      let n2 = new Uint8Array(this.data.length), r2 = this.data;
      for (let e3 = 0; e3 < r2.length; ++e3) n2[e3] = +(r2[e3] < t2);
      return new e2(`bool`, n2, this.dims);
    }
    clamp_(e3, t2) {
      let n2 = this.data;
      for (let r2 = 0; r2 < n2.length; ++r2) n2[r2] = Math.min(Math.max(n2[r2], e3), t2);
      return this;
    }
    clamp(e3, t2) {
      return this.clone().clamp_(e3, t2);
    }
    round_() {
      let e3 = this.data;
      for (let t2 = 0; t2 < e3.length; ++t2) e3[t2] = Math.round(e3[t2]);
      return this;
    }
    round() {
      return this.clone().round_();
    }
    mean(e3 = null, t2 = false) {
      return vu(this, e3, t2);
    }
    min(t2 = null, n2 = false) {
      if (t2 === null) {
        let t3 = ul(this.data)[0];
        return new e2(this.type, [
          t3
        ], []);
      }
      let [r2, i2, a2] = gu((e3, t3) => Math.min(e3, t3), this, t2, n2, 1 / 0);
      return new e2(r2, i2, a2);
    }
    max(t2 = null, n2 = false) {
      if (t2 === null) {
        let t3 = dl(this.data)[0];
        return new e2(this.type, [
          t3
        ], []);
      }
      let [r2, i2, a2] = gu((e3, t3) => Math.max(e3, t3), this, t2, n2, -1 / 0);
      return new e2(r2, i2, a2);
    }
    argmin(t2 = null, n2 = false) {
      if (t2 !== null) throw Error("`dim !== null` not yet implemented.");
      let r2 = ul(this.data)[1];
      return new e2(`int64`, [
        BigInt(r2)
      ], []);
    }
    argmax(t2 = null, n2 = false) {
      if (t2 !== null) throw Error("`dim !== null` not yet implemented.");
      let r2 = dl(this.data)[1];
      return new e2(`int64`, [
        BigInt(r2)
      ], []);
    }
    repeat(...t2) {
      if (t2.length < this.dims.length) throw Error(`Number of dimensions of repeat dims (${t2.length}) cannot be smaller than number of dimensions of tensor (${this.dims.length})`);
      if (t2.every((e3) => e3 === 1)) {
        if (t2.length === this.dims.length) return this.clone();
        let n3 = t2.length - this.dims.length, r3 = Array(n3).fill(1).concat(this.dims);
        return new e2(this.type, this.data.slice(), r3);
      }
      let n2 = t2.length - this.dims.length, r2 = Array(n2).fill(1).concat(this.dims), i2 = r2.map((e3, n3) => e3 * t2[n3]), a2 = i2.reduce((e3, t3) => e3 * t3, 1), o2 = this.data, s2 = new o2.constructor(a2), c2 = yu(r2), l2 = yu(i2);
      for (let e3 = 0; e3 < a2; ++e3) {
        let t3 = e3, n3 = 0;
        for (let e4 = 0; e4 < i2.length; ++e4) {
          let i3 = Math.floor(t3 / l2[e4]);
          t3 %= l2[e4];
          let a3 = i3 % r2[e4];
          n3 += a3 * c2[e4];
        }
        s2[e3] = o2[n3];
      }
      return new e2(this.type, s2, i2);
    }
    tile(...e3) {
      if (e3.length < this.dims.length) {
        let t2 = this.dims.length - e3.length;
        e3 = Array(t2).fill(1).concat(e3);
      }
      return this.repeat(...e3);
    }
    to(t2) {
      if (this.type === t2) return this;
      if (!tu.hasOwnProperty(t2)) throw Error(`Unsupported type: ${t2}`);
      let n2, r2 = [
        `int64`,
        `uint64`
      ].includes(this.type), i2 = [
        `int64`,
        `uint64`
      ].includes(t2);
      if (r2 && !i2) n2 = Number;
      else if (!r2 && i2) n2 = [
        `float16`,
        `float32`,
        `float64`
      ].includes(this.type) ? (e3) => BigInt(Math.floor(e3)) : BigInt;
      else if (this.type === `float16` && t2 == `float32` && this.data instanceof Uint16Array) return new e2(t2, bl(this.data), this.dims);
      return new e2(t2, tu[t2].from(this.data, n2), this.dims);
    }
  };
  function nu(e2, t2) {
    let n2 = e2.length;
    if (n2 !== (t2.length === 0 ? 1 : t2.reduce((e3, t3) => e3 * t3))) throw Error(`cannot reshape array of size ${n2} into shape (${t2})`);
    let r2 = e2;
    for (let e3 = t2.length - 1; e3 >= 0; e3--) r2 = r2.reduce((n3, r3) => {
      let i2 = n3[n3.length - 1];
      return i2.length < t2[e3] ? i2.push(r3) : n3.push([
        r3
      ]), n3;
    }, [
      []
    ]);
    return r2[0];
  }
  function ru(e2, t2) {
    let [n2, r2] = sl(e2.data, e2.dims, t2);
    return new W(e2.type, n2, r2);
  }
  function iu(e2, [t2, n2], r2 = `bilinear`, i2 = false) {
    let a2 = e2.dims.at(-3) ?? 1, o2 = e2.dims.at(-2), s2 = e2.dims.at(-1), c2 = ol(e2.data, [
      a2,
      o2,
      s2
    ], [
      t2,
      n2
    ], r2, i2);
    return new W(e2.type, c2, [
      a2,
      t2,
      n2
    ]);
  }
  async function au(e2, { size: t2 = null, mode: n2 = `bilinear` } = {}) {
    if (e2.dims.length !== 4) throw Error("`interpolate_4d` currently only supports 4D input.");
    if (!t2) throw Error("`interpolate_4d` requires a `size` argument.");
    let r2;
    if (t2.length === 2) r2 = [
      ...e2.dims.slice(0, 2),
      ...t2
    ];
    else if (t2.length === 3) r2 = [
      e2.dims[0],
      ...t2
    ];
    else if (t2.length === 4) r2 = t2;
    else throw Error("`size` must be of length 2, 3, or 4.");
    let i2;
    if (n2 === `nearest`) i2 = await Gl.nearest_interpolate_4d;
    else if (n2 === `bilinear`) i2 = await Gl.bilinear_interpolate_4d;
    else if (n2 === `bicubic`) i2 = await Gl.bicubic_interpolate_4d;
    else throw Error(`Unsupported mode: ${n2}`);
    let a2 = new W(`int64`, new BigInt64Array(r2.map(BigInt)), [
      r2.length
    ]);
    return await i2({
      x: e2,
      s: a2
    });
  }
  async function ou(e2, t2) {
    return await (await Gl.matmul)({
      a: e2,
      b: t2
    });
  }
  async function su(e2, t2) {
    let n2 = await Gl.top_k;
    return t2 = t2 == null ? e2.dims.at(-1) : Math.min(t2, e2.dims.at(-1)), await n2({
      x: e2,
      k: new W(`int64`, [
        BigInt(t2)
      ], [
        1
      ])
    });
  }
  var cu = (e2) => new W(`int64`, e2, [
    e2.length
  ]);
  async function lu(e2, t2, n2, r2, i2) {
    return await (await Gl.slice)({
      x: e2,
      s: cu(t2),
      e: cu(n2),
      a: cu(r2),
      t: cu(i2 ?? Array(r2.length).fill(1))
    });
  }
  function uu(e2, t2) {
    let n2 = e2.data, r2 = t2.data, i2 = [
      e2.dims[0],
      e2.dims[2]
    ], a2 = new n2.constructor(i2[0] * i2[1]), [o2, s2, c2] = e2.dims, l2 = 0;
    for (let e3 = 0; e3 < o2; ++e3) {
      let t3 = e3 * c2 * s2;
      for (let i3 = 0; i3 < c2; ++i3) {
        let o3 = 0, u2 = 0, d2 = e3 * s2, f2 = t3 + i3;
        for (let e4 = 0; e4 < s2; ++e4) {
          let t4 = Number(r2[d2 + e4]);
          u2 += t4, o3 += n2[f2 + e4 * c2] * t4;
        }
        let p2 = o3 / u2;
        a2[l2++] = p2;
      }
    }
    return new W(e2.type, a2, i2);
  }
  function du(e2, t2) {
    return e2 = e2.slice(), t2 === null ? e2 = e2.filter((e3) => e3 !== 1) : typeof t2 == `number` ? e2[t2] === 1 && e2.splice(t2, 1) : Array.isArray(t2) && (e2 = e2.filter((e3, n2) => e3 !== 1 || !t2.includes(n2))), e2;
  }
  function fu(e2, t2) {
    return t2 = pu(t2, e2.length + 1), e2 = e2.slice(), e2.splice(t2, 0, 1), e2;
  }
  function pu(e2, t2, n2 = null, r2 = true) {
    if (e2 < -t2 || e2 >= t2) {
      if (r2) throw Error(`IndexError: index ${e2} is out of bounds for dimension${n2 === null ? `` : ` ` + n2} with size ${t2}`);
      return e2 < -t2 ? 0 : t2;
    }
    return e2 < 0 && (e2 = (e2 % t2 + t2) % t2), e2;
  }
  function mu(e2, t2 = 0) {
    t2 = pu(t2, e2[0].dims.length);
    let n2 = e2[0].dims.slice();
    n2[t2] = e2.reduce((e3, n3) => e3 + n3.dims[t2], 0);
    let r2 = n2.reduce((e3, t3) => e3 * t3, 1), i2 = new e2[0].data.constructor(r2), a2 = e2[0].type;
    if (t2 === 0) {
      let t3 = 0;
      for (let n3 of e2) {
        let e3 = n3.data;
        i2.set(e3, t3), t3 += e3.length;
      }
    } else {
      let r3 = 0;
      for (let a3 = 0; a3 < e2.length; ++a3) {
        let { data: o2, dims: s2 } = e2[a3];
        for (let e3 = 0; e3 < o2.length; ++e3) {
          let a4 = 0;
          for (let i3 = s2.length - 1, o3 = e3, c2 = 1; i3 >= 0; --i3) {
            let e4 = s2[i3], l2 = o3 % e4;
            i3 === t2 && (l2 += r3), a4 += l2 * c2, c2 *= n2[i3], o3 = Math.floor(o3 / e4);
          }
          i2[a4] = o2[e3];
        }
        r3 += s2[t2];
      }
    }
    return new W(a2, i2, n2);
  }
  function hu(e2, t2 = 0) {
    return mu(e2.map((e3) => e3.unsqueeze(t2)), t2);
  }
  function gu(e2, t2, n2, r2 = false, i2 = null) {
    let a2 = t2.data, o2 = t2.dims;
    n2 = pu(n2, o2.length);
    let s2 = o2.slice();
    s2[n2] = 1;
    let c2 = new a2.constructor(a2.length / o2[n2]);
    i2 !== null && c2.fill(i2);
    for (let t3 = 0; t3 < a2.length; ++t3) {
      let r3 = 0;
      for (let e3 = o2.length - 1, i3 = t3, a3 = 1; e3 >= 0; --e3) {
        let t4 = o2[e3];
        if (e3 !== n2) {
          let n3 = i3 % t4;
          r3 += n3 * a3, a3 *= s2[e3];
        }
        i3 = Math.floor(i3 / t4);
      }
      c2[r3] = e2(c2[r3], a2[t3], t3, r3);
    }
    return r2 || s2.splice(n2, 1), [
      t2.type,
      c2,
      s2
    ];
  }
  function _u(e2, t2 = null, n2 = 1, r2 = false) {
    let i2 = e2.data, a2 = e2.dims;
    if (t2 === null) {
      let t3 = i2.reduce((e3, t4) => e3 + t4, 0) / i2.length, r3 = Math.sqrt(i2.reduce((e3, n3) => e3 + (n3 - t3) ** 2, 0) / (i2.length - n2)), a3 = new W(e2.type, [
        t3
      ], []);
      return [
        new W(e2.type, [
          r3
        ], []),
        a3
      ];
    }
    t2 = pu(t2, a2.length);
    let o2 = vu(e2, t2, r2), s2 = o2.data, [c2, l2, u2] = gu((e3, t3, n3, r3) => e3 + (t3 - s2[r3]) ** 2, e2, t2, r2);
    for (let e3 = 0; e3 < l2.length; ++e3) l2[e3] = Math.sqrt(l2[e3] / (a2[t2] - n2));
    return [
      new W(c2, l2, u2),
      o2
    ];
  }
  function vu(e2, t2 = null, n2 = false) {
    let r2 = e2.dims, i2 = e2.data;
    if (t2 === null) {
      let t3 = i2.reduce((e3, t4) => e3 + t4, 0);
      return new W(e2.type, [
        t3 / i2.length
      ], []);
    }
    t2 = pu(t2, r2.length);
    let [a2, o2, s2] = gu((e3, t3) => e3 + t3, e2, t2, n2);
    if (r2[t2] !== 1) for (let e3 = 0; e3 < o2.length; ++e3) o2[e3] /= r2[t2];
    return new W(a2, o2, s2);
  }
  function yu(e2) {
    let t2 = Array(e2.length);
    for (let n2 = e2.length - 1, r2 = 1; n2 >= 0; --n2) t2[n2] = r2, r2 *= e2[n2];
    return t2;
  }
  function bu(e2, t2, n2, r2) {
    return new W(n2, new r2(e2.reduce((e3, t3) => e3 * t3, 1)).fill(t2), e2);
  }
  function xu(e2, t2) {
    let n2, r2;
    if (typeof t2 == `number`) n2 = `float32`, r2 = Float32Array;
    else if (typeof t2 == `bigint`) n2 = `int64`, r2 = BigInt64Array;
    else if (typeof t2 == `boolean`) n2 = `bool`, r2 = Uint8Array;
    else throw Error(`Unsupported data type: ${typeof t2}`);
    return bu(e2, t2, n2, r2);
  }
  function Su(e2, t2) {
    return xu(e2.dims, t2);
  }
  function Cu(e2) {
    return bu(e2, 1n, `int64`, BigInt64Array);
  }
  function wu(e2) {
    return Cu(e2.dims);
  }
  function Tu(e2) {
    return bu(e2, 0n, `int64`, BigInt64Array);
  }
  function Eu(e2) {
    return Tu(e2.dims);
  }
  function Du(e2) {
    let t2 = e2.reduce((e3, t3) => e3 * t3, 1);
    return new W(`float32`, Float32Array.from({
      length: t2
    }, () => Sc.gauss()), e2);
  }
  function Ou(e2, t2) {
    if (e2.dims.length !== 2) throw Error(`The tensor must have 2 dimensions`);
    if (e2.dims.at(-1) % 8 != 0) throw Error(`The last dimension of the tensor must be a multiple of 8`);
    if (![
      `binary`,
      `ubinary`
    ].includes(t2)) throw Error(`The precision must be either 'binary' or 'ubinary'`);
    let n2 = t2 === `binary`, r2 = n2 ? `int8` : `uint8`, i2 = n2 ? Int8Array : Uint8Array, a2 = e2.data, o2 = new i2(a2.length / 8);
    for (let e3 = 0; e3 < a2.length; ++e3) {
      let t3 = +(a2[e3] > 0), r3 = Math.floor(e3 / 8), i3 = e3 % 8;
      o2[r3] |= t3 << 7 - i3, n2 && i3 === 0 && (o2[r3] -= 128);
    }
    return new W(r2, o2, [
      e2.dims[0],
      e2.dims[1] / 8
    ]);
  }
  async function ku(e2) {
    if (!e2) throw Error(`modelId is required for get_tokenizer_files`);
    return (await Jc(e2, `tokenizer_config.json`, {})).exists ? [
      `tokenizer.json`,
      `tokenizer_config.json`
    ] : [];
  }
  async function Au(e2, t2) {
    let n2 = await ku(e2);
    return await Promise.all(n2.map((n3) => al(e2, n3, true, t2)));
  }
  function ju(e2) {
    let t2 = e2.dims;
    switch (t2.length) {
      case 1:
        return e2.tolist();
      case 2:
        if (t2[0] !== 1) throw Error("Unable to decode tensor with `batch size !== 1`. Use `tokenizer.batch_decode(...)` for batched inputs.");
        return e2.tolist()[0];
      default:
        throw Error(`Expected tensor to have 1-2 dimensions, got ${t2.length}.`);
    }
  }
  var Mu = [
    `bos_token`,
    `eos_token`,
    `unk_token`,
    `sep_token`,
    `pad_token`,
    `cls_token`,
    `mask_token`
  ];
  function Nu(e2, t2, n2, r2) {
    for (let i2 of Object.keys(e2)) {
      let a2 = t2 - e2[i2].length, o2 = n2(i2), s2 = Array(a2).fill(o2);
      e2[i2] = r2 === `right` ? oi(e2[i2], s2) : oi(s2, e2[i2]);
    }
  }
  function Pu(e2, t2) {
    for (let n2 of Object.keys(e2)) e2[n2].length = t2;
  }
  function Fu(e2, ...t2) {
    for (let n2 of t2) {
      if (!Object.hasOwn(e2, n2)) continue;
      let t3 = e2[n2];
      if (t3) {
        if (typeof t3 == `object`) {
          if (t3.__type === `AddedToken`) return t3.content;
          throw Error(`Unknown token: ${t3}`);
        }
        return t3;
      }
    }
    return null;
  }
  function Iu(e2) {
    let t2 = [];
    for (let n2 of e2.get_added_tokens_decoder().values()) n2.special && t2.push(n2);
    return t2;
  }
  var G = class extends ei {
    constructor(e2, t2) {
      super();
      __publicField(this, "return_token_type_ids", false);
      __publicField(this, "padding_side", `right`);
      if (this._tokenizerJSON = e2, this._tokenizerConfig = t2, this._tokenizer = new To(e2, t2), this.config = t2, this.padding_side = t2.padding_side ?? this.padding_side, this.mask_token = Fu(t2, `mask_token`), this.mask_token_id = this._tokenizer.token_to_id(this.mask_token), this.pad_token = Fu(t2, `pad_token`, `eos_token`), this.pad_token_id = this._tokenizer.token_to_id(this.pad_token), this.sep_token = Fu(t2, `sep_token`), this.sep_token_id = this._tokenizer.token_to_id(this.sep_token), this.unk_token = Fu(t2, `unk_token`), this.unk_token_id = this._tokenizer.token_to_id(this.unk_token), this.bos_token = Fu(t2, `bos_token`), this.bos_token_id = this._tokenizer.token_to_id(this.bos_token), this.eos_token = Fu(t2, `eos_token`), this.eos_token_id = this._tokenizer.token_to_id(this.eos_token), this.chat_template = t2.chat_template ?? null, Array.isArray(this.chat_template)) {
        let e3 = /* @__PURE__ */ Object.create(null);
        for (let { name: t3, template: n3 } of this.chat_template) {
          if (typeof t3 != `string` || typeof n3 != `string`) throw Error(`Chat template must be a list of objects with "name" and "template" properties`);
          e3[t3] = n3;
        }
        this.chat_template = e3;
      }
      this._compiled_template_cache = /* @__PURE__ */ new Map();
      let n2 = Iu(this._tokenizer);
      this.all_special_ids = n2.map((e3) => e3.id), this.all_special_tokens = n2.map((e3) => e3.content);
    }
    static async from_pretrained(e2, { progress_callback: t2 = null, config: n2 = null, cache_dir: r2 = null, local_files_only: i2 = false, revision: a2 = `main` } = {}) {
      let o2 = await Au(e2, {
        progress_callback: t2,
        config: n2,
        cache_dir: r2,
        local_files_only: i2,
        revision: a2
      });
      return new this(...o2);
    }
    get_vocab() {
      return this._tokenizer.get_vocab();
    }
    get model_max_length() {
      return this._tokenizerConfig.model_max_length ?? 1 / 0;
    }
    get add_eos_token() {
      return this._tokenizerConfig.add_eos_token;
    }
    get add_bos_token() {
      return this._tokenizerConfig.add_bos_token;
    }
    convert_tokens_to_ids(e2) {
      return typeof e2 == `string` ? this._tokenizer.token_to_id(e2) : e2.map((e3) => this._tokenizer.token_to_id(e3));
    }
    _call(e2, t2 = {}) {
      let { text_pair: n2 = null, add_special_tokens: r2 = true, padding: i2 = false, return_token_type_ids: a2 = null } = t2, { truncation: o2 = null, max_length: s2 = null } = t2, c2 = t2.return_tensor ?? true, l2 = Array.isArray(e2), u2;
      if (l2) {
        if (e2.length === 0) throw Error(`text array must be non-empty`);
        if (n2 !== null) {
          if (!Array.isArray(n2)) throw Error(`text_pair must also be an array`);
          if (e2.length !== n2.length) throw Error(`text and text_pair must have the same length`);
          u2 = e2.map((e3, t3) => this._encode_plus(e3, {
            text_pair: n2[t3],
            add_special_tokens: r2,
            return_token_type_ids: a2
          }));
        } else u2 = e2.map((e3) => this._encode_plus(e3, {
          add_special_tokens: r2,
          return_token_type_ids: a2
        }));
      } else {
        if (e2 == null) throw Error(`text may not be null or undefined`);
        if (Array.isArray(n2)) throw Error("When specifying `text_pair`, since `text` is a string, `text_pair` must also be a string (i.e., not an array).");
        u2 = [
          this._encode_plus(e2, {
            text_pair: n2,
            add_special_tokens: r2,
            return_token_type_ids: a2
          })
        ];
      }
      if (s2 === null ? s2 = this.model_max_length : o2 === null && (i2 === true ? (P.warn("`max_length` is ignored when `padding: true` and there is no truncation strategy. To pad to max length, use `padding: 'max_length'`."), s2 = this.model_max_length) : i2 === false && (P.warn("Truncation was not explicitly activated but `max_length` is provided a specific value, please use `truncation: true` to explicitly truncate examples to max length."), o2 = true)), i2 === true && (s2 = Math.min(dl(u2.map((e3) => e3.input_ids.length))[0], s2 ?? 1 / 0)), s2 = Math.min(s2, this.model_max_length ?? 1 / 0), i2 || o2) for (let e3 = 0; e3 < u2.length; ++e3) if (u2[e3].input_ids.length === s2) continue;
      else u2[e3].input_ids.length > s2 ? o2 && Pu(u2[e3], s2) : i2 && Nu(u2[e3], s2, (e4) => e4 === `input_ids` ? this.pad_token_id : 0, this.padding_side);
      let d2 = {};
      if (c2) {
        if (!(i2 && o2) && u2.some((e4) => {
          var _a3;
          for (let t3 of Object.keys(e4)) if (e4[t3].length !== ((_a3 = u2[0][t3]) == null ? void 0 : _a3.length)) return true;
          return false;
        })) throw Error(`Unable to create tensor, you should probably activate truncation and/or padding with 'padding=true' and 'truncation=true' to have batched tensors with the same length.`);
        let e3 = [
          u2.length,
          u2[0].input_ids.length
        ];
        for (let t3 of Object.keys(u2[0])) d2[t3] = new W(`int64`, BigInt64Array.from(u2.flatMap((e4) => e4[t3]).map(BigInt)), e3);
      } else {
        for (let e3 of Object.keys(u2[0])) d2[e3] = u2.map((t3) => t3[e3]);
        if (!l2) for (let e3 of Object.keys(d2)) d2[e3] = d2[e3][0];
      }
      return d2;
    }
    _encode_text(e2) {
      return e2 === null ? null : this._tokenizer.encode(e2).tokens;
    }
    _encode_plus(e2, { text_pair: t2 = null, add_special_tokens: n2 = true, return_token_type_ids: r2 = null } = {}) {
      let { ids: i2, attention_mask: a2, token_type_ids: o2 } = this._tokenizer.encode(e2, {
        text_pair: t2,
        add_special_tokens: n2,
        return_token_type_ids: r2 ?? this.return_token_type_ids
      });
      return {
        input_ids: i2,
        attention_mask: a2,
        ...o2 ? {
          token_type_ids: o2
        } : {}
      };
    }
    tokenize(e2, { pair: t2 = null, add_special_tokens: n2 = false } = {}) {
      return this._tokenizer.tokenize(e2, {
        text_pair: t2,
        add_special_tokens: n2
      });
    }
    encode(e2, { text_pair: t2 = null, add_special_tokens: n2 = true, return_token_type_ids: r2 = null } = {}) {
      return this._tokenizer.encode(e2, {
        text_pair: t2,
        add_special_tokens: n2,
        return_token_type_ids: r2
      }).ids;
    }
    batch_decode(e2, t2 = {}) {
      return e2 instanceof W && (e2 = e2.tolist()), e2.map((e3) => this.decode(e3, t2));
    }
    decode(e2, t2 = {}) {
      if (e2 instanceof W && (e2 = ju(e2)), !Array.isArray(e2) || e2.length === 0 || !ri(e2[0])) throw Error(`token_ids must be a non-empty array of integers.`);
      return this.decode_single(e2, t2);
    }
    decode_single(e2, { skip_special_tokens: t2 = false, clean_up_tokenization_spaces: n2 = null }) {
      return this._tokenizer.decode(e2, {
        skip_special_tokens: t2,
        clean_up_tokenization_spaces: n2
      });
    }
    get_chat_template({ chat_template: e2 = null, tools: t2 = null } = {}) {
      if (this.chat_template && typeof this.chat_template == `object`) {
        let n2 = this.chat_template;
        if (e2 !== null && Object.hasOwn(n2, e2)) e2 = n2[e2];
        else if (e2 === null) {
          if (t2 !== null && `tool_use` in n2) e2 = n2.tool_use;
          else if (`default` in n2) e2 = n2.default;
          else throw Error(`This model has multiple chat templates with no default specified! Please either pass a chat template or the name of the template you wish to use to the 'chat_template' argument. Available template names are ${Object.keys(n2).sort()}.`);
        }
      } else if (e2 === null) {
        if (this.chat_template) e2 = this.chat_template;
        else throw Error(`Cannot use apply_chat_template() because tokenizer.chat_template is not set and no template argument was passed! For information about writing templates and setting the tokenizer.chat_template attribute, please see the documentation at https://huggingface.co/docs/transformers/main/en/chat_templating`);
      }
      return e2;
    }
    apply_chat_template(e2, t2 = {}) {
      let { tools: n2 = null, documents: r2 = null, chat_template: i2 = null, add_generation_prompt: a2 = false, tokenize: o2 = true, padding: s2 = false, truncation: c2 = false, max_length: l2 = null, return_tensor: u2 = true, return_dict: d2 = true, tokenizer_kwargs: f2 = {}, ...p2 } = t2;
      if (i2 = this.get_chat_template({
        chat_template: i2,
        tools: n2
      }), typeof i2 != `string`) throw Error(`chat_template must be a string, but got ${typeof i2}`);
      let m2 = this._compiled_template_cache.get(i2);
      m2 === void 0 && (m2 = new gc(i2), this._compiled_template_cache.set(i2, m2));
      let h2 = /* @__PURE__ */ Object.create(null);
      for (let e3 of Mu) {
        let t3 = Fu(this.config, e3);
        t3 && (h2[e3] = t3);
      }
      let g2 = m2.render({
        messages: e2,
        add_generation_prompt: a2,
        tools: n2,
        documents: r2,
        ...h2,
        ...p2
      });
      if (o2) {
        let e3 = this._call(g2, {
          add_special_tokens: false,
          padding: s2,
          truncation: c2,
          max_length: l2,
          return_tensor: u2,
          ...f2
        });
        return d2 ? e3 : e3.input_ids;
      }
      return g2;
    }
  };
  function Lu(e2, t2, n2, r2) {
    var _a3;
    if (!(`language_codes` in e2) || !Array.isArray(e2.language_codes)) throw Error("Tokenizer must have `language_codes` attribute set and it should be an array of language ids.");
    if (!(`languageRegex` in e2) || !(e2.languageRegex instanceof RegExp)) throw Error("Tokenizer must have `languageRegex` attribute set and it should be a regular expression.");
    if (!(`lang_to_token` in e2) || typeof e2.lang_to_token != `function`) throw Error("Tokenizer must have `lang_to_token` attribute set and it should be a function.");
    let i2 = r2.src_lang, a2 = r2.tgt_lang;
    if (!e2.language_codes.includes(a2)) throw Error(`Target language code "${a2}" is not valid. Must be one of: {${e2.language_codes.join(`, `)}}`);
    if (i2 !== void 0) {
      if (!e2.language_codes.includes(i2)) throw Error(`Source language code "${i2}" is not valid. Must be one of: {${e2.language_codes.join(`, `)}}`);
      let t3 = (_a3 = e2._tokenizer.post_processor) == null ? void 0 : _a3.config;
      if (t3 && `single` in t3) {
        for (let n3 of t3.single) if (`SpecialToken` in n3 && e2.languageRegex.test(n3.SpecialToken.id)) {
          n3.SpecialToken.id = e2.lang_to_token(i2);
          break;
        }
      }
    }
    return r2.forced_bos_token_id = e2._tokenizer.token_to_id(e2.lang_to_token(a2)), e2._call(t2, n2);
  }
  var Ru = {};
  wr(Ru, {
    AlbertTokenizer: () => zu,
    AutoTokenizer: () => K,
    BartTokenizer: () => Bu,
    BertTokenizer: () => Vu,
    BlenderbotSmallTokenizer: () => Hu,
    BlenderbotTokenizer: () => Uu,
    BloomTokenizer: () => Wu,
    CLIPTokenizer: () => Ku,
    CamembertTokenizer: () => Gu,
    CodeGenTokenizer: () => Ju,
    CodeLlamaTokenizer: () => qu,
    CohereAsrTokenizer: () => Xu,
    CohereTokenizer: () => Yu,
    ConvBertTokenizer: () => Zu,
    DebertaTokenizer: () => $u,
    DebertaV2Tokenizer: () => Qu,
    DistilBertTokenizer: () => ed,
    ElectraTokenizer: () => td,
    EsmTokenizer: () => nd,
    FalconTokenizer: () => rd,
    GPT2Tokenizer: () => od,
    GPTNeoXTokenizer: () => ad,
    GemmaTokenizer: () => id,
    HerbertTokenizer: () => sd,
    LlamaTokenizer: () => cd,
    M2M100Tokenizer: () => ld,
    MBart50Tokenizer: () => fd,
    MBartTokenizer: () => dd,
    MPNetTokenizer: () => hd,
    MarianTokenizer: () => ud,
    MgpstrTokenizer: () => pd,
    MobileBertTokenizer: () => md,
    NllbTokenizer: () => gd,
    NougatTokenizer: () => _d,
    PreTrainedTokenizer: () => G,
    Qwen2Tokenizer: () => vd,
    RoFormerTokenizer: () => bd,
    RobertaTokenizer: () => yd,
    SiglipTokenizer: () => xd,
    SpeechT5Tokenizer: () => Sd,
    SqueezeBertTokenizer: () => Cd,
    T5Tokenizer: () => wd,
    TokenizersBackend: () => G,
    VitsTokenizer: () => Ed,
    Wav2Vec2CTCTokenizer: () => Dd,
    WhisperTokenizer: () => Pd,
    XLMRobertaTokenizer: () => Fd,
    XLMTokenizer: () => Id
  });
  var zu = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "return_token_type_ids", true);
    }
  }, Bu = class extends G {
  }, Vu = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "return_token_type_ids", true);
    }
  }, Hu = class extends G {
  }, Uu = class extends G {
  }, Wu = class extends G {
  }, Gu = class extends G {
  }, Ku = class extends G {
  }, qu = class extends G {
  }, Ju = class extends G {
  }, Yu = class extends G {
  }, Xu = class extends G {
  }, Zu = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "return_token_type_ids", true);
    }
  }, Qu = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "return_token_type_ids", true);
    }
  }, $u = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "return_token_type_ids", true);
    }
  }, ed = class extends G {
  }, td = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "return_token_type_ids", true);
    }
  }, nd = class extends G {
  }, rd = class extends G {
  }, id = class extends G {
  }, ad = class extends G {
  }, od = class extends G {
  }, sd = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "return_token_type_ids", true);
    }
  }, cd = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "padding_side", `left`);
    }
  }, ld = class extends G {
    constructor(e2, t2) {
      super(e2, t2), this.languageRegex = /^__[a-z]{2,3}__$/, this.language_codes = this.all_special_tokens.filter((e3) => this.languageRegex.test(e3)).map((e3) => e3.slice(2, -2)), this.lang_to_token = (e3) => `__${e3}__`;
    }
    _build_translation_inputs(e2, t2, n2) {
      return Lu(this, e2, t2, n2);
    }
  }, ud = class extends G {
    constructor(e2, t2) {
      super(e2, t2), this.languageRegex = /^(>>\w+<<)\s*/g, this.supported_language_codes = Array.from(this.get_vocab().keys()).filter((e3) => this.languageRegex.test(e3)), P.warn('WARNING: `MarianTokenizer` is not yet supported by Hugging Face\'s "fast" tokenizers library. Therefore, you may experience slightly inaccurate results.');
    }
    _encode_text(e2) {
      if (e2 === null) return null;
      let [t2, ...n2] = e2.trim().split(this.languageRegex);
      if (n2.length === 0) return super._encode_text(t2);
      if (n2.length === 2) {
        let [e3, t3] = n2;
        return this.supported_language_codes.includes(e3) || P.warn(`Unsupported language code "${e3}" detected, which may lead to unexpected behavior. Should be one of: ${JSON.stringify(this.supported_language_codes)}`), oi([
          e3
        ], super._encode_text(t3));
      }
    }
  }, dd = class extends G {
    constructor(e2, t2) {
      super(e2, t2), this.languageRegex = /^[a-z]{2}_[A-Z]{2}$/, this.language_codes = this.all_special_tokens.filter((e3) => this.languageRegex.test(e3)).map((e3) => e3), this.lang_to_token = (e3) => e3;
    }
    _build_translation_inputs(e2, t2, n2) {
      return Lu(this, e2, t2, n2);
    }
  }, fd = class extends dd {
  }, pd = class extends G {
  }, md = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "return_token_type_ids", true);
    }
  }, hd = class extends G {
  }, gd = class extends G {
    constructor(e2, t2) {
      super(e2, t2), this.languageRegex = /^[a-z]{3}_[A-Z][a-z]{3}$/, this.language_codes = this.all_special_tokens.filter((e3) => this.languageRegex.test(e3)), this.lang_to_token = (e3) => e3;
    }
    _build_translation_inputs(e2, t2, n2) {
      return Lu(this, e2, t2, n2);
    }
  }, _d = class extends G {
  }, vd = class extends G {
  }, yd = class extends G {
  }, bd = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "return_token_type_ids", true);
    }
  }, xd = class extends G {
  }, Sd = class extends G {
  }, Cd = class extends G {
    constructor() {
      super(...arguments);
      __publicField(this, "return_token_type_ids", true);
    }
  }, wd = class extends G {
  }, Td = class extends fo {
    decode_chain(e2) {
      let t2 = ``;
      for (let n2 = 1; n2 < e2.length; n2 += 2) t2 += e2[n2];
      return [
        t2
      ];
    }
  }, Ed = class extends G {
    constructor(e2, t2) {
      super(e2, t2), this._tokenizer.decoder = new Td({
        type: `VitsDecoder`
      });
    }
  }, Dd = class extends G {
  }, Od = [
    [
      `en`,
      `english`
    ],
    [
      `zh`,
      `chinese`
    ],
    [
      `de`,
      `german`
    ],
    [
      `es`,
      `spanish`
    ],
    [
      `ru`,
      `russian`
    ],
    [
      `ko`,
      `korean`
    ],
    [
      `fr`,
      `french`
    ],
    [
      `ja`,
      `japanese`
    ],
    [
      `pt`,
      `portuguese`
    ],
    [
      `tr`,
      `turkish`
    ],
    [
      `pl`,
      `polish`
    ],
    [
      `ca`,
      `catalan`
    ],
    [
      `nl`,
      `dutch`
    ],
    [
      `ar`,
      `arabic`
    ],
    [
      `sv`,
      `swedish`
    ],
    [
      `it`,
      `italian`
    ],
    [
      `id`,
      `indonesian`
    ],
    [
      `hi`,
      `hindi`
    ],
    [
      `fi`,
      `finnish`
    ],
    [
      `vi`,
      `vietnamese`
    ],
    [
      `he`,
      `hebrew`
    ],
    [
      `uk`,
      `ukrainian`
    ],
    [
      `el`,
      `greek`
    ],
    [
      `ms`,
      `malay`
    ],
    [
      `cs`,
      `czech`
    ],
    [
      `ro`,
      `romanian`
    ],
    [
      `da`,
      `danish`
    ],
    [
      `hu`,
      `hungarian`
    ],
    [
      `ta`,
      `tamil`
    ],
    [
      `no`,
      `norwegian`
    ],
    [
      `th`,
      `thai`
    ],
    [
      `ur`,
      `urdu`
    ],
    [
      `hr`,
      `croatian`
    ],
    [
      `bg`,
      `bulgarian`
    ],
    [
      `lt`,
      `lithuanian`
    ],
    [
      `la`,
      `latin`
    ],
    [
      `mi`,
      `maori`
    ],
    [
      `ml`,
      `malayalam`
    ],
    [
      `cy`,
      `welsh`
    ],
    [
      `sk`,
      `slovak`
    ],
    [
      `te`,
      `telugu`
    ],
    [
      `fa`,
      `persian`
    ],
    [
      `lv`,
      `latvian`
    ],
    [
      `bn`,
      `bengali`
    ],
    [
      `sr`,
      `serbian`
    ],
    [
      `az`,
      `azerbaijani`
    ],
    [
      `sl`,
      `slovenian`
    ],
    [
      `kn`,
      `kannada`
    ],
    [
      `et`,
      `estonian`
    ],
    [
      `mk`,
      `macedonian`
    ],
    [
      `br`,
      `breton`
    ],
    [
      `eu`,
      `basque`
    ],
    [
      `is`,
      `icelandic`
    ],
    [
      `hy`,
      `armenian`
    ],
    [
      `ne`,
      `nepali`
    ],
    [
      `mn`,
      `mongolian`
    ],
    [
      `bs`,
      `bosnian`
    ],
    [
      `kk`,
      `kazakh`
    ],
    [
      `sq`,
      `albanian`
    ],
    [
      `sw`,
      `swahili`
    ],
    [
      `gl`,
      `galician`
    ],
    [
      `mr`,
      `marathi`
    ],
    [
      `pa`,
      `punjabi`
    ],
    [
      `si`,
      `sinhala`
    ],
    [
      `km`,
      `khmer`
    ],
    [
      `sn`,
      `shona`
    ],
    [
      `yo`,
      `yoruba`
    ],
    [
      `so`,
      `somali`
    ],
    [
      `af`,
      `afrikaans`
    ],
    [
      `oc`,
      `occitan`
    ],
    [
      `ka`,
      `georgian`
    ],
    [
      `be`,
      `belarusian`
    ],
    [
      `tg`,
      `tajik`
    ],
    [
      `sd`,
      `sindhi`
    ],
    [
      `gu`,
      `gujarati`
    ],
    [
      `am`,
      `amharic`
    ],
    [
      `yi`,
      `yiddish`
    ],
    [
      `lo`,
      `lao`
    ],
    [
      `uz`,
      `uzbek`
    ],
    [
      `fo`,
      `faroese`
    ],
    [
      `ht`,
      `haitian creole`
    ],
    [
      `ps`,
      `pashto`
    ],
    [
      `tk`,
      `turkmen`
    ],
    [
      `nn`,
      `nynorsk`
    ],
    [
      `mt`,
      `maltese`
    ],
    [
      `sa`,
      `sanskrit`
    ],
    [
      `lb`,
      `luxembourgish`
    ],
    [
      `my`,
      `myanmar`
    ],
    [
      `bo`,
      `tibetan`
    ],
    [
      `tl`,
      `tagalog`
    ],
    [
      `mg`,
      `malagasy`
    ],
    [
      `as`,
      `assamese`
    ],
    [
      `tt`,
      `tatar`
    ],
    [
      `haw`,
      `hawaiian`
    ],
    [
      `ln`,
      `lingala`
    ],
    [
      `ha`,
      `hausa`
    ],
    [
      `ba`,
      `bashkir`
    ],
    [
      `jw`,
      `javanese`
    ],
    [
      `su`,
      `sundanese`
    ]
  ], kd = new Map(Od), Ad = new Map([
    ...Od.map(([e2, t2]) => [
      t2,
      e2
    ]),
    [
      `burmese`,
      `my`
    ],
    [
      `valencian`,
      `ca`
    ],
    [
      `flemish`,
      `nl`
    ],
    [
      `haitian`,
      `ht`
    ],
    [
      `letzeburgesch`,
      `lb`
    ],
    [
      `pushto`,
      `ps`
    ],
    [
      `panjabi`,
      `pa`
    ],
    [
      `moldavian`,
      `ro`
    ],
    [
      `moldovan`,
      `ro`
    ],
    [
      `sinhalese`,
      `si`
    ],
    [
      `castilian`,
      `es`
    ]
  ]);
  function jd(e2) {
    e2 = e2.toLowerCase();
    let t2 = Ad.get(e2);
    if (t2 === void 0) {
      let n2 = e2.match(/^<\|([a-z]{2})\|>$/);
      if (n2 && (e2 = n2[1]), kd.has(e2)) t2 = e2;
      else {
        let t3 = e2.length === 2 ? kd.keys() : kd.values();
        throw Error(`Language "${e2}" is not supported. Must be one of: ${JSON.stringify(Array.from(t3))}`);
      }
    }
    return t2;
  }
  var Md = RegExp(`^[\\p{P}\\u0021-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E]+$`, `gu`), Nd = 0.1, Pd = class extends G {
    get timestamp_begin() {
      return this._tokenizer.token_to_id(`<|notimestamps|>`) + 1;
    }
    _decode_asr(e2, { return_timestamps: t2 = false, return_language: n2 = false, time_precision: r2 = null, force_full_sequences: i2 = true } = {}) {
      if (r2 === null) throw Error(`Must specify time_precision`);
      let a2 = null, o2 = t2 === `word`;
      function s2() {
        return {
          language: a2,
          timestamp: [
            null,
            null
          ],
          text: ``
        };
      }
      let c2 = [], l2 = s2(), u2 = 0, d2 = this.timestamp_begin, f2 = d2 + 1500, p2 = [], m2 = [], h2 = false, g2 = null, _2 = new Set(this.all_special_ids);
      for (let n3 of e2) {
        let e3 = n3.tokens, i3 = o2 ? n3.token_timestamps : null, v3 = null, y3 = d2;
        if (`stride` in n3) {
          let [t3, i4, a3] = n3.stride;
          if (u2 -= i4, g2 = t3 - a3, i4 && (y3 = i4 / r2 + d2), a3) for (let t4 = e3.length - 1; t4 >= 0; --t4) {
            let n4 = Number(e3[t4]);
            if (n4 >= d2) {
              if (v3 !== null && (n4 - d2) * r2 < g2) break;
              v3 = n4;
            }
          }
        }
        let b2 = [], x2 = [];
        for (let n4 = 0; n4 < e3.length; ++n4) {
          let g3 = Number(e3[n4]);
          if (_2.has(g3)) {
            let e4 = this.decode([
              g3
            ]), n5 = kd.get(e4.slice(2, -2));
            if (n5 !== void 0) {
              if (a2 !== null && n5 !== a2 && !t2) {
                p2.push(b2);
                let e5 = this.findLongestCommonSequence(p2)[0], t3 = this.decode(e5);
                l2.text = t3, c2.push(l2), p2 = [], b2 = [], l2 = s2();
              }
              a2 = l2.language = n5;
            }
          } else if (g3 >= d2 && g3 <= f2) {
            let e4 = _l((g3 - d2) * r2 + u2, 2);
            if (v3 !== null && g3 >= v3) h2 = true;
            else if (h2 || p2.length > 0 && g3 < y3) h2 = false;
            else if (l2.timestamp[0] === null) l2.timestamp[0] = e4;
            else if (e4 !== l2.timestamp[0]) {
              l2.timestamp[1] = e4, p2.push(b2), o2 && m2.push(x2);
              let [t3, n5] = this.findLongestCommonSequence(p2, m2), r3 = this.decode(t3);
              if (l2.text = r3, o2 && (l2.words = this.collateWordTimestamps(t3, n5, a2), l2.words.length > 0 && l2.timestamp[1] !== null)) for (let e5 of l2.words) e5.timestamp[1] > l2.timestamp[1] && l2.timestamp[1] >= e5.timestamp[0] && (e5.timestamp[1] = l2.timestamp[1]);
              c2.push(l2), p2 = [], b2 = [], m2 = [], x2 = [], l2 = s2();
            }
          } else if (b2.push(g3), o2) {
            let e4 = _l(i3[n4] + u2, 2), t3;
            if (n4 + 1 < i3.length) {
              t3 = _l(i3[n4 + 1] + u2, 2);
              let a3 = this.decode([
                g3
              ]);
              Md.test(a3) && (t3 = _l(Math.min(e4 + r2, t3), 2));
            } else t3 = null;
            x2.push([
              e4,
              t3
            ]);
          }
        }
        if (`stride` in n3) {
          let [e4, t3, r3] = n3.stride;
          u2 += e4 - r3;
        }
        b2.length > 0 ? (p2.push(b2), o2 && m2.push(x2)) : p2.every((e4) => e4.length === 0) && (l2 = s2(), p2 = [], b2 = [], m2 = [], x2 = []);
      }
      if (p2.length > 0) {
        if (i2 && t2) throw Error(`Whisper did not predict an ending timestamp, which can happen if audio is cut off in the middle of a word. Also make sure WhisperTimeStampLogitsProcessor was used during generation.`);
        let [e3, n3] = this.findLongestCommonSequence(p2, m2), r3 = this.decode(e3);
        l2.text = r3, o2 && (l2.words = this.collateWordTimestamps(e3, n3, a2)), c2.push(l2);
      }
      let v2 = /* @__PURE__ */ Object.create(null), y2 = c2.map((e3) => e3.text).join(``);
      if (t2 || n2) {
        for (let e3 = 0; e3 < c2.length; ++e3) {
          let r3 = c2[e3];
          t2 || delete r3.timestamp, n2 || delete r3.language;
        }
        if (o2) {
          let e3 = [];
          for (let t3 of c2) for (let n3 of t3.words) e3.push(n3);
          v2 = {
            chunks: e3
          };
        } else v2 = {
          chunks: c2
        };
      }
      return [
        y2,
        v2
      ];
    }
    findLongestCommonSequence(e2, t2 = null) {
      let n2 = e2[0], r2 = n2.length, i2 = [], a2 = Array.isArray(t2) && t2.length > 0, o2 = a2 ? [] : null, s2 = a2 ? t2[0] : null;
      for (let c2 = 1; c2 < e2.length; ++c2) {
        let l2 = e2[c2], u2 = 0, d2 = [
          r2,
          r2,
          0,
          0
        ], f2 = l2.length;
        for (let e3 = 1; e3 < r2 + f2; ++e3) {
          let i3 = Math.max(0, r2 - e3), o3 = Math.min(r2, r2 + f2 - e3), p3 = n2.slice(i3, o3), m3 = Math.max(0, e3 - r2), h3 = Math.min(f2, e3), g3 = l2.slice(m3, h3);
          if (p3.length !== g3.length) throw Error("There is a bug within whisper `decode_asr` function, please report it. Dropping to prevent bad inference.");
          let _3;
          _3 = a2 ? p3.filter((e4, n3) => e4 === g3[n3] && s2[i3 + n3][0] - Nd <= t2[c2][m3 + n3][0]).length : p3.filter((e4, t3) => e4 === g3[t3]).length;
          let v3 = e3 / 1e4, y2 = _3 / e3 + v3;
          _3 > 1 && y2 > u2 && (u2 = y2, d2 = [
            i3,
            o3,
            m3,
            h3
          ]);
        }
        let [p2, m2, h2, g2] = d2, _2 = Math.floor((m2 + p2) / 2), v2 = Math.floor((g2 + h2) / 2);
        if (a2 && u2 === 0 && r2 > 0) {
          let e3 = s2[r2 - 1][0], n3 = t2[c2].findIndex((t3) => t3[0] >= e3);
          v2 = n3 === -1 ? l2.length : n3;
        }
        i2.push(...n2.slice(0, _2)), n2 = l2.slice(v2), r2 = n2.length, a2 && (o2.push(...s2.slice(0, _2)), s2 = t2[c2].slice(v2));
      }
      return i2.push(...n2), a2 ? (o2.push(...s2), [
        i2,
        o2
      ]) : [
        i2,
        []
      ];
    }
    collateWordTimestamps(e2, t2, n2) {
      let [r2, i2, a2] = this.combineTokensIntoWords(e2, n2), o2 = [];
      for (let e3 = 0; e3 < r2.length; ++e3) {
        let n3 = a2[e3];
        o2.push({
          text: r2[e3],
          timestamp: [
            t2[n3.at(0)][0],
            t2[n3.at(-1)][1]
          ]
        });
      }
      return o2;
    }
    combineTokensIntoWords(e2, t2, n2 = `"'\u201C\xA1\xBF([{-`, r2 = `"'.\u3002,\uFF0C!\uFF01?\uFF1F:\uFF1A\u201D)]}\u3001`) {
      t2 ?? (t2 = `english`);
      let i2, a2, o2;
      return [
        `chinese`,
        `japanese`,
        `thai`,
        `lao`,
        `myanmar`
      ].includes(t2) ? [i2, a2, o2] = this.splitTokensOnUnicode(e2) : [i2, a2, o2] = this.splitTokensOnSpaces(e2), this.mergePunctuations(i2, a2, o2, n2, r2);
    }
    decode(e2, t2) {
      let n2;
      return (t2 == null ? void 0 : t2.decode_with_timestamps) ? (e2 instanceof W && (e2 = ju(e2)), n2 = this.decodeWithTimestamps(e2, t2)) : n2 = super.decode(e2, t2), n2;
    }
    decodeWithTimestamps(e2, t2) {
      let n2 = (t2 == null ? void 0 : t2.time_precision) ?? 0.02, r2 = this.all_special_ids.at(-1) + 1, i2 = [
        []
      ];
      for (let t3 of e2) if (t3 = Number(t3), t3 >= r2) {
        let e3 = ((t3 - r2) * n2).toFixed(2);
        i2.push(`<|${e3}|>`), i2.push([]);
      } else i2[i2.length - 1].push(t3);
      return i2 = i2.map((e3) => typeof e3 == `string` ? e3 : super.decode(e3, t2)), i2.join(``);
    }
    splitTokensOnUnicode(e2) {
      let t2 = this.decode(e2, {
        decode_with_timestamps: true
      }), n2 = [], r2 = [], i2 = [], a2 = [], o2 = [], s2 = 0;
      for (let c2 = 0; c2 < e2.length; ++c2) {
        let l2 = e2[c2];
        a2.push(l2), o2.push(c2);
        let u2 = this.decode(a2, {
          decode_with_timestamps: true
        });
        u2.includes(`\uFFFD`) && t2[s2 + u2.indexOf(`\uFFFD`)] !== `\uFFFD` || (n2.push(u2), r2.push(a2), i2.push(o2), a2 = [], o2 = [], s2 += u2.length);
      }
      return [
        n2,
        r2,
        i2
      ];
    }
    splitTokensOnSpaces(e2) {
      let [t2, n2, r2] = this.splitTokensOnUnicode(e2), i2 = [], a2 = [], o2 = [];
      for (let e3 = 0; e3 < t2.length; ++e3) {
        let s2 = t2[e3], c2 = n2[e3], l2 = r2[e3], u2 = c2[0] >= this._tokenizer.token_to_id(`<|endoftext|>`), d2 = s2.startsWith(` `), f2 = s2.trim(), p2 = Md.test(f2);
        if (u2 || d2 || p2 || i2.length === 0) i2.push(s2), a2.push(c2), o2.push(l2);
        else {
          let e4 = i2.length - 1;
          i2[e4] += s2, a2[e4].push(...c2), o2[e4].push(...l2);
        }
      }
      return [
        i2,
        a2,
        o2
      ];
    }
    mergePunctuations(e2, t2, n2, r2, i2) {
      let a2 = structuredClone(e2), o2 = structuredClone(t2), s2 = structuredClone(n2), c2 = a2.length - 2, l2 = a2.length - 1;
      for (; c2 >= 0; ) a2[c2].startsWith(` `) && r2.includes(a2[c2].trim()) ? (a2[l2] = a2[c2] + a2[l2], o2[l2] = oi(o2[c2], o2[l2]), s2[l2] = oi(s2[c2], s2[l2]), a2[c2] = ``, o2[c2] = [], s2[c2] = []) : l2 = c2, --c2;
      for (c2 = 0, l2 = 1; l2 < a2.length; ) !a2[c2].endsWith(` `) && i2.includes(a2[l2]) ? (a2[c2] += a2[l2], o2[c2] = oi(o2[c2], o2[l2]), s2[c2] = oi(s2[c2], s2[l2]), a2[l2] = ``, o2[l2] = [], s2[l2] = []) : c2 = l2, ++l2;
      return [
        a2.filter((e3) => e3),
        o2.filter((e3) => e3.length > 0),
        s2.filter((e3) => e3.length > 0)
      ];
    }
  }, Fd = class extends G {
  }, Id = class extends G {
    constructor(e2, t2) {
      super(e2, t2);
      __publicField(this, "return_token_type_ids", true);
      P.warn('WARNING: `XLMTokenizer` is not yet supported by Hugging Face\'s "fast" tokenizers library. Therefore, you may experience slightly inaccurate results.');
    }
  }, K = class {
    static async from_pretrained(e2, { progress_callback: t2 = null, config: n2 = null, cache_dir: r2 = null, local_files_only: i2 = false, revision: a2 = `main` } = {}) {
      var _a3;
      let [o2, s2] = await Au(e2, {
        progress_callback: t2,
        config: n2,
        cache_dir: r2,
        local_files_only: i2,
        revision: a2
      }), c2 = ((_a3 = s2.tokenizer_class) == null ? void 0 : _a3.replace(/Fast$/, ``)) ?? `PreTrainedTokenizer`, l2 = Ru[c2];
      return l2 || (l2 = (P.warn(`Unknown tokenizer class "${c2}", attempting to construct from base class.`), G)), new l2(o2, s2);
    }
  }, Ld = `https://github.com/huggingface/transformers.js/issues/new/choose`, Rd = `preprocessor_config.json`, zd = `preprocessor_config.json`, Bd = `processor_config.json`, Vd = `chat_template.jinja`, q = (_g2 = class extends ei {
    constructor(e2, t2, n2) {
      super(), this.config = e2, this.components = t2, this.chat_template = n2;
    }
    get image_processor() {
      return this.components.image_processor;
    }
    get tokenizer() {
      return this.components.tokenizer;
    }
    get feature_extractor() {
      return this.components.feature_extractor;
    }
    apply_chat_template(e2, t2 = {}) {
      if (!this.tokenizer) throw Error(`Unable to apply chat template without a tokenizer.`);
      return this.tokenizer.apply_chat_template(e2, {
        tokenize: false,
        chat_template: this.chat_template ?? void 0,
        ...t2
      });
    }
    batch_decode(...e2) {
      if (!this.tokenizer) throw Error(`Unable to decode without a tokenizer.`);
      return this.tokenizer.batch_decode(...e2);
    }
    decode(...e2) {
      if (!this.tokenizer) throw Error(`Unable to decode without a tokenizer.`);
      return this.tokenizer.decode(...e2);
    }
    async _call(e2, ...t2) {
      for (let n2 of [
        this.image_processor,
        this.feature_extractor,
        this.tokenizer
      ]) if (n2) return n2(e2, ...t2);
      throw Error(`No image processor, feature extractor, or tokenizer found.`);
    }
    static async from_pretrained(e2, t2 = {}) {
      let [n2, r2, i2] = await Promise.all([
        this.uses_processor_config ? al(e2, Bd, true, t2) : {},
        Promise.all(this.classes.filter((e3) => e3 in this).map(async (n3) => {
          let r3 = await this[n3].from_pretrained(e2, t2);
          return [
            n3.replace(/_class$/, ``),
            r3
          ];
        })).then(Object.fromEntries),
        this.uses_chat_template_file ? il(e2, Vd, true, t2) : null
      ]);
      return new this(n2, r2, i2);
    }
  }, __publicField(_g2, "classes", [
    `image_processor_class`,
    `tokenizer_class`,
    `feature_extractor_class`
  ]), __publicField(_g2, "uses_processor_config", false), __publicField(_g2, "uses_chat_template_file", false), _g2), Hd = {};
  wr(Hd, {
    ChatterboxProcessor: () => Lf,
    CohereAsrProcessor: () => zf,
    EmbeddingGemma2Processor: () => ep,
    EmbeddingGemma2VideoProcessor: () => Zf,
    Florence2Processor: () => Nm,
    Gemma3Processor: () => Pm,
    Gemma3nProcessor: () => Fm,
    Gemma4Processor: () => Xf,
    Glm46VProcessor: () => Lm,
    GraniteSpeechProcessor: () => Rm,
    GroundingDinoProcessor: () => Bm,
    Idefics3Processor: () => Wm,
    JinaCLIPProcessor: () => Km,
    Lfm2VlProcessor: () => qm,
    Lfm3VlProcessor: () => Jm,
    LlavaProcessor: () => Ym,
    MgpstrProcessor: () => Zm,
    MoonshineProcessor: () => Qm,
    OwlViTProcessor: () => $m,
    PaliGemmaProcessor: () => nh,
    Phi3VProcessor: () => ah,
    PixtralProcessor: () => oh,
    Processor: () => q,
    PyAnnoteProcessor: () => sh,
    Qwen2VLProcessor: () => Im,
    Qwen2_5_VLProcessor: () => ch,
    Qwen3VLProcessor: () => lh,
    Sam2Processor: () => dh,
    Sam2VideoProcessor: () => fh,
    SamProcessor: () => uh,
    SmolVLMProcessor: () => Wm,
    SpeechT5Processor: () => ph,
    UltravoxProcessor: () => mh,
    VLChatProcessor: () => Gm,
    VoxtralProcessor: () => yh,
    VoxtralRealtimeProcessor: () => Th,
    Wav2Vec2Processor: () => Eh,
    Wav2Vec2ProcessorWithLM: () => Dh,
    WhisperProcessor: () => Oh
  });
  var Ud = class extends ei {
    constructor(e2) {
      super(), this.config = e2;
    }
    static async from_pretrained(e2, t2 = {}) {
      let n2 = await al(e2, Rd, true, t2);
      return new this(n2);
    }
  };
  function Wd(e2, t2) {
    var _a3;
    if (!(e2 instanceof Float32Array || e2 instanceof Float64Array)) throw Error(`${t2} expects input to be a Float32Array or a Float64Array, but got ${((_a3 = e2 == null ? void 0 : e2.constructor) == null ? void 0 : _a3.name) ?? typeof e2} instead. If using the feature extractor directly, remember to use \`load_audio(url, sampling_rate)\` to obtain the raw audio data of the file/url.`);
  }
  var Gd = {};
  wr(Gd, {
    ASTFeatureExtractor: () => gf,
    ChatterboxFeatureExtractor: () => vf,
    ClapFeatureExtractor: () => yf,
    CohereAsrFeatureExtractor: () => Sf,
    DacFeatureExtractor: () => Cf,
    EncodecFeatureExtractor: () => _f,
    FeatureExtractor: () => Ud,
    Gemma3nAudioFeatureExtractor: () => wf,
    Gemma4AudioFeatureExtractor: () => Tf,
    GraniteSpeechFeatureExtractor: () => Ef,
    MoonshineFeatureExtractor: () => Df,
    ParakeetFeatureExtractor: () => xf,
    PyAnnoteFeatureExtractor: () => Of,
    SeamlessM4TFeatureExtractor: () => kf,
    SnacFeatureExtractor: () => Af,
    SpeechT5FeatureExtractor: () => jf,
    VoxtralRealtimeFeatureExtractor: () => Pf,
    Wav2Vec2FeatureExtractor: () => Mf,
    WeSpeakerFeatureExtractor: () => Nf,
    WhisperFeatureExtractor: () => Ff
  });
  var Kd = {
    fromWeb: () => {
    }
  };
  async function qd(e2, t2) {
    if (M.IS_BROWSER_ENV) {
      if (M.IS_WEBWORKER_ENV) throw Error(`Unable to save a file from a Web Worker.`);
      let n2 = URL.createObjectURL(t2), r2 = document.createElement(`a`);
      r2.href = n2, r2.download = e2, r2.click(), r2.remove(), URL.revokeObjectURL(n2);
    } else if (M.IS_FS_AVAILABLE) {
      let n2 = t2.stream();
      Kd.fromWeb(n2), Tr.createWriteStream(e2), await void 0;
    } else throw Error(`Unable to save because filesystem is disabled in this environment.`);
  }
  async function Jd(e2, t2) {
    if (typeof AudioContext > `u`) throw Error("Unable to load audio from path/URL since `AudioContext` is not available in your environment. Instead, audio data should be passed directly to the pipeline/processor. For more information and some example code, see https://huggingface.co/docs/transformers.js/guides/node-audio-processing.");
    let n2 = await (await Xc(e2)).arrayBuffer(), r2 = new AudioContext({
      sampleRate: t2
    });
    t2 === void 0 && P.warn(`No sampling rate provided, using default of ${r2.sampleRate}Hz.`);
    let i2 = await r2.decodeAudioData(n2), a2;
    if (i2.numberOfChannels === 2) {
      let e3 = Math.sqrt(2), t3 = i2.getChannelData(0), n3 = i2.getChannelData(1);
      a2 = new Float32Array(t3.length);
      for (let r3 = 0; r3 < i2.length; ++r3) a2[r3] = e3 * (t3[r3] + n3[r3]) / 2;
    } else a2 = i2.getChannelData(0);
    return a2;
  }
  async function Yd(e2, t2) {
    return await Jd(e2, t2);
  }
  function Xd(e2, t2) {
    if (e2 < 1) return new Float64Array();
    if (e2 === 1) return new Float64Array([
      1
    ]);
    let n2 = 1 - t2, r2 = 2 * Math.PI / (e2 - 1), i2 = new Float64Array(e2);
    for (let a2 = 0; a2 < e2; ++a2) i2[a2] = t2 - n2 * Math.cos(a2 * r2);
    return i2;
  }
  function Zd(e2) {
    return Xd(e2, 0.5);
  }
  function Qd(e2) {
    return Xd(e2, 0.54);
  }
  var $d = {
    htk: (e2) => 2595 * Math.log10(1 + e2 / 700),
    kaldi: (e2) => 1127 * Math.log(1 + e2 / 700),
    slaney: (e2, t2 = 1e3, n2 = 15, r2 = 27 / Math.log(6.4)) => e2 >= t2 ? n2 + Math.log(e2 / t2) * r2 : 3 * e2 / 200
  };
  function ef(e2, t2 = `htk`) {
    let n2 = $d[t2];
    if (!n2) throw Error(`mel_scale should be one of "htk", "slaney" or "kaldi".`);
    return typeof e2 == `number` ? n2(e2) : e2.map((e3) => n2(e3));
  }
  var tf = {
    htk: (e2) => 700 * (10 ** (e2 / 2595) - 1),
    kaldi: (e2) => 700 * (Math.exp(e2 / 1127) - 1),
    slaney: (e2, t2 = 1e3, n2 = 15, r2 = Math.log(6.4) / 27) => e2 >= n2 ? t2 * Math.exp(r2 * (e2 - n2)) : 200 * e2 / 3
  };
  function nf(e2, t2 = `htk`) {
    let n2 = tf[t2];
    if (!n2) throw Error(`mel_scale should be one of "htk", "slaney" or "kaldi".`);
    return typeof e2 == `number` ? n2(e2) : e2.map((e3) => n2(e3));
  }
  function rf(e2, t2) {
    let n2 = Float64Array.from({
      length: t2.length - 1
    }, (e3, n3) => t2[n3 + 1] - t2[n3]), r2 = Array.from({
      length: e2.length
    }, () => Array(t2.length));
    for (let n3 = 0; n3 < e2.length; ++n3) {
      let i3 = r2[n3];
      for (let r3 = 0; r3 < t2.length; ++r3) i3[r3] = t2[r3] - e2[n3];
    }
    let i2 = t2.length - 2, a2 = Array.from({
      length: i2
    }, () => Array(e2.length));
    for (let t3 = 0; t3 < e2.length; ++t3) {
      let e3 = r2[t3];
      for (let r3 = 0; r3 < i2; ++r3) {
        let i3 = -e3[r3] / n2[r3], o2 = e3[r3 + 2] / n2[r3 + 1];
        a2[r3][t3] = Math.max(0, Math.min(i3, o2));
      }
    }
    return a2;
  }
  function af(e2, t2, n2) {
    let r2 = (t2 - e2) / (n2 - 1);
    return Float64Array.from({
      length: n2
    }, (t3, n3) => e2 + r2 * n3);
  }
  function of(e2, t2, n2, r2, i2, a2 = null, o2 = `htk`, s2 = false) {
    if (a2 !== null && a2 !== `slaney`) throw Error(`norm must be one of null or "slaney"`);
    if (e2 < 2) throw Error(`Require num_frequency_bins: ${e2} >= 2`);
    if (n2 > r2) throw Error(`Require min_frequency: ${n2} <= max_frequency: ${r2}`);
    let c2 = af(ef(n2, o2), ef(r2, o2), t2 + 2), l2 = nf(c2, o2), u2;
    if (s2) {
      let t3 = i2 / ((e2 - 1) * 2);
      u2 = ef(Float64Array.from({
        length: e2
      }, (e3, n3) => n3 * t3), o2), l2 = c2;
    } else u2 = af(0, Math.floor(i2 / 2), e2);
    let d2 = rf(u2, l2);
    if (a2 !== null && a2 === `slaney`) for (let n3 = 0; n3 < t2; ++n3) {
      let t3 = d2[n3], r3 = 2 / (l2[n3 + 2] - l2[n3]);
      for (let n4 = 0; n4 < e2; ++n4) t3[n4] *= r3;
    }
    return d2;
  }
  function sf(e2, t2, n2) {
    let r2 = new e2.constructor(e2.length + t2 + n2), i2 = e2.length - 1;
    for (let n3 = 0; n3 < e2.length; ++n3) r2[t2 + n3] = e2[n3];
    for (let n3 = 1; n3 <= t2; ++n3) r2[t2 - n3] = e2[ci(n3, i2)];
    for (let a2 = 1; a2 <= n2; ++a2) r2[i2 + t2 + a2] = e2[ci(i2 - a2, i2)];
    return r2;
  }
  function cf(e2, t2, n2, r2, i2) {
    if (n2 <= 0) throw Error(`reference must be greater than zero`);
    if (r2 <= 0) throw Error(`min_value must be greater than zero`);
    n2 = Math.max(r2, n2);
    let a2 = Math.log10(n2);
    for (let n3 = 0; n3 < e2.length; ++n3) e2[n3] = t2 * Math.log10(Math.max(r2, e2[n3]) - a2);
    if (i2 !== null) {
      if (i2 <= 0) throw Error(`db_range must be greater than zero`);
      let t3 = dl(e2)[0] - i2;
      for (let n3 = 0; n3 < e2.length; ++n3) e2[n3] = Math.max(e2[n3], t3);
    }
    return e2;
  }
  function lf(e2, t2 = 1, n2 = 1e-5, r2 = null) {
    return cf(e2, 20, t2, n2, r2);
  }
  function uf(e2, t2 = 1, n2 = 1e-10, r2 = null) {
    return cf(e2, 10, t2, n2, r2);
  }
  async function df(e2, t2, n2, r2, { fft_length: i2 = null, power: a2 = 1, center: o2 = true, pad_mode: s2 = `reflect`, onesided: c2 = true, preemphasis: l2 = null, preemphasis_htk_flavor: u2 = true, mel_filters: d2 = null, mel_floor: f2 = 1e-10, log_mel: p2 = null, max_log_mel: m2 = null, reference: h2 = 1, min_value: g2 = 1e-10, db_range: _2 = null, remove_dc_offset: v2 = null, min_num_frames: y2 = null, max_num_frames: b2 = null, do_pad: x2 = true, transpose: S2 = false, mel_offset: C2 = 0, mel_floor_mode: w2 = `clamp` } = {}) {
    let T2 = t2.length;
    if (i2 === null && (i2 = n2), n2 > i2) throw Error(`frame_length (${n2}) may not be larger than fft_length (${i2})`);
    if (T2 !== n2) throw Error(`Length of the window (${T2}) must equal frame_length (${n2})`);
    if (r2 <= 0) throw Error(`hop_length must be greater than zero`);
    if (a2 === null && d2 !== null) throw Error("You have provided `mel_filters` but `power` is `None`. Mel spectrogram computation is not yet supported for complex-valued spectrogram. Specify `power` to fix this issue.");
    if (!u2) throw Error("`preemphasis_htk_flavor=false` is not currently supported.");
    if (o2) {
      let t3 = Math.floor(n2 / 2);
      switch (s2) {
        case `reflect`:
          e2 = sf(e2, t3, t3);
          break;
        case `constant`: {
          let n3 = new e2.constructor(e2.length + 2 * t3);
          n3.set(e2, t3), e2 = n3;
          break;
        }
        case `semicausal`: {
          let n3 = new e2.constructor(e2.length + t3);
          n3.set(e2, t3), e2 = n3;
          break;
        }
        default:
          throw Error(`pad_mode="${s2}" not implemented yet.`);
      }
    }
    let E2 = Math.floor(1 + Math.floor((e2.length - n2) / r2));
    y2 !== null && E2 < y2 && (E2 = y2);
    let ee2 = c2 ? Math.floor(i2 / 2) + 1 : i2, te2 = E2, D2 = E2;
    b2 !== null && (b2 > E2 ? x2 && (D2 = b2) : D2 = te2 = b2);
    let O2 = new hl(i2), ne2 = new Float64Array(i2), re2 = new Float64Array(O2.outputBufferSize), ie2 = new Float32Array(ee2 * D2);
    for (let i3 = 0; i3 < te2; ++i3) {
      let a3 = i3 * r2, o3 = Math.min(e2.length - a3, n2);
      o3 !== n2 && ne2.fill(0, 0, n2);
      for (let t3 = 0; t3 < o3; ++t3) ne2[t3] = e2[a3 + t3];
      if (v2) {
        let e3 = 0;
        for (let t4 = 0; t4 < o3; ++t4) e3 += ne2[t4];
        let t3 = e3 / o3;
        for (let e4 = 0; e4 < o3; ++e4) ne2[e4] -= t3;
      }
      if (l2 !== null) {
        for (let e3 = o3 - 1; e3 >= 1; --e3) ne2[e3] -= l2 * ne2[e3 - 1];
        ne2[0] *= 1 - l2;
      }
      for (let e3 = 0; e3 < t2.length; ++e3) ne2[e3] *= t2[e3];
      O2.realTransform(re2, ne2);
      for (let e3 = 0; e3 < ee2; ++e3) {
        let t3 = e3 << 1;
        ie2[e3 * D2 + i3] = re2[t3] ** 2 + re2[t3 + 1] ** 2;
      }
    }
    if (a2 !== null && a2 !== 2) {
      let e3 = a2 / 2;
      for (let t3 = 0; t3 < ie2.length; ++t3) ie2[t3] **= e3;
    }
    let ae2 = d2.length, oe2 = await ou(new W(`float32`, d2.flat(), [
      ae2,
      ee2
    ]), new W(`float32`, ie2, [
      ee2,
      D2
    ]));
    S2 && (oe2 = oe2.transpose(1, 0));
    let k2 = oe2.data;
    if (w2 === `add`) for (let e3 = 0; e3 < k2.length; ++e3) k2[e3] = C2 + k2[e3] + f2;
    else for (let e3 = 0; e3 < k2.length; ++e3) k2[e3] = C2 + Math.max(f2, k2[e3]);
    if (a2 !== null && p2 !== null) {
      let e3 = Math.min(k2.length, te2 * ae2);
      switch (p2) {
        case `log`:
          for (let t3 = 0; t3 < e3; ++t3) k2[t3] = Math.log(k2[t3]);
          break;
        case `log10`:
          for (let t3 = 0; t3 < e3; ++t3) k2[t3] = Math.log10(k2[t3]);
          break;
        case `log10_max_norm`: {
          for (let t4 = 0; t4 < e3; ++t4) k2[t4] = Math.log10(k2[t4]);
          let t3 = (m2 ?? dl(k2)[0]) - 8;
          for (let n3 = 0; n3 < e3; ++n3) k2[n3] = (Math.max(k2[n3], t3) + 4) / 4;
          break;
        }
        case `dB`:
          if (a2 === 1) lf(k2, h2, g2, _2);
          else if (a2 === 2) uf(k2, h2, g2, _2);
          else throw Error(`Cannot use log_mel option '${p2}' with power ${a2}`);
          break;
        default:
          throw Error(`log_mel must be one of null, 'log', 'log10', 'log10_max_norm', or 'dB'. Got '${p2}'`);
      }
    }
    return oe2;
  }
  function ff(e2, t2, { periodic: n2 = true, frame_length: r2 = null, center: i2 = true } = {}) {
    let a2 = n2 ? e2 + 1 : e2, o2;
    switch (t2) {
      case `boxcar`:
        o2 = new Float64Array(a2).fill(1);
        break;
      case `hann`:
      case `hann_window`:
        o2 = Zd(a2);
        break;
      case `hamming`:
        o2 = Qd(a2);
        break;
      case `povey`:
        o2 = Zd(a2).map((e3) => e3 ** 0.85);
        break;
      default:
        throw Error(`Unknown window type ${t2}.`);
    }
    if (n2 && (o2 = o2.subarray(0, e2)), r2 === null || e2 === r2) return o2;
    if (e2 > r2) throw Error(`Length of the window (${e2}) may not be larger than frame_length (${r2})`);
    let s2 = new Float64Array(r2), c2 = i2 ? Math.floor((r2 - e2) / 2) : 0;
    return s2.set(o2, c2), s2;
  }
  function pf(e2, t2) {
    let n2 = e2.reduce((e3, t3) => e3 + t3.length, 0), r2 = new ArrayBuffer(44), i2 = new DataView(r2);
    return mf(i2, 0, `RIFF`), i2.setUint32(4, 36 + n2 * 4, true), mf(i2, 8, `WAVE`), mf(i2, 12, `fmt `), i2.setUint32(16, 16, true), i2.setUint16(20, 3, true), i2.setUint16(22, 1, true), i2.setUint32(24, t2, true), i2.setUint32(28, t2 * 4, true), i2.setUint16(32, 4, true), i2.setUint16(34, 32, true), mf(i2, 36, `data`), i2.setUint32(40, n2 * 4, true), new Blob([
      r2,
      ...e2.map((e3) => e3.buffer instanceof ArrayBuffer ? new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength) : e3.slice())
    ], {
      type: `audio/wav`
    });
  }
  function mf(e2, t2, n2) {
    for (let r2 = 0; r2 < n2.length; ++r2) e2.setUint8(t2 + r2, n2.charCodeAt(r2));
  }
  var hf = class {
    constructor(e2, t2) {
      this.audio = e2, this.sampling_rate = t2;
    }
    get data() {
      if (Array.isArray(this.audio)) {
        if (this.audio.length === 0) return new Float32Array();
        if (this.audio.length === 1) return this.audio[0];
        let e2 = this.audio.reduce((e3, t3) => e3 + t3.length, 0), t2 = new Float32Array(e2), n2 = 0;
        for (let e3 of this.audio) t2.set(e3, n2), n2 += e3.length;
        return t2;
      }
      return this.audio;
    }
    toBlob() {
      let e2 = this.audio;
      return e2 instanceof Float32Array && (e2 = [
        e2
      ]), pf(e2, this.sampling_rate);
    }
    async save(e2) {
      return qd(e2, this.toBlob());
    }
  }, gf = class extends Ud {
    constructor(e2) {
      super(e2);
      let t2 = this.config.sampling_rate, n2 = of(257, this.config.num_mel_bins, 20, Math.floor(t2 / 2), t2, null, `kaldi`, true);
      this.mel_filters = n2, this.window = ff(400, `hann`, {
        periodic: false
      }), this.mean = this.config.mean, this.std = this.config.std;
    }
    async _extract_fbank_features(e2, t2) {
      return df(e2, this.window, 400, 160, {
        fft_length: 512,
        power: 2,
        center: false,
        preemphasis: 0.97,
        mel_filters: this.mel_filters,
        log_mel: `log`,
        mel_floor: 1192092955078125e-22,
        remove_dc_offset: true,
        max_num_frames: t2,
        transpose: true
      });
    }
    async _call(e2) {
      Wd(e2, `ASTFeatureExtractor`);
      let t2 = await this._extract_fbank_features(e2, this.config.max_length);
      if (this.config.do_normalize) {
        let e3 = this.std * 2, n2 = t2.data;
        for (let t3 = 0; t3 < n2.length; ++t3) n2[t3] = (n2[t3] - this.mean) / e3;
      }
      return {
        input_values: t2.unsqueeze_(0)
      };
    }
  }, _f = class extends Ud {
    async _call(e2) {
      Wd(e2, `EncodecFeatureExtractor`), e2 instanceof Float64Array && (e2 = new Float32Array(e2));
      let t2 = this.config.feature_size;
      if (e2.length % t2 !== 0) throw Error(`The length of the audio data must be a multiple of the number of channels (${t2}).`);
      let n2 = [
        1,
        t2,
        e2.length / t2
      ];
      return {
        input_values: new W(`float32`, e2, n2)
      };
    }
  }, vf = class extends Ud {
    async _call(e2) {
      Wd(e2, `ChatterboxFeatureExtractor`), e2 instanceof Float64Array && (e2 = new Float32Array(e2));
      let t2 = [
        1,
        e2.length
      ];
      return {
        input_values: new W(`float32`, e2, t2)
      };
    }
  }, yf = class extends Ud {
    constructor(e2) {
      super(e2), this.mel_filters = of(this.config.nb_frequency_bins, this.config.feature_size, this.config.frequency_min, this.config.frequency_max, this.config.sampling_rate, null, `htk`), this.mel_filters_slaney = of(this.config.nb_frequency_bins, this.config.feature_size, this.config.frequency_min, this.config.frequency_max, this.config.sampling_rate, `slaney`, `slaney`), this.window = ff(this.config.fft_window_size, `hann`);
    }
    async _get_input_mel(e2, t2, n2, r2) {
      let i2, a2 = e2.length - t2;
      if (a2 > 0) {
        if (n2 === `rand_trunc`) {
          let n3 = Math.floor(Sc.random() * (a2 + 1));
          e2 = e2.subarray(n3, n3 + t2), i2 = await this._extract_fbank_features(e2, this.mel_filters_slaney, this.config.nb_max_samples);
        } else throw Error(`Truncation strategy "${n2}" not implemented`);
      } else {
        if (a2 < 0) {
          let n3 = new Float64Array(t2);
          if (n3.set(e2), r2 === `repeat`) for (let r3 = e2.length; r3 < t2; r3 += e2.length) n3.set(e2.subarray(0, Math.min(e2.length, t2 - r3)), r3);
          else if (r2 === `repeatpad`) for (let t3 = e2.length; t3 < -a2; t3 += e2.length) n3.set(e2, t3);
          e2 = n3;
        }
        if (n2 === `fusion`) throw Error(`Truncation strategy "${n2}" not implemented`);
        i2 = await this._extract_fbank_features(e2, this.mel_filters_slaney, this.config.nb_max_samples);
      }
      return i2.unsqueeze_(0);
    }
    async _extract_fbank_features(e2, t2, n2 = null) {
      return df(e2, this.window, this.config.fft_window_size, this.config.hop_length, {
        power: 2,
        mel_filters: t2,
        log_mel: `dB`,
        max_num_frames: n2,
        do_pad: false,
        transpose: true
      });
    }
    async _call(e2, { max_length: t2 = null } = {}) {
      return Wd(e2, `ClapFeatureExtractor`), {
        input_features: (await this._get_input_mel(e2, t2 ?? this.config.nb_max_samples, this.config.truncation, this.config.padding)).unsqueeze_(0)
      };
    }
  }, bf = 1e-5, xf = class extends Ud {
    constructor(e2) {
      var _a3;
      super(e2), (_a3 = this.config).mel_filters ?? (_a3.mel_filters = of(Math.floor(1 + this.config.n_fft / 2), this.config.feature_size, 0, this.config.sampling_rate / 2, this.config.sampling_rate, `slaney`, `slaney`));
      let t2 = ff(this.config.win_length, `hann`, {
        periodic: false
      });
      this.window = new Float64Array(this.config.n_fft);
      let n2 = Math.floor((this.config.n_fft - this.config.win_length) / 2);
      this.window.set(t2, n2);
    }
    async _extract_fbank_features(e2) {
      let t2 = this.config.preemphasis;
      e2 = new Float64Array(e2);
      for (let n2 = e2.length - 1; n2 >= 1; --n2) e2[n2] -= t2 * e2[n2 - 1];
      return await df(e2, this.window, this.window.length, this.config.hop_length, {
        fft_length: this.config.n_fft,
        power: 2,
        mel_filters: this.config.mel_filters,
        log_mel: `log`,
        mel_floor: -1 / 0,
        pad_mode: `constant`,
        center: true,
        transpose: true,
        mel_offset: 2 ** -24
      });
    }
    async _call(e2) {
      Wd(e2, `ParakeetFeatureExtractor`);
      let t2 = await this._extract_fbank_features(e2), n2 = Math.floor((e2.length + Math.floor(this.config.n_fft / 2) * 2 - this.config.n_fft) / this.config.hop_length), r2 = t2.data;
      r2.fill(0, n2 * t2.dims[1]);
      let [i2, a2] = t2.dims, o2 = new Float64Array(a2), s2 = new Float64Array(a2);
      for (let e3 = 0; e3 < n2; ++e3) {
        let t3 = e3 * a2;
        for (let e4 = 0; e4 < a2; ++e4) {
          let n3 = r2[t3 + e4];
          o2[e4] += n3, s2[e4] += n3 * n3;
        }
      }
      let c2 = n2 > 1 ? n2 - 1 : 1;
      for (let e3 = 0; e3 < a2; ++e3) {
        let t3 = o2[e3] / n2, i3 = (s2[e3] - n2 * t3 * t3) / c2, l3 = 1 / (Math.sqrt(i3) + bf);
        for (let i4 = 0; i4 < n2; ++i4) {
          let n3 = i4 * a2 + e3;
          r2[n3] = (r2[n3] - t3) * l3;
        }
      }
      let l2 = new BigInt64Array(i2);
      return l2.fill(1n, 0, n2), {
        input_features: t2.unsqueeze_(0),
        attention_mask: new W(`int64`, l2, [
          1,
          i2
        ])
      };
    }
  }, Sf = class extends xf {
    _apply_dither(e2) {
      let t2 = this.config.dither ?? 0;
      if (t2 <= 0) return e2;
      let n2 = new yc(e2.length);
      for (let r2 = 0; r2 < e2.length; ++r2) e2[r2] += t2 * n2.gauss();
      return e2;
    }
    split_audio(e2) {
      let t2 = this.config.max_audio_clip_s ?? 35, n2 = this.config.overlap_chunk_second ?? 5, r2 = this.config.min_energy_window_samples ?? 1600, i2 = this.config.sampling_rate, a2 = Math.max(1, Math.round(t2 * i2)), o2 = Math.max(1, Math.round(n2 * i2));
      if (e2.length <= a2) return [
        e2
      ];
      let s2 = [], c2 = 0, l2 = e2.length;
      for (; c2 < l2; ) {
        if (c2 + a2 >= l2) {
          s2.push(e2.slice(c2, l2));
          break;
        }
        let t3 = Math.max(c2, c2 + a2 - o2), n3 = Math.min(c2 + a2, l2), i3;
        i3 = n3 <= t3 ? c2 + a2 : this._find_split_point_energy(e2, t3, n3, r2), i3 = Math.max(c2 + 1, Math.min(i3, l2)), s2.push(e2.slice(c2, i3)), c2 = i3;
      }
      return s2;
    }
    _find_split_point_energy(e2, t2, n2, r2) {
      let i2 = n2 - t2;
      if (i2 <= r2) return Math.floor((t2 + n2) / 2);
      let a2 = 1 / 0, o2 = t2, s2 = i2 - r2;
      for (let n3 = 0; n3 <= s2; n3 += r2) {
        let i3 = 0;
        for (let a3 = 0; a3 < r2; ++a3) {
          let r3 = e2[t2 + n3 + a3];
          i3 += r3 * r3;
        }
        i3 = Math.sqrt(i3 / r2), i3 < a2 && (a2 = i3, o2 = t2 + n3);
      }
      return o2;
    }
    async _call(e2) {
      Wd(e2, `CohereAsrFeatureExtractor`);
      let t2 = new Float64Array(e2);
      return this._apply_dither(t2), super._call(t2);
    }
  }, Cf = class extends _f {
  }, wf = class extends Ud {
    constructor(e2) {
      super(e2);
      let { fft_length: t2, feature_size: n2, min_frequency: r2, max_frequency: i2, sampling_rate: a2, frame_length: o2 } = this.config, s2 = of(Math.floor(1 + t2 / 2), n2, r2, i2, a2, null, `htk`, false);
      this.mel_filters = s2, this.window = ff(o2, `hann`);
    }
    async _extract_fbank_features(e2, t2) {
      return df(e2, this.window, this.config.frame_length, this.config.hop_length, {
        fft_length: this.config.fft_length,
        center: false,
        onesided: true,
        preemphasis: this.config.preemphasis,
        preemphasis_htk_flavor: this.config.preemphasis_htk_flavor,
        mel_filters: this.mel_filters,
        log_mel: `log`,
        mel_floor: this.config.mel_floor,
        remove_dc_offset: false,
        transpose: true
      });
    }
    async _call(e2, { max_length: t2 = 48e4, truncation: n2 = true, padding: r2 = true, pad_to_multiple_of: i2 = 128 } = {}) {
      if (Wd(e2, `Gemma3nAudioFeatureExtractor`), n2 && e2.length > t2 && (e2 = e2.slice(0, t2)), r2 && e2.length % i2 !== 0) {
        let t3 = i2 - e2.length % i2, n3 = new Float64Array(e2.length + t3);
        n3.set(e2), this.config.padding_value !== 0 && n3.fill(this.config.padding_value, e2.length), e2 = n3;
      }
      let a2 = await this._extract_fbank_features(e2, this.config.max_length), o2 = xu([
        1,
        a2.dims[0]
      ], true);
      return {
        input_features: a2.unsqueeze_(0),
        input_features_mask: o2
      };
    }
  }, Tf = class extends wf {
    async _extract_fbank_features(e2, t2) {
      let { frame_length: n2, hop_length: r2, fft_length: i2 } = this.config, a2 = Math.floor(n2 / 2), o2 = Math.floor((e2.length + a2 - (n2 + 1)) / r2) + 1;
      return df(e2, this.window, n2, r2, {
        fft_length: i2,
        center: true,
        pad_mode: `semicausal`,
        onesided: true,
        preemphasis: this.config.preemphasis,
        preemphasis_htk_flavor: this.config.preemphasis_htk_flavor,
        mel_filters: this.mel_filters,
        log_mel: `log`,
        mel_floor: this.config.mel_floor,
        mel_floor_mode: `add`,
        remove_dc_offset: false,
        transpose: true,
        max_num_frames: o2
      });
    }
    async _call(e2, t2 = {}) {
      Wd(e2, `Gemma4AudioFeatureExtractor`);
      let n2 = e2.length, r2 = await super._call(e2, t2), { input_features: i2 } = r2, [, a2, o2] = i2.dims, { frame_length: s2, hop_length: c2 } = this.config, l2 = Math.floor(s2 / 2), u2 = s2 + 1, d2 = new Uint8Array(n2 + l2 + (t2.pad_to_multiple_of ?? 128));
      d2.fill(1, l2, l2 + n2);
      let f2 = new Uint8Array(a2);
      for (let e3 = 0; e3 < a2; ++e3) f2[e3] = +!!d2[e3 * c2 + u2 - 1];
      let p2 = i2.data;
      for (let e3 = 0; e3 < a2; ++e3) f2[e3] || p2.fill(0, e3 * o2, (e3 + 1) * o2);
      return r2.input_features_mask = new W(`bool`, f2, [
        1,
        a2
      ]), r2;
    }
  }, Ef = class extends Ud {
    constructor(e2) {
      super(e2);
      let { n_fft: t2, win_length: n2, n_mels: r2, sample_rate: i2 } = e2.melspec_kwargs;
      this.mel_filters = of(Math.floor(1 + t2 / 2), r2, 0, i2 / 2, i2, null, `htk`);
      let a2 = ff(n2, `hann`);
      this.window = new Float64Array(t2);
      let o2 = Math.floor((t2 - n2) / 2);
      this.window.set(a2, o2);
    }
    async _call(e2) {
      Wd(e2, `GraniteSpeechFeatureExtractor`);
      let { n_fft: t2, hop_length: n2, n_mels: r2 } = this.config.melspec_kwargs, i2 = Math.floor(e2.length / n2) + 1, a2 = i2 - i2 % 2;
      return {
        input_features: (await df(e2, this.window, t2, n2, {
          power: 2,
          mel_filters: this.mel_filters,
          log_mel: `log10_max_norm`,
          transpose: true,
          max_num_frames: a2,
          do_pad: false
        })).view(-1, 2 * r2).unsqueeze_(0)
      };
    }
  }, Df = class extends Ud {
    async _call(e2) {
      Wd(e2, `MoonshineFeatureExtractor`), e2 instanceof Float64Array && (e2 = new Float32Array(e2));
      let t2 = [
        1,
        e2.length
      ];
      return {
        input_values: new W(`float32`, e2, t2)
      };
    }
  }, Of = class extends Ud {
    async _call(e2) {
      Wd(e2, `PyAnnoteFeatureExtractor`), e2 instanceof Float64Array && (e2 = new Float32Array(e2));
      let t2 = [
        1,
        1,
        e2.length
      ];
      return {
        input_values: new W(`float32`, e2, t2)
      };
    }
    samples_to_frames(e2) {
      return (e2 - this.config.offset) / this.config.step;
    }
    post_process_speaker_diarization(e2, t2) {
      let n2 = t2 / this.samples_to_frames(t2) / this.config.sampling_rate, r2 = [];
      for (let t3 of e2.tolist()) {
        let e3 = [], i2 = -1;
        for (let n3 = 0; n3 < t3.length; ++n3) {
          let [r3, a2] = dl(cl(t3[n3])), [o2, s2] = [
            n3,
            n3 + 1
          ];
          a2 === i2 ? (e3.at(-1).end = s2, e3.at(-1).score += r3) : (i2 = a2, e3.push({
            id: a2,
            start: o2,
            end: s2,
            score: r3
          }));
        }
        r2.push(e3.map(({ id: e4, start: t4, end: r3, score: i3 }) => ({
          id: e4,
          start: t4 * n2,
          end: r3 * n2,
          confidence: i3 / (r3 - t4)
        })));
      }
      return r2;
    }
  }, kf = class extends Ud {
    constructor(e2) {
      super(e2);
      let t2 = this.config.sampling_rate, n2 = of(257, this.config.num_mel_bins, 20, Math.floor(t2 / 2), t2, null, `kaldi`, true);
      this.mel_filters = n2, this.window = ff(400, `povey`, {
        periodic: false
      });
    }
    async _extract_fbank_features(e2, t2) {
      return e2 = e2.map((e3) => e3 * 32768), df(e2, this.window, 400, 160, {
        fft_length: 512,
        power: 2,
        center: false,
        preemphasis: 0.97,
        mel_filters: this.mel_filters,
        log_mel: `log`,
        mel_floor: 1192092955078125e-22,
        remove_dc_offset: true,
        max_num_frames: t2,
        transpose: true
      });
    }
    async _call(e2, { padding: t2 = true, pad_to_multiple_of: n2 = 2, do_normalize_per_mel_bins: r2 = true, return_attention_mask: i2 = true } = {}) {
      Wd(e2, `SeamlessM4TFeatureExtractor`);
      let a2 = await this._extract_fbank_features(e2, this.config.max_length);
      if (r2) {
        let [e3, t3] = a2.dims, n3 = a2.data;
        for (let r3 = 0; r3 < t3; ++r3) {
          let i3 = 0;
          for (let a4 = 0; a4 < e3; ++a4) i3 += n3[a4 * t3 + r3];
          let a3 = i3 / e3, o3 = 0;
          for (let i4 = 0; i4 < e3; ++i4) o3 += (n3[i4 * t3 + r3] - a3) ** 2;
          o3 /= e3 - 1;
          let s3 = Math.sqrt(o3 + 1e-7);
          for (let i4 = 0; i4 < e3; ++i4) {
            let e4 = i4 * t3 + r3;
            n3[e4] = (n3[e4] - a3) / s3;
          }
        }
      }
      let o2;
      if (t2) {
        let [e3, t3] = a2.dims, r3 = a2.data, s3 = e3 % n2;
        if (s3 > 0) {
          let n3 = new Float32Array(t3 * (e3 + s3));
          n3.set(r3), n3.fill(this.config.padding_value, r3.length);
          let c3 = e3 + s3;
          a2 = new W(a2.type, n3, [
            c3,
            t3
          ]), i2 && (o2 = new W(`int64`, new BigInt64Array(c3), [
            1,
            c3
          ]), o2.data.fill(1n, 0, e3));
        }
      }
      let [s2, c2] = a2.dims, l2 = this.config.stride;
      if (s2 % l2 !== 0) throw Error(`The number of frames (${s2}) must be a multiple of the stride (${l2}).`);
      let u2 = a2.view(1, Math.floor(s2 / l2), c2 * l2), d2 = {
        input_features: u2
      };
      if (i2) {
        let e3 = u2.dims[1], t3 = new BigInt64Array(e3);
        if (o2) {
          let e4 = o2.data;
          for (let n3 = 1, r3 = 0; n3 < s2; n3 += l2, ++r3) t3[r3] = e4[n3];
        } else t3.fill(1n);
        d2.attention_mask = new W(`int64`, t3, [
          1,
          e3
        ]);
      }
      return d2;
    }
  }, Af = class extends Cf {
  }, jf = class extends Ud {
  }, Mf = class extends Ud {
    _zero_mean_unit_var_norm(e2) {
      let t2 = e2.reduce((e3, t3) => e3 + t3, 0) / e2.length, n2 = e2.reduce((e3, n3) => e3 + (n3 - t2) ** 2, 0) / e2.length;
      return e2.map((e3) => (e3 - t2) / Math.sqrt(n2 + 1e-7));
    }
    async _call(e2) {
      Wd(e2, `Wav2Vec2FeatureExtractor`), e2 instanceof Float64Array && (e2 = new Float32Array(e2));
      let t2 = e2;
      this.config.do_normalize && (t2 = this._zero_mean_unit_var_norm(t2));
      let n2 = [
        1,
        t2.length
      ];
      return {
        input_values: new W(`float32`, t2, n2),
        attention_mask: new W(`int64`, new BigInt64Array(t2.length).fill(1n), n2)
      };
    }
  }, Nf = class extends Ud {
    constructor(e2) {
      super(e2);
      let t2 = this.config.sampling_rate, n2 = of(257, this.config.num_mel_bins, 20, Math.floor(t2 / 2), t2, null, `kaldi`, true);
      this.mel_filters = n2, this.window = ff(400, `hamming`, {
        periodic: false
      }), this.min_num_frames = this.config.min_num_frames;
    }
    async _extract_fbank_features(e2) {
      return e2 = e2.map((e3) => e3 * 32768), df(e2, this.window, 400, 160, {
        fft_length: 512,
        power: 2,
        center: false,
        preemphasis: 0.97,
        mel_filters: this.mel_filters,
        log_mel: `log`,
        mel_floor: 1192092955078125e-22,
        remove_dc_offset: true,
        transpose: true,
        min_num_frames: this.min_num_frames
      });
    }
    async _call(e2) {
      Wd(e2, `WeSpeakerFeatureExtractor`);
      let t2 = (await this._extract_fbank_features(e2)).unsqueeze_(0);
      if (this.config.fbank_centering_span === null) {
        let e3 = t2.mean(1).data, n2 = t2.data, [r2, i2, a2] = t2.dims;
        for (let t3 = 0; t3 < r2; ++t3) {
          let r3 = t3 * i2 * a2, o2 = t3 * a2;
          for (let t4 = 0; t4 < i2; ++t4) {
            let i3 = r3 + t4 * a2;
            for (let t5 = 0; t5 < a2; ++t5) n2[i3 + t5] -= e3[o2 + t5];
          }
        }
      }
      return {
        input_features: t2
      };
    }
  }, Pf = class extends Ud {
    constructor(e2) {
      var _a3;
      super(e2), (_a3 = this.config).mel_filters ?? (_a3.mel_filters = of(Math.floor(1 + this.config.n_fft / 2), this.config.feature_size, 0, 8e3, this.config.sampling_rate, `slaney`, `slaney`)), this.window = ff(this.config.n_fft, `hann`);
    }
    async _extract_fbank_features(e2, { center: t2 = true } = {}) {
      let { n_fft: n2, hop_length: r2, mel_filters: i2, global_log_mel_max: a2 } = this.config, o2 = Math.floor(t2 ? e2.length / r2 : (e2.length - n2) / r2);
      return await df(e2, this.window, n2, r2, {
        power: 2,
        mel_filters: i2,
        log_mel: `log10_max_norm`,
        max_log_mel: a2,
        center: t2,
        max_num_frames: o2,
        do_pad: false
      });
    }
    async _call(e2, { center: t2 = true } = {}) {
      return Wd(e2, `VoxtralRealtimeFeatureExtractor`), {
        input_features: (await this._extract_fbank_features(e2, {
          center: t2
        })).unsqueeze_(0)
      };
    }
  }, Ff = class extends Ud {
    constructor(e2) {
      var _a3;
      super(e2), (_a3 = this.config).mel_filters ?? (_a3.mel_filters = of(Math.floor(1 + this.config.n_fft / 2), this.config.feature_size, 0, 8e3, this.config.sampling_rate, `slaney`, `slaney`)), this.window = ff(this.config.n_fft, `hann`);
    }
    async _extract_fbank_features(e2) {
      return await df(e2, this.window, this.config.n_fft, this.config.hop_length, {
        power: 2,
        mel_filters: this.config.mel_filters,
        log_mel: `log10_max_norm`,
        max_num_frames: Math.min(Math.floor(e2.length / this.config.hop_length), this.config.nb_max_frames)
      });
    }
    async _call(e2, { max_length: t2 = null } = {}) {
      Wd(e2, `WhisperFeatureExtractor`);
      let n2, r2 = t2 ?? this.config.n_samples;
      return e2.length > r2 ? (e2.length > this.config.n_samples && P.warn("Attempting to extract features for audio longer than 30 seconds. If using a pipeline to extract transcript from a long audio clip, remember to specify `chunk_length_s` and/or `stride_length_s`."), n2 = e2.slice(0, r2)) : (n2 = new Float32Array(r2), n2.set(e2)), {
        input_features: (await this._extract_fbank_features(n2)).unsqueeze_(0)
      };
    }
  }, If = class {
    static async from_pretrained(e2, t2 = {}) {
      let n2 = await al(e2, Rd, true, t2), r2 = n2.feature_extractor_type, i2 = Gd[r2];
      if (!i2) throw Error(`Unknown feature_extractor_type: '${r2}'. Please report this at ${Ld}.`);
      return new i2(n2);
    }
  }, Lf = (_h2 = class extends q {
    async _call(e2, t2 = null) {
      let n2 = this.tokenizer(e2), r2 = t2 ? await this.feature_extractor(t2) : {};
      return {
        ...n2,
        ...r2
      };
    }
  }, __publicField(_h2, "tokenizer_class", K), __publicField(_h2, "feature_extractor_class", If), _h2), Rf = /* @__PURE__ */ new Set([
    `ja`,
    `zh`
  ]), zf = (_i2 = class extends q {
    get_decoder_prompt_ids(e2 = `en`) {
      let t2 = [
        `\u2581`,
        `<|startofcontext|>`,
        `<|startoftranscript|>`,
        `<|emo:undefined|>`,
        `<|${e2}|>`,
        `<|${e2}|>`,
        `<|pnc|>`,
        `<|noitn|>`,
        `<|notimestamp|>`,
        `<|nodiarize|>`
      ];
      return this.tokenizer.convert_tokens_to_ids(t2);
    }
    static join_chunks(e2, t2 = `en`) {
      let n2 = e2.filter((e3) => e3 && e3.trim());
      if (n2.length === 0) return ``;
      let r2 = Rf.has(t2) ? `` : ` `;
      return [
        n2[0].trimEnd(),
        ...n2.slice(1).map((e3) => e3.trim())
      ].join(r2);
    }
    async _call(e2) {
      return await this.feature_extractor(e2);
    }
  }, __publicField(_i2, "tokenizer_class", K), __publicField(_i2, "feature_extractor_class", If), __publicField(_i2, "uses_processor_config", true), _i2), Bf = {}, Vf, Hf, Uf;
  if (M.IS_WEB_ENV) Vf = (e2, t2) => {
    if (!self.OffscreenCanvas) throw Error(`OffscreenCanvas not supported by this environment.`);
    return new self.OffscreenCanvas(e2, t2);
  }, Uf = self.createImageBitmap, Hf = self.ImageData;
  else if (Bf) Uf = async (e2) => {
    let t2 = (await e2.metadata()).channels, { data: n2, info: r2 } = await e2.rotate().raw().toBuffer({
      resolveWithObject: true
    }), i2 = new Kf(new Uint8ClampedArray(n2), r2.width, r2.height, r2.channels);
    return t2 !== void 0 && t2 !== r2.channels && i2.convert(t2), i2;
  };
  else throw Error(`Unable to load image processing library.`);
  var Wf = {
    0: `nearest`,
    1: `lanczos`,
    2: `bilinear`,
    3: `bicubic`,
    4: `box`,
    5: `hamming`
  }, Gf = /* @__PURE__ */ new Map([
    [
      `png`,
      `image/png`
    ],
    [
      `jpg`,
      `image/jpeg`
    ],
    [
      `jpeg`,
      `image/jpeg`
    ],
    [
      `gif`,
      `image/gif`
    ]
  ]), Kf = class e2 {
    constructor(e3, t2, n2, r2) {
      this.data = e3, this.width = t2, this.height = n2, this.channels = r2;
    }
    get size() {
      return [
        this.width,
        this.height
      ];
    }
    static async read(t2) {
      if (t2 instanceof e2) return t2;
      if (typeof t2 == `string` || t2 instanceof URL) return await this.fromURL(t2);
      if (t2 instanceof Blob) return await this.fromBlob(t2);
      if (typeof HTMLCanvasElement < `u` && t2 instanceof HTMLCanvasElement || typeof OffscreenCanvas < `u` && t2 instanceof OffscreenCanvas) return this.fromCanvas(t2);
      throw Error(`Unsupported input type: ${typeof t2}`);
    }
    static fromCanvas(t2) {
      if (!M.IS_WEB_ENV) throw Error(`fromCanvas() is only supported in browser environments.`);
      let n2 = t2.getContext(`2d`).getImageData(0, 0, t2.width, t2.height).data;
      return new e2(n2, t2.width, t2.height, 4);
    }
    static async fromURL(e3) {
      let t2 = await Xc(e3);
      if (t2.status !== 200) throw Error(`Unable to read image from "${e3}" (${t2.status} ${t2.statusText})`);
      let n2 = await t2.blob();
      return this.fromBlob(n2);
    }
    static async fromBlob(e3) {
      if (M.IS_WEB_ENV) {
        let t2 = await Uf(e3), n2 = Vf(t2.width, t2.height).getContext(`2d`);
        return n2.drawImage(t2, 0, 0), new this(n2.getImageData(0, 0, t2.width, t2.height).data, t2.width, t2.height, 4);
      }
      {
        let t2 = Bf(await e3.arrayBuffer());
        return await Uf(t2);
      }
    }
    static fromTensor(t2, n2 = `CHW`) {
      if (t2.dims.length !== 3) throw Error(`Tensor should have 3 dimensions, but has ${t2.dims.length} dimensions.`);
      if (n2 === `CHW`) t2 = t2.permute(1, 2, 0);
      else if (n2 !== `HWC`) throw Error(`Unsupported channel format: ${n2}`);
      if (!(t2.data instanceof Uint8ClampedArray || t2.data instanceof Uint8Array)) throw Error(`Unsupported tensor type: ${t2.type}`);
      switch (t2.dims[2]) {
        case 1:
        case 2:
        case 3:
        case 4:
          return new e2(t2.data, t2.dims[1], t2.dims[0], t2.dims[2]);
        default:
          throw Error(`Unsupported number of channels: ${t2.dims[2]}`);
      }
    }
    grayscale() {
      if (this.channels === 1) return this;
      let e3 = new Uint8ClampedArray(this.width * this.height * 1);
      switch (this.channels) {
        case 3:
        case 4:
          for (let t2 = 0, n2 = 0; t2 < this.data.length; t2 += this.channels) {
            let r2 = this.data[t2], i2 = this.data[t2 + 1], a2 = this.data[t2 + 2];
            e3[n2++] = Math.round(0.2989 * r2 + 0.587 * i2 + 0.114 * a2);
          }
          break;
        default:
          throw Error(`Conversion failed due to unsupported number of channels: ${this.channels}`);
      }
      return this._update(e3, this.width, this.height, 1);
    }
    rgb() {
      if (this.channels === 3) return this;
      let e3 = new Uint8ClampedArray(this.width * this.height * 3);
      switch (this.channels) {
        case 1:
          for (let t2 = 0, n2 = 0; t2 < this.data.length; ++t2) e3[n2++] = this.data[t2], e3[n2++] = this.data[t2], e3[n2++] = this.data[t2];
          break;
        case 4:
          for (let t2 = 0, n2 = 0; t2 < this.data.length; t2 += 4) e3[n2++] = this.data[t2], e3[n2++] = this.data[t2 + 1], e3[n2++] = this.data[t2 + 2];
          break;
        default:
          throw Error(`Conversion failed due to unsupported number of channels: ${this.channels}`);
      }
      return this._update(e3, this.width, this.height, 3);
    }
    rgba() {
      if (this.channels === 4) return this;
      let e3 = new Uint8ClampedArray(this.width * this.height * 4);
      switch (this.channels) {
        case 1:
          for (let t2 = 0, n2 = 0; t2 < this.data.length; ++t2) e3[n2++] = this.data[t2], e3[n2++] = this.data[t2], e3[n2++] = this.data[t2], e3[n2++] = 255;
          break;
        case 3:
          for (let t2 = 0, n2 = 0; t2 < this.data.length; t2 += 3) e3[n2++] = this.data[t2], e3[n2++] = this.data[t2 + 1], e3[n2++] = this.data[t2 + 2], e3[n2++] = 255;
          break;
        default:
          throw Error(`Conversion failed due to unsupported number of channels: ${this.channels}`);
      }
      return this._update(e3, this.width, this.height, 4);
    }
    putAlpha(e3) {
      if (e3.width !== this.width || e3.height !== this.height) throw Error(`Expected mask size to be ${this.width}x${this.height}, but got ${e3.width}x${e3.height}`);
      if (e3.channels !== 1) throw Error(`Expected mask to have 1 channel, but got ${e3.channels}`);
      let t2 = this.data, n2 = e3.data, r2 = this.width * this.height;
      if (this.channels === 3) {
        let e4 = new Uint8ClampedArray(r2 * 4);
        for (let i2 = 0, a2 = 0, o2 = 0; i2 < r2; ++i2) e4[o2++] = t2[a2++], e4[o2++] = t2[a2++], e4[o2++] = t2[a2++], e4[o2++] = n2[i2];
        return this._update(e4, this.width, this.height, 4);
      }
      if (this.channels === 4) {
        for (let e4 = 0; e4 < r2; ++e4) t2[4 * e4 + 3] = n2[e4];
        return this;
      }
      throw Error(`Expected image to have 3 or 4 channels, but got ${this.channels}`);
    }
    async resize(t2, n2, { resample: r2 = 2 } = {}) {
      if (this.width === t2 && this.height === n2) return this;
      let i2 = Wf[r2] ?? r2, a2 = ii(t2), o2 = ii(n2);
      if (a2 && o2) return this;
      if (a2 ? t2 = n2 / this.height * this.width : o2 && (n2 = t2 / this.width * this.height), M.IS_WEB_ENV) {
        let r3 = this.channels, i3 = this.toCanvas(), a3 = Vf(t2, n2).getContext(`2d`);
        return a3.drawImage(i3, 0, 0, t2, n2), new e2(a3.getImageData(0, 0, t2, n2).data, t2, n2, 4).convert(r3);
      }
      {
        let e3 = this.toSharp();
        switch (i2) {
          case `box`:
          case `hamming`:
            (i2 === `box` || i2 === `hamming`) && (P.warn(`Resampling method ${i2} is not yet supported. Using bilinear instead.`), i2 = `bilinear`);
          case `nearest`:
          case `bilinear`:
          case `bicubic`:
            e3 = e3.affine([
              t2 / this.width,
              0,
              0,
              n2 / this.height
            ], {
              interpolator: i2
            });
            break;
          case `lanczos`:
            e3 = e3.resize({
              width: t2,
              height: n2,
              fit: `fill`,
              kernel: `lanczos3`
            });
            break;
          default:
            throw Error(`Resampling method ${i2} is not supported.`);
        }
        return await Uf(e3);
      }
    }
    async pad([t2, n2, r2, i2]) {
      if (t2 = Math.max(t2, 0), n2 = Math.max(n2, 0), r2 = Math.max(r2, 0), i2 = Math.max(i2, 0), t2 === 0 && n2 === 0 && r2 === 0 && i2 === 0) return this;
      if (M.IS_WEB_ENV) {
        let a2 = this.channels, o2 = this.toCanvas(), s2 = this.width + t2 + n2, c2 = this.height + r2 + i2, l2 = Vf(s2, c2).getContext(`2d`);
        return l2.drawImage(o2, 0, 0, this.width, this.height, t2, r2, this.width, this.height), new e2(l2.getImageData(0, 0, s2, c2).data, s2, c2, 4).convert(a2);
      }
      {
        let e3 = this.toSharp().extend({
          left: t2,
          right: n2,
          top: r2,
          bottom: i2
        });
        return await Uf(e3);
      }
    }
    async crop([t2, n2, r2, i2]) {
      if (t2 = Math.max(t2, 0), n2 = Math.max(n2, 0), r2 = Math.min(r2, this.width - 1), i2 = Math.min(i2, this.height - 1), t2 === 0 && n2 === 0 && r2 === this.width - 1 && i2 === this.height - 1) return this;
      let a2 = r2 - t2 + 1, o2 = i2 - n2 + 1;
      if (M.IS_WEB_ENV) {
        let r3 = this.channels, i3 = this.toCanvas(), s2 = Vf(a2, o2).getContext(`2d`);
        return s2.drawImage(i3, t2, n2, a2, o2, 0, 0, a2, o2), new e2(s2.getImageData(0, 0, a2, o2).data, a2, o2, 4).convert(r3);
      }
      {
        let e3 = this.toSharp().extract({
          left: t2,
          top: n2,
          width: a2,
          height: o2
        });
        return await Uf(e3);
      }
    }
    async center_crop(t2, n2) {
      if (this.width === t2 && this.height === n2) return this;
      let r2 = (this.width - t2) / 2, i2 = (this.height - n2) / 2;
      if (M.IS_WEB_ENV) {
        let a2 = this.channels, o2 = this.toCanvas(), s2 = Vf(t2, n2).getContext(`2d`), c2 = 0, l2 = 0, u2 = 0, d2 = 0;
        return r2 >= 0 ? c2 = r2 : u2 = -r2, i2 >= 0 ? l2 = i2 : d2 = -i2, s2.drawImage(o2, c2, l2, t2, n2, u2, d2, t2, n2), new e2(s2.getImageData(0, 0, t2, n2).data, t2, n2, 4).convert(a2);
      }
      {
        let e3 = this.toSharp();
        if (r2 >= 0 && i2 >= 0) e3 = e3.extract({
          left: Math.floor(r2),
          top: Math.floor(i2),
          width: t2,
          height: n2
        });
        else if (r2 <= 0 && i2 <= 0) {
          let a2 = Math.floor(-i2), o2 = Math.floor(-r2);
          e3 = e3.extend({
            top: a2,
            left: o2,
            right: t2 - this.width - o2,
            bottom: n2 - this.height - a2
          });
        } else {
          let a2 = [
            0,
            0
          ], o2 = 0;
          i2 < 0 ? (a2[0] = Math.floor(-i2), a2[1] = n2 - this.height - a2[0]) : o2 = Math.floor(i2);
          let s2 = [
            0,
            0
          ], c2 = 0;
          r2 < 0 ? (s2[0] = Math.floor(-r2), s2[1] = t2 - this.width - s2[0]) : c2 = Math.floor(r2), e3 = e3.extend({
            top: a2[0],
            bottom: a2[1],
            left: s2[0],
            right: s2[1]
          }).extract({
            left: c2,
            top: o2,
            width: t2,
            height: n2
          });
        }
        return await Uf(e3);
      }
    }
    async toBlob(e3 = `image/png`, t2 = 1) {
      if (!M.IS_WEB_ENV) throw Error(`toBlob() is only supported in browser environments.`);
      return await this.toCanvas().convertToBlob({
        type: e3,
        quality: t2
      });
    }
    toTensor(e3 = `CHW`) {
      let t2 = new W(`uint8`, new Uint8Array(this.data), [
        this.height,
        this.width,
        this.channels
      ]);
      if (e3 !== `HWC`) {
        if (e3 === `CHW`) t2 = t2.permute(2, 0, 1);
        else throw Error(`Unsupported channel format: ${e3}`);
      }
      return t2;
    }
    toCanvas() {
      if (!M.IS_WEB_ENV) throw Error(`toCanvas() is only supported in browser environments.`);
      let e3 = this.clone().rgba(), t2 = Vf(e3.width, e3.height), n2 = new Hf(e3.data, e3.width, e3.height);
      return t2.getContext(`2d`).putImageData(n2, 0, 0), t2;
    }
    split() {
      let { data: t2, width: n2, height: r2, channels: i2 } = this, a2 = t2.constructor, o2 = t2.length / i2, s2 = Array.from({
        length: i2
      }, () => new a2(o2));
      for (let e3 = 0; e3 < o2; ++e3) {
        let n3 = i2 * e3;
        for (let r3 = 0; r3 < i2; ++r3) s2[r3][e3] = t2[n3 + r3];
      }
      return s2.map((t3) => new e2(t3, n2, r2, 1));
    }
    _update(e3, t2, n2, r2 = null) {
      return this.data = e3, this.width = t2, this.height = n2, r2 !== null && (this.channels = r2), this;
    }
    clone() {
      return new e2(this.data.slice(), this.width, this.height, this.channels);
    }
    convert(e3) {
      if (this.channels === e3) return this;
      switch (e3) {
        case 1:
          this.grayscale();
          break;
        case 3:
          this.rgb();
          break;
        case 4:
          this.rgba();
          break;
        default:
          throw Error(`Conversion failed due to unsupported number of channels: ${this.channels}`);
      }
      return this;
    }
    async save(e3) {
      if (M.IS_WEB_ENV) {
        if (M.IS_WEBWORKER_ENV) throw Error(`Unable to save an image from a Web Worker.`);
        let t2 = e3.split(`.`).pop().toLowerCase(), n2 = Gf.get(t2) ?? `image/png`;
        return qd(e3, await this.toBlob(n2));
      }
      if (M.IS_FS_AVAILABLE) await this.toSharp().toFile(e3);
      else throw Error(`Unable to save the image because filesystem is disabled in this environment.`);
    }
    toSharp() {
      if (M.IS_WEB_ENV) throw Error(`toSharp() is only supported in server-side environments.`);
      return Bf(this.data, {
        raw: {
          width: this.width,
          height: this.height,
          channels: this.channels
        }
      });
    }
  };
  Kf.read.bind(Kf);
  function qf(e2, t2, n2, r2, i2) {
    let a2 = r2 * n2 ** 2, o2 = Math.sqrt(a2 / (e2 * t2)), s2 = i2 * n2, c2 = Math.floor(o2 * e2 / s2) * s2, l2 = Math.floor(o2 * t2 / s2) * s2;
    if (c2 === 0 && l2 === 0) throw Error(`Attempting to resize to a 0 x 0 image. Resized height should be divisible by \`pooling_kernel_size * patch_size\`=${s2}.`);
    let u2 = Math.floor(r2 / i2 ** 2) * s2;
    return c2 === 0 ? (c2 = s2, l2 = Math.min(Math.floor(t2 / e2) * s2, u2)) : l2 === 0 && (l2 = s2, c2 = Math.min(Math.floor(e2 / t2) * s2, u2)), [
      c2,
      l2
    ];
  }
  function Jf(e2, t2, n2, r2, i2, a2, o2) {
    let s2 = Math.floor(t2 / i2), c2 = Math.floor(n2 / i2), l2 = s2 * c2, u2 = i2 * i2 * r2, d2 = new Float32Array(a2 * u2), f2 = 0;
    for (let t3 = 0; t3 < s2; ++t3) for (let a3 = 0; a3 < c2; ++a3) for (let o3 = 0; o3 < i2; ++o3) {
      let s3 = (t3 * i2 + o3) * n2 * r2 + a3 * i2 * r2;
      for (let t4 = 0; t4 < i2; ++t4) {
        let n3 = s3 + t4 * r2;
        for (let t5 = 0; t5 < r2; ++t5) d2[f2++] = e2[n3 + t5];
      }
    }
    let p2 = new BigInt64Array(a2 * 2).fill(-1n), m2 = 0;
    for (let e3 = 0; e3 < s2; ++e3) for (let t3 = 0; t3 < c2; ++t3) p2[m2++] = BigInt(t3), p2[m2++] = BigInt(e3);
    return {
      patches: new W(`float32`, d2, [
        a2,
        u2
      ]),
      positions: new W(`int64`, p2, [
        a2,
        2
      ]),
      num_soft_tokens: Math.floor(l2 / o2 ** 2)
    };
  }
  var Yf = class extends ei {
    constructor(e2) {
      super(), this.config = e2, this.patch_size = e2.patch_size ?? 16, this.max_soft_tokens = e2.max_soft_tokens ?? 280, this.pooling_kernel_size = e2.pooling_kernel_size ?? 3, this.resample = e2.resample ?? 3, this.rescale_factor = e2.rescale_factor ?? 1 / 255, this.do_rescale = e2.do_rescale ?? true, this.do_resize = e2.do_resize ?? true, this.do_convert_rgb = e2.do_convert_rgb ?? true;
    }
    async _call(e2) {
      Array.isArray(e2) || (e2 = [
        e2
      ]);
      let { patch_size: t2, pooling_kernel_size: n2 } = this, r2 = this.max_soft_tokens * n2 ** 2, i2 = [], a2 = [], o2 = [];
      for (let s2 of e2) {
        if (this.do_convert_rgb && (s2 = s2.rgb()), this.do_resize) {
          let [e4, i3] = qf(s2.height, s2.width, t2, r2, n2);
          (e4 !== s2.height || i3 !== s2.width) && (s2 = await s2.resize(i3, e4, {
            resample: this.resample
          }));
        }
        let e3 = Float32Array.from(s2.data);
        if (this.do_rescale) for (let t3 = 0; t3 < e3.length; ++t3) e3[t3] *= this.rescale_factor;
        let { patches: c2, positions: l2, num_soft_tokens: u2 } = Jf(e3, s2.height, s2.width, s2.channels, t2, r2, n2);
        i2.push(c2), a2.push(l2), o2.push(u2);
      }
      return {
        pixel_values: hu(i2, 0),
        image_position_ids: hu(a2, 0),
        num_soft_tokens_per_image: o2
      };
    }
  }, Xf = (_j = class extends q {
    constructor(e2, t2, n2) {
      super(e2, t2, n2), this.audio_ms_per_token = this.config.audio_ms_per_token ?? 40, this.audio_seq_length = this.config.audio_seq_length ?? 750, this.image_seq_length = this.config.image_seq_length ?? 280;
      let { audio_token: r2, boa_token: i2, eoa_token: a2, image_token: o2, boi_token: s2, eoi_token: c2 } = this.tokenizer.config;
      this.audio_token = r2, this.boa_token = i2, this.eoa_token = a2, this.image_token = o2, this.boi_token = s2, this.eoi_token = c2;
    }
    static async from_pretrained(e2, t2 = {}) {
      let [n2, r2, i2] = await Promise.all([
        al(e2, Bd, true, t2),
        K.from_pretrained(e2, t2),
        il(e2, Vd, false, t2)
      ]), a2 = {
        tokenizer: r2
      };
      return n2.image_processor && (a2.image_processor = new Yf(n2.image_processor)), n2.feature_extractor && (a2.feature_extractor = new Tf(n2.feature_extractor)), new this(n2, a2, i2);
    }
    _compute_audio_num_tokens(e2, t2) {
      let n2 = Math.round(t2 * 20 / 1e3), r2 = Math.round(t2 * 10 / 1e3), i2 = Math.floor(n2 / 2), a2 = Math.floor((e2 + i2 - n2 - 1) / r2) + 1;
      if (a2 <= 0) return 0;
      for (let e3 = 0; e3 < 2; ++e3) a2 = Math.floor((a2 - 1) / 2) + 1;
      return Math.min(a2, this.audio_seq_length);
    }
    async _call(e2, t2 = null, n2 = null, r2 = {}) {
      typeof e2 == `string` && (e2 = [
        e2
      ]);
      let i2;
      if (t2) {
        i2 = await this.image_processor(t2, r2);
        let n3 = i2.num_soft_tokens_per_image, a3 = 0;
        e2 = e2.map((e3) => e3.replaceAll(this.image_token, () => `

${this.boi_token}${this.image_token.repeat(n3[a3++])}${this.eoi_token}

`));
      }
      let a2;
      if (n2) {
        let t3 = Array.isArray(n2) ? n2 : [
          n2
        ];
        a2 = await this.feature_extractor(t3[0], r2);
        let i3 = this.feature_extractor.config.sampling_rate ?? 16e3, o2 = 0;
        e2 = e2.map((e3) => e3.replaceAll(this.audio_token, () => `

${this.boa_token}${this.audio_token.repeat(this._compute_audio_num_tokens(t3[o2++].length, i3))}${this.eoa_token}

`));
      }
      return {
        ...this.tokenizer(e2, r2),
        ...i2,
        ...a2
      };
    }
  }, __publicField(_j, "uses_processor_config", true), __publicField(_j, "uses_chat_template_file", true), _j), Zf = class extends ei {
    constructor(e2) {
      super(), this.config = e2, this.frame_processor = new Yf(e2), this.max_frames = e2.max_frames ?? 32, this.overflow_strategy = e2.overflow_strategy ?? `uniform`;
    }
    sample_frames(e2) {
      let t2 = e2.length, { max_frames: n2 } = this;
      if (t2 <= n2) return e2;
      if (this.overflow_strategy === `truncate`) return e2.slice(0, n2);
      let r2 = n2 > 1 ? (t2 - 1) / (n2 - 1) : 0;
      return Array.from({
        length: n2
      }, (i2, a2) => e2[a2 > 0 && a2 === n2 - 1 ? t2 - 1 : Math.floor(a2 * r2)]);
    }
    async _call(e2) {
      Array.isArray(e2) || (e2 = [
        e2
      ]);
      let t2 = e2.map((e3) => this.sample_frames(e3.frames.map((e4) => e4.image))), { pixel_values: n2, image_position_ids: r2, num_soft_tokens_per_image: i2 } = await this.frame_processor(t2.flat()), a2 = 0;
      return {
        pixel_values_videos: n2,
        video_position_ids: r2,
        num_frames_per_video: t2.map((e3) => e3.length),
        num_soft_tokens_per_video: t2.map((e3) => i2[(a2 += e3.length) - 1])
      };
    }
  };
  function Qf(e2, t2) {
    return Array.isArray(e2) ? e2.every((e3) => Array.isArray(e3)) ? e2 : t2 ? [
      e2
    ] : e2.map((e3) => [
      e3
    ]) : [
      [
        e2
      ]
    ];
  }
  function $f(e2, t2, n2) {
    let r2 = 0;
    if (e2 = e2.map((e3) => e3.replaceAll(t2, () => n2[r2++] ?? ``)), r2 !== n2.length) throw Error(`Found ${r2} ${t2} tokens in the text, but ${n2.length} inputs were passed.`);
    return e2;
  }
  var ep = class extends Xf {
    constructor(e2, t2, n2) {
      super(e2, t2, n2), this.video_token = this.tokenizer.config.video_token, this.video_processor = e2.video_processor && new Zf(e2.video_processor);
    }
    async _call(e2, t2 = null, n2 = null, r2 = null, i2 = {}) {
      var _a3;
      let a2 = [
        [
          this.image_token,
          t2 && Qf(t2, true)
        ],
        [
          this.video_token,
          r2 && Qf(r2, false)
        ],
        [
          this.audio_token,
          n2 && Qf(n2, false)
        ]
      ];
      if (e2 == null) {
        let t3 = a2.filter(([, e3]) => e3), n3 = (_a3 = t3[0]) == null ? void 0 : _a3[1].length;
        if (t3.some(([, e3]) => e3.length !== n3)) throw Error(`Received a different number of samples per modality.`);
        e2 = Array.from({
          length: n3
        }, (e3, n4) => t3.flatMap(([e4, t4]) => Array(t4[n4].length).fill(e4)).join(` `));
      } else typeof e2 == `string` && (e2 = [
        e2
      ]);
      let [o2, s2, c2] = a2.map(([, e3]) => e3 == null ? void 0 : e3.flat()), l2 = o2 && await this.image_processor(o2), u2 = s2 && await this.video_processor(s2), d2 = c2 && await this._process_audio(c2), { image_token: f2, video_token: p2, audio_token: m2, boi_token: h2, eoi_token: g2, boa_token: _2, eoa_token: v2 } = this, y2 = {
        [f2]: l2 == null ? void 0 : l2.num_soft_tokens_per_image.map((e3) => h2 + f2.repeat(e3) + g2),
        [p2]: u2 == null ? void 0 : u2.num_soft_tokens_per_video.map((e3, t3) => (h2 + p2.repeat(e3) + g2).repeat(u2.num_frames_per_video[t3])),
        [m2]: d2 == null ? void 0 : d2.num_soft_tokens_per_audio.map((e3) => _2 + m2.repeat(e3) + v2)
      };
      for (let [t3, n3] of Object.entries(y2)) e2 = $f(e2, t3, n3 ?? []);
      return {
        ...this.tokenizer(e2, {
          padding: true,
          ...i2
        }),
        ...l2,
        ...u2,
        ...d2
      };
    }
    async _process_audio(e2) {
      let t2 = [];
      for (let n3 of e2) t2.push(await this.feature_extractor(n3));
      let n2 = Math.max(...t2.map((e3) => e3.input_features.dims[1])), r2 = t2[0].input_features.dims[2], i2 = new Float32Array(e2.length * n2 * r2), a2 = new Uint8Array(e2.length * n2);
      return t2.forEach((e3, t3) => {
        i2.set(e3.input_features.data, t3 * n2 * r2), a2.set(e3.input_features_mask.data, t3 * n2);
      }), {
        input_features: new W(`float32`, i2, [
          e2.length,
          n2,
          r2
        ]),
        input_features_mask: new W(`bool`, a2, [
          e2.length,
          n2
        ]),
        num_soft_tokens_per_audio: t2.map(({ input_features_mask: { data: e3 } }) => {
          let t3 = 0;
          for (let n3 = 0; n3 < e3.length; n3 += 4) t3 += Number(e3[n3]);
          return t3;
        })
      };
    }
  };
  function tp(e2, t2, n2 = 0, r2 = null) {
    let i2 = e2 / t2, a2 = vl(i2) * t2;
    return r2 !== null && a2 > r2 && (a2 = Math.floor(i2) * t2), a2 < n2 && (a2 = Math.ceil(i2) * t2), a2;
  }
  function np([e2, t2], n2) {
    return [
      Math.max(Math.floor(e2 / n2), 1) * n2,
      Math.max(Math.floor(t2 / n2), 1) * n2
    ];
  }
  function rp([e2, t2, n2, r2]) {
    return [
      e2 - n2 / 2,
      t2 - r2 / 2,
      e2 + n2 / 2,
      t2 + r2 / 2
    ];
  }
  function ip(e2, t2 = 0.5, n2 = null, r2 = false) {
    let i2 = e2.logits, a2 = e2.pred_boxes, [o2, s2, c2] = i2.dims;
    if (n2 !== null && n2.length !== o2) throw Error(`Make sure that you pass in as many target sizes as the batch dimension of the logits`);
    let l2 = [];
    for (let e3 = 0; e3 < o2; ++e3) {
      let o3 = n2 === null ? null : n2[e3], u2 = {
        boxes: [],
        classes: [],
        scores: []
      }, d2 = i2[e3], f2 = a2[e3];
      for (let e4 = 0; e4 < s2; ++e4) {
        let n3 = d2[e4], i3 = [], a3;
        if (r2) {
          a3 = n3.sigmoid().data;
          for (let e5 = 0; e5 < a3.length; ++e5) a3[e5] > t2 && i3.push(e5);
        } else {
          let e5 = dl(n3.data)[1];
          if (e5 === c2 - 1 || (a3 = cl(n3.data), a3[e5] < t2)) continue;
          i3.push(e5);
        }
        for (let t3 of i3) {
          let n4 = f2[e4].data;
          n4 = rp(n4), o3 !== null && (n4 = n4.map((e5, t4) => e5 * o3[(t4 + 1) % 2])), u2.boxes.push(n4), u2.classes.push(t3), u2.scores.push(a3[t3]);
        }
      }
      l2.push(u2);
    }
    return l2;
  }
  function ap(e2, t2 = null) {
    let n2 = e2.logits, r2 = n2.dims[0];
    if (t2 !== null && t2.length !== r2) throw Error(`Make sure that you pass in as many target sizes as the batch dimension of the logits`);
    let i2 = [];
    for (let e3 = 0; e3 < r2; ++e3) {
      let r3 = t2 === null ? null : t2[e3], a2 = n2[e3];
      r3 !== null && (a2 = iu(a2, r3, `bilinear`, false));
      let [o2, s2] = r3 ?? a2.dims.slice(-2), c2 = new W(`int32`, new Int32Array(o2 * s2), [
        o2,
        s2
      ]), l2 = a2[0].data, u2 = c2.data;
      for (let e4 = 1; e4 < a2.dims[0]; ++e4) {
        let t3 = a2[e4].data;
        for (let n3 = 0; n3 < t3.length; ++n3) t3[n3] > l2[n3] && (l2[n3] = t3[n3], u2[n3] = e4);
      }
      let d2 = Array(a2.dims[0]);
      for (let e4 = 0; e4 < u2.length; ++e4) {
        let t3 = u2[e4];
        d2[t3] = t3;
      }
      let f2 = d2.filter((e4) => e4 !== void 0);
      i2.push({
        segmentation: c2,
        labels: f2
      });
    }
    return i2;
  }
  function op(e2, t2, n2, r2) {
    let i2 = [], a2 = [], o2 = [];
    for (let s2 = 0; s2 < e2.dims[0]; ++s2) {
      let c2 = e2[s2], l2 = t2[s2], u2 = dl(c2.data)[1];
      if (u2 === r2) continue;
      let d2 = cl(c2.data)[u2];
      d2 > n2 && (i2.push(l2), a2.push(d2), o2.push(u2));
    }
    return [
      i2,
      a2,
      o2
    ];
  }
  function sp(e2, t2, n2, r2 = 0.5, i2 = 0.8) {
    let a2 = [], o2 = 0, s2 = 0, c2 = t2[n2].data;
    for (let t3 = 0; t3 < e2.length; ++t3) e2[t3] === n2 && (a2.push(t3), ++o2), c2[t3] >= r2 && ++s2;
    let l2 = o2 > 0 && s2 > 0;
    return l2 && (l2 = o2 / s2 > i2), [
      l2,
      a2
    ];
  }
  function cp(e2, t2, n2, r2, i2, a2 = null, o2 = null) {
    let [s2, c2] = o2 ?? e2[0].dims, l2 = new W(`int32`, new Int32Array(s2 * c2), [
      s2,
      c2
    ]), u2 = [];
    if (o2 !== null) for (let t3 = 0; t3 < e2.length; ++t3) e2[t3] = iu(e2[t3], o2, `bilinear`, false);
    let d2 = new Int32Array(e2[0].data.length), f2 = new Float32Array(e2[0].data.length);
    for (let n3 = 0; n3 < e2.length; ++n3) {
      let r3 = t2[n3], i3 = e2[n3].data;
      for (let e3 = 0; e3 < i3.length; ++e3) i3[e3] *= r3, i3[e3] > f2[e3] && (d2[e3] = n3, f2[e3] = i3[e3]);
    }
    let p2 = 0, m2 = l2.data;
    for (let a3 = 0; a3 < n2.length; ++a3) {
      let o3 = n2[a3], [s3, c3] = sp(d2, e2, a3, r2, i2);
      if (s3) {
        ++p2;
        for (let e3 of c3) m2[e3] = p2;
        u2.push({
          id: p2,
          label_id: o3,
          score: t2[a3]
        });
      }
    }
    return [
      l2,
      u2
    ];
  }
  function lp(e2, t2, n2 = 28, r2 = 3136, i2 = 1003520, a2 = 1) {
    if (e2 < n2 || t2 < n2) {
      let r3 = Math.max(n2 / e2, n2 / t2);
      e2 = Math.round(e2 * r3), t2 = Math.round(t2 * r3);
    }
    if (Math.max(e2, t2) / Math.min(e2, t2) > 200) throw Error(`absolute aspect ratio must be smaller than 200, got ${Math.max(e2, t2) / Math.min(e2, t2)}`);
    let o2 = Math.round(e2 / n2) * n2, s2 = Math.round(t2 / n2) * n2;
    if (a2 * o2 * s2 > i2) {
      let r3 = Math.sqrt(a2 * e2 * t2 / i2);
      o2 = Math.max(n2, Math.floor(e2 / r3 / n2) * n2), s2 = Math.max(n2, Math.floor(t2 / r3 / n2) * n2);
    } else if (a2 * o2 * s2 < r2) {
      let i3 = Math.sqrt(r2 / (a2 * e2 * t2));
      o2 = Math.ceil(e2 * i3 / n2) * n2, s2 = Math.ceil(t2 * i3 / n2) * n2;
    }
    return [
      s2,
      o2
    ];
  }
  function up(e2, t2 = 0.5, n2 = 0.5, r2 = 0.8, i2 = null, a2 = null) {
    i2 === null && (P.warn("`label_ids_to_fuse` unset. No instance will be fused."), i2 = /* @__PURE__ */ new Set());
    let o2 = e2.class_queries_logits ?? e2.logits, s2 = (e2.masks_queries_logits ?? e2.pred_masks).sigmoid(), [c2, l2, u2] = o2.dims;
    if (--u2, a2 !== null && a2.length !== c2) throw Error(`Make sure that you pass in as many target sizes as the batch dimension of the logits`);
    let d2 = [];
    for (let e3 = 0; e3 < c2; ++e3) {
      let c3 = a2 === null ? null : a2[e3], l3 = o2[e3], f2 = s2[e3], [p2, m2, h2] = op(l3, f2, t2, u2);
      if (h2.length === 0) {
        let [e4, t3] = c3 ?? f2.dims.slice(-2), n3 = new W(`int32`, new Int32Array(e4 * t3).fill(-1), [
          e4,
          t3
        ]);
        d2.push({
          segmentation: n3,
          segments_info: []
        });
        continue;
      }
      let [g2, _2] = cp(p2, m2, h2, n2, r2, i2, c3);
      d2.push({
        segmentation: g2,
        segments_info: _2
      });
    }
    return d2;
  }
  function dp(e2, t2 = 0.5, n2 = null) {
    throw Error("`post_process_instance_segmentation` is not yet implemented.");
  }
  var J = class extends ei {
    constructor(e2) {
      super(), this.image_mean = e2.image_mean ?? e2.mean, this.image_std = e2.image_std ?? e2.std, this.resample = e2.resample ?? 2, this.do_rescale = e2.do_rescale ?? true, this.rescale_factor = e2.rescale_factor ?? 1 / 255, this.do_normalize = e2.do_normalize, this.do_thumbnail = e2.do_thumbnail, this.size = e2.size ?? e2.image_size, this.do_resize = e2.do_resize ?? this.size !== void 0, this.size_divisibility = e2.size_divisibility ?? e2.size_divisor, this.do_center_crop = e2.do_center_crop, this.crop_size = e2.crop_size, this.do_convert_rgb = e2.do_convert_rgb ?? true, this.do_crop_margin = e2.do_crop_margin, this.pad_size = e2.pad_size, this.do_pad = e2.do_pad, this.min_pixels = e2.min_pixels, this.max_pixels = e2.max_pixels, this.do_pad && !this.pad_size && !this.size_divisibility && this.size && this.size.width !== void 0 && this.size.height !== void 0 && (this.pad_size = this.size), this.do_flip_channel_order = e2.do_flip_channel_order ?? false, this.config = e2;
    }
    async thumbnail(e2, t2, n2 = 2) {
      let r2 = e2.height, i2 = e2.width, a2 = t2.height, o2 = t2.width, s2 = Math.min(r2, a2), c2 = Math.min(i2, o2);
      return s2 === r2 && c2 === i2 ? e2 : (r2 > i2 ? c2 = Math.floor(i2 * s2 / r2) : i2 > r2 && (s2 = Math.floor(r2 * c2 / i2)), await e2.resize(c2, s2, {
        resample: n2
      }));
    }
    async crop_margin(e2, t2 = 200) {
      let n2 = e2.clone().grayscale(), r2 = ul(n2.data)[0], i2 = dl(n2.data)[0] - r2;
      if (i2 === 0) return e2;
      let a2 = t2 / 255, o2 = n2.width, s2 = n2.height, c2 = 0, l2 = 0, u2 = n2.data;
      for (let e3 = 0; e3 < n2.height; ++e3) {
        let t3 = e3 * n2.width;
        for (let d2 = 0; d2 < n2.width; ++d2) (u2[t3 + d2] - r2) / i2 < a2 && (o2 = Math.min(o2, d2), s2 = Math.min(s2, e3), c2 = Math.max(c2, d2), l2 = Math.max(l2, e3));
      }
      return e2 = await e2.crop([
        o2,
        s2,
        c2,
        l2
      ]), e2;
    }
    pad_image(e2, t2, n2, { mode: r2 = `constant`, center: i2 = false, constant_values: a2 = 0 } = {}) {
      let [o2, s2, c2] = t2, l2, u2;
      if (typeof n2 == `number` ? (l2 = n2, u2 = n2) : n2 === `square` ? l2 = u2 = Math.max(o2, s2) : (l2 = n2.width, u2 = n2.height), l2 !== s2 || u2 !== o2) {
        let n3 = new Float32Array(l2 * u2 * c2);
        if (Array.isArray(a2)) for (let e3 = 0; e3 < n3.length; ++e3) n3[e3] = a2[e3 % c2];
        else a2 !== 0 && n3.fill(a2);
        let [d2, f2] = i2 ? [
          Math.floor((l2 - s2) / 2),
          Math.floor((u2 - o2) / 2)
        ] : [
          0,
          0
        ];
        for (let t3 = 0; t3 < o2; ++t3) {
          let r3 = (t3 + f2) * l2, i3 = t3 * s2;
          for (let t4 = 0; t4 < s2; ++t4) {
            let a3 = (r3 + t4 + d2) * c2, o3 = (i3 + t4) * c2;
            for (let t5 = 0; t5 < c2; ++t5) n3[a3 + t5] = e2[o3 + t5];
          }
        }
        if (r2 === `symmetric`) {
          if (i2) throw Error("`center` padding is not supported when `mode` is set to `symmetric`.");
          let t3 = o2 - 1, r3 = s2 - 1;
          for (let i3 = 0; i3 < u2; ++i3) {
            let a3 = i3 * l2, u3 = ci(i3, t3) * s2;
            for (let t4 = 0; t4 < l2; ++t4) {
              if (i3 < o2 && t4 < s2) continue;
              let l3 = (a3 + t4) * c2, d3 = (u3 + ci(t4, r3)) * c2;
              for (let t5 = 0; t5 < c2; ++t5) n3[l3 + t5] = e2[d3 + t5];
            }
          }
        }
        e2 = n3, t2 = [
          u2,
          l2,
          c2
        ];
      }
      return [
        e2,
        t2
      ];
    }
    rescale(e2) {
      for (let t2 = 0; t2 < e2.length; ++t2) e2[t2] = this.rescale_factor * e2[t2];
    }
    get_resize_output_image_size(e2, t2) {
      let [n2, r2] = e2.size, i2, a2;
      if (this.do_thumbnail) {
        let { height: e3, width: n3 } = t2;
        i2 = Math.min(e3, n3);
      } else Number.isInteger(t2) ? (i2 = t2, a2 = this.config.max_size ?? i2) : t2 !== void 0 && (i2 = t2.shortest_edge, a2 = t2.longest_edge);
      if (i2 !== void 0 || a2 !== void 0) {
        let e3 = i2 === void 0 ? 1 : Math.max(i2 / n2, i2 / r2), t3 = n2 * e3, o2 = r2 * e3, s2 = a2 === void 0 ? 1 : Math.min(a2 / t3, a2 / o2), c2 = Math.floor(Number((t3 * s2).toFixed(2))), l2 = Math.floor(Number((o2 * s2).toFixed(2)));
        return this.size_divisibility !== void 0 && ([c2, l2] = np([
          c2,
          l2
        ], this.size_divisibility)), [
          c2,
          l2
        ];
      }
      if (t2 !== void 0 && t2.width !== void 0 && t2.height !== void 0) {
        let e3 = t2.width, i3 = t2.height;
        if (this.config.keep_aspect_ratio && this.config.ensure_multiple_of) {
          let t3 = i3 / r2, a3 = e3 / n2;
          Math.abs(1 - a3) < Math.abs(1 - t3) ? t3 = a3 : a3 = t3, i3 = tp(t3 * r2, this.config.ensure_multiple_of), e3 = tp(a3 * n2, this.config.ensure_multiple_of);
        }
        return [
          e3,
          i3
        ];
      }
      if (this.size_divisibility !== void 0) return np([
        n2,
        r2
      ], this.size_divisibility);
      throw Error(`Could not resize image due to unsupported \`this.size\` option in config: ${JSON.stringify(t2)}`);
    }
    async resize(e2) {
      let [t2, n2] = this.get_resize_output_image_size(e2, this.size);
      return await e2.resize(t2, n2, {
        resample: this.resample
      });
    }
    async preprocess(e2, { do_normalize: t2 = null, do_pad: n2 = null, do_convert_rgb: r2 = null, do_convert_grayscale: i2 = null, do_flip_channel_order: a2 = null } = {}) {
      this.do_crop_margin && (e2 = await this.crop_margin(e2));
      let [o2, s2] = e2.size;
      if (r2 ?? this.do_convert_rgb ? e2 = e2.rgb() : i2 && (e2 = e2.grayscale()), this.do_resize && (e2 = await this.resize(e2)), this.do_thumbnail && (e2 = await this.thumbnail(e2, this.size, this.resample)), this.do_center_crop) {
        let t3, n3;
        Number.isInteger(this.crop_size) ? (t3 = this.crop_size, n3 = this.crop_size) : (t3 = this.crop_size.width, n3 = this.crop_size.height), e2 = await e2.center_crop(t3, n3);
      }
      let c2 = [
        e2.height,
        e2.width
      ], l2 = Float32Array.from(e2.data), u2 = [
        e2.height,
        e2.width,
        e2.channels
      ];
      if (this.do_rescale && this.rescale(l2), t2 ?? this.do_normalize) {
        let t3 = this.image_mean;
        Array.isArray(this.image_mean) || (t3 = Array(e2.channels).fill(t3));
        let n3 = this.image_std;
        if (Array.isArray(this.image_std) || (n3 = Array(e2.channels).fill(n3)), t3.length !== e2.channels || n3.length !== e2.channels) throw Error(`When set to arrays, the length of \`image_mean\` (${t3.length}) and \`image_std\` (${n3.length}) must match the number of channels in the image (${e2.channels}).`);
        for (let r3 = 0; r3 < l2.length; r3 += e2.channels) for (let i3 = 0; i3 < e2.channels; ++i3) l2[r3 + i3] = (l2[r3 + i3] - t3[i3]) / n3[i3];
      }
      if (n2 ?? this.do_pad) {
        if (this.pad_size) {
          let t3 = this.pad_image(l2, [
            e2.height,
            e2.width,
            e2.channels
          ], this.pad_size);
          [l2, u2] = t3;
        } else if (this.size_divisibility) {
          let e3 = Math.ceil(u2[1] / this.size_divisibility) * this.size_divisibility, t3 = Math.ceil(u2[0] / this.size_divisibility) * this.size_divisibility;
          [l2, u2] = this.pad_image(l2, u2, {
            width: e3,
            height: t3
          });
        }
      }
      if (a2 ?? this.do_flip_channel_order) {
        if (u2[2] !== 3) throw Error(`Flipping channel order is only supported for RGB images.`);
        for (let e3 = 0; e3 < l2.length; e3 += 3) {
          let t3 = l2[e3];
          l2[e3] = l2[e3 + 2], l2[e3 + 2] = t3;
        }
      }
      let d2 = new W(`float32`, l2, u2).permute(2, 0, 1);
      return {
        original_size: [
          s2,
          o2
        ],
        reshaped_input_size: c2,
        pixel_values: d2
      };
    }
    async _call(e2, ...t2) {
      Array.isArray(e2) || (e2 = [
        e2
      ]);
      let n2 = await Promise.all(e2.map((e3) => this.preprocess(e3)));
      return {
        pixel_values: hu(n2.map((e3) => e3.pixel_values), 0),
        original_sizes: n2.map((e3) => e3.original_size),
        reshaped_input_sizes: n2.map((e3) => e3.reshaped_input_size)
      };
    }
    static async from_pretrained(e2, t2 = {}) {
      let n2 = await al(e2, zd, true, t2);
      return new this(n2);
    }
  }, fp = {};
  wr(fp, {
    BeitFeatureExtractor: () => pp,
    BitImageProcessor: () => mp,
    CHMv2ImageProcessor: () => gp,
    CLIPFeatureExtractor: () => vp,
    CLIPImageProcessor: () => _p,
    ChineseCLIPFeatureExtractor: () => hp,
    ConvNextFeatureExtractor: () => bp,
    ConvNextImageProcessor: () => yp,
    DINOv3ViTImageProcessor: () => Tp,
    DPTFeatureExtractor: () => kp,
    DPTImageProcessor: () => Op,
    DeiTFeatureExtractor: () => Sp,
    DeiTImageProcessor: () => xp,
    DetrFeatureExtractor: () => wp,
    DetrImageProcessor: () => Cp,
    DonutFeatureExtractor: () => Dp,
    DonutImageProcessor: () => Ep,
    EfficientNetImageProcessor: () => Ap,
    GLPNFeatureExtractor: () => Pp,
    Gemma3ImageProcessor: () => jp,
    Gemma4ImageProcessor: () => Yf,
    Glm46VImageProcessor: () => Np,
    GroundingDinoImageProcessor: () => Fp,
    Idefics3ImageProcessor: () => Ip,
    ImageFeatureExtractor: () => J,
    ImageProcessor: () => J,
    JinaCLIPImageProcessor: () => Rp,
    Lfm2VlImageProcessor: () => Wp,
    Lfm3VlImageProcessor: () => Gp,
    LlavaOnevisionImageProcessor: () => Kp,
    Mask2FormerImageProcessor: () => Yp,
    MaskFormerFeatureExtractor: () => Jp,
    MaskFormerImageProcessor: () => qp,
    MobileNetV1FeatureExtractor: () => Zp,
    MobileNetV1ImageProcessor: () => Xp,
    MobileNetV2FeatureExtractor: () => $p,
    MobileNetV2ImageProcessor: () => Qp,
    MobileNetV3FeatureExtractor: () => tm,
    MobileNetV3ImageProcessor: () => em,
    MobileNetV4FeatureExtractor: () => rm,
    MobileNetV4ImageProcessor: () => nm,
    MobileViTFeatureExtractor: () => am,
    MobileViTImageProcessor: () => im,
    NougatImageProcessor: () => om,
    OwlViTFeatureExtractor: () => cm,
    OwlViTImageProcessor: () => sm,
    Owlv2ImageProcessor: () => lm,
    Phi3VImageProcessor: () => hm,
    PixtralImageProcessor: () => gm,
    PvtImageProcessor: () => _m,
    Qwen2VLImageProcessor: () => Mp,
    RTDetrImageProcessor: () => vm,
    Sam2ImageProcessor: () => ym,
    Sam3ImageProcessor: () => ym,
    SamImageProcessor: () => ym,
    SapiensFeatureExtractor: () => xm,
    SapiensImageProcessor: () => bm,
    SegformerFeatureExtractor: () => Cm,
    SegformerImageProcessor: () => Sm,
    SiglipImageProcessor: () => wm,
    SmolVLMImageProcessor: () => Ip,
    Swin2SRImageProcessor: () => Tm,
    VLMImageProcessor: () => Lp,
    ViTFeatureExtractor: () => Dm,
    ViTImageProcessor: () => Em,
    VitMatteImageProcessor: () => Om,
    VitPoseImageProcessor: () => km,
    YolosFeatureExtractor: () => jm,
    YolosImageProcessor: () => Am
  });
  var pp = class extends J {
  }, mp = class extends J {
  }, hp = class extends J {
  }, gp = class extends J {
  }, _p = class extends J {
  }, vp = class extends _p {
  }, yp = class extends J {
    constructor(e2) {
      super(e2), this.crop_pct = this.config.crop_pct ?? 224 / 256;
    }
    async resize(e2) {
      var _a3;
      let t2 = (_a3 = this.size) == null ? void 0 : _a3.shortest_edge;
      if (t2 === void 0) throw Error(`Size dictionary must contain 'shortest_edge' key.`);
      if (t2 < 384) {
        let n2 = Math.floor(t2 / this.crop_pct), [r2, i2] = this.get_resize_output_image_size(e2, {
          shortest_edge: n2
        });
        e2 = await e2.resize(r2, i2, {
          resample: this.resample
        }), e2 = await e2.center_crop(t2, t2);
      } else e2 = await e2.resize(t2, t2, {
        resample: this.resample
      });
      return e2;
    }
  }, bp = class extends yp {
  }, xp = class extends J {
  }, Sp = class extends xp {
  }, Cp = class extends J {
    async _call(e2) {
      let t2 = await super._call(e2), n2 = xu([
        t2.pixel_values.dims[0],
        64,
        64
      ], 1n);
      return {
        ...t2,
        pixel_mask: n2
      };
    }
    post_process_object_detection(...e2) {
      return ip(...e2);
    }
    post_process_panoptic_segmentation(...e2) {
      return up(...e2);
    }
    post_process_instance_segmentation(...e2) {
      return dp(...e2);
    }
  }, wp = class extends Cp {
  }, Tp = class extends J {
  }, Ep = class extends J {
    pad_image(e2, t2, n2, r2 = {}) {
      let [i2, a2, o2] = t2, s2 = this.image_mean;
      Array.isArray(this.image_mean) || (s2 = Array(o2).fill(s2));
      let c2 = this.image_std;
      Array.isArray(c2) || (c2 = Array(o2).fill(s2));
      let l2 = s2.map((e3, t3) => -e3 / c2[t3]);
      return super.pad_image(e2, t2, n2, {
        center: true,
        constant_values: l2,
        ...r2
      });
    }
  }, Dp = class extends Ep {
  }, Op = class extends J {
  }, kp = class extends Op {
  }, Ap = class extends J {
    constructor(e2) {
      super(e2), this.include_top = this.config.include_top ?? true, this.include_top && (this.image_std = this.image_std.map((e3) => e3 * e3));
    }
  }, jp = class extends J {
  }, Mp = class extends J {
    constructor(e2) {
      var _a3, _b3;
      super(e2), this.min_pixels = e2.min_pixels ?? ((_a3 = e2.size) == null ? void 0 : _a3.shortest_edge), this.max_pixels = e2.max_pixels ?? ((_b3 = e2.size) == null ? void 0 : _b3.longest_edge), this.patch_size = e2.patch_size, this.merge_size = e2.merge_size;
    }
    get_resize_output_image_size(e2, t2) {
      let n2 = this.patch_size * this.merge_size;
      return lp(e2.height, e2.width, n2, this.min_pixels, this.max_pixels);
    }
    async _call(e2, ...t2) {
      let { pixel_values: n2, original_sizes: r2, reshaped_input_sizes: i2 } = await super._call(e2, ...t2), a2 = n2, { temporal_patch_size: o2, merge_size: s2, patch_size: c2 } = this.config;
      a2.dims[0] === 1 && (a2 = mu(Array.from({
        length: o2
      }, () => a2), 0));
      let l2 = a2.dims[0] / o2, u2 = a2.dims[1], d2 = Math.floor(a2.dims[2] / c2), f2 = Math.floor(a2.dims[3] / c2);
      return {
        pixel_values: a2.view(l2, o2, u2, Math.floor(d2 / s2), s2, c2, Math.floor(f2 / s2), s2, c2).permute(0, 3, 6, 4, 7, 2, 1, 5, 8).view(l2 * d2 * f2, u2 * o2 * c2 * c2),
        image_grid_thw: new W(`int64`, [
          l2,
          d2,
          f2
        ], [
          1,
          3
        ]),
        original_sizes: r2,
        reshaped_input_sizes: i2
      };
    }
  }, Np = class extends Mp {
    get_resize_output_image_size(e2, t2) {
      let n2 = this.patch_size * this.merge_size, r2 = this.config.temporal_patch_size ?? 2;
      return lp(e2.height, e2.width, n2, this.min_pixels, this.max_pixels, r2);
    }
  }, Pp = class extends J {
  }, Fp = class extends J {
    async _call(e2) {
      let t2 = await super._call(e2), n2 = t2.pixel_values.dims, r2 = Cu([
        n2[0],
        n2[2],
        n2[3]
      ]);
      return {
        ...t2,
        pixel_mask: r2
      };
    }
  }, Ip = class extends J {
    constructor(e2) {
      super(e2), this.do_image_splitting = e2.do_image_splitting ?? true, this.max_image_size = e2.max_image_size;
    }
    get_resize_for_vision_encoder(e2, t2) {
      let [n2, r2] = e2.dims.slice(-2), i2 = r2 / n2;
      return r2 >= n2 ? (r2 = Math.ceil(r2 / t2) * t2, n2 = Math.floor(r2 / i2), n2 = Math.ceil(n2 / t2) * t2) : (n2 = Math.ceil(n2 / t2) * t2, r2 = Math.floor(n2 * i2), r2 = Math.ceil(r2 / t2) * t2), {
        height: n2,
        width: r2
      };
    }
    async _call(e2, { do_image_splitting: t2 = null, return_row_col_info: n2 = false } = {}) {
      let r2;
      if (!Array.isArray(e2)) r2 = [
        [
          e2
        ]
      ];
      else {
        if (e2.length === 0 || !e2[0]) throw Error(`No images provided.`);
        r2 = Array.isArray(e2[0]) ? e2 : [
          e2
        ];
      }
      let i2 = [], a2 = [], o2 = [], s2 = [], c2 = [];
      for (let e3 of r2) {
        let n3 = await Promise.all(e3.map((e4) => this.preprocess(e4)));
        s2.push(...n3.map((e4) => e4.original_size)), c2.push(...n3.map((e4) => e4.reshaped_input_size)), n3.forEach((e4) => e4.pixel_values.unsqueeze_(0));
        let { longest_edge: r3 } = this.max_image_size, l3;
        if (t2 ?? this.do_image_splitting) {
          let e4 = Array(n3.length), t3 = Array(n3.length);
          l3 = await Promise.all(n3.map(async (n4, i3) => {
            let a3 = this.get_resize_for_vision_encoder(n4.pixel_values, r3), o3 = await au(n4.pixel_values, {
              size: [
                a3.height,
                a3.width
              ]
            }), { frames: s3, num_splits_h: c3, num_splits_w: l4 } = await this.split_image(o3, this.max_image_size);
            return e4[i3] = c3, t3[i3] = l4, mu(s3, 0);
          })), a2.push(e4), o2.push(t3);
        } else {
          let e4 = [
            r3,
            r3
          ];
          l3 = await Promise.all(n3.map((t3) => au(t3.pixel_values, {
            size: e4
          }))), a2.push(Array(n3.length).fill(0)), o2.push(Array(n3.length).fill(0));
        }
        i2.push(mu(l3, 0));
      }
      let l2 = i2.length, [u2, d2, f2, p2] = i2[0].dims, m2, h2;
      if (l2 === 1) m2 = i2[0].unsqueeze_(0), h2 = xu([
        l2,
        u2,
        f2,
        p2
      ], true);
      else {
        let e3 = Math.max(...i2.map((e4) => e4.dims.at(0)));
        h2 = xu([
          l2,
          e3,
          f2,
          p2
        ], true);
        let t3 = h2.data, n3 = e3 * f2 * p2;
        for (let r3 = 0; r3 < l2; ++r3) {
          let a3 = i2[r3].dims[0];
          if (a3 < e3) {
            i2[r3] = mu([
              i2[r3],
              xu([
                e3 - a3,
                d2,
                f2,
                p2
              ], 0)
            ], 0);
            let o3 = r3 * n3 + a3 * f2 * p2, s3 = (r3 + 1) * n3;
            t3.fill(false, o3, s3);
          }
        }
        m2 = hu(i2, 0);
      }
      return {
        pixel_values: m2,
        pixel_attention_mask: h2,
        original_sizes: s2,
        reshaped_input_sizes: c2,
        ...n2 ? {
          rows: a2,
          cols: o2
        } : {}
      };
    }
    async split_image(e2, { longest_edge: t2 }) {
      let n2 = t2, r2 = t2, i2 = [], [a2, o2] = e2.dims.slice(-2), s2 = 0, c2 = 0;
      if (a2 > n2 || o2 > r2) {
        s2 = Math.ceil(a2 / n2), c2 = Math.ceil(o2 / r2);
        let t3 = Math.ceil(a2 / s2), l2 = Math.ceil(o2 / c2);
        for (let n3 = 0; n3 < s2; ++n3) for (let r3 = 0; r3 < c2; ++r3) {
          let u3, d3, f2, p2;
          n3 === s2 - 1 ? (d3 = a2 - t3, p2 = a2) : (d3 = n3 * t3, p2 = (n3 + 1) * t3), r3 === c2 - 1 ? (u3 = o2 - l2, f2 = o2) : (u3 = r3 * l2, f2 = (r3 + 1) * l2);
          let m2 = await lu(e2, [
            d3,
            u3
          ], [
            p2,
            f2
          ], [
            2,
            3
          ]);
          i2.push(m2);
        }
        let u2 = n2, d2 = r2;
        (a2 !== u2 || o2 !== d2) && (e2 = await au(e2, {
          size: [
            u2,
            d2
          ]
        }));
      }
      return i2.push(e2), {
        frames: i2,
        num_splits_h: s2,
        num_splits_w: c2
      };
    }
  }, Lp = class extends J {
    constructor(e2) {
      super({
        do_pad: true,
        pad_size: {
          width: e2.image_size,
          height: e2.image_size
        },
        ...e2
      }), this.constant_values = this.config.background_color.map((e3) => e3 * this.rescale_factor);
    }
    pad_image(e2, t2, n2, r2) {
      return super.pad_image(e2, t2, n2, {
        constant_values: this.constant_values,
        center: true,
        ...r2
      });
    }
  }, Rp = class extends J {
    constructor(e2) {
      let { resize_mode: t2, fill_color: n2, interpolation: r2, size: i2, ...a2 } = e2, o2 = t2 === `squash` ? {
        width: i2,
        height: i2
      } : t2 === `shortest` ? {
        shortest_edge: i2
      } : {
        longest_edge: i2
      }, s2 = r2 === `bicubic` ? 3 : 2;
      super({
        ...a2,
        size: o2,
        resample: s2,
        do_center_crop: true,
        crop_size: i2,
        do_normalize: true
      });
    }
  };
  function zp(e2, t2) {
    return Math.round(e2 / t2) * t2;
  }
  function Bp(e2, t2, n2, r2, i2) {
    let a2 = 1 / 0, o2 = [
      1,
      1
    ], s2 = n2 * r2;
    for (let n3 of t2) {
      let t3 = Math.abs(e2 - n3[0] / n3[1]);
      t3 < a2 ? (a2 = t3, o2 = n3) : t3 === a2 && s2 > 0.5 * i2 * i2 * n3[0] * n3[1] && (o2 = n3);
    }
    return o2;
  }
  function Vp(e2, t2) {
    let n2 = [], r2 = /* @__PURE__ */ new Set();
    for (let i2 = e2; i2 <= t2; ++i2) for (let a2 = 1; a2 <= i2; ++a2) for (let o2 = 1; o2 <= i2; ++o2) {
      let i3 = a2 * o2;
      if (i3 >= e2 && i3 <= t2) {
        let e3 = a2 << 16 | o2;
        r2.has(e3) || (r2.add(e3), n2.push([
          a2,
          o2
        ]));
      }
    }
    return n2.sort((e3, t3) => e3[0] * e3[1] - t3[0] * t3[1]);
  }
  function Hp(e2, t2) {
    let [n2, r2, i2, a2] = e2.dims, o2 = Math.floor(i2 / t2), s2 = Math.floor(a2 / t2), c2 = t2 * t2 * r2, l2 = e2.data, u2 = new Float32Array(n2 * o2 * s2 * c2), d2 = i2 * a2;
    for (let e3 = 0; e3 < n2; ++e3) {
      let n3 = e3 * r2 * d2, i3 = e3 * o2 * s2 * c2;
      for (let e4 = 0; e4 < o2; ++e4) for (let o3 = 0; o3 < s2; ++o3) {
        let f2 = i3 + (e4 * s2 + o3) * c2;
        for (let i4 = 0; i4 < t2; ++i4) {
          let s3 = (e4 * t2 + i4) * a2 + o3 * t2;
          for (let e5 = 0; e5 < t2; ++e5) {
            let t3 = s3 + e5;
            for (let e6 = 0; e6 < r2; ++e6) u2[f2++] = l2[n3 + e6 * d2 + t3];
          }
        }
      }
    }
    return new W(`float32`, u2, [
      n2,
      o2 * s2,
      c2
    ]);
  }
  function Up(e2, t2) {
    let [, n2, r2] = e2.dims, i2 = new BigInt64Array(t2);
    i2.fill(1n, 0, n2);
    let a2 = e2;
    if (n2 < t2) {
      let n3 = new Float32Array(t2 * r2);
      n3.set(e2.data), a2 = new W(`float32`, n3, [
        1,
        t2,
        r2
      ]);
    }
    return {
      padded: a2,
      mask: new W(`int64`, i2, [
        t2
      ])
    };
  }
  var Wp = class extends J {
    constructor(e2) {
      super(e2), this.downsample_factor = e2.downsample_factor ?? 2, this.do_image_splitting = e2.do_image_splitting ?? true, this.min_tiles = e2.min_tiles ?? 2, this.max_tiles = e2.max_tiles ?? 10, this.use_thumbnail = e2.use_thumbnail ?? true, this.min_image_tokens = e2.min_image_tokens ?? 64, this.max_image_tokens = e2.max_image_tokens ?? 256, this.encoder_patch_size = e2.encoder_patch_size ?? e2.patch_size ?? 16, this.tile_size = e2.tile_size ?? 512, this.max_pixels_tolerance = e2.max_pixels_tolerance ?? 2, this.return_row_col_info = e2.return_row_col_info ?? false;
      let t2 = this.max_image_tokens * this.downsample_factor ** 2, n2 = this.do_image_splitting ? (this.tile_size / this.encoder_patch_size) ** 2 : 0;
      this.max_num_patches = Math.max(t2, n2);
    }
    _is_image_too_large(e2, t2) {
      let n2 = this.encoder_patch_size * this.downsample_factor;
      return Math.max(this.encoder_patch_size, zp(e2, n2)) * Math.max(this.encoder_patch_size, zp(t2, n2)) > this.max_image_tokens * (this.encoder_patch_size * this.downsample_factor) ** 2 * this.max_pixels_tolerance;
    }
    _get_grid_layout(e2, t2) {
      let n2 = Vp(this.min_tiles, this.max_tiles), [r2, i2] = Bp(t2 / e2, n2, t2, e2, this.tile_size);
      return {
        grid_width: r2,
        grid_height: i2,
        target_width: this.tile_size * r2,
        target_height: this.tile_size * i2
      };
    }
    async _call(e2, { return_row_col_info: t2 = null } = {}) {
      let n2;
      n2 = Array.isArray(e2) ? Array.isArray(e2[0]) ? e2 : [
        e2
      ] : [
        [
          e2
        ]
      ];
      let r2 = [], i2 = [], a2 = [], o2 = [], s2 = [], c2 = [];
      for (let e3 of n2) {
        let t3 = await Promise.all(e3.map((e4) => this.preprocess(e4, {
          do_pad: false
        })));
        for (let { pixel_values: e4 } of t3) {
          let [, t4, n3] = e4.dims, l3 = e4.unsqueeze_(0), u2 = this.encoder_patch_size * this.downsample_factor, d2 = u2 ** 2, [f2, p2] = lp(Math.max(u2, t4), Math.max(u2, n3), u2, this.min_image_tokens * d2, this.max_image_tokens * d2).map((e5) => Math.max(u2, e5)), m2, h2 = 1, g2 = 1, _2 = this._is_image_too_large(t4, n3), v2 = this.do_image_splitting && (this.min_tiles !== 1 || this.max_tiles !== 1);
          if (_2 && v2) {
            let { grid_width: e5, grid_height: r3, target_width: i3, target_height: a3 } = this._get_grid_layout(t4, n3);
            h2 = r3, g2 = e5;
            let o3 = await au(l3, {
              size: [
                a3,
                i3
              ]
            });
            m2 = [];
            for (let t5 = 0; t5 < r3; ++t5) for (let n4 = 0; n4 < e5; ++n4) {
              let e6 = t5 * this.tile_size, r4 = n4 * this.tile_size;
              m2.push(o3.slice(null, null, [
                e6,
                e6 + this.tile_size
              ], [
                r4,
                r4 + this.tile_size
              ]));
            }
            this.use_thumbnail && e5 * r3 !== 1 && m2.push(await au(l3, {
              size: [
                p2,
                f2
              ]
            }));
          } else m2 = [
            await au(l3, {
              size: [
                p2,
                f2
              ]
            })
          ];
          for (let e5 of m2) {
            let [, , t5, n4] = e5.dims, { padded: o3, mask: s3 } = Up(Hp(e5, this.encoder_patch_size), this.max_num_patches);
            r2.push(o3), i2.push(s3), a2.push([
              Math.floor(t5 / this.encoder_patch_size),
              Math.floor(n4 / this.encoder_patch_size)
            ]);
          }
          o2.push(h2), s2.push(g2), c2.push([
            p2,
            f2
          ]);
        }
      }
      let l2 = {
        pixel_values: mu(r2, 0),
        pixel_attention_mask: hu(i2, 0),
        spatial_shapes: new W(`int64`, BigInt64Array.from(a2.flat(), BigInt), [
          a2.length,
          2
        ])
      };
      return (t2 ?? this.return_row_col_info) && (l2.image_rows = o2, l2.image_cols = s2, l2.image_sizes = c2), l2;
    }
  }, Gp = class extends Mp {
    async _call(e2, ...t2) {
      Array.isArray(e2) || (e2 = [
        e2
      ]);
      let n2 = await Promise.all(e2.map((e3) => super._call(e3, ...t2)));
      return {
        pixel_values: mu(n2.map((e3) => e3.pixel_values), 0),
        image_grid_thw: mu(n2.map((e3) => e3.image_grid_thw), 0),
        original_sizes: n2.flatMap((e3) => e3.original_sizes),
        reshaped_input_sizes: n2.flatMap((e3) => e3.reshaped_input_sizes)
      };
    }
  }, Kp = class extends J {
  }, qp = class extends J {
    post_process_panoptic_segmentation(...e2) {
      return up(...e2);
    }
    post_process_instance_segmentation(...e2) {
      return dp(...e2);
    }
  }, Jp = class extends qp {
  }, Yp = class extends qp {
  }, Xp = class extends J {
  }, Zp = class extends Xp {
  }, Qp = class extends J {
  }, $p = class extends Qp {
  }, em = class extends J {
  }, tm = class extends em {
  }, nm = class extends J {
  }, rm = class extends nm {
  }, im = class extends J {
  }, am = class extends im {
  }, om = class extends Ep {
  }, sm = class extends J {
    post_process_object_detection(...e2) {
      return ip(...e2);
    }
  }, cm = class extends sm {
  }, lm = class extends sm {
  }, um = 336, dm = [
    2,
    3
  ], { ceil: fm, floor: pm, sqrt: mm } = Math, hm = class extends J {
    constructor(e2) {
      super({
        ...e2,
        do_normalize: true,
        do_pad: true,
        pad_size: `custom`,
        do_convert_rgb: true,
        do_resize: true
      }), this._num_crops = e2.num_crops;
    }
    calc_num_image_tokens_from_image_size(e2, t2) {
      let { num_img_tokens: n2 } = this.config;
      return pm((pm(t2 / um) * pm(e2 / um) + 1) * n2 + 1 + (pm(t2 / um) + 1) * mm(n2));
    }
    get_resize_output_image_size(e2, t2) {
      let n2 = this._num_crops, [r2, i2] = e2.size, a2 = r2 / i2, o2 = 1;
      for (; o2 * Math.ceil(o2 / a2) <= n2; ) o2 += 1;
      --o2;
      let s2 = Math.floor(o2 * 336);
      return [
        s2,
        Math.floor(s2 / a2)
      ];
    }
    pad_image(e2, t2, n2, r2 = {}) {
      let [i2, a2] = t2, o2 = um * fm(i2 / um), s2 = um * fm(a2 / um), c2 = [
        1,
        1,
        1
      ].map((e3, t3) => (e3 - this.image_mean[t3]) / this.image_std[t3]);
      return super.pad_image(e2, t2, {
        width: s2,
        height: o2
      }, {
        center: true,
        constant_values: c2,
        ...r2
      });
    }
    async _call(e2, { num_crops: t2 = null } = {}) {
      if (this._num_crops = t2 ?? (t2 = this.config.num_crops), t2 < 4 || mm(t2) % 1 != 0) throw Error(`num_crops must be a square number >= 4`);
      Array.isArray(e2) || (e2 = [
        e2
      ]);
      let n2 = e2.length, r2 = await Promise.all(e2.map((e3) => this.preprocess(e3))), i2 = r2.map((e3) => e3.original_size), a2 = r2.map((e3) => e3.reshaped_input_size), o2 = [];
      for (let { pixel_values: e3 } of r2) {
        e3.unsqueeze_(0);
        let [n3, r3] = e3.dims.slice(-2), i3 = await au(e3, {
          size: [
            um,
            um
          ],
          mode: `bicubic`
        });
        if (t2 > 0) {
          let a3 = [], s3 = mm(t2), c3 = pm(r3 / s3), l2 = pm(n3 / s3);
          for (let t3 = 0; t3 < s3; ++t3) for (let i4 = 0; i4 < s3; ++i4) {
            let o3, u3, d2, f2;
            t3 === s3 - 1 ? (u3 = n3 - l2, f2 = n3) : (u3 = t3 * l2, f2 = (t3 + 1) * l2), i4 === s3 - 1 ? (o3 = r3 - c3, d2 = r3) : (o3 = i4 * c3, d2 = (i4 + 1) * c3);
            let p2 = await lu(e3, [
              u3,
              o3
            ], [
              f2,
              d2
            ], dm);
            a3.push(p2);
          }
          let u2 = await au(mu(a3, 0), {
            size: [
              um,
              um
            ],
            mode: `bicubic`
          });
          o2.push(mu([
            i3,
            u2
          ], 0));
        } else o2.push(i3);
      }
      let s2 = hu(o2, 0), c2 = a2.map((e3) => e3.map((e4) => um * fm(e4 / um)));
      return {
        pixel_values: s2,
        original_sizes: i2,
        reshaped_input_sizes: a2,
        image_sizes: new W(`int64`, c2.flat(), [
          n2,
          2
        ]),
        num_img_tokens: c2.map(([e3, t3]) => this.calc_num_image_tokens_from_image_size(t3, e3))
      };
    }
  }, gm = class extends J {
    get_resize_output_image_size(e2, t2) {
      let { longest_edge: n2 } = t2;
      if (n2 === void 0) throw Error(`size must contain 'longest_edge'`);
      let [r2, i2] = e2.size, a2 = Math.max(r2, i2) / n2, o2 = r2, s2 = i2;
      a2 > 1 && (o2 = Math.floor(r2 / a2), s2 = Math.floor(i2 / a2));
      let { patch_size: c2, spatial_merge_size: l2 } = this.config;
      if (!l2) throw Error(`config must contain 'spatial_merge_size'`);
      let u2 = c2 * l2, d2 = Math.floor((o2 - 1) / u2) + 1, f2 = Math.floor((s2 - 1) / u2) + 1;
      return [
        d2 * u2,
        f2 * u2
      ];
    }
  }, _m = class extends J {
  }, vm = class extends J {
    post_process_object_detection(...e2) {
      return ip(...e2);
    }
  }, ym = class extends J {
    reshape_input_points(e2, t2, n2, r2 = false) {
      e2 = structuredClone(e2);
      let i2 = ai(e2);
      if (i2.length === 3) r2 || (i2 = [
        1,
        ...i2
      ]), e2 = [
        e2
      ];
      else if (i2.length !== 4) throw Error("The input_points must be a 4D tensor of shape `batch_size`, `point_batch_size`, `nb_points_per_image`, `2`.");
      for (let r3 = 0; r3 < e2.length; ++r3) {
        let [i3, a2] = t2[r3], [o2, s2] = n2[r3], c2 = [
          s2 / a2,
          o2 / i3
        ];
        for (let t3 = 0; t3 < e2[r3].length; ++t3) for (let n3 = 0; n3 < e2[r3][t3].length; ++n3) for (let i4 = 0; i4 < e2[r3][t3][n3].length; ++i4) e2[r3][t3][n3][i4] *= c2[i4 % 2];
      }
      return new W(`float32`, Float32Array.from(e2.flat(1 / 0)), i2);
    }
    add_input_labels(e2, t2) {
      let n2 = ai(e2);
      if (n2.length === 2) n2 = [
        1,
        ...n2
      ], e2 = [
        e2
      ];
      else if (n2.length !== 3) throw Error("The input_points must be a 4D tensor of shape `batch_size`, `point_batch_size`, `nb_points_per_image`, `2`.");
      if (n2.some((e3, n3) => e3 !== t2.dims[n3])) throw Error(`The first ${n2.length} dimensions of 'input_points' and 'input_labels' must be the same.`);
      return new W(`int64`, e2.flat(1 / 0).map(BigInt), n2);
    }
    async _call(e2, { input_points: t2 = null, input_labels: n2 = null, input_boxes: r2 = null } = {}) {
      let i2 = await super._call(e2);
      if (t2 && (i2.input_points = this.reshape_input_points(t2, i2.original_sizes, i2.reshaped_input_sizes)), n2) {
        if (!i2.input_points) throw Error("`input_points` must be provided if `input_labels` are provided.");
        i2.input_labels = this.add_input_labels(n2, i2.input_points);
      }
      return r2 && (i2.input_boxes = this.reshape_input_points(r2, i2.original_sizes, i2.reshaped_input_sizes, true)), i2;
    }
    async post_process_masks(e2, t2, n2, { mask_threshold: r2 = 0, binarize: i2 = true, pad_size: a2 = null } = {}) {
      let o2 = [];
      a2 = a2 ?? this.pad_size ?? this.size;
      let s2 = [
        a2.height,
        a2.width
      ];
      for (let a3 = 0; a3 < t2.length; ++a3) {
        let c2 = t2[a3], l2 = n2[a3], u2 = await au(e2[a3], {
          mode: `bilinear`,
          size: s2
        });
        if (u2 = u2.slice(null, null, [
          0,
          l2[0]
        ], [
          0,
          l2[1]
        ]), u2 = await au(u2, {
          mode: `bilinear`,
          size: c2
        }), i2) {
          let e3 = u2.data, t3 = new Uint8Array(e3.length);
          for (let n3 = 0; n3 < e3.length; ++n3) e3[n3] > r2 && (t3[n3] = 1);
          u2 = new W(`bool`, t3, u2.dims);
        }
        o2.push(u2);
      }
      return o2;
    }
    generate_crop_boxes(e2, t2, { crop_n_layers: n2 = 0, overlap_ratio: r2 = 512 / 1500, points_per_crop: i2 = 32, crop_n_points_downscale_factor: a2 = 1 } = {}) {
    }
  }, bm = class extends J {
    post_process_semantic_segmentation(...e2) {
      return ap(...e2);
    }
  }, xm = class extends bm {
  }, Sm = class extends J {
    post_process_semantic_segmentation(...e2) {
      return ap(...e2);
    }
  }, Cm = class extends Sm {
  }, wm = class extends J {
  }, Tm = class extends J {
    pad_image(e2, t2, n2, r2 = {}) {
      let [i2, a2, o2] = t2;
      return super.pad_image(e2, t2, {
        width: a2 + (n2 - a2 % n2) % n2,
        height: i2 + (n2 - i2 % n2) % n2
      }, {
        mode: `symmetric`,
        center: false,
        constant_values: -1,
        ...r2
      });
    }
  }, Em = class extends J {
  }, Dm = class extends Em {
  }, Om = class extends J {
    async _call(e2, t2) {
      Array.isArray(e2) || (e2 = [
        e2
      ]), Array.isArray(t2) || (t2 = [
        t2
      ]);
      let n2 = await Promise.all(e2.map((e3) => this.preprocess(e3))), r2 = await Promise.all(t2.map((e3) => this.preprocess(e3, {
        do_normalize: false,
        do_convert_rgb: false,
        do_convert_grayscale: true
      })));
      return {
        pixel_values: hu(n2.map((e3, t3) => mu([
          e3.pixel_values,
          r2[t3].pixel_values
        ], 0)), 0),
        original_sizes: n2.map((e3) => e3.original_size),
        reshaped_input_sizes: n2.map((e3) => e3.reshaped_input_size)
      };
    }
  }, km = class extends J {
    post_process_pose_estimation(e2, t2, { threshold: n2 = null } = {}) {
      let r2 = e2.tolist(), [i2, a2, o2, s2] = e2.dims, c2 = [];
      for (let e3 = 0; e3 < i2; ++e3) {
        let i3 = r2[e3], a3 = t2[e3], l2 = [];
        for (let e4 = 0; e4 < a3.length; ++e4) {
          let t3 = a3[e4], r3 = [], c3 = [], u2 = [], d2 = t3.at(-2) / s2, f2 = t3.at(-1) / o2;
          for (let e5 = 0; e5 < i3.length; ++e5) {
            let [t4, a4] = [
              0,
              0
            ], o3 = 0, s3 = -1 / 0, l3 = i3[e5];
            for (let e6 = 0; e6 < l3.length; ++e6) {
              let n3 = l3[e6];
              for (let r4 = 0; r4 < n3.length; ++r4) {
                let i4 = n3[r4];
                o3 += i4, s3 = Math.max(s3, i4), t4 += (r4 + 0.5) * i4, a4 += e6 * i4;
              }
            }
            if (n2 != null && s3 < n2) continue;
            let p2 = [
              d2 * t4 / o3,
              f2 * a4 / o3
            ];
            r3.push(p2), u2.push(e5), c3.push(s3);
          }
          l2.push({
            bbox: t3,
            scores: c3,
            labels: u2,
            keypoints: r3
          });
        }
        c2.push(l2);
      }
      return c2;
    }
  }, Am = class extends J {
    post_process_object_detection(...e2) {
      return ip(...e2);
    }
  }, jm = class extends Am {
  }, Mm = class {
    static async from_pretrained(e2, t2 = {}) {
      let n2 = await al(e2, zd, true, t2), r2 = n2.image_processor_type ?? n2.feature_extractor_type, i2 = fp[r2 == null ? void 0 : r2.replace(/Fast$/, ``)];
      return i2 || (i2 = (r2 !== void 0 && P.warn(`Image processor type '${r2}' not found, assuming base ImageProcessor. Please report this at ${Ld}.`), J)), new i2(n2);
    }
  }, Nm = (_k2 = class extends q {
    constructor(e2, t2, n2) {
      super(e2, t2, n2);
      let { tasks_answer_post_processing_type: r2, task_prompts_without_inputs: i2, task_prompts_with_input: a2 } = this.image_processor.config;
      this.tasks_answer_post_processing_type = new Map(Object.entries(r2 ?? {})), this.task_prompts_without_inputs = new Map(Object.entries(i2 ?? {})), this.task_prompts_with_input = new Map(Object.entries(a2 ?? {})), this.regexes = {
        quad_boxes: /(.+?)<loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)>/gm,
        bboxes: /([^<]+)?<loc_(\d+)><loc_(\d+)><loc_(\d+)><loc_(\d+)>/gm
      }, this.size_per_bin = 1e3;
    }
    construct_prompts(e2) {
      typeof e2 == `string` && (e2 = [
        e2
      ]);
      let t2 = [];
      for (let n2 of e2) if (this.task_prompts_without_inputs.has(n2)) t2.push(this.task_prompts_without_inputs.get(n2));
      else {
        for (let [e3, r2] of this.task_prompts_with_input) if (n2.includes(e3)) {
          t2.push(r2.replaceAll(`{input}`, n2).replaceAll(e3, ``));
          break;
        }
        t2.length !== e2.length && t2.push(n2);
      }
      return t2;
    }
    post_process_generation(e2, t2, n2) {
      let r2 = this.tasks_answer_post_processing_type.get(t2) ?? `pure_text`;
      e2 = e2.replaceAll(`<s>`, ``).replaceAll(`</s>`, ``);
      let i2;
      switch (r2) {
        case `pure_text`:
          i2 = e2;
          break;
        case `description_with_bboxes`:
        case `bboxes`:
        case `phrase_grounding`:
        case `ocr`:
          let a2 = r2 === `ocr` ? `quad_boxes` : `bboxes`, o2 = e2.matchAll(this.regexes[a2]), s2 = [], c2 = [];
          for (let [e3, t3, ...r3] of o2) s2.push(t3 ? t3.trim() : s2.at(-1) ?? ``), c2.push(r3.map((e4, t4) => (Number(e4) + 0.5) / this.size_per_bin * n2[t4 % 2]));
          i2 = {
            labels: s2,
            [a2]: c2
          };
          break;
        default:
          throw Error(`Task "${t2}" (of type "${r2}") not yet implemented.`);
      }
      return {
        [t2]: i2
      };
    }
    async _call(e2, t2 = null, n2 = {}) {
      if (!e2 && !t2) throw Error(`Either text or images must be provided`);
      let r2 = await this.image_processor(e2, n2), i2 = t2 ? this.tokenizer(this.construct_prompts(t2), n2) : {};
      return {
        ...r2,
        ...i2
      };
    }
  }, __publicField(_k2, "tokenizer_class", K), __publicField(_k2, "image_processor_class", Mm), _k2), Pm = (_l2 = class extends q {
    constructor(e2, t2, n2) {
      super(e2, t2, n2), this.image_seq_length = this.config.image_seq_length;
      let { boi_token: r2, image_token: i2, eoi_token: a2 } = this.tokenizer.config;
      this.boi_token = r2, this.image_token = i2, this.eoi_token = a2;
      let o2 = i2.repeat(this.image_seq_length);
      this.full_image_sequence = `

${r2}${o2}${a2}

`;
    }
    async _call(e2, t2 = null, n2 = {}) {
      typeof e2 == `string` && (e2 = [
        e2
      ]);
      let r2;
      return t2 && (r2 = await this.image_processor(t2, n2), e2 = e2.map((e3) => e3.replaceAll(this.boi_token, this.full_image_sequence))), {
        ...this.tokenizer(e2, n2),
        ...r2
      };
    }
  }, __publicField(_l2, "tokenizer_class", K), __publicField(_l2, "image_processor_class", Mm), __publicField(_l2, "uses_processor_config", true), __publicField(_l2, "uses_chat_template_file", true), _l2), Fm = (_m2 = class extends q {
    constructor(e2, t2, n2) {
      super(e2, t2, n2), this.audio_seq_length = this.config.audio_seq_length, this.image_seq_length = this.config.image_seq_length;
      let { audio_token_id: r2, boa_token: i2, audio_token: a2, eoa_token: o2, image_token_id: s2, boi_token: c2, image_token: l2, eoi_token: u2 } = this.tokenizer.config;
      this.audio_token_id = r2, this.boa_token = i2, this.audio_token = a2;
      let d2 = a2.repeat(this.audio_seq_length);
      this.full_audio_sequence = `

${i2}${d2}${o2}

`, this.image_token_id = s2, this.boi_token = c2, this.image_token = l2;
      let f2 = l2.repeat(this.image_seq_length);
      this.full_image_sequence = `

${c2}${f2}${u2}

`;
    }
    async _call(e2, t2 = null, n2 = null, r2 = {}) {
      typeof e2 == `string` && (e2 = [
        e2
      ]);
      let i2;
      n2 && (i2 = await this.feature_extractor(n2, r2), e2 = e2.map((e3) => e3.replaceAll(this.audio_token, this.full_audio_sequence)));
      let a2;
      return t2 && (a2 = await this.image_processor(t2, r2), e2 = e2.map((e3) => e3.replaceAll(this.image_token, this.full_image_sequence))), {
        ...this.tokenizer(e2, r2),
        ...a2,
        ...i2
      };
    }
  }, __publicField(_m2, "image_processor_class", Mm), __publicField(_m2, "feature_extractor_class", If), __publicField(_m2, "tokenizer_class", K), __publicField(_m2, "uses_processor_config", true), __publicField(_m2, "uses_chat_template_file", true), _m2), Im = (_n2 = class extends q {
    async _call(e2, t2 = null, ...n2) {
      Array.isArray(e2) || (e2 = [
        e2
      ]);
      let r2, i2;
      if (t2 && (r2 = await this.image_processor(t2), i2 = r2.image_grid_thw), i2) {
        let t3 = this.image_processor.config.merge_size ** 2, n3 = 0, r3 = this.constructor.image_token, a2 = i2.tolist();
        e2 = e2.map((e3) => {
          for (; e3.includes(r3); ) {
            let i3 = Number(a2[n3++].reduce((e4, t4) => e4 * t4, 1n));
            e3 = e3.replace(r3, `<|placeholder|>`.repeat(Math.floor(i3 / t3)));
          }
          return e3.replaceAll(`<|placeholder|>`, r3);
        });
      }
      return {
        ...this.tokenizer(e2),
        ...r2
      };
    }
  }, __publicField(_n2, "image_processor_class", Mm), __publicField(_n2, "tokenizer_class", K), __publicField(_n2, "image_token", `<|image_pad|>`), _n2), Lm = (_o2 = class extends Im {
  }, __publicField(_o2, "image_token", `<|image|>`), _o2), Rm = (_p2 = class extends q {
    _get_num_audio_features(e2) {
      let { hop_length: t2 } = this.feature_extractor.config.melspec_kwargs, { projector_window_size: n2, projector_downsample_rate: r2 } = this.feature_extractor.config, i2 = Math.floor(n2 / r2), a2 = Math.floor(e2 / t2) + 1, o2 = Math.floor(a2 / 2);
      return Math.ceil(o2 / n2) * i2;
    }
    async _call(e2, t2 = null, n2 = {}) {
      if (Array.isArray(e2)) throw Error(`Batched inputs are not supported yet.`);
      let r2 = {};
      if (t2) {
        let { input_features: n3 } = await this.feature_extractor(t2);
        r2.input_features = n3;
        let i2 = this._get_num_audio_features(t2.length);
        r2.input_features_mask = new W(`bool`, new Uint8Array(i2).fill(1), [
          1,
          i2
        ]);
        let a2 = this.config.audio_token ?? `<|audio|>`;
        if (!e2.includes(a2)) throw Error(`The input text does not contain the audio token ${a2}.`);
        e2 = e2.replaceAll(a2, a2.repeat(i2));
      }
      return {
        ...this.tokenizer(e2, {
          add_special_tokens: false,
          ...n2
        }),
        ...r2
      };
    }
  }, __publicField(_p2, "tokenizer_class", K), __publicField(_p2, "feature_extractor_class", If), __publicField(_p2, "uses_processor_config", true), _p2);
  function zm(e2, t2) {
    let n2 = e2.dims.at(-1) - 1, r2 = e2.tolist();
    r2.fill(false, 0, 1), r2.fill(false, n2);
    let i2 = t2.tolist();
    return r2.map((e3, t3) => e3 ? t3 : null).filter((e3) => e3 !== null).map((e3) => i2[e3]);
  }
  var Bm = (_q = class extends q {
    async _call(e2, t2, n2 = {}) {
      let r2 = e2 ? await this.image_processor(e2, n2) : {};
      return {
        ...t2 ? this.tokenizer(t2, n2) : {},
        ...r2
      };
    }
    post_process_grounded_object_detection(e2, t2, { box_threshold: n2 = 0.25, text_threshold: r2 = 0.25, target_sizes: i2 = null } = {}) {
      let { logits: a2, pred_boxes: o2 } = e2, s2 = a2.dims[0];
      if (i2 !== null && i2.length !== s2) throw Error(`Make sure that you pass in as many target sizes as the batch dimension of the logits`);
      let c2 = a2.dims.at(1), l2 = a2.sigmoid(), u2 = l2.max(-1).tolist(), d2 = o2.tolist().map((e3) => e3.map((e4) => rp(e4))), f2 = [];
      for (let e3 = 0; e3 < s2; ++e3) {
        let a3 = i2 === null ? null : i2[e3];
        a3 !== null && (d2[e3] = d2[e3].map((e4) => e4.map((e5, t3) => e5 * a3[(t3 + 1) % 2])));
        let o3 = u2[e3], s3 = [], p2 = [], m2 = [];
        for (let i3 = 0; i3 < c2; ++i3) {
          let a4 = o3[i3];
          if (a4 <= n2) continue;
          let c3 = d2[e3][i3], u3 = l2[e3][i3];
          s3.push(a4), m2.push(c3);
          let f3 = zm(u3.gt(r2), t2[e3]);
          p2.push(f3);
        }
        f2.push({
          scores: s3,
          boxes: m2,
          labels: this.batch_decode(p2)
        });
      }
      return f2;
    }
  }, __publicField(_q, "tokenizer_class", K), __publicField(_q, "image_processor_class", Mm), _q);
  function Vm(e2, t2, n2, r2, i2, a2) {
    let o2 = ``;
    for (let a3 = 0; a3 < t2; ++a3) {
      for (let t3 = 0; t3 < n2; ++t3) o2 += r2 + `<row_${a3 + 1}_col_${t3 + 1}>` + i2.repeat(e2);
      o2 += `
`;
    }
    return o2 += `
${r2}${a2}` + i2.repeat(e2) + `${r2}`, o2;
  }
  function Hm(e2, t2, n2, r2) {
    return `${t2}${r2}` + n2.repeat(e2) + `${t2}`;
  }
  function Um(e2, t2, n2, r2, i2, a2) {
    return e2 === 0 && t2 === 0 ? Hm(n2, r2, i2, a2) : Vm(n2, e2, t2, r2, i2, a2);
  }
  var Wm = (_r2 = class extends q {
    constructor() {
      super(...arguments);
      __publicField(this, "fake_image_token", `<fake_token_around_image>`);
      __publicField(this, "image_token", `<image>`);
      __publicField(this, "global_img_token", `<global-img>`);
    }
    async _call(e2, t2 = null, n2 = {}) {
      n2.return_row_col_info ?? (n2.return_row_col_info = true);
      let r2;
      t2 && (r2 = await this.image_processor(t2, n2)), Array.isArray(e2) || (e2 = [
        e2
      ]);
      let i2 = r2.rows ?? [
        Array(e2.length).fill(0)
      ], a2 = r2.cols ?? [
        Array(e2.length).fill(0)
      ], o2 = this.config.image_seq_len, s2 = [], c2 = [];
      for (let t3 = 0; t3 < e2.length; ++t3) {
        let n3 = e2[t3], r3 = i2[t3], l2 = a2[t3];
        s2.push(ui(n3, this.image_token));
        let u2 = r3.map((e3, t4) => Um(e3, l2[t4], o2, this.fake_image_token, this.image_token, this.global_img_token)), d2 = n3.split(this.image_token);
        if (d2.length === 0) throw Error(`The image token should be present in the text.`);
        let f2 = d2[0];
        for (let e3 = 0; e3 < u2.length; ++e3) f2 += u2[e3] + d2[e3 + 1];
        c2.push(f2);
      }
      return {
        ...this.tokenizer(c2),
        ...r2
      };
    }
  }, __publicField(_r2, "image_processor_class", Mm), __publicField(_r2, "tokenizer_class", K), __publicField(_r2, "uses_processor_config", true), _r2), Gm = (_s2 = class extends q {
    constructor(e2, t2, n2) {
      super(e2, t2, n2), this.image_tag = this.config.image_tag, this.image_start_tag = this.config.image_start_tag, this.image_end_tag = this.config.image_end_tag, this.num_image_tokens = this.config.num_image_tokens;
    }
    async _call(e2, { images: t2 = null, chat_template: n2 = `default` } = {}) {
      t2 ? Array.isArray(t2) || (t2 = [
        t2
      ]) : t2 = await Promise.all(e2.filter((e3) => e3.images).flatMap((e3) => e3.images).map((e3) => Kf.read(e3)));
      let r2 = this.tokenizer, i2 = r2.apply_chat_template(e2, {
        tokenize: false,
        add_generation_prompt: true,
        chat_template: n2
      }), a2 = (e3) => r2.encode(e3, {
        add_special_tokens: false
      }), o2 = i2.split(this.image_tag), s2 = o2.length - 1;
      if (t2.length !== s2) throw Error(`Number of images provided (${t2.length}) does not match number of "${this.image_tag}" image tags (${s2})`);
      let [c2, l2, u2] = r2.convert_tokens_to_ids([
        this.image_tag,
        this.image_start_tag,
        this.image_end_tag
      ]), d2 = a2(o2[0]), f2 = Array(d2.length).fill(false);
      for (let e3 = 1; e3 < o2.length; ++e3) {
        let t3 = Array(this.num_image_tokens).fill(c2), n3 = a2(o2[e3]);
        d2 = oi(d2, [
          l2
        ], t3, [
          u2
        ], n3);
        let r3 = Array(this.num_image_tokens).fill(true);
        f2 = oi(f2, [
          false
        ], r3, [
          false
        ], Array(n3.length).fill(false));
      }
      let p2 = [
        1,
        d2.length
      ], m2 = {
        input_ids: new W(`int64`, d2, p2),
        attention_mask: new W(`int64`, Array(d2.length).fill(1), p2),
        images_seq_mask: new W(`bool`, f2, p2),
        images_emb_mask: new W(`bool`, Array(s2 * this.num_image_tokens).fill(true), [
          1,
          s2,
          this.num_image_tokens
        ])
      };
      if (t2 && t2.length > 0) {
        let e3 = await this.image_processor(t2);
        return e3.pixel_values.unsqueeze_(0), {
          ...m2,
          ...e3
        };
      }
      return m2;
    }
  }, __publicField(_s2, "image_processor_class", Mm), __publicField(_s2, "tokenizer_class", K), __publicField(_s2, "uses_processor_config", true), _s2), Km = (_t3 = class extends q {
    async _call(e2 = null, t2 = null, n2 = {}) {
      if (!e2 && !t2) throw Error(`Either text or images must be provided`);
      let r2 = e2 ? this.tokenizer(e2, n2) : {}, i2 = t2 ? await this.image_processor(t2, n2) : {};
      return {
        ...r2,
        ...i2
      };
    }
  }, __publicField(_t3, "tokenizer_class", K), __publicField(_t3, "image_processor_class", Mm), _t3), qm = (_u2 = class extends q {
    async _call(e2, t2 = null, n2 = {}) {
      let { image_rows: r2, image_cols: i2, image_sizes: a2, ...o2 } = await this.image_processor(e2, {
        ...n2,
        return_row_col_info: true
      });
      if (t2) {
        let e3 = this.config.image_token ?? `<image>`, { tile_size: n3 = 512, downsample_factor: o3 = 2, encoder_patch_size: s2 = 16, use_thumbnail: c2 = true } = this.image_processor.config, l2 = (e4) => Math.ceil(Math.floor(e4 / s2) / o3), u2 = l2(n3) ** 2, d2 = this.config.image_start_token ?? `<|image_start|>`, f2 = this.config.image_end_token ?? `<|image_end|>`, p2 = this.config.image_thumbnail ?? `<|img_thumbnail|>`;
        Array.isArray(t2) || (t2 = [
          t2
        ]);
        let m2 = 0;
        t2 = t2.map((t3) => {
          let n4 = t3.split(e3);
          return n4[0] + n4.slice(1).map((t4) => {
            let n5 = m2++, [o4, s3] = a2[n5], h2 = r2[n5], g2 = i2[n5], _2 = l2(o4) * l2(s3), v2 = d2;
            if (h2 > 1 || g2 > 1) {
              let t5 = e3.repeat(u2);
              for (let e4 = 0; e4 < h2; ++e4) for (let n6 = 0; n6 < g2; ++n6) v2 += `<|img_row_${e4 + 1}_col_${n6 + 1}|>` + t5;
              c2 && (v2 += p2 + e3.repeat(_2));
            } else v2 += e3.repeat(_2);
            return v2 + f2 + t4;
          }).join(``);
        });
      }
      return {
        ...o2,
        ...t2 ? this.tokenizer(t2, n2) : {}
      };
    }
  }, __publicField(_u2, "tokenizer_class", K), __publicField(_u2, "image_processor_class", Mm), _u2), Jm = (_v2 = class extends q {
    async _call(e2, t2 = null, n2 = {}) {
      var _a3;
      let r2 = e2 ? await this.image_processor(e2, n2) : {};
      if (t2 !== null) {
        Array.isArray(t2) || (t2 = [
          t2
        ]);
        let e3 = this.tokenizer.config.image_token ?? `<|image|>`, n3 = ((_a3 = r2.image_grid_thw) == null ? void 0 : _a3.tolist()) ?? [], i2 = t2.reduce((t3, n4) => t3 + n4.split(e3).length - 1, 0);
        if (i2 !== n3.length) throw Error(`Found ${i2} ${e3} tokens in the text but received ${n3.length} images.`);
        let a2 = this.image_processor.config.merge_size, o2 = 0;
        t2 = t2.map((t3) => t3.replaceAll(e3, () => {
          let t4 = Number(n3[o2++].reduce((e4, t5) => e4 * t5, 1n));
          return e3.repeat(t4 / a2 ** 2);
        }));
      }
      return {
        ...r2,
        ...t2 === null ? {} : this.tokenizer(t2, n2)
      };
    }
  }, __publicField(_v2, "tokenizer_class", K), __publicField(_v2, "image_processor_class", Mm), _v2), Ym = (_w2 = class extends q {
    async _call(e2, t2 = null, n2 = {}) {
      let r2 = await this.image_processor(e2, n2);
      if (t2) {
        let [e3, n3] = r2.pixel_values.dims.slice(-2), { image_token: i3, patch_size: a2, num_additional_image_tokens: o2 } = this.config, s2 = Math.floor(e3 / a2) * Math.floor(n3 / a2) + o2;
        t2 = structuredClone(t2), Array.isArray(t2) || (t2 = [
          t2
        ]);
        for (let e4 = 0; e4 < t2.length; ++e4) t2[e4] = t2[e4].replace(i3, i3.repeat(s2));
      }
      let i2 = t2 ? this.tokenizer(t2, n2) : {};
      return {
        ...r2,
        ...i2
      };
    }
  }, __publicField(_w2, "tokenizer_class", K), __publicField(_w2, "image_processor_class", Mm), __publicField(_w2, "uses_processor_config", true), _w2), Xm = {
    char: [
      `char_decode`,
      1
    ],
    bpe: [
      `bpe_decode`,
      2
    ],
    wp: [
      `wp_decode`,
      102
    ]
  }, Zm = (_x2 = class extends q {
    get char_tokenizer() {
      return this.components.char_tokenizer;
    }
    get bpe_tokenizer() {
      return this.components.bpe_tokenizer;
    }
    get wp_tokenizer() {
      return this.components.wp_tokenizer;
    }
    _decode_helper(e2, t2) {
      if (!Xm.hasOwnProperty(t2)) throw Error(`Format ${t2} is not supported.`);
      let [n2, r2] = Xm[t2], i2 = this[n2].bind(this), [a2, o2] = e2.dims, s2 = [], c2 = [], l2 = e2.tolist();
      for (let e3 = 0; e3 < a2; ++e3) {
        let t3 = l2[e3], n3 = [], i3 = [];
        for (let e4 = 1; e4 < o2; ++e4) {
          let [a4, o3] = dl(cl(t3[e4]));
          if (i3.push(a4), o3 == r2) break;
          n3.push(o3);
        }
        let a3 = i3.length > 0 ? i3.reduce((e4, t4) => e4 * t4, 1) : 0;
        c2.push(n3), s2.push(a3);
      }
      return [
        i2(c2),
        s2
      ];
    }
    char_decode(e2) {
      return this.char_tokenizer.batch_decode(e2).map((e3) => e3.replaceAll(` `, ``));
    }
    bpe_decode(e2) {
      return this.bpe_tokenizer.batch_decode(e2);
    }
    wp_decode(e2) {
      return this.wp_tokenizer.batch_decode(e2).map((e3) => e3.replaceAll(` `, ``));
    }
    batch_decode([e2, t2, n2]) {
      let [r2, i2] = this._decode_helper(e2, `char`), [a2, o2] = this._decode_helper(t2, `bpe`), [s2, c2] = this._decode_helper(n2, `wp`), l2 = [], u2 = [];
      for (let e3 = 0; e3 < r2.length; ++e3) {
        let [t3, n3] = dl([
          i2[e3],
          o2[e3],
          c2[e3]
        ]);
        l2.push([
          r2[e3],
          a2[e3],
          s2[e3]
        ][n3]), u2.push(t3);
      }
      return {
        generated_text: l2,
        scores: u2,
        char_preds: r2,
        bpe_preds: a2,
        wp_preds: s2
      };
    }
    static async from_pretrained(...e2) {
      let t2 = await super.from_pretrained(...e2), n2 = await K.from_pretrained(`Xenova/gpt2`), r2 = await K.from_pretrained(`Xenova/bert-base-uncased`);
      return t2.components = {
        image_processor: t2.image_processor,
        char_tokenizer: t2.tokenizer,
        bpe_tokenizer: n2,
        wp_tokenizer: r2
      }, t2;
    }
    async _call(e2, t2 = null) {
      let n2 = await this.image_processor(e2);
      return t2 && (n2.labels = this.tokenizer(t2).input_ids), n2;
    }
  }, __publicField(_x2, "tokenizer_class", K), __publicField(_x2, "image_processor_class", Mm), _x2), Qm = (_y2 = class extends q {
    async _call(e2) {
      return await this.feature_extractor(e2);
    }
  }, __publicField(_y2, "tokenizer_class", K), __publicField(_y2, "feature_extractor_class", If), _y2), $m = (_z = class extends q {
  }, __publicField(_z, "tokenizer_class", K), __publicField(_z, "image_processor_class", Mm), _z), eh = `<image>`;
  function th(e2, t2, n2, r2, i2) {
    return `${r2.repeat(n2 * i2)}${t2}${e2}
`;
  }
  var nh = (_A2 = class extends q {
    async _call(e2, t2 = null, n2 = {}) {
      t2 || (t2 = (P.warn(`You are using PaliGemma without a text prefix. It will perform as a picture-captioning model.`), ``)), Array.isArray(e2) || (e2 = [
        e2
      ]), Array.isArray(t2) || (t2 = [
        t2
      ]);
      let r2 = this.tokenizer.bos_token, i2 = this.image_processor.config.image_seq_length, a2;
      t2.some((e3) => e3.includes(eh)) ? a2 = t2.map((e3) => {
        let t3 = e3.replaceAll(eh, eh.repeat(i2)), n3 = t3.lastIndexOf(eh), a3 = n3 === -1 ? 0 : n3 + eh.length;
        return t3.slice(0, a3) + r2 + t3.slice(a3) + `
`;
      }) : (P.warn("You are passing both `text` and `images` to `PaliGemmaProcessor`. The processor expects special image tokens in the text, as many tokens as there are images per each text. It is recommended to add `<image>` tokens in the very beginning of your text. For this call, we will infer how many images each text has and add special tokens."), a2 = t2.map((t3) => th(t3, r2, i2, eh, e2.length)));
      let o2 = this.tokenizer(a2, n2);
      return {
        ...await this.image_processor(e2, n2),
        ...o2
      };
    }
  }, __publicField(_A2, "tokenizer_class", K), __publicField(_A2, "image_processor_class", Mm), __publicField(_A2, "uses_processor_config", false), _A2), rh = `<|image|>`, ih = /<\|image_\d+\|>/g, ah = (_B = class extends q {
    async _call(e2, t2 = null, { padding: n2 = true, truncation: r2 = true, num_crops: i2 = null } = {}) {
      Array.isArray(e2) || (e2 = [
        e2
      ]);
      let a2, o2;
      if (t2) {
        o2 = await this.image_processor(t2, {
          num_crops: i2
        });
        let { num_img_tokens: s2 } = o2, c2 = e2.map((e3, t3) => e3.split(ih).join(rh.repeat(s2[t3])));
        a2 = this.tokenizer(c2, {
          padding: n2,
          truncation: r2
        });
        let l2 = this.tokenizer._tokenizer.token_to_id(rh);
        a2.input_ids.map_((e3) => e3 == l2 ? -e3 : e3);
      } else a2 = this.tokenizer(e2);
      return {
        ...a2,
        ...o2
      };
    }
  }, __publicField(_B, "image_processor_class", Mm), __publicField(_B, "tokenizer_class", K), _B), oh = (_C2 = class extends q {
    async _call(e2, t2 = null, n2 = {}) {
      let r2 = await this.image_processor(e2, n2);
      if (t2) {
        let [e3, n3] = r2.pixel_values.dims.slice(-2), { image_token: i3, image_break_token: a2, image_end_token: o2, patch_size: s2, spatial_merge_size: c2 } = this.config, l2 = s2 * c2, u2 = Math.floor(e3 / l2), d2 = Math.floor(n3 / l2);
        t2 = structuredClone(t2), Array.isArray(t2) || (t2 = [
          t2
        ]);
        for (let e4 = 0; e4 < t2.length; ++e4) {
          let n4 = i3.repeat(d2), r3 = n4 + a2, s3 = n4 + o2, c3 = r3.repeat(u2 - 1) + s3;
          t2[e4] = t2[e4].replace(i3, c3);
        }
      }
      let i2 = t2 ? this.tokenizer(t2, n2) : {};
      return {
        ...r2,
        ...i2
      };
    }
  }, __publicField(_C2, "tokenizer_class", K), __publicField(_C2, "image_processor_class", Mm), __publicField(_C2, "uses_processor_config", true), _C2), sh = (_D2 = class extends q {
    async _call(e2) {
      return await this.feature_extractor(e2);
    }
    post_process_speaker_diarization(...e2) {
      return this.feature_extractor.post_process_speaker_diarization(...e2);
    }
    get sampling_rate() {
      return this.feature_extractor.config.sampling_rate;
    }
  }, __publicField(_D2, "feature_extractor_class", Of), _D2), ch = class extends Im {
  }, lh = class extends ch {
  }, uh = (_E2 = class extends q {
    async _call(...e2) {
      return await this.image_processor(...e2);
    }
    post_process_masks(...e2) {
      return this.image_processor.post_process_masks(...e2);
    }
    reshape_input_points(...e2) {
      return this.image_processor.reshape_input_points(...e2);
    }
  }, __publicField(_E2, "image_processor_class", Mm), _E2), dh = class extends uh {
  }, fh = class extends dh {
  }, ph = (_F = class extends q {
    async _call(e2) {
      return await this.feature_extractor(e2);
    }
  }, __publicField(_F, "tokenizer_class", K), __publicField(_F, "feature_extractor_class", If), _F), mh = (_G = class extends q {
    async _call(e2, t2 = null, n2 = {}) {
      if (Array.isArray(e2)) throw Error(`Batched inputs are not supported yet.`);
      let r2 = {};
      if (t2) {
        let i2 = t2.length, { input_features: a2 } = await this.feature_extractor(t2, {
          ...n2,
          max_length: i2
        }), o2 = Math.round(i2 / this.config.encoder_ds_factor + 1e-4), s2 = 1 + Math.ceil(o2 / this.config.stack_factor);
        r2.audio_token_len = [
          s2
        ], r2.audio_values = a2;
        let c2 = this.config.audio_placeholder;
        if (!e2.includes(c2)) throw Error(`The input text does not contain the image token ${c2}.`);
        e2 = e2.replaceAll(c2, c2.repeat(s2));
      }
      return {
        ...this.tokenizer(e2, {
          add_special_tokens: false,
          ...n2
        }),
        ...r2
      };
    }
  }, __publicField(_G, "tokenizer_class", K), __publicField(_G, "feature_extractor_class", If), __publicField(_G, "uses_processor_config", true), _G), hh = `[AUDIO]`, gh = `[BEGIN_AUDIO]`, _h = 375;
  function vh(e2, t2) {
    let n2 = [];
    for (let r2 = 0; r2 < e2.length; r2 += t2) n2.push(e2.subarray(r2, Math.min(r2 + t2, e2.length)));
    return n2;
  }
  var yh = (_H = class extends q {
    async _call(e2, t2 = null, n2 = {}) {
      if (Array.isArray(e2)) throw Error(`Batched inputs are not supported yet.`);
      let r2 = {};
      if (t2) {
        if (!e2.includes(hh)) throw Error(`The input text does not contain the audio token ${hh}.`);
        Array.isArray(t2) || (t2 = [
          t2
        ]);
        let i2 = e2.split(hh), a2 = i2.length - 1;
        if (a2 !== t2.length) throw Error(`The number of audio inputs (${t2.length}) does not match the number of audio tokens in the text (${a2}).`);
        let o2 = this.feature_extractor.config.n_samples, s2 = t2.map((e3) => vh(e3, o2)), c2 = s2.map((e3) => e3.length), l2 = s2.flat(), u2 = (await Promise.all(l2.map((e3) => this.feature_extractor(e3, n2)))).map((e3) => e3.input_features);
        r2.audio_values = u2.length > 1 ? mu(u2, 0) : u2[0];
        let d2 = i2[0];
        for (let e3 = 0; e3 < c2.length; ++e3) {
          d2 += gh;
          for (let t3 = 0; t3 < c2[e3]; ++t3) d2 += hh.repeat(_h);
          d2 += i2[e3 + 1];
        }
        e2 = d2;
      }
      return {
        ...this.tokenizer(e2, {
          add_special_tokens: false,
          ...n2
        }),
        ...r2
      };
    }
  }, __publicField(_H, "tokenizer_class", K), __publicField(_H, "feature_extractor_class", If), __publicField(_H, "uses_processor_config", false), _H), bh = 32, xh = 6, Sh = 8, Ch = 10, wh = 32, Th = (_I = class extends q {
    get num_mel_frames_first_audio_chunk() {
      return (xh + 1) * Sh;
    }
    get num_samples_first_audio_chunk() {
      let { hop_length: e2, n_fft: t2 } = this.feature_extractor.config;
      return (this.num_mel_frames_first_audio_chunk - 1) * e2 + Math.floor(t2 / 2);
    }
    get num_samples_per_audio_chunk() {
      let { hop_length: e2, n_fft: t2 } = this.feature_extractor.config;
      return Sh * e2 + t2;
    }
    get num_right_pad_tokens() {
      return xh + 1 + Ch;
    }
    get audio_length_per_tok() {
      return Sh;
    }
    get raw_audio_length_per_tok() {
      return Sh * this.feature_extractor.config.hop_length;
    }
    async _call(e2, { is_streaming: t2 = false, is_first_audio_chunk: n2 = true } = {}) {
      if (Wd(e2, `VoxtralRealtimeProcessor`), !t2 && !n2) throw Error("In non-streaming mode (`is_streaming=false`), `is_first_audio_chunk` must be `true`.");
      if (n2) {
        if (t2) {
          let t3 = bh * this.raw_audio_length_per_tok, n3 = new Float32Array(t3 + e2.length);
          n3.set(e2, t3);
          let r2 = await this.feature_extractor(n3, {
            center: true
          }), i2 = 1 + (bh + xh), a2 = new BigInt64Array(i2).fill(BigInt(wh));
          return a2[0] = 1n, {
            input_ids: new W(`int64`, a2, [
              1,
              i2
            ]),
            ...r2
          };
        }
        {
          let t3 = this.num_right_pad_tokens * this.raw_audio_length_per_tok, n3 = new Float32Array(e2.length + t3);
          return n3.set(e2), await this.feature_extractor(n3, {
            center: true
          });
        }
      }
      return await this.feature_extractor(e2, {
        center: false
      });
    }
  }, __publicField(_I, "tokenizer_class", K), __publicField(_I, "feature_extractor_class", If), __publicField(_I, "uses_processor_config", false), _I), Eh = (_J = class extends q {
    async _call(e2) {
      return await this.feature_extractor(e2);
    }
  }, __publicField(_J, "tokenizer_class", K), __publicField(_J, "feature_extractor_class", If), _J), Dh = (_K = class extends q {
    async _call(e2) {
      return await this.feature_extractor(e2);
    }
  }, __publicField(_K, "tokenizer_class", K), __publicField(_K, "feature_extractor_class", If), _K), Oh = (_L = class extends q {
    async _call(e2) {
      return await this.feature_extractor(e2);
    }
  }, __publicField(_L, "tokenizer_class", K), __publicField(_L, "feature_extractor_class", If), _L), kh = class {
    static async from_pretrained(e2, t2 = {}) {
      let n2 = await al(e2, zd, true, t2), { image_processor_type: r2, feature_extractor_type: i2, processor_class: a2 } = n2;
      if (a2 && Hd[a2]) return Hd[a2].from_pretrained(e2, t2);
      if (!r2 && !i2) throw Error("No `image_processor_type` or `feature_extractor_type` found in the config.");
      let o2 = {};
      if (r2) {
        let e3 = fp[r2.replace(/Fast$/, ``)];
        if (!e3) throw Error(`Unknown image_processor_type: '${r2}'.`);
        o2.image_processor = new e3(n2);
      }
      if (i2) {
        let e3 = fp[i2];
        if (e3) o2.image_processor = new e3(n2);
        else {
          let e4 = Gd[i2];
          if (!e4) throw Error(`Unknown feature_extractor_type: '${i2}'.`);
          o2.feature_extractor = new e4(n2);
        }
      }
      return new q({}, o2, null);
    }
  };
  async function Ah(e2, t2) {
    return await al(e2, `config.json`, true, t2);
  }
  function jh(e2) {
    let t2 = {}, n2 = {};
    switch (e2.model_type) {
      case `llava`:
      case `paligemma`:
      case `gemma3`:
      case `florence2`:
      case `llava_onevision`:
      case `idefics3`:
      case `granite_speech`:
      case `ultravox`:
      case `voxtral`:
      case `voxtral_realtime`:
      case `smolvlm`:
      case `gemma3n`:
      case `gemma4`:
      case `lfm2_vl`:
      case `lfm3_vl`:
      case `chatterbox`:
      case `lighton_ocr`:
      case `glm_ocr`:
      case `mistral3`:
      case `qwen2_5_vl`:
      case `qwen3_vl`:
      case `qwen3_vl_moe`:
        n2 = jh(e2.text_config);
        break;
      case `moondream1`:
        n2 = jh(e2.phi_config);
        break;
      case `musicgen`:
        n2 = jh(e2.decoder);
        break;
      case `multi_modality`:
        n2 = jh(e2.language_config);
        break;
      case `gpt2`:
      case `gptj`:
      case `jais`:
      case `codegen`:
      case `gpt_bigcode`:
        t2.num_heads = `n_head`, t2.num_layers = `n_layer`, t2.hidden_size = `n_embd`;
        break;
      case `gpt_neox`:
      case `stablelm`:
      case `opt`:
      case `falcon`:
      case `modernbert-decoder`:
        t2.num_heads = `num_attention_heads`, t2.num_layers = `num_hidden_layers`, t2.hidden_size = `hidden_size`;
        break;
      case `gpt_oss`:
      case `llama`:
      case `llama4_text`:
      case `nanochat`:
      case `apertus`:
      case `arcee`:
      case `afmoe`:
      case `lfm2`:
      case `lfm2_moe`:
      case `lfm3`:
      case `smollm3`:
      case `olmo`:
      case `olmo2`:
      case `olmo3`:
      case `mobilellm`:
      case `granite`:
      case `granitemoehybrid`:
      case `cohere`:
      case `cohere2`:
      case `mistral`:
      case `voxtral_realtime_text`:
      case `voxtral_realtime_encoder`:
      case `starcoder2`:
      case `qwen2`:
      case `qwen2_moe`:
      case `qwen2_vl`:
      case `qwen2_vl_text`:
      case `qwen2_5_vl_text`:
      case `qwen3_moe`:
      case `qwen3_vl_text`:
      case `qwen3_vl_moe_text`:
      case `phi`:
      case `phi3`:
      case `phi3_v`:
      case `llava_qwen2`:
        t2.num_heads = `num_key_value_heads`, t2.num_layers = `num_hidden_layers`, t2.hidden_size = `hidden_size`, t2.num_attention_heads = `num_attention_heads`, t2.dim_kv = `head_dim`;
        break;
      case `qwen3`:
      case `solar_open`:
      case `glm_ocr_text`:
      case `gemma`:
      case `gemma2`:
      case `vaultgemma`:
      case `gemma3_text`:
      case `gemma3n_text`:
      case `gemma4_text`:
      case `glm`:
      case `helium`:
      case `ernie4_5`:
      case `hunyuan_v1_dense`:
      case `falcon_h1`:
      case `nemotron_h`:
      case `ministral`:
      case `ministral3`:
        t2.num_heads = `num_key_value_heads`, t2.num_layers = `num_hidden_layers`, t2.dim_kv = `head_dim`;
        break;
      case `openelm`:
        t2.num_heads = `num_kv_heads`, t2.num_layers = `num_transformer_layers`, t2.dim_kv = `head_dim`;
        break;
      case `gpt_neo`:
      case `donut-swin`:
        t2.num_heads = `num_heads`, t2.num_layers = `num_layers`, t2.hidden_size = `hidden_size`;
        break;
      case `bloom`:
        t2.num_heads = `n_head`, t2.num_layers = `n_layer`, t2.hidden_size = `hidden_size`;
        break;
      case `mpt`:
        t2.num_heads = `n_heads`, t2.num_layers = `n_layers`, t2.hidden_size = `d_model`;
        break;
      case `exaone`:
        t2.num_heads = `num_key_value_heads`, t2.num_layers = `num_layers`, t2.dim_kv = `head_dim`, t2.num_attention_heads = `num_attention_heads`;
        break;
      case `youtu`:
      case `deepseek_v3`:
      case `deepseek_v4`:
      case `glm_moe_dsa`:
      case `mistral4`:
        t2.num_heads = `num_key_value_heads`, t2.num_layers = `num_hidden_layers`, t2.dim_kv = e2.model_type === `deepseek_v4` ? `head_dim` : `qk_head_dim`, t2.num_attention_heads = `num_attention_heads`;
        break;
      case `zaya`:
        t2.num_heads = `num_key_value_heads`, t2.num_layers = `num_hidden_layers`, t2.hidden_size = `hidden_size`, t2.dim_kv = `head_dim`, t2.num_attention_heads = `num_attention_heads`;
        break;
      case `hrm_text`:
        t2.num_heads = `num_key_value_heads`, t2.num_layers = `num_hidden_layers`, t2.hidden_size = `hidden_size`, t2.dim_kv = `head_dim`, t2.num_attention_heads = `num_attention_heads`;
        break;
      case `t5`:
      case `mt5`:
      case `longt5`:
        t2.num_decoder_layers = `num_decoder_layers`, t2.num_decoder_heads = `num_heads`, t2.decoder_dim_kv = `d_kv`, t2.num_encoder_layers = `num_layers`, t2.num_encoder_heads = `num_heads`, t2.encoder_dim_kv = `d_kv`;
        break;
      case `bart`:
      case `mbart`:
      case `marian`:
      case `whisper`:
      case `lite-whisper`:
      case `m2m_100`:
      case `blenderbot`:
      case `blenderbot-small`:
      case `florence2_language`:
        t2.num_decoder_layers = `decoder_layers`, t2.num_decoder_heads = `decoder_attention_heads`, t2.decoder_hidden_size = `d_model`, t2.num_encoder_layers = `encoder_layers`, t2.num_encoder_heads = `encoder_attention_heads`, t2.encoder_hidden_size = `d_model`;
        break;
      case `speecht5`:
        t2.num_decoder_layers = `decoder_layers`, t2.num_decoder_heads = `decoder_attention_heads`, t2.decoder_hidden_size = `hidden_size`, t2.num_encoder_layers = `encoder_layers`, t2.num_encoder_heads = `encoder_attention_heads`, t2.encoder_hidden_size = `hidden_size`;
        break;
      case `trocr`:
        t2.num_encoder_layers = t2.num_decoder_layers = `decoder_layers`, t2.num_encoder_heads = t2.num_decoder_heads = `decoder_attention_heads`, t2.encoder_hidden_size = t2.decoder_hidden_size = `d_model`;
        break;
      case `musicgen_decoder`:
        t2.num_encoder_layers = t2.num_decoder_layers = `num_hidden_layers`, t2.num_encoder_heads = t2.num_decoder_heads = `num_attention_heads`, t2.encoder_hidden_size = t2.decoder_hidden_size = `hidden_size`;
        break;
      case `moonshine`:
        t2.num_decoder_layers = `decoder_num_hidden_layers`, t2.num_decoder_heads = `decoder_num_key_value_heads`, t2.num_encoder_layers = `encoder_num_hidden_layers`, t2.num_encoder_heads = `encoder_num_key_value_heads`, t2.encoder_hidden_size = t2.decoder_hidden_size = `hidden_size`;
        break;
      case `cohere_asr`:
        t2.num_decoder_layers = `num_hidden_layers`, t2.num_decoder_heads = `num_key_value_heads`, t2.decoder_hidden_size = `hidden_size`, t2.decoder_dim_kv = `head_dim`;
        let { num_hidden_layers: r3, num_attention_heads: i2, hidden_size: a2 } = e2.encoder_config;
        n2 = {
          num_encoder_layers: r3,
          num_encoder_heads: i2,
          encoder_hidden_size: a2,
          encoder_dim_kv: e2.head_dim
        };
        break;
      case `vision-encoder-decoder`:
        let o2 = jh(e2.decoder), s2 = `num_decoder_layers` in o2, c2 = li(e2, [
          `model_type`,
          `is_encoder_decoder`
        ]);
        return s2 ? (c2.num_decoder_layers = o2.num_decoder_layers, c2.num_decoder_heads = o2.num_decoder_heads, c2.decoder_hidden_size = o2.decoder_hidden_size, c2.num_encoder_layers = o2.num_encoder_layers, c2.num_encoder_heads = o2.num_encoder_heads, c2.encoder_hidden_size = o2.encoder_hidden_size) : (c2.num_layers = o2.num_layers, c2.num_heads = o2.num_heads, c2.hidden_size = o2.hidden_size), c2;
    }
    let r2 = {
      ...n2,
      ...li(e2, [
        `model_type`,
        `multi_query`,
        `is_encoder_decoder`
      ])
    };
    for (let n3 in t2) r2[n3] = e2[t2[n3]];
    return r2;
  }
  function Mh(e2, t2) {
    e2 instanceof Ph || (e2 = new Ph(e2));
    let n2 = (t2 == null ? void 0 : t2.prefix) ?? `past_key_values`, r2 = n2 === `present` ? `present` : `past`, i2 = /* @__PURE__ */ new Set();
    if ([
      `lfm2`,
      `lfm2_moe`,
      `lfm3`
    ].includes(e2.model_type)) {
      let { layer_types: t3 } = e2;
      for (let e3 = 0; e3 < t3.length; ++e3) if (t3[e3] === `full_attention` || t3[e3] === `sliding_attention`) i2.add(`${n2}.${e3}.key`), i2.add(`${n2}.${e3}.value`);
      else if (t3[e3] === `conv`) i2.add(`${r2}_conv.${e3}`);
      else throw Error(`Unsupported layer type: ${t3[e3]}`);
      return i2;
    }
    if ([
      `granitemoehybrid`,
      `falcon_h1`,
      `nemotron_h`
    ].includes(e2.model_type)) {
      let t3 = e2, a2 = t3.layer_types ?? t3.layers_block_type, o2 = t3.num_hidden_layers ?? (a2 == null ? void 0 : a2.length);
      for (let e3 = 0; e3 < o2; ++e3) a2 && a2[e3] !== `mamba` || (i2.add(`${r2}_conv.${e3}`), i2.add(`${r2}_ssm.${e3}`)), a2 && a2[e3] !== `attention` || (i2.add(`${n2}.${e3}.key`), i2.add(`${n2}.${e3}.value`));
      return i2;
    }
    if ([
      `qwen3_next`,
      `qwen3_5_text`,
      `qwen3_5_moe_text`,
      `olmo_hybrid`
    ].includes(e2.model_type)) {
      let { layer_types: t3 } = e2;
      for (let a2 = 0; a2 < t3.length; ++a2) if (t3[a2] === `full_attention`) i2.add(`${n2}.${a2}.key`), i2.add(`${n2}.${a2}.value`);
      else if (t3[a2] === `linear_attention`) e2.model_type === `olmo_hybrid` ? (i2.add(`${r2}_conv.${a2}.key`), i2.add(`${r2}_conv.${a2}.value`), i2.add(`${r2}_conv.${a2}.query`)) : i2.add(`${r2}_conv.${a2}`), i2.add(`${r2}_recurrent.${a2}`);
      else throw Error(`Unsupported layer type: ${t3[a2]}`);
      return i2;
    }
    if ([
      `gemma4`,
      `gemma4_text`
    ].includes(e2.model_type)) {
      let t3 = e2.model_type === `gemma4` ? e2.text_config : e2, r3 = t3.num_hidden_layers - (t3.num_kv_shared_layers ?? 0);
      for (let e3 = 0; e3 < r3; ++e3) i2.add(`${n2}.${e3}.key`), i2.add(`${n2}.${e3}.value`);
      return i2;
    }
    if (e2.model_type === `deepseek_v4`) {
      let { layer_types: t3, num_hidden_layers: a2 } = e2;
      for (let e3 = 0; e3 < a2; ++e3) {
        i2.add(`${n2}.${e3}.key`), i2.add(`${n2}.${e3}.value`);
        let a3 = t3[e3];
        if (a3 === `compressed_sparse_attention`) i2.add(`${r2}_compressor.${e3}.kv`), i2.add(`${r2}_compressor.${e3}.gate`), i2.add(`${r2}_indexer.${e3}.kv`), i2.add(`${r2}_indexer.${e3}.gate`);
        else if (a3 === `heavily_compressed_attention`) i2.add(`${r2}_compressor.${e3}.kv`), i2.add(`${r2}_compressor.${e3}.gate`);
        else if (a3 && a3 !== `sliding_attention`) throw Error(`Unsupported layer type: ${a3}`);
      }
      return i2;
    }
    if (e2.model_type === `zaya`) {
      let { num_hidden_layers: t3, cca_time1: r3 } = e2, a2 = r3 ?? 1;
      for (let e3 = 0; e3 < t3; e3 += a2) i2.add(`${n2}.${e3}.key`), i2.add(`${n2}.${e3}.value`), i2.add(`${n2}.${e3}.conv_state`), i2.add(`${n2}.${e3}.shift_state`);
      return i2;
    }
    if ([
      `lfm2_vl`,
      `lfm3_vl`,
      `qwen3_5`,
      `qwen3_5_moe`,
      `voxtral_realtime`
    ].includes(e2.model_type)) {
      let n3;
      return n3 = e2.model_type === `voxtral_realtime` && (t2 == null ? void 0 : t2.session_name) === `audio_encoder` ? e2.audio_config : e2.text_config, Mh(n3, t2);
    }
    return Nh(e2, {
      prefix: n2
    });
  }
  function Nh(e2, { prefix: t2 = `past_key_values` } = {}) {
    let n2 = /* @__PURE__ */ new Set(), r2 = e2.normalized_config;
    if (r2.is_encoder_decoder && `num_encoder_heads` in r2 && `num_decoder_heads` in r2) for (let e3 = 0; e3 < r2.num_decoder_layers; ++e3) n2.add(`${t2}.${e3}.encoder.key`), n2.add(`${t2}.${e3}.encoder.value`), n2.add(`${t2}.${e3}.decoder.key`), n2.add(`${t2}.${e3}.decoder.value`);
    else if (r2.multi_query) for (let e3 = 0; e3 < r2.num_layers; ++e3) n2.add(`${t2}.${e3}.key_value`);
    else for (let e3 = 0; e3 < r2.num_layers; ++e3) n2.add(`${t2}.${e3}.key`), n2.add(`${t2}.${e3}.value`);
    return n2;
  }
  var Ph = class e2 {
    constructor(e3) {
      __publicField(this, "model_type", null);
      __publicField(this, "is_encoder_decoder", false);
      __publicField(this, "max_position_embeddings");
      __publicField(this, "transformers.js_config");
      Object.assign(this, e3), this.normalized_config = jh(this);
    }
    static async from_pretrained(t2, { progress_callback: n2 = null, config: r2 = null, cache_dir: i2 = null, local_files_only: a2 = false, revision: o2 = `main` } = {}) {
      r2 && !(r2 instanceof e2) && (r2 = new e2(r2));
      let s2 = r2 ?? await Ah(t2, {
        progress_callback: n2,
        config: r2,
        cache_dir: i2,
        local_files_only: a2,
        revision: o2
      });
      return new this(s2);
    }
  }, Fh = class {
    static async from_pretrained(...e2) {
      return Ph.from_pretrained(...e2);
    }
  };
  function Ih(e2, t2, n2) {
    return e2 ? typeof e2 == `object` && e2 ? e2.hasOwnProperty(t2) ? +e2[t2] : e2.hasOwnProperty(n2) ? +e2[n2] : 0 : +e2 : 0;
  }
  function Lh(e2, t2) {
    let n2 = [];
    for (let r2 = 0; r2 < t2; ++r2) n2.push(`${e2}_data${r2 === 0 ? `` : `_` + r2}`);
    return n2;
  }
  async function Rh(e2, t2, n2, r2) {
    let i2 = `${t2}${r2}.onnx`;
    return await rl(e2, `${n2.subfolder ?? ``}/${i2}`, true, n2, M.IS_NODE_ENV);
  }
  async function zh(e2, t2, n2, r2, i2, a2 = {}) {
    let o2 = `${t2}${n2}.onnx`, s2 = M.IS_NODE_ENV, c2 = [], l2 = Ih(i2, o2, t2);
    if (l2 > 0) {
      if (l2 > Dc) throw Error(`The number of external data chunks (${l2}) exceeds the maximum allowed value (${Dc}).`);
      let t3 = Lh(o2, l2);
      for (let n3 of t3) {
        let t4 = `${r2.subfolder ?? ``}/${n3}`;
        c2.push(rl(e2, t4, true, r2, s2).then((e3) => e3 instanceof Uint8Array ? {
          path: n3,
          data: e3
        } : n3));
      }
    } else a2.externalData !== void 0 && (c2 = a2.externalData.map(async (t3) => {
      if (typeof t3.data == `string`) {
        let n3 = await rl(e2, t3.data, true, r2);
        return {
          ...t3,
          data: n3
        };
      }
      return t3;
    }));
    return Promise.all(c2);
  }
  async function Bh(e2, t2, n2, r2 = false, i2 = void 0) {
    var _a3;
    let a2 = ((_a3 = n2.config) == null ? void 0 : _a3[`transformers.js_config`]) ?? {}, o2 = Jl(n2.device ?? a2.device, t2, {
      warn: (e3) => P.info(e3)
    }), s2 = Pl(o2), c2 = a2.device_config ?? {};
    c2.hasOwnProperty(o2) && (a2 = {
      ...a2,
      ...c2[o2]
    });
    let l2 = eu(n2.dtype ?? a2.dtype, t2, o2, {
      configDtype: a2.dtype,
      warn: (e3) => P.info(e3)
    });
    if (!$l.hasOwnProperty(l2)) throw Error(`Invalid dtype: ${l2}. Should be one of: ${Object.keys(Xl).join(`, `)}`);
    if (o2 === `webgpu` && !M.IS_NODE_ENV && l2 === Xl.fp16 && !await Yl()) throw Error(`The device (${o2}) does not support fp16.`);
    let u2 = $l[l2], d2 = {
      ...n2.session_options
    };
    d2.executionProviders ?? (d2.executionProviders = s2);
    let f2 = a2.free_dimension_overrides;
    f2 ? d2.freeDimensionOverrides ?? (d2.freeDimensionOverrides = f2) : o2.startsWith(`webnn`) && !d2.freeDimensionOverrides && P.warn(`WebNN does not currently support dynamic shapes and requires 'free_dimension_overrides' to be set in config.json, preferably as a field within config["transformers.js_config"]["device_config"]["${o2}"]. When 'free_dimension_overrides' is not set, you may experience significant performance degradation.`);
    let p2 = Rh(e2, t2, n2, u2), m2 = await zh(e2, t2, u2, n2, n2.use_external_data_format ?? a2.use_external_data_format, d2);
    if (m2.length > 0 && (!M.IS_NODE_ENV || m2.some((e3) => typeof e3 != `string`)) && (d2.externalData = m2), r2 && o2 === `webgpu`) {
      let e3 = Mh(n2.config, {
        prefix: `present`,
        session_name: i2
      });
      if (e3.size > 0 && !Ul()) {
        let t3 = {};
        for (let n3 of e3) t3[n3] = `gpu-buffer`;
        d2.preferredOutputLocation = t3;
      }
    }
    return {
      buffer_or_path: await p2,
      session_options: d2,
      session_config: {
        dtype: l2,
        device: o2
      }
    };
  }
  async function Vh(e2, t2, n2, r2 = void 0) {
    return Object.fromEntries(await Promise.all(Object.keys(t2).map(async (i2) => {
      let a2 = (r2 == null ? void 0 : r2[i2]) ?? false, { buffer_or_path: o2, session_options: s2, session_config: c2 } = await Bh(e2, t2[i2], n2, a2, i2);
      return [
        i2,
        await Rl(o2, s2, c2)
      ];
    })));
  }
  function Hh(e2) {
    for (let t2 in e2) Vl(e2[t2]) ? e2[t2] = new W(e2[t2]) : typeof e2[t2] == `object` && Hh(e2[t2]);
    return e2;
  }
  async function Y(e2, t2) {
    let n2 = Uh(e2, t2);
    try {
      return Hh(await Bl(e2, Object.fromEntries(Object.entries(n2).map(([e3, t3]) => {
        let n3 = t3.ort_tensor;
        return M.IS_NODE_ENV && typeof Float16Array < `u` && n3.cpuData instanceof Float16Array && (n3.cpuData = new Uint16Array(n3.cpuData.buffer)), [
          e3,
          n3
        ];
      }))));
    } catch (e3) {
      let t3 = Object.fromEntries(Object.entries(n2).map(([e4, t4]) => {
        let n3 = {
          type: t4.type,
          dims: t4.dims,
          location: t4.location
        };
        return n3.location !== `gpu-buffer` && (n3.data = t4.data), [
          e4,
          n3
        ];
      }));
      throw P.error(`An error occurred during model execution: "${e3}".`), P.error(`Inputs given to model:`, t3), e3;
    }
  }
  function Uh(e2, t2) {
    let n2 = /* @__PURE__ */ Object.create(null), r2 = [];
    for (let i3 of e2.inputNames) {
      let e3 = t2[i3];
      e3 instanceof W ? n2[i3] = Ul() ? e3.clone() : e3 : r2.push(i3);
    }
    if (r2.length > 0) throw Error(`An error occurred during model execution: "Missing the following inputs: ${r2.join(`, `)}.`);
    let i2 = Object.keys(t2).length, a2 = e2.inputNames.length;
    if (i2 > a2) {
      let n3 = Object.keys(t2).filter((t3) => !e2.inputNames.includes(t3));
      P.warn(`WARNING: Too many inputs were provided (${i2} > ${a2}). The following inputs will be ignored: "${n3.join(`, `)}".`);
    }
    return n2;
  }
  var Wh = class {
  }, Gh = class extends Wh {
    constructor({ last_hidden_state: e2, hidden_states: t2 = null, attentions: n2 = null }) {
      super(), this.last_hidden_state = e2, this.hidden_states = t2, this.attentions = n2;
    }
  }, X = class extends Wh {
    constructor({ logits: e2, ...t2 }) {
      super(), this.logits = e2;
      let n2 = Object.values(t2);
      n2.length > 0 && (this.attentions = n2);
    }
  }, Kh = class extends Wh {
    constructor({ logits: e2 }) {
      super(), this.logits = e2;
    }
  }, qh = class extends Wh {
    constructor({ logits: e2 }) {
      super(), this.logits = e2;
    }
  }, Jh = class extends Wh {
    constructor({ start_logits: e2, end_logits: t2 }) {
      super(), this.start_logits = e2, this.end_logits = t2;
    }
  }, Yh = class extends Wh {
    constructor({ logits: e2 }) {
      super(), this.logits = e2;
    }
  }, Xh = class extends Wh {
    constructor({ logits: e2, past_key_values: t2 }) {
      super(), this.logits = e2, this.past_key_values = t2;
    }
  }, Zh = class extends Wh {
    constructor({ logits: e2, past_key_values: t2, encoder_outputs: n2, decoder_attentions: r2 = null, cross_attentions: i2 = null }) {
      super(), this.logits = e2, this.past_key_values = t2, this.encoder_outputs = n2, this.decoder_attentions = r2, this.cross_attentions = i2;
    }
  }, Qh = class extends Wh {
    constructor({ alphas: e2 }) {
      super(), this.alphas = e2;
    }
  }, $h = class extends ei {
    _call(e2, t2) {
      throw Error("`_call` should be implemented in a subclass");
    }
  }, eg = class extends ei {
    _call(e2, t2) {
      throw Error("`_call` should be implemented in a subclass");
    }
  }, tg = class extends ei {
    constructor() {
      super(), this.processors = [];
    }
    push(e2) {
      this.processors.push(e2);
    }
    extend(e2) {
      this.processors.push(...e2);
    }
    _call(e2, t2) {
      let n2 = t2;
      for (let t3 of this.processors) n2 = t3(e2, n2);
      return n2;
    }
    [Symbol.iterator]() {
      return this.processors.values();
    }
  }, ng = class extends $h {
    constructor(e2) {
      super(), this.bos_token_id = e2;
    }
    _call(e2, t2) {
      for (let n2 = 0; n2 < e2.length; ++n2) if (e2[n2].length === 1) {
        let e3 = t2[n2].data;
        e3.fill(-1 / 0), e3[this.bos_token_id] = 0;
      }
      return t2;
    }
  }, rg = class extends $h {
    constructor(e2, t2) {
      super(), this.max_length = e2, this.eos_token_id = Array.isArray(t2) ? t2 : [
        t2
      ];
    }
    _call(e2, t2) {
      for (let n2 = 0; n2 < e2.length; ++n2) if (e2[n2].length === this.max_length - 1) {
        let e3 = t2[n2].data;
        e3.fill(-1 / 0);
        for (let t3 of this.eos_token_id) e3[t3] = 0;
      }
      return t2;
    }
  }, ig = class extends $h {
    constructor(e2) {
      super(), this.suppress_tokens = e2;
    }
    _call(e2, t2) {
      for (let n2 = 0; n2 < e2.length; ++n2) {
        let e3 = t2[n2].data;
        for (let t3 of this.suppress_tokens) e3[t3] = -1 / 0;
      }
      return t2;
    }
  }, ag = class extends $h {
    constructor(e2, t2) {
      super(), this.begin_suppress_tokens = e2, this.begin_index = t2;
    }
    _call(e2, t2) {
      for (let n2 = 0; n2 < e2.length; ++n2) if (e2[n2].length === this.begin_index) {
        let e3 = t2[n2].data;
        for (let t3 of this.begin_suppress_tokens) e3[t3] = -1 / 0;
      }
      return t2;
    }
  }, og = class extends $h {
    constructor(e2, t2) {
      super(), this.eos_token_id = Array.isArray(e2.eos_token_id) ? e2.eos_token_id[0] : e2.eos_token_id, this.no_timestamps_token_id = e2.no_timestamps_token_id, this.timestamp_begin = this.no_timestamps_token_id + 1, this.begin_index = t2.length, t2.at(-1) === this.no_timestamps_token_id && --this.begin_index, this.max_initial_timestamp_index = e2.max_initial_timestamp_index;
    }
    _call(e2, t2) {
      for (let n2 = 0; n2 < e2.length; ++n2) {
        let r2 = t2[n2].data;
        if (r2[this.no_timestamps_token_id] = -1 / 0, e2[n2].length === this.begin_index) {
          r2.subarray(0, this.timestamp_begin).fill(-1 / 0);
          continue;
        }
        let i2 = e2[n2].slice(this.begin_index), a2 = i2.length >= 1 && i2[i2.length - 1] >= this.timestamp_begin, o2 = i2.length < 2 || i2[i2.length - 2] >= this.timestamp_begin;
        if (a2 && (o2 ? r2.subarray(this.timestamp_begin).fill(-1 / 0) : r2.subarray(0, this.eos_token_id).fill(-1 / 0)), e2[n2].length === this.begin_index && this.max_initial_timestamp_index !== null) {
          let e3 = this.timestamp_begin + this.max_initial_timestamp_index;
          r2.subarray(e3 + 1).fill(-1 / 0);
        }
        let s2 = ll(r2);
        Math.log(s2.subarray(this.timestamp_begin).map(Math.exp).reduce((e3, t3) => e3 + t3)) > dl(s2.subarray(0, this.timestamp_begin))[0] && r2.subarray(0, this.timestamp_begin).fill(-1 / 0);
      }
      return t2;
    }
  }, sg = class extends $h {
    constructor(e2) {
      super(), this.no_repeat_ngram_size = e2;
    }
    getNgrams(e2) {
      let t2 = e2.length, n2 = [];
      for (let r3 = 0; r3 < t2 + 1 - this.no_repeat_ngram_size; ++r3) {
        let t3 = [];
        for (let n3 = 0; n3 < this.no_repeat_ngram_size; ++n3) t3.push(e2[r3 + n3]);
        n2.push(t3.map(Number));
      }
      let r2 = /* @__PURE__ */ new Map();
      for (let e3 of n2) {
        let t3 = e3.slice(0, e3.length - 1), n3 = JSON.stringify(t3), i2 = r2.get(n3) ?? [];
        i2.push(e3[e3.length - 1]), r2.set(n3, i2);
      }
      return r2;
    }
    getGeneratedNgrams(e2, t2) {
      let n2 = t2.slice(t2.length + 1 - this.no_repeat_ngram_size, t2.length);
      return e2.get(JSON.stringify(n2.map(Number))) ?? [];
    }
    calcBannedNgramTokens(e2) {
      let t2 = [];
      if (e2.length + 1 < this.no_repeat_ngram_size) return t2;
      {
        let t3 = this.getNgrams(e2);
        return this.getGeneratedNgrams(t3, e2);
      }
    }
    _call(e2, t2) {
      for (let n2 = 0; n2 < e2.length; ++n2) {
        let r2 = t2[n2].data, i2 = this.calcBannedNgramTokens(e2[n2]);
        for (let e3 of i2) r2[e3] = -1 / 0;
      }
      return t2;
    }
  }, cg = class extends $h {
    constructor(e2) {
      super(), this.penalty = e2;
    }
    _call(e2, t2) {
      for (let n2 = 0; n2 < e2.length; ++n2) {
        let r2 = t2[n2].data;
        for (let t3 of new Set(e2[n2])) {
          let e3 = Number(t3);
          r2[e3] < 0 ? r2[e3] *= this.penalty : r2[e3] /= this.penalty;
        }
      }
      return t2;
    }
  }, lg = class extends $h {
    constructor(e2, t2) {
      super(), this.min_length = e2, this.eos_token_id = Array.isArray(t2) ? t2 : [
        t2
      ];
    }
    _call(e2, t2) {
      for (let n2 = 0; n2 < e2.length; ++n2) if (e2[n2].length < this.min_length) {
        let e3 = t2[n2].data;
        for (let t3 of this.eos_token_id) e3[t3] = -1 / 0;
      }
      return t2;
    }
  }, ug = class extends $h {
    constructor(e2, t2, n2) {
      super(), this.prompt_length_to_skip = e2, this.min_new_tokens = t2, this.eos_token_id = Array.isArray(n2) ? n2 : [
        n2
      ];
    }
    _call(e2, t2) {
      for (let n2 = 0; n2 < e2.length; ++n2) if (e2[n2].length - this.prompt_length_to_skip < this.min_new_tokens) {
        let e3 = t2[n2].data;
        for (let t3 of this.eos_token_id) e3[t3] = -1 / 0;
      }
      return t2;
    }
  }, dg = class extends $h {
    constructor(e2, t2) {
      super(), this.bad_words_ids = e2, this.eos_token_id = Array.isArray(t2) ? t2 : [
        t2
      ];
    }
    _call(e2, t2) {
      for (let n2 = 0; n2 < e2.length; ++n2) {
        let r2 = t2[n2].data, i2 = e2[n2];
        for (let e3 of this.bad_words_ids) {
          if (i2.length < e3.length - 1) continue;
          let t3 = true;
          for (let n3 = 1; n3 <= e3.length - 1; ++n3) if (e3.at(-n3 - 1) != i2.at(-n3)) {
            t3 = false;
            break;
          }
          t3 && (r2[e3.at(-1)] = -1 / 0);
        }
      }
      return t2;
    }
  }, fg = class extends $h {
    constructor(e2) {
      if (super(), e2 <= 1) throw Error(`Require guidance scale >1 to use the classifier-free guidance processor, got guidance scale ${e2}.`);
      this.guidance_scale = e2;
    }
    _call(e2, t2) {
      if (t2.dims[0] !== 2 * e2.length) throw Error(`Logits should have twice the batch size of the input ids, the first half of batches corresponding to the conditional inputs, and the second half of batches corresponding to the unconditional inputs. Got batch size ${t2.dims[0]} for the logits and ${e2.length} for the input ids.`);
      let n2 = e2.length, r2 = t2.slice([
        0,
        n2
      ], null), i2 = t2.slice([
        n2,
        t2.dims[0]
      ], null);
      for (let e3 = 0; e3 < i2.data.length; ++e3) i2.data[e3] += (r2.data[e3] - i2.data[e3]) * this.guidance_scale;
      return i2;
    }
  }, pg = class extends eg {
    constructor(e2) {
      if (super(), typeof e2 != `number` || e2 <= 0) {
        let t2 = `\`temperature\` (=${e2}) must be a strictly positive float, otherwise your next token scores will be invalid.`;
        e2 === 0 && (t2 += " If you're looking for greedy decoding strategies, set `do_sample=false`.");
      }
      this.temperature = e2;
    }
    _call(e2, t2) {
      let n2 = t2.data;
      for (let e3 = 0; e3 < n2.length; ++e3) n2[e3] /= this.temperature;
      return t2;
    }
  }, mg = class {
    constructor(e2) {
      __publicField(this, "max_length", 20);
      __publicField(this, "max_new_tokens", null);
      __publicField(this, "min_length", 0);
      __publicField(this, "min_new_tokens", null);
      __publicField(this, "early_stopping", false);
      __publicField(this, "max_time", null);
      __publicField(this, "do_sample", false);
      __publicField(this, "num_beams", 1);
      __publicField(this, "num_beam_groups", 1);
      __publicField(this, "penalty_alpha", null);
      __publicField(this, "use_cache", true);
      __publicField(this, "temperature", 1);
      __publicField(this, "top_k", 50);
      __publicField(this, "top_p", 1);
      __publicField(this, "typical_p", 1);
      __publicField(this, "epsilon_cutoff", 0);
      __publicField(this, "eta_cutoff", 0);
      __publicField(this, "diversity_penalty", 0);
      __publicField(this, "repetition_penalty", 1);
      __publicField(this, "encoder_repetition_penalty", 1);
      __publicField(this, "length_penalty", 1);
      __publicField(this, "no_repeat_ngram_size", 0);
      __publicField(this, "bad_words_ids", null);
      __publicField(this, "force_words_ids", null);
      __publicField(this, "renormalize_logits", false);
      __publicField(this, "constraints", null);
      __publicField(this, "forced_bos_token_id", null);
      __publicField(this, "forced_eos_token_id", null);
      __publicField(this, "remove_invalid_values", false);
      __publicField(this, "exponential_decay_length_penalty", null);
      __publicField(this, "suppress_tokens", null);
      __publicField(this, "streamer", null);
      __publicField(this, "begin_suppress_tokens", null);
      __publicField(this, "forced_decoder_ids", null);
      __publicField(this, "guidance_scale", null);
      __publicField(this, "num_return_sequences", 1);
      __publicField(this, "output_attentions", false);
      __publicField(this, "output_hidden_states", false);
      __publicField(this, "output_scores", false);
      __publicField(this, "return_dict_in_generate", false);
      __publicField(this, "pad_token_id", null);
      __publicField(this, "bos_token_id", null);
      __publicField(this, "eos_token_id", null);
      __publicField(this, "encoder_no_repeat_ngram_size", 0);
      __publicField(this, "decoder_start_token_id", null);
      __publicField(this, "generation_kwargs", {});
      Object.assign(this, li(e2, Object.getOwnPropertyNames(this)));
    }
  }, hg = class extends ei {
    _call(e2, t2) {
      throw Error(`StoppingCriteria needs to be subclassed`);
    }
  }, gg = class e2 extends ei {
    constructor() {
      super(), this.criteria = [];
    }
    push(e3) {
      this.criteria.push(e3);
    }
    extend(t2) {
      t2 instanceof e2 ? t2 = t2.criteria : t2 instanceof hg && (t2 = [
        t2
      ]), this.criteria.push(...t2);
    }
    _call(e3, t2) {
      let n2 = Array(e3.length).fill(false);
      for (let r2 of this.criteria) {
        let i2 = r2(e3, t2);
        for (let e4 = 0; e4 < n2.length; ++e4) n2[e4] || (n2[e4] = i2[e4]);
      }
      return n2;
    }
    [Symbol.iterator]() {
      return this.criteria.values();
    }
  }, _g = class extends hg {
    constructor(e2, t2 = null) {
      super(), this.max_length = e2, this.max_position_embeddings = t2;
    }
    _call(e2) {
      return e2.map((e3) => e3.length >= this.max_length);
    }
  }, vg = class extends hg {
    constructor(e2) {
      super(), Array.isArray(e2) || (e2 = [
        e2
      ]), this.eos_token_id = e2;
    }
    _call(e2, t2) {
      return e2.map((e3) => {
        let t3 = e3.at(-1);
        return this.eos_token_id.some((e4) => t3 == e4);
      });
    }
  }, yg = class extends ei {
    constructor(e2) {
      super(), this.generation_config = e2;
    }
    async _call(e2) {
      return this.sample(e2);
    }
    async sample(e2) {
      throw Error(`sample should be implemented in subclasses.`);
    }
    getLogits(e2, t2) {
      let n2 = e2.dims.at(-1), r2 = e2.data;
      if (t2 === -1) r2 = r2.slice(-n2);
      else {
        let e3 = t2 * n2;
        r2 = r2.slice(e3, e3 + n2);
      }
      return r2;
    }
    randomSelect(e2) {
      return Cc(e2);
    }
    static getSampler(e2) {
      if (e2.do_sample) return new xg(e2);
      if (e2.num_beams > 1) return new Sg(e2);
      if (e2.num_return_sequences > 1) throw Error(`num_return_sequences has to be 1 when doing greedy search, but is ${e2.num_return_sequences}.`);
      return new bg(e2);
    }
  }, bg = class extends yg {
    async sample(e2) {
      let t2 = dl(e2.data)[1];
      return [
        [
          BigInt(t2),
          0
        ]
      ];
    }
  }, xg = class extends yg {
    async sample(e2) {
      let t2 = e2.dims.at(-1);
      this.generation_config.top_k > 0 && (t2 = Math.min(this.generation_config.top_k, t2));
      let [n2, r2] = await su(e2, t2), i2 = cl(n2.data);
      return Array.from({
        length: this.generation_config.num_beams
      }, () => {
        let e3 = this.randomSelect(i2);
        return [
          r2.data[e3],
          Math.log(i2[e3])
        ];
      });
    }
  }, Sg = class extends yg {
    async sample(e2) {
      let t2 = e2.dims.at(-1);
      this.generation_config.top_k > 0 && (t2 = Math.min(this.generation_config.top_k, t2));
      let [n2, r2] = await su(e2, t2), i2 = cl(n2.data);
      return Array.from({
        length: this.generation_config.num_beams
      }, (e3, t3) => [
        r2.data[t3],
        Math.log(i2[t3])
      ]);
    }
  }, Cg = class {
    constructor(e2) {
      if (e2) for (let t2 in e2) {
        if (t2 in this) throw TypeError(`Key "${t2}" conflicts with an existing property on DynamicCache`);
        let n2 = e2[t2];
        if (!(n2 instanceof W)) throw TypeError(`Expected a Tensor for key "${t2}", got ${typeof n2}`);
        this[t2] = n2;
      }
    }
    get_seq_length() {
      let e2 = this;
      if (Object.keys(e2).length === 0) return 0;
      for (let t2 in e2) if (t2.startsWith(`past_key_values.`)) return e2[t2].dims.at(-2);
      throw Error(`Unable to determine sequence length from the cache.`);
    }
    update(e2) {
      for (let t2 in e2) {
        let n2 = this[t2], r2 = e2[t2];
        n2 && n2 !== r2 && n2.location === `gpu-buffer` && n2.dispose(), this[t2] = r2;
      }
    }
    async dispose() {
      let e2 = [];
      for (let t2 of Object.values(this)) t2.location === `gpu-buffer` && e2.push(t2.dispose());
      await Promise.all(e2);
    }
  }, Z = {
    EncoderOnly: 0,
    EncoderDecoder: 1,
    Seq2Seq: 2,
    Vision2Seq: 3,
    DecoderOnly: 4,
    DecoderOnlyWithoutHead: 5,
    MaskGeneration: 6,
    ImageTextToText: 7,
    Musicgen: 8,
    MultiModality: 9,
    Phi3V: 10,
    AudioTextToText: 11,
    AutoEncoder: 12,
    ImageAudioTextToText: 13,
    Supertonic: 14,
    Chatterbox: 15,
    VoxtralRealtime: 16,
    MultimodalEncoder: 17
  }, wg = {
    [Z.DecoderOnly]: {
      sessions: (e2, t2) => ({
        model: t2.model_file_name ?? `model`
      }),
      cache_sessions: {
        model: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.DecoderOnlyWithoutHead]: {
      sessions: (e2, t2) => ({
        model: t2.model_file_name ?? `model`
      })
    },
    [Z.Seq2Seq]: {
      sessions: () => ({
        model: `encoder_model`,
        decoder_model_merged: `decoder_model_merged`
      }),
      cache_sessions: {
        decoder_model_merged: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.Vision2Seq]: {
      sessions: () => ({
        model: `encoder_model`,
        decoder_model_merged: `decoder_model_merged`
      }),
      cache_sessions: {
        decoder_model_merged: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.Musicgen]: {
      sessions: () => ({
        model: `text_encoder`,
        decoder_model_merged: `decoder_model_merged`,
        encodec_decode: `encodec_decode`
      }),
      cache_sessions: {
        decoder_model_merged: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.EncoderDecoder]: {
      sessions: () => ({
        model: `encoder_model`,
        decoder_model_merged: `decoder_model_merged`
      }),
      cache_sessions: {
        decoder_model_merged: true
      }
    },
    [Z.MaskGeneration]: {
      sessions: () => ({
        model: `vision_encoder`,
        prompt_encoder_mask_decoder: `prompt_encoder_mask_decoder`
      })
    },
    [Z.ImageTextToText]: {
      text_only_sessions: {
        embed_tokens: `embed_tokens`,
        decoder_model_merged: `decoder_model_merged`
      },
      sessions: (e2, t2, n2) => {
        let r2 = {
          ...wg[Z.ImageTextToText].text_only_sessions
        };
        return n2 || (r2.vision_encoder = `vision_encoder`), e2.is_encoder_decoder && (r2.model = `encoder_model`), r2;
      },
      cache_sessions: {
        decoder_model_merged: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.AudioTextToText]: {
      text_only_sessions: {
        embed_tokens: `embed_tokens`,
        decoder_model_merged: `decoder_model_merged`
      },
      sessions: (e2, t2, n2) => {
        let r2 = {
          ...wg[Z.AudioTextToText].text_only_sessions
        };
        return n2 || (r2.audio_encoder = `audio_encoder`), r2;
      },
      cache_sessions: {
        decoder_model_merged: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.ImageAudioTextToText]: {
      text_only_sessions: {
        embed_tokens: `embed_tokens`,
        decoder_model_merged: `decoder_model_merged`
      },
      sessions: (e2, t2, n2) => {
        let r2 = {
          ...wg[Z.ImageAudioTextToText].text_only_sessions
        };
        return n2 || (r2.audio_encoder = `audio_encoder`, r2.vision_encoder = `vision_encoder`), r2;
      },
      cache_sessions: {
        decoder_model_merged: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.Phi3V]: {
      sessions: () => ({
        prepare_inputs_embeds: `prepare_inputs_embeds`,
        model: `model`,
        vision_encoder: `vision_encoder`
      }),
      cache_sessions: {
        model: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.MultiModality]: {
      sessions: () => ({
        prepare_inputs_embeds: `prepare_inputs_embeds`,
        model: `language_model`,
        lm_head: `lm_head`,
        gen_head: `gen_head`,
        gen_img_embeds: `gen_img_embeds`,
        image_decode: `image_decode`
      }),
      cache_sessions: {
        model: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.AutoEncoder]: {
      sessions: () => ({
        encoder_model: `encoder_model`,
        decoder_model: `decoder_model`
      })
    },
    [Z.Supertonic]: {
      sessions: () => ({
        text_encoder: `text_encoder`,
        latent_denoiser: `latent_denoiser`,
        voice_decoder: `voice_decoder`
      })
    },
    [Z.Chatterbox]: {
      sessions: () => ({
        embed_tokens: `embed_tokens`,
        speech_encoder: `speech_encoder`,
        model: `language_model`,
        conditional_decoder: `conditional_decoder`
      }),
      cache_sessions: {
        model: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.VoxtralRealtime]: {
      text_only_sessions: {
        embed_tokens: `embed_tokens`,
        decoder_model_merged: `decoder_model_merged`
      },
      sessions: (e2, t2, n2) => {
        let r2 = {
          ...wg[Z.VoxtralRealtime].text_only_sessions
        };
        return n2 || (r2.audio_encoder = `audio_encoder`), r2;
      },
      cache_sessions: {
        decoder_model_merged: true,
        audio_encoder: true
      },
      optional_configs: {
        generation_config: `generation_config.json`
      }
    },
    [Z.MultimodalEncoder]: {
      sessions: (e2, t2) => ({
        model: t2.model_file_name ?? `model`,
        ...e2.vision_config && {
          vision_encoder: `vision_encoder`
        },
        ...e2.audio_config && {
          audio_encoder: `audio_encoder`
        }
      })
    },
    default: {
      sessions: (e2, t2) => ({
        model: t2.model_file_name ?? `model`
      })
    }
  };
  function Tg(e2) {
    var _a3;
    return ((_a3 = wg[e2]) == null ? void 0 : _a3.text_only_sessions) ?? null;
  }
  function Eg(e2, t2, n2 = {}) {
    let r2 = wg[e2] ?? wg.default;
    return {
      sessions: r2.sessions(t2, n2, n2.textOnly ?? false),
      cache_sessions: r2.cache_sessions,
      optional_configs: r2.optional_configs
    };
  }
  function Dg(e2, { warn: t2 = true } = {}) {
    let n2 = e2.architectures || [];
    for (let e3 of n2) {
      let t3 = Ig.get(e3);
      if (t3 !== void 0) return t3;
    }
    if (e2.model_type) {
      let t3 = Ig.get(e2.model_type);
      if (t3 !== void 0) return t3;
      for (let t4 of Object.values(Ag)) if (t4.has(e2.model_type)) {
        let n3 = Ig.get(t4.get(e2.model_type));
        if (n3 !== void 0) return n3;
      }
    }
    if (t2) {
      let t3 = n2.length > 0 ? n2.join(`, `) : `(none)`;
      P.warn(`[resolve_model_type] Architecture(s) not found in MODEL_TYPE_MAPPING: [${t3}] for model type '${e2.model_type}'. Falling back to EncoderOnly (single model.onnx file). If you encounter issues, please report at: ${Ld}`);
    }
    return Z.EncoderOnly;
  }
  function Og(e2, { config: t2 = null, cache_dir: n2 = null, local_files_only: r2 = false, revision: i2 = `main` } = {}) {
    return t2 === null ? Kc(Mc(e2, {
      cache_dir: n2,
      local_files_only: r2,
      revision: i2
    }), () => Fh.from_pretrained(e2, {
      config: t2,
      cache_dir: n2,
      local_files_only: r2,
      revision: i2
    })) : Fh.from_pretrained(e2, {
      config: t2,
      cache_dir: n2,
      local_files_only: r2,
      revision: i2
    });
  }
  async function kg(e2, { config: t2 = null, dtype: n2 = null, device: r2 = null, model_file_name: i2 = null } = {}) {
    t2 = await Og(e2, {
      config: t2
    });
    let a2 = [
      `config.json`
    ], o2 = t2[`transformers.js_config`] ?? {}, s2 = o2.use_external_data_format, c2 = `onnx`, l2 = r2 ?? o2.device, u2 = n2 ?? o2.dtype, d2 = Dg(t2), f2 = (e3, t3 = null) => {
      t3 ?? (t3 = e3);
      let n3 = Jl(l2, e3), r3 = $l[eu(u2, e3, n3)] ?? ``, i3 = `${t3}${r3}.onnx`, o3 = `${c2}/${i3}`;
      a2.push(o3);
      let d3 = Ih(s2, i3, e3);
      for (let e4 of Lh(i3, d3)) {
        let t4 = `${c2}/${e4}`;
        a2.push(t4);
      }
    }, { sessions: p2, optional_configs: m2 } = Eg(d2, t2, {
      model_file_name: i2
    });
    for (let [e3, t3] of Object.entries(p2)) f2(e3, t3);
    if (m2) for (let e3 of Object.values(m2)) a2.push(e3);
    return a2;
  }
  var Ag = null;
  function jg(e2) {
    Ag = e2;
  }
  function Mg(e2) {
    if (e2 instanceof W) return e2;
    if (e2.length === 0) throw Error(`items must be non-empty`);
    if (Array.isArray(e2[0])) {
      if (e2.some((t2) => t2.length !== e2[0].length)) throw Error(`Unable to create tensor, you should probably activate truncation and/or padding with 'padding=True' and/or 'truncation=True' to have batched tensors with the same length.`);
      return new W(`int64`, BigInt64Array.from(e2.flat().map((e3) => BigInt(e3))), [
        e2.length,
        e2[0].length
      ]);
    }
    return new W(`int64`, BigInt64Array.from(e2.map((e3) => BigInt(e3))), [
      1,
      e2.length
    ]);
  }
  function Ng(e2) {
    return new W(`bool`, [
      e2
    ], [
      1
    ]);
  }
  var Pg = {
    [Z.DecoderOnly]: {
      can_generate: true,
      forward: qg,
      prepare_inputs: $g
    },
    [Z.DecoderOnlyWithoutHead]: {
      can_generate: false,
      forward: qg,
      prepare_inputs: $g
    },
    [Z.Seq2Seq]: {
      can_generate: true,
      forward: zg,
      prepare_inputs: e_
    },
    [Z.Vision2Seq]: {
      can_generate: true,
      forward: zg,
      prepare_inputs: e_
    },
    [Z.Musicgen]: {
      can_generate: true,
      forward: zg
    },
    [Z.EncoderDecoder]: {
      can_generate: false,
      forward: zg
    },
    [Z.ImageTextToText]: {
      can_generate: true,
      forward: Xg,
      prepare_inputs: t_
    },
    [Z.AudioTextToText]: {
      can_generate: true,
      forward: Yg,
      prepare_inputs: t_
    },
    [Z.ImageAudioTextToText]: {
      can_generate: true,
      prepare_inputs: t_
    },
    [Z.Phi3V]: {
      can_generate: true,
      prepare_inputs: t_
    },
    [Z.MultiModality]: {
      can_generate: true
    },
    [Z.AutoEncoder]: {
      can_generate: false,
      forward: Vg
    },
    [Z.Chatterbox]: {
      can_generate: true,
      forward: Bg
    },
    [Z.VoxtralRealtime]: {
      can_generate: true,
      prepare_inputs: $g
    },
    default: {
      can_generate: false,
      forward: Bg
    }
  };
  function Fg(e2, t2) {
    var _a3;
    let n2 = Ig.get(e2), r2 = false, i2 = (_a3 = t2 == null ? void 0 : t2.architectures) == null ? void 0 : _a3[0];
    if (i2 && i2 !== e2 && (e2 == null ? void 0 : e2.endsWith(`ForCausalLM`)) && i2.endsWith(`ForConditionalGeneration`)) {
      let e3 = Ig.get(i2);
      e3 !== void 0 && (n2 = e3, r2 = true);
    }
    let a2 = Pg[n2] ?? Pg.default, o2 = wg[n2] ?? wg.default;
    return {
      typeConfig: {
        ...a2,
        ...o2
      },
      textOnly: r2,
      modelType: n2
    };
  }
  var Ig = /* @__PURE__ */ new Map(), Lg = /* @__PURE__ */ new Map(), Rg = /* @__PURE__ */ new Map(), Q = class extends ei {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "main_input_name", `input_ids`);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`
      ]);
      __publicField(this, "_return_dict_in_generate_keys", null);
      this.config = e2, this.sessions = t2, this.configs = n2;
      let { typeConfig: r2 } = Fg(Rg.get(this.constructor), e2);
      this.can_generate = r2.can_generate, this._forward = r2.forward, this._prepare_inputs_for_generation = r2.prepare_inputs, this.can_generate && this.forward_params.push(`past_key_values`), this.custom_config = this.config[`transformers.js_config`] ?? {};
    }
    async dispose() {
      var _a3;
      let e2 = [];
      for (let t2 of Object.values(this.sessions)) e2.push((_a3 = t2.release) == null ? void 0 : _a3.call(t2));
      return await Promise.all(e2);
    }
    static async from_pretrained(e2, { progress_callback: t2 = null, config: n2 = null, cache_dir: r2 = null, local_files_only: i2 = false, revision: a2 = `main`, model_file_name: o2 = null, subfolder: s2 = `onnx`, device: c2 = null, dtype: l2 = null, use_external_data_format: u2 = null, session_options: d2 = {} } = {}) {
      let f2 = {
        progress_callback: t2,
        config: n2,
        cache_dir: r2,
        local_files_only: i2,
        revision: a2,
        model_file_name: o2,
        subfolder: s2,
        device: c2,
        dtype: l2,
        use_external_data_format: u2,
        session_options: d2
      }, p2 = Rg.get(this);
      n2 = f2.config = await Fh.from_pretrained(e2, f2);
      let { typeConfig: m2, textOnly: h2, modelType: g2 } = Fg(p2, n2);
      if (g2 === void 0) {
        let e3 = p2 ?? (n2 == null ? void 0 : n2.model_type);
        e3 !== `custom` && P.warn(`Model type for '${e3}' not found, assuming encoder-only architecture. Please report this at ${Ld}.`);
      }
      if (t2 && !(t2 instanceof ni)) {
        let r3 = {};
        try {
          let t3 = await kg(e2, {
            config: n2,
            dtype: l2,
            device: c2,
            model_file_name: o2
          });
          (await Promise.all(t3.map((t4) => Jc(e2, t4, f2)))).forEach((e3, n3) => {
            if (e3.exists) {
              let i3 = t3[n3] === `config.json`;
              r3[t3[n3]] = {
                loaded: i3 ? e3.size ?? 0 : 0,
                total: e3.size ?? 0
              };
            }
          });
        } catch (e3) {
          P.warn(`Unable to fetch model file metadata for total progress tracking: ${e3}`);
        }
        Object.keys(r3).length > 0 && (f2.progress_callback = new ni(t2, r3));
      }
      let _2 = [
        Vh(e2, m2.sessions(n2, f2, h2), f2, m2.cache_sessions)
      ];
      m2.optional_configs && _2.push(a_(e2, m2.optional_configs, f2));
      let v2 = await Promise.all(_2);
      return new this(n2, ...v2);
    }
    async _call(e2) {
      return await this.forward(e2);
    }
    async forward(e2) {
      return await this._forward(this, e2);
    }
    get generation_config() {
      var _a3;
      return ((_a3 = this.configs) == null ? void 0 : _a3.generation_config) ?? null;
    }
    _get_logits_processor(e2, t2, n2 = null) {
      let r2 = new tg();
      if (e2.repetition_penalty !== null && e2.repetition_penalty !== 1 && r2.push(new cg(e2.repetition_penalty)), e2.no_repeat_ngram_size !== null && e2.no_repeat_ngram_size > 0 && r2.push(new sg(e2.no_repeat_ngram_size)), e2.bad_words_ids !== null && r2.push(new dg(e2.bad_words_ids, e2.eos_token_id)), e2.min_length !== null && e2.eos_token_id !== null && e2.min_length > 0 && r2.push(new lg(e2.min_length, e2.eos_token_id)), e2.min_new_tokens !== null && e2.eos_token_id !== null && e2.min_new_tokens > 0 && r2.push(new ug(t2, e2.min_new_tokens, e2.eos_token_id)), e2.forced_bos_token_id !== null && r2.push(new ng(e2.forced_bos_token_id)), e2.forced_eos_token_id !== null && r2.push(new rg(e2.max_length, e2.forced_eos_token_id)), e2.suppress_tokens !== null && r2.push(new ig(e2.suppress_tokens)), e2.begin_suppress_tokens !== null) {
        let n3 = t2 > 1 || e2.forced_bos_token_id === null ? t2 : t2 + 1;
        r2.push(new ag(e2.begin_suppress_tokens, n3));
      }
      return e2.guidance_scale !== null && e2.guidance_scale > 1 && r2.push(new fg(e2.guidance_scale)), e2.temperature === 0 && e2.do_sample && (P.warn("`do_sample` changed to false because `temperature: 0` implies greedy sampling (always selecting the most likely token), which is incompatible with `do_sample: true`."), e2.do_sample = false), e2.do_sample && e2.temperature !== null && e2.temperature !== 1 && r2.push(new pg(e2.temperature)), n2 !== null && r2.extend(n2), r2;
    }
    _prepare_generation_config(e2, t2, n2 = mg) {
      let r2 = {
        ...this.config
      };
      for (let e3 of [
        `decoder`,
        `generator`,
        `text_config`
      ]) e3 in r2 && Object.assign(r2, r2[e3]);
      let i2 = new n2(r2);
      return Object.assign(i2, this.generation_config ?? {}), e2 && Object.assign(i2, e2), t2 && Object.assign(i2, li(t2, Object.getOwnPropertyNames(i2))), i2;
    }
    _get_stopping_criteria(e2, t2 = null) {
      let n2 = new gg();
      return e2.max_length !== null && n2.push(new _g(e2.max_length, this.config.max_position_embeddings ?? null)), e2.eos_token_id !== null && n2.push(new vg(e2.eos_token_id)), t2 && n2.extend(t2), n2;
    }
    _validate_model_class() {
      if (!this.can_generate) {
        let e2 = [
          Ag.MODEL_FOR_CAUSAL_LM_MAPPING_NAMES,
          Ag.MODEL_FOR_VISION_2_SEQ_MAPPING_NAMES,
          Ag.MODEL_FOR_SEQ_TO_SEQ_CAUSAL_LM_MAPPING_NAMES,
          Ag.MODEL_FOR_SPEECH_SEQ_2_SEQ_MAPPING_NAMES
        ].filter(Boolean), t2 = Rg.get(this.constructor), n2 = /* @__PURE__ */ new Set(), r2 = this.config.model_type;
        for (let t3 of e2) {
          let e3 = t3 == null ? void 0 : t3.get(r2);
          e3 && n2.add(e3);
        }
        let i2 = `The current model class (${t2}) is not compatible with \`.generate()\`, as it doesn't have a language model head.`;
        throw n2.size > 0 && (i2 += ` Please use the following class instead: ${[
          ...n2
        ].join(`, `)}`), Error(i2);
      }
    }
    prepare_inputs_for_generation(...e2) {
      if (!this._prepare_inputs_for_generation) throw Error(`prepare_inputs_for_generation is not implemented for this model.`);
      return this._prepare_inputs_for_generation(this, ...e2);
    }
    _update_model_kwargs_for_generation({ generated_input_ids: e2, outputs: t2, model_inputs: n2, is_encoder_decoder: r2 }) {
      return n2.past_key_values = Hg(t2, n2.past_key_values), n2.input_ids = new W(`int64`, e2.flat(), [
        e2.length,
        1
      ]), r2 ? `decoder_attention_mask` in n2 && (n2.decoder_attention_mask = mu([
        n2.decoder_attention_mask,
        Cu([
          n2.decoder_attention_mask.dims[0],
          1
        ])
      ], 1)) : n2.attention_mask = mu([
        n2.attention_mask,
        Cu([
          n2.attention_mask.dims[0],
          1
        ])
      ], 1), n2.position_ids = null, n2;
    }
    _prepare_model_inputs({ inputs: e2, bos_token_id: t2, model_kwargs: n2 }) {
      let r2 = li(n2, this.forward_params), i2 = this.main_input_name;
      if (i2 in r2) {
        if (e2) throw Error("`inputs`: {inputs}` were passed alongside {input_name} which is not allowed. Make sure to either pass {inputs} or {input_name}=...");
      } else r2[i2] = e2;
      return {
        inputs_tensor: r2[i2],
        model_inputs: r2,
        model_input_name: i2
      };
    }
    async _prepare_encoder_decoder_kwargs_for_generation({ inputs_tensor: e2, model_inputs: t2, model_input_name: n2, generation_config: r2 }) {
      if (this.sessions.model.inputNames.includes(`inputs_embeds`) && !t2.inputs_embeds && `_prepare_inputs_embeds` in this) {
        let { input_ids: e3, pixel_values: n3, attention_mask: r3, ...i3 } = t2, a2 = await this._prepare_inputs_embeds(t2);
        t2 = {
          ...i3,
          ...li(a2, [
            `inputs_embeds`,
            `attention_mask`
          ])
        };
      }
      let { last_hidden_state: i2 } = await Bg(this, t2);
      if (r2.guidance_scale !== null && r2.guidance_scale > 1) i2 = mu([
        i2,
        Su(i2, 0)
      ], 0), `attention_mask` in t2 && (t2.attention_mask = mu([
        t2.attention_mask,
        Eu(t2.attention_mask)
      ], 0));
      else if (t2.decoder_input_ids) {
        let e3 = Mg(t2.decoder_input_ids).dims[0];
        if (e3 !== i2.dims[0]) {
          if (i2.dims[0] !== 1) throw Error(`The encoder outputs have a different batch size (${i2.dims[0]}) than the decoder inputs (${e3}).`);
          i2 = mu(Array.from({
            length: e3
          }, () => i2), 0);
        }
      }
      return t2.encoder_outputs = i2, t2;
    }
    _prepare_decoder_input_ids_for_generation({ batch_size: e2, model_input_name: t2, model_kwargs: n2, decoder_start_token_id: r2, bos_token_id: i2, generation_config: a2 }) {
      let { decoder_input_ids: o2, ...s2 } = n2;
      if (!(o2 instanceof W)) {
        if (o2) Array.isArray(o2[0]) || (o2 = Array.from({
          length: e2
        }, () => o2));
        else if (r2 ?? (r2 = i2), this.config.model_type === `musicgen`) o2 = Array.from({
          length: e2 * this.config.decoder.num_codebooks
        }, () => [
          r2
        ]);
        else if (Array.isArray(r2)) {
          if (r2.length !== e2) throw Error(`\`decoder_start_token_id\` expected to have length ${e2} but got ${r2.length}`);
          o2 = r2;
        } else o2 = Array.from({
          length: e2
        }, () => [
          r2
        ]);
        o2 = Mg(o2);
      }
      return s2.decoder_attention_mask = wu(o2), {
        input_ids: o2,
        model_inputs: s2
      };
    }
    async generate({ inputs: e2 = null, generation_config: t2 = null, logits_processor: n2 = null, stopping_criteria: r2 = null, streamer: i2 = null, ...a2 }) {
      this._validate_model_class(), t2 = this._prepare_generation_config(t2, a2);
      let { inputs_tensor: o2, model_inputs: s2, model_input_name: c2 } = this._prepare_model_inputs({
        inputs: e2,
        model_kwargs: a2
      }), l2 = this.config.is_encoder_decoder;
      l2 && (`encoder_outputs` in s2 || (s2 = await this._prepare_encoder_decoder_kwargs_for_generation({
        inputs_tensor: o2,
        model_inputs: s2,
        model_input_name: c2,
        generation_config: t2
      })));
      let u2;
      l2 ? { input_ids: u2, model_inputs: s2 } = this._prepare_decoder_input_ids_for_generation({
        batch_size: s2[c2].dims.at(0),
        model_input_name: c2,
        model_kwargs: s2,
        decoder_start_token_id: t2.decoder_start_token_id,
        bos_token_id: t2.bos_token_id,
        generation_config: t2
      }) : u2 = s2[c2];
      let d2 = u2.dims.at(-1);
      t2.max_new_tokens !== null && (t2.max_length = d2 + t2.max_new_tokens);
      let f2 = this._get_logits_processor(t2, d2, n2), p2 = this._get_stopping_criteria(t2, r2), m2 = s2[c2].dims.at(0), h2 = yg.getSampler(t2), g2 = Array(m2).fill(0), _2 = u2.tolist();
      i2 && i2.put(_2);
      let v2, y2 = {}, b2 = {};
      for (; ; ) {
        if (s2 = this.prepare_inputs_for_generation(_2, s2, t2), v2 = await this.forward(s2), t2.return_dict_in_generate) {
          if (t2.output_attentions) {
            let e4 = Ug(v2);
            for (let t3 in e4) t3 in y2 || (y2[t3] = []), y2[t3].push(e4[t3]);
          } else this._return_dict_in_generate_keys && Object.assign(b2, li(v2, this._return_dict_in_generate_keys));
        }
        let e3 = f2(_2, v2.logits.slice(null, -1, null).to(`float32`)), n3 = [];
        for (let t3 = 0; t3 < e3.dims.at(0); ++t3) {
          let r3 = e3[t3], i3 = await h2(r3);
          for (let [e4, r4] of i3) {
            let i4 = BigInt(e4);
            g2[t3] += r4, _2[t3].push(i4), n3.push([
              i4
            ]);
            break;
          }
        }
        if (i2 && i2.put(n3), p2(_2).every((e4) => e4)) break;
        s2 = this._update_model_kwargs_for_generation({
          generated_input_ids: n3,
          outputs: v2,
          model_inputs: s2,
          is_encoder_decoder: l2
        });
      }
      i2 && i2.end();
      let x2 = new W(`int64`, _2.flat(), [
        _2.length,
        _2[0].length
      ]), S2 = Hg(v2, s2.past_key_values), C2 = new Set(Object.values(S2));
      for (let e3 of Object.values(v2)) e3.location === `gpu-buffer` && !C2.has(e3) && e3.dispose();
      return `past_key_values` in a2 || t2.return_dict_in_generate || await S2.dispose(), t2.return_dict_in_generate ? {
        sequences: x2,
        past_key_values: S2,
        ...y2,
        ...b2
      } : x2;
    }
    async _encode_input(e2, t2, n2) {
      if (!Object.hasOwn(this.sessions, e2)) throw Error(`Model does not have a ${e2} session.`);
      let r2 = this.sessions[e2];
      return (await Y(r2, li(t2, r2.inputNames)))[n2];
    }
    async encode_image(e2) {
      return this._encode_input(`vision_encoder`, e2, `image_features`);
    }
    async encode_text(e2) {
      return this._encode_input(`embed_tokens`, e2, `inputs_embeds`);
    }
    async encode_audio(e2) {
      return this._encode_input(`audio_encoder`, e2, `audio_features`);
    }
  };
  async function zg(e2, t2) {
    let { encoder_outputs: n2, input_ids: r2, decoder_input_ids: i2, decoder_attention_mask: a2, ...o2 } = t2;
    return n2 || (n2 = (await Bg(e2, li(t2, e2.sessions.model.inputNames))).last_hidden_state), o2.input_ids = i2, o2.encoder_hidden_states = n2, e2.sessions.decoder_model_merged.inputNames.includes(`encoder_attention_mask`) && (o2.encoder_attention_mask = t2.attention_mask), a2 && !o2.attention_mask && (o2.attention_mask = a2), await qg(e2, o2, true);
  }
  async function Bg(e2, t2) {
    let n2 = e2.sessions.model, r2 = li(t2, n2.inputNames);
    if (n2.inputNames.includes(`inputs_embeds`) && !r2.inputs_embeds) {
      if (!t2.input_ids) throw Error("Both `input_ids` and `inputs_embeds` are missing in the model inputs.");
      r2.inputs_embeds = await e2.encode_text({
        input_ids: t2.input_ids
      });
    }
    if (n2.inputNames.includes(`token_type_ids`) && !r2.token_type_ids) {
      if (!r2.input_ids) throw Error("Both `input_ids` and `token_type_ids` are missing in the model inputs.");
      r2.token_type_ids = Eu(r2.input_ids);
    }
    if (n2.inputNames.includes(`pixel_mask`) && !r2.pixel_mask) {
      if (!r2.pixel_values) throw Error("Both `pixel_values` and `pixel_mask` are missing in the model inputs.");
      let e3 = r2.pixel_values.dims;
      r2.pixel_mask = Cu([
        e3[0],
        e3[2],
        e3[3]
      ]);
    }
    return await Y(n2, r2);
  }
  async function Vg(e2, t2) {
    let n2 = await e2.encode(t2);
    return await e2.decode(n2);
  }
  function Hg(e2, t2) {
    let n2 = /* @__PURE__ */ Object.create(null);
    for (let r2 in e2) if (r2.startsWith(`present`)) {
      let i2 = r2.replace(`present_ssm`, `past_ssm`).replace(`present_conv`, `past_conv`).replace(`present_recurrent`, `past_recurrent`).replace(`present_compressor`, `past_compressor`).replace(`present_indexer`, `past_indexer`).replace(`present`, `past_key_values`);
      n2[i2] = r2.includes(`encoder`) && t2 ? t2[i2] : e2[r2];
    }
    return t2 ? (t2.update(n2), t2) : new Cg(n2);
  }
  function Ug(e2) {
    let t2 = {};
    for (let n2 of [
      `cross_attentions`,
      `encoder_attentions`,
      `decoder_attentions`
    ]) for (let r2 in e2) r2.startsWith(n2) && (n2 in t2 || (t2[n2] = []), t2[n2].push(e2[r2]));
    return t2;
  }
  function Wg(e2, t2) {
    return e2.map((e3) => typeof e3 == `number` ? e3 : t2[e3] ?? 0);
  }
  function Gg(e2, t2, n2) {
    var _a3, _b3, _c3, _d3;
    if (n2 && Object.keys(n2).length > 0) return Object.assign(t2, n2), n2;
    let r2 = e2.sessions.decoder_model_merged ?? e2.sessions.model, i2 = ((_b3 = (_a3 = t2[e2.main_input_name] ?? t2.attention_mask) == null ? void 0 : _a3.dims) == null ? void 0 : _b3[0]) ?? 1, a2 = Mh(e2.config), o2 = (_d3 = (_c3 = e2.config) == null ? void 0 : _c3.normalized_config) == null ? void 0 : _d3.num_heads, s2 = {
      batch_size: i2
    };
    typeof o2 == `number` && (s2[`batch_size x num_heads`] = i2 * o2);
    let c2 = /* @__PURE__ */ Object.create(null);
    for (let e3 of r2.inputMetadata) {
      if (!a2.has(e3.name)) continue;
      let n3 = Wg(e3.shape, s2), r3 = n3.reduce((e4, t3) => e4 * t3, 1), i3 = tu[e3.type], o3 = new W(e3.type, new i3(r3), n3);
      t2[e3.name] = o3, c2[e3.name] = o3;
    }
    return n2 ? (n2.update(c2), n2) : new Cg(c2);
  }
  function Kg(e2, t2, n2) {
    var _a3;
    t2.num_logits_to_keep || ((_a3 = e2.sessions.decoder_model_merged ?? e2.sessions.model) == null ? void 0 : _a3.inputNames.includes(`num_logits_to_keep`)) && (t2.num_logits_to_keep = new W(`int64`, [
      n2
    ], []));
  }
  async function qg(e2, t2, n2 = false) {
    let r2 = e2.sessions[n2 ? `decoder_model_merged` : `model`], { past_key_values: i2, ...a2 } = t2;
    return r2.inputNames.includes(`use_cache_branch`) && (a2.use_cache_branch = Ng(i2 != null && Object.keys(i2).length > 0)), r2.inputNames.includes(`position_ids`) && a2.attention_mask && !a2.position_ids && (a2.position_ids = Qg(a2, i2, +!![
      `paligemma`,
      `gemma3_text`,
      `gemma3`
    ].includes(e2.config.model_type))), Kg(e2, a2, 0n), Gg(e2, a2, i2), await Y(r2, li(a2, r2.inputNames));
  }
  async function Jg(e2, { encode_function: t2, merge_function: n2, modality_input_names: r2, modality_output_name: i2, input_ids: a2 = null, attention_mask: o2 = null, position_ids: s2 = null, inputs_embeds: c2 = null, past_key_values: l2 = null, generation_config: u2 = null, logits_processor: d2 = null, num_logits_to_keep: f2 = null, ...p2 }) {
    if (!c2) {
      c2 = await e2.encode_text({
        input_ids: a2,
        ...p2
      });
      let s3 = li(p2, r2);
      if (Object.keys(s3).length > 0) {
        if (a2.dims[1] !== 1) {
          let e3 = await t2({
            ...s3,
            ...p2
          });
          ({ inputs_embeds: c2, attention_mask: o2 } = n2({
            [i2]: e3,
            inputs_embeds: c2,
            input_ids: a2,
            attention_mask: o2
          }));
        } else if (l2 && a2.dims[1] === 1) {
          let e3 = a2.dims[1], t3 = l2.get_seq_length();
          o2 = mu([
            Cu([
              a2.dims[0],
              t3
            ]),
            o2.slice(null, [
              o2.dims[1] - e3,
              o2.dims[1]
            ])
          ], 1);
        }
      }
    }
    if (!s2 && [
      `qwen2_vl`,
      `qwen2_vl_text`,
      `qwen2_5_vl`,
      `qwen2_5_vl_text`,
      `qwen3_vl`,
      `qwen3_vl_text`,
      `qwen3_vl_moe`,
      `qwen3_vl_moe_text`,
      `qwen3_5`,
      `qwen3_5_text`,
      `qwen3_5_moe`,
      `qwen3_5_moe_text`,
      `glm_ocr`,
      `glm_ocr_text`
    ].includes(e2.config.model_type)) {
      let { image_grid_thw: t3, video_grid_thw: n3 } = p2;
      [s2] = e2.get_rope_index(a2, t3, n3, o2);
    }
    return await qg(e2, {
      inputs_embeds: c2,
      past_key_values: l2,
      attention_mask: o2,
      position_ids: s2,
      generation_config: u2,
      logits_processor: d2,
      num_logits_to_keep: f2
    }, true);
  }
  async function Yg(e2, t2) {
    return await Jg(e2, {
      ...t2,
      modality_input_names: [
        `audio_values`,
        `input_features`
      ],
      modality_output_name: `audio_features`,
      encode_function: e2.encode_audio.bind(e2),
      merge_function: e2._merge_input_ids_with_audio_features.bind(e2)
    });
  }
  async function Xg(e2, t2) {
    return await Jg(e2, {
      ...t2,
      modality_input_names: [
        `pixel_values`
      ],
      modality_output_name: `image_features`,
      encode_function: e2.encode_image.bind(e2),
      merge_function: e2._merge_input_ids_with_image_features.bind(e2)
    });
  }
  function Zg(e2, t2 = 0) {
    let [n2, r2] = e2.dims, i2 = e2.data, a2 = new BigInt64Array(i2.length);
    for (let e3 = 0; e3 < n2; ++e3) {
      let n3 = e3 * r2, o2 = BigInt(t2);
      for (let e4 = 0; e4 < r2; ++e4) {
        let t3 = n3 + e4;
        i2[t3] === 0n ? a2[t3] = BigInt(1) : (a2[t3] = o2, o2 += i2[t3]);
      }
    }
    return {
      data: a2,
      dims: e2.dims
    };
  }
  function Qg(e2, t2 = null, n2 = 0) {
    let { input_ids: r2, inputs_embeds: i2, attention_mask: a2 } = e2, { data: o2, dims: s2 } = Zg(a2, n2), c2 = new W(`int64`, o2, s2);
    if (t2) {
      let e3 = -(r2 ?? i2).dims.at(1);
      c2 = c2.slice(null, [
        e3,
        null
      ]);
    }
    return c2;
  }
  function $g(e2, t2, n2, r2) {
    let i2 = n2.past_key_values ? n2.past_key_values.get_seq_length() : 0;
    if (Kg(e2, n2, 1n), !n2.attention_mask) {
      let e3;
      for (let t3 of [
        `input_ids`,
        `inputs_embeds`,
        `position_ids`
      ]) if (n2[t3]) {
        e3 = n2[t3].dims;
        break;
      }
      if (!e3) throw Error(`attention_mask is not provided, and unable to infer its shape from model inputs.`);
      n2.attention_mask = Cu([
        e3[0],
        i2 + e3[1]
      ]);
    }
    if (n2.past_key_values) {
      let { input_ids: e3, attention_mask: t3 } = n2;
      t3 && t3.dims[1] > e3.dims[1] || i2 < e3.dims[1] && (n2.input_ids = e3.slice(null, [
        i2,
        null
      ]));
    }
    return n2;
  }
  function e_(e2, t2, n2, r2) {
    return n2.past_key_values && (t2 = t2.map((e3) => [
      e3.at(-1)
    ])), Kg(e2, n2, 1n), {
      ...n2,
      decoder_input_ids: Mg(t2)
    };
  }
  function t_(e2, ...t2) {
    return e2.config.is_encoder_decoder ? e_(e2, ...t2) : $g(e2, ...t2);
  }
  function n_({ modality_token_id: e2, inputs_embeds: t2, modality_features: n2, input_ids: r2, attention_mask: i2 }) {
    let a2 = r2.tolist().map((t3) => t3.reduce((t4, n3, r3) => (n3 == e2 && t4.push(r3), t4), [])), o2 = a2.reduce((e3, t3) => e3 + t3.length, 0), s2 = n2.dims[0];
    if (o2 !== s2) throw Error(`Number of tokens and features do not match: tokens: ${o2}, features ${s2}`);
    let c2 = 0;
    for (let e3 = 0; e3 < a2.length; ++e3) {
      let r3 = a2[e3], i3 = t2[e3];
      for (let e4 = 0; e4 < r3.length; ++e4) i3[r3[e4]].data.set(n2[c2++].data);
    }
    return {
      inputs_embeds: t2,
      attention_mask: i2
    };
  }
  function r_({ image_token_id: e2, inputs_embeds: t2, image_features: n2, input_ids: r2, attention_mask: i2 }) {
    return n_({
      modality_token_id: e2,
      inputs_embeds: t2,
      modality_features: n2,
      input_ids: r2,
      attention_mask: i2
    });
  }
  function i_({ audio_token_id: e2, inputs_embeds: t2, audio_features: n2, input_ids: r2, attention_mask: i2 }) {
    return n_({
      modality_token_id: e2,
      inputs_embeds: t2,
      modality_features: n2,
      input_ids: r2,
      attention_mask: i2
    });
  }
  async function a_(e2, t2, n2) {
    return Object.fromEntries(await Promise.all(Object.keys(t2).map(async (r2) => [
      r2,
      await al(e2, t2[r2], false, n2)
    ])));
  }
  var o_ = {};
  wr(o_, {
    ASTForAudioClassification: () => C_,
    ASTModel: () => S_,
    ASTPreTrainedModel: () => x_,
    AfmoeForCausalLM: () => __,
    AfmoeModel: () => g_,
    AfmoePreTrainedModel: () => h_,
    AlbertForMaskedLM: () => d_,
    AlbertForQuestionAnswering: () => u_,
    AlbertForSequenceClassification: () => l_,
    AlbertModel: () => c_,
    AlbertPreTrainedModel: () => s_,
    ApertusForCausalLM: () => m_,
    ApertusModel: () => p_,
    ApertusPreTrainedModel: () => f_,
    ArceeForCausalLM: () => b_,
    ArceeModel: () => y_,
    ArceePreTrainedModel: () => v_,
    BartForConditionalGeneration: () => E_,
    BartForSequenceClassification: () => D_,
    BartModel: () => T_,
    BartPretrainedModel: () => w_,
    BaseModelOutput: () => Gh,
    BeitForImageClassification: () => A_,
    BeitModel: () => k_,
    BeitPreTrainedModel: () => O_,
    BertForMaskedLM: () => N_,
    BertForQuestionAnswering: () => I_,
    BertForSequenceClassification: () => P_,
    BertForTokenClassification: () => F_,
    BertModel: () => M_,
    BertPreTrainedModel: () => j_,
    BlenderbotForConditionalGeneration: () => z_,
    BlenderbotModel: () => R_,
    BlenderbotPreTrainedModel: () => L_,
    BlenderbotSmallForConditionalGeneration: () => H_,
    BlenderbotSmallModel: () => V_,
    BlenderbotSmallPreTrainedModel: () => B_,
    BloomForCausalLM: () => G_,
    BloomModel: () => W_,
    BloomPreTrainedModel: () => U_,
    CHMv2ForDepthEstimation: () => av,
    CHMv2PreTrainedModel: () => iv,
    CLIPModel: () => dv,
    CLIPPreTrainedModel: () => uv,
    CLIPSegForImageSegmentation: () => vv,
    CLIPSegModel: () => _v,
    CLIPSegPreTrainedModel: () => gv,
    CLIPTextModel: () => fv,
    CLIPTextModelWithProjection: () => pv,
    CLIPVisionModel: () => mv,
    CLIPVisionModelWithProjection: () => hv,
    CamembertForMaskedLM: () => J_,
    CamembertForQuestionAnswering: () => Z_,
    CamembertForSequenceClassification: () => Y_,
    CamembertForTokenClassification: () => X_,
    CamembertModel: () => q_,
    CamembertPreTrainedModel: () => K_,
    CausalLMOutput: () => Yh,
    CausalLMOutputWithPast: () => Xh,
    ChatterboxModel: () => tv,
    ChatterboxPreTrainedModel: () => ev,
    ChineseCLIPModel: () => rv,
    ChineseCLIPPreTrainedModel: () => nv,
    ClapAudioModelWithProjection: () => lv,
    ClapModel: () => sv,
    ClapPreTrainedModel: () => ov,
    ClapTextModelWithProjection: () => cv,
    CodeGenForCausalLM: () => xv,
    CodeGenModel: () => bv,
    CodeGenPreTrainedModel: () => yv,
    Cohere2ForCausalLM: () => Dv,
    Cohere2Model: () => Ev,
    Cohere2PreTrainedModel: () => Tv,
    CohereAsrForConditionalGeneration: () => Av,
    CohereAsrModel: () => kv,
    CohereAsrPreTrainedModel: () => Ov,
    CohereForCausalLM: () => wv,
    CohereModel: () => Cv,
    CoherePreTrainedModel: () => Sv,
    ConvBertForMaskedLM: () => Nv,
    ConvBertForQuestionAnswering: () => Iv,
    ConvBertForSequenceClassification: () => Pv,
    ConvBertForTokenClassification: () => Fv,
    ConvBertModel: () => Mv,
    ConvBertPreTrainedModel: () => jv,
    ConvNextForImageClassification: () => zv,
    ConvNextModel: () => Rv,
    ConvNextPreTrainedModel: () => Lv,
    ConvNextV2ForImageClassification: () => Hv,
    ConvNextV2Model: () => Vv,
    ConvNextV2PreTrainedModel: () => Bv,
    DFineForObjectDetection: () => Yv,
    DFineModel: () => Jv,
    DFinePreTrainedModel: () => qv,
    DINOv3ConvNextModel: () => Hy,
    DINOv3ConvNextPreTrainedModel: () => Vy,
    DINOv3ViTModel: () => Wy,
    DINOv3ViTPreTrainedModel: () => Uy,
    DPTForDepthEstimation: () => tb,
    DPTModel: () => eb,
    DPTPreTrainedModel: () => $y,
    DacDecoderModel: () => ty,
    DacDecoderOutput: () => Zv,
    DacEncoderModel: () => ey,
    DacEncoderOutput: () => Xv,
    DacModel: () => $v,
    DacPreTrainedModel: () => Qv,
    DebertaForMaskedLM: () => iy,
    DebertaForQuestionAnswering: () => sy,
    DebertaForSequenceClassification: () => ay,
    DebertaForTokenClassification: () => oy,
    DebertaModel: () => ry,
    DebertaPreTrainedModel: () => ny,
    DebertaV2ForMaskedLM: () => gy,
    DebertaV2ForQuestionAnswering: () => yy,
    DebertaV2ForSequenceClassification: () => _y,
    DebertaV2ForTokenClassification: () => vy,
    DebertaV2Model: () => hy,
    DebertaV2PreTrainedModel: () => my,
    DecisionTransformerModel: () => xy,
    DecisionTransformerPreTrainedModel: () => by,
    DeepseekV3ForCausalLM: () => uy,
    DeepseekV3Model: () => ly,
    DeepseekV3PreTrainedModel: () => cy,
    DeepseekV4ForCausalLM: () => py,
    DeepseekV4Model: () => fy,
    DeepseekV4PreTrainedModel: () => dy,
    DeiTForImageClassification: () => wy,
    DeiTModel: () => Cy,
    DeiTPreTrainedModel: () => Sy,
    DepthAnythingForDepthEstimation: () => Ey,
    DepthAnythingPreTrainedModel: () => Ty,
    DepthProForDepthEstimation: () => Oy,
    DepthProPreTrainedModel: () => Dy,
    DetrForObjectDetection: () => jy,
    DetrForSegmentation: () => My,
    DetrModel: () => Ay,
    DetrObjectDetectionOutput: () => Ny,
    DetrPreTrainedModel: () => ky,
    DetrSegmentationOutput: () => Py,
    Dinov2ForImageClassification: () => Ly,
    Dinov2Model: () => Iy,
    Dinov2PreTrainedModel: () => Fy,
    Dinov2WithRegistersForImageClassification: () => By,
    Dinov2WithRegistersModel: () => zy,
    Dinov2WithRegistersPreTrainedModel: () => Ry,
    DistilBertForMaskedLM: () => Xy,
    DistilBertForQuestionAnswering: () => Yy,
    DistilBertForSequenceClassification: () => qy,
    DistilBertForTokenClassification: () => Jy,
    DistilBertModel: () => Ky,
    DistilBertPreTrainedModel: () => Gy,
    DonutSwinModel: () => Qy,
    DonutSwinPreTrainedModel: () => Zy,
    EdgeTamModel: () => JE,
    EfficientNetForImageClassification: () => ib,
    EfficientNetModel: () => rb,
    EfficientNetPreTrainedModel: () => nb,
    ElectraForMaskedLM: () => sb,
    ElectraForQuestionAnswering: () => ub,
    ElectraForSequenceClassification: () => cb,
    ElectraForTokenClassification: () => lb,
    ElectraModel: () => ob,
    ElectraPreTrainedModel: () => ab,
    EmbeddingGemma2Model: () => fb,
    EmbeddingGemma2PreTrainedModel: () => db,
    Ernie4_5ForCausalLM: () => hb,
    Ernie4_5Model: () => mb,
    Ernie4_5PretrainedModel: () => pb,
    EsmForMaskedLM: () => vb,
    EsmForSequenceClassification: () => yb,
    EsmForTokenClassification: () => bb,
    EsmModel: () => _b,
    EsmPreTrainedModel: () => gb,
    EuroBertForMaskedLM: () => Cb,
    EuroBertForSequenceClassification: () => wb,
    EuroBertForTokenClassification: () => Tb,
    EuroBertModel: () => Sb,
    EuroBertPreTrainedModel: () => xb,
    ExaoneForCausalLM: () => Ob,
    ExaoneModel: () => Db,
    ExaonePreTrainedModel: () => Eb,
    FalconForCausalLM: () => jb,
    FalconH1ForCausalLM: () => Pb,
    FalconH1Model: () => Nb,
    FalconH1PreTrainedModel: () => Mb,
    FalconModel: () => Ab,
    FalconPreTrainedModel: () => kb,
    FastViTForImageClassification: () => Lb,
    FastViTModel: () => Ib,
    FastViTPreTrainedModel: () => Fb,
    Florence2ForConditionalGeneration: () => zb,
    Florence2PreTrainedModel: () => Rb,
    GLPNForDepthEstimation: () => yx,
    GLPNModel: () => vx,
    GLPNPreTrainedModel: () => _x,
    GPT2LMHeadModel: () => Px,
    GPT2Model: () => Nx,
    GPT2PreTrainedModel: () => Mx,
    GPTBigCodeForCausalLM: () => Sx,
    GPTBigCodeModel: () => xx,
    GPTBigCodePreTrainedModel: () => bx,
    GPTJForCausalLM: () => Lx,
    GPTJModel: () => Ix,
    GPTJPreTrainedModel: () => Fx,
    GPTNeoForCausalLM: () => Tx,
    GPTNeoModel: () => wx,
    GPTNeoPreTrainedModel: () => Cx,
    GPTNeoXForCausalLM: () => Ox,
    GPTNeoXModel: () => Dx,
    GPTNeoXPreTrainedModel: () => Ex,
    Gemma2ForCausalLM: () => Gb,
    Gemma2Model: () => Wb,
    Gemma2PreTrainedModel: () => Ub,
    Gemma3ForCausalLM: () => $b,
    Gemma3ForConditionalGeneration: () => Qb,
    Gemma3Model: () => Zb,
    Gemma3PreTrainedModel: () => Xb,
    Gemma3nForCausalLM: () => nx,
    Gemma3nForConditionalGeneration: () => tx,
    Gemma3nPreTrainedModel: () => ex,
    Gemma4ForCausalLM: () => ix,
    Gemma4ForConditionalGeneration: () => rx,
    GemmaForCausalLM: () => Hb,
    GemmaModel: () => Vb,
    GemmaPreTrainedModel: () => Bb,
    GlmForCausalLM: () => sx,
    GlmModel: () => ox,
    GlmMoeDsaForCausalLM: () => ux,
    GlmMoeDsaModel: () => lx,
    GlmMoeDsaPreTrainedModel: () => cx,
    GlmOcrForConditionalGeneration: () => gx,
    GlmPreTrainedModel: () => ax,
    GptOssForCausalLM: () => jx,
    GptOssModel: () => Ax,
    GptOssPreTrainedModel: () => kx,
    GraniteForCausalLM: () => Bx,
    GraniteModel: () => zx,
    GraniteMoeHybridForCausalLM: () => Ux,
    GraniteMoeHybridModel: () => Hx,
    GraniteMoeHybridPreTrainedModel: () => Vx,
    GranitePreTrainedModel: () => Rx,
    GraniteSpeechForConditionalGeneration: () => Kx,
    GroundingDinoForObjectDetection: () => Jx,
    GroundingDinoPreTrainedModel: () => qx,
    GroupViTModel: () => Xx,
    GroupViTPreTrainedModel: () => Yx,
    HeliumForCausalLM: () => $x,
    HeliumModel: () => Qx,
    HeliumPreTrainedModel: () => Zx,
    HieraForImageClassification: () => nS,
    HieraModel: () => tS,
    HieraPreTrainedModel: () => eS,
    HrmTextForCausalLM: () => aS,
    HrmTextModel: () => iS,
    HrmTextPreTrainedModel: () => rS,
    HubertForCTC: () => pS,
    HubertForSequenceClassification: () => mS,
    HubertModel: () => fS,
    HubertPreTrainedModel: () => dS,
    HunYuanDenseV1ForCausalLM: () => _S,
    HunYuanDenseV1Model: () => gS,
    HunYuanDenseV1PreTrainedModel: () => hS,
    IJepaForImageClassification: () => xS,
    IJepaModel: () => bS,
    IJepaPreTrainedModel: () => yS,
    Idefics3ForConditionalGeneration: () => vS,
    ImageMattingOutput: () => Qh,
    JAISLMHeadModel: () => wS,
    JAISModel: () => CS,
    JAISPreTrainedModel: () => SS,
    JinaCLIPModel: () => ES,
    JinaCLIPPreTrainedModel: () => TS,
    JinaCLIPTextModel: () => DS,
    JinaCLIPVisionModel: () => OS,
    Lfm2ForCausalLM: () => jS,
    Lfm2Model: () => AS,
    Lfm2MoeForCausalLM: () => FS,
    Lfm2MoeModel: () => PS,
    Lfm2MoePreTrainedModel: () => NS,
    Lfm2PreTrainedModel: () => kS,
    Lfm2VlForConditionalGeneration: () => IS,
    Lfm3ForCausalLM: () => zS,
    Lfm3Model: () => RS,
    Lfm3PreTrainedModel: () => LS,
    Lfm3VlForConditionalGeneration: () => BS,
    LightOnOcrForConditionalGeneration: () => MS,
    LiteWhisperForConditionalGeneration: () => rk,
    Llama4ForCausalLM: () => GS,
    Llama4PreTrainedModel: () => WS,
    LlamaForCausalLM: () => US,
    LlamaModel: () => HS,
    LlamaPreTrainedModel: () => VS,
    LlavaForConditionalGeneration: () => qb,
    LlavaOnevisionForConditionalGeneration: () => qb,
    LlavaPreTrainedModel: () => Kb,
    LlavaQwen2ForCausalLM: () => Yb,
    LongT5ForConditionalGeneration: () => JS,
    LongT5Model: () => qS,
    LongT5PreTrainedModel: () => KS,
    M2M100ForConditionalGeneration: () => ZS,
    M2M100Model: () => XS,
    M2M100PreTrainedModel: () => YS,
    MBartForCausalLM: () => cC,
    MBartForConditionalGeneration: () => oC,
    MBartForSequenceClassification: () => sC,
    MBartModel: () => aC,
    MBartPreTrainedModel: () => iC,
    MPNetForMaskedLM: () => ww,
    MPNetForQuestionAnswering: () => Dw,
    MPNetForSequenceClassification: () => Tw,
    MPNetForTokenClassification: () => Ew,
    MPNetModel: () => Cw,
    MPNetPreTrainedModel: () => Sw,
    MT5ForConditionalGeneration: () => Nw,
    MT5Model: () => Mw,
    MT5PreTrainedModel: () => jw,
    MarianMTModel: () => eC,
    MarianModel: () => $S,
    MarianPreTrainedModel: () => QS,
    MaskFormerForInstanceSegmentation: () => rC,
    MaskFormerModel: () => nC,
    MaskFormerPreTrainedModel: () => tC,
    MaskedLMOutput: () => qh,
    Metric3DForDepthEstimation: () => uC,
    Metric3DPreTrainedModel: () => lC,
    Metric3Dv2ForDepthEstimation: () => fC,
    Metric3Dv2PreTrainedModel: () => dC,
    MgpstrForSceneTextRecognition: () => hC,
    MgpstrModelOutput: () => pC,
    MgpstrPreTrainedModel: () => mC,
    MimiDecoderModel: () => xC,
    MimiDecoderOutput: () => _C,
    MimiEncoderModel: () => bC,
    MimiEncoderOutput: () => gC,
    MimiModel: () => yC,
    MimiPreTrainedModel: () => vC,
    Ministral3ForCausalLM: () => DC,
    Ministral3Model: () => EC,
    Ministral3PreTrainedModel: () => TC,
    MinistralForCausalLM: () => wC,
    MinistralModel: () => CC,
    MinistralPreTrainedModel: () => SC,
    Mistral3ForConditionalGeneration: () => jC,
    Mistral4ForCausalLM: () => PC,
    Mistral4Model: () => NC,
    Mistral4PreTrainedModel: () => MC,
    MistralForCausalLM: () => AC,
    MistralModel: () => kC,
    MistralPreTrainedModel: () => OC,
    MobileBertForMaskedLM: () => LC,
    MobileBertForQuestionAnswering: () => zC,
    MobileBertForSequenceClassification: () => RC,
    MobileBertModel: () => IC,
    MobileBertPreTrainedModel: () => FC,
    MobileLLMForCausalLM: () => HC,
    MobileLLMModel: () => VC,
    MobileLLMPreTrainedModel: () => BC,
    MobileNetV1ForImageClassification: () => GC,
    MobileNetV1ForSemanticSegmentation: () => KC,
    MobileNetV1Model: () => WC,
    MobileNetV1PreTrainedModel: () => UC,
    MobileNetV2ForImageClassification: () => YC,
    MobileNetV2ForSemanticSegmentation: () => XC,
    MobileNetV2Model: () => JC,
    MobileNetV2PreTrainedModel: () => qC,
    MobileNetV3ForImageClassification: () => $C,
    MobileNetV3ForSemanticSegmentation: () => ew,
    MobileNetV3Model: () => QC,
    MobileNetV3PreTrainedModel: () => ZC,
    MobileNetV4ForImageClassification: () => rw,
    MobileNetV4ForSemanticSegmentation: () => iw,
    MobileNetV4Model: () => nw,
    MobileNetV4PreTrainedModel: () => tw,
    MobileViTForImageClassification: () => sw,
    MobileViTModel: () => ow,
    MobileViTPreTrainedModel: () => aw,
    MobileViTV2ForImageClassification: () => uw,
    MobileViTV2Model: () => lw,
    MobileViTV2PreTrainedModel: () => cw,
    ModelOutput: () => Wh,
    ModernBertDecoderForCausalLM: () => vw,
    ModernBertDecoderModel: () => _w,
    ModernBertDecoderPreTrainedModel: () => gw,
    ModernBertForMaskedLM: () => pw,
    ModernBertForSequenceClassification: () => mw,
    ModernBertForTokenClassification: () => hw,
    ModernBertModel: () => fw,
    ModernBertPreTrainedModel: () => dw,
    Moondream1ForConditionalGeneration: () => Jb,
    MoonshineForConditionalGeneration: () => xw,
    MoonshineModel: () => bw,
    MoonshinePreTrainedModel: () => yw,
    MptForCausalLM: () => Aw,
    MptModel: () => kw,
    MptPreTrainedModel: () => Ow,
    MultiModalityCausalLM: () => Fw,
    MultiModalityPreTrainedModel: () => Pw,
    MusicgenForCausalLM: () => Rw,
    MusicgenForConditionalGeneration: () => zw,
    MusicgenModel: () => Lw,
    MusicgenPreTrainedModel: () => Iw,
    NanoChatForCausalLM: () => Hw,
    NanoChatModel: () => Vw,
    NanoChatPreTrainedModel: () => Bw,
    NemotronHForCausalLM: () => Gw,
    NemotronHModel: () => Ww,
    NemotronHPreTrainedModel: () => Uw,
    NeoBertForMaskedLM: () => Jw,
    NeoBertForQuestionAnswering: () => Zw,
    NeoBertForSequenceClassification: () => Yw,
    NeoBertForTokenClassification: () => Xw,
    NeoBertModel: () => qw,
    NeoBertPreTrainedModel: () => Kw,
    NomicBertModel: () => $w,
    NomicBertPreTrainedModel: () => Qw,
    OPTForCausalLM: () => bT,
    OPTModel: () => yT,
    OPTPreTrainedModel: () => vT,
    Olmo2ForCausalLM: () => aT,
    Olmo2Model: () => iT,
    Olmo2PreTrainedModel: () => rT,
    Olmo3ForCausalLM: () => cT,
    Olmo3Model: () => sT,
    Olmo3PreTrainedModel: () => oT,
    OlmoForCausalLM: () => nT,
    OlmoHybridForCausalLM: () => dT,
    OlmoHybridModel: () => uT,
    OlmoHybridPreTrainedModel: () => lT,
    OlmoModel: () => tT,
    OlmoPreTrainedModel: () => eT,
    OpenAIPrivacyFilterForTokenClassification: () => mT,
    OpenAIPrivacyFilterModel: () => pT,
    OpenAIPrivacyFilterPreTrainedModel: () => fT,
    OpenELMForCausalLM: () => _T,
    OpenELMModel: () => gT,
    OpenELMPreTrainedModel: () => hT,
    OwlViTForObjectDetection: () => ET,
    OwlViTModel: () => TT,
    OwlViTPreTrainedModel: () => wT,
    Owlv2ForObjectDetection: () => CT,
    Owlv2Model: () => ST,
    Owlv2PreTrainedModel: () => xT,
    PaliGemmaForConditionalGeneration: () => DT,
    ParakeetForCTC: () => kT,
    ParakeetPreTrainedModel: () => OT,
    PatchTSMixerForPrediction: () => MT,
    PatchTSMixerModel: () => jT,
    PatchTSMixerPreTrainedModel: () => AT,
    PatchTSTForPrediction: () => FT,
    PatchTSTModel: () => PT,
    PatchTSTPreTrainedModel: () => NT,
    Phi3ForCausalLM: () => VT,
    Phi3Model: () => BT,
    Phi3PreTrainedModel: () => zT,
    Phi3VForCausalLM: () => UT,
    Phi3VPreTrainedModel: () => HT,
    PhiForCausalLM: () => RT,
    PhiModel: () => LT,
    PhiPreTrainedModel: () => IT,
    PreTrainedModel: () => Q,
    PvtForImageClassification: () => KT,
    PvtModel: () => GT,
    PvtPreTrainedModel: () => WT,
    PyAnnoteForAudioFrameClassification: () => YT,
    PyAnnoteModel: () => JT,
    PyAnnotePreTrainedModel: () => qT,
    QuestionAnsweringModelOutput: () => Jh,
    Qwen2ForCausalLM: () => QT,
    Qwen2Model: () => ZT,
    Qwen2MoeForCausalLM: () => tE,
    Qwen2MoeModel: () => eE,
    Qwen2MoePreTrainedModel: () => $T,
    Qwen2PreTrainedModel: () => XT,
    Qwen2VLForCausalLM: () => px,
    Qwen2VLForConditionalGeneration: () => fx,
    Qwen2VLPreTrainedModel: () => dx,
    Qwen2_5_VLForCausalLM: () => hx,
    Qwen2_5_VLForConditionalGeneration: () => mx,
    Qwen3ForCausalLM: () => iE,
    Qwen3Model: () => rE,
    Qwen3MoeForCausalLM: () => sE,
    Qwen3MoeModel: () => oE,
    Qwen3MoePreTrainedModel: () => aE,
    Qwen3NextForCausalLM: () => uE,
    Qwen3NextModel: () => lE,
    Qwen3NextPreTrainedModel: () => cE,
    Qwen3PreTrainedModel: () => nE,
    Qwen3VLForCausalLM: () => fE,
    Qwen3VLForConditionalGeneration: () => dE,
    Qwen3VLMoeForCausalLM: () => mE,
    Qwen3VLMoeForConditionalGeneration: () => pE,
    Qwen3_5ForCausalLM: () => gE,
    Qwen3_5ForConditionalGeneration: () => hE,
    Qwen3_5MoeForCausalLM: () => vE,
    Qwen3_5MoeForConditionalGeneration: () => _E,
    RFDetrForObjectDetection: () => wE,
    RFDetrModel: () => CE,
    RFDetrObjectDetectionOutput: () => TE,
    RFDetrPreTrainedModel: () => SE,
    RTDetrForObjectDetection: () => Gv,
    RTDetrModel: () => Wv,
    RTDetrObjectDetectionOutput: () => Kv,
    RTDetrPreTrainedModel: () => Uv,
    RTDetrV2ForObjectDetection: () => BE,
    RTDetrV2Model: () => zE,
    RTDetrV2ObjectDetectionOutput: () => VE,
    RTDetrV2PreTrainedModel: () => RE,
    ResNetForImageClassification: () => xE,
    ResNetModel: () => bE,
    ResNetPreTrainedModel: () => yE,
    RoFormerForMaskedLM: () => PE,
    RoFormerForQuestionAnswering: () => LE,
    RoFormerForSequenceClassification: () => FE,
    RoFormerForTokenClassification: () => IE,
    RoFormerModel: () => NE,
    RoFormerPreTrainedModel: () => ME,
    RobertaForMaskedLM: () => OE,
    RobertaForQuestionAnswering: () => jE,
    RobertaForSequenceClassification: () => kE,
    RobertaForTokenClassification: () => AE,
    RobertaModel: () => DE,
    RobertaPreTrainedModel: () => EE,
    Sam2ImageSegmentationOutput: () => GE,
    Sam2Model: () => qE,
    Sam2PreTrainedModel: () => KE,
    Sam3TrackerModel: () => YE,
    SamImageSegmentationOutput: () => HE,
    SamModel: () => WE,
    SamPreTrainedModel: () => UE,
    SapiensForDepthEstimation: () => QE,
    SapiensForNormalEstimation: () => $E,
    SapiensForSemanticSegmentation: () => ZE,
    SapiensPreTrainedModel: () => XE,
    SegformerForImageClassification: () => nD,
    SegformerForSemanticSegmentation: () => rD,
    SegformerModel: () => tD,
    SegformerPreTrainedModel: () => eD,
    Seq2SeqLMOutput: () => Zh,
    SequenceClassifierOutput: () => X,
    SiglipModel: () => aD,
    SiglipPreTrainedModel: () => iD,
    SiglipTextModel: () => oD,
    SiglipVisionModel: () => sD,
    SmolLM3ForCausalLM: () => uD,
    SmolLM3Model: () => lD,
    SmolLM3PreTrainedModel: () => cD,
    SmolVLMForConditionalGeneration: () => dD,
    SnacDecoderModel: () => hD,
    SnacEncoderModel: () => mD,
    SnacModel: () => pD,
    SnacPreTrainedModel: () => fD,
    SolarOpenForCausalLM: () => vD,
    SolarOpenModel: () => _D,
    SolarOpenPreTrainedModel: () => gD,
    SpeechT5ForSpeechToText: () => xD,
    SpeechT5ForTextToSpeech: () => SD,
    SpeechT5HifiGan: () => CD,
    SpeechT5Model: () => bD,
    SpeechT5PreTrainedModel: () => yD,
    SqueezeBertForMaskedLM: () => ED,
    SqueezeBertForQuestionAnswering: () => OD,
    SqueezeBertForSequenceClassification: () => DD,
    SqueezeBertModel: () => TD,
    SqueezeBertPreTrainedModel: () => wD,
    StableLmForCausalLM: () => jD,
    StableLmModel: () => AD,
    StableLmPreTrainedModel: () => kD,
    Starcoder2ForCausalLM: () => PD,
    Starcoder2Model: () => ND,
    Starcoder2PreTrainedModel: () => MD,
    StyleTextToSpeech2Model: () => ID,
    StyleTextToSpeech2PreTrainedModel: () => FD,
    SupertonicForConditionalGeneration: () => RD,
    SupertonicPreTrainedModel: () => LD,
    Swin2SRForImageSuperResolution: () => GD,
    Swin2SRModel: () => WD,
    Swin2SRPreTrainedModel: () => UD,
    SwinForImageClassification: () => VD,
    SwinForSemanticSegmentation: () => HD,
    SwinModel: () => BD,
    SwinPreTrainedModel: () => zD,
    T5ForConditionalGeneration: () => JD,
    T5Model: () => qD,
    T5PreTrainedModel: () => KD,
    TableTransformerForObjectDetection: () => ZD,
    TableTransformerModel: () => XD,
    TableTransformerObjectDetectionOutput: () => QD,
    TableTransformerPreTrainedModel: () => YD,
    TokenClassifierOutput: () => Kh,
    TrOCRForCausalLM: () => eO,
    TrOCRPreTrainedModel: () => $D,
    UltravoxModel: () => Gx,
    UltravoxPreTrainedModel: () => Wx,
    UniSpeechForCTC: () => rO,
    UniSpeechForSequenceClassification: () => iO,
    UniSpeechModel: () => nO,
    UniSpeechPreTrainedModel: () => tO,
    UniSpeechSatForAudioFrameClassification: () => lO,
    UniSpeechSatForCTC: () => sO,
    UniSpeechSatForSequenceClassification: () => cO,
    UniSpeechSatModel: () => oO,
    UniSpeechSatPreTrainedModel: () => aO,
    VaultGemmaForCausalLM: () => fO,
    VaultGemmaModel: () => dO,
    VaultGemmaPreTrainedModel: () => uO,
    ViTForImageClassification: () => gO,
    ViTMAEModel: () => vO,
    ViTMAEPreTrainedModel: () => _O,
    ViTMSNForImageClassification: () => xO,
    ViTMSNModel: () => bO,
    ViTMSNPreTrainedModel: () => yO,
    ViTModel: () => hO,
    ViTPreTrainedModel: () => mO,
    VisionEncoderDecoderModel: () => pO,
    VitMatteForImageMatting: () => CO,
    VitMattePreTrainedModel: () => SO,
    VitPoseForPoseEstimation: () => TO,
    VitPosePreTrainedModel: () => wO,
    VitsModel: () => OO,
    VitsModelOutput: () => EO,
    VitsPreTrainedModel: () => DO,
    VoxtralForConditionalGeneration: () => kO,
    VoxtralRealtimeForConditionalGeneration: () => zO,
    VoxtralRealtimePreTrainedModel: () => RO,
    Wav2Vec2BertForCTC: () => HO,
    Wav2Vec2BertForSequenceClassification: () => UO,
    Wav2Vec2BertModel: () => VO,
    Wav2Vec2BertPreTrainedModel: () => BO,
    Wav2Vec2ForAudioFrameClassification: () => uS,
    Wav2Vec2ForCTC: () => cS,
    Wav2Vec2ForSequenceClassification: () => lS,
    Wav2Vec2Model: () => sS,
    Wav2Vec2PreTrainedModel: () => oS,
    WavLMForAudioFrameClassification: () => XO,
    WavLMForCTC: () => qO,
    WavLMForSequenceClassification: () => JO,
    WavLMForXVector: () => YO,
    WavLMModel: () => KO,
    WavLMPreTrainedModel: () => GO,
    WeSpeakerResNetModel: () => QO,
    WeSpeakerResNetPreTrainedModel: () => ZO,
    WhisperForConditionalGeneration: () => nk,
    WhisperModel: () => tk,
    WhisperPreTrainedModel: () => ek,
    XLMForQuestionAnswering: () => lk,
    XLMForSequenceClassification: () => sk,
    XLMForTokenClassification: () => ck,
    XLMModel: () => ak,
    XLMPreTrainedModel: () => ik,
    XLMRobertaForMaskedLM: () => fk,
    XLMRobertaForQuestionAnswering: () => hk,
    XLMRobertaForSequenceClassification: () => pk,
    XLMRobertaForTokenClassification: () => mk,
    XLMRobertaModel: () => dk,
    XLMRobertaPreTrainedModel: () => uk,
    XLMWithLMHeadModel: () => ok,
    XVectorOutput: () => WO,
    YolosForObjectDetection: () => vk,
    YolosModel: () => _k,
    YolosObjectDetectionOutput: () => yk,
    YolosPreTrainedModel: () => gk,
    YoutuForCausalLM: () => Sk,
    YoutuModel: () => xk,
    YoutuPreTrainedModel: () => bk,
    ZayaForCausalLM: () => Tk,
    ZayaModel: () => wk,
    ZayaPreTrainedModel: () => Ck
  });
  var s_ = class extends Q {
  }, c_ = class extends s_ {
  }, l_ = class extends s_ {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, u_ = class extends s_ {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, d_ = class extends s_ {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, f_ = class extends Q {
  }, p_ = class extends f_ {
  }, m_ = class extends f_ {
  }, h_ = class extends Q {
  }, g_ = class extends h_ {
  }, __ = class extends h_ {
  }, v_ = class extends Q {
  }, y_ = class extends v_ {
  }, b_ = class extends v_ {
  }, x_ = class extends Q {
  }, S_ = class extends x_ {
  }, C_ = class extends x_ {
  }, w_ = class extends Q {
  }, T_ = class extends w_ {
  }, E_ = class extends w_ {
  }, D_ = class extends w_ {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, O_ = class extends Q {
  }, k_ = class extends O_ {
  }, A_ = class extends O_ {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, j_ = class extends Q {
  }, M_ = class extends j_ {
  }, N_ = class extends j_ {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, P_ = class extends j_ {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, F_ = class extends j_ {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, I_ = class extends j_ {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, L_ = class extends Q {
  }, R_ = class extends L_ {
  }, z_ = class extends L_ {
  }, B_ = class extends Q {
  }, V_ = class extends B_ {
  }, H_ = class extends B_ {
  }, U_ = class extends Q {
  }, W_ = class extends U_ {
  }, G_ = class extends U_ {
  }, K_ = class extends Q {
  }, q_ = class extends K_ {
  }, J_ = class extends K_ {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, Y_ = class extends K_ {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, X_ = class extends K_ {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, Z_ = class extends K_ {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, Q_ = 4299n, $_ = 6561n, ev = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `inputs_embeds`,
        `attention_mask`,
        `position_ids`,
        `audio_values`,
        `exaggeration`,
        `audio_features`,
        `audio_tokens`,
        `speaker_embeddings`,
        `speaker_features`,
        `past_key_values`
      ]);
      __publicField(this, "main_input_name", `input_ids`);
      __publicField(this, "_return_dict_in_generate_keys", [
        `audio_tokens`,
        `speaker_embeddings`,
        `speaker_features`
      ]);
    }
  }, tv = class extends ev {
    async encode_speech(e2) {
      return Y(this.sessions.speech_encoder, {
        audio_values: e2
      });
    }
    async forward({ input_ids: e2 = null, attention_mask: t2 = null, audio_values: n2 = null, exaggeration: r2 = null, position_ids: i2 = null, inputs_embeds: a2 = null, past_key_values: o2 = null, generation_config: s2 = null, logits_processor: c2 = null, num_logits_to_keep: l2 = null, audio_features: u2 = null, audio_tokens: d2 = null, speaker_embeddings: f2 = null, speaker_features: p2 = null, ...m2 }) {
      let h2;
      if (!a2) {
        let s3 = this.sessions.embed_tokens.inputNames, c3 = {
          input_ids: e2
        };
        if (s3.includes(`exaggeration`)) {
          if (!(r2 instanceof W)) {
            let t3 = e2.dims[0];
            if (r2 == null) r2 = xu([
              t3
            ], 0.5);
            else if (typeof r2 == `number`) r2 = xu([
              t3
            ], r2);
            else if (Array.isArray(r2)) r2 = new W(`float32`, r2, [
              t3
            ]);
            else throw Error("Unsupported type for `exaggeration` input");
          }
          c3.exaggeration = r2;
        }
        if (s3.includes(`position_ids`) && (c3.position_ids = i2), { inputs_embeds: a2 } = await Y(this.sessions.embed_tokens, c3), u2 && d2 && f2 && p2 && (h2 = {
          audio_features: u2,
          audio_tokens: d2,
          speaker_embeddings: f2,
          speaker_features: p2
        }), h2 || n2) h2 ?? (h2 = await this.encode_speech(n2)), a2 = mu([
          h2.audio_features,
          a2
        ], 1), t2 = Cu([
          a2.dims[0],
          a2.dims[1]
        ]);
        else {
          let e3 = a2.dims[1];
          if (!o2 || e3 !== 1) throw Error(`Incorrect state encountered during generation.`);
          let n3 = o2.get_seq_length();
          t2 = Cu([
            a2.dims[0],
            n3 + e3
          ]);
        }
      }
      return {
        ...await qg(this, {
          inputs_embeds: a2,
          past_key_values: o2,
          attention_mask: t2,
          generation_config: s2,
          logits_processor: c2,
          num_logits_to_keep: l2
        }, false),
        ...h2
      };
    }
    prepare_inputs_for_generation(e2, t2, n2) {
      return !t2.position_ids && this.sessions.embed_tokens.inputNames.includes(`position_ids`) && (t2.position_ids = t2.input_ids.dims[1] === 1 ? new W(`int64`, Array.from({
        length: e2.length
      }, (t3, n3) => e2[n3].length - e2[n3].findLastIndex((e3) => e3 == $_) - 1), [
        e2.length,
        1
      ]) : new W(`int64`, t2.input_ids.tolist().map((e3) => {
        let t3 = 0;
        return e3.map((e4) => e4 >= $_ ? 0 : t3++);
      }).flat(), t2.input_ids.dims)), t2.input_ids.dims[1] === 1 && (delete t2.audio_values, delete t2.audio_features, delete t2.audio_tokens, delete t2.speaker_embeddings, delete t2.speaker_features), $g(this, e2, t2, n2);
    }
    async generate(e2) {
      let t2 = e2.past_key_values, { sequences: n2, audio_tokens: r2, speaker_embeddings: i2, speaker_features: a2, past_key_values: o2 } = await super.generate({
        ...e2,
        return_dict_in_generate: true
      });
      try {
        let t3 = n2.slice(null, [
          e2.input_ids.dims[1],
          -1
        ]), o3 = mu([
          r2,
          t3,
          xu([
            t3.dims[0],
            3
          ], Q_)
        ], 1), { waveform: s2 } = await Y(this.sessions.conditional_decoder, {
          speech_tokens: o3,
          speaker_features: a2,
          speaker_embeddings: i2
        });
        return s2;
      } finally {
        o2 !== t2 && await (o2 == null ? void 0 : o2.dispose());
      }
    }
  }, nv = class extends Q {
  }, rv = class extends nv {
  }, iv = class extends Q {
  }, av = class extends iv {
  }, ov = class extends Q {
  }, sv = class extends ov {
  }, cv = class extends ov {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `text_model`
      });
    }
  }, lv = class extends ov {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `audio_model`
      });
    }
  }, uv = class extends Q {
  }, dv = class extends uv {
  }, fv = class extends uv {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `text_model`
      });
    }
  }, pv = class extends uv {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `text_model`
      });
    }
  }, mv = class extends uv {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `vision_model`
      });
    }
  }, hv = class extends uv {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `vision_model`
      });
    }
  }, gv = class extends Q {
  }, _v = class extends gv {
  }, vv = class extends gv {
  }, yv = class extends Q {
  }, bv = class extends yv {
  }, xv = class extends yv {
  }, Sv = class extends Q {
  }, Cv = class extends Sv {
  }, wv = class extends Sv {
  }, Tv = class extends Q {
  }, Ev = class extends Tv {
  }, Dv = class extends Tv {
  }, Ov = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "requires_attention_mask", false);
      __publicField(this, "main_input_name", `input_features`);
      __publicField(this, "forward_params", [
        `input_features`,
        `decoder_input_ids`,
        `decoder_attention_mask`,
        `past_key_values`
      ]);
    }
  }, kv = class extends Ov {
  }, Av = class extends Ov {
  }, jv = class extends Q {
  }, Mv = class extends jv {
  }, Nv = class extends jv {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, Pv = class extends jv {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Fv = class extends jv {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, Iv = class extends jv {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, Lv = class extends Q {
  }, Rv = class extends Lv {
  }, zv = class extends Lv {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Bv = class extends Q {
  }, Vv = class extends Bv {
  }, Hv = class extends Bv {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Uv = class extends Q {
  }, Wv = class extends Uv {
  }, Gv = class extends Uv {
    async _call(e2) {
      return new Kv(await super._call(e2));
    }
  }, Kv = class extends Wh {
    constructor({ logits: e2, pred_boxes: t2 }) {
      super(), this.logits = e2, this.pred_boxes = t2;
    }
  }, qv = class extends Q {
  }, Jv = class extends qv {
  }, Yv = class extends qv {
    async _call(e2) {
      return new Kv(await super._call(e2));
    }
  }, Xv = class extends Wh {
    constructor({ audio_codes: e2 }) {
      super(), this.audio_codes = e2;
    }
  }, Zv = class extends Wh {
    constructor({ audio_values: e2 }) {
      super(), this.audio_values = e2;
    }
  }, Qv = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "main_input_name", `input_values`);
      __publicField(this, "forward_params", [
        `input_values`
      ]);
    }
  }, $v = class extends Qv {
    async encode(e2) {
      return new Xv(await Y(this.sessions.encoder_model, e2));
    }
    async decode(e2) {
      return new Zv(await Y(this.sessions.decoder_model, e2));
    }
  }, ey = class extends Qv {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `encoder_model`
      });
    }
  }, ty = class extends Qv {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `decoder_model`
      });
    }
  }, ny = class extends Q {
  }, ry = class extends ny {
  }, iy = class extends ny {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, ay = class extends ny {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, oy = class extends ny {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, sy = class extends ny {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, cy = class extends Q {
  }, ly = class extends cy {
  }, uy = class extends cy {
  }, dy = class extends Q {
  }, fy = class extends dy {
  }, py = class extends dy {
  }, my = class extends Q {
  }, hy = class extends my {
  }, gy = class extends my {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, _y = class extends my {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, vy = class extends my {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, yy = class extends my {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, by = class extends Q {
  }, xy = class extends by {
  }, Sy = class extends Q {
  }, Cy = class extends Sy {
  }, wy = class extends Sy {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Ty = class extends Q {
  }, Ey = class extends Ty {
  }, Dy = class extends Q {
  }, Oy = class extends Dy {
  }, ky = class extends Q {
  }, Ay = class extends ky {
  }, jy = class extends ky {
    async _call(e2) {
      return new Ny(await super._call(e2));
    }
  }, My = class extends ky {
    async _call(e2) {
      return new Py(await super._call(e2));
    }
  }, Ny = class extends Wh {
    constructor({ logits: e2, pred_boxes: t2 }) {
      super(), this.logits = e2, this.pred_boxes = t2;
    }
  }, Py = class extends Wh {
    constructor({ logits: e2, pred_boxes: t2, pred_masks: n2 }) {
      super(), this.logits = e2, this.pred_boxes = t2, this.pred_masks = n2;
    }
  }, Fy = class extends Q {
  }, Iy = class extends Fy {
  }, Ly = class extends Fy {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Ry = class extends Q {
  }, zy = class extends Ry {
  }, By = class extends Ry {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Vy = class extends Q {
  }, Hy = class extends Vy {
  }, Uy = class extends Q {
  }, Wy = class extends Uy {
  }, Gy = class extends Q {
  }, Ky = class extends Gy {
  }, qy = class extends Gy {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Jy = class extends Gy {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, Yy = class extends Gy {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, Xy = class extends Gy {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, Zy = class extends Q {
  }, Qy = class extends Zy {
  }, $y = class extends Q {
  }, eb = class extends $y {
  }, tb = class extends $y {
  }, nb = class extends Q {
  }, rb = class extends nb {
  }, ib = class extends nb {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, ab = class extends Q {
  }, ob = class extends ab {
  }, sb = class extends ab {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, cb = class extends ab {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, lb = class extends ab {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, ub = class extends ab {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, db = class extends Q {
  }, fb = class extends db {
    async forward({ input_ids: e2, attention_mask: t2, pixel_values: n2 = null, image_position_ids: r2 = null, pixel_values_videos: i2 = null, video_position_ids: a2 = null, input_features: o2 = null, input_features_mask: s2 = null }) {
      let c2 = {
        image_features: n2 && await this.encode_image({
          pixel_values: n2,
          pixel_position_ids: r2
        }),
        video_features: i2 && await this.encode_image({
          pixel_values: i2,
          pixel_position_ids: a2
        }),
        audio_features: o2 && await this.encode_audio({
          input_features: o2,
          input_features_mask: s2
        })
      }, { image_token_id: l2, video_token_id: u2, audio_token_id: d2, text_config: f2 } = this.config, p2 = {
        image: l2,
        video: u2,
        audio: d2
      };
      for (let [t3, n3] of Object.entries(p2)) {
        let r3 = `${t3}_features`;
        c2[r3] ?? (c2[r3] = new W(`float32`, new Float32Array(), [
          0,
          f2.hidden_size
        ]));
        let i3 = 0;
        for (let t4 of e2.data) Number(t4) === n3 && ++i3;
        if (i3 !== c2[r3].dims[0]) throw Error(`The number of ${t3} tokens (${i3}) and ${t3} features (${c2[r3].dims[0]}) do not match.`);
      }
      return await Y(this.sessions.model, {
        input_ids: e2,
        attention_mask: t2,
        ...c2
      });
    }
  }, pb = class extends Q {
  }, mb = class extends pb {
  }, hb = class extends pb {
  }, gb = class extends Q {
  }, _b = class extends gb {
  }, vb = class extends gb {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, yb = class extends gb {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, bb = class extends gb {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, xb = class extends Q {
  }, Sb = class extends xb {
  }, Cb = class extends xb {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, wb = class extends xb {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Tb = class extends xb {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, Eb = class extends Q {
  }, Db = class extends Eb {
  }, Ob = class extends Eb {
  }, kb = class extends Q {
  }, Ab = class extends kb {
  }, jb = class extends kb {
  }, Mb = class extends Q {
  }, Nb = class extends Mb {
  }, Pb = class extends Mb {
  }, Fb = class extends Q {
  }, Ib = class extends Fb {
  }, Lb = class extends Fb {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Rb = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `inputs_embeds`,
        `attention_mask`,
        `pixel_values`,
        `encoder_outputs`,
        `decoder_input_ids`,
        `decoder_inputs_embeds`,
        `decoder_attention_mask`,
        `past_key_values`
      ]);
      __publicField(this, "main_input_name", `inputs_embeds`);
    }
  }, zb = class extends Rb {
    _merge_input_ids_with_image_features({ inputs_embeds: e2, image_features: t2, input_ids: n2, attention_mask: r2 }) {
      return {
        inputs_embeds: mu([
          t2,
          e2
        ], 1),
        attention_mask: mu([
          Cu(t2.dims.slice(0, 2)),
          r2
        ], 1)
      };
    }
    async _prepare_inputs_embeds({ input_ids: e2, pixel_values: t2, inputs_embeds: n2, attention_mask: r2 }) {
      if (!e2 && !t2) throw Error("Either `input_ids` or `pixel_values` should be provided.");
      let i2, a2;
      return e2 && (i2 = await this.encode_text({
        input_ids: e2
      })), t2 && (a2 = await this.encode_image({
        pixel_values: t2
      })), i2 && a2 ? { inputs_embeds: n2, attention_mask: r2 } = this._merge_input_ids_with_image_features({
        inputs_embeds: i2,
        image_features: a2,
        input_ids: e2,
        attention_mask: r2
      }) : n2 = i2 || a2, {
        inputs_embeds: n2,
        attention_mask: r2
      };
    }
    async forward({ input_ids: e2, pixel_values: t2, attention_mask: n2, decoder_input_ids: r2, decoder_attention_mask: i2, encoder_outputs: a2, past_key_values: o2, inputs_embeds: s2, decoder_inputs_embeds: c2, num_logits_to_keep: l2 = null }) {
      if (s2 || ({ inputs_embeds: s2, attention_mask: n2 } = await this._prepare_inputs_embeds({
        input_ids: e2,
        pixel_values: t2,
        inputs_embeds: s2,
        attention_mask: n2
      })), !a2) {
        let { last_hidden_state: e3 } = await Bg(this, {
          inputs_embeds: s2,
          attention_mask: n2
        });
        a2 = e3;
      }
      if (!c2) {
        if (!r2) throw Error("Either `decoder_input_ids` or `decoder_inputs_embeds` should be provided.");
        c2 = await this.encode_text({
          input_ids: r2
        });
      }
      let u2 = {
        inputs_embeds: c2,
        attention_mask: i2,
        encoder_attention_mask: n2,
        encoder_hidden_states: a2,
        past_key_values: o2,
        num_logits_to_keep: l2
      };
      return await qg(this, u2, true);
    }
  }, Bb = class extends Q {
  }, Vb = class extends Bb {
  }, Hb = class extends Bb {
  }, Ub = class extends Q {
  }, Wb = class extends Ub {
  }, Gb = class extends Ub {
  }, Kb = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `pixel_values`,
        `position_ids`,
        `past_key_values`
      ]);
    }
  }, qb = class extends Kb {
    _merge_input_ids_with_image_features(e2) {
      let t2 = e2.image_features.dims.at(-1), n2 = e2.image_features.view(-1, t2);
      return r_({
        image_token_id: this.config.image_token_index ?? this.config.image_token_id,
        ...e2,
        image_features: n2
      });
    }
  }, Jb = class extends qb {
  }, Yb = class extends qb {
  }, Xb = class extends Q {
  }, Zb = class extends Xb {
  }, Qb = class extends qb {
  }, $b = class extends Qb {
  }, ex = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `inputs_embeds`,
        `per_layer_inputs`,
        `position_ids`,
        `pixel_values`,
        `input_features`,
        `input_features_mask`,
        `past_key_values`
      ]);
    }
  }, tx = class extends ex {
    async forward({ input_ids: e2 = null, attention_mask: t2 = null, pixel_values: n2 = null, input_features: r2 = null, input_features_mask: i2 = null, position_ids: a2 = null, inputs_embeds: o2 = null, per_layer_inputs: s2 = null, past_key_values: c2 = null, generation_config: l2 = null, logits_processor: u2 = null, num_logits_to_keep: d2 = null, ...f2 }) {
      if ((!o2 || !s2) && ({ inputs_embeds: o2, per_layer_inputs: s2 } = await Y(this.sessions.embed_tokens, {
        input_ids: e2
      }), e2.dims[1] !== 1)) {
        if (n2) {
          let { image_features: r3 } = await this._encode_vision({
            pixel_values: n2,
            ...f2
          });
          ({ inputs_embeds: o2, attention_mask: t2 } = this._merge_input_ids_with_image_features({
            image_features: r3,
            inputs_embeds: o2,
            input_ids: e2,
            attention_mask: t2
          }));
        }
        if (r2) {
          let { audio_features: n3 } = await Y(this.sessions.audio_encoder, {
            input_features: r2,
            input_features_mask: i2
          });
          ({ inputs_embeds: o2, attention_mask: t2 } = this._merge_input_ids_with_audio_features({
            audio_features: n3,
            inputs_embeds: o2,
            input_ids: e2,
            attention_mask: t2
          }));
        }
      }
      return await qg(this, {
        inputs_embeds: o2,
        per_layer_inputs: s2,
        past_key_values: c2,
        attention_mask: t2,
        position_ids: a2,
        generation_config: l2,
        logits_processor: u2,
        num_logits_to_keep: d2
      }, true);
    }
    _encode_vision(e2) {
      return Y(this.sessions.vision_encoder, {
        pixel_values: e2.pixel_values
      });
    }
    _merge_input_ids_with_image_features(e2) {
      let t2 = e2.image_features.dims.at(-1), n2 = e2.image_features.view(-1, t2);
      return r_({
        image_token_id: this.config.image_token_id,
        ...e2,
        image_features: n2
      });
    }
    _merge_input_ids_with_audio_features(e2) {
      let t2 = e2.audio_features.dims.at(-1), n2 = e2.audio_features.view(-1, t2);
      return i_({
        audio_token_id: this.config.audio_token_id,
        ...e2,
        audio_features: n2
      });
    }
  }, nx = class extends tx {
  }, rx = class extends tx {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `inputs_embeds`,
        `per_layer_inputs`,
        `position_ids`,
        `pixel_values`,
        `image_position_ids`,
        `input_features`,
        `input_features_mask`,
        `past_key_values`
      ]);
    }
    _encode_vision(e2) {
      return Y(this.sessions.vision_encoder, {
        pixel_values: e2.pixel_values,
        pixel_position_ids: e2.image_position_ids
      });
    }
  }, ix = class extends rx {
  }, ax = class extends Q {
  }, ox = class extends ax {
  }, sx = class extends ax {
  }, cx = class extends Q {
  }, lx = class extends cx {
  }, ux = class extends cx {
  }, dx = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `position_ids`,
        `past_key_values`,
        `pixel_values`,
        `image_grid_thw`
      ]);
    }
  }, fx = class extends dx {
    constructor() {
      super(...arguments);
      __publicField(this, "image_grid_thw_name", `grid_thw`);
    }
    _get_text_only_rope_index(e2, t2) {
      if (t2) {
        let { data: e3, dims: n2 } = Zg(t2), r2 = BigInt64Array.from({
          length: 3 * e3.length
        }, (t3, n3) => e3[n3 % e3.length]), i2 = Array.from({
          length: n2[0]
        }, (t3, r3) => dl(e3.subarray(n2[1] * r3, n2[1] * (r3 + 1)))[0] + 1n + BigInt(n2[1]));
        return [
          new W(`int64`, r2, [
            3,
            ...n2
          ]),
          new W(`int64`, i2, [
            i2.length,
            1
          ])
        ];
      }
      {
        let [t3, n2] = e2.dims;
        return [
          new W(`int64`, BigInt64Array.from({
            length: 3 * t3 * n2
          }, (e3, r2) => BigInt(Math.floor(r2 % n2 / t3))), [
            3,
            ...e2.dims
          ]),
          Tu([
            t3,
            1
          ])
        ];
      }
    }
    _reorder_and_write_positions(e2, t2, n2, r2) {
      let i2 = e2.reduce((e3, t3) => e3 + t3.length, 0), a2 = Array(i2), o2 = 0;
      for (let t3 = 0; t3 < 3; ++t3) for (let n3 of e2) {
        let e3 = n3.length / 3;
        for (let r3 = t3 * e3; r3 < (t3 + 1) * e3; ++r3) a2[o2++] = n3[r3];
      }
      let s2 = 0;
      for (let e3 = 0; e3 < t2.length; ++e3) if (t2[e3] == 1) {
        for (let t3 = 0; t3 < 3; ++t3) n2[t3][r2][e3] = a2[t3 * i2 / 3 + s2];
        ++s2;
      }
      return a2;
    }
    _get_multimodal_rope_positions({ filtered_ids: e2, image_grid_thw_list: t2, video_grid_thw_list: n2, spatial_merge_size: r2, state: i2 }) {
      let { image_token_id: a2, video_token_id: o2, vision_start_token_id: s2 } = this.config, c2 = e2, l2 = c2.reduce((e3, t3, n3) => (t3 == s2 && e3.push(n3), e3), []).map((e3) => c2[e3 + 1]), u2 = l2.filter((e3) => e3 == a2).length, d2 = l2.filter((e3) => e3 == o2).length, f2 = [], p2 = 0, m2 = u2, h2 = d2;
      for (let e3 = 0; e3 < l2.length; ++e3) {
        let e4 = c2.findIndex((e5, t3) => t3 > p2 && e5 == a2), s3 = c2.findIndex((e5, t3) => t3 > p2 && e5 == o2), l3 = m2 > 0 && e4 !== -1 ? e4 : c2.length + 1, u3 = h2 > 0 && s3 !== -1 ? s3 : c2.length + 1, d3, g2, _2, v2;
        l3 < u3 ? ([g2, _2, v2] = t2[i2.image_index], ++i2.image_index, --m2, d3 = l3) : ([g2, _2, v2] = n2[i2.video_index], ++i2.video_index, --h2, d3 = u3);
        let [y2, b2, x2] = [
          Number(g2),
          Math.floor(Number(_2) / r2),
          Math.floor(Number(v2) / r2)
        ], S2 = d3 - p2, C2 = f2.length > 0 ? dl(f2.at(-1))[0] + 1 : 0;
        f2.push(Array.from({
          length: 3 * S2
        }, (e5, t3) => C2 + t3 % S2));
        let w2 = S2 + C2, T2 = y2 * b2 * x2, E2 = Array.from({
          length: T2
        }, (e5, t3) => w2 + Math.floor(t3 / (b2 * x2))), ee2 = Array.from({
          length: T2
        }, (e5, t3) => w2 + Math.floor(t3 / x2) % b2), te2 = Array.from({
          length: T2
        }, (e5, t3) => w2 + t3 % x2);
        f2.push([
          E2,
          ee2,
          te2
        ].flat()), p2 = d3 + T2;
      }
      if (p2 < c2.length) {
        let e3 = f2.length > 0 ? dl(f2.at(-1))[0] + 1 : 0, t3 = c2.length - p2;
        f2.push(Array.from({
          length: 3 * t3
        }, (n3, r3) => e3 + r3 % t3));
      }
      return f2;
    }
    get_rope_index(e2, t2, n2, r2) {
      let { vision_config: i2 } = this.config, a2 = i2.spatial_merge_size ?? 2;
      if (t2 || n2) {
        let i3 = e2.tolist();
        r2 || (r2 = wu(e2));
        let o2 = r2.tolist(), s2 = Array.from({
          length: 3
        }, () => Array.from({
          length: e2.dims[0]
        }, () => Array.from({
          length: e2.dims[1]
        }, () => 0))), c2 = t2 ? t2.tolist() : [], l2 = n2 ? n2.tolist() : [], u2 = {
          image_index: 0,
          video_index: 0
        }, d2 = [];
        for (let e3 = 0; e3 < i3.length; ++e3) {
          let t3 = i3[e3].filter((t4, n4) => o2[e3][n4] == 1), n3 = this._get_multimodal_rope_positions({
            filtered_ids: t3,
            image_grid_thw_list: c2,
            video_grid_thw_list: l2,
            spatial_merge_size: a2,
            state: u2
          }), r3 = this._reorder_and_write_positions(n3, o2[e3], s2, e3);
          d2.push(dl(r3)[0] + 1 - i3[e3].length);
        }
        return [
          new W(`int64`, s2.flat(1 / 0), [
            3,
            e2.dims[0],
            e2.dims[1]
          ]),
          new W(`int64`, d2, [
            d2.length,
            1
          ])
        ];
      }
      return this._get_text_only_rope_index(e2, r2);
    }
    async encode_image({ pixel_values: e2, image_grid_thw: t2 }) {
      return (await Y(this.sessions.vision_encoder, {
        pixel_values: e2,
        [this.image_grid_thw_name]: t2
      })).image_features;
    }
    _merge_input_ids_with_image_features(e2) {
      return r_({
        image_token_id: this.config.image_token_id,
        ...e2
      });
    }
    prepare_inputs_for_generation(e2, t2, n2) {
      if (Kg(this, t2, 1n), !t2.attention_mask || t2.position_ids || !(this.sessions.decoder_model_merged ?? this.sessions.model).inputNames.includes(`position_ids`)) return t2;
      if (!t2.past_key_values) [t2.position_ids, t2.rope_deltas] = this.get_rope_index(t2.input_ids, t2.image_grid_thw, t2.video_grid_thw, t2.attention_mask);
      else {
        t2.pixel_values = null;
        let e3 = t2.past_key_values.get_seq_length();
        if (e3 < t2.input_ids.dims[1]) {
          let [n3, r2] = this.get_rope_index(t2.input_ids, t2.image_grid_thw, t2.video_grid_thw, t2.attention_mask);
          t2.rope_deltas = r2, t2.position_ids = n3.slice(null, null, [
            e3,
            null
          ]), t2.input_ids = t2.input_ids.slice(null, [
            e3,
            null
          ]);
        } else {
          t2.rope_deltas || ([, t2.rope_deltas] = this.get_rope_index(t2.input_ids, t2.image_grid_thw, t2.video_grid_thw, t2.attention_mask));
          let n3 = BigInt(e3), r2 = t2.rope_deltas.map((e4) => n3 + e4);
          t2.position_ids = hu([
            r2,
            r2,
            r2
          ], 0);
        }
      }
      return t2;
    }
  }, px = class extends fx {
  }, mx = class extends fx {
    constructor() {
      super(...arguments);
      __publicField(this, "image_grid_thw_name", `image_grid_thw`);
    }
  }, hx = class extends px {
    constructor() {
      super(...arguments);
      __publicField(this, "image_grid_thw_name", `image_grid_thw`);
    }
  }, gx = class extends mx {
    get_vision_position_ids(e2, t2, n2, r2) {
      let i2 = Math.floor(t2[0] / n2), a2 = Math.floor(t2[1] / r2), o2 = Math.floor(t2[2] / r2), s2 = a2 * o2 * i2, c2 = Array.from({
        length: s2
      }, () => e2), l2 = Array.from({
        length: s2
      }, (t3, n3) => e2 + Math.floor(n3 / (o2 * i2))), u2 = Array.from({
        length: s2
      }, (t3, n3) => e2 + n3 % o2);
      return [
        ...c2,
        ...l2,
        ...u2
      ];
    }
    _get_multimodal_rope_positions({ filtered_ids: e2, image_grid_thw_list: t2, video_grid_thw_list: n2, spatial_merge_size: r2, state: i2 }) {
      let { image_token_id: a2 } = this.config, o2 = [], s2 = 0, c2 = +(e2[0] == a2);
      for (let t3 = 1; t3 <= e2.length; ++t3) {
        let n3 = t3 < e2.length ? +(e2[t3] == a2) : -1;
        n3 !== c2 && (o2.push([
          c2,
          s2,
          t3
        ]), s2 = t3, c2 = n3);
      }
      let l2 = 0, u2 = [];
      for (let [e3, n3, a3] of o2) if (e3 === 0) {
        let e4 = a3 - n3;
        u2.push(Array.from({
          length: 3 * e4
        }, (t3, n4) => l2 + n4 % e4)), l2 += e4;
      } else {
        let e4 = t2[i2.image_index++].map(Number), n4 = e4[0];
        u2.push(this.get_vision_position_ids(l2, e4, n4, r2)), l2 += Math.max(e4[1], e4[2]) / r2;
      }
      return u2;
    }
  }, _x = class extends Q {
  }, vx = class extends _x {
  }, yx = class extends _x {
  }, bx = class extends Q {
  }, xx = class extends bx {
  }, Sx = class extends bx {
  }, Cx = class extends Q {
  }, wx = class extends Cx {
  }, Tx = class extends Cx {
  }, Ex = class extends Q {
  }, Dx = class extends Ex {
  }, Ox = class extends Ex {
  }, kx = class extends Q {
  }, Ax = class extends kx {
  }, jx = class extends kx {
  }, Mx = class extends Q {
  }, Nx = class extends Mx {
  }, Px = class extends Mx {
  }, Fx = class extends Q {
  }, Ix = class extends Fx {
  }, Lx = class extends Fx {
  }, Rx = class extends Q {
  }, zx = class extends Rx {
  }, Bx = class extends Rx {
  }, Vx = class extends Q {
  }, Hx = class extends Vx {
  }, Ux = class extends Vx {
  }, Wx = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `position_ids`,
        `audio_values`,
        `past_key_values`
      ]);
    }
  }, Gx = class extends Wx {
    _merge_input_ids_with_audio_features(e2) {
      let t2 = e2.audio_features.dims.at(-1), n2 = e2.audio_features.view(-1, t2);
      return i_({
        audio_token_id: this.config.ignore_index ?? this.config.audio_token_id ?? this.config.audio_token_index,
        ...e2,
        audio_features: n2
      });
    }
  }, Kx = class extends Gx {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `input_features`,
        `past_key_values`
      ]);
    }
  }, qx = class extends Q {
  }, Jx = class extends qx {
  }, Yx = class extends Q {
  }, Xx = class extends Yx {
  }, Zx = class extends Q {
  }, Qx = class extends Zx {
  }, $x = class extends Zx {
  }, eS = class extends Q {
  }, tS = class extends eS {
  }, nS = class extends eS {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, rS = class extends Q {
  }, iS = class extends rS {
  }, aS = class extends rS {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `token_type_ids`,
        `past_key_values`
      ]);
    }
    prepare_inputs_for_generation(e2, t2, n2) {
      let r2 = $g(this, e2, t2, n2);
      return r2.token_type_ids = (r2.past_key_values ? Eu : wu)(r2.input_ids), r2;
    }
  }, oS = class extends Q {
  }, sS = class extends oS {
  }, cS = class extends oS {
    async _call(e2) {
      return new Yh(await super._call(e2));
    }
  }, lS = class extends oS {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, uS = class extends oS {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, dS = class extends Q {
  }, fS = class extends oS {
  }, pS = class extends oS {
    async _call(e2) {
      return new Yh(await super._call(e2));
    }
  }, mS = class extends oS {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, hS = class extends Q {
  }, gS = class extends hS {
  }, _S = class extends hS {
  }, vS = class extends qb {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `pixel_values`,
        `pixel_attention_mask`,
        `position_ids`,
        `past_key_values`
      ]);
    }
  }, yS = class extends Q {
  }, bS = class extends yS {
  }, xS = class extends yS {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, SS = class extends Q {
  }, CS = class extends SS {
  }, wS = class extends SS {
  }, TS = class extends Q {
  }, ES = class extends TS {
    async forward(e2) {
      let t2 = !e2.input_ids, n2 = !e2.pixel_values;
      if (t2 && n2) throw Error("Either `input_ids` or `pixel_values` should be provided.");
      if (t2 && (e2.input_ids = Cu([
        e2.pixel_values.dims[0],
        1
      ])), n2) {
        let { image_size: t3 } = this.config.vision_config;
        e2.pixel_values = xu([
          0,
          3,
          t3,
          t3
        ], 0);
      }
      let { text_embeddings: r2, image_embeddings: i2, l2norm_text_embeddings: a2, l2norm_image_embeddings: o2 } = await super.forward(e2), s2 = {};
      return t2 || (s2.text_embeddings = r2, s2.l2norm_text_embeddings = a2), n2 || (s2.image_embeddings = i2, s2.l2norm_image_embeddings = o2), s2;
    }
  }, DS = class extends TS {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `text_model`
      });
    }
  }, OS = class extends TS {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `vision_model`
      });
    }
  }, kS = class extends Q {
  }, AS = class extends kS {
  }, jS = class extends kS {
  }, MS = class extends qb {
  }, NS = class extends Q {
  }, PS = class extends NS {
  }, FS = class extends NS {
  }, IS = class extends qb {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `pixel_values`,
        `pixel_attention_mask`,
        `spatial_shapes`,
        `position_ids`,
        `past_key_values`
      ]);
    }
  }, LS = class extends Q {
  }, RS = class extends LS {
  }, zS = class extends LS {
  }, BS = class extends qb {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `pixel_values`,
        `image_grid_thw`,
        `position_ids`,
        `past_key_values`
      ]);
    }
  }, VS = class extends Q {
  }, HS = class extends VS {
  }, US = class extends VS {
  }, WS = class extends Q {
  }, GS = class extends WS {
  }, KS = class extends Q {
  }, qS = class extends KS {
  }, JS = class extends KS {
  }, YS = class extends Q {
  }, XS = class extends YS {
  }, ZS = class extends YS {
  }, QS = class extends Q {
  }, $S = class extends QS {
  }, eC = class extends QS {
  }, tC = class extends Q {
  }, nC = class extends tC {
  }, rC = class extends tC {
  }, iC = class extends Q {
  }, aC = class extends iC {
  }, oC = class extends iC {
  }, sC = class extends iC {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, cC = class extends iC {
  }, lC = class extends Q {
  }, uC = class extends lC {
  }, dC = class extends Q {
  }, fC = class extends dC {
  }, pC = class extends Wh {
    constructor({ char_logits: e2, bpe_logits: t2, wp_logits: n2 }) {
      super(), this.char_logits = e2, this.bpe_logits = t2, this.wp_logits = n2;
    }
    get logits() {
      return [
        this.char_logits,
        this.bpe_logits,
        this.wp_logits
      ];
    }
  }, mC = class extends Q {
  }, hC = class extends mC {
    async _call(e2) {
      return new pC(await super._call(e2));
    }
  }, gC = class extends Wh {
    constructor({ audio_codes: e2 }) {
      super(), this.audio_codes = e2;
    }
  }, _C = class extends Wh {
    constructor({ audio_values: e2 }) {
      super(), this.audio_values = e2;
    }
  }, vC = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "main_input_name", `input_values`);
      __publicField(this, "forward_params", [
        `input_values`
      ]);
    }
  }, yC = class extends vC {
    async encode(e2) {
      return new gC(await Y(this.sessions.encoder_model, e2));
    }
    async decode(e2) {
      return new _C(await Y(this.sessions.decoder_model, e2));
    }
  }, bC = class extends vC {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `encoder_model`
      });
    }
  }, xC = class extends vC {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `decoder_model`
      });
    }
  }, SC = class extends Q {
  }, CC = class extends SC {
  }, wC = class extends SC {
  }, TC = class extends Q {
  }, EC = class extends TC {
  }, DC = class extends TC {
  }, OC = class extends Q {
  }, kC = class extends OC {
  }, AC = class extends OC {
  }, jC = class extends qb {
  }, MC = class extends Q {
  }, NC = class extends MC {
  }, PC = class extends MC {
  }, FC = class extends Q {
  }, IC = class extends FC {
  }, LC = class extends FC {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, RC = class extends FC {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, zC = class extends FC {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, BC = class extends Q {
  }, VC = class extends BC {
  }, HC = class extends BC {
  }, UC = class extends Q {
  }, WC = class extends UC {
  }, GC = class extends UC {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, KC = class extends UC {
  }, qC = class extends Q {
  }, JC = class extends qC {
  }, YC = class extends qC {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, XC = class extends qC {
  }, ZC = class extends Q {
  }, QC = class extends ZC {
  }, $C = class extends ZC {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, ew = class extends ZC {
  }, tw = class extends Q {
  }, nw = class extends tw {
  }, rw = class extends tw {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, iw = class extends tw {
  }, aw = class extends Q {
  }, ow = class extends aw {
  }, sw = class extends aw {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, cw = class extends Q {
  }, lw = class extends cw {
  }, uw = class extends cw {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, dw = class extends Q {
  }, fw = class extends dw {
  }, pw = class extends dw {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, mw = class extends dw {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, hw = class extends dw {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, gw = class extends Q {
  }, _w = class extends gw {
  }, vw = class extends gw {
  }, yw = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "requires_attention_mask", false);
      __publicField(this, "main_input_name", `input_values`);
      __publicField(this, "forward_params", [
        `input_values`,
        `decoder_input_ids`,
        `past_key_values`
      ]);
    }
  }, bw = class extends yw {
  }, xw = class extends yw {
  }, Sw = class extends Q {
  }, Cw = class extends Sw {
  }, ww = class extends Sw {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, Tw = class extends Sw {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Ew = class extends Sw {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, Dw = class extends Sw {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, Ow = class extends Q {
  }, kw = class extends Ow {
  }, Aw = class extends Ow {
  }, jw = class extends Q {
  }, Mw = class extends jw {
  }, Nw = class extends jw {
  }, Pw = class extends Q {
  }, Fw = class extends Pw {
    constructor(...e2) {
      super(...e2);
      __publicField(this, "forward_params", [
        `input_ids`,
        `pixel_values`,
        `images_seq_mask`,
        `images_emb_mask`,
        `attention_mask`,
        `position_ids`,
        `past_key_values`
      ]);
      this._generation_mode = `text`;
    }
    async forward(e2) {
      let t2 = this._generation_mode ?? `text`, n2;
      if (t2 === `text` || !e2.past_key_values) {
        let t3 = this.sessions.prepare_inputs_embeds;
        n2 = await Y(t3, li(e2, t3.inputNames));
      } else {
        let t3 = this.sessions.gen_img_embeds;
        n2 = await Y(t3, li({
          image_ids: e2.input_ids
        }, t3.inputNames));
      }
      let r2 = {
        ...e2,
        ...n2
      }, i2 = await qg(this, r2), a2 = this.sessions[t2 === `text` ? `lm_head` : `gen_head`];
      if (!a2) throw Error(`Unable to find "${a2}" generation head`);
      let o2 = await Y(a2, li(i2, a2.inputNames));
      return {
        ...n2,
        ...i2,
        ...o2
      };
    }
    prepare_inputs_for_generation(e2, t2, n2) {
      let r2 = !!t2.past_key_values;
      return Kg(this, t2, 1n), n2.guidance_scale !== null && n2.guidance_scale > 1 && (r2 ? t2.input_ids = mu([
        t2.input_ids,
        t2.input_ids
      ], 0) : (t2.input_ids = mu([
        t2.input_ids,
        Su(t2.input_ids, BigInt(n2.pad_token_id))
      ], 0), t2.attention_mask = mu([
        t2.attention_mask,
        Su(t2.attention_mask, 0n)
      ], 0))), (r2 || !t2.pixel_values) && (t2.pixel_values = xu([
        0,
        0,
        3,
        384,
        384
      ], 1)), r2 && (t2.images_seq_mask = new W(`bool`, [
        ,
      ].fill(true).fill(false, 0, 1), [
        1,
        1
      ]), t2.images_emb_mask = new W(`bool`, [].fill(false), [
        1,
        1,
        0
      ])), t2;
    }
    async generate(e2) {
      return this._generation_mode = `text`, super.generate(e2);
    }
    async generate_images(e2) {
      this._generation_mode = `image`;
      let t2 = (e2.inputs ?? e2[this.main_input_name]).dims[1], n2 = (await super.generate(e2)).slice(null, [
        t2,
        null
      ]), r2 = this.sessions.image_decode, { decoded_image: i2 } = await Y(r2, {
        generated_tokens: n2
      }), a2 = i2.add_(1).mul_(255 / 2).clamp_(0, 255).to(`uint8`), o2 = [];
      for (let e3 of a2) {
        let t3 = Kf.fromTensor(e3);
        o2.push(t3);
      }
      return o2;
    }
  }, Iw = class extends Q {
  }, Lw = class extends Iw {
  }, Rw = class extends Iw {
  }, zw = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `encoder_outputs`,
        `decoder_input_ids`,
        `decoder_attention_mask`,
        `past_key_values`
      ]);
    }
    _apply_and_filter_by_delay_pattern_mask(e2) {
      let [t2, n2] = e2.dims, r2 = this.config.decoder.num_codebooks, i2 = n2 - r2, a2 = 0;
      for (let t3 = 0; t3 < e2.size; ++t3) {
        if (e2.data[t3] == this.config.decoder.pad_token_id) continue;
        let o3 = t3 % n2 - Math.floor(t3 / n2) % r2;
        o3 > 0 && o3 <= i2 && (e2.data[a2++] = e2.data[t3]);
      }
      let o2 = Math.floor(t2 / r2), s2 = a2 / (o2 * r2);
      return new W(e2.type, e2.data.slice(0, a2), [
        o2,
        r2,
        s2
      ]);
    }
    prepare_inputs_for_generation(e2, t2, n2) {
      let r2 = BigInt(this.config.decoder.pad_token_id), i2 = structuredClone(e2);
      for (let e3 = 0; e3 < i2.length; ++e3) for (let t3 = 0; t3 < i2[e3].length; ++t3) e3 % this.config.decoder.num_codebooks >= t3 && (i2[e3][t3] = r2);
      return n2.guidance_scale !== null && n2.guidance_scale > 1 && (i2 = i2.concat(i2)), e_(this, i2, t2, n2);
    }
    async generate(e2) {
      let t2 = await super.generate(e2), n2 = this._apply_and_filter_by_delay_pattern_mask(t2).unsqueeze_(0), { audio_values: r2 } = await Y(this.sessions.encodec_decode, {
        audio_codes: n2
      });
      return r2;
    }
  }, Bw = class extends Q {
  }, Vw = class extends Bw {
  }, Hw = class extends Bw {
  }, Uw = class extends Q {
  }, Ww = class extends Uw {
  }, Gw = class extends Uw {
  }, Kw = class extends Q {
  }, qw = class extends Kw {
  }, Jw = class extends Kw {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, Yw = class extends Kw {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, Xw = class extends Kw {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, Zw = class extends Kw {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, Qw = class extends Q {
  }, $w = class extends Qw {
  }, eT = class extends Q {
  }, tT = class extends eT {
  }, nT = class extends eT {
  }, rT = class extends Q {
  }, iT = class extends rT {
  }, aT = class extends rT {
  }, oT = class extends Q {
  }, sT = class extends oT {
  }, cT = class extends oT {
  }, lT = class extends Q {
  }, uT = class extends lT {
  }, dT = class extends lT {
  }, fT = class extends Q {
  }, pT = class extends fT {
  }, mT = class extends fT {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, hT = class extends Q {
  }, gT = class extends hT {
  }, _T = class extends hT {
  }, vT = class extends Q {
  }, yT = class extends vT {
  }, bT = class extends vT {
  }, xT = class extends Q {
  }, ST = class extends xT {
  }, CT = class extends xT {
  }, wT = class extends Q {
  }, TT = class extends wT {
  }, ET = class extends wT {
  }, DT = class extends qb {
  }, OT = class extends Q {
  }, kT = class extends OT {
    async _call(e2) {
      return new Yh(await super._call(e2));
    }
  }, AT = class extends Q {
  }, jT = class extends AT {
  }, MT = class extends AT {
  }, NT = class extends Q {
  }, PT = class extends NT {
  }, FT = class extends NT {
  }, IT = class extends Q {
  }, LT = class extends IT {
  }, RT = class extends IT {
  }, zT = class extends Q {
  }, BT = class extends zT {
  }, VT = class extends zT {
  }, HT = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `inputs_embeds`,
        `attention_mask`,
        `position_ids`,
        `pixel_values`,
        `image_sizes`,
        `past_key_values`
      ]);
    }
  }, UT = class extends HT {
    async forward({ input_ids: e2 = null, attention_mask: t2 = null, pixel_values: n2 = null, image_sizes: r2 = null, position_ids: i2 = null, inputs_embeds: a2 = null, past_key_values: o2 = null, generation_config: s2 = null, logits_processor: c2 = null, num_logits_to_keep: l2 = null, ...u2 }) {
      if (!a2) {
        let t3;
        if (n2 && e2.dims[1] !== 1) {
          if (!r2) throw Error("`image_sizes` must be provided when `pixel_values` is provided.");
          ({ image_features: t3 } = await Y(this.sessions.vision_encoder, {
            pixel_values: n2,
            image_sizes: r2
          }));
        } else {
          let e3 = this.config.normalized_config.hidden_size;
          t3 = new W(`float32`, [], [
            0,
            e3
          ]);
        }
        ({ inputs_embeds: a2 } = await Y(this.sessions.prepare_inputs_embeds, {
          input_ids: e2,
          image_features: t3
        }));
      }
      return await qg(this, {
        inputs_embeds: a2,
        past_key_values: o2,
        attention_mask: t2,
        position_ids: i2,
        generation_config: s2,
        logits_processor: c2,
        num_logits_to_keep: l2
      }, false);
    }
  }, WT = class extends Q {
  }, GT = class extends WT {
  }, KT = class extends WT {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, qT = class extends Q {
  }, JT = class extends qT {
  }, YT = class extends qT {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, XT = class extends Q {
  }, ZT = class extends XT {
  }, QT = class extends XT {
  }, $T = class extends Q {
  }, eE = class extends $T {
  }, tE = class extends $T {
  }, nE = class extends Q {
  }, rE = class extends nE {
  }, iE = class extends nE {
  }, aE = class extends Q {
  }, oE = class extends aE {
  }, sE = class extends aE {
  }, cE = class extends Q {
  }, lE = class extends cE {
  }, uE = class extends cE {
  }, dE = class extends mx {
  }, fE = class extends hx {
  }, pE = class extends dE {
  }, mE = class extends fE {
  }, hE = class extends dE {
  }, gE = class extends hE {
  }, _E = class extends hE {
  }, vE = class extends gE {
  }, yE = class extends Q {
  }, bE = class extends yE {
  }, xE = class extends yE {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, SE = class extends Q {
  }, CE = class extends SE {
  }, wE = class extends SE {
    async _call(e2) {
      return new TE(await super._call(e2));
    }
  }, TE = class extends Kv {
  }, EE = class extends Q {
  }, DE = class extends EE {
  }, OE = class extends EE {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, kE = class extends EE {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, AE = class extends EE {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, jE = class extends EE {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, ME = class extends Q {
  }, NE = class extends ME {
  }, PE = class extends ME {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, FE = class extends ME {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, IE = class extends ME {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, LE = class extends ME {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, RE = class extends Q {
  }, zE = class extends RE {
  }, BE = class extends RE {
    async _call(e2) {
      return new VE(await super._call(e2));
    }
  }, VE = class extends Kv {
  }, HE = class extends Wh {
    constructor({ iou_scores: e2, pred_masks: t2 }) {
      super(), this.iou_scores = e2, this.pred_masks = t2;
    }
  }, UE = class extends Q {
  }, WE = class extends UE {
    async get_image_embeddings({ pixel_values: e2 }) {
      return await Bg(this, {
        pixel_values: e2
      });
    }
    async forward(e2) {
      e2 = !e2.image_embeddings || !e2.image_positional_embeddings ? {
        ...e2,
        ...await this.get_image_embeddings(e2)
      } : {
        ...e2
      }, e2.input_labels ?? (e2.input_labels = Cu(e2.input_points.dims.slice(0, -1)));
      let t2 = {
        image_embeddings: e2.image_embeddings,
        image_positional_embeddings: e2.image_positional_embeddings
      };
      return e2.input_points && (t2.input_points = e2.input_points), e2.input_labels && (t2.input_labels = e2.input_labels), e2.input_boxes && (t2.input_boxes = e2.input_boxes), await Y(this.sessions.prompt_encoder_mask_decoder, t2);
    }
    async _call(e2) {
      return new HE(await super._call(e2));
    }
  }, GE = class extends Wh {
    constructor({ iou_scores: e2, pred_masks: t2, object_score_logits: n2 }) {
      super(), this.iou_scores = e2, this.pred_masks = t2, this.object_score_logits = n2;
    }
  }, KE = class extends Q {
  }, qE = class extends KE {
    async get_image_embeddings({ pixel_values: e2 }) {
      return await Bg(this, {
        pixel_values: e2
      });
    }
    async forward(e2) {
      let { num_feature_levels: t2 } = this.config.vision_config;
      if (e2 = Array.from({
        length: t2
      }, (e3, t3) => `image_embeddings.${t3}`).some((t3) => !e2[t3]) ? {
        ...e2,
        ...await this.get_image_embeddings(e2)
      } : {
        ...e2
      }, e2.input_points) {
        if (e2.input_boxes && e2.input_boxes.dims[1] !== 1) throw Error("When both `input_points` and `input_boxes` are provided, the number of boxes per image must be 1.");
        let t3 = e2.input_points.dims;
        e2.input_labels ?? (e2.input_labels = Cu(t3.slice(0, -1))), e2.input_boxes ?? (e2.input_boxes = xu([
          t3[0],
          0,
          4
        ], 0));
      } else if (e2.input_boxes) {
        let t3 = e2.input_boxes.dims;
        e2.input_labels = xu([
          t3[0],
          t3[1],
          0
        ], -1n), e2.input_points = xu([
          t3[0],
          1,
          0,
          2
        ], 0);
      } else throw Error("At least one of `input_points` or `input_boxes` must be provided.");
      let n2 = this.sessions.prompt_encoder_mask_decoder;
      return await Y(n2, li(e2, n2.inputNames));
    }
    async _call(e2) {
      return new GE(await super._call(e2));
    }
  }, JE = class extends qE {
  }, YE = class extends qE {
  }, XE = class extends Q {
  }, ZE = class extends XE {
  }, QE = class extends XE {
  }, $E = class extends XE {
  }, eD = class extends Q {
  }, tD = class extends eD {
  }, nD = class extends eD {
  }, rD = class extends eD {
  }, iD = class extends Q {
  }, aD = class extends iD {
  }, oD = class extends iD {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `text_model`
      });
    }
  }, sD = class extends uv {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `vision_model`
      });
    }
  }, cD = class extends Q {
  }, lD = class extends cD {
  }, uD = class extends cD {
  }, dD = class extends vS {
  }, fD = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "main_input_name", `input_values`);
      __publicField(this, "forward_params", [
        `input_values`
      ]);
    }
  }, pD = class extends fD {
    async encode(e2) {
      return await Y(this.sessions.encoder_model, e2);
    }
    async decode(e2) {
      return await Y(this.sessions.decoder_model, e2);
    }
  }, mD = class extends fD {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `encoder_model`
      });
    }
  }, hD = class extends fD {
    static async from_pretrained(e2, t2 = {}) {
      return super.from_pretrained(e2, {
        ...t2,
        model_file_name: t2.model_file_name ?? `decoder_model`
      });
    }
  }, gD = class extends Q {
  }, _D = class extends gD {
  }, vD = class extends gD {
  }, yD = class extends Q {
  }, bD = class extends yD {
  }, xD = class extends yD {
  }, SD = class extends yD {
    async generate_speech(e2, t2, { threshold: n2 = 0.5, minlenratio: r2 = 0, maxlenratio: i2 = 20, vocoder: a2 = null } = {}) {
      let o2 = {
        input_ids: e2
      }, { encoder_outputs: s2, encoder_attention_mask: c2 } = await Bg(this, o2), l2 = s2.dims[1] / this.config.reduction_factor, u2 = Math.floor(l2 * i2), d2 = Math.floor(l2 * r2), f2 = this.config.num_mel_bins, p2 = [], m2 = null, h2 = null, g2 = 0;
      for (; ; ) {
        ++g2;
        let e3 = Ng(!!h2), r3;
        r3 = h2 ? h2.output_sequence_out : new W(`float32`, new Float32Array(f2), [
          1,
          1,
          f2
        ]);
        let i3 = {
          use_cache_branch: e3,
          output_sequence: r3,
          encoder_attention_mask: c2,
          speaker_embeddings: t2,
          encoder_hidden_states: s2
        };
        Gg(this, i3, m2), h2 = await Y(this.sessions.decoder_model_merged, i3), m2 = Hg(h2, m2);
        let { prob: a3, spectrum: o3 } = h2;
        if (p2.push(o3), g2 >= d2 && (Array.from(a3.data).filter((e4) => e4 >= n2).length > 0 || g2 >= u2)) break;
      }
      let _2 = mu(p2), { waveform: v2 } = await Y(a2.sessions.model, {
        spectrogram: _2
      });
      return {
        spectrogram: _2,
        waveform: v2
      };
    }
  }, CD = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "main_input_name", `spectrogram`);
    }
  }, wD = class extends Q {
  }, TD = class extends wD {
  }, ED = class extends wD {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, DD = class extends wD {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, OD = class extends wD {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, kD = class extends Q {
  }, AD = class extends kD {
  }, jD = class extends kD {
  }, MD = class extends Q {
  }, ND = class extends MD {
  }, PD = class extends MD {
  }, FD = class extends Q {
  }, ID = class extends FD {
  }, LD = class extends Q {
  }, RD = class extends LD {
    async generate_speech({ input_ids: e2, attention_mask: t2, style: n2, num_inference_steps: r2 = 5, speed: i2 = 1.05 }) {
      let { sampling_rate: a2, chunk_compress_factor: o2, base_chunk_size: s2, latent_dim: c2 } = this.config, { last_hidden_state: l2, durations: u2 } = await Y(this.sessions.text_encoder, {
        input_ids: e2,
        attention_mask: t2,
        style: n2
      }), d2 = u2.div(i2).mul_(a2), f2 = s2 * o2, p2 = d2.data, m2 = Int32Array.from(p2, (e3) => Math.ceil(e3 / f2)), h2 = Math.max(...m2), g2 = e2.dims[0], _2 = new BigInt64Array(g2 * h2);
      for (let e3 = 0; e3 < g2; ++e3) _2.fill(1n, e3 * h2, e3 * h2 + m2[e3]);
      let v2 = new W(`int64`, _2, [
        g2,
        h2
      ]), y2 = c2 * o2, b2 = y2 * h2, x2 = Du([
        g2,
        y2,
        h2
      ]), S2 = x2.data;
      for (let e3 = 0; e3 < g2; ++e3) if (m2[e3] !== h2) for (let t3 = 0; t3 < y2; ++t3) S2.fill(0, e3 * b2 + t3 * h2 + m2[e3], e3 * b2 + (t3 + 1) * h2);
      let C2 = xu([
        g2
      ], r2);
      for (let e3 = 0; e3 < r2; ++e3) {
        let r3 = xu([
          g2
        ], e3);
        ({ denoised_latents: x2 } = await Y(this.sessions.latent_denoiser, {
          style: n2,
          noisy_latents: x2,
          latent_mask: v2,
          encoder_outputs: l2,
          attention_mask: t2,
          timestep: r3,
          num_inference_steps: C2
        }));
      }
      let { waveform: w2 } = await Y(this.sessions.voice_decoder, {
        latents: x2
      });
      return {
        waveform: w2,
        durations: d2
      };
    }
  }, zD = class extends Q {
  }, BD = class extends zD {
  }, VD = class extends zD {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, HD = class extends zD {
  }, UD = class extends Q {
  }, WD = class extends UD {
  }, GD = class extends UD {
  }, KD = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `encoder_outputs`,
        `decoder_input_ids`,
        `decoder_attention_mask`,
        `past_key_values`
      ]);
    }
  }, qD = class extends KD {
  }, JD = class extends KD {
  }, YD = class extends Q {
  }, XD = class extends YD {
  }, ZD = class extends YD {
    async _call(e2) {
      return new QD(await super._call(e2));
    }
  }, QD = class extends Ny {
  }, $D = class extends Q {
  }, eO = class extends $D {
  }, tO = class extends Q {
  }, nO = class extends tO {
  }, rO = class extends tO {
    async _call(e2) {
      return new Yh(await super._call(e2));
    }
  }, iO = class extends tO {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, aO = class extends Q {
  }, oO = class extends aO {
  }, sO = class extends aO {
    async _call(e2) {
      return new Yh(await super._call(e2));
    }
  }, cO = class extends aO {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, lO = class extends aO {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, uO = class extends Q {
  }, dO = class extends uO {
  }, fO = class extends uO {
  }, pO = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "main_input_name", `pixel_values`);
      __publicField(this, "forward_params", [
        `pixel_values`,
        `decoder_input_ids`,
        `encoder_hidden_states`,
        `past_key_values`
      ]);
    }
  }, mO = class extends Q {
  }, hO = class extends mO {
  }, gO = class extends mO {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, _O = class extends Q {
  }, vO = class extends _O {
  }, yO = class extends Q {
  }, bO = class extends yO {
  }, xO = class extends yO {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, SO = class extends Q {
  }, CO = class extends SO {
    async _call(e2) {
      return new Qh(await super._call(e2));
    }
  }, wO = class extends Q {
  }, TO = class extends wO {
  }, EO = class extends Wh {
    constructor({ waveform: e2, spectrogram: t2 }) {
      super(), this.waveform = e2, this.spectrogram = t2;
    }
  }, DO = class extends Q {
  }, OO = class extends DO {
    async _call(e2) {
      return new EO(await super._call(e2));
    }
  }, kO = class extends Gx {
  }, AO = 2, jO = 1, MO = /* @__PURE__ */ new WeakMap();
  function NO(e2, t2) {
    var _a3, _b3;
    let { text_config: n2, audio_config: r2 } = e2.config, i2 = e2.sessions.audio_encoder, { num_mel_bins: a2, hidden_size: o2 } = r2, s2 = a2 + o2, c2 = new Cg(), l2 = Mh(r2), u2 = {
      batch_size: 1
    }, d2 = `float32`;
    for (let e3 of i2.inputMetadata) {
      if (e3.name === `past_padding_cache`) {
        d2 = e3.type;
        continue;
      }
      if (!l2.has(e3.name)) continue;
      let t3 = Wg(e3.shape, u2), n3 = t3.reduce((e4, t4) => e4 * t4, 1), r3 = tu[e3.type];
      c2[e3.name] = new W(e3.type, new r3(n3), t3);
    }
    let f2 = tu[d2], p2 = new W(d2, new f2(s2 * AO), [
      1,
      s2,
      AO
    ]), m2 = ((_a3 = t2[Symbol.asyncIterator]) == null ? void 0 : _a3.call(t2)) ?? ((_b3 = t2[Symbol.iterator]) == null ? void 0 : _b3.call(t2));
    if (!m2) throw Error(`input_features must be iterable or async iterable`);
    return {
      encoder_session: i2,
      enc_kv_cache: c2,
      enc_padding_cache: p2,
      enc_past_seq_len: 0,
      audio_embed_queue: [],
      audio_embed_total_tokens: 0,
      audio_queue_offset: 0,
      audio_consumed: 0,
      stream_exhausted: false,
      chunks_iter: m2,
      text_hidden_size: n2.hidden_size
    };
  }
  async function PO(e2, t2) {
    let n2 = t2.dims[2], r2 = Math.floor((jO + n2 - 3) / 2) + 1, i2 = new W(`int64`, BigInt64Array.from({
      length: r2
    }, (t3, n3) => BigInt(e2.enc_past_seq_len + n3)), [
      1,
      r2
    ]), a2 = e2.enc_past_seq_len + r2, o2 = Cu([
      1,
      a2
    ]), { audio_embeds: s2, present_padding_cache: c2, ...l2 } = await Y(e2.encoder_session, {
      input_features: t2,
      attention_mask: o2,
      position_ids: i2,
      past_padding_cache: e2.enc_padding_cache,
      ...e2.enc_kv_cache
    });
    e2.enc_padding_cache.location === `gpu-buffer` && e2.enc_padding_cache.dispose(), e2.enc_padding_cache = c2;
    for (let t3 in l2) if (t3.startsWith(`present.`)) {
      let n3 = t3.replace(`present`, `past_key_values`), r3 = e2.enc_kv_cache[n3];
      (r3 == null ? void 0 : r3.location) === `gpu-buffer` && r3.dispose(), e2.enc_kv_cache[n3] = l2[t3];
    }
    return e2.enc_past_seq_len = a2, s2;
  }
  async function FO(e2, t2) {
    for (; e2.audio_embed_total_tokens < t2 && !e2.stream_exhausted; ) {
      let t3 = await e2.chunks_iter.next();
      if (t3.done) {
        e2.stream_exhausted = true;
        break;
      }
      let n2 = await PO(e2, t3.value);
      e2.audio_embed_queue.push({
        data: n2.data,
        tokens: n2.dims[1]
      }), e2.audio_embed_total_tokens += n2.dims[1];
    }
  }
  function IO(e2, t2, n2) {
    if (e2.audio_embed_queue.length === 0) return;
    let r2 = t2.data, i2 = 0, a2 = n2;
    for (; a2 > 0 && e2.audio_embed_queue.length > 0; ) {
      let t3 = e2.audio_embed_queue[0], n3 = t3.tokens - e2.audio_queue_offset, o2 = Math.min(a2, n3), s2 = e2.audio_queue_offset * e2.text_hidden_size;
      for (let n4 = 0; n4 < o2 * e2.text_hidden_size; ++n4) r2[i2 * e2.text_hidden_size + n4] += t3.data[s2 + n4];
      i2 += o2, a2 -= o2, e2.audio_queue_offset += o2, e2.audio_queue_offset >= t3.tokens && (e2.audio_embed_queue.shift(), e2.audio_queue_offset = 0);
    }
    e2.audio_consumed += n2 - a2;
  }
  var LO = class extends hg {
    constructor(e2) {
      super(), this._s = e2;
    }
    _call(e2) {
      let t2 = this._s.stream_exhausted && this._s.audio_embed_queue.length === 0;
      return e2.map(() => t2);
    }
  }, RO = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "forward_params", [
        `input_ids`,
        `attention_mask`,
        `position_ids`,
        `past_key_values`
      ]);
    }
  }, zO = class extends RO {
    async forward({ input_ids: e2, past_key_values: t2, ...n2 }) {
      let r2 = e2.dims[1], i2 = MO.get(this);
      i2 && await FO(i2, i2.audio_consumed + r2);
      let { inputs_embeds: a2 } = await Y(this.sessions.embed_tokens, {
        input_ids: e2
      });
      i2 && IO(i2, a2, r2);
      let o2 = {
        inputs_embeds: a2,
        ...n2
      };
      Gg(this, o2, t2);
      let s2 = this.sessions.decoder_model_merged;
      return await Y(s2, li(o2, s2.inputNames));
    }
    async generate({ input_features: e2, stopping_criteria: t2, ...n2 }) {
      if (!e2) throw Error(`input_features (generator/iterable) must be provided`);
      let r2 = NO(this, e2);
      MO.set(this, r2);
      let i2 = new gg();
      i2.push(new LO(r2)), t2 && i2.extend(t2);
      try {
        return await super.generate({
          ...n2,
          stopping_criteria: i2
        });
      } finally {
        r2.enc_kv_cache.dispose(), MO.delete(this);
      }
    }
  }, BO = class extends Q {
  }, VO = class extends BO {
  }, HO = class extends BO {
    async _call(e2) {
      return new Yh(await super._call(e2));
    }
  }, UO = class extends BO {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, WO = class extends Wh {
    constructor({ logits: e2, embeddings: t2 }) {
      super(), this.logits = e2, this.embeddings = t2;
    }
  }, GO = class extends Q {
  }, KO = class extends GO {
  }, qO = class extends GO {
    async _call(e2) {
      return new Yh(await super._call(e2));
    }
  }, JO = class extends GO {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, YO = class extends GO {
    async _call(e2) {
      return new WO(await super._call(e2));
    }
  }, XO = class extends GO {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, ZO = class extends Q {
  }, QO = class extends ZO {
  }, $O = class extends mg {
    constructor() {
      super(...arguments);
      __publicField(this, "return_timestamps", null);
      __publicField(this, "return_token_timestamps", null);
      __publicField(this, "num_frames", null);
      __publicField(this, "alignment_heads", null);
      __publicField(this, "task", null);
      __publicField(this, "language", null);
      __publicField(this, "no_timestamps_token_id", null);
      __publicField(this, "prompt_ids", null);
      __publicField(this, "is_multilingual", null);
      __publicField(this, "lang_to_id", null);
      __publicField(this, "task_to_id", null);
      __publicField(this, "max_initial_timestamp_index", 1);
    }
  }, ek = class extends Q {
    constructor() {
      super(...arguments);
      __publicField(this, "requires_attention_mask", false);
      __publicField(this, "main_input_name", `input_features`);
      __publicField(this, "forward_params", [
        `input_features`,
        `attention_mask`,
        `decoder_input_ids`,
        `decoder_attention_mask`,
        `past_key_values`
      ]);
    }
  }, tk = class extends ek {
  }, nk = class extends ek {
    _prepare_generation_config(e2, t2) {
      return super._prepare_generation_config(e2, t2, $O);
    }
    _retrieve_init_tokens(e2) {
      let t2 = [
        e2.decoder_start_token_id
      ], n2 = e2.language, r2 = e2.task;
      if (e2.is_multilingual) {
        n2 || (n2 = (P.warn(`No language specified - defaulting to English (en).`), `en`));
        let i2 = `<|${jd(n2)}|>`;
        t2.push(e2.lang_to_id[i2]), t2.push(e2.task_to_id[r2 ?? `transcribe`]);
      } else if (n2 || r2) throw Error("Cannot specify `task` or `language` for an English-only model. If the model is intended to be multilingual, pass `is_multilingual=true` to generate, or update the generation config.");
      return !e2.return_timestamps && e2.no_timestamps_token_id && t2.at(-1) !== e2.no_timestamps_token_id ? t2.push(e2.no_timestamps_token_id) : e2.return_timestamps && t2.at(-1) === e2.no_timestamps_token_id && (P.warn("<|notimestamps|> prompt token is removed from generation_config since `return_timestamps` is set to `true`."), t2.pop()), t2.filter((e3) => e3 != null);
    }
    async generate({ inputs: e2 = null, generation_config: t2 = null, logits_processor: n2 = null, stopping_criteria: r2 = null, ...i2 }) {
      t2 = this._prepare_generation_config(t2, i2);
      let a2 = i2.decoder_input_ids instanceof W ? ju(i2.decoder_input_ids) : i2.decoder_input_ids ?? this._retrieve_init_tokens(t2);
      if (t2.return_timestamps && (n2 ?? (n2 = new tg()), n2.push(new og(t2, a2))), t2.begin_suppress_tokens && (n2 ?? (n2 = new tg()), n2.push(new ag(t2.begin_suppress_tokens, a2.length))), t2.return_token_timestamps) {
        if (!t2.alignment_heads) throw Error("Model generation config has no `alignment_heads`, token-level timestamps not available. See https://gist.github.com/hollance/42e32852f24243b748ae6bc1f985b13a on how to add this property to the generation config.");
        t2.task === `translate` && P.warn(`Token-level timestamps may not be reliable for task 'translate'.`), t2.output_attentions = true, t2.return_dict_in_generate = true;
      }
      if (t2.return_timestamps && !i2.max_new_tokens) return this._generate_with_seek({
        inputs: e2,
        generation_config: t2,
        logits_processor: n2,
        init_tokens: a2,
        kwargs: i2
      });
      let o2 = await super.generate({
        inputs: e2,
        generation_config: t2,
        logits_processor: n2,
        decoder_input_ids: a2,
        ...i2
      });
      return t2.return_token_timestamps && (o2.token_timestamps = this._extract_token_timestamps(o2, t2.alignment_heads, t2.num_frames, 0.02, a2.length)), o2;
    }
    async _generate_with_seek({ inputs: e2, generation_config: t2, logits_processor: n2, init_tokens: r2, kwargs: i2 }) {
      let a2 = t2.no_timestamps_token_id + 1, o2 = Array.isArray(t2.eos_token_id) ? t2.eos_token_id[0] : t2.eos_token_id, s2 = t2.return_token_timestamps, c2 = e2, l2 = c2.dims[2], u2 = 2 * this.config.max_source_positions, d2 = 0, f2 = [], p2 = [];
      for (; d2 < l2; ) {
        let e3 = Math.min(d2 + u2, l2), m3 = c2.slice(null, null, [
          d2,
          e3
        ]), h2, g2 = m3.dims[2];
        if (g2 < u2) {
          let e4 = c2.dims[1], t3 = new Float32Array(e4 * u2), n3 = m3.data;
          for (let r3 = 0; r3 < e4; ++r3) t3.set(n3.subarray(r3 * g2, (r3 + 1) * g2), r3 * u2);
          h2 = new W(`float32`, t3, [
            1,
            e4,
            u2
          ]);
        } else h2 = m3;
        if (n2) for (let e4 of n2) `begin_index` in e4 && (e4.begin_index = r2.length);
        let _2 = await super.generate({
          inputs: h2,
          generation_config: t2,
          logits_processor: n2,
          decoder_input_ids: r2,
          ...i2
        }), v2 = (s2 ? _2.sequences : _2)[0].tolist().map(Number).slice(r2.length), y2;
        if (s2) {
          _2.token_timestamps = this._extract_token_timestamps(_2, t2.alignment_heads, Math.floor((e3 - d2) / 2), 0.02, r2.length);
          let n3 = d2 / 2 * 0.02;
          y2 = _2.token_timestamps[0].tolist().slice(r2.length).map((e4) => e4 + n3);
        }
        if (v2.length > 0 && v2.at(-1) === o2 && v2.pop(), v2.length === 0) break;
        let b2 = v2.map((e4) => e4 >= a2), x2 = v2.length >= 2 && b2[v2.length - 1] && !b2[v2.length - 2], S2 = [];
        for (let e4 = 0; e4 < v2.length - 1; ++e4) b2[e4] && b2[e4 + 1] && S2.push(e4 + 1);
        let C2, w2 = v2.length;
        if (S2.length > 0) {
          if (x2) C2 = e3 - d2;
          else {
            let e4 = S2.at(-1);
            C2 = (v2[e4 - 1] - a2) * 2, w2 = e4;
          }
        } else C2 = e3 - d2;
        let T2 = Math.floor(d2 / 2), E2 = a2 + 1500;
        for (let e4 = 0; e4 < w2; ++e4) v2[e4] >= a2 && (v2[e4] = Math.min(v2[e4] + T2, E2));
        f2.push(...v2.slice(0, w2)), y2 && p2.push(...y2.slice(0, w2)), d2 += C2;
      }
      f2.push(o2);
      let m2 = [
        ...r2,
        ...f2
      ];
      if (s2) {
        let e3 = new W(`int64`, m2.map(BigInt), [
          1,
          m2.length
        ]), t3 = [
          ...Array(r2.length).fill(0),
          ...p2,
          0
        ];
        return {
          sequences: e3,
          token_timestamps: new W(`float32`, new Float32Array(t3), [
            1,
            t3.length
          ])
        };
      }
      return new W(`int64`, m2.map(BigInt), [
        1,
        m2.length
      ]);
    }
    _extract_token_timestamps(e2, t2, n2 = null, r2 = 0.02, i2 = 0) {
      if (!e2.cross_attentions) throw Error("Model outputs must contain cross attentions to extract timestamps. This is most likely because the model was not exported with `output_attentions=True`.");
      n2 ?? P.warn("`num_frames` has not been set, meaning the entire audio will be analyzed. This may lead to inaccurate token-level timestamps for short audios (< 30 seconds).");
      let a2 = this.config.median_filter_width;
      a2 === void 0 && (P.warn("Model config has no `median_filter_width`, using default value of 7."), a2 = 7);
      let o2 = e2.cross_attentions, s2 = Array.from({
        length: this.config.decoder_layers
      }, (e3, t3) => mu(o2.map((e4) => e4[t3]), 2)), c2 = hu(t2.map(([e3, t3]) => {
        if (e3 >= s2.length) throw Error(`Layer index ${e3} is out of bounds for cross attentions (length ${s2.length}).`);
        return n2 ? s2[e3].slice(null, t3, null, [
          0,
          n2
        ]) : s2[e3].slice(null, t3);
      })).permute(1, 0, 2, 3), [l2, u2] = _u(c2, -2, 0, true), d2 = c2.clone();
      for (let e3 = 0; e3 < d2.dims[0]; ++e3) {
        let t3 = d2[e3];
        for (let n3 = 0; n3 < t3.dims[0]; ++n3) {
          let r3 = t3[n3], i3 = l2[e3][n3][0].data, o3 = u2[e3][n3][0].data;
          for (let e4 = 0; e4 < r3.dims[0]; ++e4) {
            let t4 = r3[e4].data;
            for (let e5 = 0; e5 < t4.length; ++e5) t4[e5] = (t4[e5] - o3[e5]) / i3[e5];
            t4.set(gl(t4, a2));
          }
        }
      }
      let f2 = [
        vu(i2 > 0 ? d2.slice(null, null, [
          i2,
          d2.dims[2]
        ], null) : d2, 1)
      ], p2 = e2.sequences.dims, m2 = new W(`float32`, new Float32Array(p2[0] * p2[1]), p2);
      for (let e3 = 0; e3 < p2[0]; ++e3) {
        let [t3, n3] = yl(f2[e3].neg().squeeze_(0).tolist()), a3 = oi([
          1
        ], Array.from({
          length: t3.length - 1
        }, (e4, n4) => t3[n4 + 1] - t3[n4])).map((e4) => !!e4), o3 = [];
        for (let e4 = 0; e4 < a3.length; ++e4) a3[e4] && o3.push(n3[e4] * r2);
        let s3 = Array(i2).fill(0);
        s3.push(...o3), o3.length > 0 && s3.push(o3.at(-1)), m2[e3].data.set(s3);
      }
      return m2;
    }
  }, rk = class extends nk {
  }, ik = class extends Q {
  }, ak = class extends ik {
  }, ok = class extends ik {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, sk = class extends ik {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, ck = class extends ik {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, lk = class extends ik {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, uk = class extends Q {
  }, dk = class extends uk {
  }, fk = class extends uk {
    async _call(e2) {
      return new qh(await super._call(e2));
    }
  }, pk = class extends uk {
    async _call(e2) {
      return new X(await super._call(e2));
    }
  }, mk = class extends uk {
    async _call(e2) {
      return new Kh(await super._call(e2));
    }
  }, hk = class extends uk {
    async _call(e2) {
      return new Jh(await super._call(e2));
    }
  }, gk = class extends Q {
  }, _k = class extends gk {
  }, vk = class extends gk {
    async _call(e2) {
      return new yk(await super._call(e2));
    }
  }, yk = class extends Wh {
    constructor({ logits: e2, pred_boxes: t2 }) {
      super(), this.logits = e2, this.pred_boxes = t2;
    }
  }, bk = class extends Q {
  }, xk = class extends bk {
  }, Sk = class extends bk {
  }, Ck = class extends Q {
  }, wk = class extends Ck {
  }, Tk = class extends Ck {
  }, Ek = /* @__PURE__ */ new Map([
    [
      `bert`,
      `BertModel`
    ],
    [
      `eurobert`,
      `EuroBertModel`
    ],
    [
      `neobert`,
      `NeoBertModel`
    ],
    [
      `modernbert`,
      `ModernBertModel`
    ],
    [
      `nomic_bert`,
      `NomicBertModel`
    ],
    [
      `roformer`,
      `RoFormerModel`
    ],
    [
      `electra`,
      `ElectraModel`
    ],
    [
      `esm`,
      `EsmModel`
    ],
    [
      `convbert`,
      `ConvBertModel`
    ],
    [
      `camembert`,
      `CamembertModel`
    ],
    [
      `deberta`,
      `DebertaModel`
    ],
    [
      `deberta-v2`,
      `DebertaV2Model`
    ],
    [
      `mpnet`,
      `MPNetModel`
    ],
    [
      `albert`,
      `AlbertModel`
    ],
    [
      `distilbert`,
      `DistilBertModel`
    ],
    [
      `roberta`,
      `RobertaModel`
    ],
    [
      `xlm`,
      `XLMModel`
    ],
    [
      `xlm-roberta`,
      `XLMRobertaModel`
    ],
    [
      `clap`,
      `ClapModel`
    ],
    [
      `clip`,
      `CLIPModel`
    ],
    [
      `clipseg`,
      `CLIPSegModel`
    ],
    [
      `chinese_clip`,
      `ChineseCLIPModel`
    ],
    [
      `siglip`,
      `SiglipModel`
    ],
    [
      `jina_clip`,
      `JinaCLIPModel`
    ],
    [
      `mobilebert`,
      `MobileBertModel`
    ],
    [
      `squeezebert`,
      `SqueezeBertModel`
    ],
    [
      `wav2vec2`,
      `Wav2Vec2Model`
    ],
    [
      `wav2vec2-bert`,
      `Wav2Vec2BertModel`
    ],
    [
      `unispeech`,
      `UniSpeechModel`
    ],
    [
      `unispeech-sat`,
      `UniSpeechSatModel`
    ],
    [
      `hubert`,
      `HubertModel`
    ],
    [
      `wavlm`,
      `WavLMModel`
    ],
    [
      `audio-spectrogram-transformer`,
      `ASTModel`
    ],
    [
      `vits`,
      `VitsModel`
    ],
    [
      `pyannote`,
      `PyAnnoteModel`
    ],
    [
      `wespeaker-resnet`,
      `WeSpeakerResNetModel`
    ],
    [
      `detr`,
      `DetrModel`
    ],
    [
      `rt_detr`,
      `RTDetrModel`
    ],
    [
      `rt_detr_v2`,
      `RTDetrV2Model`
    ],
    [
      `rf_detr`,
      `RFDetrModel`
    ],
    [
      `d_fine`,
      `DFineModel`
    ],
    [
      `table-transformer`,
      `TableTransformerModel`
    ],
    [
      `vit`,
      `ViTModel`
    ],
    [
      `ijepa`,
      `IJepaModel`
    ],
    [
      `pvt`,
      `PvtModel`
    ],
    [
      `vit_msn`,
      `ViTMSNModel`
    ],
    [
      `vit_mae`,
      `ViTMAEModel`
    ],
    [
      `groupvit`,
      `GroupViTModel`
    ],
    [
      `fastvit`,
      `FastViTModel`
    ],
    [
      `mobilevit`,
      `MobileViTModel`
    ],
    [
      `mobilevitv2`,
      `MobileViTV2Model`
    ],
    [
      `owlvit`,
      `OwlViTModel`
    ],
    [
      `owlv2`,
      `Owlv2Model`
    ],
    [
      `beit`,
      `BeitModel`
    ],
    [
      `deit`,
      `DeiTModel`
    ],
    [
      `hiera`,
      `HieraModel`
    ],
    [
      `convnext`,
      `ConvNextModel`
    ],
    [
      `convnextv2`,
      `ConvNextV2Model`
    ],
    [
      `dinov2`,
      `Dinov2Model`
    ],
    [
      `dinov2_with_registers`,
      `Dinov2WithRegistersModel`
    ],
    [
      `dinov3_vit`,
      `DINOv3ViTModel`
    ],
    [
      `dinov3_convnext`,
      `DINOv3ConvNextModel`
    ],
    [
      `resnet`,
      `ResNetModel`
    ],
    [
      `swin`,
      `SwinModel`
    ],
    [
      `swin2sr`,
      `Swin2SRModel`
    ],
    [
      `donut-swin`,
      `DonutSwinModel`
    ],
    [
      `yolos`,
      `YolosModel`
    ],
    [
      `dpt`,
      `DPTModel`
    ],
    [
      `glpn`,
      `GLPNModel`
    ],
    [
      `hifigan`,
      `SpeechT5HifiGan`
    ],
    [
      `efficientnet`,
      `EfficientNetModel`
    ],
    [
      `decision_transformer`,
      `DecisionTransformerModel`
    ],
    [
      `patchtst`,
      `PatchTSTModel`
    ],
    [
      `patchtsmixer`,
      `PatchTSMixerModel`
    ],
    [
      `mobilenet_v1`,
      `MobileNetV1Model`
    ],
    [
      `mobilenet_v2`,
      `MobileNetV2Model`
    ],
    [
      `mobilenet_v3`,
      `MobileNetV3Model`
    ],
    [
      `mobilenet_v4`,
      `MobileNetV4Model`
    ],
    [
      `maskformer`,
      `MaskFormerModel`
    ],
    [
      `mgp-str`,
      `MgpstrForSceneTextRecognition`
    ],
    [
      `style_text_to_speech_2`,
      `StyleTextToSpeech2Model`
    ],
    [
      `openai_privacy_filter`,
      `OpenAIPrivacyFilterModel`
    ],
    [
      `embedding_gemma2`,
      `EmbeddingGemma2Model`
    ]
  ]), Dk = /* @__PURE__ */ new Map([
    [
      `t5`,
      `T5Model`
    ],
    [
      `longt5`,
      `LongT5Model`
    ],
    [
      `mt5`,
      `MT5Model`
    ],
    [
      `bart`,
      `BartModel`
    ],
    [
      `mbart`,
      `MBartModel`
    ],
    [
      `marian`,
      `MarianModel`
    ],
    [
      `whisper`,
      `WhisperModel`
    ],
    [
      `cohere_asr`,
      `CohereAsrModel`
    ],
    [
      `m2m_100`,
      `M2M100Model`
    ],
    [
      `blenderbot`,
      `BlenderbotModel`
    ],
    [
      `blenderbot-small`,
      `BlenderbotSmallModel`
    ]
  ]), Ok = /* @__PURE__ */ new Map([
    [
      `mimi`,
      `MimiModel`
    ],
    [
      `dac`,
      `DacModel`
    ],
    [
      `snac`,
      `SnacModel`
    ]
  ]), kk = /* @__PURE__ */ new Map([
    [
      `bloom`,
      `BloomModel`
    ],
    [
      `jais`,
      `JAISModel`
    ],
    [
      `gpt2`,
      `GPT2Model`
    ],
    [
      `gpt_oss`,
      `GptOssModel`
    ],
    [
      `gptj`,
      `GPTJModel`
    ],
    [
      `gpt_bigcode`,
      `GPTBigCodeModel`
    ],
    [
      `gpt_neo`,
      `GPTNeoModel`
    ],
    [
      `gpt_neox`,
      `GPTNeoXModel`
    ],
    [
      `codegen`,
      `CodeGenModel`
    ],
    [
      `llama`,
      `LlamaModel`
    ],
    [
      `apertus`,
      `ApertusModel`
    ],
    [
      `nanochat`,
      `NanoChatModel`
    ],
    [
      `arcee`,
      `ArceeModel`
    ],
    [
      `afmoe`,
      `AfmoeModel`
    ],
    [
      `lfm2`,
      `Lfm2Model`
    ],
    [
      `lfm2_moe`,
      `Lfm2MoeModel`
    ],
    [
      `lfm3`,
      `Lfm3Model`
    ],
    [
      `smollm3`,
      `SmolLM3Model`
    ],
    [
      `exaone`,
      `ExaoneModel`
    ],
    [
      `olmo`,
      `OlmoModel`
    ],
    [
      `olmo2`,
      `Olmo2Model`
    ],
    [
      `olmo3`,
      `Olmo3Model`
    ],
    [
      `olmo_hybrid`,
      `OlmoHybridModel`
    ],
    [
      `mobilellm`,
      `MobileLLMModel`
    ],
    [
      `granite`,
      `GraniteModel`
    ],
    [
      `granitemoehybrid`,
      `GraniteMoeHybridModel`
    ],
    [
      `cohere`,
      `CohereModel`
    ],
    [
      `cohere2`,
      `Cohere2Model`
    ],
    [
      `gemma`,
      `GemmaModel`
    ],
    [
      `gemma2`,
      `Gemma2Model`
    ],
    [
      `vaultgemma`,
      `VaultGemmaModel`
    ],
    [
      `gemma3_text`,
      `Gemma3Model`
    ],
    [
      `helium`,
      `HeliumModel`
    ],
    [
      `glm`,
      `GlmModel`
    ],
    [
      `glm_moe_dsa`,
      `GlmMoeDsaModel`
    ],
    [
      `openelm`,
      `OpenELMModel`
    ],
    [
      `qwen2`,
      `Qwen2Model`
    ],
    [
      `qwen2_moe`,
      `Qwen2MoeModel`
    ],
    [
      `qwen3`,
      `Qwen3Model`
    ],
    [
      `qwen3_moe`,
      `Qwen3MoeModel`
    ],
    [
      `qwen3_next`,
      `Qwen3NextModel`
    ],
    [
      `phi`,
      `PhiModel`
    ],
    [
      `phi3`,
      `Phi3Model`
    ],
    [
      `mpt`,
      `MptModel`
    ],
    [
      `opt`,
      `OPTModel`
    ],
    [
      `mistral`,
      `MistralModel`
    ],
    [
      `mistral4`,
      `Mistral4Model`
    ],
    [
      `ministral`,
      `MinistralModel`
    ],
    [
      `ministral3`,
      `Ministral3Model`
    ],
    [
      `ernie4_5`,
      `Ernie4_5ForCausalLM`
    ],
    [
      `starcoder2`,
      `Starcoder2Model`
    ],
    [
      `deepseek_v3`,
      `DeepseekV3Model`
    ],
    [
      `deepseek_v4`,
      `DeepseekV4Model`
    ],
    [
      `falcon`,
      `FalconModel`
    ],
    [
      `falcon_h1`,
      `FalconH1Model`
    ],
    [
      `nemotron_h`,
      `NemotronHModel`
    ],
    [
      `solar_open`,
      `SolarOpenModel`
    ],
    [
      `stablelm`,
      `StableLmModel`
    ],
    [
      `modernbert-decoder`,
      `ModernBertDecoderModel`
    ],
    [
      `hunyuan_v1_dense`,
      `HunYuanDenseV1Model`
    ],
    [
      `youtu`,
      `YoutuModel`
    ],
    [
      `zaya`,
      `ZayaModel`
    ],
    [
      `hrm_text`,
      `HrmTextModel`
    ]
  ]), Ak = /* @__PURE__ */ new Map([
    [
      `speecht5`,
      `SpeechT5ForSpeechToText`
    ],
    [
      `whisper`,
      `WhisperForConditionalGeneration`
    ],
    [
      `lite-whisper`,
      `LiteWhisperForConditionalGeneration`
    ],
    [
      `moonshine`,
      `MoonshineForConditionalGeneration`
    ],
    [
      `cohere_asr`,
      `CohereAsrForConditionalGeneration`
    ]
  ]), jk = /* @__PURE__ */ new Map([
    [
      `speecht5`,
      `SpeechT5ForTextToSpeech`
    ]
  ]), Mk = /* @__PURE__ */ new Map([
    [
      `vits`,
      `VitsModel`
    ],
    [
      `musicgen`,
      `MusicgenForConditionalGeneration`
    ],
    [
      `supertonic`,
      `SupertonicForConditionalGeneration`
    ]
  ]), Nk = /* @__PURE__ */ new Map([
    [
      `bert`,
      `BertForSequenceClassification`
    ],
    [
      `eurobert`,
      `EuroBertForSequenceClassification`
    ],
    [
      `neobert`,
      `NeoBertForSequenceClassification`
    ],
    [
      `modernbert`,
      `ModernBertForSequenceClassification`
    ],
    [
      `roformer`,
      `RoFormerForSequenceClassification`
    ],
    [
      `electra`,
      `ElectraForSequenceClassification`
    ],
    [
      `esm`,
      `EsmForSequenceClassification`
    ],
    [
      `convbert`,
      `ConvBertForSequenceClassification`
    ],
    [
      `camembert`,
      `CamembertForSequenceClassification`
    ],
    [
      `deberta`,
      `DebertaForSequenceClassification`
    ],
    [
      `deberta-v2`,
      `DebertaV2ForSequenceClassification`
    ],
    [
      `mpnet`,
      `MPNetForSequenceClassification`
    ],
    [
      `albert`,
      `AlbertForSequenceClassification`
    ],
    [
      `distilbert`,
      `DistilBertForSequenceClassification`
    ],
    [
      `roberta`,
      `RobertaForSequenceClassification`
    ],
    [
      `xlm`,
      `XLMForSequenceClassification`
    ],
    [
      `xlm-roberta`,
      `XLMRobertaForSequenceClassification`
    ],
    [
      `bart`,
      `BartForSequenceClassification`
    ],
    [
      `mbart`,
      `MBartForSequenceClassification`
    ],
    [
      `mobilebert`,
      `MobileBertForSequenceClassification`
    ],
    [
      `squeezebert`,
      `SqueezeBertForSequenceClassification`
    ]
  ]), Pk = /* @__PURE__ */ new Map([
    [
      `bert`,
      `BertForTokenClassification`
    ],
    [
      `eurobert`,
      `EuroBertForTokenClassification`
    ],
    [
      `neobert`,
      `NeoBertForTokenClassification`
    ],
    [
      `modernbert`,
      `ModernBertForTokenClassification`
    ],
    [
      `roformer`,
      `RoFormerForTokenClassification`
    ],
    [
      `electra`,
      `ElectraForTokenClassification`
    ],
    [
      `esm`,
      `EsmForTokenClassification`
    ],
    [
      `convbert`,
      `ConvBertForTokenClassification`
    ],
    [
      `camembert`,
      `CamembertForTokenClassification`
    ],
    [
      `deberta`,
      `DebertaForTokenClassification`
    ],
    [
      `deberta-v2`,
      `DebertaV2ForTokenClassification`
    ],
    [
      `mpnet`,
      `MPNetForTokenClassification`
    ],
    [
      `distilbert`,
      `DistilBertForTokenClassification`
    ],
    [
      `roberta`,
      `RobertaForTokenClassification`
    ],
    [
      `xlm`,
      `XLMForTokenClassification`
    ],
    [
      `xlm-roberta`,
      `XLMRobertaForTokenClassification`
    ],
    [
      `openai_privacy_filter`,
      `OpenAIPrivacyFilterForTokenClassification`
    ]
  ]), Fk = /* @__PURE__ */ new Map([
    [
      `t5`,
      `T5ForConditionalGeneration`
    ],
    [
      `longt5`,
      `LongT5ForConditionalGeneration`
    ],
    [
      `mt5`,
      `MT5ForConditionalGeneration`
    ],
    [
      `bart`,
      `BartForConditionalGeneration`
    ],
    [
      `mbart`,
      `MBartForConditionalGeneration`
    ],
    [
      `marian`,
      `MarianMTModel`
    ],
    [
      `m2m_100`,
      `M2M100ForConditionalGeneration`
    ],
    [
      `blenderbot`,
      `BlenderbotForConditionalGeneration`
    ],
    [
      `blenderbot-small`,
      `BlenderbotSmallForConditionalGeneration`
    ]
  ]), Ik = /* @__PURE__ */ new Map([
    [
      `bloom`,
      `BloomForCausalLM`
    ],
    [
      `gpt2`,
      `GPT2LMHeadModel`
    ],
    [
      `gpt_oss`,
      `GptOssForCausalLM`
    ],
    [
      `jais`,
      `JAISLMHeadModel`
    ],
    [
      `gptj`,
      `GPTJForCausalLM`
    ],
    [
      `gpt_bigcode`,
      `GPTBigCodeForCausalLM`
    ],
    [
      `gpt_neo`,
      `GPTNeoForCausalLM`
    ],
    [
      `gpt_neox`,
      `GPTNeoXForCausalLM`
    ],
    [
      `codegen`,
      `CodeGenForCausalLM`
    ],
    [
      `llama`,
      `LlamaForCausalLM`
    ],
    [
      `nanochat`,
      `NanoChatForCausalLM`
    ],
    [
      `apertus`,
      `ApertusForCausalLM`
    ],
    [
      `llama4_text`,
      `Llama4ForCausalLM`
    ],
    [
      `arcee`,
      `ArceeForCausalLM`
    ],
    [
      `afmoe`,
      `AfmoeForCausalLM`
    ],
    [
      `lfm2`,
      `Lfm2ForCausalLM`
    ],
    [
      `lfm2_moe`,
      `Lfm2MoeForCausalLM`
    ],
    [
      `lfm3`,
      `Lfm3ForCausalLM`
    ],
    [
      `smollm3`,
      `SmolLM3ForCausalLM`
    ],
    [
      `exaone`,
      `ExaoneForCausalLM`
    ],
    [
      `olmo`,
      `OlmoForCausalLM`
    ],
    [
      `olmo2`,
      `Olmo2ForCausalLM`
    ],
    [
      `olmo3`,
      `Olmo3ForCausalLM`
    ],
    [
      `olmo_hybrid`,
      `OlmoHybridForCausalLM`
    ],
    [
      `mobilellm`,
      `MobileLLMForCausalLM`
    ],
    [
      `granite`,
      `GraniteForCausalLM`
    ],
    [
      `granitemoehybrid`,
      `GraniteMoeHybridForCausalLM`
    ],
    [
      `cohere`,
      `CohereForCausalLM`
    ],
    [
      `cohere2`,
      `Cohere2ForCausalLM`
    ],
    [
      `gemma`,
      `GemmaForCausalLM`
    ],
    [
      `gemma2`,
      `Gemma2ForCausalLM`
    ],
    [
      `vaultgemma`,
      `VaultGemmaForCausalLM`
    ],
    [
      `gemma3_text`,
      `Gemma3ForCausalLM`
    ],
    [
      `gemma3`,
      `Gemma3ForCausalLM`
    ],
    [
      `helium`,
      `HeliumForCausalLM`
    ],
    [
      `glm`,
      `GlmForCausalLM`
    ],
    [
      `glm_moe_dsa`,
      `GlmMoeDsaForCausalLM`
    ],
    [
      `openelm`,
      `OpenELMForCausalLM`
    ],
    [
      `qwen2`,
      `Qwen2ForCausalLM`
    ],
    [
      `qwen2_moe`,
      `Qwen2MoeForCausalLM`
    ],
    [
      `qwen3`,
      `Qwen3ForCausalLM`
    ],
    [
      `qwen3_moe`,
      `Qwen3MoeForCausalLM`
    ],
    [
      `qwen3_next`,
      `Qwen3NextForCausalLM`
    ],
    [
      `qwen2_vl`,
      `Qwen2VLForCausalLM`
    ],
    [
      `qwen2_5_vl`,
      `Qwen2_5_VLForCausalLM`
    ],
    [
      `qwen3_vl`,
      `Qwen3VLForCausalLM`
    ],
    [
      `qwen3_vl_moe`,
      `Qwen3VLMoeForCausalLM`
    ],
    [
      `qwen3_5`,
      `Qwen3_5ForCausalLM`
    ],
    [
      `qwen3_5_text`,
      `Qwen3_5ForCausalLM`
    ],
    [
      `qwen3_5_moe`,
      `Qwen3_5MoeForCausalLM`
    ],
    [
      `gemma3n`,
      `Gemma3nForCausalLM`
    ],
    [
      `gemma4`,
      `Gemma4ForCausalLM`
    ],
    [
      `phi`,
      `PhiForCausalLM`
    ],
    [
      `phi3`,
      `Phi3ForCausalLM`
    ],
    [
      `mpt`,
      `MptForCausalLM`
    ],
    [
      `opt`,
      `OPTForCausalLM`
    ],
    [
      `mbart`,
      `MBartForCausalLM`
    ],
    [
      `mistral`,
      `MistralForCausalLM`
    ],
    [
      `mistral4`,
      `Mistral4ForCausalLM`
    ],
    [
      `ministral`,
      `MinistralForCausalLM`
    ],
    [
      `ministral3`,
      `Ministral3ForCausalLM`
    ],
    [
      `ernie4_5`,
      `Ernie4_5ForCausalLM`
    ],
    [
      `starcoder2`,
      `Starcoder2ForCausalLM`
    ],
    [
      `deepseek_v3`,
      `DeepseekV3ForCausalLM`
    ],
    [
      `deepseek_v4`,
      `DeepseekV4ForCausalLM`
    ],
    [
      `falcon`,
      `FalconForCausalLM`
    ],
    [
      `falcon_h1`,
      `FalconH1ForCausalLM`
    ],
    [
      `nemotron_h`,
      `NemotronHForCausalLM`
    ],
    [
      `trocr`,
      `TrOCRForCausalLM`
    ],
    [
      `solar_open`,
      `SolarOpenForCausalLM`
    ],
    [
      `stablelm`,
      `StableLmForCausalLM`
    ],
    [
      `modernbert-decoder`,
      `ModernBertDecoderForCausalLM`
    ],
    [
      `hunyuan_v1_dense`,
      `HunYuanDenseV1ForCausalLM`
    ],
    [
      `youtu`,
      `YoutuForCausalLM`
    ],
    [
      `zaya`,
      `ZayaForCausalLM`
    ],
    [
      `hrm_text`,
      `HrmTextForCausalLM`
    ],
    [
      `phi3_v`,
      `Phi3VForCausalLM`
    ]
  ]), Lk = /* @__PURE__ */ new Map([
    [
      `multi_modality`,
      `MultiModalityCausalLM`
    ]
  ]), Rk = /* @__PURE__ */ new Map([
    [
      `bert`,
      `BertForMaskedLM`
    ],
    [
      `eurobert`,
      `EuroBertForMaskedLM`
    ],
    [
      `neobert`,
      `NeoBertForMaskedLM`
    ],
    [
      `modernbert`,
      `ModernBertForMaskedLM`
    ],
    [
      `roformer`,
      `RoFormerForMaskedLM`
    ],
    [
      `electra`,
      `ElectraForMaskedLM`
    ],
    [
      `esm`,
      `EsmForMaskedLM`
    ],
    [
      `convbert`,
      `ConvBertForMaskedLM`
    ],
    [
      `camembert`,
      `CamembertForMaskedLM`
    ],
    [
      `deberta`,
      `DebertaForMaskedLM`
    ],
    [
      `deberta-v2`,
      `DebertaV2ForMaskedLM`
    ],
    [
      `mpnet`,
      `MPNetForMaskedLM`
    ],
    [
      `albert`,
      `AlbertForMaskedLM`
    ],
    [
      `distilbert`,
      `DistilBertForMaskedLM`
    ],
    [
      `roberta`,
      `RobertaForMaskedLM`
    ],
    [
      `xlm`,
      `XLMWithLMHeadModel`
    ],
    [
      `xlm-roberta`,
      `XLMRobertaForMaskedLM`
    ],
    [
      `mobilebert`,
      `MobileBertForMaskedLM`
    ],
    [
      `squeezebert`,
      `SqueezeBertForMaskedLM`
    ]
  ]), zk = /* @__PURE__ */ new Map([
    [
      `bert`,
      `BertForQuestionAnswering`
    ],
    [
      `neobert`,
      `NeoBertForQuestionAnswering`
    ],
    [
      `roformer`,
      `RoFormerForQuestionAnswering`
    ],
    [
      `electra`,
      `ElectraForQuestionAnswering`
    ],
    [
      `convbert`,
      `ConvBertForQuestionAnswering`
    ],
    [
      `camembert`,
      `CamembertForQuestionAnswering`
    ],
    [
      `deberta`,
      `DebertaForQuestionAnswering`
    ],
    [
      `deberta-v2`,
      `DebertaV2ForQuestionAnswering`
    ],
    [
      `mpnet`,
      `MPNetForQuestionAnswering`
    ],
    [
      `albert`,
      `AlbertForQuestionAnswering`
    ],
    [
      `distilbert`,
      `DistilBertForQuestionAnswering`
    ],
    [
      `roberta`,
      `RobertaForQuestionAnswering`
    ],
    [
      `xlm`,
      `XLMForQuestionAnswering`
    ],
    [
      `xlm-roberta`,
      `XLMRobertaForQuestionAnswering`
    ],
    [
      `mobilebert`,
      `MobileBertForQuestionAnswering`
    ],
    [
      `squeezebert`,
      `SqueezeBertForQuestionAnswering`
    ]
  ]), Bk = /* @__PURE__ */ new Map([
    [
      `vision-encoder-decoder`,
      `VisionEncoderDecoderModel`
    ],
    [
      `idefics3`,
      `Idefics3ForConditionalGeneration`
    ],
    [
      `smolvlm`,
      `SmolVLMForConditionalGeneration`
    ]
  ]), Vk = /* @__PURE__ */ new Map([
    [
      `llava`,
      `LlavaForConditionalGeneration`
    ],
    [
      `llava_onevision`,
      `LlavaOnevisionForConditionalGeneration`
    ],
    [
      `moondream1`,
      `Moondream1ForConditionalGeneration`
    ],
    [
      `florence2`,
      `Florence2ForConditionalGeneration`
    ],
    [
      `qwen2_vl`,
      `Qwen2VLForConditionalGeneration`
    ],
    [
      `qwen2_5_vl`,
      `Qwen2_5_VLForConditionalGeneration`
    ],
    [
      `qwen3_vl`,
      `Qwen3VLForConditionalGeneration`
    ],
    [
      `qwen3_vl_moe`,
      `Qwen3VLMoeForConditionalGeneration`
    ],
    [
      `qwen3_5`,
      `Qwen3_5ForConditionalGeneration`
    ],
    [
      `qwen3_5_moe`,
      `Qwen3_5MoeForConditionalGeneration`
    ],
    [
      `lfm2_vl`,
      `Lfm2VlForConditionalGeneration`
    ],
    [
      `lfm3_vl`,
      `Lfm3VlForConditionalGeneration`
    ],
    [
      `idefics3`,
      `Idefics3ForConditionalGeneration`
    ],
    [
      `smolvlm`,
      `SmolVLMForConditionalGeneration`
    ],
    [
      `paligemma`,
      `PaliGemmaForConditionalGeneration`
    ],
    [
      `llava_qwen2`,
      `LlavaQwen2ForCausalLM`
    ],
    [
      `gemma3`,
      `Gemma3ForConditionalGeneration`
    ],
    [
      `gemma3n`,
      `Gemma3nForConditionalGeneration`
    ],
    [
      `gemma4`,
      `Gemma4ForConditionalGeneration`
    ],
    [
      `mistral3`,
      `Mistral3ForConditionalGeneration`
    ],
    [
      `lighton_ocr`,
      `LightOnOcrForConditionalGeneration`
    ],
    [
      `glm_ocr`,
      `GlmOcrForConditionalGeneration`
    ]
  ]), Hk = /* @__PURE__ */ new Map([
    [
      `granite_speech`,
      `GraniteSpeechForConditionalGeneration`
    ],
    [
      `ultravox`,
      `UltravoxModel`
    ],
    [
      `voxtral`,
      `VoxtralForConditionalGeneration`
    ],
    [
      `voxtral_realtime`,
      `VoxtralRealtimeForConditionalGeneration`
    ]
  ]), Uk = /* @__PURE__ */ new Map([
    [
      `vision-encoder-decoder`,
      `VisionEncoderDecoderModel`
    ]
  ]), Wk = /* @__PURE__ */ new Map([
    [
      `vit`,
      `ViTForImageClassification`
    ],
    [
      `ijepa`,
      `IJepaForImageClassification`
    ],
    [
      `pvt`,
      `PvtForImageClassification`
    ],
    [
      `vit_msn`,
      `ViTMSNForImageClassification`
    ],
    [
      `fastvit`,
      `FastViTForImageClassification`
    ],
    [
      `mobilevit`,
      `MobileViTForImageClassification`
    ],
    [
      `mobilevitv2`,
      `MobileViTV2ForImageClassification`
    ],
    [
      `beit`,
      `BeitForImageClassification`
    ],
    [
      `deit`,
      `DeiTForImageClassification`
    ],
    [
      `hiera`,
      `HieraForImageClassification`
    ],
    [
      `convnext`,
      `ConvNextForImageClassification`
    ],
    [
      `convnextv2`,
      `ConvNextV2ForImageClassification`
    ],
    [
      `dinov2`,
      `Dinov2ForImageClassification`
    ],
    [
      `dinov2_with_registers`,
      `Dinov2WithRegistersForImageClassification`
    ],
    [
      `resnet`,
      `ResNetForImageClassification`
    ],
    [
      `swin`,
      `SwinForImageClassification`
    ],
    [
      `segformer`,
      `SegformerForImageClassification`
    ],
    [
      `efficientnet`,
      `EfficientNetForImageClassification`
    ],
    [
      `mobilenet_v1`,
      `MobileNetV1ForImageClassification`
    ],
    [
      `mobilenet_v2`,
      `MobileNetV2ForImageClassification`
    ],
    [
      `mobilenet_v3`,
      `MobileNetV3ForImageClassification`
    ],
    [
      `mobilenet_v4`,
      `MobileNetV4ForImageClassification`
    ]
  ]), Gk = /* @__PURE__ */ new Map([
    [
      `detr`,
      `DetrForObjectDetection`
    ],
    [
      `rt_detr`,
      `RTDetrForObjectDetection`
    ],
    [
      `rt_detr_v2`,
      `RTDetrV2ForObjectDetection`
    ],
    [
      `rf_detr`,
      `RFDetrForObjectDetection`
    ],
    [
      `d_fine`,
      `DFineForObjectDetection`
    ],
    [
      `table-transformer`,
      `TableTransformerForObjectDetection`
    ],
    [
      `yolos`,
      `YolosForObjectDetection`
    ]
  ]), Kk = /* @__PURE__ */ new Map([
    [
      `owlvit`,
      `OwlViTForObjectDetection`
    ],
    [
      `owlv2`,
      `Owlv2ForObjectDetection`
    ],
    [
      `grounding-dino`,
      `GroundingDinoForObjectDetection`
    ]
  ]), qk = /* @__PURE__ */ new Map([
    [
      `detr`,
      `DetrForSegmentation`
    ],
    [
      `clipseg`,
      `CLIPSegForImageSegmentation`
    ]
  ]), Jk = /* @__PURE__ */ new Map([
    [
      `segformer`,
      `SegformerForSemanticSegmentation`
    ],
    [
      `sapiens`,
      `SapiensForSemanticSegmentation`
    ],
    [
      `swin`,
      `SwinForSemanticSegmentation`
    ],
    [
      `mobilenet_v1`,
      `MobileNetV1ForSemanticSegmentation`
    ],
    [
      `mobilenet_v2`,
      `MobileNetV2ForSemanticSegmentation`
    ],
    [
      `mobilenet_v3`,
      `MobileNetV3ForSemanticSegmentation`
    ],
    [
      `mobilenet_v4`,
      `MobileNetV4ForSemanticSegmentation`
    ]
  ]), Yk = /* @__PURE__ */ new Map([
    [
      `detr`,
      `DetrForSegmentation`
    ],
    [
      `maskformer`,
      `MaskFormerForInstanceSegmentation`
    ]
  ]), Xk = /* @__PURE__ */ new Map([
    [
      `sam`,
      `SamModel`
    ],
    [
      `sam2`,
      `Sam2Model`
    ],
    [
      `edgetam`,
      `EdgeTamModel`
    ],
    [
      `sam3_tracker`,
      `Sam3TrackerModel`
    ]
  ]), Zk = /* @__PURE__ */ new Map([
    [
      `wav2vec2`,
      `Wav2Vec2ForCTC`
    ],
    [
      `wav2vec2-bert`,
      `Wav2Vec2BertForCTC`
    ],
    [
      `unispeech`,
      `UniSpeechForCTC`
    ],
    [
      `unispeech-sat`,
      `UniSpeechSatForCTC`
    ],
    [
      `wavlm`,
      `WavLMForCTC`
    ],
    [
      `hubert`,
      `HubertForCTC`
    ],
    [
      `parakeet_ctc`,
      `ParakeetForCTC`
    ]
  ]), Qk = /* @__PURE__ */ new Map([
    [
      `wav2vec2`,
      `Wav2Vec2ForSequenceClassification`
    ],
    [
      `wav2vec2-bert`,
      `Wav2Vec2BertForSequenceClassification`
    ],
    [
      `unispeech`,
      `UniSpeechForSequenceClassification`
    ],
    [
      `unispeech-sat`,
      `UniSpeechSatForSequenceClassification`
    ],
    [
      `wavlm`,
      `WavLMForSequenceClassification`
    ],
    [
      `hubert`,
      `HubertForSequenceClassification`
    ],
    [
      `audio-spectrogram-transformer`,
      `ASTForAudioClassification`
    ]
  ]), $k = /* @__PURE__ */ new Map([
    [
      `wavlm`,
      `WavLMForXVector`
    ]
  ]), eA = /* @__PURE__ */ new Map([
    [
      `unispeech-sat`,
      `UniSpeechSatForAudioFrameClassification`
    ],
    [
      `wavlm`,
      `WavLMForAudioFrameClassification`
    ],
    [
      `wav2vec2`,
      `Wav2Vec2ForAudioFrameClassification`
    ],
    [
      `pyannote`,
      `PyAnnoteForAudioFrameClassification`
    ]
  ]), tA = /* @__PURE__ */ new Map([
    [
      `vitmatte`,
      `VitMatteForImageMatting`
    ]
  ]), nA = /* @__PURE__ */ new Map([
    [
      `patchtst`,
      `PatchTSTForPrediction`
    ],
    [
      `patchtsmixer`,
      `PatchTSMixerForPrediction`
    ]
  ]), rA = /* @__PURE__ */ new Map([
    [
      `swin2sr`,
      `Swin2SRForImageSuperResolution`
    ]
  ]), iA = /* @__PURE__ */ new Map([
    [
      `chmv2`,
      `CHMv2ForDepthEstimation`
    ],
    [
      `dpt`,
      `DPTForDepthEstimation`
    ],
    [
      `depth_anything`,
      `DepthAnythingForDepthEstimation`
    ],
    [
      `glpn`,
      `GLPNForDepthEstimation`
    ],
    [
      `sapiens`,
      `SapiensForDepthEstimation`
    ],
    [
      `depth_pro`,
      `DepthProForDepthEstimation`
    ],
    [
      `metric3d`,
      `Metric3DForDepthEstimation`
    ],
    [
      `metric3dv2`,
      `Metric3Dv2ForDepthEstimation`
    ]
  ]), aA = /* @__PURE__ */ new Map([
    [
      `sapiens`,
      `SapiensForNormalEstimation`
    ]
  ]), oA = /* @__PURE__ */ new Map([
    [
      `vitpose`,
      `VitPoseForPoseEstimation`
    ]
  ]), sA = /* @__PURE__ */ new Map([
    [
      `clip`,
      `CLIPVisionModelWithProjection`
    ],
    [
      `siglip`,
      `SiglipVisionModel`
    ],
    [
      `jina_clip`,
      `JinaCLIPVisionModel`
    ]
  ]), cA = [
    [
      Ek,
      Z.EncoderOnly
    ],
    [
      Dk,
      Z.EncoderDecoder
    ],
    [
      kk,
      Z.DecoderOnlyWithoutHead
    ],
    [
      Ok,
      Z.AutoEncoder
    ],
    [
      Nk,
      Z.EncoderOnly
    ],
    [
      Pk,
      Z.EncoderOnly
    ],
    [
      Fk,
      Z.Seq2Seq
    ],
    [
      Ak,
      Z.Seq2Seq
    ],
    [
      Ik,
      Z.DecoderOnly
    ],
    [
      Lk,
      Z.MultiModality
    ],
    [
      Rk,
      Z.EncoderOnly
    ],
    [
      zk,
      Z.EncoderOnly
    ],
    [
      Bk,
      Z.Vision2Seq
    ],
    [
      Vk,
      Z.ImageTextToText
    ],
    [
      Hk,
      Z.AudioTextToText
    ],
    [
      Wk,
      Z.EncoderOnly
    ],
    [
      qk,
      Z.EncoderOnly
    ],
    [
      Yk,
      Z.EncoderOnly
    ],
    [
      Jk,
      Z.EncoderOnly
    ],
    [
      tA,
      Z.EncoderOnly
    ],
    [
      nA,
      Z.EncoderOnly
    ],
    [
      rA,
      Z.EncoderOnly
    ],
    [
      iA,
      Z.EncoderOnly
    ],
    [
      aA,
      Z.EncoderOnly
    ],
    [
      oA,
      Z.EncoderOnly
    ],
    [
      Gk,
      Z.EncoderOnly
    ],
    [
      Kk,
      Z.EncoderOnly
    ],
    [
      Xk,
      Z.MaskGeneration
    ],
    [
      Zk,
      Z.EncoderOnly
    ],
    [
      Qk,
      Z.EncoderOnly
    ],
    [
      jk,
      Z.Seq2Seq
    ],
    [
      Mk,
      Z.EncoderOnly
    ],
    [
      $k,
      Z.EncoderOnly
    ],
    [
      eA,
      Z.EncoderOnly
    ],
    [
      sA,
      Z.EncoderOnly
    ]
  ];
  for (let [e2, t2] of cA) for (let n2 of e2.values()) {
    Ig.set(n2, t2);
    let e3 = o_[n2];
    Rg.set(e3, n2), Lg.set(n2, e3);
  }
  var lA = [
    [
      `MusicgenForConditionalGeneration`,
      zw,
      Z.Musicgen
    ],
    [
      `Phi3VForCausalLM`,
      UT,
      Z.Phi3V
    ],
    [
      `CLIPTextModelWithProjection`,
      pv,
      Z.EncoderOnly
    ],
    [
      `SiglipTextModel`,
      oD,
      Z.EncoderOnly
    ],
    [
      `JinaCLIPTextModel`,
      DS,
      Z.EncoderOnly
    ],
    [
      `ClapTextModelWithProjection`,
      cv,
      Z.EncoderOnly
    ],
    [
      `ClapAudioModelWithProjection`,
      lv,
      Z.EncoderOnly
    ],
    [
      `DacEncoderModel`,
      ey,
      Z.EncoderOnly
    ],
    [
      `DacDecoderModel`,
      ty,
      Z.EncoderOnly
    ],
    [
      `MimiEncoderModel`,
      bC,
      Z.EncoderOnly
    ],
    [
      `MimiDecoderModel`,
      xC,
      Z.EncoderOnly
    ],
    [
      `SnacEncoderModel`,
      mD,
      Z.EncoderOnly
    ],
    [
      `SnacDecoderModel`,
      hD,
      Z.EncoderOnly
    ],
    [
      `Gemma3nForConditionalGeneration`,
      tx,
      Z.ImageAudioTextToText
    ],
    [
      `Gemma4ForConditionalGeneration`,
      rx,
      Z.ImageAudioTextToText
    ],
    [
      `SupertonicForConditionalGeneration`,
      RD,
      Z.Supertonic
    ],
    [
      `ChatterboxModel`,
      tv,
      Z.Chatterbox
    ],
    [
      `EmbeddingGemma2Model`,
      fb,
      Z.MultimodalEncoder
    ],
    [
      `VoxtralRealtimeForConditionalGeneration`,
      zO,
      Z.VoxtralRealtime
    ]
  ];
  for (let [e2, t2, n2] of lA) Ig.set(e2, n2), Rg.set(t2, e2), Lg.set(e2, t2);
  var uA = /* @__PURE__ */ new Map([
    [
      `modnet`,
      qk
    ],
    [
      `birefnet`,
      qk
    ],
    [
      `isnet`,
      qk
    ],
    [
      `ben`,
      qk
    ]
  ]);
  for (let [e2, t2] of uA.entries()) t2.set(e2, `PreTrainedModel`), Ig.set(e2, Z.EncoderOnly), Lg.set(e2, Q);
  var dA = new Set(uA.keys());
  Ig.set(`PreTrainedModel`, Z.EncoderOnly), Rg.set(Q, `PreTrainedModel`);
  var $ = {
    MODEL_FOR_SEQUENCE_CLASSIFICATION_MAPPING_NAMES: Nk,
    MODEL_FOR_TOKEN_CLASSIFICATION_MAPPING_NAMES: Pk,
    MODEL_FOR_TEXT_TO_SPECTROGRAM_MAPPING_NAMES: jk,
    MODEL_FOR_TEXT_TO_WAVEFORM_MAPPING_NAMES: Mk,
    MODEL_FOR_MASKED_LM_MAPPING_NAMES: Rk,
    MODEL_FOR_QUESTION_ANSWERING_MAPPING_NAMES: zk,
    MODEL_FOR_IMAGE_CLASSIFICATION_MAPPING_NAMES: Wk,
    MODEL_FOR_IMAGE_SEGMENTATION_MAPPING_NAMES: qk,
    MODEL_FOR_SEMANTIC_SEGMENTATION_MAPPING_NAMES: Jk,
    MODEL_FOR_UNIVERSAL_SEGMENTATION_MAPPING_NAMES: Yk,
    MODEL_FOR_OBJECT_DETECTION_MAPPING_NAMES: Gk,
    MODEL_FOR_ZERO_SHOT_OBJECT_DETECTION_MAPPING_NAMES: Kk,
    MODEL_FOR_MASK_GENERATION_MAPPING_NAMES: Xk,
    MODEL_FOR_CTC_MAPPING_NAMES: Zk,
    MODEL_FOR_AUDIO_CLASSIFICATION_MAPPING_NAMES: Qk,
    MODEL_FOR_AUDIO_XVECTOR_MAPPING_NAMES: $k,
    MODEL_FOR_AUDIO_FRAME_CLASSIFICATION_MAPPING_NAMES: eA,
    MODEL_FOR_DOCUMENT_QUESTION_ANSWERING_MAPPING_NAMES: Uk,
    MODEL_FOR_IMAGE_MATTING_MAPPING_NAMES: tA,
    MODEL_FOR_IMAGE_TO_IMAGE_MAPPING_NAMES: rA,
    MODEL_FOR_DEPTH_ESTIMATION_MAPPING_NAMES: iA,
    MODEL_FOR_NORMAL_ESTIMATION_MAPPING_NAMES: aA,
    MODEL_FOR_POSE_ESTIMATION_MAPPING_NAMES: oA,
    MODEL_FOR_IMAGE_FEATURE_EXTRACTION_MAPPING_NAMES: sA,
    MODEL_FOR_IMAGE_TEXT_TO_TEXT_MAPPING_NAMES: Vk,
    MODEL_FOR_AUDIO_TEXT_TO_TEXT_MAPPING_NAMES: Hk,
    MODEL_FOR_SEQ_TO_SEQ_CAUSAL_LM_MAPPING_NAMES: Fk,
    MODEL_FOR_SPEECH_SEQ_2_SEQ_MAPPING_NAMES: Ak,
    MODEL_FOR_CAUSAL_LM_MAPPING_NAMES: Ik,
    MODEL_FOR_VISION_2_SEQ_MAPPING_NAMES: Bk
  };
  jg($);
  var fA = (_M = class {
    static supports(e2) {
      if (!this.MODEL_CLASS_MAPPINGS) return false;
      for (let t2 of this.MODEL_CLASS_MAPPINGS) if (t2.has(e2)) return true;
      return this.BASE_IF_FAIL;
    }
    static async from_pretrained(e2, { progress_callback: t2 = null, config: n2 = null, cache_dir: r2 = null, local_files_only: i2 = false, revision: a2 = `main`, model_file_name: o2 = null, subfolder: s2 = `onnx`, device: c2 = null, dtype: l2 = null, use_external_data_format: u2 = null, session_options: d2 = {} } = {}) {
      let f2 = {
        progress_callback: t2,
        config: n2,
        cache_dir: r2,
        local_files_only: i2,
        revision: a2,
        model_file_name: o2,
        subfolder: s2,
        device: c2,
        dtype: l2,
        use_external_data_format: u2,
        session_options: d2
      };
      if (f2.config = await Fh.from_pretrained(e2, f2), !this.MODEL_CLASS_MAPPINGS) throw Error("`MODEL_CLASS_MAPPINGS` not implemented for this type of `AutoClass`: " + this.name);
      let { model_type: p2 } = f2.config;
      for (let t3 of this.MODEL_CLASS_MAPPINGS) {
        let n3 = t3.get(p2);
        if (!n3) {
          for (let e3 of t3.values()) if (e3[0] === p2) {
            n3 = e3;
            break;
          }
          if (!n3) continue;
        }
        return await o_[n3].from_pretrained(e2, f2);
      }
      if (this.BASE_IF_FAIL) return dA.has(p2) || P.warn(`Unknown model class "${p2}", attempting to construct from base class.`), await Q.from_pretrained(e2, f2);
      throw Error(`Unsupported model type: ${p2}`);
    }
  }, __publicField(_M, "MODEL_CLASS_MAPPINGS", null), __publicField(_M, "BASE_IF_FAIL", false), _M), pA = (_N = class extends fA {
  }, __publicField(_N, "MODEL_CLASS_MAPPINGS", cA.map((e2) => e2[0])), __publicField(_N, "BASE_IF_FAIL", true), _N), mA = (_O2 = class extends fA {
  }, __publicField(_O2, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_SEQUENCE_CLASSIFICATION_MAPPING_NAMES
  ]), _O2), hA = (_P = class extends fA {
  }, __publicField(_P, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_TOKEN_CLASSIFICATION_MAPPING_NAMES
  ]), _P), gA = (_Q = class extends fA {
  }, __publicField(_Q, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_SEQ_TO_SEQ_CAUSAL_LM_MAPPING_NAMES
  ]), _Q), _A = (_R = class extends fA {
  }, __publicField(_R, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_SPEECH_SEQ_2_SEQ_MAPPING_NAMES
  ]), _R), vA = (_S2 = class extends fA {
  }, __publicField(_S2, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_TEXT_TO_SPECTROGRAM_MAPPING_NAMES
  ]), _S2), yA = (_T2 = class extends fA {
  }, __publicField(_T2, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_TEXT_TO_WAVEFORM_MAPPING_NAMES
  ]), _T2), bA = (_U = class extends fA {
  }, __publicField(_U, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_CAUSAL_LM_MAPPING_NAMES
  ]), _U), xA = (_V = class extends fA {
  }, __publicField(_V, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_MASKED_LM_MAPPING_NAMES
  ]), _V), SA = (_W = class extends fA {
  }, __publicField(_W, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_QUESTION_ANSWERING_MAPPING_NAMES
  ]), _W), CA = (_X = class extends fA {
  }, __publicField(_X, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_VISION_2_SEQ_MAPPING_NAMES
  ]), _X), wA = (_Y = class extends fA {
  }, __publicField(_Y, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_IMAGE_CLASSIFICATION_MAPPING_NAMES
  ]), _Y), TA = (_Z = class extends fA {
  }, __publicField(_Z, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_IMAGE_SEGMENTATION_MAPPING_NAMES
  ]), _Z), EA = (__2 = class extends fA {
  }, __publicField(__2, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_SEMANTIC_SEGMENTATION_MAPPING_NAMES
  ]), __2), DA = (_$ = class extends fA {
  }, __publicField(_$, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_UNIVERSAL_SEGMENTATION_MAPPING_NAMES
  ]), _$), OA = (_aa = class extends fA {
  }, __publicField(_aa, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_OBJECT_DETECTION_MAPPING_NAMES
  ]), _aa), kA = (_ba = class extends fA {
  }, __publicField(_ba, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_ZERO_SHOT_OBJECT_DETECTION_MAPPING_NAMES
  ]), _ba);
  _ca = class extends fA {
  }, __publicField(_ca, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_MASK_GENERATION_MAPPING_NAMES
  ]), _ca;
  var AA = (_da = class extends fA {
  }, __publicField(_da, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_CTC_MAPPING_NAMES
  ]), _da), jA = (_ea = class extends fA {
  }, __publicField(_ea, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_AUDIO_CLASSIFICATION_MAPPING_NAMES
  ]), _ea);
  _fa = class extends fA {
  }, __publicField(_fa, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_AUDIO_XVECTOR_MAPPING_NAMES
  ]), _fa, _ga = class extends fA {
  }, __publicField(_ga, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_AUDIO_FRAME_CLASSIFICATION_MAPPING_NAMES
  ]), _ga;
  var MA = (_ha = class extends fA {
  }, __publicField(_ha, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_DOCUMENT_QUESTION_ANSWERING_MAPPING_NAMES
  ]), _ha);
  _ia = class extends fA {
  }, __publicField(_ia, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_IMAGE_MATTING_MAPPING_NAMES
  ]), _ia;
  var NA = (_ja = class extends fA {
  }, __publicField(_ja, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_IMAGE_TO_IMAGE_MAPPING_NAMES
  ]), _ja), PA = (_ka = class extends fA {
  }, __publicField(_ka, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_DEPTH_ESTIMATION_MAPPING_NAMES
  ]), _ka);
  _la = class extends fA {
  }, __publicField(_la, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_NORMAL_ESTIMATION_MAPPING_NAMES
  ]), _la, _ma = class extends fA {
  }, __publicField(_ma, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_POSE_ESTIMATION_MAPPING_NAMES
  ]), _ma;
  var FA = (_na = class extends fA {
  }, __publicField(_na, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_IMAGE_FEATURE_EXTRACTION_MAPPING_NAMES
  ]), _na);
  _oa = class extends fA {
  }, __publicField(_oa, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_IMAGE_TEXT_TO_TEXT_MAPPING_NAMES
  ]), _oa, _pa = class extends fA {
  }, __publicField(_pa, "MODEL_CLASS_MAPPINGS", [
    $.MODEL_FOR_AUDIO_TEXT_TO_TEXT_MAPPING_NAMES
  ]), _pa;
  async function IA(e2) {
    return Array.isArray(e2) || (e2 = [
      e2
    ]), await Promise.all(e2.map((e3) => Kf.read(e3)));
  }
  async function LA(e2, t2) {
    return Array.isArray(e2) || (e2 = [
      e2
    ]), await Promise.all(e2.map((e3) => typeof e3 == `string` || e3 instanceof URL ? Yd(e3, t2) : e3 instanceof Float64Array ? new Float32Array(e3) : e3));
  }
  function RA(e2, t2) {
    t2 && (e2 = e2.map((e3) => e3 | 0));
    let [n2, r2, i2, a2] = e2;
    return {
      xmin: n2,
      ymin: r2,
      xmax: i2,
      ymax: a2
    };
  }
  var zA = class extends ei {
    constructor({ task: e2, model: t2, tokenizer: n2 = null, processor: r2 = null }) {
      super(), this.task = e2, this.model = t2, this.tokenizer = n2, this.processor = r2;
    }
    async dispose() {
      await this.model.dispose();
    }
  }, BA = class extends zA {
    async _call(e2, { top_k: t2 = 1 } = {}) {
      let n2 = this.tokenizer(e2, {
        padding: true,
        truncation: true
      }), r2 = await this.model(n2), { problem_type: i2, id2label: a2 } = this.model.config, o2 = i2 === `multi_label_classification` ? (e3) => e3.sigmoid() : (e3) => new W(`float32`, cl(e3.data), e3.dims), s2 = [];
      for (let e3 of r2.logits) {
        let n3 = await su(o2(e3), t2), r3 = n3[0].tolist(), i3 = n3[1].tolist().map((e4, t3) => ({
          label: a2 ? a2[e4] : `LABEL_${e4}`,
          score: r3[t3]
        }));
        t2 === 1 ? s2.push(...i3) : s2.push(i3);
      }
      return Array.isArray(e2) || t2 === 1 ? s2 : s2[0];
    }
  }, VA = class extends zA {
    async _call(e2, { ignore_labels: t2 = [
      `O`
    ], aggregation_strategy: n2 = `none` } = {}) {
      if (n2 !== `none` && n2 !== `simple`) throw Error(`Invalid aggregation_strategy: "${n2}". Must be one of "none" or "simple".`);
      let r2 = Array.isArray(e2), i2 = this.tokenizer(r2 ? e2 : [
        e2
      ], {
        padding: true,
        truncation: true
      }), a2 = (await this.model(i2)).logits, o2 = this.model.config.id2label, s2 = [];
      for (let e3 = 0; e3 < a2.dims[0]; ++e3) {
        let r3 = i2.input_ids[e3].tolist(), c2 = a2[e3], l2 = [];
        for (let e4 = 0; e4 < c2.dims[0]; ++e4) {
          let n3 = c2[e4], i3 = dl(n3.data)[1], a3 = o2 ? o2[i3] : `LABEL_${i3}`;
          if (t2.includes(a3)) continue;
          let s3 = this.tokenizer.decode([
            r3[e4]
          ], {
            skip_special_tokens: true
          });
          if (s3 === ``) continue;
          let u2 = cl(n3.data);
          l2.push({
            entity: a3,
            score: u2[i3],
            index: e4,
            word: s3
          });
        }
        s2.push(n2 === `simple` ? UA(l2, r3, this.tokenizer) : l2);
      }
      return r2 ? s2 : s2[0];
    }
  };
  function HA(e2) {
    let t2 = e2[0];
    return e2[1] === `-` && (t2 === `B` || t2 === `I` || t2 === `E` || t2 === `S`) ? [
      t2,
      e2.slice(2)
    ] : [
      `I`,
      e2
    ];
  }
  function UA(e2, t2, n2) {
    let r2 = [], i2 = null;
    for (let t3 = 0; t3 < e2.length; ++t3) {
      let [n3, a2] = HA(e2[t3].entity);
      i2 === a2 && n3 !== `B` && n3 !== `S` ? (r2[r2.length - 1].end = t3 + 1, n3 === `E` && (i2 = null)) : (r2.push({
        tag: a2,
        start: t3,
        end: t3 + 1
      }), i2 = n3 === `S` ? null : a2);
    }
    return r2.map(({ tag: r3, start: i3, end: a2 }) => {
      let o2 = 0, s2 = [];
      for (let n3 = i3; n3 < a2; ++n3) o2 += e2[n3].score, s2.push(t2[e2[n3].index]);
      return {
        entity_group: r3,
        score: o2 / (a2 - i3),
        word: n2.decode(s2, {
          skip_special_tokens: true
        })
      };
    });
  }
  var WA = class extends zA {
    async _call(e2, t2, { top_k: n2 = 1 } = {}) {
      let r2 = this.tokenizer(e2, {
        text_pair: t2,
        padding: true,
        truncation: true
      }), i2 = Array.isArray(e2), { start_logits: a2, end_logits: o2 } = await this.model(r2), s2 = r2.input_ids.tolist(), c2 = r2.attention_mask.tolist(), { all_special_ids: l2, sep_token_id: u2 } = this.tokenizer, d2 = [];
      for (let e3 = 0; e3 < a2.dims[0]; ++e3) {
        let t3 = s2[e3], r3 = t3.findIndex((e4) => e4 == u2), i3 = a2[e3].tolist(), f2 = o2[e3].tolist();
        for (let n3 = 1; n3 < i3.length; ++n3) (c2[e3] == 0 || n3 <= r3 || l2.findIndex((e4) => e4 == t3[n3]) !== -1) && (i3[n3] = -1 / 0, f2[n3] = -1 / 0);
        let p2 = cl(i3).map((e4, t4) => [
          e4,
          t4
        ]), m2 = cl(f2).map((e4, t4) => [
          e4,
          t4
        ]);
        p2[0][0] = 0, m2[0][0] = 0;
        let h2 = si(p2, m2).filter((e4) => e4[0][1] <= e4[1][1]).map((e4) => [
          e4[0][1],
          e4[1][1],
          e4[0][0] * e4[1][0]
        ]).sort((e4, t4) => t4[2] - e4[2]), g2 = [];
        for (let e4 = 0; e4 < Math.min(h2.length, n2); ++e4) {
          let [n3, r4, i4] = h2[e4], a3 = t3.slice(n3, r4 + 1), o3 = this.tokenizer.decode(a3, {
            skip_special_tokens: true
          });
          g2.push({
            answer: o3,
            score: i4
          });
        }
        n2 === 1 ? d2.push(...g2) : d2.push(g2);
      }
      return i2 ? d2 : d2[0];
    }
  }, GA = class extends zA {
    async _call(e2, { top_k: t2 = 5 } = {}) {
      let { mask_token_id: n2, mask_token: r2 } = this.tokenizer, i2 = this.tokenizer(e2, {
        padding: true,
        truncation: true
      }), { logits: a2 } = await this.model(i2), o2 = [], s2 = i2.input_ids.tolist();
      for (let e3 = 0; e3 < s2.length; ++e3) {
        let i3 = s2[e3], c2 = i3.findIndex((e4) => e4 == n2);
        if (c2 === -1) throw Error(`Mask token (${r2}) not found in text.`);
        let l2 = a2[e3][c2], u2 = await su(new W(`float32`, cl(l2.data), l2.dims), t2), d2 = u2[0].tolist(), f2 = u2[1].tolist();
        o2.push(f2.map((e4, t3) => {
          let n3 = i3.slice();
          return n3[c2] = e4, {
            score: d2[t3],
            token: Number(e4),
            token_str: this.tokenizer.decode([
              e4
            ]),
            sequence: this.tokenizer.decode(n3, {
              skip_special_tokens: true
            })
          };
        }));
      }
      return Array.isArray(e2) ? o2 : o2[0];
    }
  }, KA = class extends zA {
    constructor() {
      super(...arguments);
      __publicField(this, "_default_generation_config", {
        max_new_tokens: 256
      });
      __publicField(this, "_key", `generated_text`);
    }
    async _call(e2, t2 = {}) {
      Array.isArray(e2) || (e2 = [
        e2
      ]), this.model.config.prefix && (e2 = e2.map((e3) => this.model.config.prefix + e3));
      let n2 = this.model.config.task_specific_params;
      n2 && n2[this.task] && n2[this.task].prefix && (e2 = e2.map((e3) => n2[this.task].prefix + e3));
      let r2 = this.tokenizer, i2 = {
        padding: true,
        truncation: true
      }, a2;
      a2 = this.task === `translation` && `_build_translation_inputs` in r2 ? r2._build_translation_inputs(e2, i2, t2) : r2(e2, i2);
      let o2 = await this.model.generate({
        ...a2,
        ...this._default_generation_config,
        ...t2
      });
      return r2.batch_decode(o2, {
        skip_special_tokens: true
      }).map((e3) => ({
        [this._key]: e3
      }));
    }
  }, qA = class extends KA {
    constructor() {
      super(...arguments);
      __publicField(this, "_key", `summary_text`);
    }
  }, JA = class extends KA {
    constructor() {
      super(...arguments);
      __publicField(this, "_key", `translation_text`);
    }
  };
  function YA(e2) {
    return Array.isArray(e2) && e2.every((e3) => `role` in e3 && `content` in e3);
  }
  var XA = class extends zA {
    constructor() {
      super(...arguments);
      __publicField(this, "_default_generation_config", {
        max_new_tokens: 256
      });
    }
    async _call(e2, t2 = {}) {
      let { add_special_tokens: n2, return_full_text: r2, tools: i2, documents: a2, chat_template: o2, tokenizer_encode_kwargs: s2, ...c2 } = t2, l2 = false, u2 = false, d2 = n2 ?? (this.tokenizer.add_bos_token || this.tokenizer.add_eos_token) ?? false, f2 = s2, p2;
      if (typeof e2 == `string`) p2 = e2 = [
        e2
      ];
      else if (Array.isArray(e2) && e2.every((e3) => typeof e3 == `string`)) l2 = true, p2 = e2;
      else {
        if (YA(e2)) e2 = [
          e2
        ];
        else if (Array.isArray(e2) && e2.every(YA)) l2 = true;
        else throw Error(`Input must be a string, an array of strings, a Chat, or an array of Chats`);
        u2 = true;
        let t3 = {
          tokenize: false,
          add_generation_prompt: true,
          ...li({
            tools: i2,
            documents: a2,
            chat_template: o2
          }, [
            `tools`,
            `documents`,
            `chat_template`
          ]),
          ...f2
        };
        p2 = e2.map((e3) => this.tokenizer.apply_chat_template(e3, t3)), d2 = false, f2 = void 0;
      }
      let m2 = u2 ? false : r2 ?? true;
      this.tokenizer.padding_side = `left`;
      let h2 = this.tokenizer(p2, {
        add_special_tokens: d2,
        padding: true,
        truncation: true,
        ...f2
      }), g2 = await this.model.generate({
        ...h2,
        ...this._default_generation_config,
        ...c2
      }), _2 = this.tokenizer.batch_decode(g2, {
        skip_special_tokens: true
      }), v2;
      !m2 && h2.input_ids.dims.at(-1) > 0 && (v2 = this.tokenizer.batch_decode(h2.input_ids, {
        skip_special_tokens: true
      }).map((e3) => e3.length));
      let y2 = Array.from({
        length: e2.length
      }, (e3) => []);
      for (let t3 = 0; t3 < _2.length; ++t3) {
        let n3 = Math.floor(t3 / g2.dims[0] * e2.length);
        v2 && (_2[t3] = _2[t3].slice(v2[n3])), y2[n3].push({
          generated_text: u2 ? [
            ...e2[n3],
            {
              role: `assistant`,
              content: _2[t3]
            }
          ] : _2[t3]
        });
      }
      return !l2 && y2.length === 1 ? y2[0] : y2;
    }
  }, ZA = class extends zA {
    constructor(e2) {
      super(e2), this.label2id = Object.fromEntries(Object.entries(this.model.config.label2id).map(([e3, t2]) => [
        e3.toLowerCase(),
        t2
      ])), this.entailment_id = this.label2id.entailment, this.entailment_id === void 0 && (P.warn(`Could not find 'entailment' in label2id mapping. Using 2 as entailment_id.`), this.entailment_id = 2), this.contradiction_id = this.label2id.contradiction ?? this.label2id.not_entailment, this.contradiction_id === void 0 && (P.warn(`Could not find 'contradiction' in label2id mapping. Using 0 as contradiction_id.`), this.contradiction_id = 0);
    }
    async _call(e2, t2, { hypothesis_template: n2 = `This example is {}.`, multi_label: r2 = false } = {}) {
      let i2 = Array.isArray(e2);
      i2 || (e2 = [
        e2
      ]), Array.isArray(t2) || (t2 = [
        t2
      ]);
      let a2 = t2.map((e3) => n2.replace(`{}`, e3)), o2 = r2 || t2.length === 1, s2 = [];
      for (let n3 of e2) {
        let e3 = [];
        for (let t3 of a2) {
          let r4 = this.tokenizer(n3, {
            text_pair: t3,
            padding: true,
            truncation: true
          }), i3 = await this.model(r4);
          o2 ? e3.push([
            i3.logits.data[this.contradiction_id],
            i3.logits.data[this.entailment_id]
          ]) : e3.push(i3.logits.data[this.entailment_id]);
        }
        let r3 = (o2 ? e3.map((e4) => cl(e4)[1]) : cl(e3)).map((e4, t3) => [
          e4,
          t3
        ]).sort((e4, t3) => t3[0] - e4[0]);
        s2.push({
          sequence: n3,
          labels: r3.map((e4) => t2[e4[1]]),
          scores: r3.map((e4) => e4[0])
        });
      }
      return i2 ? s2 : s2[0];
    }
  }, QA = class extends zA {
    async _call(e2, { top_k: t2 = 5 } = {}) {
      let n2 = this.processor.feature_extractor.config.sampling_rate, r2 = await LA(e2, n2), i2 = this.model.config.id2label, a2 = [];
      for (let e3 of r2) {
        let n3 = await this.processor(e3), r3 = (await this.model(n3)).logits[0], o2 = await su(new W(`float32`, cl(r3.data), r3.dims), t2), s2 = o2[0].tolist(), c2 = o2[1].tolist().map((e4, t3) => ({
          label: i2 ? i2[e4] : `LABEL_${e4}`,
          score: s2[t3]
        }));
        a2.push(c2);
      }
      return Array.isArray(e2) ? a2 : a2[0];
    }
  }, $A = class extends zA {
    async _call(e2, t2, { hypothesis_template: n2 = `This is a sound of {}.` } = {}) {
      let r2 = !Array.isArray(e2);
      r2 && (e2 = [
        e2
      ]);
      let i2 = t2.map((e3) => n2.replace(`{}`, e3)), a2 = this.tokenizer(i2, {
        padding: true,
        truncation: true
      }), o2 = this.processor.feature_extractor.config.sampling_rate, s2 = await LA(e2, o2), c2 = [];
      for (let e3 of s2) {
        let n3 = await this.processor(e3), r3 = cl((await this.model({
          ...a2,
          ...n3
        })).logits_per_audio.data);
        c2.push([
          ...r3
        ].map((e4, n4) => ({
          score: e4,
          label: t2[n4]
        })));
      }
      return r2 ? c2[0] : c2;
    }
  }, ej = class extends zA {
    constructor() {
      super(...arguments);
      __publicField(this, "_default_generation_config", {});
    }
    async _call(e2, t2 = {}) {
      switch (t2 = {
        ...this._default_generation_config,
        ...t2
      }, this.model.config.model_type) {
        case `whisper`:
        case `lite-whisper`:
          return this._call_whisper(e2, t2);
        case `wav2vec2`:
        case `wav2vec2-bert`:
        case `unispeech`:
        case `unispeech-sat`:
        case `hubert`:
        case `parakeet_ctc`:
          return this._call_wav2vec2(e2, t2);
        case `moonshine`:
          return this._call_moonshine(e2, t2);
        case `cohere_asr`:
          return this._call_cohere_asr(e2, t2);
        default:
          throw Error(`AutomaticSpeechRecognitionPipeline does not support model type '${this.model.config.model_type}'.`);
      }
    }
    async _call_wav2vec2(e2, t2) {
      t2.language && P.warn('`language` parameter is not yet supported for `wav2vec2` models, defaulting to "English".'), t2.task && P.warn('`task` parameter is not yet supported for `wav2vec2` models, defaulting to "transcribe".');
      let n2 = !Array.isArray(e2), r2 = n2 ? [
        e2
      ] : e2, i2 = this.processor.feature_extractor.config.sampling_rate, a2 = await LA(r2, i2), o2 = [];
      for (let e3 of a2) {
        let t3 = await this.processor(e3), n3 = (await this.model(t3)).logits[0], r3 = [];
        for (let e4 of n3) r3.push(dl(e4.data)[1]);
        let i3 = this.tokenizer.decode(r3, {
          skip_special_tokens: true
        }).trim();
        o2.push({
          text: i3
        });
      }
      return n2 ? o2[0] : o2;
    }
    async _call_whisper(e2, t2) {
      let n2 = t2.return_timestamps ?? false, r2 = t2.chunk_length_s ?? 0, i2 = t2.force_full_sequences ?? false, a2 = t2.stride_length_s ?? null, o2 = {
        ...t2
      };
      n2 === `word` && (o2.return_token_timestamps = true, o2.return_timestamps = true);
      let s2 = !Array.isArray(e2), c2 = s2 ? [
        e2
      ] : e2, l2 = this.processor.feature_extractor.config, u2 = l2.chunk_length / this.model.config.max_source_positions, d2 = l2.hop_length, f2 = l2.sampling_rate, p2 = await LA(c2, f2), m2 = [];
      for (let e3 of p2) {
        let t3 = [];
        if (r2 > 0) {
          if (a2 === null) a2 = r2 / 6;
          else if (r2 <= a2) throw Error("`chunk_length_s` must be larger than `stride_length_s`.");
          let n3 = f2 * r2, i3 = f2 * a2, o3 = n3 - 2 * i3, s4 = 0;
          for (; ; ) {
            let r3 = s4 + n3, a3 = e3.subarray(s4, r3), c4 = await this.processor(a3), l3 = s4 === 0, u3 = r3 >= e3.length;
            if (t3.push({
              stride: [
                a3.length,
                l3 ? 0 : i3,
                u3 ? 0 : i3
              ],
              input_features: c4.input_features,
              is_last: u3
            }), u3) break;
            s4 += o3;
          }
        } else t3 = [
          {
            stride: [
              e3.length,
              0,
              0
            ],
            input_features: (await this.processor(e3)).input_features,
            is_last: true
          }
        ];
        for (let e4 of t3) {
          o2.num_frames = Math.floor(e4.stride[0] / d2);
          let t4 = await this.model.generate({
            inputs: e4.input_features,
            ...o2
          });
          if (n2 === `word`) {
            let n3 = t4.sequences.tolist()[0], r3 = t4.token_timestamps.tolist()[0], i3 = this.tokenizer.timestamp_begin, a3 = Math.max(n3.findIndex((e5) => Number(e5) >= i3), 0);
            e4.tokens = n3.slice(a3), e4.token_timestamps = r3.slice(a3).map((e5) => _l(e5, 2));
          } else e4.tokens = t4[0].tolist();
          e4.stride = e4.stride.map((e5) => e5 / f2);
        }
        let [s3, c3] = this.tokenizer._decode_asr(t3, {
          time_precision: u2,
          return_timestamps: n2,
          force_full_sequences: i2
        });
        m2.push({
          text: s3,
          ...c3
        });
      }
      return s2 ? m2[0] : m2;
    }
    async _call_moonshine(e2, t2) {
      let n2 = !Array.isArray(e2), r2 = n2 ? [
        e2
      ] : e2, i2 = this.processor.feature_extractor.config.sampling_rate, a2 = await LA(r2, i2), o2 = [];
      for (let e3 of a2) {
        let n3 = await this.processor(e3), r3 = Math.floor(e3.length / i2) * 6, a3 = await this.model.generate({
          max_new_tokens: r3,
          ...t2,
          ...n3
        }), s2 = this.tokenizer.batch_decode(a3, {
          skip_special_tokens: true
        })[0];
        o2.push({
          text: s2
        });
      }
      return n2 ? o2[0] : o2;
    }
    async _call_cohere_asr(e2, t2) {
      let n2 = !Array.isArray(e2), r2 = n2 ? [
        e2
      ] : e2, i2 = this.processor.feature_extractor, a2 = i2.config.sampling_rate, o2 = await LA(r2, a2), s2 = t2.language ?? `en`, c2 = this.processor.get_decoder_prompt_ids(s2), l2 = [];
      for (let e3 of o2) {
        let n3 = i2.split_audio(e3), r3 = [];
        for (let e4 of n3) {
          let n4 = await this.processor(e4), i3 = await this.model.generate({
            ...n4,
            decoder_input_ids: c2,
            ...t2
          }), a4 = this.tokenizer.decode(i3[0].tolist(), {
            skip_special_tokens: true
          }).trim();
          r3.push(a4);
        }
        let a3 = this.processor.constructor.join_chunks(r3, s2);
        l2.push({
          text: a3
        });
      }
      return n2 ? l2[0] : l2;
    }
  }, tj = class extends zA {
    constructor(e2) {
      super(e2);
      __publicField(this, "DEFAULT_VOCODER_ID", `Xenova/speecht5_hifigan`);
      this.vocoder = e2.vocoder ?? null;
    }
    async _prepare_speaker_embeddings(e2, t2) {
      if ((typeof e2 == `string` || e2 instanceof URL) && (e2 = new Float32Array(await (await N.fetch(e2)).arrayBuffer())), e2 instanceof Float32Array) e2 = new W(`float32`, e2, [
        e2.length
      ]);
      else if (!(e2 instanceof W)) throw Error("Speaker embeddings must be a `Tensor`, `Float32Array`, `string`, or `URL`.");
      if (t2 > 1) {
        if (e2.dims[0] === 1) e2 = e2.repeat(t2, 1);
        else if (e2.dims[0] !== t2) throw Error(`Expected speaker embeddings batch size to be 1 or ${t2}, but got ${e2.dims[0]}.`);
      }
      return e2;
    }
    _postprocess_waveform(e2, t2, n2, r2 = null) {
      let i2 = t2.data, [a2, o2] = t2.dims, s2 = r2 ? r2.data : null, c2 = [];
      for (let e3 = 0; e3 < a2; ++e3) {
        let t3 = s2 ? Math.min(Math.ceil(s2[e3]), o2) : o2, r3 = e3 * o2;
        c2.push(new hf(i2.slice(r3, r3 + t3), n2));
      }
      return Array.isArray(e2) ? c2 : c2[0];
    }
    async _call(e2, t2) {
      return this.processor ? this._call_text_to_spectrogram(e2, t2) : this.model.config.model_type === `supertonic` ? this._call_supertonic(e2, t2) : this._call_text_to_waveform(e2);
    }
    async _call_supertonic(e2, { speaker_embeddings: t2, num_inference_steps: n2, speed: r2 }) {
      if (!t2) throw Error(`Speaker embeddings must be provided for Supertonic models.`);
      let { sampling_rate: i2, style_dim: a2 } = this.model.config, o2 = this.tokenizer(e2, {
        padding: true,
        truncation: true
      }), s2 = o2.input_ids.dims[0];
      t2 = await this._prepare_speaker_embeddings(t2, s2), t2 = t2.view(s2, -1, a2);
      let { waveform: c2, durations: l2 } = await this.model.generate_speech({
        ...o2,
        style: t2,
        num_inference_steps: n2,
        speed: r2
      });
      return this._postprocess_waveform(e2, c2, i2, l2);
    }
    async _call_text_to_waveform(e2) {
      let t2 = this.tokenizer(e2, {
        padding: true,
        truncation: true
      }), { waveform: n2 } = await this.model(t2), r2 = this.model.config.sampling_rate;
      return this._postprocess_waveform(e2, n2, r2);
    }
    async _call_text_to_spectrogram(e2, { speaker_embeddings: t2 }) {
      this.vocoder || (this.vocoder = (P.info(`No vocoder specified, using default HifiGan vocoder.`), await pA.from_pretrained(this.DEFAULT_VOCODER_ID, {
        dtype: `fp32`
      })));
      let { input_ids: n2 } = this.tokenizer(e2, {
        padding: true,
        truncation: true
      }), r2 = n2.dims[0];
      t2 = await this._prepare_speaker_embeddings(t2, r2), t2 = t2.view(r2, -1);
      let { waveform: i2 } = await this.model.generate_speech(n2, t2, {
        vocoder: this.vocoder
      }), a2 = this.processor.feature_extractor.config.sampling_rate;
      return this._postprocess_waveform(e2, i2, a2);
    }
  }, nj = class extends zA {
    async _call(e2, t2 = {}) {
      let n2 = Array.isArray(e2), r2 = await IA(e2), { pixel_values: i2 } = await this.processor(r2), a2 = [];
      for (let e3 of i2) {
        e3.dims = [
          1,
          ...e3.dims
        ];
        let n3 = await this.model.generate({
          inputs: e3,
          ...t2
        }), r3 = this.tokenizer.batch_decode(n3, {
          skip_special_tokens: true
        }).map((e4) => ({
          generated_text: e4.trim()
        }));
        a2.push(r3);
      }
      return n2 ? a2 : a2[0];
    }
  }, rj = class extends zA {
    async _call(e2, { top_k: t2 = 5 } = {}) {
      let n2 = await IA(e2), { pixel_values: r2 } = await this.processor(n2), i2 = await this.model({
        pixel_values: r2
      }), { id2label: a2 } = this.model.config, o2 = [];
      for (let e3 of i2.logits) {
        let n3 = await su(new W(`float32`, cl(e3.data), e3.dims), t2), r3 = n3[0].tolist(), i3 = n3[1].tolist().map((e4, t3) => ({
          label: a2 ? a2[e4] : `LABEL_${e4}`,
          score: r3[t3]
        }));
        o2.push(i3);
      }
      return Array.isArray(e2) ? o2 : o2[0];
    }
  }, ij = {
    panoptic: `post_process_panoptic_segmentation`,
    instance: `post_process_instance_segmentation`,
    semantic: `post_process_semantic_segmentation`
  }, aj = class extends zA {
    async _call(e2, { threshold: t2 = 0.5, mask_threshold: n2 = 0.5, overlap_mask_area_threshold: r2 = 0.8, label_ids_to_fuse: i2 = null, target_sizes: a2 = null, subtask: o2 = null } = {}) {
      if (Array.isArray(e2) && e2.length !== 1) throw Error(`Image segmentation pipeline currently only supports a batch size of 1.`);
      let s2 = await IA(e2), c2 = s2.map((e3) => [
        e3.height,
        e3.width
      ]), l2 = await this.processor(s2), { inputNames: u2, outputNames: d2 } = this.model.sessions.model;
      if (!u2.includes(`pixel_values`)) {
        if (u2.length !== 1) throw Error(`Expected a single input name, but got ${u2.length} inputs: ${u2}.`);
        let e3 = u2[0];
        if (e3 in l2) throw Error(`Input name ${e3} already exists in the inputs.`);
        l2[e3] = l2.pixel_values;
      }
      let f2 = await this.model(l2), p2 = null;
      if (o2 !== null) p2 = ij[o2];
      else if (this.processor.image_processor) {
        for (let [e3, t3] of Object.entries(ij)) if (t3 in this.processor.image_processor) {
          p2 = this.processor.image_processor[t3].bind(this.processor.image_processor), o2 = e3;
          break;
        }
      }
      let m2 = this.model.config.id2label, h2 = [];
      if (!o2) {
        let e3 = f2[d2[0]];
        for (let t3 = 0; t3 < c2.length; ++t3) {
          let n3 = c2[t3], r3 = e3[t3];
          r3.data.some((e4) => e4 < -1e-5 || e4 > 1.00001) && r3.sigmoid_();
          let i3 = await Kf.fromTensor(r3.mul_(255).to(`uint8`)).resize(n3[1], n3[0]);
          h2.push({
            label: null,
            score: null,
            mask: i3
          });
        }
      } else if (o2 === `panoptic` || o2 === `instance`) {
        let e3 = p2(f2, t2, n2, r2, i2, a2 ?? c2)[0], o3 = e3.segmentation;
        for (let t3 of e3.segments_info) {
          let e4 = new Uint8ClampedArray(o3.data.length);
          for (let n4 = 0; n4 < o3.data.length; ++n4) o3.data[n4] === t3.id && (e4[n4] = 255);
          let n3 = new Kf(e4, o3.dims[1], o3.dims[0], 1);
          h2.push({
            score: t3.score,
            label: m2[t3.label_id],
            mask: n3
          });
        }
      } else if (o2 === `semantic`) {
        let { segmentation: e3, labels: t3 } = p2(f2, a2 ?? c2)[0];
        for (let n3 of t3) {
          let t4 = new Uint8ClampedArray(e3.data.length);
          for (let r4 = 0; r4 < e3.data.length; ++r4) e3.data[r4] === n3 && (t4[r4] = 255);
          let r3 = new Kf(t4, e3.dims[1], e3.dims[0], 1);
          h2.push({
            score: null,
            label: m2[n3],
            mask: r3
          });
        }
      } else throw Error(`Subtask ${o2} not supported.`);
      return h2;
    }
  }, oj = Object.freeze({
    "text-classification": {
      pipeline: BA,
      model: mA,
      default: {
        model: `Xenova/distilbert-base-uncased-finetuned-sst-2-english`
      },
      type: `text`
    },
    "token-classification": {
      pipeline: VA,
      model: hA,
      default: {
        model: `Xenova/bert-base-multilingual-cased-ner-hrl`
      },
      type: `text`
    },
    "question-answering": {
      pipeline: WA,
      model: SA,
      default: {
        model: `Xenova/distilbert-base-cased-distilled-squad`
      },
      type: `text`
    },
    "fill-mask": {
      pipeline: GA,
      model: xA,
      default: {
        model: `onnx-community/ettin-encoder-32m-ONNX`,
        dtype: `fp32`
      },
      type: `text`
    },
    summarization: {
      pipeline: qA,
      model: gA,
      default: {
        model: `Xenova/distilbart-cnn-6-6`
      },
      type: `text`
    },
    translation: {
      pipeline: JA,
      model: gA,
      default: {
        model: `Xenova/t5-small`
      },
      type: `text`
    },
    "text2text-generation": {
      pipeline: KA,
      model: gA,
      default: {
        model: `Xenova/flan-t5-small`
      },
      type: `text`
    },
    "text-generation": {
      pipeline: XA,
      model: bA,
      default: {
        model: `onnx-community/Qwen3-0.6B-ONNX`,
        dtype: `q4`
      },
      type: `text`
    },
    "zero-shot-classification": {
      pipeline: ZA,
      model: mA,
      default: {
        model: `Xenova/distilbert-base-uncased-mnli`
      },
      type: `text`
    },
    "audio-classification": {
      pipeline: QA,
      model: jA,
      default: {
        model: `Xenova/wav2vec2-base-superb-ks`
      },
      type: `audio`
    },
    "zero-shot-audio-classification": {
      pipeline: $A,
      model: pA,
      default: {
        model: `Xenova/clap-htsat-unfused`
      },
      type: `multimodal`
    },
    "automatic-speech-recognition": {
      pipeline: ej,
      model: [
        _A,
        AA
      ],
      default: {
        model: `Xenova/whisper-tiny.en`
      },
      type: `multimodal`
    },
    "text-to-audio": {
      pipeline: tj,
      model: [
        yA,
        vA
      ],
      default: {
        model: `onnx-community/Supertonic-TTS-ONNX`,
        dtype: `fp32`
      },
      type: `text`
    },
    "image-to-text": {
      pipeline: nj,
      model: CA,
      default: {
        model: `Xenova/vit-gpt2-image-captioning`
      },
      type: `multimodal`
    },
    "image-classification": {
      pipeline: rj,
      model: wA,
      default: {
        model: `Xenova/vit-base-patch16-224`
      },
      type: `multimodal`
    },
    "image-segmentation": {
      pipeline: aj,
      model: [
        TA,
        EA,
        DA
      ],
      default: {
        model: `Xenova/detr-resnet-50-panoptic`
      },
      type: `multimodal`
    },
    "background-removal": {
      pipeline: class extends aj {
        async _call(e2, t2 = {}) {
          let n2 = await IA(e2), r2 = await super._call(e2, t2), i2 = n2.map((e3, t3) => {
            let n3 = e3.clone();
            return n3.putAlpha(r2[t3].mask), n3;
          });
          return Array.isArray(e2) ? i2 : i2[0];
        }
      },
      model: [
        TA,
        EA,
        DA
      ],
      default: {
        model: `Xenova/modnet`
      },
      type: `image`
    },
    "zero-shot-image-classification": {
      pipeline: class extends zA {
        async _call(e2, t2, { hypothesis_template: n2 = `This is a photo of {}` } = {}) {
          let r2 = Array.isArray(e2), i2 = await IA(e2), a2 = t2.map((e3) => n2.replace(`{}`, e3)), o2 = this.tokenizer(a2, {
            padding: this.model.config.model_type !== `siglip` || `max_length`,
            truncation: true
          }), { pixel_values: s2 } = await this.processor(i2), c2 = await this.model({
            ...o2,
            pixel_values: s2
          }), l2 = this.model.config.model_type === `siglip` ? (e3) => e3.sigmoid().data : (e3) => cl(e3.data), u2 = [];
          for (let e3 of c2.logits_per_image) {
            let n3 = [
              ...l2(e3)
            ].map((e4, n4) => ({
              score: e4,
              label: t2[n4]
            }));
            n3.sort((e4, t3) => t3.score - e4.score), u2.push(n3);
          }
          return r2 ? u2 : u2[0];
        }
      },
      model: pA,
      default: {
        model: `Xenova/clip-vit-base-patch32`
      },
      type: `multimodal`
    },
    "object-detection": {
      pipeline: class extends zA {
        async _call(e2, { threshold: t2 = 0.9, percentage: n2 = false } = {}) {
          let r2 = Array.isArray(e2);
          if (r2 && e2.length !== 1) throw Error(`Object detection pipeline currently only supports a batch size of 1.`);
          let i2 = await IA(e2), a2 = n2 ? null : i2.map((e3) => [
            e3.height,
            e3.width
          ]), { pixel_values: o2, pixel_mask: s2 } = await this.processor(i2), c2 = await this.model({
            pixel_values: o2,
            pixel_mask: s2
          }), l2 = this.processor.image_processor.post_process_object_detection(c2, t2, a2), { id2label: u2 } = this.model.config, d2 = l2.map((e3) => e3.boxes.map((t3, r3) => ({
            score: e3.scores[r3],
            label: u2[e3.classes[r3]],
            box: RA(t3, !n2)
          })));
          return r2 ? d2 : d2[0];
        }
      },
      model: OA,
      default: {
        model: `Xenova/detr-resnet-50`
      },
      type: `multimodal`
    },
    "zero-shot-object-detection": {
      pipeline: class extends zA {
        async _call(e2, t2, { threshold: n2 = 0.1, top_k: r2 = null, percentage: i2 = false } = {}) {
          let a2 = Array.isArray(e2), o2 = await IA(e2), s2 = this.tokenizer(t2, {
            padding: true,
            truncation: true
          }), c2 = await this.processor(o2), l2 = [];
          for (let e3 = 0; e3 < o2.length; ++e3) {
            let a3 = o2[e3], u2 = i2 ? null : [
              [
                a3.height,
                a3.width
              ]
            ], d2 = c2.pixel_values[e3].unsqueeze_(0), f2 = await this.model({
              ...s2,
              pixel_values: d2
            }), p2;
            if (`post_process_grounded_object_detection` in this.processor) {
              let e4 = this.processor.post_process_grounded_object_detection(f2, s2.input_ids, {
                box_threshold: n2,
                text_threshold: n2,
                target_sizes: u2
              })[0];
              p2 = e4.boxes.map((t3, n3) => ({
                score: e4.scores[n3],
                label: e4.labels[n3],
                box: RA(t3, !i2)
              }));
            } else {
              let e4 = this.processor.image_processor.post_process_object_detection(f2, n2, u2, true)[0];
              p2 = e4.boxes.map((n3, r3) => ({
                score: e4.scores[r3],
                label: t2[e4.classes[r3]],
                box: RA(n3, !i2)
              }));
            }
            p2.sort((e4, t3) => t3.score - e4.score), r2 !== null && (p2 = p2.slice(0, r2)), l2.push(p2);
          }
          return a2 ? l2 : l2[0];
        }
      },
      model: kA,
      default: {
        model: `Xenova/owlvit-base-patch32`
      },
      type: `multimodal`
    },
    "document-question-answering": {
      pipeline: class extends zA {
        constructor() {
          super(...arguments);
          __publicField(this, "_default_generation_config", {
            max_new_tokens: 256
          });
        }
        async _call(e2, t2, n2 = {}) {
          if (Array.isArray(e2)) {
            if (e2.length !== 1) throw Error(`Document Question Answering pipeline currently only supports a batch size of 1.`);
            e2 = e2[0];
          }
          let r2 = (await IA(e2))[0], { pixel_values: i2 } = await this.processor(r2), a2 = `<s_docvqa><s_question>${t2}</s_question><s_answer>`, o2 = this.tokenizer(a2, {
            add_special_tokens: false,
            padding: true,
            truncation: true
          }).input_ids, s2 = await this.model.generate({
            inputs: i2,
            max_length: this.model.config.decoder.max_position_embeddings,
            decoder_input_ids: o2,
            ...this._default_generation_config,
            ...n2
          }), c2 = this.tokenizer.batch_decode(s2)[0].match(/<s_answer>(.*?)<\/s_answer>/), l2 = null;
          return c2 && c2.length >= 2 && (l2 = c2[1].trim()), [
            {
              answer: l2
            }
          ];
        }
      },
      model: MA,
      default: {
        model: `Xenova/donut-base-finetuned-docvqa`
      },
      type: `multimodal`
    },
    "image-to-image": {
      pipeline: class extends zA {
        async _call(e2) {
          let t2 = await IA(e2), n2 = await this.processor(t2), r2 = await this.model(n2), i2 = [];
          for (let e3 of r2.reconstruction) {
            let t3 = e3.squeeze().clamp_(0, 1).mul_(255).round_().to(`uint8`);
            i2.push(Kf.fromTensor(t3));
          }
          return Array.isArray(e2) ? i2 : i2[0];
        }
      },
      model: NA,
      default: {
        model: `Xenova/swin2SR-classical-sr-x2-64`
      },
      type: `image`
    },
    "depth-estimation": {
      pipeline: class extends zA {
        async _call(e2) {
          let t2 = await IA(e2), n2 = await this.processor(t2), { predicted_depth: r2 } = await this.model(n2), i2 = [];
          for (let e3 = 0; e3 < t2.length; ++e3) {
            let n3 = r2[e3], [a2, o2] = n3.dims.slice(-2), [s2, c2] = t2[e3].size, l2 = (await au(n3.view(1, 1, a2, o2), {
              size: [
                c2,
                s2
              ],
              mode: `bilinear`
            })).view(c2, s2), u2 = l2.min().item(), d2 = l2.max().item(), f2 = l2.sub(u2).div_(d2 - u2).mul_(255).to(`uint8`).unsqueeze(0), p2 = Kf.fromTensor(f2);
            i2.push({
              predicted_depth: l2,
              depth: p2
            });
          }
          return Array.isArray(e2) ? i2 : i2[0];
        }
      },
      model: PA,
      default: {
        model: `onnx-community/depth-anything-v2-small`
      },
      type: `image`
    },
    "feature-extraction": {
      pipeline: class extends zA {
        async _call(e2, { pooling: t2 = `none`, normalize: n2 = false, quantize: r2 = false, precision: i2 = `binary` } = {}) {
          let a2 = this.tokenizer(e2, {
            padding: true,
            truncation: true
          }), o2 = await this.model(a2), s2 = o2.last_hidden_state ?? o2.logits ?? o2.token_embeddings;
          switch (t2) {
            case `none`:
              break;
            case `mean`:
              s2 = uu(s2, a2.attention_mask);
              break;
            case `first_token`:
            case `cls`:
              s2 = s2.slice(null, 0);
              break;
            case `last_token`:
            case `eos`:
              s2 = s2.slice(null, -1);
              break;
            default:
              throw Error(`Pooling method '${t2}' not supported.`);
          }
          return n2 && (s2 = s2.normalize(2, -1)), r2 && (s2 = Ou(s2, i2)), s2;
        }
      },
      model: pA,
      default: {
        model: `onnx-community/all-MiniLM-L6-v2-ONNX`,
        dtype: `fp32`
      },
      type: `text`
    },
    "image-feature-extraction": {
      pipeline: class extends zA {
        async _call(e2, { pool: t2 = null } = {}) {
          let n2 = await IA(e2), { pixel_values: r2 } = await this.processor(n2), i2 = await this.model({
            pixel_values: r2
          }), a2;
          if (t2) {
            if (!(`pooler_output` in i2)) throw Error(`No pooled output was returned. Make sure the model has a 'pooler' layer when using the 'pool' option.`);
            a2 = i2.pooler_output;
          } else a2 = i2.last_hidden_state ?? i2.logits ?? i2.image_embeds;
          return a2;
        }
      },
      model: [
        FA,
        pA
      ],
      default: {
        model: `onnx-community/dinov3-vits16-pretrain-lvd1689m-ONNX`,
        dtype: `fp32`
      },
      type: `image`
    }
  }), sj = Object.freeze({
    "sentiment-analysis": `text-classification`,
    ner: `token-classification`,
    asr: `automatic-speech-recognition`,
    "text-to-speech": `text-to-audio`,
    embeddings: `feature-extraction`
  });
  async function cj(e2) {
    if (!e2) throw Error(`modelId is required`);
    return (await Jc(e2, zd, {})).exists ? [
      zd
    ] : [];
  }
  async function lj(e2, { config: t2 = null, dtype: n2 = null, device: r2 = null, model_file_name: i2 = null, include_tokenizer: a2 = true, include_processor: o2 = true } = {}) {
    let s2 = await kg(e2, {
      config: t2,
      dtype: n2,
      device: r2,
      model_file_name: i2
    });
    if (a2) {
      let t3 = await ku(e2);
      s2.push(...t3);
    }
    if (o2) {
      let t3 = await cj(e2);
      s2.push(...t3);
    }
    return s2;
  }
  async function uj(e2, t2, n2 = {}) {
    e2 = sj[e2] ?? e2;
    let r2 = oj[e2];
    if (!r2) throw Error(`Unsupported pipeline task: ${e2}. Must be one of [${Object.keys(oj).join(`, `)}]`);
    let { type: i2 } = r2, a2 = i2 !== `audio` && i2 !== `image`, o2 = i2 !== `text`, s2 = await lj(t2, {
      ...n2,
      include_tokenizer: a2,
      include_processor: o2
    });
    if (e2 === `text-generation`) {
      let e3 = Tg(Dg(await Og(t2, n2)));
      if (e3) {
        let t3 = Object.values(e3).map((e4) => `onnx/${e4}`);
        return s2.filter((e4) => !e4.startsWith(`onnx/`) || t3.some((t4) => e4.startsWith(t4)));
      }
    }
    return s2;
  }
  dj = async function(e2, t2 = null, { progress_callback: n2 = null, config: r2 = null, cache_dir: i2 = null, local_files_only: a2 = false, revision: o2 = `main`, device: s2 = null, dtype: c2 = null, subfolder: l2 = `onnx`, use_external_data_format: u2 = null, model_file_name: d2 = null, session_options: f2 = {} } = {}) {
    e2 = sj[e2] ?? e2;
    let p2 = oj[e2.split(`_`, 1)[0]];
    if (!p2) throw Error(`Unsupported pipeline: ${e2}. Must be one of [${Object.keys(oj)}]`);
    t2 || (t2 = p2.default.model, P.info(`No model specified. Using default model: "${t2}".`), !c2 && p2.default.dtype && (c2 = p2.default.dtype));
    let m2 = await uj(e2, t2, {
      device: s2,
      dtype: c2
    }), h2 = {};
    if (n2) try {
      (await Promise.all(m2.map(async (e3) => Jc(t2, e3)))).forEach((e3, t3) => {
        e3.exists && (h2[m2[t3]] = {
          loaded: 0,
          total: e3.size ?? 0
        });
      });
    } catch (e3) {
      P.warn(`Unable to fetch model file metadata for total progress tracking: ${e3}`);
    }
    let g2 = {
      progress_callback: n2 ? new ni(n2, h2) : void 0,
      config: r2,
      cache_dir: i2,
      local_files_only: a2,
      revision: o2,
      device: s2,
      dtype: c2,
      subfolder: l2,
      use_external_data_format: u2,
      model_file_name: d2,
      session_options: f2
    }, _2 = m2.includes(`tokenizer.json`), v2 = m2.includes(`preprocessor_config.json`), y2 = p2.model, b2;
    if (Array.isArray(y2)) {
      let n3 = r2 ?? await Fh.from_pretrained(t2, g2), { model_type: i3 } = n3, a3 = y2.find((e3) => e3.supports(i3));
      if (!a3) throw Error(`Unsupported model type "${i3}" for task "${e2}". None of the candidate model classes support this type.`);
      b2 = a3.from_pretrained(t2, {
        ...g2,
        config: n3
      });
    } else b2 = y2.from_pretrained(t2, g2);
    let [x2, S2, C2] = await Promise.all([
      _2 ? K.from_pretrained(t2, g2) : null,
      v2 ? kh.from_pretrained(t2, g2) : null,
      b2
    ]), w2 = {
      task: e2,
      model: C2
    };
    x2 && (w2.tokenizer = x2), S2 && (w2.processor = S2), ti(n2, {
      status: `ready`,
      task: e2,
      model: t2
    });
    let T2 = p2.pipeline;
    return new T2(w2);
  };
  M.IS_PROCESS_AVAILABLE, Object.keys($l);
})();
export {
  __tla,
  N as env,
  dj as pipeline
};
