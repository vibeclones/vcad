(async ()=>{
    let i = null;
    const o = new Map;
    let h = 1;
    function w(s) {
        if (!i) throw new Error("slicer wasm not initialized");
        const e = new i.SlicerSettings;
        return e.layer_height = s.layerHeight, e.first_layer_height = s.firstLayerHeight, e.nozzle_diameter = s.nozzleDiameter, e.line_width = s.lineWidth, e.wall_count = s.wallCount, e.infill_density = s.infillDensity, e.infill_pattern = s.infillPattern, e.support_enabled = s.supportEnabled, e.support_angle = s.supportAngle, e;
    }
    function d(s) {
        return {
            z: s.z,
            index: s.index,
            outerPerimeters: s.outer_perimeters,
            innerPerimeters: s.inner_perimeters,
            infill: s.infill
        };
    }
    function r(s, e) {
        e && e.length > 0 ? self.postMessage(s, e) : self.postMessage(s);
    }
    self.onmessage = async (s)=>{
        const e = s.data;
        if (e.type === "init") {
            try {
                const t = await import("./vcad_kernel_wasm-CLhVc_9E.js");
                if (await t.default(), typeof t.isSlicerAvailable != "function" || !t.isSlicerAvailable()) throw new Error("slicer is not enabled in this WASM build");
                i = t, r({
                    type: "ready"
                });
            } catch (t) {
                r({
                    type: "result",
                    id: -1,
                    ok: !1,
                    error: t instanceof Error ? t.message : String(t)
                });
            }
            return;
        }
        if (!i) {
            "id" in e && r({
                type: "result",
                id: e.id,
                ok: !1,
                error: "slicer worker not initialized"
            });
            return;
        }
        try {
            switch(e.type){
                case "slice":
                    {
                        const t = w(e.settings), n = (g, y, p)=>{
                            self.postMessage({
                                type: "progress",
                                id: e.id,
                                stage: g,
                                current: y,
                                total: p
                            });
                        }, l = typeof i.sliceMeshWithProgress == "function" ? i.sliceMeshWithProgress(e.vertices, e.indices, t, n) : i.sliceMesh(e.vertices, e.indices, t), a = h++;
                        o.set(a, l);
                        const c = l.layerCount, u = l.statsJson(), f = c > 0 ? d(l.getLayerPreview(0)) : null;
                        r({
                            type: "result",
                            id: e.id,
                            ok: !0,
                            payload: {
                                sliceHandle: a,
                                layerCount: c,
                                statsJson: u,
                                firstPreview: f
                            }
                        });
                        return;
                    }
                case "getLayerPreview":
                    {
                        const t = o.get(e.sliceHandle);
                        if (!t) throw new Error(`unknown slice handle ${e.sliceHandle}`);
                        const n = d(t.getLayerPreview(e.index));
                        r({
                            type: "result",
                            id: e.id,
                            ok: !0,
                            payload: n
                        });
                        return;
                    }
                case "generateGcode":
                    {
                        const t = o.get(e.sliceHandle);
                        if (!t) throw new Error(`unknown slice handle ${e.sliceHandle}`);
                        const n = i.generateGcode(t, e.profile, e.printTemp, e.bedTemp);
                        r({
                            type: "result",
                            id: e.id,
                            ok: !0,
                            payload: {
                                gcode: n
                            }
                        });
                        return;
                    }
                case "generate3mfWithGcode":
                    {
                        const t = i.generate3mfWithGcode(e.name, e.vertices, e.indices, e.gcode, e.settingsJson);
                        r({
                            type: "result",
                            id: e.id,
                            ok: !0,
                            payload: {
                                bytes: t
                            }
                        }, [
                            t.buffer
                        ]);
                        return;
                    }
                case "generate3mf":
                    {
                        const t = i.generate3mf(e.name, e.vertices, e.indices, e.settingsJson);
                        r({
                            type: "result",
                            id: e.id,
                            ok: !0,
                            payload: {
                                bytes: t
                            }
                        }, [
                            t.buffer
                        ]);
                        return;
                    }
                case "release":
                    {
                        o.delete(e.sliceHandle), r({
                            type: "result",
                            id: e.id,
                            ok: !0,
                            payload: null
                        });
                        return;
                    }
            }
        } catch (t) {
            r({
                type: "result",
                id: "id" in e ? e.id : -1,
                ok: !1,
                error: t instanceof Error ? t.message : String(t)
            });
        }
    };
})();
