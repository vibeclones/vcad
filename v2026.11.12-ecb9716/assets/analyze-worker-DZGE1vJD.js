(async ()=>{
    let e = null, t = null;
    self.onmessage = async (n)=>{
        let { type: r, id: i } = n.data;
        if (r === `init`) try {
            let r = await import(`./vcad_kernel_wasm-DDyqSfrV.js`).then(async (m)=>{
                await m.__tla;
                return m;
            }), i = n.data.module;
            i ? await r.default({
                module_or_path: i
            }) : await r.default();
            let a = r;
            e = a.feaAnalyzeMesh, t = a.toleranceAnalyze, self.postMessage({
                type: `ready`
            });
        } catch (e) {
            self.postMessage({
                type: `error`,
                id: null,
                message: `WASM init failed: ${e}`
            });
        }
        else if (r === `fea`) {
            if (!e) {
                self.postMessage({
                    type: `error`,
                    id: i,
                    message: `Analyze worker not initialized`
                });
                return;
            }
            try {
                let { specJson: t, optionsJson: r, positions: a, indices: o } = n.data, s = e(t, r ?? ``, a instanceof Float32Array ? a : new Float32Array(a), o instanceof Uint32Array ? o : new Uint32Array(o));
                self.postMessage({
                    type: `result`,
                    id: i,
                    analysis: s
                });
            } catch (e) {
                self.postMessage({
                    type: `error`,
                    id: i,
                    message: String(e)
                });
            }
        } else if (r === `tolerance`) {
            if (!t) {
                self.postMessage({
                    type: `error`,
                    id: i,
                    message: `Analyze worker not initialized`
                });
                return;
            }
            try {
                let { specJson: e, paramsJson: r, optionsJson: a } = n.data, o = t(e, r ?? `{}`, a ?? `{}`);
                self.postMessage({
                    type: `result`,
                    id: i,
                    analysis: o
                });
            } catch (e) {
                self.postMessage({
                    type: `error`,
                    id: i,
                    message: String(e)
                });
            }
        }
    };
})();
