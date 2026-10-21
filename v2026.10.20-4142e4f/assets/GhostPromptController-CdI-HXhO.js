import { b as a, k as u } from "./three-fiber-GW7QWJN8.js";
import { c, u as l, h as m, i as p } from "./index-CF9msCJo.js";
import "./three-tnxpQXqG.js";
import "./three-drei-B7JBl7yq.js";
function d({ message: s, visible: r }) {
  const [o, t] = a.useState(false), [n, i] = a.useState(s);
  return a.useEffect(() => {
    if (r) {
      i(s), t(true);
      const e = setTimeout(() => t(false), 8e3);
      return () => clearTimeout(e);
    } else t(false);
  }, [r, s]), u.jsx("div", { className: c("absolute bottom-20 left-1/2 -translate-x-1/2 z-25 pointer-events-none", "transition-all duration-500", o ? "opacity-60" : "opacity-0"), children: u.jsx("div", { className: c("px-3 py-1.5", "bg-surface/80 backdrop-blur-sm", "border border-border/50", "text-xs text-text-muted"), children: n }) });
}
function g() {
  const s = l((e) => e.guidedFlowActive), r = l((e) => e.sessionsCompleted), o = m((e) => e.parts), t = p((e) => e.selectedPartIds), n = !s && r < 3, i = a.useMemo(() => n ? o.length === 1 ? "Open Create to add another shape" : o.length >= 2 && t.size === 0 ? "Select two parts to combine them" : t.size === 2 ? "Open Combine to merge or cut" : null : null, [n, o.length, t.size]);
  return u.jsx(d, { message: i ?? "", visible: !!i });
}
export {
  g as GhostPromptController
};
