import { b as n, k as t, R as je } from "./three-fiber-GW7QWJN8.js";
import { dG as Ne, b4 as A, bn as te, bc as V, bo as ke, dH as ve, bu as ae, br as Se, dI as Ce, aO as Ae, aX as f, bX as Ie, dJ as _e, bx as Ee, by as Pe, bz as $e, bA as De, bC as Re, dK as Me, dL as Te, bj as ze, bD as W, bF as re, dM as Fe, bG as Le, ct as D, dN as Ge, dO as se, dP as Oe, dQ as Ve, dz as Ue, bp as We, bS as Ye, bk as Be, c0 as He, dR as qe, dS as Ke, dT as Xe, dU as Ze, cK as Je, dV as Qe, dW as et, dX as tt, dY as at, dZ as st, d_ as rt, d$ as nt, cu as lt, e0 as ot, bl as U, cB as it, b2 as ct, __tla as __tla_0 } from "./index-BFVdGF5u.js";
import { _ as dt } from "./three-drei-en0aG1CM.js";
import { u as ut } from "./useRequireAuth-GWFD7Fuj.js";
import "./three-tnxpQXqG.js";
let Lt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var pt = Symbol.for("react.lazy"), R = je[" use ".trim().toString()];
  function mt(a) {
    return typeof a == "object" && a !== null && "then" in a;
  }
  function ne(a) {
    return a != null && typeof a == "object" && "$$typeof" in a && a.$$typeof === pt && "_payload" in a && mt(a._payload);
  }
  function ft(a) {
    const s = xt(a), l = n.forwardRef((r, i) => {
      let { children: d, ...o } = r;
      ne(d) && typeof R == "function" && (d = R(d._payload));
      const c = n.Children.toArray(d), u = c.find(ht);
      if (u) {
        const w = u.props.children, x = c.map((v) => v === u ? n.Children.count(w) > 1 ? n.Children.only(null) : n.isValidElement(w) ? w.props.children : null : v);
        return t.jsx(s, {
          ...o,
          ref: i,
          children: n.isValidElement(w) ? n.cloneElement(w, void 0, x) : null
        });
      }
      return t.jsx(s, {
        ...o,
        ref: i,
        children: d
      });
    });
    return l.displayName = `${a}.Slot`, l;
  }
  function xt(a) {
    const s = n.forwardRef((l, r) => {
      let { children: i, ...d } = l;
      if (ne(i) && typeof R == "function" && (i = R(i._payload)), n.isValidElement(i)) {
        const o = yt(i), c = gt(d, i.props);
        return i.type !== n.Fragment && (c.ref = r ? Ne(r, o) : o), n.cloneElement(i, c);
      }
      return n.Children.count(i) > 1 ? n.Children.only(null) : null;
    });
    return s.displayName = `${a}.SlotClone`, s;
  }
  var bt = Symbol("radix.slottable");
  function ht(a) {
    return n.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === bt;
  }
  function gt(a, s) {
    const l = {
      ...s
    };
    for (const r in s) {
      const i = a[r], d = s[r];
      /^on[A-Z]/.test(r) ? i && d ? l[r] = (...c) => {
        const u = d(...c);
        return i(...c), u;
      } : i && (l[r] = i) : r === "style" ? l[r] = {
        ...i,
        ...d
      } : r === "className" && (l[r] = [
        i,
        d
      ].filter(Boolean).join(" "));
    }
    return {
      ...a,
      ...l
    };
  }
  function yt(a) {
    var _a, _b;
    let s = (_a = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : _a.get, l = s && "isReactWarning" in s && s.isReactWarning;
    return l ? a.ref : (s = (_b = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : _b.get, l = s && "isReactWarning" in s && s.isReactWarning, l ? a.props.ref : a.props.ref || a.ref);
  }
  var wt = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
  ], jt = wt.reduce((a, s) => {
    const l = ft(`Primitive.${s}`), r = n.forwardRef((i, d) => {
      const { asChild: o, ...c } = i, u = o ? l : s;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), t.jsx(u, {
        ...c,
        ref: d
      });
    });
    return r.displayName = `Primitive.${s}`, {
      ...a,
      [s]: r
    };
  }, {}), Nt = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }), kt = "VisuallyHidden", le = n.forwardRef((a, s) => t.jsx(jt.span, {
    ...a,
    ref: s,
    style: {
      ...Nt,
      ...a.style
    }
  }));
  le.displayName = kt;
  const vt = "";
  async function St(a, s) {
    const l = await fetch(`${vt}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${s.authToken}`
      },
      body: JSON.stringify({
        prompt: a
      }),
      signal: s.signal
    });
    if (!l.ok) {
      const i = await l.json().catch(() => ({
        error: "Request failed"
      }));
      throw new Error(i.error || `Server inference failed: ${l.status}`);
    }
    const r = await l.json();
    if (r.error) throw new Error(r.error);
    return {
      ir: r.ir ?? "",
      tokens: r.tokens ?? 0,
      durationMs: r.durationMs ?? 0,
      logId: r.logId
    };
  }
  const Ct = "campedersen/cad0-mini", At = `You are a CAD code generator. Generate "VCode" - a text representation of 3D geometry.

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
[pipe [cube 50.0 30.0 5.0] [difference [cylinder 3.0 10.0]] [fillet 1.0]]`, g = {
    pipeline: null,
    loading: null,
    loaded: false
  };
  async function oe() {
    if (!("gpu" in navigator)) return false;
    try {
      return await navigator.gpu.requestAdapter() != null;
    } catch {
      return false;
    }
  }
  async function It(a, s = Ct) {
    if (!(g.loaded && g.pipeline)) return g.loading || (g.loading = (async () => {
      try {
        a == null ? void 0 : a(0, 100, "Loading inference library...");
        const { pipeline: l, env: r } = await dt(async () => {
          const { pipeline: o, env: c } = await import("./transformers.web-BR8GRs9T.js").then(async (m) => {
            await m.__tla;
            return m;
          });
          return {
            pipeline: o,
            env: c
          };
        }, []);
        r.cacheDir = ".cache/transformers", r.allowLocalModels = false;
        const d = await oe() ? "webgpu" : "wasm";
        a == null ? void 0 : a(10, 100, `Downloading model (${d})...`), g.pipeline = await l("text-generation", s, {
          device: d,
          progress_callback: (o) => {
            if (o.status === "progress" && o.progress != null) {
              const c = Math.round(10 + o.progress * 0.85), u = o.loaded != null && o.total != null ? {
                loaded: o.loaded,
                total: o.total
              } : void 0;
              a == null ? void 0 : a(c, 100, "Downloading model...", u);
            } else o.status === "ready" && (a == null ? void 0 : a(95, 100, "Initializing model..."));
          }
        }), g.loaded = true, a == null ? void 0 : a(100, 100, "Model ready");
      } catch (l) {
        throw g.loading = null, l;
      }
    })()), g.loading;
  }
  async function _t(a, s, l, r) {
    var _a, _b;
    const i = performance.now(), d = g.loaded;
    if (await It(l), r == null ? void 0 : r.throwIfAborted(), !g.pipeline) throw new Error("Failed to load model");
    const o = [
      {
        role: "system",
        content: At
      },
      {
        role: "user",
        content: a
      }
    ], c = await g.pipeline(o, {
      max_new_tokens: 256,
      temperature: 0.3,
      do_sample: true,
      return_full_text: false,
      ...s
    });
    let u = "";
    if (Array.isArray(c) && ((_a = c[0]) == null ? void 0 : _a.generated_text)) {
      const x = c[0].generated_text;
      typeof x == "string" ? u = x : Array.isArray(x) && (u = ((_b = x[x.length - 1]) == null ? void 0 : _b.content) ?? "");
    }
    u = Et(u);
    const w = performance.now() - i;
    return {
      ir: u,
      durationMs: w,
      fromCache: d
    };
  }
  function Et(a) {
    var _a, _b, _c;
    let s = a.trim();
    s.startsWith("```") && (s = s.replace(/^```(?:ir|text|plaintext)?\n?/, "").replace(/\n?```$/, ""));
    const l = s.split(`
`), r = [
      "C",
      "Y",
      "S",
      "K",
      "T",
      "R",
      "X",
      "U",
      "D",
      "I",
      "LP",
      "CP",
      "SH",
      "SK",
      "E",
      "V"
    ];
    let i = 0, d = l.length;
    for (let o = 0; o < l.length; o++) {
      const u = ((_b = (_a = l[o]) == null ? void 0 : _a.trim().split(/\s+/)) == null ? void 0 : _b[0]) ?? "";
      if (r.includes(u)) {
        i = o;
        break;
      }
    }
    for (let o = l.length - 1; o >= i; o--) {
      const c = ((_c = l[o]) == null ? void 0 : _c.trim()) ?? "";
      if (!c) continue;
      const u = c.split(/\s+/)[0] ?? "";
      if (r.includes(u) || u === "END" || u === "L" || u === "A") {
        d = o + 1;
        break;
      }
    }
    return l.slice(i, d).join(`
`).trim();
  }
  const Pt = {
    Cube: W,
    Cylinder: ot,
    Globe: lt,
    ArrowsOutCardinal: nt,
    ArrowClockwise: se,
    ArrowsOut: rt,
    ArrowCounterClockwise: st,
    Unite: at,
    Subtract: tt,
    Intersect: et,
    FloppyDisk: Qe,
    FolderOpen: re,
    Export: Je,
    GridFour: Ze,
    CubeTransparent: Xe,
    SidebarSimple: Ke,
    Sun: qe,
    Info: He,
    Trash: Be,
    Copy: Ye,
    X: We,
    Package: Ue,
    PlusSquare: Ve,
    Anchor: Oe,
    ArrowsClockwise: se,
    ArrowsHorizontal: Ge,
    Sparkle: D
  };
  function $t(a, s) {
    return s ? a === 1 ? [
      {
        id: "ai-holes",
        label: "Add mounting holes",
        prompt: "add 4 M3 mounting holes to the corners"
      },
      {
        id: "ai-taller",
        label: "Make it taller",
        prompt: "make this part twice as tall"
      },
      {
        id: "ai-fillet",
        label: "Add rounded edges",
        prompt: "add 2mm fillets to all edges"
      }
    ] : a === 2 ? [
      {
        id: "ai-connect",
        label: "Connect these parts",
        prompt: "create a connector between these two parts"
      },
      {
        id: "ai-align",
        label: "Align and join",
        prompt: "align these parts and join them"
      }
    ] : [
      {
        id: "ai-complement",
        label: "Add a matching part",
        prompt: "create a complementary part that fits with the existing geometry"
      },
      {
        id: "ai-base",
        label: "Create a base plate",
        prompt: "create a base plate to mount the existing parts"
      }
    ] : [
      {
        id: "ai-bracket",
        label: "Create a mounting bracket",
        prompt: "mounting bracket with 4 corner holes, 50mm wide"
      },
      {
        id: "ai-enclosure",
        label: "Create an electronics enclosure",
        prompt: "electronics enclosure box 80x60x40mm with ventilation slots"
      },
      {
        id: "ai-standoff",
        label: "Create standoffs",
        prompt: "M3 standoff 10mm tall with mounting holes"
      }
    ];
  }
  function Dt(a, s) {
    if (!s) return a;
    const r = a.toLowerCase().indexOf(s.toLowerCase());
    return r === -1 ? a : t.jsxs(t.Fragment, {
      children: [
        a.slice(0, r),
        t.jsx("span", {
          className: "text-brand font-medium",
          children: a.slice(r, r + s.length)
        }),
        a.slice(r + s.length)
      ]
    });
  }
  Lt = function({ open: a, onOpenChange: s, onAboutOpen: l }) {
    const [r, i] = n.useState(""), [d, o] = n.useState(0), [c, u] = n.useState(false), [w, x] = n.useState(""), v = n.useRef(null), Y = n.useRef(null), B = n.useRef(null), M = n.useRef(null), { requireAuth: H, showAuth: ie, setShowAuth: ce, feature: de } = ut("ai"), I = A((e) => e.loadDocument), q = te((e) => e.startGuidedFlow), _ = te((e) => e.incrementProjectsCreated), E = A((e) => e.parts), K = A((e) => e.addPrimitive), T = V((e) => e.selectedPartIds), X = V((e) => e.select), Z = V((e) => e.setTransformMode);
    ke((e) => e.locale);
    const ue = n.useCallback(() => s(false), [
      s
    ]), z = ve({
      onDismiss: ue,
      onAboutOpen: l,
      surface: "palette"
    }), F = n.useCallback(async (e, p) => {
      const b = new AbortController();
      M.current = b, u(true), s(false);
      const m = ae.getState(), h = A.getState(), S = p ? [
        "Loading AI model",
        "Generating geometry",
        "Building mesh"
      ] : [
        "Connecting to server",
        "Generating geometry",
        "Building mesh"
      ], N = m.startAIOperation(e, S);
      try {
        let j, G;
        if (p) {
          m.updateAIProgress(N, 0, 10), x("Loading AI model...");
          const C = await _t(e, void 0, ($, ye, O) => {
            const we = Math.round($ / ye * 100);
            x(O), (O.includes("Loading") || O.includes("Initializing")) && m.updateAIProgress(N, 0, Math.min(we * 0.7, 70));
          }, b.signal);
          j = C.ir, G = C.durationMs;
        } else {
          m.updateAIProgress(N, 0, 10), x("Connecting to server...");
          const C = Se.getState().session;
          if (!C) throw new Error("Not authenticated");
          const $ = await St(e, {
            authToken: C.access_token,
            signal: b.signal
          });
          j = $.ir, G = $.durationMs;
        }
        m.updateAIProgress(N, 1, 80), x("Building geometry...");
        const ge = Ce(j);
        m.updateAIProgress(N, 2, 95), h.addFromIR(ge, e.slice(0, 30)), m.completeAIOperation(N, {
          type: "success",
          title: p ? "Generated locally" : "Generated from server",
          description: `Created in ${(G / 1e3).toFixed(1)}s`,
          actions: [
            {
              label: "Undo",
              onClick: () => A.getState().undo(),
              variant: "secondary"
            }
          ]
        });
      } catch (j) {
        j instanceof Error && j.name === "AbortError" ? m.cancelAIOperation(N) : (console.error("AI generation failed:", j), m.failAIOperation(N, j instanceof Error ? j.message : "Generation failed"));
      } finally {
        M.current = null, u(false), x("");
      }
    }, [
      s
    ]), L = n.useCallback(async (e) => {
      await oe() ? F(e, true) : H(() => F(e, false));
    }, [
      H,
      F
    ]), J = n.useMemo(() => $t(T.size, E.length > 0), [
      T.size,
      E.length
    ]), P = E.length === 0 && !r.trim(), pe = n.useCallback(() => {
      _(), q(), s(false);
    }, [
      _,
      q,
      s
    ]), me = n.useCallback(() => {
      _();
      const e = K("cube");
      X(e), Z("translate"), s(false);
    }, [
      _,
      K,
      X,
      Z,
      s
    ]), fe = n.useCallback(() => {
      var _a;
      (_a = B.current) == null ? void 0 : _a.click();
    }, []), xe = n.useCallback((e) => {
      var _a;
      const p = (_a = e.target.files) == null ? void 0 : _a[0];
      if (!p) return;
      const b = new FileReader();
      b.onload = (m) => {
        var _a2;
        try {
          const h = (_a2 = m.target) == null ? void 0 : _a2.result, S = Ae(h);
          I(S), s(false);
        } catch (h) {
          console.error("Failed to parse file:", h), ae.getState().addToast(f("palette.failed_to_load"), "error");
        }
      }, b.readAsText(p), e.target.value = "";
    }, [
      I,
      s
    ]), be = n.useCallback((e) => {
      Ie.templateOpened(e.id), e.urdf ? window.dispatchEvent(new CustomEvent("vcad:load-example", {
        detail: {
          urdf: e.urdf
        }
      })) : e.file && I(_e(e.file)), s(false);
    }, [
      I,
      s
    ]), y = n.useMemo(() => {
      if (!r.trim()) return z;
      const e = r.toLowerCase();
      return z.filter((p) => p.label.toLowerCase().includes(e) ? true : p.keywords.some((b) => b.includes(e)));
    }, [
      z,
      r
    ]), Q = r.trim().length > 2 || y.length === 0, k = r.trim();
    n.useEffect(() => {
      o(0);
    }, [
      r
    ]), n.useEffect(() => {
      a && (i(""), o(0));
    }, [
      a
    ]), n.useEffect(() => {
      const e = Y.current;
      if (!e) return;
      const p = e.querySelector("[data-selected=true]");
      p && p.scrollIntoView({
        block: "nearest"
      });
    }, [
      d
    ]);
    const ee = n.useCallback((e) => {
      e.enabled && !e.enabled() || e.action();
    }, []);
    function he(e) {
      var _a;
      if (c) {
        e.key === "Escape" && ((_a = M.current) == null ? void 0 : _a.abort());
        return;
      }
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), o((p) => Math.min(p + 1, y.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault(), o((p) => Math.max(p - 1, 0));
          break;
        case "Enter":
          if (e.preventDefault(), y.length > 0 && d < y.length) {
            const p = y[d];
            p && ee(p);
          } else if (k) {
            const p = ct.getState();
            p.setOpen(true);
            const b = Array.from(T).map((m) => {
              const h = E.find((S) => S.id === m);
              return h ? {
                partId: m,
                partName: h.name,
                geometryType: "part"
              } : null;
            }).filter(Boolean);
            p.sendMessage(k, b), s(false);
          }
          break;
        case "Escape":
          s(false);
          break;
      }
    }
    return t.jsxs(Ee, {
      open: a,
      onOpenChange: s,
      children: [
        t.jsxs(Pe, {
          children: [
            t.jsx($e, {
              className: "fixed inset-0 z-40 bg-black/30"
            }),
            t.jsxs(De, {
              className: "fixed left-1/2 top-[20%] z-50 w-full max-w-md -translate-x-1/2 rounded-xl border border-border bg-surface shadow-xl overflow-hidden",
              onKeyDown: he,
              "aria-describedby": void 0,
              children: [
                t.jsx(le, {
                  children: t.jsx(Re, {
                    children: f("palette.title")
                  })
                }),
                t.jsxs("div", {
                  className: "flex items-center gap-2 border-b border-border px-3 py-2",
                  children: [
                    t.jsx(Me, {
                      size: 16,
                      className: "text-text-muted"
                    }),
                    t.jsx("input", {
                      ref: v,
                      type: "text",
                      value: r,
                      onChange: (e) => i(e.target.value),
                      placeholder: f("palette.placeholder"),
                      className: "flex-1 bg-transparent text-sm text-text outline-none placeholder:text-text-muted",
                      autoFocus: true
                    }),
                    t.jsx("kbd", {
                      className: "rounded-sm bg-fill px-1.5 py-0.5 text-[10px] font-mono text-text-muted",
                      children: "esc"
                    })
                  ]
                }),
                t.jsx("input", {
                  ref: B,
                  type: "file",
                  accept: ".vcad,.json",
                  onChange: xe,
                  className: "hidden"
                }),
                t.jsxs("div", {
                  ref: Y,
                  className: "max-h-[400px] overflow-y-auto p-1",
                  children: [
                    c && t.jsxs("div", {
                      className: "flex items-center gap-3 px-3 py-4 border-b border-border mb-1",
                      children: [
                        t.jsx(Te, {
                          size: 16,
                          className: "text-brand animate-spin"
                        }),
                        t.jsx("span", {
                          className: "text-sm text-text-muted",
                          children: w || f("palette.generating")
                        })
                      ]
                    }),
                    !c && P && t.jsxs(t.Fragment, {
                      children: [
                        t.jsxs("div", {
                          className: "flex flex-col items-center py-4 border-b border-border mb-1",
                          children: [
                            t.jsxs("h1", {
                              className: "text-xl font-bold tracking-tighter text-text",
                              children: [
                                "vcad",
                                t.jsx("span", {
                                  className: "text-brand",
                                  children: "."
                                })
                              ]
                            }),
                            t.jsx("p", {
                              className: "text-[10px] text-text-muted",
                              children: f("welcome.tagline")
                            })
                          ]
                        }),
                        t.jsx("div", {
                          className: "px-3 py-1.5",
                          children: t.jsx("span", {
                            className: "text-[10px] font-medium text-text-muted uppercase tracking-wider",
                            children: f("palette.section.get_started")
                          })
                        }),
                        t.jsxs("button", {
                          onClick: pe,
                          className: "flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-border/30",
                          children: [
                            t.jsx(ze, {
                              size: 16,
                              className: "shrink-0 text-brand"
                            }),
                            t.jsx("span", {
                              className: "flex-1",
                              children: f("palette.action.new_project")
                            }),
                            t.jsx("span", {
                              className: "text-[10px] text-text-muted",
                              children: f("palette.action.new_project_hint")
                            })
                          ]
                        }),
                        t.jsxs("button", {
                          onClick: me,
                          className: "flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-border/30",
                          children: [
                            t.jsx(W, {
                              size: 16,
                              className: "shrink-0 text-text-muted"
                            }),
                            t.jsx("span", {
                              className: "flex-1",
                              children: f("palette.action.blank_project")
                            }),
                            t.jsx("span", {
                              className: "text-[10px] text-text-muted",
                              children: f("palette.action.blank_project_hint")
                            })
                          ]
                        }),
                        t.jsxs("button", {
                          onClick: fe,
                          className: "flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-border/30",
                          children: [
                            t.jsx(re, {
                              size: 16,
                              className: "shrink-0 text-text-muted"
                            }),
                            t.jsx("span", {
                              className: "flex-1",
                              children: f("palette.action.open_file")
                            }),
                            t.jsx("kbd", {
                              className: "rounded-sm bg-fill px-1.5 py-0.5 text-[10px] font-mono text-text-muted",
                              children: "\u2318O"
                            })
                          ]
                        }),
                        t.jsx("div", {
                          className: "border-t border-border my-1"
                        }),
                        t.jsx("div", {
                          className: "px-3 py-1.5",
                          children: t.jsx("span", {
                            className: "text-[10px] font-medium text-text-muted uppercase tracking-wider",
                            children: f("palette.section.examples")
                          })
                        }),
                        Fe.map((e) => t.jsxs("button", {
                          onClick: () => be(e),
                          className: "flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-border/30",
                          children: [
                            t.jsx(Le, {
                              size: 16,
                              className: "shrink-0 text-text-muted"
                            }),
                            t.jsx("span", {
                              className: "flex-1 text-text-muted",
                              children: e.name
                            })
                          ]
                        }, e.id)),
                        t.jsx("div", {
                          className: "border-t border-border my-1"
                        }),
                        t.jsx("div", {
                          className: "px-3 py-1.5",
                          children: t.jsx("span", {
                            className: "text-[10px] font-medium text-text-muted uppercase tracking-wider",
                            children: f("palette.section.ask_ai_inline")
                          })
                        }),
                        J.map((e) => t.jsxs("button", {
                          onClick: () => L(e.prompt),
                          className: "flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-border/30",
                          children: [
                            t.jsx(D, {
                              size: 16,
                              className: "shrink-0 text-brand/60"
                            }),
                            t.jsx("span", {
                              className: "flex-1 text-text-muted",
                              children: e.label
                            })
                          ]
                        }, e.id))
                      ]
                    }),
                    !c && !P && y.length > 0 && t.jsx(t.Fragment, {
                      children: y.map((e, p) => {
                        const b = Pt[e.icon] ?? W, m = e.enabled && !e.enabled(), h = p === d;
                        return t.jsxs("button", {
                          "data-selected": h,
                          disabled: m,
                          onClick: () => ee(e),
                          className: U("flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors", h && !m && "bg-brand/20", m && "opacity-40 cursor-not-allowed", !h && !m && "hover:bg-border/30"),
                          children: [
                            t.jsx(b, {
                              size: 16,
                              className: "shrink-0 text-text-muted"
                            }),
                            t.jsx("span", {
                              className: "flex-1",
                              children: Dt(e.label, r)
                            }),
                            e.shortcut && t.jsx("kbd", {
                              className: "rounded-sm bg-fill px-1.5 py-0.5 text-[10px] font-mono text-text-muted",
                              children: e.shortcut
                            })
                          ]
                        }, e.id);
                      })
                    }),
                    !c && !P && Q && t.jsxs(t.Fragment, {
                      children: [
                        y.length > 0 && t.jsx("div", {
                          className: "border-t border-border my-1"
                        }),
                        t.jsx("div", {
                          className: "px-3 py-1.5",
                          children: t.jsx("span", {
                            className: "text-[10px] font-medium text-text-muted uppercase tracking-wider",
                            children: f("palette.section.ask_ai")
                          })
                        }),
                        k && t.jsxs("button", {
                          onClick: () => L(k),
                          className: U("flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors", y.length === 0 && d === 0 ? "bg-brand/20" : "hover:bg-border/30"),
                          children: [
                            t.jsx(D, {
                              size: 16,
                              className: "shrink-0 text-brand"
                            }),
                            t.jsxs("span", {
                              className: "flex-1",
                              children: [
                                f("palette.generate_label"),
                                " ",
                                t.jsx("span", {
                                  className: "text-brand",
                                  children: k
                                })
                              ]
                            }),
                            t.jsx("kbd", {
                              className: "rounded-sm bg-fill px-1.5 py-0.5 text-[10px] font-mono text-text-muted",
                              children: f("palette.kbd_server")
                            })
                          ]
                        }),
                        !k && J.map((e) => t.jsxs("button", {
                          onClick: () => L(e.prompt),
                          className: U("flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors", "hover:bg-border/30"),
                          children: [
                            t.jsx(D, {
                              size: 16,
                              className: "shrink-0 text-brand/60"
                            }),
                            t.jsx("span", {
                              className: "flex-1 text-text-muted",
                              children: e.label
                            })
                          ]
                        }, e.id))
                      ]
                    }),
                    !c && !P && y.length === 0 && !Q && t.jsx("div", {
                      className: "px-3 py-6 text-center text-xs text-text-muted",
                      children: f("palette.empty")
                    })
                  ]
                })
              ]
            })
          ]
        }),
        t.jsx(it, {
          open: ie,
          onOpenChange: ce,
          feature: de
        })
      ]
    });
  };
});
export {
  Lt as CommandPalette,
  __tla
};
