(async ()=>{
    function p(n) {
        const a = [], e = (s)=>{
            a.push(s.positions.buffer), a.push(s.indices.buffer), s.normals && a.push(s.normals.buffer), s.colors && a.push(s.colors.buffer), s.faceKinds && a.push(s.faceKinds.buffer);
        };
        for (const s of n.parts)e(s.mesh);
        if (n.partDefs) for (const s of n.partDefs)e(s.mesh);
        if (n.instances) for (const s of n.instances)e(s.mesh);
        for (const s of n.clashes)e(s);
        return a;
    }
    function u(n) {
        const a = (e)=>({
                positions: e.positions instanceof Float32Array ? e.positions : new Float32Array(e.positions),
                indices: e.indices instanceof Uint32Array ? e.indices : new Uint32Array(e.indices),
                normals: e.normals ? e.normals instanceof Float32Array ? e.normals : new Float32Array(e.normals) : void 0,
                faceKinds: e.faceKinds ? e.faceKinds instanceof Uint8Array ? e.faceKinds : new Uint8Array(e.faceKinds) : void 0
            });
        return {
            parts: n.parts.map((e)=>({
                    mesh: a(e.mesh),
                    material: e.material
                })),
            partDefs: n.partDefs?.map((e)=>({
                    id: e.id,
                    mesh: a(e.mesh)
                })),
            instances: n.instances?.map((e)=>({
                    instanceId: e.instance_id,
                    partDefId: e.part_def_id,
                    name: e.name,
                    mesh: a(e.mesh),
                    material: e.material,
                    transform: e.transform
                })),
            clashes: n.clashes.map(a),
            failures: n.failures,
            timing: n.timing
        };
    }
    function l(n) {
        n.evaluator?.free?.(), n.evaluator = null;
    }
    function d(n, a) {
        try {
            let e, s, i;
            switch(a.op){
                case "init":
                    l(n), n.engine?.free(), n.engine = a.replica !== void 0 && n.Engine.withReplica ? n.Engine.withReplica(a.replica) : new n.Engine, e = n.engine.stateEnvelope();
                    break;
                case "load":
                    l(n), n.engine?.free(), n.engine = n.Engine.load(a.bytes), e = n.engine.stateEnvelope();
                    break;
                default:
                    {
                        const t = n.engine;
                        if (!t) return {
                            ok: !1,
                            message: "engine not initialized"
                        };
                        if ((a.op === "apply" || a.op === "applyTool") && a.expectHash !== void 0 && t.stateHash() !== a.expectHash) return {
                            ok: !0,
                            stale: !0,
                            hash: t.stateHash(),
                            canUndo: t.can_undo(),
                            canRedo: t.can_redo()
                        };
                        if (a.op === "apply") e = t.applyDelta(JSON.stringify(a.command));
                        else if (a.op === "applyTool") e = t.applyToolDelta(a.tool, JSON.stringify(a.args));
                        else if (a.op === "state") e = t.stateEnvelope();
                        else if (a.op === "evaluate") {
                            if (!t.evaluateIncremental || !n.Evaluator) return {
                                ok: !1,
                                message: "engine host cannot evaluate (kernel too old)"
                            };
                            n.evaluator ??= new n.Evaluator;
                            const r = a.overlay ?? {}, f = Object.keys(r.parameters ?? {}).length > 0 || Object.keys(r.bindings ?? {}).length > 0;
                            i = u(t.evaluateIncremental(n.evaluator, f ? JSON.stringify(r) : "", a.skipClashDetection ?? !1));
                        } else s = t.save();
                    }
            }
            const o = n.engine;
            return {
                ok: !0,
                envelope: e,
                bytes: s,
                scene: i,
                hash: o.stateHash(),
                canUndo: o.can_undo(),
                canRedo: o.can_redo()
            };
        } catch (e) {
            return {
                ok: !1,
                message: e instanceof Error ? e.message : String(e)
            };
        }
    }
    let c = null;
    function g() {
        return c ??= import("./vcad_kernel_wasm-8_iZkqvL.js").then(async (n)=>{
            await n.default();
            const a = n;
            return {
                Engine: a.WasmDocumentEngine,
                engine: null,
                Evaluator: a.IncrementalEvaluator
            };
        }), c;
    }
    self.onmessage = async (n)=>{
        const { id: a, req: e } = n.data;
        try {
            const s = await g(), i = d(s, e), o = i.ok && i.scene ? p(i.scene) : [];
            self.postMessage({
                id: a,
                response: i
            }, o);
        } catch (s) {
            self.postMessage({
                id: a,
                response: {
                    ok: !1,
                    message: `engine worker: ${String(s)}`
                }
            });
        }
    };
})();
