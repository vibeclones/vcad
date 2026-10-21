import { R as c, L as x, A as d } from "./mermaid-GHXKKRXX-YinSIPIC.js";
import { b as s, k as f } from "./three-fiber-GW7QWJN8.js";
import "./index-CF9msCJo.js";
import "./three-drei-B7JBl7yq.js";
import "./three-tnxpQXqG.js";
var E = ({ code: i, language: e, raw: t, className: m, startLine: u, lineNumbers: n, ...g }) => {
  let { shikiTheme: o } = s.useContext(c), a = x(), [h, r] = s.useState(t);
  return s.useEffect(() => {
    if (!a) {
      r(t);
      return;
    }
    let l = a.highlight({ code: i, language: e, themes: o }, (p) => {
      r(p);
    });
    l && r(l);
  }, [i, e, o, a, t]), f.jsx(d, { className: m, language: e, lineNumbers: n, result: h, startLine: u, ...g });
};
export {
  E as HighlightedCodeBlockBody
};
