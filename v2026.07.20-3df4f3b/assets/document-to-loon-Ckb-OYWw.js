function z(e) {
  return g(e);
}
function g(e) {
  const r = [], s = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  r.push("; Generated from vcad document"), r.push("");
  const $ = Object.entries(e.materials);
  if ($.length > 0) {
    for (const [u, a] of $) u !== "default" && r.push(`[let mat-${y(u)} [material ${JSON.stringify(a.name)} ${t(a.color[0])} ${t(a.color[1])} ${t(a.color[2])} ${t(a.metallic)} ${t(a.roughness)}]]`);
    r.push("");
  }
  const l = k(e);
  for (const u of l) {
    const a = e.nodes[String(u)];
    a && m(a, e, r, s, n);
  }
  if (e.roots.length > 0) if (r.push(""), e.roots.length === 1) {
    const u = e.roots[0], a = f(u.root, e), o = u.material || "default";
    r.push(`[root ${a} ${JSON.stringify(o)}]`);
  } else {
    r.push("#[");
    for (const u of e.roots) {
      const a = f(u.root, e), o = u.material || "default";
      r.push(`  [root ${a} ${JSON.stringify(o)}]`);
    }
    r.push("]");
  }
  return { source: r.join(`
`) + `
`, unsupported: Array.from(n) };
}
function y(e) {
  return e.replace(/[^a-zA-Z0-9_-]/g, "-").toLowerCase();
}
function f(e, r) {
  const s = r.nodes[String(e)];
  return (s == null ? void 0 : s.name) ? y(s.name) : `n${e}`;
}
function m(e, r, s, n, $) {
  const l = String(e.id);
  if (n.has(l)) return;
  n.add(l);
  for (const o of x(e.op)) {
    const h = r.nodes[String(o)];
    h && m(h, r, s, n, $);
  }
  const u = f(e.id, r), a = _(e.op, r);
  a.kind === "ok" ? s.push(`[let ${u} ${a.expr}]`) : a.kind === "unsupported" && ($.add(a.variant), s.push(`[let ${u} ${a.comment}]`));
}
function t(e) {
  if (Number.isInteger(e)) return e.toFixed(1);
  const r = e.toPrecision(10);
  return r.includes(".") ? r.replace(/0+$/, "").replace(/\.$/, ".0") : r;
}
function c(e, r) {
  return f(e, r);
}
function i(e) {
  return { kind: "ok", expr: e };
}
function d(e, r) {
  return { kind: "unsupported", variant: e, comment: r };
}
function _(e, r) {
  switch (e.type) {
    case "Cube":
      return i(`[cube ${t(e.size.x)} ${t(e.size.y)} ${t(e.size.z)}]`);
    case "Cylinder":
      return i(`[cylinder ${t(e.radius)} ${t(e.height)}]`);
    case "Sphere":
      return i(`[sphere ${t(e.radius)}]`);
    case "Cone":
      return i(`[cone ${t(e.radius_bottom)} ${t(e.radius_top)} ${t(e.height)}]`);
    case "Torus":
      return i(`[torus ${t(e.major_radius)} ${t(e.minor_radius)}]`);
    case "Wedge":
      return i(`[wedge ${t(e.size.x)} ${t(e.size.y)} ${t(e.size.z)}]`);
    case "Prism":
      return i(`[prism ${e.sides} ${t(e.radius)} ${t(e.height)}]`);
    case "Empty":
      return i("Empty");
    case "Union":
      return i(`[union ${c(e.left, r)} ${c(e.right, r)}]`);
    case "Difference":
      return i(`[difference ${c(e.left, r)} ${c(e.right, r)}]`);
    case "Intersection":
      return i(`[intersection ${c(e.left, r)} ${c(e.right, r)}]`);
    case "Translate":
      return i(`[translate ${t(e.offset.x)} ${t(e.offset.y)} ${t(e.offset.z)} ${c(e.child, r)}]`);
    case "Rotate":
      return i(`[rotate ${t(e.angles.x)} ${t(e.angles.y)} ${t(e.angles.z)} ${c(e.child, r)}]`);
    case "Scale":
      return i(`[scale ${t(e.factor.x)} ${t(e.factor.y)} ${t(e.factor.z)} ${c(e.child, r)}]`);
    case "Mirror":
      return i(`[mirror ${t(e.plane_origin.x)} ${t(e.plane_origin.y)} ${t(e.plane_origin.z)} ${t(e.plane_normal.x)} ${t(e.plane_normal.y)} ${t(e.plane_normal.z)} ${c(e.child, r)}]`);
    case "Fillet":
      return i(`[fillet ${t(e.radius)} ${c(e.child, r)}]`);
    case "Chamfer":
      return i(`[chamfer ${t(e.distance)} ${c(e.child, r)}]`);
    case "Shell":
      return i(`[shell ${t(e.thickness)} ${c(e.child, r)}]`);
    case "LinearPattern":
      return i(`[linear-pattern ${t(e.direction.x)} ${t(e.direction.y)} ${t(e.direction.z)} ${e.count} ${t(e.spacing)} ${c(e.child, r)}]`);
    case "CircularPattern":
      return i(`[circular-pattern ${t(e.axis_origin.x)} ${t(e.axis_origin.y)} ${t(e.axis_origin.z)} ${t(e.axis_dir.x)} ${t(e.axis_dir.y)} ${t(e.axis_dir.z)} ${e.count} ${t(e.angle_deg)} ${c(e.child, r)}]`);
    case "Sketch2D": {
      const s = e.segments.map((n) => n.type === "Line" ? `    [line ${t(n.start.x)} ${t(n.start.y)} ${t(n.end.x)} ${t(n.end.y)}]` : `    [arc ${t(n.start.x)} ${t(n.start.y)} ${t(n.end.x)} ${t(n.end.y)} ${t(n.center.x)} ${t(n.center.y)} ${n.ccw}]`).join(`
`);
      return i(["[sketch", `  ${t(e.origin.x)} ${t(e.origin.y)} ${t(e.origin.z)}`, `  ${t(e.x_dir.x)} ${t(e.x_dir.y)} ${t(e.x_dir.z)}`, `  ${t(e.y_dir.x)} ${t(e.y_dir.y)} ${t(e.y_dir.z)}`, "  #[", s, "  ]]"].join(`
`));
    }
    case "Extrude":
      return i(`[extrude ${t(e.direction.x)} ${t(e.direction.y)} ${t(e.direction.z)} ${c(e.sketch, r)}]`);
    case "Revolve":
      return i(`[revolve ${t(e.axis_origin.x)} ${t(e.axis_origin.y)} ${t(e.axis_origin.z)} ${t(e.axis_dir.x)} ${t(e.axis_dir.y)} ${t(e.axis_dir.z)} ${t(e.angle_deg)} ${c(e.sketch, r)}]`);
    case "Sweep": {
      const s = c(e.sketch, r);
      return e.path.type === "Line" ? i(`[sweep-line ${t(e.path.start.x)} ${t(e.path.start.y)} ${t(e.path.start.z)} ${t(e.path.end.x)} ${t(e.path.end.y)} ${t(e.path.end.z)} ${s}]`) : i(`[sweep-helix ${t(e.path.radius)} ${t(e.path.pitch)} ${t(e.path.height)} ${t(e.path.turns)} ${s}]`);
    }
    case "Loft": {
      const s = e.sketches.map((n) => c(n, r)).join(" ");
      return e.closed ? i(`[loft-closed #[${s}]]`) : i(`[loft #[${s}]]`);
    }
    case "Text2D":
      return d("Text2D", `; Text2D "${e.text}" (h=${t(e.height)}) \u2014 not yet supported in loon`);
    case "ImportedMesh":
      return d("ImportedMesh", `; ImportedMesh (${e.positions.length / 3} vertices, ${e.indices.length / 3} triangles${e.source ? `, source: ${e.source}` : ""}) \u2014 not representable in loon`);
    case "PcbBoard":
      return d("PcbBoard", "; PcbBoard \u2014 not yet supported in loon");
    case "EmbroideryPattern":
      return d("EmbroideryPattern", "; EmbroideryPattern \u2014 not yet supported in loon");
    case "PartInstance": {
      const s = Object.entries(e.params).sort(([n], [$]) => n.localeCompare($)).map(([n, $]) => `:${n} ${JSON.stringify($)}`).join(" ");
      return i(`[part-instance ${JSON.stringify(e.path)} ${JSON.stringify(e.version)} #{${s}}]`);
    }
    default: {
      const s = e.type;
      return d(s, `; ${s} \u2014 not yet supported in loon`);
    }
  }
}
function x(e) {
  switch (e.type) {
    case "Translate":
    case "Rotate":
    case "Scale":
    case "Mirror":
    case "Fillet":
    case "Chamfer":
    case "EdgeBlend":
    case "Shell":
    case "LinearPattern":
    case "CircularPattern":
      return [e.child];
    case "Union":
    case "Difference":
    case "Intersection":
      return [e.left, e.right];
    case "Extrude":
    case "Revolve":
    case "Sweep":
      return [e.sketch];
    case "Loft":
      return e.sketches;
    default:
      return [];
  }
}
function k(e) {
  const r = /* @__PURE__ */ new Set(), s = [];
  function n($) {
    const l = String($);
    if (r.has(l)) return;
    r.add(l);
    const u = e.nodes[l];
    if (u) {
      for (const a of x(u.op)) n(a);
      s.push($);
    }
  }
  for (const $ of e.roots) n($.root);
  for (const $ of Object.keys(e.nodes)) n(Number($));
  return s;
}
export {
  z as d
};
