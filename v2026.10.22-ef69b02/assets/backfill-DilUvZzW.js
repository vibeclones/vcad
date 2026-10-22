import { ad as c, ae as d } from "./index-DYo2o8YT.js";
import "./three-drei-B9AdtZoT.js";
import "./three-tnxpQXqG.js";
import "./three-fiber-DvYcInOp.js";
async function p(n, a) {
  const e = { scanned: 0, migrated: 0, skipped: 0, failed: 0 };
  let i;
  try {
    i = await c();
  } catch (t) {
    return console.warn("[backfill] getAllDocuments failed, skipping IDB backfill:", t), e;
  }
  for (const t of i) {
    e.scanned++;
    const r = await s(n, t.document);
    if (!r) {
      e.skipped++;
      continue;
    }
    if (r === "failed") {
      e.failed++;
      continue;
    }
    try {
      await d({ ...t, document: r, version: t.version + 1, modifiedAt: Date.now(), syncStatus: t.cloudId ? "pending" : "local" }), e.migrated++;
    } catch (o) {
      console.warn(`[backfill] failed to rewrite ${t.id}:`, o), e.failed++;
    }
  }
  if ((e.migrated > 0 || e.failed > 0) && (console.log(`[backfill] IDB: migrated=${e.migrated} skipped=${e.skipped} failed=${e.failed} of ${e.scanned}`), a && e.migrated > 0)) try {
    await a();
  } catch (t) {
    console.warn("[backfill] post-migration sync trigger failed:", t);
  }
  return e;
}
async function s(n, a) {
  return a.kind !== "legacy" ? null : l(n, a);
}
function l(n, a) {
  let e = null;
  try {
    const i = JSON.stringify({ document: a.document, parts: a.parts, consumedParts: a.consumedParts ?? {}, nextNodeId: a.nextNodeId, nextPartNum: a.nextPartNum });
    e = n.from_v1_json(i);
    const t = e.save(), r = n.load(t);
    try {
      r.free();
    } catch {
    }
    return { kind: "crdt", version: "0.4", crdtBytes: t };
  } catch (i) {
    return console.warn("[backfill] legacy\u2192CRDT migration failed:", i), "failed";
  } finally {
    if (e) try {
      e.free();
    } catch {
    }
  }
}
export {
  l as migrateLegacyToCrdt,
  p as runIdbBackfill
};
