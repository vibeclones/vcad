import { h as e, i as t } from "./storage-BdHlbpv-.js";
async function n(n2, i2) {
  let a = { scanned: 0, migrated: 0, skipped: 0, failed: 0 }, o;
  try {
    o = await t();
  } catch (e2) {
    return console.warn(`[backfill] getAllDocuments failed, skipping IDB backfill:`, e2), a;
  }
  for (let t2 of o) {
    a.scanned++;
    let i3 = await r(n2, t2.document);
    if (!i3) a.skipped++;
    else if (i3 === `failed`) a.failed++;
    else try {
      await e({ ...t2, document: i3, version: t2.version + 1, modifiedAt: Date.now(), syncStatus: t2.cloudId ? `pending` : `local` }), a.migrated++;
    } catch (e2) {
      console.warn(`[backfill] failed to rewrite ${t2.id}:`, e2), a.failed++;
    }
  }
  if ((a.migrated > 0 || a.failed > 0) && (console.log(`[backfill] IDB: migrated=${a.migrated} skipped=${a.skipped} failed=${a.failed} of ${a.scanned}`), i2 && a.migrated > 0)) try {
    await i2();
  } catch (e2) {
    console.warn(`[backfill] post-migration sync trigger failed:`, e2);
  }
  return a;
}
async function r(e2, t2) {
  return t2.kind === `legacy` ? i(e2, t2) : null;
}
function i(e2, t2) {
  let n2 = null;
  try {
    let r2 = JSON.stringify({ document: t2.document, parts: t2.parts, consumedParts: t2.consumedParts ?? {}, nextNodeId: t2.nextNodeId, nextPartNum: t2.nextPartNum });
    n2 = e2.from_v1_json(r2);
    let i2 = n2.save(), a = e2.load(i2);
    try {
      a.free();
    } catch {
    }
    return { kind: `crdt`, version: `0.4`, crdtBytes: i2 };
  } catch (e3) {
    return console.warn(`[backfill] legacy\u2192CRDT migration failed:`, e3), `failed`;
  } finally {
    if (n2) try {
      n2.free();
    } catch {
    }
  }
}
export {
  n as runIdbBackfill
};
