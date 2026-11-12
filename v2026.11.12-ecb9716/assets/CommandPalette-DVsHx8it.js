const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/transformers.web-wqVoWwvu.js","assets/rolldown-runtime-COiEfhsA.js"])))=>i.map(i=>d[i]);
import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n, j as r } from "./three-drei-_EcrAYRL.js";
import { a as i, i as a, n as o, o as s, s as c } from "./dist-uaNeKfmY.js";
import { m as l } from "./dist-Dt-xZb1V.js";
import { t as u } from "./Cube.es-BlHKvJW5.js";
import { a as d, c as f, d as p, f as m, g as ee, h, i as g, l as te, m as _, n as v, o as y, p as b, r as x, s as S, t as C, u as w } from "./Anchor.es-CYd8LZPU.js";
import { t as T } from "./Globe.es-CtPXcGI8.js";
import { t as E } from "./ArrowCounterClockwise.es-dr8LpPPC.js";
import { t as D } from "./FolderOpen.es-D8ZYtesS.js";
import { t as O } from "./Export.es-BhsxaV24.js";
import { t as k } from "./Info.es-D2p_p8Bm.js";
import { t as A } from "./Trash.es-B0Vt7_Be.js";
import { t as j } from "./Copy.es-DkwJABGZ.js";
import { t as M } from "./X.es-eqQvie4c.js";
import { t as ne } from "./MagnifyingGlass.es-MOWF6F1V.js";
import { t as N } from "./Package.es-B2tRez2J.js";
import { t as P } from "./Sparkle.es-Bqy8LSrV.js";
import { n as re } from "./doc-id-D24Jn9gF.js";
import { t as ie } from "./Play.es-CbJ_KDSj.js";
import { t as ae } from "./Plus.es-BDPop4l-.js";
import { E as F, Et as oe, J as I, Z as L, f as se, j as ce, __tla as __tla_0 } from "./dist-_2fbu5WV.js";
import { t as R } from "./preload-helper-B2hOVYmu.js";
import { t as z } from "./notification-store-BYW1uPuc.js";
import { t as B } from "./onboarding-store-BxlWWPNy.js";
import { n as le } from "./locale-store-DZ0YyEbC.js";
import { t as V } from "./utils-D0T3A-kS.js";
import { n as ue, t as de } from "./examples-C6e9Lsud.js";
import { t as fe, __tla as __tla_1 } from "./analytics-cz4f4EJ7.js";
let De;
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
  r();
  var H = e(t(), 1), U = n(), W = Symbol.for(`react.lazy`), G = H.use;
  function K(e2) {
    return typeof e2 == `object` && !!e2 && `then` in e2;
  }
  function q(e2) {
    return typeof e2 == `object` && !!e2 && `$$typeof` in e2 && e2.$$typeof === W && `_payload` in e2 && K(e2._payload);
  }
  function J(e2) {
    let t2 = Y(e2), n2 = H.forwardRef((e3, n3) => {
      let { children: r2, ...i2 } = e3;
      q(r2) && typeof G == `function` && (r2 = G(r2._payload));
      let a2 = H.Children.toArray(r2), o2 = a2.find(Z);
      if (o2) {
        let e4 = o2.props.children, r3 = a2.map((t3) => t3 === o2 ? H.Children.count(e4) > 1 ? H.Children.only(null) : H.isValidElement(e4) ? e4.props.children : null : t3);
        return (0, U.jsx)(t2, {
          ...i2,
          ref: n3,
          children: H.isValidElement(e4) ? H.cloneElement(e4, void 0, r3) : null
        });
      }
      return (0, U.jsx)(t2, {
        ...i2,
        ref: n3,
        children: r2
      });
    });
    return n2.displayName = `${e2}.Slot`, n2;
  }
  function Y(e2) {
    let t2 = H.forwardRef((e3, t3) => {
      let { children: n2, ...r2 } = e3;
      if (q(n2) && typeof G == `function` && (n2 = G(n2._payload)), H.isValidElement(n2)) {
        let e4 = pe(n2), i2 = Q(r2, n2.props);
        return n2.type !== H.Fragment && (i2.ref = t3 ? l(t3, e4) : e4), H.cloneElement(n2, i2);
      }
      return H.Children.count(n2) > 1 ? H.Children.only(null) : null;
    });
    return t2.displayName = `${e2}.SlotClone`, t2;
  }
  var X = Symbol(`radix.slottable`);
  function Z(e2) {
    return H.isValidElement(e2) && typeof e2.type == `function` && `__radixId` in e2.type && e2.type.__radixId === X;
  }
  function Q(e2, t2) {
    let n2 = {
      ...t2
    };
    for (let r2 in t2) {
      let i2 = e2[r2], a2 = t2[r2];
      /^on[A-Z]/.test(r2) ? i2 && a2 ? n2[r2] = (...e3) => {
        let t3 = a2(...e3);
        return i2(...e3), t3;
      } : i2 && (n2[r2] = i2) : r2 === `style` ? n2[r2] = {
        ...i2,
        ...a2
      } : r2 === `className` && (n2[r2] = [
        i2,
        a2
      ].filter(Boolean).join(` `));
    }
    return {
      ...e2,
      ...n2
    };
  }
  function pe(e2) {
    var _a, _b;
    let t2 = (_a = Object.getOwnPropertyDescriptor(e2.props, `ref`)) == null ? void 0 : _a.get, n2 = t2 && `isReactWarning` in t2 && t2.isReactWarning;
    return n2 ? e2.ref : (t2 = (_b = Object.getOwnPropertyDescriptor(e2, `ref`)) == null ? void 0 : _b.get, n2 = t2 && `isReactWarning` in t2 && t2.isReactWarning, n2 ? e2.props.ref : e2.props.ref || e2.ref);
  }
  var me = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`
  ].reduce((e2, t2) => {
    let n2 = J(`Primitive.${t2}`), r2 = H.forwardRef((e3, r3) => {
      let { asChild: i2, ...a2 } = e3, o2 = i2 ? n2 : t2;
      return typeof window < `u` && (window[Symbol.for(`radix-ui`)] = true), (0, U.jsx)(o2, {
        ...a2,
        ref: r3
      });
    });
    return r2.displayName = `Primitive.${t2}`, {
      ...e2,
      [t2]: r2
    };
  }, {}), he = Object.freeze({
    position: `absolute`,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: `hidden`,
    clip: `rect(0, 0, 0, 0)`,
    whiteSpace: `nowrap`,
    wordWrap: `normal`
  }), ge = `VisuallyHidden`, _e = H.forwardRef((e2, t2) => (0, U.jsx)(me.span, {
    ...e2,
    ref: t2,
    style: {
      ...he,
      ...e2.style
    }
  }));
  _e.displayName = ge;
  var ve = `campedersen/cad0-mini`, ye = `You are a CAD code generator. Generate "VCode" - a text representation of 3D geometry.

