(async ()=>{
    class G extends Error {
        offset;
        constructor(s, t){
            super(`parse error at offset ${t}: ${s}`), this.name = "ParseError", this.offset = t;
        }
    }
    class q extends Error {
        constructor(s){
            super(s), this.name = "EvalError";
        }
    }
    const Y = /^parse error at offset (\d+): (.*)$/s;
    function Q(e) {
        const s = e instanceof Error ? e.message : String(e), t = Y.exec(s);
        return t ? new G(t[2], Number(t[1])) : new q(s);
    }
    function V(e) {
        throw new Error(`${e}: kernel WASM is not initialized — await getKernelWasm() (or Engine.init()) before using expression APIs`);
    }
    function X(e) {
        const s = !!e.parameters && Object.keys(e.parameters).length > 0, t = !!e.bindings && Object.keys(e.bindings).length > 0;
        if (!s && !t) return {
            doc: e,
            env: {}
        };
        try {
            const n = V("resolveDocumentJson").resolveDocumentJson(JSON.stringify(e));
            return JSON.parse(n);
        } catch (n) {
            throw Q(n);
        }
    }
    function Z(e) {
        return new Map;
    }
    function ee() {
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
    function te(e) {
        return e.translate.x === 0 && e.translate.y === 0 && e.translate.z === 0 && e.rotate.x === 0 && e.rotate.y === 0 && e.rotate.z === 0 && e.scale.x === 1 && e.scale.y === 1 && e.scale.z === 1;
    }
    function $(e, s, t) {
        const n = ee();
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
    function U(e) {
        return e.type === "SheetMetalBaseFlangeRect" || e.type === "SheetMetalBaseFlangePolygon" || e.type === "SheetMetalEdgeFlange" || e.type === "SheetMetalHem" || e.type === "SheetMetalJog" || e.type === "SheetMetalBendRelief";
    }
    function B(e) {
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
    function ne(e, s) {
        const t = s[String(e)];
        if (!t || !U(t.op)) return null;
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
                    ...B(r.engravings)
                }), i = r.material;
                break;
            } else if (r.type === "SheetMetalBaseFlangePolygon") {
                n.push({
                    type: "BaseFlangePolygon",
                    outline: r.outline.map((o)=>[
                            o.x,
                            o.y
                        ]),
                    holes: r.holes?.map((o)=>o.map((u)=>[
                                u.x,
                                u.y
                            ])),
                    thickness: r.thickness,
                    material: r.material,
                    ...r.shop_profile !== void 0 ? {
                        shopProfile: r.shop_profile
                    } : {},
                    ...B(r.engravings)
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
    function re(e, s) {
        const t = $(e, s, (n)=>U(n) ? n : null);
        return t ? {
            root: t.node,
            transform: t.transform
        } : null;
    }
    function se(e, s) {
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
    function k(e) {
        return {
            positions: new Float32Array(e.positions),
            indices: new Uint32Array(e.indices),
            normals: e.normals ? new Float32Array(e.normals) : void 0,
            faceKinds: e.faceKinds ? new Uint8Array(e.faceKinds) : void 0
        };
    }
    function ae(e, s, t = {}) {
        if (e = X(e).doc, e = ue(e, s), !s.evaluateDocument) throw new Error("kernel WASM bundle is missing the evaluateDocument binding — rebuild @vcad/kernel-wasm (stale bundle); old bundles are unsupported");
        try {
            const i = JSON.stringify(e), a = s.evaluateDocument(i, t.skipClashDetection ?? !1), r = e.roots.filter((l)=>l.visible !== !1), o = [], u = a.parts.map((l, m)=>{
                if (l.mesh.positions.length === 0 && m < r.length) {
                    const f = T(r[m].root, e.nodes);
                    if (f) {
                        const y = R(f.pattern, s);
                        return {
                            mesh: z(y, f.transform, s),
                            material: l.material
                        };
                    }
                    try {
                        const y = J(r[m].root, e.nodes, s);
                        if (y) return {
                            ...y,
                            material: l.material
                        };
                    } catch (y) {
                        const c = y instanceof Error ? y.message : String(y);
                        return o.push({
                            scope: `root[${m}]`,
                            node_id: r[m].root,
                            error: c
                        }), console.warn(`[ENGINE] sheet-metal eval failed at root[${m}] (node ${r[m].root}): ${c}`), {
                            mesh: k(l.mesh),
                            material: l.material
                        };
                    }
                }
                return {
                    mesh: k(l.mesh),
                    material: l.material
                };
            });
            if (a.failures && a.failures.length > 0) for (const l of a.failures)console.warn(`[ENGINE] feature eval failed at ${l.scope} (node ${l.node_id}): ${l.error}`);
            return {
                parts: u,
                partDefs: a.partDefs?.map((l)=>({
                        id: l.id,
                        mesh: k(l.mesh)
                    })),
                instances: a.instances?.map((l)=>({
                        instanceId: l.instance_id,
                        partDefId: l.part_def_id,
                        name: l.name,
                        mesh: k(l.mesh),
                        material: l.material,
                        transform: l.transform
                    })),
                clashes: a.clashes.map(k),
                failures: o.length > 0 ? [
                    ...a.failures ?? [],
                    ...o
                ] : a.failures
            };
        } catch (i) {
            console.warn("[ENGINE] WASM evaluateDocument failed, falling back to TS:", i);
        }
        return ce(e, s, t);
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
    function K(e) {
        const s = e.getMesh();
        return {
            positions: new Float32Array(s.positions),
            indices: new Uint32Array(s.indices),
            normals: s.normals ? new Float32Array(s.normals) : void 0
        };
    }
    function ie(e, s) {
        const t = $(e, s, (n)=>n.type === "ImportedMesh" ? n : null);
        return t ? {
            mesh: t.value,
            transform: t.transform
        } : null;
    }
    function T(e, s) {
        const t = $(e, s, (n)=>n.type === "EmbroideryPattern" ? n : null);
        return t ? {
            pattern: t.value,
            transform: t.transform
        } : null;
    }
    function J(e, s, t) {
        const n = re(e, s);
        if (!n) return null;
        const i = ne(n.root, s);
        if (!i) return null;
        const { mesh: a, sheetMetal: r } = se(i, t);
        return {
            mesh: te(n.transform) ? a : z(a, n.transform, t),
            sheetMetal: r
        };
    }
    function oe(e) {
        const t = [], n = [], i = [];
        for (const a of e.design.stitch_groups){
            const r = e.design.threads[a.thread_index], o = r ? r.color[0] / 255 : .5, u = r ? r.color[1] / 255 : .5, l = r ? r.color[2] / 255 : .5, m = a.stitches;
            for(let f = 0; f < m.length - 1; f++){
                const [y, c] = m[f], [w, d] = m[f + 1], p = -c, h = -d, g = w - y, _ = h - p, F = Math.sqrt(g * g + _ * _);
                if (F < 1e-6) continue;
                const v = -_ / F * .15, E = g / F * .15, b = t.length / 3;
                t.push(y + v, p + E, 0), t.push(y - v, p - E, 0), t.push(w - v, h - E, 0), t.push(w + v, h + E, 0), i.push(o, u, l, o, u, l, o, u, l, o, u, l), n.push(b, b + 1, b + 2), n.push(b, b + 2, b + 3);
            }
        }
        return {
            positions: new Float32Array(t),
            indices: new Uint32Array(n),
            colors: new Float32Array(i)
        };
    }
    function R(e, s) {
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
        return oe(e);
    }
    function z(e, s, t) {
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
        return le(e, s);
    }
    function le(e, s) {
        const { translate: t, rotate: n, scale: i } = s, a = new Float32Array(e.positions.length), r = n.x * Math.PI / 180, o = n.y * Math.PI / 180, u = n.z * Math.PI / 180, l = Math.cos(r), m = Math.sin(r), f = Math.cos(o), y = Math.sin(o), c = Math.cos(u), w = Math.sin(u), d = f * c, p = m * y * c - l * w, h = l * y * c + m * w, g = f * w, _ = m * y * w + l * c, F = l * y * w - m * c, v = -y, E = m * f, b = l * f;
        for(let M = 0; M < e.positions.length; M += 3){
            const D = e.positions[M] * i.x, S = e.positions[M + 1] * i.y, A = e.positions[M + 2] * i.z, j = d * D + p * S + h * A, L = g * D + _ * S + F * A, H = v * D + E * S + b * A;
            a[M] = j + t.x, a[M + 1] = L + t.y, a[M + 2] = H + t.z;
        }
        let I = e.normals;
        if (e.normals) {
            I = new Float32Array(e.normals.length);
            for(let M = 0; M < e.normals.length; M += 3){
                const D = e.normals[M], S = e.normals[M + 1], A = e.normals[M + 2];
                I[M] = d * D + p * S + h * A, I[M + 1] = g * D + _ * S + F * A, I[M + 2] = v * D + E * S + b * A;
            }
        }
        return {
            positions: a,
            indices: e.indices,
            normals: I,
            colors: e.colors
        };
    }
    function ce(e, s, t = {}) {
        const { Solid: n } = s, i = new Map, a = e.roots.filter((c)=>c.visible !== !1), r = [], o = [], u = ()=>({
                positions: new Float32Array(0),
                indices: new Uint32Array(0)
            }), l = a.map((c, w)=>{
            const d = T(c.root, e.nodes);
            if (d) {
                const h = R(d.pattern, s), g = z(h, d.transform, s);
                return r.push(n.empty()), {
                    mesh: g,
                    material: c.material
                };
            }
            const p = ie(c.root, e.nodes);
            if (p) {
                const h = {
                    positions: new Float32Array(p.mesh.positions),
                    indices: new Uint32Array(p.mesh.indices),
                    normals: p.mesh.normals ? new Float32Array(p.mesh.normals) : void 0
                }, g = z(h, p.transform, s);
                return r.push(n.empty()), {
                    mesh: g,
                    material: c.material
                };
            }
            try {
                const h = J(c.root, e.nodes, s);
                if (h) return r.push(n.empty()), {
                    ...h,
                    material: c.material
                };
            } catch (h) {
                const g = h instanceof Error ? h.message : String(h);
                return o.push({
                    scope: `root[${w}]`,
                    node_id: c.root,
                    error: g
                }), console.warn(`[ENGINE] sheet-metal eval failed at root[${w}] (node ${c.root}): ${g}`), r.push(n.empty()), {
                    mesh: u(),
                    material: c.material
                };
            }
            try {
                const h = x(c.root, e.nodes, n, i, 0), g = K(h);
                return r.push(h), {
                    mesh: g,
                    material: c.material,
                    solid: h
                };
            } catch (h) {
                const g = h instanceof Error ? h.message : String(h);
                return o.push({
                    scope: `root[${w}]`,
                    node_id: c.root,
                    error: g
                }), console.warn(`[ENGINE] feature eval failed at root[${w}] (node ${c.root}): ${g}`), r.push(n.empty()), {
                    mesh: u(),
                    material: c.material
                };
            }
        });
        let m, f;
        if (e.partDefs && Object.keys(e.partDefs).length > 0 && e.instances && e.instances.length > 0) {
            const c = Z(), w = new Map;
            m = [];
            for (const [d, p] of Object.entries(e.partDefs))try {
                const h = x(p.root, e.nodes, n, i, 0), g = K(h);
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
                const _ = u();
                w.set(d, _), m.push({
                    id: d,
                    mesh: _
                });
            }
            f = [];
            for (const d of e.instances){
                const p = w.get(d.partDefId);
                if (!p) continue;
                const h = c.get(d.id) ?? d.transform, g = e.partDefs[d.partDefId], _ = d.material ?? g?.defaultMaterial ?? "default";
                f.push({
                    instanceId: d.id,
                    partDefId: d.partDefId,
                    name: d.name,
                    mesh: p,
                    material: _,
                    transform: h
                });
            }
        }
        const y = [];
        if (!t.skipClashDetection) for(let c = 0; c < r.length; c++)for(let w = c + 1; w < r.length; w++){
            const d = r[c].intersection(r[w]);
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
            instances: f,
            clashes: y,
            failures: o.length > 0 ? o : void 0
        };
    }
    function x(e, s, t, n, i = 0) {
        const a = n.get(e);
        if (a) return a;
        const r = s[String(e)];
        if (!r) throw new Error(`Missing node: ${e}`);
        const o = fe(r.op, s, t, n, i);
        return n.set(e, o), o;
    }
    function fe(e, s, t, n, i = 0) {
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
                        const f = a.op, y = new Float64Array([
                            f.origin.x,
                            f.origin.y,
                            f.origin.z
                        ]), c = new Float64Array([
                            f.x_dir.x,
                            f.x_dir.y,
                            f.x_dir.z
                        ]), w = new Float64Array([
                            f.y_dir.x,
                            f.y_dir.y,
                            f.y_dir.z
                        ]);
                        return t.textExtrude(f.text, y, c, w, r, f.height, f.font || void 0, f.alignment || void 0, f.letter_spacing ?? void 0, f.line_spacing ?? void 0);
                    }
                    if (a.op.type !== "Sketch2D") throw new Error(`Extrude references invalid sketch node: ${e.sketch} (type=${a.op.type})`);
                    const o = P(a.op), u = JSON.stringify(o), l = e.twist_angle !== void 0 && Math.abs(e.twist_angle) > 1e-12, m = e.scale_end !== void 0 && Math.abs(e.scale_end - 1) > 1e-12;
                    return l || m ? t.extrudeWithOptions(u, r, e.twist_angle ?? 0, e.scale_end ?? 1) : t.extrude(u, r);
                }
            case "Revolve":
                {
                    const a = s[String(e.sketch)];
                    if (!a || a.op.type !== "Sketch2D") throw new Error(`Revolve references invalid sketch node: ${e.sketch}`);
                    const r = P(a.op), o = JSON.stringify(r), u = new Float64Array([
                        e.axis_origin.x,
                        e.axis_origin.y,
                        e.axis_origin.z
                    ]), l = new Float64Array([
                        e.axis_dir.x,
                        e.axis_dir.y,
                        e.axis_dir.z
                    ]);
                    return t.revolve(o, u, l, e.angle_deg);
                }
            case "LinearPattern":
                return x(e.child, s, t, n, i + 1).linearPattern(e.direction.x, e.direction.y, e.direction.z, e.count, e.spacing);
            case "CircularPattern":
                return x(e.child, s, t, n, i + 1).circularPattern(e.axis_origin.x, e.axis_origin.y, e.axis_origin.z, e.axis_dir.x, e.axis_dir.y, e.axis_dir.z, e.count, e.angle_deg);
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
                        const u = new Float64Array([
                            e.path.start.x,
                            e.path.start.y,
                            e.path.start.z
                        ]), l = new Float64Array([
                            e.path.end.x,
                            e.path.end.y,
                            e.path.end.z
                        ]);
                        return t.sweepLine(o, u, l, e.twist_angle, e.scale_start, e.scale_end, e.orientation);
                    } else return t.sweepHelix(o, e.path.radius, e.path.pitch, e.path.height, e.path.turns, e.twist_angle, e.scale_start, e.scale_end, e.path_segments, e.arc_segments, e.orientation);
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
            case "ImportedMesh":
                return t.empty();
            case "step_import":
            case "mesh_import":
                return t.empty();
            case "Text2D":
                return t.empty();
            case "PcbBoard":
                {
                    const a = e.board.outline, r = a?.vertices ?? [];
                    if (r.length < 3) return t.empty();
                    const o = a.thickness, u = r.map((m, f)=>{
                        const y = r[(f + 1) % r.length];
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
                        segments: u
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
    function ue(e, s) {
        const t = s.buildPart;
        if (typeof t != "function" || !Object.values(e.nodes).some((o)=>o.op.type === "PartInstance")) return e;
        const i = JSON.parse(JSON.stringify(e)), a = Object.keys(i.nodes).map(Number);
        let r = (a.length > 0 ? Math.max(...a) : 0) + 1;
        for (const [o, u] of Object.entries(i.nodes)){
            if (u.op.type !== "PartInstance") continue;
            const l = u.op;
            let m;
            try {
                m = t(l.path, JSON.stringify(l.params ?? {}));
            } catch (d) {
                console.warn(`[parts] failed to build ${l.path}:`, d), u.op = {
                    type: "Empty"
                };
                continue;
            }
            let f;
            try {
                f = JSON.parse(m);
            } catch (d) {
                console.warn(`[parts] invalid sub-doc from ${l.path}:`, d), u.op = {
                    type: "Empty"
                };
                continue;
            }
            const y = f.roots[0];
            if (!y) {
                console.warn(`[parts] ${l.path} produced no scene root`), u.op = {
                    type: "Empty"
                };
                continue;
            }
            const c = new Map;
            for (const d of Object.keys(f.nodes).map(Number))c.set(d, r++);
            for (const [d, p] of Object.entries(f.nodes)){
                const h = Number(d), g = c.get(h), _ = he(p, c);
                _.id = g, i.nodes[String(g)] = _;
            }
            const w = c.get(y.root);
            if (w === void 0) {
                console.warn(`[parts] ${l.path} root id not in remap table`), u.op = {
                    type: "Empty"
                };
                continue;
            }
            u.op = {
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
    function he(e, s) {
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
            default:
                i = n;
        }
        return {
            ...e,
            op: i
        };
    }
    let N = null, O = null, W = "ts";
    function de(e) {
        const s = [], t = (n)=>{
            s.push(n.positions.buffer), s.push(n.indices.buffer), n.normals && s.push(n.normals.buffer), n.colors && s.push(n.colors.buffer), n.faceKinds && s.push(n.faceKinds.buffer);
        };
        for (const n of e.parts)t(n.mesh);
        if (e.partDefs) for (const n of e.partDefs)t(n.mesh);
        if (e.instances) for (const n of e.instances)t(n.mesh);
        for (const n of e.clashes)t(n);
        return s;
    }
    function me(e) {
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
    function ye(e, s) {
        const t = s.roots.filter((a)=>a.visible !== !1);
        let n = !1;
        const i = e.parts.map((a, r)=>{
            if (a.mesh.positions.length === 0 && r < t.length) {
                const o = T(t[r].root, s.nodes);
                if (o) {
                    n = !0;
                    const u = R(o.pattern, N);
                    return {
                        mesh: z(u, o.transform, N),
                        material: a.material
                    };
                }
            }
            return a;
        });
        return n ? {
            ...e,
            parts: i
        } : e;
    }
    function ge(e, s) {
        const t = s.roots.filter((a)=>a.visible !== !1);
        let n = !1;
        const i = e.parts.map((a, r)=>{
            if (a.mesh.positions.length === 0 && r < t.length) try {
                const o = J(t[r].root, s.nodes, N);
                if (o) return n = !0, {
                    ...o,
                    material: a.material
                };
            } catch (o) {
                console.warn(`[worker] sheet-metal eval failed at root[${r}]:`, o);
            }
            return a;
        });
        return n ? {
            ...e,
            parts: i
        } : e;
    }
    function pe(e, s) {
        if (W === "wasm" && O) try {
            const n = O(e, s), i = me(n), a = JSON.parse(e);
            return ge(ye(i, a), a);
        } catch  {}
        const t = JSON.parse(e);
        return ae(t, N, {
            skipClashDetection: s
        });
    }
    self.onmessage = async (e)=>{
        const { type: s } = e.data;
        if (s === "init") {
            try {
                const t = await import("./vcad_kernel_wasm-1z16LE_2.js"), n = e.data.module;
                n ? await t.default({
                    module_or_path: n
                }) : await t.default(), N = {
                    Solid: t.Solid,
                    evaluateDocument: t.evaluateDocument,
                    evaluateSheetMetalChain: t.evaluateSheetMetalChain,
                    embroideryDesignToMesh: t.embroideryDesignToMesh,
                    transformMeshBuffers: t.transformMeshBuffers
                }, O = t.evaluateDocument, W = O ? "wasm" : "ts", self.postMessage({
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
            if (!N) {
                self.postMessage({
                    type: "error",
                    id: t,
                    message: "Worker not initialized"
                });
                return;
            }
            try {
                const a = performance.now(), r = pe(n, i ?? !1), o = performance.now() - a, u = de(r);
                self.postMessage({
                    type: "result",
                    id: t,
                    scene: r,
                    workerTotalMs: o
                }, u);
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
