import { R as c, L as x, A as d } from "./mermaid-GHXKKRXX-DKiXAARL.js";
import { b as s, k as f } from "./three-fiber-GW7QWJN8.js";
import "./index-B2PsV3Ii.js";
import "./three-drei-C9A0_-Vj.js";
import "./three-tnxpQXqG.js";
import "./document-to-loon-Ckb-OYWw.js";
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
