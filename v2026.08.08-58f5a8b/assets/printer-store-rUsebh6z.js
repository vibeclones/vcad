import { c as i } from "./three-drei-DdHLxnbx.js";
const o = i((r) => ({ isDiscovering: false, discoveredPrinters: [], setDiscovering: (e) => r({ isDiscovering: e }), setDiscoveredPrinters: (e) => r({ discoveredPrinters: e }), selectedPrinter: null, connectionState: "disconnected", connectionError: null, selectPrinter: (e) => r({ selectedPrinter: e }), setConnectionState: (e) => r({ connectionState: e }), setConnectionError: (e) => r({ connectionError: e }), status: null, setStatus: (e) => r({ status: e }), printTemp: 220, bedTemp: 55, selectedProfile: "generic", setPrintTemp: (e) => r({ printTemp: e }), setBedTemp: (e) => r({ bedTemp: e }), setSelectedProfile: (e) => r({ selectedProfile: e }), profiles: [{ id: "generic", name: "Generic", bedX: 220, bedY: 220, bedZ: 250, nozzleDiameter: 0.4 }, { id: "bambu_x1c", name: "Bambu Lab X1 Carbon", bedX: 256, bedY: 256, bedZ: 256, nozzleDiameter: 0.4 }, { id: "bambu_p1s", name: "Bambu Lab P1S", bedX: 256, bedY: 256, bedZ: 256, nozzleDiameter: 0.4 }, { id: "bambu_a1", name: "Bambu Lab A1", bedX: 256, bedY: 256, bedZ: 256, nozzleDiameter: 0.4 }, { id: "ender3", name: "Creality Ender 3", bedX: 220, bedY: 220, bedZ: 250, nozzleDiameter: 0.4 }, { id: "prusa_mk4", name: "Prusa MK4", bedX: 250, bedY: 210, bedZ: 220, nozzleDiameter: 0.4 }], setProfiles: (e) => r({ profiles: e }) }));
function d(r) {
  const e = Math.floor(r / 60), n = Math.floor(r % 60);
  return e > 0 ? `${e}h ${n}m` : `${n}m`;
}
export {
  d as f,
  o as u
};
