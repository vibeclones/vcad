import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { J as r, q as i } from "./dist-DCVtPzLm.js";
import { t as a } from "./electronics-store-a7AjZfyv.js";
import { t as o } from "./useTheme-sFWh-b6j.js";
import { t as s } from "./symbol-library-CES5qBO-.js";
var c = e(t(), 1), l = n(), u = 40, d = 30, ee = 8, f = 10;
function p(e2, t2, n2, r2) {
  let i2 = t2.getBoundingClientRect();
  return { x: (e2.clientX - i2.left - 200) / n2 - r2.x, y: (e2.clientY - i2.top - 200) / n2 - r2.y };
}
function m(e2, t2) {
  return Math.round(e2 / t2) * t2;
}
function h(e2, t2, n2, r2 = 12) {
  let i2 = r2, a2 = { x: m(e2.x, n2), y: m(e2.y, n2), isPin: false };
  for (let n3 of t2) for (let t3 of n3.pins) {
    let r3 = n3.position.x + t3.position.x, o2 = n3.position.y + t3.position.y, s2 = Math.hypot(e2.x - r3, e2.y - o2);
    s2 < i2 && (i2 = s2, a2 = { x: r3, y: o2, isPin: true });
  }
  return a2;
}
function te(e2, t2, n2, r2 = 2) {
  let i2 = n2.x - t2.x, a2 = n2.y - t2.y, o2 = i2 * i2 + a2 * a2;
  if (o2 < 0.01) return false;
  let s2 = ((e2.x - t2.x) * i2 + (e2.y - t2.y) * a2) / o2;
  if (s2 < 0.01 || s2 > 0.99) return false;
  let c2 = { x: t2.x + s2 * i2, y: t2.y + s2 * a2 };
  return Math.hypot(e2.x - c2.x, e2.y - c2.y) < r2;
}
function g(e2, t2, n2) {
  if (!n2) return null;
  for (let r2 of n2.nets) for (let n3 of r2.connections) if (n3.component_ref === e2 && n3.pin_number === t2) return r2.name;
  return null;
}
function _(e2, t2) {
  let n2 = /* @__PURE__ */ new Set();
  if (!t2) return n2;
  for (let r2 of t2.nets) for (let t3 of r2.connections) if (t3.component_ref === e2) {
    n2.add(r2.name);
    break;
  }
  return n2;
}
function ne(e2, t2, n2) {
  if (!t2) return null;
  for (let r2 of n2) for (let n3 of r2.pins) {
    let i2 = r2.position.x + n3.position.x, a2 = r2.position.y + n3.position.y, o2 = Math.hypot(e2.start.x - i2, e2.start.y - a2), s2 = Math.hypot(e2.end.x - i2, e2.end.y - a2);
    if (o2 < 2 || s2 < 2) {
      let e3 = g(r2.ref, n3.number, t2);
      if (e3) return e3;
    }
  }
  return null;
}
function v(e2, t2) {
  let n2 = Math.abs(e2);
  return n2 >= 1 || n2 === 0 ? `${e2.toPrecision(3)}${t2}` : n2 >= 1e-3 ? `${(e2 * 1e3).toPrecision(3)}m${t2}` : n2 >= 1e-6 ? `${(e2 * 1e6).toPrecision(3)}\xB5${t2}` : n2 >= 1e-9 ? `${(e2 * 1e9).toPrecision(3)}n${t2}` : `${e2.toExponential(1)}${t2}`;
}
function re(e2, t2 = 5) {
  return `hsl(${240 * (1 - Math.max(0, Math.min(1, Math.abs(e2) / t2)))}, 90%, 58%)`;
}
function y(e2, t2, n2) {
  return e2.map((e3, r2) => {
    switch (e3.type) {
      case `rect`:
        return (0, l.jsx)(`rect`, { x: e3.x, y: e3.y, width: e3.width, height: e3.height, fill: n2, stroke: t2, strokeWidth: 1, rx: 1 }, r2);
      case `line`:
        return (0, l.jsx)(`line`, { x1: e3.x1, y1: e3.y1, x2: e3.x2, y2: e3.y2, stroke: t2, strokeWidth: 1.5 }, r2);
      case `circle`:
        return (0, l.jsx)(`circle`, { cx: e3.cx, cy: e3.cy, r: e3.r, fill: `none`, stroke: t2, strokeWidth: 1 }, r2);
      case `polyline`:
        return (0, l.jsx)(`polyline`, { points: (e3.points ?? []).map((e4) => `${e4.x},${e4.y}`).join(` `), fill: `none`, stroke: t2, strokeWidth: 1.5 }, r2);
      default:
        return null;
    }
  });
}
function b() {
  let e2 = (0, c.useRef)(null), { isDark: t2 } = o(), n2 = r((e3) => e3.document.schematic), b2 = a((e3) => e3.selection), ie = a((e3) => e3.hoveredNet), x = a((e3) => e3.netlist), ae = a((e3) => e3.simulating), S = a((e3) => e3.simNodeVoltages), C = a((e3) => e3.simDeviceCurrents), w = a((e3) => e3.simRotorAngles), oe = a((e3) => e3.simNetToNode), T = a((e3) => e3.simRefToDevice), E = ae && S != null, D = a((e3) => e3.analysis), O = !E && D.status === `ok` && D.showDcAnnotations && D.dc != null, se = (0, c.useMemo)(() => new Set(D.blockers.map((e3) => e3.reference)), [D.blockers]), ce = (e3) => {
    var _a;
    return ((_a = D.blockers.find((t3) => t3.reference === e3)) == null ? void 0 : _a.message) ?? null;
  }, le = (e3) => {
    if (!O || !D.mapping || !D.dc) return null;
    let t3 = D.mapping.deviceOfRef[e3];
    return t3 == null ? null : D.dc.deviceCurrents[t3] ?? null;
  }, ue = (e3, t3) => {
    var _a;
    D.status === `ok` && ((_a = D.mapping) == null ? void 0 : _a.deviceOfRef[t3]) != null && (e3.preventDefault(), e3.stopPropagation(), a.getState().setAnalysis({ tuningRef: t3, tuneResult: null }));
  }, de = (e3) => {
    if (!E || !e3 || !oe || !S) return null;
    let t3 = oe[e3];
    return t3 == null ? null : S[t3] ?? null;
  }, fe = (e3) => {
    if (!E || !T || !C) return null;
    let t3 = T[e3];
    return t3 == null ? null : C[t3] ?? null;
  }, pe = (e3) => {
    if (!E || !T || !w) return 0;
    let t3 = T[e3];
    return t3 == null ? 0 : w[t3] ?? 0;
  }, k = a((e3) => e3.schZoom), A = a((e3) => e3.schPan), j = a((e3) => e3.schTool), M = a((e3) => e3.schPlacingSymbol), N = a((e3) => e3.schPlacingRotation), P = a((e3) => e3.schWireStart), F = a((e3) => e3.schWirePreview), I = a((e3) => e3.select), L = a((e3) => e3.setHoveredNet);
  (0, c.useEffect)(() => {
    let e3 = (e4) => {
      e4.key === `Escape` && j === `wire` && a.getState().cancelSchWire();
    };
    return window.addEventListener(`keydown`, e3), () => window.removeEventListener(`keydown`, e3);
  }, [j]);
  let R = a((e3) => e3.zoomSchAt), z = a((e3) => e3.adjustSchPan), B = a((e3) => e3.startSchWire), me = a((e3) => e3.updateSchWirePreview), he = a((e3) => e3.nextRef), ge = r((e3) => e3.addSchematicComponent), _e = r((e3) => e3.removeSchematicComponent), V = r((e3) => e3.addSchematicWire), ve = r((e3) => e3.removeSchematicWire), ye = r((e3) => e3.addSchematicLabel), be = r((e3) => e3.removeSchematicLabel), xe = r((e3) => e3.moveSchematicComponent), Se = r((e3) => e3.moveSchematicComponentWithWires), H = r((e3) => e3.addSchematicJunction), Ce = r((e3) => e3.initSchematic), we = r((e3) => e3.initPcb), [U, Te] = (0, c.useState)(false), [W, G] = (0, c.useState)(null), [K, Ee] = (0, c.useState)(null), [q, De] = (0, c.useState)([]), [J, Oe] = (0, c.useState)(null), Y = (0, c.useRef)(null), ke = (0, c.useMemo)(() => b2.type === `net` ? b2.netId : b2.type === `trace` || b2.type === `via` || b2.type === `pad` ? b2.net : null, [b2]), X = (0, c.useMemo)(() => b2.type === `component` || b2.type === `footprint` ? b2.ref : null, [b2]), Ae = (0, c.useMemo)(() => X ? _(X, x) : /* @__PURE__ */ new Set(), [X, x]), Z = (e3) => e3 !== null && (e3 === ke || e3 === ie || Ae.has(e3)), je = (0, c.useMemo)(() => {
    if (!O || !n2 || !D.mapping || !D.dc) return [];
    let e3 = /* @__PURE__ */ new Set(), t3 = [];
    for (let r2 of n2.wires) {
      let i2 = ne(r2, x, n2.components);
      if (!i2 || e3.has(i2)) continue;
      let a2 = D.mapping.nodeOfNet[i2];
      if (a2 == null || a2 === 0) continue;
      let o2 = D.dc.nodeVoltages[a2];
      o2 != null && (e3.add(i2), t3.push({ net: i2, x: (r2.start.x + r2.end.x) / 2, y: (r2.start.y + r2.end.y) / 2, v: o2 }));
    }
    return t3;
  }, [O, n2, x, D.mapping, D.dc]), Me = (0, c.useMemo)(() => {
    if (!n2) return [];
    let e3 = /* @__PURE__ */ new Map();
    for (let t3 of n2.wires) for (let r2 of n2.components) for (let n3 of r2.pins) {
      let i2 = r2.position.x + n3.position.x, a2 = r2.position.y + n3.position.y;
      for (let n4 of [t3.start, t3.end]) Math.hypot(n4.x - i2, n4.y - a2) < 2 && e3.set(`${i2},${a2}`, { x: i2, y: a2 });
    }
    return [...e3.values()];
  }, [n2]), Ne = (0, c.useMemo)(() => {
    let e3 = /* @__PURE__ */ new Map();
    if (!K || !W || q.length === 0) return e3;
    for (let t3 of q) {
      let n3 = { x: W.x + t3.pinOffset.x, y: W.y + t3.pinOffset.y }, r2 = e3.get(t3.wireIdx) ?? {};
      r2[t3.endpoint] = n3, e3.set(t3.wireIdx, r2);
    }
    return e3;
  }, [K, W, q]), Pe = (0, c.useCallback)((t3) => {
    if (t3.preventDefault(), !e2.current) return;
    let n3 = e2.current.getBoundingClientRect(), r2 = t3.clientX - n3.left - 200, i2 = t3.clientY - n3.top - 200;
    if (t3.ctrlKey || t3.metaKey) {
      let e3 = -t3.deltaY * 0.01;
      R(e3, r2, i2);
    } else t3.deltaMode === 1 ? R(t3.deltaY > 0 ? -0.1 : 0.1, r2, i2) : z(-t3.deltaX / k, -t3.deltaY / k);
  }, [k, R, z]), Fe = (0, c.useCallback)((t3) => {
    var _a;
    if (t3.button === 1 || t3.button === 0 && t3.altKey) {
      t3.preventDefault(), Te(true), Y.current = { x: t3.clientX, y: t3.clientY }, t3.target.setPointerCapture(t3.pointerId);
      return;
    }
    if (t3.button !== 0 || !e2.current) return;
    let r2 = p(t3, e2.current, k, A);
    if (j === `move` && !K) {
      let e3 = (n2 == null ? void 0 : n2.components) ?? [];
      for (let i2 = e3.length - 1; i2 >= 0; i2--) {
        let a2 = e3[i2], o2 = ((_a = a2.properties) == null ? void 0 : _a.symbolId) ? s(a2.properties.symbolId) : null, c2 = o2 ? 56 : u, l2 = o2 ? Math.max(30, a2.pins.length * 14 + 10) : Math.max(d, a2.pins.length * 8);
        if (r2.x >= a2.position.x - 10 && r2.x <= a2.position.x + c2 + 10 && r2.y >= a2.position.y - 10 && r2.y <= a2.position.y + l2 + 10) {
          let e4 = (n2 == null ? void 0 : n2.wires) ?? [], o3 = [];
          for (let t4 of a2.pins) {
            let n3 = a2.position.x + t4.position.x, r3 = a2.position.y + t4.position.y;
            for (let i3 = 0; i3 < e4.length; i3++) {
              let a3 = e4[i3];
              Math.hypot(a3.start.x - n3, a3.start.y - r3) < 2 && o3.push({ wireIdx: i3, endpoint: `start`, pinOffset: t4.position }), Math.hypot(a3.end.x - n3, a3.end.y - r3) < 2 && o3.push({ wireIdx: i3, endpoint: `end`, pinOffset: t4.position });
            }
          }
          De(o3), Ee({ compIdx: i2, offset: { x: r2.x - a2.position.x, y: r2.y - a2.position.y } }), t3.target.setPointerCapture(t3.pointerId);
          return;
        }
      }
    }
  }, [k, A, j, K, n2]), Ie = (0, c.useCallback)((t3) => {
    if (U && Y.current) {
      let e3 = t3.clientX - Y.current.x, n3 = t3.clientY - Y.current.y;
      Y.current = { x: t3.clientX, y: t3.clientY }, z(e3 / k, n3 / k);
      return;
    }
    if (!e2.current) return;
    let r2 = p(t3, e2.current, k, A), i2 = (n2 == null ? void 0 : n2.components) ?? [], a2 = j === `wire` ? h(r2, i2, f) : { x: m(r2.x, f), y: m(r2.y, f) };
    if (Oe(j === `wire` ? a2 : null), K) {
      let e3 = { x: m(r2.x - K.offset.x, f), y: m(r2.y - K.offset.y, f) };
      G(e3);
    } else (j === `place` || j === `wire` || j === `label`) && G(a2), j === `wire` && P && me(a2);
  }, [U, k, z, A, j, P, me, K, n2]), Le = (0, c.useCallback)(() => {
    if (U) Te(false), Y.current = null;
    else if (K && W) {
      if (q.length > 0) {
        let e3 = q.map((e4) => ({ wireIdx: e4.wireIdx, endpoint: e4.endpoint, pos: { x: W.x + e4.pinOffset.x, y: W.y + e4.pinOffset.y } }));
        Se(K.compIdx, { x: W.x, y: W.y, z: 0 }, e3);
      } else xe(K.compIdx, { x: W.x, y: W.y, z: 0 });
      Ee(null), G(null), De([]);
    }
  }, [U, K, W, q, xe, Se]), Re = (0, c.useCallback)((t3) => {
    var _a;
    if (!e2.current || U || K) return;
    let r2 = p(t3, e2.current, k, A), i2 = (n2 == null ? void 0 : n2.components) ?? [], o2 = j === `wire` ? h(r2, i2, f) : { x: m(r2.x, f), y: m(r2.y, f) };
    if (j === `place` && M) {
      let e3 = s(M);
      if (!e3) return;
      let t4 = he(e3.prefix), n3 = e3.footprintTemplate ? JSON.stringify(e3.footprintTemplate) : void 0;
      ge({ ref: t4, value: e3.defaultValue, footprintId: ((_a = e3.footprintTemplate) == null ? void 0 : _a.name) ?? ``, position: { x: o2.x, y: o2.y }, rotation: N, pins: e3.pins.map((e4) => ({ ...e4 })), properties: { symbolId: e3.id, ...n3 ? { footprintTemplate: n3 } : {} } });
    } else if (j === `wire`) {
      if (!P) B(o2);
      else {
        let e3 = { x: o2.x, y: P.y }, t4 = [];
        (e3.x !== P.x || e3.y !== P.y) && (V({ start: P, end: e3 }), t4.push({ start: P, end: e3 })), (o2.x !== e3.x || o2.y !== e3.y) && (V({ start: e3, end: o2 }), t4.push({ start: e3, end: o2 }));
        let r3 = (n2 == null ? void 0 : n2.wires) ?? [], i3 = (n2 == null ? void 0 : n2.junctions) ?? [], a2 = (e4) => i3.some((t5) => Math.hypot(t5.position.x - e4.x, t5.position.y - e4.y) < 1), s2 = (e4, t5) => {
          if (!a2(e4)) {
            for (let n3 of t5) if (te(e4, n3.start, n3.end)) {
              H({ position: e4 });
              return;
            }
          }
        };
        for (let e4 of t4) s2(e4.start, r3), s2(e4.end, r3);
        for (let e4 of r3) s2(e4.start, t4), s2(e4.end, t4);
        B(o2);
      }
    } else if (j === `label`) {
      let e3 = a.getState().schLabelName;
      ye({ name: e3, position: o2, scope: `Global` });
    } else j === `select` && I({ type: `none` });
  }, [k, A, j, M, N, P, ge, V, ye, H, B, he, I, U, K, n2]), ze = (0, c.useCallback)((t3) => {
    if (!e2.current || j !== `wire` || !P) return;
    let r2 = h(p(t3, e2.current, k, A), (n2 == null ? void 0 : n2.components) ?? [], f), i2 = { x: r2.x, y: P.y }, o2 = [];
    (i2.x !== P.x || i2.y !== P.y) && (V({ start: P, end: i2 }), o2.push({ start: P, end: i2 })), (r2.x !== i2.x || r2.y !== i2.y) && (V({ start: i2, end: r2 }), o2.push({ start: i2, end: r2 }));
    let s2 = (n2 == null ? void 0 : n2.wires) ?? [], c2 = (n2 == null ? void 0 : n2.junctions) ?? [], l2 = (e3) => c2.some((t4) => Math.hypot(t4.position.x - e3.x, t4.position.y - e3.y) < 1), u2 = (e3, t4) => {
      if (!l2(e3)) {
        for (let n3 of t4) if (te(e3, n3.start, n3.end)) {
          H({ position: e3 });
          return;
        }
      }
    };
    for (let e3 of o2) u2(e3.start, s2), u2(e3.end, s2);
    for (let e3 of s2) u2(e3.start, o2), u2(e3.end, o2);
    a.getState().cancelSchWire();
  }, [k, A, j, P, V, H, n2]), Be = (0, c.useCallback)((e3, t3, n3) => {
    j !== `wire` && (e3.stopPropagation(), j === `delete` ? _e(t3) : I({ type: `component`, ref: n3 }));
  }, [j, I, _e]), Ve = (0, c.useCallback)((e3, t3, n3) => {
    e3.stopPropagation(), j === `delete` ? ve(t3) : n3 && I({ type: `net`, netId: n3 });
  }, [j, I, ve]), He = (0, c.useCallback)((e3, t3, n3) => {
    e3.stopPropagation(), j === `delete` ? be(t3) : I({ type: `net`, netId: n3 });
  }, [j, I, be]);
  if (!n2) return (0, l.jsxs)(`div`, { className: `flex flex-col items-center justify-center h-full gap-3`, children: [(0, l.jsx)(`span`, { className: `text-text-muted text-sm`, children: `No schematic data` }), (0, l.jsx)(`button`, { className: `px-3 py-1.5 text-xs bg-brand text-white rounded hover:bg-brand/90 transition-colors`, onClick: () => {
    Ce();
    let e3 = r.getState().document;
    i(e3).length === 0 && we();
  }, children: `New Circuit` })] });
  let Q = { bg: t2 ? `#111` : `#fafafa`, wire: t2 ? `#aaa` : `#333`, body: t2 ? `#2a2a2a` : `#f0f0f0`, bodyStroke: t2 ? `#555` : `#999`, text: t2 ? `#ddd` : `#222`, textMuted: t2 ? `#888` : `#999`, accent: `#3b82f6`, accentGlow: `rgba(59, 130, 246, 0.3)`, junction: t2 ? `#4CAF50` : `#2E7D32`, label: t2 ? `#FFEB3B` : `#F57F17`, ghost: `rgba(59, 130, 246, 0.5)` }, Ue = U ? `grabbing` : j === `place` ? `copy` : j === `wire` ? `crosshair` : j === `delete` ? `not-allowed` : j === `move` ? `move` : `default`, $ = M ? s(M) : null;
  return (0, l.jsx)(`svg`, { ref: e2, className: `w-full h-full`, style: { background: Q.bg, cursor: Ue }, onWheel: Pe, onPointerDown: Fe, onPointerMove: Ie, onPointerUp: Le, onClick: Re, onDoubleClick: ze, onContextMenu: (e3) => {
    e3.preventDefault(), P && a.getState().cancelSchWire();
  }, children: (0, l.jsxs)(`g`, { transform: `translate(${A.x * k + 200}, ${A.y * k + 200}) scale(${k})`, children: [(0, l.jsxs)(`defs`, { children: [(0, l.jsx)(`pattern`, { id: `sch-grid`, width: f, height: f, patternUnits: `userSpaceOnUse`, children: (0, l.jsx)(`circle`, { cx: f / 2, cy: f / 2, r: 0.5, fill: t2 ? `#222` : `#ddd` }) }), (0, l.jsx)(`style`, { children: `
            @keyframes pin-pulse {
              0%, 100% { r: 7; opacity: 0.3; }
              50% { r: 10; opacity: 0.15; }
            }
            .sch-pin-glow { animation: pin-pulse 1.2s ease-in-out infinite; }
          ` })] }), (0, l.jsx)(`rect`, { x: -1e3, y: -1e3, width: 2e3, height: 2e3, fill: `url(#sch-grid)` }), n2.wires.map((e3, t3) => {
    let r2 = ne(e3, x, n2.components), i2 = Z(r2), a2 = Ne.get(t3), o2 = (a2 == null ? void 0 : a2.start) ?? e3.start, s2 = (a2 == null ? void 0 : a2.end) ?? e3.end, c2 = de(r2), u2 = c2 == null ? null : re(c2);
    return (0, l.jsx)(`line`, { x1: o2.x, y1: o2.y, x2: s2.x, y2: s2.y, stroke: u2 ?? (i2 ? Q.accent : Q.wire), strokeWidth: u2 == null ? i2 ? 2 : 1.5 : 2.5, strokeLinecap: `round`, style: u2 == null ? i2 ? { filter: `drop-shadow(0 0 4px ${Q.accentGlow})` } : void 0 : { filter: `drop-shadow(0 0 3px ${u2})` }, className: `cursor-pointer`, onClick: (e4) => Ve(e4, t3, r2), onPointerEnter: () => r2 && L(r2), onPointerLeave: () => L(null) }, `w-${t3}`);
  }), n2.junctions.map((e3, t3) => (0, l.jsx)(`circle`, { cx: e3.position.x, cy: e3.position.y, r: 3, fill: Q.junction }, `j-${t3}`)), Me.map((e3, t3) => (0, l.jsx)(`circle`, { cx: e3.x, cy: e3.y, r: 3, fill: Q.wire }, `cd-${t3}`)), n2.labels.map((e3, t3) => (0, l.jsxs)(`g`, { transform: `translate(${e3.position.x}, ${e3.position.y})`, children: [(0, l.jsx)(`rect`, { x: -2, y: -10, width: e3.name.length * 6 + 4, height: 14, fill: Z(e3.name) ? Q.accent : Q.label, opacity: 0.2, rx: 2 }), (0, l.jsx)(`text`, { fontSize: 9, fill: Z(e3.name) ? Q.accent : Q.label, fontFamily: `monospace`, dominantBaseline: `middle`, className: `cursor-pointer`, onClick: (n3) => He(n3, t3, e3.name), onPointerEnter: () => L(e3.name), onPointerLeave: () => L(null), children: e3.name })] }, `l-${t3}`)), n2.components.map((e3, t3) => {
    var _a, _b, _c, _d;
    let n3 = X === e3.ref, r2 = [..._(e3.ref, x)].some((e4) => Z(e4)), i2 = n3 || r2, a2 = ((_a = e3.properties) == null ? void 0 : _a.symbolId) ? s(e3.properties.symbolId) : null, o2 = (K == null ? void 0 : K.compIdx) === t3 && W ? W : e3.position;
    if (a2) return (0, l.jsxs)(`g`, { transform: `translate(${o2.x}, ${o2.y})${e3.rotation ? ` rotate(${e3.rotation})` : ``}`, className: `cursor-pointer`, onClick: (n4) => Be(n4, t3, e3.ref), onContextMenu: (t4) => ue(t4, e3.ref), onPointerEnter: () => {
      let t4 = _(e3.ref, x).values().next().value;
      t4 && L(t4);
    }, onPointerLeave: () => L(null), opacity: (K == null ? void 0 : K.compIdx) === t3 ? 0.6 : 1, children: [E && ((_b = e3.properties) == null ? void 0 : _b.symbolId) === `led` && (() => {
      let t4 = Math.max(0, Math.min(1, Math.abs(fe(e3.ref) ?? 0) / 0.01));
      return t4 <= 0.03 ? null : (0, l.jsx)(`circle`, { cx: 20, cy: 15, r: 9 + 13 * t4, fill: `#ff5a36`, opacity: 0.55 * t4, style: { filter: `blur(${4 + 6 * t4}px)` } });
    })(), E && ((_c = e3.properties) == null ? void 0 : _c.symbolId) === `motor` && (() => {
      let t4 = pe(e3.ref) * 180 / Math.PI % 360, n4 = Math.abs(pe(e3.ref)) > 0.01;
      return (0, l.jsxs)(`g`, { transform: `rotate(${t4} 20 15)`, children: [(0, l.jsx)(`line`, { x1: 20, y1: 3, x2: 20, y2: 27, stroke: n4 ? `#4ade80` : Q.bodyStroke, strokeWidth: 2.5, strokeLinecap: `round` }), (0, l.jsx)(`circle`, { cx: 20, cy: 3, r: 2.5, fill: `#4ade80`, opacity: n4 ? 1 : 0.3 })] });
    })(), y(a2.graphics, i2 ? Q.accent : Q.bodyStroke, Q.body), e3.pins.map((t4, n4) => {
      let r3 = g(e3.ref, t4.number, x), i3 = Z(r3);
      return (0, l.jsx)(`circle`, { cx: t4.position.x, cy: t4.position.y, r: 2, fill: i3 ? Q.accent : Q.bodyStroke }, `p-${n4}`);
    }), (0, l.jsx)(`text`, { x: 20, y: -6, fontSize: 9, fontWeight: `bold`, fill: Q.text, textAnchor: `middle`, fontFamily: `monospace`, children: e3.ref }), (0, l.jsx)(`text`, { x: 20, y: -6 + (((_d = a2.graphics.find((e4) => e4.type === `rect`)) == null ? void 0 : _d.height) ?? 30) + 16, fontSize: 8, fill: Q.textMuted, textAnchor: `middle`, fontFamily: `monospace`, children: e3.value })] }, `c-${t3}`);
    let c2 = Math.max(d, e3.pins.length * 8);
    return (0, l.jsxs)(`g`, { transform: `translate(${o2.x}, ${o2.y})${e3.rotation ? ` rotate(${e3.rotation})` : ``}`, className: `cursor-pointer`, onClick: (n4) => Be(n4, t3, e3.ref), onContextMenu: (t4) => ue(t4, e3.ref), onPointerEnter: () => {
      let t4 = _(e3.ref, x).values().next().value;
      t4 && L(t4);
    }, onPointerLeave: () => L(null), opacity: (K == null ? void 0 : K.compIdx) === t3 ? 0.6 : 1, children: [(0, l.jsx)(`rect`, { x: 0, y: 0, width: u, height: c2, fill: Q.body, stroke: i2 ? Q.accent : Q.bodyStroke, strokeWidth: i2 ? 2 : 1, rx: 2, style: i2 ? { filter: `drop-shadow(0 0 6px ${Q.accentGlow})` } : void 0 }), e3.pins.map((t4, n4) => {
      let r3 = n4 < e3.pins.length / 2, i3 = 10 + (r3 ? n4 : n4 - Math.ceil(e3.pins.length / 2)) * 14, a3 = r3 ? 0 : u, o3 = r3 ? -1 : 1, s2 = g(e3.ref, t4.number, x), c3 = Z(s2);
      return (0, l.jsxs)(`g`, { children: [(0, l.jsx)(`line`, { x1: a3, y1: i3, x2: a3 + ee * o3, y2: i3, stroke: c3 ? Q.accent : Q.bodyStroke, strokeWidth: c3 ? 2 : 1.5 }), (0, l.jsx)(`text`, { x: a3 + (r3 ? 3 : -3), y: i3 - 3, fontSize: 6, fill: Q.textMuted, textAnchor: r3 ? `start` : `end`, fontFamily: `monospace`, children: t4.number })] }, `p-${n4}`);
    }), (0, l.jsx)(`text`, { x: u / 2, y: -4, fontSize: 9, fontWeight: `bold`, fill: Q.text, textAnchor: `middle`, fontFamily: `monospace`, children: e3.ref }), (0, l.jsx)(`text`, { x: u / 2, y: c2 + 10, fontSize: 8, fill: Q.textMuted, textAnchor: `middle`, fontFamily: `monospace`, children: e3.value })] }, `c-${t3}`);
  }), O && (0, l.jsxs)(`g`, { pointerEvents: `none`, children: [je.map((e3) => (0, l.jsxs)(`g`, { transform: `translate(${e3.x}, ${e3.y - 6})`, children: [(0, l.jsx)(`rect`, { x: -2, y: -9, width: v(e3.v, `V`).length * 5.4 + 4, height: 12, fill: t2 ? `#052e16` : `#dcfce7`, opacity: 0.9, rx: 2 }), (0, l.jsx)(`text`, { fontSize: 8, fill: `#4ade80`, fontFamily: `monospace`, dominantBaseline: `hanging`, y: -8, children: v(e3.v, `V`) })] }, `dcv-${e3.net}`)), n2.components.map((e3, t3) => {
    let n3 = le(e3.ref);
    return n3 == null ? null : (0, l.jsx)(`text`, { x: e3.position.x + 20, y: e3.position.y + 48, fontSize: 7, fill: `#4ade80`, textAnchor: `middle`, fontFamily: `monospace`, opacity: 0.9, children: v(n3, `A`) }, `dci-${t3}`);
  })] }), D.status === `blocked` && n2.components.map((e3, t3) => se.has(e3.ref) ? (0, l.jsxs)(`g`, { pointerEvents: `none`, children: [(0, l.jsx)(`rect`, { x: e3.position.x - 8, y: e3.position.y - 16, width: 56, height: 60, fill: `none`, stroke: `#f87171`, strokeWidth: 1.5, strokeDasharray: `4 3`, rx: 4, style: { filter: `drop-shadow(0 0 4px rgba(248,113,113,0.5))` } }), (0, l.jsx)(`text`, { x: e3.position.x + 44, y: e3.position.y - 8, fontSize: 10, fill: `#f87171`, fontFamily: `monospace`, children: `!` }), (0, l.jsx)(`title`, { children: ce(e3.ref) })] }, `blk-${t3}`) : null), j === `place` && $ && W && (0, l.jsxs)(`g`, { transform: `translate(${W.x}, ${W.y})${N ? ` rotate(${N})` : ``}`, opacity: 0.5, pointerEvents: `none`, children: [y($.graphics, Q.accent, `none`), $.pins.map((e3, t3) => (0, l.jsx)(`circle`, { cx: e3.position.x, cy: e3.position.y, r: 2, fill: Q.accent, opacity: 0.5 }, `gp-${t3}`))] }), j === `wire` && P && F && (() => {
    let e3 = Math.abs(F.x - P.x), t3 = Math.abs(F.y - P.y), n3 = F.x, r2 = P.y, i2 = Math.min(4, e3, t3), a2;
    if (e3 < 0.5 || t3 < 0.5) a2 = `M${P.x},${P.y} L${F.x},${F.y}`;
    else {
      let e4 = F.x > P.x ? 1 : -1, t4 = F.y > P.y ? 1 : -1;
      a2 = `M${P.x},${P.y} L${n3 - i2 * e4},${r2} Q${n3},${r2} ${n3},${r2 + i2 * t4} L${F.x},${F.y}`;
    }
    return (0, l.jsxs)(`g`, { pointerEvents: `none`, children: [(0, l.jsx)(`path`, { d: a2, fill: `none`, stroke: Q.accent, strokeWidth: 2, strokeLinecap: `round`, opacity: 0.6, strokeDasharray: `4 2` }), (0, l.jsx)(`circle`, { cx: P.x, cy: P.y, r: 3, fill: Q.accent, opacity: 0.8 }), (0, l.jsx)(`circle`, { cx: F.x, cy: F.y, r: 3, fill: Q.accent, opacity: 0.8 })] });
  })(), j === `wire` && n2.components.map((e3, t3) => e3.pins.map((n3, r2) => (0, l.jsx)(`circle`, { cx: e3.position.x + n3.position.x, cy: e3.position.y + n3.position.y, r: 2, fill: Q.accent, opacity: 0.3, pointerEvents: `none` }, `pd-${t3}-${r2}`))), j === `wire` && J && (0, l.jsx)(`g`, { pointerEvents: `none`, children: J.isPin ? (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(`circle`, { cx: J.x, cy: J.y, r: 8, fill: `none`, stroke: Q.accent, strokeWidth: 1.5, className: `sch-pin-glow` }), (0, l.jsx)(`circle`, { cx: J.x, cy: J.y, r: 4, fill: Q.accent, opacity: 0.6 })] }) : (0, l.jsx)(`circle`, { cx: J.x, cy: J.y, r: 2.5, fill: `none`, stroke: Q.accent, strokeWidth: 1, opacity: 0.4 }) }), j === `label` && W && (0, l.jsxs)(`g`, { transform: `translate(${W.x}, ${W.y})`, opacity: 0.5, pointerEvents: `none`, children: [(0, l.jsx)(`rect`, { x: -2, y: -10, width: a.getState().schLabelName.length * 6 + 4, height: 14, fill: Q.accent, opacity: 0.3, rx: 2 }), (0, l.jsx)(`text`, { fontSize: 9, fill: Q.accent, fontFamily: `monospace`, dominantBaseline: `middle`, children: a.getState().schLabelName })] })] }) });
}
export {
  b as SchematicCanvas
};
