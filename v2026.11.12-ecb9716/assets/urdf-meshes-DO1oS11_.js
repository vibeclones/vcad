import { Ft as e, It as t, M as n, n as r, t as i } from "./three-Dweqhmle.js";
var a = new r(), o = new i(), s = new n();
async function c(e2) {
  let t2 = await fetch(e2);
  if (!t2.ok) throw Error(`Failed to fetch ${e2}: ${t2.status} ${t2.statusText}`);
  return t2.arrayBuffer();
}
function l(e2, t2 = 1e3) {
  let n2 = e2.getAttribute(`position`), r2 = Array(n2.count * 3);
  for (let e3 = 0; e3 < n2.count; e3++) r2[e3 * 3] = n2.getX(e3) * t2, r2[e3 * 3 + 1] = n2.getY(e3) * t2, r2[e3 * 3 + 2] = n2.getZ(e3) * t2;
  let i2;
  if (e2.index) i2 = Array.from(e2.index.array);
  else {
    i2 = Array(n2.count);
    for (let e3 = 0; e3 < n2.count; e3++) i2[e3] = e3;
  }
  let a2, o2 = e2.getAttribute(`normal`);
  if (o2) {
    a2 = Array(o2.count * 3);
    for (let e3 = 0; e3 < o2.count; e3++) a2[e3 * 3] = o2.getX(e3), a2[e3 * 3 + 1] = o2.getY(e3), a2[e3 * 3 + 2] = o2.getZ(e3);
  }
  return { positions: r2, indices: i2, normals: a2 };
}
async function u(e2) {
  let t2 = a.parse(e2);
  return t2.computeVertexNormals(), l(t2);
}
async function d(n2, r2) {
  let i2 = new TextDecoder().decode(n2), a2 = o.parse(i2, r2.slice(0, r2.lastIndexOf(`/`) + 1));
  if (!a2) throw Error(`Failed to parse COLLADA mesh: ${r2}`);
  a2.scene.matrix.identity(), a2.scene.matrixAutoUpdate = false, a2.scene.updateMatrixWorld(true);
  let s2 = [], c2 = [], l2 = [], u2 = 0, d2 = new e();
  return a2.scene.traverse((e2) => {
    if (!(e2 instanceof t)) return;
    let n3 = e2.geometry, r3 = n3.getAttribute(`position`);
    if (!r3) return;
    let i3 = n3.getAttribute(`normal`);
    d2.copy(e2.matrixWorld);
    let a3 = r3.count;
    for (let e3 = 0; e3 < a3; e3++) {
      let t2 = r3.getX(e3), n4 = r3.getY(e3), a4 = r3.getZ(e3), o2 = d2.elements[0] * t2 + d2.elements[4] * n4 + d2.elements[8] * a4 + d2.elements[12], c3 = d2.elements[1] * t2 + d2.elements[5] * n4 + d2.elements[9] * a4 + d2.elements[13], u3 = d2.elements[2] * t2 + d2.elements[6] * n4 + d2.elements[10] * a4 + d2.elements[14];
      if (s2.push(o2 * 1e3, c3 * 1e3, u3 * 1e3), i3) {
        let t3 = i3.getX(e3), n5 = i3.getY(e3), r4 = i3.getZ(e3), a5 = d2.elements[0] * t3 + d2.elements[4] * n5 + d2.elements[8] * r4, o3 = d2.elements[1] * t3 + d2.elements[5] * n5 + d2.elements[9] * r4, s3 = d2.elements[2] * t3 + d2.elements[6] * n5 + d2.elements[10] * r4;
        l2.push(a5, o3, s3);
      }
    }
    if (n3.index) {
      let e3 = n3.index.array;
      for (let t2 = 0; t2 < e3.length; t2++) c2.push(u2 + e3[t2]);
    } else for (let e3 = 0; e3 < a3; e3++) c2.push(u2 + e3);
    u2 += a3;
  }), { positions: s2, indices: c2, normals: l2.length === s2.length ? l2 : void 0 };
}
async function f(n2) {
  return new Promise((r2, i2) => {
    s.parse(n2, ``, (n3) => {
      let i3 = [], a2 = [], o2 = [], s2 = 0, c2 = new e();
      n3.scene.updateMatrixWorld(true), n3.scene.traverse((e2) => {
        if (!(e2 instanceof t)) return;
        let n4 = e2.geometry, r3 = n4.getAttribute(`position`);
        if (!r3) return;
        let l2 = n4.getAttribute(`normal`);
        c2.copy(e2.matrixWorld);
        for (let e3 = 0; e3 < r3.count; e3++) {
          let t2 = r3.getX(e3), n5 = r3.getY(e3), a3 = r3.getZ(e3), s3 = c2.elements[0] * t2 + c2.elements[4] * n5 + c2.elements[8] * a3 + c2.elements[12], u2 = c2.elements[1] * t2 + c2.elements[5] * n5 + c2.elements[9] * a3 + c2.elements[13], d2 = c2.elements[2] * t2 + c2.elements[6] * n5 + c2.elements[10] * a3 + c2.elements[14];
          i3.push(s3 * 1e3, u2 * 1e3, d2 * 1e3), l2 && o2.push(l2.getX(e3), l2.getY(e3), l2.getZ(e3));
        }
        if (n4.index) {
          let e3 = n4.index.array;
          for (let t2 = 0; t2 < e3.length; t2++) a2.push(s2 + e3[t2]);
        } else for (let e3 = 0; e3 < r3.count; e3++) a2.push(s2 + e3);
        s2 += r3.count;
      }), r2({ positions: i3, indices: a2, normals: o2.length === i3.length ? o2 : void 0 });
    }, i2);
  });
}
async function p(e2) {
  var _a;
  let t2 = ((_a = e2.split(`.`).pop()) == null ? void 0 : _a.toLowerCase()) ?? ``, n2 = await c(e2);
  if (t2 === `stl`) return u(n2);
  if (t2 === `dae`) return d(n2, e2);
  if (t2 === `glb` || t2 === `gltf`) return f(n2);
  throw Error(`Unsupported mesh extension: ${t2} (${e2})`);
}
async function m(e2) {
  let t2 = /* @__PURE__ */ new Map(), n2 = Object.entries(e2);
  return await Promise.all(n2.map(async ([e3, n3]) => {
    let r2 = await p(n3);
    t2.set(e3, r2);
    let i2 = e3.split(`/`).pop();
    i2 && i2 !== e3 && t2.set(i2, r2);
    let a2 = e3.replace(/^package:\/\/[^/]+\//, ``);
    a2 !== e3 && t2.set(a2, r2);
  })), t2;
}
function h(e2, t2) {
  let n2 = 0, r2 = 0;
  for (let i2 of Object.keys(e2.nodes)) {
    let a2 = e2.nodes[i2], o2 = a2.op;
    if (o2.type !== `mesh_import` && o2.type !== `MeshImport`) continue;
    let s2 = o2.path ?? ``, c2 = g(t2, s2);
    if (!c2) {
      r2++;
      continue;
    }
    let l2 = o2.scale, u2 = c2.positions, d2 = l2 && (l2.x !== 1 || l2.y !== 1 || l2.z !== 1) ? _(u2, [l2.x, l2.y, l2.z]) : u2;
    e2.nodes[i2] = { id: a2.id, name: a2.name, op: { type: `ImportedMesh`, positions: d2, indices: c2.indices, normals: c2.normals, source: s2 } }, n2++;
  }
  r2 > 0 && console.warn(`[urdf-meshes] inlined ${n2} mesh(es); ${r2} reference(s) had no matching asset`);
}
function g(e2, t2) {
  let n2 = e2.get(t2);
  if (n2) return n2;
  let r2 = t2.replace(/^package:\/\/[^/]+\//, ``), i2 = e2.get(r2);
  if (i2) return i2;
  let a2 = t2.split(`/`).pop();
  if (a2) {
    let t3 = e2.get(a2);
    if (t3) return t3;
  }
}
function _(e2, t2) {
  let n2 = Array(e2.length);
  for (let r2 = 0; r2 < e2.length; r2 += 3) n2[r2] = e2[r2] * t2[0], n2[r2 + 1] = e2[r2 + 1] * t2[1], n2[r2 + 2] = e2[r2 + 2] * t2[2];
  return n2;
}
export {
  h as inlineMeshImports,
  m as loadUrdfMeshes
};
