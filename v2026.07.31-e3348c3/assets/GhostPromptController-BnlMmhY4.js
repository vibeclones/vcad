import { b as a, k as l } from "./three-fiber-GW7QWJN8.js";
import { bl as c, bn as u, b4 as m, bc as p } from "./index-BFVdGF5u.js";
import "./three-tnxpQXqG.js";
import "./three-drei-en0aG1CM.js";
function d({ message: s, visible: r }) {
  const [o, t] = a.useState(false), [n, i] = a.useState(s);
  return a.useEffect(() => {
    if (r) {
      i(s), t(true);
      const e = setTimeout(() => t(false), 8e3);
      return () => clearTimeout(e);
    } else t(false);
  }, [r, s]), l.jsx("div", { className: c("absolute bottom-20 left-1/2 -translate-x-1/2 z-25 pointer-events-none", "transition-all duration-500", o ? "opacity-60" : "opacity-0"), children: l.jsx("div", { className: c("px-3 py-1.5", "bg-surface/80 backdrop-blur-sm", "border border-border/50", "text-xs text-text-muted"), children: n }) });
}
function g() {
  const s = u((e) => e.guidedFlowActive), r = u((e) => e.sessionsCompleted), o = m((e) => e.parts), t = p((e) => e.selectedPartIds), n = !s && r < 3, i = a.useMemo(() => n ? o.length === 1 ? "Open Create to add another shape" : o.length >= 2 && t.size === 0 ? "Select two parts to combine them" : t.size === 2 ? "Open Combine to merge or cut" : null : null, [n, o.length, t.size]);
  return l.jsx(d, { message: i ?? "", visible: !!i });
}
export {
  g as GhostPromptController
};
