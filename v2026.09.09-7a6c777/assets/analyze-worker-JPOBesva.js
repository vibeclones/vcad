(async ()=>{
    let l = null, i = null;
    self.onmessage = async (n)=>{
        const { type: o, id: t } = n.data;
        if (o === "init") {
            try {
                const e = await import("./vcad_kernel_wasm-CV6o58Wl.js"), a = n.data.module;
                a ? await e.default({
                    module_or_path: a
                }) : await e.default();
                const s = e;
                l = s.feaAnalyzeMesh, i = s.toleranceAnalyze, self.postMessage({
                    type: "ready"
                });
            } catch (e) {
                self.postMessage({
                    type: "error",
                    id: null,
                    message: `WASM init failed: ${e}`
                });
            }
            return;
        }
        if (o === "fea") {
            if (!l) {
                self.postMessage({
                    type: "error",
                    id: t,
                    message: "Analyze worker not initialized"
                });
                return;
            }
            try {
                const { specJson: e, optionsJson: a, positions: s, indices: r } = n.data, p = l(e, a ?? "", s instanceof Float32Array ? s : new Float32Array(s), r instanceof Uint32Array ? r : new Uint32Array(r));
                self.postMessage({
                    type: "result",
                    id: t,
                    analysis: p
                });
            } catch (e) {
                self.postMessage({
                    type: "error",
                    id: t,
                    message: String(e)
                });
            }
            return;
        }
        if (o === "tolerance") {
            if (!i) {
                self.postMessage({
                    type: "error",
                    id: t,
                    message: "Analyze worker not initialized"
                });
                return;
            }
            try {
                const { specJson: e, paramsJson: a, optionsJson: s } = n.data, r = i(e, a ?? "{}", s ?? "{}");
                self.postMessage({
                    type: "result",
                    id: t,
                    analysis: r
                });
            } catch (e) {
                self.postMessage({
                    type: "error",
                    id: t,
                    message: String(e)
                });
            }
            return;
        }
    };
})();
