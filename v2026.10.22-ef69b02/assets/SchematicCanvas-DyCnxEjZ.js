import { b as S, k as o } from "./three-fiber-DvYcInOp.js";
import { h as W, a3 as y, ag as st, ah as se } from "./index-DYo2o8YT.js";
import { u as ie } from "./Viewport-BfpYzH5N.js";
import "./three-tnxpQXqG.js";
import "./three-drei-B9AdtZoT.js";
import "./sub-feature-geometry-tgU-o6Qd.js";
import "./three-postprocessing-DulYNr-h.js";
import "./index-DgjyMUb0.js";
import "./camera-settings-store-CuM3JHb6.js";
import "./timeline-sample-DOpBIj1k.js";
import "./xr-collab-D1EUhp3o.js";
import "./pcb-interference-D-jt2V7v.js";
const q = 40, It = 30, re = 8, I = 10;
function it(c, a, s, f) {
  const m = a.getBoundingClientRect(), g = (c.clientX - m.left - 200) / s - f.x, P = (c.clientY - m.top - 200) / s - f.y;
  return { x: g, y: P };
}
function Y(c, a) {
  return Math.round(c / a) * a;
}
function pt(c, a, s, f = 12) {
  let m = f, g = { x: Y(c.x, s), y: Y(c.y, s), isPin: false };
  for (const P of a) for (const N of P.pins) {
    const L = P.position.x + N.position.x, O = P.position.y + N.position.y, U = Math.hypot(c.x - L, c.y - O);
    U < m && (m = U, g = { x: L, y: O, isPin: true });
  }
  return g;
}
function Et(c, a, s, f = 2) {
  const m = s.x - a.x, g = s.y - a.y, P = m * m + g * g;
  if (P < 0.01) return false;
  const N = ((c.x - a.x) * m + (c.y - a.y) * g) / P;
  if (N < 0.01 || N > 0.99) return false;
  const L = { x: a.x + N * m, y: a.y + N * g };
  return Math.hypot(c.x - L.x, c.y - L.y) < f;
}
function xt(c, a, s) {
  if (!s) return null;
  for (const f of s.nets) for (const m of f.connections) if (m.component_ref === c && m.pin_number === a) return f.name;
  return null;
}
function rt(c, a) {
  const s = /* @__PURE__ */ new Set();
  if (!a) return s;
  for (const f of a.nets) for (const m of f.connections) if (m.component_ref === c) {
    s.add(f.name);
    break;
  }
  return s;
}
function Dt(c, a, s) {
  if (!a) return null;
  for (const f of s) for (const m of f.pins) {
    const g = f.position.x + m.position.x, P = f.position.y + m.position.y, N = Math.hypot(c.start.x - g, c.start.y - P), L = Math.hypot(c.end.x - g, c.end.y - P);
    if (N < 2 || L < 2) {
      const O = xt(f.ref, m.number, a);
      if (O) return O;
    }
  }
  return null;
}
function ut(c, a) {
  const s = Math.abs(c);
  return s >= 1 || s === 0 ? `${c.toPrecision(3)}${a}` : s >= 1e-3 ? `${(c * 1e3).toPrecision(3)}m${a}` : s >= 1e-6 ? `${(c * 1e6).toPrecision(3)}\xB5${a}` : s >= 1e-9 ? `${(c * 1e9).toPrecision(3)}n${a}` : `${c.toExponential(1)}${a}`;
}
function ce(c, a = 5) {
  return `hsl(${240 * (1 - Math.max(0, Math.min(1, Math.abs(c) / a)))}, 90%, 58%)`;
}
function Lt(c, a, s) {
  return c.map((f, m) => {
    switch (f.type) {
      case "rect":
        return o.jsx("rect", { x: f.x, y: f.y, width: f.width, height: f.height, fill: s, stroke: a, strokeWidth: 1, rx: 1 }, m);
      case "line":
        return o.jsx("line", { x1: f.x1, y1: f.y1, x2: f.x2, y2: f.y2, stroke: a, strokeWidth: 1.5 }, m);
      case "circle":
        return o.jsx("circle", { cx: f.cx, cy: f.cy, r: f.r, fill: "none", stroke: a, strokeWidth: 1 }, m);
      case "polyline":
        return o.jsx("polyline", { points: (f.points ?? []).map((g) => `${g.x},${g.y}`).join(" "), fill: "none", stroke: a, strokeWidth: 1.5 }, m);
      default:
        return null;
    }
  });
}
function Se() {
  const c = S.useRef(null), { isDark: a } = ie(), s = W((t) => t.document.schematic), f = y((t) => t.selection), m = y((t) => t.hoveredNet), g = y((t) => t.netlist), P = y((t) => t.simulating), N = y((t) => t.simNodeVoltages), L = y((t) => t.simDeviceCurrents), O = y((t) => t.simRotorAngles), U = y((t) => t.simNetToNode), Q = y((t) => t.simRefToDevice), H = P && N != null, j = y((t) => t.analysis), Z = !H && j.status === "ok" && j.showDcAnnotations && j.dc != null, Rt = S.useMemo(() => new Set(j.blockers.map((t) => t.reference)), [j.blockers]), Tt = (t) => {
    var _a;
    return ((_a = j.blockers.find((e) => e.reference === t)) == null ? void 0 : _a.message) ?? null;
  }, Ot = (t) => {
    if (!Z || !j.mapping || !j.dc) return null;
    const e = j.mapping.deviceOfRef[t];
    return e == null ? null : j.dc.deviceCurrents[e] ?? null;
  }, dt = (t, e) => {
    var _a;
    j.status !== "ok" || ((_a = j.mapping) == null ? void 0 : _a.deviceOfRef[e]) == null || (t.preventDefault(), t.stopPropagation(), y.getState().setAnalysis({ tuningRef: e, tuneResult: null }));
  }, Ft = (t) => {
    if (!H || !t || !U || !N) return null;
    const e = U[t];
    return e == null ? null : N[e] ?? null;
  }, At = (t) => {
    if (!H || !Q || !L) return null;
    const e = Q[t];
    return e == null ? null : L[e] ?? null;
  }, yt = (t) => {
    if (!H || !Q || !O) return 0;
    const e = Q[t];
    return e == null ? 0 : O[e] ?? 0;
  }, C = y((t) => t.schZoom), R = y((t) => t.schPan), d = y((t) => t.schTool), K = y((t) => t.schPlacingSymbol), tt = y((t) => t.schPlacingRotation), h = y((t) => t.schWireStart), E = y((t) => t.schWirePreview), F = y((t) => t.select), A = y((t) => t.setHoveredNet);
  S.useEffect(() => {
    const t = (e) => {
      e.key === "Escape" && d === "wire" && y.getState().cancelSchWire();
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [d]);
  const ct = y((t) => t.zoomSchAt), et = y((t) => t.adjustSchPan), lt = y((t) => t.startSchWire), ht = y((t) => t.updateSchWirePreview), mt = y((t) => t.nextRef), gt = W((t) => t.addSchematicComponent), bt = W((t) => t.removeSchematicComponent), _ = W((t) => t.addSchematicWire), St = W((t) => t.removeSchematicWire), wt = W((t) => t.addSchematicLabel), vt = W((t) => t.removeSchematicLabel), jt = W((t) => t.moveSchematicComponent), $t = W((t) => t.moveSchematicComponentWithWires), nt = W((t) => t.addSchematicJunction), zt = W((t) => t.initSchematic), Gt = W((t) => t.initPcb), [B, kt] = S.useState(false), [w, at] = S.useState(null), [$, Ct] = S.useState(null), [J, Mt] = S.useState([]), [z, Pt] = S.useState(null), V = S.useRef(null), Yt = S.useMemo(() => f.type === "net" ? f.netId : f.type === "trace" || f.type === "via" || f.type === "pad" ? f.net : null, [f]), ot = S.useMemo(() => f.type === "component" || f.type === "footprint" ? f.ref : null, [f]), Bt = S.useMemo(() => ot ? rt(ot, g) : /* @__PURE__ */ new Set(), [ot, g]), X = (t) => t !== null && (t === Yt || t === m || Bt.has(t)), Ht = S.useMemo(() => {
    if (!Z || !s || !j.mapping || !j.dc) return [];
    const t = /* @__PURE__ */ new Set(), e = [];
    for (const r of s.wires) {
      const i = Dt(r, g, s.components);
      if (!i || t.has(i)) continue;
      const n = j.mapping.nodeOfNet[i];
      if (n == null || n === 0) continue;
      const x = j.dc.nodeVoltages[n];
      x != null && (t.add(i), e.push({ net: i, x: (r.start.x + r.end.x) / 2, y: (r.start.y + r.end.y) / 2, v: x }));
    }
    return e;
  }, [Z, s, g, j.mapping, j.dc]), _t = S.useMemo(() => {
    if (!s) return [];
    const t = /* @__PURE__ */ new Map();
    for (const e of s.wires) for (const r of s.components) for (const i of r.pins) {
      const n = r.position.x + i.position.x, x = r.position.y + i.position.y;
      for (const b of [e.start, e.end]) Math.hypot(b.x - n, b.y - x) < 2 && t.set(`${n},${x}`, { x: n, y: x });
    }
    return [...t.values()];
  }, [s]), Jt = S.useMemo(() => {
    const t = /* @__PURE__ */ new Map();
    if (!$ || !w || J.length === 0) return t;
    for (const e of J) {
      const r = { x: w.x + e.pinOffset.x, y: w.y + e.pinOffset.y }, i = t.get(e.wireIdx) ?? {};
      i[e.endpoint] = r, t.set(e.wireIdx, i);
    }
    return t;
  }, [$, w, J]), Vt = S.useCallback((t) => {
    if (t.preventDefault(), !c.current) return;
    const e = c.current.getBoundingClientRect(), r = t.clientX - e.left - 200, i = t.clientY - e.top - 200;
    if (t.ctrlKey || t.metaKey) {
      const n = -t.deltaY * 0.01;
      ct(n, r, i);
    } else t.deltaMode === 1 ? ct(t.deltaY > 0 ? -0.1 : 0.1, r, i) : et(-t.deltaX / C, -t.deltaY / C);
  }, [C, ct, et]), Xt = S.useCallback((t) => {
    var _a;
    if (t.button === 1 || t.button === 0 && t.altKey) {
      t.preventDefault(), kt(true), V.current = { x: t.clientX, y: t.clientY }, t.target.setPointerCapture(t.pointerId);
      return;
    }
    if (t.button !== 0 || !c.current) return;
    const e = it(t, c.current, C, R);
    if (d === "move" && !$) {
      const r = (s == null ? void 0 : s.components) ?? [];
      for (let i = r.length - 1; i >= 0; i--) {
        const n = r[i], x = ((_a = n.properties) == null ? void 0 : _a.symbolId) ? st(n.properties.symbolId) : null, b = x ? 56 : q, k = x ? Math.max(30, n.pins.length * 14 + 10) : Math.max(It, n.pins.length * 8);
        if (e.x >= n.position.x - 10 && e.x <= n.position.x + b + 10 && e.y >= n.position.y - 10 && e.y <= n.position.y + k + 10) {
          const M = (s == null ? void 0 : s.wires) ?? [], p = [];
          for (const l of n.pins) {
            const v = n.position.x + l.position.x, D = n.position.y + l.position.y;
            for (let T = 0; T < M.length; T++) {
              const G = M[T];
              Math.hypot(G.start.x - v, G.start.y - D) < 2 && p.push({ wireIdx: T, endpoint: "start", pinOffset: l.position }), Math.hypot(G.end.x - v, G.end.y - D) < 2 && p.push({ wireIdx: T, endpoint: "end", pinOffset: l.position });
            }
          }
          Mt(p), Ct({ compIdx: i, offset: { x: e.x - n.position.x, y: e.y - n.position.y } }), t.target.setPointerCapture(t.pointerId);
          return;
        }
      }
    }
  }, [C, R, d, $, s]), Ut = S.useCallback((t) => {
    if (B && V.current) {
      const n = t.clientX - V.current.x, x = t.clientY - V.current.y;
      V.current = { x: t.clientX, y: t.clientY }, et(n / C, x / C);
      return;
    }
    if (!c.current) return;
    const e = it(t, c.current, C, R), r = (s == null ? void 0 : s.components) ?? [], i = d === "wire" ? pt(e, r, I) : { x: Y(e.x, I), y: Y(e.y, I) };
    if (Pt(d === "wire" ? i : null), $) {
      const n = { x: Y(e.x - $.offset.x, I), y: Y(e.y - $.offset.y, I) };
      at(n);
      return;
    }
    (d === "place" || d === "wire" || d === "label") && at(i), d === "wire" && h && ht(i);
  }, [B, C, et, R, d, h, ht, $, s]), Kt = S.useCallback(() => {
    if (B) {
      kt(false), V.current = null;
      return;
    }
    if ($ && w) {
      if (J.length > 0) {
        const t = J.map((e) => ({ wireIdx: e.wireIdx, endpoint: e.endpoint, pos: { x: w.x + e.pinOffset.x, y: w.y + e.pinOffset.y } }));
        $t($.compIdx, { x: w.x, y: w.y, z: 0 }, t);
      } else jt($.compIdx, { x: w.x, y: w.y, z: 0 });
      Ct(null), at(null), Mt([]);
      return;
    }
  }, [B, $, w, J, jt, $t]), qt = S.useCallback((t) => {
    var _a;
    if (!c.current || B || $) return;
    const e = it(t, c.current, C, R), r = (s == null ? void 0 : s.components) ?? [], i = d === "wire" ? pt(e, r, I) : { x: Y(e.x, I), y: Y(e.y, I) };
    if (d === "place" && K) {
      const n = st(K);
      if (!n) return;
      const x = mt(n.prefix), b = n.footprintTemplate ? JSON.stringify(n.footprintTemplate) : void 0;
      gt({ ref: x, value: n.defaultValue, footprintId: ((_a = n.footprintTemplate) == null ? void 0 : _a.name) ?? "", position: { x: i.x, y: i.y }, rotation: tt, pins: n.pins.map((k) => ({ ...k })), properties: { symbolId: n.id, ...b ? { footprintTemplate: b } : {} } });
      return;
    }
    if (d === "wire") {
      if (!h) lt(i);
      else {
        const n = { x: i.x, y: h.y }, x = [];
        (n.x !== h.x || n.y !== h.y) && (_({ start: h, end: n }), x.push({ start: h, end: n })), (i.x !== n.x || i.y !== n.y) && (_({ start: n, end: i }), x.push({ start: n, end: i }));
        const b = (s == null ? void 0 : s.wires) ?? [], k = (s == null ? void 0 : s.junctions) ?? [], M = (l) => k.some((v) => Math.hypot(v.position.x - l.x, v.position.y - l.y) < 1), p = (l, v) => {
          if (!M(l)) {
            for (const D of v) if (Et(l, D.start, D.end)) {
              nt({ position: l });
              return;
            }
          }
        };
        for (const l of x) p(l.start, b), p(l.end, b);
        for (const l of b) p(l.start, x), p(l.end, x);
        lt(i);
      }
      return;
    }
    if (d === "label") {
      const n = y.getState().schLabelName;
      wt({ name: n, position: i, scope: "Global" });
      return;
    }
    d === "select" && F({ type: "none" });
  }, [C, R, d, K, tt, h, gt, _, wt, nt, lt, mt, F, B, $, s]), Qt = S.useCallback((t) => {
    if (!c.current || d !== "wire" || !h) return;
    const e = it(t, c.current, C, R), r = (s == null ? void 0 : s.components) ?? [], i = pt(e, r, I), n = { x: i.x, y: h.y }, x = [];
    (n.x !== h.x || n.y !== h.y) && (_({ start: h, end: n }), x.push({ start: h, end: n })), (i.x !== n.x || i.y !== n.y) && (_({ start: n, end: i }), x.push({ start: n, end: i }));
    const b = (s == null ? void 0 : s.wires) ?? [], k = (s == null ? void 0 : s.junctions) ?? [], M = (l) => k.some((v) => Math.hypot(v.position.x - l.x, v.position.y - l.y) < 1), p = (l, v) => {
      if (!M(l)) {
        for (const D of v) if (Et(l, D.start, D.end)) {
          nt({ position: l });
          return;
        }
      }
    };
    for (const l of x) p(l.start, b), p(l.end, b);
    for (const l of b) p(l.start, x), p(l.end, x);
    y.getState().cancelSchWire();
  }, [C, R, d, h, _, nt, s]), Nt = S.useCallback((t, e, r) => {
    d !== "wire" && (t.stopPropagation(), d === "delete" ? bt(e) : F({ type: "component", ref: r }));
  }, [d, F, bt]), Zt = S.useCallback((t, e, r) => {
    t.stopPropagation(), d === "delete" ? St(e) : r && F({ type: "net", netId: r });
  }, [d, F, St]), te = S.useCallback((t, e, r) => {
    t.stopPropagation(), d === "delete" ? vt(e) : F({ type: "net", netId: r });
  }, [d, F, vt]);
  if (!s) return o.jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3", children: [o.jsx("span", { className: "text-text-muted text-sm", children: "No schematic data" }), o.jsx("button", { className: "px-3 py-1.5 text-xs bg-brand text-white rounded hover:bg-brand/90 transition-colors", onClick: () => {
    zt();
    const t = W.getState().document;
    se(t).length === 0 && Gt();
  }, children: "New Circuit" })] });
  const u = { bg: a ? "#111" : "#fafafa", wire: a ? "#aaa" : "#333", body: a ? "#2a2a2a" : "#f0f0f0", bodyStroke: a ? "#555" : "#999", text: a ? "#ddd" : "#222", textMuted: a ? "#888" : "#999", accent: "#3b82f6", accentGlow: "rgba(59, 130, 246, 0.3)", junction: a ? "#4CAF50" : "#2E7D32", label: a ? "#FFEB3B" : "#F57F17" }, ee = B ? "grabbing" : d === "place" ? "copy" : d === "wire" ? "crosshair" : d === "delete" ? "not-allowed" : d === "move" ? "move" : "default", ft = K ? st(K) : null;
  return o.jsx("svg", { ref: c, className: "w-full h-full", style: { background: u.bg, cursor: ee }, onWheel: Vt, onPointerDown: Xt, onPointerMove: Ut, onPointerUp: Kt, onClick: qt, onDoubleClick: Qt, onContextMenu: (t) => {
    t.preventDefault(), h && y.getState().cancelSchWire();
  }, children: o.jsxs("g", { transform: `translate(${R.x * C + 200}, ${R.y * C + 200}) scale(${C})`, children: [o.jsxs("defs", { children: [o.jsx("pattern", { id: "sch-grid", width: I, height: I, patternUnits: "userSpaceOnUse", children: o.jsx("circle", { cx: I / 2, cy: I / 2, r: 0.5, fill: a ? "#222" : "#ddd" }) }), o.jsx("style", { children: `
            @keyframes pin-pulse {
              0%, 100% { r: 7; opacity: 0.3; }
              50% { r: 10; opacity: 0.15; }
            }
            .sch-pin-glow { animation: pin-pulse 1.2s ease-in-out infinite; }
          ` })] }), o.jsx("rect", { x: -1e3, y: -1e3, width: 2e3, height: 2e3, fill: "url(#sch-grid)" }), s.wires.map((t, e) => {
    const r = Dt(t, g, s.components), i = X(r), n = Jt.get(e), x = (n == null ? void 0 : n.start) ?? t.start, b = (n == null ? void 0 : n.end) ?? t.end, k = Ft(r), M = k != null ? ce(k) : null;
    return o.jsx("line", { x1: x.x, y1: x.y, x2: b.x, y2: b.y, stroke: M ?? (i ? u.accent : u.wire), strokeWidth: M != null ? 2.5 : i ? 2 : 1.5, strokeLinecap: "round", style: M != null ? { filter: `drop-shadow(0 0 3px ${M})` } : i ? { filter: `drop-shadow(0 0 4px ${u.accentGlow})` } : void 0, className: "cursor-pointer", onClick: (p) => Zt(p, e, r), onPointerEnter: () => r && A(r), onPointerLeave: () => A(null) }, `w-${e}`);
  }), s.junctions.map((t, e) => o.jsx("circle", { cx: t.position.x, cy: t.position.y, r: 3, fill: u.junction }, `j-${e}`)), _t.map((t, e) => o.jsx("circle", { cx: t.x, cy: t.y, r: 3, fill: u.wire }, `cd-${e}`)), s.labels.map((t, e) => o.jsxs("g", { transform: `translate(${t.position.x}, ${t.position.y})`, children: [o.jsx("rect", { x: -2, y: -10, width: t.name.length * 6 + 4, height: 14, fill: X(t.name) ? u.accent : u.label, opacity: 0.2, rx: 2 }), o.jsx("text", { fontSize: 9, fill: X(t.name) ? u.accent : u.label, fontFamily: "monospace", dominantBaseline: "middle", className: "cursor-pointer", onClick: (r) => te(r, e, t.name), onPointerEnter: () => A(t.name), onPointerLeave: () => A(null), children: t.name })] }, `l-${e}`)), s.components.map((t, e) => {
    var _a, _b, _c, _d;
    const r = ot === t.ref, n = [...rt(t.ref, g)].some((p) => X(p)), x = r || n, b = ((_a = t.properties) == null ? void 0 : _a.symbolId) ? st(t.properties.symbolId) : null, k = ($ == null ? void 0 : $.compIdx) === e && w ? w : t.position;
    if (b) return o.jsxs("g", { transform: `translate(${k.x}, ${k.y})${t.rotation ? ` rotate(${t.rotation})` : ""}`, className: "cursor-pointer", onClick: (p) => Nt(p, e, t.ref), onContextMenu: (p) => dt(p, t.ref), onPointerEnter: () => {
      const l = rt(t.ref, g).values().next().value;
      l && A(l);
    }, onPointerLeave: () => A(null), opacity: ($ == null ? void 0 : $.compIdx) === e ? 0.6 : 1, children: [H && ((_b = t.properties) == null ? void 0 : _b.symbolId) === "led" && (() => {
      const p = Math.max(0, Math.min(1, Math.abs(At(t.ref) ?? 0) / 0.01));
      return p <= 0.03 ? null : o.jsx("circle", { cx: 20, cy: 15, r: 9 + 13 * p, fill: "#ff5a36", opacity: 0.55 * p, style: { filter: `blur(${4 + 6 * p}px)` } });
    })(), H && ((_c = t.properties) == null ? void 0 : _c.symbolId) === "motor" && (() => {
      const p = yt(t.ref) * 180 / Math.PI % 360, l = Math.abs(yt(t.ref)) > 0.01;
      return o.jsxs("g", { transform: `rotate(${p} 20 15)`, children: [o.jsx("line", { x1: 20, y1: 3, x2: 20, y2: 27, stroke: l ? "#4ade80" : u.bodyStroke, strokeWidth: 2.5, strokeLinecap: "round" }), o.jsx("circle", { cx: 20, cy: 3, r: 2.5, fill: "#4ade80", opacity: l ? 1 : 0.3 })] });
    })(), Lt(b.graphics, x ? u.accent : u.bodyStroke, u.body), t.pins.map((p, l) => {
      const v = xt(t.ref, p.number, g), D = X(v);
      return o.jsx("circle", { cx: p.position.x, cy: p.position.y, r: 2, fill: D ? u.accent : u.bodyStroke }, `p-${l}`);
    }), o.jsx("text", { x: 20, y: -6, fontSize: 9, fontWeight: "bold", fill: u.text, textAnchor: "middle", fontFamily: "monospace", children: t.ref }), o.jsx("text", { x: 20, y: -6 + (((_d = b.graphics.find((p) => p.type === "rect")) == null ? void 0 : _d.height) ?? 30) + 16, fontSize: 8, fill: u.textMuted, textAnchor: "middle", fontFamily: "monospace", children: t.value })] }, `c-${e}`);
    const M = Math.max(It, t.pins.length * 8);
    return o.jsxs("g", { transform: `translate(${k.x}, ${k.y})${t.rotation ? ` rotate(${t.rotation})` : ""}`, className: "cursor-pointer", onClick: (p) => Nt(p, e, t.ref), onContextMenu: (p) => dt(p, t.ref), onPointerEnter: () => {
      const l = rt(t.ref, g).values().next().value;
      l && A(l);
    }, onPointerLeave: () => A(null), opacity: ($ == null ? void 0 : $.compIdx) === e ? 0.6 : 1, children: [o.jsx("rect", { x: 0, y: 0, width: q, height: M, fill: u.body, stroke: x ? u.accent : u.bodyStroke, strokeWidth: x ? 2 : 1, rx: 2, style: x ? { filter: `drop-shadow(0 0 6px ${u.accentGlow})` } : void 0 }), t.pins.map((p, l) => {
      const v = l < t.pins.length / 2, T = 10 + (v ? l : l - Math.ceil(t.pins.length / 2)) * 14, G = v ? 0 : q, ne = v ? -1 : 1, oe = xt(t.ref, p.number, g), Wt = X(oe);
      return o.jsxs("g", { children: [o.jsx("line", { x1: G, y1: T, x2: G + re * ne, y2: T, stroke: Wt ? u.accent : u.bodyStroke, strokeWidth: Wt ? 2 : 1.5 }), o.jsx("text", { x: G + (v ? 3 : -3), y: T - 3, fontSize: 6, fill: u.textMuted, textAnchor: v ? "start" : "end", fontFamily: "monospace", children: p.number })] }, `p-${l}`);
    }), o.jsx("text", { x: q / 2, y: -4, fontSize: 9, fontWeight: "bold", fill: u.text, textAnchor: "middle", fontFamily: "monospace", children: t.ref }), o.jsx("text", { x: q / 2, y: M + 10, fontSize: 8, fill: u.textMuted, textAnchor: "middle", fontFamily: "monospace", children: t.value })] }, `c-${e}`);
  }), Z && o.jsxs("g", { pointerEvents: "none", children: [Ht.map((t) => o.jsxs("g", { transform: `translate(${t.x}, ${t.y - 6})`, children: [o.jsx("rect", { x: -2, y: -9, width: ut(t.v, "V").length * 5.4 + 4, height: 12, fill: a ? "#052e16" : "#dcfce7", opacity: 0.9, rx: 2 }), o.jsx("text", { fontSize: 8, fill: "#4ade80", fontFamily: "monospace", dominantBaseline: "hanging", y: -8, children: ut(t.v, "V") })] }, `dcv-${t.net}`)), s.components.map((t, e) => {
    const r = Ot(t.ref);
    return r == null ? null : o.jsx("text", { x: t.position.x + 20, y: t.position.y + 48, fontSize: 7, fill: "#4ade80", textAnchor: "middle", fontFamily: "monospace", opacity: 0.9, children: ut(r, "A") }, `dci-${e}`);
  })] }), j.status === "blocked" && s.components.map((t, e) => Rt.has(t.ref) ? o.jsxs("g", { pointerEvents: "none", children: [o.jsx("rect", { x: t.position.x - 8, y: t.position.y - 16, width: 56, height: 60, fill: "none", stroke: "#f87171", strokeWidth: 1.5, strokeDasharray: "4 3", rx: 4, style: { filter: "drop-shadow(0 0 4px rgba(248,113,113,0.5))" } }), o.jsx("text", { x: t.position.x + 44, y: t.position.y - 8, fontSize: 10, fill: "#f87171", fontFamily: "monospace", children: "!" }), o.jsx("title", { children: Tt(t.ref) })] }, `blk-${e}`) : null), d === "place" && ft && w && o.jsxs("g", { transform: `translate(${w.x}, ${w.y})${tt ? ` rotate(${tt})` : ""}`, opacity: 0.5, pointerEvents: "none", children: [Lt(ft.graphics, u.accent, "none"), ft.pins.map((t, e) => o.jsx("circle", { cx: t.position.x, cy: t.position.y, r: 2, fill: u.accent, opacity: 0.5 }, `gp-${e}`))] }), d === "wire" && h && E && (() => {
    const t = Math.abs(E.x - h.x), e = Math.abs(E.y - h.y), r = E.x, i = h.y, n = Math.min(4, t, e);
    let x;
    if (t < 0.5 || e < 0.5) x = `M${h.x},${h.y} L${E.x},${E.y}`;
    else {
      const b = E.x > h.x ? 1 : -1, k = E.y > h.y ? 1 : -1;
      x = `M${h.x},${h.y} L${r - n * b},${i} Q${r},${i} ${r},${i + n * k} L${E.x},${E.y}`;
    }
    return o.jsxs("g", { pointerEvents: "none", children: [o.jsx("path", { d: x, fill: "none", stroke: u.accent, strokeWidth: 2, strokeLinecap: "round", opacity: 0.6, strokeDasharray: "4 2" }), o.jsx("circle", { cx: h.x, cy: h.y, r: 3, fill: u.accent, opacity: 0.8 }), o.jsx("circle", { cx: E.x, cy: E.y, r: 3, fill: u.accent, opacity: 0.8 })] });
  })(), d === "wire" && s.components.map((t, e) => t.pins.map((r, i) => o.jsx("circle", { cx: t.position.x + r.position.x, cy: t.position.y + r.position.y, r: 2, fill: u.accent, opacity: 0.3, pointerEvents: "none" }, `pd-${e}-${i}`))), d === "wire" && z && o.jsx("g", { pointerEvents: "none", children: z.isPin ? o.jsxs(o.Fragment, { children: [o.jsx("circle", { cx: z.x, cy: z.y, r: 8, fill: "none", stroke: u.accent, strokeWidth: 1.5, className: "sch-pin-glow" }), o.jsx("circle", { cx: z.x, cy: z.y, r: 4, fill: u.accent, opacity: 0.6 })] }) : o.jsx("circle", { cx: z.x, cy: z.y, r: 2.5, fill: "none", stroke: u.accent, strokeWidth: 1, opacity: 0.4 }) }), d === "label" && w && o.jsxs("g", { transform: `translate(${w.x}, ${w.y})`, opacity: 0.5, pointerEvents: "none", children: [o.jsx("rect", { x: -2, y: -10, width: y.getState().schLabelName.length * 6 + 4, height: 14, fill: u.accent, opacity: 0.3, rx: 2 }), o.jsx("text", { fontSize: 9, fill: u.accent, fontFamily: "monospace", dominantBaseline: "middle", children: y.getState().schLabelName })] })] }) });
}
export {
  Se as SchematicCanvas
};
