(async ()=>{
    function e(e) {
        let t = [], n = (e)=>{
            t.push(e.positions.buffer), t.push(e.indices.buffer), e.normals && t.push(e.normals.buffer), e.colors && t.push(e.colors.buffer), e.faceKinds && t.push(e.faceKinds.buffer);
        };
        for (let t of e.parts)n(t.mesh);
        if (e.partDefs) for (let t of e.partDefs)n(t.mesh);
        if (e.instances) for (let t of e.instances)n(t.mesh);
        for (let t of e.clashes)n(t);
        return t;
    }
    function t(e) {
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
    function n(e) {
        e.evaluator?.free?.(), e.evaluator = null;
    }
    function r(e, r) {
        try {
            let i, a, o;
            switch(r.op){
                case `init`:
                    n(e), e.engine?.free(), e.engine = r.replica !== void 0 && e.Engine.withReplica ? e.Engine.withReplica(r.replica) : new e.Engine, i = e.engine.stateEnvelope();
                    break;
                case `load`:
                    n(e), e.engine?.free(), e.engine = e.Engine.load(r.bytes), i = e.engine.stateEnvelope();
                    break;
                default:
                    {
                        let n = e.engine;
                        if (!n) return {
                            ok: !1,
                            message: `engine not initialized`
                        };
                        if ((r.op === `apply` || r.op === `applyTool`) && r.expectHash !== void 0 && n.stateHash() !== r.expectHash) return {
                            ok: !0,
                            stale: !0,
                            hash: n.stateHash(),
                            canUndo: n.can_undo(),
                            canRedo: n.can_redo()
                        };
                        if (r.op === `apply`) i = n.applyDelta(JSON.stringify(r.command));
                        else if (r.op === `applyTool`) i = n.applyToolDelta(r.tool, JSON.stringify(r.args));
                        else if (r.op === `state`) i = n.stateEnvelope();
                        else if (r.op === `evaluate`) {
                            if (!n.evaluateIncremental || !e.Evaluator) return {
                                ok: !1,
                                message: `engine host cannot evaluate (kernel too old)`
                            };
                            e.evaluator ??= new e.Evaluator;
                            let i = r.overlay ?? {}, a = Object.keys(i.parameters ?? {}).length > 0 || Object.keys(i.bindings ?? {}).length > 0;
                            o = t(n.evaluateIncremental(e.evaluator, a ? JSON.stringify(i) : ``, r.skipClashDetection ?? !1));
                        } else a = n.save();
                    }
            }
            let s = e.engine;
            return {
                ok: !0,
                envelope: i,
                bytes: a,
                scene: o,
                hash: s.stateHash(),
                canUndo: s.can_undo(),
                canRedo: s.can_redo()
            };
        } catch (e) {
            return {
                ok: !1,
                message: e instanceof Error ? e.message : String(e)
            };
        }
    }
    let i = null;
    function a() {
        return i ??= import(`./vcad_kernel_wasm-By62uti0.js`).then(async (m)=>{
            await m.__tla;
            return m;
        }).then(async (e)=>{
            await e.default();
            let t = e;
            return {
                Engine: t.WasmDocumentEngine,
                engine: null,
                Evaluator: t.IncrementalEvaluator
            };
        }), i;
    }
    self.onmessage = async (t)=>{
        let { id: n, req: i } = t.data;
        try {
            let t = r(await a(), i), o = t.ok && t.scene ? e(t.scene) : [];
            self.postMessage({
                id: n,
                response: t
            }, o);
        } catch (e) {
            self.postMessage({
                id: n,
                response: {
                    ok: !1,
                    message: `engine worker: ${String(e)}`
                }
            });
        }
    };
})();
