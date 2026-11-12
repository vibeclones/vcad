(async ()=>{
    let e = null;
    const t = new Map;
    let n = 1;
    function r(t) {
        if (!e) throw Error(`slicer wasm not initialized`);
        let n = new e.SlicerSettings;
        return n.layer_height = t.layerHeight, n.first_layer_height = t.firstLayerHeight, n.nozzle_diameter = t.nozzleDiameter, n.line_width = t.lineWidth, n.wall_count = t.wallCount, n.infill_density = t.infillDensity, n.infill_pattern = t.infillPattern, n.support_enabled = t.supportEnabled, n.support_angle = t.supportAngle, n;
    }
    function i(e) {
        return {
            z: e.z,
            index: e.index,
            outerPerimeters: e.outer_perimeters,
            innerPerimeters: e.inner_perimeters,
            infill: e.infill
        };
    }
    function a(e, t) {
        t && t.length > 0 ? self.postMessage(e, t) : self.postMessage(e);
    }
    self.onmessage = async (o)=>{
        let s = o.data;
        if (s.type === `init`) try {
            let t = await import(`./vcad_kernel_wasm-DDyqSfrV.js`).then(async (m)=>{
                await m.__tla;
                return m;
            });
            if (await t.default(), typeof t.isSlicerAvailable != `function` || !t.isSlicerAvailable()) throw Error(`slicer is not enabled in this WASM build`);
            e = t, a({
                type: `ready`
            });
        } catch (e) {
            a({
                type: `result`,
                id: -1,
                ok: !1,
                error: e instanceof Error ? e.message : String(e)
            });
        }
        else if (!e) `id` in s && a({
            type: `result`,
            id: s.id,
            ok: !1,
            error: `slicer worker not initialized`
        });
        else try {
            switch(s.type){
                case `slice`:
                    {
                        let o = r(s.settings), c = typeof e.sliceMeshWithProgress == `function` ? e.sliceMeshWithProgress(s.vertices, s.indices, o, (e, t, n)=>{
                            self.postMessage({
                                type: `progress`,
                                id: s.id,
                                stage: e,
                                current: t,
                                total: n
                            });
                        }) : e.sliceMesh(s.vertices, s.indices, o), l = n++;
                        t.set(l, c);
                        let u = c.layerCount, d = c.statsJson(), f = u > 0 ? i(c.getLayerPreview(0)) : null;
                        a({
                            type: `result`,
                            id: s.id,
                            ok: !0,
                            payload: {
                                sliceHandle: l,
                                layerCount: u,
                                statsJson: d,
                                firstPreview: f
                            }
                        });
                        return;
                    }
                case `getLayerPreview`:
                    {
                        let e = t.get(s.sliceHandle);
                        if (!e) throw Error(`unknown slice handle ${s.sliceHandle}`);
                        let n = i(e.getLayerPreview(s.index));
                        a({
                            type: `result`,
                            id: s.id,
                            ok: !0,
                            payload: n
                        });
                        return;
                    }
                case `generateGcode`:
                    {
                        let n = t.get(s.sliceHandle);
                        if (!n) throw Error(`unknown slice handle ${s.sliceHandle}`);
                        let r = e.generateGcode(n, s.profile, s.printTemp, s.bedTemp);
                        a({
                            type: `result`,
                            id: s.id,
                            ok: !0,
                            payload: {
                                gcode: r
                            }
                        });
                        return;
                    }
                case `generate3mfWithGcode`:
                    {
                        let t = e.generate3mfWithGcode(s.name, s.vertices, s.indices, s.gcode, s.settingsJson);
                        a({
                            type: `result`,
                            id: s.id,
                            ok: !0,
                            payload: {
                                bytes: t
                            }
                        }, [
                            t.buffer
                        ]);
                        return;
                    }
                case `generate3mf`:
                    {
                        let t = e.generate3mf(s.name, s.vertices, s.indices, s.settingsJson);
                        a({
                            type: `result`,
                            id: s.id,
                            ok: !0,
                            payload: {
                                bytes: t
                            }
                        }, [
                            t.buffer
                        ]);
                        return;
                    }
                case `release`:
                    t.delete(s.sliceHandle), a({
                        type: `result`,
                        id: s.id,
                        ok: !0,
                        payload: null
                    });
                    return;
            }
        } catch (e) {
            a({
                type: `result`,
                id: `id` in s ? s.id : -1,
                ok: !1,
                error: e instanceof Error ? e.message : String(e)
            });
        }
    };
})();
