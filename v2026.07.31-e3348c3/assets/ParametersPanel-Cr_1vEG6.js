import { b as f, k as e } from "./three-fiber-GW7QWJN8.js";
import { b7 as x, be as $, bf as S, bg as N, bh as C, bi as k, bj as E, bc as D, bk as R, bl as z, bm as A } from "./index-BFVdGF5u.js";
import { c as B } from "./CaretLeft.es-DOEt-LxW.js";
import { m as T } from "./WarningCircle.es-UgQMqsZB.js";
import "./three-tnxpQXqG.js";
import "./three-drei-en0aG1CM.js";
function M() {
  const t = D((s) => s.setSidebarPane);
  return e.jsx(k, { content: "Back to tree", side: "bottom", children: e.jsx("button", { onClick: () => t("tree"), className: "flex h-6 w-6 -ml-1 shrink-0 items-center justify-center text-text-muted hover:text-text hover:bg-hover", "aria-label": "Back to tree", children: e.jsx(B, { size: 14 }) }) });
}
function F({ children: t }) {
  return e.jsx("div", { className: "text-[10px] font-medium uppercase tracking-wider text-text-muted pt-2 pb-1", children: t });
}
function O(t, s = "p") {
  if (!(s in t)) return s;
  let o = 1;
  for (; ; ) {
    const d = `${s}${o}`;
    if (!(d in t)) return d;
    o++;
  }
}
function V({ name: t, parameter: s, env: o, onRename: d, onUpdate: b, onRemove: p, references: l }) {
  const [m, u] = f.useState(t), [r, i] = f.useState(String(s.value)), [a, c] = f.useState(null), h = o[t], g = s.unit ?? "";
  function w() {
    const n = m.trim();
    if (!n || n === t) {
      u(t);
      return;
    }
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(n)) {
      c(`invalid name '${n}'`), u(t);
      return;
    }
    c(null), d(t, n);
  }
  function P() {
    const n = r.trim();
    if (!n) {
      c("value required"), i(String(s.value));
      return;
    }
    const v = Number(n);
    let j;
    if (!Number.isNaN(v) && Number.isFinite(v)) j = v;
    else try {
      N(n), j = n;
    } catch (y) {
      c(y instanceof A ? y.message : "invalid expression");
      return;
    }
    c(null), b(t, { ...s, value: j });
  }
  return e.jsxs("div", { className: "flex flex-col gap-1 border-b border-border/40 py-2", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("input", { type: "text", value: m, onChange: (n) => u(n.target.value), onBlur: w, onKeyDown: (n) => {
    n.key === "Enter" && n.currentTarget.blur(), n.key === "Escape" && (u(t), n.currentTarget.blur());
  }, spellCheck: false, className: "flex-1 min-w-0 rounded-md bg-card border border-border text-text text-xs font-mono outline-none px-2 py-1 focus:border-brand focus:ring-2 focus:ring-brand/30 transition-colors", "aria-label": "Parameter name" }), e.jsx("button", { type: "button", onClick: () => {
    l > 0 && !confirm(`${t} is referenced by ${l} binding${l === 1 ? "" : "s"}. Remove anyway?`) || p(t);
  }, className: "flex h-6 w-6 shrink-0 items-center justify-center text-text-muted hover:text-red-500 hover:bg-hover", "aria-label": `Remove ${t}`, title: `Remove ${t}`, children: e.jsx(R, { size: 12 }) })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("input", { type: "text", value: r, onChange: (n) => {
    i(n.target.value), c(null);
  }, onBlur: P, onKeyDown: (n) => {
    n.key === "Enter" && n.currentTarget.blur(), n.key === "Escape" && (i(String(s.value)), n.currentTarget.blur());
  }, spellCheck: false, className: z("flex-1 min-w-0 rounded-md bg-card border text-text text-xs font-mono outline-none px-2 py-1 focus:ring-2 focus:ring-brand/30 transition-colors", a ? "border-red-500" : "border-border focus:border-brand"), "aria-label": `${t} value` }), e.jsx("span", { className: "text-[10px] text-text-muted tabular-nums min-w-[4rem] text-right", title: a ?? void 0, children: a ? "!" : h != null && Number.isFinite(h) ? `= ${q(h, 3)}${g ? ` ${g}` : ""}` : "= ?" })] }), a && e.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-red-500", children: [e.jsx(T, { size: 10 }), e.jsx("span", { children: a })] }), l > 0 && e.jsxs("div", { className: "text-[10px] text-text-muted", children: ["referenced by ", l, " field", l === 1 ? "" : "s"] })] });
}
function I() {
  const t = x((r) => r.parameters), s = x((r) => r.bindings), o = x((r) => r.setParameter), d = x((r) => r.renameParameter), b = x((r) => r.removeParameter), p = f.useMemo(() => {
    try {
      return $(t);
    } catch {
      const r = {};
      for (const [i, a] of Object.entries(t)) try {
        r[i] = typeof a.value == "number" ? a.value : S(a.value, r);
      } catch {
        r[i] = Number.NaN;
      }
      return r;
    }
  }, [t]), l = f.useMemo(() => {
    const r = {};
    for (const i of Object.values(s)) if (typeof i == "string") try {
      const a = N(i);
      for (const c of C(a)) r[c] = (r[c] ?? 0) + 1;
    } catch {
    }
    return r;
  }, [s]), m = Object.keys(t).sort();
  function u() {
    const r = O(t, "p");
    o(r, { value: 0 });
  }
  return e.jsxs("div", { className: "flex h-full w-full flex-col overflow-hidden", children: [e.jsxs("div", { className: "flex items-center gap-1 border-b border-border px-2 py-1", children: [e.jsx(M, {}), e.jsx("span", { className: "flex-1 text-xs font-medium uppercase tracking-wider text-text-muted", children: "Parameters" }), e.jsx(k, { content: "Add parameter", side: "bottom", children: e.jsx("button", { type: "button", onClick: u, className: "flex h-6 w-6 items-center justify-center text-text-muted hover:text-text hover:bg-hover", "aria-label": "Add parameter", children: e.jsx(E, { size: 14 }) }) })] }), e.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto px-2 pb-4", children: m.length === 0 ? e.jsxs("div", { className: "pt-6 text-center text-xs text-text-muted", children: ["No parameters yet.", e.jsx("br", {}), e.jsx("button", { type: "button", onClick: u, className: "mt-2 text-brand hover:underline", children: "Add your first parameter" }), e.jsxs("div", { className: "mt-6 text-[10px] opacity-75 px-4", children: ["Parameters can be referenced by any numeric field. Try: ", e.jsx("span", { className: "font-mono", children: "wheelbase" }), ",", " ", e.jsx("span", { className: "font-mono", children: "headAngle" }), ", or a derived value like ", e.jsx("span", { className: "font-mono", children: "wheelbase * 0.5" }), "."] })] }) : e.jsxs(e.Fragment, { children: [e.jsx(F, { children: "Definitions" }), m.map((r) => e.jsx(V, { name: r, parameter: t[r], env: p, onRename: d, onUpdate: o, onRemove: b, references: l[r] ?? 0 }, r))] }) })] });
}
function q(t, s = 3) {
  const o = Math.pow(10, s);
  return Math.round(t * o) / o;
}
export {
  I as ParametersPanel
};
