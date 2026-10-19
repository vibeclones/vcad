(async ()=>{
    class z extends Error {
        offset;
        constructor(r, t){
            super(`parse error at offset ${t}: ${r}`), this.name = "ParseError", this.offset = t;
        }
    }
    class k extends Error {
        constructor(r){
            super(r), this.name = "EvalError";
        }
    }
    function T(e) {
        return e >= "0" && e <= "9";
    }
    function G(e) {
        return e >= "A" && e <= "Z" || e >= "a" && e <= "z" || e === "_";
    }
    function ee(e) {
        return G(e) || T(e);
    }
    function te(e) {
        const r = [];
        let t = 0;
        for(; t < e.length;){
            const n = e[t];
            if (n === " " || n === "	" || n === `
` || n === "\r") {
                t++;
                continue;
            }
            if (T(n) || n === "." && t + 1 < e.length && T(e[t + 1])) {
                const o = t;
                let a = !1, s = !1;
                for(; t < e.length;){
                    const c = e[t];
                    if (T(c)) t++;
                    else if (c === "." && !a && !s) a = !0, t++;
                    else if ((c === "e" || c === "E") && !s) s = !0, t++, t < e.length && (e[t] === "+" || e[t] === "-") && t++;
                    else break;
                }
                const i = e.slice(o, t), l = Number(i);
                if (!Number.isFinite(l)) throw new z(`invalid number '${i}'`, o);
                r.push({
                    kind: "num",
                    value: l,
                    offset: o
                });
                continue;
            }
            if (G(n)) {
                const o = t;
                for(; t < e.length && ee(e[t]);)t++;
                r.push({
                    kind: "ident",
                    value: e.slice(o, t),
                    offset: o
                });
                continue;
            }
            if ("+-*/%^(),".includes(n)) {
                r.push({
                    kind: "sym",
                    value: n,
                    offset: t
                }), t++;
                continue;
            }
            throw new z(`unexpected character '${n}'`, t);
        }
        return r.push({
            kind: "end",
            offset: e.length
        }), r;
    }
    function q(e) {
        const r = te(e);
        let t = 0;
        const n = ()=>r[t], o = (f, u)=>{
            const m = n();
            if (m.kind !== "sym" || m.value !== f) throw new z(`expected ${u}`, m.offset);
            t++;
        }, a = ()=>{
            let f = s();
            for(;;){
                const u = n();
                if (u.kind !== "sym" || u.value !== "+" && u.value !== "-") break;
                t++;
                const m = s();
                f = {
                    kind: "binary",
                    op: u.value,
                    lhs: f,
                    rhs: m
                };
            }
            return f;
        }, s = ()=>{
            let f = i();
            for(;;){
                const u = n();
                if (u.kind !== "sym" || u.value !== "*" && u.value !== "/" && u.value !== "%") break;
                t++;
                const m = i();
                f = {
                    kind: "binary",
                    op: u.value,
                    lhs: f,
                    rhs: m
                };
            }
            return f;
        }, i = ()=>{
            const f = n();
            if (f.kind === "sym" && (f.value === "-" || f.value === "+")) {
                t++;
                const u = i();
                return {
                    kind: "unary",
                    op: f.value,
                    arg: u
                };
            }
            return l();
        }, l = ()=>{
            const f = c(), u = n();
            if (u.kind === "sym" && u.value === "^") {
                t++;
                const m = i();
                return {
                    kind: "binary",
                    op: "^",
                    lhs: f,
                    rhs: m
                };
            }
            return f;
        }, c = ()=>{
            const f = n();
            if (f.kind === "num") return t++, {
                kind: "num",
                value: f.value
            };
            if (f.kind === "sym" && f.value === "(") {
                t++;
                const u = a();
                return o(")", "')'"), u;
            }
            if (f.kind === "ident") {
                t++;
                const u = n();
                if (u.kind === "sym" && u.value === "(") {
                    t++;
                    const m = [];
                    if (!(n().kind === "sym" && n().value === ")")) for(m.push(a()); n().kind === "sym" && n().value === ",";)t++, m.push(a());
                    return o(")", "')'"), {
                        kind: "call",
                        name: f.value,
                        args: m
                    };
                }
                return {
                    kind: "ident",
                    name: f.value
                };
            }
            throw new z("expected number, identifier, or '('", f.offset);
        }, d = a(), h = n();
        if (h.kind !== "end") throw new z("unexpected trailing input", h.offset);
        return d;
    }
    function ne(e) {
        const r = [], t = (n)=>{
            switch(n.kind){
                case "num":
                    return;
                case "ident":
                    n.name !== "pi" && n.name !== "tau" && n.name !== "e" && !r.includes(n.name) && r.push(n.name);
                    return;
                case "binary":
                    t(n.lhs), t(n.rhs);
                    return;
                case "unary":
                    t(n.arg);
                    return;
                case "call":
                    n.args.forEach(t);
                    return;
            }
        };
        return t(e), r;
    }
    function F(e, r) {
        switch(e.kind){
            case "num":
                return e.value;
            case "ident":
                if (e.name === "pi") return Math.PI;
                if (e.name === "tau") return Math.PI * 2;
                if (e.name === "e") return Math.E;
                if (!(e.name in r)) throw new k(`undefined variable: ${e.name}`);
                return r[e.name];
            case "binary":
                {
                    const t = F(e.lhs, r), n = F(e.rhs, r);
                    switch(e.op){
                        case "+":
                            return t + n;
                        case "-":
                            return t - n;
                        case "*":
                            return t * n;
                        case "/":
                            if (n === 0) throw new k("math domain error: division by zero");
                            return t / n;
                        case "%":
                            if (n === 0) throw new k("math domain error: modulo by zero");
                            return (t % n + n) % n;
                        case "^":
                            return Math.pow(t, n);
                    }
                    return 0;
                }
            case "unary":
                {
                    const t = F(e.arg, r);
                    return e.op === "-" ? -t : t;
                }
            case "call":
                return re(e.name, e.args.map((t)=>F(t, r)));
        }
    }
    function re(e, r) {
        const t = (n)=>{
            if (r.length !== n) throw new k(`function '${e}' expected ${n} argument(s), got ${r.length}`);
        };
        switch(e){
            case "sin":
                return t(1), Math.sin(r[0]);
            case "cos":
                return t(1), Math.cos(r[0]);
            case "tan":
                return t(1), Math.tan(r[0]);
            case "asin":
                return t(1), Math.asin(r[0]);
            case "acos":
                return t(1), Math.acos(r[0]);
            case "atan":
                return t(1), Math.atan(r[0]);
            case "atan2":
                return t(2), Math.atan2(r[0], r[1]);
            case "sqrt":
                if (t(1), r[0] < 0) throw new k("math domain error: sqrt of negative");
                return Math.sqrt(r[0]);
            case "abs":
                return t(1), Math.abs(r[0]);
            case "floor":
                return t(1), Math.floor(r[0]);
            case "ceil":
                return t(1), Math.ceil(r[0]);
            case "round":
                return t(1), Math.sign(r[0]) * Math.round(Math.abs(r[0]));
            case "ln":
            case "log":
                if (t(1), r[0] <= 0) throw new k("math domain error: log of non-positive");
                return Math.log(r[0]);
            case "log2":
                if (t(1), r[0] <= 0) throw new k("math domain error: log2 of non-positive");
                return Math.log2(r[0]);
            case "exp":
                return t(1), Math.exp(r[0]);
            case "pow":
                return t(2), Math.pow(r[0], r[1]);
            case "min":
                return t(2), Math.min(r[0], r[1]);
            case "max":
                return t(2), Math.max(r[0], r[1]);
            case "deg":
                return t(1), r[0] * 180 / Math.PI;
            case "rad":
                return t(1), r[0] * Math.PI / 180;
            default:
                throw new k(`unknown function: ${e}`);
        }
    }
    function se(e, r) {
        return F(q(e), r);
    }
    function J(e) {
        const r = e.indexOf(":");
        return r <= 0 ? null : {
            nodeId: e.slice(0, r),
            fieldPath: e.slice(r + 1)
        };
    }
    function ae(e) {
        if (!e) return {};
        const r = {};
        for (const [l, c] of Object.entries(e))typeof c.value == "number" ? r[l] = null : r[l] = q(c.value);
        const t = {};
        for (const [l, c] of Object.entries(r)){
            const d = [];
            if (c) for (const h of ne(c))h in e && d.push(h);
            t[l] = d;
        }
        const n = {};
        for (const l of Object.keys(e))n[l] = "white";
        const o = [], a = [], s = (l)=>{
            if (n[l] !== "black") {
                if (n[l] === "gray") {
                    const c = a.indexOf(l), d = [
                        ...a.slice(c),
                        l
                    ];
                    throw new k(`cycle in parameter dependencies: ${d.join(" → ")}`);
                }
                n[l] = "gray", a.push(l);
                for (const c of t[l] ?? [])s(c);
                a.pop(), n[l] = "black", o.push(l);
            }
        };
        for (const l of Object.keys(e))s(l);
        const i = {};
        for (const l of o){
            const c = e[l];
            typeof c.value == "number" ? i[l] = c.value : i[l] = F(r[l], i);
        }
        return i;
    }
    function ie(e) {
        const r = !!e.parameters && Object.keys(e.parameters).length > 0, t = !!e.bindings && Object.keys(e.bindings).length > 0;
        if (!r && !t) return {
            doc: e,
            env: {}
        };
        const n = ae(e.parameters), o = structuredClone(e), a = Object.entries(o.bindings ?? {});
        a.sort(([s], [i])=>{
            const l = J(s), c = J(i);
            if (!l || !c) return s.localeCompare(i);
            const d = Number(l.nodeId), h = Number(c.nodeId);
            return d !== h ? d - h : l.fieldPath.localeCompare(c.fieldPath);
        });
        for (const [s, i] of a){
            const l = J(s);
            if (!l) continue;
            const c = typeof i == "number" ? i : se(i, n);
            oe(o, l.nodeId, l.fieldPath, c);
        }
        return {
            doc: o,
            env: n
        };
    }
    function oe(e, r, t, n) {
        const o = e.nodes[r];
        if (!o) throw new k(`binding references missing node '${r}'`);
        const a = o.op, s = (d, h)=>{
            let f = d;
            for(let m = 0; m < h.length - 1; m++){
                const p = h[m];
                if (f == null || typeof f != "object" || !(p in f)) return !1;
                f = f[p];
            }
            const u = h[h.length - 1];
            return f == null || typeof f != "object" ? !1 : (f[u] = n, !0);
        }, i = t;
        if (!t.includes(".")) {
            i === "segments" || i === "count" ? a[i] = Math.max(0, Math.round(n)) : a[i] = n;
            return;
        }
        const l = t.split(".");
        if (!s(a, l)) throw new k(`binding '${r}:${t}' — field path not valid on op type '${String(a.type)}'`);
    }
    function ce(e) {
        return new Map;
    }
    function le() {
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
    function ue(e) {
        return e.translate.x === 0 && e.translate.y === 0 && e.translate.z === 0 && e.rotate.x === 0 && e.rotate.y === 0 && e.rotate.z === 0 && e.scale.x === 1 && e.scale.y === 1 && e.scale.z === 1;
    }
    function C(e, r, t) {
        const n = le();
        let o = e;
        for(;;){
            const a = r[String(o)];
            if (!a) return null;
            const s = t(a.op);
            if (s !== null) return {
                value: s,
                node: o,
                transform: n
            };
            const i = a.op;
            if (i.type === "Translate") n.translate = i.offset, o = i.child;
            else if (i.type === "Rotate") n.rotate = i.angles, o = i.child;
            else if (i.type === "Scale") n.scale = i.factor, o = i.child;
            else return null;
        }
    }
    function V(e) {
        return e.type === "SheetMetalBaseFlangeRect" || e.type === "SheetMetalBaseFlangePolygon" || e.type === "SheetMetalEdgeFlange" || e.type === "SheetMetalHem" || e.type === "SheetMetalJog" || e.type === "SheetMetalBendRelief";
    }
    function L(e) {
        return !e || e.length === 0 ? {} : {
            engravings: e.map((r)=>r.type === "Polyline" ? {
                    type: "Polyline",
                    points: r.points.map((t)=>[
                            t.x,
                            t.y
                        ])
                } : {
                    type: "Text",
                    text: r.text,
                    x: r.x,
                    y: r.y,
                    height: r.height,
                    angle: r.angle
                })
        };
    }
    function fe(e, r) {
        const t = r[String(e)];
        if (!t || !V(t.op)) return null;
        const n = [];
        let o = null, a = t;
        for(; a;){
            const s = a.op;
            if (s.type === "SheetMetalBaseFlangeRect") {
                n.push({
                    type: "BaseFlangeRect",
                    width: s.width,
                    depth: s.depth,
                    thickness: s.thickness,
                    material: s.material,
                    ...s.shop_profile !== void 0 ? {
                        shopProfile: s.shop_profile
                    } : {},
                    ...L(s.engravings)
                }), o = s.material;
                break;
            } else if (s.type === "SheetMetalBaseFlangePolygon") {
                n.push({
                    type: "BaseFlangePolygon",
                    outline: s.outline.map((i)=>[
                            i.x,
                            i.y
                        ]),
                    holes: s.holes?.map((i)=>i.map((l)=>[
                                l.x,
                                l.y
                            ])),
                    thickness: s.thickness,
                    material: s.material,
                    ...s.shop_profile !== void 0 ? {
                        shopProfile: s.shop_profile
                    } : {},
                    ...L(s.engravings)
                }), o = s.material;
                break;
            } else if (s.type === "SheetMetalEdgeFlange") n.push({
                type: "EdgeFlange",
                panelId: s.panel_id,
                edgeIndex: s.edge_index,
                length: s.length,
                angle: s.angle,
                ...s.radius !== void 0 ? {
                    radius: s.radius
                } : {},
                direction: s.direction,
                manualK: s.manual_k
            }), a = r[String(s.parent)];
            else if (s.type === "SheetMetalHem") n.push({
                type: "Hem",
                panelId: s.panel_id,
                edgeIndex: s.edge_index,
                kind: s.kind ?? "Closed",
                length: s.length,
                gap: s.gap ?? 0,
                direction: s.direction
            }), a = r[String(s.parent)];
            else if (s.type === "SheetMetalJog") n.push({
                type: "Jog",
                panelId: s.panel_id,
                edgeIndex: s.edge_index,
                offset: s.offset,
                length: s.length,
                ...s.radius !== void 0 ? {
                    radius: s.radius
                } : {},
                direction: s.direction
            }), a = r[String(s.parent)];
            else if (s.type === "SheetMetalBendRelief") n.push({
                type: "BendRelief",
                ...s.width !== void 0 ? {
                    width: s.width
                } : {},
                ...s.depth !== void 0 ? {
                    depth: s.depth
                } : {}
            }), a = r[String(s.parent)];
            else return null;
        }
        return o === null ? null : n.reverse();
    }
    function he(e, r) {
        const t = C(e, r, (n)=>V(n) ? n : null);
        return t ? {
            root: t.node,
            transform: t.transform
        } : null;
    }
    function de(e, r) {
        if (!r.evaluateSheetMetalChain) throw new Error("kernel.evaluateSheetMetalChain not available — rebuild @vcad/kernel-wasm");
        const t = r.evaluateSheetMetalChain(JSON.stringify(e)), n = JSON.parse(t);
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
    function $(e) {
        return {
            positions: new Float32Array(e.positions),
            indices: new Uint32Array(e.indices),
            normals: e.normals ? new Float32Array(e.normals) : void 0,
            faceKinds: e.faceKinds ? new Uint8Array(e.faceKinds) : void 0
        };
    }
    function me(e, r, t = {}) {
        if (e = ie(e).doc, e = we(e, r), r.evaluateDocument) try {
            const o = JSON.stringify(e), a = r.evaluateDocument(o, t.skipClashDetection ?? !1), s = e.roots.filter((c)=>c.visible !== !1), i = [], l = a.parts.map((c, d)=>{
                if (c.mesh.positions.length === 0 && d < s.length) {
                    const h = j(s[d].root, e.nodes);
                    if (h) {
                        const f = K(h.pattern);
                        return {
                            mesh: N(f, h.transform),
                            material: c.material
                        };
                    }
                    try {
                        const f = U(s[d].root, e.nodes, r);
                        if (f) return {
                            ...f,
                            material: c.material
                        };
                    } catch (f) {
                        const u = f instanceof Error ? f.message : String(f);
                        return i.push({
                            scope: `root[${d}]`,
                            node_id: s[d].root,
                            error: u
                        }), console.warn(`[ENGINE] sheet-metal eval failed at root[${d}] (node ${s[d].root}): ${u}`), {
                            mesh: $(c.mesh),
                            material: c.material
                        };
                    }
                }
                return {
                    mesh: $(c.mesh),
                    material: c.material
                };
            });
            if (a.failures && a.failures.length > 0) for (const c of a.failures)console.warn(`[ENGINE] feature eval failed at ${c.scope} (node ${c.node_id}): ${c.error}`);
            return {
                parts: l,
                partDefs: a.partDefs?.map((c)=>({
                        id: c.id,
                        mesh: $(c.mesh)
                    })),
                instances: a.instances?.map((c)=>({
                        instanceId: c.instance_id,
                        partDefId: c.part_def_id,
                        name: c.name,
                        mesh: $(c.mesh),
                        material: c.material,
                        transform: c.transform
                    })),
                clashes: a.clashes.map($),
                failures: i.length > 0 ? [
                    ...a.failures ?? [],
                    ...i
                ] : a.failures
            };
        } catch (o) {
            console.warn("[ENGINE] WASM evaluateDocument failed, falling back to TS:", o);
        }
        return ye(e, r, t);
    }
    function H(e) {
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
    function O(e) {
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
            segments: e.segments.map(H),
            ...e.holes && e.holes.length > 0 ? {
                holes: e.holes.map((r)=>r.map(H))
            } : {}
        };
    }
    function W(e) {
        const r = e.getMesh(), t = new Float32Array(r.positions), n = new Uint32Array(r.indices), o = t.length / 3;
        let a = !1;
        for(let s = 0; s < n.length; s++)if (n[s] >= o) {
            a = !0;
            break;
        }
        if (a) {
            const s = [];
            for(let i = 0; i < n.length; i += 3){
                const l = n[i], c = n[i + 1], d = n[i + 2];
                l < o && c < o && d < o && s.push(l, c, d);
            }
            return {
                positions: t,
                indices: new Uint32Array(s),
                normals: r.normals ? new Float32Array(r.normals) : void 0
            };
        }
        return {
            positions: t,
            indices: n,
            normals: r.normals ? new Float32Array(r.normals) : void 0
        };
    }
    function pe(e, r) {
        const t = C(e, r, (n)=>n.type === "ImportedMesh" ? n : null);
        return t ? {
            mesh: t.value,
            transform: t.transform
        } : null;
    }
    function j(e, r) {
        const t = C(e, r, (n)=>n.type === "EmbroideryPattern" ? n : null);
        return t ? {
            pattern: t.value,
            transform: t.transform
        } : null;
    }
    function U(e, r, t) {
        const n = he(e, r);
        if (!n) return null;
        const o = fe(n.root, r);
        if (!o) return null;
        const { mesh: a, sheetMetal: s } = de(o, t);
        return {
            mesh: ue(n.transform) ? a : N(a, n.transform),
            sheetMetal: s
        };
    }
    function K(e) {
        const t = [], n = [], o = [];
        for (const a of e.design.stitch_groups){
            const s = e.design.threads[a.thread_index], i = s ? s.color[0] / 255 : .5, l = s ? s.color[1] / 255 : .5, c = s ? s.color[2] / 255 : .5, d = a.stitches;
            for(let h = 0; h < d.length - 1; h++){
                const [f, u] = d[h], [m, p] = d[h + 1], w = -u, y = -p, g = m - f, b = y - w, S = Math.sqrt(g * g + b * b);
                if (S < 1e-6) continue;
                const v = -b / S * .15, E = g / S * .15, _ = t.length / 3;
                t.push(f + v, w + E, 0), t.push(f - v, w - E, 0), t.push(m - v, y - E, 0), t.push(m + v, y + E, 0), o.push(i, l, c, i, l, c, i, l, c, i, l, c), n.push(_, _ + 1, _ + 2), n.push(_, _ + 2, _ + 3);
            }
        }
        return {
            positions: new Float32Array(t),
            indices: new Uint32Array(n),
            colors: new Float32Array(o)
        };
    }
    function N(e, r) {
        const { translate: t, rotate: n, scale: o } = r, a = new Float32Array(e.positions.length), s = n.x * Math.PI / 180, i = n.y * Math.PI / 180, l = n.z * Math.PI / 180, c = Math.cos(s), d = Math.sin(s), h = Math.cos(i), f = Math.sin(i), u = Math.cos(l), m = Math.sin(l), p = h * u, w = d * f * u - c * m, y = c * f * u + d * m, g = h * m, b = d * f * m + c * u, S = c * f * m - d * u, v = -f, E = d * h, _ = c * h;
        for(let M = 0; M < e.positions.length; M += 3){
            const A = e.positions[M] * o.x, D = e.positions[M + 1] * o.y, I = e.positions[M + 2] * o.z, Z = p * A + w * D + y * I, Q = g * A + b * D + S * I, X = v * A + E * D + _ * I;
            a[M] = Z + t.x, a[M + 1] = Q + t.y, a[M + 2] = X + t.z;
        }
        let P = e.normals;
        if (e.normals) {
            P = new Float32Array(e.normals.length);
            for(let M = 0; M < e.normals.length; M += 3){
                const A = e.normals[M], D = e.normals[M + 1], I = e.normals[M + 2];
                P[M] = p * A + w * D + y * I, P[M + 1] = g * A + b * D + S * I, P[M + 2] = v * A + E * D + _ * I;
            }
        }
        return {
            positions: a,
            indices: e.indices,
            normals: P,
            colors: e.colors
        };
    }
    function ye(e, r, t = {}) {
        const { Solid: n } = r, o = new Map, a = e.roots.filter((u)=>u.visible !== !1), s = [], i = [], l = ()=>({
                positions: new Float32Array(0),
                indices: new Uint32Array(0)
            }), c = a.map((u, m)=>{
            const p = j(u.root, e.nodes);
            if (p) {
                const y = K(p.pattern), g = N(y, p.transform);
                return s.push(n.empty()), {
                    mesh: g,
                    material: u.material
                };
            }
            const w = pe(u.root, e.nodes);
            if (w) {
                const y = {
                    positions: new Float32Array(w.mesh.positions),
                    indices: new Uint32Array(w.mesh.indices),
                    normals: w.mesh.normals ? new Float32Array(w.mesh.normals) : void 0
                }, g = N(y, w.transform);
                return s.push(n.empty()), {
                    mesh: g,
                    material: u.material
                };
            }
            try {
                const y = U(u.root, e.nodes, r);
                if (y) return s.push(n.empty()), {
                    ...y,
                    material: u.material
                };
            } catch (y) {
                const g = y instanceof Error ? y.message : String(y);
                return i.push({
                    scope: `root[${m}]`,
                    node_id: u.root,
                    error: g
                }), console.warn(`[ENGINE] sheet-metal eval failed at root[${m}] (node ${u.root}): ${g}`), s.push(n.empty()), {
                    mesh: l(),
                    material: u.material
                };
            }
            try {
                const y = x(u.root, e.nodes, n, o, 0), g = W(y);
                return s.push(y), {
                    mesh: g,
                    material: u.material,
                    solid: y
                };
            } catch (y) {
                const g = y instanceof Error ? y.message : String(y);
                return i.push({
                    scope: `root[${m}]`,
                    node_id: u.root,
                    error: g
                }), console.warn(`[ENGINE] feature eval failed at root[${m}] (node ${u.root}): ${g}`), s.push(n.empty()), {
                    mesh: l(),
                    material: u.material
                };
            }
        });
        let d, h;
        if (e.partDefs && Object.keys(e.partDefs).length > 0 && e.instances && e.instances.length > 0) {
            const u = ce(), m = new Map;
            d = [];
            for (const [p, w] of Object.entries(e.partDefs))try {
                const y = x(w.root, e.nodes, n, o, 0), g = W(y);
                m.set(p, g), d.push({
                    id: p,
                    mesh: g,
                    solid: y
                });
            } catch (y) {
                const g = y instanceof Error ? y.message : String(y);
                i.push({
                    scope: `partDef[${JSON.stringify(p)}]`,
                    node_id: w.root,
                    error: g
                }), console.warn(`[ENGINE] partDef eval failed at ${p} (node ${w.root}): ${g}`);
                const b = l();
                m.set(p, b), d.push({
                    id: p,
                    mesh: b
                });
            }
            h = [];
            for (const p of e.instances){
                const w = m.get(p.partDefId);
                if (!w) continue;
                const y = u.get(p.id) ?? p.transform, g = e.partDefs[p.partDefId], b = p.material ?? g?.defaultMaterial ?? "default";
                h.push({
                    instanceId: p.id,
                    partDefId: p.partDefId,
                    name: p.name,
                    mesh: w,
                    material: b,
                    transform: y
                });
            }
        }
        const f = [];
        if (!t.skipClashDetection) for(let u = 0; u < s.length; u++)for(let m = u + 1; m < s.length; m++){
            const p = s[u].intersection(s[m]);
            if (!p.isEmpty()) {
                const w = p.getMesh();
                w.positions.length > 0 && f.push({
                    positions: new Float32Array(w.positions),
                    indices: new Uint32Array(w.indices),
                    normals: w.normals ? new Float32Array(w.normals) : void 0
                });
            }
        }
        return {
            parts: c,
            partDefs: d,
            instances: h,
            clashes: f,
            failures: i.length > 0 ? i : void 0
        };
    }
    function x(e, r, t, n, o = 0) {
        const a = n.get(e);
        if (a) return a;
        const s = r[String(e)];
        if (!s) throw new Error(`Missing node: ${e}`);
        const i = ge(s.op, r, t, n, o);
        return n.set(e, i), i;
    }
    function ge(e, r, t, n, o = 0) {
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
                return x(e.child, r, t, n, o + 1).mirror(e.plane_origin.x, e.plane_origin.y, e.plane_origin.z, e.plane_normal.x, e.plane_normal.y, e.plane_normal.z);
            case "Empty":
                return t.empty();
            case "Union":
                {
                    const a = x(e.left, r, t, n, o + 1), s = x(e.right, r, t, n, o + 1);
                    return a.union(s);
                }
            case "Difference":
                {
                    const a = x(e.left, r, t, n, o + 1), s = x(e.right, r, t, n, o + 1);
                    return a.difference(s);
                }
            case "Intersection":
                {
                    const a = x(e.left, r, t, n, o + 1), s = x(e.right, r, t, n, o + 1);
                    return a.intersection(s);
                }
            case "Translate":
                return x(e.child, r, t, n, o + 1).translate(e.offset.x, e.offset.y, e.offset.z);
            case "Rotate":
                return x(e.child, r, t, n, o + 1).rotate(e.angles.x, e.angles.y, e.angles.z);
            case "Scale":
                return x(e.child, r, t, n, o + 1).scale(e.factor.x, e.factor.y, e.factor.z);
            case "Sketch2D":
                return t.empty();
            case "Extrude":
                {
                    const a = r[String(e.sketch)];
                    if (!a) throw new Error(`Extrude references missing node: ${e.sketch}`);
                    const s = new Float64Array([
                        e.direction.x,
                        e.direction.y,
                        e.direction.z
                    ]);
                    if (a.op.type === "Text2D") {
                        const h = a.op, f = new Float64Array([
                            h.origin.x,
                            h.origin.y,
                            h.origin.z
                        ]), u = new Float64Array([
                            h.x_dir.x,
                            h.x_dir.y,
                            h.x_dir.z
                        ]), m = new Float64Array([
                            h.y_dir.x,
                            h.y_dir.y,
                            h.y_dir.z
                        ]);
                        return t.textExtrude(h.text, f, u, m, s, h.height, h.font || void 0, h.alignment || void 0, h.letter_spacing ?? void 0, h.line_spacing ?? void 0);
                    }
                    if (a.op.type !== "Sketch2D") throw new Error(`Extrude references invalid sketch node: ${e.sketch} (type=${a.op.type})`);
                    const i = O(a.op), l = JSON.stringify(i), c = e.twist_angle !== void 0 && Math.abs(e.twist_angle) > 1e-12, d = e.scale_end !== void 0 && Math.abs(e.scale_end - 1) > 1e-12;
                    return c || d ? t.extrudeWithOptions(l, s, e.twist_angle ?? 0, e.scale_end ?? 1) : t.extrude(l, s);
                }
            case "Revolve":
                {
                    const a = r[String(e.sketch)];
                    if (!a || a.op.type !== "Sketch2D") throw new Error(`Revolve references invalid sketch node: ${e.sketch}`);
                    const s = O(a.op), i = JSON.stringify(s), l = new Float64Array([
                        e.axis_origin.x,
                        e.axis_origin.y,
                        e.axis_origin.z
                    ]), c = new Float64Array([
                        e.axis_dir.x,
                        e.axis_dir.y,
                        e.axis_dir.z
                    ]);
                    return t.revolve(i, l, c, e.angle_deg);
                }
            case "LinearPattern":
                return x(e.child, r, t, n, o + 1).linearPattern(e.direction.x, e.direction.y, e.direction.z, e.count, e.spacing);
            case "CircularPattern":
                return x(e.child, r, t, n, o + 1).circularPattern(e.axis_origin.x, e.axis_origin.y, e.axis_origin.z, e.axis_dir.x, e.axis_dir.y, e.axis_dir.z, e.count, e.angle_deg);
            case "Shell":
                return x(e.child, r, t, n, o + 1).shell(e.thickness);
            case "Fillet":
                return x(e.child, r, t, n, o + 1).fillet(e.radius);
            case "Chamfer":
                return x(e.child, r, t, n, o + 1).chamfer(e.distance);
            case "EdgeBlend":
                return x(e.child, r, t, n, o + 1).edgeBlend(JSON.stringify({
                    edges: e.edges,
                    profile: e.profile
                }));
            case "Sweep":
                {
                    const a = r[String(e.sketch)];
                    if (!a || a.op.type !== "Sketch2D") throw new Error(`Sweep references invalid sketch node: ${e.sketch}`);
                    const s = O(a.op), i = JSON.stringify(s);
                    if (e.path.type === "Line") {
                        const l = new Float64Array([
                            e.path.start.x,
                            e.path.start.y,
                            e.path.start.z
                        ]), c = new Float64Array([
                            e.path.end.x,
                            e.path.end.y,
                            e.path.end.z
                        ]);
                        return t.sweepLine(i, l, c, e.twist_angle, e.scale_start, e.scale_end, e.orientation);
                    } else return t.sweepHelix(i, e.path.radius, e.path.pitch, e.path.height, e.path.turns, e.twist_angle, e.scale_start, e.scale_end, e.path_segments, e.arc_segments, e.orientation);
                }
            case "Loft":
                {
                    const a = e.sketches.map((s)=>{
                        const i = r[String(s)];
                        if (!i || i.op.type !== "Sketch2D") throw new Error(`Loft references invalid sketch node: ${s}`);
                        return O(i.op);
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
                    const a = e.board.outline, s = a?.vertices ?? [];
                    if (s.length < 3) return t.empty();
                    const i = a.thickness, l = s.map((d, h)=>{
                        const f = s[(h + 1) % s.length];
                        return {
                            type: "Line",
                            start: [
                                d.x,
                                d.y
                            ],
                            end: [
                                f.x,
                                f.y
                            ]
                        };
                    }), c = {
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
                        segments: l
                    };
                    return t.extrude(JSON.stringify(c), new Float64Array([
                        0,
                        0,
                        i
                    ])).translate(0, 0, -i / 2);
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
    function we(e, r) {
        const t = r.buildPart;
        if (typeof t != "function" || !Object.values(e.nodes).some((i)=>i.op.type === "PartInstance")) return e;
        const o = JSON.parse(JSON.stringify(e)), a = Object.keys(o.nodes).map(Number);
        let s = (a.length > 0 ? Math.max(...a) : 0) + 1;
        for (const [i, l] of Object.entries(o.nodes)){
            if (l.op.type !== "PartInstance") continue;
            const c = l.op;
            let d;
            try {
                d = t(c.path, JSON.stringify(c.params ?? {}));
            } catch (p) {
                console.warn(`[parts] failed to build ${c.path}:`, p), l.op = {
                    type: "Empty"
                };
                continue;
            }
            let h;
            try {
                h = JSON.parse(d);
            } catch (p) {
                console.warn(`[parts] invalid sub-doc from ${c.path}:`, p), l.op = {
                    type: "Empty"
                };
                continue;
            }
            const f = h.roots[0];
            if (!f) {
                console.warn(`[parts] ${c.path} produced no scene root`), l.op = {
                    type: "Empty"
                };
                continue;
            }
            const u = new Map;
            for (const p of Object.keys(h.nodes).map(Number))u.set(p, s++);
            for (const [p, w] of Object.entries(h.nodes)){
                const y = Number(p), g = u.get(y), b = xe(w, u);
                b.id = g, o.nodes[String(g)] = b;
            }
            const m = u.get(f.root);
            if (m === void 0) {
                console.warn(`[parts] ${c.path} root id not in remap table`), l.op = {
                    type: "Empty"
                };
                continue;
            }
            l.op = {
                type: "Translate",
                child: m,
                offset: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            };
        }
        return o;
    }
    function xe(e, r) {
        const t = (a)=>r.get(a) ?? a, n = e.op;
        let o = n;
        switch(n.type){
            case "Union":
            case "Difference":
            case "Intersection":
                o = {
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
                o = {
                    ...n,
                    child: t(n.child)
                };
                break;
            case "Extrude":
            case "Revolve":
            case "Sweep":
                o = {
                    ...n,
                    sketch: t(n.sketch)
                };
                break;
            case "Loft":
                o = {
                    ...n,
                    sketches: n.sketches.map(t)
                };
                break;
            default:
                o = n;
        }
        return {
            ...e,
            op: o
        };
    }
    let B = null, R = null, Y = "ts";
    function Me(e) {
        const r = [], t = (n)=>{
            r.push(n.positions.buffer), r.push(n.indices.buffer), n.normals && r.push(n.normals.buffer), n.colors && r.push(n.colors.buffer), n.faceKinds && r.push(n.faceKinds.buffer);
        };
        for (const n of e.parts)t(n.mesh);
        if (e.partDefs) for (const n of e.partDefs)t(n.mesh);
        if (e.instances) for (const n of e.instances)t(n.mesh);
        for (const n of e.clashes)t(n);
        return r;
    }
    function be(e) {
        const r = (t)=>({
                positions: t.positions instanceof Float32Array ? t.positions : new Float32Array(t.positions),
                indices: t.indices instanceof Uint32Array ? t.indices : new Uint32Array(t.indices),
                normals: t.normals ? t.normals instanceof Float32Array ? t.normals : new Float32Array(t.normals) : void 0,
                faceKinds: t.faceKinds ? t.faceKinds instanceof Uint8Array ? t.faceKinds : new Uint8Array(t.faceKinds) : void 0
            });
        return {
            parts: e.parts.map((t)=>({
                    mesh: r(t.mesh),
                    material: t.material
                })),
            partDefs: e.partDefs?.map((t)=>({
                    id: t.id,
                    mesh: r(t.mesh)
                })),
            instances: e.instances?.map((t)=>({
                    instanceId: t.instance_id,
                    partDefId: t.part_def_id,
                    name: t.name,
                    mesh: r(t.mesh),
                    material: t.material,
                    transform: t.transform
                })),
            clashes: e.clashes.map(r),
            failures: e.failures,
            timing: e.timing
        };
    }
    function ke(e, r) {
        const t = r.roots.filter((a)=>a.visible !== !1);
        let n = !1;
        const o = e.parts.map((a, s)=>{
            if (a.mesh.positions.length === 0 && s < t.length) {
                const i = j(t[s].root, r.nodes);
                if (i) {
                    n = !0;
                    const l = K(i.pattern);
                    return {
                        mesh: N(l, i.transform),
                        material: a.material
                    };
                }
            }
            return a;
        });
        return n ? {
            ...e,
            parts: o
        } : e;
    }
    function _e(e, r) {
        const t = r.roots.filter((a)=>a.visible !== !1);
        let n = !1;
        const o = e.parts.map((a, s)=>{
            if (a.mesh.positions.length === 0 && s < t.length) try {
                const i = U(t[s].root, r.nodes, B);
                if (i) return n = !0, {
                    ...i,
                    material: a.material
                };
            } catch (i) {
                console.warn(`[worker] sheet-metal eval failed at root[${s}]:`, i);
            }
            return a;
        });
        return n ? {
            ...e,
            parts: o
        } : e;
    }
    function ve(e, r) {
        if (Y === "wasm" && R) try {
            const n = R(e, r), o = be(n), a = JSON.parse(e);
            return _e(ke(o, a), a);
        } catch  {}
        const t = JSON.parse(e);
        return me(t, B, {
            skipClashDetection: r
        });
    }
    self.onmessage = async (e)=>{
        const { type: r } = e.data;
        if (r === "init") {
            try {
                const t = await import("./vcad_kernel_wasm-DDvOIV57.js"), n = e.data.module;
                n ? await t.default({
                    module_or_path: n
                }) : await t.default(), B = {
                    Solid: t.Solid,
                    evaluateDocument: t.evaluateDocument,
                    evaluateSheetMetalChain: t.evaluateSheetMetalChain
                }, R = t.evaluateDocument, Y = R ? "wasm" : "ts", self.postMessage({
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
        if (r === "evaluate") {
            const { id: t, docJson: n, skipClashDetection: o } = e.data;
            if (!B) {
                self.postMessage({
                    type: "error",
                    id: t,
                    message: "Worker not initialized"
                });
                return;
            }
            try {
                const a = performance.now(), s = ve(n, o ?? !1), i = performance.now() - a, l = Me(s);
                self.postMessage({
                    type: "result",
                    id: t,
                    scene: s,
                    workerTotalMs: i
                }, l);
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
