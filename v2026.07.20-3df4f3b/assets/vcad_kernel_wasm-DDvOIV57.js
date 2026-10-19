class ue {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ye.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_circuitsim_free(e, 0);
  }
  dt() {
    return r.circuitsim_dt(this.__wbg_ptr);
  }
  constructor(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.circuitsim_new(t, n);
    if (_[2]) throw d(_[1]);
    return this.__wbg_ptr = _[0] >>> 0, ye.register(this, this.__wbg_ptr, this), this;
  }
  observe() {
    const e = r.circuitsim_observe(this.__wbg_ptr);
    if (e[2]) throw d(e[1]);
    return d(e[0]);
  }
  reset() {
    r.circuitsim_reset(this.__wbg_ptr);
  }
  setValue(e, t) {
    r.circuitsim_setValue(this.__wbg_ptr, e, t);
  }
  step(e) {
    const t = r.circuitsim_step(this.__wbg_ptr, e);
    if (t[2]) throw d(t[1]);
    return d(t[0]);
  }
}
Symbol.dispose && (ue.prototype[Symbol.dispose] = ue.prototype.free);
class ge {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ve.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_mdsim_free(e, 0);
  }
  moleculeJson() {
    let e, t;
    try {
      const o = r.mdsim_moleculeJson(this.__wbg_ptr);
      var n = o[0], _ = o[1];
      if (o[3]) throw n = 0, _ = 0, d(o[2]);
      return e = n, t = _, m(n, _);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
  constructor(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.mdsim_new(n, _, o, i);
    if (a[2]) throw d(a[1]);
    return this.__wbg_ptr = a[0] >>> 0, ve.register(this, this.__wbg_ptr, this), this;
  }
  observe() {
    let e, t;
    try {
      const o = r.mdsim_observe(this.__wbg_ptr);
      var n = o[0], _ = o[1];
      if (o[3]) throw n = 0, _ = 0, d(o[2]);
      return e = n, t = _, m(n, _);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
  reset() {
    let e, t;
    try {
      const o = r.mdsim_reset(this.__wbg_ptr);
      var n = o[0], _ = o[1];
      if (o[3]) throw n = 0, _ = 0, d(o[2]);
      return e = n, t = _, m(n, _);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
  run(e) {
    let t, n;
    try {
      const i = r.mdsim_run(this.__wbg_ptr, e);
      var _ = i[0], o = i[1];
      if (i[3]) throw _ = 0, o = 0, d(i[2]);
      return t = _, n = o, m(_, o);
    } finally {
      r.__wbindgen_free(t, n, 1);
    }
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
    r.__wbg_physicssim_free(e, 0);
  }
  actionDim() {
    return r.physicssim_actionDim(this.__wbg_ptr) >>> 0;
  }
  actuatedJointIds() {
    const e = r.physicssim_actuatedJointIds(this.__wbg_ptr);
    var t = ke(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 4, 4), t;
  }
  jointIds() {
    const e = r.physicssim_jointIds(this.__wbg_ptr);
    var t = ke(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 4, 4), t;
  }
  constructor(e, t, n, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = Ye(t, r.__wbindgen_malloc), f = s, b = r.physicssim_new(o, i, a, f, w(n) ? 4294967297 : Math.fround(n), w(_) ? 4294967297 : _ >>> 0);
    if (b[2]) throw d(b[1]);
    return this.__wbg_ptr = b[0] >>> 0, xe.register(this, this.__wbg_ptr, this), this;
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
    const t = B(e, r.__wbindgen_malloc), n = s;
    return r.physicssim_stepPosition(this.__wbg_ptr, t, n);
  }
  stepTorque(e) {
    const t = B(e, r.__wbindgen_malloc), n = s;
    return r.physicssim_stepTorque(this.__wbg_ptr, t, n);
  }
  stepVelocity(e) {
    const t = B(e, r.__wbindgen_malloc), n = s;
    return r.physicssim_stepVelocity(this.__wbg_ptr, t, n);
  }
}
Symbol.dispose && (we.prototype[Symbol.dispose] = we.prototype.free);
class te {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(te.prototype);
    return t.__wbg_ptr = e, Se.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Se.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_raytracer_free(e, 0);
  }
  static canRaytrace(e) {
    return D(e, v), r.raytracer_canRaytrace(e.__wbg_ptr) !== 0;
  }
  clearScene() {
    r.raytracer_clearScene(this.__wbg_ptr);
  }
  static create() {
    const e = r.raytracer_create();
    if (e[2]) throw d(e[1]);
    return te.__wrap(e[0]);
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
  pick(e, t, n, _, o, i, a, f) {
    const b = B(e, r.__wbindgen_malloc), u = s, g = B(t, r.__wbindgen_malloc), p = s, h = B(n, r.__wbindgen_malloc), y = s, A = r.raytracer_pick(this.__wbg_ptr, b, u, g, p, h, y, _, o, i, a, f);
    if (A[2]) throw d(A[1]);
    return A[0];
  }
  render(e, t, n, _, o, i) {
    const a = B(e, r.__wbindgen_malloc), f = s, b = B(t, r.__wbindgen_malloc), u = s, g = B(n, r.__wbindgen_malloc), p = s;
    return r.raytracer_render(this.__wbg_ptr, a, f, b, u, g, p, _, o, i);
  }
  resetAccumulation() {
    r.raytracer_resetAccumulation(this.__wbg_ptr);
  }
  setAO(e, t, n, _) {
    r.raytracer_setAO(this.__wbg_ptr, e, t, n, _);
  }
  setDebugMode(e) {
    r.raytracer_setDebugMode(this.__wbg_ptr, e);
  }
  setEdgeDetection(e, t, n) {
    r.raytracer_setEdgeDetection(this.__wbg_ptr, e, t, n);
  }
  setEdgeStyle(e, t, n, _, o, i, a, f, b, u, g, p, h, y, A, F, I, z, E) {
    r.raytracer_setEdgeStyle(this.__wbg_ptr, e, t, n, _, o, i, a, f, b, u, g, p, h, y, A, F, I, z, E);
  }
  setMaterial(e, t, n, _, o) {
    const i = r.raytracer_setMaterial(this.__wbg_ptr, e, t, n, _, o);
    if (i[1]) throw d(i[0]);
  }
  setRefineSamples(e) {
    r.raytracer_setRefineSamples(this.__wbg_ptr, e);
  }
  setTheme(e) {
    r.raytracer_setTheme(this.__wbg_ptr, e);
  }
  uploadSolid(e) {
    D(e, v);
    const t = r.raytracer_uploadSolid(this.__wbg_ptr, e.__wbg_ptr);
    if (t[1]) throw d(t[0]);
  }
  uploadSolidWithMaterial(e, t, n, _, o, i) {
    D(e, v);
    const a = r.raytracer_uploadSolidWithMaterial(this.__wbg_ptr, e.__wbg_ptr, t, n, _, o, i);
    if (a[1]) throw d(a[0]);
  }
}
Symbol.dispose && (te.prototype[Symbol.dispose] = te.prototype.free);
class L {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(L.prototype);
    return t.__wbg_ptr = e, Ae.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ae.unregister(this), e;
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
    const t = r.sliceresult_getLayerPreview(this.__wbg_ptr, e);
    if (t[2]) throw d(t[1]);
    return d(t[0]);
  }
  get layerCount() {
    return r.sliceresult_layerCount(this.__wbg_ptr) >>> 0;
  }
  get printTimeSeconds() {
    return r.sliceresult_printTimeSeconds(this.__wbg_ptr);
  }
  statsJson() {
    let e, t;
    try {
      const o = r.sliceresult_statsJson(this.__wbg_ptr);
      var n = o[0], _ = o[1];
      if (o[3]) throw n = 0, _ = 0, d(o[2]);
      return e = n, t = _, m(n, _);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
}
Symbol.dispose && (L.prototype[Symbol.dispose] = L.prototype.free);
class O {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(O.prototype);
    return t.__wbg_ptr = e, ae.register(t, t.__wbg_ptr, t), t;
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
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.slicersettings_fromJson(t, n);
    if (_[2]) throw d(_[1]);
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
    const t = Object.create(v.prototype);
    return t.__wbg_ptr = e, Pe.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pe.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_solid_free(e, 0);
  }
  boundaryEdges(e) {
    const t = r.solid_boundaryEdges(this.__wbg_ptr, w(e) ? 4294967297 : e >>> 0);
    var n = M(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  boundingBox() {
    const e = r.solid_boundingBox(this.__wbg_ptr);
    var t = Fe(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 8, 8), t;
  }
  canExportStep() {
    return r.solid_canExportStep(this.__wbg_ptr) !== 0;
  }
  centerOfMass() {
    const e = r.solid_centerOfMass(this.__wbg_ptr);
    var t = Fe(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 8, 8), t;
  }
  chamfer(e) {
    const t = r.op_chamfer(this.__wbg_ptr, e);
    return v.__wrap(t);
  }
  circularPattern(e, t, n, _, o, i, a, f) {
    const b = r.op_circular_pattern(this.__wbg_ptr, e, t, n, _, o, i, a, f);
    return v.__wrap(b);
  }
  clearance(e) {
    D(e, v);
    const t = r.solid_clearance(this.__wbg_ptr, e.__wbg_ptr);
    if (t[2]) throw d(t[1]);
    return d(t[0]);
  }
  static cone(e, t, n, _) {
    const o = r.solid_cone(e, t, n, w(_) ? 4294967297 : _ >>> 0);
    return v.__wrap(o);
  }
  static cube(e, t, n) {
    const _ = r.solid_cube(e, t, n);
    return v.__wrap(_);
  }
  static cylinder(e, t, n) {
    const _ = r.solid_cylinder(e, t, w(n) ? 4294967297 : n >>> 0);
    return v.__wrap(_);
  }
  difference(e) {
    D(e, v);
    const t = r.solid_difference(this.__wbg_ptr, e.__wbg_ptr);
    if (t[2]) throw d(t[1]);
    return v.__wrap(t[0]);
  }
  edgeBlend(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.solid_edgeBlend(this.__wbg_ptr, t, n);
    if (_[2]) throw d(_[1]);
    return v.__wrap(_[0]);
  }
  static empty() {
    const e = r.solid_empty();
    return v.__wrap(e);
  }
  static extrude(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = B(t, r.__wbindgen_malloc), i = s, a = r.solid_extrude(n, _, o, i);
    if (a[2]) throw d(a[1]);
    return v.__wrap(a[0]);
  }
  static extrudeWithOptions(e, t, n, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = B(t, r.__wbindgen_malloc), f = s, b = r.solid_extrudeWithOptions(o, i, a, f, n, _);
    if (b[2]) throw d(b[1]);
    return v.__wrap(b[0]);
  }
  fillet(e) {
    const t = r.op_fillet(this.__wbg_ptr, e);
    return v.__wrap(t);
  }
  getMesh(e) {
    return r.solid_getMesh(this.__wbg_ptr, w(e) ? 4294967297 : e >>> 0);
  }
  horizontalSection(e, t, n, _) {
    return r.solid_horizontalSection(this.__wbg_ptr, e, !w(t), w(t) ? 0 : t, !w(n), w(n) ? 0 : n, w(_) ? 4294967297 : _ >>> 0);
  }
  intersection(e) {
    D(e, v);
    const t = r.solid_intersection(this.__wbg_ptr, e.__wbg_ptr);
    if (t[2]) throw d(t[1]);
    return v.__wrap(t[0]);
  }
  isEmpty() {
    return r.solid_isEmpty(this.__wbg_ptr) !== 0;
  }
  linearPattern(e, t, n, _, o) {
    const i = r.op_linear_pattern(this.__wbg_ptr, e, t, n, _, o);
    return v.__wrap(i);
  }
  static loft(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.solid_loft(n, _, w(t) ? 16777215 : t ? 1 : 0);
    if (o[2]) throw d(o[1]);
    return v.__wrap(o[0]);
  }
  mirror(e, t, n, _, o, i) {
    const a = r.solid_mirror(this.__wbg_ptr, e, t, n, _, o, i);
    return v.__wrap(a);
  }
  numTriangles() {
    return r.solid_numTriangles(this.__wbg_ptr) >>> 0;
  }
  static prism(e, t, n) {
    const _ = r.solid_prism(e, t, n);
    return v.__wrap(_);
  }
  projectView(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
    return r.solid_projectView(this.__wbg_ptr, n, _, w(t) ? 4294967297 : t >>> 0);
  }
  static revolve(e, t, n, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = B(t, r.__wbindgen_malloc), f = s, b = B(n, r.__wbindgen_malloc), u = s, g = r.solid_revolve(o, i, a, f, b, u, _);
    if (g[2]) throw d(g[1]);
    return v.__wrap(g[0]);
  }
  rotate(e, t, n) {
    const _ = r.solid_rotate(this.__wbg_ptr, e, t, n);
    return v.__wrap(_);
  }
  runDfm(e, t, n) {
    let _, o;
    try {
      const f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = r.solid_runDfm(this.__wbg_ptr, f, b, u, g, n);
      var i = p[0], a = p[1];
      if (p[3]) throw i = 0, a = 0, d(p[2]);
      return _ = i, o = a, m(i, a);
    } finally {
      r.__wbindgen_free(_, o, 1);
    }
  }
  scale(e, t, n) {
    const _ = r.solid_scale(this.__wbg_ptr, e, t, n);
    return v.__wrap(_);
  }
  sectionView(e, t, n) {
    const _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    var i = w(t) ? 0 : l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s;
    return r.solid_sectionView(this.__wbg_ptr, _, o, i, a, w(n) ? 4294967297 : n >>> 0);
  }
  shell(e) {
    const t = r.op_shell(this.__wbg_ptr, e);
    return v.__wrap(t);
  }
  static sphere(e, t) {
    const n = r.solid_sphere(e, w(t) ? 4294967297 : t >>> 0);
    return v.__wrap(n);
  }
  surfaceArea() {
    return r.solid_surfaceArea(this.__wbg_ptr);
  }
  static sweepHelix(e, t, n, _, o, i, a, f, b, u, g) {
    const p = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.solid_sweepHelix(p, h, t, n, _, o, !w(i), w(i) ? 0 : i, !w(a), w(a) ? 0 : a, !w(f), w(f) ? 0 : f, w(b) ? 4294967297 : b >>> 0, w(u) ? 4294967297 : u >>> 0, !w(g), w(g) ? 0 : g);
    if (y[2]) throw d(y[1]);
    return v.__wrap(y[0]);
  }
  static sweepLine(e, t, n, _, o, i, a) {
    const f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = B(t, r.__wbindgen_malloc), g = s, p = B(n, r.__wbindgen_malloc), h = s, y = r.solid_sweepLine(f, b, u, g, p, h, !w(_), w(_) ? 0 : _, !w(o), w(o) ? 0 : o, !w(i), w(i) ? 0 : i, !w(a), w(a) ? 0 : a);
    if (y[2]) throw d(y[1]);
    return v.__wrap(y[0]);
  }
  static textExtrude(e, t, n, _, o, i, a, f, b, u) {
    const g = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = B(t, r.__wbindgen_malloc), y = s, A = B(n, r.__wbindgen_malloc), F = s, I = B(_, r.__wbindgen_malloc), z = s, E = B(o, r.__wbindgen_malloc), _e = s;
    var oe = w(a) ? 0 : l(a, r.__wbindgen_malloc, r.__wbindgen_realloc), ce = s, U = w(f) ? 0 : l(f, r.__wbindgen_malloc, r.__wbindgen_realloc), Ve = s;
    const ie = r.solid_textExtrude(g, p, h, y, A, F, I, z, E, _e, i, oe, ce, U, Ve, !w(b), w(b) ? 0 : b, !w(u), w(u) ? 0 : u);
    if (ie[2]) throw d(ie[1]);
    return v.__wrap(ie[0]);
  }
  toStepBuffer() {
    const e = r.solid_toStepBuffer(this.__wbg_ptr);
    if (e[3]) throw d(e[2]);
    var t = k(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  static torus(e, t, n) {
    const _ = r.solid_torus(e, t, w(n) ? 4294967297 : n >>> 0);
    return v.__wrap(_);
  }
  translate(e, t, n) {
    const _ = r.solid_translate(this.__wbg_ptr, e, t, n);
    return v.__wrap(_);
  }
  union(e) {
    D(e, v);
    const t = r.solid_union(this.__wbg_ptr, e.__wbg_ptr);
    if (t[2]) throw d(t[1]);
    return v.__wrap(t[0]);
  }
  volume() {
    return r.solid_volume(this.__wbg_ptr);
  }
  static wedge(e, t, n) {
    const _ = r.solid_wedge(e, t, n);
    return v.__wrap(_);
  }
}
Symbol.dispose && (v.prototype[Symbol.dispose] = v.prototype.free);
class me {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, De.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_wasmannotationlayer_free(e, 0);
  }
  addAlignedDimension(e, t, n, _, o) {
    r.wasmannotationlayer_addAlignedDimension(this.__wbg_ptr, e, t, n, _, o);
  }
  addAngleDimension(e, t, n, _, o, i, a) {
    r.wasmannotationlayer_addAngleDimension(this.__wbg_ptr, e, t, n, _, o, i, a);
  }
  addDiameterDimension(e, t, n, _) {
    r.wasmannotationlayer_addDiameterDimension(this.__wbg_ptr, e, t, n, _);
  }
  addHorizontalDimension(e, t, n, _, o) {
    r.wasmannotationlayer_addHorizontalDimension(this.__wbg_ptr, e, t, n, _, o);
  }
  addRadiusDimension(e, t, n, _) {
    r.wasmannotationlayer_addRadiusDimension(this.__wbg_ptr, e, t, n, _);
  }
  addVerticalDimension(e, t, n, _, o) {
    r.wasmannotationlayer_addVerticalDimension(this.__wbg_ptr, e, t, n, _, o);
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
    return this.__wbg_ptr = e >>> 0, De.register(this, this.__wbg_ptr, this), this;
  }
  renderAll(e) {
    var t = w(e) ? 0 : l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
    return r.wasmannotationlayer_renderAll(this.__wbg_ptr, t, n);
  }
}
Symbol.dispose && (me.prototype[Symbol.dispose] = me.prototype.free);
class C {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(C.prototype);
    return t.__wbg_ptr = e, se.register(t, t.__wbg_ptr, t), t;
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
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.wasmcamsettings_fromJson(t, n);
    if (_[2]) throw d(_[1]);
    return C.__wrap(_[0]);
  }
  constructor() {
    const e = r.wasmcamsettings_new();
    return this.__wbg_ptr = e >>> 0, se.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (C.prototype[Symbol.dispose] = C.prototype.free);
class j {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(j.prototype);
    return t.__wbg_ptr = e, le.register(t, t.__wbg_ptr, t), t;
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
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
    return r.wasmdocumentengine_add_feature(this.__wbg_ptr, t, n);
  }
  can_redo() {
    return r.wasmdocumentengine_can_redo(this.__wbg_ptr) !== 0;
  }
  can_undo() {
    return r.wasmdocumentengine_can_undo(this.__wbg_ptr) !== 0;
  }
  compute_position_between(e, t) {
    let n, _;
    try {
      const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.wasmdocumentengine_compute_position_between(this.__wbg_ptr, o, i, a, f);
      return n = b[0], _ = b[1], m(b[0], b[1]);
    } finally {
      r.__wbindgen_free(n, _, 1);
    }
  }
  create_feature(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_create_feature(this.__wbg_ptr, n, _, o, i);
  }
  delete_feature(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
    return r.wasmdocumentengine_delete_feature(this.__wbg_ptr, t, n);
  }
  delete_feature_by_id(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
    return r.wasmdocumentengine_delete_feature_by_id(this.__wbg_ptr, t, n);
  }
  static from_v1_json(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.wasmdocumentengine_from_v1_json(t, n);
    if (_[2]) throw d(_[1]);
    return j.__wrap(_[0]);
  }
  get_document_json() {
    let e, t;
    try {
      const n = r.wasmdocumentengine_get_document_json(this.__wbg_ptr);
      return e = n[0], t = n[1], m(n[0], n[1]);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
  get_ops_since(e) {
    let t, n;
    try {
      const _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.wasmdocumentengine_get_ops_since(this.__wbg_ptr, _, o);
      return t = i[0], n = i[1], m(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, n, 1);
    }
  }
  get_ordered_features_json() {
    let e, t;
    try {
      const n = r.wasmdocumentengine_get_ordered_features_json(this.__wbg_ptr);
      return e = n[0], t = n[1], m(n[0], n[1]);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
  get_parts_json() {
    let e, t;
    try {
      const n = r.wasmdocumentengine_get_parts_json(this.__wbg_ptr);
      return e = n[0], t = n[1], m(n[0], n[1]);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
  get_sync_clock() {
    let e, t;
    try {
      const n = r.wasmdocumentengine_get_sync_clock(this.__wbg_ptr);
      return e = n[0], t = n[1], m(n[0], n[1]);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
  import_ir(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
    return r.wasmdocumentengine_import_ir(this.__wbg_ptr, t, n);
  }
  static load(e) {
    const t = N(e, r.__wbindgen_malloc), n = s, _ = r.wasmdocumentengine_load(t, n);
    if (_[2]) throw d(_[1]);
    return j.__wrap(_[0]);
  }
  merge_remote(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
    return r.wasmdocumentengine_merge_remote(this.__wbg_ptr, t, n);
  }
  move_feature(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_move_feature(this.__wbg_ptr, n, _, o, i);
  }
  constructor() {
    const e = r.wasmdocumentengine_new();
    return this.__wbg_ptr = e >>> 0, le.register(this, this.__wbg_ptr, this), this;
  }
  redo() {
    return r.wasmdocumentengine_redo(this.__wbg_ptr);
  }
  rename_feature(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_rename_feature(this.__wbg_ptr, n, _, o, i);
  }
  save() {
    const e = r.wasmdocumentengine_save(this.__wbg_ptr);
    var t = k(e[0], e[1]).slice();
    return r.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  set_joint_state(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
    return r.wasmdocumentengine_set_joint_state(this.__wbg_ptr, n, _, t);
  }
  set_material(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_set_material(this.__wbg_ptr, n, _, o, i);
  }
  set_param(e, t, n) {
    const _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s;
    return r.wasmdocumentengine_set_param(this.__wbg_ptr, _, o, i, a, f, b);
  }
  set_rotation(e, t, n, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_set_rotation(this.__wbg_ptr, o, i, t, n, _);
  }
  set_scale(e, t, n, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_set_scale(this.__wbg_ptr, o, i, t, n, _);
  }
  set_translation(e, t, n, _) {
    const o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_set_translation(this.__wbg_ptr, o, i, t, n, _);
  }
  set_visible(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
    return r.wasmdocumentengine_set_visible(this.__wbg_ptr, n, _, t);
  }
  undo() {
    return r.wasmdocumentengine_undo(this.__wbg_ptr);
  }
  update_feature(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    return r.wasmdocumentengine_update_feature(this.__wbg_ptr, n, _, o, i);
  }
}
Symbol.dispose && (j.prototype[Symbol.dispose] = j.prototype.free);
class pe {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Be.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_wasmkeybindings_free(e, 0);
  }
  chordFor(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.wasmkeybindings_chordFor(this.__wbg_ptr, t, n);
    let o;
    return _[0] !== 0 && (o = m(_[0], _[1]).slice(), r.__wbindgen_free(_[0], _[1] * 1, 1)), o;
  }
  commandsJson() {
    let e, t;
    try {
      const n = r.wasmkeybindings_commandsJson(this.__wbg_ptr);
      return e = n[0], t = n[1], m(n[0], n[1]);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
  conflictsJson(e) {
    let t, n;
    try {
      const _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.wasmkeybindings_conflictsJson(this.__wbg_ptr, _, o);
      return t = i[0], n = i[1], m(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, n, 1);
    }
  }
  loadOverrides(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
    return r.wasmkeybindings_loadOverrides(this.__wbg_ptr, t, n) !== 0;
  }
  constructor() {
    const e = r.wasmkeybindings_new();
    return this.__wbg_ptr = e >>> 0, Be.register(this, this.__wbg_ptr, this), this;
  }
  resetAll() {
    r.wasmkeybindings_resetAll(this.__wbg_ptr);
  }
  resolve(e, t, n) {
    const _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.wasmkeybindings_resolve(this.__wbg_ptr, _, o, i, a, n);
    let b;
    return f[0] !== 0 && (b = m(f[0], f[1]).slice(), r.__wbindgen_free(f[0], f[1] * 1, 1)), b;
  }
  saveOverrides() {
    let e, t;
    try {
      const n = r.wasmkeybindings_saveOverrides(this.__wbg_ptr);
      return e = n[0], t = n[1], m(n[0], n[1]);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
  setBinding(e, t) {
    const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
    var o = w(t) ? 0 : l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    r.wasmkeybindings_setBinding(this.__wbg_ptr, n, _, o, i);
  }
}
Symbol.dispose && (pe.prototype[Symbol.dispose] = pe.prototype.free);
class he {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Me.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    r.__wbg_wasmsketchsession_free(e, 0);
  }
  addCircle(e, t, n) {
    r.wasmsketchsession_addCircle(this.__wbg_ptr, e, t, n);
  }
  addConstraint(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.wasmsketchsession_addConstraint(this.__wbg_ptr, t, n);
    if (_[1]) throw d(_[0]);
  }
  addLine(e, t, n, _) {
    r.wasmsketchsession_addLine(this.__wbg_ptr, e, t, n, _);
  }
  addRectangle(e, t, n, _) {
    r.wasmsketchsession_addRectangle(this.__wbg_ptr, e, t, n, _);
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
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.wasmsketchsession_new(t, n);
    if (_[2]) throw d(_[1]);
    return this.__wbg_ptr = _[0] >>> 0, Me.register(this, this.__wbg_ptr, this), this;
  }
  onClick() {
    let e, t;
    try {
      const n = r.wasmsketchsession_onClick(this.__wbg_ptr);
      return e = n[0], t = n[1], m(n[0], n[1]);
    } finally {
      r.__wbindgen_free(e, t, 1);
    }
  }
  onCursorLeave() {
    r.wasmsketchsession_onCursorLeave(this.__wbg_ptr);
  }
  onCursorRay(e, t, n, _, o, i) {
    r.wasmsketchsession_onCursorRay(this.__wbg_ptr, e, t, n, _, o, i);
  }
  onCursorSketch(e, t) {
    r.wasmsketchsession_onCursorSketch(this.__wbg_ptr, e, t);
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
  setSnap(e, t, n, _) {
    r.wasmsketchsession_setSnap(this.__wbg_ptr, e, t, n, _);
  }
  setTool(e) {
    const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
    r.wasmsketchsession_setTool(this.__wbg_ptr, t, n);
  }
  snapshot() {
    let e, t;
    try {
      const o = r.wasmsketchsession_snapshot(this.__wbg_ptr);
      var n = o[0], _ = o[1];
      if (o[3]) throw n = 0, _ = 0, d(o[2]);
      return e = n, t = _, m(n, _);
    } finally {
      r.__wbindgen_free(e, t, 1);
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
Symbol.dispose && (he.prototype[Symbol.dispose] = he.prototype.free);
function rt(c) {
  D(c, v);
  const e = r.analyzeForPrinting(c.__wbg_ptr);
  if (e[2]) throw d(e[1]);
  return d(e[0]);
}
function _t(c, e, t, n, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.analyzeStaticsBox(a, f, e, t, n, _, o, i);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function ot(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = R(e, r.__wbindgen_malloc), i = s, a = T(t, r.__wbindgen_malloc), f = s, b = r.analyzeStaticsMesh(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function ct(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.antennaAnalyze(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function it(c, e, t, n, _) {
  let o, i;
  try {
    const b = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s, A = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), F = s, I = l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), z = s, E = r.atoms_build_receipt(b, u, g, p, h, y, A, F, I, z);
    var a = E[0], f = E[1];
    if (E[3]) throw a = 0, f = 0, d(E[2]);
    return o = a, i = f, m(a, f);
  } finally {
    r.__wbindgen_free(o, i, 1);
  }
}
function at(c, e) {
  let t, n;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = r.atoms_homogenize(i, a, f, b);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, d(u[2]);
    return t = _, n = o, m(_, o);
  } finally {
    r.__wbindgen_free(t, n, 1);
  }
}
function st(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.atoms_inspect(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function lt(c, e, t, n) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = r.atoms_minimize(f, b, u, g, t, n);
    var i = p[0], a = p[1];
    if (p[3]) throw i = 0, a = 0, d(p[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function ft(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.atoms_parse_xyz(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function bt(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.atoms_write_xyz(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function dt(c, e) {
  let t, n;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = r.buildPart(i, a, f, b);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, d(u[2]);
    return t = _, n = o, m(_, o);
  } finally {
    r.__wbindgen_free(t, n, 1);
  }
}
function ut(c, e) {
  let t, n;
  try {
    const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.build_chat_system_prompt(_, o, i, a);
    return t = f[0], n = f[1], m(f[0], f[1]);
  } finally {
    r.__wbindgen_free(t, n, 1);
  }
}
function gt(c, e, t, n, _) {
  let o, i;
  try {
    const b = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s, A = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), F = s, I = r.camDropCutter(b, u, g, p, h, y, A, F, _);
    var a = I[0], f = I[1];
    if (I[3]) throw a = 0, f = 0, d(I[2]);
    return o = a, i = f, m(a, f);
  } finally {
    r.__wbindgen_free(o, i, 1);
  }
}
function wt(c, e, t, n) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s;
    D(n, C);
    const y = r.camExportGcode(f, b, u, g, p, h, n.__wbg_ptr);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, d(y[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function mt(c, e, t, n, _) {
  let o, i;
  try {
    const b = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s;
    D(n, C);
    const A = r.camExportLinuxCnc(b, u, g, p, h, y, n.__wbg_ptr, _);
    var a = A[0], f = A[1];
    if (A[3]) throw a = 0, f = 0, d(A[2]);
    return o = a, i = f, m(a, f);
  } finally {
    r.__wbindgen_free(o, i, 1);
  }
}
function pt(c, e, t, n, _, o) {
  let i, a;
  try {
    const u = l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s;
    D(o, C);
    const p = r.camGenerateCircularPocket(c, e, t, n, u, g, o.__wbg_ptr);
    var f = p[0], b = p[1];
    if (p[3]) throw f = 0, b = 0, d(p[2]);
    return i = f, a = b, m(f, b);
  } finally {
    r.__wbindgen_free(i, a, 1);
  }
}
function ht(c, e, t, n, _, o, i, a, f, b, u) {
  let g, p;
  try {
    const A = l(b, r.__wbindgen_malloc, r.__wbindgen_realloc), F = s;
    D(u, C);
    const I = r.camGenerateContour(c, e, t, n, _, o, i, a, f, A, F, u.__wbg_ptr);
    var h = I[0], y = I[1];
    if (I[3]) throw h = 0, y = 0, d(I[2]);
    return g = h, p = y, m(h, y);
  } finally {
    r.__wbindgen_free(g, p, 1);
  }
}
function yt(c, e, t, n, _, o, i) {
  let a, f;
  try {
    const g = l(o, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s;
    D(i, C);
    const h = r.camGenerateFace(c, e, t, n, _, g, p, i.__wbg_ptr);
    var b = h[0], u = h[1];
    if (h[3]) throw b = 0, u = 0, d(h[2]);
    return a = b, f = u, m(b, u);
  } finally {
    r.__wbindgen_free(a, f, 1);
  }
}
function vt(c, e, t, n, _, o, i) {
  let a, f;
  try {
    const g = l(o, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s;
    D(i, C);
    const h = r.camGeneratePocket(c, e, t, n, _, g, p, i.__wbg_ptr);
    var b = h[0], u = h[1];
    if (h[3]) throw b = 0, u = 0, d(h[2]);
    return a = b, f = u, m(b, u);
  } finally {
    r.__wbindgen_free(a, f, 1);
  }
}
function xt(c, e, t, n, _, o, i) {
  let a, f;
  try {
    const g = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s;
    D(t, C);
    const A = r.camGenerateRoughing3d(g, p, h, y, t.__wbg_ptr, n, _, o, i);
    var b = A[0], u = A[1];
    if (A[3]) throw b = 0, u = 0, d(A[2]);
    return a = b, f = u, m(b, u);
  } finally {
    r.__wbindgen_free(a, f, 1);
  }
}
function St() {
  let c, e;
  try {
    const _ = r.camGetDefaultTools();
    var t = _[0], n = _[1];
    if (_[3]) throw t = 0, n = 0, d(_[2]);
    return c = t, e = n, m(t, n);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function At(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.camToolpathStats(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function Pt(c, e) {
  D(c, v);
  const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.checkPrintability(c.__wbg_ptr, t, n);
  if (_[2]) throw d(_[1]);
  return d(_[0]);
}
function Dt(c, e) {
  let t, n;
  try {
    const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.checkSheetMetal(_, o, i, a);
    return t = f[0], n = f[1], m(f[0], f[1]);
  } finally {
    r.__wbindgen_free(t, n, 1);
  }
}
function Bt(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = B(t, r.__wbindgen_malloc), i = s, a = r.circuitAcResponse(n, _, e, o, i);
  if (a[2]) throw d(a[1]);
  return d(a[0]);
}
function Mt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.circuitDcOperatingPoint(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function It(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.circuitFromSchematic(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function Ft(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.circuitSensitivities(n, _, e, o, i);
  if (a[2]) throw d(a[1]);
  return d(a[0]);
}
function kt(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.circuitTransient(n, _, e, t);
  if (o[2]) throw d(o[1]);
  return d(o[0]);
}
function Tt(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.circuitTune(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function Rt(c, e, t) {
  const n = R(c, r.__wbindgen_malloc), _ = s, o = T(e, r.__wbindgen_malloc), i = s;
  return r.computeCreasedNormalsGpu(n, _, o, i, t);
}
function Ct(c, e) {
  const t = R(c, r.__wbindgen_malloc), n = s, _ = T(e, r.__wbindgen_malloc), o = s;
  return r.computeMeshVolume(t, n, _, o);
}
function Et(c, e, t) {
  let n, _;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.costSheetMetal(o, i, a, f, t);
    return n = b[0], _ = b[1], m(b[0], b[1]);
  } finally {
    r.__wbindgen_free(n, _, 1);
  }
}
function zt(c, e, t, n, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = l(i, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.createDetailView(a, f, e, t, n, _, o, b, u);
  if (g[2]) throw d(g[1]);
  return d(g[0]);
}
function Gt(c, e, t) {
  const n = R(c, r.__wbindgen_malloc), _ = s, o = T(e, r.__wbindgen_malloc), i = s;
  return r.decimateMeshGpu(n, _, o, i, t);
}
function Vt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.deriveParts(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function Lt(c, e) {
  let t, n;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = r.digitizeSketch(i, a, f, b);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, d(u[2]);
    return t = _, n = o, m(_, o);
  } finally {
    r.__wbindgen_free(t, n, 1);
  }
}
function Ot(c, e, t) {
  let n, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.digitizeText(a, f, e, b, u);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, d(g[2]);
    return n = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(n, _, 1);
  }
}
function Wt(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.documentDiff(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function Ut(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.documentDiffApply(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function jt(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.documentDiffHuman(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function qt(c, e, t, n) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s;
  var u = w(n) ? 0 : l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s;
  const p = r.documentMerge(_, o, i, a, f, b, u, g);
  if (p[2]) throw d(p[1]);
  return d(p[0]);
}
function Nt(c, e, t, n) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.documentParameterGradient(_, o, i, a, t, n);
  if (f[2]) throw d(f[1]);
  return d(f[0]);
}
function Jt(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.documentToLoon(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function Qt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.documentToLoonChecked(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function Ht(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.drawingSheetToPdf(e, t);
  if (n[3]) throw d(n[2]);
  var _ = k(n[0], n[1]).slice();
  return r.__wbindgen_free(n[0], n[1] * 1, 1), _;
}
function Kt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadAirgapFluxDensity(e, t);
  if (n[2]) throw d(n[1]);
  return n[0];
}
function $t(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadBuildReceipt(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function Zt() {
  const c = r.ecadBuiltinSymbols();
  if (c[2]) throw d(c[1]);
  return d(c[0]);
}
function Xt(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadCheckDrc(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function Yt(c, e, t, n, _) {
  const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.ecadCheckDrcInRegion(o, i, e, t, n, _);
  if (a[2]) throw d(a[1]);
  return d(a[0]);
}
function en(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadCheckErc(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function tn(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadComponentMeshes(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function nn(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.ecadComputeRatsnest(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function rn(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.ecadCritiqueRoute(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function _n(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.ecadDfmCheck(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function on(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.ecadDfmDefaultPack(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function cn(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadEvaluateMotor(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function an(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadExportFab(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function sn(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadFillZones(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function ln(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadFindAlternatives(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function fn(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.ecadFootprintForName(t, n, e);
  if (_[2]) throw d(_[1]);
  return d(_[0]);
}
function bn(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadGenerateNetlist(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function dn(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadGetSymbol(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function un() {
  let c, e;
  try {
    const t = r.ecadJellybeanManifest();
    return c = t[0], e = t[1], m(t[0], t[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function gn(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
  return r.ecadLayerZ(n, _, e, t);
}
function wn(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.ecadLengthMatch(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function mn(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.ecadNetContinuity(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function pn(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.ecadNetForWire(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function hn() {
  let c, e;
  try {
    const t = r.ecadPartsManifest();
    return c = t[0], e = t[1], m(t[0], t[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function yn(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadPcbPreviewMeshes(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function vn(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.ecadResolveFootprint(t, n, e);
  if (_[2]) throw d(_[1]);
  return d(_[0]);
}
function xn(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.ecadResolvePart(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function Sn(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
  var _ = w(e) ? 0 : l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
  const i = r.ecadResolvePartDef(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function An(c, e, t, n) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.ecadRouteAll(_, o, e, i, a, !w(n), w(n) ? 0 : n);
  if (f[2]) throw d(f[1]);
  return d(f[0]);
}
function Pn(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.ecadRouteDiffPair(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function Dn(c, e, t, n, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.ecadRouteNet(a, f, b, u, t, n, _, o, i);
  if (g[2]) throw d(g[1]);
  return d(g[0]);
}
function Bn(c, e, t, n, _, o, i, a) {
  const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.ecadRouteNetMaze(f, b, u, g, p, h, n, _, o, i, a);
  if (y[2]) throw d(y[1]);
  return d(y[0]);
}
function Mn(c, e, t, n, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.ecadRouteNetShove(a, f, b, u, t, n, _, o, i);
  if (g[2]) throw d(g[1]);
  return d(g[0]);
}
function In(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.ecadSearchParts(t, n, e);
  if (_[2]) throw d(_[1]);
  return d(_[0]);
}
function Fn(c, e, t, n, _) {
  const o = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.ecadSnapToGridOrPin(c, e, o, i, n, _);
  if (a[2]) throw d(a[1]);
  return d(a[0]);
}
function kn(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.ecadVerifyReceipt(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function Tn(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.ecadVerifySubstitution(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function Rn(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.emSimulate(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function Cn(c, e, t, n, _) {
  const o = l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.estimatePrintCost(c, e, t, n, o, i);
  if (a[2]) throw d(a[1]);
  return d(a[0]);
}
function En(c, e, t, n, _, o) {
  const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = r.estimate_cost_for_process(i, a, f, b, t, n, _, o);
  if (u[2]) throw d(u[1]);
  return d(u[0]);
}
function zn(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.evalVcadSource(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function Gn(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.evaluateDocument(t, n, e);
  if (_[2]) throw d(_[1]);
  return d(_[0]);
}
function Vn(c) {
  let e, t;
  try {
    const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.evaluateSheetMetalChain(n, _);
    return e = o[0], t = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function Ln(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.evaluateVCode(e, t);
  if (n[2]) throw d(n[1]);
  return v.__wrap(n[0]);
}
function On(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.exportKicadPcb(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function Wn(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.exportKicadSch(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function Un(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.exportProjectedViewToDxf(e, t);
  if (n[3]) throw d(n[2]);
  var _ = k(n[0], n[1]).slice();
  return r.__wbindgen_free(n[0], n[1] * 1, 1), _;
}
function jn(c, e, t, n) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = R(t, r.__wbindgen_malloc), b = s, u = T(n, r.__wbindgen_malloc), g = s, p = r.feaAnalyzeMesh(_, o, i, a, f, b, u, g);
  if (p[2]) throw d(p[1]);
  return d(p[0]);
}
function qn(c, e, t, n) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = R(e, r.__wbindgen_malloc), a = s, f = T(t, r.__wbindgen_malloc), b = s, u = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = r.generate3mf(_, o, i, a, f, b, u, g);
  if (p[3]) throw d(p[2]);
  var h = k(p[0], p[1]).slice();
  return r.__wbindgen_free(p[0], p[1] * 1, 1), h;
}
function Nn(c, e, t, n, _) {
  const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = R(e, r.__wbindgen_malloc), f = s, b = T(t, r.__wbindgen_malloc), u = s, g = N(n, r.__wbindgen_malloc), p = s, h = l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s, A = r.generate3mfWithGcode(o, i, a, f, b, u, g, p, h, y);
  if (A[3]) throw d(A[2]);
  var F = k(A[0], A[1]).slice();
  return r.__wbindgen_free(A[0], A[1] * 1, 1), F;
}
function Jn(c, e, t, n) {
  let _, o;
  try {
    D(c, L);
    const f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = r.generateGcode(c.__wbg_ptr, f, b, t, n);
    var i = u[0], a = u[1];
    if (u[3]) throw i = 0, a = 0, d(u[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function Qn() {
  return r.getCompiledModule();
}
function Hn() {
  let c, e;
  try {
    const t = r.getPartsManifest();
    return c = t[0], e = t[1], m(t[0], t[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function Kn() {
  let c, e;
  try {
    const t = r.getSheetMetalBendTable();
    return c = t[0], e = t[1], m(t[0], t[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function $n() {
  let c, e;
  try {
    const t = r.getSheetMetalMaterials();
    return c = t[0], e = t[1], m(t[0], t[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function Zn(c) {
  let e, t;
  try {
    const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.getSheetMetalShopCatalog(n, _);
    return e = o[0], t = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function Xn() {
  const c = r.getSlicerPrinterProfiles();
  if (c[2]) throw d(c[1]);
  return d(c[0]);
}
function Yn() {
  let c, e;
  try {
    const t = r.get_anthropic_tools_json();
    return c = t[0], e = t[1], m(t[0], t[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function er(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.get_default_dfm_pack(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function tr() {
  let c, e;
  try {
    const t = r.get_kernel_version();
    return c = t[0], e = t[1], m(t[0], t[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function nr() {
  let c, e;
  try {
    const t = r.get_tool_schemas();
    return c = t[0], e = t[1], m(t[0], t[1]);
  } finally {
    r.__wbindgen_free(c, e, 1);
  }
}
function rr(c) {
  const e = N(c, r.__wbindgen_malloc), t = s, n = r.importStepBuffer(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function _r(c) {
  let e, t;
  try {
    const o = N(c, r.__wbindgen_malloc), i = s, a = r.importUrdfBuffer(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function or() {
  r.init();
}
function cr() {
  return r.initGpu();
}
function ir() {
  return r.isCamAvailable() !== 0;
}
function ar() {
  return r.isEcadAvailable() !== 0;
}
function sr() {
  return r.isEmbroideryAvailable() !== 0;
}
function lr() {
  return r.isGpuAvailable() !== 0;
}
function fr() {
  return r.isPhysicsAvailable() !== 0;
}
function br() {
  return r.isSlicerAvailable() !== 0;
}
function dr(c, e, t, n) {
  const _ = R(c, r.__wbindgen_malloc), o = s, i = T(e, r.__wbindgen_malloc), a = s, f = R(t, r.__wbindgen_malloc), b = s, u = T(n, r.__wbindgen_malloc), g = s, p = r.mesh_clearance(_, o, i, a, f, b, u, g);
  if (p[2]) throw d(p[1]);
  return d(p[0]);
}
function ur(c, e) {
  let t, n;
  try {
    const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.nestSheetMetalParts(_, o, i, a);
    return t = f[0], n = f[1], m(f[0], f[1]);
  } finally {
    r.__wbindgen_free(t, n, 1);
  }
}
function gr(c) {
  let e, t;
  try {
    const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.nestedSheetMetalDxf(n, _);
    return e = o[0], t = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function wr(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.neutronicsSimulate(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function mr(c, e, t) {
  const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
  var o = w(t) ? 0 : l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
  return r.offsetSectionMesh(c, n, _, o, i);
}
function pr(c, e) {
  D(c, v);
  const t = r.op_chamfer(c.__wbg_ptr, e);
  return v.__wrap(t);
}
function hr(c, e, t, n, _, o, i, a, f) {
  D(c, v);
  const b = r.op_circular_pattern(c.__wbg_ptr, e, t, n, _, o, i, a, f);
  return v.__wrap(b);
}
function yr(c, e) {
  D(c, v);
  const t = r.op_fillet(c.__wbg_ptr, e);
  return v.__wrap(t);
}
function vr(c, e, t, n, _, o) {
  D(c, v);
  const i = r.op_linear_pattern(c.__wbg_ptr, e, t, n, _, o);
  return v.__wrap(i);
}
function xr(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = r.op_loft(t, n, w(e) ? 16777215 : e ? 1 : 0);
  if (_[2]) throw d(_[1]);
  return v.__wrap(_[0]);
}
function Sr(c, e, t, n) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = B(e, r.__wbindgen_malloc), a = s, f = B(t, r.__wbindgen_malloc), b = s, u = r.op_revolve(_, o, i, a, f, b, n);
  if (u[2]) throw d(u[1]);
  return v.__wrap(u[0]);
}
function Ar(c, e) {
  D(c, v);
  const t = r.op_shell(c.__wbg_ptr, e);
  return v.__wrap(t);
}
function Pr(c, e, t, n, _, o, i, a, f, b, u) {
  const g = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = r.op_sweep_helix(g, p, e, t, n, _, !w(o), w(o) ? 0 : o, !w(i), w(i) ? 0 : i, !w(a), w(a) ? 0 : a, w(f) ? 4294967297 : f >>> 0, w(b) ? 4294967297 : b >>> 0, !w(u), w(u) ? 0 : u);
  if (h[2]) throw d(h[1]);
  return v.__wrap(h[0]);
}
function Dr(c, e, t, n, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = B(e, r.__wbindgen_malloc), u = s, g = B(t, r.__wbindgen_malloc), p = s, h = r.op_sweep_line(a, f, b, u, g, p, !w(n), w(n) ? 0 : n, !w(_), w(_) ? 0 : _, !w(o), w(o) ? 0 : o, !w(i), w(i) ? 0 : i);
  if (h[2]) throw d(h[1]);
  return v.__wrap(h[0]);
}
function Br(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.parseKicadPcb(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function Mr(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.parseVCode(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function Ir(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.parseVcadFile(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function Fr(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.particleOptimize(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function kr(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.particleSimulate(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function Tr(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.photonicsSimulate(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function Rr(c, e, t) {
  let n, _;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.plan_chat_tool(o, i, a, f, b, u);
    return n = g[0], _ = g[1], m(g[0], g[1]);
  } finally {
    r.__wbindgen_free(n, _, 1);
  }
}
function Cr(c, e, t, n) {
  const _ = R(c, r.__wbindgen_malloc), o = s, i = T(e, r.__wbindgen_malloc), a = s;
  return r.processGeometryGpu(_, o, i, a, t, n);
}
function Er(c, e) {
  const t = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
  return r.projectMesh(c, t, n);
}
function zr(c) {
  let e, t;
  try {
    const o = N(c, r.__wbindgen_malloc), i = s, a = r.readEmbroideryDst(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function Gr(c) {
  let e, t;
  try {
    const o = N(c, r.__wbindgen_malloc), i = s, a = r.readEmbroideryPes(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function Vr(c, e) {
  const t = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s, _ = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.recommendPrintSettings(t, n, _, o);
  if (i[2]) throw d(i[1]);
  return d(i[0]);
}
function Lr(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.renderBakeMesh(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function Or(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
  return r.renderBomTable(e, t);
}
function Wr(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s;
  return r.renderTitleBlock(e, t);
}
function Ur(c, e, t) {
  let n, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.render_pcb_svg(a, f, b, u, t);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, d(g[2]);
    return n = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(n, _, 1);
  }
}
function jr(c, e, t, n) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.render_pcb_svg_opts(f, b, u, g, t, p, h);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, d(y[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function qr(c, e) {
  let t, n;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = r.render_svg(i, a, e);
    var _ = f[0], o = f[1];
    if (f[3]) throw _ = 0, o = 0, d(f[2]);
    return t = _, n = o, m(_, o);
  } finally {
    r.__wbindgen_free(t, n, 1);
  }
}
function Nr(c, e, t, n, _, o) {
  let i, a;
  try {
    const u = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.render_svg_annotated(u, g, e, p, h, n, _, o);
    var f = y[0], b = y[1];
    if (y[3]) throw f = 0, b = 0, d(y[2]);
    return i = f, a = b, m(f, b);
  } finally {
    r.__wbindgen_free(i, a, 1);
  }
}
function Jr(c, e, t, n, _, o, i, a, f) {
  let b, u;
  try {
    const E = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _e = s, oe = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), ce = s;
    var g = w(n) ? 0 : l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = w(a) ? 0 : l(a, r.__wbindgen_malloc, r.__wbindgen_realloc), y = s, A = w(f) ? 0 : l(f, r.__wbindgen_malloc, r.__wbindgen_realloc), F = s;
    const U = r.render_svg_camera(E, _e, e, oe, ce, g, p, _, o, i, h, y, A, F);
    var I = U[0], z = U[1];
    if (U[3]) throw I = 0, z = 0, d(U[2]);
    return b = I, u = z, m(I, z);
  } finally {
    r.__wbindgen_free(b, u, 1);
  }
}
function Qr(c, e, t) {
  let n, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.render_svg_camera_opts(a, f, e, b, u);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, d(g[2]);
    return n = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(n, _, 1);
  }
}
function Hr(c, e, t) {
  let n, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, g = r.render_svg_view(a, f, e, b, u);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, d(g[2]);
    return n = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(n, _, 1);
  }
}
function Kr(c, e, t, n) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.render_svg_view_highlight(f, b, e, u, g, p, h);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, d(y[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function $r(c, e, t, n) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), h = s, y = r.render_svg_view_section(f, b, e, u, g, p, h);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, d(y[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function Zr(c, e, t) {
  const n = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
  var o = w(t) ? 0 : l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
  return r.sectionMesh(c, n, _, o, i);
}
function Xr(c) {
  let e, t;
  try {
    const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.sheetMetalFoldedStep(n, _);
    return e = o[0], t = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function Yr(c) {
  let e, t;
  try {
    const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = r.sheetMetalSequence(n, _);
    return e = o[0], t = o[1], m(o[0], o[1]);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function e_(c, e, t, n) {
  let _, o;
  try {
    const f = r.sketchCircleSegments(c, e, t, n);
    var i = f[0], a = f[1];
    if (f[3]) throw i = 0, a = 0, d(f[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function t_(c, e, t, n) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = r.sketchHitTest(_, o, e, t, n);
  if (i[2]) throw d(i[1]);
  return i[0];
}
function n_(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.sketchPlaneBasis(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function r_(c, e, t, n, _, o, i) {
  let a, f;
  try {
    const g = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = r.sketchPlaneIntersectRay(g, p, e, t, n, _, o, i);
    var b = h[0], u = h[1];
    if (h[3]) throw b = 0, u = 0, d(h[2]);
    return a = b, f = u, m(b, u);
  } finally {
    r.__wbindgen_free(a, f, 1);
  }
}
function __(c, e, t, n) {
  let _, o;
  try {
    const f = r.sketchRectangleSegments(c, e, t, n);
    var i = f[0], a = f[1];
    if (f[3]) throw i = 0, a = 0, d(f[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function o_(c, e, t, n, _, o, i) {
  let a, f;
  try {
    const g = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), p = s, h = r.sketchSnap(g, p, e, t, n, _, o, i);
    var b = h[0], u = h[1];
    if (h[3]) throw b = 0, u = 0, d(h[2]);
    return a = b, f = u, m(b, u);
  } finally {
    r.__wbindgen_free(a, f, 1);
  }
}
function c_(c, e, t) {
  let n, _;
  try {
    const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.sketchToWorld(a, f, e, t);
    var o = b[0], i = b[1];
    if (b[3]) throw o = 0, i = 0, d(b[2]);
    return n = o, _ = i, m(o, i);
  } finally {
    r.__wbindgen_free(n, _, 1);
  }
}
function i_(c, e, t, n) {
  let _, o;
  try {
    const f = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = r.sketchWorldToSketch(f, b, e, t, n);
    var i = u[0], a = u[1];
    if (u[3]) throw i = 0, a = 0, d(u[2]);
    return _ = i, o = a, m(i, a);
  } finally {
    r.__wbindgen_free(_, o, 1);
  }
}
function a_(c, e, t) {
  const n = R(c, r.__wbindgen_malloc), _ = s, o = T(e, r.__wbindgen_malloc), i = s;
  D(t, O);
  const a = r.sliceMesh(n, _, o, i, t.__wbg_ptr);
  if (a[2]) throw d(a[1]);
  return L.__wrap(a[0]);
}
function s_(c, e, t, n) {
  const _ = R(c, r.__wbindgen_malloc), o = s, i = T(e, r.__wbindgen_malloc), a = s;
  D(t, O);
  const f = r.sliceMeshWithProgress(_, o, i, a, t.__wbg_ptr, n);
  if (f[2]) throw d(f[1]);
  return L.__wrap(f[0]);
}
function l_(c, e, t) {
  D(c, v), D(e, O);
  const n = r.sliceSolid(c.__wbg_ptr, e.__wbg_ptr, w(t) ? 4294967297 : t >>> 0);
  if (n[2]) throw d(n[1]);
  return L.__wrap(n[0]);
}
function f_(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.solveForwardKinematics(e, t);
  if (n[2]) throw d(n[1]);
  return d(n[0]);
}
function b_(c, e) {
  let t, n;
  try {
    const i = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = r.solveSketchSegments(i, a, f, b);
    var _ = u[0], o = u[1];
    if (u[3]) throw _ = 0, o = 0, d(u[2]);
    return t = _, n = o, m(_, o);
  } finally {
    r.__wbindgen_free(t, n, 1);
  }
}
function d_(c, e, t, n, _) {
  const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
  var a = w(t) ? 0 : l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s;
  const b = r.textBounds(o, i, e, a, f, !w(n), w(n) ? 0 : n, !w(_), w(_) ? 0 : _);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function u_(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.thermalSolve(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function g_(c, e, t, n) {
  const _ = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s, i = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s, f = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), b = s, u = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), g = s, p = r.thermalSolveTransient(_, o, i, a, f, b, u, g);
  if (p[2]) throw d(p[1]);
  return d(p[0]);
}
function w_(c) {
  let e, t;
  try {
    const o = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = r.toVCode(o, i);
    var n = a[0], _ = a[1];
    if (a[3]) throw n = 0, _ = 0, d(a[2]);
    return e = n, t = _, m(n, _);
  } finally {
    r.__wbindgen_free(e, t, 1);
  }
}
function m_(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = l(e, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, a = l(t, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.toleranceAnalyze(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function p_(c, e, t, n, _, o, i) {
  const a = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), f = s, b = r.topologyOptimizeBox(a, f, e, t, n, _, o, i);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function h_(c, e, t) {
  const n = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, o = R(e, r.__wbindgen_malloc), i = s, a = T(t, r.__wbindgen_malloc), f = s, b = r.topologyOptimizeMesh(n, _, o, i, a, f);
  if (b[2]) throw d(b[1]);
  return d(b[0]);
}
function y_(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.writeEmbroideryDst(e, t);
  if (n[3]) throw d(n[2]);
  var _ = k(n[0], n[1]).slice();
  return r.__wbindgen_free(n[0], n[1] * 1, 1), _;
}
function v_(c) {
  const e = l(c, r.__wbindgen_malloc, r.__wbindgen_realloc), t = s, n = r.writeEmbroideryPes(e, t);
  if (n[3]) throw d(n[2]);
  var _ = k(n[0], n[1]).slice();
  return r.__wbindgen_free(n[0], n[1] * 1, 1), _;
}
function Re() {
  return { __proto__: null, "./vcad_kernel_wasm_bg.js": { __proto__: null, __wbg_Error_8c4e43fe74559d73: function(e, t) {
    return Error(m(e, t));
  }, __wbg_Number_04624de7d0e8332d: function(e) {
    return Number(e);
  }, __wbg_String_8f0eb39a4a4c2f66: function(e, t) {
    const n = String(t), _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    P().setInt32(e + 4, o, true), P().setInt32(e + 0, _, true);
  }, __wbg_Window_cf5b693340a7c469: function(e) {
    return e.Window;
  }, __wbg_WorkerGlobalScope_354364d1b0bd06e5: function(e) {
    return e.WorkerGlobalScope;
  }, __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: function(e) {
    const t = e, n = typeof t == "boolean" ? t : void 0;
    return w(n) ? 16777215 : n ? 1 : 0;
  }, __wbg___wbindgen_debug_string_0bc8482c6e3508ae: function(e, t) {
    const n = be(t), _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    P().setInt32(e + 4, o, true), P().setInt32(e + 0, _, true);
  }, __wbg___wbindgen_in_47fa6863be6f2f25: function(e, t) {
    return e in t;
  }, __wbg___wbindgen_is_function_0095a73b8b156f76: function(e) {
    return typeof e == "function";
  }, __wbg___wbindgen_is_null_ac34f5003991759a: function(e) {
    return e === null;
  }, __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: function(e) {
    const t = e;
    return typeof t == "object" && t !== null;
  }, __wbg___wbindgen_is_string_cd444516edc5b180: function(e) {
    return typeof e == "string";
  }, __wbg___wbindgen_is_undefined_9e4d92534c42d778: function(e) {
    return e === void 0;
  }, __wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811: function(e, t) {
    return e == t;
  }, __wbg___wbindgen_module_f6b8052d79c1cc16: function() {
    return de;
  }, __wbg___wbindgen_number_get_8ff4255516ccad3e: function(e, t) {
    const n = t, _ = typeof n == "number" ? n : void 0;
    P().setFloat64(e + 8, w(_) ? 0 : _, true), P().setInt32(e + 0, !w(_), true);
  }, __wbg___wbindgen_string_get_72fb696202c56729: function(e, t) {
    const n = t, _ = typeof n == "string" ? n : void 0;
    var o = w(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    P().setInt32(e + 4, i, true), P().setInt32(e + 0, o, true);
  }, __wbg___wbindgen_throw_be289d5034ed271b: function(e, t) {
    throw new Error(m(e, t));
  }, __wbg__wbg_cb_unref_d9b87ff7982e3b21: function(e) {
    e._wbg_cb_unref();
  }, __wbg_activeTexture_6f9a710514686c24: function(e, t) {
    e.activeTexture(t >>> 0);
  }, __wbg_activeTexture_7e39cb8fdf4b6d5a: function(e, t) {
    e.activeTexture(t >>> 0);
  }, __wbg_attachShader_32114efcf2744eb6: function(e, t, n) {
    e.attachShader(t, n);
  }, __wbg_attachShader_b36058e5c9eeaf54: function(e, t, n) {
    e.attachShader(t, n);
  }, __wbg_beginComputePass_90d5303e604970cb: function(e, t) {
    return e.beginComputePass(t);
  }, __wbg_beginQuery_0fdf154e1da0e73d: function(e, t, n) {
    e.beginQuery(t >>> 0, n);
  }, __wbg_beginRenderPass_9739520c601001c3: function(e, t) {
    return e.beginRenderPass(t);
  }, __wbg_bindAttribLocation_5cfc7fa688df5051: function(e, t, n, _, o) {
    e.bindAttribLocation(t, n >>> 0, m(_, o));
  }, __wbg_bindAttribLocation_ce78bfb13019dbe6: function(e, t, n, _, o) {
    e.bindAttribLocation(t, n >>> 0, m(_, o));
  }, __wbg_bindBufferRange_009d206fe9e4151e: function(e, t, n, _, o, i) {
    e.bindBufferRange(t >>> 0, n >>> 0, _, o, i);
  }, __wbg_bindBuffer_69a7a0b8f3f9b9cf: function(e, t, n) {
    e.bindBuffer(t >>> 0, n);
  }, __wbg_bindBuffer_c9068e8712a034f5: function(e, t, n) {
    e.bindBuffer(t >>> 0, n);
  }, __wbg_bindFramebuffer_031c73ba501cb8f6: function(e, t, n) {
    e.bindFramebuffer(t >>> 0, n);
  }, __wbg_bindFramebuffer_7815ca611abb057f: function(e, t, n) {
    e.bindFramebuffer(t >>> 0, n);
  }, __wbg_bindRenderbuffer_8a2aa4e3d1fb5443: function(e, t, n) {
    e.bindRenderbuffer(t >>> 0, n);
  }, __wbg_bindRenderbuffer_db37c1bac9ed4da0: function(e, t, n) {
    e.bindRenderbuffer(t >>> 0, n);
  }, __wbg_bindSampler_96f0e90e7bc31da9: function(e, t, n) {
    e.bindSampler(t >>> 0, n);
  }, __wbg_bindTexture_b2b7b1726a83f93e: function(e, t, n) {
    e.bindTexture(t >>> 0, n);
  }, __wbg_bindTexture_ec13ddcb9dc8e032: function(e, t, n) {
    e.bindTexture(t >>> 0, n);
  }, __wbg_bindVertexArrayOES_c2610602f7485b3f: function(e, t) {
    e.bindVertexArrayOES(t);
  }, __wbg_bindVertexArray_78220d1edb1d2382: function(e, t) {
    e.bindVertexArray(t);
  }, __wbg_blendColor_1d50ac87d9a2794b: function(e, t, n, _, o) {
    e.blendColor(t, n, _, o);
  }, __wbg_blendColor_e799d452ab2a5788: function(e, t, n, _, o) {
    e.blendColor(t, n, _, o);
  }, __wbg_blendEquationSeparate_1b12c43928cc7bc1: function(e, t, n) {
    e.blendEquationSeparate(t >>> 0, n >>> 0);
  }, __wbg_blendEquationSeparate_a8094fbec94cf80e: function(e, t, n) {
    e.blendEquationSeparate(t >>> 0, n >>> 0);
  }, __wbg_blendEquation_82202f34c4c00e50: function(e, t) {
    e.blendEquation(t >>> 0);
  }, __wbg_blendEquation_e9b99928ed1494ad: function(e, t) {
    e.blendEquation(t >>> 0);
  }, __wbg_blendFuncSeparate_95465944f788a092: function(e, t, n, _, o) {
    e.blendFuncSeparate(t >>> 0, n >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_blendFuncSeparate_f366c170c5097fbe: function(e, t, n, _, o) {
    e.blendFuncSeparate(t >>> 0, n >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_blendFunc_2ef59299d10c662d: function(e, t, n) {
    e.blendFunc(t >>> 0, n >>> 0);
  }, __wbg_blendFunc_446658e7231ab9c8: function(e, t, n) {
    e.blendFunc(t >>> 0, n >>> 0);
  }, __wbg_blitFramebuffer_d730a23ab4db248e: function(e, t, n, _, o, i, a, f, b, u, g) {
    e.blitFramebuffer(t, n, _, o, i, a, f, b, u >>> 0, g >>> 0);
  }, __wbg_bufferData_1be8450fab534758: function(e, t, n, _) {
    e.bufferData(t >>> 0, n, _ >>> 0);
  }, __wbg_bufferData_32d26eba0c74a53c: function(e, t, n, _) {
    e.bufferData(t >>> 0, n, _ >>> 0);
  }, __wbg_bufferData_52235e85894af988: function(e, t, n, _) {
    e.bufferData(t >>> 0, n, _ >>> 0);
  }, __wbg_bufferData_98f6c413a8f0f139: function(e, t, n, _) {
    e.bufferData(t >>> 0, n, _ >>> 0);
  }, __wbg_bufferSubData_33eebcc173094f6a: function(e, t, n, _) {
    e.bufferSubData(t >>> 0, n, _);
  }, __wbg_bufferSubData_3e902f031adf13fd: function(e, t, n, _) {
    e.bufferSubData(t >>> 0, n, _);
  }, __wbg_buffer_26d0910f3a5bc899: function(e) {
    return e.buffer;
  }, __wbg_call_389efe28435a9388: function() {
    return x(function(e, t) {
      return e.call(t);
    }, arguments);
  }, __wbg_call_4708e0c13bdc8e95: function() {
    return x(function(e, t, n) {
      return e.call(t, n);
    }, arguments);
  }, __wbg_call_e8c868596c950cf6: function() {
    return x(function(e, t, n, _, o) {
      return e.call(t, n, _, o);
    }, arguments);
  }, __wbg_clearBuffer_6164fc25d22b25cc: function(e, t, n, _) {
    e.clearBuffer(t, n, _);
  }, __wbg_clearBuffer_cfcaaf1fb2baa885: function(e, t, n) {
    e.clearBuffer(t, n);
  }, __wbg_clearBufferfv_ac87d92e2f45d80c: function(e, t, n, _, o) {
    e.clearBufferfv(t >>> 0, n, M(_, o));
  }, __wbg_clearBufferiv_69ff24bb52ec4c88: function(e, t, n, _, o) {
    e.clearBufferiv(t >>> 0, n, V(_, o));
  }, __wbg_clearBufferuiv_8ad59a8219aafaca: function(e, t, n, _, o) {
    e.clearBufferuiv(t >>> 0, n, G(_, o));
  }, __wbg_clearDepth_2b109f644a783a53: function(e, t) {
    e.clearDepth(t);
  }, __wbg_clearDepth_670099db422a4f91: function(e, t) {
    e.clearDepth(t);
  }, __wbg_clearStencil_5d243d0dff03c315: function(e, t) {
    e.clearStencil(t);
  }, __wbg_clearStencil_aa65955bb39d8c18: function(e, t) {
    e.clearStencil(t);
  }, __wbg_clear_4d801d0d054c3579: function(e, t) {
    e.clear(t >>> 0);
  }, __wbg_clear_7187030f892c5ca0: function(e, t) {
    e.clear(t >>> 0);
  }, __wbg_clientWaitSync_21865feaeb76a9a5: function(e, t, n, _) {
    return e.clientWaitSync(t, n >>> 0, _ >>> 0);
  }, __wbg_colorMask_177d9762658e5e28: function(e, t, n, _, o) {
    e.colorMask(t !== 0, n !== 0, _ !== 0, o !== 0);
  }, __wbg_colorMask_7a8dbc86e7376a9b: function(e, t, n, _, o) {
    e.colorMask(t !== 0, n !== 0, _ !== 0, o !== 0);
  }, __wbg_compileShader_63b824e86bb00b8f: function(e, t) {
    e.compileShader(t);
  }, __wbg_compileShader_94718a93495d565d: function(e, t) {
    e.compileShader(t);
  }, __wbg_compressedTexSubImage2D_215bb115facd5e48: function(e, t, n, _, o, i, a, f, b) {
    e.compressedTexSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b);
  }, __wbg_compressedTexSubImage2D_684350eb62830032: function(e, t, n, _, o, i, a, f, b) {
    e.compressedTexSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b);
  }, __wbg_compressedTexSubImage2D_d8fbae93bb8c4cc9: function(e, t, n, _, o, i, a, f, b, u) {
    e.compressedTexSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b, u);
  }, __wbg_compressedTexSubImage3D_16afa3a47bf1d979: function(e, t, n, _, o, i, a, f, b, u, g) {
    e.compressedTexSubImage3D(t >>> 0, n, _, o, i, a, f, b, u >>> 0, g);
  }, __wbg_compressedTexSubImage3D_778008a6293f15ab: function(e, t, n, _, o, i, a, f, b, u, g, p) {
    e.compressedTexSubImage3D(t >>> 0, n, _, o, i, a, f, b, u >>> 0, g, p);
  }, __wbg_configure_2414aed971d368cd: function(e, t) {
    e.configure(t);
  }, __wbg_copyBufferSubData_a4f9815861ff0ae9: function(e, t, n, _, o, i) {
    e.copyBufferSubData(t >>> 0, n >>> 0, _, o, i);
  }, __wbg_copyBufferToBuffer_1ba67191114656a1: function(e, t, n, _, o, i) {
    e.copyBufferToBuffer(t, n, _, o, i);
  }, __wbg_copyBufferToTexture_878d31d479e48f28: function(e, t, n, _) {
    e.copyBufferToTexture(t, n, _);
  }, __wbg_copyExternalImageToTexture_7878d196c0b60d39: function(e, t, n, _) {
    e.copyExternalImageToTexture(t, n, _);
  }, __wbg_copyTexSubImage2D_417a65926e3d2490: function(e, t, n, _, o, i, a, f, b) {
    e.copyTexSubImage2D(t >>> 0, n, _, o, i, a, f, b);
  }, __wbg_copyTexSubImage2D_91ebcd9cd1908265: function(e, t, n, _, o, i, a, f, b) {
    e.copyTexSubImage2D(t >>> 0, n, _, o, i, a, f, b);
  }, __wbg_copyTexSubImage3D_f62ef4c4eeb9a7dc: function(e, t, n, _, o, i, a, f, b, u) {
    e.copyTexSubImage3D(t >>> 0, n, _, o, i, a, f, b, u);
  }, __wbg_copyTextureToBuffer_6a8fe0e90f0a663d: function(e, t, n, _) {
    e.copyTextureToBuffer(t, n, _);
  }, __wbg_copyTextureToTexture_0a06a393d6726b4a: function(e, t, n, _) {
    e.copyTextureToTexture(t, n, _);
  }, __wbg_createBindGroupLayout_1d93b6d41c87ba9d: function(e, t) {
    return e.createBindGroupLayout(t);
  }, __wbg_createBindGroup_61cd07ec9d423432: function(e, t) {
    return e.createBindGroup(t);
  }, __wbg_createBuffer_26534c05e01b8559: function(e) {
    const t = e.createBuffer();
    return w(t) ? 0 : S(t);
  }, __wbg_createBuffer_963aa00d5fe859e4: function(e, t) {
    return e.createBuffer(t);
  }, __wbg_createBuffer_c4ec897aacc1b91c: function(e) {
    const t = e.createBuffer();
    return w(t) ? 0 : S(t);
  }, __wbg_createCommandEncoder_f0e1613e9a2dc1eb: function(e, t) {
    return e.createCommandEncoder(t);
  }, __wbg_createComputePipeline_b9616b9fe2f4eb2f: function(e, t) {
    return e.createComputePipeline(t);
  }, __wbg_createFramebuffer_41512c38358a41c4: function(e) {
    const t = e.createFramebuffer();
    return w(t) ? 0 : S(t);
  }, __wbg_createFramebuffer_b88ffa8e0fd262c4: function(e) {
    const t = e.createFramebuffer();
    return w(t) ? 0 : S(t);
  }, __wbg_createPipelineLayout_56c6cf983f892d2b: function(e, t) {
    return e.createPipelineLayout(t);
  }, __wbg_createProgram_98aaa91f7c81c5e2: function(e) {
    const t = e.createProgram();
    return w(t) ? 0 : S(t);
  }, __wbg_createProgram_9b7710a1f2701c2c: function(e) {
    const t = e.createProgram();
    return w(t) ? 0 : S(t);
  }, __wbg_createQuerySet_c14be802adf7c207: function(e, t) {
    return e.createQuerySet(t);
  }, __wbg_createQuery_7988050efd7e4c48: function(e) {
    const t = e.createQuery();
    return w(t) ? 0 : S(t);
  }, __wbg_createRenderBundleEncoder_8e4bdffea72f8c1f: function(e, t) {
    return e.createRenderBundleEncoder(t);
  }, __wbg_createRenderPipeline_079a88a0601fcce1: function(e, t) {
    return e.createRenderPipeline(t);
  }, __wbg_createRenderbuffer_1e567f2f4d461710: function(e) {
    const t = e.createRenderbuffer();
    return w(t) ? 0 : S(t);
  }, __wbg_createRenderbuffer_a601226a6a680dbe: function(e) {
    const t = e.createRenderbuffer();
    return w(t) ? 0 : S(t);
  }, __wbg_createSampler_da6bb96c9ffaaa27: function(e) {
    const t = e.createSampler();
    return w(t) ? 0 : S(t);
  }, __wbg_createSampler_ef5578990df3baf7: function(e, t) {
    return e.createSampler(t);
  }, __wbg_createShaderModule_17f451ea25cae47c: function(e, t) {
    return e.createShaderModule(t);
  }, __wbg_createShader_e3ac08ed8c5b14b2: function(e, t) {
    const n = e.createShader(t >>> 0);
    return w(n) ? 0 : S(n);
  }, __wbg_createShader_f2b928ca9a426b14: function(e, t) {
    const n = e.createShader(t >>> 0);
    return w(n) ? 0 : S(n);
  }, __wbg_createTexture_01cc1cd2fea732d9: function(e, t) {
    return e.createTexture(t);
  }, __wbg_createTexture_16d2c8a3d7d4a75a: function(e) {
    const t = e.createTexture();
    return w(t) ? 0 : S(t);
  }, __wbg_createTexture_f9451a82c7527ce2: function(e) {
    const t = e.createTexture();
    return w(t) ? 0 : S(t);
  }, __wbg_createVertexArrayOES_bd76ceee6ab9b95e: function(e) {
    const t = e.createVertexArrayOES();
    return w(t) ? 0 : S(t);
  }, __wbg_createVertexArray_ad5294951ae57497: function(e) {
    const t = e.createVertexArray();
    return w(t) ? 0 : S(t);
  }, __wbg_createView_04701884291e1ccc: function(e, t) {
    return e.createView(t);
  }, __wbg_cullFace_39500f654c67a205: function(e, t) {
    e.cullFace(t >>> 0);
  }, __wbg_cullFace_e7e711a14d2c3f48: function(e, t) {
    e.cullFace(t >>> 0);
  }, __wbg_deleteBuffer_22fcc93912cbf659: function(e, t) {
    e.deleteBuffer(t);
  }, __wbg_deleteBuffer_ab099883c168644d: function(e, t) {
    e.deleteBuffer(t);
  }, __wbg_deleteFramebuffer_8de1ca41ac87cfd9: function(e, t) {
    e.deleteFramebuffer(t);
  }, __wbg_deleteFramebuffer_9738f3bb85c1ab35: function(e, t) {
    e.deleteFramebuffer(t);
  }, __wbg_deleteProgram_9298fb3e3c1d3a78: function(e, t) {
    e.deleteProgram(t);
  }, __wbg_deleteProgram_f354e79b8cae8076: function(e, t) {
    e.deleteProgram(t);
  }, __wbg_deleteQuery_ea8bf1954febd774: function(e, t) {
    e.deleteQuery(t);
  }, __wbg_deleteRenderbuffer_096edada57729468: function(e, t) {
    e.deleteRenderbuffer(t);
  }, __wbg_deleteRenderbuffer_0f565f0727b341fc: function(e, t) {
    e.deleteRenderbuffer(t);
  }, __wbg_deleteSampler_c6b68c4071841afa: function(e, t) {
    e.deleteSampler(t);
  }, __wbg_deleteShader_aaf3b520a64d5d9d: function(e, t) {
    e.deleteShader(t);
  }, __wbg_deleteShader_ff70ca962883e241: function(e, t) {
    e.deleteShader(t);
  }, __wbg_deleteSync_c8e4a9c735f71d18: function(e, t) {
    e.deleteSync(t);
  }, __wbg_deleteTexture_2be78224e5584a8b: function(e, t) {
    e.deleteTexture(t);
  }, __wbg_deleteTexture_9d411c0e60ffa324: function(e, t) {
    e.deleteTexture(t);
  }, __wbg_deleteVertexArrayOES_197df47ef9684195: function(e, t) {
    e.deleteVertexArrayOES(t);
  }, __wbg_deleteVertexArray_7bc7f92769862f93: function(e, t) {
    e.deleteVertexArray(t);
  }, __wbg_depthFunc_eb3aa05361dd2eaa: function(e, t) {
    e.depthFunc(t >>> 0);
  }, __wbg_depthFunc_f670d4cbb9cd0913: function(e, t) {
    e.depthFunc(t >>> 0);
  }, __wbg_depthMask_103091329ca1a750: function(e, t) {
    e.depthMask(t !== 0);
  }, __wbg_depthMask_75a36d0065471a4b: function(e, t) {
    e.depthMask(t !== 0);
  }, __wbg_depthRange_337bf254e67639bb: function(e, t, n) {
    e.depthRange(t, n);
  }, __wbg_depthRange_5579d448b9d7de57: function(e, t, n) {
    e.depthRange(t, n);
  }, __wbg_destroy_35f94012e5bb9c17: function(e) {
    e.destroy();
  }, __wbg_destroy_767d9dde1008e293: function(e) {
    e.destroy();
  }, __wbg_destroy_c6af4226dda95dbd: function(e) {
    e.destroy();
  }, __wbg_disableVertexAttribArray_24a020060006b10f: function(e, t) {
    e.disableVertexAttribArray(t >>> 0);
  }, __wbg_disableVertexAttribArray_4bac633c27bae599: function(e, t) {
    e.disableVertexAttribArray(t >>> 0);
  }, __wbg_disable_7fe6fb3e97717f88: function(e, t) {
    e.disable(t >>> 0);
  }, __wbg_disable_bd37bdcca1764aea: function(e, t) {
    e.disable(t >>> 0);
  }, __wbg_dispatchWorkgroupsIndirect_8b25efab93a7a433: function(e, t, n) {
    e.dispatchWorkgroupsIndirect(t, n);
  }, __wbg_dispatchWorkgroups_c102fa81b955935d: function(e, t, n, _) {
    e.dispatchWorkgroups(t >>> 0, n >>> 0, _ >>> 0);
  }, __wbg_document_ee35a3d3ae34ef6c: function(e) {
    const t = e.document;
    return w(t) ? 0 : S(t);
  }, __wbg_done_57b39ecd9addfe81: function(e) {
    return e.done;
  }, __wbg_drawArraysInstancedANGLE_9e4cc507eae8b24d: function(e, t, n, _, o) {
    e.drawArraysInstancedANGLE(t >>> 0, n, _, o);
  }, __wbg_drawArraysInstanced_ec30adc616ec58d5: function(e, t, n, _, o) {
    e.drawArraysInstanced(t >>> 0, n, _, o);
  }, __wbg_drawArrays_075228181299b824: function(e, t, n, _) {
    e.drawArrays(t >>> 0, n, _);
  }, __wbg_drawArrays_2be89c369a29f30b: function(e, t, n, _) {
    e.drawArrays(t >>> 0, n, _);
  }, __wbg_drawBuffersWEBGL_447bc0a21f8ef22d: function(e, t) {
    e.drawBuffersWEBGL(t);
  }, __wbg_drawBuffers_5eccfaacc6560299: function(e, t) {
    e.drawBuffers(t);
  }, __wbg_drawElementsInstancedANGLE_6f9da0b845ac6c4e: function(e, t, n, _, o, i) {
    e.drawElementsInstancedANGLE(t >>> 0, n, _ >>> 0, o, i);
  }, __wbg_drawElementsInstanced_d41fc920ae24717c: function(e, t, n, _, o, i) {
    e.drawElementsInstanced(t >>> 0, n, _ >>> 0, o, i);
  }, __wbg_drawIndexedIndirect_34484fc6227c7bc8: function(e, t, n) {
    e.drawIndexedIndirect(t, n);
  }, __wbg_drawIndexedIndirect_5a7c30bb5f1d5b67: function(e, t, n) {
    e.drawIndexedIndirect(t, n);
  }, __wbg_drawIndexed_115af1449b52a948: function(e, t, n, _, o, i) {
    e.drawIndexed(t >>> 0, n >>> 0, _ >>> 0, o, i >>> 0);
  }, __wbg_drawIndexed_a587cce4c317791f: function(e, t, n, _, o, i) {
    e.drawIndexed(t >>> 0, n >>> 0, _ >>> 0, o, i >>> 0);
  }, __wbg_drawIndirect_036d71498a21f1a3: function(e, t, n) {
    e.drawIndirect(t, n);
  }, __wbg_drawIndirect_a1d7c5e893aa5756: function(e, t, n) {
    e.drawIndirect(t, n);
  }, __wbg_draw_5351b12033166aca: function(e, t, n, _, o) {
    e.draw(t >>> 0, n >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_draw_e2a7c5d66fb2d244: function(e, t, n, _, o) {
    e.draw(t >>> 0, n >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_enableVertexAttribArray_475e06c31777296d: function(e, t) {
    e.enableVertexAttribArray(t >>> 0);
  }, __wbg_enableVertexAttribArray_aa6e40408261eeb9: function(e, t) {
    e.enableVertexAttribArray(t >>> 0);
  }, __wbg_enable_d1ac04dfdd2fb3ae: function(e, t) {
    e.enable(t >>> 0);
  }, __wbg_enable_fee40f19b7053ea3: function(e, t) {
    e.enable(t >>> 0);
  }, __wbg_endQuery_54f0627d4c931318: function(e, t) {
    e.endQuery(t >>> 0);
  }, __wbg_end_0ac71677a5c1717a: function(e) {
    e.end();
  }, __wbg_end_6f776519f1faa582: function(e) {
    e.end();
  }, __wbg_error_7534b8e9a36f1ab4: function(e, t) {
    let n, _;
    try {
      n = e, _ = t, console.error(m(e, t));
    } finally {
      r.__wbindgen_free(n, _, 1);
    }
  }, __wbg_error_9a7fe3f932034cde: function(e) {
    console.error(e);
  }, __wbg_error_e98e6aadd08e0b94: function(e) {
    return e.error;
  }, __wbg_executeBundles_8e6c0614da2805d4: function(e, t) {
    e.executeBundles(t);
  }, __wbg_features_1b464383ea8a7691: function(e) {
    return e.features;
  }, __wbg_features_e5fbbc2760867852: function(e) {
    return e.features;
  }, __wbg_fenceSync_c52a4e24eabfa0d3: function(e, t, n) {
    const _ = e.fenceSync(t >>> 0, n >>> 0);
    return w(_) ? 0 : S(_);
  }, __wbg_finish_20711371c58df61c: function(e) {
    return e.finish();
  }, __wbg_finish_34b2c54329c8719f: function(e, t) {
    return e.finish(t);
  }, __wbg_finish_a9ab917e756ea00c: function(e, t) {
    return e.finish(t);
  }, __wbg_finish_e0a6c97c0622f843: function(e) {
    return e.finish();
  }, __wbg_framebufferRenderbuffer_850811ed6e26475e: function(e, t, n, _, o) {
    e.framebufferRenderbuffer(t >>> 0, n >>> 0, _ >>> 0, o);
  }, __wbg_framebufferRenderbuffer_cd9d55a68a2300ea: function(e, t, n, _, o) {
    e.framebufferRenderbuffer(t >>> 0, n >>> 0, _ >>> 0, o);
  }, __wbg_framebufferTexture2D_8adf6bdfc3c56dee: function(e, t, n, _, o, i) {
    e.framebufferTexture2D(t >>> 0, n >>> 0, _ >>> 0, o, i);
  }, __wbg_framebufferTexture2D_c283e928186aa542: function(e, t, n, _, o, i) {
    e.framebufferTexture2D(t >>> 0, n >>> 0, _ >>> 0, o, i);
  }, __wbg_framebufferTextureLayer_c8328828c8d5eb60: function(e, t, n, _, o, i) {
    e.framebufferTextureLayer(t >>> 0, n >>> 0, _, o, i);
  }, __wbg_framebufferTextureMultiviewOVR_16d049b41d692b91: function(e, t, n, _, o, i, a) {
    e.framebufferTextureMultiviewOVR(t >>> 0, n >>> 0, _, o, i, a);
  }, __wbg_frontFace_027e2ec7a7bc347c: function(e, t) {
    e.frontFace(t >>> 0);
  }, __wbg_frontFace_d4a6507ad2939b5c: function(e, t) {
    e.frontFace(t >>> 0);
  }, __wbg_getBindGroupLayout_4a94df6108ac6667: function(e, t) {
    return e.getBindGroupLayout(t >>> 0);
  }, __wbg_getBindGroupLayout_80e803d942962f6a: function(e, t) {
    return e.getBindGroupLayout(t >>> 0);
  }, __wbg_getBufferSubData_4fc54b4fbb1462d7: function(e, t, n, _) {
    e.getBufferSubData(t >>> 0, n, _);
  }, __wbg_getCompilationInfo_2af3ecdfeda551a3: function(e) {
    return e.getCompilationInfo();
  }, __wbg_getContext_2966500392030d63: function() {
    return x(function(e, t, n) {
      const _ = e.getContext(m(t, n));
      return w(_) ? 0 : S(_);
    }, arguments);
  }, __wbg_getContext_2a5764d48600bc43: function() {
    return x(function(e, t, n) {
      const _ = e.getContext(m(t, n));
      return w(_) ? 0 : S(_);
    }, arguments);
  }, __wbg_getContext_b28d2db7bd648242: function() {
    return x(function(e, t, n, _) {
      const o = e.getContext(m(t, n), _);
      return w(o) ? 0 : S(o);
    }, arguments);
  }, __wbg_getContext_de810d9f187f29ca: function() {
    return x(function(e, t, n, _) {
      const o = e.getContext(m(t, n), _);
      return w(o) ? 0 : S(o);
    }, arguments);
  }, __wbg_getCurrentTexture_5a79cda2ff36e1ee: function(e) {
    return e.getCurrentTexture();
  }, __wbg_getExtension_3c0cb5ae01bb4b17: function() {
    return x(function(e, t, n) {
      const _ = e.getExtension(m(t, n));
      return w(_) ? 0 : S(_);
    }, arguments);
  }, __wbg_getIndexedParameter_ca1693c768bc4934: function() {
    return x(function(e, t, n) {
      return e.getIndexedParameter(t >>> 0, n >>> 0);
    }, arguments);
  }, __wbg_getMappedRange_932dd043ae22ee0a: function(e, t, n) {
    return e.getMappedRange(t, n);
  }, __wbg_getParameter_1ecb910cfdd21f88: function() {
    return x(function(e, t) {
      return e.getParameter(t >>> 0);
    }, arguments);
  }, __wbg_getParameter_2e1f97ecaab76274: function() {
    return x(function(e, t) {
      return e.getParameter(t >>> 0);
    }, arguments);
  }, __wbg_getPreferredCanvasFormat_de73c02773a5209e: function(e) {
    const t = e.getPreferredCanvasFormat();
    return (Ne.indexOf(t) + 1 || 96) - 1;
  }, __wbg_getProgramInfoLog_2ffa30e3abb8b5c2: function(e, t, n) {
    const _ = t.getProgramInfoLog(n);
    var o = w(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    P().setInt32(e + 4, i, true), P().setInt32(e + 0, o, true);
  }, __wbg_getProgramInfoLog_dbfda4b6e7eb1b37: function(e, t, n) {
    const _ = t.getProgramInfoLog(n);
    var o = w(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    P().setInt32(e + 4, i, true), P().setInt32(e + 0, o, true);
  }, __wbg_getProgramParameter_43fbc6d2613c08b3: function(e, t, n) {
    return e.getProgramParameter(t, n >>> 0);
  }, __wbg_getProgramParameter_92e4540ca9da06b2: function(e, t, n) {
    return e.getProgramParameter(t, n >>> 0);
  }, __wbg_getQueryParameter_5d6af051438ae479: function(e, t, n) {
    return e.getQueryParameter(t, n >>> 0);
  }, __wbg_getRandomValues_9c5c1b115e142bb8: function() {
    return x(function(e, t) {
      globalThis.crypto.getRandomValues(k(e, t));
    }, arguments);
  }, __wbg_getShaderInfoLog_9991e9e77b0c6805: function(e, t, n) {
    const _ = t.getShaderInfoLog(n);
    var o = w(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    P().setInt32(e + 4, i, true), P().setInt32(e + 0, o, true);
  }, __wbg_getShaderInfoLog_9e0b96da4b13ae49: function(e, t, n) {
    const _ = t.getShaderInfoLog(n);
    var o = w(_) ? 0 : l(_, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
    P().setInt32(e + 4, i, true), P().setInt32(e + 0, o, true);
  }, __wbg_getShaderParameter_786fd84f85720ca8: function(e, t, n) {
    return e.getShaderParameter(t, n >>> 0);
  }, __wbg_getShaderParameter_afa4a3dd9dd397c1: function(e, t, n) {
    return e.getShaderParameter(t, n >>> 0);
  }, __wbg_getSupportedExtensions_57142a6b598d7787: function(e) {
    const t = e.getSupportedExtensions();
    return w(t) ? 0 : S(t);
  }, __wbg_getSupportedProfiles_1f728bc32003c4d0: function(e) {
    const t = e.getSupportedProfiles();
    return w(t) ? 0 : S(t);
  }, __wbg_getSyncParameter_7d11ab875b41617e: function(e, t, n) {
    return e.getSyncParameter(t, n >>> 0);
  }, __wbg_getUniformBlockIndex_1ee7e922e6d96d7e: function(e, t, n, _) {
    return e.getUniformBlockIndex(t, m(n, _));
  }, __wbg_getUniformLocation_71c070e6644669ad: function(e, t, n, _) {
    const o = e.getUniformLocation(t, m(n, _));
    return w(o) ? 0 : S(o);
  }, __wbg_getUniformLocation_d06b3a5b3c60e95c: function(e, t, n, _) {
    const o = e.getUniformLocation(t, m(n, _));
    return w(o) ? 0 : S(o);
  }, __wbg_get_9b94d73e6221f75c: function(e, t) {
    return e[t >>> 0];
  }, __wbg_get_b3ed3ad4be2bc8ac: function() {
    return x(function(e, t) {
      return Reflect.get(e, t);
    }, arguments);
  }, __wbg_get_d8db2ad31d529ff8: function(e, t) {
    const n = e[t >>> 0];
    return w(n) ? 0 : S(n);
  }, __wbg_get_with_ref_key_1dc361bd10053bfe: function(e, t) {
    return e[t];
  }, __wbg_gpu_87871e8f7ace8fee: function(e) {
    return e.gpu;
  }, __wbg_has_624cbf0451d880e8: function(e, t, n) {
    return e.has(m(t, n));
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
  }, __wbg_includes_32215c836f1cd3fb: function(e, t, n) {
    return e.includes(t, n);
  }, __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: function(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_GpuAdapter_0731153d2b08720b: function(e) {
    let t;
    try {
      t = e instanceof GPUAdapter;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_GpuCanvasContext_d14121c7bd72fcef: function(e) {
    let t;
    try {
      t = e instanceof GPUCanvasContext;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_GpuDeviceLostInfo_a3677ebb8241d800: function(e) {
    let t;
    try {
      t = e instanceof GPUDeviceLostInfo;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_GpuOutOfMemoryError_391d9a08edbfa04b: function(e) {
    let t;
    try {
      t = e instanceof GPUOutOfMemoryError;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_GpuValidationError_f4d803c383da3c92: function(e) {
    let t;
    try {
      t = e instanceof GPUValidationError;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_HtmlCanvasElement_3f2f6e1edb1c9792: function(e) {
    let t;
    try {
      t = e instanceof HTMLCanvasElement;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Object_1c6af87502b733ed: function(e) {
    let t;
    try {
      t = e instanceof Object;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Uint8Array_9b9075935c74707c: function(e) {
    let t;
    try {
      t = e instanceof Uint8Array;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240: function(e) {
    let t;
    try {
      t = e instanceof WebGL2RenderingContext;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_instanceof_Window_ed49b2db8df90359: function(e) {
    let t;
    try {
      t = e instanceof Window;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_invalidateFramebuffer_b17b7e1da3051745: function() {
    return x(function(e, t, n) {
      e.invalidateFramebuffer(t >>> 0, n);
    }, arguments);
  }, __wbg_isArray_d314bb98fcf08331: function(e) {
    return Array.isArray(e);
  }, __wbg_isSafeInteger_bfbc7332a9768d2a: function(e) {
    return Number.isSafeInteger(e);
  }, __wbg_is_f29129f676e5410c: function(e, t) {
    return Object.is(e, t);
  }, __wbg_iterator_6ff6560ca1568e55: function() {
    return Symbol.iterator;
  }, __wbg_label_2082ab37d2ad170d: function(e, t) {
    const n = t.label, _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    P().setInt32(e + 4, o, true), P().setInt32(e + 0, _, true);
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
  }, __wbg_linkProgram_6600dd2c0863bbfd: function(e, t) {
    e.linkProgram(t);
  }, __wbg_linkProgram_be6b825cf66d177b: function(e, t) {
    e.linkProgram(t);
  }, __wbg_log_6b5ca2e6124b2808: function(e) {
    console.log(e);
  }, __wbg_lost_6e4d29847ce2a34a: function(e) {
    return e.lost;
  }, __wbg_mapAsync_37f5e03edf2e1352: function(e, t, n, _) {
    return e.mapAsync(t >>> 0, n, _);
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
  }, __wbg_message_0762358e59db7ed6: function(e, t) {
    const n = t.message, _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    P().setInt32(e + 4, o, true), P().setInt32(e + 0, _, true);
  }, __wbg_message_7957ab09f64c6822: function(e, t) {
    const n = t.message, _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    P().setInt32(e + 4, o, true), P().setInt32(e + 0, _, true);
  }, __wbg_message_b163994503433c9e: function(e, t) {
    const n = t.message, _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    P().setInt32(e + 4, o, true), P().setInt32(e + 0, _, true);
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
  }, __wbg_new_b5d9e2fb389fef91: function(e, t) {
    try {
      var n = { a: e, b: t }, _ = (i, a) => {
        const f = n.a;
        n.a = 0;
        try {
          return We(f, n.b, i, a);
        } finally {
          n.a = f;
        }
      };
      return new Promise(_);
    } finally {
      n.a = n.b = 0;
    }
  }, __wbg_new_dca287b076112a51: function() {
    return /* @__PURE__ */ new Map();
  }, __wbg_new_dd2b680c8bf6ae29: function(e) {
    return new Uint8Array(e);
  }, __wbg_new_from_slice_132ef6dc5072cf68: function(e, t) {
    return new Float32Array(M(e, t));
  }, __wbg_new_from_slice_19d21922ff3c0ae6: function(e, t) {
    return new Uint32Array(G(e, t));
  }, __wbg_new_from_slice_a3d2629dc1826784: function(e, t) {
    return new Uint8Array(k(e, t));
  }, __wbg_new_no_args_1c7c842f08d00ebb: function(e, t) {
    return new Function(m(e, t));
  }, __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: function(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
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
  }, __wbg_pixelStorei_2a65936c11b710fe: function(e, t, n) {
    e.pixelStorei(t >>> 0, n);
  }, __wbg_pixelStorei_f7cc498f52d523f1: function(e, t, n) {
    e.pixelStorei(t >>> 0, n);
  }, __wbg_polygonOffset_24a8059deb03be92: function(e, t, n) {
    e.polygonOffset(t, n);
  }, __wbg_polygonOffset_4b3158d8ed028862: function(e, t, n) {
    e.polygonOffset(t, n);
  }, __wbg_popErrorScope_af0b22f136a861d6: function(e) {
    return e.popErrorScope();
  }, __wbg_prototypesetcall_bdcdcc5842e4d77d: function(e, t, n) {
    Uint8Array.prototype.set.call(k(e, t), n);
  }, __wbg_pushErrorScope_b52914ff10ba6ce3: function(e, t) {
    e.pushErrorScope(qe[t]);
  }, __wbg_push_8ffdcb2063340ba5: function(e, t) {
    return e.push(t);
  }, __wbg_queryCounterEXT_b578f07c30420446: function(e, t, n) {
    e.queryCounterEXT(t, n >>> 0);
  }, __wbg_querySelectorAll_1283aae52043a951: function() {
    return x(function(e, t, n) {
      return e.querySelectorAll(m(t, n));
    }, arguments);
  }, __wbg_querySelector_c3b0df2d58eec220: function() {
    return x(function(e, t, n) {
      const _ = e.querySelector(m(t, n));
      return w(_) ? 0 : S(_);
    }, arguments);
  }, __wbg_queueMicrotask_0aa0a927f78f5d98: function(e) {
    return e.queueMicrotask;
  }, __wbg_queueMicrotask_5bb536982f78a56f: function(e) {
    queueMicrotask(e);
  }, __wbg_queue_bea4017efaaf9904: function(e) {
    return e.queue;
  }, __wbg_readBuffer_9eb461d6857295f0: function(e, t) {
    e.readBuffer(t >>> 0);
  }, __wbg_readPixels_55b18304384e073d: function() {
    return x(function(e, t, n, _, o, i, a, f) {
      e.readPixels(t, n, _, o, i >>> 0, a >>> 0, f);
    }, arguments);
  }, __wbg_readPixels_6ea8e288a8673282: function() {
    return x(function(e, t, n, _, o, i, a, f) {
      e.readPixels(t, n, _, o, i >>> 0, a >>> 0, f);
    }, arguments);
  }, __wbg_readPixels_95b2464a7bb863a2: function() {
    return x(function(e, t, n, _, o, i, a, f) {
      e.readPixels(t, n, _, o, i >>> 0, a >>> 0, f);
    }, arguments);
  }, __wbg_reason_43acd39cce242b50: function(e) {
    const t = e.reason;
    return (je.indexOf(t) + 1 || 3) - 1;
  }, __wbg_renderbufferStorageMultisample_bc0ae08a7abb887a: function(e, t, n, _, o, i) {
    e.renderbufferStorageMultisample(t >>> 0, n, _ >>> 0, o, i);
  }, __wbg_renderbufferStorage_1bc02383614b76b2: function(e, t, n, _, o) {
    e.renderbufferStorage(t >>> 0, n >>> 0, _, o);
  }, __wbg_renderbufferStorage_6348154d30979c44: function(e, t, n, _, o) {
    e.renderbufferStorage(t >>> 0, n >>> 0, _, o);
  }, __wbg_requestAdapter_e6dcfac497cafa7a: function(e, t) {
    return e.requestAdapter(t);
  }, __wbg_requestDevice_03b802707d5a382c: function(e, t) {
    return e.requestDevice(t);
  }, __wbg_resolveQuerySet_811661fb23f3b699: function(e, t, n, _, o, i) {
    e.resolveQuerySet(t, n >>> 0, _ >>> 0, o, i >>> 0);
  }, __wbg_resolve_002c4b7d9d8f6b64: function(e) {
    return Promise.resolve(e);
  }, __wbg_samplerParameterf_f070d2b69b1e2d46: function(e, t, n, _) {
    e.samplerParameterf(t, n >>> 0, _);
  }, __wbg_samplerParameteri_8e4c4bcead0ee669: function(e, t, n, _) {
    e.samplerParameteri(t, n >>> 0, _);
  }, __wbg_scissor_2ff8f18f05a6d408: function(e, t, n, _, o) {
    e.scissor(t, n, _, o);
  }, __wbg_scissor_b870b1434a9c25b4: function(e, t, n, _, o) {
    e.scissor(t, n, _, o);
  }, __wbg_setBindGroup_62a3045b0921e429: function(e, t, n, _, o, i, a) {
    e.setBindGroup(t >>> 0, n, G(_, o), i, a >>> 0);
  }, __wbg_setBindGroup_6c0fd18e9a53a945: function(e, t, n) {
    e.setBindGroup(t >>> 0, n);
  }, __wbg_setBindGroup_7f3b61f1f482133b: function(e, t, n) {
    e.setBindGroup(t >>> 0, n);
  }, __wbg_setBindGroup_bf767a5aa46a33ce: function(e, t, n, _, o, i, a) {
    e.setBindGroup(t >>> 0, n, G(_, o), i, a >>> 0);
  }, __wbg_setBindGroup_c4aaff14063226b4: function(e, t, n, _, o, i, a) {
    e.setBindGroup(t >>> 0, n, G(_, o), i, a >>> 0);
  }, __wbg_setBindGroup_f82e771dc1b69093: function(e, t, n) {
    e.setBindGroup(t >>> 0, n);
  }, __wbg_setBlendConstant_016723821cfb3aa4: function(e, t) {
    e.setBlendConstant(t);
  }, __wbg_setIndexBuffer_286a40afdff411b7: function(e, t, n, _) {
    e.setIndexBuffer(t, ne[n], _);
  }, __wbg_setIndexBuffer_7efd0b7a40c65fb9: function(e, t, n, _, o) {
    e.setIndexBuffer(t, ne[n], _, o);
  }, __wbg_setIndexBuffer_e091a9673bb575e2: function(e, t, n, _) {
    e.setIndexBuffer(t, ne[n], _);
  }, __wbg_setIndexBuffer_f0759f00036f615f: function(e, t, n, _, o) {
    e.setIndexBuffer(t, ne[n], _, o);
  }, __wbg_setPipeline_ba92070b8ee81cf9: function(e, t) {
    e.setPipeline(t);
  }, __wbg_setPipeline_c344f76bae58c4d6: function(e, t) {
    e.setPipeline(t);
  }, __wbg_setPipeline_d76451c50a121598: function(e, t) {
    e.setPipeline(t);
  }, __wbg_setScissorRect_0b6ee0852ef0b6b9: function(e, t, n, _, o) {
    e.setScissorRect(t >>> 0, n >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_setStencilReference_34fd3d59673a5a9d: function(e, t) {
    e.setStencilReference(t >>> 0);
  }, __wbg_setVertexBuffer_06a90dc78e1ad9c4: function(e, t, n, _, o) {
    e.setVertexBuffer(t >>> 0, n, _, o);
  }, __wbg_setVertexBuffer_1540e9118b6c451d: function(e, t, n, _) {
    e.setVertexBuffer(t >>> 0, n, _);
  }, __wbg_setVertexBuffer_5166eedc06450701: function(e, t, n, _, o) {
    e.setVertexBuffer(t >>> 0, n, _, o);
  }, __wbg_setVertexBuffer_8621784e5014065b: function(e, t, n, _) {
    e.setVertexBuffer(t >>> 0, n, _);
  }, __wbg_setViewport_731ad30abb13f744: function(e, t, n, _, o, i, a) {
    e.setViewport(t, n, _, o, i, a);
  }, __wbg_set_1eb0999cf5d27fc8: function(e, t, n) {
    return e.set(t, n);
  }, __wbg_set_25cf9deff6bf0ea8: function(e, t, n) {
    e.set(t, n >>> 0);
  }, __wbg_set_3f1d0b984ed272ed: function(e, t, n) {
    e[t] = n;
  }, __wbg_set_6cb8631f80447a67: function() {
    return x(function(e, t, n) {
      return Reflect.set(e, t, n);
    }, arguments);
  }, __wbg_set_f43e577aea94465b: function(e, t, n) {
    e[t >>> 0] = n;
  }, __wbg_set_height_b386c0f603610637: function(e, t) {
    e.height = t >>> 0;
  }, __wbg_set_height_f21f985387070100: function(e, t) {
    e.height = t >>> 0;
  }, __wbg_set_onuncapturederror_19541466822d790b: function(e, t) {
    e.onuncapturederror = t;
  }, __wbg_set_width_7f07715a20503914: function(e, t) {
    e.width = t >>> 0;
  }, __wbg_set_width_d60bc4f2f20c56a4: function(e, t) {
    e.width = t >>> 0;
  }, __wbg_shaderSource_32425cfe6e5a1e52: function(e, t, n, _) {
    e.shaderSource(t, m(n, _));
  }, __wbg_shaderSource_8f4bda03f70359df: function(e, t, n, _) {
    e.shaderSource(t, m(n, _));
  }, __wbg_size_661bddb3f9898121: function(e) {
    return e.size;
  }, __wbg_stack_0ed75d68575b0f3c: function(e, t) {
    const n = t.stack, _ = l(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
    P().setInt32(e + 4, o, true), P().setInt32(e + 0, _, true);
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
  }, __wbg_stencilFuncSeparate_10d043d0af14366f: function(e, t, n, _, o) {
    e.stencilFuncSeparate(t >>> 0, n >>> 0, _, o >>> 0);
  }, __wbg_stencilFuncSeparate_1798f5cca257f313: function(e, t, n, _, o) {
    e.stencilFuncSeparate(t >>> 0, n >>> 0, _, o >>> 0);
  }, __wbg_stencilMaskSeparate_28d53625c02d9c7f: function(e, t, n) {
    e.stencilMaskSeparate(t >>> 0, n >>> 0);
  }, __wbg_stencilMaskSeparate_c24c1a28b8dd8a63: function(e, t, n) {
    e.stencilMaskSeparate(t >>> 0, n >>> 0);
  }, __wbg_stencilMask_0eca090c4c47f8f7: function(e, t) {
    e.stencilMask(t >>> 0);
  }, __wbg_stencilMask_732dcc5aada10e4c: function(e, t) {
    e.stencilMask(t >>> 0);
  }, __wbg_stencilOpSeparate_4657523b1d3b184f: function(e, t, n, _, o) {
    e.stencilOpSeparate(t >>> 0, n >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_stencilOpSeparate_de257f3c29e604cd: function(e, t, n, _, o) {
    e.stencilOpSeparate(t >>> 0, n >>> 0, _ >>> 0, o >>> 0);
  }, __wbg_submit_f635072bb3d05faa: function(e, t) {
    e.submit(t);
  }, __wbg_texImage2D_087ef94df78081f0: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u) {
      e.texImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b >>> 0, u);
    }, arguments);
  }, __wbg_texImage2D_e71049312f3172d9: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u) {
      e.texImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b >>> 0, u);
    }, arguments);
  }, __wbg_texImage3D_bd2b0bd2cfcdb278: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u, g) {
      e.texImage3D(t >>> 0, n, _, o, i, a, f, b >>> 0, u >>> 0, g);
    }, arguments);
  }, __wbg_texParameteri_0d45be2c88d6bad8: function(e, t, n, _) {
    e.texParameteri(t >>> 0, n >>> 0, _);
  }, __wbg_texParameteri_ec937d2161018946: function(e, t, n, _) {
    e.texParameteri(t >>> 0, n >>> 0, _);
  }, __wbg_texStorage2D_9504743abf5a986a: function(e, t, n, _, o, i) {
    e.texStorage2D(t >>> 0, n, _ >>> 0, o, i);
  }, __wbg_texStorage3D_e9e1b58fee218abe: function(e, t, n, _, o, i, a) {
    e.texStorage3D(t >>> 0, n, _ >>> 0, o, i, a);
  }, __wbg_texSubImage2D_117d29278542feb0: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u) {
      e.texSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_19ae4cadb809f264: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u) {
      e.texSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_5d270af600a7fc4a: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u) {
      e.texSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_bd034db2e58c352c: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u) {
      e.texSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_bf72e56edeeed376: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u) {
      e.texSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_d17a39cdec4a3495: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u) {
      e.texSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_e193f1d28439217c: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u) {
      e.texSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_edf5bd70fda3feaf: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u) {
      e.texSubImage2D(t >>> 0, n, _, o, i, a, f >>> 0, b >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage3D_1102c12a20bf56d5: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u, g, p) {
      e.texSubImage3D(t >>> 0, n, _, o, i, a, f, b, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_18d7f3c65567c885: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u, g, p) {
      e.texSubImage3D(t >>> 0, n, _, o, i, a, f, b, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_3b653017c4c5d721: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u, g, p) {
      e.texSubImage3D(t >>> 0, n, _, o, i, a, f, b, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_45591e5655d1ed5c: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u, g, p) {
      e.texSubImage3D(t >>> 0, n, _, o, i, a, f, b, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_47643556a8a4bf86: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u, g, p) {
      e.texSubImage3D(t >>> 0, n, _, o, i, a, f, b, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_59b8e24fb05787aa: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u, g, p) {
      e.texSubImage3D(t >>> 0, n, _, o, i, a, f, b, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_eff5cd6ab84f44ee: function() {
    return x(function(e, t, n, _, o, i, a, f, b, u, g, p) {
      e.texSubImage3D(t >>> 0, n, _, o, i, a, f, b, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_then_0d9fe2c7b1857d32: function(e, t, n) {
    return e.then(t, n);
  }, __wbg_then_b9e7b3b5f1a9e1b5: function(e, t) {
    return e.then(t);
  }, __wbg_type_c0d5d83032e9858a: function(e) {
    const t = e.type;
    return (Ue.indexOf(t) + 1 || 4) - 1;
  }, __wbg_uniform1f_b500ede5b612bea2: function(e, t, n) {
    e.uniform1f(t, n);
  }, __wbg_uniform1f_c148eeaf4b531059: function(e, t, n) {
    e.uniform1f(t, n);
  }, __wbg_uniform1i_9f3f72dbcb98ada9: function(e, t, n) {
    e.uniform1i(t, n);
  }, __wbg_uniform1i_e9aee4b9e7fe8c4b: function(e, t, n) {
    e.uniform1i(t, n);
  }, __wbg_uniform1ui_a0f911ff174715d0: function(e, t, n) {
    e.uniform1ui(t, n >>> 0);
  }, __wbg_uniform2fv_04c304b93cbf7f55: function(e, t, n, _) {
    e.uniform2fv(t, M(n, _));
  }, __wbg_uniform2fv_2fb47cfe06330cc7: function(e, t, n, _) {
    e.uniform2fv(t, M(n, _));
  }, __wbg_uniform2iv_095baf208f172131: function(e, t, n, _) {
    e.uniform2iv(t, V(n, _));
  }, __wbg_uniform2iv_ccf2ed44ac8e602e: function(e, t, n, _) {
    e.uniform2iv(t, V(n, _));
  }, __wbg_uniform2uiv_3030d7e769f5e82a: function(e, t, n, _) {
    e.uniform2uiv(t, G(n, _));
  }, __wbg_uniform3fv_aa35ef21e14d5469: function(e, t, n, _) {
    e.uniform3fv(t, M(n, _));
  }, __wbg_uniform3fv_c0872003729939a5: function(e, t, n, _) {
    e.uniform3fv(t, M(n, _));
  }, __wbg_uniform3iv_6aa2b0791e659d14: function(e, t, n, _) {
    e.uniform3iv(t, V(n, _));
  }, __wbg_uniform3iv_e912f444d4ff8269: function(e, t, n, _) {
    e.uniform3iv(t, V(n, _));
  }, __wbg_uniform3uiv_86941e7eeb8ee0a3: function(e, t, n, _) {
    e.uniform3uiv(t, G(n, _));
  }, __wbg_uniform4f_71ec75443e58cecc: function(e, t, n, _, o, i) {
    e.uniform4f(t, n, _, o, i);
  }, __wbg_uniform4f_f6b5e2024636033a: function(e, t, n, _, o, i) {
    e.uniform4f(t, n, _, o, i);
  }, __wbg_uniform4fv_498bd80dc5aa16ff: function(e, t, n, _) {
    e.uniform4fv(t, M(n, _));
  }, __wbg_uniform4fv_e6c73702e9a3be5c: function(e, t, n, _) {
    e.uniform4fv(t, M(n, _));
  }, __wbg_uniform4iv_375332584c65e61b: function(e, t, n, _) {
    e.uniform4iv(t, V(n, _));
  }, __wbg_uniform4iv_8a8219fda39dffd5: function(e, t, n, _) {
    e.uniform4iv(t, V(n, _));
  }, __wbg_uniform4uiv_046ee400bb80547d: function(e, t, n, _) {
    e.uniform4uiv(t, G(n, _));
  }, __wbg_uniformBlockBinding_1cf9fd2c49adf0f3: function(e, t, n, _) {
    e.uniformBlockBinding(t, n >>> 0, _ >>> 0);
  }, __wbg_uniformMatrix2fv_24430076c7afb5e3: function(e, t, n, _, o) {
    e.uniformMatrix2fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix2fv_e2806601f5b95102: function(e, t, n, _, o) {
    e.uniformMatrix2fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix2x3fv_a377326104a8faf4: function(e, t, n, _, o) {
    e.uniformMatrix2x3fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix2x4fv_b7a4d810e7a1cf7d: function(e, t, n, _, o) {
    e.uniformMatrix2x4fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix3fv_6f822361173d8046: function(e, t, n, _, o) {
    e.uniformMatrix3fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix3fv_b94a764c63aa6468: function(e, t, n, _, o) {
    e.uniformMatrix3fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix3x2fv_69a4cf0ce5b09f8b: function(e, t, n, _, o) {
    e.uniformMatrix3x2fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix3x4fv_cc72e31a1baaf9c9: function(e, t, n, _, o) {
    e.uniformMatrix3x4fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix4fv_0e724dbebd372526: function(e, t, n, _, o) {
    e.uniformMatrix4fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix4fv_923b55ad503fdc56: function(e, t, n, _, o) {
    e.uniformMatrix4fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix4x2fv_8c9fb646f3b90b63: function(e, t, n, _, o) {
    e.uniformMatrix4x2fv(t, n !== 0, M(_, o));
  }, __wbg_uniformMatrix4x3fv_ee0bed9a1330400d: function(e, t, n, _, o) {
    e.uniformMatrix4x3fv(t, n !== 0, M(_, o));
  }, __wbg_unmap_8c2e8131b2aaa844: function(e) {
    e.unmap();
  }, __wbg_usage_13caa02888040e9f: function(e) {
    return e.usage;
  }, __wbg_useProgram_e82c1a5f87d81579: function(e, t) {
    e.useProgram(t);
  }, __wbg_useProgram_fe720ade4d3b6edb: function(e, t) {
    e.useProgram(t);
  }, __wbg_valueOf_3c28600026e653c4: function(e) {
    return e.valueOf();
  }, __wbg_value_0546255b415e96c1: function(e) {
    return e.value;
  }, __wbg_vertexAttribDivisorANGLE_eaa3c29423ea6da4: function(e, t, n) {
    e.vertexAttribDivisorANGLE(t >>> 0, n >>> 0);
  }, __wbg_vertexAttribDivisor_744c0ca468594894: function(e, t, n) {
    e.vertexAttribDivisor(t >>> 0, n >>> 0);
  }, __wbg_vertexAttribIPointer_b9020d0c2e759912: function(e, t, n, _, o, i) {
    e.vertexAttribIPointer(t >>> 0, n, _ >>> 0, o, i);
  }, __wbg_vertexAttribPointer_75f6ff47f6c9f8cb: function(e, t, n, _, o, i, a) {
    e.vertexAttribPointer(t >>> 0, n, _ >>> 0, o !== 0, i, a);
  }, __wbg_vertexAttribPointer_adbd1853cce679ad: function(e, t, n, _, o, i, a) {
    e.vertexAttribPointer(t >>> 0, n, _ >>> 0, o !== 0, i, a);
  }, __wbg_videoHeight_a90b6b6ebd4132de: function(e) {
    return e.videoHeight;
  }, __wbg_videoWidth_4b450aa64c85eaa4: function(e) {
    return e.videoWidth;
  }, __wbg_viewport_174ae1c2209344ae: function(e, t, n, _, o) {
    e.viewport(t, n, _, o);
  }, __wbg_viewport_df236eac68bc7467: function(e, t, n, _, o) {
    e.viewport(t, n, _, o);
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
  }, __wbg_writeBuffer_5ca4981365eb5ac0: function(e, t, n, _, o, i) {
    e.writeBuffer(t, n, _, o, i);
  }, __wbg_writeTexture_246118eb2f5a1592: function(e, t, n, _, o) {
    e.writeTexture(t, n, _, o);
  }, __wbindgen_cast_0000000000000001: function(e, t) {
    return Te(e, t, r.wasm_bindgen_fdb3f87e5dacef0f___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wgpu_43013bc91c6d6b83___backend__webgpu__webgpu_sys__gen_GpuUncapturedErrorEvent__GpuUncapturedErrorEvent____Output_______, Le);
  }, __wbindgen_cast_0000000000000002: function(e, t) {
    return Te(e, t, r.wasm_bindgen_fdb3f87e5dacef0f___closure__destroy___dyn_core_9b3796e30d99ddb7___ops__function__FnMut__wasm_bindgen_fdb3f87e5dacef0f___JsValue____Output_______, Oe);
  }, __wbindgen_cast_0000000000000003: function(e) {
    return e;
  }, __wbindgen_cast_0000000000000004: function(e) {
    return e;
  }, __wbindgen_cast_0000000000000005: function(e, t) {
    return M(e, t);
  }, __wbindgen_cast_0000000000000006: function(e, t) {
    return Je(e, t);
  }, __wbindgen_cast_0000000000000007: function(e, t) {
    return V(e, t);
  }, __wbindgen_cast_0000000000000008: function(e, t) {
    return Qe(e, t);
  }, __wbindgen_cast_0000000000000009: function(e, t) {
    return He(e, t);
  }, __wbindgen_cast_000000000000000a: function(e, t) {
    return G(e, t);
  }, __wbindgen_cast_000000000000000b: function(e, t) {
    return k(e, t);
  }, __wbindgen_cast_000000000000000c: function(e, t) {
    return m(e, t);
  }, __wbindgen_cast_000000000000000d: function(e) {
    return BigInt.asUintN(64, e);
  }, __wbindgen_cast_000000000000000e: function(e, t) {
    var n = M(e, t).slice();
    return r.__wbindgen_free(e, t * 4, 4), n;
  }, __wbindgen_cast_000000000000000f: function(e, t) {
    var n = k(e, t).slice();
    return r.__wbindgen_free(e, t * 1, 1), n;
  }, __wbindgen_init_externref_table: function() {
    const e = r.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  } } };
}
function Le(c, e, t) {
  r.wasm_bindgen_fdb3f87e5dacef0f___convert__closures_____invoke___wgpu_43013bc91c6d6b83___backend__webgpu__webgpu_sys__gen_GpuUncapturedErrorEvent__GpuUncapturedErrorEvent_____(c, e, t);
}
function Oe(c, e, t) {
  r.wasm_bindgen_fdb3f87e5dacef0f___convert__closures_____invoke___wasm_bindgen_fdb3f87e5dacef0f___JsValue_____(c, e, t);
}
function We(c, e, t, n) {
  r.wasm_bindgen_fdb3f87e5dacef0f___convert__closures_____invoke___wasm_bindgen_fdb3f87e5dacef0f___JsValue__wasm_bindgen_fdb3f87e5dacef0f___JsValue_____(c, e, t, n);
}
const Ue = ["error", "warning", "info"], je = ["unknown", "destroyed"], qe = ["validation", "out-of-memory", "internal"], ne = ["uint16", "uint32"], Ne = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"], ye = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_circuitsim_free(c >>> 0, 1)), ve = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_mdsim_free(c >>> 0, 1)), xe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_physicssim_free(c >>> 0, 1)), Se = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_raytracer_free(c >>> 0, 1)), Ae = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_sliceresult_free(c >>> 0, 1)), ae = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_slicersettings_free(c >>> 0, 1)), Pe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_solid_free(c >>> 0, 1)), De = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_wasmannotationlayer_free(c >>> 0, 1)), se = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_wasmcamsettings_free(c >>> 0, 1)), le = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_wasmdocumentengine_free(c >>> 0, 1)), Be = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_wasmkeybindings_free(c >>> 0, 1)), Me = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => r.__wbg_wasmsketchsession_free(c >>> 0, 1));
function S(c) {
  const e = r.__externref_table_alloc();
  return r.__wbindgen_externrefs.set(e, c), e;
}
function D(c, e) {
  if (!(c instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
const Ie = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => c.dtor(c.a, c.b));
function be(c) {
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
    _ > 0 && (o += be(c[0]));
    for (let i = 1; i < _; i++) o += ", " + be(c[i]);
    return o += "]", o;
  }
  const t = /\[object ([^\]]+)\]/.exec(toString.call(c));
  let n;
  if (t && t.length > 1) n = t[1];
  else return toString.call(c);
  if (n == "Object") try {
    return "Object(" + JSON.stringify(c) + ")";
  } catch {
    return "Object";
  }
  return c instanceof Error ? `${c.name}: ${c.message}
${c.stack}` : n;
}
function M(c, e) {
  return c = c >>> 0, Ce().subarray(c / 4, c / 4 + e);
}
function Fe(c, e) {
  return c = c >>> 0, Ee().subarray(c / 8, c / 8 + e);
}
function Je(c, e) {
  return c = c >>> 0, Ke().subarray(c / 2, c / 2 + e);
}
function V(c, e) {
  return c = c >>> 0, $e().subarray(c / 4, c / 4 + e);
}
function Qe(c, e) {
  return c = c >>> 0, Ze().subarray(c / 1, c / 1 + e);
}
function ke(c, e) {
  c = c >>> 0;
  const t = P(), n = [];
  for (let _ = c; _ < c + 4 * e; _ += 4) n.push(r.__wbindgen_externrefs.get(t.getUint32(_, true)));
  return r.__externref_drop_slice(c, e), n;
}
function He(c, e) {
  return c = c >>> 0, Xe().subarray(c / 2, c / 2 + e);
}
function G(c, e) {
  return c = c >>> 0, ze().subarray(c / 4, c / 4 + e);
}
function k(c, e) {
  return c = c >>> 0, q().subarray(c / 1, c / 1 + e);
}
let W = null;
function P() {
  return (W === null || W.buffer.detached === true || W.buffer.detached === void 0 && W.buffer !== r.memory.buffer) && (W = new DataView(r.memory.buffer)), W;
}
let J = null;
function Ce() {
  return (J === null || J.byteLength === 0) && (J = new Float32Array(r.memory.buffer)), J;
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
function Ze() {
  return ($ === null || $.byteLength === 0) && ($ = new Int8Array(r.memory.buffer)), $;
}
function m(c, e) {
  return c = c >>> 0, tt(c, e);
}
let Z = null;
function Xe() {
  return (Z === null || Z.byteLength === 0) && (Z = new Uint16Array(r.memory.buffer)), Z;
}
let X = null;
function ze() {
  return (X === null || X.byteLength === 0) && (X = new Uint32Array(r.memory.buffer)), X;
}
let Y = null;
function q() {
  return (Y === null || Y.byteLength === 0) && (Y = new Uint8Array(r.memory.buffer)), Y;
}
function x(c, e) {
  try {
    return c.apply(this, e);
  } catch (t) {
    const n = S(t);
    r.__wbindgen_exn_store(n);
  }
}
function w(c) {
  return c == null;
}
function Te(c, e, t, n) {
  const _ = { a: c, b: e, cnt: 1, dtor: t }, o = (...i) => {
    _.cnt++;
    const a = _.a;
    _.a = 0;
    try {
      return n(a, _.b, ...i);
    } finally {
      _.a = a, o._wbg_cb_unref();
    }
  };
  return o._wbg_cb_unref = () => {
    --_.cnt === 0 && (_.dtor(_.a, _.b), _.a = 0, Ie.unregister(_));
  }, Ie.register(o, _, _), o;
}
function T(c, e) {
  const t = e(c.length * 4, 4) >>> 0;
  return ze().set(c, t / 4), s = c.length, t;
}
function N(c, e) {
  const t = e(c.length * 1, 1) >>> 0;
  return q().set(c, t / 1), s = c.length, t;
}
function R(c, e) {
  const t = e(c.length * 4, 4) >>> 0;
  return Ce().set(c, t / 4), s = c.length, t;
}
function B(c, e) {
  const t = e(c.length * 8, 8) >>> 0;
  return Ee().set(c, t / 8), s = c.length, t;
}
function Ye(c, e) {
  const t = e(c.length * 4, 4) >>> 0;
  for (let n = 0; n < c.length; n++) {
    const _ = S(c[n]);
    P().setUint32(t + 4 * n, _, true);
  }
  return s = c.length, t;
}
function l(c, e, t) {
  if (t === void 0) {
    const a = ee.encode(c), f = e(a.length, 1) >>> 0;
    return q().subarray(f, f + a.length).set(a), s = a.length, f;
  }
  let n = c.length, _ = e(n, 1) >>> 0;
  const o = q();
  let i = 0;
  for (; i < n; i++) {
    const a = c.charCodeAt(i);
    if (a > 127) break;
    o[_ + i] = a;
  }
  if (i !== n) {
    i !== 0 && (c = c.slice(i)), _ = t(_, n, n = i + c.length * 3, 1) >>> 0;
    const a = q().subarray(_ + i, _ + n), f = ee.encodeInto(c, a);
    i += f.written, _ = t(_, n, i, 1) >>> 0;
  }
  return s = i, _;
}
function d(c) {
  const e = r.__wbindgen_externrefs.get(c);
  return r.__externref_table_dealloc(c), e;
}
let re = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
re.decode();
const et = 2146435072;
let fe = 0;
function tt(c, e) {
  return fe += e, fe >= et && (re = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), re.decode(), fe = e), re.decode(q().subarray(c, c + e));
}
const ee = new TextEncoder();
"encodeInto" in ee || (ee.encodeInto = function(c, e) {
  const t = ee.encode(c);
  return e.set(t), { read: c.length, written: t.length };
});
let s = 0, de, r;
function Ge(c, e) {
  return r = c.exports, de = e, W = null, J = null, Q = null, H = null, K = null, $ = null, Z = null, X = null, Y = null, r.__wbindgen_start(), r;
}
async function nt(c, e) {
  if (typeof Response == "function" && c instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(c, e);
    } catch (_) {
      if (c.ok && t(c.type) && c.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _);
      else throw _;
    }
    const n = await c.arrayBuffer();
    return await WebAssembly.instantiate(n, e);
  } else {
    const n = await WebAssembly.instantiate(c, e);
    return n instanceof WebAssembly.Instance ? { instance: n, module: c } : n;
  }
  function t(n) {
    switch (n) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function x_(c) {
  if (r !== void 0) return r;
  c !== void 0 && (Object.getPrototypeOf(c) === Object.prototype ? { module: c } = c : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const e = Re();
  c instanceof WebAssembly.Module || (c = new WebAssembly.Module(c));
  const t = new WebAssembly.Instance(c, e);
  return Ge(t, c);
}
async function S_(c) {
  if (r !== void 0) return r;
  c !== void 0 && (Object.getPrototypeOf(c) === Object.prototype ? { module_or_path: c } = c : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), c === void 0 && (c = new URL("/vcad/v2026.07.20-3df4f3b/assets/vcad_kernel_wasm_bg-DqTSSv98.wasm", import.meta.url));
  const e = Re();
  (typeof c == "string" || typeof Request == "function" && c instanceof Request || typeof URL == "function" && c instanceof URL) && (c = fetch(c));
  const { instance: t, module: n } = await nt(await c, e);
  return Ge(t, n);
}
function A_() {
  r = void 0, de = void 0;
}
export {
  ue as CircuitSim,
  ge as MdSim,
  we as PhysicsSim,
  te as RayTracer,
  L as SliceResult,
  O as SlicerSettings,
  v as Solid,
  me as WasmAnnotationLayer,
  C as WasmCamSettings,
  j as WasmDocumentEngine,
  pe as WasmKeybindings,
  he as WasmSketchSession,
  A_ as __vcad_reset_wasm,
  rt as analyzeForPrinting,
  _t as analyzeStaticsBox,
  ot as analyzeStaticsMesh,
  ct as antennaAnalyze,
  it as atoms_build_receipt,
  at as atoms_homogenize,
  st as atoms_inspect,
  lt as atoms_minimize,
  ft as atoms_parse_xyz,
  bt as atoms_write_xyz,
  dt as buildPart,
  ut as build_chat_system_prompt,
  gt as camDropCutter,
  wt as camExportGcode,
  mt as camExportLinuxCnc,
  pt as camGenerateCircularPocket,
  ht as camGenerateContour,
  yt as camGenerateFace,
  vt as camGeneratePocket,
  xt as camGenerateRoughing3d,
  St as camGetDefaultTools,
  At as camToolpathStats,
  Pt as checkPrintability,
  Dt as checkSheetMetal,
  Bt as circuitAcResponse,
  Mt as circuitDcOperatingPoint,
  It as circuitFromSchematic,
  Ft as circuitSensitivities,
  kt as circuitTransient,
  Tt as circuitTune,
  Rt as computeCreasedNormalsGpu,
  Ct as computeMeshVolume,
  Et as costSheetMetal,
  zt as createDetailView,
  Gt as decimateMeshGpu,
  S_ as default,
  Vt as deriveParts,
  Lt as digitizeSketch,
  Ot as digitizeText,
  Wt as documentDiff,
  Ut as documentDiffApply,
  jt as documentDiffHuman,
  qt as documentMerge,
  Nt as documentParameterGradient,
  Jt as documentToLoon,
  Qt as documentToLoonChecked,
  Ht as drawingSheetToPdf,
  Kt as ecadAirgapFluxDensity,
  $t as ecadBuildReceipt,
  Zt as ecadBuiltinSymbols,
  Xt as ecadCheckDrc,
  Yt as ecadCheckDrcInRegion,
  en as ecadCheckErc,
  tn as ecadComponentMeshes,
  nn as ecadComputeRatsnest,
  rn as ecadCritiqueRoute,
  _n as ecadDfmCheck,
  on as ecadDfmDefaultPack,
  cn as ecadEvaluateMotor,
  an as ecadExportFab,
  sn as ecadFillZones,
  ln as ecadFindAlternatives,
  fn as ecadFootprintForName,
  bn as ecadGenerateNetlist,
  dn as ecadGetSymbol,
  un as ecadJellybeanManifest,
  gn as ecadLayerZ,
  wn as ecadLengthMatch,
  mn as ecadNetContinuity,
  pn as ecadNetForWire,
  hn as ecadPartsManifest,
  yn as ecadPcbPreviewMeshes,
  vn as ecadResolveFootprint,
  xn as ecadResolvePart,
  Sn as ecadResolvePartDef,
  An as ecadRouteAll,
  Pn as ecadRouteDiffPair,
  Dn as ecadRouteNet,
  Bn as ecadRouteNetMaze,
  Mn as ecadRouteNetShove,
  In as ecadSearchParts,
  Fn as ecadSnapToGridOrPin,
  kn as ecadVerifyReceipt,
  Tn as ecadVerifySubstitution,
  Rn as emSimulate,
  Cn as estimatePrintCost,
  En as estimate_cost_for_process,
  zn as evalVcadSource,
  Gn as evaluateDocument,
  Vn as evaluateSheetMetalChain,
  Ln as evaluateVCode,
  On as exportKicadPcb,
  Wn as exportKicadSch,
  Un as exportProjectedViewToDxf,
  jn as feaAnalyzeMesh,
  qn as generate3mf,
  Nn as generate3mfWithGcode,
  Jn as generateGcode,
  Qn as getCompiledModule,
  Hn as getPartsManifest,
  Kn as getSheetMetalBendTable,
  $n as getSheetMetalMaterials,
  Zn as getSheetMetalShopCatalog,
  Xn as getSlicerPrinterProfiles,
  Yn as get_anthropic_tools_json,
  er as get_default_dfm_pack,
  tr as get_kernel_version,
  nr as get_tool_schemas,
  rr as importStepBuffer,
  _r as importUrdfBuffer,
  or as init,
  cr as initGpu,
  x_ as initSync,
  ir as isCamAvailable,
  ar as isEcadAvailable,
  sr as isEmbroideryAvailable,
  lr as isGpuAvailable,
  fr as isPhysicsAvailable,
  br as isSlicerAvailable,
  dr as mesh_clearance,
  ur as nestSheetMetalParts,
  gr as nestedSheetMetalDxf,
  wr as neutronicsSimulate,
  mr as offsetSectionMesh,
  pr as op_chamfer,
  hr as op_circular_pattern,
  yr as op_fillet,
  vr as op_linear_pattern,
  xr as op_loft,
  Sr as op_revolve,
  Ar as op_shell,
  Pr as op_sweep_helix,
  Dr as op_sweep_line,
  Br as parseKicadPcb,
  Mr as parseVCode,
  Ir as parseVcadFile,
  Fr as particleOptimize,
  kr as particleSimulate,
  Tr as photonicsSimulate,
  Rr as plan_chat_tool,
  Cr as processGeometryGpu,
  Er as projectMesh,
  zr as readEmbroideryDst,
  Gr as readEmbroideryPes,
  Vr as recommendPrintSettings,
  Lr as renderBakeMesh,
  Or as renderBomTable,
  Wr as renderTitleBlock,
  Ur as render_pcb_svg,
  jr as render_pcb_svg_opts,
  qr as render_svg,
  Nr as render_svg_annotated,
  Jr as render_svg_camera,
  Qr as render_svg_camera_opts,
  Hr as render_svg_view,
  Kr as render_svg_view_highlight,
  $r as render_svg_view_section,
  Zr as sectionMesh,
  Xr as sheetMetalFoldedStep,
  Yr as sheetMetalSequence,
  e_ as sketchCircleSegments,
  t_ as sketchHitTest,
  n_ as sketchPlaneBasis,
  r_ as sketchPlaneIntersectRay,
  __ as sketchRectangleSegments,
  o_ as sketchSnap,
  c_ as sketchToWorld,
  i_ as sketchWorldToSketch,
  a_ as sliceMesh,
  s_ as sliceMeshWithProgress,
  l_ as sliceSolid,
  f_ as solveForwardKinematics,
  b_ as solveSketchSegments,
  d_ as textBounds,
  u_ as thermalSolve,
  g_ as thermalSolveTransient,
  w_ as toVCode,
  m_ as toleranceAnalyze,
  p_ as topologyOptimizeBox,
  h_ as topologyOptimizeMesh,
  y_ as writeEmbroideryDst,
  v_ as writeEmbroideryPes
};
