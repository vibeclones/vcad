import { c6 as c, c7 as d } from "./index-CcT_niyD.js";
import "./three-drei-DdHLxnbx.js";
import "./three-fiber-GW7QWJN8.js";
import "./three-tnxpQXqG.js";
async function p(a, n) {
  const e = { scanned: 0, migrated: 0, skipped: 0, failed: 0 };
  let i;
  try {
    i = await c();
  } catch (t) {
    return console.warn("[backfill] getAllDocuments failed, skipping IDB backfill:", t), e;
  }
  for (const t of i) {
    e.scanned++;
    const r = await s(a, t.document);
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
  if ((e.migrated > 0 || e.failed > 0) && (console.log(`[backfill] IDB: migrated=${e.migrated} skipped=${e.skipped} failed=${e.failed} of ${e.scanned}`), n && e.migrated > 0)) try {
    await n();
  } catch (t) {
    console.warn("[backfill] post-migration sync trigger failed:", t);
  }
  return e;
}
async function s(a, n) {
  return n.kind !== "legacy" ? null : l(a, n);
}
function l(a, n) {
  let e = null;
  try {
    const i = JSON.stringify({ document: n.document, parts: n.parts, consumedParts: n.consumedParts ?? {}, nextNodeId: n.nextNodeId, nextPartNum: n.nextPartNum });
    e = a.from_v1_json(i);
    const t = e.save(), r = a.load(t);
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
