import { n as e, t } from "./utils-D0T3A-kS.js";
import { O as n } from "./three-drei-_EcrAYRL.js";
var r = (e2) => typeof e2 == `boolean` ? `${e2}` : e2 === 0 ? `0` : e2, i = e, a = (e2, t2) => (n2) => {
  var _a;
  if ((t2 == null ? void 0 : t2.variants) == null) return i(e2, n2 == null ? void 0 : n2.class, n2 == null ? void 0 : n2.className);
  let { variants: a2, defaultVariants: o2 } = t2, s2 = Object.keys(a2).map((e3) => {
    let t3 = n2 == null ? void 0 : n2[e3], i2 = o2 == null ? void 0 : o2[e3];
    if (t3 === null) return null;
    let s3 = r(t3) || r(i2);
    return a2[e3][s3];
  }), c2 = n2 && Object.entries(n2).reduce((e3, t3) => {
    let [n3, r2] = t3;
    return r2 === void 0 || (e3[n3] = r2), e3;
  }, {});
  return i(e2, s2, (_a = t2 == null ? void 0 : t2.compoundVariants) == null ? void 0 : _a.reduce((e3, t3) => {
    let { class: n3, className: r2, ...i2 } = t3;
    return Object.entries(i2).every((e4) => {
      let [t4, n4] = e4;
      return Array.isArray(n4) ? n4.includes({ ...o2, ...c2 }[t4]) : { ...o2, ...c2 }[t4] === n4;
    }) ? [...e3, n3, r2] : e3;
  }, []), n2 == null ? void 0 : n2.class, n2 == null ? void 0 : n2.className);
}, o = n(), s = a(`inline-flex items-center justify-center gap-1.5 rounded-md text-xs font-medium transition-colors duration-150 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50 cursor-pointer`, { variants: { variant: { default: `bg-brand text-white hover:bg-brand-hover`, ghost: `hover:bg-border/50 text-text-muted hover:text-text .light &:hover:bg-border-light/50 .light &:text-text-muted-light .light &:hover:text-text-light`, outline: `border border-border hover:bg-border/30 text-text-muted hover:text-text`, danger: `bg-danger text-white hover:opacity-90` }, size: { sm: `h-7 px-2.5`, md: `h-8 px-3`, lg: `h-9 px-4`, icon: `h-8 w-8`, "icon-sm": `h-7 w-7` } }, defaultVariants: { variant: `default`, size: `md` } });
function c({ className: e2, variant: n2, size: r2, ...i2 }) {
  return (0, o.jsx)(`button`, { className: t(s({ variant: n2, size: r2, className: e2 })), ...i2 });
}
export {
  c as t
};
