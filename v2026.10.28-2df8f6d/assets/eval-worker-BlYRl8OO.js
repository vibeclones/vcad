(async ()=>{
    class q extends Error {
        offset;
        constructor(s, t){
            super(`parse error at offset ${t}: ${s}`), this.name = "ParseError", this.offset = t;
        }
    }
    class Y extends Error {
        constructor(s){
            super(s), this.name = "EvalError";
        }
    }
    const Q = /^parse error at offset (\d+): (.*)$/s;
    function V(e) {
        const s = e instanceof Error ? e.message : String(e), t = Q.exec(s);
        return t ? new q(t[2], Number(t[1])) : new Y(s);
    }
    function X(e) {
        throw new Error(`${e}: kernel WASM is not initialized — await getKernelWasm() (or Engine.init()) before using expression APIs`);
    }
    function Z(e) {
        const s = !!e.parameters && Object.keys(e.parameters).length > 0, t = !!e.bindings && Object.keys(e.bindings).length > 0;
        if (!s && !t) return {
            doc: e,
            env: {}
        };
        try {
            const n = X("resolveDocumentJson").resolveDocumentJson(JSON.stringify(e));
            return JSON.parse(n);
        } catch (n) {
            throw V(n);
        }
    }
    function ee(e) {
        return new Map;
    }
    function te() {
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
    function ne(e) {
        return e.translate.x === 0 && e.translate.y === 0 && e.translate.z === 0 && e.rotate.x === 0 && e.rotate.y === 0 && e.rotate.z === 0 && e.scale.x === 1 && e.scale.y === 1 && e.scale.z === 1;
    }
    function T(e, s, t) {
        const n = te();
        let i = e;
        for(;;){
            const a = s[String(i)];
            if (!a) return null;
            const r = t(a.op);
            if (r !== null) return {
                value: r,
                node: i,
                transform: n
            };
            const o = a.op;
            if (o.type === "Translate") n.translate = o.offset, i = o.child;
            else if (o.type === "Rotate") n.rotate = o.angles, i = o.child;
            else if (o.type === "Scale") n.scale = o.factor, i = o.child;
            else return null;
        }
    }
    function K(e) {
        return e.type === "SheetMetalBaseFlangeRect" || e.type === "SheetMetalBaseFlangePolygon" || e.type === "SheetMetalEdgeFlange" || e.type === "SheetMetalHem" || e.type === "SheetMetalJog" || e.type === "SheetMetalBendRelief";
    }
    function W(e) {
        return !e || e.length === 0 ? {} : {
            engravings: e.map((s)=>s.type === "Polyline" ? {
                    type: "Polyline",
                    points: s.points.map((t)=>[
                            t.x,
                            t.y
                        ])
                } : {
                    type: "Text",
                    text: s.text,
                    x: s.x,
                    y: s.y,
                    height: s.height,
                    angle: s.angle
                })
        };
    }
    function re(e, s) {
        const t = s[String(e)];
        if (!t || !K(t.op)) return null;
        const n = [];
        let i = null, a = t;
        for(; a;){
            const r = a.op;
            if (r.type === "SheetMetalBaseFlangeRect") {
                n.push({
                    type: "BaseFlangeRect",
                    width: r.width,
                    depth: r.depth,
                    thickness: r.thickness,
                    material: r.material,
                    ...r.shop_profile !== void 0 ? {
                        shopProfile: r.shop_profile
                    } : {},
                    ...W(r.engravings)
                }), i = r.material;
                break;
            } else if (r.type === "SheetMetalBaseFlangePolygon") {
                n.push({
                    type: "BaseFlangePolygon",
                    outline: r.outline.map((o)=>[
                            o.x,
                            o.y
                        ]),
                    holes: r.holes?.map((o)=>o.map((c)=>[
                                c.x,
                                c.y
                            ])),
                    thickness: r.thickness,
                    material: r.material,
                    ...r.shop_profile !== void 0 ? {
                        shopProfile: r.shop_profile
                    } : {},
                    ...W(r.engravings)
                }), i = r.material;
                break;
            } else if (r.type === "SheetMetalEdgeFlange") n.push({
                type: "EdgeFlange",
                panelId: r.panel_id,
                edgeIndex: r.edge_index,
                length: r.length,
                angle: r.angle,
                ...r.radius !== void 0 ? {
                    radius: r.radius
                } : {},
                direction: r.direction,
                manualK: r.manual_k
            }), a = s[String(r.parent)];
            else if (r.type === "SheetMetalHem") n.push({
                type: "Hem",
                panelId: r.panel_id,
                edgeIndex: r.edge_index,
                kind: r.kind ?? "Closed",
                length: r.length,
                gap: r.gap ?? 0,
                direction: r.direction
            }), a = s[String(r.parent)];
            else if (r.type === "SheetMetalJog") n.push({
                type: "Jog",
                panelId: r.panel_id,
                edgeIndex: r.edge_index,
                offset: r.offset,
                length: r.length,
                ...r.radius !== void 0 ? {
                    radius: r.radius
                } : {},
                direction: r.direction
            }), a = s[String(r.parent)];
            else if (r.type === "SheetMetalBendRelief") n.push({
                type: "BendRelief",
                ...r.width !== void 0 ? {
                    width: r.width
                } : {},
                ...r.depth !== void 0 ? {
                    depth: r.depth
                } : {}
            }), a = s[String(r.parent)];
            else return null;
        }
        return i === null ? null : n.reverse();
    }
    function se(e, s) {
        const t = T(e, s, (n)=>K(n) ? n : null);
        return t ? {
            root: t.node,
            transform: t.transform
        } : null;
    }
    function ae(e, s) {
        if (!s.evaluateSheetMetalChain) throw new Error("kernel.evaluateSheetMetalChain not available — rebuild @vcad/kernel-wasm");
        const t = s.evaluateSheetMetalChain(JSON.stringify(e)), n = JSON.parse(t);
        if (n.error) throw new Error(`sheet-metal eval: ${n.error}`);
        return {
            mesh: {
                positions: new Float32Array(n.mesh.positions),
                indices: new Uint32Array(n.mesh.indices),
                normals: n.mesh.normals.length > 0 ? new Float32Array(n.mesh.normals) : void 0
            },
            sheetMetal: {
                flatPattern: n.flat_pattern,
                model: n.model,
                dxf: n.dxf,
                violations: n.violations
            }
        };
    }
    function I(e) {
        return {
            positions: new Float32Array(e.positions),
            indices: new Uint32Array(e.indices),
            normals: e.normals ? new Float32Array(e.normals) : void 0,
            faceKinds: e.faceKinds ? new Uint8Array(e.faceKinds) : void 0
        };
    }
    function ie(e, s, t = {}) {
        if (e = Z(e).doc, e = he(e, s), !s.evaluateDocument) throw new Error("kernel WASM bundle is missing the evaluateDocument binding — rebuild @vcad/kernel-wasm (stale bundle); old bundles are unsupported");
        try {
            const i = JSON.stringify(e), a = s.evaluateDocument(i, t.skipClashDetection ?? !1), r = e.roots.filter((l)=>l.visible !== !1), o = [], c = a.parts.map((l, m)=>{
                if (l.mesh.positions.length === 0 && m < r.length) {
                    const u = R(r[m].root, e.nodes);
                    if (u) {
                        const y = J(u.pattern, s);
                        return {
                            mesh: N(y, u.transform, s),
                            material: l.material
                        };
                    }
                    try {
                        const y = B(r[m].root, e.nodes, s);
                        if (y) return {
                            ...y,
                            material: l.material
                        };
                    } catch (y) {
                        const f = y instanceof Error ? y.message : String(y);
                        return o.push({
                            scope: `root[${m}]`,
                            node_id: r[m].root,
                            error: f
                        }), console.warn(`[ENGINE] sheet-metal eval failed at root[${m}] (node ${r[m].root}): ${f}`), {
                            mesh: I(l.mesh),
                            material: l.material
                        };
                    }
                }
                return {
                    mesh: I(l.mesh),
                    material: l.material
                };
            });
            if (a.failures && a.failures.length > 0) for (const l of a.failures)console.warn(`[ENGINE] feature eval failed at ${l.scope} (node ${l.node_id}): ${l.error}`);
            return {
                parts: c,
                partDefs: a.partDefs?.map((l)=>({
                        id: l.id,
                        mesh: I(l.mesh)
                    })),
                instances: a.instances?.map((l)=>({
                        instanceId: l.instance_id,
                        partDefId: l.part_def_id,
                        name: l.name,
                        mesh: I(l.mesh),
                        material: l.material,
                        transform: l.transform
                    })),
                clashes: a.clashes.map(I),
                failures: o.length > 0 ? [
                    ...a.failures ?? [],
                    ...o
                ] : a.failures
            };
        } catch (i) {
            console.warn("[ENGINE] WASM evaluateDocument failed, falling back to TS:", i);
        }
        return fe(e, s, t);
    }
    function C(e) {
        return e.type === "Line" ? {
            type: "Line",
            start: [
                e.start.x,
                e.start.y
            ],
            end: [
                e.end.x,
                e.end.y
            ]
        } : {
            type: "Arc",
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
    function P(e) {
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
            segments: e.segments.map(C),
            ...e.holes && e.holes.length > 0 ? {
                holes: e.holes.map((s)=>s.map(C))
            } : {}
        };
    }
    function H(e) {
        const s = e.getMesh();
        return {
            positions: new Float32Array(s.positions),
            indices: new Uint32Array(s.indices),
            normals: s.normals ? new Float32Array(s.normals) : void 0
        };
    }
    function oe(e, s) {
        const t = T(e, s, (n)=>n.type === "ImportedMesh" ? n : null);
        return t ? {
            mesh: t.value,
            transform: t.transform
        } : null;
    }
    function R(e, s) {
        const t = T(e, s, (n)=>n.type === "EmbroideryPattern" ? n : null);
        return t ? {
            pattern: t.value,
            transform: t.transform
        } : null;
    }
    function B(e, s, t) {
        const n = se(e, s);
        if (!n) return null;
        const i = re(n.root, s);
        if (!i) return null;
        const { mesh: a, sheetMetal: r } = ae(i, t);
        return {
            mesh: ne(n.transform) ? a : N(a, n.transform, t),
            sheetMetal: r
        };
    }
    function le(e) {
        const t = [], n = [], i = [];
        for (const a of e.design.stitch_groups){
            const r = e.design.threads[a.thread_index], o = r ? r.color[0] / 255 : .5, c = r ? r.color[1] / 255 : .5, l = r ? r.color[2] / 255 : .5, m = a.stitches;
            for(let u = 0; u < m.length - 1; u++){
                const [y, f] = m[u], [w, d] = m[u + 1], p = -f, h = -d, g = w - y, M = h - p, F = Math.sqrt(g * g + M * M);
                if (F < 1e-6) continue;
                const v = -M / F * .15, E = g / F * .15, b = t.length / 3;
                t.push(y + v, p + E, 0), t.push(y - v, p - E, 0), t.push(w - v, h - E, 0), t.push(w + v, h + E, 0), i.push(o, c, l, o, c, l, o, c, l, o, c, l), n.push(b, b + 1, b + 2), n.push(b, b + 2, b + 3);
            }
        }
        return {
            positions: new Float32Array(t),
            indices: new Uint32Array(n),
            colors: new Float32Array(i)
        };
    }
    function J(e, s) {
        if (s?.embroideryDesignToMesh) try {
            const t = s.embroideryDesignToMesh(JSON.stringify(e.design));
            return {
                positions: new Float32Array(t.positions),
                indices: new Uint32Array(t.indices),
                colors: new Float32Array(t.colors)
            };
        } catch (t) {
            console.warn("[ENGINE] kernel embroideryDesignToMesh failed, falling back to TS:", t);
        }
        return le(e);
    }
    function N(e, s, t) {
        if (t?.transformMeshBuffers) try {
            const n = t.transformMeshBuffers(e.positions, e.normals, JSON.stringify(s));
            return {
                positions: new Float32Array(n.positions),
                indices: e.indices,
                normals: n.normals ? new Float32Array(n.normals) : void 0,
                colors: e.colors
            };
        } catch (n) {
            console.warn("[ENGINE] kernel transformMeshBuffers failed, falling back to TS:", n);
        }
        return ce(e, s);
    }
    function ce(e, s) {
        const { translate: t, rotate: n, scale: i } = s, a = new Float32Array(e.positions.length), r = n.x * Math.PI / 180, o = n.y * Math.PI / 180, c = n.z * Math.PI / 180, l = Math.cos(r), m = Math.sin(r), u = Math.cos(o), y = Math.sin(o), f = Math.cos(c), w = Math.sin(c), d = u * f, p = m * y * f - l * w, h = l * y * f + m * w, g = u * w, M = m * y * w + l * f, F = l * y * w - m * f, v = -y, E = m * u, b = l * u;
        for(let _ = 0; _ < e.positions.length; _ += 3){
            const S = e.positions[_] * i.x, A = e.positions[_ + 1] * i.y, D = e.positions[_ + 2] * i.z, j = d * S + p * A + h * D, L = g * S + M * A + F * D, G = v * S + E * A + b * D;
            a[_] = j + t.x, a[_ + 1] = L + t.y, a[_ + 2] = G + t.z;
        }
        let k = e.normals;
        if (e.normals) {
            k = new Float32Array(e.normals.length);
            for(let _ = 0; _ < e.normals.length; _ += 3){
                const S = e.normals[_], A = e.normals[_ + 1], D = e.normals[_ + 2];
                k[_] = d * S + p * A + h * D, k[_ + 1] = g * S + M * A + F * D, k[_ + 2] = v * S + E * A + b * D;
            }
        }
        return {
            positions: a,
            indices: e.indices,
            normals: k,
            colors: e.colors
        };
    }
    function fe(e, s, t = {}) {
        const { Solid: n } = s, i = new Map, a = e.roots.filter((f)=>f.visible !== !1), r = [], o = [], c = ()=>({
                positions: new Float32Array(0),
                indices: new Uint32Array(0)
            }), l = a.map((f, w)=>{
            const d = R(f.root, e.nodes);
            if (d) {
                const h = J(d.pattern, s), g = N(h, d.transform, s);
                return r.push(n.empty()), {
                    mesh: g,
                    material: f.material
                };
            }
            const p = oe(f.root, e.nodes);
            if (p) {
                const h = {
                    positions: new Float32Array(p.mesh.positions),
                    indices: new Uint32Array(p.mesh.indices),
                    normals: p.mesh.normals ? new Float32Array(p.mesh.normals) : void 0
                }, g = N(h, p.transform, s);
                return r.push(n.empty()), {
                    mesh: g,
                    material: f.material
                };
            }
            try {
                const h = B(f.root, e.nodes, s);
                if (h) return r.push(n.empty()), {
                    ...h,
                    material: f.material
                };
            } catch (h) {
                const g = h instanceof Error ? h.message : String(h);
                return o.push({
                    scope: `root[${w}]`,
                    node_id: f.root,
                    error: g
                }), console.warn(`[ENGINE] sheet-metal eval failed at root[${w}] (node ${f.root}): ${g}`), r.push(n.empty()), {
                    mesh: c(),
                    material: f.material
                };
            }
            try {
                const h = x(f.root, e.nodes, n, i, 0), g = H(h);
                return r.push(h), {
                    mesh: g,
                    material: f.material,
                    solid: h
                };
            } catch (h) {
                const g = h instanceof Error ? h.message : String(h);
                return o.push({
                    scope: `root[${w}]`,
                    node_id: f.root,
                    error: g
                }), console.warn(`[ENGINE] feature eval failed at root[${w}] (node ${f.root}): ${g}`), r.push(n.empty()), {
                    mesh: c(),
                    material: f.material
                };
            }
        });
        let m, u;
        if (e.partDefs && Object.keys(e.partDefs).length > 0 && e.instances && e.instances.length > 0) {
            const f = ee(), w = new Map;
            m = [];
            for (const [d, p] of Object.entries(e.partDefs))try {
                const h = x(p.root, e.nodes, n, i, 0), g = H(h);
                w.set(d, g), m.push({
                    id: d,
                    mesh: g,
                    solid: h
                });
            } catch (h) {
                const g = h instanceof Error ? h.message : String(h);
                o.push({
                    scope: `partDef[${JSON.stringify(d)}]`,
                    node_id: p.root,
                    error: g
                }), console.warn(`[ENGINE] partDef eval failed at ${d} (node ${p.root}): ${g}`);
                const M = c();
                w.set(d, M), m.push({
                    id: d,
                    mesh: M
                });
            }
            u = [];
            for (const d of e.instances){
                const p = w.get(d.partDefId);
                if (!p) continue;
                const h = f.get(d.id) ?? d.transform, g = e.partDefs[d.partDefId], M = d.material ?? g?.defaultMaterial ?? "default";
                u.push({
                    instanceId: d.id,
                    partDefId: d.partDefId,
                    name: d.name,
                    mesh: p,
                    material: M,
                    transform: h
                });
            }
        }
        const y = [];
        if (!t.skipClashDetection) for(let f = 0; f < r.length; f++)for(let w = f + 1; w < r.length; w++){
            const d = r[f].intersection(r[w]);
            if (!d.isEmpty()) {
                const p = d.getMesh();
                p.positions.length > 0 && y.push({
                    positions: new Float32Array(p.positions),
                    indices: new Uint32Array(p.indices),
                    normals: p.normals ? new Float32Array(p.normals) : void 0
                });
            }
        }
        return {
            parts: l,
            partDefs: m,
            instances: u,
            clashes: y,
            failures: o.length > 0 ? o : void 0
        };
    }
    function x(e, s, t, n, i = 0) {
        const a = n.get(e);
        if (a) return a;
        const r = s[String(e)];
        if (!r) throw new Error(`Missing node: ${e}`);
        const o = ue(r.op, s, t, n, i);
        return n.set(e, o), o;
    }
    function ue(e, s, t, n, i = 0) {
        switch(e.type){
            case "Cube":
                return t.cube(e.size.x, e.size.y, e.size.z);
            case "Cylinder":
                return t.cylinder(e.radius, e.height, e.segments || void 0);
            case "Sphere":
                return t.sphere(e.radius, e.segments || void 0);
            case "Cone":
                return t.cone(e.radius_bottom, e.radius_top, e.height, e.segments || void 0);
            case "Torus":
                return t.torus(e.major_radius, e.minor_radius, e.segments || void 0);
            case "Wedge":
                return t.wedge(e.size.x, e.size.y, e.size.z);
            case "Prism":
                return t.prism(e.sides, e.radius, e.height);
            case "Mirror":
                return x(e.child, s, t, n, i + 1).mirror(e.plane_origin.x, e.plane_origin.y, e.plane_origin.z, e.plane_normal.x, e.plane_normal.y, e.plane_normal.z);
            case "Empty":
                return t.empty();
            case "Union":
                {
                    const a = x(e.left, s, t, n, i + 1), r = x(e.right, s, t, n, i + 1);
                    return a.union(r);
                }
            case "Difference":
                {
                    const a = x(e.left, s, t, n, i + 1), r = x(e.right, s, t, n, i + 1);
                    return a.difference(r);
                }
            case "Intersection":
                {
                    const a = x(e.left, s, t, n, i + 1), r = x(e.right, s, t, n, i + 1);
                    return a.intersection(r);
                }
            case "Translate":
                return x(e.child, s, t, n, i + 1).translate(e.offset.x, e.offset.y, e.offset.z);
            case "Rotate":
                return x(e.child, s, t, n, i + 1).rotate(e.angles.x, e.angles.y, e.angles.z);
            case "Scale":
                return x(e.child, s, t, n, i + 1).scale(e.factor.x, e.factor.y, e.factor.z);
            case "Sketch2D":
                return t.empty();
            case "Extrude":
                {
                    const a = s[String(e.sketch)];
                    if (!a) throw new Error(`Extrude references missing node: ${e.sketch}`);
                    const r = new Float64Array([
                        e.direction.x,
                        e.direction.y,
                        e.direction.z
                    ]);
                    if (a.op.type === "Text2D") {
                        const u = a.op, y = new Float64Array([
                            u.origin.x,
                            u.origin.y,
                            u.origin.z
                        ]), f = new Float64Array([
                            u.x_dir.x,
                            u.x_dir.y,
                            u.x_dir.z
                        ]), w = new Float64Array([
                            u.y_dir.x,
                            u.y_dir.y,
                            u.y_dir.z
                        ]);
                        return t.textExtrude(u.text, y, f, w, r, u.height, u.font || void 0, u.alignment || void 0, u.letter_spacing ?? void 0, u.line_spacing ?? void 0);
                    }
                    if (a.op.type !== "Sketch2D") throw new Error(`Extrude references invalid sketch node: ${e.sketch} (type=${a.op.type})`);
                    const o = P(a.op), c = JSON.stringify(o), l = e.twist_angle !== void 0 && Math.abs(e.twist_angle) > 1e-12, m = e.scale_end !== void 0 && Math.abs(e.scale_end - 1) > 1e-12;
                    return l || m ? t.extrudeWithOptions(c, r, e.twist_angle ?? 0, e.scale_end ?? 1) : t.extrude(c, r);
                }
            case "Revolve":
                {
                    const a = s[String(e.sketch)];
                    if (!a || a.op.type !== "Sketch2D") throw new Error(`Revolve references invalid sketch node: ${e.sketch}`);
                    const r = P(a.op), o = JSON.stringify(r), c = new Float64Array([
                        e.axis_origin.x,
                        e.axis_origin.y,
                        e.axis_origin.z
                    ]), l = new Float64Array([
                        e.axis_dir.x,
                        e.axis_dir.y,
                        e.axis_dir.z
                    ]);
                    return t.revolve(o, c, l, e.angle_deg);
                }
            case "LinearPattern":
                return x(e.child, s, t, n, i + 1).linearPattern(e.direction.x, e.direction.y, e.direction.z, e.count, e.spacing);
            case "CircularPattern":
                return x(e.child, s, t, n, i + 1).circularPattern(e.axis_origin.x, e.axis_origin.y, e.axis_origin.z, e.axis_dir.x, e.axis_dir.y, e.axis_dir.z, e.count, e.angle_deg);
            case "SweepRotate":
                return x(e.child, s, t, n, i + 1).sweepRotate(e.axis_origin.x, e.axis_origin.y, e.axis_origin.z, e.axis_dir.x, e.axis_dir.y, e.axis_dir.z, e.angle_lo_deg, e.angle_hi_deg, e.step_deg ?? 0, e.clearance ?? 0);
            case "Shell":
                return x(e.child, s, t, n, i + 1).shell(e.thickness);
            case "Fillet":
                return x(e.child, s, t, n, i + 1).fillet(e.radius);
            case "Chamfer":
                return x(e.child, s, t, n, i + 1).chamfer(e.distance);
            case "EdgeBlend":
                return x(e.child, s, t, n, i + 1).edgeBlend(JSON.stringify({
                    edges: e.edges,
                    profile: e.profile
                }));
            case "Sweep":
                {
                    const a = s[String(e.sketch)];
                    if (!a || a.op.type !== "Sketch2D") throw new Error(`Sweep references invalid sketch node: ${e.sketch}`);
                    const r = P(a.op), o = JSON.stringify(r);
                    if (e.path.type === "Line") {
                        const c = new Float64Array([
                            e.path.start.x,
                            e.path.start.y,
                            e.path.start.z
                        ]), l = new Float64Array([
                            e.path.end.x,
                            e.path.end.y,
                            e.path.end.z
                        ]);
                        return t.sweepLine(o, c, l, e.twist_angle, e.scale_start, e.scale_end, e.orientation);
                    } else {
                        if (e.path.type === "Helix") return t.sweepHelix(o, e.path.radius, e.path.pitch, e.path.height, e.path.turns, e.twist_angle, e.scale_start, e.scale_end, e.path_segments, e.arc_segments, e.orientation);
                        throw new Error("Cylindrical sweep paths are not yet supported in the web engine (use the native pipeline)");
                    }
                }
            case "Loft":
                {
                    const a = e.sketches.map((r)=>{
                        const o = s[String(r)];
                        if (!o || o.op.type !== "Sketch2D") throw new Error(`Loft references invalid sketch node: ${r}`);
                        return P(o.op);
                    });
                    return t.loft(JSON.stringify(a), e.closed);
                }
            case "Hull":
                {
                    const a = t, r = e.children.map((c)=>x(c, s, t, n, i + 1)), o = e.points;
                    if (o.length > 0) {
                        if (typeof a.hullPoints != "function") throw new Error("Hull needs a kernel build with Solid.hullPoints — rebuild the WASM kernel");
                        r.push(a.hullPoints(new Float64Array(o)));
                    }
                    if (r.length === 0) throw new Error("Hull has no operands");
                    return r.reduce((c, l)=>{
                        const m = c.hullWith;
                        if (typeof m != "function") throw new Error("Hull needs a kernel build with Solid.hullWith — rebuild the WASM kernel");
                        return m.call(c, l);
                    });
                }
            case "ImportedMesh":
                return t.empty();
            case "step_import":
                {
                    const a = t.fromRegisteredStep;
                    if (typeof a != "function") throw new Error(`STEP import '${e.path}' cannot be evaluated: this kernel build predates Solid.fromRegisteredStep — rebuild the WASM kernel`);
                    return a(e.path, e.solid_index);
                }
            case "mesh_import":
                return t.empty();
            case "Text2D":
                return t.empty();
            case "PcbBoard":
                {
                    const a = e.board.outline, r = a?.vertices ?? [];
                    if (r.length < 3) return t.empty();
                    const o = a.thickness, c = r.map((m, u)=>{
                        const y = r[(u + 1) % r.length];
                        return {
                            type: "Line",
                            start: [
                                m.x,
                                m.y
                            ],
                            end: [
                                y.x,
                                y.y
                            ]
                        };
                    }), l = {
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
                        segments: c
                    };
                    return t.extrude(JSON.stringify(l), new Float64Array([
                        0,
                        0,
                        o
                    ])).translate(0, 0, -o / 2);
                }
            case "EmbroideryPattern":
                return t.empty();
            case "PartInstance":
                return t.empty();
            case "SheetMetalBaseFlangeRect":
            case "SheetMetalBaseFlangePolygon":
            case "SheetMetalEdgeFlange":
            case "SheetMetalHem":
            case "SheetMetalJog":
            case "SheetMetalBendRelief":
                return t.empty();
        }
    }
    function he(e, s) {
        const t = s.buildPart;
        if (typeof t != "function" || !Object.values(e.nodes).some((o)=>o.op.type === "PartInstance")) return e;
        const i = JSON.parse(JSON.stringify(e)), a = Object.keys(i.nodes).map(Number);
        let r = (a.length > 0 ? Math.max(...a) : 0) + 1;
        for (const [o, c] of Object.entries(i.nodes)){
            if (c.op.type !== "PartInstance") continue;
            const l = c.op;
            let m;
            try {
                m = t(l.path, JSON.stringify(l.params ?? {}));
            } catch (d) {
                console.warn(`[parts] failed to build ${l.path}:`, d), c.op = {
                    type: "Empty"
                };
                continue;
            }
            let u;
            try {
                u = JSON.parse(m);
            } catch (d) {
                console.warn(`[parts] invalid sub-doc from ${l.path}:`, d), c.op = {
                    type: "Empty"
                };
                continue;
            }
            const y = u.roots[0];
            if (!y) {
                console.warn(`[parts] ${l.path} produced no scene root`), c.op = {
                    type: "Empty"
                };
                continue;
            }
            const f = new Map;
            for (const d of Object.keys(u.nodes).map(Number))f.set(d, r++);
            for (const [d, p] of Object.entries(u.nodes)){
                const h = Number(d), g = f.get(h), M = de(p, f);
                M.id = g, i.nodes[String(g)] = M;
            }
            const w = f.get(y.root);
            if (w === void 0) {
                console.warn(`[parts] ${l.path} root id not in remap table`), c.op = {
                    type: "Empty"
                };
                continue;
            }
            c.op = {
                type: "Translate",
                child: w,
                offset: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            };
        }
        return i;
    }
    function de(e, s) {
        const t = (a)=>s.get(a) ?? a, n = e.op;
        let i = n;
        switch(n.type){
            case "Union":
            case "Difference":
            case "Intersection":
                i = {
                    ...n,
                    left: t(n.left),
                    right: t(n.right)
                };
                break;
            case "Translate":
            case "Rotate":
            case "Scale":
            case "LinearPattern":
            case "CircularPattern":
            case "SweepRotate":
            case "Shell":
            case "Fillet":
            case "Chamfer":
            case "EdgeBlend":
                i = {
                    ...n,
                    child: t(n.child)
                };
                break;
            case "Extrude":
            case "Revolve":
            case "Sweep":
                i = {
                    ...n,
                    sketch: t(n.sketch)
                };
                break;
            case "Loft":
                i = {
                    ...n,
                    sketches: n.sketches.map(t)
                };
                break;
            case "Hull":
                i = {
                    ...n,
                    children: n.children.map(t)
                };
                break;
            default:
                i = n;
        }
        return {
            ...e,
            op: i
        };
    }
    function me(e) {
        const s = [], t = (n)=>{
            s.push(n.positions.buffer), s.push(n.indices.buffer), n.normals && s.push(n.normals.buffer), n.colors && s.push(n.colors.buffer), n.faceKinds && s.push(n.faceKinds.buffer);
        };
        for (const n of e.parts)t(n.mesh);
        if (e.partDefs) for (const n of e.partDefs)t(n.mesh);
        if (e.instances) for (const n of e.instances)t(n.mesh);
        for (const n of e.clashes)t(n);
        return s;
    }
    function ye(e) {
        const s = (t)=>({
                positions: t.positions instanceof Float32Array ? t.positions : new Float32Array(t.positions),
                indices: t.indices instanceof Uint32Array ? t.indices : new Uint32Array(t.indices),
                normals: t.normals ? t.normals instanceof Float32Array ? t.normals : new Float32Array(t.normals) : void 0,
                faceKinds: t.faceKinds ? t.faceKinds instanceof Uint8Array ? t.faceKinds : new Uint8Array(t.faceKinds) : void 0
            });
        return {
            parts: e.parts.map((t)=>({
                    mesh: s(t.mesh),
                    material: t.material
                })),
            partDefs: e.partDefs?.map((t)=>({
                    id: t.id,
                    mesh: s(t.mesh)
                })),
            instances: e.instances?.map((t)=>({
                    instanceId: t.instance_id,
                    partDefId: t.part_def_id,
                    name: t.name,
                    mesh: s(t.mesh),
                    material: t.material,
                    transform: t.transform
                })),
            clashes: e.clashes.map(s),
            failures: e.failures,
            timing: e.timing
        };
    }
    function ge(e, s, t) {
        const n = s.roots.filter((r)=>r.visible !== !1);
        let i = !1;
        const a = e.parts.map((r, o)=>{
            if (r.mesh.positions.length === 0 && o < n.length) {
                const c = R(n[o].root, s.nodes);
                if (c) {
                    i = !0;
                    const l = J(c.pattern, t);
                    return {
                        mesh: N(l, c.transform, t),
                        material: r.material
                    };
                }
            }
            return r;
        });
        return i ? {
            ...e,
            parts: a
        } : e;
    }
    function pe(e, s, t) {
        const n = s.roots.filter((r)=>r.visible !== !1);
        let i = !1;
        const a = e.parts.map((r, o)=>{
            if (r.mesh.positions.length === 0 && o < n.length) try {
                const c = B(n[o].root, s.nodes, t);
                if (c) return i = !0, {
                    ...c,
                    material: r.material
                };
            } catch (c) {
                console.warn(`[worker] sheet-metal eval failed at root[${o}]:`, c);
            }
            return r;
        });
        return i ? {
            ...e,
            parts: a
        } : e;
    }
    function we(e, s, t) {
        return pe(ge(e, s, t), s, t);
    }
    let z = null, O = null, $ = null, U = "ts";
    function xe(e, s) {
        if (U === "wasm" && O) try {
            const n = $ ? $.evaluate(e, s) : O(e, s), i = ye(n), a = JSON.parse(e);
            return we(i, a, z);
        } catch  {}
        const t = JSON.parse(e);
        return ie(t, z, {
            skipClashDetection: s
        });
    }
    self.onmessage = async (e)=>{
        const { type: s } = e.data;
        if (s === "init") {
            try {
                const t = await import("./vcad_kernel_wasm-8_iZkqvL.js"), n = e.data.module;
                n ? await t.default({
                    module_or_path: n
                }) : await t.default(), z = {
                    Solid: t.Solid,
                    evaluateDocument: t.evaluateDocument,
                    evaluateSheetMetalChain: t.evaluateSheetMetalChain,
                    embroideryDesignToMesh: t.embroideryDesignToMesh,
                    transformMeshBuffers: t.transformMeshBuffers
                }, O = t.evaluateDocument, U = O ? "wasm" : "ts";
                const i = t.IncrementalEvaluator;
                $ = i ? new i : null, self.postMessage({
                    type: "ready"
                });
            } catch (t) {
                self.postMessage({
                    type: "error",
                    id: null,
                    message: `WASM init failed: ${t}`
                });
            }
            return;
        }
        if (s === "evaluate") {
            const { id: t, docJson: n, skipClashDetection: i } = e.data;
            if (!z) {
                self.postMessage({
                    type: "error",
                    id: t,
                    message: "Worker not initialized"
                });
                return;
            }
            try {
                const a = performance.now(), r = xe(n, i ?? !1), o = performance.now() - a, c = me(r);
                self.postMessage({
                    type: "result",
                    id: t,
                    scene: r,
                    workerTotalMs: o
                }, c);
            } catch (a) {
                self.postMessage({
                    type: "error",
                    id: t,
                    message: String(a)
                });
            }
            return;
        }
    };
})();
