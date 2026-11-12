import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { t as r } from "./utils-D0T3A-kS.js";
import { t as i } from "./onboarding-store-BxlWWPNy.js";
import { J as a, Z as o } from "./dist-_2fbu5WV.js";
var s = e(t(), 1), c = n();
function l({ message: e2, visible: t2 }) {
  let [n2, i2] = (0, s.useState)(false), [a2, o2] = (0, s.useState)(e2);
  return (0, s.useEffect)(() => {
    if (t2) {
      o2(e2), i2(true);
      let t3 = setTimeout(() => i2(false), 8e3);
      return () => clearTimeout(t3);
    }
    i2(false);
  }, [t2, e2]), (0, c.jsx)(`div`, { className: r(`absolute bottom-20 left-1/2 -translate-x-1/2 z-25 pointer-events-none`, `transition-all duration-500`, n2 ? `opacity-60` : `opacity-0`), children: (0, c.jsx)(`div`, { className: r(`px-3 py-1.5`, `bg-surface/80 backdrop-blur-sm`, `border border-border/50`, `text-xs text-text-muted`), children: a2 }) });
}
function u() {
  let e2 = i((e3) => e3.guidedFlowActive), t2 = i((e3) => e3.sessionsCompleted), n2 = a((e3) => e3.parts), r2 = o((e3) => e3.selectedPartIds), u2 = !e2 && t2 < 3, d = (0, s.useMemo)(() => u2 ? n2.length === 1 ? `Open Create to add another shape` : n2.length >= 2 && r2.size === 0 ? `Select two parts to combine them` : r2.size === 2 ? `Open Combine to merge or cut` : null : null, [u2, n2.length, r2.size]);
  return (0, c.jsx)(l, { message: d ?? ``, visible: !!d });
}
export {
  u as GhostPromptController
};
