import { R as c, L as x, A as d } from "./mermaid-GHXKKRXX-Cgk2IN5v.js";
import { b as s, k as f } from "./three-fiber-GW7QWJN8.js";
import "./index-BiF9MVSB.js";
import "./three-drei-BkUUjjN5.js";
import "./three-tnxpQXqG.js";
import "./document-to-loon-VkoubMXy.js";
var j = ({ code: i, language: e, raw: t, className: l, startLine: u, lineNumbers: n, ...g }) => {
  let { shikiTheme: o } = s.useContext(c), r = x(), [p, a] = s.useState(t);
  return s.useEffect(() => {
    if (!r) {
      a(t);
      return;
    }
    let m = r.highlight({ code: i, language: e, themes: o }, (h) => {
      a(h);
    });
    m && a(m);
  }, [i, e, o, r, t]), f.jsx(d, { className: l, language: e, lineNumbers: n, result: p, startLine: u, ...g });
};
export {
  j as HighlightedCodeBlockBody
};
