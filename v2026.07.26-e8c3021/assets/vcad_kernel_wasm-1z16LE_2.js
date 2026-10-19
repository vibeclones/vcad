class ge {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ve.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_circuitsim_free(e, 0);
  }
  dt() {
    return r.circuitsim_dt(this.__wbg_ptr);
  }
  constructor(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.circuitsim_new(n, t);
    if (_[2]) throw b(_[1]);
    return this.__wbg_ptr = _[0] >>> 0, ve.register(this, this.__wbg_ptr, this), this;
  }
  observe() {
    const e = r.circuitsim_observe(this.__wbg_ptr);
    if (e[2]) throw b(e[1]);
    return b(e[0]);
  }
  reset() {
    r.circuitsim_reset(this.__wbg_ptr);
  }
  setValue(e, n) {
    r.circuitsim_setValue(this.__wbg_ptr, e, n);
  }
  step(e) {
    const n = r.circuitsim_step(this.__wbg_ptr, e);
    if (n[2]) throw b(n[1]);
    return b(n[0]);
  }
}
Symbol.dispose && (ge.prototype[Symbol.dispose] = ge.prototype.free);
class we {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xe.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_mdsim_free(e, 0);
  }
  moleculeJson() {
    let e, n;
    try {
      const o = r.mdsim_moleculeJson(this.__wbg_ptr);
      var t = o[0], _ = o[1];
      if (o[3]) throw t = 0, _ = 0, b(o[2]);
      return e = t, n = _, m(t, _);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  constructor(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.mdsim_new(t, _, o, i);
    if (a[2]) throw b(a[1]);
    return this.__wbg_ptr = a[0] >>> 0, xe.register(this, this.__wbg_ptr, this), this;
  }
  observe() {
    let e, n;
    try {
      const o = r.mdsim_observe(this.__wbg_ptr);
      var t = o[0], _ = o[1];
      if (o[3]) throw t = 0, _ = 0, b(o[2]);
      return e = t, n = _, m(t, _);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  reset() {
    let e, n;
    try {
      const o = r.mdsim_reset(this.__wbg_ptr);
      var t = o[0], _ = o[1];
      if (o[3]) throw t = 0, _ = 0, b(o[2]);
      return e = t, n = _, m(t, _);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  run(e) {
    let n, t;
    try {
      const i = r.mdsim_run(this.__wbg_ptr, e);
      var _ = i[0], o = i[1];
      if (i[3]) throw _ = 0, o = 0, b(i[2]);
      return n = _, t = o, m(_, o);
    } finally {
      r.__wbindgen_free(n, t, 1);
    }
  }
}
Symbol.dispose && (we.prototype[Symbol.dispose] = we.prototype.free);
class me {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Se.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_physicssim_free(e, 0);
  }
  actionDim() {
    return r.physicssim_actionDim(this.__wbg_ptr) >>> 0;
  }
  actuatedJointIds() {
    const e = r.physicssim_actuatedJointIds(this.__wbg_ptr);
    var n = Fe(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 4, 4), n;
  }
  jointIds() {
    const e = r.physicssim_jointIds(this.__wbg_ptr);
    var n = Fe(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 4, 4), n;
  }
  constructor(e, n, t, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = Ye(n, r.__wbindgen_malloc), f = s, d = r.physicssim_new(o, i, a, f, w(t) ? 4294967297 : Math.fround(t), w(_) ? 4294967297 : _ >>> 0);
    if (d[2]) throw b(d[1]);
    return this.__wbg_ptr = d[0] >>> 0, Se.register(this, this.__wbg_ptr, this), this;
  }
  numJoints() {
    return r.physicssim_numJoints(this.__wbg_ptr) >>> 0;
  }
  observationDim() {
    return r.physicssim_observationDim(this.__wbg_ptr) >>> 0;
  }
  observe() {
    return r.physicssim_observe(this.__wbg_ptr);
  }
  reset() {
    return r.physicssim_reset(this.__wbg_ptr);
  }
  setMaxSteps(e) {
    r.physicssim_setMaxSteps(this.__wbg_ptr, e);
  }
  setSeed(e) {
    r.physicssim_setSeed(this.__wbg_ptr, e);
  }
  stepPosition(e) {
    const n = B(e, r.__wbindgen_malloc), t = s;
    return r.physicssim_stepPosition(this.__wbg_ptr, n, t);
  }
  stepTorque(e) {
    const n = B(e, r.__wbindgen_malloc), t = s;
    return r.physicssim_stepTorque(this.__wbg_ptr, n, t);
  }
  stepVelocity(e) {
    const n = B(e, r.__wbindgen_malloc), t = s;
    return r.physicssim_stepVelocity(this.__wbg_ptr, n, t);
  }
}
Symbol.dispose && (me.prototype[Symbol.dispose] = me.prototype.free);
class ne {
  static __wrap(e) {
    e = e >>> 0;
    const n = Object.create(ne.prototype);
    return n.__wbg_ptr = e, Pe.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pe.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_raytracer_free(e, 0);
  }
  static canRaytrace(e) {
    return A(e, v), r.raytracer_canRaytrace(e.__wbg_ptr) !== 0;
  }
  clearScene() {
    r.raytracer_clearScene(this.__wbg_ptr);
  }
  static create() {
    const e = r.raytracer_create();
    if (e[2]) throw b(e[1]);
    return ne.__wrap(e[0]);
  }
  getDebugMode() {
    return r.raytracer_getDebugMode(this.__wbg_ptr) >>> 0;
  }
  getEdgeDetectionEnabled() {
    return r.raytracer_getEdgeDetectionEnabled(this.__wbg_ptr) !== 0;
  }
  getFrameIndex() {
    return r.raytracer_getFrameIndex(this.__wbg_ptr) >>> 0;
  }
  getRefineSamples() {
    return r.raytracer_getRefineSamples(this.__wbg_ptr) >>> 0;
  }
  hasScene() {
    return r.raytracer_hasScene(this.__wbg_ptr) !== 0;
  }
  pick(e, n, t, _, o, i, a, f) {
    const d = B(e, r.__wbindgen_malloc), u = s, g = B(n, r.__wbindgen_malloc), p = s, h = B(t, r.__wbindgen_malloc), y = s, P = r.raytracer_pick(this.__wbg_ptr, d, u, g, p, h, y, _, o, i, a, f);
    if (P[2]) throw b(P[1]);
    return P[0];
  }
  render(e, n, t, _, o, i) {
    const a = B(e, r.__wbindgen_malloc), f = s, d = B(n, r.__wbindgen_malloc), u = s, g = B(t, r.__wbindgen_malloc), p = s;
    return r.raytracer_render(this.__wbg_ptr, a, f, d, u, g, p, _, o, i);
  }
  resetAccumulation() {
    r.raytracer_resetAccumulation(this.__wbg_ptr);
  }
  setAO(e, n, t, _) {
    r.raytracer_setAO(this.__wbg_ptr, e, n, t, _);
  }
  setDebugMode(e) {
    r.raytracer_setDebugMode(this.__wbg_ptr, e);
  }
  setEdgeDetection(e, n, t) {
    r.raytracer_setEdgeDetection(this.__wbg_ptr, e, n, t);
  }
  setEdgeStyle(e, n, t, _, o, i, a, f, d, u, g, p, h, y, P, C, k, z, E) {
    r.raytracer_setEdgeStyle(this.__wbg_ptr, e, n, t, _, o, i, a, f, d, u, g, p, h, y, P, C, k, z, E);
  }
  setMaterial(e, n, t, _, o) {
    const i = r.raytracer_setMaterial(this.__wbg_ptr, e, n, t, _, o);
    if (i[1]) throw b(i[0]);
  }
  setRefineSamples(e) {
    r.raytracer_setRefineSamples(this.__wbg_ptr, e);
  }
  setTheme(e) {
    r.raytracer_setTheme(this.__wbg_ptr, e);
  }
  uploadSolid(e) {
    A(e, v);
    const n = r.raytracer_uploadSolid(this.__wbg_ptr, e.__wbg_ptr);
    if (n[1]) throw b(n[0]);
  }
  uploadSolidWithMaterial(e, n, t, _, o, i) {
    A(e, v);
    const a = r.raytracer_uploadSolidWithMaterial(this.__wbg_ptr, e.__wbg_ptr, n, t, _, o, i);
    if (a[1]) throw b(a[0]);
  }
}
Symbol.dispose && (ne.prototype[Symbol.dispose] = ne.prototype.free);
class L {
  static __wrap(e) {
    e = e >>> 0;
    const n = Object.create(L.prototype);
    return n.__wbg_ptr = e, De.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, De.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_sliceresult_free(e, 0);
  }
  get filamentGrams() {
    return r.sliceresult_filamentGrams(this.__wbg_ptr);
  }
  get filamentMm() {
    return r.sliceresult_filamentMm(this.__wbg_ptr);
  }
  getLayerPreview(e) {
    const n = r.sliceresult_getLayerPreview(this.__wbg_ptr, e);
    if (n[2]) throw b(n[1]);
    return b(n[0]);
  }
  get layerCount() {
    return r.sliceresult_layerCount(this.__wbg_ptr) >>> 0;
  }
  get printTimeSeconds() {
    return r.sliceresult_printTimeSeconds(this.__wbg_ptr);
  }
  statsJson() {
    let e, n;
    try {
      const o = r.sliceresult_statsJson(this.__wbg_ptr);
      var t = o[0], _ = o[1];
      if (o[3]) throw t = 0, _ = 0, b(o[2]);
      return e = t, n = _, m(t, _);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
}
Symbol.dispose && (L.prototype[Symbol.dispose] = L.prototype.free);
class O {
  static __wrap(e) {
    e = e >>> 0;
    const n = Object.create(O.prototype);
    return n.__wbg_ptr = e, ae.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ae.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_slicersettings_free(e, 0);
  }
  get first_layer_height() {
    return r.__wbg_get_slicersettings_first_layer_height(this.__wbg_ptr);
  }
  get infill_density() {
    return r.__wbg_get_slicersettings_infill_density(this.__wbg_ptr);
  }
  get infill_pattern() {
    return r.__wbg_get_slicersettings_infill_pattern(this.__wbg_ptr) >>> 0;
  }
  get layer_height() {
    return r.__wbg_get_slicersettings_layer_height(this.__wbg_ptr);
  }
  get line_width() {
    return r.__wbg_get_slicersettings_line_width(this.__wbg_ptr);
  }
  get nozzle_diameter() {
    return r.__wbg_get_slicersettings_nozzle_diameter(this.__wbg_ptr);
  }
  get support_angle() {
    return r.__wbg_get_slicersettings_support_angle(this.__wbg_ptr);
  }
  get support_enabled() {
    return r.__wbg_get_slicersettings_support_enabled(this.__wbg_ptr) !== 0;
  }
  get wall_count() {
    return r.__wbg_get_slicersettings_wall_count(this.__wbg_ptr) >>> 0;
  }
  set first_layer_height(e) {
    r.__wbg_set_slicersettings_first_layer_height(this.__wbg_ptr, e);
  }
  set infill_density(e) {
    r.__wbg_set_slicersettings_infill_density(this.__wbg_ptr, e);
  }
  set infill_pattern(e) {
    r.__wbg_set_slicersettings_infill_pattern(this.__wbg_ptr, e);
  }
  set layer_height(e) {
    r.__wbg_set_slicersettings_layer_height(this.__wbg_ptr, e);
  }
  set line_width(e) {
    r.__wbg_set_slicersettings_line_width(this.__wbg_ptr, e);
  }
  set nozzle_diameter(e) {
    r.__wbg_set_slicersettings_nozzle_diameter(this.__wbg_ptr, e);
  }
  set support_angle(e) {
    r.__wbg_set_slicersettings_support_angle(this.__wbg_ptr, e);
  }
  set support_enabled(e) {
    r.__wbg_set_slicersettings_support_enabled(this.__wbg_ptr, e);
  }
  set wall_count(e) {
    r.__wbg_set_slicersettings_wall_count(this.__wbg_ptr, e);
  }
  static fromJson(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.slicersettings_fromJson(n, t);
    if (_[2]) throw b(_[1]);
    return O.__wrap(_[0]);
  }
  constructor() {
    const e = r.slicersettings_new();
    return this.__wbg_ptr = e >>> 0, ae.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (O.prototype[Symbol.dispose] = O.prototype.free);
class v {
  static __wrap(e) {
    e = e >>> 0;
    const n = Object.create(v.prototype);
    return n.__wbg_ptr = e, Ae.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ae.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_solid_free(e, 0);
  }
  boundaryEdges(e) {
    const n = r.solid_boundaryEdges(this.__wbg_ptr, w(e) ? 4294967297 : e >>> 0);
    var t = M(n[0], n[1]).slice();
    return r.__wbindgen_free(n[0], n[1] * 4, 4), t;
  }
  boundingBox() {
    const e = r.solid_boundingBox(this.__wbg_ptr);
    var n = be(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 8, 8), n;
  }
  canExportStep() {
    return r.solid_canExportStep(this.__wbg_ptr) !== 0;
  }
  centerOfMass() {
    const e = r.solid_centerOfMass(this.__wbg_ptr);
    var n = be(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 8, 8), n;
  }
  chamfer(e) {
    const n = r.op_chamfer(this.__wbg_ptr, e);
    return v.__wrap(n);
  }
  circularPattern(e, n, t, _, o, i, a, f) {
    const d = r.op_circular_pattern(this.__wbg_ptr, e, n, t, _, o, i, a, f);
    return v.__wrap(d);
  }
  clearance(e) {
    A(e, v);
    const n = r.solid_clearance(this.__wbg_ptr, e.__wbg_ptr);
    if (n[2]) throw b(n[1]);
    return b(n[0]);
  }
  static cone(e, n, t, _) {
    const o = r.solid_cone(e, n, t, w(_) ? 4294967297 : _ >>> 0);
    return v.__wrap(o);
  }
  static cube(e, n, t) {
    const _ = r.solid_cube(e, n, t);
    return v.__wrap(_);
  }
  static cylinder(e, n, t) {
    const _ = r.solid_cylinder(e, n, w(t) ? 4294967297 : t >>> 0);
    return v.__wrap(_);
  }
  difference(e) {
    A(e, v);
    const n = r.solid_difference(this.__wbg_ptr, e.__wbg_ptr);
    if (n[2]) throw b(n[1]);
    return v.__wrap(n[0]);
  }
  edgeBlend(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.solid_edgeBlend(this.__wbg_ptr, n, t);
    if (_[2]) throw b(_[1]);
    return v.__wrap(_[0]);
  }
  static empty() {
    const e = r.solid_empty();
    return v.__wrap(e);
  }
  static extrude(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = B(n, r.__wbindgen_malloc), i = s, a = r.solid_extrude(t, _, o, i);
    if (a[2]) throw b(a[1]);
    return v.__wrap(a[0]);
  }
  static extrudeWithOptions(e, n, t, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = B(n, r.__wbindgen_malloc), f = s, d = r.solid_extrudeWithOptions(o, i, a, f, t, _);
    if (d[2]) throw b(d[1]);
    return v.__wrap(d[0]);
  }
  fillet(e) {
    const n = r.op_fillet(this.__wbg_ptr, e);
    return v.__wrap(n);
  }
  getMesh(e) {
    return r.solid_getMesh(this.__wbg_ptr, w(e) ? 4294967297 : e >>> 0);
  }
  horizontalSection(e, n, t, _) {
    return r.solid_horizontalSection(this.__wbg_ptr, e, !w(n), w(n) ? 0 : n, !w(t), w(t) ? 0 : t, w(_) ? 4294967297 : _ >>> 0);
  }
  intersection(e) {
    A(e, v);
    const n = r.solid_intersection(this.__wbg_ptr, e.__wbg_ptr);
    if (n[2]) throw b(n[1]);
    return v.__wrap(n[0]);
  }
  isEmpty() {
    return r.solid_isEmpty(this.__wbg_ptr) !== 0;
  }
  linearPattern(e, n, t, _, o) {
    const i = r.op_linear_pattern(this.__wbg_ptr, e, n, t, _, o);
    return v.__wrap(i);
  }
  static loft(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.solid_loft(t, _, w(n) ? 16777215 : n ? 1 : 0);
    if (o[2]) throw b(o[1]);
    return v.__wrap(o[0]);
  }
  mirror(e, n, t, _, o, i) {
    const a = r.solid_mirror(this.__wbg_ptr, e, n, t, _, o, i);
    return v.__wrap(a);
  }
  numTriangles() {
    return r.solid_numTriangles(this.__wbg_ptr) >>> 0;
  }
  static prism(e, n, t) {
    const _ = r.solid_prism(e, n, t);
    return v.__wrap(_);
  }
  projectView(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
    return r.solid_projectView(this.__wbg_ptr, t, _, w(n) ? 4294967297 : n >>> 0);
  }
  static revolve(e, n, t, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = B(n, r.__wbindgen_malloc), f = s, d = B(t, r.__wbindgen_malloc), u = s, g = r.solid_revolve(o, i, a, f, d, u, _);
    if (g[2]) throw b(g[1]);
    return v.__wrap(g[0]);
  }
  rotate(e, n, t) {
    const _ = r.solid_rotate(this.__wbg_ptr, e, n, t);
    return v.__wrap(_);
  }
  runDfm(e, n, t) {
    let _, o;
    try {
      const f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = r.solid_runDfm(this.__wbg_ptr, f, d, u, g, t);
      var i = p[0], a = p[1];
      if (p[3]) throw i = 0, a = 0, b(p[2]);
      return _ = i, o = a, m(i, a);
    } finally {
      r.__wbindgen_free(_, o, 1);
    }
  }
  scale(e, n, t) {
    const _ = r.solid_scale(this.__wbg_ptr, e, n, t);
    return v.__wrap(_);
  }
  sectionView(e, n, t) {
    const _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    var i = w(n) ? 0 : l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s;
    return r.solid_sectionView(this.__wbg_ptr, _, o, i, a, w(t) ? 4294967297 : t >>> 0);
  }
  shell(e) {
    const n = r.op_shell(this.__wbg_ptr, e);
    return v.__wrap(n);
  }
  static sphere(e, n) {
    const t = r.solid_sphere(e, w(n) ? 4294967297 : n >>> 0);
    return v.__wrap(t);
  }
  surfaceArea() {
    return r.solid_surfaceArea(this.__wbg_ptr);
  }
  static sweepHelix(e, n, t, _, o, i, a, f, d, u, g) {
    const p = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.solid_sweepHelix(p, h, n, t, _, o, !w(i), w(i) ? 0 : i, !w(a), w(a) ? 0 : a, !w(f), w(f) ? 0 : f, w(d) ? 4294967297 : d >>> 0, w(u) ? 4294967297 : u >>> 0, !w(g), w(g) ? 0 : g);
    if (y[2]) throw b(y[1]);
    return v.__wrap(y[0]);
  }
  static sweepLine(e, n, t, _, o, i, a) {
    const f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = B(n, r.__wbindgen_malloc), g = s, p = B(t, r.__wbindgen_malloc), h = s, y = r.solid_sweepLine(f, d, u, g, p, h, !w(_), w(_) ? 0 : _, !w(o), w(o) ? 0 : o, !w(i), w(i) ? 0 : i, !w(a), w(a) ? 0 : a);
    if (y[2]) throw b(y[1]);
    return v.__wrap(y[0]);
  }
  static textExtrude(e, n, t, _, o, i, a, f, d, u) {
    const g = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = B(n, r.__wbindgen_malloc), y = s, P = B(t, r.__wbindgen_malloc), C = s, k = B(_, r.__wbindgen_malloc), z = s, E = B(o, r.__wbindgen_malloc), _e = s;
    var oe = w(a) ? 0 : l(a, r.__wbindgen_malloc, r.__wbindgen_realloc), ce = s, U = w(f) ? 0 : l(f, r.__wbindgen_malloc, r.__wbindgen_realloc), Ve = s;
    const ie = r.solid_textExtrude(g, p, h, y, P, C, k, z, E, _e, i, oe, ce, U, Ve, !w(d), w(d) ? 0 : d, !w(u), w(u) ? 0 : u);
    if (ie[2]) throw b(ie[1]);
    return v.__wrap(ie[0]);
  }
  toStepBuffer() {
    const e = r.solid_toStepBuffer(this.__wbg_ptr);
    if (e[3]) throw b(e[2]);
    var n = T(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 1, 1), n;
  }
  static torus(e, n, t) {
    const _ = r.solid_torus(e, n, w(t) ? 4294967297 : t >>> 0);
    return v.__wrap(_);
  }
  translate(e, n, t) {
    const _ = r.solid_translate(this.__wbg_ptr, e, n, t);
    return v.__wrap(_);
  }
  union(e) {
    A(e, v);
    const n = r.solid_union(this.__wbg_ptr, e.__wbg_ptr);
    if (n[2]) throw b(n[1]);
    return v.__wrap(n[0]);
  }
  volume() {
    return r.solid_volume(this.__wbg_ptr);
  }
  static wedge(e, n, t) {
    const _ = r.solid_wedge(e, n, t);
    return v.__wrap(_);
  }
}
Symbol.dispose && (v.prototype[Symbol.dispose] = v.prototype.free);
class pe {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Be.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_wasmannotationlayer_free(e, 0);
  }
  addAlignedDimension(e, n, t, _, o) {
    r.wasmannotationlayer_addAlignedDimension(this.__wbg_ptr, e, n, t, _, o);
  }
  addAngleDimension(e, n, t, _, o, i, a) {
    r.wasmannotationlayer_addAngleDimension(this.__wbg_ptr, e, n, t, _, o, i, a);
  }
  addDiameterDimension(e, n, t, _) {
    r.wasmannotationlayer_addDiameterDimension(this.__wbg_ptr, e, n, t, _);
  }
  addHorizontalDimension(e, n, t, _, o) {
    r.wasmannotationlayer_addHorizontalDimension(this.__wbg_ptr, e, n, t, _, o);
  }
  addRadiusDimension(e, n, t, _) {
    r.wasmannotationlayer_addRadiusDimension(this.__wbg_ptr, e, n, t, _);
  }
  addVerticalDimension(e, n, t, _, o) {
    r.wasmannotationlayer_addVerticalDimension(this.__wbg_ptr, e, n, t, _, o);
  }
  annotationCount() {
    return r.wasmannotationlayer_annotationCount(this.__wbg_ptr) >>> 0;
  }
  clear() {
    r.wasmannotationlayer_clear(this.__wbg_ptr);
  }
  isEmpty() {
    return r.wasmannotationlayer_isEmpty(this.__wbg_ptr) !== 0;
  }
  constructor() {
    const e = r.wasmannotationlayer_new();
    return this.__wbg_ptr = e >>> 0, Be.register(this, this.__wbg_ptr, this), this;
  }
  renderAll(e) {
    var n = w(e) ? 0 : l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
    return r.wasmannotationlayer_renderAll(this.__wbg_ptr, n, t);
  }
}
Symbol.dispose && (pe.prototype[Symbol.dispose] = pe.prototype.free);
class R {
  static __wrap(e) {
    e = e >>> 0;
    const n = Object.create(R.prototype);
    return n.__wbg_ptr = e, se.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, se.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_wasmcamsettings_free(e, 0);
  }
  get feed_rate() {
    return r.__wbg_get_wasmcamsettings_feed_rate(this.__wbg_ptr);
  }
  get plunge_rate() {
    return r.__wbg_get_wasmcamsettings_plunge_rate(this.__wbg_ptr);
  }
  get retract_z() {
    return r.__wbg_get_wasmcamsettings_retract_z(this.__wbg_ptr);
  }
  get safe_z() {
    return r.__wbg_get_wasmcamsettings_safe_z(this.__wbg_ptr);
  }
  get spindle_rpm() {
    return r.__wbg_get_wasmcamsettings_spindle_rpm(this.__wbg_ptr);
  }
  get stepdown() {
    return r.__wbg_get_wasmcamsettings_stepdown(this.__wbg_ptr);
  }
  get stepover() {
    return r.__wbg_get_wasmcamsettings_stepover(this.__wbg_ptr);
  }
  set feed_rate(e) {
    r.__wbg_set_wasmcamsettings_feed_rate(this.__wbg_ptr, e);
  }
  set plunge_rate(e) {
    r.__wbg_set_wasmcamsettings_plunge_rate(this.__wbg_ptr, e);
  }
  set retract_z(e) {
    r.__wbg_set_wasmcamsettings_retract_z(this.__wbg_ptr, e);
  }
  set safe_z(e) {
    r.__wbg_set_wasmcamsettings_safe_z(this.__wbg_ptr, e);
  }
  set spindle_rpm(e) {
    r.__wbg_set_wasmcamsettings_spindle_rpm(this.__wbg_ptr, e);
  }
  set stepdown(e) {
    r.__wbg_set_wasmcamsettings_stepdown(this.__wbg_ptr, e);
  }
  set stepover(e) {
    r.__wbg_set_wasmcamsettings_stepover(this.__wbg_ptr, e);
  }
  static fromJson(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.wasmcamsettings_fromJson(n, t);
    if (_[2]) throw b(_[1]);
    return R.__wrap(_[0]);
  }
  constructor() {
    const e = r.wasmcamsettings_new();
    return this.__wbg_ptr = e >>> 0, se.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (R.prototype[Symbol.dispose] = R.prototype.free);
class j {
  static __wrap(e) {
    e = e >>> 0;
    const n = Object.create(j.prototype);
    return n.__wbg_ptr = e, le.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, le.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_wasmdocumentengine_free(e, 0);
  }
  add_feature(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
    return r.wasmdocumentengine_add_feature(this.__wbg_ptr, n, t);
  }
  can_redo() {
    return r.wasmdocumentengine_can_redo(this.__wbg_ptr) !== 0;
  }
  can_undo() {
    return r.wasmdocumentengine_can_undo(this.__wbg_ptr) !== 0;
  }
  compute_position_between(e, n) {
    let t, _;
    try {
      const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.wasmdocumentengine_compute_position_between(this.__wbg_ptr, o, i, a, f);
      return t = d[0], _ = d[1], m(d[0], d[1]);
    } finally {
      r.__wbindgen_free(t, _, 1);
    }
  }
  create_feature(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_create_feature(this.__wbg_ptr, t, _, o, i);
  }
  delete_feature(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
    return r.wasmdocumentengine_delete_feature(this.__wbg_ptr, n, t);
  }
  delete_feature_by_id(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
    return r.wasmdocumentengine_delete_feature_by_id(this.__wbg_ptr, n, t);
  }
  static from_v1_json(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.wasmdocumentengine_from_v1_json(n, t);
    if (_[2]) throw b(_[1]);
    return j.__wrap(_[0]);
  }
  get_document_json() {
    let e, n;
    try {
      const t = r.wasmdocumentengine_get_document_json(this.__wbg_ptr);
      return e = t[0], n = t[1], m(t[0], t[1]);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  get_ops_since(e) {
    let n, t;
    try {
      const _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.wasmdocumentengine_get_ops_since(this.__wbg_ptr, _, o);
      return n = i[0], t = i[1], m(i[0], i[1]);
    } finally {
      r.__wbindgen_free(n, t, 1);
    }
  }
  get_ordered_features_json() {
    let e, n;
    try {
      const t = r.wasmdocumentengine_get_ordered_features_json(this.__wbg_ptr);
      return e = t[0], n = t[1], m(t[0], t[1]);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  get_parts_json() {
    let e, n;
    try {
      const t = r.wasmdocumentengine_get_parts_json(this.__wbg_ptr);
      return e = t[0], n = t[1], m(t[0], t[1]);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  get_sync_clock() {
    let e, n;
    try {
      const t = r.wasmdocumentengine_get_sync_clock(this.__wbg_ptr);
      return e = t[0], n = t[1], m(t[0], t[1]);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  import_ir(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
    return r.wasmdocumentengine_import_ir(this.__wbg_ptr, n, t);
  }
  static load(e) {
    const n = J(e, r.__wbindgen_malloc), t = s, _ = r.wasmdocumentengine_load(n, t);
    if (_[2]) throw b(_[1]);
    return j.__wrap(_[0]);
  }
  merge_remote(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
    return r.wasmdocumentengine_merge_remote(this.__wbg_ptr, n, t);
  }
  move_feature(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_move_feature(this.__wbg_ptr, t, _, o, i);
  }
  constructor() {
    const e = r.wasmdocumentengine_new();
    return this.__wbg_ptr = e >>> 0, le.register(this, this.__wbg_ptr, this), this;
  }
  redo() {
    return r.wasmdocumentengine_redo(this.__wbg_ptr);
  }
  rename_feature(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_rename_feature(this.__wbg_ptr, t, _, o, i);
  }
  save() {
    const e = r.wasmdocumentengine_save(this.__wbg_ptr);
    var n = T(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 1, 1), n;
  }
  set_joint_state(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
    return r.wasmdocumentengine_set_joint_state(this.__wbg_ptr, t, _, n);
  }
  set_material(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_set_material(this.__wbg_ptr, t, _, o, i);
  }
  set_param(e, n, t) {
    const _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s;
    return r.wasmdocumentengine_set_param(this.__wbg_ptr, _, o, i, a, f, d);
  }
  set_rotation(e, n, t, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_set_rotation(this.__wbg_ptr, o, i, n, t, _);
  }
  set_scale(e, n, t, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_set_scale(this.__wbg_ptr, o, i, n, t, _);
  }
  set_translation(e, n, t, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_set_translation(this.__wbg_ptr, o, i, n, t, _);
  }
  set_visible(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
    return r.wasmdocumentengine_set_visible(this.__wbg_ptr, t, _, n);
  }
  undo() {
    return r.wasmdocumentengine_undo(this.__wbg_ptr);
  }
  update_feature(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_update_feature(this.__wbg_ptr, t, _, o, i);
  }
}
Symbol.dispose && (j.prototype[Symbol.dispose] = j.prototype.free);
class he {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Me.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_wasmkeybindings_free(e, 0);
  }
  chordFor(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.wasmkeybindings_chordFor(this.__wbg_ptr, n, t);
    let o;
    return _[0] !== 0 && (o = m(_[0], _[1]).slice(), r.__wbindgen_free(_[0], _[1] * 1, 1)), o;
  }
  commandsJson() {
    let e, n;
    try {
      const t = r.wasmkeybindings_commandsJson(this.__wbg_ptr);
      return e = t[0], n = t[1], m(t[0], t[1]);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  conflictsJson(e) {
    let n, t;
    try {
      const _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.wasmkeybindings_conflictsJson(this.__wbg_ptr, _, o);
      return n = i[0], t = i[1], m(i[0], i[1]);
    } finally {
      r.__wbindgen_free(n, t, 1);
    }
  }
  loadOverrides(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
    return r.wasmkeybindings_loadOverrides(this.__wbg_ptr, n, t) !== 0;
  }
  constructor() {
    const e = r.wasmkeybindings_new();
    return this.__wbg_ptr = e >>> 0, Me.register(this, this.__wbg_ptr, this), this;
  }
  resetAll() {
    r.wasmkeybindings_resetAll(this.__wbg_ptr);
  }
  resolve(e, n, t) {
    const _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.wasmkeybindings_resolve(this.__wbg_ptr, _, o, i, a, t);
    let d;
    return f[0] !== 0 && (d = m(f[0], f[1]).slice(), r.__wbindgen_free(f[0], f[1] * 1, 1)), d;
  }
  saveOverrides() {
    let e, n;
    try {
      const t = r.wasmkeybindings_saveOverrides(this.__wbg_ptr);
      return e = t[0], n = t[1], m(t[0], t[1]);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  setBinding(e, n) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
    var o = w(n) ? 0 : l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    r.wasmkeybindings_setBinding(this.__wbg_ptr, t, _, o, i);
  }
}
Symbol.dispose && (he.prototype[Symbol.dispose] = he.prototype.free);
class ye {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ke.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_wasmsketchsession_free(e, 0);
  }
  addCircle(e, n, t) {
    r.wasmsketchsession_addCircle(this.__wbg_ptr, e, n, t);
  }
  addConstraint(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.wasmsketchsession_addConstraint(this.__wbg_ptr, n, t);
    if (_[1]) throw b(_[0]);
  }
  addLine(e, n, t, _) {
    r.wasmsketchsession_addLine(this.__wbg_ptr, e, n, t, _);
  }
  addRectangle(e, n, t, _) {
    r.wasmsketchsession_addRectangle(this.__wbg_ptr, e, n, t, _);
  }
  cancelPending() {
    r.wasmsketchsession_cancelPending(this.__wbg_ptr);
  }
  clear() {
    r.wasmsketchsession_clear(this.__wbg_ptr);
  }
  clearSelection() {
    r.wasmsketchsession_clearSelection(this.__wbg_ptr);
  }
  constructor(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.wasmsketchsession_new(n, t);
    if (_[2]) throw b(_[1]);
    return this.__wbg_ptr = _[0] >>> 0, ke.register(this, this.__wbg_ptr, this), this;
  }
  onClick() {
    let e, n;
    try {
      const t = r.wasmsketchsession_onClick(this.__wbg_ptr);
      return e = t[0], n = t[1], m(t[0], t[1]);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  onCursorLeave() {
    r.wasmsketchsession_onCursorLeave(this.__wbg_ptr);
  }
  onCursorRay(e, n, t, _, o, i) {
    r.wasmsketchsession_onCursorRay(this.__wbg_ptr, e, n, t, _, o, i);
  }
  onCursorSketch(e, n) {
    r.wasmsketchsession_onCursorSketch(this.__wbg_ptr, e, n);
  }
  onDoubleClick() {
    r.wasmsketchsession_onDoubleClick(this.__wbg_ptr);
  }
  redo() {
    return r.wasmsketchsession_redo(this.__wbg_ptr) !== 0;
  }
  removeConstraint(e) {
    r.wasmsketchsession_removeConstraint(this.__wbg_ptr, e);
  }
  setSnap(e, n, t, _) {
    r.wasmsketchsession_setSnap(this.__wbg_ptr, e, n, t, _);
  }
  setTool(e) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
    r.wasmsketchsession_setTool(this.__wbg_ptr, n, t);
  }
  snapshot() {
    let e, n;
    try {
      const o = r.wasmsketchsession_snapshot(this.__wbg_ptr);
      var t = o[0], _ = o[1];
      if (o[3]) throw t = 0, _ = 0, b(o[2]);
      return e = t, n = _, m(t, _);
    } finally {
      r.__wbindgen_free(e, n, 1);
    }
  }
  solve() {
    return r.wasmsketchsession_solve(this.__wbg_ptr) !== 0;
  }
  toggleSelection(e) {
    r.wasmsketchsession_toggleSelection(this.__wbg_ptr, e);
  }
  undo() {
    return r.wasmsketchsession_undo(this.__wbg_ptr) !== 0;
  }
}
Symbol.dispose && (ye.prototype[Symbol.dispose] = ye.prototype.free);
function rn(c) {
  A(c, v);
  const e = r.analyzeForPrinting(c.__wbg_ptr);
  if (e[2]) throw b(e[1]);
  return b(e[0]);
}
function _n(c, e, n, t, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.analyzeStaticsBox(a, f, e, n, t, _, o, i);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function on(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = I(e, r.__wbindgen_malloc), i = s, a = F(n, r.__wbindgen_malloc), f = s, d = r.analyzeStaticsMesh(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function cn(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.antennaAnalyze(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function an(c, e, n, t, _) {
  let o, i;
  try {
    const d = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s, P = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), C = s, k = l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), z = s, E = r.atoms_build_receipt(d, u, g, p, h, y, P, C, k, z);
    var a = E[0], f = E[1];
    if (E[3]) throw a = 0, f = 0, b(E[2]);
    return o = a, i = f, m(a, f);
  } finally {
    r.__wbindgen_free(o, i, 1);
  }
}
function sn(c, e) {
  let n, t;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.atoms_homogenize(i, a, f, d);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, b(u[2]);
    return n = _, t = o, m(_, o);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function ln(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.atoms_inspect(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function fn(c, e, n, t) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = r.atoms_minimize(f, d, u, g, n, t);
    var i = p[0], a = p[1];
    if (p[3]) throw i = 0, a = 0, b(p[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function dn(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.atoms_parse_xyz(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function bn(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.atoms_write_xyz(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function un(c, e, n) {
  let t, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = r.buildCalibrationReportJson(a, f, d, u, g, p);
    var o = h[0], i = h[1];
    if (h[3]) throw o = 0, i = 0, b(h[2]);
    return t = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(t, _, 1);
  }
}
function gn(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = I(e, r.__wbindgen_malloc), i = s, a = F(n, r.__wbindgen_malloc), f = s, d = r.buildGlbBytes(t, _, o, i, a, f);
  if (d[3]) throw b(d[2]);
  var u = T(d[0], d[1]).slice();
  return r.__wbindgen_free(d[0], d[1] * 1, 1), u;
}
function wn(c, e) {
  let n, t;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.buildPart(i, a, f, d);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, b(u[2]);
    return n = _, t = o, m(_, o);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function mn(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = I(e, r.__wbindgen_malloc), i = s, a = F(n, r.__wbindgen_malloc), f = s, d = r.buildStlBytes(t, _, o, i, a, f);
  if (d[3]) throw b(d[2]);
  var u = T(d[0], d[1]).slice();
  return r.__wbindgen_free(d[0], d[1] * 1, 1), u;
}
function pn(c, e) {
  let n, t;
  try {
    const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.build_chat_system_prompt(_, o, i, a);
    return n = f[0], t = f[1], m(f[0], f[1]);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function hn(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.calibrationDefaultTolerance(n, t, e);
  if (_[2]) throw b(_[1]);
  return _[0];
}
function yn(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.calibrationFingerprintDocument(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function vn(c, e, n, t, _) {
  let o, i;
  try {
    const d = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s, P = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), C = s, k = r.camDropCutter(d, u, g, p, h, y, P, C, _);
    var a = k[0], f = k[1];
    if (k[3]) throw a = 0, f = 0, b(k[2]);
    return o = a, i = f, m(a, f);
  } finally {
    r.__wbindgen_free(o, i, 1);
  }
}
function xn(c, e, n, t) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s;
    A(t, R);
    const y = r.camExportGcode(f, d, u, g, p, h, t.__wbg_ptr);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, b(y[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function Sn(c, e, n, t, _) {
  let o, i;
  try {
    const d = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s;
    A(t, R);
    const P = r.camExportLinuxCnc(d, u, g, p, h, y, t.__wbg_ptr, _);
    var a = P[0], f = P[1];
    if (P[3]) throw a = 0, f = 0, b(P[2]);
    return o = a, i = f, m(a, f);
  } finally {
    r.__wbindgen_free(o, i, 1);
  }
}
function Pn(c, e, n, t, _, o) {
  let i, a;
  try {
    const u = l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s;
    A(o, R);
    const p = r.camGenerateCircularPocket(c, e, n, t, u, g, o.__wbg_ptr);
    var f = p[0], d = p[1];
    if (p[3]) throw f = 0, d = 0, b(p[2]);
    return i = f, a = d, m(f, d);
  } finally {
    r.__wbindgen_free(i, a, 1);
  }
}
function Dn(c, e, n, t, _, o, i, a, f, d, u) {
  let g, p;
  try {
    const P = l(d, r.__wbindgen_malloc, r.__wbindgen_realloc), C = s;
    A(u, R);
    const k = r.camGenerateContour(c, e, n, t, _, o, i, a, f, P, C, u.__wbg_ptr);
    var h = k[0], y = k[1];
    if (k[3]) throw h = 0, y = 0, b(k[2]);
    return g = h, p = y, m(h, y);
  } finally {
    r.__wbindgen_free(g, p, 1);
  }
}
function An(c, e, n, t, _, o, i) {
  let a, f;
  try {
    const g = l(o, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s;
    A(i, R);
    const h = r.camGenerateFace(c, e, n, t, _, g, p, i.__wbg_ptr);
    var d = h[0], u = h[1];
    if (h[3]) throw d = 0, u = 0, b(h[2]);
    return a = d, f = u, m(d, u);
  } finally {
    r.__wbindgen_free(a, f, 1);
  }
}
function Bn(c, e, n, t, _, o, i) {
  let a, f;
  try {
    const g = l(o, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s;
    A(i, R);
    const h = r.camGeneratePocket(c, e, n, t, _, g, p, i.__wbg_ptr);
    var d = h[0], u = h[1];
    if (h[3]) throw d = 0, u = 0, b(h[2]);
    return a = d, f = u, m(d, u);
  } finally {
    r.__wbindgen_free(a, f, 1);
  }
}
function Mn(c, e, n, t, _, o, i) {
  let a, f;
  try {
    const g = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s;
    A(n, R);
    const P = r.camGenerateRoughing3d(g, p, h, y, n.__wbg_ptr, t, _, o, i);
    var d = P[0], u = P[1];
    if (P[3]) throw d = 0, u = 0, b(P[2]);
    return a = d, f = u, m(d, u);
  } finally {
    r.__wbindgen_free(a, f, 1);
  }
}
function kn() {
  let c, e;
  try {
    const _ = r.camGetDefaultTools();
    var n = _[0], t = _[1];
    if (_[3]) throw n = 0, t = 0, b(_[2]);
    return c = n, e = t, m(n, t);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function In(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.camToolpathStats(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function Fn(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.checkDesignConstraints(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function Tn(c, e) {
  A(c, v);
  const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.checkPrintability(c.__wbg_ptr, n, t);
  if (_[2]) throw b(_[1]);
  return b(_[0]);
}
function Cn(c, e) {
  let n, t;
  try {
    const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.checkSheetMetal(_, o, i, a);
    return n = f[0], t = f[1], m(f[0], f[1]);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function Rn(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = B(n, r.__wbindgen_malloc), i = s, a = r.circuitAcResponse(t, _, e, o, i);
  if (a[2]) throw b(a[1]);
  return b(a[0]);
}
function En(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.circuitDcOperatingPoint(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function zn(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.circuitFromSchematic(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function Gn(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.circuitSensitivities(t, _, e, o, i);
  if (a[2]) throw b(a[1]);
  return b(a[0]);
}
function Vn(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.circuitTransient(t, _, e, n);
  if (o[2]) throw b(o[1]);
  return b(o[0]);
}
function Ln(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.circuitTune(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function On(c, e, n) {
  const t = I(c, r.__wbindgen_malloc), _ = s, o = F(e, r.__wbindgen_malloc), i = s;
  return r.computeCreasedNormalsGpu(t, _, o, i, n);
}
function Wn(c, e) {
  const n = I(c, r.__wbindgen_malloc), t = s, _ = F(e, r.__wbindgen_malloc), o = s, i = r.computeMeshProperties(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function Un(c, e) {
  const n = I(c, r.__wbindgen_malloc), t = s, _ = F(e, r.__wbindgen_malloc), o = s;
  return r.computeMeshVolume(n, t, _, o);
}
function jn(c, e, n) {
  let t, _;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.costSheetMetal(o, i, a, f, n);
    return t = d[0], _ = d[1], m(d[0], d[1]);
  } finally {
    r.__wbindgen_free(t, _, 1);
  }
}
function qn(c, e, n, t, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = l(i, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.createDetailView(a, f, e, n, t, _, o, d, u);
  if (g[2]) throw b(g[1]);
  return b(g[0]);
}
function Jn(c, e, n) {
  const t = I(c, r.__wbindgen_malloc), _ = s, o = F(e, r.__wbindgen_malloc), i = s;
  return r.decimateMeshGpu(t, _, o, i, n);
}
function Nn(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.deriveParts(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function Qn(c, e) {
  let n, t;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.digitizeSketch(i, a, f, d);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, b(u[2]);
    return n = _, t = o, m(_, o);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function Hn(c, e, n) {
  let t, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.digitizeText(a, f, e, d, u);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, b(g[2]);
    return t = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(t, _, 1);
  }
}
function Kn(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.documentDiff(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function $n(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.documentDiffApply(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function Xn(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.documentDiffHuman(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function Zn(c, e, n, t) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s;
  var u = w(t) ? 0 : l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s;
  const p = r.documentMerge(_, o, i, a, f, d, u, g);
  if (p[2]) throw b(p[1]);
  return b(p[0]);
}
function Yn(c, e, n, t) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.documentParameterGradient(_, o, i, a, n, t);
  if (f[2]) throw b(f[1]);
  return b(f[0]);
}
function et(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.documentToLoon(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function nt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.documentToLoonChecked(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function tt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.documentToStepBuffer(e, n);
  if (t[3]) throw b(t[2]);
  var _ = T(t[0], t[1]).slice();
  return r.__wbindgen_free(t[0], t[1] * 1, 1), _;
}
function rt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.drawingSheetToPdf(e, n);
  if (t[3]) throw b(t[2]);
  var _ = T(t[0], t[1]).slice();
  return r.__wbindgen_free(t[0], t[1] * 1, 1), _;
}
function _t(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadAirgapFluxDensity(e, n);
  if (t[2]) throw b(t[1]);
  return t[0];
}
function ot(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadAirgapSolve(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function ct(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadBuildReceipt(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function it() {
  const c = r.ecadBuiltinSymbols();
  if (c[2]) throw b(c[1]);
  return b(c[0]);
}
function at(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadCheckDrc(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function st(c, e, n, t, _) {
  const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.ecadCheckDrcInRegion(o, i, e, n, t, _);
  if (a[2]) throw b(a[1]);
  return b(a[0]);
}
function lt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadCheckErc(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function ft(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadComponentMeshes(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function dt(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.ecadComputeRatsnest(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function bt(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.ecadCritiqueRoute(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function ut(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.ecadDfmCheck(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function gt(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.ecadDfmDefaultPack(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function wt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadEvaluateMotor(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function mt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadExportFab(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function pt(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
  var _ = w(e) ? 0 : l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
  const i = r.ecadFabPrep(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function ht(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadFillZones(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function yt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadFindAlternatives(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function vt(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.ecadFootprintForName(n, t, e);
  if (_[2]) throw b(_[1]);
  return b(_[0]);
}
function xt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadGenerateNetlist(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function St(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadGetSymbol(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function Pt() {
  let c, e;
  try {
    const n = r.ecadJellybeanManifest();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function Dt(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
  return r.ecadLayerZ(t, _, e, n);
}
function At(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.ecadLengthMatch(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function Bt(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.ecadNetContinuity(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function Mt(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.ecadNetForWire(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function kt() {
  let c, e;
  try {
    const n = r.ecadPartsManifest();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function It(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadPcbPreviewMeshes(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function Ft(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.ecadResolveFootprint(n, t, e);
  if (_[2]) throw b(_[1]);
  return b(_[0]);
}
function Tt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.ecadResolvePart(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function Ct(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
  var _ = w(e) ? 0 : l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
  const i = r.ecadResolvePartDef(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function Rt(c, e, n, t) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.ecadRouteAll(_, o, e, i, a, !w(t), w(t) ? 0 : t);
  if (f[2]) throw b(f[1]);
  return b(f[0]);
}
function Et(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.ecadRouteDiffPair(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function zt(c, e, n, t, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.ecadRouteNet(a, f, d, u, n, t, _, o, i);
  if (g[2]) throw b(g[1]);
  return b(g[0]);
}
function Gt(c, e, n, t, _, o, i, a) {
  const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.ecadRouteNetMaze(f, d, u, g, p, h, t, _, o, i, a);
  if (y[2]) throw b(y[1]);
  return b(y[0]);
}
function Vt(c, e, n, t, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.ecadRouteNetShove(a, f, d, u, n, t, _, o, i);
  if (g[2]) throw b(g[1]);
  return b(g[0]);
}
function Lt(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.ecadSearchParts(n, t, e);
  if (_[2]) throw b(_[1]);
  return b(_[0]);
}
function Ot(c, e, n, t, _) {
  const o = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.ecadSnapToGridOrPin(c, e, o, i, t, _);
  if (a[2]) throw b(a[1]);
  return b(a[0]);
}
function Wt(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.ecadVerifyReceipt(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function Ut(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.ecadVerifySubstitution(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function jt(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.emSimulate(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function qt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.embroideryDesignToMesh(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function Jt(c, e) {
  let n, t;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.enclosure_component_extents(i, a, f, d);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, b(u[2]);
    return n = _, t = o, m(_, o);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function Nt(c, e) {
  let n, t;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.enclosure_connectors(i, a, f, d);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, b(u[2]);
    return n = _, t = o, m(_, o);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function Qt(c, e, n) {
  let t, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = r.enclosure_derive_board(a, f, d, u, g, p);
    var o = h[0], i = h[1];
    if (h[3]) throw o = 0, i = 0, b(h[2]);
    return t = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(t, _, 1);
  }
}
function Ht(c, e) {
  let n, t;
  try {
    const i = B(c, r.__wbindgen_malloc), a = s, f = F(e, r.__wbindgen_malloc), d = s, u = r.enclosure_features(i, a, f, d);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, b(u[2]);
    return n = _, t = o, m(_, o);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function Kt(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.enclosure_fit(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function $t(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.enclosure_mounting_holes(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function Xt(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.enclosure_outline_aabb(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function Zt(c, e, n, t) {
  let _, o;
  try {
    const f = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.enclosure_to_world(c, e, n, f, d);
    var i = u[0], a = u[1];
    if (u[3]) throw i = 0, a = 0, b(u[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function Yt(c, e, n, t, _) {
  const o = l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.estimatePrintCost(c, e, n, t, o, i);
  if (a[2]) throw b(a[1]);
  return b(a[0]);
}
function er(c, e, n, t, _, o) {
  const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.estimate_cost_for_process(i, a, f, d, n, t, _, o);
  if (u[2]) throw b(u[1]);
  return b(u[0]);
}
function nr(c, e, n) {
  const t = r.eulerXyzDegToQuat(c, e, n);
  var _ = be(t[0], t[1]).slice();
  return r.__wbindgen_free(t[0], t[1] * 8, 8), _;
}
function tr(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.evalVcadSource(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function rr(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
  var _ = w(e) ? 0 : l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
  const i = r.evalVcadSourceParametric(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function _r(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.evalVcadSourceWithModules(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function or(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.evaluateDocument(n, t, e);
  if (_[2]) throw b(_[1]);
  return b(_[0]);
}
function cr(c) {
  let e, n;
  try {
    const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.evaluateSheetMetalChain(t, _);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function ir(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.evaluateVCode(e, n);
  if (t[2]) throw b(t[1]);
  return v.__wrap(t[0]);
}
function ar(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.exportKicadPcb(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function sr(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.exportKicadProject(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function lr(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.exportKicadSch(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function fr(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.exportProjectedViewToDxf(e, n);
  if (t[3]) throw b(t[2]);
  var _ = T(t[0], t[1]).slice();
  return r.__wbindgen_free(t[0], t[1] * 1, 1), _;
}
function dr(c, e) {
  const n = r.exprEvalAst(c, e);
  if (n[2]) throw b(n[1]);
  return n[0];
}
function br(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.exprEvaluate(n, t, e);
  if (_[2]) throw b(_[1]);
  return _[0];
}
function ur(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.exprParse(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function gr(c, e, n, t) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = I(n, r.__wbindgen_malloc), d = s, u = F(t, r.__wbindgen_malloc), g = s, p = r.feaAnalyzeMesh(_, o, i, a, f, d, u, g);
  if (p[2]) throw b(p[1]);
  return b(p[0]);
}
function wr(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.feaCheckBeam(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function mr(c) {
  let e, n;
  try {
    const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.flattenSolidToSheetMetal(t, _);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function pr(c, e, n, t) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = I(e, r.__wbindgen_malloc), a = s, f = F(n, r.__wbindgen_malloc), d = s, u = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = r.generate3mf(_, o, i, a, f, d, u, g);
  if (p[3]) throw b(p[2]);
  var h = T(p[0], p[1]).slice();
  return r.__wbindgen_free(p[0], p[1] * 1, 1), h;
}
function hr(c, e, n, t, _) {
  const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = I(e, r.__wbindgen_malloc), f = s, d = F(n, r.__wbindgen_malloc), u = s, g = J(t, r.__wbindgen_malloc), p = s, h = l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s, P = r.generate3mfWithGcode(o, i, a, f, d, u, g, p, h, y);
  if (P[3]) throw b(P[2]);
  var C = T(P[0], P[1]).slice();
  return r.__wbindgen_free(P[0], P[1] * 1, 1), C;
}
function yr(c, e, n, t) {
  let _, o;
  try {
    A(c, L);
    const f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.generateGcode(c.__wbg_ptr, f, d, n, t);
    var i = u[0], a = u[1];
    if (u[3]) throw i = 0, a = 0, b(u[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function vr() {
  return r.getCompiledModule();
}
function xr() {
  let c, e;
  try {
    const n = r.getPartsManifest();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function Sr() {
  let c, e;
  try {
    const n = r.getSheetMetalBendTable();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function Pr() {
  let c, e;
  try {
    const n = r.getSheetMetalMaterials();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function Dr(c) {
  let e, n;
  try {
    const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.getSheetMetalShopCatalog(t, _);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function Ar() {
  const c = r.getSlicerPrinterProfiles();
  if (c[2]) throw b(c[1]);
  return b(c[0]);
}
function Br() {
  let c, e;
  try {
    const n = r.get_anthropic_tools_json();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function Mr(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.get_default_dfm_pack(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function kr() {
  let c, e;
  try {
    const n = r.get_kernel_version();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function Ir() {
  let c, e;
  try {
    const n = r.get_tool_schemas();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function Fr(c) {
  const e = J(c, r.__wbindgen_malloc), n = s, t = r.importStepBuffer(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function Tr(c) {
  let e, n;
  try {
    const o = J(c, r.__wbindgen_malloc), i = s, a = r.importUrdfBuffer(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function Cr() {
  r.init();
}
function Rr() {
  return r.initGpu();
}
function Er() {
  return r.isCamAvailable() !== 0;
}
function zr() {
  return r.isEcadAvailable() !== 0;
}
function Gr() {
  return r.isEmbroideryAvailable() !== 0;
}
function Vr() {
  return r.isGpuAvailable() !== 0;
}
function Lr() {
  return r.isPhysicsAvailable() !== 0;
}
function Or() {
  return r.isSlicerAvailable() !== 0;
}
function Wr(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.latticeGaugeSimulate(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function Ur(c, e, n, t) {
  const _ = I(c, r.__wbindgen_malloc), o = s, i = F(e, r.__wbindgen_malloc), a = s, f = I(n, r.__wbindgen_malloc), d = s, u = F(t, r.__wbindgen_malloc), g = s, p = r.mesh_clearance(_, o, i, a, f, d, u, g);
  if (p[2]) throw b(p[1]);
  return b(p[0]);
}
function jr(c, e) {
  let n, t;
  try {
    const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.nestSheetMetalParts(_, o, i, a);
    return n = f[0], t = f[1], m(f[0], f[1]);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function qr(c) {
  let e, n;
  try {
    const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.nestedSheetMetalDxf(t, _);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function Jr(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.neutronicsSimulate(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function Nr(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.noteToHz(e, n);
  if (t[2]) throw b(t[1]);
  return t[0];
}
function Qr(c, e, n) {
  const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
  var o = w(n) ? 0 : l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
  return r.offsetSectionMesh(c, t, _, o, i);
}
function Hr(c, e) {
  A(c, v);
  const n = r.op_chamfer(c.__wbg_ptr, e);
  return v.__wrap(n);
}
function Kr(c, e, n, t, _, o, i, a, f) {
  A(c, v);
  const d = r.op_circular_pattern(c.__wbg_ptr, e, n, t, _, o, i, a, f);
  return v.__wrap(d);
}
function $r(c, e) {
  A(c, v);
  const n = r.op_fillet(c.__wbg_ptr, e);
  return v.__wrap(n);
}
function Xr(c, e, n, t, _, o) {
  A(c, v);
  const i = r.op_linear_pattern(c.__wbg_ptr, e, n, t, _, o);
  return v.__wrap(i);
}
function Zr(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.op_loft(n, t, w(e) ? 16777215 : e ? 1 : 0);
  if (_[2]) throw b(_[1]);
  return v.__wrap(_[0]);
}
function Yr(c, e, n, t) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = B(e, r.__wbindgen_malloc), a = s, f = B(n, r.__wbindgen_malloc), d = s, u = r.op_revolve(_, o, i, a, f, d, t);
  if (u[2]) throw b(u[1]);
  return v.__wrap(u[0]);
}
function e_(c, e) {
  A(c, v);
  const n = r.op_shell(c.__wbg_ptr, e);
  return v.__wrap(n);
}
function n_(c, e, n, t, _, o, i, a, f, d, u) {
  const g = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = r.op_sweep_helix(g, p, e, n, t, _, !w(o), w(o) ? 0 : o, !w(i), w(i) ? 0 : i, !w(a), w(a) ? 0 : a, w(f) ? 4294967297 : f >>> 0, w(d) ? 4294967297 : d >>> 0, !w(u), w(u) ? 0 : u);
  if (h[2]) throw b(h[1]);
  return v.__wrap(h[0]);
}
function t_(c, e, n, t, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = B(e, r.__wbindgen_malloc), u = s, g = B(n, r.__wbindgen_malloc), p = s, h = r.op_sweep_line(a, f, d, u, g, p, !w(t), w(t) ? 0 : t, !w(_), w(_) ? 0 : _, !w(o), w(o) ? 0 : o, !w(i), w(i) ? 0 : i);
  if (h[2]) throw b(h[1]);
  return v.__wrap(h[0]);
}
function r_(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.parseKicadPcb(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function __(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.parseVCode(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function o_(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.parseVcadFile(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function c_(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.particleOptimize(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function i_(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.particleSimulate(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function a_(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.photonicsSimulate(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function s_(c, e, n) {
  let t, _;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.plan_chat_tool(o, i, a, f, d, u);
    return t = g[0], _ = g[1], m(g[0], g[1]);
  } finally {
    r.__wbindgen_free(t, _, 1);
  }
}
function l_(c, e, n, t) {
  const _ = I(c, r.__wbindgen_malloc), o = s, i = F(e, r.__wbindgen_malloc), a = s;
  return r.processGeometryGpu(_, o, i, a, n, t);
}
function f_(c, e) {
  const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
  return r.projectMesh(c, n, t);
}
function d_(c) {
  let e, n;
  try {
    const o = J(c, r.__wbindgen_malloc), i = s, a = r.readEmbroideryDst(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function b_(c) {
  let e, n;
  try {
    const o = J(c, r.__wbindgen_malloc), i = s, a = r.readEmbroideryPes(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function u_(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.recommendPrintSettings(n, t, _, o);
  if (i[2]) throw b(i[1]);
  return b(i[0]);
}
function g_(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.renderBakeMesh(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function w_(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
  return r.renderBomTable(e, n);
}
function m_(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
  return r.renderTitleBlock(e, n);
}
function p_(c, e, n) {
  let t, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.render_pcb_svg(a, f, d, u, n);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, b(g[2]);
    return t = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(t, _, 1);
  }
}
function h_(c, e, n, t) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.render_pcb_svg_opts(f, d, u, g, n, p, h);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, b(y[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function y_(c, e) {
  let n, t;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.render_svg(i, a, e);
    var _ = f[0], o = f[1];
    if (f[3]) throw _ = 0, o = 0, b(f[2]);
    return n = _, t = o, m(_, o);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function v_(c, e, n, t, _, o) {
  let i, a;
  try {
    const u = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.render_svg_annotated(u, g, e, p, h, t, _, o);
    var f = y[0], d = y[1];
    if (y[3]) throw f = 0, d = 0, b(y[2]);
    return i = f, a = d, m(f, d);
  } finally {
    r.__wbindgen_free(i, a, 1);
  }
}
function x_(c, e, n, t, _, o, i, a, f) {
  let d, u;
  try {
    const E = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _e = s, oe = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), ce = s;
    var g = w(t) ? 0 : l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = w(a) ? 0 : l(a, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s, P = w(f) ? 0 : l(f, r.__wbindgen_malloc, r.__wbindgen_realloc), C = s;
    const U = r.render_svg_camera(E, _e, e, oe, ce, g, p, _, o, i, h, y, P, C);
    var k = U[0], z = U[1];
    if (U[3]) throw k = 0, z = 0, b(U[2]);
    return d = k, u = z, m(k, z);
  } finally {
    r.__wbindgen_free(d, u, 1);
  }
}
function S_(c, e, n) {
  let t, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.render_svg_camera_opts(a, f, e, d, u);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, b(g[2]);
    return t = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(t, _, 1);
  }
}
function P_(c, e, n) {
  let t, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.render_svg_view(a, f, e, d, u);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, b(g[2]);
    return t = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(t, _, 1);
  }
}
function D_(c, e, n, t) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.render_svg_view_highlight(f, d, e, u, g, p, h);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, b(y[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function A_(c, e, n, t) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.render_svg_view_section(f, d, e, u, g, p, h);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, b(y[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function B_(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.resolveDocumentJson(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function M_(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.resolveParametersJson(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function k_(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.sample_timeline_sequence(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function I_(c, e) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, _ = r.sample_timeline_track(n, t, e);
  if (_[2]) throw b(_[1]);
  return _[0];
}
function F_(c, e, n) {
  const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
  var o = w(n) ? 0 : l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
  return r.sectionMesh(c, t, _, o, i);
}
function T_(c) {
  let e, n;
  try {
    const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.sheetMetalFoldedStep(t, _);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function C_(c) {
  let e, n;
  try {
    const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.sheetMetalSequence(t, _);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function R_(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.simulateFlow(t, _, o, i, n);
  if (a[2]) throw b(a[1]);
  return b(a[0]);
}
function E_(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.simulateStrikeKernel(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function z_(c, e, n, t) {
  let _, o;
  try {
    const f = r.sketchCircleSegments(c, e, n, t);
    var i = f[0], a = f[1];
    if (f[3]) throw i = 0, a = 0, b(f[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function G_(c, e, n, t) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.sketchHitTest(_, o, e, n, t);
  if (i[2]) throw b(i[1]);
  return i[0];
}
function V_(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.sketchPlaneBasis(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function L_(c, e, n, t, _, o, i) {
  let a, f;
  try {
    const g = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = r.sketchPlaneIntersectRay(g, p, e, n, t, _, o, i);
    var d = h[0], u = h[1];
    if (h[3]) throw d = 0, u = 0, b(h[2]);
    return a = d, f = u, m(d, u);
  } finally {
    r.__wbindgen_free(a, f, 1);
  }
}
function O_(c, e, n, t) {
  let _, o;
  try {
    const f = r.sketchRectangleSegments(c, e, n, t);
    var i = f[0], a = f[1];
    if (f[3]) throw i = 0, a = 0, b(f[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function W_(c, e, n, t, _, o, i) {
  let a, f;
  try {
    const g = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = r.sketchSnap(g, p, e, n, t, _, o, i);
    var d = h[0], u = h[1];
    if (h[3]) throw d = 0, u = 0, b(h[2]);
    return a = d, f = u, m(d, u);
  } finally {
    r.__wbindgen_free(a, f, 1);
  }
}
function U_(c, e, n) {
  let t, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.sketchToWorld(a, f, e, n);
    var o = d[0], i = d[1];
    if (d[3]) throw o = 0, i = 0, b(d[2]);
    return t = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(t, _, 1);
  }
}
function j_(c, e, n, t) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.sketchWorldToSketch(f, d, e, n, t);
    var i = u[0], a = u[1];
    if (u[3]) throw i = 0, a = 0, b(u[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function q_(c, e, n) {
  const t = I(c, r.__wbindgen_malloc), _ = s, o = F(e, r.__wbindgen_malloc), i = s;
  A(n, O);
  const a = r.sliceMesh(t, _, o, i, n.__wbg_ptr);
  if (a[2]) throw b(a[1]);
  return L.__wrap(a[0]);
}
function J_(c, e, n, t) {
  const _ = I(c, r.__wbindgen_malloc), o = s, i = F(e, r.__wbindgen_malloc), a = s;
  A(n, O);
  const f = r.sliceMeshWithProgress(_, o, i, a, n.__wbg_ptr, t);
  if (f[2]) throw b(f[1]);
  return L.__wrap(f[0]);
}
function N_(c, e, n) {
  A(c, v), A(e, O);
  const t = r.sliceSolid(c.__wbg_ptr, e.__wbg_ptr, w(n) ? 4294967297 : n >>> 0);
  if (t[2]) throw b(t[1]);
  return L.__wrap(t[0]);
}
function Q_(c, e) {
  let n, t;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.solveDesignConstraints(i, a, f, d);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, b(u[2]);
    return n = _, t = o, m(_, o);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function H_(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.solveForwardKinematics(e, n);
  if (t[2]) throw b(t[1]);
  return b(t[0]);
}
function K_(c, e) {
  let n, t;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = r.solveSketchSegments(i, a, f, d);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, b(u[2]);
    return n = _, t = o, m(_, o);
  } finally {
    r.__wbindgen_free(n, t, 1);
  }
}
function $_(c, e, n, t, _) {
  const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
  var a = w(n) ? 0 : l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s;
  const d = r.textBounds(o, i, e, a, f, !w(t), w(t) ? 0 : t, !w(_), w(_) ? 0 : _);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function X_(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.thermalSolve(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function Z_(c, e, n, t) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s, u = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = r.thermalSolveTransient(_, o, i, a, f, d, u, g);
  if (p[2]) throw b(p[1]);
  return b(p[0]);
}
function Y_(c) {
  let e, n;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.toVCode(o, i);
    var t = a[0], _ = a[1];
    if (a[3]) throw t = 0, _ = 0, b(a[2]);
    return e = t, n = _, m(t, _);
  } finally {
    r.__wbindgen_free(e, n, 1);
  }
}
function eo(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.toleranceAnalyze(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function no(c, e, n, t, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.topologyOptimizeBox(a, f, e, n, t, _, o, i);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function to(c, e, n) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = I(e, r.__wbindgen_malloc), i = s, a = F(n, r.__wbindgen_malloc), f = s, d = r.topologyOptimizeMesh(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function ro(c, e, n) {
  const t = I(c, r.__wbindgen_malloc), _ = s;
  var o = w(e) ? 0 : I(e, r.__wbindgen_malloc), i = s;
  const a = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, d = r.transformMeshBuffers(t, _, o, i, a, f);
  if (d[2]) throw b(d[1]);
  return b(d[0]);
}
function _o(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.writeEmbroideryDst(e, n);
  if (t[3]) throw b(t[2]);
  var _ = T(t[0], t[1]).slice();
  return r.__wbindgen_free(t[0], t[1] * 1, 1), _;
}
function oo(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, t = r.writeEmbroideryPes(e, n);
  if (t[3]) throw b(t[2]);
  var _ = T(t[0], t[1]).slice();
  return r.__wbindgen_free(t[0], t[1] * 1, 1), _;
}
function Ce() {
  return { __proto__: null, "./vcad_kernel_wasm_bg.js": { __proto__: null, __wbg_Error_8c4e43fe74559d73: function(e, n) {
    return Error(m(e, n));
  }, __wbg_Number_04624de7d0e8332d: function(e) {
    return Number(e);
  }, __wbg_String_8f0eb39a4a4c2f66: function(e, n) {
    const t = String(n), _ = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, _, true);
  }, __wbg_Window_cf5b693340a7c469: function(e) {
    return e.Window;
  }, __wbg_WorkerGlobalScope_354364d1b0bd06e5: function(e) {
    return e.WorkerGlobalScope;
  }, __wbg___wbindgen_bigint_get_as_i64_8fcf4ce7f1ca72a2: function(e, n) {
    const t = n, _ = typeof t == "bigint" ? t : void 0;
    D().setBigInt64(e + 8, w(_) ? BigInt(0) : _, true), D().setInt32(e + 0, !w(_), true);
  }, __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: function(e) {
    const n = e, t = typeof n == "boolean" ? n : void 0;
    return w(t) ? 16777215 : t ? 1 : 0;
  }, __wbg___wbindgen_debug_string_0bc8482c6e3508ae: function(e, n) {
    const t = de(n), _ = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, _, true);
  }, __wbg___wbindgen_in_47fa6863be6f2f25: function(e, n) {
    return e in n;
  }, __wbg___wbindgen_is_bigint_31b12575b56f32fc: function(e) {
    return typeof e == "bigint";
  }, __wbg___wbindgen_is_function_0095a73b8b156f76: function(e) {
    return typeof e == "function";
  }, __wbg___wbindgen_is_null_ac34f5003991759a: function(e) {
    return e === null;
  }, __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: function(e) {
    const n = e;
    return typeof n == "object" && n !== null;
  }, __wbg___wbindgen_is_string_cd444516edc5b180: function(e) {
    return typeof e == "string";
  }, __wbg___wbindgen_is_undefined_9e4d92534c42d778: function(e) {
    return e === void 0;
  }, __wbg___wbindgen_jsval_eq_11888390b0186270: function(e, n) {
    return e === n;
  }, __wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811: function(e, n) {
    return e == n;
  }, __wbg___wbindgen_module_f6b8052d79c1cc16: function() {
    return ue;
  }, __wbg___wbindgen_number_get_8ff4255516ccad3e: function(e, n) {
    const t = n, _ = typeof t == "number" ? t : void 0;
    D().setFloat64(e + 8, w(_) ? 0 : _, true), D().setInt32(e + 0, !w(_), true);
  }, __wbg___wbindgen_string_get_72fb696202c56729: function(e, n) {
    const t = n, _ = typeof t == "string" ? t : void 0;
    var o = w(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    D().setInt32(e + 4, i, true), D().setInt32(e + 0, o, true);
  }, __wbg___wbindgen_throw_be289d5034ed271b: function(e, n) {
    throw new Error(m(e, n));
  }, __wbg__wbg_cb_unref_d9b87ff7982e3b21: function(e) {
    e._wbg_cb_unref();
  }, __wbg_activeTexture_6f9a710514686c24: function(e, n) {
    e.activeTexture(n >>> 0);
  }, __wbg_activeTexture_7e39cb8fdf4b6d5a: function(e, n) {
    e.activeTexture(n >>> 0);
  }, __wbg_attachShader_32114efcf2744eb6: function(e, n, t) {
    e.attachShader(n, t);
  }, __wbg_attachShader_b36058e5c9eeaf54: function(e, n, t) {
    e.attachShader(n, t);
  }, __wbg_beginComputePass_90d5303e604970cb: function(e, n) {
    return e.beginComputePass(n);
  }, __wbg_beginQuery_0fdf154e1da0e73d: function(e, n, t) {
    e.beginQuery(n >>> 0, t);
  }, __wbg_beginRenderPass_9739520c601001c3: function(e, n) {
    return e.beginRenderPass(n);
  }, __wbg_bindAttribLocation_5cfc7fa688df5051: function(e, n, t, _, o) {
    e.bindAttribLocation(n, t >>> 0, m(_, o));
  }, __wbg_bindAttribLocation_ce78bfb13019dbe6: function(e, n, t, _, o) {
    e.bindAttribLocation(n, t >>> 0, m(_, o));
  }, __wbg_bindBufferRange_009d206fe9e4151e: function(e, n, t, _, o, i) {
    e.bindBufferRange(n >>> 0, t >>> 0, _, o, i);
  }, __wbg_bindBuffer_69a7a0b8f3f9b9cf: function(e, n, t) {
    e.bindBuffer(n >>> 0, t);
  }, __wbg_bindBuffer_c9068e8712a034f5: function(e, n, t) {
    e.bindBuffer(n >>> 0, t);
  }, __wbg_bindFramebuffer_031c73ba501cb8f6: function(e, n, t) {
    e.bindFramebuffer(n >>> 0, t);
  }, __wbg_bindFramebuffer_7815ca611abb057f: function(e, n, t) {
    e.bindFramebuffer(n >>> 0, t);
  }, __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: function(e, n, t) {
    e.bindRenderbuffer(n >>> 0, t);
  }, __wbg_bindRenderbuffer_db37c1bac9ed4da0: function(e, n, t) {
    e.bindRenderbuffer(n >>> 0, t);
  }, __wbg_bindSampler_96f0e90e7bc31da9: function(e, n, t) {
    e.bindSampler(n >>> 0, t);
  }, __wbg_bindTexture_b2b7b1726a83f93e: function(e, n, t) {
    e.bindTexture(n >>> 0, t);
  }, __wbg_bindTexture_ec13ddcb9dc8e032: function(e, n, t) {
    e.bindTexture(n >>> 0, t);
  }, __wbg_bindVertexArrayOES_c2610602f7485b3f: function(e, n) {
    e.bindVertexArrayOES(n);
  }, __wbg_bindVertexArray_78220d1edb1d2382: function(e, n) {
    e.bindVertexArray(n);
  }, __wbg_blendColor_1d50ac87d9a2794b: function(e, n, t, _, o) {
    e.blendColor(n, t, _, o);
  }, __wbg_blendColor_e799d452ab2a5788: function(e, n, t, _, o) {
    e.blendColor(n, t, _, o);
  }, __wbg_blendEquationSeparate_1b12c43928cc7bc1: function(e, n, t) {
    e.blendEquationSeparate(n >>> 0, t >>> 0);
  }, __wbg_blendEquationSeparate_a8094fbec94cf80e: function(e, n, t) {
    e.blendEquationSeparate(n >>> 0, t >>> 0);
  }, __wbg_blendEquation_82202f34c4c00e50: function(e, n) {
    e.blendEquation(n >>> 0);
  }, __wbg_blendEquation_e9b99928ed1494ad: function(e, n) {
    e.blendEquation(n >>> 0);
  }, __wbg_blendFuncSeparate_95465944f788a092: function(e, n, t, _, o) {
    e.blendFuncSeparate(n >>> 0, t >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_blendFuncSeparate_f366c170c5097fbe: function(e, n, t, _, o) {
    e.blendFuncSeparate(n >>> 0, t >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_blendFunc_2ef59299d10c662d: function(e, n, t) {
    e.blendFunc(n >>> 0, t >>> 0);
  }, __wbg_blendFunc_446658e7231ab9c8: function(e, n, t) {
    e.blendFunc(n >>> 0, t >>> 0);
  }, __wbg_blitFramebuffer_d730a23ab4db248e: function(e, n, t, _, o, i, a, f, d, u, g) {
    e.blitFramebuffer(n, t, _, o, i, a, f, d, u >>> 0, g >>> 0);
  }, __wbg_bufferData_1be8450fab534758: function(e, n, t, _) {
    e.bufferData(n >>> 0, t, _ >>> 0);
  }, __wbg_bufferData_32d26eba0c74a53c: function(e, n, t, _) {
    e.bufferData(n >>> 0, t, _ >>> 0);
  }, __wbg_bufferData_52235e85894af988: function(e, n, t, _) {
    e.bufferData(n >>> 0, t, _ >>> 0);
  }, __wbg_bufferData_98f6c413a8f0f139: function(e, n, t, _) {
    e.bufferData(n >>> 0, t, _ >>> 0);
  }, __wbg_bufferSubData_33eebcc173094f6a: function(e, n, t, _) {
    e.bufferSubData(n >>> 0, t, _);
  }, __wbg_bufferSubData_3e902f031adf13fd: function(e, n, t, _) {
    e.bufferSubData(n >>> 0, t, _);
  }, __wbg_buffer_26d0910f3a5bc899: function(e) {
    return e.buffer;
  }, __wbg_call_389efe28435a9388: function() {
    return x(function(e, n) {
      return e.call(n);
    }, arguments);
  }, __wbg_call_4708e0c13bdc8e95: function() {
    return x(function(e, n, t) {
      return e.call(n, t);
    }, arguments);
  }, __wbg_call_e8c868596c950cf6: function() {
    return x(function(e, n, t, _, o) {
      return e.call(n, t, _, o);
    }, arguments);
  }, __wbg_clearBuffer_6164fc25d22b25cc: function(e, n, t, _) {
    e.clearBuffer(n, t, _);
  }, __wbg_clearBuffer_cfcaaf1fb2baa885: function(e, n, t) {
    e.clearBuffer(n, t);
  }, __wbg_clearBufferfv_ac87d92e2f45d80c: function(e, n, t, _, o) {
    e.clearBufferfv(n >>> 0, t, M(_, o));
  }, __wbg_clearBufferiv_69ff24bb52ec4c88: function(e, n, t, _, o) {
    e.clearBufferiv(n >>> 0, t, V(_, o));
  }, __wbg_clearBufferuiv_8ad59a8219aafaca: function(e, n, t, _, o) {
    e.clearBufferuiv(n >>> 0, t, G(_, o));
  }, __wbg_clearDepth_2b109f644a783a53: function(e, n) {
    e.clearDepth(n);
  }, __wbg_clearDepth_670099db422a4f91: function(e, n) {
    e.clearDepth(n);
  }, __wbg_clearStencil_5d243d0dff03c315: function(e, n) {
    e.clearStencil(n);
  }, __wbg_clearStencil_aa65955bb39d8c18: function(e, n) {
    e.clearStencil(n);
  }, __wbg_clear_4d801d0d054c3579: function(e, n) {
    e.clear(n >>> 0);
  }, __wbg_clear_7187030f892c5ca0: function(e, n) {
    e.clear(n >>> 0);
  }, __wbg_clientWaitSync_21865feaeb76a9a5: function(e, n, t, _) {
    return e.clientWaitSync(n, t >>> 0, _ >>> 0);
  }, __wbg_colorMask_177d9762658e5e28: function(e, n, t, _, o) {
    e.colorMask(n !== 0, t !== 0, _ !== 0, o !== 0);
  }, __wbg_colorMask_7a8dbc86e7376a9b: function(e, n, t, _, o) {
    e.colorMask(n !== 0, t !== 0, _ !== 0, o !== 0);
  }, __wbg_compileShader_63b824e86bb00b8f: function(e, n) {
    e.compileShader(n);
  }, __wbg_compileShader_94718a93495d565d: function(e, n) {
    e.compileShader(n);
  }, __wbg_compressedTexSubImage2D_215bb115facd5e48: function(e, n, t, _, o, i, a, f, d) {
    e.compressedTexSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d);
  }, __wbg_compressedTexSubImage2D_684350eb62830032: function(e, n, t, _, o, i, a, f, d) {
    e.compressedTexSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d);
  }, __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: function(e, n, t, _, o, i, a, f, d, u) {
    e.compressedTexSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d, u);
  }, __wbg_compressedTexSubImage3D_16afa3a47bf1d979: function(e, n, t, _, o, i, a, f, d, u, g) {
    e.compressedTexSubImage3D(n >>> 0, t, _, o, i, a, f, d, u >>> 0, g);
  }, __wbg_compressedTexSubImage3D_778008a6293f15ab: function(e, n, t, _, o, i, a, f, d, u, g, p) {
    e.compressedTexSubImage3D(n >>> 0, t, _, o, i, a, f, d, u >>> 0, g, p);
  }, __wbg_configure_2414aed971d368cd: function(e, n) {
    e.configure(n);
  }, __wbg_copyBufferSubData_a4f9815861ff0ae9: function(e, n, t, _, o, i) {
    e.copyBufferSubData(n >>> 0, t >>> 0, _, o, i);
  }, __wbg_copyBufferToBuffer_1ba67191114656a1: function(e, n, t, _, o, i) {
    e.copyBufferToBuffer(n, t, _, o, i);
  }, __wbg_copyBufferToTexture_878d31d479e48f28: function(e, n, t, _) {
    e.copyBufferToTexture(n, t, _);
  }, __wbg_copyExternalImageToTexture_7878d196c0b60d39: function(e, n, t, _) {
    e.copyExternalImageToTexture(n, t, _);
  }, __wbg_copyTexSubImage2D_417a65926e3d2490: function(e, n, t, _, o, i, a, f, d) {
    e.copyTexSubImage2D(n >>> 0, t, _, o, i, a, f, d);
  }, __wbg_copyTexSubImage2D_91ebcd9cd1908265: function(e, n, t, _, o, i, a, f, d) {
    e.copyTexSubImage2D(n >>> 0, t, _, o, i, a, f, d);
  }, __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: function(e, n, t, _, o, i, a, f, d, u) {
    e.copyTexSubImage3D(n >>> 0, t, _, o, i, a, f, d, u);
  }, __wbg_copyTextureToBuffer_6a8fe0e90f0a663d: function(e, n, t, _) {
    e.copyTextureToBuffer(n, t, _);
  }, __wbg_copyTextureToTexture_0a06a393d6726b4a: function(e, n, t, _) {
    e.copyTextureToTexture(n, t, _);
  }, __wbg_createBindGroupLayout_1d93b6d41c87ba9d: function(e, n) {
    return e.createBindGroupLayout(n);
  }, __wbg_createBindGroup_61cd07ec9d423432: function(e, n) {
    return e.createBindGroup(n);
  }, __wbg_createBuffer_26534c05e01b8559: function(e) {
    const n = e.createBuffer();
    return w(n) ? 0 : S(n);
  }, __wbg_createBuffer_963aa00d5fe859e4: function(e, n) {
    return e.createBuffer(n);
  }, __wbg_createBuffer_c4ec897aacc1b91c: function(e) {
    const n = e.createBuffer();
    return w(n) ? 0 : S(n);
  }, __wbg_createCommandEncoder_f0e1613e9a2dc1eb: function(e, n) {
    return e.createCommandEncoder(n);
  }, __wbg_createComputePipeline_b9616b9fe2f4eb2f: function(e, n) {
    return e.createComputePipeline(n);
  }, __wbg_createFramebuffer_41512c38358a41c4: function(e) {
    const n = e.createFramebuffer();
    return w(n) ? 0 : S(n);
  }, __wbg_createFramebuffer_b88ffa8e0fd262c4: function(e) {
    const n = e.createFramebuffer();
    return w(n) ? 0 : S(n);
  }, __wbg_createPipelineLayout_56c6cf983f892d2b: function(e, n) {
    return e.createPipelineLayout(n);
  }, __wbg_createProgram_98aaa91f7c81c5e2: function(e) {
    const n = e.createProgram();
    return w(n) ? 0 : S(n);
  }, __wbg_createProgram_9b7710a1f2701c2c: function(e) {
    const n = e.createProgram();
    return w(n) ? 0 : S(n);
  }, __wbg_createQuerySet_c14be802adf7c207: function(e, n) {
    return e.createQuerySet(n);
  }, __wbg_createQuery_7988050efd7e4c48: function(e) {
    const n = e.createQuery();
    return w(n) ? 0 : S(n);
  }, __wbg_createRenderBundleEncoder_8e4bdffea72f8c1f: function(e, n) {
    return e.createRenderBundleEncoder(n);
  }, __wbg_createRenderPipeline_079a88a0601fcce1: function(e, n) {
    return e.createRenderPipeline(n);
  }, __wbg_createRenderbuffer_1e567f2f4d461710: function(e) {
    const n = e.createRenderbuffer();
    return w(n) ? 0 : S(n);
  }, __wbg_createRenderbuffer_a601226a6a680dbe: function(e) {
    const n = e.createRenderbuffer();
    return w(n) ? 0 : S(n);
  }, __wbg_createSampler_da6bb96c9ffaaa27: function(e) {
    const n = e.createSampler();
    return w(n) ? 0 : S(n);
  }, __wbg_createSampler_ef5578990df3baf7: function(e, n) {
    return e.createSampler(n);
  }, __wbg_createShaderModule_17f451ea25cae47c: function(e, n) {
    return e.createShaderModule(n);
  }, __wbg_createShader_e3ac08ed8c5b14b2: function(e, n) {
    const t = e.createShader(n >>> 0);
    return w(t) ? 0 : S(t);
  }, __wbg_createShader_f2b928ca9a426b14: function(e, n) {
    const t = e.createShader(n >>> 0);
    return w(t) ? 0 : S(t);
  }, __wbg_createTexture_01cc1cd2fea732d9: function(e, n) {
    return e.createTexture(n);
  }, __wbg_createTexture_16d2c8a3d7d4a75a: function(e) {
    const n = e.createTexture();
    return w(n) ? 0 : S(n);
  }, __wbg_createTexture_f9451a82c7527ce2: function(e) {
    const n = e.createTexture();
    return w(n) ? 0 : S(n);
  }, __wbg_createVertexArrayOES_bd76ceee6ab9b95e: function(e) {
    const n = e.createVertexArrayOES();
    return w(n) ? 0 : S(n);
  }, __wbg_createVertexArray_ad5294951ae57497: function(e) {
    const n = e.createVertexArray();
    return w(n) ? 0 : S(n);
  }, __wbg_createView_04701884291e1ccc: function(e, n) {
    return e.createView(n);
  }, __wbg_cullFace_39500f654c67a205: function(e, n) {
    e.cullFace(n >>> 0);
  }, __wbg_cullFace_e7e711a14d2c3f48: function(e, n) {
    e.cullFace(n >>> 0);
  }, __wbg_deleteBuffer_22fcc93912cbf659: function(e, n) {
    e.deleteBuffer(n);
  }, __wbg_deleteBuffer_ab099883c168644d: function(e, n) {
    e.deleteBuffer(n);
  }, __wbg_deleteFramebuffer_8de1ca41ac87cfd9: function(e, n) {
    e.deleteFramebuffer(n);
  }, __wbg_deleteFramebuffer_9738f3bb85c1ab35: function(e, n) {
    e.deleteFramebuffer(n);
  }, __wbg_deleteProgram_9298fb3e3c1d3a78: function(e, n) {
    e.deleteProgram(n);
  }, __wbg_deleteProgram_f354e79b8cae8076: function(e, n) {
    e.deleteProgram(n);
  }, __wbg_deleteQuery_ea8bf1954febd774: function(e, n) {
    e.deleteQuery(n);
  }, __wbg_deleteRenderbuffer_096edada57729468: function(e, n) {
    e.deleteRenderbuffer(n);
  }, __wbg_deleteRenderbuffer_0f565f0727b341fc: function(e, n) {
    e.deleteRenderbuffer(n);
  }, __wbg_deleteSampler_c6b68c4071841afa: function(e, n) {
    e.deleteSampler(n);
  }, __wbg_deleteShader_aaf3b520a64d5d9d: function(e, n) {
    e.deleteShader(n);
  }, __wbg_deleteShader_ff70ca962883e241: function(e, n) {
    e.deleteShader(n);
  }, __wbg_deleteSync_c8e4a9c735f71d18: function(e, n) {
    e.deleteSync(n);
  }, __wbg_deleteTexture_2be78224e5584a8b: function(e, n) {
    e.deleteTexture(n);
  }, __wbg_deleteTexture_9d411c0e60ffa324: function(e, n) {
    e.deleteTexture(n);
  }, __wbg_deleteVertexArrayOES_197df47ef9684195: function(e, n) {
    e.deleteVertexArrayOES(n);
  }, __wbg_deleteVertexArray_7bc7f92769862f93: function(e, n) {
    e.deleteVertexArray(n);
  }, __wbg_depthFunc_eb3aa05361dd2eaa: function(e, n) {
    e.depthFunc(n >>> 0);
  }, __wbg_depthFunc_f670d4cbb9cd0913: function(e, n) {
    e.depthFunc(n >>> 0);
  }, __wbg_depthMask_103091329ca1a750: function(e, n) {
    e.depthMask(n !== 0);
  }, __wbg_depthMask_75a36d0065471a4b: function(e, n) {
    e.depthMask(n !== 0);
  }, __wbg_depthRange_337bf254e67639bb: function(e, n, t) {
    e.depthRange(n, t);
  }, __wbg_depthRange_5579d448b9d7de57: function(e, n, t) {
    e.depthRange(n, t);
  }, __wbg_destroy_35f94012e5bb9c17: function(e) {
    e.destroy();
  }, __wbg_destroy_767d9dde1008e293: function(e) {
    e.destroy();
  }, __wbg_destroy_c6af4226dda95dbd: function(e) {
    e.destroy();
  }, __wbg_disableVertexAttribArray_24a020060006b10f: function(e, n) {
    e.disableVertexAttribArray(n >>> 0);
  }, __wbg_disableVertexAttribArray_4bac633c27bae599: function(e, n) {
    e.disableVertexAttribArray(n >>> 0);
  }, __wbg_disable_7fe6fb3e97717f88: function(e, n) {
    e.disable(n >>> 0);
  }, __wbg_disable_bd37bdcca1764aea: function(e, n) {
    e.disable(n >>> 0);
  }, __wbg_dispatchWorkgroupsIndirect_8b25efab93a7a433: function(e, n, t) {
    e.dispatchWorkgroupsIndirect(n, t);
  }, __wbg_dispatchWorkgroups_c102fa81b955935d: function(e, n, t, _) {
    e.dispatchWorkgroups(n >>> 0, t >>> 0, _ >>> 0);
  }, __wbg_document_ee35a3d3ae34ef6c: function(e) {
    const n = e.document;
    return w(n) ? 0 : S(n);
  }, __wbg_done_57b39ecd9addfe81: function(e) {
    return e.done;
  }, __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: function(e, n, t, _, o) {
    e.drawArraysInstancedANGLE(n >>> 0, t, _, o);
  }, __wbg_drawArraysInstanced_ec30adc616ec58d5: function(e, n, t, _, o) {
    e.drawArraysInstanced(n >>> 0, t, _, o);
  }, __wbg_drawArrays_075228181299b824: function(e, n, t, _) {
    e.drawArrays(n >>> 0, t, _);
  }, __wbg_drawArrays_2be89c369a29f30b: function(e, n, t, _) {
    e.drawArrays(n >>> 0, t, _);
  }, __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: function(e, n) {
    e.drawBuffersWEBGL(n);
  }, __wbg_drawBuffers_5eccfaacc6560299: function(e, n) {
    e.drawBuffers(n);
  }, __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: function(e, n, t, _, o, i) {
    e.drawElementsInstancedANGLE(n >>> 0, t, _ >>> 0, o, i);
  }, __wbg_drawElementsInstanced_d41fc920ae24717c: function(e, n, t, _, o, i) {
    e.drawElementsInstanced(n >>> 0, t, _ >>> 0, o, i);
  }, __wbg_drawIndexedIndirect_34484fc6227c7bc8: function(e, n, t) {
    e.drawIndexedIndirect(n, t);
  }, __wbg_drawIndexedIndirect_5a7c30bb5f1d5b67: function(e, n, t) {
    e.drawIndexedIndirect(n, t);
  }, __wbg_drawIndexed_115af1449b52a948: function(e, n, t, _, o, i) {
    e.drawIndexed(n >>> 0, t >>> 0, _ >>> 0, o, i >>> 0);
  }, __wbg_drawIndexed_a587cce4c317791f: function(e, n, t, _, o, i) {
    e.drawIndexed(n >>> 0, t >>> 0, _ >>> 0, o, i >>> 0);
  }, __wbg_drawIndirect_036d71498a21f1a3: function(e, n, t) {
    e.drawIndirect(n, t);
  }, __wbg_drawIndirect_a1d7c5e893aa5756: function(e, n, t) {
    e.drawIndirect(n, t);
  }, __wbg_draw_5351b12033166aca: function(e, n, t, _, o) {
    e.draw(n >>> 0, t >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_draw_e2a7c5d66fb2d244: function(e, n, t, _, o) {
    e.draw(n >>> 0, t >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_enableVertexAttribArray_475e06c31777296d: function(e, n) {
    e.enableVertexAttribArray(n >>> 0);
  }, __wbg_enableVertexAttribArray_aa6e40408261eeb9: function(e, n) {
    e.enableVertexAttribArray(n >>> 0);
  }, __wbg_enable_d1ac04dfdd2fb3ae: function(e, n) {
    e.enable(n >>> 0);
  }, __wbg_enable_fee40f19b7053ea3: function(e, n) {
    e.enable(n >>> 0);
  }, __wbg_endQuery_54f0627d4c931318: function(e, n) {
    e.endQuery(n >>> 0);
  }, __wbg_end_0ac71677a5c1717a: function(e) {
    e.end();
  }, __wbg_end_6f776519f1faa582: function(e) {
    e.end();
  }, __wbg_entries_58c7934c745daac7: function(e) {
    return Object.entries(e);
  }, __wbg_error_7534b8e9a36f1ab4: function(e, n) {
    let t, _;
    try {
      t = e, _ = n, console.error(m(e, n));
    } finally {
      r.__wbindgen_free(t, _, 1);
    }
  }, __wbg_error_9a7fe3f932034cde: function(e) {
    console.error(e);
  }, __wbg_error_e98e6aadd08e0b94: function(e) {
    return e.error;
  }, __wbg_executeBundles_8e6c0614da2805d4: function(e, n) {
    e.executeBundles(n);
  }, __wbg_features_1b464383ea8a7691: function(e) {
    return e.features;
  }, __wbg_features_e5fbbc2760867852: function(e) {
    return e.features;
  }, __wbg_fenceSync_c52a4e24eabfa0d3: function(e, n, t) {
    const _ = e.fenceSync(n >>> 0, t >>> 0);
    return w(_) ? 0 : S(_);
  }, __wbg_finish_20711371c58df61c: function(e) {
    return e.finish();
  }, __wbg_finish_34b2c54329c8719f: function(e, n) {
    return e.finish(n);
  }, __wbg_finish_a9ab917e756ea00c: function(e, n) {
    return e.finish(n);
  }, __wbg_finish_e0a6c97c0622f843: function(e) {
    return e.finish();
  }, __wbg_framebufferRenderbuffer_850811ed6e26475e: function(e, n, t, _, o) {
    e.framebufferRenderbuffer(n >>> 0, t >>> 0, _ >>> 0, o);
  }, __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: function(e, n, t, _, o) {
    e.framebufferRenderbuffer(n >>> 0, t >>> 0, _ >>> 0, o);
  }, __wbg_framebufferTexture2D_8adf6bdfc3c56dee: function(e, n, t, _, o, i) {
    e.framebufferTexture2D(n >>> 0, t >>> 0, _ >>> 0, o, i);
  }, __wbg_framebufferTexture2D_c283e928186aa542: function(e, n, t, _, o, i) {
    e.framebufferTexture2D(n >>> 0, t >>> 0, _ >>> 0, o, i);
  }, __wbg_framebufferTextureLayer_c8328828c8d5eb60: function(e, n, t, _, o, i) {
    e.framebufferTextureLayer(n >>> 0, t >>> 0, _, o, i);
  }, __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: function(e, n, t, _, o, i, a) {
    e.framebufferTextureMultiviewOVR(n >>> 0, t >>> 0, _, o, i, a);
  }, __wbg_frontFace_027e2ec7a7bc347c: function(e, n) {
    e.frontFace(n >>> 0);
  }, __wbg_frontFace_d4a6507ad2939b5c: function(e, n) {
    e.frontFace(n >>> 0);
  }, __wbg_getBindGroupLayout_4a94df6108ac6667: function(e, n) {
    return e.getBindGroupLayout(n >>> 0);
  }, __wbg_getBindGroupLayout_80e803d942962f6a: function(e, n) {
    return e.getBindGroupLayout(n >>> 0);
  }, __wbg_getBufferSubData_4fc54b4fbb1462d7: function(e, n, t, _) {
    e.getBufferSubData(n >>> 0, t, _);
  }, __wbg_getCompilationInfo_2af3ecdfeda551a3: function(e) {
    return e.getCompilationInfo();
  }, __wbg_getContext_2966500392030d63: function() {
    return x(function(e, n, t) {
      const _ = e.getContext(m(n, t));
      return w(_) ? 0 : S(_);
    }, arguments);
  }, __wbg_getContext_2a5764d48600bc43: function() {
    return x(function(e, n, t) {
      const _ = e.getContext(m(n, t));
      return w(_) ? 0 : S(_);
    }, arguments);
  }, __wbg_getContext_b28d2db7bd648242: function() {
    return x(function(e, n, t, _) {
      const o = e.getContext(m(n, t), _);
      return w(o) ? 0 : S(o);
    }, arguments);
  }, __wbg_getContext_de810d9f187f29ca: function() {
    return x(function(e, n, t, _) {
      const o = e.getContext(m(n, t), _);
      return w(o) ? 0 : S(o);
    }, arguments);
  }, __wbg_getCurrentTexture_5a79cda2ff36e1ee: function(e) {
    return e.getCurrentTexture();
  }, __wbg_getExtension_3c0cb5ae01bb4b17: function() {
    return x(function(e, n, t) {
      const _ = e.getExtension(m(n, t));
      return w(_) ? 0 : S(_);
    }, arguments);
  }, __wbg_getIndexedParameter_ca1693c768bc4934: function() {
    return x(function(e, n, t) {
      return e.getIndexedParameter(n >>> 0, t >>> 0);
    }, arguments);
  }, __wbg_getMappedRange_932dd043ae22ee0a: function(e, n, t) {
    return e.getMappedRange(n, t);
  }, __wbg_getParameter_1ecb910cfdd21f88: function() {
    return x(function(e, n) {
      return e.getParameter(n >>> 0);
    }, arguments);
  }, __wbg_getParameter_2e1f97ecaab76274: function() {
    return x(function(e, n) {
      return e.getParameter(n >>> 0);
    }, arguments);
  }, __wbg_getPreferredCanvasFormat_de73c02773a5209e: function(e) {
    const n = e.getPreferredCanvasFormat();
    return (Je.indexOf(n) + 1 || 96) - 1;
  }, __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: function(e, n, t) {
    const _ = n.getProgramInfoLog(t);
    var o = w(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    D().setInt32(e + 4, i, true), D().setInt32(e + 0, o, true);
  }, __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: function(e, n, t) {
    const _ = n.getProgramInfoLog(t);
    var o = w(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    D().setInt32(e + 4, i, true), D().setInt32(e + 0, o, true);
  }, __wbg_getProgramParameter_43fbc6d2613c08b3: function(e, n, t) {
    return e.getProgramParameter(n, t >>> 0);
  }, __wbg_getProgramParameter_92e4540ca9da06b2: function(e, n, t) {
    return e.getProgramParameter(n, t >>> 0);
  }, __wbg_getQueryParameter_5d6af051438ae479: function(e, n, t) {
    return e.getQueryParameter(n, t >>> 0);
  }, __wbg_getRandomValues_9c5c1b115e142bb8: function() {
    return x(function(e, n) {
      globalThis.crypto.getRandomValues(T(e, n));
    }, arguments);
  }, __wbg_getShaderInfoLog_9991e9e77b0c6805: function(e, n, t) {
    const _ = n.getShaderInfoLog(t);
    var o = w(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    D().setInt32(e + 4, i, true), D().setInt32(e + 0, o, true);
  }, __wbg_getShaderInfoLog_9e0b96da4b13ae49: function(e, n, t) {
    const _ = n.getShaderInfoLog(t);
    var o = w(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    D().setInt32(e + 4, i, true), D().setInt32(e + 0, o, true);
  }, __wbg_getShaderParameter_786fd84f85720ca8: function(e, n, t) {
    return e.getShaderParameter(n, t >>> 0);
  }, __wbg_getShaderParameter_afa4a3dd9dd397c1: function(e, n, t) {
    return e.getShaderParameter(n, t >>> 0);
  }, __wbg_getSupportedExtensions_57142a6b598d7787: function(e) {
    const n = e.getSupportedExtensions();
    return w(n) ? 0 : S(n);
  }, __wbg_getSupportedProfiles_1f728bc32003c4d0: function(e) {
    const n = e.getSupportedProfiles();
    return w(n) ? 0 : S(n);
  }, __wbg_getSyncParameter_7d11ab875b41617e: function(e, n, t) {
    return e.getSyncParameter(n, t >>> 0);
  }, __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: function(e, n, t, _) {
    return e.getUniformBlockIndex(n, m(t, _));
  }, __wbg_getUniformLocation_71c070e6644669ad: function(e, n, t, _) {
    const o = e.getUniformLocation(n, m(t, _));
    return w(o) ? 0 : S(o);
  }, __wbg_getUniformLocation_d06b3a5b3c60e95c: function(e, n, t, _) {
    const o = e.getUniformLocation(n, m(t, _));
    return w(o) ? 0 : S(o);
  }, __wbg_get_9b94d73e6221f75c: function(e, n) {
    return e[n >>> 0];
  }, __wbg_get_b3ed3ad4be2bc8ac: function() {
    return x(function(e, n) {
      return Reflect.get(e, n);
    }, arguments);
  }, __wbg_get_d8db2ad31d529ff8: function(e, n) {
    const t = e[n >>> 0];
    return w(t) ? 0 : S(t);
  }, __wbg_get_with_ref_key_1dc361bd10053bfe: function(e, n) {
    return e[n];
  }, __wbg_gpu_87871e8f7ace8fee: function(e) {
    return e.gpu;
  }, __wbg_has_624cbf0451d880e8: function(e, n, t) {
    return e.has(m(n, t));
  }, __wbg_height_38750dc6de41ee75: function(e) {
    return e.height;
  }, __wbg_height_408f385de046f7e5: function(e) {
    return e.height;
  }, __wbg_height_87250db2be5164b9: function(e) {
    return e.height;
  }, __wbg_height_9a49d61734f6cf36: function(e) {
    return e.height;
  }, __wbg_height_aceb0c14551ea27d: function(e) {
    return e.height;
  }, __wbg_includes_32215c836f1cd3fb: function(e, n, t) {
    return e.includes(n, t);
  }, __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: function(e) {
    let n;
    try {
      n = e instanceof ArrayBuffer;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_GpuAdapter_0731153d2b08720b: function(e) {
    let n;
    try {
      n = e instanceof GPUAdapter;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_GpuCanvasContext_d14121c7bd72fcef: function(e) {
    let n;
    try {
      n = e instanceof GPUCanvasContext;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_GpuDeviceLostInfo_a3677ebb8241d800: function(e) {
    let n;
    try {
      n = e instanceof GPUDeviceLostInfo;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_GpuOutOfMemoryError_391d9a08edbfa04b: function(e) {
    let n;
    try {
      n = e instanceof GPUOutOfMemoryError;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_GpuValidationError_f4d803c383da3c92: function(e) {
    let n;
    try {
      n = e instanceof GPUValidationError;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: function(e) {
    let n;
    try {
      n = e instanceof HTMLCanvasElement;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_Map_53af74335dec57f4: function(e) {
    let n;
    try {
      n = e instanceof Map;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_Object_1c6af87502b733ed: function(e) {
    let n;
    try {
      n = e instanceof Object;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_Uint8Array_9b9075935c74707c: function(e) {
    let n;
    try {
      n = e instanceof Uint8Array;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: function(e) {
    let n;
    try {
      n = e instanceof WebGL2RenderingContext;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_Window_ed49b2db8df90359: function(e) {
    let n;
    try {
      n = e instanceof Window;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_invalidateFramebuffer_b17b7e1da3051745: function() {
    return x(function(e, n, t) {
      e.invalidateFramebuffer(n >>> 0, t);
    }, arguments);
  }, __wbg_isArray_d314bb98fcf08331: function(e) {
    return Array.isArray(e);
  }, __wbg_isSafeInteger_bfbc7332a9768d2a: function(e) {
    return Number.isSafeInteger(e);
  }, __wbg_is_f29129f676e5410c: function(e, n) {
    return Object.is(e, n);
  }, __wbg_iterator_6ff6560ca1568e55: function() {
    return Symbol.iterator;
  }, __wbg_label_2082ab37d2ad170d: function(e, n) {
    const t = n.label, _ = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, _, true);
  }, __wbg_length_32ed9a279acd054c: function(e) {
    return e.length;
  }, __wbg_length_35a7bace40f36eac: function(e) {
    return e.length;
  }, __wbg_length_9df32f7add647235: function(e) {
    return e.length;
  }, __wbg_limits_2dd632c891786ddf: function(e) {
    return e.limits;
  }, __wbg_limits_f6411f884b0b2d62: function(e) {
    return e.limits;
  }, __wbg_lineNum_0246de1e072ffe19: function(e) {
    return e.lineNum;
  }, __wbg_linkProgram_6600dd2c0863bbfd: function(e, n) {
    e.linkProgram(n);
  }, __wbg_linkProgram_be6b825cf66d177b: function(e, n) {
    e.linkProgram(n);
  }, __wbg_log_6b5ca2e6124b2808: function(e) {
    console.log(e);
  }, __wbg_lost_6e4d29847ce2a34a: function(e) {
    return e.lost;
  }, __wbg_mapAsync_37f5e03edf2e1352: function(e, n, t, _) {
    return e.mapAsync(n >>> 0, t, _);
  }, __wbg_maxBindGroups_768ca5e8623bf450: function(e) {
    return e.maxBindGroups;
  }, __wbg_maxBindingsPerBindGroup_057972d600d69719: function(e) {
    return e.maxBindingsPerBindGroup;
  }, __wbg_maxBufferSize_e237b44f19a5a62b: function(e) {
    return e.maxBufferSize;
  }, __wbg_maxColorAttachmentBytesPerSample_d6c7b4051d22c6d6: function(e) {
    return e.maxColorAttachmentBytesPerSample;
  }, __wbg_maxColorAttachments_7a18ba24c05edcfd: function(e) {
    return e.maxColorAttachments;
  }, __wbg_maxComputeInvocationsPerWorkgroup_b99c2f3611633992: function(e) {
    return e.maxComputeInvocationsPerWorkgroup;
  }, __wbg_maxComputeWorkgroupSizeX_adb26da9ed7f77f7: function(e) {
    return e.maxComputeWorkgroupSizeX;
  }, __wbg_maxComputeWorkgroupSizeY_cc217559c98be33b: function(e) {
    return e.maxComputeWorkgroupSizeY;
  }, __wbg_maxComputeWorkgroupSizeZ_66606a80e2cf2309: function(e) {
    return e.maxComputeWorkgroupSizeZ;
  }, __wbg_maxComputeWorkgroupStorageSize_cb6235497b8c4997: function(e) {
    return e.maxComputeWorkgroupStorageSize;
  }, __wbg_maxComputeWorkgroupsPerDimension_6bf550b5f21d57cf: function(e) {
    return e.maxComputeWorkgroupsPerDimension;
  }, __wbg_maxDynamicStorageBuffersPerPipelineLayout_c6ac20334e328b47: function(e) {
    return e.maxDynamicStorageBuffersPerPipelineLayout;
  }, __wbg_maxDynamicUniformBuffersPerPipelineLayout_aa8f14a74b440f01: function(e) {
    return e.maxDynamicUniformBuffersPerPipelineLayout;
  }, __wbg_maxSampledTexturesPerShaderStage_db7c4922cc60144a: function(e) {
    return e.maxSampledTexturesPerShaderStage;
  }, __wbg_maxSamplersPerShaderStage_538705fe2263e710: function(e) {
    return e.maxSamplersPerShaderStage;
  }, __wbg_maxStorageBufferBindingSize_32178c0f5f7f85cb: function(e) {
    return e.maxStorageBufferBindingSize;
  }, __wbg_maxStorageBuffersPerShaderStage_9f67e9eae0089f77: function(e) {
    return e.maxStorageBuffersPerShaderStage;
  }, __wbg_maxStorageTexturesPerShaderStage_57239664936031cf: function(e) {
    return e.maxStorageTexturesPerShaderStage;
  }, __wbg_maxTextureArrayLayers_db5d4e486c78ae04: function(e) {
    return e.maxTextureArrayLayers;
  }, __wbg_maxTextureDimension1D_3475085ffacabbdc: function(e) {
    return e.maxTextureDimension1D;
  }, __wbg_maxTextureDimension2D_7c8d5ecf09eb8519: function(e) {
    return e.maxTextureDimension2D;
  }, __wbg_maxTextureDimension3D_8bd976677a0f91d4: function(e) {
    return e.maxTextureDimension3D;
  }, __wbg_maxUniformBufferBindingSize_95b1a54e7e4a0f0f: function(e) {
    return e.maxUniformBufferBindingSize;
  }, __wbg_maxUniformBuffersPerShaderStage_5f475d9a453af14d: function(e) {
    return e.maxUniformBuffersPerShaderStage;
  }, __wbg_maxVertexAttributes_4c48ca2f5d32f860: function(e) {
    return e.maxVertexAttributes;
  }, __wbg_maxVertexBufferArrayStride_2233f6933ecc5a16: function(e) {
    return e.maxVertexBufferArrayStride;
  }, __wbg_maxVertexBuffers_c47e508cd7348554: function(e) {
    return e.maxVertexBuffers;
  }, __wbg_message_0762358e59db7ed6: function(e, n) {
    const t = n.message, _ = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, _, true);
  }, __wbg_message_7957ab09f64c6822: function(e, n) {
    const t = n.message, _ = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, _, true);
  }, __wbg_message_b163994503433c9e: function(e, n) {
    const t = n.message, _ = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, _, true);
  }, __wbg_messages_da071582f72bc978: function(e) {
    return e.messages;
  }, __wbg_minStorageBufferOffsetAlignment_51b4801fac3a58de: function(e) {
    return e.minStorageBufferOffsetAlignment;
  }, __wbg_minUniformBufferOffsetAlignment_5d62a77924b2335f: function(e) {
    return e.minUniformBufferOffsetAlignment;
  }, __wbg_navigator_43be698ba96fc088: function(e) {
    return e.navigator;
  }, __wbg_navigator_4478931f32ebca57: function(e) {
    return e.navigator;
  }, __wbg_new_361308b2356cecd0: function() {
    return new Object();
  }, __wbg_new_3eb36ae241fe6f44: function() {
    return new Array();
  }, __wbg_new_8a6f238a6ece86ea: function() {
    return new Error();
  }, __wbg_new_b5d9e2fb389fef91: function(e, n) {
    try {
      var t = { a: e, b: n }, _ = (i, a) => {
        const f = t.a;
        t.a = 0;
        try {
          return We(f, t.b, i, a);
        } finally {
          t.a = f;
        }
      };
      return new Promise(_);
    } finally {
      t.a = t.b = 0;
    }
  }, __wbg_new_dca287b076112a51: function() {
    return /* @__PURE__ */ new Map();
  }, __wbg_new_dd2b680c8bf6ae29: function(e) {
    return new Uint8Array(e);
  }, __wbg_new_from_slice_132ef6dc5072cf68: function(e, n) {
    return new Float32Array(M(e, n));
  }, __wbg_new_from_slice_19d21922ff3c0ae6: function(e, n) {
    return new Uint32Array(G(e, n));
  }, __wbg_new_from_slice_a3d2629dc1826784: function(e, n) {
    return new Uint8Array(T(e, n));
  }, __wbg_new_no_args_1c7c842f08d00ebb: function(e, n) {
    return new Function(m(e, n));
  }, __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: function(e, n, t) {
    return new Uint8Array(e, n >>> 0, t >>> 0);
  }, __wbg_new_with_length_1763c527b2923202: function(e) {
    return new Array(e >>> 0);
  }, __wbg_next_3482f54c49e8af19: function() {
    return x(function(e) {
      return e.next();
    }, arguments);
  }, __wbg_next_418f80d8f5303233: function(e) {
    return e.next;
  }, __wbg_now_9ff72f82c85bbbb5: function() {
    return performance.now();
  }, __wbg_now_a3af9a2f4bbaa4d1: function() {
    return Date.now();
  }, __wbg_of_f915f7cd925b21a5: function(e) {
    return Array.of(e);
  }, __wbg_offset_336f14c993863b76: function(e) {
    return e.offset;
  }, __wbg_pixelStorei_2a65936c11b710fe: function(e, n, t) {
    e.pixelStorei(n >>> 0, t);
  }, __wbg_pixelStorei_f7cc498f52d523f1: function(e, n, t) {
    e.pixelStorei(n >>> 0, t);
  }, __wbg_polygonOffset_24a8059deb03be92: function(e, n, t) {
    e.polygonOffset(n, t);
  }, __wbg_polygonOffset_4b3158d8ed028862: function(e, n, t) {
    e.polygonOffset(n, t);
  }, __wbg_popErrorScope_af0b22f136a861d6: function(e) {
    return e.popErrorScope();
  }, __wbg_prototypesetcall_bdcdcc5842e4d77d: function(e, n, t) {
    Uint8Array.prototype.set.call(T(e, n), t);
  }, __wbg_pushErrorScope_b52914ff10ba6ce3: function(e, n) {
    e.pushErrorScope(qe[n]);
  }, __wbg_push_8ffdcb2063340ba5: function(e, n) {
    return e.push(n);
  }, __wbg_queryCounterEXT_b578f07c30420446: function(e, n, t) {
    e.queryCounterEXT(n, t >>> 0);
  }, __wbg_querySelectorAll_1283aae52043a951: function() {
    return x(function(e, n, t) {
      return e.querySelectorAll(m(n, t));
    }, arguments);
  }, __wbg_querySelector_c3b0df2d58eec220: function() {
    return x(function(e, n, t) {
      const _ = e.querySelector(m(n, t));
      return w(_) ? 0 : S(_);
    }, arguments);
  }, __wbg_queueMicrotask_0aa0a927f78f5d98: function(e) {
    return e.queueMicrotask;
  }, __wbg_queueMicrotask_5bb536982f78a56f: function(e) {
    queueMicrotask(e);
  }, __wbg_queue_bea4017efaaf9904: function(e) {
    return e.queue;
  }, __wbg_readBuffer_9eb461d6857295f0: function(e, n) {
    e.readBuffer(n >>> 0);
  }, __wbg_readPixels_55b18304384e073d: function() {
    return x(function(e, n, t, _, o, i, a, f) {
      e.readPixels(n, t, _, o, i >>> 0, a >>> 0, f);
    }, arguments);
  }, __wbg_readPixels_6ea8e288a8673282: function() {
    return x(function(e, n, t, _, o, i, a, f) {
      e.readPixels(n, t, _, o, i >>> 0, a >>> 0, f);
    }, arguments);
  }, __wbg_readPixels_95b2464a7bb863a2: function() {
    return x(function(e, n, t, _, o, i, a, f) {
      e.readPixels(n, t, _, o, i >>> 0, a >>> 0, f);
    }, arguments);
  }, __wbg_reason_43acd39cce242b50: function(e) {
    const n = e.reason;
    return (je.indexOf(n) + 1 || 3) - 1;
  }, __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: function(e, n, t, _, o, i) {
    e.renderbufferStorageMultisample(n >>> 0, t, _ >>> 0, o, i);
  }, __wbg_renderbufferStorage_1bc02383614b76b2: function(e, n, t, _, o) {
    e.renderbufferStorage(n >>> 0, t >>> 0, _, o);
  }, __wbg_renderbufferStorage_6348154d30979c44: function(e, n, t, _, o) {
    e.renderbufferStorage(n >>> 0, t >>> 0, _, o);
  }, __wbg_requestAdapter_e6dcfac497cafa7a: function(e, n) {
    return e.requestAdapter(n);
  }, __wbg_requestDevice_03b802707d5a382c: function(e, n) {
    return e.requestDevice(n);
  }, __wbg_resolveQuerySet_811661fb23f3b699: function(e, n, t, _, o, i) {
    e.resolveQuerySet(n, t >>> 0, _ >>> 0, o, i >>> 0);
  }, __wbg_resolve_002c4b7d9d8f6b64: function(e) {
    return Promise.resolve(e);
  }, __wbg_samplerParameterf_f070d2b69b1e2d46: function(e, n, t, _) {
    e.samplerParameterf(n, t >>> 0, _);
  }, __wbg_samplerParameteri_8e4c4bcead0ee669: function(e, n, t, _) {
    e.samplerParameteri(n, t >>> 0, _);
  }, __wbg_scissor_2ff8f18f05a6d408: function(e, n, t, _, o) {
    e.scissor(n, t, _, o);
  }, __wbg_scissor_b870b1434a9c25b4: function(e, n, t, _, o) {
    e.scissor(n, t, _, o);
  }, __wbg_setBindGroup_62a3045b0921e429: function(e, n, t, _, o, i, a) {
    e.setBindGroup(n >>> 0, t, G(_, o), i, a >>> 0);
  }, __wbg_setBindGroup_6c0fd18e9a53a945: function(e, n, t) {
    e.setBindGroup(n >>> 0, t);
  }, __wbg_setBindGroup_7f3b61f1f482133b: function(e, n, t) {
    e.setBindGroup(n >>> 0, t);
  }, __wbg_setBindGroup_bf767a5aa46a33ce: function(e, n, t, _, o, i, a) {
    e.setBindGroup(n >>> 0, t, G(_, o), i, a >>> 0);
  }, __wbg_setBindGroup_c4aaff14063226b4: function(e, n, t, _, o, i, a) {
    e.setBindGroup(n >>> 0, t, G(_, o), i, a >>> 0);
  }, __wbg_setBindGroup_f82e771dc1b69093: function(e, n, t) {
    e.setBindGroup(n >>> 0, t);
  }, __wbg_setBlendConstant_016723821cfb3aa4: function(e, n) {
    e.setBlendConstant(n);
  }, __wbg_setIndexBuffer_286a40afdff411b7: function(e, n, t, _) {
    e.setIndexBuffer(n, te[t], _);
  }, __wbg_setIndexBuffer_7efd0b7a40c65fb9: function(e, n, t, _, o) {
    e.setIndexBuffer(n, te[t], _, o);
  }, __wbg_setIndexBuffer_e091a9673bb575e2: function(e, n, t, _) {
    e.setIndexBuffer(n, te[t], _);
  }, __wbg_setIndexBuffer_f0759f00036f615f: function(e, n, t, _, o) {
    e.setIndexBuffer(n, te[t], _, o);
  }, __wbg_setPipeline_ba92070b8ee81cf9: function(e, n) {
    e.setPipeline(n);
  }, __wbg_setPipeline_c344f76bae58c4d6: function(e, n) {
    e.setPipeline(n);
  }, __wbg_setPipeline_d76451c50a121598: function(e, n) {
    e.setPipeline(n);
  }, __wbg_setScissorRect_0b6ee0852ef0b6b9: function(e, n, t, _, o) {
    e.setScissorRect(n >>> 0, t >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_setStencilReference_34fd3d59673a5a9d: function(e, n) {
    e.setStencilReference(n >>> 0);
  }, __wbg_setVertexBuffer_06a90dc78e1ad9c4: function(e, n, t, _, o) {
    e.setVertexBuffer(n >>> 0, t, _, o);
  }, __wbg_setVertexBuffer_1540e9118b6c451d: function(e, n, t, _) {
    e.setVertexBuffer(n >>> 0, t, _);
  }, __wbg_setVertexBuffer_5166eedc06450701: function(e, n, t, _, o) {
    e.setVertexBuffer(n >>> 0, t, _, o);
  }, __wbg_setVertexBuffer_8621784e5014065b: function(e, n, t, _) {
    e.setVertexBuffer(n >>> 0, t, _);
  }, __wbg_setViewport_731ad30abb13f744: function(e, n, t, _, o, i, a) {
    e.setViewport(n, t, _, o, i, a);
  }, __wbg_set_1eb0999cf5d27fc8: function(e, n, t) {
    return e.set(n, t);
  }, __wbg_set_25cf9deff6bf0ea8: function(e, n, t) {
    e.set(n, t >>> 0);
  }, __wbg_set_3f1d0b984ed272ed: function(e, n, t) {
    e[n] = t;
  }, __wbg_set_6cb8631f80447a67: function() {
    return x(function(e, n, t) {
      return Reflect.set(e, n, t);
    }, arguments);
  }, __wbg_set_f43e577aea94465b: function(e, n, t) {
    e[n >>> 0] = t;
  }, __wbg_set_height_b386c0f603610637: function(e, n) {
    e.height = n >>> 0;
  }, __wbg_set_height_f21f985387070100: function(e, n) {
    e.height = n >>> 0;
  }, __wbg_set_onuncapturederror_19541466822d790b: function(e, n) {
    e.onuncapturederror = n;
  }, __wbg_set_width_7f07715a20503914: function(e, n) {
    e.width = n >>> 0;
  }, __wbg_set_width_d60bc4f2f20c56a4: function(e, n) {
    e.width = n >>> 0;
  }, __wbg_shaderSource_32425cfe6e5a1e52: function(e, n, t, _) {
    e.shaderSource(n, m(t, _));
  }, __wbg_shaderSource_8f4bda03f70359df: function(e, n, t, _) {
    e.shaderSource(n, m(t, _));
  }, __wbg_size_661bddb3f9898121: function(e) {
    return e.size;
  }, __wbg_stack_0ed75d68575b0f3c: function(e, n) {
    const t = n.stack, _ = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, _, true);
  }, __wbg_static_accessor_GLOBAL_12837167ad935116: function() {
    const e = typeof global > "u" ? null : global;
    return w(e) ? 0 : S(e);
  }, __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return w(e) ? 0 : S(e);
  }, __wbg_static_accessor_SELF_a621d3dfbb60d0ce: function() {
    const e = typeof self > "u" ? null : self;
    return w(e) ? 0 : S(e);
  }, __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: function() {
    const e = typeof window > "u" ? null : window;
    return w(e) ? 0 : S(e);
  }, __wbg_stencilFuncSeparate_10d043d0af14366f: function(e, n, t, _, o) {
    e.stencilFuncSeparate(n >>> 0, t >>> 0, _, o >>> 0);
  }, __wbg_stencilFuncSeparate_1798f5cca257f313: function(e, n, t, _, o) {
    e.stencilFuncSeparate(n >>> 0, t >>> 0, _, o >>> 0);
  }, __wbg_stencilMaskSeparate_28d53625c02d9c7f: function(e, n, t) {
    e.stencilMaskSeparate(n >>> 0, t >>> 0);
  }, __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: function(e, n, t) {
    e.stencilMaskSeparate(n >>> 0, t >>> 0);
  }, __wbg_stencilMask_0eca090c4c47f8f7: function(e, n) {
    e.stencilMask(n >>> 0);
  }, __wbg_stencilMask_732dcc5aada10e4c: function(e, n) {
    e.stencilMask(n >>> 0);
  }, __wbg_stencilOpSeparate_4657523b1d3b184f: function(e, n, t, _, o) {
    e.stencilOpSeparate(n >>> 0, t >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_stencilOpSeparate_de257f3c29e604cd: function(e, n, t, _, o) {
    e.stencilOpSeparate(n >>> 0, t >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_submit_f635072bb3d05faa: function(e, n) {
    e.submit(n);
  }, __wbg_texImage2D_087ef94df78081f0: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u) {
      e.texImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texImage2D_e71049312f3172d9: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u) {
      e.texImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texImage3D_bd2b0bd2cfcdb278: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u, g) {
      e.texImage3D(n >>> 0, t, _, o, i, a, f, d >>> 0, u >>> 0, g);
    }, arguments);
  }, __wbg_texParameteri_0d45be2c88d6bad8: function(e, n, t, _) {
    e.texParameteri(n >>> 0, t >>> 0, _);
  }, __wbg_texParameteri_ec937d2161018946: function(e, n, t, _) {
    e.texParameteri(n >>> 0, t >>> 0, _);
  }, __wbg_texStorage2D_9504743abf5a986a: function(e, n, t, _, o, i) {
    e.texStorage2D(n >>> 0, t, _ >>> 0, o, i);
  }, __wbg_texStorage3D_e9e1b58fee218abe: function(e, n, t, _, o, i, a) {
    e.texStorage3D(n >>> 0, t, _ >>> 0, o, i, a);
  }, __wbg_texSubImage2D_117d29278542feb0: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u) {
      e.texSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_19ae4cadb809f264: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u) {
      e.texSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_5d270af600a7fc4a: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u) {
      e.texSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_bd034db2e58c352c: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u) {
      e.texSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_bf72e56edeeed376: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u) {
      e.texSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_d17a39cdec4a3495: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u) {
      e.texSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_e193f1d28439217c: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u) {
      e.texSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_edf5bd70fda3feaf: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u) {
      e.texSubImage2D(n >>> 0, t, _, o, i, a, f >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage3D_1102c12a20bf56d5: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u, g, p) {
      e.texSubImage3D(n >>> 0, t, _, o, i, a, f, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_18d7f3c65567c885: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u, g, p) {
      e.texSubImage3D(n >>> 0, t, _, o, i, a, f, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_3b653017c4c5d721: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u, g, p) {
      e.texSubImage3D(n >>> 0, t, _, o, i, a, f, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_45591e5655d1ed5c: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u, g, p) {
      e.texSubImage3D(n >>> 0, t, _, o, i, a, f, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_47643556a8a4bf86: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u, g, p) {
      e.texSubImage3D(n >>> 0, t, _, o, i, a, f, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_59b8e24fb05787aa: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u, g, p) {
      e.texSubImage3D(n >>> 0, t, _, o, i, a, f, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_eff5cd6ab84f44ee: function() {
    return x(function(e, n, t, _, o, i, a, f, d, u, g, p) {
      e.texSubImage3D(n >>> 0, t, _, o, i, a, f, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_then_0d9fe2c7b1857d32: function(e, n, t) {
    return e.then(n, t);
  }, __wbg_then_b9e7b3b5f1a9e1b5: function(e, n) {
    return e.then(n);
  }, __wbg_type_c0d5d83032e9858a: function(e) {
    const n = e.type;
    return (Ue.indexOf(n) + 1 || 4) - 1;
  }, __wbg_uniform1f_b500ede5b612bea2: function(e, n, t) {
    e.uniform1f(n, t);
  }, __wbg_uniform1f_c148eeaf4b531059: function(e, n, t) {
    e.uniform1f(n, t);
  }, __wbg_uniform1i_9f3f72dbcb98ada9: function(e, n, t) {
    e.uniform1i(n, t);
  }, __wbg_uniform1i_e9aee4b9e7fe8c4b: function(e, n, t) {
    e.uniform1i(n, t);
  }, __wbg_uniform1ui_a0f911ff174715d0: function(e, n, t) {
    e.uniform1ui(n, t >>> 0);
  }, __wbg_uniform2fv_04c304b93cbf7f55: function(e, n, t, _) {
    e.uniform2fv(n, M(t, _));
  }, __wbg_uniform2fv_2fb47cfe06330cc7: function(e, n, t, _) {
    e.uniform2fv(n, M(t, _));
  }, __wbg_uniform2iv_095baf208f172131: function(e, n, t, _) {
    e.uniform2iv(n, V(t, _));
  }, __wbg_uniform2iv_ccf2ed44ac8e602e: function(e, n, t, _) {
    e.uniform2iv(n, V(t, _));
  }, __wbg_uniform2uiv_3030d7e769f5e82a: function(e, n, t, _) {
    e.uniform2uiv(n, G(t, _));
  }, __wbg_uniform3fv_aa35ef21e14d5469: function(e, n, t, _) {
    e.uniform3fv(n, M(t, _));
  }, __wbg_uniform3fv_c0872003729939a5: function(e, n, t, _) {
    e.uniform3fv(n, M(t, _));
  }, __wbg_uniform3iv_6aa2b0791e659d14: function(e, n, t, _) {
    e.uniform3iv(n, V(t, _));
  }, __wbg_uniform3iv_e912f444d4ff8269: function(e, n, t, _) {
    e.uniform3iv(n, V(t, _));
  }, __wbg_uniform3uiv_86941e7eeb8ee0a3: function(e, n, t, _) {
    e.uniform3uiv(n, G(t, _));
  }, __wbg_uniform4f_71ec75443e58cecc: function(e, n, t, _, o, i) {
    e.uniform4f(n, t, _, o, i);
  }, __wbg_uniform4f_f6b5e2024636033a: function(e, n, t, _, o, i) {
    e.uniform4f(n, t, _, o, i);
  }, __wbg_uniform4fv_498bd80dc5aa16ff: function(e, n, t, _) {
    e.uniform4fv(n, M(t, _));
  }, __wbg_uniform4fv_e6c73702e9a3be5c: function(e, n, t, _) {
    e.uniform4fv(n, M(t, _));
  }, __wbg_uniform4iv_375332584c65e61b: function(e, n, t, _) {
    e.uniform4iv(n, V(t, _));
  }, __wbg_uniform4iv_8a8219fda39dffd5: function(e, n, t, _) {
    e.uniform4iv(n, V(t, _));
  }, __wbg_uniform4uiv_046ee400bb80547d: function(e, n, t, _) {
    e.uniform4uiv(n, G(t, _));
  }, __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: function(e, n, t, _) {
    e.uniformBlockBinding(n, t >>> 0, _ >>> 0);
  }, __wbg_uniformMatrix2fv_24430076c7afb5e3: function(e, n, t, _, o) {
    e.uniformMatrix2fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix2fv_e2806601f5b95102: function(e, n, t, _, o) {
    e.uniformMatrix2fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix2x3fv_a377326104a8faf4: function(e, n, t, _, o) {
    e.uniformMatrix2x3fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: function(e, n, t, _, o) {
    e.uniformMatrix2x4fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix3fv_6f822361173d8046: function(e, n, t, _, o) {
    e.uniformMatrix3fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix3fv_b94a764c63aa6468: function(e, n, t, _, o) {
    e.uniformMatrix3fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: function(e, n, t, _, o) {
    e.uniformMatrix3x2fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: function(e, n, t, _, o) {
    e.uniformMatrix3x4fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix4fv_0e724dbebd372526: function(e, n, t, _, o) {
    e.uniformMatrix4fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix4fv_923b55ad503fdc56: function(e, n, t, _, o) {
    e.uniformMatrix4fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: function(e, n, t, _, o) {
    e.uniformMatrix4x2fv(n, t !== 0, M(_, o));
  }, __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: function(e, n, t, _, o) {
    e.uniformMatrix4x3fv(n, t !== 0, M(_, o));
  }, __wbg_unmap_8c2e8131b2aaa844: function(e) {
    e.unmap();
  }, __wbg_usage_13caa02888040e9f: function(e) {
    return e.usage;
  }, __wbg_useProgram_e82c1a5f87d81579: function(e, n) {
    e.useProgram(n);
  }, __wbg_useProgram_fe720ade4d3b6edb: function(e, n) {
    e.useProgram(n);
  }, __wbg_valueOf_3c28600026e653c4: function(e) {
    return e.valueOf();
  }, __wbg_value_0546255b415e96c1: function(e) {
    return e.value;
  }, __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: function(e, n, t) {
    e.vertexAttribDivisorANGLE(n >>> 0, t >>> 0);
  }, __wbg_vertexAttribDivisor_744c0ca468594894: function(e, n, t) {
    e.vertexAttribDivisor(n >>> 0, t >>> 0);
  }, __wbg_vertexAttribIPointer_b9020d0c2e759912: function(e, n, t, _, o, i) {
    e.vertexAttribIPointer(n >>> 0, t, _ >>> 0, o, i);
  }, __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: function(e, n, t, _, o, i, a) {
    e.vertexAttribPointer(n >>> 0, t, _ >>> 0, o !== 0, i, a);
  }, __wbg_vertexAttribPointer_adbd1853cce679ad: function(e, n, t, _, o, i, a) {
    e.vertexAttribPointer(n >>> 0, t, _ >>> 0, o !== 0, i, a);
  }, __wbg_videoHeight_a90b6b6ebd4132de: function(e) {
    return e.videoHeight;
  }, __wbg_videoWidth_4b450aa64c85eaa4: function(e) {
    return e.videoWidth;
  }, __wbg_viewport_174ae1c2209344ae: function(e, n, t, _, o) {
    e.viewport(n, t, _, o);
  }, __wbg_viewport_df236eac68bc7467: function(e, n, t, _, o) {
    e.viewport(n, t, _, o);
  }, __wbg_warn_f7ae1b2e66ccb930: function(e) {
    console.warn(e);
  }, __wbg_width_5901d980713eb80b: function(e) {
    return e.width;
  }, __wbg_width_5f66bde2e810fbde: function(e) {
    return e.width;
  }, __wbg_width_75158459c067906d: function(e) {
    return e.width;
  }, __wbg_width_be8f36d66d37751f: function(e) {
    return e.width;
  }, __wbg_width_f12394c19964e4bb: function(e) {
    return e.width;
  }, __wbg_writeBuffer_5ca4981365eb5ac0: function(e, n, t, _, o, i) {
    e.writeBuffer(n, t, _, o, i);
  }, __wbg_writeTexture_246118eb2f5a1592: function(e, n, t, _, o) {
    e.writeTexture(n, t, _, o);
  }, __wbindgen_cast_0000000000000001: function(e, n) {
    return Te(e, n, r.wasm_bindgen_fdb3f87e5dacef0f___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wgpu_43013bc91c6d6b83___backend__webgpu__webgpu_sys__gen_GpuUncapturedErrorEvent__GpuUncapturedErrorEvent____Output_______, Le);
  }, __wbindgen_cast_0000000000000002: function(e, n) {
    return Te(e, n, r.wasm_bindgen_fdb3f87e5dacef0f___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wasm_bindgen_fdb3f87e5dacef0f___JsValue____Output_______, Oe);
  }, __wbindgen_cast_0000000000000003: function(e) {
    return e;
  }, __wbindgen_cast_0000000000000004: function(e) {
    return e;
  }, __wbindgen_cast_0000000000000005: function(e, n) {
    return M(e, n);
  }, __wbindgen_cast_0000000000000006: function(e, n) {
    return Ne(e, n);
  }, __wbindgen_cast_0000000000000007: function(e, n) {
    return V(e, n);
  }, __wbindgen_cast_0000000000000008: function(e, n) {
    return Qe(e, n);
  }, __wbindgen_cast_0000000000000009: function(e, n) {
    return He(e, n);
  }, __wbindgen_cast_000000000000000a: function(e, n) {
    return G(e, n);
  }, __wbindgen_cast_000000000000000b: function(e, n) {
    return T(e, n);
  }, __wbindgen_cast_000000000000000c: function(e, n) {
    return m(e, n);
  }, __wbindgen_cast_000000000000000d: function(e) {
    return BigInt.asUintN(64, e);
  }, __wbindgen_cast_000000000000000e: function(e, n) {
    var t = M(e, n).slice();
    return r.__wbindgen_free(e, n * 4, 4), t;
  }, __wbindgen_cast_000000000000000f: function(e, n) {
    var t = T(e, n).slice();
    return r.__wbindgen_free(e, n * 1, 1), t;
  }, __wbindgen_init_externref_table: function() {
    const e = r.__wbindgen_externrefs, n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, true), e.set(n + 3, false);
  } } };
}
function Le(c, e, n) {
  r.wasm_bindgen_fdb3f87e5dacef0f___convert__closures_____invoke___wgpu_43013bc91c6d6b83___backend__webgpu__webgpu_sys__gen_GpuUncapturedErrorEvent__GpuUncapturedErrorEvent_____(c, e, n);
}
function Oe(c, e, n) {
  r.wasm_bindgen_fdb3f87e5dacef0f___convert__closures_____invoke___wasm_bindgen_fdb3f87e5dacef0f___JsValue_____(c, e, n);
}
function We(c, e, n, t) {
  r.wasm_bindgen_fdb3f87e5dacef0f___convert__closures_____invoke___wasm_bindgen_fdb3f87e5dacef0f___JsValue__wasm_bindgen_fdb3f87e5dacef0f___JsValue_____(c, e, n, t);
}
const Ue = ["error", "warning", "info"], je = ["unknown", "destroyed"], qe = ["validation", "out-of-memory", "internal"], te = ["uint16", "uint32"], Je = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"], ve = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_circuitsim_free(c >>> 0, 1)), xe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_mdsim_free(c >>> 0, 1)), Se = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_physicssim_free(c >>> 0, 1)), Pe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_raytracer_free(c >>> 0, 1)), De = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_sliceresult_free(c >>> 0, 1)), ae = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_slicersettings_free(c >>> 0, 1)), Ae = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_solid_free(c >>> 0, 1)), Be = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_wasmannotationlayer_free(c >>> 0, 1)), se = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_wasmcamsettings_free(c >>> 0, 1)), le = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_wasmdocumentengine_free(c >>> 0, 1)), Me = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_wasmkeybindings_free(c >>> 0, 1)), ke = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_wasmsketchsession_free(c >>> 0, 1));
function S(c) {
  const e = r.__externref_table_alloc();
  return r.__wbindgen_externrefs.set(e, c), e;
}
function A(c, e) {
  if (!(c instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
const Ie = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => c.dtor(c.a, c.b));
function de(c) {
  const e = typeof c;
  if (e == "number" || e == "boolean" || c == null) return `${c}`;
  if (e == "string") return `"${c}"`;
  if (e == "symbol") {
    const _ = c.description;
    return _ == null ? "Symbol" : `Symbol(${_})`;
  }
  if (e == "function") {
    const _ = c.name;
    return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
  }
  if (Array.isArray(c)) {
    const _ = c.length;
    let o = "[";
    _ > 0 && (o += de(c[0]));
    for (let i = 1; i < _; i++) o += ", " + de(c[i]);
    return o += "]", o;
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(c));
  let t;
  if (n && n.length > 1) t = n[1];
  else return toString.call(c);
  if (t == "Object") try {
    return "Object(" + JSON.stringify(c) + ")";
  } catch {
    return "Object";
  }
  return c instanceof Error ? `${c.name}: ${c.message}
${c.stack}` : t;
}
function M(c, e) {
  return c = c >>> 0, Re().subarray(c / 4, c / 4 + e);
}
function be(c, e) {
  return c = c >>> 0, Ee().subarray(c / 8, c / 8 + e);
}
function Ne(c, e) {
  return c = c >>> 0, Ke().subarray(c / 2, c / 2 + e);
}
function V(c, e) {
  return c = c >>> 0, $e().subarray(c / 4, c / 4 + e);
}
function Qe(c, e) {
  return c = c >>> 0, Xe().subarray(c / 1, c / 1 + e);
}
function Fe(c, e) {
  c = c >>> 0;
  const n = D(), t = [];
  for (let _ = c; _ < c + 4 * e; _ += 4) t.push(r.__wbindgen_externrefs.get(n.getUint32(_, true)));
  return r.__externref_drop_slice(c, e), t;
}
function He(c, e) {
  return c = c >>> 0, Ze().subarray(c / 2, c / 2 + e);
}
function G(c, e) {
  return c = c >>> 0, ze().subarray(c / 4, c / 4 + e);
}
function T(c, e) {
  return c = c >>> 0, q().subarray(c / 1, c / 1 + e);
}
let W = null;
function D() {
  return (W === null || W.buffer.detached === true || W.buffer.detached === void 0 && W.buffer !== r.memory.buffer) && (W = new DataView(r.memory.buffer)), W;
}
let N = null;
function Re() {
  return (N === null || N.byteLength === 0) && (N = new Float32Array(r.memory.buffer)), N;
}
let Q = null;
function Ee() {
  return (Q === null || Q.byteLength === 0) && (Q = new Float64Array(r.memory.buffer)), Q;
}
let H = null;
function Ke() {
  return (H === null || H.byteLength === 0) && (H = new Int16Array(r.memory.buffer)), H;
}
let K = null;
function $e() {
  return (K === null || K.byteLength === 0) && (K = new Int32Array(r.memory.buffer)), K;
}
let $ = null;
function Xe() {
  return ($ === null || $.byteLength === 0) && ($ = new Int8Array(r.memory.buffer)), $;
}
function m(c, e) {
  return c = c >>> 0, nn(c, e);
}
let X = null;
function Ze() {
  return (X === null || X.byteLength === 0) && (X = new Uint16Array(r.memory.buffer)), X;
}
let Z = null;
function ze() {
  return (Z === null || Z.byteLength === 0) && (Z = new Uint32Array(r.memory.buffer)), Z;
}
let Y = null;
function q() {
  return (Y === null || Y.byteLength === 0) && (Y = new Uint8Array(r.memory.buffer)), Y;
}
function x(c, e) {
  try {
    return c.apply(this, e);
  } catch (n) {
    const t = S(n);
    r.__wbindgen_exn_store(t);
  }
}
function w(c) {
  return c == null;
}
function Te(c, e, n, t) {
  const _ = { a: c, b: e, cnt: 1, dtor: n }, o = (...i) => {
    _.cnt++;
    const a = _.a;
    _.a = 0;
    try {
      return t(a, _.b, ...i);
    } finally {
      _.a = a, o._wbg_cb_unref();
    }
  };
  return o._wbg_cb_unref = () => {
    --_.cnt === 0 && (_.dtor(_.a, _.b), _.a = 0, Ie.unregister(_));
  }, Ie.register(o, _, _), o;
}
function F(c, e) {
  const n = e(c.length * 4, 4) >>> 0;
  return ze().set(c, n / 4), s = c.length, n;
}
function J(c, e) {
  const n = e(c.length * 1, 1) >>> 0;
  return q().set(c, n / 1), s = c.length, n;
}
function I(c, e) {
  const n = e(c.length * 4, 4) >>> 0;
  return Re().set(c, n / 4), s = c.length, n;
}
function B(c, e) {
  const n = e(c.length * 8, 8) >>> 0;
  return Ee().set(c, n / 8), s = c.length, n;
}
function Ye(c, e) {
  const n = e(c.length * 4, 4) >>> 0;
  for (let t = 0; t < c.length; t++) {
    const _ = S(c[t]);
    D().setUint32(n + 4 * t, _, true);
  }
  return s = c.length, n;
}
function l(c, e, n) {
  if (n === void 0) {
    const a = ee.encode(c), f = e(a.length, 1) >>> 0;
    return q().subarray(f, f + a.length).set(a), s = a.length, f;
  }
  let t = c.length, _ = e(t, 1) >>> 0;
  const o = q();
  let i = 0;
  for (; i < t; i++) {
    const a = c.charCodeAt(i);
    if (a > 127) break;
    o[_ + i] = a;
  }
  if (i !== t) {
    i !== 0 && (c = c.slice(i)), _ = n(_, t, t = i + c.length * 3, 1) >>> 0;
    const a = q().subarray(_ + i, _ + t), f = ee.encodeInto(c, a);
    i += f.written, _ = n(_, t, i, 1) >>> 0;
  }
  return s = i, _;
}
function b(c) {
  const e = r.__wbindgen_externrefs.get(c);
  return r.__externref_table_dealloc(c), e;
}
let re = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
re.decode();
const en = 2146435072;
let fe = 0;
function nn(c, e) {
  return fe += e, fe >= en && (re = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), re.decode(), fe = e), re.decode(q().subarray(c, c + e));
}
const ee = new TextEncoder();
"encodeInto" in ee || (ee.encodeInto = function(c, e) {
  const n = ee.encode(c);
  return e.set(n), { read: c.length, written: n.length };
});
let s = 0, ue, r;
function Ge(c, e) {
  return r = c.exports, ue = e, W = null, N = null, Q = null, H = null, K = null, $ = null, X = null, Z = null, Y = null, r.__wbindgen_start(), r;
}
async function tn(c, e) {
  if (typeof Response == "function" && c instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(c, e);
    } catch (_) {
      if (c.ok && n(c.type) && c.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _);
      else throw _;
    }
    const t = await c.arrayBuffer();
    return await WebAssembly.instantiate(t, e);
  } else {
    const t = await WebAssembly.instantiate(c, e);
    return t instanceof WebAssembly.Instance ? { instance: t, module: c } : t;
  }
  function n(t) {
    switch (t) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function co(c) {
  if (r !== void 0) return r;
  c !== void 0 && (Object.getPrototypeOf(c) === Object.prototype ? { module: c } = c : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const e = Ce();
  c instanceof WebAssembly.Module || (c = new WebAssembly.Module(c));
  const n = new WebAssembly.Instance(c, e);
  return Ge(n, c);
}
async function io(c) {
  if (r !== void 0) return r;
  c !== void 0 && (Object.getPrototypeOf(c) === Object.prototype ? { module_or_path: c } = c : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), c === void 0 && (c = new URL("/vcad/v2026.07.26-e8c3021/assets/vcad_kernel_wasm_bg-DhwkYqZY.wasm", import.meta.url));
  const e = Ce();
  (typeof c == "string" || typeof Request == "function" && c instanceof Request || typeof URL == "function" && c instanceof URL) && (c = fetch(c));
  const { instance: n, module: t } = await tn(await c, e);
  return Ge(n, t);
}
function ao() {
  r = void 0, ue = void 0;
}
export {
  ge as CircuitSim,
  we as MdSim,
  me as PhysicsSim,
  ne as RayTracer,
  L as SliceResult,
  O as SlicerSettings,
  v as Solid,
  pe as WasmAnnotationLayer,
  R as WasmCamSettings,
  j as WasmDocumentEngine,
  he as WasmKeybindings,
  ye as WasmSketchSession,
  ao as __vcad_reset_wasm,
  rn as analyzeForPrinting,
  _n as analyzeStaticsBox,
  on as analyzeStaticsMesh,
  cn as antennaAnalyze,
  an as atoms_build_receipt,
  sn as atoms_homogenize,
  ln as atoms_inspect,
  fn as atoms_minimize,
  dn as atoms_parse_xyz,
  bn as atoms_write_xyz,
  un as buildCalibrationReportJson,
  gn as buildGlbBytes,
  wn as buildPart,
  mn as buildStlBytes,
  pn as build_chat_system_prompt,
  hn as calibrationDefaultTolerance,
  yn as calibrationFingerprintDocument,
  vn as camDropCutter,
  xn as camExportGcode,
  Sn as camExportLinuxCnc,
  Pn as camGenerateCircularPocket,
  Dn as camGenerateContour,
  An as camGenerateFace,
  Bn as camGeneratePocket,
  Mn as camGenerateRoughing3d,
  kn as camGetDefaultTools,
  In as camToolpathStats,
  Fn as checkDesignConstraints,
  Tn as checkPrintability,
  Cn as checkSheetMetal,
  Rn as circuitAcResponse,
  En as circuitDcOperatingPoint,
  zn as circuitFromSchematic,
  Gn as circuitSensitivities,
  Vn as circuitTransient,
  Ln as circuitTune,
  On as computeCreasedNormalsGpu,
  Wn as computeMeshProperties,
  Un as computeMeshVolume,
  jn as costSheetMetal,
  qn as createDetailView,
  Jn as decimateMeshGpu,
  io as default,
  Nn as deriveParts,
  Qn as digitizeSketch,
  Hn as digitizeText,
  Kn as documentDiff,
  $n as documentDiffApply,
  Xn as documentDiffHuman,
  Zn as documentMerge,
  Yn as documentParameterGradient,
  et as documentToLoon,
  nt as documentToLoonChecked,
  tt as documentToStepBuffer,
  rt as drawingSheetToPdf,
  _t as ecadAirgapFluxDensity,
  ot as ecadAirgapSolve,
  ct as ecadBuildReceipt,
  it as ecadBuiltinSymbols,
  at as ecadCheckDrc,
  st as ecadCheckDrcInRegion,
  lt as ecadCheckErc,
  ft as ecadComponentMeshes,
  dt as ecadComputeRatsnest,
  bt as ecadCritiqueRoute,
  ut as ecadDfmCheck,
  gt as ecadDfmDefaultPack,
  wt as ecadEvaluateMotor,
  mt as ecadExportFab,
  pt as ecadFabPrep,
  ht as ecadFillZones,
  yt as ecadFindAlternatives,
  vt as ecadFootprintForName,
  xt as ecadGenerateNetlist,
  St as ecadGetSymbol,
  Pt as ecadJellybeanManifest,
  Dt as ecadLayerZ,
  At as ecadLengthMatch,
  Bt as ecadNetContinuity,
  Mt as ecadNetForWire,
  kt as ecadPartsManifest,
  It as ecadPcbPreviewMeshes,
  Ft as ecadResolveFootprint,
  Tt as ecadResolvePart,
  Ct as ecadResolvePartDef,
  Rt as ecadRouteAll,
  Et as ecadRouteDiffPair,
  zt as ecadRouteNet,
  Gt as ecadRouteNetMaze,
  Vt as ecadRouteNetShove,
  Lt as ecadSearchParts,
  Ot as ecadSnapToGridOrPin,
  Wt as ecadVerifyReceipt,
  Ut as ecadVerifySubstitution,
  jt as emSimulate,
  qt as embroideryDesignToMesh,
  Jt as enclosure_component_extents,
  Nt as enclosure_connectors,
  Qt as enclosure_derive_board,
  Ht as enclosure_features,
  Kt as enclosure_fit,
  $t as enclosure_mounting_holes,
  Xt as enclosure_outline_aabb,
  Zt as enclosure_to_world,
  Yt as estimatePrintCost,
  er as estimate_cost_for_process,
  nr as eulerXyzDegToQuat,
  tr as evalVcadSource,
  rr as evalVcadSourceParametric,
  _r as evalVcadSourceWithModules,
  or as evaluateDocument,
  cr as evaluateSheetMetalChain,
  ir as evaluateVCode,
  ar as exportKicadPcb,
  sr as exportKicadProject,
  lr as exportKicadSch,
  fr as exportProjectedViewToDxf,
  dr as exprEvalAst,
  br as exprEvaluate,
  ur as exprParse,
  gr as feaAnalyzeMesh,
  wr as feaCheckBeam,
  mr as flattenSolidToSheetMetal,
  pr as generate3mf,
  hr as generate3mfWithGcode,
  yr as generateGcode,
  vr as getCompiledModule,
  xr as getPartsManifest,
  Sr as getSheetMetalBendTable,
  Pr as getSheetMetalMaterials,
  Dr as getSheetMetalShopCatalog,
  Ar as getSlicerPrinterProfiles,
  Br as get_anthropic_tools_json,
  Mr as get_default_dfm_pack,
  kr as get_kernel_version,
  Ir as get_tool_schemas,
  Fr as importStepBuffer,
  Tr as importUrdfBuffer,
  Cr as init,
  Rr as initGpu,
  co as initSync,
  Er as isCamAvailable,
  zr as isEcadAvailable,
  Gr as isEmbroideryAvailable,
  Vr as isGpuAvailable,
  Lr as isPhysicsAvailable,
  Or as isSlicerAvailable,
  Wr as latticeGaugeSimulate,
  Ur as mesh_clearance,
  jr as nestSheetMetalParts,
  qr as nestedSheetMetalDxf,
  Jr as neutronicsSimulate,
  Nr as noteToHz,
  Qr as offsetSectionMesh,
  Hr as op_chamfer,
  Kr as op_circular_pattern,
  $r as op_fillet,
  Xr as op_linear_pattern,
  Zr as op_loft,
  Yr as op_revolve,
  e_ as op_shell,
  n_ as op_sweep_helix,
  t_ as op_sweep_line,
  r_ as parseKicadPcb,
  __ as parseVCode,
  o_ as parseVcadFile,
  c_ as particleOptimize,
  i_ as particleSimulate,
  a_ as photonicsSimulate,
  s_ as plan_chat_tool,
  l_ as processGeometryGpu,
  f_ as projectMesh,
  d_ as readEmbroideryDst,
  b_ as readEmbroideryPes,
  u_ as recommendPrintSettings,
  g_ as renderBakeMesh,
  w_ as renderBomTable,
  m_ as renderTitleBlock,
  p_ as render_pcb_svg,
  h_ as render_pcb_svg_opts,
  y_ as render_svg,
  v_ as render_svg_annotated,
  x_ as render_svg_camera,
  S_ as render_svg_camera_opts,
  P_ as render_svg_view,
  D_ as render_svg_view_highlight,
  A_ as render_svg_view_section,
  B_ as resolveDocumentJson,
  M_ as resolveParametersJson,
  k_ as sample_timeline_sequence,
  I_ as sample_timeline_track,
  F_ as sectionMesh,
  T_ as sheetMetalFoldedStep,
  C_ as sheetMetalSequence,
  R_ as simulateFlow,
  E_ as simulateStrikeKernel,
  z_ as sketchCircleSegments,
  G_ as sketchHitTest,
  V_ as sketchPlaneBasis,
  L_ as sketchPlaneIntersectRay,
  O_ as sketchRectangleSegments,
  W_ as sketchSnap,
  U_ as sketchToWorld,
  j_ as sketchWorldToSketch,
  q_ as sliceMesh,
  J_ as sliceMeshWithProgress,
  N_ as sliceSolid,
  Q_ as solveDesignConstraints,
  H_ as solveForwardKinematics,
  K_ as solveSketchSegments,
  $_ as textBounds,
  X_ as thermalSolve,
  Z_ as thermalSolveTransient,
  Y_ as toVCode,
  eo as toleranceAnalyze,
  no as topologyOptimizeBox,
  to as topologyOptimizeMesh,
  ro as transformMeshBuffers,
  _o as writeEmbroideryDst,
  oo as writeEmbroideryPes
};
