(async ()=>{
    function e() {
        return null;
    }
    var t = class extends Error {
        offset;
        constructor(e, t){
            super(`parse error at offset ${t}: ${e}`), this.name = `ParseError`, this.offset = t;
        }
    }, n = class extends Error {
        constructor(e){
            super(e), this.name = `EvalError`;
        }
    };
    const r = /^parse error at offset (\d+): (.*)$/s;
    function i(e) {
        let i = e instanceof Error ? e.message : String(e), a = r.exec(i);
        return a ? new t(a[2], Number(a[1])) : new n(i);
    }
    function a(t) {
        let n = e();
        if (!n) throw Error(`${t}: kernel WASM is not initialized — await getKernelWasm() (or Engine.init()) before using expression APIs`);
        if (typeof n[t] != `function`) throw Error(`${t} is not exported by this kernel WASM build — rebuild packages/kernel-wasm`);
        return n;
    }
    function o(e) {
        let t = !!e.parameters && Object.keys(e.parameters).length > 0, n = !!e.bindings && Object.keys(e.bindings).length > 0;
        if (!t && !n) return {
            doc: e,
            env: {}
        };
        try {
            let t = a(`resolveDocumentJson`).resolveDocumentJson(JSON.stringify(e));
            return JSON.parse(t);
        } catch (e) {
            throw i(e);
        }
    }
    function s(t) {
        let n = e();
        if (!n?.solveForwardKinematics) return new Map;
        try {
            let e = n.solveForwardKinematics(JSON.stringify(t));
            return e instanceof Map ? e : new Map(Object.entries(e));
        } catch (e) {
            return console.warn(`[ENGINE] WASM solveForwardKinematics failed:`, e), new Map;
        }
    }
    function c() {
        return {
            translate: {
                x: 0,
                y: 0,
                z: 0
            },
            rotate: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: {
                x: 1,
                y: 1,
                z: 1
            }
        };
    }
    function l(e) {
        return e.translate.x === 0 && e.translate.y === 0 && e.translate.z === 0 && e.rotate.x === 0 && e.rotate.y === 0 && e.rotate.z === 0 && e.scale.x === 1 && e.scale.y === 1 && e.scale.z === 1;
    }
    function u(e, t, n) {
        let r = c(), i = e;
        for(;;){
            let e = t[String(i)];
            if (!e) return null;
            let a = n(e.op);
            if (a !== null) return {
                value: a,
                node: i,
                transform: r
            };
            let o = e.op;
            if (o.type === `Translate`) r.translate = o.offset, i = o.child;
            else if (o.type === `Rotate`) r.rotate = o.angles, i = o.child;
            else if (o.type === `Scale`) r.scale = o.factor, i = o.child;
            else return null;
        }
    }
    function d(e) {
        return e.type === `SheetMetalBaseFlangeRect` || e.type === `SheetMetalBaseFlangePolygon` || e.type === `SheetMetalEdgeFlange` || e.type === `SheetMetalHem` || e.type === `SheetMetalJog` || e.type === `SheetMetalBendRelief`;
    }
    function f(e) {
        return !e || e.length === 0 ? {} : {
            engravings: e.map((e)=>e.type === `Polyline` ? {
                    type: `Polyline`,
                    points: e.points.map((e)=>[
                            e.x,
                            e.y
                        ])
                } : {
                    type: `Text`,
                    text: e.text,
                    x: e.x,
                    y: e.y,
                    height: e.height,
                    angle: e.angle
                })
        };
    }
    function p(e, t) {
        let n = t[String(e)];
        if (!n || !d(n.op)) return null;
        let r = [], i = null, a = n;
        for(; a;){
            let e = a.op;
            if (e.type === `SheetMetalBaseFlangeRect`) {
                r.push({
                    type: `BaseFlangeRect`,
                    width: e.width,
                    depth: e.depth,
                    thickness: e.thickness,
                    material: e.material,
                    ...e.shop_profile === void 0 ? {} : {
                        shopProfile: e.shop_profile
                    },
                    ...f(e.engravings)
                }), i = e.material;
                break;
            }
            if (e.type === `SheetMetalBaseFlangePolygon`) {
                r.push({
                    type: `BaseFlangePolygon`,
                    outline: e.outline.map((e)=>[
                            e.x,
                            e.y
                        ]),
                    holes: e.holes?.map((e)=>e.map((e)=>[
                                e.x,
                                e.y
                            ])),
                    thickness: e.thickness,
                    material: e.material,
                    ...e.shop_profile === void 0 ? {} : {
                        shopProfile: e.shop_profile
                    },
                    ...f(e.engravings)
                }), i = e.material;
                break;
            }
            if (e.type === `SheetMetalEdgeFlange`) r.push({
                type: `EdgeFlange`,
                panelId: e.panel_id,
                edgeIndex: e.edge_index,
                length: e.length,
                angle: e.angle,
                ...e.radius === void 0 ? {} : {
                    radius: e.radius
                },
                direction: e.direction,
                manualK: e.manual_k
            }), a = t[String(e.parent)];
            else if (e.type === `SheetMetalHem`) r.push({
                type: `Hem`,
                panelId: e.panel_id,
                edgeIndex: e.edge_index,
                kind: e.kind ?? `Closed`,
                length: e.length,
                gap: e.gap ?? 0,
                direction: e.direction
            }), a = t[String(e.parent)];
            else if (e.type === `SheetMetalJog`) r.push({
                type: `Jog`,
                panelId: e.panel_id,
                edgeIndex: e.edge_index,
                offset: e.offset,
                length: e.length,
                ...e.radius === void 0 ? {} : {
                    radius: e.radius
                },
                direction: e.direction
            }), a = t[String(e.parent)];
            else if (e.type === `SheetMetalBendRelief`) r.push({
                type: `BendRelief`,
                ...e.width === void 0 ? {} : {
                    width: e.width
                },
                ...e.depth === void 0 ? {} : {
                    depth: e.depth
                }
            }), a = t[String(e.parent)];
            else return null;
        }
        return i === null ? null : r.reverse();
    }
    function m(e, t) {
        let n = u(e, t, (e)=>d(e) ? e : null);
        return n ? {
            root: n.node,
            transform: n.transform
        } : null;
    }
    function h(e, t) {
        if (!t.evaluateSheetMetalChain) throw Error(`kernel.evaluateSheetMetalChain not available — rebuild @vcad/kernel-wasm`);
        let n = t.evaluateSheetMetalChain(JSON.stringify(e)), r = JSON.parse(n);
        if (r.error) throw Error(`sheet-metal eval: ${r.error}`);
        return {
            mesh: {
                positions: new Float32Array(r.mesh.positions),
                indices: new Uint32Array(r.mesh.indices),
                normals: r.mesh.normals.length > 0 ? new Float32Array(r.mesh.normals) : void 0
            },
            sheetMetal: {
                flatPattern: r.flat_pattern,
                model: r.model,
                dxf: r.dxf,
                violations: r.violations
            }
        };
    }
    function g(e) {
        return {
            positions: new Float32Array(e.positions),
            indices: new Uint32Array(e.indices),
            normals: e.normals ? new Float32Array(e.normals) : void 0,
            faceKinds: e.faceKinds ? new Uint8Array(e.faceKinds) : void 0
        };
    }
    function _(e, t, n = {}) {
        if (e = o(e).doc, e = j(e, t), !t.evaluateDocument) throw Error(`kernel WASM bundle is missing the evaluateDocument binding — rebuild @vcad/kernel-wasm (stale bundle); old bundles are unsupported`);
        try {
            let r = JSON.stringify(e), i = t.evaluateDocument(r, n.skipClashDetection ?? !1), a = e.roots.filter((e)=>e.visible !== !1), o = [], s = i.parts.map((n, r)=>{
                if (n.mesh.positions.length === 0 && r < a.length) {
                    let i = S(a[r].root, e.nodes);
                    if (i) return {
                        mesh: E(T(i.pattern, t), i.transform, t),
                        material: n.material
                    };
                    try {
                        let i = C(a[r].root, e.nodes, t);
                        if (i) return {
                            ...i,
                            material: n.material
                        };
                    } catch (e) {
                        let t = e instanceof Error ? e.message : String(e);
                        return o.push({
                            scope: `root[${r}]`,
                            node_id: a[r].root,
                            error: t
                        }), console.warn(`[ENGINE] sheet-metal eval failed at root[${r}] (node ${a[r].root}): ${t}`), {
                            mesh: g(n.mesh),
                            material: n.material
                        };
                    }
                }
                return {
                    mesh: g(n.mesh),
                    material: n.material
                };
            });
            if (i.failures && i.failures.length > 0) for (let e of i.failures)console.warn(`[ENGINE] feature eval failed at ${e.scope} (node ${e.node_id}): ${e.error}`);
            return {
                parts: s,
                partDefs: i.partDefs?.map((e)=>({
                        id: e.id,
                        mesh: g(e.mesh)
                    })),
                instances: i.instances?.map((e)=>({
                        instanceId: e.instance_id,
                        partDefId: e.part_def_id,
                        name: e.name,
                        mesh: g(e.mesh),
                        material: e.material,
                        transform: e.transform
                    })),
                clashes: i.clashes.map(g),
                failures: o.length > 0 ? [
                    ...i.failures ?? [],
                    ...o
                ] : i.failures
            };
        } catch (e) {
            console.warn(`[ENGINE] WASM evaluateDocument failed, falling back to TS:`, e);
        }
        return O(e, t, n);
    }
    function v(e) {
        return e.type === `Line` ? {
            type: `Line`,
            start: [
                e.start.x,
                e.start.y
            ],
            end: [
                e.end.x,
                e.end.y
            ]
        } : {
            type: `Arc`,
            start: [
                e.start.x,
                e.start.y
            ],
            end: [
                e.end.x,
                e.end.y
            ],
            center: [
                e.center.x,
                e.center.y
            ],
            ccw: e.ccw
        };
    }
    function y(e) {
        return {
            origin: [
                e.origin.x,
                e.origin.y,
                e.origin.z
            ],
            x_dir: [
                e.x_dir.x,
                e.x_dir.y,
                e.x_dir.z
            ],
            y_dir: [
                e.y_dir.x,
                e.y_dir.y,
                e.y_dir.z
            ],
            segments: e.segments.map(v),
            ...e.holes && e.holes.length > 0 ? {
                holes: e.holes.map((e)=>e.map(v))
            } : {}
        };
    }
    function b(e) {
        let t = e.getMesh();
        return {
            positions: new Float32Array(t.positions),
            indices: new Uint32Array(t.indices),
            normals: t.normals ? new Float32Array(t.normals) : void 0
        };
    }
    function x(e, t) {
        let n = u(e, t, (e)=>e.type === `ImportedMesh` ? e : null);
        return n ? {
            mesh: n.value,
            transform: n.transform
        } : null;
    }
    function S(e, t) {
        let n = u(e, t, (e)=>e.type === `EmbroideryPattern` ? e : null);
        return n ? {
            pattern: n.value,
            transform: n.transform
        } : null;
    }
    function C(e, t, n) {
        let r = m(e, t);
        if (!r) return null;
        let i = p(r.root, t);
        if (!i) return null;
        let { mesh: a, sheetMetal: o } = h(i, n);
        return {
            mesh: l(r.transform) ? a : E(a, r.transform, n),
            sheetMetal: o
        };
    }
    function w(e) {
        let t = .15, n = [], r = [], i = [];
        for (let a of e.design.stitch_groups){
            let o = e.design.threads[a.thread_index], s = o ? o.color[0] / 255 : .5, c = o ? o.color[1] / 255 : .5, l = o ? o.color[2] / 255 : .5, u = a.stitches;
            for(let e = 0; e < u.length - 1; e++){
                let [a, o] = u[e], [d, f] = u[e + 1], p = -o, m = -f, h = d - a, g = m - p, _ = Math.sqrt(h * h + g * g);
                if (_ < 1e-6) continue;
                let v = -g / _ * t, y = h / _ * t, b = n.length / 3;
                n.push(a + v, p + y, 0), n.push(a - v, p - y, 0), n.push(d - v, m - y, 0), n.push(d + v, m + y, 0), i.push(s, c, l, s, c, l, s, c, l, s, c, l), r.push(b, b + 1, b + 2), r.push(b, b + 2, b + 3);
            }
        }
        return {
            positions: new Float32Array(n),
            indices: new Uint32Array(r),
            colors: new Float32Array(i)
        };
    }
    function T(e, t) {
        if (t?.embroideryDesignToMesh) try {
            let n = t.embroideryDesignToMesh(JSON.stringify(e.design));
            return {
                positions: new Float32Array(n.positions),
                indices: new Uint32Array(n.indices),
                colors: new Float32Array(n.colors)
            };
        } catch (e) {
            console.warn(`[ENGINE] kernel embroideryDesignToMesh failed, falling back to TS:`, e);
        }
        return w(e);
    }
    function E(e, t, n) {
        if (n?.transformMeshBuffers) try {
            let r = n.transformMeshBuffers(e.positions, e.normals, JSON.stringify(t));
            return {
                positions: new Float32Array(r.positions),
                indices: e.indices,
                normals: r.normals ? new Float32Array(r.normals) : void 0,
                colors: e.colors
            };
        } catch (e) {
            console.warn(`[ENGINE] kernel transformMeshBuffers failed, falling back to TS:`, e);
        }
        return D(e, t);
    }
    function D(e, t) {
        let { translate: n, rotate: r, scale: i } = t, a = new Float32Array(e.positions.length), o = r.x * Math.PI / 180, s = r.y * Math.PI / 180, c = r.z * Math.PI / 180, l = Math.cos(o), u = Math.sin(o), d = Math.cos(s), f = Math.sin(s), p = Math.cos(c), m = Math.sin(c), h = d * p, g = u * f * p - l * m, _ = l * f * p + u * m, v = d * m, y = u * f * m + l * p, b = l * f * m - u * p, x = -f, S = u * d, C = l * d;
        for(let t = 0; t < e.positions.length; t += 3){
            let r = e.positions[t] * i.x, o = e.positions[t + 1] * i.y, s = e.positions[t + 2] * i.z, c = h * r + g * o + _ * s, l = v * r + y * o + b * s, u = x * r + S * o + C * s;
            a[t] = c + n.x, a[t + 1] = l + n.y, a[t + 2] = u + n.z;
        }
        let w = e.normals;
        if (e.normals) {
            w = new Float32Array(e.normals.length);
            for(let t = 0; t < e.normals.length; t += 3){
                let n = e.normals[t], r = e.normals[t + 1], i = e.normals[t + 2];
                w[t] = h * n + g * r + _ * i, w[t + 1] = v * n + y * r + b * i, w[t + 2] = x * n + S * r + C * i;
            }
        }
        return {
            positions: a,
            indices: e.indices,
            normals: w,
            colors: e.colors
        };
    }
    function O(e, t, n = {}) {
        let { Solid: r } = t, i = new Map, a = e.roots.filter((e)=>e.visible !== !1), o = [], c = [], l = ()=>({
                positions: new Float32Array,
                indices: new Uint32Array
            }), u = a.map((n, a)=>{
            let s = S(n.root, e.nodes);
            if (s) {
                let e = E(T(s.pattern, t), s.transform, t);
                return o.push(r.empty()), {
                    mesh: e,
                    material: n.material
                };
            }
            let u = x(n.root, e.nodes);
            if (u) {
                let e = E({
                    positions: new Float32Array(u.mesh.positions),
                    indices: new Uint32Array(u.mesh.indices),
                    normals: u.mesh.normals ? new Float32Array(u.mesh.normals) : void 0
                }, u.transform, t);
                return o.push(r.empty()), {
                    mesh: e,
                    material: n.material
                };
            }
            try {
                let i = C(n.root, e.nodes, t);
                if (i) return o.push(r.empty()), {
                    ...i,
                    material: n.material
                };
            } catch (e) {
                let t = e instanceof Error ? e.message : String(e);
                return c.push({
                    scope: `root[${a}]`,
                    node_id: n.root,
                    error: t
                }), console.warn(`[ENGINE] sheet-metal eval failed at root[${a}] (node ${n.root}): ${t}`), o.push(r.empty()), {
                    mesh: l(),
                    material: n.material
                };
            }
            try {
                let t = k(n.root, e.nodes, r, i, 0), a = b(t);
                return o.push(t), {
                    mesh: a,
                    material: n.material,
                    solid: t
                };
            } catch (e) {
                let t = e instanceof Error ? e.message : String(e);
                return c.push({
                    scope: `root[${a}]`,
                    node_id: n.root,
                    error: t
                }), console.warn(`[ENGINE] feature eval failed at root[${a}] (node ${n.root}): ${t}`), o.push(r.empty()), {
                    mesh: l(),
                    material: n.material
                };
            }
        }), d, f;
        if (e.partDefs && Object.keys(e.partDefs).length > 0 && e.instances && e.instances.length > 0) {
            let t = s(e), n = new Map;
            d = [];
            for (let [t, a] of Object.entries(e.partDefs))try {
                let o = k(a.root, e.nodes, r, i, 0), s = b(o);
                n.set(t, s), d.push({
                    id: t,
                    mesh: s,
                    solid: o
                });
            } catch (e) {
                let r = e instanceof Error ? e.message : String(e);
                c.push({
                    scope: `partDef[${JSON.stringify(t)}]`,
                    node_id: a.root,
                    error: r
                }), console.warn(`[ENGINE] partDef eval failed at ${t} (node ${a.root}): ${r}`);
                let i = l();
                n.set(t, i), d.push({
                    id: t,
                    mesh: i
                });
            }
            f = [];
            for (let r of e.instances){
                let i = n.get(r.partDefId);
                if (!i) continue;
                let a = t.get(r.id) ?? r.transform, o = e.partDefs[r.partDefId], s = r.material ?? o?.defaultMaterial ?? `default`;
                f.push({
                    instanceId: r.id,
                    partDefId: r.partDefId,
                    name: r.name,
                    mesh: i,
                    material: s,
                    transform: a
                });
            }
        }
        let p = [];
        if (!n.skipClashDetection) for(let e = 0; e < o.length; e++)for(let t = e + 1; t < o.length; t++){
            let n = o[e].intersection(o[t]);
            if (!n.isEmpty()) {
                let e = n.getMesh();
                e.positions.length > 0 && p.push({
                    positions: new Float32Array(e.positions),
                    indices: new Uint32Array(e.indices),
                    normals: e.normals ? new Float32Array(e.normals) : void 0
                });
            }
        }
        return {
            parts: u,
            partDefs: d,
            instances: f,
            clashes: p,
            failures: c.length > 0 ? c : void 0
        };
    }
    function k(e, t, n, r, i = 0) {
        let a = r.get(e);
        if (a) return a;
        let o = t[String(e)];
        if (!o) throw Error(`Missing node: ${e}`);
        let s = A(o.op, t, n, r, i);
        return r.set(e, s), s;
    }
    function A(e, t, n, r, i = 0) {
        switch(e.type){
            case `Cube`:
                return n.cube(e.size.x, e.size.y, e.size.z);
            case `Cylinder`:
                return n.cylinder(e.radius, e.height, e.segments || void 0);
            case `Sphere`:
                return n.sphere(e.radius, e.segments || void 0);
            case `Cone`:
                return n.cone(e.radius_bottom, e.radius_top, e.height, e.segments || void 0);
            case `Torus`:
                return n.torus(e.major_radius, e.minor_radius, e.segments || void 0);
            case `Wedge`:
                return n.wedge(e.size.x, e.size.y, e.size.z);
            case `Prism`:
                return n.prism(e.sides, e.radius, e.height);
            case `SpurGear`:
                {
                    let t = n.spurGear;
                    if (!t) throw Error(`SpurGear needs a newer kernel WASM build`);
                    return t(e.module, e.teeth, e.pressure_angle_deg, e.face_width, e.bore_diameter ?? 0, e.backlash ?? 0);
                }
            case `Mirror`:
                return k(e.child, t, n, r, i + 1).mirror(e.plane_origin.x, e.plane_origin.y, e.plane_origin.z, e.plane_normal.x, e.plane_normal.y, e.plane_normal.z);
            case `Empty`:
                return n.empty();
            case `Union`:
                {
                    let a = k(e.left, t, n, r, i + 1), o = k(e.right, t, n, r, i + 1);
                    return a.union(o);
                }
            case `Difference`:
                {
                    let a = k(e.left, t, n, r, i + 1), o = k(e.right, t, n, r, i + 1);
                    return a.difference(o);
                }
            case `Intersection`:
                {
                    let a = k(e.left, t, n, r, i + 1), o = k(e.right, t, n, r, i + 1);
                    return a.intersection(o);
                }
            case `Translate`:
                return k(e.child, t, n, r, i + 1).translate(e.offset.x, e.offset.y, e.offset.z);
            case `Rotate`:
                return k(e.child, t, n, r, i + 1).rotate(e.angles.x, e.angles.y, e.angles.z);
            case `Scale`:
                return k(e.child, t, n, r, i + 1).scale(e.factor.x, e.factor.y, e.factor.z);
            case `Sketch2D`:
                return n.empty();
            case `Extrude`:
                {
                    let r = t[String(e.sketch)];
                    if (!r) throw Error(`Extrude references missing node: ${e.sketch}`);
                    let i = new Float64Array([
                        e.direction.x,
                        e.direction.y,
                        e.direction.z
                    ]);
                    if (r.op.type === `Text2D`) {
                        let e = r.op, t = new Float64Array([
                            e.origin.x,
                            e.origin.y,
                            e.origin.z
                        ]), a = new Float64Array([
                            e.x_dir.x,
                            e.x_dir.y,
                            e.x_dir.z
                        ]), o = new Float64Array([
                            e.y_dir.x,
                            e.y_dir.y,
                            e.y_dir.z
                        ]);
                        return n.textExtrude(e.text, t, a, o, i, e.height, e.font || void 0, e.alignment || void 0, e.letter_spacing ?? void 0, e.line_spacing ?? void 0);
                    }
                    if (r.op.type !== `Sketch2D`) throw Error(`Extrude references invalid sketch node: ${e.sketch} (type=${r.op.type})`);
                    let a = y(r.op), o = JSON.stringify(a), s = e.twist_angle !== void 0 && Math.abs(e.twist_angle) > 1e-12, c = e.scale_end !== void 0 && Math.abs(e.scale_end - 1) > 1e-12;
                    return s || c ? n.extrudeWithOptions(o, i, e.twist_angle ?? 0, e.scale_end ?? 1) : n.extrude(o, i);
                }
            case `Revolve`:
                {
                    let r = t[String(e.sketch)];
                    if (!r || r.op.type !== `Sketch2D`) throw Error(`Revolve references invalid sketch node: ${e.sketch}`);
                    let i = y(r.op), a = JSON.stringify(i), o = new Float64Array([
                        e.axis_origin.x,
                        e.axis_origin.y,
                        e.axis_origin.z
                    ]), s = new Float64Array([
                        e.axis_dir.x,
                        e.axis_dir.y,
                        e.axis_dir.z
                    ]);
                    return n.revolve(a, o, s, e.angle_deg);
                }
            case `LinearPattern`:
                return k(e.child, t, n, r, i + 1).linearPattern(e.direction.x, e.direction.y, e.direction.z, e.count, e.spacing);
            case `CircularPattern`:
                return k(e.child, t, n, r, i + 1).circularPattern(e.axis_origin.x, e.axis_origin.y, e.axis_origin.z, e.axis_dir.x, e.axis_dir.y, e.axis_dir.z, e.count, e.angle_deg);
            case `SweepRotate`:
                return k(e.child, t, n, r, i + 1).sweepRotate(e.axis_origin.x, e.axis_origin.y, e.axis_origin.z, e.axis_dir.x, e.axis_dir.y, e.axis_dir.z, e.angle_lo_deg, e.angle_hi_deg, e.step_deg ?? 0, e.clearance ?? 0);
            case `Shell`:
                {
                    let a = k(e.child, t, n, r, i + 1);
                    if (e.open_faces && e.open_faces.length > 0) {
                        let t = a.shellOpen;
                        if (typeof t != `function`) throw Error(`shell: this kernel build cannot open faces (rebuild kernel-wasm)`);
                        return t.call(a, e.thickness, JSON.stringify(e.open_faces));
                    }
                    return a.shell(e.thickness);
                }
            case `Fillet`:
                return k(e.child, t, n, r, i + 1).fillet(e.radius);
            case `Chamfer`:
                return k(e.child, t, n, r, i + 1).chamfer(e.distance);
            case `EdgeBlend`:
                return k(e.child, t, n, r, i + 1).edgeBlend(JSON.stringify({
                    edges: e.edges,
                    profile: e.profile
                }));
            case `Sweep`:
                {
                    let r = t[String(e.sketch)];
                    if (!r || r.op.type !== `Sketch2D`) throw Error(`Sweep references invalid sketch node: ${e.sketch}`);
                    let i = y(r.op), a = JSON.stringify(i);
                    if (e.path.type === `Line`) {
                        let t = new Float64Array([
                            e.path.start.x,
                            e.path.start.y,
                            e.path.start.z
                        ]), r = new Float64Array([
                            e.path.end.x,
                            e.path.end.y,
                            e.path.end.z
                        ]);
                        return n.sweepLine(a, t, r, e.twist_angle, e.scale_start, e.scale_end, e.orientation);
                    }
                    if (e.path.type === `Helix`) return n.sweepHelix(a, e.path.radius, e.path.pitch, e.path.height, e.path.turns, e.twist_angle, e.scale_start, e.scale_end, e.path_segments, e.arc_segments, e.orientation);
                    throw Error(`Cylindrical sweep paths are not yet supported in the web engine (use the native pipeline)`);
                }
            case `Loft`:
                {
                    let r = e.sketches.map((e)=>{
                        let n = t[String(e)];
                        if (!n || n.op.type !== `Sketch2D`) throw Error(`Loft references invalid sketch node: ${e}`);
                        return y(n.op);
                    });
                    return n.loft(JSON.stringify(r), e.closed);
                }
            case `Hull`:
                {
                    let a = n, o = e.children.map((e)=>k(e, t, n, r, i + 1)), s = e.points;
                    if (s.length > 0) {
                        if (typeof a.hullPoints != `function`) throw Error(`Hull needs a kernel build with Solid.hullPoints — rebuild the WASM kernel`);
                        o.push(a.hullPoints(new Float64Array(s)));
                    }
                    if (o.length === 0) throw Error(`Hull has no operands`);
                    return o.reduce((e, t)=>{
                        let n = e.hullWith;
                        if (typeof n != `function`) throw Error(`Hull needs a kernel build with Solid.hullWith — rebuild the WASM kernel`);
                        return n.call(e, t);
                    });
                }
            case `ImportedMesh`:
                return n.empty();
            case `step_import`:
                {
                    let t = n.fromRegisteredStep;
                    if (typeof t != `function`) throw Error(`STEP import '${e.path}' cannot be evaluated: this kernel build predates Solid.fromRegisteredStep — rebuild the WASM kernel`);
                    return t(e.path, e.solid_index);
                }
            case `mesh_import`:
                return n.empty();
            case `Text2D`:
                return n.empty();
            case `PcbBoard`:
                {
                    let t = e.board.outline, r = t?.vertices ?? [];
                    if (r.length < 3) return n.empty();
                    let i = t.thickness, a = {
                        origin: [
                            0,
                            0,
                            0
                        ],
                        x_dir: [
                            1,
                            0,
                            0
                        ],
                        y_dir: [
                            0,
                            1,
                            0
                        ],
                        segments: r.map((e, t)=>{
                            let n = r[(t + 1) % r.length];
                            return {
                                type: `Line`,
                                start: [
                                    e.x,
                                    e.y
                                ],
                                end: [
                                    n.x,
                                    n.y
                                ]
                            };
                        })
                    };
                    return n.extrude(JSON.stringify(a), new Float64Array([
                        0,
                        0,
                        i
                    ])).translate(0, 0, -i / 2);
                }
            case `EmbroideryPattern`:
                return n.empty();
            case `PartInstance`:
                return n.empty();
            case `SheetMetalBaseFlangeRect`:
            case `SheetMetalBaseFlangePolygon`:
            case `SheetMetalEdgeFlange`:
            case `SheetMetalHem`:
            case `SheetMetalJog`:
            case `SheetMetalBendRelief`:
                return n.empty();
        }
    }
    function j(e, t) {
        let n = t.buildPart;
        if (typeof n != `function` || !Object.values(e.nodes).some((e)=>e.op.type === `PartInstance`)) return e;
        let r = JSON.parse(JSON.stringify(e)), i = Object.keys(r.nodes).map(Number), a = (i.length > 0 ? Math.max(...i) : 0) + 1;
        for (let [e, t] of Object.entries(r.nodes)){
            if (t.op.type !== `PartInstance`) continue;
            let e = t.op, i;
            try {
                i = n(e.path, JSON.stringify(e.params ?? {}));
            } catch (n) {
                console.warn(`[parts] failed to build ${e.path}:`, n), t.op = {
                    type: `Empty`
                };
                continue;
            }
            let o;
            try {
                o = JSON.parse(i);
            } catch (n) {
                console.warn(`[parts] invalid sub-doc from ${e.path}:`, n), t.op = {
                    type: `Empty`
                };
                continue;
            }
            let s = o.roots[0];
            if (!s) {
                console.warn(`[parts] ${e.path} produced no scene root`), t.op = {
                    type: `Empty`
                };
                continue;
            }
            let c = new Map;
            for (let e of Object.keys(o.nodes).map(Number))c.set(e, a++);
            for (let [e, t] of Object.entries(o.nodes)){
                let n = Number(e), i = c.get(n), a = M(t, c);
                a.id = i, r.nodes[String(i)] = a;
            }
            let l = c.get(s.root);
            l === void 0 ? (console.warn(`[parts] ${e.path} root id not in remap table`), t.op = {
                type: `Empty`
            }) : t.op = {
                type: `Translate`,
                child: l,
                offset: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            };
        }
        return r;
    }
    function M(e, t) {
        let n = (e)=>t.get(e) ?? e, r = e.op, i = r;
        switch(r.type){
            case `Union`:
            case `Difference`:
            case `Intersection`:
                i = {
                    ...r,
                    left: n(r.left),
                    right: n(r.right)
                };
                break;
            case `Translate`:
            case `Rotate`:
            case `Scale`:
            case `LinearPattern`:
            case `CircularPattern`:
            case `SweepRotate`:
            case `Shell`:
            case `Fillet`:
            case `Chamfer`:
            case `EdgeBlend`:
                i = {
                    ...r,
                    child: n(r.child)
                };
                break;
            case `Extrude`:
            case `Revolve`:
            case `Sweep`:
                i = {
                    ...r,
                    sketch: n(r.sketch)
                };
                break;
            case `Loft`:
                i = {
                    ...r,
                    sketches: r.sketches.map(n)
                };
                break;
            case `Hull`:
                i = {
                    ...r,
                    children: r.children.map(n)
                };
                break;
            default:
                i = r;
        }
        return {
            ...e,
            op: i
        };
    }
    function N(e) {
        let t = [], n = (e)=>{
            t.push(e.positions.buffer), t.push(e.indices.buffer), e.normals && t.push(e.normals.buffer), e.colors && t.push(e.colors.buffer), e.faceKinds && t.push(e.faceKinds.buffer);
        };
        for (let t of e.parts)n(t.mesh);
        if (e.partDefs) for (let t of e.partDefs)n(t.mesh);
        if (e.instances) for (let t of e.instances)n(t.mesh);
        for (let t of e.clashes)n(t);
        return t;
    }
    function P(e) {
        let t = (e)=>({
                positions: e.positions instanceof Float32Array ? e.positions : new Float32Array(e.positions),
                indices: e.indices instanceof Uint32Array ? e.indices : new Uint32Array(e.indices),
                normals: e.normals ? e.normals instanceof Float32Array ? e.normals : new Float32Array(e.normals) : void 0,
                faceKinds: e.faceKinds ? e.faceKinds instanceof Uint8Array ? e.faceKinds : new Uint8Array(e.faceKinds) : void 0
            });
        return {
            parts: e.parts.map((e)=>({
                    mesh: t(e.mesh),
                    material: e.material
                })),
            partDefs: e.partDefs?.map((e)=>({
                    id: e.id,
                    mesh: t(e.mesh)
                })),
            instances: e.instances?.map((e)=>({
                    instanceId: e.instance_id,
                    partDefId: e.part_def_id,
                    name: e.name,
                    mesh: t(e.mesh),
                    material: e.material,
                    transform: e.transform
                })),
            clashes: e.clashes.map(t),
            failures: e.failures,
            timing: e.timing
        };
    }
    function F(e, t, n) {
        let r = t.roots.filter((e)=>e.visible !== !1), i = !1, a = e.parts.map((e, a)=>{
            if (e.mesh.positions.length === 0 && a < r.length) {
                let o = S(r[a].root, t.nodes);
                if (o) return i = !0, {
                    mesh: E(T(o.pattern, n), o.transform, n),
                    material: e.material
                };
            }
            return e;
        });
        return i ? {
            ...e,
            parts: a
        } : e;
    }
    function I(e, t, n) {
        let r = t.roots.filter((e)=>e.visible !== !1), i = !1, a = e.parts.map((e, a)=>{
            if (e.mesh.positions.length === 0 && a < r.length) try {
                let o = C(r[a].root, t.nodes, n);
                if (o) return i = !0, {
                    ...o,
                    material: e.material
                };
            } catch (e) {
                console.warn(`[worker] sheet-metal eval failed at root[${a}]:`, e);
            }
            return e;
        });
        return i ? {
            ...e,
            parts: a
        } : e;
    }
    function L(e, t, n) {
        return I(F(e, t, n), t, n);
    }
    let R = null, z = null, B = null, V = `ts`;
    function H(e, t) {
        if (V === `wasm` && z) try {
            return L(P(B ? B.evaluate(e, t) : z(e, t)), JSON.parse(e), R);
        } catch  {}
        return _(JSON.parse(e), R, {
            skipClashDetection: t
        });
    }
    self.onmessage = async (e)=>{
        let { type: t } = e.data;
        if (t === `init`) try {
            let t = await import(`./vcad_kernel_wasm-CGvLTRFT.js`).then(async (m)=>{
                await m.__tla;
                return m;
            }), n = e.data.module;
            n ? await t.default({
                module_or_path: n
            }) : await t.default(), R = {
                Solid: t.Solid,
                evaluateDocument: t.evaluateDocument,
                evaluateSheetMetalChain: t.evaluateSheetMetalChain,
                embroideryDesignToMesh: t.embroideryDesignToMesh,
                transformMeshBuffers: t.transformMeshBuffers
            }, z = t.evaluateDocument, V = z ? `wasm` : `ts`;
            let r = t.IncrementalEvaluator;
            B = r ? new r : null, self.postMessage({
                type: `ready`
            });
        } catch (e) {
            self.postMessage({
                type: `error`,
                id: null,
                message: `WASM init failed: ${e}`
            });
        }
        else if (t === `evaluate`) {
            let { id: t, docJson: n, skipClashDetection: r } = e.data;
            if (!R) {
                self.postMessage({
                    type: `error`,
                    id: t,
                    message: `Worker not initialized`
                });
                return;
            }
            try {
                let e = performance.now(), i = H(n, r ?? !1), a = performance.now() - e, o = N(i);
                self.postMessage({
                    type: `result`,
                    id: t,
                    scene: i,
                    workerTotalMs: a
                }, o);
            } catch (e) {
                self.postMessage({
                    type: `error`,
                    id: t,
                    message: String(e)
                });
            }
        }
    };
})();
