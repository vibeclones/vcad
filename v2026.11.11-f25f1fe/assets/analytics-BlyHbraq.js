import { t as e } from "./preload-helper-H3bccnwO.js";
let n;
let __tla = (async () => {
  var t = null;
  e(() => import("./module-DB2gHXQv.js").then(async (m) => {
    await m.__tla;
    return m;
  }).then((e2) => {
    t = e2.default;
  }), []);
  n = {
    documentCreated: () => t == null ? void 0 : t.capture(`document_created`),
    documentOpened: (e2) => t == null ? void 0 : t.capture(`document_opened`, {
      source: e2
    }),
    documentSaved: (e2) => t == null ? void 0 : t.capture(`document_saved`, {
      method: e2
    }),
    documentExported: (e2) => t == null ? void 0 : t.capture(`document_exported`, {
      format: e2
    }),
    exportStarted: (e2) => t == null ? void 0 : t.capture(`export_started`, {
      format: e2
    }),
    exportCompleted: (e2) => t == null ? void 0 : t.capture(`export_completed`, {
      format: e2
    }),
    templateOpened: (e2) => t == null ? void 0 : t.capture(`template_opened`, {
      template_id: e2
    }),
    primitiveAdded: (e2) => t == null ? void 0 : t.capture(`primitive_added`, {
      kind: e2
    }),
    booleanApplied: (e2) => t == null ? void 0 : t.capture(`boolean_applied`, {
      type: e2
    }),
    sketchStarted: () => t == null ? void 0 : t.capture(`sketch_started`),
    sketchCompleted: (e2) => t == null ? void 0 : t.capture(`sketch_completed`, {
      constraint_count: e2
    }),
    sketchAbandoned: (e2) => t == null ? void 0 : t.capture(`sketch_abandoned`, {
      reason: e2
    }),
    extrudeApplied: () => t == null ? void 0 : t.capture(`extrude_applied`),
    signupStarted: (e2) => t == null ? void 0 : t.capture(`signup_started`, {
      provider: e2
    }),
    signupCompleted: (e2) => t == null ? void 0 : t.capture(`signup_completed`, {
      provider: e2
    }),
    stepImported: () => t == null ? void 0 : t.capture(`step_imported`),
    aiGenerationStarted: (e2) => t == null ? void 0 : t.capture(`ai_generation_started`, {
      prompt_length: e2.length
    }),
    aiGenerationCompleted: (e2) => t == null ? void 0 : t.capture(`ai_generation_completed`, {
      duration_ms: e2
    }),
    physicsSimulationRun: () => t == null ? void 0 : t.capture(`physics_simulation_run`),
    printPanelOpened: () => t == null ? void 0 : t.capture(`print_panel_opened`),
    quotePanelOpened: () => t == null ? void 0 : t.capture(`quote_panel_opened`),
    continueHandoff: (e2, n2) => t == null ? void 0 : t.capture(`continue_handoff`, {
      host: e2,
      mode: n2
    }),
    firstCommand: (e2) => {
      if (t) {
        try {
          if (localStorage.getItem(`vcad_first_command`) != null) return;
          localStorage.setItem(`vcad_first_command`, `1`);
        } catch {
          return;
        }
        t.capture(`first_command`, {
          command_id: e2
        });
      }
    },
    commandExecuted: (e2) => t == null ? void 0 : t.capture(`command_executed`, {
      command_id: e2.id,
      command_category: e2.category ?? `uncategorized`,
      surface: e2.surface
    }),
    commandFailed: (e2) => t == null ? void 0 : t.capture(`command_failed`, {
      command_id: e2.id,
      command_category: e2.category ?? `uncategorized`,
      surface: e2.surface,
      error: e2.error.slice(0, 500)
    }),
    chunkLoadRetry: (e2, n2, r) => t == null ? void 0 : t.capture(`chunk_load_retry`, {
      chunk: e2,
      attempt: n2,
      error: r.slice(0, 500)
    }),
    chunkLoadFailed: (e2, n2, r) => t == null ? void 0 : t.capture(`chunk_load_failed`, {
      chunk: e2,
      attempts: n2,
      error: r.slice(0, 500)
    }),
    chunkLoadStaleDeploy: () => t == null ? void 0 : t.capture(`chunk_load_stale_deploy`),
    asyncBoundaryCaught: (e2, n2) => t == null ? void 0 : t.capture(`async_boundary_caught`, {
      region: e2,
      error: n2.slice(0, 500)
    }),
    asyncBoundaryReset: (e2) => t == null ? void 0 : t.capture(`async_boundary_reset`, {
      region: e2
    })
  };
})();
export {
  __tla,
  n as t
};
