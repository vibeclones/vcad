import { a as e, i as t, n, o as r, s as i, t as a } from "./dist-uaNeKfmY.js";
import { t as o } from "./X.es-eqQvie4c.js";
import { t as s } from "./Cube.es-BlHKvJW5.js";
import { t as c } from "./PencilSimple.es-iSn-py_w.js";
import { t as l } from "./FolderOpen.es-D8ZYtesS.js";
import { t as u } from "./Play.es-CbJ_KDSj.js";
import { t as d } from "./GithubLogo.es-DYqyp6Bm.js";
import { t as f } from "./Book.es-DgR2Xp6U.js";
import { t as p } from "./ChatCircle.es-kd9Hf5Af.js";
import { t as m } from "./utils-D0T3A-kS.js";
import { E as h, J as g, R as _, Z as v } from "./dist-DCVtPzLm.js";
import { n as y } from "./locale-store-CBtVK6mS.js";
import { t as b } from "./changelog-store-Dy0iFUVP.js";
import { O as x } from "./three-drei-_EcrAYRL.js";
var S = x(), C = [{ id: `primitive`, icon: s, labelKey: `modal.about.action.shape`, descKey: `modal.about.action.shape_desc`, color: `text-emerald-400` }, { id: `sketch`, icon: c, labelKey: `modal.about.action.sketch`, descKey: `modal.about.action.sketch_desc`, color: `text-blue-400` }, { id: `open`, icon: l, labelKey: `modal.about.action.open`, descKey: `modal.about.action.open_desc`, color: `text-amber-400` }, { id: `tutorial`, icon: u, labelKey: `modal.about.action.tutorial`, descKey: `modal.about.action.tutorial_desc`, color: `text-violet-400` }], w = [{ keys: `\u2318K`, descKey: `modal.about.keyhint.palette` }, { keys: `1-7`, descKey: `modal.about.keyhint.tabs` }, { keys: `M R S`, descKey: `modal.about.keyhint.transform` }, { keys: `\u2318\u21E7U D I`, descKey: `modal.about.keyhint.boolean` }];
function T({ open: s2, onOpenChange: c2 }) {
  let l2 = g((e2) => e2.addPrimitive), u2 = v((e2) => e2.select), x2 = v((e2) => e2.setTransformMode), T2 = _((e2) => e2.enterSketchMode), E = b((e2) => e2.openPanel);
  y((e2) => e2.locale);
  function D(e2) {
    switch (c2(false), e2) {
      case `primitive`: {
        let e3 = l2(`cube`);
        u2(e3), x2(`translate`);
        break;
      }
      case `sketch`:
        T2(`XY`);
        break;
      case `open`:
        window.dispatchEvent(new CustomEvent(`vcad:open`));
        break;
      case `tutorial`:
        window.dispatchEvent(new CustomEvent(`vcad:start-tutorial`));
    }
  }
  return (0, S.jsx)(r, { open: s2, onOpenChange: c2, children: (0, S.jsxs)(e, { children: [(0, S.jsx)(t, { className: `fixed inset-0 z-50 bg-black/50 backdrop-blur-sm` }), (0, S.jsxs)(n, { className: m(`fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2`, `rounded-xl border border-border bg-surface p-8 shadow-xl select-none`, `focus:outline-none`), children: [(0, S.jsx)(a, { className: `absolute right-4 top-4 p-2 text-text-muted hover:text-text transition-colors cursor-pointer`, children: (0, S.jsx)(o, { size: 16 }) }), (0, S.jsxs)(`div`, { className: `text-center mb-8`, children: [(0, S.jsxs)(i, { className: `text-3xl font-bold tracking-tight text-text mb-2`, children: [`vcad`, (0, S.jsx)(`span`, { className: `text-brand`, children: `.` })] }), (0, S.jsx)(`p`, { className: `text-sm text-text-muted`, children: h(`modal.about.tagline`) })] }), (0, S.jsx)(`div`, { className: `grid grid-cols-2 gap-3 mb-8`, children: C.map((e2) => (0, S.jsxs)(`button`, { onClick: () => D(e2.id), className: m(`flex flex-col items-start gap-1 p-4`, `bg-bg hover:bg-hover transition-colors text-left`), children: [(0, S.jsx)(e2.icon, { size: 20, className: e2.color }), (0, S.jsx)(`span`, { className: `text-sm font-medium text-text`, children: h(e2.labelKey) }), (0, S.jsx)(`span`, { className: `text-xs text-text-muted`, children: h(e2.descKey) })] }, e2.id)) }), (0, S.jsx)(`div`, { className: `flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8 text-xs text-text-muted`, children: w.map((e2) => (0, S.jsxs)(`div`, { className: `flex items-center gap-1.5`, children: [(0, S.jsx)(`kbd`, { className: `px-1.5 py-0.5 bg-bg text-[10px] font-mono`, children: e2.keys }), (0, S.jsx)(`span`, { children: h(e2.descKey) })] }, e2.keys)) }), (0, S.jsxs)(`div`, { className: `flex items-center justify-center gap-6 text-xs`, children: [(0, S.jsxs)(`a`, { href: `https://github.com/ecto/vcad`, target: `_blank`, rel: `noopener noreferrer`, className: `flex items-center gap-1.5 text-text-muted hover:text-text transition-colors`, children: [(0, S.jsx)(d, { size: 14 }), (0, S.jsx)(`span`, { children: `GitHub` })] }), (0, S.jsxs)(`a`, { href: `https://vcad.io/docs`, target: `_blank`, rel: `noopener noreferrer`, className: `flex items-center gap-1.5 text-text-muted hover:text-text transition-colors`, children: [(0, S.jsx)(f, { size: 14 }), (0, S.jsx)(`span`, { children: h(`modal.about.docs`) })] }), (0, S.jsxs)(`a`, { href: `https://discord.gg/vcad`, target: `_blank`, rel: `noopener noreferrer`, className: `flex items-center gap-1.5 text-text-muted hover:text-text transition-colors`, children: [(0, S.jsx)(p, { size: 14 }), (0, S.jsx)(`span`, { children: `Discord` })] }), (0, S.jsxs)(`button`, { onClick: () => {
    E(), c2(false);
  }, className: `text-text-muted/50 hover:text-brand transition-colors`, title: h(`modal.about.whats_new`), children: [`v`, `0.0.0`] })] }), (0, S.jsxs)(`div`, { className: `mt-4 flex items-center justify-center gap-4 text-[11px] text-text-muted/60`, children: [(0, S.jsx)(`a`, { href: `/privacy`, className: `hover:text-text-muted transition-colors`, children: h(`footer.privacy`) }), (0, S.jsx)(`a`, { href: `/terms`, className: `hover:text-text-muted transition-colors`, children: h(`footer.terms`) }), (0, S.jsx)(`a`, { href: `/security`, className: `hover:text-text-muted transition-colors`, children: h(`footer.security`) }), (0, S.jsx)(`span`, { children: `\xB7` }), (0, S.jsx)(`a`, { href: `https://muni.works`, target: `_blank`, rel: `noopener noreferrer`, className: `hover:text-text-muted transition-colors`, children: `\xA9 2026 Municipal Robotics` })] })] })] }) });
}
export {
  T as AboutModal
};
