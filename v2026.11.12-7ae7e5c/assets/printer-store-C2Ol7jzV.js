import { t as e } from "./react-Cf1qM0wN.js";
var t = e((e2) => ({ isDiscovering: false, discoveredPrinters: [], setDiscovering: (t2) => e2({ isDiscovering: t2 }), setDiscoveredPrinters: (t2) => e2({ discoveredPrinters: t2 }), selectedPrinter: null, connectionState: `disconnected`, connectionError: null, selectPrinter: (t2) => e2({ selectedPrinter: t2 }), setConnectionState: (t2) => e2({ connectionState: t2 }), setConnectionError: (t2) => e2({ connectionError: t2 }), status: null, setStatus: (t2) => e2({ status: t2 }), printTemp: 220, bedTemp: 55, selectedProfile: `generic`, setPrintTemp: (t2) => e2({ printTemp: t2 }), setBedTemp: (t2) => e2({ bedTemp: t2 }), setSelectedProfile: (t2) => e2({ selectedProfile: t2 }), profiles: [{ id: `generic`, name: `Generic`, bedX: 220, bedY: 220, bedZ: 250, nozzleDiameter: 0.4 }, { id: `bambu_x1c`, name: `Bambu Lab X1 Carbon`, bedX: 256, bedY: 256, bedZ: 256, nozzleDiameter: 0.4 }, { id: `bambu_p1s`, name: `Bambu Lab P1S`, bedX: 256, bedY: 256, bedZ: 256, nozzleDiameter: 0.4 }, { id: `bambu_a1`, name: `Bambu Lab A1`, bedX: 256, bedY: 256, bedZ: 256, nozzleDiameter: 0.4 }, { id: `ender3`, name: `Creality Ender 3`, bedX: 220, bedY: 220, bedZ: 250, nozzleDiameter: 0.4 }, { id: `prusa_mk4`, name: `Prusa MK4`, bedX: 250, bedY: 210, bedZ: 220, nozzleDiameter: 0.4 }], setProfiles: (t2) => e2({ profiles: t2 }) }));
function n(e2) {
  let t2 = Math.floor(e2 / 60), n2 = Math.floor(e2 % 60);
  return t2 > 0 ? `${t2}h ${n2}m` : `${n2}m`;
}
export {
  t as n,
  n as t
};
