var e = class {
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Di.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_circuitsim_free(e8, 0);
  }
  dt() {
    return $.circuitsim_dt(this.__wbg_ptr);
  }
  constructor(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.circuitsim_new(t2, n2);
    if (r2[2]) throw X(r2[1]);
    return this.__wbg_ptr = r2[0], Di.register(this, this.__wbg_ptr, this), this;
  }
  observe() {
    let e8 = $.circuitsim_observe(this.__wbg_ptr);
    if (e8[2]) throw X(e8[1]);
    return X(e8[0]);
  }
  reset() {
    $.circuitsim_reset(this.__wbg_ptr);
  }
  setValue(e8, t2) {
    $.circuitsim_setValue(this.__wbg_ptr, e8, t2);
  }
  step(e8) {
    let t2 = $.circuitsim_step(this.__wbg_ptr, e8);
    if (t2[2]) throw X(t2[1]);
    return X(t2[0]);
  }
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class {
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Oi.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_incrementalevaluator_free(e8, 0);
  }
  clear() {
    $.incrementalevaluator_clear(this.__wbg_ptr);
  }
  evaluate(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.incrementalevaluator_evaluate(this.__wbg_ptr, n2, r2, t2);
    if (i2[2]) throw X(i2[1]);
    return X(i2[0]);
  }
  constructor() {
    let e8 = $.incrementalevaluator_new();
    return this.__wbg_ptr = e8, Oi.register(this, this.__wbg_ptr, this), this;
  }
  stats() {
    let e8 = $.incrementalevaluator_stats(this.__wbg_ptr);
    var t2 = O(e8[0], e8[1]).slice();
    return $.__wbindgen_free(e8[0], e8[1] * 4, 4), t2;
  }
};
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var n = class {
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ki.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_mdsim_free(e8, 0);
  }
  moleculeJson() {
    let e8, t2;
    try {
      let i2 = $.mdsim_moleculeJson(this.__wbg_ptr);
      var n2 = i2[0], r2 = i2[1];
      if (i2[3]) throw n2 = 0, r2 = 0, X(i2[2]);
      return e8 = n2, t2 = r2, L(n2, r2);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  constructor(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.mdsim_new(n2, r2, i2, a2);
    if (o2[2]) throw X(o2[1]);
    return this.__wbg_ptr = o2[0], ki.register(this, this.__wbg_ptr, this), this;
  }
  observe() {
    let e8, t2;
    try {
      let i2 = $.mdsim_observe(this.__wbg_ptr);
      var n2 = i2[0], r2 = i2[1];
      if (i2[3]) throw n2 = 0, r2 = 0, X(i2[2]);
      return e8 = n2, t2 = r2, L(n2, r2);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  reset() {
    let e8, t2;
    try {
      let i2 = $.mdsim_reset(this.__wbg_ptr);
      var n2 = i2[0], r2 = i2[1];
      if (i2[3]) throw n2 = 0, r2 = 0, X(i2[2]);
      return e8 = n2, t2 = r2, L(n2, r2);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  run(e8) {
    let t2, n2;
    try {
      let a2 = $.mdsim_run(this.__wbg_ptr, e8);
      var r2 = a2[0], i2 = a2[1];
      if (a2[3]) throw r2 = 0, i2 = 0, X(a2[2]);
      return t2 = r2, n2 = i2, L(r2, i2);
    } finally {
      $.__wbindgen_free(t2, n2, 1);
    }
  }
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var r = class {
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ai.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_physicssim_free(e8, 0);
  }
  actionDim() {
    return $.physicssim_actionDim(this.__wbg_ptr) >>> 0;
  }
  actuatedJointIds() {
    let e8 = $.physicssim_actuatedJointIds(this.__wbg_ptr);
    var t2 = Gi(e8[0], e8[1]);
    return $.__wbindgen_free(e8[0], e8[1] * 4, 4), t2;
  }
  jointIds() {
    let e8 = $.physicssim_jointIds(this.__wbg_ptr);
    var t2 = Gi(e8[0], e8[1]);
    return $.__wbindgen_free(e8[0], e8[1] * 4, 4), t2;
  }
  jointSlotCounts() {
    let e8 = $.physicssim_jointSlotCounts(this.__wbg_ptr);
    var t2 = O(e8[0], e8[1]).slice();
    return $.__wbindgen_free(e8[0], e8[1] * 4, 4), t2;
  }
  constructor(e8, t2, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = ea(t2, $.__wbindgen_malloc), f2 = Q;
    var p2 = U(i2) ? 0 : Y(i2, $.__wbindgen_malloc, $.__wbindgen_realloc), m2 = Q;
    let h2 = $.physicssim_new(l2, u2, d2, f2, U(n2) ? 2 ** 53 - 1 : Math.fround(n2), U(r2) ? 2 ** 53 - 1 : r2 >>> 0, p2, m2, U(a2) ? 16777215 : +!!a2, !U(o2), U(o2) ? 0 : o2, !U(s2), U(s2) ? 0 : s2, !U(c2), U(c2) ? 0 : c2);
    if (h2[2]) throw X(h2[1]);
    return this.__wbg_ptr = h2[0], Ai.register(this, this.__wbg_ptr, this), this;
  }
  numJoints() {
    return $.physicssim_numJoints(this.__wbg_ptr) >>> 0;
  }
  observationDim() {
    return $.physicssim_observationDim(this.__wbg_ptr) >>> 0;
  }
  observe() {
    return $.physicssim_observe(this.__wbg_ptr);
  }
  resetSeeded(e8) {
    return $.physicssim_resetSeeded(this.__wbg_ptr, e8);
  }
  reset() {
    return $.physicssim_reset(this.__wbg_ptr);
  }
  setJointGains(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.physicssim_setJointGains(this.__wbg_ptr, t2, n2);
    if (r2[1]) throw X(r2[0]);
  }
  setMaxSteps(e8) {
    $.physicssim_setMaxSteps(this.__wbg_ptr, e8);
  }
  setSeed(e8) {
    $.physicssim_setSeed(this.__wbg_ptr, e8);
  }
  stepPosition(e8) {
    let t2 = J(e8, $.__wbindgen_malloc), n2 = Q;
    return $.physicssim_stepPosition(this.__wbg_ptr, t2, n2);
  }
  stepTorque(e8) {
    let t2 = J(e8, $.__wbindgen_malloc), n2 = Q;
    return $.physicssim_stepTorque(this.__wbg_ptr, t2, n2);
  }
  stepVelocity(e8) {
    let t2 = J(e8, $.__wbindgen_malloc), n2 = Q;
    return $.physicssim_stepVelocity(this.__wbg_ptr, t2, n2);
  }
};
Symbol.dispose && (r.prototype[Symbol.dispose] = r.prototype.free);
var i = class e2 {
  static __wrap(t2) {
    let n2 = Object.create(e2.prototype);
    return n2.__wbg_ptr = t2, ji.register(n2, n2.__wbg_ptr, n2), n2;
  }
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ji.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_raytracer_free(e8, 0);
  }
  static canRaytrace(e8) {
    return w(e8, s), $.raytracer_canRaytrace(e8.__wbg_ptr) !== 0;
  }
  clearScene() {
    $.raytracer_clearScene(this.__wbg_ptr);
  }
  static create() {
    let t2 = $.raytracer_create();
    if (t2[2]) throw X(t2[1]);
    return e2.__wrap(t2[0]);
  }
  getDebugMode() {
    return $.raytracer_getDebugMode(this.__wbg_ptr) >>> 0;
  }
  getEdgeDetectionEnabled() {
    return $.raytracer_getEdgeDetectionEnabled(this.__wbg_ptr) !== 0;
  }
  getFrameIndex() {
    return $.raytracer_getFrameIndex(this.__wbg_ptr) >>> 0;
  }
  getRefineSamples() {
    return $.raytracer_getRefineSamples(this.__wbg_ptr) >>> 0;
  }
  hasScene() {
    return $.raytracer_hasScene(this.__wbg_ptr) !== 0;
  }
  pick(e8, t2, n2, r2, i2, a2, o2, s2) {
    let c2 = J(e8, $.__wbindgen_malloc), l2 = Q, u2 = J(t2, $.__wbindgen_malloc), d2 = Q, f2 = J(n2, $.__wbindgen_malloc), p2 = Q, m2 = $.raytracer_pick(this.__wbg_ptr, c2, l2, u2, d2, f2, p2, r2, i2, a2, o2, s2);
    if (m2[2]) throw X(m2[1]);
    return m2[0];
  }
  render(e8, t2, n2, r2, i2, a2) {
    let o2 = J(e8, $.__wbindgen_malloc), s2 = Q, c2 = J(t2, $.__wbindgen_malloc), l2 = Q, u2 = J(n2, $.__wbindgen_malloc), d2 = Q;
    return $.raytracer_render(this.__wbg_ptr, o2, s2, c2, l2, u2, d2, r2, i2, a2);
  }
  resetAccumulation() {
    $.raytracer_resetAccumulation(this.__wbg_ptr);
  }
  setDebugMode(e8) {
    $.raytracer_setDebugMode(this.__wbg_ptr, e8);
  }
  setEdgeDetection(e8, t2, n2) {
    $.raytracer_setEdgeDetection(this.__wbg_ptr, e8, t2, n2);
  }
  setEdgeStyle(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2) {
    $.raytracer_setEdgeStyle(this.__wbg_ptr, e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2);
  }
  setMaterialFromDef(e8, t2) {
    var n2 = U(e8) ? 0 : Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = U(t2) ? 0 : J(t2, $.__wbindgen_malloc), a2 = Q;
    let o2 = $.raytracer_setMaterialFromDef(this.__wbg_ptr, n2, r2, i2, a2);
    if (o2[1]) throw X(o2[0]);
  }
  setMaterial(e8, t2, n2, r2, i2) {
    let a2 = $.raytracer_setMaterial(this.__wbg_ptr, e8, t2, n2, r2, i2);
    if (a2[1]) throw X(a2[0]);
  }
  setPathTrace(e8, t2) {
    $.raytracer_setPathTrace(this.__wbg_ptr, e8, t2);
  }
  setRefineSamples(e8) {
    $.raytracer_setRefineSamples(this.__wbg_ptr, e8);
  }
  setTheme(e8) {
    $.raytracer_setTheme(this.__wbg_ptr, e8);
  }
  uploadSolidWithMaterial(e8, t2, n2, r2, i2, a2) {
    w(e8, s);
    let o2 = $.raytracer_uploadSolidWithMaterial(this.__wbg_ptr, e8.__wbg_ptr, t2, n2, r2, i2, a2);
    if (o2[1]) throw X(o2[0]);
  }
  uploadSolid(e8) {
    w(e8, s);
    let t2 = $.raytracer_uploadSolid(this.__wbg_ptr, e8.__wbg_ptr);
    if (t2[1]) throw X(t2[0]);
  }
};
Symbol.dispose && (i.prototype[Symbol.dispose] = i.prototype.free);
var a = class e3 {
  static __wrap(t2) {
    let n2 = Object.create(e3.prototype);
    return n2.__wbg_ptr = t2, Mi.register(n2, n2.__wbg_ptr, n2), n2;
  }
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Mi.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_sliceresult_free(e8, 0);
  }
  get filamentGrams() {
    return $.sliceresult_filamentGrams(this.__wbg_ptr);
  }
  get filamentMm() {
    return $.sliceresult_filamentMm(this.__wbg_ptr);
  }
  getLayerPreview(e8) {
    let t2 = $.sliceresult_getLayerPreview(this.__wbg_ptr, e8);
    if (t2[2]) throw X(t2[1]);
    return X(t2[0]);
  }
  get layerCount() {
    return $.sliceresult_layerCount(this.__wbg_ptr) >>> 0;
  }
  get printTimeSeconds() {
    return $.sliceresult_printTimeSeconds(this.__wbg_ptr);
  }
  statsJson() {
    let e8, t2;
    try {
      let i2 = $.sliceresult_statsJson(this.__wbg_ptr);
      var n2 = i2[0], r2 = i2[1];
      if (i2[3]) throw n2 = 0, r2 = 0, X(i2[2]);
      return e8 = n2, t2 = r2, L(n2, r2);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
};
Symbol.dispose && (a.prototype[Symbol.dispose] = a.prototype.free);
var o = class e4 {
  static __wrap(t2) {
    let n2 = Object.create(e4.prototype);
    return n2.__wbg_ptr = t2, Ni.register(n2, n2.__wbg_ptr, n2), n2;
  }
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ni.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_slicersettings_free(e8, 0);
  }
  get first_layer_height() {
    return $.__wbg_get_slicersettings_first_layer_height(this.__wbg_ptr);
  }
  get infill_density() {
    return $.__wbg_get_slicersettings_infill_density(this.__wbg_ptr);
  }
  get infill_pattern() {
    return $.__wbg_get_slicersettings_infill_pattern(this.__wbg_ptr) >>> 0;
  }
  get layer_height() {
    return $.__wbg_get_slicersettings_layer_height(this.__wbg_ptr);
  }
  get line_width() {
    return $.__wbg_get_slicersettings_line_width(this.__wbg_ptr);
  }
  get nozzle_diameter() {
    return $.__wbg_get_slicersettings_nozzle_diameter(this.__wbg_ptr);
  }
  get support_angle() {
    return $.__wbg_get_slicersettings_support_angle(this.__wbg_ptr);
  }
  get support_enabled() {
    return $.__wbg_get_slicersettings_support_enabled(this.__wbg_ptr) !== 0;
  }
  get wall_count() {
    return $.__wbg_get_slicersettings_wall_count(this.__wbg_ptr) >>> 0;
  }
  set first_layer_height(e8) {
    $.__wbg_set_slicersettings_first_layer_height(this.__wbg_ptr, e8);
  }
  set infill_density(e8) {
    $.__wbg_set_slicersettings_infill_density(this.__wbg_ptr, e8);
  }
  set infill_pattern(e8) {
    $.__wbg_set_slicersettings_infill_pattern(this.__wbg_ptr, e8);
  }
  set layer_height(e8) {
    $.__wbg_set_slicersettings_layer_height(this.__wbg_ptr, e8);
  }
  set line_width(e8) {
    $.__wbg_set_slicersettings_line_width(this.__wbg_ptr, e8);
  }
  set nozzle_diameter(e8) {
    $.__wbg_set_slicersettings_nozzle_diameter(this.__wbg_ptr, e8);
  }
  set support_angle(e8) {
    $.__wbg_set_slicersettings_support_angle(this.__wbg_ptr, e8);
  }
  set support_enabled(e8) {
    $.__wbg_set_slicersettings_support_enabled(this.__wbg_ptr, e8);
  }
  set wall_count(e8) {
    $.__wbg_set_slicersettings_wall_count(this.__wbg_ptr, e8);
  }
  static fromJson(t2) {
    let n2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.slicersettings_fromJson(n2, r2);
    if (i2[2]) throw X(i2[1]);
    return e4.__wrap(i2[0]);
  }
  constructor() {
    let e8 = $.slicersettings_new();
    return this.__wbg_ptr = e8, Ni.register(this, this.__wbg_ptr, this), this;
  }
};
Symbol.dispose && (o.prototype[Symbol.dispose] = o.prototype.free);
var s = class e5 {
  static __wrap(t2) {
    let n2 = Object.create(e5.prototype);
    return n2.__wbg_ptr = t2, Pi.register(n2, n2.__wbg_ptr, n2), n2;
  }
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pi.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_solid_free(e8, 0);
  }
  boundaryEdges(e8) {
    let t2 = $.solid_boundaryEdges(this.__wbg_ptr, U(e8) ? 2 ** 53 - 1 : e8 >>> 0);
    var n2 = T(t2[0], t2[1]).slice();
    return $.__wbindgen_free(t2[0], t2[1] * 4, 4), n2;
  }
  boundingBox() {
    let e8 = $.solid_boundingBox(this.__wbg_ptr);
    var t2 = Hi(e8[0], e8[1]).slice();
    return $.__wbindgen_free(e8[0], e8[1] * 8, 8), t2;
  }
  canExportStep() {
    return $.solid_canExportStep(this.__wbg_ptr) !== 0;
  }
  centerOfMass() {
    let e8 = $.solid_centerOfMass(this.__wbg_ptr);
    var t2 = Hi(e8[0], e8[1]).slice();
    return $.__wbindgen_free(e8[0], e8[1] * 8, 8), t2;
  }
  chamfer(t2) {
    let n2 = $.solid_chamfer(this.__wbg_ptr, t2);
    if (n2[2]) throw X(n2[1]);
    return e5.__wrap(n2[0]);
  }
  circularPattern(t2, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = $.solid_circularPattern(this.__wbg_ptr, t2, n2, r2, i2, a2, o2, s2, c2);
    return e5.__wrap(l2);
  }
  clearance(t2) {
    w(t2, e5);
    let n2 = $.solid_clearance(this.__wbg_ptr, t2.__wbg_ptr);
    if (n2[2]) throw X(n2[1]);
    return X(n2[0]);
  }
  static cone(t2, n2, r2, i2) {
    let a2 = $.solid_cone(t2, n2, r2, U(i2) ? 2 ** 53 - 1 : i2 >>> 0);
    return e5.__wrap(a2);
  }
  static cube(t2, n2, r2) {
    let i2 = $.solid_cube(t2, n2, r2);
    return e5.__wrap(i2);
  }
  static cylinder(t2, n2, r2) {
    let i2 = $.solid_cylinder(t2, n2, U(r2) ? 2 ** 53 - 1 : r2 >>> 0);
    return e5.__wrap(i2);
  }
  difference(t2) {
    w(t2, e5);
    let n2 = $.solid_difference(this.__wbg_ptr, t2.__wbg_ptr);
    if (n2[2]) throw X(n2[1]);
    return e5.__wrap(n2[0]);
  }
  edgeBlend(t2) {
    let n2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.solid_edgeBlend(this.__wbg_ptr, n2, r2);
    if (i2[2]) throw X(i2[1]);
    return e5.__wrap(i2[0]);
  }
  static empty() {
    let t2 = $.solid_empty();
    return e5.__wrap(t2);
  }
  static extrudeWithOptions(t2, n2, r2, i2) {
    let a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = J(n2, $.__wbindgen_malloc), c2 = Q, l2 = $.solid_extrudeWithOptions(a2, o2, s2, c2, r2, i2);
    if (l2[2]) throw X(l2[1]);
    return e5.__wrap(l2[0]);
  }
  static extrude(t2, n2) {
    let r2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = J(n2, $.__wbindgen_malloc), o2 = Q, s2 = $.solid_extrude(r2, i2, a2, o2);
    if (s2[2]) throw X(s2[1]);
    return e5.__wrap(s2[0]);
  }
  fillet(t2) {
    let n2 = $.solid_fillet(this.__wbg_ptr, t2);
    if (n2[2]) throw X(n2[1]);
    return e5.__wrap(n2[0]);
  }
  static fromRegisteredStep(t2, n2) {
    let r2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.solid_fromRegisteredStep(r2, i2, U(n2) ? 2 ** 53 - 1 : n2 >>> 0);
    if (a2[2]) throw X(a2[1]);
    return e5.__wrap(a2[0]);
  }
  getMesh(e8) {
    return $.solid_getMesh(this.__wbg_ptr, U(e8) ? 2 ** 53 - 1 : e8 >>> 0);
  }
  horizontalSection(e8, t2, n2, r2) {
    return $.solid_horizontalSection(this.__wbg_ptr, e8, !U(t2), U(t2) ? 0 : t2, !U(n2), U(n2) ? 0 : n2, U(r2) ? 2 ** 53 - 1 : r2 >>> 0);
  }
  static hullPoints(t2) {
    let n2 = J(t2, $.__wbindgen_malloc), r2 = Q, i2 = $.solid_hullPoints(n2, r2);
    if (i2[2]) throw X(i2[1]);
    return e5.__wrap(i2[0]);
  }
  hullWith(t2) {
    w(t2, e5);
    let n2 = $.solid_hullWith(this.__wbg_ptr, t2.__wbg_ptr);
    if (n2[2]) throw X(n2[1]);
    return e5.__wrap(n2[0]);
  }
  intersection(t2) {
    w(t2, e5);
    let n2 = $.solid_intersection(this.__wbg_ptr, t2.__wbg_ptr);
    if (n2[2]) throw X(n2[1]);
    return e5.__wrap(n2[0]);
  }
  isEmpty() {
    return $.solid_isEmpty(this.__wbg_ptr) !== 0;
  }
  linearPattern(t2, n2, r2, i2, a2) {
    let o2 = $.solid_linearPattern(this.__wbg_ptr, t2, n2, r2, i2, a2);
    return e5.__wrap(o2);
  }
  static loft(t2, n2) {
    let r2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.solid_loft(r2, i2, U(n2) ? 16777215 : +!!n2);
    if (a2[2]) throw X(a2[1]);
    return e5.__wrap(a2[0]);
  }
  mirror(t2, n2, r2, i2, a2, o2) {
    let s2 = $.solid_mirror(this.__wbg_ptr, t2, n2, r2, i2, a2, o2);
    return e5.__wrap(s2);
  }
  numTriangles() {
    return $.solid_numTriangles(this.__wbg_ptr) >>> 0;
  }
  static prism(t2, n2, r2) {
    let i2 = $.solid_prism(t2, n2, r2);
    return e5.__wrap(i2);
  }
  projectView(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q;
    return $.solid_projectView(this.__wbg_ptr, n2, r2, U(t2) ? 2 ** 53 - 1 : t2 >>> 0);
  }
  static revolve(t2, n2, r2, i2) {
    let a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = J(n2, $.__wbindgen_malloc), c2 = Q, l2 = J(r2, $.__wbindgen_malloc), u2 = Q, d2 = $.solid_revolve(a2, o2, s2, c2, l2, u2, i2);
    if (d2[2]) throw X(d2[1]);
    return e5.__wrap(d2[0]);
  }
  rotate(t2, n2, r2) {
    let i2 = $.solid_rotate(this.__wbg_ptr, t2, n2, r2);
    return e5.__wrap(i2);
  }
  runDfm(e8, t2, n2) {
    let r2, i2;
    try {
      let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = $.solid_runDfm(this.__wbg_ptr, s2, c2, l2, u2, n2);
      var a2 = d2[0], o2 = d2[1];
      if (d2[3]) throw a2 = 0, o2 = 0, X(d2[2]);
      return r2 = a2, i2 = o2, L(a2, o2);
    } finally {
      $.__wbindgen_free(r2, i2, 1);
    }
  }
  scale(t2, n2, r2) {
    let i2 = $.solid_scale(this.__wbg_ptr, t2, n2, r2);
    return e5.__wrap(i2);
  }
  sectionView(e8, t2, n2) {
    let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q;
    var a2 = U(t2) ? 0 : Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q;
    return $.solid_sectionView(this.__wbg_ptr, r2, i2, a2, o2, U(n2) ? 2 ** 53 - 1 : n2 >>> 0);
  }
  shell(t2) {
    let n2 = $.solid_shell(this.__wbg_ptr, t2);
    if (n2[2]) throw X(n2[1]);
    return e5.__wrap(n2[0]);
  }
  static sphere(t2, n2) {
    let r2 = $.solid_sphere(t2, U(n2) ? 2 ** 53 - 1 : n2 >>> 0);
    return e5.__wrap(r2);
  }
  surfaceArea() {
    return $.solid_surfaceArea(this.__wbg_ptr);
  }
  static sweepHelix(t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
    let f2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = $.solid_sweepHelix(f2, p2, n2, r2, i2, a2, !U(o2), U(o2) ? 0 : o2, !U(s2), U(s2) ? 0 : s2, !U(c2), U(c2) ? 0 : c2, U(l2) ? 2 ** 53 - 1 : l2 >>> 0, U(u2) ? 2 ** 53 - 1 : u2 >>> 0, !U(d2), U(d2) ? 0 : d2);
    if (m2[2]) throw X(m2[1]);
    return e5.__wrap(m2[0]);
  }
  static sweepLine(t2, n2, r2, i2, a2, o2, s2) {
    let c2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = J(n2, $.__wbindgen_malloc), d2 = Q, f2 = J(r2, $.__wbindgen_malloc), p2 = Q, m2 = $.solid_sweepLine(c2, l2, u2, d2, f2, p2, !U(i2), U(i2) ? 0 : i2, !U(a2), U(a2) ? 0 : a2, !U(o2), U(o2) ? 0 : o2, !U(s2), U(s2) ? 0 : s2);
    if (m2[2]) throw X(m2[1]);
    return e5.__wrap(m2[0]);
  }
  sweepRotate(t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
    let d2 = $.solid_sweepRotate(this.__wbg_ptr, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2);
    return e5.__wrap(d2);
  }
  static textExtrude(t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
    let d2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), f2 = Q, p2 = J(n2, $.__wbindgen_malloc), m2 = Q, h2 = J(r2, $.__wbindgen_malloc), g2 = Q, _2 = J(i2, $.__wbindgen_malloc), v2 = Q, y2 = J(a2, $.__wbindgen_malloc), ee2 = Q;
    var te2 = U(s2) ? 0 : Y(s2, $.__wbindgen_malloc, $.__wbindgen_realloc), ne2 = Q, b2 = U(c2) ? 0 : Y(c2, $.__wbindgen_malloc, $.__wbindgen_realloc), re2 = Q;
    let x2 = $.solid_textExtrude(d2, f2, p2, m2, h2, g2, _2, v2, y2, ee2, o2, te2, ne2, b2, re2, !U(l2), U(l2) ? 0 : l2, !U(u2), U(u2) ? 0 : u2);
    if (x2[2]) throw X(x2[1]);
    return e5.__wrap(x2[0]);
  }
  toStepBuffer() {
    let e8 = $.solid_toStepBuffer(this.__wbg_ptr);
    if (e8[3]) throw X(e8[2]);
    var t2 = k(e8[0], e8[1]).slice();
    return $.__wbindgen_free(e8[0], e8[1] * 1, 1), t2;
  }
  static torus(t2, n2, r2) {
    let i2 = $.solid_torus(t2, n2, U(r2) ? 2 ** 53 - 1 : r2 >>> 0);
    return e5.__wrap(i2);
  }
  translate(t2, n2, r2) {
    let i2 = $.solid_translate(this.__wbg_ptr, t2, n2, r2);
    return e5.__wrap(i2);
  }
  union(t2) {
    w(t2, e5);
    let n2 = $.solid_union(this.__wbg_ptr, t2.__wbg_ptr);
    if (n2[2]) throw X(n2[1]);
    return e5.__wrap(n2[0]);
  }
  volume() {
    return $.solid_volume(this.__wbg_ptr);
  }
  static wedge(t2, n2, r2) {
    let i2 = $.solid_wedge(t2, n2, r2);
    return e5.__wrap(i2);
  }
};
Symbol.dispose && (s.prototype[Symbol.dispose] = s.prototype.free);
var c = class {
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Fi.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_wasmannotationlayer_free(e8, 0);
  }
  addAlignedDimension(e8, t2, n2, r2, i2) {
    $.wasmannotationlayer_addAlignedDimension(this.__wbg_ptr, e8, t2, n2, r2, i2);
  }
  addAngleDimension(e8, t2, n2, r2, i2, a2, o2) {
    $.wasmannotationlayer_addAngleDimension(this.__wbg_ptr, e8, t2, n2, r2, i2, a2, o2);
  }
  addDiameterDimension(e8, t2, n2, r2) {
    $.wasmannotationlayer_addDiameterDimension(this.__wbg_ptr, e8, t2, n2, r2);
  }
  addHorizontalDimension(e8, t2, n2, r2, i2) {
    $.wasmannotationlayer_addHorizontalDimension(this.__wbg_ptr, e8, t2, n2, r2, i2);
  }
  addRadiusDimension(e8, t2, n2, r2) {
    $.wasmannotationlayer_addRadiusDimension(this.__wbg_ptr, e8, t2, n2, r2);
  }
  addVerticalDimension(e8, t2, n2, r2, i2) {
    $.wasmannotationlayer_addVerticalDimension(this.__wbg_ptr, e8, t2, n2, r2, i2);
  }
  annotationCount() {
    return $.wasmannotationlayer_annotationCount(this.__wbg_ptr) >>> 0;
  }
  clear() {
    $.wasmannotationlayer_clear(this.__wbg_ptr);
  }
  isEmpty() {
    return $.wasmannotationlayer_isEmpty(this.__wbg_ptr) !== 0;
  }
  constructor() {
    let e8 = $.wasmannotationlayer_new();
    return this.__wbg_ptr = e8, Fi.register(this, this.__wbg_ptr, this), this;
  }
  renderAll(e8) {
    var t2 = U(e8) ? 0 : Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
    return $.wasmannotationlayer_renderAll(this.__wbg_ptr, t2, n2);
  }
};
Symbol.dispose && (c.prototype[Symbol.dispose] = c.prototype.free);
var l = class e6 {
  static __wrap(t2) {
    let n2 = Object.create(e6.prototype);
    return n2.__wbg_ptr = t2, Ii.register(n2, n2.__wbg_ptr, n2), n2;
  }
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ii.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_wasmcamsettings_free(e8, 0);
  }
  get feed_rate() {
    return $.__wbg_get_wasmcamsettings_feed_rate(this.__wbg_ptr);
  }
  get plunge_rate() {
    return $.__wbg_get_wasmcamsettings_plunge_rate(this.__wbg_ptr);
  }
  get retract_z() {
    return $.__wbg_get_wasmcamsettings_retract_z(this.__wbg_ptr);
  }
  get safe_z() {
    return $.__wbg_get_wasmcamsettings_safe_z(this.__wbg_ptr);
  }
  get spindle_rpm() {
    return $.__wbg_get_wasmcamsettings_spindle_rpm(this.__wbg_ptr);
  }
  get stepdown() {
    return $.__wbg_get_wasmcamsettings_stepdown(this.__wbg_ptr);
  }
  get stepover() {
    return $.__wbg_get_wasmcamsettings_stepover(this.__wbg_ptr);
  }
  set feed_rate(e8) {
    $.__wbg_set_wasmcamsettings_feed_rate(this.__wbg_ptr, e8);
  }
  set plunge_rate(e8) {
    $.__wbg_set_wasmcamsettings_plunge_rate(this.__wbg_ptr, e8);
  }
  set retract_z(e8) {
    $.__wbg_set_wasmcamsettings_retract_z(this.__wbg_ptr, e8);
  }
  set safe_z(e8) {
    $.__wbg_set_wasmcamsettings_safe_z(this.__wbg_ptr, e8);
  }
  set spindle_rpm(e8) {
    $.__wbg_set_wasmcamsettings_spindle_rpm(this.__wbg_ptr, e8);
  }
  set stepdown(e8) {
    $.__wbg_set_wasmcamsettings_stepdown(this.__wbg_ptr, e8);
  }
  set stepover(e8) {
    $.__wbg_set_wasmcamsettings_stepover(this.__wbg_ptr, e8);
  }
  static fromJson(t2) {
    let n2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.wasmcamsettings_fromJson(n2, r2);
    if (i2[2]) throw X(i2[1]);
    return e6.__wrap(i2[0]);
  }
  constructor() {
    let e8 = $.wasmcamsettings_new();
    return this.__wbg_ptr = e8, Ii.register(this, this.__wbg_ptr, this), this;
  }
};
Symbol.dispose && (l.prototype[Symbol.dispose] = l.prototype.free);
var u = class e7 {
  static __wrap(t2) {
    let n2 = Object.create(e7.prototype);
    return n2.__wbg_ptr = t2, Li.register(n2, n2.__wbg_ptr, n2), n2;
  }
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Li.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_wasmdocumentengine_free(e8, 0);
  }
  add_feature(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
    return $.wasmdocumentengine_add_feature(this.__wbg_ptr, t2, n2);
  }
  applyDelta(e8) {
    let t2, n2;
    try {
      let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.wasmdocumentengine_applyDelta(this.__wbg_ptr, r2, i2);
      return t2 = a2[0], n2 = a2[1], L(a2[0], a2[1]);
    } finally {
      $.__wbindgen_free(t2, n2, 1);
    }
  }
  applyToolDelta(e8, t2) {
    let n2, r2;
    try {
      let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = $.wasmdocumentengine_applyToolDelta(this.__wbg_ptr, i2, a2, o2, s2);
      return n2 = c2[0], r2 = c2[1], L(c2[0], c2[1]);
    } finally {
      $.__wbindgen_free(n2, r2, 1);
    }
  }
  apply(e8) {
    let t2, n2;
    try {
      let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.wasmdocumentengine_apply(this.__wbg_ptr, r2, i2);
      return t2 = a2[0], n2 = a2[1], L(a2[0], a2[1]);
    } finally {
      $.__wbindgen_free(t2, n2, 1);
    }
  }
  apply_tool(e8, t2) {
    let n2, r2;
    try {
      let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = $.wasmdocumentengine_apply_tool(this.__wbg_ptr, i2, a2, o2, s2);
      return n2 = c2[0], r2 = c2[1], L(c2[0], c2[1]);
    } finally {
      $.__wbindgen_free(n2, r2, 1);
    }
  }
  can_redo() {
    return $.wasmdocumentengine_can_redo(this.__wbg_ptr) !== 0;
  }
  can_undo() {
    return $.wasmdocumentengine_can_undo(this.__wbg_ptr) !== 0;
  }
  compute_position_between(e8, t2) {
    let n2, r2;
    try {
      let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = $.wasmdocumentengine_compute_position_between(this.__wbg_ptr, i2, a2, o2, s2);
      return n2 = c2[0], r2 = c2[1], L(c2[0], c2[1]);
    } finally {
      $.__wbindgen_free(n2, r2, 1);
    }
  }
  create_feature(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    return $.wasmdocumentengine_create_feature(this.__wbg_ptr, n2, r2, i2, a2);
  }
  delete_feature(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
    return $.wasmdocumentengine_delete_feature(this.__wbg_ptr, t2, n2);
  }
  delete_feature_by_id(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
    return $.wasmdocumentengine_delete_feature_by_id(this.__wbg_ptr, t2, n2);
  }
  evaluateIncremental(e8, n2, r2) {
    w(e8, t);
    let i2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.wasmdocumentengine_evaluateIncremental(this.__wbg_ptr, e8.__wbg_ptr, i2, a2, r2);
    if (o2[2]) throw X(o2[1]);
    return X(o2[0]);
  }
  static from_v1_json(t2) {
    let n2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.wasmdocumentengine_from_v1_json(n2, r2);
    if (i2[2]) throw X(i2[1]);
    return e7.__wrap(i2[0]);
  }
  get_document_json() {
    let e8, t2;
    try {
      let n2 = $.wasmdocumentengine_get_document_json(this.__wbg_ptr);
      return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  get_ops_since(e8) {
    let t2, n2;
    try {
      let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.wasmdocumentengine_get_ops_since(this.__wbg_ptr, r2, i2);
      return t2 = a2[0], n2 = a2[1], L(a2[0], a2[1]);
    } finally {
      $.__wbindgen_free(t2, n2, 1);
    }
  }
  get_ordered_features_json() {
    let e8, t2;
    try {
      let n2 = $.wasmdocumentengine_get_ordered_features_json(this.__wbg_ptr);
      return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  get_parts_json() {
    let e8, t2;
    try {
      let n2 = $.wasmdocumentengine_get_parts_json(this.__wbg_ptr);
      return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  get_sync_clock() {
    let e8, t2;
    try {
      let n2 = $.wasmdocumentengine_get_sync_clock(this.__wbg_ptr);
      return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  import_ir(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
    return $.wasmdocumentengine_import_ir(this.__wbg_ptr, t2, n2);
  }
  static load(t2) {
    let n2 = K(t2, $.__wbindgen_malloc), r2 = Q, i2 = $.wasmdocumentengine_load(n2, r2);
    if (i2[2]) throw X(i2[1]);
    return e7.__wrap(i2[0]);
  }
  merge_remote(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
    return $.wasmdocumentengine_merge_remote(this.__wbg_ptr, t2, n2);
  }
  move_feature(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    return $.wasmdocumentengine_move_feature(this.__wbg_ptr, n2, r2, i2, a2);
  }
  constructor() {
    let e8 = $.wasmdocumentengine_new();
    return this.__wbg_ptr = e8, Li.register(this, this.__wbg_ptr, this), this;
  }
  redo() {
    return $.wasmdocumentengine_redo(this.__wbg_ptr);
  }
  remapBindings(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.wasmdocumentengine_remapBindings(this.__wbg_ptr, t2, n2);
    if (r2[2]) throw X(r2[1]);
    return X(r2[0]);
  }
  rename_feature(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    return $.wasmdocumentengine_rename_feature(this.__wbg_ptr, n2, r2, i2, a2);
  }
  save() {
    let e8 = $.wasmdocumentengine_save(this.__wbg_ptr);
    var t2 = k(e8[0], e8[1]).slice();
    return $.__wbindgen_free(e8[0], e8[1] * 1, 1), t2;
  }
  set_joint_state(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q;
    return $.wasmdocumentengine_set_joint_state(this.__wbg_ptr, n2, r2, t2);
  }
  set_material(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    return $.wasmdocumentengine_set_material(this.__wbg_ptr, n2, r2, i2, a2);
  }
  set_param(e8, t2, n2) {
    let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q;
    return $.wasmdocumentengine_set_param(this.__wbg_ptr, r2, i2, a2, o2, s2, c2);
  }
  set_rotation(e8, t2, n2, r2) {
    let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    return $.wasmdocumentengine_set_rotation(this.__wbg_ptr, i2, a2, t2, n2, r2);
  }
  set_scale(e8, t2, n2, r2) {
    let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    return $.wasmdocumentengine_set_scale(this.__wbg_ptr, i2, a2, t2, n2, r2);
  }
  set_translation(e8, t2, n2, r2) {
    let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    return $.wasmdocumentengine_set_translation(this.__wbg_ptr, i2, a2, t2, n2, r2);
  }
  set_visible(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q;
    return $.wasmdocumentengine_set_visible(this.__wbg_ptr, n2, r2, t2);
  }
  stateEnvelope() {
    let e8, t2;
    try {
      let n2 = $.wasmdocumentengine_stateEnvelope(this.__wbg_ptr);
      return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  stateHash() {
    let e8, t2;
    try {
      let n2 = $.wasmdocumentengine_stateHash(this.__wbg_ptr);
      return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  undo() {
    return $.wasmdocumentengine_undo(this.__wbg_ptr);
  }
  update_feature(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    return $.wasmdocumentengine_update_feature(this.__wbg_ptr, n2, r2, i2, a2);
  }
  static withReplica(t2) {
    let n2 = $.wasmdocumentengine_withReplica(t2);
    return e7.__wrap(n2);
  }
};
Symbol.dispose && (u.prototype[Symbol.dispose] = u.prototype.free);
var d = class {
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ri.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_wasmkeybindings_free(e8, 0);
  }
  chordFor(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.wasmkeybindings_chordFor(this.__wbg_ptr, t2, n2), i2;
    return r2[0] !== 0 && (i2 = L(r2[0], r2[1]), $.__wbindgen_free(r2[0], r2[1] * 1, 1)), i2;
  }
  commandsJson() {
    let e8, t2;
    try {
      let n2 = $.wasmkeybindings_commandsJson(this.__wbg_ptr);
      return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  conflictsJson(e8) {
    let t2, n2;
    try {
      let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.wasmkeybindings_conflictsJson(this.__wbg_ptr, r2, i2);
      return t2 = a2[0], n2 = a2[1], L(a2[0], a2[1]);
    } finally {
      $.__wbindgen_free(t2, n2, 1);
    }
  }
  loadOverrides(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
    return $.wasmkeybindings_loadOverrides(this.__wbg_ptr, t2, n2) !== 0;
  }
  constructor() {
    let e8 = $.wasmkeybindings_new();
    return this.__wbg_ptr = e8, Ri.register(this, this.__wbg_ptr, this), this;
  }
  resetAll() {
    $.wasmkeybindings_resetAll(this.__wbg_ptr);
  }
  resolve(e8, t2, n2) {
    let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.wasmkeybindings_resolve(this.__wbg_ptr, r2, i2, a2, o2, n2), c2;
    return s2[0] !== 0 && (c2 = L(s2[0], s2[1]), $.__wbindgen_free(s2[0], s2[1] * 1, 1)), c2;
  }
  saveOverrides() {
    let e8, t2;
    try {
      let n2 = $.wasmkeybindings_saveOverrides(this.__wbg_ptr);
      return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  setBinding(e8, t2) {
    let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q;
    var i2 = U(t2) ? 0 : Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    $.wasmkeybindings_setBinding(this.__wbg_ptr, n2, r2, i2, a2);
  }
};
Symbol.dispose && (d.prototype[Symbol.dispose] = d.prototype.free);
var f = class {
  __destroy_into_raw() {
    let e8 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zi.unregister(this), e8;
  }
  free() {
    let e8 = this.__destroy_into_raw();
    $.__wbg_wasmsketchsession_free(e8, 0);
  }
  addCircle(e8, t2, n2) {
    $.wasmsketchsession_addCircle(this.__wbg_ptr, e8, t2, n2);
  }
  addConstraint(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.wasmsketchsession_addConstraint(this.__wbg_ptr, t2, n2);
    if (r2[1]) throw X(r2[0]);
  }
  addLine(e8, t2, n2, r2) {
    $.wasmsketchsession_addLine(this.__wbg_ptr, e8, t2, n2, r2);
  }
  addRectangle(e8, t2, n2, r2) {
    $.wasmsketchsession_addRectangle(this.__wbg_ptr, e8, t2, n2, r2);
  }
  cancelPending() {
    $.wasmsketchsession_cancelPending(this.__wbg_ptr);
  }
  clearSelection() {
    $.wasmsketchsession_clearSelection(this.__wbg_ptr);
  }
  clear() {
    $.wasmsketchsession_clear(this.__wbg_ptr);
  }
  constructor(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.wasmsketchsession_new(t2, n2);
    if (r2[2]) throw X(r2[1]);
    return this.__wbg_ptr = r2[0], zi.register(this, this.__wbg_ptr, this), this;
  }
  onClick() {
    let e8, t2;
    try {
      let n2 = $.wasmsketchsession_onClick(this.__wbg_ptr);
      return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  onCursorLeave() {
    $.wasmsketchsession_onCursorLeave(this.__wbg_ptr);
  }
  onCursorRay(e8, t2, n2, r2, i2, a2) {
    $.wasmsketchsession_onCursorRay(this.__wbg_ptr, e8, t2, n2, r2, i2, a2);
  }
  onCursorSketch(e8, t2) {
    $.wasmsketchsession_onCursorSketch(this.__wbg_ptr, e8, t2);
  }
  onDoubleClick() {
    $.wasmsketchsession_onDoubleClick(this.__wbg_ptr);
  }
  redo() {
    return $.wasmsketchsession_redo(this.__wbg_ptr) !== 0;
  }
  removeConstraint(e8) {
    $.wasmsketchsession_removeConstraint(this.__wbg_ptr, e8);
  }
  setSnap(e8, t2, n2, r2) {
    $.wasmsketchsession_setSnap(this.__wbg_ptr, e8, t2, n2, r2);
  }
  setTool(e8) {
    let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
    $.wasmsketchsession_setTool(this.__wbg_ptr, t2, n2);
  }
  snapshot() {
    let e8, t2;
    try {
      let i2 = $.wasmsketchsession_snapshot(this.__wbg_ptr);
      var n2 = i2[0], r2 = i2[1];
      if (i2[3]) throw n2 = 0, r2 = 0, X(i2[2]);
      return e8 = n2, t2 = r2, L(n2, r2);
    } finally {
      $.__wbindgen_free(e8, t2, 1);
    }
  }
  solve() {
    return $.wasmsketchsession_solve(this.__wbg_ptr) !== 0;
  }
  toggleSelection(e8) {
    $.wasmsketchsession_toggleSelection(this.__wbg_ptr, e8);
  }
  undo() {
    return $.wasmsketchsession_undo(this.__wbg_ptr) !== 0;
  }
};
Symbol.dispose && (f.prototype[Symbol.dispose] = f.prototype.free);
function p(e8) {
  w(e8, s);
  let t2 = $.analyzeForPrinting(e8.__wbg_ptr);
  if (t2[2]) throw X(t2[1]);
  return X(t2[0]);
}
function m(e8, t2, n2, r2, i2, a2, o2) {
  let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.analyzeStaticsBox(s2, c2, t2, n2, r2, i2, a2, o2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function h(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = q(t2, $.__wbindgen_malloc), o2 = Q, s2 = G(n2, $.__wbindgen_malloc), c2 = Q, l2 = $.analyzeStaticsMesh(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function g(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.antennaAnalyze(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function _(e8, t2, n2, r2, i2) {
  let a2, o2;
  try {
    let l2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), f2 = Q, p2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), m2 = Q, h2 = Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), g2 = Q, _2 = Y(i2, $.__wbindgen_malloc, $.__wbindgen_realloc), v2 = Q, y2 = $.atoms_build_receipt(l2, u2, d2, f2, p2, m2, h2, g2, _2, v2);
    var s2 = y2[0], c2 = y2[1];
    if (y2[3]) throw s2 = 0, c2 = 0, X(y2[2]);
    return a2 = s2, o2 = c2, L(s2, c2);
  } finally {
    $.__wbindgen_free(a2, o2, 1);
  }
}
function v(e8, t2) {
  let n2, r2;
  try {
    let o2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = $.atoms_homogenize(o2, s2, c2, l2);
    var i2 = u2[0], a2 = u2[1];
    if (u2[3]) throw i2 = 0, a2 = 0, X(u2[2]);
    return n2 = i2, r2 = a2, L(i2, a2);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function y(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.atoms_inspect(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function ee(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let c2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q, f2 = $.atoms_minimize(c2, l2, u2, d2, n2, r2);
    var o2 = f2[0], s2 = f2[1];
    if (f2[3]) throw o2 = 0, s2 = 0, X(f2[2]);
    return i2 = o2, a2 = s2, L(o2, s2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function te(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.atoms_parse_xyz(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function ne(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.atoms_write_xyz(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function b(e8, t2, n2) {
  let r2, i2;
  try {
    let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), f2 = Q, p2 = $.buildCalibrationReportJson(s2, c2, l2, u2, d2, f2);
    var a2 = p2[0], o2 = p2[1];
    if (p2[3]) throw a2 = 0, o2 = 0, X(p2[2]);
    return r2 = a2, i2 = o2, L(a2, o2);
  } finally {
    $.__wbindgen_free(r2, i2, 1);
  }
}
function re(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = q(t2, $.__wbindgen_malloc), o2 = Q, s2 = G(n2, $.__wbindgen_malloc), c2 = Q, l2 = $.buildGlbBytes(r2, i2, a2, o2, s2, c2);
  if (l2[3]) throw X(l2[2]);
  var u2 = k(l2[0], l2[1]).slice();
  return $.__wbindgen_free(l2[0], l2[1] * 1, 1), u2;
}
function x(e8, t2) {
  let n2, r2;
  try {
    let o2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = $.buildPart(o2, s2, c2, l2);
    var i2 = u2[0], a2 = u2[1];
    if (u2[3]) throw i2 = 0, a2 = 0, X(u2[2]);
    return n2 = i2, r2 = a2, L(i2, a2);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function ie(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.buildSheetMetalDocument(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function ae(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = q(t2, $.__wbindgen_malloc), o2 = Q, s2 = G(n2, $.__wbindgen_malloc), c2 = Q, l2 = $.buildStlBytes(r2, i2, a2, o2, s2, c2);
  if (l2[3]) throw X(l2[2]);
  var u2 = k(l2[0], l2[1]).slice();
  return $.__wbindgen_free(l2[0], l2[1] * 1, 1), u2;
}
function oe(e8, t2) {
  let n2, r2;
  try {
    let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = $.build_chat_system_prompt(i2, a2, o2, s2);
    return n2 = c2[0], r2 = c2[1], L(c2[0], c2[1]);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function se(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.calibrationDefaultTolerance(n2, r2, t2);
  if (i2[2]) throw X(i2[1]);
  return i2[0];
}
function ce(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.calibrationFingerprintDocument(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function le(e8, t2, n2, r2, i2) {
  let a2, o2;
  try {
    let l2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), f2 = Q, p2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), m2 = Q, h2 = Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), g2 = Q, _2 = $.camDropCutter(l2, u2, d2, f2, p2, m2, h2, g2, i2);
    var s2 = _2[0], c2 = _2[1];
    if (_2[3]) throw s2 = 0, c2 = 0, X(_2[2]);
    return a2 = s2, o2 = c2, L(s2, c2);
  } finally {
    $.__wbindgen_free(a2, o2, 1);
  }
}
function ue(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let c2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), f2 = Q, p2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), m2 = Q;
    w(r2, l);
    let h2 = $.camExportGcode(c2, u2, d2, f2, p2, m2, r2.__wbg_ptr);
    var o2 = h2[0], s2 = h2[1];
    if (h2[3]) throw o2 = 0, s2 = 0, X(h2[2]);
    return i2 = o2, a2 = s2, L(o2, s2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function de(e8, t2, n2, r2, i2) {
  let a2, o2;
  try {
    let u2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q, f2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), h2 = Q;
    w(r2, l);
    let g2 = $.camExportLinuxCnc(u2, d2, f2, p2, m2, h2, r2.__wbg_ptr, i2);
    var s2 = g2[0], c2 = g2[1];
    if (g2[3]) throw s2 = 0, c2 = 0, X(g2[2]);
    return a2 = s2, o2 = c2, L(s2, c2);
  } finally {
    $.__wbindgen_free(a2, o2, 1);
  }
}
function fe(e8, t2, n2, r2, i2, a2) {
  let o2, s2;
  try {
    let d2 = Y(i2, $.__wbindgen_malloc, $.__wbindgen_realloc), f2 = Q;
    w(a2, l);
    let p2 = $.camGenerateCircularPocket(e8, t2, n2, r2, d2, f2, a2.__wbg_ptr);
    var c2 = p2[0], u2 = p2[1];
    if (p2[3]) throw c2 = 0, u2 = 0, X(p2[2]);
    return o2 = c2, s2 = u2, L(c2, u2);
  } finally {
    $.__wbindgen_free(o2, s2, 1);
  }
}
function pe(e8, t2, n2, r2, i2, a2, o2, s2, c2, u2, d2) {
  let f2, p2;
  try {
    let g2 = Y(u2, $.__wbindgen_malloc, $.__wbindgen_realloc), _2 = Q;
    w(d2, l);
    let v2 = $.camGenerateContour(e8, t2, n2, r2, i2, a2, o2, s2, c2, g2, _2, d2.__wbg_ptr);
    var m2 = v2[0], h2 = v2[1];
    if (v2[3]) throw m2 = 0, h2 = 0, X(v2[2]);
    return f2 = m2, p2 = h2, L(m2, h2);
  } finally {
    $.__wbindgen_free(f2, p2, 1);
  }
}
function me(e8, t2, n2, r2, i2, a2, o2) {
  let s2, c2;
  try {
    let f2 = Y(a2, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q;
    w(o2, l);
    let m2 = $.camGenerateFace(e8, t2, n2, r2, i2, f2, p2, o2.__wbg_ptr);
    var u2 = m2[0], d2 = m2[1];
    if (m2[3]) throw u2 = 0, d2 = 0, X(m2[2]);
    return s2 = u2, c2 = d2, L(u2, d2);
  } finally {
    $.__wbindgen_free(s2, c2, 1);
  }
}
function he(e8, t2, n2, r2, i2, a2, o2) {
  let s2, c2;
  try {
    let f2 = Y(a2, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q;
    w(o2, l);
    let m2 = $.camGeneratePocket(e8, t2, n2, r2, i2, f2, p2, o2.__wbg_ptr);
    var u2 = m2[0], d2 = m2[1];
    if (m2[3]) throw u2 = 0, d2 = 0, X(m2[2]);
    return s2 = u2, c2 = d2, L(u2, d2);
  } finally {
    $.__wbindgen_free(s2, c2, 1);
  }
}
function ge(e8, t2, n2, r2, i2, a2, o2) {
  let s2, c2;
  try {
    let f2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), h2 = Q;
    w(n2, l);
    let g2 = $.camGenerateRoughing3d(f2, p2, m2, h2, n2.__wbg_ptr, r2, i2, a2, o2);
    var u2 = g2[0], d2 = g2[1];
    if (g2[3]) throw u2 = 0, d2 = 0, X(g2[2]);
    return s2 = u2, c2 = d2, L(u2, d2);
  } finally {
    $.__wbindgen_free(s2, c2, 1);
  }
}
function _e() {
  let e8, t2;
  try {
    let i2 = $.camGetDefaultTools();
    var n2 = i2[0], r2 = i2[1];
    if (i2[3]) throw n2 = 0, r2 = 0, X(i2[2]);
    return e8 = n2, t2 = r2, L(n2, r2);
  } finally {
    $.__wbindgen_free(e8, t2, 1);
  }
}
function ve(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.camToolpathStats(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function ye(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.checkDesignConstraints(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function be(e8, t2) {
  w(e8, s);
  let n2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.checkPrintability(e8.__wbg_ptr, n2, r2);
  if (i2[2]) throw X(i2[1]);
  return X(i2[0]);
}
function xe(e8, t2) {
  let n2, r2;
  try {
    let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = $.checkSheetMetal(i2, a2, o2, s2);
    return n2 = c2[0], r2 = c2[1], L(c2[0], c2[1]);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function Se(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = J(n2, $.__wbindgen_malloc), o2 = Q, s2 = $.circuitAcResponse(r2, i2, t2, a2, o2);
  if (s2[2]) throw X(s2[1]);
  return X(s2[0]);
}
function Ce(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.circuitDcOperatingPoint(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function we(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.circuitFromSchematic(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function Te(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.circuitSensitivities(r2, i2, t2, a2, o2);
  if (s2[2]) throw X(s2[1]);
  return X(s2[0]);
}
function Ee(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.circuitTransient(r2, i2, t2, n2);
  if (a2[2]) throw X(a2[1]);
  return X(a2[0]);
}
function De(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.circuitTune(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function Oe(e8, t2, n2) {
  let r2 = q(e8, $.__wbindgen_malloc), i2 = Q, a2 = G(t2, $.__wbindgen_malloc), o2 = Q;
  return $.computeCreasedNormalsGpu(r2, i2, a2, o2, n2);
}
function ke(e8, t2) {
  let n2 = q(e8, $.__wbindgen_malloc), r2 = Q, i2 = G(t2, $.__wbindgen_malloc), a2 = Q, o2 = $.computeMeshProperties(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function Ae(e8, t2) {
  let n2 = q(e8, $.__wbindgen_malloc), r2 = Q, i2 = G(t2, $.__wbindgen_malloc), a2 = Q;
  return $.computeMeshVolume(n2, r2, i2, a2);
}
function je(e8, t2, n2) {
  let r2, i2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.costSheetMetal(a2, o2, s2, c2, n2);
    return r2 = l2[0], i2 = l2[1], L(l2[0], l2[1]);
  } finally {
    $.__wbindgen_free(r2, i2, 1);
  }
}
function Me(e8, t2, n2, r2, i2, a2, o2) {
  let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(o2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = $.createDetailView(s2, c2, t2, n2, r2, i2, a2, l2, u2);
  if (d2[2]) throw X(d2[1]);
  return X(d2[0]);
}
function Ne(e8, t2, n2) {
  let r2 = q(e8, $.__wbindgen_malloc), i2 = Q, a2 = G(t2, $.__wbindgen_malloc), o2 = Q;
  return $.decimateMeshGpu(r2, i2, a2, o2, n2);
}
function Pe(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.deriveParts(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function Fe(e8, t2) {
  let n2, r2;
  try {
    let o2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = $.digitizeSketch(o2, s2, c2, l2);
    var i2 = u2[0], a2 = u2[1];
    if (u2[3]) throw i2 = 0, a2 = 0, X(u2[2]);
    return n2 = i2, r2 = a2, L(i2, a2);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function Ie(e8, t2, n2) {
  let r2, i2;
  try {
    let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = $.digitizeText(s2, c2, t2, l2, u2);
    var a2 = d2[0], o2 = d2[1];
    if (d2[3]) throw a2 = 0, o2 = 0, X(d2[2]);
    return r2 = a2, i2 = o2, L(a2, o2);
  } finally {
    $.__wbindgen_free(r2, i2, 1);
  }
}
function Le(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.documentDiff(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function Re(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.documentDiffApply(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function ze(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.documentDiffHuman(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function Be(e8, t2, n2, r2) {
  let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q;
  var u2 = U(r2) ? 0 : Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q;
  let f2 = $.documentMerge(i2, a2, o2, s2, c2, l2, u2, d2);
  if (f2[2]) throw X(f2[1]);
  return X(f2[0]);
}
function Ve(e8, t2, n2, r2) {
  let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = $.documentParameterGradient(i2, a2, o2, s2, n2, r2);
  if (c2[2]) throw X(c2[1]);
  return X(c2[0]);
}
function He(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.documentSensitivities(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function Ue(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.documentToLoon(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function We(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.documentToLoonChecked(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function Ge(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.documentToStepBuffer(t2, n2);
  if (r2[3]) throw X(r2[2]);
  var i2 = k(r2[0], r2[1]).slice();
  return $.__wbindgen_free(r2[0], r2[1] * 1, 1), i2;
}
function Ke(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.drawingSheetToPdf(t2, n2);
  if (r2[3]) throw X(r2[2]);
  var i2 = k(r2[0], r2[1]).slice();
  return $.__wbindgen_free(r2[0], r2[1] * 1, 1), i2;
}
function qe(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadAirgapFluxDensity(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return r2[0];
}
function Je(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadAirgapSolve(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function Ye(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadBuildReceipt(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function Xe() {
  let e8 = $.ecadBuiltinSymbols();
  if (e8[2]) throw X(e8[1]);
  return X(e8[0]);
}
function Ze(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadCheckDrc(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function Qe(e8, t2, n2, r2, i2) {
  let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.ecadCheckDrcInRegion(a2, o2, t2, n2, r2, i2);
  if (s2[2]) throw X(s2[1]);
  return X(s2[0]);
}
function $e(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadCheckErc(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function et(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadComponentMeshes(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function tt(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.ecadComputeRatsnest(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function nt(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.ecadCritiqueRoute(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function rt(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.ecadDfmCheck(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function it(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.ecadDfmDefaultPack(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function at(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadEvaluateMotor(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function ot(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadExportFab(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function st(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q;
  var i2 = U(t2) ? 0 : Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
  let o2 = $.ecadFabPrep(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function ct(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadFillZones(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function lt(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadFindAlternatives(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function ut(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.ecadFootprintForName(n2, r2, t2);
  if (i2[2]) throw X(i2[1]);
  return X(i2[0]);
}
function dt(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadGenerateNetlist(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function ft(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadGetSymbol(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function pt() {
  let e8, t2;
  try {
    let n2 = $.ecadJellybeanManifest();
    return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
  } finally {
    $.__wbindgen_free(e8, t2, 1);
  }
}
function mt(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q;
  return $.ecadLayerZ(r2, i2, t2, n2);
}
function ht(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.ecadLengthMatch(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function gt(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.ecadNetContinuity(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function _t(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.ecadNetForWire(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function vt() {
  let e8, t2;
  try {
    let n2 = $.ecadPartsManifest();
    return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
  } finally {
    $.__wbindgen_free(e8, t2, 1);
  }
}
function yt(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadPcbPreviewMeshes(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function bt(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.ecadResolveFootprint(n2, r2, t2);
  if (i2[2]) throw X(i2[1]);
  return X(i2[0]);
}
function xt(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.ecadResolvePart(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function St(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q;
  var i2 = U(t2) ? 0 : Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
  let o2 = $.ecadResolvePartDef(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function Ct(e8, t2, n2, r2) {
  let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = $.ecadRouteAll(i2, a2, t2, o2, s2, !U(r2), U(r2) ? 0 : r2);
  if (c2[2]) throw X(c2[1]);
  return X(c2[0]);
}
function wt(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.ecadRouteDiffPair(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function Tt(e8, t2, n2, r2, i2, a2, o2) {
  let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = $.ecadRouteNet(s2, c2, l2, u2, n2, r2, i2, a2, o2);
  if (d2[2]) throw X(d2[1]);
  return X(d2[0]);
}
function Et(e8, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q, f2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = $.ecadRouteNetMaze(c2, l2, u2, d2, f2, p2, r2, i2, a2, o2, s2);
  if (m2[2]) throw X(m2[1]);
  return X(m2[0]);
}
function Dt(e8, t2, n2, r2, i2, a2, o2) {
  let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = $.ecadRouteNetShove(s2, c2, l2, u2, n2, r2, i2, a2, o2);
  if (d2[2]) throw X(d2[1]);
  return X(d2[0]);
}
function Ot(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.ecadSearchParts(n2, r2, t2);
  if (i2[2]) throw X(i2[1]);
  return X(i2[0]);
}
function kt(e8, t2, n2, r2, i2) {
  let a2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.ecadSnapToGridOrPin(e8, t2, a2, o2, r2, i2);
  if (s2[2]) throw X(s2[1]);
  return X(s2[0]);
}
function At(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.ecadVerifyReceipt(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function jt(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.ecadVerifySubstitution(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function Mt(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.emSimulate(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function Nt(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.embroideryDesignToMesh(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function Pt(e8, t2) {
  let n2, r2;
  try {
    let o2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = $.enclosure_component_extents(o2, s2, c2, l2);
    var i2 = u2[0], a2 = u2[1];
    if (u2[3]) throw i2 = 0, a2 = 0, X(u2[2]);
    return n2 = i2, r2 = a2, L(i2, a2);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function Ft(e8, t2) {
  let n2, r2;
  try {
    let o2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = $.enclosure_connectors(o2, s2, c2, l2);
    var i2 = u2[0], a2 = u2[1];
    if (u2[3]) throw i2 = 0, a2 = 0, X(u2[2]);
    return n2 = i2, r2 = a2, L(i2, a2);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function It(e8, t2, n2) {
  let r2, i2;
  try {
    let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), f2 = Q, p2 = $.enclosure_derive_board(s2, c2, l2, u2, d2, f2);
    var a2 = p2[0], o2 = p2[1];
    if (p2[3]) throw a2 = 0, o2 = 0, X(p2[2]);
    return r2 = a2, i2 = o2, L(a2, o2);
  } finally {
    $.__wbindgen_free(r2, i2, 1);
  }
}
function Lt(e8, t2) {
  let n2, r2;
  try {
    let o2 = J(e8, $.__wbindgen_malloc), s2 = Q, c2 = G(t2, $.__wbindgen_malloc), l2 = Q, u2 = $.enclosure_features(o2, s2, c2, l2);
    var i2 = u2[0], a2 = u2[1];
    if (u2[3]) throw i2 = 0, a2 = 0, X(u2[2]);
    return n2 = i2, r2 = a2, L(i2, a2);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function Rt(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.enclosure_fit(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function zt(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.enclosure_mounting_holes(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function Bt(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.enclosure_outline_aabb(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function Vt(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let c2 = Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = $.enclosure_to_world(e8, t2, n2, c2, l2);
    var o2 = u2[0], s2 = u2[1];
    if (u2[3]) throw o2 = 0, s2 = 0, X(u2[2]);
    return i2 = o2, a2 = s2, L(o2, s2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function Ht(e8, t2, n2, r2, i2) {
  let a2 = Y(i2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.estimatePrintCost(e8, t2, n2, r2, a2, o2);
  if (s2[2]) throw X(s2[1]);
  return X(s2[0]);
}
function Ut(e8, t2, n2, r2, i2, a2) {
  let o2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = $.estimate_cost_for_process(o2, s2, c2, l2, n2, r2, i2, a2);
  if (u2[2]) throw X(u2[1]);
  return X(u2[0]);
}
function Wt(e8, t2, n2) {
  let r2 = $.eulerXyzDegToQuat(e8, t2, n2);
  var i2 = Hi(r2[0], r2[1]).slice();
  return $.__wbindgen_free(r2[0], r2[1] * 8, 8), i2;
}
function Gt(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let f2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), h2 = Q;
    var o2 = U(n2) ? 0 : Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = U(r2) ? 0 : Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q;
    let g2 = $.evalLoonDocument(f2, p2, m2, h2, o2, s2, c2, l2);
    var u2 = g2[0], d2 = g2[1];
    if (g2[3]) throw u2 = 0, d2 = 0, X(g2[2]);
    return i2 = u2, a2 = d2, L(u2, d2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function Kt(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.evalVcadSource(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function qt(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q;
  var i2 = U(t2) ? 0 : Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
  let o2 = $.evalVcadSourceParametric(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function Jt(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.evalVcadSourceWithModules(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function Yt(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.evaluateDocument(n2, r2, t2);
  if (i2[2]) throw X(i2[1]);
  return X(i2[0]);
}
function Xt(e8) {
  let t2, n2;
  try {
    let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.evaluateSheetMetalChain(r2, i2);
    return t2 = a2[0], n2 = a2[1], L(a2[0], a2[1]);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function Zt(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.evaluateVCode(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return s.__wrap(r2[0]);
}
function Qt(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.exportKicadPcb(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function $t(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.exportKicadProject(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function en(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.exportKicadSch(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function tn(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.exportProjectedViewToDxf(t2, n2);
  if (r2[3]) throw X(r2[2]);
  var i2 = k(r2[0], r2[1]).slice();
  return $.__wbindgen_free(r2[0], r2[1] * 1, 1), i2;
}
function nn(e8, t2) {
  let n2 = $.exprEvalAst(e8, t2);
  if (n2[2]) throw X(n2[1]);
  return n2[0];
}
function rn(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.exprEvaluate(n2, r2, t2);
  if (i2[2]) throw X(i2[1]);
  return i2[0];
}
function an(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.exprParse(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function on(e8, t2, n2, r2) {
  let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = q(n2, $.__wbindgen_malloc), l2 = Q, u2 = G(r2, $.__wbindgen_malloc), d2 = Q, f2 = $.feaAnalyzeMesh(i2, a2, o2, s2, c2, l2, u2, d2);
  if (f2[2]) throw X(f2[1]);
  return X(f2[0]);
}
function sn(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.feaCheckBeam(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function cn(e8) {
  let t2, n2;
  try {
    let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.flattenSolidToSheetMetal(r2, i2);
    return t2 = a2[0], n2 = a2[1], L(a2[0], a2[1]);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function ln(e8, t2, n2, r2) {
  let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = q(t2, $.__wbindgen_malloc), s2 = Q, c2 = G(n2, $.__wbindgen_malloc), l2 = Q, u2 = Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q, f2 = $.generate3mf(i2, a2, o2, s2, c2, l2, u2, d2);
  if (f2[3]) throw X(f2[2]);
  var p2 = k(f2[0], f2[1]).slice();
  return $.__wbindgen_free(f2[0], f2[1] * 1, 1), p2;
}
function un(e8, t2, n2, r2, i2) {
  let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = q(t2, $.__wbindgen_malloc), c2 = Q, l2 = G(n2, $.__wbindgen_malloc), u2 = Q, d2 = K(r2, $.__wbindgen_malloc), f2 = Q, p2 = Y(i2, $.__wbindgen_malloc, $.__wbindgen_realloc), m2 = Q, h2 = $.generate3mfWithGcode(a2, o2, s2, c2, l2, u2, d2, f2, p2, m2);
  if (h2[3]) throw X(h2[2]);
  var g2 = k(h2[0], h2[1]).slice();
  return $.__wbindgen_free(h2[0], h2[1] * 1, 1), g2;
}
function dn(e8, t2, n2, r2) {
  let i2, o2;
  try {
    w(e8, a);
    let l2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = $.generateGcode(e8.__wbg_ptr, l2, u2, n2, r2);
    var s2 = d2[0], c2 = d2[1];
    if (d2[3]) throw s2 = 0, c2 = 0, X(d2[2]);
    return i2 = s2, o2 = c2, L(s2, c2);
  } finally {
    $.__wbindgen_free(i2, o2, 1);
  }
}
function fn() {
  return $.getCompiledModule();
}
function pn() {
  let e8, t2;
  try {
    let n2 = $.getPartsManifest();
    return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
  } finally {
    $.__wbindgen_free(e8, t2, 1);
  }
}
function mn() {
  let e8, t2;
  try {
    let n2 = $.getSheetMetalBendTable();
    return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
  } finally {
    $.__wbindgen_free(e8, t2, 1);
  }
}
function hn() {
  let e8, t2;
  try {
    let n2 = $.getSheetMetalMaterials();
    return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
  } finally {
    $.__wbindgen_free(e8, t2, 1);
  }
}
function gn(e8) {
  let t2, n2;
  try {
    let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.getSheetMetalShopCatalog(r2, i2);
    return t2 = a2[0], n2 = a2[1], L(a2[0], a2[1]);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function _n() {
  let e8 = $.getSlicerPrinterProfiles();
  if (e8[2]) throw X(e8[1]);
  return X(e8[0]);
}
function vn() {
  let e8, t2;
  try {
    let n2 = $.get_anthropic_tools_json();
    return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
  } finally {
    $.__wbindgen_free(e8, t2, 1);
  }
}
function yn(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.get_default_dfm_pack(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function bn() {
  let e8, t2;
  try {
    let n2 = $.get_kernel_version();
    return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
  } finally {
    $.__wbindgen_free(e8, t2, 1);
  }
}
function xn() {
  let e8, t2;
  try {
    let n2 = $.get_tool_schemas();
    return e8 = n2[0], t2 = n2[1], L(n2[0], n2[1]);
  } finally {
    $.__wbindgen_free(e8, t2, 1);
  }
}
function Sn(e8) {
  let t2 = K(e8, $.__wbindgen_malloc), n2 = Q, r2 = $.importStepBuffer(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function Cn(e8) {
  let t2 = K(e8, $.__wbindgen_malloc), n2 = Q, r2 = $.importStepBufferWithReport(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function wn(e8, t2, n2, r2) {
  let i2 = K(e8, $.__wbindgen_malloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q, f2 = $.importStepMeshDocument(i2, a2, o2, s2, c2, l2, u2, d2);
  if (f2[2]) throw X(f2[1]);
  return X(f2[0]);
}
function Tn(e8) {
  let t2, n2;
  try {
    let a2 = K(e8, $.__wbindgen_malloc), o2 = Q, s2 = $.importUrdfBuffer(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function En(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let u2 = K(e8, $.__wbindgen_malloc), d2 = Q;
    var o2 = U(n2) ? 0 : Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q;
    let f2 = $.importUrdfBufferWithOptions(u2, d2, t2, o2, s2, !U(r2), U(r2) ? 0 : r2);
    var c2 = f2[0], l2 = f2[1];
    if (f2[3]) throw c2 = 0, l2 = 0, X(f2[2]);
    return i2 = c2, a2 = l2, L(c2, l2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function Dn() {
  $.init();
}
function On() {
  return $.initGpu();
}
function kn(e8, t2, n2) {
  let r2, i2;
  try {
    let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = ea(t2, $.__wbindgen_malloc), u2 = Q, d2 = $.inlineMeshImports(s2, c2, l2, u2, n2);
    var a2 = d2[0], o2 = d2[1];
    if (d2[3]) throw a2 = 0, o2 = 0, X(d2[2]);
    return r2 = a2, i2 = o2, L(a2, o2);
  } finally {
    $.__wbindgen_free(r2, i2, 1);
  }
}
function An(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.inspectDocumentFaces(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function jn() {
  return $.isCamAvailable() !== 0;
}
function Mn() {
  return $.isEcadAvailable() !== 0;
}
function Nn() {
  return $.isEmbroideryAvailable() !== 0;
}
function Pn() {
  return $.isGpuAvailable() !== 0;
}
function Fn() {
  return $.isPhysicsAvailable() !== 0;
}
function In() {
  return $.isSlicerAvailable() !== 0;
}
function Ln(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.latticeGaugeSimulate(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function Rn(e8, t2, n2, r2) {
  let i2 = q(e8, $.__wbindgen_malloc), a2 = Q, o2 = G(t2, $.__wbindgen_malloc), s2 = Q, c2 = q(n2, $.__wbindgen_malloc), l2 = Q, u2 = G(r2, $.__wbindgen_malloc), d2 = Q, f2 = $.mesh_clearance(i2, a2, o2, s2, c2, l2, u2, d2);
  if (f2[2]) throw X(f2[1]);
  return X(f2[0]);
}
function zn(e8, t2) {
  let n2, r2;
  try {
    let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = $.nestSheetMetalParts(i2, a2, o2, s2);
    return n2 = c2[0], r2 = c2[1], L(c2[0], c2[1]);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function Bn(e8) {
  let t2, n2;
  try {
    let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.nestedSheetMetalDxf(r2, i2);
    return t2 = a2[0], n2 = a2[1], L(a2[0], a2[1]);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function Vn(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.neutronicsSimulate(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function Hn(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.noteToHz(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return r2[0];
}
function Un(e8, t2, n2) {
  let r2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q;
  var a2 = U(n2) ? 0 : Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q;
  return $.offsetSectionMesh(e8, r2, i2, a2, o2);
}
function Wn(e8, t2) {
  w(e8, s);
  let n2 = $.op_chamfer(e8.__wbg_ptr, t2);
  if (n2[2]) throw X(n2[1]);
  return s.__wrap(n2[0]);
}
function Gn(e8, t2, n2, r2, i2, a2, o2, c2, l2) {
  w(e8, s);
  let u2 = $.op_circular_pattern(e8.__wbg_ptr, t2, n2, r2, i2, a2, o2, c2, l2);
  return s.__wrap(u2);
}
function Kn(e8, t2) {
  w(e8, s);
  let n2 = $.op_fillet(e8.__wbg_ptr, t2);
  if (n2[2]) throw X(n2[1]);
  return s.__wrap(n2[0]);
}
function qn(e8, t2, n2, r2, i2, a2) {
  w(e8, s);
  let o2 = $.op_linear_pattern(e8.__wbg_ptr, t2, n2, r2, i2, a2);
  return s.__wrap(o2);
}
function Jn(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.op_loft(n2, r2, U(t2) ? 16777215 : +!!t2);
  if (i2[2]) throw X(i2[1]);
  return s.__wrap(i2[0]);
}
function Yn(e8, t2, n2, r2) {
  let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = J(t2, $.__wbindgen_malloc), c2 = Q, l2 = J(n2, $.__wbindgen_malloc), u2 = Q, d2 = $.op_revolve(i2, a2, o2, c2, l2, u2, r2);
  if (d2[2]) throw X(d2[1]);
  return s.__wrap(d2[0]);
}
function Xn(e8, t2) {
  w(e8, s);
  let n2 = $.op_shell(e8.__wbg_ptr, t2);
  if (n2[2]) throw X(n2[1]);
  return s.__wrap(n2[0]);
}
function Zn(e8, t2, n2, r2, i2, a2, o2, c2, l2, u2, d2) {
  let f2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = $.op_sweep_helix(f2, p2, t2, n2, r2, i2, !U(a2), U(a2) ? 0 : a2, !U(o2), U(o2) ? 0 : o2, !U(c2), U(c2) ? 0 : c2, U(l2) ? 2 ** 53 - 1 : l2 >>> 0, U(u2) ? 2 ** 53 - 1 : u2 >>> 0, !U(d2), U(d2) ? 0 : d2);
  if (m2[2]) throw X(m2[1]);
  return s.__wrap(m2[0]);
}
function Qn(e8, t2, n2, r2, i2, a2, o2) {
  let c2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = J(t2, $.__wbindgen_malloc), d2 = Q, f2 = J(n2, $.__wbindgen_malloc), p2 = Q, m2 = $.op_sweep_line(c2, l2, u2, d2, f2, p2, !U(r2), U(r2) ? 0 : r2, !U(i2), U(i2) ? 0 : i2, !U(a2), U(a2) ? 0 : a2, !U(o2), U(o2) ? 0 : o2);
  if (m2[2]) throw X(m2[1]);
  return s.__wrap(m2[0]);
}
function $n(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.parseAltiumAsciiPcb(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function er(e8) {
  let t2 = K(e8, $.__wbindgen_malloc), n2 = Q, r2 = $.parseAltiumPcbDoc(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function tr(e8) {
  let t2 = K(e8, $.__wbindgen_malloc), n2 = Q, r2 = $.parseAltiumPcbLib(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function nr(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.parseEagleBrd(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function rr(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.parseKicadPcb(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function ir(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.parseVCode(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function ar(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.parseVcadFile(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function or(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.particleOptimize(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function sr(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.particleSimulate(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function cr(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.photonicsSimulate(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function lr(e8, t2, n2) {
  let r2, i2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = $.plan_chat_tool(a2, o2, s2, c2, l2, u2);
    return r2 = d2[0], i2 = d2[1], L(d2[0], d2[1]);
  } finally {
    $.__wbindgen_free(r2, i2, 1);
  }
}
function ur(e8, t2, n2, r2) {
  let i2 = q(e8, $.__wbindgen_malloc), a2 = Q, o2 = G(t2, $.__wbindgen_malloc), s2 = Q;
  return $.processGeometryGpu(i2, a2, o2, s2, n2, r2);
}
function dr(e8, t2) {
  let n2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q;
  return $.projectMesh(e8, n2, r2);
}
function fr(e8) {
  let t2, n2;
  try {
    let a2 = K(e8, $.__wbindgen_malloc), o2 = Q, s2 = $.readEmbroideryDst(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function pr(e8) {
  let t2, n2;
  try {
    let a2 = K(e8, $.__wbindgen_malloc), o2 = Q, s2 = $.readEmbroideryPes(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function mr(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.recommendPrintSettings(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function hr(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = K(t2, $.__wbindgen_malloc), a2 = Q, o2 = $.registerStepSource(n2, r2, i2, a2);
  if (o2[2]) throw X(o2[1]);
  return X(o2[0]);
}
function gr(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.renderBakeMesh(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function _r(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
  return $.renderBomTable(t2, n2);
}
function vr(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
  return $.renderTitleBlock(t2, n2);
}
function yr(e8, t2, n2) {
  let r2, i2;
  try {
    let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = $.render_pcb_svg(s2, c2, l2, u2, n2);
    var a2 = d2[0], o2 = d2[1];
    if (d2[3]) throw a2 = 0, o2 = 0, X(d2[2]);
    return r2 = a2, i2 = o2, L(a2, o2);
  } finally {
    $.__wbindgen_free(r2, i2, 1);
  }
}
function br(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let c2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q, f2 = Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = $.render_pcb_svg_opts(c2, l2, u2, d2, n2, f2, p2);
    var o2 = m2[0], s2 = m2[1];
    if (m2[3]) throw o2 = 0, s2 = 0, X(m2[2]);
    return i2 = o2, a2 = s2, L(o2, s2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function xr(e8, t2) {
  let n2, r2;
  try {
    let o2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = $.render_svg(o2, s2, t2);
    var i2 = c2[0], a2 = c2[1];
    if (c2[3]) throw i2 = 0, a2 = 0, X(c2[2]);
    return n2 = i2, r2 = a2, L(i2, a2);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function Sr(e8, t2, n2, r2, i2, a2) {
  let o2, s2;
  try {
    let u2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q, f2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = $.render_svg_annotated(u2, d2, t2, f2, p2, r2, i2, a2);
    var c2 = m2[0], l2 = m2[1];
    if (m2[3]) throw c2 = 0, l2 = 0, X(m2[2]);
    return o2 = c2, s2 = l2, L(c2, l2);
  } finally {
    $.__wbindgen_free(o2, s2, 1);
  }
}
function Cr(e8, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2, u2;
  try {
    let y2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), ee2 = Q, te2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), ne2 = Q;
    var d2 = U(r2) ? 0 : Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), f2 = Q, p2 = U(s2) ? 0 : Y(s2, $.__wbindgen_malloc, $.__wbindgen_realloc), m2 = Q, h2 = U(c2) ? 0 : Y(c2, $.__wbindgen_malloc, $.__wbindgen_realloc), g2 = Q;
    let b2 = $.render_svg_camera(y2, ee2, t2, te2, ne2, d2, f2, i2, a2, o2, p2, m2, h2, g2);
    var _2 = b2[0], v2 = b2[1];
    if (b2[3]) throw _2 = 0, v2 = 0, X(b2[2]);
    return l2 = _2, u2 = v2, L(_2, v2);
  } finally {
    $.__wbindgen_free(l2, u2, 1);
  }
}
function wr(e8, t2, n2) {
  let r2, i2;
  try {
    let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = $.render_svg_camera_opts(s2, c2, t2, l2, u2);
    var a2 = d2[0], o2 = d2[1];
    if (d2[3]) throw a2 = 0, o2 = 0, X(d2[2]);
    return r2 = a2, i2 = o2, L(a2, o2);
  } finally {
    $.__wbindgen_free(r2, i2, 1);
  }
}
function Tr(e8, t2, n2) {
  let r2, i2;
  try {
    let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), u2 = Q, d2 = $.render_svg_view(s2, c2, t2, l2, u2);
    var a2 = d2[0], o2 = d2[1];
    if (d2[3]) throw a2 = 0, o2 = 0, X(d2[2]);
    return r2 = a2, i2 = o2, L(a2, o2);
  } finally {
    $.__wbindgen_free(r2, i2, 1);
  }
}
function Er(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let c2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q, f2 = Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = $.render_svg_view_highlight(c2, l2, t2, u2, d2, f2, p2);
    var o2 = m2[0], s2 = m2[1];
    if (m2[3]) throw o2 = 0, s2 = 0, X(m2[2]);
    return i2 = o2, a2 = s2, L(o2, s2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function Dr(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let c2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q, f2 = Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = $.render_svg_view_section(c2, l2, t2, u2, d2, f2, p2);
    var o2 = m2[0], s2 = m2[1];
    if (m2[3]) throw o2 = 0, s2 = 0, X(m2[2]);
    return i2 = o2, a2 = s2, L(o2, s2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function Or(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.resolveDocumentJson(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function kr(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.resolveParametersJson(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function Ar(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.sample_timeline_sequence(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function jr(e8, t2) {
  let n2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q, i2 = $.sample_timeline_track(n2, r2, t2);
  if (i2[2]) throw X(i2[1]);
  return i2[0];
}
function Mr(e8, t2, n2) {
  let r2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q;
  var a2 = U(n2) ? 0 : Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q;
  return $.sectionMesh(e8, r2, i2, a2, o2);
}
function Nr(e8) {
  let t2, n2;
  try {
    let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.sheetMetalFoldedStep(r2, i2);
    return t2 = a2[0], n2 = a2[1], L(a2[0], a2[1]);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function Pr(e8) {
  let t2, n2;
  try {
    let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = $.sheetMetalSequence(r2, i2);
    return t2 = a2[0], n2 = a2[1], L(a2[0], a2[1]);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function Fr(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.simulateFlow(r2, i2, a2, o2, n2);
  if (s2[2]) throw X(s2[1]);
  return X(s2[0]);
}
function Ir(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.simulateStrikeKernel(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function Lr(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let c2 = $.sketchCircleSegments(e8, t2, n2, r2);
    var o2 = c2[0], s2 = c2[1];
    if (c2[3]) throw o2 = 0, s2 = 0, X(c2[2]);
    return i2 = o2, a2 = s2, L(o2, s2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function Rr(e8, t2, n2, r2) {
  let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = $.sketchHitTest(i2, a2, t2, n2, r2);
  if (o2[2]) throw X(o2[1]);
  return o2[0];
}
function zr(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.sketchPlaneBasis(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function Br(e8, t2, n2, r2, i2, a2, o2) {
  let s2, c2;
  try {
    let d2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), f2 = Q, p2 = $.sketchPlaneIntersectRay(d2, f2, t2, n2, r2, i2, a2, o2);
    var l2 = p2[0], u2 = p2[1];
    if (p2[3]) throw l2 = 0, u2 = 0, X(p2[2]);
    return s2 = l2, c2 = u2, L(l2, u2);
  } finally {
    $.__wbindgen_free(s2, c2, 1);
  }
}
function Vr(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let c2 = $.sketchRectangleSegments(e8, t2, n2, r2);
    var o2 = c2[0], s2 = c2[1];
    if (c2[3]) throw o2 = 0, s2 = 0, X(c2[2]);
    return i2 = o2, a2 = s2, L(o2, s2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function Hr(e8, t2, n2, r2, i2, a2, o2) {
  let s2, c2;
  try {
    let d2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), f2 = Q, p2 = $.sketchSnap(d2, f2, t2, n2, r2, i2, a2, o2);
    var l2 = p2[0], u2 = p2[1];
    if (p2[3]) throw l2 = 0, u2 = 0, X(p2[2]);
    return s2 = l2, c2 = u2, L(l2, u2);
  } finally {
    $.__wbindgen_free(s2, c2, 1);
  }
}
function Ur(e8, t2, n2) {
  let r2, i2;
  try {
    let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.sketchToWorld(s2, c2, t2, n2);
    var a2 = l2[0], o2 = l2[1];
    if (l2[3]) throw a2 = 0, o2 = 0, X(l2[2]);
    return r2 = a2, i2 = o2, L(a2, o2);
  } finally {
    $.__wbindgen_free(r2, i2, 1);
  }
}
function Wr(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let c2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = $.sketchWorldToSketch(c2, l2, t2, n2, r2);
    var o2 = u2[0], s2 = u2[1];
    if (u2[3]) throw o2 = 0, s2 = 0, X(u2[2]);
    return i2 = o2, a2 = s2, L(o2, s2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function Gr(e8, t2, n2) {
  let r2 = q(e8, $.__wbindgen_malloc), i2 = Q, s2 = G(t2, $.__wbindgen_malloc), c2 = Q;
  w(n2, o);
  let l2 = $.sliceMesh(r2, i2, s2, c2, n2.__wbg_ptr);
  if (l2[2]) throw X(l2[1]);
  return a.__wrap(l2[0]);
}
function Kr(e8, t2, n2, r2) {
  let i2 = q(e8, $.__wbindgen_malloc), s2 = Q, c2 = G(t2, $.__wbindgen_malloc), l2 = Q;
  w(n2, o);
  let u2 = $.sliceMeshWithProgress(i2, s2, c2, l2, n2.__wbg_ptr, r2);
  if (u2[2]) throw X(u2[1]);
  return a.__wrap(u2[0]);
}
function qr(e8, t2, n2) {
  w(e8, s), w(t2, o);
  let r2 = $.sliceSolid(e8.__wbg_ptr, t2.__wbg_ptr, U(n2) ? 2 ** 53 - 1 : n2 >>> 0);
  if (r2[2]) throw X(r2[1]);
  return a.__wrap(r2[0]);
}
function Jr(e8, t2) {
  let n2, r2;
  try {
    let o2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = $.solveDesignConstraints(o2, s2, c2, l2);
    var i2 = u2[0], a2 = u2[1];
    if (u2[3]) throw i2 = 0, a2 = 0, X(u2[2]);
    return n2 = i2, r2 = a2, L(i2, a2);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function Yr(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.solveForwardKinematics(t2, n2);
  if (r2[2]) throw X(r2[1]);
  return X(r2[0]);
}
function Xr(e8, t2) {
  let n2, r2;
  try {
    let o2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = $.solveSketchSegments(o2, s2, c2, l2);
    var i2 = u2[0], a2 = u2[1];
    if (u2[3]) throw i2 = 0, a2 = 0, X(u2[2]);
    return n2 = i2, r2 = a2, L(i2, a2);
  } finally {
    $.__wbindgen_free(n2, r2, 1);
  }
}
function Zr(e8, t2, n2, r2) {
  let i2, a2;
  try {
    let c2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = G(t2, $.__wbindgen_malloc), d2 = Q, f2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), p2 = Q, m2 = Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), h2 = Q, g2 = $.stepImportDocument(c2, l2, u2, d2, f2, p2, m2, h2);
    var o2 = g2[0], s2 = g2[1];
    if (g2[3]) throw o2 = 0, s2 = 0, X(g2[2]);
    return i2 = o2, a2 = s2, L(o2, s2);
  } finally {
    $.__wbindgen_free(i2, a2, 1);
  }
}
function Qr(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
  return $.stepSourceRegistered(t2, n2) !== 0;
}
function $r(e8, t2, n2, r2, i2) {
  let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q;
  var s2 = U(n2) ? 0 : Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q;
  let l2 = $.textBounds(a2, o2, t2, s2, c2, !U(r2), U(r2) ? 0 : r2, !U(i2), U(i2) ? 0 : i2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function ei(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.thermalSolve(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function ti(e8, t2, n2, r2) {
  let i2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q, o2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), s2 = Q, c2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), l2 = Q, u2 = Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), d2 = Q, f2 = $.thermalSolveTransient(i2, a2, o2, s2, c2, l2, u2, d2);
  if (f2[2]) throw X(f2[1]);
  return X(f2[0]);
}
function ni(e8) {
  let t2, n2;
  try {
    let a2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = $.toVCode(a2, o2);
    var r2 = s2[0], i2 = s2[1];
    if (s2[3]) throw r2 = 0, i2 = 0, X(s2[2]);
    return t2 = r2, n2 = i2, L(r2, i2);
  } finally {
    $.__wbindgen_free(t2, n2, 1);
  }
}
function ri(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = Y(t2, $.__wbindgen_malloc, $.__wbindgen_realloc), o2 = Q, s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.toleranceAnalyze(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function ii(e8, t2, n2, r2, i2, a2, o2) {
  let s2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.topologyOptimizeBox(s2, c2, t2, n2, r2, i2, a2, o2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function ai(e8, t2, n2) {
  let r2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q, a2 = q(t2, $.__wbindgen_malloc), o2 = Q, s2 = G(n2, $.__wbindgen_malloc), c2 = Q, l2 = $.topologyOptimizeMesh(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function oi(e8, t2, n2) {
  let r2 = q(e8, $.__wbindgen_malloc), i2 = Q;
  var a2 = U(t2) ? 0 : q(t2, $.__wbindgen_malloc), o2 = Q;
  let s2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), c2 = Q, l2 = $.transformMeshBuffers(r2, i2, a2, o2, s2, c2);
  if (l2[2]) throw X(l2[1]);
  return X(l2[0]);
}
function si(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q;
  $.unregisterStepSource(t2, n2);
}
function ci(e8) {
  let t2 = K(e8, $.__wbindgen_malloc), n2 = Q, r2 = $.urdfCommentedFloatingJoint(t2, n2), i2;
  return r2[0] !== 0 && (i2 = L(r2[0], r2[1]), $.__wbindgen_free(r2[0], r2[1] * 1, 1)), i2;
}
function li(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.writeEmbroideryDst(t2, n2);
  if (r2[3]) throw X(r2[2]);
  var i2 = k(r2[0], r2[1]).slice();
  return $.__wbindgen_free(r2[0], r2[1] * 1, 1), i2;
}
function ui(e8) {
  let t2 = Y(e8, $.__wbindgen_malloc, $.__wbindgen_realloc), n2 = Q, r2 = $.writeEmbroideryPes(t2, n2);
  if (r2[3]) throw X(r2[2]);
  var i2 = k(r2[0], r2[1]).slice();
  return $.__wbindgen_free(r2[0], r2[1] * 1, 1), i2;
}
function di() {
  return { __proto__: null, "./vcad_kernel_wasm_bg.js": { __proto__: null, __wbg_Error_67e7344beaa85059: function(e8, t2) {
    return Error(L(e8, t2));
  }, __wbg_Number_c54e7112a3fa7e3e: function(e8) {
    return Number(e8);
  }, __wbg_String_8564e559799eccda: function(e8, t2) {
    let n2 = Y(String(t2), $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q;
    j().setInt32(e8 + 4, r2, true), j().setInt32(e8 + 0, n2, true);
  }, __wbg_Window_a2a6c4d665047b14: function(e8) {
    return e8.Window;
  }, __wbg_WorkerGlobalScope_2664448a7c667d67: function(e8) {
    return e8.WorkerGlobalScope;
  }, __wbg___wbindgen_bigint_get_as_i64_b482365c149396c8: function(e8, t2) {
    let n2 = t2, r2 = typeof n2 == `bigint` ? n2 : void 0;
    j().setBigInt64(e8 + 8, U(r2) ? BigInt(0) : r2, true), j().setInt32(e8 + 0, !U(r2), true);
  }, __wbg___wbindgen_boolean_get_7a12af2b3f899c5a: function(e8) {
    let t2 = e8, n2 = typeof t2 == `boolean` ? t2 : void 0;
    return U(n2) ? 16777215 : +!!n2;
  }, __wbg___wbindgen_debug_string_0e68cf47c9cbd9b0: function(e8, t2) {
    let n2 = Y(Vi(t2), $.__wbindgen_malloc, $.__wbindgen_realloc), r2 = Q;
    j().setInt32(e8 + 4, r2, true), j().setInt32(e8 + 0, n2, true);
  }, __wbg___wbindgen_in_50072d4d6e45c193: function(e8, t2) {
    return e8 in t2;
  }, __wbg___wbindgen_is_bigint_60fc0336cb14f5d7: function(e8) {
    return typeof e8 == `bigint`;
  }, __wbg___wbindgen_is_function_fcda5e3902d732fe: function(e8) {
    return typeof e8 == `function`;
  }, __wbg___wbindgen_is_null_5160b3e381865372: function(e8) {
    return e8 === null;
  }, __wbg___wbindgen_is_object_edb6b15aa3afe12e: function(e8) {
    let t2 = e8;
    return typeof t2 == `object` && !!t2;
  }, __wbg___wbindgen_is_string_c4f7cb494a2a21f1: function(e8) {
    return typeof e8 == `string`;
  }, __wbg___wbindgen_is_undefined_8c687d0b90d5b524: function(e8) {
    return e8 === void 0;
  }, __wbg___wbindgen_jsval_eq_9fdcd3c0a860dd3b: function(e8, t2) {
    return e8 === t2;
  }, __wbg___wbindgen_jsval_loose_eq_3c30021c243b64cd: function(e8, t2) {
    return e8 == t2;
  }, __wbg___wbindgen_module_c2aeeb3b14bad631: function() {
    return aa;
  }, __wbg___wbindgen_number_get_1dc732b810cb937c: function(e8, t2) {
    let n2 = t2, r2 = typeof n2 == `number` ? n2 : void 0;
    j().setFloat64(e8 + 8, U(r2) ? 0 : r2, true), j().setInt32(e8 + 0, !U(r2), true);
  }, __wbg___wbindgen_string_get_92ab86bb19cbc12f: function(e8, t2) {
    let n2 = t2, r2 = typeof n2 == `string` ? n2 : void 0;
    var i2 = U(r2) ? 0 : Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    j().setInt32(e8 + 4, a2, true), j().setInt32(e8 + 0, i2, true);
  }, __wbg___wbindgen_throw_5d9e815e6fdf150f: function(e8, t2) {
    throw Error(L(e8, t2));
  }, __wbg__wbg_cb_unref_997e73d32238e655: function(e8) {
    e8._wbg_cb_unref();
  }, __wbg_activeTexture_79f1f4662ee9ed93: function(e8, t2) {
    e8.activeTexture(t2 >>> 0);
  }, __wbg_activeTexture_e6dac82eb23d9409: function(e8, t2) {
    e8.activeTexture(t2 >>> 0);
  }, __wbg_attachShader_74ecf95efc73ee58: function(e8, t2, n2) {
    e8.attachShader(t2, n2);
  }, __wbg_attachShader_bfb57af27e3c4a25: function(e8, t2, n2) {
    e8.attachShader(t2, n2);
  }, __wbg_beginComputePass_b9a325184985e6ff: function(e8, t2) {
    return e8.beginComputePass(t2);
  }, __wbg_beginQuery_8c123fa7e7aec2a4: function(e8, t2, n2) {
    e8.beginQuery(t2 >>> 0, n2);
  }, __wbg_bindAttribLocation_601c8f14be6021f1: function(e8, t2, n2, r2, i2) {
    e8.bindAttribLocation(t2, n2 >>> 0, L(r2, i2));
  }, __wbg_bindAttribLocation_f97028966e63a9a0: function(e8, t2, n2, r2, i2) {
    e8.bindAttribLocation(t2, n2 >>> 0, L(r2, i2));
  }, __wbg_bindBufferRange_34928ebaef37fa71: function(e8, t2, n2, r2, i2, a2) {
    e8.bindBufferRange(t2 >>> 0, n2 >>> 0, r2, i2, a2);
  }, __wbg_bindBuffer_24fab2b14c509d6f: function(e8, t2, n2) {
    e8.bindBuffer(t2 >>> 0, n2);
  }, __wbg_bindBuffer_f1f33e087b91687c: function(e8, t2, n2) {
    e8.bindBuffer(t2 >>> 0, n2);
  }, __wbg_bindFramebuffer_6c6a9caf742c2cdb: function(e8, t2, n2) {
    e8.bindFramebuffer(t2 >>> 0, n2);
  }, __wbg_bindFramebuffer_dc00cdd13fca80a8: function(e8, t2, n2) {
    e8.bindFramebuffer(t2 >>> 0, n2);
  }, __wbg_bindRenderbuffer_27f21bc7608d07e3: function(e8, t2, n2) {
    e8.bindRenderbuffer(t2 >>> 0, n2);
  }, __wbg_bindRenderbuffer_a5af5373faa4fb14: function(e8, t2, n2) {
    e8.bindRenderbuffer(t2 >>> 0, n2);
  }, __wbg_bindSampler_06a184f24b4f473a: function(e8, t2, n2) {
    e8.bindSampler(t2 >>> 0, n2);
  }, __wbg_bindTexture_7858cc136e95ec24: function(e8, t2, n2) {
    e8.bindTexture(t2 >>> 0, n2);
  }, __wbg_bindTexture_e8a625bf5d240b0f: function(e8, t2, n2) {
    e8.bindTexture(t2 >>> 0, n2);
  }, __wbg_bindVertexArrayOES_c947f00135eda668: function(e8, t2) {
    e8.bindVertexArrayOES(t2);
  }, __wbg_bindVertexArray_4687bb1e8b327fc9: function(e8, t2) {
    e8.bindVertexArray(t2);
  }, __wbg_blendColor_25f3208af2a1a86f: function(e8, t2, n2, r2, i2) {
    e8.blendColor(t2, n2, r2, i2);
  }, __wbg_blendColor_7b3873c65a61b8a7: function(e8, t2, n2, r2, i2) {
    e8.blendColor(t2, n2, r2, i2);
  }, __wbg_blendEquationSeparate_7255a352fb614ccb: function(e8, t2, n2) {
    e8.blendEquationSeparate(t2 >>> 0, n2 >>> 0);
  }, __wbg_blendEquationSeparate_a63d5c1a833c1137: function(e8, t2, n2) {
    e8.blendEquationSeparate(t2 >>> 0, n2 >>> 0);
  }, __wbg_blendEquation_1636f14afa7d37d0: function(e8, t2) {
    e8.blendEquation(t2 >>> 0);
  }, __wbg_blendEquation_9a5ca6936a9438b3: function(e8, t2) {
    e8.blendEquation(t2 >>> 0);
  }, __wbg_blendFuncSeparate_1afc51f9c96486b2: function(e8, t2, n2, r2, i2) {
    e8.blendFuncSeparate(t2 >>> 0, n2 >>> 0, r2 >>> 0, i2 >>> 0);
  }, __wbg_blendFuncSeparate_222d39ec0d6bb147: function(e8, t2, n2, r2, i2) {
    e8.blendFuncSeparate(t2 >>> 0, n2 >>> 0, r2 >>> 0, i2 >>> 0);
  }, __wbg_blendFunc_041c4d7dc50ac8c9: function(e8, t2, n2) {
    e8.blendFunc(t2 >>> 0, n2 >>> 0);
  }, __wbg_blendFunc_ad7d043180d4f86a: function(e8, t2, n2) {
    e8.blendFunc(t2 >>> 0, n2 >>> 0);
  }, __wbg_blitFramebuffer_beb217dd67c23446: function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
    e8.blitFramebuffer(t2, n2, r2, i2, a2, o2, s2, c2, l2 >>> 0, u2 >>> 0);
  }, __wbg_bufferData_5d0d376bd14d58f3: function(e8, t2, n2, r2) {
    e8.bufferData(t2 >>> 0, n2, r2 >>> 0);
  }, __wbg_bufferData_9ce5cb209386d279: function(e8, t2, n2, r2) {
    e8.bufferData(t2 >>> 0, n2, r2 >>> 0);
  }, __wbg_bufferData_b58d3ee720ef8b13: function(e8, t2, n2, r2) {
    e8.bufferData(t2 >>> 0, n2, r2 >>> 0);
  }, __wbg_bufferData_c074912da5a8e8c2: function(e8, t2, n2, r2) {
    e8.bufferData(t2 >>> 0, n2, r2 >>> 0);
  }, __wbg_bufferSubData_1210904a130da787: function(e8, t2, n2, r2) {
    e8.bufferSubData(t2 >>> 0, n2, r2);
  }, __wbg_bufferSubData_bb3556faa77ce63a: function(e8, t2, n2, r2) {
    e8.bufferSubData(t2 >>> 0, n2, r2);
  }, __wbg_call_269c5566fbede3eb: function() {
    return H(function(e8, t2) {
      return e8.call(t2);
    }, arguments);
  }, __wbg_call_6bcf8d3e20937e46: function() {
    return H(function(e8, t2, n2) {
      return e8.call(t2, n2);
    }, arguments);
  }, __wbg_call_c1ad1cb1b78e8130: function() {
    return H(function(e8, t2, n2, r2, i2) {
      return e8.call(t2, n2, r2, i2);
    }, arguments);
  }, __wbg_clearBufferfv_5c3233abb46232dd: function(e8, t2, n2, r2, i2) {
    e8.clearBufferfv(t2 >>> 0, n2, T(r2, i2));
  }, __wbg_clearBufferiv_a6017e170f127402: function(e8, t2, n2, r2, i2) {
    e8.clearBufferiv(t2 >>> 0, n2, E(r2, i2));
  }, __wbg_clearBufferuiv_a7ff44fb5a19e886: function(e8, t2, n2, r2, i2) {
    e8.clearBufferuiv(t2 >>> 0, n2, O(r2, i2));
  }, __wbg_clearDepth_a4e9a96e0b87fadb: function(e8, t2) {
    e8.clearDepth(t2);
  }, __wbg_clearDepth_ea9081c357d405be: function(e8, t2) {
    e8.clearDepth(t2);
  }, __wbg_clearStencil_8c03daa5a936cf97: function(e8, t2) {
    e8.clearStencil(t2);
  }, __wbg_clearStencil_bd3508b2e4a055c8: function(e8, t2) {
    e8.clearStencil(t2);
  }, __wbg_clear_55f5d5ab26fe80b4: function(e8, t2) {
    e8.clear(t2 >>> 0);
  }, __wbg_clear_faad852996d5b5ca: function(e8, t2) {
    e8.clear(t2 >>> 0);
  }, __wbg_clientWaitSync_1e222800321920a4: function(e8, t2, n2, r2) {
    return e8.clientWaitSync(t2, n2 >>> 0, r2 >>> 0);
  }, __wbg_colorMask_dc6ca7d28d90ca79: function(e8, t2, n2, r2, i2) {
    e8.colorMask(t2 !== 0, n2 !== 0, r2 !== 0, i2 !== 0);
  }, __wbg_colorMask_ee5503a19adab893: function(e8, t2, n2, r2, i2) {
    e8.colorMask(t2 !== 0, n2 !== 0, r2 !== 0, i2 !== 0);
  }, __wbg_compileShader_cabeb4aa8cb42914: function(e8, t2) {
    e8.compileShader(t2);
  }, __wbg_compileShader_dada15a718167c7f: function(e8, t2) {
    e8.compileShader(t2);
  }, __wbg_compressedTexSubImage2D_08a73ef1b07eadd4: function(e8, t2, n2, r2, i2, a2, o2, s2, c2) {
    e8.compressedTexSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2);
  }, __wbg_compressedTexSubImage2D_26483f478d06e5b6: function(e8, t2, n2, r2, i2, a2, o2, s2, c2) {
    e8.compressedTexSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2);
  }, __wbg_compressedTexSubImage2D_fd0d06f029b00475: function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
    e8.compressedTexSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2, l2);
  }, __wbg_compressedTexSubImage3D_916c6fa47a2c6ca4: function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
    e8.compressedTexSubImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2, l2 >>> 0, u2);
  }, __wbg_compressedTexSubImage3D_ca08254972ab7956: function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
    e8.compressedTexSubImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2, l2 >>> 0, u2, d2);
  }, __wbg_configure_1e2c1c9edad07d26: function() {
    return H(function(e8, t2) {
      e8.configure(t2);
    }, arguments);
  }, __wbg_copyBufferSubData_4649cb7afad601b3: function(e8, t2, n2, r2, i2, a2) {
    e8.copyBufferSubData(t2 >>> 0, n2 >>> 0, r2, i2, a2);
  }, __wbg_copyBufferToBuffer_01766818654a9868: function() {
    return H(function(e8, t2, n2, r2, i2) {
      e8.copyBufferToBuffer(t2, n2, r2, i2);
    }, arguments);
  }, __wbg_copyBufferToBuffer_9c174b96fb08d551: function() {
    return H(function(e8, t2, n2, r2, i2, a2) {
      e8.copyBufferToBuffer(t2, n2, r2, i2, a2);
    }, arguments);
  }, __wbg_copyTexSubImage2D_b5dc78e744bb31d3: function(e8, t2, n2, r2, i2, a2, o2, s2, c2) {
    e8.copyTexSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2);
  }, __wbg_copyTexSubImage2D_f1d2043ea68078f1: function(e8, t2, n2, r2, i2, a2, o2, s2, c2) {
    e8.copyTexSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2);
  }, __wbg_copyTexSubImage3D_a6674efc4225de77: function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
    e8.copyTexSubImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2, l2);
  }, __wbg_copyTextureToBuffer_1234b3210431ad05: function() {
    return H(function(e8, t2, n2, r2) {
      e8.copyTextureToBuffer(t2, n2, r2);
    }, arguments);
  }, __wbg_createBindGroupLayout_b1bd63b4e88459d8: function() {
    return H(function(e8, t2) {
      return e8.createBindGroupLayout(t2);
    }, arguments);
  }, __wbg_createBindGroup_f539b26ca341308f: function(e8, t2) {
    return e8.createBindGroup(t2);
  }, __wbg_createBuffer_77a9a8580e5123cc: function(e8) {
    let t2 = e8.createBuffer();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createBuffer_b4dd77c6c40a2e87: function(e8) {
    let t2 = e8.createBuffer();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createBuffer_d800e9b1d41b2ee5: function() {
    return H(function(e8, t2) {
      return e8.createBuffer(t2);
    }, arguments);
  }, __wbg_createCommandEncoder_3352d1ffc36c6fc0: function(e8, t2) {
    return e8.createCommandEncoder(t2);
  }, __wbg_createComputePipeline_224fa2618d9948a0: function(e8, t2) {
    return e8.createComputePipeline(t2);
  }, __wbg_createFramebuffer_aa440c781a6c7da2: function(e8) {
    let t2 = e8.createFramebuffer();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createFramebuffer_ac4ca0fc2cfc1bd1: function(e8) {
    let t2 = e8.createFramebuffer();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createPipelineLayout_6eab52c327118937: function(e8, t2) {
    return e8.createPipelineLayout(t2);
  }, __wbg_createProgram_89a2bb21dab7e222: function(e8) {
    let t2 = e8.createProgram();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createProgram_e43ace4085d1086d: function(e8) {
    let t2 = e8.createProgram();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createQuery_731629e292b35522: function(e8) {
    let t2 = e8.createQuery();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createRenderbuffer_3605e09d07f5a422: function(e8) {
    let t2 = e8.createRenderbuffer();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createRenderbuffer_42eeb481e4c92ff2: function(e8) {
    let t2 = e8.createRenderbuffer();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createSampler_ebfb34feb26878f1: function(e8) {
    let t2 = e8.createSampler();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createShaderModule_cefa51336cb288ae: function(e8, t2) {
    return e8.createShaderModule(t2);
  }, __wbg_createShader_4d944e14daceede8: function(e8, t2) {
    let n2 = e8.createShader(t2 >>> 0);
    return U(n2) ? 0 : C(n2);
  }, __wbg_createShader_70a84327b207bda4: function(e8, t2) {
    let n2 = e8.createShader(t2 >>> 0);
    return U(n2) ? 0 : C(n2);
  }, __wbg_createTexture_a409a8c7972e99b3: function(e8) {
    let t2 = e8.createTexture();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createTexture_ecccbb9df64e8c81: function(e8) {
    let t2 = e8.createTexture();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createTexture_ed7e9fc04dd54d84: function() {
    return H(function(e8, t2) {
      return e8.createTexture(t2);
    }, arguments);
  }, __wbg_createVertexArrayOES_083ec6fc6262613d: function(e8) {
    let t2 = e8.createVertexArrayOES();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createVertexArray_9411e94d2ee6864e: function(e8) {
    let t2 = e8.createVertexArray();
    return U(t2) ? 0 : C(t2);
  }, __wbg_createView_da41c2d2cb212715: function() {
    return H(function(e8, t2) {
      return e8.createView(t2);
    }, arguments);
  }, __wbg_cullFace_3e14866a0c370004: function(e8, t2) {
    e8.cullFace(t2 >>> 0);
  }, __wbg_cullFace_b64f84debd112644: function(e8, t2) {
    e8.cullFace(t2 >>> 0);
  }, __wbg_deleteBuffer_54e287dbecb17d6e: function(e8, t2) {
    e8.deleteBuffer(t2);
  }, __wbg_deleteBuffer_c9dc22cdbb93ffbc: function(e8, t2) {
    e8.deleteBuffer(t2);
  }, __wbg_deleteFramebuffer_6c3b62109b65e8de: function(e8, t2) {
    e8.deleteFramebuffer(t2);
  }, __wbg_deleteFramebuffer_977fae88c7df1c6f: function(e8, t2) {
    e8.deleteFramebuffer(t2);
  }, __wbg_deleteProgram_16fe8b000141443c: function(e8, t2) {
    e8.deleteProgram(t2);
  }, __wbg_deleteProgram_c990794adb74a326: function(e8, t2) {
    e8.deleteProgram(t2);
  }, __wbg_deleteQuery_670219eac170c9fb: function(e8, t2) {
    e8.deleteQuery(t2);
  }, __wbg_deleteRenderbuffer_1066bd086097d9c0: function(e8, t2) {
    e8.deleteRenderbuffer(t2);
  }, __wbg_deleteRenderbuffer_be22a49b59807a79: function(e8, t2) {
    e8.deleteRenderbuffer(t2);
  }, __wbg_deleteSampler_a7f5bf9c8096d80a: function(e8, t2) {
    e8.deleteSampler(t2);
  }, __wbg_deleteShader_7169f1760153b284: function(e8, t2) {
    e8.deleteShader(t2);
  }, __wbg_deleteShader_9b34ccd212c66de7: function(e8, t2) {
    e8.deleteShader(t2);
  }, __wbg_deleteSync_5f19ce0564df8ade: function(e8, t2) {
    e8.deleteSync(t2);
  }, __wbg_deleteTexture_4cc3a009d8de3629: function(e8, t2) {
    e8.deleteTexture(t2);
  }, __wbg_deleteTexture_5f176c5fb10209e7: function(e8, t2) {
    e8.deleteTexture(t2);
  }, __wbg_deleteVertexArrayOES_8ddbff0c3c4bd01b: function(e8, t2) {
    e8.deleteVertexArrayOES(t2);
  }, __wbg_deleteVertexArray_a810728c9f325e4c: function(e8, t2) {
    e8.deleteVertexArray(t2);
  }, __wbg_depthFunc_e3cb63d0ea760f4f: function(e8, t2) {
    e8.depthFunc(t2 >>> 0);
  }, __wbg_depthFunc_fc1a3d2fde41ec92: function(e8, t2) {
    e8.depthFunc(t2 >>> 0);
  }, __wbg_depthMask_77fed42fc2117471: function(e8, t2) {
    e8.depthMask(t2 !== 0);
  }, __wbg_depthMask_e85b064c1ee5147d: function(e8, t2) {
    e8.depthMask(t2 !== 0);
  }, __wbg_depthRange_2b6920405cfb1e3d: function(e8, t2, n2) {
    e8.depthRange(t2, n2);
  }, __wbg_depthRange_6e341dd878a6597d: function(e8, t2, n2) {
    e8.depthRange(t2, n2);
  }, __wbg_destroy_637537007d9eaa44: function(e8) {
    e8.destroy();
  }, __wbg_disableVertexAttribArray_45e2fd394cde8686: function(e8, t2) {
    e8.disableVertexAttribArray(t2 >>> 0);
  }, __wbg_disableVertexAttribArray_b985896436c82562: function(e8, t2) {
    e8.disableVertexAttribArray(t2 >>> 0);
  }, __wbg_disable_6907c683adc38e04: function(e8, t2) {
    e8.disable(t2 >>> 0);
  }, __wbg_disable_71ea0d3d0529f100: function(e8, t2) {
    e8.disable(t2 >>> 0);
  }, __wbg_dispatchWorkgroups_56b943172790add0: function(e8, t2, n2, r2) {
    e8.dispatchWorkgroups(t2 >>> 0, n2 >>> 0, r2 >>> 0);
  }, __wbg_document_c7f486c52d63d24e: function(e8) {
    let t2 = e8.document;
    return U(t2) ? 0 : C(t2);
  }, __wbg_done_cffed884d87aa22e: function(e8) {
    return e8.done;
  }, __wbg_drawArraysInstancedANGLE_1161faf698564d6d: function(e8, t2, n2, r2, i2) {
    e8.drawArraysInstancedANGLE(t2 >>> 0, n2, r2, i2);
  }, __wbg_drawArraysInstanced_0ef1fbcdba111c38: function(e8, t2, n2, r2, i2) {
    e8.drawArraysInstanced(t2 >>> 0, n2, r2, i2);
  }, __wbg_drawArrays_983f352c9e94d800: function(e8, t2, n2, r2) {
    e8.drawArrays(t2 >>> 0, n2, r2);
  }, __wbg_drawArrays_bc085b67da45ec03: function(e8, t2, n2, r2) {
    e8.drawArrays(t2 >>> 0, n2, r2);
  }, __wbg_drawBuffersWEBGL_6cfb1b5e064e9ed2: function(e8, t2) {
    e8.drawBuffersWEBGL(t2);
  }, __wbg_drawBuffers_9b22ea9d8f6a15f0: function(e8, t2) {
    e8.drawBuffers(t2);
  }, __wbg_drawElementsInstancedANGLE_da080f7c11a85ead: function(e8, t2, n2, r2, i2, a2) {
    e8.drawElementsInstancedANGLE(t2 >>> 0, n2, r2 >>> 0, i2, a2);
  }, __wbg_drawElementsInstanced_ea7d6b71beea79a4: function(e8, t2, n2, r2, i2, a2) {
    e8.drawElementsInstanced(t2 >>> 0, n2, r2 >>> 0, i2, a2);
  }, __wbg_enableVertexAttribArray_ad4d8ff487ea8fe1: function(e8, t2) {
    e8.enableVertexAttribArray(t2 >>> 0);
  }, __wbg_enableVertexAttribArray_db5eef27f6b32c4a: function(e8, t2) {
    e8.enableVertexAttribArray(t2 >>> 0);
  }, __wbg_enable_9fb8e4de75a17155: function(e8, t2) {
    e8.enable(t2 >>> 0);
  }, __wbg_enable_9fca6962aca10f48: function(e8, t2) {
    e8.enable(t2 >>> 0);
  }, __wbg_endQuery_4eea0267f103b625: function(e8, t2) {
    e8.endQuery(t2 >>> 0);
  }, __wbg_end_82fd0c12ba185009: function(e8) {
    e8.end();
  }, __wbg_entries_972a87586902cf87: function(e8) {
    return Object.entries(e8);
  }, __wbg_error_756c5934221e6fee: function(e8) {
    console.error(e8);
  }, __wbg_error_757e9472f8410341: function(e8, t2) {
    let n2, r2;
    try {
      n2 = e8, r2 = t2, console.error(L(e8, t2));
    } finally {
      $.__wbindgen_free(n2, r2, 1);
    }
  }, __wbg_error_8c8dff942c7c4f11: function(e8) {
    return e8.error;
  }, __wbg_fenceSync_13999b65854e9b9b: function(e8, t2, n2) {
    let r2 = e8.fenceSync(t2 >>> 0, n2 >>> 0);
    return U(r2) ? 0 : C(r2);
  }, __wbg_finish_09ec094c10f41e7b: function(e8) {
    return e8.finish();
  }, __wbg_finish_0ce019eb398085de: function(e8) {
    e8.finish();
  }, __wbg_finish_646a6b6ddc91f563: function(e8) {
    e8.finish();
  }, __wbg_finish_ec1c191f66a895b1: function(e8, t2) {
    return e8.finish(t2);
  }, __wbg_flush_824eea12383b8cca: function(e8) {
    e8.flush();
  }, __wbg_flush_c4a6f752e79bfc53: function(e8) {
    e8.flush();
  }, __wbg_framebufferRenderbuffer_aa5275e6a52dc6bd: function(e8, t2, n2, r2, i2) {
    e8.framebufferRenderbuffer(t2 >>> 0, n2 >>> 0, r2 >>> 0, i2);
  }, __wbg_framebufferRenderbuffer_f5e60406b8ee912e: function(e8, t2, n2, r2, i2) {
    e8.framebufferRenderbuffer(t2 >>> 0, n2 >>> 0, r2 >>> 0, i2);
  }, __wbg_framebufferTexture2D_7a85448ff0ab4b2c: function(e8, t2, n2, r2, i2, a2) {
    e8.framebufferTexture2D(t2 >>> 0, n2 >>> 0, r2 >>> 0, i2, a2);
  }, __wbg_framebufferTexture2D_ee6a0d85fd7083aa: function(e8, t2, n2, r2, i2, a2) {
    e8.framebufferTexture2D(t2 >>> 0, n2 >>> 0, r2 >>> 0, i2, a2);
  }, __wbg_framebufferTextureLayer_7c877ec2a0f9220b: function(e8, t2, n2, r2, i2, a2) {
    e8.framebufferTextureLayer(t2 >>> 0, n2 >>> 0, r2, i2, a2);
  }, __wbg_framebufferTextureMultiviewOVR_64b070ac25c07833: function(e8, t2, n2, r2, i2, a2, o2) {
    e8.framebufferTextureMultiviewOVR(t2 >>> 0, n2 >>> 0, r2, i2, a2, o2);
  }, __wbg_frontFace_77f09a7664c8cd54: function(e8, t2) {
    e8.frontFace(t2 >>> 0);
  }, __wbg_frontFace_b3888c65efdb32fe: function(e8, t2) {
    e8.frontFace(t2 >>> 0);
  }, __wbg_getBufferSubData_2c901ce3bd14301e: function(e8, t2, n2, r2) {
    e8.getBufferSubData(t2 >>> 0, n2, r2);
  }, __wbg_getContext_2c75bba1a1c9739b: function() {
    return H(function(e8, t2, n2, r2) {
      let i2 = e8.getContext(L(t2, n2), r2);
      return U(i2) ? 0 : C(i2);
    }, arguments);
  }, __wbg_getContext_5ff6bd600503b094: function() {
    return H(function(e8, t2, n2) {
      let r2 = e8.getContext(L(t2, n2));
      return U(r2) ? 0 : C(r2);
    }, arguments);
  }, __wbg_getContext_db25e9527f2ccc08: function() {
    return H(function(e8, t2, n2, r2) {
      let i2 = e8.getContext(L(t2, n2), r2);
      return U(i2) ? 0 : C(i2);
    }, arguments);
  }, __wbg_getExtension_112db5d69fdfc10f: function() {
    return H(function(e8, t2, n2) {
      let r2 = e8.getExtension(L(t2, n2));
      return U(r2) ? 0 : C(r2);
    }, arguments);
  }, __wbg_getIndexedParameter_d4437eb4ad4a0bfa: function() {
    return H(function(e8, t2, n2) {
      return e8.getIndexedParameter(t2 >>> 0, n2 >>> 0);
    }, arguments);
  }, __wbg_getMappedRange_fb54c6327b2d8d20: function() {
    return H(function(e8, t2, n2) {
      return e8.getMappedRange(t2, n2);
    }, arguments);
  }, __wbg_getParameter_031885c3618c2d0c: function() {
    return H(function(e8, t2) {
      return e8.getParameter(t2 >>> 0);
    }, arguments);
  }, __wbg_getParameter_7f269432cd46eb73: function() {
    return H(function(e8, t2) {
      return e8.getParameter(t2 >>> 0);
    }, arguments);
  }, __wbg_getProgramInfoLog_0e335b65673afba8: function(e8, t2, n2) {
    let r2 = t2.getProgramInfoLog(n2);
    var i2 = U(r2) ? 0 : Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    j().setInt32(e8 + 4, a2, true), j().setInt32(e8 + 0, i2, true);
  }, __wbg_getProgramInfoLog_82aa11c9d7e8d96e: function(e8, t2, n2) {
    let r2 = t2.getProgramInfoLog(n2);
    var i2 = U(r2) ? 0 : Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    j().setInt32(e8 + 4, a2, true), j().setInt32(e8 + 0, i2, true);
  }, __wbg_getProgramParameter_1a93fd2f4dcc0622: function(e8, t2, n2) {
    return e8.getProgramParameter(t2, n2 >>> 0);
  }, __wbg_getProgramParameter_2a5860ab824690ec: function(e8, t2, n2) {
    return e8.getProgramParameter(t2, n2 >>> 0);
  }, __wbg_getQueryParameter_145128cfab5de56d: function(e8, t2, n2) {
    return e8.getQueryParameter(t2, n2 >>> 0);
  }, __wbg_getRandomValues_461aca49b5456fc4: function() {
    return H(function(e8, t2) {
      globalThis.crypto.getRandomValues(k(e8, t2));
    }, arguments);
  }, __wbg_getShaderInfoLog_416aea280f6fdf84: function(e8, t2, n2) {
    let r2 = t2.getShaderInfoLog(n2);
    var i2 = U(r2) ? 0 : Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    j().setInt32(e8 + 4, a2, true), j().setInt32(e8 + 0, i2, true);
  }, __wbg_getShaderInfoLog_e66ab6619bcd208d: function(e8, t2, n2) {
    let r2 = t2.getShaderInfoLog(n2);
    var i2 = U(r2) ? 0 : Y(r2, $.__wbindgen_malloc, $.__wbindgen_realloc), a2 = Q;
    j().setInt32(e8 + 4, a2, true), j().setInt32(e8 + 0, i2, true);
  }, __wbg_getShaderParameter_b19fb6adcff77066: function(e8, t2, n2) {
    return e8.getShaderParameter(t2, n2 >>> 0);
  }, __wbg_getShaderParameter_d542b1412563ae42: function(e8, t2, n2) {
    return e8.getShaderParameter(t2, n2 >>> 0);
  }, __wbg_getSupportedExtensions_67cde11dd49cad1a: function(e8) {
    let t2 = e8.getSupportedExtensions();
    return U(t2) ? 0 : C(t2);
  }, __wbg_getSupportedProfiles_abd53cd63178e1e0: function(e8) {
    let t2 = e8.getSupportedProfiles();
    return U(t2) ? 0 : C(t2);
  }, __wbg_getSyncParameter_f4eeca8570f06af5: function(e8, t2, n2) {
    return e8.getSyncParameter(t2, n2 >>> 0);
  }, __wbg_getUniformBlockIndex_db57fe2d6ed6af2a: function(e8, t2, n2, r2) {
    return e8.getUniformBlockIndex(t2, L(n2, r2));
  }, __wbg_getUniformLocation_03b9677a8f868582: function(e8, t2, n2, r2) {
    let i2 = e8.getUniformLocation(t2, L(n2, r2));
    return U(i2) ? 0 : C(i2);
  }, __wbg_getUniformLocation_20bad5ce4a0aaae4: function(e8, t2, n2, r2) {
    let i2 = e8.getUniformLocation(t2, L(n2, r2));
    return U(i2) ? 0 : C(i2);
  }, __wbg_get_6cf5a4d4d8ad3c5a: function() {
    return H(function(e8, t2) {
      return Reflect.get(e8, t2);
    }, arguments);
  }, __wbg_get_989d0a1309644f2b: function() {
    return H(function(e8, t2) {
      return Reflect.get(e8, t2);
    }, arguments);
  }, __wbg_get_b1f0ab13c737f856: function(e8, t2) {
    return e8[t2 >>> 0];
  }, __wbg_get_unchecked_363572bdd397d473: function(e8, t2) {
    return e8[t2 >>> 0];
  }, __wbg_get_with_ref_key_6412cf3094599694: function(e8, t2) {
    return e8[t2];
  }, __wbg_gpu_afdd4387c7afe5f9: function(e8) {
    return e8.gpu;
  }, __wbg_includes_c0f578d8314b8dbf: function(e8, t2, n2) {
    return e8.includes(t2, n2);
  }, __wbg_instanceof_ArrayBuffer_d4ff01f8247925ae: function(e8) {
    let t2;
    try {
      t2 = e8 instanceof ArrayBuffer;
    } catch {
      t2 = false;
    }
    return t2;
  }, __wbg_instanceof_GpuOutOfMemoryError_5c3b8a2499f59adb: function(e8) {
    let t2;
    try {
      t2 = e8 instanceof GPUOutOfMemoryError;
    } catch {
      t2 = false;
    }
    return t2;
  }, __wbg_instanceof_GpuValidationError_7659e07b12d4e184: function(e8) {
    let t2;
    try {
      t2 = e8 instanceof GPUValidationError;
    } catch {
      t2 = false;
    }
    return t2;
  }, __wbg_instanceof_HtmlCanvasElement_4d7e131643d814c1: function(e8) {
    let t2;
    try {
      t2 = e8 instanceof HTMLCanvasElement;
    } catch {
      t2 = false;
    }
    return t2;
  }, __wbg_instanceof_Map_1ff6a2b54c899f0d: function(e8) {
    let t2;
    try {
      t2 = e8 instanceof Map;
    } catch {
      t2 = false;
    }
    return t2;
  }, __wbg_instanceof_Uint8Array_598adc0fef426aa8: function(e8) {
    let t2;
    try {
      t2 = e8 instanceof Uint8Array;
    } catch {
      t2 = false;
    }
    return t2;
  }, __wbg_instanceof_WebGl2RenderingContext_015d221b904a3c7b: function(e8) {
    let t2;
    try {
      t2 = e8 instanceof WebGL2RenderingContext;
    } catch {
      t2 = false;
    }
    return t2;
  }, __wbg_instanceof_Window_a3b8566f0a9c5d1a: function(e8) {
    let t2;
    try {
      t2 = e8 instanceof Window;
    } catch {
      t2 = false;
    }
    return t2;
  }, __wbg_invalidateFramebuffer_4538559f02a556ae: function() {
    return H(function(e8, t2, n2) {
      e8.invalidateFramebuffer(t2 >>> 0, n2);
    }, arguments);
  }, __wbg_isArray_5674713bb7b79043: function(e8) {
    return Array.isArray(e8);
  }, __wbg_isSafeInteger_8f51c743827d1ec5: function(e8) {
    return Number.isSafeInteger(e8);
  }, __wbg_is_61443cc073056436: function(e8, t2) {
    return Object.is(e8, t2);
  }, __wbg_iterator_22ddeb808cf55a6f: function() {
    return Symbol.iterator;
  }, __wbg_label_7add8cb37a6ef98f: function(e8, t2) {
    let n2 = t2.label, r2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q;
    j().setInt32(e8 + 4, i2, true), j().setInt32(e8 + 0, r2, true);
  }, __wbg_length_31bdaf014f5fbde2: function(e8) {
    return e8.length;
  }, __wbg_length_4e1adc0d42e23620: function(e8) {
    return e8.length;
  }, __wbg_limits_601ad2e086ef8141: function(e8) {
    return e8.limits;
  }, __wbg_linkProgram_794fd290a759542a: function(e8, t2) {
    e8.linkProgram(t2);
  }, __wbg_linkProgram_e408ee5f93686f1f: function(e8, t2) {
    e8.linkProgram(t2);
  }, __wbg_log_363d83b9114c8831: function(e8) {
    console.log(e8);
  }, __wbg_mapAsync_b0597127f5037286: function(e8, t2, n2, r2) {
    return e8.mapAsync(t2 >>> 0, n2, r2);
  }, __wbg_maxBindGroupsPlusVertexBuffers_52369f089736ef9d: function(e8) {
    return e8.maxBindGroupsPlusVertexBuffers;
  }, __wbg_maxBindGroups_4e424afe6ce86ca2: function(e8) {
    return e8.maxBindGroups;
  }, __wbg_maxBindingsPerBindGroup_7d035da36821c44f: function(e8) {
    return e8.maxBindingsPerBindGroup;
  }, __wbg_maxBufferSize_423f4a084e32a195: function(e8) {
    return e8.maxBufferSize;
  }, __wbg_maxColorAttachmentBytesPerSample_c4cd9126f6d287c6: function(e8) {
    return e8.maxColorAttachmentBytesPerSample;
  }, __wbg_maxColorAttachments_d924670762b9e250: function(e8) {
    return e8.maxColorAttachments;
  }, __wbg_maxComputeInvocationsPerWorkgroup_707a3868f7cebb59: function(e8) {
    return e8.maxComputeInvocationsPerWorkgroup;
  }, __wbg_maxComputeWorkgroupSizeX_0a4d99463cbd6e5e: function(e8) {
    return e8.maxComputeWorkgroupSizeX;
  }, __wbg_maxComputeWorkgroupSizeY_85123ea0587f7558: function(e8) {
    return e8.maxComputeWorkgroupSizeY;
  }, __wbg_maxComputeWorkgroupSizeZ_a3186b4c5267d44f: function(e8) {
    return e8.maxComputeWorkgroupSizeZ;
  }, __wbg_maxComputeWorkgroupStorageSize_57b297355cfb6204: function(e8) {
    return e8.maxComputeWorkgroupStorageSize;
  }, __wbg_maxComputeWorkgroupsPerDimension_4158f95e673d54c4: function(e8) {
    return e8.maxComputeWorkgroupsPerDimension;
  }, __wbg_maxDynamicStorageBuffersPerPipelineLayout_226b0b70910aa16c: function(e8) {
    return e8.maxDynamicStorageBuffersPerPipelineLayout;
  }, __wbg_maxDynamicUniformBuffersPerPipelineLayout_0e835fda711fc7e6: function(e8) {
    return e8.maxDynamicUniformBuffersPerPipelineLayout;
  }, __wbg_maxInterStageShaderVariables_8c4a1d727e2aa35a: function(e8) {
    return e8.maxInterStageShaderVariables;
  }, __wbg_maxSampledTexturesPerShaderStage_6675f5e91d9a728a: function(e8) {
    return e8.maxSampledTexturesPerShaderStage;
  }, __wbg_maxSamplersPerShaderStage_1910fa38a6ed1e1f: function(e8) {
    return e8.maxSamplersPerShaderStage;
  }, __wbg_maxStorageBufferBindingSize_2e244bded070b18d: function(e8) {
    return e8.maxStorageBufferBindingSize;
  }, __wbg_maxStorageBuffersPerShaderStage_a285f3ebca51ca0d: function(e8) {
    return e8.maxStorageBuffersPerShaderStage;
  }, __wbg_maxStorageTexturesPerShaderStage_7aa946f0fc322a2b: function(e8) {
    return e8.maxStorageTexturesPerShaderStage;
  }, __wbg_maxTextureArrayLayers_0e699147ad00502d: function(e8) {
    return e8.maxTextureArrayLayers;
  }, __wbg_maxTextureDimension1D_aabf6add54decfe2: function(e8) {
    return e8.maxTextureDimension1D;
  }, __wbg_maxTextureDimension2D_dd598b27e9c0c1c4: function(e8) {
    return e8.maxTextureDimension2D;
  }, __wbg_maxTextureDimension3D_f944266c65dfd1a9: function(e8) {
    return e8.maxTextureDimension3D;
  }, __wbg_maxUniformBufferBindingSize_59fa6be7cfbeeb53: function(e8) {
    return e8.maxUniformBufferBindingSize;
  }, __wbg_maxUniformBuffersPerShaderStage_bee5f00a4d706c7f: function(e8) {
    return e8.maxUniformBuffersPerShaderStage;
  }, __wbg_maxVertexAttributes_5cf6392c4e9033fe: function(e8) {
    return e8.maxVertexAttributes;
  }, __wbg_maxVertexBufferArrayStride_548baa887375d865: function(e8) {
    return e8.maxVertexBufferArrayStride;
  }, __wbg_maxVertexBuffers_75d881156591f5da: function(e8) {
    return e8.maxVertexBuffers;
  }, __wbg_message_2aad50368e15e8f1: function(e8, t2) {
    let n2 = t2.message, r2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q;
    j().setInt32(e8 + 4, i2, true), j().setInt32(e8 + 0, r2, true);
  }, __wbg_minStorageBufferOffsetAlignment_5ba9b77792bdadb3: function(e8) {
    return e8.minStorageBufferOffsetAlignment;
  }, __wbg_minUniformBufferOffsetAlignment_ab7d52a5293b22bd: function(e8) {
    return e8.minUniformBufferOffsetAlignment;
  }, __wbg_navigator_d217ca64c4bbff48: function(e8) {
    return e8.navigator;
  }, __wbg_navigator_d25c0f071226f233: function(e8) {
    return e8.navigator;
  }, __wbg_new_12e5d807044fbfe3: function() {
    return H(function(e8, t2) {
      return new OffscreenCanvas(e8 >>> 0, t2 >>> 0);
    }, arguments);
  }, __wbg_new_1da3429bc3c4541c: function(e8) {
    return new Uint8Array(e8);
  }, __wbg_new_227d7c05414eb861: function() {
    return Error();
  }, __wbg_new_8d36e20aa758e411: function() {
    return /* @__PURE__ */ new Map();
  }, __wbg_new_8f72ed7c652bf5a2: function(e8, t2) {
    try {
      var n2 = { a: e8, b: t2 };
      return new Promise((e9, t3) => {
        let r2 = n2.a;
        n2.a = 0;
        try {
          return _i(r2, n2.b, e9, t3);
        } finally {
          n2.a = r2;
        }
      });
    } finally {
      n2.a = 0;
    }
  }, __wbg_new_bebc3f4757acf305: function() {
    return {};
  }, __wbg_new_ffa92086ea89f79c: function() {
    return [];
  }, __wbg_new_from_slice_2221cabb71753908: function(e8, t2) {
    return new Float32Array(T(e8, t2));
  }, __wbg_new_from_slice_4ee02165f9de919e: function(e8, t2) {
    return new Uint8Array(k(e8, t2));
  }, __wbg_new_from_slice_a500ec81601be48f: function(e8, t2) {
    return new Uint32Array(O(e8, t2));
  }, __wbg_new_typed_6f8b0d724fe26c07: function(e8, t2) {
    try {
      var n2 = { a: e8, b: t2 };
      return new Promise((e9, t3) => {
        let r2 = n2.a;
        n2.a = 0;
        try {
          return _i(r2, n2.b, e9, t3);
        } finally {
          n2.a = r2;
        }
      });
    } finally {
      n2.a = 0;
    }
  }, __wbg_new_typed_7d4574ab4b8446c8: function() {
    return {};
  }, __wbg_new_with_byte_offset_and_length_492c969e8b5da8a4: function(e8, t2, n2) {
    return new Uint8Array(e8, t2 >>> 0, n2 >>> 0);
  }, __wbg_new_with_length_6a9fc3631737ef8c: function(e8) {
    return Array(e8 >>> 0);
  }, __wbg_next_95053e306b1c3aed: function(e8) {
    return e8.next;
  }, __wbg_next_f31ecb8646d2c605: function() {
    return H(function(e8) {
      return e8.next();
    }, arguments);
  }, __wbg_now_7ea0b064671ccb66: function() {
    return performance.now();
  }, __wbg_now_d1fb6650485d7f3e: function() {
    return Date.now();
  }, __wbg_of_1a3f47170341cefe: function(e8) {
    return [e8];
  }, __wbg_onSubmittedWorkDone_1190213cee1ecf7e: function(e8) {
    return e8.onSubmittedWorkDone();
  }, __wbg_pixelStorei_1bc7980b82e1ba4b: function(e8, t2, n2) {
    e8.pixelStorei(t2 >>> 0, n2);
  }, __wbg_pixelStorei_d540c25aafa93789: function(e8, t2, n2) {
    e8.pixelStorei(t2 >>> 0, n2);
  }, __wbg_polygonOffset_a97069c9fe385bff: function(e8, t2, n2) {
    e8.polygonOffset(t2, n2);
  }, __wbg_polygonOffset_f99887a0cc3d7df4: function(e8, t2, n2) {
    e8.polygonOffset(t2, n2);
  }, __wbg_prototypesetcall_ae9f5e7459250748: function(e8, t2, n2) {
    Uint8Array.prototype.set.call(k(e8, t2), n2);
  }, __wbg_push_bfdf956ba476f65b: function(e8, t2) {
    return e8.push(t2);
  }, __wbg_queryCounterEXT_c9fb8ad39c35fdf6: function(e8, t2, n2) {
    e8.queryCounterEXT(t2, n2 >>> 0);
  }, __wbg_querySelector_5b1d9ebad373dc9d: function() {
    return H(function(e8, t2, n2) {
      let r2 = e8.querySelector(L(t2, n2));
      return U(r2) ? 0 : C(r2);
    }, arguments);
  }, __wbg_queueMicrotask_85c90f6987555d65: function(e8) {
    return e8.queueMicrotask;
  }, __wbg_queueMicrotask_f6a1fa10b81d1fc0: function(e8) {
    queueMicrotask(e8);
  }, __wbg_queue_7b62c28143d44293: function(e8) {
    return e8.queue;
  }, __wbg_readBuffer_1679a4b6dcd78e30: function(e8, t2) {
    e8.readBuffer(t2 >>> 0);
  }, __wbg_readPixels_5d75a0ec1e2aab33: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2) {
      e8.readPixels(t2, n2, r2, i2, a2 >>> 0, o2 >>> 0, s2);
    }, arguments);
  }, __wbg_readPixels_c60bfe6126f65619: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2) {
      e8.readPixels(t2, n2, r2, i2, a2 >>> 0, o2 >>> 0, s2);
    }, arguments);
  }, __wbg_readPixels_dcde619ca94b6296: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2) {
      e8.readPixels(t2, n2, r2, i2, a2 >>> 0, o2 >>> 0, s2);
    }, arguments);
  }, __wbg_renderbufferStorageMultisample_5d9012ce50f133e3: function(e8, t2, n2, r2, i2, a2) {
    e8.renderbufferStorageMultisample(t2 >>> 0, n2, r2 >>> 0, i2, a2);
  }, __wbg_renderbufferStorage_2b50da85624a8b73: function(e8, t2, n2, r2, i2) {
    e8.renderbufferStorage(t2 >>> 0, n2 >>> 0, r2, i2);
  }, __wbg_renderbufferStorage_2eb3d4343d1a1c6e: function(e8, t2, n2, r2, i2) {
    e8.renderbufferStorage(t2 >>> 0, n2 >>> 0, r2, i2);
  }, __wbg_requestAdapter_a539af006419f2e9: function(e8, t2) {
    return e8.requestAdapter(t2);
  }, __wbg_requestDevice_5cb8a582e55d08cb: function(e8, t2) {
    return e8.requestDevice(t2);
  }, __wbg_resolve_35ec7e0c6af4c82c: function(e8) {
    return Promise.resolve(e8);
  }, __wbg_samplerParameterf_34605394359af7ae: function(e8, t2, n2, r2) {
    e8.samplerParameterf(t2, n2 >>> 0, r2);
  }, __wbg_samplerParameteri_ff1f558c8f43a220: function(e8, t2, n2, r2) {
    e8.samplerParameteri(t2, n2 >>> 0, r2);
  }, __wbg_scissor_c53448a6fa939bfb: function(e8, t2, n2, r2, i2) {
    e8.scissor(t2, n2, r2, i2);
  }, __wbg_scissor_d896348c98d0c9ac: function(e8, t2, n2, r2, i2) {
    e8.scissor(t2, n2, r2, i2);
  }, __wbg_setBindGroup_0b7c2a055ef1f314: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2) {
      e8.setBindGroup(t2 >>> 0, n2, O(r2, i2), a2, o2 >>> 0);
    }, arguments);
  }, __wbg_setBindGroup_c83391351ce68826: function(e8, t2, n2) {
    e8.setBindGroup(t2 >>> 0, n2);
  }, __wbg_setPipeline_5146f7b8d2b4af5c: function(e8, t2) {
    e8.setPipeline(t2);
  }, __wbg_set_13d25b81ab403f5e: function(e8, t2, n2) {
    e8[t2 >>> 0] = n2;
  }, __wbg_set_6be42768c690e380: function(e8, t2, n2) {
    e8[t2] = n2;
  }, __wbg_set_9cfc0f17d60ff0af: function(e8, t2, n2) {
    e8.set(t2, n2 >>> 0);
  }, __wbg_set_a377297433dfea63: function() {
    return H(function(e8, t2, n2) {
      return Reflect.set(e8, t2, n2);
    }, arguments);
  }, __wbg_set_access_a099cfbbeec9b96f: function(e8, t2) {
    e8.access = Si[t2];
  }, __wbg_set_array_layer_count_22afa0a979e4ad55: function(e8, t2) {
    e8.arrayLayerCount = t2 >>> 0;
  }, __wbg_set_aspect_a48d046965270281: function(e8, t2) {
    e8.aspect = Ci[t2];
  }, __wbg_set_aspect_b1a9909bf315433f: function(e8, t2) {
    e8.aspect = Ci[t2];
  }, __wbg_set_base_array_layer_2435ba92c80346ae: function(e8, t2) {
    e8.baseArrayLayer = t2 >>> 0;
  }, __wbg_set_base_mip_level_8b6093e875e7c65d: function(e8, t2) {
    e8.baseMipLevel = t2 >>> 0;
  }, __wbg_set_beginning_of_pass_write_index_fa9ae10d5d2804ce: function(e8, t2) {
    e8.beginningOfPassWriteIndex = t2 >>> 0;
  }, __wbg_set_bf6dde4923b9b059: function(e8, t2, n2) {
    return e8.set(t2, n2);
  }, __wbg_set_bind_group_layouts_458c44ba55100b82: function(e8, t2, n2) {
    e8.bindGroupLayouts = D(t2, n2);
  }, __wbg_set_binding_81b3fac7f7acaf8d: function(e8, t2) {
    e8.binding = t2 >>> 0;
  }, __wbg_set_binding_b6cee57f35ac5190: function(e8, t2) {
    e8.binding = t2 >>> 0;
  }, __wbg_set_buffer_1548ae88a9188037: function(e8, t2) {
    e8.buffer = t2;
  }, __wbg_set_buffer_8d0ac64ad20dfc84: function(e8, t2) {
    e8.buffer = t2;
  }, __wbg_set_buffer_910a40a90f97cfca: function(e8, t2) {
    e8.buffer = t2;
  }, __wbg_set_bytes_per_row_1e824a5502b54b3d: function(e8, t2) {
    e8.bytesPerRow = t2 >>> 0;
  }, __wbg_set_bytes_per_row_c28583f0063160f1: function(e8, t2) {
    e8.bytesPerRow = t2 >>> 0;
  }, __wbg_set_code_5d5b0b9e2fd0dca7: function(e8, t2, n2) {
    e8.code = L(t2, n2);
  }, __wbg_set_compute_bc754d9e37f6e4c9: function(e8, t2) {
    e8.compute = t2;
  }, __wbg_set_depth_or_array_layers_e2f074a0284e4806: function(e8, t2) {
    e8.depthOrArrayLayers = t2 >>> 0;
  }, __wbg_set_device_210484a77b675c9c: function(e8, t2) {
    e8.device = t2;
  }, __wbg_set_dimension_3da9d03131a9f446: function(e8, t2) {
    e8.dimension = wi[t2];
  }, __wbg_set_dimension_56332450afa3e0c0: function(e8, t2) {
    e8.dimension = Ei[t2];
  }, __wbg_set_end_of_pass_write_index_b54a8e3802b9ae0d: function(e8, t2) {
    e8.endOfPassWriteIndex = t2 >>> 0;
  }, __wbg_set_entries_6f866302103b81e9: function(e8, t2, n2) {
    e8.entries = D(t2, n2);
  }, __wbg_set_entries_f26b77ab9548e906: function(e8, t2, n2) {
    e8.entries = D(t2, n2);
  }, __wbg_set_entry_point_ac8db535971761fe: function(e8, t2, n2) {
    e8.entryPoint = L(t2, n2);
  }, __wbg_set_external_texture_7f966c604c4f8098: function(e8, t2) {
    e8.externalTexture = t2;
  }, __wbg_set_format_283dca56552f07a3: function(e8, t2) {
    e8.format = S[t2];
  }, __wbg_set_format_66735b94bd868ba2: function(e8, t2) {
    e8.format = S[t2];
  }, __wbg_set_format_92732ea75d3b79f5: function(e8, t2) {
    e8.format = S[t2];
  }, __wbg_set_format_f009e603f7d4c28e: function(e8, t2) {
    e8.format = S[t2];
  }, __wbg_set_has_dynamic_offset_0c72ffa900c5a269: function(e8, t2) {
    e8.hasDynamicOffset = t2 !== 0;
  }, __wbg_set_height_1202ad0eab43cbe0: function(e8, t2) {
    e8.height = t2 >>> 0;
  }, __wbg_set_height_698fb3b255bc1348: function(e8, t2) {
    e8.height = t2 >>> 0;
  }, __wbg_set_height_f6619158e5735877: function(e8, t2) {
    e8.height = t2 >>> 0;
  }, __wbg_set_label_09e2da5f8522dbe8: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_17202740051e9722: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_17b4858e1eef23dd: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_2fefb39c0e0dbbe8: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_3f2ccaafef5ff7c9: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_612add98a4398f92: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_70a09ee68d6b1b26: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_92cd3811e96b487c: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_c3eaf136aa464cba: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_c7987704d29f284b: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_cfe64bca8945ee30: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_label_ee172cd5f6a96961: function(e8, t2, n2) {
    e8.label = L(t2, n2);
  }, __wbg_set_layout_454e3a091b390cd4: function(e8, t2) {
    e8.layout = t2;
  }, __wbg_set_layout_4b5d5b12fbb72a76: function(e8, t2) {
    e8.layout = t2;
  }, __wbg_set_layout_gpu_auto_layout_mode_ee432e515c357fa8: function(e8, t2) {
    e8.layout = vi[t2];
  }, __wbg_set_mapped_at_creation_3f320fef6761b02c: function(e8, t2) {
    e8.mappedAtCreation = t2 !== 0;
  }, __wbg_set_min_binding_size_f64_897e3cd4496ddec9: function(e8, t2) {
    e8.minBindingSize = t2;
  }, __wbg_set_mip_level_count_047936c630acee7b: function(e8, t2) {
    e8.mipLevelCount = t2 >>> 0;
  }, __wbg_set_mip_level_count_44bc46a1ae6f6daa: function(e8, t2) {
    e8.mipLevelCount = t2 >>> 0;
  }, __wbg_set_mip_level_f3745730372683d5: function(e8, t2) {
    e8.mipLevel = t2 >>> 0;
  }, __wbg_set_module_c9946af218d23b53: function(e8, t2) {
    e8.module = t2;
  }, __wbg_set_multisampled_039f032dc4b67367: function(e8, t2) {
    e8.multisampled = t2 !== 0;
  }, __wbg_set_offset_f64_127e8a0aa5c5485a: function(e8, t2) {
    e8.offset = t2;
  }, __wbg_set_offset_f64_a903425d5a8e5815: function(e8, t2) {
    e8.offset = t2;
  }, __wbg_set_offset_f64_d1d115dd438165b5: function(e8, t2) {
    e8.offset = t2;
  }, __wbg_set_onuncapturederror_bb813f1102da2296: function(e8, t2) {
    e8.onuncapturederror = t2;
  }, __wbg_set_origin_gpu_origin_3d_dict_0619d4860adb4eb6: function(e8, t2) {
    e8.origin = t2;
  }, __wbg_set_power_preference_b42d00a8facfbade: function(e8, t2) {
    e8.powerPreference = bi[t2];
  }, __wbg_set_query_set_f9a94586851fdba2: function(e8, t2) {
    e8.querySet = t2;
  }, __wbg_set_required_features_bbab71414c45e621: function(e8, t2, n2) {
    e8.requiredFeatures = D(t2, n2);
  }, __wbg_set_required_limits_837f62d865e7cfac: function(e8, t2) {
    e8.requiredLimits = t2;
  }, __wbg_set_resource_8fd8658b30d86ecf: function(e8, t2) {
    e8.resource = t2;
  }, __wbg_set_resource_gpu_buffer_binding_33099b25da65b610: function(e8, t2) {
    e8.resource = t2;
  }, __wbg_set_resource_gpu_texture_view_4cffe7bc7c8e5cbe: function(e8, t2) {
    e8.resource = t2;
  }, __wbg_set_rows_per_image_c6d50d227e634379: function(e8, t2) {
    e8.rowsPerImage = t2 >>> 0;
  }, __wbg_set_rows_per_image_deb456502f23c260: function(e8, t2) {
    e8.rowsPerImage = t2 >>> 0;
  }, __wbg_set_sample_count_481c255a12054e1d: function(e8, t2) {
    e8.sampleCount = t2 >>> 0;
  }, __wbg_set_sample_type_ebc5fcd029513bda: function(e8, t2) {
    e8.sampleType = Ti[t2];
  }, __wbg_set_sampler_89cb4a7efcfc6005: function(e8, t2) {
    e8.sampler = t2;
  }, __wbg_set_size_f64_2f591b0654540477: function(e8, t2) {
    e8.size = t2;
  }, __wbg_set_size_f64_e844c985b8f95261: function(e8, t2) {
    e8.size = t2;
  }, __wbg_set_size_gpu_extent_3d_dict_adf57388ab1d4f18: function(e8, t2) {
    e8.size = t2;
  }, __wbg_set_storage_texture_786aea7c5773b6c1: function(e8, t2) {
    e8.storageTexture = t2;
  }, __wbg_set_texture_95f2bfdf7767e76f: function(e8, t2) {
    e8.texture = t2;
  }, __wbg_set_texture_a33be3fe02ac6264: function(e8, t2) {
    e8.texture = t2;
  }, __wbg_set_timestamp_writes_5f240bbaad97fcaf: function(e8, t2) {
    e8.timestampWrites = t2;
  }, __wbg_set_type_43e0092f16775979: function(e8, t2) {
    e8.type = xi[t2];
  }, __wbg_set_type_79cec55caf4cdb6d: function(e8, t2) {
    e8.type = yi[t2];
  }, __wbg_set_usage_1ee33d98267e787d: function(e8, t2) {
    e8.usage = t2 >>> 0;
  }, __wbg_set_usage_d53ee6f0c7aedbfa: function(e8, t2) {
    e8.usage = t2 >>> 0;
  }, __wbg_set_usage_f3e34822998d2147: function(e8, t2) {
    e8.usage = t2 >>> 0;
  }, __wbg_set_view_dimension_893e2d16561e56e8: function(e8, t2) {
    e8.viewDimension = Ei[t2];
  }, __wbg_set_view_dimension_f2c5fe4bf927c3fe: function(e8, t2) {
    e8.viewDimension = Ei[t2];
  }, __wbg_set_view_formats_427069064d8b7139: function(e8, t2, n2) {
    e8.viewFormats = D(t2, n2);
  }, __wbg_set_visibility_d8a6821789538c25: function(e8, t2) {
    e8.visibility = t2 >>> 0;
  }, __wbg_set_width_4c3a2252e0dea033: function(e8, t2) {
    e8.width = t2 >>> 0;
  }, __wbg_set_width_b20525f5f4df4eb8: function(e8, t2) {
    e8.width = t2 >>> 0;
  }, __wbg_set_width_f52a20e39808b138: function(e8, t2) {
    e8.width = t2 >>> 0;
  }, __wbg_set_x_f470b03dd54724cd: function(e8, t2) {
    e8.x = t2 >>> 0;
  }, __wbg_set_y_4c44eb40ebca5bfc: function(e8, t2) {
    e8.y = t2 >>> 0;
  }, __wbg_set_z_2e6820ef0f5821ed: function(e8, t2) {
    e8.z = t2 >>> 0;
  }, __wbg_shaderSource_108c27c8694ef4c0: function(e8, t2, n2, r2) {
    e8.shaderSource(t2, L(n2, r2));
  }, __wbg_shaderSource_82a2cbfe223a86e0: function(e8, t2, n2, r2) {
    e8.shaderSource(t2, L(n2, r2));
  }, __wbg_stack_3b0d974bbf31e44f: function(e8, t2) {
    let n2 = t2.stack, r2 = Y(n2, $.__wbindgen_malloc, $.__wbindgen_realloc), i2 = Q;
    j().setInt32(e8 + 4, i2, true), j().setInt32(e8 + 0, r2, true);
  }, __wbg_static_accessor_GLOBAL_8eb4cd83130a11a0: function() {
    let e8 = typeof global > `u` ? null : global;
    return U(e8) ? 0 : C(e8);
  }, __wbg_static_accessor_GLOBAL_THIS_1e7044f654e934db: function() {
    let e8 = typeof globalThis > `u` ? null : globalThis;
    return U(e8) ? 0 : C(e8);
  }, __wbg_static_accessor_SELF_d8b50611246a6d92: function() {
    let e8 = typeof self > `u` ? null : self;
    return U(e8) ? 0 : C(e8);
  }, __wbg_static_accessor_WINDOW_fd0bc376bf0f8b42: function() {
    let e8 = typeof window > `u` ? null : window;
    return U(e8) ? 0 : C(e8);
  }, __wbg_stencilFuncSeparate_d7b5956ce3fe1272: function(e8, t2, n2, r2, i2) {
    e8.stencilFuncSeparate(t2 >>> 0, n2 >>> 0, r2, i2 >>> 0);
  }, __wbg_stencilFuncSeparate_fd17ac8961fd8359: function(e8, t2, n2, r2, i2) {
    e8.stencilFuncSeparate(t2 >>> 0, n2 >>> 0, r2, i2 >>> 0);
  }, __wbg_stencilMaskSeparate_5f3823dfe31289be: function(e8, t2, n2) {
    e8.stencilMaskSeparate(t2 >>> 0, n2 >>> 0);
  }, __wbg_stencilMaskSeparate_d0910e6d55b4605a: function(e8, t2, n2) {
    e8.stencilMaskSeparate(t2 >>> 0, n2 >>> 0);
  }, __wbg_stencilMask_4a8c4bda850006f1: function(e8, t2) {
    e8.stencilMask(t2 >>> 0);
  }, __wbg_stencilMask_cb69051e26a265bb: function(e8, t2) {
    e8.stencilMask(t2 >>> 0);
  }, __wbg_stencilOpSeparate_3fe9feaf978f0a17: function(e8, t2, n2, r2, i2) {
    e8.stencilOpSeparate(t2 >>> 0, n2 >>> 0, r2 >>> 0, i2 >>> 0);
  }, __wbg_stencilOpSeparate_cb0bb47587f022de: function(e8, t2, n2, r2, i2) {
    e8.stencilOpSeparate(t2 >>> 0, n2 >>> 0, r2 >>> 0, i2 >>> 0);
  }, __wbg_submit_077c85cc28e36892: function(e8, t2, n2) {
    e8.submit(D(t2, n2));
  }, __wbg_texImage2D_1b8d273f15622f0e: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texImage2D_6fca8c58ea7e4c8e: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texImage2D_8c5d6403fa51874d: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texImage3D_2bba05e03e9def07: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
      e8.texImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2 >>> 0, l2 >>> 0, u2);
    }, arguments);
  }, __wbg_texImage3D_3977c422ce82cf99: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
      e8.texImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2 >>> 0, l2 >>> 0, u2);
    }, arguments);
  }, __wbg_texParameteri_1fea50207adbfd68: function(e8, t2, n2, r2) {
    e8.texParameteri(t2 >>> 0, n2 >>> 0, r2);
  }, __wbg_texParameteri_e127aa385b821d68: function(e8, t2, n2, r2) {
    e8.texParameteri(t2 >>> 0, n2 >>> 0, r2);
  }, __wbg_texStorage2D_eb27b3383d99c349: function(e8, t2, n2, r2, i2, a2) {
    e8.texStorage2D(t2 >>> 0, n2, r2 >>> 0, i2, a2);
  }, __wbg_texStorage3D_cb53309842f2c8eb: function(e8, t2, n2, r2, i2, a2, o2) {
    e8.texStorage3D(t2 >>> 0, n2, r2 >>> 0, i2, a2, o2);
  }, __wbg_texSubImage2D_0542ae723245dd04: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texSubImage2D_0721d9d910ecf097: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texSubImage2D_11c39463147c9d38: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texSubImage2D_21b4316b692aa7bc: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texSubImage2D_339324fe86d9879e: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texSubImage2D_6218009ef1e27c0e: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texSubImage2D_79b4ac26a5580960: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texSubImage2D_892cfa51f196ee93: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      e8.texSubImage2D(t2 >>> 0, n2, r2, i2, a2, o2, s2 >>> 0, c2 >>> 0, l2);
    }, arguments);
  }, __wbg_texSubImage3D_6458575ddb6df6b3: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
      e8.texSubImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2, l2 >>> 0, u2 >>> 0, d2);
    }, arguments);
  }, __wbg_texSubImage3D_747bc81ed2ed4116: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
      e8.texSubImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2, l2 >>> 0, u2 >>> 0, d2);
    }, arguments);
  }, __wbg_texSubImage3D_7a674dd9403f8be3: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
      e8.texSubImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2, l2 >>> 0, u2 >>> 0, d2);
    }, arguments);
  }, __wbg_texSubImage3D_805532d56bdd814d: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
      e8.texSubImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2, l2 >>> 0, u2 >>> 0, d2);
    }, arguments);
  }, __wbg_texSubImage3D_ad76ff2925daf174: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
      e8.texSubImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2, l2 >>> 0, u2 >>> 0, d2);
    }, arguments);
  }, __wbg_texSubImage3D_c65a616189ed3b19: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
      e8.texSubImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2, l2 >>> 0, u2 >>> 0, d2);
    }, arguments);
  }, __wbg_texSubImage3D_f99458987d5b061a: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
      e8.texSubImage3D(t2 >>> 0, n2, r2, i2, a2, o2, s2, c2, l2 >>> 0, u2 >>> 0, d2);
    }, arguments);
  }, __wbg_then_7a850dae4493f353: function(e8, t2, n2) {
    return e8.then(t2, n2);
  }, __wbg_then_b830475380919203: function(e8, t2) {
    return e8.then(t2);
  }, __wbg_unconfigure_835307f58dc68d80: function(e8) {
    e8.unconfigure();
  }, __wbg_uniform1f_6067a9c69ed38c8b: function(e8, t2, n2) {
    e8.uniform1f(t2, n2);
  }, __wbg_uniform1f_d08261cd87e412e0: function(e8, t2, n2) {
    e8.uniform1f(t2, n2);
  }, __wbg_uniform1i_25a3df9f69c2f765: function(e8, t2, n2) {
    e8.uniform1i(t2, n2);
  }, __wbg_uniform1i_89c631d199860f60: function(e8, t2, n2) {
    e8.uniform1i(t2, n2);
  }, __wbg_uniform1ui_58cbbe1a93e44a02: function(e8, t2, n2) {
    e8.uniform1ui(t2, n2 >>> 0);
  }, __wbg_uniform2fv_6a494ce09154afdb: function(e8, t2, n2, r2) {
    e8.uniform2fv(t2, T(n2, r2));
  }, __wbg_uniform2fv_f85b3b2779a6c2b9: function(e8, t2, n2, r2) {
    e8.uniform2fv(t2, T(n2, r2));
  }, __wbg_uniform2iv_5c591a2edfd26c45: function(e8, t2, n2, r2) {
    e8.uniform2iv(t2, E(n2, r2));
  }, __wbg_uniform2iv_63a2ba7206eaf2b3: function(e8, t2, n2, r2) {
    e8.uniform2iv(t2, E(n2, r2));
  }, __wbg_uniform2uiv_aaa076c2f50b5c86: function(e8, t2, n2, r2) {
    e8.uniform2uiv(t2, O(n2, r2));
  }, __wbg_uniform3fv_2e139d144894f1ec: function(e8, t2, n2, r2) {
    e8.uniform3fv(t2, T(n2, r2));
  }, __wbg_uniform3fv_dfaba6b65cfc2c2b: function(e8, t2, n2, r2) {
    e8.uniform3fv(t2, T(n2, r2));
  }, __wbg_uniform3iv_700228c611ca323d: function(e8, t2, n2, r2) {
    e8.uniform3iv(t2, E(n2, r2));
  }, __wbg_uniform3iv_f32512d7179442f8: function(e8, t2, n2, r2) {
    e8.uniform3iv(t2, E(n2, r2));
  }, __wbg_uniform3uiv_c972de1ee5eb2b48: function(e8, t2, n2, r2) {
    e8.uniform3uiv(t2, O(n2, r2));
  }, __wbg_uniform4f_b5ea01e0388c425e: function(e8, t2, n2, r2, i2, a2) {
    e8.uniform4f(t2, n2, r2, i2, a2);
  }, __wbg_uniform4f_b9880b3e743b1cf3: function(e8, t2, n2, r2, i2, a2) {
    e8.uniform4f(t2, n2, r2, i2, a2);
  }, __wbg_uniform4fv_0763a5cfb3d561c9: function(e8, t2, n2, r2) {
    e8.uniform4fv(t2, T(n2, r2));
  }, __wbg_uniform4fv_95b1afba56301916: function(e8, t2, n2, r2) {
    e8.uniform4fv(t2, T(n2, r2));
  }, __wbg_uniform4iv_1269cd3a3f01909d: function(e8, t2, n2, r2) {
    e8.uniform4iv(t2, E(n2, r2));
  }, __wbg_uniform4iv_84dc6c0b2ea09256: function(e8, t2, n2, r2) {
    e8.uniform4iv(t2, E(n2, r2));
  }, __wbg_uniform4uiv_13ca9c250b538d85: function(e8, t2, n2, r2) {
    e8.uniform4uiv(t2, O(n2, r2));
  }, __wbg_uniformBlockBinding_d97dbfc1886608c9: function(e8, t2, n2, r2) {
    e8.uniformBlockBinding(t2, n2 >>> 0, r2 >>> 0);
  }, __wbg_uniformMatrix2fv_4a95dd9315ceafce: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix2fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix2fv_554c771038fd18e7: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix2fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix2x3fv_18f2ff07b55f7458: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix2x3fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix2x4fv_2b66cdeb52233873: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix2x4fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix3fv_303d7eef53df7ed2: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix3fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix3fv_a9db97f34b3706b3: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix3fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix3x2fv_67c65614f0e122e8: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix3x2fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix3x4fv_e3bd46b1bf5227ed: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix3x4fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix4fv_db6f9ad4f00e3b76: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix4fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix4fv_e411faf4de6021c5: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix4fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix4x2fv_c59133281828fe8e: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix4x2fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_uniformMatrix4x3fv_dc85828b88505234: function(e8, t2, n2, r2, i2) {
    e8.uniformMatrix4x3fv(t2, n2 !== 0, T(r2, i2));
  }, __wbg_unmap_6a96b14c9ef5f7f5: function(e8) {
    e8.unmap();
  }, __wbg_useProgram_7019ac9ef4bdbe96: function(e8, t2) {
    e8.useProgram(t2);
  }, __wbg_useProgram_fcab4319331e0094: function(e8, t2) {
    e8.useProgram(t2);
  }, __wbg_valueOf_24fc886d85bf55b5: function(e8) {
    return e8.valueOf();
  }, __wbg_value_c227f843d21da141: function(e8) {
    return e8.value;
  }, __wbg_vertexAttribDivisorANGLE_5bebd4490e25d0f4: function(e8, t2, n2) {
    e8.vertexAttribDivisorANGLE(t2 >>> 0, n2 >>> 0);
  }, __wbg_vertexAttribDivisor_e2a9ba8c397af61b: function(e8, t2, n2) {
    e8.vertexAttribDivisor(t2 >>> 0, n2 >>> 0);
  }, __wbg_vertexAttribIPointer_660e209bed7575ab: function(e8, t2, n2, r2, i2, a2) {
    e8.vertexAttribIPointer(t2 >>> 0, n2, r2 >>> 0, i2, a2);
  }, __wbg_vertexAttribPointer_b6db7a62b9bda090: function(e8, t2, n2, r2, i2, a2, o2) {
    e8.vertexAttribPointer(t2 >>> 0, n2, r2 >>> 0, i2 !== 0, a2, o2);
  }, __wbg_vertexAttribPointer_ed019b681b1aaacf: function(e8, t2, n2, r2, i2, a2, o2) {
    e8.vertexAttribPointer(t2 >>> 0, n2, r2 >>> 0, i2 !== 0, a2, o2);
  }, __wbg_viewport_704a6159fb0395cb: function(e8, t2, n2, r2, i2) {
    e8.viewport(t2, n2, r2, i2);
  }, __wbg_viewport_f9d3214251b38c39: function(e8, t2, n2, r2, i2) {
    e8.viewport(t2, n2, r2, i2);
  }, __wbg_warn_d3544c7814fab534: function(e8) {
    console.warn(e8);
  }, __wbg_writeBuffer_f4bb3f54adfe1330: function() {
    return H(function(e8, t2, n2, r2, i2, a2, o2) {
      e8.writeBuffer(t2, n2, k(r2, i2), a2, o2);
    }, arguments);
  }, __wbg_writeTexture_30e592e8c061c3d9: function() {
    return H(function(e8, t2, n2, r2, i2, a2) {
      e8.writeTexture(t2, k(n2, r2), i2, a2);
    }, arguments);
  }, __wbindgen_generic_0000000000000001: function(e8, t2) {
    return W(e8, t2, pi);
  }, __wbindgen_generic_0000000000000002: function(e8, t2) {
    return W(e8, t2, mi);
  }, __wbindgen_generic_0000000000000003: function(e8, t2) {
    return W(e8, t2, fi);
  }, __wbindgen_generic_0000000000000004: function(e8, t2) {
    return W(e8, t2, hi);
  }, __wbindgen_generic_0000000000000005: function(e8, t2) {
    return W(e8, t2, gi);
  }, __wbindgen_generic_0000000000000006: function(e8) {
    return e8;
  }, __wbindgen_generic_0000000000000007: function(e8) {
    return e8;
  }, __wbindgen_generic_0000000000000008: function(e8, t2) {
    return T(e8, t2);
  }, __wbindgen_generic_0000000000000009: function(e8, t2) {
    return Ui(e8, t2);
  }, __wbindgen_generic_000000000000000a: function(e8, t2) {
    return E(e8, t2);
  }, __wbindgen_generic_000000000000000b: function(e8, t2) {
    return Wi(e8, t2);
  }, __wbindgen_generic_000000000000000c: function(e8, t2) {
    return Ki(e8, t2);
  }, __wbindgen_generic_000000000000000d: function(e8, t2) {
    return O(e8, t2);
  }, __wbindgen_generic_000000000000000e: function(e8, t2) {
    return k(e8, t2);
  }, __wbindgen_generic_000000000000000f: function(e8, t2) {
    return L(e8, t2);
  }, __wbindgen_generic_0000000000000010: function(e8) {
    return BigInt.asUintN(64, e8);
  }, __wbindgen_generic_0000000000000011: function(e8, t2) {
    var n2 = T(e8, t2).slice();
    return $.__wbindgen_free(e8, t2 * 4, 4), n2;
  }, __wbindgen_generic_0000000000000012: function(e8, t2) {
    var n2 = k(e8, t2).slice();
    return $.__wbindgen_free(e8, t2 * 1, 1), n2;
  }, __wbindgen_init_externref_table: function() {
    let e8 = $.__wbindgen_externrefs, t2 = e8.grow(4);
    e8.set(0, void 0), e8.set(t2 + 0, void 0), e8.set(t2 + 1, null), e8.set(t2 + 2, true), e8.set(t2 + 3, false);
  } } };
}
function fi(e8, t2, n2) {
  $.wasm_bindgen_847cf9dc19a95d2a___convert__closures_____invoke___wgpu_a24c7b14400eaeda___backend__webgpu__webgpu_sys__gen_GpuDeviceLostInfo__GpuDeviceLostInfo______true_(e8, t2, n2);
}
function pi(e8, t2, n2) {
  let r2 = $.wasm_bindgen_847cf9dc19a95d2a___convert__closures_____invoke___wasm_bindgen_847cf9dc19a95d2a___JsValue__core_f0fd674eaa06beef___result__Result_____wasm_bindgen_847cf9dc19a95d2a___JsError___true_(e8, t2, n2);
  if (r2[1]) throw X(r2[0]);
}
function mi(e8, t2, n2) {
  let r2 = $.wasm_bindgen_847cf9dc19a95d2a___convert__closures_____invoke___wasm_bindgen_847cf9dc19a95d2a___sys__JsNullable_wgpu_a24c7b14400eaeda___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_f0fd674eaa06beef___result__Result_____wasm_bindgen_847cf9dc19a95d2a___JsError___true_(e8, t2, n2);
  if (r2[1]) throw X(r2[0]);
}
function hi(e8, t2, n2) {
  let r2 = $.wasm_bindgen_847cf9dc19a95d2a___convert__closures_____invoke___wasm_bindgen_847cf9dc19a95d2a___sys__JsNullable_wgpu_a24c7b14400eaeda___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_f0fd674eaa06beef___result__Result_____wasm_bindgen_847cf9dc19a95d2a___JsError___true__460(e8, t2, n2);
  if (r2[1]) throw X(r2[0]);
}
function gi(e8, t2, n2) {
  let r2 = $.wasm_bindgen_847cf9dc19a95d2a___convert__closures_____invoke___wasm_bindgen_847cf9dc19a95d2a___sys__JsNullable_wgpu_a24c7b14400eaeda___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_f0fd674eaa06beef___result__Result_____wasm_bindgen_847cf9dc19a95d2a___JsError___true__461(e8, t2, n2);
  if (r2[1]) throw X(r2[0]);
}
function _i(e8, t2, n2, r2) {
  $.wasm_bindgen_847cf9dc19a95d2a___convert__closures_____invoke___js_sys_fd485cc146ff22c1___Function_fn_wasm_bindgen_847cf9dc19a95d2a___JsValue_____wasm_bindgen_847cf9dc19a95d2a___sys__Undefined___js_sys_fd485cc146ff22c1___Function_fn_wasm_bindgen_847cf9dc19a95d2a___JsValue_____wasm_bindgen_847cf9dc19a95d2a___sys__Undefined_______true_(e8, t2, n2, r2);
}
var vi = [`auto`], yi = [`uniform`, `storage`, `read-only-storage`], bi = [`low-power`, `high-performance`], xi = [`filtering`, `non-filtering`, `comparison`], Si = [`write-only`, `read-only`, `read-write`], Ci = [`all`, `stencil-only`, `depth-only`], wi = [`1d`, `2d`, `3d`], S = `r8unorm.r8snorm.r8uint.r8sint.r16unorm.r16snorm.r16uint.r16sint.r16float.rg8unorm.rg8snorm.rg8uint.rg8sint.r32uint.r32sint.r32float.rg16unorm.rg16snorm.rg16uint.rg16sint.rg16float.rgba8unorm.rgba8unorm-srgb.rgba8snorm.rgba8uint.rgba8sint.bgra8unorm.bgra8unorm-srgb.rgb9e5ufloat.rgb10a2uint.rgb10a2unorm.rg11b10ufloat.rg32uint.rg32sint.rg32float.rgba16unorm.rgba16snorm.rgba16uint.rgba16sint.rgba16float.rgba32uint.rgba32sint.rgba32float.stencil8.depth16unorm.depth24plus.depth24plus-stencil8.depth32float.depth32float-stencil8.bc1-rgba-unorm.bc1-rgba-unorm-srgb.bc2-rgba-unorm.bc2-rgba-unorm-srgb.bc3-rgba-unorm.bc3-rgba-unorm-srgb.bc4-r-unorm.bc4-r-snorm.bc5-rg-unorm.bc5-rg-snorm.bc6h-rgb-ufloat.bc6h-rgb-float.bc7-rgba-unorm.bc7-rgba-unorm-srgb.etc2-rgb8unorm.etc2-rgb8unorm-srgb.etc2-rgb8a1unorm.etc2-rgb8a1unorm-srgb.etc2-rgba8unorm.etc2-rgba8unorm-srgb.eac-r11unorm.eac-r11snorm.eac-rg11unorm.eac-rg11snorm.astc-4x4-unorm.astc-4x4-unorm-srgb.astc-5x4-unorm.astc-5x4-unorm-srgb.astc-5x5-unorm.astc-5x5-unorm-srgb.astc-6x5-unorm.astc-6x5-unorm-srgb.astc-6x6-unorm.astc-6x6-unorm-srgb.astc-8x5-unorm.astc-8x5-unorm-srgb.astc-8x6-unorm.astc-8x6-unorm-srgb.astc-8x8-unorm.astc-8x8-unorm-srgb.astc-10x5-unorm.astc-10x5-unorm-srgb.astc-10x6-unorm.astc-10x6-unorm-srgb.astc-10x8-unorm.astc-10x8-unorm-srgb.astc-10x10-unorm.astc-10x10-unorm-srgb.astc-12x10-unorm.astc-12x10-unorm-srgb.astc-12x12-unorm.astc-12x12-unorm-srgb`.split(`.`), Ti = [`float`, `unfilterable-float`, `depth`, `sint`, `uint`], Ei = [`1d`, `2d`, `2d-array`, `cube`, `cube-array`, `3d`], Di = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_circuitsim_free(e8, 1)), Oi = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_incrementalevaluator_free(e8, 1)), ki = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_mdsim_free(e8, 1)), Ai = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_physicssim_free(e8, 1)), ji = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_raytracer_free(e8, 1)), Mi = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_sliceresult_free(e8, 1)), Ni = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_slicersettings_free(e8, 1)), Pi = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_solid_free(e8, 1)), Fi = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_wasmannotationlayer_free(e8, 1)), Ii = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_wasmcamsettings_free(e8, 1)), Li = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_wasmdocumentengine_free(e8, 1)), Ri = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_wasmkeybindings_free(e8, 1)), zi = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbg_wasmsketchsession_free(e8, 1));
function C(e8) {
  let t2 = $.__externref_table_alloc();
  return $.__wbindgen_externrefs.set(t2, e8), t2;
}
function w(e8, t2) {
  if (!(e8 instanceof t2)) throw Error(`expected instance of ${t2.name}`);
}
var Bi = typeof FinalizationRegistry > `u` ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e8) => $.__wbindgen_destroy_closure(e8.a, e8.b));
function Vi(e8) {
  let t2 = typeof e8;
  if (t2 == `number` || t2 == `boolean` || e8 == null) return `${e8}`;
  if (t2 == `string`) return `"${e8}"`;
  if (t2 == `symbol`) {
    let t3 = e8.description;
    return t3 == null ? `Symbol` : `Symbol(${t3})`;
  }
  if (t2 == `function`) {
    let t3 = e8.name;
    return typeof t3 == `string` && t3.length > 0 ? `Function(${t3})` : `Function`;
  }
  if (Array.isArray(e8)) {
    let t3 = e8.length, n3 = `[`;
    t3 > 0 && (n3 += Vi(e8[0]));
    for (let r3 = 1; r3 < t3; r3++) n3 += `, ` + Vi(e8[r3]);
    return n3 += `]`, n3;
  }
  let n2 = /\[object ([^\]]+)\]/.exec(toString.call(e8)), r2;
  if (n2 && n2.length > 1) r2 = n2[1];
  else return toString.call(e8);
  if (r2 == `Object`) try {
    return `Object(` + JSON.stringify(e8) + `)`;
  } catch {
    return `Object`;
  }
  return e8 instanceof Error ? `${e8.name}: ${e8.message}
${e8.stack}` : r2;
}
function T(e8, t2) {
  return e8 >>>= 0, qi().subarray(e8 / 4, e8 / 4 + t2);
}
function Hi(e8, t2) {
  return e8 >>>= 0, Ji().subarray(e8 / 8, e8 / 8 + t2);
}
function Ui(e8, t2) {
  return e8 >>>= 0, Yi().subarray(e8 / 2, e8 / 2 + t2);
}
function E(e8, t2) {
  return e8 >>>= 0, Xi().subarray(e8 / 4, e8 / 4 + t2);
}
function Wi(e8, t2) {
  return e8 >>>= 0, Zi().subarray(e8 / 1, e8 / 1 + t2);
}
function Gi(e8, t2) {
  e8 >>>= 0;
  let n2 = j(), r2 = [];
  for (let i2 = e8; i2 < e8 + 4 * t2; i2 += 4) r2.push($.__wbindgen_externrefs.get(n2.getUint32(i2, true)));
  return $.__externref_drop_slice(e8, t2), r2;
}
function D(e8, t2) {
  e8 >>>= 0;
  let n2 = j(), r2 = [];
  for (let i2 = e8; i2 < e8 + 4 * t2; i2 += 4) r2.push($.__wbindgen_externrefs.get(n2.getUint32(i2, true)));
  return r2;
}
function Ki(e8, t2) {
  return e8 >>>= 0, Qi().subarray(e8 / 2, e8 / 2 + t2);
}
function O(e8, t2) {
  return e8 >>>= 0, $i().subarray(e8 / 4, e8 / 4 + t2);
}
function k(e8, t2) {
  return e8 >>>= 0, V().subarray(e8 / 1, e8 / 1 + t2);
}
var A = null;
function j() {
  return (A === null || A.buffer.detached === true || A.buffer.detached === void 0 && A.buffer !== $.memory.buffer) && (A = new DataView($.memory.buffer)), A;
}
var M = null;
function qi() {
  return (M === null || M.byteLength === 0) && (M = new Float32Array($.memory.buffer)), M;
}
var N = null;
function Ji() {
  return (N === null || N.byteLength === 0) && (N = new Float64Array($.memory.buffer)), N;
}
var P = null;
function Yi() {
  return (P === null || P.byteLength === 0) && (P = new Int16Array($.memory.buffer)), P;
}
var F = null;
function Xi() {
  return (F === null || F.byteLength === 0) && (F = new Int32Array($.memory.buffer)), F;
}
var I = null;
function Zi() {
  return (I === null || I.byteLength === 0) && (I = new Int8Array($.memory.buffer)), I;
}
function L(e8, t2) {
  return ia(e8 >>> 0, t2);
}
var R = null;
function Qi() {
  return (R === null || R.byteLength === 0) && (R = new Uint16Array($.memory.buffer)), R;
}
var z = null;
function $i() {
  return (z === null || z.byteLength === 0) && (z = new Uint32Array($.memory.buffer)), z;
}
var B = null;
function V() {
  return (B === null || B.byteLength === 0) && (B = new Uint8Array($.memory.buffer)), B;
}
function H(e8, t2) {
  try {
    return e8.apply(this, t2);
  } catch (e9) {
    let t3 = C(e9);
    $.__wbindgen_exn_store(t3);
  }
}
function U(e8) {
  return e8 == null;
}
function W(e8, t2, n2) {
  let r2 = { a: e8, b: t2, cnt: 1 }, i2 = (...e9) => {
    r2.cnt++;
    let t3 = r2.a;
    r2.a = 0;
    try {
      return n2(t3, r2.b, ...e9);
    } finally {
      r2.a = t3, i2._wbg_cb_unref();
    }
  };
  return i2._wbg_cb_unref = () => {
    --r2.cnt === 0 && ($.__wbindgen_destroy_closure(r2.a, r2.b), r2.a = 0, Bi.unregister(r2));
  }, Bi.register(i2, r2, r2), i2;
}
function G(e8, t2) {
  let n2 = t2(e8.length * 4, 4) >>> 0;
  return $i().set(e8, n2 / 4), Q = e8.length, n2;
}
function K(e8, t2) {
  let n2 = t2(e8.length * 1, 1) >>> 0;
  return V().set(e8, n2 / 1), Q = e8.length, n2;
}
function q(e8, t2) {
  let n2 = t2(e8.length * 4, 4) >>> 0;
  return qi().set(e8, n2 / 4), Q = e8.length, n2;
}
function J(e8, t2) {
  let n2 = t2(e8.length * 8, 8) >>> 0;
  return Ji().set(e8, n2 / 8), Q = e8.length, n2;
}
function ea(e8, t2) {
  let n2 = t2(e8.length * 4, 4) >>> 0;
  for (let t3 = 0; t3 < e8.length; t3++) {
    let r2 = C(e8[t3]);
    j().setUint32(n2 + 4 * t3, r2, true);
  }
  return Q = e8.length, n2;
}
function Y(e8, t2, n2) {
  if (n2 === void 0) {
    let n3 = Z.encode(e8), r3 = t2(n3.length, 1) >>> 0;
    return V().subarray(r3, r3 + n3.length).set(n3), Q = n3.length, r3;
  }
  let r2 = e8.length, i2 = t2(r2, 1) >>> 0, a2 = V(), o2 = 0;
  for (; o2 < r2; o2++) {
    let t3 = e8.charCodeAt(o2);
    if (t3 > 127) break;
    a2[i2 + o2] = t3;
  }
  if (o2 !== r2) {
    o2 !== 0 && (e8 = e8.slice(o2)), i2 = n2(i2, r2, r2 = o2 + e8.length * 3, 1) >>> 0;
    let t3 = V().subarray(i2 + o2, i2 + r2), a3 = Z.encodeInto(e8, t3);
    o2 += a3.written, i2 = n2(i2, r2, o2, 1) >>> 0;
  }
  return Q = o2, i2;
}
function X(e8) {
  let t2 = $.__wbindgen_externrefs.get(e8);
  return $.__externref_table_dealloc(e8), t2;
}
var ta = new TextDecoder(`utf-8`, { ignoreBOM: true, fatal: true });
ta.decode();
var na = 2146435072, ra = 0;
function ia(e8, t2) {
  return ra += t2, ra >= na && (ta = new TextDecoder(`utf-8`, { ignoreBOM: true, fatal: true }), ta.decode(), ra = t2), ta.decode(V().subarray(e8, e8 + t2));
}
var Z = new TextEncoder();
`encodeInto` in Z || (Z.encodeInto = function(e8, t2) {
  let n2 = Z.encode(e8);
  return t2.set(n2), { read: e8.length, written: n2.length };
});
var Q = 0, aa, $;
function oa(e8, t2) {
  return $ = e8.exports, aa = t2, A = null, M = null, N = null, P = null, F = null, I = null, R = null, z = null, B = null, $.__wbindgen_start(), $;
}
async function sa(e8, t2) {
  if (typeof Response == `function` && e8 instanceof Response) {
    if (!e8.ok) throw Error(`failed to fetch Wasm: ${e8.status} ${e8.statusText} fetching '${e8.url}'`);
    if (typeof WebAssembly.instantiateStreaming == `function`) try {
      return await WebAssembly.instantiateStreaming(e8, t2);
    } catch (t3) {
      if (n2(e8.type) && e8.headers.get(`Content-Type`) !== `application/wasm`) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t3);
      else throw t3;
    }
    let r2 = await e8.arrayBuffer();
    return await WebAssembly.instantiate(r2, t2);
  }
  {
    let n3 = await WebAssembly.instantiate(e8, t2);
    return n3 instanceof WebAssembly.Instance ? { instance: n3, module: e8 } : n3;
  }
  function n2(e9) {
    switch (e9) {
      case `basic`:
      case `cors`:
      case `default`:
        return true;
    }
    return false;
  }
}
function ca(e8) {
  if ($ !== void 0) return $;
  e8 !== void 0 && (Object.getPrototypeOf(e8) === Object.prototype ? { module: e8 } = e8 : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  let t2 = di();
  return e8 instanceof WebAssembly.Module || (e8 = new WebAssembly.Module(e8)), oa(new WebAssembly.Instance(e8, t2), e8);
}
async function la(e8) {
  if ($ !== void 0) return $;
  e8 !== void 0 && (Object.getPrototypeOf(e8) === Object.prototype ? { module_or_path: e8 } = e8 : console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)), e8 === void 0 && (e8 = new URL(`/vcad/v2026.11.12-7ae7e5c/assets/vcad_kernel_wasm_bg-B8WjVLwO.wasm`, `` + import.meta.url));
  let t2 = di();
  (typeof e8 == `string` || typeof Request == `function` && e8 instanceof Request || typeof URL == `function` && e8 instanceof URL) && (e8 = fetch(e8));
  let { instance: n2, module: r2 } = await sa(await e8, t2);
  return oa(n2, r2);
}
function ua() {
  $ = void 0, aa = void 0;
}
export {
  e as CircuitSim,
  t as IncrementalEvaluator,
  n as MdSim,
  r as PhysicsSim,
  i as RayTracer,
  a as SliceResult,
  o as SlicerSettings,
  s as Solid,
  c as WasmAnnotationLayer,
  l as WasmCamSettings,
  u as WasmDocumentEngine,
  d as WasmKeybindings,
  f as WasmSketchSession,
  ua as __vcad_reset_wasm,
  p as analyzeForPrinting,
  m as analyzeStaticsBox,
  h as analyzeStaticsMesh,
  g as antennaAnalyze,
  _ as atoms_build_receipt,
  v as atoms_homogenize,
  y as atoms_inspect,
  ee as atoms_minimize,
  te as atoms_parse_xyz,
  ne as atoms_write_xyz,
  b as buildCalibrationReportJson,
  re as buildGlbBytes,
  x as buildPart,
  ie as buildSheetMetalDocument,
  ae as buildStlBytes,
  oe as build_chat_system_prompt,
  se as calibrationDefaultTolerance,
  ce as calibrationFingerprintDocument,
  le as camDropCutter,
  ue as camExportGcode,
  de as camExportLinuxCnc,
  fe as camGenerateCircularPocket,
  pe as camGenerateContour,
  me as camGenerateFace,
  he as camGeneratePocket,
  ge as camGenerateRoughing3d,
  _e as camGetDefaultTools,
  ve as camToolpathStats,
  ye as checkDesignConstraints,
  be as checkPrintability,
  xe as checkSheetMetal,
  Se as circuitAcResponse,
  Ce as circuitDcOperatingPoint,
  we as circuitFromSchematic,
  Te as circuitSensitivities,
  Ee as circuitTransient,
  De as circuitTune,
  Oe as computeCreasedNormalsGpu,
  ke as computeMeshProperties,
  Ae as computeMeshVolume,
  je as costSheetMetal,
  Me as createDetailView,
  Ne as decimateMeshGpu,
  la as default,
  Pe as deriveParts,
  Fe as digitizeSketch,
  Ie as digitizeText,
  Le as documentDiff,
  Re as documentDiffApply,
  ze as documentDiffHuman,
  Be as documentMerge,
  Ve as documentParameterGradient,
  He as documentSensitivities,
  Ue as documentToLoon,
  We as documentToLoonChecked,
  Ge as documentToStepBuffer,
  Ke as drawingSheetToPdf,
  qe as ecadAirgapFluxDensity,
  Je as ecadAirgapSolve,
  Ye as ecadBuildReceipt,
  Xe as ecadBuiltinSymbols,
  Ze as ecadCheckDrc,
  Qe as ecadCheckDrcInRegion,
  $e as ecadCheckErc,
  et as ecadComponentMeshes,
  tt as ecadComputeRatsnest,
  nt as ecadCritiqueRoute,
  rt as ecadDfmCheck,
  it as ecadDfmDefaultPack,
  at as ecadEvaluateMotor,
  ot as ecadExportFab,
  st as ecadFabPrep,
  ct as ecadFillZones,
  lt as ecadFindAlternatives,
  ut as ecadFootprintForName,
  dt as ecadGenerateNetlist,
  ft as ecadGetSymbol,
  pt as ecadJellybeanManifest,
  mt as ecadLayerZ,
  ht as ecadLengthMatch,
  gt as ecadNetContinuity,
  _t as ecadNetForWire,
  vt as ecadPartsManifest,
  yt as ecadPcbPreviewMeshes,
  bt as ecadResolveFootprint,
  xt as ecadResolvePart,
  St as ecadResolvePartDef,
  Ct as ecadRouteAll,
  wt as ecadRouteDiffPair,
  Tt as ecadRouteNet,
  Et as ecadRouteNetMaze,
  Dt as ecadRouteNetShove,
  Ot as ecadSearchParts,
  kt as ecadSnapToGridOrPin,
  At as ecadVerifyReceipt,
  jt as ecadVerifySubstitution,
  Mt as emSimulate,
  Nt as embroideryDesignToMesh,
  Pt as enclosure_component_extents,
  Ft as enclosure_connectors,
  It as enclosure_derive_board,
  Lt as enclosure_features,
  Rt as enclosure_fit,
  zt as enclosure_mounting_holes,
  Bt as enclosure_outline_aabb,
  Vt as enclosure_to_world,
  Ht as estimatePrintCost,
  Ut as estimate_cost_for_process,
  Wt as eulerXyzDegToQuat,
  Gt as evalLoonDocument,
  Kt as evalVcadSource,
  qt as evalVcadSourceParametric,
  Jt as evalVcadSourceWithModules,
  Yt as evaluateDocument,
  Xt as evaluateSheetMetalChain,
  Zt as evaluateVCode,
  Qt as exportKicadPcb,
  $t as exportKicadProject,
  en as exportKicadSch,
  tn as exportProjectedViewToDxf,
  nn as exprEvalAst,
  rn as exprEvaluate,
  an as exprParse,
  on as feaAnalyzeMesh,
  sn as feaCheckBeam,
  cn as flattenSolidToSheetMetal,
  ln as generate3mf,
  un as generate3mfWithGcode,
  dn as generateGcode,
  fn as getCompiledModule,
  pn as getPartsManifest,
  mn as getSheetMetalBendTable,
  hn as getSheetMetalMaterials,
  gn as getSheetMetalShopCatalog,
  _n as getSlicerPrinterProfiles,
  vn as get_anthropic_tools_json,
  yn as get_default_dfm_pack,
  bn as get_kernel_version,
  xn as get_tool_schemas,
  Sn as importStepBuffer,
  Cn as importStepBufferWithReport,
  wn as importStepMeshDocument,
  Tn as importUrdfBuffer,
  En as importUrdfBufferWithOptions,
  Dn as init,
  On as initGpu,
  ca as initSync,
  kn as inlineMeshImports,
  An as inspectDocumentFaces,
  jn as isCamAvailable,
  Mn as isEcadAvailable,
  Nn as isEmbroideryAvailable,
  Pn as isGpuAvailable,
  Fn as isPhysicsAvailable,
  In as isSlicerAvailable,
  Ln as latticeGaugeSimulate,
  Rn as mesh_clearance,
  zn as nestSheetMetalParts,
  Bn as nestedSheetMetalDxf,
  Vn as neutronicsSimulate,
  Hn as noteToHz,
  Un as offsetSectionMesh,
  Wn as op_chamfer,
  Gn as op_circular_pattern,
  Kn as op_fillet,
  qn as op_linear_pattern,
  Jn as op_loft,
  Yn as op_revolve,
  Xn as op_shell,
  Zn as op_sweep_helix,
  Qn as op_sweep_line,
  $n as parseAltiumAsciiPcb,
  er as parseAltiumPcbDoc,
  tr as parseAltiumPcbLib,
  nr as parseEagleBrd,
  rr as parseKicadPcb,
  ir as parseVCode,
  ar as parseVcadFile,
  or as particleOptimize,
  sr as particleSimulate,
  cr as photonicsSimulate,
  lr as plan_chat_tool,
  ur as processGeometryGpu,
  dr as projectMesh,
  fr as readEmbroideryDst,
  pr as readEmbroideryPes,
  mr as recommendPrintSettings,
  hr as registerStepSource,
  gr as renderBakeMesh,
  _r as renderBomTable,
  vr as renderTitleBlock,
  yr as render_pcb_svg,
  br as render_pcb_svg_opts,
  xr as render_svg,
  Sr as render_svg_annotated,
  Cr as render_svg_camera,
  wr as render_svg_camera_opts,
  Tr as render_svg_view,
  Er as render_svg_view_highlight,
  Dr as render_svg_view_section,
  Or as resolveDocumentJson,
  kr as resolveParametersJson,
  Ar as sample_timeline_sequence,
  jr as sample_timeline_track,
  Mr as sectionMesh,
  Nr as sheetMetalFoldedStep,
  Pr as sheetMetalSequence,
  Fr as simulateFlow,
  Ir as simulateStrikeKernel,
  Lr as sketchCircleSegments,
  Rr as sketchHitTest,
  zr as sketchPlaneBasis,
  Br as sketchPlaneIntersectRay,
  Vr as sketchRectangleSegments,
  Hr as sketchSnap,
  Ur as sketchToWorld,
  Wr as sketchWorldToSketch,
  Gr as sliceMesh,
  Kr as sliceMeshWithProgress,
  qr as sliceSolid,
  Jr as solveDesignConstraints,
  Yr as solveForwardKinematics,
  Xr as solveSketchSegments,
  Zr as stepImportDocument,
  Qr as stepSourceRegistered,
  $r as textBounds,
  ei as thermalSolve,
  ti as thermalSolveTransient,
  ni as toVCode,
  ri as toleranceAnalyze,
  ii as topologyOptimizeBox,
  ai as topologyOptimizeMesh,
  oi as transformMeshBuffers,
  si as unregisterStepSource,
  ci as urdfCommentedFloatingJoint,
  li as writeEmbroideryDst,
  ui as writeEmbroideryPes
};
