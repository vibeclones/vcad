class pe {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pe.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_circuitsim_free(e, 0);
  }
  dt() {
    return t.circuitsim_dt(this.__wbg_ptr);
  }
  constructor(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.circuitsim_new(n, _);
    if (r[2]) throw f(r[1]);
    return this.__wbg_ptr = r[0], Pe.register(this, this.__wbg_ptr, this), this;
  }
  observe() {
    const e = t.circuitsim_observe(this.__wbg_ptr);
    if (e[2]) throw f(e[1]);
    return f(e[0]);
  }
  reset() {
    t.circuitsim_reset(this.__wbg_ptr);
  }
  setValue(e, n) {
    t.circuitsim_setValue(this.__wbg_ptr, e, n);
  }
  step(e) {
    const n = t.circuitsim_step(this.__wbg_ptr, e);
    if (n[2]) throw f(n[1]);
    return f(n[0]);
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
    t.__wbg_mdsim_free(e, 0);
  }
  moleculeJson() {
    let e, n;
    try {
      const o = t.mdsim_moleculeJson(this.__wbg_ptr);
      var _ = o[0], r = o[1];
      if (o[3]) throw _ = 0, r = 0, f(o[2]);
      return e = _, n = r, m(_, r);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  constructor(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.mdsim_new(_, r, o, i);
    if (a[2]) throw f(a[1]);
    return this.__wbg_ptr = a[0], Me.register(this, this.__wbg_ptr, this), this;
  }
  observe() {
    let e, n;
    try {
      const o = t.mdsim_observe(this.__wbg_ptr);
      var _ = o[0], r = o[1];
      if (o[3]) throw _ = 0, r = 0, f(o[2]);
      return e = _, n = r, m(_, r);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  reset() {
    let e, n;
    try {
      const o = t.mdsim_reset(this.__wbg_ptr);
      var _ = o[0], r = o[1];
      if (o[3]) throw _ = 0, r = 0, f(o[2]);
      return e = _, n = r, m(_, r);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  run(e) {
    let n, _;
    try {
      const i = t.mdsim_run(this.__wbg_ptr, e);
      var r = i[0], o = i[1];
      if (i[3]) throw r = 0, o = 0, f(i[2]);
      return n = r, _ = o, m(r, o);
    } finally {
      t.__wbindgen_free(n, _, 1);
    }
  }
}
Symbol.dispose && (he.prototype[Symbol.dispose] = he.prototype.free);
class ye {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Fe.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_physicssim_free(e, 0);
  }
  actionDim() {
    return t.physicssim_actionDim(this.__wbg_ptr) >>> 0;
  }
  actuatedJointIds() {
    const e = t.physicssim_actuatedJointIds(this.__wbg_ptr);
    var n = Ge(e[0], e[1]);
    return t.__wbindgen_free(e[0], e[1] * 4, 4), n;
  }
  jointIds() {
    const e = t.physicssim_jointIds(this.__wbg_ptr);
    var n = Ge(e[0], e[1]);
    return t.__wbindgen_free(e[0], e[1] * 4, 4), n;
  }
  jointSlotCounts() {
    const e = t.physicssim_jointSlotCounts(this.__wbg_ptr);
    var n = W(e[0], e[1]).slice();
    return t.__wbindgen_free(e[0], e[1] * 4, 4), n;
  }
  constructor(e, n, _, r, o, i, a, b, d) {
    const u = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = sn(n, t.__wbindgen_malloc), h = s;
    var y = w(o) ? 0 : l(o, t.__wbindgen_malloc, t.__wbindgen_realloc), x = s;
    const I = t.physicssim_new(u, g, p, h, w(_) ? Number.MAX_SAFE_INTEGER : Math.fround(_), w(r) ? Number.MAX_SAFE_INTEGER : r >>> 0, y, x, w(i) ? 16777215 : i ? 1 : 0, !w(a), w(a) ? 0 : a, !w(b), w(b) ? 0 : b, !w(d), w(d) ? 0 : d);
    if (I[2]) throw f(I[1]);
    return this.__wbg_ptr = I[0], Fe.register(this, this.__wbg_ptr, this), this;
  }
  numJoints() {
    return t.physicssim_numJoints(this.__wbg_ptr) >>> 0;
  }
  observationDim() {
    return t.physicssim_observationDim(this.__wbg_ptr) >>> 0;
  }
  observe() {
    return t.physicssim_observe(this.__wbg_ptr);
  }
  resetSeeded(e) {
    return t.physicssim_resetSeeded(this.__wbg_ptr, e);
  }
  reset() {
    return t.physicssim_reset(this.__wbg_ptr);
  }
  setJointGains(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.physicssim_setJointGains(this.__wbg_ptr, n, _);
    if (r[1]) throw f(r[0]);
  }
  setMaxSteps(e) {
    t.physicssim_setMaxSteps(this.__wbg_ptr, e);
  }
  setSeed(e) {
    t.physicssim_setSeed(this.__wbg_ptr, e);
  }
  stepPosition(e) {
    const n = P(e, t.__wbindgen_malloc), _ = s;
    return t.physicssim_stepPosition(this.__wbg_ptr, n, _);
  }
  stepTorque(e) {
    const n = P(e, t.__wbindgen_malloc), _ = s;
    return t.physicssim_stepTorque(this.__wbg_ptr, n, _);
  }
  stepVelocity(e) {
    const n = P(e, t.__wbindgen_malloc), _ = s;
    return t.physicssim_stepVelocity(this.__wbg_ptr, n, _);
  }
}
Symbol.dispose && (ye.prototype[Symbol.dispose] = ye.prototype.free);
class _e {
  static __wrap(e) {
    const n = Object.create(_e.prototype);
    return n.__wbg_ptr = e, ke.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ke.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_raytracer_free(e, 0);
  }
  static canRaytrace(e) {
    return M(e, v), t.raytracer_canRaytrace(e.__wbg_ptr) !== 0;
  }
  clearScene() {
    t.raytracer_clearScene(this.__wbg_ptr);
  }
  static create() {
    const e = t.raytracer_create();
    if (e[2]) throw f(e[1]);
    return _e.__wrap(e[0]);
  }
  getDebugMode() {
    return t.raytracer_getDebugMode(this.__wbg_ptr) >>> 0;
  }
  getEdgeDetectionEnabled() {
    return t.raytracer_getEdgeDetectionEnabled(this.__wbg_ptr) !== 0;
  }
  getFrameIndex() {
    return t.raytracer_getFrameIndex(this.__wbg_ptr) >>> 0;
  }
  getRefineSamples() {
    return t.raytracer_getRefineSamples(this.__wbg_ptr) >>> 0;
  }
  hasScene() {
    return t.raytracer_hasScene(this.__wbg_ptr) !== 0;
  }
  pick(e, n, _, r, o, i, a, b) {
    const d = P(e, t.__wbindgen_malloc), u = s, g = P(n, t.__wbindgen_malloc), p = s, h = P(_, t.__wbindgen_malloc), y = s, x = t.raytracer_pick(this.__wbg_ptr, d, u, g, p, h, y, r, o, i, a, b);
    if (x[2]) throw f(x[1]);
    return x[0];
  }
  render(e, n, _, r, o, i) {
    const a = P(e, t.__wbindgen_malloc), b = s, d = P(n, t.__wbindgen_malloc), u = s, g = P(_, t.__wbindgen_malloc), p = s;
    return t.raytracer_render(this.__wbg_ptr, a, b, d, u, g, p, r, o, i);
  }
  resetAccumulation() {
    t.raytracer_resetAccumulation(this.__wbg_ptr);
  }
  setDebugMode(e) {
    t.raytracer_setDebugMode(this.__wbg_ptr, e);
  }
  setEdgeDetection(e, n, _) {
    t.raytracer_setEdgeDetection(this.__wbg_ptr, e, n, _);
  }
  setEdgeStyle(e, n, _, r, o, i, a, b, d, u, g, p, h, y, x, I, k, z, G) {
    t.raytracer_setEdgeStyle(this.__wbg_ptr, e, n, _, r, o, i, a, b, d, u, g, p, h, y, x, I, k, z, G);
  }
  setMaterialFromDef(e, n) {
    var _ = w(e) ? 0 : l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = w(n) ? 0 : P(n, t.__wbindgen_malloc), i = s;
    const a = t.raytracer_setMaterialFromDef(this.__wbg_ptr, _, r, o, i);
    if (a[1]) throw f(a[0]);
  }
  setMaterial(e, n, _, r, o) {
    const i = t.raytracer_setMaterial(this.__wbg_ptr, e, n, _, r, o);
    if (i[1]) throw f(i[0]);
  }
  setPathTrace(e, n) {
    t.raytracer_setPathTrace(this.__wbg_ptr, e, n);
  }
  setRefineSamples(e) {
    t.raytracer_setRefineSamples(this.__wbg_ptr, e);
  }
  setTheme(e) {
    t.raytracer_setTheme(this.__wbg_ptr, e);
  }
  uploadSolidWithMaterial(e, n, _, r, o, i) {
    M(e, v);
    const a = t.raytracer_uploadSolidWithMaterial(this.__wbg_ptr, e.__wbg_ptr, n, _, r, o, i);
    if (a[1]) throw f(a[0]);
  }
  uploadSolid(e) {
    M(e, v);
    const n = t.raytracer_uploadSolid(this.__wbg_ptr, e.__wbg_ptr);
    if (n[1]) throw f(n[0]);
  }
}
Symbol.dispose && (_e.prototype[Symbol.dispose] = _e.prototype.free);
class V {
  static __wrap(e) {
    const n = Object.create(V.prototype);
    return n.__wbg_ptr = e, Te.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Te.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_sliceresult_free(e, 0);
  }
  get filamentGrams() {
    return t.sliceresult_filamentGrams(this.__wbg_ptr);
  }
  get filamentMm() {
    return t.sliceresult_filamentMm(this.__wbg_ptr);
  }
  getLayerPreview(e) {
    const n = t.sliceresult_getLayerPreview(this.__wbg_ptr, e);
    if (n[2]) throw f(n[1]);
    return f(n[0]);
  }
  get layerCount() {
    return t.sliceresult_layerCount(this.__wbg_ptr) >>> 0;
  }
  get printTimeSeconds() {
    return t.sliceresult_printTimeSeconds(this.__wbg_ptr);
  }
  statsJson() {
    let e, n;
    try {
      const o = t.sliceresult_statsJson(this.__wbg_ptr);
      var _ = o[0], r = o[1];
      if (o[3]) throw _ = 0, r = 0, f(o[2]);
      return e = _, n = r, m(_, r);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
}
Symbol.dispose && (V.prototype[Symbol.dispose] = V.prototype.free);
class O {
  static __wrap(e) {
    const n = Object.create(O.prototype);
    return n.__wbg_ptr = e, fe.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, fe.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_slicersettings_free(e, 0);
  }
  get first_layer_height() {
    return t.__wbg_get_slicersettings_first_layer_height(this.__wbg_ptr);
  }
  get infill_density() {
    return t.__wbg_get_slicersettings_infill_density(this.__wbg_ptr);
  }
  get infill_pattern() {
    return t.__wbg_get_slicersettings_infill_pattern(this.__wbg_ptr) >>> 0;
  }
  get layer_height() {
    return t.__wbg_get_slicersettings_layer_height(this.__wbg_ptr);
  }
  get line_width() {
    return t.__wbg_get_slicersettings_line_width(this.__wbg_ptr);
  }
  get nozzle_diameter() {
    return t.__wbg_get_slicersettings_nozzle_diameter(this.__wbg_ptr);
  }
  get support_angle() {
    return t.__wbg_get_slicersettings_support_angle(this.__wbg_ptr);
  }
  get support_enabled() {
    return t.__wbg_get_slicersettings_support_enabled(this.__wbg_ptr) !== 0;
  }
  get wall_count() {
    return t.__wbg_get_slicersettings_wall_count(this.__wbg_ptr) >>> 0;
  }
  set first_layer_height(e) {
    t.__wbg_set_slicersettings_first_layer_height(this.__wbg_ptr, e);
  }
  set infill_density(e) {
    t.__wbg_set_slicersettings_infill_density(this.__wbg_ptr, e);
  }
  set infill_pattern(e) {
    t.__wbg_set_slicersettings_infill_pattern(this.__wbg_ptr, e);
  }
  set layer_height(e) {
    t.__wbg_set_slicersettings_layer_height(this.__wbg_ptr, e);
  }
  set line_width(e) {
    t.__wbg_set_slicersettings_line_width(this.__wbg_ptr, e);
  }
  set nozzle_diameter(e) {
    t.__wbg_set_slicersettings_nozzle_diameter(this.__wbg_ptr, e);
  }
  set support_angle(e) {
    t.__wbg_set_slicersettings_support_angle(this.__wbg_ptr, e);
  }
  set support_enabled(e) {
    t.__wbg_set_slicersettings_support_enabled(this.__wbg_ptr, e);
  }
  set wall_count(e) {
    t.__wbg_set_slicersettings_wall_count(this.__wbg_ptr, e);
  }
  static fromJson(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.slicersettings_fromJson(n, _);
    if (r[2]) throw f(r[1]);
    return O.__wrap(r[0]);
  }
  constructor() {
    const e = t.slicersettings_new();
    return this.__wbg_ptr = e, fe.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (O.prototype[Symbol.dispose] = O.prototype.free);
class v {
  static __wrap(e) {
    const n = Object.create(v.prototype);
    return n.__wbg_ptr = e, Ee.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ee.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_solid_free(e, 0);
  }
  boundaryEdges(e) {
    const n = t.solid_boundaryEdges(this.__wbg_ptr, w(e) ? Number.MAX_SAFE_INTEGER : e >>> 0);
    var _ = F(n[0], n[1]).slice();
    return t.__wbindgen_free(n[0], n[1] * 4, 4), _;
  }
  boundingBox() {
    const e = t.solid_boundingBox(this.__wbg_ptr);
    var n = we(e[0], e[1]).slice();
    return t.__wbindgen_free(e[0], e[1] * 8, 8), n;
  }
  canExportStep() {
    return t.solid_canExportStep(this.__wbg_ptr) !== 0;
  }
  centerOfMass() {
    const e = t.solid_centerOfMass(this.__wbg_ptr);
    var n = we(e[0], e[1]).slice();
    return t.__wbindgen_free(e[0], e[1] * 8, 8), n;
  }
  chamfer(e) {
    const n = t.solid_chamfer(this.__wbg_ptr, e);
    if (n[2]) throw f(n[1]);
    return v.__wrap(n[0]);
  }
  circularPattern(e, n, _, r, o, i, a, b) {
    const d = t.solid_circularPattern(this.__wbg_ptr, e, n, _, r, o, i, a, b);
    return v.__wrap(d);
  }
  clearance(e) {
    M(e, v);
    const n = t.solid_clearance(this.__wbg_ptr, e.__wbg_ptr);
    if (n[2]) throw f(n[1]);
    return f(n[0]);
  }
  static cone(e, n, _, r) {
    const o = t.solid_cone(e, n, _, w(r) ? Number.MAX_SAFE_INTEGER : r >>> 0);
    return v.__wrap(o);
  }
  static cube(e, n, _) {
    const r = t.solid_cube(e, n, _);
    return v.__wrap(r);
  }
  static cylinder(e, n, _) {
    const r = t.solid_cylinder(e, n, w(_) ? Number.MAX_SAFE_INTEGER : _ >>> 0);
    return v.__wrap(r);
  }
  difference(e) {
    M(e, v);
    const n = t.solid_difference(this.__wbg_ptr, e.__wbg_ptr);
    if (n[2]) throw f(n[1]);
    return v.__wrap(n[0]);
  }
  edgeBlend(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.solid_edgeBlend(this.__wbg_ptr, n, _);
    if (r[2]) throw f(r[1]);
    return v.__wrap(r[0]);
  }
  static empty() {
    const e = t.solid_empty();
    return v.__wrap(e);
  }
  static extrudeWithOptions(e, n, _, r) {
    const o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = P(n, t.__wbindgen_malloc), b = s, d = t.solid_extrudeWithOptions(o, i, a, b, _, r);
    if (d[2]) throw f(d[1]);
    return v.__wrap(d[0]);
  }
  static extrude(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = P(n, t.__wbindgen_malloc), i = s, a = t.solid_extrude(_, r, o, i);
    if (a[2]) throw f(a[1]);
    return v.__wrap(a[0]);
  }
  fillet(e) {
    const n = t.solid_fillet(this.__wbg_ptr, e);
    if (n[2]) throw f(n[1]);
    return v.__wrap(n[0]);
  }
  static fromRegisteredStep(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = t.solid_fromRegisteredStep(_, r, w(n) ? Number.MAX_SAFE_INTEGER : n >>> 0);
    if (o[2]) throw f(o[1]);
    return v.__wrap(o[0]);
  }
  getMesh(e) {
    return t.solid_getMesh(this.__wbg_ptr, w(e) ? Number.MAX_SAFE_INTEGER : e >>> 0);
  }
  horizontalSection(e, n, _, r) {
    return t.solid_horizontalSection(this.__wbg_ptr, e, !w(n), w(n) ? 0 : n, !w(_), w(_) ? 0 : _, w(r) ? Number.MAX_SAFE_INTEGER : r >>> 0);
  }
  intersection(e) {
    M(e, v);
    const n = t.solid_intersection(this.__wbg_ptr, e.__wbg_ptr);
    if (n[2]) throw f(n[1]);
    return v.__wrap(n[0]);
  }
  isEmpty() {
    return t.solid_isEmpty(this.__wbg_ptr) !== 0;
  }
  linearPattern(e, n, _, r, o) {
    const i = t.solid_linearPattern(this.__wbg_ptr, e, n, _, r, o);
    return v.__wrap(i);
  }
  static loft(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = t.solid_loft(_, r, w(n) ? 16777215 : n ? 1 : 0);
    if (o[2]) throw f(o[1]);
    return v.__wrap(o[0]);
  }
  mirror(e, n, _, r, o, i) {
    const a = t.solid_mirror(this.__wbg_ptr, e, n, _, r, o, i);
    return v.__wrap(a);
  }
  numTriangles() {
    return t.solid_numTriangles(this.__wbg_ptr) >>> 0;
  }
  static prism(e, n, _) {
    const r = t.solid_prism(e, n, _);
    return v.__wrap(r);
  }
  projectView(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s;
    return t.solid_projectView(this.__wbg_ptr, _, r, w(n) ? Number.MAX_SAFE_INTEGER : n >>> 0);
  }
  static revolve(e, n, _, r) {
    const o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = P(n, t.__wbindgen_malloc), b = s, d = P(_, t.__wbindgen_malloc), u = s, g = t.solid_revolve(o, i, a, b, d, u, r);
    if (g[2]) throw f(g[1]);
    return v.__wrap(g[0]);
  }
  rotate(e, n, _) {
    const r = t.solid_rotate(this.__wbg_ptr, e, n, _);
    return v.__wrap(r);
  }
  runDfm(e, n, _) {
    let r, o;
    try {
      const b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = t.solid_runDfm(this.__wbg_ptr, b, d, u, g, _);
      var i = p[0], a = p[1];
      if (p[3]) throw i = 0, a = 0, f(p[2]);
      return r = i, o = a, m(i, a);
    } finally {
      t.__wbindgen_free(r, o, 1);
    }
  }
  scale(e, n, _) {
    const r = t.solid_scale(this.__wbg_ptr, e, n, _);
    return v.__wrap(r);
  }
  sectionView(e, n, _) {
    const r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s;
    var i = w(n) ? 0 : l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s;
    return t.solid_sectionView(this.__wbg_ptr, r, o, i, a, w(_) ? Number.MAX_SAFE_INTEGER : _ >>> 0);
  }
  shell(e) {
    const n = t.solid_shell(this.__wbg_ptr, e);
    if (n[2]) throw f(n[1]);
    return v.__wrap(n[0]);
  }
  static sphere(e, n) {
    const _ = t.solid_sphere(e, w(n) ? Number.MAX_SAFE_INTEGER : n >>> 0);
    return v.__wrap(_);
  }
  surfaceArea() {
    return t.solid_surfaceArea(this.__wbg_ptr);
  }
  static sweepHelix(e, n, _, r, o, i, a, b, d, u, g) {
    const p = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), h = s, y = t.solid_sweepHelix(p, h, n, _, r, o, !w(i), w(i) ? 0 : i, !w(a), w(a) ? 0 : a, !w(b), w(b) ? 0 : b, w(d) ? Number.MAX_SAFE_INTEGER : d >>> 0, w(u) ? Number.MAX_SAFE_INTEGER : u >>> 0, !w(g), w(g) ? 0 : g);
    if (y[2]) throw f(y[1]);
    return v.__wrap(y[0]);
  }
  static sweepLine(e, n, _, r, o, i, a) {
    const b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = P(n, t.__wbindgen_malloc), g = s, p = P(_, t.__wbindgen_malloc), h = s, y = t.solid_sweepLine(b, d, u, g, p, h, !w(r), w(r) ? 0 : r, !w(o), w(o) ? 0 : o, !w(i), w(i) ? 0 : i, !w(a), w(a) ? 0 : a);
    if (y[2]) throw f(y[1]);
    return v.__wrap(y[0]);
  }
  static textExtrude(e, n, _, r, o, i, a, b, d, u) {
    const g = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = P(n, t.__wbindgen_malloc), y = s, x = P(_, t.__wbindgen_malloc), I = s, k = P(r, t.__wbindgen_malloc), z = s, G = P(o, t.__wbindgen_malloc), ce = s;
    var ie = w(a) ? 0 : l(a, t.__wbindgen_malloc, t.__wbindgen_realloc), ae = s, J = w(b) ? 0 : l(b, t.__wbindgen_malloc, t.__wbindgen_realloc), Ne = s;
    const se = t.solid_textExtrude(g, p, h, y, x, I, k, z, G, ce, i, ie, ae, J, Ne, !w(d), w(d) ? 0 : d, !w(u), w(u) ? 0 : u);
    if (se[2]) throw f(se[1]);
    return v.__wrap(se[0]);
  }
  toStepBuffer() {
    const e = t.solid_toStepBuffer(this.__wbg_ptr);
    if (e[3]) throw f(e[2]);
    var n = T(e[0], e[1]).slice();
    return t.__wbindgen_free(e[0], e[1] * 1, 1), n;
  }
  static torus(e, n, _) {
    const r = t.solid_torus(e, n, w(_) ? Number.MAX_SAFE_INTEGER : _ >>> 0);
    return v.__wrap(r);
  }
  translate(e, n, _) {
    const r = t.solid_translate(this.__wbg_ptr, e, n, _);
    return v.__wrap(r);
  }
  union(e) {
    M(e, v);
    const n = t.solid_union(this.__wbg_ptr, e.__wbg_ptr);
    if (n[2]) throw f(n[1]);
    return v.__wrap(n[0]);
  }
  volume() {
    return t.solid_volume(this.__wbg_ptr);
  }
  static wedge(e, n, _) {
    const r = t.solid_wedge(e, n, _);
    return v.__wrap(r);
  }
}
Symbol.dispose && (v.prototype[Symbol.dispose] = v.prototype.free);
class ve {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ie.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_wasmannotationlayer_free(e, 0);
  }
  addAlignedDimension(e, n, _, r, o) {
    t.wasmannotationlayer_addAlignedDimension(this.__wbg_ptr, e, n, _, r, o);
  }
  addAngleDimension(e, n, _, r, o, i, a) {
    t.wasmannotationlayer_addAngleDimension(this.__wbg_ptr, e, n, _, r, o, i, a);
  }
  addDiameterDimension(e, n, _, r) {
    t.wasmannotationlayer_addDiameterDimension(this.__wbg_ptr, e, n, _, r);
  }
  addHorizontalDimension(e, n, _, r, o) {
    t.wasmannotationlayer_addHorizontalDimension(this.__wbg_ptr, e, n, _, r, o);
  }
  addRadiusDimension(e, n, _, r) {
    t.wasmannotationlayer_addRadiusDimension(this.__wbg_ptr, e, n, _, r);
  }
  addVerticalDimension(e, n, _, r, o) {
    t.wasmannotationlayer_addVerticalDimension(this.__wbg_ptr, e, n, _, r, o);
  }
  annotationCount() {
    return t.wasmannotationlayer_annotationCount(this.__wbg_ptr) >>> 0;
  }
  clear() {
    t.wasmannotationlayer_clear(this.__wbg_ptr);
  }
  isEmpty() {
    return t.wasmannotationlayer_isEmpty(this.__wbg_ptr) !== 0;
  }
  constructor() {
    const e = t.wasmannotationlayer_new();
    return this.__wbg_ptr = e, Ie.register(this, this.__wbg_ptr, this), this;
  }
  renderAll(e) {
    var n = w(e) ? 0 : l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
    return t.wasmannotationlayer_renderAll(this.__wbg_ptr, n, _);
  }
}
Symbol.dispose && (ve.prototype[Symbol.dispose] = ve.prototype.free);
class R {
  static __wrap(e) {
    const n = Object.create(R.prototype);
    return n.__wbg_ptr = e, be.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, be.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_wasmcamsettings_free(e, 0);
  }
  get feed_rate() {
    return t.__wbg_get_wasmcamsettings_feed_rate(this.__wbg_ptr);
  }
  get plunge_rate() {
    return t.__wbg_get_wasmcamsettings_plunge_rate(this.__wbg_ptr);
  }
  get retract_z() {
    return t.__wbg_get_wasmcamsettings_retract_z(this.__wbg_ptr);
  }
  get safe_z() {
    return t.__wbg_get_wasmcamsettings_safe_z(this.__wbg_ptr);
  }
  get spindle_rpm() {
    return t.__wbg_get_wasmcamsettings_spindle_rpm(this.__wbg_ptr);
  }
  get stepdown() {
    return t.__wbg_get_wasmcamsettings_stepdown(this.__wbg_ptr);
  }
  get stepover() {
    return t.__wbg_get_wasmcamsettings_stepover(this.__wbg_ptr);
  }
  set feed_rate(e) {
    t.__wbg_set_wasmcamsettings_feed_rate(this.__wbg_ptr, e);
  }
  set plunge_rate(e) {
    t.__wbg_set_wasmcamsettings_plunge_rate(this.__wbg_ptr, e);
  }
  set retract_z(e) {
    t.__wbg_set_wasmcamsettings_retract_z(this.__wbg_ptr, e);
  }
  set safe_z(e) {
    t.__wbg_set_wasmcamsettings_safe_z(this.__wbg_ptr, e);
  }
  set spindle_rpm(e) {
    t.__wbg_set_wasmcamsettings_spindle_rpm(this.__wbg_ptr, e);
  }
  set stepdown(e) {
    t.__wbg_set_wasmcamsettings_stepdown(this.__wbg_ptr, e);
  }
  set stepover(e) {
    t.__wbg_set_wasmcamsettings_stepover(this.__wbg_ptr, e);
  }
  static fromJson(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.wasmcamsettings_fromJson(n, _);
    if (r[2]) throw f(r[1]);
    return R.__wrap(r[0]);
  }
  constructor() {
    const e = t.wasmcamsettings_new();
    return this.__wbg_ptr = e, be.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (R.prototype[Symbol.dispose] = R.prototype.free);
class j {
  static __wrap(e) {
    const n = Object.create(j.prototype);
    return n.__wbg_ptr = e, de.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, de.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_wasmdocumentengine_free(e, 0);
  }
  add_feature(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
    return t.wasmdocumentengine_add_feature(this.__wbg_ptr, n, _);
  }
  can_redo() {
    return t.wasmdocumentengine_can_redo(this.__wbg_ptr) !== 0;
  }
  can_undo() {
    return t.wasmdocumentengine_can_undo(this.__wbg_ptr) !== 0;
  }
  compute_position_between(e, n) {
    let _, r;
    try {
      const o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.wasmdocumentengine_compute_position_between(this.__wbg_ptr, o, i, a, b);
      return _ = d[0], r = d[1], m(d[0], d[1]);
    } finally {
      t.__wbindgen_free(_, r, 1);
    }
  }
  create_feature(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    return t.wasmdocumentengine_create_feature(this.__wbg_ptr, _, r, o, i);
  }
  delete_feature(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
    return t.wasmdocumentengine_delete_feature(this.__wbg_ptr, n, _);
  }
  delete_feature_by_id(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
    return t.wasmdocumentengine_delete_feature_by_id(this.__wbg_ptr, n, _);
  }
  static from_v1_json(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.wasmdocumentengine_from_v1_json(n, _);
    if (r[2]) throw f(r[1]);
    return j.__wrap(r[0]);
  }
  get_document_json() {
    let e, n;
    try {
      const _ = t.wasmdocumentengine_get_document_json(this.__wbg_ptr);
      return e = _[0], n = _[1], m(_[0], _[1]);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  get_ops_since(e) {
    let n, _;
    try {
      const r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.wasmdocumentengine_get_ops_since(this.__wbg_ptr, r, o);
      return n = i[0], _ = i[1], m(i[0], i[1]);
    } finally {
      t.__wbindgen_free(n, _, 1);
    }
  }
  get_ordered_features_json() {
    let e, n;
    try {
      const _ = t.wasmdocumentengine_get_ordered_features_json(this.__wbg_ptr);
      return e = _[0], n = _[1], m(_[0], _[1]);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  get_parts_json() {
    let e, n;
    try {
      const _ = t.wasmdocumentengine_get_parts_json(this.__wbg_ptr);
      return e = _[0], n = _[1], m(_[0], _[1]);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  get_sync_clock() {
    let e, n;
    try {
      const _ = t.wasmdocumentengine_get_sync_clock(this.__wbg_ptr);
      return e = _[0], n = _[1], m(_[0], _[1]);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  import_ir(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
    return t.wasmdocumentengine_import_ir(this.__wbg_ptr, n, _);
  }
  static load(e) {
    const n = C(e, t.__wbindgen_malloc), _ = s, r = t.wasmdocumentengine_load(n, _);
    if (r[2]) throw f(r[1]);
    return j.__wrap(r[0]);
  }
  merge_remote(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
    return t.wasmdocumentengine_merge_remote(this.__wbg_ptr, n, _);
  }
  move_feature(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    return t.wasmdocumentengine_move_feature(this.__wbg_ptr, _, r, o, i);
  }
  constructor() {
    const e = t.wasmdocumentengine_new();
    return this.__wbg_ptr = e, de.register(this, this.__wbg_ptr, this), this;
  }
  redo() {
    return t.wasmdocumentengine_redo(this.__wbg_ptr);
  }
  remapBindings(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.wasmdocumentengine_remapBindings(this.__wbg_ptr, n, _);
    if (r[2]) throw f(r[1]);
    return f(r[0]);
  }
  rename_feature(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    return t.wasmdocumentengine_rename_feature(this.__wbg_ptr, _, r, o, i);
  }
  save() {
    const e = t.wasmdocumentengine_save(this.__wbg_ptr);
    var n = T(e[0], e[1]).slice();
    return t.__wbindgen_free(e[0], e[1] * 1, 1), n;
  }
  set_joint_state(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s;
    return t.wasmdocumentengine_set_joint_state(this.__wbg_ptr, _, r, n);
  }
  set_material(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    return t.wasmdocumentengine_set_material(this.__wbg_ptr, _, r, o, i);
  }
  set_param(e, n, _) {
    const r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s;
    return t.wasmdocumentengine_set_param(this.__wbg_ptr, r, o, i, a, b, d);
  }
  set_rotation(e, n, _, r) {
    const o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    return t.wasmdocumentengine_set_rotation(this.__wbg_ptr, o, i, n, _, r);
  }
  set_scale(e, n, _, r) {
    const o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    return t.wasmdocumentengine_set_scale(this.__wbg_ptr, o, i, n, _, r);
  }
  set_translation(e, n, _, r) {
    const o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    return t.wasmdocumentengine_set_translation(this.__wbg_ptr, o, i, n, _, r);
  }
  set_visible(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s;
    return t.wasmdocumentengine_set_visible(this.__wbg_ptr, _, r, n);
  }
  undo() {
    return t.wasmdocumentengine_undo(this.__wbg_ptr);
  }
  update_feature(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    return t.wasmdocumentengine_update_feature(this.__wbg_ptr, _, r, o, i);
  }
}
Symbol.dispose && (j.prototype[Symbol.dispose] = j.prototype.free);
class Se {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Be.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_wasmkeybindings_free(e, 0);
  }
  chordFor(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.wasmkeybindings_chordFor(this.__wbg_ptr, n, _);
    let o;
    return r[0] !== 0 && (o = m(r[0], r[1]), t.__wbindgen_free(r[0], r[1] * 1, 1)), o;
  }
  commandsJson() {
    let e, n;
    try {
      const _ = t.wasmkeybindings_commandsJson(this.__wbg_ptr);
      return e = _[0], n = _[1], m(_[0], _[1]);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  conflictsJson(e) {
    let n, _;
    try {
      const r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.wasmkeybindings_conflictsJson(this.__wbg_ptr, r, o);
      return n = i[0], _ = i[1], m(i[0], i[1]);
    } finally {
      t.__wbindgen_free(n, _, 1);
    }
  }
  loadOverrides(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
    return t.wasmkeybindings_loadOverrides(this.__wbg_ptr, n, _) !== 0;
  }
  constructor() {
    const e = t.wasmkeybindings_new();
    return this.__wbg_ptr = e, Be.register(this, this.__wbg_ptr, this), this;
  }
  resetAll() {
    t.wasmkeybindings_resetAll(this.__wbg_ptr);
  }
  resolve(e, n, _) {
    const r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = t.wasmkeybindings_resolve(this.__wbg_ptr, r, o, i, a, _);
    let d;
    return b[0] !== 0 && (d = m(b[0], b[1]), t.__wbindgen_free(b[0], b[1] * 1, 1)), d;
  }
  saveOverrides() {
    let e, n;
    try {
      const _ = t.wasmkeybindings_saveOverrides(this.__wbg_ptr);
      return e = _[0], n = _[1], m(_[0], _[1]);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  setBinding(e, n) {
    const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s;
    var o = w(n) ? 0 : l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    t.wasmkeybindings_setBinding(this.__wbg_ptr, _, r, o, i);
  }
}
Symbol.dispose && (Se.prototype[Symbol.dispose] = Se.prototype.free);
class xe {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Re.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    t.__wbg_wasmsketchsession_free(e, 0);
  }
  addCircle(e, n, _) {
    t.wasmsketchsession_addCircle(this.__wbg_ptr, e, n, _);
  }
  addConstraint(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.wasmsketchsession_addConstraint(this.__wbg_ptr, n, _);
    if (r[1]) throw f(r[0]);
  }
  addLine(e, n, _, r) {
    t.wasmsketchsession_addLine(this.__wbg_ptr, e, n, _, r);
  }
  addRectangle(e, n, _, r) {
    t.wasmsketchsession_addRectangle(this.__wbg_ptr, e, n, _, r);
  }
  cancelPending() {
    t.wasmsketchsession_cancelPending(this.__wbg_ptr);
  }
  clearSelection() {
    t.wasmsketchsession_clearSelection(this.__wbg_ptr);
  }
  clear() {
    t.wasmsketchsession_clear(this.__wbg_ptr);
  }
  constructor(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.wasmsketchsession_new(n, _);
    if (r[2]) throw f(r[1]);
    return this.__wbg_ptr = r[0], Re.register(this, this.__wbg_ptr, this), this;
  }
  onClick() {
    let e, n;
    try {
      const _ = t.wasmsketchsession_onClick(this.__wbg_ptr);
      return e = _[0], n = _[1], m(_[0], _[1]);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  onCursorLeave() {
    t.wasmsketchsession_onCursorLeave(this.__wbg_ptr);
  }
  onCursorRay(e, n, _, r, o, i) {
    t.wasmsketchsession_onCursorRay(this.__wbg_ptr, e, n, _, r, o, i);
  }
  onCursorSketch(e, n) {
    t.wasmsketchsession_onCursorSketch(this.__wbg_ptr, e, n);
  }
  onDoubleClick() {
    t.wasmsketchsession_onDoubleClick(this.__wbg_ptr);
  }
  redo() {
    return t.wasmsketchsession_redo(this.__wbg_ptr) !== 0;
  }
  removeConstraint(e) {
    t.wasmsketchsession_removeConstraint(this.__wbg_ptr, e);
  }
  setSnap(e, n, _, r) {
    t.wasmsketchsession_setSnap(this.__wbg_ptr, e, n, _, r);
  }
  setTool(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
    t.wasmsketchsession_setTool(this.__wbg_ptr, n, _);
  }
  snapshot() {
    let e, n;
    try {
      const o = t.wasmsketchsession_snapshot(this.__wbg_ptr);
      var _ = o[0], r = o[1];
      if (o[3]) throw _ = 0, r = 0, f(o[2]);
      return e = _, n = r, m(_, r);
    } finally {
      t.__wbindgen_free(e, n, 1);
    }
  }
  solve() {
    return t.wasmsketchsession_solve(this.__wbg_ptr) !== 0;
  }
  toggleSelection(e) {
    t.wasmsketchsession_toggleSelection(this.__wbg_ptr, e);
  }
  undo() {
    return t.wasmsketchsession_undo(this.__wbg_ptr) !== 0;
  }
}
Symbol.dispose && (xe.prototype[Symbol.dispose] = xe.prototype.free);
function dn(c) {
  M(c, v);
  const e = t.analyzeForPrinting(c.__wbg_ptr);
  if (e[2]) throw f(e[1]);
  return f(e[0]);
}
function un(c, e, n, _, r, o, i) {
  const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.analyzeStaticsBox(a, b, e, n, _, r, o, i);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function gn(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = E(e, t.__wbindgen_malloc), i = s, a = B(n, t.__wbindgen_malloc), b = s, d = t.analyzeStaticsMesh(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function wn(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.antennaAnalyze(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function mn(c, e, n, _, r) {
  let o, i;
  try {
    const d = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), y = s, x = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), I = s, k = l(r, t.__wbindgen_malloc, t.__wbindgen_realloc), z = s, G = t.atoms_build_receipt(d, u, g, p, h, y, x, I, k, z);
    var a = G[0], b = G[1];
    if (G[3]) throw a = 0, b = 0, f(G[2]);
    return o = a, i = b, m(a, b);
  } finally {
    t.__wbindgen_free(o, i, 1);
  }
}
function pn(c, e) {
  let n, _;
  try {
    const i = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.atoms_homogenize(i, a, b, d);
    var r = u[0], o = u[1];
    if (u[3]) throw r = 0, o = 0, f(u[2]);
    return n = r, _ = o, m(r, o);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function hn(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.atoms_inspect(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function yn(c, e, n, _) {
  let r, o;
  try {
    const b = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = t.atoms_minimize(b, d, u, g, n, _);
    var i = p[0], a = p[1];
    if (p[3]) throw i = 0, a = 0, f(p[2]);
    return r = i, o = a, m(i, a);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function vn(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.atoms_parse_xyz(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function Sn(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.atoms_write_xyz(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function xn(c, e, n) {
  let _, r;
  try {
    const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = t.buildCalibrationReportJson(a, b, d, u, g, p);
    var o = h[0], i = h[1];
    if (h[3]) throw o = 0, i = 0, f(h[2]);
    return _ = o, r = i, m(o, i);
  } finally {
    t.__wbindgen_free(_, r, 1);
  }
}
function An(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = E(e, t.__wbindgen_malloc), i = s, a = B(n, t.__wbindgen_malloc), b = s, d = t.buildGlbBytes(_, r, o, i, a, b);
  if (d[3]) throw f(d[2]);
  var u = T(d[0], d[1]).slice();
  return t.__wbindgen_free(d[0], d[1] * 1, 1), u;
}
function Dn(c, e) {
  let n, _;
  try {
    const i = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.buildPart(i, a, b, d);
    var r = u[0], o = u[1];
    if (u[3]) throw r = 0, o = 0, f(u[2]);
    return n = r, _ = o, m(r, o);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function Pn(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = E(e, t.__wbindgen_malloc), i = s, a = B(n, t.__wbindgen_malloc), b = s, d = t.buildStlBytes(_, r, o, i, a, b);
  if (d[3]) throw f(d[2]);
  var u = T(d[0], d[1]).slice();
  return t.__wbindgen_free(d[0], d[1] * 1, 1), u;
}
function Mn(c, e) {
  let n, _;
  try {
    const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = t.build_chat_system_prompt(r, o, i, a);
    return n = b[0], _ = b[1], m(b[0], b[1]);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function Fn(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.calibrationDefaultTolerance(n, _, e);
  if (r[2]) throw f(r[1]);
  return r[0];
}
function kn(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.calibrationFingerprintDocument(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function Tn(c, e, n, _, r) {
  let o, i;
  try {
    const d = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), y = s, x = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), I = s, k = t.camDropCutter(d, u, g, p, h, y, x, I, r);
    var a = k[0], b = k[1];
    if (k[3]) throw a = 0, b = 0, f(k[2]);
    return o = a, i = b, m(a, b);
  } finally {
    t.__wbindgen_free(o, i, 1);
  }
}
function En(c, e, n, _) {
  let r, o;
  try {
    const b = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), h = s;
    M(_, R);
    const y = t.camExportGcode(b, d, u, g, p, h, _.__wbg_ptr);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, f(y[2]);
    return r = i, o = a, m(i, a);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function In(c, e, n, _, r) {
  let o, i;
  try {
    const d = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), y = s;
    M(_, R);
    const x = t.camExportLinuxCnc(d, u, g, p, h, y, _.__wbg_ptr, r);
    var a = x[0], b = x[1];
    if (x[3]) throw a = 0, b = 0, f(x[2]);
    return o = a, i = b, m(a, b);
  } finally {
    t.__wbindgen_free(o, i, 1);
  }
}
function Bn(c, e, n, _, r, o) {
  let i, a;
  try {
    const u = l(r, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s;
    M(o, R);
    const p = t.camGenerateCircularPocket(c, e, n, _, u, g, o.__wbg_ptr);
    var b = p[0], d = p[1];
    if (p[3]) throw b = 0, d = 0, f(p[2]);
    return i = b, a = d, m(b, d);
  } finally {
    t.__wbindgen_free(i, a, 1);
  }
}
function Rn(c, e, n, _, r, o, i, a, b, d, u) {
  let g, p;
  try {
    const x = l(d, t.__wbindgen_malloc, t.__wbindgen_realloc), I = s;
    M(u, R);
    const k = t.camGenerateContour(c, e, n, _, r, o, i, a, b, x, I, u.__wbg_ptr);
    var h = k[0], y = k[1];
    if (k[3]) throw h = 0, y = 0, f(k[2]);
    return g = h, p = y, m(h, y);
  } finally {
    t.__wbindgen_free(g, p, 1);
  }
}
function Cn(c, e, n, _, r, o, i) {
  let a, b;
  try {
    const g = l(o, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s;
    M(i, R);
    const h = t.camGenerateFace(c, e, n, _, r, g, p, i.__wbg_ptr);
    var d = h[0], u = h[1];
    if (h[3]) throw d = 0, u = 0, f(h[2]);
    return a = d, b = u, m(d, u);
  } finally {
    t.__wbindgen_free(a, b, 1);
  }
}
function Gn(c, e, n, _, r, o, i) {
  let a, b;
  try {
    const g = l(o, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s;
    M(i, R);
    const h = t.camGeneratePocket(c, e, n, _, r, g, p, i.__wbg_ptr);
    var d = h[0], u = h[1];
    if (h[3]) throw d = 0, u = 0, f(h[2]);
    return a = d, b = u, m(d, u);
  } finally {
    t.__wbindgen_free(a, b, 1);
  }
}
function zn(c, e, n, _, r, o, i) {
  let a, b;
  try {
    const g = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), y = s;
    M(n, R);
    const x = t.camGenerateRoughing3d(g, p, h, y, n.__wbg_ptr, _, r, o, i);
    var d = x[0], u = x[1];
    if (x[3]) throw d = 0, u = 0, f(x[2]);
    return a = d, b = u, m(d, u);
  } finally {
    t.__wbindgen_free(a, b, 1);
  }
}
function Ln() {
  let c, e;
  try {
    const r = t.camGetDefaultTools();
    var n = r[0], _ = r[1];
    if (r[3]) throw n = 0, _ = 0, f(r[2]);
    return c = n, e = _, m(n, _);
  } finally {
    t.__wbindgen_free(c, e, 1);
  }
}
function Wn(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.camToolpathStats(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function Vn(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.checkDesignConstraints(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function On(c, e) {
  M(c, v);
  const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.checkPrintability(c.__wbg_ptr, n, _);
  if (r[2]) throw f(r[1]);
  return f(r[0]);
}
function Nn(c, e) {
  let n, _;
  try {
    const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = t.checkSheetMetal(r, o, i, a);
    return n = b[0], _ = b[1], m(b[0], b[1]);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function Jn(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = P(n, t.__wbindgen_malloc), i = s, a = t.circuitAcResponse(_, r, e, o, i);
  if (a[2]) throw f(a[1]);
  return f(a[0]);
}
function Un(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.circuitDcOperatingPoint(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function jn(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.circuitFromSchematic(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function qn(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.circuitSensitivities(_, r, e, o, i);
  if (a[2]) throw f(a[1]);
  return f(a[0]);
}
function Xn(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = t.circuitTransient(_, r, e, n);
  if (o[2]) throw f(o[1]);
  return f(o[0]);
}
function Kn(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.circuitTune(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function Hn(c, e, n) {
  const _ = E(c, t.__wbindgen_malloc), r = s, o = B(e, t.__wbindgen_malloc), i = s;
  return t.computeCreasedNormalsGpu(_, r, o, i, n);
}
function Qn(c, e) {
  const n = E(c, t.__wbindgen_malloc), _ = s, r = B(e, t.__wbindgen_malloc), o = s, i = t.computeMeshProperties(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function $n(c, e) {
  const n = E(c, t.__wbindgen_malloc), _ = s, r = B(e, t.__wbindgen_malloc), o = s;
  return t.computeMeshVolume(n, _, r, o);
}
function Zn(c, e, n) {
  let _, r;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.costSheetMetal(o, i, a, b, n);
    return _ = d[0], r = d[1], m(d[0], d[1]);
  } finally {
    t.__wbindgen_free(_, r, 1);
  }
}
function Yn(c, e, n, _, r, o, i) {
  const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = l(i, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = t.createDetailView(a, b, e, n, _, r, o, d, u);
  if (g[2]) throw f(g[1]);
  return f(g[0]);
}
function et(c, e, n) {
  const _ = E(c, t.__wbindgen_malloc), r = s, o = B(e, t.__wbindgen_malloc), i = s;
  return t.decimateMeshGpu(_, r, o, i, n);
}
function nt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.deriveParts(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function tt(c, e) {
  let n, _;
  try {
    const i = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.digitizeSketch(i, a, b, d);
    var r = u[0], o = u[1];
    if (u[3]) throw r = 0, o = 0, f(u[2]);
    return n = r, _ = o, m(r, o);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function _t(c, e, n) {
  let _, r;
  try {
    const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = t.digitizeText(a, b, e, d, u);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, f(g[2]);
    return _ = o, r = i, m(o, i);
  } finally {
    t.__wbindgen_free(_, r, 1);
  }
}
function rt(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.documentDiff(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function ot(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.documentDiffApply(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function ct(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.documentDiffHuman(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function it(c, e, n, _) {
  const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s;
  var u = w(_) ? 0 : l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s;
  const p = t.documentMerge(r, o, i, a, b, d, u, g);
  if (p[2]) throw f(p[1]);
  return f(p[0]);
}
function at(c, e, n, _) {
  const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = t.documentParameterGradient(r, o, i, a, n, _);
  if (b[2]) throw f(b[1]);
  return f(b[0]);
}
function st(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.documentSensitivities(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function lt(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.documentToLoon(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function ft(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.documentToLoonChecked(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function bt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.documentToStepBuffer(e, n);
  if (_[3]) throw f(_[2]);
  var r = T(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 1, 1), r;
}
function dt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.drawingSheetToPdf(e, n);
  if (_[3]) throw f(_[2]);
  var r = T(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 1, 1), r;
}
function ut(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadAirgapFluxDensity(e, n);
  if (_[2]) throw f(_[1]);
  return _[0];
}
function gt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadAirgapSolve(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function wt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadBuildReceipt(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function mt() {
  const c = t.ecadBuiltinSymbols();
  if (c[2]) throw f(c[1]);
  return f(c[0]);
}
function pt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadCheckDrc(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function ht(c, e, n, _, r) {
  const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.ecadCheckDrcInRegion(o, i, e, n, _, r);
  if (a[2]) throw f(a[1]);
  return f(a[0]);
}
function yt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadCheckErc(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function vt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadComponentMeshes(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function St(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.ecadComputeRatsnest(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function xt(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.ecadCritiqueRoute(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function At(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.ecadDfmCheck(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function Dt(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.ecadDfmDefaultPack(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function Pt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadEvaluateMotor(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function Mt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadExportFab(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function Ft(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
  var r = w(e) ? 0 : l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s;
  const i = t.ecadFabPrep(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function kt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadFillZones(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function Tt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadFindAlternatives(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function Et(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.ecadFootprintForName(n, _, e);
  if (r[2]) throw f(r[1]);
  return f(r[0]);
}
function It(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadGenerateNetlist(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function Bt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadGetSymbol(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function Rt() {
  let c, e;
  try {
    const n = t.ecadJellybeanManifest();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    t.__wbindgen_free(c, e, 1);
  }
}
function Ct(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s;
  return t.ecadLayerZ(_, r, e, n);
}
function Gt(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.ecadLengthMatch(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function zt(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.ecadNetContinuity(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function Lt(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.ecadNetForWire(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function Wt() {
  let c, e;
  try {
    const n = t.ecadPartsManifest();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    t.__wbindgen_free(c, e, 1);
  }
}
function Vt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadPcbPreviewMeshes(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function Ot(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.ecadResolveFootprint(n, _, e);
  if (r[2]) throw f(r[1]);
  return f(r[0]);
}
function Nt(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.ecadResolvePart(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function Jt(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
  var r = w(e) ? 0 : l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s;
  const i = t.ecadResolvePartDef(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function Ut(c, e, n, _) {
  const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = t.ecadRouteAll(r, o, e, i, a, !w(_), w(_) ? 0 : _);
  if (b[2]) throw f(b[1]);
  return f(b[0]);
}
function jt(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.ecadRouteDiffPair(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function qt(c, e, n, _, r, o, i) {
  const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = t.ecadRouteNet(a, b, d, u, n, _, r, o, i);
  if (g[2]) throw f(g[1]);
  return f(g[0]);
}
function Xt(c, e, n, _, r, o, i, a) {
  const b = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), h = s, y = t.ecadRouteNetMaze(b, d, u, g, p, h, _, r, o, i, a);
  if (y[2]) throw f(y[1]);
  return f(y[0]);
}
function Kt(c, e, n, _, r, o, i) {
  const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = t.ecadRouteNetShove(a, b, d, u, n, _, r, o, i);
  if (g[2]) throw f(g[1]);
  return f(g[0]);
}
function Ht(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.ecadSearchParts(n, _, e);
  if (r[2]) throw f(r[1]);
  return f(r[0]);
}
function Qt(c, e, n, _, r) {
  const o = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.ecadSnapToGridOrPin(c, e, o, i, _, r);
  if (a[2]) throw f(a[1]);
  return f(a[0]);
}
function $t(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.ecadVerifyReceipt(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function Zt(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.ecadVerifySubstitution(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function Yt(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.emSimulate(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function e_(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.embroideryDesignToMesh(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function n_(c, e) {
  let n, _;
  try {
    const i = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.enclosure_component_extents(i, a, b, d);
    var r = u[0], o = u[1];
    if (u[3]) throw r = 0, o = 0, f(u[2]);
    return n = r, _ = o, m(r, o);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function t_(c, e) {
  let n, _;
  try {
    const i = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.enclosure_connectors(i, a, b, d);
    var r = u[0], o = u[1];
    if (u[3]) throw r = 0, o = 0, f(u[2]);
    return n = r, _ = o, m(r, o);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function __(c, e, n) {
  let _, r;
  try {
    const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = t.enclosure_derive_board(a, b, d, u, g, p);
    var o = h[0], i = h[1];
    if (h[3]) throw o = 0, i = 0, f(h[2]);
    return _ = o, r = i, m(o, i);
  } finally {
    t.__wbindgen_free(_, r, 1);
  }
}
function r_(c, e) {
  let n, _;
  try {
    const i = P(c, t.__wbindgen_malloc), a = s, b = B(e, t.__wbindgen_malloc), d = s, u = t.enclosure_features(i, a, b, d);
    var r = u[0], o = u[1];
    if (u[3]) throw r = 0, o = 0, f(u[2]);
    return n = r, _ = o, m(r, o);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function o_(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.enclosure_fit(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function c_(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.enclosure_mounting_holes(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function i_(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.enclosure_outline_aabb(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function a_(c, e, n, _) {
  let r, o;
  try {
    const b = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.enclosure_to_world(c, e, n, b, d);
    var i = u[0], a = u[1];
    if (u[3]) throw i = 0, a = 0, f(u[2]);
    return r = i, o = a, m(i, a);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function s_(c, e, n, _, r) {
  const o = l(r, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.estimatePrintCost(c, e, n, _, o, i);
  if (a[2]) throw f(a[1]);
  return f(a[0]);
}
function l_(c, e, n, _, r, o) {
  const i = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.estimate_cost_for_process(i, a, b, d, n, _, r, o);
  if (u[2]) throw f(u[1]);
  return f(u[0]);
}
function f_(c, e, n) {
  const _ = t.eulerXyzDegToQuat(c, e, n);
  var r = we(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 8, 8), r;
}
function b_(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.evalVcadSource(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function d_(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
  var r = w(e) ? 0 : l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s;
  const i = t.evalVcadSourceParametric(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function u_(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.evalVcadSourceWithModules(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function g_(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.evaluateDocument(n, _, e);
  if (r[2]) throw f(r[1]);
  return f(r[0]);
}
function w_(c) {
  let e, n;
  try {
    const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = t.evaluateSheetMetalChain(_, r);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function m_(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.evaluateVCode(e, n);
  if (_[2]) throw f(_[1]);
  return v.__wrap(_[0]);
}
function p_(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.exportKicadPcb(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function h_(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.exportKicadProject(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function y_(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.exportKicadSch(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function v_(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.exportProjectedViewToDxf(e, n);
  if (_[3]) throw f(_[2]);
  var r = T(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 1, 1), r;
}
function S_(c, e) {
  const n = t.exprEvalAst(c, e);
  if (n[2]) throw f(n[1]);
  return n[0];
}
function x_(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.exprEvaluate(n, _, e);
  if (r[2]) throw f(r[1]);
  return r[0];
}
function A_(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.exprParse(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function D_(c, e, n, _) {
  const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = E(n, t.__wbindgen_malloc), d = s, u = B(_, t.__wbindgen_malloc), g = s, p = t.feaAnalyzeMesh(r, o, i, a, b, d, u, g);
  if (p[2]) throw f(p[1]);
  return f(p[0]);
}
function P_(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.feaCheckBeam(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function M_(c) {
  let e, n;
  try {
    const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = t.flattenSolidToSheetMetal(_, r);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function F_(c, e, n, _) {
  const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = E(e, t.__wbindgen_malloc), a = s, b = B(n, t.__wbindgen_malloc), d = s, u = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = t.generate3mf(r, o, i, a, b, d, u, g);
  if (p[3]) throw f(p[2]);
  var h = T(p[0], p[1]).slice();
  return t.__wbindgen_free(p[0], p[1] * 1, 1), h;
}
function k_(c, e, n, _, r) {
  const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = E(e, t.__wbindgen_malloc), b = s, d = B(n, t.__wbindgen_malloc), u = s, g = C(_, t.__wbindgen_malloc), p = s, h = l(r, t.__wbindgen_malloc, t.__wbindgen_realloc), y = s, x = t.generate3mfWithGcode(o, i, a, b, d, u, g, p, h, y);
  if (x[3]) throw f(x[2]);
  var I = T(x[0], x[1]).slice();
  return t.__wbindgen_free(x[0], x[1] * 1, 1), I;
}
function T_(c, e, n, _) {
  let r, o;
  try {
    M(c, V);
    const b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.generateGcode(c.__wbg_ptr, b, d, n, _);
    var i = u[0], a = u[1];
    if (u[3]) throw i = 0, a = 0, f(u[2]);
    return r = i, o = a, m(i, a);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function E_() {
  return t.getCompiledModule();
}
function I_() {
  let c, e;
  try {
    const n = t.getPartsManifest();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    t.__wbindgen_free(c, e, 1);
  }
}
function B_() {
  let c, e;
  try {
    const n = t.getSheetMetalBendTable();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    t.__wbindgen_free(c, e, 1);
  }
}
function R_() {
  let c, e;
  try {
    const n = t.getSheetMetalMaterials();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    t.__wbindgen_free(c, e, 1);
  }
}
function C_(c) {
  let e, n;
  try {
    const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = t.getSheetMetalShopCatalog(_, r);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function G_() {
  const c = t.getSlicerPrinterProfiles();
  if (c[2]) throw f(c[1]);
  return f(c[0]);
}
function z_() {
  let c, e;
  try {
    const n = t.get_anthropic_tools_json();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    t.__wbindgen_free(c, e, 1);
  }
}
function L_(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.get_default_dfm_pack(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function W_() {
  let c, e;
  try {
    const n = t.get_kernel_version();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    t.__wbindgen_free(c, e, 1);
  }
}
function V_() {
  let c, e;
  try {
    const n = t.get_tool_schemas();
    return c = n[0], e = n[1], m(n[0], n[1]);
  } finally {
    t.__wbindgen_free(c, e, 1);
  }
}
function O_(c) {
  const e = C(c, t.__wbindgen_malloc), n = s, _ = t.importStepBuffer(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function N_(c) {
  const e = C(c, t.__wbindgen_malloc), n = s, _ = t.importStepBufferWithReport(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function J_(c) {
  let e, n;
  try {
    const o = C(c, t.__wbindgen_malloc), i = s, a = t.importUrdfBuffer(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function U_(c, e, n, _) {
  let r, o;
  try {
    const u = C(c, t.__wbindgen_malloc), g = s;
    var i = w(n) ? 0 : l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s;
    const p = t.importUrdfBufferWithOptions(u, g, e, i, a, !w(_), w(_) ? 0 : _);
    var b = p[0], d = p[1];
    if (p[3]) throw b = 0, d = 0, f(p[2]);
    return r = b, o = d, m(b, d);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function j_() {
  t.init();
}
function q_() {
  return t.initGpu();
}
function X_(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.inspectDocumentFaces(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function K_() {
  return t.isCamAvailable() !== 0;
}
function H_() {
  return t.isEcadAvailable() !== 0;
}
function Q_() {
  return t.isEmbroideryAvailable() !== 0;
}
function $_() {
  return t.isGpuAvailable() !== 0;
}
function Z_() {
  return t.isPhysicsAvailable() !== 0;
}
function Y_() {
  return t.isSlicerAvailable() !== 0;
}
function er(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.latticeGaugeSimulate(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function nr(c, e, n, _) {
  const r = E(c, t.__wbindgen_malloc), o = s, i = B(e, t.__wbindgen_malloc), a = s, b = E(n, t.__wbindgen_malloc), d = s, u = B(_, t.__wbindgen_malloc), g = s, p = t.mesh_clearance(r, o, i, a, b, d, u, g);
  if (p[2]) throw f(p[1]);
  return f(p[0]);
}
function tr(c, e) {
  let n, _;
  try {
    const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = t.nestSheetMetalParts(r, o, i, a);
    return n = b[0], _ = b[1], m(b[0], b[1]);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function _r(c) {
  let e, n;
  try {
    const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = t.nestedSheetMetalDxf(_, r);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function rr(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.neutronicsSimulate(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function or(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.noteToHz(e, n);
  if (_[2]) throw f(_[1]);
  return _[0];
}
function cr(c, e, n) {
  const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s;
  var o = w(n) ? 0 : l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
  return t.offsetSectionMesh(c, _, r, o, i);
}
function ir(c, e) {
  M(c, v);
  const n = t.op_chamfer(c.__wbg_ptr, e);
  if (n[2]) throw f(n[1]);
  return v.__wrap(n[0]);
}
function ar(c, e, n, _, r, o, i, a, b) {
  M(c, v);
  const d = t.op_circular_pattern(c.__wbg_ptr, e, n, _, r, o, i, a, b);
  return v.__wrap(d);
}
function sr(c, e) {
  M(c, v);
  const n = t.op_fillet(c.__wbg_ptr, e);
  if (n[2]) throw f(n[1]);
  return v.__wrap(n[0]);
}
function lr(c, e, n, _, r, o) {
  M(c, v);
  const i = t.op_linear_pattern(c.__wbg_ptr, e, n, _, r, o);
  return v.__wrap(i);
}
function fr(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.op_loft(n, _, w(e) ? 16777215 : e ? 1 : 0);
  if (r[2]) throw f(r[1]);
  return v.__wrap(r[0]);
}
function br(c, e, n, _) {
  const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = P(e, t.__wbindgen_malloc), a = s, b = P(n, t.__wbindgen_malloc), d = s, u = t.op_revolve(r, o, i, a, b, d, _);
  if (u[2]) throw f(u[1]);
  return v.__wrap(u[0]);
}
function dr(c, e) {
  M(c, v);
  const n = t.op_shell(c.__wbg_ptr, e);
  if (n[2]) throw f(n[1]);
  return v.__wrap(n[0]);
}
function ur(c, e, n, _, r, o, i, a, b, d, u) {
  const g = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = t.op_sweep_helix(g, p, e, n, _, r, !w(o), w(o) ? 0 : o, !w(i), w(i) ? 0 : i, !w(a), w(a) ? 0 : a, w(b) ? Number.MAX_SAFE_INTEGER : b >>> 0, w(d) ? Number.MAX_SAFE_INTEGER : d >>> 0, !w(u), w(u) ? 0 : u);
  if (h[2]) throw f(h[1]);
  return v.__wrap(h[0]);
}
function gr(c, e, n, _, r, o, i) {
  const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = P(e, t.__wbindgen_malloc), u = s, g = P(n, t.__wbindgen_malloc), p = s, h = t.op_sweep_line(a, b, d, u, g, p, !w(_), w(_) ? 0 : _, !w(r), w(r) ? 0 : r, !w(o), w(o) ? 0 : o, !w(i), w(i) ? 0 : i);
  if (h[2]) throw f(h[1]);
  return v.__wrap(h[0]);
}
function wr(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.parseAltiumAsciiPcb(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function mr(c) {
  const e = C(c, t.__wbindgen_malloc), n = s, _ = t.parseAltiumPcbDoc(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function pr(c) {
  const e = C(c, t.__wbindgen_malloc), n = s, _ = t.parseAltiumPcbLib(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function hr(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.parseEagleBrd(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function yr(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.parseKicadPcb(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function vr(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.parseVCode(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function Sr(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.parseVcadFile(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function xr(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.particleOptimize(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function Ar(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.particleSimulate(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function Dr(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.photonicsSimulate(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function Pr(c, e, n) {
  let _, r;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = t.plan_chat_tool(o, i, a, b, d, u);
    return _ = g[0], r = g[1], m(g[0], g[1]);
  } finally {
    t.__wbindgen_free(_, r, 1);
  }
}
function Mr(c, e, n, _) {
  const r = E(c, t.__wbindgen_malloc), o = s, i = B(e, t.__wbindgen_malloc), a = s;
  return t.processGeometryGpu(r, o, i, a, n, _);
}
function Fr(c, e) {
  const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s;
  return t.projectMesh(c, n, _);
}
function kr(c) {
  let e, n;
  try {
    const o = C(c, t.__wbindgen_malloc), i = s, a = t.readEmbroideryDst(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function Tr(c) {
  let e, n;
  try {
    const o = C(c, t.__wbindgen_malloc), i = s, a = t.readEmbroideryPes(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function Er(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.recommendPrintSettings(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function Ir(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = C(e, t.__wbindgen_malloc), o = s, i = t.registerStepSource(n, _, r, o);
  if (i[2]) throw f(i[1]);
  return f(i[0]);
}
function Br(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.renderBakeMesh(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function Rr(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s;
  return t.renderBomTable(e, n);
}
function Cr(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s;
  return t.renderTitleBlock(e, n);
}
function Gr(c, e, n) {
  let _, r;
  try {
    const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = t.render_pcb_svg(a, b, d, u, n);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, f(g[2]);
    return _ = o, r = i, m(o, i);
  } finally {
    t.__wbindgen_free(_, r, 1);
  }
}
function zr(c, e, n, _) {
  let r, o;
  try {
    const b = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), h = s, y = t.render_pcb_svg_opts(b, d, u, g, n, p, h);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, f(y[2]);
    return r = i, o = a, m(i, a);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function Lr(c, e) {
  let n, _;
  try {
    const i = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = t.render_svg(i, a, e);
    var r = b[0], o = b[1];
    if (b[3]) throw r = 0, o = 0, f(b[2]);
    return n = r, _ = o, m(r, o);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function Wr(c, e, n, _, r, o) {
  let i, a;
  try {
    const u = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), h = s, y = t.render_svg_annotated(u, g, e, p, h, _, r, o);
    var b = y[0], d = y[1];
    if (y[3]) throw b = 0, d = 0, f(y[2]);
    return i = b, a = d, m(b, d);
  } finally {
    t.__wbindgen_free(i, a, 1);
  }
}
function Vr(c, e, n, _, r, o, i, a, b) {
  let d, u;
  try {
    const G = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), ce = s, ie = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), ae = s;
    var g = w(_) ? 0 : l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = w(a) ? 0 : l(a, t.__wbindgen_malloc, t.__wbindgen_realloc), y = s, x = w(b) ? 0 : l(b, t.__wbindgen_malloc, t.__wbindgen_realloc), I = s;
    const J = t.render_svg_camera(G, ce, e, ie, ae, g, p, r, o, i, h, y, x, I);
    var k = J[0], z = J[1];
    if (J[3]) throw k = 0, z = 0, f(J[2]);
    return d = k, u = z, m(k, z);
  } finally {
    t.__wbindgen_free(d, u, 1);
  }
}
function Or(c, e, n) {
  let _, r;
  try {
    const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = t.render_svg_camera_opts(a, b, e, d, u);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, f(g[2]);
    return _ = o, r = i, m(o, i);
  } finally {
    t.__wbindgen_free(_, r, 1);
  }
}
function Nr(c, e, n) {
  let _, r;
  try {
    const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), u = s, g = t.render_svg_view(a, b, e, d, u);
    var o = g[0], i = g[1];
    if (g[3]) throw o = 0, i = 0, f(g[2]);
    return _ = o, r = i, m(o, i);
  } finally {
    t.__wbindgen_free(_, r, 1);
  }
}
function Jr(c, e, n, _) {
  let r, o;
  try {
    const b = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), h = s, y = t.render_svg_view_highlight(b, d, e, u, g, p, h);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, f(y[2]);
    return r = i, o = a, m(i, a);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function Ur(c, e, n, _) {
  let r, o;
  try {
    const b = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), h = s, y = t.render_svg_view_section(b, d, e, u, g, p, h);
    var i = y[0], a = y[1];
    if (y[3]) throw i = 0, a = 0, f(y[2]);
    return r = i, o = a, m(i, a);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function jr(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.resolveDocumentJson(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function qr(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.resolveParametersJson(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function Xr(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.sample_timeline_sequence(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function Kr(c, e) {
  const n = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = s, r = t.sample_timeline_track(n, _, e);
  if (r[2]) throw f(r[1]);
  return r[0];
}
function Hr(c, e, n) {
  const _ = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s;
  var o = w(n) ? 0 : l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
  return t.sectionMesh(c, _, r, o, i);
}
function Qr(c) {
  let e, n;
  try {
    const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = t.sheetMetalFoldedStep(_, r);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function $r(c) {
  let e, n;
  try {
    const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = t.sheetMetalSequence(_, r);
    return e = o[0], n = o[1], m(o[0], o[1]);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function Zr(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.simulateFlow(_, r, o, i, n);
  if (a[2]) throw f(a[1]);
  return f(a[0]);
}
function Yr(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.simulateStrikeKernel(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function eo(c, e, n, _) {
  let r, o;
  try {
    const b = t.sketchCircleSegments(c, e, n, _);
    var i = b[0], a = b[1];
    if (b[3]) throw i = 0, a = 0, f(b[2]);
    return r = i, o = a, m(i, a);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function no(c, e, n, _) {
  const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = t.sketchHitTest(r, o, e, n, _);
  if (i[2]) throw f(i[1]);
  return i[0];
}
function to(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.sketchPlaneBasis(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function _o(c, e, n, _, r, o, i) {
  let a, b;
  try {
    const g = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = t.sketchPlaneIntersectRay(g, p, e, n, _, r, o, i);
    var d = h[0], u = h[1];
    if (h[3]) throw d = 0, u = 0, f(h[2]);
    return a = d, b = u, m(d, u);
  } finally {
    t.__wbindgen_free(a, b, 1);
  }
}
function ro(c, e, n, _) {
  let r, o;
  try {
    const b = t.sketchRectangleSegments(c, e, n, _);
    var i = b[0], a = b[1];
    if (b[3]) throw i = 0, a = 0, f(b[2]);
    return r = i, o = a, m(i, a);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function oo(c, e, n, _, r, o, i) {
  let a, b;
  try {
    const g = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), p = s, h = t.sketchSnap(g, p, e, n, _, r, o, i);
    var d = h[0], u = h[1];
    if (h[3]) throw d = 0, u = 0, f(h[2]);
    return a = d, b = u, m(d, u);
  } finally {
    t.__wbindgen_free(a, b, 1);
  }
}
function co(c, e, n) {
  let _, r;
  try {
    const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.sketchToWorld(a, b, e, n);
    var o = d[0], i = d[1];
    if (d[3]) throw o = 0, i = 0, f(d[2]);
    return _ = o, r = i, m(o, i);
  } finally {
    t.__wbindgen_free(_, r, 1);
  }
}
function io(c, e, n, _) {
  let r, o;
  try {
    const b = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.sketchWorldToSketch(b, d, e, n, _);
    var i = u[0], a = u[1];
    if (u[3]) throw i = 0, a = 0, f(u[2]);
    return r = i, o = a, m(i, a);
  } finally {
    t.__wbindgen_free(r, o, 1);
  }
}
function ao(c, e, n) {
  const _ = E(c, t.__wbindgen_malloc), r = s, o = B(e, t.__wbindgen_malloc), i = s;
  M(n, O);
  const a = t.sliceMesh(_, r, o, i, n.__wbg_ptr);
  if (a[2]) throw f(a[1]);
  return V.__wrap(a[0]);
}
function so(c, e, n, _) {
  const r = E(c, t.__wbindgen_malloc), o = s, i = B(e, t.__wbindgen_malloc), a = s;
  M(n, O);
  const b = t.sliceMeshWithProgress(r, o, i, a, n.__wbg_ptr, _);
  if (b[2]) throw f(b[1]);
  return V.__wrap(b[0]);
}
function lo(c, e, n) {
  M(c, v), M(e, O);
  const _ = t.sliceSolid(c.__wbg_ptr, e.__wbg_ptr, w(n) ? Number.MAX_SAFE_INTEGER : n >>> 0);
  if (_[2]) throw f(_[1]);
  return V.__wrap(_[0]);
}
function fo(c, e) {
  let n, _;
  try {
    const i = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.solveDesignConstraints(i, a, b, d);
    var r = u[0], o = u[1];
    if (u[3]) throw r = 0, o = 0, f(u[2]);
    return n = r, _ = o, m(r, o);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function bo(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.solveForwardKinematics(e, n);
  if (_[2]) throw f(_[1]);
  return f(_[0]);
}
function uo(c, e) {
  let n, _;
  try {
    const i = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = t.solveSketchSegments(i, a, b, d);
    var r = u[0], o = u[1];
    if (u[3]) throw r = 0, o = 0, f(u[2]);
    return n = r, _ = o, m(r, o);
  } finally {
    t.__wbindgen_free(n, _, 1);
  }
}
function go(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s;
  return t.stepSourceRegistered(e, n) !== 0;
}
function wo(c, e, n, _, r) {
  const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
  var a = w(n) ? 0 : l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s;
  const d = t.textBounds(o, i, e, a, b, !w(_), w(_) ? 0 : _, !w(r), w(r) ? 0 : r);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function mo(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.thermalSolve(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function po(c, e, n, _) {
  const r = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s, i = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), a = s, b = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), d = s, u = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), g = s, p = t.thermalSolveTransient(r, o, i, a, b, d, u, g);
  if (p[2]) throw f(p[1]);
  return f(p[0]);
}
function ho(c) {
  let e, n;
  try {
    const o = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = t.toVCode(o, i);
    var _ = a[0], r = a[1];
    if (a[3]) throw _ = 0, r = 0, f(a[2]);
    return e = _, n = r, m(_, r);
  } finally {
    t.__wbindgen_free(e, n, 1);
  }
}
function yo(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s, a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.toleranceAnalyze(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function vo(c, e, n, _, r, o, i) {
  const a = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.topologyOptimizeBox(a, b, e, n, _, r, o, i);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function So(c, e, n) {
  const _ = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), r = s, o = E(e, t.__wbindgen_malloc), i = s, a = B(n, t.__wbindgen_malloc), b = s, d = t.topologyOptimizeMesh(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function xo(c, e, n) {
  const _ = E(c, t.__wbindgen_malloc), r = s;
  var o = w(e) ? 0 : E(e, t.__wbindgen_malloc), i = s;
  const a = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), b = s, d = t.transformMeshBuffers(_, r, o, i, a, b);
  if (d[2]) throw f(d[1]);
  return f(d[0]);
}
function Ao(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s;
  t.unregisterStepSource(e, n);
}
function Do(c) {
  const e = C(c, t.__wbindgen_malloc), n = s, _ = t.urdfCommentedFloatingJoint(e, n);
  let r;
  return _[0] !== 0 && (r = m(_[0], _[1]), t.__wbindgen_free(_[0], _[1] * 1, 1)), r;
}
function Po(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.writeEmbroideryDst(e, n);
  if (_[3]) throw f(_[2]);
  var r = T(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 1, 1), r;
}
function Mo(c) {
  const e = l(c, t.__wbindgen_malloc, t.__wbindgen_realloc), n = s, _ = t.writeEmbroideryPes(e, n);
  if (_[3]) throw f(_[2]);
  var r = T(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 1, 1), r;
}
function ze() {
  return { __proto__: null, "./vcad_kernel_wasm_bg.js": { __proto__: null, __wbg_Error_67e7344beaa85059: function(e, n) {
    return Error(m(e, n));
  }, __wbg_Number_c54e7112a3fa7e3e: function(e) {
    return Number(e);
  }, __wbg_String_8564e559799eccda: function(e, n) {
    const _ = String(n), r = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, r, true);
  }, __wbg_Window_a2a6c4d665047b14: function(e) {
    return e.Window;
  }, __wbg_WorkerGlobalScope_2664448a7c667d67: function(e) {
    return e.WorkerGlobalScope;
  }, __wbg___wbindgen_bigint_get_as_i64_b482365c149396c8: function(e, n) {
    const _ = n, r = typeof _ == "bigint" ? _ : void 0;
    D().setBigInt64(e + 8, w(r) ? BigInt(0) : r, true), D().setInt32(e + 0, !w(r), true);
  }, __wbg___wbindgen_boolean_get_7a12af2b3f899c5a: function(e) {
    const n = e, _ = typeof n == "boolean" ? n : void 0;
    return w(_) ? 16777215 : _ ? 1 : 0;
  }, __wbg___wbindgen_debug_string_0e68cf47c9cbd9b0: function(e, n) {
    const _ = ge(n), r = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, r, true);
  }, __wbg___wbindgen_in_50072d4d6e45c193: function(e, n) {
    return e in n;
  }, __wbg___wbindgen_is_bigint_60fc0336cb14f5d7: function(e) {
    return typeof e == "bigint";
  }, __wbg___wbindgen_is_function_fcda5e3902d732fe: function(e) {
    return typeof e == "function";
  }, __wbg___wbindgen_is_null_5160b3e381865372: function(e) {
    return e === null;
  }, __wbg___wbindgen_is_object_edb6b15aa3afe12e: function(e) {
    const n = e;
    return typeof n == "object" && n !== null;
  }, __wbg___wbindgen_is_string_c4f7cb494a2a21f1: function(e) {
    return typeof e == "string";
  }, __wbg___wbindgen_is_undefined_8c687d0b90d5b524: function(e) {
    return e === void 0;
  }, __wbg___wbindgen_jsval_eq_9fdcd3c0a860dd3b: function(e, n) {
    return e === n;
  }, __wbg___wbindgen_jsval_loose_eq_3c30021c243b64cd: function(e, n) {
    return e == n;
  }, __wbg___wbindgen_module_c2aeeb3b14bad631: function() {
    return me;
  }, __wbg___wbindgen_number_get_1dc732b810cb937c: function(e, n) {
    const _ = n, r = typeof _ == "number" ? _ : void 0;
    D().setFloat64(e + 8, w(r) ? 0 : r, true), D().setInt32(e + 0, !w(r), true);
  }, __wbg___wbindgen_string_get_92ab86bb19cbc12f: function(e, n) {
    const _ = n, r = typeof _ == "string" ? _ : void 0;
    var o = w(r) ? 0 : l(r, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    D().setInt32(e + 4, i, true), D().setInt32(e + 0, o, true);
  }, __wbg___wbindgen_throw_5d9e815e6fdf150f: function(e, n) {
    throw new Error(m(e, n));
  }, __wbg__wbg_cb_unref_997e73d32238e655: function(e) {
    e._wbg_cb_unref();
  }, __wbg_activeTexture_79f1f4662ee9ed93: function(e, n) {
    e.activeTexture(n >>> 0);
  }, __wbg_activeTexture_e6dac82eb23d9409: function(e, n) {
    e.activeTexture(n >>> 0);
  }, __wbg_attachShader_74ecf95efc73ee58: function(e, n, _) {
    e.attachShader(n, _);
  }, __wbg_attachShader_bfb57af27e3c4a25: function(e, n, _) {
    e.attachShader(n, _);
  }, __wbg_beginComputePass_b9a325184985e6ff: function(e, n) {
    return e.beginComputePass(n);
  }, __wbg_beginQuery_8c123fa7e7aec2a4: function(e, n, _) {
    e.beginQuery(n >>> 0, _);
  }, __wbg_bindAttribLocation_601c8f14be6021f1: function(e, n, _, r, o) {
    e.bindAttribLocation(n, _ >>> 0, m(r, o));
  }, __wbg_bindAttribLocation_f97028966e63a9a0: function(e, n, _, r, o) {
    e.bindAttribLocation(n, _ >>> 0, m(r, o));
  }, __wbg_bindBufferRange_34928ebaef37fa71: function(e, n, _, r, o, i) {
    e.bindBufferRange(n >>> 0, _ >>> 0, r, o, i);
  }, __wbg_bindBuffer_24fab2b14c509d6f: function(e, n, _) {
    e.bindBuffer(n >>> 0, _);
  }, __wbg_bindBuffer_f1f33e087b91687c: function(e, n, _) {
    e.bindBuffer(n >>> 0, _);
  }, __wbg_bindFramebuffer_6c6a9caf742c2cdb: function(e, n, _) {
    e.bindFramebuffer(n >>> 0, _);
  }, __wbg_bindFramebuffer_dc00cdd13fca80a8: function(e, n, _) {
    e.bindFramebuffer(n >>> 0, _);
  }, __wbg_bindRenderbuffer_27f21bc7608d07e3: function(e, n, _) {
    e.bindRenderbuffer(n >>> 0, _);
  }, __wbg_bindRenderbuffer_a5af5373faa4fb14: function(e, n, _) {
    e.bindRenderbuffer(n >>> 0, _);
  }, __wbg_bindSampler_06a184f24b4f473a: function(e, n, _) {
    e.bindSampler(n >>> 0, _);
  }, __wbg_bindTexture_7858cc136e95ec24: function(e, n, _) {
    e.bindTexture(n >>> 0, _);
  }, __wbg_bindTexture_e8a625bf5d240b0f: function(e, n, _) {
    e.bindTexture(n >>> 0, _);
  }, __wbg_bindVertexArrayOES_c947f00135eda668: function(e, n) {
    e.bindVertexArrayOES(n);
  }, __wbg_bindVertexArray_4687bb1e8b327fc9: function(e, n) {
    e.bindVertexArray(n);
  }, __wbg_blendColor_25f3208af2a1a86f: function(e, n, _, r, o) {
    e.blendColor(n, _, r, o);
  }, __wbg_blendColor_7b3873c65a61b8a7: function(e, n, _, r, o) {
    e.blendColor(n, _, r, o);
  }, __wbg_blendEquationSeparate_7255a352fb614ccb: function(e, n, _) {
    e.blendEquationSeparate(n >>> 0, _ >>> 0);
  }, __wbg_blendEquationSeparate_a63d5c1a833c1137: function(e, n, _) {
    e.blendEquationSeparate(n >>> 0, _ >>> 0);
  }, __wbg_blendEquation_1636f14afa7d37d0: function(e, n) {
    e.blendEquation(n >>> 0);
  }, __wbg_blendEquation_9a5ca6936a9438b3: function(e, n) {
    e.blendEquation(n >>> 0);
  }, __wbg_blendFuncSeparate_1afc51f9c96486b2: function(e, n, _, r, o) {
    e.blendFuncSeparate(n >>> 0, _ >>> 0, r >>> 0, o >>> 0);
  }, __wbg_blendFuncSeparate_222d39ec0d6bb147: function(e, n, _, r, o) {
    e.blendFuncSeparate(n >>> 0, _ >>> 0, r >>> 0, o >>> 0);
  }, __wbg_blendFunc_041c4d7dc50ac8c9: function(e, n, _) {
    e.blendFunc(n >>> 0, _ >>> 0);
  }, __wbg_blendFunc_ad7d043180d4f86a: function(e, n, _) {
    e.blendFunc(n >>> 0, _ >>> 0);
  }, __wbg_blitFramebuffer_beb217dd67c23446: function(e, n, _, r, o, i, a, b, d, u, g) {
    e.blitFramebuffer(n, _, r, o, i, a, b, d, u >>> 0, g >>> 0);
  }, __wbg_bufferData_5d0d376bd14d58f3: function(e, n, _, r) {
    e.bufferData(n >>> 0, _, r >>> 0);
  }, __wbg_bufferData_9ce5cb209386d279: function(e, n, _, r) {
    e.bufferData(n >>> 0, _, r >>> 0);
  }, __wbg_bufferData_b58d3ee720ef8b13: function(e, n, _, r) {
    e.bufferData(n >>> 0, _, r >>> 0);
  }, __wbg_bufferData_c074912da5a8e8c2: function(e, n, _, r) {
    e.bufferData(n >>> 0, _, r >>> 0);
  }, __wbg_bufferSubData_1210904a130da787: function(e, n, _, r) {
    e.bufferSubData(n >>> 0, _, r);
  }, __wbg_bufferSubData_bb3556faa77ce63a: function(e, n, _, r) {
    e.bufferSubData(n >>> 0, _, r);
  }, __wbg_call_269c5566fbede3eb: function() {
    return S(function(e, n) {
      return e.call(n);
    }, arguments);
  }, __wbg_call_6bcf8d3e20937e46: function() {
    return S(function(e, n, _) {
      return e.call(n, _);
    }, arguments);
  }, __wbg_call_c1ad1cb1b78e8130: function() {
    return S(function(e, n, _, r, o) {
      return e.call(n, _, r, o);
    }, arguments);
  }, __wbg_clearBufferfv_5c3233abb46232dd: function(e, n, _, r, o) {
    e.clearBufferfv(n >>> 0, _, F(r, o));
  }, __wbg_clearBufferiv_a6017e170f127402: function(e, n, _, r, o) {
    e.clearBufferiv(n >>> 0, _, L(r, o));
  }, __wbg_clearBufferuiv_a7ff44fb5a19e886: function(e, n, _, r, o) {
    e.clearBufferuiv(n >>> 0, _, W(r, o));
  }, __wbg_clearDepth_a4e9a96e0b87fadb: function(e, n) {
    e.clearDepth(n);
  }, __wbg_clearDepth_ea9081c357d405be: function(e, n) {
    e.clearDepth(n);
  }, __wbg_clearStencil_8c03daa5a936cf97: function(e, n) {
    e.clearStencil(n);
  }, __wbg_clearStencil_bd3508b2e4a055c8: function(e, n) {
    e.clearStencil(n);
  }, __wbg_clear_55f5d5ab26fe80b4: function(e, n) {
    e.clear(n >>> 0);
  }, __wbg_clear_faad852996d5b5ca: function(e, n) {
    e.clear(n >>> 0);
  }, __wbg_clientWaitSync_1e222800321920a4: function(e, n, _, r) {
    return e.clientWaitSync(n, _ >>> 0, r >>> 0);
  }, __wbg_colorMask_dc6ca7d28d90ca79: function(e, n, _, r, o) {
    e.colorMask(n !== 0, _ !== 0, r !== 0, o !== 0);
  }, __wbg_colorMask_ee5503a19adab893: function(e, n, _, r, o) {
    e.colorMask(n !== 0, _ !== 0, r !== 0, o !== 0);
  }, __wbg_compileShader_cabeb4aa8cb42914: function(e, n) {
    e.compileShader(n);
  }, __wbg_compileShader_dada15a718167c7f: function(e, n) {
    e.compileShader(n);
  }, __wbg_compressedTexSubImage2D_08a73ef1b07eadd4: function(e, n, _, r, o, i, a, b, d) {
    e.compressedTexSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d);
  }, __wbg_compressedTexSubImage2D_26483f478d06e5b6: function(e, n, _, r, o, i, a, b, d) {
    e.compressedTexSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d);
  }, __wbg_compressedTexSubImage2D_fd0d06f029b00475: function(e, n, _, r, o, i, a, b, d, u) {
    e.compressedTexSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d, u);
  }, __wbg_compressedTexSubImage3D_916c6fa47a2c6ca4: function(e, n, _, r, o, i, a, b, d, u, g) {
    e.compressedTexSubImage3D(n >>> 0, _, r, o, i, a, b, d, u >>> 0, g);
  }, __wbg_compressedTexSubImage3D_ca08254972ab7956: function(e, n, _, r, o, i, a, b, d, u, g, p) {
    e.compressedTexSubImage3D(n >>> 0, _, r, o, i, a, b, d, u >>> 0, g, p);
  }, __wbg_configure_1e2c1c9edad07d26: function() {
    return S(function(e, n) {
      e.configure(n);
    }, arguments);
  }, __wbg_copyBufferSubData_4649cb7afad601b3: function(e, n, _, r, o, i) {
    e.copyBufferSubData(n >>> 0, _ >>> 0, r, o, i);
  }, __wbg_copyBufferToBuffer_01766818654a9868: function() {
    return S(function(e, n, _, r, o) {
      e.copyBufferToBuffer(n, _, r, o);
    }, arguments);
  }, __wbg_copyBufferToBuffer_9c174b96fb08d551: function() {
    return S(function(e, n, _, r, o, i) {
      e.copyBufferToBuffer(n, _, r, o, i);
    }, arguments);
  }, __wbg_copyTexSubImage2D_b5dc78e744bb31d3: function(e, n, _, r, o, i, a, b, d) {
    e.copyTexSubImage2D(n >>> 0, _, r, o, i, a, b, d);
  }, __wbg_copyTexSubImage2D_f1d2043ea68078f1: function(e, n, _, r, o, i, a, b, d) {
    e.copyTexSubImage2D(n >>> 0, _, r, o, i, a, b, d);
  }, __wbg_copyTexSubImage3D_a6674efc4225de77: function(e, n, _, r, o, i, a, b, d, u) {
    e.copyTexSubImage3D(n >>> 0, _, r, o, i, a, b, d, u);
  }, __wbg_copyTextureToBuffer_1234b3210431ad05: function() {
    return S(function(e, n, _, r) {
      e.copyTextureToBuffer(n, _, r);
    }, arguments);
  }, __wbg_createBindGroupLayout_b1bd63b4e88459d8: function() {
    return S(function(e, n) {
      return e.createBindGroupLayout(n);
    }, arguments);
  }, __wbg_createBindGroup_f539b26ca341308f: function(e, n) {
    return e.createBindGroup(n);
  }, __wbg_createBuffer_77a9a8580e5123cc: function(e) {
    const n = e.createBuffer();
    return w(n) ? 0 : A(n);
  }, __wbg_createBuffer_b4dd77c6c40a2e87: function(e) {
    const n = e.createBuffer();
    return w(n) ? 0 : A(n);
  }, __wbg_createBuffer_d800e9b1d41b2ee5: function() {
    return S(function(e, n) {
      return e.createBuffer(n);
    }, arguments);
  }, __wbg_createCommandEncoder_3352d1ffc36c6fc0: function(e, n) {
    return e.createCommandEncoder(n);
  }, __wbg_createComputePipeline_224fa2618d9948a0: function(e, n) {
    return e.createComputePipeline(n);
  }, __wbg_createFramebuffer_aa440c781a6c7da2: function(e) {
    const n = e.createFramebuffer();
    return w(n) ? 0 : A(n);
  }, __wbg_createFramebuffer_ac4ca0fc2cfc1bd1: function(e) {
    const n = e.createFramebuffer();
    return w(n) ? 0 : A(n);
  }, __wbg_createPipelineLayout_6eab52c327118937: function(e, n) {
    return e.createPipelineLayout(n);
  }, __wbg_createProgram_89a2bb21dab7e222: function(e) {
    const n = e.createProgram();
    return w(n) ? 0 : A(n);
  }, __wbg_createProgram_e43ace4085d1086d: function(e) {
    const n = e.createProgram();
    return w(n) ? 0 : A(n);
  }, __wbg_createQuery_731629e292b35522: function(e) {
    const n = e.createQuery();
    return w(n) ? 0 : A(n);
  }, __wbg_createRenderbuffer_3605e09d07f5a422: function(e) {
    const n = e.createRenderbuffer();
    return w(n) ? 0 : A(n);
  }, __wbg_createRenderbuffer_42eeb481e4c92ff2: function(e) {
    const n = e.createRenderbuffer();
    return w(n) ? 0 : A(n);
  }, __wbg_createSampler_ebfb34feb26878f1: function(e) {
    const n = e.createSampler();
    return w(n) ? 0 : A(n);
  }, __wbg_createShaderModule_cefa51336cb288ae: function(e, n) {
    return e.createShaderModule(n);
  }, __wbg_createShader_4d944e14daceede8: function(e, n) {
    const _ = e.createShader(n >>> 0);
    return w(_) ? 0 : A(_);
  }, __wbg_createShader_70a84327b207bda4: function(e, n) {
    const _ = e.createShader(n >>> 0);
    return w(_) ? 0 : A(_);
  }, __wbg_createTexture_a409a8c7972e99b3: function(e) {
    const n = e.createTexture();
    return w(n) ? 0 : A(n);
  }, __wbg_createTexture_ecccbb9df64e8c81: function(e) {
    const n = e.createTexture();
    return w(n) ? 0 : A(n);
  }, __wbg_createTexture_ed7e9fc04dd54d84: function() {
    return S(function(e, n) {
      return e.createTexture(n);
    }, arguments);
  }, __wbg_createVertexArrayOES_083ec6fc6262613d: function(e) {
    const n = e.createVertexArrayOES();
    return w(n) ? 0 : A(n);
  }, __wbg_createVertexArray_9411e94d2ee6864e: function(e) {
    const n = e.createVertexArray();
    return w(n) ? 0 : A(n);
  }, __wbg_createView_da41c2d2cb212715: function() {
    return S(function(e, n) {
      return e.createView(n);
    }, arguments);
  }, __wbg_cullFace_3e14866a0c370004: function(e, n) {
    e.cullFace(n >>> 0);
  }, __wbg_cullFace_b64f84debd112644: function(e, n) {
    e.cullFace(n >>> 0);
  }, __wbg_deleteBuffer_54e287dbecb17d6e: function(e, n) {
    e.deleteBuffer(n);
  }, __wbg_deleteBuffer_c9dc22cdbb93ffbc: function(e, n) {
    e.deleteBuffer(n);
  }, __wbg_deleteFramebuffer_6c3b62109b65e8de: function(e, n) {
    e.deleteFramebuffer(n);
  }, __wbg_deleteFramebuffer_977fae88c7df1c6f: function(e, n) {
    e.deleteFramebuffer(n);
  }, __wbg_deleteProgram_16fe8b000141443c: function(e, n) {
    e.deleteProgram(n);
  }, __wbg_deleteProgram_c990794adb74a326: function(e, n) {
    e.deleteProgram(n);
  }, __wbg_deleteQuery_670219eac170c9fb: function(e, n) {
    e.deleteQuery(n);
  }, __wbg_deleteRenderbuffer_1066bd086097d9c0: function(e, n) {
    e.deleteRenderbuffer(n);
  }, __wbg_deleteRenderbuffer_be22a49b59807a79: function(e, n) {
    e.deleteRenderbuffer(n);
  }, __wbg_deleteSampler_a7f5bf9c8096d80a: function(e, n) {
    e.deleteSampler(n);
  }, __wbg_deleteShader_7169f1760153b284: function(e, n) {
    e.deleteShader(n);
  }, __wbg_deleteShader_9b34ccd212c66de7: function(e, n) {
    e.deleteShader(n);
  }, __wbg_deleteSync_5f19ce0564df8ade: function(e, n) {
    e.deleteSync(n);
  }, __wbg_deleteTexture_4cc3a009d8de3629: function(e, n) {
    e.deleteTexture(n);
  }, __wbg_deleteTexture_5f176c5fb10209e7: function(e, n) {
    e.deleteTexture(n);
  }, __wbg_deleteVertexArrayOES_8ddbff0c3c4bd01b: function(e, n) {
    e.deleteVertexArrayOES(n);
  }, __wbg_deleteVertexArray_a810728c9f325e4c: function(e, n) {
    e.deleteVertexArray(n);
  }, __wbg_depthFunc_e3cb63d0ea760f4f: function(e, n) {
    e.depthFunc(n >>> 0);
  }, __wbg_depthFunc_fc1a3d2fde41ec92: function(e, n) {
    e.depthFunc(n >>> 0);
  }, __wbg_depthMask_77fed42fc2117471: function(e, n) {
    e.depthMask(n !== 0);
  }, __wbg_depthMask_e85b064c1ee5147d: function(e, n) {
    e.depthMask(n !== 0);
  }, __wbg_depthRange_2b6920405cfb1e3d: function(e, n, _) {
    e.depthRange(n, _);
  }, __wbg_depthRange_6e341dd878a6597d: function(e, n, _) {
    e.depthRange(n, _);
  }, __wbg_destroy_637537007d9eaa44: function(e) {
    e.destroy();
  }, __wbg_disableVertexAttribArray_45e2fd394cde8686: function(e, n) {
    e.disableVertexAttribArray(n >>> 0);
  }, __wbg_disableVertexAttribArray_b985896436c82562: function(e, n) {
    e.disableVertexAttribArray(n >>> 0);
  }, __wbg_disable_6907c683adc38e04: function(e, n) {
    e.disable(n >>> 0);
  }, __wbg_disable_71ea0d3d0529f100: function(e, n) {
    e.disable(n >>> 0);
  }, __wbg_dispatchWorkgroups_56b943172790add0: function(e, n, _, r) {
    e.dispatchWorkgroups(n >>> 0, _ >>> 0, r >>> 0);
  }, __wbg_document_c7f486c52d63d24e: function(e) {
    const n = e.document;
    return w(n) ? 0 : A(n);
  }, __wbg_done_cffed884d87aa22e: function(e) {
    return e.done;
  }, __wbg_drawArraysInstancedANGLE_1161faf698564d6d: function(e, n, _, r, o) {
    e.drawArraysInstancedANGLE(n >>> 0, _, r, o);
  }, __wbg_drawArraysInstanced_0ef1fbcdba111c38: function(e, n, _, r, o) {
    e.drawArraysInstanced(n >>> 0, _, r, o);
  }, __wbg_drawArrays_983f352c9e94d800: function(e, n, _, r) {
    e.drawArrays(n >>> 0, _, r);
  }, __wbg_drawArrays_bc085b67da45ec03: function(e, n, _, r) {
    e.drawArrays(n >>> 0, _, r);
  }, __wbg_drawBuffersWEBGL_6cfb1b5e064e9ed2: function(e, n) {
    e.drawBuffersWEBGL(n);
  }, __wbg_drawBuffers_9b22ea9d8f6a15f0: function(e, n) {
    e.drawBuffers(n);
  }, __wbg_drawElementsInstancedANGLE_da080f7c11a85ead: function(e, n, _, r, o, i) {
    e.drawElementsInstancedANGLE(n >>> 0, _, r >>> 0, o, i);
  }, __wbg_drawElementsInstanced_ea7d6b71beea79a4: function(e, n, _, r, o, i) {
    e.drawElementsInstanced(n >>> 0, _, r >>> 0, o, i);
  }, __wbg_enableVertexAttribArray_ad4d8ff487ea8fe1: function(e, n) {
    e.enableVertexAttribArray(n >>> 0);
  }, __wbg_enableVertexAttribArray_db5eef27f6b32c4a: function(e, n) {
    e.enableVertexAttribArray(n >>> 0);
  }, __wbg_enable_9fb8e4de75a17155: function(e, n) {
    e.enable(n >>> 0);
  }, __wbg_enable_9fca6962aca10f48: function(e, n) {
    e.enable(n >>> 0);
  }, __wbg_endQuery_4eea0267f103b625: function(e, n) {
    e.endQuery(n >>> 0);
  }, __wbg_end_82fd0c12ba185009: function(e) {
    e.end();
  }, __wbg_entries_972a87586902cf87: function(e) {
    return Object.entries(e);
  }, __wbg_error_756c5934221e6fee: function(e) {
    console.error(e);
  }, __wbg_error_757e9472f8410341: function(e, n) {
    let _, r;
    try {
      _ = e, r = n, console.error(m(e, n));
    } finally {
      t.__wbindgen_free(_, r, 1);
    }
  }, __wbg_error_8c8dff942c7c4f11: function(e) {
    return e.error;
  }, __wbg_fenceSync_13999b65854e9b9b: function(e, n, _) {
    const r = e.fenceSync(n >>> 0, _ >>> 0);
    return w(r) ? 0 : A(r);
  }, __wbg_finish_09ec094c10f41e7b: function(e) {
    return e.finish();
  }, __wbg_finish_0ce019eb398085de: function(e) {
    e.finish();
  }, __wbg_finish_646a6b6ddc91f563: function(e) {
    e.finish();
  }, __wbg_finish_ec1c191f66a895b1: function(e, n) {
    return e.finish(n);
  }, __wbg_flush_824eea12383b8cca: function(e) {
    e.flush();
  }, __wbg_flush_c4a6f752e79bfc53: function(e) {
    e.flush();
  }, __wbg_framebufferRenderbuffer_aa5275e6a52dc6bd: function(e, n, _, r, o) {
    e.framebufferRenderbuffer(n >>> 0, _ >>> 0, r >>> 0, o);
  }, __wbg_framebufferRenderbuffer_f5e60406b8ee912e: function(e, n, _, r, o) {
    e.framebufferRenderbuffer(n >>> 0, _ >>> 0, r >>> 0, o);
  }, __wbg_framebufferTexture2D_7a85448ff0ab4b2c: function(e, n, _, r, o, i) {
    e.framebufferTexture2D(n >>> 0, _ >>> 0, r >>> 0, o, i);
  }, __wbg_framebufferTexture2D_ee6a0d85fd7083aa: function(e, n, _, r, o, i) {
    e.framebufferTexture2D(n >>> 0, _ >>> 0, r >>> 0, o, i);
  }, __wbg_framebufferTextureLayer_7c877ec2a0f9220b: function(e, n, _, r, o, i) {
    e.framebufferTextureLayer(n >>> 0, _ >>> 0, r, o, i);
  }, __wbg_framebufferTextureMultiviewOVR_64b070ac25c07833: function(e, n, _, r, o, i, a) {
    e.framebufferTextureMultiviewOVR(n >>> 0, _ >>> 0, r, o, i, a);
  }, __wbg_frontFace_77f09a7664c8cd54: function(e, n) {
    e.frontFace(n >>> 0);
  }, __wbg_frontFace_b3888c65efdb32fe: function(e, n) {
    e.frontFace(n >>> 0);
  }, __wbg_getBufferSubData_2c901ce3bd14301e: function(e, n, _, r) {
    e.getBufferSubData(n >>> 0, _, r);
  }, __wbg_getContext_2c75bba1a1c9739b: function() {
    return S(function(e, n, _, r) {
      const o = e.getContext(m(n, _), r);
      return w(o) ? 0 : A(o);
    }, arguments);
  }, __wbg_getContext_5ff6bd600503b094: function() {
    return S(function(e, n, _) {
      const r = e.getContext(m(n, _));
      return w(r) ? 0 : A(r);
    }, arguments);
  }, __wbg_getContext_db25e9527f2ccc08: function() {
    return S(function(e, n, _, r) {
      const o = e.getContext(m(n, _), r);
      return w(o) ? 0 : A(o);
    }, arguments);
  }, __wbg_getExtension_112db5d69fdfc10f: function() {
    return S(function(e, n, _) {
      const r = e.getExtension(m(n, _));
      return w(r) ? 0 : A(r);
    }, arguments);
  }, __wbg_getIndexedParameter_d4437eb4ad4a0bfa: function() {
    return S(function(e, n, _) {
      return e.getIndexedParameter(n >>> 0, _ >>> 0);
    }, arguments);
  }, __wbg_getMappedRange_fb54c6327b2d8d20: function() {
    return S(function(e, n, _) {
      return e.getMappedRange(n, _);
    }, arguments);
  }, __wbg_getParameter_031885c3618c2d0c: function() {
    return S(function(e, n) {
      return e.getParameter(n >>> 0);
    }, arguments);
  }, __wbg_getParameter_7f269432cd46eb73: function() {
    return S(function(e, n) {
      return e.getParameter(n >>> 0);
    }, arguments);
  }, __wbg_getProgramInfoLog_0e335b65673afba8: function(e, n, _) {
    const r = n.getProgramInfoLog(_);
    var o = w(r) ? 0 : l(r, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    D().setInt32(e + 4, i, true), D().setInt32(e + 0, o, true);
  }, __wbg_getProgramInfoLog_82aa11c9d7e8d96e: function(e, n, _) {
    const r = n.getProgramInfoLog(_);
    var o = w(r) ? 0 : l(r, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    D().setInt32(e + 4, i, true), D().setInt32(e + 0, o, true);
  }, __wbg_getProgramParameter_1a93fd2f4dcc0622: function(e, n, _) {
    return e.getProgramParameter(n, _ >>> 0);
  }, __wbg_getProgramParameter_2a5860ab824690ec: function(e, n, _) {
    return e.getProgramParameter(n, _ >>> 0);
  }, __wbg_getQueryParameter_145128cfab5de56d: function(e, n, _) {
    return e.getQueryParameter(n, _ >>> 0);
  }, __wbg_getRandomValues_461aca49b5456fc4: function() {
    return S(function(e, n) {
      globalThis.crypto.getRandomValues(T(e, n));
    }, arguments);
  }, __wbg_getShaderInfoLog_416aea280f6fdf84: function(e, n, _) {
    const r = n.getShaderInfoLog(_);
    var o = w(r) ? 0 : l(r, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    D().setInt32(e + 4, i, true), D().setInt32(e + 0, o, true);
  }, __wbg_getShaderInfoLog_e66ab6619bcd208d: function(e, n, _) {
    const r = n.getShaderInfoLog(_);
    var o = w(r) ? 0 : l(r, t.__wbindgen_malloc, t.__wbindgen_realloc), i = s;
    D().setInt32(e + 4, i, true), D().setInt32(e + 0, o, true);
  }, __wbg_getShaderParameter_b19fb6adcff77066: function(e, n, _) {
    return e.getShaderParameter(n, _ >>> 0);
  }, __wbg_getShaderParameter_d542b1412563ae42: function(e, n, _) {
    return e.getShaderParameter(n, _ >>> 0);
  }, __wbg_getSupportedExtensions_67cde11dd49cad1a: function(e) {
    const n = e.getSupportedExtensions();
    return w(n) ? 0 : A(n);
  }, __wbg_getSupportedProfiles_abd53cd63178e1e0: function(e) {
    const n = e.getSupportedProfiles();
    return w(n) ? 0 : A(n);
  }, __wbg_getSyncParameter_f4eeca8570f06af5: function(e, n, _) {
    return e.getSyncParameter(n, _ >>> 0);
  }, __wbg_getUniformBlockIndex_db57fe2d6ed6af2a: function(e, n, _, r) {
    return e.getUniformBlockIndex(n, m(_, r));
  }, __wbg_getUniformLocation_03b9677a8f868582: function(e, n, _, r) {
    const o = e.getUniformLocation(n, m(_, r));
    return w(o) ? 0 : A(o);
  }, __wbg_getUniformLocation_20bad5ce4a0aaae4: function(e, n, _, r) {
    const o = e.getUniformLocation(n, m(_, r));
    return w(o) ? 0 : A(o);
  }, __wbg_get_6cf5a4d4d8ad3c5a: function() {
    return S(function(e, n) {
      return Reflect.get(e, n);
    }, arguments);
  }, __wbg_get_989d0a1309644f2b: function() {
    return S(function(e, n) {
      return Reflect.get(e, n);
    }, arguments);
  }, __wbg_get_b1f0ab13c737f856: function(e, n) {
    return e[n >>> 0];
  }, __wbg_get_unchecked_363572bdd397d473: function(e, n) {
    return e[n >>> 0];
  }, __wbg_get_with_ref_key_6412cf3094599694: function(e, n) {
    return e[n];
  }, __wbg_gpu_afdd4387c7afe5f9: function(e) {
    return e.gpu;
  }, __wbg_includes_c0f578d8314b8dbf: function(e, n, _) {
    return e.includes(n, _);
  }, __wbg_instanceof_ArrayBuffer_d4ff01f8247925ae: function(e) {
    let n;
    try {
      n = e instanceof ArrayBuffer;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_GpuOutOfMemoryError_5c3b8a2499f59adb: function(e) {
    let n;
    try {
      n = e instanceof GPUOutOfMemoryError;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_GpuValidationError_7659e07b12d4e184: function(e) {
    let n;
    try {
      n = e instanceof GPUValidationError;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_HtmlCanvasElement_4d7e131643d814c1: function(e) {
    let n;
    try {
      n = e instanceof HTMLCanvasElement;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_Map_1ff6a2b54c899f0d: function(e) {
    let n;
    try {
      n = e instanceof Map;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_Uint8Array_598adc0fef426aa8: function(e) {
    let n;
    try {
      n = e instanceof Uint8Array;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_WebGl2RenderingContext_015d221b904a3c7b: function(e) {
    let n;
    try {
      n = e instanceof WebGL2RenderingContext;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_instanceof_Window_a3b8566f0a9c5d1a: function(e) {
    let n;
    try {
      n = e instanceof Window;
    } catch {
      n = false;
    }
    return n;
  }, __wbg_invalidateFramebuffer_4538559f02a556ae: function() {
    return S(function(e, n, _) {
      e.invalidateFramebuffer(n >>> 0, _);
    }, arguments);
  }, __wbg_isArray_5674713bb7b79043: function(e) {
    return Array.isArray(e);
  }, __wbg_isSafeInteger_8f51c743827d1ec5: function(e) {
    return Number.isSafeInteger(e);
  }, __wbg_is_61443cc073056436: function(e, n) {
    return Object.is(e, n);
  }, __wbg_iterator_22ddeb808cf55a6f: function() {
    return Symbol.iterator;
  }, __wbg_label_7add8cb37a6ef98f: function(e, n) {
    const _ = n.label, r = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, r, true);
  }, __wbg_length_31bdaf014f5fbde2: function(e) {
    return e.length;
  }, __wbg_length_4e1adc0d42e23620: function(e) {
    return e.length;
  }, __wbg_limits_601ad2e086ef8141: function(e) {
    return e.limits;
  }, __wbg_linkProgram_794fd290a759542a: function(e, n) {
    e.linkProgram(n);
  }, __wbg_linkProgram_e408ee5f93686f1f: function(e, n) {
    e.linkProgram(n);
  }, __wbg_log_363d83b9114c8831: function(e) {
    console.log(e);
  }, __wbg_mapAsync_b0597127f5037286: function(e, n, _, r) {
    return e.mapAsync(n >>> 0, _, r);
  }, __wbg_maxBindGroupsPlusVertexBuffers_52369f089736ef9d: function(e) {
    return e.maxBindGroupsPlusVertexBuffers;
  }, __wbg_maxBindGroups_4e424afe6ce86ca2: function(e) {
    return e.maxBindGroups;
  }, __wbg_maxBindingsPerBindGroup_7d035da36821c44f: function(e) {
    return e.maxBindingsPerBindGroup;
  }, __wbg_maxBufferSize_423f4a084e32a195: function(e) {
    return e.maxBufferSize;
  }, __wbg_maxColorAttachmentBytesPerSample_c4cd9126f6d287c6: function(e) {
    return e.maxColorAttachmentBytesPerSample;
  }, __wbg_maxColorAttachments_d924670762b9e250: function(e) {
    return e.maxColorAttachments;
  }, __wbg_maxComputeInvocationsPerWorkgroup_707a3868f7cebb59: function(e) {
    return e.maxComputeInvocationsPerWorkgroup;
  }, __wbg_maxComputeWorkgroupSizeX_0a4d99463cbd6e5e: function(e) {
    return e.maxComputeWorkgroupSizeX;
  }, __wbg_maxComputeWorkgroupSizeY_85123ea0587f7558: function(e) {
    return e.maxComputeWorkgroupSizeY;
  }, __wbg_maxComputeWorkgroupSizeZ_a3186b4c5267d44f: function(e) {
    return e.maxComputeWorkgroupSizeZ;
  }, __wbg_maxComputeWorkgroupStorageSize_57b297355cfb6204: function(e) {
    return e.maxComputeWorkgroupStorageSize;
  }, __wbg_maxComputeWorkgroupsPerDimension_4158f95e673d54c4: function(e) {
    return e.maxComputeWorkgroupsPerDimension;
  }, __wbg_maxDynamicStorageBuffersPerPipelineLayout_226b0b70910aa16c: function(e) {
    return e.maxDynamicStorageBuffersPerPipelineLayout;
  }, __wbg_maxDynamicUniformBuffersPerPipelineLayout_0e835fda711fc7e6: function(e) {
    return e.maxDynamicUniformBuffersPerPipelineLayout;
  }, __wbg_maxInterStageShaderVariables_8c4a1d727e2aa35a: function(e) {
    return e.maxInterStageShaderVariables;
  }, __wbg_maxSampledTexturesPerShaderStage_6675f5e91d9a728a: function(e) {
    return e.maxSampledTexturesPerShaderStage;
  }, __wbg_maxSamplersPerShaderStage_1910fa38a6ed1e1f: function(e) {
    return e.maxSamplersPerShaderStage;
  }, __wbg_maxStorageBufferBindingSize_2e244bded070b18d: function(e) {
    return e.maxStorageBufferBindingSize;
  }, __wbg_maxStorageBuffersPerShaderStage_a285f3ebca51ca0d: function(e) {
    return e.maxStorageBuffersPerShaderStage;
  }, __wbg_maxStorageTexturesPerShaderStage_7aa946f0fc322a2b: function(e) {
    return e.maxStorageTexturesPerShaderStage;
  }, __wbg_maxTextureArrayLayers_0e699147ad00502d: function(e) {
    return e.maxTextureArrayLayers;
  }, __wbg_maxTextureDimension1D_aabf6add54decfe2: function(e) {
    return e.maxTextureDimension1D;
  }, __wbg_maxTextureDimension2D_dd598b27e9c0c1c4: function(e) {
    return e.maxTextureDimension2D;
  }, __wbg_maxTextureDimension3D_f944266c65dfd1a9: function(e) {
    return e.maxTextureDimension3D;
  }, __wbg_maxUniformBufferBindingSize_59fa6be7cfbeeb53: function(e) {
    return e.maxUniformBufferBindingSize;
  }, __wbg_maxUniformBuffersPerShaderStage_bee5f00a4d706c7f: function(e) {
    return e.maxUniformBuffersPerShaderStage;
  }, __wbg_maxVertexAttributes_5cf6392c4e9033fe: function(e) {
    return e.maxVertexAttributes;
  }, __wbg_maxVertexBufferArrayStride_548baa887375d865: function(e) {
    return e.maxVertexBufferArrayStride;
  }, __wbg_maxVertexBuffers_75d881156591f5da: function(e) {
    return e.maxVertexBuffers;
  }, __wbg_message_2aad50368e15e8f1: function(e, n) {
    const _ = n.message, r = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, r, true);
  }, __wbg_minStorageBufferOffsetAlignment_5ba9b77792bdadb3: function(e) {
    return e.minStorageBufferOffsetAlignment;
  }, __wbg_minUniformBufferOffsetAlignment_ab7d52a5293b22bd: function(e) {
    return e.minUniformBufferOffsetAlignment;
  }, __wbg_navigator_d217ca64c4bbff48: function(e) {
    return e.navigator;
  }, __wbg_navigator_d25c0f071226f233: function(e) {
    return e.navigator;
  }, __wbg_new_12e5d807044fbfe3: function() {
    return S(function(e, n) {
      return new OffscreenCanvas(e >>> 0, n >>> 0);
    }, arguments);
  }, __wbg_new_1da3429bc3c4541c: function(e) {
    return new Uint8Array(e);
  }, __wbg_new_227d7c05414eb861: function() {
    return new Error();
  }, __wbg_new_8d36e20aa758e411: function() {
    return /* @__PURE__ */ new Map();
  }, __wbg_new_8f72ed7c652bf5a2: function(e, n) {
    try {
      var _ = { a: e, b: n }, r = (i, a) => {
        const b = _.a;
        _.a = 0;
        try {
          return Ae(b, _.b, i, a);
        } finally {
          _.a = b;
        }
      };
      return new Promise(r);
    } finally {
      _.a = 0;
    }
  }, __wbg_new_bebc3f4757acf305: function() {
    return new Object();
  }, __wbg_new_ffa92086ea89f79c: function() {
    return new Array();
  }, __wbg_new_from_slice_2221cabb71753908: function(e, n) {
    return new Float32Array(F(e, n));
  }, __wbg_new_from_slice_4ee02165f9de919e: function(e, n) {
    return new Uint8Array(T(e, n));
  }, __wbg_new_from_slice_a500ec81601be48f: function(e, n) {
    return new Uint32Array(W(e, n));
  }, __wbg_new_typed_6f8b0d724fe26c07: function(e, n) {
    try {
      var _ = { a: e, b: n }, r = (i, a) => {
        const b = _.a;
        _.a = 0;
        try {
          return Ae(b, _.b, i, a);
        } finally {
          _.a = b;
        }
      };
      return new Promise(r);
    } finally {
      _.a = 0;
    }
  }, __wbg_new_typed_7d4574ab4b8446c8: function() {
    return new Object();
  }, __wbg_new_with_byte_offset_and_length_492c969e8b5da8a4: function(e, n, _) {
    return new Uint8Array(e, n >>> 0, _ >>> 0);
  }, __wbg_new_with_length_6a9fc3631737ef8c: function(e) {
    return new Array(e >>> 0);
  }, __wbg_next_95053e306b1c3aed: function(e) {
    return e.next;
  }, __wbg_next_f31ecb8646d2c605: function() {
    return S(function(e) {
      return e.next();
    }, arguments);
  }, __wbg_now_579c6a705b05378b: function() {
    return performance.now();
  }, __wbg_now_d1fb6650485d7f3e: function() {
    return Date.now();
  }, __wbg_of_1a3f47170341cefe: function(e) {
    return Array.of(e);
  }, __wbg_onSubmittedWorkDone_1190213cee1ecf7e: function(e) {
    return e.onSubmittedWorkDone();
  }, __wbg_pixelStorei_1bc7980b82e1ba4b: function(e, n, _) {
    e.pixelStorei(n >>> 0, _);
  }, __wbg_pixelStorei_d540c25aafa93789: function(e, n, _) {
    e.pixelStorei(n >>> 0, _);
  }, __wbg_polygonOffset_a97069c9fe385bff: function(e, n, _) {
    e.polygonOffset(n, _);
  }, __wbg_polygonOffset_f99887a0cc3d7df4: function(e, n, _) {
    e.polygonOffset(n, _);
  }, __wbg_prototypesetcall_ae9f5e7459250748: function(e, n, _) {
    Uint8Array.prototype.set.call(T(e, n), _);
  }, __wbg_push_bfdf956ba476f65b: function(e, n) {
    return e.push(n);
  }, __wbg_queryCounterEXT_c9fb8ad39c35fdf6: function(e, n, _) {
    e.queryCounterEXT(n, _ >>> 0);
  }, __wbg_querySelector_5b1d9ebad373dc9d: function() {
    return S(function(e, n, _) {
      const r = e.querySelector(m(n, _));
      return w(r) ? 0 : A(r);
    }, arguments);
  }, __wbg_queueMicrotask_85c90f6987555d65: function(e) {
    return e.queueMicrotask;
  }, __wbg_queueMicrotask_f6a1fa10b81d1fc0: function(e) {
    queueMicrotask(e);
  }, __wbg_queue_7b62c28143d44293: function(e) {
    return e.queue;
  }, __wbg_readBuffer_1679a4b6dcd78e30: function(e, n) {
    e.readBuffer(n >>> 0);
  }, __wbg_readPixels_5d75a0ec1e2aab33: function() {
    return S(function(e, n, _, r, o, i, a, b) {
      e.readPixels(n, _, r, o, i >>> 0, a >>> 0, b);
    }, arguments);
  }, __wbg_readPixels_c60bfe6126f65619: function() {
    return S(function(e, n, _, r, o, i, a, b) {
      e.readPixels(n, _, r, o, i >>> 0, a >>> 0, b);
    }, arguments);
  }, __wbg_readPixels_dcde619ca94b6296: function() {
    return S(function(e, n, _, r, o, i, a, b) {
      e.readPixels(n, _, r, o, i >>> 0, a >>> 0, b);
    }, arguments);
  }, __wbg_renderbufferStorageMultisample_5d9012ce50f133e3: function(e, n, _, r, o, i) {
    e.renderbufferStorageMultisample(n >>> 0, _, r >>> 0, o, i);
  }, __wbg_renderbufferStorage_2b50da85624a8b73: function(e, n, _, r, o) {
    e.renderbufferStorage(n >>> 0, _ >>> 0, r, o);
  }, __wbg_renderbufferStorage_2eb3d4343d1a1c6e: function(e, n, _, r, o) {
    e.renderbufferStorage(n >>> 0, _ >>> 0, r, o);
  }, __wbg_requestAdapter_a539af006419f2e9: function(e, n) {
    return e.requestAdapter(n);
  }, __wbg_requestDevice_5cb8a582e55d08cb: function(e, n) {
    return e.requestDevice(n);
  }, __wbg_resolve_35ec7e0c6af4c82c: function(e) {
    return Promise.resolve(e);
  }, __wbg_samplerParameterf_34605394359af7ae: function(e, n, _, r) {
    e.samplerParameterf(n, _ >>> 0, r);
  }, __wbg_samplerParameteri_ff1f558c8f43a220: function(e, n, _, r) {
    e.samplerParameteri(n, _ >>> 0, r);
  }, __wbg_scissor_c53448a6fa939bfb: function(e, n, _, r, o) {
    e.scissor(n, _, r, o);
  }, __wbg_scissor_d896348c98d0c9ac: function(e, n, _, r, o) {
    e.scissor(n, _, r, o);
  }, __wbg_setBindGroup_0b7c2a055ef1f314: function() {
    return S(function(e, n, _, r, o, i, a) {
      e.setBindGroup(n >>> 0, _, W(r, o), i, a >>> 0);
    }, arguments);
  }, __wbg_setBindGroup_c83391351ce68826: function(e, n, _) {
    e.setBindGroup(n >>> 0, _);
  }, __wbg_setPipeline_5146f7b8d2b4af5c: function(e, n) {
    e.setPipeline(n);
  }, __wbg_set_13d25b81ab403f5e: function(e, n, _) {
    e[n >>> 0] = _;
  }, __wbg_set_6be42768c690e380: function(e, n, _) {
    e[n] = _;
  }, __wbg_set_9cfc0f17d60ff0af: function(e, n, _) {
    e.set(n, _ >>> 0);
  }, __wbg_set_a377297433dfea63: function() {
    return S(function(e, n, _) {
      return Reflect.set(e, n, _);
    }, arguments);
  }, __wbg_set_access_a099cfbbeec9b96f: function(e, n) {
    e.access = Ze[n];
  }, __wbg_set_array_layer_count_22afa0a979e4ad55: function(e, n) {
    e.arrayLayerCount = n >>> 0;
  }, __wbg_set_aspect_a48d046965270281: function(e, n) {
    e.aspect = De[n];
  }, __wbg_set_aspect_b1a9909bf315433f: function(e, n) {
    e.aspect = De[n];
  }, __wbg_set_base_array_layer_2435ba92c80346ae: function(e, n) {
    e.baseArrayLayer = n >>> 0;
  }, __wbg_set_base_mip_level_8b6093e875e7c65d: function(e, n) {
    e.baseMipLevel = n >>> 0;
  }, __wbg_set_beginning_of_pass_write_index_fa9ae10d5d2804ce: function(e, n) {
    e.beginningOfPassWriteIndex = n >>> 0;
  }, __wbg_set_bf6dde4923b9b059: function(e, n, _) {
    return e.set(n, _);
  }, __wbg_set_bind_group_layouts_458c44ba55100b82: function(e, n, _) {
    e.bindGroupLayouts = U(n, _);
  }, __wbg_set_binding_81b3fac7f7acaf8d: function(e, n) {
    e.binding = n >>> 0;
  }, __wbg_set_binding_b6cee57f35ac5190: function(e, n) {
    e.binding = n >>> 0;
  }, __wbg_set_buffer_1548ae88a9188037: function(e, n) {
    e.buffer = n;
  }, __wbg_set_buffer_8d0ac64ad20dfc84: function(e, n) {
    e.buffer = n;
  }, __wbg_set_buffer_910a40a90f97cfca: function(e, n) {
    e.buffer = n;
  }, __wbg_set_bytes_per_row_1e824a5502b54b3d: function(e, n) {
    e.bytesPerRow = n >>> 0;
  }, __wbg_set_bytes_per_row_c28583f0063160f1: function(e, n) {
    e.bytesPerRow = n >>> 0;
  }, __wbg_set_code_5d5b0b9e2fd0dca7: function(e, n, _) {
    e.code = m(n, _);
  }, __wbg_set_compute_bc754d9e37f6e4c9: function(e, n) {
    e.compute = n;
  }, __wbg_set_depth_or_array_layers_e2f074a0284e4806: function(e, n) {
    e.depthOrArrayLayers = n >>> 0;
  }, __wbg_set_device_210484a77b675c9c: function(e, n) {
    e.device = n;
  }, __wbg_set_dimension_3da9d03131a9f446: function(e, n) {
    e.dimension = Ye[n];
  }, __wbg_set_dimension_56332450afa3e0c0: function(e, n) {
    e.dimension = le[n];
  }, __wbg_set_end_of_pass_write_index_b54a8e3802b9ae0d: function(e, n) {
    e.endOfPassWriteIndex = n >>> 0;
  }, __wbg_set_entries_6f866302103b81e9: function(e, n, _) {
    e.entries = U(n, _);
  }, __wbg_set_entries_f26b77ab9548e906: function(e, n, _) {
    e.entries = U(n, _);
  }, __wbg_set_entry_point_ac8db535971761fe: function(e, n, _) {
    e.entryPoint = m(n, _);
  }, __wbg_set_external_texture_7f966c604c4f8098: function(e, n) {
    e.externalTexture = n;
  }, __wbg_set_format_283dca56552f07a3: function(e, n) {
    e.format = re[n];
  }, __wbg_set_format_66735b94bd868ba2: function(e, n) {
    e.format = re[n];
  }, __wbg_set_format_92732ea75d3b79f5: function(e, n) {
    e.format = re[n];
  }, __wbg_set_format_f009e603f7d4c28e: function(e, n) {
    e.format = re[n];
  }, __wbg_set_has_dynamic_offset_0c72ffa900c5a269: function(e, n) {
    e.hasDynamicOffset = n !== 0;
  }, __wbg_set_height_1202ad0eab43cbe0: function(e, n) {
    e.height = n >>> 0;
  }, __wbg_set_height_698fb3b255bc1348: function(e, n) {
    e.height = n >>> 0;
  }, __wbg_set_height_f6619158e5735877: function(e, n) {
    e.height = n >>> 0;
  }, __wbg_set_label_09e2da5f8522dbe8: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_17202740051e9722: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_17b4858e1eef23dd: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_2fefb39c0e0dbbe8: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_3f2ccaafef5ff7c9: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_612add98a4398f92: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_70a09ee68d6b1b26: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_92cd3811e96b487c: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_c3eaf136aa464cba: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_c7987704d29f284b: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_cfe64bca8945ee30: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_label_ee172cd5f6a96961: function(e, n, _) {
    e.label = m(n, _);
  }, __wbg_set_layout_454e3a091b390cd4: function(e, n) {
    e.layout = n;
  }, __wbg_set_layout_4b5d5b12fbb72a76: function(e, n) {
    e.layout = n;
  }, __wbg_set_layout_gpu_auto_layout_mode_ee432e515c357fa8: function(e, n) {
    e.layout = Ke[n];
  }, __wbg_set_mapped_at_creation_3f320fef6761b02c: function(e, n) {
    e.mappedAtCreation = n !== 0;
  }, __wbg_set_min_binding_size_f64_897e3cd4496ddec9: function(e, n) {
    e.minBindingSize = n;
  }, __wbg_set_mip_level_count_047936c630acee7b: function(e, n) {
    e.mipLevelCount = n >>> 0;
  }, __wbg_set_mip_level_count_44bc46a1ae6f6daa: function(e, n) {
    e.mipLevelCount = n >>> 0;
  }, __wbg_set_mip_level_f3745730372683d5: function(e, n) {
    e.mipLevel = n >>> 0;
  }, __wbg_set_module_c9946af218d23b53: function(e, n) {
    e.module = n;
  }, __wbg_set_multisampled_039f032dc4b67367: function(e, n) {
    e.multisampled = n !== 0;
  }, __wbg_set_offset_f64_127e8a0aa5c5485a: function(e, n) {
    e.offset = n;
  }, __wbg_set_offset_f64_a903425d5a8e5815: function(e, n) {
    e.offset = n;
  }, __wbg_set_offset_f64_d1d115dd438165b5: function(e, n) {
    e.offset = n;
  }, __wbg_set_onuncapturederror_bb813f1102da2296: function(e, n) {
    e.onuncapturederror = n;
  }, __wbg_set_origin_gpu_origin_3d_dict_0619d4860adb4eb6: function(e, n) {
    e.origin = n;
  }, __wbg_set_power_preference_b42d00a8facfbade: function(e, n) {
    e.powerPreference = Qe[n];
  }, __wbg_set_query_set_f9a94586851fdba2: function(e, n) {
    e.querySet = n;
  }, __wbg_set_required_features_bbab71414c45e621: function(e, n, _) {
    e.requiredFeatures = U(n, _);
  }, __wbg_set_required_limits_837f62d865e7cfac: function(e, n) {
    e.requiredLimits = n;
  }, __wbg_set_resource_8fd8658b30d86ecf: function(e, n) {
    e.resource = n;
  }, __wbg_set_resource_gpu_buffer_binding_33099b25da65b610: function(e, n) {
    e.resource = n;
  }, __wbg_set_resource_gpu_texture_view_4cffe7bc7c8e5cbe: function(e, n) {
    e.resource = n;
  }, __wbg_set_rows_per_image_c6d50d227e634379: function(e, n) {
    e.rowsPerImage = n >>> 0;
  }, __wbg_set_rows_per_image_deb456502f23c260: function(e, n) {
    e.rowsPerImage = n >>> 0;
  }, __wbg_set_sample_count_481c255a12054e1d: function(e, n) {
    e.sampleCount = n >>> 0;
  }, __wbg_set_sample_type_ebc5fcd029513bda: function(e, n) {
    e.sampleType = en[n];
  }, __wbg_set_sampler_89cb4a7efcfc6005: function(e, n) {
    e.sampler = n;
  }, __wbg_set_size_f64_2f591b0654540477: function(e, n) {
    e.size = n;
  }, __wbg_set_size_f64_e844c985b8f95261: function(e, n) {
    e.size = n;
  }, __wbg_set_size_gpu_extent_3d_dict_adf57388ab1d4f18: function(e, n) {
    e.size = n;
  }, __wbg_set_storage_texture_786aea7c5773b6c1: function(e, n) {
    e.storageTexture = n;
  }, __wbg_set_texture_95f2bfdf7767e76f: function(e, n) {
    e.texture = n;
  }, __wbg_set_texture_a33be3fe02ac6264: function(e, n) {
    e.texture = n;
  }, __wbg_set_timestamp_writes_5f240bbaad97fcaf: function(e, n) {
    e.timestampWrites = n;
  }, __wbg_set_type_43e0092f16775979: function(e, n) {
    e.type = $e[n];
  }, __wbg_set_type_79cec55caf4cdb6d: function(e, n) {
    e.type = He[n];
  }, __wbg_set_usage_1ee33d98267e787d: function(e, n) {
    e.usage = n >>> 0;
  }, __wbg_set_usage_d53ee6f0c7aedbfa: function(e, n) {
    e.usage = n >>> 0;
  }, __wbg_set_usage_f3e34822998d2147: function(e, n) {
    e.usage = n >>> 0;
  }, __wbg_set_view_dimension_893e2d16561e56e8: function(e, n) {
    e.viewDimension = le[n];
  }, __wbg_set_view_dimension_f2c5fe4bf927c3fe: function(e, n) {
    e.viewDimension = le[n];
  }, __wbg_set_view_formats_427069064d8b7139: function(e, n, _) {
    e.viewFormats = U(n, _);
  }, __wbg_set_visibility_d8a6821789538c25: function(e, n) {
    e.visibility = n >>> 0;
  }, __wbg_set_width_4c3a2252e0dea033: function(e, n) {
    e.width = n >>> 0;
  }, __wbg_set_width_b20525f5f4df4eb8: function(e, n) {
    e.width = n >>> 0;
  }, __wbg_set_width_f52a20e39808b138: function(e, n) {
    e.width = n >>> 0;
  }, __wbg_set_x_f470b03dd54724cd: function(e, n) {
    e.x = n >>> 0;
  }, __wbg_set_y_4c44eb40ebca5bfc: function(e, n) {
    e.y = n >>> 0;
  }, __wbg_set_z_2e6820ef0f5821ed: function(e, n) {
    e.z = n >>> 0;
  }, __wbg_shaderSource_108c27c8694ef4c0: function(e, n, _, r) {
    e.shaderSource(n, m(_, r));
  }, __wbg_shaderSource_82a2cbfe223a86e0: function(e, n, _, r) {
    e.shaderSource(n, m(_, r));
  }, __wbg_stack_3b0d974bbf31e44f: function(e, n) {
    const _ = n.stack, r = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), o = s;
    D().setInt32(e + 4, o, true), D().setInt32(e + 0, r, true);
  }, __wbg_static_accessor_GLOBAL_8eb4cd83130a11a0: function() {
    const e = typeof global > "u" ? null : global;
    return w(e) ? 0 : A(e);
  }, __wbg_static_accessor_GLOBAL_THIS_1e7044f654e934db: function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return w(e) ? 0 : A(e);
  }, __wbg_static_accessor_SELF_d8b50611246a6d92: function() {
    const e = typeof self > "u" ? null : self;
    return w(e) ? 0 : A(e);
  }, __wbg_static_accessor_WINDOW_fd0bc376bf0f8b42: function() {
    const e = typeof window > "u" ? null : window;
    return w(e) ? 0 : A(e);
  }, __wbg_stencilFuncSeparate_d7b5956ce3fe1272: function(e, n, _, r, o) {
    e.stencilFuncSeparate(n >>> 0, _ >>> 0, r, o >>> 0);
  }, __wbg_stencilFuncSeparate_fd17ac8961fd8359: function(e, n, _, r, o) {
    e.stencilFuncSeparate(n >>> 0, _ >>> 0, r, o >>> 0);
  }, __wbg_stencilMaskSeparate_5f3823dfe31289be: function(e, n, _) {
    e.stencilMaskSeparate(n >>> 0, _ >>> 0);
  }, __wbg_stencilMaskSeparate_d0910e6d55b4605a: function(e, n, _) {
    e.stencilMaskSeparate(n >>> 0, _ >>> 0);
  }, __wbg_stencilMask_4a8c4bda850006f1: function(e, n) {
    e.stencilMask(n >>> 0);
  }, __wbg_stencilMask_cb69051e26a265bb: function(e, n) {
    e.stencilMask(n >>> 0);
  }, __wbg_stencilOpSeparate_3fe9feaf978f0a17: function(e, n, _, r, o) {
    e.stencilOpSeparate(n >>> 0, _ >>> 0, r >>> 0, o >>> 0);
  }, __wbg_stencilOpSeparate_cb0bb47587f022de: function(e, n, _, r, o) {
    e.stencilOpSeparate(n >>> 0, _ >>> 0, r >>> 0, o >>> 0);
  }, __wbg_submit_077c85cc28e36892: function(e, n, _) {
    e.submit(U(n, _));
  }, __wbg_texImage2D_1b8d273f15622f0e: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texImage2D_6fca8c58ea7e4c8e: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texImage2D_8c5d6403fa51874d: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texImage3D_2bba05e03e9def07: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u, g) {
      e.texImage3D(n >>> 0, _, r, o, i, a, b, d >>> 0, u >>> 0, g);
    }, arguments);
  }, __wbg_texImage3D_3977c422ce82cf99: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u, g) {
      e.texImage3D(n >>> 0, _, r, o, i, a, b, d >>> 0, u >>> 0, g);
    }, arguments);
  }, __wbg_texParameteri_1fea50207adbfd68: function(e, n, _, r) {
    e.texParameteri(n >>> 0, _ >>> 0, r);
  }, __wbg_texParameteri_e127aa385b821d68: function(e, n, _, r) {
    e.texParameteri(n >>> 0, _ >>> 0, r);
  }, __wbg_texStorage2D_eb27b3383d99c349: function(e, n, _, r, o, i) {
    e.texStorage2D(n >>> 0, _, r >>> 0, o, i);
  }, __wbg_texStorage3D_cb53309842f2c8eb: function(e, n, _, r, o, i, a) {
    e.texStorage3D(n >>> 0, _, r >>> 0, o, i, a);
  }, __wbg_texSubImage2D_0542ae723245dd04: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_0721d9d910ecf097: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_11c39463147c9d38: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_21b4316b692aa7bc: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_339324fe86d9879e: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_6218009ef1e27c0e: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_79b4ac26a5580960: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage2D_892cfa51f196ee93: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u) {
      e.texSubImage2D(n >>> 0, _, r, o, i, a, b >>> 0, d >>> 0, u);
    }, arguments);
  }, __wbg_texSubImage3D_6458575ddb6df6b3: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u, g, p) {
      e.texSubImage3D(n >>> 0, _, r, o, i, a, b, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_747bc81ed2ed4116: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u, g, p) {
      e.texSubImage3D(n >>> 0, _, r, o, i, a, b, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_7a674dd9403f8be3: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u, g, p) {
      e.texSubImage3D(n >>> 0, _, r, o, i, a, b, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_805532d56bdd814d: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u, g, p) {
      e.texSubImage3D(n >>> 0, _, r, o, i, a, b, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_ad76ff2925daf174: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u, g, p) {
      e.texSubImage3D(n >>> 0, _, r, o, i, a, b, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_c65a616189ed3b19: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u, g, p) {
      e.texSubImage3D(n >>> 0, _, r, o, i, a, b, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_texSubImage3D_f99458987d5b061a: function() {
    return S(function(e, n, _, r, o, i, a, b, d, u, g, p) {
      e.texSubImage3D(n >>> 0, _, r, o, i, a, b, d, u >>> 0, g >>> 0, p);
    }, arguments);
  }, __wbg_then_7a850dae4493f353: function(e, n, _) {
    return e.then(n, _);
  }, __wbg_then_b830475380919203: function(e, n) {
    return e.then(n);
  }, __wbg_unconfigure_835307f58dc68d80: function(e) {
    e.unconfigure();
  }, __wbg_uniform1f_6067a9c69ed38c8b: function(e, n, _) {
    e.uniform1f(n, _);
  }, __wbg_uniform1f_d08261cd87e412e0: function(e, n, _) {
    e.uniform1f(n, _);
  }, __wbg_uniform1i_25a3df9f69c2f765: function(e, n, _) {
    e.uniform1i(n, _);
  }, __wbg_uniform1i_89c631d199860f60: function(e, n, _) {
    e.uniform1i(n, _);
  }, __wbg_uniform1ui_58cbbe1a93e44a02: function(e, n, _) {
    e.uniform1ui(n, _ >>> 0);
  }, __wbg_uniform2fv_6a494ce09154afdb: function(e, n, _, r) {
    e.uniform2fv(n, F(_, r));
  }, __wbg_uniform2fv_f85b3b2779a6c2b9: function(e, n, _, r) {
    e.uniform2fv(n, F(_, r));
  }, __wbg_uniform2iv_5c591a2edfd26c45: function(e, n, _, r) {
    e.uniform2iv(n, L(_, r));
  }, __wbg_uniform2iv_63a2ba7206eaf2b3: function(e, n, _, r) {
    e.uniform2iv(n, L(_, r));
  }, __wbg_uniform2uiv_aaa076c2f50b5c86: function(e, n, _, r) {
    e.uniform2uiv(n, W(_, r));
  }, __wbg_uniform3fv_2e139d144894f1ec: function(e, n, _, r) {
    e.uniform3fv(n, F(_, r));
  }, __wbg_uniform3fv_dfaba6b65cfc2c2b: function(e, n, _, r) {
    e.uniform3fv(n, F(_, r));
  }, __wbg_uniform3iv_700228c611ca323d: function(e, n, _, r) {
    e.uniform3iv(n, L(_, r));
  }, __wbg_uniform3iv_f32512d7179442f8: function(e, n, _, r) {
    e.uniform3iv(n, L(_, r));
  }, __wbg_uniform3uiv_c972de1ee5eb2b48: function(e, n, _, r) {
    e.uniform3uiv(n, W(_, r));
  }, __wbg_uniform4f_b5ea01e0388c425e: function(e, n, _, r, o, i) {
    e.uniform4f(n, _, r, o, i);
  }, __wbg_uniform4f_b9880b3e743b1cf3: function(e, n, _, r, o, i) {
    e.uniform4f(n, _, r, o, i);
  }, __wbg_uniform4fv_0763a5cfb3d561c9: function(e, n, _, r) {
    e.uniform4fv(n, F(_, r));
  }, __wbg_uniform4fv_95b1afba56301916: function(e, n, _, r) {
    e.uniform4fv(n, F(_, r));
  }, __wbg_uniform4iv_1269cd3a3f01909d: function(e, n, _, r) {
    e.uniform4iv(n, L(_, r));
  }, __wbg_uniform4iv_84dc6c0b2ea09256: function(e, n, _, r) {
    e.uniform4iv(n, L(_, r));
  }, __wbg_uniform4uiv_13ca9c250b538d85: function(e, n, _, r) {
    e.uniform4uiv(n, W(_, r));
  }, __wbg_uniformBlockBinding_d97dbfc1886608c9: function(e, n, _, r) {
    e.uniformBlockBinding(n, _ >>> 0, r >>> 0);
  }, __wbg_uniformMatrix2fv_4a95dd9315ceafce: function(e, n, _, r, o) {
    e.uniformMatrix2fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix2fv_554c771038fd18e7: function(e, n, _, r, o) {
    e.uniformMatrix2fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix2x3fv_18f2ff07b55f7458: function(e, n, _, r, o) {
    e.uniformMatrix2x3fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix2x4fv_2b66cdeb52233873: function(e, n, _, r, o) {
    e.uniformMatrix2x4fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix3fv_303d7eef53df7ed2: function(e, n, _, r, o) {
    e.uniformMatrix3fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix3fv_a9db97f34b3706b3: function(e, n, _, r, o) {
    e.uniformMatrix3fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix3x2fv_67c65614f0e122e8: function(e, n, _, r, o) {
    e.uniformMatrix3x2fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix3x4fv_e3bd46b1bf5227ed: function(e, n, _, r, o) {
    e.uniformMatrix3x4fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix4fv_db6f9ad4f00e3b76: function(e, n, _, r, o) {
    e.uniformMatrix4fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix4fv_e411faf4de6021c5: function(e, n, _, r, o) {
    e.uniformMatrix4fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix4x2fv_c59133281828fe8e: function(e, n, _, r, o) {
    e.uniformMatrix4x2fv(n, _ !== 0, F(r, o));
  }, __wbg_uniformMatrix4x3fv_dc85828b88505234: function(e, n, _, r, o) {
    e.uniformMatrix4x3fv(n, _ !== 0, F(r, o));
  }, __wbg_unmap_6a96b14c9ef5f7f5: function(e) {
    e.unmap();
  }, __wbg_useProgram_7019ac9ef4bdbe96: function(e, n) {
    e.useProgram(n);
  }, __wbg_useProgram_fcab4319331e0094: function(e, n) {
    e.useProgram(n);
  }, __wbg_valueOf_24fc886d85bf55b5: function(e) {
    return e.valueOf();
  }, __wbg_value_c227f843d21da141: function(e) {
    return e.value;
  }, __wbg_vertexAttribDivisorANGLE_5bebd4490e25d0f4: function(e, n, _) {
    e.vertexAttribDivisorANGLE(n >>> 0, _ >>> 0);
  }, __wbg_vertexAttribDivisor_e2a9ba8c397af61b: function(e, n, _) {
    e.vertexAttribDivisor(n >>> 0, _ >>> 0);
  }, __wbg_vertexAttribIPointer_660e209bed7575ab: function(e, n, _, r, o, i) {
    e.vertexAttribIPointer(n >>> 0, _, r >>> 0, o, i);
  }, __wbg_vertexAttribPointer_b6db7a62b9bda090: function(e, n, _, r, o, i, a) {
    e.vertexAttribPointer(n >>> 0, _, r >>> 0, o !== 0, i, a);
  }, __wbg_vertexAttribPointer_ed019b681b1aaacf: function(e, n, _, r, o, i, a) {
    e.vertexAttribPointer(n >>> 0, _, r >>> 0, o !== 0, i, a);
  }, __wbg_viewport_704a6159fb0395cb: function(e, n, _, r, o) {
    e.viewport(n, _, r, o);
  }, __wbg_viewport_f9d3214251b38c39: function(e, n, _, r, o) {
    e.viewport(n, _, r, o);
  }, __wbg_warn_d3544c7814fab534: function(e) {
    console.warn(e);
  }, __wbg_writeBuffer_f4bb3f54adfe1330: function() {
    return S(function(e, n, _, r, o, i, a) {
      e.writeBuffer(n, _, T(r, o), i, a);
    }, arguments);
  }, __wbg_writeTexture_30e592e8c061c3d9: function() {
    return S(function(e, n, _, r, o, i) {
      e.writeTexture(n, T(_, r), o, i);
    }, arguments);
  }, __wbindgen_generic_0000000000000001: function(e, n) {
    return X(e, n, Ue);
  }, __wbindgen_generic_0000000000000002: function(e, n) {
    return X(e, n, je);
  }, __wbindgen_generic_0000000000000003: function(e, n) {
    return X(e, n, Je);
  }, __wbindgen_generic_0000000000000004: function(e, n) {
    return X(e, n, qe);
  }, __wbindgen_generic_0000000000000005: function(e, n) {
    return X(e, n, Xe);
  }, __wbindgen_generic_0000000000000006: function(e) {
    return e;
  }, __wbindgen_generic_0000000000000007: function(e) {
    return e;
  }, __wbindgen_generic_0000000000000008: function(e, n) {
    return F(e, n);
  }, __wbindgen_generic_0000000000000009: function(e, n) {
    return nn(e, n);
  }, __wbindgen_generic_000000000000000a: function(e, n) {
    return L(e, n);
  }, __wbindgen_generic_000000000000000b: function(e, n) {
    return tn(e, n);
  }, __wbindgen_generic_000000000000000c: function(e, n) {
    return _n(e, n);
  }, __wbindgen_generic_000000000000000d: function(e, n) {
    return W(e, n);
  }, __wbindgen_generic_000000000000000e: function(e, n) {
    return T(e, n);
  }, __wbindgen_generic_000000000000000f: function(e, n) {
    return m(e, n);
  }, __wbindgen_generic_0000000000000010: function(e) {
    return BigInt.asUintN(64, e);
  }, __wbindgen_generic_0000000000000011: function(e, n) {
    var _ = F(e, n).slice();
    return t.__wbindgen_free(e, n * 4, 4), _;
  }, __wbindgen_generic_0000000000000012: function(e, n) {
    var _ = T(e, n).slice();
    return t.__wbindgen_free(e, n * 1, 1), _;
  }, __wbindgen_init_externref_table: function() {
    const e = t.__wbindgen_externrefs, n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, true), e.set(n + 3, false);
  } } };
}
function Je(c, e, n) {
  t.wasm_bindgen_acf9c2f2c9dd69b6___convert__closures_____invoke___wgpu_13387fd488b29474___backend__webgpu__webgpu_sys__gen_GpuDeviceLostInfo__GpuDeviceLostInfo______true_(c, e, n);
}
function Ue(c, e, n) {
  const _ = t.wasm_bindgen_acf9c2f2c9dd69b6___convert__closures_____invoke___wasm_bindgen_acf9c2f2c9dd69b6___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_acf9c2f2c9dd69b6___JsError___true_(c, e, n);
  if (_[1]) throw f(_[0]);
}
function je(c, e, n) {
  const _ = t.wasm_bindgen_acf9c2f2c9dd69b6___convert__closures_____invoke___wasm_bindgen_acf9c2f2c9dd69b6___sys__JsNullable_wgpu_13387fd488b29474___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_acf9c2f2c9dd69b6___JsError___true_(c, e, n);
  if (_[1]) throw f(_[0]);
}
function qe(c, e, n) {
  const _ = t.wasm_bindgen_acf9c2f2c9dd69b6___convert__closures_____invoke___wasm_bindgen_acf9c2f2c9dd69b6___sys__JsNullable_wgpu_13387fd488b29474___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_acf9c2f2c9dd69b6___JsError___true__440(c, e, n);
  if (_[1]) throw f(_[0]);
}
function Xe(c, e, n) {
  const _ = t.wasm_bindgen_acf9c2f2c9dd69b6___convert__closures_____invoke___wasm_bindgen_acf9c2f2c9dd69b6___sys__JsNullable_wgpu_13387fd488b29474___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_acf9c2f2c9dd69b6___JsError___true__441(c, e, n);
  if (_[1]) throw f(_[0]);
}
function Ae(c, e, n, _) {
  t.wasm_bindgen_acf9c2f2c9dd69b6___convert__closures_____invoke___js_sys_a7eb04f8bd1805db___Function_fn_wasm_bindgen_acf9c2f2c9dd69b6___JsValue_____wasm_bindgen_acf9c2f2c9dd69b6___sys__Undefined___js_sys_a7eb04f8bd1805db___Function_fn_wasm_bindgen_acf9c2f2c9dd69b6___JsValue_____wasm_bindgen_acf9c2f2c9dd69b6___sys__Undefined_______true_(c, e, n, _);
}
const Ke = ["auto"], He = ["uniform", "storage", "read-only-storage"], Qe = ["low-power", "high-performance"], $e = ["filtering", "non-filtering", "comparison"], Ze = ["write-only", "read-only", "read-write"], De = ["all", "stencil-only", "depth-only"], Ye = ["1d", "2d", "3d"], re = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16unorm", "r16snorm", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16unorm", "rg16snorm", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16unorm", "rgba16snorm", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"], en = ["float", "unfilterable-float", "depth", "sint", "uint"], le = ["1d", "2d", "2d-array", "cube", "cube-array", "3d"], Pe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_circuitsim_free(c, 1)), Me = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_mdsim_free(c, 1)), Fe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_physicssim_free(c, 1)), ke = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_raytracer_free(c, 1)), Te = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_sliceresult_free(c, 1)), fe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_slicersettings_free(c, 1)), Ee = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_solid_free(c, 1)), Ie = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_wasmannotationlayer_free(c, 1)), be = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_wasmcamsettings_free(c, 1)), de = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_wasmdocumentengine_free(c, 1)), Be = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_wasmkeybindings_free(c, 1)), Re = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbg_wasmsketchsession_free(c, 1));
function A(c) {
  const e = t.__externref_table_alloc();
  return t.__wbindgen_externrefs.set(e, c), e;
}
function M(c, e) {
  if (!(c instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
const Ce = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((c) => t.__wbindgen_destroy_closure(c.a, c.b));
function ge(c) {
  const e = typeof c;
  if (e == "number" || e == "boolean" || c == null) return `${c}`;
  if (e == "string") return `"${c}"`;
  if (e == "symbol") {
    const r = c.description;
    return r == null ? "Symbol" : `Symbol(${r})`;
  }
  if (e == "function") {
    const r = c.name;
    return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
  }
  if (Array.isArray(c)) {
    const r = c.length;
    let o = "[";
    r > 0 && (o += ge(c[0]));
    for (let i = 1; i < r; i++) o += ", " + ge(c[i]);
    return o += "]", o;
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(c));
  let _;
  if (n && n.length > 1) _ = n[1];
  else return toString.call(c);
  if (_ == "Object") try {
    return "Object(" + JSON.stringify(c) + ")";
  } catch {
    return "Object";
  }
  return c instanceof Error ? `${c.name}: ${c.message}
${c.stack}` : _;
}
function F(c, e) {
  return c = c >>> 0, Le().subarray(c / 4, c / 4 + e);
}
function we(c, e) {
  return c = c >>> 0, We().subarray(c / 8, c / 8 + e);
}
function nn(c, e) {
  return c = c >>> 0, rn().subarray(c / 2, c / 2 + e);
}
function L(c, e) {
  return c = c >>> 0, on().subarray(c / 4, c / 4 + e);
}
function tn(c, e) {
  return c = c >>> 0, cn().subarray(c / 1, c / 1 + e);
}
function Ge(c, e) {
  c = c >>> 0;
  const n = D(), _ = [];
  for (let r = c; r < c + 4 * e; r += 4) _.push(t.__wbindgen_externrefs.get(n.getUint32(r, true)));
  return t.__externref_drop_slice(c, e), _;
}
function U(c, e) {
  c = c >>> 0;
  const n = D(), _ = [];
  for (let r = c; r < c + 4 * e; r += 4) _.push(t.__wbindgen_externrefs.get(n.getUint32(r, true)));
  return _;
}
function _n(c, e) {
  return c = c >>> 0, an().subarray(c / 2, c / 2 + e);
}
function W(c, e) {
  return c = c >>> 0, Ve().subarray(c / 4, c / 4 + e);
}
function T(c, e) {
  return c = c >>> 0, q().subarray(c / 1, c / 1 + e);
}
let N = null;
function D() {
  return (N === null || N.buffer.detached === true || N.buffer.detached === void 0 && N.buffer !== t.memory.buffer) && (N = new DataView(t.memory.buffer)), N;
}
let K = null;
function Le() {
  return (K === null || K.byteLength === 0) && (K = new Float32Array(t.memory.buffer)), K;
}
let H = null;
function We() {
  return (H === null || H.byteLength === 0) && (H = new Float64Array(t.memory.buffer)), H;
}
let Q = null;
function rn() {
  return (Q === null || Q.byteLength === 0) && (Q = new Int16Array(t.memory.buffer)), Q;
}
let $ = null;
function on() {
  return ($ === null || $.byteLength === 0) && ($ = new Int32Array(t.memory.buffer)), $;
}
let Z = null;
function cn() {
  return (Z === null || Z.byteLength === 0) && (Z = new Int8Array(t.memory.buffer)), Z;
}
function m(c, e) {
  return fn(c >>> 0, e);
}
let Y = null;
function an() {
  return (Y === null || Y.byteLength === 0) && (Y = new Uint16Array(t.memory.buffer)), Y;
}
let ee = null;
function Ve() {
  return (ee === null || ee.byteLength === 0) && (ee = new Uint32Array(t.memory.buffer)), ee;
}
let ne = null;
function q() {
  return (ne === null || ne.byteLength === 0) && (ne = new Uint8Array(t.memory.buffer)), ne;
}
function S(c, e) {
  try {
    return c.apply(this, e);
  } catch (n) {
    const _ = A(n);
    t.__wbindgen_exn_store(_);
  }
}
function w(c) {
  return c == null;
}
function X(c, e, n) {
  const _ = { a: c, b: e, cnt: 1 }, r = (...o) => {
    _.cnt++;
    const i = _.a;
    _.a = 0;
    try {
      return n(i, _.b, ...o);
    } finally {
      _.a = i, r._wbg_cb_unref();
    }
  };
  return r._wbg_cb_unref = () => {
    --_.cnt === 0 && (t.__wbindgen_destroy_closure(_.a, _.b), _.a = 0, Ce.unregister(_));
  }, Ce.register(r, _, _), r;
}
function B(c, e) {
  const n = e(c.length * 4, 4) >>> 0;
  return Ve().set(c, n / 4), s = c.length, n;
}
function C(c, e) {
  const n = e(c.length * 1, 1) >>> 0;
  return q().set(c, n / 1), s = c.length, n;
}
function E(c, e) {
  const n = e(c.length * 4, 4) >>> 0;
  return Le().set(c, n / 4), s = c.length, n;
}
function P(c, e) {
  const n = e(c.length * 8, 8) >>> 0;
  return We().set(c, n / 8), s = c.length, n;
}
function sn(c, e) {
  const n = e(c.length * 4, 4) >>> 0;
  for (let _ = 0; _ < c.length; _++) {
    const r = A(c[_]);
    D().setUint32(n + 4 * _, r, true);
  }
  return s = c.length, n;
}
function l(c, e, n) {
  if (n === void 0) {
    const a = te.encode(c), b = e(a.length, 1) >>> 0;
    return q().subarray(b, b + a.length).set(a), s = a.length, b;
  }
  let _ = c.length, r = e(_, 1) >>> 0;
  const o = q();
  let i = 0;
  for (; i < _; i++) {
    const a = c.charCodeAt(i);
    if (a > 127) break;
    o[r + i] = a;
  }
  if (i !== _) {
    i !== 0 && (c = c.slice(i)), r = n(r, _, _ = i + c.length * 3, 1) >>> 0;
    const a = q().subarray(r + i, r + _), b = te.encodeInto(c, a);
    i += b.written, r = n(r, _, i, 1) >>> 0;
  }
  return s = i, r;
}
function f(c) {
  const e = t.__wbindgen_externrefs.get(c);
  return t.__externref_table_dealloc(c), e;
}
let oe = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
oe.decode();
const ln = 2146435072;
let ue = 0;
function fn(c, e) {
  return ue += e, ue >= ln && (oe = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), oe.decode(), ue = e), oe.decode(q().subarray(c, c + e));
}
const te = new TextEncoder();
"encodeInto" in te || (te.encodeInto = function(c, e) {
  const n = te.encode(c);
  return e.set(n), { read: c.length, written: n.length };
});
let s = 0, me, t;
function Oe(c, e) {
  return t = c.exports, me = e, N = null, K = null, H = null, Q = null, $ = null, Z = null, Y = null, ee = null, ne = null, t.__wbindgen_start(), t;
}
async function bn(c, e) {
  if (typeof Response == "function" && c instanceof Response) {
    if (!c.ok) throw new Error(`failed to fetch Wasm: ${c.status} ${c.statusText} fetching '${c.url}'`);
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(c, e);
    } catch (r) {
      if (n(c.type) && c.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const _ = await c.arrayBuffer();
    return await WebAssembly.instantiate(_, e);
  } else {
    const _ = await WebAssembly.instantiate(c, e);
    return _ instanceof WebAssembly.Instance ? { instance: _, module: c } : _;
  }
  function n(_) {
    switch (_) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function Fo(c) {
  if (t !== void 0) return t;
  c !== void 0 && (Object.getPrototypeOf(c) === Object.prototype ? { module: c } = c : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const e = ze();
  c instanceof WebAssembly.Module || (c = new WebAssembly.Module(c));
  const n = new WebAssembly.Instance(c, e);
  return Oe(n, c);
}
async function ko(c) {
  if (t !== void 0) return t;
  c !== void 0 && (Object.getPrototypeOf(c) === Object.prototype ? { module_or_path: c } = c : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), c === void 0 && (c = new URL("/vcad/v2026.09.09-7a6c777/assets/vcad_kernel_wasm_bg-DDLyhnE1.wasm", import.meta.url));
  const e = ze();
  (typeof c == "string" || typeof Request == "function" && c instanceof Request || typeof URL == "function" && c instanceof URL) && (c = fetch(c));
  const { instance: n, module: _ } = await bn(await c, e);
  return Oe(n, _);
}
function To() {
  t = void 0, me = void 0;
}
export {
  pe as CircuitSim,
  he as MdSim,
  ye as PhysicsSim,
  _e as RayTracer,
  V as SliceResult,
  O as SlicerSettings,
  v as Solid,
  ve as WasmAnnotationLayer,
  R as WasmCamSettings,
  j as WasmDocumentEngine,
  Se as WasmKeybindings,
  xe as WasmSketchSession,
  To as __vcad_reset_wasm,
  dn as analyzeForPrinting,
  un as analyzeStaticsBox,
  gn as analyzeStaticsMesh,
  wn as antennaAnalyze,
  mn as atoms_build_receipt,
  pn as atoms_homogenize,
  hn as atoms_inspect,
  yn as atoms_minimize,
  vn as atoms_parse_xyz,
  Sn as atoms_write_xyz,
  xn as buildCalibrationReportJson,
  An as buildGlbBytes,
  Dn as buildPart,
  Pn as buildStlBytes,
  Mn as build_chat_system_prompt,
  Fn as calibrationDefaultTolerance,
  kn as calibrationFingerprintDocument,
  Tn as camDropCutter,
  En as camExportGcode,
  In as camExportLinuxCnc,
  Bn as camGenerateCircularPocket,
  Rn as camGenerateContour,
  Cn as camGenerateFace,
  Gn as camGeneratePocket,
  zn as camGenerateRoughing3d,
  Ln as camGetDefaultTools,
  Wn as camToolpathStats,
  Vn as checkDesignConstraints,
  On as checkPrintability,
  Nn as checkSheetMetal,
  Jn as circuitAcResponse,
  Un as circuitDcOperatingPoint,
  jn as circuitFromSchematic,
  qn as circuitSensitivities,
  Xn as circuitTransient,
  Kn as circuitTune,
  Hn as computeCreasedNormalsGpu,
  Qn as computeMeshProperties,
  $n as computeMeshVolume,
  Zn as costSheetMetal,
  Yn as createDetailView,
  et as decimateMeshGpu,
  ko as default,
  nt as deriveParts,
  tt as digitizeSketch,
  _t as digitizeText,
  rt as documentDiff,
  ot as documentDiffApply,
  ct as documentDiffHuman,
  it as documentMerge,
  at as documentParameterGradient,
  st as documentSensitivities,
  lt as documentToLoon,
  ft as documentToLoonChecked,
  bt as documentToStepBuffer,
  dt as drawingSheetToPdf,
  ut as ecadAirgapFluxDensity,
  gt as ecadAirgapSolve,
  wt as ecadBuildReceipt,
  mt as ecadBuiltinSymbols,
  pt as ecadCheckDrc,
  ht as ecadCheckDrcInRegion,
  yt as ecadCheckErc,
  vt as ecadComponentMeshes,
  St as ecadComputeRatsnest,
  xt as ecadCritiqueRoute,
  At as ecadDfmCheck,
  Dt as ecadDfmDefaultPack,
  Pt as ecadEvaluateMotor,
  Mt as ecadExportFab,
  Ft as ecadFabPrep,
  kt as ecadFillZones,
  Tt as ecadFindAlternatives,
  Et as ecadFootprintForName,
  It as ecadGenerateNetlist,
  Bt as ecadGetSymbol,
  Rt as ecadJellybeanManifest,
  Ct as ecadLayerZ,
  Gt as ecadLengthMatch,
  zt as ecadNetContinuity,
  Lt as ecadNetForWire,
  Wt as ecadPartsManifest,
  Vt as ecadPcbPreviewMeshes,
  Ot as ecadResolveFootprint,
  Nt as ecadResolvePart,
  Jt as ecadResolvePartDef,
  Ut as ecadRouteAll,
  jt as ecadRouteDiffPair,
  qt as ecadRouteNet,
  Xt as ecadRouteNetMaze,
  Kt as ecadRouteNetShove,
  Ht as ecadSearchParts,
  Qt as ecadSnapToGridOrPin,
  $t as ecadVerifyReceipt,
  Zt as ecadVerifySubstitution,
  Yt as emSimulate,
  e_ as embroideryDesignToMesh,
  n_ as enclosure_component_extents,
  t_ as enclosure_connectors,
  __ as enclosure_derive_board,
  r_ as enclosure_features,
  o_ as enclosure_fit,
  c_ as enclosure_mounting_holes,
  i_ as enclosure_outline_aabb,
  a_ as enclosure_to_world,
  s_ as estimatePrintCost,
  l_ as estimate_cost_for_process,
  f_ as eulerXyzDegToQuat,
  b_ as evalVcadSource,
  d_ as evalVcadSourceParametric,
  u_ as evalVcadSourceWithModules,
  g_ as evaluateDocument,
  w_ as evaluateSheetMetalChain,
  m_ as evaluateVCode,
  p_ as exportKicadPcb,
  h_ as exportKicadProject,
  y_ as exportKicadSch,
  v_ as exportProjectedViewToDxf,
  S_ as exprEvalAst,
  x_ as exprEvaluate,
  A_ as exprParse,
  D_ as feaAnalyzeMesh,
  P_ as feaCheckBeam,
  M_ as flattenSolidToSheetMetal,
  F_ as generate3mf,
  k_ as generate3mfWithGcode,
  T_ as generateGcode,
  E_ as getCompiledModule,
  I_ as getPartsManifest,
  B_ as getSheetMetalBendTable,
  R_ as getSheetMetalMaterials,
  C_ as getSheetMetalShopCatalog,
  G_ as getSlicerPrinterProfiles,
  z_ as get_anthropic_tools_json,
  L_ as get_default_dfm_pack,
  W_ as get_kernel_version,
  V_ as get_tool_schemas,
  O_ as importStepBuffer,
  N_ as importStepBufferWithReport,
  J_ as importUrdfBuffer,
  U_ as importUrdfBufferWithOptions,
  j_ as init,
  q_ as initGpu,
  Fo as initSync,
  X_ as inspectDocumentFaces,
  K_ as isCamAvailable,
  H_ as isEcadAvailable,
  Q_ as isEmbroideryAvailable,
  $_ as isGpuAvailable,
  Z_ as isPhysicsAvailable,
  Y_ as isSlicerAvailable,
  er as latticeGaugeSimulate,
  nr as mesh_clearance,
  tr as nestSheetMetalParts,
  _r as nestedSheetMetalDxf,
  rr as neutronicsSimulate,
  or as noteToHz,
  cr as offsetSectionMesh,
  ir as op_chamfer,
  ar as op_circular_pattern,
  sr as op_fillet,
  lr as op_linear_pattern,
  fr as op_loft,
  br as op_revolve,
  dr as op_shell,
  ur as op_sweep_helix,
  gr as op_sweep_line,
  wr as parseAltiumAsciiPcb,
  mr as parseAltiumPcbDoc,
  pr as parseAltiumPcbLib,
  hr as parseEagleBrd,
  yr as parseKicadPcb,
  vr as parseVCode,
  Sr as parseVcadFile,
  xr as particleOptimize,
  Ar as particleSimulate,
  Dr as photonicsSimulate,
  Pr as plan_chat_tool,
  Mr as processGeometryGpu,
  Fr as projectMesh,
  kr as readEmbroideryDst,
  Tr as readEmbroideryPes,
  Er as recommendPrintSettings,
  Ir as registerStepSource,
  Br as renderBakeMesh,
  Rr as renderBomTable,
  Cr as renderTitleBlock,
  Gr as render_pcb_svg,
  zr as render_pcb_svg_opts,
  Lr as render_svg,
  Wr as render_svg_annotated,
  Vr as render_svg_camera,
  Or as render_svg_camera_opts,
  Nr as render_svg_view,
  Jr as render_svg_view_highlight,
  Ur as render_svg_view_section,
  jr as resolveDocumentJson,
  qr as resolveParametersJson,
  Xr as sample_timeline_sequence,
  Kr as sample_timeline_track,
  Hr as sectionMesh,
  Qr as sheetMetalFoldedStep,
  $r as sheetMetalSequence,
  Zr as simulateFlow,
  Yr as simulateStrikeKernel,
  eo as sketchCircleSegments,
  no as sketchHitTest,
  to as sketchPlaneBasis,
  _o as sketchPlaneIntersectRay,
  ro as sketchRectangleSegments,
  oo as sketchSnap,
  co as sketchToWorld,
  io as sketchWorldToSketch,
  ao as sliceMesh,
  so as sliceMeshWithProgress,
  lo as sliceSolid,
  fo as solveDesignConstraints,
  bo as solveForwardKinematics,
  uo as solveSketchSegments,
  go as stepSourceRegistered,
  wo as textBounds,
  mo as thermalSolve,
  po as thermalSolveTransient,
  ho as toVCode,
  yo as toleranceAnalyze,
  vo as topologyOptimizeBox,
  So as topologyOptimizeMesh,
  xo as transformMeshBuffers,
  Ao as unregisterStepSource,
  Do as urdfCommentedFloatingJoint,
  Po as writeEmbroideryDst,
  Mo as writeEmbroideryPes
};