Format:
- C x y z = Cube (dimensions in mm)
- Y r h = Cylinder (radius, height)
- S r = Sphere (radius)
- T n x y z = Translate node n
- R n x y z = Rotate node n (degrees)
- U a b = Union nodes
- D a b = Difference (subtract b from a)

Node IDs are sequential from 0. Output ONLY the IR code, no explanations.

Alternative: You may also output loon source (starts with [):
[cube 20.0 20.0 20.0]
[pipe [cube 50.0 30.0 5.0] [difference [cylinder 3.0 10.0]] [fillet 1.0]]`, $ = {
    pipeline: null,
    loading: null,
    loaded: false
  };
  async function be() {
    if (!(`gpu` in navigator)) return false;
    try {
      return await navigator.gpu.requestAdapter() != null;
    } catch {
      return false;
    }
  }
  async function xe(e2, t2 = ve) {
    if (!($.loaded && $.pipeline)) return $.loading || ($.loading = (async () => {
      try {
        e2 == null ? void 0 : e2(0, 100, `Loading inference library...`);
        let { pipeline: n2, env: r2 } = await R(async () => {
          let { pipeline: e3, env: t3 } = await import("./transformers.web-wqVoWwvu.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            pipeline: e3,
            env: t3
          };
        }, __vite__mapDeps([0,1]));
        r2.cacheDir = `.cache/transformers`, r2.allowLocalModels = false;
        let i2 = await be() ? `webgpu` : `wasm`;
        e2 == null ? void 0 : e2(10, 100, `Downloading model (${i2})...`), $.pipeline = await n2(`text-generation`, t2, {
          device: i2,
          progress_callback: (t3) => {
            if (t3.status === `progress` && t3.progress != null) {
              let n3 = Math.round(10 + t3.progress * 0.85), r3 = t3.loaded != null && t3.total != null ? {
                loaded: t3.loaded,
                total: t3.total
              } : void 0;
              e2 == null ? void 0 : e2(n3, 100, `Downloading model...`, r3);
            } else t3.status === `ready` && (e2 == null ? void 0 : e2(95, 100, `Initializing model...`));
          }
        }), $.loaded = true, e2 == null ? void 0 : e2(100, 100, `Model ready`);
      } catch (e3) {
        throw $.loading = null, e3;
      }
    })()), $.loading;
  }
  async function Se(e2, t2, n2, r2) {
    var _a, _b;
    let i2 = performance.now(), a2 = $.loaded;
    if (await xe(n2), r2 == null ? void 0 : r2.throwIfAborted(), !$.pipeline) throw Error(`Failed to load model`);
    let o2 = [
      {
        role: `system`,
        content: ye
      },
      {
        role: `user`,
        content: e2
      }
    ], s2 = await $.pipeline(o2, {
      max_new_tokens: 256,
      temperature: 0.3,
      do_sample: true,
      return_full_text: false,
      ...t2 && {
        callback_function: (e3) => {
          var _a2;
          t2(((_a2 = e3 == null ? void 0 : e3.token) == null ? void 0 : _a2.text) ?? ``, ``);
        }
      }
    }), c2 = ``;
    if (Array.isArray(s2) && ((_a = s2[0]) == null ? void 0 : _a.generated_text)) {
      let e3 = s2[0].generated_text;
      typeof e3 == `string` ? c2 = e3 : Array.isArray(e3) && (c2 = ((_b = e3[e3.length - 1]) == null ? void 0 : _b.content) ?? ``);
    }
    c2 = Ce(c2);
    let l2 = performance.now() - i2;
    return {
      ir: c2,
      durationMs: l2,
      fromCache: a2
    };
  }
  function Ce(e2) {
    var _a, _b, _c;
    let t2 = e2.trim();
    t2.startsWith("```") && (t2 = t2.replace(/^```(?:ir|text|plaintext)?\n?/, ``).replace(/\n?```$/, ``));
    let n2 = t2.split(`
`), r2 = [
      `C`,
      `Y`,
      `S`,
      `K`,
      `T`,
      `R`,
      `X`,
      `U`,
      `D`,
      `I`,
      `LP`,
      `CP`,
      `SH`,
      `SK`,
      `E`,
      `V`
    ], i2 = 0, a2 = n2.length;
    for (let e3 = 0; e3 < n2.length; e3++) {
      let t3 = ((_b = (_a = n2[e3]) == null ? void 0 : _a.trim().split(/\s+/)) == null ? void 0 : _b[0]) ?? ``;
      if (r2.includes(t3)) {
        i2 = e3;
        break;
      }
    }
    for (let e3 = n2.length - 1; e3 >= i2; e3--) {
      let t3 = ((_c = n2[e3]) == null ? void 0 : _c.trim()) ?? ``;
      if (!t3) continue;
      let i3 = t3.split(/\s+/)[0] ?? ``;
      if (r2.includes(i3) || i3 === `END` || i3 === `L` || i3 === `A`) {
        a2 = e3 + 1;
        break;
      }
    }
    return n2.slice(i2, a2).join(`
`).trim();
  }
  var we = {
    Cube: u,
    Cylinder: h,
    Globe: T,
    ArrowsOutCardinal: p,
    ArrowClockwise: w,
    ArrowsOut: te,
    ArrowCounterClockwise: E,
    Unite: _,
    Subtract: b,
    Intersect: m,
    FloppyDisk: x,
    FolderOpen: D,
    Export: O,
    GridFour: y,
    CubeTransparent: S,
    SidebarSimple: d,
    Sun: g,
    Info: k,
    Trash: A,
    Copy: j,
    X: M,
    Package: N,
    PlusSquare: v,
    Anchor: C,
    ArrowsClockwise: w,
    ArrowsHorizontal: f,
    Sparkle: P
  };
  function Te(e2, t2) {
    return t2 ? e2 === 1 ? [
      {
        id: `ai-holes`,
        label: `Add mounting holes`,
        prompt: `add 4 M3 mounting holes to the corners`
      },
      {
        id: `ai-taller`,
        label: `Make it taller`,
        prompt: `make this part twice as tall`
      },
      {
        id: `ai-fillet`,
        label: `Add rounded edges`,
        prompt: `add 2mm fillets to all edges`
      }
    ] : e2 === 2 ? [
      {
        id: `ai-connect`,
        label: `Connect these parts`,
        prompt: `create a connector between these two parts`
      },
      {
        id: `ai-align`,
        label: `Align and join`,
        prompt: `align these parts and join them`
      }
    ] : [
      {
        id: `ai-complement`,
        label: `Add a matching part`,
        prompt: `create a complementary part that fits with the existing geometry`
      },
      {
        id: `ai-base`,
        label: `Create a base plate`,
        prompt: `create a base plate to mount the existing parts`
      }
    ] : [
      {
        id: `ai-bracket`,
        label: `Create a mounting bracket`,
        prompt: `mounting bracket with 4 corner holes, 50mm wide`
      },
      {
        id: `ai-enclosure`,
        label: `Create an electronics enclosure`,
        prompt: `electronics enclosure box 80x60x40mm with ventilation slots`
      },
      {
        id: `ai-standoff`,
        label: `Create standoffs`,
        prompt: `M3 standoff 10mm tall with mounting holes`
      }
    ];
  }
  function Ee(e2, t2) {
    if (!t2) return e2;
    let n2 = e2.toLowerCase().indexOf(t2.toLowerCase());
    return n2 === -1 ? e2 : (0, U.jsxs)(U.Fragment, {
      children: [
        e2.slice(0, n2),
        (0, U.jsx)(`span`, {
          className: `text-brand font-medium`,
          children: e2.slice(n2, n2 + t2.length)
        }),
        e2.slice(n2 + t2.length)
      ]
    });
  }
  De = function({ open: e2, onOpenChange: t2, onAboutOpen: n2 }) {
    let [r2, l2] = (0, H.useState)(``), [d2, f2] = (0, H.useState)(0), [p2, m2] = (0, H.useState)(false), [h2, g2] = (0, H.useState)(``), te2 = (0, H.useRef)(null), _2 = (0, H.useRef)(null), v2 = (0, H.useRef)(null), y2 = (0, H.useRef)(null), b2 = I((e3) => e3.loadDocument), x2 = B((e3) => e3.startGuidedFlow), S2 = B((e3) => e3.incrementProjectsCreated), C2 = I((e3) => e3.parts), w2 = I((e3) => e3.addPrimitive), T2 = L((e3) => e3.selectedPartIds), E2 = L((e3) => e3.select), O2 = L((e3) => e3.setTransformMode);
    le((e3) => e3.locale);
    let k2 = (0, H.useCallback)(() => t2(false), [
      t2
    ]), A2 = ee({
      onDismiss: k2,
      onAboutOpen: n2,
      surface: `palette`
    }), j2 = (0, H.useCallback)(async (e3) => {
      let n3 = new AbortController();
      y2.current = n3, m2(true), t2(false);
      let r3 = z.getState(), i2 = I.getState(), a2 = r3.startAIOperation(e3, [
        `Loading AI model`,
        `Generating geometry`,
        `Building mesh`
      ]);
      try {
        r3.updateAIProgress(a2, 0, 10), g2(`Loading AI model...`);
        let t3 = await Se(e3, void 0, (e4, t4, n4) => {
          let i3 = Math.round(e4 / t4 * 100);
          g2(n4), (n4.includes(`Loading`) || n4.includes(`Initializing`)) && r3.updateAIProgress(a2, 0, Math.min(i3 * 0.7, 70));
        }, n3.signal), o2 = t3.ir, s2 = t3.durationMs;
        r3.updateAIProgress(a2, 1, 80), g2(`Building geometry...`);
        let c2 = oe(o2);
        r3.updateAIProgress(a2, 2, 95), i2.addFromIR(c2, e3.slice(0, 30)), r3.completeAIOperation(a2, {
          type: `success`,
          title: `Generated locally`,
          description: `Created in ${(s2 / 1e3).toFixed(1)}s`,
          actions: [
            {
              label: `Undo`,
              onClick: () => I.getState().undo(),
              variant: `secondary`
            }
          ]
        });
      } catch (e4) {
        e4 instanceof Error && e4.name === `AbortError` ? r3.cancelAIOperation(a2) : (console.error(`AI generation failed:`, e4), r3.failAIOperation(a2, e4 instanceof Error ? e4.message : `Generation failed`));
      } finally {
        y2.current = null, m2(false), g2(``);
      }
    }, [
      t2
    ]), M2 = (0, H.useCallback)(async (e3) => {
      await be() ? j2(e3) : z.getState().addToast(`AI generation needs WebGPU (runs on-device only)`, `error`);
    }, [
      j2
    ]), N2 = (0, H.useMemo)(() => Te(T2.size, C2.length > 0), [
      T2.size,
      C2.length
    ]), R2 = C2.length === 0 && !r2.trim(), W2 = (0, H.useCallback)(() => {
      S2(), x2(), t2(false);
    }, [
      S2,
      x2,
      t2
    ]), G2 = (0, H.useCallback)(() => {
      S2();
      let e3 = w2(`cube`);
      E2(e3), O2(`translate`), t2(false);
    }, [
      S2,
      w2,
      E2,
      O2,
      t2
    ]), K2 = (0, H.useCallback)(() => {
      var _a;
      (_a = v2.current) == null ? void 0 : _a.click();
    }, []), q2 = (0, H.useCallback)((e3) => {
      var _a;
      let n3 = (_a = e3.target.files) == null ? void 0 : _a[0];
      if (!n3) return;
      let r3 = new FileReader();
      r3.onload = (e4) => {
        var _a2;
        try {
          let n4 = (_a2 = e4.target) == null ? void 0 : _a2.result, r4 = se(n4);
          b2(r4), t2(false);
        } catch (e5) {
          console.error(`Failed to parse file:`, e5), z.getState().addToast(F(`palette.failed_to_load`), `error`);
        }
      }, r3.readAsText(n3), e3.target.value = ``;
    }, [
      b2,
      t2
    ]), J2 = (0, H.useCallback)((e3) => {
      fe.templateOpened(e3.id), e3.urdf ? window.dispatchEvent(new CustomEvent(`vcad:load-example`, {
        detail: {
          urdf: e3.urdf
        }
      })) : e3.file && b2(de(e3.file)), t2(false);
    }, [
      b2,
      t2
    ]), Y2 = (0, H.useMemo)(() => {
      if (!r2.trim()) return A2;
      let e3 = r2.toLowerCase();
      return A2.filter((t3) => t3.label.toLowerCase().includes(e3) ? true : t3.keywords.some((t4) => t4.includes(e3)));
    }, [
      A2,
      r2
    ]), X2 = r2.trim().length > 2 || Y2.length === 0, Z2 = r2.trim();
    (0, H.useEffect)(() => {
      f2(0);
    }, [
      r2
    ]), (0, H.useEffect)(() => {
      e2 && (l2(``), f2(0));
    }, [
      e2
    ]), (0, H.useEffect)(() => {
      let e3 = _2.current;
      if (!e3) return;
      let t3 = e3.querySelector(`[data-selected=true]`);
      t3 && t3.scrollIntoView({
        block: `nearest`
      });
    }, [
      d2
    ]);
    let Q2 = (0, H.useCallback)((e3) => {
      (!e3.enabled || e3.enabled()) && e3.action();
    }, []);
    function pe2(e3) {
      var _a;
      if (p2) e3.key === `Escape` && ((_a = y2.current) == null ? void 0 : _a.abort());
      else switch (e3.key) {
        case `ArrowDown`:
          e3.preventDefault(), f2((e4) => Math.min(e4 + 1, Y2.length - 1));
          break;
        case `ArrowUp`:
          e3.preventDefault(), f2((e4) => Math.max(e4 - 1, 0));
          break;
        case `Enter`:
          if (e3.preventDefault(), Y2.length > 0 && d2 < Y2.length) {
            let e4 = Y2[d2];
            e4 && Q2(e4);
          } else if (Z2) {
            let e4 = ce.getState();
            e4.setOpen(true);
            let n3 = Array.from(T2).map((e5) => {
              let t3 = C2.find((t4) => t4.id === e5);
              return t3 ? {
                partId: e5,
                partName: t3.name,
                geometryType: `part`
              } : null;
            }).filter(Boolean);
            e4.sendMessage(Z2, n3), t2(false);
          }
          break;
        case `Escape`:
          t2(false);
      }
    }
    return (0, U.jsx)(s, {
      open: e2,
      onOpenChange: t2,
      children: (0, U.jsxs)(i, {
        children: [
          (0, U.jsx)(a, {
            className: `fixed inset-0 z-40 bg-black/30`
          }),
          (0, U.jsxs)(o, {
            className: `fixed left-1/2 top-[20%] z-50 w-full max-w-md -translate-x-1/2 rounded-xl border border-border bg-surface shadow-xl overflow-hidden`,
            onKeyDown: pe2,
            "aria-describedby": void 0,
            children: [
              (0, U.jsx)(_e, {
                children: (0, U.jsx)(c, {
                  children: F(`palette.title`)
                })
              }),
              (0, U.jsxs)(`div`, {
                className: `flex items-center gap-2 border-b border-border px-3 py-2`,
                children: [
                  (0, U.jsx)(ne, {
                    size: 16,
                    className: `text-text-muted`
                  }),
                  (0, U.jsx)(`input`, {
                    ref: te2,
                    type: `text`,
                    value: r2,
                    onChange: (e3) => l2(e3.target.value),
                    placeholder: F(`palette.placeholder`),
                    className: `flex-1 bg-transparent text-sm text-text outline-none placeholder:text-text-muted`,
                    autoFocus: true
                  }),
                  (0, U.jsx)(`kbd`, {
                    className: `rounded-sm bg-fill px-1.5 py-0.5 text-[10px] font-mono text-text-muted`,
                    children: `esc`
                  })
                ]
              }),
              (0, U.jsx)(`input`, {
                ref: v2,
                type: `file`,
                accept: `.vcad,.json`,
                onChange: q2,
                className: `hidden`
              }),
              (0, U.jsxs)(`div`, {
                ref: _2,
                className: `max-h-[400px] overflow-y-auto p-1`,
                children: [
                  p2 && (0, U.jsxs)(`div`, {
                    className: `flex items-center gap-3 px-3 py-4 border-b border-border mb-1`,
                    children: [
                      (0, U.jsx)(re, {
                        size: 16,
                        className: `text-brand animate-spin`
                      }),
                      (0, U.jsx)(`span`, {
                        className: `text-sm text-text-muted`,
                        children: h2 || F(`palette.generating`)
                      })
                    ]
                  }),
                  !p2 && R2 && (0, U.jsxs)(U.Fragment, {
                    children: [
                      (0, U.jsxs)(`div`, {
                        className: `flex flex-col items-center py-4 border-b border-border mb-1`,
                        children: [
                          (0, U.jsxs)(`h1`, {
                            className: `text-xl font-bold tracking-tighter text-text`,
                            children: [
                              `vcad`,
                              (0, U.jsx)(`span`, {
                                className: `text-brand`,
                                children: `.`
                              })
                            ]
                          }),
                          (0, U.jsx)(`p`, {
                            className: `text-[10px] text-text-muted`,
                            children: F(`welcome.tagline`)
                          })
                        ]
                      }),
                      (0, U.jsx)(`div`, {
                        className: `px-3 py-1.5`,
                        children: (0, U.jsx)(`span`, {
                          className: `text-[10px] font-medium text-text-muted uppercase tracking-wider`,
                          children: F(`palette.section.get_started`)
                        })
                      }),
                      (0, U.jsxs)(`button`, {
                        onClick: W2,
                        className: `flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-border/30`,
                        children: [
                          (0, U.jsx)(ae, {
                            size: 16,
                            className: `shrink-0 text-brand`
                          }),
                          (0, U.jsx)(`span`, {
                            className: `flex-1`,
                            children: F(`palette.action.new_project`)
                          }),
                          (0, U.jsx)(`span`, {
                            className: `text-[10px] text-text-muted`,
                            children: F(`palette.action.new_project_hint`)
                          })
                        ]
                      }),
                      (0, U.jsxs)(`button`, {
                        onClick: G2,
                        className: `flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-border/30`,
                        children: [
                          (0, U.jsx)(u, {
                            size: 16,
                            className: `shrink-0 text-text-muted`
                          }),
                          (0, U.jsx)(`span`, {
                            className: `flex-1`,
                            children: F(`palette.action.blank_project`)
                          }),
                          (0, U.jsx)(`span`, {
                            className: `text-[10px] text-text-muted`,
                            children: F(`palette.action.blank_project_hint`)
                          })
                        ]
                      }),
                      (0, U.jsxs)(`button`, {
                        onClick: K2,
                        className: `flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-border/30`,
                        children: [
                          (0, U.jsx)(D, {
                            size: 16,
                            className: `shrink-0 text-text-muted`
                          }),
                          (0, U.jsx)(`span`, {
                            className: `flex-1`,
                            children: F(`palette.action.open_file`)
                          }),
                          (0, U.jsx)(`kbd`, {
                            className: `rounded-sm bg-fill px-1.5 py-0.5 text-[10px] font-mono text-text-muted`,
                            children: `\u2318O`
                          })
                        ]
                      }),
                      (0, U.jsx)(`div`, {
                        className: `border-t border-border my-1`
                      }),
                      (0, U.jsx)(`div`, {
                        className: `px-3 py-1.5`,
                        children: (0, U.jsx)(`span`, {
                          className: `text-[10px] font-medium text-text-muted uppercase tracking-wider`,
                          children: F(`palette.section.examples`)
                        })
                      }),
                      ue.map((e3) => (0, U.jsxs)(`button`, {
                        onClick: () => J2(e3),
                        className: `flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-border/30`,
                        children: [
                          (0, U.jsx)(ie, {
                            size: 16,
                            className: `shrink-0 text-text-muted`
                          }),
                          (0, U.jsx)(`span`, {
                            className: `flex-1 text-text-muted`,
                            children: e3.name
                          })
                        ]
                      }, e3.id)),
                      (0, U.jsx)(`div`, {
                        className: `border-t border-border my-1`
                      }),
                      (0, U.jsx)(`div`, {
                        className: `px-3 py-1.5`,
                        children: (0, U.jsx)(`span`, {
                          className: `text-[10px] font-medium text-text-muted uppercase tracking-wider`,
                          children: F(`palette.section.ask_ai_inline`)
                        })
                      }),
                      N2.map((e3) => (0, U.jsxs)(`button`, {
                        onClick: () => M2(e3.prompt),
                        className: `flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-border/30`,
                        children: [
                          (0, U.jsx)(P, {
                            size: 16,
                            className: `shrink-0 text-brand/60`
                          }),
                          (0, U.jsx)(`span`, {
                            className: `flex-1 text-text-muted`,
                            children: e3.label
                          })
                        ]
                      }, e3.id))
                    ]
                  }),
                  !p2 && !R2 && Y2.length > 0 && (0, U.jsx)(U.Fragment, {
                    children: Y2.map((e3, t3) => {
                      let n3 = we[e3.icon] ?? u, i2 = e3.enabled && !e3.enabled(), a2 = t3 === d2;
                      return (0, U.jsxs)(`button`, {
                        "data-selected": a2,
                        disabled: i2,
                        onClick: () => Q2(e3),
                        className: V(`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors`, a2 && !i2 && `bg-brand/20`, i2 && `opacity-40 cursor-not-allowed`, !a2 && !i2 && `hover:bg-border/30`),
                        children: [
                          (0, U.jsx)(n3, {
                            size: 16,
                            className: `shrink-0 text-text-muted`
                          }),
                          (0, U.jsx)(`span`, {
                            className: `flex-1`,
                            children: Ee(e3.label, r2)
                          }),
                          e3.shortcut && (0, U.jsx)(`kbd`, {
                            className: `rounded-sm bg-fill px-1.5 py-0.5 text-[10px] font-mono text-text-muted`,
                            children: e3.shortcut
                          })
                        ]
                      }, e3.id);
                    })
                  }),
                  !p2 && !R2 && X2 && (0, U.jsxs)(U.Fragment, {
                    children: [
                      Y2.length > 0 && (0, U.jsx)(`div`, {
                        className: `border-t border-border my-1`
                      }),
                      (0, U.jsx)(`div`, {
                        className: `px-3 py-1.5`,
                        children: (0, U.jsx)(`span`, {
                          className: `text-[10px] font-medium text-text-muted uppercase tracking-wider`,
                          children: F(`palette.section.ask_ai`)
                        })
                      }),
                      Z2 && (0, U.jsxs)(`button`, {
                        onClick: () => M2(Z2),
                        className: V(`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors`, Y2.length === 0 && d2 === 0 ? `bg-brand/20` : `hover:bg-border/30`),
                        children: [
                          (0, U.jsx)(P, {
                            size: 16,
                            className: `shrink-0 text-brand`
                          }),
                          (0, U.jsxs)(`span`, {
                            className: `flex-1`,
                            children: [
                              F(`palette.generate_label`),
                              ` `,
                              (0, U.jsx)(`span`, {
                                className: `text-brand`,
                                children: Z2
                              })
                            ]
                          }),
                          (0, U.jsx)(`kbd`, {
                            className: `rounded-sm bg-fill px-1.5 py-0.5 text-[10px] font-mono text-text-muted`,
                            children: F(`palette.kbd_server`)
                          })
                        ]
                      }),
                      !Z2 && N2.map((e3) => (0, U.jsxs)(`button`, {
                        onClick: () => M2(e3.prompt),
                        className: V(`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors`, `hover:bg-border/30`),
                        children: [
                          (0, U.jsx)(P, {
                            size: 16,
                            className: `shrink-0 text-brand/60`
                          }),
                          (0, U.jsx)(`span`, {
                            className: `flex-1 text-text-muted`,
                            children: e3.label
                          })
                        ]
                      }, e3.id))
                    ]
                  }),
                  !p2 && !R2 && Y2.length === 0 && !X2 && (0, U.jsx)(`div`, {
                    className: `px-3 py-6 text-center text-xs text-text-muted`,
                    children: F(`palette.empty`)
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  };
});
export {
  De as CommandPalette,
  __tla
};
