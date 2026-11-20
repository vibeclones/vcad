import { t as e } from "./react-Cf1qM0wN.js";
var t = { H: [0.31, 1, 1.008, [1, 1, 1]], C: [0.76, 6, 12.011, [0.34, 0.34, 0.34]], N: [0.71, 7, 14.007, [0.19, 0.31, 0.97]], O: [0.66, 8, 15.999, [1, 0.05, 0.05]], Na: [1.66, 11, 22.99, [0.67, 0.36, 0.95]], Cl: [1.02, 17, 35.45, [0.12, 0.94, 0.12]], Au: [1.36, 79, 196.97, [1, 0.82, 0.14]] };
function n(e2) {
  return t[e2] ?? [0.75, 6, 12.011, [0.85, 0.4, 0.85]];
}
function r(e2, t2, r2 = false) {
  let i2 = [], a2 = [], o2 = /* @__PURE__ */ new Map();
  for (let e3 of t2) {
    let t3 = o2.get(e3.s);
    if (t3 === void 0) {
      let [, r3, a3] = n(e3.s);
      t3 = i2.length, i2.push({ element: e3.s, atomicNumber: r3, mass: a3, charge: 0 }), o2.set(e3.s, t3);
    }
    a2.push(t3);
  }
  let s2 = t2.map((e3) => [e3.x, e3.y, e3.z]), c2 = [];
  for (let e3 = 0; e3 < t2.length; e3++) for (let r3 = e3 + 1; r3 < t2.length; r3++) {
    let i3 = t2[e3].x - t2[r3].x, a3 = t2[e3].y - t2[r3].y, o3 = t2[e3].z - t2[r3].z, s3 = i3 * i3 + a3 * a3 + o3 * o3, l2 = (n(t2[e3].s)[0] + n(t2[r3].s)[0]) * 1.2;
    s3 > 0.16 && s3 < l2 * l2 && c2.push({ a: e3, b: r3, order: 1 });
  }
  return { species: i2, positions: s2, speciesIdx: a2, bonds: c2, name: e2 };
}
function i(e2) {
  let t2 = 0, n2 = 0, r2 = 0;
  for (let i3 of e2) t2 += i3.x, n2 += i3.y, r2 += i3.z;
  let i2 = e2.length || 1;
  return t2 /= i2, n2 /= i2, r2 /= i2, e2.map((e3) => ({ s: e3.s, x: e3.x - t2, y: e3.y - n2, z: e3.z - r2 }));
}
function a() {
  return [{ s: `O`, x: 0, y: 0, z: 0 }, { s: `H`, x: 0.757, y: 0.586, z: 0 }, { s: `H`, x: -0.757, y: 0.586, z: 0 }];
}
function o() {
  let e2 = [];
  for (let t2 = 0; t2 < 6; t2++) {
    let n2 = t2 * Math.PI / 3;
    e2.push({ s: `C`, x: 1.39 * Math.cos(n2), y: 1.39 * Math.sin(n2), z: 0 }), e2.push({ s: `H`, x: 2.46 * Math.cos(n2), y: 2.46 * Math.sin(n2), z: 0 });
  }
  return e2;
}
function s() {
  let e2 = (1 + Math.sqrt(5)) / 2, t2 = [[0, 1, 3 * e2], [2, 1 + 2 * e2, e2], [1, 2 + e2, 2 * e2]], n2 = [];
  for (let [e3, r3, i3] of t2) for (let t3 of [e3, -e3]) for (let a2 of [r3, -r3]) for (let r4 of [i3, -i3]) e3 === 0 && t3 < 0 || n2.push([t3, a2, r4], [r4, t3, a2], [a2, r4, t3]);
  let r2 = [];
  for (let e3 of n2) r2.some((t3) => Math.hypot(t3[0] - e3[0], t3[1] - e3[1], t3[2] - e3[2]) < 1e-6) || r2.push(e3);
  let i2 = 1.42 / 2;
  return r2.map(([e3, t3, n3]) => ({ s: `C`, x: e3 * i2, y: t3 * i2, z: n3 * i2 }));
}
function c(e2 = 6, t2 = 8) {
  let n2 = 1.42, r2 = n2 * Math.sqrt(3) * e2 / (2 * Math.PI), i2 = [], a2 = 1.5 * n2 / 1;
  for (let o2 = 0; o2 < t2; o2++) for (let t3 = 0; t3 < e2; t3++) {
    let s2 = 2 * Math.PI * t3 / e2, c2 = s2 + Math.PI / e2, l2 = o2 * 3 * n2;
    i2.push({ s: `C`, x: r2 * Math.cos(s2), y: r2 * Math.sin(s2), z: l2 }), i2.push({ s: `C`, x: r2 * Math.cos(s2), y: r2 * Math.sin(s2), z: l2 + n2 }), i2.push({ s: `C`, x: r2 * Math.cos(c2), y: r2 * Math.sin(c2), z: l2 + n2 + a2 }), i2.push({ s: `C`, x: r2 * Math.cos(c2), y: r2 * Math.sin(c2), z: l2 + 2 * n2 + a2 });
  }
  return i2;
}
function l(e2, t2, n2) {
  let r2 = [[0, 0, 0], [0.5, 0.5, 0], [0.5, 0, 0.5], [0, 0.5, 0.5]], i2 = [];
  for (let a2 = 0; a2 < n2; a2++) for (let o2 = 0; o2 < n2; o2++) for (let s2 = 0; s2 < n2; s2++) for (let n3 of r2) i2.push({ s: e2, x: (a2 + n3[0]) * t2, y: (o2 + n3[1]) * t2, z: (s2 + n3[2]) * t2 });
  return i2;
}
function u(e2, t2) {
  let n2 = [[0, 0, 0], [0.5, 0.5, 0], [0.5, 0, 0.5], [0, 0.5, 0.5]], r2 = [];
  for (let e3 of n2) r2.push(e3), r2.push([e3[0] + 0.25, e3[1] + 0.25, e3[2] + 0.25]);
  let i2 = [];
  for (let n3 = 0; n3 < t2; n3++) for (let a2 = 0; a2 < t2; a2++) for (let o2 = 0; o2 < t2; o2++) for (let t3 of r2) i2.push({ s: `C`, x: (n3 + t3[0]) * e2, y: (a2 + t3[1]) * e2, z: (o2 + t3[2]) * e2 });
  return i2;
}
function d(e2, t2) {
  let n2 = [], r2 = e2 / 2;
  for (let e3 = 0; e3 <= t2; e3++) for (let i2 = 0; i2 <= t2; i2++) for (let a2 = 0; a2 <= t2; a2++) n2.push({ s: (e3 + i2 + a2) % 2 == 0 ? `Na` : `Cl`, x: e3 * r2, y: i2 * r2, z: a2 * r2 });
  return n2;
}
var f = [{ id: `buckyball`, name: `Buckyball C\u2086\u2080`, blurb: `Truncated icosahedron, generated from the golden ratio`, build: () => r(`Buckminsterfullerene`, i(s())) }, { id: `nanotube`, name: `Carbon nanotube`, blurb: `Armchair (6,6) \u2014 a rolled graphene sheet`, build: () => r(`Carbon nanotube (6,6)`, i(c(6, 9))) }, { id: `diamond`, name: `Diamond lattice`, blurb: `Diamond-cubic carbon, 2\xD72\xD72 cells`, build: () => r(`Diamond \u2014 C`, i(u(3.57, 2)), true) }, { id: `gold`, name: `Gold crystal`, blurb: `Face-centered cubic Au, 3\xD73\xD73 cells`, build: () => r(`Gold \u2014 FCC`, i(l(`Au`, 4.08, 3)), true) }, { id: `salt`, name: `Rock salt`, blurb: `NaCl, interpenetrating FCC sublattices`, build: () => r(`Rock salt \u2014 NaCl`, i(d(5.64, 3)), true) }, { id: `benzene`, name: `Benzene`, blurb: `Aromatic C\u2086H\u2086 ring`, build: () => r(`Benzene`, i(o())) }, { id: `water`, name: `Water`, blurb: `The bent H\u2082O molecule`, build: () => r(`Water`, i(a())) }], p = e((e2) => ({ molecule: null, representation: `ball_and_stick`, activeDemoId: null, selectedAtomIndex: null, setMolecule: (t2, n2 = null) => e2({ molecule: t2, activeDemoId: n2, selectedAtomIndex: null }), loadDemo: (t2) => {
  let n2 = f.find((e3) => e3.id === t2);
  n2 && e2({ molecule: n2.build(), activeDemoId: t2, selectedAtomIndex: null });
}, setRepresentation: (t2) => e2({ representation: t2 }), selectAtom: (t2) => e2({ selectedAtomIndex: t2 }), clear: () => e2({ molecule: null, activeDemoId: null, selectedAtomIndex: null }) }));
export {
  p as n,
  f as t
};
