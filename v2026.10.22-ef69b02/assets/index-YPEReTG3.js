import { b as g, N as V, aD as R, aR as T, aS as P, aT as U, aU as E, d as M } from "./index-DYo2o8YT.js";
import { aV as G, aW as J, aX as K, aY as Z, aZ as Q, a_ as ee, a$ as te, b0 as se, b1 as ae, b2 as ne, A as re, D as ie, b3 as oe, b4 as le, b5 as ce, b6 as de, b7 as ue, b8 as xe, b9 as he, ba as be, v as me, aE as pe, aB as fe, bb as ge, bc as ye, bd as ke, be as ze, bf as ve, bg as je, aF as Se, w as Ne, bh as we, bi as Ae, bj as Ce, bk as De, z as Ve, aa as Re, x as Te, bl as Pe, y as Ue, bm as Ee, bn as Fe, bo as _e, bp as Le, e as Me, bq as Ie, br as $e } from "./index-DYo2o8YT.js";
import { u as Oe } from "./useRequireAuth-BNPIJ-ZJ.js";
import { b as n, k as e } from "./three-fiber-DvYcInOp.js";
import { j as He } from "./xr-collab-D1EUhp3o.js";
import "./three-drei-B9AdtZoT.js";
import "./three-tnxpQXqG.js";
function O({ feature: l, children: a, fallback: d, as: r = "div", className: x }) {
  const c = g((i) => i.user), u = g((i) => i.isAnonymous), [h, o] = n.useState(false);
  if (!V()) return e.jsx(e.Fragment, { children: a });
  if (c && !u) return e.jsx(e.Fragment, { children: a });
  const b = (i) => {
    i.preventDefault(), i.stopPropagation(), o(true);
  };
  return e.jsxs(e.Fragment, { children: [e.jsx(r, { onClick: b, className: x, style: { cursor: "pointer" }, children: d ?? a }), e.jsx(R, { open: h, onOpenChange: o, feature: l })] });
}
function q({ localDocId: l, cloudDocId: a, onRestore: d }) {
  const [r, x] = n.useState([]), [c, u] = n.useState(true), [h, o] = n.useState(null), [b, i] = n.useState(null), [m, z] = n.useState("named"), [N, p] = n.useState(null), [v, y] = n.useState(""), f = n.useCallback(async () => {
    if (!a) {
      u(false);
      return;
    }
    u(true), o(null);
    try {
      const t = await T(a);
      x(t);
    } catch (t) {
      o(t.message);
    } finally {
      u(false);
    }
  }, [a]);
  n.useEffect(() => {
    f();
  }, [f]);
  const w = async (t) => {
    i(t.id);
    try {
      await E(l, t), d == null ? void 0 : d();
    } catch (s) {
      o(s.message);
    } finally {
      i(null);
    }
  }, j = async (t) => {
    const s = v.trim();
    if (!s) {
      p(null);
      return;
    }
    try {
      await P(t, s), p(null), y(""), await f();
    } catch (D) {
      o(D.message);
    }
  }, A = async (t) => {
    try {
      await U(t), await f();
    } catch (s) {
      o(s.message);
    }
  }, C = (t) => {
    const s = Math.floor((Date.now() - t) / 1e3);
    return s < 60 ? "just now" : s < 3600 ? `${Math.floor(s / 60)} minutes ago` : s < 86400 ? `${Math.floor(s / 3600)} hours ago` : s < 604800 ? `${Math.floor(s / 86400)} days ago` : new Date(t).toLocaleDateString();
  };
  if (!a) return e.jsxs("div", { className: "p-4", children: [e.jsx("h3", { className: "font-semibold mb-3 text-zinc-900 dark:text-zinc-100", children: "Version History" }), e.jsx("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: "Enable cloud sync to access version history." }), e.jsx("p", { className: "text-xs text-zinc-400 dark:text-zinc-500 mt-2", children: "Your document changes will be automatically versioned when synced to the cloud." })] });
  const S = r.filter((t) => t.label), k = m === "named" ? S : r;
  return e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [e.jsx("h3", { className: "font-semibold text-zinc-900 dark:text-zinc-100", children: "Version History" }), e.jsxs("div", { className: "flex gap-1 text-xs", children: [e.jsxs("button", { type: "button", onClick: () => z("named"), className: m === "named" ? "px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" : "px-2 py-1 rounded text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200", children: ["Named (", S.length, ")"] }), e.jsx("button", { type: "button", onClick: () => z("all"), className: m === "all" ? "px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" : "px-2 py-1 rounded text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200", children: "All history" })] })] }), c && e.jsxs("div", { className: "flex items-center gap-2 text-sm text-zinc-500", children: [e.jsx("span", { className: "animate-spin", children: "\u231B" }), "Loading versions..."] }), h && e.jsx("div", { className: "text-sm text-red-600 dark:text-red-400 mb-3", children: h }), !c && k.length === 0 && e.jsx("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: m === "named" ? "No named versions yet. Use \u201CAll history\u201D and click \u201CLabel\u2026\u201D on a row to promote it to a named waypoint." : "No previous versions yet. Versions are created automatically when you save changes." }), k.length > 0 && e.jsx("div", { className: "space-y-1", children: k.map((t) => e.jsxs("div", { className: "flex items-center justify-between py-2 px-2 -mx-2 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800", children: [e.jsxs("div", { className: "min-w-0 flex-1", children: [t.label ? e.jsx("div", { className: "text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate", children: t.label }) : e.jsxs("div", { className: "text-sm font-medium text-zinc-900 dark:text-zinc-100", children: ["Version ", t.versionNumber] }), e.jsxs("div", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: [t.label && `v${t.versionNumber} \xB7 `, C(t.deviceModifiedAt)] })] }), e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [N === t.id ? e.jsxs(e.Fragment, { children: [e.jsx("input", { autoFocus: true, value: v, onChange: (s) => y(s.target.value), onKeyDown: (s) => {
    s.key === "Enter" && j(t.id), s.key === "Escape" && p(null);
  }, placeholder: "v1 pre-review", className: "text-xs px-1.5 py-0.5 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100" }), e.jsx("button", { type: "button", onClick: () => void j(t.id), className: "text-xs text-blue-600 dark:text-blue-400", children: "Save" })] }) : t.label ? e.jsx("button", { type: "button", onClick: () => void A(t.id), className: "text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200", title: "Remove label (auto-version row is preserved)", children: "Unlabel" }) : e.jsx("button", { type: "button", onClick: () => {
    p(t.id), y("");
  }, className: "text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200", children: "Label\u2026" }), e.jsx("button", { onClick: () => w(t), disabled: b === t.id, className: "text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 disabled:opacity-50", children: b === t.id ? "Restoring..." : "Restore" })] })] }, t.id)) })] });
}
const F = {};
function _() {
  return (typeof import.meta < "u" ? F == null ? void 0 : F.VITE_API_URL : "") || "";
}
async function H(l) {
  const a = g.getState().session;
  if (!a) throw new Error("Authentication required for AI features");
  const d = _(), r = await fetch(`${d}/api/generate`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${a.access_token}` }, body: JSON.stringify({ prompt: l }) });
  if (!r.ok) {
    const c = await r.json().catch(() => ({ error: "Unknown error" }));
    throw new Error(c.error || `AI request failed: ${r.status}`);
  }
  return (await r.json()).ir;
}
function W() {
  return !!g.getState().session;
}
export {
  R as AuthModal,
  G as AuthProvider,
  O as FeatureGate,
  J as SignInButton,
  K as UserMenu,
  q as VersionHistoryPanel,
  Z as applyAuthCallback,
  Q as checkUsernameAvailable,
  ee as clearThreadMessages,
  te as cloudContentToVcadFile,
  se as configureStorage,
  ae as configureVersionHistoryStorage,
  ne as createProfile,
  re as createShare,
  ie as createShareRedirect,
  oe as debouncedSync,
  le as enableCloudSync,
  ce as ensureSession,
  de as fetchCloudDocument,
  ue as fetchPublicDocument,
  xe as fetchSharedDocument,
  he as getAuthRedirectUrl,
  be as getCloudIdForDocument,
  me as getMyProfile,
  pe as getProfileByUsername,
  fe as getSupabase,
  T as getVersionHistory,
  ge as hydrateThread,
  ye as initSyncListeners,
  W as isAIAvailable,
  ke as isApplyingRemoteOps,
  V as isAuthEnabled,
  ze as joinCollabChannel,
  He as joinXRCollabChannel,
  P as labelVersion,
  ve as listCloudDocuments,
  je as listNamedVersions,
  Se as listPublicDocuments,
  Ne as listSharesForDocument,
  we as loadDeltas,
  Ae as loadOrCreateThread,
  Ce as lookupShareRedirect,
  De as persistToolResult,
  Ve as publishDocument,
  Re as requireSupabase,
  E as restoreVersion,
  Te as revokeShare,
  Pe as signInWithOAuthPopup,
  Ue as slugify,
  Ee as subscribeToThread,
  H as textToCAD,
  Fe as triggerSync,
  U as unlabelVersion,
  _e as updateProfile,
  Le as useAuth,
  g as useAuthStore,
  Oe as useRequireAuth,
  Me as useSignInDelightStore,
  M as useSyncStore,
  Ie as useUserPreferences,
  $e as vcadFileToCloudContent
};
