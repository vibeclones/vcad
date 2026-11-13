import { t as e } from "./react-Cf1qM0wN.js";
var t = e((e2) => ({ panelOpen: false, openPanel: () => e2({ panelOpen: true }), closePanel: () => e2({ panelOpen: false, error: null }), pattern: null, setPattern: (t2) => e2({ pattern: t2 }), stats: null, setStats: (t2) => e2({ stats: t2 }), error: null, setError: (t2) => e2({ error: t2 }), selectedFormat: `pes`, setSelectedFormat: (t2) => e2({ selectedFormat: t2 }), fileName: null, setFileName: (t2) => e2({ fileName: t2 }), patternJson: null, setPatternJson: (t2) => e2({ patternJson: t2 }) }));
function n(e2) {
  let t2 = Math.floor(e2 / 60), n2 = Math.floor(e2 % 60);
  return t2 > 0 ? `${t2}m ${n2}s` : `${n2}s`;
}
export {
  t as n,
  n as t
};
